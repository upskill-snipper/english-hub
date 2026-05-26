'use client'

/**
 * Client-safe twin of AIContentLabel (which is an async server
 * component using next/headers, so it cannot be rendered inside the
 * site's interactive 'use client' AI surfaces).
 *
 * Renders the SAME wording, the SAME ai_label.* dictionary keys, and
 * links to the SAME /legal/ai-governance page - so the on-product
 * disclosure stays matched to the AI-governance policy. It just
 * resolves strings via the client useT() hook instead of headers().
 *
 * Use the `panel` variant directly above any client-rendered AI
 * output (essay feedback, marking results, AI-generated revision
 * material). This closes the gap the /legal/ai-governance page itself
 * admits: "AI-generated content is not consistently labelled
 * in-product."
 */

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

type Variant = 'panel' | 'inline' | 'footer'

export function AiGeneratedNotice({
  variant = 'panel',
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const t = useT()
  const short = t('ai_label.short')
  const linkLabel = t('ai_label.link')
  const panelTitle = t('ai_label.panel_title')
  const panelBody = t('ai_label.panel_body')

  if (variant === 'inline') {
    return (
      <span
        className={
          'inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground ' +
          (className ?? '')
        }
        title={panelBody}
      >
        <span aria-hidden>✨</span>
        <span>{short}</span>
      </span>
    )
  }

  if (variant === 'footer') {
    return (
      <p className={'text-[11px] tracking-wide text-muted-foreground/80 ' + (className ?? '')}>
        {short} ·{' '}
        <Link
          href="/legal/ai-governance"
          className="underline underline-offset-2 hover:text-foreground"
        >
          {linkLabel}
        </Link>
      </p>
    )
  }

  return (
    <aside
      role="note"
      aria-label={panelTitle}
      className={
        'not-prose rounded-xl border border-primary/30 bg-primary/[0.04] p-4 my-4 text-sm ' +
        (className ?? '')
      }
    >
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
        {panelTitle}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        {panelBody}{' '}
        <Link
          href="/legal/ai-governance"
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          {linkLabel}
        </Link>
      </p>
    </aside>
  )
}
