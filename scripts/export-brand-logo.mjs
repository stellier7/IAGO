import fs from "node:fs";
import path from "node:path";
import opentype from "opentype.js";

const FONT_PATH = process.argv[2] ?? "/tmp/Syne-Bold.ttf";
const OUT_DIR = path.resolve("brand");

const INK = "#0A0A0A";
const CORAL = "#E8734A";
const BONE = "#F4F1EA";

function textToPath(font, text, x, y, size) {
  const path = font.getPath(text, x, y, size);
  return path.toPathData(2);
}

function buildWordmarkSvg({
  id,
  width,
  height,
  paths,
  bg = "none",
}) {
  const pathEls = paths
    .map(
      (p) =>
        `  <path fill="${p.fill}" d="${p.d}" />`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width * 10} ${height * 10}" id="${id}">
  <title>IAGO Digital wordmark</title>
  ${bg !== "none" ? `<rect width="100%" height="100%" fill="${bg}" />` : ""}
${pathEls}
</svg>
`;
}

function layoutWordmark(font, size, yBaseline) {
  const parts = [
    { text: "iA", fill: INK },
    { text: "GO", fill: CORAL },
    { text: ".", fill: CORAL },
  ];

  let x = 0;
  const paths = [];
  for (const part of parts) {
    const d = textToPath(font, part.text, x, yBaseline, size);
    const advance = font.getAdvanceWidth(part.text, size);
    paths.push({ fill: part.fill, d });
    x += advance;
  }
  const totalWidth = x;
  return { paths, totalWidth, height: size * 1.15 };
}

function layoutLockup(font, mainSize, subSize, gap) {
  const mainY = mainSize;
  const main = layoutWordmark(font, mainSize, mainY);
  const digital = "Digital";
  const subWidth = font.getAdvanceWidth(digital, subSize);
  const subX = 0;
  const subY = mainY + gap + subSize;
  const subPath = {
    fill: CORAL,
    d: textToPath(font, digital, subX, subY, subSize),
  };
  const totalWidth = Math.max(main.totalWidth, subWidth);
  const totalHeight = subY + subSize * 0.2;
  return {
    paths: [...main.paths, subPath],
    totalWidth,
    totalHeight,
  };
}

function normalizeSvg(layout, padding, id, bg) {
  const w = layout.totalWidth + padding * 2;
  const h = layout.totalHeight + padding * 2;
  const shifted = layout.paths.map((p) => ({
    ...p,
    d: p.d.replace(/([MLCQSTV])(-?\d)/g, (_, cmd, n) => {
      return cmd + n;
    }),
  }));
  // Shift all paths by translating group
  const viewW = w;
  const viewH = h;
  const mmW = viewW / 10;
  const mmH = viewH / 10;

  const pathEls = shifted
    .map((p) => `  <path fill="${p.fill}" d="${p.d}" />`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${mmW.toFixed(2)}mm" height="${mmH.toFixed(2)}mm" viewBox="0 0 ${viewW.toFixed(2)} ${viewH.toFixed(2)}" id="${id}">
  <title>IAGO Digital</title>
  ${bg !== "none" ? `<rect width="100%" height="100%" fill="${bg}" />` : ""}
  <g transform="translate(${padding}, ${padding})">
${pathEls}
  </g>
</svg>
`;
}

const fontBuffer = fs.readFileSync(FONT_PATH);
const font = opentype.parse(fontBuffer.buffer);
fs.mkdirSync(OUT_DIR, { recursive: true });

const wordmarkSize = 72;
const wordmark = layoutWordmark(font, wordmarkSize, wordmarkSize);
const wordmarkSvg = normalizeSvg(
  { paths: wordmark.paths, totalWidth: wordmark.totalWidth, totalHeight: wordmark.height },
  4,
  "iago-wordmark",
  "none",
);
fs.writeFileSync(path.join(OUT_DIR, "iago-wordmark.svg"), wordmarkSvg);

const wordmarkLight = layoutWordmark(font, wordmarkSize, wordmarkSize);
const lightPaths = wordmarkLight.paths.map((p, i) =>
  i === 0 ? { ...p, fill: BONE } : p,
);
const wordmarkLightSvg = normalizeSvg(
  {
    paths: lightPaths,
    totalWidth: wordmarkLight.totalWidth,
    totalHeight: wordmarkLight.height,
  },
  4,
  "iago-wordmark-light",
  "none",
);
fs.writeFileSync(path.join(OUT_DIR, "iago-wordmark-on-dark.svg"), wordmarkLightSvg);

const lockup = layoutLockup(font, 80, 44, 12);
const lockupSvg = normalizeSvg(lockup, 6, "iago-lockup", "none");
fs.writeFileSync(path.join(OUT_DIR, "iago-lockup.svg"), lockupSvg);

// NFC card guide: 85.6 x 54 mm, logo centered top
const cardW = 85.6;
const cardH = 54;
const logoScale = 0.42;
const logoW = (wordmark.totalWidth + 8) * logoScale;
const logoH = (wordmark.height + 8) * logoScale;
const logoX = (cardW * 10 - logoW) / 2;
const logoY = 8;

const nfcCardSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${cardW}mm" height="${cardH}mm" viewBox="0 0 ${cardW * 10} ${cardH * 10}" id="nfc-card-template">
  <title>IAGO NFC card — print template</title>
  <rect width="100%" height="100%" fill="${BONE}" />
  <g transform="translate(${logoX}, ${logoY}) scale(${logoScale})">
${wordmark.paths.map((p) => `    <path fill="${p.fill}" d="${p.d}" />`).join("\n")}
  </g>
  <rect x="0" y="0" width="${cardW * 10}" height="${cardH * 10}" fill="none" stroke="${INK}" stroke-width="0.5" stroke-opacity="0.15" />
  <!-- Safe zone ~3mm inset -->
  <rect x="30" y="30" width="${cardW * 10 - 60}" height="${cardH * 10 - 60}" fill="none" stroke="${CORAL}" stroke-width="0.25" stroke-dasharray="4 4" stroke-opacity="0.35" />
</svg>
`;
fs.writeFileSync(path.join(OUT_DIR, "nfc-card-top-template.svg"), nfcCardSvg);

console.log("Wrote brand assets to", OUT_DIR);
