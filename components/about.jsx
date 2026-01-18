export function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "Features Shipped" },
    { value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 bg-secondary/30">
      <div className="space-y-8">
        {/* Section Label */}
        <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About Me</p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Frontend developer with a product mindset
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            I'm a Frontend Developer with 2+ years of experience building production-grade web applications. I've worked
            at product-based startups where I shipped features used by thousands of users, optimized performance
            metrics, and collaborated closely with design and backend teams.
          </p>

          <p>
            My core stack includes <span className="font-semibold text-gray-900">JavaScript (ES6+)</span>,{" "}
            <span className="font-semibold text-gray-900">React.js</span>, and{" "}
            <span className="font-semibold text-gray-900">Next.js</span>. I'm comfortable working with REST APIs,
            headless CMS platforms, and modern tooling like Git, Webpack, and CI/CD pipelines.
          </p>

          <p>
            I believe in writing clean, maintainable code and building components that scale. When I'm not coding, I'm
            usually exploring new web technologies or contributing to open-source projects.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
