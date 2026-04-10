'use client'

import { useState } from 'react'
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Timer,
  Sparkles,
  BookOpen,
  PenLine,
  Target,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

/* ── Helpers ─────────────────────────────────────────────────────── */

function Section({
  title,
  badge,
  defaultOpen = false,
  children,
}: {
  title: string
  badge?: string
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

/* ── Timeline row ────────────────────────────────────────────────── */

function TimelineRow({
  time,
  label,
  detail,
  marks,
  colour = 'bg-primary/10 text-primary',
}: {
  time: string
  label: string
  detail: string
  marks?: string
  colour?: string
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4">
      <div className="shrink-0 flex flex-col items-end gap-1">
        <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">
          {time}
        </Badge>
        {marks && (
          <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${colour}`}>
            {marks}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-0.5 text-body-sm text-muted-foreground leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────── */

export default function TimeManagementPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Clock className="size-5 text-amber-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Time Management</h1>
            <p className="text-body-sm text-muted-foreground">
              Minute-by-minute plans for every GCSE English paper
            </p>
          </div>
        </div>
      </div>

      {/* ── Core principle ────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Timer className="mr-1 size-3" />
          The Golden Rule
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          1 mark = approximately 1 minute
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          This is the simplest and most effective way to allocate your time. A 4-mark
          question deserves roughly 4 minutes. A 30-mark essay deserves roughly 30 minutes
          of writing time plus 5 minutes of planning. Spending 20 minutes on an 8-mark
          question steals time from higher-value questions and can cost you an entire grade
          boundary.
        </p>
      </section>

      {/* ── Paper breakdowns ──────────────────────────────────── */}
      <Section title="AQA English Language Paper 1" badge="1h 45m" defaultOpen>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Explorations in Creative Reading and Writing. One literary fiction extract with
          four reading questions and one creative writing question.
        </p>

        <div className="space-y-3">
          <TimelineRow
            time="0:00 - 0:15"
            label="Read the source text carefully"
            detail="Read the full extract once for understanding. Then re-read the specific sections referenced by each question. Underline key words and phrases as you go."
            marks="Prep"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="0:15 - 0:20"
            label="Q1 -- List four things (4 marks)"
            detail="Simple retrieval. Write four clear, short statements. Do not over-explain. One point per line."
            marks="4 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="0:20 - 0:28"
            label="Q2 -- Language analysis (8 marks)"
            detail="Analyse how the writer uses language. Pick 2-3 specific words or phrases. For each: identify the technique, explain the effect, link to the writer's intention. Use subject terminology."
            marks="8 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="0:28 - 0:36"
            label="Q3 -- Structure analysis (8 marks)"
            detail="Analyse structural choices: opening, shift in focus, narrative perspective, sentence length, paragraph length, ending. Think about what the reader's attention is drawn to and how it changes."
            marks="8 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="0:36 - 0:56"
            label="Q4 -- Evaluation (20 marks)"
            detail="To what extent do you agree with a given statement? State your position clearly. Use 3 pieces of evidence with detailed analysis. Show you can evaluate critically, not just describe."
            marks="20 marks"
            colour="bg-violet-500/10 text-violet-400"
          />
          <TimelineRow
            time="0:56 - 1:01"
            label="Q5 -- Plan your creative writing"
            detail="Spend 5 full minutes planning. Decide on your opening hook, 3-4 sections, and your ending. Note 2-3 techniques you will use deliberately. This plan will save you time and prevent rambling."
            marks="Plan"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="1:01 - 1:40"
            label="Q5 -- Write your creative piece (40 marks)"
            detail="24 marks for content and organisation (AO5), 16 marks for technical accuracy (AO6). Vary sentences and vocabulary. Use paragraphs deliberately. Deploy at least 3 conscious language techniques. Write 400-600 words."
            marks="40 marks"
            colour="bg-emerald-500/10 text-emerald-400"
          />
          <TimelineRow
            time="1:40 - 1:45"
            label="Proofread"
            detail="Read through your creative writing. Fix spelling errors, missing full stops, and unclear sentences. Check homophones (there/their/they're, where/were/we're)."
            marks="Check"
            colour="bg-muted text-muted-foreground"
          />
        </div>

        <Tip>
          Q5 is worth half the marks on the entire paper. Many students rush through it
          because they have spent too long on Q4. Keep Q4 to 20 minutes and protect your
          Q5 time.
        </Tip>
      </Section>

      <Section title="AQA English Language Paper 2" badge="1h 45m">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Writers&apos; Viewpoints and Perspectives. Two linked non-fiction texts with
          four reading questions and one transactional writing question.
        </p>

        <div className="space-y-3">
          <TimelineRow
            time="0:00 - 0:15"
            label="Read both source texts"
            detail="Read Source A and Source B fully. Note the tone, purpose, and audience of each. Mark differences and similarities between them."
            marks="Prep"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="0:15 - 0:19"
            label="Q1 -- True or false (4 marks)"
            detail="Shade four correct statements. Simple retrieval from Source A. Do not overthink this -- it should take 4 minutes maximum."
            marks="4 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="0:19 - 0:27"
            label="Q2 -- Summary of differences (8 marks)"
            detail="Summarise differences between the two sources on a given topic. Use evidence from both texts. Write about 3 clear differences with brief quotations to support each."
            marks="8 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="0:27 - 0:39"
            label="Q3 -- Language analysis (12 marks)"
            detail="Analyse how the writer uses language in one specific source. Similar to Paper 1 Q2 but worth more marks, so go deeper. Aim for 3-4 detailed language points with subject terminology."
            marks="12 marks"
            colour="bg-violet-500/10 text-violet-400"
          />
          <TimelineRow
            time="0:39 - 0:55"
            label="Q4 -- Comparison (16 marks)"
            detail="Compare how the two writers convey their different perspectives. Use evidence from both texts in every paragraph. Focus on methods (language, structure, tone) not just content."
            marks="16 marks"
            colour="bg-violet-500/10 text-violet-400"
          />
          <TimelineRow
            time="0:55 - 1:00"
            label="Q5 -- Plan your transactional writing"
            detail="Identify: purpose, audience, form (letter, article, speech, leaflet). Plan your argument with 3-4 key points and any rhetorical techniques you will deploy."
            marks="Plan"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="1:00 - 1:40"
            label="Q5 -- Write your transactional piece (40 marks)"
            detail="24 marks for content (AO5), 16 marks for accuracy (AO6). Match the form conventions (e.g. letter layout, article headline). Use persuasive techniques: rhetorical questions, direct address, statistics, emotive language, counter-arguments."
            marks="40 marks"
            colour="bg-emerald-500/10 text-emerald-400"
          />
          <TimelineRow
            time="1:40 - 1:45"
            label="Proofread"
            detail="Check spelling, punctuation, and paragraphing. Ensure your form is correct (e.g. 'Yours faithfully' for formal letters to unknown recipients)."
            marks="Check"
            colour="bg-muted text-muted-foreground"
          />
        </div>

        <Warning>
          Q4 is the hardest reading question because it requires comparison. Students
          who run out of time here often produce one-sided responses. Set a firm cut-off
          at 16 minutes and move on.
        </Warning>
      </Section>

      <Section title="AQA English Literature Paper 1" badge="1h 45m">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Shakespeare and the 19th-century novel. Two essay questions, each based on an
          extract plus the wider text.
        </p>

        <div className="space-y-3">
          <TimelineRow
            time="0:00 - 0:05"
            label="Read the Shakespeare extract and question"
            detail="Read the extract twice. Underline key words in the question. Identify the theme or character focus. Begin mental planning."
            marks="Prep"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="0:05 - 0:10"
            label="Plan your Shakespeare essay"
            detail="Write a brief plan: thesis statement, 3 paragraph topics (at least one beyond the extract), key quotations for each. This prevents you from losing your way mid-essay."
            marks="Plan"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="0:10 - 0:50"
            label="Write your Shakespeare essay (34 marks + 4 SPaG)"
            detail="Introduction (3 mins) + 3 PEEL paragraphs (10 mins each) + conclusion (3 mins). At least one paragraph must go beyond the extract. Use subject terminology throughout."
            marks="34+4"
            colour="bg-emerald-500/10 text-emerald-400"
          />
          <TimelineRow
            time="0:50 - 0:55"
            label="Read the 19th-century novel extract and question"
            detail="Read the extract. Identify the focus. Begin thinking about where else in the novel this theme appears."
            marks="Prep"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="0:55 - 1:00"
            label="Plan your novel essay"
            detail="Thesis + 3 paragraph topics + quotations. Ensure at least one paragraph draws from outside the extract."
            marks="Plan"
            colour="bg-muted text-muted-foreground"
          />
          <TimelineRow
            time="1:00 - 1:40"
            label="Write your novel essay (30 marks)"
            detail="Same structure: introduction, 3 analytical paragraphs, conclusion. Refer to the extract but also the wider text. Integrate context naturally."
            marks="30 marks"
            colour="bg-emerald-500/10 text-emerald-400"
          />
          <TimelineRow
            time="1:40 - 1:45"
            label="Proofread both essays"
            detail="Skim both essays. Fix obvious errors. Add any final contextual points in the margins if you have time."
            marks="Check"
            colour="bg-muted text-muted-foreground"
          />
        </div>
      </Section>

      <Section title="AQA English Literature Paper 2" badge="2h 15m">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Modern texts and poetry. Three sections: modern prose/drama, poetry anthology
          comparison, and unseen poetry.
        </p>

        <div className="space-y-3">
          <TimelineRow
            time="0:00 - 0:45"
            label="Section A -- Modern text (e.g. An Inspector Calls)"
            detail="5 mins reading/planning + 35 mins writing + 5 mins proofread. No extract given -- you must recall quotations from memory. 34 marks + 4 SPaG."
            marks="34+4"
            colour="bg-emerald-500/10 text-emerald-400"
          />
          <TimelineRow
            time="0:45 - 1:30"
            label="Section B -- Poetry comparison (30 marks)"
            detail="You are given one printed poem and must compare it with one from the anthology. 5 mins choosing your comparison poem and planning. 35 mins writing a comparative essay. 5 mins proofread."
            marks="30 marks"
            colour="bg-violet-500/10 text-violet-400"
          />
          <TimelineRow
            time="1:30 - 1:55"
            label="Section C Part 1 -- Unseen poem (24 marks)"
            detail="Read the unseen poem 3 times. 5 mins planning. 15 mins writing. Focus on language, structure, and form. You do not need context for unseen poetry."
            marks="24 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
          <TimelineRow
            time="1:55 - 2:15"
            label="Section C Part 2 -- Compare unseen poems (8 marks)"
            detail="Compare the first unseen poem with a second. This is only 8 marks so keep it focused: 2-3 paragraphs, each making one clear comparison."
            marks="8 marks"
            colour="bg-blue-500/10 text-blue-400"
          />
        </div>

        <Tip>
          The poetry comparison (Section B) is where many students lose time because they
          cannot decide which poem to compare. Prepare comparison pairings in advance for
          each theme. Know at least 2-3 poems you can confidently compare to any given
          anthology poem.
        </Tip>
      </Section>

      {/* ── Marks to time ─────────────────────────────────────── */}
      <Section title="How to Allocate Marks to Time">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Use this reference table to convert any question&apos;s mark value into a
          time allocation. This works for AQA, Edexcel, OCR, and WJEC.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-background/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Marks</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Writing time</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">+ Planning</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What to write</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                { marks: '4', write: '4 mins', plan: '--', what: '4 short points or sentences' },
                { marks: '8', write: '8 mins', plan: '1 min', what: '2-3 developed paragraphs' },
                { marks: '12', write: '10 mins', plan: '2 mins', what: '3 PEEL paragraphs' },
                { marks: '16', write: '14 mins', plan: '2 mins', what: '3-4 comparative paragraphs' },
                { marks: '20', write: '17 mins', plan: '3 mins', what: 'Intro + 3 paragraphs + conclusion' },
                { marks: '30', write: '25 mins', plan: '5 mins', what: 'Full essay: intro + 3 body + conclusion' },
                { marks: '34+4', write: '30 mins', plan: '5 mins', what: 'Full essay with SPaG focus. 5 mins proofread.' },
                { marks: '40', write: '35 mins', plan: '5 mins', what: 'Extended writing piece. 5 mins proofread.' },
              ].map((row) => (
                <tr key={row.marks} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-2.5">
                    <Badge variant="secondary" className="font-mono text-xs">{row.marks}</Badge>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-foreground">{row.write}</td>
                  <td className="px-4 py-2.5">{row.plan}</td>
                  <td className="px-4 py-2.5">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Warning>
          These times include reading the question but not reading the source text.
          Always account for reading time separately -- usually 10-15 minutes at the
          start of each paper.
        </Warning>
      </Section>

      {/* ── When to move on ───────────────────────────────────── */}
      <Section title="When to Move On">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          One of the hardest exam skills is knowing when to stop writing on one question
          and start the next. Here are the rules.
        </p>

        <div className="space-y-3">
          {[
            {
              rule: 'Set a hard time limit for each question before the exam starts',
              detail: 'Write your time plan on the front of the exam paper. When the clock hits your cut-off, stop -- even mid-sentence -- and move on.',
              icon: Timer,
            },
            {
              rule: 'A partial answer to every question beats a perfect answer to half',
              detail: 'Examiners can only give marks for what you write. An unfinished paper guarantees lost marks. A complete paper with some shorter answers still gives you a chance at every mark.',
              icon: Target,
            },
            {
              rule: 'If you are stuck, write your point in one sentence and move on',
              detail: 'You can always come back if there is time at the end. One clear sentence with a quotation can still earn you 3-4 marks on a high-mark question.',
              icon: PenLine,
            },
            {
              rule: 'Never spend extra time on a question just because you know it well',
              detail: 'Diminishing returns kick in quickly. Your fifth paragraph on a 20-mark question earns far less than your first paragraph on the next question.',
              icon: AlertTriangle,
            },
          ].map((item) => (
            <div key={item.rule} className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4">
              <item.icon className="mt-0.5 size-5 shrink-0 text-amber-400" />
              <div>
                <p className="text-sm font-semibold text-foreground">{item.rule}</p>
                <p className="mt-0.5 text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Quick planning techniques ─────────────────────────── */}
      <Section title="Quick Planning Techniques">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Students who plan write better essays in less time. Here are three planning
          methods that take under 5 minutes.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                1
              </span>
              <p className="text-sm font-semibold text-foreground">Bullet plan</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Write your thesis at the top. Below it, list 3 bullet points -- one per paragraph.
              Next to each, write the quotation you will use. This is the fastest method and
              works for any essay.
            </p>
            <div className="rounded-lg border border-border/30 bg-card p-3 space-y-1 font-mono text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">Thesis: Ambition destroys Macbeth</p>
              <p>1. Soliloquy &ldquo;vaulting ambition&rdquo; -- aware but powerless</p>
              <p>2. &ldquo;blood will have blood&rdquo; -- spiral of violence</p>
              <p>3. &ldquo;tomorrow and tomorrow&rdquo; -- nihilism, emptiness</p>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-400">
                2
              </span>
              <p className="text-sm font-semibold text-foreground">Spider diagram</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Write the question focus in the centre. Draw 3-4 branches for your main
              arguments. Off each branch, note a quotation and technique. Good for visual
              thinkers who need to see connections.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Best for: Literature essays where you need to explore multiple angles of
              a theme or character.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-400">
                3
              </span>
              <p className="text-sm font-semibold text-foreground">Timeline plan</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Draw a line across the page. Plot key moments from the text in chronological
              order with short quotations. Circle the ones most relevant to the question.
              This helps you track how a theme or character develops.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Best for: &ldquo;How does [character/theme] change?&rdquo; questions and
              19th-century novel essays.
            </p>
          </div>
        </div>

        <Tip>
          Examiners do not mark your plan, but they can see it. A visible plan signals
          to the examiner that your response is structured and deliberate, even if
          you run out of time before finishing.
        </Tip>
      </Section>

      {/* ── Related Revision ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Build It Into Your Plan</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Link timing to the rest of your revision strategy.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/revision/grade-targets/grade-7"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Target className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 7 Standards</p>
              <p className="text-xs text-muted-foreground mt-0.5">Pace your essays for top-band marks.</p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-9"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Target className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 9 Standards</p>
              <p className="text-xs text-muted-foreground mt-0.5">How top students use every minute.</p>
            </div>
          </Link>
          <Link
            href="/revision/language/writing"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
              <PenLine className="size-4 text-violet-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Writing Tasks</p>
              <p className="text-xs text-muted-foreground mt-0.5">Plan, draft and check within the time limit.</p>
            </div>
          </Link>
          <Link
            href="/revision/language/reading"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
              <BookOpen className="size-4 text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Reading Comprehension</p>
              <p className="text-xs text-muted-foreground mt-0.5">Speed up your text scanning skills.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Navigation ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique/essay-structure" />}
        >
          <ArrowLeft className="size-4" />
          Essay Structure
        </Button>
        <Button
          variant="default"
          className="flex-1"
          render={<Link href="/revision/exam-technique/question-types" />}
        >
          Question Types
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
