# Macbeth — analysis page wrapper

`AnalysisBoardGate.tsx` is a server-side wrapper that renders a
`WrongBoardBanner` above any page in this directory. The banner is a
client component and only appears after hydration, so Google crawlers
and first-time visitors (no board set) still see the full article — this
keeps the SEO value of each page.

Macbeth is set on AQA, Edexcel, OCR, Eduqas and Edexcel IGCSE, so only
readers on the Cambridge IGCSE language specifications (0500 and 0990)
will ever see the warning banner. Those readers still get the full
article — the content is useful for language analysis — but they are
told up-front that their board does not include Macbeth.

## How to wire up a page

Each `page.tsx` in this directory is a standalone Next.js server
component. To apply the banner:

1. Import the gate at the top of the file, below the existing imports:

   ```tsx
   import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'
   ```

2. Wrap the existing `<main>...</main>` with `<AnalysisBoardGate>...</AnalysisBoardGate>`.

Nothing else in the page should change — metadata, JSON-LD, headings and
body content all stay exactly as they are.

## Migration status

The wrapper is currently applied to these pages:

- `page.tsx` (the hub index)
- `how-to-write-a-grade-9-macbeth-essay/page.tsx`
- `ambition-theme-analysis/page.tsx`
- `guilt-theme-analysis/page.tsx`
- `macbeth-character-analysis/page.tsx`
- `lady-macbeth-character-analysis/page.tsx`

The remaining ~20 pages in this folder should be migrated using the same
two-step process above. There is no behavioural difference between a
migrated and an unmigrated page for a reader on a literature board — the
only effect of the migration is that Cambridge 0500 / 0990 students will
see a warning banner at the top of the page before the content starts.
