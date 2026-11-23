# Andrey Melnichuk · Portfolio

One-page portfolio: Technical Integrator with a frontend background. Russian and English versions.

## Stack

- **Next.js 16** (App Router, Server Components, Cache Components / Partial Prerendering)
- **React 19**, **TypeScript**
- **SCSS** with CSS Modules, design tokens in `src/styles/_tokens.scss`
- **motion** (motion.dev) for entrance and scroll animations
- `next/font` for Manrope and JetBrains Mono

## How it is put together

```
src/
  proxy.ts                 redirects "/" to /en or /ru (cookie, then Accept-Language)
  i18n/
    config.ts              list of locales, type guard
    getDictionary.ts       loads the dictionary for the current locale via next/root-params
    dictionaries/          en.json, ru.json (all page text)
  app/[lang]/              root layout + page, prerendered for each locale
  components/              one folder per section: Component.tsx + Component.module.scss
  styles/                  tokens, mixins, globals
  data/contactLinks.ts     Telegram, email, GitHub, CV
public/                    CV pdf, favicon
```

- Everything is a Server Component except `MotionProvider`, `Reveal` and `PostbackLog`: those use motion and need the browser.
- Text lives only in the dictionaries. To change a phrase, edit `en.json` and `ru.json`. TypeScript fails the build if the two files get different shapes.
- Design decisions: `DESIGN.md`.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deploy

Vercel: import the repository, no settings needed.
