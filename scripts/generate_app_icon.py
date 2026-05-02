"""Generate the iOS app icon for The English Hub.

Pure Python + Pillow, no external tooling.
"""
from __future__ import annotations

import os
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# --- config ---------------------------------------------------------------
SIZE = 1024
INK = (0x0d, 0x1f, 0x2d)        # background dark navy
CREAM = (0xfa, 0xf6, 0xf0)       # letter cream
CLAY = (0xd9, 0x77, 0x57)        # accent rule clay
LETTER = "E"
LETTER_FONT_SIZE = 700
LETTER_CENTER = (512, 480)
RULE_WIDTH = 250
RULE_HEIGHT = 16
RULE_CENTER_Y = 720

ASSETS = Path(r"D:/Coding/english-hub/mobile/assets")
OUT_PATH = ASSETS / "icon.png"
PLACEHOLDER_PATH = ASSETS / "icon.placeholder.png"

FONT_CANDIDATES = [
    r"C:/Windows/Fonts/georgia.ttf",
    r"C:/Windows/Fonts/times.ttf",
    r"C:/Windows/Fonts/timesbd.ttf",
]


def pick_font(size: int) -> tuple[ImageFont.ImageFont, str]:
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size=size), path
    return ImageFont.load_default(), "PIL.ImageFont.load_default()"


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)

    # 1. Back up an existing icon.png placeholder if present
    if OUT_PATH.exists():
        shutil.copy(OUT_PATH, PLACEHOLDER_PATH)
        print(f"Backed up existing icon to {PLACEHOLDER_PATH}")
    else:
        print(f"No existing icon at {OUT_PATH}; skipping placeholder backup")

    # 2. Build the canvas (RGB = opaque, no alpha channel)
    img = Image.new("RGB", (SIZE, SIZE), INK)
    draw = ImageDraw.Draw(img)

    # 3. Pick font and render the centred letter
    font, font_used = pick_font(LETTER_FONT_SIZE)
    print(f"Using font: {font_used}")

    # Use the font's bounding box of the glyph for accurate centring
    bbox = draw.textbbox((0, 0), LETTER, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    # offset compensates for the bbox's top-left origin (bbox[0], bbox[1])
    cx, cy = LETTER_CENTER
    draw_x = cx - text_w / 2 - bbox[0]
    draw_y = cy - text_h / 2 - bbox[1]
    draw.text((draw_x, draw_y), LETTER, font=font, fill=CREAM)

    # 4. Clay accent rule, 250 wide x 16 tall, centred at y=720
    half_w = RULE_WIDTH // 2
    half_h = RULE_HEIGHT // 2
    rule_box = [
        SIZE // 2 - half_w,
        RULE_CENTER_Y - half_h,
        SIZE // 2 + half_w - 1,
        RULE_CENTER_Y + half_h - 1,
    ]
    draw.rectangle(rule_box, fill=CLAY)

    # 5. Save as opaque PNG
    img.save(OUT_PATH, "PNG", optimize=True)

    # 6. Verify
    with Image.open(OUT_PATH) as check:
        assert check.size == (SIZE, SIZE), f"size mismatch: {check.size}"
        assert check.mode == "RGB", f"mode mismatch: {check.mode}"
        size_kb = OUT_PATH.stat().st_size / 1024
        print(
            f"Saved {OUT_PATH} | dims={check.size} | mode={check.mode} | "
            f"{size_kb:.1f} KB"
        )


if __name__ == "__main__":
    main()
