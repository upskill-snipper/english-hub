'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ─── Quote Bank (30+ quotes from GCSE set texts) ──────────────────────────────

interface QuoteEntry {
  quote: string
  text: string
}

const QUOTE_BANK: QuoteEntry[] = [
  // Macbeth
  { quote: 'Is this a dagger which I see before me, the handle toward my hand?', text: 'Macbeth' },
  { quote: "Out, out, brief candle! Life's but a walking shadow.", text: 'Macbeth' },
  { quote: "Look like the innocent flower, but be the serpent under't.", text: 'Macbeth' },
  { quote: "Will all great Neptune's ocean wash this blood clean from my hand?", text: 'Macbeth' },
  { quote: 'Fair is foul, and foul is fair.', text: 'Macbeth' },
  // An Inspector Calls
  {
    quote: 'We are members of one body. We are responsible for each other.',
    text: 'An Inspector Calls',
  },
  { quote: 'They will be taught it in fire and blood and anguish.', text: 'An Inspector Calls' },
  { quote: "The young ones. They're more impressionable.", text: 'An Inspector Calls' },
  { quote: 'We are all responsible for each other.', text: 'An Inspector Calls' },
  // A Christmas Carol
  { quote: 'Are there no prisons? Are there no workhouses?', text: 'A Christmas Carol' },
  {
    quote: 'I wear the chain I forged in life. I made it link by link, and yard by yard.',
    text: 'A Christmas Carol',
  },
  {
    quote: 'Mankind was my business. The common welfare was my business.',
    text: 'A Christmas Carol',
  },
  { quote: 'He was as solitary as an oyster.', text: 'A Christmas Carol' },
  {
    quote: 'I will honour Christmas in my heart, and try to keep it all the year.',
    text: 'A Christmas Carol',
  },
  // Jekyll & Hyde
  { quote: 'Man is not truly one, but truly two.', text: 'Jekyll and Hyde' },
  { quote: 'If he be Mr Hyde, I shall be Mr Seek.', text: 'Jekyll and Hyde' },
  { quote: "Satan's signature upon a face.", text: 'Jekyll and Hyde' },
  { quote: 'I felt younger, lighter, happier in body.', text: 'Jekyll and Hyde' },
  // Romeo & Juliet
  { quote: 'But soft, what light through yonder window breaks?', text: 'Romeo and Juliet' },
  { quote: "A plague o' both your houses!", text: 'Romeo and Juliet' },
  { quote: 'These violent delights have violent ends.', text: 'Romeo and Juliet' },
  { quote: 'My only love sprung from my only hate!', text: 'Romeo and Juliet' },
  { quote: 'Parting is such sweet sorrow.', text: 'Romeo and Juliet' },
  // Animal Farm
  {
    quote: 'All animals are equal, but some animals are more equal than others.',
    text: 'Animal Farm',
  },
  { quote: 'Four legs good, two legs bad.', text: 'Animal Farm' },
  {
    quote: 'The creatures outside looked from pig to man, and from man to pig.',
    text: 'Animal Farm',
  },
  { quote: 'Napoleon is always right.', text: 'Animal Farm' },
  // Lord of the Flies
  { quote: "Maybe there is a beast... maybe it's only us.", text: 'Lord of the Flies' },
  {
    quote: "The thing is -- fear can't hurt you any more than a dream.",
    text: 'Lord of the Flies',
  },
  {
    quote: "Ralph wept for the end of innocence, the darkness of man's heart.",
    text: 'Lord of the Flies',
  },
  { quote: 'Kill the beast! Cut his throat! Spill his blood!', text: 'Lord of the Flies' },
  // Of Mice and Men
  {
    quote: "A guy needs somebody -- to be near him. A guy goes nuts if he ain't got nobody.",
    text: 'Of Mice and Men',
  },
  {
    quote: 'I got you to look after me, and you got me to look after you.',
    text: 'Of Mice and Men',
  },
  {
    quote: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
    text: 'Of Mice and Men',
  },
  { quote: 'Tell me about the rabbits, George.', text: 'Of Mice and Men' },

  // ── Additional Macbeth quotes (public domain) ──────────────────────────────
  {
    quote: 'Stars, hide your fires; let not light see my black and deep desires.',
    text: 'Macbeth',
  },
  { quote: 'Come, you spirits that tend on mortal thoughts, unsex me here.', text: 'Macbeth' },
  { quote: 'I dare do all that may become a man; who dares do more is none.', text: 'Macbeth' },
  { quote: 'By the pricking of my thumbs, something wicked this way comes.', text: 'Macbeth' },
  {
    quote: "Yet do I fear thy nature; it is too full o' the milk of human kindness.",
    text: 'Macbeth',
  },
  { quote: "What's done cannot be undone.", text: 'Macbeth' },
  { quote: 'Double, double toil and trouble; fire burn and cauldron bubble.', text: 'Macbeth' },
  { quote: "There's daggers in men's smiles.", text: 'Macbeth' },
  {
    quote: 'It is a tale told by an idiot, full of sound and fury, signifying nothing.',
    text: 'Macbeth',
  },
  {
    quote:
      "I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o'er.",
    text: 'Macbeth',
  },
  { quote: 'So foul and fair a day I have not seen.', text: 'Macbeth' },
  { quote: "Screw your courage to the sticking place, and we'll not fail.", text: 'Macbeth' },
  { quote: 'All the perfumes of Arabia will not sweeten this little hand.', text: 'Macbeth' },
  {
    quote: 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.',
    text: 'Macbeth',
  },
  { quote: 'Full of scorpions is my mind, dear wife!', text: 'Macbeth' },

  // ── Additional An Inspector Calls quotes (<=15 words, fair dealing) ────────
  {
    quote: 'Public men, Mr Birling, have responsibilities as well as privileges.',
    text: 'An Inspector Calls',
  },
  {
    quote: "You're not the kind of father a chap could go to when he's in trouble.",
    text: 'An Inspector Calls',
  },
  {
    quote:
      "If we were all responsible for everything that happened to everybody we'd had anything to do with, it would be very awkward.",
    text: 'An Inspector Calls',
  },
  { quote: "I'm ashamed of you as well - yes both of you.", text: 'An Inspector Calls' },
  { quote: "The girl had been happy - hadn't she?", text: 'An Inspector Calls' },
  { quote: 'Just used her for the end of a stupid drunken evening.', text: 'An Inspector Calls' },
  { quote: "You began to learn something. And now you've stopped.", text: 'An Inspector Calls' },
  {
    quote: 'A man has to mind his own business and look after himself.',
    text: 'An Inspector Calls',
  },
  { quote: "We don't live alone. We are members of one body.", text: 'An Inspector Calls' },
  { quote: 'Each of you helped to kill her.', text: 'An Inspector Calls' },

  // ── Additional A Christmas Carol quotes (public domain) ────────────────────
  {
    quote: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!',
    text: 'A Christmas Carol',
  },
  { quote: 'Bah! Humbug!', text: 'A Christmas Carol' },
  { quote: 'Old Marley was as dead as a door-nail.', text: 'A Christmas Carol' },
  { quote: 'I will live in the Past, the Present, and the Future.', text: 'A Christmas Carol' },
  {
    quote: 'The cold within him froze his old features, nipped his pointed nose.',
    text: 'A Christmas Carol',
  },
  { quote: 'God bless us, every one!', text: 'A Christmas Carol' },
  { quote: 'Darkness is cheap, and Scrooge liked it.', text: 'A Christmas Carol' },
  { quote: 'No warmth could warm, no wintry weather chill him.', text: 'A Christmas Carol' },
  { quote: 'He carried his own low temperature always about with him.', text: 'A Christmas Carol' },
  {
    quote: 'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.',
    text: 'A Christmas Carol',
  },

  // ── Additional Jekyll and Hyde quotes (public domain) ──────────────────────
  {
    quote: 'I learned to recognise the thorough and primitive duality of man.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'With every day I drew nearer to the truth, that man is not truly one, but truly two.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'The pleasures which I made haste to seek in my disguise were undignified.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'He had always been known for charities; he was now no less distinguished for religion.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'All human beings are commingled out of good and evil.', text: 'Jekyll and Hyde' },
  { quote: 'The moment I choose, I can be rid of Mr Hyde.', text: 'Jekyll and Hyde' },
  {
    quote: 'He is not easy to describe. There is something wrong with his appearance.',
    text: 'Jekyll and Hyde',
  },
  {
    quote: 'That child of Hell had nothing human; nothing lived in him but fear and hatred.',
    text: 'Jekyll and Hyde',
  },
  { quote: 'I was slowly losing hold of my original and better self.', text: 'Jekyll and Hyde' },
  { quote: 'The fog still slept on the wing above the drowned city.', text: 'Jekyll and Hyde' },

  // ── Additional Romeo and Juliet quotes (public domain) ─────────────────────
  { quote: 'O Romeo, Romeo! Wherefore art thou Romeo?', text: 'Romeo and Juliet' },
  {
    quote: "What's in a name? That which we call a rose by any other name would smell as sweet.",
    text: 'Romeo and Juliet',
  },
  {
    quote: 'For never was a story of more woe than this of Juliet and her Romeo.',
    text: 'Romeo and Juliet',
  },
  { quote: 'O, she doth teach the torches to burn bright!', text: 'Romeo and Juliet' },
  { quote: 'Wisely and slow; they stumble that run fast.', text: 'Romeo and Juliet' },
  {
    quote:
      'Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.',
    text: 'Romeo and Juliet',
  },
  { quote: 'Do you bite your thumb at us, sir?', text: 'Romeo and Juliet' },
  { quote: 'Thus with a kiss I die.', text: 'Romeo and Juliet' },
  { quote: 'Then I defy you, stars!', text: 'Romeo and Juliet' },
  { quote: 'My bounty is as boundless as the sea, my love as deep.', text: 'Romeo and Juliet' },

  // ── Additional Animal Farm quotes (<=15 words, fair dealing) ───────────────
  { quote: 'The only good human being is a dead one.', text: 'Animal Farm' },
  { quote: 'I will work harder!', text: 'Animal Farm' },
  { quote: 'All animals are equal.', text: 'Animal Farm' },
  { quote: 'Man serves the interests of no creature except himself.', text: 'Animal Farm' },
  {
    quote: 'Donkeys live a long time. None of you has ever seen a dead donkey.',
    text: 'Animal Farm',
  },

  // ── Additional Lord of the Flies quotes (<=15 words, fair dealing) ─────────
  { quote: "The rules! You're breaking the rules!", text: 'Lord of the Flies' },
  { quote: 'What are we? Humans? Or animals? Or savages?', text: 'Lord of the Flies' },
  {
    quote: "We've got to have rules and obey them. After all, we're not savages.",
    text: 'Lord of the Flies',
  },
  {
    quote: 'Fancy thinking the Beast was something you could hunt and kill!',
    text: 'Lord of the Flies',
  },
  {
    quote: 'The world, that understandable and lawful world, was slipping away.',
    text: 'Lord of the Flies',
  },

  // ── Additional Of Mice and Men quotes (<=15 words, fair dealing) ───────────
  {
    quote:
      "I seen hundreds of men come by on the road... every damn one of 'em's got a little piece of land in his head.",
    text: 'Of Mice and Men',
  },
  {
    quote: "A guy sets alone out here at night, maybe readin' books or thinkin'.",
    text: 'Of Mice and Men',
  },
  {
    quote: "I could get you strung up on a tree so easy it ain't even funny.",
    text: 'Of Mice and Men',
  },
  { quote: "We could live offa the fatta the lan'.", text: 'Of Mice and Men' },
  { quote: "Ain't many guys travel around together. I don't know why.", text: 'Of Mice and Men' },

  // ── To Kill a Mockingbird quotes (<=15 words, fair dealing) ────────────────
  {
    quote: 'You never really understand a person until you climb into his skin.',
    text: 'To Kill a Mockingbird',
  },
  {
    quote: "Mockingbirds don't do one thing but sing their hearts out for us.",
    text: 'To Kill a Mockingbird',
  },
  {
    quote: "The one thing that doesn't abide by majority rule is a person's conscience.",
    text: 'To Kill a Mockingbird',
  },
  {
    quote:
      'I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun.',
    text: 'To Kill a Mockingbird',
  },
  {
    quote: 'People generally see what they look for, and hear what they listen for.',
    text: 'To Kill a Mockingbird',
  },
]

const ALL_TEXTS = [
  'Macbeth',
  'An Inspector Calls',
  'A Christmas Carol',
  'Jekyll and Hyde',
  'Romeo and Juliet',
  'Animal Farm',
  'Lord of the Flies',
  'Of Mice and Men',
  'To Kill a Mockingbird',
]

// Map the quote bank's simplified display titles to canonical set-text slugs.
const TEXT_TO_SLUG: Record<string, string> = {
  Macbeth: 'macbeth',
  'An Inspector Calls': 'an-inspector-calls',
  'A Christmas Carol': 'a-christmas-carol',
  'Jekyll and Hyde': 'jekyll-and-hyde',
  'Romeo and Juliet': 'romeo-and-juliet',
  'Animal Farm': 'animal-farm',
  'Lord of the Flies': 'lord-of-the-flies',
  'Of Mice and Men': 'of-mice-and-men',
  'To Kill a Mockingbird': 'to-kill-a-mockingbird',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateOptions(correctText: string, pool: string[]): string[] {
  const wrong = shuffle(pool.filter((t) => t !== correctText)).slice(0, 3)
  return shuffle([correctText, ...wrong])
}

const QUESTIONS_PER_ROUND = 20

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function QuoteDetectivePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter quote bank by board: keep only quotes from texts the user studies.
  // Fall back to the full bank if the board has fewer than ~3 texts represented.
  const { filteredQuotes, filteredTexts, usingFallback } = useMemo(() => {
    if (!board) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: false }
    }
    const boardSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const allowedTextLabels = ALL_TEXTS.filter((label) => {
      const slug = TEXT_TO_SLUG[label]
      return slug ? boardSlugs.has(slug) : false
    })
    const filtered = QUOTE_BANK.filter((q) => allowedTextLabels.includes(q.text))
    // Need at least 3 distinct texts (for multiple-choice variety) and at least 10 quotes
    const distinctTexts = new Set(filtered.map((q) => q.text))
    if (filtered.length < 10 || distinctTexts.size < 3) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: true }
    }
    return { filteredQuotes: filtered, filteredTexts: allowedTextLabels, usingFallback: false }
  }, [board])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<
    { quote: string; correctText: string; options: string[] }[]
  >([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQ = questions[currentIndex] ?? null

  const handleStart = useCallback(() => {
    // Sample size - if filtered pool has fewer than 20 quotes, repeat the pool to reach
    // QUESTIONS_PER_ROUND so the user still gets a full game.
    const pool = [...filteredQuotes]
    while (pool.length < QUESTIONS_PER_ROUND) {
      pool.push(...filteredQuotes)
    }
    const shuffled = shuffle(pool).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(
      shuffled.map((q) => ({
        quote: q.quote,
        correctText: q.text,
        options: generateOptions(q.text, filteredTexts),
      })),
    )
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedback(false)
    setGameState('playing')
  }, [filteredQuotes, filteredTexts])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (option: string) => {
      if (showFeedback || !currentQ) return
      setSelected(option)
      setShowFeedback(true)
      const correct = option === currentQ.correctText
      if (correct) setScore((s) => s + 1)

      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          setGameState('finished')
        } else {
          setCurrentIndex((i) => i + 1)
          setSelected(null)
          setShowFeedback(false)
        }
      }, 1200)
    },
    [showFeedback, currentQ, currentIndex, questions.length],
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Back nav + board badge */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && !usingFallback && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="quote-detective"
        title="Quote Detective"
        description="Identify which GCSE set text each quote is from. 20 questions, 60 seconds each."
        difficulty="Crossover"
        score={score}
        maxScore={QUESTIONS_PER_ROUND}
        timeLimitSeconds={60 * QUESTIONS_PER_ROUND}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
      >
        {currentQ && (
          <div className="flex flex-col items-center gap-8">
            {/* Progress */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="h-1.5 w-48 rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="max-w-2xl rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 text-center">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                &ldquo;{currentQ.quote}&rdquo;
              </p>
            </blockquote>

            {/* Options */}
            <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {currentQ.options.map((option) => {
                const isCorrect = option === currentQ.correctText
                const isSelected = option === selected
                let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                if (showFeedback) {
                  if (isCorrect) style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  else if (isSelected) style = 'border-red-500/40 bg-red-500/10 text-red-400'
                  else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={showFeedback}
                    className={cn(
                      'rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200',
                      style,
                      !showFeedback && 'cursor-pointer active:translate-y-px',
                    )}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
