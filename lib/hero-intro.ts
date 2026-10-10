// Hero copy entrance chain: tagline → subhead → buttons. The subhead lines live
// here too because the button delay depends on how many there are.
export const SUBHEAD_LINES = [
  "Diseñamos experiencias digitales que convierten,",
  "posicionamos tu marca en Google y automatizamos lo repetitivo",
  "para que te enfoques en crecer.",
] as const;

export const TAGLINE_DELAY = 0.4;
export const TAGLINE_DURATION = 0.65;
export const SUBHEAD_DELAY = TAGLINE_DELAY + TAGLINE_DURATION + 0.04;
export const SUBHEAD_STAGGER = 0.1;
export const SUBHEAD_LINE_DURATION = 0.5;
export const BUTTON_ENTRANCE_DELAY =
  SUBHEAD_DELAY +
  SUBHEAD_STAGGER * (SUBHEAD_LINES.length - 1) +
  SUBHEAD_LINE_DURATION +
  0.04;
export const BUTTON_STAGGER = 0.1;
export const BUTTON_DURATION = 0.55;

// How long the whole entrance runs, and therefore how long scrolling stays locked.
export const HERO_INTRO_MS = Math.round(
  (BUTTON_ENTRANCE_DELAY + BUTTON_STAGGER + BUTTON_DURATION) * 1000,
);

export const INTRO_LOCK_CLASS = "hero-intro-locked";

export const SERVICES_SECTION_ID = "servicios";

// Locks scrolling before React hydrates, which is the window where dragging the
// hero around feels broken. The timeout releases the lock on its own so the page
// still works if hydration never happens.
export const heroIntroLockScript = `(function(){try{
var entry=performance.getEntriesByType("navigation")[0];
if(entry&&entry.type!=="navigate")return;
if(window.scrollY>0||window.location.hash)return;
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var root=document.documentElement;
root.classList.add("${INTRO_LOCK_CLASS}");
setTimeout(function(){root.classList.remove("${INTRO_LOCK_CLASS}")},${HERO_INTRO_MS});
}catch(error){}})();`;
