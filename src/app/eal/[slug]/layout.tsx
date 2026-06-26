import type { Metadata } from 'next'
import { findEALTopic } from '@/lib/eal/curriculum'

// 2026-06 de-index fix. The /eal/[slug] topic hub is a client component
// (it uses the locale hook) so it cannot export generateMetadata, and was
// therefore inheriting the /eal SECTION default — both the generic title
// ("Structured English support for EAL learners") AND the /eal canonical.
// Google saw every topic hub as a duplicate of /eal pointing its canonical
// at /eal, and dropped them from the index. This server layout supplies a
// per-topic title + description and, crucially, a SELF-referential canonical
// for the hub. Skill child routes (speaking/writing/listening/reading,
// level/[cefr]) set their own metadata which overrides these per field, so
// they keep their own canonicals.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const canonical = `https://theenglishhub.app/eal/${slug}`
  const topic = findEALTopic(slug)
  if (!topic) {
    return { alternates: { canonical } }
  }
  const title = `${topic.title.en} - EAL English for Arabic speakers`
  const description = `${topic.description.en} Bilingual EN/Arabic explanation, examples and common errors for EAL learners preparing for GCSE and IGCSE English.`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${topic.title.en} - The English Hub`,
      description,
      url: canonical,
      type: 'article',
    },
  }
}

export default function EALTopicLayout({ children }: { children: React.ReactNode }) {
  return children
}
