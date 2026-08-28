from pathlib import Path
from PIL import Image, ImageEnhance

source = Path('/home/ubuntu/fleet-upload-inspection/Wey_07__37_.jpg')
target = Path('/home/ubuntu/webdev-static-assets/nativos-frota-original-wey07-37.webp')
target.parent.mkdir(parents=True, exist_ok=True)

image = Image.open(source).convert('RGB')
# Preserve the original composition; only resize within a safe maximum and apply restrained brand grading.
image.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
image = ImageEnhance.Color(image).enhance(0.88)
image = ImageEnhance.Contrast(image).enhance(1.04)
image = ImageEnhance.Brightness(image).enhance(0.99)
image.save(target, 'WEBP', quality=88, method=6)
print(f'{target} {image.width}x{image.height} {target.stat().st_size} bytes')
