'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BookOpen,
  Trophy,
  ArrowRight,
} from 'lucide-react'
import DemoBanner from '@/components/demo/DemoBanner'
import { useT } from '@/lib/i18n/use-t'

// ── Types ──────────────────────────────────────────────────────────────────

interface Flashcard {
  term: string
  definition: string
}

type TopicKey =
  | 'literary-terms'
  | 'inspector-calls'
  | 'macbeth'
  | 'poetry-terms'
  | 'language-techniques'

interface Topic {
  id: TopicKey
  label: string
  icon: string
  cards: Flashcard[]
}

// ── Data ───────────────────────────────────────────────────────────────────

const TOPICS: Topic[] = [
  {
    id: 'literary-terms',
    label: 'Literary Terms',
    icon: 'A',
    cards: [
      {
        term: 'Allegory',
        definition:
          'A narrative in which characters and events represent abstract ideas or moral qualities, conveying a deeper meaning beneath the surface story.',
      },
      {
        term: 'Dramatic Irony',
        definition:
          'When the audience knows something that the characters do not, creating tension or humour.',
      },
      {
        term: 'Pathetic Fallacy',
        definition:
          "Attributing human emotions to nature or weather, often to reflect a character's mood or foreshadow events.",
      },
      {
        term: 'Bildungsroman',
        definition:
          'A novel dealing with the moral and psychological growth of the main character from youth to adulthood.',
      },
      {
        term: 'Soliloquy',
        definition:
          'A speech in a play where a character speaks their thoughts aloud while alone on stage, revealing inner feelings to the audience.',
      },
      {
        term: 'Foreshadowing',
        definition:
          'A literary device in which the writer gives hints or clues about events that will happen later in the story.',
      },
      {
        term: 'Motif',
        definition:
          'A recurring element -- image, idea, or symbol -- that develops or informs the major themes of a work.',
      },
      {
        term: 'Denouement',
        definition:
          'The final outcome or resolution of the plot, after the climax, where loose ends are tied up.',
      },
      {
        term: 'Antithesis',
        definition:
          'The juxtaposition of contrasting ideas in balanced phrases or clauses, used to highlight differences.',
      },
      {
        term: 'Catharsis',
        definition:
          'The release of strong emotions (pity, fear) experienced by the audience at the end of a tragedy, leading to emotional renewal.',
      },
    ],
  },
  {
    id: 'inspector-calls',
    label: 'Inspector Calls',
    icon: 'I',
    cards: [
      {
        term: 'Mr Birling',
        definition:
          'A wealthy industrialist who represents capitalist self-interest. Priestley uses him to critique the failures of individualism and social irresponsibility.',
      },
      {
        term: 'Sheila Birling',
        definition:
          "The younger generation who learns from the Inspector's visit. She represents hope for social change and accepts responsibility for her actions.",
      },
      {
        term: 'Inspector Goole',
        definition:
          "The mysterious figure who acts as Priestley's mouthpiece, delivering the socialist message of collective responsibility.",
      },
      {
        term: 'Eva Smith',
        definition:
          'The unseen victim who represents the working class. Her death connects all the Birlings, showing how the upper class exploits the vulnerable.',
      },
      {
        term: 'Dramatic Irony in AIC',
        definition:
          "Birling's confident predictions about the Titanic and no war ahead are known to be wrong by the 1945 audience, undermining his authority.",
      },
      {
        term: 'The 1912 Setting',
        definition:
          'Set before WWI in a period of rigid class hierarchy and capitalist confidence. The Edwardian era represents the old world Priestley wants to challenge.',
      },
      {
        term: 'Collective Responsibility',
        definition:
          "Priestley's central message: we are all responsible for each other. The Inspector's final speech -- 'We are members of one body' -- embodies this.",
      },
      {
        term: 'The Younger vs Older Generation',
        definition:
          'Sheila and Eric accept responsibility and change; Mr and Mrs Birling refuse. Priestley suggests hope lies with the young.',
      },
      {
        term: 'Gerald Croft',
        definition:
          'Represents the aristocratic class. His affair with Daisy Renton shows how the upper class uses the working class for personal gratification.',
      },
      {
        term: 'The Final Phone Call',
        definition:
          "The play's cyclical ending -- a real inspector is coming -- suggests that those who refuse to learn will be forced to face consequences.",
      },
    ],
  },
  {
    id: 'macbeth',
    label: 'Macbeth',
    icon: 'M',
    cards: [
      {
        term: 'Hamartia',
        definition:
          "Macbeth's fatal flaw -- his 'vaulting ambition' -- which leads to his downfall, following the conventions of a tragic hero.",
      },
      {
        term: 'The Witches',
        definition:
          'Supernatural agents who plant the seed of ambition. They represent fate, temptation, and the disruption of natural order.',
      },
      {
        term: 'Lady Macbeth',
        definition:
          "Macbeth's wife who drives him to murder Duncan. She subverts gender expectations by calling on spirits to 'unsex' her.",
      },
      {
        term: 'Regicide',
        definition:
          'The murder of a king. In Jacobean England, this was considered a crime against God and the natural order (Divine Right of Kings).',
      },
      {
        term: 'The Great Chain of Being',
        definition:
          "The Elizabethan/Jacobean belief that God ordained a hierarchy: God > King > Man > Woman > Animal. Macbeth's regicide disrupts this order.",
      },
      {
        term: 'Blood Motif',
        definition:
          'Blood recurs throughout the play as a symbol of guilt, violence, and the consequences of unchecked ambition.',
      },
      {
        term: 'Equivocation',
        definition:
          "The witches speak in half-truths and double meanings. This reflects the Gunpowder Plot (1605) and James I's fear of deception.",
      },
      {
        term: "Banquo's Ghost",
        definition:
          "The apparition at the banquet represents Macbeth's guilt and paranoia. Only Macbeth can see it, showing his psychological deterioration.",
      },
      {
        term: 'Kingship',
        definition:
          "Shakespeare contrasts Macbeth's tyrannical rule with Duncan's benevolent kingship and Edward's healing powers to define what makes a good king.",
      },
      {
        term: 'Sleep Motif',
        definition:
          "Macbeth 'murders sleep' after killing Duncan. Insomnia symbolises guilt and moral corruption; Lady Macbeth's sleepwalking shows her breakdown.",
      },
    ],
  },
  {
    id: 'poetry-terms',
    label: 'Poetry Terms',
    icon: 'P',
    cards: [
      {
        term: 'Enjambment',
        definition:
          'The continuation of a sentence beyond the end of a line or stanza, creating pace and a sense of urgency or overflow of emotion.',
      },
      {
        term: 'Caesura',
        definition:
          'A pause in the middle of a line of poetry, often created by punctuation. Used to create emphasis, reflection, or a shift in tone.',
      },
      {
        term: 'Volta',
        definition:
          "The 'turn' in a poem where the argument or mood shifts, typically found in sonnets between the octave and sestet.",
      },
      {
        term: 'Stanza',
        definition:
          'A grouped set of lines within a poem, often sharing a common rhyme scheme or metre, functioning like a paragraph in prose.',
      },
      {
        term: 'Iambic Pentameter',
        definition:
          'A metrical pattern of five pairs of unstressed/stressed syllables per line (da-DUM x 5). Associated with natural speech rhythms.',
      },
      {
        term: 'Free Verse',
        definition:
          'Poetry that does not follow a regular metre or rhyme scheme, allowing the poet greater freedom in rhythm and structure.',
      },
      {
        term: 'Sibilance',
        definition:
          "The repetition of 's' and 'sh' sounds, often creating a sinister, soft, or soothing effect depending on context.",
      },
      {
        term: 'Anaphora',
        definition:
          'The repetition of a word or phrase at the beginning of successive lines or clauses, used for emphasis or rhetorical effect.',
      },
      {
        term: 'Persona',
        definition:
          'The voice or character adopted by the poet in a poem. The speaker is not always the poet themselves.',
      },
      {
        term: 'Juxtaposition',
        definition:
          'Placing two contrasting ideas, images, or words close together to highlight differences and create meaning through contrast.',
      },
    ],
  },
  {
    id: 'language-techniques',
    label: 'Language Techniques',
    icon: 'L',
    cards: [
      {
        term: 'Metaphor',
        definition:
          "A figure of speech that directly compares two unlike things without using 'like' or 'as', stating one thing IS another.",
      },
      {
        term: 'Simile',
        definition:
          "A comparison using 'like' or 'as' to show similarity between two different things, making descriptions more vivid.",
      },
      {
        term: 'Personification',
        definition:
          'Giving human qualities to non-human things (objects, animals, abstract ideas) to create vivid imagery or emotional connection.',
      },
      {
        term: 'Onomatopoeia',
        definition:
          'Words that imitate the sound they describe (crash, buzz, whisper), creating sensory impact and bringing writing to life.',
      },
      {
        term: 'Hyperbole',
        definition:
          'Deliberate exaggeration for emphasis or dramatic effect. Not meant literally -- used to intensify emotions or make a point.',
      },
      {
        term: 'Oxymoron',
        definition:
          "Two contradictory words placed together (e.g., 'bitter sweet', 'living death') to reveal complexity or paradox.",
      },
      {
        term: 'Alliteration',
        definition:
          'The repetition of the same consonant sound at the beginning of nearby words, used to create rhythm, emphasis, or mood.',
      },
      {
        term: 'Assonance',
        definition:
          "The repetition of vowel sounds within nearby words (e.g., 'deep green sea'), creating internal rhyme and musicality.",
      },
      {
        term: 'Emotive Language',
        definition:
          'Word choices designed to provoke an emotional response from the reader, often used in persuasive or descriptive writing.',
      },
      {
        term: 'Semantic Field',
        definition:
          "A group of words related to a particular theme or subject (e.g., 'battle', 'army', 'defeat' form a semantic field of war).",
      },
    ],
  },
]

// ── Component ──────────────────────────────────────────────────────────────

export default function StudentFlashcardsDemoPage() {
  const t = useT()
  const [selectedTopic, setSelectedTopic] = useState<TopicKey>('literary-terms')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [scores, setScores] = useState<Record<number, 'know' | 'dont-know'>>({})
  const [finished, setFinished] = useState(false)

  const topic = TOPICS.find((t) => t.id === selectedTopic)!
  const cards = topic.cards
  const card = cards[currentIndex]

  const knownCount = Object.values(scores).filter((v) => v === 'know').length
  const dontKnowCount = Object.values(scores).filter((v) => v === 'dont-know').length

  function handleSelectTopic(topicId: TopicKey) {
    setSelectedTopic(topicId)
    setCurrentIndex(0)
    setFlipped(false)
    setScores({})
    setFinished(false)
  }

  function handleFlip() {
    setFlipped((f) => !f)
  }

  function handleNext() {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
      setFlipped(false)
    } else {
      setFinished(true)
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
      setFlipped(false)
    }
  }

  function handleShuffle() {
    setCurrentIndex(0)
    setFlipped(false)
    setScores({})
    setFinished(false)
    // We shuffle by just picking a random start index since we keep the array static
    setCurrentIndex(Math.floor(Math.random() * cards.length))
  }

  function handleMarkKnow() {
    setScores((prev) => ({ ...prev, [currentIndex]: 'know' }))
    handleNext()
  }

  function handleMarkDontKnow() {
    setScores((prev) => ({ ...prev, [currentIndex]: 'dont-know' }))
    handleNext()
  }

  function handleRestart() {
    setCurrentIndex(0)
    setFlipped(false)
    setScores({})
    setFinished(false)
  }

  // ── End screen ────────────────────────────────────────────────────────────

  if (finished) {
    const total = cards.length
    const known = Object.values(scores).filter((v) => v === 'know').length
    const percentage = Math.round((known / total) * 100)

    return (
      <div className="min-h-screen bg-cream-50 text-ink-900">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <DemoBanner message={t('demo_student.flashcards.banner')} />

          <div className="mt-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/15 mx-auto mb-6">
              <Trophy className="h-8 w-8 text-clay-600" />
            </div>

            <h2 className="text-2xl font-light text-ink-900 mb-2">
              {t('demo_student.flashcards.end.session_complete')}
            </h2>
            <p className="text-ink-500 text-sm mb-8">{topic.label}</p>

            {/* Score */}
            <div className="rounded-xl border border-ink-200 bg-white p-8 mb-6">
              <p className="text-5xl font-light text-clay-600 mb-2">
                {known}/{total}
              </p>
              <p className="text-ink-500 text-sm">
                {t('demo_student.flashcards.end.you_knew_pre')} {known}{' '}
                {t('demo_student.flashcards.end.out_of')} {total}{' '}
                {t('demo_student.flashcards.end.cards_suffix')} ({percentage}%)
              </p>

              {/* Progress bar */}
              <div className="mt-6 h-2 rounded-full bg-cream-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-ink-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                  {known} {t('demo_student.flashcards.end.known_label')}
                </span>
                <span className="flex items-center gap-1.5">
                  <XCircle className="h-3.5 w-3.5 text-red-400" />
                  {total - known} {t('demo_student.flashcards.end.to_review_label')}
                </span>
              </div>
            </div>

            {known < total ? (
              <p className="text-sm text-ink-500 mb-6">
                {t('demo_student.flashcards.end.keep_practicing')}
              </p>
            ) : (
              <p className="text-sm text-green-400/70 mb-6">
                {t('demo_student.flashcards.end.perfect')}
              </p>
            )}

            {/* Actions */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 rounded-lg border border-ink-200 bg-cream-100 px-5 py-2.5 text-sm text-ink-600 hover:bg-cream-100 hover:text-ink-900 transition-all"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {t('demo_student.flashcards.end.try_again')}
              </button>
              <button
                onClick={() => handleSelectTopic(selectedTopic)}
                className="flex items-center gap-2 rounded-lg border border-ink-200 bg-cream-100 px-5 py-2.5 text-sm text-ink-600 hover:bg-cream-100 hover:text-ink-900 transition-all"
              >
                <Shuffle className="h-3.5 w-3.5" />
                {t('demo_student.flashcards.end.shuffle_retry')}
              </button>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
              <p className="text-sm text-clay-600/80 mb-3">
                {t('demo_student.flashcards.cta.body')}
              </p>
              <Link
                href="/for-schools/register"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
              >
                {t('demo_student.flashcards.cta.btn')}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Main flashcard view ───────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <DemoBanner message="Flashcard demo -- progress is not saved." />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-light tracking-tight text-ink-900">Flashcard Practice</h1>
          <p className="text-ink-500 text-sm mt-1">
            Click a card to reveal the definition, then mark what you know
          </p>
        </div>

        {/* Topic selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelectTopic(t.id)}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all ${
                selectedTopic === t.id
                  ? 'border-amber-500/30 bg-amber-500/10 text-clay-600'
                  : 'border-ink-200 bg-white text-ink-500 hover:border-ink-200 hover:text-ink-600'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold bg-cream-100">
                {t.icon}
              </span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-ink-500">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <div className="flex items-center gap-4 text-xs text-ink-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
              {knownCount}
            </span>
            <span className="flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5 text-red-400" />
              {dontKnowCount}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full bg-cream-100 mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-amber-500/40 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>

        {/* Flashcard */}
        <div
          onClick={handleFlip}
          className="relative cursor-pointer select-none mb-6"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleFlip()
          }}
        >
          <div
            className={`rounded-2xl border p-8 min-h-[240px] flex flex-col items-center justify-center text-center transition-all duration-300 ${
              flipped
                ? 'border-amber-500/20 bg-amber-500/[0.03]'
                : 'border-ink-200 bg-white hover:border-ink-200'
            }`}
          >
            {!flipped ? (
              <>
                <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-4">
                  Term
                </span>
                <h2 className="text-2xl font-light text-ink-900 mb-4">{card.term}</h2>
                <span className="text-xs text-ink-500">Click to reveal definition</span>
              </>
            ) : (
              <>
                <span className="text-[10px] uppercase tracking-widest text-clay-600/40 mb-4">
                  Definition
                </span>
                <p className="text-base text-ink-600 leading-relaxed max-w-lg">{card.definition}</p>
                <span className="text-[10px] text-clay-600/30 mt-4">{card.term}</span>
              </>
            )}
          </div>
        </div>

        {/* Navigation & scoring */}
        <div className="flex items-center justify-between">
          {/* Nav buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-500 hover:bg-cream-100 hover:text-ink-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-500 hover:bg-cream-100 hover:text-ink-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleShuffle}
              className="flex h-10 items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 text-ink-500 hover:bg-cream-100 hover:text-ink-600 transition-all text-xs"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Shuffle
            </button>
          </div>

          {/* Know / Don't Know */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkDontKnow}
              className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-all"
            >
              <XCircle className="h-4 w-4" />
              Don't Know
            </button>
            <button
              onClick={handleMarkKnow}
              className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-2.5 text-sm text-green-400 hover:bg-green-500/10 transition-all"
            >
              <CheckCircle2 className="h-4 w-4" />
              Know
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
          <p className="text-sm text-clay-600/80 mb-3">
            Access 2,000+ flashcards across all topics and exam boards.
          </p>
          <Link
            href="/for-schools/register"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
          >
            Start free trial
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
