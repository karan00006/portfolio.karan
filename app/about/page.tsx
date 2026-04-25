import PageShell from "@/app/components/page-shell";
import { education, skills, testimonials } from "@/app/lib/site-data";

const principles = [
  {
    title: "Intentional UI",
    description:
      "Every section should have a clear role. I avoid filler layouts and prioritize hierarchy, rhythm, and useful motion.",
  },
  {
    title: "Product Thinking",
    description:
      "I think beyond pages and focus on flows: what users do first, what convinces them, and what gets them to convert.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Fast iteration with predictable quality, practical communication, and clean code that stays maintainable after launch.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Developer profile, approach, and strengths"
      intro="I am a web developer focused on modern interfaces and practical digital products. My work combines visual direction, frontend architecture, and clear execution to move projects from idea to launch."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        {principles.map((item) => (
          <article key={item.title} className="surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="surface rounded-3xl p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Education and Growth</h2>
          <div className="mt-4 rounded-2xl border border-[var(--ring)] p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--soft)]">
              Degree
            </p>
            <h3 className="mt-2 text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-[var(--muted)]">{education.institute}</p>
            <p className="mt-2 text-sm text-[var(--soft)]">{education.detail}</p>
          </div>

          <h3 className="mt-6 text-lg font-semibold">Technical Breadth</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--ring)] bg-[var(--surface-elev)] px-4 py-2 text-sm text-[var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        <aside className="surface rounded-3xl p-6">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="mt-4 space-y-4">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-[var(--ring)] p-4"
              >
                <p className="text-sm leading-6 text-[var(--muted)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.12em] text-[var(--soft)]">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
