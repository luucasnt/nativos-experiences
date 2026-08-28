from PIL import Image
from pathlib import Path

source = Path('/home/ubuntu/screenshots/webdev-preview-root-1787876829057807185-7716.png')
target = Path('/home/ubuntu/nativos-experiences/footer-contatos-mobile.png')
image = Image.open(source)
width, height = image.size
# The footer is the final section in this full-page mobile capture.
start = max(0, int(height * 0.90))
footer = image.crop((0, start, width, height))
scale = 3
footer = footer.resize((footer.width * scale, footer.height * scale), Image.Resampling.LANCZOS)
footer.save(target, optimize=True)
print(f'{source} -> {target} ({width}x{height}, crop from y={start})')
