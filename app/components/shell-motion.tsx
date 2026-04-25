"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ShellMotion() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.style.animation = "slideDown 0.7s ease-out forwards";
    }

    const sections = Array.from(document.querySelectorAll("main > section"));
    sections.forEach((section, idx) => {
      (section as HTMLElement).style.animation = `fadeInUp 0.7s ease-out ${idx * 0.1}s forwards`;
    });

    const workRows = Array.from(document.querySelectorAll(".work-row"));
    workRows.forEach((row, idx) => {
      (row as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${idx * 0.08}s forwards`;
    });

    const chips = Array.from(document.querySelectorAll(".inline-chip"));
    chips.forEach((chip, idx) => {
      (chip as HTMLElement).style.animation = `scaleIn 0.5s ease-out ${idx * 0.05}s forwards`;
    });

    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.animation = "slideUp 0.7s ease-out forwards";
    }

    return () => {
      [header, ...sections, ...workRows, ...chips, footer].forEach((el) => {
        if (el) (el as HTMLElement).style.animation = "";
      });
    };
  }, []);

  return null;
}