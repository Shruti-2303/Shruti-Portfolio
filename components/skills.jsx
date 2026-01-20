export function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      subtitle: "Languages and frameworks I use daily",
      skills: ["JavaScript (ES6+)", "React.js", "Next.js", "TypeScript"],
    },
    {
      title: "UI & Styling",
      subtitle: "Building responsive, accessible interfaces",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "SCSS/Sass", "Responsive Design"],
    },
    {
      title: "Tools & Workflow",
      subtitle: "Development and collaboration tools",
      skills: ["Git & GitHub", "REST APIs", "Webpack/Vite", "CI/CD", "Figma"],
    },
    {
      title: "Additional Skills",
      subtitle: "Other areas of expertise",
      skills: ["Performance Optimization", "SEO", "CMS Integration", "Testing", "Debugging"],
    },
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">SKILLS</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Technical expertise</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-2 text-xl font-bold text-foreground">{category.title}</h3>
            <p className="mb-6 text-sm text-muted-foreground">{category.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-muted px-3 py-1.5 text-sm text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
