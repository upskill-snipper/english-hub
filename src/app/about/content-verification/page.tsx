import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ShieldCheck,
  FileSearch,
  PenTool,
  BookOpen,
  AlertTriangle,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Mail,
  RefreshCw,
} from 'lucide-react'
import { COMPANY } from '@/config/company'
import { t } from '@/lib/i18n/t'

// Last-reviewed date is rendered visibly so visitors can see how recent
// the methodology is. Update whenever a substantive review pass happens.
const LAST_REVIEWED = '2026-05-15'

export const metadata: Metadata = {
  title: 'Content Verification Methodology',
  description:
    'How The English Hub checks content accuracy, manages AI-assisted feedback, reviews quotations and maintains trusted English learning resources.',
  alternates: { canonical: `${COMPANY.websiteUrl}/about/content-verification` },
  openGraph: {
    title: 'Content Verification Methodology | The English Hub',
    description:
      'How The English Hub checks content accuracy, manages AI-assisted feedback, reviews quotations and maintains trusted English learning resources.',
    type: 'article',
  },
}

// i18n keys resolved at render via t(). Tone values are not user-facing.
const PRINCIPLE_KEYS = [
  { titleKey: 'about.cv.principle.accuracy.title', descKey: 'about.cv.principle.accuracy.desc' },
  { titleKey: 'about.cv.principle.original.title', descKey: 'about.cv.principle.original.desc' },
  { titleKey: 'about.cv.principle.human.title', descKey: 'about.cv.principle.human.desc' },
  {
    titleKey: 'about.cv.principle.transparent.title',
    descKey: 'about.cv.principle.transparent.desc',
  },
  { titleKey: 'about.cv.principle.copyright.title', descKey: 'about.cv.principle.copyright.desc' },
  {
    titleKey: 'about.cv.principle.continuous.title',
    descKey: 'about.cv.principle.continuous.desc',
  },
]

const REVIEW_CATEGORY_KEYS = [
  { labelKey: 'about.cv.cat.draft.label', tone: 'neutral', descKey: 'about.cv.cat.draft.desc' },
  {
    labelKey: 'about.cv.cat.ai_draft.label',
    tone: 'neutral',
    descKey: 'about.cv.cat.ai_draft.desc',
  },
  { labelKey: 'about.cv.cat.human.label', tone: 'good', descKey: 'about.cv.cat.human.desc' },
  { labelKey: 'about.cv.cat.quote.label', tone: 'good', descKey: 'about.cv.cat.quote.desc' },
  { labelKey: 'about.cv.cat.board.label', tone: 'good', descKey: 'about.cv.cat.board.desc' },
  { labelKey: 'about.cv.cat.updated.label', tone: 'good', descKey: 'about.cv.cat.updated.desc' },
  { labelKey: 'about.cv.cat.archived.label', tone: 'muted', descKey: 'about.cv.cat.archived.desc' },
] as const

const WORKFLOW_STEP_KEYS = [
  { n: 1, titleKey: 'about.cv.step.1.title', descKey: 'about.cv.step.1.desc' },
  { n: 2, titleKey: 'about.cv.step.2.title', descKey: 'about.cv.step.2.desc' },
  { n: 3, titleKey: 'about.cv.step.3.title', descKey: 'about.cv.step.3.desc' },
  { n: 4, titleKey: 'about.cv.step.4.title', descKey: 'about.cv.step.4.desc' },
  { n: 5, titleKey: 'about.cv.step.5.title', descKey: 'about.cv.step.5.desc' },
  { n: 6, titleKey: 'about.cv.step.6.title', descKey: 'about.cv.step.6.desc' },
]

const toneClass: Record<'good' | 'neutral' | 'muted', string> = {
  good: 'border-emerald-500/30 bg-emerald-500/[0.06] text-teal-700',
  neutral: 'border-border/60 bg-card/40 text-foreground',
  muted: 'border-border/40 bg-muted/30 text-muted-foreground',
}

export default async function ContentVerificationMethodologyPage() {
  // Resolve the keyed copy arrays up-front (rendered inside sync .map()s).
  const principles = await Promise.all(
    PRINCIPLE_KEYS.map(async (p) => ({ title: await t(p.titleKey), desc: await t(p.descKey) })),
  )
  const reviewCategories = await Promise.all(
    REVIEW_CATEGORY_KEYS.map(async (c) => ({
      label: await t(c.labelKey),
      tone: c.tone,
      desc: await t(c.descKey),
    })),
  )
  const workflowSteps = await Promise.all(
    WORKFLOW_STEP_KEYS.map(async (s) => ({
      n: s.n,
      title: await t(s.titleKey),
      desc: await t(s.descKey),
    })),
  )
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: COMPANY.websiteUrl },
          { name: 'About', url: `${COMPANY.websiteUrl}/about` },
          {
            name: 'Content Verification Methodology',
            url: `${COMPANY.websiteUrl}/about/content-verification`,
          },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/[0.06] text-teal-700 text-xs font-semibold mb-5 gap-1.5 px-3 py-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {await t('about.cv.badge')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {await t('about.cv.h1')}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {await t('about.cv.intro')}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {await t('about.cv.last_reviewed')} {LAST_REVIEWED}
          </p>
        </div>
      </section>

      {/* ── A. Why verification matters ─────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.a.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            {await t('about.cv.a.title')}
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <p>{await t('about.cv.a.p1')}</p>
            <p>{await t('about.cv.a.p2')}</p>
          </div>
        </div>
      </section>

      {/* ── B. Verification principles ────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.b.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            {await t('about.cv.b.title')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <Card key={p.title} className="p-6 border-border/40">
                <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. Review categories ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.c.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {await t('about.cv.c.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">{await t('about.cv.c.body')}</p>
          <div className="space-y-3">
            {reviewCategories.map((cat) => (
              <div
                key={cat.label}
                className={`rounded-xl border p-4 flex items-start gap-4 ${toneClass[cat.tone]}`}
              >
                <Badge variant="outline" className="font-mono text-xs px-2 py-0.5 shrink-0">
                  {cat.label}
                </Badge>
                <p className="text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. Literature verification ────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.d.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            {await t('about.cv.d.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: BookOpen,
                title: await t('about.cv.d.quotes.title'),
                desc: await t('about.cv.d.quotes.desc'),
              },
              {
                icon: AlertTriangle,
                title: await t('about.cv.d.invented.title'),
                desc: await t('about.cv.d.invented.desc'),
              },
              {
                icon: FileSearch,
                title: await t('about.cv.d.unsupported.title'),
                desc: await t('about.cv.d.unsupported.desc'),
              },
              {
                icon: PenTool,
                title: await t('about.cv.d.alternative.title'),
                desc: await t('about.cv.d.alternative.desc'),
              },
            ].map((row) => (
              <Card key={row.title} className="p-6 border-border/40">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <row.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{row.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{row.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Language and writing resources ─────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.e.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            {await t('about.cv.e.title')}
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <ul>
              <li>
                <strong>{await t('about.cv.e.examples.strong')}</strong>{' '}
                {await t('about.cv.e.examples.rest')}
              </li>
              <li>
                <strong>{await t('about.cv.e.terminology.strong')}</strong>{' '}
                {await t('about.cv.e.terminology.rest')}
              </li>
              <li>
                <strong>{await t('about.cv.e.models.strong')}</strong>{' '}
                {await t('about.cv.e.models.rest')}
              </li>
              <li>
                <strong>{await t('about.cv.e.formative.strong')}</strong>{' '}
                {await t('about.cv.e.formative.rest')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── F. Exam-board alignment ───────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.f.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            {await t('about.cv.f.title')}
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <ul>
              <li>{await t('about.cv.f.li1')}</li>
              <li>
                <strong>{await t('about.cv.f.li2.strong')}</strong> {await t('about.cv.f.li2.rest')}
              </li>
              <li>{await t('about.cv.f.li3')}</li>
              <li>{await t('about.cv.f.li4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── G. AI-generated feedback ──────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.g.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            {await t('about.cv.g.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 border-emerald-500/20 bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <h3 className="font-bold text-foreground">{await t('about.cv.g.can.title')}</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>{await t('about.cv.g.can.1')}</li>
                <li>{await t('about.cv.g.can.2')}</li>
                <li>{await t('about.cv.g.can.3')}</li>
                <li>{await t('about.cv.g.can.4')}</li>
              </ul>
            </Card>
            <Card className="p-6 border-amber-500/20 bg-amber-500/[0.04]">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold text-foreground">{await t('about.cv.g.cannot.title')}</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>{await t('about.cv.g.cannot.1')}</li>
                <li>{await t('about.cv.g.cannot.2')}</li>
                <li>{await t('about.cv.g.cannot.3')}</li>
                <li>{await t('about.cv.g.cannot.4')}</li>
              </ul>
            </Card>
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            {await t('about.cv.g.note')}
          </p>
        </div>
      </section>

      {/* ── H. Correction workflow ────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('about.cv.h.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            {await t('about.cv.h.title')}
          </h2>
          <ol className="space-y-4">
            {workflowSteps.map((s) => (
              <li
                key={s.n}
                className="flex gap-4 rounded-xl border border-border/40 bg-card/40 p-5"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── I. CTA ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mb-6">
            <RefreshCw className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
            {await t('about.cv.cta.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {await t('about.cv.cta.body')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="text-base px-8 h-12" render={<Link href="/help/report" />}>
              <ArrowRight className="w-4 h-4 mr-2" />
              {await t('about.cv.cta.report')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<a href={`mailto:${COMPANY.legalEmail}`} />}
            >
              <Mail className="w-4 h-4 mr-2" />
              {await t('about.cv.cta.email')} {COMPANY.legalEmail}
            </Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            <Link
              href="/about/verified-content"
              className="underline underline-offset-4 hover:text-foreground"
            >
              {await t('about.cv.cta.summary_link')}
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
