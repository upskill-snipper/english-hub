import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Speed Analysis: name the literary device in each extract.
 *
 * Moved out of src/app/games/speed-analysis/page.tsx on 13 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game asks for THE device, and marks one option right. In 22 of the 30
 * questions another option was plainly also in the extract, and in 4 more it
 * was arguable, so a student who saw it was marked wrong for reading closely:
 *
 *   - "Tyger Tyger, burning bright" offered Alliteration and Repetition beside
 *     Metaphor, and both are there ("burning bright", "Tyger Tyger");
 *   - "Out, out, brief candle" offered Imperative and Apostrophe beside
 *     Metaphor, and it is both an order and an address to the candle;
 *   - the Ozymandias inscription offered Imperative ("Look") and Juxtaposition
 *     beside Irony; Porphyria's Lover offered Personification ("The sullen wind
 *     was soon awake") beside Pathetic fallacy; Prufrock's etherised evening
 *     offered Enjambment, which the extract shows, beside Simile;
 *   - and so on: "buzz of bees" offered Alliteration beside Onomatopoeia,
 *     "Peter Piper" Consonance beside Alliteration, Keats's "mists and mellow"
 *     Alliteration beside Personification.
 *
 * Two answers were wrong outright. Whitman's "I celebrate myself, and sing
 * myself" was marked Anaphora, which is repetition at the START of clauses;
 * the line repeats at the end ("myself ... myself", "assume ... assume"), so
 * the answer is Repetition. Eliot's "yellow smoke that rubs its muzzle on the
 * window-panes" was marked Personification, but a muzzle is an animal's: the
 * smoke is a cat, a metaphor, not a person.
 *
 * Every question now offers its device and three that the extract does not
 * contain, so exactly one answer is right; 28 of the 30 had at least one
 * option replaced. The extracts, their sources and the devices asked about are
 * unchanged except for those two answers.
 */

export interface AnalysisQuestion {
  extract: string
  source: string
  correctDevice: string
  options: string[]
}

export const QUESTIONS: AnalysisQuestion[] = [
  {
    extract: '"The sea was a boiling cauldron of fury."',
    source: 'Example prose',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Alliteration', 'Onomatopoeia'],
  },
  {
    extract: '"Her smile was like the sun breaking through clouds."',
    source: 'Example prose',
    correctDevice: 'Simile',
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"The wind howled and the trees groaned under its weight."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Oxymoron', 'Paradox'],
  },
  {
    extract: '"Peter Piper picked a peck of pickled peppers."',
    source: 'Traditional tongue-twister',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"The rain set early in to-night,\nThe sullen wind was soon awake."',
    source: "Porphyria's Lover - Browning",
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"My love is like a red, red rose\nThat\'s newly sprung in June."',
    source: 'A Red, Red Rose - Burns',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"I have told you a million times to clean your room!"',
    source: 'Example dialogue',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Irony', 'Rhetorical question', 'Metaphor'],
  },
  {
    extract: '"The soft, silky sound of the stream slipped through the stones."',
    source: 'Example prose',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Simile', 'Metaphor', 'Oxymoron'],
  },
  {
    extract: '"The buzz of bees and the hiss of the kettle filled the kitchen."',
    source: 'Example prose',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Simile', 'Metaphor', 'Personification'],
  },
  {
    extract: '"Is this a dagger which I see before me,\nThe handle toward my hand?"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Simile', 'Metaphor', 'Oxymoron'],
  },
  {
    extract:
      '"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge."',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Oxymoron', 'Personification'],
  },
  {
    extract: '"Look on my Works, ye Mighty, and despair!\nNothing beside remains."',
    source: 'Ozymandias - Shelley',
    correctDevice: 'Irony',
    options: ['Irony', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"I wandered lonely as a cloud\nThat floats on high o\'er vales and hills."',
    source: 'Daffodils - Wordsworth',
    correctDevice: 'Simile',
    options: ['Simile', 'Onomatopoeia', 'Metaphor', 'Oxymoron'],
  },
  {
    extract: '"Out, out, brief candle!"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Oxymoron', 'Onomatopoeia'],
  },
  {
    extract: '"It was the best of times,\nit was the worst of times."',
    source: 'A Tale of Two Cities - Dickens',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Simile', 'Onomatopoeia', 'Personification'],
  },
  {
    extract: '"The child is father of the man."',
    source: 'My Heart Leaps Up - Wordsworth',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Simile', 'Onomatopoeia', 'Alliteration'],
  },
  {
    extract: '"A deafening silence filled the room after the verdict."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Simile', 'Personification'],
  },
  {
    extract: '"The stars danced playfully in the moonlit sky."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract:
      '"Let us go then, you and I,\nWhen the evening is spread out against the sky\nLike a patient etherised upon a table."',
    source: 'Prufrock - Eliot',
    correctDevice: 'Simile',
    options: ['Simile', 'Onomatopoeia', 'Oxymoron', 'Paradox'],
  },
  {
    extract: '"My mother bore me in the southern wild,\nAnd I am black, but O! my soul is white."',
    source: 'The Little Black Boy - Blake',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Simile', 'Onomatopoeia', 'Personification'],
  },
  {
    extract: '"I celebrate myself, and sing myself,\nAnd what I assume you shall assume."',
    source: 'Song of Myself - Whitman',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"The fog comes\non little cat feet."',
    source: 'Fog - Sandburg',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"Season of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun."',
    source: 'To Autumn - Keats',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"Half a league, half a league,\nHalf a league onward,"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Simile', 'Oxymoron', 'Personification'],
  },
  {
    extract: '"Meanwhile the mind, from pleasure less,\nWithdraws into its happiness."',
    source: 'The Garden - Marvell',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"Tyger Tyger, burning bright,\nIn the forests of the night."',
    source: 'The Tyger - Blake',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"And miles to go before I sleep,\nAnd miles to go before I sleep."',
    source:
      '"Stopping by Woods on a Snowy Evening" - Robert Frost (fair-dealing extract; UK copyright until 2034)',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"The yellow smoke that rubs its muzzle on the window-panes."',
    source: 'Prufrock - Eliot',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract:
      '"I should have been a pair of ragged claws\nScuttling across the floors of silent seas."',
    source: 'Prufrock - Eliot',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Oxymoron'],
  },
  {
    extract: '"No man is an island,\nEntire of itself."',
    source: 'Devotions - Donne',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Allusion'],
  },
]

export const BANK: GameBank<AnalysisQuestion> = {
  slug: 'speed-analysis',
  items: QUESTIONS,
  // No two extracts are the same, and the extract is what the student sees.
  key: (q) => q.extract,
  answer: (q) => q.correctDevice,
  options: (q) => q.options,
  tag: (q) => q.correctDevice,
}
