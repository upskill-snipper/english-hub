'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
  Printer,
  Copy,
  Save,
  Search,
  X,
  GripVertical,
  Clock,
  BookOpen,
  StickyNote,
  Trash2,
  Filter,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// ── Types ────────────────────────────────────────────────────────────────────

interface LessonPlan {
  id: string
  title: string
  topic: string
  text?: string
  skill: string
  examBoard: string
  yearGroup: string
  duration: number
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
}

interface PlannerSlot {
  lessonId: string | null
  className: string
  notes: string
}

interface WeekPlan {
  weekKey: string
  slots: Record<string, PlannerSlot> // key = "day-period" e.g. "0-2"
}

interface WeakAreaInfo {
  className: string
  area: string
  severity: 'critical' | 'warning' | 'minor'
  avgScore: number
}

// ── Lesson Catalogue ─────────────────────────────────────────────────────────

const ALL_LESSONS: LessonPlan[] = [
  {
    id: 'poetry-comparison',
    title: 'Comparing Poems: Structure & Language',
    topic: 'Poetry',
    text: 'AQA Power & Conflict Anthology',
    skill: 'Comparison',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'unseen-poetry',
    title: 'Unseen Poetry: First Response Technique',
    topic: 'Poetry',
    text: 'Unseen Poetry',
    skill: 'Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 11',
    duration: 50,
    difficulty: 'Intermediate',
  },
  {
    id: 'macbeth-ambition',
    title: 'Macbeth: The Theme of Ambition',
    topic: 'Shakespeare',
    text: 'Macbeth',
    skill: 'Thematic Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'macbeth-extract',
    title: 'Macbeth: Extract Response Under Timed Conditions',
    topic: 'Shakespeare',
    text: 'Macbeth',
    skill: 'Exam Technique',
    examBoard: 'AQA',
    yearGroup: 'Year 11',
    duration: 55,
    difficulty: 'Higher',
  },
  {
    id: 'inspector-calls-responsibility',
    title: 'An Inspector Calls: Responsibility & Society',
    topic: 'Modern Text',
    text: 'An Inspector Calls',
    skill: 'Thematic Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'inspector-calls-dramatic-devices',
    title: 'An Inspector Calls: Dramatic Devices & Stagecraft',
    topic: 'Modern Text',
    text: 'An Inspector Calls',
    skill: 'Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 11',
    duration: 55,
    difficulty: 'Higher',
  },
  {
    id: 'language-paper1-q2',
    title: 'Language Paper 1 Q2: Language Analysis',
    topic: 'Language',
    skill: 'Language Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 45,
    difficulty: 'Foundation',
  },
  {
    id: 'language-paper1-q5',
    title: 'Language Paper 1 Q5: Descriptive Writing',
    topic: 'Language',
    skill: 'Creative Writing',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'language-paper2-q5',
    title: 'Language Paper 2 Q5: Persuasive Writing',
    topic: 'Language',
    skill: 'Argumentative Writing',
    examBoard: 'AQA',
    yearGroup: 'Year 11',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'pee-paragraphs',
    title: 'Building PEE Paragraphs: Point, Evidence, Explain',
    topic: 'Skills',
    skill: 'Essay Structure',
    examBoard: 'All',
    yearGroup: 'Year 9',
    duration: 45,
    difficulty: 'Foundation',
  },
  {
    id: 'quotation-embedding',
    title: 'Embedding Quotations Fluently',
    topic: 'Skills',
    skill: 'Quotation Use',
    examBoard: 'All',
    yearGroup: 'Year 9',
    duration: 40,
    difficulty: 'Foundation',
  },
  {
    id: 'context-integration',
    title: 'Integrating Context Without "Bolting On"',
    topic: 'Skills',
    skill: 'Contextual Knowledge',
    examBoard: 'AQA',
    yearGroup: 'Year 11',
    duration: 50,
    difficulty: 'Higher',
  },
  {
    id: 'power-conflict-anthology',
    title: 'Power & Conflict Poetry: Anthology Overview',
    topic: 'Poetry',
    text: 'AQA Power & Conflict Anthology',
    skill: 'Anthology Knowledge',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'christmas-carol-redemption',
    title: 'A Christmas Carol: The Theme of Redemption',
    topic: 'Modern Text',
    text: 'A Christmas Carol',
    skill: 'Thematic Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 10',
    duration: 55,
    difficulty: 'Intermediate',
  },
  {
    id: 'romeo-juliet-conflict',
    title: 'Romeo & Juliet: Conflict and Fate',
    topic: 'Shakespeare',
    text: 'Romeo and Juliet',
    skill: 'Thematic Analysis',
    examBoard: 'AQA',
    yearGroup: 'Year 9',
    duration: 60,
    difficulty: 'Intermediate',
  },
  {
    id: 'spoken-language-presentation',
    title: 'Spoken Language Endorsement: Presentation Skills',
    topic: 'Spoken Language',
    skill: 'Speaking & Listening',
    examBoard: 'All',
    yearGroup: 'Year 11',
    duration: 50,
    difficulty: 'Foundation',
  },
]

// ── Constants ────────────────────────────────────────────────────────────────

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const
const PERIODS = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6'] as const
const TOPICS = Array.from(new Set(ALL_LESSONS.map((l) => l.topic))).sort()

const CLASS_NAMES = [
  '10A English',
  '10B English',
  '11A English',
  '11B English',
  '9C English',
  '9D English',
]

// Simulated analytics weak areas per class
const MOCK_WEAK_AREAS: WeakAreaInfo[] = [
  { className: '10A English', area: 'Poetry', severity: 'critical', avgScore: 38 },
  { className: '10A English', area: 'Language Analysis', severity: 'warning', avgScore: 52 },
  { className: '10B English', area: 'Shakespeare', severity: 'critical', avgScore: 35 },
  { className: '10B English', area: 'Creative Writing', severity: 'warning', avgScore: 48 },
  { className: '11A English', area: 'Exam Technique', severity: 'critical', avgScore: 40 },
  { className: '11A English', area: 'Contextual Knowledge', severity: 'warning', avgScore: 50 },
  { className: '11B English', area: 'Comparison', severity: 'warning', avgScore: 45 },
  { className: '11B English', area: 'Modern Text', severity: 'critical', avgScore: 37 },
  { className: '9C English', area: 'Essay Structure', severity: 'critical', avgScore: 33 },
  { className: '9C English', area: 'Quotation Use', severity: 'warning', avgScore: 47 },
  { className: '9D English', area: 'Shakespeare', severity: 'warning', avgScore: 51 },
  { className: '9D English', area: 'Skills', severity: 'warning', avgScore: 49 },
]

// ── Color helpers ────────────────────────────────────────────────────────────

const TOPIC_COLORS: Record<string, string> = {
  Poetry: 'bg-pink-500/15 border-pink-500/30 text-pink-300',
  Shakespeare: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
  'Modern Text': 'bg-blue-500/15 border-blue-500/30 text-blue-300',
  Language: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
  Skills: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
  'Spoken Language': 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
}

const CLASS_COLORS: Record<string, string> = {
  '10A English': 'bg-violet-500/15 border-violet-500/30',
  '10B English': 'bg-sky-500/15 border-sky-500/30',
  '11A English': 'bg-rose-500/15 border-rose-500/30',
  '11B English': 'bg-teal-500/15 border-teal-500/30',
  '9C English': 'bg-orange-500/15 border-orange-500/30',
  '9D English': 'bg-lime-500/15 border-lime-500/30',
}

const TOPIC_BADGE_COLORS: Record<string, string> = {
  Poetry: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Shakespeare: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Modern Text': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Language: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Skills: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Spoken Language': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
}

// ── Date helpers ─────────────────────────────────────────────────────────────

function getMonday(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  d.setDate(diff)
  d.setHours(0, 0, 0, 0)
  return d
}

function formatWeekKey(monday: Date): string {
  return monday.toISOString().split('T')[0]
}

function formatDateRange(monday: Date): string {
  const friday = new Date(monday)
  friday.setDate(friday.getDate() + 4)
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' }
  return `${monday.toLocaleDateString('en-GB', opts)} - ${friday.toLocaleDateString('en-GB', opts)}, ${monday.getFullYear()}`
}

function formatDayHeader(monday: Date, dayIndex: number): string {
  const d = new Date(monday)
  d.setDate(d.getDate() + dayIndex)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

// ── Storage helpers ──────────────────────────────────────────────────────────

const STORAGE_KEY = 'english-hub-weekly-planner'

function loadWeekPlan(weekKey: string): WeekPlan {
  if (typeof window === 'undefined') return { weekKey, slots: {} }
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${weekKey}`)
    if (raw) return JSON.parse(raw)
  } catch {
    // corrupted data
  }
  return { weekKey, slots: {} }
}

function saveWeekPlan(plan: WeekPlan) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`${STORAGE_KEY}-${plan.weekKey}`, JSON.stringify(plan))
}

// ── Auto-fill logic ──────────────────────────────────────────────────────────

function autoFillWeek(existingPlan: WeekPlan): WeekPlan {
  const newSlots: Record<string, PlannerSlot> = { ...existingPlan.slots }

  // Build a schedule: each class gets lessons across the week
  // Prioritise weak areas, ensure variety, avoid repeats

  const classSchedules: Record<string, { dayIndex: number; periodIndex: number }[]> = {}

  // Assign each class 3-5 slots across the week, spread out
  CLASS_NAMES.forEach((cls, clsIndex) => {
    const slotsPerWeek = 3 + (clsIndex % 3) // 3-5 lessons per class
    const schedule: { dayIndex: number; periodIndex: number }[] = []

    for (let i = 0; i < slotsPerWeek; i++) {
      const dayIndex = i % 5
      // Stagger periods based on class index to avoid collisions
      const periodIndex = (clsIndex + i) % 6
      const slotKey = `${dayIndex}-${periodIndex}`

      // Skip if slot already occupied
      if (newSlots[slotKey]?.lessonId) continue

      schedule.push({ dayIndex, periodIndex })
    }

    classSchedules[cls] = schedule
  })

  // For each class, find lessons matching their weak areas
  for (const cls of CLASS_NAMES) {
    const weakAreas = MOCK_WEAK_AREAS.filter((w) => w.className === cls)
    const schedule = classSchedules[cls] || []
    const usedLessonIds = new Set<string>()

    // Collect lessons already assigned to this class in the plan
    for (const [, slot] of Object.entries(newSlots)) {
      if (slot.className === cls && slot.lessonId) {
        usedLessonIds.add(slot.lessonId)
      }
    }

    // Sort weak areas by severity (critical first)
    const sortedWeakAreas = [...weakAreas].sort((a, b) => {
      const order = { critical: 0, warning: 1, minor: 2 }
      return order[a.severity] - order[b.severity]
    })

    // Find matching lessons for weak areas
    const candidateLessons: LessonPlan[] = []

    for (const area of sortedWeakAreas) {
      const areaLower = area.area.toLowerCase()
      const matches = ALL_LESSONS.filter((l) => {
        if (usedLessonIds.has(l.id)) return false
        const searchText = `${l.topic} ${l.skill} ${l.title}`.toLowerCase()
        return searchText.includes(areaLower)
      })
      candidateLessons.push(...matches)
    }

    // Add variety: include lessons from topics not covered by weak areas
    const weakTopics = new Set(sortedWeakAreas.map((w) => w.area.toLowerCase()))
    const varietyLessons = ALL_LESSONS.filter((l) => {
      if (usedLessonIds.has(l.id)) return false
      if (candidateLessons.some((c) => c.id === l.id)) return false
      const topicLower = l.topic.toLowerCase()
      return !weakTopics.has(topicLower)
    })

    // Combine: weak area lessons first, then variety
    const allCandidates = [...candidateLessons, ...varietyLessons]

    // Assign lessons to schedule slots
    let candidateIndex = 0
    const usedTopicsThisWeek: string[] = []

    for (const { dayIndex, periodIndex } of schedule) {
      if (candidateIndex >= allCandidates.length) break

      const slotKey = `${dayIndex}-${periodIndex}`
      if (newSlots[slotKey]?.lessonId) continue

      // Try to find a lesson that doesn't repeat the same topic as last assigned
      let lesson: LessonPlan | null = null
      for (let j = candidateIndex; j < allCandidates.length; j++) {
        const candidate = allCandidates[j]
        if (usedLessonIds.has(candidate.id)) continue

        // Avoid consecutive same topics for this class
        const lastTopic = usedTopicsThisWeek[usedTopicsThisWeek.length - 1]
        if (lastTopic && candidate.topic === lastTopic && j + 1 < allCandidates.length) {
          continue
        }

        lesson = candidate
        candidateIndex = j + 1
        break
      }

      if (!lesson && candidateIndex < allCandidates.length) {
        lesson = allCandidates[candidateIndex]
        candidateIndex++
      }

      if (lesson) {
        usedLessonIds.add(lesson.id)
        usedTopicsThisWeek.push(lesson.topic)

        // Determine if this was a weak-area-driven recommendation
        const isWeakAreaLesson = sortedWeakAreas.some((w) => {
          const areaLower = w.area.toLowerCase()
          const searchText = `${lesson!.topic} ${lesson!.skill} ${lesson!.title}`.toLowerCase()
          return searchText.includes(areaLower)
        })

        newSlots[slotKey] = {
          lessonId: lesson.id,
          className: cls,
          notes: isWeakAreaLesson ? 'Auto-filled: targets weak area' : 'Auto-filled: variety',
        }
      }
    }
  }

  return { weekKey: existingPlan.weekKey, slots: newSlots }
}

// ── Slot Component ───────────────────────────────────────────────────────────

interface SlotCellProps {
  slot: PlannerSlot | undefined
  slotKey: string
  lesson: LessonPlan | undefined
  colorMode: 'topic' | 'class'
  onDrop: (slotKey: string, lessonId: string) => void
  onClick: (slotKey: string) => void
  onClear: (slotKey: string) => void
}

function SlotCell({ slot, slotKey, lesson, colorMode, onDrop, onClick, onClear }: SlotCellProps) {
  const [dragOver, setDragOver] = useState(false)

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(true)
  }

  function handleDragLeave() {
    setDragOver(false)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const lessonId = e.dataTransfer.getData('lessonId')
    if (lessonId) onDrop(slotKey, lessonId)
  }

  const isEmpty = !slot?.lessonId || !lesson

  const colorClass = isEmpty
    ? ''
    : colorMode === 'topic'
      ? TOPIC_COLORS[lesson.topic] || 'bg-muted/50 border-border'
      : CLASS_COLORS[slot!.className] || 'bg-muted/50 border-border'

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => onClick(slotKey)}
      className={cn(
        'relative group min-h-[88px] rounded-lg border cursor-pointer transition-all duration-150',
        isEmpty
          ? 'border-dashed border-border/60 hover:border-primary/40 hover:bg-primary/5'
          : cn('border-solid', colorClass),
        dragOver && 'ring-2 ring-primary/50 border-primary/50 bg-primary/10',
      )}
    >
      {isEmpty ? (
        <div className="flex h-full min-h-[88px] items-center justify-center p-2">
          <span className="text-[11px] text-muted-foreground/70">Drop lesson here</span>
        </div>
      ) : (
        <div className="p-2.5">
          <div className="flex items-start justify-between gap-1 mb-1">
            <h4 className="text-[11px] font-semibold text-foreground leading-tight line-clamp-2">
              {lesson.title}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onClear(slotKey)
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 p-0.5 rounded hover:bg-destructive/20"
            >
              <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground mb-1.5 truncate">
            {slot!.className}
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge
              variant="outline"
              className={cn('text-[9px] py-0 px-1.5', TOPIC_BADGE_COLORS[lesson.topic] || '')}
            >
              {lesson.topic}
            </Badge>
            <span className="text-[9px] text-muted-foreground flex items-center gap-0.5">
              <Clock className="h-2.5 w-2.5" />
              {lesson.duration}m
            </span>
          </div>
          {slot!.notes && (
            <p className="mt-1.5 text-[9px] text-muted-foreground/70 line-clamp-1 italic flex items-center gap-0.5">
              <StickyNote className="h-2.5 w-2.5 shrink-0" />
              {slot!.notes}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ── Sidebar Lesson Card ──────────────────────────────────────────────────────

interface SidebarLessonCardProps {
  lesson: LessonPlan
}

function SidebarLessonCard({ lesson }: SidebarLessonCardProps) {
  function handleDragStart(e: React.DragEvent) {
    e.dataTransfer.setData('lessonId', lesson.id)
    e.dataTransfer.effectAllowed = 'copy'
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="flex items-start gap-2 rounded-lg border border-border/60 bg-card p-2.5 cursor-grab active:cursor-grabbing hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <GripVertical className="h-4 w-4 text-muted-foreground/70 mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-semibold text-foreground leading-tight line-clamp-2">
          {lesson.title}
        </h4>
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          <Badge
            variant="outline"
            className={cn('text-[9px] py-0 px-1.5', TOPIC_BADGE_COLORS[lesson.topic] || '')}
          >
            {lesson.topic}
          </Badge>
          <span className="text-[9px] text-muted-foreground">{lesson.duration}m</span>
          <span className="text-[9px] text-muted-foreground">{lesson.yearGroup}</span>
        </div>
      </div>
    </div>
  )
}

// ── Slot Edit Dialog ─────────────────────────────────────────────────────────

interface SlotEditDialogProps {
  open: boolean
  onClose: () => void
  slotKey: string
  slot: PlannerSlot | undefined
  onSave: (slotKey: string, slot: PlannerSlot) => void
  onDelete: (slotKey: string) => void
}

function SlotEditDialog({ open, onClose, slotKey, slot, onSave, onDelete }: SlotEditDialogProps) {
  const [lessonId, setLessonId] = useState(slot?.lessonId || '')
  const [className, setClassName] = useState(slot?.className || CLASS_NAMES[0])
  const [notes, setNotes] = useState(slot?.notes || '')

  useEffect(() => {
    setLessonId(slot?.lessonId || '')
    setClassName(slot?.className || CLASS_NAMES[0])
    setNotes(slot?.notes || '')
  }, [slot, open])

  const dayIndex = parseInt(slotKey.split('-')[0])
  const periodIndex = parseInt(slotKey.split('-')[1])

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {DAYS[dayIndex]} - {PERIODS[periodIndex]}
          </DialogTitle>
          <DialogDescription>
            {slot?.lessonId ? 'Edit this lesson slot' : 'Assign a lesson to this slot'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Lesson Plan</label>
            <Select value={lessonId || 'none'} onValueChange={(v) => setLessonId(v === 'none' ? '' : v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a lesson..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">-- No lesson --</SelectItem>
                {ALL_LESSONS.map((l) => (
                  <SelectItem key={l.id} value={l.id}>
                    {l.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Class</label>
            <Select value={className} onValueChange={setClassName}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CLASS_NAMES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes for this slot..."
              rows={3}
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button
              onClick={() => {
                onSave(slotKey, {
                  lessonId: lessonId || null,
                  className,
                  notes,
                })
                onClose()
              }}
              className="flex-1"
            >
              <CheckCircle2 className="h-4 w-4 mr-1.5" />
              Save
            </Button>
            {slot?.lessonId && (
              <Button
                variant="outline"
                onClick={() => {
                  onDelete(slotKey)
                  onClose()
                }}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ── Print styles ─────────────────────────────────────────────────────────────

function printWeekPlan(monday: Date, plan: WeekPlan, lessonMap: Map<string, LessonPlan>) {
  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const dateRange = formatDateRange(monday)

  let tableRows = ''
  for (let p = 0; p < PERIODS.length; p++) {
    let cells = `<td class="period-label">${PERIODS[p]}</td>`
    for (let d = 0; d < DAYS.length; d++) {
      const slotKey = `${d}-${p}`
      const slot = plan.slots[slotKey]
      const lesson = slot?.lessonId ? lessonMap.get(slot.lessonId) : undefined
      if (lesson && slot) {
        cells += `<td class="filled">
          <div class="lesson-title">${lesson.title}</div>
          <div class="class-name">${slot.className}</div>
          <div class="meta">${lesson.topic} &middot; ${lesson.duration}min</div>
          ${slot.notes ? `<div class="notes">${slot.notes}</div>` : ''}
        </td>`
      } else {
        cells += `<td class="empty"></td>`
      }
    }
    tableRows += `<tr>${cells}</tr>`
  }

  const dayHeaders = DAYS.map(
    (day, i) => `<th>${day}<br/><span class="date">${formatDayHeader(monday, i)}</span></th>`,
  ).join('')

  printWindow.document.write(`<!DOCTYPE html>
<html><head><title>Weekly Teaching Plan - ${dateRange}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 20px; color: #1a1a1a; }
  h1 { font-size: 18px; margin-bottom: 4px; }
  .subtitle { font-size: 13px; color: #666; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; }
  th, td { border: 1px solid #d4d4d4; padding: 6px 8px; vertical-align: top; }
  th { background: #f5f5f5; font-size: 12px; text-align: center; }
  th .date { font-weight: normal; color: #888; font-size: 10px; }
  .period-label { font-weight: 600; background: #fafafa; width: 80px; text-align: center; font-size: 10px; }
  .filled { background: #fafafa; }
  .empty { background: #fff; min-height: 60px; }
  .lesson-title { font-weight: 600; font-size: 10px; margin-bottom: 2px; }
  .class-name { color: #666; font-size: 9px; margin-bottom: 2px; }
  .meta { color: #888; font-size: 9px; }
  .notes { color: #888; font-size: 9px; font-style: italic; margin-top: 3px; border-top: 1px solid #eee; padding-top: 2px; }
  @media print { body { padding: 10px; } }
</style></head><body>
<h1>Weekly Teaching Plan</h1>
<div class="subtitle">${dateRange}</div>
<table>
  <thead><tr><th style="width:80px"></th>${dayHeaders}</tr></thead>
  <tbody>${tableRows}</tbody>
</table>
</body></html>`)
  printWindow.document.close()
  printWindow.print()
}

// ── Main Component ───────────────────────────────────────────────────────────

export function WeeklyPlanner() {
  // Week navigation
  const [currentMonday, setCurrentMonday] = useState(() => getMonday(new Date()))
  const weekKey = formatWeekKey(currentMonday)

  // Plan state
  const [plan, setPlan] = useState<WeekPlan>(() => loadWeekPlan(weekKey))
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [autoFilling, setAutoFilling] = useState(false)

  // Sidebar state
  const [sidebarSearch, setSidebarSearch] = useState('')
  const [sidebarTopic, setSidebarTopic] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Slot edit dialog
  const [editingSlot, setEditingSlot] = useState<string | null>(null)

  // Color mode
  const [colorMode, setColorMode] = useState<'topic' | 'class'>('topic')

  // Jump to week
  const [jumpDate, setJumpDate] = useState('')

  // Lesson map for quick lookup
  const lessonMap = useMemo(() => {
    const map = new Map<string, LessonPlan>()
    ALL_LESSONS.forEach((l) => map.set(l.id, l))
    return map
  }, [])

  // Load plan when week changes
  useEffect(() => {
    const loaded = loadWeekPlan(weekKey)
    setPlan(loaded)
  }, [weekKey])

  // Filtered sidebar lessons
  const filteredLessons = useMemo(() => {
    return ALL_LESSONS.filter((l) => {
      if (sidebarTopic !== 'all' && l.topic !== sidebarTopic) return false
      if (sidebarSearch.trim()) {
        const q = sidebarSearch.toLowerCase()
        const hay = `${l.title} ${l.topic} ${l.skill} ${l.text || ''}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [sidebarSearch, sidebarTopic])

  // Navigation
  const goToPreviousWeek = useCallback(() => {
    setCurrentMonday((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() - 7)
      return d
    })
  }, [])

  const goToNextWeek = useCallback(() => {
    setCurrentMonday((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() + 7)
      return d
    })
  }, [])

  const goToToday = useCallback(() => {
    setCurrentMonday(getMonday(new Date()))
  }, [])

  const handleJumpToWeek = useCallback(() => {
    if (!jumpDate) return
    const d = new Date(jumpDate)
    if (!isNaN(d.getTime())) {
      setCurrentMonday(getMonday(d))
      setJumpDate('')
    }
  }, [jumpDate])

  // Slot operations
  const handleDrop = useCallback(
    (slotKey: string, lessonId: string) => {
      setPlan((prev) => {
        const existing = prev.slots[slotKey]
        const updated: WeekPlan = {
          ...prev,
          slots: {
            ...prev.slots,
            [slotKey]: {
              lessonId,
              className: existing?.className || CLASS_NAMES[0],
              notes: existing?.notes || '',
            },
          },
        }
        return updated
      })
    },
    [],
  )

  const handleSlotClick = useCallback((slotKey: string) => {
    setEditingSlot(slotKey)
  }, [])

  const handleSlotClear = useCallback((slotKey: string) => {
    setPlan((prev) => {
      const newSlots = { ...prev.slots }
      delete newSlots[slotKey]
      return { ...prev, slots: newSlots }
    })
  }, [])

  const handleSlotSave = useCallback((slotKey: string, slot: PlannerSlot) => {
    setPlan((prev) => ({
      ...prev,
      slots: {
        ...prev.slots,
        [slotKey]: slot,
      },
    }))
  }, [])

  const handleSlotDelete = useCallback((slotKey: string) => {
    setPlan((prev) => {
      const newSlots = { ...prev.slots }
      delete newSlots[slotKey]
      return { ...prev, slots: newSlots }
    })
  }, [])

  // Save
  const handleSave = useCallback(() => {
    setSaveStatus('saving')
    saveWeekPlan(plan)
    setTimeout(() => {
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 2000)
    }, 300)
  }, [plan])

  // Auto-fill
  const handleAutoFill = useCallback(() => {
    setAutoFilling(true)
    // Simulate brief processing delay
    setTimeout(() => {
      setPlan((prev) => autoFillWeek(prev))
      setAutoFilling(false)
    }, 600)
  }, [])

  // Copy previous week
  const handleCopyPreviousWeek = useCallback(() => {
    const prevMonday = new Date(currentMonday)
    prevMonday.setDate(prevMonday.getDate() - 7)
    const prevKey = formatWeekKey(prevMonday)
    const prevPlan = loadWeekPlan(prevKey)

    if (Object.keys(prevPlan.slots).length === 0) {
      alert('No plan found for the previous week.')
      return
    }

    setPlan({
      weekKey,
      slots: { ...prevPlan.slots },
    })
  }, [currentMonday, weekKey])

  // Print
  const handlePrint = useCallback(() => {
    printWeekPlan(currentMonday, plan, lessonMap)
  }, [currentMonday, plan, lessonMap])

  // Count filled slots
  const filledSlots = Object.values(plan.slots).filter((s) => s.lessonId).length
  const totalSlots = DAYS.length * PERIODS.length

  return (
    <div className="flex h-full gap-0">
      {/* ── Main Planner Area ──────────────────────────────────────────────── */}
      <div className={cn('flex-1 min-w-0 p-4 sm:p-6', sidebarOpen && 'lg:pr-0')}>
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground">
                Weekly Planner
              </h1>
              <p className="text-sm text-muted-foreground">
                {formatDateRange(currentMonday)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {filledSlots}/{totalSlots} slots filled
            </Badge>
            <Select
              value={colorMode}
              onValueChange={(v) => setColorMode(v as 'topic' | 'class')}
            >
              <SelectTrigger className="w-[130px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="topic">Color by Topic</SelectItem>
                <SelectItem value="class">Color by Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded-lg border border-border bg-card">
            <Button variant="ghost" size="sm" onClick={goToPreviousWeek} className="rounded-r-none h-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={goToToday} className="rounded-none h-8 text-xs px-3">
              Today
            </Button>
            <Button variant="ghost" size="sm" onClick={goToNextWeek} className="rounded-l-none h-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1.5">
            <Input
              type="date"
              value={jumpDate}
              onChange={(e) => setJumpDate(e.target.value)}
              className="h-8 w-[150px] text-xs"
            />
            <Button variant="outline" size="sm" onClick={handleJumpToWeek} className="h-8 text-xs">
              Jump
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6 hidden sm:block" />

          <div className="flex items-center gap-1.5">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAutoFill}
                  disabled={autoFilling}
                  className="h-8 text-xs gap-1.5"
                >
                  {autoFilling ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  )}
                  Auto-fill
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-[220px]">
                  Uses analytics to generate a recommended week of lessons, prioritising weak areas for each class
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyPreviousWeek}
                  className="h-8 text-xs gap-1.5"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy Prev Week
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Copy the previous week&apos;s plan into this week</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="sm" onClick={handlePrint} className="h-8 text-xs gap-1.5">
                  <Printer className="h-3.5 w-3.5" />
                  Print
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Print as a clean timetable</p>
              </TooltipContent>
            </Tooltip>

            <Button
              variant={saveStatus === 'saved' ? 'outline' : 'default'}
              size="sm"
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className={cn(
                'h-8 text-xs gap-1.5',
                saveStatus === 'saved' && 'text-green-400 border-green-500/30',
              )}
            >
              {saveStatus === 'saving' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : saveStatus === 'saved' ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              {saveStatus === 'saved' ? 'Saved' : 'Save'}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="h-8 text-xs gap-1.5 ml-auto lg:hidden"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Lessons
          </Button>
        </div>

        {/* Week Grid */}
        <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="min-w-[700px]">
            {/* Day headers */}
            <div className="grid grid-cols-[70px_repeat(5,1fr)] gap-1.5 mb-1.5">
              <div />
              {DAYS.map((day, i) => (
                <div
                  key={day}
                  className="text-center rounded-lg bg-muted/50 py-2 px-1"
                >
                  <div className="text-xs font-semibold text-foreground">{day}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {formatDayHeader(currentMonday, i)}
                  </div>
                </div>
              ))}
            </div>

            {/* Period rows */}
            {PERIODS.map((period, pIdx) => (
              <div key={period} className="grid grid-cols-[70px_repeat(5,1fr)] gap-1.5 mb-1.5">
                <div className="flex items-center justify-center rounded-lg bg-muted/30 px-1">
                  <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">
                    {period}
                  </span>
                </div>
                {DAYS.map((_, dIdx) => {
                  const slotKey = `${dIdx}-${pIdx}`
                  const slot = plan.slots[slotKey]
                  const lesson = slot?.lessonId ? lessonMap.get(slot.lessonId) : undefined

                  return (
                    <SlotCell
                      key={slotKey}
                      slotKey={slotKey}
                      slot={slot}
                      lesson={lesson}
                      colorMode={colorMode}
                      onDrop={handleDrop}
                      onClick={handleSlotClick}
                      onClear={handleSlotClear}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Color Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
            {colorMode === 'topic' ? 'Topics' : 'Classes'}:
          </span>
          {colorMode === 'topic'
            ? Object.entries(TOPIC_BADGE_COLORS).map(([topic, cls]) => (
                <Badge key={topic} variant="outline" className={cn('text-[9px]', cls)}>
                  {topic}
                </Badge>
              ))
            : CLASS_NAMES.map((cls) => (
                <Badge
                  key={cls}
                  variant="outline"
                  className={cn(
                    'text-[9px]',
                    CLASS_COLORS[cls]?.replace('/15', '/10').replace('/30', '/20') || '',
                  )}
                >
                  {cls}
                </Badge>
              ))}
        </div>
      </div>

      {/* ── Sidebar: Available Lessons ─────────────────────────────────────── */}
      <div
        className={cn(
          'border-l border-border bg-card/50 transition-all duration-200 overflow-hidden',
          sidebarOpen ? 'w-72 shrink-0' : 'w-0',
          // On mobile, overlay
          'fixed right-0 top-14 bottom-0 z-30 lg:relative lg:top-0 lg:z-auto',
          !sidebarOpen && 'lg:w-0',
        )}
      >
        <div className="w-72 h-full flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-primary" />
                Lesson Plans
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>

            <div className="relative mb-2">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search lessons..."
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                className="pl-8 h-8 text-xs"
              />
              {sidebarSearch && (
                <button
                  onClick={() => setSidebarSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </button>
              )}
            </div>

            <Select value={sidebarTopic} onValueChange={setSidebarTopic}>
              <SelectTrigger className="h-8 text-xs">
                <Filter className="h-3 w-3 mr-1 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                {TOPICS.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredLessons.length === 0 ? (
              <div className="text-center py-8 text-xs text-muted-foreground">
                No lessons match your filter.
              </div>
            ) : (
              <>
                <p className="text-[10px] text-muted-foreground mb-1">
                  {filteredLessons.length} lesson{filteredLessons.length !== 1 ? 's' : ''} — drag to grid
                </p>
                {filteredLessons.map((lesson) => (
                  <SidebarLessonCard key={lesson.id} lesson={lesson} />
                ))}
              </>
            )}
          </div>

          {/* Weak Areas Summary */}
          <div className="border-t border-border p-3">
            <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlertTriangle className="h-3 w-3 text-amber-400" />
              Weak Areas (Analytics)
            </h4>
            <div className="space-y-1 max-h-[120px] overflow-y-auto">
              {MOCK_WEAK_AREAS.filter((w) => w.severity === 'critical')
                .slice(0, 5)
                .map((w, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-[10px] rounded px-2 py-1 bg-red-500/5 border border-red-500/10"
                  >
                    <span className="text-foreground truncate">{w.className}</span>
                    <span className="text-red-400 shrink-0 ml-2">
                      {w.area} ({w.avgScore}%)
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar toggle for desktop when closed */}
      {!sidebarOpen && (
        <div className="hidden lg:flex flex-col items-center py-4 px-1 border-l border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="h-8 w-8 p-0"
          >
            <BookOpen className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Slot Edit Dialog */}
      <SlotEditDialog
        open={editingSlot !== null}
        onClose={() => setEditingSlot(null)}
        slotKey={editingSlot || '0-0'}
        slot={editingSlot ? plan.slots[editingSlot] : undefined}
        onSave={handleSlotSave}
        onDelete={handleSlotDelete}
      />
    </div>
  )
}
