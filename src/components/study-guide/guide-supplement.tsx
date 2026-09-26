import { StudyGuideSections } from './study-guide-sections'
import { StoryVisuals } from './visuals/story-visuals'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * What an existing guide page mounts to become complete: the animated
 * visual-learning block, then only the sections that page did not have.
 *
 * One component rather than two mounts so that sixty-odd pages each change by
 * one import and one line, and a page cannot end up with the sections and no
 * visuals, or the other way round.
 */
export async function GuideSupplement({ guide }: { guide: StudyGuide }) {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-0">
      <StoryVisuals guide={guide} />
      <StudyGuideSections guide={guide} supplement />
    </div>
  )
}
