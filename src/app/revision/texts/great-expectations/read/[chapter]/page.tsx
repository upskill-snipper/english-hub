// One chapter of Great Expectations, and only that chapter: this page renders on the
// server, so the browser is sent the chapter and the book's contents, never the
// whole novel. See src/lib/revision/served-by-chapter.ts.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FullTextReader } from '@/components/study/FullTextReader'
import { greatExpectationsText } from '@/data/full-texts/great-expectations'
import {
  bookContents,
  chapterMetadata,
  chapterParams,
  oneChapter,
} from '@/lib/revision/served-by-chapter'

type Props = { params: Promise<{ chapter: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return chapterParams(greatExpectationsText)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return chapterMetadata('great-expectations', greatExpectationsText, (await params).chapter)
}

export default async function Page({ params }: Props) {
  const data = oneChapter(greatExpectationsText, (await params).chapter)
  if (!data) notFound()
  return (
    <FullTextReader
      data={data}
      slug="great-expectations"
      year="1861"
      book={{ chapters: bookContents('great-expectations', greatExpectationsText) }}
    />
  )
}
