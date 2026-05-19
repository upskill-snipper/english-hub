import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  LineChart,
  ClipboardCheck,
  FileText,
  BookOpen,
  Languages,
  Target,
  ScrollText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { FeatureGrid } from '@/components/schools/FeatureGrid'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'

const OG =
  '/api/og?title=Support+every+student+without+adding+to+your+workload&subtitle=AI-assisted+feedback+for+English+teachers'

export const metadata: Metadata = {
  title: 'For Teachers — reduce workload, support every student',
  description:
    'AI-assisted feedback, homework setting, worksheet building and clearer student insight — designed to support teacher judgement and reduce repetitive workload.',
  alternates: { canonical: 'https://theenglishhub.app/teachers' },
  keywords: [
    'AI marking for English teachers',
    'teacher workload reduction EdTech',
    'English teacher feedback tool',
    'English homework setting',
  ],
  openGraph: {
    title: 'For Teachers — The English Hub',
    description: 'Support every student without adding to your workload.',
    url: 'https://theenglishhub.app/teachers',
    images: [{ url: OG, width: 1200, height: 630, alt: 'The English Hub for Teachers' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Teachers', url: 'https://theenglishhub.app/teachers' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            For teachers
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Support every student without adding to your workload
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The English Hub is designed to reduce repetitive marking, give you clearer insight into
            class weaknesses, and help you focus more time on teaching. It supports your judgement —
            it does not replace it.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/pricing" />}>
              See teacher pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/schools" />}
            >
              Bring it to your school
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What it does for you
        </h2>
        <div className="mt-10">
          <FeatureGrid
            items={[
              {
                icon: Brain,
                title: 'AI-assisted feedback',
                body: 'Structured, criteria-referenced feedback you can review, adjust and build on.',
              },
              {
                icon: LineChart,
                title: 'Class weaknesses',
                body: 'See where a class is struggling so you can target the next lesson.',
              },
              {
                icon: ClipboardCheck,
                title: 'Homework setting',
                body: 'Set specification-aligned practice in a few clicks.',
              },
              {
                icon: ScrollText,
                title: 'Worksheet & revision builder',
                body: 'Draft worksheets and revision material aligned to the specification.',
              },
              {
                icon: FileText,
                title: 'Student reports',
                body: 'Clearer progress summaries for parents’ evenings and reviews.',
              },
              {
                icon: BookOpen,
                title: 'Reading & comprehension support',
                body: 'Structured comprehension practice across key stages.',
              },
              {
                icon: Languages,
                title: 'EAL support',
                body: 'Differentiated practice to support EAL learners in your class.',
              },
              {
                icon: Target,
                title: 'Targeted revision',
                body: 'Point students at the practice that will move their grade.',
              },
            ]}
          />
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          AI-assisted feedback is designed to support your professional judgement and reduce
          repetitive workload — not to replace marking or teaching.
        </p>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
          <SchoolFAQ />
        </div>
      </section>
    </main>
  )
}
