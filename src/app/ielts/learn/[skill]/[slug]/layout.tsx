import type { Metadata } from 'next'

import { lessonBySlug } from '@/lib/ielts/lessons'
import { levelMeta } from '@/lib/ielts/curriculum'

// Per-lesson metadata + canonical. The lesson page is a client component (it
// reads localStorage-backed completion), so it can't export `metadata` itself —
// this server layout derives a unique title, description and canonical for each
// lesson from the curriculum data. Unknown skill/slug falls back to a generic
// (still noindex-safe, indexable) library title; the page renders a graceful
// "not found" panel for that case.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string; slug: string }>
}): Promise<Metadata> {
  const { skill, slug } = await params
  const lesson = lessonBySlug(skill, slug)
  const canonical = `https://theenglishhub.app/ielts/learn/${skill}/${slug}`

  if (!lesson) {
    return {
      title: 'Lesson not found — Learn IELTS — The English Hub',
      alternates: { canonical },
      robots: { index: false, follow: true },
    }
  }

  const level = levelMeta(lesson.level)
  return {
    title: `${lesson.title} — Learn IELTS — The English Hub`,
    description: `${lesson.summary} A ${lesson.estMinutes}-minute IELTS lesson (${level.label} level).`,
    alternates: { canonical },
  }
}

export default function IeltsLessonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
