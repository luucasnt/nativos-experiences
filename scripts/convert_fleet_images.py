from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/webdev-static-assets')
for source in [
    root / 'nativos-frota-hero-wey07-37.png',
    root / 'nativos-frota-detalhe-teto-wey07.png',
    root / 'nativos-frota-interior-wey07.png',
    root / 'nativos-frota-painel-jeep-commander.png',
]:
    target = source.with_suffix('.webp')
    with Image.open(source).convert('RGB') as image:
        image.save(target, 'WEBP', quality=88, method=6)
        print(f'{target.name}|{image.width}x{image.height}|{target.stat().st_size}')
