# Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui portfolio site with
Dutch (Belgium) and English translations via `next-intl`.

## Getting started

```bash
npm install
```

Then apply your shadcn theme preset (this pulls in the real colors, radius and
fonts from the preset you shared and overwrites `src/app/globals.css` /
`tailwind.config.ts` accordingly — I couldn't run this myself since this
environment has no network access):

```bash
npx shadcn@latest apply --preset b3QvsRnVI
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 — it will redirect to `/nl` (Belgian Dutch) by
default. English lives under `/en`.

## Structure

- `src/app/[locale]/` — pages: home (`page.tsx`), `about/`, `projects/`,
  `contact/`
- `src/app/api/contact/route.ts` — contact form endpoint (currently just logs
  the submission — see the `TODO` inside to wire up a real email provider
  like Resend or Nodemailer)
- `src/components/` — Navbar, Footer, ContactForm, ProjectCard, SocialIcons,
  LanguageSwitcher, ThemeToggle
- `src/components/ui/` — shadcn/ui primitives (button, card, input, etc.)
- `src/data/` — **edit these with your own info**:
  - `techstack.ts` — the list of technologies shown on the About page
  - `projects.ts` — your projects (title, description in both languages,
    tech used, links)
  - `social.ts` — your LinkedIn, GitHub and email
- `messages/en.json`, `messages/nl.json` — all UI text in both languages.
  Update `name`, `role`, `tagline` etc. here.

## Things to personalize

1. Add your photo as `public/profile.jpg` (used on the About page).
2. Fill in `src/data/social.ts`, `src/data/projects.ts`, `src/data/techstack.ts`.
3. Edit the `home` / `about` sections in both `messages/en.json` and
   `messages/nl.json` (name, tagline, bio text).
4. Update the `<title>`/description in `messages/*.json` under `"meta"`.
5. Hook up real email sending in `src/app/api/contact/route.ts`.

## Notes on the language codes

The two locales are `en` (English) and `nl` (used for the Belgian/Dutch
version — shown as "BE" in the language switcher UI, since "be" isn't a
real language code). If you'd rather show "NL" or add a third variant,
that's just a label change in `src/components/language-switcher.tsx`.
