import PageShell from "@/app/components/page-shell";
import { contactLinks } from "@/app/lib/site-data";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let us discuss your next build"
      intro="If you need a new website, a redesign, or frontend support on an existing product, share your goals and timeline. I can help map scope and start execution quickly."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <article className="surface rounded-3xl p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Project Brief</h2>
          <form className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-[var(--muted)]">Full Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-elev)] px-4 py-3 text-sm outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[var(--muted)]">Email</span>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-elev)] px-4 py-3 text-sm outline-none"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-[var(--muted)]">Project Type</span>
              <input
                type="text"
                placeholder="Portfolio, business site, dashboard, redesign"
                className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-elev)] px-4 py-3 text-sm outline-none"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-[var(--muted)]">Project Details</span>
              <textarea
                rows={5}
                placeholder="Share goals, timeline, and current challenges"
                className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-elev)] px-4 py-3 text-sm outline-none"
              />
            </label>
            <button
              type="button"
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black md:col-span-2 md:w-fit"
            >
              Send Inquiry
            </button>
          </form>
        </article>

        <aside className="surface rounded-3xl p-6">
          <h2 className="text-2xl font-semibold">Direct Channels</h2>
          <div className="mt-4 space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl border border-[var(--ring)] px-4 py-3"
              >
                <span className="text-xs uppercase tracking-[0.12em] text-[var(--soft)]">
                  {link.label}
                </span>
                <p className="mt-1 text-sm text-[var(--muted)]">{link.value}</p>
              </a>
            ))}
            <a
              href="/Karan-CV.txt"
              download
              className="block rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black"
            >
              Download CV
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
