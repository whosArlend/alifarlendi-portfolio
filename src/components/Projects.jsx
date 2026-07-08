import { ExternalLink } from "lucide-react"
import SectionWrapper from "./SectionWrapper"
import { IconGitHub } from "./Icons"
import { projectsContent } from "../data/content"

function ProjectCard({ project }) {
  const hasLiveLink = project.live && project.live !== "#"

  return (
    <article className="group flex flex-col border border-gray-300 p-6 transition-colors hover:border-black">
      <h3 className="text-lg font-semibold text-black">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 px-2 py-0.5 text-xs text-black"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-black link-underline"
        >
          <IconGitHub size={14} />
          GitHub
        </a>
        {hasLiveLink && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-black link-underline"
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {projectsContent.heading}
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsContent.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
