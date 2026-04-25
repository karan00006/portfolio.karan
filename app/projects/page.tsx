import PageShell from "@/app/components/page-shell";
import { featuredProjects } from "@/app/lib/site-data";

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Production sites with depth, motion, and clean UX"
      intro="A curated stack of real launches across travel, booking, and internal systems. Each row is designed to feel more editorial and less like a generic card grid."
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="glass-panel p-5 transition duration-300 ease-out hover:shadow-lg hover:scale-105 hover:bg-[color:color-mix(in_oklab,var(--surface-elev)_50%,transparent)] cursor-default">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--soft)]">Live properties</p>
          <p className="mt-2 text-4xl font-semibold">35+</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Shipped & maintained</p>
        </article>
        <article className="glass-panel p-5 transition duration-300 ease-out hover:shadow-lg hover:scale-105 hover:bg-[color:color-mix(in_oklab,var(--surface-elev)_50%,transparent)] cursor-default">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--soft)]">Stack</p>
          <p className="mt-2 text-4xl font-semibold">Laravel · PHP · JS</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Plus React & Next when it fits</p>
        </article>
        <article className="glass-panel p-5 transition duration-300 ease-out hover:shadow-lg hover:scale-105 hover:bg-[color:color-mix(in_oklab,var(--surface-elev)_50%,transparent)] cursor-default">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--soft)]">Reach</p>
          <p className="mt-2 text-4xl font-semibold">UK · CA · Global</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Travel & booking vertical</p>
        </article>
      </section>

      <section className="pt-2">
        {featuredProjects.map((project, index) => (
          <article
            key={project.name}
            className="work-row group border-b border-[color:color-mix(in_oklab,var(--ring)_28%,transparent)] py-7 last:border-b-0"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="grid gap-4 rounded-2xl px-4 py-4 transition duration-300 ease-out hover:bg-[color:color-mix(in_oklab,var(--surface-elev)_70%,transparent)] hover:shadow-md hover:scale-[1.02] lg:grid-cols-[1.4fr_1.2fr_0.7fr] lg:items-start"
            >
              <div className="flex gap-4">
                <div className="text-lg font-semibold text-[var(--soft)] transition duration-300 ease-out group-hover:text-[var(--accent)] group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold transition duration-300 ease-out group-hover:translate-x-2 group-hover:text-[var(--accent)]">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.category}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-chip rounded-full px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {project.summary}
                </p>
              </div>

              <div className="lg:text-right">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] transition duration-300 ease-out group-hover:translate-x-2 group-hover:text-[var(--accent)]">
                  <span>Visit live site</span>
                  <span aria-hidden="true" className="transition duration-300 ease-out group-hover:translate-x-1">→</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--soft)]">
                  {String(index + 1)} / {featuredProjects.length}
                </p>
              </div>
            </a>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
