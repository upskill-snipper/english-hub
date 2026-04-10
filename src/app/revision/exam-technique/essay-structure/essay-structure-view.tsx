'use client'

import { useState } from 'react'
import {
  PenLine,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Star,
  Sparkles,
  Target,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

import type { BoardEssayContent } from '@/components/revision/BoardSpecificExamTechnique'

/* ── Collapsible section helper ──────────────────────────────────── */

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

/* ── Tip / Warning callout ───────────────────────────────────────── */

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

/* ── Model paragraph component ───────────────────────────────────── */

function ModelParagraph({
  label,
  children,
  annotations,
}: {
  label: string
  children: React.ReactNode
  annotations?: { letter: string; colour: string; text: string }[]
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-background/50 p-4 sm:p-5 space-y-3">
      <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
        {label}
      </Badge>
      <p className="text-body-sm text-foreground/90 leading-relaxed italic">{children}</p>
      {annotations && annotations.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {annotations.map((a) => (
            <span
              key={a.letter}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium"
              style={{ backgroundColor: `${a.colour}15`, color: a.colour }}
            >
              <span className="font-bold">{a.letter}</span> {a.text}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Grade comparison component ──────────────────────────────────── */

function GradeComparison({
  grade5,
  grade9,
  focus,
}: {
  grade5: string
  grade9: string
  focus: string
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">{focus}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <Badge variant="secondary" className="mb-2 bg-amber-500/10 text-amber-400 text-[0.65rem]">
            Grade 5
          </Badge>
          <p className="text-body-sm text-muted-foreground leading-relaxed italic">
            {grade5}
          </p>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
          <Badge variant="secondary" className="mb-2 bg-emerald-500/10 text-emerald-400 text-[0.65rem]">
            Grade 9
          </Badge>
          <p className="text-body-sm text-muted-foreground leading-relaxed italic">
            {grade9}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────── */

export default function EssayStructureView({
  boardName,
  shortName,
  essay,
}: {
  boardName: string
  shortName: string
  essay: BoardEssayContent
}) {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <PenLine className="size-5 text-blue-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {shortName} Essay Structure
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Build paragraphs, introductions, and conclusions that hit every {boardName} mark
            </p>
          </div>
        </div>
      </div>

      {/* ── Board-specific overview ───────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Target className="mr-1 size-3" />
          {shortName} Specification
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          What {shortName} examiners are looking for
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed mb-5">
          {essay.intro}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Assessment Objective focus
            </p>
            <ul className="space-y-1.5">
              {essay.aoFocus.map((ao) => (
                <li key={ao} className="flex items-start gap-2 text-body-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-blue-400" />
                  <span>{ao}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              {shortName} examiner checklist
            </p>
            <ul className="space-y-1.5">
              {essay.examinerChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Board-specific structure tips ─────────────────────── */}
      <Section title={`${shortName} Structure Guidance`} badge="Board-specific" defaultOpen>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          These are the structural moves that pay back the most marks on {boardName} essays.
        </p>
        <div className="space-y-3">
          {essay.structureTips.map((tip) => (
            <div key={tip} className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4">
              <Star className="mt-0.5 size-4 shrink-0 text-blue-400" />
              <p className="text-body-sm text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-4 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Headline essay: {essay.headlineEssayLabel}
          </p>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {essay.headlineEssayGuidance}
          </p>
        </div>
      </Section>

      {/* ── PEEL Paragraphs ───────────────────────────────────── */}
      <Section title="PEEL Paragraphs" badge="Core Skill">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          PEEL is the backbone of analytical writing across every {shortName} literature essay.
          Every body paragraph should follow this structure to ensure you are demonstrating
          understanding, using evidence, and analysing the writer&apos;s craft.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              letter: 'P',
              name: 'Point',
              colour: '#3b82f6',
              detail: 'Make a clear, arguable claim that directly answers the question. This is your topic sentence.',
              example: 'Shakespeare presents Macbeth as a character consumed by guilt after murdering Duncan.',
            },
            {
              letter: 'E',
              name: 'Evidence',
              colour: '#10b981',
              detail: 'Embed a short, relevant quotation or textual reference that supports your point.',
              example: 'This is evident when Macbeth hallucinates, asking "Will all great Neptune\'s ocean wash this blood clean from my hand?"',
            },
            {
              letter: 'E',
              name: 'Explain',
              colour: '#a855f7',
              detail: 'Analyse what the evidence shows. Discuss language, structure, or form. Use subject terminology.',
              example: 'The rhetorical question reveals Macbeth\'s psychological torment. The hyperbole of "all great Neptune\'s ocean" suggests that no force in nature can undo his crime.',
            },
            {
              letter: 'L',
              name: 'Link',
              colour: '#f59e0b',
              detail: 'Connect back to the question, to wider themes, or to authorial intent / context.',
              example: 'Shakespeare may be using Macbeth\'s guilt to warn a Jacobean audience about the divine consequences of regicide.',
            },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="flex size-7 items-center justify-center rounded-lg text-sm font-bold"
                  style={{ backgroundColor: `${item.colour}15`, color: item.colour }}
                >
                  {item.letter}
                </span>
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              <div className="rounded-lg border border-border/30 bg-card p-3">
                <p className="text-xs text-muted-foreground italic leading-relaxed">{item.example}</p>
              </div>
            </div>
          ))}
        </div>

        <Tip>
          The best paragraphs often have multiple E layers -- you explain one word or
          technique, then zoom in on another. This is sometimes called PEEEL or PETAL.
          Quality of analysis matters more than paragraph length.
        </Tip>

        <ModelParagraph
          label="Full PEEL paragraph -- Macbeth"
          annotations={[
            { letter: 'P', colour: '#3b82f6', text: 'Point' },
            { letter: 'E', colour: '#10b981', text: 'Evidence' },
            { letter: 'E', colour: '#a855f7', text: 'Explain' },
            { letter: 'L', colour: '#f59e0b', text: 'Link' },
          ]}
        >
          Shakespeare presents Macbeth as a character overwhelmed by guilt following the
          murder of King Duncan. This is powerfully conveyed through Macbeth&apos;s desperate
          rhetorical question, &ldquo;Will all great Neptune&apos;s ocean wash this blood
          clean from my hand?&rdquo; The allusion to Neptune, the Roman god of the sea,
          creates a sense of cosmic scale: Macbeth is not merely asking about physical
          blood, but about whether any force in the universe can absolve his moral crime.
          The hyperbole of &ldquo;all great Neptune&apos;s ocean&rdquo; implies that his
          guilt is so vast it exceeds even the power of the divine. Furthermore, the image
          of blood that cannot be washed away becomes a recurring motif throughout the play,
          linking to Lady Macbeth&apos;s later sleepwalking scene and suggesting that guilt
          is contagious and inescapable. Shakespeare may be using this to remind his
          Jacobean audience of the doctrine of Divine Right -- that killing an anointed king
          is not simply murder but an offence against God&apos;s natural order.
        </ModelParagraph>
      </Section>

      {/* ── Introduction Techniques ───────────────────────────── */}
      <Section title="Introduction Techniques">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          A strong introduction sets the direction for your entire response. On {shortName}
          literature essays it should be concise (3--5 sentences), address the question
          directly, and outline your argument.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">The three-part introduction</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                step: '1',
                name: 'Context hook',
                detail: 'Open with a brief, relevant contextual point that frames your argument.',
                example: 'Writing in 1606, Shakespeare crafted Macbeth during a period of intense anxiety about kingship and the supernatural.',
              },
              {
                step: '2',
                name: 'Thesis statement',
                detail: 'State your main argument clearly. This is the single most important sentence in your essay.',
                example: 'Throughout the play, Shakespeare presents ambition as a destructive force that corrupts both the individual and the state.',
              },
              {
                step: '3',
                name: 'Roadmap',
                detail: 'Briefly indicate how your argument will develop across the essay.',
                example: 'This is explored through Macbeth\'s psychological deterioration, Lady Macbeth\'s manipulation, and the ultimate restoration of moral order.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                </div>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                <div className="rounded-lg border border-border/30 bg-card p-3">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Warning>
          Never start with &ldquo;In this essay I will...&rdquo;. It wastes words and
          sounds formulaic. Jump straight into your argument. The examiner knows it is
          an essay -- you do not need to announce it.
        </Warning>

        <ModelParagraph label="Model introduction -- Macbeth and ambition">
          Writing in the aftermath of the Gunpowder Plot, Shakespeare explores the
          catastrophic consequences of unchecked ambition in his tragedy Macbeth.
          Throughout the play, ambition is presented not merely as a personal flaw but
          as a force that disrupts the natural order, corrupts relationships, and
          ultimately leads to self-destruction. This is traced through Macbeth&apos;s
          transformation from a loyal warrior to a tyrannical king, Lady Macbeth&apos;s
          descent into madness, and the restoration of legitimate rule that suggests
          Shakespeare endorsed the divine right of kings.
        </ModelParagraph>
      </Section>

      {/* ── Thesis Statements ─────────────────────────────────── */}
      <Section title="How to Write a Thesis Statement">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Your thesis is the controlling idea of your essay. Every paragraph should connect
          back to it. A strong thesis is arguable (someone could disagree), specific
          (not vague), and addresses the question directly.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Weak vs Strong thesis statements</h3>
          <div className="space-y-3">
            {[
              {
                weak: 'Macbeth is about ambition.',
                strong: 'Shakespeare presents ambition as an inherently destructive force that, when untempered by moral conscience, corrupts both the individual and the society they govern.',
                why: 'The weak version is vague and descriptive. The strong version makes an arguable claim and hints at how the argument will develop.',
              },
              {
                weak: 'The poet uses lots of language techniques in the poem.',
                strong: 'Through a sustained semantic field of decay and a fragmented sonnet form, Shelley argues that political power is inherently temporary, regardless of the ruler\'s self-image.',
                why: 'The weak version says nothing specific. The strong version identifies precise techniques and connects them to a clear interpretation.',
              },
              {
                weak: 'Jekyll and Hyde is about duality.',
                strong: 'Stevenson uses the duality of Jekyll and Hyde to expose the hypocrisy of Victorian respectability, suggesting that suppressing natural desires creates, rather than prevents, monstrous behaviour.',
                why: 'The strong version goes beyond surface-level theme identification to make an argument about authorial intent.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-red-500/20 bg-red-500/[0.04] p-3">
                    <span className="text-xs font-semibold text-red-400">Weak</span>
                    <p className="mt-1 text-body-sm text-muted-foreground italic">{item.weak}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
                    <span className="text-xs font-semibold text-emerald-400">Strong</span>
                    <p className="mt-1 text-body-sm text-muted-foreground italic">{item.strong}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Why it works: </span>
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Tip>
          A useful formula: &ldquo;[Author] uses [technique/structure] to present
          [theme/character] as [your interpretation], suggesting that [wider argument
          about society/humanity].&rdquo; Adapt this to sound natural, not mechanical.
        </Tip>
      </Section>

      {/* ── Linking Paragraphs ────────────────────────────────── */}
      <Section title="Linking Paragraphs">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          {shortName} examiners reward &ldquo;sustained&rdquo; and &ldquo;cohesive&rdquo;
          responses. Your paragraphs should flow logically from one to the next, building
          an argument rather than listing separate points.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Transition strategies</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                type: 'Building',
                words: ['Furthermore', 'Moreover', 'This is developed further when', 'Building on this idea'],
                when: 'When your next point extends or deepens the same argument.',
              },
              {
                type: 'Contrasting',
                words: ['However', 'Conversely', 'In contrast to this', 'Yet Shakespeare complicates this by'],
                when: 'When your next point offers a different or opposing perspective.',
              },
              {
                type: 'Shifting focus',
                words: ['While [X], it is also significant that', 'Elsewhere in the text', 'At this point in the play'],
                when: 'When moving to a different aspect of the text or a new section.',
              },
              {
                type: 'Returning to thesis',
                words: ['This reinforces the idea that', 'Once again, this demonstrates', 'Ultimately, this contributes to'],
                when: 'When reconnecting to your overarching argument.',
              },
            ].map((item) => (
              <div key={item.type} className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">{item.type}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.words.map((w) => (
                    <span key={w} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {w}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{item.when}</p>
              </div>
            ))}
          </div>
        </div>

        <Warning>
          Avoid mechanical connectives like &ldquo;My first point is...&rdquo;,
          &ldquo;Secondly...&rdquo;, &ldquo;My next point is...&rdquo;. These make
          your essay feel like a list. Let the logic of your argument create the flow.
        </Warning>
      </Section>

      {/* ── Conclusions ───────────────────────────────────────── */}
      <Section title="Conclusions That Impress">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Your conclusion is the last thing the examiner reads. It should not simply
          repeat your introduction -- it should show that your argument has arrived
          somewhere. Think of it as the destination, not a summary.
        </p>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">What a conclusion should do</h3>
          <div className="space-y-2">
            {[
              'Restate your thesis in a new way -- show how your analysis has deepened it.',
              'Zoom out to the bigger picture: what is the writer saying about humanity, society, or the human condition?',
              'End with a thought-provoking final sentence that leaves the examiner thinking.',
              'Avoid introducing brand new points or quotations.',
            ].map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                <p className="text-body-sm text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <ModelParagraph label="Model conclusion -- Macbeth and ambition">
          Ultimately, Shakespeare presents ambition as a force that is not inherently evil,
          but becomes catastrophic when it operates without moral restraint. Macbeth&apos;s
          tragedy lies not in his desire for greatness, but in his willingness to sacrifice
          his conscience, his relationships, and his humanity in pursuit of it. By restoring
          order through Malcolm at the play&apos;s close, Shakespeare suggests that society
          can recover from the damage caused by unchecked ambition -- but the personal cost
          to those consumed by it is permanent and irreversible.
        </ModelParagraph>

        <Tip>
          Try ending with a short, punchy sentence after a longer analytical one. The
          contrast creates a sense of finality. For example: &ldquo;The blood on
          Macbeth&apos;s hands may eventually be washed away. The stain on his soul
          cannot.&rdquo;
        </Tip>
      </Section>

      {/* ── Full Model Essay Structures ───────────────────────── */}
      <Section title="Full Model Essay Structures">
        <Tabs defaultValue="literature">
          <TabsList className="mb-4">
            <TabsTrigger value="literature">Literature Essay</TabsTrigger>
            <TabsTrigger value="language">Language Essay</TabsTrigger>
          </TabsList>

          <TabsContent value="literature">
            <div className="space-y-4">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                A typical {shortName} Literature essay should follow this structure. Aim for
                3 analytical paragraphs plus an introduction and conclusion.
              </p>

              <div className="space-y-3">
                {[
                  {
                    part: 'Introduction',
                    time: '5 mins',
                    detail: 'Context hook + thesis statement + brief roadmap. 3-5 sentences. No quotations needed here.',
                    ao: 'AO1, AO3',
                  },
                  {
                    part: 'Paragraph 1 -- Extract analysis',
                    time: '10 mins',
                    detail: 'Analyse the given extract closely. Pick 2-3 key quotations from it. Use PEEL for each quotation. Focus on language and structure (AO2).',
                    ao: 'AO1, AO2',
                  },
                  {
                    part: 'Paragraph 2 -- Wider text',
                    time: '10 mins',
                    detail: 'Move beyond the extract to the rest of the play. Choose quotations from different parts of the text. Show how the theme develops or changes.',
                    ao: 'AO1, AO2, AO3',
                  },
                  {
                    part: 'Paragraph 3 -- Context and alternative readings',
                    time: '10 mins',
                    detail: 'Connect to historical/social context. Consider alternative interpretations. Show critical thinking about authorial intent.',
                    ao: 'AO1, AO2, AO3',
                  },
                  {
                    part: 'Conclusion',
                    time: '5 mins',
                    detail: 'Restate thesis in new words. Zoom out to the bigger picture. End with a thought-provoking final sentence.',
                    ao: 'AO1, AO3',
                  },
                ].map((item) => (
                  <div key={item.part} className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4">
                    <div className="shrink-0 text-right">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.time}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{item.part}</p>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                      <div className="flex gap-1.5 pt-1">
                        {item.ao.split(', ').map((ao) => (
                          <span key={ao} className="rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                            {ao}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="language">
            <div className="space-y-4">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                A {shortName} Language writing task requires a different approach.
                Structure is about craft and effect rather than analysis.
              </p>

              <div className="space-y-3">
                {[
                  {
                    part: 'Planning',
                    time: '5 mins',
                    detail: 'Decide on purpose, audience, form. Create a brief plan: opening hook, 3-4 main sections, ending. Note 2-3 techniques you will use deliberately.',
                    ao: 'AO5',
                  },
                  {
                    part: 'Opening -- Hook the reader',
                    time: '5 mins',
                    detail: 'Start in media res, with dialogue, a striking image, or a provocative statement. Establish tone and voice immediately.',
                    ao: 'AO5',
                  },
                  {
                    part: 'Development -- Build your piece',
                    time: '25 mins',
                    detail: 'Vary sentence structures (short for impact, complex for detail). Use paragraphs to control pace. Deploy at least 3 deliberate language techniques. Use varied punctuation.',
                    ao: 'AO5, AO6',
                  },
                  {
                    part: 'Ending -- Leave an impression',
                    time: '5 mins',
                    detail: 'Circle back to your opening image or idea. End on a powerful, memorable line. Avoid cliches or rushed endings.',
                    ao: 'AO5',
                  },
                  {
                    part: 'Proofread',
                    time: '5 mins',
                    detail: 'Check spelling, punctuation, and paragraphing. Fix homophones (there/their/they\'re). Ensure sentence demarcation is accurate throughout.',
                    ao: 'AO6',
                  },
                ].map((item) => (
                  <div key={item.part} className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4">
                    <div className="shrink-0 text-right">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.time}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{item.part}</p>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                      <div className="flex gap-1.5 pt-1">
                        {item.ao.split(', ').map((ao) => (
                          <span key={ao} className="rounded-md bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">
                            {ao}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* ── Grade 5 vs Grade 9 ────────────────────────────────── */}
      <Section title="Grade 5 vs Grade 9 Comparison">
        <p className="text-body-sm text-muted-foreground leading-relaxed mb-2">
          The difference between a Grade 5 and Grade 9 on {shortName} essays is rarely about
          knowing more quotations -- it is about depth of analysis, precision of expression,
          and sophistication of argument. Study these comparisons carefully.
        </p>

        <div className="space-y-5">
          <GradeComparison
            focus="Opening a paragraph"
            grade5="Macbeth is shown to be guilty. We can see this when he says 'Will all great Neptune's ocean wash this blood clean from my hand?'"
            grade9="Shakespeare presents guilt not as a fleeting emotion but as a permanent psychological wound. Macbeth's desperate rhetorical question -- 'Will all great Neptune's ocean wash this blood clean from my hand?' -- reveals a man who already knows the answer: nothing can absolve him."
          />

          <GradeComparison
            focus="Analysing language"
            grade5="The word 'blood' is used to show that Macbeth feels guilty. Blood is a metaphor for guilt. This is effective because it makes the reader feel how guilty he is."
            grade9="The metonymic use of 'blood' transcends the literal: while Duncan's blood can be physically removed, its symbolic weight -- representing moral transgression, violated loyalty, and divine law -- cannot. Shakespeare embeds guilt into the very fabric of the play's imagery."
          />

          <GradeComparison
            focus="Using context"
            grade5="At the time Shakespeare wrote Macbeth, people believed in the Divine Right of Kings. This means killing a king was seen as very bad. This links to Macbeth's guilt."
            grade9="For a Jacobean audience still shaken by the 1605 Gunpowder Plot, Macbeth's regicide would have carried immediate, visceral resonance. Shakespeare does not merely reflect contemporary anxieties about kingship -- he weaponises them, crafting Macbeth's guilt as both a psychological portrait and a political warning."
          />

          <GradeComparison
            focus="Writing a conclusion"
            grade5="In conclusion, Shakespeare shows that Macbeth is guilty throughout the play. He uses lots of techniques like metaphor and rhetorical questions to show this."
            grade9="Ultimately, guilt in Macbeth is not a punishment inflicted from outside but a force that grows from within, consuming the very identity of those it inhabits. Shakespeare's genius lies in showing that Macbeth's greatest torment comes not from the consequences of murder, but from the knowledge that he chose it freely."
          />
        </div>

        <Tip>
          Notice the patterns in Grade 9 writing: embedded quotations rather than
          standalone ones, precise subject terminology, multiple layers of analysis on a
          single word, and context woven into the argument rather than bolted on separately.
        </Tip>
      </Section>

      {/* ── Related Revision ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Apply It in Your Revision</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Pair essay structure with these related guides.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/revision/grade-targets/grade-5"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Star className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 5 Standards</p>
              <p className="text-xs text-muted-foreground mt-0.5">PEE/PEEL paragraphs in action.</p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-9"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Star className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 9 Standards</p>
              <p className="text-xs text-muted-foreground mt-0.5">Conceptualised, sustained arguments.</p>
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
              <p className="text-xs text-muted-foreground mt-0.5">Find the evidence your essays need.</p>
            </div>
          </Link>
          <Link
            href="/revision/poetry"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10">
              <PenLine className="size-4 text-rose-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Poetry Analysis</p>
              <p className="text-xs text-muted-foreground mt-0.5">Practise structures on the anthology.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Navigation ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique" />}
        >
          <ArrowLeft className="size-4" />
          Back to Exam Technique
        </Button>
        <Button
          variant="default"
          className="flex-1"
          render={<Link href="/revision/exam-technique/time-management" />}
        >
          Time Management
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
