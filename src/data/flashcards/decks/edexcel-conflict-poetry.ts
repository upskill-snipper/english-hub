// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-conflict-poetry',
  title: 'Edexcel Poetry Anthology - Conflict',
  description:
    '15 poems from the Edexcel Conflict poetry collection with key quotes, themes, and techniques',
  category: 'Literature',
  board: 'Edexcel',
  cards: [
    {
      id: 'ecp-1',
      front: 'A Poison Tree - William Blake',
      back: `Key quote: "I was angry with my friend: / I told my wrath, my wrath did end"\n\nThemes: Suppressed anger, revenge, duplicity, consequences of bottled emotion.\n\nTechniques: Extended metaphor (anger as a growing tree), antithesis (friend vs foe), simple AABB rhyme (nursery-rhyme tone = sinister), biblical allusion (Tree of Knowledge, Garden of Eden).\n\nCompare with: Catrin (personal conflict), Half-caste (anger expressed openly).`,
    },
    {
      id: 'ecp-2',
      front: 'The Destruction of Sennacherib - Lord Byron',
      back: `Key quote: "The Assyrian came down like the wolf on the fold, / And his cohorts were gleaming in purple and gold"\n\nThemes: Power of God vs power of man, futility of war, destruction of armies.\n\nTechniques: Anapaestic metre (galloping rhythm = cavalry charge), simile ("like the wolf on the fold"), colour imagery (purple/gold = pride; then death), biblical source (II Kings).\n\nCompare with: The Charge of the Light Brigade (doomed military action), Exposure (war\'s destruction).`,
    },
    {
      id: 'ecp-3',
      front: 'Extract from The Prelude - William Wordsworth',
      back: `Key quote: "A huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head"\n\nThemes: Man vs nature, power of nature, loss of innocence, sublime terror.\n\nTechniques: Blank verse, personification of the mountain, contrast between confidence and fear, volta when the peak appears, enjambment creating momentum of fear.\n\nCompare with: Exposure (nature as hostile force), A Poison Tree (internal conflict).`,
    },
    {
      id: 'ecp-4',
      front: 'The Man He Killed - Thomas Hardy',
      back: `Key quote: "Yes; quaint and curious war is! / You shoot a fellow down / You\'d treat, if met where any bar is"\n\nThemes: Futility of war, class and conflict, shared humanity of enemies, senselessness of killing.\n\nTechniques: Dramatic monologue, colloquial language, caesura and dashes (hesitation = guilt), ironic understatement ("quaint and curious"), regular ballad metre (simple form for complex ideas).\n\nCompare with: What Were They Like? (questioning war), Exposure (soldiers\' suffering).`,
    },
    {
      id: 'ecp-5',
      front: 'Cousin Kate - Christina Rossetti',
      back: `Key quote: "Why did a great lord find me out, / And praise my flaxen hair?"\n\nThemes: Betrayal, sexual exploitation, class and gender, fallen women, power imbalance.\n\nTechniques: Ballad form, rhetorical questions, contrast between speaker and Kate, bitter tone, the child as "gift" vs "shame," defiant final stanza.\n\nCompare with: My Last Duchess (power and gender), The Class Game (class conflict).`,
    },
    {
      id: 'ecp-6',
      front: 'Exposure - Wilfred Owen',
      back: `Key quote: "Our brains ache, in the merciless iced east winds that knive us"\n\nThemes: Suffering of soldiers, futility of war, nature as enemy, hopelessness.\n\nTechniques: Para-rhyme (half-rhyme creates unease), personification of wind, sibilance, repeated refrain "But nothing happens" (anti-climax = pointlessness), present tense (immediacy).\n\nCompare with: The Charge of the Light Brigade (war experience), The Destruction of Sennacherib (war\'s devastation).`,
    },
    {
      id: 'ecp-7',
      front: 'The Charge of the Light Brigade - Alfred, Lord Tennyson',
      back: `Key quote: "Into the valley of Death / Rode the six hundred"\n\nThemes: Bravery, obedience, futility of war, honour, military blunder.\n\nContext: Battle of Balaclava, 25 October 1854 (Crimean War). A miscommunicated order sent ~670 cavalrymen against Russian artillery; ~110 killed, 161 wounded. Tennyson, then Poet Laureate, wrote the poem within weeks of reading the Times report.\n\nTechniques: Anapaestic dimeter with a dactylic refrain ("Rode the six hundred") - galloping rhythm; end-stopped lines; repetition ("six hundred"); biblical allusion ("valley of Death" = Psalm 23); anaphora ("Cannon to right... left... behind"); heroic tone despite tragedy.\n\nCompare with: The Destruction of Sennacherib (doomed forces), Exposure (contrasting tone about war).`,
    },
    {
      id: 'ecp-8',
      front: 'Half-caste - John Agard',
      back: `Key quote: "Explain yuself / wha yu mean / when yu say half-caste"\n\nThemes: Racial identity, prejudice, challenging stereotypes, pride, anger at ignorance.\n\nTechniques: Phonetic spelling (Caribbean dialect), imperative verbs ("Explain yuself"), extended metaphors (Picasso, Tchaikovsky), humour and sarcasm to expose absurdity, lack of punctuation (defiance of convention).\n\nCompare with: No Problem (racial prejudice), The Class Game (identity and prejudice).`,
    },
    {
      id: 'ecp-9',
      front: 'Catrin - Gillian Clarke',
      back: `Key quote: "I can remember you, child, / As I stood in a hot, white room"\n\nThemes: Parent-child conflict, love and separation, the struggle for independence, enduring bond.\n\nTechniques: Extended metaphor ("the tight, red rope" = umbilical cord and ongoing connection), two-stanza structure (birth / present day), enjambment, oxymoron of love and conflict ("our first fierce confrontation").\n\nCompare with: Nettles (from Relationships - parent-child love), A Poison Tree (personal conflict).`,
    },
    {
      id: 'ecp-10',
      front: 'War Photographer - Satyamurti',
      back: `Key quote: "The next one shows a boy / about his age"\n\nThemes: Impact of war on civilians, desensitisation, guilt, distance between war zones and comfortable life.\n\nTechniques: Third-person narrator, contrast between domestic comfort and war zone, child\'s perspective, understatement, the photograph as a bridge between two worlds.\n\nCompare with: Poppies (impact of war at home), What Were They Like? (civilian suffering).`,
    },
    {
      id: 'ecp-11',
      front: 'Belfast Confetti - Ciaran Carson',
      back: `Key quote: "Suddenly as the riot squad moved in it was raining exclamation marks!"\n\nThemes: The Troubles in Northern Ireland, urban conflict, confusion, language as violence.\n\nTechniques: Extended metaphor (punctuation as weaponry - "nuts, bolts, nails" become "exclamation marks"), fragmented syntax mirrors chaos, rhetorical questions showing disorientation, street names as labyrinth.\n\nCompare with: Exposure (being trapped in conflict), Poppies (personal impact of war).`,
    },
    {
      id: 'ecp-12',
      front: 'The Class Game - Mary Casey',
      back: `Key quote: "How can you tell what class I\'m from? / I can tell what class you\'re from"\n\nThemes: Class conflict, identity, prejudice, pride in working-class roots.\n\nTechniques: Direct address, rhetorical questions, phonetic spelling of accent, contrast between "posh" and working-class markers, defiant and confrontational tone, listing.\n\nCompare with: Half-caste (identity and prejudice), Cousin Kate (class and power).`,
    },
    {
      id: 'ecp-13',
      front: 'Poppies - Jane Weir',
      back: `Key quote: "I traced the rims of his poppies / and leaned against the war memorial"\n\nThemes: Mother\'s grief, loss, conflict\'s impact on families, memory, letting go.\n\nTechniques: Sensory imagery (touch, texture), domestic and military language juxtaposed, symbolism of poppies, time shifts between past and present, first-person maternal voice.\n\nCompare with: War Photographer (impact of conflict), Catrin (parent-child bond).`,
    },
    {
      id: 'ecp-14',
      front: 'No Problem - Benjamin Zephaniah',
      back: `Key quote: "I am not de problem / But I bear de brunt"\n\nThemes: Racism, resilience, identity, Black British experience, defiance.\n\nTechniques: Phonetic spelling (Caribbean dialect), repetition ("I am not de problem"), direct address, reggae-influenced rhythm, positive and assertive tone despite injustice.\n\nCompare with: Half-caste (racial identity), The Class Game (fighting prejudice).`,
    },
    {
      id: 'ecp-15',
      front: 'What Were They Like? - Denise Levertov',
      back: `Key quote: "Did the people of Viet Nam / use lanterns of stone?"\n\nThemes: Vietnam War, destruction of culture, loss of identity, anti-war protest.\n\nTechniques: Q&A structure (questions then answers), past tense ("It is not remembered"), contrast between cultural beauty and destruction, elegiac tone, numbering dehumanises (like a report).\n\nCompare with: War Photographer (civilian suffering), The Man He Killed (questioning war).`,
    },
  ],
}

export default deck
