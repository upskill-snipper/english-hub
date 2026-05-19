import type { Metadata } from 'next'
import Link from 'next/link'
import { PenLine, BookOpen, MessageSquare, BarChart3, Languages, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { BenefitGrid } from '@/components/schools/BenefitCard'

const OG =
  '/api/og?title=Practise,+improve+and+understand+English&subtitle=Clearer+feedback,+aligned+to+your+exam'

export const metadata: Metadata = {
  title: 'For Students — practise, improve and understand English',
  description:
    'Revision, essay practice, comprehension and clearer feedback aligned to the exam board your school teaches, with progress tracking across English Language and Literature.',
  alternates: { canonical: 'https://theenglishhub.app/students' },
  keywords: [
    'GCSE English revision platform',
    'IGCSE English support',
    'English essay practice feedback',
    'English revision platform for schools',
  ],
  openGraph: {
    title: 'For Students — The English Hub',
    description: 'Practise, improve and understand English with clearer feedback.',
    url: 'https://theenglishhub.app/students',
    images: [{ url: OG, width: 1200, height: 630, alt: 'The English Hub for Students' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Students', url: 'https://theenglishhub.app/students' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            For students
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Practise, improve and understand English with clearer feedback
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Revise the texts you study, practise exam-style questions and get structured feedback
            aligned to the exam board your school teaches.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/board-select" />}
            >
              Choose your exam board
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/pricing" />}
            >
              See student pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What you can do
        </h2>
        <div className="mt-10">
          <BenefitGrid
            items={[
              {
                icon: BookOpen,
                title: 'Revision',
                body: 'Revise set texts and key topics aligned to your specification.',
              },
              {
                icon: PenLine,
                title: 'Essay practice',
                body: 'Practise exam-style essays and improve before the real thing.',
              },
              {
                icon: MessageSquare,
                title: 'Clearer feedback',
                body: 'Structured, criteria-referenced feedback that explains how to improve.',
              },
              {
                icon: GraduationCap,
                title: 'Literature & language support',
                body: 'Support across English Literature and English Language.',
              },
              {
                icon: Languages,
                title: 'EAL support',
                body: 'Structured practice if English is an additional language.',
              },
              {
                icon: BarChart3,
                title: 'Progress tracking',
                body: 'See how you are progressing and where to focus next.',
              },
            ]}
          />
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Your school may already use The English Hub. If so, ask your English teacher how to get
          started.
        </p>
      </section>
    </main>
  )
}
