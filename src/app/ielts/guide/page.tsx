import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Clock,
  Globe2,
  Headphones,
  ListChecks,
  PenLine,
  Mic,
  ScrollText,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import {
  IELTS_OVERVIEW,
  SECTION_FACTS,
  SITTING_MINUTES,
  BAND_SCALE,
  SCORING_RULE,
  COMMON_MISTAKES,
  HARDEST_SKILL,
  COUNTRY_REQUIREMENTS,
  PROCESS_STEPS,
  ONE_SKILL_RETAKE_NOTE,
} from '@/lib/ielts/exam-facts'
import { IELTS_SKILLS, SKILL_META, type IeltsSkill } from '@/lib/ielts/types'

// ─── IELTS Exam Guide — authoritative SEO reference page ─────────────────────
// A standalone, indexable reference that explains what IELTS is, the four
// sections and their timings, how the 0–9 band scale is scored, the most common
// mistakes per skill, typical institutional requirements, and the test process.
//
// SINGLE SOURCE OF TRUTH: every factual figure on this page is rendered from
// `@/lib/ielts/exam-facts` (overview stats, section structure, the band scale,
// scoring rule, common mistakes, country requirements, the process steps and
// the One Skill Retake note). Narrative connective copy is inline English; no
// exam fact that lives in exam-facts is hard-coded here.
//
// Server Component so all copy renders statically for SEO. Exactly one <h1>.
// Title + canonical live in layout.tsx. Compliance: institutional minimums are
// set per institution (not a pass/fail), and bands are presented as the
// published scale, never as a guarantee of a result.
// ────────────────────────────────────────────────────────────────────────────

// Per-skill icon for the section cards — keyed to IeltsSkill so it stays in
// lockstep with SECTION_FACTS / SKILL_META.
const SKILL_ICON: Record<IeltsSkill, typeof Headphones> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

// 2h40 sitting note, derived from SITTING_MINUTES (no hard-coded duration).
const sittingHours = Math.floor(SITTING_MINUTES / 60)
const sittingMins = SITTING_MINUTES % 60

// FAQ content — surfaced both visually and as FAQ schema. Answers are assembled
// from exam-facts so the structured data never drifts from the page.
const HARDEST_LABEL = SKILL_META[HARDEST_SKILL].label
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What is a good IELTS band score?',
    answer: `${SCORING_RULE} There is no universal pass mark: institutions set their own minimums. As context, most undergraduate study sits around Band 6.0–6.5 and postgraduate around 6.5–7.5, while professional registration can require 7.0–7.5 in each skill.`,
  },
  {
    question: 'How long is the IELTS test?',
    answer: `The Listening, Reading and Writing sections are sat back-to-back in a single sitting of ${sittingHours}h${sittingMins
      .toString()
      .padStart(
        2,
        '0',
      )} (${SITTING_MINUTES} minutes) with no breaks. Speaking is a ${SECTION_FACTS.find((s) => s.skill === 'speaking')?.timeMinutes ?? 14}-minute interview held separately — the same day or up to seven days apart.`,
  },
  {
    question: 'Which IELTS section is the hardest?',
    answer: `${HARDEST_LABEL} is the lowest-scoring module for most candidates worldwide, and lowest of all for Gulf learners — the published mean is around Band ${SECTION_FACTS.find((s) => s.skill === HARDEST_SKILL)?.meanBandAcademic ?? ''}. ${ONE_SKILL_RETAKE_NOTE}`,
  },
  {
    question: 'How long is an IELTS result valid?',
    answer: `Your Test Report Form (TRF) is valid for ${IELTS_OVERVIEW.trfValidityYears} years. IELTS is accepted by ${IELTS_OVERVIEW.acceptedBy}.`,
  },
]

export default function IeltsGuidePage() {
  const academicPct = Math.round(IELTS_OVERVIEW.academicShare * 100)
  const generalPct = Math.round(IELTS_OVERVIEW.generalTrainingShare * 100)

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Exam Guide', url: 'https://theenglishhub.app/ielts/guide' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      <div className="mx-auto max-w-5xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/ielts" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to IELTS
        </Button>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <ScrollText className="size-3.5" />
            IELTS reference
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            The complete IELTS exam guide
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything you need to understand the test before you book it: the four sections and
            their timings, how the 0–9 band scale is scored, where candidates lose marks, and the
            step-by-step process from registration to results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/diagnostic" />}
            >
              <Target className="size-4" />
              Take the free diagnostic
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts" />}
            >
              Explore the IELTS hub
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
            An independent, factual reference. The English Hub is not affiliated with the official
            IELTS test owners. Band requirements are set per institution and may change — always
            confirm the current requirement with your university, employer or immigration authority.
          </p>
        </section>

        {/* ── 1. Overview ───────────────────────────────────────────── */}
        <section aria-labelledby="overview-heading" className="mt-14">
          <SectionHeading id="overview-heading" eyebrow="The basics" title="What IELTS is" />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                The International English Language Testing System (IELTS) is the world&rsquo;s most
                widely recognised English-proficiency test, taken{' '}
                <strong className="text-foreground">{IELTS_OVERVIEW.testsPerYear}</strong> times a
                year. It is jointly owned by {IELTS_OVERVIEW.ownedBy}, and accepted by{' '}
                <strong className="text-foreground">{IELTS_OVERVIEW.acceptedBy}</strong>.
              </p>
              <p>
                It assesses four skills — Listening, Reading, Writing and Speaking — each reported
                on a <strong className="text-foreground">0–9 band scale</strong>. There is no pass
                or fail: you receive a band for every skill and an overall band, and each
                institution decides the minimum it will accept. Your result is issued as a Test
                Report Form (TRF), valid for{' '}
                <strong className="text-foreground">{IELTS_OVERVIEW.trfValidityYears} years</strong>
                .
              </p>
              <p>
                There are two versions. <strong className="text-foreground">Academic</strong>{' '}
                (around {academicPct}% of test takers) is for university study and professional
                registration; <strong className="text-foreground">General Training</strong> (around{' '}
                {generalPct}%) is for work and migration. Listening and Speaking are identical
                across both; only Reading and Writing differ.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-start">
              {[
                { icon: Globe2, value: IELTS_OVERVIEW.testsPerYear, label: 'tests sat per year' },
                {
                  icon: ListChecks,
                  value: `${IELTS_OVERVIEW.trfValidityYears} yrs`,
                  label: 'TRF validity',
                },
                { icon: BookOpen, value: `${academicPct}%`, label: 'take Academic' },
                { icon: ClipboardList, value: `${generalPct}%`, label: 'take General Training' },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
                >
                  <Icon className="size-5 text-clay-500" aria-hidden />
                  <p className="mt-3 font-heading text-2xl font-bold text-foreground">{value}</p>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. The four sections ──────────────────────────────────── */}
        <section aria-labelledby="sections-heading" className="mt-16">
          <SectionHeading
            id="sections-heading"
            eyebrow="Test structure"
            title="The four sections"
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each module is timed and marked independently. The published means below are the
            real-world Academic averages — useful context for setting a realistic target.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {SECTION_FACTS.map((section) => {
              const Icon = SKILL_ICON[section.skill]
              const meta = SKILL_META[section.skill]
              return (
                <div
                  key={section.skill}
                  className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${meta.bgColour} ${meta.colour}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {section.label}
                        </h3>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" aria-hidden />
                          {section.timeMinutes} minutes
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      mean ~{section.meanBandAcademic}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {section.questionsOrTasks}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {section.format}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground">
              Listening, Reading and Writing are sat back-to-back in one sitting of{' '}
              <strong>
                {sittingHours}h{sittingMins.toString().padStart(2, '0')}
              </strong>{' '}
              ({SITTING_MINUTES} minutes) with no breaks. Speaking is held separately — the same
              day, or up to seven days apart.
            </p>
          </div>
        </section>

        {/* ── 3. Scoring ────────────────────────────────────────────── */}
        <section aria-labelledby="scoring-heading" className="mt-16">
          <SectionHeading id="scoring-heading" eyebrow="How it's marked" title="The band scale" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every skill is scored from 0 to 9 against the same descriptors. {SCORING_RULE}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">Band</th>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">What it means</th>
                </tr>
              </thead>
              <tbody>
                {BAND_SCALE.map((row) => (
                  <tr key={row.band} className="border-t border-border/60 align-top">
                    <td className="px-4 py-3">
                      <span className="font-heading text-xl font-bold text-foreground">
                        {row.band}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold text-foreground">{row.level}</span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground sm:hidden">
                        {row.description}
                      </span>
                    </td>
                    <td className="hidden px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:table-cell">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 4. Where people struggle ──────────────────────────────── */}
        <section aria-labelledby="struggle-heading" className="mt-16">
          <SectionHeading
            id="struggle-heading"
            eyebrow="Common mistakes"
            title="Where candidates lose marks"
          />
          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <PenLine className="mt-0.5 size-5 shrink-0 text-violet-400" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">
                <strong>{HARDEST_LABEL}</strong> is the lowest-scoring module for most candidates
                worldwide — and lowest of all for Gulf learners (the published Academic mean is only
                ~{SECTION_FACTS.find((s) => s.skill === HARDEST_SKILL)?.meanBandAcademic}). If you
                only have time to fix one thing, fix this.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button render={<Link href="/ielts/writing" />}>Practise Writing</Button>
              <Button variant="outline" render={<Link href="/ielts/learn" />}>
                Study the skills
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {IELTS_SKILLS.map((skill) => {
              const Icon = SKILL_ICON[skill]
              const meta = SKILL_META[skill]
              const isHardest = skill === HARDEST_SKILL
              return (
                <div
                  key={skill}
                  className={`rounded-2xl border bg-card p-6 shadow-soft ${
                    isHardest ? 'border-violet-500/40' : 'border-border/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${meta.bgColour} ${meta.colour}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {meta.label}
                    </h3>
                    {isHardest ? (
                      <Badge variant="secondary" className="ml-auto">
                        hardest
                      </Badge>
                    ) : null}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {COMMON_MISTAKES[skill].map((mistake) => (
                      <li key={mistake} className="flex gap-2 text-sm leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-500"
                        />
                        <span className="text-muted-foreground">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── 5. Typical requirements ───────────────────────────────── */}
        <section aria-labelledby="requirements-heading" className="mt-16">
          <SectionHeading
            id="requirements-heading"
            eyebrow="What you'll need"
            title="Typical band requirements"
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are indicative ranges only. Every university, employer and immigration authority{' '}
            <strong className="text-foreground">sets its own minimum</strong> — and IELTS itself has
            no pass/fail. Always check the exact requirement for your specific course or visa.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">Where</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Typical minimum</th>
                </tr>
              </thead>
              <tbody>
                {COUNTRY_REQUIREMENTS.map((req) => (
                  <tr
                    key={`${req.where}-${req.purpose}`}
                    className="border-t border-border/60 align-top"
                  >
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold text-foreground">{req.where}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{req.purpose}</td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{req.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 6. The process ────────────────────────────────────────── */}
        <section aria-labelledby="process-heading" className="mt-16">
          <SectionHeading id="process-heading" eyebrow="Step by step" title="The test process" />
          <ol className="mt-8 space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground">{ONE_SKILL_RETAKE_NOTE}</p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="mt-16">
          <SectionHeading id="faq-heading" eyebrow="Quick answers" title="IELTS FAQs" />
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border/60 bg-card p-5 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-3 font-serif text-base font-semibold text-foreground marker:content-['']">
                  {faq.question}
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────────── */}
        <section aria-labelledby="cta-heading" className="mt-16">
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-6 py-12 text-center sm:px-10">
            <h2
              id="cta-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Know the exam. Now build the band.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Start with a free diagnostic to find your weakest skill, then follow a personalised
              path of practice and instant AI feedback across all four sections.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/diagnostic" />}
              >
                <Target className="size-4" />
                Take the free diagnostic
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/learn" />}
              >
                Study the skills
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── Shared section heading ──────────────────────────────────────────────────

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
    </div>
  )
}
