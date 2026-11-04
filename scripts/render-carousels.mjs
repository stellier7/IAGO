/**
 * Renders IAGO Digital carousel slides (1080×1350) plus calendario.md.
 *
 *   NODE_PATH=/tmp/social-render/node_modules node scripts/render-carousels.mjs
 */
import { createRequire } from "node:module";
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "content", "social");
const fontDir = path.join(outDir, "fonts");
const chromePath = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";

const carousels = [
  {
    id: "web",
    name: "Para qué sirve una página web",
    where: "Carrusel de 4 · Feed IG + Facebook",
    caption: `Cerraste el negocio. Alguien todavía quería comprarte.

Una página web sirve para que esa persona vea qué vendes, cuánto cuesta y cómo escribirte, aunque el local ya esté cerrado.

Si esa página no existe, le compra al que sí aparece.

wa.me/50489809800`,
    tags: ["IAGODigital", "PaginaWeb", "Honduras", "Pymes", "Ventas"],
    slides: [
      {
        file: "web-01.png",
        theme: "ink",
        role: "cover",
        kicker: "Esta noche",
        title: "Cerraste\nel negocio.",
        body: "Alguien todavía quería comprarte.",
      },
      {
        file: "web-02.png",
        theme: "bone",
        role: "point",
        kicker: "Las 11 de la noche",
        title: "El local\nya no contestaba.",
        body: "No pudo ver lo que vendes. No pudo preguntar el precio. No supo cómo pedirlo.",
      },
      {
        file: "web-03.png",
        theme: "ink",
        role: "point",
        kicker: "Para eso sirve",
        title: "Una página\nque no cierra.",
        body: "Ahí ven qué vendes, cuánto cuesta y cómo escribirte. Aunque tú ya estés en la casa.",
      },
      {
        file: "web-04.png",
        theme: "coral",
        role: "cta",
        kicker: "El que sí aparece",
        title: "Si no está,\nle compran a otro.",
        body: "Armamos esa página para tu negocio. Sigue abierta cuando tú ya cerraste.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
  {
    id: "seo",
    name: "Qué es el SEO",
    where: "Carrusel de 4 · Feed IG + Facebook",
    caption: `Alguien buscó en Google exactamente lo que tú vendes. Le salió otro.

SEO es aparecer cuando la gente ya está buscando. Hoy también se lo preguntan a ChatGPT: “recomiéndame uno”. Si la inteligencia artificial no te conoce, no te nombra.

Te posicionamos en Google y en IA como ChatGPT.

wa.me/50489809800`,
    tags: ["IAGODigital", "SEO", "ChatGPT", "Google", "Honduras"],
    slides: [
      {
        file: "seo-01.png",
        theme: "ink",
        role: "cover",
        kicker: "Una búsqueda",
        title: "Buscó lo que\ntú vendes.",
        body: "En Google le salió otro.\n*¿Por qué?*",
      },
      {
        file: "seo-02.png",
        theme: "bone",
        role: "point",
        kicker: "Qué es el SEO",
        title: "Aparecer cuando\nya te buscan.",
        body: "Escriben tu oficio y tu ciudad. Google muestra pocos negocios. Si no estás en esa lista, ni te consideran.",
      },
      {
        file: "seo-03.png",
        theme: "ink",
        role: "point",
        kicker: "Ya no es solo Google",
        title: "También se lo\npiden a ChatGPT.",
        body: "“Recomiéndame uno en Honduras.” Si la inteligencia artificial no te conoce, recomienda a otro.",
      },
      {
        file: "seo-04.png",
        theme: "coral",
        role: "cta",
        kicker: "Los dos lugares",
        title: "Google\ny las IA.",
        body: "Te posicionamos en los dos. Para que la próxima búsqueda te encuentre a ti.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
  {
    id: "agente",
    name: "Un empleado más, no solo un bot",
    where: "Carrusel de 4 · Feed IG + Facebook",
    caption: `¿Otra vez la misma pregunta? ¿Otra vez te dejaron en visto? ¿Y cuando quieres escribirle a alguien, no sabes a quién?

Un bot solo responde. Un agente hace el trabajo: contesta, anota al cliente, da seguimiento, y ayuda con inventario y servicio al cliente.

Es un empleado más.

wa.me/50489809800`,
    tags: ["IAGODigital", "Automatizacion", "WhatsApp", "CRM", "Honduras"],
    slides: [
      {
        file: "agente-01.png",
        theme: "ink",
        role: "cover",
        kicker: "Otra vez",
        title: "¿La misma\npregunta?",
        body: "Y después te dejan en visto.",
      },
      {
        file: "agente-02.png",
        theme: "bone",
        role: "point",
        kicker: "El otro problema",
        title: "¿A quién\nle escribes?",
        body: "Quieres dar seguimiento. El chat se perdió. Ya no sabes quién preguntó y quién iba a comprar.",
      },
      {
        file: "agente-03.png",
        theme: "ink",
        role: "point",
        kicker: "Más que un bot",
        title: "Un agente.\nUn empleado más.",
        body: "Un bot suelta una respuesta y se queda ahí. Un agente hace tareas por ti, todo el día.",
      },
      {
        file: "agente-04.png",
        theme: "coral",
        role: "cta",
        kicker: "Qué puede hacer",
        title: "El trabajo\nque se repite.",
        body: "Contesta.\nAnota cada cliente.\nLes escribe si no respondieron.\nAyuda con inventario y servicio.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
];



const fontData = new Map();

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rich(value) {
  return escapeHtml(value)
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replaceAll("\n", "<br>");
}

function fontFaceCss() {
  const faces = [
    ["Syne", "syne-700.woff2", 700],
    ["DM Sans", "dm-sans-400.woff2", 400],
    ["DM Sans", "dm-sans-500.woff2", 500],
    ["DM Sans", "dm-sans-600.woff2", 600],
  ];
  return faces
    .map(([family, file, weight]) => {
      const data = fontData.get(file);
      return `@font-face{font-family:"${family}";src:url("data:font/woff2;base64,${data}") format("woff2");font-weight:${weight};font-style:normal;font-display:block;}`;
    })
    .join("\n");
}

function titleSize(title) {
  const plain = title.replaceAll("*", "");
  const longest = Math.max(...plain.split("\n").map((line) => line.length));
  if (longest >= 18) return 72;
  if (longest >= 14) return 80;
  return 92;
}

function dots(count, index, theme) {
  return `<div class="dots" aria-hidden="true">${Array.from({ length: count }, (_, i) => {
    const on = i === index ? " on" : "";
    return `<span class="${theme}${on}"></span>`;
  }).join("")}</div>`;
}

function htmlFor(slide, index, total) {
  const size = titleSize(slide.title);
  const hint =
    slide.role === "cta"
      ? ""
      : `<p class="hint">Desliza</p>`;
  const pill = slide.pill ? `<p class="pill">${escapeHtml(slide.pill)}</p>` : "";
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <style>
    ${fontFaceCss()}
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .card {
      width: 1080px;
      height: 1350px;
      padding: 76px 80px 64px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .theme-ink {
      background:
        radial-gradient(820px 560px at 110% -8%, rgba(232,115,74,0.28), transparent 58%),
        #0A0A0A;
      color: #F4F1EA;
      --muted: #B7B4AC;
      --em: #E8734A;
      --line: rgba(244,241,234,0.22);
    }
    .theme-bone {
      background:
        radial-gradient(720px 520px at -12% 108%, rgba(232,115,74,0.16), transparent 55%),
        #F4F1EA;
      color: #0A0A0A;
      --muted: #5C5A55;
      --em: #E8734A;
      --line: rgba(10,10,10,0.16);
    }
    .theme-coral {
      background:
        radial-gradient(860px 560px at 100% 0%, rgba(255,255,255,0.2), transparent 52%),
        #E8734A;
      color: #fff;
      --muted: rgba(255,255,255,0.88);
      --em: #0A0A0A;
      --line: rgba(255,255,255,0.45);
    }
    .top, .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .brand, h1, .pill {
      font-family: "Syne", sans-serif;
      font-weight: 700;
      letter-spacing: -0.045em;
    }
    .brand { font-size: 42px; line-height: 1; }
    .brand em, .kicker, .count { font-style: normal; color: var(--em); }
    .word {
      margin-left: 10px;
      font-size: 22px;
      letter-spacing: -0.03em;
      color: var(--em);
    }
    .count, .kicker, .body, .hint, .dots {
      font-family: "DM Sans", sans-serif;
    }
    .count {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0.08em;
    }
    .stack {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 em, .body em { font-style: normal; color: var(--em); }
    .kicker {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    h1 {
      margin-top: 22px;
      font-size: ${size}px;
      line-height: 0.9;
      letter-spacing: -0.05em;
    }
    .body {
      margin-top: 28px;
      max-width: 880px;
      font-size: 36px;
      line-height: 1.35;
      color: var(--muted);
    }
    .theme-bone { --muted: #3f3d39; }
    .pill {
      margin-top: 36px;
      display: inline-flex;
      width: fit-content;
      border-radius: 999px;
      padding: 18px 28px;
      background: #0A0A0A;
      color: #fff;
      font-size: 28px;
    }
    .hint {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--em);
    }
    .dots { display: flex; gap: 10px; align-items: center; }
    .dots span {
      width: 36px;
      height: 6px;
      border-radius: 999px;
      background: var(--line);
    }
    .dots span.on { background: var(--em); width: 64px; }
    .theme-coral .dots span.on { background: #0A0A0A; }
  </style>
</head>
<body>
  <article class="card theme-${slide.theme}">
    <header class="top">
      <p class="brand">iA<em>GO</em><span class="word">Digital</span></p>
      <p class="count">${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</p>
    </header>
    <div class="stack">
      <p class="kicker">${escapeHtml(slide.kicker)}</p>
      <h1>${rich(slide.title)}</h1>
      <p class="body">${rich(slide.body)}</p>
      ${pill}
    </div>
    <footer class="bottom">
      ${dots(total, index, slide.theme)}
      ${hint}
    </footer>
  </article>
</body>
</html>`;
}

function calendario() {
  const lines = [
    "# Carruseles — IAGO Digital",
    "",
    "Tres carruseles de 4 láminas (1080×1350). Cada uno es un solo post. Se suben en orden, de la 01 a la 04.",
    "",
    "Están escritos para alguien que no sabe qué es una página web, qué es el SEO, ni qué es un agente. La primera foto deja la historia abierta. La explicación está en las siguientes.",
    "",
    "El texto de abajo es el pie de foto del carrusel completo. El mismo paquete está en \`IAGO-carruseles.pdf\`.",
    "",
  ];
  carousels.forEach((carousel, carouselIndex) => {
    lines.push(`## ${carouselIndex + 1}. ${carousel.name}`);
    lines.push("");
    lines.push(`- Dónde: ${carousel.where}`);
    lines.push("- Orden de las láminas:");
    carousel.slides.forEach((slide, slideIndex) => {
      lines.push(`  ${slideIndex + 1}. \`${slide.file}\``);
    });
    lines.push("");
    lines.push(carousel.caption);
    lines.push("");
    lines.push(carousel.tags.map((tag) => `#${tag}`).join(" "));
    lines.push("");
  });
  return lines.join("\n");
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const file of ["syne-700.woff2", "dm-sans-400.woff2", "dm-sans-500.woff2", "dm-sans-600.woff2"]) {
    fontData.set(file, (await readFile(path.join(fontDir, file))).toString("base64"));
  }
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
    for (const carousel of carousels) {
      for (const [index, slide] of carousel.slides.entries()) {
        await page.setContent(htmlFor(slide, index, carousel.slides.length), { waitUntil: "load" });
        await page.evaluate(() => document.fonts.ready);
        await page.screenshot({
          path: path.join(outDir, slide.file),
          type: "png",
          clip: { x: 0, y: 0, width: 1080, height: 1350 },
        });
        console.log(slide.file);
      }
    }
  } finally {
    await browser.close();
  }
  await writeFile(path.join(outDir, "calendario.md"), calendario());
  await writePdf();
  const count = carousels.reduce((sum, carousel) => sum + carousel.slides.length, 0);
  console.log(`wrote ${count} slides`);
}

function pdfHtml() {
  const sections = carousels
    .map((carousel, carouselIndex) => {
      const slides = carousel.slides
        .map((slide, slideIndex) => {
          const src = pathToFileURL(path.join(outDir, slide.file)).href;
          const caption =
            slideIndex === 0
              ? `<div class="caption"><p class="label">Texto del carrusel</p><p>${escapeHtml(carousel.caption).replaceAll("\n", "<br>")}</p><p class="tags">${escapeHtml(carousel.tags.map((tag) => `#${tag}`).join(" "))}</p></div>`
              : `<p class="note">Lámina ${slideIndex + 1} de ${carousel.slides.length}. El texto para publicar está en la primera lámina de este carrusel.</p>`;
          return `<section class="sheet">
            <header><p class="brand">iA<span>GO</span> Digital</p><p>${carouselIndex + 1} · ${slideIndex + 1}/${carousel.slides.length}</p></header>
            <h2>${escapeHtml(carousel.name)}</h2>
            <p class="file">${escapeHtml(slide.file)}</p>
            <img src="${src}" alt="">
            ${caption}
          </section>`;
        })
        .join("");
      return slides;
    })
    .join("");
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 12mm 14mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #0A0A0A; }
  .sheet { break-after: page; }
  .sheet:last-child { break-after: auto; }
  header { display: flex; justify-content: space-between; font-size: 12px; }
  .brand { font-weight: 700; letter-spacing: -0.04em; }
  .brand span { color: #E8734A; }
  h2 { margin: 4mm 0 1mm; font-size: 18px; letter-spacing: -0.03em; }
  .file, .note, .tags { color: #5E5C57; font-size: 11px; }
  img { display: block; width: 92mm; height: auto; margin: 4mm 0; }
  .caption p { margin: 0 0 2mm; font-size: 12px; line-height: 1.35; }
  .label { color: #E8734A; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
</style></head><body>${sections}</body></html>`;
}

async function writePdf() {
  const htmlPath = path.join(outDir, ".carruseles-print.html");
  const pdfPath = path.join(outDir, "IAGO-carruseles.pdf");
  await writeFile(htmlPath, pdfHtml());
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--user-data-dir=/tmp/chrome-carousel-pdf"],
  });
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
    await page.pdf({
      path: pdfPath,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
  } finally {
    await browser.close();
  }
  await unlink(htmlPath);
  console.log(`pdf ${pdfPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
