'use client'

// The complete text of Silas Marner. See src/data/full-texts/silas-marner.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { silasMarnerText } from '@/data/full-texts/silas-marner'

export default function Page() {
  return <FullTextReader data={silasMarnerText} slug="silas-marner" year="1861" />
}
