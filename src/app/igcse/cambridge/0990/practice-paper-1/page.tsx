import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  Timer,
  FileText,
  Info,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Practice Paper 1 (Reading) | Cambridge IGCSE Language B | The English Hub',
    description:
      'A Cambridge IGCSE Language B Paper 1 practice set on extracts from Jane Eyre and The War of the Worlds: Questions 1, 3 and 4, 60 marks, with a mark breakdown.',
    images: [
      {
        url: '/api/og?title=Practice+Paper+1+(Reading)+%7C+Cambridge+IGCSE+Language+B+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Practice Paper 1 (Reading) | Cambridge IGCSE Language B | The English Hub',
      },
    ],
  },
  title: 'Practice Paper 1 (Reading) | Cambridge IGCSE Language B',
  description:
    'A Cambridge IGCSE Language B Paper 1 practice set on extracts from Jane Eyre and The War of the Worlds: Questions 1, 3 and 4, 60 marks, with a mark breakdown.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/practice-paper-1',
  },
}

export default async function PracticePaper1Page() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_lang_b_hub')}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="me-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_lang_b')}
            </Badge>
            <Badge variant="secondary">Practice Paper</Badge>
            <Badge variant="secondary">Paper 1 Reading</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Practice Paper 1: Reading
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            A Paper 1 practice set built around two public-domain extracts, in the shape of the
            paper for exams from 2027. It covers Questions 1, 3 and 4: 60 of the paper&apos;s 80
            marks, in about 1 hour 25 minutes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              About 85 minutes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              60 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Timer className="size-3.5" />
              Closed book
            </span>
          </div>
        </div>
      </section>

      {/* 31 October 2026: rebuilt to src/data/mark-scheme-guides/cambridge-0990-paper1.ts.
          This was "a full Paper 1" of three questions (25, 25, 30) on two texts, with a
          250-word summary of both: no 0990 syllabus sets that paper. From 2027 the paper
          is four questions of 20 on three texts, so this is now a practice set for
          Questions 1, 3 and 4, and says where to practise Question 2. Both extracts were
          also not what their writers wrote: the Jane Eyre one had "a spare chamber" for
          "a square chamber" and an added closing sentence, and the War of the Worlds one
          was not Wells's prose at all. Both are now copied from the held editions in
          src/data/full-texts/ (jane-eyre.ts, Chapter 2; the-war-of-the-worlds.ts, Book
          One, Chapter I), cut only where an ellipsis shows. Second reader: Text A's first
          paragraph now shows its cut, and Q4's rubric, close to Cambridge's, is reworded. */}

      {/* Instructions */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-md font-heading text-foreground">Instructions</h2>
            <ul className="mt-3 space-y-2 text-body-sm text-muted-foreground">
              <li>• Answer all the questions.</li>
              <li>
                • This set covers Questions 1, 3 and 4 of the paper. The real paper also prints Text
                B, for the Question 2 summary: practise that with our{' '}
                <Link
                  href="/igcse/cambridge/0500/paper-1/summary-writing"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  summary writing guide
                </Link>
                .
              </li>
              <li>• Spend about 10 minutes reading, then about 25 minutes on each question.</li>
              <li>• Write in continuous prose for the Question 3 language task and Question 4.</li>
              <li>
                • Both extracts are in the public domain. Words cut for length are marked with an
                ellipsis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Text A */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Text A: The red-room</h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">
              From Jane Eyre by Charlotte Brontë (1847)
            </CardTitle>
            <p className="text-body-xs text-muted-foreground">
              In the second chapter, a young girl is locked alone in a disused bedroom as
              punishment. The narrator recalls her feelings.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm leading-relaxed text-foreground">
            <p>
              The red-room was a square chamber, very seldom slept in, I might say never, indeed,
              unless when a chance influx of visitors at Gateshead Hall rendered it necessary to
              turn to account all the accommodation it contained: yet it was one of the largest and
              stateliest chambers in the mansion. A bed supported on massive pillars of mahogany,
              hung with curtains of deep red damask, stood out like a tabernacle in the centre; the
              two large windows, with their blinds always drawn down, were half shrouded in festoons
              and falls of similar drapery; the carpet was red; the table at the foot of the bed was
              covered with a crimson cloth; the walls were a soft fawn colour with a blush of pink
              in it; the wardrobe, the toilet-table, the chairs were of darkly polished old
              mahogany. …
            </p>
            <p>
              This room was chill, because it seldom had a fire; it was silent, because remote from
              the nursery and kitchen; solemn, because it was known to be so seldom entered. The
              house-maid alone came here on Saturdays, to wipe from the mirrors and the furniture a
              week’s quiet dust: and Mrs. Reed herself, at far intervals, visited it to review the
              contents of a certain secret drawer in the wardrobe, where were stored divers
              parchments, her jewel-casket, and a miniature of her deceased husband …
            </p>
            <p>
              Mr. Reed had been dead nine years: it was in this chamber he breathed his last; here
              he lay in state; hence his coffin was borne by the undertaker’s men; and, since that
              day, a sense of dreary consecration had guarded it from frequent intrusion.
            </p>
            <p>
              … at this moment a light gleamed on the wall. Was it, I asked myself, a ray from the
              moon penetrating some aperture in the blind? No; moonlight was still, and this
              stirred; while I gazed, it glided up to the ceiling and quivered over my head. I can
              now conjecture readily that this streak of light was, in all likelihood, a gleam from
              a lantern carried by some one across the lawn: but then, prepared as my mind was for
              horror, shaken as my nerves were by agitation, I thought the swift darting beam was a
              herald of some coming vision from another world. My heart beat thick, my head grew
              hot; a sound filled my ears, which I deemed the rushing of wings; something seemed
              near me; I was oppressed, suffocated: endurance broke down; I rushed to the door and
              shook the lock in desperate effort. Steps came running along the outer passage; the
              key turned, Bessie and Abbot entered.
            </p>
            <p className="text-body-xs italic text-muted-foreground">
              Source: public domain. Chapter 2, cut for length.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Text C */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Text C: Watched from Mars
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">
              From The War of the Worlds by H. G. Wells (1898)
            </CardTitle>
            <p className="text-body-xs text-muted-foreground">
              The opening of the novel. The narrator looks back on the years before the Martians
              came, when no one imagined that Mars was watching the earth.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm leading-relaxed text-foreground">
            <p>
              No one would have believed in the last years of the nineteenth century that this world
              was being watched keenly and closely by intelligences greater than man’s and yet as
              mortal as his own; that as men busied themselves about their various concerns they
              were scrutinised and studied, perhaps almost as narrowly as a man with a microscope
              might scrutinise the transient creatures that swarm and multiply in a drop of water.
              With infinite complacency men went to and fro over this globe about their little
              affairs, serene in their assurance of their empire over matter. It is possible that
              the infusoria under the microscope do the same. No one gave a thought to the older
              worlds of space as sources of human danger, or thought of them only to dismiss the
              idea of life upon them as impossible or improbable. It is curious to recall some of
              the mental habits of those departed days. At most terrestrial men fancied there might
              be other men upon Mars, perhaps inferior to themselves and ready to welcome a
              missionary enterprise. Yet across the gulf of space, minds that are to our minds as
              ours are to those of the beasts that perish, intellects vast and cool and
              unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their
              plans against us. And early in the twentieth century came the great disillusionment.
            </p>
            <p>
              The planet Mars, I scarcely need remind the reader, revolves about the sun at a mean
              distance of 140,000,000 miles, and the light and heat it receives from the sun is
              barely half of that received by this world. It must be, if the nebular hypothesis has
              any truth, older than our world; and long before this earth ceased to be molten, life
              upon its surface must have begun its course. The fact that it is scarcely one seventh
              of the volume of the earth must have accelerated its cooling to the temperature at
              which life could begin. It has air and water and all that is necessary for the support
              of animated existence.
            </p>
            <p className="text-body-xs italic text-muted-foreground">
              Source: public domain. The first two paragraphs of Book One, Chapter I.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Questions */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Questions</h2>
        </div>
        <div className="space-y-6">
          {/* Q1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">Question 1 - Text A</CardTitle>
                <Badge variant="secondary">20 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              <p>Answer the following questions on Text A.</p>
              <ol className="space-y-2 ps-5 list-[lower-alpha]">
                <li>
                  Identify two details from paragraph 1 that show how rarely the red-room is used.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Using your own words, explain why the narrator finds the room &ldquo;chill&rdquo;,
                  &ldquo;silent&rdquo; and &ldquo;solemn&rdquo; (paragraph 2).
                  <span className="ms-2 italic text-body-xs">[3]</span>
                </li>
                <li>
                  Give two details from paragraph 1 that show the room is grand.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  What does the comparison of the bed to &ldquo;a tabernacle&rdquo; suggest about
                  how it looks?
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Who visits the room, and why does each one go there?
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Using your own words, explain why the room is so rarely entered, according to
                  paragraph 3.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  What does the narrator now think the light on the wall was, and what did she think
                  it was at the time?
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Give three details from the final paragraph that show the narrator&apos;s body
                  reacting to fear.
                  <span className="ms-2 italic text-body-xs">[3]</span>
                </li>
                <li>
                  Using your own words, explain what &ldquo;endurance broke down&rdquo; means.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Q3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">Question 3 - Text C</CardTitle>
                <Badge variant="secondary">20 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              <p>Answer the following questions on Text C.</p>
              <ol className="space-y-2 ps-5 list-[lower-alpha]">
                <li>
                  Give the phrase from paragraph 1 that shows the watching minds could die, as
                  humans can.
                  <span className="ms-2 italic text-body-xs">[1]</span>
                </li>
                <li>
                  Using your own words, explain what the writer means by &ldquo;With infinite
                  complacency men went to and fro over this globe about their little affairs&rdquo;.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Identify two ways in which people at the time thought about life on other worlds.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Using your own words, explain what &ldquo;the great disillusionment&rdquo;
                  suggests.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Give two facts from paragraph 2 about how Mars compares with the earth.
                  <span className="ms-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Using your own words, explain what &ldquo;scarcely&rdquo; means in &ldquo;scarcely
                  one seventh of the volume of the earth&rdquo;.
                  <span className="ms-2 italic text-body-xs">[1]</span>
                </li>
                <li>
                  Re-read paragraph 1. Explain how the writer uses language to convey the threat to
                  humanity. Select three words or phrases and explain how each creates its effect.
                  Write about 200 to 250 words.
                  <span className="ms-2 italic text-body-xs">[10]</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Q4 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">Question 4 - Text C</CardTitle>
                <Badge variant="secondary">20 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-muted-foreground">
              <p>
                Imagine you are an astronomer at the time Text C describes. You write an article for
                a popular magazine, warning readers that the possibility of life on Mars should be
                taken seriously.
              </p>
              <p>In your article you should:</p>
              <ul className="space-y-1 ps-5 list-disc">
                <li>explain what is known about Mars and why life there is possible;</li>
                <li>explain why complacency about other worlds could be dangerous.</li>
              </ul>
              <p>
                Take your ideas from Text C and put them in your own words, covering both bullet
                points. Write about <strong className="text-foreground">250 to 300 words</strong>.
                Ten marks are for reading (how well you use and develop the ideas in Text C) and ten
                are for writing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mark distribution */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Mark distribution</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 1</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">20</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 3</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">20</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 4</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">20</p>
          </div>
        </div>
        <p className="mt-4 text-body-xs text-muted-foreground">
          Total: 60 marks, three quarters of the paper. Our{' '}
          <Link
            href="/igcse/cambridge/0990/paper-1"
            className="text-primary underline-offset-2 hover:underline"
          >
            Paper 1 grade boundaries
          </Link>{' '}
          are out of 80, so add a Question 2 summary practice before you compare your score.
        </p>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Finished the paper?</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/paper-1/question-types" />}>
            Technique for each question type
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-2" />}
          >
            Try Practice Paper 2
          </Button>
        </div>
      </section>
    </div>
  )
}
