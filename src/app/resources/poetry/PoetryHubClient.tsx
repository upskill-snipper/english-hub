'use client'

import Link from 'next/link'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { useT } from '@/lib/i18n/use-t'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ANTHOLOGY_SECTIONS = [
  {
    titleKey: 'resources.poetry.anth.pac.title',
    href: '/resources/poetry/power-and-conflict',
    descKey: 'resources.poetry.anth.pac.desc',
    poems: 15,
    board: 'AQA',
  },
  {
    titleKey: 'resources.poetry.anth.lar.title',
    href: '/resources/poetry/love-and-relationships',
    descKey: 'resources.poetry.anth.lar.desc',
    poems: 15,
    board: 'AQA',
  },
]

const EDEXCEL_SECTIONS = [
  {
    titleKey: 'resources.poetry.anth.edex_conflict.title',
    href: '/revision/poetry/edexcel/conflict',
    descKey: 'resources.poetry.anth.edex_conflict.desc',
    poems: 15,
    board: 'Edexcel',
  },
  {
    titleKey: 'resources.poetry.anth.edex_tap.title',
    href: '/revision/poetry/edexcel/time-and-place',
    descKey: 'resources.poetry.anth.edex_tap.desc',
    poems: 15,
    board: 'Edexcel',
  },
]

const EDUQAS_SECTIONS = [
  {
    titleKey: 'resources.poetry.anth.eduqas.title',
    href: '/revision/poetry/eduqas',
    descKey: 'resources.poetry.anth.eduqas.desc',
    poems: 12,
    board: 'Eduqas',
  },
]

const SKILL_GUIDES = [
  {
    titleKey: 'resources.poetry.skill.techniques.title',
    href: '/resources/poetry/techniques',
    descKey: 'resources.poetry.skill.techniques.desc',
    tagKey: 'resources.poetry.skill.techniques.tag',
    icon: 'techniques' as const,
  },
  {
    titleKey: 'resources.poetry.skill.unseen.title',
    href: '/resources/poetry/unseen-poetry',
    descKey: 'resources.poetry.skill.unseen.desc',
    tagKey: 'resources.poetry.skill.unseen.tag',
    icon: 'unseen' as const,
  },
  {
    titleKey: 'resources.poetry.skill.compare.title',
    href: '/resources/poetry/techniques#comparing-poems',
    descKey: 'resources.poetry.skill.compare.desc',
    tagKey: 'resources.poetry.skill.compare.tag',
    icon: 'compare' as const,
  },
]

const TOP_TEN_POEMS = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/power-and-conflict/ozymandias',
  },
  { title: 'London', poet: 'William Blake', href: '/revision/poetry/power-and-conflict/london' },
  {
    title: 'My Last Duchess',
    poet: 'Robert Browning',
    href: '/revision/poetry/power-and-conflict/my-last-duchess',
  },
  { title: 'Remains', poet: 'Simon Armitage', href: '/revision/poetry/power-and-conflict/remains' },
  { title: 'Exposure', poet: 'Wilfred Owen', href: '/revision/poetry/power-and-conflict/exposure' },
  {
    title: "Porphyria's Lover",
    poet: 'Robert Browning',
    href: '/revision/poetry/love-and-relationships/porphyrias-lover',
  },
  {
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/love-and-relationships/neutral-tones',
  },
  {
    title: 'When We Two Parted',
    poet: 'Lord Byron',
    href: '/revision/poetry/love-and-relationships/when-we-two-parted',
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/revision/poetry/power-and-conflict/war-photographer',
  },
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred, Lord Tennyson',
    href: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
  },
]

const QUICK_TIPS = [
  {
    titleKey: 'resources.poetry.tip.memorise.title',
    textKey: 'resources.poetry.tip.memorise.text',
  },
  {
    titleKey: 'resources.poetry.tip.tech_effect.title',
    textKey: 'resources.poetry.tip.tech_effect.text',
  },
  { titleKey: 'resources.poetry.tip.compare.title', textKey: 'resources.poetry.tip.compare.text' },
  { titleKey: 'resources.poetry.tip.context.title', textKey: 'resources.poetry.tip.context.text' },
  {
    titleKey: 'resources.poetry.tip.structure.title',
    textKey: 'resources.poetry.tip.structure.text',
  },
  { titleKey: 'resources.poetry.tip.plan.title', textKey: 'resources.poetry.tip.plan.text' },
]

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

function PoemIcon() {
  return (
    <svg
      className="h-5 w-5 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

function TechniquesIcon() {
  return (
    <svg
      className="h-7 w-7 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  )
}

function UnseenIcon() {
  return (
    <svg
      className="h-7 w-7 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg
      className="h-7 w-7 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  )
}

function getSkillIcon(icon: string) {
  switch (icon) {
    case 'techniques':
      return <TechniquesIcon />
    case 'unseen':
      return <UnseenIcon />
    case 'compare':
      return <CompareIcon />
    default:
      return <TechniquesIcon />
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PoetryHubClient() {
  const t = useT()
  const { board, isHydrated } = useBoard()
  const boardConfig = getBoardConfig(board)

  // STRICT board filtering: once hydrated, only render the anthology
  // section that matches the user's selected board. While rehydrating we
  // render nothing board-specific to avoid leaking the wrong content.
  // If no board is set (fresh visitor), show AQA + Edexcel + Eduqas as
  // the default "something useful to look at" set.
  const showAQA = isHydrated && (!board || board === 'aqa')
  const showEdexcel = isHydrated && (!board || board === 'edexcel')
  const showEduqas = isHydrated && (!board || board === 'eduqas')
  const showOCR = isHydrated && board === 'ocr'
  const showEdexcelIgcse = isHydrated && board === 'edexcel-igcse'
  // Cambridge IGCSE has no set poetry anthology
  const noAnthology = isHydrated && (board === 'cambridge-0500' || board === 'cambridge-0990')

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t('resources.poetry.hero.eyebrow')}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('resources.poetry.hero.title')}
          </h1>
          {isHydrated && boardConfig && (
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {t('resources.poetry.board_prefix')} {boardConfig.shortName}
              </span>
            </div>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('resources.poetry.hero.subtitle')}
          </p>
          {isHydrated && noAnthology && (
            <div className="mx-auto mt-5 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 max-w-2xl text-left">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-clay-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p className="text-sm text-muted-foreground">
                {t('resources.poetry.hero.no_anthology_prefix')} ({boardConfig?.shortName}){' '}
                {t('resources.poetry.hero.no_anthology_suffix')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── AQA Anthology sections ───────────────────────────────── */}
      {showAQA && (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">
              {t('resources.poetry.section.aqa.title')}
            </h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              AQA
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            {t('resources.poetry.section.aqa.subtitle')}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {ANTHOLOGY_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <PoemIcon />
                  <span className="text-sm font-semibold text-foreground">
                    {section.poems} {t('resources.poetry.poems_suffix')}
                  </span>
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                    {section.board}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(section.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(section.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  {t('resources.poetry.cta.view_analysis')} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Edexcel Anthology sections ───────────────────────────── */}
      {showEdexcel && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">
              {t('resources.poetry.section.edexcel.title')}
            </h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Edexcel
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            {t('resources.poetry.section.edexcel.subtitle')}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {EDEXCEL_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <PoemIcon />
                  <span className="text-sm font-semibold text-foreground">
                    {section.poems} {t('resources.poetry.poems_suffix')}
                  </span>
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                    {section.board}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(section.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(section.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  {t('resources.poetry.cta.view_analysis')} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── WJEC Eduqas Anthology section ────────────────────────── */}
      {showEduqas && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">
              {t('resources.poetry.section.eduqas.title')}
            </h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Eduqas
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            {t('resources.poetry.section.eduqas.subtitle')}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {EDUQAS_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <PoemIcon />
                  <span className="text-sm font-semibold text-foreground">
                    {section.poems} {t('resources.poetry.poems_suffix')}
                  </span>
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                    {section.board}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(section.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(section.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  {t('resources.poetry.cta.view_analysis')} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── OCR placeholder note ─────────────────────────────────── */}
      {showOCR && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">
              {t('resources.poetry.section.ocr.title')}
            </h2>
            <p className="mt-2 text-muted-foreground">{t('resources.poetry.section.ocr.body')}</p>
          </div>
        </section>
      )}

      {/* ── Edexcel IGCSE placeholder note ───────────────────────── */}
      {showEdexcelIgcse && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">
              {t('resources.poetry.section.edex_igcse.title')}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t('resources.poetry.section.edex_igcse.body')}
            </p>
          </div>
        </section>
      )}

      {/* ── Skills guides ────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            {t('resources.poetry.skills.title')}
          </h2>
          <p className="mt-2 text-muted-foreground">{t('resources.poetry.skills.subtitle')}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  {getSkillIcon(guide.icon)}
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t(guide.tagKey)}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(guide.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(guide.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  {t('resources.poetry.cta.start_learning')} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top 10 most tested poems (AQA-specific) ──────────────── */}
      {showAQA && (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            {t('resources.poetry.top10.title')}
          </h2>
          <p className="mt-2 text-muted-foreground">{t('resources.poetry.top10.subtitle')}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {TOP_TEN_POEMS.map((poem, i) => (
              <Link
                key={poem.href}
                href={poem.href}
                className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-md transition hover:border-primary/40 hover:shadow-lg"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                    {poem.title}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{poem.poet}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Quick tips ───────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">{t('resources.poetry.tips.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('resources.poetry.tips.subtitle')}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_TIPS.map((tip) => (
              <div
                key={tip.titleKey}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{t(tip.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(tip.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How poetry is assessed ───────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">{t('resources.poetry.ao.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('resources.poetry.ao.subtitle')}</p>

          <div className="mt-6 space-y-4">
            {[
              {
                ao: 'AO1',
                detailKey: 'resources.poetry.ao.ao1.detail',
                tipKey: 'resources.poetry.ao.ao1.tip',
              },
              {
                ao: 'AO2',
                detailKey: 'resources.poetry.ao.ao2.detail',
                tipKey: 'resources.poetry.ao.ao2.tip',
              },
              {
                ao: 'AO3',
                detailKey: 'resources.poetry.ao.ao3.detail',
                tipKey: 'resources.poetry.ao.ao3.tip',
              },
            ].map((obj) => (
              <div key={obj.ao} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {obj.ao}
                  </span>
                  <div>
                    <p className="leading-relaxed text-foreground">{t(obj.detailKey)}</p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {t('resources.poetry.ao.tip_prefix')} {t(obj.tipKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
