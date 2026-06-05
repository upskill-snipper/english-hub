'use client'

import Link from 'next/link'
import { ArrowLeft, Brain } from 'lucide-react'
import LearningProfileView from '@/components/learning/LearningProfileView'
import { useT } from '@/lib/i18n/use-t'

export default function LearningProfilePage() {
  const t = useT()
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link
        href="/dashboard"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t('dash.learning.back')}
      </Link>

      <div className="mb-2 flex items-center gap-2">
        <Brain className="size-5 text-primary" />
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {t('dash.learning.eyebrow')}
        </p>
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {t('dash.learning.title')}
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t('dash.learning.intro')}</p>

      <div className="mt-8">
        <LearningProfileView variant="full" />
      </div>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {t('dash.learning.footer')}
      </p>
    </div>
  )
}
