# Augur — Design System

**Augur** is a table-side companion app for the tabletop wargame *Warhammer: The Old World*. It is used by a single player **during a game**, between dice rolls, often in dim light and operated with one hand. Augur is not another army-list builder (a saturated market). Its edge is that it knows the **live game state** — both rosters, casualties over the turns, and current Victory Points — and uses that to (1) **assist the complex combat phase** and (2) **inform engagement decisions through a probability engine**.

The identity is deliberately a **sober instrument**, not a fan site: no Games Workshop marks, logos, or visual IP. Think tactical readout / field calculator, dark-first, high contrast, glanceable.

> **Brand name origin:** an *augur* read omens before battle — a fitting, IP-safe name for a tool that forecasts the outcome of an engagement.

---

## Sources

This is a **greenfield** design system — no codebase, Figma, or prior brand was provided. The product context comes entirely from the product brief (4 key screens, French UI, dark mode, smartphone, table-side use). All visual decisions below are original to this system.

---

## The four screens

1. **Sélection du combat** — pick the two engaged units from loaded rosters; profiles auto-fill; tweak attacks & static resolution modifiers (ranks, banner, charge, flank/rear), toggle *Inébranlable* (Unbreakable).
2. **Résultat probabiliste** *(hero screen)* — output of a Monte-Carlo engine. The **hero metric is the expected NET Victory-Point swing** of the engagement, not "% win". Also: a stacked bar of each unit's outcome probabilities (l'emporter / égalité / céder du terrain / reculer en bon ordre / **FUIR**), with FUIR (flee = catastrophe) emphasised, and a **"mauvais échange"** warning (high chance to win the combat but low VP gain). Shipped in **3 variations**.
3. **Assistant de phase de combat** — step-by-step through the 4 Old World sub-phases (Choisir & Combattre → Calculer le résultat → Test de Break → Poursuite). Minimal input, big buttons, runs break tests on the unit's Cd.
4. **Tracker d'état de partie & PV** — overview of both armies, per-unit status, live VP counters, scenario objectives. "Who's leading, and by how much" at a glance.

### VP metric — visual hierarchy choices

The expected net VP swing is the single most important number in the app, so it gets the loudest treatment in the system:

- Rendered in `--fs-hero` (56px) **Plex Sans Condensed Bold**, the only element at that size on its screen.
- **Signed and colour-coded**: positive → `--positive` (green), negative → `--danger` (red), with an explicit `+`/`−`. Colour does the work before the digits are read.
- Always paired with a **direction word** ("en ta faveur" / "en ta défaveur") so colour is never the only signal (accessibility in low light).
- The flee probability (`FUIR`) is the only data point allowed a **glow** (`--glow-flee`) — it is the catastrophe outcome and must jump out.
- A **"mauvais échange"** banner overrides everything when win-chance is high but VP gain is low.

---

## CONTENT FUNDAMENTALS

**Language:** the UI is **French** (the brief and the game's outcome vocabulary are French). Game terms keep their Old World French names: *Inébranlable*, *Test de Break*, *Force d'Unité (FU)*, *Commandement (Cd)*, *Poursuite*.

**Voice:** terse, second-person, table-side. The app addresses the player as **« tu »** ("en ta faveur", "ton unité"), the register of a teammate leaning over the table — never corporate « vous ». Sentences are short imperatives or single noun-phrases ("Lance le test de break", "Choisis l'unité adverse").

**Casing:** sentence case for everything readable; **UPPERCASE only** for tiny eyebrow labels and stat keys (`CC`, `F`, `E`, `PV`, `FUIR`), tracked at `--ls-label`. Outcome names are sentence case except the catastrophe **FUIR**, which is uppercased for emphasis.

**Numbers:** always in Plex Mono, tabular. VP swings are signed (`+148`, `−92`). Probabilities are whole percentages (`63 %`, French spacing — space before `%`). Profile stats stay compact (`CC 4 · F 3 · E 4`).

**Tone words:** *engagement, échange, issue, pertes, gain net, en bon ordre, catastrophe*. Calm and analytical, not hype. No exclamation marks except the implicit alarm of FUIR.

**Emoji:** none. This is an instrument. Iconography is line-based (see ICONOGRAPHY).

---

## VISUAL FOUNDATIONS

**Overall vibe:** a calm, high-contrast field instrument read in the dark. Flat surfaces separated by lightening (not by heavy shadow), hairline borders, monospaced readouts, and a single cyan "signal" accent. The drama is reserved entirely for the data — the chrome stays quiet.

**Colour:**
- **Neutrals** are a cool charcoal slate ramp (`--slate-950 → --slate-50`). The app background is `--slate-900` (#0C0F14); cards lighten upward (`--surface-1/2/3`). Elevation is communicated by **getting lighter**, the dark-UI convention — shadows are subtle and only used on sheets/popovers.
- **One brand accent**: steel cyan `--signal-500` (#3FA7D6). Used for interactive emphasis, selected states, the live readout. Never decorative.
- **Outcome spectrum** is the heart of the palette: a 5-step good→bad ramp — green `--out-win`, steel `--out-draw`, gold `--out-give`, orange `--out-fallback`, red `--out-flee`. These map 1:1 to combat outcomes and recur in bars, legends, and status dots so colour alone communicates the result.
- **No gradients** as decoration. The only gradients are functional: subtle top-of-sheet scrims and the stacked outcome bar's segment fills (flat colour, not gradient). Avoid bluish-purple gradients entirely.

**Type:** the **IBM Plex** superfamily. Plex Sans Condensed for titles & the hero numeral (condensed = militant, space-efficient on a phone), Plex Sans for UI/body, **Plex Mono for all stats and numerals** (tabular figures read like an instrument). Big sizes; nothing reading-critical below 14px, labels at 11px.

**Spacing & layout:** 4px grid. `--screen-pad` 16px gutters. Touch targets never below 44px; primary phase-assistant actions are 60px. Single-column, thumb-reachable; primary actions pinned to the bottom safe area. Content is "glanceable" — one decision per screen region.

**Backgrounds:** flat `--slate-900`. No imagery, no photos, no textures, no hand illustration — an instrument has a black face. Optional: a barely-there 1px grid or vignette on the result screen only, never busy.

**Borders & cards:** cards are `--surface-1/2` with a `--border-subtle/default` hairline and `--r-lg` (16px) radius. Controls use `--r-md` (12px). Pills/chips `--r-pill`. Borders are low-alpha cool white over the surface, not solid grey lines.

**Shadows:** `--shadow-1/2/3` are soft and dark, used only for raised sheets, dialogs, and the bottom action bar's lift. Inset hairline (`--inset-hairline`) crisps up panels on dark.

**Glow / emphasis:** strictly rationed. `--glow-signal` marks the live/selected element; `--glow-flee` is reserved for the FUIR (catastrophe) figure. Nothing else glows.

**Motion:** quick and unfussy — `--dur-fast/base` with `--ease-out`. Counters tick, bars grow from 0 once on mount, sheets slide up. No bounce, no parallax, no infinite loops (the player is mid-game). Respect `prefers-reduced-motion`.

**States:**
- *Hover* (desktop preview): surface lightens one step (`--surface-hover`); accent buttons lighten to `--signal-400`.
- *Press*: scale `0.97` + slight darken; instant (`--dur-fast`).
- *Selected*: signal border + `--signal-soft` fill (+ glow on the primary selection).
- *Disabled*: `--text-disabled`, 40% control opacity, no shadow.
- *Focus*: `--ring` (2px gap + 2px signal ring).

**Transparency / blur:** sparingly — the bottom action bar and modal scrims use a dark `backdrop-filter: blur` over translucent `--slate-950`. Outcome "soft" tokens (`--out-*-soft`) are low-alpha fills behind related text.

---

## ICONOGRAPHY

Augur uses **Lucide** (https://lucide.dev) — open-source, MIT, consistent 2px-stroke line icons that suit the sober-instrument look. They are loaded from CDN (`lucide@latest`) in the UI kit and rendered as inline SVG via `data-lucide`.

> **Substitution flag:** no icon set was provided with the brief, so Lucide is a chosen default, not a copy of an existing system. Swap freely if the team prefers another 2px line set (Phosphor, Tabler) — keep stroke weight at ~2px and the line (not filled) style.

Rules:
- **Line, not filled.** Stroke `1.75–2px`, `currentColor`, sized 20/24px to match touch context.
- Icons **support** labels, they don't replace them in this low-light context — pair an icon with its text on primary actions.
- **No emoji. No Unicode pictographs.** Status is shown with coloured dots (`--status-*`) + a word, not glyphs.
- Dice/combat semantics use neutral Lucide glyphs (`swords`, `shield`, `dices`, `flag`, `chevron-up`) — never GW-style or fantasy art.

See `assets/icons.md` for the working set used across the kit.

---

## INDEX

**Foundations**
- `styles.css` — entry point (import list only)
- `fonts/fonts.css` — IBM Plex via Google Fonts
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css`
- `guidelines/*.card.html` — foundation specimen cards (Type, Colors, Spacing)

**Components** (`components/`)
- `core/` — Button, IconButton, Stepper, Switch, Segmented, Card, Badge, StatPill
- `data/` — OutcomeBar, VPMeter, UnitStatCard, OutcomeLegend, StatusDot

**UI kit** (`ui_kits/augur/`)
- `index.html` — interactive click-through of all four screens
- `CombatSelect.jsx` · `ResultProbabilistic.jsx` (3 variations) · `CombatAssistant.jsx` · `GameTracker.jsx`

**Meta**
- `SKILL.md` — Agent-Skill manifest
- `assets/icons.md` — iconography working set

---

## CAVEATS / SUBSTITUTIONS

- **Fonts** load from Google Fonts CDN, not self-hosted — fully offline use needs the `.woff2` files dropped into `fonts/` with local `@font-face` `src`.
- **Icons** are Lucide (CDN), a chosen default since none were supplied.
- Old World rules are represented at the **UI level**, not simulated — stat values and probabilities in the kit are illustrative.
