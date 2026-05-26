'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, MessageCircle } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface Exchange {
  situation: string
  prompt: string
  options: [string, string, string, string]
  answerIndex: number
  note: string
}

const EXCHANGE_BANK: Exchange[] = [
  // Greetings
  {
    situation: 'You arrive at college early in the morning and see your teacher.',
    prompt: '"Good morning!"',
    options: ['Good morning!', 'Good night!', 'Bye for now.', 'Not bad, thanks.'],
    answerIndex: 0,
    note: 'We say "Good morning" before midday to greet someone.',
  },
  {
    situation: 'A classmate you know well walks past you in the corridor.',
    prompt: '"Hi! How are you?"',
    options: ['How do you do.', "I'm fine, thanks. And you?", 'Good evening.', 'Here you are.'],
    answerIndex: 1,
    note: '"I\'m fine, thanks. And you?" is a friendly, natural reply.',
  },
  {
    situation: 'You meet a friend in the afternoon at the bus stop.',
    prompt: '"Good afternoon!"',
    options: ['Good morning!', 'Good afternoon!', 'Goodbye!', "Sorry, I'm late."],
    answerIndex: 1,
    note: 'Reply with the same greeting for the time of day.',
  },
  {
    situation: 'Your neighbour greets you when you get home in the evening.',
    prompt: '"Good evening."',
    options: ['Good evening.', 'Good morning.', 'Well done.', 'Never mind.'],
    answerIndex: 0,
    note: 'We say "Good evening" after about 6 pm.',
  },
  {
    situation: 'A friend texts you and asks how things are going.',
    prompt: '"How\'s it going?"',
    options: ['Here you go.', 'Not too bad, thanks!', 'Good night.', "You're welcome."],
    answerIndex: 1,
    note: '"How\'s it going?" is informal; "Not too bad, thanks!" fits well.',
  },
  {
    situation: 'You see a colleague you have not seen for a long time.',
    prompt: '"Long time no see! How have you been?"',
    options: ["I've been well, thanks!", 'No, thank you.', 'Mind the step.', 'See you later.'],
    answerIndex: 0,
    note: 'Answer the question about how you have been.',
  },

  // Introductions
  {
    situation: 'Someone introduces themselves to you at a new class.',
    prompt: '"Hello, I\'m Sara. Nice to meet you."',
    options: ['Nice to meet you too.', 'No problem.', 'Good luck.', 'Help yourself.'],
    answerIndex: 0,
    note: 'When someone says "Nice to meet you", reply "Nice to meet you too."',
  },
  {
    situation: 'You want to introduce yourself to a new person at work.',
    prompt: 'You speak first.',
    options: [
      'Sorry about that.',
      "Hello, I'm Tom. What's your name?",
      'Goodbye for now.',
      'Yes, please.',
    ],
    answerIndex: 1,
    note: 'A polite way to introduce yourself and ask for their name.',
  },
  {
    situation: 'At a formal event, an older manager offers a handshake.',
    prompt: '"How do you do?"',
    options: ['How do you do?', "I'm doing my homework.", 'Not bad, mate.', 'See you soon.'],
    answerIndex: 0,
    note: '"How do you do?" is formal; the polite reply is the same phrase.',
  },
  {
    situation: 'A friend introduces you to their sister.',
    prompt: '"This is my sister, Mia."',
    options: ['Goodbye, Mia.', 'Hello, Mia. Nice to meet you.', 'Sorry, Mia.', 'Thank you, Mia.'],
    answerIndex: 1,
    note: 'Greet the new person and say it is nice to meet them.',
  },
  {
    situation: 'Someone asks where you are from.',
    prompt: '"Where are you from?"',
    options: ["I'm from Poland.", "You're welcome.", 'Good night.', 'Excuse me.'],
    answerIndex: 0,
    note: 'Answer with your country or town.',
  },

  // Thanks
  {
    situation: 'A friend helps you carry a heavy bag.',
    prompt: 'You want to thank them.',
    options: ['Sorry!', 'Thank you so much!', 'Good morning!', 'See you!'],
    answerIndex: 1,
    note: 'Say "Thank you" to show you are grateful.',
  },
  {
    situation: 'You thank a shop assistant and they reply.',
    prompt: '"Thank you very much." "You\'re welcome."',
    options: ["You're welcome.", 'No, thanks.', 'Good evening.', "Sorry, I can't."],
    answerIndex: 0,
    note: '"You\'re welcome" is the polite reply to "Thank you".',
  },
  {
    situation: 'Someone gives you a small gift for your birthday.',
    prompt: '"Here\'s a little present for you."',
    options: ['No problem.', "Thank you, that's very kind.", 'Mind the gap.', 'Good luck.'],
    answerIndex: 1,
    note: 'Thank the person and say it is kind of them.',
  },
  {
    situation: 'A classmate lends you a pen during a lesson.',
    prompt: 'They hand you the pen.',
    options: ['Thanks a lot!', 'Goodbye!', 'How do you do?', "Sorry, I'm late."],
    answerIndex: 0,
    note: '"Thanks a lot!" is a friendly way to say thank you.',
  },
  {
    situation: 'You want to reply politely when someone thanks you for help.',
    prompt: '"Thanks for your help!"',
    options: [
      'No worries, happy to help.',
      'Good night.',
      'Excuse me, please.',
      'See you tomorrow.',
    ],
    answerIndex: 0,
    note: '"No worries, happy to help" is a warm, natural reply.',
  },

  // Apologies
  {
    situation: "You step on someone's foot by accident on the bus.",
    prompt: 'You speak to them.',
    options: ['Well done!', "I'm so sorry!", 'Good afternoon!', "You're welcome!"],
    answerIndex: 1,
    note: 'Say sorry when you do something by accident.',
  },
  {
    situation: 'Someone apologises to you for being a little late.',
    prompt: '"Sorry I\'m late."',
    options: ["That's all right.", 'Good morning.', 'No, thank you.', 'See you later.'],
    answerIndex: 0,
    note: '"That\'s all right" kindly accepts an apology.',
  },
  {
    situation: 'You bump into a stranger in a busy shop.',
    prompt: 'You speak to them.',
    options: ["Excuse me, I'm sorry!", 'Good evening!', 'Here you are!', 'Cheers!'],
    answerIndex: 0,
    note: 'Apologise politely after bumping into someone.',
  },
  {
    situation: 'A friend says sorry for forgetting to call you.',
    prompt: '"I\'m really sorry I forgot to call."',
    options: ["Don't worry about it.", 'Good luck!', 'Nice to meet you.', 'How do you do?'],
    answerIndex: 0,
    note: '"Don\'t worry about it" forgives them kindly.',
  },
  {
    situation: 'You need to get past someone standing in a doorway.',
    prompt: 'You speak to them.',
    options: ['Excuse me, please.', 'Good night.', 'Thank you very much.', 'See you soon.'],
    answerIndex: 0,
    note: '"Excuse me, please" is polite when you need to pass.',
  },

  // Requests
  {
    situation: 'You want to borrow a pen from a classmate.',
    prompt: 'You ask them.',
    options: [
      'Could I borrow a pen, please?',
      'Good morning, pen.',
      'Sorry, pen.',
      'Goodbye, pen.',
    ],
    answerIndex: 0,
    note: '"Could I... please?" is a polite way to make a request.',
  },
  {
    situation: 'You ask the teacher to repeat something. They reply kindly.',
    prompt: '"Could you say that again, please?" "Of course."',
    options: ['Of course.', 'Good evening.', 'No, thanks.', 'See you later.'],
    answerIndex: 0,
    note: '"Of course" is a friendly way to agree to a request.',
  },
  {
    situation: 'You want someone to help you with a question.',
    prompt: 'You ask politely.',
    options: ['Give me that now.', 'Could you help me, please?', 'Good night.', "You're welcome."],
    answerIndex: 1,
    note: 'Use "Could you... please?" to ask politely for help.',
  },
  {
    situation: 'You ask to open the window because it is hot.',
    prompt: 'You ask the teacher.',
    options: ['Is it OK if I open the window?', 'Goodbye!', "Sorry I'm late.", 'Nice to meet you.'],
    answerIndex: 0,
    note: '"Is it OK if I...?" politely asks for permission.',
  },
  {
    situation: 'Someone asks you to pass the salt at dinner.',
    prompt: '"Could you pass the salt, please?"',
    options: ['Here you are.', 'Good morning.', 'How do you do?', 'See you tomorrow.'],
    answerIndex: 0,
    note: '"Here you are" is what we say when handing something over.',
  },
  {
    situation: 'You want to ask the time from a stranger politely.',
    prompt: 'You speak first.',
    options: [
      'Excuse me, what time is it, please?',
      'Good night, time.',
      'Sorry, time.',
      'Cheers, time.',
    ],
    answerIndex: 0,
    note: 'Start with "Excuse me" before asking a stranger.',
  },

  // Leave-taking
  {
    situation: "You are leaving a friend's house at night.",
    prompt: 'You say goodbye.',
    options: ['Good morning!', 'Goodbye, see you soon!', 'Hello again!', 'Nice to meet you!'],
    answerIndex: 1,
    note: 'Use "Goodbye, see you soon" when you leave.',
  },
  {
    situation: 'A friend says they will see you the next day.',
    prompt: '"See you tomorrow!"',
    options: ['See you tomorrow!', 'Good morning!', 'How do you do?', 'Excuse me!'],
    answerIndex: 0,
    note: 'Reply with the same friendly phrase.',
  },
  {
    situation: 'You finish a phone call with a friend.',
    prompt: 'You end the call.',
    options: [
      'Bye for now, take care!',
      'Good morning, hello!',
      'Sorry, sorry!',
      'Nice to meet you!',
    ],
    answerIndex: 0,
    note: '"Bye for now, take care!" is a warm way to end a call.',
  },
  {
    situation: 'You leave a shop after buying something.',
    prompt: '"Thanks, goodbye!" (shop assistant) - you reply.',
    options: ['Goodbye, have a nice day!', 'Good morning!', "Sorry I'm late!", 'How do you do?'],
    answerIndex: 0,
    note: '"Have a nice day!" is a friendly thing to say when leaving.',
  },
  {
    situation: 'You say goodbye to a colleague on Friday afternoon.',
    prompt: 'You speak to them.',
    options: ['Have a good weekend!', 'Good morning!', 'Nice to meet you!', 'Sorry about that!'],
    answerIndex: 0,
    note: '"Have a good weekend!" is common before the weekend.',
  },

  // Classroom phrases
  {
    situation: 'You do not understand a word the teacher said.',
    prompt: 'You ask for help.',
    options: [
      'What does this word mean, please?',
      'Good night.',
      "You're welcome.",
      'See you later.',
    ],
    answerIndex: 0,
    note: 'Ask "What does this word mean?" when you don\'t understand.',
  },
  {
    situation: 'The teacher is speaking too fast for you.',
    prompt: 'You ask politely.',
    options: ['Could you speak more slowly, please?', 'Goodbye!', 'Sorry, fast!', 'Cheers!'],
    answerIndex: 0,
    note: 'Politely ask the teacher to slow down.',
  },
  {
    situation: 'You need to leave the classroom for a moment.',
    prompt: 'You ask the teacher.',
    options: [
      'May I leave the room, please?',
      'Good morning!',
      'Nice to meet you!',
      'Here you are!',
    ],
    answerIndex: 0,
    note: '"May I... please?" politely asks for permission.',
  },
  {
    situation: 'You did not hear the page number.',
    prompt: 'You ask the teacher.',
    options: ['Which page are we on, please?', 'Good evening!', 'Sorry, page!', 'See you soon!'],
    answerIndex: 0,
    note: 'Ask clearly which page the class is on.',
  },
  {
    situation: 'The teacher asks if everyone understands.',
    prompt: '"Does everyone understand?" You do not.',
    options: ["Sorry, I don't understand.", 'Good morning.', "You're welcome.", 'Goodbye.'],
    answerIndex: 0,
    note: 'It is fine to say "Sorry, I don\'t understand."',
  },
  {
    situation: 'You want to know how to spell a word.',
    prompt: 'You ask the teacher.',
    options: [
      'How do you spell that, please?',
      'Good night, spell!',
      'Sorry, spell!',
      'Cheers, spell!',
    ],
    answerIndex: 0,
    note: 'Ask "How do you spell that?" to learn the spelling.',
  },

  // Everyday social
  {
    situation: 'A friend offers you a cup of tea.',
    prompt: '"Would you like a cup of tea?"',
    options: [
      'Yes, please. That would be lovely.',
      'Good night.',
      'Sorry, late.',
      'How do you do?',
    ],
    answerIndex: 0,
    note: '"Yes, please" politely accepts an offer.',
  },
  {
    situation: 'Someone offers you more food but you have had enough.',
    prompt: '"Would you like some more?"',
    options: ["No, thank you. I'm full.", 'Good morning.', 'See you later.', 'How do you do?'],
    answerIndex: 0,
    note: '"No, thank you" politely refuses an offer.',
  },
  {
    situation: 'A friend tells you they passed their exam.',
    prompt: '"I passed my exam!"',
    options: ['Well done! Congratulations!', 'Sorry to hear that.', 'Good night.', 'Excuse me.'],
    answerIndex: 0,
    note: 'Say "Congratulations!" for good news.',
  },
  {
    situation: 'A friend tells you they feel unwell.',
    prompt: '"I don\'t feel very well today."',
    options: [
      'Oh dear, I hope you feel better soon.',
      'Congratulations!',
      'Good morning!',
      'Here you are!',
    ],
    answerIndex: 0,
    note: 'Show you care by hoping they feel better.',
  },
  {
    situation: 'Someone sneezes near you.',
    prompt: '"Atchoo!"',
    options: ['Bless you!', 'Goodbye!', 'How do you do?', 'See you later!'],
    answerIndex: 0,
    note: 'In the UK we often say "Bless you!" after a sneeze.',
  },
  {
    situation: 'A friend wishes you luck before your test.',
    prompt: '"Good luck with your test!"',
    options: ['Thank you!', "Sorry I'm late.", 'Good night.', 'No, thanks.'],
    answerIndex: 0,
    note: 'Simply say "Thank you!" when someone wishes you luck.',
  },
  {
    situation: 'You greet someone you do not know on a quiet morning walk.',
    prompt: 'You speak first.',
    options: ['Good morning!', 'Goodbye!', 'Sorry!', 'How do you do?'],
    answerIndex: 0,
    note: 'A friendly "Good morning!" suits a passer-by.',
  },
  {
    situation: 'A friend says "Happy birthday!" to you.',
    prompt: '"Happy birthday!"',
    options: ['Thank you very much!', 'Good night.', 'Excuse me.', 'See you later.'],
    answerIndex: 0,
    note: 'Thank the person for the birthday wishes.',
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

export default function GreetingsDialoguePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [round, setRound] = useState<Exchange[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)

  const current = round[idx] ?? null
  const revealed = selected !== null

  const encouragement = useMemo(
    () => ['Great job!', 'Well done!', 'Spot on!', 'Perfect!', 'Lovely!'],
    [],
  )

  const handleStart = useCallback(() => {
    setRound(shuffle(EXCHANGE_BANK).slice(0, ROUND_SIZE))
    setIdx(0)
    setScore(0)
    setAnswered(0)
    setSelected(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (choice: number) => {
      if (!current || revealed) return
      setSelected(choice)
      setAnswered((a) => a + 1)
      if (choice === current.answerIndex) {
        setScore((s) => s + 1)
      }

      setTimeout(() => {
        if (idx + 1 >= round.length) {
          setGameState('finished')
        } else {
          setIdx((i) => i + 1)
          setSelected(null)
        }
      }, 2200)
    },
    [current, revealed, idx, round.length],
  )

  const accuracyPct = answered > 0 ? Math.round((score / answered) * 100) : 0
  const isCorrectChoice = revealed && current !== null && selected === current.answerIndex

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
          gameId="greetings-dialogue"
          title="What Do You Say?"
          description="Read each everyday situation and choose the most polite, natural reply. Perfect for practising greetings, thanks, apologies and requests."
          difficulty="Foundation"
          score={score}
          maxScore={answered || round.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {idx + 1} of {round.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Situation card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {current.situation}
                  </p>
                </div>
                <p className="text-center text-lg font-semibold text-foreground">
                  {current.prompt}
                </p>
                <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">
                  Choose the best reply
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {current.options.map((opt, i) => {
                  const isAnswer = i === current.answerIndex
                  const isPicked = i === selected
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={revealed}
                      className={cn(
                        'flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !revealed &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        revealed &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        revealed &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        revealed && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      <span>{opt}</span>
                      {revealed && isAnswer && <CheckCircle className="size-4 shrink-0" />}
                      {revealed && isPicked && !isAnswer && <XCircle className="size-4 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {revealed && (
                <div
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm',
                    isCorrectChoice
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {isCorrectChoice ? (
                      <>
                        <CheckCircle className="size-4" />
                        {encouragement[idx % encouragement.length]}
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" />
                        Not quite - keep going, you&apos;re learning!
                      </>
                    )}
                  </div>
                  <p className="mt-1.5 text-muted-foreground">{current.note}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
