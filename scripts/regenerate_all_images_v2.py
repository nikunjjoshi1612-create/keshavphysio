import os
import numpy as np
from PIL import Image, ImageFilter, ImageDraw
from skimage.restoration import inpaint
from scipy.ndimage import binary_dilation

MASTER_LOGO_PATH = 'public/images/keshav_logo.webp'
BACKUP_DIR = 'public/images_backup'
OUT_DIR = 'public/images'
CROP_DIR = 'scratch_crops_v2'

os.makedirs(CROP_DIR, exist_ok=True)
master_logo = Image.open(MASTER_LOGO_PATH).convert('RGBA')

def save_dual(img, base_name):
    p1 = os.path.join(OUT_DIR, f"{base_name}.webp")
    p2 = os.path.join(OUT_DIR, f"{base_name}-v2.webp")
    img.save(p1, 'WEBP', quality=95)
    img.save(p2, 'WEBP', quality=95)
    print(f"Saved {base_name}.webp and {base_name}-v2.webp")

def paste_emblem(target_img, cx, cy, diameter, shadow_blur=6, shadow_opacity=110, shadow_offset=(4, 6)):
    l_resized = master_logo.resize((diameter, diameter), Image.Resampling.LANCZOS)
    
    # Soft drop shadow
    sw = diameter + abs(shadow_offset[0]) + shadow_blur * 4
    sh = diameter + abs(shadow_offset[1]) + shadow_blur * 4
    shadow = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    
    ox = shadow_blur * 2 + max(0, shadow_offset[0])
    oy = shadow_blur * 2 + max(0, shadow_offset[1])
    s_draw.ellipse([ox, oy, ox + diameter, oy + diameter], fill=(30, 25, 20, shadow_opacity))
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    paste_ox = shadow_blur * 2 + max(0, -shadow_offset[0])
    paste_oy = shadow_blur * 2 + max(0, -shadow_offset[1])
    
    target_img.paste(shadow, (cx - diameter//2 - paste_ox, cy - diameter//2 - paste_oy), shadow)
    target_img.paste(l_resized, (cx - diameter//2, cy - diameter//2), l_resized)

# 1. CLINIC RECEPTION
def process_clinic_reception():
    print("Processing clinic-reception...")
    src = Image.open(os.path.join(BACKUP_DIR, 'clinic-reception.webp')).convert('RGBA')
    
    # Clean old stick figure & lettering (x: 45..368, y: 45..300)
    arr = np.array(src).astype(np.float32)
    sub = arr[45:300, 45:368]
    wall_mean = np.array([215, 195, 165])
    diff = np.sqrt(np.sum((sub[:,:,:3] - wall_mean)**2, axis=2))
    mask = binary_dilation(diff > 28, iterations=3)
    
    rgb_sub = sub[:,:,:3] / 255.0
    inpainted = inpaint.inpaint_biharmonic(rgb_sub, mask, channel_axis=-1)
    clean_sub = (np.clip(inpainted * 255, 0, 255)).astype(np.uint8)
    
    res_arr = np.array(src)
    res_arr[45:300, 45:368, :3] = clean_sub
    res = Image.fromarray(res_arr)
    
    # Mount large circular official emblem: diameter 220px at cx=206, cy=166
    paste_emblem(res, cx=206, cy=166, diameter=220, shadow_blur=8, shadow_opacity=130, shadow_offset=(5, 8))
    
    save_dual(res, 'clinic-reception')
    res.crop((40, 30, 380, 310)).save(os.path.join(CROP_DIR, 'crop_clinic_reception.png'))

# 2. ADVANCED EQUIPMENT
def process_advanced_equipment():
    print("Processing advanced-equipment...")
    src = Image.open(os.path.join(BACKUP_DIR, 'advanced-equipment.webp')).convert('RGBA')
    
    # Clean pillar ribbon logo (x: 428..520, y: 154..286)
    # Paint with white pillar tone: [242, 245, 248]
    res = src.copy()
    draw = ImageDraw.Draw(res)
    draw.rectangle([428, 154, 520, 286], fill=(242, 245, 248, 255))
    
    # Mount circular official emblem on pillar: diameter 84px at cx=474, cy=220
    paste_emblem(res, cx=474, cy=220, diameter=84, shadow_blur=4, shadow_opacity=90, shadow_offset=(3, 5))
    
    save_dual(res, 'advanced-equipment')
    res.crop((400, 135, 540, 360)).save(os.path.join(CROP_DIR, 'crop_advanced_equipment.png'))

# 3. MANUAL THERAPY
def process_manual_therapy():
    print("Processing manual-therapy...")
    src = Image.open(os.path.join(BACKUP_DIR, 'manual-therapy.webp')).convert('RGBA')
    
    # Clean old acrylic board (x: 440..625, y: 75..185)
    # Teal wall color: [142, 204, 202]
    res = src.copy()
    draw = ImageDraw.Draw(res)
    draw.rectangle([440, 75, 625, 185], fill=(142, 204, 202, 255))
    
    # Mount circular official emblem: diameter 96px at cx=532, cy=130
    paste_emblem(res, cx=532, cy=130, diameter=96, shadow_blur=5, shadow_opacity=110, shadow_offset=(4, 6))
    
    save_dual(res, 'manual-therapy')
    res.crop((430, 65, 635, 195)).save(os.path.join(CROP_DIR, 'crop_manual_therapy.png'))

# 4. EXERCISE THERAPY
def process_exercise_therapy():
    print("Processing exercise-therapy...")
    src = Image.open(os.path.join(BACKUP_DIR, 'exercise-therapy.webp')).convert('RGBA')
    
    # Clean old sign above mirror (x: 145..370, y: 95..205)
    # Mint wall color: [108, 186, 182]
    res = src.copy()
    draw = ImageDraw.Draw(res)
    draw.rectangle([145, 95, 370, 205], fill=(108, 186, 182, 255))
    
    # Mount circular official emblem: diameter 96px at cx=256, cy=150
    paste_emblem(res, cx=256, cy=150, diameter=96, shadow_blur=5, shadow_opacity=110, shadow_offset=(4, 6))
    
    save_dual(res, 'exercise-therapy')
    res.crop((140, 80, 380, 215)).save(os.path.join(CROP_DIR, 'crop_exercise_therapy.png'))

# 5. SPINE REHAB
def process_spine_rehab():
    print("Processing spine-rehab...")
    src = Image.open(os.path.join(BACKUP_DIR, 'spine-rehab.webp')).convert('RGBA')
    
    # Clean old board (x: 940..1135, y: 50..190)
    # Mint green wall color: [154, 214, 196]
    res = src.copy()
    draw = ImageDraw.Draw(res)
    draw.rectangle([940, 50, 1135, 190], fill=(154, 214, 196, 255))
    
    # Mount circular official emblem: diameter 104px at cx=1038, cy=120
    paste_emblem(res, cx=1038, cy=120, diameter=104, shadow_blur=5, shadow_opacity=110, shadow_offset=(4, 6))
    
    save_dual(res, 'spine-rehab')
    res.crop((930, 40, 1150, 205)).save(os.path.join(CROP_DIR, 'crop_spine_rehab.png'))

# 6. SPORTS REHAB
def process_sports_rehab():
    print("Processing sports-rehab...")
    src = Image.open(os.path.join(BACKUP_DIR, 'sports-rehab.webp')).convert('RGBA')
    res = src.copy()
    draw = ImageDraw.Draw(res)
    
    # Clean column logo (x: 745..950, y: 65..185) -> white wall [242, 244, 245]
    draw.rectangle([745, 65, 950, 185], fill=(242, 244, 245, 255))
    paste_emblem(res, cx=848, cy=125, diameter=92, shadow_blur=4, shadow_opacity=90, shadow_offset=(3, 5))
    
    # Clean wall above mirror (x: 1150..1380, y: 85..205) -> off-white wall [240, 242, 245]
    draw.rectangle([1150, 85, 1380, 205], fill=(240, 242, 245, 255))
    paste_emblem(res, cx=1265, cy=145, diameter=88, shadow_blur=4, shadow_opacity=90, shadow_offset=(3, 5))
    
    save_dual(res, 'sports-rehab')
    res.crop((735, 55, 960, 195)).save(os.path.join(CROP_DIR, 'crop_sports_col.png'))
    res.crop((1140, 75, 1385, 215)).save(os.path.join(CROP_DIR, 'crop_sports_wall.png'))

# 7. HERO CLINIC
def process_hero_clinic():
    print("Processing hero-clinic...")
    src = Image.open(os.path.join(BACKUP_DIR, 'hero-clinic.webp')).convert('RGBA')
    
    # Inpaint text on sage green desk panel (x: 480..600, y: 340..435)
    arr = np.array(src).astype(np.float32)
    sub = arr[340:435, 480:600]
    is_text = (sub[:,:,0] < 120) & (sub[:,:,1] < 130) & (sub[:,:,2] < 125)
    mask = binary_dilation(is_text, iterations=2)
    
    rgb_sub = sub[:,:,:3] / 255.0
    inpainted = inpaint.inpaint_biharmonic(rgb_sub, mask, channel_axis=-1)
    clean_sub = (np.clip(inpainted * 255, 0, 255)).astype(np.uint8)
    
    res_arr = np.array(src)
    res_arr[340:435, 480:600, :3] = clean_sub
    res = Image.fromarray(res_arr)
    
    # Mount circular official emblem on reception desk: diameter 72px at cx=542, cy=382
    paste_emblem(res, cx=542, cy=382, diameter=72, shadow_blur=3, shadow_opacity=95, shadow_offset=(3, 4))
    
    save_dual(res, 'hero-clinic')
    res.crop((460, 320, 620, 460)).save(os.path.join(CROP_DIR, 'crop_hero_clinic.png'))

# 8. DR NIKUNJ JOSHI
def process_dr_nikunj():
    print("Processing dr-nikunj-joshi...")
    src = Image.open(os.path.join(BACKUP_DIR, 'dr-nikunj-joshi.webp')).convert('RGBA')
    res = src.copy()
    
    # Embroidered seal crest on doctor's coat above pocket name: diameter 52px at cx=590, cy=618
    paste_emblem(res, cx=590, cy=618, diameter=52, shadow_blur=2, shadow_opacity=65, shadow_offset=(2, 3))
    
    save_dual(res, 'dr-nikunj-joshi')
    res.crop((430, 520, 670, 720)).save(os.path.join(CROP_DIR, 'crop_dr_nikunj.png'))

# 9. DR PRIYANSHI VANI
def process_dr_priyanshi():
    print("Processing dr-priyanshi-vani...")
    src = Image.open(os.path.join(BACKUP_DIR, 'dr-priyanshi-vani.webp')).convert('RGBA')
    res = src.copy()
    
    # Official clinic badge on doctor's coat: diameter 48px at cx=626, cy=550 (right chest above badge)
    paste_emblem(res, cx=626, cy=550, diameter=48, shadow_blur=2, shadow_opacity=65, shadow_offset=(2, 3))
    
    save_dual(res, 'dr-priyanshi-vani')
    res.crop((520, 480, 720, 680)).save(os.path.join(CROP_DIR, 'crop_dr_priyanshi.png'))

# 10. KNEE REHAB
def process_knee_rehab():
    print("Processing knee-rehab...")
    src = Image.open(os.path.join(BACKUP_DIR, 'knee-rehab.webp')).convert('RGBA')
    res = src.copy()
    
    # Clinic wall emblem on the background wall: diameter 82px at cx=240, cy=180
    paste_emblem(res, cx=240, cy=180, diameter=82, shadow_blur=4, shadow_opacity=90, shadow_offset=(3, 5))
    
    save_dual(res, 'knee-rehab')
    res.crop((160, 100, 320, 260)).save(os.path.join(CROP_DIR, 'crop_knee_rehab.png'))

# 11. NEURO REHAB
def process_neuro_rehab():
    print("Processing neuro-rehab...")
    src = Image.open(os.path.join(BACKUP_DIR, 'neuro-rehab.webp')).convert('RGBA')
    res = src.copy()
    
    # Clinic wall emblem on the green wall above parallel bars: diameter 84px at cx=370, cy=120
    paste_emblem(res, cx=370, cy=120, diameter=84, shadow_blur=4, shadow_opacity=90, shadow_offset=(3, 5))
    
    save_dual(res, 'neuro-rehab')
    res.crop((280, 50, 460, 220)).save(os.path.join(CROP_DIR, 'crop_neuro_rehab.png'))

# 12. HOME PHYSIOTHERAPY
def process_home_physiotherapy():
    print("Processing home-physiotherapy...")
    src = Image.open(os.path.join(BACKUP_DIR, 'home-physiotherapy.webp')).convert('RGBA')
    res = src.copy()
    
    # Official clinic emblem badge in corner: diameter 74px at cx=1310, cy=60
    paste_emblem(res, cx=1310, cy=60, diameter=74, shadow_blur=4, shadow_opacity=90, shadow_offset=(2, 4))
    
    save_dual(res, 'home-physiotherapy')
    res.crop((1240, 10, 1370, 140)).save(os.path.join(CROP_DIR, 'crop_home_physio.png'))

if __name__ == '__main__':
    process_clinic_reception()
    process_advanced_equipment()
    process_manual_therapy()
    process_exercise_therapy()
    process_spine_rehab()
    process_sports_rehab()
    process_hero_clinic()
    process_dr_nikunj()
    process_dr_priyanshi()
    process_knee_rehab()
    process_neuro_rehab()
    process_home_physiotherapy()
    print("ALL 12 IMAGES REGENERATED WITH OFFICIAL LOGO SUCCESSFULLY.")
