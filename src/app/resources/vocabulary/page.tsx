'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ─── Data ───────────────────────────────────────────────────── */
// Each category is keyed by i18n namespace. The page resolves titles,
// descriptions, counts and topic labels via useT() at render time so
// the AR variant is one cookie-flip away.

const CATEGORIES = [
  {
    titleKey: 'vocab.category.academic.title',
    href: '/resources/vocabulary/academic',
    descKey: 'vocab.category.academic.desc',
    countKey: 'vocab.category.academic.count',
    topicKeys: [
      'vocab.category.academic.topic.analysis',
      'vocab.category.academic.topic.evaluation',
      'vocab.category.academic.topic.comparison',
      'vocab.category.academic.topic.description',
      'vocab.category.academic.topic.replace',
    ],
    colour: 'border-primary',
    bg: 'bg-primary/5',
    iconColour: 'text-primary',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.272-.956 6.625-1.488 10.02-1.632a48.578 48.578 0 0 1 6.474.52 23.836 23.836 0 0 0-1.012-5.434m-15.482 0A23.94 23.94 0 0 1 12 3.75a23.94 23.94 0 0 1 7.74 3.397m-15.48 3A23.94 23.94 0 0 1 12 6.272a23.94 23.94 0 0 1 7.74 3.875"
        />
      </svg>
    ),
  },
  {
    titleKey: 'vocab.category.descriptive.title',
    href: '/resources/vocabulary/descriptive',
    descKey: 'vocab.category.descriptive.desc',
    countKey: 'vocab.category.descriptive.count',
    topicKeys: [
      'vocab.category.descriptive.topic.sensory',
      'vocab.category.descriptive.topic.emotion',
      'vocab.category.descriptive.topic.weather',
      'vocab.category.descriptive.topic.character',
      'vocab.category.descriptive.topic.setting',
    ],
    colour: 'border-accent',
    bg: 'bg-accent/5',
    iconColour: 'text-accent',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
  },
  {
    titleKey: 'vocab.category.analytical.title',
    href: '/resources/vocabulary/analytical',
    descKey: 'vocab.category.analytical.desc',
    countKey: 'vocab.category.analytical.count',
    topicKeys: [
      'vocab.category.analytical.topic.evaluative',
      'vocab.category.analytical.topic.tentative',
      'vocab.category.analytical.topic.comparative',
      'vocab.category.analytical.topic.methods',
    ],
    colour: 'border-primary',
    bg: 'bg-primary/5',
    iconColour: 'text-primary',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    titleKey: 'vocab.category.persuasive.title',
    href: '/resources/vocabulary/academic#persuasive',
    descKey: 'vocab.category.persuasive.desc',
    countKey: 'vocab.category.persuasive.count',
    topicKeys: [
      'vocab.category.persuasive.topic.emotive',
      'vocab.category.persuasive.topic.intensifiers',
      'vocab.category.persuasive.topic.authoritative',
      'vocab.category.persuasive.topic.connectives',
    ],
    colour: 'border-warn',
    bg: 'bg-warn/5',
    iconColour: 'text-warn',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        />
      </svg>
    ),
  },
]

// The upgrade-words table is intentionally Latin-only: it teaches English
// vocabulary by definition. We keep the raw English data even in AR mode.
const UPGRADE_WORDS = [
  { weak: 'good', upgrades: ['effective', 'compelling', 'proficient', 'commendable', 'exemplary'] },
  { weak: 'bad', upgrades: ['detrimental', 'inadequate', 'flawed', 'deficient', 'problematic'] },
  { weak: 'nice', upgrades: ['pleasant', 'agreeable', 'delightful', 'refined', 'appealing'] },
  { weak: 'shows', upgrades: ['demonstrates', 'illustrates', 'conveys', 'reveals', 'exemplifies'] },
  { weak: 'says', upgrades: ['asserts', 'contends', 'declares', 'maintains', 'articulates'] },
  {
    weak: 'big',
    upgrades: ['substantial', 'considerable', 'significant', 'immense', 'monumental'],
  },
  {
    weak: 'very',
    upgrades: ['exceedingly', 'remarkably', 'profoundly', 'considerably', 'notably'],
  },
  { weak: 'a lot', upgrades: ['numerous', 'extensive', 'abundant', 'copious', 'substantial'] },
]

/* ─── Component ─────────────────────────────────────────────── */

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

export default function VocabularyHubPage() {
  const t = useT()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUpgrades = UPGRADE_WORDS.filter(
    (w) =>
      w.weak.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.upgrades.some((u) => u.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {t('vocab.hero.eyebrow')}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('vocab.hero.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('vocab.hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resources/vocabulary/academic"
              className="btn-accent rounded-lg px-6 py-3 text-sm font-semibold shadow-lg"
            >
              {t('vocab.cta.academic')}
            </Link>
            <Link
              href="/resources/vocabulary/descriptive"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {t('vocab.cta.descriptive')}
            </Link>
            <Link
              href="/resources/vocabulary/analytical"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {t('vocab.cta.analytical')}
            </Link>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.titleKey}
              href={c.href}
              className={`group flex flex-col rounded-2xl border-2 ${c.colour} ${c.bg} p-8 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className={c.iconColour}>{c.icon}</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {t(c.countKey)} {t('vocab.card.count_suffix')}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {t(c.titleKey)}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(c.descKey)}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.topicKeys.map((tk) => (
                  <li
                    key={tk}
                    className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-md"
                  >
                    {t(tk)}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                {t('vocab.card.explore_cta')} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upgrade your vocabulary interactive section */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            {t('vocab.upgrade.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            {t('vocab.upgrade.subtitle')}
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder={t('vocab.upgrade.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm shadow-md transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Upgrade cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredUpgrades.map((w) => (
              <div key={w.weak} className="rounded-xl border border-border bg-card p-5 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400 line-through">
                    {w.weak}
                  </span>
                  <svg
                    className="h-4 w-4 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {w.upgrades.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="font-medium text-muted-foreground">{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {filteredUpgrades.length === 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              {t('vocab.upgrade.no_matches')}
            </p>
          )}
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">{t('vocab.continue.heading')}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              titleKey: 'vocab.continue.writing_skills.title',
              descKey: 'vocab.continue.writing_skills.desc',
              href: '/resources/writing-skills',
            },
            {
              titleKey: 'vocab.continue.techniques.title',
              descKey: 'vocab.continue.techniques.desc',
              href: '/resources/techniques',
            },
            {
              titleKey: 'vocab.continue.all.title',
              descKey: 'vocab.continue.all.desc',
              href: '/resources',
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {t(link.titleKey)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(link.descKey)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
