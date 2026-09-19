'use client'

// The complete text of My Last Duchess. See src/data/full-texts/my-last-duchess.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { myLastDuchessText } from '@/data/full-texts/my-last-duchess'

export default function Page() {
  return <FullTextReader data={myLastDuchessText} slug="my-last-duchess" year="1842" />
}
