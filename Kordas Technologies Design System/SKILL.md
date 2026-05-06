---
name: kordas-design
description: Use this skill to generate well-branded interfaces and assets for Kordas Technologies (AXIOM brand) — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/`, `slides/`, `preview/`).

The brand is **AXIOM** (unified May 2026): dark-first, cyan + ice on near-black ground, Inter Tight + JetBrains Mono, zero radius. The canonical token reference of record lives at `_experimental/AXIOM/AXIOM Brand Kit.html`. Live tokens are in `colors_and_type.css` with a `.kt-light` wrapper for print/email surfaces.

> The pre-AXIOM (light-mode, navy + 3-step blue) brand is archived under `_archive/classic-light-mode/`. Do NOT resurrect it for new client-facing material.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always link `colors_and_type.css` to inherit brand tokens, and use the `<body class="kt">` wrapper pattern (or `class="kt kt-light"` for print/email). Reuse JSX components in `ui_kits/website/` when building a new web page.

If working on production code, copy assets and read the rules in README.md to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (deck? landing page? document? email? business card?), confirm the language (Polish default, English on request), ask 5–10 questions about audience, content, and any variations they want, then act as an expert designer who outputs HTML artifacts or production code as appropriate.

Key brand reminders (AXIOM):
- Polish is the default voice; tech terms stay English inline.
- No emoji. No gradients. No serifs.
- **Cyan + ice (oklch 70% 0.22 220 / oklch 88% 0.08 220)** is the entire accent palette — don't introduce purples / teals / sunset gradients. Hex fallbacks: `#00b8e6` cyan, `#c2dceb` ice.
- Dark-first: page bg `#060a10`, surface `#0c1220`, surface-2 `#101828`, border `#1a2540`, text `#e0ecff`. Light-AXIOM variant for print/email: bg `#f4f6fa`, surface `#ffffff`, deep cyan `#0080aa`, text `#060a10`.
- Inter Tight (700/600/400/300) for headings + body. JetBrains Mono (500/400) for ALL UI chrome — nav, buttons, labels, codes, dates, eyebrows, status pills.
- **Zero radius** on every interactive element. Pill (`var(--kt-r-pill)` = 999px) is reserved EXCLUSIVELY for the K-mark logo bars.
- Tight, solid-black shadows (rgba 0,0,0,...) — never colored glow except the cyan focus ring.
- Lucide icons (CDN), 2px stroke, 24px default. Color via `currentColor`.
- Logo: 5-pill duochrome K-mark (`assets/logos/kordas_kmark.svg` for dark, `kordas_kmark_light.svg` for white surfaces). Pair with mono "KORDAS|TECHNOLOGIES" wordmark text — `KORDAS` 500-weight, `TECHNOLOGIES` 300-weight in `--kt-fg-3`.
- AXIOM signature elements: pill divider rhythm, ticker marquee of domain keywords, mono section codes (`§ 02`), service codes (`SRV.01`), bracket buttons (`[ umów rozmowę ]`), `// note` mono comments, scanline + 48px grid background overlays, radial cyan glow on hero.
