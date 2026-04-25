import { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";
import Link from "next/link";
import { navLinks } from "@/app/lib/site-data";
import ShellMotion from "@/app/components/shell-motion";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  intro: string;
  children: ReactNode;
};

export default function PageShell({
  title,
  eyebrow,
  intro,
  children,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ambient-bg" aria-hidden="true" />

      <ShellMotion />

      <div className="relative z-20 w-full">
        <SiteHeader />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8">

        <section className="surface hero-flow card-glow pt-8 sm:pt-10">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {intro}
          </p>
        </section>

        {children}

      </main>

      <footer className="relative z-10 w-full border-t border-[color:color-mix(in_oklab,var(--ring)_40%,transparent)] bg-[color:color-mix(in_oklab,var(--surface)_70%,var(--bg))] py-10 text-sm text-[var(--muted)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-semibold text-[var(--fg)]">Karan</p>
            <p className="mt-2 max-w-sm leading-7">
              Modern web experiences with practical engineering and clean design execution.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.12em] text-[var(--soft)]">Navigate</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[var(--fg)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.12em] text-[var(--soft)]">Contact</p>
            <a href="mailto:karan@email.com" className="mt-3 block hover:text-[var(--fg)]">
              karan@email.com
            </a>
            <p className="mt-2">Lahore, Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
