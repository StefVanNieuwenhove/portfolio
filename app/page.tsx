import Link from "next/link"
import { ArrowRight, Code2, Layers3, Server } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-32">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              Software Developer
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              I build software
              <br />
              <span className="text-muted-foreground">
                that solves real problems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              I&apos;m Stef, a software developer focused on building reliable,
              scalable and modern applications using technologies like .NET,
              React, Next.js and Docker.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg">
                <Link href="/projects">
                  View my work
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <FaGithub className="size-5" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <FaLinkedin className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              WHAT I DO
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              From idea to production.
            </h2>

            <p className="mt-4 text-muted-foreground">
              I enjoy working across the entire stack — from designing
              interfaces to building APIs, databases and deployment
              infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Code2 className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">Frontend</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Modern, responsive interfaces with React, Next.js, TypeScript
                  and Tailwind CSS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Layers3 className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">Backend</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  APIs and business logic using .NET, Node.js, Entity Framework
                  and Prisma.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Server className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">Infrastructure</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Docker, Linux, databases, reverse proxies and self-hosted
                  infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let&apos;s build something useful, scalable and well-designed.
          </p>

          <Button className="mt-8" size="lg">
            <Link href="/contact">
              Start a conversation
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
