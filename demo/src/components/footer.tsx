import { useTranslations } from "next-intl";

import { SocialIcons } from "@/components/social-icons";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} Your Name. {t("rights")}
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
