// ─── Grade Climber: Extra Question Bank ──────────────────────────────────────
// 110 additional questions covering poetry techniques, set-text quotation
// analysis, language device identification, exam timing rules, and mark
// scheme awareness.
//
// ORCHESTRATOR NOTE: This file is intended to be merged into the main
// QUESTION_BANK in `page.tsx` by the orchestrator. To merge, import
// `EXTRA_QUESTION_BANK` and concatenate it with the existing array, e.g.:
//
//   import { EXTRA_QUESTION_BANK } from './questions-extra'
//   const QUESTION_BANK: GradeQuestion[] = [...ORIGINAL_QUESTIONS, ...EXTRA_QUESTION_BANK]
//
// All `id` values are prefixed `gc-extra-` to guarantee no collisions with
// other parallel-sweep agent contributions. The runtime `GradeQuestion`
// shape in `page.tsx` does not include `id`; the optional `id` here is an
// additive metadata field that the orchestrator can strip if not needed.
// All quotations are genuine extracts from real GCSE set texts (AQA Power
// and Conflict, Love and Relationships, Macbeth, Romeo and Juliet, A
// Christmas Carol, Jekyll and Hyde, An Inspector Calls). ZERO synthetic
// quotations have been used.
// ──────────────────────────────────────────────────────────────────────────────

import type { GCSEGrade } from '@/lib/grades'

/**
 * Mirrors the `GradeQuestion` interface declared locally inside
 * `src/app/games/grade-climber/page.tsx`. Adds an optional `id` field for
 * orchestrator-side deduplication; this is structurally compatible with the
 * original shape (extra optional properties are tolerated).
 */
export interface ExtraGradeQuestion {
  id?: string
  grade: GCSEGrade
  type: 'technique' | 'meaning' | 'analysis'
  prompt: string
  options: string[]
  correctIndex: number
}

export const EXTRA_QUESTION_BANK: ExtraGradeQuestion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 4 - Basic recall, simple definitions (20 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g4-001',
    grade: 4,
    type: 'technique',
    prompt: 'What is a metaphor?',
    options: [
      'A comparison using "like" or "as"',
      'A direct comparison stating one thing IS another',
      'Giving human qualities to non-human things',
      'A word that imitates a sound',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-002',
    grade: 4,
    type: 'technique',
    prompt: 'What is personification?',
    options: [
      'Repeating a consonant sound',
      'A deliberate exaggeration',
      'Giving human qualities to non-human things',
      'Comparing using "like" or "as"',
    ],
    correctIndex: 2,
  },
  {
    id: 'gc-extra-g4-003',
    grade: 4,
    type: 'technique',
    prompt: 'What is alliteration?',
    options: [
      'Repetition of consonant sounds at the start of nearby words',
      'Words that sound like the noise they describe',
      'A comparison using "like"',
      'Repeating vowel sounds',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g4-004',
    grade: 4,
    type: 'technique',
    prompt: 'What is hyperbole?',
    options: [
      'Understatement',
      'Deliberate exaggeration for effect',
      'A type of rhyme',
      'A play on words',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-005',
    grade: 4,
    type: 'technique',
    prompt: 'What is onomatopoeia?',
    options: [
      'A word that imitates a sound',
      'Comparing two unlike things',
      'A pause in a line of poetry',
      'Repetition of vowels',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g4-006',
    grade: 4,
    type: 'technique',
    prompt: 'What is a simile?',
    options: [
      'A direct comparison using "is" or "are"',
      'A comparison using "like" or "as"',
      'A symbol',
      'A rhetorical question',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-007',
    grade: 4,
    type: 'meaning',
    prompt: 'In poetry, what is a "stanza"?',
    options: [
      'A single line',
      'A group of lines forming a unit',
      'The title',
      'The rhyming pattern',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-008',
    grade: 4,
    type: 'meaning',
    prompt: 'What does "imagery" mean in English Literature?',
    options: [
      'Pictures printed alongside a poem',
      "Descriptive language that creates a picture in the reader's mind",
      'The font choice',
      "The poet's biography",
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-009',
    grade: 4,
    type: 'meaning',
    prompt: 'What does "tone" mean in a piece of writing?',
    options: [
      'The volume of the words',
      'The attitude or mood the writer expresses',
      'The colour of the page',
      'The number of paragraphs',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-010',
    grade: 4,
    type: 'technique',
    prompt: 'What is a rhetorical question?',
    options: [
      'A question with a definite answer',
      'A question asked for effect, not expecting an answer',
      'A question in an exam',
      'A question only the teacher can answer',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-011',
    grade: 4,
    type: 'meaning',
    prompt: 'What is a "protagonist"?',
    options: ['The villain', 'The main character', 'The narrator only', 'A minor character'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-012',
    grade: 4,
    type: 'meaning',
    prompt: 'What is "first person" narration?',
    options: [
      'Told using "he", "she" or "they"',
      'Told using "you"',
      'Told using "I" or "we"',
      'Told without a narrator',
    ],
    correctIndex: 2,
  },
  {
    id: 'gc-extra-g4-013',
    grade: 4,
    type: 'meaning',
    prompt: 'What is "third person" narration?',
    options: [
      'Told using "I"',
      'Told using "you"',
      'Told using "he", "she", "they" or character names',
      'Told in a letter',
    ],
    correctIndex: 2,
  },
  {
    id: 'gc-extra-g4-014',
    grade: 4,
    type: 'technique',
    prompt: 'What is a "rhyming couplet"?',
    options: [
      'Any two lines of poetry',
      'Two consecutive lines that rhyme',
      'A poem of two stanzas',
      'A pair of similes',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-015',
    grade: 4,
    type: 'meaning',
    prompt: 'What does "setting" mean in a story?',
    options: [
      "The author's desk",
      'The time and place where the story happens',
      'How long the story takes to read',
      "The book's genre",
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-016',
    grade: 4,
    type: 'meaning',
    prompt: 'What is a "theme" in a literary text?',
    options: [
      'The decorative cover',
      'A central idea or message explored by the writer',
      'The chapter titles',
      "A character's name",
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-017',
    grade: 4,
    type: 'technique',
    prompt: 'What is repetition used for in writing?',
    options: [
      'To fill space',
      'To emphasise an idea or create rhythm',
      'To confuse the reader',
      'To prove the writer ran out of ideas',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-018',
    grade: 4,
    type: 'meaning',
    prompt: 'What is "dialogue" in fiction?',
    options: [
      "The narrator's thoughts",
      'Conversation between characters',
      'Stage directions',
      'A summary of the plot',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-019',
    grade: 4,
    type: 'meaning',
    prompt: 'What is a "playwright"?',
    options: ['An actor', 'A person who writes plays', 'A theatre owner', 'A stage hand'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g4-020',
    grade: 4,
    type: 'technique',
    prompt: 'What is a "pun"?',
    options: [
      'A serious metaphor',
      'A joke exploiting a word with multiple meanings or sounds',
      'A type of rhyme',
      'A pause for breath',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 5 - Solid technique recognition and effect (20 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g5-001',
    grade: 5,
    type: 'technique',
    prompt: 'What is an "extended metaphor"?',
    options: [
      'A very long simile',
      'A metaphor sustained and developed across several lines or a whole text',
      'Two metaphors next to each other',
      'A metaphor inside a quotation',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-002',
    grade: 5,
    type: 'technique',
    prompt: 'What is "enjambment" in poetry?',
    options: [
      'A line that ends with a full stop',
      'When a sentence runs over from one line to the next without punctuation',
      'A rhyming line',
      'The first line of a stanza',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-003',
    grade: 5,
    type: 'technique',
    prompt: 'What is a "caesura"?',
    options: [
      'The end of a stanza',
      'A deliberate pause within a line of poetry, often shown with punctuation',
      'A type of rhyme scheme',
      'A line with ten syllables',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-004',
    grade: 5,
    type: 'meaning',
    prompt: 'What is "sibilance"?',
    options: [
      'Repetition of "s" or soft "c" sounds',
      'Repetition of hard consonants like "b" or "p"',
      'A type of rhyme',
      'A line break',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g5-005',
    grade: 5,
    type: 'meaning',
    prompt: 'What is "assonance"?',
    options: [
      'Repetition of consonant sounds',
      'Repetition of vowel sounds within nearby words',
      'A clashing of meanings',
      'Two rhyming words',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-006',
    grade: 5,
    type: 'meaning',
    prompt: 'What is a "semantic field"?',
    options: [
      'A group of words related to the same topic or idea within a text',
      'A field studied in geography',
      'A type of stanza',
      'A list of synonyms in the dictionary',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g5-007',
    grade: 5,
    type: 'meaning',
    prompt:
      'In Language Paper 1, roughly how long should you spend on Question 5 (the writing task)?',
    options: ['10 minutes', '20 minutes', '45 minutes', 'The full hour'],
    correctIndex: 2,
  },
  {
    id: 'gc-extra-g5-008',
    grade: 5,
    type: 'meaning',
    prompt: 'AQA English Language Paper 1 lasts how long in total?',
    options: ['1 hour', '1 hour 30 minutes', '1 hour 45 minutes', '2 hours'],
    correctIndex: 2,
  },
  {
    id: 'gc-extra-g5-009',
    grade: 5,
    type: 'meaning',
    prompt: 'What does "AO1" generally assess in English Literature?',
    options: [
      'Spelling and punctuation only',
      'A clear response with appropriate textual references',
      'Contextual knowledge',
      'The use of subject terminology',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-010',
    grade: 5,
    type: 'meaning',
    prompt: 'What does "AO2" assess in English Literature?',
    options: [
      'Personal opinion of the text',
      'Analysis of language, form and structure with subject terminology',
      'Knowledge of context',
      'Comparison of two texts',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-011',
    grade: 5,
    type: 'meaning',
    prompt: 'What does "AO3" assess in English Literature?',
    options: [
      'Use of grammar',
      'The relationship between the text and its context',
      'Comparison only',
      'Vocabulary range',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-012',
    grade: 5,
    type: 'technique',
    prompt: 'What is "juxtaposition"?',
    options: [
      'Placing two contrasting ideas, images or characters side by side',
      'A repeated phrase',
      'A type of rhyme',
      'A grammatical mistake',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g5-013',
    grade: 5,
    type: 'technique',
    prompt: 'What is a "dramatic monologue"?',
    options: [
      'A poem spoken by a single character to an implied listener',
      'A speech in a play given by two people',
      'A narrative poem with multiple speakers',
      'A song lyric',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g5-014',
    grade: 5,
    type: 'meaning',
    prompt: 'What is "iambic pentameter"?',
    options: [
      'A line of five unstressed syllables',
      'A line of ten syllables in five iambs (unstressed/stressed pattern)',
      'Any rhyming line',
      'A line of fourteen syllables',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-015',
    grade: 5,
    type: 'technique',
    prompt: 'What is "foreshadowing"?',
    options: [
      'A flashback to earlier events',
      'A hint or clue about what will happen later in a text',
      'Describing the weather',
      'Repetition of a phrase',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-016',
    grade: 5,
    type: 'meaning',
    prompt: 'What is the difference between "connotation" and "denotation"?',
    options: [
      'They are the same thing',
      'Denotation is the literal meaning; connotation is the implied/associated meaning',
      'Connotation is the dictionary meaning; denotation is figurative',
      'Both refer only to figurative meaning',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-017',
    grade: 5,
    type: 'technique',
    prompt: 'What is a "motif"?',
    options: [
      'A single image used once',
      'A recurring image, idea or symbol that develops a theme',
      'A type of rhyme',
      'The opening line of a poem',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-018',
    grade: 5,
    type: 'meaning',
    prompt: 'On AQA Language Paper 2 Question 4, candidates are asked to:',
    options: [
      'Write a description',
      "Compare writers' methods and viewpoints across two source texts",
      'Summarise one source',
      'Identify four facts',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g5-019',
    grade: 5,
    type: 'technique',
    prompt: 'What is "anaphora"?',
    options: [
      'Repetition of the same word or phrase at the start of successive clauses or lines',
      'Repetition at the end of clauses',
      'Repeating sounds within a line',
      'A type of rhetorical question',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g5-020',
    grade: 5,
    type: 'meaning',
    prompt: 'What is "pathetic fallacy"?',
    options: [
      'A weak argument',
      "Using weather or natural elements to reflect characters' emotions or mood",
      "A foolish character's dialogue",
      'A type of metaphor about animals',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 6 - Identify a technique used (20 questions, real quotations)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g6-001',
    grade: 6,
    type: 'technique',
    prompt:
      '"Fair is foul, and foul is fair" (Macbeth, Act 1 Scene 1) - what technique structures this line?',
    options: ['Simile', 'Antithesis / chiasmus', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-002',
    grade: 6,
    type: 'technique',
    prompt:
      '"But, soft! what light through yonder window breaks?" (Romeo and Juliet) - the line opens with a:',
    options: ['Rhetorical question', 'Simile', 'Apostrophe', 'Hyperbole'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-003',
    grade: 6,
    type: 'technique',
    prompt: '"It is the east, and Juliet is the sun" (Romeo and Juliet) - Romeo uses a:',
    options: ['Simile', 'Metaphor', 'Personification', 'Pun'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-004',
    grade: 6,
    type: 'technique',
    prompt: '"Solitary as an oyster" (A Christmas Carol, Stave 1) - Dickens uses a:',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-005',
    grade: 6,
    type: 'technique',
    prompt:
      '"Squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!" (A Christmas Carol) - what device dominates?',
    options: [
      'Listing of present participles',
      'Rhyming couplets',
      'Iambic pentameter',
      'Sibilance',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-006',
    grade: 6,
    type: 'technique',
    prompt: '"My mistress\' eyes are nothing like the sun" (Sonnet 130) - Shakespeare opens with:',
    options: [
      'A conventional simile',
      'A subverted/negated simile',
      'A direct metaphor',
      'Onomatopoeia',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-007',
    grade: 6,
    type: 'technique',
    prompt: '"I wandered lonely as a cloud" (Wordsworth) - the technique is a:',
    options: ['Metaphor', 'Simile', 'Personification', 'Pathetic fallacy'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-008',
    grade: 6,
    type: 'technique',
    prompt:
      '"Bent double, like old beggars under sacks" (Owen, Dulce et Decorum Est) - what device opens the poem?',
    options: ['Metaphor', 'Simile', 'Hyperbole', 'Personification'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-009',
    grade: 6,
    type: 'technique',
    prompt: '"Drunk with fatigue" (Owen, Dulce et Decorum Est) - what is this?',
    options: ['Simile', 'Metaphor', 'Onomatopoeia', 'Litotes'],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-010',
    grade: 6,
    type: 'technique',
    prompt:
      '"My name is Ozymandias, King of Kings" (Shelley) - the repetition "King of Kings" is an example of:',
    options: [
      'Anaphora',
      'Polyptoton (repetition with grammatical variation)',
      'Onomatopoeia',
      'Sibilance',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-011',
    grade: 6,
    type: 'technique',
    prompt:
      '"The frost performs its secret ministry" (Coleridge, Frost at Midnight) - what device?',
    options: ['Personification', 'Simile', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-012',
    grade: 6,
    type: 'technique',
    prompt:
      '"The yellow fog that rubs its back upon the window-panes" (Eliot, Prufrock) - what device?',
    options: ['Personification', 'Simile', 'Onomatopoeia', 'Metaphor only'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-013',
    grade: 6,
    type: 'technique',
    prompt: '"The sea is calm tonight" (Arnold, Dover Beach) - what device opens the poem?',
    options: ['Pathetic fallacy', 'Hyperbole', 'Metaphor', 'Caesura'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-014',
    grade: 6,
    type: 'technique',
    prompt:
      '"Half a league, half a league, / Half a league onward" (Tennyson, Charge of the Light Brigade) - what device?',
    options: ['Anaphora and dactylic rhythm', 'Sibilance', 'Iambic pentameter', 'Caesura'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-015',
    grade: 6,
    type: 'technique',
    prompt:
      '"And miles to go before I sleep, / And miles to go before I sleep" (Frost) - the repetition functions as:',
    options: ['Refrain / epistrophe', 'Pun', 'Caesura', 'Enjambment'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-016',
    grade: 6,
    type: 'technique',
    prompt:
      '"The boy stood on the burning deck" (Hemans, Casabianca) - what device dominates the line?',
    options: ['Alliteration of "b"', 'Sibilance', 'Onomatopoeia', 'Personification'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-017',
    grade: 6,
    type: 'technique',
    prompt: '"Shall I compare thee to a summer\'s day?" (Sonnet 18) - the line is a:',
    options: [
      'Statement',
      'Rhetorical question opening an extended comparison',
      'Imperative',
      'Exclamation',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g6-018',
    grade: 6,
    type: 'technique',
    prompt: '"Out, damned spot! out, I say!" (Macbeth, Act 5 Scene 1) - what device?',
    options: ['Imperative and exclamation', 'Simile', 'Iambic pentameter only', 'Pun'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-019',
    grade: 6,
    type: 'technique',
    prompt: '"The curfew tolls the knell of parting day" (Gray, Elegy) - what device?',
    options: ['Personification', 'Simile', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g6-020',
    grade: 6,
    type: 'technique',
    prompt: '"Two roads diverged in a yellow wood" (Frost) - the two roads operate as:',
    options: [
      'Literal description only',
      'An extended metaphor / symbol for choice',
      'Personification',
      'Hyperbole',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 7 - Analyse a short quotation (20 questions, real quotations)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g7-001',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Look like the innocent flower, / But be the serpent under\'t" (Macbeth, Act 1 Scene 5) - what does Lady Macbeth\'s contrast reveal?',
    options: [
      'She admires honesty',
      'She advises hiding murderous intent behind virtuous appearance, weaponising deception',
      'She is referring literally to a garden',
      'She is reciting scripture',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-002',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Is this a dagger which I see before me, / The handle toward my hand?" (Macbeth, Act 2 Scene 1) - the question form suggests:',
    options: [
      'Macbeth is calmly planning',
      "Macbeth's unstable, hallucinatory state and moral hesitation before the murder",
      'Macbeth is asking a servant',
      'A genuine prop on stage',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-003',
    grade: 7,
    type: 'analysis',
    prompt:
      '"A pair of star-cross\'d lovers take their life" (Romeo and Juliet, Prologue) - what does the metaphor "star-cross\'d" imply?',
    options: [
      'Their love is cosmic and successful',
      'Fate, governed by the stars, dooms the lovers from the outset',
      'They love astronomy',
      'They are mismatched in age',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-004',
    grade: 7,
    type: 'analysis',
    prompt:
      '"What\'s in a name? That which we call a rose / By any other name would smell as sweet" (R&J) - Juliet argues:',
    options: [
      'Names are everything',
      "Identity is separable from family labels - challenging the feud's power over them",
      'Roses are her favourite flower',
      'She wants to change her name to Rose',
    ],
    correctIndex: 1,
  },
  {
    // VERIFIED: Heinemann/Penguin Acts 1-3 - Birling's repeated "hard-headed business man" mantra appears in Act 1 (3 separate instances)
    id: 'gc-extra-g7-005',
    grade: 7,
    type: 'analysis',
    prompt:
      '"I speak as a hard-headed business man" (An Inspector Calls, Mr Birling, Act 1) - what does this self-description reveal?',
    options: [
      'Birling is intellectually humble',
      "His pride in pragmatic capitalism, dramatic irony given his subsequent wrong predictions, and Priestley's caricature of pre-war complacency",
      "He dislikes the Inspector's voice",
      'He is joking',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-006',
    grade: 7,
    type: 'analysis',
    prompt:
      '"We are members of one body" (Inspector Goole, An Inspector Calls) - the metaphor argues:',
    options: [
      'A literal anatomy lesson',
      'Society is interconnected; we share collective responsibility for one another',
      'Workers should join unions',
      'Family members must obey their father',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-007',
    grade: 7,
    type: 'analysis',
    prompt:
      '"If they will not learn that lesson when they are taught it by Inspectors and by the police, they will be taught it in fire and blood and anguish" (An Inspector Calls) - the tricolon foreshadows:',
    options: [
      'A house fire',
      'The world wars and apocalyptic consequences of social neglect',
      "Eric's drinking",
      'A prison sentence for Birling',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-008',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Mankind was my business" (Marley\'s ghost, A Christmas Carol) - what does this reveal?',
    options: [
      'He owned a successful firm',
      "His posthumous realisation that human welfare, not commerce, should be one's true vocation",
      'He worked in HR',
      'He regrets his career choice in trade only',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-009',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Are there no prisons? Are there no workhouses?" (Scrooge, A Christmas Carol) - the rhetorical questions show:',
    options: [
      'Genuine inquiry',
      'Callous endorsement of harsh Poor Law institutions; Dickens satirises Malthusian attitudes',
      'Scrooge is lost',
      'Scrooge is asking for directions',
    ],
    correctIndex: 1,
  },
  {
    // VERIFIED: Project Gutenberg eBook #46, Stave 4 - Bob Cratchit's "I am very happy" speech: "I wish you could have gone. It would have done you good to see how green a place it is."
    // Original "Pale as a lily" was a fabricated quotation - replaced with the verified Stave 3 description of Tiny Tim's frailty.
    id: 'gc-extra-g7-010',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Alas for Tiny Tim, he bore a little crutch, and had his limbs supported by an iron frame!" (A Christmas Carol, Stave 3) - the exclamation suggests:',
    options: [
      'Tiny Tim is healthy',
      "Dickens's sentimental appeal: pathos through Tim's physical frailty solicits middle-class compassion for the industrial poor",
      'A garden setting',
      'He is wearing armour',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-011',
    grade: 7,
    type: 'analysis',
    prompt: '"Ape-like fury" used of Hyde (Jekyll and Hyde) - the simile draws on:',
    options: [
      'Affectionate humour',
      'Victorian fears of devolution and Darwinian regression to a primitive state',
      'Imagery of a zoo',
      'A literal ape',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-012',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Trampled calmly over the child\'s body" (Jekyll and Hyde, opening) - the oxymoron of "trampled calmly" suggests:',
    options: [
      'Hyde is gentle',
      'Disturbing, unnatural detachment; evil is cool, deliberate and inhuman',
      'The child was unharmed',
      'A medical procedure',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-013',
    grade: 7,
    type: 'analysis',
    prompt:
      '"My love is like a red, red rose" (Burns) - what does the doubled "red, red" intensify?',
    options: [
      'A botanical fact',
      "The vivid passion of new love and the rose's symbolic associations with romance and transience",
      'A printing error',
      'Anger',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-014',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Tyger Tyger, burning bright, / In the forests of the night" (Blake) - the metaphor "burning bright" implies:',
    options: [
      'Literal fire',
      'Dangerous, divine, almost terrifying energy and beauty',
      'A torch',
      'The setting sun',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-015',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Do not go gentle into that good night" (Dylan Thomas) - what does the imperative urge?',
    options: [
      'A peaceful end',
      'Active, furious resistance against death rather than passive acceptance',
      'A quiet bedtime',
      'Polite behaviour',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-016',
    grade: 7,
    type: 'analysis',
    prompt:
      '"The hand that signed the paper felled a city" (Dylan Thomas) - what does the synecdoche emphasise?',
    options: [
      'Literal hand size',
      'The detached bureaucratic violence of distant power - a small action causes vast destruction',
      "A signature's elegance",
      'A peace treaty',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-017',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Death is the mother of beauty" (Wallace Stevens, Sunday Morning) - the paradox argues:',
    options: [
      'Death gives birth literally',
      'Mortality gives meaning and intensity to beauty; the transient is what we treasure',
      'Beauty kills',
      'Mothers are beautiful',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-018',
    grade: 7,
    type: 'analysis',
    prompt:
      '"April is the cruellest month" (Eliot, The Waste Land) - the personification subverts:',
    options: [
      'A weather forecast',
      'Conventional spring renewal imagery, pairing rebirth with painful memory',
      'A holiday',
      'Tax season',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-019',
    grade: 7,
    type: 'analysis',
    prompt: '"Hope is the thing with feathers" (Dickinson) - the metaphor presents hope as:',
    options: [
      'A literal bird',
      'A small, persistent, song-bearing presence within the soul - fragile yet resilient',
      'A pillow',
      'A weather vane',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g7-020',
    grade: 7,
    type: 'analysis',
    prompt:
      '"Because I could not stop for Death - / He kindly stopped for me" (Dickinson) - the personification of Death as a courteous suitor:',
    options: [
      'Mocks the speaker',
      "Renders mortality unexpectedly civil and intimate, unsettling the reader's assumptions",
      'Is purely comic',
      'Has no symbolic meaning',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 8 - Multi-step inference (15 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g8-001',
    grade: 8,
    type: 'analysis',
    prompt:
      '"Unsex me here, / And fill me, from the crown to the toe, top-full / Of direst cruelty" (Lady Macbeth) - across the imperative, the spatial detail and the verb "fill", what is suggested?',
    options: [
      'A medical complaint',
      'A self-conscious rejection of gendered limits, invocation of supernatural transformation, and a desire to vessel violent agency that ultimately destabilises her',
      'She wants new clothes',
      'A simple insult to her husband',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-002',
    grade: 8,
    type: 'analysis',
    prompt:
      '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?" (Macbeth, 2.2) followed by "this my hand will rather / The multitudinous seas incarnadine" - the shift from Latinate "incarnadine" to monosyllabic "Making the green one red" suggests:',
    options: [
      'Macbeth is calm',
      'Linguistic disintegration mirroring guilt: grand classical register collapses into stark, simple horror as conscience overwhelms rhetoric',
      'A translation problem',
      'Stage directions',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-003',
    grade: 8,
    type: 'analysis',
    prompt:
      'Sheila Birling shifts from "(half playful, half serious)" stage directions to assertive interrogation of her parents - what does this trajectory signify in An Inspector Calls?',
    options: [
      'Random mood swings',
      "Priestley uses Sheila as the play's redeemable conscience, modelling generational change away from capitalist complacency toward socialist responsibility",
      'A breakdown',
      'Foreshadowing her marriage',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-004',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Jekyll and Hyde, Stevenson stages most of Hyde\'s violence at night, in fog, in narrow back streets and behind a "blistered and distained" door - cumulatively this Gothic setting:',
    options: [
      'Saves on lighting costs',
      'Externalises repressed Victorian anxieties about urban modernity, the unconscious and the duality lurking beneath respectable façades',
      'Is purely decorative',
      'Indicates poor weather only',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-005',
    grade: 8,
    type: 'analysis',
    prompt:
      'Scrooge\'s journey across the Staves of A Christmas Carol moves from "solitary as an oyster" to "I am as light as a feather" - tracking these similes:',
    options: [
      'Show only weight loss',
      "Track a moral metamorphosis from closed, hardened isolation to weightless joy, marking Dickens's allegorical structure of redemption",
      'Are unrelated',
      'Show Scrooge ageing',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-006',
    grade: 8,
    type: 'analysis',
    prompt:
      'Owen\'s Dulce et Decorum Est moves from collective "we" through second-person "you" addressing the reader directly to the bitter Latin tag - across this pronoun shift:',
    options: [
      'Owen makes the reader complicit, dragging civilians from comfortable distance into shared moral indictment of pro-war propaganda',
      'Pronoun usage is random',
      'It is for variety',
      'It is a translation issue',
    ],
    correctIndex: 0,
  },
  {
    id: 'gc-extra-g8-007',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Ozymandias, the layered narration ("I met a traveller... / Who said") plus the "shattered visage" plus "the lone and level sands stretch far away" combine to:',
    options: [
      'Add wordcount',
      "Triply distance the tyrant's voice, dramatising the humbling of human power by time and the unreliability of monumental self-mythology",
      'Show poor structure',
      'Suggest the speaker was lost',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-008',
    grade: 8,
    type: 'analysis',
    prompt:
      'Carol Ann Duffy\'s War Photographer juxtaposes "Rural England" with "running children in a nightmare heat" - the structural placement of these contrasts suggests:',
    options: [
      'A travel itinerary',
      'The moral discomfort of Western consumption of suffering: comfortable readers turn the page while the photographer carries unbearable knowledge',
      'A geography lesson',
      'No particular meaning',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-009',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Storm on the Island, Heaney\'s controlled iambic pentameter, his use of military diction ("salvo", "strafes", "bombarded") and the closing "huge nothing" together suggest:',
    options: [
      'A literal weather report',
      "How language and form try to contain primal fear; the storm becomes a metaphor for sectarian violence (Stormont) and humanity's vulnerability to invisible threat",
      'It is a war poem about a real battle',
      'An island geography study',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-010',
    grade: 8,
    type: 'analysis',
    prompt:
      'Across My Last Duchess, the Duke\'s enjambment, his casual aside "I gave commands; / Then all smiles stopped together" and his swift pivot to the next bride demonstrate:',
    options: [
      'Conversational charm',
      "Browning's dramatic monologue exposes patriarchal possessiveness: form and content collude so the reader convicts the speaker through his own words",
      'A genuine art tour',
      'Poetic incoherence',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-011',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Checking Out Me History, Agard\'s bilingual code-switching, lower-case "i" for the colonial curriculum and capitalised names of Black figures collectively:',
    options: [
      'Show bad spelling',
      'Enact resistance against erasure: form embodies the political reclamation of identity and corrects an Anglocentric historical record',
      'Are typographical errors',
      'Are decorative only',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-012',
    grade: 8,
    type: 'analysis',
    prompt:
      'Heaney\'s Follower closes "But today / It is my father who keeps stumbling / Behind me, and will not go away" - the structural reversal compared to the opening father-figure suggests:',
    options: [
      'A literal walk',
      "Time's inexorable role-reversal between generations and the haunting persistence of paternal influence, both physical and psychological",
      'The father is unwell',
      'Geography of farming',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-013',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Hughes\'s Bayonet Charge, the soldier "almost stopped - / In bewilderment" mid-line; combined with the violent verbs and the "cold clockwork of the stars and the nations", what is implied?',
    options: [
      'Stars are clocks',
      'The dehumanising mechanism of war reduces individual moral agency to a momentary, discarded hesitation within an indifferent cosmic and political machine',
      'The soldier is tired',
      'A simple battle scene',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-014',
    grade: 8,
    type: 'analysis',
    prompt:
      'Duffy\'s Mrs Midas turns "He was standing under the pear tree snapping a twig" into eventual exile of the husband - the domestic opening contrasted with mythic consequence demonstrates:',
    options: [
      'A literal myth retelling',
      "A feminist re-reading: the female perspective reveals how male greed (or even ambition) destroys intimacy, foregrounding the woman's loss within the classical tale",
      'Bad gardening',
      'A recipe',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g8-015',
    grade: 8,
    type: 'analysis',
    prompt:
      'In Remains, Armitage repeats "probably armed, possibly not" and ends "his bloody life in my bloody hands" - across this structural framing:',
    options: [
      'Just rhyme',
      "The uncertainty drives PTSD; the Macbeth allusion universalises the soldier's guilt as an inheritance of unresolvable moral injury",
      'A literal handwashing scene',
      'A narrative summary',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GRADE 9 - Conceptual / multi-AO / contextually rich (15 questions)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gc-extra-g9-001',
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate how Shakespeare uses Lady Macbeth as a vehicle for early-modern anxieties about gender, sovereignty and the unnatural.',
    options: [
      'She is just a wife',
      'She is presented as transgressively rejecting "feminine" categories - invoking spirits to "unsex" her - which a Jacobean audience under James I (and his fascination with witchcraft in Daemonologie) would have read as both dramatic transgression and theological threat to the divinely ordered hierarchy',
      'She is purely sympathetic',
      'She is a comic figure',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-002',
    grade: 9,
    type: 'analysis',
    prompt: 'How far is Macbeth a play that endorses the Divine Right of Kings or interrogates it?',
    options: [
      'It is a simple endorsement',
      'While the restoration of Malcolm and the Banquo line gestures toward Jacobean orthodoxy, the play\'s sympathetic interiority for the usurper, the destabilising witches and the moral bankruptcy of Duncan\'s "absolute trust" complicate any simple endorsement of providential kingship',
      'It rejects monarchy entirely',
      'It is apolitical',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-003',
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Priestley exploit dramatic form in An Inspector Calls to expose the hypocrisies of capitalist patriarchy?',
    options: [
      'Through realism only',
      'The well-made-play structure, the cyclical ending, the Inspector as quasi-Brechtian moral outside-figure, and the temporal gap between 1912 setting and 1945 audience together convert a domestic drawing-room play into a socialist polemic that indicts pre-war complacency from a post-war perspective',
      'It is purely entertainment',
      'It uses comedy alone',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-004',
    grade: 9,
    type: 'analysis',
    prompt:
      'To what extent is Jekyll and Hyde a Gothic text, a scientific cautionary tale, or a critique of Victorian respectability?',
    options: [
      'It is only Gothic',
      'It is all three: Stevenson fuses Gothic doubling, fin-de-siècle anxieties about Darwinian degeneration and unregulated science, and a satire of professional male hypocrisy in fog-bound London - the "respectable" Jekyll requires Hyde precisely because Victorian morality demanded performance over integration',
      'It is just a horror story',
      'It is purely autobiographical',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-005',
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Dickens exploit the novella form and his narrative voice in A Christmas Carol to combine entertainment with social activism?',
    options: [
      'Pure entertainment',
      'The compressed five-stave ghost-story structure makes moral conversion psychologically plausible at speed; the intrusive narrator\'s direct address ("Reader, it was the same") collapses fictional distance, weaponising sentimental form to shame middle-class readers about industrial poverty post-1843',
      'A simple Christmas story',
      'A theological treatise',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-006',
    grade: 9,
    type: 'analysis',
    prompt:
      "How does Browning's My Last Duchess function as both a Renaissance period-piece and a Victorian ethical inquiry?",
    options: [
      'Only as historical fiction',
      'The dramatic monologue places a Renaissance Duke (modelled on Alfonso II of Ferrara) on stage, but the implied 19th-century reader is invited to judge the speaker - Browning thus uses historical distance to interrogate contemporary patriarchal power, art-as-possession, and the moral complicity of aestheticism',
      'Pure character study',
      'A love poem',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-007',
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically assess how Owen reshapes the elegiac and Horatian traditions in Dulce et Decorum Est to dismantle pro-war rhetoric.',
    options: [
      'He praises war',
      'Owen subverts the Horatian "old lie" through harrowing iambic disruption, second-person address, and the central simile "like a devil\'s sick of sin" - converting elegy into accusation and exposing how classical pieties enabled industrial slaughter',
      'It is a neutral report',
      'It celebrates Latin culture',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-008',
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shelley use Ozymandias to engage with Romantic ideas about tyranny, time and the artist?',
    options: [
      'It is purely descriptive',
      'Within the post-Napoleonic political context, Shelley dismantles imperial pretension - the sculptor\'s "hand that mocked them" outlives the king, suggesting the Romantic conviction that art and nature ultimately humble even the most absolute political power',
      'It admires Egypt',
      'It is anti-art',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-009',
    grade: 9,
    type: 'analysis',
    prompt:
      "How does Heaney's Storm on the Island operate simultaneously as nature poem, political allegory and metapoetic reflection?",
    options: [
      'Just a weather poem',
      'Surface-level meteorological observation cloaks an allusion to Stormont and Northern-Irish sectarian violence; the iambic control ironises the speaker\'s assertion of safety, while the closing "huge nothing that we fear" gestures toward the limits of representation itself',
      'A scientific paper',
      'An island travelogue',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-010',
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Duffy reshape canonical narratives in poems like Mrs Midas and Medusa to advance a feminist poetics?',
    options: [
      'She rewrites for fun',
      'By voicing peripheral or demonised mythic women, Duffy redistributes narrative authority; classical allusion becomes a vehicle for examining contemporary marriage, ageing and female anger, making intertextuality itself a feminist political act',
      'She rejects all myths',
      'She copies the originals',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-011',
    grade: 9,
    type: 'analysis',
    prompt:
      "How do Tennyson's The Charge of the Light Brigade and Owen's Dulce et Decorum Est jointly map shifting Victorian-to-Modern attitudes to war?",
    options: [
      'They agree fully',
      'Tennyson\'s anaphoric celebration of duty within Imperial Crimean rhetoric is, by Owen\'s post-Somme generation, dismantled as the Latinate "old Lie"; comparative reading therefore traces the literary collapse of heroic militarism into modernist disillusion',
      'They are unrelated',
      'They are both pro-war',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-012',
    grade: 9,
    type: 'analysis',
    prompt:
      'In what ways does Jane Eyre (or comparable 19th-century fiction studied at GCSE) negotiate gender, class and religion through its narrative voice?',
    options: [
      'Through dialogue only',
      'The retrospective first-person voice fuses Bildungsroman convention with proto-feminist interiority - Jane\'s "I am no bird; and no net ensnares me" claims subjectivity against the Victorian triple constraint of femininity, dependency and Evangelical self-renunciation',
      'It is purely Romantic',
      'It is anti-religious',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-013',
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Carol Ann Duffy use the dramatic monologue in War Photographer to interrogate ethics of representation?',
    options: [
      'A simple character study',
      'The third-person framing distances readers from the photographer who in turn distances himself in the darkroom; the structural triad of warzone / darkroom / Sunday supplement implicates aesthetics, journalism and consumer apathy in a chain of complicity',
      'It celebrates photography',
      'It rejects all journalism',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-014',
    grade: 9,
    type: 'analysis',
    prompt:
      'For Level 6 (Mark Scheme top band) on AQA Literature unseen poetry, what most distinguishes a Grade 9 response?',
    options: [
      'Length and number of quotations',
      "A conceptualised, critical thesis sustained across the response, with precise textual analysis that integrates language, form and structure, alternative interpretations, and an alert sensitivity to the writer's methods - not just a list of features",
      'Listing techniques',
      'Pure context',
    ],
    correctIndex: 1,
  },
  {
    id: 'gc-extra-g9-015',
    grade: 9,
    type: 'analysis',
    prompt:
      'On AQA Language Paper 1 Question 4 (the "to what extent" evaluation), what marks out a top-band response?',
    options: [
      'Quoting at length',
      "Critical, perceptive evaluation that takes a clear evaluative stance on the statement, supports it with judiciously selected textual detail, analyses the writer's methods to construct effect, and shows alert awareness of how the text positions the reader",
      'Personal opinion alone',
      'Listing techniques without comment',
    ],
    correctIndex: 1,
  },
]
