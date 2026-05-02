"""Generate brand assets (splash + adaptive icon) for The English Hub.

Pure Python + Pillow, no external tooling. Parameterised by output path,
canvas size, and design mode ("icon" / "splash" / "adaptive").

Does NOT touch the existing mobile/assets/icon.png.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path
from typing import Literal

from PIL import Image, ImageDraw, ImageFont

# --- shared palette -------------------------------------------------------
INK = (0x0d, 0x1f, 0x2d)        # dark navy
CREAM = (0xfa, 0xf6, 0xf0)       # cream
CLAY = (0xd9, 0x77, 0x57)        # accent clay

LETTER = "E"

ASSETS = Path(r"D:/Coding/english-hub/mobile/assets")

FONT_CANDIDATES = [
    r"C:/Windows/Fonts/georgia.ttf",
    r"C:/Windows/Fonts/times.ttf",
    r"C:/Windows/Fonts/timesbd.ttf",
]

Mode = Literal["icon", "splash", "adaptive"]


@dataclass
class BrandAssetSpec:
    """Spec for a single rendered brand asset."""

    out_path: Path
    canvas_size: int
    mode: Mode
    bg: tuple[int, int, int]
    fg: tuple[int, int, int]
    rule_color: tuple[int, int, int]
    letter_font_size: int
    letter_center: tuple[int, int]
    rule_width: int
    rule_height: int
    rule_center_y: int


def pick_font(size: int) -> tuple[ImageFont.ImageFont, str]:
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size=size), path
    return ImageFont.load_default(), "PIL.ImageFont.load_default()"


def render_asset(spec: BrandAssetSpec) -> None:
    """Render and save a single brand asset based on spec."""
    spec.out_path.parent.mkdir(parents=True, exist_ok=True)

    # 1. Build the canvas (RGB = opaque, no alpha channel)
    img = Image.new("RGB", (spec.canvas_size, spec.canvas_size), spec.bg)
    draw = ImageDraw.Draw(img)

    # 2. Pick font and render the centred letter
    font, font_used = pick_font(spec.letter_font_size)
    print(f"[{spec.mode}] Using font: {font_used}")

    bbox = draw.textbbox((0, 0), LETTER, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    cx, cy = spec.letter_center
    draw_x = cx - text_w / 2 - bbox[0]
    draw_y = cy - text_h / 2 - bbox[1]
    draw.text((draw_x, draw_y), LETTER, font=font, fill=spec.fg)

    # 3. Clay accent rule, centred horizontally on canvas
    half_w = spec.rule_width // 2
    half_h = spec.rule_height // 2
    rule_box = [
        spec.canvas_size // 2 - half_w,
        spec.rule_center_y - half_h,
        spec.canvas_size // 2 + half_w - 1,
        spec.rule_center_y + half_h - 1,
    ]
    draw.rectangle(rule_box, fill=spec.rule_color)

    # 4. Save as opaque PNG
    img.save(spec.out_path, "PNG", optimize=True)

    # 5. Verify
    with Image.open(spec.out_path) as check:
        size_kb = spec.out_path.stat().st_size / 1024
        assert check.size == (spec.canvas_size, spec.canvas_size), (
            f"size mismatch: {check.size}"
        )
        assert check.mode == "RGB", f"mode mismatch: {check.mode}"
        print(
            f"[{spec.mode}] Saved {spec.out_path} | dims={check.size} | "
            f"mode={check.mode} | {size_kb:.1f} KB"
        )


def splash_spec() -> BrandAssetSpec:
    """2048x2048 splash: cream bg, ink E, clay rule. Inverted from icon."""
    return BrandAssetSpec(
        out_path=ASSETS / "splash.png",
        canvas_size=2048,
        mode="splash",
        bg=CREAM,
        fg=INK,
        rule_color=CLAY,
        letter_font_size=700,
        letter_center=(1024, 960),
        rule_width=250,
        rule_height=16,
        rule_center_y=1300,
    )


def adaptive_spec() -> BrandAssetSpec:
    """1024x1024 adaptive icon: ink bg, cream E, clay rule. Centred safe."""
    return BrandAssetSpec(
        out_path=ASSETS / "adaptive-icon.png",
        canvas_size=1024,
        mode="adaptive",
        bg=INK,
        fg=CREAM,
        rule_color=CLAY,
        letter_font_size=480,
        letter_center=(512, 460),
        rule_width=200,
        rule_height=12,
        rule_center_y=600,
    )


def main() -> None:
    for spec in (splash_spec(), adaptive_spec()):
        render_asset(spec)


if __name__ == "__main__":
    main()
