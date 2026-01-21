"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Core Technologies",
    description: "Languages and frameworks I use daily",
    skills: ["JavaScript (ES6+)", "React.js", "Next.js", "TypeScript"],
  },
  {
    title: "UI & Styling",
    description: "Building responsive, accessible interfaces",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "SCSS/Sass", "Responsive Design"],
  },
  {
    title: "Tools & Workflow",
    description: "Development and collaboration tools",
    skills: ["Git & GitHub", "REST APIs", "Webpack/Vite", "CI/CD", "Figma"],
  },
  {
    title: "Additional Skills",
    description: "Other areas of expertise",
    skills: ["Performance Optimization", "SEO", "CMS Integration", "Testing", "Debugging"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Skills
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical expertise
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
