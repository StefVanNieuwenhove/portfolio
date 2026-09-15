import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SocialIcons } from "@/components/social-icons";
import { techStack } from "@/data/techstack";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="container max-w-4xl py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>

      <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Avatar className="h-32 w-32 sm:h-40 sm:w-40">
          {/* Replace src with your own photo, e.g. /profile.jpg in /public */}
          <AvatarImage src="/profile.jpg" alt="Your Name" />
          <AvatarFallback className="text-2xl">YN</AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <p className="max-w-xl text-muted-foreground">{t("intro")}</p>
          <div>
            <p className="mb-2 text-sm font-medium">{t("socialTitle")}</p>
            <SocialIcons />
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          {t("techStackTitle")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-3 text-xl font-semibold tracking-tight">
              {t("whyBuildTitle")}
            </h2>
            <p className="text-muted-foreground">{t("whyBuildText")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-3 text-xl font-semibold tracking-tight">
              {t("workWithClientTitle")}
            </h2>
            <p className="text-muted-foreground">{t("workWithClientText")}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
