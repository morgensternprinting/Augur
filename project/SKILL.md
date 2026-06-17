---
name: augur-design
description: Use this skill to generate well-branded interfaces and assets for Augur — a table-side companion app for Warhammer: The Old World (sober tactical instrument, dark-mode, French UI) — either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `styles.css` — the single entry stylesheet (imports fonts + all tokens). Link this one file.
- `tokens/` — colors, typography, spacing, effects (CSS custom properties).
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing).
- `components/core/` — Button, IconButton, Stepper, Switch, Segmented, Card, Badge, StatPill.
- `components/data/` — VPMeter, OutcomeBar, OutcomeLegend, UnitStatCard, StatusDot (the combat-intelligence primitives).
- `ui_kits/augur/` — interactive click-through of all four screens, including the 3 result-screen variations.
- `assets/icons.md` — Lucide icon working set.

## Design essence
Dark-first instrument, not a fan site. Cool slate neutrals, one steel-cyan signal accent, and a 5-step outcome spectrum (win → FUIR). IBM Plex superfamily; Plex Mono for all stats. The hero metric everywhere is the **expected net VP swing** — signed, colour-coded, paired with a direction word. FUIR (flee) is the only element allowed a glow. French « tu » voice, no emoji, no Games Workshop IP.
