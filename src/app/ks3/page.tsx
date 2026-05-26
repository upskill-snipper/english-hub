import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Compass,
  Flag,
  PenTool,
  Award,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { KS3 } from '@/lib/ks3/curriculum'
import { QUALIFICATION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

// The KS3 `title` template + description used to live on the (now
// client) layout. A Client Component can't export `metadata`, so the
// index - a Server Component - owns it. KS3 sub-pages keep their own
// per-page `title` and inherit the site-wide `'%s - The English Hub'`
// template from the root layout.
export const metadata: Metadata = {
  title: {
    default: 'KS3 English - Years 7, 8 & 9',
    template: '%s · KS3 English · The English Hub',
  },
  description:
    'The full KS3 English curriculum (Years 7-9) - yearly expectations, termly plans, weekly lesson frameworks, marking rubrics, skill progression, and end-of-KS3 standards.',
  alternates: { canonical: 'https://theenglishhub.app/ks3' },
}

// ─── Section data ──────────────────────────────────────────────────────────
//
// Each year card links to `/ks3/year-N` (the `[year]` dynamic segment
// validates `year-7|8|9`). Skills / Rubrics / End of KS3 / iLowerSecondary
// are the real, existing routes under src/app/ks3/**.

interface KS3Section {
  title: string
  caption: string
  desc: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
}

export default async function KS3HubPage() {
  const tr = await Promise.all([
    t('ks3.landing.eyebrow'), // 0
    t('ks3.landing.title'), // 1
    t('ks3.landing.lead'), // 2
    t('ks3.landing.three_years_heading'), // 3
    t('ks3.landing.view_year'), // 4
    t('ks3.year_7'), // 5
    t('ks3.year_8'), // 6
    t('ks3.year_9'), // 7
    t('ks3.year_7_name'), // 8
    t('ks3.year_8_name'), // 9
    t('ks3.year_9_name'), // 10
    t('ks3.marking_rubrics'), // 11
    t('ks3.skill_codes'), // 12
    t('ks3.end_of_ks3'), // 13
    t('ks3.year_overview'), // 14
    t('ks3.hub.stat.year_groups'), // 15
    t('ks3.hub.stat.terms_mapped'), // 16
    t('ks3.hub.stat.skill_codes'), // 17
    t('ks3.hub.stat.rubric_rows'), // 18
    t('ks3.hub.ils.eyebrow'), // 19
    t('ks3.hub.ils.cta'), // 20
    t('ks3.hub.reference.heading'), // 21
    t('ks3.hub.reference.explore'), // 22
    t('ks3.hub.reference.skills.desc'), // 23
    t('ks3.hub.reference.rubrics.desc'), // 24
    t('ks3.hub.reference.endks3.desc'), // 25
    t('ks3.hub.start.body'), // 26
    t('ks3.hub.start.heading_prefix'), // 27
  ])

  const yearNameTr: Record<number, string> = { 7: tr[8], 8: tr[9], 9: tr[10] }
  const yearLabelTr: Record<number, string> = { 7: tr[5], 8: tr[6], 9: tr[7] }

  // Stat boxes use REAL curriculum data so the numbers stay accurate
  // and self-maintaining (no fabricated counts).
  const yearCount = KS3.years.length
  const termCount = KS3.years.reduce((n, y) => n + y.terms.length, 0)
  const skillCount = KS3.skillCodes.length
  const rubricCount = KS3.years.reduce((n, y) => n + (y.rubric?.length ?? 0), 0)

  // Year cards - Foundations / Development / Mastery.
  const yearSections: KS3Section[] = KS3.years.map((y) => ({
    title: yearNameTr[y.number] ?? y.name.en.replace(`Year ${y.number} - `, ''),
    caption: `${yearLabelTr[y.number]} · ${y.terms.length} terms`,
    desc: y.overview.en,
    href: `/ks3/year-${y.number}`,
    icon: BookOpen,
    colour: y.number === 7 ? 'text-blue-400' : y.number === 8 ? 'text-violet-400' : 'text-rose-400',
    bgColour:
      y.number === 7 ? 'bg-blue-500/10' : y.number === 8 ? 'bg-violet-500/10' : 'bg-rose-500/10',
  }))

  // Reference + standards cards - the other real /ks3 destinations.
  const referenceSections: KS3Section[] = [
    {
      title: tr[12], // Skill codes
      caption: `${skillCount} codes · Y7-Y9`,
      desc: tr[23],
      href: '/ks3/skills',
      icon: Compass,
      colour: 'text-cyan-400',
      bgColour: 'bg-cyan-500/10',
    },
    {
      title: tr[11], // Marking rubrics
      caption: `${rubricCount} rubric rows`,
      desc: tr[24],
      href: '/ks3/rubrics',
      icon: ClipboardCheck,
      colour: 'text-emerald-400',
      bgColour: 'bg-emerald-500/10',
    },
    {
      title: tr[13], // End of KS3 standard
      caption: 'British National Curriculum',
      desc: tr[25],
      href: '/ks3/end-of-ks3',
      icon: Flag,
      colour: 'text-amber-400',
      bgColour: 'bg-amber-500/10',
    },
  ]

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="ks3-hero-heading"
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl"
        />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" aria-hidden="true" />
            {tr[0]}
          </Badge>
          <h1
            id="ks3-hero-heading"
            className="text-display-sm font-heading text-foreground sm:text-display"
          >
            {tr[1]}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tr[2]}</p>

          {/* Quick stats - real curriculum counts */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {[
              { label: tr[15], value: String(yearCount), icon: GraduationCap },
              { label: tr[16], value: String(termCount), icon: CalendarDays },
              { label: tr[17], value: String(skillCount), icon: Compass },
              { label: tr[18], value: String(rubricCount), icon: ClipboardCheck },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2"
              >
                <stat.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── iLowerSecondary exam-hub CTA ─────────────────────────────── */}
      <section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Award className="size-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" aria-hidden="true" />
                {tr[19]}
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">
                {QUALIFICATION.title} ({QUALIFICATION.subjectCode})
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                The complete student hub for the {QUALIFICATION.paperCode} paper: the specification
                and mark scheme, skill masterclasses for every reading and writing objective,
                question-type guides, six full original practice papers, a quiz, grammar lab and
                study plan.
              </p>
            </div>
          </div>
          <Button variant="default" size="lg" render={<Link href="/ks3/ilowersecondary" />}>
            {tr[20]}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ── The three years ──────────────────────────────────────────── */}
      <section aria-labelledby="ks3-years-heading">
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          <h2 id="ks3-years-heading" className="text-heading-lg font-heading text-foreground">
            {tr[3]}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {yearSections.map((section, idx) => {
            const yearNumber = KS3.years[idx].number
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
                  >
                    <section.icon className={`size-5 ${section.colour}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <span className="text-caption text-muted-foreground">{section.caption}</span>
                  </div>
                </div>

                <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {section.desc}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {tr[4]} {yearNumber}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Reference & standards ────────────────────────────────────── */}
      <section aria-labelledby="ks3-reference-heading">
        <div className="mb-5 flex items-center gap-3">
          <Compass className="size-5 text-primary" aria-hidden="true" />
          <h2 id="ks3-reference-heading" className="text-heading-lg font-heading text-foreground">
            {tr[21]}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {referenceSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
                >
                  <section.icon className={`size-5 ${section.colour}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <span className="text-caption text-muted-foreground">{section.caption}</span>
                </div>
              </div>

              <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {section.desc}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {tr[22]}
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Start CTA ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <PenTool className="mx-auto mb-3 size-8 text-primary" aria-hidden="true" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {tr[27]} {yearLabelTr[7]}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">{tr[26]}</p>
        <Button variant="default" size="lg" className="mt-5" render={<Link href="/ks3/year-7" />}>
          {tr[4]} 7 - {tr[14]}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
