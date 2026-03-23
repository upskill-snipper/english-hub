'use client'

import { useState, useRef, useMemo, useCallback } from 'react'
import {
  Layers,
  Printer,
  Eye,
  ChevronDown,
  BookOpen,
  FileText,
  PenTool,
  GitCompare,
  Users,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Download,
  Copy,
  Check,
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  type TaskType,
  type EssaySubType,
  type DifferentiationLevel,
  type ScaffoldTemplate,
  getScaffoldsByTask,
  getEssayScaffold,
  getScaffold,
  getSentenceStarters,
  getVocabularySheet,
  getQuoteBank,
  levelToDifficulty,
  sentenceStarterBanks,
  vocabularySheets,
  quoteBanks,
  availableTopics,
  supportedTexts,
} from '@/data/differentiation-scaffolds'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ClassDistribution {
  foundation: number
  core: number
  extension: number
  total: number
}

interface GeneratedTask {
  level: DifferentiationLevel
  title: string
  taskInstructions: string
  scaffold: ScaffoldTemplate
  sentenceStarters: string[]
  wordBank: string[]
  vocabularySupport: { term: string; definition: string; example?: string }[]
  quotes: { quote: string; speaker?: string; context: string; technique?: string }[]
  tips: string[]
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TASK_TYPES: { value: TaskType; label: string; icon: React.ReactNode; subTypes?: { value: EssaySubType; label: string }[] }[] = [
  {
    value: 'essay_writing',
    label: 'Essay Writing',
    icon: <FileText className="h-4 w-4" />,
    subTypes: [
      { value: 'argumentative', label: 'Argumentative' },
      { value: 'analytical', label: 'Analytical' },
      { value: 'persuasive', label: 'Persuasive' },
      { value: 'descriptive', label: 'Descriptive' },
    ],
  },
  { value: 'extract_analysis', label: 'Extract Analysis', icon: <BookOpen className="h-4 w-4" /> },
  { value: 'creative_writing', label: 'Creative Writing', icon: <PenTool className="h-4 w-4" /> },
  { value: 'comparison', label: 'Comparison', icon: <GitCompare className="h-4 w-4" /> },
]

const LEVEL_CONFIG: Record<DifferentiationLevel, { label: string; tag: string; colour: string; bgColour: string; borderColour: string; description: string }> = {
  foundation: {
    label: 'Foundation',
    tag: 'LA',
    colour: 'text-amber-700 dark:text-amber-400',
    bgColour: 'bg-amber-50 dark:bg-amber-950/30',
    borderColour: 'border-amber-200 dark:border-amber-800',
    description: 'Heavy scaffolding, sentence starters, word banks, guided templates',
  },
  core: {
    label: 'Core',
    tag: 'MA',
    colour: 'text-blue-700 dark:text-blue-400',
    bgColour: 'bg-blue-50 dark:bg-blue-950/30',
    borderColour: 'border-blue-200 dark:border-blue-800',
    description: 'Some scaffolding, paragraph frames, key vocabulary provided',
  },
  extension: {
    label: 'Extension',
    tag: 'HA',
    colour: 'text-purple-700 dark:text-purple-400',
    bgColour: 'bg-purple-50 dark:bg-purple-950/30',
    borderColour: 'border-purple-200 dark:border-purple-800',
    description: 'Open-ended, critical thinking prompts, wider reading connections',
  },
}

const LEVELS: DifferentiationLevel[] = ['foundation', 'core', 'extension']

// ---------------------------------------------------------------------------
// Simulated class data (in production this would come from analytics API)
// ---------------------------------------------------------------------------

function getClassDistribution(): ClassDistribution {
  return { foundation: 8, core: 14, extension: 6, total: 28 }
}

// ---------------------------------------------------------------------------
// Task generation
// ---------------------------------------------------------------------------

function generateTasks(
  taskType: TaskType,
  essaySubType: EssaySubType | null,
  topic: string,
  customPrompt: string,
): GeneratedTask[] {
  return LEVELS.map((level) => {
    // Get the appropriate scaffold
    let scaffold: ScaffoldTemplate | undefined
    if (taskType === 'essay_writing' && essaySubType) {
      scaffold = getEssayScaffold(essaySubType, level)
    } else {
      scaffold = getScaffold(taskType, level)
    }

    if (!scaffold) {
      // Fallback scaffold
      scaffold = {
        id: `fallback-${taskType}-${level}`,
        taskType,
        level,
        title: `${taskType} — ${level}`,
        description: 'Custom task',
        frame: ['Complete the task as instructed by your teacher.'],
      }
    }

    // Gather sentence starters — use scaffold's own + skill-based starters
    const skillMap: Record<TaskType, string> = {
      essay_writing: 'Analysis',
      extract_analysis: 'Analysis',
      creative_writing: 'Evaluation',
      comparison: 'Comparison',
    }
    const skillStarters = getSentenceStarters(skillMap[taskType], level)
    const sentenceStarters = [
      ...(scaffold.sentenceStarters ?? []),
      ...(skillStarters?.starters ?? []),
    ].filter((v, i, a) => a.indexOf(v) === i) // deduplicate

    // Word bank
    const wordBank = scaffold.wordBank ?? []

    // Vocabulary support (if the topic matches a supported text)
    const vocabSheet = getVocabularySheet(topic, level)
    const vocabularySupport = vocabSheet?.words ?? []

    // Quotes
    const difficulty = levelToDifficulty(level)
    const quoteBank = getQuoteBank(topic, difficulty)
    const quotes = quoteBank?.quotes ?? []

    // Tips
    const tips = scaffold.tips ?? []

    // Build task instructions
    const taskLabel = taskType === 'essay_writing' && essaySubType
      ? `${essaySubType.charAt(0).toUpperCase() + essaySubType.slice(1)} Essay`
      : TASK_TYPES.find((t) => t.value === taskType)?.label ?? taskType

    const taskInstructions = customPrompt
      ? `${customPrompt}\n\nTopic/Text: ${topic}`
      : `Write a ${taskLabel.toLowerCase()} on the topic of "${topic}".`

    return {
      level,
      title: `${scaffold.title}`,
      taskInstructions,
      scaffold,
      sentenceStarters,
      wordBank,
      vocabularySupport,
      quotes,
      tips,
    }
  })
}

// ---------------------------------------------------------------------------
// Print helpers
// ---------------------------------------------------------------------------

function buildPrintHtml(tasks: GeneratedTask[], which: 'all' | DifferentiationLevel): string {
  const filtered = which === 'all' ? tasks : tasks.filter((t) => t.level === which)
  const sections = filtered.map((task) => {
    const cfg = LEVEL_CONFIG[task.level]
    const frameHtml = task.scaffold.frame.map((line) =>
      line === '' ? '<br/>' : `<p style="margin:2px 0;font-family:serif;">${line}</p>`
    ).join('')

    const startersHtml = task.sentenceStarters.length > 0
      ? `<div style="margin-top:12px;"><strong>Sentence Starters:</strong><ul>${task.sentenceStarters.map((s) => `<li>${s}</li>`).join('')}</ul></div>`
      : ''

    const wordBankHtml = task.wordBank.length > 0
      ? `<div style="margin-top:12px;"><strong>Word Bank:</strong> ${task.wordBank.join(' &bull; ')}</div>`
      : ''

    const vocabHtml = task.vocabularySupport.length > 0
      ? `<div style="margin-top:12px;"><strong>Key Vocabulary:</strong><table border="1" cellpadding="4" cellspacing="0" style="border-collapse:collapse;width:100%;margin-top:4px;"><tr><th>Term</th><th>Definition</th></tr>${task.vocabularySupport.map((v) => `<tr><td><strong>${v.term}</strong></td><td>${v.definition}</td></tr>`).join('')}</table></div>`
      : ''

    const quotesHtml = task.quotes.length > 0
      ? `<div style="margin-top:12px;"><strong>Key Quotations:</strong><ul>${task.quotes.map((q) => `<li>"${q.quote}"${q.speaker ? ` — ${q.speaker}` : ''} <em>(${q.context})</em></li>`).join('')}</ul></div>`
      : ''

    const tipsHtml = task.tips.length > 0
      ? `<div style="margin-top:12px;padding:8px;border:1px dashed #888;"><strong>Tips:</strong><ul>${task.tips.map((t) => `<li>${t}</li>`).join('')}</ul></div>`
      : ''

    return `
      <div style="page-break-after:always;padding:24px;">
        <h2 style="margin-bottom:4px;">${cfg.label} (${cfg.tag})</h2>
        <p style="color:#666;margin-top:0;">${cfg.description}</p>
        <hr/>
        <h3>Task</h3>
        <p>${task.taskInstructions}</p>
        <h3>Writing Frame</h3>
        ${frameHtml}
        ${startersHtml}
        ${wordBankHtml}
        ${vocabHtml}
        ${quotesHtml}
        ${tipsHtml}
      </div>
    `
  }).join('')

  return `<!DOCTYPE html><html><head><title>Differentiated Resources</title><style>body{font-family:system-ui,sans-serif;font-size:14px;color:#222;}h2{font-size:20px;}h3{font-size:16px;margin-top:16px;}ul{margin:4px 0;padding-left:20px;}table{font-size:13px;}</style></head><body>${sections}</body></html>`
}

function handlePrint(tasks: GeneratedTask[], which: 'all' | DifferentiationLevel) {
  const html = buildPrintHtml(tasks, which)
  const win = window.open('', '_blank')
  if (win) {
    win.document.write(html)
    win.document.close()
    win.focus()
    win.print()
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ClassDataBanner({ dist }: { dist: ClassDistribution }) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-wrap items-center gap-4 py-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">Based on your class data:</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
            {dist.foundation} students need Foundation
          </Badge>
          <Badge variant="outline" className="border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
            {dist.core} students need Core
          </Badge>
          <Badge variant="outline" className="border-purple-300 bg-purple-50 text-purple-700 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-400">
            {dist.extension} students need Extension
          </Badge>
        </div>
        <span className="ml-auto text-xs text-muted-foreground">{dist.total} students total</span>
      </CardContent>
    </Card>
  )
}

function TaskPreviewCard({ task }: { task: GeneratedTask }) {
  const cfg = LEVEL_CONFIG[task.level]
  const [copied, setCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    const text = [
      `${cfg.label} (${cfg.tag})`,
      cfg.description,
      '',
      'TASK:',
      task.taskInstructions,
      '',
      'WRITING FRAME:',
      ...task.scaffold.frame,
      '',
      ...(task.sentenceStarters.length > 0
        ? ['SENTENCE STARTERS:', ...task.sentenceStarters.map((s) => `  • ${s}`), '']
        : []),
      ...(task.wordBank.length > 0
        ? ['WORD BANK:', task.wordBank.join(', '), '']
        : []),
      ...(task.vocabularySupport.length > 0
        ? ['KEY VOCABULARY:', ...task.vocabularySupport.map((v) => `  ${v.term}: ${v.definition}`), '']
        : []),
      ...(task.quotes.length > 0
        ? ['KEY QUOTATIONS:', ...task.quotes.map((q) => `  "${q.quote}"${q.speaker ? ` — ${q.speaker}` : ''}`), '']
        : []),
      ...(task.tips.length > 0
        ? ['TIPS:', ...task.tips.map((t) => `  • ${t}`)]
        : []),
    ].join('\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [task, cfg])

  return (
    <Card className={`${cfg.borderColour} border-2`}>
      <CardHeader className={`${cfg.bgColour} rounded-t-lg pb-3`}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className={`text-lg ${cfg.colour}`}>
              {cfg.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {cfg.tag}
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1 text-xs">
              {cfg.description}
            </CardDescription>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => handlePrint([task], task.level)}
              title="Print this version"
            >
              <Printer className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        {/* Task instructions */}
        <div>
          <p className="text-sm font-semibold">Task</p>
          <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{task.taskInstructions}</p>
        </div>

        <Separator />

        {/* Writing frame */}
        <div>
          <p className="text-sm font-semibold">Writing Frame</p>
          <div className="mt-2 rounded-md bg-muted/50 p-3 text-sm font-mono leading-relaxed">
            {task.scaffold.frame.map((line, i) => (
              <p key={i} className={line === '' ? 'h-3' : ''}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Sentence starters */}
        {task.sentenceStarters.length > 0 && (
          <div>
            <p className="text-sm font-semibold">Sentence Starters</p>
            <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-0.5">
              {task.sentenceStarters.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Word bank */}
        {task.wordBank.length > 0 && (
          <div>
            <p className="text-sm font-semibold">Word Bank</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {task.wordBank.map((w, i) => (
                <Badge key={i} variant="secondary" className="text-xs font-normal">
                  {w}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulary support */}
        {task.vocabularySupport.length > 0 && (
          <div>
            <p className="text-sm font-semibold">Key Vocabulary</p>
            <div className="mt-1 space-y-1">
              {task.vocabularySupport.map((v, i) => (
                <div key={i} className="text-sm">
                  <span className="font-medium">{v.term}</span>
                  <span className="text-muted-foreground"> — {v.definition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quotes */}
        {task.quotes.length > 0 && (
          <div>
            <p className="text-sm font-semibold">Key Quotations</p>
            <div className="mt-1 space-y-2">
              {task.quotes.map((q, i) => (
                <div key={i} className="rounded-md border p-2 text-sm">
                  <p className="italic">&ldquo;{q.quote}&rdquo;</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {q.speaker && <span className="font-medium">{q.speaker} — </span>}
                    {q.context}
                    {q.technique && <span className="ml-1 text-xs">({q.technique})</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {task.tips.length > 0 && (
          <div className="rounded-md border border-dashed p-3">
            <p className="text-sm font-semibold">Tips</p>
            <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-0.5">
              {task.tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function DifferentiationBuilder() {
  const [taskType, setTaskType] = useState<TaskType>('essay_writing')
  const [essaySubType, setEssaySubType] = useState<EssaySubType>('analytical')
  const [topic, setTopic] = useState<string>('Macbeth')
  const [customPrompt, setCustomPrompt] = useState('')
  const [generated, setGenerated] = useState<GeneratedTask[] | null>(null)
  const [previewTab, setPreviewTab] = useState<string>('side-by-side')

  const classData = useMemo(() => getClassDistribution(), [])
  const selectedTaskConfig = TASK_TYPES.find((t) => t.value === taskType)

  const handleGenerate = () => {
    const subType = taskType === 'essay_writing' ? essaySubType : null
    const tasks = generateTasks(taskType, subType, topic, customPrompt)
    setGenerated(tasks)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Layers className="h-8 w-8 text-primary" />
          Differentiation Toolkit
        </h1>
        <p className="mt-1 text-muted-foreground">
          Build differentiated resources at Foundation, Core, and Extension levels for any task.
        </p>
      </div>

      {/* Class data banner */}
      <ClassDataBanner dist={classData} />

      {/* Builder form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Build Differentiated Resources</CardTitle>
          <CardDescription>
            Select a task type and topic, then generate three versions automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Task type selection */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Task Type</Label>
              <Select value={taskType} onValueChange={(v) => setTaskType(v as TaskType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TASK_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      <span className="flex items-center gap-2">
                        {t.icon}
                        {t.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Essay sub-type (only for essay_writing) */}
            {taskType === 'essay_writing' && selectedTaskConfig?.subTypes && (
              <div className="space-y-2">
                <Label>Essay Type</Label>
                <Select value={essaySubType} onValueChange={(v) => setEssaySubType(v as EssaySubType)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedTaskConfig.subTypes.map((st) => (
                      <SelectItem key={st.value} value={st.value}>
                        {st.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Topic selection */}
          <div className="space-y-2">
            <Label>Text / Topic</Label>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {availableTopics.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Custom prompt (optional) */}
          <div className="space-y-2">
            <Label>Custom Task Prompt (optional)</Label>
            <Textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="e.g. How does Shakespeare present the theme of ambition in Macbeth?"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use the default prompt for the selected task type.
            </p>
          </div>

          {/* Level preview summary */}
          <div className="grid gap-3 sm:grid-cols-3">
            {LEVELS.map((level) => {
              const cfg = LEVEL_CONFIG[level]
              return (
                <div
                  key={level}
                  className={`rounded-lg border-2 ${cfg.borderColour} ${cfg.bgColour} p-3`}
                >
                  <p className={`text-sm font-semibold ${cfg.colour}`}>
                    {cfg.label} ({cfg.tag})
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{cfg.description}</p>
                </div>
              )
            })}
          </div>

          {/* Generate button */}
          <Button onClick={handleGenerate} size="lg" className="w-full sm:w-auto">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate 3 Differentiated Versions
          </Button>
        </CardContent>
      </Card>

      {/* Generated preview */}
      {generated && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Preview</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePrint(generated, 'all')}
              >
                <Printer className="mr-2 h-4 w-4" />
                Print All
              </Button>
              {LEVELS.map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePrint(generated, level)}
                >
                  <Printer className="mr-2 h-3 w-3" />
                  {LEVEL_CONFIG[level].label}
                </Button>
              ))}
            </div>
          </div>

          <Tabs value={previewTab} onValueChange={setPreviewTab}>
            <TabsList>
              <TabsTrigger value="side-by-side">Side by Side</TabsTrigger>
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="core">Core</TabsTrigger>
              <TabsTrigger value="extension">Extension</TabsTrigger>
            </TabsList>

            <TabsContent value="side-by-side">
              <div className="grid gap-4 lg:grid-cols-3">
                {generated.map((task) => (
                  <TaskPreviewCard key={task.level} task={task} />
                ))}
              </div>
            </TabsContent>

            {LEVELS.map((level) => (
              <TabsContent key={level} value={level}>
                <div className="max-w-2xl">
                  {generated.filter((t) => t.level === level).map((task) => (
                    <TaskPreviewCard key={task.level} task={task} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* Scaffold library overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Scaffold Library</CardTitle>
          <CardDescription>
            Browse all pre-built scaffolds, sentence starters, vocabulary sheets, and quote banks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sentence-starters">
            <TabsList className="flex-wrap h-auto gap-1">
              <TabsTrigger value="sentence-starters">Sentence Starters</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulary Sheets</TabsTrigger>
              <TabsTrigger value="quotes">Quote Banks</TabsTrigger>
            </TabsList>

            <TabsContent value="sentence-starters" className="mt-4">
              <div className="grid gap-4 md:grid-cols-3">
                {LEVELS.map((level) => {
                  const cfg = LEVEL_CONFIG[level]
                  const banks = sentenceStarterBanks.filter((b) => b.level === level)
                  return (
                    <div key={level} className={`rounded-lg border-2 ${cfg.borderColour} ${cfg.bgColour} p-4`}>
                      <p className={`text-sm font-semibold ${cfg.colour}`}>{cfg.label} ({cfg.tag})</p>
                      {banks.map((bank) => (
                        <div key={bank.id} className="mt-3">
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{bank.skill}</p>
                          <ul className="mt-1 list-disc pl-4 text-sm space-y-0.5">
                            {bank.starters.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="vocabulary" className="mt-4">
              <div className="space-y-6">
                {supportedTexts.map((text) => (
                  <div key={text}>
                    <h3 className="text-base font-semibold">{text}</h3>
                    <div className="mt-2 grid gap-4 md:grid-cols-3">
                      {LEVELS.map((level) => {
                        const cfg = LEVEL_CONFIG[level]
                        const sheet = getVocabularySheet(text, level)
                        if (!sheet) return null
                        return (
                          <div key={level} className={`rounded-lg border-2 ${cfg.borderColour} ${cfg.bgColour} p-4`}>
                            <p className={`text-sm font-semibold ${cfg.colour}`}>{cfg.label}</p>
                            <div className="mt-2 space-y-2">
                              {sheet.words.map((w, i) => (
                                <div key={i} className="text-sm">
                                  <span className="font-medium">{w.term}</span>
                                  <span className="text-muted-foreground"> — {w.definition}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="quotes" className="mt-4">
              <div className="space-y-6">
                {supportedTexts.map((text) => (
                  <div key={text}>
                    <h3 className="text-base font-semibold">{text}</h3>
                    <div className="mt-2 grid gap-4 md:grid-cols-3">
                      {(['accessible', 'moderate', 'challenging'] as const).map((difficulty, idx) => {
                        const level = LEVELS[idx]
                        const cfg = LEVEL_CONFIG[level]
                        const bank = getQuoteBank(text, difficulty)
                        if (!bank) return null
                        return (
                          <div key={difficulty} className={`rounded-lg border-2 ${cfg.borderColour} ${cfg.bgColour} p-4`}>
                            <p className={`text-sm font-semibold ${cfg.colour}`}>
                              {cfg.label} — {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                            </p>
                            <div className="mt-2 space-y-2">
                              {bank.quotes.map((q, i) => (
                                <div key={i} className="rounded-md border bg-background p-2 text-sm">
                                  <p className="italic">&ldquo;{q.quote}&rdquo;</p>
                                  <p className="mt-0.5 text-xs text-muted-foreground">
                                    {q.speaker && <span className="font-medium">{q.speaker}</span>}
                                    {q.technique && <span className="ml-1">({q.technique})</span>}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
