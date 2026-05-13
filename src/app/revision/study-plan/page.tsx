import type { Metadata } from 'next'
import { Suspense } from 'react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'
import { StudyPlanClient } from './study-plan-client'

// Metadata title is i18n-resolved at request time so the AR variant
// surfaces correctly when middleware stamps `x-lang: ar`.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await t('study_page.title'),
  }
}

export default async function StudyPlanPage() {
  const board = await getServerBoard()
  const loadingText = await t('study_page.loading')

  return (
    <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">{loadingText}</div>}>
      <StudyPlanClient initialBoard={board} />
    </Suspense>
  )
}
