import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/cards"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <div className="max-w-3xl">
        <Badge variant="secondary">Projects</Badge>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Things I&apos;ve built.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A selection of applications and projects I&apos;ve worked on, ranging
          from web applications to backend systems and infrastructure.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
