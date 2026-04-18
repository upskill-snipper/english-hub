'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  GitCompare,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Target,
  Layers,
  BookOpen,
  Info,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/* ── Paragraph frames ──────────────────────────────────────────── */

const FRAMES = [
  {
    name: 'Shared territory frame',
    structure:
      'Both poets... / However, whereas Poet A..., Poet B... / This reveals that...',
    useFor:
      'Opening a comparative paragraph when the similarity is the stronger starting point.',
    example:
      'Both Barrett Browning and Shelley use natural imagery to express desire. However, whereas Barrett Browning\'s vine metaphor becomes something she must actively reject ("burst, shattered, everywhere!"), Shelley\'s catalogue of natural pairings remains a smooth, uninterrupted argument. This reveals a key difference: Barrett Browning treats desire as something that must be wrestled with, while Shelley treats it as a self-evident truth.',
  },
  {
    name: 'Divergent frame',
    structure:
      'While Poet A..., Poet B takes a markedly different approach... / This contrast foregrounds...',
    useFor:
      'When the difference is more striking than the similarity and you want to lead with it.',
    example:
      'While Hardy drains his landscape of all colour and warmth ("the sun was white, as though chidden of God"), Byron locates coldness in the beloved\'s body rather than in the setting ("Colder thy kiss"). This contrast foregrounds the different sources of their grief: Hardy blames love itself for the bleakness, while Byron directs his pain at a specific, named betrayal.',
  },
  {
    name: 'Development frame',
    structure:
      'Poet A establishes... / Poet B pushes this further by... / Together they suggest...',
    useFor:
      'When Poem B intensifies or complicates an idea that Poem A introduces. A high-level analytical move.',
    example:
      'Day Lewis establishes that parental love means accepting separation ("love is proved in the letting go"). Heaney pushes this further by showing what happens after the letting go -- the parent becomes a dependent who "keeps stumbling / Behind me, and will not go away." Together they suggest that the parent-child reversal is not a single moment of release but an ongoing, uncomfortable process that never fully resolves.',
  },
]

/* ── Thesis levels ─────────────────────────────────────────────── */

const THESIS_LEVELS = [
  {
    grade: 'Grade 5',
    thesis:
      '"This essay will compare how both poets present love using imagery and language techniques."',
    commentary:
      'Announces the essay rather than arguing. Lists techniques without linking them to meaning. No comparative claim.',
  },
  {
    grade: 'Grade 7',
    thesis:
      '"Both Duffy and Causley use memory to explore their relationship with a parent, but Duffy\'s tone is possessive while Causley\'s is peaceful."',
    commentary:
      'Makes a clear comparative observation, but remains descriptive. Saying the tones differ is accurate but does not explain what the difference means or why it matters.',
  },
  {
    grade: 'Grade 9',
    thesis:
      '"Where Duffy possessively claims her mother\'s pre-motherhood glamour as her own inheritance, Causley surrenders to the luminous distance between the living and the dead -- suggesting that memory of a parent can be either an act of reclamation or an act of letting go, and that love shapes which it becomes."',
    commentary:
      'A genuinely evaluative thesis. It reads both poems through a single analytical lens (reclamation vs surrender), makes a comparative claim that could only come from reading them together, and connects the comparison to a wider idea about love and memory.',
  },
]

/* ── Strong pairings ───────────────────────────────────────────── */

const STRONG_PAIRINGS = [
  {
    theme: 'Desire and longing',
    poemA: 'Sonnet 29',
    poemB: "Love's Philosophy",
    why: 'Both use nature to express desire, but Barrett Browning rejects fantasy for reality while Shelley\'s plea goes unanswered. Strong contrast between desire fulfilled and desire frustrated.',
  },
  {
    theme: 'Obsessive / possessive love',
    poemA: "Porphyria's Lover",
    poemB: "The Farmer's Bride",
    why: 'Both use dramatic monologue to expose a speaker whose desire dehumanises the beloved. Browning\'s acts; Mew\'s is paralysed. Two faces of the same possessive impulse.',
  },
  {
    theme: 'Parent-child love',
    poemA: 'Walking Away',
    poemB: 'Follower',
    why: 'Both explore how parent-child roles reverse over time. Day Lewis frames it as noble sacrifice; Heaney finds it unsettling. Contrasting emotional responses to the same structural truth.',
  },
  {
    theme: 'Memory and loss',
    poemA: 'Before You Were Mine',
    poemB: 'Eden Rock',
    why: 'Both reach towards a parent they cannot fully access. Duffy possessively reclaims; Causley gently accepts. Two opposite models of how memory handles loss.',
  },
  {
    theme: 'Love\'s ending',
    poemA: 'Neutral Tones',
    poemB: 'When We Two Parted',
    why: 'Both present love\'s aftermath as more powerful than love itself. Hardy is bitter and nihilistic; Byron is mournful and ashamed. Different emotional textures of grief.',
  },
  {
    theme: 'Nature and reconciliation',
    poemA: 'Winter Swans',
    poemB: "Love's Philosophy",
    why: 'Both use nature as a mirror for human love. Sheers lets nature enact reconciliation wordlessly; Shelley uses nature as evidence in an argument. Silence versus rhetoric.',
  },
  {
    theme: 'Distance in relationships',
    poemA: 'Letters from Yorkshire',
    poemB: 'Mother, Any Distance',
    why: 'Both explore physical distance as an emotional condition. Dooley shows distance sustaining connection; Armitage shows it as a necessary but painful rupture.',
  },
  {
    theme: 'Joy in love',
    poemA: 'Singh Song!',
    poemB: 'Sonnet 29',
    why: 'Both celebrate overwhelming love, but Nagra uses comedy and dialect while Barrett Browning uses intensity and sensual imagery. Public warmth versus private passion.',
  },
  {
    theme: 'Power dynamics in love',
    poemA: "The Farmer's Bride",
    poemB: 'Sonnet 29',
    why: 'Both negotiate desire within power structures. The farmer\'s desire entraps; Barrett Browning\'s evolves into mutual respect. Desire as imprisonment versus liberation.',
  },
  {
    theme: 'Time and family',
    poemA: 'Follower',
    poemB: 'Before You Were Mine',
    why: 'Both show time transforming the parent from hero to diminished figure. Heaney feels guilt; Duffy feels possessive triumph. Different reckonings with parental change.',
  },
]

/* ── AQA mark scheme ───────────────────────────────────────────── */

const AO_BANDS = [
  {
    ao: 'AO1 (12 marks)',
    label: 'Critical, exploratory, conceptualised response',
    descriptors: [
      'Grade 5: Clear understanding, relevant quotes, some comparison',
      'Grade 7: Thoughtful, developed analysis with well-chosen evidence and sustained comparison',
      'Grade 9: Exploratory, critical, conceptualised response with precise evidence and comparison woven throughout',
    ],
  },
  {
    ao: 'AO2 (12 marks)',
    label: 'Analysis of language, form and structure',
    descriptors: [
      'Grade 5: Clear explanation of language and structural features with some terminology',
      'Grade 7: Thoughtful analysis of how methods create meaning, with accurate terminology',
      'Grade 9: Exploratory analysis of how methods shape meaning and reader response, with precise and assured use of terminology',
    ],
  },
  {
    ao: 'AO3 (6 marks)',
    label: 'Context',
    descriptors: [
      'Grade 5: Clear understanding of relevant context',
      'Grade 7: Thoughtful consideration of how context shapes meaning',
      'Grade 9: Exploratory, critical engagement with context as integral to interpretation',
    ],
  },
]

/* ── Component ─────────────────────────────────────────────────── */

export default function ComparisonGuidePage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love &amp; Relationships
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              AQA Only
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            How to Compare Love &amp; Relationships Poems
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A complete guide to AQA Paper 2 Section B. Learn the
            point-by-point method, build Grade 9 thesis statements, choose
            strong pairings, and avoid the mistakes that cap otherwise good
            essays at Grade 6.
          </p>
        </div>
      </section>

      {/* ── The exam question format ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Info className="size-5 text-sky-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            What the Exam Asks You to Do
          </h2>
        </div>
        <div className="rounded-xl border border-border/40 bg-background/50 p-5">
          <p className="text-body-sm italic text-foreground/90 leading-relaxed mb-3">
            &quot;Compare how poets present [theme/idea] in &apos;[named
            poem]&apos; and in one other poem from your anthology.&quot;
          </p>
          <ul className="space-y-2 text-body-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">1.</span>
              One poem is named for you. You must write about it.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              You choose the second poem. This is where strong pairing
              knowledge wins marks.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              You must compare throughout -- not write about one, then the
              other.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">4.</span>
              30 marks total: AO1 (12), AO2 (12), AO3 (6). You have roughly
              45 minutes.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Point-by-point vs block ───────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-sky-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Point-by-Point vs Block: Why Point-by-Point Wins
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">
                Point-by-point
              </h3>
              <Badge
                variant="secondary"
                className="text-[0.65rem]"
              >
                Recommended
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
              Each paragraph takes one idea and compares both poems within it.
              Every paragraph scores comparison marks.
            </p>
            <div className="rounded-xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                Thesis: comparative claim
                <br />
                P1: Imagery -- Poem A then Poem B compared
                <br />
                P2: Structure/form -- Poem A then Poem B compared
                <br />
                P3: Tone/effect -- Poem A then Poem B compared
                <br />
                Conclusion: wider significance
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-foreground">
                Block then block
              </h3>
              <Badge
                variant="secondary"
                className="text-[0.65rem]"
              >
                Avoid
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
              Write about Poem A in full, then Poem B in full with links back.
              This is the single most common reason good candidates miss Grade
              8. It caps your comparison marks.
            </p>
            <div className="rounded-xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                P1-P2: Poem A analysis
                <br />
                P3-P4: Poem B analysis (with backlinks)
                <br />
                = limited comparison throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thesis levels ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three Levels of Thesis
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Your thesis is the single most important sentence in the essay. Here
          are three versions of the same basic comparison, pitched at Grade 5,
          7, and 9. Notice how the top version reads both poems through a
          single analytical lens.
        </p>

        <div className="grid gap-4">
          {THESIS_LEVELS.map((t) => (
            <div
              key={t.grade}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <Badge
                variant="secondary"
                className="mb-3 text-[0.65rem] uppercase tracking-wider"
              >
                {t.grade}
              </Badge>
              <p className="text-body-sm italic text-foreground/90 leading-relaxed mb-3">
                {t.thesis}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Why: </span>
                {t.commentary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Paragraph frames ──────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three Paragraph Frames
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          These frames give you a reliable structure for every comparative
          paragraph. Pick the frame that fits the point you are making, and
          vary them across the essay so each paragraph feels fresh.
        </p>

        <div className="space-y-4">
          {FRAMES.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-heading-md font-heading text-foreground mb-2">
                {f.name}
              </h3>
              <div className="mb-3 rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                  Structure
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  {f.structure}
                </p>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                <span className="font-semibold text-foreground">
                  Use for:{' '}
                </span>
                {f.useFor}
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                  Example (Love &amp; Relationships)
                </p>
                <p className="text-body-sm italic text-muted-foreground leading-relaxed">
                  {f.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Strong pairings ───────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GitCompare className="size-5 text-rose-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            10 Strong Pairings to Know
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          For any named poem, you need a strong second choice ready. These
          pairings are built around shared themes with contrasting approaches
          -- the combination that produces the richest comparisons.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {STRONG_PAIRINGS.map((pair) => (
            <div
              key={pair.theme}
              className="rounded-xl border border-border/60 bg-card p-4"
            >
              <Badge
                className="mb-2 bg-rose-500/10 text-rose-400 border-rose-500/20 text-[0.65rem]"
              >
                {pair.theme}
              </Badge>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                <span>{pair.poemA}</span>
                <span className="text-muted-foreground">+</span>
                <span>{pair.poemB}</span>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {pair.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AQA mark scheme decoded ───────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            AQA Mark Scheme Decoded
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Understanding what examiners are actually looking for at each grade
          boundary helps you target your revision. Paper 2 Section B is marked
          across three Assessment Objectives.
        </p>

        <div className="space-y-4">
          {AO_BANDS.map((ao) => (
            <div
              key={ao.ao}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem]">
                  {ao.ao}
                </Badge>
                <h3 className="text-sm font-semibold text-foreground">
                  {ao.label}
                </h3>
              </div>
              <div className="space-y-2">
                {ao.descriptors.map((d) => (
                  <div
                    key={d}
                    className="flex gap-3 rounded-lg border border-border/30 bg-background/50 p-3"
                  >
                    <Badge
                      variant="outline"
                      className="shrink-0 text-[0.6rem]"
                    >
                      {d.split(':')[0]}
                    </Badge>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {d.split(':').slice(1).join(':')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Common mistakes ───────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="size-5 text-amber-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Common Mistakes That Cap Your Grade
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            'Writing about one poem for half the essay then the other. This is the #1 reason strong candidates miss Grade 8. Every paragraph must compare.',
            'Comparing surface features ("both poems have four stanzas") without linking them to meaning or effect. Form only matters when you explain what it does.',
            'Forgetting the question mid-essay. Every paragraph should answer the actual prompt, not just describe the poems. Underline the key word in the question and refer back to it.',
            'Dropping in context as a disconnected bolt-on ("Barrett Browning lived in the Victorian era"). Context only earns marks when you explain how it shapes the poem\'s meaning.',
            'Choosing a weak second poem. If your pairing shares a theme but not enough contrast, you will struggle to sustain three comparative paragraphs. Practise your pairings before the exam.',
            'Listing techniques without analysis. Saying "Shelley uses a rhetorical question" earns no marks. Saying what the rhetorical question does to the reader is what earns marks.',
          ].map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-1 text-amber-400">-</span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {m}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 5-minute planning checklist ────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            5-Minute Planning Checklist
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4 max-w-2xl">
          In the exam, spend 5 minutes planning before you write. Here is
          exactly what to do in those 5 minutes.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Underline the key word in the question -- what theme or idea must you address?',
            'Read the named poem on the insert. Annotate 2-3 key quotes that relate to the question.',
            'Choose your second poem. Pick one with the same theme but a contrasting approach.',
            'Two columns: Poem A, Poem B. Jot theme, key quote, technique, and effect in each.',
            'Circle the three strongest points of comparison -- these become your three paragraphs.',
            'Draft a one-sentence comparative thesis that reads both poems through a single idea.',
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Linking words and phrases ─────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <GitCompare className="size-5 text-violet-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Comparative Language to Use
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4 max-w-2xl">
          Vary your comparative connectives. Using &quot;similarly&quot; and
          &quot;however&quot; repeatedly sounds mechanical. Here are better
          alternatives.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              For similarities
            </h3>
            <ul className="space-y-1 text-body-sm text-muted-foreground">
              <li>Both poets...</li>
              <li>In a similar vein...</li>
              <li>This is echoed in [Poem B], where...</li>
              <li>[Poet B] shares this preoccupation, though...</li>
              <li>Like [Poet A], [Poet B] also...</li>
            </ul>
          </div>
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
              For differences
            </h3>
            <ul className="space-y-1 text-body-sm text-muted-foreground">
              <li>Whereas [Poet A]..., [Poet B] takes a markedly different approach...</li>
              <li>By contrast...</li>
              <li>This stands in sharp opposition to...</li>
              <li>Where [Poem A] resolves into..., [Poem B] refuses closure...</li>
              <li>[Poet B] complicates this by...</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          See these techniques in action
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          10 fully worked essay plans showing the point-by-point method,
          Grade 9 theses, and comparative paragraphs for real AQA-style
          questions.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={
            <Link href="/revision/poetry/love-and-relationships/essay-plans" />
          }
        >
          Essay Plans
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
