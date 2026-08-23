// ─── Presentation content loader (on demand) ────────────────────────────────
//
// DEFECT THIS FIXES: /school/lessons/presentation-library is a 'use client'
// page that statically imported every full slide-content data file (about
// 575 KB of source across six modules) just to render a browse list, so the
// whole slide corpus landed in the route's first-load JS.
//
// The browse list is now served by the small static index in
// ./presentation-index. This module is the only path back to the full slide
// bodies, and every heavy import below is dynamic, so webpack splits each
// year-group bundle into its own chunk that is fetched only when a teacher
// actually downloads a deck.
//
// Deliberately statically imports NOTHING at runtime - the two imports below
// are type-only and are erased at compile time.

import type { LessonPlanData, TeacherPresentation } from '@/lib/pptx/content-adapter'
import type { LessonPresentation } from '@/data/curriculum/y7-presentation-content'
import type { PresentationBundle, PresentationIndexEntry } from '@/data/presentation-index'

/**
 * Fetch the full curriculum slide content for one bundle.
 *
 * The switch is written out longhand rather than built from a template string
 * because webpack can only code-split dynamic imports whose specifier is a
 * literal it can see at build time.
 */
async function loadCurriculumBundle(
  bundle: Exclude<PresentationBundle, 'teacher'>,
): Promise<LessonPresentation[]> {
  switch (bundle) {
    case 'y7':
      return (await import('@/data/curriculum/y7-presentation-content')).y7Presentations
    case 'y8':
      return (await import('@/data/curriculum/y8-presentation-content')).y8Presentations
    case 'y9':
      return (await import('@/data/curriculum/y9-presentation-content')).y9Presentations
    case 'igcse':
      return (await import('@/data/curriculum/igcse-presentation-content')).igcsePresentations
    case 'ial':
      return (await import('@/data/curriculum/ial-presentation-content')).ialPresentations
  }
}

/**
 * Build the `LessonPlanData` payload for the PPTX generation API, loading the
 * entry's slide content on demand.
 *
 * Throws if the index and the content module have drifted apart, rather than
 * generating a deck from partial data - a school paying for this library must
 * never receive a silently truncated PowerPoint.
 */
export async function loadLessonPlanData(entry: PresentationIndexEntry): Promise<LessonPlanData> {
  const { presentationToLessonPlan, teacherPresentationToLessonPlan } =
    await import('@/lib/pptx/content-adapter')

  if (entry.bundle === 'teacher') {
    const { allTeacherPowerpointsComplete } = await import('@/data/teacher-powerpoints')
    const teacherPresentation = allTeacherPowerpointsComplete.find((tp) => tp.id === entry.id)
    if (!teacherPresentation) {
      throw new Error('Slide content for this presentation could not be loaded. Please try again.')
    }
    return teacherPresentationToLessonPlan(teacherPresentation as unknown as TeacherPresentation)
  }

  const presentations = await loadCurriculumBundle(entry.bundle)
  const presentation = presentations.find((p) => p.id === entry.id)
  if (!presentation) {
    throw new Error('Slide content for this presentation could not be loaded. Please try again.')
  }
  return presentationToLessonPlan(presentation)
}

/**
 * Warm the chunk for an entry's slide content without blocking the caller.
 *
 * Opening a preview is a strong signal that a download is next, so this hides
 * the chunk fetch behind the user's reading time. Failures are ignored on
 * purpose: this is only a hint, and `loadLessonPlanData` retries the import
 * and surfaces any real error itself.
 */
export function prefetchPresentationContent(entry: PresentationIndexEntry): void {
  const warm =
    entry.bundle === 'teacher'
      ? import('@/data/teacher-powerpoints')
      : loadCurriculumBundle(entry.bundle)
  void Promise.resolve(warm).catch(() => {})
}
