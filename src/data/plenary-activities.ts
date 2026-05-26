// @ts-nocheck
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
    instructions:
      'Students have 2-3 minutes to write three things they learned today. Collect on the way out. Review to identify gaps in understanding.',
    variations: [
      "One thing you learned, one thing you're confused about, one question.",
      'Key vocabulary, key technique, key example.',
      'Most important idea, surprising idea, confusing idea.',
    ],
    differentiationNotes:
      'Lower ability: Accept bullet points or single words. Higher ability: Require full sentences with elaboration. Can scaffold with sentence starters: "I learned that...", "This is important because..."',
  },
  {
    id: 'exit-2',
    type: 'Exit Ticket',
    title: 'Muddiest Point',
    description: 'Students identify the least clear part of the lesson.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions:
      'Ask: "What was the muddiest point in today\'s lesson?" Students write one sentence explaining what was confusing. Use responses to inform next lesson.',
    variations: [
      'Clearest point vs. muddiest point.',
      'Most interesting vs. most confusing.',
      'Easiest vs. most challenging concept.',
    ],
    differentiationNotes:
      'Lower ability: Ask them to point to the page/notes where confusion arose. Higher ability: Ask them to explain why that point was confusing (what prior knowledge do they need?).',
  },

  // ──────────────────────────────────────────────
  // SUMMARISE IN 3 SENTENCES (2)
  // ──────────────────────────────────────────────
  {
    id: 'summary-1',
    type: 'Summarise in 3 Sentences',
    title: 'Lesson Summary - Concision Challenge',
    description: 'Students condense the entire lesson into exactly three sentences.',
    duration: 4,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Students have 4 minutes to write three sentences capturing the essence of today's lesson. Focus on: main idea, key example, learning point. Quality over quantity.",
    variations: [
      'Write one sentence per paragraph/topic covered.',
      'Beginning sentence (what we started with), middle (what we learned), ending (what this means).',
      'One sentence facts, one sentence analysis, one sentence reflection.',
    ],
    differentiationNotes:
      'Lower ability: Scaffold with sentence starters: "Today we learned...", "An example is...", "This matters because...". Provide word banks. Accept simpler vocabulary.\nHigher ability: Require sophisticated links between sentences, embedded clauses, use of academic terminology. Challenge: use no more than 40 words total.',
  },
  {
    id: 'summary-2',
    type: 'Summarise in 3 Sentences',
    title: 'Text Summary - Key Points Only',
    description: 'Given a passage, students summarise in three sentences.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Provide a short text excerpt. Students identify: main idea, supporting detail, implication. Write one sentence for each. Share and compare summaries-note what differs and why.',
    variations: [
      "Summarise a character's actions in three sentences.",
      "Summarise a poem's meaning in three sentences.",
      'Summarise an argument in three sentences.',
    ],
    differentiationNotes:
      'Lower ability: Highlight key sentences in the text first; students lift and paraphrase. Provide a summary frame.\nHigher ability: Require analysis-not just what happened, but why it matters and how it connects to themes. Push for precision and economy of language.',
  },

  // ──────────────────────────────────────────────
  // TEACH YOUR PARTNER (2)
  // ──────────────────────────────────────────────
  {
    id: 'teach-1',
    type: 'Teach Your Partner',
    title: 'Peer Explanation - 2 Minutes',
    description: 'Partners explain a concept from the lesson to each other.',
    duration: 5,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions:
      'Pair students. One explains a key concept (e.g., metaphor, context for a text, how to analyse a quotation) in 2 minutes. Partner listens and asks clarifying questions. Swap. Debrief: What made explanations clear or unclear?',
    variations: [
      'Assign different students different topics to teach.',
      'Students teach without looking at notes-tests memory.',
      "Include an example: concept + real example from today's text.",
    ],
    differentiationNotes:
      'Lower ability: Provide definition cards or notes students can reference. Pair with a patient listener. Focus on clear, simple explanations.\nHigher ability: Require them to teach without written support. Challenge: include an analogy or alternative example. Encourage them to ask deeper questions.',
  },
  {
    id: 'teach-2',
    type: 'Teach Your Partner',
    title: 'Feynman Technique - Explain Simply',
    description: 'Student teaches a concept using simple, everyday language.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Choose a concept from the lesson. Student explains it to a partner as if teaching a Year 5 student (no jargon). Listener points out confusing parts. Student refines explanation. Repeat until simple.',
    variations: [
      'Teach using an analogy only (no direct explanation).',
      'Teach using only concrete examples (no abstraction).',
      "Teach using a metaphor related to student's life.",
    ],
    differentiationNotes:
      'Lower ability: Choose simple concepts (e.g., simile). Provide scaffolding questions: "What does this remind you of? How would you explain it to a friend?"\nHigher ability: Choose complex concepts (e.g., irony in characterisation). Challenge them to find multiple explanations and compare which is clearest.',
  },

  // ──────────────────────────────────────────────
  // TRAFFIC LIGHT SELF-ASSESSMENT (2)
  // ──────────────────────────────────────────────
  {
    id: 'traffic-1',
    type: 'Traffic Light Self-Assessment',
    title: 'Understanding Check - Coloured Cards',
    description: 'Students hold up red, amber, or green card to show confidence.',
    duration: 2,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions:
      "Students get three cards: green (confident), amber (okay, some gaps), red (confused). Hold up the colour representing their understanding of today's lesson. Teacher scans the room and notes who needs support.",
    variations: [
      'Ask specific questions: "Do you understand iambic pentameter?" Hold up a colour.',
      "Use different criteria: green (can explain), amber (understand but can't explain yet), red (lost).",
      'Use a scale: 1-5 fingers instead of cards.',
    ],
    differentiationNotes:
      'Creates psychological safety to admit confusion. Provides teacher with real-time feedback. Quick diagnostic tool. Follow up with amber/red students before next lesson. Celebrate red cards-they show honesty.',
  },
  {
    id: 'traffic-2',
    type: 'Traffic Light Self-Assessment',
    title: 'Skill Confidence Chart',
    description: 'Students rate their confidence on multiple learning objectives.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Create a chart with learning objectives (e.g., "I can identify metaphors", "I can analyse Shakespeare\'s language", "I can plan an essay"). Students colour-code each: green, amber, red. Discuss patterns. What do most students need support with?',
    variations: [
      'Use a 1-5 scale instead of colours.',
      "Have students explain one amber/red rating-what's missing?",
      'Return to this chart weekly to track growth.',
    ],
    differentiationNotes:
      "Builds metacognitive awareness. Shows students it's normal not to master everything in one lesson. Identifies which skills need reteaching. Provides motivation-seeing progress from red to green is powerful.",
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
    instructions:
      'Pose a question (e.g., "How does Shakespeare present ambition in Macbeth?"). Students have 1 minute to write continuously. No editing, no stopping. Collect and read sample responses to assess understanding.',
    variations: [
      'Provide a sentence starter: "I learned that...", "The most important thing is...", "This connects to..."',
      'Ask two questions: explanation + reflection.',
      'Students swap and peer assess before submitting.',
    ],
    differentiationNotes:
      'Lower ability: Accept fragmented responses; focus on evidence of thinking. Provide question stems. Lower word-count expectations.\nHigher ability: Require full sentences with evidence. Challenge: add a counter-argument or complexity in 60 seconds.',
  },
  {
    id: 'essay-2',
    type: 'One-Minute Essay',
    title: 'Quotation Analysis Sprint',
    description: 'Given a quote, students analyse in 60 seconds.',
    duration: 3,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Display a quote: "What do you notice about language, tone, or effect?" 1 minute to write. Emphasise: point (what do you notice?) + evidence (show me) + explanation (why does this matter?). Tight structure.',
    variations: [
      'Give the quote; students generate the question.',
      'Three quotes: write 20 seconds each.',
      "Quote + context: students analyse context's impact.",
    ],
    differentiationNotes:
      'Forces concision and clarity-useful exam skill. Lower ability: Allow bullet points; accept single-word technique identification with a phrase of effect.\nHigher ability: Require full analytical sentences. Challenge: embed quotation grammatically. Compare analyses-which is most insightful?',
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
    instructions:
      'Students choose a quote from today\'s text that they find most important/interesting. Write it down. Write one sentence: Why is this quote important? Pair-share. Listen for repeated quotes-these are class-wide "hits".',
    variations: [
      'Most surprising quote.',
      'Most confusing quote + explanation of why.',
      'Quote that connects to your own experience.',
    ],
    differentiationNotes:
      "Builds textual memory and connection. Helps teacher identify which quotes resonated. Variations cater to different thinkers-some choose by importance, others by emotion.\nLower ability: Provide a list of key quotes; students choose from the list and explain choice.\nHigher ability: Challenge them to explain why this quote reveals the author's purpose or worldview.",
  },
  {
    id: 'quote-2',
    type: 'Quote of the Lesson',
    title: 'Quotation Gallery Walk',
    description: 'Display quotes around the room; students vote on the most important.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions:
      "Pre-select 5-8 important quotes from today's lesson. Display them on walls. Students walk around and place a dot/tally next to the quote they find most important or memorable. Discuss results: Why did students choose certain quotes? What do the patterns tell us?",
    variations: [
      'Quotes vs. paraphrases: which is more powerful?',
      'Students write their own "quote" (sentence) capturing today\'s lesson.',
      'Pair-share: explain your vote to a partner.',
    ],
    differentiationNotes:
      "Visual, kinesthetic, collaborative activity. Accommodates different learning styles. Generates discussion about what makes a quote significant.\nLower ability: Discuss each quote's meaning before voting; lower expectations for explanation.\nHigher ability: Require written justification of vote. Compare their choices to the author's apparent theme.",
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
    instructions:
      'Display a short exam question (e.g., 6-8 mark question from a past paper). Students have 4-5 minutes to plan and draft. Collect and scan for misconceptions. Use responses to shape next lesson.',
    variations: [
      'Answer, then peer mark using a rubric.',
      'Answer individually, then pair-share and refine.',
      'Multiple questions: 90 seconds each.',
    ],
    differentiationNotes:
      'Provides authentic practice. Reveals gaps in knowledge or technique. Builds exam confidence.\nLower ability: Provide a structure/framework (e.g., "Point-Evidence-Explanation"). Lower mark-value question. Allow notes.\nHigher ability: Higher mark-value question. Remove support. Challenge: multi-part question requiring comparison.',
  },
  {
    id: 'exam-2',
    type: 'Exam Question Sprint',
    title: 'Unpicking an Exam Question',
    description: 'Students analyse what a question is asking before attempting it.',
    duration: 4,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Display an exam question. Students don't answer yet. Instead, they: 1) Circle command words, 2) Identify what knowledge/skills are needed, 3) Plan structure, 4) Write first paragraph. Discuss: What makes this question tricky?",
    variations: [
      "Compare two different questions asking about the same text-what's the difference in approach needed?",
      'Rewrite a confusing question more clearly.',
      'Predict: What answer would get full marks?',
    ],
    differentiationNotes:
      "Develops exam technique, not just content knowledge. Helps students slow down and read carefully.\nLower ability: Highlight command words. Provide a list of typical structures. Model the unpicking process.\nHigher ability: Analyse how word choice in the question shapes the answer. Compare multiple exam boards' approaches to the same text.",
  },

  // ──────────────────────────────────────────────
  // PEER MARKING (2)
  // ──────────────────────────────────────────────
  {
    id: 'mark-1',
    type: 'Peer Marking',
    title: 'Peer Assessment Using a Rubric',
    description: "Students mark each other's work using a provided rubric.",
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Provide a simplified rubric (e.g., Content, Technique, Structure-each 1-4 points). Pairs swap work. Each student marks the other using the rubric, writing a score and one sentence of feedback. Debrief: What makes feedback helpful?',
    variations: [
      'Traffic light marking: highlight green (excellent), amber (okay), red (needs work) sections.',
      'Positive-improvement-question: one compliment, one suggestion, one question.',
      'Whole-class: display exemplar, mark it together first, then peer assess.',
    ],
    differentiationNotes:
      'Teaches students what quality looks like. Helps them evaluate their own work. Provides teacher with diagnostic information.\nLower ability: Use a simplified rubric. Model marking together first. Provide sentence starters for feedback: "You did well when you...", "Next time, try..."\nHigher ability: Use the full rubric. Require evidence-based feedback: "You wrote that ___. To improve, you could ___."',
  },
  {
    id: 'mark-2',
    type: 'Peer Marking',
    title: 'Two-Stars and a Wish',
    description: 'Students give two compliments and one constructive suggestion.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions:
      'Partners exchange work. Reader finds: 2 things done well (stars) and 1 thing to improve (wish). Write feedback: "Star: You used quotations well. Star: Your analysis was clear. Wish: I\'d like to see more explanation of context." Share feedback and respond.',
    variations: [
      'Three wishes: challenge students to be more critical.',
      'Specific praise: "I noticed you used the technique of [X]. This works because [Y]."',
      'Exchange with unfamiliar classmate for fresh perspective.',
    ],
    differentiationNotes:
      'Safe, affirming feedback format. Everyone gets positivity plus constructive input. Develops critical appreciation skills.\nLower ability: Scaffold with sentence starters. Pair with a patient peer. Accept simpler wording.\nHigher ability: Require specific, evidence-based feedback. Push for deeper suggestions that address craft, not just content.',
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
    instructions:
      'Display 5 vocabulary words from today or this week. Students define each (write or verbal). Discuss correct definitions. Which words are still confusing? Use repetition and varied contexts to build memory.',
    variations: [
      'Definition quiz: you read the definition, students say the word.',
      'Use-it quiz: give a context sentence with the word missing; students fill in.',
      'Etymology quiz: give the root; students find the word.',
    ],
    differentiationNotes:
      'Spaced retrieval is proven to boost long-term retention. Regular low-stakes quizzes are effective.\nLower ability: Multiple-choice definitions. Provide word list. Repeat words frequently.\nHigher ability: Use words in complex sentences. Require etymology or multiple meanings. Challenge: use the word in an essay-like paragraph.',
  },
  {
    id: 'retrieval-2',
    type: 'Retrieval Practice',
    title: 'Cumulative Knowledge Quiz',
    description: 'Students retrieve information from lessons across the unit or term.',
    duration: 4,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Create a 10-question quiz covering content from the past 2-3 weeks (mix of recent and older material). Questions should be varied: definition, application, analysis. Low-stakes: this is retrieval, not a grade. Review answers; reteach any missed concepts.',
    variations: [
      'Competitive: first to answer correctly wins a point.',
      'Pair quiz: partners discuss then answer together.',
      'Cumulative across the year: add one old question per week.',
    ],
    differentiationNotes:
      'Retrieval practice strengthens memory and prevents forgetting. Tells you what needs reteaching.\nLower ability: Multiple-choice format. Vocabulary and basic recall questions. Provide word bank.\nHigher ability: Short-answer and application questions. Require justification of answers. Challenge: question that requires connecting multiple concepts.',
  },

  // ──────────────────────────────────────────────
  // MIND MAP AND CONCEPT MAPPING (2)
  // ──────────────────────────────────────────────
  {
    id: 'mind-1',
    type: 'Mind Map Review',
    title: 'Lesson Mind Map',
    description: "Students create a mind map capturing the lesson's key ideas and connections.",
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10'],
    instructions:
      "Central idea: today's topic. Branches: main subtopics, examples, related vocabulary. Students have 5 minutes to create a mind map (visual, not sentences). Share and compare. What connections did different students make?",
    variations: [
      'Add a fourth level: specific examples from the text.',
      'Colour-code branches by category.',
      'Create a mind map together on the board as a class.',
    ],
    differentiationNotes:
      'Visual learning tool. Helps students see relationships and structure. Kinesthetic (drawing) reinforces memory.\nLower ability: Provide a partially completed mind map; students fill in branches. Use images/symbols instead of words.\nHigher ability: Require multiple levels of detail. Add connections between branches (e.g., arrows showing how concepts relate). Challenge: explain the logic of their categorisation.',
  },
  {
    id: 'mind-2',
    type: 'Mind Map Review',
    title: 'Unit Overview Mind Map',
    description: 'Create a comprehensive mind map of an entire unit or text.',
    duration: 10,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      "At the end of a unit, create a large mind map with: central text/theme, characters, key scenes, themes, techniques, context, quotations. Display on the wall. Students add to it throughout the unit. By the end, it's a visual summary for revision.",
    variations: [
      'Interactive: students add different colours or symbols as they learn more.',
      'Peer contribution: each student adds one branch.',
      'Digital mind map (Coggle, Miro, etc.).',
    ],
    differentiationNotes:
      'Powerful revision tool. Shows the whole unit at a glance. Helps students see connections.\nLower ability: Provide labels; students add examples or images.\nHigher ability: Require analysis in labels (e.g., "how does technique X develop theme Y?").',
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
    instructions:
      'Prompt: "What did you find easy today? What was challenging? What will you focus on next time?" Students write 3-5 sentences. Optional: share with a partner. Collect journals to monitor metacognitive growth.',
    variations: [
      'Reflection scale: 1-5, I understood this concept.',
      'Sentence stems: "I was surprised by...", "I connected this to...", "I\'d like to improve..."',
      "Peer review of reflections: do classmates' reflections match your own?",
    ],
    differentiationNotes:
      'Develops metacognition and self-awareness. Helps students identify their own learning needs.\nLower ability: Provide sentence stems. Accept shorter responses. Verbal reflection is okay.\nHigher ability: Challenge them to explain why they found something challenging (what prior knowledge is missing?). Add a learning goal for next lesson.',
  },
  {
    id: 'reflection-2',
    type: 'Think-Pair-Share',
    title: 'Think-Pair-Share on a Question',
    description: 'Individual thinking, paired discussion, class sharing.',
    duration: 5,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions:
      'Ask a question (e.g., "Why do you think the author made this choice?"). 1) Think (1 min): students write their thoughts. 2) Pair (2 min): discuss with a partner. 3) Share (2 min): volunteers share with class. Debrief: What was similar/different between ideas?',
    variations: [
      'Pair-Share-Compare: partners share, then compare with another pair.',
      'Think-Pair-Write-Share: after discussion, pairs write a joint response.',
      'Silent Think: students think without writing first.',
    ],
    differentiationNotes:
      "Allows all students thinking time (not just quick processors). Builds from individual to collaborative. Safe peer discussion before public speaking.\nLower ability: Allow thinking and writing time. Don't force public sharing; recording their pair conversation is enough.\nHigher ability: Push for justification. Challenge them to find evidence for their ideas during pair discussion.",
  },
  {
    id: 'reflection-3',
    type: 'Reflection Journal',
    title: 'Progress Tracker',
    description: 'Students track growth across the term or year.',
    duration: 3,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'At the end of each week or unit, students write one sentence answering: "How have I grown as a reader/writer/thinker this week?" Keep these in a portfolio. Review periodically to celebrate growth and identify patterns.',
    variations: [
      'Rate your progress 1-5 on learning objectives.',
      "Compare this week's reflection to last month's-what's changed?",
      'Set a learning goal based on weakness identified.',
    ],
    differentiationNotes:
      'Powerful for motivation and self-awareness. Concrete evidence of learning over time.\nLower ability: Rate on a scale; short sentence is fine. Celebrate small progress.\nHigher ability: Require detailed analysis of growth. Ask: what caused this growth? What will you do differently?',
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
    instructions:
      'Ask a question. Students write an answer on a whiteboard (or thumbs up/down for yes/no). On a signal, everyone holds up their answer. Scan the room. Discuss any errors. Fast-paced, low-pressure.',
    variations: [
      'Two teams: points for correct answers.',
      'Venn diagram: students sort concepts into categories.',
      'Guess who: I describe a character/concept, you guess.',
    ],
    differentiationNotes:
      "Fun, energetic. Reveals understanding quickly. Low-stakes so students aren't anxious.\nLower ability: Multiple-choice questions with 2-3 options. Simpler concepts.\nHigher ability: More challenging questions; require brief explanation of answer.",
  },
  {
    id: 'game-2',
    type: 'Quick Quiz',
    title: 'Keyword Bingo',
    description: 'Students mark off vocabulary words they hear during lesson review.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9'],
    instructions:
      "Create a bingo card with 9-12 key vocabulary words from today's lesson. As you review the lesson, mention each word. Students mark it off. First to get three in a row wins (or full house). More engaging than a regular quiz.",
    variations: ["Students create their own bingo cards with words they predict you'll mention."],
    differentiationNotes:
      'Vocabulary retention through active engagement. Low-pressure competitive fun.\nLower ability: Provide pre-made cards with simpler words (e.g., parts of speech, key terms).\nHigher ability: Create more complex cards; require them to explain why each word is important.',
  },
  // ──────────────────────────────────────────────
  // ASSESSMENT FOR LEARNING PLENARIES (10)
  // ──────────────────────────────────────────────
  {
    id: 'afl-1',
    type: 'Exit Ticket',
    title: 'Confidence Scale Checkpoint',
    description: 'Students rate their confidence on each learning objective and identify gaps.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Display 3-5 learning objectives. Students rate 1-5 (1=not confident, 5=very confident) for each. Collect responses. Use data to determine who needs intervention and what content needs reteaching. Create targeted small-group sessions for low-confidence areas.',
    variations: [
      'Use color coding: red (not confident), amber (somewhat confident), green (very confident).',
      'Pair with written evidence: "I\'m confident because... I\'m unsure because..."',
      'Digital: use quick online polls (Mentimeter, Quizizz) for instant data visualization.',
    ],
    differentiationNotes:
      'Honest self-assessment teaches metacognition. Provides formative data without labeling students.\nLower ability: Accept verbal responses or hand signals if writing is a barrier. Celebrate growth regardless of starting point.\nHigher ability: Require them to explain reasoning. Push them to identify specific misconceptions.',
  },
  {
    id: 'afl-2',
    type: 'Traffic Light Self-Assessment',
    title: 'Learning Evidence Tracker',
    description: 'Students collect concrete evidence of learning against success criteria.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Display success criteria. Students find and annotate one piece of evidence from today\'s work showing they\'ve met each criterion. Use highlighters or margin notes. Share examples. Discuss what "good" looks like-calibrate understanding of standards.',
    variations: [
      'Work backwards: give exemplar, students annotate where evidence appears.',
      "Peer review: swap work, students identify peer's evidence against criteria.",
      'Portfolio building: collect these over a unit to show progress.',
    ],
    differentiationNotes:
      'Makes standards concrete and visible. Shifts focus from grades to growth.\nLower ability: Provide pre-highlighted examples. Pair with lower achiever to co-annotate.\nHigher ability: Ask them to justify why their evidence is strong. Push for multiple examples.',
  },
  {
    id: 'afl-3',
    type: 'One-Minute Essay',
    title: 'I Can / I Need To Statement',
    description: 'Students write targeted statements about mastery and next steps.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Students complete two statements: "I can now... [skill/concept]" and "I need to work on... [skill/concept]". Be specific. Use responses to guide homework and next lesson. Creates positive framing and clear priorities.',
    variations: [
      'Three statements: "I can...", "I\'m developing...", "I need to..."',
      "Sentence-by-sentence for each objective: helps pinpoint exactly what's unclear.",
      'Peer share: read aloud in pairs, discuss areas of agreement/disagreement.',
    ],
    differentiationNotes:
      'Metacognitive tool that empowers learners. Clarifies what support is needed.\nLower ability: Provide sentence starters and vocabulary. Accept simpler language.\nHigher ability: Require elaboration: "I need to work on X because..." Stretch them to identify the root cause of confusion.',
  },
  {
    id: 'afl-4',
    type: 'Peer Marking',
    title: 'Peer Feedback-Glow and Grow',
    description: 'Students give structured peer feedback on classwork using a simple frame.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Pair students. Each shares one piece of work. Partner identifies one "glow" (strength) and one "grow" (area for improvement) using evidence. Use sentence stems: "I noticed you... [glow]", "Next time you could..." Partner then writes this feedback on a sticky note. Builds peer feedback culture.',
    variations: [
      'Written peer marking against a mark scheme.',
      'Two glows, one grow (more positive framing).',
      'Author responds to feedback: "I will..." Closes the loop.',
    ],
    differentiationNotes:
      'Teaches students to evaluate work against criteria, not personal preference. Safe peer learning.\nLower ability: Model with exemplar first. Provide sentence starters. Pair supportively.\nHigher ability: Require them to link feedback to specific success criteria. Push them to suggest concrete next-step strategies.',
  },
  {
    id: 'afl-5',
    type: 'Reflection Journal',
    title: 'Learning Question Journal',
    description: 'Students capture unanswered questions and wonderings for future learning.',
    duration: 3,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Students write 2-3 questions that emerged during the lesson. "I\'m wondering why...", "I want to know...", "How does... connect to...?" Collect these. Use them to plan next lesson or research projects. Shows curiosity and gaps.',
    variations: [
      'Gallery walk: post questions, students add answers or further questions.',
      'Question hierarchy: identify which questions are most important to answer next.',
      'Extended research: make questions into independent learning tasks.',
    ],
    differentiationNotes:
      'Shifts mindset from having all answers to valuing inquiry. Personalized learning paths.\nLower ability: Model question-asking. Accept one-word prompts. Celebrate question quality over grammar.\nHigher ability: Push for deeper, more analytical questions. Link to prior knowledge.',
  },
  {
    id: 'afl-6',
    type: 'Concept Mapping',
    title: 'Misconception Diagnosis',
    description:
      'Students create concept maps revealing gaps and false connections in understanding.',
    duration: 6,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Display a central concept. Students create a quick concept map showing relationships. Review maps. Identify misunderstandings (e.g., "character" connected to "author" directly rather than through text). Address in real time. Invisible misunderstandings become visible.',
    variations: [
      'Venn diagram comparing two concepts.',
      'Timeline showing cause-and-effect relationships.',
      'Pros/cons or argument mapping.',
    ],
    differentiationNotes:
      'Diagnostic tool that reveals thinking processes. Prevents misconceptions from persisting.\nLower ability: Provide a template or partial map. Reduce number of connections required.\nHigher ability: Require written explanations of each link. Challenge them to identify hierarchy (core vs. peripheral ideas).',
  },
  {
    id: 'afl-7',
    type: 'Think-Pair-Share',
    title: 'Success Criteria Dialogue',
    description: "Students discuss whether they've met success criteria and how they know.",
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Think: Review success criteria silently. Pair: Discuss with partner-"Have we met this? What evidence do we have?" Share: Select pairs to share their conclusions. Teacher clarifies any confused understanding. Builds shared standards.',
    variations: [
      'Think-pair-share focused on one challenging criterion.',
      'Use an exemplar: compare their work to model.',
      'Written version: students write, then discuss.',
    ],
    differentiationNotes:
      'Collaborative sense-making. Exposes misconceptions through dialogue.\nLower ability: Provide exemplar to compare against. Simplify language of criteria. Pair with stronger partner.\nHigher ability: Ask them to explain criteria to others. Challenge them to identify borderline work.',
  },
  {
    id: 'afl-8',
    type: 'Retrieval Practice',
    title: 'Spaced Recall Quiz-Cumulative Review',
    description: 'Low-stakes quiz mixing new content with previously taught material.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Create a 10-question quiz: 50% today's content, 50% from past lessons/units. No marking. Collect, review, and identify patterns: what's been forgotten? What's understood? Use data to target review and spacing strategy.",
    variations: [
      'Spaced recall through the week: Monday (lesson 1), Wednesday (lessons 1+2), Friday (lessons 1-3).',
      'Use quizzes to build cumulative study guides.',
      'Peer quiz: students create questions for each other.',
    ],
    differentiationNotes:
      'Improves long-term retention. Builds confidence through success on older material.\nLower ability: Easier questions or multiple-choice format. Celebrate gains in retention.\nHigher ability: Application questions; require reasoning beyond recall.',
  },
  {
    id: 'afl-9',
    type: 'Mind Map Review',
    title: 'Individual Learning Roadmap',
    description: 'Students create a personalized visual roadmap of their learning journey.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Central node: learning objective or text. Students branch out with: what I knew before, what I learned, what I still want to know, how I'll apply this. Add visuals, colors, symbols. Display. Celebrate diversity of thinking. Powerful memory aid.",
    variations: [
      'Before-and-after mind maps: compare prior knowledge to current understanding.',
      'Collaborative: whole class creates one mind map together.',
      'Digital: use Mindomo, Coggle, or similar tools.',
    ],
    differentiationNotes:
      'Kinaesthetic and visual. Honors different ways of thinking and learning.\nLower ability: Provide template with branches already outlined. Accept drawing/symbols instead of text.\nHigher ability: Require hierarchical organization. Push them to make cross-curricular connections.',
  },
  {
    id: 'afl-10',
    type: 'Exit Ticket',
    title: 'Goal-Setting Ticket',
    description: 'Students set a specific, measurable learning goal for next lesson.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Students write: "By the next lesson, I will... [specific goal based on today\'s learning]". Examples: "I will practice annotating poetic devices", "I will read Chapter 3 and note unfamiliar vocabulary", "I will rewrite my paragraph with embedded quotes". Collect. Reference next lesson. Creates accountability and continuity.',
    variations: [
      'SMART goals: specific, measurable, achievable, relevant, time-bound.',
      'Share goals aloud: peer accountability.',
      'Review in next lesson: celebrate those who completed their goal.',
    ],
    differentiationNotes:
      'Develops learner agency and growth mindset. Links lessons together.\nLower ability: Provide goal bank or sentence starters. Accept smaller, shorter-term goals.\nHigher ability: Push for challenging, stretch goals. Require them to explain why this goal matters.',
  },

  // ──────────────────────────────────────────────
  // CREATIVE CONSOLIDATION PLENARIES (10)
  // ──────────────────────────────────────────────
  {
    id: 'creative-1',
    type: 'Mind Map Review',
    title: 'Character Web Creation',
    description: 'Students create visual webs showing character relationships and development.',
    duration: 6,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions:
      'Central node: main character. Spider out with: physical description, key emotions, relationships to other characters, key actions, motivation, growth. Use colors for emotions, symbols for themes. Display on wall. Discuss differences in interpretation. Celebrates creative thinking while deepening understanding.',
    variations: [
      'Relationship web: show connections between multiple characters.',
      'Before-and-after character web: shows character arc.',
      'Add quotes: link moments to character traits.',
    ],
    differentiationNotes:
      'Multi-modal learning. Visual and narrative thinking.\nLower ability: Provide sentence starters or word bank. Accept sketches. Reduce number of branches.\nHigher ability: Require textual evidence for each claim. Link to themes. Explore contradictions in character.',
  },
  {
    id: 'creative-2',
    type: 'One-Minute Essay',
    title: 'Six-Word Story Challenge',
    description: 'Students distill a lesson, text, or concept into a six-word story.',
    duration: 4,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Challenge: tell the story/idea in exactly six words. Forces economy of language and creative thinking. Examples from literature: "For sale: baby shoes, never worn" or create new ones. Share aloud. Vote on most impactful. Discuss how much can be conveyed with constraints.',
    variations: [
      'Haiku: 5-7-5 syllable constraint.',
      'Acrostic: first letter of each line spells a word.',
      'Rhyming couplet: two-line summary that rhymes.',
    ],
    differentiationNotes:
      'Develops precision and creativity simultaneously. Builds confidence in all writers.\nLower ability: Allow more than six words if needed; focus on capturing the essence. Use easier texts.\nHigher ability: Require six words exactly. Push for sophisticated, layered meanings. Link to poetic devices.',
  },
  {
    id: 'creative-3',
    type: 'Peer Explanation',
    title: 'Teaching Station Carousel',
    description: 'Groups become "experts" on one topic and teach others in a rotating carousel.',
    duration: 8,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Divide class into expert groups. Each teaches one aspect of today's lesson (e.g., one metaphor, one character, one historical context). Groups prepare a 2-minute explanation. Rotate: students visit each station, listen, ask questions. Reinforces learning through teaching. High engagement.",
    variations: [
      'Expert jigsaw: each group teaches, then home groups reassemble to share.',
      'Visual stations: each station has poster, images, artifacts to engage multiple senses.',
      'Gallery walk: stations are silent; viewers annotate post-it notes with questions.',
    ],
    differentiationNotes:
      'Peer teaching is powerful retention and clarification tool.\nLower ability: Provide script or key points to teaching stations. Pair with stronger peer as co-teacher.\nHigher ability: Require them to anticipate and answer follow-up questions. Push for deeper explanation of why, not just what.',
  },
  {
    id: 'creative-4',
    type: 'Reflection Journal',
    title: 'Artifact Reflection',
    description:
      'Students select one artifact from today (quote, image, phrase) and explore its meaning.',
    duration: 4,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Students choose one artifact: a powerful quote, vivid image, striking phrase, key concept. Write: What does this represent? Why did I choose it? How does it connect to my own life or understanding? Add to portfolio. Builds reflective practice and personal connection.',
    variations: [
      'Paired reflection: share artifact with partner, explain choice, listen to their interpretation.',
      'Visual artifact: paste image and write around it.',
      'Symbolic: choose an object from class that represents learning and explain metaphor.',
    ],
    differentiationNotes:
      'Personal and meaningful. Deepens engagement with content.\nLower ability: Provide artifact bank. Accept shorter, simpler reflections. Allow drawing instead of writing.\nHigher ability: Push for deeper analysis. Ask: what does this reveal about you as a learner? How will you use this insight?',
  },
  {
    id: 'creative-5',
    type: 'Think-Pair-Share',
    title: 'Creative Application Brainstorm',
    description: "Students brainstorm real-world or imaginative applications of today's learning.",
    duration: 5,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Think: silently generate ideas for how today's concept/skill applies beyond English class. (Where else might you use inference? When would you need to structure an argument?) Pair: discuss ideas with partner. Share: select pairs to share wildest, most practical, most creative applications. Celebrates transfer and creative thinking.",
    variations: [
      'Future application: "In 10 years, how will you use this?"',
      'Cross-curricular: "Where do you use this in science/history/maths?"',
      'Career connection: "What jobs require this skill?"',
    ],
    differentiationNotes:
      'Links learning to real life. Motivates through relevance.\nLower ability: Provide application examples bank. Accept verbal responses. Celebrate all contributions.\nHigher ability: Push for less obvious applications. Require justification of how skill transfers.',
  },
  {
    id: 'creative-6',
    type: 'Concept Mapping',
    title: 'Theme Web',
    description: 'Students create visual webs showing how themes interconnect through text.',
    duration: 6,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Central node: theme (e.g., power, identity, conflict). Students spider out to: textual evidence (quotes, scenes), related themes, real-world connections, personal connections. Use different colors for different types of evidence. Display and discuss. Shows sophisticated understanding.',
    variations: [
      'Overlapping circles (Venn) showing how themes intersect.',
      'Timeline showing how theme develops through text.',
      'Comparison web: same theme across two texts.',
    ],
    differentiationNotes:
      'Develops thematic analysis. Visual and spatial learners thrive.\nLower ability: Provide theme sentence starters and textual evidence pre-selected. Reduce number of branches.\nHigher ability: Require synthesis: "How do these themes comment on human nature?" Push for nuanced interpretation.',
  },
  {
    id: 'creative-7',
    type: 'Exit Ticket',
    title: 'Creative Metaphor Closure',
    description: 'Students capture the lesson as a metaphor or image.',
    duration: 3,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Prompt: "If today\'s learning were a [season/animal/journey/color/building], what would it be and why?" Students answer in 2-3 sentences. Share aloud. Discuss. Creative, non-threatening way to check understanding. Reveals how students are processing the material.',
    variations: [
      'Draw the metaphor instead of writing.',
      'Create a symbol or icon representing the lesson.',
      'Haiku describing the "feeling" of today\'s learning.',
    ],
    differentiationNotes:
      'Right-brain thinking. Engages creative learners. Often reveals understanding in interesting ways.\nLower ability: Provide metaphor options. Accept simpler explanations. Celebrate all metaphors.\nHigher ability: Push for sophisticated, non-obvious comparisons. Require explanation of how metaphor holds.',
  },
  {
    id: 'creative-8',
    type: 'Peer Explanation',
    title: 'Technique Detective',
    description:
      'Students identify and explain a literary technique, then become "detectives" in peer work.',
    duration: 5,
    suitableFor: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Model one technique. Students become detectives: find examples in today's text. Annotate. Explain effect. Then exchange work with peer. Peer marks their annotations (green for clear, yellow for good try, red for needs refinement). Discuss refinements. Builds technical vocabulary and peer feedback.",
    variations: [
      'Speed dating: students rotate, sharing their best technique find with different partners.',
      'Evidence wall: post all technique finds on wall. Gallery walk. Vote on most effective use.',
      'Comparison: find same technique used by two different authors; compare effect.',
    ],
    differentiationNotes:
      'Hands-on, collaborative literary analysis.\nLower ability: Provide technique sentence starters and effect banks. Reduce to one technique to find.\nHigher ability: Push for comparison across texts. Require explanation of why author chose this technique. Explore alternatives and their effects.',
  },
  {
    id: 'creative-9',
    type: 'Mind Map Review',
    title: 'Multisensory Review Map',
    description: 'Students create a rich, multisensory mind map engaging multiple modalities.',
    duration: 6,
    suitableFor: ['Year 7', 'Year 8', 'Year 9', 'Year 10'],
    instructions:
      'Mind map with: words (key concepts), colors (emotions/themes), symbols (characters/actions), textures (rough/smooth paper for tone), sounds (onomatopoeia or music associations). Discuss: why these choices? What does multisensory representation reveal? Engages kinaesthetic and creative learners.',
    variations: [
      'Digital: use Canva or interactive mind-mapping tools.',
      'Collaborative: whole class creates one massive multisensory map.',
      'Museum artifact: treat map as museum piece; students write labels and interpretation notes.',
    ],
    differentiationNotes:
      'Highly engaging for diverse learners. Reduces focus on spelling/mechanics.\nLower ability: Provide color/symbol key. Simplify content to core concepts. Accept sketches.\nHigher ability: Push for intentionality in choices. Require written explanation of symbolism. Link to themes.',
  },
  {
    id: 'creative-10',
    type: 'Reflection Journal',
    title: 'Dialogue with Self',
    description: 'Students write an imagined dialogue between their current and future self.',
    duration: 4,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Students write a dialogue: "Me now" asking questions about today\'s content, "Me next week/month/year" answering from a perspective of deeper understanding. This metacognitive exercise reveals gaps and builds vision of growth. Powerful closure that looks forward.',
    variations: [
      'Dialogue with character or author: student interviewing them about motivation or choices.',
      'Dialogue with the concept: student questioning an idea, idea defending itself.',
      'Letter to future self: what I promise to do with this learning.',
    ],
    differentiationNotes:
      "Imaginative and forward-looking. Builds agency.\nLower ability: Provide dialogue frame with sentence starters. Accept shorter, simpler dialogue.\nHigher ability: Push for philosophical depth. Require them to challenge future self's claims. Explore contradictions.",
  },

  // ──────────────────────────────────────────────
  // ──────────────────────────────────────────────
  // EXAM PREP PLENARIES (10)
  // ──────────────────────────────────────────────
  {
    id: 'exam-11',
    type: 'Exam Question Sprint',
    title: 'Past Paper Question Analysis',
    description: 'Students tackle a past exam question, then review mark scheme together.',
    duration: 8,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Display a past exam question. Students answer individually (10 mins). Reveal mark scheme. Work through together: what made answers secure? What were common errors? Create an annotation of the model answer showing where marks come from. Store for revision reference.',
    variations: [
      'Redrafting: students rewrite their response post-mark scheme; compare before/after.',
      'Comparative: two different model answers; students identify strengths of each.',
      'Time trial: increasingly harder questions; challenge students to beat the clock while maintaining quality.',
    ],
    differentiationNotes:
      'Demystifies exam expectations. Builds exam literacy.\nLower ability: Provide sentence starters or paragraph frames. Scaffold with guided mark scheme. Extend time.\nHigher ability: Move to harder questions early. Require them to explain why mark scheme awards marks. Peer mark lower-ability responses.',
  },
  {
    id: 'exam-12',
    type: 'Quick Quiz',
    title: 'Exam Vocabulary Rapid Recall',
    description: 'Quick-fire recall of key subject-specific and exam-command vocabulary.',
    duration: 3,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Display exam-command words and technical vocabulary. Quick-fire: students define or use in sentence. Build confidence and fluency with language that appears in exam questions. Create a cumulative word bank students can take into revision.',
    variations: [
      'Vocabulary bingo (see existing activity).',
      'Speed dating: pairs rotate, defining vocabulary for each other.',
      'Roots and branches: students explore etymologies and how words are related.',
    ],
    differentiationNotes:
      'Ensures clarity on exam language. Reduces anxiety from unfamiliar phrasing.\nLower ability: Multiple-choice definitions. Simpler vocabulary. Celebrate each correct answer.\nHigher ability: Challenge them to use words in complex sentences. Ask them to teach others.',
  },
  {
    id: 'exam-13',
    type: 'Retrieval Practice',
    title: 'Cumulative Exam Review Series',
    description: 'Ongoing spaced retrieval targeting the most error-prone exam topics.',
    duration: 5,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Track which past exam questions students consistently struggle with. Build a rotation of these into plenaries. Mix old content with new. Low-stakes retrieval practice strengthens retention and builds confidence on vulnerable content. Creates mastery over time.',
    variations: [
      'Exam question carousel: different stations, each with a different past exam question.',
      'Student-generated questions: students write exam-style questions on weak topics; peers answer.',
      'Exam strategy sessions: practice annotation, time management, command-word decoding on real questions.',
    ],
    differentiationNotes:
      'Targeted, data-driven revision. Builds exam resilience.\nLower ability: Easier exam questions or earlier exam series. Provide mark schemes and feedback. Celebrate progress.\nHigher ability: Harder questions from recent exams. Push for sophisticated responses. Peer feedback.',
  },
  {
    id: 'exam-14',
    type: 'One-Minute Essay',
    title: 'Timed Essay Sprint',
    description: 'Students write a short timed essay, then self-assess against criteria.',
    duration: 7,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      "Display essay question. Students have 5 minutes to write. Display criteria (introduction, evidence, analysis, conclusion). Students self-assess: ticks where they've met each criterion, crosses where they're weak. Identify patterns. Practice against time reduces exam anxiety.",
    variations: [
      'Incremental timing: Week 1, 10 mins; Week 2, 8 mins; Week 3, 6 mins. Build fluency and speed.',
      'Peer marking: swap essays, mark against criteria.',
      'Teacher feedback: collect one essay weekly, provide targeted feedback.',
    ],
    differentiationNotes:
      'Exam stamina building. Reduces time anxiety.\nLower ability: Extend time. Provide essay frame (topic sentence, 2-3 evidence points, conclusion). Scaffold introduction and conclusion.\nHigher ability: Shorter time limits. Stretch criteria to include sophisticated techniques. Push for evaluation rather than assertion.',
  },
  {
    id: 'exam-15',
    type: 'Exit Ticket',
    title: 'Exam Confidence and Strategy Reflection',
    description: 'Students reflect on exam preparation progress and identify next-step strategies.',
    duration: 4,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Prompt: "Rate your exam readiness 1-5. What\'s going well? What\'s your biggest worry? What will you revise this week?" Collect responses. Address misconceptions. Offer targeted support strategies. Builds metacognition and shows you care.',
    variations: [
      'Create a revision action plan: specific topics, timing, resources.',
      'Peer support: link students with similar worries for revision partnerships.',
      'Progress tracking: revisit weekly; celebrate progress on worried topics.',
    ],
    differentiationNotes:
      'Emotional dimension of exam prep. Powerful for identifying struggling students early.\nLower ability: Celebrate any progress. Offer targeted small-group revision. Build confidence incrementally.\nHigher ability: Push them to set stretch targets. Encourage them to support peers.',
  },
  {
    id: 'exam-16',
    type: 'Concept Mapping',
    title: 'Exam Structure and Demand Map',
    description:
      'Students create visual maps of exam structure, question types, and command words.',
    duration: 5,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Central node: exam title. Spider out to: sections, question types, command words, mark allocations, time allocations, content domains. Create one class map together, then students annotate with revision priorities. Demystifies exam format. Creates strategic approach.',
    variations: [
      "Individual strategy maps: each student plans how they'll approach each question type.",
      'Time management map: spider shows question type, marks, and recommended time.',
      'Command-word decoder: map showing what each command word requires.',
    ],
    differentiationNotes:
      'Builds exam literacy and strategic thinking.\nLower ability: Provide template or partially completed map. Simplify focus to one section.\nHigher ability: Push them to identify where marks are "easy" vs. "hard"; plan time allocation strategically.',
  },
  {
    id: 'exam-17',
    type: 'Peer Marking',
    title: 'Exam Marking Calibration',
    description:
      'Students mark peer work against mark scheme; compare marking decisions with teacher.',
    duration: 6,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Students swap exam-style responses. Mark against provided mark scheme. Teacher marks same responses. Compare: where did students over/under-mark? Discuss discrepancies. Teach students what examiners are actually looking for. Powerful for understanding standards.',
    variations: [
      'Blind marking: remove names; students mark without knowing whose work.',
      'Moderation: small group marks same piece, discusses until consensus.',
      'Exemplar deconstruction: mark a high-achieving response as a group first; use as calibration point.',
    ],
    differentiationNotes:
      'Teaches students to be fair evaluators. Demystifies marking.\nLower ability: Focus on marking one criterion at a time. Celebrate attempts to apply criteria fairly.\nHigher ability: Push them to justify marks. Explore borderline decisions. Teach distinguishing between grades.',
  },
  {
    id: 'exam-18',
    type: 'Think-Pair-Share',
    title: 'Command Word Strategy Session',
    description:
      'Students discuss strategies for decoding and responding to different exam command words.',
    duration: 5,
    suitableFor: ['Year 9', 'Year 10', 'Year 11'],
    instructions:
      'Assign each pair a command word (analyze, evaluate, compare, explain, discuss). Think: what does this word ask you to do? Pair: discuss strategies and exemplify with an example response. Share: each pair teaches the class their command word and strategy. Creates shared understanding of exam language.',
    variations: [
      'Linked questions: pairs show how to answer same topic with different command words.',
      'Mistake analysis: show weak responses to command words; students diagnose the error.',
      'Practice station: rotate through stations, each practicing a different command word.',
    ],
    differentiationNotes:
      'Exam language clarity. Reduces anxiety from misunderstanding questions.\nLower ability: Provide definition and example for each word. Simplify explanation required.\nHigher ability: Push them to explain why authors use different command words. Explore nuances (e.g., compare vs. contrast).',
  },
  {
    id: 'exam-19',
    type: 'Reflection Journal',
    title: 'Exam Preparation Progress Journal',
    description:
      'Students maintain a journal tracking revision progress, gaps, and breakthrough moments.',
    duration: 3,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Weekly entry: "Topics revised, gaps identified, aha! moments, next priority." Over time, students see progress. Entries become revision notes. Journaling reduces anxiety and builds agency. Review before exam for confidence boost.',
    variations: [
      'Digital journal: share with teacher for feedback on revision strategy.',
      "Peer review: read partner's journal; offer encouragement and suggestions.",
      'Reflection gallery: display anonymized excerpts; celebrate diverse learning journeys.',
    ],
    differentiationNotes:
      'Builds exam resilience and ownership of revision.\nLower ability: Shorter entries with sentence starters. Celebrate any revision done. Build confidence incrementally.\nHigher ability: Push them to analyze patterns. Require them to evaluate revision strategy effectiveness.',
  },
  {
    id: 'exam-20',
    type: 'Mind Map Review',
    title: 'Revision Roadmap',
    description:
      'Students create a personal visual roadmap of all revision topics with priority indicators.',
    duration: 5,
    suitableFor: ['Year 10', 'Year 11'],
    instructions:
      'Central node: subject/exam. Branches: major topics. Sub-branches: specific concepts. Color code: green (confident), amber (revision needed), red (urgent priority). Add timelines. Students use roadmaps to plan revision timetables. Visual and strategic.',
    variations: [
      'Digital: use interactive tools (Coggle, Miro) students can update and share.',
      'Collaborative: whole class creates one master roadmap; identify common weak areas for group revision.',
      'Checkpoint: revisit weekly; update as students gain confidence. See progress over time.',
    ],
    differentiationNotes:
      'Strategic, visual revision planning. Builds confidence.\nLower ability: Provide template with topics pre-loaded. Reduce number of branches. Celebrate progress in priority areas.\nHigher ability: Push them to prioritize based on exam weighting and their own confidence. Create study guides for each branch.',
  },
]
