/**
 * EAL Topic - Speaking skill route (server-rendered shell).
 *
 * Phase 2: replaces the "Coming soon" stub with the AI-assisted CEFR
 * productive-skill assessor. This stays a thin server component -
 * resolve + 404 the topic, set brand-free metadata - and delegates the
 * interactive assessment UI to <CEFRAssessClient> (speaking mode: the
 * learner types a transcript of what they would say).
 *
 * Methodology framing: Cambridge English Qualifications speaking-task
 * shape + Council of Europe CEFR descriptors (no third-party content
 * copied).
 */
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { findEALTopic } from '@/lib/eal/curriculum'
import { CEFRAssessClient } from '@/components/eal/CEFRAssessClient'

export default async function EALSpeakingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = findEALTopic(slug)
  if (!topic) notFound()

  return <CEFRAssessClient slug={slug} skill="speaking" />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = findEALTopic(slug)
  const title = topic ? `${topic.title.en} - Speaking Assessment` : 'EAL Speaking Assessment'
  const description = topic
    ? `Practise and get an AI-assisted CEFR assessment of your spoken response on "${topic.title.en}", pitched at ${topic.cefr}. For Arabic-speaking learners preparing for GCSE/IGCSE English.`
    : 'AI-assisted CEFR speaking assessment for EAL learners preparing for GCSE/IGCSE English.'
  return {
    title,
    description,
    alternates: {
      canonical: `https://theenglishhub.app/eal/${slug}/speaking`,
    },
  }
}
