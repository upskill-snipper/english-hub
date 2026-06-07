import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
  ShieldAlert,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { t } from '@/lib/i18n/t'

/* ── Data ───────────────────────────────────────────────────────── */

const MISTAKES: {
  number: number
  title: string
  category: string
  description: string
  wrong: string
  right: string
}[] = [
  {
    number: 1,
    title: 'Retelling the story instead of analysing',
    category: 'Analysis',
    description:
      'The most common mistake at GCSE. Students describe what happens in the text instead of explaining how and why the writer creates meaning. Examiners call this "narrative" or "descriptive" responses -- and they cap out at Grade 5.',
    wrong:
      'In this part of the novel, Scrooge is visited by the Ghost of Christmas Past. The ghost takes him back to his childhood and he sees himself as a lonely boy at school. This makes Scrooge feel sad because he remembers being alone.',
    right:
      'Dickens deploys the Ghost of Christmas Past as a narrative device to fracture Scrooge\'s emotional armour, forcing him -- and the reader -- to confront the origins of his misanthropy. The image of the "solitary child" functions as a visual metonym for Scrooge\'s self-imposed isolation in adulthood, suggesting that his avarice is not innate cruelty but a defence mechanism against childhood abandonment.',
  },
  {
    number: 2,
    title: 'Quoting too much',
    category: 'Quotation',
    description:
      'Long quotations waste time and signal to the examiner that you do not know which part to analyse. The best quotations are 1-5 words long, embedded inside your own sentence.',
    wrong:
      'Shelley writes, "I beheld the wretch -- the miserable monster whom I had created. He held up the curtain of the bed; and his eyes, if eyes they may be called, were fixed on me." This shows Frankenstein is scared of the monster.',
    right:
      'Shelley\'s use of "wretch" -- a term connoting both pity and revulsion -- captures the duality of Frankenstein\'s response to his creation. The parenthetical "if eyes they may be called" further destabilises the Creature\'s humanity, as Frankenstein denies him even the most basic marker of personhood.',
  },
  {
    number: 3,
    title: 'Not using subject terminology',
    category: 'Terminology',
    description:
      'AO2 explicitly rewards the use of relevant subject terminology. Writing "the writer uses good words" instead of naming the specific technique leaves marks on the table.',
    wrong:
      'The writer uses good descriptive language to create a scary atmosphere. The words chosen make the reader feel uncomfortable.',
    right:
      'Stevenson employs a semantic field of disease -- "pale," "dwarfish," "deformity" -- to construct Hyde as a pathological presence. The accumulation of monosyllabic adjectives creates a staccato rhythm that mirrors the reader\'s instinctive recoil.',
  },
  {
    number: 4,
    title: 'Ignoring structure completely',
    category: 'Structure',
    description:
      'Many students only discuss language (word choices, metaphors) and never mention how the text is structured. Structure analysis -- openings, endings, shifts, sentence length, paragraph length, pacing -- carries dedicated marks.',
    wrong:
      'The writer uses lots of metaphors and similes to describe the setting. For example, "the sea was a grey blanket" is a metaphor that shows it was dull.',
    right:
      'The extract opens with an expansive, multi-clause sentence that mirrors the vastness of the landscape, before truncating to the fragment "Nothing." This structural contraction dramatises the speaker\'s dawning sense of isolation -- the syntax itself enacts the emptiness it describes.',
  },
  {
    number: 5,
    title: 'Bolting on context',
    category: 'Context',
    description:
      'Adding a sentence of context at the end of a paragraph ("In Victorian times, people were poor") without connecting it to your analysis. Context must be the reason for the analysis, not an afterthought.',
    wrong:
      'Dickens shows that Scrooge does not care about poor people. He tells the charity collectors to go away. In Victorian times there was no welfare state and many people were very poor.',
    right:
      'Scrooge\'s rhetorical question -- "Are there no prisons?" -- ventriloquises the Malthusian indifference that Dickens sought to dismantle. Writing in 1843, amid public debate about the Poor Law Amendment Act, Dickens uses Scrooge\'s callousness as a satirical mirror, forcing his middle-class readership to hear their own political apathy spoken back to them.',
  },
  {
    number: 6,
    title: 'Feature-spotting without analysis',
    category: 'Analysis',
    description:
      'Identifying a technique ("this is a metaphor") without explaining its effect. Naming the technique is not analysis -- explaining what it does to the reader and why the writer chose it is analysis.',
    wrong:
      'Shakespeare uses a simile when he says Macbeth\'s hands are "in blood steeped." This is effective because it is a good use of imagery.',
    right:
      'The image of hands "in blood steeped" transforms guilt from an abstract emotion into a physical stain. The past participle "steeped" -- evoking the slow saturation of fabric in dye -- implies that Macbeth\'s culpability is not a momentary act but a permanent condition, one that has seeped into his very identity.',
  },
  {
    number: 7,
    title: 'Writing about characters as if they are real people',
    category: 'Writer focus',
    description:
      'Characters are constructs. Top-band responses discuss them as deliberate creations of the writer, not as people with independent feelings.',
    wrong:
      'I think Mr Hyde is a really evil person and he enjoys hurting people. He probably had a bad childhood which made him turn out this way.',
    right:
      'Stevenson constructs Hyde not as a fully realised character but as an allegorical embodiment of the id -- the unregulated desires that Victorian propriety demanded be suppressed. His lack of backstory is itself significant: Hyde has no origin because he represents an impulse, not a person.',
  },
  {
    number: 8,
    title: 'Using vague effect phrases',
    category: 'Analysis',
    description:
      'Phrases like "this makes the reader want to read on," "this is effective," or "this creates a dramatic effect" say nothing specific. Name the actual emotional or intellectual response.',
    wrong:
      'The short sentence "He stopped." is very effective and makes the reader want to read on to find out what happens next.',
    right:
      'The abrupt declarative "He stopped." arrests the narrative momentum, forcing the reader to share the character\'s sudden paralysis. The full stop after just two words creates a visual and rhythmic void on the page, enacting the silence the character experiences.',
  },
  {
    number: 9,
    title: 'Ignoring the question focus',
    category: 'Exam technique',
    description:
      'Writing everything you know about a text or character instead of answering the specific question asked. Every sentence should connect to the question focus. If the question asks about "how guilt is presented," do not write a paragraph about ambition unless you link it directly to guilt.',
    wrong:
      'Macbeth is a brave warrior at the start of the play. He fights in the battle and King Duncan rewards him. Lady Macbeth is ambitious and tells him to kill the king.',
    right:
      "Shakespeare initially presents Macbeth's guilt as a prophylactic force -- the dagger hallucination in Act 2 Scene 1 suggests his conscience attempts to prevent the crime before it occurs. This is significant because it positions guilt not as a consequence of murder but as a pre-existing moral awareness that Macbeth wilfully overrides, deepening his culpability.",
  },
  {
    number: 10,
    title: 'Only offering one interpretation',
    category: 'Critical thinking',
    description:
      'Grade 7 says "this means X." Grade 9 says "this could mean X; alternatively, it could suggest Y." Offering multiple readings shows the examiner you understand that literature is open to interpretation.',
    wrong:
      'The red room in Jane Eyre represents danger because red is the colour of blood and it is a scary place.',
    right:
      'The "red-room" operates on multiple symbolic registers: its chromatic association with blood and violence foreshadows the physical and emotional harm Jane will endure, while red\'s simultaneous connotations of passion suggest the room also houses the rebellious spirit that Bronte will later unleash. The room is simultaneously a prison and a crucible.',
  },
  {
    number: 11,
    title: 'Starting every paragraph the same way',
    category: 'Structure',
    description:
      'Beginning every paragraph with "The writer uses..." or "Another technique is..." makes your essay feel formulaic. Vary your openings to show range and sophistication.',
    wrong:
      'The writer uses a metaphor... The writer also uses alliteration... Another technique the writer uses is...',
    right:
      'Vary your openings: start with a conceptual claim ("Guilt, in Macbeth, is presented as a contagion that..."), a structural observation ("The extract pivots at its centre, shifting from..."), or a contextual frame ("Writing in the aftermath of the French Revolution, Shelley channels...").',
  },
  {
    number: 12,
    title: 'Listing techniques without connecting them',
    category: 'Analysis',
    description:
      'Identifying three or four techniques in a single paragraph without showing how they work together. The best analysis explains how techniques combine to create a cumulative effect.',
    wrong:
      'In this extract there is a metaphor, alliteration, and a rhetorical question. These techniques are all effective.',
    right:
      'The sibilance in "sinister, silent streets" works in concert with the Gothic imagery of fog and shadow to construct a soundscape of threat. The whispered quality of the repeated /s/ phoneme aurally enacts the secrecy that pervades Stevenson\'s London, where respectable surfaces conceal moral corruption.',
  },
  {
    number: 13,
    title: 'Writing "this makes the reader feel sorry for the character"',
    category: 'Reader response',
    description:
      'Sympathy is a valid reader response, but naming it without explaining how the writer engineers it is weak. Show the mechanism: what specific craft choice triggers the emotional response?',
    wrong:
      'This makes the reader feel sorry for the Creature because he is lonely and has no friends.',
    right:
      'Shelley engineers pathos through the Creature\'s acquisition of language: his increasingly eloquent appeals -- "I am malicious because I am miserable" -- force the reader to recognise an intelligence and emotional depth that Frankenstein refuses to acknowledge. The chiasmic structure of the sentence mirrors the Creature\'s argument that cause (misery) and effect (malice) are inseparable.',
  },
  {
    number: 14,
    title: 'Forgetting to analyse the effect of form',
    category: 'Terminology',
    description:
      'Form -- the type of text (novel, play, poem, novella, letter, soliloquy) -- shapes meaning. A soliloquy creates intimacy with the audience. An epistolary novel filters truth through a narrator. A sonnet compresses emotion. Ignoring form means ignoring a key analytical dimension.',
    wrong:
      'Macbeth says he is worried about killing the king. He talks about the reasons why he should not do it.',
    right:
      "Shakespeare's choice of soliloquy for \"If it were done when 'tis done\" grants the audience unmediated access to Macbeth's moral reasoning, creating dramatic irony: we witness the conscience he will publicly suppress. The theatrical form -- a man alone on stage, debating with himself -- physicalises the internal division that will ultimately destroy him.",
  },
  {
    number: 15,
    title: 'Using informal or colloquial language',
    category: 'Academic register',
    description:
      'Writing "Scrooge is a bit mean" or "this quote is really good" undermines your authority as a literary critic. Maintain a formal academic register throughout.',
    wrong:
      'Scrooge is a really horrible person at the start. He basically tells the poor people to get lost which is pretty shocking.',
    right:
      'Dickens establishes Scrooge as a figure of calculated indifference, his dismissal of the poor rendered all the more chilling by its rhetorical composure. The measured syntax of "decrease the surplus population" appropriates the language of political economy to justify moral negligence.',
  },
  {
    number: 16,
    title: 'Not planning before writing',
    category: 'Exam technique',
    description:
      'Diving straight in without a 3-5 minute plan leads to repetition, weak structure, and running out of things to say. A plan turns a ramble into an argument.',
    wrong: 'Starting to write immediately and hoping the essay will find its own shape.',
    right:
      'Spend 3-5 minutes jotting: (1) your thesis in one sentence, (2) three key points that support it, (3) one quotation per point, (4) your alternative interpretation. This skeleton prevents repetition and ensures a developing argument.',
  },
  {
    number: 17,
    title: 'Spending too long on one question',
    category: 'Exam technique',
    description:
      'Perfecting one answer while leaving another incomplete is a net loss. A complete paper with solid answers always outscores a paper with one brilliant answer and one missing.',
    wrong:
      'Writing a four-page answer to a 30-mark question and then having only 10 minutes for a 24-mark question.',
    right:
      'Divide the total paper time by marks to calculate minutes per mark. Set a timer. When time is up, write a quick concluding sentence and move on. You can always return if there is spare time at the end.',
  },
  {
    number: 18,
    title: 'Confusing the writer with the narrator or speaker',
    category: 'Writer focus',
    description:
      'In prose fiction and poetry, the narrator or speaker is not necessarily the writer. Saying "Shelley feels lonely" when discussing the Creature\'s perspective conflates author and character.',
    wrong: 'Shelley is sad and alone in this chapter because nobody will talk to her.',
    right:
      "Shelley constructs the Creature's isolation through first-person narration, a choice that compels the reader to inhabit his perspective. The epistolary framing -- the Creature's story nested within Frankenstein's, nested within Walton's letters -- creates layers of mediation that destabilise any single claim to truth.",
  },
  {
    number: 19,
    title: 'Writing a conclusion that just repeats the introduction',
    category: 'Structure',
    description:
      'A conclusion should advance your argument to its final position, not summarise what you already said. The examiner has just read your essay -- they do not need a recap.',
    wrong:
      'In conclusion, Shakespeare uses many techniques such as metaphors, similes, and soliloquies to show that Macbeth feels guilty throughout the play.',
    right:
      "Ultimately, Shakespeare suggests that guilt in Macbeth is not a consequence of crime but its own form of retribution -- a psychological sentence that no earthly court could impose and no act of penance can commute. The play's enduring power lies in this insight: conscience is inescapable.",
  },
  {
    number: 20,
    title: 'Not proofreading for spelling, punctuation, and grammar',
    category: 'Technical accuracy',
    description:
      'AO6 rewards technical accuracy in writing questions, and careless errors throughout a Literature essay undermine the authority of your analysis. Saving 2-3 minutes at the end to proofread catches the mistakes tired eyes make.',
    wrong:
      "Writting without checking for their/there/they're, its/it's, affect/effect, and missing apostrophes.",
    right:
      'Reserve the last 2-3 minutes of each answer to read your response back silently. Focus on: (1) spelling of character and place names, (2) apostrophes, (3) sentence boundaries (comma splices), (4) tense consistency. These small corrections signal care and competence.',
  },
]

const CATEGORIES = [...new Set(MISTAKES.map((m) => m.category))]

function getCategoryColour(category: string) {
  const map: Record<string, { text: string; bg: string }> = {
    Analysis: { text: 'text-rose-400', bg: 'bg-rose-500/10' },
    Quotation: { text: 'text-blue-400', bg: 'bg-blue-500/10' },
    Terminology: { text: 'text-violet-400', bg: 'bg-violet-500/10' },
    Structure: { text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    Context: { text: 'text-clay-600', bg: 'bg-amber-500/10' },
    'Writer focus': { text: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    'Critical thinking': { text: 'text-clay-600', bg: 'bg-orange-500/10' },
    'Exam technique': { text: 'text-clay-600', bg: 'bg-yellow-500/10' },
    'Reader response': { text: 'text-pink-400', bg: 'bg-pink-500/10' },
    'Academic register': { text: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    'Technical accuracy': { text: 'text-teal-400', bg: 'bg-teal-500/10' },
  }
  return map[category] ?? { text: 'text-muted-foreground', bg: 'bg-muted/10' }
}

/* ── Page ────────────────────────────────────────────────────────── */

export default async function CommonMistakesPage() {
  // Constant labels reused inside the synchronous MISTAKES.map() below.
  const whatToAvoidLabel = await t('rev.misc2.cm.what_to_avoid')
  const whatToDoLabel = await t('rev.misc2.cm.what_to_do')

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: await t('rev.misc2.crumb.revision'), href: '/revision' },
          { label: await t('rev.misc2.crumb.exam_technique'), href: '/revision/exam-technique' },
          { label: await t('rev.misc2.cm.crumb') },
        ]}
      />

      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/exam-technique" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('rev.misc2.back.exam_technique')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <ShieldAlert className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {await t('rev.misc2.cm.title')}
            </h1>
            <p className="text-body-sm text-muted-foreground">{await t('rev.misc2.cm.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          {await t('rev.misc2.cm.badge.why')}
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          {await t('rev.misc2.cm.overview.heading')}
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          {await t('rev.misc2.cm.overview.body')}
        </p>
      </section>

      {/* ── Category overview ───────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc2.cm.bycategory.heading')}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const col = getCategoryColour(cat)
            const count = MISTAKES.filter((m) => m.category === cat).length
            return (
              <span
                key={cat}
                className={`rounded-full ${col.bg} px-3 py-1 text-xs font-medium ${col.text}`}
              >
                {cat} ({count})
              </span>
            )
          })}
        </div>
      </section>

      {/* ── Mistakes list ───────────────────────────────────────── */}
      <section className="space-y-4">
        {MISTAKES.map((m) => {
          const col = getCategoryColour(m.category)
          return (
            <div
              key={m.number}
              className="rounded-2xl border border-border/60 bg-card overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start gap-3 p-5 sm:p-6">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm font-bold text-rose-400">
                  {m.number}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-heading-md font-heading text-foreground">{m.title}</h3>
                    <Badge
                      variant="secondary"
                      className={`text-[0.6rem] uppercase tracking-wider ${col.text} ${col.bg} border-0`}
                    >
                      {m.category}
                    </Badge>
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>

              {/* Wrong vs Right */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40 border-t border-border/40">
                {/* Wrong */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="size-4 text-rose-400" />
                    <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      {whatToAvoidLabel}
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{m.wrong}</p>
                </div>
                {/* Right */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {whatToDoLabel}
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{m.right}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ── Summary checklist ───────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-rose-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="size-5 text-clay-600" />
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc2.cm.selfcheck.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Run through these questions in the last 5 minutes of each paper.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            'Am I analysing, or just retelling the story?',
            'Are my quotations short (1-5 words) and embedded?',
            'Have I named techniques AND explained their effects?',
            'Have I discussed at least one structural feature?',
            'Is my context woven in, not bolted on?',
            'Am I writing about the writer, not the character as a real person?',
            'Have I offered at least one alternative interpretation?',
            'Does every paragraph connect back to the question?',
            'Is my language formal and academic, not chatty?',
            'Have I proofread for spelling and punctuation?',
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start rounded-xl border border-border/40 bg-background/50 p-3"
            >
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-600" />
              <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique/grade-9-secrets" />}
        >
          <ArrowLeft className="size-4" />
          {await t('rev.misc2.cm.nav.grade_9_secrets')}
        </Button>
        <Button
          variant="default"
          className="flex-1"
          disabled
          aria-disabled="true"
          title={await t('rev.misc2.cta.practice_extracts_title')}
        >
          {await t('rev.misc2.cta.practice_extracts')}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
