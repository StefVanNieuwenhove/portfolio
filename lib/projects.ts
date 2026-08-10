import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "Maintenance Tool",
    description:
      "A maintenance management platform for managing installations, categories, users and maintenance tasks.",
    technologies: [".NET", "Blazor", "MariaDB", "Entity Framework", "Docker"],
    github: "https://github.com",
    demo: "#",
    status: "Live",
  },
  {
    title: "Houssie",
    description:
      "A modern application for managing housing-related information and tasks.",
    technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "#",
    status: "WIP",
  },
  {
    title: "Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript and shadcn/ui.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "#",
    status: "Live",
  },
]
