'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface PatternItem {
  options: [string, string, string, string]
  answerIndex: 0 | 1 | 2 | 3
  rule: string
}

const PATTERN_BANK: PatternItem[] = [
  // ── 'i before e except after c' ──────────────────────────────────────────
  {
    options: ['recieve', 'receive', 'receeve', 'receve'],
    answerIndex: 1,
    rule: "'i' before 'e' except after 'c' — so 'ceive', not 'cieve'.",
  },
  {
    options: ['beleive', 'beleeve', 'believe', 'bilieve'],
    answerIndex: 2,
    rule: "'i' before 'e' when there is no 'c': bel-ieve.",
  },
  {
    options: ['acheive', 'achieve', 'acheeve', 'acheve'],
    answerIndex: 1,
    rule: "'i' before 'e' (no 'c' here): ach-ieve.",
  },
  {
    options: ['decieve', 'deceeve', 'deceive', 'deceve'],
    answerIndex: 2,
    rule: "After 'c', it is 'ei': dec-eive.",
  },
  {
    options: ['cieling', 'ceiling', 'ceeling', 'celing'],
    answerIndex: 1,
    rule: "After 'c', use 'ei': c-eiling.",
  },
  {
    options: ['peice', 'piece', 'peece', 'piecce'],
    answerIndex: 1,
    rule: "'i' before 'e' with no 'c': p-iece (a piece of pie).",
  },
  {
    options: ['theif', 'theef', 'thief', 'thiefe'],
    answerIndex: 2,
    rule: "'i' before 'e' when not after 'c': th-ief.",
  },
  {
    options: ['wieght', 'weight', 'weeght', 'waight'],
    answerIndex: 1,
    rule: "Exception: 'weight' uses 'ei' for the /ay/ sound.",
  },
  {
    options: ['nieghbour', 'neighbour', 'neighbor', 'naighbour'],
    answerIndex: 1,
    rule: "Exception: 'ei' for the /ay/ sound; UK keeps the 'u' in -bour.",
  },
  {
    options: ['wierd', 'weird', 'weerd', 'weird'],
    answerIndex: 1,
    rule: "Exception: 'weird' is spelled 'ei' though no 'c' precedes it.",
  },
  {
    options: ['seize', 'sieze', 'seeze', 'seaze'],
    answerIndex: 0,
    rule: "Exception: 'seize' breaks the rule and uses 'ei'.",
  },
  {
    options: ['protien', 'protein', 'proteen', 'protian'],
    answerIndex: 1,
    rule: "Exception: 'protein' uses 'ei' after a vowel.",
  },

  // ── Consonant doubling (1-1-1 rule) when adding -ing / -ed ────────────────
  {
    options: ['runing', 'running', 'runnning', 'runeing'],
    answerIndex: 1,
    rule: 'Short vowel + single final consonant: double it — run → running.',
  },
  {
    options: ['stoped', 'stopped', 'stoppd', 'stopeed'],
    answerIndex: 1,
    rule: 'One syllable, one vowel, one consonant: double — stop → stopped.',
  },
  {
    options: ['begining', 'beginning', 'beggining', 'beginnning'],
    answerIndex: 1,
    rule: "Stress on last syllable: double the 'n' — begin → beginning.",
  },
  {
    options: ['planed', 'plannned', 'planned', 'plaaned'],
    answerIndex: 2,
    rule: 'Short vowel before single consonant: double — plan → planned.',
  },
  {
    options: ['swiming', 'swimming', 'swimeing', 'swimmming'],
    answerIndex: 1,
    rule: "Short vowel + single 'm': double it — swim → swimming.",
  },
  {
    options: ['prefered', 'preferred', 'preffered', 'prefferred'],
    answerIndex: 1,
    rule: "Stress on final syllable: double the 'r' — prefer → preferred.",
  },
  {
    options: ['committed', 'comitted', 'commited', 'comited'],
    answerIndex: 0,
    rule: "Stressed final syllable: double 't' (and keep both 'm's) — commit → committed.",
  },
  {
    options: ['controled', 'controlled', 'controled', 'controlld'],
    answerIndex: 1,
    rule: "UK English doubles the final 'l': control → controlled.",
  },
  {
    options: ['traveling', 'travelling', 'travelng', 'travellling'],
    answerIndex: 1,
    rule: "UK English doubles the 'l' even when unstressed: travel → travelling.",
  },
  {
    options: ['gardenning', 'gardening', 'gardning', 'gardenning'],
    answerIndex: 1,
    rule: 'Stress is NOT on the last syllable, so do not double: garden → gardening.',
  },

  // ── Drop the silent 'e' before a vowel suffix ────────────────────────────
  {
    options: ['makeing', 'making', 'makking', 'maing'],
    answerIndex: 1,
    rule: "Drop the silent 'e' before -ing: make → making.",
  },
  {
    options: ['hopeing', 'hopping', 'hoping', 'hopeng'],
    answerIndex: 2,
    rule: "Drop the 'e' before -ing: hope → hoping (not 'hopping').",
  },
  {
    options: ['writeing', 'writting', 'writing', 'wrighting'],
    answerIndex: 2,
    rule: "Drop the silent 'e' before -ing: write → writing.",
  },
  {
    options: ['useable', 'usable', 'usabel', 'useible'],
    answerIndex: 1,
    rule: "Drop the 'e' before -able: use → usable.",
  },
  {
    options: ['loveable', 'lovable', 'lovible', 'loveble'],
    answerIndex: 1,
    rule: "Drop the silent 'e' before -able: love → lovable.",
  },
  {
    options: ['noticable', 'noticeable', 'noticeible', 'notisable'],
    answerIndex: 1,
    rule: "Keep the 'e' after soft 'c' to keep it soft: notice → noticeable.",
  },
  {
    options: ['courageous', 'couragous', 'curageous', 'courageus'],
    answerIndex: 0,
    rule: "Keep the 'e' after 'g' to keep it soft: courage → courageous.",
  },
  {
    options: ['hopful', 'hopeful', 'hopefull', 'hoppeful'],
    answerIndex: 1,
    rule: "Keep the 'e' before a consonant suffix: hope → hopeful.",
  },
  {
    options: ['arguement', 'argument', 'arguemnt', 'argumant'],
    answerIndex: 1,
    rule: "Exception: drop the 'e' — argue → argument.",
  },
  {
    options: ['truely', 'truly', 'trully', 'truley'],
    answerIndex: 1,
    rule: "Exception: drop the 'e' — true → truly.",
  },

  // ── Change 'y' to 'i' ────────────────────────────────────────────────────
  {
    options: ['happyness', 'happiness', 'hapiness', 'happieness'],
    answerIndex: 1,
    rule: "Consonant + 'y' → change 'y' to 'i': happy → happiness.",
  },
  {
    options: ['cryed', 'cryd', 'cried', 'criede'],
    answerIndex: 2,
    rule: "Change 'y' to 'i' before -ed: cry → cried.",
  },
  {
    options: ['carryed', 'carried', 'car ried', 'carriedd'],
    answerIndex: 1,
    rule: "Consonant + 'y' → 'i' before -ed: carry → carried.",
  },
  {
    options: ['babys', 'babies', 'babyies', 'babes'],
    answerIndex: 1,
    rule: "Consonant + 'y' → 'ies' for plurals: baby → babies.",
  },
  {
    options: ['beautyful', 'beautiful', 'beutiful', 'beautifull'],
    answerIndex: 1,
    rule: "Change 'y' to 'i' before a suffix: beauty → beautiful.",
  },
  {
    options: ['studie', 'studying', 'studiing', 'studdying'],
    answerIndex: 1,
    rule: "Keep the 'y' before -ing (never 'ii'): study → studying.",
  },
  {
    options: ['playd', 'plaied', 'played', 'plaiyed'],
    answerIndex: 2,
    rule: "Vowel + 'y' → keep the 'y': play → played.",
  },
  {
    options: ['enjoyed', 'enjoied', 'enjoyd', 'enjoyyed'],
    answerIndex: 0,
    rule: "Vowel + 'y' → keep the 'y': enjoy → enjoyed.",
  },
  {
    options: ['monkies', 'monkeys', 'monkys', 'monkyies'],
    answerIndex: 1,
    rule: "Vowel + 'y' → just add 's': monkey → monkeys.",
  },

  // ── -tion / -sion / -cian endings ────────────────────────────────────────
  {
    options: ['decision', 'desicion', 'decison', 'decistion'],
    answerIndex: 0,
    rule: 'After a /zh/ sound use -sion: decide → decision.',
  },
  {
    options: ['informasion', 'information', 'informationn', 'informacion'],
    answerIndex: 1,
    rule: 'Most nouns from verbs use -tion: inform → information.',
  },
  {
    options: ['expansion', 'expantion', 'expancion', 'expanssion'],
    answerIndex: 0,
    rule: "After 'n' the ending is often -sion: expand → expansion.",
  },
  {
    options: ['discussion', 'discusion', 'discustion', 'discussian'],
    answerIndex: 0,
    rule: 'Verbs ending in -ss take -ion: discuss → discussion.',
  },
  {
    options: ['musician', 'musicion', 'musition', 'musitian'],
    answerIndex: 0,
    rule: 'A person/job often takes -cian: music → musician.',
  },
  {
    options: ['electrision', 'electricion', 'electrician', 'electritian'],
    answerIndex: 2,
    rule: 'Job ending uses -cian: electric → electrician.',
  },
  {
    options: ['posession', 'possesion', 'possession', 'posesssion'],
    answerIndex: 2,
    rule: "Double 's' twice, then -ion: possess → possession.",
  },
  {
    options: ['attension', 'attention', 'attencion', 'attentcion'],
    answerIndex: 1,
    rule: "Use -tion after 't': attend → attention.",
  },
  {
    options: ['televsion', 'television', 'televistion', 'televicion'],
    answerIndex: 1,
    rule: 'After a long vowel sound use -sion: television.',
  },

  // ── Plurals: -f / -fe → -ves ─────────────────────────────────────────────
  {
    options: ['knifes', 'knives', 'knifves', 'knivs'],
    answerIndex: 1,
    rule: 'Words ending -fe often become -ves: knife → knives.',
  },
  {
    options: ['leafs', 'leeves', 'leaves', 'leavs'],
    answerIndex: 2,
    rule: 'Many -f words become -ves: leaf → leaves.',
  },
  {
    options: ['wifes', 'wives', 'wifves', 'wivs'],
    answerIndex: 1,
    rule: '-fe → -ves: wife → wives.',
  },
  {
    options: ['halves', 'halfs', 'halfes', 'halvs'],
    answerIndex: 0,
    rule: '-f → -ves: half → halves.',
  },
  {
    options: ['shelfs', 'shelfes', 'shelves', 'shelvs'],
    answerIndex: 2,
    rule: '-f → -ves: shelf → shelves.',
  },
  {
    options: ['theifs', 'thiefs', 'thieves', 'thievs'],
    answerIndex: 2,
    rule: '-f → -ves: thief → thieves.',
  },
  {
    options: ['rooves', 'roofs', 'roofes', 'roovs'],
    answerIndex: 1,
    rule: "Exception: 'roof' just adds 's' — roofs.",
  },
  {
    options: ['cheifs', 'chiefs', 'chieves', 'chiefes'],
    answerIndex: 1,
    rule: "Exception: 'chief' just adds 's' — chiefs.",
  },

  // ── UK spelling distinctions ─────────────────────────────────────────────
  {
    options: ['color', 'colour', 'coler', 'colur'],
    answerIndex: 1,
    rule: "UK English keeps the 'u': colour, not 'color'.",
  },
  {
    options: ['favorite', 'favourite', 'faverite', 'favourit'],
    answerIndex: 1,
    rule: "UK English keeps the 'u': favourite.",
  },
  {
    options: ['practise', 'practice', 'practece', 'practiss'],
    answerIndex: 1,
    rule: "Noun = 'practice' with a 'c' (the verb is 'practise').",
  },
  {
    options: ['practice the song', 'practise the song', 'practece the song', 'practiss the song'],
    answerIndex: 1,
    rule: "Verb = 'practise' with an 's' (the noun is 'practice').",
  },
  {
    options: ['organize', 'organise', 'organyse', 'organiize'],
    answerIndex: 1,
    rule: 'UK English usually prefers -ise: organise.',
  },
  {
    options: ['centre', 'center', 'centr', 'sentre'],
    answerIndex: 0,
    rule: "UK English uses -re: centre, not 'center'.",
  },
  {
    options: ['licence to drive', 'license to drive', 'licanse to drive', 'lisence to drive'],
    answerIndex: 0,
    rule: "Noun = 'licence' with a 'c' in UK English.",
  },
]

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROUND_SIZE = 15
const LETTERS = ['A', 'B', 'C', 'D']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SpellingPatternsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<PatternItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    setItems(shuffle(PATTERN_BANK).slice(0, ROUND_SIZE))
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setRevealed(false)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (choice: number) => {
      if (revealed || !current) return
      setSelected(choice)
      setRevealed(true)
      setTotalAnswered((t) => t + 1)
      if (choice === current.answerIndex) {
        setScore((s) => s + 1)
      }
    },
    [revealed, current],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }, [idx, items.length])

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
          gameId="spelling-patterns"
          title="Spelling Patterns"
          description="Pick the correctly spelled word, then learn the rule behind it. Master patterns like 'i before e', consonant doubling, drop-the-e, y→i, -tion/-sion, and -ves plurals."
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
                  Question {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">Which spelling is correct?</p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.options.map((opt, i) => {
                  const isCorrect = i === current.answerIndex
                  const isChosen = i === selected
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={revealed}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-base font-medium transition-all',
                        !revealed &&
                          'border-border text-foreground hover:border-primary hover:bg-accent',
                        revealed &&
                          isCorrect &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        revealed &&
                          isChosen &&
                          !isCorrect &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        revealed &&
                          !isCorrect &&
                          !isChosen &&
                          'border-border text-muted-foreground opacity-60',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold',
                          revealed && isCorrect
                            ? 'border-emerald-500 text-emerald-400'
                            : revealed && isChosen && !isCorrect
                              ? 'border-red-500 text-red-400'
                              : 'border-border text-muted-foreground',
                        )}
                      >
                        {LETTERS[i]}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {revealed && isCorrect && <CheckCircle className="size-5 text-emerald-400" />}
                      {revealed && isChosen && !isCorrect && (
                        <XCircle className="size-5 text-red-400" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + rule reveal */}
              {revealed && (
                <div className="space-y-4">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      selected === current.answerIndex
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {selected === current.answerIndex ? (
                      <>
                        <CheckCircle className="size-4" /> Spot on — great pattern spotting!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite — the correct spelling is{' '}
                        <span className="font-bold">{current.options[current.answerIndex]}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground">
                    <Lightbulb className="size-4 shrink-0 mt-0.5 text-primary" />
                    <span>
                      <span className="font-semibold text-primary">Rule: </span>
                      {current.rule}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {idx + 1 >= items.length ? 'See Results' : 'Next Question'}
                    </Button>
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
