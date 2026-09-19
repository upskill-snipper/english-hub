'use client'

// The complete text of The War of the Worlds. See src/data/full-texts/the-war-of-the-worlds.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theWarOfTheWorldsText } from '@/data/full-texts/the-war-of-the-worlds'

export default function Page() {
  return <FullTextReader data={theWarOfTheWorldsText} slug="the-war-of-the-worlds" year="1898" />
}
