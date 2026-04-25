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

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-5 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">

        <section className="glass-panel hero-flow card-glow p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {eyebrow ? (
              <p className="inline-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--soft)]">
                {eyebrow}
              </p>
            ) : null}
            <span className="text-xs uppercase tracking-[0.22em] text-[var(--soft)]">
              Lahore, Pakistan
            </span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {intro}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--ring)] bg-[color:color-mix(in_oklab,var(--surface-elev)_65%,transparent)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--soft)]">
                Current focus
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                Premium web experiences, faster delivery, and cleaner conversion paths for business and product launches.
              </p>
            </div>
          </div>
        </section>

        {children}

      </main>

      <footer className="relative z-10 w-full border-t border-[color:color-mix(in_oklab,var(--ring)_40%,transparent)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_65%,var(--bg))_0%,color-mix(in_oklab,var(--bg)_95%,black)_100%)] py-10 text-sm text-[var(--muted)]">
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
                  <Link href={item.href} className="transition duration-300 ease-out hover:text-[var(--fg)] hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.12em] text-[var(--soft)]">Contact</p>
            <a href="mailto:karan@email.com" className="mt-3 block transition duration-300 ease-out hover:text-[var(--fg)] hover:translate-x-1 inline-block">
              karan@email.com
            </a>
            <p className="mt-2">Lahore, Pakistan</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/karan00006"
                target="_blank"
                rel="noreferrer"
                className="inline-chip rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/karan-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-chip rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
