"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ShellMotion() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateIfFound = (selector: string, config: gsap.TweenVars) => {
      const targets = Array.from(document.querySelectorAll(selector));

      if (targets.length === 0) {
        return;
      }

      gsap.from(targets, config);
    };

    animateIfFound("header", {
      y: -24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    animateIfFound("main > section", {
      y: 28,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "main",
        start: "top 85%",
      },
    });

    animateIfFound(".project-card, .work-row", {
      y: 20,
      opacity: 0,
      duration: 0.65,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: "main",
        start: "top 80%",
      },
    });

    animateIfFound(".inline-chip", {
      scale: 0.96,
      opacity: 0,
      duration: 0.45,
      ease: "back.out(1.4)",
      stagger: 0.02,
      scrollTrigger: {
        trigger: "main",
        start: "top 80%",
      },
    });

    animateIfFound("footer", {
      y: 18,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 95%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}