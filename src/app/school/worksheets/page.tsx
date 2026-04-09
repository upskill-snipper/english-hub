'use client'

import { useState, useRef, useCallback, useMemo } from 'react'
import {
  Quote,
  Columns,
  FileText,
  PenTool,
  BookOpen,
  ClipboardList,
  User,
  Lightbulb,
  Printer,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PrintableWorksheet } from '@/components/school/PrintableWorksheet'
import {
  generateWorksheet,
  WORKSHEET_TYPE_META,
  SAMPLE_TEXTS,
  SAMPLE_TOPICS,
  type WorksheetType,
  type DifficultyLevel,
} from '@/lib/worksheet-generator'

// ── Icon map ─────────────────────────────────────────────────────────────────

const TYPE_ICONS: Record<WorksheetType, React.ElementType> = {
  'quote-analysis': Quote,
  'comparison-frame': Columns,
  'extract-analysis': FileText,
  'creative-writing': PenTool,
  'vocabulary-builder': BookOpen,
  'exam-question': ClipboardList,
  'character-profile': User,
  'theme-explorer': Lightbulb,
}

const DIFFICULTY_OPTIONS: { value: DifficultyLevel; label: string; description: string }[] = [
  {
    value: 'foundation',
    label: 'Foundation',
    description: 'Scaffolded with sentence starters and guided prompts',
  },
  {
    value: 'core',
    label: 'Core',
    description: 'Standard difficulty with clear structure',
  },
  {
    value: 'extension',
    label: 'Extension',
    description: 'Challenging with open-ended, evaluative tasks',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WorksheetBrowserPage() {
  // ── State ────────────────────────────────────────────────────────────────
  const [worksheetType, setWorksheetType] = useState<WorksheetType>('quote-analysis')
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('core')
  const [text, setText] = useState('')
  const [topic, setTopic] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [className, setClassName] = useState('')
  const [customDate, setCustomDate] = useState(() => {
    const now = new Date()
    return now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  })
  const [showAnswers, setShowAnswers] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const worksheetRef = useRef<HTMLDivElement>(null)

  // ── Generated worksheet ──────────────────────────────────────────────────
  const worksheet = useMemo(() => {
    return generateWorksheet({
      type: worksheetType,
      difficulty,
      text: text || undefined,
      topic: topic || undefined,
      schoolName: schoolName || undefined,
      className: className || undefined,
      date: customDate || undefined,
    })
  }, [worksheetType, difficulty, text, topic, schoolName, className, customDate])

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleGenerate = useCallback(() => {
    setShowPreview(true)
  }, [])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Worksheet Generator</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create professional, print-ready worksheets for your English classes.
          Choose a type, configure options, and preview before printing.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
        {/* ── Left: Configuration Panel ──────────────────────── */}
        <div className="space-y-6 no-print" data-print-hide>
          {/* Worksheet type selector */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Worksheet Type
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(WORKSHEET_TYPE_META) as WorksheetType[]).map((type) => {
                const meta = WORKSHEET_TYPE_META[type]
                const Icon = TYPE_ICONS[type]
                const isActive = worksheetType === type
                return (
                  <button
                    key={type}
                    onClick={() => {
                      setWorksheetType(type)
                      setShowPreview(false)
                    }}
                    className={`flex items-start gap-2.5 rounded-lg border p-3 text-left transition-all ${
                      isActive
                        ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                        : 'border-border bg-background hover:border-primary/30 hover:bg-primary/5'
                    }`}
                  >
                    <Icon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    />
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-medium leading-tight ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {meta.label}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground line-clamp-2">
                        {meta.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content options */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Content
            </h2>

            <div className="space-y-3">
              {/* Text / source */}
              <div className="space-y-1.5">
                <Label htmlFor="ws-text">Text / Source</Label>
                <Select value={text} onValueChange={(v) => v !== null && setText(v)}>
                  <SelectTrigger id="ws-text" className="w-full">
                    <SelectValue placeholder="Select a text..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- None --</SelectItem>
                    {SAMPLE_TEXTS.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Topic / theme */}
              <div className="space-y-1.5">
                <Label htmlFor="ws-topic">Topic / Theme / Character</Label>
                <Select value={topic} onValueChange={(v) => v !== null && setTopic(v)}>
                  <SelectTrigger id="ws-topic" className="w-full">
                    <SelectValue placeholder="Select a topic..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- None --</SelectItem>
                    {SAMPLE_TOPICS.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Difficulty */}
              <div className="space-y-1.5">
                <Label htmlFor="ws-difficulty">Difficulty Level</Label>
                <div className="grid grid-cols-3 gap-2">
                  {DIFFICULTY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setDifficulty(opt.value)
                        setShowPreview(false)
                      }}
                      className={`rounded-lg border px-3 py-2 text-center transition-all ${
                        difficulty === opt.value
                          ? opt.value === 'foundation'
                            ? 'border-blue-400 bg-blue-500/10 text-blue-700 dark:border-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                            : opt.value === 'core'
                              ? 'border-amber-400 bg-amber-500/10 text-amber-700 dark:border-amber-600 dark:bg-amber-900/30 dark:text-amber-300'
                              : 'border-purple-400 bg-purple-500/10 text-purple-700 dark:border-purple-600 dark:bg-purple-900/30 dark:text-purple-300'
                          : 'border-border text-muted-foreground hover:border-primary/30'
                      }`}
                    >
                      <p className="text-xs font-semibold">{opt.label}</p>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {DIFFICULTY_OPTIONS.find((o) => o.value === difficulty)?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Header details */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Header Details
            </h2>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="ws-school">School Name</Label>
                <Input
                  id="ws-school"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="e.g. St Mary's Academy"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="ws-class">Class</Label>
                  <Input
                    id="ws-class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    placeholder="e.g. 10A/En1"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ws-date">Date</Label>
                  <Input
                    id="ws-date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    placeholder="e.g. 22 Mar 2026"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full gap-2"
              onClick={handleGenerate}
            >
              <Sparkles className="h-4 w-4" />
              {showPreview ? 'Refresh Preview' : 'Generate Worksheet'}
            </Button>

            {showPreview && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => setShowAnswers(!showAnswers)}
                >
                  {showAnswers ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  {showAnswers ? 'Hide Answers' : 'Show Answers'}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={handlePrint}
                >
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Preview ─────────────────────────────────── */}
        <div className="min-w-0">
          {showPreview ? (
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-4 py-3 no-print flex items-center justify-between" data-print-hide>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Preview
                </p>
                <p className="text-xs text-muted-foreground">
                  A4 layout &middot; optimised for printing
                </p>
              </div>
              <div className="p-6 overflow-auto max-h-[80vh]">
                <PrintableWorksheet
                  ref={worksheetRef}
                  schoolName={schoolName || undefined}
                  className={className || undefined}
                  date={customDate || undefined}
                  title={worksheet.title}
                  subtitle={worksheet.subtitle}
                  sections={worksheet.sections}
                  showAnswers={showAnswers}
                  difficulty={difficulty}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/20 py-20 px-8 text-center">
              <FileText className="h-12 w-12 text-muted-foreground/70 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No worksheet generated yet
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Choose a worksheet type, select your text and topic, set the
                difficulty level, then click &ldquo;Generate Worksheet&rdquo; to
                see a preview.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
