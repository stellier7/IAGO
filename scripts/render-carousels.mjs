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
    id: "visto",
    name: "Te dejaron en visto",
    where: "Carrusel · Feed IG + Facebook",
    caption: `Te dejan en visto porque las mismas dos preguntas se contestan tarde.

Quien escribe suele hablarle a más de un negocio. El primero que responde se queda con la conversación.

En este carrusel: qué puede contestar un flujo y qué sigues contestando tú.

¿Cuáles son esas dos preguntas en tu negocio?
wa.me/50489809800`,
    tags: ["IAGODigital", "WhatsApp", "Automatizacion", "Honduras", "Pymes"],
    slides: [
      {
        file: "visto-01.png",
        theme: "ink",
        role: "cover",
        kicker: "WhatsApp",
        title: "Te dejaron\nen visto.",
        body: "Las mismas dos preguntas. Otra vez.",
      },
      {
        file: "visto-02.png",
        theme: "bone",
        role: "point",
        kicker: "Las preguntas",
        title: "Siempre son\nlas mismas.",
        body: "¿Cuánto cuesta? ¿Sigue disponible? ¿Dónde quedan? ¿A qué hora abren?",
      },
      {
        file: "visto-03.png",
        theme: "ink",
        role: "point",
        kicker: "El doble check",
        title: "El azul\nno espera.",
        body: "Esas palomitas significan que lo leyeron. Si la respuesta llega tarde, ya le escribió a otro.",
      },
      {
        file: "visto-04.png",
        theme: "bone",
        role: "point",
        kicker: "Lo repetido",
        title: "Eso se contesta\nsolo.",
        body: "Precio, horario, ubicación, disponibilidad. Un flujo lo responde en el momento, de día o de noche.",
      },
      {
        file: "visto-05.png",
        theme: "ink",
        role: "point",
        kicker: "Lo que es tuyo",
        title: "Tú entras\ncuando cierra.",
        body: "La duda rara. El caso especial. La persona que ya quiere comprar. Ahí sí hace falta tu voz.",
      },
      {
        file: "visto-06.png",
        theme: "coral",
        role: "cta",
        kicker: "Siguiente paso",
        title: "¿Cuáles son\nesas dos?",
        body: "Cuéntanoslas. Las dejamos contestadas para que dejen de quedarse en visto.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
  {
    id: "web",
    name: "Por qué una web se vuelve venta",
    where: "Carrusel · Feed IG + Facebook",
    caption: `Una web que se ve bien y no pide el siguiente paso se queda en visita.

Para que se vuelva consulta hace falta esto: que se entienda en cinco segundos, que haya una sola acción, que funcione en el celular y que se vea qué pasa después.

¿Tu sitio pide la venta o solo se presenta?
wa.me/50489809800`,
    tags: ["IAGODigital", "DiseñoWeb", "Ventas", "Honduras", "Pymes"],
    slides: [
      {
        file: "web-01.png",
        theme: "bone",
        role: "cover",
        kicker: "Conversión",
        title: "Una web clara\nsí vende.",
        body: "Se entiende rápido y pide un solo paso.",
      },
      {
        file: "web-02.png",
        theme: "ink",
        role: "point",
        kicker: "El primer vistazo",
        title: "Cinco\nsegundos.",
        body: "En ese tiempo tienen que entender qué vendes y para quién. Si no, siguen de largo.",
      },
      {
        file: "web-03.png",
        theme: "bone",
        role: "point",
        kicker: "El botón",
        title: "Una sola\nacción.",
        body: "Escribir, comprar o agendar. Si todo grita al mismo tiempo, nadie toca nada.",
      },
      {
        file: "web-04.png",
        theme: "ink",
        role: "point",
        kicker: "Dónde llega la gente",
        title: "Se ve en\nel celular.",
        body: "Ahí abre la mayoría. Si en el teléfono se rompe, la visita también.",
      },
      {
        file: "web-05.png",
        theme: "bone",
        role: "point",
        kicker: "Para decidir",
        title: "Prueba y\nsiguiente paso.",
        body: "Fotos reales, un precio o un rango, y un botón que diga qué pasa después de tocarlo.",
      },
      {
        file: "web-06.png",
        theme: "coral",
        role: "cta",
        kicker: "Revisión",
        title: "¿Pide\nla venta?",
        body: "Lo vemos y te decimos qué está frenando las consultas.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
  {
    id: "seo",
    name: "SEO sin humo",
    where: "Carrusel · Feed IG + Facebook",
    caption: `Si alguien busca lo que vendes y no apareces, elige a quien sí está ahí.

El SEO de un negocio con local empieza por la ficha de Google (nombre, horario, fotos, reseñas), alineada con el sitio. Después viene la base técnica y el contenido que responde búsquedas reales. Se mide por mes, no en siete días.

¿En qué búsqueda quieres salir?
wa.me/50489809800`,
    tags: ["IAGODigital", "SEO", "Google", "Honduras", "SEOLocal"],
    slides: [
      {
        file: "seo-01.png",
        theme: "ink",
        role: "cover",
        kicker: "SEO",
        title: "Si no sales\nen Google,\nvende otro.",
        body: "La gente elige entre los primeros que ve.",
      },
      {
        file: "seo-02.png",
        theme: "bone",
        role: "point",
        kicker: "Qué es",
        title: "Que Google\nte entienda.",
        body: "Qué ofreces, a quién y en qué ciudad. Meter palabras sueltas no alcanza.",
      },
      {
        file: "seo-03.png",
        theme: "ink",
        role: "point",
        kicker: "Si tienes local",
        title: "La ficha,\nprimero.",
        body: "Nombre, horario, fotos y reseñas, escritos igual que en el sitio. Si la ficha y la web se contradicen, confían menos.",
      },
      {
        file: "seo-04.png",
        theme: "bone",
        role: "point",
        kicker: "La base",
        title: "Luego,\nque se pueda leer.",
        body: "Que cargue, que funcione en el celular y que cada página diga una sola cosa.",
      },
      {
        file: "seo-05.png",
        theme: "ink",
        role: "point",
        kicker: "El tiempo",
        title: "Se queda\ncon el tiempo.",
        body: "Un informe al mes. Lo que cambió y qué sigue. Nada de “puesto 1 en siete días”.",
      },
      {
        file: "seo-06.png",
        theme: "coral",
        role: "cta",
        kicker: "Por dónde empezar",
        title: "¿En qué búsqueda\nquieres salir?",
        body: "Partimos por esa frase. Sin prometer el primer lugar.",
        pill: "WhatsApp · +504 8980-9800",
      },
    ],
  },
  {
    id: "fugas",
    name: "Tres lugares donde se van",
    where: "Carrusel · Feed IG + Facebook",
    caption: `Las consultas se escapan en tres momentos: cuando te buscan en Google y aparece otro, cuando entran a la web y no hay un siguiente paso, y cuando escriben por WhatsApp y se quedan en visto.

No hace falta arreglar los tres el mismo día. Se empieza por el que hoy te está costando mensajes.

¿Cuál te duele: web, Google o WhatsApp?
wa.me/50489809800`,
    tags: ["IAGODigital", "WhatsApp", "SEO", "DiseñoWeb", "Honduras"],
    slides: [
      {
        file: "fugas-01.png",
        theme: "ink",
        role: "cover",
        kicker: "El mapa",
        title: "Se te van\nen tres lugares.",
        body: "Google. La web. El visto.",
      },
      {
        file: "fugas-02.png",
        theme: "bone",
        role: "point",
        kicker: "01",
        title: "Google.",
        body: "Te buscan y aparece otro. La ficha y el sitio tienen que decir lo mismo.",
      },
      {
        file: "fugas-03.png",
        theme: "ink",
        role: "point",
        kicker: "02",
        title: "La web.",
        body: "Entran, no entienden la oferta y no hay un paso claro. La visita no se vuelve consulta.",
      },
      {
        file: "fugas-04.png",
        theme: "bone",
        role: "point",
        kicker: "03",
        title: "El visto.",
        body: "Escribieron. Lo leyeron. La respuesta llegó tarde. Ya están hablando con otro.",
      },
      {
        file: "fugas-05.png",
        theme: "ink",
        role: "point",
        kicker: "El orden",
        title: "Empieza por\nel que duele.",
        body: "Un canal a la vez. El lugar donde hoy se te quedan los mensajes sin respuesta.",
      },
      {
        file: "fugas-06.png",
        theme: "coral",
        role: "cta",
        kicker: "48 horas",
        title: "¿Cuál\nte duele?",
        body: "Web, Google o WhatsApp. Respondemos en menos de 48 horas con un alcance claro.",
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
  return escapeHtml(value).replaceAll("\n", "<br>");
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
  const longest = Math.max(...title.split("\n").map((line) => line.length));
  if (longest >= 18) return 78;
  if (longest >= 14) return 88;
  return 100;
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
      justify-content: flex-end;
      padding-bottom: 36px;
    }
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
      max-width: 860px;
      font-size: 34px;
      line-height: 1.32;
      color: var(--muted);
    }
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
    "Cuatro carruseles, 24 láminas de 1080×1350. En Instagram y Facebook se suben como un solo post, en este orden.",
    "",
    "Temas: el visto de WhatsApp, por qué una web se vuelve consulta, SEO con la ficha de Google, y las tres fugas juntas.",
    "",
    "Sugerencia: uno por semana, en este orden. El texto de abajo es el único pie de foto del carrusel. El mismo paquete está en \`IAGO-carruseles.pdf\`.",
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
