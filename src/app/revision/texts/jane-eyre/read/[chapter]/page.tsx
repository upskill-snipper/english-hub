// One chapter of Jane Eyre, and only that chapter: this page renders on the
// server, so the browser is sent the chapter and the book's contents, never the
// whole novel. See src/lib/revision/served-by-chapter.ts.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FullTextReader } from '@/components/study/FullTextReader'
import { janeEyreText } from '@/data/full-texts/jane-eyre'
import {
  bookContents,
  chapterMetadata,
  chapterParams,
  oneChapter,
} from '@/lib/revision/served-by-chapter'

type Props = { params: Promise<{ chapter: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return chapterParams(janeEyreText)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return chapterMetadata('jane-eyre', janeEyreText, (await params).chapter)
}

export default async function Page({ params }: Props) {
  const data = oneChapter(janeEyreText, (await params).chapter)
  if (!data) notFound()
  return (
    <FullTextReader
      data={data}
      slug="jane-eyre"
      year="1847"
      book={{ chapters: bookContents('jane-eyre', janeEyreText) }}
    />
  )
}
