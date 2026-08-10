import { Briefcase, GraduationCap, MapPin, Code2 } from "lucide-react"

import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { techLogos } from "@/lib/techLogo"
import LogoLoop from "@/components/ui/LogoLoop"

const AboutPage = () => {
  const t = useTranslations("about")

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="max-w-3xl">
        <Badge variant="secondary">{t("badge")}</Badge>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          {t("hero.title")}
          <br />

          <span className="text-muted-foreground">{t("hero.subtitle")}</span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          {t("hero.description")}
        </p>
      </div>

      {/* About cards */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <MapPin className="mb-5 size-7" />

            <h2 className="font-semibold">{t("cards.location.title")}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {t("cards.location.description")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Code2 className="mb-5 size-7" />

            <h2 className="font-semibold">{t("cards.fullStack.title")}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {t("cards.fullStack.description")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <GraduationCap className="mb-5 size-7" />

            <h2 className="font-semibold">{t("cards.learning.title")}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {t("cards.learning.description")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Briefcase className="mb-5 size-7" />

            <h2 className="font-semibold">{t("cards.projects.title")}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {t("cards.projects.description")}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tech stack */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold">{t("techStack.title")}</h2>

        <div className="relative mt-6 h-[200px] overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel={t("techStack.ariaLabel")}
          />
        </div>
      </section>

      {/* Approach */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold">{t("approach.title")}</h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted-foreground">
          <p>{t("approach.paragraph1")}</p>

          <p>{t("approach.paragraph2")}</p>

          <p>{t("approach.paragraph3")}</p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
