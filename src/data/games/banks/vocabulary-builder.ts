import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Vocabulary Builder: choose the definition of a word used in GCSE English,
 * from four. A word answered wrongly comes back at the end of the round.
 *
 * Moved out of src/app/games/vocabulary-builder/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Two
 * distractors were defensible definitions of their own word, so a student who
 * knew the word well could be marked wrong for it:
 *
 *   - Anachronism offered "An old-fashioned word that has fallen out of use".
 *     That is an archaism, but dictionaries also define an anachronism as a
 *     thing that is old-fashioned or out of date. It is now "A newly invented
 *     word not yet in common use", a neologism.
 *   - Sanguine offered "Relating to blood or the circulatory system". Sanguine
 *     comes from the Latin for blood, and dictionaries still give "blood-red"
 *     among its meanings. It is now "Deeply jealous of the success of other
 *     people". (The old one was also shorter than the page's own length guard
 *     allows; the new one is within it.)
 *
 * The words, their definitions and the other 154 distractors are unchanged.
 */

export interface VocabWord {
  word: string
  definition: string
  distractors: string[]
}

export const VOCAB_BANK: VocabWord[] = [
  {
    word: 'Ambiguity',
    definition: 'Having more than one possible meaning or interpretation',
    distractors: [
      'Expressing a single firmly held viewpoint',
      'A figure of speech comparing two unlike things',
      'An error in the rules of grammar or syntax',
    ],
  },
  {
    word: 'Juxtaposition',
    definition: 'Placing two things side by side for striking contrast',
    distractors: [
      'A pause or break used for dramatic emphasis',
      'The deliberate repetition of consonant sounds',
      'A concluding paragraph that summarises ideas',
    ],
  },
  {
    word: 'Ominous',
    definition: 'Giving the impression something bad is about to happen',
    distractors: [
      'Producing an extremely loud and forceful sound',
      'Filled with overwhelming joy and excitement',
      'Relating to events from a much earlier era',
    ],
  },
  {
    word: 'Didactic',
    definition: 'Intended to teach or instruct, especially morally',
    distractors: [
      'Closely related to the conventions of drama',
      'Extremely detailed and rich in description',
      'Lacking any obvious display of emotion',
    ],
  },
  {
    word: 'Pathos',
    definition: 'A quality in writing that evokes pity or sadness',
    distractors: [
      'A feeling of anger or simmering frustration',
      'A carefully reasoned and logical argument',
      'A humorous moment used to ease tension',
    ],
  },
  {
    word: 'Connotation',
    definition: 'An idea or feeling that a word invokes beyond its literal meaning',
    distractors: [
      'The dictionary definition of a word in its plainest sense',
      'A particular type of sentence structure used for emphasis',
      'A figure of speech that compares two unlike things directly',
    ],
  },
  {
    word: 'Denotation',
    definition: 'The literal or dictionary definition of a word',
    distractors: [
      'The emotional associations a word carries with it',
      'A dramatic device used to heighten audience tension',
      'A specific paragraph structure used in formal writing',
    ],
  },
  {
    word: 'Allegory',
    definition: 'A story with a hidden moral or political meaning',
    distractors: [
      'A pattern of rhyme used at the ends of lines',
      'A detailed description of a character’s appearance',
      'A short poem written about everyday life',
    ],
  },
  {
    word: 'Soliloquy',
    definition: 'A speech where a character speaks their thoughts aloud, alone on stage',
    distractors: [
      'A back-and-forth conversation between two stage characters',
      'Written instructions describing the action and setting',
      'A group of performers speaking the same lines together',
    ],
  },
  {
    word: 'Anachronism',
    definition: 'Something placed in the wrong historical period',
    distractors: [
      'A phrase repeated for emphasis throughout a text',
      'A newly invented word not yet in common use',
      'A particular type of stanza used in lyric poetry',
    ],
  },
  {
    word: 'Catharsis',
    definition: 'The release of strong emotions through art or drama',
    distractors: [
      'The highest point of tension in a narrative arc',
      'A type of irony where outcomes contradict expectations',
      'A persuasive technique that appeals to logic',
    ],
  },
  {
    word: 'Duality',
    definition: 'The state of having two contrasting aspects or qualities',
    distractors: [
      'A particular pattern of rhyme between paired lines',
      'A peaceful agreement reached between two characters',
      'A traditional poetic form following a strict structure',
    ],
  },
  {
    word: 'Hubris',
    definition: 'Excessive pride or self-confidence, often leading to downfall',
    distractors: [
      'A deep and lasting sadness affecting one’s outlook',
      'A character flaw of cowardice in the face of danger',
      'A type of comedy relying on absurd situations',
    ],
  },
  {
    word: 'Motif',
    definition: 'A recurring element that has symbolic significance',
    distractors: [
      'The most important character in a given narrative',
      'A single isolated scene within a larger story',
      'A particular type of narrator used in fiction',
    ],
  },
  {
    word: 'Polemical',
    definition: 'Strongly critical or controversial in tone',
    distractors: [
      'Quietly reflective and gently introspective',
      'Humorous and light-hearted in approach',
      'Closely related to traditional poetic form',
    ],
  },
  {
    word: 'Semantic',
    definition: 'Relating to meaning in language',
    distractors: [
      'Relating to sound in language',
      'Relating to the rules of grammar',
      'Relating to the spelling of words',
    ],
  },
  {
    word: 'Pejorative',
    definition: 'Expressing contempt or disapproval',
    distractors: [
      'Expressing admiration or respect',
      'Completely neutral in tone',
      'Extremely formal in register',
    ],
  },
  {
    word: 'Hyperbolic',
    definition: 'Deliberately exaggerated for emphasis',
    distractors: [
      'Understated and deliberately subtle',
      'Completely accurate and factual',
      'Closely related to poetic rhythm',
    ],
  },
  {
    word: 'Evocative',
    definition: 'Bringing strong images, memories, or feelings to mind',
    distractors: [
      'Extremely difficult to understand on first reading',
      'Short, factual, and lacking in detail',
      'Relating to spoken dialogue between characters',
    ],
  },
  {
    word: 'Colloquial',
    definition: 'Informal language used in everyday conversation',
    distractors: [
      'Extremely formal language used in legal writing',
      'Old English vocabulary used in early literature',
      'Technical terminology used in scientific writing',
    ],
  },
  {
    word: 'Syntax',
    definition: 'The arrangement of words and phrases in a sentence',
    distractors: [
      'The meaning of individual words in a sentence',
      'The sound and rhythm of words in a sentence',
      'The spelling and lettering of words in a sentence',
    ],
  },
  {
    word: 'Rhetoric',
    definition: 'The art of persuasive speaking or writing',
    distractors: [
      'The systematic study of grammatical rules',
      'A type of poem with a regular rhyme scheme',
      'A dramatic monologue performed on stage',
    ],
  },
  {
    word: 'Visceral',
    definition: 'Relating to deep inward feelings or instinctive gut reactions',
    distractors: [
      'Relating to vision and the way things appear',
      'Intellectual and reasoned rather than emotional',
      'Abstract and vague rather than concrete',
    ],
  },
  {
    word: 'Exposition',
    definition: 'The part of a narrative that introduces background information',
    distractors: [
      'The highest point of tension in a story',
      'The final resolution at the end of a story',
      'A type of conflict between two opposing forces',
    ],
  },
  {
    word: 'Denouement',
    definition: 'The final resolution or outcome of a story',
    distractors: [
      'The opening scene that introduces the setting',
      'A point of rising tension before the climax',
      'A secondary plot running alongside the main one',
    ],
  },
  {
    word: 'Euphemism',
    definition: 'A mild expression used to replace something harsh or blunt',
    distractors: [
      'An extreme exaggeration used for emphasis',
      'A direct, plain statement of an opinion',
      'A type of irony where meaning is reversed',
    ],
  },
  {
    word: 'Analepsis',
    definition: 'A flashback to an earlier point in the narrative',
    distractors: [
      'A sudden jump forward to a future event',
      'A deliberate pause in the flow of the narrative',
      'A change in the perspective of the narrator',
    ],
  },
  {
    word: 'Prolepsis',
    definition: 'A flash-forward to a future point in the narrative',
    distractors: [
      'A flashback to an event from earlier times',
      'A dream sequence revealing a character’s mind',
      'A secondary plot running beside the main story',
    ],
  },
  {
    word: 'Verisimilitude',
    definition: 'The appearance of being true or real',
    distractors: [
      'Something that is obviously fantasy',
      'A type of metaphor used in poetry',
      'A rhyme scheme used in sonnets',
    ],
  },
  {
    word: 'Hamartia',
    definition: 'A tragic flaw leading to the downfall of a hero',
    distractors: [
      'A happy ending in which good triumphs',
      'A comic device used to amuse an audience',
      'A type of setting found in pastoral writing',
    ],
  },
  {
    word: 'Polysyllabic',
    definition: 'Having many syllables',
    distractors: [
      'Having only a single syllable',
      'Containing no vowel sounds',
      'Relating to the rules of punctuation',
    ],
  },
  {
    word: 'Imperious',
    definition: 'Arrogant and domineering in manner',
    distractors: [
      'Humble and quiet by nature',
      'Extremely fearful and anxious',
      'Warm, welcoming, and friendly',
    ],
  },
  {
    word: 'Avarice',
    definition: 'Extreme greed for wealth or material gain',
    distractors: [
      'Extreme generosity towards others',
      'Deep and lingering sadness',
      'Great physical strength and power',
    ],
  },
  {
    word: 'Austere',
    definition: 'Severe or strict in appearance or manner',
    distractors: [
      'Warm and friendly in disposition',
      'Overly decorated and ornamented',
      'Humorous and playful in tone',
    ],
  },
  {
    word: 'Benevolent',
    definition: 'Well-meaning and kindly towards others',
    distractors: [
      'Cruel and harsh in dealings',
      'Indifferent and emotionally cold',
      'Secretive and cunning by nature',
    ],
  },
  {
    word: 'Insidious',
    definition: 'Proceeding in a gradual, subtle way but with harmful effects',
    distractors: [
      'Acting in a loud and openly obvious manner',
      'Happening quickly with no lasting consequences',
      'Being generous and kind in every action',
    ],
  },
  {
    word: 'Denounce',
    definition: 'To publicly declare something as wrong or evil',
    distractors: [
      'To quietly agree without raising any objection',
      'To offer praise publicly to draw attention',
      'To ignore something completely without comment',
    ],
  },
  {
    word: 'Foreboding',
    definition: 'A feeling that something bad is about to happen',
    distractors: [
      'A feeling of great joy and rising excitement',
      'A peaceful sense of calm and quiet contentment',
      'A vivid memory of an event from the past',
    ],
  },
  {
    word: 'Microcosm',
    definition: 'A small-scale representation of something much larger',
    distractors: [
      'An extremely large version of something else',
      'An instrument used to view tiny objects',
      'A figure of speech used in descriptive writing',
    ],
  },
  {
    word: 'Subversive',
    definition: 'Seeking to undermine an established system or institution',
    distractors: [
      'Strongly supporting the existing status quo',
      'Extremely conservative in views and politics',
      'Lacking any clear opinion on the matter',
    ],
  },
  {
    word: 'Didacticism',
    definition: 'The practice of conveying moral instruction through literature',
    distractors: [
      'The practice of writing entirely without any message',
      'A type of rhyme scheme used in lyric poems',
      'The deliberate use of regional dialect in writing',
    ],
  },
  {
    word: 'Sycophantic',
    definition: 'Behaving in a servile way to gain advantage',
    distractors: [
      'Rebellious and defiant in attitude',
      'Honest and direct in communication',
      'Shy and withdrawn in social settings',
    ],
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for only a very short time',
    distractors: [
      'Lasting forever and never fading',
      'Extremely heavy and difficult to lift',
      'Difficult to understand or interpret',
    ],
  },
  {
    word: 'Magnanimous',
    definition: 'Generous or forgiving, especially towards a rival',
    distractors: [
      'Petty and spiteful in personal dealings',
      'Extremely wealthy and openly showy',
      'Physically strong and powerfully built',
    ],
  },
  {
    word: 'Sardonic',
    definition: 'Grimly mocking or cynical in tone',
    distractors: [
      'Genuinely cheerful and warm-hearted',
      'Deeply romantic and tender',
      'Fearful and outwardly anxious',
    ],
  },
  {
    word: 'Melancholic',
    definition: 'Feeling or expressing pensive sadness',
    distractors: [
      'Extremely excited and enthusiastic',
      'Angry, volatile, and short-tempered',
      'Calm, content, and at ease',
    ],
  },
  {
    word: 'Pragmatic',
    definition: 'Dealing with things sensibly and realistically',
    distractors: [
      'Extremely idealistic and dreamy',
      'Overly emotional and irrational',
      'Abstract, theoretical, and detached',
    ],
  },
  {
    word: 'Utilitarian',
    definition: 'Designed to be useful rather than attractive',
    distractors: [
      'Created purely for decorative effect',
      'Extremely expensive and luxurious',
      'Closely related to traditional poetry',
    ],
  },
  {
    word: 'Sanguine',
    definition: 'Optimistic or positive, especially in a difficult situation',
    distractors: [
      'Extremely pessimistic, expecting the worst',
      'Deeply jealous of the success of other people',
      'Angry and bitter towards other people',
    ],
  },
  {
    word: 'Pedantic',
    definition: 'Excessively concerned with minor details or rules',
    distractors: [
      'Carefree, relaxed, and easy-going',
      'Extremely creative and imaginative',
      'Physically active and energetic',
    ],
  },
  {
    word: 'Antithesis',
    definition: 'A contrast or opposition between two things',
    distractors: [
      'A close similarity between two related things',
      'A type of rhyme used in lyric poems',
      'A dramatic pause used for emphasis',
    ],
  },
  {
    word: 'Reticent',
    definition: 'Not revealing thoughts or feelings readily',
    distractors: [
      'Extremely talkative and openly expressive',
      'Loud, forceful, and aggressive in speech',
      'Quick to anger and prone to outbursts',
    ],
  },
]

export const BANK: GameBank<VocabWord> = {
  slug: 'vocabulary-builder',
  items: VOCAB_BANK,
  // No two words are the same, and the word is what the student sees.
  key: (w) => w.word,
  answer: (w) => w.definition,
  // The page shows these four in a new order each time.
  options: (w) => [w.definition, ...w.distractors],
}
