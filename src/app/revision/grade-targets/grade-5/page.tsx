'use client'

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  BookOpen,
  PenTool,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Checklist data ───────────────────────────────────────────────────── */

const CHECKLIST_ITEMS = [
  'I can identify and name language techniques (metaphor, simile, alliteration, etc.)',
  'I use short, embedded quotes in my paragraphs rather than long block quotes',
  'I explain the effect of language on the reader, not just what it means',
  'I use subject terminology correctly (e.g. "the noun/verb/adjective suggests...")',
  'I write in clear PEE/PEEL paragraphs with a topic sentence',
  'I can comment on a writer\'s purpose — why they made that choice',
  'I can identify basic structural features (opening, shift in focus, ending)',
  'My creative writing uses a range of sentence types for effect',
  'I plan before I write, even if it is a short plan',
  'I leave time to check my SPaG (spelling, punctuation, and grammar)',
]

/* ── Component ────────────────────────────────────────────────────────── */

export default function Grade5Page() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())
  const [showComparison, setShowComparison] = useState(false)

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const progress = Math.round((checkedItems.size / CHECKLIST_ITEMS.length) * 100)

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
            <span className="text-lg font-bold text-cyan-400">5</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">How to Get a Grade 5</h1>
            <p className="text-body-sm text-muted-foreground">
              The &quot;strong pass&quot; — clear, explained, and supported responses
            </p>
          </div>
        </div>
      </div>

      {/* ── What Grade 5 Looks Like ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <Target className="size-4.5 text-cyan-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What a Grade 5 Looks Like</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          A Grade 5 response is the &quot;strong pass&quot; — it is above average and shows clear understanding. Examiners describe Grade 5 work as having &quot;clear&quot; and &quot;explained&quot; ideas with relevant evidence. Here is what that means in practice:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="size-4 text-blue-400" />
              English Literature (Grade 5)
            </h3>
            <ul className="space-y-2.5">
              {[
                'Clear understanding of the text and its themes',
                'Relevant references and quotations used as evidence',
                'Clear explanation of the effect of writer\'s methods',
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
              English Language (Grade 5)
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

      {/* ── Key Skills Needed ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Sparkles className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Key Skills You Need</h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">1. Use PEE/PEEL paragraphs consistently</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Every analytical paragraph needs a Point (what you are arguing), Evidence (a short quote), Explanation (what it means and how it works), and ideally a Link back to the question or to a wider theme. This structure alone can lift you from Grade 4 to Grade 5.
            </p>
            <div className="rounded-lg bg-muted/30 p-3 text-xs text-muted-foreground font-mono leading-relaxed">
              <span className="text-cyan-400 font-semibold">Point:</span> Shakespeare presents Macbeth as increasingly consumed by guilt.<br />
              <span className="text-emerald-400 font-semibold">Evidence:</span> He sees a &quot;dagger&quot; before him that he &quot;cannot clutch.&quot;<br />
              <span className="text-violet-400 font-semibold">Explain:</span> The hallucinated dagger shows his guilt is manifesting physically — he cannot escape what he is about to do.<br />
              <span className="text-amber-400 font-semibold">Link:</span> This shows that even before the murder, Macbeth is already being destroyed by his ambition.
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">2. Embed short quotes, not long ones</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Grade 4 students often copy out whole sentences or lines. Grade 5 students pick the key words and weave them into their own sentences. Instead of writing out a full line, pull out two or three words and build your sentence around them. This shows you are selecting deliberately, not just finding any quote.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">3. Name the technique and explain its effect</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Do not just say &quot;this is a metaphor&quot; and move on. Say what the metaphor does. Does it make something seem dangerous? Beautiful? Fragile? The examiner wants to see that you understand why a writer chose that particular technique. Use phrases like &quot;this suggests...&quot;, &quot;this creates a sense of...&quot;, and &quot;the reader feels...&quot;.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">4. Comment on writer&apos;s purpose</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Grade 5 is where you start to show awareness of why the writer made their choices. Think about what the writer wants the reader to feel, think, or question. For Literature, consider the context: Shakespeare was writing for a Jacobean audience who believed in the divine right of kings. Dickens wanted to expose the suffering of the poor.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">5. Vary your sentence structures in writing tasks</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For Language papers, your creative and transactional writing needs variety. Use short sentences for impact. Use longer, complex sentences for description. Start some sentences with an adverb or a present participle (&quot;-ing&quot; word). Use a one-word sentence or a question for dramatic effect. This variety is what examiners mean by &quot;crafting&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* ── Common Grade 4 Mistakes ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-red-500/10">
            <AlertTriangle className="size-4.5 text-red-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Common Grade 4 Mistakes (and How to Fix Them)</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              mistake: 'Retelling the story instead of analysing it',
              fix: 'After every sentence you write, ask yourself: "Am I saying WHAT happens or WHY the writer did it?" If it is "what happens," turn it into analysis by adding "This suggests..." or "The writer does this to..."',
            },
            {
              mistake: 'Using long, unselected quotes',
              fix: 'Never quote more than about 6 words. Find the two or three most important words in a quote and embed them into your own sentence. "Macbeth describes the dagger as a \'fatal vision\' — the adjective \'fatal\' suggests..." is much better than copying out the whole speech.',
            },
            {
              mistake: 'Naming a technique but not explaining its effect',
              fix: 'Every time you identify a technique, immediately follow it with "which creates a sense of..." or "which makes the reader feel...". The technique identification is worth very little on its own — the explanation of effect is where the marks are.',
            },
            {
              mistake: 'Not answering the question directly',
              fix: 'Start every paragraph by referring back to the exact words in the question. If the question asks "How does the writer present conflict?", start your paragraph with "The writer presents conflict through..." This keeps you focused and stops you going off on tangents.',
            },
            {
              mistake: 'Running out of time on the last question',
              fix: 'Practise writing to time. For a 30-mark Literature essay you have around 40-45 minutes. Plan for 5 minutes, write for 30-35, and check for 5. If you are running out of time, write bullet points for your last paragraph — you will get some credit.',
            },
          ].map((item) => (
            <div key={item.mistake} className="rounded-xl border border-border/40 bg-background/50 p-5">
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

      {/* ── Techniques to Practise ────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <PenTool className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Specific Techniques to Practise</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">For Reading/Analysis</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-cyan-400">1.</span>
                <span><span className="font-medium text-foreground">Zoom in on single words.</span> Pick one word from a quote and explain why the writer chose that exact word over alternatives.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-cyan-400">2.</span>
                <span><span className="font-medium text-foreground">Use &quot;effect on reader&quot; phrases.</span> &quot;This makes the reader feel...&quot;, &quot;This forces the reader to question...&quot;, &quot;This creates tension because...&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-cyan-400">3.</span>
                <span><span className="font-medium text-foreground">Link to context (Literature).</span> One sentence per paragraph connecting to historical/social context. &quot;A Jacobean audience would have...&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-cyan-400">4.</span>
                <span><span className="font-medium text-foreground">Practise timed paragraphs.</span> Set a 7-minute timer. Write one analytical paragraph. Review it. Repeat. This builds speed and quality together.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">For Writing Tasks</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-violet-400">1.</span>
                <span><span className="font-medium text-foreground">Practise openings.</span> Write 10 different openings for the same creative writing prompt. Use weather, dialogue, action, a question, a one-word sentence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-violet-400">2.</span>
                <span><span className="font-medium text-foreground">Learn 5 ambitious vocabulary words per week.</span> Words like &quot;ominous&quot;, &quot;relentless&quot;, &quot;fractured&quot;, &quot;suffocating&quot;, &quot;ethereal&quot;. Use them in your writing naturally.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-violet-400">3.</span>
                <span><span className="font-medium text-foreground">Use sensory detail.</span> Do not just say what you see. Include sounds, textures, smells, and physical sensations. This is the fastest way to improve descriptive writing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-violet-400">4.</span>
                <span><span className="font-medium text-foreground">Check SPaG last.</span> Leave 3-5 minutes at the end. Read your work out loud in your head. Fix full stops, capital letters, and any homophone errors (there/their/they&apos;re).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Mastery Checklist ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
            <CheckCircle2 className="size-4.5 text-amber-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Grade 5 Mastery Checklist</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Tick off each skill as you feel confident with it. Aim to have all of these ticked before your exam.
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-2 rounded-full bg-muted/60">
            <div
              className="h-full rounded-full bg-amber-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{checkedItems.size}/{CHECKLIST_ITEMS.length}</span>
        </div>

        <div className="space-y-2">
          {CHECKLIST_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleItem(i)}
              className={`w-full text-left flex items-start gap-3 rounded-lg border p-3.5 text-xs transition-all duration-200 ${
                checkedItems.has(i)
                  ? 'border-amber-500/30 bg-amber-500/[0.04] text-foreground'
                  : 'border-border/40 bg-background/50 text-muted-foreground hover:border-border'
              }`}
            >
              <div className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                checkedItems.has(i)
                  ? 'border-amber-400 bg-amber-400 text-background'
                  : 'border-muted-foreground/30'
              }`}>
                {checkedItems.has(i) && <CheckCircle2 className="size-3" />}
              </div>
              <span className={checkedItems.has(i) ? 'line-through opacity-70' : ''}>{item}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Example Comparison ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Grade 4 vs Grade 5: See the Difference</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Same question, same text, same quote — but the Grade 5 response does more with it. Study the difference carefully.
        </p>

        <button
          onClick={() => setShowComparison(!showComparison)}
          className="flex items-center gap-2 text-sm font-medium text-primary mb-4 hover:underline"
        >
          {showComparison ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          {showComparison ? 'Hide comparison' : 'Show comparison'}
        </button>

        {showComparison && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">
              <Badge variant="destructive" className="mb-3">Grade 4</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;In Macbeth, Macbeth sees a dagger floating in front of him. He says &lsquo;Is this a dagger which I see before me, the handle toward my hand? Come, let me clutch thee.&rsquo; This shows he is going mad because he can see things that are not there. He is about to kill Duncan and feels bad about it.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-red-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  Long, unselected quote — too much copied text
                </p>
                <p className="text-[10px] text-red-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  &quot;Going mad&quot; is vague — no analysis of language
                </p>
                <p className="text-[10px] text-red-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  No subject terminology or technique identification
                </p>
                <p className="text-[10px] text-red-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  &quot;Feels bad&quot; — too informal and undeveloped
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
              <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Grade 5</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;Shakespeare presents Macbeth&apos;s guilt through the hallucinated dagger, described as a &lsquo;fatal vision.&rsquo; The adjective &lsquo;fatal&rsquo; is significant because it has a double meaning — it could mean deadly, foreshadowing Duncan&apos;s murder, or it could mean fated, suggesting that Macbeth feels the killing is inevitable. The fact that he &lsquo;cannot clutch&rsquo; the dagger creates a sense of his inner conflict: he is drawn towards violence but cannot fully commit to it. A Jacobean audience would have seen this as a warning from God against the sin he is about to commit.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Short, embedded quotes woven into analysis
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Subject terminology used (&quot;adjective&quot;, &quot;foreshadowing&quot;)
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Explains the effect on the reader — &quot;creates a sense of...&quot;
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Links to context (Jacobean audience)
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Related Resources ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <ArrowRight className="size-4 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Related Revision</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Apply what you have learned with these targeted resources.
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">PEE/PEEL Essay Structure</p>
              <p className="text-xs text-muted-foreground mt-0.5">Master the paragraph framework Grade 5 needs.</p>
            </div>
          </Link>
          <Link
            href="/revision/language/spag"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
              <PenTool className="size-4 text-violet-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">SPaG Mastery</p>
              <p className="text-xs text-muted-foreground mt-0.5">Spelling, punctuation and grammar — easy marks.</p>
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
              <p className="text-xs text-muted-foreground mt-0.5">How to find and embed short, relevant quotes.</p>
            </div>
          </Link>
          <Link
            href="/revision/poetry"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10">
              <BookOpen className="size-4 text-rose-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Poetry Anthology</p>
              <p className="text-xs text-muted-foreground mt-0.5">Practise PEE/PEEL on every set poem.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Next Step ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-emerald-500/[0.04] p-6 sm:p-8 text-center">
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Ready to push higher?
        </h2>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-lg mx-auto">
          Once you have mastered these Grade 5 skills, the next step is developing more analytical depth and embedding your analysis more seamlessly.
        </p>
        <Button variant="default" size="lg" render={<Link href="/revision/grade-targets/grade-7" />}>
          How to Get a Grade 7
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
