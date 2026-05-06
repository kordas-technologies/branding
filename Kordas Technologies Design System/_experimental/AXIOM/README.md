# AXIOM — Source-of-truth design references

> **Status: ADOPTED brand (May 2026 unification).**
>
> AXIOM was originally pitched as an experimental dark-mode redesign. It was **adopted as the canonical brand** for Kordas Technologies in the May 2026 design unification. The whole `Kordas Technologies Design System/` folder (root level) now resolves to AXIOM tokens. The classic light-mode brand is archived under `_archive/classic-light-mode/`.
>
> The folder name `_experimental/` is preserved for path stability with prior handoff documents — the contents are no longer experimental, they are **canonical design source-of-truth references**.

## What this folder is for

These HTML files document the AXIOM brand at high fidelity. Use them as the primary visual reference when:
- Building a new marketing artifact in this brand and you need to verify a token / interaction / spacing decision against canonical intent.
- Onboarding a designer or developer to the system.
- Pitching the brand to a stakeholder (the landing page is press-ready).
- Recovering a token value after the live `colors_and_type.css` was modified.

## What this folder contains

| File | What it shows |
|---|---|
| `AXIOM-Landing-Page.html` | Reference marketing landing page — navbar, hero with K-mark + signal annotations, stats bar, services grid, process steps, CTA, footer. Live-tweakable via `tweaks-panel.jsx`. |
| `AXIOM Brand Kit.html` | **Token reference of record** — logo spec, color ramps, type scale, spacing, borders/shadows, motion, voice & tone. Canonical token values. |
| `AXIOM Component System.html` | All UI components — buttons, inputs, toggles, badges, status dots, data table, dashboard metrics, notifications, empty states. |
| `AXIOM Logo Duochrome.html` | Logo color variants, overlap experiments, app icons (canonical 5-pill duochrome). |
| `AXIOM Logo Concepts.html` | Logo direction studies — variants, abstractions. (Exploratory; canonical is in `AXIOM Brand Kit.html`.) |
| `AXIOM Logo K-Plot Variants.html` | Alternative K-mark explorations (topology graph, K-plot Cartesian variants, animated reveal). **Not adopted — see canonical 5-pill K-mark in Brand Kit.** |
| `AXIOM Logo Treatment.html` | Monochrome logo treatment exploration — surface tests, scale tests. |
| `AXIOM-Design-Directions.html` | Multi-direction critique + comparison: **ARCTIC** (DM Sans), **MERIDIAN** (Barlow), **AXIOM** (chosen). Useful as a pitch / decision-record document. |
| `design-canvas.jsx` | Canvas / artboard layout helpers — source. Already inlined into each HTML; kept here as editable source. |
| `tweaks-panel.jsx` | Live-tweak side panel — source. Already inlined; kept here as editable source. |
| `.design-canvas.state.json` | Sidecar for canvas section titles. Not critical; renders fine without it. |

## How to open

**Just double-click** any `.html` file. JSX dependencies are inlined; every file is self-contained and renders correctly via `file://`.

`AXIOM Component System.html` and other `design-canvas.jsx`-based pages will log a single non-fatal CORS warning for `.design-canvas.state.json` — the canvas falls back to default order/titles and renders normally. To eliminate the warning, serve the folder via HTTP (`python -m http.server 8000`).

## Design tokens (canonical)

```css
:root {
  --color-bg:        #060a10;            /* page background */
  --color-surface:   #0c1220;
  --color-surface-2: #101828;
  --color-border:    #1a2540;
  --color-muted:     #304060;
  --color-sub:       #6080a0;
  --color-text:      #e0ecff;

  --color-accent:    oklch(70% 0.22 220);  /* cyan-500 — primary interactive */
  --color-ice:       oklch(88% 0.08 220);  /* ice-300 — logo lower arm, highlights */

  --color-success:   oklch(68% 0.18 145);
  --color-warning:   oklch(72% 0.17 75);
  --color-error:     oklch(62% 0.20 25);

  --font-body:       'Inter Tight', sans-serif;
  --font-mono:       'JetBrains Mono', monospace;
}
```

Live equivalent in production tokens: `../../colors_and_type.css` (variable names `--kt-*`). Hex fallbacks: cyan `#00b8e6`, ice `#c2dceb`.

Border-radius is **0** on every interactive element. Logo bars are perfect pills (radius = bar-width × 0.5) — the only place radius is used.

## Light-AXIOM variant

For materials that must render on white surfaces (printable PDFs, broad-compat email clients), use the `.kt-light` wrapper class on `<body>` (defined in `colors_and_type.css`). It overrides the dark surface tokens with: bg `#f4f6fa`, surface `#ffffff`, deep cyan `oklch(50% 0.22 220)` / hex `#0080aa`, navy text `#060a10`. See `templates/email/transactional.html` for a reference implementation.

## Why AXIOM was adopted

- Engineering-grade aesthetic matches the brand voice (precision, technical, no-fluff).
- Mono-heavy chrome reads as "built by engineers" rather than "designed by a marketing agency".
- Dark surfaces reduce visual noise on long-running dashboards / docs.
- Cyan + ice duochrome is more distinctive than the navy + 3-step blue ramp it replaced — the K-mark reads as a brand mark, not a generic tech logo.
- Zero radius is a strong, recognizable system rule (per AXIOM landing) that v1 didn't enforce.
