'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Search,
  Eye,
  Layers,
  BarChart3,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import type { ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard } from '@/lib/board/board-filter'

/* ── Board-specific reading paper info ────────────────────────────── */

interface ReadingPaperInfo {
  paperLabel: string
  description: string
  questionTypes: string[]
}

const READING_PAPERS: Partial<Record<ExamBoard, ReadingPaperInfo>> = {
  aqa: {
    paperLabel: 'AQA Paper 1 & Paper 2 Reading',
    description:
      'Paper 1 Section A is a single unseen literary fiction extract (40 marks, four questions, 1h 45m paper). Paper 2 Section A is two linked non-fiction texts -- one 19th century and one 20th/21st century -- (40 marks, four questions including comparison, 1h 45m paper).',
    questionTypes: [
      'Paper 1 Q1 (4 marks): List four things from the source',
      'Paper 1 Q2 (8 marks): How does the writer use language...',
      'Paper 1 Q3 (8 marks): How has the writer structured the text...',
      'Paper 1 Q4 (20 marks): Evaluation of a critical statement',
      'Paper 2 Q1 (4 marks): Identify true statements about Source A',
      'Paper 2 Q2 (8 marks): Summary of differences between the texts',
      'Paper 2 Q3 (12 marks): Language analysis of one text',
      "Paper 2 Q4 (16 marks): Compare writers' attitudes/perspectives",
    ],
  },
  edexcel: {
    paperLabel: 'Edexcel Paper 1 & Paper 2 Reading',
    description:
      'Paper 1 (Fiction and Imaginative Writing) reads one 20th/21st century fiction extract. Paper 2 (Non-fiction and Transactional Writing) compares 19th and 20th/21st century non-fiction.',
    questionTypes: [
      'Short retrieval questions on explicit meaning',
      "Language analysis of writer's word choice and techniques",
      "Analysis of writer's use of language and structure",
      "Comparison of writers' ideas and perspectives (Paper 2)",
    ],
  },
  ocr: {
    paperLabel: 'OCR Paper 1 & Paper 2 Reading',
    description:
      'Paper 1 (Communicating Information and Ideas) reads two non-fiction texts from the 19th and 21st century. Paper 2 (Exploring Effects and Impact) reads two 20th/21st century prose fiction extracts.',
    questionTypes: [
      'Information retrieval questions',
      'Language and structural analysis',
      "Comparison of writers' viewpoints and methods",
      'Evaluative response to a critical statement',
    ],
  },
  eduqas: {
    paperLabel: 'Eduqas Component 1 & Component 2 Reading',
    description:
      'Component 1 uses an unseen 20th century prose fiction extract. Component 2 uses two non-fiction texts -- one from the 19th century and one from the 21st century -- with a comparison question.',
    questionTypes: [
      'Short retrieval and comprehension questions',
      'Language analysis (how the writer creates effect)',
      'Structural analysis of whole-extract choices',
      'Comparison of the two Component 2 texts',
    ],
  },
}

/* ── Collapsible section helper ───────────────────────────────────── */

function Section({
  title,
  icon: Icon,
  colour,
  children,
  defaultOpen = false,
}: {
  title: string
  icon: typeof BookOpen
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
        <div className={`flex size-8 items-center justify-center rounded-lg bg-blue-500/10`}>
          <Icon className={`size-4 ${colour}`} />
        </div>
        <h2 className="flex-1 text-heading-md font-heading text-foreground">{title}</h2>
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

/* ── Tip box helper ───────────────────────────────────────────────── */

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
      <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
      <div className="text-body-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

/* ── Grade comparison box ─────────────────────────────────────────── */

function GradeExample({
  grade,
  colour,
  label,
  text,
}: {
  grade: string
  colour: string
  label: string
  text: string
}) {
  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="outline" className={colour}>
          Grade {grade}
        </Badge>
        <span className="text-caption text-muted-foreground">{label}</span>
      </div>
      <p className="text-body-sm text-muted-foreground leading-relaxed italic">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  )
}

/* ── Main page ────────────────────────────────────────────────────── */

interface ReadingViewProps {
  boardId: ExamBoard | null
  boardName: string
}

export default function ReadingView({ boardId, boardName }: ReadingViewProps) {
  const paper = boardId && READING_PAPERS[boardId]
  const showIgcseBanner = isIgcseBoard(boardId)
  const headingSuffix = boardId ? ` for ${boardName}` : ''

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
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <BookOpen className="size-5 text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Reading Skills</h1>
              {boardId && (
                <Badge variant="secondary" className="text-xs">
                  For {boardName} Language Paper 1
                </Badge>
              )}
            </div>
            <p className="text-body-sm text-muted-foreground">
              Extract analysis, inference, language methods, and comparison techniques
              {headingSuffix}
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
              Your board uses a different paper structure
            </p>
            <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
              The reading techniques below (What-How-Why, inference, comparison) are universal and
              will sharpen your analysis regardless of board. However, the specific question
              structure for{' '}
              {boardId === 'cambridge-0500' || boardId === 'cambridge-0990'
                ? 'Cambridge IGCSE Paper 1 Reading'
                : 'Edexcel IGCSE 4EA1'}{' '}
              is different -- see{' '}
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
              for exam-specific guidance.
            </p>
          </div>
        </div>
      )}

      {/* Board-specific paper structure */}
      {paper && (
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">{paper.paperLabel}</h2>
          </div>
          <p className="text-body-sm text-muted-foreground leading-relaxed">{paper.description}</p>
          <div className="mt-3">
            <p className="text-xs font-semibold text-foreground mb-1.5">
              Question types you will face:
            </p>
            <ul className="space-y-1">
              {paper.questionTypes.map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-0.5 text-primary">--</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── 1. Approaching Reading Questions ──────────────────────── */}
      <Section
        title="Approaching Reading Questions"
        icon={Search}
        colour="text-blue-400"
        defaultOpen
      >
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Every reading question on the GCSE English Language paper asks you to engage with an
            unseen extract. The biggest mistake students make is diving straight into writing
            without properly reading the text. Follow this approach every time:
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">The Three-Read Method</h3>
            <ol className="space-y-2 pl-1">
              {[
                {
                  step: 'Read 1 -- Skim for gist',
                  detail:
                    'Read the whole extract quickly. Ask yourself: What is happening? Who is involved? What is the mood or tone? Do not highlight anything yet.',
                },
                {
                  step: 'Read 2 -- Read the questions',
                  detail:
                    'Read every question before you go back to the extract. This tells your brain what to look for. Underline key instruction words: "How does the writer...", "What impression...", "Compare...".',
                },
                {
                  step: 'Read 3 -- Targeted re-read',
                  detail:
                    'Go back through the extract with the questions in mind. Highlight or underline short quotations that you can use. Annotate in the margin with the question number each quote relates to.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.step}</span>
                    <p className="mt-0.5 text-body-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <TipBox>
            <strong>Timing tip:</strong> Spend roughly 15% of the time for each question on reading
            and planning. For a 12-mark question with 15 minutes, that is about 2 minutes reading
            and 13 minutes writing.
          </TipBox>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Choosing the Best Quotations</h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                Keep quotes short: 2-5 words is ideal. Embed them inside your sentences rather than
                copying whole lines.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                Choose words with layers of meaning. A single powerful verb or adjective can
                generate more analysis than an entire sentence.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                If a technique is present (metaphor, simile, alliteration), pick the quote that
                shows it most clearly.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 2. Inference and Deduction ────────────────────────────── */}
      <Section title="Inference and Deduction" icon={Eye} colour="text-violet-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Inference means reading between the lines -- working out what the writer implies but
            does not state directly. Deduction means using evidence in the text to draw logical
            conclusions. Both are essential for every language analysis question across all exam
            boards.
          </p>

          <div className="rounded-xl border border-border/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Inference vs. Surface Reading</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-destructive/5 p-3">
                <span className="text-xs font-semibold text-destructive">Surface (weak)</span>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  &ldquo;The writer says the character was walking slowly.&rdquo;
                </p>
              </div>
              <div className="rounded-lg bg-emerald-500/5 p-3">
                <span className="text-xs font-semibold text-emerald-500">Inference (strong)</span>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  &ldquo;The verb &lsquo;trudged&rsquo; suggests the character is weighed down,
                  perhaps physically exhausted or emotionally burdened, conveying a sense of
                  reluctance.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">How to Infer Effectively</h3>
            <ol className="space-y-2 text-body-sm text-muted-foreground pl-1">
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">1.</span>
                Identify the connotations of specific word choices. Ask: what associations does this
                word carry beyond its dictionary meaning?
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">2.</span>
                Consider what the writer does NOT say. Silences and omissions can be just as
                revealing as what is on the page.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">3.</span>
                Look at how characters behave rather than what they say. Actions, gestures, and body
                language often contradict dialogue.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">4.</span>
                Use tentative language in your analysis: &ldquo;This could suggest...&rdquo;,
                &ldquo;Perhaps the writer implies...&rdquo;, &ldquo;This might indicate...&rdquo;.
                Markers reward exploratory thinking.
              </li>
            </ol>
          </div>

          <TipBox>
            <strong>Marker insight:</strong> The difference between Grade 5 and Grade 7 on inference
            questions is often depth, not quantity. Three well-developed inferences score higher
            than six shallow ones.
          </TipBox>
        </div>
      </Section>

      {/* ── 3. Language Analysis: What-How-Why ────────────────────── */}
      <Section title="Language Analysis: What-How-Why" icon={Layers} colour="text-emerald-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            The What-How-Why framework is the single most useful structure for analysing language in
            any reading question. It ensures your paragraphs have a clear point, evidence, and
            analysis every time.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label: 'WHAT',
                colour: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                description:
                  'What does the writer do or what is the effect? State your point clearly.',
                example: 'The writer creates a sense of tension in this paragraph.',
              },
              {
                label: 'HOW',
                colour: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                description:
                  'How do they achieve it? Identify the technique and embed a short quote.',
                example: 'Through the metaphor "the silence pressed like a fist," Blake...',
              },
              {
                label: 'WHY',
                colour: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
                description:
                  'Why does this matter? Analyse the effect on the reader or the deeper meaning.',
                example:
                  "This forces the reader to feel the oppressive weight of the atmosphere, mirroring the character's claustrophobia.",
              },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-4 ${item.colour}`}>
                <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                <p className="mt-2 text-body-sm text-muted-foreground">{item.description}</p>
                <p className="mt-2 text-xs italic text-muted-foreground/80">
                  e.g. &ldquo;{item.example}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Upgrading from What-How-Why to a Grade 9
            </h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Zoom in on individual words.</strong> Do not just name the technique;
                explore the specific connotations of the words within it.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Consider alternative interpretations.</strong> Add a second layer:
                &ldquo;Alternatively, this could suggest...&rdquo;.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Link to the whole text.</strong> How does this moment connect to the broader
                themes, the writer&apos;s purpose, or the context of the piece?
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Comment on reader positioning.</strong> How does the writer make the reader
                feel? Sympathy? Discomfort? Curiosity?
              </li>
            </ul>
          </div>

          <TipBox>
            <strong>Remember:</strong> Naming a technique (e.g. &ldquo;this is a simile&rdquo;)
            earns almost no marks on its own. The marks come from explaining why the writer chose
            that technique and what effect it creates.
          </TipBox>
        </div>
      </Section>

      {/* ── 4. Writer's Methods and Effects ───────────────────────── */}
      <Section title="Writer's Methods and Their Effects" icon={Target} colour="text-rose-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            &ldquo;Writer&apos;s methods&rdquo; is the umbrella term markers use for every
            deliberate choice a writer makes. This goes far beyond literary devices -- it includes
            structure, form, tone, and even what the writer chooses to leave out.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Key Methods to Know</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                {
                  method: 'Imagery',
                  effect:
                    'Creates vivid mental pictures; appeals to the senses to make abstract ideas concrete.',
                },
                {
                  method: 'Metaphor / Simile',
                  effect:
                    'Draws comparisons to deepen understanding; can reveal hidden similarities between unlike things.',
                },
                {
                  method: 'Personification',
                  effect:
                    'Gives human qualities to non-human things, making them relatable or threatening.',
                },
                {
                  method: 'Pathetic fallacy',
                  effect:
                    'Uses weather or setting to mirror emotions; externalises internal feelings.',
                },
                {
                  method: 'Short sentences',
                  effect: 'Create pace, tension, or emphasis. Often used for dramatic impact.',
                },
                {
                  method: 'List of three',
                  effect: 'Builds a sense of accumulation or overwhelm; creates rhythmic emphasis.',
                },
                {
                  method: 'Repetition',
                  effect:
                    'Reinforces a key idea; can create a hypnotic, relentless, or obsessive quality.',
                },
                {
                  method: 'Juxtaposition',
                  effect:
                    'Places contrasting ideas together to highlight differences or create irony.',
                },
                {
                  method: 'Direct address',
                  effect:
                    'Breaks the fourth wall; creates intimacy or confrontation with the reader.',
                },
                {
                  method: 'Tone shifts',
                  effect:
                    "A change in tone signals a turning point, revelation, or shift in the writer's attitude.",
                },
              ].map((item) => (
                <div key={item.method} className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">{item.method}</span>
                  <p className="mt-1 text-xs text-muted-foreground">{item.effect}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Structural Methods (often overlooked)
            </h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Opening / closing focus:</strong> What does the writer choose to begin and
                end with? This framing reveals priorities.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Shifts in focus:</strong> Does the writer move from wide angle to close-up,
                or from external to internal? These zooms guide the reader&apos;s attention.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Paragraph length:</strong> A single-sentence paragraph creates a moment of
                stark emphasis. Long paragraphs can create immersion or claustrophobia.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Narrative perspective:</strong> First person creates intimacy and
                subjectivity; third person can provide omniscience or deliberate distance.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 5. Comparison Techniques ──────────────────────────────── */}
      <Section title="Comparison Techniques" icon={BarChart3} colour="text-cyan-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Most boards require you to compare two writers at some point in the reading section. For{' '}
            {boardName}, this typically carries the highest mark weighting in the reading paper, so
            a strong comparison technique is essential.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              The Integrated Comparison Method
            </h3>
            <p className="text-body-sm text-muted-foreground">
              Rather than writing about Source A and then Source B separately (which limits you to
              Grade 5), weave both sources together in every paragraph:
            </p>
            <ol className="space-y-2 text-body-sm text-muted-foreground pl-1">
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">1.</span>
                Open with a comparative point: &ldquo;Both writers present [topic] as
                [similarity/difference].&rdquo;
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">2.</span>
                Analyse Source A with a short embedded quotation and What-How-Why.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">3.</span>
                Use a comparison connective to pivot: &ldquo;Similarly...&rdquo;, &ldquo;In
                contrast...&rdquo;, &ldquo;However...&rdquo;, &ldquo;While Source A..., Source
                B...&rdquo;.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">4.</span>
                Analyse Source B with the same depth. Explain how the effect differs or aligns.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-foreground">5.</span>
                Close the paragraph with a concluding comparison that ties both together.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Useful Comparison Connectives</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Similarly',
                'Likewise',
                'In contrast',
                'However',
                'Conversely',
                'On the other hand',
                'While...',
                'Whereas',
                'Both writers...',
                'Unlike Source A...',
              ].map((word) => (
                <Badge key={word} variant="secondary" className="text-xs">
                  {word}
                </Badge>
              ))}
            </div>
          </div>

          <TipBox>
            <strong>Common mistake:</strong> Writing a full page about Source A and then a full page
            about Source B. This is called &ldquo;block comparison&rdquo; and it severely limits
            your marks because you are not comparing -- you are summarising separately.
          </TipBox>
        </div>
      </Section>

      {/* ── 6. Practice Extract with Guided Questions ─────────────── */}
      <Section
        title="Practice Extract with Guided Questions"
        icon={BookOpen}
        colour="text-clay-600"
      >
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Use this short extract to practise your reading skills. Try answering each question
            before revealing the guidance.
          </p>

          <div className="rounded-xl border border-border/60 bg-background/50 p-4">
            <Badge variant="outline" className="mb-3">
              Practice Extract
            </Badge>
            <p className="text-body-sm text-foreground leading-relaxed italic">
              The fog crept through the alleyways like a living thing, swallowing the gaslight in
              thick, grey mouthfuls. Somewhere ahead, footsteps echoed -- sharp, deliberate, growing
              closer. Martha pressed herself against the damp brickwork and held her breath. The
              city, which had roared with life only hours before, was silent now. Dead silent. Even
              the Thames seemed to have stopped breathing.
            </p>
          </div>

          <PracticeQuestion
            number={1}
            question="List four things you learn about the setting from this extract."
            guidance="1) It is foggy. 2) The setting includes alleyways lit by gaslight, suggesting Victorian London. 3) It is night-time or very late, as the city was lively 'hours before.' 4) The area is near the Thames. Focus on explicit details -- things the text directly tells you."
          />
          <PracticeQuestion
            number={2}
            question="How does the writer use language to create a sense of danger?"
            guidance="The fog is personified as a 'living thing' that 'swallows' the light, suggesting something predatory and consuming. The verb 'crept' has connotations of stealth and menace. The footsteps are described as 'sharp, deliberate' -- the adjective 'deliberate' implies someone with purpose, possibly threatening intent. The fragment 'Dead silent' uses a minor sentence for dramatic emphasis, and the word 'dead' carries a double meaning -- both absolute silence and a foreshadowing of mortality."
          />
          <PracticeQuestion
            number={3}
            question="How has the writer structured this extract to interest the reader?"
            guidance="The writer begins with a wide establishing shot of the fog across the alleyways, then narrows focus to a specific sound (footsteps), then zooms into Martha's physical reaction. This narrowing of focus builds tension by moving from the atmospheric to the personal. The shift from 'roared with life' to 'Dead silent' uses juxtaposition to show dramatic change in the setting. The final sentence personifies the Thames ('stopped breathing'), suggesting even nature is afraid, which positions the reader to share Martha's fear."
          />
        </div>
      </Section>

      {/* ── 7. Grade Comparison: 5 vs 7 vs 9 ─────────────────────── */}
      <Section
        title="Grade 5 vs Grade 7 vs Grade 9 Responses"
        icon={BarChart3}
        colour="text-primary"
      >
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Understanding what separates each grade boundary helps you target your revision. Below
            are example paragraphs responding to the question: &ldquo;How does the writer use
            language to create a sense of danger?&rdquo; using the practice extract above.
          </p>

          <Tabs defaultValue="grade5">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="grade5">Grade 5</TabsTrigger>
              <TabsTrigger value="grade7">Grade 7</TabsTrigger>
              <TabsTrigger value="grade9">Grade 9</TabsTrigger>
            </TabsList>

            <TabsContent value="grade5" className="mt-4">
              <GradeExample
                grade="5"
                colour="text-amber-500 border-amber-500/30"
                label="Clear, relevant explanation"
                text="The writer uses personification when they say the fog 'crept through the alleyways like a living thing.' This makes it sound dangerous because it is like the fog is alive. The word 'swallowing' also makes it seem like the fog is eating the light, which is scary for the reader."
              />
              <div className="mt-3 rounded-lg bg-amber-500/5 p-3">
                <span className="text-xs font-semibold text-amber-500">What this does well</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Identifies a technique, uses a quotation, and attempts to explain the effect.
                  However, analysis stays at the surface level and the exploration of individual
                  word choices is limited.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="grade7" className="mt-4">
              <GradeExample
                grade="7"
                colour="text-emerald-500 border-emerald-500/30"
                label="Detailed, perceptive analysis"
                text="The writer personifies the fog as a predatory force that 'crept' and 'swallowed' the gaslight, creating an atmosphere of encroaching menace. The verb 'crept' carries connotations of stealth and predation, as though the fog is hunting, while 'swallowing' suggests consumption and erasure -- the light (and by extension, safety) is being devoured. This positions the reader to share Martha's vulnerability, as even her surroundings are being consumed by darkness."
              />
              <div className="mt-3 rounded-lg bg-emerald-500/5 p-3">
                <span className="text-xs font-semibold text-emerald-500">What this adds</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Explores connotations of individual words, connects language to the reader&apos;s
                  experience, and considers the wider significance (light = safety). Analysis is
                  sustained and developed rather than just identified.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="grade9" className="mt-4">
              <GradeExample
                grade="9"
                colour="text-primary border-primary/30"
                label="Sophisticated, conceptualised response"
                text="The writer constructs the fog as an almost sentient antagonist: the simile 'like a living thing' initially suggests organic unpredictability, but the verbs 'crept' and 'swallowing' elevate this beyond simple personification into something more predatory and deliberate. The fog does not merely obscure -- it consumes, specifically targeting the 'gaslight,' which symbolically represents civilisation, order, and human control over the darkness. By stripping away this light, the writer systematically dismantles the reader's sense of safety, mirroring Martha's own loss of agency. The fragment 'Dead silent' functions as a pivot in the extract: the stark, two-word sentence arrests the rhythm established by the longer preceding clauses, forcing the reader to experience the same sudden stillness that Martha feels -- and the word 'dead' resonates ominously, carrying the weight of potential mortality."
              />
              <div className="mt-3 rounded-lg bg-primary/5 p-3">
                <span className="text-xs font-semibold text-primary">
                  What makes this exceptional
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Conceptualises language choices within a broader argument (fog as antagonist,
                  light as civilisation). Explores multiple layers of meaning within single words.
                  Comments on structural effects (sentence length, rhythm). Considers how form and
                  content work together to position the reader. Offers original interpretation
                  rather than formulaic responses.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      {/* ── Related Revision ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Take it Further</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Build on your reading skills with related guides.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/revision/exam-technique/essay-structure"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <Target className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Essay Structure Guide
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Turn close reading into top-band paragraphs.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/exam-technique/question-types"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <Target className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Question Types Decoded
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Match reading techniques to each question.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-7"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <BarChart3 className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Aiming for Grade 7
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                See how perceptive reading is rewarded.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/quiz"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
              <Search className="size-4 text-clay-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Test Yourself
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Quick quizzes on language techniques.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ── Practice question component ──────────────────────────────────── */

function PracticeQuestion({
  number,
  question,
  guidance,
}: {
  number: number
  question: string
  guidance: string
}) {
  const [showGuidance, setShowGuidance] = useState(false)

  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-clay-600">
          Q{number}
        </span>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">{question}</p>
          <button
            type="button"
            onClick={() => setShowGuidance(!showGuidance)}
            className="mt-2 text-xs font-medium text-primary hover:underline"
          >
            {showGuidance ? 'Hide guidance' : 'Show guidance'}
          </button>
          {showGuidance && (
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed rounded-lg bg-primary/[0.03] p-3">
              {guidance}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
