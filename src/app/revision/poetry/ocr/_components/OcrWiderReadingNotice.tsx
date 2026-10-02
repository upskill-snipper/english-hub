import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * The notice at the top of a poem page filed under OCR whose poem OCR does
 * not set.
 *
 * THE DEFECT, found 2 October 2026. Six poem pages sat under
 * /revision/poetry/ocr/, each headed with an OCR badge and a cluster name, and
 * none of the six poems is in OCR's anthology: When I have fears that I may
 * cease to be was removed in 2022, and the other five never were in it. A
 * student told by this site that a poem was one of their fifteen would revise
 * it in place of one that is. The pages are kept, because OCR's specification
 * asks for wider reading (part (a) of the exam sets a poem the student has not
 * seen), and every one of them now says first what it is.
 */
export default function OcrWiderReadingNotice({
  children,
  clusterSlug,
  clusterTitle,
}: {
  /** What is true of this poem: which board sets it, if any. */
  children: ReactNode
  clusterSlug?: 'love-and-relationships' | 'conflict' | 'youth-and-age'
  clusterTitle?: string
}) {
  return (
    <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm">
      <p className="mb-1 font-semibold text-foreground">Wider reading: not an OCR set poem</p>
      <p className="leading-relaxed text-muted-foreground">
        {children} It is here as wider reading
        {clusterTitle ? ` for OCR’s ${clusterTitle} cluster` : ''}: OCR asks you to read beyond the
        anthology, because part (a) of the exam sets a poem you have not seen.
      </p>
      <p className="mt-2">
        <Link
          href={clusterSlug ? `/revision/poetry/ocr/${clusterSlug}` : '/revision/poetry/ocr'}
          className="font-medium text-foreground underline underline-offset-2"
        >
          {clusterTitle
            ? `The 15 poems OCR sets for ${clusterTitle}`
            : 'The 45 poems in OCR’s three clusters'}
        </Link>
      </p>
    </div>
  )
}
