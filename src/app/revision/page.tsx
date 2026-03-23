'use client'

import { useState, useEffect, useCallback, useMemo, memo, useRef } from 'react'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  BookOpen,
  Layers,
  Search,
  ArrowLeft,
  ArrowRight,
  Trophy,
  RefreshCw,
  Filter,
  Flame,
  Clock,
  Calendar,
  TrendingUp,
  Wrench,
  BookA,
  Sparkles,
  PenTool,
  BookText,
  GraduationCap,
  Lightbulb,
  FileText,
  Languages,
} from 'lucide-react'
import Link from 'next/link'
import { flashcardDecks, type FlashcardDeck } from '@/data/flashcard-data'
import { techniques, type Technique } from '@/data/techniques-data'
import { getGuideByBoard } from '@/data/exam-guides'
import { cn, shuffleArray } from '@/lib/utils'
import { useBoardStore } from '@/store/board-store'
import { useAuthStore } from '@/store/auth-store'
import { matchesDeckBoard, matchesBoard } from '@/lib/board-filter'
import {
  useFlashcardStore,
  selectTodayReviewed,
  selectTodayAccuracy,
  selectAccuracyRate,
} from '@/store/flashcard-store'
import {
  type Quality,
  QUALITY_BUTTONS,
  getStudyQueue,
  getNewCards,
  sortByPriority,
  countDueToday,
  getMasteryPercentage,
  formatNextReview,
  previewIntervals,
  formatInterval,
} from '@/lib/spaced-repetition'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'

// ─── Types ──────────────────────────────────────────────────────────────────

type View = 'decks' | 'study' | 'summary'

type TabId =
  | 'study-guides'
  | 'writing-skills'
  | 'techniques'
  | 'poetry'
  | 'vocabulary'
  | 'flashcards'

// ─── Study Guide Text Data ──────────────────────────────────────────────────

type TextCard = {
  title: string
  slug: string
  author: string
  category: 'shakespeare' | 'nineteenth' | 'modern'
  boards: string[]
  themes: string[]
  icon: typeof BookOpen
}

const STUDY_TEXTS: TextCard[] = [
  // Shakespeare
  { title: 'Macbeth', slug: 'macbeth', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Ambition', 'Power', 'Guilt', 'Supernatural'], icon: BookText },
  { title: 'Romeo and Juliet', slug: 'romeo-and-juliet', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Love', 'Fate', 'Conflict', 'Family'], icon: BookText },
  { title: 'The Tempest', slug: 'the-tempest', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Power', 'Colonialism', 'Forgiveness', 'Magic'], icon: BookText },
  { title: 'Much Ado About Nothing', slug: 'much-ado-about-nothing', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Deception', 'Love', 'Honour', 'Gender'], icon: BookText },
  { title: 'The Merchant of Venice', slug: 'merchant-of-venice', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Justice', 'Mercy', 'Prejudice'], icon: BookText },
  { title: 'Othello', slug: 'othello', author: 'William Shakespeare', category: 'shakespeare', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Jealousy', 'Race', 'Manipulation'], icon: BookText },

  // 19th Century
  { title: 'A Christmas Carol', slug: 'christmas-carol', author: 'Charles Dickens', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Redemption', 'Poverty', 'Social Responsibility'], icon: BookOpen },
  { title: 'Jekyll and Hyde', slug: 'jekyll-and-hyde', author: 'Robert Louis Stevenson', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Duality', 'Repression', 'Science'], icon: BookOpen },
  { title: 'Frankenstein', slug: 'frankenstein', author: 'Mary Shelley', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Creation', 'Responsibility', 'Isolation'], icon: BookOpen },
  { title: 'Great Expectations', slug: 'great-expectations', author: 'Charles Dickens', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Class', 'Ambition', 'Identity'], icon: BookOpen },
  { title: 'Jane Eyre', slug: 'jane-eyre', author: 'Charlotte Bront\u00EB', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Independence', 'Class', 'Gender'], icon: BookOpen },
  { title: 'Pride and Prejudice', slug: 'pride-and-prejudice', author: 'Jane Austen', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Love', 'Class', 'Pride'], icon: BookOpen },
  { title: 'The Sign of the Four', slug: 'sign-of-four', author: 'Arthur Conan Doyle', category: 'nineteenth', boards: ['Edexcel'], themes: ['Justice', 'Empire', 'Reason'], icon: BookOpen },
  { title: 'Silas Marner', slug: 'silas-marner', author: 'George Eliot', category: 'nineteenth', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Community', 'Redemption', 'Isolation'], icon: BookOpen },

  // Modern Texts
  { title: 'An Inspector Calls', slug: 'inspector-calls', author: 'J.B. Priestley', category: 'modern', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Responsibility', 'Class', 'Morality'], icon: GraduationCap },
  { title: 'Lord of the Flies', slug: 'lord-of-the-flies', author: 'William Golding', category: 'modern', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Civilisation vs Savagery', 'Power', 'Fear'], icon: GraduationCap },
  { title: 'Animal Farm', slug: 'animal-farm', author: 'George Orwell', category: 'modern', boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'], themes: ['Power', 'Corruption', 'Propaganda'], icon: GraduationCap },
  { title: 'Blood Brothers', slug: 'blood-brothers', author: 'Willy Russell', category: 'modern', boards: ['AQA', 'Edexcel'], themes: ['Class', 'Nature vs Nurture', 'Superstition'], icon: GraduationCap },
  { title: 'Never Let Me Go', slug: 'never-let-me-go', author: 'Kazuo Ishiguro', category: 'modern', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Identity', 'Mortality', 'Ethics'], icon: GraduationCap },
  { title: 'The Woman in Black', slug: 'woman-in-black', author: 'Susan Hill', category: 'modern', boards: ['Edexcel'], themes: ['Fear', 'Isolation', 'Revenge'], icon: GraduationCap },
  { title: 'The Crucible', slug: 'the-crucible', author: 'Arthur Miller', category: 'modern', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Hysteria', 'Reputation', 'Power'], icon: GraduationCap },
  { title: 'A View from the Bridge', slug: 'view-from-the-bridge', author: 'Arthur Miller', category: 'modern', boards: ['AQA', 'Edexcel', 'OCR'], themes: ['Justice', 'Immigration', 'Masculinity'], icon: GraduationCap },
]

const CATEGORY_LABELS: Record<string, string> = {
  shakespeare: 'Shakespeare',
  nineteenth: '19th-Century Novels',
  modern: 'Modern Texts',
}

// ─── Tab configuration ──────────────────────────────────────────────────────

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'study-guides', label: 'Study Guides', icon: BookOpen },
  { id: 'writing-skills', label: 'Writing Skills', icon: PenTool },
  { id: 'techniques', label: 'Techniques', icon: Lightbulb },
  { id: 'poetry', label: 'Poetry', icon: FileText },
  { id: 'vocabulary', label: 'Vocabulary', icon: Languages },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
]

// ─── Writing Skills cards ───────────────────────────────────────────────────

const WRITING_SKILLS = [
  {
    title: 'Creative Writing',
    slug: 'creative-writing',
    description: 'Narrative and descriptive writing techniques for top-band responses',
    icon: PenTool,
    colour: 'bg-violet-500/15 text-violet-500',
  },
  {
    title: 'Analytical Writing',
    slug: 'analytical-writing',
    description: 'How to structure and write analytical essays on literature and language',
    icon: Search,
    colour: 'bg-blue-500/15 text-blue-500',
  },
  {
    title: 'Persuasive Writing',
    slug: 'persuasive-writing',
    description: 'Master rhetoric, argument, and persuasive devices for Paper 2',
    icon: Sparkles,
    colour: 'bg-amber-500/15 text-amber-500',
  },
  {
    title: 'Grammar & Punctuation',
    slug: 'grammar-punctuation',
    description: 'Secure your SPaG marks with accurate grammar and effective punctuation',
    icon: BookA,
    colour: 'bg-emerald-500/15 text-emerald-500',
  },
]

// ─── Poetry cards ───────────────────────────────────────────────────────────

const POETRY_CARDS = [
  {
    title: 'Power and Conflict',
    slug: 'power-and-conflict',
    description: 'AQA anthology covering war, power, identity, and nature',
    board: 'AQA',
    icon: FileText,
  },
  {
    title: 'Love and Relationships',
    slug: 'love-and-relationships',
    description: 'AQA anthology exploring love, memory, family, and distance',
    board: 'AQA',
    icon: FileText,
  },
]

// ─── Vocabulary cards ───────────────────────────────────────────────────────

const VOCABULARY_CARDS = [
  {
    title: 'Academic Vocabulary',
    slug: 'academic',
    description: 'Essential academic words for high-level essay writing',
    icon: GraduationCap,
  },
  {
    title: 'Analytical Vocabulary',
    slug: 'analytical',
    description: 'Precise vocabulary for literary and language analysis',
    icon: Search,
  },
  {
    title: 'Descriptive Vocabulary',
    slug: 'descriptive',
    description: 'Rich, varied vocabulary for creative and descriptive writing',
    icon: PenTool,
  },
]

// ─── Session progress persistence helpers ───────────────────────────────────

const SESSION_KEY = 'english-hub-revision-session'

interface PersistedSession {
  deckId: string
  cardIds: string[]
  currentIndex: number
  sessionRatings: Record<string, Quality>
  timestamp: number
}

function loadSession(deckId: string): PersistedSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const data: PersistedSession = JSON.parse(raw)
    if (data.deckId === deckId && Date.now() - data.timestamp < 86_400_000) {
      return data
    }
  } catch {
    /* ignore corrupt data */
  }
  return null
}

function saveSession(session: PersistedSession) {
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ ...session, timestamp: Date.now() })
    )
  } catch {
    /* storage full or unavailable */
  }
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {
    /* ignore */
  }
}

// ─── Swipe hook ──────────────────────────────────────────────────────────────

function useSwipe(
  ref: React.RefObject<HTMLElement | null>,
  {
    onSwipeLeft,
    onSwipeRight,
  }: { onSwipeLeft?: () => void; onSwipeRight?: () => void }
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
  // ── Active tab ────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<TabId>('study-guides')

  // ── Flashcard state ────────────────────────────────────────────────────
  const [view, setView] = useState<View>('decks')
  const [activeDeck, setActiveDeck] = useState<FlashcardDeck | null>(null)
  const [studyQueue, setStudyQueue] = useState<FlashcardDeck['cards']>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [sessionRatings, setSessionRatings] = useState<
    Record<string, Quality>
  >({})

  // ── SRS store ─────────────────────────────────────────────────────────
  const reviewStates = useFlashcardStore((s) => s.reviewStates)
  const reviewCard = useFlashcardStore((s) => s.reviewCard)
  const streak = useFlashcardStore((s) => s.streak)
  const todayReviewed = useFlashcardStore(selectTodayReviewed)
  const todayAccuracy = useFlashcardStore(selectTodayAccuracy)

  // ── Board filter (global store) ──────────────────────────────────────
  const { selectedBoard } = useBoardStore()
  const { user } = useAuthStore()

  const filteredDecks = useMemo(() => {
    return flashcardDecks.filter((d) =>
      matchesDeckBoard(d.board, selectedBoard)
    )
  }, [selectedBoard])

  // ── Board exam guide (for tips banner) ──────────────────────────────
  const boardGuide = useMemo(() => {
    return selectedBoard ? getGuideByBoard(selectedBoard) : undefined
  }, [selectedBoard])

  // ── Study guide filtering ─────────────────────────────────────────────
  const filteredTexts = useMemo(() => {
    if (!selectedBoard || selectedBoard === 'KS3') return STUDY_TEXTS
    return STUDY_TEXTS.filter(
      (text) =>
        text.boards.includes(selectedBoard) || text.boards.includes('All')
    )
  }, [selectedBoard])

  // ── Poetry filtering ──────────────────────────────────────────────────
  const filteredPoetry = useMemo(() => {
    if (!selectedBoard) return POETRY_CARDS
    return POETRY_CARDS.filter(
      (p) => !p.board || p.board === selectedBoard || selectedBoard === 'KS3'
    )
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

  // ── Deck-level SRS stats ──────────────────────────────────────────────

  const getDeckStats = useCallback(
    (deck: FlashcardDeck) => {
      const dueCount = countDueToday(deck.cards, reviewStates)
      const newCount = getNewCards(deck.cards, reviewStates).length
      const mastery = getMasteryPercentage(deck.cards, reviewStates)
      const reviewedCount = deck.cards.filter(
        (c) => reviewStates[c.id]
      ).length
      return { dueCount, newCount, mastery, reviewedCount }
    },
    [reviewStates]
  )

  // ── Deck actions ───────────────────────────────────────────────────────

  function startDeck(deck: FlashcardDeck) {
    setActiveDeck(deck)

    // Check for a saved session
    const saved = loadSession(deck.id)
    if (saved) {
      const cardMap = new Map(deck.cards.map((c) => [c.id, c]))
      const restoredCards = saved.cardIds
        .map((id) => cardMap.get(id))
        .filter(Boolean) as FlashcardDeck['cards']
      if (restoredCards.length > 0) {
        setStudyQueue(restoredCards)
        setCurrentIndex(saved.currentIndex)
        setSessionRatings(saved.sessionRatings)
        setFlipped(false)
        setView('study')
        return
      }
    }

    // Build a fresh study queue: due cards first, then new cards
    const queue = getStudyQueue(deck.cards, reviewStates, 10)
    const finalQueue =
      queue.length > 0 ? queue : sortByPriority(deck.cards, reviewStates)

    setStudyQueue(finalQueue)
    setCurrentIndex(0)
    setSessionRatings({})
    setFlipped(false)
    setView('study')
  }

  function shuffleQueue() {
    if (!activeDeck) return
    setStudyQueue((prev) => shuffleArray(prev))
    setCurrentIndex(0)
    setFlipped(false)
  }

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i < studyQueue.length - 1) {
        setFlipped(false)
        return i + 1
      }
      return i
    })
  }, [studyQueue.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => {
      if (i > 0) {
        setFlipped(false)
        return i - 1
      }
      return i
    })
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function rateCard(quality: Quality) {
    const card = studyQueue[currentIndex]
    if (!card) return

    // Update SM-2 state in the store
    reviewCard(card.id, quality)

    // Track session rating
    setSessionRatings((prev) => ({ ...prev, [card.id]: quality }))

    // Auto-advance
    if (currentIndex < studyQueue.length - 1) {
      setCurrentIndex((i) => i + 1)
      setFlipped(false)
    } else {
      clearSession()
      setView('summary')
    }
  }

  function restartDeck() {
    if (!activeDeck) return
    clearSession()
    const queue = getStudyQueue(activeDeck.cards, reviewStates, 10)
    const finalQueue =
      queue.length > 0 ? queue : sortByPriority(activeDeck.cards, reviewStates)
    setStudyQueue(finalQueue)
    setCurrentIndex(0)
    setFlipped(false)
    setSessionRatings({})
    setView('study')
  }

  function backToDecks() {
    clearSession()
    setView('decks')
    setActiveDeck(null)
    setStudyQueue([])
    setCurrentIndex(0)
    setSessionRatings({})
  }

  // ── Persist session progress ──────────────────────────────────────────
  useEffect(() => {
    if (view === 'study' && activeDeck && studyQueue.length > 0) {
      saveSession({
        deckId: activeDeck.id,
        cardIds: studyQueue.map((c) => c.id),
        currentIndex,
        sessionRatings,
        timestamp: Date.now(),
      })
    }
  }, [view, activeDeck, studyQueue, currentIndex, sessionRatings])

  // ── Keyboard navigation ────────────────────────────────────────────────

  useEffect(() => {
    if (activeTab !== 'flashcards' || view !== 'study') return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
      // Number keys for quality rating (when flipped)
      if (flipped) {
        if (e.key === '1') rateCard(1 as Quality)
        if (e.key === '2') rateCard(2 as Quality)
        if (e.key === '3' || e.key === '4') rateCard(4 as Quality)
        if (e.key === '5') rateCard(5 as Quality)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeTab, view, goToNext, goToPrev, flipped, rateCard])

  // ── Mobile swipe navigation ────────────────────────────────────────────
  useSwipe(cardRef, { onSwipeLeft: goToNext, onSwipeRight: goToPrev })

  // ── Session summary stats ─────────────────────────────────────────────

  const sessionCorrect = Object.values(sessionRatings).filter(
    (q) => q >= 3
  ).length
  const sessionFailed = Object.values(sessionRatings).filter(
    (q) => q < 3
  ).length
  const sessionTotal = Object.keys(sessionRatings).length

  // ── Current card SRS info ─────────────────────────────────────────────

  const currentCard = studyQueue[currentIndex]
  const currentReviewState = currentCard
    ? reviewStates[currentCard.id]
    : undefined
  const intervalPreviews = useMemo(
    () => previewIntervals(currentReviewState),
    [currentReviewState]
  )

  // ── Group texts by category ───────────────────────────────────────────
  const textsByCategory = useMemo(() => {
    const groups: Record<string, TextCard[]> = {}
    for (const text of filteredTexts) {
      if (!groups[text.category]) groups[text.category] = []
      groups[text.category].push(text)
    }
    return groups
  }, [filteredTexts])

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen pb-20">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Revision Hub
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Comprehensive study materials, technique references, writing guides,
            and spaced-repetition flashcards — everything you need to revise
            English in one place.
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
                    Access 295 flashcards, technique guides, and board-specific
                    revision tools
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-primary">
                      First month FREE!
                    </span>{' '}
                    Then {PRICING_DISPLAY.monthly} on a rolling monthly contract.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {PRICING.TRIAL_TEXT}. Start your free trial today.
                  </p>
                </div>
                <Button
                  render={<Link href="/auth/register" />}
                  size="lg"
                  className="shrink-0 px-6 py-3"
                >
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

      {/* ── Tab Navigation ─────────────────────────────────────────── */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="-mb-px flex gap-1 overflow-x-auto py-3" aria-label="Revision tabs">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    // Reset flashcard view when switching to flashcards tab
                    if (tab.id === 'flashcards' && view !== 'decks') {
                      backToDecks()
                    }
                  }}
                  className={cn(
                    'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ════════════════════════════════════════════════════════════════
            TAB: Study Guides
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'study-guides' && (
          <div className="space-y-10">
            <div>
              <h2 className="mb-1 text-xl font-bold text-foreground">
                Set Text Revision Notes
              </h2>
              <p className="text-sm text-muted-foreground">
                In-depth revision guides for all GCSE and IGCSE set texts.
                {selectedBoard && selectedBoard !== 'KS3'
                  ? ` Showing texts for ${selectedBoard}.`
                  : ' Select a board to filter.'}
              </p>
            </div>

            {(['shakespeare', 'nineteenth', 'modern'] as const).map(
              (category) => {
                const texts = textsByCategory[category]
                if (!texts || texts.length === 0) return null
                return (
                  <section key={category}>
                    <h3 className="mb-4 text-lg font-semibold text-foreground">
                      {CATEGORY_LABELS[category]}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {texts.map((text) => (
                        <Link
                          key={text.slug}
                          href={`/resources/revision-notes/${text.slug}`}
                        >
                          <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                            <CardContent>
                              <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-primary/10 p-2">
                                  <text.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {text.title}
                                  </h4>
                                  <p className="mt-0.5 text-sm text-muted-foreground">
                                    {text.author}
                                  </p>
                                  <div className="mt-2 flex flex-wrap gap-1.5">
                                    {text.themes.map((theme) => (
                                      <Badge
                                        key={theme}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {theme}
                                      </Badge>
                                    ))}
                                  </div>
                                  <div className="mt-2 flex flex-wrap gap-1">
                                    {text.boards.map((b) => (
                                      <Badge
                                        key={b}
                                        className="bg-primary/10 text-primary text-xs"
                                      >
                                        {b}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                )
              }
            )}

            {filteredTexts.length === 0 && (
              <Card className="flex flex-col items-center justify-center p-12 text-center">
                <BookOpen className="mb-4 h-10 w-10 text-border" />
                <p className="text-muted-foreground">
                  No study guides available for the selected board.
                </p>
              </Card>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB: Writing Skills
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'writing-skills' && (
          <div>
            <div className="mb-6">
              <h2 className="mb-1 text-xl font-bold text-foreground">
                Writing Skills
              </h2>
              <p className="text-sm text-muted-foreground">
                Master every type of writing the exam demands — from creative
                prose to analytical essays.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WRITING_SKILLS.map((skill) => (
                <Link
                  key={skill.slug}
                  href={`/resources/writing-skills/${skill.slug}`}
                >
                  <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className={cn('rounded-lg p-2.5', skill.colour)}>
                          <skill.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {skill.title}
                            </h3>
                            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB: Techniques
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'techniques' && (
          <section>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-foreground">
                  Technique Reference
                </h2>
                <p className="text-sm text-muted-foreground">
                  Searchable reference of language, structure, and rhetorical
                  devices.
                </p>
              </div>

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
                <Select
                  value={techCategory}
                  onValueChange={(v) => v && setTechCategory(v)}
                >
                  <SelectTrigger
                    className="w-full sm:w-auto"
                    aria-label="Filter by category"
                  >
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
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB: Poetry
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'poetry' && (
          <div>
            <div className="mb-6">
              <h2 className="mb-1 text-xl font-bold text-foreground">
                Poetry Anthologies
              </h2>
              <p className="text-sm text-muted-foreground">
                Poem-by-poem revision notes, analysis, and comparison guides for
                your anthology.
              </p>
            </div>

            {filteredPoetry.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredPoetry.map((anthology) => (
                  <Link
                    key={anthology.slug}
                    href={`/resources/poetry/${anthology.slug}`}
                  >
                    <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                      <CardContent>
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-2.5">
                            <anthology.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {anthology.title}
                              </h3>
                              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {anthology.description}
                            </p>
                            {anthology.board && (
                              <Badge className="mt-2 bg-primary/10 text-primary text-xs">
                                {anthology.board}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-12 text-center">
                <FileText className="mb-4 h-10 w-10 text-border" />
                <p className="text-muted-foreground">
                  No poetry anthologies available for the selected board.
                </p>
              </Card>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB: Vocabulary
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'vocabulary' && (
          <div>
            <div className="mb-6">
              <h2 className="mb-1 text-xl font-bold text-foreground">
                Vocabulary Builder
              </h2>
              <p className="text-sm text-muted-foreground">
                Expand your academic, analytical, and descriptive vocabulary to
                achieve top marks.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VOCABULARY_CARDS.map((vocab) => (
                <Link
                  key={vocab.slug}
                  href={`/resources/vocabulary/${vocab.slug}`}
                >
                  <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5">
                          <vocab.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {vocab.title}
                            </h3>
                            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {vocab.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            TAB: Flashcards (existing SRS system)
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === 'flashcards' && (
          <>
            {/* Daily stats strip */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="mb-1 text-xl font-bold text-foreground">
                  Flashcards
                </h2>
                <p className="text-sm text-muted-foreground">
                  Spaced-repetition flashcard decks for active recall practice.
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-2.5">
                {streak > 0 && (
                  <div className="flex items-center gap-1.5 text-sm">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="font-semibold text-foreground">
                      {streak}
                    </span>
                    <span className="text-muted-foreground">
                      day{streak !== 1 ? 's' : ''}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground">
                    {todayReviewed}
                  </span>
                  <span className="text-muted-foreground">today</span>
                </div>
                {todayAccuracy > 0 && (
                  <div className="flex items-center gap-1.5 text-sm">
                    <span className="font-semibold text-foreground">
                      {todayAccuracy}%
                    </span>
                    <span className="text-muted-foreground">accuracy</span>
                  </div>
                )}
              </div>
            </div>

            {/* ── Deck Selector ───────────────────────────────────────────── */}
            {view === 'decks' && (
              <section>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredDecks.map((deck) => {
                    const stats = getDeckStats(deck)
                    return (
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

                          {/* SRS stats for this deck */}
                          <div className="mt-3 space-y-2">
                            {/* Mastery progress bar */}
                            <div>
                              <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                                <span>{stats.mastery}% mastered</span>
                                <span>
                                  {stats.reviewedCount}/{deck.cards.length} seen
                                </span>
                              </div>
                              <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                                <div
                                  className="h-full rounded-full bg-primary transition-all"
                                  style={{ width: `${stats.mastery}%` }}
                                />
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              <Badge className="bg-primary/15 text-primary">
                                {deck.cards.length} cards
                              </Badge>
                              {stats.dueCount > 0 && (
                                <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {stats.dueCount} due
                                </Badge>
                              )}
                              {stats.newCount > 0 && (
                                <Badge variant="outline">
                                  {stats.newCount} new
                                </Badge>
                              )}
                              <Badge variant="outline">{deck.category}</Badge>
                              {deck.board !== 'All' && (
                                <Badge variant="secondary">{deck.board}</Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </section>
            )}

            {/* ── Study View ──────────────────────────────────────────────── */}
            {view === 'study' &&
              activeDeck &&
              studyQueue.length > 0 &&
              currentCard && (
                <section>
                  {/* Top bar */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <Button variant="ghost" size="sm" onClick={backToDecks}>
                      <ArrowLeft className="h-4 w-4" />
                      All Decks
                    </Button>
                    <h2 className="text-lg font-bold text-foreground">
                      {activeDeck.title}
                    </h2>
                    <Button variant="ghost" size="sm" onClick={shuffleQueue}>
                      <Shuffle className="h-4 w-4" />
                      Shuffle
                    </Button>
                  </div>

                  {/* Progress bar & stats */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        Card {currentIndex + 1} of {studyQueue.length}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {formatNextReview(currentReviewState)}
                        </span>
                        {sessionTotal > 0 && (
                          <span>
                            {sessionCorrect} correct &middot; {sessionFailed}{' '}
                            again
                          </span>
                        )}
                      </span>
                    </div>
                    <Progress
                      value={((currentIndex + 1) / studyQueue.length) * 100}
                    />
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
                        <div className="absolute right-4 top-4 flex items-center gap-2">
                          {currentReviewState && (
                            <Badge variant="outline" className="text-xs">
                              EF{' '}
                              {currentReviewState.easinessFactor.toFixed(1)}{' '}
                              &middot;{' '}
                              {formatInterval(currentReviewState.interval)}
                            </Badge>
                          )}
                          {!currentReviewState && (
                            <Badge className="bg-blue-500/15 text-blue-600 dark:text-blue-400">
                              New
                            </Badge>
                          )}
                          {sessionRatings[currentCard.id] !== undefined && (
                            <Badge
                              className={cn(
                                sessionRatings[currentCard.id] >= 3
                                  ? 'bg-primary/15 text-primary'
                                  : 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                              )}
                            >
                              {sessionRatings[currentCard.id] >= 3
                                ? 'Correct'
                                : 'Review'}
                            </Badge>
                          )}
                        </div>

                        <div className="absolute left-4 top-4 text-xs font-medium text-muted-foreground">
                          {flipped ? 'ANSWER' : 'QUESTION'}
                        </div>

                        <div className="flex min-h-[200px] items-center justify-center sm:min-h-[240px]">
                          {!flipped ? (
                            <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                              {currentCard.front}
                            </h3>
                          ) : (
                            <div className="whitespace-pre-line text-center text-[0.95rem] leading-relaxed text-muted-foreground">
                              {currentCard.back}
                            </div>
                          )}
                        </div>

                        <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/50">
                          {flipped
                            ? 'Rate your recall below'
                            : 'Click to flip \u00b7 Arrow keys or swipe to navigate'}
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
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setFlipped((f) => !f)}
                      >
                        <RotateCcw className="h-4 w-4" />
                        Flip
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNext}
                        disabled={currentIndex >= studyQueue.length - 1}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* SM-2 Quality rating buttons */}
                    {flipped ? (
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {QUALITY_BUTTONS.map(({ quality, label, color }) => (
                          <Button
                            key={quality}
                            className={cn(
                              'min-w-[80px] flex-col gap-0.5 px-4 py-3',
                              color === 'destructive' &&
                                'border border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/20',
                              color === 'warning' &&
                                'border border-amber-500/40 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-400',
                              color === 'success' &&
                                'border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20',
                              color === 'easy' &&
                                'border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400'
                            )}
                            onClick={() => rateCard(quality)}
                          >
                            <span className="text-sm font-semibold">
                              {label}
                            </span>
                            <span className="text-[10px] opacity-70">
                              {formatInterval(intervalPreviews[quality])}
                            </span>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Flip the card to rate your recall
                      </p>
                    )}
                  </div>
                </section>
              )}

            {/* ── Summary View ────────────────────────────────────────────── */}
            {view === 'summary' && activeDeck && (
              <section>
                <Card className="mx-auto max-w-lg">
                  <CardContent className="p-8 text-center">
                    <Trophy className="mx-auto mb-4 h-12 w-12 text-amber-500" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Session Complete!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {activeDeck.title}
                    </p>

                    {/* Streak banner */}
                    {streak > 0 && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-orange-500">
                        <Flame className="h-5 w-5" />
                        <span className="font-bold">
                          {streak} day streak!
                        </span>
                      </div>
                    )}

                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <p className="text-2xl font-bold text-primary">
                          {sessionCorrect}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Correct
                        </p>
                      </div>
                      <div className="rounded-lg bg-amber-500/10 p-4">
                        <p className="text-2xl font-bold text-amber-500">
                          {sessionFailed}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Again
                        </p>
                      </div>
                      <div className="rounded-lg bg-secondary p-4">
                        <p className="text-2xl font-bold text-muted-foreground">
                          {sessionTotal}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Total
                        </p>
                      </div>
                    </div>

                    {/* Mastery progress bar */}
                    {activeDeck.cards.length > 0 && (
                      <div className="mt-6">
                        <div className="h-3 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{
                              width: `${getMasteryPercentage(activeDeck.cards, reviewStates)}%`,
                            }}
                          />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {getMasteryPercentage(
                            activeDeck.cards,
                            reviewStates
                          )}
                          % mastered &middot;{' '}
                          {sessionTotal > 0
                            ? Math.round(
                                (sessionCorrect / sessionTotal) * 100
                              )
                            : 0}
                          % session accuracy
                        </p>
                      </div>
                    )}

                    {/* Next review info */}
                    <div className="mt-4 rounded-lg border border-border p-3">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {countDueToday(activeDeck.cards, reviewStates)} cards
                          due now &middot;{' '}
                          {getNewCards(activeDeck.cards, reviewStates).length}{' '}
                          new remaining
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <Button variant="secondary" onClick={restartDeck}>
                        <RefreshCw className="h-4 w-4" />
                        Study More
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
          </>
        )}
      </div>
    </main>
  )
}

// ─── Technique Card Component ───────────────────────────────────────────────

const TechniqueCard = memo(function TechniqueCard({
  technique,
}: {
  technique: Technique
}) {
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

        <p className="mt-2 text-sm text-muted-foreground">
          {technique.definition}
        </p>

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
              <p className="mt-1 text-sm text-muted-foreground">
                {technique.effect}
              </p>
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
