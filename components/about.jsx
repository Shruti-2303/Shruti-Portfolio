"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Frontend developer with a product mindset
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Frontend Developer with 2+ years of experience building 
              production-grade web applications. I've worked at product-based 
              startups where I shipped features used by thousands of users, 
              optimized performance metrics, and collaborated closely with 
              design and backend teams.
            </p>
            <p>
              My core stack includes <strong className="text-foreground">JavaScript (ES6+)</strong>, 
              <strong className="text-foreground"> React.js</strong>, and 
              <strong className="text-foreground"> Next.js</strong>. I'm comfortable 
              working with REST APIs, headless CMS platforms, and modern tooling 
              like Git, Webpack, and CI/CD pipelines.
            </p>
            <p>
              I believe in writing clean, maintainable code and building 
              components that scale. When I'm not coding, I'm usually exploring 
              new web technologies or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 pt-10 border-t border-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">2+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Features Shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
