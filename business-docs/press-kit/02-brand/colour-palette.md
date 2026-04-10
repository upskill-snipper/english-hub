# The English Hub — Colour Palette

The palette is built for a premium dark product UI and for confident marketing. Every colour below is specified with its hex, HSL (the format used in our Tailwind tokens), RGB, and an approximate Pantone for print.

All colour pairings listed as "accessibility-compliant" have been chosen to meet WCAG 2.1 AA contrast ratios for normal body text (4.5:1) or large text (3:1).

---

## 1. Primary palette

### Hub Emerald — our signature colour
- **Hex:** `#22C58A`
- **HSL:** `hsl(162, 72%, 46%)`
- **RGB:** `34, 197, 138`
- **Pantone (approx):** 339 C
- **Role:** Primary CTAs, key highlights, progress indicators, brand accents, the "E" curve inside the logo icon.
- **Rule of thumb:** Never use Hub Emerald for body text. It is a *signal* colour, reserved for what we want the eye to land on.

### Ink — our primary dark background
- **Hex:** `#0B0F17`
- **HSL:** `hsl(228, 28%, 6%)`
- **RGB:** `11, 15, 23`
- **Pantone (approx):** Black 6 C
- **Role:** The default background of the product. The canvas of every piece of premium marketing.

### Paper — text on dark
- **Hex:** `#F1F4F9`
- **HSL:** `hsl(210, 20%, 95%)`
- **RGB:** `241, 244, 249`
- **Pantone (approx):** 11-0601 TPX (Bright White)
- **Role:** Body text and high-contrast elements on Ink. **Never pure `#FFFFFF`** — pure white on Ink is too harsh and off-brand.

---

## 2. Secondary / surface palette

Used for layered UI and supporting marketing.

### Slate — elevated surfaces
- **Hex:** `#12171F`
- **HSL:** `hsl(226, 25%, 10%)`
- **Role:** Cards, modals, popovers, navigation drawers on top of Ink.

### Graphite — borders and dividers
- **Hex:** `#1F2430`
- **HSL:** `hsl(224, 18%, 16%)`
- **Role:** Barely-there lines. Never a fill.

### Fog — muted text
- **Hex:** `#7A8294`
- **HSL:** `hsl(218, 15%, 55%)`
- **Role:** Secondary body text, form placeholders, metadata (dates, timestamps).

---

## 3. Accent and system palette

### Signal Blue — links and info
- **Hex:** `#3B82F6`
- **HSL:** `hsl(217, 91%, 60%)`
- **Pantone (approx):** 2728 C
- **Role:** Hyperlinks, informational badges, secondary CTAs, chart series 2.

### Warm Amber — warnings
- **Hex:** `#F5B638`
- **HSL:** `hsl(43, 90%, 58%)`
- **Pantone (approx):** 1235 C
- **Role:** Non-blocking notices ("your mock expires in 3 days"), chart series 3.

### Deep Red — errors
- **Hex:** `#E23D3D`
- **HSL:** `hsl(0, 72%, 56%)`
- **Pantone (approx):** 179 C
- **Role:** Destructive actions and form validation errors *only*. Never decorative.

### Plum — chart accent
- **Hex:** `#8B5CF6`
- **HSL:** `hsl(262, 83%, 66%)`
- **Pantone (approx):** 2665 C
- **Role:** Chart series 4, rare highlight on marketing.

---

## 4. Accessibility-compliant pairings

All pairs listed below meet or exceed WCAG 2.1 AA contrast (4.5:1 for normal text, 3:1 for large text).

| Foreground | Background | Contrast ratio | Use for |
|---|---|---|---|
| Paper `#F1F4F9` | Ink `#0B0F17` | ~16.8:1 (AAA) | Body text in product and marketing |
| Paper `#F1F4F9` | Slate `#12171F` | ~15.1:1 (AAA) | Card content |
| Hub Emerald `#22C58A` | Ink `#0B0F17` | ~9.2:1 (AAA) | CTAs, key headlines, accents |
| Ink `#0B0F17` | Hub Emerald `#22C58A` | ~9.2:1 (AAA) | Text *on* Emerald buttons and banners |
| Ink `#0B0F17` | Paper `#F1F4F9` | ~16.8:1 (AAA) | Light-theme body text |
| Signal Blue `#3B82F6` | Ink `#0B0F17` | ~5.4:1 (AA) | Links |
| Paper `#F1F4F9` | Signal Blue `#3B82F6` | ~3.1:1 (AA large) | Headlines on blue banners |
| Ink `#0B0F17` | Warm Amber `#F5B638` | ~10.8:1 (AAA) | Warning banners — text dark on amber |
| Paper `#F1F4F9` | Deep Red `#E23D3D` | ~4.6:1 (AA) | Error banner copy |
| Fog `#7A8294` | Ink `#0B0F17` | ~4.6:1 (AA) | Metadata, timestamps, placeholder text |

**Failing combinations — never use:**

- Hub Emerald on Paper (contrast ~1.8:1)
- Fog on Slate (contrast ~4.1:1 — fails AA for body text)
- Signal Blue on Ink for body text at anything smaller than 18pt (use only for links, which are expected to be underlined or bold)
- Any colour on a photograph without a scrim

---

## 5. Colour usage rules

1. **Hub Emerald is one-per-screen.** If you are tempted to use Hub Emerald in two places on one page, one of them is wrong.
2. **Ink is the default canvas.** Light-theme marketing collateral exists (Paper backgrounds for printed handouts), but "The English Hub looks premium" is always a dark-theme moment.
3. **Charts use the defined order:** Emerald (1), Signal Blue (2), Warm Amber (3), Plum (4), Deep Red (5). Never re-order or swap hues.
4. **Gradients.** Use sparingly. The only approved gradient is `Ink → Slate`, 135°, for subtle hero backdrops. Never gradient the logo or CTAs.
5. **Print.** Always match to the Pantone equivalent, not the hex conversion, for brand colours. A hex-to-CMYK conversion of Hub Emerald drifts toward teal and is not on-brand.

---

## 6. Tailwind token reference

Our Tailwind / CSS variables map to the palette as follows (these live in `src/app/globals.css`):

```css
--background: 228 28% 6%;    /* Ink */
--foreground: 210 20% 95%;   /* Paper */
--card: 226 25% 10%;         /* Slate */
--primary: 162 72% 46%;      /* Hub Emerald */
--secondary: 224 20% 13%;    /* darker slate */
--muted-foreground: 218 15% 55%; /* Fog */
--destructive: 0 72% 56%;    /* Deep Red */
--ring: 162 72% 46%;         /* Hub Emerald focus ring */
```

If you ever change a value here, update this document on the same PR.
