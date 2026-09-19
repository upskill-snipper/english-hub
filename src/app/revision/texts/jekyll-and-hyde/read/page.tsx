'use client'

// The complete text of The Strange Case of Dr Jekyll and Mr Hyde. See src/data/full-texts/jekyll-and-hyde.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'

export default function Page() {
  return <FullTextReader data={jekyllAndHydeText} slug="jekyll-and-hyde" year="1886" />
}
