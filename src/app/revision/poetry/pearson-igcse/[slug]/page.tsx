import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SET_TEXTS, getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../../../texts/_components/stub-study-guide'

type Params = { slug: string }

const PEARSON_POEM_SLUGS = new Set(
  SET_TEXTS.filter(
    (t) => t.category === 'poetry-anthology' && t.boards.includes('edexcel-igcse-lang'),
  ).map((t) => t.slug),
)

export function generateStaticParams() {
  return Array.from(PEARSON_POEM_SLUGS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const text = getSetText(slug)
  if (!text) {
    return {
      title: 'Poem Not Found | The English Hub',
      description: 'The poem you are looking for could not be found.',
    }
  }
  return {
    title: `${text.title} — ${text.author} | Pearson IGCSE Poetry | The English Hub`,
    description: `Study notes for ${text.title} by ${text.author}. Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.`,
    alternates: {
      canonical: `https://theenglishhub.app/revision/poetry/pearson-igcse/${text.slug}`,
    },
  }
}

export default async function PearsonIgcsePoemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  if (!PEARSON_POEM_SLUGS.has(slug)) notFound()

  const text = getSetText(slug)
  if (!text) notFound()

  return (
    <StubStudyGuide
      text={text}
      backHref="/revision/poetry/pearson-igcse"
      backLabel="Back to Pearson IGCSE Poetry"
    />
  )
}
