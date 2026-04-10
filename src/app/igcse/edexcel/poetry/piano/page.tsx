'use client'
// TODO(board-guard): client component — wrap in server page.tsx that calls requireIgcseBoard(['edexcel-igcse']) once parent edexcel hub guard is verified to cover this route. Parent route is already protected.

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Piano',
  poet: 'D.H. Lawrence',
  lines: [
    {
      text: 'Softly, in the dusk, a woman is singing to me;',
      annotations: [
        {
          type: 'Opening atmosphere',
          note: 'The poem opens in the present tense. "Softly" and "dusk" create a hushed, tender mood. Dusk is a liminal time — between day and night — which mirrors the speaker\'s state between the adult present and childhood past.',
          color: '#3b82f6',
        },
        {
          type: 'Ambiguity',
          note: '"A woman" is deliberately impersonal — we don\'t know who she is. This anonymity lets her stand for all womanhood, including (as we\'ll see) the speaker\'s mother.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Taking me back down the vista of years, till I see',
      annotations: [
        {
          type: 'Key quote',
          note: 'The song "takes" him back physically — he is passive, pulled by the music. "Vista of years" is a visual metaphor: memory as a long corridor or view opening up before him.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: '"Vista" comes from landscape painting — a long view through trees or buildings. Lawrence imagines memory as a scene you can look along, not a thing you think about.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'A child sitting under the piano, in the boom of the tingling strings',
      annotations: [
        {
          type: 'Imagery',
          note: '"Boom of the tingling strings" is a rich piece of onomatopoeia — "boom" for the low resonance, "tingling" for the high vibrations. The child is literally inside the sound, beneath the piano itself.',
          color: '#10b981',
        },
        {
          type: 'Child\'s perspective',
          note: 'The child is placed underneath the instrument — an unusual, intimate vantage point. The physical closeness to the music becomes closeness to the mother at the keys.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And pressing the small, poised feet of a mother who smiles as she sings.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The child presses his mother\'s feet as she plays — a tiny, tactile memory of physical affection. "Small, poised feet" and "smiles as she sings" are the poem\'s warmest image: pure, uncomplicated happiness.',
          color: '#f59e0b',
        },
        {
          type: 'Sibilance',
          note: 'The soft "s" sounds in "small", "poised", "smiles", "sings" create a gentle, soothing texture that matches the lullaby-like feeling of the memory.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'In spite of myself, the insidious mastery of song',
      annotations: [
        {
          type: 'Key quote',
          note: '"In spite of myself" is crucial — the speaker is being pulled into the past against his will. He does not want to cry, but the music is forcing him. This is the poem\'s central struggle: adult control versus childhood emotion.',
          color: '#f59e0b',
        },
        {
          type: 'Diction',
          note: '"Insidious" (sneaky, treacherous) makes the song sound almost sinister — as if it is tricking him. "Mastery" suggests the song has power over him. Lawrence is uneasy about how easily he is overwhelmed.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Betrays me back, till the heart of me weeps to belong',
      annotations: [
        {
          type: 'Betrayal',
          note: '"Betrays" is a strong word — the song is a traitor, taking him somewhere he does not want to go. But "betrays" can also mean "reveals" — the song exposes his true, longing heart.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: '"Weeps to belong" — he longs to belong to the past, to be a child again. The phrase turns weeping itself into a kind of homesickness.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'To the old Sunday evenings at home, with winter outside',
      annotations: [
        {
          type: 'Specific memory',
          note: 'The memory suddenly becomes concrete: Sunday evenings, winter. "Sunday evenings" suggests routine, family, perhaps hymn-singing — a protected domestic ritual.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And hymns in the cosy parlour, the tinkling piano our guide.',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"Hymns" introduce a sacred quality to the memory. The family gathered around the piano singing hymns is a picture of Edwardian domestic piety. The piano becomes a "guide" — almost a priest leading worship.',
          color: '#a855f7',
        },
        {
          type: 'Diction',
          note: '"Cosy parlour" — "cosy" is warm, safe, small. "Parlour" is a middle-class Victorian / Edwardian room. Together they create a perfect, enclosed world of safety.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'So now it is vain for the singer to burst into clamour',
      annotations: [
        {
          type: 'Turning point',
          note: '"So now" marks a turn — the speaker returns to the present. The adult singer, with her professional voice, can no longer move him the way his mother\'s amateur playing does.',
          color: '#a855f7',
        },
        {
          type: 'Contrast',
          note: '"Clamour" is loud, dramatic — the opposite of the "softly" that opened the poem. The present-day performer is flashy; the childhood mother was gentle. Only the gentle wins.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'With the great black piano appassionato. The glamour',
      annotations: [
        {
          type: 'Key quote',
          note: '"Great black piano appassionato" is striking — the black colour, the Italian musical term "appassionato" (passionately), and the capital-P Piano all make the present-day instrument feel grand, theatrical, a bit overdone.',
          color: '#f59e0b',
        },
        {
          type: 'Juxtaposition',
          note: '"Great black piano" in the present is juxtaposed with the "tinkling piano" of childhood. One is professional and showy; the other is domestic and loving. The adult Lawrence prefers the second.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of childish days is upon me, my manhood is cast',
      annotations: [
        {
          type: 'Key quote',
          note: 'The most revealing line of the poem. "My manhood is cast" (down) — adult masculinity is defeated. He cannot maintain composure. Lawrence is writing about a crisis of manliness as much as a crisis of memory.',
          color: '#f59e0b',
        },
        {
          type: 'Tone',
          note: '"Glamour of childish days" — he is enchanted, almost bewitched. "Glamour" in older English meant magical spell. He is under a spell he cannot break.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Down in the flood of remembrance, I weep like a child for the past.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The poem\'s final line and emotional climax. "Flood of remembrance" is a metaphor of being overwhelmed — too much memory, all at once. "Weep like a child for the past" is devastating: the adult man becomes a crying child again.',
          color: '#f59e0b',
        },
        {
          type: 'Simile',
          note: '"Like a child" closes the circle — the poem began with "a child sitting under the piano" and ends with the adult weeping "like a child". He has become again what he was remembering.',
          color: '#10b981',
        },
      ],
    },
  ],

  context: `
    <h3>D.H. Lawrence (1885–1930)</h3>
    <p>David Herbert Lawrence was an English novelist, poet, essayist and painter, best known for <em>Sons and Lovers</em>, <em>Women in Love</em> and the once-banned <em>Lady Chatterley's Lover</em>. He wrote searchingly about relationships, industrial society and the body. His work is famous for its emotional honesty — Lawrence believed that emotional repression was one of the great sicknesses of modern life.</p>

    <h3>Lawrence and his mother</h3>
    <p>Lawrence had an extraordinarily close relationship with his mother, <strong>Lydia Lawrence</strong>. She was an educated, genteel woman who had married a coal-miner and was disappointed by the marriage. She pinned her hopes on her clever son. Lawrence was devoted to her and her death in 1910 was a devastating blow — he described it later as the end of his youth. His novel <em>Sons and Lovers</em> (1913) is largely about this mother–son bond.</p>

    <h3>Composition</h3>
    <p>"Piano" was first drafted around 1906–08 and rewritten several times before appearing in <em>New Poems</em> in 1918. Lawrence was famously self-critical and rewrote the poem in prose-like drafts before settling on the final version. In an earlier draft he had tried to defend his adult, artistic self against the memory — but the final version surrenders to it.</p>

    <h3>Edwardian domestic life</h3>
    <p>The "cosy parlour" with Sunday hymns around the piano is a characteristic scene of late-Victorian and <strong>Edwardian family life</strong>. Before radio and television, families often entertained themselves by singing together at the piano, particularly on Sundays after church. The piano was the emotional centre of many middle-class and aspiring working-class homes.</p>

    <h3>Masculinity and emotion</h3>
    <p>The poem is striking for how openly it admits to an adult man being overwhelmed to tears. In the Edwardian world of "stiff upper lip" masculinity, weeping in public was considered shameful. Lawrence\'s willingness to write "my manhood is cast down" — to admit that adult self-control has failed — is deeply unusual for his period.</p>
  `,

  summary: `Stanza 1 (lines 1–4): The speaker is listening to a woman singing to him in the evening. The song "takes him back" through the years until he sees a memory of himself as a young child, sitting underneath the piano while his mother played. The child pressed his mother\'s feet as she smiled and sang.

Stanza 2 (lines 5–8): The speaker resists the memory but cannot help himself. The "insidious" song "betrays" him back to childhood. His heart longs to belong again to the "old Sunday evenings at home" — winter outside, the family gathered in the cosy parlour, the piano leading them through hymns.

Stanza 3 (lines 9–12): The speaker returns to the present. The woman now performing (with a "great black piano" played passionately) cannot compete with the memory. The "glamour" — the spell — of childhood has captured him completely. His adult self ("manhood") is defeated, and he weeps "like a child for the past".

Overall meaning: The poem is about how powerfully music can unlock memory, and specifically about an adult man being overwhelmed by nostalgia for his mother and childhood. Lawrence is uncomfortable with how easily his emotional defences collapse — but he surrenders to the feeling and lets the memory win. The poem becomes a confession of grief disguised as a reflection on music.`,

  formAndStructure: `Form: Three quatrains (stanzas of four lines each), 12 lines in total. The poem looks simple and song-like — fitting for a poem about a song.

Rhyme scheme: AABB couplets throughout. The insistent pairs of rhyming couplets give the poem a steady, almost hymn-like quality — appropriate for a poem about hymns in a parlour. The rhymes are mostly full and predictable: "me / see", "strings / sings", "song / belong".

Metre: The lines are long and loose — roughly six or seven beats each — and the metre is irregular. This gives the poem a conversational, almost prose-like quality, as if the speaker is thinking aloud. The long lines also mimic the stretched-out feeling of being pulled back through time.

Three-stanza structure: Each stanza performs a distinct movement. Stanza 1 establishes the present and then dives into memory. Stanza 2 deepens into the memory and expresses the pain of longing. Stanza 3 returns to the present and admits defeat — the adult is overwhelmed by the child.

Present-past-present: The poem moves like a wave. It starts in the present ("a woman is singing to me"), dips into the past ("a child sitting under the piano"), deepens further ("the old Sunday evenings at home"), and then returns to the present ("So now it is vain…"). The return is not clean — the past has invaded the present.

Contrast: The poem is built on contrasts — softly / clamour, tinkling / appassionato, childhood / manhood, belonging / being cast down. Each pair sets the gentle past against the performative present, and the past always wins.

Enjambment: Lawrence uses enjambment (running lines into each other without punctuation) to pull the reader forward through the memory, just as the song pulls the speaker backward through time. The flow of sound mirrors the "flood of remembrance".

Volta: The soft volta comes at the start of stanza 3 ("So now it is vain…"). The tone shifts from memory back to present, and from tenderness to surrender.`,

  keyQuotes: [
    {
      quote: 'Softly, in the dusk, a woman is singing to me',
      analysis:
        'The opening line establishes the hush and the trance-like mood. "Softly" is a gentle adverb that sets the emotional volume of the whole poem — nothing is loud until stanza 3. "Dusk" is a liminal time between day and night, which mirrors the speaker\'s position between adult consciousness and childhood memory. The woman is "singing to me", not at me — it feels intimate and addressed.',
      themes: ['Memory', 'Atmosphere', 'Nostalgia'],
    },
    {
      quote: 'pressing the small, poised feet of a mother who smiles as she sings',
      analysis:
        'The poem\'s warmest, most tactile memory. The child is physically touching his mother\'s feet as she plays. "Small, poised feet" is a careful, precise image — Lawrence sees her mother as a complete person, not a generic figure. "Smiles as she sings" is a picture of pure, unguarded happiness — the thing that the adult speaker most wants to belong to again.',
      themes: ['Mother–child bond', 'Memory', 'Innocence'],
    },
    {
      quote: 'In spite of myself, the insidious mastery of song / Betrays me back',
      analysis:
        'Lawrence is wrestling with the memory. "In spite of myself" admits resistance — he does not want to feel this. "Insidious" gives the song a treacherous, almost dangerous quality. "Mastery" makes the song a master over him, the listener a helpless servant. "Betrays me back" uses "betray" in both its senses: the song is a traitor dragging him unwillingly, and it exposes the truth of what he really longs for.',
      themes: ['Resistance', 'Emotion', 'Memory'],
    },
    {
      quote: 'the heart of me weeps to belong / To the old Sunday evenings at home',
      analysis:
        'The emotional centre of the poem. Lawrence uses "the heart of me" rather than simply "I" — it feels like the weeping is happening inside him, beneath his conscious self. "To belong" is the crucial word: he does not just want to remember childhood, he wants to be back in it, to be part of it again. The longing is for belonging, not merely for the past.',
      themes: ['Nostalgia', 'Belonging', 'Home'],
    },
    {
      quote: 'the great black piano appassionato',
      analysis:
        'The present-day singer and her grand black piano are deliberately made to sound showy and theatrical. "Great" (large), "black" (dramatic) and the Italian musical term "appassionato" (passionately) all combine to give the present performance a showroom quality. The implicit contrast with the "tinkling piano" of his childhood is devastating: the professional performance cannot compete with the amateur, loving domesticity of his mother.',
      themes: ['Present vs. past', 'Performance vs. sincerity'],
    },
    {
      quote: 'my manhood is cast / Down in the flood of remembrance',
      analysis:
        'The most self-revealing line in the poem. "Manhood" is literally adult masculinity — the self-control and composure the Edwardian man was supposed to maintain. "Cast down" means struck down, defeated. The adult armour has failed. The "flood of remembrance" is a metaphor of being overwhelmed — memory as water breaking through a dam. This image of manhood "cast down" in a flood is almost biblical in scale.',
      themes: ['Masculinity', 'Loss of control', 'Grief'],
    },
    {
      quote: 'I weep like a child for the past',
      analysis:
        'The final line and the poem\'s emotional collapse. The adult speaker weeps "like a child" — the simile completes the poem\'s circle, because it began with an image of the child under the piano. He has been reduced to what he was remembering. "For the past" is the object of his grief — not any specific event, but the very state of being in the past. This is the purest expression of nostalgia in the poem.',
      themes: ['Grief', 'Nostalgia', 'Regression'],
    },
  ],

  languageDevices: [
    {
      device: 'Metaphor (memory as vista)',
      example: 'down the vista of years, till I see',
      effect:
        'Lawrence imagines memory as a long landscape view — a "vista" — opening in front of him. This turns memory into a physical space you can walk into, rather than an abstract act of thinking. It also prepares the reader for the idea that he is being pulled somewhere, not actively recalling.',
      lineRef: 1,
    },
    {
      device: 'Sibilance',
      example: 'small, poised feet… smiles as she sings',
      effect:
        'The soft, hissing "s" sounds in stanza 1 create a hushed, lullaby-like texture. Sibilance makes the memory feel tender and intimate, as if the whole scene is being whispered. The sound itself enacts the "softly" of the first word.',
      lineRef: 3,
    },
    {
      device: 'Personification of music',
      example: 'the insidious mastery of song / Betrays me back',
      effect:
        'The song is personified as a manipulative, almost malicious agent — "insidious", "mastery", "betrays". Giving music a human will lets Lawrence excuse his own loss of control: he is not being weak, he is being overpowered. It also captures how sneaky nostalgia can be.',
      lineRef: 4,
    },
    {
      device: 'Juxtaposition',
      example: 'tinkling piano (memory) vs. great black piano appassionato (present)',
      effect:
        'The two pianos are set directly against each other. "Tinkling" is light, amateur, domestic; "great black piano" is serious, theatrical, professional. The contrast makes the point that the present cannot compete with the past. The adjectives do all the work.',
      lineRef: 9,
    },
    {
      device: 'Metaphor (flood)',
      example: 'Down in the flood of remembrance',
      effect:
        'Memory is imagined as a flood that knocks him off his feet. The flood metaphor is powerful because it is uncontrollable — you cannot resist water rising. Lawrence\'s "manhood is cast down" the way a building is cast down in a real flood. The metaphor makes the collapse feel natural, not weak.',
      lineRef: 11,
    },
    {
      device: 'Circular structure',
      example: 'A child sitting under the piano… I weep like a child for the past',
      effect:
        'The poem begins with an image of the child and ends with the adult speaker returning to the same state. The circularity is the poem\'s quiet argument: time does not move in a line. Memory and music can put you back exactly where you started.',
      lineRef: 11,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems are about an adult remembering a loved, lost parent. Both speakers find themselves now carrying forward the parent\'s gentleness. Compare Lawrence\'s overwhelmed surrender with Walker\'s calmer, more reflective grief.',
    themes: ['Parent–child memory', 'Grief', 'Nostalgia'],
  },
  {
    title: 'Half-past Two',
    poet: 'U.A. Fanthorpe',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems see through a child\'s eyes. Piano remembers a warm, safe childhood; Half-past Two shows a bewildered, lonely one. Compare how each writer captures the way children experience time and adult attention.',
    themes: ['Childhood perspective', 'Memory', 'Time'],
  },
  {
    title: 'If—',
    poet: 'Rudyard Kipling',
    href: '/igcse/edexcel/poetry/if',
    reason:
      'Piano is the emotional opposite of If—. Where Kipling insists that a man must "keep his head" and never "breathe a word about your loss", Lawrence lets his "manhood" be "cast down" and weeps openly. Compare two very different models of masculine emotion.',
    themes: ['Masculinity', 'Emotion', 'Self-control'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function PianoPage() {
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
              Piano
            </h1>
            <p className="text-body-sm text-muted-foreground">
              D.H. Lawrence &middot; Edexcel IGCSE Anthology
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
          from the anthology. These are strong pairings for Piano.
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
