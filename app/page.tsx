import Link from "next/link";
import PageShell from "@/app/components/page-shell";
import ReviewsSwiper from "@/app/components/reviews-swiper";
import AnimatedFeatureGrid from "@/app/components/animated-feature-grid";
import FaqAccordion from "@/app/components/faq-accordion";
import { contactLinks, featuredProjects, skills, stats } from "@/app/lib/site-data";

const features = [
  {
    title: "Full Stack Delivery",
    detail:
      "From landing pages to connected backend flows, I build complete implementations that are clean and production ready.",
  },
  {
    title: "Design System Thinking",
    detail:
      "Reusable sections and UI tokens help scale faster while keeping visual consistency across all pages and products.",
  },
  {
    title: "Performance Focus",
    detail:
      "Page speed, efficient rendering, and practical optimizations are part of the workflow from the first iteration.",
  },
  {
    title: "Reliable Collaboration",
    detail:
      "Clear communication, predictable delivery, and transparent progress updates at each milestone.",
  },
];

const faqs = [
  {
    question: "What type of projects do you usually work on?",
    answer:
      "Business websites, personal brands, travel agency platforms, and frontend-heavy product interfaces where quality UI and speed both matter.",
  },
  {
    question: "Can you redesign an existing website instead of building from scratch?",
    answer:
      "Yes. I can keep your content and improve layout quality, visual hierarchy, responsiveness, and interaction behavior without unnecessary rebuilds.",
  },
  {
    question: "Do you support ongoing updates after launch?",
    answer:
      "Yes. I provide post-launch support for feature updates, bug fixes, optimization work, and iterative UI improvements.",
  },
  {
    question: "How quickly can a typical project be delivered?",
    answer:
      "Smaller websites can ship in days, while multi-page or feature-rich builds depend on scope. I share a clear timeline before starting.",
  },
];

const reviews = [
  {
    quote:
      "Karan transformed a rough website brief into a fast, polished experience that feels premium and converts visitors better.",
    author: "A. Rauf",
    role: "Travel Agency Owner",
  },
  {
    quote:
      "Clear communication, smart frontend decisions, and quick iterations. The quality stayed consistent through every revision.",
    author: "H. Adeel",
    role: "Project Manager",
  },
  {
    quote:
      "Our launch timeline was tight, but delivery was smooth and the final UI looked far better than our initial expectations.",
    author: "S. Noor",
    role: "Marketing Lead",
  },
  {
    quote:
      "A dependable developer for modern web builds, especially when brand feel and responsiveness both matter.",
    author: "M. Bilal",
    role: "Agency Partner",
  },
];

export default function Home() {
  return (
    <PageShell
      eyebrow="Web Developer"
      title="Modern web experiences with premium UI and practical engineering"
      intro="Experienced web developer from Lahore building conversion-focused sites, polished product interfaces, and reliable production-ready systems."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="glass-panel card-glow p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--soft)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Available for freelance and product work
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            I design and ship modern websites with calm structure, clear call-to-actions, and enough motion to feel alive without becoming noisy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="inline-chip rounded-full px-5 py-3 text-sm font-medium"
            >
              Start a project
            </Link>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <article key={stat.label} className="glass-panel project-card p-5" style={{ animationDelay: `${index * 60}ms` }}>
              <p className="text-4xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel grid gap-7 p-6 sm:p-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <Link
              href="/projects"
              className="inline-chip rounded-full px-4 py-2 text-sm"
            >
              View full project list
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-card block rounded-2xl px-1 py-4"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--soft)]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {project.summary}
                </p>
                <span className="mt-2 inline-block text-sm text-[var(--accent)]">Visit project</span>
              </a>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl bg-[color:color-mix(in_oklab,var(--surface-elev)_58%,transparent)] p-5">
          <h2 className="text-2xl font-semibold">Quick Actions</h2>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href="/Karan-CV.txt"
              download
              className="inline-chip block rounded-xl px-4 py-3 font-medium"
            >
              Download CV
            </a>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl px-1 py-3 text-[var(--muted)] transition hover:text-[var(--fg)]"
              >
                <span className="block text-xs uppercase tracking-[0.15em] text-[var(--soft)]">
                  {link.label}
                </span>
                <span className="mt-1 block">{link.value}</span>
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Why Clients Work With Me</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          A design-first but practical approach that keeps your website visually strong and implementation-friendly.
        </p>
        <div className="mt-6">
          <AnimatedFeatureGrid features={features} />
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Reviews</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          Feedback from collaborators and clients across travel, marketing, and product-focused projects.
        </p>
        <div className="mt-6">
          <ReviewsSwiper reviews={reviews} />
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          Common questions from businesses and teams before starting a new web project.
        </p>
        <div className="mt-6">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/experience" className="inline-chip rounded-full px-3 py-1.5 text-sm">
              Experience
            </Link>
            <Link href="/services" className="inline-chip rounded-full px-3 py-1.5 text-sm">
              Services
            </Link>
            <Link href="/contact" className="inline-chip rounded-full px-3 py-1.5 text-sm">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-chip rounded-full px-4 py-2 text-sm text-[var(--muted)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
