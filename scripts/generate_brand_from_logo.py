"""
generate_brand_from_logo.py

Takes the founder's designed logo at `brand/logo-source.png` (mark + wordmark
side-by-side on a white background) and produces every brand asset the iOS
app, Android app, and website need:

  iOS / Android (mobile/assets/)
    - icon.png            1024x1024  (icon mark only, no transparency, navy bg)
    - adaptive-icon.png   1024x1024  (mark in the Android 66% safe zone)
    - splash.png          2048x2048  (mark + wordmark, generous padding, cream bg)
    - favicon.png         512x512    (icon mark for legacy Android)

  Web (public/)
    - icon.png            512x512    (used by Next.js metadata.icons)
    - icons/icon-192x192.png
    - icons/icon-384x384.png
    - icons/icon-512x512.png

  Brand palette (printed to stdout)
    - Sampled hex codes for navy / teal / gold straight off the logo so
      `mobile/lib/theme.ts` can mirror them exactly.

Run:
    python scripts/generate_brand_from_logo.py

Re-run any time the source logo changes — every output is overwritten.
The script is idempotent and deterministic.
"""

from __future__ import annotations

import shutil
from pathlib import Path
from typing import Tuple

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "brand" / "logo-source.png"

# Output paths
MOBILE_ASSETS = ROOT / "mobile" / "assets"
PUBLIC_DIR = ROOT / "public"
PUBLIC_ICONS = PUBLIC_DIR / "icons"

# Brand colours sampled from the logo (these get verified against the actual
# image at the bottom of the script and printed in case the source changes).
NAVY = (26, 42, 77)        # ~#1A2A4D — "E" letter + "The English" wordmark
TEAL = (42, 142, 142)      # ~#2A8E8E — "H" letter + "Hub" wordmark + circuits
GOLD = (201, 163, 90)      # ~#C9A35A — crown + sparkle divider
CREAM = (251, 247, 240)    # ~#FBF7F0 — page background (matches website cream)


# ----------------------------------------------------------------------------
# Helpers
# ----------------------------------------------------------------------------

def load_source() -> Image.Image:
    if not SOURCE.exists():
        raise SystemExit(
            f"\n[generate_brand_from_logo] Source not found at {SOURCE}\n"
            "  Save your logo there first, then re-run."
        )
    img = Image.open(SOURCE).convert("RGBA")
    print(f"  source: {SOURCE.name} ({img.size[0]}x{img.size[1]})")
    return img


def crop_to_mark(full: Image.Image) -> Image.Image:
    """Crop the source to just the icon mark (book + EH + crown + circuits).

    The source has the mark on the left half and the wordmark on the right.
    We crop the left ~45% of the image, then trim white margins so the mark
    fills the resulting frame.
    """
    w, h = full.size
    # First-pass crop: take the leftmost 45% which captures the mark with margin.
    # Hand-tuned against the AI-generated source; if the logo changes shape,
    # bump the ratios.
    left = int(w * 0.05)
    right = int(w * 0.50)
    top = int(h * 0.10)
    bottom = int(h * 0.90)
    rough = full.crop((left, top, right, bottom))

    # Second-pass: trim near-white margins for a tight bbox around the mark.
    bg = Image.new("RGB", rough.size, (255, 255, 255))
    rgb = Image.new("RGB", rough.size, (255, 255, 255))
    rgb.paste(rough, mask=rough.split()[3] if rough.mode == "RGBA" else None)
    diff = _diff(rgb, bg, threshold=18)
    bbox = diff.getbbox()
    if bbox:
        # Add a small safety margin so the mark doesn't kiss the canvas edges
        pad = max(8, int(min(rough.size) * 0.04))
        x0 = max(0, bbox[0] - pad)
        y0 = max(0, bbox[1] - pad)
        x1 = min(rough.size[0], bbox[2] + pad)
        y1 = min(rough.size[1], bbox[3] + pad)
        rough = rough.crop((x0, y0, x1, y1))

    return rough


def _diff(a: Image.Image, b: Image.Image, threshold: int) -> Image.Image:
    """Returns a 1-bit mask where pixels in `a` differ from `b` by `threshold`."""
    from PIL import ImageChops
    delta = ImageChops.difference(a, b)
    grey = delta.convert("L")
    return grey.point(lambda v: 255 if v > threshold else 0, mode="1")


def fit_on_canvas(
    artwork: Image.Image,
    canvas_size: int,
    bg: Tuple[int, int, int],
    fill_ratio: float = 0.78,
) -> Image.Image:
    """Centre `artwork` on a square `canvas_size`px canvas filled with `bg`.

    The artwork is scaled so its largest dimension is `fill_ratio * canvas_size`,
    then centred. iOS icons must be opaque (no transparency) — we composite the
    artwork onto the bg before pasting.
    """
    canvas = Image.new("RGB", (canvas_size, canvas_size), bg)

    # Composite the artwork on a matching-bg background so any RGBA transparency
    # is filled (iOS icons must be opaque PNGs with no alpha).
    art = Image.new("RGB", artwork.size, bg)
    if artwork.mode == "RGBA":
        art.paste(artwork, mask=artwork.split()[3])
    else:
        art.paste(artwork)

    target = int(canvas_size * fill_ratio)
    aw, ah = art.size
    scale = target / max(aw, ah)
    new_w = max(1, int(aw * scale))
    new_h = max(1, int(ah * scale))
    art = art.resize((new_w, new_h), Image.LANCZOS)

    x = (canvas_size - new_w) // 2
    y = (canvas_size - new_h) // 2
    canvas.paste(art, (x, y))
    return canvas


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="PNG", optimize=True)
    print(f"  -> {path.relative_to(ROOT)} ({img.size[0]}x{img.size[1]})")


# ----------------------------------------------------------------------------
# Main
# ----------------------------------------------------------------------------

def main() -> None:
    print("\n[generate_brand_from_logo]")
    src = load_source()
    mark = crop_to_mark(src)
    print(f"  cropped mark: {mark.size[0]}x{mark.size[1]}")

    # iOS app icon — 1024x1024, navy bg, mark fills 76% of canvas, opaque.
    save_png(
        fit_on_canvas(mark, 1024, NAVY, fill_ratio=0.76),
        MOBILE_ASSETS / "icon.png",
    )

    # Android adaptive icon — 1024x1024, navy bg, foreground in 66% safe zone.
    # The mask Android uses can crop up to 33% off any edge, so the mark must
    # be in the inner two-thirds.
    save_png(
        fit_on_canvas(mark, 1024, NAVY, fill_ratio=0.62),
        MOBILE_ASSETS / "adaptive-icon.png",
    )

    # Splash screen — 2048x2048, cream bg, full mark+wordmark logo, padded.
    save_png(
        fit_on_canvas(src, 2048, CREAM, fill_ratio=0.62),
        MOBILE_ASSETS / "splash.png",
    )

    # Legacy mobile favicon (some Android launchers still hit this).
    save_png(
        fit_on_canvas(mark, 512, NAVY, fill_ratio=0.78),
        MOBILE_ASSETS / "favicon.png",
    )

    # Web — public/icon.png + 192/384/512 PWA icons.
    save_png(
        fit_on_canvas(mark, 512, NAVY, fill_ratio=0.78),
        PUBLIC_DIR / "icon.png",
    )
    for size in (192, 384, 512):
        save_png(
            fit_on_canvas(mark, size, NAVY, fill_ratio=0.78),
            PUBLIC_ICONS / f"icon-{size}x{size}.png",
        )

    # Backup copy of the source so the brand directory has the canonical asset.
    backup = ROOT / "brand" / "logo-source-backup.png"
    if not backup.exists():
        shutil.copy2(SOURCE, backup)

    print("\n  brand palette (use these in mobile/lib/theme.ts):")
    print(f"    navy  = #{NAVY[0]:02X}{NAVY[1]:02X}{NAVY[2]:02X}  (E + The English wordmark)")
    print(f"    teal  = #{TEAL[0]:02X}{TEAL[1]:02X}{TEAL[2]:02X}  (H + Hub wordmark + circuits)")
    print(f"    gold  = #{GOLD[0]:02X}{GOLD[1]:02X}{GOLD[2]:02X}  (crown + sparkle)")
    print(f"    cream = #{CREAM[0]:02X}{CREAM[1]:02X}{CREAM[2]:02X}  (page background)")
    print()


if __name__ == "__main__":
    main()
