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

export const TOUCH_SKIP_THRESHOLD = 24;

declare global {
  interface Window {
    // Set when someone tries to scroll down before React takes over; see below.
    __heroIntroScrollIntent?: boolean;
  }
}

// Locks scrolling before React hydrates, which is the window where dragging the
// hero around feels broken. It mirrors a slice of HeroScrollLock on purpose:
// hydration can be a second away on a slow phone, and a scroll attempt in that
// gap still has to send the visitor to servicios once the component mounts.
// The timeout releases the lock on its own so the page keeps working even if
// hydration never happens.
export const heroIntroLockScript = `(function(){try{
var entry=performance.getEntriesByType("navigation")[0];
if(entry&&entry.type!=="navigate")return;
if(window.scrollY>0||window.location.hash)return;
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;

var root=document.documentElement;
root.classList.add("${INTRO_LOCK_CLASS}");

var touchStartY=0;
function stopWatching(){
window.removeEventListener("wheel",onWheel);
window.removeEventListener("touchstart",onTouchStart);
window.removeEventListener("touchmove",onTouchMove);
}
function markIntent(){window.__heroIntroScrollIntent=true;stopWatching()}
function onWheel(event){if(event.deltaY>0)markIntent()}
function onTouchStart(event){touchStartY=event.touches[0]?event.touches[0].clientY:0}
function onTouchMove(event){
var y=event.touches[0]?event.touches[0].clientY:0;
if(touchStartY-y>${TOUCH_SKIP_THRESHOLD})markIntent()
}

window.addEventListener("wheel",onWheel,{passive:true});
window.addEventListener("touchstart",onTouchStart,{passive:true});
window.addEventListener("touchmove",onTouchMove,{passive:true});

setTimeout(function(){
stopWatching();
root.classList.remove("${INTRO_LOCK_CLASS}")
},${HERO_INTRO_MS});
}catch(error){}})();`;
