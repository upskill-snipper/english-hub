import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasActiveSubscription } from '@/lib/course-access'

// ─── POST /api/toolkit/generate-test ───────────────────────────────────────
// Generates a custom quiz from the available question bank + set-texts data.
// Rate limited: 10 per hour per IP.
// ──────────────────────────────────────────────────────────────────────────

interface RequestBody {
  board: string
  topic: string
  difficulty: 'Foundation' | 'Higher'
  questionCount: number
}

interface GeneratedQuestion {
  id: string
  type: 'multiple-choice' | 'short-answer'
  question: string
  options?: string[]
  correctAnswer: string | number
  explanation: string
  topic: string
}

// ─── Question bank ─────────────────────────────────────────────────────────
// Template-based questions that cover key GCSE English topics.
// These are generated deterministically from set-text metadata.

function generateQuestionsFromSetTexts(
  board: string,
  topic: string,
  difficulty: string,
  count: number
): GeneratedQuestion[] {
  const relevantTexts = SET_TEXTS.filter((t) => {
    if (board && board !== 'all') {
      return t.boards.includes(board as never)
    }
    return true
  })

  // Find the specific text if the topic matches a set text
  const targetText = relevantTexts.find(
    (t) => t.title.toLowerCase() === topic.toLowerCase() || t.slug === topic
  )

  const questions: GeneratedQuestion[] = []
  let qId = 0

  // Template question generators
  const mcqTemplates = [
    {
      q: (title: string, author: string) =>
        `Who wrote "${title}"?`,
      opts: (author: string) => {
        const distractors = ['Charles Dickens', 'William Shakespeare', 'J.B. Priestley', 'George Orwell', 'Mary Shelley', 'Robert Louis Stevenson']
          .filter((d) => d !== author)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        const all = [author, ...distractors].sort(() => Math.random() - 0.5)
        return { options: all, correct: all.indexOf(author) }
      },
      explain: (author: string, title: string) => `"${title}" was written by ${author}.`,
    },
    {
      q: (title: string) =>
        `What category does "${title}" fall under in the GCSE English Literature specification?`,
      opts: (author: string, category: string) => {
        const labels: Record<string, string> = {
          shakespeare: 'Shakespeare',
          '19th-century': '19th-Century Novel',
          modern: 'Modern Text',
          'poetry-anthology': 'Poetry Anthology',
        }
        const correctLabel = labels[category] || category
        const all = Object.values(labels).sort(() => Math.random() - 0.5)
        if (!all.includes(correctLabel)) all.push(correctLabel)
        const unique = [...new Set(all)].slice(0, 4)
        if (!unique.includes(correctLabel)) unique[0] = correctLabel
        return { options: unique, correct: unique.indexOf(correctLabel) }
      },
      explain: (author: string, title: string, category: string) => {
        const labels: Record<string, string> = {
          shakespeare: 'Shakespeare',
          '19th-century': '19th-Century Novel',
          modern: 'Modern Text',
          'poetry-anthology': 'Poetry Anthology',
        }
        return `"${title}" is studied as a ${labels[category] || category} text.`
      },
    },
    {
      q: (title: string) =>
        `Which of these themes is commonly associated with "${title}"?`,
      opts: (_a: string, _c: string, themes?: string[]) => {
        const themePool = themes && themes.length > 0
          ? themes
          : ['Power', 'Ambition', 'Love', 'Social Class', 'Morality', 'Good vs Evil']
        const correct = themePool[0]
        const distractors = ['Environmentalism', 'Technology', 'Space Exploration', 'Friendship', 'Adventure', 'Comedy']
          .filter((d) => !themePool.includes(d))
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        const all = [correct, ...distractors].sort(() => Math.random() - 0.5)
        return { options: all, correct: all.indexOf(correct) }
      },
      explain: (_a: string, title: string, _c: string, themes?: string[]) => {
        const t = themes && themes.length > 0 ? themes.join(', ') : 'various literary themes'
        return `Key themes in "${title}" include: ${t}.`
      },
    },
  ]

  const shortAnswerTemplates = [
    {
      q: (title: string) =>
        `Briefly explain one key theme explored in "${title}" and why it is significant.`,
      answer: (title: string, themes?: string[]) => {
        const theme = themes?.[0] || 'social responsibility'
        return `One key theme in "${title}" is ${theme}. This is significant because it reflects wider societal concerns and is a central part of the writer's message.`
      },
    },
    {
      q: (title: string, author: string) =>
        `How does ${author} use language or structure to convey meaning in "${title}"? Give one example.`,
      answer: (title: string) =>
        `The writer uses various literary techniques throughout "${title}" to convey meaning, including imagery, symbolism, and structural choices such as shifts in perspective or chronological disruption.`,
    },
    {
      q: (title: string) =>
        difficulty === 'Higher'
          ? `Analyse how the context in which "${title}" was written influences its themes.`
          : `What is the historical context of "${title}" and how does it affect the story?`,
      answer: (title: string) =>
        `The historical and social context of "${title}" directly influences its themes. Writers often reflect the concerns, values, and tensions of their time period in their work.`,
    },
  ]

  // Generate questions
  const textsToUse = targetText ? [targetText] : relevantTexts.slice(0, 5)

  for (let i = 0; i < count; i++) {
    const text = textsToUse[i % textsToUse.length]
    if (!text) break

    if (i % 3 !== 2) {
      // Multiple-choice
      const template = mcqTemplates[i % mcqTemplates.length]
      const { options, correct } = template.opts(text.author, text.category, text.keyThemes)
      questions.push({
        id: `gen-${++qId}`,
        type: 'multiple-choice',
        question: template.q(text.title, text.author),
        options,
        correctAnswer: correct,
        explanation: template.explain(text.author, text.title, text.category, text.keyThemes),
        topic: text.title,
      })
    } else {
      // Short answer
      const template = shortAnswerTemplates[Math.floor(i / 3) % shortAnswerTemplates.length]
      questions.push({
        id: `gen-${++qId}`,
        type: 'short-answer',
        question: template.q(text.title, text.author),
        correctAnswer: template.answer(text.title, text.keyThemes),
        explanation: template.answer(text.title, text.keyThemes),
        topic: text.title,
      })
    }
  }

  return questions
}

export async function POST(request: NextRequest) {
  // 1. Authenticate
  const supabase = createServerSupabaseClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'You must be signed in to generate a custom test.' },
      { status: 401 }
    )
  }

  // 2. Subscription check — Pro-only feature
  const isPro = await hasActiveSubscription(supabase, user.id)
  if (!isPro) {
    return NextResponse.json(
      { error: 'Custom test generation is a Pro feature. Please upgrade your subscription to continue.' },
      { status: 403 }
    )
  }

  // 3. Per-user rate limit
  const rl = await rateLimit(`toolkit-test:${user.id}`, {
    limit: 10,
    windowSeconds: 3600,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. You can generate up to 10 tests per hour.' },
      { status: 429 }
    )
  }

  try {
    const body: RequestBody = await request.json()
    const { board, topic, difficulty, questionCount } = body

    if (!topic || !questionCount) {
      return NextResponse.json(
        { error: 'Missing required fields: topic, questionCount' },
        { status: 400 }
      )
    }

    const count = Math.min(Math.max(questionCount, 5), 30)
    const questions = generateQuestionsFromSetTexts(
      board || 'all',
      topic,
      difficulty || 'Foundation',
      count
    )

    return NextResponse.json({
      questions,
      metadata: {
        topic,
        difficulty: difficulty || 'Foundation',
        board: board || 'all',
        generatedAt: new Date().toISOString(),
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate test. Please try again.' },
      { status: 500 }
    )
  }
}
