import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  Eye,
  Search,
  BookOpen,
  Highlighter,
  Lightbulb,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Reading Techniques — IGCSE Language A Paper 1',
  description:
    'How to read IGCSE Language A Paper 1 passages efficiently. Skimming, scanning, close reading and annotating strategies for the reading exam. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/0500/paper-1/reading-techniques',
  },
}

const techniques = [
  {
    name: 'Skimming',
    icon: Eye,
    when: 'First pass — 2 minutes per passage',
    purpose:
      'Get the overall gist, topic, tone and structure of the passage before any question is attempted.',
    how: [
      'Read the title and any headings first — they signal the main topic.',
      'Read the opening and closing sentences of each paragraph.',
      'Look for signal words: but, however, therefore, in contrast.',
      'Note the writer\'s general attitude: positive, critical, neutral?',
    ],
    pitfall:
      'Do not try to understand every word. Skimming is for the big picture only.',
  },
  {
    name: 'Scanning',
    icon: Search,
    when: 'When hunting for specific information',
    purpose:
      'Find a specific detail, date, name or key word quickly to answer a short-answer question.',
    how: [
      'Know exactly what you are looking for before scanning (e.g. a number, a name).',
      'Move your finger or pen down the page in a zig-zag.',
      'Let unimportant words blur — your eye is only searching for the target.',
      'Stop, read the sentence carefully, then return to the question.',
    ],
    pitfall:
      'Do not read the whole passage word-by-word again. Scan, stop, verify, move on.',
  },
  {
    name: 'Close reading',
    icon: BookOpen,
    when: 'For language analysis (Q2) and inference',
    purpose:
      'Read slowly and deliberately to understand the writer\'s intended effects and layered meanings.',
    how: [
      'Read at quarter speed. Pause after each sentence.',
      'Ask why the writer chose this word rather than a synonym.',
      'Notice verbs, adjectives, imagery, sentence length and rhythm.',
      'Look for connotations — what does each word suggest beyond its dictionary meaning?',
    ],
    pitfall:
      'Do not fall into feature-spotting. Always link each observation to the effect on the reader.',
  },
  {
    name: 'Annotating',
    icon: Highlighter,
    when: 'While reading — integrated with other techniques',
    purpose:
      'Leave a visible trail of thoughts on the page so you can find evidence fast when writing answers.',
    how: [
      'Underline key content points (useful for summary writing).',
      'Circle powerful verbs, adjectives and images (useful for Q2).',
      'Margin notes: short labels like "fear", "contrast", "climax".',
      'Draw a vertical line next to a paragraph if it has a shift in tone.',
    ],
    pitfall:
      'Do not highlight everything. If half the passage is marked, nothing stands out.',
  },
]

export default async function ReadingTechniquesPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500/paper-1" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          Paper 1 hub
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">
          Reading techniques
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          You have 2 hours and around 2,000 words of unseen text to read.
          Use the right technique for the right job — never read every
          passage at the same speed.
        </p>
      </section>

      {/* ── Technique cards ────────────────────────────────────────── */}
      <section className="space-y-6">
        {techniques.map((tech) => {
          const Icon = tech.icon
          return (
            <Card key={tech.name}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-heading-md font-heading">
                      {tech.name}
                    </CardTitle>
                    <CardDescription>{tech.when}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Purpose:</span>{' '}
                  {tech.purpose}
                </p>
                <div>
                  <p className="mb-2 text-body-sm font-semibold text-foreground">
                    How to do it
                  </p>
                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {tech.how.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs text-foreground">
                    <span className="font-semibold">Common pitfall:</span>{' '}
                    {tech.pitfall}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* ── Practical workflow ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Putting it all together in the exam
          </h2>
        </div>
        <ol className="space-y-3 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              1
            </span>
            <span>
              <span className="font-semibold text-foreground">Skim all three passages</span> quickly
              at the start. Do not try to remember details — just get the tone and topic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              2
            </span>
            <span>
              <span className="font-semibold text-foreground">Read Q1 questions first</span>, then
              scan Text A for each answer in order.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              3
            </span>
            <span>
              <span className="font-semibold text-foreground">Close read Text B</span> for Q2.
              Annotate powerful words and link each to an effect.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              4
            </span>
            <span>
              <span className="font-semibold text-foreground">Point-spot Texts A and C</span> for Q3
              summary. Underline every discrete piece of information.
            </span>
          </li>
        </ol>
      </section>
    </div>
  )
}
