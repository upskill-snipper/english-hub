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

type Variant = 'inline' | 'panel' | 'footer'

const COPY = {
  en: {
    short: 'Made with AI · Reviewed by humans',
    long: 'This page was drafted with the help of AI and reviewed by The English Hub editorial team. See our',
    linkLabel: 'AI Governance & Ethics',
    panelTitle: 'About this AI-assisted content',
    panelBody:
      'The English Hub uses AI to draft and update study materials. A human editor reviews every published piece against our curriculum and brand-voice rules before it ships. You can read the full disclosure, model provenance, and your rights on our AI Governance & Ethics page.',
  },
  ar: {
    short: 'صُنع بالذكاء الاصطناعي · راجعه البشر',
    long: 'تمّت صياغة هذه الصفحة بمساعدة الذكاء الاصطناعي وراجعها فريق التحرير. اطّلع على',
    linkLabel: 'حوكمة الذكاء الاصطناعي وأخلاقياته',
    panelTitle: 'حول هذا المحتوى المُعَدّ بمساعدة الذكاء الاصطناعي',
    panelBody:
      'يستخدم The English Hub الذكاء الاصطناعي في صياغة المواد الدراسية وتحديثها. يُراجع محرّر بشري كل قطعة منشورة بناءً على قواعد المنهج وصوت العلامة قبل النشر. يمكنك قراءة الإفصاح الكامل ومصدر النموذج وحقوقك على صفحة حوكمة الذكاء الاصطناعي.',
  },
} as const

type Lang = keyof typeof COPY

async function resolveLang(override?: Lang): Promise<Lang> {
  if (override) return override
  try {
    const h = await headers()
    const v = h.get('x-lang')
    return v === 'ar' ? 'ar' : 'en'
  } catch {
    // headers() throws when called outside a request scope (e.g. in
    // build-time generateMetadata on fully-static pages). Default to en.
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
  const c = COPY[l]

  if (variant === 'inline') {
    return (
      <span
        className={
          'inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground ' +
          (className ?? '')
        }
        title={c.panelBody}
      >
        <span aria-hidden>✨</span>
        <span>{c.short}</span>
      </span>
    )
  }

  if (variant === 'footer') {
    return (
      <p className={'text-[11px] tracking-wide text-muted-foreground/80 ' + (className ?? '')}>
        {c.short} ·{' '}
        <Link
          href="/legal/ai-governance"
          className="underline underline-offset-2 hover:text-foreground"
        >
          {c.linkLabel}
        </Link>
      </p>
    )
  }

  // panel variant
  return (
    <aside
      role="note"
      aria-label={c.panelTitle}
      className={
        'not-prose rounded-xl border border-primary/30 bg-primary/[0.04] p-4 my-6 text-sm ' +
        (className ?? '')
      }
    >
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
        {c.panelTitle}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        {c.panelBody}{' '}
        <Link
          href="/legal/ai-governance"
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          {c.linkLabel}
        </Link>
      </p>
    </aside>
  )
}
