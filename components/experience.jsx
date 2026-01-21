"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Product-Based Startup",
    period: "Jan 2023 – Present",
    location: "Remote",
    points: [
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
    points: [
      "Developed responsive websites for 15+ clients using React and modern CSS frameworks",
      "Integrated headless CMS solutions (Strapi, Contentful) for dynamic content management",
      "Implemented pixel-perfect designs from Figma mockups with cross-browser compatibility",
      "Debugged and resolved complex UI issues, reducing bug reports by 30%",
      "Mentored interns on React best practices and component architecture",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Experience
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Where I've worked
            </h3>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute -left-3 top-0 p-1.5 bg-background border-2 border-primary rounded-full">
                  <Briefcase size={14} className="text-primary" />
                </div>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary mt-2 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
