'use client'

import { useState, useEffect, useCallback, useMemo, memo, useRef } from 'react'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
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
import Link from 'next/link'
import { flashcardDecks, type FlashcardDeck } from '@/data/flashcard-data'
import { techniques, type Technique } from '@/data/techniques-data'
import { getGuideByBoard } from '@/data/exam-guides'
import { cn, shuffleArray } from '@/lib/utils'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import { matchesDeckBoard } from '@/lib/board-filter'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'

// ─── Types ──────────────────────────────────────────────────────────────────

type StudyStatus = 'know' | 'review' | 'unseen'

interface CardStatus {
  [cardId: string]: StudyStatus
}

type View = 'decks' | 'study' | 'summary'

// ─── Progress persistence helpers ────────────────────────────────────────────

const STORAGE_KEY = 'english-hub-revision-progress'

interface PersistedProgress {
  deckId: string
  cardStatus: CardStatus
  currentIndex: number
  isShuffled: boolean
  timestamp: number
}

function loadProgress(deckId: string): PersistedProgress | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data: PersistedProgress = JSON.parse(raw)
    // Only restore if same deck and less than 24h old
    if (data.deckId === deckId && Date.now() - data.timestamp < 86_400_000) {
      return data
    }
  } catch { /* ignore corrupt data */ }
  return null
}

function saveProgress(deckId: string, cardStatus: CardStatus, currentIndex: number, isShuffled: boolean) {
  try {
    const data: PersistedProgress = { deckId, cardStatus, currentIndex, isShuffled, timestamp: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch { /* storage full or unavailable */ }
}

function clearProgress() {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
}

// ─── Swipe hook ──────────────────────────────────────────────────────────────

function useSwipe(
  ref: React.RefObject<HTMLElement | null>,
  { onSwipeLeft, onSwipeRight }: { onSwipeLeft?: () => void; onSwipeRight?: () => void }
) {
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleTouchStart(e: TouchEvent) {
      const touch = e.touches[0]
      touchStart.current = { x: touch.clientX, y: touch.clientY }
    }

    function handleTouchEnd(e: TouchEvent) {
      if (!touchStart.current) return
      const touch = e.changedTouches[0]
      const dx = touch.clientX - touchStart.current.x
      const dy = touch.clientY - touchStart.current.y
      touchStart.current = null

      // Only trigger if horizontal swipe is dominant and > 50px
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) onSwipeLeft?.()
        else onSwipeRight?.()
      }
    }

    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [ref, onSwipeLeft, onSwipeRight])
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

  // ── Board filter (global store) ──────────────────────────────────────
  const { selectedBoard } = useBoardStore()
  const { user } = useAuthStore()

  const filteredDecks = useMemo(() => {
    return flashcardDecks.filter((d) => matchesDeckBoard(d.board, selectedBoard))
  }, [selectedBoard])

  // ── Board exam guide (for tips banner) ──────────────────────────────
  const boardGuide = useMemo(() => {
    return selectedBoard ? getGuideByBoard(selectedBoard) : undefined
  }, [selectedBoard])

  // ── Technique state ────────────────────────────────────────────────────
  const [techSearch, setTechSearch] = useState('')
  const [techCategory, setTechCategory] = useState('All')
  const techCategories = useMemo(() => getTechniqueCategories(), [])

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

  // ── Swipe ref for mobile ─────────────────────────────────────────────
  const cardRef = useRef<HTMLDivElement>(null)

  // ── Deck actions ───────────────────────────────────────────────────────

  function startDeck(deck: FlashcardDeck) {
    // Check for saved progress on this deck
    const saved = loadProgress(deck.id)
    setActiveDeck(deck)
    if (saved) {
      setCards(saved.isShuffled ? shuffleArray(deck.cards) : deck.cards)
      setCurrentIndex(saved.currentIndex)
      setCardStatus(saved.cardStatus)
      setIsShuffled(saved.isShuffled)
    } else {
      setCards(deck.cards)
      setCurrentIndex(0)
      setCardStatus({})
      setIsShuffled(false)
    }
    setFlipped(false)
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

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i < cards.length - 1) {
        setFlipped(false)
        return i + 1
      }
      return i
    })
  }, [cards.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => {
      if (i > 0) {
        setFlipped(false)
        return i - 1
      }
      return i
    })
  }, [])

  function markCard(status: StudyStatus) {
    if (!cards[currentIndex]) return
    setCardStatus((prev) => ({ ...prev, [cards[currentIndex].id]: status }))
    // Auto-advance
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
      setFlipped(false)
    } else {
      // Last card — show summary
      clearProgress()
      setView('summary')
    }
  }

  function restartDeck() {
    if (!activeDeck) return
    clearProgress()
    setCards(isShuffled ? shuffleArray(activeDeck.cards) : activeDeck.cards)
    setCurrentIndex(0)
    setFlipped(false)
    setCardStatus({})
    setView('study')
  }

  function backToDecks() {
    clearProgress()
    setView('decks')
    setActiveDeck(null)
    setCards([])
    setCurrentIndex(0)
    setCardStatus({})
  }

  // ── Persist progress on every status/index change ───────────────────
  useEffect(() => {
    if (view === 'study' && activeDeck) {
      saveProgress(activeDeck.id, cardStatus, currentIndex, isShuffled)
    }
  }, [view, activeDeck, cardStatus, currentIndex, isShuffled])

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
  }, [view, goToNext, goToPrev])

  // ── Mobile swipe navigation ────────────────────────────────────────────
  useSwipe(cardRef, { onSwipeLeft: goToNext, onSwipeRight: goToPrev })

  // ── Summary stats ──────────────────────────────────────────────────────

  const knownCount = Object.values(cardStatus).filter((s) => s === 'know').length
  const reviewCount = Object.values(cardStatus).filter(
    (s) => s === 'review'
  ).length
  const unseenCount = cards.length - knownCount - reviewCount

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Revision
          </h1>
          <p className="mt-2 text-muted-foreground">
            Flashcards, technique reference, and spaced repetition study tools.
          </p>
        </div>
      </div>

      {/* Subscription CTA */}
      {!user && (
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
            <Card className="border-primary/30 bg-primary/10">
              <CardContent className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    Access 295 flashcards, technique guides, and board-specific revision tools
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">First month FREE!</span>
                    {' '}Then {PRICING_DISPLAY.monthly} on a rolling monthly contract.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Annual subscription also available &mdash; save {PRICING.ANNUAL_SAVE_PERCENT}%. Start your free trial today.
                  </p>
                </div>
                <Button render={<Link href="/auth/register" />} size="lg" className="shrink-0 px-6 py-3">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* ── Board Exam Tips Banner ──────────────────────────────────── */}
      {boardGuide && (
        <div className="border-b border-border bg-primary/5">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              {boardGuide.uniqueFeatures.slice(0, 2).map((tip, i) => (
                <span key={i} className="flex items-start gap-1.5">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="line-clamp-1">{tip}</span>
                </span>
              ))}
            </div>
            <Link
              href={`/exam-guide/${selectedBoard?.toLowerCase()}`}
              className="shrink-0 text-sm font-medium text-primary hover:underline"
            >
              View your full {boardGuide.boardName} exam guide &rarr;
            </Link>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ════════════════════════════════════════════════════════════════
            FLASHCARD SECTION
           ════════════════════════════════════════════════════════════════ */}

        {/* ── Deck Selector ───────────────────────────────────────────── */}
        {view === 'decks' && (
          <section className="mb-16">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Layers className="h-5 w-5 text-primary" />
              Flashcard Decks
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDecks.map((deck) => (
                <Card
                  key={deck.id}
                  className="group cursor-pointer transition-colors hover:border-primary/50"
                  onClick={() => startDeck(deck)}
                >
                  <CardContent className="text-left">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                      {deck.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {deck.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge className="bg-primary/15 text-primary">
                        {deck.cards.length} cards
                      </Badge>
                      <Badge variant="outline">
                        {deck.category}
                      </Badge>
                      {deck.board !== 'All' && (
                        <Badge variant="secondary">
                          {deck.board}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ── Study View ──────────────────────────────────────────────── */}
        {view === 'study' && activeDeck && cards.length > 0 && (
          <section className="mb-16">
            {/* Top bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <Button variant="ghost" size="sm" onClick={backToDecks}>
                <ArrowLeft className="h-4 w-4" />
                All Decks
              </Button>
              <h2 className="text-lg font-bold text-foreground">
                {activeDeck.title}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleShuffle}
                className={cn(isShuffled && 'text-primary')}
              >
                <Shuffle className="h-4 w-4" />
                {isShuffled ? 'Shuffled' : 'Shuffle'}
              </Button>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Card {currentIndex + 1} of {cards.length}
                </span>
                <span>
                  {knownCount} known &middot; {reviewCount} review &middot;{' '}
                  {unseenCount} remaining
                </span>
              </div>
              <Progress value={((currentIndex + 1) / cards.length) * 100} />
            </div>

            {/* Flashcard */}
            <div ref={cardRef}>
            <Card
              className="group relative mx-auto min-h-[280px] max-w-2xl cursor-pointer select-none overflow-hidden transition-all hover:border-primary/40 sm:min-h-[320px]"
              onClick={() => setFlipped((f) => !f)}
              role="button"
              aria-label="Flip flashcard"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  setFlipped((f) => !f)
                }
              }}
            >
              <CardContent className="relative flex min-h-[280px] flex-col items-center justify-center p-8 sm:min-h-[320px]">
                {/* Status indicator */}
                {cardStatus[cards[currentIndex].id] && (
                  <div className="absolute right-4 top-4">
                    {cardStatus[cards[currentIndex].id] === 'know' ? (
                      <Badge className="bg-primary/15 text-primary">
                        Known
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400">
                        Review
                      </Badge>
                    )}
                  </div>
                )}

                <div className="absolute left-4 top-4 text-xs font-medium text-muted-foreground">
                  {flipped ? 'ANSWER' : 'QUESTION'}
                </div>

                <div className="flex min-h-[200px] items-center justify-center sm:min-h-[240px]">
                  {!flipped ? (
                    <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                      {cards[currentIndex].front}
                    </h3>
                  ) : (
                    <div className="whitespace-pre-line text-center text-[0.95rem] leading-relaxed text-muted-foreground">
                      {cards[currentIndex].back}
                    </div>
                  )}
                </div>

                <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/50">
                  Click to flip &middot; Arrow keys or swipe to navigate
                </p>
              </CardContent>
            </Card>
            </div>

            {/* Navigation + rating buttons */}
            <div className="mt-6 flex flex-col items-center gap-4">
              {/* Nav arrows */}
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setFlipped((f) => !f)}>
                  <RotateCcw className="h-4 w-4" />
                  Flip
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  disabled={currentIndex >= cards.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Know it / Study again */}
              <div className="flex items-center gap-3">
                <Button
                  variant="destructive"
                  onClick={() => markCard('review')}
                >
                  <X className="h-4 w-4" />
                  Study Again
                </Button>
                <Button
                  className="border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                  onClick={() => markCard('know')}
                >
                  <Check className="h-4 w-4" />
                  Know It
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* ── Summary View ────────────────────────────────────────────── */}
        {view === 'summary' && activeDeck && (
          <section className="mb-16">
            <Card className="mx-auto max-w-lg">
              <CardContent className="p-8 text-center">
                <Trophy className="mx-auto mb-4 h-12 w-12 text-amber-500" />
                <h2 className="text-2xl font-bold text-foreground">
                  Deck Complete!
                </h2>
                <p className="mt-2 text-muted-foreground">{activeDeck.title}</p>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <p className="text-2xl font-bold text-primary">
                      {knownCount}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Known</p>
                  </div>
                  <div className="rounded-lg bg-amber-500/10 p-4">
                    <p className="text-2xl font-bold text-amber-500">
                      {reviewCount}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Need Review</p>
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <p className="text-2xl font-bold text-muted-foreground">
                      {unseenCount}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Unseen</p>
                  </div>
                </div>

                {/* Score bar */}
                {cards.length > 0 && (
                  <div className="mt-6">
                    <div className="h-3 overflow-hidden rounded-full bg-secondary">
                      <div className="flex h-full">
                        <div
                          className="bg-primary transition-all"
                          style={{
                            width: `${(knownCount / cards.length) * 100}%`,
                          }}
                        />
                        <div
                          className="bg-amber-500 transition-all"
                          style={{
                            width: `${(reviewCount / cards.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {Math.round((knownCount / cards.length) * 100)}% mastered
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button variant="secondary" onClick={restartDeck}>
                    <RefreshCw className="h-4 w-4" />
                    Study Again
                  </Button>
                  <Button onClick={backToDecks}>
                    <Layers className="h-4 w-4" />
                    All Decks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TECHNIQUE REFERENCE SECTION
           ════════════════════════════════════════════════════════════════ */}

        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Technique Reference
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  value={techSearch}
                  onChange={(e) => setTechSearch(e.target.value)}
                  placeholder="Search techniques..."
                  aria-label="Search techniques"
                  className="pl-10 text-sm sm:w-64"
                />
              </div>
              {/* Category filter */}
              <Select value={techCategory} onValueChange={(v) => v && setTechCategory(v)}>
                <SelectTrigger className="w-full sm:w-auto" aria-label="Filter by category">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {techCategories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Terminology guide link */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              {filteredTechniques.length} technique
              {filteredTechniques.length !== 1 ? 's' : ''} found
            </p>
            <Link
              href="/exam-guide#terminology"
              className="text-sm font-medium text-primary hover:underline"
            >
              See the full terminology guide &rarr;
            </Link>
          </div>

          {/* Technique grid */}
          {filteredTechniques.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTechniques.map((tech) => (
                <TechniqueCard key={tech.id} technique={tech} />
              ))}
            </div>
          ) : (
            <Card className="flex flex-col items-center justify-center p-12 text-center">
              <Search className="mb-4 h-10 w-10 text-border" />
              <p className="text-muted-foreground">
                No techniques match your search.
              </p>
            </Card>
          )}
        </section>
      </div>
    </main>
  )
}

// ─── Technique Card Component ───────────────────────────────────────────────

const TechniqueCard = memo(function TechniqueCard({ technique }: { technique: Technique }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className="cursor-pointer transition-colors hover:border-primary/40"
      onClick={() => setExpanded(!expanded)}
      role="button"
      aria-expanded={expanded}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded(!expanded)
        }
      }}
    >
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">
            {technique.name}
          </h3>
          <Badge className="shrink-0 bg-primary/15 text-primary">
            {technique.category}
          </Badge>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{technique.definition}</p>

        {expanded && (
          <div className="mt-4 space-y-3 border-t border-border pt-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Example
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground">
                {technique.example}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                Effect
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{technique.effect}</p>
            </div>
            {technique.howToAnalyse && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                  How to Analyse
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {technique.howToAnalyse}
                </p>
              </div>
            )}
          </div>
        )}

        <p className="mt-3 text-xs text-muted-foreground/50">
          {expanded ? 'Click to collapse' : 'Click to expand'}
        </p>
      </CardContent>
    </Card>
  )
})
