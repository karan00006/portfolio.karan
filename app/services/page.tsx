import PageShell from "@/app/components/page-shell";
import { services } from "@/app/lib/site-data";

const packageTiers = [
  {
    name: "Starter",
    description: "For single-page or lightweight websites with clean modern design.",
    includes: ["Design direction", "Responsive build", "Deployment setup"],
  },
  {
    name: "Growth",
    description: "For multi-page business sites that need stronger conversion structure.",
    includes: ["Page system", "Reusable components", "SEO essentials", "Content sections"],
  },
  {
    name: "Scale",
    description: "For products and teams needing ongoing implementation and iteration.",
    includes: ["Advanced frontend work", "Feature expansion", "Performance pass", "Monthly support"],
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What I can build and improve"
      intro="From complete website launches to frontend optimization, I provide practical services that help brands ship faster and present themselves with confidence."
    >
      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="project-card surface rounded-3xl p-6"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {service.deliverables.map((item) => (
                <li key={item} className="rounded-xl border border-[var(--ring)] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="surface rounded-3xl p-6">
        <h2 className="text-2xl font-semibold">Common Engagement Models</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {packageTiers.map((tier) => (
            <article key={tier.name} className="rounded-2xl border border-[var(--ring)] p-5">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{tier.description}</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {tier.includes.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
