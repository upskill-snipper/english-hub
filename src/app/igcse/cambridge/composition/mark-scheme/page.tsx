import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Sparkles, ChevronLeft, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Composition Mark Scheme — Cambridge IGCSE 0500 / 0990',
  description:
    'Cambridge IGCSE 0500 / 0990 Paper 2 composition mark scheme explained. Content and structure (16), style and accuracy (24), with band descriptors.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/mark-scheme',
  },
}

const contentBands = [
  {
    band: '6',
    marks: '14–16',
    label: 'Highly skilful',
    descriptors: [
      'Highly effective and consistently well-sequenced structure.',
      'Content is imaginative, developed and engages the reader throughout.',
      'Ideas are consistently original, coherent and compelling.',
      'Shape is deliberate: strong opening, controlled development, echoed ending.',
    ],
  },
  {
    band: '5',
    marks: '11–13',
    label: 'Skilful',
    descriptors: [
      'Effective structure with clear development.',
      'Content is engaging and well-chosen.',
      'Ideas are coherent and often original.',
      'Shape is evident even if less deliberate than Band 6.',
    ],
  },
  {
    band: '4',
    marks: '8–10',
    label: 'Competent',
    descriptors: [
      'Structure is organised with a clear sequence.',
      'Content is relevant and generally engaging.',
      'Ideas are usually coherent, occasionally insightful.',
      'Opening and closing are present but not notably linked.',
    ],
  },
  {
    band: '3',
    marks: '5–7',
    label: 'Straightforward',
    descriptors: [
      'Structure is simple but evident.',
      'Content is relevant, mostly predictable.',
      'Ideas are clear but not developed.',
      'Paragraphing is used but without deliberate shape.',
    ],
  },
  {
    band: '2',
    marks: '3–4',
    label: 'Limited',
    descriptors: [
      'Structure is weak or inconsistent.',
      'Content is thin or partially relevant.',
      'Ideas are listed rather than developed.',
    ],
  },
  {
    band: '1',
    marks: '1–2',
    label: 'Basic',
    descriptors: [
      'Very little structure or development.',
      'Content is minimal or largely irrelevant.',
    ],
  },
]

const styleBands = [
  {
    band: '6',
    marks: '22–24',
    label: 'Highly skilful',
    descriptors: [
      'A wide range of ambitious vocabulary used precisely for effect.',
      'A wide range of sentence structures used deliberately.',
      'Spelling, punctuation and grammar are consistently accurate.',
      'Register and style are consistently appropriate and confident.',
    ],
  },
  {
    band: '5',
    marks: '18–21',
    label: 'Skilful',
    descriptors: [
      'A range of ambitious vocabulary used effectively.',
      'Sentence structures are varied and usually effective.',
      'Spelling, punctuation and grammar are accurate with very occasional errors.',
      'Style is confident.',
    ],
  },
  {
    band: '4',
    marks: '14–17',
    label: 'Competent',
    descriptors: [
      'Vocabulary is mostly clear and sometimes ambitious.',
      'Sentence structures show some variety.',
      'Spelling, punctuation and grammar are generally accurate; errors rarely impede meaning.',
    ],
  },
  {
    band: '3',
    marks: '10–13',
    label: 'Straightforward',
    descriptors: [
      'Vocabulary is mostly simple but usually correct.',
      'Some attempt at sentence variety.',
      'Errors are frequent but meaning remains clear.',
    ],
  },
  {
    band: '2',
    marks: '6–9',
    label: 'Limited',
    descriptors: [
      'Vocabulary is simple and often imprecise.',
      'Sentence structures are repetitive.',
      'Errors are frequent and sometimes impede meaning.',
    ],
  },
  {
    band: '1',
    marks: '1–5',
    label: 'Basic',
    descriptors: [
      'Vocabulary is very limited.',
      'Sentence structures are very repetitive.',
      'Errors impede meaning throughout.',
    ],
  },
]

export default function MarkSchemePage() {
  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition" />}
      >
        <ChevronLeft className="size-3.5" />
        Back to composition
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">0500 / 0990</Badge>
            <Badge variant="secondary">Paper 2 Section B</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Composition mark scheme
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Cambridge IGCSE 0500 / 0990 Paper 2 Section B is marked out of
            40, in two parts:{' '}
            <strong className="text-foreground">16 for content and
            structure</strong> and{' '}
            <strong className="text-foreground">24 for style and
            accuracy</strong>. Understanding the split is the fastest way to
            stop losing marks on the wrong things.
          </p>
        </div>
      </section>

      {/* Weighting */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="size-5 text-primary" />
                <CardTitle className="text-heading-sm font-heading">
                  Content and structure
                </CardTitle>
              </div>
              <p className="pt-1 text-body-xs uppercase tracking-wide text-muted-foreground">
                40% of the composition mark
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-body-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">16 marks.</strong> Is your
                composition well-shaped? Does it develop an idea? Does it
                engage the reader from opening to closing?
              </p>
              <p>Key questions examiners ask:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Does the piece have a clear shape — beginning, middle, end?</li>
                <li>Are paragraphs sequenced with purpose?</li>
                <li>Is there originality in the ideas or the angle?</li>
                <li>Does the ending feel earned, not tacked on?</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-primary" />
                <CardTitle className="text-heading-sm font-heading">
                  Style and accuracy
                </CardTitle>
              </div>
              <p className="pt-1 text-body-xs uppercase tracking-wide text-muted-foreground">
                60% of the composition mark
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-body-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">24 marks.</strong> This is
                the bigger pillar. It rewards vocabulary range, sentence
                variety, technical accuracy, and a confident register.
              </p>
              <p>Key questions examiners ask:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Is the vocabulary precise and sometimes ambitious?</li>
                <li>Are sentence structures varied and controlled?</li>
                <li>Are spelling, punctuation and grammar secure?</li>
                <li>Is the register (formal, informal, narrative) consistent?</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content bands */}
      <section>
        <h2 className="text-heading-lg font-heading text-foreground">
          Content and structure — band descriptors
        </h2>
        <div className="mt-5 space-y-3">
          {contentBands.map((b) => (
            <Card key={b.band}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                      {b.band}
                    </div>
                    <CardTitle className="text-heading-sm font-heading">
                      {b.label}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary">{b.marks} marks</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {b.descriptors.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Style bands */}
      <section>
        <h2 className="text-heading-lg font-heading text-foreground">
          Style and accuracy — band descriptors
        </h2>
        <div className="mt-5 space-y-3">
          {styleBands.map((b) => (
            <Card key={b.band}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                      {b.band}
                    </div>
                    <CardTitle className="text-heading-sm font-heading">
                      {b.label}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary">{b.marks} marks</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {b.descriptors.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How to push up a band */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          How to push up a band
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-sm font-semibold text-foreground">
              From Band 4 to Band 5 (content)
            </p>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Make the opening and closing echo. Cut any paragraph that does
              not move the shape forward. Add one unexpected detail per
              paragraph.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-sm font-semibold text-foreground">
              From Band 4 to Band 5 (style)
            </p>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Replace five vague words with precise ones. Break one long
              sentence into two or three. Add one short sentence per
              paragraph.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-sm font-semibold text-foreground">
              From Band 5 to Band 6 (content)
            </p>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Build and sustain an extended metaphor across the whole piece.
              Invert the opening image in the closing line.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-sm font-semibold text-foreground">
              From Band 5 to Band 6 (style)
            </p>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Use one rhetorical device per piece — tricolon, anaphora or
              asyndeton — and hold register steady from first line to last.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6 text-body-xs text-muted-foreground">
        <p>
          Band descriptors are paraphrased for clarity and are not the
          official Cambridge mark scheme wording. Always refer to the
          current Cambridge 0500 / 0990 specification and published mark
          schemes for authoritative criteria.
        </p>
      </section>
    </div>
  )
}
