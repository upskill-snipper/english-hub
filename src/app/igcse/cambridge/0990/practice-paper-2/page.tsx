import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  PenTool,
  Clock,
  Sparkles,
  Timer,
  FileText,
  Info,
  Award,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Practice Paper 2 (Writing) | Cambridge IGCSE Language B | The English Hub',
    description:
      'Full Cambridge IGCSE Language B Paper 2 Directed Writing and Composition practice paper with stimulus text, task options and model answers.',
  },
  title: 'Practice Paper 2 (Writing) | Cambridge IGCSE Language B | The English Hub',
  description:
    'Full Cambridge IGCSE Language B Paper 2 Directed Writing and Composition practice paper with stimulus text, task options and model answers.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/practice-paper-2',
  },
}

export default async function PracticePaper2Page() {
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
            <Badge variant="secondary">Practice Paper</Badge>
            <Badge variant="secondary">Paper 2 Writing</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Practice Paper 2: Directed Writing & Composition
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            A full Paper 2 with Section A directed writing and Section B composition. Stimulus text
            is original. Model answers included for both sections.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />2 hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <PenTool className="size-3.5" />
              80 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Timer className="size-3.5" />
              Closed book
            </span>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-md font-heading text-foreground">Instructions</h2>
            <ul className="mt-3 space-y-2 text-body-sm text-muted-foreground">
              <li>• Answer Section A (1 task) and Section B (1 task).</li>
              <li>• Spend about 1 hour on each section.</li>
              <li>• Plan before you write.</li>
              <li>• Proofread at the end.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section A */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section A: Directed Writing
          </h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">
              Stimulus text — Should schools keep phones out of classrooms?
            </CardTitle>
            <p className="text-body-xs text-muted-foreground">
              Read the short opinion piece below, then answer the task underneath it.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm leading-relaxed text-foreground">
            <p>
              Walk into any secondary school corridor at lunchtime and you&apos;ll see the same
              scene: teenagers bent over bright rectangles, fingers flickering, eyes elsewhere. Some
              schools have begun asking whether this level of attachment is healthy — and whether
              the classroom, at least, should be a phone-free zone.
            </p>
            <p>
              Supporters of phone bans point to better concentration, fewer distractions and,
              importantly, more face-to-face conversation. Teachers report that students engage more
              actively when phones are locked away during lessons. Parents, too, have welcomed the
              change: one mother told a local paper that her daughter was &ldquo;finally reading
              again&rdquo; after her school introduced a ban.
            </p>
            <p>
              Yet not everyone is convinced. Students argue that phones are a vital safety tool, a
              lifeline in emergencies and a source of quick information. Banning them, they say,
              treats teenagers like children and ignores the way modern life actually works. Some
              parents agree, preferring to be contactable during the school day.
            </p>
            <p>
              The question isn&apos;t really whether phones are useful — they clearly are. It&apos;s
              whether schools should be the place where young people finally look up from the
              screen.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-4 border-primary/20">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="text-heading-sm font-heading">Task</CardTitle>
              <Badge variant="secondary">40 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-body-sm text-muted-foreground">
            <p>
              Imagine your school is considering introducing a phone ban. Write a{' '}
              <strong className="text-foreground">speech</strong> to be delivered to the student
              council, in which you present your view on the proposed ban and persuade them to agree
              with you.
            </p>
            <p>You should:</p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>develop and evaluate the ideas in the text,</li>
              <li>use your own ideas and examples,</li>
              <li>speak in a persuasive but appropriate register.</li>
            </ul>
            <p>
              Write between <strong className="text-foreground">250 and 350 words</strong>. Up to 15
              marks are available for reading and up to 25 for writing.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Model answer A */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Award className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Model answer — Section A</h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
              Grade 9 exemplar
            </Badge>
            <CardTitle className="mt-2 text-body font-semibold">
              Speech to the student council: keep our phones out of class
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-body-sm leading-relaxed text-muted-foreground">
            <p>
              Fellow students, I know what you&apos;re thinking. A phone ban? Really? But before you
              reach for your pockets in protest, hear me out — because I believe that locking our
              phones away for five hours a day is one of the few things this school could do that
              would actually change our lives.
            </p>
            <p>
              Consider the numbers. A recent article reminded us that teenagers spend entire lunch
              breaks &ldquo;bent over bright rectangles&rdquo;, and that teachers notice a sharp
              rise in engagement when phones are locked away. I don&apos;t find that surprising.
              When my phone buzzes on my desk, even silently, my concentration fractures. The
              classroom becomes a waiting room for the next notification. Surely we deserve better
              than that.
            </p>
            <p>
              I know the counter-arguments. What about safety? What about emergencies? These
              concerns are fair, but they don&apos;t need to defeat the proposal. A locked phone in
              a pouch at the front of the class is still a phone that the teacher can reach in a
              crisis. The choice isn&apos;t between connection and isolation — it&apos;s between
              ambient distraction and focused attention.
            </p>
            <p>
              We talk a lot in this council about &ldquo;wellbeing&rdquo;. Here&apos;s a chance to
              act on it. Let&apos;s give ourselves five hours a day to think, to talk, to read —
              without the glow of a screen competing for our eyes. Not forever. Just during lessons.
              Just long enough to remember what full attention feels like.
            </p>
            <p>
              I ask the council to vote in favour of the phone policy. Your pocket will survive.
              Your focus will thank you.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">Why this scores highly</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              <li>
                • <strong className="text-foreground">Clear form.</strong> Direct address,
                rhetorical questions and audience acknowledgement all fit a persuasive speech.
              </li>
              <li>
                • <strong className="text-foreground">Uses the stimulus.</strong> Short quotation
                and developed ideas from the text earn reading marks.
              </li>
              <li>
                • <strong className="text-foreground">Balanced argument.</strong> Engages with the
                counter-view before refuting it.
              </li>
              <li>
                • <strong className="text-foreground">Controlled style.</strong> Varied sentence
                lengths, precise verbs and deliberate final short sentences.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Section B */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenTool className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Section B: Composition</h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="text-heading-sm font-heading">
                Choose ONE of the following
              </CardTitle>
              <Badge variant="secondary">40 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm text-muted-foreground">
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="font-medium text-foreground">Narrative option 1</p>
              <p className="mt-1">
                Write a story that begins with the sentence:{' '}
                <em>The message on the screen was meant for somebody else.</em>
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="font-medium text-foreground">Narrative option 2</p>
              <p className="mt-1">
                Write a story called <em>The Empty Classroom</em>.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="font-medium text-foreground">Descriptive option 1</p>
              <p className="mt-1">
                Describe a busy market at the end of the day, as the stallholders pack up and the
                last customers leave.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="font-medium text-foreground">Descriptive option 2</p>
              <p className="mt-1">
                Describe a place that holds an important memory for you. Focus on the details that
                make the place feel significant.
              </p>
            </div>
            <p className="pt-2">
              Write between <strong className="text-foreground">350 and 450 words</strong>. Up to 24
              marks are available for content and structure, and up to 16 for style and accuracy.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Model answer B */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Award className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Model answer — Section B (descriptive)
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
              Grade 9 exemplar
            </Badge>
            <CardTitle className="mt-2 text-body font-semibold">
              The market at closing time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-body-sm leading-relaxed text-muted-foreground">
            <p>
              The light is going. It slips over the canvas roofs of the stalls like water sliding
              off a leaf, pooling in the narrow alleys where the flower sellers pack their last
              bunches. The scent of damp paper and crushed mint hangs in the air, softer now that
              the crowds have thinned, as if the market itself is exhaling.
            </p>
            <p>
              At the fish stall, a woman in a rubber apron tips a last bowl of ice into a drain. The
              steam rises, curls, and vanishes. Behind her, rows of empty trays gleam where the
              silver bodies lay an hour ago. She moves with the patient economy of someone who has
              done this a thousand times: rinse, wipe, fold, turn. Nothing is wasted, not even the
              quiet.
            </p>
            <p>
              Further down, a boy sweeps a carpet of leaves and broken crates into a single dark
              pile. His broom scrapes a steady rhythm against the cobbles — ssh, ssh, ssh — like the
              market&apos;s own heartbeat winding down. The fruit trader beside him is already
              halfway into a van, his forearms dusted with sugar from the last of the dates.
            </p>
            <p>
              In one stall, a lone string of paper lanterns still glows. An old man sits beneath
              them on an upturned crate, drinking tea from a tin cup. He watches the emptying square
              with the calm of someone who has seen this scene played out every evening of his
              working life. When I pass, he nods — not at me, exactly, but at the whole soft closing
              of the day.
            </p>
            <p>
              By the time the last bulbs are switched off, the square is only outlines. A cat slips
              across the cobbles and disappears beneath a stall. Somewhere, a shutter falls. And the
              market, which all day has been a roar and a bustle and a hundred small bargains,
              becomes what it must have been before any of it began: a silent space, waiting for the
              morning.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">Why this scores highly</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              <li>
                • <strong className="text-foreground">Sensory range.</strong> Sight, sound, smell,
                touch, all woven through.
              </li>
              <li>
                • <strong className="text-foreground">Focused moments.</strong> Zooms into specific
                stallholders rather than listing the whole market.
              </li>
              <li>
                • <strong className="text-foreground">Imagery and rhythm.</strong> Similes,
                personification and a deliberate use of short sentences for pace.
              </li>
              <li>
                • <strong className="text-foreground">Circular structure.</strong> The ending echoes
                the opening, giving shape to the piece.
              </li>
              <li>
                • <strong className="text-foreground">Accurate throughout.</strong> Controlled
                punctuation, varied openings, no slips.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Now mark yourself</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/paper-2" />}>
            Paper 2 grade boundaries
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}
          >
            How to hit Grade 9
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}
          >
            Practice Paper 1
          </Button>
        </div>
      </section>
    </div>
  )
}
