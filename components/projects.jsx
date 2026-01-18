"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A high-performance e-commerce solution with dynamic product filtering, cart management, and payment integration.",
    problem: "Client needed a fast, scalable online store to handle 10k+ daily visitors.",
    solution: "Built with Next.js for SSR/SSG, optimized images, and integrated Stripe for payments.",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets.",
    problem: "Team needed a centralized view of business metrics with real-time updates.",
    solution: "Created modular dashboard with React Query for data fetching and Recharts for visualization.",
    tech: ["React", "TypeScript", "React Query", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Content Management System",
    description: "Headless CMS integration for a media company with dynamic page builder and SEO tools.",
    problem: "Content team struggled with non-technical page updates and SEO optimization.",
    solution: "Integrated Sanity CMS with Next.js, built custom page builder components.",
    tech: ["Next.js", "Sanity CMS", "SCSS", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Featured work</h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing problem-solving, clean code, and attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600/40 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-4 text-sm space-y-2">
                  <p className="text-gray-600">
                    <span className="text-gray-900 font-medium">Problem:</span> {project.problem}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-900 font-medium">Solution:</span> {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Shruti-2303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
            >
              View more on GitHub
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
