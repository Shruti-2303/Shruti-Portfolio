"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export function Hero() {
  const scrollToSection = useScrollToSection()
  return (
    <section id="home" className="flex min-h-[calc(100vh-73px)] items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl">
        <p className="text-primary text-base md:text-lg font-medium mb-4">Hello, I'm</p>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground">Frontend Engineer building</span>
          <br />
          <span className="text-primary">scalable web experiences</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          I specialize in React and Next.js to deliver high-performance, user-centric interfaces. Focused on clean code,
          accessibility, and creating products that users love.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
            >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="cursor-pointer">
            Get in Touch
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <a
            href="https://github.com/Shruti-2303"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-sharma-2303/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
