# Kordas Technologies — Design System

A complete brand & UI design system for **Kordas Technologies**, a Polish AI / IoT / 5G / rapid-prototyping consultancy run by Marcin Kordas (Kraków).

This system contains brand foundations, visual tokens, content guidelines, ready-to-use UI components, slide templates, and document/email templates — everything needed to produce on-brand assets at "professional, mature, multi-million-dollar business" quality.

---

## Status — canonical vs experimental

This folder holds **two distinct visual systems** that were initially shipped together:

- **Root level (`/`)** — the **canonical Kordas Technologies brand**. Light-mode-first, navy `#0f172a` + 3-step blue ramp, Segoe UI / Inter, small radii. Aligned with the existing `kordas-technologies/branding` GitHub repo (logos, email templates, generator scripts). **This is the production brand.** Use it for client-facing material.
- **`_experimental/AXIOM/`** — an exploratory **dark-mode redesign** (cyan + ice in `oklch`, Inter Tight + JetBrains Mono, zero border-radius, 5-pill K-mark). It explicitly **breaks** several rules of the canonical brand (no purples/teals, small radii, light-mode-first). Treat as a **proposal / pitch deck**, not as adopted brand.

> If you're producing material for an actual client / invoice / offer / website launch — use the canonical system in this folder's root, **not** AXIOM.

## Index — what's in this folder

| File / Folder | Purpose |
|---|---|
| `README.md` | This file. Brand context + content + visual + iconography guidelines |
| `SKILL.md` | Agent-skill front-matter + invocation guide |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radius, shadow, motion) |
| `assets/logos/`, `logos/` | Primary, dark, light, icon-only logo files (SVG + PNG) |
| `email-templates/` | Source email templates — formal & casual (Polish), from the repo |
| `preview/` | Design-system tab cards (colors, type, components specimens) |
| `ui_kits/website/` | Marketing website UI kit — homepage, services, case study, contact |
| `templates/email/` | Refined transactional email template |
| `templates/pdf-report/` | A4 technical-report template (PDF-print-ready) |
| `slides/` | Pitch / proposal / report deck templates (`<deck-stage>` web component) |
| `_experimental/AXIOM/` | **Experimental** dark-mode redesign — see its own README |

---

## Source materials

This design system was synthesized from:

- **GitHub:** [`kordas-technologies/branding`](https://github.com/kordas-technologies/branding) — primary source. Contains:
  - Logo files (SVG + PNG, light + dark variants)
  - Email HTML templates (formal & casual, Polish)
  - Python scripts that generate logos, DOCX offer documents, and email builds
  - Brand colors, font stack documented in repo README
- **Real proposal content** observed in `scripts/generate_docx.py` (the Antyszpak/Agrobotyka offer) — used for tone, copy patterns, and document structure.

> Reader note: the GitHub repo is publicly readable but you may not have access. All needed assets have been imported into this project; no live link required.

---

## Company snapshot

**Kordas Technologies** is the consultancy brand of **Marcin Kordas** — positioned as an *AI Innovation Expert*. The business builds smart, cross-stack systems that bridge software and hardware: AI / ML, IoT, 5G, computer-vision, edge inference, and rapid prototyping for industrial and startup clients.

- **Tagline:** *AI · RAPID PROTOTYPING · IoT*
- **Positioning words:** *Smart. Driven. Cross-stack. Innovation.*
- **Audience:** Polish SMBs, agritech / industrial startups, R&D teams. Communication is bilingual but defaults to **Polish** for clients; English for international collaborators.
- **Real-world example projects** (from source materials): bird-detection AI for orchards on Raspberry Pi 5 (Antyszpak / Agrobotyka), home-automation integrations, ROS / robotics work, rental automation, energy MPC libraries.
- **Contact:** Marcin Kordas · biuro@kordas.tech · +48 797 252 208 · Przybyszewskiego 30/2, 30-128 Kraków · NIP 6772446064

---

## CONTENT FUNDAMENTALS

### Voice
**Engineer-as-business-owner.** Confident, technically precise, formally polite. Never breezy or salesy. Never emoji-heavy. The reader is treated as a knowledgeable partner — terms are not over-explained, but obligations and disclaimers are spelled out clearly.

### Bilingual default
- **Polish** for client-facing material (emails, offers, contracts, invoices, marketing).
- **English** acceptable for technical sections, GitHub, internal docs, international collaboration.
- **Tech terms stay English even inside Polish sentences:** *"trening na danych Zamawiającego, integracja z prototypem"*, *"REST + gRPC. Dokumentacja OpenAPI. Health-check."* This is genuine, not affectation — don't translate `pipeline`, `multi-frame confirmation`, `quantization`, `confidence threshold`, `bbox`, `watchdog`.

### Address & person
- Polish: **third-person formal** — *Zamawiający / Wykonawca / Państwo*. Never *Ty/Wy* in business docs.
- Casual variant uses *"Hej,"* greeting and informal phrasing for ongoing-collaboration emails — but still no first names without invitation.
- English: **second-person ("you") with restraint.** Never "we'll crush your KPIs" energy.

### Tone — concrete examples

| Style | ✅ Use | ❌ Avoid |
|---|---|---|
| Greeting (formal) | "Dzień dobry," | "Hi team! 👋" |
| Greeting (casual) | "Hej," | "Yo!" |
| Sign-off (formal) | "Z poważaniem,\nMarcin Kordas" | "Cheers!" |
| Disclaimer | "Niniejsza oferta stanowi szacunek cenowy o charakterze informacyjnym i nie stanowi oferty w rozumieniu art. 66 § 1 KC." | "This is just a rough quote 🙂" |
| Capability claim | "Cel: < 1 s end-to-end. Gwarancja warunkowa progu 65%." | "Lightning-fast AI that just works ⚡" |
| Status badge | `OFERTA CENOWA` / `RAPORT` / `PROPOZYCJA` | *Special offer!! 🎉* |

### Casing rules
- **Headings:** sentence case in Polish (*"Uwaga wstępna"*), **Title Case** acceptable in English.
- **Badges & eyebrows:** `UPPERCASE` with **letter-spacing 0.08em**. The brand's signature look — used on email status badges (`OFERTA CENOWA`), section eyebrows, and the tagline (`AI · RAPID PROTOTYPING · IoT`).
- **Wordmark:** `KORDAS` is **always** uppercase semibold; `TECHNOLOGIES` is **always** uppercase light. Never break this contrast.
- **The middle-dot separator** ` · ` (U+00B7) joins capability lists — *"AI · RAPID PROTOTYPING · IoT"*. Surround with regular spaces, not non-breaking.

### Number & date formatting
- **Currency:** *27 060,00 zł brutto (22 000,00 zł netto + 23% VAT)*. Polish thousands-separator is a non-breaking space; decimal is a comma. Always state `brutto`/`netto` + VAT.
- **Dates:** `01.04.2026` (DD.MM.YYYY) for documents; `2026-04-01` (ISO) acceptable for code/internal.
- **Time periods:** "8 tygodni od podpisania umowy" — always anchored to a concrete trigger, never "ASAP" / "wkrótce".
- **Proposal codes:** `KORDAS/AI/2026/04` style — slash-delimited, uppercase, year + sequence.

### Emoji & ornament — **basically never**
The brand has **zero** emoji in any source material. Avoid them entirely except in casual chat. Replace with:
- Status: a colored badge (blue pill).
- Decorative bullets: middle-dot ` · ` for inline lists, plain `•` for bulleted lists, or numbered tables.
- "Important": a left-border callout box (3px blue border, light-slate fill).

### Vibe — what to lean into
- **Specificity over poetry.** "≥ 65% Precision/Recall, validated on 7+ scenarios" beats "best-in-class accuracy."
- **Reciprocity & contracts.** Mention obligations on both sides — what the Wykonawca delivers, what the Zamawiający must provide.
- **Calm authority.** Short paragraphs. Tables for anything quantitative. Italic gray for cautionary notes.

---

## VISUAL FOUNDATIONS

### Color
- **Anchor:** Navy `#0f172a` — primary text, dark surfaces, the K's main stem.
- **Blue ramp:** `#3b82f6` → `#60a5fa` → `#bfdbfe`. This *three-step ramp* IS the brand — it's the data-bar pattern that builds the K-icon. Use the ramp anywhere you'd otherwise use a gradient.
- **Slate scale:** standard Tailwind-style slate (50–900) for neutrals, borders, secondary text.
- **Background:** `#f8fafc` (page) / `#ffffff` (card). The brand is a **light-mode-first** system; dark surfaces are reserved for the navy header strip and reverse-out cards.
- **Semantics:** green `#16a34a`, amber `#f59e0b`, red `#dc2626`. Used sparingly and only to signal real state.

**Do** lean on the navy + 3-step blue ramp as your entire palette. **Don't** introduce purples, teals, or sunset gradients — they break the engineering-grade tone.

### Typography
- **Family:** `'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif`. Microsoft-ecosystem default with Inter as a near-substitute for non-Windows. **Inter is loaded as the web fallback.**
- **Weight contrast is the hero move:** Semibold (600) paired with Light (300) — exactly how `KORDAS | TECHNOLOGIES` is set in the wordmark. Use this same pairing for hero titles ("BOLD WORD | light word") and for stat displays (semibold number, light label).
- **No serifs anywhere.** No display/script fonts. Mono is JetBrains Mono for code only.
- **Sizes:** see `colors_and_type.css`. 14px body / 16px lead / 24–32px h2 / 44–56px display.
- **Tracking:** tight `(-0.01em)` on display, normal on body, **wide `0.08em` UPPERCASE on eyebrows / badges / tagline**.

> ⚠️ **Substitution flag:** Segoe UI is a Microsoft font and not webfont-licensed. We use **Inter** as the closest open-source substitute when Segoe UI is unavailable (Linux, older systems). This is documented and acceptable — but if you need pixel-exact parity with Windows-rendered docs, install Segoe UI locally. The Python scripts (`generate_logo.py`, `generate_docx.py`) explicitly load Segoe UI from `C:/Windows/Fonts/`.

### Spacing
- **4px base grid.** Tokens `--kt-s-1` through `--kt-s-24` map to `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`px.
- **Density:** documents are dense (Pt 9–10 body), **the web/UI is comfortable** (14px body, 16–24px gaps). Email is in-between.

### Backgrounds
- **Solid surfaces only.** No gradients, no photographic hero backgrounds, no hand-drawn illustrations, no repeating textures.
- The single exception: a **subtle "data-bar" motif** — a row of vertical pills (the icon, abstracted) used as a decorative band on dark hero strips. Use sparingly, never as wallpaper.
- **Full-bleed dark navy header** is the brand's signature page-furniture move (see emails: navy strip + 3px blue accent line below it).

### Animation
- **Quick, no bounce.** 120/180/280ms with `cubic-bezier(0.4, 0, 0.2, 1)`. Engineering-grade ease, not playful spring physics.
- **Acceptable:** opacity / translate fades, color tweens on hover, height auto-collapses, scrubbed scroll-progress.
- **Avoid:** elastic overshoots, particle effects, spinning decorations, parallax. The brand's promise is *reliability*, not *delight-via-motion*.

### Hover states
- **Buttons:** primary blue darkens `#3b82f6` → `#2563eb`; secondary buttons gain a `#f1f5f9` fill.
- **Links:** color goes from `#3b82f6` to `#2563eb`, **plus** an underline (offset 2px) appears.
- **Cards:** shadow steps up one tier (sm → md), border may darken to `--kt-border-strong`. **No translate Y.**

### Press / active states
- **No shrink / scale-down.** Instead, a faster fill change (`#1d4ed8` for primary blue) and a **slight reduction of shadow** (md → sm) — the button feels "pressed in" rather than cartoonishly squashed.

### Borders
- **1px solid** is the only border style.
- Default border: `--kt-border` (`#e2e8f0`). Strong / hover: `--kt-border-strong` (`#cbd5e1`). On dark: `--kt-border-dark` (`#1e293b`).
- **The 3px blue accent rule** (`<hr class="kt-rule-blue">`, 56px wide) — appears under section titles, under email headers, and as the accent under hero h1s. This is a brand-recognizable element.
- **Left-border callouts** (3px blue, light-slate fill) ARE used in this brand for disclaimers — see email templates' callout box. This is the one place a "colored left-border" is on-brand. Don't overuse it in cards.

### Shadows
- **Tight, professional, no glow.**
- Token system: `--kt-shadow-xs` (subtle outline) → `--kt-shadow-xl` (modal). Color is always rgba navy `(15, 23, 42, ...)` — never neutral black.
- **One colored shadow:** `--kt-shadow-blue` for elevated primary CTAs only.
- **No inner shadows** for a "neumorphic" look — the brand is flat.

### Layout
- **Grid:** 12-column, 1200px content max-width (`--kt-container`), 24px gutters.
- **Fixed elements:** sticky top nav with navy bg + 3px blue underline (when scrolled). No floating CTA bubbles.
- **Asymmetric splits acceptable:** 7/5, 8/4 columns for hero + sidebar. Avoid 6/6 — too magazine-y for this brand.

### Transparency & blur
- **Use sparingly.** Acceptable: backdrop-blur on a sticky nav over scrolling content (`backdrop-filter: blur(12px)` + `rgba(248,250,252,0.85)`).
- **Avoid:** translucent cards stacked on photos, frosted-glass modal overlays, "see-through" pricing cards. The brand isn't aesthetic-first.
- Modal scrim: solid `rgba(15, 23, 42, 0.65)` — not a blur.

### Imagery
- **No lifestyle/stock photography in any current asset.** When imagery IS needed, prefer:
  - Cool, technical, low-saturation stills (lab equipment, code-on-screen, hardware close-ups).
  - **Black-and-white or duotone** (navy + blue) is preferred over full color.
  - Slight grain acceptable. No heavy filters / lens flares.
- For abstract decoration, the **data-bar motif** (vertical pills in navy + 3-step blue) is the house pattern.

### Corner radii
- **Small radii are the brand.** 4px on buttons / inputs / badges, 6–8px on cards, 12px max on hero panels.
- **Pill (`999px`) is reserved** for the data-bar shapes themselves, status pills, and the small inline tag chips. Don't pill-ify buttons.

### Cards
- **White (`#ffffff`) fill, 1px slate-200 border, 8px radius, `--kt-shadow-sm` shadow.**
- Padding: 24px standard, 32px on feature cards.
- Hover: shadow → `md`, border → `slate-300`.
- **No decorative gradients, no left-color-stripe accents on cards** (callouts excepted, see Borders above).

### Use of icon / wordmark
- **Wordmark:** `KORDAS | TECHNOLOGIES` with 3px blue rule under "KORDAS" + tagline below. Use in headers, business cards, document covers.
- **Icon-only ("data-bar K"):** favicon, app icon, avatar, watermark in document footers, social profile pic.
- **Minimum sizes:** wordmark ≥ 180px wide; icon ≥ 24px square.
- **Clear space:** at least the height of the icon's vertical stem on all sides.

---

## ICONOGRAPHY

### What the brand uses today
The source repo ships **only the Kordas logo** — there is no proprietary icon set, no icon font, no SVG library. Email templates use **two Unicode glyphs** as inline icons in the signature: `☎` (telephone) and `✉` (envelope), colored brand-blue. That's it.

So the iconography rule for this brand is: **borrow a single, restrained, professional icon library and stick to it.**

### Recommended set: **Lucide** (substitution — flagged)
We adopt **[Lucide](https://lucide.dev)** (open-source, MIT, ~1500 icons) as the system icon set. It's loaded from CDN — no files committed.

**Why Lucide:**
- Stroke-based, **2px stroke weight**, 24×24 viewbox — matches the brand's clean, technical, no-fill aesthetic.
- Same family as the Tailwind / shadcn world the underlying color tokens come from (visual coherence).
- Has every icon Kordas needs: `cpu`, `bot`, `radio-tower` (5G), `wifi`, `boxes` (IoT), `code`, `git-branch`, `rocket`, `phone`, `mail`, `arrow-right`, etc.

**⚠️ Substitution flag:** Lucide is a brand-NEW addition; it was not present in the source repo. If the brand owner has a preferred icon system (custom set, or Phosphor / Heroicons / Material), swap the CDN reference and the rest of the system stays intact.

### How to use icons

```html
<!-- 1. Load Lucide once per page -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- 2. Place an icon -->
<i data-lucide="cpu" class="kt-icon"></i>

<!-- 3. Hydrate -->
<script>lucide.createIcons();</script>
```

```css
.kt-icon {
  width: 20px;
  height: 20px;
  stroke-width: 2;
  color: currentColor;   /* inherits color — usually navy or blue */
  vertical-align: middle;
}
.kt-icon-lg { width: 24px; height: 24px; }
.kt-icon-sm { width: 16px; height: 16px; }
```

### Rules
- **Stroke weight 2px** — never increase, never reduce. Consistent stroke is the whole point of a stroke set.
- **Color = currentColor** — icons inherit text color. Body text → slate; in callouts → blue; on dark headers → white.
- **Sizes:** 16 (inline with body), 20 (default UI), 24 (cards / lists), 32+ (feature blocks).
- **Don't fill** — Lucide is a stroke set; do not toggle to fill versions, do not introduce mixed-fill icons.
- **No emoji as a fallback.** If Lucide doesn't have an icon, use a labeled badge or no icon.
- **Unicode `☎ ✉`** are grandfathered for email signatures only (compatibility with mail clients that strip background images / SVG).

### Logo files (in `assets/logos/`)
| File | When to use |
|---|---|
| `kordas_logo.svg` | Primary — light backgrounds. Vector, scales infinitely. |
| `kordas_logo_dark.svg` | Dark-bg variant (text inverts to light). |
| `kordas_logo.png` | Documents / DOCX where SVG won't render (Word). |
| `kordas_logo_light.png` | Dark email headers / dark slide masters. |
| `kordas_icon.svg` | Favicon, avatar, social profile. Scales infinitely. |
| `kordas_icon.png` | Bitmap icon (favicon, app icon at fixed sizes). |

---

## How to use this system

In an HTML file:

```html
<link rel="stylesheet" href="colors_and_type.css">
<body class="kt">
   ...your design...
</body>
```

Then build with the CSS custom properties:

```css
.my-button {
  background: var(--kt-blue);
  color: var(--kt-fg-on-blue);
  border-radius: var(--kt-r-sm);
  padding: var(--kt-s-3) var(--kt-s-5);
  box-shadow: var(--kt-shadow-blue);
  transition: background var(--kt-dur-fast) var(--kt-ease);
}
.my-button:hover { background: var(--kt-blue-deep); }
```

For React/JSX work, the components in `ui_kits/` are the canonical reference.

---

## Caveats

1. **Segoe UI** is a Microsoft proprietary font; we substitute **Inter** as the closest webfont. Pixel-perfect doc parity requires Segoe UI installed locally.
2. **Lucide** is a fresh addition — confirm with the brand owner if a different icon set is preferred.
3. **No photography library** — the brand uses none today; placeholder slots are provided in slide / website templates.
4. **Polish is the default voice** for client-facing copy; English-only assets are explicitly marked as such.
