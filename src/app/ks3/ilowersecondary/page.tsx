import type { Metadata } from 'next'
import Link from 'next/link'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
  type AOKey,
} from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary'

export const metadata: Metadata = {
  title: 'Overview',
  description:
    `Everything you need for the ${QUALIFICATION.title} (${QUALIFICATION.subjectCode}): ` +
    'what the exam is, who it is for, how it is marked on the S1-S4 scale, and where to start revising.',
  alternates: { canonical: PAGE_URL },
}

const AO_ORDER: AOKey[] = ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5', 'WAO1', 'WAO2']

export default async function ILowerSecondaryOverviewPage() {
  const [
    trHome,
    trKS3,
    trILS,
    trWhoHeading,
    trWhoBody,
    trProgressionHeading,
    trGlanceHeading,
    trGlanceAssessment,
    trGlanceDuration,
    trGlanceDurationDetail,
    trGlanceTotalMarks,
    trGlanceSections,
    trGlanceGrading,
    trGlanceAvailability,
    trAOHeading,
    trAOIntro,
    trStartHereHeading,
    // start-here card titles
    trSpecTitle,
    trSpecBlurb,
    trExamFmtTitle,
    trExamFmtBlurb,
    trMarkSchTitle,
    trMarkSchBlurb,
    trGradeTargTitle,
    trGradeTargBlurb,
    trReadSkillTitle,
    trReadSkillBlurb,
    trWriteSkillTitle,
    trWriteSkillBlurb,
    trQTTitle,
    trQTBlurb,
    trTTTitle,
    trTTBlurb,
    trFicTitle,
    trFicBlurb,
    trPracTitle,
    trPracBlurb,
    trQuizTitle,
    trQuizBlurb,
    trGramLabTitle,
    trGramLabBlurb,
    trVocabTitle,
    trVocabBlurb,
  ] = await Promise.all([
    t('ks3.ils.breadcrumb.home'),
    t('ks3.ils.breadcrumb.ks3'),
    t('ks3.ils.breadcrumb.ils'),
    t('ks3.ils.overview.who_heading'),
    t('ks3.ils.overview.who_body'),
    t('ks3.ils.overview.progression_heading'),
    t('ks3.ils.overview.glance_heading'),
    t('ks3.ils.overview.glance_assessment'),
    t('ks3.ils.overview.glance_duration'),
    t('ks3.ils.overview.glance_duration_detail'),
    t('ks3.ils.overview.glance_total_marks'),
    t('ks3.ils.overview.glance_sections'),
    t('ks3.ils.overview.glance_grading'),
    t('ks3.ils.overview.glance_availability'),
    t('ks3.ils.overview.ao_heading'),
    t('ks3.ils.overview.ao_intro'),
    t('ks3.ils.overview.start_here_heading'),
    t('ks3.ils.start.specification.title'),
    t('ks3.ils.start.specification.blurb'),
    t('ks3.ils.start.exam_format.title'),
    t('ks3.ils.start.exam_format.blurb'),
    t('ks3.ils.start.mark_scheme.title'),
    t('ks3.ils.start.mark_scheme.blurb'),
    t('ks3.ils.start.grade_targets.title'),
    t('ks3.ils.start.grade_targets.blurb'),
    t('ks3.ils.start.reading_skills.title'),
    t('ks3.ils.start.reading_skills.blurb'),
    t('ks3.ils.start.writing_skills.title'),
    t('ks3.ils.start.writing_skills.blurb'),
    t('ks3.ils.start.question_types.title'),
    t('ks3.ils.start.question_types.blurb'),
    t('ks3.ils.start.text_types.title'),
    t('ks3.ils.start.text_types.blurb'),
    t('ks3.ils.start.fiction.title'),
    t('ks3.ils.start.fiction.blurb'),
    t('ks3.ils.start.practice.title'),
    t('ks3.ils.start.practice.blurb'),
    t('ks3.ils.start.quiz.title'),
    t('ks3.ils.start.quiz.blurb'),
    t('ks3.ils.start.grammar_lab.title'),
    t('ks3.ils.start.grammar_lab.blurb'),
    t('ks3.ils.start.vocabulary.title'),
    t('ks3.ils.start.vocabulary.blurb'),
  ])

  const glanceCards: { label: string; value: string; detail: string }[] = [
    {
      label: trGlanceAssessment,
      value: QUALIFICATION.paperCode,
      detail: QUALIFICATION.assessment,
    },
    {
      label: trGlanceDuration,
      value: QUALIFICATION.durationLabel,
      detail: trGlanceDurationDetail,
    },
    {
      label: trGlanceTotalMarks,
      value: String(QUALIFICATION.totalMarks),
      detail: `${SECTIONS.A.name} (${SECTIONS.A.marks}) + ${SECTIONS.B.name} (${SECTIONS.B.marks}).`,
    },
    {
      label: trGlanceSections,
      value: '2',
      detail: `${SECTIONS.A.name} (suggested ${SECTIONS.A.recommendedLabel}); ${SECTIONS.B.name} (suggested ${SECTIONS.B.recommendedLabel}).`,
    },
    {
      label: trGlanceGrading,
      value: QUALIFICATION.grades.join(' - '),
      detail: QUALIFICATION.gradeNote,
    },
    {
      label: trGlanceAvailability,
      value: QUALIFICATION.availability.join(' & '),
      detail: `Specification: ${QUALIFICATION.specIssue}. First assessment ${QUALIFICATION.firstAssessment}.`,
    },
  ]

  const startHereItems: { href: string; title: string; blurb: string }[] = [
    { href: '/ks3/ilowersecondary/specification', title: trSpecTitle, blurb: trSpecBlurb },
    { href: '/ks3/ilowersecondary/exam-format', title: trExamFmtTitle, blurb: trExamFmtBlurb },
    { href: '/ks3/ilowersecondary/mark-scheme', title: trMarkSchTitle, blurb: trMarkSchBlurb },
    {
      href: '/ks3/ilowersecondary/grade-targets',
      title: trGradeTargTitle,
      blurb: trGradeTargBlurb,
    },
    {
      href: '/ks3/ilowersecondary/reading-skills',
      title: trReadSkillTitle,
      blurb: trReadSkillBlurb,
    },
    {
      href: '/ks3/ilowersecondary/writing-skills',
      title: trWriteSkillTitle,
      blurb: trWriteSkillBlurb,
    },
    { href: '/ks3/ilowersecondary/question-types', title: trQTTitle, blurb: trQTBlurb },
    { href: '/ks3/ilowersecondary/text-types', title: trTTTitle, blurb: trTTBlurb },
    { href: '/ks3/ilowersecondary/fiction', title: trFicTitle, blurb: trFicBlurb },
    { href: '/ks3/ilowersecondary/practice', title: trPracTitle, blurb: trPracBlurb },
    { href: '/ks3/ilowersecondary/quiz', title: trQuizTitle, blurb: trQuizBlurb },
    { href: '/ks3/ilowersecondary/grammar-lab', title: trGramLabTitle, blurb: trGramLabBlurb },
    { href: '/ks3/ilowersecondary/vocabulary', title: trVocabTitle, blurb: trVocabBlurb },
  ]

  return (
    <>
      <CourseJsonLd
        name={`${QUALIFICATION.title} (${QUALIFICATION.subjectCode})`}
        description={`Student learning hub for the ${QUALIFICATION.title} (${QUALIFICATION.subjectCode}) achievement test, assessing Key Stage 3 English reading and writing skills.`}
        educationalLevel="KS3"
        url={PAGE_URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: trHome, url: 'https://theenglishhub.app' },
          { name: trKS3, url: 'https://theenglishhub.app/ks3' },
          { name: trILS, url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {trKS3}
        </Link>
        <span> · </span>
        <span>{trILS}</span>
      </p>

      <h1>{QUALIFICATION.title}</h1>
      <p className="lead">
        The {QUALIFICATION.subjectCode} achievement test assesses Key Stage 3 English skills through
        one externally-set paper. This is your go-to learning area: read what the exam is, see how
        it is marked, and start revising the reading and writing skills it tests.
      </p>

      <h2>{trWhoHeading}</h2>
      <p>
        {trWhoBody} {QUALIFICATION.priorLearning} {QUALIFICATION.contentSource}{' '}
        {trProgressionHeading}
      </p>
      <ul>
        {QUALIFICATION.progression.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>{trGlanceHeading}</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {glanceCards.map((card) => (
          <div key={card.label} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {card.label}
            </p>
            <p className="text-lg font-semibold text-foreground">{card.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.detail}</p>
          </div>
        ))}
      </div>

      <h2>{trAOHeading}</h2>
      <p>{trAOIntro}</p>
      <div className="not-prose my-6 space-y-3">
        {AO_ORDER.map((key) => {
          const ao = ASSESSMENT_OBJECTIVES[key]
          return (
            <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs text-primary">{ao.code}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {ao.strand} · {ao.weightPct}%
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.descriptor}</p>
            </div>
          )
        })}
      </div>

      <h2>{trStartHereHeading}</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {startHereItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/60"
          >
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.blurb}</p>
          </Link>
        ))}
      </div>

      <hr />
      <p className="text-xs leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
    </>
  )
}
