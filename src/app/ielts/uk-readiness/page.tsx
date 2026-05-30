import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  FileText,
  GraduationCap,
  Languages,
  Plane,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

// ─── UK Readiness Programme - overview / landing (Server Component) ──────────
// A single coherent overview that ties the four-domain UK Readiness programme
// together and links to each existing tool plus the Readiness Report itself.
// The two domains with no dedicated guided tool (English readiness and
// Application readiness) get concise self-authored guidance here — what "ready"
// looks like, the common gaps, and the next step. The visa and transition
// domains are NOT duplicated; we summarise and link out to their tools.
//
// Server Component so the copy renders statically for SEO. Exactly one <h1>.
// Title + canonical live in layout.tsx. Inline English copy (allowed).
// ────────────────────────────────────────────────────────────────────────────

interface DomainGuide {
  ready: string[]
  gaps: string[]
  next: string
}

interface Domain {
  key: string
  step: number
  icon: typeof Languages
  accent: string
  bg: string
  title: string
  summary: string
  href: string
  cta: string
  /** Present only for the two self-authored guidance domains. */
  guide?: DomainGuide
}

const DOMAINS: Domain[] = [
  {
    key: 'english',
    step: 1,
    icon: Languages,
    accent: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500/10',
    title: 'English readiness',
    summary:
      'Can your English meet the band your course and visa require — across all four skills, not just on average?',
    href: '/ielts/diagnostic',
    cta: 'Take the diagnostic',
    guide: {
      ready: [
        'You hit (or exceed) the overall band your offer asks for, AND no single skill falls below the per-skill minimum the university or UKVI sets.',
        'Your bands are consistent across attempts, not a lucky one-off — Writing and Speaking are usually the deciding skills.',
        'You can handle the test format under time pressure, not just the language in isolation.',
      ],
      gaps: [
        'A strong average that hides one weak skill (often Writing) below the required floor.',
        'Relying on a score that is close but not yet repeatable.',
        'Practising language without practising the exam conditions and timing.',
      ],
      next: 'Start with the diagnostic to see your current band per skill, then use the targeted practice and AI feedback in Writing and Speaking to close the weakest gap first.',
    },
  },
  {
    key: 'application',
    step: 2,
    icon: FileText,
    accent: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Application readiness',
    summary:
      'Is your UCAS application — personal statement, references and choices — strong enough to convert offers?',
    href: '/ielts/admissions/personal-statement',
    cta: 'Open the UCAS coach',
    guide: {
      ready: [
        'Your personal statement leads with a specific, evidenced motivation for the subject, not generic enthusiasm.',
        'Every claim is backed by something concrete — a project, a book, work experience, a result.',
        'Your course and university choices are realistic against your predicted/achieved grades, with a sensible spread.',
        'Deadlines, references and supporting documents are tracked and submitted on time.',
      ],
      gaps: [
        'A statement full of clichés ("I have always been passionate…") with no evidence.',
        'Writing about the country or city rather than the course and your fit for it.',
        'All five choices clustered at the same competitiveness, leaving no safety net.',
        'Leaving the statement to the last minute, so there is no time to redraft.',
      ],
      next: 'Use the UCAS personal-statement coach to structure and sharpen your statement, then sense-check your five choices against your predicted grades.',
    },
  },
  {
    key: 'visa',
    step: 3,
    icon: Plane,
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Visa & finance readiness',
    summary:
      'Can you actually apply for the Student visa — maintenance funds, the 28-day rule, CAS, TB test and ATAS?',
    href: '/ielts/readiness/visa-finance',
    cta: 'Open the checklist',
  },
  {
    key: 'transition',
    step: 4,
    icon: Compass,
    accent: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Academic transition readiness',
    summary:
      'Are you ready for how UK study actually works — academic writing, lectures, independent study, budgeting and living away?',
    href: '/ielts/readiness/transition',
    cta: 'Start the modules',
  },
]

export default function UkReadinessOverviewPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'UK Readiness', url: 'https://theenglishhub.app/ielts/uk-readiness' },
        ]}
      />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/ielts"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to IELTS
          </Link>
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <GraduationCap
                className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                aria-hidden
              />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-clay-500">
                IELTS plan · UK Readiness programme
              </p>
              <h1 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Your route to studying in the UK, in four parts
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Getting to a UK university is more than an IELTS score. This programme breaks
                readiness into four domains — your English, your application, your visa &amp;
                finance, and the move itself — and gives you a tool for each. Work through them in
                order, then pull everything together into one Readiness Report.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6">
        {/* ── The four domains ─────────────────────────────────────────── */}
        <section aria-labelledby="domains-heading" className="space-y-5">
          <h2 id="domains-heading" className="sr-only">
            The four readiness domains
          </h2>
          {DOMAINS.map((d) => (
            <DomainSection key={d.key} domain={d} />
          ))}
        </section>

        {/* ── The Report (ties it together) ────────────────────────────── */}
        <section
          aria-labelledby="report-heading"
          className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6 sm:p-8"
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                Pull it together
              </p>
              <h2
                id="report-heading"
                className="mt-1 font-serif text-xl font-semibold tracking-tight text-foreground"
              >
                Your UK Candidate Readiness Report
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                The report rolls all four domains into one traffic-light view, flags the red flags
                that could stop you, and gives you a 7/30/60-day action plan you can export to PDF.
                Each tool above feeds straight into it.
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0 gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
              render={<Link href="/ielts/readiness" />}
            >
              Build my report
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* ── Cross-link to model answers ──────────────────────────────── */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10">
                <BookOpenCheck className="h-5 w-5 text-sky-600 dark:text-sky-400" aria-hidden />
              </span>
              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Want to see what each band looks like?
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Compare band-6.5 and band-8 model answers for Writing and Speaking, with notes on
                  what lifts each one up the scale.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="shrink-0 gap-2"
              render={<Link href="/ielts/model-answers" />}
            >
              View model answers
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── One readiness domain ───────────────────────────────────────────────────

function DomainSection({ domain }: { domain: Domain }) {
  const Icon = domain.icon
  return (
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
      <div className="flex flex-col gap-4 border-b border-border/60 p-5 sm:flex-row sm:items-center sm:p-6">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${domain.bg}`}
        >
          <Icon className={`h-5 w-5 ${domain.accent}`} aria-hidden />
        </span>
        <div className="flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Step {domain.step} of 4
          </p>
          <h3 className="mt-0.5 font-serif text-lg font-semibold text-foreground">
            {domain.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {domain.summary}
          </p>
        </div>
        <Button
          variant="outline"
          className={`shrink-0 gap-2 ${domain.accent}`}
          render={<Link href={domain.href} />}
        >
          {domain.cta}
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>

      {domain.guide ? (
        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              What &quot;ready&quot; looks like
            </p>
            <ul className="mt-2 space-y-1.5">
              {domain.guide.ready.map((line, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
              <Target className="h-4 w-4" />
              Common gaps
            </p>
            <ul className="mt-2 space-y-1.5">
              {domain.guide.gaps.map((line, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-500/70" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="rounded-lg border border-border/60 bg-background/50 p-3 text-xs leading-relaxed text-muted-foreground sm:col-span-2">
            <span className="font-semibold text-foreground">Your next step: </span>
            {domain.guide.next}
          </p>
        </div>
      ) : (
        <div className="p-5 sm:p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            This domain has its own guided tool — open it above to work through the checks step by
            step. Your progress there feeds straight into your Readiness Report.
          </p>
        </div>
      )}
    </article>
  )
}
