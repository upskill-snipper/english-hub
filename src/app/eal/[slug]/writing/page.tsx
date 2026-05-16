/**
 * EAL Topic — Writing skill route (server-rendered shell).
 *
 * Phase 2: replaces the "Coming soon" stub with the AI-assisted CEFR
 * productive-skill assessor. This stays a thin server component —
 * resolve + 404 the topic, set brand-free metadata — and delegates the
 * interactive assessment UI to <CEFRAssessClient>.
 *
 * Methodology framing: Cambridge English Qualifications writing-task
 * shape + Council of Europe CEFR descriptors (no third-party content
 * copied).
 */
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { findEALTopic } from '@/lib/eal/curriculum'
import { CEFRAssessClient } from '@/components/eal/CEFRAssessClient'

export default async function EALWritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = findEALTopic(slug)
  if (!topic) notFound()

  return <CEFRAssessClient slug={slug} skill="writing" />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = findEALTopic(slug)
  const title = topic ? `${topic.title.en} — Writing Assessment` : 'EAL Writing Assessment'
  const description = topic
    ? `Practise and get an AI-assisted CEFR assessment of your writing on "${topic.title.en}", pitched at ${topic.cefr}. For Arabic-speaking learners preparing for GCSE/IGCSE English.`
    : 'AI-assisted CEFR writing assessment for EAL learners preparing for GCSE/IGCSE English.'
  return {
    title,
    description,
    alternates: {
      canonical: `https://theenglishhub.app/eal/${slug}/writing`,
    },
  }
}
