/**
 * /courses — server-rendered catalogue (SEO item #23).
 *
 * This page used to be 'use client' with a `useEffect(loadAllCourses)`, which
 * meant crawlers and first-paint users saw "Loading...". Now the course list
 * is fetched on the server via `loadAllCourses()` (a memoised dynamic-import
 * aggregator — see `@/data/course-loader`) and handed to the client island as
 * `initialCourses`, so the rendered HTML contains real category + course
 * content on first byte. Interactive filters, search and board-hydration
 * still live in the client island.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { loadAllCourses } from '@/data/course-loader'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { selfCanonical } from '@/lib/seo/canonical'
import CourseCatalogueClient from './catalogue-client'

export const metadata: Metadata = {
  title: 'Courses — The English Hub',
  description:
    'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  alternates: { canonical: selfCanonical('/courses') },
}

// Revalidate the aggregated course list every 6h (21600 seconds) — the
// underlying data is code-imported so it only changes on deploy, but this
// lets ISR re-generate without a full rebuild if we ever move to DB-backed
// courses. Next.js statically analyses this value, so it MUST be a plain
// number literal (binary expressions like `60 * 60 * 6` are rejected).
export const revalidate = 21600

// Categories used for the server-rendered SEO skeleton. Kept in sync with the
// client island — if you change categories there, change them here too.
const SEO_CATEGORIES = [
  { id: 'language', label: 'Language' },
  { id: 'literature', label: 'Literature' },
  { id: 'poetry', label: 'Poetry' },
  { id: 'drama', label: 'Drama' },
  { id: 'exam-skills', label: 'Exam Skills' },
] as const

export default async function CoursesPage() {
  const courses = await loadAllCourses()
  // Top 6 — crawlers + the above-the-fold paint get real course titles + links
  // as static HTML without waiting for the client island to hydrate.
  const topSix = courses.slice(0, 6)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Courses', href: '/courses' }]} />

      {/* SEO-only: rendered on the server so Googlebot sees real content on
          first byte. Hidden from sighted users because the client island
          renders a richer, interactive version of the same data immediately
          after hydration. `aria-hidden` + `sr-only` keeps it accessible to
          crawlers while avoiding duplicate content for assistive tech. */}
      <div className="sr-only" aria-hidden="true" data-seo-skeleton>
        <h1>English Courses — KS3, GCSE, IGCSE</h1>
        <p>
          Structured English courses across Language, Literature, Poetry, Drama and Exam Skills
          for every major UK exam board.
        </p>
        <h2>Categories</h2>
        <ul>
          {SEO_CATEGORIES.map((c) => (
            <li key={c.id}>{c.label}</li>
          ))}
        </ul>
        <h2>Featured courses</h2>
        <ul>
          {topSix.map((c) => (
            <li key={c.id}>
              <Link href={`/courses/${c.id}`}>{c.title}</Link>
              {c.subtitle ? ` — ${c.subtitle}` : null}
            </li>
          ))}
        </ul>
      </div>

      <CourseCatalogueClient initialCourses={courses} />
    </>
  )
}
