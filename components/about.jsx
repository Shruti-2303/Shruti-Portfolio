export function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "Features Shipped" },
    { value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 bg-secondary/30" id="about">
      <div className="space-y-8">
        {/* Section Label */}
        <p className="text-primary font-semibold tracking-wide uppercase text-sm">About Me</p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Frontend developer with a product mindset
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Frontend Developer with 2+ years of experience building production-grade web applications. I've worked
            at product-based startups where I shipped features used by thousands of users, optimized performance
            metrics, and collaborated closely with design and backend teams.
          </p>

          <p>
            My core stack includes <span className="font-semibold text-foreground">JavaScript (ES6+)</span>,{" "}
            <span className="font-semibold text-foreground">React.js</span>, and{" "}
            <span className="font-semibold text-foreground">Next.js</span>. I'm comfortable working with REST APIs,
            headless CMS platforms, and modern tooling like Git, Webpack, and CI/CD pipelines.
          </p>

          <p>
            I believe in writing clean, maintainable code and building components that scale. When I'm not coding, I'm
            usually exploring new web technologies or contributing to open-source projects.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
