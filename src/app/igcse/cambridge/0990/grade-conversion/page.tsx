import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, Target, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: '9-1 vs A*-G grade conversion | Cambridge IGCSE Language B | The English Hub',
    description:
      'Full conversion table between Cambridge IGCSE Language B 9-1 grades and Language A A*-G grades. Understand how your numerical grade compares to the letter scale.',
  },
  title: '9-1 vs A*-G grade conversion | Cambridge IGCSE Language B',
  description:
    'Full conversion table between Cambridge IGCSE Language B 9-1 grades and Language A A*-G grades. Understand how your numerical grade compares to the letter scale.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/grade-conversion',
  },
}

const rows = [
  {
    num: '9',
    letter: 'Above A*',
    description:
      'More selective than A*. Awarded to roughly the top 4% of entries. Sophisticated analysis, controlled style, distinctive voice.',
    tone: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    num: '8',
    letter: 'A / A*',
    description:
      'Comfortably above the old A boundary and reaching into A* territory. Consistent analytical depth and accurate writing.',
    tone: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    num: '7',
    letter: 'A',
    description:
      'Equivalent to the old A grade. Confident, clear analysis and well-structured writing throughout.',
    tone: 'bg-primary/5 text-primary border-primary/15',
  },
  {
    num: '6',
    letter: 'B',
    description:
      'Solid upper-middle performance. Relevant comment, generally accurate writing with some ambition.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
  {
    num: '5',
    letter: 'B / C',
    description:
      '“Strong pass”. Overlaps the old B-C boundary. Clear understanding, some analytical comment, mostly accurate writing.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
  {
    num: '4',
    letter: 'C',
    description:
      'Standard pass. Equivalent to the old C grade. Required by many sixth-form colleges as a minimum.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
  {
    num: '3',
    letter: 'D',
    description:
      'Basic understanding of texts and task, writing that communicates meaning with some errors.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
  {
    num: '2',
    letter: 'E',
    description:
      'Limited response. Some engagement with the text but significant weaknesses in analysis or accuracy.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
  {
    num: '1',
    letter: 'F / G',
    description:
      'Lowest pass. Basic communication of ideas with substantial weaknesses throughout.',
    tone: 'bg-muted text-muted-foreground border-border',
  },
]

export default async function GradeConversionPage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
          <ArrowLeft className="size-3.5" />
          Back to IGCSE Language B hub
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE Language B
            </Badge>
            <Badge variant="secondary">9-1 vs A*-G</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            9-1 vs A*-G: full grade conversion
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Cambridge IGCSE Language B reports results on the 9-1 numerical scale, while Language A
            uses A*-G. The two syllabuses share a mark scheme - so you can map every letter to a
            number. Use this table to translate between the two.
          </p>
        </div>
      </section>

      {/* Table */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Full conversion table</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead className="border-b border-border/60 bg-muted/40 text-body-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">IGCSE Language B grade</th>
                  <th className="px-4 py-3 text-left">Language A equivalent</th>
                  <th className="px-4 py-3 text-left">What it represents</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.num} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex size-9 items-center justify-center rounded-lg border text-body-sm font-semibold ${r.tone}`}
                      >
                        {r.num}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-medium text-foreground">{r.letter}</td>
                    <td className="px-4 py-4 text-muted-foreground">{r.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key differences callout */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-md font-heading text-foreground">
              Why Grade 9 is harder than A*
            </h2>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              The reformed 9-1 scale was designed to stretch the top end. Under A*-G, an A* was
              awarded to roughly 8% of entries nationally. Grade 9 is set higher - typically around
              the top 4%. In practice, an A* student under 0500 is more likely to get an 8, with 9
              reserved for genuinely outstanding work.
            </p>
          </div>
        </div>
      </section>

      {/* Passing notes */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Which grade do you need?</h2>
        <dl className="mt-4 space-y-4 text-body-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-full shrink-0 font-semibold text-foreground sm:w-48">
              Sixth form / A-level entry
            </dt>
            <dd className="text-muted-foreground">
              Most UK sixth forms require Grade 5 or 6 in English as a minimum; competitive schools
              expect 7+.
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-full shrink-0 font-semibold text-foreground sm:w-48">
              IB Diploma entry
            </dt>
            <dd className="text-muted-foreground">
              IB schools typically ask for a 5 or above, aligning with Language A Studies.
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-full shrink-0 font-semibold text-foreground sm:w-48">Standard pass</dt>
            <dd className="text-muted-foreground">
              Grade 4 is officially the standard pass. Grade 5 is often called a strong pass.
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-full shrink-0 font-semibold text-foreground sm:w-48">
              Top universities
            </dt>
            <dd className="text-muted-foreground">
              Competitive courses often expect 7 or higher in English at IGCSE, alongside strong
              A-level or IB results.
            </dd>
          </div>
        </dl>
      </section>

      {/* Next */}
      <section className="flex flex-wrap gap-2">
        <Button size="sm" render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}>
          How to hit Grade 9
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          render={<Link href="/igcse/cambridge/0990/grade-7-guide" />}
        >
          How to hit Grade 7
        </Button>
        <Button
          size="sm"
          variant="outline"
          render={<Link href="/igcse/cambridge/0990/grade-5-guide" />}
        >
          How to pass with Grade 5
        </Button>
      </section>
    </div>
  )
}
