'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface PhrasalVerb {
  phrasal: string
  exampleSentence: string
  meaning: string
  distractors: [string, string, string]
}

const PHRASAL_BANK: PhrasalVerb[] = [
  {
    phrasal: 'get up',
    exampleSentence: 'I usually get up at seven o’clock on weekdays.',
    meaning: 'to leave your bed after sleeping',
    distractors: ['to feel very tired', 'to make a mistake', 'to clean a room'],
  },
  {
    phrasal: 'give up',
    exampleSentence: 'She decided to give up smoking after twenty years.',
    meaning: 'to stop doing something, often a habit',
    distractors: ['to start a new hobby', 'to win a prize', 'to ask for help'],
  },
  {
    phrasal: 'look after',
    exampleSentence: 'Could you look after my dog while I’m away?',
    meaning: 'to take care of someone or something',
    distractors: ['to search for something', 'to ignore a problem', 'to follow behind'],
  },
  {
    phrasal: 'run out of',
    exampleSentence: 'We’ve run out of milk, so I’ll buy some more.',
    meaning: 'to have no more of something left',
    distractors: ['to leave a building quickly', 'to buy a large amount', 'to win a race'],
  },
  {
    phrasal: 'put off',
    exampleSentence: 'They had to put off the meeting until next Monday.',
    meaning: 'to delay or postpone something',
    distractors: ['to switch off a light', 'to remove your coat', 'to make someone angry'],
  },
  {
    phrasal: 'find out',
    exampleSentence: 'I need to find out what time the train leaves.',
    meaning: 'to discover information',
    distractors: ['to go outside', 'to lose something', 'to invite a friend'],
  },
  {
    phrasal: 'turn down',
    exampleSentence: 'He turned down the job offer because the pay was low.',
    meaning: 'to refuse an offer or request',
    distractors: ['to accept gladly', 'to turn around', 'to reduce the volume'],
  },
  {
    phrasal: 'carry on',
    exampleSentence: 'Please carry on with your work; I’ll wait here.',
    meaning: 'to continue doing something',
    distractors: ['to lift something heavy', 'to stop suddenly', 'to take a break'],
  },
  {
    phrasal: 'take off',
    exampleSentence: 'The plane will take off in ten minutes.',
    meaning: 'to leave the ground and begin to fly',
    distractors: ['to land safely', 'to slow down', 'to remove a label'],
  },
  {
    phrasal: 'look forward to',
    exampleSentence: 'We’re really looking forward to the summer holiday.',
    meaning: 'to feel excited about something that will happen',
    distractors: ['to remember the past', 'to look in front of you', 'to worry about something'],
  },
  {
    phrasal: 'come across',
    exampleSentence: 'I came across an old photo while tidying the attic.',
    meaning: 'to find something by chance',
    distractors: ['to walk towards someone', 'to agree with a plan', 'to hide something'],
  },
  {
    phrasal: 'bring up',
    exampleSentence: 'She didn’t want to bring up the subject of money.',
    meaning: 'to mention or start talking about a topic',
    distractors: ['to carry upstairs', 'to end a conversation', 'to raise a child'],
  },
  {
    phrasal: 'call off',
    exampleSentence: 'The match was called off because of heavy rain.',
    meaning: 'to cancel a planned event',
    distractors: ['to telephone someone', 'to shout loudly', 'to begin a game'],
  },
  {
    phrasal: 'check in',
    exampleSentence: 'We need to check in at the hotel before six.',
    meaning: 'to register your arrival at a hotel or airport',
    distractors: ['to look inside a bag', 'to pay a bill', 'to leave a building'],
  },
  {
    phrasal: 'check out',
    exampleSentence: 'Guests must check out of the room by eleven.',
    meaning: 'to pay and leave a hotel',
    distractors: ['to look at a price', 'to arrive somewhere', 'to fill in a form'],
  },
  {
    phrasal: 'fill in',
    exampleSentence: 'Please fill in this form with your details.',
    meaning: 'to complete a document by writing information',
    distractors: ['to empty a container', 'to dig a hole', 'to colour a picture'],
  },
  {
    phrasal: 'get on with',
    exampleSentence: 'I get on well with my new colleagues.',
    meaning: 'to have a good relationship with someone',
    distractors: ['to climb onto a bus', 'to argue constantly', 'to leave quickly'],
  },
  {
    phrasal: 'give back',
    exampleSentence: 'Could you give back the book I lent you?',
    meaning: 'to return something to its owner',
    distractors: ['to keep something', 'to step backwards', 'to lend money'],
  },
  {
    phrasal: 'go on',
    exampleSentence: 'What’s going on in the street outside?',
    meaning: 'to happen',
    distractors: ['to switch off', 'to go away', 'to slow down'],
  },
  {
    phrasal: 'grow up',
    exampleSentence: 'He grew up in a small village in Wales.',
    meaning: 'to develop from a child into an adult',
    distractors: ['to become taller plants', 'to move house often', 'to learn a language'],
  },
  {
    phrasal: 'hold on',
    exampleSentence: 'Hold on a moment while I check the diary.',
    meaning: 'to wait for a short time',
    distractors: ['to let go', 'to hurry up', 'to hang something up'],
  },
  {
    phrasal: 'look up',
    exampleSentence: 'If you don’t know the word, look it up in a dictionary.',
    meaning: 'to search for information in a reference source',
    distractors: ['to raise your head', 'to admire someone', 'to clean a shelf'],
  },
  {
    phrasal: 'pick up',
    exampleSentence: 'I’ll pick you up from the station at noon.',
    meaning: 'to collect someone or something',
    distractors: ['to drop something', 'to choose carefully', 'to lift weights'],
  },
  {
    phrasal: 'put on',
    exampleSentence: 'Put on your coat; it’s cold outside.',
    meaning: 'to dress yourself in clothing',
    distractors: ['to take off clothes', 'to switch off a device', 'to place on a table'],
  },
  {
    phrasal: 'set up',
    exampleSentence: 'They set up a small business last year.',
    meaning: 'to start or establish something',
    distractors: ['to sit down', 'to close a company', 'to tidy a desk'],
  },
  {
    phrasal: 'take up',
    exampleSentence: 'She took up painting after she retired.',
    meaning: 'to start a new activity or hobby',
    distractors: ['to lift upwards', 'to give up a hobby', 'to use space'],
  },
  {
    phrasal: 'turn up',
    exampleSentence: 'He turned up late for the interview.',
    meaning: 'to arrive, often unexpectedly or late',
    distractors: ['to leave early', 'to increase the heat', 'to fold a sleeve'],
  },
  {
    phrasal: 'work out',
    exampleSentence: 'I couldn’t work out the answer to the puzzle.',
    meaning: 'to solve or understand something',
    distractors: ['to exercise at a gym', 'to leave a job', 'to go outside'],
  },
  {
    phrasal: 'break down',
    exampleSentence: 'Our car broke down on the motorway.',
    meaning: 'to stop working (of a machine or vehicle)',
    distractors: ['to fall to the ground', 'to start easily', 'to drive fast'],
  },
  {
    phrasal: 'cut down on',
    exampleSentence: 'The doctor told him to cut down on sugar.',
    meaning: 'to reduce the amount of something',
    distractors: ['to chop a tree', 'to add more of something', 'to throw away'],
  },
  {
    phrasal: 'deal with',
    exampleSentence: 'The manager will deal with the complaint today.',
    meaning: 'to take action to solve a problem',
    distractors: ['to play cards', 'to ignore an issue', 'to make a deal'],
  },
  {
    phrasal: 'end up',
    exampleSentence: 'We got lost and ended up in the wrong town.',
    meaning: 'to reach a final situation or place',
    distractors: ['to finish on time', 'to stand up', 'to begin a journey'],
  },
  {
    phrasal: 'figure out',
    exampleSentence: 'I can’t figure out how this machine works.',
    meaning: 'to understand something after thinking about it',
    distractors: ['to draw a shape', 'to count numbers', 'to leave a place'],
  },
  {
    phrasal: 'get along with',
    exampleSentence: 'Do you get along with your neighbours?',
    meaning: 'to have a friendly relationship with someone',
    distractors: ['to walk slowly', 'to dislike someone', 'to follow a path'],
  },
  {
    phrasal: 'get back',
    exampleSentence: 'What time did you get back from the trip?',
    meaning: 'to return to a place',
    distractors: ['to move backwards', 'to recover money', 'to take revenge'],
  },
  {
    phrasal: 'give in',
    exampleSentence: 'After a long argument, he finally gave in.',
    meaning: 'to stop resisting and agree',
    distractors: ['to hand in homework', 'to enter a room', 'to donate money'],
  },
  {
    phrasal: 'go off',
    exampleSentence: 'The milk has gone off; it smells terrible.',
    meaning: 'to become bad or no longer fresh',
    distractors: ['to leave a party', 'to switch on', 'to explode loudly'],
  },
  {
    phrasal: 'hang on',
    exampleSentence: 'Hang on while I find my keys.',
    meaning: 'to wait for a moment',
    distractors: ['to let go of something', 'to hang up clothes', 'to hold tightly'],
  },
  {
    phrasal: 'hang up',
    exampleSentence: 'She hung up the phone before I could reply.',
    meaning: 'to end a telephone call',
    distractors: ['to wait patiently', 'to hang a picture', 'to call someone'],
  },
  {
    phrasal: 'keep up with',
    exampleSentence: 'It’s hard to keep up with the latest news.',
    meaning: 'to stay at the same level or pace as something',
    distractors: ['to fall behind', 'to lift something', 'to store food'],
  },
  {
    phrasal: 'let down',
    exampleSentence: 'I promised to help, and I won’t let you down.',
    meaning: 'to disappoint someone',
    distractors: ['to lower a rope', 'to support a friend', 'to relax fully'],
  },
  {
    phrasal: 'log in',
    exampleSentence: 'You need a password to log in to the website.',
    meaning: 'to enter a computer system using your details',
    distractors: ['to write in a diary', 'to leave a website', 'to record a video'],
  },
  {
    phrasal: 'make up',
    exampleSentence: 'The children made up a story about a dragon.',
    meaning: 'to invent something, such as a story',
    distractors: ['to apply cosmetics', 'to tell the truth', 'to wake up early'],
  },
  {
    phrasal: 'pass away',
    exampleSentence: 'Her grandfather passed away peacefully last spring.',
    meaning: 'to die (a polite expression)',
    distractors: ['to walk past', 'to fall asleep', 'to move house'],
  },
  {
    phrasal: 'point out',
    exampleSentence: 'She pointed out a mistake in my essay.',
    meaning: 'to tell someone about something they had not noticed',
    distractors: ['to leave a room', 'to draw an arrow', 'to choose an option'],
  },
  {
    phrasal: 'put up with',
    exampleSentence: 'I can’t put up with this noise any longer.',
    meaning: 'to tolerate something unpleasant',
    distractors: ['to build a tent', 'to enjoy something', 'to raise an arm'],
  },
  {
    phrasal: 'run into',
    exampleSentence: 'I ran into an old friend at the supermarket.',
    meaning: 'to meet someone unexpectedly',
    distractors: ['to crash a car', 'to enter a building', 'to avoid someone'],
  },
  {
    phrasal: 'set off',
    exampleSentence: 'We set off early to avoid the traffic.',
    meaning: 'to begin a journey',
    distractors: ['to arrive home', 'to switch off an alarm', 'to put down luggage'],
  },
  {
    phrasal: 'show up',
    exampleSentence: 'Only half the team showed up for practice.',
    meaning: 'to arrive or appear',
    distractors: ['to leave early', 'to display proudly', 'to climb up'],
  },
  {
    phrasal: 'sort out',
    exampleSentence: 'I need to sort out my files before the deadline.',
    meaning: 'to organise or resolve something',
    distractors: ['to throw away', 'to make a mess', 'to leave the office'],
  },
  {
    phrasal: 'stay up',
    exampleSentence: 'The children stayed up late to watch the film.',
    meaning: 'to remain awake instead of going to bed',
    distractors: ['to stand still', 'to wake up early', 'to remain standing'],
  },
  {
    phrasal: 'take after',
    exampleSentence: 'She takes after her mother in many ways.',
    meaning: 'to resemble an older family member',
    distractors: ['to follow someone', 'to look behind you', 'to chase a person'],
  },
  {
    phrasal: 'throw away',
    exampleSentence: 'Don’t throw away those bottles; we can recycle them.',
    meaning: 'to get rid of something you no longer want',
    distractors: ['to keep safely', 'to toss a ball', 'to give as a gift'],
  },
  {
    phrasal: 'try on',
    exampleSentence: 'Can I try on these shoes before I buy them?',
    meaning: 'to put on clothing to see if it fits',
    distractors: ['to attempt a task', 'to take off clothes', 'to test a machine'],
  },
  {
    phrasal: 'turn off',
    exampleSentence: 'Remember to turn off the lights when you leave.',
    meaning: 'to stop a device or appliance working',
    distractors: ['to start an engine', 'to leave a road', 'to refuse politely'],
  },
  {
    phrasal: 'turn on',
    exampleSentence: 'Could you turn on the heating, please?',
    meaning: 'to start a device or appliance working',
    distractors: ['to switch off a light', 'to face someone', 'to rotate slowly'],
  },
  {
    phrasal: 'wake up',
    exampleSentence: 'I woke up early to catch the first bus.',
    meaning: 'to stop sleeping',
    distractors: ['to get out of bed', 'to fall asleep', 'to feel sleepy'],
  },
  {
    phrasal: 'warm up',
    exampleSentence: 'Athletes warm up before a race to avoid injury.',
    meaning: 'to prepare the body with gentle exercise',
    distractors: ['to heat a meal', 'to cool down', 'to put on a jumper'],
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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PhrasalVerbsMatchPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<PhrasalVerb[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)

  const currentQuestion = questions[qIdx] ?? null

  // Build the four shuffled options for the current question
  const options = useMemo(() => {
    if (!currentQuestion) return []
    return shuffle([currentQuestion.meaning, ...currentQuestion.distractors])
  }, [currentQuestion])

  const handleStart = useCallback(() => {
    setQuestions(shuffle(PHRASAL_BANK).slice(0, ROUND_SIZE))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQuestion || selected) return
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (option === currentQuestion.meaning) {
        setScore((s) => s + 1)
      }

      setTimeout(() => {
        if (qIdx + 1 >= questions.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setSelected(null)
        }
      }, 1600)
    },
    [currentQuestion, selected, qIdx, questions.length],
  )

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isCorrectSelection = selected !== null && selected === currentQuestion?.meaning

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
          gameId="phrasal-verbs-match"
          title="Phrasal Verb Match"
          description="Read the example sentence, then choose the correct meaning of the phrasal verb. Build the everyday English you need with confidence."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentQuestion && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Phrasal verb + example */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  What does this phrasal verb mean?
                </p>
                <p className="text-2xl font-bold text-primary">{currentQuestion.phrasal}</p>
                <p className="text-base text-foreground italic">
                  &ldquo;{currentQuestion.exampleSentence}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {options.map((option) => {
                  const isThisSelected = selected === option
                  const isAnswer = option === currentQuestion.meaning
                  const showCorrect = selected !== null && isAnswer
                  const showWrong = isThisSelected && !isAnswer

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={selected !== null}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        selected === null &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        selected !== null &&
                          !showCorrect &&
                          !showWrong &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      <span>{option}</span>
                      {showCorrect && <CheckCircle className="size-4 shrink-0" />}
                      {showWrong && <XCircle className="size-4 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {selected !== null && (
                <div
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    isCorrectSelection
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10',
                  )}
                >
                  {isCorrectSelection ? (
                    <>
                      <CheckCircle className="size-4" /> Well done — that&rsquo;s right!
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. &ldquo;{currentQuestion.phrasal}
                      &rdquo; means: <span className="font-bold">{currentQuestion.meaning}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
