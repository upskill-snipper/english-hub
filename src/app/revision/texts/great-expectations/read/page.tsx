// The contents of Great Expectations. The novel is served a chapter to a page, so this
// page sends the chapter list and none of the text: see
// src/lib/revision/served-by-chapter.ts for why, and
// src/data/full-texts/great-expectations.ts for the edition and how it was obtained.

import { FullTextReader } from '@/components/study/FullTextReader'
import { greatExpectationsText } from '@/data/full-texts/great-expectations'
import { bookContents, withoutText } from '@/lib/revision/served-by-chapter'

export default function Page() {
  return (
    <FullTextReader
      data={withoutText(greatExpectationsText)}
      slug="great-expectations"
      year="1861"
      book={{ chapters: bookContents('great-expectations', greatExpectationsText) }}
    />
  )
}
