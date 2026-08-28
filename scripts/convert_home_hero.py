from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/nativos-home-hero-gwm-wey07-treated.png')
target = Path('/home/ubuntu/webdev-static-assets/nativos-home-hero-gwm-wey07-treated.webp')
image = Image.open(source).convert('RGB')
image.save(target, 'WEBP', quality=88, method=6)
print(target)
print(image.size)
print(target.stat().st_size)
