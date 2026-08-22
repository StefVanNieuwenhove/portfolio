import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ContactPage = () => {
  const t = useTranslations("contact")

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

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {t("hero.description")}
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.5fr]">
        {/* Contact information */}
        <div className="space-y-8">
          {/* Email */}
          <div>
            <Mail className="mb-4 size-6" />

            <h2 className="font-semibold">{t("email.title")}</h2>

            <Link
              href="mailto:stef.vannieuwenhove@telenet.be"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              stef.vannieuwenhove@telenet.be
            </Link>
          </div>

          {/* GitHub */}
          <div>
            <FaGithub className="mb-4 size-6" />

            <h2 className="font-semibold">{t("github.title")}</h2>

            <Link
              href="https://github.com/stevannieuwenhove"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              github.com/stevannieuwenhove
            </Link>
          </div>

          {/* LinkedIn */}
          <div>
            <FaLinkedin className="mb-4 size-6" />

            <h2 className="font-semibold">{t("linkedin.title")}</h2>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              linkedin.com
            </Link>
          </div>
        </div>

        {/* Contact form */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t("form.name.label")}</Label>

                <Input
                  id="name"
                  name="name"
                  placeholder={t("form.name.placeholder")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("form.email.label")}</Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("form.email.placeholder")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("form.message.label")}</Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("form.message.placeholder")}
                  className="min-h-40"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {t("form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage
