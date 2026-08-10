import Link from "next/link"
import { ArrowRight, Code2, Layers3, Server } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const t = useTranslations("home")

  return (
    <div>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto w-full max-w-6xl px-6 py-32">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              {t("badge")}
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              {t("hero.title")}
              <br />

              <span className="text-muted-foreground">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg">
                <Link href="/projects">
                  {t("hero.work")}

                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                <Link href="/contact">{t("hero.contact")}</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition hover:text-foreground"
                aria-label="GitHub"
              >
                <FaGithub className="size-5" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition hover:text-foreground"
                aria-label="LinkedIn"
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
              {t("whatIDo.label")}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {t("whatIDo.title")}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {t("whatIDo.description")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Frontend */}
            <Card>
              <CardContent className="p-6">
                <Code2 className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">
                  {t("whatIDo.frontend.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t("whatIDo.frontend.description")}
                </p>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card>
              <CardContent className="p-6">
                <Layers3 className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">
                  {t("whatIDo.backend.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t("whatIDo.backend.description")}
                </p>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card>
              <CardContent className="p-6">
                <Server className="mb-5 size-8" />

                <h3 className="text-lg font-semibold">
                  {t("whatIDo.infrastructure.title")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t("whatIDo.infrastructure.description")}
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
            {t("cta.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("cta.description")}
          </p>

          <Button className="mt-8" size="lg">
            <Link href="/contact">
              {t("cta.button")}

              <ArrowRight data-icon="inline-end" className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
