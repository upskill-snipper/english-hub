'use client'

// The complete text of La Belle Dame sans Merci. See
// src/data/full-texts/la-belle-dame-sans-merci.ts for the edition and why it is
// a biography: no Keats edition on Project Gutenberg contains this poem, and
// Colvin prints the 1819 text deliberately unaltered. The analysis panels are
// empty because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { laBelleDameSansMerciText } from '@/data/full-texts/la-belle-dame-sans-merci'

export default function Page() {
  return (
    <FullTextReader data={laBelleDameSansMerciText} slug="la-belle-dame-sans-merci" year="1819" />
  )
}
