"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Sketch-Sync Realtime Sketchboard",
    description:
      "A real-time collaborative whiteboarding application that enables multiple users to draw and collaborate simultaneously on a shared canvas interface.",
    problem: "Teams needed a seamless way to collaborate on visual ideas in real-time without lag or synchronization issues.",
    solution: "Built a scalable whiteboard application using Socket.IO for real-time communication, supporting 10+ concurrent users with instant canvas updates and smooth collaboration.",
    tech: ["Socket.IO", "React", "Canvas API", "Node.js", "WebSockets"],
    liveUrl: "https://sketchsync-2303.vercel.app/",
    githubUrl: "https://github.com/Shruti-2303/SketchSync",
  },
  {
    title: "AI Article Summarizer",
    description: "A Chrome extension that intelligently extracts and summarizes web articles using AI, delivering instant summaries in multiple formats.",
    problem: "Users struggled to quickly understand long-form articles and needed a way to get concise summaries without leaving the page.",
    solution: "Developed a Chrome extension leveraging content scripts for article extraction, Google Gemini 2.5 Flash API for summarization, with secure API key management via Chrome Storage and robust error handling.",
    tech: ["Chrome Extension API", "JavaScript", "Google Gemini API", "Chrome Storage", "Content Scripts"],
    liveUrl: "#",
    githubUrl: "https://github.com/Shruti-2303/AI-Article-Summariser",
  },
  {
    title: "ToneShift",
    description: "An intelligent message rewriting tool that instantly transforms text into different tones like professional, friendly, formal, casual, and promotional.",
    problem: "Users needed a quick way to adapt their messages for different contexts and audiences without manual rewriting.",
    solution: "Created a fast, intuitive tool that analyzes text and rewrites it in the selected tone, delivering polished results in under 5 seconds with a simple paste-and-choose interface.",
    tech: ["React", "AI/ML API", "Natural Language Processing", "TypeScript"],
    liveUrl: "https://tone-shift-nine.vercel.app/",
    githubUrl: "https://github.com/Shruti-2303/ToneShift",
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
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured work</h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
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
                className="group flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-4 text-sm space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Problem:</span> {project.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Solution:</span> {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
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
              href="https://github.com/shruti-2303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
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
