import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read La Belle Dame sans Merci Online, Free',
  // Eight language notes until 2 October 2026. One analysed the dash before
  // "a faery's child", which the anthology prints and this reader's text
  // (Colvin's) does not, so scripts/generate-text-annotations.mjs now leaves
  // it out. la-belle-dame-reader-notes-quote-the-held-text.test.ts holds this
  // count to the notes.
  description:
    'Read La Belle Dame sans Merci by John Keats in full, free. The complete public-domain poem with seven inline language notes and a context note.',
  alternates: { canonical: '/revision/texts/la-belle-dame-sans-merci/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
