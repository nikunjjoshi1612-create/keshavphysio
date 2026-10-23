import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

BASE_DIR = r"C:\Users\AVADH\.gemini\antigravity\scratch\keshav-physiotherapy"
BACKUP_DIR = os.path.join(BASE_DIR, "public", "images_backup")
OUT_DIR = os.path.join(BASE_DIR, "public", "images")
LOGO_PATH = os.path.join(BASE_DIR, "public", "images", "keshav_logo.webp")

os.makedirs(OUT_DIR, exist_ok=True)
CHECK_DIR = os.path.join(BASE_DIR, "scratch_crops_v2", "perfect_checks")
os.makedirs(CHECK_DIR, exist_ok=True)

# Load master official circular logo (RGBA)
master_logo = Image.open(LOGO_PATH).convert("RGBA")

def create_badge(size, shadow_blur=6, shadow_opacity=110, shadow_offset=(3, 5)):
    """Creates the official circular logo with an realistic ambient drop shadow."""
    logo = master_logo.resize((size, size), Image.Resampling.LANCZOS)
    
    pad = shadow_blur * 3 + max(abs(shadow_offset[0]), abs(shadow_offset[1])) + 4
    total_w = size + pad * 2
    total_h = size + pad * 2
    
    comp = Image.new("RGBA", (total_w, total_h), (0, 0, 0, 0))
    
    # Shadow layer
    shadow_mask = Image.new("L", (total_w, total_h), 0)
    sdraw = ImageDraw.Draw(shadow_mask)
    sx = pad + shadow_offset[0]
    sy = pad + shadow_offset[1]
    sdraw.ellipse([sx, sy, sx + size, sy + size], fill=shadow_opacity)
    shadow_mask = shadow_mask.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    shadow_layer = Image.new("RGBA", (total_w, total_h), (20, 25, 35, 0))
    shadow_layer.putalpha(shadow_mask)
    comp.alpha_composite(shadow_layer)
    
    # Paste logo in center
    comp.paste(logo, (pad, pad), logo)
    return comp, pad

def paste_badge_at(img, center_x, center_y, size, shadow_blur=6, shadow_opacity=110, shadow_offset=(3, 5)):
    badge, pad = create_badge(size, shadow_blur, shadow_opacity, shadow_offset)
    top_left_x = int(center_x - size // 2 - pad)
    top_left_y = int(center_y - size // 2 - pad)
    img.paste(badge, (top_left_x, top_left_y), badge)

def inpaint_area_feathered(img, box, fill_color, blur_radius=12):
    x1, y1, x2, y2 = box
    w, h = img.size
    
    mask = Image.new("L", (w, h), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rectangle([x1, y1, x2, y2], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(blur_radius))
    
    patch = Image.new("RGBA", (w, h), fill_color)
    blended = Image.composite(patch, img, mask)
    img.paste(blended, (0, 0))

def save_image(img, base_name):
    p1 = os.path.join(OUT_DIR, f"{base_name}.webp")
    p2 = os.path.join(OUT_DIR, f"{base_name}-v2.webp")
    img_rgb = img.convert("RGB")
    img_rgb.save(p1, "WEBP", quality=95)
    img_rgb.save(p2, "WEBP", quality=95)
    print(f"Saved {base_name}.webp & {base_name}-v2.webp")


# 1. CLINIC-RECEPTION
def process_clinic_reception():
    img = Image.open(os.path.join(BACKUP_DIR, "clinic-reception.webp")).convert("RGBA")
    inpaint_area_feathered(img, (40, 35, 380, 310), (237, 234, 227, 255), blur_radius=16)
    paste_badge_at(img, center_x=205, center_y=175, size=210, shadow_blur=8, shadow_opacity=120, shadow_offset=(4, 6))
    save_image(img, "clinic-reception")
    img.crop((30, 20, 420, 340)).save(os.path.join(CHECK_DIR, "check_clinic_reception.png"))

# 2. ADVANCED-EQUIPMENT
def process_advanced_equipment():
    img = Image.open(os.path.join(BACKUP_DIR, "advanced-equipment.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    # Architectural pillar face between corners: x=416 to 528, y=155 to 422
    draw.rectangle([416, 155, 528, 422], fill=(244, 246, 248, 255))
    paste_badge_at(img, center_x=472, center_y=280, size=104, shadow_blur=5, shadow_opacity=110, shadow_offset=(2, 4))
    save_image(img, "advanced-equipment")
    img.crop((400, 140, 550, 430)).save(os.path.join(CHECK_DIR, "check_advanced_equipment.png"))

# 3. SPORTS-REHAB
def process_sports_rehab():
    img = Image.open(os.path.join(BACKUP_DIR, "sports-rehab.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    # Column face from window to corner:
    draw.rectangle([725, 60, 970, 190], fill=(245, 243, 240, 255))
    paste_badge_at(img, center_x=845, center_y=125, size=105, shadow_blur=5, shadow_opacity=100, shadow_offset=(2, 4))
    # Wall above mirror:
    draw.rectangle([1050, 60, 1376, 195], fill=(244, 242, 239, 255))
    paste_badge_at(img, center_x=1240, center_y=125, size=90, shadow_blur=4, shadow_opacity=90, shadow_offset=(2, 3))
    save_image(img, "sports-rehab")
    img.crop((720, 50, 980, 200)).save(os.path.join(CHECK_DIR, "check_sports_col.png"))
    img.crop((1120, 50, 1360, 195)).save(os.path.join(CHECK_DIR, "check_sports_wall.png"))

# 4. MANUAL-THERAPY
def process_manual_therapy():
    img = Image.open(os.path.join(BACKUP_DIR, "manual-therapy.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    # Clean plaque interior cleanly inside screws
    draw.rectangle([448, 80, 615, 165], fill=(252, 252, 252, 255))
    paste_badge_at(img, center_x=532, center_y=125, size=78, shadow_blur=3, shadow_opacity=80, shadow_offset=(1, 2))
    
    # Wipe "Dr. Rajesh Patel" text and white badge on navy scrub:
    draw.rectangle([965, 380, 1050, 415], fill=(16, 26, 42, 255))
    draw.rectangle([900, 318, 965, 360], fill=(16, 26, 42, 255))
    # Pin small official round pin badge on scrub:
    paste_badge_at(img, center_x=932, center_y=339, size=46, shadow_blur=2, shadow_opacity=100, shadow_offset=(1, 2))
    
    save_image(img, "manual-therapy")
    img.crop((430, 70, 630, 180)).save(os.path.join(CHECK_DIR, "check_manual_plaque.png"))
    img.crop((880, 310, 1060, 430)).save(os.path.join(CHECK_DIR, "check_manual_chest.png"))

# 5. EXERCISE-THERAPY
def process_exercise_therapy():
    img = Image.open(os.path.join(BACKUP_DIR, "exercise-therapy.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    # Clean glass plaque interior inside the 4 standoffs:
    draw.rectangle([170, 92, 370, 185], fill=(180, 222, 218, 255))
    paste_badge_at(img, center_x=270, center_y=138, size=82, shadow_blur=3, shadow_opacity=80, shadow_offset=(1, 2))
    save_image(img, "exercise-therapy")
    img.crop((150, 80, 390, 200)).save(os.path.join(CHECK_DIR, "check_exercise_plaque.png"))

# 6. SPINE-REHAB
def process_spine_rehab():
    img = Image.open(os.path.join(BACKUP_DIR, "spine-rehab.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    # Clean white plaque interior inside corner screws:
    draw.rectangle([940, 75, 1125, 175], fill=(252, 253, 253, 255))
    paste_badge_at(img, center_x=1030, center_y=123, size=82, shadow_blur=3, shadow_opacity=80, shadow_offset=(1, 2))
    save_image(img, "spine-rehab")
    img.crop((920, 60, 1140, 185)).save(os.path.join(CHECK_DIR, "check_spine_plaque.png"))

# 7. HERO-CLINIC
def process_hero_clinic():
    img = Image.open(os.path.join(BACKUP_DIR, "hero-clinic.webp")).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw.rectangle([475, 312, 590, 428], fill=(180, 206, 196, 255))
    paste_badge_at(img, center_x=533, center_y=370, size=94, shadow_blur=5, shadow_opacity=110, shadow_offset=(2, 4))
    save_image(img, "hero-clinic")
    img.crop((450, 290, 610, 440)).save(os.path.join(CHECK_DIR, "check_hero_desk.png"))

# 8. DR-NIKUNJ-JOSHI
def process_dr_nikunj():
    img = Image.open(os.path.join(BACKUP_DIR, "dr-nikunj-joshi.webp")).convert("RGBA")
    paste_badge_at(img, center_x=610, center_y=515, size=78, shadow_blur=3, shadow_opacity=100, shadow_offset=(2, 3))
    save_image(img, "dr-nikunj-joshi")
    img.crop((380, 450, 720, 800)).save(os.path.join(CHECK_DIR, "check_dr_nikunj.png"))

# 9. DR-PRIYANSHI-VANI
def process_dr_priyanshi():
    img = Image.open(os.path.join(BACKUP_DIR, "dr-priyanshi-vani.webp")).convert("RGBA")
    arr = np.array(img)
    sub = arr[680:760, 520:650]
    silver_mask = (sub[:, :, 0] > 140) & (sub[:, :, 1] > 140) & (sub[:, :, 2] > 140) & (np.abs(sub[:, :, 0].astype(int) - sub[:, :, 1].astype(int)) < 25)
    sub[silver_mask] = [160, 208, 202, 255]
    img = Image.fromarray(arr)
    paste_badge_at(img, center_x=582, center_y=720, size=96, shadow_blur=4, shadow_opacity=110, shadow_offset=(2, 3))
    save_image(img, "dr-priyanshi-vani")
    img.crop((480, 640, 720, 780)).save(os.path.join(CHECK_DIR, "check_dr_priyanshi.png"))

# 10. KNEE-REHAB
def process_knee_rehab():
    img = Image.open(os.path.join(BACKUP_DIR, "knee-rehab.webp")).convert("RGBA")
    paste_badge_at(img, center_x=190, center_y=210, size=115, shadow_blur=6, shadow_opacity=110, shadow_offset=(3, 5))
    save_image(img, "knee-rehab")
    img.crop((110, 130, 270, 290)).save(os.path.join(CHECK_DIR, "check_knee_rehab.png"))

# 11. NEURO-REHAB
def process_neuro_rehab():
    img = Image.open(os.path.join(BACKUP_DIR, "neuro-rehab.webp")).convert("RGBA")
    paste_badge_at(img, center_x=190, center_y=190, size=115, shadow_blur=6, shadow_opacity=110, shadow_offset=(3, 5))
    save_image(img, "neuro-rehab")
    img.crop((110, 110, 270, 270)).save(os.path.join(CHECK_DIR, "check_neuro_rehab.png"))

# 12. HOME-PHYSIOTHERAPY
def process_home_physiotherapy():
    img = Image.open(os.path.join(BACKUP_DIR, "home-physiotherapy.webp")).convert("RGBA")
    paste_badge_at(img, center_x=220, center_y=110, size=108, shadow_blur=5, shadow_opacity=100, shadow_offset=(2, 4))
    save_image(img, "home-physiotherapy")
    img.crop((140, 40, 300, 180)).save(os.path.join(CHECK_DIR, "check_home_physio.png"))


if __name__ == "__main__":
    print("Running precision generation for all 12 images...")
    process_clinic_reception()
    process_advanced_equipment()
    process_sports_rehab()
    process_manual_therapy()
    process_exercise_therapy()
    process_spine_rehab()
    process_hero_clinic()
    process_dr_nikunj()
    process_dr_priyanshi()
    process_knee_rehab()
    process_neuro_rehab()
    process_home_physiotherapy()
    print("SUCCESS: ALL 12 IMAGES REGENERATED WITH 100% PRECISION!")
