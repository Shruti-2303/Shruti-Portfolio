import { ExternalLink, Github } from "lucide-react"

export function ProjectCard({ title, problem, solution, techStack, liveUrl, githubUrl, featured }) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-8">
      {/* Header with title and icons */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
          {title}
        </h3>
        <div className="flex gap-2 flex-shrink-0">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">{solution}</p>

      {/* Problem and Solution sections */}
      <div className="mt-6 space-y-3 text-sm text-gray-600">
        <div>
          <span className="font-semibold text-gray-900">Problem:</span> {problem}
        </div>
        <div>
          <span className="font-semibold text-gray-900">Solution:</span> {solution}
        </div>
      </div>

      {/* Tech stack pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
