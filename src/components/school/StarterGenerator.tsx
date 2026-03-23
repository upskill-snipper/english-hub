'use client'

import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import {
  Shuffle,
  Filter,
  Maximize2,
  Minimize2,
  Timer,
  Printer,
  Play,
  Pause,
  RotateCcw,
  X,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  starterActivities,
  STARTER_ACTIVITY_TYPES,
  SET_TEXTS,
  EXAM_BOARDS,
  YEAR_GROUPS,
  SKILLS,
  type StarterActivity,
} from '@/data/starter-activities'

// ─── Timer Hook ──────────────────────────────────────────────────────────────

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            setIsRunning(false)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, seconds])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(
    (newSeconds?: number) => {
      setIsRunning(false)
      setSeconds(newSeconds ?? initialSeconds)
    },
    [initialSeconds]
  )

  return { seconds, isRunning, start, pause, reset }
}

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ─── Filter Panel ────────────────────────────────────────────────────────────

interface FilterState {
  type: string
  text: string
  examBoard: string
  yearGroup: string
  skill: string
}

const INITIAL_FILTERS: FilterState = {
  type: 'all',
  text: 'all',
  examBoard: 'all',
  yearGroup: 'all',
  skill: 'all',
}

function FilterPanel({
  filters,
  onChange,
  matchCount,
}: {
  filters: FilterState
  onChange: (f: FilterState) => void
  matchCount: number
}) {
  const [open, setOpen] = useState(false)

  const hasActiveFilters = Object.values(filters).some((v) => v !== 'all')

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted/50"
      >
        <span className="flex items-center gap-2">
          <Filter className="size-4 text-muted-foreground" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-1">
              {matchCount} activit{matchCount === 1 ? 'y' : 'ies'}
            </Badge>
          )}
        </span>
        {open ? (
          <ChevronUp className="size-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Activity Type
            </label>
            <Select
              value={filters.type}
              onValueChange={(v) => onChange({ ...filters, type: v })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {STARTER_ACTIVITY_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Set Text
            </label>
            <Select
              value={filters.text}
              onValueChange={(v) => onChange({ ...filters, text: v })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All texts</SelectItem>
                {SET_TEXTS.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t === 'general' ? 'General (no set text)' : t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Exam Board
            </label>
            <Select
              value={filters.examBoard}
              onValueChange={(v) => onChange({ ...filters, examBoard: v })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All boards</SelectItem>
                {EXAM_BOARDS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Year Group
            </label>
            <Select
              value={filters.yearGroup}
              onValueChange={(v) => onChange({ ...filters, yearGroup: v })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All years</SelectItem>
                {YEAR_GROUPS.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Skill
            </label>
            <Select
              value={filters.skill}
              onValueChange={(v) => onChange({ ...filters, skill: v })}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All skills</SelectItem>
                {SKILLS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <div className="flex items-end sm:col-span-2 lg:col-span-3 xl:col-span-5">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onChange(INITIAL_FILTERS)}
              >
                <RotateCcw className="size-3.5" />
                Clear filters
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Timer Overlay ───────────────────────────────────────────────────────────

function TimerOverlay({
  durationMinutes,
  onClose,
}: {
  durationMinutes: number
  onClose: () => void
}) {
  const [selectedMinutes, setSelectedMinutes] = useState(durationMinutes)
  const { seconds, isRunning, start, pause, reset } = useCountdown(
    selectedMinutes * 60
  )

  const progress = 1 - seconds / (selectedMinutes * 60)
  const isFinished = seconds === 0 && !isRunning

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-6 rounded-2xl bg-card p-10 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        <p className="text-sm font-medium text-muted-foreground">
          Starter Timer
        </p>

        {/* Circular progress */}
        <div className="relative flex size-48 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-muted/30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={2 * Math.PI * 45 * (1 - progress)}
              strokeLinecap="round"
              className={cn(
                'transition-all duration-1000',
                isFinished
                  ? 'text-destructive'
                  : seconds <= 30
                    ? 'text-orange-500'
                    : 'text-primary'
              )}
            />
          </svg>
          <span
            className={cn(
              'text-5xl font-bold tabular-nums tracking-tight',
              isFinished && 'animate-pulse text-destructive'
            )}
          >
            {formatTime(seconds)}
          </span>
        </div>

        {isFinished && (
          <p className="text-lg font-semibold text-destructive">Time is up!</p>
        )}

        {/* Duration selector */}
        <div className="flex items-center gap-2">
          {[2, 3, 4, 5].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setSelectedMinutes(m)
                reset(m * 60)
              }}
              className={cn(
                'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                selectedMinutes === m
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {m} min
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {!isRunning && seconds > 0 && (
            <Button onClick={start} size="lg">
              <Play className="size-4" />
              {seconds === selectedMinutes * 60 ? 'Start' : 'Resume'}
            </Button>
          )}
          {isRunning && (
            <Button onClick={pause} variant="secondary" size="lg">
              <Pause className="size-4" />
              Pause
            </Button>
          )}
          <Button
            onClick={() => reset(selectedMinutes * 60)}
            variant="outline"
            size="lg"
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

// ─── Fullscreen View ─────────────────────────────────────────────────────────

function FullscreenView({
  activity,
  onClose,
  onTimer,
  showAnswers,
  onToggleAnswers,
}: {
  activity: StarterActivity
  onClose: () => void
  onTimer: () => void
  showAnswers: boolean
  onToggleAnswers: () => void
}) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/60 px-6 py-3">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{activity.type}</Badge>
          {activity.text && activity.text !== 'general' && (
            <Badge variant="outline">{activity.text}</Badge>
          )}
          <Badge variant="outline">
            <Timer className="mr-1 size-3" />
            {activity.duration} min
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onTimer}>
            <Timer className="size-3.5" />
            Timer
          </Button>
          <Button variant="outline" size="sm" onClick={onToggleAnswers}>
            {showAnswers ? (
              <EyeOff className="size-3.5" />
            ) : (
              <Eye className="size-3.5" />
            )}
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
          </Button>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <Minimize2 className="size-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center overflow-auto p-8">
        <div className="w-full max-w-4xl space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {activity.title}
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl bg-muted/40 p-8">
            <p className="whitespace-pre-line text-xl leading-relaxed lg:text-2xl">
              {activity.content}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="whitespace-pre-line text-lg text-muted-foreground lg:text-xl">
              {activity.instructions}
            </p>
          </div>

          {showAnswers && activity.answers && (
            <div className="mx-auto max-w-3xl rounded-xl border-2 border-primary/20 bg-primary/5 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Answers / Guidance
              </p>
              <p className="whitespace-pre-line text-lg leading-relaxed">
                {activity.answers}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Activity Card ───────────────────────────────────────────────────────────

function ActivityCard({
  activity,
  onFullscreen,
  onTimer,
}: {
  activity: StarterActivity
  onFullscreen: () => void
  onTimer: () => void
}) {
  const [showAnswers, setShowAnswers] = useState(false)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{activity.type}</Badge>
              {activity.text && activity.text !== 'general' && (
                <Badge variant="outline">{activity.text}</Badge>
              )}
              <Badge variant="outline">
                <Timer className="mr-1 size-3" />
                {activity.duration} min
              </Badge>
            </div>
            <CardTitle className="text-lg">{activity.title}</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onTimer}
              title="Start timer"
            >
              <Timer className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onFullscreen}
              title="Full-screen projectable view"
            >
              <Maximize2 className="size-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-muted/40 p-4">
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {activity.content}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Instructions
          </p>
          <p className="whitespace-pre-line text-sm text-muted-foreground">
            {activity.instructions}
          </p>
        </div>

        {activity.answers && (
          <div>
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
            >
              {showAnswers ? (
                <EyeOff className="size-3" />
              ) : (
                <Eye className="size-3" />
              )}
              {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>
            {showAnswers && (
              <div className="mt-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="whitespace-pre-line text-sm leading-relaxed">
                  {activity.answers}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {activity.skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
          {activity.examBoard.map((b) => (
            <span key={b}>{b}</span>
          ))}
          <span className="text-border">|</span>
          {activity.yearGroup.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Print View ──────────────────────────────────────────────────────────────

function handlePrint(activity: StarterActivity) {
  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const html = `<!DOCTYPE html>
<html>
<head>
  <title>${activity.title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, serif; padding: 2cm; color: #1a1a1a; }
    .type { font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #666; margin-bottom: 8px; }
    h1 { font-size: 24px; margin-bottom: 16px; }
    .meta { font-size: 12px; color: #888; margin-bottom: 24px; }
    .content { font-size: 16px; line-height: 1.8; background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; white-space: pre-line; }
    .instructions { font-size: 14px; line-height: 1.6; margin-bottom: 24px; white-space: pre-line; }
    .instructions-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 6px; }
    .writing-lines { margin-top: 24px; }
    .writing-line { border-bottom: 1px solid #ccc; height: 36px; }
    .timer { font-size: 12px; color: #888; text-align: right; margin-top: 16px; }
    @media print { body { padding: 1.5cm; } }
  </style>
</head>
<body>
  <div class="type">${activity.type}</div>
  <h1>${activity.title}</h1>
  <div class="meta">${activity.text && activity.text !== 'general' ? activity.text + ' &bull; ' : ''}${activity.duration} minutes</div>
  <div class="content">${activity.content}</div>
  <div class="instructions-label">Instructions</div>
  <div class="instructions">${activity.instructions}</div>
  <div class="writing-lines">
    ${Array.from({ length: 12 }, () => '<div class="writing-line"></div>').join('')}
  </div>
  <div class="timer">Time allowed: ${activity.duration} minutes</div>
  <script>window.print();</script>
</body>
</html>`

  printWindow.document.write(html)
  printWindow.document.close()
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function StarterGenerator() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS)
  const [currentActivity, setCurrentActivity] =
    useState<StarterActivity | null>(null)
  const [fullscreen, setFullscreen] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showAnswersFullscreen, setShowAnswersFullscreen] = useState(false)

  // Filter activities
  const filtered = useMemo(() => {
    return starterActivities.filter((a) => {
      if (filters.type !== 'all' && a.type !== filters.type) return false
      if (filters.text !== 'all' && a.text !== filters.text) return false
      if (
        filters.examBoard !== 'all' &&
        !a.examBoard.includes(filters.examBoard)
      )
        return false
      if (
        filters.yearGroup !== 'all' &&
        !a.yearGroup.includes(filters.yearGroup)
      )
        return false
      if (filters.skill !== 'all' && !a.skills.includes(filters.skill))
        return false
      return true
    })
  }, [filters])

  // Random activity
  const randomActivity = useCallback(() => {
    if (filtered.length === 0) return
    const pool = currentActivity
      ? filtered.filter((a) => a.id !== currentActivity.id)
      : filtered
    const list = pool.length > 0 ? pool : filtered
    const idx = Math.floor(Math.random() * list.length)
    setCurrentActivity(list[idx])
    setShowAnswersFullscreen(false)
  }, [filtered, currentActivity])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Starter Activity Generator
          </h1>
          <p className="text-sm text-muted-foreground">
            Generate bellwork and starter activities for your English lessons.
            Filter by text, exam board, or skill — then project full-screen.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={randomActivity} disabled={filtered.length === 0}>
            <Shuffle className="size-4" />
            Random Starter
          </Button>
          {currentActivity && (
            <>
              <Button
                variant="outline"
                onClick={() => setFullscreen(true)}
              >
                <Maximize2 className="size-4" />
                Project
              </Button>
              <Button
                variant="outline"
                onClick={() => handlePrint(currentActivity)}
              >
                <Printer className="size-4" />
                Print
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Filters */}
      <FilterPanel
        filters={filters}
        onChange={setFilters}
        matchCount={filtered.length}
      />

      {/* Current Activity */}
      {currentActivity ? (
        <ActivityCard
          activity={currentActivity}
          onFullscreen={() => setFullscreen(true)}
          onTimer={() => setShowTimer(true)}
        />
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="size-7 text-primary" />
            </div>
            <p className="text-sm font-medium">No activity selected</p>
            <p className="text-center text-sm text-muted-foreground">
              Click &ldquo;Random Starter&rdquo; to generate an activity
              {filtered.length > 0 && (
                <>
                  {' '}
                  from{' '}
                  <span className="font-medium text-foreground">
                    {filtered.length}
                  </span>{' '}
                  matching activit{filtered.length === 1 ? 'y' : 'ies'}
                </>
              )}
              .
            </p>
            {filtered.length === 0 && (
              <p className="text-sm text-destructive">
                No activities match your filters. Try broadening your selection.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Browse All (collapsed by default) */}
      <BrowseAll
        activities={filtered}
        onSelect={(a) => {
          setCurrentActivity(a)
          setShowAnswersFullscreen(false)
        }}
        onTimer={() => setShowTimer(true)}
      />

      {/* Fullscreen overlay */}
      {fullscreen && currentActivity && (
        <FullscreenView
          activity={currentActivity}
          onClose={() => setFullscreen(false)}
          onTimer={() => setShowTimer(true)}
          showAnswers={showAnswersFullscreen}
          onToggleAnswers={() => setShowAnswersFullscreen(!showAnswersFullscreen)}
        />
      )}

      {/* Timer overlay */}
      {showTimer && currentActivity && (
        <TimerOverlay
          durationMinutes={currentActivity.duration}
          onClose={() => setShowTimer(false)}
        />
      )}
    </div>
  )
}

// ─── Browse All Section ──────────────────────────────────────────────────────

function BrowseAll({
  activities,
  onSelect,
  onTimer,
}: {
  activities: StarterActivity[]
  onSelect: (a: StarterActivity) => void
  onTimer: () => void
}) {
  const [open, setOpen] = useState(false)

  if (activities.length === 0) return null

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted/50"
      >
        <span>
          Browse All ({activities.length} activit
          {activities.length === 1 ? 'y' : 'ies'})
        </span>
        {open ? (
          <ChevronUp className="size-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <button
              key={activity.id}
              type="button"
              onClick={() => onSelect(activity)}
              className="group rounded-xl border border-border/60 bg-card p-4 text-left transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-2 flex flex-wrap items-center gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  {activity.type}
                </Badge>
                {activity.text && activity.text !== 'general' && (
                  <Badge variant="outline" className="text-xs">
                    {activity.text}
                  </Badge>
                )}
              </div>
              <p className="mb-1 text-sm font-semibold group-hover:text-primary">
                {activity.title}
              </p>
              <p className="line-clamp-2 text-xs text-muted-foreground">
                {activity.content}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Timer className="size-3" />
                {activity.duration} min
                <span className="text-border">|</span>
                {activity.skills.slice(0, 2).join(', ')}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
