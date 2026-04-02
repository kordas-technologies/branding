# Kordas Technologies — Branding & Templates

Corporate identity assets for Kordas Technologies.

## Structure

```
Branding/
├── logos/
│   ├── kordas_logo.svg          # Full logo — light backgrounds
│   ├── kordas_logo_dark.svg     # Full logo — dark backgrounds
│   ├── kordas_icon.svg          # Icon only — favicon, avatar, stamps
│   ├── kordas_logo.png          # PNG (dark text, for documents)
│   └── kordas_logo_light.png    # PNG (light text, for dark headers)
├── email-templates/
│   ├── template_formal.html     # Formal email — with badge slot
│   └── template_casual.html     # Casual email — no badge
├── assets/
│   ├── logo_base64.txt          # Dark logo as base64 (for documents)
│   └── logo_light_base64.txt    # Light logo as base64 (for email headers)
└── scripts/
    ├── generate_logo.py         # Generate dark PNG logo
    ├── generate_logo_light.py   # Generate light PNG logo
    ├── generate_docx.py         # Generate DOCX offers from template
    ├── rebuild_templates.py     # Rebuild email HTMLs with embedded logo
    └── build_final_emails.py    # Build ready-to-send email HTMLs
```

## Brand Colors

| Name        | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| Navy        | `#0f172a` | Primary text, headers          |
| Blue        | `#3b82f6` | Accent, links, badges          |
| Light Blue  | `#60a5fa` | Secondary accent, icon bars    |
| Pale Blue   | `#bfdbfe` | Tertiary accent, icon bars     |
| Slate       | `#94a3b8` | Secondary text, tagline        |
| Light Slate | `#64748b` | Dimmed text, dark bg tagline   |
| Background  | `#f8fafc` | Email/page background          |
| White       | `#f1f5f9` | Text on dark backgrounds       |

## Font Stack

```
'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

- **Segoe UI** — Windows (primary)
- **Roboto** — Android / Google ecosystem
- **Helvetica Neue** — macOS / iOS
- **Arial** — universal fallback

## Email Template Usage

1. Open `template_formal.html` or `template_casual.html`
2. Replace placeholders:
   - `{{BADGE_TEXT}}` — e.g. "OFERTA CENOWA", "RAPORT"
   - `{{GREETING}}` — "Dzień dobry," / "Hej,"
   - `{{PARAGRAPH}}` — body text
   - `{{HEADING}}` — bold section header
   - `{{CALLOUT_TITLE}}` / `{{CALLOUT_BODY}}` — blue info box
   - `{{SIGN_OFF}}` — "Z poważaniem,"
   - `{{FOOTER_TEXT}}` — footer disclaimer
3. Open in browser → Ctrl+A → Ctrl+C → paste in mail composer

## Contact

Marcin Kordas | biuro@kordas.tech | +48 797 252 208
