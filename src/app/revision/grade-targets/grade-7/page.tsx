import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  BookOpen,
  PenTool,
  Sparkles,
  Zap,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { getSetTextsForBoard, type SetText } from '@/lib/board/set-texts'
import {
  getGradeSystemForBoard,
  getBoundaryForGrade,
  gradeNineToLetterEquivalent,
} from '@/lib/board/grade-boundaries'
import { Grade7VocabBank, Grade7ComparisonExample } from './grade-7-interactive'

/* ── Board-specific example essays ────────────────────────────────────── */

type EssayExample = {
  slug: string
  title: string
  author: string
  lowerEssay: string
  higherEssay: string
}

const GRADE_7_EXAMPLES: EssayExample[] = [
  {
    slug: 'an-inspector-calls',
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    lowerEssay:
      "\"Priestley presents Mr Birling as arrogant when he says the Titanic is 'unsinkable, absolutely unsinkable.' The repetition of 'unsinkable' shows how confident he is. This creates dramatic irony because the audience knows the Titanic sank. Priestley does this to show Birling is wrong. In 1912, many capitalists like Birling were overconfident about progress.\"",
    higherEssay:
      "\"Priestley strategically undermines Birling's authority from the outset through the Titanic reference. The emphatic repetition of 'unsinkable' exposes the dangerous certainty of the capitalist class, who believed wealth made them invulnerable. The dramatic irony functions as more than a comedic device; it positions the audience to question every subsequent claim Birling makes, effectively dismantling his credibility before the Inspector arrives. Priestley is indicting an entire ideology - the post-war audience of 1945 would have recognised Birling's worldview as catastrophically misguided.\"",
  },
  {
    slug: 'macbeth',
    title: 'Macbeth',
    author: 'William Shakespeare',
    lowerEssay:
      "\"Shakespeare shows Macbeth is guilty when he sees the dagger. He says it is a 'fatal vision.' The word 'fatal' means deadly which is dramatic irony because Macbeth is going to kill Duncan. It shows he knows the murder is wrong but still does it.\"",
    higherEssay:
      "\"Shakespeare's choice of 'fatal vision' operates on multiple levels: 'fatal' carries both its modern sense of deadly and its older meaning of fated, implicating Macbeth in a deterministic reading of his own downfall. The hallucination becomes not merely a symptom of guilt but a manifestation of the Jacobean anxiety about supernatural intervention in human agency. Shakespeare lets ambiguity do the work - the audience cannot determine whether Macbeth is acting or being acted upon, a question that destabilises his moral culpability.\"",
  },
  {
    slug: 'jekyll-and-hyde',
    title: 'Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    lowerEssay:
      "\"Stevenson makes Hyde seem inhuman by describing him as 'something troglodytic.' The word 'troglodytic' means caveman-like, showing Hyde is less evolved. This reflects Victorian fears about evolution and Darwin's theories. Stevenson is saying that inside everyone is a more primitive self.\"",
    higherEssay:
      "\"Stevenson's careful choice of the vague pronoun 'something' before 'troglodytic' is more unsettling than any specific description could be - it denies Hyde the dignity of taxonomy. The scientific register evokes post-Darwinian anxieties about devolution, but Stevenson goes further: the inability to classify Hyde exposes the inadequacy of Victorian rationalism itself. What cannot be named cannot be contained, and Stevenson uses this failure of language to suggest that the repressive moral framework of his society was always producing its own monsters.\"",
  },
  {
    slug: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    lowerEssay:
      '"Dickens describes Scrooge using lots of verbs - \'squeezing, wrenching, grasping, scraping, clutching, covetous\'. This creates a list which emphasises how greedy he is. Dickens wanted to show Victorian readers that being mean to the poor was wrong."',
    higherEssay:
      "\"The asyndetic pileup of predatory verbs - 'squeezing, wrenching, grasping, scraping, clutching' - enacts the relentlessness of Scrooge's avarice through the form of the sentence itself. Each verb intensifies the physical violence of extraction, as if Dickens wants his reader to feel the labour being pulled from workers' bodies. This is not mere characterisation but a political indictment: Dickens fuses Scrooge with the industrial economy that created him, suggesting that Victorian capitalism cannot be separated from the men who benefit from it.\"",
  },
  {
    slug: 'romeo-and-juliet',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    lowerEssay:
      '"Romeo uses a metaphor to describe Juliet. He says she \'is the sun\' which shows she is beautiful and important to him. This was written in the Elizabethan era when romantic love was seen as powerful."',
    higherEssay:
      '"Shakespeare elevates Juliet to celestial proportions through the metaphor \'It is the east, and Juliet is the sun\', yet the cosmic framing is double-edged. By casting Juliet as the source of all light, Romeo simultaneously sublimates and erases her - she exists only as a body that illuminates his world. The metaphor foreshadows the fatal intensity of their love: suns, after all, consume what they warm. A Renaissance audience trained in Petrarchan convention would recognise the hyperbole as romantic, but also as dangerous."',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    lowerEssay:
      '"The creature tells Victor \'I was benevolent and good; misery made me a fiend.\' This shows he was nice until society rejected him. Shelley wrote this because of her Romantic beliefs that nature is good and society is bad."',
    higherEssay:
      "\"Shelley undermines the Enlightenment faith in innate rationality through the creature's elegiac declaration: 'I was benevolent and good; misery made me a fiend.' The past tense performs the tragedy - the creature speaks of his former self as a dead thing, unreachable. Shelley inverts the creation narrative: the monster is not born bad but made bad, which implicates Victor and, by extension, a society that measures worth by appearance. The creature's articulacy itself refuses the reader the comfort of dismissing him as brute.\"",
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    lowerEssay:
      "\"Austen's opening line says 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.' This is ironic because it is really the women who want to marry rich men. Austen is criticising how women had to marry for money in Regency England.\"",
    higherEssay:
      "\"Austen's famous opening deploys mock-philosophical syntax - 'a truth universally acknowledged' - to satirise the marriage market before the plot has even begun. The detached, aphoristic voice mimics the very ideology it exposes, implicating the reader in its assumptions before undercutting them. Austen is not merely mocking the Bennet girls or their mothers; she is exposing how economic pressure was rebranded as universal truth to disguise the coerced nature of female choice in Regency society.\"",
  },
]

function getExampleForBoard(setTexts: SetText[]): EssayExample | null {
  for (const example of GRADE_7_EXAMPLES) {
    if (setTexts.some((t) => t.slug === example.slug)) return example
  }
  return null
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default async function Grade7Page() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const setTexts = getSetTextsForBoard(board)
  const example = getExampleForBoard(setTexts)
  const gradeSystem = getGradeSystemForBoard(board)
  const boundary = getBoundaryForGrade(board, '7')
  const isLetterSystem = gradeSystem === 'A*-G'
  const displayGradeLabel = isLetterSystem ? `Grade ${gradeNineToLetterEquivalent('7')}` : 'Grade 7'
  const lowerLabel = isLetterSystem ? 'Grade B' : 'Grade 6'
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <span className="text-lg font-bold text-emerald-400">{isLetterSystem ? 'A' : '7'}</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              How to Get {isLetterSystem ? 'an A' : 'a Grade 7'}
              {boardConfig && (
                <span className="text-muted-foreground"> - {boardConfig.shortName}</span>
              )}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Thoughtful, developed, and perceptive analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── Board-specific banner ─────────────────────────────── */}
      {isLetterSystem && (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-start gap-3">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">
              Cambridge IGCSE uses A*-G grading.{' '}
            </span>
            For Cambridge IGCSE, a <span className="font-semibold text-foreground">Grade A</span> is
            the closest equivalent to a{' '}
            <span className="font-semibold text-foreground">9-1 Grade 7</span>.
          </div>
        </div>
      )}

      {/* ── What it looks like ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Target className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            What a {displayGradeLabel} Looks Like
          </h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          {displayGradeLabel} is where markers start using words like &quot;thoughtful&quot;,
          &quot;developed&quot;, and &quot;perceptive&quot;. The difference between mid-band and
          this level is not about knowing more content - it is about how deeply and precisely you
          analyse. A {displayGradeLabel} student does not just explain; they interpret.
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
              You need approximately{' '}
              <span className="font-semibold text-primary">{boundary.percent}%</span> of total marks
              to reach {boundary.label} in {boardConfig.shortName}.
              {boundary.systemNote && (
                <>
                  {' '}
                  <span className="italic">{boundary.systemNote}</span>
                </>
              )}
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
                'Thoughtful, developed analysis of language and structure',
                'Judicious use of textual references - carefully chosen, not just relevant',
                'Shows understanding of how meanings are shaped by methods',
                'Clear, well-developed argument that progresses logically',
                'Thoughtful engagement with context that enhances analysis',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-emerald-400" />
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
                'Perceptive, detailed analysis of language effects',
                'Explores how structure shapes meaning across the whole text',
                'Convincing, developed evaluation with sharp judgements',
                'Creative writing is compelling with crafted choices',
                'Transactional writing is convincing with controlled tone',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
          <Lightbulb className="size-4 shrink-0 text-emerald-400 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">
              The key word is &quot;thoughtful.&quot;{' '}
            </span>
            {displayGradeLabel} responses do not just explain what a technique does - they consider
            why the writer chose it, what alternatives existed, and how it connects to the bigger
            picture.
          </p>
        </div>
      </section>

      {/* ── Upgrading (universal) ─────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            Upgrading to the Top Band
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          If you are consistently getting mid-band grades, you already have the foundations. Here
          are the specific shifts that take you into the top band:
        </p>

        <div className="space-y-4">
          {[
            {
              from: 'Explaining what a quote means',
              to: 'Exploring why the writer chose those specific words over alternatives',
              example:
                "Instead of \"The word 'dark' suggests evil,\" write \"The choice of 'dark' over 'black' or 'shadowed' creates a more abstract, all-encompassing sense of moral corruption.\"",
            },
            {
              from: 'Commenting on individual quotes in isolation',
              to: 'Tracking patterns and connecting ideas across the whole text',
              example:
                'You might track how a motif (like blood, light, or nature) develops across the text and show how its meaning shifts.',
            },
            {
              from: 'Stating context as a separate fact',
              to: 'Weaving context into your analysis so it enhances your point',
              example:
                'Instead of "In Victorian times, women had no rights. This is shown when..." weave the context into the analytical sentence itself.',
            },
            {
              from: 'Writing PEEL paragraphs with clear sections',
              to: 'Writing fluid paragraphs where analysis and evidence flow together',
              example:
                'Your paragraphs should not feel like four separate boxes. The best top-band paragraphs weave point, evidence, and analysis together so the reader cannot see the joins.',
            },
            {
              from: 'Identifying one interpretation of a quote',
              to: 'Considering multiple possible meanings',
              example:
                'Use phrases like "This could suggest... however, it might also imply..." or "On one level this represents... but on another it reflects..."',
            },
          ].map((shift) => (
            <div
              key={shift.from}
              className="rounded-xl border border-border/40 bg-background/50 p-5"
            >
              <div className="grid gap-3 sm:grid-cols-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-muted/60 text-[10px] font-bold text-muted-foreground">
                    ↓
                  </div>
                  <p className="text-xs text-muted-foreground">{shift.from}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-[10px] font-bold text-emerald-400">
                    ↑
                  </div>
                  <p className="text-xs text-foreground font-medium">{shift.to}</p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/20 p-3">
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  {shift.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Advanced techniques (universal) ──────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            Advanced Analytical Techniques
          </h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              1. Zoom in, then zoom out
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Analyse a single word in microscopic detail, then zoom out to show how it connects to
              a bigger theme or idea. This creates analytical depth.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              2. Explore semantic fields
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Rather than analysing one technique, identify a pattern of related words (a semantic
              field) and explain what it cumulatively creates. This is much more impressive than
              analysing each word separately.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              3. Comment on what is absent, not just what is present
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Top students notice what the writer chooses not to include - silences, gaps,
              omissions. Commenting on absence shows sophisticated thinking.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              4. Use structural analysis as a tool
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Do not just say &quot;the poem has 6 stanzas.&quot; Explain what the structural
              choices do. Does the text shift tone halfway through? Does the ending mirror or
              subvert the opening? Structural comments should explain how form contributes to
              meaning.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              5. Track a thread across a whole text
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              In your essay, show how an idea develops, shifts, or intensifies across the text. This
              shows you understand the text as a whole, not just isolated moments.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vocabulary Bank (client island) ──────────────────── */}
      <Grade7VocabBank />

      {/* ── Example Comparison (board-filtered) ──────────────── */}
      {example ? (
        <Grade7ComparisonExample
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
          Example comparisons are filtered based on the texts you study. Set your exam board to see
          a relevant example.
        </div>
      )}

      {/* ── Next Step ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-amber-500/[0.04] p-6 sm:p-8 text-center">
        <h2 className="text-heading-md font-heading text-foreground mb-2">Aiming even higher?</h2>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-lg mx-auto">
          The very top grades are distinguished by conceptualised thinking, critical engagement, and
          sophisticated expression. See what the very top looks like.
        </p>
        <Button
          variant="default"
          size="lg"
          render={<Link href="/revision/grade-targets/grade-9" />}
        >
          {isLetterSystem ? 'How to Get an A*' : 'How to Get a Grade 9'}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
