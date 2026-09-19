'use client'

// The complete text of Remember. See src/data/full-texts/remember.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { rememberText } from '@/data/full-texts/remember'

export default function Page() {
  return <FullTextReader data={rememberText} slug="remember" year="1862" />
}
