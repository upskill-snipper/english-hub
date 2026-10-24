/**
 * Moved out of src/app/revision/texts/of-mice-and-men/key-quotes/page.tsx on 24
 * October 2026 so the text quests can read it (src/lib/games/quest/build.ts).
 * The page renders it as before.
 */

import type { FlatKeyQuote } from './types'

/* ── Quote data ────────────────────────────────────────────────────────── */

// Corrected 26 September 2026 (see the main page's note). "Tell about the
// rabbits, George" is not in the novel and was removed, so there are 24 cards,
// not 25. Also corrected: "so easy and so nice" (omission now marked), "nobody
// but Curley", "ya big bastard", "whole damn world", "We gonna get a little
// place" (George, Chapter 6), "I want you to stay with me, Lennie" (Chapter 1,
// not the last words before the shot), the water snake line (Chapter 6 only),
// and two quotations cut without a mark or over fourteen words.

export type KeyQuote = {
  id: number
  text: string
  speaker: string
  context: string
  analysis: string
  themes: string[]
}

export const KEY_QUOTES: KeyQuote[] = [
  {
    id: 1,
    text: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
    speaker: 'George',
    context: 'Chapter 1 - by the pool',
    analysis:
      'The novella\'s thesis statement. George defines migrant workers by their isolation, immediately establishing loneliness as a systemic condition rather than a personal failing. The claim is universal - "guys like us" - making it political.',
    themes: ['Loneliness', 'The American Dream'],
  },
  {
    id: 2,
    text: '"I got you to look after me, ... you got me to look after you."',
    speaker: 'Lennie',
    context: 'Chapter 1 - dream recitation',
    analysis:
      "Lennie articulates the friendship's emotional core with a simplicity George cannot match. Steinbeck gives the deepest insight to the character the world underestimates, challenging the reader's assumptions about intelligence and feeling.",
    themes: ['Friendship', 'The American Dream'],
  },
  {
    id: 3,
    text: '"A guy needs somebody - to be near him."',
    speaker: 'Crooks',
    context: 'Chapter 4 - to Lennie in the harness room',
    analysis:
      'The most devastatingly simple statement of loneliness in the novella. Crooks universalises his own racial isolation into a statement about all human beings. Steinbeck lets the marginalised voice speak the deepest truth.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 4,
    text: '"I could get along so easy … if I didn\'t have you on my tail."',
    speaker: 'George',
    context: 'Chapter 1 - frustration with Lennie',
    analysis:
      'Reveals the cost of loyalty. George knows freedom but chooses responsibility. Steinbeck makes the sacrifice visible so the final act feels like the culmination of a lifelong burden freely accepted.',
    themes: ['Friendship', 'Loneliness'],
  },
  {
    id: 5,
    text: '"You can talk to people, but I can\'t talk to nobody but Curley."',
    speaker: "Curley's Wife",
    context: 'Chapter 5 - to Lennie in the barn',
    analysis:
      'Humanises her moments before her death. Steinbeck forces a reappraisal: she is not the temptress the ranch men see but a young woman as isolated as they are, with even fewer escape routes.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 6,
    text: '"I ought to of shot that dog myself, George."',
    speaker: 'Candy',
    context: 'Chapter 3 - after the dog is killed',
    analysis:
      "The novella's most important piece of foreshadowing. Candy's regret about delegating a mercy killing teaches George the lesson he will act on in the final chapter. Steinbeck links the two deaths structurally.",
    themes: ['Friendship', 'Nature and animals'],
  },
  {
    id: 7,
    text: '"You hadda, George. I swear you hadda."',
    speaker: 'Slim',
    context: 'Chapter 6 - final lines',
    analysis:
      "The ranch's moral authority validates the killing. Steinbeck uses Slim's compassion to prevent the ending from collapsing into simple horror, offering the reader a moral position from which to process the tragedy.",
    themes: ['Friendship', 'Power'],
  },
  {
    id: 8,
    text: "\"S'pose you didn't have nobody... A guy goes nuts if he ain't got nobody.\"",
    speaker: 'Crooks',
    context: 'Chapter 4 - reflecting on isolation',
    analysis:
      'Crooks describes the psychological damage of enforced solitude. Steinbeck uses his intelligence to make visible the waste of human potential that racism causes.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 9,
    text: '"We gonna get a little place."',
    speaker: 'George',
    context: 'Chapter 6 - the last telling of the dream',
    analysis:
      'The dream in its purest form. "Little" is key - Steinbeck shows that even the most modest ambitions are unreachable for workers at the bottom of the Depression economy.',
    themes: ['The American Dream'],
  },
  {
    id: 10,
    text: '"every damn one of \'em\'s got a little piece of land in his head."',
    speaker: 'Crooks',
    context: 'Chapter 4',
    analysis:
      'Crooks has watched the dream fail for every worker he has ever met. Steinbeck uses his experience as evidence that the American Dream is a systemic lie, not a personal failure.',
    themes: ['The American Dream', 'Prejudice'],
  },
  {
    id: 11,
    text: '"Coulda been in the movies, an\' had nice clothes."',
    speaker: "Curley's Wife",
    context: 'Chapter 5 - to Lennie',
    analysis:
      "Her Hollywood dream parallels the men's land dream. Steinbeck shows the Depression crushed women's aspirations as brutally as men's, but with even fewer alternatives.",
    themes: ['The American Dream', 'Prejudice'],
  },
  {
    id: 12,
    text: '"S\'pose I went in with you guys."',
    speaker: 'Candy',
    context: 'Chapter 3 - offering savings',
    analysis:
      "The moment hope becomes tangible. Steinbeck lets the reader believe alongside the characters, making the dream's destruction more painful because it briefly seemed possible.",
    themes: ['The American Dream', 'Friendship'],
  },
  {
    id: 13,
    text: '"I could get you strung up on a tree so easy …"',
    speaker: "Curley's Wife to Crooks",
    context: 'Chapter 4',
    analysis:
      'The powerless woman weaponises racial violence against the only person below her in the hierarchy. Steinbeck exposes how oppression is reproduced within oppressed groups.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 14,
    text: '"A water snake glided smoothly up the pool."',
    speaker: 'Narrator',
    context: 'Chapter 6 - the pool (in Chapter 1 a water snake swims past unharmed)',
    analysis:
      "The repeated image creates circularity. Nature continues indifferently while human tragedy unfolds. Steinbeck frames Lennie's death within a cycle that neither mourns nor judges.",
    themes: ['Nature and animals'],
  },
  {
    id: 15,
    text: "\"He ain't no good to himself. Why'n't you shoot him?\"",
    speaker: "Carlson on Candy's dog",
    context: 'Chapter 3',
    analysis:
      "Carlson's pragmatic cruelty toward the dog establishes the ranch's moral code: uselessness equals disposability. Steinbeck draws a direct line to the treatment of Lennie, Candy and Crooks.",
    themes: ['Nature and animals', 'Power'],
  },
  {
    id: 16,
    text: '"What stake you got in this guy?"',
    speaker: 'The Boss',
    context: 'Chapter 2 - interviewing George',
    analysis:
      'The Boss cannot comprehend friendship without profit motive. Steinbeck uses the question to expose how capitalism corrodes the very idea of selfless human connection.',
    themes: ['Friendship', 'Power'],
  },
  {
    id: 17,
    text: '"I think I knowed we\'d never do her."',
    speaker: 'George',
    context: "Chapter 5 - after Curley's wife's death",
    analysis:
      'George admits the dream was always fantasy. Steinbeck collapses hope and self-awareness in a single line, revealing that George carried the dream for Lennie, not for himself.',
    themes: ['The American Dream', 'Friendship'],
  },
  {
    id: 18,
    text: '"They left all the weak ones here."',
    speaker: "Curley's Wife",
    context: "Chapter 4 - in Crooks's room",
    analysis:
      'She identifies the marginalised group assembled in the harness room but fails to recognise herself as part of it. Steinbeck shows how internalised prejudice blinds people to their own oppression.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 19,
    text: '"Come on, ya big bastard."',
    speaker: 'Curley',
    context: 'Chapter 3 - picking a fight with Lennie',
    analysis:
      'Curley targets the largest, most vulnerable man to prove his toughness. Steinbeck exposes how insecure masculinity creates violence by attacking those who cannot retaliate.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 20,
    text: '"Maybe ever\'body in the whole damn world is scared of each other."',
    speaker: 'Slim',
    context: 'Chapter 3',
    analysis:
      'Slim names the universal fear that prevents connection. Steinbeck gives his most perceptive observation to the character with the moral authority to deliver it.',
    themes: ['Loneliness', 'Friendship'],
  },
  {
    id: 21,
    text: '"I ain\'t wanted in the bunk house."',
    speaker: 'Crooks',
    context: 'Chapter 4',
    analysis:
      'A factual statement of segregation delivered without self-pity. Steinbeck lets the plain language carry the full weight of racial injustice.',
    themes: ['Prejudice', 'Loneliness'],
  },
  {
    id: 22,
    text: "\"I don't know why I can't keep it. It ain't nobody's mouse.\"",
    speaker: 'Lennie',
    context: 'Chapter 1',
    analysis:
      "Lennie's love of soft things is established with the first dead mouse. Steinbeck begins the foreshadowing chain - mice, puppy, woman - that makes the ending feel structurally inevitable.",
    themes: ['Nature and animals'],
  },
  {
    id: 23,
    text: '"I want you to stay with me, Lennie."',
    speaker: 'George',
    context: "Chapter 1 - refusing Lennie's offer to live alone in a cave",
    analysis:
      "George's tenderness breaks through his complaints. The line is often misremembered as his last words before the shot; Chapter 6 echoes this scene at the pool, so the mercy killing recalls this moment of intimacy.",
    themes: ['Friendship'],
  },
  {
    id: 24,
    text: '"Now what the hell ya suppose is eatin\' them two guys?"',
    speaker: 'Carlson',
    context: 'Chapter 6 - closing line',
    analysis:
      "The novella's final line exposes Carlson's emotional illiteracy. Steinbeck ends with incomprehension to show that most people cannot even see the friendship they have just witnessed destroyed.",
    themes: ['Loneliness', 'Friendship'],
  },
]

// `context` is the page's only field for where a line falls ("Chapter 1 - by
// the pool"), so it serves as `where`.
export const FLAT: FlatKeyQuote[] = KEY_QUOTES.filter((q) => q.analysis).map((q) => ({
  quote: q.text,
  speaker: q.speaker,
  where: q.context,
  analysis: q.analysis,
}))
