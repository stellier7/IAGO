#!/usr/bin/env python3
"""Export the IAGO wordmark as outlined SVG + print-ready NFC card art.

The site logo is type, not a bitmap: Syne Bold, "iA" in ink/bone and "GO"
in coral, matching Nav and Hero. This script converts that wordmark to
outlined paths so a print shop does not need the font file.
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import urllib.request
from dataclasses import dataclass
from pathlib import Path

from fontTools.misc.transform import Transform
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

INK = "#0A0A0A"
CORAL = "#E8734A"
BONE = "#F4F1EA"

# Tailwind tracking-tightest on the site wordmark.
TRACKING_EM = -0.045

# ISO/IEC 7810 ID-1 (standard NFC / credit-card size).
CARD_W_MM = 85.60
CARD_H_MM = 53.98
BLEED_MM = 3.0

FONT_URL = (
    "https://github.com/google/fonts/raw/main/ofl/syne/Syne%5Bwght%5D.ttf"
)

CORAL_LETTERS = frozenset({"G", "O"})
REPO_ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = REPO_ROOT / "brand" / "nfc-card"
CACHE_DIR = Path("/tmp/iago-brand")
RESVG_REQUIRE = str(CACHE_DIR / "node_modules" / "@resvg" / "resvg-js")


@dataclass
class PlacedGlyph:
    char: str
    d: str
    color: str
    xmin: float
    ymin: float
    xmax: float
    ymax: float


def load_syne_bold(cache_dir: Path) -> TTFont:
    cache_dir.mkdir(parents=True, exist_ok=True)
    variable_path = cache_dir / "Syne-variable.ttf"
    bold_path = cache_dir / "Syne-Bold.ttf"
    if not variable_path.exists():
        urllib.request.urlretrieve(FONT_URL, variable_path)
    if not bold_path.exists():
        font = TTFont(variable_path)
        instantiateVariableFont(font, {"wght": 700}, inplace=True)
        font.save(bold_path)
    return TTFont(bold_path)


def split_contours(recording: list) -> list[list]:
    contours: list[list] = []
    current: list = []
    for op, args in recording:
        current.append((op, args))
        if op in ("closePath", "endPath"):
            contours.append(current)
            current = []
    if current:
        contours.append(current)
    return contours


def contour_ymax(contour: list) -> float:
    ys = []
    for _op, args in contour:
        for point in args:
            if isinstance(point, tuple) and len(point) >= 2:
                ys.append(point[1])
    return max(ys) if ys else float("-inf")


def stem_recording(glyph_set, name: str, drop_tittle: bool) -> list:
    rec = RecordingPen()
    glyph_set[name].draw(rec)
    if not drop_tittle:
        return rec.value
    contours = split_contours(rec.value)
    if len(contours) < 2:
        return rec.value
    tittle = max(range(len(contours)), key=lambda i: contour_ymax(contours[i]))
    kept = []
    for index, contour in enumerate(contours):
        if index != tittle:
            kept.extend(contour)
    return kept


def recording_bounds(recording: list) -> tuple[float, float, float, float]:
    xs: list[float] = []
    ys: list[float] = []
    for _op, args in recording:
        for point in args:
            if isinstance(point, tuple) and len(point) >= 2:
                xs.append(point[0])
                ys.append(point[1])
    if not xs:
        return (0.0, 0.0, 0.0, 0.0)
    return (min(xs), min(ys), max(xs), max(ys))


def replay(recording: list, pen) -> None:
    for op, args in recording:
        getattr(pen, op)(*args)


def layout_word(
    font: TTFont,
    text: str,
    size_mm: float,
    origin_x: float,
    baseline_y: float,
    color_for,
    tracking_em: float = TRACKING_EM,
    drop_i_tittle: bool = False,
) -> list[PlacedGlyph]:
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    units = font["head"].unitsPerEm
    scale = size_mm / units
    tracking = tracking_em * size_mm
    placed: list[PlacedGlyph] = []
    x = origin_x
    last_index = len(text) - 1

    for index, char in enumerate(text):
        if ord(char) not in cmap:
            continue
        name = cmap[ord(char)]
        glyph = glyph_set[name]
        drop_tittle = drop_i_tittle and char == "i"
        recording = stem_recording(glyph_set, name, drop_tittle)
        xmin, ymin, xmax, ymax = recording_bounds(recording)
        advance = glyph.width * scale
        if not recording:
            x += advance
            continue
        pen = SVGPathPen(glyph_set)
        transform = Transform().translate(x, baseline_y).scale(scale, -scale)
        replay(recording, TransformPen(pen, transform))
        placed.append(
            PlacedGlyph(
                char=char,
                d=round_path(pen.getCommands()),
                color=color_for(char),
                xmin=x + xmin * scale,
                ymin=baseline_y - ymax * scale,
                xmax=x + xmax * scale,
                ymax=baseline_y - ymin * scale,
            )
        )
        x += advance
        if index < last_index:
            x += tracking
    return placed


def union_bounds(glyphs: list[PlacedGlyph]) -> tuple[float, float, float, float]:
    return (
        min(g.xmin for g in glyphs),
        min(g.ymin for g in glyphs),
        max(g.xmax for g in glyphs),
        max(g.ymax for g in glyphs),
    )


def fmt(value: float) -> str:
    text = f"{value:.3f}".rstrip("0").rstrip(".")
    return text if text else "0"


def round_path(d: str) -> str:
    def repl(match: re.Match[str]) -> str:
        return fmt(float(match.group(0)))

    return re.sub(r"-?\d+\.\d+", repl, d)


def path_elements(glyphs: list[PlacedGlyph], dx: float = 0.0, dy: float = 0.0) -> str:
    parts = []
    transform_attr = (
        f' transform="translate({fmt(dx)} {fmt(dy)})"' if dx or dy else ""
    )
    for glyph in glyphs:
        parts.append(
            f'  <path{transform_attr} fill="{glyph.color}" d="{glyph.d}"/>'
        )
    return "\n".join(parts)


def svg_document(
    width: float,
    height: float,
    body: str,
    background: str | None = None,
) -> str:
    bg = (
        f'  <rect width="100%" height="100%" fill="{background}"/>\n'
        if background
        else ""
    )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'width="{fmt(width)}mm" height="{fmt(height)}mm" '
        f'viewBox="0 0 {fmt(width)} {fmt(height)}">\n'
        f"{bg}{body}\n"
        "</svg>\n"
    )


def wordmark_glyphs(
    font: TTFont,
    iago_size: float,
    digital_size: float,
    gap: float,
    iago_color,
    digital_color: str,
) -> list[PlacedGlyph]:
    iago = layout_word(
        font, "iAGO", iago_size, 0, 0, iago_color, drop_i_tittle=True
    )
    digital_probe = layout_word(
        font, "Digital", digital_size, 0, 0, lambda _ch: digital_color
    )
    iago_box = union_bounds(iago)
    digital_box = union_bounds(digital_probe)
    iago_width = iago_box[2] - iago_box[0]
    digital_width = digital_box[2] - digital_box[0]
    origin_x = iago_box[0] + (iago_width - digital_width) / 2 - digital_box[0]
    baseline_y = (iago_box[3] + gap) - digital_box[1]
    digital = layout_word(
        font,
        "Digital",
        digital_size,
        origin_x,
        baseline_y,
        lambda _ch: digital_color,
    )
    return iago + digital


def write_svg(path: Path, contents: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(contents)
    print(f"wrote {path}")


def rasterize(svg_path: Path, png_path: Path, width_px: int) -> None:
    payload = {
        "svg": str(svg_path),
        "png": str(png_path),
        "width": width_px,
        "resvg": RESVG_REQUIRE,
    }
    script = """
const fs = require('fs');
const payload = JSON.parse(process.argv[1]);
const { Resvg } = require(payload.resvg);
const svg = fs.readFileSync(payload.svg);
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: payload.width },
});
fs.writeFileSync(payload.png, resvg.render().asPng());
"""
    subprocess.check_call(["node", "-e", script, json.dumps(payload)])
    print(f"wrote {png_path} ({width_px}px wide)")


def mm_to_px(mm: float, dpi: int) -> int:
    return int(round(mm / 25.4 * dpi))


def build_wordmark_svg(
    font: TTFont,
    iago_ink: str,
    digital: str,
    background: str | None,
    padding: float,
    iago_size: float = 42.0,
    digital_size: float = 18.0,
    gap: float = 3.2,
) -> str:
    glyphs = wordmark_glyphs(
        font,
        iago_size,
        digital_size,
        gap,
        lambda ch: CORAL if ch in CORAL_LETTERS else iago_ink,
        digital,
    )
    xmin, ymin, xmax, ymax = union_bounds(glyphs)
    width = xmax - xmin + padding * 2
    height = ymax - ymin + padding * 2
    body = path_elements(glyphs, padding - xmin, padding - ymin)
    return svg_document(width, height, body, background=background)


def build_card_svg(
    font: TTFont,
    background: str,
    iago_ink: str,
    digital: str,
    bleed: float = 0.0,
) -> str:
    width = CARD_W_MM + bleed * 2
    height = CARD_H_MM + bleed * 2
    glyphs = wordmark_glyphs(
        font,
        20.0,
        8.2,
        1.8,
        lambda ch: CORAL if ch in CORAL_LETTERS else iago_ink,
        digital,
    )
    xmin, ymin, xmax, ymax = union_bounds(glyphs)
    mark_w = xmax - xmin
    mark_h = ymax - ymin
    dx = width / 2 - (xmin + mark_w / 2)
    dy = height / 2 - (ymin + mark_h / 2)
    return svg_document(
        width, height, path_elements(glyphs, dx, dy), background=background
    )


def main() -> int:
    if OUT_DIR.exists():
        for child in OUT_DIR.iterdir():
            child.unlink()
    else:
        OUT_DIR.mkdir(parents=True)

    font = load_syne_bold(CACHE_DIR)

    write_svg(
        OUT_DIR / "logo-wordmark-on-dark.svg",
        build_wordmark_svg(font, BONE, CORAL, None, padding=4),
    )
    write_svg(
        OUT_DIR / "logo-wordmark-on-light.svg",
        build_wordmark_svg(font, INK, CORAL, None, padding=4),
    )
    write_svg(
        OUT_DIR / "nfc-card-front-dark.svg",
        build_card_svg(font, INK, BONE, CORAL),
    )
    write_svg(
        OUT_DIR / "nfc-card-front-light.svg",
        build_card_svg(font, BONE, INK, CORAL),
    )
    write_svg(
        OUT_DIR / "nfc-card-front-dark-bleed.svg",
        build_card_svg(font, INK, BONE, CORAL, bleed=BLEED_MM),
    )
    write_svg(
        OUT_DIR / "nfc-card-front-light-bleed.svg",
        build_card_svg(font, BONE, INK, CORAL, bleed=BLEED_MM),
    )
    write_svg(
        OUT_DIR / "nfc-sticker-40mm-dark.svg",
        build_wordmark_svg(
            font,
            BONE,
            CORAL,
            INK,
            padding=6.5,
            iago_size=14.5,
            digital_size=6.2,
            gap=1.4,
        ),
    )

    rasterize(
        OUT_DIR / "logo-wordmark-on-dark.svg",
        OUT_DIR / "logo-wordmark-on-dark.png",
        2400,
    )
    rasterize(
        OUT_DIR / "logo-wordmark-on-light.svg",
        OUT_DIR / "logo-wordmark-on-light.png",
        2400,
    )
    # Obvious filenames for overlay print: true RGBA, no background.
    shutil.copy2(
        OUT_DIR / "logo-wordmark-on-light.png",
        OUT_DIR / "iago-logo-transparente.png",
    )
    shutil.copy2(
        OUT_DIR / "logo-wordmark-on-light.svg",
        OUT_DIR / "iago-logo-transparente.svg",
    )
    shutil.copy2(
        OUT_DIR / "logo-wordmark-on-dark.png",
        OUT_DIR / "iago-logo-transparente-letras-claras.png",
    )
    shutil.copy2(
        OUT_DIR / "logo-wordmark-on-dark.svg",
        OUT_DIR / "iago-logo-transparente-letras-claras.svg",
    )
    print(f"wrote {OUT_DIR / 'iago-logo-transparente.png'}")
    print(f"wrote {OUT_DIR / 'iago-logo-transparente-letras-claras.png'}")
    rasterize(
        OUT_DIR / "nfc-card-front-dark.svg",
        OUT_DIR / "nfc-card-front-dark-300dpi.png",
        mm_to_px(CARD_W_MM, 300),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-dark.svg",
        OUT_DIR / "nfc-card-front-dark-600dpi.png",
        mm_to_px(CARD_W_MM, 600),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-light.svg",
        OUT_DIR / "nfc-card-front-light-300dpi.png",
        mm_to_px(CARD_W_MM, 300),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-light.svg",
        OUT_DIR / "nfc-card-front-light-600dpi.png",
        mm_to_px(CARD_W_MM, 600),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-dark-bleed.svg",
        OUT_DIR / "nfc-card-front-dark-300dpi-bleed.png",
        mm_to_px(CARD_W_MM + BLEED_MM * 2, 300),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-dark-bleed.svg",
        OUT_DIR / "nfc-card-front-dark-600dpi-bleed.png",
        mm_to_px(CARD_W_MM + BLEED_MM * 2, 600),
    )
    rasterize(
        OUT_DIR / "nfc-card-front-light-bleed.svg",
        OUT_DIR / "nfc-card-front-light-600dpi-bleed.png",
        mm_to_px(CARD_W_MM + BLEED_MM * 2, 600),
    )
    rasterize(
        OUT_DIR / "nfc-sticker-40mm-dark.svg",
        OUT_DIR / "nfc-sticker-40mm-dark-600dpi.png",
        mm_to_px(40, 600),
    )
    print("done")
    return 0


if __name__ == "__main__":
    sys.exit(main())
