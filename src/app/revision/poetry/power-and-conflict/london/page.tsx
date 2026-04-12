'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ─────────────────────────────────────────────────────── */

const londonPoem: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    // Stanza 1
    {
      text: 'I wander thro\u2019 each charter\u2019d street,',
      annotations: [
        { type: 'Vocabulary', note: '"Charter\'d" means mapped, controlled, or owned. Blake uses it to suggest that even the streets of London have been bought and sold \u2014 freedom is an illusion.', color: '#3b82f6' },
        { type: 'Context', note: 'The speaker walks through London as a detached observer, cataloguing the suffering he sees around him.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Near where the charter\u2019d Thames does flow.',
      annotations: [
        { type: 'Imagery', note: 'Even the river Thames \u2014 a natural, free-flowing force \u2014 has been "charter\'d" (controlled). Nature itself has been commodified.', color: '#10b981' },
        { type: 'Repetition', note: 'The repetition of "charter\'d" emphasises the all-consuming nature of commercial and political control over London.', color: '#f59e0b' },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        { type: 'Verb choice', note: '"Mark" has a double meaning: to notice/observe, and to scar or brand. Blake both sees and records the damage.', color: '#3b82f6' },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        { type: 'Repetition', note: 'Triple repetition of "marks" hammers home the universality of suffering. No one escapes.', color: '#f59e0b' },
        { type: 'Tone', note: 'The tone is sombre and despairing. "Weakness" and "woe" are powerful emotive words conveying physical and emotional suffering.', color: '#ec4899' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'In every cry of every Man,',
      annotations: [
        { type: 'Anaphora', note: '"In every" is repeated four times across stanza 2, creating a relentless, list-like rhythm that overwhelms the reader with the scale of suffering.', color: '#f59e0b' },
      ],
    },
    {
      text: 'In every Infant\u2019s cry of fear,',
      annotations: [
        { type: 'Imagery', note: 'Even newborn infants are born into fear and suffering \u2014 innocence is corrupted from birth. This connects to Blake\'s broader theme in Songs of Experience.', color: '#10b981' },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        { type: 'Vocabulary', note: '"Ban" suggests both legal prohibitions imposed by those in power and the banns of marriage \u2014 even love is institutionalised and controlled.', color: '#3b82f6' },
      ],
    },
    {
      text: 'The mind-forg\u2019d manacles I hear.',
      annotations: [
        { type: 'Metaphor', note: '"Mind-forg\'d manacles" is Blake\'s most famous phrase from this poem. The chains are not physical but psychological \u2014 people are imprisoned by their own acceptance of oppression.', color: '#ef4444' },
        { type: 'Aural imagery', note: 'Blake can "hear" the manacles, using synesthesia to blend sight and sound, suggesting oppression pervades every sense.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'How the Chimney-sweeper\u2019s cry',
      annotations: [
        { type: 'Context', note: 'Child chimney sweeps were a notorious example of child exploitation. Blake wrote several poems about them. Boys as young as four were forced up chimneys, often dying from suffocation or cancer.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Every black\u2019ning Church appalls;',
      annotations: [
        { type: 'Symbolism', note: '"Black\'ning" works on multiple levels: literal soot from industry, moral corruption, and the Church\'s complicity in child labour by failing to act.', color: '#ef4444' },
        { type: 'Vocabulary', note: '"Appalls" means to horrify, but also carries the sense of a funeral pall (a cloth draped over a coffin) \u2014 the Church is associated with death.', color: '#3b82f6' },
      ],
    },
    {
      text: 'And the hapless Soldier\u2019s sigh',
      annotations: [
        { type: 'Emotive language', note: '"Hapless" means unlucky or unfortunate. The soldier is powerless, sent to die by those in authority. His "sigh" is quiet, suppressed protest.', color: '#ec4899' },
      ],
    },
    {
      text: 'Runs in blood down Palace walls.',
      annotations: [
        { type: 'Imagery', note: 'A shocking, visceral image: the soldier\'s suffering literally stains the walls of royal power. The monarchy is directly blamed for his death.', color: '#10b981' },
        { type: 'Symbolism', note: 'Blood on "Palace walls" could foreshadow revolution (Blake supported the French Revolution). The powerful are not shielded from the consequences of their oppression.', color: '#ef4444' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'But most thro\u2019 midnight streets I hear',
      annotations: [
        { type: 'Structure', note: '"But most" signals a shift \u2014 the worst is saved for last. "Midnight" creates a dark, secretive, morally corrupt atmosphere.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'How the youthful Harlot\u2019s curse',
      annotations: [
        { type: 'Context', note: 'Prostitution was rife in 18th-century London. "Youthful" emphasises how young these women were \u2014 victims of poverty, not moral failings.', color: '#8b5cf6' },
        { type: 'Vocabulary', note: '"Curse" has a triple meaning: swearing in anger, a sexually transmitted disease passed to clients, and a divine curse upon society.', color: '#3b82f6' },
      ],
    },
    {
      text: 'Blasts the new-born Infant\u2019s tear',
      annotations: [
        { type: 'Imagery', note: '"Blasts" is violent and destructive. The baby is born into disease and suffering. The cycle of misery is inescapable \u2014 it passes from generation to generation.', color: '#10b981' },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        { type: 'Oxymoron', note: '"Marriage hearse" is a powerful oxymoron \u2014 marriage (life, love, new beginnings) is fused with a hearse (death, endings). Love and death become inseparable in Blake\'s London.', color: '#ef4444' },
        { type: 'Vocabulary', note: '"Blights" and "plagues" are words of disease and destruction, suggesting that corruption infects all of society, even its most sacred institutions.', color: '#3b82f6' },
      ],
    },
  ],

  context:
    '<p><strong>William Blake (1757\u20131827)</strong> was a Romantic poet, painter, and printmaker who lived in London his entire life. He was a radical thinker who championed individual freedom and opposed all forms of institutional authority.</p>' +
    '<p><strong>"London"</strong> was published in <em>Songs of Experience</em> (1794), a companion volume to <em>Songs of Innocence</em> (1789). Together they explore how innocence is corrupted by the adult world. "London" is one of the most powerful poems of Experience.</p>' +
    '<p><strong>Historical context:</strong> Blake wrote during the <strong>Industrial Revolution</strong>, which transformed London into a centre of factories, poverty, and child labour. He was also deeply influenced by the <strong>French Revolution</strong> (1789), which he initially supported as a liberation from tyranny.</p>' +
    '<p>Blake was critical of the <strong>Church</strong>, the <strong>monarchy</strong>, and <strong>Parliament</strong> for their complicity in the suffering of the poor. He saw London not as a city of progress but as a prison of the mind and spirit.</p>' +
    '<p>The poem is a <strong>social protest</strong>, attacking every level of power \u2014 from commercial charters to religious hypocrisy to royal indifference \u2014 and showing how these forces destroy innocence, freedom, and human connection.</p>',

  summary:
    'Stanza 1: The speaker walks through London\'s streets, observing that everything \u2014 even the river Thames \u2014 is "charter\'d" (controlled and owned). Every face he sees is marked with suffering and despair.\n\n' +
    'Stanza 2: He hears the cries of men, infants, and the voice of every social restriction. Most importantly, he recognises that the chains binding people are "mind-forg\'d" \u2014 psychological, not physical. People have internalised their oppression.\n\n' +
    'Stanza 3: Blake attacks specific institutions. The Church ignores the suffering of child chimney sweeps (its walls "black\'ning" with soot and guilt). The soldier\'s blood runs down the Palace walls \u2014 the monarchy sends men to die.\n\n' +
    'Stanza 4: The poem reaches its darkest point. A young prostitute\'s curse infects a newborn baby with disease, and the final oxymoron \u2014 "Marriage hearse" \u2014 fuses love with death. The cycle of suffering is inescapable; corruption poisons even the next generation.',

  formAndStructure:
    'Form: Four quatrains (four-line stanzas) with a regular ABAB rhyme scheme throughout. This rigid, controlled structure mirrors the "charter\'d" restrictions Blake describes \u2014 even the poem\'s form feels constrained.\n\n' +
    'Metre: Predominantly iambic tetrameter (four stressed beats per line), creating a steady, marching rhythm like footsteps through the city. This regularity reinforces the relentless, inescapable nature of suffering.\n\n' +
    'Anaphora: "In every" is repeated four times in stanza 2, creating a cumulative, overwhelming effect. The repetition makes suffering feel universal and inescapable.\n\n' +
    'Repetition: "Charter\'d" (lines 1\u20132), "marks" (lines 3\u20134), and "every" (throughout stanza 2) are repeated to hammer home key ideas. Blake uses simple, powerful language with deliberate repetition rather than elaborate vocabulary.\n\n' +
    'Cyclical structure: The poem begins with a baby\'s "cry of fear" in stanza 2 and ends with a "new-born Infant\'s tear" in stanza 4, suggesting the cycle of suffering repeats endlessly from generation to generation.\n\n' +
    'Volta: "But most" at the start of the final stanza signals a shift to the poem\'s most shocking imagery, building to the devastating climax of the "Marriage hearse".\n\n' +
    'First-person narrator: The use of "I" makes the poem feel like a personal testimony \u2014 Blake positions himself as an eyewitness to London\'s horrors, giving the poem moral authority.',

  keyQuotes: [
    {
      quote: 'charter\u2019d street',
      analysis:
        '"Charter\'d" means legally mapped or commercially controlled. Blake subverts the positive connotation of "charter" (a document granting rights) to show how rights have become restrictions \u2014 everything in London is owned and commodified.',
      themes: ['Power', 'Oppression', 'Corruption'],
    },
    {
      quote: 'charter\u2019d Thames',
      analysis:
        'Extending "charter\'d" to the river Thames \u2014 a force of nature \u2014 suggests that even the natural world has been controlled and exploited by those in power. Nothing is free.',
      themes: ['Power', 'Nature vs Industry'],
    },
    {
      quote: 'mind-forg\u2019d manacles',
      analysis:
        'The most important metaphor in the poem. "Manacles" are handcuffs, but these are "mind-forg\'d" \u2014 created in the mind. People are imprisoned not by physical chains but by their own acceptance of oppression, fear, and social conditioning.',
      themes: ['Oppression', 'Power', 'Individual Freedom'],
    },
    {
      quote: 'every black\u2019ning Church appalls',
      analysis:
        '"Black\'ning" works literally (soot from industry) and metaphorically (moral corruption). "Appalls" puns on a funeral pall. The Church, which should protect the vulnerable, is complicit in their suffering.',
      themes: ['Corruption', 'Religion', 'Hypocrisy'],
    },
    {
      quote: 'the hapless Soldier\u2019s sigh',
      analysis:
        '"Hapless" means unfortunate or powerless. The soldier cannot speak out \u2014 he can only "sigh". His quiet suffering contrasts with the violence of his blood running down Palace walls, showing the human cost of war.',
      themes: ['Power', 'Conflict', 'Individual Suffering'],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        'A shocking visual image that directly blames the monarchy for soldiers\' deaths. "Palace walls" represent royal power, and the blood imagery links to the French Revolution, suggesting violent consequences for oppressive rulers.',
      themes: ['Power', 'Conflict', 'Revolution'],
    },
    {
      quote: 'midnight streets',
      analysis:
        '"Midnight" creates a dark, concealed atmosphere. The worst horrors \u2014 prostitution, disease \u2014 happen in the darkness, hidden from respectable society but no less real.',
      themes: ['Corruption', 'Concealment'],
    },
    {
      quote: 'Marriage hearse',
      analysis:
        'A devastating oxymoron that ends the poem. Marriage (love, life, hope) is combined with a hearse (death, funerals). In Blake\'s London, love is poisoned by disease and social corruption. There is no escape, not even in the institution meant to celebrate human connection.',
      themes: ['Corruption', 'Death', 'Loss of Innocence'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'In every cry of every Man, / In every Infant\u2019s cry of fear, / In every voice: in every ban',
      effect:
        'The relentless repetition of "In every" creates a cumulative, overwhelming effect. The reader is bombarded with suffering just as Blake is bombarded by what he sees and hears. It makes the oppression feel total and universal.',
      lineRef: 5,
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        'Fusing two contradictory concepts \u2014 marriage (celebration of life) and hearse (vehicle of death) \u2014 creates a shocking final image. It encapsulates Blake\'s argument that corruption has poisoned every aspect of human life, even love itself.',
      lineRef: 19,
    },
    {
      device: 'Synesthesia',
      example: 'The mind-forg\u2019d manacles I hear',
      effect:
        'Manacles are seen, but Blake "hears" them. This blending of senses suggests that oppression is so pervasive it overwhelms every sense. The psychological chains are audible in every cry and sigh.',
      lineRef: 8,
    },
    {
      device: 'Visual imagery',
      example: 'Runs in blood down Palace walls',
      effect:
        'This vivid, violent image transforms an abstract concept (the cost of war) into something viscerally concrete. The reader can see the blood, making the monarch\'s responsibility undeniable.',
      lineRef: 15,
    },
    {
      device: 'Emotive language',
      example: 'hapless Soldier\u2019s sigh',
      effect:
        '"Hapless" evokes pity, while "sigh" suggests resignation and powerlessness. Together they portray the soldier as a victim, not a hero \u2014 challenging patriotic narratives of military glory.',
      lineRef: 14,
    },
    {
      device: 'Symbolism',
      example: 'every black\u2019ning Church',
      effect:
        'The Church symbolises institutional religion and its moral authority. "Black\'ning" symbolises both industrial pollution and moral decay. Blake attacks the Church as a hypocritical institution that ignores suffering.',
      lineRef: 13,
    },
    {
      device: 'Semantic field of suffering',
      example: 'weakness, woe, cry, fear, curse, plagues, blights',
      effect:
        'A sustained semantic field of pain, disease, and despair runs throughout the poem. There is no relief or positive language \u2014 Blake creates an unbroken atmosphere of hopelessness.',
      lineRef: 3,
    },
    {
      device: 'Plosive sounds',
      example: 'Blasts the new-born Infant\u2019s tear / And blights with plagues',
      effect:
        'The harsh plosive "b" sounds in "Blasts", "blights", and "plagues" create an aggressive, violent aural quality. The sounds themselves feel destructive, mirroring the content.',
      lineRef: 18,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const comparePoems = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    link: '/revision/poetry/power-and-conflict/ozymandias',
    reason: 'Both critique powerful rulers. Shelley shows power as temporary; Blake shows it as actively destructive.',
    themes: ['Power', 'Corruption'],
  },
  {
    title: 'The Emigr\u00e9e',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    reason: 'Both present a city as a symbol \u2014 Blake\'s London is oppressive; Rumens\' city is idealised through memory despite political darkness.',
    themes: ['Place', 'Power'],
  },
  {
    title: 'Checking Out Me History',
    poet: 'John Agard',
    link: '/revision/poetry/power-and-conflict/checking-out-me-history',
    reason: 'Both attack institutional control over people. Blake targets the Church and monarchy; Agard targets the colonial education system.',
    themes: ['Power', 'Oppression', 'Identity'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function LondonPage() {
  return (
    <div className="space-y-8">
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power and Conflict
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">London</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          William Blake &middot; <em>Songs of Experience</em> (1794)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Power', 'Oppression', 'Corruption', 'Conflict', 'Loss of Innocence', 'Individual Suffering'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <InteractivePoemViewer poem={londonPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {cp.reason}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from London by William Blake reproduced freely.
      </p>
    </div>
  )
}
