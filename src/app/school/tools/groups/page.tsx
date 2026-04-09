'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Shuffle,
  Printer,
  Download,
  Loader2,
  Users,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Square,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSchool } from '@/hooks/useSchool'
import type { Class } from '@/lib/types'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ────────────────────────────────────────────────────────────────────

interface GroupStudent {
  id: string
  name: string
  grade: string | null
  target: string | null
  trajectory: 'improving' | 'stable' | 'declining'
  abilityLevel: 'high' | 'mid' | 'low'
}

interface Group {
  id: number
  name: string
  students: GroupStudent[]
}

type GroupStrategy = 'mixed' | 'similar' | 'random' | 'custom'

const STRATEGY_OPTIONS: { value: GroupStrategy; label: string; description: string }[] = [
  { value: 'mixed', label: 'Mixed Ability', description: 'Each group has a range of ability levels' },
  { value: 'similar', label: 'Similar Ability', description: 'Groups of students at the same level for targeted work' },
  { value: 'random', label: 'Random', description: 'Randomly shuffled groups' },
  { value: 'custom', label: 'Custom', description: 'Drag students between groups manually' },
]

const GROUP_NAMES = [
  'Group A', 'Group B', 'Group C', 'Group D',
  'Group E', 'Group F', 'Group G', 'Group H',
  'Group I', 'Group J', 'Group K', 'Group L',
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function gradeToNum(grade: string | null): number {
  if (!grade) return 0
  const g = grade.replace(/[^0-9]/g, '')
  return parseInt(g, 10) || 0
}

function classifyAbility(grade: string | null): 'high' | 'mid' | 'low' {
  const n = gradeToNum(grade)
  if (n >= 7) return 'high'
  if (n >= 4) return 'mid'
  return 'low'
}

function abilityBadgeColor(level: string): string {
  if (level === 'high') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
  if (level === 'mid') return 'bg-blue-500/20 text-blue-400 border-blue-500/40'
  return 'bg-amber-500/20 text-amber-400 border-amber-500/40'
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function generateGroups(
  students: GroupStudent[],
  numGroups: number,
  strategy: GroupStrategy
): Group[] {
  const groups: Group[] = Array.from({ length: numGroups }, (_, i) => ({
    id: i,
    name: GROUP_NAMES[i] ?? `Group ${i + 1}`,
    students: [],
  }))

  if (students.length === 0 || numGroups === 0) return groups

  let ordered: GroupStudent[]

  switch (strategy) {
    case 'mixed': {
      // Sort by grade, then deal out round-robin so each group gets a spread
      ordered = [...students].sort((a, b) => gradeToNum(b.grade) - gradeToNum(a.grade))
      ordered.forEach((student, idx) => {
        groups[idx % numGroups].students.push(student)
      })
      return groups
    }
    case 'similar': {
      // Sort by grade, then chunk into contiguous groups
      ordered = [...students].sort((a, b) => gradeToNum(b.grade) - gradeToNum(a.grade))
      const chunkSize = Math.ceil(ordered.length / numGroups)
      ordered.forEach((student, idx) => {
        const groupIdx = Math.min(Math.floor(idx / chunkSize), numGroups - 1)
        groups[groupIdx].students.push(student)
      })
      return groups
    }
    case 'random':
    case 'custom':
    default: {
      ordered = shuffleArray(students)
      ordered.forEach((student, idx) => {
        groups[idx % numGroups].students.push(student)
      })
      return groups
    }
  }
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GroupGeneratorPage() {
  const router = useRouter()
  const { classes, isLoading: schoolLoading } = useSchool()

  // Class & students
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null)
  const [students, setStudents] = useState<GroupStudent[]>([])
  const [loadingStudents, setLoadingStudents] = useState(false)

  // Group config
  const [numGroups, setNumGroups] = useState(4)
  const [strategy, setStrategy] = useState<GroupStrategy>('mixed')
  const [groups, setGroups] = useState<Group[]>([])

  // Timer
  const [timerMinutes, setTimerMinutes] = useState(5)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerTotal, setTimerTotal] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Drag state for custom mode
  const [draggedStudentId, setDraggedStudentId] = useState<string | null>(null)
  const [dragSourceGroup, setDragSourceGroup] = useState<number | null>(null)

  // Fetch students
  useEffect(() => {
    if (!selectedClassId) {
      setStudents([])
      setGroups([])
      return
    }

    let cancelled = false
    setLoadingStudents(true)

    async function fetchStudents() {
      try {
        const res = await fetch(`/api/school/classes/${selectedClassId}/analytics`)
        if (!res.ok) throw new Error('Failed to load students')
        const data = await res.json()

        if (cancelled) return

        const studentList: GroupStudent[] = (data.student_summaries ?? data.students ?? []).map(
          (s: Record<string, unknown>) => {
            const grade = (s.predicted_grade as string) ??
              (s.avg_quiz_score != null ? String(Math.round(s.avg_quiz_score as number)) : null)
            return {
              id: (s.student_id as string) ?? (s.id as string) ?? '',
              name: (s.full_name as string) ?? (s.student_name as string) ?? (s.email as string) ?? 'Unknown',
              grade,
              target: (s.target_grade as string) ?? null,
              trajectory: ((s.trajectory as string) ?? 'stable') as 'improving' | 'stable' | 'declining',
              abilityLevel: classifyAbility(grade),
            }
          }
        )

        setStudents(studentList)
        setGroups(generateGroups(studentList, numGroups, strategy))
      } catch (err) {
        console.error('Failed to fetch students for groups:', err)
      } finally {
        if (!cancelled) setLoadingStudents(false)
      }
    }

    fetchStudents()
    return () => {
      cancelled = true
    }
  }, [selectedClassId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Regenerate when params change
  function handleRegenerate() {
    setGroups(generateGroups(students, numGroups, strategy))
  }

  // When numGroups or strategy changes, regenerate
  useEffect(() => {
    if (students.length > 0) {
      setGroups(generateGroups(students, numGroups, strategy))
    }
  }, [numGroups, strategy]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Drag handlers for custom mode ──────────────────────────────────────

  function handleDragStart(e: React.DragEvent, studentId: string, groupId: number) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', studentId)
    setDraggedStudentId(studentId)
    setDragSourceGroup(groupId)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function handleDrop(e: React.DragEvent, targetGroupId: number) {
    e.preventDefault()
    const studentId = e.dataTransfer.getData('text/plain')
    if (!studentId || dragSourceGroup === null || dragSourceGroup === targetGroupId) {
      setDraggedStudentId(null)
      setDragSourceGroup(null)
      return
    }

    setGroups((prev) => {
      const newGroups = prev.map((g) => ({ ...g, students: [...g.students] }))
      const sourceGroup = newGroups.find((g) => g.id === dragSourceGroup)
      const targetGroup = newGroups.find((g) => g.id === targetGroupId)
      if (!sourceGroup || !targetGroup) return prev

      const studentIdx = sourceGroup.students.findIndex((s) => s.id === studentId)
      if (studentIdx < 0) return prev

      const [student] = sourceGroup.students.splice(studentIdx, 1)
      targetGroup.students.push(student)
      return newGroups
    })

    setDraggedStudentId(null)
    setDragSourceGroup(null)
  }

  function handleDragEnd() {
    setDraggedStudentId(null)
    setDragSourceGroup(null)
  }

  // ── Timer ──────────────────────────────────────────────────────────────

  function startTimer() {
    const total = timerMinutes * 60 + timerSeconds
    if (total <= 0) return
    setTimerTotal(total)
    setTimerRunning(true)
  }

  function pauseTimer() {
    setTimerRunning(false)
  }

  function resetTimer() {
    setTimerRunning(false)
    setTimerTotal(timerMinutes * 60 + timerSeconds)
  }

  function stopTimer() {
    setTimerRunning(false)
    setTimerTotal(0)
  }

  useEffect(() => {
    if (timerRunning && timerTotal > 0) {
      timerRef.current = setInterval(() => {
        setTimerTotal((prev) => {
          if (prev <= 1) {
            setTimerRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [timerRunning, timerTotal])

  // ── Export ─────────────────────────────────────────────────────────────

  function handleExport() {
    const selectedClass = classes.find((c) => c.id === selectedClassId)
    const lines: string[] = [
      `Group Compositions — ${selectedClass?.name ?? 'Class'}`,
      `Strategy: ${STRATEGY_OPTIONS.find((s) => s.value === strategy)?.label}`,
      `Generated: ${new Date().toLocaleDateString('en-GB')}`,
      '',
    ]

    groups.forEach((group) => {
      lines.push(`${group.name} (${group.students.length} students)`)
      lines.push('—'.repeat(40))
      group.students.forEach((s) => {
        lines.push(`  ${s.name}  |  Grade: ${s.grade ?? 'N/A'}  |  Ability: ${s.abilityLevel}`)
      })
      lines.push('')
    })

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `groups-${selectedClass?.name?.replace(/\s+/g, '-') ?? 'class'}-${new Date().toISOString().slice(0, 10)}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handlePrint() {
    window.print()
  }

  const selectedClass = classes.find((c) => c.id === selectedClassId)

  if (schoolLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/school')}
            className="shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Group Generator</h1>
            <p className="text-sm text-muted-foreground">
              Create balanced groups for classroom activities
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint} disabled={groups.length === 0}>
            <Printer className="mr-1.5 h-3.5 w-3.5" />
            Print
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport} disabled={groups.length === 0}>
            <Download className="mr-1.5 h-3.5 w-3.5" />
            Export
          </Button>
        </div>
      </div>

      {/* Print header */}
      <div className="hidden print:block">
        <h1 className="text-xl font-bold">
          Group Compositions — {selectedClass?.name ?? 'Class'}
        </h1>
        <p className="text-sm text-muted-foreground">
          Strategy: {STRATEGY_OPTIONS.find((s) => s.value === strategy)?.label} &middot;{' '}
          {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Controls */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:hidden">
        {/* Class selector */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Class</Label>
          <Select
            value={selectedClassId ?? undefined}
            onValueChange={(v) => setSelectedClassId(v)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a class..." />
            </SelectTrigger>
            <SelectContent>
              {classes.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name} ({c.student_count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of groups */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">
            <Users className="mr-1 inline h-3.5 w-3.5" />
            Number of Groups
          </Label>
          <Input
            type="number"
            min={2}
            max={12}
            value={numGroups}
            onChange={(e) => setNumGroups(Math.max(2, Math.min(12, parseInt(e.target.value) || 2)))}
          />
        </div>

        {/* Strategy */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Grouping Strategy</Label>
          <Select value={strategy} onValueChange={(v) => setStrategy(v as GroupStrategy)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STRATEGY_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Regenerate */}
        <div className="flex items-end">
          <Button
            onClick={handleRegenerate}
            disabled={students.length === 0}
            className="w-full"
          >
            <Shuffle className="mr-1.5 h-3.5 w-3.5" />
            Regenerate
          </Button>
        </div>
      </div>

      {/* Strategy description */}
      {selectedClassId && students.length > 0 && (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm print:hidden">
          <Badge variant="outline" className="shrink-0">
            {students.length} students
          </Badge>
          <span className="text-muted-foreground">
            {STRATEGY_OPTIONS.find((s) => s.value === strategy)?.description}
          </span>
          {strategy === 'custom' && (
            <span className="text-xs text-muted-foreground/70">
              — Drag students between groups to rearrange
            </span>
          )}
        </div>
      )}

      {/* Groups display */}
      {loadingStudents ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : !selectedClassId ? (
        <Card>
          <CardContent className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
            Select a class to generate groups
          </CardContent>
        </Card>
      ) : students.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
            No students found in this class
          </CardContent>
        </Card>
      ) : (
        <div
          className={cn(
            'grid gap-4',
            numGroups <= 2 && 'sm:grid-cols-2',
            numGroups === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
            numGroups >= 4 && numGroups <= 6 && 'sm:grid-cols-2 lg:grid-cols-3',
            numGroups > 6 && 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          )}
        >
          {groups.map((group) => {
            const highCount = group.students.filter((s) => s.abilityLevel === 'high').length
            const midCount = group.students.filter((s) => s.abilityLevel === 'mid').length
            const lowCount = group.students.filter((s) => s.abilityLevel === 'low').length

            return (
              <Card
                key={group.id}
                className={cn(
                  'transition-all print:break-inside-avoid',
                  strategy === 'custom' && 'border-dashed'
                )}
                onDragOver={strategy === 'custom' ? handleDragOver : undefined}
                onDrop={strategy === 'custom' ? (e) => handleDrop(e, group.id) : undefined}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{group.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {group.students.length}
                    </Badge>
                  </div>
                  {/* Ability breakdown */}
                  <div className="flex gap-1.5 pt-1">
                    {highCount > 0 && (
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.6rem] font-medium text-emerald-400">
                        {highCount} high
                      </span>
                    )}
                    {midCount > 0 && (
                      <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[0.6rem] font-medium text-blue-400">
                        {midCount} mid
                      </span>
                    )}
                    {lowCount > 0 && (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[0.6rem] font-medium text-amber-400">
                        {lowCount} low
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-1">
                  {group.students.map((student) => (
                    <div
                      key={student.id}
                      draggable={strategy === 'custom'}
                      onDragStart={
                        strategy === 'custom'
                          ? (e) => handleDragStart(e, student.id, group.id)
                          : undefined
                      }
                      onDragEnd={strategy === 'custom' ? handleDragEnd : undefined}
                      className={cn(
                        'flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm',
                        strategy === 'custom'
                          ? 'cursor-grab border border-transparent hover:border-border hover:bg-muted/50'
                          : '',
                        draggedStudentId === student.id && 'opacity-40'
                      )}
                    >
                      <span className="font-medium">{student.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {student.grade ?? '—'}
                        </span>
                        <span
                          className={cn(
                            'inline-block rounded-full px-1.5 py-0.5 text-[0.6rem] font-medium',
                            abilityBadgeColor(student.abilityLevel)
                          )}
                        >
                          {student.abilityLevel}
                        </span>
                      </div>
                    </div>
                  ))}
                  {group.students.length === 0 && (
                    <p className="py-4 text-center text-xs text-muted-foreground">
                      {strategy === 'custom' ? 'Drop students here' : 'No students'}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Timer tool */}
      {selectedClassId && students.length > 0 && (
        <Card className="print:hidden">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Timer className="h-4 w-4" />
              Activity Timer
            </CardTitle>
            <CardDescription>Set a countdown timer for group activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
              {/* Timer config */}
              <div className="flex items-center gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">Minutes</Label>
                  <Input
                    type="number"
                    min={0}
                    max={60}
                    value={timerMinutes}
                    onChange={(e) => {
                      const v = Math.max(0, Math.min(60, parseInt(e.target.value) || 0))
                      setTimerMinutes(v)
                      if (!timerRunning) setTimerTotal(v * 60 + timerSeconds)
                    }}
                    className="w-20 text-center"
                    disabled={timerRunning}
                  />
                </div>
                <span className="mt-6 text-lg font-bold text-muted-foreground">:</span>
                <div className="space-y-1">
                  <Label className="text-xs">Seconds</Label>
                  <Input
                    type="number"
                    min={0}
                    max={59}
                    value={timerSeconds}
                    onChange={(e) => {
                      const v = Math.max(0, Math.min(59, parseInt(e.target.value) || 0))
                      setTimerSeconds(v)
                      if (!timerRunning) setTimerTotal(timerMinutes * 60 + v)
                    }}
                    className="w-20 text-center"
                    disabled={timerRunning}
                  />
                </div>
              </div>

              {/* Display */}
              <div
                className={cn(
                  'flex h-16 min-w-[8rem] items-center justify-center rounded-xl border text-3xl font-bold tabular-nums transition-colors',
                  timerTotal === 0 && !timerRunning
                    ? 'border-border text-muted-foreground'
                    : timerTotal <= 10 && timerRunning
                      ? 'animate-pulse border-red-500/50 bg-red-500/10 text-red-400'
                      : timerTotal <= 30 && timerRunning
                        ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                        : 'border-primary/30 bg-primary/5 text-primary'
                )}
              >
                {formatTime(timerTotal)}
              </div>

              {/* Controls */}
              <div className="flex gap-2">
                {!timerRunning ? (
                  <Button size="sm" onClick={startTimer} disabled={timerMinutes === 0 && timerSeconds === 0 && timerTotal === 0}>
                    <Play className="mr-1 h-3.5 w-3.5" />
                    Start
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" onClick={pauseTimer}>
                    <Pause className="mr-1 h-3.5 w-3.5" />
                    Pause
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={resetTimer}>
                  <RotateCcw className="h-3.5 w-3.5" />
                </Button>
                <Button size="sm" variant="ghost" onClick={stopTimer}>
                  <Square className="h-3.5 w-3.5" />
                </Button>
              </div>

              {/* Quick presets */}
              <div className="flex gap-1.5">
                {[1, 2, 3, 5, 10].map((m) => (
                  <Button
                    key={m}
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs"
                    disabled={timerRunning}
                    onClick={() => {
                      setTimerMinutes(m)
                      setTimerSeconds(0)
                      setTimerTotal(m * 60)
                    }}
                  >
                    {m}m
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
