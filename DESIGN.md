# DESIGN.md: "Pit lane", calm version

A dark one-page portfolio. Strict, but not dry: one signature detail (the funnel stripe) and quiet motion.
Built as a mix of three references from awesome-design-md, without copying any brand.

| Reference | What we take | What we leave |
|---|---|---|
| BMW M | near-black canvas, a three-colour stripe as a signature | their tricolour, uppercase headlines, car photography |
| Spotify | graphite card layers, pill buttons, small uppercase labels with letter spacing | the green accent, heavy shadows everywhere |
| PlayStation | sections as "chapters", each with one job; generous spacing | blue full-bleed chapters, light 300 display weight |

## Colour

Tokens live in `src/styles/_tokens.scss`.

| Token | Value | Role |
|---|---|---|
| canvas | `#0B0C0E` | page background |
| surface | `#16181C` | cards |
| surface-raised | `#1F2227` | chips, window title bar |
| line | `#2A2E34` | borders, dividers |
| text | `#F2F3F5` | headings, primary text |
| text-muted | `#A3A9B3` | body copy |
| text-faint | `#6E7581` | meta, dates, labels |
| accent-click | `#3D8BFF` | step 1 of the funnel, focus ring, eyebrow |
| accent-lead | `#3EE07A` | step 2 |
| accent-deposit | `#FF6A3D` | step 3 |

Rules:
- Dark theme only.
- Accents are slightly muted, never neon, never used as large fills.
- The funnel gradient (click → lead → deposit) appears only as thin lines: under the header, above section titles, on top of the contact panel.

## Type

- **Manrope** for everything (Latin + Cyrillic). Headings 700 with tight tracking (-0.02 to -0.03em), body 400.
- **JetBrains Mono** only for the postback log and step numbers.
- Uppercase only for small labels (12px, 600, 0.12em tracking).

## Shape and spacing

- 4px spacing scale, sections 64px apart (128px between two section contents).
- Cards: 16px radius, 1px border, no shadow. The hero log window is the only element with a shadow.
- Buttons and chips are pills.

## Motion (motion.dev)

- Hero: the log window fades in, its lines appear one by one, once.
- Sections: fade and rise 24px when they first enter the viewport, cards in a list are staggered by 80ms.
- Hover: borders brighten, buttons and contact cards lift 1-2px.
- `MotionConfig reducedMotion="user"` respects the OS "reduce motion" setting.
- Nothing loops, nothing follows the scroll.

## Code conventions

- camelCase for variables, arguments, functions, and CSS Module class names (`styles.stepTitle`).
- SCSS variables and mixins use kebab-case, the standard SCSS style.
- One folder per component: `Component.tsx` + `Component.module.scss`.

## Logo and header

- Logo: three rounded bars in the funnel colours, indented like lines of code (`src/components/Logo`). The favicon repeats it.
- Menu links: 16px, weight 600.
- Language switch: a toggle with RU on the left and EN on the right. It is a plain link to the other language version, styled as a switch.
