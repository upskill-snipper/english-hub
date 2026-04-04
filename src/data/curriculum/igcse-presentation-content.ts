export interface SlideContent {
  id: string;
  slideNumber: number;
  title: string;
  bulletPoints: string[];
  teacherNotes: string;
  activity?: string;
}

export interface LessonPresentation {
  id: string;
  lessonTitle: string;
  yearGroup: string;
  termUnit: string;
  totalSlides: number;
  slides: SlideContent[];
}

export const igcsePresentations: LessonPresentation[] = [
  // ============================================================
  // Y10 -- Presentation 1
  // ============================================================
  {
    id: "y10-lang-p1-overview",
    lessonTitle: "IGCSE Language Paper 1 -- Overview and Q1/Q2",
    yearGroup: "Y10",
    termUnit: "Language -- Paper 1",
    totalSlides: 8,
    slides: [
      {
        id: "y10-lang-p1-overview-s1",
        slideNumber: 1,
        title: "What is Language Paper 1?",
        bulletPoints: [
          "Paper 1 tests reading and directed writing skills",
          "You will read one or two non-fiction or literary non-fiction extracts",
          "Total time: 2 hours (including 15 minutes reading time)",
          "Total marks: 50 -- reading questions plus directed writing task",
          "Questions assess: retrieval, inference, language analysis, and evaluation",
        ],
        teacherNotes:
          "Distribute the Edexcel specification summary sheet. Ask students what they already know about Paper 1 -- use a quick class discussion to surface prior knowledge and address misconceptions from GCSE prep.",
        activity: "Students annotate a blank Paper 1 structure template, filling in what they think each question asks before the reveal.",
      },
      {
        id: "y10-lang-p1-overview-s2",
        slideNumber: 2,
        title: "Paper 1 -- Question Breakdown",
        bulletPoints: [
          "Q1 (8 marks): Retrieve and list -- read and select relevant information",
          "Q2 (8 marks): Infer and comment on language -- what is implied and how",
          "Q3 (8 marks): Analyse structure and perspective",
          "Q4 (16 marks): Evaluate and compare -- writer's methods across texts",
          "Directed Writing (20 marks): Transform or respond to source material",
        ],
        teacherNotes:
          "Emphasise the mark weighting: students often over-invest in Q1 which carries relatively few marks. Use the question breakdown to build a simple time-management plan (approx. 15 min reading, then 10/10/12/20/23 min per question).",
      },
      {
        id: "y10-lang-p1-overview-s3",
        slideNumber: 3,
        title: "Q1 -- Retrieval Skills",
        bulletPoints: [
          "Q1 asks you to select and list information directly from the text",
          "No inference required -- the answers are on the surface of the text",
          "Use bullet points; do not copy long chunks of text",
          "Aim for precise, concise points lifted from the passage",
          "Check the line range given and stay within it",
        ],
        teacherNotes:
          "Model a Q1 response using an OHT/projected extract. Demonstrate how students should scan for key words linked to the question focus, then paraphrase concisely rather than lifting whole sentences.",
        activity: "Timed Q1 practice: students answer a sample Q1 in 8 minutes, then peer-mark against a mark scheme.",
      },
      {
        id: "y10-lang-p1-overview-s4",
        slideNumber: 4,
        title: "Q1 -- Common Mistakes to Avoid",
        bulletPoints: [
          "Copying out entire sentences rather than selecting key details",
          "Going outside the stated line range",
          "Making inferences when only retrieval is needed",
          "Repeating the same point in different words",
          "Not reaching the required number of points",
        ],
        teacherNotes:
          "Show two sample Q1 answers side by side -- one that copies chunks and one that lists concise points. Ask students to identify which scores higher and why.",
      },
      {
        id: "y10-lang-p1-overview-s5",
        slideNumber: 5,
        title: "Q2 -- Inference and Language Analysis",
        bulletPoints: [
          "Q2 asks you to infer meaning AND comment on how language creates that meaning",
          "Inference = reading between the lines, not just what is stated",
          "Identify specific words or phrases, then explain the effect",
          "Use the P-E-E structure: Point -- Evidence -- Explanation",
          "Link your comments back to the question focus",
        ],
        teacherNotes:
          "Explain that Q2 bridges retrieval and full language analysis. Use a colour-coded model answer to show Point (blue), Evidence (green), and Explanation (red). Stress that explanation is where most marks are won or lost.",
      },
      {
        id: "y10-lang-p1-overview-s6",
        slideNumber: 6,
        title: "Q2 -- Analysing Language Effectively",
        bulletPoints: [
          "Comment on: word choice (connotations), imagery (simile, metaphor), tone, sentence structure",
          "Avoid identifying techniques without explaining their effect",
          "Ask: what does this word/phrase make the reader feel or understand?",
          "Zoom in: analyse individual words, not whole paragraphs",
          "Use hedged language: 'suggests', 'implies', 'conveys', 'creates an impression of'",
        ],
        teacherNotes:
          "Distribute a glossary of language techniques. Practise 'zoom in' analysis with short extracts: students identify one word and write three sentences explaining its connotations and effect.",
        activity: "Gallery walk: students annotate projected extracts on mini whiteboards, identifying techniques and effects.",
      },
      {
        id: "y10-lang-p1-overview-s7",
        slideNumber: 7,
        title: "Model Q2 Response -- Annotated",
        bulletPoints: [
          "Read the model answer together and identify each P-E-E unit",
          "Notice how the student embeds quotations rather than dropping them in",
          "Count the number of distinct language points made",
          "Identify where the student links back to the question",
          "Consider: what would push this from a Level 2 to a Level 3 response?",
        ],
        teacherNotes:
          "Project the model answer and annotate it live with student input. Use the mark scheme levels to discuss what 'perceptive' vs 'straightforward' comments look like. Students add improvements to the model in a different colour.",
      },
      {
        id: "y10-lang-p1-overview-s8",
        slideNumber: 8,
        title: "Lesson Summary and Next Steps",
        bulletPoints: [
          "Paper 1 tests retrieval (Q1), inference and language (Q2), structure (Q3), evaluation (Q4), and writing (DW)",
          "Q1: concise, precise listed points within the line range",
          "Q2: inference + language analysis using P-E-E",
          "Avoid copying chunks; zoom in on specific language choices",
          "Next lesson: Q3/Q4 and the Directed Writing task",
        ],
        teacherNotes:
          "Exit ticket: students write one sentence summarising what Q1 tests and one sentence summarising what Q2 tests. Check for understanding before dismissing.",
        activity: "Self-assessment: students traffic-light their confidence for Q1 and Q2. Collect cards to inform groupings for next lesson.",
      },
    ],
  },

  // ============================================================
  // Y10 -- Presentation 2
  // ============================================================
  {
    id: "y10-lang-p1-q3q4-dw",
    lessonTitle: "Language Paper 1 -- Q3/Q4 and Directed Writing",
    yearGroup: "Y10",
    termUnit: "Language -- Paper 1",
    totalSlides: 8,
    slides: [
      {
        id: "y10-lang-p1-q3q4-dw-s1",
        slideNumber: 1,
        title: "Recap -- Paper 1 Q1 and Q2",
        bulletPoints: [
          "Q1: retrieval -- list precise points within the stated line range",
          "Q2: inference and language -- P-E-E, zoom in on specific words",
          "Both questions require close reading of the extract",
          "Today: Q3 (structure and perspective), Q4 (evaluation/comparison), and Directed Writing",
        ],
        teacherNotes:
          "Start with a two-minute paired recap: students tell their partner one key rule for Q1 and one for Q2. Address any misconceptions before moving on.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s2",
        slideNumber: 2,
        title: "Q3 -- Structure and Perspective",
        bulletPoints: [
          "Q3 asks you to analyse how the writer has structured the text and/or presented a viewpoint",
          "Structure: consider openings and endings, sequence of ideas, shifts in tone or focus",
          "Perspective: whose viewpoint is presented and how does it develop?",
          "Use structural vocabulary: 'opens with', 'shifts to', 'concludes by', 'contrasts with'",
          "Link structural choices to the effect on the reader",
        ],
        teacherNotes:
          "Provide a list of structural features and terms on a handout. Model analysis of a whole-text structure by mapping the extract on a grid: what is in each paragraph, and how does it connect to the next?",
        activity: "Students map the structure of a provided extract using a paragraph-by-paragraph grid, then write two analytical sentences.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s3",
        slideNumber: 3,
        title: "Q4 -- Evaluation and Comparison",
        bulletPoints: [
          "Q4 is the highest-tariff reading question (16 marks)",
          "You must evaluate the writer's methods and their effectiveness",
          "Where two texts are provided, you must compare their methods",
          "Use evaluative language: 'effectively conveys', 'powerfully suggests', 'less convincingly...'",
          "Balance textual evidence with your own critical judgement",
        ],
        teacherNotes:
          "Stress that 'evaluate' means making a judgement, not just identifying techniques. Students often describe rather than evaluate -- show the difference with two sample sentences on the board.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s4",
        slideNumber: 4,
        title: "Q4 -- Comparison Skills",
        bulletPoints: [
          "Identify similarities and differences in how writers present ideas",
          "Use comparative connectives: 'while', 'whereas', 'similarly', 'in contrast to', 'both writers...'",
          "Do not write about Text A then Text B separately -- integrate comparisons",
          "Focus on writer's methods, not just content",
          "Aim for at least three developed comparative points",
        ],
        teacherNotes:
          "Model an integrated comparison paragraph. Show the difference between a 'then-then' paragraph (describes A then B separately) and a truly comparative paragraph. Students rewrite a 'then-then' example into an integrated comparison.",
        activity: "Students highlight comparative connectives in a model response and assess whether the comparisons are integrated or sequential.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s5",
        slideNumber: 5,
        title: "Directed Writing -- Task Overview",
        bulletPoints: [
          "The Directed Writing task is worth 20 marks (16 for content, 4 for accuracy)",
          "You are given a specific audience, purpose, and form to write in",
          "Your response must use ideas and information from the source text(s)",
          "Adapt the material -- do not just copy from the source",
          "Common forms: letter, speech, article, blog, report, interview",
        ],
        teacherNotes:
          "Clarify the difference between 'using ideas from' and 'copying from'. Show a mark scheme annotation: students only earn marks for ideas transformed and adapted for the new form and audience.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s6",
        slideNumber: 6,
        title: "Directed Writing -- Form, Audience, Purpose",
        bulletPoints: [
          "Form: use appropriate structural features (e.g., Dear... for a letter; headline for an article)",
          "Audience: adjust register -- formal for a governor, informal for a school magazine",
          "Purpose: persuade, inform, advise, argue, or entertain",
          "Tone should match purpose: authoritative, empathetic, humorous, urgent",
          "Opening and closing should be tailored to the form",
        ],
        teacherNotes:
          "Give students a card-sort: match form features to the appropriate form. For example, 'Dear Sir/Madam' to formal letter, 'catchy headline' to newspaper article, 'numbered recommendations' to report.",
        activity: "Students draft the opening paragraph of a Directed Writing response from a provided task, then compare with a partner.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s7",
        slideNumber: 7,
        title: "Directed Writing -- Accuracy and Expression",
        bulletPoints: [
          "4 marks are awarded for accuracy: spelling, punctuation, grammar, and sentence variety",
          "Vary sentence lengths: short sentences for impact, complex sentences for detail",
          "Use a range of punctuation deliberately: colons, semicolons, dashes for effect",
          "Proofread: leave 3--4 minutes at the end to check for errors",
          "Ambitious vocabulary choices are rewarded -- avoid repetition",
        ],
        teacherNotes:
          "Remind students that accuracy marks are essentially free marks if they have good habits. Model a 'proofreading scan' technique: read once for sense, once for punctuation, once for spelling.",
      },
      {
        id: "y10-lang-p1-q3q4-dw-s8",
        slideNumber: 8,
        title: "Paper 1 Full Overview -- Key Takeaways",
        bulletPoints: [
          "Q1 (8): retrieve concise points within the line range",
          "Q2 (8): infer and analyse language using P-E-E",
          "Q3 (8): comment on structure and perspective with structural vocabulary",
          "Q4 (16): evaluate and compare methods with integrated, critical comments",
          "Directed Writing (20): adapt source material for a specific form, audience, and purpose",
        ],
        teacherNotes:
          "Final 10 minutes: students complete a timed planning exercise for a Directed Writing task. Share plans under the visualiser. Homework: complete a full Q4 response using today's model.",
        activity: "Timed planning: 5 minutes to plan a Directed Writing response, annotating the source text as preparation.",
      },
    ],
  },

  // ============================================================
  // Y10 -- Presentation 3
  // ============================================================
  {
    id: "y10-poetry-close-reading",
    lessonTitle: "Poetry Anthology -- Close Reading Technique",
    yearGroup: "Y10",
    termUnit: "Literature -- Poetry Anthology",
    totalSlides: 8,
    slides: [
      {
        id: "y10-poetry-close-reading-s1",
        slideNumber: 1,
        title: "Why Close Reading Matters in Poetry",
        bulletPoints: [
          "Poetry compresses meaning into a small number of words",
          "Every word, punctuation mark, and structural choice is a deliberate decision",
          "Close reading means analysing the effect of specific details, not summarising content",
          "IGCSE poetry questions reward precise analysis over broad overview",
          "Today: a step-by-step close reading method for the anthology poems",
        ],
        teacherNotes:
          "Start by asking: what is the difference between describing a poem and analysing it? Take two or three student responses. Write 'describe' and 'analyse' on the board and add student suggestions to each column.",
      },
      {
        id: "y10-poetry-close-reading-s2",
        slideNumber: 2,
        title: "Step 1 -- Reading for Subject and Tone",
        bulletPoints: [
          "Read the poem through once for overall subject: what is it about?",
          "Read again for tone: what is the speaker's attitude or emotional register?",
          "Tone vocabulary: melancholic, defiant, contemplative, nostalgic, ironic, celebratory",
          "Note any shifts in tone -- these are often the most significant moments",
          "Write a one-sentence overview before beginning detailed analysis",
        ],
        teacherNotes:
          "Project a poem from the anthology. Students read silently then share subject and tone in a Think-Pair-Share. Collect a range of tone words on the board and discuss nuance -- for example, 'sad' vs 'melancholic' vs 'despairing'.",
        activity: "Students write a one-sentence 'overview statement' for the projected poem: subject + tone, then compare with a partner.",
      },
      {
        id: "y10-poetry-close-reading-s3",
        slideNumber: 3,
        title: "Step 2 -- Language Analysis (Zoom In)",
        bulletPoints: [
          "Select a specific word or phrase -- not a whole line",
          "Identify the technique if one is present (e.g., metaphor, sibilance, enjambment)",
          "Explore the connotations of the word: what does it suggest beyond its literal meaning?",
          "Explain the effect on the reader: what feeling or idea does it create?",
          "Ask: why might the poet have chosen this word rather than a synonym?",
        ],
        teacherNotes:
          "Demonstrate the difference between 'the poet uses a metaphor' (technique spotting) and a full analytical comment that explores connotation and reader effect. Use the 'murder the metaphor' activity: students explain a metaphor as if to someone who has never read it.",
      },
      {
        id: "y10-poetry-close-reading-s4",
        slideNumber: 4,
        title: "Step 3 -- Structure and Form",
        bulletPoints: [
          "Consider: sonnet, free verse, ballad, ode -- and what the form suggests about meaning",
          "Look at stanza length and regularity: does regularity suggest control or constraint?",
          "Enjambment vs end-stopped lines: how does the poem move?",
          "Caesura: a pause mid-line -- what effect does it create?",
          "Volta: a turn or shift in argument or tone -- where does it occur and why?",
        ],
        teacherNotes:
          "Project the same poem with structural features labelled. Ask students which structural feature they find most significant and why. Encourage debate -- there is rarely one correct answer, but the justification matters.",
        activity: "Students annotate a poem for structural features in one colour and language features in another, then identify the single most significant feature.",
      },
      {
        id: "y10-poetry-close-reading-s5",
        slideNumber: 5,
        title: "Step 4 -- Context and AO3",
        bulletPoints: [
          "AO3: link the poem to its historical, social, or biographical context",
          "Context should support your reading, not replace it",
          "Avoid 'context dumping' -- only include context that is relevant to your argument",
          "Useful context areas: period of writing, the poet's background, literary/cultural movements",
          "Phrase context as: 'Written in [period], the poem reflects...' or 'Given that the poet..., it is significant that...'",
        ],
        teacherNotes:
          "Discuss what 'context dumping' looks like and why it does not earn marks. Show a marked example where context is woven into analysis vs dropped in as background information. Students practise embedding a contextual point into an existing analytical paragraph.",
      },
      {
        id: "y10-poetry-close-reading-s6",
        slideNumber: 6,
        title: "Building a Close Reading Paragraph",
        bulletPoints: [
          "Structure: Point -- Evidence (embedded quote) -- Analysis (language/structure) -- Context/Effect",
          "Embed quotations: weave them into your sentence rather than dropping them in alone",
          "Aim for two to three developed language points per paragraph",
          "End by linking back to the question or poem's central theme",
          "Avoid listing techniques -- depth of analysis is valued over breadth",
        ],
        teacherNotes:
          "Model the construction of a full analytical paragraph live on the board, thinking aloud at each stage. Students then construct a parallel paragraph on a different section of the same poem.",
        activity: "Students write one full analytical paragraph using the PEAC structure (Point, Evidence, Analysis, Context). Swap for peer feedback using a success criteria checklist.",
      },
      {
        id: "y10-poetry-close-reading-s7",
        slideNumber: 7,
        title: "Comparing Poems",
        bulletPoints: [
          "IGCSE poetry questions often ask you to compare two poems",
          "Begin by identifying a central point of comparison: theme, tone, form, or method",
          "Write comparatively -- integrate both poems, do not write separately about each",
          "Use: 'While [Poem A]... [Poem B]...', 'Both poets...', 'Unlike...'",
          "Compare the effect of different choices, not just the choices themselves",
        ],
        teacherNotes:
          "Provide a comparison planning frame. Students use it to plan a comparison of two anthology poems in 5 minutes. Share plans and discuss which points offer the most analytical depth.",
      },
      {
        id: "y10-poetry-close-reading-s8",
        slideNumber: 8,
        title: "Lesson Summary -- Close Reading Checklist",
        bulletPoints: [
          "1. Identify subject and tone (including shifts)",
          "2. Zoom in on specific language -- connotations and effect",
          "3. Analyse structural and formal choices",
          "4. Embed relevant context without dumping",
          "5. Build PEAC paragraphs with integrated quotations and comparative connectives",
        ],
        teacherNotes:
          "Distribute the close reading checklist as a bookmark. Students complete a final exit ticket: annotate three lines of a short poem using all five checklist steps.",
        activity: "Exit ticket: annotate a four-line extract for language, structure, and effect. Collected and used to plan differentiated starter next lesson.",
      },
    ],
  },

  // ============================================================
  // Y10 -- Presentation 4
  // ============================================================
  {
    id: "y10-omam-context-characters",
    lessonTitle: "Of Mice and Men -- Context and Characters",
    yearGroup: "Y10",
    termUnit: "Literature -- Of Mice and Men",
    totalSlides: 8,
    slides: [
      {
        id: "y10-omam-context-characters-s1",
        slideNumber: 1,
        title: "Introducing Of Mice and Men",
        bulletPoints: [
          "Written by John Steinbeck, published in 1937",
          "Set during the Great Depression in California, USA",
          "Follows two itinerant ranch workers: George Milton and Lennie Small",
          "Explores themes of friendship, loneliness, dreams, and the American Dream",
          "The title comes from Robert Burns: 'The best laid schemes o' mice an' men / Gang aft agley'",
        ],
        teacherNotes:
          "Show a brief visual of 1930s California -- Dust Bowl photographs and migrant worker camps (Dorothea Lange images work well). Establish the physical and economic landscape before beginning the text.",
        activity: "What do you already know? Students write three things they associate with 1930s America. Share and discuss as a class.",
      },
      {
        id: "y10-omam-context-characters-s2",
        slideNumber: 2,
        title: "Historical and Social Context",
        bulletPoints: [
          "The Great Depression (1929--1939): mass unemployment and poverty following the Wall Street Crash",
          "The Dust Bowl: drought destroyed farmland in the Midwest, forcing migration to California",
          "Migrant workers ('bindle stiffs') moved from ranch to ranch with few rights or security",
          "Racial segregation was legal and enforced -- Crooks is kept separate from the other men",
          "Women had limited social power; Curley's wife has no name and no freedom",
        ],
        teacherNotes:
          "Provide a context card with key dates and facts. Emphasise that context should inform, not replace, analysis of the text. Link each contextual point to a specific character or moment in the novel.",
      },
      {
        id: "y10-omam-context-characters-s3",
        slideNumber: 3,
        title: "George Milton -- Character Overview",
        bulletPoints: [
          "Practical, intelligent, and protective -- the 'brains' of the partnership",
          "Sacrifices his own freedom to care for Lennie",
          "Carries the weight of the dream: the farm, the rabbits, the independence",
          "His final act raises questions: mercy, responsibility, or despair?",
          "Steinbeck presents him as a flawed but moral figure in an immoral world",
        ],
        teacherNotes:
          "Read the opening description of George aloud. Ask students: what does Steinbeck establish about George immediately? Focus on the contrast with Lennie in both physical description and behaviour.",
        activity: "Character profile: students create a George profile card with quotations for each trait listed. Use the text to find evidence.",
      },
      {
        id: "y10-omam-context-characters-s4",
        slideNumber: 4,
        title: "Lennie Small -- Character Overview",
        bulletPoints: [
          "Large, physically powerful, but childlike in understanding -- an ironic name",
          "His love of soft things is a motif: mice, the puppy, Curley's wife's hair",
          "He does not understand his own strength; his violence is accidental, not malicious",
          "Represents innocence and vulnerability in a brutal world",
          "His disability is never named but shapes every interaction in the novel",
        ],
        teacherNotes:
          "Discuss the significance of Lennie's name ('Small') vs his physical description. Ask students to consider how Steinbeck uses Lennie to critique the world around him rather than to portray him as the cause of tragedy.",
      },
      {
        id: "y10-omam-context-characters-s5",
        slideNumber: 5,
        title: "Candy, Crooks, and Curley's Wife",
        bulletPoints: [
          "Candy: old, one-handed, marginalised -- his dog's fate foreshadows Lennie's",
          "Crooks: the only Black worker, isolated by racism, briefly allowed to dream",
          "Curley's wife: trapped, lonely, and reduced to an unnamed function ('the boss's son's wife')",
          "Each represents a different dimension of exclusion: age, race, and gender",
          "All three characters briefly share the dream before it is destroyed",
        ],
        teacherNotes:
          "Run a 'power pyramid' activity: where does each character sit in the hierarchy of the ranch? Students place characters on a pyramid and justify their choices. Discuss how the hierarchy reflects 1930s American society.",
        activity: "Power pyramid: students rank all major characters by social power and justify placements with textual evidence.",
      },
      {
        id: "y10-omam-context-characters-s6",
        slideNumber: 6,
        title: "The Dream -- Theme and Function",
        bulletPoints: [
          "The dream of 'livin' off the fatta the lan'' is a version of the American Dream",
          "It functions as hope and escape for George, Lennie, Candy, and briefly Crooks",
          "Steinbeck presents the dream as both beautiful and inevitably doomed",
          "The repetition of the dream speech suggests ritual and comfort",
          "Its destruction represents the impossibility of the American Dream for the dispossessed",
        ],
        teacherNotes:
          "Read aloud the dream speech from Chapter 1. Ask students to focus on the language Steinbeck uses when George describes the farm. What words create the sense of safety and ownership? Why does Lennie insist on hearing it again?",
      },
      {
        id: "y10-omam-context-characters-s7",
        slideNumber: 7,
        title: "Loneliness as a Central Theme",
        bulletPoints: [
          "Almost every character in the novel is lonely in some way",
          "George and Lennie are unusual because they travel together -- this makes others suspicious",
          "Candy's loneliness intensifies after the death of his dog",
          "Crooks' room is a symbol of enforced isolation",
          "Curley's wife tells Lennie: 'I get lonely... You can talk to people, but I can't talk to nobody'",
        ],
        teacherNotes:
          "Ask students: why does Steinbeck make so many characters lonely? What is he saying about the society he is describing? Connect to the historical context of migrant workers with no permanent community.",
        activity: "Students choose one character and write a paragraph on how Steinbeck presents their loneliness, using at least two embedded quotations.",
      },
      {
        id: "y10-omam-context-characters-s8",
        slideNumber: 8,
        title: "Lesson Summary and Essay Preparation",
        bulletPoints: [
          "Steinbeck wrote in the context of the Great Depression, Dust Bowl, and racial segregation",
          "George and Lennie are contrasted but bound by friendship and the shared dream",
          "Secondary characters (Candy, Crooks, Curley's wife) each embody a form of social exclusion",
          "Key themes: the American Dream, loneliness, friendship, power, and fate",
          "All analysis must connect character/theme to Steinbeck's methods and context",
        ],
        teacherNotes:
          "Distribute the essay planning frame for OMAM questions. Students begin a mind-map of evidence for one theme: loneliness or the American Dream. Homework: read Chapter 4 (Crooks' room) and annotate for loneliness.",
        activity: "Exit ticket: students write one analytical sentence about Steinbeck's presentation of George, embedding a quotation.",
      },
    ],
  },

  // ============================================================
  // Y10 -- Presentation 5
  // ============================================================
  {
    id: "y10-lit-essay-technique",
    lessonTitle: "Literature Essay Technique -- AO1, AO2, AO3",
    yearGroup: "Y10",
    termUnit: "Literature -- Essay Skills",
    totalSlides: 8,
    slides: [
      {
        id: "y10-lit-essay-technique-s1",
        slideNumber: 1,
        title: "Understanding the Assessment Objectives",
        bulletPoints: [
          "AO1: respond to texts with informed personal interpretation (what you argue)",
          "AO2: analyse language, form, and structure and their effects (how writers write)",
          "AO3: relate texts to their contexts (when and why the text was written)",
          "All three AOs are assessed in every literature essay",
          "A strong essay weaves AO1, AO2, and AO3 together -- not in separate sections",
        ],
        teacherNotes:
          "Many students write AO1 in one paragraph, AO2 in the next, and AO3 at the end. Explain why this is ineffective: markers want to see integrated, sophisticated analysis where all three AOs work together within each paragraph.",
        activity: "AO sorting activity: students label sentences from a model essay as AO1, AO2, or AO3. Discuss how they interact.",
      },
      {
        id: "y10-lit-essay-technique-s2",
        slideNumber: 2,
        title: "AO1 -- Building an Argument",
        bulletPoints: [
          "AO1 rewards a clear, sustained, and personal line of argument",
          "State your interpretation in the introduction: what is the writer doing and why?",
          "Every paragraph should connect back to your central argument",
          "Use first person sparingly and with confidence: 'Steinbeck presents...' not 'I think...'",
          "Avoid plot summary -- focus on interpretation and meaning",
        ],
        teacherNotes:
          "Model the difference between a plot-summary response and an analytical response to the same question. Ask students which they find more convincing and why. Introduce the concept of a 'thesis statement'.",
      },
      {
        id: "y10-lit-essay-technique-s3",
        slideNumber: 3,
        title: "AO2 -- Analysing Language and Form",
        bulletPoints: [
          "AO2 is where most marks are gained or lost at IGCSE",
          "Identify specific language features: word choice, imagery, tone, voice",
          "Identify structural features: sequencing, form, pacing, narrative perspective",
          "Always explain the effect of the technique on the reader",
          "Avoid a list of techniques ('The writer uses alliteration, metaphor, and personification...')",
        ],
        teacherNotes:
          "Introduce the 'So what?' test: after every language point, ask 'So what effect does this have?' If students cannot answer, they have identified but not analysed. Model applying the test to a sample paragraph.",
        activity: "'So what?' challenge: students improve a weak analytical paragraph by applying the 'So what?' test to every technique mentioned.",
      },
      {
        id: "y10-lit-essay-technique-s4",
        slideNumber: 4,
        title: "AO3 -- Embedding Context",
        bulletPoints: [
          "Context includes: historical period, social conditions, biographical details, literary traditions",
          "Context must be relevant to your argument -- do not include it as background filler",
          "Phrase context analytically: 'The reference to... reflects the contemporary anxiety about...'",
          "Avoid 'context paragraphs' -- weave context into language analysis",
          "Consider how a contemporary reader and a modern reader might respond differently",
        ],
        teacherNotes:
          "Discuss the risk of over-relying on context: some students use context to avoid analysing language. Remind students that AO2 marks can only come from language analysis, not from context knowledge, however accurate.",
      },
      {
        id: "y10-lit-essay-technique-s5",
        slideNumber: 5,
        title: "Structuring a Literature Essay",
        bulletPoints: [
          "Introduction: brief context, clear thesis, overview of your argument",
          "Body paragraphs: each with a topic sentence, embedded evidence, analysis, and a link to thesis",
          "Conclusion: synthesise your argument -- do not just repeat points",
          "Aim for 4--5 developed body paragraphs",
          "Each paragraph should address a distinct aspect of the question",
        ],
        teacherNotes:
          "Distribute a blank essay planning frame. Walk through how to use it with a sample question. Emphasise that planning is not optional -- even 5 minutes of planning improves the quality and coherence of the response.",
        activity: "Students plan a response to a sample literature question in 6 minutes using the planning frame. Share plans and peer-assess.",
      },
      {
        id: "y10-lit-essay-technique-s6",
        slideNumber: 6,
        title: "Writing Strong Topic Sentences",
        bulletPoints: [
          "A topic sentence introduces the main point of the paragraph",
          "It should make a clear, arguable claim that connects to the essay question",
          "Avoid vague openers: 'In this paragraph I will discuss...'",
          "Strong model: 'Steinbeck uses Crooks to expose the dehumanising effects of racial segregation...'",
          "The rest of the paragraph proves the topic sentence with evidence and analysis",
        ],
        teacherNotes:
          "Provide five weak topic sentences and ask students to improve them. Share improvements and discuss what makes a topic sentence argumentative rather than descriptive.",
        activity: "Topic sentence relay: each group rewrites three weak topic sentences and shares the best version with the class.",
      },
      {
        id: "y10-lit-essay-technique-s7",
        slideNumber: 7,
        title: "Embedding Quotations",
        bulletPoints: [
          "Integrate quotations into your own sentences -- do not drop them in alone",
          "Use short, precise quotations (one to three words is often enough)",
          "Follow every quotation with analysis -- never leave a quotation unexplained",
          "Use ellipsis (...) to shorten long quotations without changing meaning",
          "Avoid over-quoting: analysis, not evidence, is what earns marks",
        ],
        teacherNotes:
          "Show three versions of a quotation being used: (1) dropped in alone, (2) introduced but not analysed, (3) embedded and analysed. Students rank and explain which version best demonstrates analytical skill.",
      },
      {
        id: "y10-lit-essay-technique-s8",
        slideNumber: 8,
        title: "Essay Technique -- Summary Checklist",
        bulletPoints: [
          "AO1: clear thesis and sustained argument throughout",
          "AO2: specific language and structural analysis with effect on reader",
          "AO3: relevant context integrated into analysis, not listed separately",
          "Structure: introduction with thesis, developed body paragraphs, synthesising conclusion",
          "Quotations: embedded, concise, and always followed by analysis",
        ],
        teacherNotes:
          "Students use the checklist to self-assess a recent piece of literature writing. They highlight which AOs are present in each paragraph and identify one target for improvement. Collect targets and use to plan intervention.",
        activity: "Self-assessment: annotate a previous essay using the checklist. Identify one paragraph with all three AOs and one paragraph that needs development.",
      },
    ],
  },

  // ============================================================
  // Y11 -- Presentation 6
  // ============================================================
  {
    id: "y11-lang-p2-transactional",
    lessonTitle: "Language Paper 2 -- Transactional Writing",
    yearGroup: "Y11",
    termUnit: "Language -- Paper 2",
    totalSlides: 8,
    slides: [
      {
        id: "y11-lang-p2-transactional-s1",
        slideNumber: 1,
        title: "What is Transactional Writing?",
        bulletPoints: [
          "Transactional writing has a clear purpose, audience, and form",
          "It 'transacts' -- it aims to achieve something: persuade, inform, advise, argue",
          "Paper 2 Section B offers a choice of two transactional writing tasks",
          "You must complete one task in approximately 45--50 minutes",
          "Marks: 40 total (24 for content and organisation, 16 for technical accuracy)",
        ],
        teacherNotes:
          "Begin by asking students to name forms of writing they encounter daily that have a clear purpose: emails, adverts, speeches, letters, reports. Establish that transactional writing is purposeful, not simply expressive.",
        activity: "Students identify the audience and purpose of three real-world texts (a charity appeal letter, a council report, a school newsletter).",
      },
      {
        id: "y11-lang-p2-transactional-s2",
        slideNumber: 2,
        title: "Forms of Transactional Writing",
        bulletPoints: [
          "Letter (formal or informal): layout conventions, appropriate salutation and sign-off",
          "Speech: rhetorical devices, direct address, clear rhetorical structure",
          "Article (newspaper or magazine): headline, subheadings, columns, hook opening",
          "Report: headings, numbered sections, formal register, recommendations",
          "Blog or online article: conversational tone, personal voice, direct engagement",
        ],
        teacherNotes:
          "Provide a form-features reference card. Students must know the key conventions for each form. Run a quick test: show a text, students identify the form and list the features that indicate it.",
        activity: "Form identification quiz: students identify the form of five short extracts and list the features that indicate each form.",
      },
      {
        id: "y11-lang-p2-transactional-s3",
        slideNumber: 3,
        title: "Persuasive Writing -- Key Techniques",
        bulletPoints: [
          "Rhetorical question: engages reader, implies the answer",
          "Rule of three / tricolon: creates emphasis and rhythm",
          "Anecdote: personalises the argument, builds emotional connection",
          "Statistics and facts: add credibility (can be invented plausibly in the exam)",
          "Counter-argument and rebuttal: shows awareness and strengthens your position",
        ],
        teacherNotes:
          "Emphasise that rhetorical techniques must be used for effect, not merely listed. Show an example of a persuasive paragraph that uses three techniques organically vs one that lists them artificially. Students discuss which is more convincing.",
        activity: "Students annotate a model persuasive speech extract identifying each technique and explaining its effect on the audience.",
      },
      {
        id: "y11-lang-p2-transactional-s4",
        slideNumber: 4,
        title: "Register and Tone",
        bulletPoints: [
          "Register is the level of formality and the relationship between writer and reader",
          "Formal register: no contractions, full sentences, impersonal or third person",
          "Informal register: contractions, colloquialisms, direct personal address",
          "Match tone to purpose: authoritative for a report, empathetic for an advice letter",
          "Inconsistent register is one of the most common errors -- decide and commit",
        ],
        teacherNotes:
          "Give students the same argument written in three different registers (formal letter, blog post, speech) and ask them to identify the differences. Discuss how the same content can be adapted for different audiences.",
      },
      {
        id: "y11-lang-p2-transactional-s5",
        slideNumber: 5,
        title: "Structuring a Transactional Response",
        bulletPoints: [
          "Opening: hook the reader and establish your position or purpose immediately",
          "Body: develop 3--4 main points, one per paragraph, with evidence and technique",
          "Counter-argument: acknowledge an opposing view and refute it",
          "Conclusion: return to your opening idea or call to action -- do not introduce new points",
          "Form-specific features should frame your response (e.g., Dear... / Yours faithfully...)",
        ],
        teacherNotes:
          "Model the planning process for a transactional response in 5 minutes. Demonstrate how to create a paragraph plan before writing, with a topic for each body paragraph and one technique planned per paragraph.",
        activity: "Students plan a response to a provided transactional task in 5 minutes using the planning frame. Share and compare plans.",
      },
      {
        id: "y11-lang-p2-transactional-s6",
        slideNumber: 6,
        title: "Writing the Opening Paragraph",
        bulletPoints: [
          "The opening must engage the reader immediately",
          "Techniques for openings: rhetorical question, shocking statistic, bold statement, anecdote",
          "State your position or purpose clearly within the first paragraph",
          "The tone of the opening sets the register for the entire piece",
          "Avoid starting with 'In this speech/letter/article I will...'",
        ],
        teacherNotes:
          "Show three opening paragraphs for the same task. Students rank them from most to least effective and justify their ranking. Identify what makes the best opening work: specificity, engagement, and clarity of purpose.",
        activity: "Students write two alternative opening paragraphs for the same task using different techniques, then choose the stronger one.",
      },
      {
        id: "y11-lang-p2-transactional-s7",
        slideNumber: 7,
        title: "Technical Accuracy -- Earning the 16 Marks",
        bulletPoints: [
          "16 marks for: sentence demarcation, punctuation variety, spelling, and grammar",
          "Vary sentence structures: simple (for impact), compound, complex, minor sentences",
          "Use a range of punctuation: commas, colons, semicolons, dashes, brackets",
          "Ambitious vocabulary: use precise, sophisticated word choices",
          "Proofread: re-read your work specifically for punctuation and spelling errors",
        ],
        teacherNotes:
          "Remind students that the accuracy marks are distinct from content marks. A student with excellent ideas but poor accuracy will lose significant marks. Model the proofreading habit: read the piece once solely for sentence-ending punctuation.",
      },
      {
        id: "y11-lang-p2-transactional-s8",
        slideNumber: 8,
        title: "Transactional Writing -- Summary",
        bulletPoints: [
          "Know your form: use its conventions from the first line to the last",
          "Match register and tone to audience and purpose -- and stay consistent",
          "Use persuasive/rhetorical techniques purposefully, not as a checklist",
          "Structure: hook opening, developed body paragraphs, counter-argument, purposeful conclusion",
          "Accuracy: vary sentences and punctuation, proofread, choose ambitious vocabulary",
        ],
        teacherNotes:
          "Students complete a timed 20-minute transactional writing task. Peer-mark using the success criteria: form features, register, rhetorical techniques, structure, and accuracy.",
        activity: "Timed writing (20 minutes): respond to a provided transactional task. Self-assess against the success criteria checklist.",
      },
    ],
  },

  // ============================================================
  // Y11 -- Presentation 7
  // ============================================================
  {
    id: "y11-lang-p2-creative",
    lessonTitle: "Language Paper 2 -- Creative Writing",
    yearGroup: "Y11",
    termUnit: "Language -- Paper 2",
    totalSlides: 8,
    slides: [
      {
        id: "y11-lang-p2-creative-s1",
        slideNumber: 1,
        title: "What is Paper 2 Creative Writing?",
        bulletPoints: [
          "Paper 2 Section A offers a creative writing task",
          "You may be given a title, an image prompt, or a choice of scenarios",
          "Marks: 40 total (24 for content and organisation, 16 for technical accuracy)",
          "Time: approximately 45--50 minutes including 5 minutes planning",
          "The examiner rewards original, crafted writing -- not just a retold plot",
        ],
        teacherNotes:
          "Ask students: what makes a piece of creative writing memorable? Collect responses and group them into categories: character, voice, atmosphere, originality, language craft. These become the success criteria for the lesson.",
      },
      {
        id: "y11-lang-p2-creative-s2",
        slideNumber: 2,
        title: "The Writer's Craft -- Showing, Not Telling",
        bulletPoints: [
          "'Show, don't tell' means rendering experience through detail, not stating it directly",
          "Telling: 'She was nervous.' -- Showing: 'Her hands would not stay still; she folded them in her lap and unfolded them again.'",
          "Use sensory detail: sight, sound, smell, taste, touch",
          "Reveal character through action, dialogue, and thought -- not description alone",
          "Trust your reader to make inferences -- you do not need to explain everything",
        ],
        teacherNotes:
          "Write 'She was angry' on the board. Ask students to rewrite it using showing not telling. Share examples and discuss which details are most effective. Emphasise that the technique requires restraint as well as detail.",
        activity: "Transform three 'telling' sentences into 'showing' sentences. Share the best examples and discuss what makes them effective.",
      },
      {
        id: "y11-lang-p2-creative-s3",
        slideNumber: 3,
        title: "Creating Atmosphere and Setting",
        bulletPoints: [
          "Atmosphere is the mood or feeling created by the setting and narrative voice",
          "Use precise, evocative language -- a 'rain-grey November morning' is stronger than 'a cold day'",
          "Pathetic fallacy: the environment reflects the emotional state of the narrator",
          "Use all five senses to ground the reader in a physical world",
          "Pacing: slow the narrative down in key moments to create tension or beauty",
        ],
        teacherNotes:
          "Project two contrasting setting descriptions: one abstract and generic, one sensory and specific. Ask students which creates a stronger sense of place and why. Discuss how the second example earns more marks for craftsmanship.",
        activity: "Students write a 6-sentence setting description of the school at dawn using at least three of the five senses and one pathetic fallacy.",
      },
      {
        id: "y11-lang-p2-creative-s4",
        slideNumber: 4,
        title: "Narrative Voice and Perspective",
        bulletPoints: [
          "First person ('I'): intimate, immediate, but limited to one viewpoint",
          "Third person limited: follows one character's perspective with more flexibility",
          "Third person omniscient: all-knowing narrator, can access multiple characters",
          "Choose a perspective before you begin and maintain it consistently",
          "Voice is the personality and style of the narrator -- make it distinctive",
        ],
        teacherNotes:
          "Read two short extracts: one in first person and one in third person limited, both describing the same event. Ask students what each perspective gains and loses. Discuss how voice can be a marker of originality.",
      },
      {
        id: "y11-lang-p2-creative-s5",
        slideNumber: 5,
        title: "Structure and Shape",
        bulletPoints: [
          "A clear narrative arc is important: even a short piece should have shape",
          "Consider: linear, non-linear (flashback/flash-forward), circular, or episodic structure",
          "In-medias-res: begin in the middle of the action for an immediate impact",
          "The ending should feel earned -- avoid sudden death or 'it was all a dream'",
          "Use structural choices deliberately: fragmented sentences for confusion, long sentences for flow",
        ],
        teacherNotes:
          "Show the planning templates for two structural approaches: linear and circular. Discuss what kinds of stories work better with each. Students choose a structure type for their practice task.",
        activity: "Students create a narrative arc plan for a given title in 4 minutes. Three points: an opening situation, a turning point, and a resolution.",
      },
      {
        id: "y11-lang-p2-creative-s6",
        slideNumber: 6,
        title: "Crafting Dialogue",
        bulletPoints: [
          "Dialogue should reveal character and advance the narrative -- not fill space",
          "Punctuate dialogue correctly: 'Speech,' said narrator. -- or -- 'Speech.' Said is lower case when not a new sentence",
          "Use dialogue tags sparingly: 'said' is often better than 'exclaimed' or 'retorted'",
          "Subtext: characters rarely say exactly what they mean -- imply what is beneath the surface",
          "Break dialogue with action beats to maintain pace and physicality",
        ],
        teacherNotes:
          "Model a dialogue exchange with correct punctuation on the board. Then show a version with subtext -- characters speaking around an uncomfortable truth. Students rewrite a bland dialogue exchange to add subtext.",
        activity: "Students write a 6-line dialogue between two characters where neither says what they actually mean. Share and discuss what the subtext reveals.",
      },
      {
        id: "y11-lang-p2-creative-s7",
        slideNumber: 7,
        title: "Technical Accuracy in Creative Writing",
        bulletPoints: [
          "As with transactional writing, 16 marks are for accuracy",
          "Vary sentence types deliberately for effect -- not by accident",
          "Fragments can be used intentionally: 'Then nothing.'",
          "Paragraphing for effect: a one-sentence paragraph creates emphasis",
          "Proofreading: re-read for punctuation, especially within complex sentences",
        ],
        teacherNotes:
          "Remind students that 'experimental' punctuation must be clearly intentional to earn marks -- accidental errors will not. Show a model extract and ask students to identify which 'non-standard' choices were deliberate and which were errors.",
      },
      {
        id: "y11-lang-p2-creative-s8",
        slideNumber: 8,
        title: "Creative Writing -- Success Criteria",
        bulletPoints: [
          "Originality: a distinctive voice, an unexpected angle, a memorable detail",
          "Craft: showing not telling, sensory detail, purposeful language choices",
          "Structure: a clear shape with an effective opening and a satisfying ending",
          "Character/atmosphere: rendered through detail, action, and dialogue",
          "Accuracy: varied sentences, correct punctuation, ambitious vocabulary",
        ],
        teacherNotes:
          "Students complete a 25-minute timed creative writing task. Peer-assess using the five success criteria. Focus feedback on one strength and one area for development per response.",
        activity: "Timed creative writing (25 minutes) in response to a title prompt. Peer-assess using the success criteria checklist.",
      },
    ],
  },

  // ============================================================
  // Y11 -- Presentation 8
  // ============================================================
  {
    id: "y11-inspector-calls-priestley",
    lessonTitle: "An Inspector Calls -- Priestley's Message",
    yearGroup: "Y11",
    termUnit: "Literature -- An Inspector Calls",
    totalSlides: 8,
    slides: [
      {
        id: "y11-inspector-calls-priestley-s1",
        slideNumber: 1,
        title: "An Inspector Calls -- Overview",
        bulletPoints: [
          "Written by J.B. Priestley in 1945, set in 1912",
          "A detective play: Inspector Goole arrives at the Birling family dinner",
          "Each family member is implicated in the death of Eva Smith/Daisy Renton",
          "The play is a morality play as much as a mystery",
          "Priestley uses the play to argue for social responsibility and collective conscience",
        ],
        teacherNotes:
          "Establish the 'double context': written in 1945 (post-WW2, welfare state being built) but set in 1912 (pre-WW1, pre-women's suffrage, class rigidity). Ask students why Priestley might have chosen this gap deliberately.",
        activity: "What do you know? Students list what they already know about 1912 and 1945 Britain. Share and discuss the contrasts.",
      },
      {
        id: "y11-inspector-calls-priestley-s2",
        slideNumber: 2,
        title: "Priestley's Political Message",
        bulletPoints: [
          "Priestley was a socialist who believed in collective responsibility",
          "The play argues that individual actions have social consequences",
          "The Birlings represent the selfish, complacent capitalist class",
          "The Inspector represents the voice of social conscience",
          "Priestley warns: change or face the consequences -- 'fire, blood, and anguish'",
        ],
        teacherNotes:
          "Discuss: why does Priestley set a 1945 play in 1912? The original audience would remember both the Titanic, WW1, and WW2. Priestley is saying: we had a chance to change in 1912 and failed -- do not make the same mistake now.",
      },
      {
        id: "y11-inspector-calls-priestley-s3",
        slideNumber: 3,
        title: "The Inspector -- Who Is He?",
        bulletPoints: [
          "His name 'Goole' is a homophone of 'ghoul' -- suggesting the supernatural",
          "He arrives from nowhere and knows everything -- he is an omniscient figure",
          "His role is to strip away the family's comfortable self-deception",
          "He may represent: God, socialist conscience, fate, collective guilt",
          "His final speech is a direct address to the audience as well as the Birlings",
        ],
        teacherNotes:
          "Read Goole's final speech aloud with emphasis. Ask students to identify specific phrases where Priestley speaks directly through the Inspector. Discuss how the ambiguity of the Inspector's identity strengthens the play's message.",
        activity: "Students annotate the Inspector's final speech for specific word choices, identifying where Priestley's message is most clearly expressed.",
      },
      {
        id: "y11-inspector-calls-priestley-s4",
        slideNumber: 4,
        title: "The Birlings -- Generational Divide",
        bulletPoints: [
          "Mr Birling: capitalist, self-serving, refuses to accept responsibility -- presented as wrong",
          "Mrs Birling: class-conscious and morally rigid -- 'a cold woman'",
          "Sheila: genuinely changed by the Inspector's visit -- represents hope and self-awareness",
          "Eric: flawed but capable of remorse -- his guilt is more authentic than his parents'",
          "Gerald: complex -- lies but recognises the truth; his position is ambiguous",
        ],
        teacherNotes:
          "Ask students: by the end of the play, who has changed and who has not? Create a 'change' spectrum on the board with characters placed according to how much they have been altered by the Inspector's visit.",
        activity: "Character change spectrum: students place each character on a line from 'unchanged' to 'transformed' and justify with textual evidence.",
      },
      {
        id: "y11-inspector-calls-priestley-s5",
        slideNumber: 5,
        title: "Eva Smith -- Symbolic Function",
        bulletPoints: [
          "Eva Smith / Daisy Renton is never seen -- she exists only through others' accounts",
          "Her name is symbolic: 'Eva' (Eve, every woman) + 'Smith' (the common worker)",
          "She may be one woman or several -- her identity is deliberately fluid",
          "She represents all the victims of capitalist indifference and class prejudice",
          "Her absence makes her presence more powerful -- she is defined by what was done to her",
        ],
        teacherNotes:
          "Discuss the theatrical choice of keeping Eva Smith offstage. How would the play differ if she appeared? Argue that her absence is more powerful: she becomes a symbol rather than an individual, which serves Priestley's political argument.",
      },
      {
        id: "y11-inspector-calls-priestley-s6",
        slideNumber: 6,
        title: "Dramatic Techniques -- Time and Setting",
        bulletPoints: [
          "The unity of time and place (one room, one evening) creates claustrophobia and intensity",
          "The Birlings cannot escape -- the inspector has trapped them",
          "The lighting shifts from 'pink and intimate' to 'brighter and harder' when the Inspector arrives",
          "The stage directions are precise and loaded with meaning",
          "Priestley uses dramatic irony throughout: Birling's speech about the Titanic, war, etc.",
        ],
        teacherNotes:
          "Read the opening stage directions aloud. Ask students what Priestley establishes about the Birlings through the physical setting (comfortable, self-contained, well-lit). Discuss how the arriving Inspector literally and figuratively changes the atmosphere.",
        activity: "Students annotate the opening stage directions for what each detail suggests about the Birlings' world and values.",
      },
      {
        id: "y11-inspector-calls-priestley-s7",
        slideNumber: 7,
        title: "Dramatic Irony and the Audience's Knowledge",
        bulletPoints: [
          "The original 1945 audience knew that Birling was wrong about war and the Titanic",
          "This makes Birling comic and tragic -- confident, but fatally mistaken",
          "Priestley uses dramatic irony to undermine the authority of the older generation",
          "The audience is placed in a superior position -- they know what history holds",
          "This aligns the audience with the Inspector, not the Birlings",
        ],
        teacherNotes:
          "Quote Birling's speech directly: 'The Titanic... unsinkable, absolutely unsinkable.' Ask students how a 1945 audience would respond to this. How does this dramatic irony shape their attitude to Birling's other pronouncements?",
      },
      {
        id: "y11-inspector-calls-priestley-s8",
        slideNumber: 8,
        title: "Essay Preparation -- Priestley's Message",
        bulletPoints: [
          "Central argument: Priestley uses the Birling family to dramatise the consequences of social irresponsibility",
          "Key methods: Inspector as moral mouthpiece, dramatic irony, the generational divide, Eva Smith as symbol",
          "AO3: written in 1945 but set in 1912 -- Priestley addresses a post-war audience about collective responsibility",
          "Paragraph focus options: the Inspector, Mr Birling, Sheila, Eva Smith, the ending",
          "Always connect character/technique back to Priestley's message",
        ],
        teacherNotes:
          "Distribute essay planning frames. Students plan a response to: 'How does Priestley use the Inspector to deliver his message?' in 8 minutes. Share plans and discuss which approaches make the most direct connection to Priestley's purpose.",
        activity: "Students plan and write a topic sentence + evidence sentence for each planned paragraph. Peer-assess for clarity of argument.",
      },
    ],
  },

  // ============================================================
  // Y11 -- Presentation 9
  // ============================================================
  {
    id: "y11-macbeth-tragedy",
    lessonTitle: "Macbeth -- Tragedy and Dramatic Technique",
    yearGroup: "Y11",
    termUnit: "Literature -- Macbeth",
    totalSlides: 8,
    slides: [
      {
        id: "y11-macbeth-tragedy-s1",
        slideNumber: 1,
        title: "Macbeth -- Context and Genre",
        bulletPoints: [
          "Written by William Shakespeare circa 1606, during the reign of James I",
          "James I was obsessed with witchcraft and believed in the divine right of kings",
          "Macbeth is a tragedy: the protagonist falls from greatness to destruction",
          "Key themes: ambition, power, guilt, fate vs free will, the supernatural",
          "The play was written shortly after the Gunpowder Plot (1605) -- treason was a live concern",
        ],
        teacherNotes:
          "Show a brief contextual summary of James I's interests (witches, kingship, Scotland). Argue that Shakespeare wrote Macbeth partly as a compliment to his patron -- James was a descendant of Banquo, who is portrayed sympathetically.",
        activity: "Students note two ways the context of 1606 (James I, divine right, witchcraft) connects directly to events in the play.",
      },
      {
        id: "y11-macbeth-tragedy-s2",
        slideNumber: 2,
        title: "Shakespearean Tragedy -- Key Features",
        bulletPoints: [
          "Tragic hero: noble protagonist with a fatal flaw (hamartia)",
          "Macbeth's hamartia: 'vaulting ambition which o'erleaps itself'",
          "A fall from great status to destruction, often death",
          "The tragic hero is responsible for their own downfall -- not simply a victim",
          "The play ends with order restored: Malcolm is crowned, Scotland is healed",
        ],
        teacherNotes:
          "Introduce the classical definition of tragedy (Aristotle: hamartia, catharsis). Discuss whether Macbeth meets this definition -- is he wholly responsible? Where does the agency of the witches and Lady Macbeth complicate the picture?",
      },
      {
        id: "y11-macbeth-tragedy-s3",
        slideNumber: 3,
        title: "Macbeth -- Character and Deterioration",
        bulletPoints: [
          "Act 1: admired warrior, loyal subject, reluctant murderer",
          "Act 2: murders Duncan -- first crime, followed by immediate psychological disintegration",
          "Act 3: orders the murder of Banquo and Fleance -- deterioration accelerates",
          "Act 4: murders Macduff's family without hesitation -- conscience is extinguished",
          "Act 5: isolated, nihilistic ('Tomorrow, and tomorrow, and tomorrow...')",
        ],
        teacherNotes:
          "Track Macbeth's deterioration on a 'moral decline' graph drawn on the board. Ask students at which point they feel Macbeth is irredeemable. Discuss whether Shakespeare presents him with sympathy throughout.",
        activity: "Students map Macbeth's emotional and moral state at the end of each act using three adjectives and one quotation per act.",
      },
      {
        id: "y11-macbeth-tragedy-s4",
        slideNumber: 4,
        title: "Lady Macbeth -- Power and Collapse",
        bulletPoints: [
          "Act 1: manipulates Macbeth, invokes dark spirits, appears more resolute than him",
          "She calls on spirits to 'unsex me here' -- she attempts to suppress femininity and conscience",
          "Act 2: she plans and covers up the crime; Macbeth is paralysed by guilt",
          "Act 5: she sleepwalks, unable to remove the imagined bloodstain -- her conscience returns",
          "Her collapse is the inverse of Macbeth's: she gains control then loses it; he loses conscience then loses everything",
        ],
        teacherNotes:
          "Compare Lady Macbeth's soliloquy in Act 1 with the sleepwalking scene in Act 5. Ask students what has changed and what this suggests about the nature of guilt. Discuss whether Shakespeare punishes or sympathises with her.",
      },
      {
        id: "y11-macbeth-tragedy-s5",
        slideNumber: 5,
        title: "The Witches -- Fate, Free Will, and Temptation",
        bulletPoints: [
          "The witches ('Weird Sisters') make prophecies but do not command action",
          "Key question: do they create Macbeth's ambition or simply reveal it?",
          "The prophecies are equivocal ('none of woman born' / 'Birnam Wood') -- Macbeth misreads them",
          "They represent the temptation of power and the danger of taking prophecy too literally",
          "For a Jacobean audience, witches were real and linked to the devil",
        ],
        teacherNotes:
          "Discuss the philosophical debate: is Macbeth fated to kill Duncan or does he choose to? Argue both sides. Most critics see Shakespeare presenting a complex interplay: the witches tempt, but Macbeth acts. Free will and fate co-exist.",
      },
      {
        id: "y11-macbeth-tragedy-s6",
        slideNumber: 6,
        title: "Key Soliloquies and Language Analysis",
        bulletPoints: [
          "'Is this a dagger which I see before me' (Act 2): shows Macbeth's psychological instability before the murder",
          "'To be thus is nothing' (Act 3): reveals paranoia and obsessive need for security",
          "'Tomorrow, and tomorrow, and tomorrow' (Act 5): nihilistic despair, life reduced to meaninglessness",
          "Shakespeare uses soliloquy to give the audience access to Macbeth's inner life",
          "Analyse: imagery, rhythm (iambic pentameter breaks under stress), and figurative language",
        ],
        teacherNotes:
          "Read 'Tomorrow, and tomorrow, and tomorrow' aloud. Students annotate for: imagery of time, imagery of performance, imagery of darkness. Discuss how the language reflects Macbeth's complete moral and existential collapse.",
        activity: "Close reading of 'Tomorrow' soliloquy: students identify three distinct images and explain the effect of each on the audience's view of Macbeth.",
      },
      {
        id: "y11-macbeth-tragedy-s7",
        slideNumber: 7,
        title: "Dramatic Techniques in Macbeth",
        bulletPoints: [
          "Soliloquy: reveals inner thoughts, creates audience intimacy and complicity",
          "Aside: character speaks directly to audience, heightens dramatic irony",
          "Imagery: blood, darkness, clothing, animals -- recurring motifs that carry thematic weight",
          "The supernatural: witches, Banquo's ghost -- destabilise the boundary between real and imagined",
          "Contrast: the brave warrior vs the paranoid tyrant; fair and foul as structural opposition",
        ],
        teacherNotes:
          "Discuss the blood imagery as a sustained motif. From 'brave Macbeth... carved out his passage' to 'Will all great Neptune's ocean wash this blood clean from my hand?' -- how does the meaning of blood change across the play?",
      },
      {
        id: "y11-macbeth-tragedy-s8",
        slideNumber: 8,
        title: "Essay Preparation -- Tragedy and Technique",
        bulletPoints: [
          "Central argument: Shakespeare uses Macbeth's deterioration to explore the corrupting power of unchecked ambition",
          "Key methods: soliloquy, imagery (blood/darkness), the witches as temptation, dramatic irony",
          "AO3: Jacobean context -- divine right, witchcraft, equivocation -- all present in the play",
          "Possible essay focuses: ambition, guilt, the supernatural, Lady Macbeth, tragedy as a genre",
          "Always link language analysis to meaning and to Shakespeare's dramatic purpose",
        ],
        teacherNotes:
          "Distribute Macbeth essay planning frames. Students plan a response to: 'How does Shakespeare present the theme of ambition in Macbeth?' Share plans and identify the strongest thesis statements.",
        activity: "Students write a full introduction to the essay question above, including a thesis, brief context, and overview of their main points.",
      },
    ],
  },

  // ============================================================
  // Y11 -- Presentation 10
  // ============================================================
  {
    id: "y11-exam-prep-time-management",
    lessonTitle: "Exam Preparation and Time Management",
    yearGroup: "Y11",
    termUnit: "Exam Preparation",
    totalSlides: 8,
    slides: [
      {
        id: "y11-exam-prep-s1",
        slideNumber: 1,
        title: "Your IGCSE English Exams -- Overview",
        bulletPoints: [
          "Language Paper 1: 2 hours -- Reading (Q1--Q4) and Directed Writing",
          "Language Paper 2: 2 hours -- Transactional Writing and Creative Writing",
          "Literature Paper 1: 1 hour 30 minutes -- Poetry and Prose",
          "Literature Paper 2: 1 hour 30 minutes -- Drama",
          "Total: approximately 7 hours of examined writing across your English subjects",
        ],
        teacherNotes:
          "Distribute the full exam timetable and mark-scheme breakdown for each paper. Students should have this on their revision planner. Emphasise that time management within each paper is as important as content knowledge.",
        activity: "Students complete a personal exam audit: which paper do they feel most confident about, and which is their highest priority for revision?",
      },
      {
        id: "y11-exam-prep-s2",
        slideNumber: 2,
        title: "Time Management -- Language Paper 1",
        bulletPoints: [
          "15 minutes reading time: read both texts carefully, annotate as you go",
          "Q1 (8 marks): 10 minutes -- retrieve and list, do not over-invest",
          "Q2 (8 marks): 10 minutes -- P-E-E, zoom in on language",
          "Q3 (8 marks): 12 minutes -- structure and perspective",
          "Q4 (16 marks): 20 minutes -- evaluate and compare with critical judgement",
          "Directed Writing (20 marks): 23 minutes -- plan first (3 min), write, proofread (2 min)",
        ],
        teacherNotes:
          "Walk through the time plan step by step. Ask students: which question do most people spend too long on? (Usually Q4 or DW.) Emphasise that Q1 should not take more than 10 minutes regardless of how easy it feels.",
      },
      {
        id: "y11-exam-prep-s3",
        slideNumber: 3,
        title: "Time Management -- Language Paper 2",
        bulletPoints: [
          "Section A Creative Writing: 45--50 minutes",
          "5 minutes planning: structure, voice, key images -- never skip this",
          "35--38 minutes writing: focus on craft, not quantity",
          "3--4 minutes proofreading: sentence-ending punctuation, spelling, consistency",
          "Section B Transactional Writing: 45--50 minutes using the same breakdown",
        ],
        teacherNotes:
          "Stress that planning is not wasted time. Students who plan produce more structured, coherent writing. Run a quick demonstration: write for 5 minutes with no plan, then write for 5 minutes with a 2-minute plan. Compare quality.",
        activity: "Timed planning drill: students plan both a creative and a transactional response in 4 minutes each. How much can they accomplish?",
      },
      {
        id: "y11-exam-prep-s4",
        slideNumber: 4,
        title: "Time Management -- Literature Papers",
        bulletPoints: [
          "Literature Paper 1 (Poetry and Prose): 1 hour 30 minutes, typically two questions",
          "Approximately 40--45 minutes per question including planning",
          "Literature Paper 2 (Drama): similar structure -- approximately 40--45 minutes per question",
          "Spend 5 minutes planning: thesis, 4--5 paragraph topics, key quotations",
          "Never write more than 45 minutes on one question -- move on and return if time allows",
        ],
        teacherNotes:
          "Many students run out of time on literature papers because they write too much for the first question. Explain that a good 40-minute response will score higher than a brilliant 70-minute one that leaves no time for the second question.",
      },
      {
        id: "y11-exam-prep-s5",
        slideNumber: 5,
        title: "Revision Strategies -- What Works",
        bulletPoints: [
          "Active recall: test yourself without notes -- this is more effective than re-reading",
          "Spaced repetition: revisit material at increasing intervals (1 day, 3 days, 1 week)",
          "Past papers: practice under timed conditions, then mark against the mark scheme",
          "Quotation banks: memorise 5--8 key quotations per text with their context and analysis",
          "Teach back: explain a topic to a friend or family member to consolidate understanding",
        ],
        teacherNotes:
          "Discuss the research on revision methods: highlighting and re-reading are among the least effective strategies; retrieval practice and spaced repetition are among the most effective. Students often resist this because retrieval feels harder.",
        activity: "Retrieval practice: without notes, students write down everything they know about one set text in 3 minutes. Compare with a partner.",
      },
      {
        id: "y11-exam-prep-s6",
        slideNumber: 6,
        title: "Building a Quotation Bank",
        bulletPoints: [
          "Select 6--8 versatile quotations per text that can be applied to multiple themes",
          "For each quotation: record the context, a language point, and a thematic link",
          "Practise embedding quotations fluently -- you should be able to recall them under pressure",
          "Prioritise short quotations: 3--6 words are easier to memorise and easier to analyse closely",
          "Test yourself: cover the quotation, read the context, and reproduce it from memory",
        ],
        teacherNotes:
          "Distribute blank quotation bank templates. Model how to complete one entry fully: quotation, speaker/context, language analysis note, thematic link. Students complete three entries for one text in the remaining lesson time.",
        activity: "Quotation bank work: students complete three entries for Of Mice and Men or An Inspector Calls using the template.",
      },
      {
        id: "y11-exam-prep-s7",
        slideNumber: 7,
        title: "Exam Day -- Practical Strategies",
        bulletPoints: [
          "Read every question carefully before beginning -- underline key words",
          "Plan before you write: 3--5 minutes per question, even in time pressure",
          "If you run short of time, write in bullet-pointed notes -- you may still earn partial marks",
          "Do not cross out unless you have time to replace: a crossed-out attempt scores zero",
          "Check: have you answered the question asked, not the question you hoped for?",
        ],
        teacherNotes:
          "Role-play the exam scenario: distribute a sample question, ask students to underline the key words and write what the question is actually asking before they begin. This addresses the common error of misreading the question.",
        activity: "Students practise underlining key words in five different exam questions and write one sentence explaining what each question requires.",
      },
      {
        id: "y11-exam-prep-s8",
        slideNumber: 8,
        title: "Final Preparation -- Your Action Plan",
        bulletPoints: [
          "List your three highest-priority revision areas based on today's audit",
          "Set specific, timed revision sessions: 40 minutes per session, one topic each",
          "Practise at least two full-length past paper questions under timed conditions before the exam",
          "Use the mark schemes to self-assess and identify patterns in your errors",
          "Revision alone is not enough -- you must practise writing to exam conditions",
        ],
        teacherNotes:
          "Students leave the lesson with a written action plan: three priority topics, three scheduled revision sessions, and one past paper question to complete before the next lesson. Collect action plans and follow up in the next session.",
        activity: "Action plan: students write a personalised 2-week revision schedule with specific topics, timings, and practice tasks for each English exam.",
      },
    ],
  },
];
