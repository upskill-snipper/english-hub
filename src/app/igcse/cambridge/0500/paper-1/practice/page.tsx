import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, Pencil, BookOpen, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 1 Practice Passages — IGCSE Language A',
    description:
      'Three IGCSE Language A Paper 1 practice passages using public domain literary extracts from Dickens, Austen and Hardy. Full questions and model answers. Aligns with Cambridge syllabus 0500.',
  },
  title: 'Paper 1 Practice Passages — IGCSE Language A',
  description:
    'Three IGCSE Language A Paper 1 practice passages using public domain literary extracts from Dickens, Austen and Hardy. Full questions and model answers. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1/practice',
  },
}

const practiceSets = [
  {
    id: 'dickens',
    source: 'Charles Dickens — Bleak House (1853), opening',
    sourceNote: 'Public domain. Extract adapted lightly for line length.',
    passage: `London. Michaelmas Term lately over, and the Lord Chancellor sitting in Lincoln\u2019s Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill. Smoke lowering down from chimney-pots, making a soft black drizzle, with flakes of soot in it as big as full-grown snow-flakes — gone into mourning, one might imagine, for the death of the sun. Dogs, undistinguishable in mire. Horses, scarcely better; splashed to their very blinkers. Foot passengers, jostling one another\u2019s umbrellas in a general infection of ill-temper, and losing their foot-hold at street-corners, where tens of thousands of other foot passengers have been slipping and sliding since the day broke (if this day ever broke), adding new deposits to the crust upon crust of mud, sticking at those points tenaciously to the pavement, and accumulating at compound interest.`,
    questions: [
      {
        q: 'Q1. Give two words or phrases from the passage that show the weather is unpleasant. (2 marks)',
        a: 'Any two of: "Implacable November weather"; "soft black drizzle"; "flakes of soot"; "mud".',
      },
      {
        q: 'Q2. Explain, using your own words, what the writer means by "gone into mourning ... for the death of the sun". (3 marks)',
        a: 'The sky is so dark and grey that it looks as though the city is wearing funeral clothes because the sun has disappeared and will never shine again.',
      },
      {
        q: 'Q3. (Language) Analyse how the writer uses language to create a vivid impression of London. (15 marks) — outline answer.',
        a: 'Focus on: "implacable" (personifies November as merciless, uncaring); "Megalosaurus ... waddling" (prehistoric imagery suggests London has regressed to a primeval swamp); "crust upon crust" (repetition and the image of hardening layers suggest accumulated decay); "compound interest" (financial metaphor hints that the city\u2019s corruption is self-multiplying). Each choice should be linked to the reader\u2019s feeling of oppressive, almost fantastical gloom.',
      },
    ],
  },
  {
    id: 'austen',
    source: 'Jane Austen — Pride and Prejudice (1813), opening of Chapter 1',
    sourceNote: 'Public domain.',
    passage: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.

\u201cMy dear Mr. Bennet,\u201d said his lady to him one day, \u201chave you heard that Netherfield Park is let at last?\u201d Mr. Bennet replied that he had not. \u201cBut it is,\u201d returned she; \u201cfor Mrs. Long has just been here, and she told me all about it.\u201d Mr. Bennet made no answer. \u201cDo not you want to know who has taken it?\u201d cried his wife impatiently. \u201cYou want to tell me, and I have no objection to hearing it.\u201d This was invitation enough.`,
    questions: [
      {
        q: 'Q1. In your own words, explain what "a truth universally acknowledged" means here. (2 marks)',
        a: 'Something that everybody in society treats as an obvious, unchallenged fact.',
      },
      {
        q: 'Q2. What does the phrase "rightful property of some one or other of their daughters" suggest about attitudes to marriage? (3 marks)',
        a: 'It suggests that, in this community, wealthy single men are treated as objects to be claimed by local families and that marriage is viewed almost as a property transaction between households, not a matter of mutual feeling.',
      },
      {
        q: 'Q3. (Language) Analyse how Austen uses language to introduce the character of Mr Bennet. (15 marks) — outline answer.',
        a: 'Focus on: the tag "made no answer" (deliberately withholding speech suggests dry detachment); "You want to tell me, and I have no objection to hearing it" (balanced syntax and wry tone suggest an ironic, teasing intelligence); the narrator\u2019s opening aphorism ("It is a truth universally acknowledged") frames him as someone who will see through social conventions. Each point should link language choice to effect on the reader\u2019s sense of character.',
      },
    ],
  },
  {
    id: 'hardy',
    source: 'Thomas Hardy — The Return of the Native (1878), description of Egdon Heath',
    sourceNote: 'Public domain. Lightly trimmed.',
    passage: `A Saturday afternoon in November was approaching the time of twilight, and the vast tract of unenclosed wild known as Egdon Heath embrowned itself moment by moment. Overhead the hollow stretch of whitish cloud shutting out the sky was as a tent which had the whole heath for its floor.

The heaven being spread with this pallid screen and the earth with the darkest vegetation, their meeting-line at the horizon was clearly marked. In such contrast the heath wore the appearance of an instalment of night which had taken up its place before its astronomical hour was come: darkness had to a great extent arrived hereon, while day stood distinct in the sky. Looking upwards, a furze-cutter would have been inclined to continue work; looking down, he would have decided to finish his faggot and go home. The distant rims of the world and of the firmament seemed to be a division in time no less than a division in matter.`,
    questions: [
      {
        q: 'Q1. Give two ways in which the sky and the heath look different from each other. (2 marks)',
        a: 'The sky is "whitish" / "pallid" and still light, while the heath is "embrowned" / dark and already covered in "darkness".',
      },
      {
        q: 'Q2. What does the image of the sky as "a tent which had the whole heath for its floor" suggest about the landscape? (3 marks)',
        a: 'It suggests the heath is enormous and enclosed — the clouds feel like a roof pressing down on it, making the whole place feel like a vast, sealed-in room under a lid of cloud.',
      },
      {
        q: 'Q3. (Language) Analyse how Hardy uses language to create an atmosphere of gloom and timelessness. (15 marks) — outline answer.',
        a: 'Focus on: "embrowned itself moment by moment" (reflexive verb personifies the heath as consciously darkening); "instalment of night" (commercial metaphor suggests darkness arrives in separate portions, making time feel mechanical); "darkness had to a great extent arrived" (passive phrasing turns night into an inevitable, almost fated visitor); "division in time no less than a division in matter" (philosophical abstraction elevates the scene beyond weather into something almost metaphysical). Link each to the oppressive, suspended-in-time atmosphere.',
      },
    ],
  },
]

export default async function PracticePage() {
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
        <h1 className="text-display-sm font-heading text-foreground">Paper 1 practice passages</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          Three practice sets drawn from public-domain literary openings. Each set gives you a
          passage, short comprehension questions, an own-words question and an extended language
          analysis task with a model outline.
        </p>
      </section>

      {/* ── How to use ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Pencil className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            How to use these passages
          </h2>
        </div>
        <ul className="space-y-2 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>Cover the answers before you start — treat each set as a timed mini-exam.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>Give yourself 25–30 minutes per set.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              Once finished, compare your answers to the model responses and highlight what you
              missed.
            </span>
          </li>
        </ul>
      </section>

      {/* ── Practice sets ─────────────────────────────────────────── */}
      <section className="space-y-8">
        {practiceSets.map((set, i) => (
          <Card key={set.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                  {i + 1}
                </div>
                <div>
                  <CardTitle className="text-heading-md font-heading">
                    Practice Set {i + 1}
                  </CardTitle>
                  <CardDescription>{set.source}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" />
                  <h3 className="text-body-md font-semibold text-foreground">Passage</h3>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
                  <p className="whitespace-pre-line text-body-sm text-foreground leading-relaxed">
                    {set.passage}
                  </p>
                  <p className="mt-3 text-body-xs text-muted-foreground italic">{set.sourceNote}</p>
                </div>
              </div>

              <div className="space-y-4">
                {set.questions.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-border/60 bg-card p-4">
                    <p className="text-body-sm font-semibold text-foreground">{item.q}</p>
                    <details className="mt-2">
                      <summary className="cursor-pointer text-body-xs text-primary hover:underline">
                        Show model answer
                      </summary>
                      <p className="mt-2 rounded-lg border border-border/60 bg-muted/30 p-3 text-body-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
