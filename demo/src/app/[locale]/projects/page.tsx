import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
