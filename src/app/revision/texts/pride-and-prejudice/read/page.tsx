// The contents of Pride and Prejudice. The novel is served a chapter to a page, so this
// page sends the chapter list and none of the text: see
// src/lib/revision/served-by-chapter.ts for why, and
// src/data/full-texts/pride-and-prejudice.ts for the edition and how it was obtained.

import { FullTextReader } from '@/components/study/FullTextReader'
import { prideAndPrejudiceText } from '@/data/full-texts/pride-and-prejudice'
import { bookContents, withoutText } from '@/lib/revision/served-by-chapter'

export default function Page() {
  return (
    <FullTextReader
      data={withoutText(prideAndPrejudiceText)}
      slug="pride-and-prejudice"
      year="1813"
      book={{ chapters: bookContents('pride-and-prejudice', prideAndPrejudiceText) }}
    />
  )
}
