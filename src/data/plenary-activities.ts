export interface PlenaryActivity {
  id: string
  type: string
  title: string
  description: string
  duration: number
  suitableFor: string[]
  instructions: string
  variations: string[]
  differentiationNotes: string
}

export const PLENARY_ACTIVITY_TYPES = [
  'Exit Ticket',
  'Summarise in 3 Sentences',
  'Teach Your Partner',
  'Traffic Light Self-Assessment',
  'One-Minute Essay',
  'Quote of the Lesson',
  'Exam Question Sprint',
  'Peer Marking',
  'Retrieval Practice',
  'Mind Map Review',
  'Think-Pair-Share',
  'Quick Quiz',
  'Reflection Journal',
  'Concept Mapping',
  'Peer Explanation',
] as const

export type PlenaryActivityType = (typeof PLENARY_ACTIVITY_TYPES)[number]

export const plenaryActivities: PlenaryActivity[] = [
  // ──────────────────────────────────────────────
  // EXIT TICKETS (2)
  // ──────────────────────────────────────────────
  {
    id: 'exit-1',
    type: 'Exit Ticket',
    title: 'Three Things I Learned',
    description: 'Students write down three key points from the lesson before leaving.',
    duration: 3,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions: 'Students have 2–3 minutes to write three things they learned today. Collect on the way out. Review to identify gaps in understanding.',
    variations: [
      'One thing you learned, one thing you\'re confused about, one question.',
      'Key vocabulary, key technique, key example.',
      'Most important idea, surprising idea, confusing idea.',
    ],
    differentiationNotes: 'Lower ability: Accept bullet points or single words. Higher ability: Require full sentences with elaboration. Can scaffold with sentence starters: "I learned that...", "This is important because..."',
  },
  {
    id: 'exit-2',
    type: 'Exit Ticket',
    title: 'Muddiest Point',
    description: 'Students identify the least clear part of the lesson.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions: 'Ask: "What was the muddiest point in today\'s lesson?" Students write one sentence explaining what was confusing. Use responses to inform next lesson.',
    variations: [
      'Clearest point vs. muddiest point.',
      'Most interesting vs. most confusing.',
      'Easiest vs. most challenging concept.',
    ],
    differentiationNotes: 'Lower ability: Ask them to point to the page/notes where confusion arose. Higher ability: Ask them to explain why that point was confusing (what prior knowledge do they need?).',
  },

  // ──────────────────────────────────────────────
  // SUMMARISE IN 3 SENTENCES (2)
  // ──────────────────────────────────────────────
  {
    id: 'summary-1',
    type: 'Summarise in 3 Sentences',
    title: 'Lesson Summary — Concision Challenge',
    description: 'Students condense the entire lesson into exactly three sentences.',
    duration: 4,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions: 'Students have 4 minutes to write three sentences capturing the essence of today\'s lesson. Focus on: main idea, key example, learning point. Quality over quantity.',
    variations: [
      'Write one sentence per paragraph/topic covered.',
      'Beginning sentence (what we started with), middle (what we learned), ending (what this means).',
      'One sentence facts, one sentence analysis, one sentence reflection.',
    ],
    differentiationNotes: 'Lower ability: Scaffold with sentence starters: "Today we learned...", "An example is...", "This matters because...". Provide word banks. Accept simpler vocabulary.\nHigher ability: Require sophisticated links between sentences, embedded clauses, use of academic terminology. Challenge: use no more than 40 words total.',
  },
  {
    id: 'summary-2',
    type: 'Summarise in 3 Sentences',
    title: 'Text Summary — Key Points Only',
    description: 'Given a passage, students summarise in three sentences.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Provide a short text excerpt. Students identify: main idea, supporting detail, implication. Write one sentence for each. Share and compare summaries—note what differs and why.',
    variations: [
      'Summarise a character\'s actions in three sentences.',
      'Summarise a poem\'s meaning in three sentences.',
      'Summarise an argument in three sentences.',
    ],
    differentiationNotes: 'Lower ability: Highlight key sentences in the text first; students lift and paraphrase. Provide a summary frame.\nHigher ability: Require analysis—not just what happened, but why it matters and how it connects to themes. Push for precision and economy of language.',
  },

  // ──────────────────────────────────────────────
  // TEACH YOUR PARTNER (2)
  // ──────────────────────────────────────────────
  {
    id: 'teach-1',
    type: 'Teach Your Partner',
    title: 'Peer Explanation — 2 Minutes',
    description: 'Partners explain a concept from the lesson to each other.',
    duration: 5,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions: 'Pair students. One explains a key concept (e.g., metaphor, context for a text, how to analyse a quotation) in 2 minutes. Partner listens and asks clarifying questions. Swap. Debrief: What made explanations clear or unclear?',
    variations: [
      'Assign different students different topics to teach.',
      'Students teach without looking at notes—tests memory.',
      'Include an example: concept + real example from today\'s text.',
    ],
    differentiationNotes: 'Lower ability: Provide definition cards or notes students can reference. Pair with a patient listener. Focus on clear, simple explanations.\nHigher ability: Require them to teach without written support. Challenge: include an analogy or alternative example. Encourage them to ask deeper questions.',
  },
  {
    id: 'teach-2',
    type: 'Teach Your Partner',
    title: 'Feynman Technique — Explain Simply',
    description: 'Student teaches a concept using simple, everyday language.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Choose a concept from the lesson. Student explains it to a partner as if teaching a Year 5 student (no jargon). Listener points out confusing parts. Student refines explanation. Repeat until simple.',
    variations: [
      'Teach using an analogy only (no direct explanation).',
      'Teach using only concrete examples (no abstraction).',
      'Teach using a metaphor related to student\'s life.',
    ],
    differentiationNotes: 'Lower ability: Choose simple concepts (e.g., simile). Provide scaffolding questions: "What does this remind you of? How would you explain it to a friend?"\nHigher ability: Choose complex concepts (e.g., irony in characterisation). Challenge them to find multiple explanations and compare which is clearest.',
  },

  // ──────────────────────────────────────────────
  // TRAFFIC LIGHT SELF-ASSESSMENT (2)
  // ──────────────────────────────────────────────
  {
    id: 'traffic-1',
    type: 'Traffic Light Self-Assessment',
    title: 'Understanding Check — Coloured Cards',
    description: 'Students hold up red, amber, or green card to show confidence.',
    duration: 2,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions: 'Students get three cards: green (confident), amber (okay, some gaps), red (confused). Hold up the colour representing their understanding of today\'s lesson. Teacher scans the room and notes who needs support.',
    variations: [
      'Ask specific questions: "Do you understand iambic pentameter?" Hold up a colour.',
      'Use different criteria: green (can explain), amber (understand but can\'t explain yet), red (lost).',
      'Use a scale: 1–5 fingers instead of cards.',
    ],
    differentiationNotes: 'Creates psychological safety to admit confusion. Provides teacher with real-time feedback. Quick diagnostic tool. Follow up with amber/red students before next lesson. Celebrate red cards—they show honesty.',
  },
  {
    id: 'traffic-2',
    type: 'Traffic Light Self-Assessment',
    title: 'Skill Confidence Chart',
    description: 'Students rate their confidence on multiple learning objectives.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions: 'Create a chart with learning objectives (e.g., "I can identify metaphors", "I can analyse Shakespeare\'s language", "I can plan an essay"). Students colour-code each: green, amber, red. Discuss patterns. What do most students need support with?',
    variations: [
      'Use a 1–5 scale instead of colours.',
      'Have students explain one amber/red rating—what\'s missing?',
      'Return to this chart weekly to track growth.',
    ],
    differentiationNotes: 'Builds metacognitive awareness. Shows students it\'s normal not to master everything in one lesson. Identifies which skills need reteaching. Provides motivation—seeing progress from red to green is powerful.',
  },

  // ──────────────────────────────────────────────
  // ONE-MINUTE ESSAY (2)
  // ──────────────────────────────────────────────
  {
    id: 'essay-1',
    type: 'One-Minute Essay',
    title: 'Quick Response to a Question',
    description: 'Students write a one-minute response to a focused question.',
    duration: 3,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Pose a question (e.g., "How does Shakespeare present ambition in Macbeth?"). Students have 1 minute to write continuously. No editing, no stopping. Collect and read sample responses to assess understanding.',
    variations: [
      'Provide a sentence starter: "I learned that...", "The most important thing is...", "This connects to..."',
      'Ask two questions: explanation + reflection.',
      'Students swap and peer assess before submitting.',
    ],
    differentiationNotes: 'Lower ability: Accept fragmented responses; focus on evidence of thinking. Provide question stems. Lower word-count expectations.\nHigher ability: Require full sentences with evidence. Challenge: add a counter-argument or complexity in 60 seconds.',
  },
  {
    id: 'essay-2',
    type: 'One-Minute Essay',
    title: 'Quotation Analysis Sprint',
    description: 'Given a quote, students analyse in 60 seconds.',
    duration: 3,
    suitableFor: ['Year 10', 'Year 11'],
    instructions: 'Display a quote: "What do you notice about language, tone, or effect?" 1 minute to write. Emphasise: point (what do you notice?) + evidence (show me) + explanation (why does this matter?). Tight structure.',
    variations: [
      'Give the quote; students generate the question.',
      'Three quotes: write 20 seconds each.',
      'Quote + context: students analyse context\'s impact.',
    ],
    differentiationNotes: 'Forces concision and clarity—useful exam skill. Lower ability: Allow bullet points; accept single-word technique identification with a phrase of effect.\nHigher ability: Require full analytical sentences. Challenge: embed quotation grammatically. Compare analyses—which is most insightful?',
  },

  // ──────────────────────────────────────────────
  // QUOTE OF THE LESSON (2)
  // ──────────────────────────────────────────────
  {
    id: 'quote-1',
    type: 'Quote of the Lesson',
    title: 'Most Important Quote Reflection',
    description: 'Students identify and reflect on the most memorable quotation from the lesson.',
    duration: 3,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Students choose a quote from today\'s text that they find most important/interesting. Write it down. Write one sentence: Why is this quote important? Pair-share. Listen for repeated quotes—these are class-wide "hits".',
    variations: [
      'Most surprising quote.',
      'Most confusing quote + explanation of why.',
      'Quote that connects to your own experience.',
    ],
    differentiationNotes: 'Builds textual memory and connection. Helps teacher identify which quotes resonated. Variations cater to different thinkers—some choose by importance, others by emotion.\nLower ability: Provide a list of key quotes; students choose from the list and explain choice.\nHigher ability: Challenge them to explain why this quote reveals the author\'s purpose or worldview.',
  },
  {
    id: 'quote-2',
    type: 'Quote of the Lesson',
    title: 'Quotation Gallery Walk',
    description: 'Display quotes around the room; students vote on the most important.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions: 'Pre-select 5–8 important quotes from today\'s lesson. Display them on walls. Students walk around and place a dot/tally next to the quote they find most important or memorable. Discuss results: Why did students choose certain quotes? What do the patterns tell us?',
    variations: [
      'Quotes vs. paraphrases: which is more powerful?',
      'Students write their own "quote" (sentence) capturing today\'s lesson.',
      'Pair-share: explain your vote to a partner.',
    ],
    differentiationNotes: 'Visual, kinesthetic, collaborative activity. Accommodates different learning styles. Generates discussion about what makes a quote significant.\nLower ability: Discuss each quote\'s meaning before voting; lower expectations for explanation.\nHigher ability: Require written justification of vote. Compare their choices to the author\'s apparent theme.',
  },

  // ──────────────────────────────────────────────
  // EXAM QUESTION SPRINT (2)
  // ──────────────────────────────────────────────
  {
    id: 'exam-1',
    type: 'Exam Question Sprint',
    title: 'Quick Exam Practice',
    description: 'Students answer a past paper question under timed conditions.',
    duration: 5,
    suitableFor: ['Year 10', 'Year 11'],
    instructions: 'Display a short exam question (e.g., 6–8 mark question from a past paper). Students have 4–5 minutes to plan and draft. Collect and scan for misconceptions. Use responses to shape next lesson.',
    variations: [
      'Answer, then peer mark using a rubric.',
      'Answer individually, then pair-share and refine.',
      'Multiple questions: 90 seconds each.',
    ],
    differentiationNotes: 'Provides authentic practice. Reveals gaps in knowledge or technique. Builds exam confidence.\nLower ability: Provide a structure/framework (e.g., "Point-Evidence-Explanation"). Lower mark-value question. Allow notes.\nHigher ability: Higher mark-value question. Remove support. Challenge: multi-part question requiring comparison.',
  },
  {
    id: 'exam-2',
    type: 'Exam Question Sprint',
    title: 'Unpicking an Exam Question',
    description: 'Students analyse what a question is asking before attempting it.',
    duration: 4,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Display an exam question. Students don\'t answer yet. Instead, they: 1) Circle command words, 2) Identify what knowledge/skills are needed, 3) Plan structure, 4) Write first paragraph. Discuss: What makes this question tricky?',
    variations: [
      'Compare two different questions asking about the same text—what\'s the difference in approach needed?',
      'Rewrite a confusing question more clearly.',
      'Predict: What answer would get full marks?',
    ],
    differentiationNotes: 'Develops exam technique, not just content knowledge. Helps students slow down and read carefully.\nLower ability: Highlight command words. Provide a list of typical structures. Model the unpicking process.\nHigher ability: Analyse how word choice in the question shapes the answer. Compare multiple exam boards\' approaches to the same text.',
  },

  // ──────────────────────────────────────────────
  // PEER MARKING (2)
  // ──────────────────────────────────────────────
  {
    id: 'mark-1',
    type: 'Peer Marking',
    title: 'Peer Assessment Using a Rubric',
    description: 'Students mark each other\'s work using a provided rubric.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions: 'Provide a simplified rubric (e.g., Content, Technique, Structure—each 1–4 points). Pairs swap work. Each student marks the other using the rubric, writing a score and one sentence of feedback. Debrief: What makes feedback helpful?',
    variations: [
      'Traffic light marking: highlight green (excellent), amber (okay), red (needs work) sections.',
      'Positive-improvement-question: one compliment, one suggestion, one question.',
      'Whole-class: display exemplar, mark it together first, then peer assess.',
    ],
    differentiationNotes: 'Teaches students what quality looks like. Helps them evaluate their own work. Provides teacher with diagnostic information.\nLower ability: Use a simplified rubric. Model marking together first. Provide sentence starters for feedback: "You did well when you...", "Next time, try..."\nHigher ability: Use the full rubric. Require evidence-based feedback: "You wrote that ___. To improve, you could ___."',
  },
  {
    id: 'mark-2',
    type: 'Peer Marking',
    title: 'Two-Stars and a Wish',
    description: 'Students give two compliments and one constructive suggestion.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions: 'Partners exchange work. Reader finds: 2 things done well (stars) and 1 thing to improve (wish). Write feedback: "Star: You used quotations well. Star: Your analysis was clear. Wish: I\'d like to see more explanation of context." Share feedback and respond.',
    variations: [
      'Three wishes: challenge students to be more critical.',
      'Specific praise: "I noticed you used the technique of [X]. This works because [Y]."',
      'Exchange with unfamiliar classmate for fresh perspective.',
    ],
    differentiationNotes: 'Safe, affirming feedback format. Everyone gets positivity plus constructive input. Develops critical appreciation skills.\nLower ability: Scaffold with sentence starters. Pair with a patient peer. Accept simpler wording.\nHigher ability: Require specific, evidence-based feedback. Push for deeper suggestions that address craft, not just content.',
  },

  // ──────────────────────────────────────────────
  // RETRIEVAL PRACTICE (2)
  // ──────────────────────────────────────────────
  {
    id: 'retrieval-1',
    type: 'Retrieval Practice',
    title: 'Quick Vocabulary Quiz',
    description: 'Students recall and test vocabulary from the lesson or unit.',
    duration: 3,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions: 'Display 5 vocabulary words from today or this week. Students define each (write or verbal). Discuss correct definitions. Which words are still confusing? Use repetition and varied contexts to build memory.',
    variations: [
      'Definition quiz: you read the definition, students say the word.',
      'Use-it quiz: give a context sentence with the word missing; students fill in.',
      'Etymology quiz: give the root; students find the word.',
    ],
    differentiationNotes: 'Spaced retrieval is proven to boost long-term retention. Regular low-stakes quizzes are effective.\nLower ability: Multiple-choice definitions. Provide word list. Repeat words frequently.\nHigher ability: Use words in complex sentences. Require etymology or multiple meanings. Challenge: use the word in an essay-like paragraph.',
  },
  {
    id: 'retrieval-2',
    type: 'Retrieval Practice',
    title: 'Cumulative Knowledge Quiz',
    description: 'Students retrieve information from lessons across the unit or term.',
    duration: 4,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'Create a 10-question quiz covering content from the past 2–3 weeks (mix of recent and older material). Questions should be varied: definition, application, analysis. Low-stakes: this is retrieval, not a grade. Review answers; reteach any missed concepts.',
    variations: [
      'Competitive: first to answer correctly wins a point.',
      'Pair quiz: partners discuss then answer together.',
      'Cumulative across the year: add one old question per week.',
    ],
    differentiationNotes: 'Retrieval practice strengthens memory and prevents forgetting. Tells you what needs reteaching.\nLower ability: Multiple-choice format. Vocabulary and basic recall questions. Provide word bank.\nHigher ability: Short-answer and application questions. Require justification of answers. Challenge: question that requires connecting multiple concepts.',
  },

  // ──────────────────────────────────────────────
  // MIND MAP AND CONCEPT MAPPING (2)
  // ──────────────────────────────────────────────
  {
    id: 'mind-1',
    type: 'Mind Map Review',
    title: 'Lesson Mind Map',
    description: 'Students create a mind map capturing the lesson\'s key ideas and connections.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions: 'Central idea: today\'s topic. Branches: main subtopics, examples, related vocabulary. Students have 5 minutes to create a mind map (visual, not sentences). Share and compare. What connections did different students make?',
    variations: [
      'Add a fourth level: specific examples from the text.',
      'Colour-code branches by category.',
      'Create a mind map together on the board as a class.',
    ],
    differentiationNotes: 'Visual learning tool. Helps students see relationships and structure. Kinesthetic (drawing) reinforces memory.\nLower ability: Provide a partially completed mind map; students fill in branches. Use images/symbols instead of words.\nHigher ability: Require multiple levels of detail. Add connections between branches (e.g., arrows showing how concepts relate). Challenge: explain the logic of their categorisation.',
  },
  {
    id: 'mind-2',
    type: 'Mind Map Review',
    title: 'Unit Overview Mind Map',
    description: 'Create a comprehensive mind map of an entire unit or text.',
    duration: 10,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'At the end of a unit, create a large mind map with: central text/theme, characters, key scenes, themes, techniques, context, quotations. Display on the wall. Students add to it throughout the unit. By the end, it\'s a visual summary for revision.',
    variations: [
      'Interactive: students add different colours or symbols as they learn more.',
      'Peer contribution: each student adds one branch.',
      'Digital mind map (Coggle, Miro, etc.).',
    ],
    differentiationNotes: 'Powerful revision tool. Shows the whole unit at a glance. Helps students see connections.\nLower ability: Provide labels; students add examples or images.\nHigher ability: Require analysis in labels (e.g., "how does technique X develop theme Y?").',
  },

  // ──────────────────────────────────────────────
  // REFLECTION AND THINK-PAIR-SHARE (3)
  // ──────────────────────────────────────────────
  {
    id: 'reflection-1',
    type: 'Reflection Journal',
    title: 'End-of-Lesson Reflection',
    description: 'Students reflect on their learning and growth in a journal.',
    duration: 3,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions: 'Prompt: "What did you find easy today? What was challenging? What will you focus on next time?" Students write 3–5 sentences. Optional: share with a partner. Collect journals to monitor metacognitive growth.',
    variations: [
      'Reflection scale: 1–5, I understood this concept.',
      'Sentence stems: "I was surprised by...", "I connected this to...", "I\'d like to improve..."',
      'Peer review of reflections: do classmates\' reflections match your own?',
    ],
    differentiationNotes: 'Develops metacognition and self-awareness. Helps students identify their own learning needs.\nLower ability: Provide sentence stems. Accept shorter responses. Verbal reflection is okay.\nHigher ability: Challenge them to explain why they found something challenging (what prior knowledge is missing?). Add a learning goal for next lesson.',
  },
  {
    id: 'reflection-2',
    type: 'Think-Pair-Share',
    title: 'Think-Pair-Share on a Question',
    description: 'Individual thinking, paired discussion, class sharing.',
    duration: 5,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions: 'Ask a question (e.g., "Why do you think the author made this choice?"). 1) Think (1 min): students write their thoughts. 2) Pair (2 min): discuss with a partner. 3) Share (2 min): volunteers share with class. Debrief: What was similar/different between ideas?',
    variations: [
      'Pair-Share-Compare: partners share, then compare with another pair.',
      'Think-Pair-Write-Share: after discussion, pairs write a joint response.',
      'Silent Think: students think without writing first.',
    ],
    differentiationNotes: 'Allows all students thinking time (not just quick processors). Builds from individual to collaborative. Safe peer discussion before public speaking.\nLower ability: Allow thinking and writing time. Don\'t force public sharing; recording their pair conversation is enough.\nHigher ability: Push for justification. Challenge them to find evidence for their ideas during pair discussion.',
  },
  {
    id: 'reflection-3',
    type: 'Reflection Journal',
    title: 'Progress Tracker',
    description: 'Students track growth across the term or year.',
    duration: 3,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions: 'At the end of each week or unit, students write one sentence answering: "How have I grown as a reader/writer/thinker this week?" Keep these in a portfolio. Review periodically to celebrate growth and identify patterns.',
    variations: [
      'Rate your progress 1–5 on learning objectives.',
      'Compare this week\'s reflection to last month\'s—what\'s changed?',
      'Set a learning goal based on weakness identified.',
    ],
    differentiationNotes: 'Powerful for motivation and self-awareness. Concrete evidence of learning over time.\nLower ability: Rate on a scale; short sentence is fine. Celebrate small progress.\nHigher ability: Require detailed analysis of growth. Ask: what caused this growth? What will you do differently?',
  },

  // ──────────────────────────────────────────────
  // QUICK GAMES AND ENGAGING CLOSURES (2)
  // ──────────────────────────────────────────────
  {
    id: 'game-1',
    type: 'Quick Quiz',
    title: 'Heads Up / Heads Down',
    description: 'Quick-fire recall game on lesson content.',
    duration: 3,
    suitableFor: ['Year 7', 'Year 8'],
    instructions: 'Ask a question. Students write an answer on a whiteboard (or thumbs up/down for yes/no). On a signal, everyone holds up their answer. Scan the room. Discuss any errors. Fast-paced, low-pressure.',
    variations: [
      'Two teams: points for correct answers.',
      'Venn diagram: students sort concepts into categories.',
      'Guess who: I describe a character/concept, you guess.',
    ],
    differentiationNotes: 'Fun, energetic. Reveals understanding quickly. Low-stakes so students aren\'t anxious.\nLower ability: Multiple-choice questions with 2–3 options. Simpler concepts.\nHigher ability: More challenging questions; require brief explanation of answer.',
  },
  {
    id: 'game-2',
    type: 'Quick Quiz',
    title: 'Keyword Bingo',
    description: 'Students mark off vocabulary words they hear during lesson review.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions: 'Create a bingo card with 9–12 key vocabulary words from today\'s lesson. As you review the lesson, mention each word. Students mark it off. First to get three in a row wins (or full house). More engaging than a regular quiz.',
    variations: [
      'Students create their own bingo cards with words they predict you\'ll mention.',
      'Definition bingo: you read definitions; students mark the word.',
      'Quotation bingo: you read quotes; students mark which text they\'re from.',
    ],
    differentiationNotes: 'Gamifies review, reducing anxiety. Visual and auditory learning.\nLower ability: Provide clear images alongside words. Simpler vocabulary selection.\nHigher ability: Add context clues; require them to use marked words in sentences.',
  },
]
