/**
 * Scroll-driven steps timeline (desktop one-shot reveal, mobile reversible).
 * Mirrors initStepsTimeline() from stellier7/Petite-dent.
 */
export function initStepsTimeline(): () => void {
  const stepsTimeline = document.querySelector<HTMLElement>(".steps-timeline");
  const steps = stepsTimeline
    ? Array.from(stepsTimeline.querySelectorAll<HTMLElement>(".step"))
    : [];
  const lineFill = document.querySelector<HTMLElement>(".steps-line-fill");

  if (!steps.length || !lineFill || !stepsTimeline) {
    return () => {};
  }

  const timeline = stepsTimeline;
  const fill = lineFill;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const visibleSteps = new Array<boolean>(steps.length).fill(false);
  let stepObservers: IntersectionObserver[] = [];
  let desktopObserver: IntersectionObserver | null = null;
  const layoutQuery = window.matchMedia("(max-width: 900px)");

  function isMobileLayout() {
    return layoutQuery.matches;
  }

  function resetStepStates() {
    steps.forEach((step) => {
      step.classList.remove("is-revealed", "is-passed", "is-active");
    });
    timeline.classList.remove("steps-timeline--inview");
    fill.style.width = "";
    fill.style.height = "";
  }

  function disconnectMobileObservers() {
    stepObservers.forEach((observer) => observer.disconnect());
    stepObservers = [];
  }

  function disconnectDesktopObserver() {
    if (desktopObserver) {
      desktopObserver.disconnect();
      desktopObserver = null;
    }
  }

  function updateMobileTimeline() {
    let maxIndex = -1;
    for (let i = 0; i < visibleSteps.length; i++) {
      if (visibleSteps[i]) maxIndex = i;
    }

    if (maxIndex === -1) {
      fill.style.width = "100%";
      fill.style.height = "0%";
      steps.forEach((step) => {
        step.classList.remove("is-revealed", "is-passed", "is-active");
      });
      return;
    }

    const progress = ((maxIndex + 1) / steps.length) * 100;
    fill.style.width = "100%";
    fill.style.height = `${progress}%`;

    steps.forEach((step, index) => {
      step.classList.toggle("is-revealed", index <= maxIndex);
      step.classList.toggle("is-passed", index < maxIndex);
      step.classList.toggle("is-active", index === maxIndex);
    });
  }

  function initMobileTimeline() {
    disconnectDesktopObserver();
    visibleSteps.fill(false);

    steps.forEach((step, index) => {
      const stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibleSteps[index] = entry.isIntersecting;
            updateMobileTimeline();
          });
        },
        { threshold: 0, rootMargin: "-36% 0px -36% 0px" },
      );

      stepObserver.observe(step);
      stepObservers.push(stepObserver);
    });
  }

  function initDesktopTimeline() {
    disconnectMobileObservers();
    visibleSteps.fill(false);

    desktopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.add("steps-timeline--inview");
            desktopObserver?.unobserve(timeline);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    desktopObserver.observe(timeline);
  }

  function applyLayoutMode() {
    resetStepStates();
    if (isMobileLayout()) {
      initMobileTimeline();
    } else {
      initDesktopTimeline();
    }
  }

  if (reducedMotion) {
    timeline.classList.add("steps-timeline--inview");
    steps.forEach((step) => step.classList.add("is-revealed"));
    fill.style.width = "100%";
    fill.style.height = "100%";
    return () => {};
  }

  applyLayoutMode();

  const onLayoutChange = () => applyLayoutMode();
  const onResize = () => {
    if (isMobileLayout()) updateMobileTimeline();
  };

  if (layoutQuery.addEventListener) {
    layoutQuery.addEventListener("change", onLayoutChange);
  } else {
    layoutQuery.addListener(onLayoutChange);
  }

  window.addEventListener("resize", onResize);

  return () => {
    disconnectMobileObservers();
    disconnectDesktopObserver();
    layoutQuery.removeEventListener?.("change", onLayoutChange);
    layoutQuery.removeListener?.(onLayoutChange);
    window.removeEventListener("resize", onResize);
  };
}
