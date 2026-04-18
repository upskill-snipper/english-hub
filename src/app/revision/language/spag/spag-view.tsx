'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  SpellCheck,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  AlertTriangle,
  Type,
  BookOpen,
  XCircle,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import type { ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard } from '@/lib/board/board-filter'

/* ── Helpers ──────────────────────────────────────────────────────── */

function Section({
  title,
  icon: Icon,
  colour,
  children,
  defaultOpen = false,
}: {
  title: string
  icon: typeof SpellCheck
  colour: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-5 text-left transition-colors hover:bg-accent/30"
      >
        <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/10">
          <Icon className={`size-4 ${colour}`} />
        </div>
        <h2 className="flex-1 text-heading-md font-heading text-foreground">
          {title}
        </h2>
        {open ? (
          <ChevronUp className="size-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-4 text-muted-foreground" />
        )}
      </button>
      {open && <div className="border-t border-border/40 p-5 pt-4">{children}</div>}
    </div>
  )
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
      <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
      <div className="text-body-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function CorrectIncorrect({
  incorrect,
  correct,
  explanation,
}: {
  incorrect: string
  correct: string
  explanation: string
}) {
  return (
    <div className="rounded-lg border border-border/40 p-3 space-y-2">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="flex items-start gap-2 rounded-md bg-destructive/5 px-3 py-2">
          <XCircle className="mt-0.5 size-3.5 shrink-0 text-destructive" />
          <span className="text-xs text-muted-foreground line-through">{incorrect}</span>
        </div>
        <div className="flex items-start gap-2 rounded-md bg-emerald-500/5 px-3 py-2">
          <SpellCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
          <span className="text-xs text-foreground">{correct}</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{explanation}</p>
    </div>
  )
}

/* ── Main page ────────────────────────────────────────────────────── */

interface SpagViewProps {
  boardId: ExamBoard | null
  boardName: string
}

const BOARD_SPAG_MARK_NOTES: Partial<Record<ExamBoard, string>> = {
  aqa: 'On AQA, 16 out of 40 marks on each writing question are awarded for technical accuracy (AO6) -- that is 40% of the writing mark.',
  edexcel: 'On Edexcel, technical accuracy is assessed explicitly under AO6 for every writing task and contributes a significant portion of the writing mark.',
  ocr: 'On OCR, technical accuracy carries 16 out of 40 marks on each writing question -- the same 40% weighting as the other major boards.',
  eduqas: 'On Eduqas, 16 of the 40 marks on Component 1 Section B and a matching weighting across Component 2 Section B tasks are for technical accuracy.',
}

export default function SpagView({ boardId, boardName }: SpagViewProps) {
  const markNote =
    boardId && BOARD_SPAG_MARK_NOTES[boardId]
      ? BOARD_SPAG_MARK_NOTES[boardId]
      : 'SPaG marks are awarded on every writing task across every exam board. Typically around 40% of the writing mark is for technical accuracy.'
  const showIgcseBanner = isIgcseBoard(boardId)

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/language" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Language Skills
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <SpellCheck className="size-5 text-clay-600" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Spelling, Punctuation &amp; Grammar
              </h1>
              {boardId && (
                <Badge variant="secondary" className="text-xs">
                  Applies to {boardName}
                </Badge>
              )}
            </div>
            <p className="text-body-sm text-muted-foreground">
              The technical accuracy that earns (and loses) marks on every paper
            </p>
          </div>
        </div>
      </div>

      {/* IGCSE banner */}
      {showIgcseBanner && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-4 flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-clay-600" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              SPaG is universal -- every board rewards it
            </p>
            <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
              Spelling, punctuation, and grammar rules are identical across GCSE
              and IGCSE. The specific marking guide weighting differs -- see{' '}
              <Link
                href={
                  boardId === 'cambridge-0500'
                    ? '/igcse/cambridge/0500'
                    : boardId === 'cambridge-0990'
                    ? '/igcse/cambridge/0990'
                    : '/igcse/edexcel'
                }
                className="text-primary underline hover:no-underline"
              >
                your IGCSE hub
              </Link>{' '}
              for exact mark allocations.
            </p>
          </div>
        </div>
      )}

      {/* Intro note */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4 flex items-start gap-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-clay-600" />
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          {markNote} Getting these basics right is one of the fastest ways to
          boost your grade.
        </p>
      </div>

      {/* ── 1. Spelling Rules and Common Errors ──────────────────── */}
      <Section title="Spelling Rules and Common Errors" icon={SpellCheck} colour="text-clay-600" defaultOpen>
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Markers do not expect perfect spelling, but persistent errors in common words
            will pull your marks down. Focus on mastering these high-frequency mistakes.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              The Most Commonly Misspelled Words in GCSE English
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { wrong: 'definately', right: 'definitely', rule: 'Think "definite" + "ly"' },
                { wrong: 'seperate', right: 'separate', rule: 'There is "a rat" in separate' },
                { wrong: 'occured', right: 'occurred', rule: 'Double "c" and double "r"' },
                { wrong: 'recieve', right: 'receive', rule: '"i" before "e" except after "c"' },
                { wrong: 'wierd', right: 'weird', rule: 'Exception to the i/e rule -- just memorise it' },
                { wrong: 'truely', right: 'truly', rule: 'Drop the "e" when adding "-ly" to "true"' },
                { wrong: 'arguement', right: 'argument', rule: 'Drop the "e" when adding "-ment"' },
                { wrong: 'goverment', right: 'government', rule: 'There is an "n" in "govern" + "ment"' },
                { wrong: 'enviroment', right: 'environment', rule: '"environ" + "ment" -- do not drop the "n"' },
                { wrong: 'dissapoint', right: 'disappoint', rule: 'One "s", two "p"s' },
                { wrong: 'neccessary', right: 'necessary', rule: 'One "c", two "s"s: "one collar, two socks"' },
                { wrong: 'concious', right: 'conscious', rule: '"sci" in the middle, like "science"' },
              ].map((item) => (
                <div key={item.wrong} className="rounded-lg border border-border/40 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-destructive/70 line-through">{item.wrong}</span>
                    <span className="text-xs text-muted-foreground">&rarr;</span>
                    <span className="text-xs font-semibold text-foreground">{item.right}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Key Spelling Rules</h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>i before e except after c</strong> (when the sound is &ldquo;ee&rdquo;):
                believe, achieve, receive, ceiling. Exceptions: weird, seize, neither.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Doubling consonants:</strong> When adding a suffix to a short vowel +
                consonant word, double the final consonant: run &rarr; running, stop &rarr;
                stopped, begin &rarr; beginning.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Drop the silent e:</strong> When adding a suffix beginning with a
                vowel: hope &rarr; hoping, make &rarr; making, write &rarr; writing. Keep the
                &ldquo;e&rdquo; before consonant suffixes: hope &rarr; hopeful.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Change y to i:</strong> When the letter before &ldquo;y&rdquo; is a
                consonant: happy &rarr; happiness, beauty &rarr; beautiful. Do not change
                when the letter before &ldquo;y&rdquo; is a vowel: play &rarr; played.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Homophones That Trip Students Up
            </h3>
            <div className="space-y-2">
              <CorrectIncorrect
                incorrect="There going to the shop over they're."
                correct="They're going to the shop over there."
                explanation="They're = they are. There = a place. Their = belonging to them."
              />
              <CorrectIncorrect
                incorrect="Your not going to believe this."
                correct="You're not going to believe this."
                explanation="You're = you are. Your = belonging to you."
              />
              <CorrectIncorrect
                incorrect="The dog wagged it's tail."
                correct="The dog wagged its tail."
                explanation="Its = belonging to it (possessive). It's = it is / it has."
              />
              <CorrectIncorrect
                incorrect="I could of done better."
                correct="I could have done better."
                explanation="'Could of' does not exist. The contraction is 'could've' (could have)."
              />
            </div>
          </div>

          <TipBox>
            <strong>Exam strategy:</strong> If you are unsure how to spell a word, use a
            synonym you can spell instead. Markers reward ambition but persistent basic
            errors cost marks. Play to your strengths.
          </TipBox>
        </div>
      </Section>

      {/* ── 2. Punctuation Guide ─────────────────────────────────── */}
      <Section title="Punctuation Guide" icon={Type} colour="text-blue-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Accurate punctuation is not just about avoiding errors -- it is a tool for
            controlling meaning, pace, and clarity. Using a range of punctuation marks
            (beyond full stops and commas) is explicitly rewarded in the marking guide.
          </p>

          <Tabs defaultValue="commas">
            <TabsList className="w-full sm:w-auto flex-wrap">
              <TabsTrigger value="commas">Commas</TabsTrigger>
              <TabsTrigger value="semicolons">Semicolons</TabsTrigger>
              <TabsTrigger value="colons">Colons</TabsTrigger>
              <TabsTrigger value="dashes">Dashes</TabsTrigger>
              <TabsTrigger value="apostrophes">Apostrophes</TabsTrigger>
            </TabsList>

            <TabsContent value="commas" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Commas</h3>
              <p className="text-body-sm text-muted-foreground">
                The comma is the most misused punctuation mark. Its core purpose is to
                separate ideas within a sentence for clarity.
              </p>
              <div className="space-y-2">
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">After a fronted adverbial</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;Reluctantly, she opened the door.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">In a list</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;She packed a torch, a map, a compass and a water bottle.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">To separate a subordinate clause</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;Although the sun was shining, the wind cut through her coat.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">For parenthetical information</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;The building, which had stood for two centuries, finally collapsed.&rdquo;</p>
                </div>
              </div>
              <CorrectIncorrect
                incorrect="The boy, ran quickly."
                correct="The boy ran quickly."
                explanation="Never put a comma between a subject and its verb. This is the single most common comma error."
              />
            </TabsContent>

            <TabsContent value="semicolons" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Semicolons</h3>
              <p className="text-body-sm text-muted-foreground">
                A semicolon joins two complete sentences that are closely related in meaning.
                Both halves must be able to stand alone as full sentences.
              </p>
              <div className="rounded-lg border border-border/40 p-3">
                <span className="text-xs font-semibold text-foreground">The test</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Replace the semicolon with a full stop. If both parts still make sense as
                  separate sentences, the semicolon is correct.
                </p>
              </div>
              <CorrectIncorrect
                incorrect="The night was cold; and dark."
                correct="The night was cold; the stars were hidden behind cloud."
                explanation="'and dark' is not a complete sentence. Both sides of a semicolon must be independent clauses."
              />
              <TipBox>
                Using even one semicolon correctly in your writing signals to the marker
                that you have control over complex punctuation. It is one of the easiest
                marks to pick up.
              </TipBox>
            </TabsContent>

            <TabsContent value="colons" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Colons</h3>
              <p className="text-body-sm text-muted-foreground">
                A colon introduces something -- a list, an explanation, or an elaboration.
                Think of it as saying &ldquo;here is what I mean&rdquo; or &ldquo;for
                example.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">To introduce a list</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;She needed three things: courage, patience, and luck.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">To explain or elaborate</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;He knew the truth: she was never coming back.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">For dramatic effect</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;There was only one option: run.&rdquo;</p>
                </div>
              </div>
              <CorrectIncorrect
                incorrect="The ingredients are: flour, sugar and butter."
                correct="The ingredients are flour, sugar and butter."
                explanation="Do not use a colon after a verb. The clause before a colon should be a complete sentence."
              />
            </TabsContent>

            <TabsContent value="dashes" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Dashes</h3>
              <p className="text-body-sm text-muted-foreground">
                Dashes (em dashes) are versatile -- they can replace commas, colons, or
                parentheses. They create a slightly more dramatic, informal, or emphatic
                pause.
              </p>
              <div className="space-y-2">
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">For an interruption or afterthought</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;The house -- if you could call it that -- leaned at an impossible angle.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">For dramatic revelation</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;She turned the corner and saw it -- the ocean.&rdquo;</p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">To add information</span>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;The journey -- which had taken three days by horse -- now took two hours.&rdquo;</p>
                </div>
              </div>
              <TipBox>
                Dashes are great for creative writing because they feel natural and
                spontaneous. In transactional writing, use them more sparingly -- colons and
                semicolons feel more formal.
              </TipBox>
            </TabsContent>

            <TabsContent value="apostrophes" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Apostrophes</h3>
              <p className="text-body-sm text-muted-foreground">
                Apostrophes have exactly two uses. Confusing them (or using them for plurals)
                is one of the most penalised errors in GCSE English.
              </p>
              <div className="space-y-2">
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">1. Contraction (missing letters)</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    do not &rarr; don&apos;t, they are &rarr; they&apos;re, it is &rarr; it&apos;s, could have &rarr; could&apos;ve
                  </p>
                </div>
                <div className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">2. Possession (belonging to)</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Singular: the girl&apos;s book (one girl). Plural: the girls&apos; books (multiple girls). Irregular plural: the children&apos;s toys.
                  </p>
                </div>
              </div>
              <CorrectIncorrect
                incorrect="The cat's are playing. Apple's for sale."
                correct="The cats are playing. Apples for sale."
                explanation="NEVER use an apostrophe to make a plural. This is called the 'greengrocer's apostrophe' and markers specifically look for it."
              />
              <CorrectIncorrect
                incorrect="The team played it's best game."
                correct="The team played its best game."
                explanation="'Its' (no apostrophe) = belonging to it. 'It's' (with apostrophe) = it is. Think: 'his' and 'hers' don't have apostrophes either."
              />
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      {/* ── 3. Grammar Essentials ────────────────────────────────── */}
      <Section title="Grammar Essentials" icon={BookOpen} colour="text-emerald-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Grammar errors undermine even the most creative or insightful writing. The
            marking guide rewards &ldquo;controlled&rdquo; writing -- which means your grammar
            should be deliberate, not accidental.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Tense Consistency</h3>
            <p className="text-body-sm text-muted-foreground">
              Choose a tense and stick with it. Shifting between past and present tense
              randomly is one of the most common errors in creative writing.
            </p>
            <CorrectIncorrect
              incorrect="She walked through the door and sees the broken window."
              correct="She walked through the door and saw the broken window."
              explanation="The sentence starts in past tense ('walked') but switches to present ('sees'). Stay in one tense unless you are deliberately shifting for effect."
            />
            <div className="rounded-lg border border-border/40 p-3">
              <span className="text-xs font-semibold text-foreground">When tense shifts ARE acceptable</span>
              <p className="mt-1 text-xs text-muted-foreground">
                Flashbacks (past within a present-tense narrative), dialogue (characters can
                speak in any tense), and reflective commentary (a narrator looking back) are
                all legitimate reasons to change tense -- but these should be signalled
                clearly with a new paragraph or temporal marker.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Subject-Verb Agreement</h3>
            <p className="text-body-sm text-muted-foreground">
              The verb must match the number of the subject -- singular subjects take singular
              verbs, plural subjects take plural verbs.
            </p>
            <CorrectIncorrect
              incorrect="The group of students were talking loudly."
              correct="The group of students was talking loudly."
              explanation="The subject is 'group' (singular), not 'students.' Ignore the words between the subject and verb."
            />
            <CorrectIncorrect
              incorrect="Neither the teacher nor the students was paying attention."
              correct="Neither the teacher nor the students were paying attention."
              explanation="With 'neither...nor', the verb agrees with the nearest subject. 'Students' is plural, so use 'were.'"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Sentence Types</h3>
            <p className="text-body-sm text-muted-foreground">
              Understanding sentence types helps you write with variety and control. Every
              sentence you write should be one of these:
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                {
                  type: 'Simple',
                  def: 'One independent clause with a subject and verb.',
                  example: 'The rain stopped.',
                },
                {
                  type: 'Compound',
                  def: 'Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).',
                  example: 'The rain stopped, but the sky remained grey.',
                },
                {
                  type: 'Complex',
                  def: 'An independent clause + one or more dependent (subordinate) clauses.',
                  example: 'Although the rain had stopped, the streets were still flooded.',
                },
                {
                  type: 'Compound-Complex',
                  def: 'Two independent clauses + at least one dependent clause.',
                  example: 'Although the rain had stopped, the streets were flooded, and the traffic had ground to a halt.',
                },
              ].map((item) => (
                <div key={item.type} className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">{item.type}</span>
                  <p className="mt-1 text-xs text-muted-foreground">{item.def}</p>
                  <p className="mt-1 text-xs italic text-muted-foreground/80">
                    &ldquo;{item.example}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          <TipBox>
            <strong>Marking guide secret:</strong> The jump from Grade 4 to Grade 5 is
            largely about technical accuracy. If you can eliminate tense errors,
            subject-verb disagreements, and comma splices from your writing, you will see
            an immediate grade boost.
          </TipBox>
        </div>
      </Section>

      {/* ── 4. Common Mistakes to Avoid ──────────────────────────── */}
      <Section title="Common Mistakes to Avoid" icon={AlertTriangle} colour="text-rose-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            These are the errors that markers see thousands of times every year. Avoiding
            them puts you ahead of the majority of students.
          </p>

          <div className="space-y-3">
            {[
              {
                mistake: 'Comma splices',
                wrong: 'The door opened, she walked inside.',
                right: 'The door opened. She walked inside. / The door opened; she walked inside. / The door opened, and she walked inside.',
                explanation:
                  'A comma splice is when you join two full sentences with just a comma. Fix it with a full stop, semicolon, or a conjunction.',
              },
              {
                mistake: 'Run-on sentences',
                wrong: 'She ran down the street and turned the corner and saw the building and it was enormous and she could not believe it.',
                right: 'She ran down the street and turned the corner. The building loomed ahead, enormous and unbelievable.',
                explanation:
                  'Stringing clauses together with "and" creates breathless, uncontrolled writing. Break long sentences into shorter ones for clarity and impact.',
              },
              {
                mistake: 'Mixing up similar words',
                wrong: 'The affect of the weather effected everyone. / I was very conscience of the problem.',
                right: 'The effect of the weather affected everyone. / I was very conscious of the problem.',
                explanation:
                  'Effect is usually a noun ("the effect"), affect is usually a verb ("it affected me"). Conscious means aware; conscience is your sense of right and wrong.',
              },
              {
                mistake: 'Starting every sentence with "I" or "The"',
                wrong: 'I walked to the door. I opened it slowly. I peered inside. The room was dark.',
                right: 'Slowly, I approached the door. My fingers trembled on the handle. Beyond it, darkness waited.',
                explanation:
                  'Repetitive sentence openings create monotonous writing. Start with adverbs, prepositional phrases, or subordinate clauses for variety.',
              },
              {
                mistake: 'Using slang or text-speak',
                wrong: 'The character is like really sad and stuff. Its kinda obvious the writer wants us to feel bad.',
                right: 'The writer conveys a profound sense of sorrow. It is evident that the reader is positioned to feel sympathy.',
                explanation:
                  'Formal and semi-formal registers are expected in GCSE English. Avoid "like," "kinda," "stuff," "basically," and "literally" (unless analysing informal text).',
              },
              {
                mistake: 'Double negatives',
                wrong: "I don't know nothing about it.",
                right: "I don't know anything about it. / I know nothing about it.",
                explanation:
                  'Two negatives cancel each other out in Standard English, creating the opposite meaning to what you intend.',
              },
            ].map((item) => (
              <div key={item.mistake} className="rounded-xl border border-border/60 p-4">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                  <XCircle className="size-3.5 text-destructive" />
                  {item.mistake}
                </h3>
                <CorrectIncorrect
                  incorrect={item.wrong}
                  correct={item.right}
                  explanation={item.explanation}
                />
              </div>
            ))}
          </div>

          <TipBox>
            <strong>Proofreading strategy:</strong> In your exam, leave 3-5 minutes at the
            end of each writing question to read through your work. Read it backwards,
            sentence by sentence -- this forces you to see each sentence in isolation and
            spot errors your brain would otherwise auto-correct when reading forwards.
          </TipBox>
        </div>
      </Section>

      {/* Exam reminder banner */}
      <div className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-emerald-500/[0.04] p-6 text-center">
        <SpellCheck className="mx-auto mb-3 size-7 text-clay-600" />
        <h2 className="text-heading-md font-heading text-foreground">
          Accuracy Is a Habit, Not a Last-Minute Fix
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          The best way to improve your SPaG is to practise it in every piece of writing you
          do -- homework, notes, and timed essays. If you only think about accuracy in the
          exam, it will feel unnatural. Make it second nature now.
        </p>
        <Button
          variant="default"
          size="sm"
          className="mt-4"
          render={<Link href="/revision/language/writing" />}
        >
          Practise in Writing Skills
        </Button>
      </div>
    </div>
  )
}
