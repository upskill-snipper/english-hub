'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb, Zap } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface TrickyWord {
  /** Four candidate spellings - one correct, three plausible everyday errors */
  options: [string, string, string, string]
  /** Index (0-3) of the correct UK spelling */
  answerIndex: number
  /** One-line memory hook revealed after answering */
  tip: string
}

// 60+ high-frequency, everyday/functional words EAL (A2-B2) & KS3 learners
// commonly misspell. UK spelling. Distractors mirror real learner errors.
const WORD_BANK: TrickyWord[] = [
  {
    options: ['becuase', 'because', 'becouse', 'becasue'],
    answerIndex: 1,
    tip: 'Big Elephants Can Always Understand Small Elephants.',
  },
  {
    options: ['freind', 'frend', 'friend', 'friende'],
    answerIndex: 2,
    tip: 'A friend is there to the END: fri-END.',
  },
  {
    options: ['beutiful', 'beautiful', 'beautifull', 'beatiful'],
    answerIndex: 1,
    tip: 'It is a BEAUty: think "be-a-u-tiful".',
  },
  {
    options: ['diffrent', 'different', 'differant', 'diferent'],
    answerIndex: 1,
    tip: 'Different has a "fer" in the middle: dif-FER-ent.',
  },
  {
    options: ['bussiness', 'buisness', 'business', 'bisness'],
    answerIndex: 2,
    tip: 'You take the BUS to your busi-ness.',
  },
  {
    options: ['surprise', 'suprise', 'surprize', 'surprize'],
    answerIndex: 0,
    tip: 'A double-R surprise: sur-PR-ise - say both Rs.',
  },
  {
    options: ['adress', 'addres', 'address', 'adresse'],
    answerIndex: 2,
    tip: 'Two Ds and two Ss - add your address.',
  },
  {
    options: ['calender', 'calandar', 'calendar', 'calandar'],
    answerIndex: 2,
    tip: 'Ends in "-dar", like a radAR for dates.',
  },
  {
    options: ['restaraunt', 'restaurant', 'resturant', 'restarant'],
    answerIndex: 1,
    tip: 'Eat AU naturel: rest-AU-rant.',
  },
  {
    options: ['foriegn', 'forein', 'foreign', 'forreign'],
    answerIndex: 2,
    tip: 'Foreign breaks the rule: E before I here.',
  },
  {
    options: ['que', 'queue', 'cue', 'queu'],
    answerIndex: 1,
    tip: 'Q + UEUE: one letter, then a queue of others waiting.',
  },
  {
    options: ['Wensday', 'Wednsday', 'Wednesday', 'Wendsday'],
    answerIndex: 2,
    tip: 'Say it in your head: "Wed-nes-day".',
  },
  {
    options: ['definately', 'definitely', 'definatly', 'definetly'],
    answerIndex: 1,
    tip: 'There is a FINITE in defi-NITE-ly. No A.',
  },
  {
    options: ['seperate', 'separate', 'seperete', 'saparate'],
    answerIndex: 1,
    tip: 'There is A RAT in sep-A-RAT-e.',
  },
  {
    options: ['neccessary', 'necesary', 'necessary', 'neccesary'],
    answerIndex: 2,
    tip: 'One Collar, two Sleeves: 1 C, 2 S.',
  },
  {
    options: ['enviroment', 'environment', 'enviornment', 'enviromnent'],
    answerIndex: 1,
    tip: 'IRON in the middle: env-IRON-ment.',
  },
  {
    options: ['begining', 'beggining', 'beginning', 'begginning'],
    answerIndex: 2,
    tip: 'Double the N before -ing: begin + n + ing.',
  },
  {
    options: ['untill', 'untl', 'until', 'untile'],
    answerIndex: 2,
    tip: 'One L only - "until" the very end.',
  },
  {
    options: ['wich', 'whitch', 'which', 'whish'],
    answerIndex: 2,
    tip: 'WH + ICH - like "wh-itch" without the T.',
  },
  {
    options: ['recieve', 'receive', 'receeve', 'receve'],
    answerIndex: 1,
    tip: 'I before E, except after C: rec-EI-ve.',
  },
  {
    options: ['beleive', 'believe', 'beleeve', 'belive'],
    answerIndex: 1,
    tip: 'Never beLIEve a LIE: be-LIE-ve.',
  },
  {
    options: ['acheive', 'achieve', 'acheeve', 'achive'],
    answerIndex: 1,
    tip: 'I before E: ach-IE-ve.',
  },
  {
    options: ['tommorow', 'tomorow', 'tomorrow', 'tommorrow'],
    answerIndex: 2,
    tip: 'One M, two Rs - to-mor-row.',
  },
  {
    options: ['favourate', 'favorite', 'favourite', 'faverite'],
    answerIndex: 2,
    tip: 'UK keeps the U: favo-U-rite.',
  },
  {
    options: ['colour', 'color', 'colur', 'collour'],
    answerIndex: 0,
    tip: 'UK spelling keeps the U: col-O-U-r.',
  },
  {
    options: ['neighbour', 'nieghbour', 'naybour', 'neighbor'],
    answerIndex: 0,
    tip: 'EIGH says "ay", plus the UK "-our".',
  },
  {
    options: ['accross', 'acros', 'across', 'akross'],
    answerIndex: 2,
    tip: 'One C, one S - walk "a-cross".',
  },
  {
    options: ['allways', 'always', 'alwais', 'olways'],
    answerIndex: 1,
    tip: 'AL + WAYS - only one L.',
  },
  {
    options: ['arguement', 'argument', 'argumant', 'arguemnt'],
    answerIndex: 1,
    tip: 'Argue loses its E: argu + ment.',
  },
  {
    options: ['embarass', 'embarrass', 'embaras', 'embarras'],
    answerIndex: 1,
    tip: 'Really Red face: 2 Rs and 2 Ss.',
  },
  {
    options: ['occassion', 'occasion', 'ocasion', 'occassion'],
    answerIndex: 1,
    tip: 'Two Cs, one S - a big occasion.',
  },
  {
    options: ['posession', 'possesion', 'possession', 'posesion'],
    answerIndex: 2,
    tip: 'Plenty of Ss: po-SS-e-SS-ion.',
  },
  {
    options: ['adress', 'agrument', 'grammar', 'gramer'],
    answerIndex: 2,
    tip: 'Ends in "-mar", not "-mer": gram-MAR.',
  },
  {
    options: ['febuary', 'february', 'februery', 'feburary'],
    answerIndex: 1,
    tip: 'Brrr! Feb-R-uary has a hidden R.',
  },
  {
    options: ['probaly', 'probably', 'probebly', 'probbly'],
    answerIndex: 1,
    tip: 'Say all three beats: prob-AB-ly.',
  },
  {
    options: ['intresting', 'interesting', 'intersting', 'interrsting'],
    answerIndex: 1,
    tip: 'Three Es: in-t-E-r-E-st-ing.',
  },
  {
    options: ['libary', 'library', 'librery', 'liberary'],
    answerIndex: 1,
    tip: 'Two Rs: lib-R-a-R-y.',
  },
  {
    options: ['decison', 'desicion', 'decision', 'decistion'],
    answerIndex: 2,
    tip: 'Decide → deci-SION.',
  },
  {
    options: ['definate', 'definit', 'definite', 'definete'],
    answerIndex: 2,
    tip: 'A finite is definite: defi-NITE.',
  },
  {
    options: ['truely', 'truly', 'trooly', 'truley'],
    answerIndex: 1,
    tip: 'True drops the E: tru + ly.',
  },
  {
    options: ['begginer', 'beginer', 'beginner', 'biginner'],
    answerIndex: 2,
    tip: 'Double N: begin + n + er.',
  },
  {
    options: ['wierd', 'weird', 'weard', 'weirde'],
    answerIndex: 1,
    tip: 'Weird is weird - E before I here.',
  },
  {
    options: ['piece', 'peice', 'peace', 'peese'],
    answerIndex: 0,
    tip: 'A piece of PIE: P-I-E-ce.',
  },
  {
    options: ['thier', 'there', 'their', 'theyr'],
    answerIndex: 2,
    tip: 'THEIR shows owning - HEIR is inside it.',
  },
  {
    options: ['wont', 'won’t', 'woun’t', 'wo’nt'],
    answerIndex: 1,
    tip: 'Will not → won’t, apostrophe before T.',
  },
  {
    options: ['alot', 'a lot', 'allot', 'alott'],
    answerIndex: 1,
    tip: '"A lot" is always two words.',
  },
  {
    options: ['wether', 'whether', 'whather', 'whither'],
    answerIndex: 1,
    tip: 'Whether or not - WH like a question.',
  },
  {
    options: ['accomodation', 'acommodation', 'accommodation', 'accomadation'],
    answerIndex: 2,
    tip: 'Two Cs, two Ms - room for everyone.',
  },
  {
    options: ['oppertunity', 'opportunity', 'oportunity', 'opportunaty'],
    answerIndex: 1,
    tip: 'Two Ps, then "-tunity".',
  },
  {
    options: ['existance', 'existence', 'exsistence', 'existense'],
    answerIndex: 1,
    tip: 'Ends in "-ence": exist-ENCE.',
  },
  {
    options: ['independant', 'independent', 'independnt', 'indipendent'],
    answerIndex: 1,
    tip: 'A dent at the end: independ-ENT.',
  },
  {
    options: ['rythm', 'rhythm', 'rythym', 'rhythem'],
    answerIndex: 1,
    tip: 'Rhythm Helps Your Two Hips Move.',
  },
  {
    options: ['adventrous', 'adventerous', 'adventurous', 'adventourous'],
    answerIndex: 2,
    tip: 'Adventure + ous: keep the "ur".',
  },
  {
    options: ['conscous', 'concious', 'conscious', 'consious'],
    answerIndex: 2,
    tip: 'SC in the middle: con-SC-ious.',
  },
  {
    options: ['goverment', 'government', 'govenment', 'governmant'],
    answerIndex: 1,
    tip: 'Govern + ment - don’t drop the N.',
  },
  {
    options: ['knowlege', 'knowledge', 'knowladge', 'knoledge'],
    answerIndex: 1,
    tip: 'Know + ledge - like a window ledge.',
  },
  {
    options: ['succesful', 'successful', 'sucessful', 'successfull'],
    answerIndex: 1,
    tip: 'Two Cs, two Ss, one final L.',
  },
  {
    options: ['immediatly', 'immediately', 'imediately', 'immediatley'],
    answerIndex: 1,
    tip: 'Immediate + ly - keep both Ms.',
  },
  {
    options: ['oppinion', 'opinion', 'opinon', 'openion'],
    answerIndex: 1,
    tip: 'One P only: o-PIN-ion.',
  },
  {
    options: ['parlament', 'parliment', 'parliament', 'parliment'],
    answerIndex: 2,
    tip: 'I AM in parl-I-AM-ent.',
  },
  {
    options: ['pronounciation', 'pronunciation', 'pronounciaton', 'pronunceation'],
    answerIndex: 1,
    tip: 'It loses the "oun": pro-NUN-ciation.',
  },
  {
    options: ['recomend', 'reccommend', 'recommend', 'reccomend'],
    answerIndex: 2,
    tip: 'One C, two Ms - recommend.',
  },
  {
    options: ['responsable', 'responsible', 'responsibel', 'responseble'],
    answerIndex: 1,
    tip: 'Ends in "-ible": respons-IBLE.',
  },
  {
    options: ['restraunt', 'restauraunt', 'restaurant', 'resteraunt'],
    answerIndex: 2,
    tip: 'Take AU to dinner: rest-AU-rant.',
  },
  {
    options: ['vegtable', 'vegetable', 'vegatable', 'vegitable'],
    answerIndex: 1,
    tip: 'Hidden middle E: veg-E-table.',
  },
  { options: ['Aprul', 'Aprill', 'April', 'Apryl'], answerIndex: 2, tip: 'Just one L: A-P-R-I-L.' },
  {
    options: ['enuff', 'enough', 'enuogh', 'enouth'],
    answerIndex: 1,
    tip: 'GH is silent: e-nough rhymes with "stuff".',
  },
  {
    options: ['heigth', 'hight', 'height', 'heihgt'],
    answerIndex: 2,
    tip: 'Height ends in "-ght", like "eight".',
  },
  {
    options: ['lenght', 'length', 'lengh', 'lenth'],
    answerIndex: 1,
    tip: 'Long → length: keep the "ng".',
  },
]

// ─── Config ────────────────────────────────────────────────────────────────────

const ROUND_SIZE = 18
const TIME_LIMIT = 90
const FEEDBACK_MS = 1500

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function TrickyWordSpellingPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [round, setRound] = useState<TrickyWord[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)

  const current = round[qIdx] ?? null

  const handleStart = useCallback(() => {
    setRound(shuffle(WORD_BANK).slice(0, ROUND_SIZE))
    setQIdx(0)
    setScore(0)
    setAnswered(0)
    setPicked(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handlePick = useCallback(
    (idx: number) => {
      if (!current || picked !== null) return
      setPicked(idx)
      setAnswered((a) => a + 1)
      if (idx === current.answerIndex) setScore((s) => s + 1)

      setTimeout(() => {
        if (qIdx + 1 >= round.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setPicked(null)
        }
      }, FEEDBACK_MS)
    },
    [current, picked, qIdx, round.length],
  )

  // Reset feedback if a round restarts mid-play
  useEffect(() => {
    if (gameState === 'idle') setPicked(null)
  }, [gameState])

  const accuracyPct = answered > 0 ? Math.round((score / answered) * 100) : 0
  const isCorrect = picked !== null && current !== null && picked === current.answerIndex

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
          gameId="tricky-word-spelling"
          title="Tricky Word Sprint"
          description="Spot the correct spelling of everyday words that trip people up. Tap fast - you have 90 seconds!"
          difficulty="Foundation"
          score={score}
          maxScore={answered || round.length || ROUND_SIZE}
          timeLimitSeconds={TIME_LIMIT}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="size-4 text-primary" />
                  Word {qIdx + 1} of {round.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">Which spelling is correct?</p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {current.options.map((opt, idx) => {
                  const isAnswer = idx === current.answerIndex
                  const isPicked = picked === idx
                  const showState = picked !== null
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePick(idx)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-4 text-center text-lg font-semibold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !showState &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent active:translate-y-px',
                        showState &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + memory tip */}
              {picked !== null && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      isCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle className="size-4" /> Spot on - nice work!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> The correct spelling is{' '}
                        <span className="font-bold">{current.options[current.answerIndex]}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="size-4 shrink-0 text-clay-600 mt-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">Memory tip: </span>
                      {current.tip}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
