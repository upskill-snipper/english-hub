'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'The Tyger',
  poet: 'William Blake',
  lines: [
    {
      text: 'Tyger Tyger, burning bright,',
      annotations: [
        {
          type: 'Key quote',
          note: 'One of the most famous opening lines in English poetry. The repeated "Tyger Tyger" is incantatory, almost like a spell or chant. Blake\'s unusual spelling ("Tyger" not "Tiger") gives it an archaic, mythic feel.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: '"Burning bright" — the tiger is described as fire, which connects it to creation, danger, and supernatural power. Fire suggests both beauty and destruction at once.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In the forests of the night;',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Forests of the night" is dreamlike and mythical — a dark, mysterious landscape where the tiger exists. This is not a real jungle but a symbolic space, the unknown territory of fear and wonder.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'What immortal hand or eye,',
      annotations: [
        {
          type: 'Key quote',
          note: 'The central question of the poem — who could have created this creature? "Immortal hand or eye" implies a god-like maker. The question will be repeated like a refrain throughout the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Rhetorical question',
          note: 'Blake asks questions rather than answers them. The whole poem is a series of unanswered questions. This creates a sense of awe and bewilderment — the speaker cannot understand what he is seeing.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Could frame thy fearful symmetry?',
      annotations: [
        {
          type: 'Key quote',
          note: '"Fearful symmetry" is the poem\'s most famous phrase. "Symmetry" suggests beautiful balance and design; "fearful" makes it terrifying. The tiger is both perfectly made and deeply frightening. This paradox is the heart of the poem.',
          color: '#f59e0b',
        },
        {
          type: 'Paradox',
          note: 'How can something be both symmetrical (perfect, designed) and fearful (terrifying)? Blake is asking: can God make beautiful things that are also terrible?',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'In what distant deeps or skies',
      annotations: [
        {
          type: 'Cosmic imagery',
          note: '"Distant deeps or skies" — depths of the sea or heights of heaven. The speaker imagines the tiger coming from somewhere vast and otherworldly. This is the language of myth and Genesis.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Burnt the fire of thine eyes?',
      annotations: [
        {
          type: 'Imagery',
          note: 'The fire in the tiger\'s eyes connects back to "burning bright". The tiger is repeatedly associated with flame — it seems almost made of fire, a burning thing not just a physical animal.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'On what wings dare he aspire?',
      annotations: [
        {
          type: 'Allusion',
          note: 'The "wings" and "aspire" suggest Icarus or Prometheus — figures from Greek myth who dared to reach too high. The creator of the tiger is flying into dangerous territory, reaching for something forbidden.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'What the hand dare seize the fire?',
      annotations: [
        {
          type: 'Allusion',
          note: '"Seize the fire" is a direct reference to Prometheus, who stole fire from the gods to give to humanity. The creator is imagined as both heroic and transgressive, like a titan daring to touch divinity.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: '"Dare" is the crucial word, used twice. Creating the tiger required courage — even audacity. No ordinary maker could have done it.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And what shoulder, & what art,',
      annotations: [
        {
          type: 'Physical imagery',
          note: '"Shoulder" suggests physical labour — muscular effort. "Art" suggests craftsmanship. The creator is imagined as a blacksmith or sculptor, using both force and skill.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Could twist the sinews of thy heart?',
      annotations: [
        {
          type: 'Imagery',
          note: '"Twist the sinews" is physical, almost violent. Creating the tiger\'s heart required twisting, bending, forcing. It is hard, manual labour — not effortless divine creation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And when thy heart began to beat,',
      annotations: [
        {
          type: 'Pivotal moment',
          note: 'The moment the heart started — the animation of the tiger, when it came alive. This is the terrifying moment of creation, when the tiger first began to exist as a living, dangerous thing.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'What dread hand? & what dread feet?',
      annotations: [
        {
          type: 'Repetition',
          note: '"Dread" is repeated — the hand and feet that made the tiger are full of dread. This could mean the creator was terrifying, or that the creator felt dread at what he was making. Both readings work.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'What the hammer? what the chain,',
      annotations: [
        {
          type: 'Blacksmith imagery',
          note: 'The creator is now imagined as a blacksmith. Hammer and chain are tools for shaping metal. This grounds the creation in hard physical labour — and echoes Blake\'s own work as an engraver who shaped metal plates.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'In what furnace was thy brain?',
      annotations: [
        {
          type: 'Imagery',
          note: 'The tiger\'s brain was forged in a furnace — a blazing, industrial fire. This is the language of Blake\'s age: the beginning of the Industrial Revolution, with its dark satanic mills. The tiger is something forged.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'What the anvil? what dread grasp,',
      annotations: [
        {
          type: 'Cumulative',
          note: 'The blacksmith imagery keeps building — hammer, chain, furnace, anvil. Each piece adds to the sense of difficult, dangerous industrial work. The creator is a god of industry.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Dare its deadly terrors clasp?',
      annotations: [
        {
          type: 'Key quote',
          note: '"Dare its deadly terrors clasp" — who would dare hold the tiger\'s terrible essence in their hand? "Deadly terrors" is the clearest moment when Blake calls the tiger\'s nature what it is: lethal, terrifying.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'When the stars threw down their spears',
      annotations: [
        {
          type: 'Biblical allusion',
          note: 'The stars throwing down their spears is often read as a reference to the fall of Lucifer and the rebel angels in Paradise Lost — the defeated angels surrendering their weapons. It could also allude to the war in heaven.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And water\'d heaven with their tears:',
      annotations: [
        {
          type: 'Cosmic imagery',
          note: 'The stars weep over heaven. This is a stunning image — the cosmos itself weeping at the creation of the tiger. Whatever was made, it was significant enough to make heaven cry.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Did he smile his work to see?',
      annotations: [
        {
          type: 'Key quote',
          note: 'The most disturbing question in the poem. Did the creator SMILE at what he made? The idea of a god smiling at the birth of something so terrible is unsettling. It questions the whole nature of divine goodness.',
          color: '#f59e0b',
        },
        {
          type: 'Rhetorical question',
          note: 'Blake leaves this question unanswered. Did God approve of the tiger? Was it made in pride or in sorrow? The poem will not tell us.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Did he who made the Lamb make thee?',
      annotations: [
        {
          type: 'Key quote',
          note: 'The central theological question. Blake had already written "The Lamb" — a gentle poem about Jesus as a peaceful creator of lambs. Now he asks: the same god? How can one god make both the innocent Lamb AND the terrifying Tyger? This is the problem of evil in miniature.',
          color: '#f59e0b',
        },
        {
          type: 'Allusion',
          note: 'Refers directly to Blake\'s own earlier poem "The Lamb" from Songs of Innocence. The Lamb represents innocence, gentleness, Christ; the Tyger represents experience, danger, the unknown.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'Tyger Tyger burning bright,',
      annotations: [
        {
          type: 'Refrain',
          note: 'The opening stanza returns as a refrain — but changed. The poem has come full circle, but after all the questions, the return is different in feeling.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'In the forests of the night:',
      annotations: [
        {
          type: 'Echo',
          note: 'The same line as line 2, but now weighted with the questions that came between. The landscape of the tiger is the same — but the speaker has been changed by asking his questions.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'What immortal hand or eye,',
      annotations: [
        {
          type: 'Echo',
          note: 'The same question — almost. Watch the crucial change in the next line.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Dare frame thy fearful symmetry?',
      annotations: [
        {
          type: 'Key quote',
          note: 'The crucial change: "Could" (stanza 1) becomes "Dare" (stanza 6). At the beginning, the question was about possibility — COULD any god make the tiger? By the end, it is about courage — DARE any god make it? The shift suggests that making the tiger is not just difficult; it requires daring to take moral risks.',
          color: '#f59e0b',
        },
        {
          type: 'Volta',
          note: 'The single-word change is the poem\'s hidden volta. After all the questions about how, Blake reveals that the real question is who would dare. Creation becomes an act of moral courage, not just divine power.',
          color: '#a855f7',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757–1827)</h3>
    <p>Blake was an English poet, painter and printmaker, usually considered the first of the Romantic poets. He was a visionary — he claimed to see angels and prophets — and his work combines radical politics, unorthodox Christianity and extraordinary visual imagination. He was unrecognised in his lifetime but is now considered one of the great figures of English literature.</p>

    <h3>Songs of Innocence and Experience</h3>
    <p>"The Tyger" was published in 1794 as part of Blake\'s <em>Songs of Innocence and of Experience</em>, subtitled "Shewing the Two Contrary States of the Human Soul". The book pairs <strong>poems of innocence</strong> (gentle, pastoral, child-like) with <strong>poems of experience</strong> (darker, more questioning, adult). "The Tyger" is in <em>Songs of Experience</em>, and is paired with <strong>"The Lamb"</strong> from <em>Songs of Innocence</em>.</p>

    <h3>"The Lamb" and "The Tyger"</h3>
    <p>"The Lamb" is a gentle poem in which the speaker asks a lamb "Little Lamb, who made thee?" — and answers happily: the meek, gentle Christ made you. "The Tyger" deliberately inverts this. The speaker asks a much more dangerous creature the same question, but cannot answer. Together the two poems ask: how can the same God make both innocent lambs and terrifying tigers? This is the problem of evil expressed in simple, child-like language.</p>

    <h3>The French Revolution</h3>
    <p>Blake wrote "The Tyger" in 1794, in the middle of the <strong>French Revolution</strong> (1789–1799) — a time of extraordinary hope and extraordinary violence. Many critics read the tiger as a symbol of revolutionary energy: beautiful, terrifying, beyond control. Blake supported the revolution\'s ideals but was horrified by the Terror. The tiger may be Blake\'s symbol for the violent, necessary, destructive force of revolution itself.</p>

    <h3>The Industrial Revolution</h3>
    <p>The blacksmith imagery — hammer, chain, furnace, anvil — reflects the world of the <strong>Industrial Revolution</strong>, which was transforming England as Blake wrote. Blake hated the "dark satanic mills" of industrialisation. The tiger is imagined as something forged in industry — which makes the creator both magnificent and terrifying, like a factory god.</p>

    <h3>Blake\'s illuminated printing</h3>
    <p>Blake printed his poems using a process he invented called "<strong>illuminated printing</strong>" — etching words and images together on copper plates, then hand-colouring each page. "The Tyger" was published as a full-page plate with an illustration of a tiger (interestingly, Blake\'s painted tiger does not look very fearful — this is often discussed in criticism).</p>
  `,

  summary: `Stanza 1 (lines 1–4): The speaker addresses the tiger directly. The tiger is "burning bright" in the "forests of the night". The speaker asks the central question: what "immortal hand or eye" could have created such a creature? The tiger\'s "fearful symmetry" — its beautiful and terrifying design — suggests a maker of extraordinary power.

Stanza 2 (lines 5–8): The speaker wonders where the tiger came from. Deep oceans or high skies? The fire of its eyes must have been taken from somewhere distant. The creator must have had the wings and daring of a mythological hero like Prometheus to "seize the fire" and use it.

Stanza 3 (lines 9–12): The speaker imagines the physical labour of creating the tiger. The creator\'s "shoulder" and "art" had to "twist the sinews" of the tiger\'s heart. When the heart began to beat, the creator\'s hand and feet must have been full of dread — either terrifying or afraid.

Stanza 4 (lines 13–16): The creator is now imagined as a blacksmith. What hammer, chain, furnace and anvil shaped the tiger\'s brain? Who would dare to hold such "deadly terrors" in their grasp? The industrial imagery makes creation sound like heavy, dangerous work.

Stanza 5 (lines 17–20): A cosmic moment — the stars throw down their spears and water heaven with their tears. Something in the universe wept at the creation of the tiger. The speaker asks: did the creator smile when he saw what he had made? And then the central theological question: "Did he who made the Lamb make thee?" Can the same God have made both the innocent lamb and the terrible tiger?

Stanza 6 (lines 21–24): The poem circles back to its opening. "Tyger Tyger, burning bright" — but the fourth line has changed from "Could frame thy fearful symmetry?" to "Dare frame thy fearful symmetry?" The question has moved from possibility to courage. No answer is given — the question remains open.

Overall meaning: "The Tyger" is a poem of awe and terror at creation itself. Blake asks how the same God could make both gentle lambs and terrifying tigers — the problem of evil in child-like language. The poem gives no answer: it is a series of unanswered questions. The tiger may stand for revolutionary energy, for nature\'s violence, for evil, or simply for everything about the world that we find beautiful and frightening at once.`,

  formAndStructure: `Form: Six quatrains of four lines each — 24 lines in total. The poem looks simple and song-like, which contrasts sharply with the deep theological questions it raises.

Rhyme scheme: AABB throughout — rhyming couplets. The predictable, nursery-rhyme simplicity of the rhymes is crucial. Blake makes his terrifying questions sound like a child\'s song. This is part of the poem\'s effect: the simple form holds enormous philosophical weight.

Metre: Trochaic tetrameter — four beats per line, with a stressed-unstressed pattern (TY-ger TY-ger BURN-ing BRIGHT). Most lines drop the final unstressed syllable, giving a punchy, insistent rhythm. The hammering beat is appropriate for a poem about a blacksmith-god forging a creature.

Refrain: The first and last stanzas are almost identical, with one crucial change. "Could frame thy fearful symmetry?" (stanza 1) becomes "Dare frame thy fearful symmetry?" (stanza 6). This single-word change moves the question from possibility to courage. It is the poem\'s hidden volta — the whole argument turns on that one word.

Questions: The poem is made of questions. Every stanza except the blacksmith stanza (stanza 4) contains at least one question. The speaker never gives an answer. This is essential to the poem\'s meaning: Blake is not telling us what the tiger means, he is making us feel the awe and terror that cannot be answered.

Circular structure: The poem ends where it began, as if the speaker\'s questioning has brought him no closer to an answer. But the reader has been changed by the journey through the questions. The circularity enacts the idea that questions about creation have no resolution — we keep asking the same question.

Stanza-by-stanza progression:
• Stanza 1: The tiger and the first question.
• Stanza 2: Cosmic origins and Promethean daring.
• Stanza 3: Physical creation — shoulders, sinews, heart.
• Stanza 4: The blacksmith — hammer, furnace, anvil.
• Stanza 5: Cosmic response and the Lamb comparison.
• Stanza 6: Return to the opening, with the crucial change.

Tone: Awe, fear, wonder, bewilderment. The speaker is overwhelmed. The simple form and child-like repetitions hold back a feeling of tremendous, uncontrollable emotion.

Relationship to "The Lamb": The poem is best read alongside "The Lamb" from Songs of Innocence. The two poems use similar forms and ask similar questions but reach opposite moods. The Lamb\'s speaker knows his answer ("He is called by thy name, / For he calls himself a Lamb"); the Tyger\'s speaker has no answer at all.`,

  keyQuotes: [
    {
      quote: 'Tyger Tyger, burning bright, / In the forests of the night',
      analysis:
        'The most famous opening in English poetry. The repeated "Tyger Tyger" has the feel of a chant or spell — the speaker summoning the tiger into presence. "Burning bright" establishes the tiger as a creature of fire and light, while "forests of the night" places him in a dreamlike, symbolic darkness. The contrast of bright fire against dark forest is visual and metaphorical — the tiger is the single point of terrifying light in a dark world.',
      themes: ['Creation', 'Fear', 'Awe'],
    },
    {
      quote: 'What immortal hand or eye, / Could frame thy fearful symmetry?',
      analysis:
        'The poem\'s central question. "Immortal hand or eye" implies a god-like maker. "Fearful symmetry" is the key paradox — how can something be both perfectly designed (symmetrical) and terrifying (fearful)? Blake is asking whether the maker of the tiger is a benevolent creator or a more complicated, daring force. The line is repeated in the final stanza with one crucial change — "Could" becomes "Dare" — which shifts the question from possibility to courage.',
      themes: ['Creation', 'Divine power', 'Paradox'],
    },
    {
      quote: 'What the hand dare seize the fire?',
      analysis:
        'Direct allusion to Prometheus, the Greek titan who stole fire from the gods to give to humanity. The creator of the tiger is imagined as Promethean — daring to reach into divine territory and bring something powerful back. "Dare" is a key word used repeatedly: creation involves courage, not just power. Blake respects the daring of the maker, even while he is frightened by what was made.',
      themes: ['Prometheus', 'Daring', 'Theft of fire'],
    },
    {
      quote: 'In what furnace was thy brain?',
      analysis:
        'The creator is imagined as a blacksmith, and the tiger\'s brain is literally forged in a furnace. This is industrial imagery — hammer, chain, furnace, anvil — and it transforms the creator into a factory god. Blake lived at the beginning of the Industrial Revolution and hated the "dark satanic mills", but here he uses industrial language to describe divine creation. The tiger is not a gentle product; it is something forged in fire.',
      themes: ['Industry', 'Creation', 'Forging'],
    },
    {
      quote: 'When the stars threw down their spears, / And water\'d heaven with their tears',
      analysis:
        'A cosmic, apocalyptic image. The stars throwing down their spears is often read as a reference to the fall of the rebel angels in Paradise Lost — their weapons dropped in defeat. The stars then weep over heaven. Whatever was made, it was significant enough to make the cosmos itself mourn. This stanza lifts the tiger out of zoology and into myth — its creation is a heavenly event.',
      themes: ['Cosmic response', 'Mourning', 'Fall'],
    },
    {
      quote: 'Did he smile his work to see?',
      analysis:
        'The most theologically disturbing line in the poem. In Genesis, God looks at his creation and "saw that it was good". Blake asks whether the creator smiled at the sight of the tiger. The idea of a god smiling at the birth of a terrifying creature is profoundly unsettling. It calls into question the simple equation of "God = good" that children\'s catechisms teach. Blake does not answer the question — he leaves it open, and that openness is devastating.',
      themes: ['God and evil', 'Creation', 'Divine pleasure'],
    },
    {
      quote: 'Did he who made the Lamb make thee?',
      analysis:
        'The poem\'s central theological problem in a single line. "The Lamb" was Blake\'s earlier poem about Jesus as a gentle, loving creator. Now he asks: did the same God make both? How can one creator produce both the innocent Lamb and the terrifying Tyger? This is the problem of evil in miniature — and Blake presents it without solution. The question makes the poem not just about tigers but about the whole nature of God and the world.',
      themes: ['Problem of evil', 'Dualism', 'God'],
    },
    {
      quote: 'Dare frame thy fearful symmetry?',
      analysis:
        'The final line of the poem — almost the same as the fourth line, but with "Could" replaced by "Dare". The change is the hidden volta of the poem. At the beginning, the question was about possibility: COULD any god be powerful enough to make the tiger? By the end, the question has become about courage: DARE any god take the moral risk of making such a creature? The single word change transforms the whole meaning.',
      themes: ['Daring', 'Courage', 'Moral risk'],
    },
  ],

  languageDevices: [
    {
      device: 'Rhetorical questions',
      example: 'What immortal hand or eye, / Could frame thy fearful symmetry?',
      effect:
        'The entire poem is constructed from unanswered questions. Blake asks and asks, but never resolves. This creates a sustained feeling of awe and bewilderment — the speaker cannot understand what he sees. The lack of answers is the point: some mysteries cannot be solved, only felt.',
      lineRef: 2,
    },
    {
      device: 'Symbolism',
      example: 'Tyger… Lamb… fire… forests of the night',
      effect:
        'Every noun in the poem is loaded with symbolic meaning. The tiger stands for fear, evil, energy, beauty, revolution, or the unknown. The lamb stands for innocence and Christ. Fire stands for creation and destruction. The "forests of the night" stand for the mysterious unknown. Blake builds his poem from symbols, leaving the reader to decode them.',
      lineRef: 0,
    },
    {
      device: 'Allusion (Prometheus)',
      example: 'What the hand dare seize the fire?',
      effect:
        'The allusion to Prometheus, who stole fire from the gods, gives the creator a mythological frame. Creation becomes transgressive — reaching into forbidden territory to bring something powerful back. The creator is not a peaceful craftsman but a daring thief.',
      lineRef: 7,
    },
    {
      device: 'Extended metaphor (blacksmith)',
      example: 'What the hammer? what the chain… In what furnace was thy brain? / What the anvil?',
      effect:
        'Stanza 4 extends a single metaphor: the creator as blacksmith. This domesticates divine creation — it becomes physical labour, not magic. The tools of an industrial forge become the tools of God. This connects creation to Blake\'s own time and the anxieties of the Industrial Revolution.',
      lineRef: 13,
    },
    {
      device: 'Trochaic tetrameter',
      example: 'TYger TYger BURNing BRIGHT',
      effect:
        'The driving, stressed-unstressed rhythm gives the poem a hammering, insistent beat — perfect for a poem about forging. The missing final syllable in most lines makes the rhythm punchy and urgent. The childish simplicity of the metre (it sounds like a nursery rhyme) contrasts starkly with the poem\'s dark theological content.',
      lineRef: 0,
    },
    {
      device: 'Single-word change / Circular structure',
      example: 'Could frame thy fearful symmetry → Dare frame thy fearful symmetry',
      effect:
        'The poem opens and closes with almost the same stanza, but one word has changed. "Could" becomes "Dare". This tiny edit transforms the whole meaning: the question shifts from divine possibility to divine courage. The circularity traps the reader in the question, and the single-word change gives the whole poem its volta.',
      lineRef: 23,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Blessing',
    poet: 'Imtiaz Dharker',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems treat a simple element — fire for Blake, water for Dharker — as something close to divine. Both use the language of wonder and worship for everyday forces. Compare Blake\'s fearful awe at the tiger with Dharker\'s grateful joy at the burst water pipe.',
    themes: ['Awe', 'Creation', 'The sacred'],
  },
  {
    title: 'Prayer Before Birth',
    poet: 'Louis MacNeice',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems ask unanswerable questions about creation and the world\'s darkness. Blake asks whether God dared make the tiger; MacNeice\'s unborn child begs protection from a world full of evil. Compare the two poets\' very different ways of expressing fear of what has been made.',
    themes: ['Fear of creation', 'Evil', 'Unanswered questions'],
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems confront terrible things and ask us to see them. Blake\'s tiger and Duffy\'s photographs both contain the fearful beauty of destruction. Compare how each writer uses art to force the reader to look at what they would rather avoid.',
    themes: ['Confronting evil', 'Art and witness'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function TheTygerPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Tyger
            </h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE 4ET1
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another
          from the anthology. These are strong pairings for The Tyger.
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
