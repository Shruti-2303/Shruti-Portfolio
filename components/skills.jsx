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
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">SKILLS</p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Technical expertise</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-lg border border-gray-200 bg-white p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900">{category.title}</h3>
            <p className="mb-6 text-sm text-gray-600">{category.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-900">
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
