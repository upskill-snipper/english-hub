'use client'

import { useState } from 'react'
import {
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Search,
  GitCompare,
  PenLine,
  Scale,
  FileText,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Helpers ─────────────────────────────────────────────────────── */

function Section({
  title,
  badge,
  icon: Icon,
  defaultOpen = false,
  children,
}: {
  title: string
  badge?: string
  icon?: typeof HelpCircle
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-accent/30"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="size-5 text-violet-400" />}
          <h2 className="text-heading-md font-heading text-foreground">{title}</h2>
          {badge && (
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              {badge}
            </Badge>
          )}
        </div>
        {open ? (
          <ChevronUp className="size-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="size-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && <div className="border-t border-border/40 p-5 sm:p-6 pt-5 space-y-5">{children}</div>}
    </div>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
      <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
      <p className="text-body-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-400" />
      <p className="text-body-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

function ModelResponse({
  label,
  question,
  children,
}: {
  label: string
  question?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-background/50 p-4 sm:p-5 space-y-3">
      <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
        {label}
      </Badge>
      {question && (
        <p className="text-sm font-semibold text-foreground">{question}</p>
      )}
      <div className="text-body-sm text-foreground/90 leading-relaxed italic space-y-3">
        {children}
      </div>
    </div>
  )
}

function StepList({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
            {i + 1}
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            <p className="text-body-sm text-muted-foreground leading-relaxed">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────── */

export default function QuestionTypesPage() {
  return (
    <div className="space-y-6 pb-16">
      {/* ── Header ────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/exam-technique" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Exam Technique
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <HelpCircle className="size-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Question Types</h1>
            <p className="text-body-sm text-muted-foreground">
              How to approach every type of question you will face in your exams
            </p>
          </div>
        </div>
      </div>

      {/* ── Extract Questions ─────────────────────────────────── */}
      <Section title="Extract Questions" icon={Search} badge="Language & Literature" defaultOpen>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Extract questions give you a passage from a text and ask you to analyse it.
          In Language, the extract is the entire source text. In Literature, you get a
          short extract but must also discuss the wider text.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">How to approach extract questions</h3>
          <StepList
            steps={[
              {
                title: 'Read the extract twice',
                detail: 'First read for overall meaning. Second read with a pen in hand, underlining interesting language choices, structural features, and anything that relates to the question focus.',
              },
              {
                title: 'Identify 3-4 key quotations',
                detail: 'Choose quotations that are rich in language techniques. Short quotations (2-5 words) are easier to embed and analyse than long ones. A single powerful word can be more effective than a full sentence.',
              },
              {
                title: 'Analyse each quotation in depth',
                detail: 'For each quotation, identify the technique (e.g. metaphor, sibilance, semantic field), explain the effect on the reader, and connect to the writer\'s purpose or the question focus.',
              },
              {
                title: 'Consider structural choices',
                detail: 'How does the extract begin and end? Does the focus shift? Are there changes in tone, pace, or perspective? Sentence length? Paragraph length? These are often overlooked but carry marks.',
              },
              {
                title: 'For Literature: go beyond the extract',
                detail: 'You must discuss the wider text to access the top bands. Reference at least one other moment from the text where the same theme or character trait appears. Show how it develops or contrasts.',
              },
            ]}
          />
        </div>

        <ModelResponse
          label="Model response -- Language Paper 1 Q2"
          question="How does the writer use language to describe the storm?"
        >
          <p>
            The writer creates a vivid sense of the storm&apos;s violence through a
            carefully constructed semantic field of warfare. The wind is described as
            &ldquo;battering&rdquo; the windows, a verb that connotes sustained, aggressive
            assault, as though the storm has a deliberate, hostile intent. This
            personification transforms a natural event into something malevolent, heightening
            the reader&apos;s sense of danger.
          </p>
          <p>
            This martial imagery intensifies as the writer describes the rain
            &ldquo;hammering like ammunition against the roof.&rdquo; The simile directly
            equates rain with weaponry, while the onomatopoeic verb &ldquo;hammering&rdquo;
            forces the reader to hear the relentless percussion of the downpour. The choice
            of &ldquo;ammunition&rdquo; rather than simply &ldquo;bullets&rdquo; suggests
            a quantity that is overwhelming and industrial -- this is not a skirmish but
            a bombardment.
          </p>
          <p>
            The writer also manipulates sentence structure to mirror the storm&apos;s rhythm.
            A series of short, declarative sentences -- &ldquo;The lights died. The windows
            shook. The door buckled.&rdquo; -- creates a staccato effect that mirrors the
            abruptness and unpredictability of each gust. The tricolon builds a sense of
            escalation, each impact more threatening than the last, drawing the reader into
            the family&apos;s growing terror.
          </p>
        </ModelResponse>

        <Tip>
          The best Language analysis picks apart individual words, not whole sentences.
          Instead of quoting &ldquo;The storm was incredibly powerful and scary,&rdquo;
          zoom in on &ldquo;battering&rdquo; and explain why that specific verb choice
          matters.
        </Tip>
      </Section>

      {/* ── Comparison Questions ──────────────────────────────── */}
      <Section title="Comparison Questions" icon={GitCompare} badge="Language P2 & Literature P2">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Comparison questions appear in Language Paper 2 (Q4: compare two non-fiction
          sources) and Literature Paper 2 (poetry comparison). They require you to analyse
          both texts and draw connections between them.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Comparison structures</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Alternating method (recommended)</p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Each paragraph discusses one point of comparison, analysing both texts
                within the same paragraph. This keeps comparison tight and continuous.
              </p>
              <div className="rounded-lg border border-border/30 bg-card p-3 space-y-1 font-mono text-xs text-muted-foreground">
                <p>Para 1: Both writers use [technique] -- Text A does X, Text B does Y</p>
                <p>Para 2: Both writers address [theme] -- Text A suggests X, Text B argues Y</p>
                <p>Para 3: The writers differ in [aspect] -- Text A..., whereas Text B...</p>
              </div>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Block method (simpler but weaker)</p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Analyse Text A fully in the first half, then Text B in the second half,
                with links back. This is easier to organise but often feels less cohesive
                and earns fewer comparison marks.
              </p>
              <div className="rounded-lg border border-border/30 bg-card p-3 space-y-1 font-mono text-xs text-muted-foreground">
                <p>Paras 1-2: Text A analysis</p>
                <p>Paras 3-4: Text B analysis (linking back to A)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Key comparison phrases</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Similarly',
              'In contrast',
              'While Text A..., Text B...',
              'Both writers...',
              'However',
              'Whereas',
              'Unlike [Author A], [Author B]...',
              'This is echoed in...',
              'On the other hand',
              'Both poets explore... but differ in...',
              'Where [Poem A] uses..., [Poem B] instead...',
              'A key difference is...',
            ].map((phrase) => (
              <span key={phrase} className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
                {phrase}
              </span>
            ))}
          </div>
        </div>

        <ModelResponse
          label="Model comparison paragraph -- Poetry"
          question="Compare how power is presented in 'Ozymandias' and 'My Last Duchess'."
        >
          <p>
            Both Shelley and Browning present powerful figures whose authority is ultimately
            undermined, though the nature of that power differs significantly. In
            &ldquo;Ozymandias,&rdquo; the &ldquo;sneer of cold command&rdquo; reveals a
            ruler whose power was built on fear and dominance -- yet the irony is that this
            power has been entirely erased by time, leaving only a &ldquo;colossal
            Wreck&rdquo; in an empty desert. Shelley&apos;s message is explicit: political
            power is temporary.
          </p>
          <p>
            Browning&apos;s Duke, however, presents a more insidious form of power that is
            still actively being exercised. His casual revelation that he &ldquo;gave
            commands; then all smiles stopped together&rdquo; chills precisely because it is
            delivered conversationally, as though the elimination of his wife were a minor
            domestic matter. Where Ozymandias&apos;s power is a ruin to be pitied, the
            Duke&apos;s power is alive, immediate, and terrifying. Both poets critique
            authoritarian control, but Shelley mocks it from a distance of centuries while
            Browning forces the reader into uncomfortable proximity with it.
          </p>
        </ModelResponse>

        <Warning>
          The most common mistake in comparison questions is writing about one text and
          then the other with no actual comparison. You must compare within paragraphs,
          not just between them. Every paragraph should reference both texts.
        </Warning>
      </Section>

      {/* ── Creative Writing Questions ────────────────────────── */}
      <Section title="Creative Writing Questions" icon={PenLine} badge="Language P1 Q5">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Creative writing questions on Language Paper 1 give you a choice between a
          descriptive piece and a narrative piece, usually linked to an image or theme.
          This is worth 40 marks -- the single highest-value question across all papers.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Descriptive vs Narrative -- which to choose?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Choose Descriptive if...</p>
              <div className="space-y-1.5">
                {[
                  'You are stronger at imagery and atmospheric writing',
                  'You find it hard to control plots and endings',
                  'You enjoy detailed sensory description',
                  'You want to focus on language quality over plot',
                ].map((point, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-blue-400" />
                    <p className="text-xs text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">Choose Narrative if...</p>
              <div className="space-y-1.5">
                {[
                  'You can control pacing and plot effectively',
                  'You are good with dialogue and characterisation',
                  'You can write a satisfying ending under time pressure',
                  'You enjoy crafting tension and suspense',
                ].map((point, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                    <p className="text-xs text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Techniques the examiner expects to see</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { technique: 'Sensory detail', detail: 'Engage sight, sound, smell, touch, and taste. "The salt air stung my cracked lips" is more vivid than "it was windy."' },
              { technique: 'Varied sentence structure', detail: 'Alternate long, complex sentences with short, punchy ones for effect. A single-word sentence can create drama: "Nothing."' },
              { technique: 'Figurative language', detail: 'Use similes, metaphors, and personification deliberately. One sustained metaphor is better than five random similes.' },
              { technique: 'Show, don\'t tell', detail: '"Her hands trembled as she reached for the handle" beats "She was scared." Let actions and details convey emotion.' },
              { technique: 'Varied punctuation', detail: 'Semicolons, dashes, ellipsis, colons, and exclamation marks (sparingly). These show you control punctuation, earning AO6 marks.' },
              { technique: 'Cyclical structure', detail: 'Return to your opening image or idea at the end. This creates a sense of completeness and structural sophistication.' },
            ].map((item) => (
              <div key={item.technique} className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-1">
                <p className="text-sm font-semibold text-foreground">{item.technique}</p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Warning>
          Do not write a full novel. The best creative writing pieces are focused on a
          single moment, a single setting, or a single shift. Writing 800 words of
          plot-heavy story almost always scores lower than 500 words of carefully crafted,
          atmospheric prose.
        </Warning>

        <Tip>
          Practise writing openings. The first 3-4 sentences set the tone and hook the
          examiner. A strong opening can carry an average piece. A weak opening makes
          the examiner sceptical from the start.
        </Tip>
      </Section>

      {/* ── Evaluation Questions ──────────────────────────────── */}
      <Section title="Evaluation Questions" icon={Scale} badge="Language P1 Q4">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Evaluation questions give you a statement about the text and ask &ldquo;to what
          extent do you agree?&rdquo; This tests AO4 -- your ability to evaluate critically,
          not just describe. Worth 20 marks on Language Paper 1.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">The approach</h3>
          <StepList
            steps={[
              {
                title: 'Read the statement carefully',
                detail: 'The statement will make a specific claim about the text, e.g. "The writer successfully creates a sense of danger in the opening." Identify what exactly you are evaluating.',
              },
              {
                title: 'Take a clear position',
                detail: 'Agree, disagree, or (best approach) largely agree with nuance. Saying "I agree to a large extent, however..." shows critical thinking.',
              },
              {
                title: 'Use evidence to support your evaluation',
                detail: 'Each point should have a quotation and analysis that either supports or challenges the statement. You are judging how effective the writer is, not just describing what they do.',
              },
              {
                title: 'Use evaluative language throughout',
                detail: 'Words like "effectively," "successfully," "convincingly," "less effectively," "arguably," and "compellingly" show that you are assessing, not summarising.',
              },
              {
                title: 'Consider counter-arguments',
                detail: 'A top-band response acknowledges where the writer is less successful or where the statement could be challenged. This shows critical sophistication.',
              },
            ]}
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Evaluative language bank</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Supporting the statement</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'The writer effectively...',
                  'This successfully creates...',
                  'The reader is compellingly drawn to...',
                  'This is a convincing portrayal of...',
                  'The choice of [X] powerfully conveys...',
                  'I strongly agree because...',
                ].map((phrase) => (
                  <span key={phrase} className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Challenging the statement</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'However, it could be argued...',
                  'This is less effective when...',
                  'A reader might instead feel...',
                  'Arguably, the writer is less convincing here...',
                  'While largely successful, the [X] weakens...',
                  'This risks undermining...',
                ].map((phrase) => (
                  <span key={phrase} className="rounded-md bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ModelResponse
          label="Model evaluation opening"
          question="'The writer successfully conveys the narrator's fear in these lines.' To what extent do you agree?"
        >
          <p>
            I agree to a large extent that the writer successfully conveys the narrator&apos;s
            fear, particularly through the manipulation of sentence structure and sensory
            imagery. The fragment &ldquo;Darkness. Complete darkness&rdquo; is strikingly
            effective: the repetition combined with the minor sentence creates a claustrophobic
            rhythm that mirrors the narrator&apos;s racing thoughts. The reader is denied the
            comfort of a complete sentence, just as the narrator is denied the comfort of light.
            This structural choice is arguably more powerful than any single metaphor could be,
            because it forces the reader to experience the disorientation rather than simply
            being told about it.
          </p>
        </ModelResponse>
      </Section>

      {/* ── Command Words ─────────────────────────────────────── */}
      <Section title="Key Command Words" icon={FileText} badge="All Papers">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Command words tell you exactly what the examiner wants you to do. Misreading
          a command word is one of the most common reasons students underperform.
          Learn these thoroughly.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-background/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Command word</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What it means</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What to do</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                {
                  word: 'Analyse',
                  means: 'Break down and examine in detail',
                  todo: 'Identify techniques, explain effects, discuss purpose. Use subject terminology. Go beyond surface meaning.',
                },
                {
                  word: 'Compare',
                  means: 'Identify similarities and differences',
                  todo: 'Discuss both texts in every paragraph. Use comparative connectives. Analyse methods, not just content.',
                },
                {
                  word: 'Evaluate',
                  means: 'Judge how successful something is',
                  todo: 'Take a position (agree/disagree). Support with evidence. Use evaluative language. Consider counter-arguments.',
                },
                {
                  word: 'Explore',
                  means: 'Investigate thoroughly from multiple angles',
                  todo: 'Consider different interpretations. Examine the text in depth. Show awareness of complexity.',
                },
                {
                  word: 'How does',
                  means: 'Focus on the writer\'s methods',
                  todo: 'Analyse language, structure, and form choices. Discuss effects on the reader. Connect to purpose.',
                },
                {
                  word: 'To what extent',
                  means: 'Make a judgement with evidence',
                  todo: 'State your position clearly. Provide evidence for and against. Reach a balanced conclusion.',
                },
                {
                  word: 'Explain',
                  means: 'Make something clear with reasons',
                  todo: 'State your point, give evidence, explain why it supports your answer. Be specific, not vague.',
                },
                {
                  word: 'Summarise',
                  means: 'Give the main points briefly',
                  todo: 'Be concise. Use your own words. Refer to the text but do not copy long passages. Focus on key ideas.',
                },
                {
                  word: 'Refer to',
                  means: 'Use the text as evidence',
                  todo: 'Include quotations or specific references to the text. Do not make general statements without textual support.',
                },
                {
                  word: 'Starting with this extract',
                  means: 'Begin with the given passage, then go wider',
                  todo: 'Analyse the extract first (at least one paragraph). Then move to the wider text. You must do both to access top marks.',
                },
              ].map((row) => (
                <tr key={row.word} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-2.5">
                    <span className="font-semibold text-foreground">{row.word}</span>
                  </td>
                  <td className="px-4 py-2.5">{row.means}</td>
                  <td className="px-4 py-2.5">{row.todo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Tip>
          Before you start writing any answer, underline the command word in the question
          and write it at the top of your plan. This keeps you focused on what the
          examiner actually wants, rather than what you want to write about.
        </Tip>
      </Section>

      {/* ── Related Revision ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Apply It</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Practise spotting command words in real questions.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/revision/exam-technique/essay-structure"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <PenLine className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Essay Structure</p>
              <p className="text-xs text-muted-foreground mt-0.5">Match each command word to a paragraph plan.</p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-7"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <FileText className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 7 Standards</p>
              <p className="text-xs text-muted-foreground mt-0.5">How perceptive responses use the question.</p>
            </div>
          </Link>
          <Link
            href="/revision/quiz"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
              <Search className="size-4 text-orange-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Quizzes</p>
              <p className="text-xs text-muted-foreground mt-0.5">Test your command-word recall.</p>
            </div>
          </Link>
          <Link
            href="/revision/poetry"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10">
              <GitCompare className="size-4 text-rose-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Poetry Compare Questions</p>
              <p className="text-xs text-muted-foreground mt-0.5">Practise compare command-word approaches.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Navigation ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique/time-management" />}
        >
          <ArrowLeft className="size-4" />
          Time Management
        </Button>
        <Button
          variant="default"
          className="flex-1"
          render={<Link href="/revision/exam-technique" />}
        >
          Back to Exam Technique
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
