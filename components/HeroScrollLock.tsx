"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/SmoothScroll";
import {
  HERO_INTRO_MS,
  INTRO_LOCK_CLASS,
  SERVICES_SECTION_ID,
  TOUCH_SKIP_THRESHOLD,
} from "@/lib/hero-intro";

const WHEEL_SKIP_THRESHOLD = 40;
const FORWARD_KEYS = new Set([" ", "Spacebar", "ArrowDown", "PageDown", "End"]);

/**
 * Keeps the hero still while its entrance animation plays. Scrolling down
 * during that window skips the hero instead of dragging it: the page goes
 * straight to the servicios section.
 */
export default function HeroScrollLock() {
  const lenis = useLenis();
  const deadlineRef = useRef<number | null>(null);
  const releasedRef = useRef(false);

  useEffect(() => {
    if (releasedRef.current) return;

    const root = document.documentElement;
    const deepLinked = window.scrollY > 0 || !!window.location.hash;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Drops the lock for good, including anything the pre-hydration script
    // left behind.
    const standDown = () => {
      releasedRef.current = true;
      root.classList.remove(INTRO_LOCK_CLASS);
      window.__heroIntroScrollIntent = false;
    };

    if (deepLinked || prefersReducedMotion) {
      standDown();
      return;
    }

    if (deadlineRef.current === null) {
      deadlineRef.current = Date.now() + HERO_INTRO_MS;
    }

    const remaining = deadlineRef.current - Date.now();
    if (remaining <= 0) {
      standDown();
      return;
    }

    root.classList.add(INTRO_LOCK_CLASS);
    lenis?.stop();

    let timer = 0;
    let wheelDelta = 0;
    let touchStartY = 0;

    const unlock = () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick, true);
      root.classList.remove(INTRO_LOCK_CLASS);
      lenis?.start();
    };

    const release = () => {
      standDown();
      unlock();
    };

    const skipToServices = () => {
      release();
      const services = document.getElementById(SERVICES_SECTION_ID);
      if (!services) return;
      // `lock` keeps the tail of the gesture that triggered this from
      // derailing the jump halfway there.
      if (lenis) lenis.scrollTo(services, { duration: 1.2, lock: true });
      else services.scrollIntoView({ behavior: "smooth" });
    };

    function onWheel(event: WheelEvent) {
      wheelDelta = event.deltaY > 0 ? wheelDelta + event.deltaY : 0;
      if (wheelDelta > WHEEL_SKIP_THRESHOLD) skipToServices();
    }

    function onTouchStart(event: TouchEvent) {
      touchStartY = event.touches[0]?.clientY ?? 0;
    }

    function onTouchMove(event: TouchEvent) {
      const currentY = event.touches[0]?.clientY ?? 0;
      if (touchStartY - currentY <= TOUCH_SKIP_THRESHOLD) return;
      // Cancel the swipe itself, otherwise the browser keeps flinging the page
      // after the lock lifts and the jump never settles on servicios.
      if (event.cancelable) event.preventDefault();
      skipToServices();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!FORWARD_KEYS.has(event.key)) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      skipToServices();
    }

    // Anchor links do their own scrolling, so get out of their way.
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a")) release();
    }

    timer = window.setTimeout(release, remaining);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick, true);

    // Someone already tried to scroll before hydration. Lenis drives the jump,
    // so wait for it rather than fighting a native smooth scroll; this effect
    // re-runs as soon as the instance exists.
    if (window.__heroIntroScrollIntent && lenis) skipToServices();

    return unlock;
  }, [lenis]);

  return null;
}
