from __future__ import annotations
import re
from pathlib import Path
from collections import defaultdict
from urllib.request import Request, urlopen
from PIL import Image
from io import BytesIO

ROOT = Path('/home/ubuntu/nativos-experiences')
data = (ROOT / 'lib/data.ts').read_text(encoding='utf-8')

img_match = re.search(r'const img = \{(.*?)\};', data, re.S)
if not img_match:
    raise SystemExit('const img não encontrado')
images = dict(re.findall(r'(\w+):"(https?://[^\"]+)"', img_match.group(1)))
usage = defaultdict(list)
for line in data.splitlines():
    m = re.match(r'\s*(\w+):\{.*?image:img\.(\w+)', line)
    if m:
        usage[m.group(2)].append(m.group(1))

print('key|url|status|content_type|bytes|width|height|format|pages')
for key, url in images.items():
    status = 'error'
    ctype = ''
    raw = b''
    try:
        req = Request(url, headers={'User-Agent': 'Nativos-image-inventory/1.0'})
        with urlopen(req, timeout=30) as r:
            raw = r.read()
            status = str(getattr(r, 'status', 200))
            ctype = r.headers.get('Content-Type', '')
        im = Image.open(BytesIO(raw))
        fmt = im.format or ''
        width, height = im.size
    except Exception as exc:
        width = height = 0
        fmt = f'ERROR:{type(exc).__name__}'
    pages = ','.join(usage.get(key, []))
    print('|'.join([key, url, status, ctype, str(len(raw)), str(width), str(height), fmt, pages]))

print('\nTOTAL_UNIQUE_IMAGES', len(images))
print('TOTAL_PAGE_REFERENCES', sum(len(v) for v in usage.values()))
print('TOTAL_IMAGE_REFERENCES_IN_DATA', len(re.findall(r'image:img\.', data)))
