"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/app/lib/site-data";

type Theme = "dark" | "light";

export default function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="hairline fixed inset-x-0 top-0 z-50 w-full bg-[color:color-mix(in_oklab,var(--bg)_92%,transparent)] py-4 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-[0.08em] sm:text-lg">
          Karan . Portfolio
        </Link>

        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 text-sm transition ${
                  isActive
                    ? "inline-chip text-[var(--fg)]"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
