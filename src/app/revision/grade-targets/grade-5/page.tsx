import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Target,
  BookOpen,
  PenTool,
  Sparkles,
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
import { Grade5Checklist, Grade5ComparisonExample } from './grade-5-interactive'

/* ── Board-specific example essays keyed by text slug ─────────────────── */

type EssayExample = {
  slug: string
  title: string
  author: string
  lowerEssay: string
  higherEssay: string
}

const GRADE_5_EXAMPLES: EssayExample[] = [
  {
    slug: 'macbeth',
    title: 'Macbeth',
    author: 'William Shakespeare',
    lowerEssay:
      '"In Macbeth, Macbeth sees a dagger floating in front of him. He says \'Is this a dagger which I see before me, the handle toward my hand?\' This shows he is going mad because he can see things that are not there. He is about to kill Duncan and feels bad about it."',
    higherEssay:
      "\"Shakespeare presents Macbeth's guilt through the hallucinated dagger, described as a 'fatal vision.' The adjective 'fatal' suggests both deadly and fated, hinting that Macbeth feels the killing is inevitable. The fact that he 'cannot clutch' it creates a sense of his inner conflict. A Jacobean audience would have seen this as a warning from God against the sin he is about to commit.\"",
  },
  {
    slug: 'an-inspector-calls',
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    lowerEssay:
      '"Priestley shows Mr Birling is a bad man because he says the Titanic is \'unsinkable, absolutely unsinkable.\' This is dramatic irony because the Titanic sank. Priestley does this to show Mr Birling is wrong about lots of things."',
    higherEssay:
      "\"Priestley uses dramatic irony to undermine Birling's authority from the very start. The emphatic repetition of 'unsinkable' exposes his blind confidence, which Priestley uses to warn a post-war audience about the dangers of capitalist complacency. The adjective 'absolutely' reinforces how certain - and wrong - Birling is.\"",
  },
  {
    slug: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    lowerEssay:
      '"Dickens shows Scrooge is a bad person at the start. He says he is a \'squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner.\' This shows he is mean and does not like people."',
    higherEssay:
      '"Dickens characterises Scrooge through a cumulative list of verbs - \'squeezing, wrenching, grasping\' - each suggesting physical force. The verbs make Scrooge seem predatory, as if his greed is violently extracting value from others. Dickens wanted his Victorian readers to recognise this attitude in themselves and change."',
  },
  {
    slug: 'jekyll-and-hyde',
    title: 'Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    lowerEssay:
      '"Stevenson describes Hyde as \'something troglodytic.\' This makes him sound like a caveman and shows he is evil."',
    higherEssay:
      "\"Stevenson's description of Hyde as 'something troglodytic' dehumanises him - he is not even a person but a 'something.' The adjective suggests devolution, reflecting Victorian fears about regression and degeneration. A contemporary reader would have recognised this as a warning about the hidden 'primitive' side of human nature.\"",
  },
  {
    slug: 'romeo-and-juliet',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    lowerEssay:
      '"Romeo says Juliet is like the sun. \'But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.\' This shows he loves her."',
    higherEssay:
      '"Shakespeare uses a celestial metaphor as Romeo declares Juliet \'is the sun.\' The metaphor elevates her beyond earthly beauty and positions Romeo as someone who needs her to survive, since the sun gives life. A Renaissance audience would have recognised this as hyperbolic courtly love, yet also potentially dangerous in its intensity."',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    lowerEssay:
      '"The creature says \'I was benevolent and good; misery made me a fiend.\' This shows he was nice but then became bad because people were mean to him."',
    higherEssay:
      "\"Shelley uses the creature's declaration - 'I was benevolent and good; misery made me a fiend' - to challenge her Romantic-era readers' assumptions about innate evil. The past tense 'was' reveals a lost, corrupted innocence, suggesting that society, not nature, creates monsters. The phrase invites sympathy with a figure who appears monstrous on the surface.\"",
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    lowerEssay:
      '"Austen starts the book by saying \'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\' This is about how rich men need to get married."',
    higherEssay:
      '"Austen opens with a mock-philosophical declaration - \'a truth universally acknowledged\' - that immediately satirises Regency society. The authoritative tone sets up irony: it is not men who want wives but women and their mothers who want rich husbands. Austen exposes how marriage was treated as an economic transaction."',
  },
]

function getExampleForBoard(setTexts: SetText[]): EssayExample | null {
  for (const example of GRADE_5_EXAMPLES) {
    if (setTexts.some((t) => t.slug === example.slug)) return example
  }
  return null
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default async function Grade5Page() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const setTexts = getSetTextsForBoard(board)
  const example = getExampleForBoard(setTexts)
  const gradeSystem = getGradeSystemForBoard(board)
  const boundary = getBoundaryForGrade(board, '5')
  const isLetterSystem = gradeSystem === 'A*-G'
  const displayGradeLabel = isLetterSystem ? `Grade ${gradeNineToLetterEquivalent('5')}` : 'Grade 5'
  const lowerLabel = isLetterSystem ? 'Grade D' : 'Grade 4'
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <span className="text-lg font-bold text-cyan-400">{isLetterSystem ? 'C' : '5'}</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              How to Get a {displayGradeLabel}
              {boardConfig && (
                <span className="text-muted-foreground"> - {boardConfig.shortName}</span>
              )}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              The &quot;strong pass&quot; - clear, explained, and supported responses
            </p>
          </div>
        </div>
      </div>

      {/* ── Board-specific note ───────────────────────────────── */}
      {isLetterSystem && (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-start gap-3">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">
              Cambridge IGCSE uses A*-G grading.{' '}
            </span>
            For Cambridge IGCSE, a <span className="font-semibold text-foreground">Grade C</span> is
            the closest equivalent to a{' '}
            <span className="font-semibold text-foreground">9-1 Grade 5</span>. The advice below
            applies at this level.
          </div>
        </div>
      )}

      {/* ── What Grade 5 Looks Like ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <Target className="size-4.5 text-cyan-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            What a {displayGradeLabel} Looks Like
          </h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          A {displayGradeLabel} response is the &quot;strong pass&quot; - it is above average and
          shows clear understanding. Markers describe it as having &quot;clear&quot; and
          &quot;explained&quot; ideas with relevant evidence. Here is what that means in practice:
        </p>

        {/* Board-specific mark boundary */}
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
              to reach {boundary.label} in {boardConfig.shortName}. This shifts slightly year to
              year, so always check the latest boundaries.
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
              English Literature ({displayGradeLabel})
            </h3>
            <ul className="space-y-2.5">
              {[
                'Clear understanding of the text and its themes',
                'Relevant references and quotations used as evidence',
                "Clear explanation of the effect of writer's methods",
                'Some use of subject terminology (but it does not have to be perfect)',
                'Ideas are clearly organised in paragraphs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <PenTool className="size-4 text-violet-400" />
              English Language ({displayGradeLabel})
            </h3>
            <ul className="space-y-2.5">
              {[
                'Clear comments on language effects with relevant examples',
                'Attempts to explain how structure affects the reader',
                'Clear evaluation with some convincing opinions',
                'Creative writing shows varied vocabulary and sentence structures',
                'Transactional writing is well-organised with appropriate tone',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Key Skills Needed (universal advice) ─────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Sparkles className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Key Skills You Need</h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              1. Use PEE/PEEL paragraphs consistently
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every analytical paragraph needs a Point (what you are arguing), Evidence (a short
              quote), Explanation (what it means and how it works), and ideally a Link back to the
              question or to a wider theme. This structure alone can lift you one grade.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              2. Embed short quotes, not long ones
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Lower-grade students often copy out whole sentences or lines. Stronger students pick
              the key words and weave them into their own sentences. Instead of writing out a full
              line, pull out two or three words and build your sentence around them.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              3. Name the technique and explain its effect
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Do not just say &quot;this is a metaphor&quot; and move on. Say what the metaphor
              does. Does it make something seem dangerous? Beautiful? Fragile? Use phrases like
              &quot;this suggests...&quot;, &quot;this creates a sense of...&quot;, and &quot;the
              reader feels...&quot;.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              4. Comment on writer&apos;s purpose
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is where you start to show awareness of why the writer made their choices. Think
              about what the writer wants the reader to feel, think, or question. For Literature,
              consider the context your board expects.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              5. Vary your sentence structures in writing tasks
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For Language papers, your creative and transactional writing needs variety. Use short
              sentences for impact. Use longer, complex sentences for description. Start some
              sentences with an adverb or a present participle. This variety is what markers mean by
              &quot;crafting&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-red-500/10">
            <AlertTriangle className="size-4.5 text-red-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            Common Mistakes (and How to Fix Them)
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              mistake: 'Retelling the story instead of analysing it',
              fix: 'After every sentence you write, ask yourself: "Am I saying WHAT happens or WHY the writer did it?" If it is "what happens," turn it into analysis by adding "This suggests..." or "The writer does this to..."',
            },
            {
              mistake: 'Using long, unselected quotes',
              fix: 'Never quote more than about 6 words. Find the two or three most important words in a quote and embed them into your own sentence.',
            },
            {
              mistake: 'Naming a technique but not explaining its effect',
              fix: 'Every time you identify a technique, immediately follow it with "which creates a sense of..." or "which makes the reader feel...". The technique identification is worth very little on its own.',
            },
            {
              mistake: 'Not answering the question directly',
              fix: 'Start every paragraph by referring back to the exact words in the question. This keeps you focused and stops you going off on tangents.',
            },
          ].map((item) => (
            <div
              key={item.mistake}
              className="rounded-xl border border-border/40 bg-background/50 p-5"
            >
              <div className="flex items-start gap-2 mb-2">
                <XCircle className="size-4 shrink-0 text-red-400 mt-0.5" />
                <h3 className="text-sm font-semibold text-red-400">{item.mistake}</h3>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mastery Checklist (client island) ─────────────────── */}
      <Grade5Checklist />

      {/* ── Example Comparison (board-filtered) ───────────────── */}
      {example ? (
        <Grade5ComparisonExample
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
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-emerald-500/[0.04] p-6 sm:p-8 text-center">
        <h2 className="text-heading-md font-heading text-foreground mb-2">Ready to push higher?</h2>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-lg mx-auto">
          Once you have mastered these skills, the next step is developing more analytical depth and
          embedding your analysis more seamlessly.
        </p>
        <Button
          variant="default"
          size="lg"
          render={<Link href="/revision/grade-targets/grade-7" />}
        >
          {isLetterSystem ? 'How to Get an A' : 'How to Get a Grade 7'}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
