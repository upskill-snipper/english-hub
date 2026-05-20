# WhatsApp shareables — sales collateral

Five markdown files designed to be exported to PDF and shared on WhatsApp during and after the Qatar Education Leadership Expo and beyond. Each is **A4 portrait**, **4–8 pages**, **scannable on a phone screen**, with a strong **first-page thumbnail** (because WhatsApp shows the first page as the document preview).

## The five files

| # | File | When to send it |
|---|---|---|
| 01 | **`01-solutions-benefits-value.md`** | First-touch document. Send to any school decision-maker you've just spoken to. Sets up everything else. |
| 02 | **`02-pricing-pilot.md`** | Send after they've signalled interest. Founding-Schools cohort + the three pilot scopes + how to commit. |
| 03 | **`03-getting-started.md`** | Send to schools that are leaning toward "yes" but worried about implementation effort. Removes the friction objection. |
| 04 | **`04-feature-showcase.md`** | Visual. Send to anyone who wants to "see what it actually looks like" before committing. |
| 05 | **`05-roi-calculator-illustrative.md`** | Send to the Finance Director / Bursar / Business Manager who'll need to defend the spend internally. |

## How to export each to PDF

Pick whichever you find fastest. All produce A4 PDFs.

### Option A — VS Code Markdown PDF extension (recommended, free, 2 minutes)

1. Install the extension **"Markdown PDF"** by yzane
2. Open the .md file
3. Right-click → **Markdown PDF: Export (pdf)**
4. The PDF appears in the same folder

### Option B — Pandoc (CLI, if you have it)

```bash
pandoc 01-solutions-benefits-value.md \
  --pdf-engine=wkhtmltopdf \
  --css print.css \
  -V geometry:a4paper \
  -V geometry:margin=15mm \
  -o 01-solutions-benefits-value.pdf
```

### Option C — Browser print (zero install, works everywhere)

1. Open the .md file in any markdown previewer (GitHub web, VS Code preview, etc.)
2. Browser **File → Print → Save as PDF**
3. Layout: A4, Portrait, Margins: Default

### Option D — Online (if you're on a phone in Doha)

- https://md-to-pdf.fly.dev/ — paste markdown, click "Download PDF"
- https://www.markdowntopdf.com/ — upload .md, download .pdf

## Where to insert screenshots

The feature-showcase PDF (`04-feature-showcase.md`) has `[SCREENSHOT: ...]` placeholders. **Before exporting to PDF**, take real screenshots from the live site at the URLs noted, drop them into `screenshots/`, and replace the placeholders with markdown image syntax:

```markdown
![Student dashboard showing essay submitted](./screenshots/01-student-dashboard.png)
```

The `screenshots/README.md` file lists every screenshot needed, the URL to take it from, and recommended dimensions for phone-readable quality.

## File-size targets for WhatsApp

| Constraint | Reality | Target |
|---|---|---|
| WhatsApp document hard limit | 100 MB | — |
| Practical limit before slow share | ~10 MB | — |
| Ideal for one-tap fast share | < 5 MB | **target this** |

Markdown-to-PDF exports without images typically come out 100–500 KB. With screenshots compressed to ~150 KB each, the feature-showcase PDF should land at 1–3 MB.

If a PDF comes out above 5 MB, the usual culprit is uncompressed PNG screenshots — re-export them as JPEG at quality 80 or run them through https://tinypng.com first.

## Naming convention for WhatsApp

When you save each PDF, use these filenames so the recipient sees a clean professional name in the WhatsApp file list:

| Markdown | PDF filename |
|---|---|
| 01-solutions-benefits-value.md | `The English Hub — Solutions & Value.pdf` |
| 02-pricing-pilot.md | `The English Hub — Pricing & Pilot.pdf` |
| 03-getting-started.md | `The English Hub — Getting Started.pdf` |
| 04-feature-showcase.md | `The English Hub — Feature Showcase.pdf` |
| 05-roi-calculator-illustrative.md | `The English Hub — Illustrative ROI.pdf` |

## Hard guardrails baked in to every file

Every one of these files enforces:
- ❌ **No fabricated grade-improvement numbers.** We have no validated outcome study. Where the conversation invites a number, the documents say so explicitly and explain what we'd need to do to publish one.
- ❌ **No fabricated time-saved numbers.** The illustrative ROI shows the working in full so the reader can swap their own assumptions in.
- ❌ **No invented testimonials.**
- ❌ **No exam-board endorsement claims.**
- ❌ **No "trusted by X schools" claims.**
- ✅ **Founder-led, launch-stage, transparent.**
- ✅ **Compliance posture is the moat** — UK GDPR + ICO Children's Code + PDPPL Article 17 live in signup as of 20 May 2026.

If a future PDF version drifts from these guardrails, the trust we're trying to build evaporates. Hold the line.
