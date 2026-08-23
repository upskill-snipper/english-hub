// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-igcse-poetry',
  title: 'Edexcel IGCSE Poetry Anthology',
  description: '16 poems from the Edexcel IGCSE anthology with key quotes, themes, and techniques',
  category: 'Literature',
  board: 'Edexcel',
  cards: [
    {
      id: 'eig-1',
      front: 'If-- - Rudyard Kipling',
      back: `Key quote: "If you can keep your head when all about you / Are losing theirs and blaming it on you"\n\nThemes: Stoicism, masculinity, moral integrity, resilience, self-control.\n\nTechniques: Anaphora ("If you can"), conditional structure (entire poem is one sentence), second-person address ("you"), iambic pentameter, the final reward - "you\'ll be a Man, my son!" - capitalised "Man" as ideal.\n\nCompare with: Do not go gentle (defiance), Prayer Before Birth (what life demands).`,
    },
    {
      id: 'eig-2',
      front: 'Prayer Before Birth - Louis MacNeice',
      back: `Key quote: "I am not yet born; O hear me"\n\nThemes: Fear of the modern world, loss of identity, plea for protection, corruption of innocence.\n\nTechniques: Dramatic monologue (unborn child speaks), anaphora ("I am not yet born"), lines get longer (growing dread), imperative pleas, final short line "Let them not make me a stone" - fear of dehumanisation.\n\nCompare with: If-- (preparing for life), Half-past Two (child\'s perspective).`,
    },
    {
      id: 'eig-3',
      front: 'Blessing - Imtiaz Dharker',
      back: `Key quote: "The skin cracks like a pod. / There never is enough water"\n\nSetting: A slum in Mumbai (then Bombay), India - NOT Africa. Dharker is a Pakistani-born British poet; raised in Glasgow; divides time between London and Mumbai.\n\nThemes: Poverty, water as precious resource, community, joy in scarcity, spiritual blessing.\n\nTechniques: Simile ("cracks like a pod"), onomatopoeia ("splash," "rush"), enjambment (flowing like water), short opening stanza (drought) vs long third stanza (abundance), religious connotation of "blessing."\n\nCompare with: Search For My Tongue (cultural identity), Poem at Thirty-Nine (what we value).\n\n© Bloodaxe Books - fair-dealing extract.`,
    },
    {
      id: 'eig-4',
      front: 'Search For My Tongue - Sujata Bhatt',
      back: `Key quote: "You ask me what I mean by saying I have lost my tongue"\n\nThemes: Cultural identity, bilingualism, mother tongue vs adopted language, belonging.\n\nTechniques: Extended metaphor (tongue = language and identity), Gujarati script in the middle section, the mother tongue "grows back" like a plant - organic imagery, direct address, code-switching.\n\nCompare with: Half-caste (identity and language), Blessing (cultural roots).`,
    },
    {
      id: 'eig-5',
      front: 'Half-past Two - U. A. Fanthorpe',
      back: `Key quote: "He knew a lot of time: he knew Gettinguptime, Timeyougotobed time"\n\nThemes: Childhood innocence, adult authority, time as abstract concept, imagination.\n\nTechniques: Compound words ("Gettinguptime") reflecting child\'s understanding, third person, contrast between child\'s fluid time and adult clock-time, the child escapes "into the forever of not-being-there."\n\nCompare with: Piano (childhood memory), Hide and Seek (child\'s experience).`,
    },
    {
      id: 'eig-6',
      front: 'Piano - D. H. Lawrence',
      back: `Key quote: "Softly, in the dusk, a woman is singing to me; / Taking me back down the vista of years"\n\nThemes: Nostalgia, childhood, memory, loss of innocence, the power of music.\n\nTechniques: Sibilance ("softly," "singing"), sensory imagery, enjambment, contrast between present (woman singing) and past (mother at piano), the speaker "weeps like a child" - unable to resist memory.\n\nCompare with: Poem at Thirty-Nine (remembering a parent), Half-past Two (childhood perspective).`,
    },
    {
      id: 'eig-7',
      front: 'Hide and Seek - Vernon Scannell',
      back: `Key quote: "Call out. Call out. / The bushes hold their breath"\n\nThemes: Childhood games, isolation, abandonment, loss of innocence, growing up.\n\nTechniques: Second-person address ("you"), imperative verbs, personification ("bushes hold their breath"), shift from excitement to fear, the child is "found" too late - metaphor for being left behind.\n\nCompare with: Half-past Two (childhood experience), Piano (innocence and loss).`,
    },
    {
      id: 'eig-8',
      front: 'Sonnet 116 - William Shakespeare',
      back: `Key quote: "Let me not to the marriage of true minds / Admit impediments"\n\nThemes: Eternal love, constancy, love\'s endurance through hardship and time.\n\nTechniques: Shakespearean sonnet (ABAB CDCD EFEF GG), metaphor ("star to every wandering bark" = guiding light), personification of Time with "his bending sickle," negative definitions (love is defined by what it is NOT), final couplet as logical proof.\n\nCompare with: La Belle Dame sans Merci (contrasting love), Do not go gentle (defiance).`,
    },
    {
      id: 'eig-9',
      front: 'La Belle Dame sans Merci - John Keats',
      back: `Key quote: "O what can ail thee, knight-at-arms, / Alone and palely loitering?"\n\nThemes: Destructive love, enchantment, isolation, supernatural power, death-like state.\n\nTechniques: Ballad form, archaic diction, supernatural imagery ("faery\'s child"), cyclical structure, the knight is left "On the cold hill\'s side" - stripped of vitality.\n\nCompare with: Sonnet 116 (contrasting view of love), My Last Duchess (love and power).\n\nVersion note: The Edexcel IGCSE anthology uses the 1820 "Indicator" version of the poem (the one quoted above, with "knight-at-arms"). Some online sources reproduce Keats\'s 1848 (Milnes) revision, which uses "wretched wight" instead. Always quote from the anthology version when answering Edexcel questions.`,
    },
    {
      id: 'eig-10',
      front: 'Poem at Thirty-Nine - Alice Walker',
      back: `Key quote: "How I miss my father. / I wish he had not been / so tired"\n\nThemes: Grief, father-daughter relationship, inheritance of values, growing into a parent\'s likeness.\n\nTechniques: Free verse, short lines (reflective, measured tone), repetition ("He taught me"), enjambment, present tense mixed with past (father lives on through her), celebratory ending - "He would have grown / to admire / the woman I\'ve become."\n\nCompare with: Piano (remembering a parent), Half-past Two (adult reflecting on childhood).`,
    },
    {
      id: 'eig-11',
      front: 'War Photographer - Carol Ann Duffy',
      back: `Key quote: "In his dark room he is finally alone / with spools of suffering set out in ordered rows"\n\nThemes: War\'s impact, guilt, desensitisation of society, the gap between conflict and comfort.\n\nTechniques: Sibilance ("spools of suffering"), regular stanzas (photographer imposing order on chaos), contrast between "Rural England" and war zones, metaphor - "a stranger\'s features / faintly start to twist before his eyes" - the image developing mirrors guilt emerging.\n\nCompare with: The Tyger (questioning creation/destruction), Do not go gentle (defiance against suffering).`,
    },
    {
      id: 'eig-12',
      front: 'The Tyger - William Blake',
      back: `Key quote: "Tyger Tyger, burning bright, / In the forests of the night"\n\nThemes: Creation, good vs evil, awe, the sublime, questioning God.\n\nTechniques: Trochaic metre (hammering rhythm = the forge), rhetorical questions throughout (no answers = mystery), symbolism (Tyger = power/evil, Lamb = innocence/good), alliteration, industrial imagery ("hammer," "chain," "furnace").\n\nCompare with: Prayer Before Birth (questioning existence), Blessing (spiritual themes).`,
    },
    {
      id: 'eig-13',
      front: 'My Last Duchess - Robert Browning',
      back: `Key quote: "She had / A heart - how shall I say? - too soon made glad"\n\nThemes: Power, control, jealousy, patriarchy, art and possession.\n\nTechniques: Dramatic monologue, iambic pentameter with enjambment (Duke\'s conversational control), the pause "how shall I say?" = calculated menace, the painting as ultimate possession - "the curtain I have drawn for you."\n\nCompare with: Sonnet 116 (contrasting views of love), The Tyger (power).`,
    },
    {
      id: 'eig-14',
      front: 'Half-caste - John Agard',
      back: `Key quote: "Explain yuself / wha yu mean / when yu say half-caste"\n\nThemes: Racial identity, challenging prejudice, pride, absurdity of racial labels.\n\nTechniques: Phonetic Caribbean dialect, imperative verbs, extended metaphors (Picasso\'s art, Tchaikovsky\'s music, English weather), humour and irony to dismantle prejudice, lack of standard punctuation = defiance.\n\nCompare with: Search For My Tongue (identity and language), The Tyger (challenging assumptions).`,
    },
    {
      id: 'eig-15',
      front: 'Do not go gentle into that good night - Dylan Thomas',
      back: `Key quote: "Do not go gentle into that good night. / Rage, rage against the dying of the light"\n\nThemes: Death, defiance, father-son relationship, fighting against mortality.\n\nTechniques: Villanelle form (repeated refrains = obsessive plea), metaphor (night = death, light = life), imperative verbs ("rage"), catalogue of men (wise, good, wild, grave) who all resist death, final stanza addressed directly to his father.\n\nCompare with: Remember (attitudes to death), If-- (strength in adversity).`,
    },
    {
      id: 'eig-16',
      front: 'Remember - Christina Rossetti',
      back: `Key quote: "Remember me when I am gone away, / Gone far away into the silent land"\n\nThemes: Death, memory, love, letting go, acceptance.\n\nTechniques: Petrarchan sonnet, euphemism ("gone away," "silent land" = death), volta at line 9 (shift from "remember" to "forget"), imperative softening to permission - "Better by far you should forget and smile / Than that you should remember and be sad."\n\nCompare with: Do not go gentle (contrasting attitude to death), Poem at Thirty-Nine (memory of loved ones).`,
    },
  ],
}

export default deck
