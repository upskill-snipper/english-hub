import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'

/* ─────────────── Page Metadata ─────────────── */

const PAGE_URL = 'https://theenglishhub.app/qatar-igcse-english'
const OG_IMAGE =
  '/api/og?title=IGCSE+English+revision+for+Qatar&subtitle=Pearson+Edexcel+and+Cambridge+covered&level=igcse'

export const metadata: Metadata = {
  title: 'IGCSE English revision for Qatar — The English Hub',
  description:
    'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'IGCSE English revision for Qatar — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'IGCSE English revision for Qatar — Pearson Edexcel and Cambridge covered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English revision for Qatar — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
    images: [OG_IMAGE],
  },
}

/* ─────────────── FAQ Content ─────────────── */
// Each answer is verified against the platform's actual product surface.
// "Yes" is only used where the feature is shipped today; otherwise we
// describe the current state honestly.

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Is The English Hub aligned to Pearson Edexcel and Cambridge?',
    answer:
      'Yes. The platform has dedicated revision paths for Pearson Edexcel International GCSE English Literature (4ET1) and English Language A (4EA1), as well as Cambridge IGCSE 0500 and the redesigned 0990 variant. Course material, model answers and AI feedback are calibrated to the published assessment objectives and mark schemes for each spec.',
  },
  {
    question: 'Can students in Qatar pay in QAR?',
    answer:
      'Subscriptions are billed in GBP through our payment processor. Most international cards issued in Qatar will work and the bank handles the QAR-to-GBP conversion at the time of purchase — the rate shown on your statement comes from your card issuer, not from us. We do not currently offer a QAR-denominated checkout.',
  },
  {
    question: 'Does the platform work on the school WiFi (filtered networks)?',
    answer:
      'The site is hosted on theenglishhub.app over HTTPS with no third-party video host or ad network, which means it usually passes through standard school content filters. If your school uses a strict allowlist, ask your IT department to whitelist theenglishhub.app and any subdomain we use for media. We can supply a written list of domains on request.',
  },
  {
    question: 'Is there a teacher-licence for British international schools?',
    answer:
      'Yes. Teachers at British international schools can register for a teacher account and request a school licence covering their department. Bulk student onboarding by spreadsheet is supported. Contact us through the for-schools page to discuss a quote — pricing is set in GBP and we can invoice schools directly.',
  },
  {
    question: 'Are revision schedules adapted for the Qatar academic calendar (Sept–June)?',
    answer:
      'The default revision pathways are built around the May–June IGCSE exam series, which is the series most Qatar-based students sit, and the academic year runs from September. You can pace any path manually, and the AI study planner lets you input your own term dates and exam dates so the schedule fits the calendar your school actually uses.',
  },
]

/* ─────────────── Page ─────────────── */

export default async function QatarIgcseEnglishPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Qatar IGCSE English', url: PAGE_URL },
        ]}
        nonce={nonce}
      />
      <FAQPageJsonLd faqs={FAQS} nonce={nonce} />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Qatar IGCSE English</span>
          </nav>

          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 px-4 py-1.5"
          >
            For students at international schools in Qatar
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            IGCSE English revision for students in Qatar
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Structured revision for the two IGCSE English specifications used in most British
            international schools in Doha — Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and
            Cambridge (0500 First Language, 0990 redesigned). Calibrated to mark schemes, paced for
            the Qatar academic year, and accessible from school WiFi.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25 font-semibold"
              render={<Link href="/board-select" />}
            >
              Get started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-border/60 font-semibold"
              render={<Link href="#specs" />}
            >
              See spec coverage
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 1 — WHICH SPECS ════════════════ */}
      <section id="specs" className="py-16 sm:py-20 border-t border-border/40 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Which IGCSE English specs are sat in Qatar?
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            Most international schools in Doha follow a British curriculum and enter their Year 11
            cohort for International GCSE English. The two boards you will see most often on
            timetables are Pearson Edexcel and Cambridge International — different awarding
            organisations with different paper structures, different anthologies, and different
            assessment objectives. Knowing which one your school enters you for matters, because
            preparing for the wrong paper wastes revision time.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <Card className="p-6 border-border/40">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  Pearson Edexcel International GCSE
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">4ET1 — Literature.</span>{' '}
                  Two-paper exam covering an anthology of poetry and prose, an unseen poetry
                  question, and your studied drama and prose texts. Edexcel publishes its own
                  anthology and a fixed list of set drama and prose options.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">4EA1 — English Language A.</span>{' '}
                  Reading and writing assessed across two papers, with an anthology of non-fiction
                  passages used as the reading stimulus. Imaginative and transactional writing both
                  appear.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-bold text-foreground">Cambridge IGCSE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    0500 — English as a First Language.
                  </span>{' '}
                  The long-running Cambridge spec: reading skills assessed through unseen
                  non-fiction passages, plus directed and composition writing. No published
                  anthology — the passages are unseen on the day.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">0990 — redesigned variant.</span>{' '}
                  Aligned to the Cambridge 9-1 grading scale used internationally. Question design
                  has been refreshed compared with 0500, and grade boundaries report on the 9-1
                  scale. Schools choose 0500 or 0990 depending on which grading scale their leavers
                  need on transcripts.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mt-6">
            If you are unsure which spec your school uses, your English teacher or head of year is
            the quickest source of truth — the spec code usually appears on your mock paper, your
            timetable, and your end-of-year report.
          </p>
        </div>
      </section>

      {/* ════════════════ SECTION 2 — HOW WE HELP ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            How The English Hub helps Qatar IGCSE students
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            The platform is built around board-specific revision paths, so the work you put in lines
            up with the paper you sit in May or June. There are four core surfaces a Qatar-based
            IGCSE student will use day to day.
          </p>

          <div className="space-y-5">
            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Full anthology coverage for Pearson Edexcel
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every poem in the Edexcel poetry anthology has its own analysis page — language,
                  form, structure, context, and a comparison route into the rest of the cluster.
                  Drama, Shakespeare and prose set texts each have a chapters / scenes breakdown,
                  themes, key quotations, and essay-plan templates.
                </p>
                <p className="text-sm mt-3">
                  <Link
                    href="/igcse/edexcel"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Open the Edexcel 4ET1 hub
                  </Link>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <Link
                    href="/igcse/edexcel-lang"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Open the Edexcel 4EA1 Language A hub
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Cambridge unseen-poetry and unseen-prose walkthroughs
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cambridge 0500 and 0990 lean heavily on unseen reading. The platform has a library
                  of worked walkthroughs across descriptive nature writing, classic novel openings,
                  modernist fiction, travel writing and dialogue analysis — modelling the exact
                  thinking process the mark scheme rewards. Use them as a daily 20-minute warm-up.
                </p>
                <p className="text-sm mt-3">
                  <Link
                    href="/igcse/cambridge/0500"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Open the Cambridge 0500 hub
                  </Link>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <Link
                    href="/igcse/cambridge/0990"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Open the Cambridge 0990 hub
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">AI-marked essay practice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Submit a full essay and the platform returns paragraph-level feedback against the
                  assessment objectives for your spec — AO1 evidence, AO2 language and structure,
                  AO3 context where it applies, AO4 comparison for Edexcel anthology questions. The
                  feedback is calibrated to mark schemes, not a generic English checker, so the
                  notes you get back match what your teacher would write in the margin.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Board-specific revision paths
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pick your board on the first visit and the dashboard re-orders itself: only your
                  papers, only your set texts, only your assessment objectives. Less scrolling
                  through irrelevant content, more time on the tasks that move your grade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 3 — TIMEZONE ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Time-zone-friendly revision: Qatar is GMT+3
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Qatar runs on Arabia Standard Time, which is three hours ahead of UK time. For IGCSE
            revision that small offset is genuinely useful. Most UK students are still in lessons
            when Doha schools have already finished for the day, which means a Qatar-based student
            sitting down at four in the afternoon is opening the platform before the UK evening peak
            — pages load fast and AI essay feedback comes back without a queue.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The same offset matters in May and June. Most IGCSE exam papers are written under a
            common international timetable, but the support and clarification windows around them
            tend to follow UK working hours. Revising in the Doha afternoon means you finish your
            session and bank your progress before UK email queues even open.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            A practical scheduling tip for Qatar students
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            The most productive single block of the week for many Qatar-based students is a weekend
            morning. Friday and Saturday mornings are quiet, the heat is manageable, and the family
            afternoon — visits, meals, errands — has not yet started. A two-hour block from around
            eight to ten in the morning, two days a week, is enough to keep an entire IGCSE
            Literature anthology in active recall. Use weekday afternoons for shorter twenty-minute
            drills and save the weekend mornings for full essay writing.
          </p>
        </div>
      </section>

      {/* ════════════════ SECTION 4 — EDEXCEL ANTHOLOGY ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Edexcel IGCSE 4ET1 anthology in detail
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Edexcel International GCSE English Literature anthology is a fixed collection of
            poems and prose extracts that you will be expected to know in detail by the time you sit
            Paper 1. The 4ET1 hub on the platform mirrors the anthology one-to-one — every poem has
            a dedicated page covering speaker, structure, language techniques, context, and the most
            common essay angles examiners reward.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            For 4EA1 Language A students, the non-fiction anthology serves a different purpose: you
            analyse the passages for writers&apos; methods rather than memorising them. The
            anthology hub for the Language A spec walks through each prose passage with the
            techniques and structural moves you can quote in your reading-skills answer.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/igcse/edexcel"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              Edexcel 4ET1 Literature hub →
            </Link>
            <Link
              href="/igcse/edexcel-lang/anthology"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              Edexcel 4EA1 anthology →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 5 — 0500 vs 0990 ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            Cambridge 0500 vs 0990 — which one is your school?
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Cambridge International offers two parallel English as a First Language qualifications.
            0500 reports grades on the long-standing A*–G scale and is the one many British
            international schools have used for years. 0990 is the redesigned variant that reports
            on the 9-1 scale, which lines up neatly with the grading scheme used inside England.
            Schools whose leavers continue into UK sixth forms or universities sometimes prefer 0990
            for that reason, while schools with a more international destination pattern often stay
            on 0500.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            From a content standpoint, the skills tested overlap heavily — both papers reward close
            reading, accurate inference, and controlled writing. The platform has separate hubs for
            each spec so you only revise against the question types and grade boundaries that apply
            to you.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/igcse/cambridge/0500"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              Cambridge 0500 hub →
            </Link>
            <Link
              href="/igcse/cambridge/0990"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              Cambridge 0990 hub →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 6 — FAQ ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <Card key={faq.question} className="p-6 border-border/40">
                <CardContent className="p-0">
                  <h3 className="text-base font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="py-20 sm:py-24 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Ready to start?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Pick your board and the dashboard tailors itself to your spec — Edexcel 4ET1, Edexcel
            4EA1, Cambridge 0500 or Cambridge 0990.
          </p>
          <Button
            size="lg"
            className="text-base px-10 h-13 shadow-lg shadow-primary/25 font-bold"
            render={<Link href="/board-select" />}
          >
            Get started
          </Button>
        </div>
      </section>

      {/* ════════════════ EMAIL CAPTURE ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-md mx-auto px-6">
          <EmailCaptureCard
            magnetSlug="qatar-igcse-launch-list"
            magnetTitle="Qatar IGCSE English revision pack — get the launch list"
            magnetDescription="One email when new Doha-friendly resources land."
          />
        </div>
      </section>
    </main>
  )
}
