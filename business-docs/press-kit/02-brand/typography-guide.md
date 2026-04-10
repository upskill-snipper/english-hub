# The English Hub — Typography Guide

Typography is 80% of the brand on any given page. Get this right and the rest falls into place.

---

## 1. Primary typeface — Mona Sans

**Mona Sans** is our one and only typeface. It is a modern, variable, open-source sans-serif designed by GitHub. It is warm enough to feel like a teacher and geometric enough to feel like a well-made product.

- **Designer:** GitHub (in collaboration with Degarism)
- **Licence:** SIL Open Font Licence 1.1 (free for commercial use, self-hostable)
- **Download:** https://github.com/github/mona-sans
- **Hosted on our product:** yes, self-hosted via the `/public/fonts/` directory — we do not ship a Google Fonts request to clients.
- **Weights we use:** 400 Regular, 500 Medium, 600 SemiBold, 700 Bold. Variable axis from 200 to 900 is available but we do not use extremes.

Mona Sans has a space in its style names (e.g. `Semi Bold`, not `SemiBold`). Respect that when referencing it in code or CSS.

---

## 2. Fallback stack

If Mona Sans fails to load (slow network, unsupported context, legal document exports):

```css
font-family:
  "Mona Sans",
  Inter,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif;
```

**Inter** is the first fallback because its metrics are very close to Mona Sans — the layout will not reflow meaningfully if Mona Sans fails.

---

## 3. Type scale

Our scale is the standard 1.25 "major third" modular scale, tuned for legibility on dark backgrounds. All sizes are in `rem` based on a 16px root.

| Name | Size (rem / px) | Weight | Tracking | Line height | Use for |
|---|---|---|---|---|---|
| Display | 4.00 rem / 64 px | 700 Bold | -1.5% | 1.05 | Hero headlines, landing page only |
| H1 | 3.00 rem / 48 px | 600 SemiBold | -1% | 1.1 | Page titles |
| H2 | 2.25 rem / 36 px | 600 SemiBold | -0.5% | 1.15 | Section titles |
| H3 | 1.75 rem / 28 px | 600 SemiBold | 0% | 1.2 | Sub-sections, card titles |
| H4 | 1.375 rem / 22 px | 500 Medium | 0% | 1.3 | Minor headings |
| Body Lg | 1.125 rem / 18 px | 400 Regular | 0% | 1.6 | Marketing body, long reads |
| Body | 1.00 rem / 16 px | 400 Regular | 0% | 1.6 | Product UI, default body |
| Body Sm | 0.875 rem / 14 px | 400 Regular | 0% | 1.5 | Secondary copy, metadata |
| Caption | 0.75 rem / 12 px | 500 Medium | +2% | 1.4 | Labels, badges, overline |

**Rules:**
- **Never go below 14 px** for body text on screen, or 9 pt in print.
- **Never ALL CAPS** for headlines. Caps are reserved for very small labels (the 12 px Caption style) and even there, sparingly.
- **Tracking.** Mona Sans needs slightly negative tracking at display sizes to read cleanly. Never positive-track a headline unless you are going for a decorative caption.
- **Line height.** 1.6 is the default. Do not squeeze body copy below 1.5 to "save space" — it makes the product feel cheap.

---

## 4. Typography by medium

### Web and product
- Self-hosted Mona Sans via `@font-face`.
- Variable font file preferred for weight flexibility.
- Subset to Latin + Latin Extended for initial load; lazy-load other subsets only if needed.
- Use `font-display: swap` so content is never blocked.

### Print
- Mona Sans .otf for print workflows.
- Minimum body size: 9 pt (11 pt preferred).
- Minimum headline size: 18 pt (24 pt preferred).
- Black ink on off-white (`#F8F7F3`) stock where possible, rather than pure white.

### Social
- Square format (Instagram, LinkedIn): 72 px headline, 32 px body.
- Story and Reel format (9:16): 96 px headline, 40 px body.
- Avoid long paragraphs on social. Use our copy like a headline in a newspaper: short, confident, one idea per slide.
- Centre-align *only* on standalone quote cards. Default alignment elsewhere is left.

### Email
- Use Mona Sans via web font in the `<head>` with fallback to Inter, Segoe UI, Arial.
- Default body: 16 px, line height 1.6, maximum width 600 px.
- Do not rely on custom fonts for critical information — some email clients strip them. Assume the fallback.

---

## 5. Special cases

- **Code blocks** (documentation, help articles) — use `JetBrains Mono 400` or system monospace fallback. Never use a serif.
- **Mathematical or quoted text** — treat as body copy; do not switch to a serif.
- **Student essays inside the product** — render in a 1.125 rem body-like face (Mona Sans Regular) with an indent, so they feel different from platform chrome without being an on-screen manuscript. Never render student writing in a decorative font.
- **Set-text quotations** — render in Mona Sans Medium Italic, set slightly smaller, with attribution on the next line.

---

## 6. Common mistakes to avoid

- Using 400 Regular for a headline. Headlines are always 600+.
- Using 700 Bold for body copy. Body is always 400.
- Combining Mona Sans with a second typeface for "variety." We do not mix typefaces.
- Right-aligning body text.
- Justifying body text on the web (it creates ugly rivers).
- Using em dashes without hair spaces in headline display type. We use the hair-space pattern ` — `.
- Using straight quotes (`"`). Use smart quotes (`"` and `"`) everywhere.
- Capitalising every word of a headline ("The English Hub Raises Seed Round" — correct) versus sentence case in marketing body and UI chrome ("Mark my essay" — correct). Match the context.

---

## 7. A note on accessibility

Body text at 16 px on Ink meets WCAG 2.1 AAA when set in Paper `#F1F4F9`. Anything we produce for students at Body or larger is comfortably above requirements. The risks are:

1. **Thin headlines on light backgrounds.** Mona Sans Light (300) on a pale background is a contrast problem. We don't use Mona Sans Light as a rule — stick to 400 and above.
2. **Reducing body below 14 px.** Don't.
3. **Relying on colour alone** for meaning (e.g. red text without a warning icon). Always pair colour with an icon, a label, or both.
