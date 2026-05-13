'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Copy,
  Check,
  LinkIcon,
  AlertTriangle,
  Twitter,
  Instagram,
  Music2,
  Mail,
  FileText,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

interface AffiliateResourcesProps {
  referralUrl: string
  affiliateCode: string
  affiliateName: string
}

type CopiedId = string | null

// ─── Template helpers ───────────────────────────────────────────────────────
// All templates are British English, mention "annual subscription only" where
// relevant, lead or end with #ad on social platforms (ASA + CAP Code), and
// open with an explicit affiliate-disclosure block on long-form content.
// {CODE} and [link] placeholders are replaced at render time so the affiliate
// can copy a fully-substituted string with one click.
// ────────────────────────────────────────────────────────────────────────────

function fillTemplate(raw: string, code: string, link: string): string {
  return raw.replaceAll('{CODE}', code).replaceAll('[link]', link).replaceAll('{LINK}', link)
}

interface Template {
  id: string
  /** i18n key suffix under aff_comp.resources.tpl.<id>.* */
  body: string
}

const twitterTemplates: Template[] = [
  {
    id: 'tw-thread',
    body: `#ad — Here's how my GCSE English students prep with The English Hub. \u{1F9F5}

It's a UK-built revision app with AI essay marking, a structured course library, and instant feedback. Annual subscription works out under £2/month with my code {CODE}.

7-day free trial, then £20/year (saves £9.99). Annual plan only.

[link]`,
  },
  {
    id: 'tw-short',
    body: `If you're revising GCSE English, this is the platform I'd start with. Annual works out under £2/month with my code {CODE}. #ad [link]`,
  },
  {
    id: 'tw-reply',
    body: `Quick tip — affiliate code {CODE} drops the annual plan to £20 (saves £9.99). Trial it free for 7 days first. Annual subscription only. #ad [link]`,
  },
]

const instagramTemplates: Template[] = [
  {
    id: 'ig-caption',
    body: `#ad

Revising for GCSE English without losing your mind — this is what's actually working for my students this year.

The English Hub is a UK-built revision app and I genuinely rate it:

• AI essay marker grades your work in seconds and tells you exactly what to fix
• Full GCSE English Language + Literature courses, broken into bite-sized lessons
• Practice papers with model answers, so you can see what a Grade 7+ response looks like

Free for 7 days. After that the annual plan is £20/year with my code (saves £9.99). Annual subscription only.

\u{1F517} Link in bio · code {CODE} · #ad`,
  },
]

const tiktokTemplates: Template[] = [
  {
    id: 'tt-caption',
    body: `#ad The GCSE English revision app I wish I'd had \u{1F62D}

AI essay marking, full courses, instant feedback. 7-day free trial, then £20/year with code {CODE} (saves £9.99). Annual subscription only.

\u{1F517} Link in bio

#GCSE #GCSEEnglish #StudyTok #revision #GCSE2026 #StudyWithMe #ad`,
  },
]

const emailTemplates: Template[] = [
  {
    id: 'em-newsletter',
    body: `Subject: The revision tool I've been recommending to every GCSE English parent

———

Affiliate disclosure: this email contains affiliate links. If you buy a subscription through them, I earn a small commission at no extra cost to you. I only recommend tools I'd use myself.

Hi {first_name},

Quick one this week — if you've got a child revising for GCSE English (or you're revising yourself), I want to flag a tool I've been using with my students: The English Hub.

It's a UK-built revision platform with three things going for it:

1. An AI essay marker that grades your work in seconds and gives paragraph-by-paragraph feedback. No waiting a week for your teacher to mark it.
2. Full courses for GCSE English Language and Literature, mapped to the AQA and Edexcel specs.
3. Practice papers with model answers so students can see what a Grade 7, 8 or 9 response actually looks like.

You can trial it free for 7 days. After that, the Student Annual plan is normally £29.99 — with my code {CODE} it drops to £20 for the year (saves £9.99). Annual subscription only; the discount doesn't apply to monthly.

Trial it here: [link]

Best,
[your name]`,
  },
]

const blogTemplates: Template[] = [
  {
    id: 'bg-review',
    body: `> Affiliate disclosure: this post contains affiliate links. If you sign up through them, I earn a small commission at no extra cost to you. The opinions below are my own and I only recommend tools I'd actually use. (FTC / ASA compliance.)

———

The English Hub is a UK-built revision app aimed squarely at GCSE English students and their teachers. I've spent the last few months testing it and recommending it to revision groups, and it's one of the few tools I've come across that earns its place on the shortlist.

The headline feature is the AI essay marker. You paste in a response, it grades it against the AQA / Edexcel mark scheme, and it gives paragraph-by-paragraph feedback within seconds. For students who can't get a tutor in front of them, it's the closest thing to instant, structured marking. It's paired with a full course library covering Language Paper 1 and 2 and the major Literature texts, plus a practice-paper bank with model answers so students can calibrate what a Grade 7, 8 or 9 response actually looks like.

You can trial it free for 7 days. After that, the Student Annual plan is £29.99 — with my code {CODE} it drops to £20 for the year, which saves £9.99. The discount applies to the annual subscription only; monthly is unaffected.

Try The English Hub here: [link]`,
  },
]

// Group all templates for rendering
interface PlatformGroup {
  id: string
  /** i18n key for the platform title under aff_comp.resources.platform.<id> */
  i18nKey: string
  /** i18n key for the blurb under aff_comp.resources.platform.<id>_blurb */
  blurbKey: string
  icon: React.ElementType
  templates: Template[]
}

const platformGroups: PlatformGroup[] = [
  {
    id: 'twitter',
    i18nKey: 'aff_comp.resources.platform.twitter',
    blurbKey: 'aff_comp.resources.platform.twitter_blurb',
    icon: Twitter,
    templates: twitterTemplates,
  },
  {
    id: 'instagram',
    i18nKey: 'aff_comp.resources.platform.instagram',
    blurbKey: 'aff_comp.resources.platform.instagram_blurb',
    icon: Instagram,
    templates: instagramTemplates,
  },
  {
    id: 'tiktok',
    i18nKey: 'aff_comp.resources.platform.tiktok',
    blurbKey: 'aff_comp.resources.platform.tiktok_blurb',
    icon: Music2,
    templates: tiktokTemplates,
  },
  {
    id: 'email',
    i18nKey: 'aff_comp.resources.platform.email',
    blurbKey: 'aff_comp.resources.platform.email_blurb',
    icon: Mail,
    templates: emailTemplates,
  },
  {
    id: 'blog',
    i18nKey: 'aff_comp.resources.platform.blog',
    blurbKey: 'aff_comp.resources.platform.blog_blurb',
    icon: FileText,
    templates: blogTemplates,
  },
]

export default function AffiliateResources({
  referralUrl,
  affiliateCode,
  affiliateName,
}: AffiliateResourcesProps) {
  const [copiedId, setCopiedId] = useState<CopiedId>(null)
  const t = useT()

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // clipboard unavailable (insecure context, permissions) — silently noop
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <Link
          href="/affiliates/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('aff_comp.resources.back')}
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">{t('aff_comp.resources.heading')}</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          {t('aff_comp.resources.intro_prefix')} {affiliateName.split(' ')[0]} —{' '}
          {t('aff_comp.resources.intro_body')}{' '}
          <span className="font-mono font-semibold text-foreground">{affiliateCode}</span>{' '}
          {t('aff_comp.resources.intro_suffix')}
        </p>

        {/* ─── Compliance reminder callout ─────────────────────────────── */}
        <div
          role="alert"
          className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 mt-0.5 text-amber-500 flex-shrink-0" />
          <div className="text-sm leading-relaxed text-foreground/90">
            <p className="font-semibold text-foreground mb-1">
              {t('aff_comp.resources.compliance_title')}
            </p>
            <p>
              {t('aff_comp.resources.compliance_body_part1')}{' '}
              <span className="font-semibold">{t('aff_comp.resources.compliance_body_must')}</span>{' '}
              {t('aff_comp.resources.compliance_body_part2')}{' '}
              <span className="font-mono font-semibold">#ad</span>{' '}
              {t('aff_comp.resources.compliance_body_part3')}
            </p>
          </div>
        </div>

        {/* ─── Section A: Your unique link ─────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={LinkIcon} title={t('aff_comp.resources.link_section_title')} />
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {t('aff_comp.resources.link_section_intro')}
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 bg-background rounded-lg border border-border px-4 py-3 font-mono text-sm text-foreground break-all">
                  {referralUrl}
                </div>
                <Button
                  size="lg"
                  onClick={() => handleCopy(referralUrl, 'main-link')}
                  className="sm:w-auto"
                >
                  {copiedId === 'main-link' ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t('aff_comp.copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t('aff_comp.resources.copy_link')}
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg bg-background/60 border border-border/60 p-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  {t('aff_comp.resources.your_code')}
                </p>
                <p className="font-mono text-base font-semibold text-foreground">{affiliateCode}</p>
              </div>
              <div className="rounded-lg bg-background/60 border border-border/60 p-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  {t('aff_comp.resources.attribution_window')}
                </p>
                <p className="text-sm text-foreground">
                  {t('aff_comp.resources.attribution_desc')}
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              {t('aff_comp.resources.discount_note')}
            </p>
          </div>
        </section>

        {/* ─── Annual-only reminder above the templates ────────────────── */}
        <div className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <p className="text-sm font-semibold text-foreground">
            {t('aff_comp.resources.annual_lean_title')}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('aff_comp.resources.annual_lean_body')}
          </p>
        </div>

        {/* ─── Sections B–F: Platform templates ────────────────────────── */}
        {platformGroups.map((group) => (
          <section key={group.id} className="mb-12">
            <SectionHeading icon={group.icon} title={t(group.i18nKey)} />
            <p className="text-muted-foreground mb-5 text-sm">{t(group.blurbKey)}</p>
            <div className="space-y-4">
              {group.templates.map((tpl) => {
                const filled = fillTemplate(tpl.body, affiliateCode, referralUrl)
                return (
                  <TemplateCard
                    key={tpl.id}
                    id={tpl.id}
                    title={t(`aff_comp.resources.tpl.${tpl.id}.title`)}
                    description={t(`aff_comp.resources.tpl.${tpl.id}.desc`)}
                    previewPrefix={t('aff_comp.resources.tpl.preview_prefix')}
                    copyLabel={t('aff_comp.copy')}
                    copiedLabel={t('aff_comp.copied')}
                    body={filled}
                    copiedId={copiedId}
                    onCopy={handleCopy}
                  />
                )
              })}
            </div>
          </section>
        ))}

        {/* ─── Bottom CTA ─── */}
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <p className="text-foreground font-semibold mb-1">
            {t('aff_comp.resources.bottom.headline')}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {t('aff_comp.resources.bottom.body')}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button variant="outline" onClick={() => handleCopy(referralUrl, 'bottom-link')}>
              {copiedId === 'bottom-link' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copiedId === 'bottom-link'
                ? t('aff_comp.copied')
                : t('aff_comp.resources.copy_link')}
            </Button>
            <Button render={<Link href="/affiliates/dashboard" />}>
              {t('aff_comp.resources.bottom.view_dashboard')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Sub-components ─── */

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-5 h-5 text-primary" />
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </div>
  )
}

function TemplateCard({
  id,
  title,
  description,
  previewPrefix,
  copyLabel,
  copiedLabel,
  body,
  copiedId,
  onCopy,
}: {
  id: string
  title: string
  description: string
  previewPrefix: string
  copyLabel: string
  copiedLabel: string
  body: string
  copiedId: CopiedId
  onCopy: (text: string, id: string) => void
}) {
  const isCopied = copiedId === id
  // Preview is the first ~30 chars of the BODY (after disclosure prefix if any),
  // stripped of leading punctuation/whitespace, for a quick at-a-glance summary.
  const stripped = body.replace(/^[\s>—\-]+/, '')
  const preview = stripped.length > 32 ? stripped.slice(0, 30).trim() + '…' : stripped

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        <button
          onClick={() => onCopy(body, id)}
          aria-label={isCopied ? copiedLabel : `${copyLabel} ${title}`}
          className={
            'flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ' +
            (isCopied
              ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
              : 'border-border bg-background hover:bg-accent text-foreground')
          }
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              {copiedLabel}
            </>
          ) : (
            <>
              <span aria-hidden>{'\u{1F4CB}'}</span>
              {copyLabel}
            </>
          )}
        </button>
      </div>

      {/* Preview line */}
      <p className="text-xs font-mono text-muted-foreground mb-3 truncate">
        {previewPrefix} <span className="text-foreground/80">{preview}</span>
      </p>

      {/* Full text — readonly textarea so it can be selected/copied manually too */}
      <textarea
        readOnly
        value={body}
        rows={Math.min(14, Math.max(4, body.split('\n').length + 1))}
        onFocus={(e) => e.currentTarget.select()}
        className="w-full bg-background rounded-lg border border-border px-4 py-3 text-sm text-foreground font-mono leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}
