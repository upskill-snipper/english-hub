import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'
import { t } from '@/lib/i18n/t'

const SLUG = 'significant-cigarettes'

export const metadata: Metadata = {
  title: 'Significant Cigarettes - Rose Tremain',
  description:
    'Study guide stub for Significant Cigarettes by Rose Tremain. Pearson Edexcel International GCSE English Language A (4EA1) Section C prose anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default async function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return (
    <>
      <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-50/60 p-4 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-5 shrink-0 text-amber-700 dark:text-clay-600 mt-0.5" />
          <div className="text-body-sm text-foreground leading-relaxed">
            <p className="font-semibold">
              {await t('rev.texts.significant-cigarettes.rebuilt_banner_title')}
            </p>
            <p className="mt-1 text-muted-foreground">
              {await t('rev.texts.significant-cigarettes.rebuilt_banner_body')}
            </p>
          </div>
        </div>
      </div>
      <StubStudyGuide text={text} />
    </>
  )
}
