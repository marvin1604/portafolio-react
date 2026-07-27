"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const SPOTLIGHT_SELECTOR = "[data-spotlight]";
const TILT_SELECTOR = "[data-tilt]";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-enabled");

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("motion-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    const updateScrollState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      header?.classList.toggle("is-scrolled", window.scrollY > 24);
      progress?.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, scrollProgress))),
      );
    };

    const spotlightCleanups = Array.from(
      document.querySelectorAll<HTMLElement>(SPOTLIGHT_SELECTOR),
    ).map((element) => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty(
          "--spotlight-x",
          `${event.clientX - bounds.left}px`,
        );
        element.style.setProperty(
          "--spotlight-y",
          `${event.clientY - bounds.top}px`,
        );
      };

      element.addEventListener("pointermove", handlePointerMove);
      return () => element.removeEventListener("pointermove", handlePointerMove);
    });

    const tiltCleanups = Array.from(
      document.querySelectorAll<HTMLElement>(TILT_SELECTOR),
    ).map((element) => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

        element.style.setProperty("--tilt-x", `${vertical * -5}deg`);
        element.style.setProperty("--tilt-y", `${horizontal * 6}deg`);
      };

      const resetTilt = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };

      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("pointerleave", resetTilt);

      return () => {
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerleave", resetTilt);
      };
    });

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      spotlightCleanups.forEach((cleanup) => cleanup());
      tiltCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      root.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
