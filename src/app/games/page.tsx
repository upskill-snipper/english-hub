'use client'

import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react'
import Link from 'next/link'
import {
  Gamepad2,
  Lock,
  Trophy,
  Timer,
  Star,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Shuffle,
  BookOpen,
  PenTool,
  Sparkles,
  Volume2,
  Brain,
  RotateCcw,
  ChevronRight,
  Zap,
  Medal,
  Crown,
  Layers,
  Target,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { QuizJsonLd } from '@/components/seo/json-ld'
import { cn } from '@/lib/utils'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ═══════════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════════

const WORD_SCRAMBLE_WORDS = [
  // 4-5 letter starter words
  { word: 'PLOT', hint: 'The sequence of events in a story' },
  { word: 'TONE', hint: 'The author’s attitude toward the subject' },
  { word: 'MOOD', hint: 'The atmosphere or feeling in a text' },
  { word: 'VERB', hint: 'A doing or action word' },
  { word: 'NOUN', hint: 'A naming word for a person, place, or thing' },
  { word: 'IRONY', hint: 'When the opposite of what is expected occurs' },
  { word: 'VOLTA', hint: 'A turn or shift in thought in a sonnet' },
  { word: 'MOTIF', hint: 'A recurring element with symbolic significance' },
  { word: 'GENRE', hint: 'A category or style of literature' },
  { word: 'THEME', hint: 'The central idea or message of a text' },
  { word: 'SIMILE', hint: 'Comparison using "like" or "as"' },
  { word: 'STANZA', hint: 'A group of lines in a poem' },
  { word: 'SYNTAX', hint: 'The arrangement of words in a sentence' },
  // 7-9 letter mid words
  { word: 'METAPHOR', hint: 'A figure of speech comparing two unlike things' },
  { word: 'CAESURA', hint: 'A pause in the middle of a line of poetry' },
  { word: 'PLOSIVE', hint: 'A consonant sound made by stopping airflow' },
  { word: 'DIALOGUE', hint: 'Conversation between characters' },
  { word: 'EPIGRAPH', hint: 'A quotation at the beginning of a text' },
  { word: 'OXYMORON', hint: 'Two contradictory words placed together' },
  { word: 'ALLEGORY', hint: 'A story with a hidden moral or political meaning' },
  { word: 'ANAPHORA', hint: 'Repetition of a word at the start of successive clauses' },
  { word: 'RHETORIC', hint: 'The art of persuasive speaking or writing' },
  { word: 'HYPERBOLE', hint: 'Extreme exaggeration for effect' },
  { word: 'SOLILOQUY', hint: 'A character speaking their thoughts aloud alone' },
  { word: 'EUPHEMISM', hint: 'A mild expression substituted for a harsh one' },
  { word: 'NARRATIVE', hint: 'A spoken or written account of events' },
  { word: 'SIBILANCE', hint: 'Repetition of "s" and "sh" sounds' },
  { word: 'ASSONANCE', hint: 'Repetition of vowel sounds' },
  // 10+ letter advanced words
  { word: 'CONSONANCE', hint: 'Repetition of consonant sounds within words' },
  { word: 'ENJAMBMENT', hint: 'A sentence running over a line break in poetry' },
  { word: 'DENOUEMENT', hint: 'The final resolution of a story' },
  { word: 'PROTAGONIST', hint: 'The main character in a story' },
  { word: 'ANTAGONIST', hint: 'The character who opposes the main character' },
  { word: 'ALLITERATION', hint: 'Repetition of initial consonant sounds' },
  { word: 'ONOMATOPOEIA', hint: 'Words that imitate sounds' },
  { word: 'JUXTAPOSITION', hint: 'Placing two things side by side for contrast' },
  { word: 'FORESHADOWING', hint: 'Hints at what will happen later' },
  { word: 'PERSONIFICATION', hint: 'Giving human qualities to non-human things' },
  { word: 'PATHETIC FALLACY', hint: 'Weather reflecting mood or emotions' },
]

// Curriculum-only quote bank. Every entry is tagged with the GCSE/IGCSE
// boards that actually study the text. Non-curriculum texts (Harry Potter,
// Stephen King, Jane Austen outside Pride and Prejudice, etc.) are NOT
// included — students should only see quotes from their own set texts.
type QuoteItem = {
  quote: string
  textSlug: string // canonical slug from @/lib/board/set-texts
  answer: string
  options: string[]
}

const QUOTE_MATCH_DATA: QuoteItem[] = [
  // ── Macbeth (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE) ────────────────────
  {
    quote: '"Is this a dagger which I see before me, the handle toward my hand?"',
    textSlug: 'macbeth',
    answer: 'Macbeth — William Shakespeare',
    options: [
      'Macbeth — William Shakespeare',
      'Romeo and Juliet — William Shakespeare',
      'An Inspector Calls — J.B. Priestley',
      'A Christmas Carol — Charles Dickens',
    ],
  },
  {
    quote: '"Out, out, brief candle! Life\'s but a walking shadow."',
    textSlug: 'macbeth',
    answer: 'Macbeth — William Shakespeare',
    options: [
      'Macbeth — William Shakespeare',
      'Romeo and Juliet — William Shakespeare',
      'The Merchant of Venice — William Shakespeare',
      'Much Ado About Nothing — William Shakespeare',
    ],
  },
  {
    quote: '"Fair is foul, and foul is fair."',
    textSlug: 'macbeth',
    answer: 'Macbeth — William Shakespeare',
    options: [
      'Macbeth — William Shakespeare',
      'An Inspector Calls — J.B. Priestley',
      'Romeo and Juliet — William Shakespeare',
      'Lord of the Flies — William Golding',
    ],
  },
  {
    quote: '"Look like the innocent flower, but be the serpent under\'t."',
    textSlug: 'macbeth',
    answer: 'Macbeth — William Shakespeare',
    options: [
      'Macbeth — William Shakespeare',
      'Jekyll and Hyde — R.L. Stevenson',
      'Frankenstein — Mary Shelley',
      'Romeo and Juliet — William Shakespeare',
    ],
  },

  // ── Romeo and Juliet (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE) ──────────
  {
    quote: '"What light through yonder window breaks?"',
    textSlug: 'romeo-and-juliet',
    answer: 'Romeo and Juliet — William Shakespeare',
    options: [
      'Romeo and Juliet — William Shakespeare',
      'Macbeth — William Shakespeare',
      'The Merchant of Venice — William Shakespeare',
      'Much Ado About Nothing — William Shakespeare',
    ],
  },
  {
    quote: '"A plague o\' both your houses."',
    textSlug: 'romeo-and-juliet',
    answer: 'Romeo and Juliet — William Shakespeare',
    options: [
      'Romeo and Juliet — William Shakespeare',
      'Macbeth — William Shakespeare',
      'An Inspector Calls — J.B. Priestley',
      'The Merchant of Venice — William Shakespeare',
    ],
  },

  // ── An Inspector Calls (AQA, Edexcel, OCR, Eduqas, Edexcel IGCSE) ────────
  {
    quote: '"We are members of one body. We are responsible for each other."',
    textSlug: 'an-inspector-calls',
    answer: 'An Inspector Calls — J.B. Priestley',
    options: [
      'An Inspector Calls — J.B. Priestley',
      'A Christmas Carol — Charles Dickens',
      'Blood Brothers — Willy Russell',
      'Lord of the Flies — William Golding',
    ],
  },
  {
    quote: '"Fire and blood and anguish."',
    textSlug: 'an-inspector-calls',
    answer: 'An Inspector Calls — J.B. Priestley',
    options: [
      'An Inspector Calls — J.B. Priestley',
      'Macbeth — William Shakespeare',
      'Jekyll and Hyde — R.L. Stevenson',
      'A Christmas Carol — Charles Dickens',
    ],
  },
  {
    quote: '"A man has to make his own way."',
    textSlug: 'an-inspector-calls',
    answer: 'An Inspector Calls — J.B. Priestley',
    options: [
      'An Inspector Calls — J.B. Priestley',
      'Animal Farm — George Orwell',
      'Lord of the Flies — William Golding',
      'Of Mice and Men — John Steinbeck',
    ],
  },

  // ── A Christmas Carol (AQA, Edexcel, Eduqas) ──────────────────────────────
  {
    quote: '"Are there no prisons? Are there no workhouses?"',
    textSlug: 'a-christmas-carol',
    answer: 'A Christmas Carol — Charles Dickens',
    options: [
      'A Christmas Carol — Charles Dickens',
      'An Inspector Calls — J.B. Priestley',
      'Jekyll and Hyde — R.L. Stevenson',
      'Great Expectations — Charles Dickens',
    ],
  },
  {
    quote: '"God bless us, every one!"',
    textSlug: 'a-christmas-carol',
    answer: 'A Christmas Carol — Charles Dickens',
    options: [
      'A Christmas Carol — Charles Dickens',
      'Oliver Twist — Charles Dickens',
      'Silas Marner — George Eliot',
      'Pride and Prejudice — Jane Austen',
    ],
  },
  {
    quote: '"I wear the chain I forged in life."',
    textSlug: 'a-christmas-carol',
    answer: 'A Christmas Carol — Charles Dickens',
    options: [
      'A Christmas Carol — Charles Dickens',
      'Jekyll and Hyde — R.L. Stevenson',
      'Frankenstein — Mary Shelley',
      'Macbeth — William Shakespeare',
    ],
  },

  // ── Jekyll and Hyde (AQA, Edexcel, OCR, Eduqas) ──────────────────────────
  {
    quote: '"Man is not truly one, but truly two."',
    textSlug: 'jekyll-and-hyde',
    answer: 'Jekyll and Hyde — R.L. Stevenson',
    options: [
      'Jekyll and Hyde — R.L. Stevenson',
      'Frankenstein — Mary Shelley',
      'Macbeth — William Shakespeare',
      'A Christmas Carol — Charles Dickens',
    ],
  },
  {
    quote: '"With ape-like fury, he was trampling his victim under foot."',
    textSlug: 'jekyll-and-hyde',
    answer: 'Jekyll and Hyde — R.L. Stevenson',
    options: [
      'Jekyll and Hyde — R.L. Stevenson',
      'Frankenstein — Mary Shelley',
      'Jane Eyre — Charlotte Brontë',
      'Great Expectations — Charles Dickens',
    ],
  },

  // ── Pride and Prejudice (AQA, Edexcel, OCR, Eduqas) ──────────────────────
  {
    quote:
      '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    textSlug: 'pride-and-prejudice',
    answer: 'Pride and Prejudice — Jane Austen',
    options: [
      'Pride and Prejudice — Jane Austen',
      'Jane Eyre — Charlotte Brontë',
      'Silas Marner — George Eliot',
      'Frankenstein — Mary Shelley',
    ],
  },

  // ── Jane Eyre (AQA, OCR) ──────────────────────────────────────────────────
  {
    quote: '"I am no bird; and no net ensnares me."',
    textSlug: 'jane-eyre',
    answer: 'Jane Eyre — Charlotte Brontë',
    options: [
      'Jane Eyre — Charlotte Brontë',
      'Pride and Prejudice — Jane Austen',
      'Wuthering Heights — Emily Brontë',
      'Great Expectations — Charles Dickens',
    ],
  },
  {
    quote: '"Reader, I married him."',
    textSlug: 'jane-eyre',
    answer: 'Jane Eyre — Charlotte Brontë',
    options: [
      'Jane Eyre — Charlotte Brontë',
      'Pride and Prejudice — Jane Austen',
      'Silas Marner — George Eliot',
      'The Sign of Four — Arthur Conan Doyle',
    ],
  },

  // ── Frankenstein (AQA, Edexcel, OCR) ──────────────────────────────────────
  {
    quote: '"I beheld the wretch — the miserable monster whom I had created."',
    textSlug: 'frankenstein',
    answer: 'Frankenstein — Mary Shelley',
    options: [
      'Frankenstein — Mary Shelley',
      'Jekyll and Hyde — R.L. Stevenson',
      'Jane Eyre — Charlotte Brontë',
      'A Christmas Carol — Charles Dickens',
    ],
  },

  // ── Animal Farm (AQA, Edexcel, OCR) ──────────────────────────────────────
  {
    quote: '"All animals are equal, but some animals are more equal than others."',
    textSlug: 'animal-farm',
    answer: 'Animal Farm — George Orwell',
    options: [
      'Animal Farm — George Orwell',
      'Lord of the Flies — William Golding',
      'Of Mice and Men — John Steinbeck',
      'An Inspector Calls — J.B. Priestley',
    ],
  },

  // ── Lord of the Flies (AQA, OCR, Eduqas) ─────────────────────────────────
  {
    quote: '"The thing is — fear can\'t hurt you any more than a dream."',
    textSlug: 'lord-of-the-flies',
    answer: 'Lord of the Flies — William Golding',
    options: [
      'Lord of the Flies — William Golding',
      'Animal Farm — George Orwell',
      'Of Mice and Men — John Steinbeck',
      'An Inspector Calls — J.B. Priestley',
    ],
  },

  // ── Of Mice and Men (Edexcel IGCSE) ──────────────────────────────────────
  {
    quote: '"A guy needs somebody — to be near him."',
    textSlug: 'of-mice-and-men',
    answer: 'Of Mice and Men — John Steinbeck',
    options: [
      'Of Mice and Men — John Steinbeck',
      'To Kill a Mockingbird — Harper Lee',
      'Animal Farm — George Orwell',
      'Things Fall Apart — Chinua Achebe',
    ],
  },

  // ── To Kill a Mockingbird (Edexcel IGCSE) ────────────────────────────────
  {
    quote:
      '"You never really understand a person until you consider things from his point of view."',
    textSlug: 'to-kill-a-mockingbird',
    answer: 'To Kill a Mockingbird — Harper Lee',
    options: [
      'To Kill a Mockingbird — Harper Lee',
      'Of Mice and Men — John Steinbeck',
      'Things Fall Apart — Chinua Achebe',
      'A View from the Bridge — Arthur Miller',
    ],
  },

  // ── Things Fall Apart (Edexcel IGCSE) ────────────────────────────────────
  {
    quote:
      '"The white man is very clever... He has put a knife on the things that held us together."',
    textSlug: 'things-fall-apart',
    answer: 'Things Fall Apart — Chinua Achebe',
    options: [
      'Things Fall Apart — Chinua Achebe',
      'To Kill a Mockingbird — Harper Lee',
      'Of Mice and Men — John Steinbeck',
      'A View from the Bridge — Arthur Miller',
    ],
  },

  // ── Ozymandias (AQA Power & Conflict, Eduqas anthology, OCR) ─────────────
  {
    quote: '"Look on my Works, ye Mighty, and despair!"',
    textSlug: 'ozymandias',
    answer: 'Ozymandias — Percy Bysshe Shelley',
    options: [
      'Ozymandias — Percy Bysshe Shelley',
      'London — William Blake',
      'My Last Duchess — Robert Browning',
      'The Charge of the Light Brigade — Alfred Tennyson',
    ],
  },

  // ── Dulce et Decorum Est (Eduqas anthology) ──────────────────────────────
  {
    quote: '"Bent double, like old beggars under sacks."',
    textSlug: 'dulce-et-decorum-est',
    answer: 'Dulce et Decorum Est — Wilfred Owen',
    options: [
      'Dulce et Decorum Est — Wilfred Owen',
      'The Charge of the Light Brigade — Alfred Tennyson',
      'Bayonet Charge — Ted Hughes',
      'Exposure — Wilfred Owen',
    ],
  },
]

const GRAMMAR_FIX_DATA = [
  {
    sentence: 'Their going to the shops after school today.',
    error: 'Their',
    options: ["They're", 'Their', 'There', 'Theyre'],
    correct: "They're",
    category: 'Spelling / Homophones',
  },
  {
    sentence: 'The boy who was running fast, he tripped over.',
    error: 'the comma and "he"',
    options: [
      'Remove ", he" and keep the sentence as one clause',
      'Add "and" before "he"',
      'Replace comma with semicolon',
      'No change needed',
    ],
    correct: 'Remove ", he" and keep the sentence as one clause',
    category: 'Sentence Structure',
  },
  {
    sentence: 'Me and my friend went to the cinema.',
    error: 'Me and my friend',
    options: ['My friend and I', 'Me and my friend', 'I and my friend', 'Myself and my friend'],
    correct: 'My friend and I',
    category: 'Grammar',
  },
  {
    sentence: 'The dogs bowl was empty.',
    error: 'dogs',
    options: ["dog's", 'dogs', "dogs'", 'dogz'],
    correct: "dog's",
    category: 'Punctuation',
  },
  {
    sentence: 'She could of gone to the party.',
    error: 'could of',
    options: ['could have', 'could of', 'could off', 'should of'],
    correct: 'could have',
    category: 'Grammar',
  },
  {
    sentence: 'The team are playing good today.',
    error: 'good',
    options: ['well', 'good', 'goodly', 'better'],
    correct: 'well',
    category: 'Grammar',
  },
  {
    sentence: 'I was sat in the chair waiting.',
    error: 'was sat',
    options: ['was sitting', 'was sat', 'were sitting', 'sat'],
    correct: 'was sitting',
    category: 'Tense',
  },
  {
    sentence: 'The affect of the storm was devastating.',
    error: 'affect',
    options: ['effect', 'affect', 'affection', 'effecting'],
    correct: 'effect',
    category: 'Spelling / Homophones',
  },
  {
    sentence: 'Each of the students have completed their work.',
    error: 'have',
    options: ['has', 'have', 'having', 'had'],
    correct: 'has',
    category: 'Grammar',
  },
  {
    sentence: 'However I think we should reconsider.',
    error: 'Missing comma after However',
    options: ['However, I think', 'However I think', 'However; I think', 'However: I think'],
    correct: 'However, I think',
    category: 'Punctuation',
  },
  {
    sentence: "The childrens' toys were scattered everywhere.",
    error: "childrens'",
    options: ["children's", "childrens'", 'childrens', "childs'"],
    correct: "children's",
    category: 'Punctuation',
  },
  {
    sentence: 'She was less taller than her sister.',
    error: 'less taller',
    options: ['less tall', 'less taller', 'lesser tall', 'more shorter'],
    correct: 'less tall',
    category: 'Grammar',
  },
  {
    sentence: 'Between you and I, the test was easy.',
    error: 'I',
    options: ['me', 'I', 'myself', 'we'],
    correct: 'me',
    category: 'Grammar',
  },
  {
    sentence: 'The principle of the school gave a speech.',
    error: 'principle',
    options: ['principal', 'principle', 'princible', 'principel'],
    correct: 'principal',
    category: 'Spelling / Homophones',
  },
  {
    sentence: 'He done his homework before dinner.',
    error: 'done',
    options: ['did', 'done', 'has done', 'doing'],
    correct: 'did',
    category: 'Tense',
  },
  {
    sentence: 'The weather was to bad to go outside.',
    error: 'to',
    options: ['too', 'to', 'two', 'tow'],
    correct: 'too',
    category: 'Spelling / Homophones',
  },
  {
    sentence: 'Running quickly down the street.',
    error: 'Sentence fragment',
    options: [
      'He was running quickly down the street.',
      'Running quickly down the street.',
      'Quickly running down the street.',
      'Run quickly down the street.',
    ],
    correct: 'He was running quickly down the street.',
    category: 'Sentence Structure',
  },
  {
    sentence: 'I would definately recommend this book.',
    error: 'definately',
    options: ['definitely', 'definately', 'definitley', 'definatly'],
    correct: 'definitely',
    category: 'Spelling',
  },
  {
    sentence: "Who's book is this on the table?",
    error: "Who's",
    options: ['Whose', "Who's", 'Whos', "Whom's"],
    correct: 'Whose',
    category: 'Punctuation',
  },
  {
    sentence: 'The data shows that students performs better in the morning.',
    error: 'performs',
    options: ['perform', 'performs', 'performing', 'performed'],
    correct: 'perform',
    category: 'Grammar',
  },
  {
    sentence: 'Alot of people came to the event.',
    error: 'Alot',
    options: ['A lot', 'Alot', 'Allot', 'A-lot'],
    correct: 'A lot',
    category: 'Spelling',
  },
  {
    sentence: 'She learned me how to play chess.',
    error: 'learned',
    options: ['taught', 'learned', 'learnt', 'teached'],
    correct: 'taught',
    category: 'Grammar',
  },
  {
    sentence: 'Its important to practice everyday.',
    error: 'Its',
    options: ["It's", 'Its', "Its'", "It is's"],
    correct: "It's",
    category: 'Punctuation',
  },
  {
    sentence: 'I should of went to the library yesterday.',
    error: 'should of went',
    options: ['should have gone', 'should of went', 'should of gone', 'should have went'],
    correct: 'should have gone',
    category: 'Tense',
  },
  {
    sentence: 'The committee has made there decision.',
    error: 'there',
    options: ['their', 'there', "they're", 'thier'],
    correct: 'their',
    category: 'Spelling / Homophones',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function scrambleWord(word: string): string {
  // For multi-word terms, scramble each word separately to keep spaces in place
  if (word.includes(' ')) {
    return word
      .split(' ')
      .map((w) => scrambleWord(w))
      .join(' ')
  }
  const letters = word.split('')
  let scrambled = shuffleArray(letters).join('')
  // make sure it's different from the original
  let attempts = 0
  while (scrambled === word && attempts < 20) {
    scrambled = shuffleArray(letters).join('')
    attempts++
  }
  return scrambled
}

// Build a scaffold of pre-revealed letters for longer words.
// - Words < 7 letters: no scaffold (return null).
// - 7-9 letters: reveal first letter and every 4th letter after (positions 0, 4, 8...).
// - 10+ letters: reveal first letter, last letter, and middle letter.
// Spaces in the answer are always shown as spaces (not as blanks).
function buildScaffold(word: string): (string | null)[] | null {
  const len = word.length
  // Trim by counting only non-space chars to decide difficulty bucket
  const letterCount = word.replace(/\s/g, '').length
  if (letterCount < 7) return null

  const slots: (string | null)[] = Array.from(word, (ch) => (ch === ' ' ? ' ' : null))
  const letterIdx: number[] = []
  for (let i = 0; i < len; i++) {
    if (word[i] !== ' ') letterIdx.push(i)
  }

  if (letterCount >= 10) {
    // first, middle, last letter positions among non-space letters
    const first = letterIdx[0]
    const last = letterIdx[letterIdx.length - 1]
    const mid = letterIdx[Math.floor(letterIdx.length / 2)]
    slots[first] = word[first]
    slots[last] = word[last]
    slots[mid] = word[mid]
  } else {
    // 7-9 letters: first + every 4th letter after
    for (let n = 0; n < letterIdx.length; n += 4) {
      const idx = letterIdx[n]
      slots[idx] = word[idx]
    }
  }
  return slots
}

// ═══════════════════════════════════════════════════════════════════════════════
// LEADERBOARD
// ═══════════════════════════════════════════════════════════════════════════════

interface LeaderboardEntry {
  name: string
  game: string
  score: number
  total: number
  date: string
}

const ANONYMOUS_NAMES = [
  'Clever Fox',
  'Swift Eagle',
  'Brave Lion',
  'Wise Owl',
  'Bold Tiger',
  'Quick Hawk',
  'Sharp Wolf',
  'Keen Falcon',
  'Bright Otter',
  'Calm Stag',
  'Noble Bear',
  'Daring Lynx',
  'Witty Raven',
  'Proud Heron',
  'Agile Puma',
  'Sly Badger',
  'Fierce Cobra',
  'Gentle Crane',
  'Loyal Hound',
  'Sleek Panther',
]

const LEADERBOARD_KEY = 'english-hub-leaderboard'
const PLAYER_NAME_KEY = 'english-hub-player-name'
const LEADERBOARD_WEEK_KEY = 'english-hub-leaderboard-week'

function getWeekNumber(): string {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const daysSinceStart = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000)
  const weekNum = Math.ceil((daysSinceStart + startOfYear.getDay() + 1) / 7)
  return `${now.getFullYear()}-W${weekNum}`
}

function getPlayerName(): string {
  if (typeof window === 'undefined') return 'You'
  let name = localStorage.getItem(PLAYER_NAME_KEY)
  if (!name) {
    name = ANONYMOUS_NAMES[Math.floor(Math.random() * ANONYMOUS_NAMES.length)]
    localStorage.setItem(PLAYER_NAME_KEY, name)
  }
  return name
}

function generateSeedEntries(): LeaderboardEntry[] {
  const today = new Date().toISOString()
  const names = shuffleArray(ANONYMOUS_NAMES).slice(0, 8)
  const games = [
    'word-scramble',
    'quote-match',
    'grammar-fix',
    'theme-matcher',
    'speed-analysis',
    'vocabulary-builder',
    'spelling-bee',
  ]
  const entries: LeaderboardEntry[] = []

  // Spread seed entries across all three games
  names.forEach((name, i) => {
    const game = games[i % 3]
    const total = game === 'word-scramble' ? WORD_SCRAMBLE_WORDS.length : 10
    const minScore = Math.floor(total * 0.4)
    const score = minScore + Math.floor(Math.random() * (total - minScore + 1))
    entries.push({ name, game, score, total, date: today })
  })
  return entries
}

function getLeaderboard(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return []
  const currentWeek = getWeekNumber()
  const storedWeek = localStorage.getItem(LEADERBOARD_WEEK_KEY)

  if (storedWeek !== currentWeek) {
    // Weekly reset - seed with fake entries
    const seed = generateSeedEntries()
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(seed))
    localStorage.setItem(LEADERBOARD_WEEK_KEY, currentWeek)
    return seed
  }

  try {
    const data = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]')
    return data as LeaderboardEntry[]
  } catch {
    return []
  }
}

function saveToLeaderboard(game: string, score: number, total: number) {
  if (typeof window === 'undefined') return
  const entries = getLeaderboard()
  const playerName = getPlayerName()
  entries.push({
    name: playerName,
    game,
    score,
    total,
    date: new Date().toISOString(),
  })
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries))
}

function getTopScoresForGame(entries: LeaderboardEntry[], gameId: string): LeaderboardEntry[] {
  return entries
    .filter((e) => e.game === gameId)
    .sort((a, b) => b.score / b.total - a.score / a.total || b.score - a.score)
    .slice(0, 10)
}

const GAME_TAB_META: Record<string, { label: string; color: string; activeColor: string }> = {
  'word-scramble': {
    label: 'Word Scramble',
    color: 'text-emerald-400',
    activeColor: 'data-active:text-emerald-400',
  },
  'quote-match': {
    label: 'Quote Match',
    color: 'text-violet-400',
    activeColor: 'data-active:text-violet-400',
  },
  'grammar-fix': {
    label: 'Grammar Fix',
    color: 'text-clay-600',
    activeColor: 'data-active:text-clay-600',
  },
}

// ─── Leaderboard Component ──────────────────────────────────────────────────

function WeeklyLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [playerName, setPlayerName] = useState('')

  useEffect(() => {
    setEntries(getLeaderboard())
    setPlayerName(getPlayerName())
  }, [])

  // Refresh entries every time the component mounts (covers returning from a game)
  // We use a custom event so the game finish screens can trigger a refresh
  useEffect(() => {
    const handler = () => {
      setEntries(getLeaderboard())
    }
    window.addEventListener('leaderboard-updated', handler)
    return () => window.removeEventListener('leaderboard-updated', handler)
  }, [])

  const gameIds = ['word-scramble', 'quote-match', 'grammar-fix']

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10">
              <Trophy className="size-5 text-clay-600" aria-hidden="true" />
            </div>
            <div>
              <CardTitle>Weekly Leaderboard</CardTitle>
              <CardDescription className="text-xs mt-0.5">Resets every week</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="text-[10px] text-muted-foreground">
            {getWeekNumber()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2 pb-4">
        <Tabs defaultValue="word-scramble">
          <TabsList className="w-full mb-3 bg-transparent gap-1.5 p-0">
            {gameIds.map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                className={cn(
                  'text-xs flex-1 rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40',
                  GAME_TAB_META[id].activeColor,
                )}
              >
                {GAME_TAB_META[id].label}
              </TabsTrigger>
            ))}
          </TabsList>
          {gameIds.map((id) => {
            const top = getTopScoresForGame(entries, id)
            return (
              <TabsContent key={id} value={id}>
                {top.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-6">
                    No scores yet this week. Be the first!
                  </p>
                ) : (
                  <div className="space-y-1">
                    {top.map((entry, idx) => {
                      const isYou = entry.name === playerName
                      const pct = Math.round((entry.score / entry.total) * 100)
                      return (
                        <div
                          key={`${entry.name}-${entry.date}-${idx}`}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                            isYou ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50',
                          )}
                        >
                          {/* Rank badge */}
                          <div className="w-7 shrink-0 text-center">
                            {idx === 0 && (
                              <Crown
                                className="size-5 text-clay-600 mx-auto"
                                aria-label="1st place"
                              />
                            )}
                            {idx === 1 && (
                              <Medal
                                className="size-5 text-zinc-300 mx-auto"
                                aria-label="2nd place"
                              />
                            )}
                            {idx === 2 && (
                              <Medal
                                className="size-5 text-amber-600 mx-auto"
                                aria-label="3rd place"
                              />
                            )}
                            {idx > 2 && (
                              <span className="text-xs font-bold text-muted-foreground">
                                {idx + 1}
                              </span>
                            )}
                          </div>
                          {/* Name */}
                          <span
                            className={cn('flex-1 font-medium truncate', isYou && 'text-primary')}
                          >
                            {entry.name}
                            {isYou && (
                              <span className="ml-1.5 text-[10px] uppercase tracking-wider font-bold text-primary/70">
                                You
                              </span>
                            )}
                          </span>
                          {/* Score */}
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={cn(
                                'font-bold tabular-nums',
                                idx === 0
                                  ? 'text-clay-600'
                                  : idx === 1
                                    ? 'text-zinc-300'
                                    : idx === 2
                                      ? 'text-amber-600'
                                      : 'text-foreground',
                              )}
                            >
                              {entry.score}/{entry.total}
                            </span>
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                              {pct}%
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </TabsContent>
            )
          })}
        </Tabs>
      </CardContent>
    </Card>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// GAME DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

interface GameDef {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  difficulty: 'Easy' | 'Medium' | 'Hard'
  locked: boolean
  color: string
  gradient: string
  /** If set, clicking the card navigates to a dedicated game page instead of inline play */
  href?: string
}

const GAMES: GameDef[] = [
  {
    id: 'word-scramble',
    title: 'Word Scramble',
    description: 'Unscramble English & Literature terminology before time runs out!',
    icon: <Shuffle className="size-6" />,
    difficulty: 'Easy',
    locked: false,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    id: 'quote-match',
    title: 'Quote Match',
    description: 'Match famous literary quotes to the correct author or work.',
    icon: <BookOpen className="size-6" />,
    difficulty: 'Medium',
    locked: false,
    color: 'text-violet-400',
    gradient: 'from-violet-500/20 to-violet-500/5',
  },
  {
    id: 'grammar-fix',
    title: 'Grammar Fix',
    description: 'Spot and correct grammar, punctuation, and spelling errors.',
    icon: <PenTool className="size-6" />,
    difficulty: 'Medium',
    locked: false,
    color: 'text-clay-600',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
  {
    id: 'theme-matcher',
    title: 'Theme Matcher',
    description: 'Match themes to the correct GCSE set texts. Multiple answers per round!',
    icon: <Layers className="size-6" />,
    difficulty: 'Hard',
    locked: false,
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-pink-500/5',
    href: '/games/theme-matcher',
  },
  {
    id: 'speed-analysis',
    title: 'Speed Analysis',
    description: 'Identify literary devices in short extracts against the clock.',
    icon: <Target className="size-6" />,
    difficulty: 'Hard',
    locked: false,
    color: 'text-rose-400',
    gradient: 'from-rose-500/20 to-rose-500/5',
    href: '/games/speed-analysis',
  },
  {
    id: 'vocabulary-builder',
    title: 'Vocabulary Builder',
    description: 'Select the correct definition. Wrong words reappear for spaced repetition.',
    icon: <Brain className="size-6" />,
    difficulty: 'Medium',
    locked: false,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    href: '/games/vocabulary-builder',
  },
  {
    id: 'spelling-bee',
    title: 'Spelling Bee',
    description: 'Listen to the definition, type the correct spelling. Difficulty increases.',
    icon: <Volume2 className="size-6" />,
    difficulty: 'Hard',
    locked: false,
    color: 'text-clay-600',
    gradient: 'from-orange-500/20 to-orange-500/5',
    href: '/games/spelling-bee',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// WORD SCRAMBLE GAME
// ═══════════════════════════════════════════════════════════════════════════════

// How many correct answers before scaling up word difficulty
const DIFFICULTY_STEP = 3

function WordScrambleGame({ onExit }: { onExit: () => void }) {
  // Pre-bucket words by length for the difficulty curve
  const wordPool = useMemo(() => {
    const easy = WORD_SCRAMBLE_WORDS.filter((w) => w.word.replace(/\s/g, '').length <= 5)
    const medium = WORD_SCRAMBLE_WORDS.filter((w) => {
      const n = w.word.replace(/\s/g, '').length
      return n >= 6 && n <= 9
    })
    const hard = WORD_SCRAMBLE_WORDS.filter((w) => w.word.replace(/\s/g, '').length >= 10)
    return { easy, medium, hard }
  }, [])

  const [usedWords, setUsedWords] = useState<Set<string>>(new Set())
  const [currentWord, setCurrentWord] = useState<{ word: string; hint: string } | null>(null)
  const [scrambled, setScrambled] = useState('')
  const [scaffold, setScaffold] = useState<(string | null)[] | null>(null)
  const [guess, setGuess] = useState('')
  const [score, setScore] = useState(0)
  const [wordsPlayed, setWordsPlayed] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameState, setGameState] = useState<
    'playing' | 'correct' | 'wrong' | 'timeout' | 'finished'
  >('playing')
  const [totalAnswered, setTotalAnswered] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Round length: keep at 10 words per session for a consistent leaderboard
  const ROUND_LENGTH = 10

  // Pick the next word: difficulty escalates with the player's score, and we
  // never repeat a word within a session (resets if the relevant pool runs out).
  const pickNextWord = useCallback(
    (
      currentScore: number,
      used: Set<string>,
    ): { picked: { word: string; hint: string } | null; nextUsed: Set<string> } => {
      // Determine bucket: 0-2 correct → easy, 3-5 → medium, 6+ → hard
      const stage = Math.floor(currentScore / DIFFICULTY_STEP)
      const buckets =
        stage <= 0
          ? [wordPool.easy, wordPool.medium, wordPool.hard]
          : stage === 1
            ? [wordPool.medium, wordPool.hard, wordPool.easy]
            : [wordPool.hard, wordPool.medium, wordPool.easy]

      let nextUsed = used
      for (const bucket of buckets) {
        const available = bucket.filter((w) => !nextUsed.has(w.word))
        if (available.length > 0) {
          const picked = available[Math.floor(Math.random() * available.length)]
          nextUsed = new Set(nextUsed)
          nextUsed.add(picked.word)
          return { picked, nextUsed }
        }
      }
      // Every bucket exhausted — reset history and pick from preferred bucket
      const resetUsed = new Set<string>()
      for (const bucket of buckets) {
        if (bucket.length > 0) {
          const picked = bucket[Math.floor(Math.random() * bucket.length)]
          resetUsed.add(picked.word)
          return { picked, nextUsed: resetUsed }
        }
      }
      return { picked: null, nextUsed: used }
    },
    [wordPool],
  )

  // Initialize first word on mount
  useEffect(() => {
    if (currentWord !== null) return
    const { picked, nextUsed } = pickNextWord(0, new Set())
    if (picked) {
      setCurrentWord(picked)
      setUsedWords(nextUsed)
      setScrambled(scrambleWord(picked.word))
      setScaffold(buildScaffold(picked.word))
      setGuess('')
      setTimeLeft(30)
      setGameState('playing')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentWord, pickNextWord])

  // timer
  useEffect(() => {
    if (gameState !== 'playing') return
    if (timeLeft <= 0) {
      setGameState('timeout')
      setTotalAnswered((p) => p + 1)
      return
    }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, gameState])

  const handleSubmit = useCallback(() => {
    if (gameState !== 'playing' || !guess.trim() || !currentWord) return
    const isCorrect = guess.trim().toUpperCase() === currentWord.word.toUpperCase()
    if (isCorrect) {
      setScore((p) => p + 1)
      setGameState('correct')
    } else {
      setGameState('wrong')
    }
    setTotalAnswered((p) => p + 1)
  }, [gameState, guess, currentWord])

  const nextWord = useCallback(() => {
    const newPlayed = wordsPlayed + 1
    if (newPlayed >= ROUND_LENGTH) {
      setWordsPlayed(newPlayed)
      setGameState('finished')
      return
    }
    // Use the in-progress score (the just-scored answer is already in `score`)
    const { picked, nextUsed } = pickNextWord(score, usedWords)
    if (!picked) {
      setGameState('finished')
      return
    }
    setCurrentWord(picked)
    setUsedWords(nextUsed)
    setScrambled(scrambleWord(picked.word))
    setScaffold(buildScaffold(picked.word))
    setGuess('')
    setTimeLeft(30)
    setGameState('playing')
    setWordsPlayed(newPlayed)
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [wordsPlayed, score, usedWords, pickNextWord])

  // Allow Enter key to advance after answering
  useEffect(() => {
    if (gameState !== 'correct' && gameState !== 'wrong' && gameState !== 'timeout') return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') nextWord()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [gameState, nextWord])

  // Save score on finish
  const hasSavedRef = useRef(false)
  useEffect(() => {
    if (gameState === 'finished' && !hasSavedRef.current) {
      hasSavedRef.current = true
      saveToLeaderboard('word-scramble', score, totalAnswered)
      window.dispatchEvent(new Event('leaderboard-updated'))
    }
  }, [gameState, score, totalAnswered])

  // finished screen
  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="relative">
          <Trophy className="size-16 text-clay-600 animate-bounce" />
          <Sparkles className="size-6 text-amber-700 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-emerald-400">
            {score}/{totalAnswered}
          </p>
          <p className="text-muted-foreground text-sm">correct answers</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button
            onClick={() => {
              hasSavedRef.current = false
              setScore(0)
              setTotalAnswered(0)
              setWordsPlayed(0)
              // Trigger picking a fresh first word (reset memoized state)
              const { picked, nextUsed } = pickNextWord(0, usedWords)
              if (picked) {
                setCurrentWord(picked)
                setUsedWords(nextUsed)
                setScrambled(scrambleWord(picked.word))
                setScaffold(buildScaffold(picked.word))
                setGuess('')
                setTimeLeft(30)
                setGameState('playing')
              }
            }}
          >
            <RotateCcw className="size-4 mr-1" /> Play Again
          </Button>
        </div>
      </div>
    )
  }

  // Guard against the brief moment before the first word loads
  if (!currentWord) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-muted-foreground">
        <Shuffle className="size-8 animate-pulse" />
        <span className="text-sm">Loading word…</span>
      </div>
    )
  }

  const timerColor =
    timeLeft > 15 ? 'text-emerald-400' : timeLeft > 5 ? 'text-clay-600' : 'text-red-400'
  const timerBg = timeLeft > 15 ? 'bg-emerald-400' : timeLeft > 5 ? 'bg-amber-400' : 'bg-red-400'

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      {/* Score & Timer */}
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-clay-600" />
          <span className="font-bold text-foreground">{score}</span>
          <span className="text-muted-foreground text-sm">/ {totalAnswered}</span>
        </div>
        <div className="flex items-center gap-2">
          <Timer className={cn('size-4', timerColor)} />
          <span className={cn('font-mono font-bold text-lg tabular-nums', timerColor)}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="w-full max-w-md h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-1000 ease-linear', timerBg)}
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        />
      </div>

      {/* Scrambled word */}
      <div className="text-center space-y-3 my-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Unscramble this word
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {scrambled.split('').map((letter, i) => (
            <span
              key={`${wordsPlayed}-${i}`}
              className={cn(
                'inline-flex items-center justify-center size-10 sm:size-12 rounded-lg border-2 font-bold text-lg sm:text-xl',
                'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
                'animate-in fade-in slide-in-from-bottom-2',
              )}
              style={{
                animationDelay: `${i * 40}ms`,
                animationFillMode: 'both',
                animationDuration: '300ms',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      {/* Scaffold (pre-placed letters for longer words) */}
      {scaffold && (
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Letters in place
          </p>
          <div
            className="flex flex-wrap justify-center gap-1.5"
            aria-label="Letters already placed for you"
          >
            {scaffold.map((letter, i) => (
              <span
                key={`scaffold-${i}`}
                className={cn(
                  'inline-flex items-center justify-center size-9 sm:size-10 rounded-md border font-bold text-base sm:text-lg',
                  letter && letter !== ' '
                    ? 'bg-amber-500/10 border-amber-400/40 text-amber-200'
                    : 'border-dashed border-border text-muted-foreground/60',
                )}
              >
                {letter === ' ' ? ' ' : (letter ?? '_')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Hint - always visible */}
      <p className="text-sm text-muted-foreground italic text-center max-w-sm bg-muted/50 rounded-lg px-4 py-2">
        Means: {currentWord.hint}
      </p>

      {/* Input / Feedback */}
      {gameState === 'playing' ? (
        <div className="w-full max-w-md space-y-3">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSubmit()
              }}
              placeholder="Type your answer..."
              aria-label="Your answer for the scrambled word"
              className="flex-1 h-11 rounded-xl border border-border bg-background px-4 text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all"
              autoComplete="off"
              spellCheck={false}
            />
            <Button
              onClick={handleSubmit}
              aria-label="Submit answer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-3" role="status" aria-live="polite">
          {gameState === 'correct' && (
            <div className="flex items-center gap-2 text-emerald-400 animate-in zoom-in duration-300">
              <CheckCircle className="size-6" />
              <span className="font-bold text-lg">Correct!</span>
            </div>
          )}
          {gameState === 'wrong' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-red-400 animate-in zoom-in duration-300">
                <XCircle className="size-6" />
                <span className="font-bold text-lg">Not quite!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The answer was:{' '}
                <span className="text-foreground font-semibold">{currentWord.word}</span>
              </p>
            </div>
          )}
          {gameState === 'timeout' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-clay-600 animate-in zoom-in duration-300">
                <Timer className="size-6" />
                <span className="font-bold text-lg">Time&apos;s up!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The answer was:{' '}
                <span className="text-foreground font-semibold">{currentWord.word}</span>
              </p>
            </div>
          )}
          <Button onClick={nextWord} size="lg" className="mt-2">
            {wordsPlayed + 1 >= ROUND_LENGTH ? 'See Results' : 'Next Word'}{' '}
            <ChevronRight className="size-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Progress */}
      <p className="text-xs text-muted-foreground">
        Word {wordsPlayed + 1} of {ROUND_LENGTH}
      </p>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUOTE MATCH GAME
// ═══════════════════════════════════════════════════════════════════════════════

function QuoteMatchGame({ onExit }: { onExit: () => void }) {
  const { board } = useBoard()

  // Filter the quote bank strictly by textSlug against the user's board's set texts.
  // Non-curriculum texts are NOT in the bank at all, so the worst case is still
  // always curriculum content — never Harry Potter, Dune, etc.
  const filteredData = useMemo(() => {
    if (!board) return QUOTE_MATCH_DATA
    const allowedSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    // Also allow poem slugs used by the board's anthology (ozymandias, dulce-et-decorum-est, etc.)
    // Those aren't in set-texts but are board-specific — map a short allow-list per board.
    const boardPoemSlugs: Record<string, string[]> = {
      aqa: ['ozymandias', 'london', 'my-last-duchess', 'charge-of-the-light-brigade', 'exposure'],
      edexcel: ['ozymandias', 'london'],
      ocr: ['ozymandias'],
      eduqas: ['ozymandias', 'london', 'dulce-et-decorum-est'],
      'edexcel-igcse': [],
      'cambridge-0500': [],
      'cambridge-0990': [],
    }
    const poemSlugs = new Set(boardPoemSlugs[board] ?? [])
    return QUOTE_MATCH_DATA.filter((q) => allowedSlugs.has(q.textSlug) || poemSlugs.has(q.textSlug))
  }, [board])

  const [questions] = useState(() => shuffleArray(filteredData).slice(0, 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'answered' | 'finished'>('playing')
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])

  const currentQuestion = questions[currentIndex]
  const hasSavedRef = useRef(false)

  // All hooks must be called unconditionally in the same order every render
  // (Rules of Hooks). Any early-return based on state must come AFTER them.
  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions(shuffleArray(currentQuestion.options))
    }
  }, [currentIndex, currentQuestion])

  const handleAnswer = useCallback(
    (answer: string) => {
      if (gameState !== 'playing') return
      setSelectedAnswer(answer)
      if (currentQuestion && answer === currentQuestion.answer) {
        setScore((p) => p + 1)
      }
      setGameState('answered')
    },
    [gameState, currentQuestion],
  )

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setGameState('finished')
    } else {
      setCurrentIndex((p) => p + 1)
      setSelectedAnswer(null)
      setGameState('playing')
    }
  }, [currentIndex, questions.length])

  // Allow Enter key to advance after answering
  useEffect(() => {
    if (gameState !== 'answered') return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') nextQuestion()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [gameState, nextQuestion])

  // Save score on finish
  useEffect(() => {
    if (gameState === 'finished' && !hasSavedRef.current) {
      hasSavedRef.current = true
      saveToLeaderboard('quote-match', score, 10)
      window.dispatchEvent(new Event('leaderboard-updated'))
    }
  }, [gameState, score])

  // Edge case: board has no literature set texts (Cambridge 0500 / 0990).
  // Show a friendly fallback instead of an empty game. This early-return must
  // come AFTER all hooks above, otherwise Rules of Hooks is violated.
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <BookOpen className="size-12 text-muted-foreground" />
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-foreground">
            No literature set texts for your board
          </h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Your exam board focuses on English Language skills rather than prescribed literature
            texts. Try the other games in the hub — Word Scramble, Grammar Fix, or literary
            technique drills.
          </p>
        </div>
        <Button variant="outline" onClick={onExit}>
          <ArrowLeft className="size-4 mr-1" /> Back to Games
        </Button>
      </div>
    )
  }

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="relative">
          <Trophy className="size-16 text-clay-600 animate-bounce" />
          <Sparkles className="size-6 text-violet-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-violet-400">{score}/10</p>
          <p className="text-muted-foreground text-sm">correct matches</p>
        </div>
        {score >= 8 && (
          <p className="text-emerald-400 font-medium">Outstanding literary knowledge!</p>
        )}
        {score >= 5 && score < 8 && (
          <p className="text-clay-600 font-medium">Good effort! Keep reading!</p>
        )}
        {score < 5 && (
          <p className="text-muted-foreground font-medium">
            Keep practising - you&apos;ll get there!
          </p>
        )}
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button
            onClick={() => {
              hasSavedRef.current = false
              setCurrentIndex(0)
              setScore(0)
              setSelectedAnswer(null)
              setGameState('playing')
            }}
          >
            <RotateCcw className="size-4 mr-1" /> Play Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      {/* Score & Progress */}
      <div className="flex items-center justify-between w-full max-w-lg">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-clay-600" />
          <span className="font-bold text-foreground">{score}</span>
          <span className="text-muted-foreground text-sm">/ {currentIndex}</span>
        </div>
        <Badge variant="secondary">Round {currentIndex + 1}/10</Badge>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-lg h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-violet-500 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
        />
      </div>

      {/* Quote */}
      <div className="w-full max-w-lg my-2">
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5 text-center">
          <p className="text-lg sm:text-xl font-serif italic text-foreground leading-relaxed">
            {currentQuestion.quote}
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="w-full max-w-lg grid gap-2.5">
        {shuffledOptions.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = option === currentQuestion.answer
          let optionStyle = 'border-border/60 hover:border-violet-500/50 hover:bg-violet-500/5'
          if (gameState === 'answered') {
            if (isCorrect) optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
            else if (isSelected && !isCorrect)
              optionStyle = 'border-red-500 bg-red-500/10 text-red-300'
            else optionStyle = 'border-border/30 opacity-50'
          }
          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={gameState === 'answered'}
              className={cn(
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background',
                'disabled:cursor-default',
                optionStyle,
              )}
            >
              <div className="flex items-center gap-3">
                {gameState === 'answered' && isCorrect && (
                  <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                )}
                {gameState === 'answered' && isSelected && !isCorrect && (
                  <XCircle className="size-4 text-red-400 shrink-0" />
                )}
                <span>{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Next button */}
      {gameState === 'answered' && (
        <Button
          onClick={nextQuestion}
          size="lg"
          className="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Quote'}{' '}
          <ChevronRight className="size-4 ml-1" />
        </Button>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// GRAMMAR FIX GAME
// ═══════════════════════════════════════════════════════════════════════════════

function GrammarFixGame({ onExit }: { onExit: () => void }) {
  const [questions] = useState(() => shuffleArray(GRAMMAR_FIX_DATA).slice(0, 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'answered' | 'finished'>('playing')
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])

  const currentQuestion = questions[currentIndex]

  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions(shuffleArray(currentQuestion.options))
    }
  }, [currentIndex, currentQuestion])

  const handleAnswer = useCallback(
    (answer: string) => {
      if (gameState !== 'playing') return
      setSelectedAnswer(answer)
      if (answer === currentQuestion.correct) {
        setScore((p) => p + 1)
      }
      setGameState('answered')
    },
    [gameState, currentQuestion],
  )

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setGameState('finished')
    } else {
      setCurrentIndex((p) => p + 1)
      setSelectedAnswer(null)
      setGameState('playing')
    }
  }, [currentIndex, questions.length])

  // Allow Enter key to advance after answering
  useEffect(() => {
    if (gameState !== 'answered') return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') nextQuestion()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [gameState, nextQuestion])

  // Save score on finish
  const hasSavedRef = useRef(false)
  useEffect(() => {
    if (gameState === 'finished' && !hasSavedRef.current) {
      hasSavedRef.current = true
      saveToLeaderboard('grammar-fix', score, 10)
      window.dispatchEvent(new Event('leaderboard-updated'))
    }
  }, [gameState, score])

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="relative">
          <Trophy className="size-16 text-clay-600 animate-bounce" />
          <Sparkles className="size-6 text-amber-700 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-clay-600">{score}/10</p>
          <p className="text-muted-foreground text-sm">correct fixes</p>
        </div>
        {score >= 8 && (
          <p className="text-emerald-400 font-medium">Grammar guru status achieved!</p>
        )}
        {score >= 5 && score < 8 && (
          <p className="text-clay-600 font-medium">Solid grammar skills!</p>
        )}
        {score < 5 && <p className="text-muted-foreground font-medium">Practice makes perfect!</p>}
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button
            onClick={() => {
              hasSavedRef.current = false
              setCurrentIndex(0)
              setScore(0)
              setSelectedAnswer(null)
              setGameState('playing')
            }}
          >
            <RotateCcw className="size-4 mr-1" /> Play Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      {/* Score & Progress */}
      <div className="flex items-center justify-between w-full max-w-lg">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-clay-600" />
          <span className="font-bold text-foreground">{score}</span>
          <span className="text-muted-foreground text-sm">/ {currentIndex}</span>
        </div>
        <Badge variant="secondary">Round {currentIndex + 1}/10</Badge>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-lg h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
        />
      </div>

      {/* Sentence with error */}
      <div className="w-full max-w-lg my-2 space-y-2">
        <Badge variant="outline" className="text-xs">
          {currentQuestion.category}
        </Badge>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Fix this sentence:
          </p>
          <p className="text-lg font-medium text-foreground leading-relaxed">
            &ldquo;{currentQuestion.sentence}&rdquo;
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="w-full max-w-lg">
        <p className="text-xs text-muted-foreground mb-2.5">Select the correct fix:</p>
        <div className="grid gap-2.5">
          {shuffledOptions.map((option) => {
            const isSelected = selectedAnswer === option
            const isCorrect = option === currentQuestion.correct
            let optionStyle = 'border-border/60 hover:border-amber-500/50 hover:bg-amber-500/5'
            if (gameState === 'answered') {
              if (isCorrect) optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
              else if (isSelected && !isCorrect)
                optionStyle = 'border-red-500 bg-red-500/10 text-red-300'
              else optionStyle = 'border-border/30 opacity-50'
            }
            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={gameState === 'answered'}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background',
                  'disabled:cursor-default',
                  optionStyle,
                )}
              >
                <div className="flex items-center gap-3">
                  {gameState === 'answered' && isCorrect && (
                    <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                  )}
                  {gameState === 'answered' && isSelected && !isCorrect && (
                    <XCircle className="size-4 text-red-400 shrink-0" />
                  )}
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Feedback & Next button */}
      {gameState === 'answered' && (
        <div
          className="w-full max-w-lg space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
          role="status"
          aria-live="polite"
        >
          {selectedAnswer !== currentQuestion.correct && (
            <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">The error was:</span>{' '}
              {currentQuestion.error}. The correct fix is{' '}
              <span className="font-semibold text-emerald-400">
                &ldquo;{currentQuestion.correct}&rdquo;
              </span>
              .
            </div>
          )}
          <div className="flex justify-center">
            <Button onClick={nextQuestion} size="lg">
              {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Sentence'}{' '}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// GAME CARD
// ═══════════════════════════════════════════════════════════════════════════════

const GameCard = memo(function GameCard({
  game,
  isActive,
  onPlay,
}: {
  game: GameDef
  isActive: boolean
  onPlay: () => void
}) {
  const difficultyColor =
    game.difficulty === 'Easy'
      ? 'text-emerald-400'
      : game.difficulty === 'Medium'
        ? 'text-clay-600'
        : 'text-red-400'

  return (
    <Card
      className={cn(
        'relative overflow-hidden transition-all duration-300 group',
        !game.locked &&
          'cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5',
        isActive && 'ring-2 ring-primary shadow-lg',
        game.locked && 'opacity-80',
      )}
      onClick={game.locked || game.href ? undefined : onPlay}
    >
      {/* Gradient accent */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          game.gradient,
        )}
      />

      {/* Lock overlay */}
      {game.locked && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/70 backdrop-blur-[2px] rounded-2xl">
          <Lock className="size-8 text-muted-foreground mb-2" />
          <span className="text-sm font-semibold text-muted-foreground">Sign up to play</span>
          <Button size="sm" className="mt-3">
            Get Started
          </Button>
        </div>
      )}

      <CardHeader className="relative z-[1]">
        <div className="flex items-start justify-between">
          <div className={cn('p-2 rounded-xl bg-card border border-border/60', game.color)}>
            {game.icon}
          </div>
          <Badge variant="outline" className={cn('text-[10px]', difficultyColor)}>
            {game.difficulty}
          </Badge>
        </div>
        <CardTitle className="mt-2">{game.title}</CardTitle>
        <CardDescription>{game.description}</CardDescription>
      </CardHeader>

      {!game.locked && (
        <CardContent className="relative z-[1] pt-0">
          {game.href ? (
            <Button size="sm" className="w-full" render={<Link href={game.href} />}>
              Play Now
              <Zap className="size-3.5 ml-1" />
            </Button>
          ) : (
            <Button
              size="sm"
              variant={isActive ? 'secondary' : 'default'}
              className="w-full"
              onClick={(e) => {
                e.stopPropagation()
                onPlay()
              }}
            >
              {isActive ? 'Playing...' : 'Play Now'}
              {!isActive && <Zap className="size-3.5 ml-1" />}
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  )
})

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null)
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const handleExit = useCallback(() => setActiveGame(null), [])

  const handlePlayGame = useCallback((gameId: string) => {
    setActiveGame((prev) => (prev === gameId ? null : gameId))
  }, [])

  const renderGame = () => {
    switch (activeGame) {
      case 'word-scramble':
        return <WordScrambleGame onExit={handleExit} />
      case 'quote-match':
        return <QuoteMatchGame onExit={handleExit} />
      case 'grammar-fix':
        return <GrammarFixGame onExit={handleExit} />
      default:
        return null
    }
  }

  // Filter games: hide text-specific games when the user's board has no relevant content.
  // For now, all boards have at least Macbeth/Inspector Calls so all games stay visible —
  // but this gives us a hook for future per-board filtering.
  const visibleGames = useMemo(() => {
    if (!board) return GAMES
    // All current games are either generic or have content for every board, so keep all.
    return GAMES
  }, [board])

  return (
    <div className="min-h-screen bg-background">
      <QuizJsonLd
        name="GCSE English study games"
        description="Quote-matching, word-building, and revision games to reinforce GCSE and IGCSE English."
        about="GCSE English"
        educationalLevel="GCSE"
        url="https://theenglishhub.app/games"
        audienceRole="student"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumb items={[{ label: 'Games' }]} />
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-24 -right-24 size-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <Gamepad2 className="size-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Learn through play
            </span>
          </div>

          {boardConfig && (
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4 ml-2">
              <Sparkles className="size-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                For {boardConfig.shortName}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight mb-4">
            English{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              Games
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {boardConfig
              ? `Sharpen your English skills with games tailored to ${boardConfig.shortName} set texts and themes.`
              : 'Sharpen your English skills with fun, interactive games. Perfect for KS3 and GCSE revision.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-emerald-400" /> 7 Free Games
            </span>
            <span className="flex items-center gap-1.5">
              <Trophy className="size-3.5 text-clay-600" /> Track Your Score
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-violet-400" /> Instant Feedback
            </span>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      {!activeGame && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-0">
          <WeeklyLeaderboard />
        </section>
      )}

      {/* Games Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {activeGame && (
          <div className="mb-8">
            <button
              onClick={() => setActiveGame(null)}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="size-4" /> Back to all games
            </button>
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">{renderGame()}</CardContent>
            </Card>
          </div>
        )}

        <div className={cn(activeGame && 'opacity-60')}>
          <h2 className="text-lg font-bold text-foreground mb-5">
            {activeGame ? 'Other Games' : 'Choose a Game'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isActive={activeGame === game.id}
                onPlay={() => handlePlayGame(game.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
