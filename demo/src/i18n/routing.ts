import { defineRouting } from "next-intl/routing";

// "nl" is used for the Belgian (Dutch) version of the site, "en" for English.
export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "always"
});

export type Locale = (typeof routing.locales)[number];
