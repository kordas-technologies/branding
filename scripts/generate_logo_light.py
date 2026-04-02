from PIL import Image, ImageDraw, ImageFont
import base64, os

BASE = os.path.dirname(os.path.abspath(__file__))

W, H = 900, 200
img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Colors for DARK background (light text)
white = (241, 245, 249)       # slate-100
blue = (59, 130, 246)         # blue-500
light_blue = (96, 165, 250)   # blue-400
pale_blue = (147, 197, 253)   # blue-300
slate = (148, 163, 184)       # slate-400
dim_slate = (100, 116, 139)   # slate-500

# Fonts
semibold = ImageFont.truetype("C:/Windows/Fonts/seguisb.ttf", 52)
light = ImageFont.truetype("C:/Windows/Fonts/segoeuil.ttf", 52)
tag_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 13)

# ---- ICON: V4 data bars ----
ix, iy = 20, 30
bar_w = 8
bar_gap = 5
bar_h_base = 130

# Main stem — white instead of navy
draw.rounded_rectangle([ix, iy, ix+bar_w, iy+bar_h_base], radius=4, fill=white)

# Upper arms
bx = ix + bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+60], radius=4, fill=blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+40], radius=4, fill=light_blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy, bx+bar_w, iy+22], radius=4, fill=pale_blue)

# Lower arms
bx = ix + bar_w + bar_gap
draw.rounded_rectangle([bx, iy+70, bx+bar_w, iy+bar_h_base], radius=4, fill=blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy+90, bx+bar_w, iy+bar_h_base], radius=4, fill=light_blue)
bx += bar_w + bar_gap
draw.rounded_rectangle([bx, iy+108, bx+bar_w, iy+bar_h_base], radius=4, fill=pale_blue)

# ---- TEXT ----
icon_end = ix + 4*(bar_w + bar_gap) + 20
txt_x = icon_end + 5

# "KORDAS" — white on dark
draw.text((txt_x, 28), "KORDAS", fill=white, font=semibold)
bbox_k = draw.textbbox((txt_x, 28), "KORDAS", font=semibold)

# Separator
sep_x = bbox_k[2] + 16
draw.rectangle([sep_x, 40, sep_x+1, 80], fill=dim_slate)

# "TECHNOLOGIES" — slate
draw.text((sep_x + 14, 28), "TECHNOLOGIES", fill=slate, font=light)

# Blue accent
draw.rectangle([txt_x, 96, txt_x+50, 99], fill=blue)

# Tagline
draw.text((txt_x, 110), "AI  ·  RAPID PROTOTYPING  ·  IoT", fill=dim_slate, font=tag_font)

# Crop
bbox = img.getbbox()
if bbox:
    img = img.crop((bbox[0]-10, bbox[1]-10, bbox[2]+10, bbox[3]+10))

# Save PNG
png_path = os.path.join(BASE, "kordas_logo_light.png")
img.save(png_path, "PNG")
print(f"Light logo PNG saved: {png_path}")

# Save base64 for email embedding
with open(png_path, "rb") as f:
    b64 = base64.b64encode(f.read()).decode()
with open(os.path.join(BASE, "logo_light_base64.txt"), "w") as f:
    f.write(b64)
print(f"Base64 saved ({len(b64)} chars)")
