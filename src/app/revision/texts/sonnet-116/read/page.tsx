'use client'

// The complete text of Sonnet 116. See src/data/full-texts/sonnet-116.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { sonnet116Text } from '@/data/full-texts/sonnet-116'

export default function Page() {
  return <FullTextReader data={sonnet116Text} slug="sonnet-116" year="1609" />
}
