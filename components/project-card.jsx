import { ExternalLink, Github } from "lucide-react"

export function ProjectCard({ title, problem, solution, techStack, liveUrl, githubUrl, featured }) {
  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-8">
      {/* Header with title and icons */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
          {title}
        </h3>
        <div className="flex gap-2 flex-shrink-0">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-muted-foreground leading-relaxed">{solution}</p>

      {/* Problem and Solution sections */}
      <div className="mt-6 space-y-3 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">Problem:</span> {problem}
        </div>
        <div>
          <span className="font-semibold text-foreground">Solution:</span> {solution}
        </div>
      </div>

      {/* Tech stack pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
