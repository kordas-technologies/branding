from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.dirname(os.path.abspath(__file__))

W, H = 900, 200
img = Image.new('RGBA', (W, H), (0,0,0,0))
draw = ImageDraw.Draw(img)

navy = (15, 23, 42)
blue = (59, 130, 246)
light_blue = (96, 165, 250)
pale_blue = (191, 219, 254)
slate = (148, 163, 184)

# ---- ICON: V4 style data bars ----
ix, iy = 20, 30
bar_w = 8
bar_gap = 5
bar_h_base = 130

# Left vertical bar (main K stem)
draw.rounded_rectangle([ix, iy, ix+bar_w, iy+bar_h_base], radius=4, fill=navy)

# Upper right bars (getting shorter = K arm going up-right)
bx = ix + bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+60], radius=4, fill=blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+40], radius=4, fill=light_blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+22], radius=4, fill=pale_blue)

# Lower right bars (getting shorter = K arm going down-right)
bx = ix + bar_w + bar_gap
draw.rounded_rectangle([bx, iy+70, bx+bar_w, iy+bar_h_base], radius=4, fill=blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy+90, bx+bar_w, iy+bar_h_base], radius=4, fill=light_blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy+108, bx+bar_w, iy+bar_h_base], radius=4, fill=pale_blue)

# ---- TEXT: V3 style wordmark ----
icon_end = ix + 4*(bar_w + bar_gap) + 20

semibold = ImageFont.truetype("C:/Windows/Fonts/seguisb.ttf", 52)
light = ImageFont.truetype("C:/Windows/Fonts/segoeuil.ttf", 52)
tag_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 13)

txt_x = icon_end + 5

# "KORDAS" semibold navy
draw.text((txt_x, 28), "KORDAS", fill=navy, font=semibold)
bbox_k = draw.textbbox((txt_x, 28), "KORDAS", font=semibold)

# Thin vertical separator
sep_x = bbox_k[2] + 16
draw.rectangle([sep_x, 40, sep_x+1, 80], fill=(203, 213, 225))

# "TECHNOLOGIES" light
draw.text((sep_x + 14, 28), "TECHNOLOGIES", fill=slate, font=light)

# Blue accent underline
draw.rectangle([txt_x, 96, txt_x+50, 99], fill=blue)

# Tagline
draw.text((txt_x, 110), "AI  ·  RAPID PROTOTYPING  ·  IoT", fill=slate, font=tag_font)

# Crop
bbox = img.getbbox()
if bbox:
    img = img.crop((bbox[0]-10, bbox[1]-10, bbox[2]+10, bbox[3]+10))

img.save(os.path.join(BASE, "kordas_logo_final.png"), "PNG")

# Also save a small version for email
w_new = 380
h_new = int(img.height * w_new / img.width)
img_sm = img.resize((w_new, h_new), Image.LANCZOS)
img_sm.save(os.path.join(BASE, "kordas_logo_final_sm.png"), "PNG")

print("Final logo saved!")
