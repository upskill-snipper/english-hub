'use client'

import { useState, useMemo, useCallback, useRef } from 'react'
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Filter,
  Printer,
  Clock,
  GripVertical,
  BookOpen,
  FileText,
  CalendarCheck,
  LayoutGrid,
  List,
  Timer,
  Plus,
  X,
  Trash2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
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
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog' // shadcn dialog
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ExamCountdown } from '@/components/school/ExamCountdown'
import {
  type ExamDate,
  examDates,
  getExamsSorted,
  daysUntil,
  urgencyColor,
  BOARDS,
} from '@/data/exam-dates'

// ── Constants ────────────────────────────────────────────────────────────────

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const

const URGENCY_DOT: Record<string, string> = {
  green: 'bg-emerald-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
}

const URGENCY_BG: Record<string, string> = {
  green: 'bg-emerald-500/10 dark:bg-emerald-950/30',
  amber: 'bg-amber-500/10',
  red: 'bg-red-500/10 dark:bg-red-950/30',
}

// ── Local types ──────────────────────────────────────────────────────────────

interface LessonSlot {
  id: string
  date: string // ISO
  title: string
  subject: string
  period?: string
}

interface AssignmentDue {
  id: string
  date: string
  title: string
  className: string
}

interface RevisionWeek {
  weekStart: string
  weekEnd: string
  weekNumber: number
  topics: string[]
  examsThisWeek: ExamDate[]
}

// ── Page component ───────────────────────────────────────────────────────────

export default function CalendarPage() {
  // View state
  const [view, setView] = useState<'month' | 'week'>('month')
  const [revisionMode, setRevisionMode] = useState(false)
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 4, 1)) // May 2026

  // Filters
  const [boardFilter, setBoardFilter] = useState<string>('all')
  const [classFilter, setClassFilter] = useState<string>('all')

  // Lesson slots (local state — in production this would come from a database)
  const [lessons, setLessons] = useState<LessonSlot[]>([])
  const [assignments, setAssignments] = useState<AssignmentDue[]>([
    { id: 'a1', date: '2026-05-15', title: 'Mock Paper 1 — Creative Writing', className: 'Year 11 Set 1' },
    { id: 'a2', date: '2026-05-08', title: 'Poetry Anthology Essay', className: 'Year 11 Set 2' },
    { id: 'a3', date: '2026-05-22', title: 'Macbeth Revision Booklet', className: 'Year 10 Set 1' },
  ])

  // Drag state
  const dragRef = useRef<{ lessonId: string } | null>(null)

  // Add lesson dialog
  const [addLessonOpen, setAddLessonOpen] = useState(false)
  const [addLessonDate, setAddLessonDate] = useState('')
  const [addLessonTitle, setAddLessonTitle] = useState('')
  const [addLessonSubject, setAddLessonSubject] = useState('')
  const [addLessonPeriod, setAddLessonPeriod] = useState('')

  // ── Filtered exams ──────────────────────────────────────────────────────
  const filteredExams = useMemo(() => {
    let exams = getExamsSorted(boardFilter !== 'all' ? boardFilter : undefined)
    // classFilter could map to a board in a real app; here it's illustrative
    return exams
  }, [boardFilter])

  // ── Navigation ──────────────────────────────────────────────────────────
  const navigate = useCallback(
    (delta: number) => {
      setCurrentDate((d) => {
        const next = new Date(d)
        if (view === 'month') {
          next.setMonth(next.getMonth() + delta)
        } else {
          next.setDate(next.getDate() + delta * 7)
        }
        return next
      })
    },
    [view],
  )

  const goToday = useCallback(() => setCurrentDate(new Date()), [])

  // ── Month grid helpers ──────────────────────────────────────────────────
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthDays = useMemo(() => {
    const firstDay = new Date(year, month, 1)
    // Monday=0 … Sunday=6
    const startDow = (firstDay.getDay() + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const cells: (Date | null)[] = []
    // Leading blanks
    for (let i = 0; i < startDow; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
    // Trailing blanks to fill last row
    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [year, month])

  // ── Week view helpers ───────────────────────────────────────────────────
  const weekDays = useMemo(() => {
    const d = new Date(currentDate)
    const dow = (d.getDay() + 6) % 7 // Monday=0
    d.setDate(d.getDate() - dow)
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(d)
      day.setDate(day.getDate() + i)
      return day
    })
  }, [currentDate])

  // ── Revision countdown mode ─────────────────────────────────────────────
  const revisionWeeks = useMemo((): RevisionWeek[] => {
    if (!revisionMode) return []

    const upcoming = filteredExams.filter((e) => daysUntil(e.date) > 0)
    if (upcoming.length === 0) return []

    const firstExam = new Date(upcoming[0].date + 'T00:00:00')
    const lastExam = new Date(upcoming[upcoming.length - 1].date + 'T00:00:00')

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Start from this Monday
    const start = new Date(today)
    const dow = (start.getDay() + 6) % 7
    start.setDate(start.getDate() - dow)

    const weeks: RevisionWeek[] = []
    const cursor = new Date(start)
    let weekNum = 1

    while (cursor <= lastExam) {
      const weekStart = new Date(cursor)
      const weekEnd = new Date(cursor)
      weekEnd.setDate(weekEnd.getDate() + 6)

      const examsThisWeek = upcoming.filter((e) => {
        const d = new Date(e.date + 'T00:00:00')
        return d >= weekStart && d <= weekEnd
      })

      // Generate revision topics based on what exams are coming soon
      const topics = generateRevisionTopics(weekNum, upcoming, weekStart)

      weeks.push({
        weekStart: toIso(weekStart),
        weekEnd: toIso(weekEnd),
        weekNumber: weekNum,
        topics,
        examsThisWeek,
      })

      cursor.setDate(cursor.getDate() + 7)
      weekNum++
    }

    return weeks
  }, [revisionMode, filteredExams])

  // ── Lookup helpers ──────────────────────────────────────────────────────
  function examsOnDate(dateStr: string): ExamDate[] {
    return filteredExams.filter((e) => e.date === dateStr)
  }

  function lessonsOnDate(dateStr: string): LessonSlot[] {
    return lessons.filter((l) => l.date === dateStr)
  }

  function assignmentsOnDate(dateStr: string): AssignmentDue[] {
    return assignments.filter((a) => a.date === dateStr)
  }

  // ── Drag handlers ──────────────────────────────────────────────────────
  function onDragStart(lessonId: string) {
    dragRef.current = { lessonId }
  }

  function onDrop(dateStr: string) {
    if (!dragRef.current) return
    setLessons((prev) =>
      prev.map((l) =>
        l.id === dragRef.current!.lessonId ? { ...l, date: dateStr } : l,
      ),
    )
    dragRef.current = null
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  // ── Add lesson ─────────────────────────────────────────────────────────
  function openAddLesson(dateStr: string) {
    setAddLessonDate(dateStr)
    setAddLessonTitle('')
    setAddLessonSubject('')
    setAddLessonPeriod('')
    setAddLessonOpen(true)
  }

  function handleAddLesson() {
    if (!addLessonTitle.trim() || !addLessonDate) return
    setLessons((prev) => [
      ...prev,
      {
        id: `lesson-${Date.now()}`,
        date: addLessonDate,
        title: addLessonTitle.trim(),
        subject: addLessonSubject.trim() || 'English',
        period: addLessonPeriod.trim() || undefined,
      },
    ])
    setAddLessonOpen(false)
  }

  function removeLesson(id: string) {
    setLessons((prev) => prev.filter((l) => l.id !== id))
  }

  // ── Print ──────────────────────────────────────────────────────────────
  function handlePrint() {
    window.print()
  }

  // ── Render ─────────────────────────────────────────────────────────────
  const title =
    view === 'month'
      ? `${MONTH_NAMES[month]} ${year}`
      : `Week of ${weekDays[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${weekDays[6].toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`

  return (
    <div className="space-y-6 print:space-y-4">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Exam Calendar</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Plan revision, track exams and manage lesson schedules
          </p>
        </div>
        <div className="flex items-center gap-2 print:hidden">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-1.5" />
            Print
          </Button>
          <Button
            variant={revisionMode ? 'default' : 'outline'}
            size="sm"
            onClick={() => setRevisionMode((v) => !v)}
          >
            <Timer className="h-4 w-4 mr-1.5" />
            Revision Mode
          </Button>
        </div>
      </div>

      {/* ── Countdown widget ───────────────────────────────────────────── */}
      <ExamCountdown
        board={boardFilter !== 'all' ? boardFilter : undefined}
        variant="full"
      />

      {/* ── Controls ───────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={goToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={() => navigate(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h2 className="ml-2 text-lg font-semibold">{title}</h2>
        </div>

        {/* Filters + view toggle */}
        <div className="flex items-center gap-2 flex-wrap">
          <Select value={boardFilter} onValueChange={(v) => setBoardFilter(v ?? 'all')}>
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <Filter className="h-3 w-3 mr-1" />
              <SelectValue placeholder="Exam Board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boards</SelectItem>
              {BOARDS.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={classFilter} onValueChange={(v) => setClassFilter(v ?? 'all')}>
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="y11-set1">Year 11 Set 1</SelectItem>
              <SelectItem value="y11-set2">Year 11 Set 2</SelectItem>
              <SelectItem value="y10-set1">Year 10 Set 1</SelectItem>
            </SelectContent>
          </Select>

          <Tabs value={view} onValueChange={(v) => setView(v as 'month' | 'week')}>
            <TabsList className="h-8">
              <TabsTrigger value="month" className="text-xs px-2.5">
                <LayoutGrid className="h-3 w-3 mr-1" />
                Month
              </TabsTrigger>
              <TabsTrigger value="week" className="text-xs px-2.5">
                <List className="h-3 w-3 mr-1" />
                Week
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Print-only title */}
      <h2 className="hidden print:block text-xl font-bold text-center">{title}</h2>

      {/* ── Revision countdown mode ────────────────────────────────────── */}
      {revisionMode && revisionWeeks.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarCheck className="h-5 w-5 text-primary" />
              Revision Countdown Plan
            </CardTitle>
            <CardDescription>
              Weekly revision topics leading up to your exams
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {revisionWeeks.map((week) => (
                <div
                  key={week.weekStart}
                  className={cn(
                    'px-5 py-3.5',
                    week.examsThisWeek.length > 0 && 'bg-red-500/5 dark:bg-red-950/20',
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs tabular-nums">
                        Week {week.weekNumber}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatWeekRange(week.weekStart, week.weekEnd)}
                      </span>
                    </div>
                    {week.examsThisWeek.length > 0 && (
                      <Badge variant="destructive" className="text-[10px]">
                        {week.examsThisWeek.length} exam{week.examsThisWeek.length > 1 ? 's' : ''}
                      </Badge>
                    )}
                  </div>

                  {/* Exams this week */}
                  {week.examsThisWeek.length > 0 && (
                    <div className="mb-2 space-y-1">
                      {week.examsThisWeek.map((exam) => (
                        <div
                          key={exam.id}
                          className="flex items-center gap-2 text-xs text-red-700 dark:text-red-300 dark:text-red-400"
                        >
                          <FileText className="h-3 w-3 shrink-0" />
                          <span className="font-medium">{exam.board}</span>
                          <span>{exam.paper}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Revision topics */}
                  <ul className="space-y-1">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <BookOpen className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Calendar grid ──────────────────────────────────────────────── */}
      {view === 'month' ? (
        <MonthView
          days={monthDays}
          examsOnDate={examsOnDate}
          lessonsOnDate={lessonsOnDate}
          assignmentsOnDate={assignmentsOnDate}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onAddLesson={openAddLesson}
          onRemoveLesson={removeLesson}
        />
      ) : (
        <WeekView
          days={weekDays}
          examsOnDate={examsOnDate}
          lessonsOnDate={lessonsOnDate}
          assignmentsOnDate={assignmentsOnDate}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onAddLesson={openAddLesson}
          onRemoveLesson={removeLesson}
        />
      )}

      {/* ── Add lesson dialog ──────────────────────────────────────────── */}
      <Dialog open={addLessonOpen} onOpenChange={setAddLessonOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Lesson</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="lesson-title">Title</Label>
              <Input
                id="lesson-title"
                value={addLessonTitle}
                onChange={(e) => setAddLessonTitle(e.target.value)}
                placeholder="e.g. Macbeth Act 3 Analysis"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="lesson-subject">Subject</Label>
                <Input
                  id="lesson-subject"
                  value={addLessonSubject}
                  onChange={(e) => setAddLessonSubject(e.target.value)}
                  placeholder="English"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lesson-period">Period (optional)</Label>
                <Input
                  id="lesson-period"
                  value={addLessonPeriod}
                  onChange={(e) => setAddLessonPeriod(e.target.value)}
                  placeholder="P3"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Date: {addLessonDate ? new Date(addLessonDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : ''}
            </p>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" size="sm" />}>
              Cancel
            </DialogClose>
            <Button size="sm" onClick={handleAddLesson} disabled={!addLessonTitle.trim()}>
              Add Lesson
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// ── Month view ───────────────────────────────────────────────────────────────

function MonthView({
  days,
  examsOnDate,
  lessonsOnDate,
  assignmentsOnDate,
  onDragStart,
  onDrop,
  onDragOver,
  onAddLesson,
  onRemoveLesson,
}: {
  days: (Date | null)[]
  examsOnDate: (d: string) => ExamDate[]
  lessonsOnDate: (d: string) => LessonSlot[]
  assignmentsOnDate: (d: string) => AssignmentDue[]
  onDragStart: (id: string) => void
  onDrop: (d: string) => void
  onDragOver: (e: React.DragEvent) => void
  onAddLesson: (d: string) => void
  onRemoveLesson: (id: string) => void
}) {
  const todayStr = toIso(new Date())

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-7 border-b border-border">
        {DAY_LABELS.map((d) => (
          <div
            key={d}
            className="py-2 text-center text-xs font-medium text-muted-foreground border-r border-border last:border-r-0"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 auto-rows-[minmax(100px,1fr)] print:auto-rows-[minmax(80px,1fr)]">
        {days.map((day, i) => {
          if (!day) {
            return (
              <div
                key={`blank-${i}`}
                className="border-r border-b border-border last:border-r-0 bg-muted/20"
              />
            )
          }

          const iso = toIso(day)
          const isToday = iso === todayStr
          const exams = examsOnDate(iso)
          const lessonsList = lessonsOnDate(iso)
          const assignmentsList = assignmentsOnDate(iso)

          return (
            <div
              key={iso}
              className={cn(
                'border-r border-b border-border last:border-r-0 p-1.5 overflow-hidden relative group',
                isToday && 'bg-primary/5',
                exams.length > 0 && 'bg-red-500/10/40 dark:bg-red-950/10',
              )}
              onDragOver={onDragOver}
              onDrop={() => onDrop(iso)}
            >
              {/* Day number */}
              <div className="flex items-center justify-between mb-1">
                <span
                  className={cn(
                    'text-xs tabular-nums',
                    isToday &&
                      'bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold',
                    !isToday && 'text-muted-foreground',
                  )}
                >
                  {day.getDate()}
                </span>
                <button
                  onClick={() => onAddLesson(iso)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity print:hidden"
                  title="Add lesson"
                >
                  <Plus className="h-3 w-3 text-muted-foreground hover:text-primary" />
                </button>
              </div>

              {/* Exams */}
              {exams.map((exam) => {
                const days2 = daysUntil(exam.date)
                const colour = urgencyColor(days2)
                return (
                  <div
                    key={exam.id}
                    className={cn(
                      'text-[10px] leading-tight px-1 py-0.5 rounded mb-0.5 truncate font-medium',
                      URGENCY_BG[colour],
                      'text-foreground',
                    )}
                    title={`${exam.board} — ${exam.paper}`}
                  >
                    <span className={cn('inline-block w-1.5 h-1.5 rounded-full mr-1', URGENCY_DOT[colour])} />
                    {exam.board} {exam.subject.includes('Literature') ? 'Lit' : 'Lang'} P{exam.paper.match(/\d/) || '?'}
                  </div>
                )
              })}

              {/* Lessons (draggable) */}
              {lessonsList.map((lesson) => (
                <div
                  key={lesson.id}
                  draggable
                  onDragStart={() => onDragStart(lesson.id)}
                  className="text-[10px] leading-tight px-1 py-0.5 rounded mb-0.5 truncate bg-blue-500/10 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 cursor-grab active:cursor-grabbing flex items-center gap-0.5 group/lesson"
                  title={lesson.title}
                >
                  <GripVertical className="h-2.5 w-2.5 shrink-0 opacity-50" />
                  <span className="truncate flex-1">{lesson.title}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); onRemoveLesson(lesson.id) }}
                    className="opacity-0 group-hover/lesson:opacity-100 shrink-0 print:hidden"
                  >
                    <X className="h-2.5 w-2.5 text-blue-500 hover:text-red-500" />
                  </button>
                </div>
              ))}

              {/* Assignments */}
              {assignmentsList.map((a) => (
                <div
                  key={a.id}
                  className="text-[10px] leading-tight px-1 py-0.5 rounded mb-0.5 truncate bg-purple-500/10 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300"
                  title={`Due: ${a.title} (${a.className})`}
                >
                  <FileText className="inline h-2.5 w-2.5 mr-0.5" />
                  {a.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </Card>
  )
}

// ── Week view ────────────────────────────────────────────────────────────────

function WeekView({
  days,
  examsOnDate,
  lessonsOnDate,
  assignmentsOnDate,
  onDragStart,
  onDrop,
  onDragOver,
  onAddLesson,
  onRemoveLesson,
}: {
  days: Date[]
  examsOnDate: (d: string) => ExamDate[]
  lessonsOnDate: (d: string) => LessonSlot[]
  assignmentsOnDate: (d: string) => AssignmentDue[]
  onDragStart: (id: string) => void
  onDrop: (d: string) => void
  onDragOver: (e: React.DragEvent) => void
  onAddLesson: (d: string) => void
  onRemoveLesson: (id: string) => void
}) {
  const todayStr = toIso(new Date())

  return (
    <div className="space-y-2">
      {days.map((day) => {
        const iso = toIso(day)
        const isToday = iso === todayStr
        const exams = examsOnDate(iso)
        const lessonsList = lessonsOnDate(iso)
        const assignmentsList = assignmentsOnDate(iso)

        return (
          <Card
            key={iso}
            className={cn(
              'overflow-hidden',
              isToday && 'ring-2 ring-primary/30',
              exams.length > 0 && 'border-red-500/30 dark:border-red-800',
            )}
            onDragOver={onDragOver}
            onDrop={() => onDrop(iso)}
          >
            <div className="flex items-start gap-4 p-4">
              {/* Date badge */}
              <div
                className={cn(
                  'flex flex-col items-center justify-center shrink-0 w-14 h-14 rounded-lg',
                  isToday
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                <span className="text-[10px] uppercase font-medium">
                  {DAY_LABELS[(day.getDay() + 6) % 7]}
                </span>
                <span className="text-lg font-bold tabular-nums leading-none">
                  {day.getDate()}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* Exams */}
                {exams.map((exam) => {
                  const d2 = daysUntil(exam.date)
                  const colour = urgencyColor(d2)
                  return (
                    <div
                      key={exam.id}
                      className={cn(
                        'flex items-start gap-3 p-2.5 rounded-lg border',
                        URGENCY_BG[colour],
                        colour === 'red'
                          ? 'border-red-500/30 dark:border-red-800'
                          : colour === 'amber'
                            ? 'border-amber-500/30'
                            : 'border-emerald-500/30 dark:border-emerald-800',
                      )}
                    >
                      <span className={cn('mt-0.5 h-2.5 w-2.5 rounded-full shrink-0', URGENCY_DOT[colour])} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          {exam.board} — {exam.subject}
                        </p>
                        <p className="text-xs text-muted-foreground">{exam.paper}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          {exam.time === 'morning' ? '9:00 AM' : '1:30 PM'} · {exam.duration} min
                        </p>
                      </div>
                      <Badge className="shrink-0 ml-auto tabular-nums" variant="outline">
                        {d2 <= 0 ? 'Today' : `${d2}d`}
                      </Badge>
                    </div>
                  )
                })}

                {/* Lessons */}
                {lessonsList.map((lesson) => (
                  <div
                    key={lesson.id}
                    draggable
                    onDragStart={() => onDragStart(lesson.id)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 dark:bg-blue-950/30 border border-blue-500/30 dark:border-blue-800 cursor-grab active:cursor-grabbing group/lesson"
                  >
                    <GripVertical className="h-4 w-4 text-blue-400 shrink-0" />
                    <BookOpen className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200 dark:text-blue-200 truncate">
                        {lesson.title}
                      </p>
                      {lesson.period && (
                        <span className="text-[10px] text-blue-600 dark:text-blue-400">
                          {lesson.period}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => onRemoveLesson(lesson.id)}
                      className="opacity-0 group-hover/lesson:opacity-100 print:hidden"
                    >
                      <Trash2 className="h-3.5 w-3.5 text-blue-400 hover:text-red-500" />
                    </button>
                  </div>
                ))}

                {/* Assignments */}
                {assignmentsList.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10 dark:bg-purple-950/30 border border-purple-500/30 dark:border-purple-800"
                  >
                    <FileText className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-purple-800 dark:text-purple-200 dark:text-purple-200 truncate">
                        {a.title}
                      </p>
                      <span className="text-[10px] text-purple-600 dark:text-purple-400">
                        Due — {a.className}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Empty state */}
                {exams.length === 0 && lessonsList.length === 0 && assignmentsList.length === 0 && (
                  <p className="text-xs text-muted-foreground italic">No events</p>
                )}
              </div>

              {/* Add button */}
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 h-8 w-8 print:hidden"
                onClick={() => onAddLesson(iso)}
                title="Add lesson"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

// ── Utility functions ────────────────────────────────────────────────────────

function toIso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatWeekRange(start: string, end: string): string {
  const s = new Date(start + 'T00:00:00')
  const e = new Date(end + 'T00:00:00')
  return `${s.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${e.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`
}

function generateRevisionTopics(
  weekNumber: number,
  upcoming: ExamDate[],
  weekStart: Date,
): string[] {
  // Generate contextual revision suggestions based on proximity to exams
  const topics: string[] = []
  const examsSoon = upcoming.filter((e) => {
    const examDate = new Date(e.date + 'T00:00:00')
    const diff = Math.ceil((examDate.getTime() - weekStart.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 && diff <= 21
  })

  for (const exam of examsSoon) {
    const examDate = new Date(exam.date + 'T00:00:00')
    const daysAway = Math.ceil(
      (examDate.getTime() - weekStart.getTime()) / (1000 * 60 * 60 * 24),
    )

    if (exam.subject.includes('Language')) {
      if (daysAway <= 7) {
        topics.push(`${exam.board} Language: Timed practice papers under exam conditions`)
        topics.push(`${exam.board} Language: Review mark schemes and examiner reports`)
      } else if (daysAway <= 14) {
        topics.push(`${exam.board} Language: Practice creative/transactional writing`)
        topics.push(`${exam.board} Language: Unseen text analysis techniques`)
      } else {
        topics.push(`${exam.board} Language: Revise reading comprehension strategies`)
      }
    }

    if (exam.subject.includes('Literature')) {
      if (daysAway <= 7) {
        topics.push(`${exam.board} Literature: Full timed essays on key texts`)
        topics.push(`${exam.board} Literature: Quote revision and exam technique`)
      } else if (daysAway <= 14) {
        topics.push(`${exam.board} Literature: Character and theme analysis essays`)
        topics.push(`${exam.board} Literature: Poetry comparison practice`)
      } else {
        topics.push(`${exam.board} Literature: Revise set text plot, characters and themes`)
      }
    }
  }

  if (topics.length === 0) {
    topics.push('General revision: Spelling, punctuation and grammar review')
    topics.push('Build exam stamina with extended writing practice')
  }

  return topics
}
