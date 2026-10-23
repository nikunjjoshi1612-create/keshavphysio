import os
import numpy as np
from PIL import Image, ImageFilter, ImageDraw, ImageFont

LOGO_PATH = 'public/images/keshav_logo.webp'
BACKUP_DIR = 'public/images_backup'
OUT_DIR = 'public/images'
CROP_DIR = 'scratch_crops'

os.makedirs(CROP_DIR, exist_ok=True)
logo = Image.open(LOGO_PATH).convert('RGBA')

def get_font(size):
    font_paths = [
        "C:\\Windows\\Fonts\\arialbd.ttf",
        "C:\\Windows\\Fonts\\segoeuib.ttf",
        "C:\\Windows\\Fonts\\calibrib.ttf",
        "C:\\Windows\\Fonts\\arial.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def draw_standoff_screws(draw, x1, y1, x2, y2, inset=9, radius=3):
    points = [
        (x1 + inset, y1 + inset),
        (x2 - inset, y1 + inset),
        (x1 + inset, y2 - inset),
        (x2 - inset, y2 - inset)
    ]
    for px, py in points:
        draw.ellipse([px - radius - 1, py - radius - 1, px + radius + 1, py + radius + 1], fill=(120, 125, 130, 255))
        draw.ellipse([px - radius, py - radius, px + radius, py + radius], fill=(225, 230, 235, 255))
        draw.line([px - 1, py, px + 1, py], fill=(90, 95, 100, 255), width=1)

def fit_text(draw, text, max_w, max_h, is_bold=True, start_size=18, min_size=8):
    size = start_size
    while size >= min_size:
        f = get_font(size)
        bbox = draw.textbbox((0, 0), text, font=f)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        if tw <= max_w and th <= max_h:
            return f, size, tw, th
        size -= 1
    return get_font(min_size), min_size, tw, th

def create_plaque_sign(w, h, logo_size, title, subtitle, title_color, sub_color, bg_color=(255, 255, 255, 255), border_color=(215, 222, 228, 255), corner_radius=6):
    plaque = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(plaque)
    
    p_draw.rounded_rectangle([0, 0, w - 1, h - 1], radius=corner_radius, fill=bg_color, outline=border_color, width=1)
    draw_standoff_screws(p_draw, 0, 0, w, h, inset=9, radius=3)
    
    l_resized = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    logo_y = (h - logo_size) // 2
    logo_x = 16
    plaque.paste(l_resized, (logo_x, logo_y), l_resized)
    
    text_x = logo_x + logo_size + 14
    avail_w = w - text_x - 18
    
    f_title, s_title, tw1, th1 = fit_text(p_draw, title, avail_w, int(h * 0.32), is_bold=True, start_size=int(h * 0.24))
    f_sub, s_sub, tw2, th2 = fit_text(p_draw, subtitle, avail_w, int(h * 0.22), is_bold=True, start_size=int(h * 0.16))
    
    p_draw.text((text_x, int(h * 0.28)), title, font=f_title, fill=title_color)
    p_draw.text((text_x, int(h * 0.56)), subtitle, font=f_sub, fill=sub_color)
    
    return plaque

def process_clinic_reception():
    print("Processing clinic-reception.webp...")
    src_path = os.path.join(BACKUP_DIR, 'clinic-reception.webp')
    img = Image.open(src_path).convert('RGBA')
    
    pw, ph = 312, 246
    cx, cy = 206, 166
    
    plaque = Image.new('RGBA', (pw, ph), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(plaque)
    p_draw.rounded_rectangle([0, 0, pw - 1, ph - 1], radius=8, fill=(255, 255, 255, 255), outline=(220, 226, 232, 255), width=2)
    draw_standoff_screws(p_draw, 0, 0, pw, ph, inset=12, radius=4)
    
    l_size = 212
    l_resized = logo.resize((l_size, l_size), Image.Resampling.LANCZOS)
    plaque.paste(l_resized, ((pw - l_size)//2, (ph - l_size)//2), l_resized)
    
    shadow = Image.new('RGBA', (pw + 24, ph + 24), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rectangle([8, 10, pw + 10, ph + 10], fill=(35, 25, 15, 120))
    shadow = shadow.filter(ImageFilter.GaussianBlur(6))
    
    res = img.copy()
    res.paste(shadow, (cx - pw//2 - 2, cy - ph//2 - 2), shadow)
    res.paste(plaque, (cx - pw//2, cy - ph//2), plaque)
    
    out_path = os.path.join(OUT_DIR, 'clinic-reception.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((40, 30, 380, 310)).save(os.path.join(CROP_DIR, 'res_clinic_reception.png'))
    print("clinic-reception.webp perfected.")

def process_advanced_equipment():
    print("Processing advanced-equipment.webp...")
    src_path = os.path.join(BACKUP_DIR, 'advanced-equipment.webp')
    img = Image.open(src_path).convert('RGBA')
    
    pw, ph = 88, 142
    cx, cy = 474, 216
    
    plaque = Image.new('RGBA', (pw, ph), (255, 255, 255, 255))
    p_draw = ImageDraw.Draw(plaque)
    p_draw.rounded_rectangle([0, 0, pw - 1, ph - 1], radius=4, fill=(255, 255, 255, 255), outline=(210, 218, 224, 255), width=1)
    draw_standoff_screws(p_draw, 0, 0, pw, ph, inset=7, radius=3)
    
    l_size = 78
    l_resized = logo.resize((l_size, l_size), Image.Resampling.LANCZOS)
    plaque.paste(l_resized, ((pw - l_size)//2, 16), l_resized)
    
    f_title, _, tw1, _ = fit_text(p_draw, "KESHAV", pw - 16, 16, start_size=10)
    f_sub, _, tw2, _ = fit_text(p_draw, "PHYSIOTHERAPY", pw - 16, 12, start_size=8)
    
    p_draw.text(((pw - tw1)//2, 102), "KESHAV", font=f_title, fill=(20, 50, 95, 255))
    p_draw.text(((pw - tw2)//2, 118), "PHYSIOTHERAPY", font=f_sub, fill=(40, 75, 120, 255))
    
    shadow = Image.new('RGBA', (pw + 18, ph + 18), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rectangle([7, 9, pw + 9, ph + 9], fill=(20, 30, 40, 95))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    
    res = img.copy()
    res.paste(shadow, (cx - pw//2 - 2, cy - ph//2 - 2), shadow)
    res.paste(plaque, (cx - pw//2, cy - ph//2), plaque)
    
    out_path = os.path.join(OUT_DIR, 'advanced-equipment.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((400, 135, 540, 360)).save(os.path.join(CROP_DIR, 'res_advanced_equipment.png'))
    print("advanced-equipment.webp perfected.")

def process_manual_therapy():
    print("Processing manual-therapy.webp...")
    src_path = os.path.join(BACKUP_DIR, 'manual-therapy.webp')
    img = Image.open(src_path).convert('RGBA')
    
    pw = 190
    ph = 108
    px = 436
    py = 74
    
    plaque = create_plaque_sign(
        w=pw, h=ph, logo_size=74,
        title="KESHAV", subtitle="PHYSIOTHERAPY",
        title_color=(20, 65, 75, 255), sub_color=(45, 90, 100, 255),
        bg_color=(252, 253, 254, 255), border_color=(205, 218, 222, 255),
        corner_radius=5
    )
    
    shadow = Image.new('RGBA', (pw + 16, ph + 16), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rectangle([6, 8, pw + 8, ph + 8], fill=(15, 45, 45, 110))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    
    res = img.copy()
    res.paste(shadow, (px - 2, py - 2), shadow)
    res.paste(plaque, (px, py), plaque)
    
    out_path = os.path.join(OUT_DIR, 'manual-therapy.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((425, 65, 635, 195)).save(os.path.join(CROP_DIR, 'res_manual_therapy.png'))
    print("manual-therapy.webp perfected.")

def process_exercise_therapy():
    print("Processing exercise-therapy.webp...")
    src_path = os.path.join(BACKUP_DIR, 'exercise-therapy.webp')
    img = Image.open(src_path).convert('RGBA')
    
    pw = 224
    ph = 110
    px = 148
    py = 96
    
    plaque = create_plaque_sign(
        w=pw, h=ph, logo_size=78,
        title="KESHAV", subtitle="PHYSIOTHERAPY",
        title_color=(18, 55, 70, 255), sub_color=(38, 75, 90, 255),
        bg_color=(250, 252, 252, 255), border_color=(200, 215, 220, 255),
        corner_radius=6
    )
    
    shadow = Image.new('RGBA', (pw + 18, ph + 18), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rectangle([7, 9, pw + 9, ph + 9], fill=(15, 40, 45, 105))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    
    res = img.copy()
    res.paste(shadow, (px - 2, py - 2), shadow)
    res.paste(plaque, (px, py), plaque)
    
    out_path = os.path.join(OUT_DIR, 'exercise-therapy.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((135, 85, 385, 220)).save(os.path.join(CROP_DIR, 'res_exercise_therapy.png'))
    print("exercise-therapy.webp perfected.")

def process_spine_rehab():
    print("Processing spine-rehab.webp...")
    src_path = os.path.join(BACKUP_DIR, 'spine-rehab.webp')
    img = Image.open(src_path).convert('RGBA')
    
    pw = 196
    ph = 140
    px = 942
    py = 50
    
    plaque = create_plaque_sign(
        w=pw, h=ph, logo_size=92,
        title="KESHAV", subtitle="PHYSIOTHERAPY",
        title_color=(16, 75, 65, 255), sub_color=(32, 95, 85, 255),
        bg_color=(255, 255, 255, 255), border_color=(210, 225, 220, 255),
        corner_radius=6
    )
    
    shadow = Image.new('RGBA', (pw + 18, ph + 18), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rectangle([7, 9, pw + 9, ph + 9], fill=(20, 45, 35, 100))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    
    res = img.copy()
    res.paste(shadow, (px - 2, py - 2), shadow)
    res.paste(plaque, (px, py), plaque)
    
    out_path = os.path.join(OUT_DIR, 'spine-rehab.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((930, 40, 1150, 205)).save(os.path.join(CROP_DIR, 'res_spine_rehab.png'))
    print("spine-rehab.webp perfected.")

def process_sports_rehab():
    print("Processing sports-rehab.webp...")
    src_path = os.path.join(BACKUP_DIR, 'sports-rehab.webp')
    img = Image.open(src_path).convert('RGBA')
    
    # 1. Column sign
    pw1 = 202
    ph1 = 114
    px1 = 746
    py1 = 68
    plaque1 = create_plaque_sign(
        w=pw1, h=ph1, logo_size=80,
        title="KESHAV", subtitle="PHYSIOTHERAPY",
        title_color=(20, 45, 80, 255), sub_color=(40, 65, 100, 255),
        bg_color=(255, 255, 255, 255), border_color=(218, 224, 230, 255),
        corner_radius=5
    )
    shadow1 = Image.new('RGBA', (pw1 + 16, ph1 + 16), (0, 0, 0, 0))
    ImageDraw.Draw(shadow1).rectangle([6, 8, pw1 + 8, ph1 + 8], fill=(20, 30, 45, 90))
    shadow1 = shadow1.filter(ImageFilter.GaussianBlur(4))
    
    # 2. Wall sign above mirror
    pw2 = 222
    ph2 = 116
    px2 = 1154
    py2 = 88
    plaque2 = create_plaque_sign(
        w=pw2, h=ph2, logo_size=82,
        title="KESHAV", subtitle="PHYSIOTHERAPY",
        title_color=(20, 45, 80, 255), sub_color=(40, 65, 100, 255),
        bg_color=(255, 255, 255, 255), border_color=(218, 224, 230, 255),
        corner_radius=5
    )
    shadow2 = Image.new('RGBA', (pw2 + 16, ph2 + 16), (0, 0, 0, 0))
    ImageDraw.Draw(shadow2).rectangle([6, 8, pw2 + 8, ph2 + 8], fill=(20, 30, 45, 90))
    shadow2 = shadow2.filter(ImageFilter.GaussianBlur(4))
    
    res = img.copy()
    res.paste(shadow1, (px1 - 2, py1 - 2), shadow1)
    res.paste(plaque1, (px1, py1), plaque1)
    
    res.paste(shadow2, (px2 - 2, py2 - 2), shadow2)
    res.paste(plaque2, (px2, py2), plaque2)
    
    out_path = os.path.join(OUT_DIR, 'sports-rehab.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((735, 60, 960, 195)).save(os.path.join(CROP_DIR, 'res_sports_col.png'))
    res.crop((1140, 80, 1385, 215)).save(os.path.join(CROP_DIR, 'res_sports_wall.png'))
    print("sports-rehab.webp perfected.")

def process_hero_clinic():
    print("Processing hero-clinic.webp...")
    src_path = os.path.join(BACKUP_DIR, 'hero-clinic.webp')
    img = Image.open(src_path).convert('RGBA')
    
    res = img.copy()
    pw, ph = 112, 94
    patch = Image.new('RGBA', (pw, ph), (168, 196, 185, 255))
    mask = Image.new('L', (pw, ph), 255).filter(ImageFilter.GaussianBlur(3))
    res.paste(patch, (488, 342), mask)
    
    l_size = 72
    l_resized = logo.resize((l_size, l_size), Image.Resampling.LANCZOS)
    
    shadow = Image.new('RGBA', (l_size + 14, l_size + 14), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([4, 6, l_size + 9, l_size + 9], fill=(25, 40, 35, 95))
    shadow = shadow.filter(ImageFilter.GaussianBlur(3))
    
    cx, cy = 544, 388
    res.paste(shadow, (cx - l_size//2 - 2, cy - l_size//2 - 2), shadow)
    res.paste(l_resized, (cx - l_size//2, cy - l_size//2), l_resized)
    
    out_path = os.path.join(OUT_DIR, 'hero-clinic.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((470, 325, 615, 450)).save(os.path.join(CROP_DIR, 'res_hero_clinic.png'))
    print("hero-clinic.webp perfected.")

def process_dr_nikunj_joshi():
    print("Processing dr-nikunj-joshi.webp...")
    src_path = os.path.join(BACKUP_DIR, 'dr-nikunj-joshi.webp')
    img = Image.open(src_path).convert('RGBA')
    
    res = img.copy()
    l_size = 48
    l_resized = logo.resize((l_size, l_size), Image.Resampling.LANCZOS)
    
    shadow = Image.new('RGBA', (l_size + 8, l_size + 8), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([2, 3, l_size + 6, l_size + 6], fill=(50, 60, 70, 65))
    shadow = shadow.filter(ImageFilter.GaussianBlur(2))
    
    px, py = 566, 594
    res.paste(shadow, (px - 2, py - 2), shadow)
    res.paste(l_resized, (px, py), l_resized)
    
    out_path = os.path.join(OUT_DIR, 'dr-nikunj-joshi.webp')
    res.save(out_path, 'WEBP', quality=95)
    res.crop((430, 520, 670, 720)).save(os.path.join(CROP_DIR, 'res_dr_nikunj.png'))
    print("dr-nikunj-joshi.webp perfected.")

if __name__ == '__main__':
    process_clinic_reception()
    process_advanced_equipment()
    process_manual_therapy()
    process_exercise_therapy()
    process_spine_rehab()
    process_sports_rehab()
    process_hero_clinic()
    process_dr_nikunj_joshi()
    print("SUCCESS: ALL 8 IMAGES FULLY PERFECTED.")
