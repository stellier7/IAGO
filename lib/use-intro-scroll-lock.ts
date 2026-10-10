"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/SmoothScroll";

const SWIPE_THRESHOLD_PX = 12;
const SCROLL_DOWN_KEYS = new Set(["ArrowDown", "PageDown", "End", " "]);
const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [contenteditable]";

interface IntroScrollLockOptions {
  enabled: boolean;
  /** How long after mount the lock stays active. */
  durationMs: number;
  /** CSS selector of the section a "scroll down" gesture should jump to. */
  target: string;
}

/**
 * While an intro animation plays, keep the page pinned to the top and turn
 * any "scroll down" gesture (wheel, swipe, keyboard) into a smooth jump to
 * `target` instead of letting the user drag through the animating section.
 *
 * The lock is released automatically when the duration elapses, when the
 * user is redirected, or when something else (anchor link, scrollbar drag,
 * scroll restoration) moves the page.
 */
export function useIntroScrollLock({
  enabled,
  durationMs,
  target,
}: IntroScrollLockOptions) {
  const lenis = useLenis();
  // Anchored once so the lock doesn't restart when Lenis mounts after us.
  const unlockAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    // Page didn't open at the top (hash link, reload mid-page): nothing to protect.
    if (window.scrollY > 0) return;

    if (unlockAtRef.current === null) {
      unlockAtRef.current = performance.now() + durationMs;
    }
    const remaining = unlockAtRef.current - performance.now();
    if (remaining <= 0) return;

    let released = false;
    const removers: Array<() => void> = [];
    let timer = 0;

    const release = () => {
      if (released) return;
      released = true;
      window.clearTimeout(timer);
      for (const remove of removers) remove();
      lenis?.start();
    };

    const goToTarget = () => {
      release();
      if (lenis) {
        // `lock` swallows the gesture's trailing inertia so it can't push past the target.
        lenis.scrollTo(target, { lock: true });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const listen = <K extends keyof WindowEventMap>(
      type: K,
      handler: (event: WindowEventMap[K]) => void,
      options: AddEventListenerOptions,
    ) => {
      window.addEventListener(type, handler, options);
      removers.push(() => window.removeEventListener(type, handler, options));
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      if (event.cancelable) event.preventDefault();
      if (event.deltaY > 0) goToTarget();
    };

    let touchStartY: number | null = null;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (event: TouchEvent) => {
      if (event.cancelable) event.preventDefault();
      const currentY = event.touches[0]?.clientY;
      if (touchStartY === null || currentY === undefined) return;
      if (touchStartY - currentY > SWIPE_THRESHOLD_PX) goToTarget();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === " " && event.shiftKey) return;
      if (!SCROLL_DOWN_KEYS.has(event.key)) return;
      if (
        event.target instanceof Element &&
        event.target.closest(INTERACTIVE_SELECTOR)
      ) {
        return;
      }
      event.preventDefault();
      goToTarget();
    };

    const onScroll = () => {
      if (window.scrollY > 0) release();
    };

    lenis?.stop();
    listen("wheel", onWheel, { passive: false, capture: true });
    listen("touchstart", onTouchStart, { passive: true, capture: true });
    listen("touchmove", onTouchMove, { passive: false, capture: true });
    listen("keydown", onKeyDown, { capture: true });
    listen("scroll", onScroll, { passive: true });
    timer = window.setTimeout(release, remaining);

    return release;
  }, [enabled, durationMs, target, lenis]);
}
