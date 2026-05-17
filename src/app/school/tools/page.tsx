'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import {
  Users,
  Grid3x3,
  PenTool,
  Sparkles,
  BookMarked,
  SplitSquareVertical,
  FileText,
  Timer,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------

interface ToolDef {
  name: string
  description: string
  href: string | null // null = inline tool
  icon: React.ElementType
}

// ---------------------------------------------------------------------------
// Preset durations (minutes)
// ---------------------------------------------------------------------------

const PRESETS = [1, 2, 3, 5, 10, 15, 20] as const

// ---------------------------------------------------------------------------
// Quick Timer component
// ---------------------------------------------------------------------------

function QuickTimer({ fullscreen = false }: { fullscreen?: boolean }) {
  const tx = useT()
  const [totalSeconds, setTotalSeconds] = useState(300) // default 5 min
  const [remaining, setRemaining] = useState(300)
  const [running, setRunning] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Tick logic
  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setRunning(false)
            if (soundEnabled) playAlarm()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, remaining, soundEnabled])

  const playAlarm = useCallback(() => {
    try {
      const ctx = new AudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = 880
      osc.type = 'square'
      gain.gain.value = 0.3
      osc.start()
      setTimeout(() => {
        osc.stop()
        ctx.close()
      }, 1500)
    } catch {
      // Audio not available
    }
  }, [])

  const selectPreset = (minutes: number) => {
    const secs = minutes * 60
    setTotalSeconds(secs)
    setRemaining(secs)
    setRunning(false)
  }

  const toggleRunning = () => {
    if (remaining === 0) return
    setRunning((r) => !r)
  }

  const reset = () => {
    setRunning(false)
    setRemaining(totalSeconds)
  }

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const progress = totalSeconds > 0 ? remaining / totalSeconds : 0
  const isFinished = remaining === 0

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-6',
        fullscreen && 'justify-center min-h-[60vh]',
      )}
    >
      {/* Preset buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {PRESETS.map((m) => (
          <Button
            key={m}
            variant={totalSeconds === m * 60 ? 'default' : 'outline'}
            size="sm"
            onClick={() => selectPreset(m)}
            disabled={running}
          >
            {m} {tx('school.b15.tools.min_suffix')}
          </Button>
        ))}
      </div>

      {/* Display */}
      <div
        className={cn(
          'relative flex items-center justify-center rounded-full border-4 transition-colors',
          isFinished
            ? 'border-red-500 text-red-500 animate-pulse'
            : running
              ? 'border-primary text-primary'
              : 'border-muted-foreground/30 text-foreground',
          fullscreen
            ? 'w-72 h-72 text-7xl font-mono font-bold'
            : 'w-48 h-48 text-5xl font-mono font-bold',
        )}
      >
        {/* SVG progress ring */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${2 * Math.PI * 46}`}
            strokeDashoffset={`${2 * Math.PI * 46 * (1 - progress)}`}
            className="opacity-30 transition-all duration-1000"
          />
        </svg>
        <span className="z-10">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <Button onClick={toggleRunning} size="lg" disabled={remaining === 0 && !running}>
          {running ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {running ? tx('school.b15.tools.btn_pause') : tx('school.b15.tools.btn_start')}
        </Button>
        <Button onClick={reset} variant="outline" size="lg">
          <RotateCcw className="mr-2 h-4 w-4" />
          {tx('school.b15.tools.btn_reset')}
        </Button>
        <Button
          onClick={() => setSoundEnabled((s) => !s)}
          variant="ghost"
          size="icon"
          title={soundEnabled ? 'Mute alarm' : 'Enable alarm'}
        >
          {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Fullscreen Timer Dialog
// ---------------------------------------------------------------------------

function FullscreenTimerDialog() {
  const tx = useT()
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm">
            <Maximize className="mr-2 h-4 w-4" />
            {tx('school.b15.tools.btn_full_screen')}
          </Button>
        }
      />
      <DialogContent className="sm:max-w-3xl w-full h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{tx('school.b15.tools.dialog_title')}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 flex items-center justify-center">
          <QuickTimer fullscreen />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ToolsPage() {
  const tx = useT()

  const tools: ToolDef[] = [
    {
      name: tx('school.b15.tools.tool_seating_name'),
      description: tx('school.b15.tools.tool_seating_desc'),
      href: '/school/tools/seating',
      icon: Grid3x3,
    },
    {
      name: tx('school.b15.tools.tool_groups_name'),
      description: tx('school.b15.tools.tool_groups_desc'),
      href: '/school/tools/groups',
      icon: Users,
    },
    {
      name: tx('school.b15.tools.tool_quiz_name'),
      description: tx('school.b15.tools.tool_quiz_desc'),
      href: '/school/tools/quiz-builder',
      icon: PenTool,
    },
    {
      name: tx('school.b15.tools.tool_starters_name'),
      description: tx('school.b15.tools.tool_starters_desc'),
      href: '/school/tools/starters',
      icon: Sparkles,
    },
    {
      name: tx('school.b15.tools.tool_mark_scheme_name'),
      description: tx('school.b15.tools.tool_mark_scheme_desc'),
      href: '/school/tools/mark-schemes',
      icon: BookMarked,
    },
    {
      name: tx('school.b15.tools.tool_diff_name'),
      description: tx('school.b15.tools.tool_diff_desc'),
      href: '/school/tools/differentiation',
      icon: SplitSquareVertical,
    },
    {
      name: tx('school.b15.tools.tool_worksheet_name'),
      description: tx('school.b15.tools.tool_worksheet_desc'),
      href: '/school/worksheets',
      icon: FileText,
    },
    {
      name: tx('school.b15.tools.tool_timer_name'),
      description: tx('school.b15.tools.tool_timer_desc'),
      href: null,
      icon: Timer,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{tx('school.b15.tools.title')}</h1>
        <p className="text-muted-foreground mt-1">{tx('school.b15.tools.subtitle')}</p>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => {
          const Icon = tool.icon

          // Inline timer card
          if (tool.href === null) {
            return (
              <Card key={tool.name} className="border-primary/20 bg-primary/[0.02]">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription className="text-xs">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-center text-sm text-muted-foreground">
                  <p className="mb-2 italic">{tx('school.b15.tools.timer_inline')}</p>
                </CardContent>
              </Card>
            )
          }

          return (
            <Link key={tool.name} href={tool.href} className="group">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription className="text-xs">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 px-0 text-primary group-hover:underline"
                  >
                    {tx('school.b15.tools.open')}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Quick Timer Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Timer className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>{tx('school.b15.tools.quick_timer_title')}</CardTitle>
                <CardDescription>{tx('school.b15.tools.quick_timer_desc')}</CardDescription>
              </div>
            </div>
            <FullscreenTimerDialog />
          </div>
        </CardHeader>
        <CardContent>
          <QuickTimer />
        </CardContent>
      </Card>
    </div>
  )
}
