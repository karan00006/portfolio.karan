import PageShell from "@/app/components/page-shell";
import { experiences } from "@/app/lib/site-data";

const process = [
  {
    step: "Discovery",
    detail:
      "Understand the product goal, audience, and conversion points before touching visual implementation.",
  },
  {
    step: "Structure",
    detail:
      "Build reusable sections and establish tokens so pages remain consistent while scaling.",
  },
  {
    step: "Delivery",
    detail:
      "Polish interactions, optimize mobile behavior, and validate core user journeys before handoff.",
  },
  {
    step: "Iteration",
    detail:
      "Track post-launch feedback and continuously refine UI and performance where it matters.",
  },
];

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Work history and delivery process"
      intro="Hands-on project work across agency and freelance contexts, with emphasis on real-world implementation, launch quality, and iterative improvement."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <article className="surface rounded-3xl p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Professional Experience</h2>

          <div className="mt-5 space-y-5">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-[var(--ring)] p-5"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--soft)]">
                  {experience.period} | {experience.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{experience.role}</h3>
                <p className="text-[var(--muted)]">{experience.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl border border-[var(--ring)] px-3 py-2">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <aside className="surface rounded-3xl p-6">
          <h2 className="text-2xl font-semibold">How I Work</h2>
          <ol className="mt-4 space-y-3">
            {process.map((item, index) => (
              <li key={item.step} className="rounded-2xl border border-[var(--ring)] p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--soft)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </PageShell>
  );
}
