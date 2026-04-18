import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Target,
  BookOpen,
  PenTool,
  Crown,
  Eye,
  MessageSquare,
  AlertCircle,
  Sparkles,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { getSetTextsForBoard, type SetText } from '@/lib/board/set-texts'
import {
  getGradeSystemForBoard,
  getBoundaryForGrade,
  gradeNineToLetterEquivalent,
} from '@/lib/board/grade-boundaries'
import { Grade9ComparisonExample } from './grade-9-interactive'

/* ── Board-specific example essays ────────────────────────────────────── */

type EssayExample = {
  slug: string
  title: string
  author: string
  lowerEssay: string
  higherEssay: string
}

const GRADE_9_EXAMPLES: EssayExample[] = [
  {
    slug: 'macbeth',
    title: 'Macbeth',
    author: 'William Shakespeare',
    lowerEssay:
      '"Shakespeare shows that Macbeth feels guilty about killing Duncan through the dagger speech. The \'fatal vision\' represents his guilt and the fact that he \'cannot clutch\' it shows that he is unsure whether to commit the murder. Shakespeare is showing that ambition leads to madness, which would have been a warning to the Jacobean audience who believed in the divine right of kings."',
    higherEssay:
      '"What makes the dagger speech so haunting is not simply its depiction of guilt, but its refusal to resolve whether Macbeth is acting or being acted upon. The \'fatal vision\' is simultaneously a projection of his desire and a command he cannot disobey — Shakespeare collapses agency and fate until the two become indistinguishable. When Macbeth asks whether the dagger is \'a false creation, proceeding from the heat-oppressed brain,\' he is posing the tragedy\'s central question: can a man be held responsible for the acts that his own mind demands of him? A Jacobean audience, steeped in Calvinist anxieties about predestination, would have recognised this not as madness but as a metaphysical crisis — the unbearable realisation that evil may not come from outside us at all."',
  },
  {
    slug: 'an-inspector-calls',
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    lowerEssay:
      '"Priestley uses the Inspector as a mouthpiece for his socialist views. When the Inspector says \'we are members of one body\', he is telling the audience that we should care for each other. This was written in 1945 just after the war when Britain was building the welfare state."',
    higherEssay:
      '"The Inspector\'s declaration — \'we are members of one body\' — echoes the language of Pauline scripture, but Priestley weaponises this religious resonance against the very class that claims moral authority through it. The biblical cadence exposes the hypocrisy of the Birlings\' Christianity: they believe in the soul but not in society. What is genuinely radical about Priestley\'s play is not the Inspector\'s socialism, but his refusal to let his 1945 audience feel absolved by the arrival of the welfare state. The telephone call at the end forces the cycle to begin again, suggesting that moral reckoning is not a historical event but a permanent condition."',
  },
  {
    slug: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    lowerEssay:
      '"Dickens describes Scrooge as \'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!\' The list of verbs shows how greedy he is. Dickens wrote this to show Victorian readers that they should care for the poor."',
    higherEssay:
      '"The asyndetic cascade of predatory verbs — \'squeezing, wrenching, grasping, scraping, clutching\' — performs the relentlessness of capital itself, each verb compounding the last until Scrooge becomes indistinguishable from the machinery of extraction. Dickens does not merely condemn an individual; he performs, through syntax, the way accumulation operates — endlessly, without pause, beyond the moral will of any single actor. This is why Scrooge\'s later redemption remains ideologically problematic: if the economic system produces Scrooges, then saving one soul leaves the mechanism untouched. Dickens\'s critics have long debated whether the novella\'s happy ending undoes its own radical diagnosis."',
  },
  {
    slug: 'jekyll-and-hyde',
    title: 'Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    lowerEssay:
      '"Stevenson presents Hyde as evil through the description \'something troglodytic.\' The vague word \'something\' makes him seem less than human and the word \'troglodytic\' suggests he has devolved. This reflects Darwinian fears of the time."',
    higherEssay:
      '"Stevenson\'s indefinite pronoun \'something\' withholds the linguistic category Hyde requires to exist as a subject — he is denied even the dignity of being a \'he.\' What makes this so disturbing is not the invocation of devolution, but the suggestion that Victorian taxonomy itself has failed: the scientific language that was meant to classify the world cannot contain the figure it has produced. Jekyll\'s tragedy is therefore not that his experiment created a monster, but that the rational-empirical worldview he represents could not anticipate its own underside. Stevenson writes not just a horror story but an indictment of Enlightenment optimism — the idea that the self could be understood, controlled, and improved through the application of science."',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    lowerEssay:
      '"The creature\'s declaration \'I was benevolent and good; misery made me a fiend\' shows that society is responsible for his evil. Shelley is using Romantic ideas that nature is pure and society corrupts. This connects to Rousseau\'s ideas about the noble savage."',
    higherEssay:
      '"Shelley\'s creature speaks with an eloquence that itself indicts his creator — his articulacy demands that we read him as a thinking, feeling being, not a monstrous other. The past tense of \'I was benevolent\' enacts a grief so profound it mourns a self that can never return. But Shelley does not let her Romantic framework off the hook either: if the creature was corrupted by society, he is also defined by the absence of the loving recognition that Victor withheld at his first breath. The novel thus complicates Rousseau\'s faith in natural goodness with a psychoanalytic intuition — that we become ourselves only through being seen, and that to be unseen at the moment of one\'s creation is a wound no amount of later benevolence can heal."',
  },
  {
    slug: 'romeo-and-juliet',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    lowerEssay:
      '"When Romeo says \'Juliet is the sun\', he uses a metaphor to show that she is the most important thing in his world. The metaphor compares her to a celestial body, showing how much he loves her. This is Petrarchan love poetry which was popular in the Elizabethan era."',
    higherEssay:
      '"Romeo\'s cosmological metaphor — \'Juliet is the sun\' — at once elevates and obliterates her: she becomes the condition for his world but disappears as an individual consciousness within it. Shakespeare is not celebrating love so much as interrogating its grammar, showing how romantic discourse turns its object into a function of the lover\'s need. The irony, of course, is that Juliet herself immediately resists this framing — in the same scene she rejects the stability of names and identities (\'What\'s in a name?\'), while Romeo persists in the very metaphorical idealisation that will ultimately doom them both. The play\'s tragedy is already being written in the language of its lovers\' first encounter."',
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    lowerEssay:
      '"Austen\'s famous opening line is ironic because it is really women who want rich husbands. She uses the phrase \'universally acknowledged\' to sound like a philosophical truth but then subverts it. Austen is criticising how women had to marry for money."',
    higherEssay:
      '"Austen\'s opening is less a joke than a trap: the mock-philosophical register — \'a truth universally acknowledged\' — performs the very ideological sleight of hand it exposes. The reader is invited to agree with a proposition before they recognise that they are being implicated in its assumptions. What looks like wit is actually epistemology in action: Austen shows how patriarchal economics disguise themselves as common sense, how the coerced becomes the universal. The novel\'s real radicalism is not that Elizabeth rejects Darcy\'s first proposal, but that Austen\'s narrator has already taught us to distrust the grammar of \'universal truth\' itself."',
  },
]

function getExampleForBoard(setTexts: SetText[]): EssayExample | null {
  for (const example of GRADE_9_EXAMPLES) {
    if (setTexts.some((t) => t.slug === example.slug)) return example
  }
  return null
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default async function Grade9Page() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const setTexts = getSetTextsForBoard(board)
  const example = getExampleForBoard(setTexts)
  const gradeSystem = getGradeSystemForBoard(board)
  const boundary = getBoundaryForGrade(board, '9')
  const isLetterSystem = gradeSystem === 'A*-G'
  const displayGradeLabel = isLetterSystem ? `Grade ${gradeNineToLetterEquivalent('9')}` : 'Grade 9'
  const lowerLabel = isLetterSystem ? 'Grade A' : 'Grade 7'
  const higherLabel = displayGradeLabel

  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/grade-targets" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Grade Targets
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <span className="text-lg font-bold text-clay-600">{isLetterSystem ? 'A*' : '9'}</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              How to Get {isLetterSystem ? 'an A*' : 'a Grade 9'}
              {boardConfig && <span className="text-muted-foreground"> — {boardConfig.shortName}</span>}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Conceptualised, critical, and genuinely original analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── Board-specific banner ─────────────────────────────── */}
      {isLetterSystem && (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-start gap-3">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Cambridge IGCSE uses A*-G grading. </span>
            For Cambridge IGCSE, a <span className="font-semibold text-foreground">Grade A*</span> is the
            equivalent of the top of the <span className="font-semibold text-foreground">9-1 scale (Grade 8-9)</span>. The advice below describes that top-band thinking.
          </div>
        </div>
      )}

      {/* ── What it looks like ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
            <Crown className="size-4.5 text-clay-600" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What a {displayGradeLabel} Looks Like</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          {displayGradeLabel} is the top grade, achieved by a small percentage of students. Markers describe this level of work as &quot;exploratory&quot;, &quot;critical&quot;, and &quot;conceptualised.&quot; The key distinction from the grade below is not more analysis — it is a different kind of thinking.
        </p>

        {boardConfig && boundary.percent !== null && (
          <div className="mb-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Target className="size-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">
                {boardConfig.shortName} {boundary.label} Boundary
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You need approximately <span className="font-semibold text-primary">{boundary.percent}%</span> of total marks to reach {boundary.label} in {boardConfig.shortName}. This is the top grade — roughly 3-5% of students achieve it.
              {boundary.systemNote && <> <span className="italic">{boundary.systemNote}</span></>}
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="size-4 text-blue-400" />
              Literature at {displayGradeLabel}
            </h3>
            <ul className="space-y-2.5">
              {[
                'Critical, exploratory analysis that goes beyond the text itself',
                'A conceptualised response — ideas are connected by a controlling argument',
                'Precise, discriminating use of textual evidence',
                'Exploration of how meanings are created through form, structure, and language together',
                'Context is not just referenced but used to deepen interpretation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-clay-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <PenTool className="size-4 text-violet-400" />
              Language at {displayGradeLabel}
            </h3>
            <ul className="space-y-2.5">
              {[
                'Exploratory, critical analysis of language with sharp originality',
                'Sophisticated understanding of how structural choices shape meaning',
                'Evaluation is convincing, with a distinctive personal voice',
                'Creative writing is compelling, with assured control of tone and style',
                'Writing for purpose shows flair, sophistication, and complete control',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <AlertCircle className="size-4 shrink-0 text-clay-600 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Important: </span>
            {displayGradeLabel} is not about writing more. Many top-grade essays are the same length as mid-band ones. The difference is in the quality and originality of the thinking, not the quantity.
          </p>
        </div>
      </section>

      {/* ── Conceptualised explained (universal) ──────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What &quot;Conceptualised&quot; Actually Means</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          This is the most important word in the top-grade marking guide and the most misunderstood. A conceptualised response is not just detailed analysis — it is analysis organised around a big idea that runs through your whole essay.
        </p>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">A non-conceptualised essay:</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Analyses the text point by point, quote by quote. Each paragraph is a separate observation. The essay is a list of good points, but they do not connect to each other.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">A conceptualised essay:</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Is driven by one central argument or concept that every paragraph develops, complicates, or refines. The essay has a thesis — a controlling idea that evolves across the response.
            </p>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Example: Turning a topic into a concept</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="shrink-0 mt-0.5 text-[10px]">Topic</Badge>
                <p className="text-xs text-muted-foreground">&quot;How does the writer present guilt?&quot;</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="shrink-0 mt-0.5 text-[10px]">Mid-band thesis</Badge>
                <p className="text-xs text-muted-foreground">
                  &quot;The writer presents guilt as a destructive force that torments the protagonist throughout the text.&quot;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="shrink-0 mt-0.5 text-[10px] bg-amber-500/20 text-clay-600 border-amber-500/30">
                  Top-grade concept
                </Badge>
                <p className="text-xs text-muted-foreground">
                  &quot;Guilt is presented not as a consequence of sin but as proof of humanity — the tragedy is that guilt reveals the protagonist was never truly a villain, but a person who destroyed themselves by betraying their own nature.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Critical lenses (universal) ──────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10">
            <Eye className="size-4.5 text-rose-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Critical and Alternative Interpretations</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Top responses show awareness that texts can be read in multiple ways. You do not need to name literary critics — but you do need to show that you can hold two (or more) interpretations at once and evaluate which is more convincing.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">Reading through different lenses</h3>
            <div className="grid gap-3 sm:grid-cols-2 mt-3">
              {[
                { lens: 'Feminist reading', example: 'How does the text present gender roles? Whose voice is silenced?' },
                { lens: 'Marxist reading', example: 'How does the text present class? Who has power? Is wealth deserved or exploitative?' },
                { lens: 'Post-colonial reading', example: 'Whose perspective is centred? Are other cultures othered?' },
                { lens: 'Psychoanalytic reading', example: 'What drives the character beneath the surface? What are they repressing?' },
              ].map((item) => (
                <div key={item.lens} className="rounded-lg bg-muted/20 p-3">
                  <p className="text-xs font-semibold text-foreground mb-1">{item.lens}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.example}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">Phrases for offering alternative readings</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                '"While a surface reading suggests... a more critical interpretation might argue..."',
                '"This could be read as... however, the ambiguity allows for a reading in which..."',
                '"Perhaps more significantly, this moment reveals..."',
                '"The text resists a single interpretation here..."',
                '"On one level, this functions as... but on a deeper level it exposes..."',
              ].map((phrase) => (
                <li key={phrase} className="flex items-start gap-2">
                  <Sparkles className="size-3 shrink-0 mt-0.5 text-rose-400" />
                  <span className="italic">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Vocabulary (universal) ────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <MessageSquare className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Sophisticated Vocabulary and Expression</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Top-grade writing does not use big words for the sake of it. The vocabulary is precise — every word earns its place.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Verbs for analysis</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Replace &quot;shows&quot; and &quot;suggests&quot; with more precise alternatives:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'exposes', 'undermines', 'interrogates', 'destabilises',
                'crystallises', 'complicates', 'distils', 'illuminates',
                'subverts', 'encapsulates', 'fractures', 'amplifies',
              ].map((word) => (
                <span key={word} className="rounded-md bg-violet-500/10 px-2 py-1 text-[11px] font-medium text-violet-400">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Nouns for concepts</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Use abstract nouns to frame your ideas at a conceptual level:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'complicity', 'agency', 'duality', 'transience',
                'culpability', 'dissonance', 'fragility', 'hegemony',
                'liminality', 'objectification', 'subjugation', 'alienation',
              ].map((word) => (
                <span key={word} className="rounded-md bg-amber-500/10 px-2 py-1 text-[11px] font-medium text-clay-600">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Example Comparison (board-filtered) ──────────────── */}
      {example ? (
        <Grade9ComparisonExample
          exampleTitle={example.title}
          exampleAuthor={example.author}
          lowerLabel={lowerLabel}
          higherLabel={higherLabel}
          lowerEssay={example.lowerEssay}
          higherEssay={example.higherEssay}
          contextNote={
            boardConfig
              ? `This example uses ${example.title}, which is on your ${boardConfig.shortName} exam board.`
              : undefined
          }
        />
      ) : (
        <div className="rounded-xl border border-border/40 bg-background/50 p-5 text-xs text-muted-foreground">
          Example comparisons are filtered based on the texts you study. Set your exam board to see a relevant example.
        </div>
      )}

      {/* ── Bottom navigation ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-cyan-500/[0.04] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-heading-md font-heading text-foreground mb-1">
              Need to build foundations first?
            </h2>
            <p className="text-body-sm text-muted-foreground max-w-md">
              Top-grade skills build on earlier techniques. Make sure those foundations are solid before pushing for the top.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" render={<Link href="/revision/grade-targets/grade-5" />}>
              {isLetterSystem ? 'Grade C Guide' : 'Grade 5 Guide'}
            </Button>
            <Button variant="outline" render={<Link href="/revision/grade-targets/grade-7" />}>
              {isLetterSystem ? 'Grade A Guide' : 'Grade 7 Guide'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
