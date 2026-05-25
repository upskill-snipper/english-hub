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
import { t } from '@/lib/i18n/t'
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

// ─── IELTS Exam Guide - authoritative SEO reference page ─────────────────────
// A standalone, indexable reference that explains what IELTS is, the four
// sections and their timings, how the 0-9 band scale is scored, the most common
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

// Per-skill icon for the section cards - keyed to IeltsSkill so it stays in
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

// FAQ content for the FAQPageJsonLd structured data - kept English for SEO
// (search engines index the canonical English page). Answers are assembled from
// exam-facts so the structured data never drifts from the reference figures.
// The visible accordion uses a locale-aware copy built inside the component:
// translated connective phrasing wrapped around the same exam-facts values.
const HARDEST_LABEL = SKILL_META[HARDEST_SKILL].label
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What is a good IELTS band score?',
    answer: `${SCORING_RULE} There is no universal pass mark: institutions set their own minimums. As context, most undergraduate study sits around Band 6.0-6.5 and postgraduate around 6.5-7.5, while professional registration can require 7.0-7.5 in each skill.`,
  },
  {
    question: 'How long is the IELTS test?',
    answer: `The Listening, Reading and Writing sections are sat back-to-back in a single sitting of ${sittingHours}h${sittingMins
      .toString()
      .padStart(
        2,
        '0',
      )} (${SITTING_MINUTES} minutes) with no breaks. Speaking is a ${SECTION_FACTS.find((s) => s.skill === 'speaking')?.timeMinutes ?? 14}-minute interview held separately - the same day or up to seven days apart.`,
  },
  {
    question: 'Which IELTS section is the hardest?',
    answer: `${HARDEST_LABEL} is the lowest-scoring module for most candidates worldwide, and lowest of all for Gulf learners - the published mean is around Band ${SECTION_FACTS.find((s) => s.skill === HARDEST_SKILL)?.meanBandAcademic ?? ''}. ${ONE_SKILL_RETAKE_NOTE}`,
  },
  {
    question: 'How long is an IELTS result valid?',
    answer: `Your Test Report Form (TRF) is valid for ${IELTS_OVERVIEW.trfValidityYears} years. IELTS is accepted by ${IELTS_OVERVIEW.acceptedBy}.`,
  },
]

export default async function IeltsGuidePage() {
  const academicPct = Math.round(IELTS_OVERVIEW.academicShare * 100)
  const generalPct = Math.round(IELTS_OVERVIEW.generalTrainingShare * 100)

  // Shared interpolation values reused by the localised FAQ (and mirroring the
  // English FAQS schema above). These are exam-facts figures, never translated.
  const sittingDuration = `${sittingHours}h${sittingMins.toString().padStart(2, '0')}`
  const speakingMins = SECTION_FACTS.find((s) => s.skill === 'speaking')?.timeMinutes ?? 14
  const hardestMean = SECTION_FACTS.find((s) => s.skill === HARDEST_SKILL)?.meanBandAcademic ?? ''

  // ── Resolve all UI chrome up front (server component: no await inside JSX
  // .map()). Factual values are spliced in from exam-facts at render time. ──

  // Back link + hero.
  const backLabel = await t('ielts.guide.back')
  const heroEyebrow = await t('ielts.guide.hero.eyebrow')
  const heroTitle = await t('ielts.guide.hero.title')
  const heroIntro = await t('ielts.guide.hero.intro')
  const heroCtaDiagnostic = await t('ielts.guide.hero.cta_diagnostic')
  const heroCtaHub = await t('ielts.guide.hero.cta_hub')
  const heroDisclaimer = await t('ielts.guide.hero.disclaimer')

  // 1. Overview.
  const overviewEyebrow = await t('ielts.guide.overview.eyebrow')
  const overviewTitle = await t('ielts.guide.overview.title')
  const overviewP1Lead = await t('ielts.guide.overview.p1_lead')
  const overviewP1Mid = await t('ielts.guide.overview.p1_mid')
  const overviewP1Tail = await t('ielts.guide.overview.p1_tail')
  const overviewP2Lead = await t('ielts.guide.overview.p2_lead')
  const overviewP2Years = await t('ielts.guide.overview.p2_years')
  const overviewP3Lead = await t('ielts.guide.overview.p3_lead')
  const overviewP3AcademicOpen = await t('ielts.guide.overview.p3_academic_open')
  const overviewP3AcademicClose = await t('ielts.guide.overview.p3_academic_close')
  const overviewP3GeneralOpen = await t('ielts.guide.overview.p3_general_open')
  const overviewP3GeneralClose = await t('ielts.guide.overview.p3_general_close')
  const statYrs = await t('ielts.guide.overview.stat.yrs')
  const overviewStats = [
    {
      icon: Globe2,
      value: IELTS_OVERVIEW.testsPerYear,
      label: await t('ielts.guide.overview.stat.tests_per_year'),
    },
    {
      icon: ListChecks,
      value: `${IELTS_OVERVIEW.trfValidityYears} ${statYrs}`,
      label: await t('ielts.guide.overview.stat.trf_validity'),
    },
    {
      icon: BookOpen,
      value: `${academicPct}%`,
      label: await t('ielts.guide.overview.stat.take_academic'),
    },
    {
      icon: ClipboardList,
      value: `${generalPct}%`,
      label: await t('ielts.guide.overview.stat.take_general'),
    },
  ]

  // 2. The four sections.
  const sectionsEyebrow = await t('ielts.guide.sections.eyebrow')
  const sectionsTitle = await t('ielts.guide.sections.title')
  const sectionsIntro = await t('ielts.guide.sections.intro')
  const sectionsMinutes = await t('ielts.guide.sections.minutes')
  const sectionsMean = await t('ielts.guide.sections.mean')
  const sittingLead = await t('ielts.guide.sections.sitting_lead')
  const sittingTail = await t('ielts.guide.sections.sitting_tail')

  // 3. Scoring.
  const scoringEyebrow = await t('ielts.guide.scoring.eyebrow')
  const scoringTitle = await t('ielts.guide.scoring.title')
  const scoringIntroLead = await t('ielts.guide.scoring.intro_lead')
  const scoringColBand = await t('ielts.guide.scoring.col.band')
  const scoringColLevel = await t('ielts.guide.scoring.col.level')
  const scoringColMeaning = await t('ielts.guide.scoring.col.meaning')

  // 4. Where people struggle.
  const struggleEyebrow = await t('ielts.guide.struggle.eyebrow')
  const struggleTitle = await t('ielts.guide.struggle.title')
  const struggleCalloutLead = await t('ielts.guide.struggle.callout_lead')
  const struggleCalloutTail = await t('ielts.guide.struggle.callout_tail')
  const struggleCtaWriting = await t('ielts.guide.struggle.cta_writing')
  const struggleCtaLearn = await t('ielts.guide.struggle.cta_learn')
  const struggleBadgeHardest = await t('ielts.guide.struggle.badge_hardest')

  // 5. Typical requirements.
  const requirementsEyebrow = await t('ielts.guide.requirements.eyebrow')
  const requirementsTitle = await t('ielts.guide.requirements.title')
  const requirementsIntroLead = await t('ielts.guide.requirements.intro_lead')
  const requirementsIntroEmphasis = await t('ielts.guide.requirements.intro_emphasis')
  const requirementsIntroTail = await t('ielts.guide.requirements.intro_tail')
  const requirementsColWhere = await t('ielts.guide.requirements.col.where')
  const requirementsColPurpose = await t('ielts.guide.requirements.col.purpose')
  const requirementsColMin = await t('ielts.guide.requirements.col.min')

  // 6. The process.
  const processEyebrow = await t('ielts.guide.process.eyebrow')
  const processTitle = await t('ielts.guide.process.title')

  // FAQ - localised accordion copy. Each answer = translated connective
  // fragment(s) + the same exam-facts figures used by the English schema above.
  const faqEyebrow = await t('ielts.guide.faq.eyebrow')
  const faqTitle = await t('ielts.guide.faq.title')
  const faqList: { question: string; answer: string }[] = [
    {
      question: await t('ielts.guide.faq.q1.question'),
      answer: `${SCORING_RULE} ${await t('ielts.guide.faq.q1.answer_context')}`,
    },
    {
      question: await t('ielts.guide.faq.q2.question'),
      answer: `${await t('ielts.guide.faq.q2.answer_a')} ${sittingDuration} (${SITTING_MINUTES} ${await t(
        'ielts.guide.faq.q2.minutes_word',
      )}) ${await t('ielts.guide.faq.q2.answer_b')} ${speakingMins} ${await t(
        'ielts.guide.faq.q2.answer_c',
      )}`,
    },
    {
      question: await t('ielts.guide.faq.q3.question'),
      answer: `${HARDEST_LABEL} ${await t(
        'ielts.guide.faq.q3.answer_a',
      )} ${hardestMean}. ${ONE_SKILL_RETAKE_NOTE}`,
    },
    {
      question: await t('ielts.guide.faq.q4.question'),
      answer: `${await t('ielts.guide.faq.q4.answer_a')} ${IELTS_OVERVIEW.trfValidityYears} ${await t(
        'ielts.guide.faq.q4.years_word',
      )}. ${await t('ielts.guide.faq.q4.answer_b')} ${IELTS_OVERVIEW.acceptedBy}.`,
    },
  ]

  // Closing CTA.
  const ctaHeading = await t('ielts.guide.cta.heading')
  const ctaBody = await t('ielts.guide.cta.body')
  const ctaCtaDiagnostic = await t('ielts.guide.cta.cta_diagnostic')
  const ctaCtaLearn = await t('ielts.guide.cta.cta_learn')

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
          {backLabel}
        </Button>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <ScrollText className="size-3.5" />
            {heroEyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/diagnostic" />}
            >
              <Target className="size-4" />
              {heroCtaDiagnostic}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts" />}
            >
              {heroCtaHub}
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
            {heroDisclaimer}
          </p>
        </section>

        {/* ── 1. Overview ───────────────────────────────────────────── */}
        <section aria-labelledby="overview-heading" className="mt-14">
          <SectionHeading id="overview-heading" eyebrow={overviewEyebrow} title={overviewTitle} />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                {overviewP1Lead}{' '}
                <strong className="text-foreground">{IELTS_OVERVIEW.testsPerYear}</strong>{' '}
                {overviewP1Mid} {IELTS_OVERVIEW.ownedBy}
                {overviewP1Tail}{' '}
                <strong className="text-foreground">{IELTS_OVERVIEW.acceptedBy}</strong>.
              </p>
              <p>
                {overviewP2Lead}{' '}
                <strong className="text-foreground">
                  {IELTS_OVERVIEW.trfValidityYears} {overviewP2Years}
                </strong>
                .
              </p>
              <p>
                {overviewP3Lead} <strong className="text-foreground">Academic</strong>{' '}
                {overviewP3AcademicOpen} {academicPct}% {overviewP3AcademicClose}{' '}
                <strong className="text-foreground">General Training</strong>{' '}
                {overviewP3GeneralOpen} {generalPct}%{overviewP3GeneralClose}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-start">
              {overviewStats.map(({ icon: Icon, value, label }) => (
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
          <SectionHeading id="sections-heading" eyebrow={sectionsEyebrow} title={sectionsTitle} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {sectionsIntro}
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
                          {section.timeMinutes} {sectionsMinutes}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {sectionsMean}
                      {section.meanBandAcademic}
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
              {sittingLead} <strong>{sittingDuration}</strong> ({SITTING_MINUTES} {sectionsMinutes}){' '}
              {sittingTail}
            </p>
          </div>
        </section>

        {/* ── 3. Scoring ────────────────────────────────────────────── */}
        <section aria-labelledby="scoring-heading" className="mt-16">
          <SectionHeading id="scoring-heading" eyebrow={scoringEyebrow} title={scoringTitle} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {scoringIntroLead} {SCORING_RULE}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">{scoringColBand}</th>
                  <th className="px-4 py-3 font-semibold">{scoringColLevel}</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    {scoringColMeaning}
                  </th>
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
          <SectionHeading id="struggle-heading" eyebrow={struggleEyebrow} title={struggleTitle} />
          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <PenLine className="mt-0.5 size-5 shrink-0 text-violet-400" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">
                <strong>{HARDEST_LABEL}</strong> {struggleCalloutLead}
                {hardestMean}
                {struggleCalloutTail}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button render={<Link href="/ielts/writing" />}>{struggleCtaWriting}</Button>
              <Button variant="outline" render={<Link href="/ielts/learn" />}>
                {struggleCtaLearn}
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
                        {struggleBadgeHardest}
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
            eyebrow={requirementsEyebrow}
            title={requirementsTitle}
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {requirementsIntroLead}{' '}
            <strong className="text-foreground">{requirementsIntroEmphasis}</strong>{' '}
            {requirementsIntroTail}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">{requirementsColWhere}</th>
                  <th className="px-4 py-3 font-semibold">{requirementsColPurpose}</th>
                  <th className="px-4 py-3 font-semibold">{requirementsColMin}</th>
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
          <SectionHeading id="process-heading" eyebrow={processEyebrow} title={processTitle} />
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
          <SectionHeading id="faq-heading" eyebrow={faqEyebrow} title={faqTitle} />
          <div className="mt-8 space-y-3">
            {faqList.map((faq) => (
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
              {ctaHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {ctaBody}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/diagnostic" />}
              >
                <Target className="size-4" />
                {ctaCtaDiagnostic}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/learn" />}
              >
                {ctaCtaLearn}
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
