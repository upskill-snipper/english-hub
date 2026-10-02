'use client'

// The complete text of The Great Gatsby. See src/data/full-texts/the-great-gatsby.ts
// for the edition and how it was obtained; the analysis panels are deliberately
// empty because the text is sourced and the commentary is not written.
//
// The edition is the 1925 first edition, as Wikisource transcribes it, so it
// prints Fitzgerald's "orgastic" where many later printings have "orgiastic",
// and "to-morrow", "gray" and "color" as Scribner's did. Four lines of a 1921
// song in Chapter IV are left out, still in UK copyright; a note marks where.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theGreatGatsbyText } from '@/data/full-texts/the-great-gatsby'

export default function Page() {
  return <FullTextReader data={theGreatGatsbyText} slug="the-great-gatsby" year="1925" />
}
