'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Edit3,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Palette,
  FileText,
  PenTool,
  BookOpen,
  Type,
  AlignLeft,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

/* ── Helpers ──────────────────────────────────────────────────────── */

function Section({
  title,
  icon: Icon,
  colour,
  children,
  defaultOpen = false,
}: {
  title: string
  icon: typeof Edit3
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
        <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10">
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

/* ── Main page ────────────────────────────────────────────────────── */

export default function WritingPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Edit3 className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Writing Skills
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Creative writing, transactional writing, planning, and language craft
            </p>
          </div>
        </div>
      </div>

      {/* ── 1. Creative Writing Techniques ────────────────────────── */}
      <Section title="Creative Writing Techniques" icon={Palette} colour="text-emerald-400" defaultOpen>
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Paper 1 Section B asks you to produce a piece of creative writing -- either
            narrative (telling a story) or descriptive (painting a scene). The best responses
            treat this as a craft, not a rushed afterthought.
          </p>

          <Tabs defaultValue="narrative">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="narrative">Narrative Writing</TabsTrigger>
              <TabsTrigger value="descriptive">Descriptive Writing</TabsTrigger>
            </TabsList>

            <TabsContent value="narrative" className="mt-4 space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Building a Strong Narrative
              </h3>
              <div className="space-y-3">
                {[
                  {
                    heading: 'Start in the middle of the action',
                    detail:
                      'Do not waste time setting up backstory. Drop the reader straight into a moment of tension, conflict, or change. You can fill in context later through flashback or dialogue.',
                  },
                  {
                    heading: 'Limit your scope',
                    detail:
                      'The biggest mistake in timed creative writing is trying to cover too much. Focus on a single scene or a short time period. A 45-minute exam piece cannot sustain an epic plot -- one vivid moment will always outperform a rushed saga.',
                  },
                  {
                    heading: 'Create a character the reader cares about',
                    detail:
                      'Give your protagonist a clear desire, fear, or conflict. Show their personality through actions, not exposition. A character who "was nervous" is less compelling than one who "pressed her nails into her palm until the skin whitened."',
                  },
                  {
                    heading: 'Build tension through pacing',
                    detail:
                      'Alternate between fast, short sentences during action and slower, longer sentences during reflection. Use a single-sentence paragraph for your moment of highest tension.',
                  },
                  {
                    heading: 'End with resonance, not resolution',
                    detail:
                      'You do not need to tie everything up. An open or ambiguous ending that leaves the reader thinking is more sophisticated than a neat conclusion. Circle back to an image or phrase from your opening for a satisfying circular structure.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {item.heading}
                      </span>
                      <p className="mt-0.5 text-body-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="descriptive" className="mt-4 space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Crafting Powerful Description
              </h3>
              <div className="space-y-3">
                {[
                  {
                    heading: 'Engage all five senses',
                    detail:
                      'Most students default to sight. Push yourself to include sound, touch, smell, and even taste. "The air tasted of salt and rust" is instantly more immersive than "I could see the sea."',
                  },
                  {
                    heading: 'Use the zoom technique',
                    detail:
                      'Start with a wide establishing shot of the whole scene, then zoom in to a mid-range detail, then to an extreme close-up on a single, specific object. This mimics how a camera works in film and guides the reader\'s attention naturally.',
                  },
                  {
                    heading: 'Choose precise vocabulary',
                    detail:
                      'Replace generic words with specific ones. Not "walked" but "shuffled", "strode", or "drifted." Not "nice" but "serene", "gleaming", or "inviting." Every word should earn its place.',
                  },
                  {
                    heading: 'Use figurative language purposefully',
                    detail:
                      'One well-crafted extended metaphor is worth more than five random similes scattered through your piece. Develop your imagery -- let it thread through your writing as a motif.',
                  },
                  {
                    heading: 'Show, do not tell',
                    detail:
                      'Instead of telling the reader an emotion, show it through physical details and actions. Not "she was scared" but "her breath came in shallow, ragged gasps and her fingers trembled against the cold metal of the handle."',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {item.heading}
                      </span>
                      <p className="mt-0.5 text-body-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <TipBox>
            <strong>The &ldquo;one page, one scene&rdquo; rule:</strong> If your creative
            writing piece covers more than one scene or setting, you are probably trying to
            do too much. The highest-scoring responses are almost always tightly focused on a
            single moment explored in rich detail.
          </TipBox>
        </div>
      </Section>

      {/* ── 2. Transactional Writing ──────────────────────────────── */}
      <Section title="Transactional Writing" icon={FileText} colour="text-blue-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Paper 2 Section B asks you to write for a specific audience and purpose. You may
            be asked to write an article, a letter, a speech, or a leaflet. The format matters
            -- but the quality of your argument and language matters more.
          </p>

          <Tabs defaultValue="article">
            <TabsList className="w-full sm:w-auto flex-wrap">
              <TabsTrigger value="article">Articles</TabsTrigger>
              <TabsTrigger value="letter">Letters</TabsTrigger>
              <TabsTrigger value="speech">Speeches</TabsTrigger>
            </TabsList>

            <TabsContent value="article" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Article Format</h3>
              <div className="rounded-xl border border-border/60 p-4 space-y-2">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Headline:</strong> A punchy, attention-grabbing title. Consider alliteration, a pun, or a provocative question.</p>
                  <p><strong className="text-foreground">Strapline (optional):</strong> A one-line subtitle that expands on the headline.</p>
                  <p><strong className="text-foreground">Opening paragraph:</strong> Hook the reader immediately with a bold statement, a shocking statistic, a question, or an anecdote.</p>
                  <p><strong className="text-foreground">Body paragraphs:</strong> Each paragraph should make one clear point, supported by evidence or examples. Use subheadings if appropriate.</p>
                  <p><strong className="text-foreground">Closing paragraph:</strong> End with a call to action, a thought-provoking question, or a return to your opening image.</p>
                </div>
              </div>
              <TipBox>
                Articles should feel opinionated and engaging. Write as though your reader
                might stop reading at any moment -- every paragraph needs to earn their
                attention.
              </TipBox>
            </TabsContent>

            <TabsContent value="letter" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Letter Format</h3>
              <div className="rounded-xl border border-border/60 p-4 space-y-2">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Address and date:</strong> Your address top-right, date below, recipient&apos;s address left (formal only). Keep this brief in an exam -- one line is enough.</p>
                  <p><strong className="text-foreground">Salutation:</strong> &ldquo;Dear Sir/Madam&rdquo; (formal) or &ldquo;Dear Mr/Mrs [Name]&rdquo; (semi-formal). Never &ldquo;Hey&rdquo; or &ldquo;Hi&rdquo; unless writing to a friend.</p>
                  <p><strong className="text-foreground">Opening:</strong> State your purpose clearly in the first sentence: &ldquo;I am writing to express my concern about...&rdquo;</p>
                  <p><strong className="text-foreground">Body:</strong> One point per paragraph. Use formal connectives: Furthermore, Additionally, Moreover, Nevertheless.</p>
                  <p><strong className="text-foreground">Sign-off:</strong> &ldquo;Yours faithfully&rdquo; (if you used Sir/Madam) or &ldquo;Yours sincerely&rdquo; (if you used their name). This matters -- examiners notice.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="speech" className="mt-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Speech Format</h3>
              <div className="rounded-xl border border-border/60 p-4 space-y-2">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Address the audience:</strong> Open with a direct address: &ldquo;Ladies and gentlemen...&rdquo;, &ldquo;Fellow students...&rdquo;, or &ldquo;Members of the council...&rdquo;</p>
                  <p><strong className="text-foreground">Rhetorical devices:</strong> Speeches thrive on rhetoric. Use tricolon (lists of three), rhetorical questions, anaphora (repeating a phrase at the start of consecutive sentences), and direct address (&ldquo;you&rdquo;).</p>
                  <p><strong className="text-foreground">Vary your tone:</strong> A good speech moves between passion, humour, gravity, and urgency. Do not write in a single monotone register.</p>
                  <p><strong className="text-foreground">Call to action:</strong> End by telling the audience exactly what you want them to do, think, or feel. The final sentence should be memorable.</p>
                </div>
              </div>
              <TipBox>
                Read your speech aloud in your head as you write. If a sentence sounds
                awkward when spoken, rewrite it. Speeches are meant to be heard, not read
                silently.
              </TipBox>
            </TabsContent>
          </Tabs>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Persuasive Techniques for All Formats
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { name: 'Rhetorical questions', desc: 'Engage the reader by making them think: "How can we call ourselves civilised when...?"' },
                { name: 'Statistics and facts', desc: 'Ground your argument in evidence, even if you invent plausible-sounding figures in an exam.' },
                { name: 'Emotive language', desc: 'Choose words that trigger feelings: "devastating," "heartbreaking," "scandalous."' },
                { name: 'Anecdote', desc: 'A brief personal story makes your argument relatable: "Last Tuesday, my younger sister came home from school in tears..."' },
                { name: 'Counter-argument', desc: 'Acknowledge the opposing view then demolish it: "Some may argue... however, this ignores the fact that..."' },
                { name: 'Direct address', desc: 'Use "you" and "we" to create a sense of shared responsibility and connection.' },
              ].map((item) => (
                <div key={item.name} className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">{item.name}</span>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. Planning Methods ───────────────────────────────────── */}
      <Section title="Planning Methods" icon={PenTool} colour="text-violet-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Five minutes of planning saves fifteen minutes of confused writing. A clear plan
            prevents rambling, ensures a logical structure, and lets you write with confidence.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Three Planning Approaches</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  name: 'The Box Plan',
                  colour: 'border-blue-500/20 bg-blue-500/5',
                  steps: [
                    'Draw 5 boxes across the page (one per paragraph)',
                    'Write 3-4 key words in each box',
                    'Number the boxes for order',
                    'Add one technique you will use in each',
                  ],
                  best: 'Best for transactional writing and essays',
                },
                {
                  name: 'The Mind Map',
                  colour: 'border-emerald-500/20 bg-emerald-500/5',
                  steps: [
                    'Write your topic in the centre',
                    'Branch out with ideas, images, and senses',
                    'Circle the 4-5 strongest branches',
                    'Number them in the order you will write',
                  ],
                  best: 'Best for descriptive writing',
                },
                {
                  name: 'The Timeline',
                  colour: 'border-violet-500/20 bg-violet-500/5',
                  steps: [
                    'Draw a horizontal line',
                    'Mark the beginning, middle, and end',
                    'Add the key event or turning point',
                    'Note the emotion at each stage',
                  ],
                  best: 'Best for narrative writing',
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border p-4 ${plan.colour}`}
                >
                  <span className="text-xs font-bold text-foreground">{plan.name}</span>
                  <ul className="mt-2 space-y-1">
                    {plan.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <span className="mt-0.5 text-primary">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs italic text-muted-foreground/80">{plan.best}</p>
                </div>
              ))}
            </div>
          </div>

          <TipBox>
            <strong>Do not skip planning.</strong> Examiners can tell when a student did not
            plan because the writing meanders, repeats itself, or loses focus halfway
            through. A visible plan on your paper is never penalised.
          </TipBox>
        </div>
      </Section>

      {/* ── 4. Vocabulary Enhancement ─────────────────────────────── */}
      <Section title="Vocabulary Enhancement" icon={BookOpen} colour="text-rose-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            You do not need rare or obscure words to score highly. What matters is choosing
            the right word for the right moment and showing you understand its effect.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Word Upgrade Table</h3>
            <div className="rounded-xl border border-border/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 bg-muted/30">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Basic</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Upgraded</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-foreground hidden sm:table-cell">Why it works</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted-foreground">
                  {[
                    ['walked', 'trudged / strode / ambled', 'Conveys mood and pace through the verb itself'],
                    ['said', 'murmured / snapped / insisted', 'Reveals character and emotion without adverbs'],
                    ['big', 'vast / imposing / sprawling', 'Creates a specific visual impression'],
                    ['nice', 'serene / charming / idyllic', 'Precision replaces vagueness'],
                    ['scary', 'menacing / unsettling / chilling', 'Adds specific emotional register'],
                    ['looked at', 'scrutinised / gazed upon / glanced', 'Implies intention and duration'],
                  ].map(([basic, upgraded, why], i) => (
                    <tr key={i} className="border-b border-border/20 last:border-0">
                      <td className="px-4 py-2 line-through text-muted-foreground/60">{basic}</td>
                      <td className="px-4 py-2 font-medium text-foreground">{upgraded}</td>
                      <td className="px-4 py-2 hidden sm:table-cell">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <TipBox>
            <strong>Warning:</strong> Do not overdo it. Writing that is stuffed with
            elaborate vocabulary sounds unnatural and can actually lose marks for
            &ldquo;over-writing.&rdquo; Use upgraded vocabulary at key moments -- your
            opening, your climax, and your ending.
          </TipBox>
        </div>
      </Section>

      {/* ── 5. Sentence Variety ───────────────────────────────────── */}
      <Section title="Sentence Variety" icon={Type} colour="text-cyan-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Varying your sentence structures is one of the simplest ways to improve your
            writing. Examiners specifically look for this -- it is mentioned in the mark
            scheme for every grade boundary.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Sentence Types to Master</h3>
            <div className="space-y-2">
              {[
                {
                  type: 'Simple sentence',
                  example: 'The door slammed shut.',
                  effect: 'Creates impact, emphasis, or finality. Best used sparingly for dramatic moments.',
                },
                {
                  type: 'Compound sentence',
                  example: 'The rain hammered against the window, and the candle flickered in the draught.',
                  effect: 'Links two related ideas. Creates a steady, flowing rhythm.',
                },
                {
                  type: 'Complex sentence',
                  example: 'Although the sun still burned overhead, the air carried a bitter chill that crept beneath his collar.',
                  effect: 'Shows sophistication by subordinating one idea to another. Ideal for building atmosphere.',
                },
                {
                  type: 'Minor sentence (fragment)',
                  example: 'Silence. Nothing but silence.',
                  effect: 'Breaks normal grammar rules for deliberate impact. Use for tension, shock, or emphasis.',
                },
                {
                  type: 'The list sentence',
                  example: 'She saw the cracked walls, the peeling paint, the forgotten photographs, the dust that covered everything like a second skin.',
                  effect: 'Builds accumulation and overwhelm. The final item often delivers the emotional punch.',
                },
                {
                  type: 'Inverted/fronted sentence',
                  example: 'Beneath the floorboards, something stirred.',
                  effect: 'Delays the subject to create suspense. The reader waits to discover what the sentence is really about.',
                },
              ].map((item) => (
                <div key={item.type} className="rounded-lg border border-border/40 p-3">
                  <span className="text-xs font-semibold text-foreground">{item.type}</span>
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    &ldquo;{item.example}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.effect}</p>
                </div>
              ))}
            </div>
          </div>

          <TipBox>
            <strong>The rhythm rule:</strong> Read your writing aloud (or in your head). If
            every sentence sounds the same length and structure, vary them. Alternate long
            and short. Follow a flowing complex sentence with a blunt simple one. The
            contrast is what creates impact.
          </TipBox>
        </div>
      </Section>

      {/* ── 6. Paragraphing and Cohesion ──────────────────────────── */}
      <Section title="Paragraphing and Cohesion" icon={AlignLeft} colour="text-amber-400">
        <div className="space-y-4">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Paragraphing is not just about making your work look neat -- it is a structural
            tool that controls pace, emphasis, and meaning. Well-paragraphed writing reads
            like it has been thought through.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">When to Start a New Paragraph</h3>
            <p className="text-body-sm text-muted-foreground">
              Remember <strong>TiPToP</strong> -- start a new paragraph for a change in:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { letter: 'Ti', word: 'Time', example: '"Later that evening...", "Three years had passed..."' },
                { letter: 'P', word: 'Place', example: '"Beyond the treeline...", "Back in the kitchen..."' },
                { letter: 'To', word: 'Topic', example: 'Each new argument or point in transactional writing' },
                { letter: 'P', word: 'Person', example: 'When a new character speaks or is introduced' },
              ].map((item) => (
                <div key={item.word} className="rounded-lg border border-border/40 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">{item.letter}</Badge>
                    <span className="text-xs font-semibold text-foreground">{item.word}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.example}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Cohesive Devices (Linking Your Ideas)
            </h3>
            <p className="text-body-sm text-muted-foreground">
              Cohesion means your writing flows logically from one idea to the next. Use
              these techniques to link paragraphs smoothly:
            </p>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Discourse markers:</strong> However, Furthermore, Consequently,
                Meanwhile, In addition, Despite this. Use these to signal the relationship
                between ideas.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Pronoun referencing:</strong> Use &ldquo;this&rdquo;,
                &ldquo;these&rdquo;, &ldquo;such&rdquo; to refer back to the previous
                paragraph&apos;s idea without repeating it.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Echo words:</strong> Repeat a key word or phrase from the end of one
                paragraph at the start of the next to create a seamless link.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">--</span>
                <strong>Semantic fields:</strong> Maintain a consistent thread of related
                vocabulary (e.g. light/dark, war/peace) across paragraphs to unify your
                writing thematically.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              The One-Sentence Paragraph
            </h3>
            <p className="text-body-sm text-muted-foreground">
              Occasionally, use a single-sentence paragraph for dramatic emphasis. This works
              because it breaks the expected pattern and forces the reader to pause. Use it
              at a turning point, a revelation, or a moment of shock.
            </p>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <p className="text-body-sm text-foreground leading-relaxed italic">
                ...the house had been empty for as long as anyone could remember. The
                windows were dark. The garden was overgrown. Nobody had set foot inside
                for twenty years.
              </p>
              <p className="text-body-sm text-foreground leading-relaxed italic mt-3 font-medium">
                Until now.
              </p>
              <p className="text-body-sm text-foreground leading-relaxed italic mt-3">
                The front door stood ajar, and from somewhere deep inside, a light
                flickered...
              </p>
            </div>
          </div>

          <TipBox>
            <strong>Final check:</strong> Before you finish, scan your writing for any
            paragraph longer than half a page. If you find one, it almost certainly needs
            splitting. Similarly, if all your paragraphs are the same length, vary them --
            variety in paragraph length controls pace just like sentence variety.
          </TipBox>
        </div>
      </Section>
    </div>
  )
}
