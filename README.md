# Kordas Technologies — Branding & Templates

Corporate identity assets for Kordas Technologies. **Brand: AXIOM** (May 2026 unification — dark-first, cyan + ice on near-black ground, Inter Tight + JetBrains Mono, zero radius).

## Where to look

The full design system lives in **[`Kordas Technologies Design System/`](./Kordas%20Technologies%20Design%20System/)** — start with its `README.md` and `colors_and_type.css`. The high-fidelity reference of record is `_experimental/AXIOM/AXIOM Brand Kit.html` inside that folder.

This top-level folder also holds the **legacy assets** from the pre-AXIOM brand (light-mode, navy + 3-step blue) that the Python generator scripts in `scripts/` still consume. Those scripts ship the old wordmark; treat them as **legacy** until ported to AXIOM (see [Migration status](#migration-status) below).

## Structure

```
Branding/
├── Kordas Technologies Design System/   ← canonical AXIOM design system
│   ├── README.md                         (start here)
│   ├── colors_and_type.css               (live tokens)
│   ├── _experimental/AXIOM/              (high-fidelity reference of record)
│   ├── _archive/classic-light-mode/      (pre-AXIOM brand, archived)
│   ├── ui_kits/website/                  (marketing site components)
│   ├── preview/                          (token specimens)
│   ├── slides/                           (deck templates)
│   ├── templates/                        (transactional email + PDF report)
│   ├── email-templates/                  (formal + casual, light + dark variants)
│   └── assets/logos/                     (kordas_kmark.svg + variants)
│
├── logos/                                ← LEGACY — pre-AXIOM wordmarks (PNG/SVG)
├── email-templates/                      ← LEGACY — superseded by ones inside the design system
├── assets/                               ← LEGACY — base64 logos for old DOCX/email scripts
├── scripts/                              ← LEGACY — Python generators (consume legacy logos)
└── README.md                             ← this file
```

## Migration status (May 2026)

| Component | Status |
|---|---|
| Live design system (`Kordas Technologies Design System/`) | ✅ AXIOM (unified) |
| Top-level `logos/` PNG/SVG wordmarks | ⚠️ Legacy — pre-AXIOM (KORDAS \| TECHNOLOGIES old wordmark) |
| Top-level `email-templates/` | ⚠️ Legacy — superseded by `Kordas Technologies Design System/email-templates/` |
| Top-level `assets/logo*_base64.txt` | ⚠️ Legacy — base64 of old wordmark, used by `scripts/generate_docx.py` |
| `scripts/generate_logo.py`, `generate_docx.py` | ⚠️ Legacy — generate old wordmark; not yet ported to AXIOM K-mark |

**Don't** consume top-level `logos/` for new work. Use `Kordas Technologies Design System/assets/logos/kordas_kmark{,_dark,_light}.svg`.

The Python scripts here are kept functional for one-off historic regenerations. Porting them to emit AXIOM K-mark + mono wordmark is a future task.

## AXIOM brand colors (canonical)

| Token | oklch | Hex fallback | Usage |
|---|---|---|---|
| Cyan | `oklch(70% 0.22 220)` | `#00b8e6` | Primary accent, CTAs, links, K-mark spine + upper arm |
| Cyan deep | `oklch(60% 0.22 220)` | `#0080aa` | Hover state for cyan; light-AXIOM primary |
| Ice | `oklch(88% 0.08 220)` | `#c2dceb` | K-mark lower arm, secondary accent |
| Background | — | `#060a10` | Page (dark-AXIOM) / `#f4f6fa` (light-AXIOM) |
| Surface | — | `#0c1220` | Cards, panels (dark) / `#ffffff` (light) |
| Surface 2 | — | `#101828` | Elevated panels, alt rows |
| Border | — | `#1a2540` | Dividers, card edges (dark) / `#c8d2e2` (light) |
| Sub | — | `#6080a0` | Secondary text |
| Muted | — | `#304060` | Tertiary text, mono labels |
| Text | — | `#e0ecff` | Primary text on dark / `#060a10` on light |
| Success | `oklch(68% 0.18 145)` | — | Affirmative state |
| Warning | `oklch(72% 0.17 75)` | — | Caution state |
| Error | `oklch(62% 0.20 25)` | — | Destructive state |

## Font Stack (AXIOM)

```css
--font-body: 'Inter Tight', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Consolas, monospace;
```

- **Inter Tight** — headings (700), body (400), light variants (300). Tracking `-0.04em` on display.
- **JetBrains Mono** — ALL UI chrome: nav, buttons, labels, codes, dates, eyebrows, status pills. 9–11px, letter-spacing 0.06–0.10em, often uppercase or lowercase-with-`//`-prefix.

## Email Template Usage

Use the AXIOM templates in `Kordas Technologies Design System/email-templates/`:

- `template_formal.html` (light-AXIOM, default) / `template_formal.dark.html` (dark variant)
- `template_casual.html` / `template_casual.dark.html`

Replace placeholders:
- `{{BADGE_TEXT}}` — e.g. "OFERTA CENOWA", "RAPORT"
- `{{GREETING}}` — "Dzień dobry," / "Hej,"
- `{{PARAGRAPH}}` / `{{HEADING}}` — body
- `{{CALLOUT_TITLE}}` / `{{CALLOUT_BODY}}` — left-border callout box
- `{{SIGN_OFF}}` — "Z poważaniem," / "pozdrawiam,"
- `{{FOOTER_TEXT}}` — disclaimer

Open in browser → Ctrl+A → Ctrl+C → paste in mail composer. (Light variant is the default for client emails — Outlook/Gmail render reliably; dark is for newsletters / in-app preview.)

## Contact

Marcin Kordas · biuro@kordas.tech · +48 797 252 208 · NIP 6772446064 · Kordas Technologies, Przybyszewskiego 30/2, 30-128 Kraków
