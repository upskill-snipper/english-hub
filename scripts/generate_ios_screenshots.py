"""Generate placeholder iPhone 6.7" screenshot stubs for App Store Connect.

These are temporary placeholders for The English Hub iOS listing while the
founder waits for real device screenshots from a TestFlight build.

Apple requirements (iPhone 6.7" display family):
- 1290 x 2796 px portrait
- PNG, RGB, opaque, < 2 MB

Pure Python + Pillow, no external tooling. Mirrors the structure of
generate_brand_assets.py so brand colours and font fallbacks stay in sync.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# --- shared palette (matches generate_brand_assets.py) -------------------
INK = (0x0d, 0x1f, 0x2d)        # dark navy background
CREAM = (0xfa, 0xf6, 0xf0)       # cream text on ink
CLAY = (0xd9, 0x77, 0x57)        # accent clay
SLATE = (0x94, 0xa3, 0xb8)       # muted text

# --- canvas / typography --------------------------------------------------
CANVAS_W = 1290
CANVAS_H = 2796
SAFE_RATIO = 0.90               # 90% safe area for content
HEADLINE_SIZE = 120
SUPPORTING_SIZE = 60
WORDMARK_SIZE = 80
WORDMARK_TOP_OFFSET = 180        # px from the top of the canvas
WORDMARK_TEXT = "TEH"
ACCENT_RULE_WIDTH = 180
ACCENT_RULE_HEIGHT = 8

OUT_DIR = Path(r"D:/Coding/english-hub/mobile/store-assets/ios")

FONT_CANDIDATES = [
    r"C:/Windows/Fonts/georgia.ttf",
    r"C:/Windows/Fonts/times.ttf",
    r"C:/Windows/Fonts/timesbd.ttf",
]


@dataclass
class ScreenshotSpec:
    """Spec for a single placeholder screenshot."""

    out_path: Path
    headline: str
    supporting: str


def pick_font(size: int) -> tuple[ImageFont.ImageFont, str]:
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size=size), path
    return ImageFont.load_default(), "PIL.ImageFont.load_default()"


def wrap_lines(
    draw: ImageDraw.ImageDraw,
    text: str,
    font: ImageFont.ImageFont,
    max_width: int,
) -> list[str]:
    """Greedy word-wrap respecting a maximum pixel width."""
    words = text.split()
    if not words:
        return []
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        bbox = draw.textbbox((0, 0), candidate, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def draw_centered_lines(
    draw: ImageDraw.ImageDraw,
    lines: list[str],
    font: ImageFont.ImageFont,
    fill: tuple[int, int, int],
    center_x: int,
    start_y: int,
    line_spacing: int,
) -> int:
    """Draw lines centred on `center_x` starting at `start_y`. Returns next y."""
    y = start_y
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        text_w = bbox[2] - bbox[0]
        text_h = bbox[3] - bbox[1]
        x = center_x - text_w / 2 - bbox[0]
        draw.text((x, y - bbox[1]), line, font=font, fill=fill)
        y += text_h + line_spacing
    return y


def render_screenshot(spec: ScreenshotSpec, idx: int) -> None:
    """Render and save a single placeholder screenshot."""
    spec.out_path.parent.mkdir(parents=True, exist_ok=True)

    # 1. Full-bleed ink background, opaque RGB
    img = Image.new("RGB", (CANVAS_W, CANVAS_H), INK)
    draw = ImageDraw.Draw(img)

    # 2. Wordmark at the top, centred, cream serif
    wordmark_font, wordmark_font_path = pick_font(WORDMARK_SIZE)
    wm_bbox = draw.textbbox((0, 0), WORDMARK_TEXT, font=wordmark_font)
    wm_w = wm_bbox[2] - wm_bbox[0]
    wm_x = CANVAS_W / 2 - wm_w / 2 - wm_bbox[0]
    draw.text(
        (wm_x, WORDMARK_TOP_OFFSET - wm_bbox[1]),
        WORDMARK_TEXT,
        font=wordmark_font,
        fill=CREAM,
    )

    # 3. Headline + supporting line, both centred in the safe area
    safe_w = int(CANVAS_W * SAFE_RATIO)

    headline_font, _ = pick_font(HEADLINE_SIZE)
    supporting_font, _ = pick_font(SUPPORTING_SIZE)

    headline_lines = wrap_lines(draw, spec.headline, headline_font, safe_w)
    supporting_lines = wrap_lines(draw, spec.supporting, supporting_font, safe_w)

    # Estimate block heights so we can vertically centre the whole block
    headline_line_h = HEADLINE_SIZE + 12
    supporting_line_h = SUPPORTING_SIZE + 14
    headline_block_h = len(headline_lines) * headline_line_h
    supporting_block_h = len(supporting_lines) * supporting_line_h
    rule_gap = 80
    block_h = (
        headline_block_h
        + rule_gap
        + ACCENT_RULE_HEIGHT
        + rule_gap
        + supporting_block_h
    )

    block_top = (CANVAS_H - block_h) / 2

    # Headline (cream)
    after_headline_y = draw_centered_lines(
        draw,
        headline_lines,
        headline_font,
        CREAM,
        CANVAS_W // 2,
        int(block_top),
        line_spacing=12,
    )

    # 4. Clay accent rule between headline and supporting copy
    rule_y = int(after_headline_y + rule_gap - ACCENT_RULE_HEIGHT / 2)
    rule_box = [
        CANVAS_W // 2 - ACCENT_RULE_WIDTH // 2,
        rule_y,
        CANVAS_W // 2 + ACCENT_RULE_WIDTH // 2 - 1,
        rule_y + ACCENT_RULE_HEIGHT - 1,
    ]
    draw.rectangle(rule_box, fill=CLAY)

    # Supporting line (slate)
    draw_centered_lines(
        draw,
        supporting_lines,
        supporting_font,
        SLATE,
        CANVAS_W // 2,
        rule_y + ACCENT_RULE_HEIGHT + rule_gap,
        line_spacing=14,
    )

    # 5. Save as opaque PNG
    img.save(spec.out_path, "PNG", optimize=True)

    # 6. Verify dims/mode/size
    with Image.open(spec.out_path) as check:
        size_bytes = spec.out_path.stat().st_size
        size_kb = size_bytes / 1024
        assert check.size == (CANVAS_W, CANVAS_H), (
            f"size mismatch: {check.size}"
        )
        assert check.mode == "RGB", f"mode mismatch: {check.mode}"
        assert size_bytes < 2 * 1024 * 1024, f"too large: {size_kb:.1f} KB"
        print(
            f"[screenshot-{idx}] {spec.out_path.name} | dims={check.size} | "
            f"mode={check.mode} | {size_kb:.1f} KB | font={wordmark_font_path}"
        )


def specs() -> list[ScreenshotSpec]:
    """The 5 ASC screens, in upload order."""
    return [
        ScreenshotSpec(
            out_path=OUT_DIR / "screenshot-1.png",
            headline="GCSE and IGCSE English revision",
            supporting="AI marked against the AO rubric",
        ),
        ScreenshotSpec(
            out_path=OUT_DIR / "screenshot-2.png",
            headline="AI feedback in seconds",
            supporting="Trained on AQA, Edexcel, OCR, WJEC, Cambridge",
        ),
        ScreenshotSpec(
            out_path=OUT_DIR / "screenshot-3.png",
            headline="Every mock paper. Every board.",
            supporting="Timed practice with examiner-style commentary",
        ),
        ScreenshotSpec(
            out_path=OUT_DIR / "screenshot-4.png",
            headline="Every poem, novel, play",
            supporting="Annotated with model answers and quote banks",
        ),
        ScreenshotSpec(
            out_path=OUT_DIR / "screenshot-5.png",
            headline="Track your AO grade band",
            supporting="See exactly which assessment objectives need work",
        ),
    ]


def main() -> None:
    for idx, spec in enumerate(specs(), start=1):
        render_screenshot(spec, idx)


if __name__ == "__main__":
    main()
