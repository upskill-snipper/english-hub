'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, FlaskConical } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Mode = 'prefix' | 'suffix'

interface LabItem {
  mode: Mode
  /** The base/root word shown to the learner */
  root: string
  /** What the learner is aiming for: a meaning (prefix) or a word class (suffix) */
  target: string
  /** Four affix choices */
  options: string[]
  /** The correct affix */
  answer: string
  /** The finished word once the affix is attached */
  resultingWord: string
  /** A short teaching note (UK English morphology) */
  meaningNote: string
}

const PREFIX_OPTIONS = ['un-', 'dis-', 'mis-', 're-', 'pre-', 'anti-', 'sub-', 'inter-']
const SUFFIX_OPTIONS = ['-ful', '-less', '-ness', '-tion', '-able', '-ly', '-ment', '-ous']

// Pick 3 distractors + the answer, shuffled, from the relevant affix pool.
function buildOptions(pool: string[], answer: string): string[] {
  const distractors = shuffle(pool.filter((o) => o !== answer)).slice(0, 3)
  return shuffle([answer, ...distractors])
}

// ─── Original word bank (55+ items) ─────────────────────────────────────────────
// Each entry stores only what is fixed; options are generated so the answer
// position is always randomised.

interface SeedPrefix {
  root: string
  target: string
  answer: string
  resultingWord: string
  meaningNote: string
}

interface SeedSuffix {
  root: string
  target: string
  answer: string
  resultingWord: string
  meaningNote: string
}

const PREFIX_SEEDS: SeedPrefix[] = [
  {
    root: 'happy',
    target: 'meaning: NOT happy',
    answer: 'un-',
    resultingWord: 'unhappy',
    meaningNote: '“un-” means “not”. unhappy = not happy.',
  },
  {
    root: 'lock',
    target: 'meaning: to OPEN a lock again',
    answer: 'un-',
    resultingWord: 'unlock',
    meaningNote: '“un-” can reverse an action: unlock = undo a lock.',
  },
  {
    root: 'kind',
    target: 'meaning: NOT kind',
    answer: 'un-',
    resultingWord: 'unkind',
    meaningNote: '“un-” means “not”: unkind = not kind.',
  },
  {
    root: 'fair',
    target: 'meaning: NOT fair',
    answer: 'un-',
    resultingWord: 'unfair',
    meaningNote: '“un-” means “not”: unfair = not fair.',
  },
  {
    root: 'agree',
    target: 'meaning: to NOT agree',
    answer: 'dis-',
    resultingWord: 'disagree',
    meaningNote: '“dis-” reverses a verb: disagree = not agree.',
  },
  {
    root: 'appear',
    target: 'meaning: to STOP being seen',
    answer: 'dis-',
    resultingWord: 'disappear',
    meaningNote: '“dis-” = opposite: disappear = stop appearing.',
  },
  {
    root: 'honest',
    target: 'meaning: NOT honest',
    answer: 'dis-',
    resultingWord: 'dishonest',
    meaningNote: '“dis-” means “not”: dishonest = not honest.',
  },
  {
    root: 'obey',
    target: 'meaning: to NOT obey',
    answer: 'dis-',
    resultingWord: 'disobey',
    meaningNote: '“dis-” reverses a verb: disobey = not obey.',
  },
  {
    root: 'like',
    target: 'meaning: to NOT like',
    answer: 'dis-',
    resultingWord: 'dislike',
    meaningNote: '“dis-” = opposite of: dislike = not like.',
  },
  {
    root: 'spell',
    target: 'meaning: to spell WRONGLY',
    answer: 'mis-',
    resultingWord: 'misspell',
    meaningNote: '“mis-” = badly/wrongly. Keep both s: mis + spell = misspell.',
  },
  {
    root: 'understand',
    target: 'meaning: to understand WRONGLY',
    answer: 'mis-',
    resultingWord: 'misunderstand',
    meaningNote: '“mis-” = wrongly: misunderstand = understand incorrectly.',
  },
  {
    root: 'behave',
    target: 'meaning: to behave BADLY',
    answer: 'mis-',
    resultingWord: 'misbehave',
    meaningNote: '“mis-” = badly: misbehave = behave badly.',
  },
  {
    root: 'lead',
    target: 'meaning: to lead in the WRONG direction',
    answer: 'mis-',
    resultingWord: 'mislead',
    meaningNote: '“mis-” = wrongly: mislead = lead the wrong way.',
  },
  {
    root: 'judge',
    target: 'meaning: to judge WRONGLY',
    answer: 'mis-',
    resultingWord: 'misjudge',
    meaningNote: '“mis-” = wrongly: misjudge = judge incorrectly.',
  },
  {
    root: 'build',
    target: 'meaning: to build AGAIN',
    answer: 're-',
    resultingWord: 'rebuild',
    meaningNote: '“re-” = again: rebuild = build again.',
  },
  {
    root: 'write',
    target: 'meaning: to write AGAIN',
    answer: 're-',
    resultingWord: 'rewrite',
    meaningNote: '“re-” = again: rewrite = write again.',
  },
  {
    root: 'play',
    target: 'meaning: to play AGAIN',
    answer: 're-',
    resultingWord: 'replay',
    meaningNote: '“re-” = again: replay = play again.',
  },
  {
    root: 'use',
    target: 'meaning: to use AGAIN',
    answer: 're-',
    resultingWord: 'reuse',
    meaningNote: '“re-” = again: reuse = use again.',
  },
  {
    root: 'consider',
    target: 'meaning: to think about AGAIN',
    answer: 're-',
    resultingWord: 'reconsider',
    meaningNote: '“re-” = again: reconsider = consider again.',
  },
  {
    root: 'view',
    target: 'meaning: to look at something BEFORE release',
    answer: 'pre-',
    resultingWord: 'preview',
    meaningNote: '“pre-” = before: preview = a view before.',
  },
  {
    root: 'historic',
    target: 'meaning: BEFORE recorded history',
    answer: 'pre-',
    resultingWord: 'prehistoric',
    meaningNote: '“pre-” = before: prehistoric = before history.',
  },
  {
    root: 'heat',
    target: 'meaning: to heat BEFOREHAND',
    answer: 'pre-',
    resultingWord: 'preheat',
    meaningNote: '“pre-” = before: preheat = heat in advance.',
  },
  {
    root: 'pay',
    target: 'meaning: to pay BEFORE you receive',
    answer: 'pre-',
    resultingWord: 'prepay',
    meaningNote: '“pre-” = before: prepay = pay in advance.',
  },
  {
    root: 'school',
    target: 'meaning: education BEFORE school',
    answer: 'pre-',
    resultingWord: 'preschool',
    meaningNote: '“pre-” = before: preschool = before primary school.',
  },
  {
    root: 'freeze',
    target: 'meaning: AGAINST freezing',
    answer: 'anti-',
    resultingWord: 'antifreeze',
    meaningNote: '“anti-” = against: antifreeze stops liquid freezing.',
  },
  {
    root: 'social',
    target: 'meaning: AGAINST social behaviour',
    answer: 'anti-',
    resultingWord: 'antisocial',
    meaningNote: '“anti-” = against/opposed: antisocial = against society.',
  },
  {
    root: 'clockwise',
    target: 'meaning: AGAINST the clock’s direction',
    answer: 'anti-',
    resultingWord: 'anticlockwise',
    meaningNote: '“anti-” = against: anticlockwise (UK) = opposite to clockwise.',
  },
  {
    root: 'bacterial',
    target: 'meaning: AGAINST bacteria',
    answer: 'anti-',
    resultingWord: 'antibacterial',
    meaningNote: '“anti-” = against: antibacterial = fights bacteria.',
  },
  {
    root: 'marine',
    target: 'meaning: a vessel that goes UNDER the sea',
    answer: 'sub-',
    resultingWord: 'submarine',
    meaningNote: '“sub-” = under/below: submarine = under the sea.',
  },
  {
    root: 'way',
    target: 'meaning: a railway UNDER the ground',
    answer: 'sub-',
    resultingWord: 'subway',
    meaningNote: '“sub-” = under: subway = an underground way.',
  },
  {
    root: 'heading',
    target: 'meaning: a smaller heading UNDER the main one',
    answer: 'sub-',
    resultingWord: 'subheading',
    meaningNote: '“sub-” = below/secondary: subheading sits under a heading.',
  },
  {
    root: 'standard',
    target: 'meaning: BELOW the standard',
    answer: 'sub-',
    resultingWord: 'substandard',
    meaningNote: '“sub-” = below: substandard = below an accepted level.',
  },
  {
    root: 'merge',
    target: 'meaning: to sink completely UNDER water',
    answer: 'sub-',
    resultingWord: 'submerge',
    meaningNote: '“sub-” = under: submerge = put fully under water.',
  },
  {
    root: 'national',
    target: 'meaning: BETWEEN nations',
    answer: 'inter-',
    resultingWord: 'international',
    meaningNote: '“inter-” = between/among: international = between nations.',
  },
  {
    root: 'act',
    target: 'meaning: to act BETWEEN people',
    answer: 'inter-',
    resultingWord: 'interact',
    meaningNote: '“inter-” = between: interact = act with each other.',
  },
  {
    root: 'change',
    target: 'meaning: to swap BETWEEN two things',
    answer: 'inter-',
    resultingWord: 'interchange',
    meaningNote: '“inter-” = between: interchange = exchange between.',
  },
  {
    root: 'city',
    target: 'meaning: a road running BETWEEN cities',
    answer: 'inter-',
    resultingWord: 'intercity',
    meaningNote: '“inter-” = between: intercity = between cities.',
  },
  {
    root: 'connected',
    target: 'meaning: linked BETWEEN each other',
    answer: 'inter-',
    resultingWord: 'interconnected',
    meaningNote: '“inter-” = between: interconnected = linked together.',
  },
  {
    root: 'tidy',
    target: 'meaning: NOT tidy',
    answer: 'un-',
    resultingWord: 'untidy',
    meaningNote: '“un-” means “not”: untidy = not tidy.',
  },
  {
    root: 'wrap',
    target: 'meaning: to take the wrapping OFF',
    answer: 'un-',
    resultingWord: 'unwrap',
    meaningNote: '“un-” reverses an action: unwrap = remove wrapping.',
  },
  {
    root: 'cover',
    target: 'meaning: to take a cover OFF / reveal',
    answer: 'dis-',
    resultingWord: 'discover',
    meaningNote: '“dis-” here gives discover = to uncover/find out.',
  },
  {
    root: 'place',
    target: 'meaning: to put in the WRONG place',
    answer: 'mis-',
    resultingWord: 'misplace',
    meaningNote: '“mis-” = wrongly: misplace = put in the wrong place.',
  },
  {
    root: 'fill',
    target: 'meaning: to fill AGAIN',
    answer: 're-',
    resultingWord: 'refill',
    meaningNote: '“re-” = again: refill = fill again.',
  },
  {
    root: 'caution',
    target: 'meaning: care taken BEFORE acting',
    answer: 'pre-',
    resultingWord: 'precaution',
    meaningNote: '“pre-” = before: precaution = care taken in advance.',
  },
  {
    root: 'septic',
    target: 'meaning: AGAINST infection',
    answer: 'anti-',
    resultingWord: 'antiseptic',
    meaningNote: '“anti-” = against: antiseptic = prevents infection.',
  },
  {
    root: 'title',
    target: 'meaning: text BELOW the main image (on screen)',
    answer: 'sub-',
    resultingWord: 'subtitle',
    meaningNote: '“sub-” = below: subtitle = text shown below.',
  },
  {
    root: 'view',
    target: 'meaning: a formal talk BETWEEN people',
    answer: 'inter-',
    resultingWord: 'interview',
    meaningNote: '“inter-” = between: interview = a meeting between people.',
  },
]

const SUFFIX_SEEDS: SeedSuffix[] = [
  {
    root: 'care',
    target: 'make an ADJECTIVE meaning “full of care”',
    answer: '-ful',
    resultingWord: 'careful',
    meaningNote: '“-ful” = full of: careful = full of care.',
  },
  {
    root: 'hope',
    target: 'make an ADJECTIVE meaning “full of hope”',
    answer: '-ful',
    resultingWord: 'hopeful',
    meaningNote: '“-ful” = full of: hopeful = full of hope.',
  },
  {
    root: 'beauty',
    target: 'make an ADJECTIVE meaning “full of beauty”',
    answer: '-ful',
    resultingWord: 'beautiful',
    meaningNote: 'Spelling change: beauty → beautiful (y → i).',
  },
  {
    root: 'use',
    target: 'make an ADJECTIVE meaning “of use”',
    answer: '-ful',
    resultingWord: 'useful',
    meaningNote: '“-ful” = full of: useful = having use.',
  },
  {
    root: 'care',
    target: 'make an ADJECTIVE meaning “without care”',
    answer: '-less',
    resultingWord: 'careless',
    meaningNote: '“-less” = without: careless = without care.',
  },
  {
    root: 'hope',
    target: 'make an ADJECTIVE meaning “without hope”',
    answer: '-less',
    resultingWord: 'hopeless',
    meaningNote: '“-less” = without: hopeless = without hope.',
  },
  {
    root: 'fear',
    target: 'make an ADJECTIVE meaning “without fear”',
    answer: '-less',
    resultingWord: 'fearless',
    meaningNote: '“-less” = without: fearless = without fear.',
  },
  {
    root: 'home',
    target: 'make an ADJECTIVE meaning “without a home”',
    answer: '-less',
    resultingWord: 'homeless',
    meaningNote: '“-less” = without: homeless = without a home.',
  },
  {
    root: 'kind',
    target: 'make a NOUN meaning “the state of being kind”',
    answer: '-ness',
    resultingWord: 'kindness',
    meaningNote: '“-ness” makes a noun: kindness = being kind.',
  },
  {
    root: 'happy',
    target: 'make a NOUN meaning “the state of being happy”',
    answer: '-ness',
    resultingWord: 'happiness',
    meaningNote: 'Spelling change: happy → happiness (y → i).',
  },
  {
    root: 'dark',
    target: 'make a NOUN meaning “the state of being dark”',
    answer: '-ness',
    resultingWord: 'darkness',
    meaningNote: '“-ness” makes a noun: darkness = being dark.',
  },
  {
    root: 'sad',
    target: 'make a NOUN meaning “the state of being sad”',
    answer: '-ness',
    resultingWord: 'sadness',
    meaningNote: '“-ness” makes a noun: sadness = being sad.',
  },
  {
    root: 'ill',
    target: 'make a NOUN meaning “the state of being ill”',
    answer: '-ness',
    resultingWord: 'illness',
    meaningNote: 'Keep both l: ill + ness = illness.',
  },
  {
    root: 'educate',
    target: 'make a NOUN for the act of educating',
    answer: '-tion',
    resultingWord: 'education',
    meaningNote: 'Drop “e”: educate → education.',
  },
  {
    root: 'create',
    target: 'make a NOUN for the act of creating',
    answer: '-tion',
    resultingWord: 'creation',
    meaningNote: 'Drop “e”: create → creation.',
  },
  {
    root: 'celebrate',
    target: 'make a NOUN for the act of celebrating',
    answer: '-tion',
    resultingWord: 'celebration',
    meaningNote: 'Drop “e”: celebrate → celebration.',
  },
  {
    root: 'inform',
    target: 'make a NOUN meaning facts that inform',
    answer: '-tion',
    resultingWord: 'information',
    meaningNote: '“-tion” makes a noun: inform → information.',
  },
  {
    root: 'pollute',
    target: 'make a NOUN for the act of polluting',
    answer: '-tion',
    resultingWord: 'pollution',
    meaningNote: 'Drop “e”: pollute → pollution.',
  },
  {
    root: 'enjoy',
    target: 'make an ADJECTIVE meaning “able to be enjoyed”',
    answer: '-able',
    resultingWord: 'enjoyable',
    meaningNote: '“-able” = able to be: enjoyable = can be enjoyed.',
  },
  {
    root: 'comfort',
    target: 'make an ADJECTIVE meaning “giving comfort”',
    answer: '-able',
    resultingWord: 'comfortable',
    meaningNote: '“-able” = able to: comfortable = gives comfort.',
  },
  {
    root: 'value',
    target: 'make an ADJECTIVE meaning “having great value”',
    answer: '-able',
    resultingWord: 'valuable',
    meaningNote: 'Drop “e”: value → valuable.',
  },
  {
    root: 'rely',
    target: 'make an ADJECTIVE meaning “able to be relied on”',
    answer: '-able',
    resultingWord: 'reliable',
    meaningNote: 'Spelling change: rely → reliable (y → i).',
  },
  {
    root: 'wash',
    target: 'make an ADJECTIVE meaning “able to be washed”',
    answer: '-able',
    resultingWord: 'washable',
    meaningNote: '“-able” = able to be: washable = can be washed.',
  },
  {
    root: 'quick',
    target: 'make an ADVERB meaning “in a quick way”',
    answer: '-ly',
    resultingWord: 'quickly',
    meaningNote: '“-ly” makes an adverb: quickly = in a quick way.',
  },
  {
    root: 'slow',
    target: 'make an ADVERB meaning “in a slow way”',
    answer: '-ly',
    resultingWord: 'slowly',
    meaningNote: '“-ly” makes an adverb: slowly = in a slow way.',
  },
  {
    root: 'happy',
    target: 'make an ADVERB meaning “in a happy way”',
    answer: '-ly',
    resultingWord: 'happily',
    meaningNote: 'Spelling change: happy → happily (y → i).',
  },
  {
    root: 'careful',
    target: 'make an ADVERB meaning “in a careful way”',
    answer: '-ly',
    resultingWord: 'carefully',
    meaningNote: '“-ly” on an adjective: careful → carefully.',
  },
  {
    root: 'gentle',
    target: 'make an ADVERB meaning “in a gentle way”',
    answer: '-ly',
    resultingWord: 'gently',
    meaningNote: 'Drop “e”: gentle → gently.',
  },
  {
    root: 'enjoy',
    target: 'make a NOUN for the act/feeling of enjoying',
    answer: '-ment',
    resultingWord: 'enjoyment',
    meaningNote: '“-ment” makes a noun: enjoyment = the feeling of enjoying.',
  },
  {
    root: 'agree',
    target: 'make a NOUN for the act of agreeing',
    answer: '-ment',
    resultingWord: 'agreement',
    meaningNote: '“-ment” makes a noun: agreement = an act of agreeing.',
  },
  {
    root: 'move',
    target: 'make a NOUN for the act of moving',
    answer: '-ment',
    resultingWord: 'movement',
    meaningNote: '“-ment” makes a noun: movement = the act of moving.',
  },
  {
    root: 'develop',
    target: 'make a NOUN for the process of developing',
    answer: '-ment',
    resultingWord: 'development',
    meaningNote: '“-ment” makes a noun: develop → development.',
  },
  {
    root: 'govern',
    target: 'make a NOUN for the body that governs',
    answer: '-ment',
    resultingWord: 'government',
    meaningNote: '“-ment” makes a noun: govern → government.',
  },
  {
    root: 'danger',
    target: 'make an ADJECTIVE meaning “full of danger”',
    answer: '-ous',
    resultingWord: 'dangerous',
    meaningNote: '“-ous” = full of/having: dangerous = full of danger.',
  },
  {
    root: 'poison',
    target: 'make an ADJECTIVE meaning “containing poison”',
    answer: '-ous',
    resultingWord: 'poisonous',
    meaningNote: '“-ous” = having: poisonous = containing poison.',
  },
  {
    root: 'fame',
    target: 'make an ADJECTIVE meaning “having fame”',
    answer: '-ous',
    resultingWord: 'famous',
    meaningNote: 'Drop “e”: fame → famous.',
  },
  {
    root: 'mystery',
    target: 'make an ADJECTIVE meaning “full of mystery”',
    answer: '-ous',
    resultingWord: 'mysterious',
    meaningNote: 'Spelling change: mystery → mysterious (y → i).',
  },
  {
    root: 'nerve',
    target: 'make an ADJECTIVE meaning “anxious / on edge”',
    answer: '-ous',
    resultingWord: 'nervous',
    meaningNote: 'Drop “e”: nerve → nervous.',
  },
  {
    root: 'thought',
    target: 'make an ADJECTIVE meaning “full of thought for others”',
    answer: '-ful',
    resultingWord: 'thoughtful',
    meaningNote: '“-ful” = full of: thoughtful = considerate.',
  },
  {
    root: 'power',
    target: 'make an ADJECTIVE meaning “full of power”',
    answer: '-ful',
    resultingWord: 'powerful',
    meaningNote: '“-ful” = full of: powerful = having great power.',
  },
  {
    root: 'pain',
    target: 'make an ADJECTIVE meaning “without pain”',
    answer: '-less',
    resultingWord: 'painless',
    meaningNote: '“-less” = without: painless = without pain.',
  },
  {
    root: 'weight',
    target: 'make an ADJECTIVE meaning “without weight”',
    answer: '-less',
    resultingWord: 'weightless',
    meaningNote: '“-less” = without: weightless = having no weight.',
  },
  {
    root: 'weak',
    target: 'make a NOUN meaning “the state of being weak”',
    answer: '-ness',
    resultingWord: 'weakness',
    meaningNote: '“-ness” makes a noun: weakness = being weak.',
  },
  {
    root: 'protect',
    target: 'make a NOUN for the act of protecting',
    answer: '-tion',
    resultingWord: 'protection',
    meaningNote: '“-tion” makes a noun: protect → protection.',
  },
  {
    root: 'break',
    target: 'make an ADJECTIVE meaning “able to be broken”',
    answer: '-able',
    resultingWord: 'breakable',
    meaningNote: '“-able” = able to be: breakable = can be broken.',
  },
  {
    root: 'brave',
    target: 'make an ADVERB meaning “in a brave way”',
    answer: '-ly',
    resultingWord: 'bravely',
    meaningNote: '“-ly” makes an adverb: bravely = in a brave way.',
  },
  {
    root: 'punish',
    target: 'make a NOUN for the act of punishing',
    answer: '-ment',
    resultingWord: 'punishment',
    meaningNote: '“-ment” makes a noun: punish → punishment.',
  },
  {
    root: 'courage',
    target: 'make an ADJECTIVE meaning “brave / having courage”',
    answer: '-ous',
    resultingWord: 'courageous',
    meaningNote: 'Keep the “e”: courage → courageous.',
  },
]

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildRound(): LabItem[] {
  const prefixItems: LabItem[] = PREFIX_SEEDS.map((s) => ({
    mode: 'prefix' as const,
    root: s.root,
    target: s.target,
    options: buildOptions(PREFIX_OPTIONS, s.answer),
    answer: s.answer,
    resultingWord: s.resultingWord,
    meaningNote: s.meaningNote,
  }))
  const suffixItems: LabItem[] = SUFFIX_SEEDS.map((s) => ({
    mode: 'suffix' as const,
    root: s.root,
    target: s.target,
    options: buildOptions(SUFFIX_OPTIONS, s.answer),
    answer: s.answer,
    resultingWord: s.resultingWord,
    meaningNote: s.meaningNote,
  }))
  // Roughly half prefix, half suffix, shuffled together.
  const half = Math.ceil(ROUND_SIZE / 2)
  const picked = [
    ...shuffle(prefixItems).slice(0, half),
    ...shuffle(suffixItems).slice(0, ROUND_SIZE - half),
  ]
  return shuffle(picked)
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PrefixSuffixLabPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<LabItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    setItems(buildRound())
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleChoose = useCallback(
    (option: string) => {
      if (!current || feedback) return
      const isCorrect = option === current.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      if (isCorrect) setScore((s) => s + 1)

      setTimeout(() => {
        if (idx + 1 >= items.length) {
          setGameState('finished')
        } else {
          setIdx((i) => i + 1)
          setSelected(null)
          setFeedback(null)
        }
      }, 2100)
    },
    [current, feedback, idx, items.length],
  )

  // Reset transient state if the round restarts mid-play.
  useEffect(() => {
    if (gameState === 'idle') {
      setSelected(null)
      setFeedback(null)
    }
  }, [gameState])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" render={<Link href="/games" />}>
            <ArrowLeft className="size-4 mr-1" />
            Back to Games
          </Button>
          {boardConfig && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" /> For {boardConfig.shortName}
            </span>
          )}
        </div>

        <GameShell
          gameId="prefix-suffix-lab"
          title="Prefix & Suffix Lab"
          description="Build new words by adding the right prefix or suffix. Read the root and the goal, then pick the affix that makes the word."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Word {idx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      current.mode === 'prefix'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {current.mode === 'prefix' ? 'Prefix' : 'Suffix'}
                  </span>
                </div>
              </div>

              {/* Prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <FlaskConical className="size-4" />
                  {current.mode === 'prefix' ? 'Add a prefix' : 'Add a suffix'}
                </div>

                <div className="text-3xl font-bold text-foreground">
                  {current.mode === 'prefix' ? (
                    <>
                      <span className="text-muted-foreground">_ _ +</span>{' '}
                      <span>{current.root}</span>
                    </>
                  ) : (
                    <>
                      <span>{current.root}</span>{' '}
                      <span className="text-muted-foreground">+ _ _</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  Goal - <span className="font-medium text-foreground">{current.target}</span>
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {current.options.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = selected === option
                  return (
                    <button
                      key={option}
                      onClick={() => handleChoose(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-4 text-lg font-semibold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'space-y-1 rounded-lg px-4 py-3 text-center text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant! You built{' '}
                        <span className="font-bold">{current.resultingWord}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite - the word is{' '}
                        <span className="font-bold">{current.resultingWord}</span> ({current.answer}{' '}
                        {current.mode === 'prefix' ? '+' : 'on'} {current.root})
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{current.meaningNote}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
