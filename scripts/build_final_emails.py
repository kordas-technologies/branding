import sys, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE, "logo_base64.txt"), "r") as f:
    logo_b64 = f.read().strip()

FS = "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
LOGO = f"data:image/png;base64,{logo_b64}"

def make_email(badge, content, footer):
    badge_html = ""
    if badge:
        badge_html = f'''<td align="right" style="vertical-align:top;"><div style="background:#3b82f6;color:#fff;font-size:10px;font-weight:600;padding:4px 12px;border-radius:4px;letter-spacing:0.5px;font-family:{FS};">{badge}</div></td>'''

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<!--[if mso]><style>body,table,td{{font-family:Segoe UI,Arial,sans-serif !important;}}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:{FS};-webkit-font-smoothing:antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:20px 0;">
<tr><td align="center">
<table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

<!-- HEADER -->
<tr>
<td style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:24px 36px 20px;">
  <table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="vertical-align:middle;"><img src="{LOGO}" alt="Kordas Technologies" width="280" style="display:block;height:auto;max-width:280px;" /></td>
    {badge_html}
  </tr>
  </table>
</td>
</tr>
<tr><td style="height:3px;background:#3b82f6;"></td></tr>

<!-- BODY -->
<tr>
<td style="padding:32px 36px;font-family:{FS};">
{content}
</td>
</tr>

<!-- SIGNATURE -->
<tr>
<td style="padding:0 36px 28px;font-family:{FS};">
  <table width="100%" cellpadding="0" cellspacing="0">
  <tr><td style="height:1px;background:#e2e8f0;"></td></tr>
  <tr><td style="padding-top:16px;vertical-align:top;">
    <div style="font-size:16px;font-weight:700;color:#0f172a;font-family:{FS};">Marcin Kordas</div>
    <div style="font-size:12px;color:#3b82f6;font-weight:500;margin-top:2px;font-family:{FS};">AI Innovation Expert</div>
    <div style="font-size:12px;color:#64748b;margin-top:6px;font-family:{FS};">Kordas Technologies</div>
    <div style="font-size:12px;color:#64748b;margin-top:2px;font-family:{FS};">Przybyszewskiego 30/2, 30-128 Krak\u00f3w</div>
    <table cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
      <td style="font-size:12px;color:#64748b;padding-right:16px;font-family:{FS};"><span style="color:#3b82f6;">&#9742;</span>&nbsp; +48 797 252 208</td>
      <td style="font-size:12px;color:#64748b;font-family:{FS};"><span style="color:#3b82f6;">&#9993;</span>&nbsp; <a href="mailto:biuro@kordas.tech" style="color:#3b82f6;text-decoration:none;">biuro@kordas.tech</a></td>
    </tr></table>
  </td></tr>
  </table>
</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#f1f5f9;padding:14px 36px;border-top:1px solid #e2e8f0;">
  <p style="font-size:10px;color:#94a3b8;margin:0;line-height:1.5;font-family:{FS};">{footer}</p>
</td>
</tr>

</table>
</td></tr></table>
</body>
</html>"""


# ---- Styling helpers ----
def P(text, margin="0 0 16px"):
    return f'<p style="font-size:14px;color:#0f172a;margin:{margin};line-height:1.6;font-family:{FS};">{text}</p>'

def H(text):
    return f'<p style="font-size:14px;color:#0f172a;margin:0 0 8px;line-height:1.6;font-family:{FS};"><strong>{text}</strong></p>'


# ============================================================
# EMAIL 1: FORMAL
# ============================================================
formal_body = f"""
{P("Dzie\u0144 dobry,", "0 0 20px")}

{P("Przepraszam za seri\u0119 testowych wiadomo\u015bci, kt\u00f3re dotar\u0142y na Pa\u0144stwa skrzynk\u0119 wcze\u015bniej tego dnia \u2014 by\u0142y to wiadomo\u015bci robocze wygenerowane automatycznie podczas konfiguracji nowego systemu korespondencji po stronie naszej infrastruktury. Prosz\u0119 je zignorowa\u0107.")}

{P("Poni\u017cej przesy\u0142am <strong>w\u0142a\u015bciw\u0105 odpowied\u017a</strong> na Pa\u0144stwa zapytania ofertowe \u2014 tym razem wraz z kompletnym za\u0142\u0105cznikiem.")}

{P("Zwracam uwag\u0119, \u017ce zakres prac opisany w przes\u0142anych dokumentach (Z1, Z2) uleg\u0142 istotnym zmianom wzgl\u0119dem pierwotnych zapyta\u0144 z&nbsp;wrze\u015bnia 2025 \u2014 m.in. wprowadzono twarde progi dok\u0142adno\u015bci (65%&nbsp;/&nbsp;75%), trening na danych Zamawiaj\u0105cego, integracj\u0119 z prototypem oraz wym\u00f3g pracy ci\u0105g\u0142ej na&nbsp;IoT. Te zmiany, w po\u0142\u0105czeniu z up\u0142ywem czasu i zmian\u0105 warunk\u00f3w rynkowych, s\u0105 odzwierciedlone w zaktualizowanej wycenie.")}

{P("Dla elastyczno\u015bci przedstawiam <strong>dwa warianty</strong> dla ka\u017cdej us\u0142ugi:", "0 0 12px")}

<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0 24px;font-family:{FS};">
  <tr style="background:#0f172a;">
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#fff;border:1px solid #1e293b;font-family:{FS};">Us\u0142uga</td>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#fff;border:1px solid #1e293b;text-align:center;font-family:{FS};">Bazowy</td>
    <td style="padding:10px 14px;font-size:12px;font-weight:600;color:#fff;border:1px solid #1e293b;text-align:center;font-family:{FS};">Profesjonalny</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:12px 14px;font-size:13px;color:#0f172a;border:1px solid #e2e8f0;font-family:{FS};"><strong>Z1</strong> \u2014 Algorytm AI<br><span style="color:#64748b;font-size:11px;">lab / symulacja</span></td>
    <td style="padding:12px 14px;font-size:13px;color:#0f172a;border:1px solid #e2e8f0;text-align:center;font-family:{FS};"><strong>27 060 z\u0142</strong><br><span style="color:#64748b;font-size:11px;">80\u2013100h</span></td>
    <td style="padding:12px 14px;font-size:13px;color:#3b82f6;border:1px solid #e2e8f0;text-align:center;font-family:{FS};"><strong>73 800 z\u0142</strong><br><span style="color:#64748b;font-size:11px;">220\u2013280h</span></td>
  </tr>
  <tr>
    <td style="padding:12px 14px;font-size:13px;color:#0f172a;border:1px solid #e2e8f0;font-family:{FS};"><strong>Z2</strong> \u2014 Adaptacja terenowa<br><span style="color:#64748b;font-size:11px;">warunki terenowe</span></td>
    <td style="padding:12px 14px;font-size:13px;color:#0f172a;border:1px solid #e2e8f0;text-align:center;font-family:{FS};"><strong>43 050 z\u0142</strong><br><span style="color:#64748b;font-size:11px;">120\u2013160h</span></td>
    <td style="padding:12px 14px;font-size:13px;color:#3b82f6;border:1px solid #e2e8f0;text-align:center;font-family:{FS};"><strong>98 400 z\u0142</strong><br><span style="color:#64748b;font-size:11px;">280\u2013360h</span></td>
  </tr>
</table>

<div style="background:#f1f5f9;border-left:3px solid #3b82f6;padding:14px 18px;border-radius:0 6px 6px 0;margin:20px 0;font-family:{FS};">
  <p style="font-size:12px;color:#475569;margin:0 0 6px;line-height:1.5;font-family:{FS};"><strong>Istotne zastrze\u017cenia:</strong></p>
  <ol style="font-size:12px;color:#475569;margin:0;padding-left:18px;line-height:1.7;font-family:{FS};">
    <li>Niniejsza wycena ma charakter <strong>szacunku informacyjnego</strong> \u2014 nie stanowi oferty w rozumieniu art.&nbsp;66&nbsp;k.c.</li>
    <li>Wa\u017cno\u015b\u0107: <strong>14 dni</strong> od daty sporz\u0105dzenia.</li>
    <li>Ostateczne warunki b\u0119d\u0105 okre\u015blone w umowie i Aneksie Specyfikacyjnym.</li>
  </ol>
</div>

{P("Szczeg\u00f3\u0142owy opis zakres\u00f3w, wy\u0142\u0105cze\u0144 i warunk\u00f3w w za\u0142\u0105czniku.", "20px 0 4px")}
{P("W razie pyta\u0144 pozostaj\u0119 do dyspozycji.", "16px 0 0")}
{P("Z powa\u017caniem,", "12px 0 0")}
"""

formal_footer = "Niniejsza wiadomo\u015b\u0107 i jej za\u0142\u0105czniki s\u0105 poufne i przeznaczone wy\u0142\u0105cznie dla adresata. Jakiekolwiek kopiowanie, rozpowszechnianie lub wykorzystywanie bez zgody autora jest zabronione."

with open(os.path.join(BASE, "email_przeprosiny.html"), "w", encoding="utf-8") as f:
    f.write(make_email("OFERTA CENOWA", formal_body, formal_footer))
print("1/2 Formal email saved")


# ============================================================
# EMAIL 2: PRIVATE
# ============================================================
private_body = f"""
{P("Hej Janek,", "0 0 20px")}

{P("Przede wszystkim sorry za spam testowy na skrzynk\u0119 firmow\u0105 \u2014 konfigurowa\u0142em nowy system mailowy i polecia\u0142y robocze wiadomo\u015bci zanim zd\u0105\u017cy\u0142em je zatrzyma\u0107. Mam nadziej\u0119, \u017ce nikt si\u0119 nie przestraszy\u0142 ;)")}

{P("Formaln\u0105 odpowied\u017a z ofert\u0105 wys\u0142a\u0142em na agrobotyk\u0119, ale chcia\u0142em Ci jeszcze rzuci\u0107 kilka uwag prywatnie, bo my\u015bl\u0119 \u017ce to wa\u017cne zanim cokolwiek podpiszemy.")}

{H("1. Scope si\u0119 zmieni\u0142 \u2014 i to sporo")}
{P("Por\u00f3wna\u0142em Twoje nowe dokumenty (Z1, Z2) z tymi z wrze\u015bnia i to nie jest ta sama us\u0142uga. Dosz\u0142y twarde progi (65%/75%), trening na Waszych danych z sad\u00f3w, integracja z prototypem, praca ci\u0105g\u0142a na IoT. Ka\u017cdy z tych punkt\u00f3w to osobny kawa\u0142 roboty. Stara cena pasowa\u0142a do starego zakresu \u2014 ten nowy jest po prostu wi\u0119kszy.")}

{H("2. Moja sytuacja jest inna ni\u017c p\u00f3\u0142 roku temu")}
{P("Nie b\u0119d\u0119 owija\u0142 w bawe\u0142n\u0119 \u2014 stawka rynkowa za tego typu us\u0142ugi posz\u0142a w g\u00f3r\u0119, moja te\u017c. Tamta wycena powstawa\u0142a w innym momencie i przy innych za\u0142o\u017ceniach. To nie jest fanaberia, tylko realia.")}

{H("3. Co dla Ciebie zrobi\u0142em")}
{P("Warianty Bazowe (Z1: 27k, Z2: 43k, razem ~70k) \u2014 celowo trzyma\u0142em w okolicach starych kwot. Zakres jest okrojony, ale powinny pasowa\u0107 do bud\u017cetu we wniosku. Warianty Profesjonalne to realna cena za realny zakres, kt\u00f3ry opisa\u0142e\u015b w nowych dokumentach.")}

{H("4. Jak to traktowa\u0107")}
{P("Bazowe \u2192 pod wniosek grantowy. Pasuj\u0105 kwotowo.<br>Profesjonalne \u2192 do rozmowy, jak dojdzie do realizacji.<br>Oferta jest szacunkiem informacyjnym, napisa\u0142em to explicite \u2014 nie wi\u0105\u017ce mnie prawnie.<br>Je\u015bli grant przejdzie \u2014 siadamy, gadamy, ustalamy zakres i warunki na nowo.")}

{H("5. Szczera rada na koniec")}
{P("Je\u015bli masz inne oferty z wi\u0119kszym bud\u017cetem \u2014 rozwa\u017c je powa\u017cnie, nie m\u00f3wi\u0119 tego \u017ceby si\u0119 zniech\u0119ci\u0107. Tw\u00f3j scope (szczeg\u00f3lnie Z2 z progiem 75% i testami na instalacjach pilota\u017cowych) jest ambitny. Bud\u017cet powinien to odzwierciedla\u0107, bo jak za ma\u0142o kasy wpadnie na AI, to potem jest ci\u015bnienie na kompromisy w jako\u015bci, a to nikomu nie s\u0142u\u017cy.")}

{P("Chc\u0119 ten projekt zrobi\u0107 \u2014 temat jest fajny i mam kompetencje. Ale na warunkach, kt\u00f3re maj\u0105 sens dla obu stron. Nie chc\u0119 sytuacji, gdzie potem si\u0119 szarpiemy o zakres albo o to co jest \u201ew cenie\u201d a co nie.")}

{P("Powodzenia z wnioskiem, trzymam kciuki.")}

{P("Marcin", "12px 0 0")}
"""

private_footer = "Wiadomo\u015b\u0107 prywatna \u2014 prosz\u0119 nie przekazywa\u0107 dalej."

with open(os.path.join(BASE, "email_prywatny_jan.html"), "w", encoding="utf-8") as f:
    f.write(make_email(None, private_body, private_footer))
print("2/2 Private email saved")


# ============================================================
# SAVE TEMPLATES (with placeholders)
# ============================================================
template_formal_body = """
<!-- Replace {{GREETING}} with your greeting -->
<p style="font-size:14px;color:#0f172a;margin:0 0 20px;line-height:1.6;font-family:FONT;">{{GREETING}}</p>

<!-- Replace {{BODY}} with your paragraphs using this format: -->
<p style="font-size:14px;color:#0f172a;margin:0 0 16px;line-height:1.6;font-family:FONT;">{{PARAGRAPH}}</p>

<!-- For bold headings within body: -->
<p style="font-size:14px;color:#0f172a;margin:0 0 8px;line-height:1.6;font-family:FONT;"><strong>{{HEADING}}</strong></p>

<!-- For info callout box: -->
<div style="background:#f1f5f9;border-left:3px solid #3b82f6;padding:14px 18px;border-radius:0 6px 6px 0;margin:20px 0;font-family:FONT;">
  <p style="font-size:12px;color:#475569;margin:0 0 6px;line-height:1.5;font-family:FONT;"><strong>{{CALLOUT_TITLE}}</strong></p>
  <p style="font-size:12px;color:#475569;margin:0;line-height:1.7;font-family:FONT;">{{CALLOUT_BODY}}</p>
</div>

<!-- Closing -->
<p style="font-size:14px;color:#0f172a;margin:12px 0 0;line-height:1.6;font-family:FONT;">{{SIGN_OFF}}</p>
""".replace("FONT", FS)

with open(os.path.join(BASE, "template_formal.html"), "w", encoding="utf-8") as f:
    f.write(make_email("{{BADGE_TEXT}}", template_formal_body, "{{FOOTER_TEXT}}").replace(FS, FS))
print("\nTemplate (formal) saved")

with open(os.path.join(BASE, "template_casual.html"), "w", encoding="utf-8") as f:
    f.write(make_email(None, template_formal_body, "{{FOOTER_TEXT}}"))
print("Template (casual) saved")

print("\nDone! All files generated.")
