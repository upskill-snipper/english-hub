'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const aPoisonTree: PoemData = {
  title: 'A Poison Tree',
  poet: 'William Blake',
  lines: [
    {
      text: 'I was angry with my friend;',
      annotations: [
        {
          type: 'Opening',
          note: 'Blake opens with a stark, simple admission. The blunt declarative is almost childlike, but it sets up the cause-and-effect parable that follows.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'I told my wrath, my wrath did end.',
      annotations: [
        {
          type: 'Resolution',
          note: 'Honesty resolves anger immediately. The repetition of "wrath" alongside the rhyming "end" makes the cure feel obvious and natural.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I was angry with my foe:',
      annotations: [
        {
          type: 'Parallelism',
          note: 'The line mirrors line 1 exactly except for "friend"/"foe". Blake invites us to compare the two situations side by side.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'I told it not, my wrath did grow.',
      annotations: [
        {
          type: 'Volta',
          note: 'Suppression makes anger grow. The rhyme of "foe"/"grow" links concealment with expansion. This is the central thesis of the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'The opening stanza states the moral plainly before the metaphor is developed. Anger that is not spoken takes root.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And I waterd it in fears,',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'Anger is now a plant being cultivated. "Fears" become water \u2014 the speaker\u2019s anxiety nourishes resentment.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Night & morning with my tears:',
      annotations: [
        {
          type: 'Imagery',
          note: 'The image of constant tending suggests obsession. "Night & morning" implies that grief and anger occupy every moment.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And I sunned it with smiles,',
      annotations: [
        {
          type: 'Deception',
          note: 'False smiles act as sunlight. Blake exposes how social politeness can mask &mdash; and even feed &mdash; hidden hatred.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And with soft deceitful wiles.',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The hissing "s" sounds in "soft", "deceitful" and "wiles" evoke a serpent &mdash; a clear echo of the Eden story to come.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The plant of anger is fed by every kind of dishonesty. Blake makes hypocrisy sound seductive and dangerous.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And it grew both day and night,',
      annotations: [
        {
          type: 'Time imagery',
          note: 'The repetition of "day and night" doubles the relentlessness of the growth. Anger becomes a permanent project.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Till it bore an apple bright;',
      annotations: [
        {
          type: 'Allusion',
          note: 'A direct allusion to Genesis: the apple that grew in Eden. "Bright" suggests beauty hiding poison \u2014 like the forbidden fruit.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The metaphor crystallises into a single tempting image. The fruit of suppressed anger looks attractive but is deadly.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And my foe beheld it shine.',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Beheld" is biblical and reverent. The foe sees the fruit as something precious \u2014 the speaker has successfully baited the trap.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And he knew that it was mine.',
      annotations: [
        {
          type: 'Possession',
          note: 'The foe recognises ownership, which provokes desire and envy. The brevity of the line suggests cold inevitability.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And into my garden stole.',
      annotations: [
        {
          type: 'Eden reference',
          note: 'The "garden" cements the Eden allusion. The foe enters at night \u2014 stealing into a private space, breaking moral boundaries.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'When the night had veild the pole;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Veild" suggests concealment and ritual. The pole star is hidden \u2014 the moral compass is gone, conscience is suspended.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In the morning glad I see;',
      annotations: [
        {
          type: 'Disturbing tone',
          note: '"Glad" is the most chilling word in the poem. The speaker rejoices at his enemy\u2019s death, revealing how completely anger has corrupted him.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The volta to the speaker\u2019s satisfaction is the moral horror at the centre of the poem.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'My foe outstretched beneath the tree.',
      annotations: [
        {
          type: 'Final image',
          note: 'The corpse lies beneath the tree of poison. The poem ends not with redemption but with quiet triumph \u2014 a moral warning to the reader.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'Blake leaves us with a tableau: the speaker, the tree and the dead foe. Suppressed anger has killed.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757&ndash;1827)</h3>
    <p>Blake was a Romantic poet, painter and printmaker, almost entirely outside the literary establishment of his time. He combined poetry with hand-coloured engravings and was deeply religious in an unorthodox way, hostile to organised religion and to social injustice.</p>

    <h3>Songs of Innocence and of Experience (1794)</h3>
    <p>"A Poison Tree" appears in <em>Songs of Experience</em>, the darker companion volume to <em>Songs of Innocence</em>. The two volumes show the same world from opposing perspectives: the experienced speaker has seen how deceit, repression and institutional cruelty corrupt human nature.</p>

    <h3>Religion and the Bible</h3>
    <p>The poem is saturated with biblical imagery. The "garden", the "apple" and the foe lying "beneath the tree" all echo the Fall of Man in Genesis. But Blake reverses the moral: in the Bible, the serpent tempts Eve; here, it is the speaker who plays the serpent and grows the poisonous fruit himself.</p>

    <h3>Honesty vs. repression</h3>
    <p>Blake was influenced by the radical writer Emanuel Swedenborg and the political upheavals of the 1790s, including the French and American Revolutions. He believed honest expression of emotion was a moral duty &mdash; suppression caused real harm. The poem dramatises that belief.</p>
  `,

  summary: `Stanza 1: The speaker contrasts two reactions to anger. With his friend, he speaks honestly about his feelings and the anger fades. With his foe, he hides his anger \u2014 and it grows.

Stanza 2: The speaker tends his anger like a plant. He waters it with fears and tears, and feeds it with false smiles and deceitful tricks. The metaphor makes anger sound like something he is actively cultivating.

Stanza 3: The anger grows day and night until it produces a "bright" apple. The foe sees the fruit and recognises it belongs to the speaker. The biblical Eden imagery is now obvious.

Stanza 4: At night, the foe sneaks into the speaker\u2019s garden to steal the apple. In the morning, the speaker is "glad" to find his foe lying dead beneath the tree. The poem ends in chilling triumph: suppressed anger has produced a fatal weapon.

Overall meaning: Blake warns that hidden anger is far more destructive than open anger. The poem is a parable about honesty, repression and the moral damage we do to ourselves when we hide what we feel. The speaker may have killed his enemy, but he has also corrupted himself.`,

  formAndStructure: `Form: Four quatrains in rhyming couplets (AABB), giving the poem a deceptively simple, song-like quality. The form resembles a nursery rhyme or a moral fable for children, which makes the dark content all the more disturbing.

Metre: Mostly trochaic tetrameter (four feet, falling rhythm). The trochaic beat is unusual in English poetry and creates an insistent, almost incantatory pulse, like a chant or a spell.

Rhyme scheme: The neat AABB couplets create a sense of inevitability. Each pair of rhymes feels like a closing of the trap, mirroring how the speaker steadily closes the trap on his foe.

Structural symmetry: Stanza 1 sets up the parallel between friend and foe. Stanzas 2 and 3 develop the metaphor of the growing tree. Stanza 4 delivers the dark consequence. The poem works as a tight cause-and-effect argument.

Volta: There is a turning point in line 4, when "I told it not, my wrath did grow." From here on, the poem stops describing two situations and follows just one \u2014 the suppression \u2014 to its terrible conclusion.

Repetition and parallelism: The repetition of "I" at the start of so many lines makes the speaker the centre of moral attention. The parallel structures of "I waterd it... I sunned it..." emphasise his active cultivation of evil.

Punctuation: Blake uses semicolons and full stops to slow the poem down, making each step in the moral collapse feel deliberate.`,

  keyQuotes: [
    {
      quote: 'I told it not, my wrath did grow',
      analysis:
        'The poem\u2019s thesis. The simple monosyllabic phrase "told it not" is paired with the active verb "grow" \u2014 silence becomes a kind of nourishment. The end-rhyme of "foe" and "grow" links concealment with expansion in the reader\u2019s ear.',
      themes: ['Anger', 'Repression', 'Internal conflict'],
    },
    {
      quote: 'And I waterd it in fears',
      analysis:
        'The metaphor of anger as a plant takes hold. "Watered" makes fear sound nourishing rather than draining \u2014 the speaker is actively keeping his anger alive. The unusual spelling "waterd" (Blake\u2019s own) adds a slightly archaic, parable-like feel.',
      themes: ['Anger', 'Fear', 'Deception'],
    },
    {
      quote: 'And with soft deceitful wiles',
      analysis:
        'The sibilance ("soft", "deceitful", "wiles") evokes a serpent and looks ahead to the Eden imagery. Blake exposes the danger of the "soft" mask of social politeness: a smile can be a weapon when it hides genuine feeling.',
      themes: ['Deception', 'Hypocrisy', 'Internal conflict'],
    },
    {
      quote: 'Till it bore an apple bright',
      analysis:
        'The metaphor crystallises into a single image. The "apple" is a direct allusion to Eden, while "bright" suggests beauty masking poison. The plant of anger has produced a tempting weapon \u2014 hatred made visible and irresistible.',
      themes: ['Religion', 'Temptation', 'Anger'],
    },
    {
      quote: 'And into my garden stole',
      analysis:
        'The verb "stole" carries both meanings: the foe creeps in stealthily and also commits theft. The "garden" makes the Eden parallel inescapable. The foe is being cast as Adam, but the speaker has set the trap rather than God.',
      themes: ['Religion', 'Deception', 'Conflict'],
    },
    {
      quote: 'In the morning glad I see',
      analysis:
        'The most chilling line in the poem. "Glad" is a single short word that exposes how completely anger has corrupted the speaker. Morning, traditionally an image of rebirth and hope, becomes the moment of moral death.',
      themes: ['Anger', 'Corruption', 'Moral collapse'],
    },
    {
      quote: 'My foe outstretched beneath the tree',
      analysis:
        'The closing tableau. The tree is now a gallows; the foe is laid out like a sacrifice. The poem ends in stillness \u2014 the speaker offers no remorse, no judgement, no commentary. The reader is forced to supply the moral.',
      themes: ['Death', 'Anger', 'Internal conflict'],
    },
    {
      quote: 'I was angry with my friend / I was angry with my foe',
      analysis:
        'The opening parallel sets up the entire argument. The grammatical mirror invites comparison: same anger, two outcomes. The reader knows immediately that the difference will be moral as well as practical.',
      themes: ['Repression', 'Honesty', 'Conflict'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'And I waterd it in fears / Night & morning with my tears',
      effect:
        'Anger becomes a plant the speaker cultivates. The metaphor grows across the whole poem, ending with the "apple" and the body beneath the "tree". It dramatises how nourishing resentment turns it into something deadly.',
      lineRef: 5,
    },
    {
      device: 'Biblical allusion',
      example: 'Till it bore an apple bright',
      effect:
        'Direct echo of the Genesis story of the Fall. The garden, the apple and the tree all evoke Eden. Blake reverses the moral: the speaker plays the serpent, growing his own forbidden fruit \u2014 hatred dressed as beauty.',
      lineRef: 11,
    },
    {
      device: 'Sibilance',
      example: 'And with soft deceitful wiles',
      effect:
        'The hissing "s" sounds suggest a serpent and reinforce the Eden allusion. Sibilance also makes the speaker\u2019s deceit feel insidious and seductive, slipping past moral defences.',
      lineRef: 8,
    },
    {
      device: 'Parallelism',
      example: 'I was angry with my friend / I was angry with my foe',
      effect:
        'The grammatical mirroring of lines 1 and 3 sets up a moral comparison. Identical structure but different outcome forces the reader to focus on the single variable: did the speaker speak his anger or hide it?',
      lineRef: 0,
    },
    {
      device: 'Trochaic metre',
      example: 'In the morning glad I see',
      effect:
        'The falling trochaic rhythm gives the poem a hypnotic, chant-like quality, almost a nursery rhyme. The simple beat makes the moral horror at the end land harder by contrast.',
      lineRef: 16,
    },
    {
      device: 'Personal pronoun "I"',
      example: 'I waterd / I sunned / I see',
      effect:
        'The speaker repeats "I" as the active subject of every act of cultivation. Blake makes clear that suppressed anger is something we choose to grow \u2014 it is not something that happens to us.',
      lineRef: 5,
    },
  ],
}

const comparisons = [
  {
    title: 'Half-caste',
    poet: 'John Agard',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems are about anger that finds expression. Blake\u2019s speaker bottles it up with fatal results; Agard\u2019s speaker turns his rage into defiant, public performance. Compare the two responses to injustice.',
    themes: ['Anger', 'Honesty', 'Conflict'],
  },
  {
    title: 'The Destruction of Sennacherib',
    poet: 'Lord Byron',
    href: '/revision/poetry/edexcel/conflict/the-destruction-of-sennacherib',
    reason:
      'Both poems use biblical imagery to dramatise destruction. Byron stages divine wrath; Blake stages human wrath disguised as something divine. Compare the moral framing of violence.',
    themes: ['Religion', 'Anger', 'Death'],
  },
  {
    title: 'Cousin Kate',
    poet: 'Christina Rossetti',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems centre on suppressed feeling that turns to bitter hatred. Rossetti\u2019s speaker, like Blake\u2019s, is unable to release her anger \u2014 and it corrodes her from within.',
    themes: ['Anger', 'Betrayal', 'Internal conflict'],
  },
]

export default function APoisonTreePage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Conflict cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">A Poison Tree</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Edexcel Conflict anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Edexcel</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="A Poison Tree"
        textType="poem"
        examBoard="Edexcel"
        cluster="Conflict"
        variant="compact"
      />
      <InteractivePoemViewer poem={aPoisonTree} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with A Poison Tree from the Edexcel Conflict cluster.
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;A Poison Tree&rdquo; by William Blake (1794) is in the public domain.
          All quotations on this page are used for the purpose of criticism,
          review and educational study under fair dealing (s.30 Copyright,
          Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
