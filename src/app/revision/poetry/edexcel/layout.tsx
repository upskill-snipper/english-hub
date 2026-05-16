import type { Metadata } from 'next'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Edexcel GCSE poetry anthology — Time and Place + Conflict',
  description:
    'Pearson Edexcel GCSE 1ET0 poetry anthology. Both clusters covered: Time and Place, Conflict. Themes, language, and comparison practice for Paper 2.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/edexcel' },
}

export default async function EdexcelPoetryLayout({ children }: { children: React.ReactNode }) {
  // Intentionally no board guard. Users may click into this page from the
  // homepage board grid even when their saved cookie is for a different
  // (often near-name) board such as 'edexcel-igcse', 'edexcel-a-level' or
  // 'ial-edexcel'. The previous guard treated any non-'edexcel' cookie as
  // a wrong-board redirect, which silently bounced IGCSE Edexcel users to
  // /revision/poetry where the matching branch links onward to
  // /igcse/edexcel/poetry — so clicking "GCSE Pearson Edexcel" from the
  // homepage landed users on IGCSE Lit two redirects later. The page
  // itself is clearly labelled "Pearson Edexcel GCSE English Literature
  // (1ET0)", so users who navigate here from an explicit link should see
  // it. Cookie-based steering belongs on generic hubs, not on URLs the
  // user picked deliberately.
  return (
    <>
      <CourseJsonLd
        name="Pearson Edexcel GCSE English Literature poetry — 1ET0 anthology"
        description="The Pearson Edexcel GCSE English Literature 1ET0 poetry anthology — Conflict and Time and Place clusters. Themes, language, structure, comparison practice."
        educationalLevel="GCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/revision/poetry/edexcel"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Edexcel poetry', url: 'https://theenglishhub.app/revision/poetry/edexcel' },
        ]}
      />
      {children}
    </>
  )
}
