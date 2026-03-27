export interface WalkingTalkingMock {
  id: string;
  title: string;
  board: string;
  paper: string;
  totalTime: number;
  script: WTMSection[];
}

export interface WTMSection {
  questionNumber: string;
  timeAllocation: number;
  teacherScript: string;
  studentAction: string;
  keyReminders: string[];
}

export const walkingTalkingMocks: WalkingTalkingMock[] = [
  {
    id: "aqa-lang-p1",
    title: "AQA GCSE English Language Paper 1",
    board: "AQA",
    paper: "Language Paper 1",
    totalTime: 105,
    script: [
      {
        questionNumber: "Reading: Introduction (0-2 mins)",
        timeAllocation: 2,
        teacherScript: `Right, everyone settle down. You have 105 minutes total for this paper. Paper 1 is split into two main sections: Reading and Writing. Let's start with the Reading section - you have 55 minutes for this. The paper has two texts: Text A is a modern article, and Text B is a historical piece. Both texts are related thematically. 

Before you read, look at the questions. There are four questions worth 4, 8, 8, and 16 marks respectively. The 16-mark question requires you to compare both texts. Read the questions first so you know what to look for as you read. This is your map through the texts.`,
        studentAction: "Read the questions on page 1 first, then begin reading Text A carefully",
        keyReminders: [
          "Read all four questions before touching the texts",
          "Annotate the texts as you read - mark key phrases",
          "Remember: understanding the questions shapes how you read"
        ]
      },
      {
        questionNumber: "Question 1: True/False Statements (2-8 mins)",
        timeAllocation: 6,
        teacherScript: `Question 1 asks you to identify four statements as True or False based on Text A. You have around 6 minutes for this. Read each statement carefully - they're often worded in a tricky way. Sometimes they seem true but a small detail makes them false. 

Work through each one: Statement 1 - does the text explicitly say this? Look for the exact evidence. Don't assume. With statement 2, check the context - the writer might mention something but with a different meaning than the statement suggests. 

Use your annotations from your first read. For statements 3 and 4, the trick is often that they're mostly true but have one false element. Find that element. You need accuracy here - a true statement marked false loses you a mark.`,
        studentAction: "Work through statements 1-4, writing True or False with a brief annotation for each",
        keyReminders: [
          "True and False - four statements total, each worth 1 mark",
          "The trick is often one detail that changes the truth value",
          "Find direct evidence for each answer in the text",
          "Don't rely on memory - point to the words"
        ]
      },
      {
        questionNumber: "Question 2: Summarise Text A (8-18 mins)",
        timeAllocation: 10,
        teacherScript: `Question 2 is worth 8 marks and asks you to summarize Text A. You have about 10 minutes. This is about identifying the KEY information - not every detail. The question probably asks you to select four key points from a choice of options, or summarize in your own words within a word limit.

Here's your process: First, identify the main topic - what is Text A fundamentally about? Then identify the major supporting ideas. Ignore the interesting anecdotes, the colorful descriptions - those are not key information. 

When you write your summary, use your own words - this demonstrates understanding. Short sentences work well. Each point should be distinct and important. You're not copying chunks from the text. If it asks for a certain number of points, give exactly that number. If it asks for a word limit, stay within it - going over is a common error.

The 8 marks break down roughly: 2 marks per key point identified. Make sure each point is clearly explained so the examiner can see you've understood.`,
        studentAction: "Identify and write four key points from Text A, using your own words, within word limits",
        keyReminders: [
          "Summarize - use own words, not copying",
          "Identify key information only - ignore interesting details",
          "Four key points, each clearly explained",
          "Check word limits and stay within them",
          "Link each point to the overall purpose of the text"
        ]
      }
    ]
  },
  {
    id: "aqa-lang-p2",
    title: "AQA GCSE English Language Paper 2",
    board: "AQA",
    paper: "Language Paper 2",
    totalTime: 105,
    script: [
      {
        questionNumber: "Reading: Introduction (0-2 mins)",
        timeAllocation: 2,
        teacherScript: `Welcome to Paper 2. You have 105 minutes again. This paper is slightly different from Paper 1. You'll have two longer texts to read - usually non-fiction sources like memoir, journalism, or essays. The texts are related and often from different time periods.

Paper 2 emphasizes reading critically and evaluating how writers present ideas and perspectives. The four questions are: 1) Identify four statements (4 marks), 2) Summarize ideas in a text (8 marks), 3) Analyze language (8 marks), and 4) Evaluate both texts (16 marks).

This time, when evaluating texts, you're assessing how persuasive or effective the writer is, not just comparing. Read the questions first. That's always your starting point.`,
        studentAction: "Read all four questions before beginning to read the texts",
        keyReminders: [
          "Read questions first - they guide your reading",
          "Paper 2 focuses on evaluation and critical reading",
          "Both texts are non-fiction",
          "Time breakdown: 55 mins reading, 50 mins writing"
        ]
      }
    ]
  },
  {
    id: "aqa-lit-p1",
    title: "AQA GCSE English Literature Paper 1",
    board: "AQA",
    paper: "Literature Paper 1",
    totalTime: 135,
    script: [
      {
        questionNumber: "Introduction and Text Selection (0-3 mins)",
        timeAllocation: 3,
        teacherScript: `Welcome to Literature Paper 1. You have 135 minutes. This paper tests your knowledge of a Shakespeare play and a 19th-century novel. You answer one question on the Shakespeare text (40 marks, 50 minutes) and one question on the novel (40 marks, 50 minutes). You have about 35 minutes left for planning and checking.

Look at the question choices. For Shakespeare, there are typically five questions. For the novel, there are also five questions. You choose one from each section.

Choose wisely. Choose a question that lets you discuss characters, themes, and language that you know well. If you're stronger on one aspect of the text - maybe character analysis - choose a question that emphasizes that.

Read the questions carefully before deciding.`,
        studentAction: "Read all question options for both texts, choose one from each section",
        keyReminders: [
          "50 minutes per main question (Shakespeare + novel)",
          "35 minutes for planning and checking",
          "Choose questions that match your strengths",
          "Understand the question before committing to it"
        ]
      },
      {
        questionNumber: "Shakespeare Question (3-53 mins)",
        timeAllocation: 50,
        teacherScript: `You've chosen your Shakespeare question. This is worth 40 marks. The question focuses on a specific character, theme, or relationship at a particular point in the text, then asks about the broader text.

A typical question: 'How does Shakespeare present Macbeth at this moment [extract], and how does he develop Macbeth across the whole play?'

Plan for 8 minutes: Read the extract. Annotate it - mark key words, techniques, emotional beats. Then jot notes on: 1) How is the character presented in this extract? 2) How does this compare to their presentation earlier and later in the play? 3) What techniques does Shakespeare use (language, structure, imagery)? 4) Why does Shakespeare present the character this way? What's the thematic significance?

Write for 38 minutes: Aim for 400-500 words of analytical writing.

Structure your response:

Paragraph 1: Introduction - identify the character and the question's focus. 'In this extract, Macbeth is presented as [key characteristic], which contrasts with his earlier [previous state]. Throughout the play, Shakespeare develops this [theme] to explore [broader significance].'

Paragraphs 2-4: Analyze the extract in detail. Focus on the specific moment the question highlights. Use PEE: Point out what Shakespeare shows, Evidence from the extract, Explanation of technique and effect. Discuss language (metaphors, imagery), structure (soliloquy, dialogue), and context (the character's situation in the play).

Within these paragraphs, make links to the rest of the play. 'This attitude to power contrasts with Act 1, where Macbeth was reluctant, showing Shakespeare's exploration of ambition's corrupting influence.'

Paragraphs 5-6: Develop your analysis by exploring how this moment fits into Shakespeare's broader presentation of the character or theme across the whole play. What does this extract reveal about Shakespeare's purposes?

Paragraph 7: Conclusion - synthesize. What's the significance of this character or moment to the play's themes?

Key marks breakdown: 12 marks for Knowledge and Understanding (do you understand the character and play?), 12 marks for Analysis (do you analyze language and structure effectively?), 12 marks for Context and Critical Evaluation (do you understand the play's themes and Shakespeare's purposes?), 4 marks for technical accuracy.

Don't just analyze the extract. The question always asks about the broader play. Make explicit links. 'Shakespeare emphasizes Macbeth's ambition here through the image of [quote], which foreshadows his [later action in the play].'`,
        studentAction: "Plan for 8 minutes, analyze extract with close language analysis, write 400-500 words linking to broader play",
        keyReminders: [
          "Analyze the extract in detail first",
          "Use PEE: Point, Evidence, Explanation",
          "Focus on language techniques (metaphor, imagery, etc.)",
          "Make explicit links to the rest of the play",
          "Discuss Shakespeare's purposes and thematic significance",
          "400-500 words of analytical writing",
          "Quote precisely and analyze the effect",
          "Write in present tense about the text"
        ]
      }
    ]
  },
  {
    id: "aqa-lit-p2",
    title: "AQA GCSE English Literature Paper 2",
    board: "AQA",
    paper: "Literature Paper 2",
    totalTime: 135,
    script: [
      {
        questionNumber: "Introduction and Modern Text Selection (0-3 mins)",
        timeAllocation: 3,
        teacherScript: `Welcome to Literature Paper 2. You have 135 minutes. This paper tests your knowledge of a modern prose text (novel or short stories) and a poetry anthology. You answer one question on the modern text (40 marks, 50 minutes) and one question on the poetry (40 marks, 50 minutes).

For the modern text, there are five questions. For poetry, there are typically five cluster-based questions. 

Choose questions that match your knowledge and strengths. For poetry especially, choose a question that focuses on poems or themes you've studied well.

Read all the options carefully before committing.`,
        studentAction: "Read all question options, choose one from modern text and one from poetry",
        keyReminders: [
          "50 minutes per main question",
          "35 minutes for planning and checking",
          "Modern text question includes an extract to analyze",
          "Poetry questions may involve comparing poems or discussing a theme"
        ]
      },
      {
        questionNumber: "Modern Text Question (3-53 mins)",
        timeAllocation: 50,
        teacherScript: `Your modern text question is worth 40 marks. Most questions include an extract and ask how the author presents something at that moment and across the text.

A typical question: 'How does the author present [character or theme] in this extract, and how is this idea developed across the text?'

Plan for 8 minutes: Read the extract carefully. Annotate it. Jot down: 1) What's the author showing in this extract? 2) How is it shown through language and structure? 3) How does this moment connect to the character's or text's development? 4) What themes does it explore?

Write for 38 minutes: Aim for 400-500 words.

Structure similarly to the Shakespeare answer but consider modern text-specific elements like narrative voice, contemporary themes, and authorial voice.`,
        studentAction: "Plan for 8 minutes, analyze extract with narrative technique and language, write 400-500 words with explicit links to broader text",
        keyReminders: [
          "Analyze the extract in detail",
          "Use PEE structure",
          "Focus on author's narrative techniques and language",
          "Link explicitly to broader text and character/theme development",
          "Discuss social context or author's purposes",
          "400-500 words of analytical writing",
          "Quote precisely and explain effects"
        ]
      }
    ]
  },
  {
    id: "edexcel-lang-p1",
    title: "Edexcel GCSE English Language Paper 1",
    board: "Edexcel",
    paper: "Language Paper 1",
    totalTime: 105,
    script: [
      {
        questionNumber: "Introduction and Question Overview (0-3 mins)",
        timeAllocation: 3,
        teacherScript: `Welcome to Edexcel English Language Paper 1. You have 105 minutes. This paper has four questions worth 96 marks total. Unlike AQA, Edexcel's questions have a different structure.

Question 1: Reading for detail (8 marks, 10 minutes) - You'll identify key information or match statements to evidence in a text.

Question 2: Understanding techniques (16 marks, 15 minutes) - You'll identify language techniques and explain their effects in a given text.

Question 3: Comparing two texts (16 marks, 20 minutes) - You'll compare how language creates specific effects in two texts on a related topic.

Question 4: Extended writing (56 marks, 55 minutes) - You'll write a substantial text for a specific purpose and audience.

Edexcel emphasizes recognizing and explaining techniques and creating purposeful writing. Let's start. You have two texts to read - read them both before beginning Question 1.`,
        studentAction: "Read both texts in the paper, note down initial thoughts on what they're about and their tone",
        keyReminders: [
          "Four questions total: 8, 16, 16, 56 marks",
          "First three are reading-based on two provided texts",
          "Question 4 is extended writing",
          "Read both texts before starting questions"
        ]
      },
      {
        questionNumber: "Question 1: Reading for Detail (3-13 mins)",
        timeAllocation: 10,
        teacherScript: `Question 1 is worth 8 marks and tests your ability to find detailed information in the text. You might need to: Identify four key points from a text, match statements to evidence, or identify specific details.

Read the question carefully. It will ask something specific: 'What four things does the text tell you about...?' or 'Which statement is supported by the text?'

Work systematically. If you need to find four details, scan the text and highlight four different pieces of information. These should be distinct from each other - don't give the same point twice. Write them in your own words if possible, or quote directly if the question requires it.

If you need to match statements to evidence, read each statement, then find the sentence or phrase in the text that proves it. Write the relevant quotation or line reference.

This question rewards accuracy. Eight marks means roughly 2 marks per piece of information. Be precise and complete.`,
        studentAction: "Identify and write four key details or match statements to evidence from the text",
        keyReminders: [
          "Four pieces of information, each worth 2 marks",
          "Scan the text systematically",
          "Provide distinct points - don't repeat ideas",
          "Use own words or quote accurately",
          "Line references help if relevant"
        ]
      },
      {
        questionNumber: "Question 2: Understanding Language Techniques (13-28 mins)",
        timeAllocation: 15,
        teacherScript: `Question 2 is worth 16 marks. You'll identify and explain language techniques in a specified section of a text. The question might ask: 'How does the writer use language to create a sense of [emotion/atmosphere]?' Or: 'Explain the effect of the language techniques in this section.'

Select four to five language techniques from the given section. For each one:

1) Identify the technique (metaphor, alliteration, simile, rhetorical question, etc.)
2) Quote it exactly from the text
3) Explain its effect - what does it make the reader feel or understand?
4) Link it to the writer's purpose - why did they choose this?

Format example: 'The writer uses a metaphor when they describe [quote]. This creates an impression of [effect], which emphasizes [writer's message or purpose].'

Edexcel values clear technique identification and explanation. Don't just spot techniques - explain thoroughly. Roughly 3-4 marks per technique analyzed well.

Common techniques: Metaphor, simile, personification, alliteration, assonance, onomatopoeia, hyperbole, understatement, rhetorical questions, lists/catalogues, repetition, short/long sentences for effect, exclamation marks, adverbs for emphasis.

In 15 minutes, aim to analyze four techniques with depth rather than six techniques with less depth.`,
        studentAction: "Identify four language techniques, quote them, explain effects and writer's purposes",
        keyReminders: [
          "Select four to five techniques from the specified section",
          "Identify the technique by name",
          "Quote precisely with quotation marks",
          "Explain the effect on the reader",
          "Link to writer's purpose or message",
          "Use PEE or similar structure",
          "Roughly 3-4 marks per technique"
        ]
      },
      {
        questionNumber: "Question 3: Comparing Language in Two Texts (28-48 mins)",
        timeAllocation: 20,
        teacherScript: `Question 3 is worth 16 marks and asks you to compare how language creates specific effects in two texts. The question structure is: 'Compare how language is used in Text A and Text B to present [specific effect or idea].'

Plan for 2 minutes: What's each text's approach? How does each use language differently to create the effect?

Write for 16 minutes: Aim for 300-350 words.

Structure your comparison:

Paragraph 1: Introduction - identify the effect both texts create and note that they use different approaches. 'Both texts describe [topic], but Text A uses [approach] while Text B employs [different approach].'

Paragraphs 2-3: Compare how each text uses language. Pick two or three aspects of language (word choice, sentence structure, imagery) and compare them. For each aspect, discuss both texts.

Format: 'In Text A, the writer uses [technique with quote], creating [effect]. In contrast, Text B employs [different technique with quote], which creates [different effect]. This difference shows that Text A emphasizes [aspect] while Text B prioritizes [different aspect].'

Paragraph 4: Conclusion - synthesis of the comparison. Which approach is more effective? Why?

Mark breakdown: Roughly 4 marks for identifying relevant techniques in each text, 4 marks for explaining their effects, 4 marks for making explicit comparisons, 4 marks for technical accuracy.

Use explicit comparative language: whereas, similarly, in contrast, unlike, both, differently. This makes your comparison clear to the examiner.`,
        studentAction: "Compare how both texts use language to create a specific effect, with explicit comparisons and analysis of techniques",
        keyReminders: [
          "Identify techniques in both texts",
          "Explain effects in both texts",
          "Make explicit comparisons between approaches",
          "Use comparative language: whereas, similarly, unlike, etc.",
          "300-350 words",
          "Quote from both texts",
          "Explain why differences matter"
        ]
      },
      {
        questionNumber: "Question 4: Extended Writing (52-107 mins)",
        timeAllocation: 55,
        teacherScript: `Question 4 is worth 56 marks - 24 for content and organization, 32 for language, style, and accuracy.

Plan for 5 minutes: What are your main ideas? How will you organize them? What tone and register suit your audience?

Write for 45 minutes: Aim for 400-500 words.

Content and organization (24 marks): Is your writing purposeful? Do you address the specific task? Is it organized logically? Does it engage your audience?

If writing a persuasive article, do you present compelling arguments with evidence? Are they organized logically - strongest argument first, or building to a climax? Does your tone match the publication and audience?

If writing an informative letter, do you explain clearly? Is information organized in a sensible order? Are you polite and clear?

Language, style, and accuracy (32 marks): This is the largest portion. Do you use language effectively? Is your vocabulary varied and precise? Do you use different sentence structures - short punchy ones for impact, longer ones for explanation? Is your spelling, punctuation, and grammar accurate? Does your style match the form and audience?

Structure guidance:

Opening (engaging and purposeful): Hook your reader. 'Dear Sir/Madam, I am writing to persuade you that...' Or: 'Have you ever wondered why reading matters? In this article, I'll explain three crucial reasons...'

Middle (developed ideas): Present your main points. Each paragraph should focus on one idea. Use evidence, examples, or details. If persuading, use rhetorical devices - rhetorical questions, lists, emotive language. If informing, be clear and use specific details.

Closing (purposeful): Conclude by reinforcing your main point and calling to action if appropriate. 'I strongly urge you to consider this proposal.' Or: 'Reading transforms lives - start today.'

Technical accuracy: Spell correctly. Punctuate consistently. Use standard grammar. For formal writing (letters, some articles), maintain formal register. For engaging writing (some articles, speeches), you can be more conversational.

In 45 minutes, prioritize quality writing that clearly addresses the task, uses varied language, and maintains technical accuracy.`,
        studentAction: "Plan for 5 minutes. Write 400-500 words addressing purpose, audience, and form. Check for 5 minutes.",
        keyReminders: [
          "Purpose, audience, and form shape everything",
          "Opening: engaging and purposeful",
          "Middle: developed ideas with evidence/examples",
          "Closing: reinforce main point, call to action if relevant",
          "Use varied sentence structures",
          "Use vocabulary suited to audience and form",
          "Maintain consistent tone and register",
          "Spell, punctuate, and use grammar accurately",
          "400-500 words",
          "Check for clarity and accuracy before finishing"
        ]
      }
    ]
  },
  {
    id: "edexcel-lang-p2",
    title: "Edexcel GCSE English Language Paper 2",
    board: "Edexcel",
    paper: "Language Paper 2",
    totalTime: 105,
    script: [
      {
        questionNumber: "Introduction and Text Review (0-3 mins)",
        timeAllocation: 3,
        teacherScript: `Welcome to Edexcel English Language Paper 2. You have 105 minutes. This paper mirrors Paper 1's structure but with different texts.

Four questions: Question 1 (Reading for detail, 8 marks, 10 minutes), Question 2 (Understanding language techniques, 16 marks, 15 minutes), Question 3 (Comparing language, 16 marks, 20 minutes), Question 4 (Extended writing, 56 marks, 55 minutes).

Paper 2 often features more contemporary or diverse texts - perhaps journalism, opinion pieces, or digital communication. The same skills apply: finding details, analyzing language, comparing approaches, and writing purposefully.

Read both texts before starting the questions.`,
        studentAction: "Read both texts, note their topics, tones, and purposes",
        keyReminders: [
          "Same structure as Paper 1",
          "Reading questions on two provided texts",
          "Extended writing task",
          "Read questions carefully - they define what you're looking for"
        ]
      },
      {
        questionNumber: "Question 4: Extended Writing (52-107 mins)",
        timeAllocation: 55,
        teacherScript: `Question 4 is worth 56 marks - 24 for content/organization, 32 for language/style/accuracy.

Plan for 5 minutes: What are your main ideas? How will you organize them? What tone and register suit your audience?

Write for 45 minutes: Aim for 400-500 words.

Content and organization (24 marks): Your writing must be purposeful and well-organized. If persuading, present compelling arguments. If informing, explain clearly and logically. If describing, create vivid imagery. Is your writing appropriate for your audience?

Structure that works for most purposes:

Opening (2-3 sentences): Hook your reader and establish your purpose. 'Did you know that plastic waste in oceans is killing marine life? This article explores why we must act now.' Or: 'Dear [recipient], I am writing to propose a solution to [problem].'

Body (3-4 paragraphs): Develop your main ideas. Each paragraph one idea. Use evidence, examples, or details. If persuading, use rhetorical devices. If informing, be clear and specific.

Closing (2-3 sentences): Conclude purposefully. Reinforce your main point. If appropriate, call to action.

Language, style, and accuracy (32 marks): This is 57% of the marks. Use varied, precise vocabulary. Use different sentence structures - short sentences create emphasis; longer sentences explain complex ideas. Use tone and style appropriate to your audience.

Register: If writing formally (letter, formal article), use standard English, no contractions, polite tone. If writing informally (to teenagers, conversational article), you can use contractions and be more casual.

Technical accuracy: Spelling, punctuation, grammar must be accurate. Proofread carefully.`,
        studentAction: "Plan. Write 400-500 words with clear structure, varied language, appropriate tone. Proofread.",
        keyReminders: [
          "Purpose, audience, form shape everything",
          "Clear opening that establishes purpose",
          "Body paragraphs: one idea each, with evidence",
          "Closing: reinforce main point",
          "Varied sentence structures",
          "Precise, varied vocabulary",
          "Appropriate register and tone for audience",
          "Accurate spelling, punctuation, grammar",
          "400-500 words",
          "Proofread for clarity and accuracy"
        ]
      }
    ]
  },
  {
    id: "ocr-lang",
    title: "OCR GCSE English Language",
    board: "OCR",
    paper: "Language",
    totalTime: 120,
    script: [
      {
        questionNumber: "Paper Structure Overview (0-2 mins)",
        timeAllocation: 2,
        teacherScript: `Welcome to OCR GCSE English Language. You have 120 minutes for this single paper. OCR's structure is unique: you have one extended text and four questions worth 100 marks total.

Question 1: Identify key information (10 marks, 12 minutes) - You'll extract and write about specific information from the text.

Question 2: Explain writer's methods (15 marks, 18 minutes) - You'll analyze how the writer uses language for specific effects.

Question 3: Analyze writer's perspective (25 marks, 35 minutes) - You'll examine how the writer presents perspective or argument across the text.

Question 4: Your own writing (50 marks, 50 minutes) - You'll write for a specific purpose and audience.

OCR emphasizes understanding perspective and voice, as well as creating purposeful writing. Read the text and all questions before beginning.`,
        studentAction: "Read the full text. Read all four questions. Understand what each asks.",
        keyReminders: [
          "One extended text for all reading questions",
          "Four questions: 10, 15, 25, and 50 marks",
          "Question 3 is the longest reading question",
          "Question 4 is substantial extended writing",
          "Read everything before starting"
        ]
      },
      {
        questionNumber: "Question 3: Analyze Writer's Perspective (32-67 mins)",
        timeAllocation: 35,
        teacherScript: `Question 3 is worth 25 marks and is the longest reading question. It asks you to analyze how the writer presents perspective, argument, or voice across the entire text.

A typical question: 'How does the writer present their perspective on [topic]?' Or: 'Analyze how the writer builds their argument throughout the text.'

This requires you to understand the writer's overall position and trace how it develops across the text.

Plan for 5 minutes: What's the writer's main perspective or argument? How do they establish it? How do they develop or support it? What techniques do they use throughout?

Write for 28 minutes: Aim for 500-600 words.

Structure:

Paragraph 1: Introduction - identify the writer's perspective/argument clearly. 'The writer's perspective is that [main point]. Throughout the text, they develop this argument by [main methods].'

Paragraphs 2-4: Analyze how the writer develops perspective across the text. You might organize by: how the opening establishes tone/perspective, how the middle develops/supports it, how the conclusion reinforces it. Or organize thematically - different aspects of the perspective developed in different sections.

Within paragraphs, use PEE: Point out what the writer conveys, Evidence from the text, Explanation of how language/structure creates this.

Discuss: How does the writer's word choice reveal perspective? How does sentence structure reflect their voice? What tone does the writer adopt? How do structural choices (paragraphing, ordering of ideas) support the perspective?

Link techniques to broader purposes. 'This metaphor reveals that the writer views [topic] as [perspective].'

Paragraph 5: Conclusion - synthesize. What's the overall effect of how the writer presents perspective? How effectively does the writer convey their position to the reader?

Mark breakdown: Roughly 8 marks for identifying perspective and supporting evidence, 8 marks for analyzing language/structure and their effects, 9 marks for critical evaluation of how effectively the perspective is conveyed.

OCR emphasizes understanding the writer's voice and perspective. This isn't just about techniques - it's about understanding how those techniques reveal the writer's viewpoint and persuade the reader.`,
        studentAction: "Analyze how the writer presents perspective across the entire text, with detailed language and structural analysis",
        keyReminders: [
          "Identify the writer's main perspective/argument",
          "Trace how it develops across the text",
          "Analyze language: word choice, tone, imagery",
          "Analyze structure: ordering of ideas, paragraphing, sentence length",
          "Explain how techniques reveal perspective",
          "Evaluate how effectively the perspective is conveyed",
          "500-600 words",
          "Use PEE structure",
          "Make links between techniques and perspective"
        ]
      },
      {
        questionNumber: "Question 4: Extended Writing (70-120 mins)",
        timeAllocation: 50,
        teacherScript: `Question 4 is worth 50 marks - 25 for content/organization, 25 for language/style/accuracy. This is a major question.

Plan for 5 minutes: What are your main ideas? How will you organize them? What voice and tone suit your purpose and audience? Jot down: opening idea, three main points, closing idea.

Write for 42 minutes: Aim for 500-700 words. This is longer than typical GCSE writing, but OCR allows extended responses.

Content and organization (25 marks): Your writing must be purposeful, well-organized, and engaging. If persuading, do you present compelling arguments with evidence? If informing, do you explain clearly? If describing, do you create vivid imagery? Is your writing appropriate for your audience?

Language, style, and accuracy (25 marks): This is equal to content, so language matters enormously. Do you use varied, precise vocabulary? Do you use different sentence structures effectively? Is your tone appropriate? Does your style match your purpose and audience?

OCR emphasizes voice - your individual style and personality coming through in your writing. You're not just writing correctly; you're writing with personality suited to your purpose and audience.

Structure:

Opening (3-5 sentences): Engage your reader and establish your voice and purpose. 'Imagine a world without plastic. Sound impossible? In this article, I'll show you three simple steps we can all take.' The voice here is conversational and engaging. Different voices for different purposes: formal and authoritative for persuading about serious issues, warm and personal for engaging stories, energetic and enthusiastic for promoting something.

Body (4-6 paragraphs): Develop your main ideas. Each paragraph should focus on one idea and develop it thoroughly. Use evidence, examples, or details. If persuading, use rhetorical devices. If informing, be clear and specific. If describing, use sensory details.

Closing (3-5 sentences): Conclude with impact. Reinforce your main point. If appropriate, call to action or reflection.

Language and voice:

Varied sentence structures: Short sentences for emphasis. 'Technology is everywhere.' Longer sentences for explanation: 'Although many people believe that social media is purely negative, the reality is more nuanced because...'

Vocabulary: Precise and varied. Use specific nouns rather than vague ones. Use active verbs. Use word choice intentionally to convey tone.

Tone: Match your tone to your purpose and audience. Persuading teenagers about environmental issues? Be energetic and relatable, not preachy. Informing professionals? Be authoritative and clear. Describing a personal experience? Be reflective or emotional.

Register: Formal or informal depending on context. Letters and formal articles use standard English. Some pieces allow contractions and conversational style.

Technical accuracy: Spelling, punctuation, and grammar must be accurate. This supports your voice rather than detracting from it.

In 42 minutes, aim to write purposefully and engagingly, using a distinctive voice suited to your purpose and audience, with varied language and accurate technical writing.`,
        studentAction: "Plan for 5 minutes. Write 500-700 words with clear purpose, engaging voice, and varied language. Proofread.",
        keyReminders: [
          "Purpose, audience, form shape everything",
          "Establish distinctive voice from the opening",
          "Opening: engage reader, establish voice",
          "Body: develop ideas with evidence/examples",
          "Closing: impact and purpose reinforcement",
          "Varied sentence structures",
          "Precise, varied vocabulary",
          "Tone and register match audience",
          "Accurate spelling, punctuation, grammar",
          "500-700 words",
          "Voice is central - personality comes through",
          "Proofread for clarity, accuracy, and voice"
        ]
      }
    ]
  },
  {
    id: "wjec-lang",
    title: "WJEC GCSE English Language",
    board: "WJEC",
    paper: "Language",
    totalTime: 120,
    script: [
      {
        questionNumber: "Paper Overview (0-2 mins)",
        timeAllocation: 2,
        teacherScript: `Welcome to WJEC GCSE English Language. You have 120 minutes for one paper with two sections.

Section A (Reading and Transactional Writing): 60 marks, 60 minutes. You'll read one or two texts and answer questions about them, then write a transactional text (letter, email, etc.).

Section B (Extended Writing): 40 marks, 60 minutes. You'll write a longer creative or persuasive piece.

WJEC emphasizes clear communication, understanding purpose and audience, and writing with confidence. Let's start. Read any provided texts before beginning questions.`,
        studentAction: "Read the provided text(s) and all questions carefully",
        keyReminders: [
          "Two sections: Reading/Transactional (60 marks) and Extended Writing (40 marks)",
          "60 minutes each section",
          "WJEC values clear communication and purposeful writing",
          "Read everything before starting"
        ]
      },
      {
        questionNumber: "Section B: Extended Writing (60-110 mins)",
        timeAllocation: 50,
        teacherScript: `Section B is 40 marks for extended creative or persuasive writing. You have 50 minutes.

The prompt will ask you to write creatively (a narrative or descriptive piece) or persuasively (an article or speech arguing a point). Read the prompt carefully. It may provide a scenario or simply ask you to write on a given topic.

Plan for 5 minutes: What will you write about? What's your main idea? How will you structure it? Jot down key points or story moments.

Write for 42 minutes: Aim for 400-500 words.

Check for 3 minutes: Is it engaging? Are there obvious errors?

For creative writing: Use specific, sensory language. Develop characters or settings through details. Show emotion through action and dialogue, not just telling. Use varied sentence structures - short sentences for tension or emphasis, longer ones for description.

For persuasive writing: Present arguments with evidence. Use rhetorical devices (rhetorical questions, lists, emotive language) to engage your reader. Structure logically - strongest argument first, or building to a climax. Use tone appropriate to your purpose and audience.

Structure guidance:

Opening: Hook your reader. For narrative, start with action or intrigue. For persuasion, ask a compelling question or make a surprising claim.

Middle: Develop your ideas or story. For narrative, describe scenes and moments. For persuasion, present arguments with supporting evidence.

Closing: Conclude with impact. For narrative, resolve the story or reflect. For persuasion, reinforce your main argument and call to action if appropriate.

Language matters: Use varied vocabulary. Use precise verbs and nouns. Avoid repetition unless intentional for effect. Use tone suited to your purpose.

Technical accuracy: Spelling, punctuation, and grammar. WJEC doesn't penalize minor slips severely, but accuracy is still important for clarity.

In 42 minutes, aim for writing that engages your reader, uses varied language, and clearly addresses the prompt.`,
        studentAction: "Plan for 5 minutes. Write 400-500 words engaging reader. Check for 3 minutes.",
        keyReminders: [
          "Plan: main idea, structure, key points",
          "Engaging opening that matches purpose",
          "Developed middle with evidence or narrative detail",
          "Purposeful closing",
          "For creative: sensory language, show emotion",
          "For persuasive: arguments with evidence, rhetorical devices",
          "Varied sentence structures",
          "Precise vocabulary",
          "Accurate spelling, punctuation, grammar",
          "400-500 words"
        ]
      }
    ]
  }
];
