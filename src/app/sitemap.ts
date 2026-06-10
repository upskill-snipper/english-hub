import { MetadataRoute } from 'next'
import { ANALYSIS_PAGES } from '@/data/analysis'
import { allCourses } from '@/data/courses'
import { getBlogSlugs } from '@/lib/blog/posts'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { EAL } from '@/lib/eal/curriculum'
import { ALL_LESSONS } from '@/lib/ielts/lessons'
import { KS3 } from '@/lib/ks3/curriculum'
import { getAllLessonPlans } from '@/lib/lesson-plans/list'
import { getPrintableSlugs } from '@/lib/printables/list'
import staticRoutes from '@/lib/seo/static-routes.json'

// ============================================================
// Sitemap — filesystem-driven since 2026-06-10.
//
// The previous implementation was a ~1,450-line hand-maintained URL
// list that had drifted ~200 public pages behind the real route tree
// (every new section shipped without a sitemap entry) and listed three
// redirecting `syllabus` URLs. That drift is what produced the large
// "Discovered / Crawled — currently not indexed" backlog in Search
// Console.
//
// Static routes now come from src/lib/seo/static-routes.json, generated
// by scripts/generate-sitemap-routes.mjs (npm prebuild hook) from
// src/app/**/page.tsx minus one explicit exclusion policy (robots-
// disallowed sections, redirect sources, noindex user tools). Dynamic
// routes ([slug] pages) are appended from their data sources below so
// new content appears automatically.
//
// Everything goes through a Map keyed by URL — duplicates collapse and
// the LAST writer wins, so the DEMOTED/OVERRIDES maps at the bottom can
// adjust priority for legacy content without removing it.
// ============================================================

const BASE = 'https://theenglishhub.app'

type Entry = MetadataRoute.Sitemap[number]
type ChangeFreq = NonNullable<Entry['changeFrequency']>

// Hand-tuned priorities for the pages that matter most commercially.
const PRIORITY_OVERRIDES: Record<string, number> = {
  '/': 1,
  '/pricing': 0.9,
  '/schools': 0.9,
  '/school-pilot': 0.9,
  '/courses': 0.9,
  '/resources': 0.9,
  '/ielts': 0.9,
  '/revision': 0.9,
  '/igcse': 0.85,
  '/eal': 0.85,
  '/ks3': 0.85,
  '/teachers': 0.8,
  '/students': 0.8,
  '/demo': 0.8,
  '/demo/school': 0.8,
  '/qatar-igcse-english': 0.8,
  '/gcc-igcse-english': 0.8,
}

// Legacy content kept reachable for archived study traffic but demoted
// so it is never promoted over current-spec content.
const DEMOTED: Record<string, { priority: number; changeFrequency: ChangeFreq }> =
  Object.fromEntries(
    [
      // Eduqas pre-2025 anthology poems (not in the 2025 cluster).
      'dulce-et-decorum-est',
      'the-soldier',
      'london',
      'ozymandias',
      'the-prelude',
      'a-wife-in-london',
      'sonnet-43',
      'to-autumn',
    ]
      .map((p) => [
        `/revision/poetry/eduqas/${p}`,
        { priority: 0.1, changeFrequency: 'yearly' as ChangeFreq },
      ])
      .concat(
        // Edexcel IGCSE poems outside the current 4ET1 Anthology Issue 2.
        ['cousin-kate', 'piano', 'the-man-he-killed'].map((p) => [
          `/igcse/edexcel/poetry/${p}`,
          { priority: 0.3, changeFrequency: 'yearly' as ChangeFreq },
        ]),
      ),
  )

/** Depth-based defaults: hubs high + weekly, leaves lower + monthly. */
function defaults(route: string): { priority: number; changeFrequency: ChangeFreq } {
  const depth = route === '/' ? 0 : route.split('/').length - 1
  if (depth <= 1) return { priority: 0.8, changeFrequency: 'weekly' }
  if (depth === 2) return { priority: 0.7, changeFrequency: 'weekly' }
  if (depth === 3) return { priority: 0.6, changeFrequency: 'monthly' }
  return { priority: 0.5, changeFrequency: 'monthly' }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const entries = new Map<string, Entry>()

  const add = (route: string, opts: Partial<Entry> = {}) => {
    const d = defaults(route)
    const demoted = DEMOTED[route]
    const override = PRIORITY_OVERRIDES[route]
    entries.set(route, {
      url: route === '/' ? BASE : `${BASE}${route}`,
      lastModified: now,
      changeFrequency:
        demoted?.changeFrequency ?? (opts.changeFrequency as ChangeFreq) ?? d.changeFrequency,
      priority: demoted?.priority ?? override ?? opts.priority ?? d.priority,
    })
  }

  // 1. Every indexable static route, straight from the filesystem scan.
  for (const route of staticRoutes as string[]) add(route)

  // 2. Dynamic routes from their data sources.
  for (const course of allCourses) add(`/courses/${course.id}`, { priority: 0.8 })
  for (const slug of getBlogSlugs())
    add(`/blog/${slug}`, { priority: 0.6, changeFrequency: 'monthly' })

  // Set texts: /revision/texts/[slug] serves any SET_TEXTS slug that has no
  // dedicated static page. NOTE: /resources/revision-notes/[slug] is a
  // noindexed in-production placeholder for slugs without a static page, so
  // the dynamic route contributes nothing here — only the static
  // /resources/revision-notes/<dir> pages (already in static-routes.json)
  // are listed.
  for (const text of SET_TEXTS) {
    add(`/revision/texts/${text.slug}`, { priority: 0.7, changeFrequency: 'monthly' })
  }

  // Pearson IGCSE Language A poetry anthology (mirrors the page's
  // generateStaticParams filter).
  for (const text of SET_TEXTS) {
    if (text.category === 'poetry-anthology' && text.boards.includes('edexcel-igcse-lang')) {
      add(`/revision/poetry/pearson-igcse/${text.slug}`, {
        priority: 0.6,
        changeFrequency: 'monthly',
      })
    }
  }

  // Analysis catch-all pages ([category, article] slug pairs).
  for (const page of ANALYSIS_PAGES) {
    add(`/analysis/${page.slug.join('/')}`, { priority: 0.6, changeFrequency: 'monthly' })
  }

  // KS3 curriculum years (/ks3/year-7 …). Term/week drill-downs are
  // crawlable from the year pages and intentionally not sitemapped.
  for (const year of KS3.years) add(`/ks3/year-${year.number}`, { priority: 0.7 })

  // EAL: topic hubs and the four skill pages. Banded /level/* views are NOT
  // listed — b1/b2/c1 are noindex everywhere and a2 is noindex on half the
  // topics (grammar topics), so the level variants stay out wholesale.
  for (const topic of EAL.topics) {
    add(`/eal/${topic.id}`, { priority: 0.6, changeFrequency: 'monthly' })
    for (const skill of ['reading', 'writing', 'listening', 'speaking']) {
      add(`/eal/${topic.id}/${skill}`, { priority: 0.5, changeFrequency: 'monthly' })
    }
  }

  // IELTS lesson library.
  for (const lesson of ALL_LESSONS) {
    add(`/ielts/learn/${lesson.skill}/${lesson.slug}`, {
      priority: 0.5,
      changeFrequency: 'monthly',
    })
  }

  // Teaching library: lesson plans + printables.
  for (const plan of getAllLessonPlans()) {
    add(`/resources/teaching/lesson-plans/${plan.slug}`, {
      priority: 0.6,
      changeFrequency: 'monthly',
    })
  }
  for (const slug of await getPrintableSlugs()) {
    add(`/resources/teaching/printables/${slug}`, { priority: 0.6, changeFrequency: 'monthly' })
  }

  return [...entries.values()]
}
