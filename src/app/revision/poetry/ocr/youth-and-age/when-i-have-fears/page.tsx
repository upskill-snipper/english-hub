'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const whenIHaveFears: PoemData = {
  title: 'When I Have Fears',
  poet: 'John Keats',
  lines: [
    {
      text: 'When I have fears that I may cease to be',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The poem opens with "When..." -- the first of three "When/Before" clauses that build towards the volta. Each clause introduces a different fear about dying young.',
          color: '#a855f7',
        },
        {
          type: 'Euphemism',
          note: '"Cease to be" -- a gentle phrase for "die". Keats avoids the harsh word, perhaps because saying it directly is too painful.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The poem\'s opening establishes its central tension: Keats is afraid of dying before he has accomplished what he wants to.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Before my pen has gleaned my teeming brain,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Gleaned" -- to gather grain after the harvest. Keats compares his mind to a field full of crops and his pen to a harvester. He fears dying before his pen can collect everything inside his head.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Teeming" -- full to overflowing, swarming. His brain is bursting with poetry waiting to be written down.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Before high-pilèd books, in charactery,',
      annotations: [
        {
          type: 'Imagery',
          note: '"High-pilèd books" -- great stacks of books that he has not yet written. Keats imagines all the unwritten poetry as physical books towering up. The image is ambitious: he wants a long, productive career.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Charactery" -- writing or characters (letters). An old-fashioned word that gives the line a slightly archaic, elevated tone.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Hold like rich garners the full ripened grain;',
      annotations: [
        {
          type: 'Extended metaphor',
          note: '"Garners" -- granaries (storehouses for grain). The harvesting metaphor continues: books are storehouses, holding the "full ripened grain" of his thoughts. Writing is like reaping a harvest.',
          color: '#10b981',
        },
        {
          type: 'Symbolism',
          note: 'The harvest imagery (gleaning, ripened grain, garners) connects creativity to the natural cycle of growth and gathering. Keats fears the harvest of his life will be cut short.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When I behold, upon the night\'s starred face,',
      annotations: [
        {
          type: 'Anaphora',
          note: '"When I behold" -- the second "When" clause begins. We move from his fear about poetry (quatrain 1) to a fear about wonder and inspiration (quatrain 2).',
          color: '#a855f7',
        },
        {
          type: 'Personification',
          note: '"Night\'s starred face" -- the night is given a face decorated with stars. The cosmos becomes a person looking down at him.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Huge cloudy symbols of a high romance,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Huge cloudy symbols" -- vast, indistinct shapes (perhaps cloud formations or constellations). They are symbols of "high romance" -- noble, mythic, imaginative subjects he wants to write about.',
          color: '#10b981',
        },
        {
          type: 'Romanticism',
          note: '"Romance" here means epic or chivalric stories (knights, quests, magic) -- the grand subjects of Romantic poetry. Keats sees vast story-material in the night sky.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And think that I may never live to trace',
      annotations: [
        {
          type: 'Repetition of fear',
          note: '"Never live to trace" -- the fear is repeated in a different form. Now Keats fears never being able to write down (trace) what he sees in the heavens.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Their shadows, with the magic hand of chance;',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Shadows" -- not the things themselves but their shadows. Even capturing a faint impression of the cosmic visions he sees would be beyond him if he died now.',
          color: '#10b981',
        },
        {
          type: 'Diction',
          note: '"Magic hand of chance" -- writing requires inspiration, not just effort. Keats acknowledges that creativity is partly mysterious and accidental.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And when I feel, fair creature of an hour!',
      annotations: [
        {
          type: 'Anaphora',
          note: '"And when I feel" -- the third "When" clause. We have moved from poetry (quatrain 1), to wonder (quatrain 2), to love (quatrain 3). Each fear is more personal than the last.',
          color: '#a855f7',
        },
        {
          type: 'Address',
          note: '"Fair creature of an hour" -- a sudden, intimate address to a beloved woman. "Of an hour" suggests their love is brief and fleeting.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'That I shall never look upon thee more,',
      annotations: [
        {
          type: 'Loss',
          note: '"Never look upon thee more" -- death will mean never seeing her again. The line is plain and devastating.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Never have relish in the faery power',
      annotations: [
        {
          type: 'Diction',
          note: '"Faery power" -- magical, otherworldly power. Love is described as a kind of enchantment. Keats fears losing his sense of wonder at love.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Of unreflecting love;—then on the shore',
      annotations: [
        {
          type: 'Volta',
          note: 'The dash and "then" mark the volta -- the turn. The first 11 lines built up his fears; now Keats responds to them. The remainder of the poem is his answer.',
          color: '#a855f7',
        },
        {
          type: 'Imagery',
          note: '"On the shore" -- he imagines himself standing alone at the edge of the world, between life and the great unknown.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Of the wide world I stand alone, and think',
      annotations: [
        {
          type: 'Imagery',
          note: '"Wide world" / "stand alone" -- the speaker is a tiny figure on the shore of an immense world. The image emphasises his smallness and isolation.',
          color: '#10b981',
        },
        {
          type: 'Tone shift',
          note: 'The tone shifts from anxious to contemplative. Instead of listing fears, Keats now stops to think.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Till love and fame to nothingness do sink.',
      annotations: [
        {
          type: 'Resolution',
          note: 'The poem ends with the speaker realising that, faced with the vastness of the world and death, both "love and fame" -- the very things he was afraid of losing -- become meaningless. They "sink to nothingness".',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The most famous line of the poem. Keats arrives at a paradoxical comfort: if love and fame are nothing, then losing them is no loss. This is half-resignation, half-acceptance.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Keats (1795--1821)</h3>
    <p>John Keats was one of the major English Romantic poets, alongside Wordsworth, Coleridge, Byron and Shelley. He trained as a surgeon before devoting himself to poetry. He died of tuberculosis in Rome at the age of just 25, having published only three slim volumes of poetry. Despite his brief life, he wrote some of the most celebrated poems in English literature, including "Ode to a Nightingale", "Ode on a Grecian Urn" and "To Autumn".</p>

    <h3>Composition (1818)</h3>
    <p>"When I Have Fears" was written in <strong>January 1818</strong>, when Keats was 22. It was the first sonnet he wrote in the Shakespearean form (rather than the Italian Petrarchan form he had used previously). It was not published in his lifetime; it appeared in print only after his death.</p>

    <h3>Tuberculosis and family loss</h3>
    <p>Keats had every reason to fear dying young. His mother had died of tuberculosis when he was 14, and he had nursed his younger brother Tom through the same illness (Tom died at 19, just months after this poem was written). Keats had medical training, so he could recognise the signs of TB in himself early. The fears in this poem were not abstract -- they were grounded in personal experience.</p>

    <h3>The "fair creature of an hour"</h3>
    <p>Scholars usually identify the "fair creature of an hour" in this poem as a young woman Keats had briefly met, possibly at Vauxhall Gardens. He never met his great love, Fanny Brawne, until later in 1818. The poem treats love itself as fleeting: even the ones we love most are "of an hour".</p>
  `,

  summary: `Quatrain 1 (lines 1--4): The speaker fears dying ("ceasing to be") before he can write down all the poetry that fills his "teeming brain". He uses a harvest metaphor: his thoughts are crops and his pen the harvester, and his unwritten books should be storehouses ("garners") full of "ripened grain". He fears the harvest of his mind will never be reaped.

Quatrain 2 (lines 5--8): He fears never being able to capture in words the "huge cloudy symbols" he sees in the night sky -- the vast mythic and imaginative subjects he wants to write about. Even tracing their "shadows" requires the magic of inspiration ("the magic hand of chance"), and he may not live long enough.

Quatrain 3 (lines 9--12): He addresses a "fair creature of an hour" -- a beloved woman -- and fears never seeing her again or experiencing the "faery power" of "unreflecting love" (love that does not stop to think).

Couplet (lines 12--14): The poem turns. Standing alone on the "shore / Of the wide world", Keats reflects on his fears. In the face of the vastness of the world and death, he concludes that both "love and fame" -- the things he was afraid of losing -- "sink to nothingness". This is a paradoxical comfort: if they are nothing, losing them is no loss.

Overall meaning: The poem is a young man\'s confrontation with the prospect of an early death. He lists the things he fears losing: poetry, wonder, love. But the volta brings a strange consolation -- in the face of mortality, even the most important things become small. Whether this is genuine peace or bleak resignation is left for the reader to decide.`,

  formAndStructure: `Form: A Shakespearean (English) sonnet -- 14 lines, divided into three quatrains and a final rhyming couplet, with the rhyme scheme ABAB CDCD EFEF GG. Keats deliberately chose the English form for this poem; he had previously been writing Italian (Petrarchan) sonnets.

Metre: Iambic pentameter -- ten syllables per line, with five iambs (unstressed-stressed pairs). The metre is regular but not rigid; Keats varies it slightly for emphasis.

Three quatrains, three fears: Each quatrain introduces a different fear, signalled by "When..." -- a structure called anaphora. Quatrain 1: fear of not writing his poetry. Quatrain 2: fear of not capturing his cosmic visions. Quatrain 3: fear of losing love. The fears progress from public (poetry, fame) to private (love).

Volta: The traditional sonnet "turn" comes at line 12 -- "—then on the shore". The dash is dramatic: it physically marks the moment when Keats stops piling up fears and begins to respond to them. After the turn, the tone shifts from anxious to contemplative.

Closing couplet: The final two lines deliver the resolution. Like all Shakespearean sonnets, the couplet provides a punchy summary of the argument. Keats arrives at a paradoxical comfort: in the face of vastness and death, "love and fame to nothingness do sink".

Extended metaphor: Quatrain 1 contains a sustained agricultural metaphor -- gleaning, books as garners, ripened grain. This makes the writing of poetry feel like a natural, organic process that requires time to mature.

Tone: The poem moves from anxious anticipation to a kind of weary, contemplative acceptance. The tone never becomes peaceful, but it does become resigned.`,

  keyQuotes: [
    {
      quote: 'When I have fears that I may cease to be',
      analysis:
        'The opening line states the central anxiety simply. "Cease to be" is a gentle euphemism -- Keats cannot bring himself to say "die" outright. The simplicity of the line makes it feel intimate, almost confessional.',
      themes: ['Mortality', 'Fear', 'Self-confession'],
    },
    {
      quote: 'Before my pen has gleaned my teeming brain',
      analysis:
        'A vivid agricultural metaphor: his brain is a field full of grain ("teeming") and his pen is the harvester ("gleaning" means to pick up grain after a harvest). His fear is that he will die before all his poetry can be reaped. The image makes creativity feel organic and natural -- and finite.',
      themes: ['Creativity', 'Unfulfilled potential', 'Time'],
    },
    {
      quote: 'high-pilèd books, in charactery, / Hold like rich garners the full ripened grain',
      analysis:
        'The harvest metaphor is sustained: books are "garners" (granaries) and his thoughts are "ripened grain". The image of "high-pilèd books" suggests vast literary ambition -- he imagines a long career producing many volumes. He fears never building that pile.',
      themes: ['Ambition', 'Creativity', 'Harvest imagery'],
    },
    {
      quote: 'Huge cloudy symbols of a high romance',
      analysis:
        'A characteristically Romantic image. "Huge" and "cloudy" make the symbols vague and vast; "high romance" elevates them to noble, mythic subjects. Keats sees the night sky as a great book of stories he has not yet written. He fears never being able to translate those visions into words.',
      themes: ['Wonder', 'Inspiration', 'Romantic imagination'],
    },
    {
      quote: 'fair creature of an hour',
      analysis:
        'A sudden, intimate address to a beloved woman. "Of an hour" suggests their love is brief, fleeting -- a single hour\'s connection. The phrase is bittersweet: he treasures her, but he knows the love cannot last. Love itself is mortal, just like he is.',
      themes: ['Love', 'Brevity', 'Mortality'],
    },
    {
      quote: 'on the shore / Of the wide world I stand alone, and think / Till love and fame to nothingness do sink',
      analysis:
        'The poem\'s closing image and resolution. The speaker stands alone on the edge of the world, contemplating its vastness. The famous final line concludes that, faced with mortality, even "love and fame" become nothing. This is paradoxical: it could be read as peaceful (his fears were misplaced) or bleak (everything is meaningless). Keats leaves the ambiguity for the reader.',
      themes: ['Resolution', 'Insignificance', 'Meaninglessness'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'When I have fears... / When I behold... / And when I feel...',
      effect:
        'Each quatrain begins with "When" or "And when". This builds a structured list of fears, each more personal than the last. The repetition gives the poem a rhetorical, building quality, like a series of waves rising before they break at the volta.',
      lineRef: 0,
    },
    {
      device: 'Extended metaphor',
      example: 'gleaned... teeming brain... high-pilèd books... rich garners... ripened grain',
      effect:
        'Quatrain 1 sustains a single agricultural metaphor across four lines. Writing becomes harvesting; the brain becomes a field; books become granaries. The metaphor makes creativity feel organic and natural -- and shows how much labour is required to bring it to fruition.',
      lineRef: 1,
    },
    {
      device: 'Personification',
      example: 'night\'s starred face',
      effect:
        'The night is given a face, decorated with stars. This transforms the cosmos into a watching presence. By giving the night a face, Keats makes the universe feel personal and animate.',
      lineRef: 4,
    },
    {
      device: 'Volta',
      example: '—then on the shore',
      effect:
        'The dash creates a dramatic break. After 11 lines of building fears, the poem suddenly turns. The volta marks the moment when Keats stops listing his anxieties and tries to come to terms with them.',
      lineRef: 11,
    },
    {
      device: 'Imagery (visual)',
      example: 'on the shore / Of the wide world I stand alone',
      effect:
        'The closing image places the speaker on a beach, alone, gazing at vast distances. He becomes a tiny figure at the edge of an immense world. The visual emphasises his insignificance and isolation.',
      lineRef: 12,
    },
    {
      device: 'Diction',
      example: 'cease to be',
      effect:
        'Keats avoids the word "die" throughout the poem, using gentler phrases like "cease to be". The euphemism softens the harshness but also reveals how difficult it is for him to face his mortality directly.',
      lineRef: 0,
    },
    {
      device: 'Iambic pentameter',
      example: 'the entire sonnet',
      effect:
        'The regular ten-syllable lines give the poem a measured, controlled quality. Even when the speaker is afraid, the metre remains steady -- Keats is in control of the form even as he confronts the loss of control over his own life.',
      lineRef: 0,
    },
  ],
}

const comparisons = [
  {
    title: 'Crossing the Bar',
    poet: 'Alfred Lord Tennyson',
    href: '/revision/poetry/ocr/youth-and-age/crossing-the-bar',
    reason:
      'The perfect contrast: Keats fears dying young before his work is done; Tennyson, in old age, welcomes death calmly. Both poems face mortality, but from opposite ends of life and with opposite emotions.',
    themes: ['Mortality', 'Acceptance vs fear', 'Faith'],
  },
]

export default function WhenIHaveFearsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/youth-and-age" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Youth and Age
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">When I Have Fears</h1>
            <p className="text-body-sm text-muted-foreground">
              John Keats &middot; Youth and Age cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">OCR</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="When I Have Fears"
        textType="poem"
        examBoard="OCR"
        cluster="Youth and Age"
        variant="compact"
      />
      <InteractivePoemViewer poem={whenIHaveFears} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;When I Have Fears&rdquo; is in the public domain. All annotations
          and critical commentary on this page are original to english-hub and are provided for
          private study and educational purposes under the fair dealing provisions of the
          Copyright, Designs and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for the OCR Youth and Age cluster.
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
    </div>
  )
}
