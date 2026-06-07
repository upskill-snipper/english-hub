import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Sparkles, Info, Equal, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Language A vs Language B - What is the difference? | Cambridge IGCSE | The English Hub',
    description:
      'Cambridge IGCSE Language A and Language B First Language English are the same syllabus with different grade scales. Full comparison of content, papers, objectives and grading.',
  },
  title: 'Language A vs Language B - What is the difference? | Cambridge IGCSE',
  description:
    'Cambridge IGCSE Language A and Language B First Language English are the same syllabus with different grade scales. Full comparison of content, papers, objectives and grading.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/difference-vs-0500',
  },
}

const sameRows = [
  {
    label: 'Syllabus content',
    value: 'Identical - same reading and writing skills taught',
  },
  {
    label: 'Papers',
    value: 'Paper 1 Reading (2h) and Paper 2 Writing (2h)',
  },
  {
    label: 'Assessment objectives',
    value: 'Reading skills, Writing skills - same weighting',
  },
  {
    label: 'Marks per paper',
    value: '80 marks per paper, 160 total',
  },
  {
    label: 'Question styles',
    value: 'Comprehension, language analysis, summary, directed writing, composition',
  },
  {
    label: 'Examiner training & standardisation',
    value: 'Same Cambridge examiners mark both Language A and Language B',
  },
]

const differentRows = [
  {
    label: 'Grading scale',
    a: 'Language A: A*, A, B, C, D, E, F, G',
    b: 'Language B: 9, 8, 7, 6, 5, 4, 3, 2, 1',
  },
  {
    label: 'Reporting',
    a: 'Language A: Letter grades on certificate',
    b: 'Language B: Numerical grades aligned with reformed UK GCSE',
  },
  {
    label: 'Top grade',
    a: 'Language A: A* (approximately 75%+)',
    b: 'Language B: 9 (approximately 85%+ - more selective)',
  },
  {
    label: 'Typical use',
    a: 'Language A: International schools reporting in A*-G',
    b: 'Language B: UK international schools, IB feeder schools reporting in 9-1',
  },
]

export default async function Difference0990vs0500Page() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      {/* Back link */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_lang_b_hub')}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_lang_b')}
            </Badge>
            <Badge variant="secondary">Explainer</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Language A vs Language B: the only thing that changes is the grade
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            If you&apos;ve been told to revise for one and then found the other in your exam entry,
            relax. Cambridge IGCSE Language A and Language B First Language English are the{' '}
            <strong className="text-foreground">same syllabus, same papers, same questions</strong>.
            The only difference is how your final result is reported: 9-1 for Language B, A*-G for
            Language A.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Equal className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">In one sentence</h2>
        </div>
        <p className="text-body-lg text-foreground leading-relaxed">
          <strong>Language B = Language A + 9-1 grading.</strong> Same content. Same papers. Same
          mark scheme. Only the grades on your certificate change.
        </p>
        <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" />
            <p className="text-body-sm text-foreground">
              Cambridge designed Language B for schools that wanted alignment with the reformed UK
              GCSE numerical system introduced in England in 2017. The specification document for
              Language B is almost word-for-word identical to Language A.
            </p>
          </div>
        </div>
      </section>

      {/* What is the same */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">What is exactly the same</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <ul className="divide-y divide-border/40">
            {sameRows.map((r) => (
              <li
                key={r.label}
                className="flex flex-col gap-1 p-5 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="w-full shrink-0 text-body-sm font-semibold text-foreground sm:w-56">
                  {r.label}
                </span>
                <span className="text-body-sm text-muted-foreground">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What is different */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">What actually changes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {differentRows.map((r) => (
            <Card key={r.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-body font-semibold">{r.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs text-muted-foreground">{r.a}</p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <p className="text-body-xs text-foreground">{r.b}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Practical implications */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          What this means for your revision
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Use Language A resources freely.</strong> Past
              papers, mark schemes and examiner reports for Language A are valid revision material
              for Language B candidates - the questions and mark schemes are interchangeable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Target by grade, not by letter.</strong> Use our{' '}
              <Link
                href="/igcse/cambridge/0990/grade-conversion"
                className="text-primary underline-offset-2 hover:underline"
              >
                9-1 conversion table
              </Link>{' '}
              to translate any A*-G advice into the grade you&apos;re aiming for.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Grade 9 is harder than A*.</strong> On the 9-1
              scale the top grade is more selective. If you were aiming for A*, aim now for a strong
              8 or 9 - read our{' '}
              <Link
                href="/igcse/cambridge/0990/grade-9-guide"
                className="text-primary underline-offset-2 hover:underline"
              >
                Grade 9 guide
              </Link>
              .
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Check your exam entry.</strong> Your school will
              have entered you for either Language A or Language B. It determines what appears on
              the certificate, not what you need to know.
            </span>
          </li>
        </ul>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Keep going</h2>
        <p className="mt-2 text-body-sm text-muted-foreground">
          Dig into the detail of the syllabus, the papers or how to target a specific grade.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-conversion" />}
          >
            9-1 grade conversion
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/paper-1" />}
          >
            Paper 1 Reading
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-body-xs text-muted-foreground">
        Aligns with Cambridge syllabus 0990
      </footer>
    </div>
  )
}
