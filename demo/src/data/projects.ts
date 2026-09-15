export type Project = {
  id: string;
  title: string;
  description: { en: string; nl: string };
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// Edit this list with your own projects.
export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description: {
      en: "A short description of the first project: what problem it solves and what makes it interesting.",
      nl: "Een korte beschrijving van het eerste project: welk probleem het oplost en wat het interessant maakt."
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one"
  },
  {
    id: "project-two",
    title: "Project Two",
    description: {
      en: "A short description of the second project, focused on the outcome for the client or user.",
      nl: "Een korte beschrijving van het tweede project, met focus op het resultaat voor de klant of gebruiker."
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-two"
  },
  {
    id: "project-three",
    title: "Project Three",
    description: {
      en: "A short description of the third project. Mention the biggest technical challenge you solved.",
      nl: "Een korte beschrijving van het derde project. Vermeld de grootste technische uitdaging die je hebt opgelost."
    },
    tech: ["Next.js", "Prisma", "Stripe"],
    repoUrl: "https://github.com/your-username/project-three"
  }
];
