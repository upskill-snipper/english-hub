// The contents of Jane Eyre. The novel is served a chapter to a page, so this
// page sends the chapter list and none of the text: see
// src/lib/revision/served-by-chapter.ts for why, and
// src/data/full-texts/jane-eyre.ts for the edition and how it was obtained.

import { FullTextReader } from '@/components/study/FullTextReader'
import { janeEyreText } from '@/data/full-texts/jane-eyre'
import { bookContents, withoutText } from '@/lib/revision/served-by-chapter'

export default function Page() {
  return (
    <FullTextReader
      data={withoutText(janeEyreText)}
      slug="jane-eyre"
      year="1847"
      book={{ chapters: bookContents('jane-eyre', janeEyreText) }}
    />
  )
}
