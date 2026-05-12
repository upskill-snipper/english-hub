/**
 * AI content label — PDPPL Remediation 6.
 *
 * Discloses AI involvement at the point of consumption. Renders a
 * small, persistent badge near the top of any page that displays
 * AI-generated content (blog posts authored by the agent pipeline,
 * AI feedback panels, model answers, vocabulary explainers).
 *
 * Three variants:
 *   inline   — bottom-of-author-byline chip (used on blog headers)
 *   panel    — boxed disclosure with explanatory text (used above
 *              AI feedback components like EssayFeedbackInline)
 *   footer   — slim site-wide footnote (used on auto-generated lists)
 *
 * The label is intentionally low-key, not alarmist — the goal is
 * informed consent, not stigma. Wording matches the /legal/ai-governance
 * page so reviewers can match the on-product disclosure to the policy.
 *
 * Localised — the `lang` prop falls back to the request's eh-lang
 * header when missing.
 */

import Link from 'next/link'
import { headers } from 'next/headers'
import { lookup, type Locale } from '@/lib/i18n/dictionary'

type Variant = 'inline' | 'panel' | 'footer'

// Strings live in the master dictionary now so they translate alongside
// the rest of the site (and the Khaleeji editor pass applies to the
// long body too). Keys: ai_label.short / ai_label.link /
// ai_label.panel_title / ai_label.panel_body.
type Lang = Locale

async function resolveLang(override?: Lang): Promise<Lang> {
  if (override) return override
  try {
    const h = await headers()
    const v = h.get('x-lang')
    return v === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export async function AIContentLabel({
  variant = 'inline',
  lang,
  className,
}: {
  variant?: Variant
  lang?: Lang
  className?: string
}) {
  const l = await resolveLang(lang)
  const short = lookup('ai_label.short', l)
  const linkLabel = lookup('ai_label.link', l)
  const panelTitle = lookup('ai_label.panel_title', l)
  const panelBody = lookup('ai_label.panel_body', l)

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

  // panel variant
  return (
    <aside
      role="note"
      aria-label={panelTitle}
      className={
        'not-prose rounded-xl border border-primary/30 bg-primary/[0.04] p-4 my-6 text-sm ' +
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
