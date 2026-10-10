// One chapter of Pride and Prejudice, and only that chapter: this page renders on the
// server, so the browser is sent the chapter and the book's contents, never the
// whole novel. See src/lib/revision/served-by-chapter.ts.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FullTextReader } from '@/components/study/FullTextReader'
import { prideAndPrejudiceText } from '@/data/full-texts/pride-and-prejudice'
import {
  bookContents,
  chapterMetadata,
  chapterParams,
  oneChapter,
} from '@/lib/revision/served-by-chapter'

type Props = { params: Promise<{ chapter: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return chapterParams(prideAndPrejudiceText)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return chapterMetadata('pride-and-prejudice', prideAndPrejudiceText, (await params).chapter)
}

export default async function Page({ params }: Props) {
  const data = oneChapter(prideAndPrejudiceText, (await params).chapter)
  if (!data) notFound()
  return (
    <FullTextReader
      data={data}
      slug="pride-and-prejudice"
      year="1813"
      book={{ chapters: bookContents('pride-and-prejudice', prideAndPrejudiceText) }}
    />
  )
}
