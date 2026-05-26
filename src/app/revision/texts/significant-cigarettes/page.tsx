import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'significant-cigarettes'

export const metadata: Metadata = {
  title: 'Significant Cigarettes - Rose Tremain',
  description:
    'Study guide stub for Significant Cigarettes by Rose Tremain. Pearson Edexcel International GCSE English Language A (4EA1) Section C prose anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return (
    <>
      <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-50/60 p-4 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-5 shrink-0 text-amber-700 dark:text-clay-600 mt-0.5" />
          <div className="text-body-sm text-foreground leading-relaxed">
            <p className="font-semibold">Page rebuilt April 2026</p>
            <p className="mt-1 text-muted-foreground">
              Direct quotations from Rose Tremain&apos;s <em>The Road Home</em> have been withheld
              pending verified primary-source review. Tremain&apos;s text is in copyright (Vintage /
              Penguin Random House) and outside the public domain; students should always cite from
              the licensed Edexcel anthology (ISBN 978-1-446-93108-0) in exam answers.
            </p>
          </div>
        </div>
      </div>
      <StubStudyGuide text={text} />
    </>
  )
}
