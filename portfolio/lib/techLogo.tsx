import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiSharp,
  SiDocker,
  SiPostgresql,
  SiMariadb,
  SiApple,
  SiLinux,
  SiSpring,
  SiExpress,
} from "react-icons/si"
import { FaHtml5, FaJava, FaCss3, FaPython, FaGitAlt } from "react-icons/fa"
import type { TechLogoItem } from "@/types"

export const techLogos: TechLogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <FaHtml5 />, title: "HTML", href: "https://html.com" },

  { node: <FaCss3 />, title: "CSS", href: "https://css.com" },
  { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
  {
    node: <SiSharp />,
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  { node: <FaJava />, title: "Java", href: "https://java.com" },
  { node: <SiSpring />, title: "Spring", href: "https://spring.io" },
  { node: <FaPython />, title: "Python", href: "https://python.org" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" },
  { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
  { node: <SiApple />, title: "Apple", href: "https://apple.com" },
  { node: <SiLinux />, title: "Linux", href: "https://linux.org" },
]
