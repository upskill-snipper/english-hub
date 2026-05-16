'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface SynonymItem {
  /** Sentence with the weak word marked by ⟨…⟩ */
  sentence: string
  /** The tired/overused word to replace */
  weakWord: string
  /** Four options — exactly one is the best precise upgrade for this context */
  options: [string, string, string, string]
  /** The correct, most precise ambitious synonym */
  answer: string
  /** Why this word fits and the others don't quite */
  nuanceNote: string
}

const SYNONYM_BANK: SynonymItem[] = [
  // ── said ───────────────────────────────────────────────────────────────
  {
    sentence: 'Careful not to wake the baby, she ⟨said⟩ the secret into his ear.',
    weakWord: 'said',
    options: ['whispered', 'declared', 'shouted', 'announced'],
    answer: 'whispered',
    nuanceNote:
      '"Whispered" captures the quiet, careful tone — "declared" and "announced" are loud and public.',
  },
  {
    sentence: 'Standing before the court, the lawyer ⟨said⟩ that her client was innocent.',
    weakWord: 'said',
    options: ['mumbled', 'declared', 'whispered', 'muttered'],
    answer: 'declared',
    nuanceNote:
      '"Declared" suits a firm, formal public statement; "mumbled" and "muttered" sound unsure.',
  },
  {
    sentence: '"It is not fair!" the child ⟨said⟩ angrily, stamping a foot.',
    weakWord: 'said',
    options: ['protested', 'suggested', 'replied', 'observed'],
    answer: 'protested',
    nuanceNote: '"Protested" conveys angry complaint; "suggested" and "observed" are far too calm.',
  },
  {
    sentence: 'Unsure of the answer, he ⟨said⟩ something under his breath.',
    weakWord: 'said',
    options: ['proclaimed', 'muttered', 'bellowed', 'announced'],
    answer: 'muttered',
    nuanceNote:
      '"Muttered" means to speak low and unclearly — fitting hesitation; the others are loud.',
  },
  {
    sentence: 'She ⟨said⟩ that the holiday had been the best week of her life.',
    weakWord: 'said',
    options: ['enthused', 'grumbled', 'snapped', 'objected'],
    answer: 'enthused',
    nuanceNote: '"Enthused" matches the joyful praise; the others all carry negative feeling.',
  },
  {
    sentence: '"You will regret this," the villain ⟨said⟩ with a cold smile.',
    weakWord: 'said',
    options: ['giggled', 'sneered', 'chirped', 'sighed'],
    answer: 'sneered',
    nuanceNote: '"Sneered" carries scornful menace; "giggled" and "chirped" sound cheerful.',
  },
  // ── good ───────────────────────────────────────────────────────────────
  {
    sentence: 'The judges agreed it was a ⟨good⟩ performance that left the audience speechless.',
    weakWord: 'good',
    options: ['adequate', 'remarkable', 'acceptable', 'fine'],
    answer: 'remarkable',
    nuanceNote:
      '"Remarkable" matches an audience left speechless; "adequate" only means just good enough.',
  },
  {
    sentence: 'He gave a ⟨good⟩ argument, supported by clear and convincing evidence.',
    weakWord: 'good',
    options: ['compelling', 'pleasant', 'tasty', 'kind'],
    answer: 'compelling',
    nuanceNote:
      '"Compelling" means convincing and forceful; "pleasant" and "kind" describe manner, not logic.',
  },
  {
    sentence: 'The soup was so ⟨good⟩ that everyone asked for the recipe.',
    weakWord: 'good',
    options: ['delicious', 'virtuous', 'skilful', 'generous'],
    answer: 'delicious',
    nuanceNote:
      '"Delicious" is the precise word for taste; the others describe character or skill.',
  },
  {
    sentence: 'She is a ⟨good⟩ person who volunteers every weekend without being asked.',
    weakWord: 'good',
    options: ['tasty', 'virtuous', 'fluent', 'rapid'],
    answer: 'virtuous',
    nuanceNote:
      '"Virtuous" describes strong moral character; the others do not describe a person’s goodness.',
  },
  {
    sentence: 'After months of practice, she became a ⟨good⟩ violinist.',
    weakWord: 'good',
    options: ['accomplished', 'delicious', 'honest', 'spacious'],
    answer: 'accomplished',
    nuanceNote:
      '"Accomplished" means highly skilled through practice; the others do not describe ability.',
  },
  // ── big ────────────────────────────────────────────────────────────────
  {
    sentence: 'They explored the ⟨big⟩ cathedral, craning their necks at its towering ceiling.',
    weakWord: 'big',
    options: ['cramped', 'vast', 'plump', 'mild'],
    answer: 'vast',
    nuanceNote:
      '"Vast" suggests huge open space, fitting a towering cathedral; "plump" describes shape.',
  },
  {
    sentence: 'Losing the championship was a ⟨big⟩ disappointment for the whole team.',
    weakWord: 'big',
    options: ['spacious', 'crushing', 'roomy', 'bulky'],
    answer: 'crushing',
    nuanceNote:
      '"Crushing" conveys emotional weight; "spacious" and "roomy" only describe physical size.',
  },
  {
    sentence: 'The decision to move abroad was a ⟨big⟩ one that changed everything.',
    weakWord: 'big',
    options: ['monumental', 'wide', 'tall', 'fat'],
    answer: 'monumental',
    nuanceNote:
      '"Monumental" captures life-changing importance; the others describe physical dimensions.',
  },
  {
    sentence: 'A ⟨big⟩ wave rose above the boat and crashed onto the deck.',
    weakWord: 'big',
    options: ['plump', 'towering', 'broad', 'chubby'],
    answer: 'towering',
    nuanceNote:
      '"Towering" suggests great, threatening height; "plump" and "chubby" describe roundness.',
  },
  {
    sentence: 'The factory was a ⟨big⟩ building that stretched the length of the street.',
    weakWord: 'big',
    options: ['enormous', 'crushing', 'serious', 'weighty'],
    answer: 'enormous',
    nuanceNote:
      '"Enormous" precisely describes great physical size; "crushing" describes impact, not size.',
  },
  // ── nice ───────────────────────────────────────────────────────────────
  {
    sentence: 'The hotel staff were so ⟨nice⟩ that guests felt welcome the moment they arrived.',
    weakWord: 'nice',
    options: ['hospitable', 'wealthy', 'punctual', 'silent'],
    answer: 'hospitable',
    nuanceNote:
      '"Hospitable" precisely means warmly welcoming to guests; the others miss that meaning.',
  },
  {
    sentence: 'It was a ⟨nice⟩ summer afternoon, warm with a gentle breeze.',
    weakWord: 'nice',
    options: ['generous', 'pleasant', 'honest', 'brave'],
    answer: 'pleasant',
    nuanceNote:
      '"Pleasant" suits agreeable weather; "generous" and "honest" describe character, not days.',
  },
  {
    sentence: 'That was a very ⟨nice⟩ thing to do — you helped without expecting thanks.',
    weakWord: 'nice',
    options: ['kind', 'mild', 'tidy', 'rapid'],
    answer: 'kind',
    nuanceNote: '"Kind" names the caring, selfless quality of the action; the others do not.',
  },
  {
    sentence: 'She wore a ⟨nice⟩ dress that turned heads as she entered the hall.',
    weakWord: 'nice',
    options: ['elegant', 'honest', 'punctual', 'humble'],
    answer: 'elegant',
    nuanceNote: '"Elegant" describes stylish, graceful appearance; the others describe behaviour.',
  },
  {
    sentence: 'Their new neighbour seemed ⟨nice⟩, always smiling and ready to chat.',
    weakWord: 'nice',
    options: ['vast', 'friendly', 'ancient', 'fluent'],
    answer: 'friendly',
    nuanceNote: '"Friendly" precisely describes a warm, sociable person; the others are unrelated.',
  },
  // ── bad ────────────────────────────────────────────────────────────────
  {
    sentence: 'The milk had a ⟨bad⟩ smell, so she poured it down the sink.',
    weakWord: 'bad',
    options: ['rude', 'rancid', 'wicked', 'severe'],
    answer: 'rancid',
    nuanceNote:
      '"Rancid" precisely describes spoiled food or smell; "wicked" describes evil behaviour.',
  },
  {
    sentence: 'Stealing from the elderly is a truly ⟨bad⟩ act.',
    weakWord: 'bad',
    options: ['wicked', 'rancid', 'faint', 'bland'],
    answer: 'wicked',
    nuanceNote: '"Wicked" names deep moral evil; "rancid" and "bland" only describe food.',
  },
  {
    sentence: 'He made a ⟨bad⟩ mistake that cost the company thousands of pounds.',
    weakWord: 'bad',
    options: ['costly', 'tasty', 'gentle', 'quiet'],
    answer: 'costly',
    nuanceNote:
      '"Costly" captures the serious, expensive consequence; the others do not fit a mistake.',
  },
  {
    sentence: 'The weather was so ⟨bad⟩ that the match had to be cancelled.',
    weakWord: 'bad',
    options: ['atrocious', 'wicked', 'rude', 'dull'],
    answer: 'atrocious',
    nuanceNote:
      '"Atrocious" strongly describes terrible weather; "wicked" implies moral evil instead.',
  },
  {
    sentence: 'His ⟨bad⟩ behaviour towards the waiter embarrassed everyone at the table.',
    weakWord: 'bad',
    options: ['rude', 'rancid', 'stale', 'damp'],
    answer: 'rude',
    nuanceNote: '"Rude" precisely names disrespectful conduct; the others describe spoiled things.',
  },
  // ── happy ──────────────────────────────────────────────────────────────
  {
    sentence: 'When she heard she had won, she was ⟨happy⟩ beyond words and burst into tears.',
    weakWord: 'happy',
    options: ['content', 'overjoyed', 'pleased', 'calm'],
    answer: 'overjoyed',
    nuanceNote:
      '"Overjoyed" matches overwhelming, tearful joy; "content" and "calm" are far too mild.',
  },
  {
    sentence: 'After a long day, he sat by the fire feeling quietly ⟨happy⟩.',
    weakWord: 'happy',
    options: ['ecstatic', 'content', 'thrilled', 'frantic'],
    answer: 'content',
    nuanceNote:
      '"Content" suits calm, quiet satisfaction; "ecstatic" and "thrilled" are too intense.',
  },
  {
    sentence: 'The children were ⟨happy⟩ and bouncing with energy on the trampoline.',
    weakWord: 'happy',
    options: ['gleeful', 'serene', 'tranquil', 'sombre'],
    answer: 'gleeful',
    nuanceNote: '"Gleeful" captures lively, bubbling delight; "serene" and "tranquil" mean calm.',
  },
  {
    sentence: 'She gave a ⟨happy⟩ sigh, finally relaxed now the exams were over.',
    weakWord: 'happy',
    options: ['relieved', 'frantic', 'anxious', 'furious'],
    answer: 'relieved',
    nuanceNote:
      '"Relieved" names the relaxed feeling after worry ends; the others are tense or angry.',
  },
  {
    sentence: 'He was ⟨happy⟩ to help and grateful to be asked at all.',
    weakWord: 'happy',
    options: ['delighted', 'reluctant', 'gloomy', 'bored'],
    answer: 'delighted',
    nuanceNote: '"Delighted" conveys eager pleasure to help; the others suggest unwillingness.',
  },
  // ── sad ────────────────────────────────────────────────────────────────
  {
    sentence: 'After the funeral she felt deeply ⟨sad⟩ and could not stop weeping.',
    weakWord: 'sad',
    options: ['grief-stricken', 'irritated', 'puzzled', 'restless'],
    answer: 'grief-stricken',
    nuanceNote:
      '"Grief-stricken" precisely names sorrow over a death; the others are unrelated feelings.',
  },
  {
    sentence: 'Staring out at the rain, he felt a vague, ⟨sad⟩ longing for home.',
    weakWord: 'sad',
    options: ['furious', 'wistful', 'cheerful', 'panicked'],
    answer: 'wistful',
    nuanceNote:
      '"Wistful" captures gentle, longing sadness; "furious" and "panicked" are too strong.',
  },
  {
    sentence: 'The film’s ending was so ⟨sad⟩ that the whole cinema fell silent.',
    weakWord: 'sad',
    options: ['heartbreaking', 'annoying', 'confusing', 'tiring'],
    answer: 'heartbreaking',
    nuanceNote: '"Heartbreaking" matches a powerfully moving ending; the others are far weaker.',
  },
  {
    sentence: 'He looked ⟨sad⟩ and downcast after missing the final goal.',
    weakWord: 'sad',
    options: ['dejected', 'thrilled', 'amused', 'curious'],
    answer: 'dejected',
    nuanceNote:
      '"Dejected" precisely describes low spirits after disappointment; the others are positive.',
  },
  {
    sentence: 'A ⟨sad⟩ grey light fell over the empty, abandoned town.',
    weakWord: 'sad',
    options: ['melancholy', 'furious', 'jolly', 'frantic'],
    answer: 'melancholy',
    nuanceNote:
      '"Melancholy" evokes a mournful, gloomy atmosphere; the others clash with the mood.',
  },
  // ── walk ───────────────────────────────────────────────────────────────
  {
    sentence: 'Exhausted, the hikers ⟨walked⟩ slowly up the last steep hill.',
    weakWord: 'walked',
    options: ['trudged', 'sprinted', 'skipped', 'darted'],
    answer: 'trudged',
    nuanceNote: '"Trudged" means to walk wearily with effort; "sprinted" and "darted" are fast.',
  },
  {
    sentence: 'The soldiers ⟨walked⟩ in perfect time across the parade ground.',
    weakWord: 'walked',
    options: ['marched', 'wandered', 'stumbled', 'crept'],
    answer: 'marched',
    nuanceNote:
      '"Marched" suits disciplined, rhythmic movement; "wandered" has no purpose or order.',
  },
  {
    sentence: 'Proud of her medal, she ⟨walked⟩ confidently onto the stage.',
    weakWord: 'walked',
    options: ['strode', 'limped', 'shuffled', 'staggered'],
    answer: 'strode',
    nuanceNote: '"Strode" conveys long, confident steps; "limped" and "shuffled" suggest weakness.',
  },
  {
    sentence: 'Not wanting to be seen, the thief ⟨walked⟩ quietly along the dark hallway.',
    weakWord: 'walked',
    options: ['crept', 'galloped', 'marched', 'bounded'],
    answer: 'crept',
    nuanceNote: '"Crept" means to move slowly and stealthily; the others are loud or fast.',
  },
  {
    sentence: 'With nowhere to be, they ⟨walked⟩ aimlessly through the old market.',
    weakWord: 'walked',
    options: ['wandered', 'sprinted', 'marched', 'lunged'],
    answer: 'wandered',
    nuanceNote:
      '"Wandered" suits slow movement with no fixed goal; the others imply speed or order.',
  },
  // ── look ───────────────────────────────────────────────────────────────
  {
    sentence: 'The detective ⟨looked⟩ closely at the muddy footprint for any clue.',
    weakWord: 'looked',
    options: ['examined', 'glanced', 'glimpsed', 'peeked'],
    answer: 'examined',
    nuanceNote:
      '"Examined" means to inspect carefully and closely; the others are brief and casual.',
  },
  {
    sentence: 'She only ⟨looked⟩ at the headline before rushing out of the door.',
    weakWord: 'looked',
    options: ['glanced', 'studied', 'examined', 'scrutinised'],
    answer: 'glanced',
    nuanceNote:
      '"Glanced" means a quick brief look — fitting a rush; the others mean careful study.',
  },
  {
    sentence: 'He ⟨looked⟩ angrily at the boy who had broken his window.',
    weakWord: 'looked',
    options: ['glared', 'peeked', 'skimmed', 'browsed'],
    answer: 'glared',
    nuanceNote: '"Glared" means to stare with anger; "peeked" and "browsed" carry no hostility.',
  },
  {
    sentence: 'The tourists ⟨looked⟩ in wonder at the snow-capped mountains.',
    weakWord: 'looked',
    options: ['gazed', 'glared', 'glanced', 'squinted'],
    answer: 'gazed',
    nuanceNote: '"Gazed" means a long look of wonder; "glared" is angry and "glanced" is brief.',
  },
  {
    sentence: 'Through the keyhole the child ⟨looked⟩ secretly at the party inside.',
    weakWord: 'looked',
    options: ['peered', 'announced', 'marched', 'shouted'],
    answer: 'peered',
    nuanceNote:
      '"Peered" means to look hard at something difficult to see; the others are not looking.',
  },
  // ── extra mixed (variety) ──────────────────────────────────────────────
  {
    sentence: 'The detective gave a ⟨small⟩ nod, barely moving his head.',
    weakWord: 'small',
    options: ['slight', 'enormous', 'generous', 'lengthy'],
    answer: 'slight',
    nuanceNote:
      '"Slight" precisely means very small in degree; the others suggest large or unrelated.',
  },
  {
    sentence: 'It was a ⟨small⟩ cottage, just big enough for one person.',
    weakWord: 'small',
    options: ['compact', 'vast', 'towering', 'broad'],
    answer: 'compact',
    nuanceNote: '"Compact" describes something neatly small in size; the others mean large.',
  },
  {
    sentence: 'After the storm the sea became ⟨calm⟩ and perfectly still.',
    weakWord: 'calm',
    options: ['serene', 'frantic', 'turbulent', 'stormy'],
    answer: 'serene',
    nuanceNote: '"Serene" captures peaceful stillness; the others all describe disturbance.',
  },
  {
    sentence: 'He stayed ⟨calm⟩ even as the alarm blared and people panicked.',
    weakWord: 'calm',
    options: ['composed', 'hysterical', 'restless', 'anxious'],
    answer: 'composed',
    nuanceNote:
      '"Composed" means calm and in control under pressure; the others mean the opposite.',
  },
  {
    sentence: 'The old man told a ⟨funny⟩ story that had everyone roaring with laughter.',
    weakWord: 'funny',
    options: ['hilarious', 'tragic', 'tedious', 'solemn'],
    answer: 'hilarious',
    nuanceNote: '"Hilarious" matches roaring laughter; "tragic" and "solemn" are serious.',
  },
  {
    sentence: 'There was something ⟨funny⟩ about the locked room that did not feel right.',
    weakWord: 'funny',
    options: ['strange', 'amusing', 'comical', 'witty'],
    answer: 'strange',
    nuanceNote: 'Here "funny" means odd, so "strange" fits; "amusing" and "witty" mean comical.',
  },
  {
    sentence: 'She felt ⟨scared⟩ as the floorboards creaked in the empty house.',
    weakWord: 'scared',
    options: ['uneasy', 'cheerful', 'curious', 'bored'],
    answer: 'uneasy',
    nuanceNote: '"Uneasy" suits a creeping, low-level fear; the others are not fearful at all.',
  },
  {
    sentence: 'When the lion roared, the visitors were ⟨scared⟩ and ran for the exit.',
    weakWord: 'scared',
    options: ['terrified', 'amused', 'relaxed', 'delighted'],
    answer: 'terrified',
    nuanceNote:
      '"Terrified" matches intense fear causing flight; the others are positive feelings.',
  },
  {
    sentence: 'The runner was ⟨tired⟩ and collapsed onto the grass at the finish line.',
    weakWord: 'tired',
    options: ['exhausted', 'refreshed', 'eager', 'lively'],
    answer: 'exhausted',
    nuanceNote:
      '"Exhausted" conveys extreme tiredness causing collapse; the others mean full of energy.',
  },
  {
    sentence: 'After a poor night’s sleep she felt a little ⟨tired⟩ but carried on.',
    weakWord: 'tired',
    options: ['weary', 'energetic', 'thrilled', 'alert'],
    answer: 'weary',
    nuanceNote: '"Weary" suits mild ongoing tiredness; the others describe being lively or alert.',
  },
  {
    sentence: 'The teacher gave a ⟨clear⟩ explanation that even beginners understood at once.',
    weakWord: 'clear',
    options: ['lucid', 'murky', 'vague', 'confusing'],
    answer: 'lucid',
    nuanceNote: '"Lucid" precisely means easy to understand; the others mean unclear.',
  },
  {
    sentence: 'Through the ⟨clear⟩ water you could see every pebble on the riverbed.',
    weakWord: 'clear',
    options: ['transparent', 'cloudy', 'obvious', 'logical'],
    answer: 'transparent',
    nuanceNote:
      '"Transparent" describes water you can see straight through; "obvious" describes ideas.',
  },
  {
    sentence: 'It was a ⟨cold⟩ winter morning and ice coated every window.',
    weakWord: 'cold',
    options: ['frosty', 'mild', 'warm', 'tepid'],
    answer: 'frosty',
    nuanceNote: '"Frosty" precisely matches ice-covered cold; the others mean only slightly warm.',
  },
  {
    sentence: 'Her ⟨cold⟩ reply made it clear the friendship was over.',
    weakWord: 'cold',
    options: ['icy', 'frosty', 'chilly', 'freezing'],
    answer: 'icy',
    nuanceNote:
      'For an unfriendly manner, "icy" is the precise figurative choice; the others mean low temperature.',
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

/** Render the sentence, highlighting the weak word marked by ⟨…⟩ */
function renderSentence(sentence: string) {
  const match = sentence.match(/⟨(.+?)⟩/)
  if (!match) return <span>{sentence}</span>
  const [full, word] = match
  const idx = sentence.indexOf(full)
  return (
    <span>
      {sentence.slice(0, idx)}
      <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 font-bold text-clay-600 line-through decoration-2">
        {word}
      </span>
      {sentence.slice(idx + full.length)}
    </span>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SynonymShufflePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<SynonymItem[]>([])
  const [idx, setIdx] = useState(0)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = items[idx] ?? null

  // Re-shuffle options whenever the question changes
  useEffect(() => {
    if (current) setShuffledOptions(shuffle(current.options))
  }, [idx, items])

  const handleStart = useCallback(() => {
    const round = shuffle(SYNONYM_BANK).slice(0, ROUND_SIZE)
    setItems(round)
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

  const handleSelect = useCallback(
    (option: string) => {
      if (!current || feedback) return
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      const correct = option === current.answer
      if (correct) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
    },
    [current, feedback],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setFeedback(null)
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
          gameId="synonym-shuffle"
          title="Synonym Shuffle"
          description="A tired word is hiding in each sentence. Pick the most precise, ambitious synonym for that context — because synonyms aren't always swappable."
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Upgrade the crossed-out word
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-foreground">
                  {renderSentence(current.sentence)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shuffledOptions.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-center gap-2 rounded-lg border px-4 py-3.5 text-base font-medium transition-all',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent active:translate-y-px',
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
                      {feedback && isAnswer && <CheckCircle className="size-4 shrink-0" />}
                      {feedback && isPicked && !isAnswer && <XCircle className="size-4 shrink-0" />}
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + nuance */}
              {feedback && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant — that&apos;s the sharpest
                        choice!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The best fit was{' '}
                        <span className="font-bold">{current.answer}</span>.
                      </>
                    )}
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-border bg-accent/50 px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="size-4 shrink-0 mt-0.5 text-clay-600" />
                    <p>{current.nuanceNote}</p>
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {idx + 1 >= items.length ? 'See Results' : 'Next Sentence'}
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
