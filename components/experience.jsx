export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Product-Based Startup",
      period: "Jan 2023 – Present",
      location: "Remote",
      achievements: [
        "Built and shipped 10+ user-facing features for a SaaS platform, improving user engagement by 25%",
        "Developed reusable React component library, reducing development time by 40% across projects",
        "Implemented performance optimizations that reduced page load time from 4s to 1.2s",
        "Collaborated with backend engineers to integrate REST APIs and GraphQL endpoints",
        "Led migration from legacy codebase to Next.js, improving SEO and Core Web Vitals scores",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Web Agency",
      period: "Jun 2021 – Dec 2022",
      location: "Hybrid",
      achievements: [
        "Developed responsive landing pages and web applications for 15+ client projects",
        "Worked with design team to convert Figma mockups into pixel-perfect React components",
        "Maintained and improved existing codebases, fixing bugs and implementing new features",
        "Participated in code reviews and followed Agile methodologies in sprint planning",
      ],
    },
  ]

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-secondary">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-primary font-semibold tracking-wider text-sm mb-4">EXPERIENCE</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Where I've worked</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Icon and timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                <div className="text-primary font-semibold text-lg mb-2">{exp.company}</div>
                <div className="text-muted-foreground mb-6">
                  {exp.period} · {exp.location}
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
