'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import {
  Layers,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Trophy,
  Flame,
  Target,
  Brain,
  Star,
  BarChart3,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react'
import { flashcardDecks, type FlashcardDeck, type FlashCard } from '@/data/flashcard-data'
import { cn } from '@/lib/utils'
import {
  useFlashcardStore,
  selectTodayReviewed,
  selectTodayAccuracy,
  selectAccuracyRate,
} from '@/store/flashcard-store'
import { useBoard } from '@/hooks/useBoard'
import { deckMatchesBoard } from '@/lib/board/flashcard-deck-boards'
import { getBoardConfig } from '@/lib/board/board-store'
import {
  type Quality,
  QUALITY_BUTTONS,
  getStudyQueue,
  getNewCards,
  getDueCards,
  getMasteryPercentage,
  formatNextReview,
  formatInterval,
  previewIntervals,
  type CardReviewState,
} from '@/lib/spaced-repetition'
import {
  percentageToGCSEGrade,
  percentageToGCSEGradeLabel,
  gcseGradeColor,
  gcseGradeBg,
} from '@/lib/grades'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'

/* --- Constants ------------------------------------------------- */

const CATEGORY_ICONS: Record<string, typeof BookOpen> = {
  'Set Texts': BookOpen,
  Poetry: Sparkles,
  Techniques: Brain,
  Grammar: GraduationCap,
  Vocabulary: BookOpen,
  'Exam Technique': Target,
}
const CATEGORY_ORDER = [
  'Set Texts',
  'Poetry',
  'Techniques',
  'Vocabulary',
  'Grammar',
  'Exam Technique',
]
type StudyMode = 'browse' | 'study' | 'difficult'
function getDeckCategory(deck: FlashcardDeck): string {
  return deck.category || 'General'
}
const QUALITY_COLORS: Record<string, string> = {
  destructive: 'bg-red-500/15 text-red-400 hover:bg-red-500/25 border-red-500/30',
  warning: 'bg-amber-500/15 text-clay-600 hover:bg-amber-500/25 border-amber-500/30',
  success: 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border-emerald-500/30',
  easy: 'bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 border-blue-500/30',
}

/* --- Component ------------------------------------------------- */

export default function FlashcardsPage() {
  const t = useT()
  const store = useFlashcardStore()
  const todayReviewed = useFlashcardStore(selectTodayReviewed)
  const todayAccuracy = useFlashcardStore(selectTodayAccuracy)
  const overallAccuracy = useFlashcardStore(selectAccuracyRate)
  const { board, isHydrated: isBoardHydrated } = useBoard()
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null)
  const [studyMode, setStudyMode] = useState<StudyMode>('browse')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [studyQueue, setStudyQueue] = useState<FlashCard[]>([])
  useEffect(() => {
    setMounted(true)
  }, [])
  // Filter decks down to those relevant for the user's chosen board.
  // Until the board store has hydrated we keep the full list to avoid a flash
  // of "no decks" on first paint.
  const allDecks = useMemo(() => {
    if (!isBoardHydrated || !board) return flashcardDecks
    return flashcardDecks.filter((d) => deckMatchesBoard(d.id, board))
  }, [board, isBoardHydrated])
  const categories = useMemo(() => {
    const cats = new Map<string, FlashcardDeck[]>()
    for (const deck of allDecks) {
      const cat = getDeckCategory(deck)
      if (!cats.has(cat)) cats.set(cat, [])
      cats.get(cat)!.push(deck)
    }
    const sorted = new Map<string, FlashcardDeck[]>()
    for (const cat of CATEGORY_ORDER) {
      if (cats.has(cat)) sorted.set(cat, cats.get(cat)!)
    }
    for (const [cat, decks] of cats) {
      if (!sorted.has(cat)) sorted.set(cat, decks)
    }
    return sorted
  }, [allDecks])
  const filteredDecks = useMemo(
    () =>
      selectedCategory === 'all'
        ? allDecks
        : allDecks.filter((d) => getDeckCategory(d) === selectedCategory),
    [allDecks, selectedCategory],
  )
  const selectedDeck = useMemo(
    () => allDecks.find((d) => d.id === selectedDeckId) ?? null,
    [allDecks, selectedDeckId],
  )
  const getDeckStats = useCallback(
    (deck: FlashcardDeck) => {
      if (!mounted) return { mastery: 0, due: 0, newCount: 0, grade: 1, difficult: 0 }
      const mastery = getMasteryPercentage(deck.cards, store.reviewStates)
      const due = getDueCards(deck.cards, store.reviewStates).length
      const newCount = getNewCards(deck.cards, store.reviewStates, 999).length
      const grade = percentageToGCSEGrade(mastery)
      const difficult = deck.cards.filter((c) => {
        const s = store.reviewStates[c.id]
        return s && s.easinessFactor < 2.0
      }).length
      return { mastery, due, newCount, grade, difficult }
    },
    [mounted, store.reviewStates],
  )
  const overallStats = useMemo(() => {
    if (!mounted) return { totalCards: 0, mastered: 0, due: 0, mastery: 0, grade: 1 }
    const allCards = allDecks.flatMap((d) => d.cards)
    const mastery = getMasteryPercentage(allCards, store.reviewStates)
    const due = getDueCards(allCards, store.reviewStates).length
    const mastered = allCards.filter((c) => {
      const s = store.reviewStates[c.id]
      return s && s.interval >= 21
    }).length
    return {
      totalCards: allCards.length,
      mastered,
      due,
      mastery,
      grade: percentageToGCSEGrade(mastery),
    }
  }, [mounted, allDecks, store.reviewStates])
  const startStudy = useCallback(
    (deck: FlashcardDeck, mode: StudyMode) => {
      let queue: FlashCard[]
      if (mode === 'difficult') {
        queue = deck.cards.filter((c) => {
          const s = store.reviewStates[c.id]
          return s && s.easinessFactor < 2.0
        })
        if (queue.length === 0) queue = getDueCards(deck.cards, store.reviewStates)
      } else {
        queue = getStudyQueue(deck.cards, store.reviewStates, 10)
      }
      if (queue.length === 0) queue = deck.cards.slice(0, 10)
      setStudyQueue(queue)
      setCurrentCardIndex(0)
      setIsFlipped(false)
      setStudyMode(mode)
    },
    [store.reviewStates],
  )
  const handleRate = useCallback(
    (quality: Quality) => {
      const card = studyQueue[currentCardIndex]
      if (!card) return
      store.reviewCard(card.id, quality)
      if (currentCardIndex < studyQueue.length - 1) {
        setCurrentCardIndex((i) => i + 1)
        setIsFlipped(false)
      } else {
        setStudyMode('browse')
        setStudyQueue([])
        setCurrentCardIndex(0)
      }
    },
    [currentCardIndex, studyQueue, store],
  )
  const handleResetDeck = useCallback(
    (deck: FlashcardDeck) => {
      if (confirm('Reset all progress for this deck? This cannot be undone.'))
        store.resetDeck(deck.cards.map((c) => c.id))
    },
    [store],
  )

  if (!mounted || !store._hasHydrated)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )

  /* STUDY MODE */
  if (studyMode !== 'browse' && studyQueue.length > 0 && selectedDeck) {
    const currentCard = studyQueue[currentCardIndex]
    const reviewState = store.getReviewState(currentCard.id)
    const intervals = previewIntervals(reviewState ?? undefined)
    const progress = ((currentCardIndex + 1) / studyQueue.length) * 100
    return (
      <>
        <div className="mb-6">
          <button
            onClick={() => {
              setStudyMode('browse')
              setStudyQueue([])
            }}
            className="mb-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to decks
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{selectedDeck.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {studyMode === 'difficult' ? 'Difficult cards' : 'Study session'} -- Card{' '}
                {currentCardIndex + 1} of {studyQueue.length}
              </p>
            </div>
            {studyMode === 'difficult' && (
              <Badge variant="destructive">
                <Flame className="mr-1 h-3 w-3" />
                Difficult mode
              </Badge>
            )}
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <div
            className={cn(
              'relative min-h-[320px] overflow-hidden rounded-2xl border-2 shadow-lg transition-all duration-300',
              isFlipped
                ? 'border-primary/30 bg-card'
                : 'cursor-pointer border-border bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
            )}
            onClick={() => !isFlipped && setIsFlipped(true)}
            onKeyDown={(e) => {
              if (!isFlipped && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                setIsFlipped(true)
              }
            }}
            role={isFlipped ? undefined : 'button'}
            tabIndex={isFlipped ? undefined : 0}
            aria-label={isFlipped ? undefined : 'Reveal flashcard answer'}
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs text-muted-foreground">{formatNextReview(reviewState)}</span>
            </div>
            {!isFlipped ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xl font-semibold leading-relaxed text-foreground">
                  {currentCard.front}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">Click to reveal answer</p>
              </div>
            ) : (
              <div className="flex min-h-[320px] flex-col p-8">
                <p className="mb-4 text-sm font-semibold text-primary">{currentCard.front}</p>
                <div className="flex-1">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {currentCard.back}
                  </p>
                </div>
              </div>
            )}
          </div>
          {isFlipped && (
            <div className="mt-6">
              <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
                How well did you know this?
              </p>
              <div className="grid grid-cols-4 gap-3">
                {QUALITY_BUTTONS.map((btn) => (
                  <button
                    key={btn.quality}
                    onClick={() => handleRate(btn.quality)}
                    className={cn(
                      'flex flex-col items-center gap-1 rounded-xl border px-3 py-3 text-sm font-semibold transition-all',
                      QUALITY_COLORS[btn.color],
                    )}
                  >
                    <span>{btn.label}</span>
                    <span className="text-[10px] font-normal opacity-70">
                      {formatInterval(intervals[btn.quality])}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (currentCardIndex > 0) {
                  setCurrentCardIndex((i) => i - 1)
                  setIsFlipped(false)
                }
              }}
              disabled={currentCardIndex === 0}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentCardIndex + 1} / {studyQueue.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (currentCardIndex < studyQueue.length - 1) {
                  setCurrentCardIndex((i) => i + 1)
                  setIsFlipped(false)
                }
              }}
              disabled={currentCardIndex >= studyQueue.length - 1}
            >
              Skip
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </>
    )
  }

  /* BROWSE MODE */
  const boardConfig = getBoardConfig(board)
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('resources.study_tools.flashcards.title')}
        </h1>
        {isBoardHydrated && boardConfig && (
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t('resources.study_tools.board_prefix')} {boardConfig.shortName}
            </span>
          </div>
        )}
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {t('resources.study_tools.flashcards.subtitle')}
        </p>
      </div>
      {/* Stats dashboard */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className={cn('rounded-lg p-2', gcseGradeBg(overallStats.grade))}>
              <GraduationCap className={cn('h-5 w-5', gcseGradeColor(overallStats.grade))} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Overall grade</p>
              <p className={cn('text-lg font-bold', gcseGradeColor(overallStats.grade))}>
                {percentageToGCSEGradeLabel(overallStats.mastery)}
              </p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700"
              style={{ width: `${overallStats.mastery}%` }}
            />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {overallStats.mastered} of {overallStats.totalCards} cards mastered (
            {overallStats.mastery}%)
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-500/10 p-2">
              <Clock className="h-5 w-5 text-clay-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Due for review</p>
              <p className="text-lg font-bold text-foreground">{overallStats.due}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Cards that need reviewing today</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2">
              <BarChart3 className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Reviewed today</p>
              <p className="text-lg font-bold text-foreground">{todayReviewed}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {todayAccuracy > 0
              ? `${todayAccuracy}% accuracy today`
              : 'Start studying to track accuracy'}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-500/10 p-2">
              <Flame className="h-5 w-5 text-clay-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Study streak</p>
              <p className="text-lg font-bold text-foreground">
                {store.streak} day{store.streak !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {overallAccuracy > 0 ? `${overallAccuracy}% lifetime accuracy` : 'Keep studying daily'}
          </p>
        </div>
      </div>
      {/* Category filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => {
            setSelectedCategory('all')
            setSelectedDeckId(null)
          }}
          className={cn(
            'rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
            selectedCategory === 'all'
              ? 'bg-primary text-white'
              : 'bg-card text-muted-foreground hover:bg-muted border border-border',
          )}
        >
          All decks ({allDecks.length})
        </button>
        {Array.from(categories.entries()).map(([cat, decks]) => {
          const Icon = CATEGORY_ICONS[cat] || BookOpen
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setSelectedDeckId(null)
              }}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border',
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {cat} ({decks.length})
            </button>
          )
        })}
      </div>
      {selectedDeck ? (
        <DeckDetail
          deck={selectedDeck}
          stats={getDeckStats(selectedDeck)}
          reviewStates={store.reviewStates}
          onBack={() => setSelectedDeckId(null)}
          onStudy={(mode) => startStudy(selectedDeck, mode)}
          onReset={() => handleResetDeck(selectedDeck)}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDecks.map((deck) => {
            const stats = getDeckStats(deck)
            const Icon = CATEGORY_ICONS[getDeckCategory(deck)] || BookOpen
            return (
              <button
                key={deck.id}
                onClick={() => setSelectedDeckId(deck.id)}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="h-1 w-full bg-muted">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-500"
                    style={{ width: `${stats.mastery}%` }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <Icon className="h-3 w-3" />
                      {getDeckCategory(deck)}
                    </Badge>
                    <span className={cn('text-xs font-bold', gcseGradeColor(stats.grade))}>
                      {percentageToGCSEGradeLabel(stats.mastery)}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-snug">{deck.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {deck.description}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      {deck.cards.length} cards
                    </span>
                    {stats.due > 0 && (
                      <span className="flex items-center gap-1 text-clay-600">
                        <Clock className="h-3 w-3" />
                        {stats.due} due
                      </span>
                    )}
                    {stats.difficult > 0 && (
                      <span className="flex items-center gap-1 text-red-400">
                        <Flame className="h-3 w-3" />
                        {stats.difficult} hard
                      </span>
                    )}
                    {stats.mastery === 100 && (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Trophy className="h-3 w-3" />
                        Complete
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.04] p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-lg font-bold text-foreground">Looking for more revision tools?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Visit the full revision hub for poetry analysis, set text guides, exam technique, and
              more.
            </p>
          </div>
          <Button variant="outline" size="sm" render={<Link href="/revision/flashcards" />}>
            Revision flashcards
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-bold text-foreground">How spaced repetition works</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Cards adapt to you.</strong> Rate each card after revealing the answer. Cards
              you find hard will appear more often.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Study daily for best results.</strong> Short, regular sessions beat marathon
              cramming. Aim for 10-20 cards per day.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Mastery takes time.</strong> A card is &quot;mastered&quot; after you recall
              it correctly over 3+ weeks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Use Difficult mode</strong> to focus on cards you struggle with. These have
              the lowest easiness factor.
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}

/* --- DeckDetail sub-component ---------------------------------- */

function DeckDetail({
  deck,
  stats,
  reviewStates,
  onBack,
  onStudy,
  onReset,
}: {
  deck: FlashcardDeck
  stats: { mastery: number; due: number; newCount: number; grade: number; difficult: number }
  reviewStates: Record<string, CardReviewState>
  onBack: () => void
  onStudy: (mode: StudyMode) => void
  onReset: () => void
}) {
  const [showAllCards, setShowAllCards] = useState(false)
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to all decks
      </button>
      <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Badge variant="secondary" className="mb-2">
              {getDeckCategory(deck)}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground">{deck.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{deck.description}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={cn('text-2xl font-bold', gcseGradeColor(stats.grade))}>
              {percentageToGCSEGradeLabel(stats.mastery)}
            </span>
            <span className="text-xs text-muted-foreground">{stats.mastery}% mastered</span>
          </div>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700"
            style={{ width: `${stats.mastery}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Layers className="h-4 w-4" />
            {deck.cards.length} total cards
          </span>
          <span className="flex items-center gap-1.5 text-clay-600">
            <Clock className="h-4 w-4" />
            {stats.due} due
          </span>
          <span className="flex items-center gap-1.5 text-blue-400">
            <Star className="h-4 w-4" />
            {stats.newCount} new
          </span>
          {stats.difficult > 0 && (
            <span className="flex items-center gap-1.5 text-red-400">
              <Flame className="h-4 w-4" />
              {stats.difficult} difficult
            </span>
          )}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button onClick={() => onStudy('study')}>
            <BookOpen className="mr-1.5 h-4 w-4" />
            Study ({stats.due > 0 ? `${stats.due} due` : `${Math.min(10, stats.newCount)} new`})
          </Button>
          {stats.difficult > 0 && (
            <Button variant="outline" onClick={() => onStudy('difficult')}>
              <Flame className="mr-1.5 h-4 w-4" />
              Difficult cards ({stats.difficult})
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={onReset}>
            <RotateCcw className="mr-1.5 h-4 w-4" />
            Reset progress
          </Button>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h3 className="text-sm font-bold text-foreground">All cards</h3>
          <button
            onClick={() => setShowAllCards(!showAllCards)}
            className="text-xs font-medium text-primary hover:underline"
          >
            {showAllCards ? 'Collapse' : 'Expand all'}
          </button>
        </div>
        <div className="divide-y divide-border">
          {deck.cards.map((card) => {
            const state = reviewStates[card.id]
            const isDifficult = state && state.easinessFactor < 2.0
            const isMastered = state && state.interval >= 21
            const isDue = state && new Date(state.nextReviewDate) <= new Date()
            const isNew = !state
            return (
              <div key={card.id} className="px-5 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{card.front}</p>
                    {showAllCards && (
                      <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                        {card.back}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {isMastered && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                    {isDifficult && !isMastered && <Flame className="h-4 w-4 text-red-400" />}
                    {isDue && !isMastered && !isDifficult && (
                      <Clock className="h-4 w-4 text-clay-600" />
                    )}
                    {isNew && <Star className="h-4 w-4 text-blue-400" />}
                    <span className="w-16 text-right text-[10px] text-muted-foreground">
                      {formatNextReview(state)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
