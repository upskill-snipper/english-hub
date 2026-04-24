import { NextRequest, NextResponse } from 'next/server'
import PptxGenJS from 'pptxgenjs'
import { rateLimit } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasActiveSubscription } from '@/lib/course-access'
import {
  titleSlide,
  objectivesSlide,
  phaseDividerSlide,
  activitySlide,
  differentiationSlide,
  vocabularySlide,
  plenarySlide,
  homeworkSlide,
  endSlide,
} from '@/lib/pptx/slide-templates'

// ─── Types (duplicated to avoid client import) ───────────────────────────────

interface LessonPlanData {
  title: string
  duration: string
  yearGroup: string
  examBoard: string
  text: string
  objectives: string[]
  starterActivity: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  mainActivities: {
    title: string
    duration: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }[]
  plenary: {
    title: string
    instructions: string
    differentiation?: { support: string; core: string; stretch: string }
  }
  keyVocabulary: string[]
  resourcesNeeded: string[]
  homework?: string
  teacherNotes?: string[]
}

interface ResourcePptxData {
  title: string
  type: string
  yearGroup: string
  examBoard: string
  duration?: string
  objectives: string[]
  firstActivity: string
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Extract a plausible "key question" from instructions text */
function extractKeyQuestion(instructions: string): string | undefined {
  const sentences = instructions.split(/(?<=[.!?])\s+/)
  const question = sentences.find((s) => s.trim().endsWith('?'))
  return question?.trim()
}

/** Extract numbered steps from a block of instructions */
function extractSteps(instructions: string): string[] {
  // If there are numbered items, use them
  const numbered = instructions.match(/\d+[\.\)]\s+[^\n]+/g)
  if (numbered && numbered.length >= 2) return numbered.map((s) => s.replace(/^\d+[\.\)]\s*/, ''))

  // Otherwise split by sentences and take meaningful ones
  const sentences = instructions
    .split(/(?<=[.!])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 15)
  return sentences.length > 1 ? sentences : [instructions]
}

/** Build 3 reflection prompts from plenary instructions */
function buildReflectionQuestions(instructions: string): string[] {
  const questions = instructions
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().endsWith('?'))
    .map((s) => s.trim())

  if (questions.length >= 3) return questions.slice(0, 3)

  // Provide intelligent defaults
  return [
    questions[0] || 'What concept from today\'s lesson do I need more help understanding?',
    questions[1] || 'Which skill am I still developing and need to practise?',
    questions[2] || 'What is one thing I can confidently explain to someone else?',
  ]
}

/** Pick a teacher tip from the notes array if available */
function pickTeacherTip(notes?: string[]): string | undefined {
  if (!notes || notes.length === 0) return undefined
  return notes[0]
}

// ─── Lesson Plan Builder ────────────────────────────────────────────────────

type SlideSkin = 'cream' | 'dark' | 'whiteboard'

function buildLessonPlanPptx(topic: string, data: LessonPlanData, skin: SlideSkin = 'cream'): PptxGenJS {
  const pptx = new PptxGenJS()
  pptx.author = 'The English Hub'
  pptx.company = 'The English Hub'
  pptx.title = `Lesson Plan: ${data.title}`
  pptx.subject = topic
  pptx.layout = 'LAYOUT_WIDE'

  // ── Slide 1: Title ──────────────────────────────────────────────────
  titleSlide(pptx, {
    title: data.title,
    subtitle: `${topic} \u2014 Lesson Plan`,
    yearGroup: data.yearGroup,
    examBoard: data.examBoard,
    duration: data.duration,
    text: data.text,
  })

  // ── Slide 2: Learning Objectives ────────────────────────────────────
  objectivesSlide(pptx, data.objectives)

  // ── Slide 3: Starter Phase Divider ──────────────────────────────────
  phaseDividerSlide(pptx, 'starter', data.starterActivity.title)

  // ── Slide 4: Starter Activity ───────────────────────────────────────
  const starterSteps = extractSteps(data.starterActivity.instructions)
  activitySlide(pptx, 'starter', {
    slideTitle: 'Starter Activity',
    activityTitle: data.starterActivity.title,
    duration: data.starterActivity.duration,
    instructions: starterSteps.join('\n'),
    keyQuestion: extractKeyQuestion(data.starterActivity.instructions),
    teacherTip: pickTeacherTip(data.teacherNotes),
  })

  // ── Slide 5: Starter Differentiation (if present) ───────────────────
  if (data.starterActivity.differentiation) {
    differentiationSlide(
      pptx,
      'starter',
      'Starter \u2014 Differentiation',
      data.starterActivity.differentiation,
    )
  }

  // ── Main Activities ─────────────────────────────────────────────────
  data.mainActivities.forEach((act, i) => {
    const label = data.mainActivities.length > 1
      ? `MAIN ACTIVITY ${i + 1}`
      : 'MAIN ACTIVITY'

    // Phase divider
    phaseDividerSlide(pptx, 'main', act.title)

    // Activity slide
    const mainSteps = extractSteps(act.instructions)
    activitySlide(pptx, 'main', {
      slideTitle: label,
      activityTitle: act.title,
      duration: act.duration,
      instructions: mainSteps.join('\n'),
      keyQuestion: extractKeyQuestion(act.instructions),
      expectedOutcomes: mainSteps.length > 2
        ? [mainSteps[mainSteps.length - 1]]
        : undefined,
      teacherTip: data.teacherNotes && data.teacherNotes.length > 1
        ? data.teacherNotes[Math.min(i + 1, data.teacherNotes.length - 1)]
        : undefined,
    })

    // Differentiation slide
    if (act.differentiation) {
      differentiationSlide(
        pptx,
        'main',
        `${label} \u2014 Differentiation`,
        act.differentiation,
      )
    }
  })

  // ── Plenary Phase Divider ───────────────────────────────────────────
  phaseDividerSlide(pptx, 'plenary', data.plenary.title)

  // ── Plenary Slide ───────────────────────────────────────────────────
  plenarySlide(pptx, {
    title: data.plenary.title,
    instructions: data.plenary.instructions,
    reflectionQuestions: buildReflectionQuestions(data.plenary.instructions),
  })

  // ── Plenary Differentiation ─────────────────────────────────────────
  if (data.plenary.differentiation) {
    differentiationSlide(
      pptx,
      'plenary',
      'Plenary \u2014 Differentiation',
      data.plenary.differentiation,
    )
  }

  // ── Vocabulary Slide ────────────────────────────────────────────────
  if (data.keyVocabulary.length > 0) {
    vocabularySlide(pptx, data.keyVocabulary)
  }

  // ── Homework Slide ──────────────────────────────────────────────────
  if (data.homework) {
    phaseDividerSlide(pptx, 'homework')
    homeworkSlide(pptx, {
      task: data.homework,
      resources: data.resourcesNeeded.length > 0 ? data.resourcesNeeded : undefined,
    })
  } else if (data.resourcesNeeded.length > 0) {
    // Still show resources even without homework
    homeworkSlide(pptx, {
      task: 'No homework set for this lesson.',
      resources: data.resourcesNeeded,
    })
  }

  // ── End Slide ───────────────────────────────────────────────────────
  endSlide(pptx)

  return pptx
}

// ─── Resource PPTX Builder ──────────────────────────────────────────────────

function buildResourcePptx(data: ResourcePptxData, skin: SlideSkin = 'cream'): PptxGenJS {
  const pptx = new PptxGenJS()
  pptx.author = 'The English Hub'
  pptx.company = 'The English Hub'
  pptx.title = data.title
  pptx.layout = 'LAYOUT_WIDE'

  // Title slide
  titleSlide(pptx, {
    title: data.title,
    subtitle: `${data.type} Resource`,
    yearGroup: data.yearGroup,
    examBoard: data.examBoard,
    duration: data.duration,
  })

  // Objectives
  objectivesSlide(pptx, data.objectives)

  // First Activity — use the activity slide template
  const steps = extractSteps(data.firstActivity)
  activitySlide(pptx, 'main', {
    slideTitle: 'First Activity',
    activityTitle: data.type,
    duration: data.duration || '',
    instructions: steps.join('\n'),
    keyQuestion: extractKeyQuestion(data.firstActivity),
  })

  // End
  endSlide(pptx)

  return pptx
}

// ─── API Route Handler ──────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── 1. Authenticate ────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json(
        { error: 'You must be signed in to generate lesson materials.' },
        { status: 401 },
      )
    }

    // ── 2. Subscription check — Premium / Teacher feature ─────────────
    const isPremium = await hasActiveSubscription(supabase, user.id)
    if (!isPremium) {
      return NextResponse.json(
        { error: 'Lesson material generation is a Premium feature. Please upgrade your subscription to continue.' },
        { status: 403 },
      )
    }

    // ── 3. Per-user rate limit: 20 per hour ────────────────────────────
    const rl = await rateLimit(`generate-pptx:${user.id}`, { limit: 20, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } },
      )
    }

    const body = await request.json()
    const { variant, topic, data, skin = 'cream' } = body as {
      variant: 'lesson-plan' | 'resource'
      topic?: string
      data: LessonPlanData | ResourcePptxData
      skin?: 'cream' | 'dark' | 'whiteboard'
    }

    let pptx: PptxGenJS
    let fileName: string

    if (variant === 'lesson-plan') {
      const lpData = data as LessonPlanData
      pptx = buildLessonPlanPptx(topic || 'Lesson', lpData, skin)
      fileName = `${(topic || 'Lesson').replace(/\s+/g, '-')}-lesson-plan.pptx`
    } else {
      const rData = data as ResourcePptxData
      pptx = buildResourcePptx(rData, skin)
      fileName = `${rData.title.replace(/[^a-zA-Z0-9]+/g, '-').replace(/-+$/, '')}.pptx`
    }

    // Generate as nodebuffer (server-side)
    const buffer = (await pptx.write({ outputType: 'nodebuffer' })) as Buffer

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': String(buffer.length),
      },
    })
  } catch (err) {
    console.error('[API/generate-pptx] Error:', err)
    return NextResponse.json(
      { error: 'Failed to generate PowerPoint file' },
      { status: 500 },
    )
  }
}
