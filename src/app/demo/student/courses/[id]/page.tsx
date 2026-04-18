"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  BookOpen,
  FileQuestion,
  ChevronRight,
  X,
  AlertTriangle,
  Lightbulb,
  Trophy,
  RotateCcw,
  Star,
  Clock,
} from "lucide-react"

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Module {
  id: string
  title: string
  completed: boolean
  lessonContent: string
  quiz: { question: string; options: string[]; answer: number }[]
  quizScore?: number | null  // student's previous score (null = not attempted)
  quizMaxScore?: number
  revisionNeeded?: boolean
  revisionTip?: string
}

interface CourseData {
  title: string
  description: string
  modules: Module[]
  progress: number
}

const COURSES: Record<string, CourseData> = {
  "aqa-lang-p1": {
    title: "AQA English Language Paper 1",
    description: "Explorations in creative reading and writing for Paper 1.",
    progress: 67,
    modules: [
      {
        id: "m1",
        title: "Understanding the Reading Passage",
        completed: true,
        quizScore: 5, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "When approaching a reading passage in Paper 1, your first task is to read the entire text carefully. Look for the writer's purpose, audience, and tone. Underline key phrases that convey meaning. Pay attention to structural choices -- why does the writer begin or end in a particular way?\n\nKey skills:\n- Skimming for gist (what is the passage about?)\n- Scanning for specific details\n- Identifying explicit and implicit meaning\n- Recognising how writers use language for effect\n\nPractice reading a variety of text types: articles, reports, letters, speeches, and diary entries. Each has its own conventions and expected register.",
        quiz: [
          { question: "What is the first step when approaching a reading passage?", options: ["Answer the questions immediately", "Read the entire text carefully", "Underline every word", "Skip to the end"], answer: 1 },
          { question: "What does 'scanning' a text mean?", options: ["Reading every word slowly", "Looking for specific details", "Writing a summary", "Memorising the text"], answer: 1 },
          { question: "Which of these is NOT a text type you might encounter?", options: ["Article", "Speech", "Algebra equation", "Diary entry"], answer: 2 },
          { question: "What does 'implicit meaning' refer to?", options: ["Meaning stated directly", "Meaning that is suggested but not stated", "The title of the text", "The author's name"], answer: 1 },
          { question: "Why should you pay attention to structural choices?", options: ["They are always tested", "They reveal the writer's craft", "They make the text longer", "They are easy marks"], answer: 1 },
        ],
      },
      {
        id: "m2",
        title: "Summary Writing Techniques",
        completed: true,
        quizScore: 4, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "Summary writing requires you to identify key points from a passage and present them in your own words. You must be concise and avoid copying large chunks of the original text.\n\nStep-by-step approach:\n1. Read the question carefully -- what are you summarising?\n2. Identify relevant points from the passage\n3. List them in a logical order\n4. Rewrite using your own words\n5. Check you have not exceeded the word limit\n\nCommon mistakes to avoid:\n- Copying directly from the passage\n- Including irrelevant details\n- Writing in bullet points instead of continuous prose\n- Exceeding the word limit",
        quiz: [
          { question: "What is the most important first step in summary writing?", options: ["Start writing immediately", "Count the words", "Read the question carefully", "Copy the passage"], answer: 2 },
          { question: "Should you copy directly from the passage?", options: ["Yes, always", "Only if you use quotation marks", "No, use your own words", "Only the first sentence"], answer: 2 },
          { question: "What format should your summary take?", options: ["Bullet points", "Continuous prose", "A diagram", "A table"], answer: 1 },
          { question: "What should you do after writing your summary?", options: ["Hand it in immediately", "Check the word limit", "Add more details", "Start again"], answer: 1 },
          { question: "Which is a common mistake in summary writing?", options: ["Being concise", "Using own words", "Including irrelevant details", "Staying within word limit"], answer: 2 },
        ],
      },
      {
        id: "m3",
        title: "Directed Writing: Letters and Reports",
        completed: true,
        quizScore: 3, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "Directed writing tasks ask you to write in a specific format (letter, report, speech, article) based on information from the reading passage. You must adapt your register, tone, and format to suit the purpose and audience.\n\nFor formal letters:\n- Use appropriate greetings and sign-offs\n- Maintain formal register throughout\n- Organise points into clear paragraphs\n\nFor reports:\n- Use a clear title and subheadings\n- Present information objectively\n- Include recommendations where appropriate\n\nRemember: you will be marked on both content (how well you use the passage) and language (how well you write).",
        quiz: [
          { question: "What must you adapt in directed writing?", options: ["Only the format", "Register, tone, and format", "Just the length", "The reading passage"], answer: 1 },
          { question: "What is appropriate for a formal letter?", options: ["Slang and abbreviations", "Formal greetings and sign-offs", "Emojis", "Text speak"], answer: 1 },
          { question: "What should a report include?", options: ["Poems", "A clear title and subheadings", "Personal diary entries", "Song lyrics"], answer: 1 },
          { question: "You are marked on which two areas?", options: ["Speed and neatness", "Content and language", "Length and vocabulary", "Spelling and grammar only"], answer: 1 },
          { question: "Where does the content for directed writing come from?", options: ["Your imagination only", "The reading passage", "A dictionary", "The internet"], answer: 1 },
        ],
      },
      {
        id: "m4",
        title: "Language Analysis: Word Choices",
        completed: true,
        quizScore: 4, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "Analysing a writer's word choices (also called diction) is a key skill. You need to explain WHY a writer has chosen particular words and what EFFECT they create.\n\nUse the PEE structure:\n- Point: What technique or word choice have you noticed?\n- Evidence: Quote the specific word or phrase\n- Explanation: What effect does it create? How does it make the reader feel?\n\nPower words to use in your analysis:\n- 'suggests', 'implies', 'connotes'\n- 'creates a sense of', 'evokes'\n- 'emphasises', 'highlights'\n\nAvoid simply saying a word is 'effective' without explaining how.",
        quiz: [
          { question: "What does 'diction' refer to?", options: ["Punctuation", "Word choices", "Sentence length", "Paragraphing"], answer: 1 },
          { question: "What does PEE stand for?", options: ["Point, Evidence, Explanation", "Paragraph, Essay, Exam", "Plan, Execute, Evaluate", "Purpose, Effect, Example"], answer: 0 },
          { question: "Which word is good to use in language analysis?", options: ["Nice", "Good", "Suggests", "Interesting"], answer: 2 },
          { question: "What should you avoid in analysis?", options: ["Using quotations", "Explaining effects", "Saying a word is just 'effective'", "Using PEE structure"], answer: 2 },
          { question: "What must you always explain about word choices?", options: ["How to spell them", "Why they were chosen and their effect", "What dictionary they come from", "How long they are"], answer: 1 },
        ],
      },
      {
        id: "m5",
        title: "Language Analysis: Sentence Structures",
        completed: true,
        quizScore: 5, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "Writers carefully choose sentence structures to create specific effects. Being able to identify and analyse these is crucial for Paper 1.\n\nTypes of sentences:\n- Short/simple sentences: create tension, emphasis, or impact\n- Long/complex sentences: build detail, create flowing descriptions\n- Questions (rhetorical): engage the reader, provoke thought\n- Exclamatory sentences: convey strong emotion\n- Lists/tricolons: build rhythm, emphasise quantity\n\nAlways link structure to effect. A short sentence after a long one creates a sudden, dramatic pause. A series of long sentences can create a breathless, overwhelming feeling.",
        quiz: [
          { question: "What effect can short sentences create?", options: ["Boredom", "Tension and emphasis", "Confusion", "Comedy"], answer: 1 },
          { question: "What is a rhetorical question?", options: ["A question expecting no answer", "A grammar mistake", "A type of essay", "A punctuation mark"], answer: 0 },
          { question: "What is a tricolon?", options: ["Three paragraphs", "A list of three", "Three essays", "Three exams"], answer: 1 },
          { question: "What effect does a short sentence after a long one create?", options: ["Nothing special", "A dramatic pause", "Confusion", "A spelling mistake"], answer: 1 },
          { question: "Long, complex sentences can create what feeling?", options: ["Boredom only", "A breathless, overwhelming feeling", "Anger", "Sleepiness"], answer: 1 },
        ],
      },
      {
        id: "m6",
        title: "Inference and Deduction",
        completed: true,
        quizScore: 2, quizMaxScore: 5, revisionNeeded: true,
        revisionTip: "Focus on reading between the lines. Practise with short extracts: for each paragraph, write down what the writer implies but does not state directly.",
        lessonContent: "Inference means reading between the lines -- understanding what a writer means without them stating it directly. Deduction is drawing logical conclusions from evidence in the text.\n\nTo practise inference:\n- Ask yourself: what is the writer NOT saying directly?\n- Look at character actions and dialogue for hidden feelings\n- Consider the mood and atmosphere created\n- Think about what the reader is meant to feel\n\nExample: \"She gripped the edge of the table, her knuckles white.\" The writer does not say the character is scared or angry, but we can infer strong emotion from the physical description.",
        quiz: [
          { question: "What does inference mean?", options: ["Copying from the text", "Reading between the lines", "Writing a summary", "Counting words"], answer: 1 },
          { question: "In the example, what can we infer from 'knuckles white'?", options: ["The character is relaxed", "The character feels strong emotion", "The table is cold", "The character is painting"], answer: 1 },
          { question: "What should you look at for hidden feelings?", options: ["Page numbers", "Character actions and dialogue", "The title only", "The date of publication"], answer: 1 },
          { question: "What is deduction?", options: ["Guessing randomly", "Drawing logical conclusions from evidence", "Subtracting numbers", "Skipping the question"], answer: 1 },
          { question: "Inference requires understanding meaning that is...", options: ["Stated directly", "Not stated directly", "In the title", "In the glossary"], answer: 1 },
        ],
      },
      {
        id: "m7",
        title: "Responding to Descriptive Writing",
        completed: true,
        quizScore: 4, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "When responding to descriptive writing, focus on how the writer creates vivid imagery and atmosphere. Look for sensory details -- what can you see, hear, smell, taste, or touch in the passage?\n\nKey techniques to identify:\n- Similes and metaphors\n- Personification\n- Pathetic fallacy (weather reflecting mood)\n- Sensory imagery (the five senses)\n- Colour imagery\n- Sound devices (onomatopoeia, alliteration)\n\nAlways connect the technique to its effect. Do not simply identify a simile -- explain what picture it creates in the reader's mind and what mood or feeling it establishes.",
        quiz: [
          { question: "What are sensory details?", options: ["Details about sensors", "Details relating to the five senses", "Details about technology", "Details about numbers"], answer: 1 },
          { question: "What is pathetic fallacy?", options: ["A logical error", "Weather reflecting mood", "A type of poem", "Bad writing"], answer: 1 },
          { question: "What should you do after identifying a technique?", options: ["Move to the next question", "Explain its effect", "Ignore it", "Just name it"], answer: 1 },
          { question: "Which is an example of onomatopoeia?", options: ["Beautiful", "Crash", "However", "Meanwhile"], answer: 1 },
          { question: "What does descriptive writing aim to create?", options: ["Boredom", "Vivid imagery and atmosphere", "Confusion", "Lists of facts"], answer: 1 },
        ],
      },
      {
        id: "m8",
        title: "Responding to Narrative Writing",
        completed: true,
        quizScore: 3, quizMaxScore: 5, revisionNeeded: true,
        revisionTip: "Revise narrative structure: opening, rising action, climax, and resolution. Practise identifying each in short stories.",
        lessonContent: "Narrative writing tells a story. When analysing it, pay attention to plot structure, character development, and narrative perspective.\n\nKey elements to analyse:\n- Opening: How does the writer hook the reader?\n- Rising action: How does tension build?\n- Climax: What is the turning point?\n- Resolution: How are conflicts resolved?\n- Narrative voice: First person? Third person? Reliable narrator?\n\nAlso consider pacing. Writers speed up action with short sentences and slow it down with detailed description. Flashbacks and foreshadowing add layers of meaning.",
        quiz: [
          { question: "What does narrative writing do?", options: ["Lists facts", "Tells a story", "Defines words", "Solves problems"], answer: 1 },
          { question: "What is the climax of a story?", options: ["The beginning", "The turning point", "The end", "The title"], answer: 1 },
          { question: "How do writers speed up action?", options: ["Long paragraphs", "Short sentences", "Footnotes", "Subheadings"], answer: 1 },
          { question: "What does foreshadowing do?", options: ["Summarises the story", "Hints at what will happen later", "Ends the story", "Introduces the author"], answer: 1 },
          { question: "Which is a narrative perspective?", options: ["Second paragraph", "First person", "Last page", "Middle section"], answer: 1 },
        ],
      },
      {
        id: "m9",
        title: "Comparing Texts",
        completed: true,
        quizScore: 2, quizMaxScore: 5, revisionNeeded: true,
        revisionTip: "Use comparative connectives like 'whereas', 'similarly', 'in contrast'. Always address both texts in each paragraph rather than writing about them separately.",
        lessonContent: "Some questions ask you to compare how two texts present a similar theme or topic. You need to identify similarities AND differences.\n\nStructure your comparison:\n- Address both texts in each paragraph (do not write about Text A then Text B separately)\n- Use comparative connectives: 'similarly', 'in contrast', 'whereas', 'on the other hand'\n- Compare specific techniques, not just general ideas\n- Show which text is more effective and why\n\nA good comparison paragraph:\n1. Make a point about Text A with evidence\n2. Compare with a related point about Text B with evidence\n3. Analyse the difference or similarity in effect",
        quiz: [
          { question: "How should you structure a comparison?", options: ["Text A then Text B separately", "Address both texts in each paragraph", "Only write about one text", "Ignore one text"], answer: 1 },
          { question: "Which is a comparative connective?", options: ["Because", "Whereas", "And", "The"], answer: 1 },
          { question: "What should you compare?", options: ["Only general ideas", "Specific techniques", "Page numbers", "Word counts"], answer: 1 },
          { question: "What makes a comparison effective?", options: ["Being very long", "Showing which text is more effective and why", "Avoiding quotations", "Only listing similarities"], answer: 1 },
          { question: "Should you address differences as well as similarities?", options: ["No, only similarities", "No, only differences", "Yes, both", "Neither"], answer: 2 },
        ],
      },
      {
        id: "m10",
        title: "Exam Practice: Timed Reading",
        completed: true,
        quizScore: 4, quizMaxScore: 5, revisionNeeded: false,
        lessonContent: "Exam success requires efficient time management. For Paper 1 reading, you typically have about 1 hour to read the passage and answer all questions.\n\nTime allocation:\n- 10 minutes: Read the passage carefully (twice if possible)\n- 10 minutes: Short-answer questions (1-2 marks each)\n- 15 minutes: Language analysis question\n- 15 minutes: Summary question\n- 10 minutes: Review and check\n\nTips:\n- Do not spend too long on low-mark questions\n- Always attempt every question\n- Use quotations to support your points\n- Write in full sentences (not bullet points) unless told otherwise",
        quiz: [
          { question: "How long should you spend reading the passage?", options: ["30 seconds", "About 10 minutes", "The entire exam", "No time at all"], answer: 1 },
          { question: "What should you always do in the exam?", options: ["Skip hard questions", "Attempt every question", "Write in pencil only", "Ignore the passage"], answer: 1 },
          { question: "Where should you spend LESS time?", options: ["High-mark questions", "Low-mark questions", "The language analysis", "The summary"], answer: 1 },
          { question: "How should you support your points?", options: ["With opinions only", "With quotations", "With drawings", "With page numbers only"], answer: 1 },
          { question: "What format should answers generally be in?", options: ["Bullet points", "Full sentences", "Single words", "Diagrams"], answer: 1 },
        ],
      },
      {
        id: "m11", title: "Vocabulary Building for Comprehension", completed: false, quizScore: null, quizMaxScore: 5,
        lessonContent: "A strong vocabulary helps you understand complex texts and write more sophisticated analyses. Focus on learning words commonly found in AQA English passages.\n\nStrategies for building vocabulary:\n- Read widely -- newspapers, novels, non-fiction\n- Keep a vocabulary journal with new words and their meanings\n- Learn word roots, prefixes, and suffixes\n- Practise using new words in your own writing\n- Use context clues to work out unfamiliar words\n\nHigh-frequency analytical vocabulary:\n- Juxtaposition: placing contrasting ideas side by side\n- Ambiguity: having more than one possible meaning\n- Connotation: the associations a word carries beyond its dictionary definition\n- Register: the level of formality in language",
        quiz: [
          { question: "What is a connotation?", options: ["A dictionary definition", "Associations a word carries beyond its definition", "A type of punctuation", "A spelling rule"], answer: 1 },
          { question: "What does 'register' mean in language?", options: ["A class attendance list", "The level of formality", "A type of verb", "A reading technique"], answer: 1 },
          { question: "How can you work out unfamiliar words?", options: ["Skip them", "Use context clues", "Guess randomly", "Ask the examiner"], answer: 1 },
          { question: "What is juxtaposition?", options: ["Repeating words", "Placing contrasting ideas side by side", "Using long sentences", "A type of poem"], answer: 1 },
          { question: "Which strategy helps build vocabulary?", options: ["Reading only textbooks", "Reading widely", "Avoiding new words", "Only watching TV"], answer: 1 },
        ],
      },
      {
        id: "m12", title: "Writer's Purpose and Audience", completed: false, quizScore: null, quizMaxScore: 5,
        lessonContent: "Every text is written for a reason (purpose) and aimed at someone (audience). Identifying these helps you understand and analyse the text more effectively.\n\nCommon purposes:\n- To inform: presents facts and information\n- To persuade: tries to change the reader's mind\n- To entertain: engages and amuses the reader\n- To advise: offers guidance and recommendations\n- To describe: creates vivid pictures in the reader's mind\n\nAudience affects language choices. A text for teenagers uses informal language and contemporary references. A text for professionals uses formal register and technical vocabulary.\n\nAlways consider: WHO is this written for? WHY was it written? HOW does the writer achieve their purpose?",
        quiz: [
          { question: "What is a writer's purpose?", options: ["Their name", "The reason they wrote the text", "The length of the text", "The date of publication"], answer: 1 },
          { question: "A text 'to persuade' aims to...", options: ["Make you laugh", "Change your mind", "Teach grammar", "Tell a story"], answer: 1 },
          { question: "How does audience affect language?", options: ["It doesn't", "It determines formality and references", "It changes the topic", "It affects the page count"], answer: 1 },
          { question: "What register would a text for professionals use?", options: ["Slang", "Formal and technical", "Text speak", "Baby talk"], answer: 1 },
          { question: "Which three questions should you always ask?", options: ["Who, why, how", "What, where, when", "Can, should, will", "Is, was, has"], answer: 0 },
        ],
      },
      {
        id: "m13", title: "Commenting on Structure", completed: false, quizScore: null, quizMaxScore: 5,
        lessonContent: "Structure refers to how a text is organised and how ideas are sequenced. Examiners want to see that you can comment on structural choices.\n\nStructural features to look for:\n- Opening and ending: How does the text begin and conclude?\n- Shifts in focus: Does the writer move from one idea to another?\n- Paragraph length: Short paragraphs create pace; long ones develop ideas\n- Chronological vs non-chronological order\n- Use of flashback or foreshadowing\n- Circular structure: ending mirrors the beginning\n\nWhen commenting on structure, always explain WHY the writer has made these choices. What effect does the structure have on the reader?",
        quiz: [
          { question: "What does 'structure' refer to in a text?", options: ["The building it was written in", "How the text is organised", "The font used", "The number of words"], answer: 1 },
          { question: "What effect do short paragraphs create?", options: ["Boredom", "Pace and urgency", "Confusion", "Formality"], answer: 1 },
          { question: "What is a circular structure?", options: ["Writing in circles", "The ending mirrors the beginning", "Using bullet points", "A type of graph"], answer: 1 },
          { question: "What must you always explain about structural choices?", options: ["The page number", "Why the writer made them", "The word count", "The publication date"], answer: 1 },
          { question: "What is a shift in focus?", options: ["Moving to a new desk", "The writer moving from one idea to another", "Changing pens", "A type of lens"], answer: 1 },
        ],
      },
      {
        id: "m14", title: "Tone and Atmosphere", completed: false, quizScore: null, quizMaxScore: 5,
        lessonContent: "Tone is the writer's attitude towards their subject. Atmosphere is the mood or feeling created for the reader. Both are crucial to analyse in Paper 1.\n\nCommon tones:\n- Formal, informal, conversational\n- Angry, frustrated, passionate\n- Humorous, sarcastic, ironic\n- Sympathetic, compassionate, detached\n- Nostalgic, reflective, melancholic\n\nHow to identify tone:\n- Look at word choices (positive or negative connotations?)\n- Consider punctuation (exclamation marks suggest strong feeling)\n- Notice sentence length (short = urgent; long = reflective)\n- Think about the overall impression\n\nAlways support your identification of tone with evidence from the text.",
        quiz: [
          { question: "What is 'tone' in writing?", options: ["The volume of your voice", "The writer's attitude towards their subject", "The colour of the page", "The font style"], answer: 1 },
          { question: "How can you identify tone?", options: ["By counting pages", "By looking at word choices and connotations", "By checking the date", "By reading the title only"], answer: 1 },
          { question: "What does a sarcastic tone involve?", options: ["Saying the opposite of what you mean", "Being very formal", "Using long words", "Writing in capitals"], answer: 0 },
          { question: "What must you use to support your identification of tone?", options: ["Your opinion only", "Evidence from the text", "A dictionary", "The mark scheme"], answer: 1 },
          { question: "What is the difference between tone and atmosphere?", options: ["They are the same thing", "Tone is the writer's attitude; atmosphere is the mood created", "Tone is longer", "Atmosphere is about weather only"], answer: 1 },
        ],
      },
      {
        id: "m15", title: "Full Paper 1 Mock Exam", completed: false, quizScore: null, quizMaxScore: 5,
        lessonContent: "This is your final module -- a full mock exam experience. You will practise answering all question types under timed conditions.\n\nBefore you begin:\n- Find a quiet space with no distractions\n- Set a timer for 1 hour 45 minutes (reading + writing)\n- Have a pen, highlighter, and the passage ready\n- Read the passage twice before answering\n\nMark scheme reminders:\n- Short answers: Be precise and use evidence\n- Language analysis: Use PEE paragraphs with embedded quotations\n- Summary: Own words, relevant points, continuous prose\n- Directed writing: Correct format, appropriate register, use passage content\n\nGood luck! Remember to manage your time carefully.",
        quiz: [
          { question: "How long is the full Paper 1 exam?", options: ["30 minutes", "1 hour", "1 hour 45 minutes", "3 hours"], answer: 2 },
          { question: "How many times should you read the passage?", options: ["Zero", "Once", "Twice", "Five times"], answer: 2 },
          { question: "What structure should language analysis use?", options: ["Bullet points", "PEE paragraphs", "Mind maps", "Tables"], answer: 1 },
          { question: "What format should summaries be in?", options: ["Bullet points", "Continuous prose", "Diagrams", "Lists"], answer: 1 },
          { question: "What is the most important skill in exam conditions?", options: ["Neat handwriting", "Time management", "Using a ruler", "Coloured pens"], answer: 1 },
        ],
      },
    ],
  },
}

// Generate a generic course for IDs that are not in the detailed map
function getGenericCourse(id: string): CourseData {
  const lookup: Record<string, { title: string; description: string; progress: number; moduleCount: number }> = {
    "aqa-lang-p2": { title: "AQA English Language Paper 2", description: "Writers' viewpoints and perspectives, non-fiction reading and writing.", progress: 45, moduleCount: 12 },
    "aqa-lit-inspector": { title: "AQA Literature -- Inspector Calls", description: "Character analysis, themes, and essay writing for An Inspector Calls.", progress: 80, moduleCount: 10 },
    "aqa-lit-poetry": { title: "AQA Literature -- Poetry", description: "Poetry analysis, comparison essays, and unseen poetry techniques.", progress: 30, moduleCount: 8 },
    "creative-writing": { title: "Creative Writing Skills", description: "Narrative structure, descriptive techniques, and creative voice development.", progress: 100, moduleCount: 6 },
    "exam-technique": { title: "Exam Technique Masterclass", description: "Time management, question decoding, and high-mark answer structures.", progress: 20, moduleCount: 5 },
  }
  const info = lookup[id] || { title: "Course", description: "Course content.", progress: 50, moduleCount: 8 }
  const completedCount = Math.round((info.progress / 100) * info.moduleCount)
  const modules: Module[] = Array.from({ length: info.moduleCount }, (_, i) => {
    const isCompleted = i < completedCount
    // Simulate quiz scores for completed modules
    const quizMax = 5
    let quizScore: number | null = null
    let revisionNeeded = false
    let revisionTip: string | undefined = undefined
    if (isCompleted) {
      quizScore = Math.floor(Math.random() * 3) + 2 // 2 to 4
      if (quizScore !== null && (quizScore / quizMax) * 100 < 60) {
        revisionNeeded = true
        revisionTip = `Review the key concepts from Module ${i + 1} and retake the quiz to improve your understanding.`
      }
    }
    return {
      id: `m${i + 1}`,
      title: `Module ${i + 1}`,
      completed: isCompleted,
      quizScore,
      quizMaxScore: quizMax,
      revisionNeeded,
      revisionTip,
      lessonContent: `This is the lesson content for Module ${i + 1} of ${info.title}. In a full course, this would contain detailed learning material, examples, and practice exercises tailored to this specific topic.\n\nKey learning objectives for this module would be listed here, along with worked examples and explanations of important concepts.\n\nStudents would work through the material at their own pace before attempting the quiz to check their understanding.`,
      quiz: [
        { question: `Sample question 1 for Module ${i + 1}`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 1 },
        { question: `Sample question 2 for Module ${i + 1}`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 2 },
        { question: `Sample question 3 for Module ${i + 1}`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 },
        { question: `Sample question 4 for Module ${i + 1}`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 3 },
        { question: `Sample question 5 for Module ${i + 1}`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 1 },
      ],
    }
  })
  return { title: info.title, description: info.description, progress: info.progress, modules }
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function ProgressBar({ value, className }: { value: number; className?: string }) {
  const color = value === 100 ? "bg-teal-700" : value >= 60 ? "bg-blue-500" : value >= 40 ? "bg-amber-500" : "bg-red-500"
  return (
    <div className={`h-1.5 rounded-full bg-cream-100 ${className || ""}`}>
      <div className={`h-1.5 rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
    </div>
  )
}

function QuizView({ quiz, onClose }: { quiz: { question: string; options: string[]; answer: number }[]; onClose: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const score = submitted ? answers.filter((a, i) => a === quiz[i].answer).length : 0

  function select(qi: number, oi: number) {
    if (submitted) return
    setAnswers((prev) => {
      const next = [...prev]
      next[qi] = oi
      return next
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-ink-900 flex items-center gap-2">
          <FileQuestion className="h-5 w-5 text-teal-700" />
          Module Quiz
        </h3>
        <button onClick={onClose} className="text-ink-500 hover:text-ink-600 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {quiz.map((q, qi) => (
        <div key={qi} className="rounded-lg border border-ink-200 bg-white p-4">
          <p className="text-sm font-medium text-ink-900 mb-3">
            {qi + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              let optStyle = "border-ink-200 bg-white hover:border-ink-200 hover:bg-white"
              if (answers[qi] === oi && !submitted) {
                optStyle = "border-blue-500/30 bg-teal-800/10"
              }
              if (submitted) {
                if (oi === q.answer) {
                  optStyle = "border-teal-800/30 bg-teal-800/10"
                } else if (answers[qi] === oi && oi !== q.answer) {
                  optStyle = "border-red-500/30 bg-red-500/10"
                } else {
                  optStyle = "border-ink-200 bg-white opacity-50"
                }
              }
              return (
                <button
                  key={oi}
                  onClick={() => select(qi, oi)}
                  className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm text-ink-600 transition-all ${optStyle}`}
                >
                  <span className="text-ink-500 mr-2">{String.fromCharCode(65 + oi)}.</span>
                  {opt}
                  {submitted && oi === q.answer && (
                    <CheckCircle2 className="inline h-4 w-4 text-teal-700 ml-2" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={answers.some((a) => a === null)}
          className="w-full rounded-lg bg-teal-800 hover:bg-teal-700 disabled:bg-cream-100 disabled:text-ink-500 px-4 py-3 text-sm font-medium text-white transition-colors"
        >
          {answers.some((a) => a === null) ? "Answer all questions to submit" : "Submit Answers"}
        </button>
      ) : (
        <div className="rounded-lg border border-ink-200 bg-white p-4 text-center">
          <p className="text-2xl font-light text-ink-900 mb-1">
            {score}/{quiz.length}
          </p>
          <p className="text-sm text-ink-500">
            {score === quiz.length ? "Perfect score! Well done." : score >= 3 ? "Good effort! Review any you missed." : "Keep practising -- you will get there."}
          </p>
          <button
            onClick={onClose}
            className="mt-4 text-sm text-teal-700 hover:text-blue-300 transition-colors"
          >
            Back to module
          </button>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = require("react").use(params)
  const course = COURSES[id] || getGenericCourse(id)

  const [activeModuleIdx, setActiveModuleIdx] = useState<number | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)

  const activeModule = activeModuleIdx !== null ? course.modules[activeModuleIdx] : null

  // Module list view
  if (activeModule === null) {
    const completedCount = course.modules.filter((m) => m.completed).length
    const pct = Math.round((completedCount / course.modules.length) * 100)
    const revisionCount = course.modules.filter((m) => m.revisionNeeded).length
    const avgQuizScore = (() => {
      const attempted = course.modules.filter((m) => m.quizScore != null)
      if (attempted.length === 0) return null
      const total = attempted.reduce((sum, m) => sum + ((m.quizScore! / (m.quizMaxScore || 5)) * 100), 0)
      return Math.round(total / attempted.length)
    })()

    return (
      <div className="min-h-screen bg-cream-50 text-ink-900">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Demo banner */}
          <div className="mb-6 rounded-lg border border-teal-800/20 bg-teal-800/5 px-4 py-3">
            <p className="text-sm text-teal-700">
              <span className="font-semibold">Student Demo</span> -- Exploring a
              course as a student
            </p>
          </div>

          {/* Back */}
          <Link
            href="/demo/student/courses"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-600 transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Courses
          </Link>

          {/* Course header */}
          <div className="mb-8">
            <h1 className="text-2xl font-light tracking-tight text-ink-900 mb-2">
              {course.title}
            </h1>
            <p className="text-sm text-ink-500 mb-4">{course.description}</p>
            <div className="flex items-center gap-3 text-xs text-ink-500 mb-2">
              <span>{course.modules.length} modules</span>
              <span>--</span>
              <span>{completedCount} completed</span>
              <span>--</span>
              <span className="text-ink-600">{pct}%</span>
            </div>
            <ProgressBar value={pct} />
          </div>

          {/* Course stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="rounded-xl border border-ink-200 bg-white p-4 text-center">
              <Trophy className="h-5 w-5 text-amber-400 mx-auto mb-2" />
              <p className="text-lg font-semibold text-ink-900">{completedCount}/{course.modules.length}</p>
              <p className="text-[11px] text-ink-500">Lessons Done</p>
            </div>
            <div className="rounded-xl border border-ink-200 bg-white p-4 text-center">
              <Star className="h-5 w-5 text-teal-700 mx-auto mb-2" />
              <p className="text-lg font-semibold text-ink-900">{avgQuizScore !== null ? `${avgQuizScore}%` : "--"}</p>
              <p className="text-[11px] text-ink-500">Avg Quiz Score</p>
            </div>
            <div className="rounded-xl border border-ink-200 bg-white p-4 text-center">
              <CheckCircle2 className={`h-5 w-5 mx-auto mb-2 ${course.modules.filter(m => m.quizScore !== null && m.quizScore !== undefined && m.quizScore === m.quizMaxScore).length > 0 ? "text-teal-700" : "text-ink-500"}`} />
              <p className="text-lg font-semibold text-ink-900">
                {course.modules.filter(m => m.quizScore !== null && m.quizScore !== undefined && m.quizScore === m.quizMaxScore).length}
              </p>
              <p className="text-[11px] text-ink-500">Perfect Scores</p>
            </div>
            <div className="rounded-xl border border-ink-200 bg-white p-4 text-center">
              <AlertTriangle className={`h-5 w-5 mx-auto mb-2 ${revisionCount > 0 ? "text-red-400" : "text-ink-500"}`} />
              <p className="text-lg font-semibold text-ink-900">{revisionCount}</p>
              <p className="text-[11px] text-ink-500">Need Revision</p>
            </div>
          </div>

          {/* Revision needed banner */}
          {revisionCount > 0 && (
            <div className="mb-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-400 mb-1">
                    {revisionCount} {revisionCount === 1 ? "lesson needs" : "lessons need"} revision
                  </p>
                  <p className="text-xs text-ink-500">
                    You scored below 60% on {revisionCount === 1 ? "this lesson's quiz" : "these lesson quizzes"}. Revisit the content and retake the quiz to strengthen your understanding.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Module list */}
          <div className="space-y-2">
            {course.modules.map((mod, idx) => {
              const quizPct = mod.quizScore != null && mod.quizMaxScore
                ? Math.round((mod.quizScore / mod.quizMaxScore) * 100)
                : null

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setActiveModuleIdx(idx)
                    setShowQuiz(false)
                  }}
                  className={`w-full group flex items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-all hover:bg-white ${
                    mod.revisionNeeded
                      ? "border-red-500/15 bg-red-500/[0.03] hover:border-red-500/25"
                      : "border-ink-200 bg-white hover:border-ink-200"
                  }`}
                >
                  {mod.completed ? (
                    mod.revisionNeeded ? (
                      <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-teal-700 flex-shrink-0" />
                    )
                  ) : (
                    <Circle className="h-5 w-5 text-ink-500/40 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-ink-900 truncate">{mod.title}</p>
                      {mod.revisionNeeded && (
                        <span className="inline-flex items-center rounded-full bg-red-500/20 border border-red-500/30 px-1.5 py-0.5 text-[9px] font-medium text-red-400 flex-shrink-0">
                          Revision Needed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-[11px] text-ink-500">Module {idx + 1} of {course.modules.length}</p>
                      {quizPct !== null && (
                        <>
                          <span className="text-[11px] text-ink-500/30">|</span>
                          <span className={`text-[11px] font-medium ${
                            quizPct >= 80 ? "text-teal-700" : quizPct >= 60 ? "text-amber-400" : "text-red-400"
                          }`}>
                            Quiz: {mod.quizScore}/{mod.quizMaxScore} ({quizPct}%)
                          </span>
                          {quizPct === 100 && <Star className="h-3 w-3 text-amber-400" />}
                        </>
                      )}
                      {mod.completed && quizPct === null && (
                        <>
                          <span className="text-[11px] text-ink-500/30">|</span>
                          <span className="text-[11px] text-ink-500">Quiz not taken</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-ink-500/40 group-hover:text-ink-500 transition-colors flex-shrink-0" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Module content view
  const quizPct = activeModule.quizScore != null && activeModule.quizMaxScore
    ? Math.round((activeModule.quizScore / activeModule.quizMaxScore) * 100)
    : null

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-teal-800/20 bg-teal-800/5 px-4 py-3">
          <p className="text-sm text-teal-700">
            <span className="font-semibold">Student Demo</span> -- Viewing
            lesson content
          </p>
        </div>

        {/* Back */}
        <button
          onClick={() => { setActiveModuleIdx(null); setShowQuiz(false) }}
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to module list
        </button>

        {/* Module header */}
        <div className="mb-6">
          <p className="text-xs text-ink-500 mb-1">
            Module {activeModuleIdx! + 1} of {course.modules.length}
          </p>
          <h2 className="text-xl font-light tracking-tight text-ink-900">
            {activeModule.title}
          </h2>

          {/* Previous quiz score display */}
          {quizPct !== null && (
            <div className={`mt-3 inline-flex items-center gap-2 rounded-lg border px-3 py-2 ${
              quizPct >= 80
                ? "border-teal-800/20 bg-teal-800/5"
                : quizPct >= 60
                  ? "border-amber-500/20 bg-amber-500/5"
                  : "border-red-500/20 bg-red-500/5"
            }`}>
              <Trophy className={`h-4 w-4 ${
                quizPct >= 80 ? "text-teal-700" : quizPct >= 60 ? "text-amber-400" : "text-red-400"
              }`} />
              <span className={`text-sm font-medium ${
                quizPct >= 80 ? "text-teal-700" : quizPct >= 60 ? "text-amber-400" : "text-red-400"
              }`}>
                Previous score: {activeModule.quizScore}/{activeModule.quizMaxScore} ({quizPct}%)
              </span>
              {quizPct < 60 && (
                <span className="text-[10px] text-red-400/70 ml-1">-- Retake recommended</span>
              )}
            </div>
          )}

          {/* Revision tip */}
          {activeModule.revisionNeeded && activeModule.revisionTip && (
            <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-amber-400 mb-1">Revision Suggestion</p>
                  <p className="text-xs text-ink-500 leading-relaxed">{activeModule.revisionTip}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {showQuiz ? (
          <QuizView quiz={activeModule.quiz} onClose={() => setShowQuiz(false)} />
        ) : (
          <>
            {/* Lesson content */}
            <div className="rounded-xl border border-ink-200 bg-white p-6 mb-6">
              <div className="flex items-center gap-2 text-xs text-teal-700/70 mb-4">
                <BookOpen className="h-4 w-4" />
                Lesson Content
              </div>
              <div className="prose dark:prose-invert prose-sm max-w-none">
                {activeModule.lessonContent.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-ink-600 leading-relaxed mb-3 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowQuiz(true)}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors ${
                  activeModule.revisionNeeded
                    ? "bg-amber-600 hover:bg-amber-500"
                    : "bg-teal-800 hover:bg-teal-700"
                }`}
              >
                <FileQuestion className="h-4 w-4" />
                {activeModule.revisionNeeded ? "Retake Quiz" : quizPct !== null ? "Retake Quiz" : "Take Quiz"}
              </button>

              {activeModuleIdx! < course.modules.length - 1 && (
                <button
                  onClick={() => { setActiveModuleIdx(activeModuleIdx! + 1); setShowQuiz(false); window.scrollTo(0, 0) }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-ink-200 hover:border-ink-200 hover:bg-white px-4 py-3 text-sm font-medium text-ink-600 transition-colors"
                >
                  Next Module
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}

              {activeModuleIdx! > 0 && (
                <button
                  onClick={() => { setActiveModuleIdx(activeModuleIdx! - 1); setShowQuiz(false); window.scrollTo(0, 0) }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-ink-200 hover:border-ink-200 hover:bg-white px-4 py-3 text-sm font-medium text-ink-600 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous Module
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
