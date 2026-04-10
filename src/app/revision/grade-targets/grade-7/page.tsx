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
  Zap,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Vocabulary bank ──────────────────────────────────────────────────── */

const VOCABULARY_BANK = [
  { word: 'Juxtaposition', usage: 'The writer juxtaposes innocence and corruption to highlight the moral decay of...' },
  { word: 'Microcosm', usage: 'The setting functions as a microcosm of Victorian society, reflecting...' },
  { word: 'Subvert', usage: 'Shelley subverts the reader\'s expectations by presenting the creature as...' },
  { word: 'Pervasive', usage: 'The pervasive sense of guilt throughout the play suggests...' },
  { word: 'Catalyse', usage: 'This event catalyses Macbeth\'s descent into tyranny, as...' },
  { word: 'Emblematic', usage: 'The ghost is emblematic of Macbeth\'s fractured conscience, representing...' },
  { word: 'Foreground', usage: 'Dickens foregrounds the suffering of the poor to compel his middle-class readers to...' },
  { word: 'Underpin', usage: 'Patriarchal values underpin the power dynamics in the poem, as evidenced by...' },
  { word: 'Nuanced', usage: 'The poet offers a nuanced portrayal of love, acknowledging both its...' },
  { word: 'Precipitate', usage: 'Lady Macbeth\'s manipulation precipitates the murder, raising questions about...' },
]

/* ── Component ────────────────────────────────────────────────────────── */

export default function Grade7Page() {
  const [showComparison, setShowComparison] = useState(false)
  const [expandedVocab, setExpandedVocab] = useState<number | null>(null)

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
            <span className="text-lg font-bold text-emerald-400">7</span>
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">How to Get a Grade 7</h1>
            <p className="text-body-sm text-muted-foreground">
              Thoughtful, developed, and perceptive analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── What Grade 7 Looks Like ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Target className="size-4.5 text-emerald-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">What a Grade 7 Looks Like</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Grade 7 is where examiners start using words like &quot;thoughtful&quot;, &quot;developed&quot;, and &quot;perceptive&quot;. The difference between Grade 5-6 and Grade 7 is not about knowing more content — it is about how deeply and precisely you analyse. A Grade 7 student does not just explain; they interpret.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="size-4 text-blue-400" />
              Literature at Grade 7
            </h3>
            <ul className="space-y-2.5">
              {[
                'Thoughtful, developed analysis of language and structure',
                'Judicious use of textual references — carefully chosen, not just relevant',
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
              Language at Grade 7
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
            <span className="font-semibold text-foreground">The key word is &quot;thoughtful.&quot; </span>
            Grade 7 responses do not just explain what a technique does — they consider why the writer chose it, what alternatives existed, and how it connects to the bigger picture. Your analysis should feel like it has been carefully considered, not just identified.
          </p>
        </div>
      </section>

      {/* ── Upgrading from Grade 5-6 ─────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="size-4.5 text-primary" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Upgrading from Grade 5-6 to Grade 7</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          If you are consistently getting Grade 5 or 6, you already have the foundations. Here are the specific shifts that take you to Grade 7:
        </p>

        <div className="space-y-4">
          {[
            {
              from: 'Explaining what a quote means',
              to: 'Exploring why the writer chose those specific words over alternatives',
              example: 'Instead of "The word \'dark\' suggests evil," write "Shakespeare\'s choice of \'dark\' over \'black\' or \'shadowed\' creates a more abstract, all-encompassing sense of moral corruption — it is not just the absence of light, but the absence of goodness."',
            },
            {
              from: 'Commenting on individual quotes in isolation',
              to: 'Tracking patterns and connecting ideas across the whole text',
              example: 'At Grade 5-6 you analyse one quote per paragraph. At Grade 7, you might track how a motif (like blood, light, or nature) develops across the text and show how its meaning shifts.',
            },
            {
              from: 'Stating context as a separate fact',
              to: 'Weaving context into your analysis so it enhances your point',
              example: 'Instead of "In Victorian times, women had no rights. This is shown when..." write "The constraints placed on the Farmer\'s Bride mirror the broader Victorian treatment of women as property, where even affection was framed as ownership."',
            },
            {
              from: 'Writing PEEL paragraphs with clear sections',
              to: 'Writing fluid paragraphs where analysis and evidence flow together',
              example: 'Your paragraphs should not feel like four separate boxes. The best Grade 7 paragraphs weave point, evidence, and analysis together so the reader cannot see the joins.',
            },
            {
              from: 'Identifying one interpretation of a quote',
              to: 'Considering multiple possible meanings',
              example: 'Use phrases like "This could suggest... however, it might also imply..." or "On one level this represents... but on another it reflects..." Ambiguity is your friend at Grade 7.',
            },
          ].map((shift) => (
            <div key={shift.from} className="rounded-xl border border-border/40 bg-background/50 p-5">
              <div className="grid gap-3 sm:grid-cols-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-muted/60 text-[10px] font-bold text-muted-foreground">5</div>
                  <p className="text-xs text-muted-foreground">{shift.from}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-[10px] font-bold text-emerald-400">7</div>
                  <p className="text-xs text-foreground font-medium">{shift.to}</p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/20 p-3">
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">{shift.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Advanced Analytical Techniques ────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Advanced Analytical Techniques</h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">1. Zoom in, then zoom out</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Analyse a single word in microscopic detail, then zoom out to show how it connects to a bigger theme or idea. This creates analytical depth. For example: analyse the word &quot;clutch&quot; in Macbeth&apos;s dagger speech (zoom in on its desperation, its physical violence), then zoom out to connect it to the play&apos;s broader exploration of how ambition makes people grasp at things they cannot hold.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">2. Explore semantic fields</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Rather than analysing one technique, identify a pattern of related words (a semantic field) and explain what it cumulatively creates. For example: in &quot;London&quot;, Blake uses a semantic field of restriction — &quot;charter&apos;d&quot;, &quot;marks&quot;, &quot;manacles&quot;, &quot;ban&quot; — creating a suffocating sense of a city where every aspect of life is controlled and commodified. This is much more impressive than analysing each word separately.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">3. Comment on what is absent, not just what is present</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Grade 7 students notice what the writer chooses not to include. For example: &quot;Notably, the Farmer&apos;s Bride is never given a name or a voice — her silence is itself a commentary on how women were denied agency in Victorian society.&quot; Commenting on absence shows sophisticated thinking.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">4. Use structural analysis as a tool</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Do not just say &quot;the poem has 6 stanzas.&quot; Explain what the structural choices do. Does the text shift tone halfway through? Does the ending mirror or subvert the opening? Is there a volta (a turn) in a sonnet? Does the stanza form constrain or liberate the speaker? Structural comments at Grade 7 should explain how form contributes to meaning.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">5. Track a thread across a whole text</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              In your essay, show how an idea develops, shifts, or intensifies across the text. For Macbeth, you might track how references to sleep move from peaceful (&quot;innocent sleep&quot;) to tortured (&quot;Macbeth shall sleep no more&quot;) to despairing (&quot;full of scorpions is my mind&quot;). This shows you understand the text as a whole, not just isolated moments.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vocabulary Bank ──────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
            <MessageSquare className="size-4.5 text-amber-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Grade 7 Vocabulary Bank</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          These words and phrases will make your analysis sound more precise and academic. Click each word to see how to use it in a sentence.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {VOCABULARY_BANK.map((item, i) => (
            <button
              key={item.word}
              onClick={() => setExpandedVocab(expandedVocab === i ? null : i)}
              className={`text-left rounded-xl border p-4 transition-all duration-200 ${
                expandedVocab === i
                  ? 'border-amber-500/30 bg-amber-500/[0.04]'
                  : 'border-border/40 bg-background/50 hover:border-border'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{item.word}</span>
                {expandedVocab === i ? (
                  <ChevronUp className="size-3.5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="size-3.5 text-muted-foreground" />
                )}
              </div>
              {expandedVocab === i && (
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed italic">
                  &quot;{item.usage}&quot;
                </p>
              )}
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
          <h2 className="text-heading-md font-heading text-foreground">Grade 6 vs Grade 7: See the Difference</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Both responses analyse the same moment from &quot;An Inspector Calls.&quot; Notice how the Grade 7 version develops ideas further and explores complexity.
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
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-5">
              <Badge className="mb-3 bg-orange-500/20 text-orange-400 border-orange-500/30">Grade 6</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;Priestley presents Mr Birling as arrogant when he says the Titanic is &lsquo;unsinkable, absolutely unsinkable.&rsquo; The repetition of &lsquo;unsinkable&rsquo; shows how confident he is. This creates dramatic irony because the audience knows the Titanic sank. Priestley does this to show that Birling is wrong and cannot be trusted. In 1912, many capitalists like Birling were overconfident about progress.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-orange-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Good technique identification (repetition, dramatic irony)
                </p>
                <p className="text-[10px] text-orange-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  Context is bolted on at the end, not integrated
                </p>
                <p className="text-[10px] text-orange-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  Analysis stays at surface level — says Birling is &quot;wrong&quot; but does not explore the implications
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
              <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Grade 7</Badge>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                &quot;Priestley strategically undermines Birling&apos;s authority from the outset through the Titanic reference. The emphatic repetition of &lsquo;unsinkable&rsquo; does not simply reveal his confidence — it exposes the dangerous certainty of the capitalist class, who believed that wealth and technology made them invulnerable. The dramatic irony functions as more than a comedic device; it positions the audience to question every subsequent claim Birling makes, effectively dismantling his credibility before the Inspector even arrives. Priestley is not merely mocking one man but indicting an entire ideology — the post-war audience of 1945, who had lived through two world wars and the sinking of the Titanic, would have recognised Birling&apos;s worldview as catastrophically misguided.&quot;
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Analysis goes beyond the surface — explores what the irony achieves structurally
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Context is woven into the argument, not tagged on
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Moves from individual to universal — connects to &quot;an entire ideology&quot;
                </p>
                <p className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  Vocabulary is precise: &quot;strategically&quot;, &quot;indicting&quot;, &quot;dismantling&quot;
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
          Take Grade 7 thinking further with these resources.
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Thesis-led Essay Structure</p>
              <p className="text-xs text-muted-foreground mt-0.5">Move beyond PEE — build a sustained argument.</p>
            </div>
          </Link>
          <Link
            href="/revision/exam-technique/question-types"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <MessageSquare className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Question Types Decoded</p>
              <p className="text-xs text-muted-foreground mt-0.5">What each command word is really asking for.</p>
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Poetry Comparison</p>
              <p className="text-xs text-muted-foreground mt-0.5">Compare methods, contexts and effects across poems.</p>
            </div>
          </Link>
          <Link
            href="/revision/language/writing"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
              <PenTool className="size-4 text-violet-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Creative & Transactional Writing</p>
              <p className="text-xs text-muted-foreground mt-0.5">Crafted sentences, deliberate structure, ambitious vocab.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Next Step ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-amber-500/[0.04] p-6 sm:p-8 text-center">
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Aiming even higher?
        </h2>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-lg mx-auto">
          Grade 8 and 9 responses are distinguished by conceptualised thinking, critical engagement, and sophisticated expression. See what the very top looks like.
        </p>
        <Button variant="default" size="lg" render={<Link href="/revision/grade-targets/grade-9" />}>
          How to Get a Grade 9
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
