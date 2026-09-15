"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  nl: "BE",
  en: "EN"
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-md border p-0.5">
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          size="sm"
          variant={loc === locale ? "secondary" : "ghost"}
          className={cn("h-7 px-2 text-xs")}
          onClick={() => router.replace(pathname, { locale: loc })}
        >
          {labels[loc] ?? loc.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
