import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { SET_TEXTS } from '@/lib/board/set-texts'

// ─── POST /api/toolkit/generate-notes ──────────────────────────────────────
// Generates structured revision notes for a topic.
// Uses Anthropic Claude if ANTHROPIC_API_KEY is set, otherwise returns
// template-based notes built from set-text metadata.
// Rate limited: 5 per hour per IP.
// ──────────────────────────────────────────────────────────────────────────

interface RequestBody {
  board: string
  topic: string
  targetGrade: number      // 1-9
  weakAreas?: string[]
}

function generateTemplateNotes(
  topic: string,
  board: string,
  targetGrade: number,
  weakAreas: string[]
): string {
  const text = SET_TEXTS.find(
    (t) => t.title.toLowerCase() === topic.toLowerCase() || t.slug === topic
  )

  const title = text?.title || topic
  const author = text?.author || 'the writer'
  const themes = text?.keyThemes || ['Power', 'Responsibility', 'Social Class', 'Morality']
  const category = text?.category || 'text'

  const gradeAdvice =
    targetGrade >= 7
      ? 'At Grade 7+, examiners expect you to analyse the writer\'s methods with sophistication, embed quotations fluently, and consider alternative interpretations. Use critical terminology precisely.'
      : targetGrade >= 5
        ? 'At Grade 5-6, aim to explain clearly how the writer uses language and structure. Support every point with a relevant quotation and explain its effect on the reader.'
        : 'At Grade 4, focus on making clear points supported by quotations. Identify techniques and explain their basic effect. Structure your response with clear paragraphs.'

  const weakAreaNotes = weakAreas.length > 0
    ? `\n\n## Focus Areas for Improvement\n\nBased on your performance data, prioritise these areas:\n\n${weakAreas.map((w) => `- **${w}** -- Revisit your notes and practise answering questions specifically on this topic.`).join('\n')}`
    : ''

  return `# Revision Notes: ${title}

**Author:** ${author}
**Category:** ${category === 'shakespeare' ? 'Shakespeare' : category === '19th-century' ? '19th-Century Novel' : category === 'modern' ? 'Modern Text' : 'Poetry'}
**Board:** ${board.toUpperCase()}
**Target:** Grade ${targetGrade}

---

## Key Themes

${themes.map((t, i) => `### ${i + 1}. ${t}\n\n${t} is a central theme in "${title}". ${author} explores this through characterisation, setting, and structural choices. Consider how this theme connects to the wider context of when the text was written.\n\n**Key quotation:** Select a quotation that illustrates this theme and practise analysing it in detail.\n`).join('\n')}

---

## Characters & Relationships

Think about the key characters in "${title}" and how ${author} presents them:

- How are they introduced and how do they develop?
- What methods does ${author} use to present them (dialogue, description, actions)?
- How do they relate to the text's key themes?
- What is the significance of their name, role, or position in the narrative?

---

## Writer's Methods

### Language
- Identify key **imagery** (metaphors, similes, personification)
- Look for **semantic fields** that reinforce themes
- Note changes in **tone** and what they suggest

### Structure
- How does ${author} organise the narrative or argument?
- Are there shifts in perspective, time, or focus?
- How does the opening and ending connect?

### Form
${category === 'shakespeare' ? '- Consider the use of **blank verse** vs **prose** and what the switch between them suggests about characters.\n- Look at **soliloquies** and **asides** for insight into character motivation.' : category === '19th-century' ? '- Consider the **narrative voice** -- is it first or third person? Reliable or unreliable?\n- Look at **chapter structure** and **serialisation** (if applicable).' : '- Consider how the **form** of the text (play, novel, etc.) shapes meaning.\n- Look at stage directions, dialogue, or narrative perspective.'}

---

## Exam Technique

${gradeAdvice}

### Model Paragraph Structure (PEEA)
1. **Point** -- State your argument clearly
2. **Evidence** -- Embed a short, relevant quotation
3. **Explanation** -- Analyse the language/technique used
4. **Alternative/Context** -- Consider a different interpretation or link to context

### Timing
- Read the question carefully and underline key words
- Plan for 3-5 minutes before writing
- Aim for 3-4 developed paragraphs in a 30-mark response
- Leave 2 minutes to proofread
${weakAreaNotes}

---

## Quick-Fire Revision Checklist

- [ ] Can you name 3 key themes and link each to a quotation?
- [ ] Can you explain the significance of the title?
- [ ] Do you know the historical/social context and how it shapes meaning?
- [ ] Can you compare two characters and their functions in the text?
- [ ] Can you write a PEEA paragraph under timed conditions?
- [ ] Have you practised at least one past paper question on this text?

---

*Generated by The English Hub AI Toolkit. These notes are a starting point -- supplement with your class notes, teacher feedback, and past paper practice.*`
}

export async function POST(request: NextRequest) {
  // Rate limit: 5 per hour
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`toolkit-notes:${ip}`, {
    limit: 5,
    windowSeconds: 3600,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. You can generate up to 5 sets of revision notes per hour.' },
      { status: 429 }
    )
  }

  try {
    const body: RequestBody = await request.json()
    const { board, topic, targetGrade, weakAreas } = body

    if (!topic) {
      return NextResponse.json(
        { error: 'Missing required field: topic' },
        { status: 400 }
      )
    }

    const grade = Math.min(9, Math.max(1, targetGrade || 5))

    // Check if Anthropic API key is available
    const anthropicKey = process.env.ANTHROPIC_API_KEY
    let notes: string

    if (anthropicKey) {
      // Use Claude for AI-generated notes
      try {
        const text = SET_TEXTS.find(
          (t) => t.title.toLowerCase() === topic.toLowerCase() || t.slug === topic
        )
        const textTitle = text?.title || topic
        const textAuthor = text?.author || ''
        const textThemes = text?.keyThemes?.join(', ') || ''

        const prompt = `You are an expert GCSE English teacher. Generate comprehensive revision notes for a student studying "${textTitle}"${textAuthor ? ` by ${textAuthor}` : ''}.

Board: ${board || 'AQA'}
Target Grade: ${grade}
${textThemes ? `Key themes to cover: ${textThemes}` : ''}
${weakAreas && weakAreas.length > 0 ? `Student's weak areas to focus on: ${weakAreas.join(', ')}` : ''}

Create detailed revision notes in Markdown format covering:
1. Key themes with quotations and analysis
2. Character analysis
3. Writer's methods (language, structure, form)
4. Exam technique advice tailored to the target grade
5. A quick revision checklist

Use UK English spelling. Be specific, include example quotations, and give practical exam advice. Keep the tone encouraging but rigorous.`

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': anthropicKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 2000,
            messages: [{ role: 'user', content: prompt }],
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const content = data.content?.[0]
          notes = content?.text || generateTemplateNotes(topic, board || 'aqa', grade, weakAreas || [])
        } else {
          // Fallback to template
          notes = generateTemplateNotes(topic, board || 'aqa', grade, weakAreas || [])
        }
      } catch {
        notes = generateTemplateNotes(topic, board || 'aqa', grade, weakAreas || [])
      }
    } else {
      // No API key -- use template-based notes
      notes = generateTemplateNotes(topic, board || 'aqa', grade, weakAreas || [])
    }

    return NextResponse.json({
      notes,
      metadata: {
        topic,
        board: board || 'aqa',
        targetGrade: grade,
        generatedAt: new Date().toISOString(),
        aiGenerated: !!anthropicKey,
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate notes. Please try again.' },
      { status: 500 }
    )
  }
}
