import { CourseJsonLd } from '@/components/seo/json-ld'
import EdexcelPoetryHubPage from './page-client'

/**
 * A SERVER wrapper exists only to hold this page's own structured data.
 *
 * The Course node below used to live in `layout.tsx`, which wraps every route
 * beneath it, so /revision/poetry/edexcel/conflict,
 * /revision/poetry/edexcel/time-and-place and
 * /revision/poetry/edexcel/essay-plans each declared themselves to be
 * https://theenglishhub.app/revision/poetry/edexcel. Those cluster pages are
 * the ones a search for "Edexcel Conflict poetry anthology" should reach, and
 * their structured data named the hub instead.
 *
 * The hub page itself is a client component, so the node cannot live in it
 * directly without losing server rendering. Hence this wrapper.
 */
export default function Page() {
  return (
    <>
      <CourseJsonLd
        name="Pearson Edexcel GCSE English Literature poetry - 1ET0 anthology"
        description="The Pearson Edexcel GCSE English Literature 1ET0 poetry anthology - Conflict and Time and Place clusters. Themes, language, structure, comparison practice."
        educationalLevel="GCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/revision/poetry/edexcel"
      />
      <EdexcelPoetryHubPage />
    </>
  )
}
