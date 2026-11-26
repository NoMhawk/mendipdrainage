"""Make the search-result and browser icons from static/assets/favicon.svg.

Run after changing the logo:  python scripts/make-icons.py
Needs Chrome (renders the SVG) and Pillow (pip install pillow).

Writes (all committed, copied into site/ by build.js):
  static/favicon.ico            16, 32 and 48 px  (Google wants a multiple of 48)
  static/apple-touch-icon.png   180 px, solid background (iPhone home screen)
  static/assets/icon-192.png    web app manifest
  static/assets/icon-512.png    web app manifest
  static/assets/logo-512.png    the logo Google shows for the business (schema "logo")
"""
import os, subprocess, tempfile, shutil
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC = os.path.join(ROOT, 'static')
SVG = os.path.join(STATIC, 'assets', 'favicon.svg')
BG = '#1E4D45'  # brand green, used where an icon needs a solid background

CHROME = next((p for p in [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    shutil.which('chrome') or '', shutil.which('google-chrome') or '', shutil.which('chromium') or '',
] if p and os.path.exists(p)), None)
if not CHROME:
    raise SystemExit('Chrome or Edge not found')


def render(size, background=None):
    """Render the SVG at size x size with headless Chrome. Transparent unless background is given."""
    svg = open(SVG, encoding='utf-8').read()
    bg = background or 'transparent'
    html = f'<html><body style="margin:0;background:{bg}"><div style="width:{size}px;height:{size}px">{svg.replace("<svg ", f"<svg width=\"{size}\" height=\"{size}\" ", 1)}</div></body></html>'
    tmp = tempfile.mkdtemp()
    page, out = os.path.join(tmp, 'i.html'), os.path.join(tmp, 'i.png')
    open(page, 'w', encoding='utf-8').write(html)
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', f'--window-size={size},{size}',
                    '--default-background-color=00000000', f'--screenshot={out}', 'file:///' + page.replace('\\', '/')],
                   check=True, capture_output=True)
    img = Image.open(out).convert('RGBA').crop((0, 0, size, size))
    shutil.rmtree(tmp, ignore_errors=True)
    return img


big = render(512)
big.save(os.path.join(STATIC, 'assets', 'icon-512.png'))
big.resize((192, 192), Image.LANCZOS).save(os.path.join(STATIC, 'assets', 'icon-192.png'))
big.save(os.path.join(STATIC, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])

# Logo for Google: square, on white, so it reads well in the knowledge panel.
logo = Image.new('RGBA', (512, 512), 'white')
logo.alpha_composite(big)
logo.convert('RGB').save(os.path.join(STATIC, 'assets', 'logo-512.png'))

# Apple touch icon: iOS rounds the corners itself, so fill the background.
render(180, BG).convert('RGB').save(os.path.join(STATIC, 'apple-touch-icon.png'))

print('Icons written.')
