export default function Home() {
  const skills = {
    "Front-End": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Bootstrap",
      "jQuery",
      "React.js",
    ],
    "Back-End": ["PHP", "Node.js", "Express.js"],
    "CMS & Tools": ["WordPress", "Custom Theme Development"],
    Database: ["MySQL", "MongoDB"],
    "Currently Learning": ["Next.js", "TypeScript"],
    "Version Control": ["Git", "GitHub"],
  };

  const projects = [
    {
      name: "Braque Travel",
      link: "https://braquetravel.co.uk",
      detail:
        "Full-featured travel agency website with booking pages, destination galleries, and contact forms.",
      stack: "HTML, CSS, JavaScript, Bootstrap, jQuery, PHP",
    },
    {
      name: "Hajj & Umrah Agency Platform",
      detail:
        "Developed a complete multi-page website for a Hajj & Umrah travel agency with package listings and inquiry system.",
      stack: "PHP, Bootstrap, responsive layouts, form handling",
    },
    {
      name: "React Web Applications",
      detail:
        "Built interactive single-page applications using component-based architecture and state management.",
      stack: "React.js",
    },
    {
      name: "WordPress Custom Themes",
      detail:
        "Designed and built custom WordPress themes that allow non-technical clients to manage content easily.",
      stack: "WordPress, custom theme development",
    },
    {
      name: "PHP-Based Web Application (MCA System)",
      detail:
        "Created a multi-module web app for data management and reporting.",
      stack: "PHP, MySQL, Bootstrap, jQuery",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Web Developer
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Karan
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            Motivated and detail-oriented Web Developer currently pursuing BS
            Information Technology at PUCIT, Punjab University. Skilled in
            building responsive, user-centric web applications using modern
            front-end and back-end technologies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:karan@email.com"
              className="rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-100"
            >
              karan@email.com
            </a>
            <a
              href="https://linkedin.com/in/karan-dev"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-100"
            >
              linkedin.com/in/karan-dev
            </a>
            <a
              href="https://braquetravel.co.uk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-100"
            >
              braquetravel.co.uk
            </a>
            <span className="rounded-full border border-slate-300 px-4 py-2">
              Lahore, Pakistan
            </span>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="mt-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Web Developer | Seabricks</h3>
                <p className="text-sm text-slate-600">Current - Pakistan</p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  Designed and developed responsive front-end interfaces for
                  multiple client projects, including travel agency websites.
                </li>
                <li>
                  Built dynamic web applications using PHP with Bootstrap and
                  jQuery for server-side logic and interactive UI components.
                </li>
                <li>
                  Developed and customized WordPress themes from scratch for
                  tailored CMS solutions.
                </li>
                <li>
                  Integrated REST APIs and third-party services into web
                  applications.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver projects
                  on time and within scope.
                </li>
                <li>
                  Maintained and improved legacy codebases with a focus on code
                  quality and performance.
                </li>
              </ul>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-semibold">Education</h2>
              <p className="mt-4 font-medium">BS Information Technology</p>
              <p className="text-slate-700">
                Punjab University College of Information Technology (PUCIT)
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Currently Enrolled - Undergraduate
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-semibold">Languages</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>Urdu - Native</li>
                <li>English - Professional</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-slate-200 p-4"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-blue-700 hover:underline"
                  >
                    {project.link}
                  </a>
                ) : null}
                <p className="mt-3 text-sm text-slate-700">{project.detail}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  Stack: {project.stack}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold">{category}</h3>
                <p className="mt-2 text-sm text-slate-700">{items.join(" • ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Strengths</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-slate-200 p-3">
              Responsive Web Design
            </li>
            <li className="rounded-xl border border-slate-200 p-3">
              Cross-browser Compatibility
            </li>
            <li className="rounded-xl border border-slate-200 p-3">
              Fast Learner & Self-driven
            </li>
            <li className="rounded-xl border border-slate-200 p-3">
              Problem Solving
            </li>
            <li className="rounded-xl border border-slate-200 p-3">
              Team Collaboration
            </li>
            <li className="rounded-xl border border-slate-200 p-3">
              Client-focused Delivery
            </li>
          </ul>
        </section>

        <footer className="pb-4 text-center text-sm text-slate-600">
          Built with Next.js and ready for Vercel deployment.
        </footer>
      </main>
    </div>
  );
}
