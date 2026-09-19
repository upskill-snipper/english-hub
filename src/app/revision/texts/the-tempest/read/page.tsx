'use client'

// The complete text of The Tempest. See src/data/full-texts/the-tempest.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theTempestText } from '@/data/full-texts/the-tempest'

export default function Page() {
  return <FullTextReader data={theTempestText} slug="the-tempest" year="c. 1611" />
}
