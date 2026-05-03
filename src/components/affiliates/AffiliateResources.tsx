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
  title: string
  description: string
  body: string
}

const twitterTemplates: Template[] = [
  {
    id: 'tw-thread',
    title: 'Long-form thread starter',
    description: 'Use as the first tweet of a thread. Best for explainer or story-led content.',
    body: `#ad — Here's how my GCSE English students prep with The English Hub. \u{1F9F5}

It's a UK-built revision app with AI essay marking, a structured course library, and instant feedback. Annual subscription works out under £2/month with my code {CODE}.

7-day free trial, then £20/year (saves £9.99). Annual plan only.

[link]`,
  },
  {
    id: 'tw-short',
    title: 'Short tweet',
    description: 'Single-tweet pitch. Drop into replies or your own timeline.',
    body: `If you're revising GCSE English, this is the platform I'd start with. Annual works out under £2/month with my code {CODE}. #ad [link]`,
  },
  {
    id: 'tw-reply',
    title: 'Reply hook',
    description: 'Drop into replies on revision / GCSE / parent threads.',
    body: `Quick tip — affiliate code {CODE} drops the annual plan to £20 (saves £9.99). Trial it free for 7 days first. Annual subscription only. #ad [link]`,
  },
]

const instagramTemplates: Template[] = [
  {
    id: 'ig-caption',
    title: 'Photo + caption',
    description: 'Pair with a screenshot of the AI essay marker or a study-desk flat-lay.',
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
    title: 'TikTok caption',
    description:
      'Vertical-video friendly. Pin the link in your bio and reference the code on screen.',
    body: `#ad The GCSE English revision app I wish I'd had \u{1F62D}

AI essay marking, full courses, instant feedback. 7-day free trial, then £20/year with code {CODE} (saves £9.99). Annual subscription only.

\u{1F517} Link in bio

#GCSE #GCSEEnglish #StudyTok #revision #GCSE2026 #StudyWithMe #ad`,
  },
]

const emailTemplates: Template[] = [
  {
    id: 'em-newsletter',
    title: 'Email / newsletter',
    description: 'Send to a Substack or mailing list. Subject line at the top, body underneath.',
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
    title: 'Blog post / review article',
    description: '~200 words. Paste into a WordPress, Ghost, or Substack post.',
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
  title: string
  icon: React.ElementType
  blurb: string
  templates: Template[]
}

const platformGroups: PlatformGroup[] = [
  {
    id: 'twitter',
    title: 'Twitter / X',
    icon: Twitter,
    blurb:
      'Three lengths so you can match the format you post in. #ad goes at the start, before the link.',
    templates: twitterTemplates,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    icon: Instagram,
    blurb: 'Caption built for a single photo or carousel. Push followers to your link in bio.',
    templates: instagramTemplates,
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    icon: Music2,
    blurb: 'Vertical-video friendly. Keep #ad visible on screen as well as in the caption.',
    templates: tiktokTemplates,
  },
  {
    id: 'email',
    title: 'Email / newsletter',
    icon: Mail,
    blurb: 'Subject line + body for sending to a mailing list, Substack, or parent group.',
    templates: emailTemplates,
  },
  {
    id: 'blog',
    title: 'Blog / review article',
    icon: FileText,
    blurb: 'Long-form review with a clear FTC / ASA disclosure block at the top.',
    templates: blogTemplates,
  },
]

export default function AffiliateResources({
  referralUrl,
  affiliateCode,
  affiliateName,
}: AffiliateResourcesProps) {
  const [copiedId, setCopiedId] = useState<CopiedId>(null)

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
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Affiliate Resources</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Hi {affiliateName.split(' ')[0]} — ready-to-paste scripts with your code{' '}
          <span className="font-mono font-semibold text-foreground">{affiliateCode}</span> and link
          already filled in. Pick a template, hit Copy, paste it on the platform.
        </p>

        {/* ─── Compliance reminder callout ─────────────────────────────── */}
        <div
          role="alert"
          className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 mt-0.5 text-amber-500 flex-shrink-0" />
          <div className="text-sm leading-relaxed text-foreground/90">
            <p className="font-semibold text-foreground mb-1">Compliance reminder</p>
            <p>
              You <span className="font-semibold">must</span> clearly disclose this is a paid
              promotion. The UK Advertising Standards Authority (ASA) and CAP Code require{' '}
              <span className="font-mono font-semibold">#ad</span> to appear at the start of social
              posts, before any link. Misleading omission can result in your account being
              terminated and commission withheld. For longer formats (blog, email), use the
              affiliate-disclosure block included at the top of each template.
            </p>
          </div>
        </div>

        {/* ─── Section A: Your unique link ─────────────────────────────── */}
        <section className="mb-12">
          <SectionHeading icon={LinkIcon} title="Your unique referral link" />
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                This is the link to share. Anyone who signs up within 30 days of clicking gets
                credited to you.
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
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy link
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg bg-background/60 border border-border/60 p-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  Your code
                </p>
                <p className="font-mono text-base font-semibold text-foreground">{affiliateCode}</p>
              </div>
              <div className="rounded-lg bg-background/60 border border-border/60 p-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                  Attribution window
                </p>
                <p className="text-sm text-foreground">
                  30-day cookie. Any signup within 30 days of a click on your link is credited to
                  you.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              Note: the discount applies to the Student Annual subscription only.
            </p>
          </div>
        </section>

        {/* ─── Annual-only reminder above the templates ────────────────── */}
        <div className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <p className="text-sm font-semibold text-foreground">
            Lean into the annual hook in your captions.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            You earn commission on Student Annual subscriptions only. Your code unlocks the
            &pound;20/year Student Annual rate (normally &pound;29.99). Student Monthly and Teacher
            plans aren&rsquo;t discounted by your code and don&rsquo;t earn commission &mdash; every
            template below already calls out &ldquo;annual subscription only&rdquo; so the rule is
            on the page when followers click through.
          </p>
        </div>

        {/* ─── Sections B–F: Platform templates ────────────────────────── */}
        {platformGroups.map((group) => (
          <section key={group.id} className="mb-12">
            <SectionHeading icon={group.icon} title={group.title} />
            <p className="text-muted-foreground mb-5 text-sm">{group.blurb}</p>
            <div className="space-y-4">
              {group.templates.map((tpl) => {
                const filled = fillTemplate(tpl.body, affiliateCode, referralUrl)
                return (
                  <TemplateCard
                    key={tpl.id}
                    id={tpl.id}
                    title={tpl.title}
                    description={tpl.description}
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
            That's everything you need to start posting.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Pick a template, hit copy, paste it. Your code is already in there.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button variant="outline" onClick={() => handleCopy(referralUrl, 'bottom-link')}>
              {copiedId === 'bottom-link' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copiedId === 'bottom-link' ? 'Copied' : 'Copy link'}
            </Button>
            <Button render={<Link href="/affiliates/dashboard" />}>View Dashboard</Button>
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
  body,
  copiedId,
  onCopy,
}: {
  id: string
  title: string
  description: string
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
          aria-label={isCopied ? 'Copied to clipboard' : `Copy ${title}`}
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
              Copied
            </>
          ) : (
            <>
              <span aria-hidden>{'\u{1F4CB}'}</span>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Preview line */}
      <p className="text-xs font-mono text-muted-foreground mb-3 truncate">
        Preview: <span className="text-foreground/80">{preview}</span>
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
