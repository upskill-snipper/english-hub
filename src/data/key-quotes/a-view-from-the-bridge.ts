/**
 * Moved out of
 * src/app/revision/texts/a-view-from-the-bridge/key-quotes/page.tsx on 24
 * October 2026 so the text quests can read it (src/lib/games/quest/build.ts).
 * The page renders it as before.
 */

import type { FlatKeyQuote } from './types'

/* ── Quote data ────────────────────────────────────────────────────────── */

/*
 * CORRECTED 26 September 2026, against the verified study guide
 * (src/data/study-guides/a-view-from-the-bridge.ts) and exact-phrase searches
 * of the Internet Archive scans of both prescribed editions (Penguin Modern
 * Classics 2010, Bloomsbury). This list had twenty entries; three were removed
 * so that no one puts them back:
 * - Catherine's "You don't know anything": in neither edition.
 * - Louis's "Marco goes around shakin' hands": in neither edition.
 * - Beatrice's "It's your fault, Eddie. Everything.": a garbled form of
 *   Rodolpho's apology, which entry 12 already quotes correctly.
 * Also fixed: the settle-for-half line labelled as the opening quoted the
 * closing speech's wording ("Most of the time now..."); "Animal! You go on
 * your knees to me!" is Marco's, not Eddie's; "He's like a weird... he ain't
 * right." spliced two separate speeches; "Blondie" had lost its "now".
 * The dictionary strings rev.texts.avftb.quotes.intro and .count_h still say
 * twenty and need changing to seventeen there.
 */

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
    text: '"Now we settle for half, and I like it better."',
    speaker: 'Alfieri',
    context: 'Opening monologue',
    analysis:
      "The play's thesis statement. Alfieri defines civilisation as the willingness to compromise. Eddie's tragedy is his refusal to settle for anything less than total possession. Miller frames the entire play as a test of this principle.",
    themes: ['Justice vs law', 'Tragedy'],
  },
  {
    id: 2,
    text: '"You can quicker get back ... than a word that you gave away."',
    speaker: 'Eddie',
    context: 'Act 1 - warning about informers',
    analysis:
      "Eddie states the community's code of silence. Miller uses dramatic irony: the audience will remember this line when Eddie makes his phone call, making his betrayal doubly devastating.",
    themes: ['Betrayal', 'Immigration'],
  },
  {
    id: 3,
    text: '"She\'s a baby."',
    speaker: 'Eddie',
    context: 'Act 1 - on Catherine, repeated',
    analysis:
      "Eddie's refusal to see Catherine as an adult. Miller uses the repetition to show that this is not observation but compulsion - Eddie needs Catherine to remain a child to justify his possessiveness.",
    themes: ['Love and obsession', 'Masculinity'],
  },
  {
    id: 4,
    text: '"I want my name!"',
    speaker: 'Eddie',
    context: 'Act 2 - the final scene, before Marco arrives',
    analysis:
      "Eddie's last demand. Reputation is the only currency he values, and he has destroyed it himself. Miller concentrates the entire tragedy into four words.",
    themes: ['Masculinity', 'Betrayal'],
  },
  {
    id: 5,
    text: '"he allowed himself to be wholly known"',
    speaker: 'Alfieri',
    context: 'Closing monologue',
    analysis:
      "Alfieri's troubled eulogy. Miller suggests that Eddie's self-destruction made him fully transparent - terrible and, in some formal sense, admirable. The play refuses simple moral judgment.",
    themes: ['Tragedy', 'Love and obsession'],
  },
  {
    id: 6,
    text: '"In my country he would be dead now."',
    speaker: 'Marco',
    context: 'Act 2 - to Alfieri in jail',
    analysis:
      'Marco invokes the Sicilian code. Miller shows that the "old world" justice system has no room for mercy or delay - it is immediate and absolute.',
    themes: ['Justice vs law', 'Immigration'],
  },
  {
    id: 7,
    text: '"You want somethin\' else, Eddie, and you can never have her!"',
    speaker: 'Beatrice',
    context: 'Act 2 - confrontation',
    analysis:
      "The play's most shocking line. Beatrice names the desire everyone else has only hinted at. Miller gives the truth to the wife, making it an act of love, anger and desperation.",
    themes: ['Love and obsession', 'Betrayal'],
  },
  {
    id: 8,
    text: '"His eyes were like tunnels."',
    speaker: 'Alfieri',
    context: 'Act 1 - describing Eddie',
    analysis:
      "Alfieri sees Eddie's obsession narrowing his vision. Miller uses the metaphor to show that fixation eliminates peripheral awareness - Eddie can see only Catherine.",
    themes: ['Love and obsession', 'Tragedy'],
  },
  {
    id: 9,
    text: '"The law is only a word for what has a right to happen."',
    speaker: 'Alfieri',
    context: 'Act 2',
    analysis:
      "Alfieri admits the law's limitations. Miller uses this to bridge formal law and natural justice, validating Marco's position without endorsing his violence.",
    themes: ['Justice vs law'],
  },
  {
    id: 10,
    text: '"I mean he ain\'t right"',
    speaker: 'Eddie on Rodolpho',
    context: 'Act 1',
    analysis:
      'Eddie cannot articulate his objection because it is not really about Rodolpho. Miller shows that prejudice fills the space where self-knowledge should be.',
    themes: ['Masculinity', 'Love and obsession'],
  },
  {
    id: 11,
    text: '"When am I gonna be a wife again, Eddie?"',
    speaker: 'Beatrice',
    context: 'Act 1',
    analysis:
      "Beatrice names the absence at the centre of their marriage. Miller uses the question to show that Eddie's fixation on Catherine has displaced his wife from her own home.",
    themes: ['Love and obsession', 'Masculinity'],
  },
  {
    id: 12,
    text: '"It is my fault, Eddie."',
    speaker: 'Rodolpho',
    context: "Act 2 - before Eddie's death",
    analysis:
      'Rodolpho offers reconciliation. Miller shows that the younger generation is capable of the compromise Alfieri values. Eddie cannot accept it, and that inability kills him.',
    themes: ['Betrayal', 'The American Dream'],
  },
  {
    id: 13,
    text: '"Animal! You go on your knees to me!"',
    speaker: 'Marco to Eddie',
    context: 'Act 2 - final confrontation',
    analysis:
      'Marco, having struck Eddie in the street, demands that the informer kneel before him. Miller lets the honour code pass its sentence in public: the insult denies that Eddie is fully human, and the kneeling recalls the chair at the end of Act 1.',
    themes: ['Masculinity', 'Tragedy'],
  },
  {
    id: 14,
    text: '"Paper Doll they call him. Blondie now."',
    speaker: 'Eddie',
    context: 'Act 1',
    analysis:
      'Eddie feminises Rodolpho through nicknames. Miller shows how language polices gender boundaries and disguises jealousy as moral concern.',
    themes: ['Masculinity'],
  },
  {
    id: 15,
    text: '"He degraded my brother. My blood."',
    speaker: 'Marco',
    context: 'Act 2',
    analysis:
      'Marco frames the betrayal as a crime against family honour. Miller shows that for Marco, personal and collective identity are inseparable.',
    themes: ['Betrayal', 'Immigration'],
  },
  {
    id: 16,
    text: '"I\'m not gonna be a baby any more!"',
    speaker: 'Catherine',
    context: 'Act 2',
    analysis:
      "Catherine directly contradicts Eddie's \"she's a baby.\" Miller tracks her growth through language that deliberately echoes and rejects Eddie's framing.",
    themes: ['Love and obsession'],
  },
  {
    id: 17,
    text: '"I could see every step coming."',
    speaker: 'Alfieri',
    context: 'Act 1 narration',
    analysis:
      'Alfieri tells the audience the tragedy is inevitable. Miller creates tension not from surprise but from the agony of watching someone walk toward destruction.',
    themes: ['Tragedy'],
  },
]

// `context` is the page's only field for where a line falls ("Act 1 -
// warning about informers", "Opening monologue"), so it serves as `where`.
export const FLAT: FlatKeyQuote[] = KEY_QUOTES.filter((q) => q.analysis).map((q) => ({
  quote: q.text,
  speaker: q.speaker,
  where: q.context,
  analysis: q.analysis,
}))
