# Effortless Beauty

Marketing website for [Effortless Beauty](https://www.theeffortlessbeautyco.com) — wedding hair and makeup in Knoxville, TN.

Part of the **effortless-collective** monorepo folder. Shared brand assets live in `../Brand Guide/`.

Built with Astro 7, TypeScript, Tailwind CSS v4, and deployed to Vercel.

## Requirements

- Node.js **22+**

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Project structure

```
src/
  config/          # site.ts, home.ts, navigation.ts, media.ts
  components/
    ui/            # Button, Logo, SiteImage
    layout/        # Header, Footer
    home/          # Homepage sections (matches design mockup)
  layouts/         # BaseLayout, SiteLayout
  pages/           # index.astro only (for now)
  styles/          # global.css — Tailwind + brand tokens
context/           # Design mockup + discovery notes
public/
  brand/           # Fancy logo SVGs from brand guide
  images/          # Placeholder photography
```

## Updating content

All homepage copy is in `src/config/home.ts`. Site-wide settings are in `src/config/site.ts` and `src/config/navigation.ts`. Do not hardcode client details in `.astro` files.

Design reference: `context/homepage-design-v2-desktop.png`

## Brand tokens

Colors are derived from the Effortless Beauty brand guide (`#8b939a`, `#394143`, `#231f20`, `#b3bbc2`) plus design-specific cream/beige/gold tokens in `src/styles/global.css`.

## Fonts

- **Termina** — headings ([Fort Foundry](https://webfonts.fortfoundry.com/css/termina.css))
- **Inter** — body (`@fontsource/inter`)

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new) — root directory: `effortless-collective/effortless-beauty`
3. Framework preset: **Astro**
4. Deploy

`@astrojs/vercel` is preconfigured in `astro.config.mjs`.
