import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import type { Project } from "@/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20">
      <CardHeader>
        <h2 className="text-xl font-semibold">{project.title}</h2>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-8">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <FaGithub className="size-4" />
            GitHub
          </Link>

          {project.status === "WIP" ? (
            <Badge
              variant="secondary"
              className="bg-orange-50 p-3 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
            >
              WIP
            </Badge>
          ) : (
            <Link
              href={project.demo}
              target="_blank"
              className="text-sm font-medium hover:underline"
            >
              <Badge
                variant="secondary"
                className="bg-green-50 p-3 text-green-700 dark:bg-green-950 dark:text-green-300"
              >
                Live demo
              </Badge>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
