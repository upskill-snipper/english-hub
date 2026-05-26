'use client'

/**
 * AiMarkingNotice - accurate AI-generated-result disclosure for the
 * marking results surface (EU AI Act Art 13 / Art 50; GDPR transparency).
 *
 * The generic <AiGeneratedNotice> renders the shared `ai_label.*` copy
 * "Made with AI · Reviewed by humans" - true for human-edited study
 * content, but FALSE for B2C AI marking (no human reviews the mark
 * before the student, who is often a minor, sees it). Showing that
 * claim on a predicted grade is a live misrepresentation.
 *
 * This component states the truth: the result is AI-generated, not
 * human-checked, a predicted (not official) grade, AQA-boundary-derived
 * for non-AQA boards, and it points the user at the in-product
 * RequestHumanReviewButton rendered on the same page (Art 14), plus the
 * AI-transparency policy. It deliberately does NOT reuse `ai_label.*`.
 */

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

export function AiMarkingNotice({ className }: { className?: string }) {
  const t = useT()
  const title = t('ai_marking_notice.title')
  const body = t('ai_marking_notice.body')
  const linkLabel = t('ai_marking_notice.link')

  return (
    <aside
      role="note"
      aria-label={title}
      className={
        'not-prose rounded-xl border border-amber-500/40 bg-amber-500/[0.06] p-4 my-4 text-sm ' +
        (className ?? '')
      }
    >
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-amber-700 dark:text-amber-400 mb-2">
        {title}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        {body}{' '}
        <Link
          href="/legal/ai-transparency"
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          {linkLabel}
        </Link>
      </p>
    </aside>
  )
}
