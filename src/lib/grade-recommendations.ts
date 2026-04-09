// ─── Grade Recommendations ───────────────────────────────────────────────────
// Provides specific, actionable advice for students to move from their current
// GCSE English grade to the next one up. Covers all key English skills and
// adapts recommendations based on identified weak areas.
// ──────────────────────────────────────────────────────────────────────────────

export type EnglishSkillArea =
  | "reading-comprehension"
  | "language-analysis"
  | "structural-analysis"
  | "creative-writing"
  | "persuasive-writing"
  | "essay-structure"
  | "use-of-quotes"
  | "context"
  | "terminology"

export interface SkillRecommendation {
  skill: EnglishSkillArea
  label: string
  action: string
  exercise: string
  currentLevel: string
  targetLevel: string
}

export interface GradeTransition {
  from: number
  to: number
  summary: string
  keyFocus: string[]
  skills: SkillRecommendation[]
  suggestedResources: { title: string; type: "lesson" | "quiz" | "essay" | "practice" }[]
}

// ─── Skill Labels ────────────────────────────────────────────────────────────

const SKILL_LABELS: Record<EnglishSkillArea, string> = {
  "reading-comprehension": "Reading Comprehension",
  "language-analysis": "Language Analysis",
  "structural-analysis": "Structural Analysis",
  "creative-writing": "Creative Writing",
  "persuasive-writing": "Persuasive Writing",
  "essay-structure": "Essay Structure",
  "use-of-quotes": "Use of Quotes",
  "context": "Context",
  "terminology": "Terminology",
}

// ─── Grade Transition Data ───────────────────────────────────────────────────

const GRADE_TRANSITIONS: Record<string, GradeTransition> = {
  "3-4": {
    from: 3,
    to: 4,
    summary:
      "Identify obvious language features. Write in paragraphs. Use basic quotes from the text.",
    keyFocus: [
      "Identify simple language features such as similes and metaphors",
      "Write in clear, organised paragraphs",
      "Use basic quotations from the text to support points",
      "Show a basic understanding of character and theme",
      "Attempt creative writing with some descriptive detail",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Read passages and answer who/what/when/where/why questions",
        exercise: "Complete 3 guided reading tasks per week with short-answer questions",
        currentLevel: "Retrieves basic information",
        targetLevel: "Identifies key details and simple inferences",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Spot obvious language features like similes, metaphors, and adjectives",
        exercise: "Highlight and label 5 language features in each text you read",
        currentLevel: "Recognises some features",
        targetLevel: "Names and identifies obvious features",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Notice how a text begins, develops, and ends",
        exercise: "Summarise the beginning, middle, and end of a chapter or extract",
        currentLevel: "Limited structural awareness",
        targetLevel: "Comments on basic structure",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Write short descriptive paragraphs using adjectives and simple imagery",
        exercise: "Write a 200-word description using at least 3 descriptive techniques",
        currentLevel: "Simple, undeveloped writing",
        targetLevel: "Paragraphed writing with some descriptive detail",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "State opinions clearly and give reasons",
        exercise: "Write a short letter giving 3 reasons why something should change",
        currentLevel: "Opinion stated without support",
        targetLevel: "Opinion with basic reasons",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Write in separate paragraphs with a clear point in each",
        exercise: "Practise writing PEE (Point-Evidence-Explanation) paragraphs",
        currentLevel: "Writing is not paragraphed",
        targetLevel: "Clear paragraph structure",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Copy short, relevant quotes from the text into your answers",
        exercise: "For each point, find and write out a supporting quote",
        currentLevel: "Rarely uses textual evidence",
        targetLevel: "Includes basic quotations",
      },
      {
        skill: "context",
        label: "Context",
        action: "Learn basic facts about when and where a text was written",
        exercise: "Create a timeline of key dates for each set text",
        currentLevel: "No contextual awareness",
        targetLevel: "Mentions basic contextual facts",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Learn the names of 10 key literary/language terms",
        exercise: "Create flashcards for simile, metaphor, alliteration, onomatopoeia, etc.",
        currentLevel: "Very limited vocabulary",
        targetLevel: "Uses some basic terminology",
      },
    ],
    suggestedResources: [
      { title: "Paragraph Writing Basics", type: "lesson" },
      { title: "Spotting Language Features", type: "quiz" },
      { title: "PEE Paragraph Practice", type: "practice" },
      { title: "Basic Quotation Skills", type: "lesson" },
    ],
  },

  "4-5": {
    from: 4,
    to: 5,
    summary:
      "Begin explaining the effect of language choices. Use Point-Evidence-Explain. Include relevant context.",
    keyFocus: [
      "Explain the effect of language choices on the reader",
      "Use the Point-Evidence-Explain (PEE) structure consistently",
      "Include relevant contextual information",
      "Develop creative writing with varied vocabulary",
      "Show understanding of writer's intentions",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Make inferences and explain what a writer implies rather than just states",
        exercise: "Practise inference questions: 'What does this suggest about...?'",
        currentLevel: "Identifies key details",
        targetLevel: "Makes supported inferences",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Explain why a writer chose specific words and what effect they have",
        exercise: "For each language feature found, write one sentence explaining its effect",
        currentLevel: "Identifies features",
        targetLevel: "Explains the effect of language choices",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Comment on how writers use structure to build tension or develop ideas",
        exercise: "Track how the mood or focus shifts across paragraphs in an extract",
        currentLevel: "Basic structural comments",
        targetLevel: "Comments on structural choices and their effect",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Use a range of vocabulary and varied sentence structures",
        exercise: "Rewrite a paragraph three times, each with different sentence openings",
        currentLevel: "Some descriptive detail",
        targetLevel: "Varied vocabulary and conscious technique use",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "Use rhetorical techniques: questions, lists of three, direct address",
        exercise: "Write a speech using at least 4 persuasive techniques",
        currentLevel: "Basic reasons given",
        targetLevel: "Uses deliberate persuasive techniques",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Follow PEE consistently with developed explanation",
        exercise: "Write 3 PEE paragraphs on a given question, timing yourself",
        currentLevel: "Attempts PEE",
        targetLevel: "Consistent PEE with clear explanation",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Select short, precise quotes and explain what they show",
        exercise: "Practise selecting the shortest effective quote for each point",
        currentLevel: "Basic quotations included",
        targetLevel: "Well-chosen quotes with explanation",
      },
      {
        skill: "context",
        label: "Context",
        action: "Link contextual knowledge to the text and explain why it matters",
        exercise: "For each essay, include at least one contextual point linked to the text",
        currentLevel: "Mentions basic facts",
        targetLevel: "Relevant context linked to the text",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Use subject terminology accurately when discussing language and structure",
        exercise: "Label techniques in your own essays -- check terminology is correct",
        currentLevel: "Some basic terms used",
        targetLevel: "Accurate use of key terminology",
      },
    ],
    suggestedResources: [
      { title: "PEE Paragraph Masterclass", type: "lesson" },
      { title: "Language Effects Quiz", type: "quiz" },
      { title: "Context in Literature", type: "lesson" },
      { title: "Persuasive Techniques Practice", type: "practice" },
    ],
  },

  "5-6": {
    from: 5,
    to: 6,
    summary:
      "Analyse language effects in detail. Use embedded quotations. Show awareness of writer's purpose.",
    keyFocus: [
      "Analyse language effects in detail, not just identify them",
      "Use embedded quotations fluently within sentences",
      "Show clear awareness of the writer's purpose and methods",
      "Craft creative writing with deliberate technique choices",
      "Write well-structured essays with a clear argument",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Analyse how writers create meaning through deliberate choices",
        exercise: "Answer 'How does the writer...' questions with detailed analysis",
        currentLevel: "Makes supported inferences",
        targetLevel: "Analyses writer's methods in detail",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Analyse connotations and layers of meaning in word choices",
        exercise: "Pick 3 key words from a passage and explore multiple connotations of each",
        currentLevel: "Explains effects",
        targetLevel: "Analyses connotations and layers of meaning",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Analyse how structural features contribute to meaning and effect",
        exercise: "Annotate an extract for shifts in focus, pace, perspective, and tone",
        currentLevel: "Comments on structural choices",
        targetLevel: "Analyses structural features with insight",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Make deliberate, conscious choices about technique and tone",
        exercise: "Plan a piece of writing noting which techniques you will use and why",
        currentLevel: "Uses varied vocabulary",
        targetLevel: "Deliberate, crafted writing with controlled technique",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "Match tone and register to audience and purpose consistently",
        exercise: "Write the same argument for three different audiences, adapting tone",
        currentLevel: "Uses persuasive techniques",
        targetLevel: "Controls tone, register, and audience awareness",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Build a clear argument across the whole essay with linking between paragraphs",
        exercise: "Use topic sentences and discourse markers to connect paragraphs",
        currentLevel: "Consistent PEE",
        targetLevel: "Coherent argument with paragraph links",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Embed quotations within sentences rather than bolting them on",
        exercise: "Rewrite 5 PEE paragraphs with embedded rather than standalone quotes",
        currentLevel: "Well-chosen quotes",
        targetLevel: "Fluently embedded quotations",
      },
      {
        skill: "context",
        label: "Context",
        action: "Show how context shapes the writer's message and the reader's understanding",
        exercise: "Write a paragraph exploring how historical context affects a character/theme",
        currentLevel: "Context linked to text",
        targetLevel: "Context shapes interpretation of meaning",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Use a wide range of subject terminology precisely and confidently",
        exercise: "Build a personal glossary of 30+ terms with examples from set texts",
        currentLevel: "Accurate key terms",
        targetLevel: "Wide range of precise terminology",
      },
    ],
    suggestedResources: [
      { title: "Embedded Quotation Techniques", type: "lesson" },
      { title: "Writer's Purpose and Methods", type: "quiz" },
      { title: "Connotation Analysis Practice", type: "practice" },
      { title: "Crafting Controlled Writing", type: "essay" },
    ],
  },

  "6-7": {
    from: 6,
    to: 7,
    summary:
      "Consistently analyse language AND structure. Use subject terminology confidently. Integrate context throughout.",
    keyFocus: [
      "Consistently analyse both language and structure in every response",
      "Use subject terminology confidently and precisely",
      "Integrate context throughout rather than bolting it on",
      "Produce creative writing that is engaging and technically accomplished",
      "Construct compelling, well-evidenced arguments across essays",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Develop thoughtful, sustained analysis of texts with clear personal response",
        exercise: "Write extended responses that track an idea across a whole text or extract",
        currentLevel: "Analyses writer's methods",
        targetLevel: "Thoughtful, sustained interpretation",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Explore how language creates specific effects on different readers",
        exercise: "Compare how two different readers might interpret the same passage",
        currentLevel: "Analyses connotations",
        targetLevel: "Explores reader response and multiple effects",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Analyse how structure works alongside language to create meaning",
        exercise: "Write a paragraph linking a structural choice to a language choice in the same text",
        currentLevel: "Analyses structural features",
        targetLevel: "Integrates language and structural analysis",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Produce writing that is engaging, technically accomplished, and tonally controlled",
        exercise: "Write a complete piece then self-assess against the mark scheme criteria",
        currentLevel: "Deliberate technique choices",
        targetLevel: "Engaging, accomplished, and controlled writing",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "Construct compelling arguments with sophisticated rhetoric and counter-arguments",
        exercise: "Write an article that acknowledges and dismantles opposing views",
        currentLevel: "Controls tone and register",
        targetLevel: "Compelling, sophisticated argumentation",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Develop a coherent, evolving argument that builds to a convincing conclusion",
        exercise: "Plan essays so each paragraph adds a new dimension to the argument",
        currentLevel: "Coherent argument",
        targetLevel: "Evolving, building argument with convincing conclusion",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Select and analyse individual words within quotations for deeper meaning",
        exercise: "Zoom in on single words within quotes, exploring connotations and effects",
        currentLevel: "Embedded quotations",
        targetLevel: "Close analysis of individual words within quotes",
      },
      {
        skill: "context",
        label: "Context",
        action: "Weave context seamlessly into analysis rather than treating it as a separate point",
        exercise: "Rewrite an essay removing standalone context paragraphs; integrate the context instead",
        currentLevel: "Context shapes interpretation",
        targetLevel: "Context seamlessly integrated throughout",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Deploy terminology with confidence, explaining why a particular term applies",
        exercise: "When using a term, always follow it with 'which suggests/creates/emphasises...'",
        currentLevel: "Wide range of terms",
        targetLevel: "Confident, purposeful deployment of terminology",
      },
    ],
    suggestedResources: [
      { title: "Language & Structure Integration", type: "lesson" },
      { title: "Context Integration Workshop", type: "practice" },
      { title: "Advanced Argumentation", type: "essay" },
      { title: "Close Word Analysis", type: "quiz" },
    ],
  },

  "7-8": {
    from: 7,
    to: 8,
    summary:
      "Explore alternative interpretations. Analyse authorial methods with precision. Engage critically with texts.",
    keyFocus: [
      "Explore alternative and competing interpretations of texts",
      "Analyse authorial methods with precision and insight",
      "Engage critically and personally with texts",
      "Produce creative writing with a distinctive voice and flair",
      "Write essays that show originality of thought",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Consider multiple interpretations and evaluate which is most convincing",
        exercise: "Write two contrasting readings of the same passage, then evaluate both",
        currentLevel: "Sustained interpretation",
        targetLevel: "Evaluates competing interpretations",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Analyse authorial methods with precision, exploring subtlety and nuance",
        exercise: "Write micro-analyses of single sentences, exploring every word choice",
        currentLevel: "Explores reader response",
        targetLevel: "Precise, nuanced analysis of authorial craft",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Evaluate how form and structure serve the writer's wider thematic purpose",
        exercise: "Analyse how the overall structure of a text reinforces its central themes",
        currentLevel: "Integrates language and structure",
        targetLevel: "Evaluates how form serves thematic purpose",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Develop a distinctive voice and demonstrate flair in your writing",
        exercise: "Experiment with unusual narrative perspectives or unconventional structures",
        currentLevel: "Engaging and controlled",
        targetLevel: "Distinctive voice with flair and originality",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "Write with authority, nuance, and a strong personal voice",
        exercise: "Write opinion pieces on complex issues, acknowledging grey areas",
        currentLevel: "Sophisticated argumentation",
        targetLevel: "Authoritative, nuanced, and personally voiced",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Show originality in how you structure arguments, avoiding formulaic approaches",
        exercise: "Try structuring an essay thematically rather than chronologically",
        currentLevel: "Evolving argument",
        targetLevel: "Original, non-formulaic essay structures",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Use quotations as springboards for deep, original analysis",
        exercise: "Take one short quote and write an entire analytical paragraph from it",
        currentLevel: "Close word analysis",
        targetLevel: "Quotes as springboards for original analysis",
      },
      {
        skill: "context",
        label: "Context",
        action: "Use context to illuminate and challenge interpretations of the text",
        exercise: "Explore how different historical contexts produce different readings",
        currentLevel: "Seamlessly integrated",
        targetLevel: "Context illuminates and challenges interpretations",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Use precise critical terminology to articulate subtle analytical points",
        exercise: "Practise using terms like 'semantic field', 'motif', 'subtext', 'authorial intent'",
        currentLevel: "Confident deployment",
        targetLevel: "Precise critical vocabulary for subtle analysis",
      },
    ],
    suggestedResources: [
      { title: "Alternative Interpretations Workshop", type: "practice" },
      { title: "Authorial Craft Deep Dive", type: "lesson" },
      { title: "Distinctive Voice Writing", type: "essay" },
      { title: "Critical Terminology Mastery", type: "quiz" },
    ],
  },

  "8-9": {
    from: 8,
    to: 9,
    summary:
      "Produce perceptive, original analysis. Show sophisticated expression. Make conceptualised responses that challenge conventional readings.",
    keyFocus: [
      "Produce perceptive, original analysis that shows genuine insight",
      "Demonstrate sophisticated expression throughout your writing",
      "Make conceptualised responses that challenge conventional readings",
      "Write creatively with a command of craft that feels effortless",
      "Show a scholar's understanding of texts and their wider significance",
    ],
    skills: [
      {
        skill: "reading-comprehension",
        label: "Reading Comprehension",
        action: "Produce perceptive readings that reveal original, scholarly insight",
        exercise: "Read critical essays on your set texts and develop your own interpretive position",
        currentLevel: "Evaluates interpretations",
        targetLevel: "Perceptive, original scholarly insight",
      },
      {
        skill: "language-analysis",
        label: "Language Analysis",
        action: "Offer conceptualised analysis that connects language to wider ideas and debates",
        exercise: "Link language analysis to broader themes: power, gender, class, morality",
        currentLevel: "Precise, nuanced analysis",
        targetLevel: "Conceptualised analysis connecting to wider ideas",
      },
      {
        skill: "structural-analysis",
        label: "Structural Analysis",
        action: "Analyse how form embodies meaning, seeing structure as inseparable from content",
        exercise: "Write about how a text's form IS its meaning, not just supports it",
        currentLevel: "Form serves thematic purpose",
        targetLevel: "Form embodies meaning; structure as content",
      },
      {
        skill: "creative-writing",
        label: "Creative Writing",
        action: "Write with a command of craft that feels effortless and wholly original",
        exercise: "Read award-winning short fiction and write your own piece in response",
        currentLevel: "Distinctive voice with flair",
        targetLevel: "Effortless command of craft; wholly original",
      },
      {
        skill: "persuasive-writing",
        label: "Persuasive Writing",
        action: "Write with such command that your personal voice and argument feel inseparable",
        exercise: "Write a long-form opinion piece that makes a genuinely original argument",
        currentLevel: "Authoritative and nuanced",
        targetLevel: "Voice and argument inseparable; commanding authority",
      },
      {
        skill: "essay-structure",
        label: "Essay Structure",
        action: "Create essays where structure itself is part of the argument's meaning",
        exercise: "Experiment with an essay where the form mirrors or enacts the content",
        currentLevel: "Original structures",
        targetLevel: "Structure as meaning; form mirrors argument",
      },
      {
        skill: "use-of-quotes",
        label: "Use of Quotes",
        action: "Transform quotations into conceptual arguments that challenge received readings",
        exercise: "Take a commonly cited quote and argue for an unconventional interpretation",
        currentLevel: "Springboards for original analysis",
        targetLevel: "Quotations as conceptual arguments challenging readings",
      },
      {
        skill: "context",
        label: "Context",
        action: "Deploy context with sophistication, showing how texts participate in cultural debates",
        exercise: "Write about how a text responds to or challenges the values of its time",
        currentLevel: "Illuminates and challenges",
        targetLevel: "Sophisticated deployment; texts as cultural participants",
      },
      {
        skill: "terminology",
        label: "Terminology",
        action: "Use terminology so naturally that it becomes invisible -- part of fluent critical discourse",
        exercise: "Write analysis without a checklist approach; let terms emerge from ideas",
        currentLevel: "Precise critical vocabulary",
        targetLevel: "Terminology as natural critical discourse",
      },
    ],
    suggestedResources: [
      { title: "Conceptualised Response Workshop", type: "practice" },
      { title: "Challenging Conventional Readings", type: "lesson" },
      { title: "Sophisticated Expression Masterclass", type: "essay" },
      { title: "Scholar-Level Analysis", type: "practice" },
    ],
  },
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Get specific recommendations for moving from the current grade to the next.
 *
 * @param currentGrade - The student's current GCSE grade (1-9)
 * @param weakAreas   - Array of skill identifiers the student is weak in
 * @returns Grade transition data with prioritised recommendations, or null if
 *          the student is already at grade 9
 */
export function getNextGradeRecommendations(
  currentGrade: number,
  weakAreas: string[] = [],
): GradeTransition | null {
  const clamped = Math.max(1, Math.min(9, Math.round(currentGrade)))

  if (clamped >= 9) return null

  // Find the appropriate transition
  const transitionKey = clamped < 3 ? "3-4" : `${clamped}-${clamped + 1}`
  const transition = GRADE_TRANSITIONS[transitionKey]

  if (!transition) return null

  // If weak areas are provided, re-order skills so weak areas come first
  if (weakAreas.length > 0) {
    const normalised = weakAreas.map((w) => normaliseSkillArea(w))
    const sorted = [...transition.skills].sort((a, b) => {
      const aWeak = normalised.some((n) => n === a.skill || a.label.toLowerCase().includes(n))
      const bWeak = normalised.some((n) => n === b.skill || b.label.toLowerCase().includes(n))
      if (aWeak && !bWeak) return -1
      if (!aWeak && bWeak) return 1
      return 0
    })
    return { ...transition, skills: sorted }
  }

  return transition
}

/**
 * Get the top N action items for a grade transition, prioritising weak areas.
 */
export function getTopActions(
  currentGrade: number,
  weakAreas: string[] = [],
  count = 5,
): { skill: string; action: string }[] {
  const rec = getNextGradeRecommendations(currentGrade, weakAreas)
  if (!rec) return []
  return rec.skills.slice(0, count).map((s) => ({
    skill: s.label,
    action: s.action,
  }))
}

/**
 * Get the summary advice string for a grade transition.
 */
export function getGradeTransitionSummary(currentGrade: number): string {
  const rec = getNextGradeRecommendations(currentGrade)
  if (!rec) return "You are working at the highest grade. Focus on maintaining excellence."
  return rec.summary
}

/**
 * Calculate the gap between current and target grades.
 */
export function gradeGapAnalysis(
  currentGrade: number,
  targetGrade: number,
): {
  gap: number
  label: string
  status: "on-target" | "close" | "behind" | "far-behind"
} {
  const gap = targetGrade - currentGrade
  let label: string
  let status: "on-target" | "close" | "behind" | "far-behind"

  if (gap <= 0) {
    label = "On or above target"
    status = "on-target"
  } else if (gap === 1) {
    label = "1 grade below target"
    status = "close"
  } else if (gap === 2) {
    label = `${gap} grades below target`
    status = "behind"
  } else {
    label = `${gap} grades below target`
    status = "far-behind"
  }

  return { gap: Math.max(0, gap), label, status }
}

/**
 * Get the skill label for a given skill area identifier.
 */
export function getSkillLabel(skill: EnglishSkillArea): string {
  return SKILL_LABELS[skill] || skill
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normaliseSkillArea(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}
