import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
from skimage.restoration import inpaint

def clean_region_biharmonic(img_arr, mask_arr):
    """
    Inpaint region using biharmonic inpainting from skimage.
    img_arr: H x W x 3 or 4 (uint8)
    mask_arr: H x W (bool or uint8, True where inpainting needed)
    """
    # inpaint works on float in [0, 1]
    is_rgba = img_arr.shape[2] == 4
    rgb = img_arr[:, :, :3].astype(np.float32) / 255.0
    mask = mask_arr.astype(bool)
    
    inpainted = inpaint.inpaint_biharmonic(rgb, mask, channel_axis=-1)
    res = np.clip(inpainted * 255.0, 0, 255).astype(np.uint8)
    
    if is_rgba:
        alpha = img_arr[:, :, 3:4]
        res = np.concatenate([res, alpha], axis=2)
    return res

def add_drop_shadow(logo_img, offset=(3, 5), blur_radius=6, opacity=110):
    """
    Generate a realistic soft drop shadow for a transparent PNG/RGBA logo.
    """
    shadow_size = (logo_img.width + abs(offset[0]) + blur_radius * 4,
                   logo_img.height + abs(offset[1]) + blur_radius * 4)
    shadow = Image.new('RGBA', shadow_size, (0, 0, 0, 0))
    
    # Extract alpha from logo
    alpha = logo_img.split()[3]
    # Create black mask
    shadow_mask = Image.new('L', logo_img.size, 0)
    shadow_mask.paste(alpha)
    
    # Scale opacity
    shadow_mask = shadow_mask.point(lambda p: int(p * (opacity / 255.0)))
    
    # Paste onto shadow canvas at offset
    paste_pos = (blur_radius * 2 + max(0, offset[0]), blur_radius * 2 + max(0, offset[1]))
    shadow_layer = Image.new('RGBA', logo_img.size, (15, 20, 25, 255))
    shadow.paste(shadow_layer, paste_pos, shadow_mask)
    
    # Blur
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur_radius))
    
    # Place logo onto composite
    composite = Image.new('RGBA', shadow_size, (0, 0, 0, 0))
    composite.paste(shadow, (0, 0), shadow)
    logo_pos = (blur_radius * 2 + max(0, -offset[0]), blur_radius * 2 + max(0, -offset[1]))
    composite.paste(logo_img, logo_pos, logo_img)
    
    return composite, logo_pos

print("Helper functions defined.")
