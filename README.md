# IAGO Digital — sitio web

Sitio de marketing para IAGO Digital, construido con Next.js (App Router),
TypeScript, Tailwind CSS y Framer Motion.

## Correr en local (en Cursor)

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Desplegar

1. Sube este proyecto a un repo de GitHub.
2. Conecta el repo en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — no hace falta tocar configuración.
4. Cada push a `main` hace deploy automático a producción; cada rama/PR
   genera su propia preview URL.

## Estructura

```
app/
  layout.tsx      # fuentes, metadata/SEO, wrapper global
  page.tsx         # ensambla todas las secciones
  globals.css      # estilos base + soporte prefers-reduced-motion
components/
  Nav.tsx           # blur + se compacta al hacer scroll
  Hero.tsx          # hero sticky con parallax; el resto del sitio se desliza encima como cortina
  Marquee.tsx       # ticker infinito de servicios
  Services.tsx      # 3 pilares (Web / SEO / Automatizaciones con IA)
  Work.tsx          # casos de estudio — scroll horizontal pineado en desktop (estilo basement.studio), lista simple en mobile
  Proof.tsx         # por qué IAGO + estadísticas
  Process.tsx       # 4 pasos con línea conectora animada
  CTA.tsx           # sección de contacto, tratamiento invertido (coral)
  Footer.tsx
  SmoothScroll.tsx  # wrapper de Lenis para scroll suave
  CustomCursor.tsx  # cursor magnético (solo desktop, respeta touch/reduced-motion)
lib/
  motion-variants.ts  # variantes de Framer Motion compartidas
```

## Pendientes / notas

- Reemplazar `hola@iagodigital.com` y el número de WhatsApp
  (`wa.me/50400000000`) por los reales.
- Agregar `public/og-image.png` (1200×630) y `public/favicon.ico` antes
  de lanzar — el layout ya los referencia.
- El grid de `Services.tsx` está pensado para agregar un cuarto pilar
  (Logística) más adelante sin rediseñar nada — solo agrega un objeto
  más al array `services`.
- Copy en español como idioma principal; la estructura de componentes
  hace sencillo agregar un toggle de inglés después si hace falta.
- Todas las animaciones respetan `prefers-reduced-motion` (ver
  `globals.css` y el hero, que además usa `useReducedMotion` de Framer
  Motion para desactivar el parallax).
