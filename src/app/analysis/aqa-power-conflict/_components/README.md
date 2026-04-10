# AQA Power and Conflict — analysis page wrapper

`AnalysisBoardGate.tsx` is a server-side wrapper that renders a
`WrongBoardBanner` above any page in this directory. The banner is a
client component and only appears after hydration, so Google crawlers
and first-time visitors (no board set) still see the full article — this
keeps the SEO value of each page — while real students on a different
board get a prominent "Wrong board?" notice and a link back to their own
revision hub.

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
- `ozymandias-vs-london/page.tsx`
- `ozymandias-vs-my-last-duchess/page.tsx`
- `how-to-write-grade-9-power-conflict-essay/page.tsx`
- `key-quotes-aqa-power-conflict-all-poems/page.tsx`
- `best-poems-to-learn-aqa-power-conflict/page.tsx`

The remaining ~20 pages in this folder should be migrated using the same
two-step process above. There is no behavioural difference between a
migrated and an unmigrated page for an AQA student — the only effect of
the migration is that students studying a different board will see a
warning banner at the top of the page before the content starts.
