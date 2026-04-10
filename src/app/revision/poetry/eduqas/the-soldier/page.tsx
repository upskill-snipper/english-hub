'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

const soldier: PoemData = {
  title: 'The Soldier',
  poet: 'Rupert Brooke',
  lines: [
    {
      text: 'If I should die, think only this of me:',
      annotations: [
        {
          type: 'Conditional',
          note: '"If I should die" - the speaker contemplates his own possible death calmly. There is no fear, only quiet acceptance. He directs the reader\'s response.',
          color: '#3b82f6',
        },
        {
          type: 'Direct address',
          note: 'The poem is a personal message - "think only this of me". The speaker controls the narrative of his death, leaving instructions for those who survive him.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   That there\'s some corner of a foreign field',
      annotations: [
        {
          type: 'Key quote',
          note: 'The famous opening of the central conceit. The "corner of a foreign field" will become English forever through the soldier\'s death. England expands through his sacrifice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'That is for ever England. There shall be',
      annotations: [
        {
          type: 'Hyperbole',
          note: '"For ever" - the speaker imagines his death creating eternal English territory. The grandiose claim shows his romantic, idealistic view of patriotic sacrifice.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '   In that rich earth a richer dust concealed;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Richer dust" - the speaker\'s body, made of English soil, will enrich the foreign earth. He literally identifies himself with England. "Concealed" suggests the body is buried.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'A dust whom England bore, shaped, made aware,',
      annotations: [
        {
          type: 'Personification',
          note: 'England is personified as a mother figure - "bore, shaped, made aware". The country gave him life, formed his character, and gave him consciousness. Total identification of self with nation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '   Gave, once, her flowers to love, her ways to roam,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Her flowers to love, her ways to roam" - England is a generous mother who provided beauty and freedom. The speaker remembers idyllic English landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'A body of England\'s, breathing English air,',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of "England" and "English" hammers home the central idea: the speaker is utterly English. There is no other identity.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   Washed by the rivers, blest by suns of home.',
      annotations: [
        {
          type: 'Religious diction',
          note: '"Blest by suns" - the language is religious, sanctifying English nature. The sunlight is a blessing, not just illumination.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The octave\'s closing line completes the picture: the soldier\'s body is England\'s in every way, blessed by English nature. This is the foundation for his sacrifice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And think, this heart, all evil shed away,',
      annotations: [
        {
          type: 'Volta',
          note: '"And think" - the sestet begins with a turn from physical body to spiritual heart. The speaker imagines death as purification - "all evil shed away".',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   A pulse in the eternal mind, no less',
      annotations: [
        {
          type: 'Diction',
          note: '"Eternal mind" - the speaker imagines becoming part of an eternal consciousness. The metaphor is mystical, almost religious.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Gives somewhere back the thoughts by England given;',
      annotations: [
        {
          type: 'Reciprocity',
          note: 'The speaker returns to England what England gave him - his thoughts, his identity. Death is not loss but a giving back.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   Her sights and sounds; dreams happy as her day;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Sights and sounds; dreams happy as her day" - the speaker celebrates English experience. Even after death, he gives back this English joy to "the eternal mind".',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And laughter, learnt of friends; and gentleness,',
      annotations: [
        {
          type: 'Catalogue',
          note: '"Laughter, learnt of friends" - English friendship and joy. The catalogue of English virtues (laughter, gentleness) creates an idealised vision.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '   In hearts at peace, under an English heaven.',
      annotations: [
        {
          type: 'Closing image',
          note: '"Hearts at peace, under an English heaven" - even heaven is English. Total patriotic vision. The poem ends not with death\'s horror but with idyllic peace.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The famous closing line. Brooke imagines paradise itself as English. The line shows total identification of nation with afterlife.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Rupert Brooke (1887-1915)</h3>
    <p>Brooke was an English poet famous for his idealistic war sonnets. Handsome, charismatic, and a Cambridge graduate, he became a national symbol of patriotic youth. He was friends with Virginia Woolf and other Bloomsbury writers.</p>

    <h3>Composition (1914)</h3>
    <p>"The Soldier" was written at the start of WW1, before Brooke had experienced any combat. He saw the war as a noble, cleansing crusade. The poem reflects the optimistic, romantic view of war that was common in 1914.</p>

    <h3>Brooke\'s Death</h3>
    <p>Brooke died in April 1915, aged 27, on his way to the Gallipoli campaign. He died not in battle but from sepsis caused by an infected mosquito bite. He was buried on the Greek island of Skyros - "a corner of a foreign field" indeed.</p>

    <h3>National Symbol</h3>
    <p>After his death, Brooke became a martyr-figure for patriotic Britain. The Dean of St Paul\'s Cathedral read "The Soldier" in a sermon on Easter Sunday 1915. Winston Churchill wrote his obituary. Brooke\'s romantic image of English sacrifice was used in propaganda throughout the war.</p>

    <h3>Pre-Trench Warfare View</h3>
    <p>The poem belongs to the early phase of WW1, before the horrors of the Somme and Passchendaele changed public attitudes. Brooke never saw the trenches. His vision of noble death contrasts sharply with the later poems by Owen, Sassoon, and Rosenberg, who experienced the reality of industrialised warfare.</p>

    <h3>Edwardian Patriotism</h3>
    <p>The poem reflects <strong>Edwardian patriotism</strong> - a confident belief in England\'s moral and cultural superiority. England is presented as a mother who gives life and meaning. To die for England is therefore the highest possible honour.</p>
  `,

  summary: `Octave (lines 1-8): The speaker addresses the reader: if he should die in war, they should think of him as having made "some corner of a foreign field" forever English. His body, made of English soil, will enrich foreign earth. He emphasises that England has given him everything - it has shaped him, given him life, beauty, and freedom.

Sestet (lines 9-14): The speaker turns from his physical body to his spiritual heart. After death, his soul will become "a pulse in the eternal mind", returning to a kind of cosmic consciousness all the gifts England gave him: thoughts, sights, sounds, dreams, laughter, gentleness. The poem ends with the image of "hearts at peace, under an English heaven".

Overall meaning: "The Soldier" is a romantic, idealistic vision of patriotic sacrifice. Brooke imagines death in war as a noble act that unites the soldier with England forever. The poem makes no mention of pain, fear, or violence - death is presented as peaceful, beautiful, and sacred. It is the perfect example of the patriotic poetry that Owen would later attack as "the old Lie".`,

  formAndStructure: `Form: Petrarchan sonnet with a Shakespearean rhyme scheme. The traditional sonnet form gives the poem dignity and authority - it sounds noble, official, even religious.

Rhyme scheme: ABABCDCD in the octave, EFGEFG in the sestet. The rigid, traditional rhyme scheme reinforces the sense of established order and inherited values. It feels like a hymn or a prayer.

Metre: Iambic pentameter throughout. The regular, steady rhythm gives the poem a calm, controlled quality. There is no metrical disruption - everything is ordered and certain.

Octave/sestet division: The octave focuses on the body (physical sacrifice); the sestet focuses on the soul (spiritual transcendence). The traditional volta marks the move from earthly to heavenly.

Volta: At the start of the sestet ("And think, this heart..."), the poem turns from the physical body to the spiritual heart. The shift is from material death to spiritual immortality.

Repetition: "England" and "English" are repeated throughout (8 times in 14 lines). The repetition creates a near-religious incantation, fixing England as the central object of devotion.

Diction: The vocabulary is archaic and elevated - "blest", "evil shed away", "eternal mind". The language sounds biblical and ceremonial, lifting the poem above ordinary speech.

Tone: Calm, confident, devotional. There is no fear or doubt. The speaker has made peace with the idea of death. This calm tone is what makes the poem powerful - and, to later readers, troubling.`,

  keyQuotes: [
    {
      quote: 'If I should die, think only this of me',
      analysis:
        'The opening establishes the speaker\'s composed attitude to death. "If I should die" treats his own death as a calm possibility. "Think only this of me" - the speaker controls the narrative, instructing the reader how to remember him. There is no panic.',
      themes: ['Patriotic sacrifice', 'Death', 'Control of narrative'],
    },
    {
      quote: 'some corner of a foreign field / That is for ever England',
      analysis:
        'The famous central conceit. The soldier\'s death creates eternal English territory abroad. "For ever" makes the claim hyperbolic - his sacrifice is permanent, monumental. England expands through individual death.',
      themes: ['Patriotism', 'Empire', 'Sacrifice'],
    },
    {
      quote: 'A dust whom England bore, shaped, made aware',
      analysis:
        'England is personified as a mother who gave the speaker life, character, and consciousness. The triple verb "bore, shaped, made aware" captures the totality of England\'s gift. The speaker owes everything to his country.',
      themes: ['Patriotism', 'Identity', 'Personification'],
    },
    {
      quote: 'A body of England\'s, breathing English air',
      analysis:
        'The speaker is not just from England - he IS England. His body is "England\'s", his breath is "English". The repetition obliterates any separation between self and nation. This is total patriotism.',
      themes: ['Identity', 'Nationalism', 'Repetition'],
    },
    {
      quote: 'Washed by the rivers, blest by suns of home',
      analysis:
        'Religious language ("blest") sanctifies English nature. Rivers and sun are gifts from England, blessings from a sacred place. The line idealises the English landscape as a holy benediction.',
      themes: ['Pastoral', 'Religion', 'Idealisation'],
    },
    {
      quote: 'this heart, all evil shed away',
      analysis:
        'The volta of the sonnet. Death is presented as purification - all evil falls away. The speaker imagines becoming pure through dying. This is the romantic view of war as morally cleansing.',
      themes: ['Purification', 'Death', 'Idealism'],
    },
    {
      quote: 'A pulse in the eternal mind',
      analysis:
        'Mystical, near-religious metaphor. The dead soldier becomes a heartbeat in some cosmic consciousness. Death is not an end but a continuation of awareness in a greater whole. This is poetic, but completely unscientific.',
      themes: ['Spirituality', 'Death', 'Continuity'],
    },
    {
      quote: 'In hearts at peace, under an English heaven',
      analysis:
        'The closing line is the poem\'s most extreme image - even heaven is English. Brooke imagines paradise as having a national identity. This is the height of patriotic devotion: not just England forever, but England in eternity. The image is beautiful, troubling, and entirely typical of pre-trench-warfare patriotism.',
      themes: ['Heaven', 'Nationalism', 'Eternal England'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'A dust whom England bore, shaped, made aware ... her flowers to love',
      effect:
        'England is personified as a mother throughout the poem. She gives birth, shapes character, provides flowers and freedom. This makes patriotism feel familial and natural - dying for England becomes like dying for one\'s mother.',
      lineRef: 5,
    },
    {
      device: 'Repetition',
      example: 'England ... English ... England\'s ... English ... English',
      effect:
        'England and English are repeated 8 times in 14 lines. The repetition functions like an incantation, fixing England as the only meaningful identity. The reader cannot escape the word - just as the speaker cannot escape his national identity.',
      lineRef: 3,
    },
    {
      device: 'Religious diction',
      example: 'blest ... evil shed away ... eternal ... heaven',
      effect:
        'The language is religious and ceremonial. England becomes a sacred place; death becomes purification; the afterlife is "an English heaven". The religious tone elevates patriotism into a kind of faith.',
      lineRef: 8,
    },
    {
      device: 'Sonnet form',
      example: 'Traditional Petrarchan sonnet with octave/sestet division',
      effect:
        'The sonnet form is traditionally used for love poetry. Brooke writes a love poem to his country. The form\'s dignified tradition gives the patriotic content authority and beauty - it sounds inherited, eternal, sacred.',
      lineRef: 1,
    },
    {
      device: 'Hyperbole',
      example: 'for ever England ... eternal mind ... English heaven',
      effect:
        'The poem repeatedly uses hyperbolic language - "for ever", "eternal", "heaven". The exaggeration is not accidental - Brooke\'s patriotism is deliberately monumental. Nothing about this vision is small or modest.',
      lineRef: 3,
    },
    {
      device: 'Volta',
      example: 'And think, this heart, all evil shed away',
      effect:
        'The traditional sonnet turn moves the poem from body (octave) to soul (sestet). The shift signals a move from physical sacrifice to spiritual immortality. The volta is the structural heart of the patriotic vision.',
      lineRef: 9,
    },
    {
      device: 'Imagery (pastoral)',
      example: 'her flowers to love, her ways to roam ... washed by the rivers, blest by suns',
      effect:
        'Brooke uses idyllic pastoral imagery - flowers, rivers, sunshine. England is presented as a beautiful, gentle landscape. The reader is invited to love England as a place worth dying for.',
      lineRef: 6,
    },
  ],
}

const comparisons = [
  {
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/eduqas/dulce-et-decorum-est',
    reason:
      'The most famous Eduqas pairing. Brooke romanticises war; Owen exposes its horror. Brooke\'s patriotic ideal is exactly the lie Owen attacks. The contrast in tone, imagery, and message could not be sharper.',
    themes: ['War', 'Patriotism', 'Anti-war'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems show how soldiers die abroad while their loved ones remain at home. Brooke imagines a noble death; Hardy shows the bureaucratic, painful reality of bereavement.',
    themes: ['War', 'Death', 'Home and away'],
  },
  {
    title: 'Sonnet 43',
    poet: 'Elizabeth Barrett Browning',
    href: '/revision/poetry/eduqas/sonnet-43',
    reason:
      'Both are sonnets about devotion. EBB declares total love for a person; Brooke declares total love for a country. Both use the sonnet form to express absolute commitment.',
    themes: ['Sonnet form', 'Devotion', 'Total commitment'],
  },
]

export default function SoldierEduqasPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Soldier
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Rupert Brooke &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Eduqas</Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={soldier} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for war poetry comparison questions.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
