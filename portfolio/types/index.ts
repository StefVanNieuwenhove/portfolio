import { ReactNode } from "react"

export type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  status: "WIP" | "Live"
}
export type TechLogoItem = {
  node: ReactNode
  title: string
  href?: string
}
