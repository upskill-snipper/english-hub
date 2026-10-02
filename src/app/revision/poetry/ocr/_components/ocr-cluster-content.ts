import type { OcrClusterSlug } from '@/lib/board/ocr-anthology'

/**
 * What the OCR cluster pages say about each poem, kept apart from the
 * component so that a-poem-board-claim-is-true.test.ts can read it without
 * rendering anything. The poem list itself is OCR's, in ocr-anthology.ts; the
 * test holds these maps to it, so a hook for a poem OCR does not set, or a set
 * poem with no hook, fails the suite.
 */

/** One line on each poem. For the 2022 additions it follows OCR's own teacher guide. */
export const OCR_POEM_HOOKS: Record<string, string> = {
  // Love and Relationships
  'A Song':
    'A woman whose lover has little to give would gladly share his frugal meal and humble cottage, so long as she shares them with him.',
  'Bright Star':
    'Keats longs to be as constant as a star, not keeping lonely watch over the world but held for ever close to the one he loves.',
  Now: 'A lover asks for the whole of a life to be gathered into one intense moment.',
  'Love and Friendship':
    'Love is a wild rose that blooms and fades; friendship is the holly that stays green through the winter.',
  'Love After Love':
    'After a relationship ends, the speaker promises that you will learn to welcome back, and love, the self you neglected.',
  'Morning Song':
    'A mother responds to her newborn child, moving from a sense of strangeness towards tenderness in the night feeds.',
  "I Wouldn't Thank You for a Valentine":
    "A witty refusal of Valentine's Day clichés, from red roses to singing telegrams.",
  'In Paris With You':
    'A speaker recovering from heartbreak turns down the romantic sights of Paris and wants only the person beside them.',
  'Warming Her Pearls':
    "A maid who wears her mistress's pearls to warm them reveals a longing that crosses the divide of class.",
  'Dusting the Phone':
    'Waiting for a lover to call, the speaker cleans and watches the phone, caught between hope and dread.',
  'Looking at Your Hands':
    'A protest poem addressed to a friend, in which personal commitment and solidarity with protesting sugar plantation workers in British Guiana go together.',
  'Poem for My Love':
    "A late poem, published after Jordan's death, that finds calm and peace in the arms of the beloved.",
  Flirtation:
    'The start of a relationship, perhaps not a serious one, in which sensuous images say what words do not need to.',
  'The Perseverance':
    "Named after the pub where his father drank, the poem weighs a son's love for an alcoholic father and the patience it asks of him.",
  Lullaby:
    "Addressed to the poet's sister, the poem imagines their dead parents waking and meeting to dance all night.",

  // Conflict
  Envy: 'A gentle lesson in contentment: a rose-tree cannot bear violets or lilies, and would fret in vain if it tried.',
  'Boat Stealing (from 1799 Prelude)':
    'A boy takes a boat at night and rows out across a lake until a huge peak seems to stride after him, leaving him troubled for days.',
  'The Destruction of Sennacherib':
    'The Assyrian army besieging Jerusalem is destroyed in a single night by the Angel of Death.',
  "There's a Certain Slant of Light":
    'Winter afternoon light brings the speaker an inward, wordless despair.',
  Vergissmeinnicht:
    'Soldiers return to a battlefield and find a dead enemy soldier with a photograph of his girl, inscribed Vergissmeinnicht: forget me not.',
  'What Were They Like?':
    'Questions and answers about the people of Vietnam, whose way of life the war has destroyed.',
  Lament:
    'An elegy for the creatures and people harmed by the Gulf War of 1991, from the green turtle to the cormorant.',
  Flag: 'Question and answer show how a mere piece of cloth can command loyalty, courage and bloodshed.',
  'Honour Killing':
    'A woman takes off, one by one, the coverings she has been made to wear, to find what is left of herself.',
  Partition:
    'At nineteen, a young woman hears from her garden the cries of people stranded at Ahmedabad railway station during Partition.',
  'Colonization in Reverse':
    "A comic, ironic view of the Windrush generation's arrival in England as colonisation turned the other way round.",
  'Papa-T':
    "The poet remembers his grandfather reciting Tennyson's The Charge of the Light Brigade, the Victorian battle mixed up with the Guyanese jungle.",
  'We Lived Happily during the War':
    'A confession by people who lived comfortably and did nothing while their country made war on others.',
  Thirteen:
    'Addressed to a boy who has just turned thirteen, the poem sets the future once promised him against the prejudice he now meets.',
  'Songs for the People':
    'An abolitionist poet asks for songs that would silence the discord of battle and wrong with a music of peace.',

  // Youth and Age
  'Holy Thursday':
    "Charity children walk two and two into St Paul's Cathedral to sing, watched over by the guardians of the poor.",
  'The Bluebell': "A bluebell brings back the poet's childhood, in a memory both sweet and sad.",
  'Midnight on the Great Western':
    'A boy travels alone on a night train with a key round his neck, towards the "world unknown" that gives the anthology its title.',
  'Out, Out-':
    'A boy cutting wood with a buzz saw loses his hand and his life, and those around him turn back to their own affairs.',
  'Baby Song': 'A newborn speaks, wishing it could be put back where it was warm, in the womb.',
  "You're": "A playful run of images addressed to the poet's unborn child.",
  'Cold Knap Lake':
    'The poet remembers her mother bringing a drowned girl back to life at a lake, and wonders how far memory can be trusted.',
  'My First Weeks':
    'Wondering what she is like underneath, the speaker imagines her own first two weeks of life.',
  "Venus's-flytraps":
    "A five-year-old's voice, wandering through a field, mixes innocence with things the child only half understands.",
  Love: 'A new mother meets her baby son as a kind she has never met before, with a love that overwhelms her.',
  'Theme for English B':
    'Asked by his instructor for a page that is true, the only Black student in his class asks who he is, and what he shares with his white teacher.',
  'Happy Birthday Moon':
    'A father patiently teaches his deaf son to read and say his own name, in a circling form that mirrors the learning.',
  Prayer:
    "Kunial links his own birth to his mother's death, alluding to the seventeenth-century poet George Herbert.",
  'Tea With Our Grandmothers':
    "Addressed to a friend, the poem honours both their grandmothers, from Somalia to Wales, in the grandmothers' own languages.",
  Equilibrium:
    "The poet remembers her brother's birth and naming ceremony as markers of her grandfather's decline: the balance of birth and death.",
}

/** Where the site has a study page for a poem OCR sets. The test checks each exists. */
export const OCR_STUDY_PAGES: Record<string, { href: string; whereKey: string }> = {
  'The Destruction of Sennacherib': {
    href: '/revision/poetry/edexcel/conflict/the-destruction-of-sennacherib',
    whereKey: 'poetry_hub.ocr.on_edexcel_pages',
  },
  'Out, Out-': {
    href: '/igcse/edexcel/poetry/out-out',
    whereKey: 'poetry_hub.ocr.on_igcse_pages',
  },
}

/**
 * Pages filed under OCR that are not OCR set poems. They are kept, and labelled
 * as what they are: wider reading, which OCR's specification asks for, because
 * part (a) of the exam sets a poem the student has not seen.
 */
export const OCR_WIDER_READING: Record<
  OcrClusterSlug,
  { title: string; poet: string; href: string; noteKey: string }[]
> = {
  'love-and-relationships': [
    {
      title: 'She Walks in Beauty',
      poet: 'Lord Byron',
      href: '/revision/poetry/ocr/love-and-relationships/she-walks-in-beauty',
      noteKey: 'poetry_hub.ocr.wider.edexcel_relationships',
    },
    {
      title: 'She Dwelt Among the Untrodden Ways',
      poet: 'William Wordsworth',
      href: '/revision/poetry/ocr/love-and-relationships/she-dwelt-among-the-untrodden-ways',
      noteKey: 'poetry_hub.ocr.wider.not_in_anthology',
    },
    {
      title: 'Neutral Tones',
      poet: 'Thomas Hardy',
      href: '/revision/poetry/ocr/love-and-relationships/neutral-tones',
      noteKey: 'poetry_hub.ocr.wider.aqa_and_edexcel',
    },
  ],
  conflict: [],
  'youth-and-age': [
    {
      title: 'When I Have Fears',
      poet: 'John Keats',
      href: '/revision/poetry/ocr/youth-and-age/when-i-have-fears',
      noteKey: 'poetry_hub.ocr.wider.removed_2022',
    },
    {
      title: 'Crossing the Bar',
      poet: 'Alfred Lord Tennyson',
      href: '/revision/poetry/ocr/youth-and-age/crossing-the-bar',
      noteKey: 'poetry_hub.ocr.wider.not_in_anthology',
    },
  ],
}
