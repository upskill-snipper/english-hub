import type { Metadata } from 'next'

// Until 26 September 2026 this promised "key chapters", which was what the page
// then held: eight hand-typed groups of extracts. It now prints the whole novel.
export const metadata: Metadata = {
  title: 'Read Frankenstein Online, Free',
  description:
    "Read the whole of Frankenstein by Mary Shelley online, free, in her 1831 text: Walton's letters and all 24 chapters, with study notes on key lines.",
  alternates: { canonical: '/revision/texts/frankenstein/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
