'use client'

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Target,
  BookOpen,
  PenTool,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Crown,
  Eye,
  MessageSquare,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Component ────────────────────────────────────────────────────────── */

export default function Grade9Page() {
  const [showComparison, setShowComparison] = useState(false)

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
            <span className="text-lg font-bold text-amber-400">9</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">How to Get a Grade 9</h1>
            <p className="text-body-sm text-muted-foreground">
              Conceptualised, critical, and genuinely original analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── What Grade 9 Looks Like ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
            <Crown className="size-4.5 text-amber-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What a Grade 9 Looks Like</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Grade 9 is the top grade in GCSE English, achieved by roughly 3-4% of students. Examiners describe Grade 9 work as &quot;exploratory&quot;, &quot;critical&quot;, and &quot;conceptualised.&quot; The key distinction from Grade 7-8 is not more analysis — it is a different kind of thinking.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="size-4 text-blue-400" />
              Literature at Grade 9
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
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <PenTool className="size-4 text-violet-400" />
              Language at Grade 9
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
          <AlertCircle className="size-4 shrink-0 text-amber-400 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Important: </span>
            Grade 9 is not about being perfect or writing more. Many Grade 9 essays are the same length as Grade 7 essays. The difference is in the quality and originality of the thinking, not the quantity.
          </p>
        </div>
      </section>

      {/* ── Conceptualised Responses Explained ────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What &quot;Conceptualised&quot; Actually Means</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          This is the most important word in the Grade 9 mark scheme and the most misunderstood. A conceptualised response is not just detailed analysis — it is analysis organised around a big idea that runs through your whole essay.
        </p>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">A non-conceptualised essay (Grade 6-7):</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Analyses the text point by point, quote by quote. Each paragraph is a separate observation. The essay is a list of good points, but they do not connect to each other. It reads like: &quot;Here is one thing... and here is another thing... and here is another thing.&quot;
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">A conceptualised essay (Grade 8-9):</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Is driven by one central argument or concept that every paragraph develops, complicates, or refines. The essay has a thesis — a controlling idea that evolves across the response. It reads like: &quot;The text does this... which connects to a bigger pattern of... but this is complicated by... ultimately revealing...&quot;
            </p>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Example: Turning a topic into a concept</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="shrink-0 mt-0.5 text-[10px]">Topic</Badge>
                <p className="text-xs text-muted-foreground">&quot;How does Shakespeare present guilt in Macbeth?&quot;</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="shrink-0 mt-0.5 text-[10px]">Grade 7 thesis</Badge>
                <p className="text-xs text-muted-foreground">&quot;Shakespeare presents guilt as a destructive force that torments Macbeth throughout the play.&quot;</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="shrink-0 mt-0.5 text-[10px] bg-amber-500/20 text-amber-400 border-amber-500/30">Grade 9 concept</Badge>
                <p className="text-xs text-muted-foreground">&quot;Shakespeare presents guilt not as a consequence of sin but as proof of humanity — the tragedy of Macbeth is that his guilt reveals he was never truly a villain, but a man who destroyed himself by betraying his own nature.&quot;</p>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
              Notice how the Grade 9 concept is arguable, specific, and gives you something to develop across an entire essay. Every paragraph can build on, complicate, or test this idea.
            </p>
          </div>
        </div>
      </section>

      {/* ── Critical/Alternative Interpretations ─────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10">
            <Eye className="size-4.5 text-rose-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Critical and Alternative Interpretations</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Grade 9 responses show awareness that texts can be read in multiple ways. You do not need to name literary critics — but you do need to show that you can hold two (or more) interpretations at once and evaluate which is more convincing.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">Reading through different lenses</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              You do not need to memorise critical theory, but it helps to know that texts can be read through different perspectives:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { lens: 'Feminist reading', example: 'How does the text present gender roles? Whose voice is silenced? Is female agency celebrated or punished?' },
                { lens: 'Marxist reading', example: 'How does the text present class? Who has power? Is wealth shown as deserved or exploitative?' },
                { lens: 'Post-colonial reading', example: 'Whose perspective is centred? Are other cultures represented or othered? Who controls the narrative?' },
                { lens: 'Psychoanalytic reading', example: 'What drives the character beneath the surface? What are they repressing? What do symbols reveal about unconscious fears or desires?' },
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
                '"A contemporary audience might interpret this as... whereas for the original audience..."',
                '"Perhaps more significantly, this moment reveals..."',
                '"The text resists a single interpretation here — the deliberate ambiguity invites the reader to..."',
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

      {/* ── Sophisticated Vocabulary and Expression ───────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <MessageSquare className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Sophisticated Vocabulary and Expression</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Grade 9 writing does not use big words for the sake of it. The vocabulary is precise — every word earns its place. Here are the kinds of words and structures that signal top-level thinking:
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
                <span key={word} className="rounded-md bg-amber-500/10 px-2 py-1 text-[11px] font-medium text-amber-400">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-3">Sentence structures that signal sophistication</h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-amber-400 font-mono text-[10px]">01</span>
                <span><span className="font-medium text-foreground">The conditional:</span> &quot;Were it not for Lady Macbeth&apos;s intervention, Macbeth&apos;s ambition might have remained a private fantasy — it is her challenge to his masculinity that catalyses the regicide.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-amber-400 font-mono text-[10px]">02</span>
                <span><span className="font-medium text-foreground">The concession:</span> &quot;While the Inspector&apos;s departure might suggest that the Birlings have escaped consequence, Priestley&apos;s final telephone call shatters this complacency.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-amber-400 font-mono text-[10px]">03</span>
                <span><span className="font-medium text-foreground">The refinement:</span> &quot;This is not simply guilt but something more corrosive — a recognition that the self he believed himself to be was always an illusion.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5 text-amber-400 font-mono text-[10px]">04</span>
                <span><span className="font-medium text-foreground">The pivot:</span> &quot;On the surface, this moment reads as triumph; beneath it, however, lies a deeper anxiety about...&quot;</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
          <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Warning: </span>
            Do not use these words unless you genuinely understand what they mean. A misused sophisticated word is worse than a correctly used simple one. Examiners can tell the difference between a student who thinks precisely and one who has memorised a vocabulary list.
          </p>
        </div>
      </section>

      {/* ── What Examiners Look For ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Target className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What Examiners Look for at the Top</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Senior examiners and chief examiners have been clear about what separates Grade 8 from Grade 9. Here is what they consistently highlight:
        </p>

        <div className="space-y-4">
          {[
            {
              title: 'A genuine personal response, not a rehearsed one',
              detail: 'Examiners read thousands of essays. They can spot a response that has been memorised from a revision guide versus one where the student is genuinely thinking on the page. The best Grade 9 essays feel like the student is working something out in real time — wrestling with the text, not just presenting pre-packaged ideas.',
            },
            {
              title: 'An argument that develops, not one that repeats',
              detail: 'Each paragraph should move your argument forward. If your third paragraph could be swapped with your first paragraph without anyone noticing, your essay lacks progression. Grade 9 essays often start with a straightforward reading, then complicate it, challenge it, and arrive at a more nuanced conclusion than where they began.',
            },
            {
              title: 'Precision over quantity',
              detail: 'Grade 9 students are selective. They choose the most revealing moment in a text rather than trying to cover everything. One deeply explored quotation is worth more than five superficially analysed ones. Examiners use the word "discriminating" — it means you choose your evidence carefully and deliberately.',
            },
            {
              title: 'Awareness of the text as a constructed artefact',
              detail: 'The best responses show awareness that the text is not real life — it has been deliberately crafted. Instead of saying "Macbeth feels guilty," say "Shakespeare constructs Macbeth\'s guilt through..." This small shift (from character-as-person to character-as-construction) is one of the clearest markers of Grade 9 thinking.',
            },
            {
              title: 'Writing that is a pleasure to read',
              detail: 'This is harder to define but easy to recognise. Grade 9 essays are well-written in themselves — the prose is controlled, the expression is fluent, and the voice is assured. The examiner should not be fighting through your sentences to understand what you mean. Clarity and elegance together.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border/40 bg-background/50 p-5">
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-start gap-2">
                <Crown className="size-4 shrink-0 text-amber-400 mt-0.5" />
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed ml-6">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Example Comparison ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Grade 7 vs Grade 9: See the Difference</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Both responses analyse the same moment from &quot;Ozymandias.&quot; The Grade 9 response does not just analyse more — it thinks differently.
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
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
              <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Grade 7</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;Shelley uses dramatic irony when Ozymandias declares &lsquo;Look on my Works, ye Mighty, and despair!&rsquo; The irony is that there are no works left — only &lsquo;lone and level sands.&rsquo; The juxtaposition between the king&apos;s boastful command and the empty desert powerfully conveys Shelley&apos;s message that all human power is temporary. The exclamatory sentence shows Ozymandias&apos;s arrogance, while the final image of the &lsquo;boundless and bare&rsquo; desert reminds us that nature always outlasts human ambition. As a Romantic poet, Shelley believed in the supremacy of nature over man.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Strong analysis with good technique identification
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Context is relevant and connected
                </p>
                <p className="text-[10px] text-orange-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  The argument is solid but predictable — it follows a standard reading
                </p>
                <p className="text-[10px] text-orange-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  Treats the poem&apos;s meaning as settled rather than open to debate
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
              <Badge className="mb-3 bg-amber-500/20 text-amber-400 border-amber-500/30">Grade 9</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;What makes Ozymandias&apos;s inscription so devastating is not simply the irony of its survival alongside nothing — it is the fact that the words still command. Even in ruins, &lsquo;Look on my Works, ye Mighty, and despair!&rsquo; retains its imperative force; the reader, like the &lsquo;traveller,&rsquo; is still compelled to look. Shelley constructs a paradox: the monument has failed, but the poem preserves both the tyrant and his boast for eternity. In this sense, Ozymandias achieves a form of immortality that he never intended — not through his &lsquo;Works&rsquo; but through Shelley&apos;s own. The poet, then, becomes complicit in the very power he critiques. The &lsquo;lone and level sands&rsquo; may &lsquo;stretch far away,&rsquo; but the poem itself ensures that Ozymandias is never truly forgotten — raising the uncomfortable question of whether art, by preserving tyranny in language, inadvertently perpetuates it.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-amber-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Goes beyond the obvious irony to find a paradox within the poem itself
                </p>
                <p className="text-[10px] text-amber-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Considers the role of the poet and the reader — meta-awareness of the text as an artefact
                </p>
                <p className="text-[10px] text-amber-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Ends with a genuinely original question rather than a closed conclusion
                </p>
                <p className="text-[10px] text-amber-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Vocabulary is precise and controlled: &quot;complicit&quot;, &quot;perpetuates&quot;, &quot;imperative force&quot;
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Practical Steps ──────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <PenTool className="size-4.5 text-cyan-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">How to Actually Practise This</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Conceptualised thinking is a skill that develops with practice, not just knowledge. Here is what to do:
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">1. Before every essay, write your concept in one sentence</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Before you plan, write one sentence that captures your argument. Not your topic — your argument. &quot;How does Dickens present poverty?&quot; is a topic. &quot;Dickens presents poverty not as a condition but as a systemic crime perpetuated by those who benefit from ignoring it&quot; is a concept. If you cannot write this sentence, you are not ready to start writing.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">2. Practise &quot;what if the opposite were true?&quot;</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Take a standard interpretation and argue the opposite. If everyone says Lady Macbeth is evil, argue she is a victim. If everyone says the Inspector is a force for good, consider whether he is manipulative. You do not have to believe your alternative reading — but practising it builds the flexible thinking that Grade 9 requires.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">3. Rewrite your best Grade 7 paragraphs</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Take a paragraph you have already written that got Grade 7 feedback. Now rewrite it with a conceptual focus. Ask yourself: what bigger idea does this evidence connect to? What is the writer really doing here, beyond the obvious? What would a different reader see in this moment? This is the most efficient way to practise — you already know the content, so you can focus purely on deepening the thinking.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">4. Read your essay as an examiner would</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              After writing, read your essay and ask: &quot;Does this tell me something I did not already know about the text?&quot; If every point in your essay would appear in a revision guide, you are at Grade 7. If your essay offers a perspective that surprises even you, that is Grade 9 territory. The examiner should finish your essay thinking, not just ticking.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">5. Read beyond the set texts</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Grade 9 students often read widely. Reading literary criticism, book reviews, or essays about your set texts exposes you to how sophisticated readers think. You do not need to cite these sources in your exam — but they train your brain to think critically. Even reading the introduction to a good edition of your set text can transform your understanding.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom navigation ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-cyan-500/[0.04] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-heading-md font-heading text-foreground mb-1">
              Need to build foundations first?
            </h2>
            <p className="text-body-sm text-muted-foreground max-w-md">
              Grade 9 skills build on Grade 5 and 7 techniques. Make sure those foundations are solid before pushing for the top.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" render={<Link href="/revision/grade-targets/grade-5" />}>
              Grade 5 Guide
            </Button>
            <Button variant="outline" render={<Link href="/revision/grade-targets/grade-7" />}>
              Grade 7 Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
