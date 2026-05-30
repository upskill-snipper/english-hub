import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles,
  PencilLine,
  ClipboardCheck,
  BadgeCheck,
  Inbox,
  Wallet,
  ShieldCheck,
  ArrowRight,
  LogIn,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

// Public "Become an Examiner / Marker" landing page.
//
// This is the discoverable front door to the already-built /marker
// workbench. Qualified examiners review AI-drafted scripts for their
// exam board(s), correct the mark and feedback, and that correction
// trains the board-specific marking model. The primary CTA links to
// /marker, which gates access via GET /api/marker/me and routes a
// signed-out user through login, then shows the apply / board-picker
// flow for non-markers.
//
// Copy is plain inline English (this page has no Arabic requirement
// yet and uses no dictionary keys, so nothing can render as the
// "[[key]]" missing-string sentinel). Styling mirrors the existing
// marketing pages (e.g. /teachers, /about): max-w containers, serif
// headings, GlassPanel-free Card grid, primary/teal accents.
//
// PAYMENT MODEL (must stay accurate): project-based, agreed
// individually with each examiner up front. No fixed per-script or
// hourly rate is quoted anywhere on this page.

const OG =
  '/api/og?title=Become+an+examiner+with+The+English+Hub&subtitle=Mark+English+scripts+for+your+exam+board'

export const metadata: Metadata = {
  title: 'Become an Examiner & Marker | The English Hub',
  description:
    'Qualified English examiners: review AI-drafted scripts for your exam board, correct the mark and feedback, and get paid on project terms agreed up front. Apply per board.',
  alternates: { canonical: 'https://theenglishhub.app/examiners' },
  keywords: [
    'English examiner jobs',
    'GCSE English marker',
    'IGCSE English examiner',
    'IELTS examiner marking',
    'remote English marking work',
  ],
  openGraph: {
    title: 'Become an Examiner & Marker | The English Hub',
    description:
      'Review AI-drafted English scripts for your exam board, correct the mark and feedback, and get paid on project terms agreed up front.',
    url: 'https://theenglishhub.app/examiners',
    images: [{ url: OG, width: 1200, height: 630, alt: 'Become an examiner with The English Hub' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

// Friendly board names shown on the page. These mirror the boards the
// /marker apply flow accepts (AQA, EDEXCEL, OCR, EDUQAS,
// EDEXCEL_IGCSE, CAMBRIDGE_0500, CAMBRIDGE_0990, IELTS, KS3, EAL).
const BOARDS: { name: string; note: string }[] = [
  { name: 'AQA', note: 'GCSE English Language & Literature' },
  { name: 'Edexcel', note: 'GCSE English Language & Literature' },
  { name: 'OCR', note: 'GCSE English Language & Literature' },
  { name: 'Eduqas', note: 'GCSE English Language & Literature' },
  { name: 'Cambridge IGCSE 0500', note: 'First Language English' },
  { name: 'Cambridge IGCSE 0990', note: 'First Language English (9–1)' },
  { name: 'Edexcel IGCSE', note: 'International GCSE English' },
  { name: 'IELTS', note: 'Academic Writing & Speaking' },
  { name: 'KS3', note: 'Key Stage 3 English' },
  { name: 'EAL', note: 'English as an Additional Language' },
]

const STEPS: { icon: typeof LogIn; title: string; body: string }[] = [
  {
    icon: LogIn,
    title: '1. Sign up or log in',
    body: 'Create an account or sign in. The marking console routes you through login automatically if you are not signed in.',
  },
  {
    icon: ClipboardCheck,
    title: '2. Apply for your board(s)',
    body: 'Select the exam board(s) you are qualified for and tell us about your marking experience and credentials.',
  },
  {
    icon: BadgeCheck,
    title: '3. Get approved per board',
    body: 'We review and approve you for each board individually. Approval for one board does not require you to take on any other.',
  },
  {
    icon: Inbox,
    title: '4. Mark scripts in your queue',
    body: 'Work through your scoped queue: read the student answer, check the AI-drafted mark and feedback, and correct anything that needs it.',
  },
  {
    icon: Wallet,
    title: '5. Get paid on agreed terms',
    body: 'You are paid for the quota and services agreed with you up front for each project. Once approved you can mark as much as you like.',
  },
]

const HOW_IT_WORKS: { icon: typeof PencilLine; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: 'You start from an AI draft',
    body: 'Each script arrives with an AI-drafted mark, an assessment-objective breakdown, and feedback already prepared. You are reviewing, not marking from a blank page.',
  },
  {
    icon: PencilLine,
    title: 'You correct what matters',
    body: 'Adjust the final mark, the per-objective marks, and the feedback so they reflect a qualified examiner’s judgement for your board.',
  },
  {
    icon: ShieldCheck,
    title: 'Your corrections train the model',
    body: 'Where you change the draft, you note why. That signal trains the board-specific marking model — your expertise makes every future draft sharper.',
  },
]

export default function ExaminersPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Examiners', url: 'https://theenglishhub.app/examiners' },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-clay-500/[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Examiners &amp; Markers
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Mark English scripts for the board you know best
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Qualified examiners review AI-drafted scripts, correct the mark and feedback, and shape
            a board-specific marking model with their expertise. Apply for the boards you are
            qualified for and mark from anywhere.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/marker" />}>
              <PencilLine className="mr-1.5 h-4 w-4" />
              Apply to mark
            </Button>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See how it works
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Not signed in? The marking console will take you through login first, then straight to
            the application.
          </p>
        </div>
      </section>

      {/* 2. The role / how it works */}
      <section
        id="how-it-works"
        aria-labelledby="role-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">The role</p>
          <h2
            id="role-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Review, correct, improve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            You are an experienced examiner doing what you do best — applying the mark scheme — with
            an AI draft taking care of the first pass.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-6 sm:p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Boards supported */}
      <section aria-labelledby="boards-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Boards we mark
            </p>
            <h2
              id="boards-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Apply for one board or several
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              You are approved per board, so you only ever mark for the specifications you know. We
              support:
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BOARDS.map((board) => (
              <li key={board.name}>
                <Card className="flex items-start gap-3 p-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{board.name}</p>
                    <p className="text-sm text-muted-foreground">{board.note}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Process steps */}
      <section
        aria-labelledby="process-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            From application to marking
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            How to get started
          </h2>
        </div>
        <ol className="mt-10 space-y-4">
          {STEPS.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Card className="flex items-start gap-4 p-5 sm:p-6">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Payment model */}
      <section aria-labelledby="pay-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Card className="p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Wallet className="h-6 w-6" />
              </span>
              <div>
                <h2
                  id="pay-heading"
                  className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  How payment works
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Marking is paid on a project basis. We agree the scope, quota and terms with each
                  examiner individually and up front, before you start — there is no fixed
                  per-script or hourly rate published here. Once you are approved for a board you
                  can mark as much as you like, and you are paid for the agreed quota and services
                  for that project.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section
        aria-labelledby="final-cta-heading"
        className="border-t border-border/60 bg-background"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h2
              id="final-cta-heading"
              className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Ready to mark with us?
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Head to the marking console to apply for your board(s) and start reviewing scripts.
            </p>
          </div>
          <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/marker" />}>
            Go to the marking console
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
