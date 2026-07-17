# Effortless Beauty — context

Discovery notes, design references, and agent instructions. **Not deployed.**

## Design reference

Homepage mockup: [`homepage-design-v2-desktop.png`](./homepage-design-v2-desktop.png)

Client inspiration (Anomalie Beauty): near-full-width photography with a thin viewport border (`frame-bleed` / `frame-media` in `src/styles/global.css`). Prefer that framed editorial treatment over heavy card radii for large imagery.

## Brand colors (from Brand Guide SVGs)

| Token | Hex | Usage |
| --- | --- | --- |
| Brand stone | `#8b939a` | Logo, subtle text |
| Dark grey | `#394143` | Muted text |
| Black | `#231f20` | Primary text, buttons |
| Light grey | `#b3bbc2` | Text on dark backgrounds |
| Cream | `#f9f7f2` | Page background (design) |
| Beige | `#f0ebe3` | Section panels |
| Charcoal | `#121212` | Dark bands (As Seen In, Explore, footer bar) |
| Gold accent | oklch gold scale | Accent headlines, CTA background |

Brand assets: `../../Brand Guide/Effortless Beauty Brand/`

## Client

| | |
|---|---|
| **Business** | Effortless Beauty — wedding hair & makeup |
| **Location** | 1304 Atlantic Ave, Knoxville, TN 37917 |
| **Phone** | (865) 505-7713 |
| **Site** | https://www.theeffortlessbeautyco.com |
| **Collective** | Sister brands Effortless Glow & Effortless Head Spa — separate repos |

## Scope (current)

Homepage plus starter interior pages (Experience, About, On-site, In-studio, Pricing, Gallery, FAQs, Contact, Check Your Date, Wedding Planners, Careers). Copy lives in `src/config/` — match the design system, not hardcoded in components.

## Agent notes

- Project lives at `effortless-collective/effortless-beauty/`
- Interior pages are intentionally simple starters — expand when requested
- Replace placeholder images in `public/images/` with shared collective photography when ready
