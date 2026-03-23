'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  Sparkles,
  School,
  GraduationCap,
  Users,
  BookOpen,
  BarChart3,
  PartyPopper,
  ArrowRight,
  ArrowLeft,
  SkipForward,
  Copy,
  Check,
  Upload,
  Target,
  TrendingUp,
  ClipboardList,
  Lightbulb,
  CheckCircle,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// ── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = 'onboarding_progress'
const SETUP_COMPLETE_KEY = 'first_time_setup_complete'

const STEPS = [
  { id: 'welcome', label: 'Welcome', icon: Sparkles },
  { id: 'school', label: 'Set Up Your School', icon: School },
  { id: 'class', label: 'Create Your First Class', icon: GraduationCap },
  { id: 'students', label: 'Invite Students', icon: Users },
  { id: 'lessons', label: 'Explore Lesson Plans', icon: BookOpen },
  { id: 'analytics', label: 'Set Up Analytics', icon: BarChart3 },
  { id: 'done', label: 'All Done!', icon: PartyPopper },
] as const

const SCHOOL_TYPES = [
  { value: 'secondary', label: 'Secondary School' },
  { value: 'sixth_form', label: 'Sixth Form' },
  { value: 'independent', label: 'Independent School' },
  { value: 'academy', label: 'Academy' },
  { value: 'mat', label: 'Multi-Academy Trust' },
  { value: 'other', label: 'Other' },
]

const YEAR_GROUPS = [
  'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13',
]

const EXAM_BOARDS = [
  { value: 'aqa', label: 'AQA' },
  { value: 'edexcel', label: 'Edexcel (Pearson)' },
  { value: 'ocr', label: 'OCR' },
  { value: 'wjec', label: 'WJEC / Eduqas' },
  { value: 'cie', label: 'Cambridge (CIE)' },
]

const ACADEMIC_YEARS = ['2025/2026', '2026/2027']

// ── Types ───────────────────────────────────────────────────────────────────

interface OnboardingData {
  currentStep: number
  school: {
    name: string
    address: string
    city: string
    postcode: string
    schoolType: string
    contactEmail: string
    contactPhone: string
  }
  firstClass: {
    name: string
    yearGroup: string
    examBoard: string
    academicYear: string
  }
  students: {
    method: 'code' | 'upload' | null
    joinCode: string
  }
  analytics: {
    targetScore: string
    trackAttendance: boolean
  }
}

const DEFAULT_DATA: OnboardingData = {
  currentStep: 0,
  school: {
    name: '',
    address: '',
    city: '',
    postcode: '',
    schoolType: '',
    contactEmail: '',
    contactPhone: '',
  },
  firstClass: {
    name: '',
    yearGroup: '',
    examBoard: '',
    academicYear: ACADEMIC_YEARS[0],
  },
  students: {
    method: null,
    joinCode: '',
  },
  analytics: {
    targetScore: '',
    trackAttendance: false,
  },
}

// ── Recommended Lessons (mock) ──────────────────────────────────────────────

const RECOMMENDED_LESSONS = [
  {
    title: 'Introduction to Unseen Poetry',
    topic: 'Poetry Analysis',
    duration: '45 min',
    difficulty: 'Intermediate',
  },
  {
    title: 'Macbeth: Key Themes & Quotes',
    topic: 'Shakespeare',
    duration: '60 min',
    difficulty: 'Intermediate',
  },
  {
    title: 'Persuasive Writing Techniques',
    topic: 'Non-Fiction Writing',
    duration: '50 min',
    difficulty: 'Foundation',
  },
  {
    title: 'An Inspector Calls: Social Context',
    topic: 'Modern Drama',
    duration: '55 min',
    difficulty: 'Higher',
  },
  {
    title: 'Language Paper 1: Narrative Writing',
    topic: 'Exam Skills',
    duration: '40 min',
    difficulty: 'All Levels',
  },
]

// ── Helper: generate a mock join code ───────────────────────────────────────

function generateJoinCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

// ── Component ───────────────────────────────────────────────────────────────

export function OnboardingWizard() {
  const router = useRouter()
  const [data, setData] = useState<OnboardingData>(DEFAULT_DATA)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [isAnimating, setIsAnimating] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const currentStep = data.currentStep
  const totalSteps = STEPS.length
  const progressPercent = Math.round((currentStep / (totalSteps - 1)) * 100)

  // Load saved progress on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as OnboardingData
        setData(parsed)
      }
    } catch {
      // Ignore parse errors
    }
  }, [])

  // Save progress whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // Ignore storage errors
    }
  }, [data])

  const updateData = useCallback(
    <K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const updateSchool = useCallback(
    (field: keyof OnboardingData['school'], value: string) => {
      setData((prev) => ({
        ...prev,
        school: { ...prev.school, [field]: value },
      }))
    },
    []
  )

  const updateClass = useCallback(
    (field: keyof OnboardingData['firstClass'], value: string) => {
      setData((prev) => ({
        ...prev,
        firstClass: { ...prev.firstClass, [field]: value },
      }))
    },
    []
  )

  const updateAnalytics = useCallback(
    (field: keyof OnboardingData['analytics'], value: string | boolean) => {
      setData((prev) => ({
        ...prev,
        analytics: { ...prev.analytics, [field]: value },
      }))
    },
    []
  )

  const animateTransition = useCallback(
    (dir: 'forward' | 'backward', callback: () => void) => {
      setDirection(dir)
      setIsAnimating(true)
      // Short delay for exit animation
      setTimeout(() => {
        callback()
        // Allow enter animation
        requestAnimationFrame(() => {
          setIsAnimating(false)
        })
      }, 200)
    },
    []
  )

  const goNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      animateTransition('forward', () => {
        updateData('currentStep', currentStep + 1)
      })
    }
  }, [currentStep, totalSteps, animateTransition, updateData])

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      animateTransition('backward', () => {
        updateData('currentStep', currentStep - 1)
      })
    }
  }, [currentStep, animateTransition, updateData])

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps && step !== currentStep) {
        const dir = step > currentStep ? 'forward' : 'backward'
        animateTransition(dir, () => {
          updateData('currentStep', step)
        })
      }
    },
    [currentStep, totalSteps, animateTransition, updateData]
  )

  const handleComplete = useCallback(() => {
    localStorage.setItem(SETUP_COMPLETE_KEY, 'true')
    localStorage.removeItem(STORAGE_KEY)
    router.push('/school')
  }, [router])

  const handleGenerateCode = useCallback(() => {
    const code = generateJoinCode()
    setData((prev) => ({
      ...prev,
      students: { ...prev.students, method: 'code', joinCode: code },
    }))
  }, [])

  const handleCopyCode = useCallback(async () => {
    if (data.students.joinCode) {
      await navigator.clipboard.writeText(data.students.joinCode)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }, [data.students.joinCode])

  // ── Step content renderers ──────────────────────────────────────────────

  const renderWelcome = () => (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-10 w-10 text-primary" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome to The English Hub
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          We are glad you are here. Let us get you set up so you can start
          making the most of your teaching experience.
        </p>
      </div>
      <Separator className="my-2" />
      <div className="grid gap-4 sm:grid-cols-2 w-full max-w-lg">
        {[
          {
            icon: ClipboardList,
            title: 'Lesson Plans',
            desc: 'Ready-made lessons aligned to exam boards',
          },
          {
            icon: Target,
            title: 'Student Tracking',
            desc: 'Monitor progress and identify weak areas',
          },
          {
            icon: TrendingUp,
            title: 'Analytics Dashboard',
            desc: 'Visualise class and student performance',
          },
          {
            icon: Lightbulb,
            title: 'Smart Recommendations',
            desc: 'AI-powered suggestions for each student',
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-lg border border-border/60 p-3 text-left"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{title}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        This setup takes about 5 minutes. You can skip steps and come back later.
      </p>
    </div>
  )

  const renderSchoolSetup = () => (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Set Up Your School
        </h2>
        <p className="text-sm text-muted-foreground">
          Tell us about your school so we can personalise your experience.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="school-name">School Name *</Label>
          <Input
            id="school-name"
            placeholder="e.g. Oakwood Academy"
            value={data.school.name}
            onChange={(e) => updateSchool('name', e.target.value)}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="school-address">Address</Label>
          <Input
            id="school-address"
            placeholder="Street address"
            value={data.school.address}
            onChange={(e) => updateSchool('address', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="school-city">City</Label>
          <Input
            id="school-city"
            placeholder="e.g. Manchester"
            value={data.school.city}
            onChange={(e) => updateSchool('city', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="school-postcode">Postcode</Label>
          <Input
            id="school-postcode"
            placeholder="e.g. M1 2AB"
            value={data.school.postcode}
            onChange={(e) => updateSchool('postcode', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>School Type</Label>
          <Select
            value={data.school.schoolType}
            onValueChange={(val) => updateSchool('schoolType', val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {SCHOOL_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="school-phone">Phone</Label>
          <Input
            id="school-phone"
            placeholder="e.g. 0161 123 4567"
            value={data.school.contactPhone}
            onChange={(e) => updateSchool('contactPhone', e.target.value)}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="school-email">Contact Email *</Label>
          <Input
            id="school-email"
            type="email"
            placeholder="office@school.ac.uk"
            value={data.school.contactEmail}
            onChange={(e) => updateSchool('contactEmail', e.target.value)}
          />
        </div>
      </div>
    </div>
  )

  const renderCreateClass = () => (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Create Your First Class
        </h2>
        <p className="text-sm text-muted-foreground">
          Set up a class to organise your students and assign work.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="class-name">Class Name *</Label>
          <Input
            id="class-name"
            placeholder="e.g. 10A English Literature"
            value={data.firstClass.name}
            onChange={(e) => updateClass('name', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Year Group</Label>
          <Select
            value={data.firstClass.yearGroup}
            onValueChange={(val) => updateClass('yearGroup', val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {YEAR_GROUPS.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Exam Board</Label>
          <Select
            value={data.firstClass.examBoard}
            onValueChange={(val) => updateClass('examBoard', val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select board" />
            </SelectTrigger>
            <SelectContent>
              {EXAM_BOARDS.map((b) => (
                <SelectItem key={b.value} value={b.value}>
                  {b.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label>Academic Year</Label>
          <Select
            value={data.firstClass.academicYear}
            onValueChange={(val) => updateClass('academicYear', val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {ACADEMIC_YEARS.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )

  const renderInviteStudents = () => (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Invite Students
        </h2>
        <p className="text-sm text-muted-foreground">
          Share a join code with your students, or upload a student list.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Join Code Option */}
        <Card
          className={cn(
            'cursor-pointer transition-all duration-200',
            data.students.method === 'code'
              ? 'border-primary/50 ring-2 ring-primary/20'
              : 'hover:border-border'
          )}
          onClick={handleGenerateCode}
        >
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ClipboardList className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Generate Join Code</CardTitle>
            <CardDescription>
              Students enter the code to join your class instantly.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Upload Option */}
        <Card
          className={cn(
            'cursor-pointer transition-all duration-200',
            data.students.method === 'upload'
              ? 'border-primary/50 ring-2 ring-primary/20'
              : 'hover:border-border'
          )}
          onClick={() =>
            setData((prev) => ({
              ...prev,
              students: { ...prev.students, method: 'upload' },
            }))
          }
        >
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Upload Student List</CardTitle>
            <CardDescription>
              Import a CSV or spreadsheet with student names and emails.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Join Code Display */}
      {data.students.method === 'code' && data.students.joinCode && (
        <div className="rounded-lg border border-border/60 bg-muted/30 p-6 text-center space-y-3">
          <p className="text-sm text-muted-foreground">Your class join code</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-mono font-bold tracking-[0.3em] text-primary">
              {data.students.joinCode}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyCode}
              aria-label="Copy join code"
            >
              {copiedCode ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Share this code with your students. They can enter it at the join page
            to connect to your class.
          </p>
        </div>
      )}

      {/* Upload placeholder */}
      {data.students.method === 'upload' && (
        <div className="rounded-lg border-2 border-dashed border-border/60 p-8 text-center space-y-3">
          <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Drop your file here, or click to browse</p>
            <p className="text-xs text-muted-foreground mt-1">
              Accepted formats: .csv, .xlsx (max 200 students)
            </p>
          </div>
          <Button variant="outline" size="sm">
            Choose File
          </Button>
        </div>
      )}
    </div>
  )

  const renderExploreLessons = () => {
    const board = EXAM_BOARDS.find((b) => b.value === data.firstClass.examBoard)
    const boardLabel = board?.label ?? 'your exam board'

    return (
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Explore Lesson Plans
          </h2>
          <p className="text-sm text-muted-foreground">
            {board
              ? `Here are popular lessons for ${boardLabel}. You can browse more from the dashboard.`
              : 'Here are some of our most popular lessons to get you started.'}
          </p>
        </div>

        <div className="grid gap-3">
          {RECOMMENDED_LESSONS.map((lesson) => (
            <div
              key={lesson.title}
              className="flex items-center gap-4 rounded-lg border border-border/60 p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{lesson.title}</p>
                <p className="text-xs text-muted-foreground">
                  {lesson.topic} &middot; {lesson.duration}
                </p>
              </div>
              <Badge variant="outline" className="shrink-0 text-xs">
                {lesson.difficulty}
              </Badge>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-primary/5 border border-primary/10 p-4 text-center space-y-2">
          <Lightbulb className="h-5 w-5 mx-auto text-primary" />
          <p className="text-sm">
            <span className="font-medium">Quick tip:</span> You can assign any
            lesson directly to a class from the Lessons page. Students receive
            it in their dashboard instantly.
          </p>
        </div>
      </div>
    )
  }

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Set Up Analytics
        </h2>
        <p className="text-sm text-muted-foreground">
          Understand what tracking is available and optionally set class targets.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: TrendingUp,
            title: 'Performance Trends',
            desc: 'Track scores over time across quizzes, essays, and assessments.',
          },
          {
            icon: Target,
            title: 'Weak Area Detection',
            desc: 'Automatically identify topics students struggle with.',
          },
          {
            icon: BarChart3,
            title: 'Class Comparisons',
            desc: 'Compare progress between classes and year groups.',
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-lg border border-border/60 p-4 space-y-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <p className="font-medium text-sm">{title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">
          Set a target score for your class{' '}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </h3>
        <div className="flex items-end gap-3 max-w-xs">
          <div className="space-y-2 flex-1">
            <Label htmlFor="target-score">Target Average (%)</Label>
            <Input
              id="target-score"
              type="number"
              min={0}
              max={100}
              placeholder="e.g. 70"
              value={data.analytics.targetScore}
              onChange={(e) => updateAnalytics('targetScore', e.target.value)}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          You can always change targets later from the Analytics page.
        </p>
      </div>
    </div>
  )

  const renderDone = () => {
    const setupItems = [
      {
        label: 'School',
        value: data.school.name || 'Skipped',
        done: !!data.school.name,
      },
      {
        label: 'First class',
        value: data.firstClass.name || 'Skipped',
        done: !!data.firstClass.name,
      },
      {
        label: 'Student invites',
        value:
          data.students.method === 'code'
            ? `Join code: ${data.students.joinCode}`
            : data.students.method === 'upload'
              ? 'Student list uploaded'
              : 'Skipped',
        done: !!data.students.method,
      },
      {
        label: 'Analytics target',
        value: data.analytics.targetScore
          ? `${data.analytics.targetScore}% target`
          : 'No target set',
        done: !!data.analytics.targetScore,
      },
    ]

    return (
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <PartyPopper className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            You are all set!
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Your account is ready to go. Here is a summary of what you have
            configured.
          </p>
        </div>

        <div className="w-full max-w-md space-y-2">
          {setupItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border border-border/60 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle
                  className={cn(
                    'h-4 w-4',
                    item.done
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-muted-foreground/40'
                  )}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-sm text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>

        <Separator className="my-2" />

        <div className="grid gap-3 sm:grid-cols-3 w-full max-w-lg">
          {[
            { label: 'Dashboard', href: '/school', icon: BarChart3 },
            { label: 'Lessons', href: '/school/lessons', icon: BookOpen },
            { label: 'Students', href: '/school/students', icon: Users },
          ].map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              variant="outline"
              className="h-auto flex-col gap-2 py-4"
              onClick={() => {
                handleComplete()
                router.push(href)
              }}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>

        <Button size="lg" className="mt-2" onClick={handleComplete}>
          Go to Dashboard
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  // Map step index to renderer
  const stepRenderers = [
    renderWelcome,
    renderSchoolSetup,
    renderCreateClass,
    renderInviteStudents,
    renderExploreLessons,
    renderAnalytics,
    renderDone,
  ]

  // Can skip all steps except Welcome and Done
  const canSkip = currentStep > 0 && currentStep < totalSteps - 1
  const isLastContentStep = currentStep === totalSteps - 2
  const isDone = currentStep === totalSteps - 1

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      {/* ── Progress Bar ──────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span>{progressPercent}% complete</span>
        </div>
        <Progress value={progressPercent} />
      </div>

      {/* ── Step Indicators ───────────────────────────────────────────── */}
      <div className="hidden sm:flex items-center justify-between gap-1">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          const isActive = i === currentStep
          const isCompleted = i < currentStep
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => goToStep(i)}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 transition-colors text-xs',
                isActive
                  ? 'text-primary font-semibold'
                  : isCompleted
                    ? 'text-primary/60 cursor-pointer hover:text-primary'
                    : 'text-muted-foreground/50 cursor-pointer hover:text-muted-foreground'
              )}
              aria-label={`Go to step: ${step.label}`}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all',
                  isActive
                    ? 'border-primary bg-primary/10'
                    : isCompleted
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-muted-foreground/20'
                )}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Icon className="h-3.5 w-3.5" />
                )}
              </div>
              <span className="hidden lg:inline max-w-[80px] truncate">
                {step.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Step Content ──────────────────────────────────────────────── */}
      <Card>
        <CardContent
          ref={contentRef}
          className={cn(
            'pt-6 transition-all duration-200',
            isAnimating
              ? direction === 'forward'
                ? 'opacity-0 translate-x-4'
                : 'opacity-0 -translate-x-4'
              : 'opacity-100 translate-x-0'
          )}
        >
          {stepRenderers[currentStep]()}
        </CardContent>
      </Card>

      {/* ── Navigation ────────────────────────────────────────────────── */}
      {!isDone && (
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={goBack}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center gap-2">
            {canSkip && (
              <Button variant="ghost" onClick={goNext} className="gap-2 text-muted-foreground">
                Skip
                <SkipForward className="h-4 w-4" />
              </Button>
            )}
            <Button onClick={goNext} className="gap-2">
              {isLastContentStep ? 'Finish' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
