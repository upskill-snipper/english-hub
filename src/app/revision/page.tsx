'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Check,
  X,
  BookOpen,
  Layers,
  Search,
  ArrowLeft,
  Trophy,
  RefreshCw,
  Filter,
} from 'lucide-react'
import { flashcardDecks, type FlashcardDeck } from '@/data/flashcard-data'
import { techniques, type Technique } from '@/data/techniques-data'

// ─── Types ──────────────────────────────────────────────────────────────────

type StudyStatus = 'know' | 'review' | 'unseen'

interface CardStatus {
  [cardId: string]: StudyStatus
}

type View = 'decks' | 'study' | 'summary'

// ─── Helpers ────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Technique categories from data ─────────────────────────────────────────

function getTechniqueCategories(): string[] {
  const cats = new Set(techniques.map((t) => t.category))
  return ['All', ...Array.from(cats).sort()]
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function RevisionPage() {
  // ── Flashcard state ────────────────────────────────────────────────────
  const [view, setView] = useState<View>('decks')
  const [activeDeck, setActiveDeck] = useState<FlashcardDeck | null>(null)
  const [cards, setCards] = useState<FlashcardDeck['cards']>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [cardStatus, setCardStatus] = useState<CardStatus>({})

  // ── Technique state ────────────────────────────────────────────────────
  const [techSearch, setTechSearch] = useState('')
  const [techCategory, setTechCategory] = useState('All')
  const techCategories = getTechniqueCategories()

  const filteredTechniques = useMemo(() => {
    return techniques.filter((t) => {
      if (techCategory !== 'All' && t.category !== techCategory) return false
      if (techSearch) {
        const q = techSearch.toLowerCase()
        return (
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.example.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [techSearch, techCategory])

  // ── Keyboard navigation ────────────────────────────────────────────────

  useEffect(() => {
    if (view !== 'study') return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, currentIndex, cards.length])

  // ── Deck actions ───────────────────────────────────────────────────────

  function startDeck(deck: FlashcardDeck) {
    setActiveDeck(deck)
    setCards(deck.cards)
    setCurrentIndex(0)
    setFlipped(false)
    setIsShuffled(false)
    setCardStatus({})
    setView('study')
  }

  function toggleShuffle() {
    if (!activeDeck) return
    if (isShuffled) {
      setCards(activeDeck.cards)
    } else {
      setCards(shuffleArray(activeDeck.cards))
    }
    setIsShuffled(!isShuffled)
    setCurrentIndex(0)
    setFlipped(false)
  }

  function goToNext() {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
      setFlipped(false)
    }
  }

  function goToPrev() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
      setFlipped(false)
    }
  }

  function markCard(status: StudyStatus) {
    if (!cards[currentIndex]) return
    setCardStatus((prev) => ({ ...prev, [cards[currentIndex].id]: status }))
    // Auto-advance
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
      setFlipped(false)
    } else {
      // Last card — show summary
      setView('summary')
    }
  }

  function restartDeck() {
    if (!activeDeck) return
    setCards(isShuffled ? shuffleArray(activeDeck.cards) : activeDeck.cards)
    setCurrentIndex(0)
    setFlipped(false)
    setCardStatus({})
    setView('study')
  }

  function backToDecks() {
    setView('decks')
    setActiveDeck(null)
    setCards([])
    setCurrentIndex(0)
    setCardStatus({})
  }

  // ── Summary stats ──────────────────────────────────────────────────────

  const knownCount = Object.values(cardStatus).filter((s) => s === 'know').length
  const reviewCount = Object.values(cardStatus).filter(
    (s) => s === 'review'
  ).length
  const unseenCount = cards.length - knownCount - reviewCount

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-brand-border bg-brand-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold text-brand-text sm:text-4xl">
            Revision
          </h1>
          <p className="mt-2 text-brand-muted">
            Flashcards, technique reference, and spaced repetition study tools.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ════════════════════════════════════════════════════════════════
            FLASHCARD SECTION
           ════════════════════════════════════════════════════════════════ */}

        {/* ── Deck Selector ───────────────────────────────────────────── */}
        {view === 'decks' && (
          <section className="mb-16">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand-text">
              <Layers className="h-5 w-5 text-brand-accent" />
              Flashcard Decks
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {flashcardDecks.map((deck) => (
                <button
                  key={deck.id}
                  onClick={() => startDeck(deck)}
                  className="card group p-5 text-left transition-colors hover:border-brand-accent/50"
                >
                  <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-accent">
                    {deck.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted line-clamp-2">
                    {deck.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full bg-brand-accent/15 px-2.5 py-0.5 text-xs font-medium text-brand-accent">
                      {deck.cards.length} cards
                    </span>
                    <span className="rounded-full bg-brand-border px-2.5 py-0.5 text-xs font-medium text-brand-muted">
                      {deck.category}
                    </span>
                    {deck.board !== 'All' && (
                      <span className="rounded-full bg-brand-blue/15 px-2.5 py-0.5 text-xs font-medium text-brand-blue">
                        {deck.board}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── Study View ──────────────────────────────────────────────── */}
        {view === 'study' && activeDeck && cards.length > 0 && (
          <section className="mb-16">
            {/* Top bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={backToDecks}
                className="btn-ghost gap-2 text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                All Decks
              </button>
              <h2 className="text-lg font-bold text-brand-text">
                {activeDeck.title}
              </h2>
              <button
                onClick={toggleShuffle}
                className={`btn-ghost gap-2 text-sm ${
                  isShuffled ? 'text-brand-accent' : ''
                }`}
              >
                <Shuffle className="h-4 w-4" />
                {isShuffled ? 'Shuffled' : 'Shuffle'}
              </button>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-sm text-brand-muted">
                <span>
                  Card {currentIndex + 1} of {cards.length}
                </span>
                <span>
                  {knownCount} known &middot; {reviewCount} review &middot;{' '}
                  {unseenCount} remaining
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-brand-border">
                <div
                  className="h-full rounded-full bg-brand-accent transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / cards.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Flashcard */}
            <div
              onClick={() => setFlipped((f) => !f)}
              className="card group relative mx-auto min-h-[280px] max-w-2xl cursor-pointer select-none overflow-hidden p-8 transition-all hover:border-brand-accent/40 sm:min-h-[320px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  setFlipped((f) => !f)
                }
              }}
            >
              {/* Status indicator */}
              {cardStatus[cards[currentIndex].id] && (
                <div className="absolute right-4 top-4">
                  {cardStatus[cards[currentIndex].id] === 'know' ? (
                    <span className="rounded-full bg-brand-accent/15 px-2.5 py-0.5 text-xs font-medium text-brand-accent">
                      Known
                    </span>
                  ) : (
                    <span className="rounded-full bg-brand-warning/15 px-2.5 py-0.5 text-xs font-medium text-brand-warning">
                      Review
                    </span>
                  )}
                </div>
              )}

              <div className="absolute left-4 top-4 text-xs font-medium text-brand-muted">
                {flipped ? 'ANSWER' : 'QUESTION'}
              </div>

              <div className="flex min-h-[200px] items-center justify-center sm:min-h-[240px]">
                {!flipped ? (
                  <h3 className="text-center text-2xl font-bold text-brand-text sm:text-3xl">
                    {cards[currentIndex].front}
                  </h3>
                ) : (
                  <div className="whitespace-pre-line text-center text-[0.95rem] leading-relaxed text-brand-muted">
                    {cards[currentIndex].back}
                  </div>
                )}
              </div>

              <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-brand-muted/50">
                Click to flip &middot; Arrow keys to navigate
              </p>
            </div>

            {/* Navigation + rating buttons */}
            <div className="mt-6 flex flex-col items-center gap-4">
              {/* Nav arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                  className="btn-ghost"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setFlipped((f) => !f)}
                  className="btn-ghost gap-2 text-sm"
                >
                  <RotateCcw className="h-4 w-4" />
                  Flip
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex >= cards.length - 1}
                  className="btn-ghost"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Know it / Study again */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => markCard('review')}
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-error/40 bg-brand-error/10 px-5 py-2.5 text-sm font-medium text-brand-error transition-colors hover:bg-brand-error/20"
                >
                  <X className="h-4 w-4" />
                  Study Again
                </button>
                <button
                  onClick={() => markCard('know')}
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 bg-brand-accent/10 px-5 py-2.5 text-sm font-medium text-brand-accent transition-colors hover:bg-brand-accent/20"
                >
                  <Check className="h-4 w-4" />
                  Know It
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ── Summary View ────────────────────────────────────────────── */}
        {view === 'summary' && activeDeck && (
          <section className="mb-16">
            <div className="card mx-auto max-w-lg p-8 text-center">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-brand-warning" />
              <h2 className="text-2xl font-bold text-brand-text">
                Deck Complete!
              </h2>
              <p className="mt-2 text-brand-muted">{activeDeck.title}</p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-brand-accent/10 p-4">
                  <p className="text-2xl font-bold text-brand-accent">
                    {knownCount}
                  </p>
                  <p className="mt-1 text-xs text-brand-muted">Known</p>
                </div>
                <div className="rounded-lg bg-brand-warning/10 p-4">
                  <p className="text-2xl font-bold text-brand-warning">
                    {reviewCount}
                  </p>
                  <p className="mt-1 text-xs text-brand-muted">Need Review</p>
                </div>
                <div className="rounded-lg bg-brand-border/30 p-4">
                  <p className="text-2xl font-bold text-brand-muted">
                    {unseenCount}
                  </p>
                  <p className="mt-1 text-xs text-brand-muted">Unseen</p>
                </div>
              </div>

              {/* Score bar */}
              {cards.length > 0 && (
                <div className="mt-6">
                  <div className="h-3 overflow-hidden rounded-full bg-brand-border">
                    <div className="flex h-full">
                      <div
                        className="bg-brand-accent transition-all"
                        style={{
                          width: `${(knownCount / cards.length) * 100}%`,
                        }}
                      />
                      <div
                        className="bg-brand-warning transition-all"
                        style={{
                          width: `${(reviewCount / cards.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-brand-muted">
                    {Math.round((knownCount / cards.length) * 100)}% mastered
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button onClick={restartDeck} className="btn-secondary gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Study Again
                </button>
                <button onClick={backToDecks} className="btn-primary gap-2">
                  <Layers className="h-4 w-4" />
                  All Decks
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TECHNIQUE REFERENCE SECTION
           ════════════════════════════════════════════════════════════════ */}

        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-text">
              <BookOpen className="h-5 w-5 text-brand-accent" />
              Technique Reference
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                <input
                  type="text"
                  value={techSearch}
                  onChange={(e) => setTechSearch(e.target.value)}
                  placeholder="Search techniques..."
                  className="input-field pl-10 text-sm sm:w-64"
                />
              </div>
              {/* Category filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                <select
                  value={techCategory}
                  onChange={(e) => setTechCategory(e.target.value)}
                  className="input-field appearance-none pl-10 pr-8 text-sm"
                >
                  {techCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="mb-4 text-sm text-brand-muted">
            {filteredTechniques.length} technique
            {filteredTechniques.length !== 1 ? 's' : ''} found
          </p>

          {/* Technique grid */}
          {filteredTechniques.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTechniques.map((tech) => (
                <TechniqueCard key={tech.id} technique={tech} />
              ))}
            </div>
          ) : (
            <div className="card flex flex-col items-center justify-center p-12 text-center">
              <Search className="mb-4 h-10 w-10 text-brand-border" />
              <p className="text-brand-muted">
                No techniques match your search.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

// ─── Technique Card Component ───────────────────────────────────────────────

function TechniqueCard({ technique }: { technique: Technique }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="card cursor-pointer p-5 transition-colors hover:border-brand-accent/40"
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded(!expanded)
        }
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-brand-text">
          {technique.name}
        </h3>
        <span className="shrink-0 rounded-full bg-brand-accent/15 px-2 py-0.5 text-xs font-medium text-brand-accent">
          {technique.category}
        </span>
      </div>

      <p className="mt-2 text-sm text-brand-muted">{technique.definition}</p>

      {expanded && (
        <div className="mt-4 space-y-3 border-t border-brand-border pt-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
              Example
            </p>
            <p className="mt-1 text-sm italic text-brand-muted">
              {technique.example}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-warning">
              Effect
            </p>
            <p className="mt-1 text-sm text-brand-muted">{technique.effect}</p>
          </div>
          {technique.howToAnalyse && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                How to Analyse
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                {technique.howToAnalyse}
              </p>
            </div>
          )}
        </div>
      )}

      <p className="mt-3 text-xs text-brand-muted/50">
        {expanded ? 'Click to collapse' : 'Click to expand'}
      </p>
    </div>
  )
}
