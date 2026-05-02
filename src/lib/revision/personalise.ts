// ─── Personalised Revision Analytics Engine ──────────────────────────────────
// Reads student data from localStorage and builds a StudentProfile that drives
// the personalised revision guide. All computation is client-side — no API calls.
// ──────────────────────────────────────────────────────────────────────────────

import type { ExamBoard } from '@/lib/board/board-config'
import { getBoardConfig } from '@/lib/board/board-config'
import {
  percentageToGCSEGrade,
  calculatePredictedGrade,
  getGradeRecommendation,
  type GCSEGrade,
} from '@/lib/grades'
import {
  LS_KEYS,
  lsGet,
  type QuizHistoryEntry,
  type StudiedPoem,
  type GameScoreEntry,
  type MarkingHistoryEntry,
} from '@/components/toolkit/toolkit-types'
import { TOPIC_META, TOPICS, getTopicsForBoard, type Topic } from '@/app/revision/quiz/quiz-data'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WeakTopic {
  topic: string
  label: string
  score: number
  attempts: number
  suggestion: string
}

export interface StrongTopic {
  topic: string
  label: string
  score: number
}

export interface AOGap {
  ao: string
  label: string
  avgScore: number
  maxScore: number
  percentage: number
}

export interface StudentProfile {
  predictedGrade: number
  predictedGradeRaw: number // average percentage before grade conversion
  weakTopics: WeakTopic[]
  strongTopics: StrongTopic[]
  unstudiedAreas: string[]
  aoGaps: AOGap[]
  totalQuizzes: number
  totalEssays: number
  totalPoems: number
  streak: number
  topicScores: Record<string, { avg: number; count: number }>
  board: ExamBoard | null
  boardName: string
  hasData: boolean
}

export interface RevisionBlock {
  title: string
  explanation: string
  examples: string[]
  quickTest: string[]
  revisionLink: { href: string; label: string }
}

export interface GradeAdvice {
  current: string
  next: string
  stretch: string[]
}

// ─── AO Definitions ──────────────────────────────────────────────────────────

const AO_LABELS: Record<string, string> = {
  AO1: 'Read, understand and respond',
  AO2: 'Analyse language, form and structure',
  AO3: 'Show understanding of contexts',
  AO4: 'Use accurate SPaG and vocabulary',
}

// ─── Streak Calculation ──────────────────────────────────────────────────────

function calculateStreak(): number {
  if (typeof window === 'undefined') return 0
  const raw = localStorage.getItem(LS_KEYS.streakDates)
  if (!raw) return 0
  try {
    const dates: string[] = JSON.parse(raw)
    if (!dates.length) return 0

    const unique = [...new Set(dates.map((d) => new Date(d).toISOString().slice(0, 10)))]
      .sort()
      .reverse()

    const today = new Date().toISOString().slice(0, 10)
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    if (unique[0] !== today && unique[0] !== yesterday) return 0

    let streak = 1
    for (let i = 1; i < unique.length; i++) {
      const prev = new Date(unique[i - 1])
      const curr = new Date(unique[i])
      const diffDays = Math.round((prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays === 1) streak++
      else break
    }
    return streak
  } catch {
    return 0
  }
}

// ─── Build Student Profile ───────────────────────────────────────────────────

export function buildStudentProfile(board: ExamBoard | null): StudentProfile {
  // Read raw data from localStorage
  const quizHistory = lsGet<QuizHistoryEntry[]>(LS_KEYS.quizHistory, [])
  const studiedPoems = lsGet<StudiedPoem[]>(LS_KEYS.studiedPoems, [])
  const gameScores = lsGet<GameScoreEntry[]>(LS_KEYS.gameScores, [])
  const markingHistory = lsGet<MarkingHistoryEntry[]>(LS_KEYS.markingHistory, [])
  const streak = calculateStreak()

  const boardConfig = getBoardConfig(board)
  const boardName = boardConfig?.shortName ?? 'Unknown'

  // ── Aggregate quiz scores by topic ──
  const topicScores: Record<string, { total: number; count: number }> = {}
  for (const entry of quizHistory) {
    if (!topicScores[entry.topic]) topicScores[entry.topic] = { total: 0, count: 0 }
    topicScores[entry.topic].total += entry.score
    topicScores[entry.topic].count += 1
  }

  const topicAverages: Record<string, { avg: number; count: number }> = {}
  for (const [topic, data] of Object.entries(topicScores)) {
    topicAverages[topic] = {
      avg: data.count > 0 ? data.total / data.count : 0,
      count: data.count,
    }
  }

  // ── Weak topics (average < 60%) ──
  const weakTopics: WeakTopic[] = []
  for (const [topic, data] of Object.entries(topicAverages)) {
    if (data.avg < 60) {
      const meta = TOPIC_META[topic as Topic]
      weakTopics.push({
        topic,
        label: meta?.label ?? topic,
        score: Math.round(data.avg),
        attempts: data.count,
        suggestion: getTopicSuggestion(topic, data.avg),
      })
    }
  }
  weakTopics.sort((a, b) => a.score - b.score) // worst first

  // ── Strong topics (average > 80%) ──
  const strongTopics: StrongTopic[] = []
  for (const [topic, data] of Object.entries(topicAverages)) {
    if (data.avg >= 80) {
      const meta = TOPIC_META[topic as Topic]
      strongTopics.push({
        topic,
        label: meta?.label ?? topic,
        score: Math.round(data.avg),
      })
    }
  }
  strongTopics.sort((a, b) => b.score - a.score) // best first

  // ── Unstudied areas ──
  const availableTopics = getTopicsForBoard(board)
  const attemptedTopics = new Set(Object.keys(topicAverages))
  const unstudiedTopics = availableTopics
    .filter((t) => !attemptedTopics.has(t))
    .map((t) => TOPIC_META[t]?.label ?? t)

  // Check for unstudied set texts
  const setTexts = getSetTextsForBoard(board)
  const studiedSlugs = new Set(studiedPoems.map((p) => p.slug))
  const unstudiedTexts = setTexts
    .filter((t) => !studiedSlugs.has(t.slug))
    .slice(0, 5)
    .map((t) => t.title)

  const unstudiedAreas = [...unstudiedTopics, ...unstudiedTexts]

  // ── AO gaps from marking history ──
  // The marking-history entries have an `aos` array with { code, label, score, max }
  const aoAccumulator: Record<
    string,
    { totalScore: number; totalMax: number; count: number; label: string }
  > = {}

  for (const entry of markingHistory) {
    // The entry shape from the results page: { id, grade, aos: AOScore[] }
    const raw = entry as unknown as Record<string, unknown>
    const aos = raw.aos as
      | Array<{ code?: string; label?: string; score?: number; max?: number }>
      | undefined

    if (Array.isArray(aos)) {
      for (const ao of aos) {
        const code = ao.code ?? ''
        if (!code) continue
        if (!aoAccumulator[code]) {
          aoAccumulator[code] = {
            totalScore: 0,
            totalMax: 0,
            count: 0,
            label: ao.label ?? AO_LABELS[code] ?? code,
          }
        }
        aoAccumulator[code].totalScore += ao.score ?? 0
        aoAccumulator[code].totalMax += ao.max ?? 0
        aoAccumulator[code].count += 1
      }
    }
  }

  const aoGaps: AOGap[] = Object.entries(aoAccumulator)
    .map(([code, data]) => ({
      ao: code,
      label: data.label,
      avgScore: data.count > 0 ? Math.round(data.totalScore / data.count) : 0,
      maxScore: data.count > 0 ? Math.round(data.totalMax / data.count) : 0,
      percentage: data.totalMax > 0 ? Math.round((data.totalScore / data.totalMax) * 100) : 0,
    }))
    .sort((a, b) => a.percentage - b.percentage) // worst first

  // ── Predicted grade ──
  const allScores = quizHistory.map((q) => q.score)
  const avgPercentage =
    allScores.length > 0 ? allScores.reduce((a, b) => a + b, 0) / allScores.length : 0
  const predictedGradeNum =
    allScores.length >= 2
      ? calculatePredictedGrade(allScores)
      : allScores.length === 1
        ? percentageToGCSEGrade(allScores[0])
        : 0

  const hasData = quizHistory.length > 0 || studiedPoems.length > 0 || markingHistory.length > 0

  return {
    predictedGrade: predictedGradeNum,
    predictedGradeRaw: Math.round(avgPercentage),
    weakTopics,
    strongTopics,
    unstudiedAreas,
    aoGaps,
    totalQuizzes: quizHistory.length,
    totalEssays: markingHistory.length,
    totalPoems: studiedPoems.length,
    streak,
    topicScores: topicAverages,
    board,
    boardName,
    hasData,
  }
}

// ─── Topic Suggestions ───────────────────────────────────────────────────────

function getTopicSuggestion(topic: string, avg: number): string {
  const deficit = 60 - avg
  const gradeImpact =
    deficit > 20
      ? 'This is significantly pulling your grade down.'
      : 'Improving this could bump you up a grade.'

  switch (topic) {
    case 'poetry':
      return `Your poetry scores average ${Math.round(avg)}%. ${gradeImpact} Focus on identifying techniques and explaining their effects.`
    case 'set-texts':
      return `Your set text scores average ${Math.round(avg)}%. ${gradeImpact} Revise key quotes and character motivations.`
    case 'language-techniques':
      return `Your language techniques scores average ${Math.round(avg)}%. ${gradeImpact} Practise identifying and analysing devices like metaphor, simile, and pathetic fallacy.`
    case 'exam-technique':
      return `Your exam technique scores average ${Math.round(avg)}%. ${gradeImpact} Work on essay structure, time management, and the PEE/PEEL framework.`
    case 'context':
      return `Your context scores average ${Math.round(avg)}%. ${gradeImpact} Learn key historical and social contexts for your set texts.`
    default:
      return `Your ${topic} scores average ${Math.round(avg)}%. ${gradeImpact}`
  }
}

// ─── Grade Advice ─────────────────────────────────────────────────────────────

export function getGradeAdvice(grade: number): GradeAdvice {
  const current = getGradeRecommendation(grade) || 'Keep practising to consolidate your skills.'
  const nextGrade = Math.min(9, grade + 1) as GCSEGrade
  const next = getGradeRecommendation(nextGrade) || 'Push into higher-order analytical thinking.'

  const stretch = getStretchQuestions(grade)

  return { current, next, stretch }
}

function getStretchQuestions(grade: number): string[] {
  if (grade <= 4) {
    return [
      'How does the writer use language to create a specific mood or atmosphere?',
      "What effect does the writer's choice of [specific word] have on the reader?",
      'Why do you think the writer chose to begin/end the text this way?',
      "How does the structure of the text help convey the writer's message?",
    ]
  }
  if (grade <= 6) {
    return [
      "How does the writer's structural choices mirror the thematic content of the text?",
      'Evaluate the argument that the protagonist is truly a victim of their circumstances.',
      "Compare how two writers use contrasting settings to reflect their characters' inner states.",
      '"The writer presents [character] as a symbol rather than a real person." To what extent do you agree?',
      "How does the writer use the opening and closing of the text to shape the reader's interpretation?",
    ]
  }
  // Grade 7+
  return [
    'To what extent is the text a product of its time, and could it carry the same meaning in a modern context?',
    'Evaluate the argument that [character] is the true protagonist. Consider alternative readings.',
    "How does the writer subvert genre conventions to challenge the reader's expectations?",
    '"All literature is political." Discuss this claim in relation to your set text, considering feminist, Marxist, or post-colonial perspectives.',
    'Compare how two writers use [technique] to achieve contrasting effects. Which is more successful, and why?',
    "Analyse how the writer's biographical context shapes the text's ideological position.",
  ]
}

// ─── Topic Revision Content ──────────────────────────────────────────────────

export function getTopicRevisionContent(
  topic: string,
  grade: number,
  _board: ExamBoard | null,
): RevisionBlock {
  // Return grade-appropriate content for the given topic
  if (topic === 'language-techniques') return getLanguageTechniquesContent(grade)
  if (topic === 'poetry') return getPoetryContent(grade)
  if (topic === 'set-texts') return getSetTextsContent(grade)
  if (topic === 'exam-technique') return getExamTechniqueContent(grade)
  if (topic === 'context') return getContextContent(grade)

  // Fallback
  return {
    title: topic,
    explanation: `Revise this topic area to strengthen your understanding.`,
    examples: ['Review your class notes on this topic.'],
    quickTest: ['What are the key points in this topic area?'],
    revisionLink: { href: '/revision', label: 'Revision Hub' },
  }
}

// ─── Language Techniques Content ─────────────────────────────────────────────

function getLanguageTechniquesContent(grade: number): RevisionBlock {
  if (grade <= 4) {
    return {
      title: 'Language Techniques — Foundations',
      explanation:
        'Language techniques are the tools writers use to create effects on the reader. At this stage, focus on identifying the technique, naming it correctly, and explaining what it does in simple terms. Use the What-How-Why framework: What technique is it? How is it used? Why did the writer choose it?',
      examples: [
        'Simile: "He fought like a lion" — compares the soldier to a lion using "like", suggesting bravery and ferocity.',
        'Metaphor: "She was a storm" — directly calls her a storm (without "like/as"), implying she was powerful, destructive, and uncontrollable.',
        'Personification: "The wind whispered" — gives the wind a human action (whispering), creating a quiet, secretive atmosphere.',
        'Alliteration: "dark, dangerous, deadly" — repetition of the "d" sound creates a harsh, threatening tone.',
        'Emotive language: "The innocent child trembled" — words like "innocent" and "trembled" make the reader feel sympathy.',
      ],
      quickTest: [
        'Identify the technique: "The city never sleeps." What is this an example of, and what effect does it create?',
        'What is the difference between a simile and a metaphor? Give one example of each.',
        'Why might a writer use short sentences at a tense moment in a story?',
      ],
      revisionLink: { href: '/revision/language', label: 'Language Techniques Revision' },
    }
  }

  if (grade <= 6) {
    return {
      title: 'Language Techniques — Developing Analysis',
      explanation:
        'At Grade 5-6, you need to go beyond simply identifying techniques. Analyse the effect on the reader, consider why the writer made this choice, and explore connotations of individual words. Layer multiple techniques together — writers rarely use just one at a time. Use subject terminology accurately and embed quotations into your sentences.',
      examples: [
        'Multiple technique layering: In "My hands trembled like brittle leaves", Shelley combines simile with tactile imagery. The simile "like brittle leaves" suggests fragility and mortality, while "trembled" connotes fear. The juxtaposition of the human body with something natural and decaying implies the character\'s loss of control.',
        'Semantic field: Dickens\' repeated use of cold imagery — "frozen", "bitter", "numb" — creates a semantic field of winter that mirrors Scrooge\'s emotional coldness.',
        'Structural shift: The volta in "London" (Blake) marks a shift from observation to emotional outcry, forcing the reader to confront the reality beneath the surface.',
        'Pathetic fallacy: "The rain hammered down as she wept" — the storm mirrors the character\'s emotional state, intensifying the reader\'s sense of her grief.',
        'Zooming in on word choice: Consider why Shakespeare chose "vaulting" ambition rather than simply "great" ambition. "Vaulting" suggests something that leaps beyond its proper bounds — ambition that overreaches.',
      ],
      quickTest: [
        "Analyse how Dickens uses the Ghost of Christmas Yet to Come's silence as a structural technique. What effect does this have compared to the other ghosts?",
        'Identify two techniques in this sentence and explain their combined effect: "The soldiers marched on, their boots pounding the earth like heartbeats."',
        'Why is it more effective to say "The writer creates a sense of unease" rather than "This makes the reader feel sad"?',
      ],
      revisionLink: { href: '/revision/language', label: 'Language Techniques Revision' },
    }
  }

  // Grade 7+
  return {
    title: 'Language Techniques — Critical & Conceptualised Analysis',
    explanation:
      'At Grade 7-9, your analysis should be conceptualised — driven by an overarching argument rather than a technique-by-technique list. Consider alternative interpretations: a feminist reader might see Lady Macbeth\'s "unsex me" speech differently from a Jacobean audience. Challenge the writer\'s choices: why this word and not another? Explore how form and structure work alongside language to create meaning. Your response should read like a critical essay, not a list of PEE paragraphs.',
    examples: [
      'Alternative reading: A post-colonial reading of "The Tempest" might view Caliban not as a "savage" but as an indigenous person whose land and language have been stolen by Prospero. Shakespeare\'s use of prose for Caliban (vs. verse for Prospero) could be read as linguistic colonisation.',
      'Challenging the writer: Shelley\'s decision to frame "Ozymandias" as a reported story (a traveller told the speaker) creates multiple layers of distance from the original monument. This structural choice mirrors the poem\'s theme: power is always mediated, filtered, and ultimately lost.',
      "Critical lens (Marxist): In \"A Christmas Carol\", Dickens' Ghost of Christmas Present's robe concealing Ignorance and Want can be read as a bourgeois fantasy — the wealthy man is shown poverty, feels guilt, and throws money at it. Does personal charity address structural inequality, or merely soothe Scrooge's conscience?",
      'Conceptualised argument: Rather than saying "Shakespeare uses a metaphor here", write: "Shakespeare constructs ambition as a physical force — one that \'o\'erleaps itself\' — to dramatise the Jacobean anxiety that unchecked desire destabilises the divinely ordered state."',
      'Form and meaning intertwined: Browning\'s use of the dramatic monologue form in "My Last Duchess" is itself an act of control — the Duke controls the narrative just as he controlled the Duchess. The reader is trapped in his perspective, forced to piece together the horror from his euphemisms.',
    ],
    quickTest: [
      'How does Blake\'s use of the word "charter\'d" in "London" function differently for a reader familiar with the French Revolution versus a modern reader?',
      '"The Inspector is not a character but a dramatic device." Evaluate this claim with reference to Priestley\'s structural and linguistic choices.',
      'Compare how Shelley and Browning use the concept of power in "Ozymandias" and "My Last Duchess". Which poet presents the more unsettling vision of power, and why?',
    ],
    revisionLink: { href: '/revision/language', label: 'Language Techniques Revision' },
  }
}

// ─── Poetry Content ──────────────────────────────────────────────────────────

function getPoetryContent(grade: number): RevisionBlock {
  if (grade <= 4) {
    return {
      title: 'Poetry Analysis — Foundations',
      explanation:
        'Poetry can feel intimidating, but at its core you need three skills: identify what the poet is saying (content), how they say it (techniques), and why they say it that way (effect/purpose). Start by reading the poem twice — once for meaning, once for techniques. Learn key terms: stanza, enjambment, caesura, volta, imagery, tone.',
      examples: [
        'Content: "Ozymandias" is about a ruined statue of a king in the desert — it shows that even the most powerful people are eventually forgotten.',
        'Technique: The alliteration "cold and clear" emphasises the harshness of the setting.',
        'Effect: The short sentence "Nothing beside remains" creates a dramatic pause, forcing the reader to confront the emptiness.',
        'Structure: The poem ends with the image of empty desert rather than the king — this structural choice shows nature outlasting human power.',
      ],
      quickTest: [
        'What is the difference between enjambment and caesura? Why might a poet use each one?',
        'Read any poem from your anthology. Write down: (a) what it is about, (b) one technique the poet uses, (c) the effect on the reader.',
        'What does "volta" mean and why is it important in a sonnet?',
      ],
      revisionLink: { href: '/revision/poetry', label: 'Poetry Revision Hub' },
    }
  }

  if (grade <= 6) {
    return {
      title: 'Poetry Comparison — Building Sustained Analysis',
      explanation:
        'At Grade 5-6, you need to compare two poems confidently. Use a clear structure: introduce both poems, then compare them point by point (not poem-by-poem). Focus on similarities AND differences. Link techniques to the poets\' intentions and contextual influences. Embed quotations smoothly: "Shelley\'s use of the past tense throughout suggests..." rather than standalone quotes.',
      examples: [
        'Comparison link: Both Shelley in "Ozymandias" and Browning in "My Last Duchess" explore how powerful men try to control their legacy, but while Ozymandias fails (his statue crumbles), the Duke succeeds (he controls the narrative).',
        'Context integration: Blake\'s "London" was written during the Industrial Revolution, when the poor were exploited. His repeated use of "every" ("every cry of every man") suggests the suffering is universal and inescapable.',
        'Sustained analysis: The exclamation "Look on my Works, ye Mighty, and despair!" is deeply ironic because the "Works" have been destroyed. Shelley uses dramatic irony to mock the arrogance of rulers — the reader can see what Ozymandias could not.',
      ],
      quickTest: [
        'Compare how two poets from your anthology present conflict. Focus on one similarity and one difference in their methods.',
        'Choose a poem you know well. Write a paragraph that integrates context with analysis of a specific technique.',
        "What is the difference between writing about a poem and writing about the poet's choices?",
      ],
      revisionLink: { href: '/revision/poetry', label: 'Poetry Revision Hub' },
    }
  }

  return {
    title: 'Poetry — Conceptualised & Critical Responses',
    explanation:
      'At Grade 7-9, your poetry responses must be conceptualised — structured around a central argument, not a chronological walk through the poem. Explore tensions and ambiguities: good poems resist simple interpretation. Consider how form enacts meaning (a fragmented form mirrors a fragmented identity). Bring in alternative readings and show awareness of how different audiences might respond.',
    examples: [
      'Conceptualised opening: "Both Shelley and Browning interrogate the relationship between power and art, but where Shelley presents art as ultimately triumphant over political power, Browning suggests that art itself can be an instrument of domination."',
      'Form enacting meaning: Owen\'s use of pararhyme in "Exposure" (e.g., "knive us / nervous") creates a discordant, unresolved sound that mirrors the soldiers\' psychological torment — nothing resolves, nothing ends.',
      'Ambiguity: Is the speaker of "Remains" traumatised or confessing? Armitage deliberately blurs the line — "his bloody life in my bloody hands" plays on "bloody" as both literal and colloquial, suggesting the soldier cannot separate the violence from everyday language.',
    ],
    quickTest: [
      'Write a conceptualised thesis statement comparing two poems from your anthology on the theme of power.',
      '"Form is meaning." Discuss this statement with reference to one poem, showing how the poet\'s structural choices create or reinforce the poem\'s themes.',
      'How might a feminist reading of "My Last Duchess" differ from a New Historicist reading? Which is more productive, and why?',
    ],
    revisionLink: { href: '/revision/poetry', label: 'Poetry Revision Hub' },
  }
}

// ─── Set Texts Content ───────────────────────────────────────────────────────

function getSetTextsContent(grade: number): RevisionBlock {
  if (grade <= 4) {
    return {
      title: 'Set Texts — Building Your Knowledge',
      explanation:
        'For your set text, you need to know: the plot (what happens), the characters (who they are and what motivates them), the key themes (the big ideas), and some key quotations (at least 10 short ones you can use flexibly). Start by making a character map and a timeline of events.',
      examples: [
        'Character knowledge: "Scrooge starts as a miserly, cold-hearted man — Dickens describes him as \'hard and sharp as flint\'. By the end, he has transformed into a generous, joyful figure."',
        'Theme identification: "Power is a key theme in Macbeth — Shakespeare shows how power corrupts through Macbeth\'s transformation from loyal soldier to tyrannical king."',
        'Using a short quotation: Instead of quoting whole sentences, pick 2-3 word phrases you can embed: Macbeth\'s "vaulting ambition", Scrooge\'s "surplus population", Inspector Goole\'s "fire and blood and anguish".',
        'Plot awareness: Know the key turning points — in "An Inspector Calls", the Inspector\'s final speech is the climax where Priestley\'s message is delivered most directly.',
      ],
      quickTest: [
        'Write down 5 key quotations from your main set text. For each, note which character says it and what theme it connects to.',
        'Who is the antagonist in your set text? What motivates them?',
        'What is the most important scene in your set text, and why?',
      ],
      revisionLink: { href: '/revision/texts', label: 'Set Texts Revision' },
    }
  }

  if (grade <= 6) {
    return {
      title: 'Set Texts — Deepening Your Analysis',
      explanation:
        'At Grade 5-6, move beyond plot retelling. Every paragraph should analyse how the writer creates meaning through language, structure, and form. Use the writer\'s name frequently — "Shakespeare presents...", "Dickens suggests..." — to show you understand the text as a constructed artefact, not a true story. Integrate context naturally rather than bolting it on.',
      examples: [
        "Writer-focused analysis: \"Priestley uses the Inspector as a mouthpiece for his socialist beliefs. The repeated imperative 'We are members of one body' directly challenges the Birlings' capitalist individualism.\"",
        'Structure analysis: "Shakespeare places the \'Tomorrow\' soliloquy near the end of Act 5 — by this point, Macbeth has lost everything. The positioning forces the audience to confront the consequences of his choices before his death."',
        'Integrated context: "Dickens\' portrayal of Scrooge\'s transformation reflects the Victorian ideal of Christian redemption, but it also serves a political purpose — Dickens was campaigning against the New Poor Law, which treated poverty as a moral failing."',
      ],
      quickTest: [
        "Write a paragraph about a key moment in your set text. Include: the writer's name, an embedded quotation, analysis of a technique, and a contextual link.",
        'How does the ending of your set text reinforce its key themes?',
        'Choose one character. How does the writer use them to convey a message to the audience?',
      ],
      revisionLink: { href: '/revision/texts', label: 'Set Texts Revision' },
    }
  }

  return {
    title: 'Set Texts — Conceptualised Critical Responses',
    explanation:
      'At Grade 7-9, your set text responses should be driven by a critical argument. Consider the text as a product of its time and as a text that speaks to our time. Explore how the writer\'s choices of form, structure, and language work together to create meaning. Engage with critical perspectives and alternative interpretations. Your response should demonstrate "conceptualised" understanding — every paragraph connects to your overarching thesis.',
    examples: [
      'Thesis-driven response: "Priestley does not simply critique the Birlings — he critiques the audience. By making the Inspector\'s identity ambiguous, Priestley forces the audience to decide whether accountability requires external enforcement or internal conscience."',
      'Alternative interpretation: "While Macbeth is traditionally read as a cautionary tale about ambition, a more nuanced reading might see it as Shakespeare\'s exploration of determinism — if the witches\' prophecies are true, was Macbeth ever truly free to choose differently?"',
      "Critical perspective: \"A Marxist reading of 'A Christmas Carol' might argue that Scrooge's transformation is ultimately conservative — individual philanthropy replaces systemic change, leaving the structures that produce poverty intact.\"",
    ],
    quickTest: [
      '"The true horror of [your set text] is not what happens, but what is left unspoken." Write a thesis statement responding to this claim.',
      "How does the writer use a minor character to complicate or challenge the protagonist's worldview?",
      'To what extent is the ending of your set text satisfying? Consider what the writer gains — and what they sacrifice — by resolving the narrative this way.',
    ],
    revisionLink: { href: '/revision/texts', label: 'Set Texts Revision' },
  }
}

// ─── Exam Technique Content ──────────────────────────────────────────────────

function getExamTechniqueContent(grade: number): RevisionBlock {
  if (grade <= 4) {
    return {
      title: 'Exam Technique — Getting the Basics Right',
      explanation:
        'Good exam technique means making the most of your time and knowledge. Plan before you write (5 minutes planning saves 10 minutes of waffle). Use PEE paragraphs: Point, Evidence, Explain. Answer the question directly — re-read it after every paragraph to check you are still on track. Manage your time: know how many minutes per question.',
      examples: [
        'PEE paragraph: Point: "Shakespeare presents Macbeth as conflicted." Evidence: "He says \'Is this a dagger which I see before me?\'" Explain: "The question shows his uncertainty — he cannot tell reality from imagination, suggesting guilt is already tormenting him before the murder."',
        'Time management: If a question is worth 30 marks and you have 45 minutes, spend 5 minutes planning and 40 minutes writing.',
        'Answering the question: If the question asks "How does the writer present conflict?", every paragraph must link back to the concept of conflict.',
      ],
      quickTest: [
        'You have 45 minutes for a 30-mark essay. How would you divide your time between planning and writing?',
        'Write a PEE paragraph on any topic from your set text.',
        'What is the most common mistake students make in English exams?',
      ],
      revisionLink: { href: '/revision/exam-technique', label: 'Exam Technique Revision' },
    }
  }

  if (grade <= 6) {
    return {
      title: 'Exam Technique — Structuring Higher-Level Responses',
      explanation:
        'At Grade 5-6, move from PEE to PEEL (Point, Evidence, Explain, Link) or the What-How-Why framework. Plan your argument before writing — create a thesis statement and 3-4 supporting points. Use discourse markers to guide the reader: "Furthermore", "In contrast", "Significantly". Close-read the question: underline key words and consider what the examiner is really asking.',
      examples: [
        'Thesis statement: "Shakespeare presents violence as both necessary and destructive, reflecting the Jacobean tension between honour and morality."',
        'PEEL paragraph: Point → Evidence → Explanation → Link back to thesis. The "Link" sentence is what pushes you from Grade 5 to Grade 6.',
        'Reading the question: "How does Priestley use the character of Inspector Goole?" — the question asks about Priestley (the writer), not the Inspector. Write about authorial choices.',
      ],
      quickTest: [
        'Write a thesis statement for: "How does the writer present the theme of power in [your set text]?"',
        'What is the difference between a PEE paragraph and a PEEL paragraph?',
        'Look at a past paper question. Underline the key words. What is the examiner actually asking you to do?',
      ],
      revisionLink: { href: '/revision/exam-technique', label: 'Exam Technique Revision' },
    }
  }

  return {
    title: 'Exam Technique — Crafting Exceptional Responses',
    explanation:
      'At Grade 7-9, your exam technique should be invisible — the reader should feel they are reading a critical essay, not a formulaic exam response. Open with a conceptualised thesis. Build a sustained argument across paragraphs (not isolated PEE blocks). Use topic sentences that advance your argument, not just introduce a new point. Conclude by synthesising, not summarising.',
    examples: [
      "Conceptualised opening: \"Priestley's real investigation in 'An Inspector Calls' is not Eva Smith's death but the audience's capacity for moral responsibility. The Inspector functions less as a character than as a theatrical device — a mirror held up to both the Birlings and the audience.\"",
      'Advancing an argument: Each topic sentence should build on the last. Instead of "Another technique is...", write "This tension between [previous point] and [new point] becomes most acute when..."',
      'Synthesising conclusion: Rather than repeating your points, push further: "Ultimately, the text asks not whether [character] is guilty, but whether guilt can ever be fully resolved — a question the writer deliberately leaves open."',
    ],
    quickTest: [
      'Write a conceptualised opening paragraph for a question on your set text. Do not start with "In this essay I will..."',
      'How does a Grade 9 conclusion differ from a Grade 5 conclusion? Write an example of each for the same question.',
      'What does "sustained analysis" actually mean? How is it different from "detailed analysis"?',
    ],
    revisionLink: { href: '/revision/exam-technique', label: 'Exam Technique Revision' },
  }
}

// ─── Context Content ─────────────────────────────────────────────────────────

function getContextContent(grade: number): RevisionBlock {
  if (grade <= 4) {
    return {
      title: 'Context — Why It Matters',
      explanation:
        "Context means the historical, social, and cultural background to a text. It helps you understand why the writer wrote it and what message they wanted to convey. For GCSE, you need to know: when the text was written, what was happening at that time, and how this influenced the writer's choices. Don't just state context — connect it to the text.",
      examples: [
        'Victorian context: Dickens wrote "A Christmas Carol" in 1843, during a time of extreme poverty. He wanted to highlight the gap between rich and poor and encourage charity.',
        'Jacobean context: Shakespeare wrote "Macbeth" for King James I, who believed in witchcraft and the divine right of kings. This explains why the witches are so central to the plot.',
        'Post-war context: Priestley wrote "An Inspector Calls" in 1945 but set it in 1912 — the audience knows the two World Wars that the Birlings don\'t, which creates dramatic irony.',
      ],
      quickTest: [
        'When was your main set text written? What was happening in Britain at that time?',
        'Why does knowing the context help you write better essays?',
        "Name one way the writer's personal life influenced their set text.",
      ],
      revisionLink: { href: '/revision/exam-technique', label: 'Context Revision' },
    }
  }

  if (grade <= 6) {
    return {
      title: 'Context — Integrating, Not Bolting On',
      explanation:
        'At Grade 5-6, context should be woven into your analysis, not dumped in a separate paragraph. Instead of "In the Victorian era, poverty was common. This is shown when...", try "Dickens\' decision to personify poverty as children — Ignorance and Want — reflects the Victorian tendency to sentimentalise suffering in order to provoke middle-class guilt." Show how context shapes the writer\'s choices.',
      examples: [
        'Integrated context: "Shelley, writing as a Romantic poet who had witnessed the aftermath of the French Revolution, uses the ruined statue in \'Ozymandias\' to argue that political power is inherently impermanent."',
        'Audience awareness: "A 1912 audience would have shared the Birlings\' confidence in progress; a 1945 audience, having lived through two world wars, would recognise their complacency as dangerous."',
        'Social context: "Lady Macbeth\'s ambition would have been particularly shocking to a Jacobean audience, for whom female assertiveness violated the natural order. Her eventual madness can be read as Shakespeare punishing her transgression."',
      ],
      quickTest: [
        'Rewrite this sentence to integrate context better: "In the Victorian era people were very poor. Dickens shows this through Tiny Tim."',
        'How does knowing the date a text was first performed change our reading of it?',
        'What is the difference between historical context and social context?',
      ],
      revisionLink: { href: '/revision/exam-technique', label: 'Context Revision' },
    }
  }

  return {
    title: 'Context — Critical & Evaluative Engagement',
    explanation:
      'At Grade 7-9, context is not background information — it is an analytical tool. Consider how the text both reflects and challenges its context. Explore how different contexts of reception change meaning: a modern reader responds differently from the original audience. Use context to support alternative interpretations. Remember: the examiner wants to see context used to deepen analysis, not to show off historical knowledge.',
    examples: [
      'Context as analytical tool: "While Dickens\' Scrooge narrative is often read as a straightforward moral fable, a more critical reading might note that Dickens himself profited enormously from sentimentalising poverty. The text\'s context of production — Dickens needed a bestseller to pay his debts — complicates the sincerity of its social message."',
      'Reception contexts: "A 21st-century feminist reading of Lady Macbeth might celebrate her ambition as proto-feminist assertion against patriarchal constraint, whereas Shakespeare\'s original audience would likely have read her as a cautionary example of female transgression."',
      'Challenging the text: "Priestley sets his play in 1912 to exploit the audience\'s hindsight, but this technique risks reducing complex history to dramatic irony. Does Priestley genuinely engage with the causes of inequality, or does he simply use history as a rhetorical device?"',
    ],
    quickTest: [
      'How might a post-colonial critic read your set text differently from a traditional literary scholar?',
      "Does knowing the writer's personal biography help or hinder our reading of the text? Argue both sides.",
      '"All texts are political documents." Discuss with reference to your set text and its historical context.',
    ],
    revisionLink: { href: '/revision/exam-technique', label: 'Context Revision' },
  }
}

// ─── Model Paragraphs ────────────────────────────────────────────────────────

export function getModelParagraph(grade: number): { paragraph: string; annotations: string[] } {
  if (grade <= 4) {
    return {
      paragraph:
        'Shakespeare presents Macbeth as a brave soldier at the start of the play. He is called "brave Macbeth" which shows the other characters respect him. However, after he meets the witches, he starts to change. His "vaulting ambition" takes over, and he decides to kill the king. This shows that ambition can be dangerous because it made a good person do terrible things.',
      annotations: [
        'Uses a clear point about the character.',
        'Includes a short embedded quotation.',
        'Explains the effect of the quotation.',
        'Links back to the theme (ambition).',
        'Could be improved by adding more analysis of the word "vaulting".',
      ],
    }
  }

  if (grade <= 6) {
    return {
      paragraph:
        "Shakespeare presents Macbeth's ambition as an uncontrollable force that ultimately destroys him. The metaphor \"vaulting ambition, which o'erleaps itself\" compares his desire for power to a horse rider who jumps too eagerly and falls on the other side. The verb \"o'erleaps\" suggests excess — Macbeth's ambition goes beyond what is natural or safe. Contextually, this would have resonated with a Jacobean audience familiar with the concept of the Great Chain of Being: attempting to rise above one's divinely appointed station could only lead to catastrophe.",
      annotations: [
        'Opens with a conceptual point about the character.',
        'Embeds the quotation into the sentence fluently.',
        'Analyses specific word choices ("o\'erleaps").',
        'Explores connotations and implied meanings.',
        'Integrates context naturally rather than bolting it on.',
        'Links back to theme and the wider text.',
      ],
    }
  }

  return {
    paragraph:
      "Shakespeare constructs ambition in \"Macbeth\" not merely as a character flaw but as a force that destabilises the entire moral and political order. The equestrian metaphor of \"vaulting ambition, which o'erleaps itself / And falls on th'other\" is characteristically Shakespearean in its physicality — ambition is rendered as a bodily act, a leap that carries its own punishment. The enjambment across the line break mirrors the very overreaching it describes: the sentence, like Macbeth, cannot contain itself within its proper bounds. For a Jacobean audience steeped in the doctrine of divine right, this image would carry theocratic weight — to vault beyond one's station is not merely unwise but blasphemous. Yet Shakespeare's genius lies in making this transgression compelling: we understand Macbeth's desire even as we recognise its destruction, implicating the audience in the very ambition the play purports to condemn.",
    annotations: [
      'Driven by a conceptualised argument, not a technique-spotting exercise.',
      'Analyses form (enjambment) as well as language — form enacts meaning.',
      'Explores how the audience is implicated, not just the character.',
      'Context is used as an analytical tool, not background information.',
      'Sophisticated vocabulary without being pretentious.',
      "Considers the writer's craft and the text's ideological work.",
      'The final clause complicates the reading — Grade 9 responses embrace ambiguity.',
    ],
  }
}

// ─── Study Plan Generation ───────────────────────────────────────────────────

export interface StudyPlanItem {
  priority: number
  task: string
  timeEstimate: string
  impact: 'high' | 'medium' | 'low'
  link: { href: string; label: string }
}

export function generateStudyPlan(profile: StudentProfile): StudyPlanItem[] {
  const items: StudyPlanItem[] = []
  let priority = 1

  // Priority 1: Weakest topics
  for (const weak of profile.weakTopics.slice(0, 3)) {
    items.push({
      priority: priority++,
      task: `Revise ${weak.label} — your average is ${weak.score}%. Focus on the fundamentals and do the practice questions.`,
      timeEstimate: weak.score < 40 ? '45 mins' : '30 mins',
      impact: 'high',
      link: getTopicLink(weak.topic),
    })
  }

  // Priority 2: AO gaps
  for (const gap of profile.aoGaps.filter((g) => g.percentage < 65).slice(0, 2)) {
    items.push({
      priority: priority++,
      task: `Strengthen your ${gap.ao} (${gap.label}) — currently at ${gap.percentage}%. This affects every essay you write.`,
      timeEstimate: '30 mins',
      impact: 'high',
      link: { href: '/revision/exam-technique', label: 'Exam Technique' },
    })
  }

  // Priority 3: Unstudied areas
  for (const area of profile.unstudiedAreas.slice(0, 3)) {
    items.push({
      priority: priority++,
      task: `Start studying "${area}" — you haven't engaged with this yet, and it could come up in the exam.`,
      timeEstimate: '20 mins',
      impact: 'medium',
      link: { href: '/revision', label: 'Revision Hub' },
    })
  }

  // Priority 4: Consolidation for strong topics
  if (profile.strongTopics.length > 0) {
    items.push({
      priority: priority++,
      task: `Consolidate your strengths in ${profile.strongTopics[0].label} (${profile.strongTopics[0].score}%) — try stretch questions to push for the next grade.`,
      timeEstimate: '20 mins',
      impact: 'low',
      link: getTopicLink(profile.strongTopics[0].topic),
    })
  }

  // Priority 5: Practice under timed conditions
  items.push({
    priority: priority++,
    task: 'Complete a timed practice essay (45 mins) to build exam stamina and practise your structure.',
    timeEstimate: '45 mins',
    impact: 'medium',
    link: { href: '/marking', label: 'Essay Marking Tool' },
  })

  return items
}

function getTopicLink(topic: string): { href: string; label: string } {
  switch (topic) {
    case 'poetry':
      return { href: '/revision/poetry', label: 'Poetry Revision' }
    case 'set-texts':
      return { href: '/revision/texts', label: 'Set Texts Revision' }
    case 'language-techniques':
      return { href: '/revision/language', label: 'Language Techniques' }
    case 'exam-technique':
      return { href: '/revision/exam-technique', label: 'Exam Technique' }
    case 'context':
      return { href: '/revision/exam-technique', label: 'Context Revision' }
    default:
      return { href: '/revision', label: 'Revision Hub' }
  }
}
