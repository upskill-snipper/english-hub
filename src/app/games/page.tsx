'use client'

import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react'
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
  Eye,
  Brain,
  RotateCcw,
  ChevronRight,
  Zap,
  Medal,
  Crown,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// ═══════════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════════

const WORD_SCRAMBLE_WORDS = [
  { word: 'METAPHOR', hint: 'A figure of speech comparing two unlike things' },
  { word: 'SIMILE', hint: 'Comparison using "like" or "as"' },
  { word: 'ALLITERATION', hint: 'Repetition of initial consonant sounds' },
  { word: 'ONOMATOPOEIA', hint: 'Words that imitate sounds' },
  { word: 'PERSONIFICATION', hint: 'Giving human qualities to non-human things' },
  { word: 'HYPERBOLE', hint: 'Extreme exaggeration for effect' },
  { word: 'OXYMORON', hint: 'Two contradictory words placed together' },
  { word: 'IRONY', hint: 'When the opposite of what is expected occurs' },
  { word: 'PATHETIC FALLACY', hint: 'Weather reflecting mood or emotions' },
  { word: 'FORESHADOWING', hint: 'Hints at what will happen later' },
  { word: 'JUXTAPOSITION', hint: 'Placing two things side by side for contrast' },
  { word: 'ENJAMBMENT', hint: 'A sentence running over a line break in poetry' },
  { word: 'SIBILANCE', hint: 'Repetition of "s" and "sh" sounds' },
  { word: 'CONSONANCE', hint: 'Repetition of consonant sounds within words' },
  { word: 'ASSONANCE', hint: 'Repetition of vowel sounds' },
  { word: 'ANAPHORA', hint: 'Repetition of a word at the start of successive clauses' },
  { word: 'EUPHEMISM', hint: 'A mild expression substituted for a harsh one' },
  { word: 'ALLEGORY', hint: 'A story with a hidden moral or political meaning' },
  { word: 'SOLILOQUY', hint: 'A character speaking their thoughts aloud alone' },
  { word: 'PROTAGONIST', hint: 'The main character in a story' },
  { word: 'ANTAGONIST', hint: 'The character who opposes the main character' },
  { word: 'SYNTAX', hint: 'The arrangement of words in a sentence' },
  { word: 'RHETORIC', hint: 'The art of persuasive speaking or writing' },
  { word: 'DIALOGUE', hint: 'Conversation between characters' },
  { word: 'NARRATIVE', hint: 'A spoken or written account of events' },
  { word: 'STANZA', hint: 'A group of lines in a poem' },
  { word: 'CAESURA', hint: 'A pause in the middle of a line of poetry' },
  { word: 'PLOSIVE', hint: 'A consonant sound made by stopping airflow' },
  { word: 'VOLTA', hint: 'A turn or shift in thought in a sonnet' },
  { word: 'MOTIF', hint: 'A recurring element with symbolic significance' },
  { word: 'EPIGRAPH', hint: 'A quotation at the beginning of a text' },
  { word: 'DENOUEMENT', hint: 'The final resolution of a story' },
]

const QUOTE_MATCH_DATA = [
  {
    quote: '"To be, or not to be, that is the question."',
    answer: 'Hamlet - William Shakespeare',
    options: ['Hamlet - William Shakespeare', 'Macbeth - William Shakespeare', 'Othello - William Shakespeare', 'King Lear - William Shakespeare'],
  },
  {
    quote: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    answer: 'Pride and Prejudice - Jane Austen',
    options: ['Pride and Prejudice - Jane Austen', 'Emma - Jane Austen', 'Sense and Sensibility - Jane Austen', 'Jane Eyre - Charlotte Brontë'],
  },
  {
    quote: '"All animals are equal, but some animals are more equal than others."',
    answer: 'Animal Farm - George Orwell',
    options: ['Animal Farm - George Orwell', '1984 - George Orwell', 'Lord of the Flies - William Golding', 'Brave New World - Aldous Huxley'],
  },
  {
    quote: '"The creature was not dead, not indeed wholly alive."',
    answer: 'Frankenstein - Mary Shelley',
    options: ['Dracula - Bram Stoker', 'Frankenstein - Mary Shelley', 'The Strange Case of Dr Jekyll and Mr Hyde - R.L. Stevenson', 'The Woman in Black - Susan Hill'],
  },
  {
    quote: '"Is this a dagger which I see before me, the handle toward my hand?"',
    answer: 'Macbeth - William Shakespeare',
    options: ['Hamlet - William Shakespeare', 'Macbeth - William Shakespeare', 'Julius Caesar - William Shakespeare', 'Romeo and Juliet - William Shakespeare'],
  },
  {
    quote: '"Big Brother is watching you."',
    answer: '1984 - George Orwell',
    options: ['Animal Farm - George Orwell', 'Brave New World - Aldous Huxley', '1984 - George Orwell', 'The Handmaid\'s Tale - Margaret Atwood'],
  },
  {
    quote: '"I think it better that in times like these a poet\'s mouth be silent."',
    answer: 'On Being Asked for a War Poem - W.B. Yeats',
    options: ['Dulce et Decorum Est - Wilfred Owen', 'On Being Asked for a War Poem - W.B. Yeats', 'The Soldier - Rupert Brooke', 'Anthem for Doomed Youth - Wilfred Owen'],
  },
  {
    quote: '"Do I dare disturb the universe?"',
    answer: 'The Love Song of J. Alfred Prufrock - T.S. Eliot',
    options: ['The Waste Land - T.S. Eliot', 'The Love Song of J. Alfred Prufrock - T.S. Eliot', 'Ozymandias - Percy Bysshe Shelley', 'Invictus - W.E. Henley'],
  },
  {
    quote: '"If music be the food of love, play on."',
    answer: 'Twelfth Night - William Shakespeare',
    options: ['A Midsummer Night\'s Dream - William Shakespeare', 'Romeo and Juliet - William Shakespeare', 'Twelfth Night - William Shakespeare', 'The Tempest - William Shakespeare'],
  },
  {
    quote: '"The man in black fled across the desert, and the gunslinger followed."',
    answer: 'The Dark Tower - Stephen King',
    options: ['The Dark Tower - Stephen King', 'Dune - Frank Herbert', 'Blood Meridian - Cormac McCarthy', 'The Road - Cormac McCarthy'],
  },
  {
    quote: '"Reader, I married him."',
    answer: 'Jane Eyre - Charlotte Brontë',
    options: ['Jane Eyre - Charlotte Brontë', 'Wuthering Heights - Emily Brontë', 'Pride and Prejudice - Jane Austen', 'Tess of the D\'Urbervilles - Thomas Hardy'],
  },
  {
    quote: '"Bent double, like old beggars under sacks."',
    answer: 'Dulce et Decorum Est - Wilfred Owen',
    options: ['The Charge of the Light Brigade - Alfred Tennyson', 'Dulce et Decorum Est - Wilfred Owen', 'Exposure - Wilfred Owen', 'Bayonet Charge - Ted Hughes'],
  },
  {
    quote: '"What light through yonder window breaks?"',
    answer: 'Romeo and Juliet - William Shakespeare',
    options: ['Romeo and Juliet - William Shakespeare', 'A Midsummer Night\'s Dream - William Shakespeare', 'Hamlet - William Shakespeare', 'Twelfth Night - William Shakespeare'],
  },
  {
    quote: '"I wandered lonely as a cloud."',
    answer: 'Daffodils - William Wordsworth',
    options: ['Daffodils - William Wordsworth', 'Tintern Abbey - William Wordsworth', 'Ozymandias - Percy Bysshe Shelley', 'The Tyger - William Blake'],
  },
  {
    quote: '"It was the best of times, it was the worst of times."',
    answer: 'A Tale of Two Cities - Charles Dickens',
    options: ['Great Expectations - Charles Dickens', 'A Tale of Two Cities - Charles Dickens', 'Oliver Twist - Charles Dickens', 'A Christmas Carol - Charles Dickens'],
  },
  {
    quote: '"Two roads diverged in a wood, and I -- I took the one less traveled by."',
    answer: 'The Road Not Taken - Robert Frost',
    options: ['The Road Not Taken - Robert Frost', 'Stopping by Woods - Robert Frost', 'Invictus - W.E. Henley', 'If - Rudyard Kipling'],
  },
  {
    quote: '"Look on my Works, ye Mighty, and despair!"',
    answer: 'Ozymandias - Percy Bysshe Shelley',
    options: ['Ozymandias - Percy Bysshe Shelley', 'The Tyger - William Blake', 'London - William Blake', 'My Last Duchess - Robert Browning'],
  },
  {
    quote: '"Some say the world will end in fire, some say in ice."',
    answer: 'Fire and Ice - Robert Frost',
    options: ['The Waste Land - T.S. Eliot', 'Fire and Ice - Robert Frost', 'Ozymandias - Percy Bysshe Shelley', 'Do Not Go Gentle - Dylan Thomas'],
  },
  {
    quote: '"The half-blood prince."',
    answer: 'Harry Potter and the Half-Blood Prince - J.K. Rowling',
    options: ['Harry Potter and the Half-Blood Prince - J.K. Rowling', 'The Hobbit - J.R.R. Tolkien', 'The Lion, the Witch and the Wardrobe - C.S. Lewis', 'Northern Lights - Philip Pullman'],
  },
  {
    quote: '"I am no bird; and no net ensnares me."',
    answer: 'Jane Eyre - Charlotte Brontë',
    options: ['Wuthering Heights - Emily Brontë', 'Jane Eyre - Charlotte Brontë', 'The Mill on the Floss - George Eliot', 'Middlemarch - George Eliot'],
  },
  {
    quote: '"Out, out, brief candle! Life\'s but a walking shadow."',
    answer: 'Macbeth - William Shakespeare',
    options: ['Macbeth - William Shakespeare', 'Hamlet - William Shakespeare', 'Othello - William Shakespeare', 'King Lear - William Shakespeare'],
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
    options: ['Remove ", he" and keep the sentence as one clause', 'Add "and" before "he"', 'Replace comma with semicolon', 'No change needed'],
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
    sentence: 'The childrens\' toys were scattered everywhere.',
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
    options: ['He was running quickly down the street.', 'Running quickly down the street.', 'Quickly running down the street.', 'Run quickly down the street.'],
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
    sentence: 'Who\'s book is this on the table?',
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
    options: ["It's", 'Its', "Its'", 'It is\'s'],
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
    return word.split(' ').map(w => scrambleWord(w)).join(' ')
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
  'Clever Fox', 'Swift Eagle', 'Brave Lion', 'Wise Owl', 'Bold Tiger',
  'Quick Hawk', 'Sharp Wolf', 'Keen Falcon', 'Bright Otter', 'Calm Stag',
  'Noble Bear', 'Daring Lynx', 'Witty Raven', 'Proud Heron', 'Agile Puma',
  'Sly Badger', 'Fierce Cobra', 'Gentle Crane', 'Loyal Hound', 'Sleek Panther',
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
  const games = ['word-scramble', 'quote-match', 'grammar-fix']
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
    .sort((a, b) => (b.score / b.total) - (a.score / a.total) || b.score - a.score)
    .slice(0, 10)
}

const GAME_TAB_META: Record<string, { label: string; color: string; activeColor: string }> = {
  'word-scramble': { label: 'Word Scramble', color: 'text-emerald-400', activeColor: 'data-active:text-emerald-400' },
  'quote-match': { label: 'Quote Match', color: 'text-violet-400', activeColor: 'data-active:text-violet-400' },
  'grammar-fix': { label: 'Grammar Fix', color: 'text-amber-400', activeColor: 'data-active:text-amber-400' },
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
              <Trophy className="size-5 text-amber-400" />
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
              <TabsTrigger key={id} value={id} className={cn('text-xs flex-1 rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40', GAME_TAB_META[id].activeColor)}>
                {GAME_TAB_META[id].label}
              </TabsTrigger>
            ))}
          </TabsList>
          {gameIds.map((id) => {
            const top = getTopScoresForGame(entries, id)
            return (
              <TabsContent key={id} value={id}>
                {top.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-6">No scores yet this week. Be the first!</p>
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
                            {idx === 0 && <Crown className="size-5 text-amber-400 mx-auto" />}
                            {idx === 1 && <Medal className="size-5 text-zinc-300 mx-auto" />}
                            {idx === 2 && <Medal className="size-5 text-amber-600 mx-auto" />}
                            {idx > 2 && <span className="text-xs font-bold text-muted-foreground">{idx + 1}</span>}
                          </div>
                          {/* Name */}
                          <span className={cn('flex-1 font-medium truncate', isYou && 'text-primary')}>
                            {entry.name}
                            {isYou && (
                              <span className="ml-1.5 text-[10px] uppercase tracking-wider font-bold text-primary/70">You</span>
                            )}
                          </span>
                          {/* Score */}
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={cn(
                              'font-bold tabular-nums',
                              idx === 0 ? 'text-amber-400' : idx === 1 ? 'text-zinc-300' : idx === 2 ? 'text-amber-600' : 'text-foreground',
                            )}>
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
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
  {
    id: 'vocab-builder',
    title: 'Vocabulary Builder',
    description: 'Read a definition, guess the word. Multiple difficulty levels.',
    icon: <Brain className="size-6" />,
    difficulty: 'Medium',
    locked: true,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    id: 'device-spotter',
    title: 'Literary Device Spotter',
    description: 'Read a passage and identify the literary device being used.',
    icon: <Eye className="size-6" />,
    difficulty: 'Hard',
    locked: true,
    color: 'text-rose-400',
    gradient: 'from-rose-500/20 to-rose-500/5',
  },
  {
    id: 'spelling-bee',
    title: 'Spelling Bee',
    description: 'Audio-style spelling challenge with GCSE-level vocabulary.',
    icon: <Volume2 className="size-6" />,
    difficulty: 'Hard',
    locked: true,
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-orange-500/5',
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
// WORD SCRAMBLE GAME
// ═══════════════════════════════════════════════════════════════════════════════

function WordScrambleGame({ onExit }: { onExit: () => void }) {
  const [words] = useState(() => shuffleArray(WORD_SCRAMBLE_WORDS))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrambled, setScrambled] = useState('')
  const [guess, setGuess] = useState('')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'wrong' | 'timeout' | 'finished'>('playing')
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const currentWord = words[currentIndex]

  // scramble on mount / new word
  useEffect(() => {
    if (currentWord) {
      setScrambled(scrambleWord(currentWord.word))
      setGuess('')
      setTimeLeft(30)
      setGameState('playing')
      setShowHint(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentIndex, currentWord])

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
    if (gameState !== 'playing' || !guess.trim()) return
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
    if (currentIndex + 1 >= words.length) {
      setGameState('finished')
    } else {
      setCurrentIndex((p) => p + 1)
    }
  }, [currentIndex, words.length])

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
          <Trophy className="size-16 text-amber-400 animate-bounce" />
          <Sparkles className="size-6 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-emerald-400">{score}/{totalAnswered}</p>
          <p className="text-muted-foreground text-sm">correct answers</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button onClick={() => { hasSavedRef.current = false; setCurrentIndex(0); setScore(0); setTotalAnswered(0); setGameState('playing') }}>
            <RotateCcw className="size-4 mr-1" /> Play Again
          </Button>
        </div>
      </div>
    )
  }

  const timerColor = timeLeft > 15 ? 'text-emerald-400' : timeLeft > 5 ? 'text-amber-400' : 'text-red-400'
  const timerBg = timeLeft > 15 ? 'bg-emerald-400' : timeLeft > 5 ? 'bg-amber-400' : 'bg-red-400'

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      {/* Score & Timer */}
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-amber-400" />
          <span className="font-bold text-foreground">{score}</span>
          <span className="text-muted-foreground text-sm">/ {totalAnswered}</span>
        </div>
        <div className="flex items-center gap-2">
          <Timer className={cn('size-4', timerColor)} />
          <span className={cn('font-mono font-bold text-lg tabular-nums', timerColor)}>{timeLeft}s</span>
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
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Unscramble this word</p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {scrambled.split('').map((letter, i) => (
            <span
              key={`${currentIndex}-${i}`}
              className={cn(
                'inline-flex items-center justify-center size-10 sm:size-12 rounded-lg border-2 font-bold text-lg sm:text-xl',
                'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
                'animate-in fade-in slide-in-from-bottom-2',
              )}
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'both', animationDuration: '300ms' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      {/* Hint */}
      {showHint && (
        <p className="text-sm text-muted-foreground italic text-center max-w-sm bg-muted/50 rounded-lg px-4 py-2">
          Hint: {currentWord.hint}
        </p>
      )}

      {/* Input / Feedback */}
      {gameState === 'playing' ? (
        <div className="w-full max-w-md space-y-3">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value.toUpperCase())}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
              placeholder="Type your answer..."
              className="flex-1 h-11 rounded-xl border border-border bg-background px-4 text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all"
              autoComplete="off"
              spellCheck={false}
            />
            <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-500 text-white">
              <ChevronRight className="size-5" />
            </Button>
          </div>
          {!showHint && (
            <button onClick={() => setShowHint(true)} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
              Need a hint?
            </button>
          )}
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
                The answer was: <span className="text-foreground font-semibold">{currentWord.word}</span>
              </p>
            </div>
          )}
          {gameState === 'timeout' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 animate-in zoom-in duration-300">
                <Timer className="size-6" />
                <span className="font-bold text-lg">Time&apos;s up!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The answer was: <span className="text-foreground font-semibold">{currentWord.word}</span>
              </p>
            </div>
          )}
          <Button onClick={nextWord} size="lg" className="mt-2">
            {currentIndex + 1 >= words.length ? 'See Results' : 'Next Word'} <ChevronRight className="size-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Progress */}
      <p className="text-xs text-muted-foreground">
        Word {currentIndex + 1} of {words.length}
      </p>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUOTE MATCH GAME
// ═══════════════════════════════════════════════════════════════════════════════

function QuoteMatchGame({ onExit }: { onExit: () => void }) {
  const [questions] = useState(() => shuffleArray(QUOTE_MATCH_DATA).slice(0, 10))
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

  const handleAnswer = useCallback((answer: string) => {
    if (gameState !== 'playing') return
    setSelectedAnswer(answer)
    if (answer === currentQuestion.answer) {
      setScore((p) => p + 1)
    }
    setGameState('answered')
  }, [gameState, currentQuestion])

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
      saveToLeaderboard('quote-match', score, 10)
      window.dispatchEvent(new Event('leaderboard-updated'))
    }
  }, [gameState, score])

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="relative">
          <Trophy className="size-16 text-amber-400 animate-bounce" />
          <Sparkles className="size-6 text-violet-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-violet-400">{score}/10</p>
          <p className="text-muted-foreground text-sm">correct matches</p>
        </div>
        {score >= 8 && <p className="text-emerald-400 font-medium">Outstanding literary knowledge!</p>}
        {score >= 5 && score < 8 && <p className="text-amber-400 font-medium">Good effort! Keep reading!</p>}
        {score < 5 && <p className="text-muted-foreground font-medium">Keep practising - you&apos;ll get there!</p>}
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button onClick={() => { hasSavedRef.current = false; setCurrentIndex(0); setScore(0); setSelectedAnswer(null); setGameState('playing') }}>
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
          <Star className="size-4 text-amber-400" />
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
            else if (isSelected && !isCorrect) optionStyle = 'border-red-500 bg-red-500/10 text-red-300'
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
                {gameState === 'answered' && isCorrect && <CheckCircle className="size-4 text-emerald-400 shrink-0" />}
                {gameState === 'answered' && isSelected && !isCorrect && <XCircle className="size-4 text-red-400 shrink-0" />}
                <span>{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Next button */}
      {gameState === 'answered' && (
        <Button onClick={nextQuestion} size="lg" className="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Quote'} <ChevronRight className="size-4 ml-1" />
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

  const handleAnswer = useCallback((answer: string) => {
    if (gameState !== 'playing') return
    setSelectedAnswer(answer)
    if (answer === currentQuestion.correct) {
      setScore((p) => p + 1)
    }
    setGameState('answered')
  }, [gameState, currentQuestion])

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
          <Trophy className="size-16 text-amber-400 animate-bounce" />
          <Sparkles className="size-6 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Game Over!</h3>
        <div className="text-center space-y-1">
          <p className="text-4xl font-black text-amber-400">{score}/10</p>
          <p className="text-muted-foreground text-sm">correct fixes</p>
        </div>
        {score >= 8 && <p className="text-emerald-400 font-medium">Grammar guru status achieved!</p>}
        {score >= 5 && score < 8 && <p className="text-amber-400 font-medium">Solid grammar skills!</p>}
        {score < 5 && <p className="text-muted-foreground font-medium">Practice makes perfect!</p>}
        <div className="flex gap-3">
          <Button variant="outline" onClick={onExit}>
            <ArrowLeft className="size-4 mr-1" /> Back to Games
          </Button>
          <Button onClick={() => { hasSavedRef.current = false; setCurrentIndex(0); setScore(0); setSelectedAnswer(null); setGameState('playing') }}>
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
          <Star className="size-4 text-amber-400" />
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
        <Badge variant="outline" className="text-xs">{currentQuestion.category}</Badge>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Fix this sentence:</p>
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
              else if (isSelected && !isCorrect) optionStyle = 'border-red-500 bg-red-500/10 text-red-300'
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
                  {gameState === 'answered' && isCorrect && <CheckCircle className="size-4 text-emerald-400 shrink-0" />}
                  {gameState === 'answered' && isSelected && !isCorrect && <XCircle className="size-4 text-red-400 shrink-0" />}
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Feedback & Next button */}
      {gameState === 'answered' && (
        <div className="w-full max-w-lg space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300" role="status" aria-live="polite">
          {selectedAnswer !== currentQuestion.correct && (
            <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">The error was:</span>{' '}
              {currentQuestion.error}. The correct fix is{' '}
              <span className="font-semibold text-emerald-400">&ldquo;{currentQuestion.correct}&rdquo;</span>.
            </div>
          )}
          <div className="flex justify-center">
            <Button onClick={nextQuestion} size="lg">
              {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Sentence'} <ChevronRight className="size-4 ml-1" />
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

const GameCard = memo(function GameCard({ game, isActive, onPlay }: { game: GameDef; isActive: boolean; onPlay: () => void }) {
  const difficultyColor =
    game.difficulty === 'Easy' ? 'text-emerald-400' :
    game.difficulty === 'Medium' ? 'text-amber-400' : 'text-red-400'

  return (
    <Card
      className={cn(
        'relative overflow-hidden transition-all duration-300 group',
        !game.locked && 'cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5',
        isActive && 'ring-2 ring-primary shadow-lg',
        game.locked && 'opacity-80',
      )}
      onClick={game.locked ? undefined : onPlay}
    >
      {/* Gradient accent */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300', game.gradient)} />

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
          <Button
            size="sm"
            variant={isActive ? 'secondary' : 'default'}
            className="w-full"
            onClick={(e) => { e.stopPropagation(); onPlay() }}
          >
            {isActive ? 'Playing...' : 'Play Now'}
            {!isActive && <Zap className="size-3.5 ml-1" />}
          </Button>
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

  const handleExit = useCallback(() => setActiveGame(null), [])

  const handlePlayGame = useCallback((gameId: string) => {
    setActiveGame((prev) => (prev === gameId ? null : gameId))
  }, [])

  const renderGame = () => {
    switch (activeGame) {
      case 'word-scramble': return <WordScrambleGame onExit={handleExit} />
      case 'quote-match': return <QuoteMatchGame onExit={handleExit} />
      case 'grammar-fix': return <GrammarFixGame onExit={handleExit} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
            <Gamepad2 className="size-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Learn through play</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight mb-4">
            English{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              Games
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Sharpen your English skills with fun, interactive games. Perfect for KS3 and GCSE revision - no textbook required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-emerald-400" /> 3 Free Games
            </span>
            <span className="flex items-center gap-1.5">
              <Trophy className="size-3.5 text-amber-400" /> Track Your Score
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
              <CardContent className="p-4 sm:p-6">
                {renderGame()}
              </CardContent>
            </Card>
          </div>
        )}

        <div className={cn(activeGame && 'opacity-60')}>
          <h2 className="text-lg font-bold text-foreground mb-5">
            {activeGame ? 'Other Games' : 'Choose a Game'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GAMES.map((game) => (
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
