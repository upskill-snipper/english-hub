// @ts-nocheck
// Types come from the tiny ./flashcards/types module, not from flashcard-data.ts:
// importing them from the aggregate created a cycle back into the ~1.2 MB corpus.
import type { FlashcardDeck } from './flashcards/types'

export const examTechniqueDecks: FlashcardDeck[] = [
  // ─── 1. AQA Exam Technique ────────────────────────────────────────
  {
    id: 'aqa-exam-technique',
    title: 'AQA Exam Technique',
    description: 'Paper-by-paper question technique for AQA GCSE English Language & Literature',
    category: 'Exam Technique',
    board: 'AQA',
    cards: [
      // ── Paper 1: Explorations in Creative Reading and Writing ──
      {
        // 31 October 2026: this gave Paper 1's Question 1 the format of Paper 2's,
        // four true statements chosen from eight. From summer 2026 Paper 1's
        // Question 1 is four multiple-choice parts, 1.1 to 1.4, one answer each
        // (src/data/mark-scheme-guides/aqa-lang-paper1.ts); before that it was a
        // list of four things. aqa-et-6 said the two were the same format.
        id: 'aqa-et-1',
        front: 'AQA Language Paper 1, Question 1',
        back: 'WHAT IT TESTS: AO1 - Identify and interpret explicit/implicit information.\n\nMARKS: 4 marks\nTIMING: 5 minutes\n\nAPPROACH: Four multiple-choice parts, 1.1 to 1.4, on the lines named at the start of the question. Each part offers a few possible answers (three on the sample paper): shade the circle next to the one that is correct.\n\nKEY TIPS:\n• Read every option before selecting.\n• Find the words in the source that prove your answer before you shade.\n• Watch for subtle changes in wording - "always" vs "sometimes" can flip truth.\n• An option that repeats a word from the source is not always right: the correct answer often says the same thing in different words.\n\nCOMMON MISTAKES: Shading more than one circle in a part, rushing and misreading small details, not reading the exact line references given.',
      },
      {
        id: 'aqa-et-2',
        front: 'AQA Language Paper 1, Question 2',
        back: 'WHAT IT TESTS: AO2 - How does the writer use language to...\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Identify specific language features (word-level, then sentence-level). Use short, embedded quotes. Analyse the EFFECT of each technique on the reader.\n\nSENTENCE STARTERS:\n• "The writer uses [technique] in the phrase \'...\' to suggest..."\n• "The connotations of \'...\' imply..."\n• "This creates an effect of... for the reader because..."\n\nSTRUCTURE: 3 detailed paragraphs > 5 shallow ones.\n\nCOMMON MISTAKES: Feature-spotting without analysis, ignoring word-level detail, writing about structure (that is Q3).',
      },
      {
        id: 'aqa-et-3',
        front: 'AQA Language Paper 1, Question 3',
        back: 'WHAT IT TESTS: AO2 - How does the writer use structure to...\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Think about the WHOLE text - beginning, middle, end. Consider: focus shifts, narrative perspective changes, sentence length changes, paragraphing, cyclical structure, contrast, withholding information.\n\nSENTENCE STARTERS:\n• "At the opening, the writer focuses on... which establishes..."\n• "The writer then shifts the focus to... which creates..."\n• "The reader\'s attention is drawn to... through the use of..."\n\nCOMMON MISTAKES: Writing about language instead of structure, not covering the whole text, confusing structural features with language features.',
      },
      {
        id: 'aqa-et-4',
        front: 'AQA Language Paper 1, Question 4',
        back: 'WHAT IT TESTS: AO4 - Critically evaluate a statement about the text.\n\nMARKS: 20 marks\nTIMING: 20-25 minutes\n\nAPPROACH: You are given a statement (e.g., "The writer makes the reader feel sympathy for the character"). You must argue to what extent you agree using textual evidence.\n\nSTRUCTURE:\n1. State your position clearly.\n2. Select quotes that support and/or challenge the statement.\n3. Analyse language/structure for each quote.\n4. Offer a personal, evaluative response.\n\nSENTENCE STARTERS:\n• "I agree that... because the writer uses..."\n• "This is convincing because..."\n• "However, it could also be argued that..."\n\nCOMMON MISTAKES: Not engaging with the statement, retelling the story, forgetting to evaluate (agree/disagree).',
      },
      {
        id: 'aqa-et-5',
        front: 'AQA Language Paper 1, Question 5',
        back: "WHAT IT TESTS: AO5 (Content & Organisation) + AO6 (Technical Accuracy).\n\nMARKS: 40 marks (24 + 16)\nTIMING: 45 minutes (5 mins planning, 35 writing, 5 checking)\n\nAPPROACH: Descriptive or narrative writing. Choose ONE task. Plan before writing.\n\nKEY STRATEGIES:\n• Use a range of sentence types (short for impact, complex for detail).\n• Include sensory imagery (5 senses).\n• Vary paragraph lengths.\n• Show, don't tell emotions.\n• Use ambitious vocabulary and figurative language.\n• Open with a hook; end with resonance.\n\nPLANNING: Who, Where, What happens, What's the emotion, What's the ending.\n\nCOMMON MISTAKES: No planning, overcomplicating the plot, weak openings, ignoring SPaG, not paragraphing.",
      },
      // ── Paper 2: Writers' Viewpoints and Perspectives ──
      {
        id: 'aqa-et-6',
        front: 'AQA Language Paper 2, Question 1',
        back: "WHAT IT TESTS: AO1 - Identify true statements about Source A.\n\nMARKS: 4 marks\nTIMING: 5 minutes\n\nAPPROACH: Select 4 TRUE statements from 8 options about the lines named in Source A. (Paper 1's Question 1 is different: four multiple-choice parts.)\n\nKEY TIPS:\n• Only refer to the lines specified.\n• Read carefully - one word can change meaning.\n• Don't overthink it; this is retrieval, not inference.\n\nCOMMON MISTAKES: Referring to Source B, selecting more than 4, not reading all options.",
      },
      {
        id: 'aqa-et-7',
        front: 'AQA Language Paper 2, Question 2',
        back: 'WHAT IT TESTS: AO1 - What you can infer from both sources about the differences the question names. (Before 2026 the question asked for a summary.)\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Use BOTH sources. Find clear points of comparison. Use short quotes from each source as evidence. Focus on INFERENCES, not just surface detail.\n\nSTRUCTURE:\n• Point about Source A + quote, then contrast/compare with Source B + quote.\n• Aim for 3-4 comparative paragraphs.\n\nSENTENCE STARTERS:\n• "Both sources suggest that..."\n• "However, while Source A implies..., Source B suggests..."\n\nCOMMON MISTAKES: Only writing about one source, describing rather than inferring, copying out long quotes.',
      },
      {
        id: 'aqa-et-8',
        front: 'AQA Language Paper 2, Question 3',
        back: 'WHAT IT TESTS: AO2 - How does the writer use language to...\n\nMARKS: 12 marks\nTIMING: 12-15 minutes\n\nAPPROACH: Analyse ONE source only (the one specified). Same skills as Paper 1 Q2 but with more depth and 4 extra marks.\n\nSTRUCTURE: 3-4 paragraphs, each with: technique + embedded quote + detailed effect on reader.\n\nSENTENCE STARTERS:\n• "The writer employs [technique] in \'...\' which conveys..."\n• "The reader is positioned to feel... because..."\n\nCOMMON MISTAKES: Writing about both sources, not identifying specific techniques, surface-level analysis.',
      },
      {
        id: 'aqa-et-9',
        front: 'AQA Language Paper 2, Question 4',
        back: 'WHAT IT TESTS: AO3 - Compare how two writers convey their perspectives.\n\nMARKS: 16 marks\nTIMING: 20-25 minutes\n\nAPPROACH: Compare BOTH sources throughout. Identify each writer\'s viewpoint, then compare HOW they present it using language and structural methods.\n\nSTRUCTURE:\n1. State both writers\' perspectives.\n2. Compare methods: tone, language techniques, structure, rhetorical devices.\n3. Use connectives of comparison throughout.\n\nSENTENCE STARTERS:\n• "Both writers convey... however, Writer A uses... whereas Writer B..."\n• "While Source A adopts a [tone] through..., Source B contrasts this with..."\n\nCOMMON MISTAKES: Treating each source separately (no comparison), forgetting to analyse methods, only comparing content.',
      },
      {
        id: 'aqa-et-10',
        front: 'AQA Language Paper 2, Question 5',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation) + AO6 (Technical Accuracy).\n\nMARKS: 40 marks (24 + 16)\nTIMING: 45 minutes (5 planning, 35 writing, 5 checking)\n\nFORM: Writing to present a viewpoint - could be a letter, article, speech, or essay.\n\nKEY STRATEGIES:\n• Match the form (e.g., "Dear Sir/Madam" for a letter, headline for an article).\n• Use persuasive devices: rhetorical questions, tricolon, direct address, emotive language, anecdote, statistics, counter-argument.\n• Plan 4-5 paragraphs with a clear line of argument.\n• Include a powerful opening and a memorable conclusion.\n\nCOMMON MISTAKES: Ignoring the form, ranting without structure, weak SPaG, no counter-argument.',
      },
      // ── Literature Paper 1: Shakespeare and the 19th-Century Novel ──
      {
        id: 'aqa-et-11',
        front: 'AQA Literature Paper 1 - Shakespeare (Section A)',
        back: 'WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context).\n\nMARKS: 30 marks + 4 SPaG\nTIMING: 55 minutes (including 5 mins planning)\n\nAPPROACH: You get an extract + an essay question. Write about the extract AND the rest of the play.\n\nSTRUCTURE:\n1. Brief intro - answer the question directly.\n2. 2-3 paragraphs on the EXTRACT (close language analysis).\n3. 2-3 paragraphs on the WIDER PLAY (themes, other scenes).\n4. Weave in context naturally.\n\nSENTENCE STARTERS:\n• "Shakespeare presents [character/theme] as... through..."\n• "The [technique] in \'...\' suggests..."\n• "A Jacobean/Elizabethan audience would have..."\n\nCOMMON MISTAKES: Only writing about the extract, bolting on context, retelling the plot.',
      },
      {
        id: 'aqa-et-12',
        front: 'AQA Literature Paper 1 - 19th-Century Novel (Section B)',
        back: "WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context).\n\nMARKS: 30 marks\nTIMING: 50 minutes (including 5 mins planning)\n\nAPPROACH: Extract + essay question. Write about the extract AND the wider novel.\n\nSTRUCTURE:\n1. Intro - thesis statement.\n2. 2-3 paragraphs on the extract.\n3. 2-3 paragraphs on the wider novel.\n4. Embed context (Victorian attitudes, social class, gender, etc.).\n\nKEY TIPS:\n• Zoom into individual words in the extract.\n• Link to the writer's intentions (Dickens wanted to expose poverty, etc.).\n• Discuss structural choices as well as language.\n\nCOMMON MISTAKES: Not linking to the wider text, context as a bolt-on paragraph, not answering the question.",
      },
      // ── Literature Paper 2: Modern Text, Poetry, Unseen Poetry ──
      {
        id: 'aqa-et-13',
        front: 'AQA Literature Paper 2 - Modern Text (Section A)',
        back: "WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context) - NO extract given.\n\nMARKS: 30 marks + 4 SPaG\nTIMING: 45 minutes\n\nAPPROACH: Choose one question from two. You must write from memory - no extract provided. You need to know quotes.\n\nSTRUCTURE:\n1. Brief intro with thesis.\n2. 4-5 paragraphs, each covering a different moment/aspect.\n3. Each paragraph: Point + Quote + Analysis + Context.\n\nKEY TIPS:\n• Memorise 15-20 key quotes per text.\n• Track the theme/character across the WHOLE text.\n• Discuss the writer's craft (why they made these choices).\n\nCOMMON MISTAKES: Not knowing enough quotes, only writing about one part of the text, ignoring the writer's methods.",
      },
      {
        id: 'aqa-et-14',
        front: 'AQA Literature Paper 2 - Poetry Anthology (Section B)',
        back: 'WHAT IT TESTS: AO1 (Response), AO2 (Methods), AO3 (Context), AO4 (Comparison).\n\nMARKS: 30 marks\nTIMING: 45 minutes\n\nAPPROACH: One named poem is printed. Compare it with ONE other poem of your choice from the anthology.\n\nSTRUCTURE:\n1. Brief intro - state both poems and your argument.\n2. Alternate between poems OR write about one then the other (alternating is better).\n3. Each paragraph: Point + Quote from Poem A + Analysis + Link to Poem B + Quote + Analysis.\n\nKEY TIPS:\n• Prepare comparison pairs in advance.\n• Compare methods (language, structure, form) as well as themes.\n• Use comparative connectives throughout.\n\nCOMMON MISTAKES: Not comparing enough, only discussing content, not analysing the printed poem in detail.',
      },
      {
        id: 'aqa-et-15',
        front: 'AQA Literature Paper 2 - Unseen Poetry (Section C)',
        back: 'WHAT IT TESTS: Part 1 - AO1 + AO2 (24 marks). Part 2 - AO2 comparison (8 marks).\n\nTIMING: Part 1 = 30 minutes. Part 2 = 15 minutes.\n\nPART 1 APPROACH:\n1. Read the poem 3 times (overview, detail, meaning).\n2. Annotate: imagery, structure, tone shifts, key words.\n3. Write 3-4 analytical paragraphs.\n\nPART 2 APPROACH:\n• Compare ONE method between both poems.\n• Write 2-3 focused paragraphs.\n• Keep it concise - don\'t repeat Part 1.\n\nSENTENCE STARTERS:\n• "The poet conveys [theme] through the use of..."\n• "Both poets explore... however, while Poem A..., Poem B..."\n\nCOMMON MISTAKES: Spending too long on Part 1, not comparing in Part 2, paraphrasing instead of analysing.',
      },
      // ── SPaG and AO4 Strategy ──
      {
        id: 'aqa-et-16',
        front: 'AQA SPaG Marks - How to Secure All 4',
        back: 'SPaG is worth 4 marks on Shakespeare and Modern Text questions.\n\nLEVEL 4 (4 marks) requires:\n• Consistent accurate spelling including complex/ambitious vocabulary.\n• Consistent accurate punctuation - commas, semicolons, apostrophes, colons.\n• Varied sentence forms used effectively for clarity and effect.\n\nSTRATEGY:\n• Save 3-5 minutes at the end for proofreading.\n• Check: capital letters, full stops, comma splicing, apostrophes.\n• Use semicolons and colons deliberately (even one correct use shows range).\n• Spell character names and key terms correctly.\n\nEASY WINS: Know how to spell "Shakespeare," your character names, and 10 analytical words (juxtaposition, foreshadowing, symbolism, etc.).',
      },
      {
        id: 'aqa-et-17',
        front: 'AQA - How to Embed Context (AO3)',
        back: 'Context must feel WOVEN IN, not bolted on.\n\nBAD: "In Victorian times, women had no rights. This links to the text because..."\nGOOD: "Dickens critiques the rigid class system of Victorian England through Pip\'s shame at his \'coarse hands,\' reflecting how social mobility was defined by appearance."\n\nSTRATEGIES:\n• Link context to the writer\'s PURPOSE ("Shelley uses the Creature to challenge Enlightenment arrogance").\n• Use phrases like: "reflecting contemporary anxieties about...", "Dickens, writing for a middle-class audience, exposes...", "Shakespeare subverts the patriarchal expectations of his audience by...".\n\nKEY CONTEXTS TO KNOW: Social class, gender roles, religion, political climate, the writer\'s own life/views.',
      },
      {
        id: 'aqa-et-18',
        front: 'AQA - Time Management Across Papers',
        back: 'LANGUAGE PAPER 1 (1 hr 45 mins):\n• Q1: 5 mins\n• Q2: 10 mins\n• Q3: 10 mins\n• Q4: 20 mins\n• Q5: 45 mins\n• Buffer: 15 mins (use for checking/extra Q5 time)\n\nLANGUAGE PAPER 2 (1 hr 45 mins):\n• Q1: 5 mins\n• Q2: 10 mins\n• Q3: 15 mins\n• Q4: 20 mins\n• Q5: 45 mins\n• Buffer: 10 mins\n\nLITERATURE PAPER 1 (1 hr 45 mins):\n• Shakespeare: 55 mins\n• Novel: 50 mins\n\nLITERATURE PAPER 2 (2 hrs 15 mins):\n• Modern Text: 45 mins\n• Poetry: 45 mins\n• Unseen Poetry: 45 mins\n\nGOLDEN RULE: If you are running out of time, write bullet points rather than leaving a blank.',
      },
      {
        id: 'aqa-et-19',
        front: 'AQA - How to Open a Literature Essay',
        back: 'Your opening should immediately answer the question with a clear thesis.\n\nFORMULA: [Writer\'s name] presents [character/theme] as [your argument], using [method] to [effect/purpose].\n\nEXAMPLES:\n• "Shakespeare presents Lady Macbeth as a subversion of femininity, using imperative verbs and dark imagery to position her as the driving force behind regicide."\n• "Priestley uses the Inspector as a mouthpiece for socialist ideology, structuring the play as a moral interrogation of capitalist complacency."\n\nAVOID:\n• "In this essay I will..."\n• Starting with context.\n• Retelling the plot.\n\nA strong opening tells the marker you know your argument before you start writing.',
      },
      {
        id: 'aqa-et-20',
        front: 'AQA - Paper 1 Q5: Descriptive vs Narrative',
        back: "You usually get a CHOICE: one descriptive task, one narrative task.\n\nDESCRIPTIVE WRITING:\n• Freeze a moment in time - don't tell a story.\n• Use the 5 senses (sight, sound, smell, taste, touch).\n• Zoom in on small details, then pull out to the wider scene.\n• Vary sentence length: long flowing descriptions + short punchy sentences.\n\nNARRATIVE WRITING:\n• Keep the plot SIMPLE - one event, one character, one setting.\n• Focus on HOW you tell it, not what happens.\n• Use flashbacks, cyclical structure, or in medias res.\n• Show emotions through actions and imagery.\n\nCHOOSE WISELY: If you struggle with plot, go descriptive. If you struggle with sustained imagery, go narrative.",
      },
      {
        id: 'aqa-et-21',
        front: 'AQA - What Markers Actually Look For (Top Band)',
        back: 'LANGUAGE PAPERS - TOP BAND:\n• "Perceptive, detailed analysis" (Q2/Q3/Q4)\n• "Judicious" use of quotations (short, embedded)\n• "Compelling, convincing" writing (Q5)\n• "Extensive, ambitious vocabulary" (Q5)\n\nLITERATURE PAPERS - TOP BAND:\n• "Critical, exploratory" response\n• "Judicious" use of precise references\n• Analysis of writer\'s methods with "subject terminology used judiciously"\n• Ideas about context "convincingly integrated"\n\nTRANSLATION:\n• "Perceptive" = you see what others miss.\n• "Judicious" = short, well-chosen, embedded quotes.\n• "Critical" = you question, challenge, explore multiple readings.\n• "Convincingly integrated" = context supports your point, not stuck on as a separate sentence.',
      },
      {
        id: 'aqa-et-22',
        front: 'AQA - How to Analyse a Quote (3-Step Method)',
        back: 'STEP 1: IDENTIFY - Name the technique and embed the quote.\n"The writer uses [technique] in the phrase \'...\'"\n\nSTEP 2: EXPLAIN - What does it suggest/imply/convey?\n"This suggests/implies/conveys... The connotations of \'[word]\' are..."\n\nSTEP 3: EFFECT - How does the reader respond? OR What is the writer\'s purpose?\n"This positions the reader to feel... because..."\nOR "The writer does this to..."\n\nEXAMPLE:\n"Stevenson uses animalistic imagery in \'trampled calmly\' to depict Hyde as devoid of human empathy. The oxymoron fuses violence with indifference, positioning the reader to view Hyde as monstrous. This reflects Victorian fears about humanity\'s capacity for repressed savagery."\n\nThis method = AO2 marks every time.',
      },
      {
        id: 'aqa-et-23',
        front: 'AQA - Choosing Your Poetry Comparison Poem',
        back: 'When the exam names a poem, you must choose the BEST comparison from the anthology.\n\nHOW TO PREPARE:\n• Learn comparison PAIRS in advance - for each poem, know 2-3 good matches.\n• Match by THEME first (both about conflict? power? identity?).\n• Then compare METHODS (both use dramatic monologue? contrasting structures?).\n\nIN THE EXAM:\n• Read the question carefully - it tells you the theme.\n• Pick the poem you know best AND that has genuine points of comparison.\n• If stuck, pick the poem where you know the most quotes.\n\nGOOD COMPARISON = same theme but DIFFERENT approach.\nE.g., "Both Ozymandias and My Last Duchess explore power, but Shelley shows power\'s decay while Browning shows power\'s abuse."',
      },
      {
        id: 'aqa-et-24',
        front: 'AQA - Counter-Arguments in Paper 2 Q5',
        back: 'Including a counter-argument shows sophistication and earns top-band marks.\n\nHOW TO DO IT:\n1. State the opposing view clearly.\n2. Concede a small point.\n3. Refute it with your stronger argument.\n\nTEMPLATE:\n"Some may argue that [opposing view]. While there is some truth to this, it fails to account for [your point]. In reality, [your stronger argument] because [evidence/reasoning]."\n\nEXAMPLE:\n"Opponents of school uniform argue it suppresses individuality. While self-expression matters, true individuality lies in ideas, not clothing. Uniform removes the daily anxiety of appearance, allowing students to focus on what genuinely defines them."\n\nPLACEMENT: Usually best as your penultimate paragraph, before a strong conclusion.',
      },
      {
        id: 'aqa-et-25',
        front: 'AQA - How to Write a Strong Conclusion',
        back: 'A strong conclusion can lift your essay by a mark band.\n\nFOR LITERATURE:\n• Return to your thesis and refine it.\n• Zoom out to the writer\'s BIG message or purpose.\n• End with a punchy, memorable final sentence.\n\nTEMPLATE: "Ultimately, [Writer] presents [character/theme] as [your argument]. Through [key method], they [effect], leaving the audience to reflect on [bigger idea]."\n\nFOR LANGUAGE PAPER 2 Q5:\n• Circle back to your opening idea (cyclical).\n• End with a powerful image, rhetorical question, or call to action.\n• Leave the reader thinking.\n\nAVOID:\n• "In conclusion..." (try "Ultimately," or "It is clear that...")\n• Introducing new points.\n• Simply repeating the introduction.\n\nAIM: Make the marker nod.',
      },
    ],
  },

  // ─── 2. Edexcel Exam Technique ─────────────────────────────────────
  {
    id: 'edexcel-exam-technique',
    title: 'Edexcel Exam Technique',
    description: 'Paper-by-paper question technique for Edexcel GCSE English Language & Literature',
    category: 'Exam Technique',
    board: 'Edexcel',
    cards: [
      // ── Language Paper 1: Fiction and Imaginative Writing ──
      // 31 October 2026: edx-et-1 to 8 and 15 to 18 were rewritten to the 1EN0 guides
      // (src/data/mark-scheme-guides/edexcel-lang-paper1.ts, edexcel-lang-paper2.ts).
      // Paper 1 had six reading questions on a 20th-century extract, among them a
      // structure-only Q4 and a linked-texts Q6 the paper does not set; Paper 2 had a
      // 19th-century source, a reading section of 40 marks and two writing tasks of 20.
      // The real papers: Paper 1, one 19th-century extract and four questions (24
      // marks); Paper 2, two 20th- and 21st-century texts, seven questions (56) and
      // one piece of writing, Question 8 or 9. Card ids are kept so progress keeps.
      {
        id: 'edx-et-1',
        front: 'Edexcel Language Paper 1 - Section A Overview',
        back: 'PAPER: Fiction and Imaginative Writing\nSECTION A: Reading (24 marks), about 1 hour\nSOURCE: One unseen extract of about 650 words from a 19th-century novel or story.\n\nQUESTIONS:\n• Q1 (1 mark): One-word/short answer retrieval.\n• Q2 (2 marks): Two points from a short section.\n• Q3 (6 marks): Language AND structure in a short section.\n• Q4 (15 marks): Evaluate how successfully the writer creates an effect.\n\nTIMING TIP: About 10 minutes reading, then about 2, 4, 12 and 32 minutes on Q1 to Q4. Q4 deserves the most time.\n\nKEY DIFFERENCE FROM AQA: Edexcel has 4 reading questions here too, but the extract is 19th-century and the long question is worth 15, not 20.',
      },
      {
        id: 'edx-et-2',
        front: 'Edexcel Language Paper 1, Q3 - Language and Structure (6 marks)',
        back: 'WHAT IT TESTS: AO2 - How the writer uses language AND structure to show something the question names.\n\nAPPROACH:\n• Stay inside the short section the question names.\n• Pick 2 language features and 1 structural feature.\n• Use embedded quotes.\n• Analyse the EFFECT on the reader.\n\nSENTENCE STARTERS:\n• "The writer\'s use of [technique] in \'...\' creates a sense of..."\n• "The section opens with... and ends on..., which..."\n\nFOR 6 MARKS:\n• 3 short paragraphs: two on language, one on structure.\n• An answer on language alone stays in Level 1.\n\nCOMMON MISTAKES: Feature-spotting without effect, quoting long passages instead of embedding, leaving structure out.',
      },
      {
        id: 'edx-et-3',
        front: 'Edexcel Language Paper 1, Q3 - The Structure Half',
        back: 'Q3 on Paper 1 asks for language AND structure. This card is the structure half.\n\nKEY STRUCTURAL FEATURES:\n• Opening focus vs ending focus (shift in attention).\n• Narrative perspective/voice changes.\n• Pace - sentence length, paragraph length.\n• Foreshadowing, flashbacks, time shifts.\n• Tension building and release.\n• Contrast between parts of the section.\n\nAPPROACH:\n• Look at how the section the question names opens, develops and ends.\n• Explain WHY the writer ordered it this way.\n\nSENTENCE STARTERS:\n• "The writer opens by... which establishes..."\n• "There is a shift at line X where the focus moves to..."\n• "The section ends on..., leaving the reader..."\n\nCOMMON MISTAKES: Writing about the whole extract instead of the section named, confusing language with structure.',
      },
      {
        id: 'edx-et-4',
        front: 'Edexcel Language Paper 1, Q4 - Critical Evaluation (15 marks)',
        back: 'WHAT IT TESTS: AO4 - Evaluate texts critically, supporting with textual references.\n\nMARKS: 15 marks\nTIMING: about 32 minutes\n\nAPPROACH: The question names an effect the writer is trying to create, such as tension or sympathy for a character, and asks how successfully it is achieved. Recent papers have asked about the whole extract.\n\nSTRUCTURE:\n1. Open with a clear verdict on how successful the writer is.\n2. Choose 3-4 quotes that support your argument.\n3. For each: quote + what it does + how well it works.\n4. Use evaluative language throughout.\n\nEVALUATIVE PHRASES:\n• "The writer effectively/convincingly..."\n• "This is particularly successful because..."\n• "The reader is compelled to... which demonstrates..."\n\nCOMMON MISTAKES: Forgetting to evaluate (just analysing), retelling the story, listing techniques with no view on how well they work.',
      },
      {
        id: 'edx-et-5',
        front: 'Edexcel Language Paper 1 - Section B: Imaginative Writing (40 marks)',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation: 24 marks) + AO6 (Technical Accuracy: 16 marks).\n\nCHOICE: Two tasks, Q5 or Q6, both linked by theme to the extract. You do ONE.\nFor example a story, a description or a monologue. One task comes with two pictures you can use for ideas, or ignore.\n\nTIMING: 45 minutes (5 plan, 35 write, 5 check)\n\nKEY STRATEGIES:\n• Plan a clear structure (beginning, middle, end).\n• Use 5+ different sentence types.\n• Include figurative language (simile, metaphor, personification).\n• Vary paragraph lengths for effect.\n• Craft a powerful opening and a resonant ending.\n\nTOP LEVEL (AO5 20-24, AO6 14-16):\n• Writing that steers the reader in subtle ways, in a confident voice.\n• A whole piece that holds together.\n• Ambitious vocabulary used with purpose.\n• Errors so rare they never get in the way.\n\nCOMMON MISTAKES: Overcomplicating the plot, rushed endings, not checking spelling.',
      },
      // ── Language Paper 2: Non-Fiction and Transactional Writing ──
      {
        id: 'edx-et-6',
        front: 'Edexcel Language Paper 2 - Section A Overview',
        back: "PAPER: Non-Fiction and Transactional Writing\nSECTION A: Reading (56 marks), about 1 hour 20 minutes. Two unseen non-fiction texts from the 20th and 21st centuries, linked by a theme.\n\nQUESTIONS:\n• Q1 (2 marks) and Q2 (2 marks): Retrieval from Text 1.\n• Q3 (15 marks): Language and structure in Text 1.\n• Q4 (1 mark) and Q5 (1 mark): Retrieval from Text 2.\n• Q6 (15 marks): Evaluate how successfully the writer of Text 2 achieves an aim.\n• Q7(a) (6 marks): Synthesise the similarities across both texts.\n• Q7(b) (14 marks): Compare the writers' perspectives and methods.\n\nKEY DIFFERENCE: Edexcel puts the questions on Text 1 first, then Text 2, and keeps both texts together for Question 7.\n\nTIMING: Read Text 1 (6 mins), Q1-Q2 4 mins, Q3 18. Read Text 2 (6), Q4-Q5 2 mins, Q6 18. Q7(a) 8, Q7(b) 18.",
      },
      {
        id: 'edx-et-7',
        front: 'Edexcel Language Paper 2, Q7(b) - Compare Perspectives (14 marks)',
        back: "WHAT IT TESTS: AO3 - Compare writers' ideas and perspectives, and how they are conveyed.\n\nAPPROACH:\n• Identify each writer's viewpoint/attitude clearly.\n• Compare WHAT they think and HOW they express it.\n• Cover differences as well as similarities.\n• Use evidence from both texts, evenly: an answer on one text in detail cannot go above Level 2.\n\nSTRUCTURE:\n1. State both writers' positions.\n2. Compare within each paragraph (Text 1 and Text 2 per point).\n3. 3-4 paragraphs minimum.\n\nSENTENCE STARTERS:\n• \"The writer of Text 1 believes... as evidenced by '...', whereas the writer of Text 2 argues...\"\n• \"Both writers share the view that... however, they differ in...\"\n\nCOMMON MISTAKES: Writing about each text separately with no comparison, comparing content but not methods, not using comparative connectives.",
      },
      {
        id: 'edx-et-8',
        front: 'Edexcel Language Paper 2 - Section B: Transactional Writing (40 marks)',
        back: "WHAT IT TESTS: AO5 (Content & Organisation: 24 marks) + AO6 (Technical Accuracy: 16 marks).\n\nONE task: choose Question 8 OR Question 9.\nForms: for example an article, a letter, a review, a speech or a section of a guide, for a set audience and purpose, linked by theme to the reading.\n\nTIMING: 45 minutes (5 plan, 35 write, 5 check).\n\nKEY STRATEGIES:\n• Match the FORM precisely (e.g., letter = addresses, sign-off; article = headline, subheadings).\n• Use the task's suggested points as a starting plan for 4-5 paragraphs.\n• Use persuasive/rhetorical devices chosen for the purpose.\n• Vary tone to match purpose and audience.\n\nCRITICAL: Read both tasks before you choose, then give your one piece the full 45 minutes.\n\nCOMMON MISTAKES: Ignoring form conventions, leaning on the reading texts instead of your own ideas, no time left to proofread.",
      },
      // ── Literature Paper 1: Shakespeare and Post-1914 Literature ──
      // 2 October 2026: edx-et-9 to 14 and 19 were rewritten to Pearson's 1ET0
      // specification (Issue 2). They made Shakespeare one essay with 4 SPaG marks, gave
      // the post-1914 essay an extract and no context marks, put SPaG and AO3 on the novel,
      // invented a second anthology question "on two named poems" and a Section C unseen
      // of 12 + 8 marks, and called AO4 "alternative interpretations". AO4 is SPaG, 8
      // marks, on the post-1914 essay only.
      {
        // 9 October 2026: the timing said about 50 minutes, 25 per part. The 1ET0/01
        // question paper says about 55 minutes on Section A, divided equally between the parts.
        id: 'edx-et-9',
        front: 'Edexcel Literature Paper 1 - Shakespeare (Section A)',
        back: 'WHAT IT TESTS: Part (a) AO2 (20 marks); part (b) AO1 (15 marks) and AO3 (5 marks).\n\nMARKS: 40 marks: part (a) 20, part (b) 20. No SPaG on this question.\nTIMING: About 55 minutes, divided equally between the parts\n\nFORMAT: ONE question in two parts. Part (a) prints an extract of about 30 lines; part (b) asks how the theme is explored elsewhere in the play.\n\nAPPROACH:\n1. Spend 3-5 minutes reading and annotating the extract.\n2. Part (a): close analysis of language, form and structure in the extract only.\n3. Part (b): range across the rest of the play, from memory.\n4. Integrate context in part (b), where it earns 5 marks.\n\nSTRUCTURE:\n• Part (a): 3-4 paragraphs on the extract.\n• Part (b): a clear argument, then 3-4 paragraphs on other moments in the play.\n\nALTERNATIVE READINGS strengthen part (b), which is marked for AO1:\n• "Alternatively, this could suggest..."\n• "A feminist reading might interpret this as..."',
      },
      {
        id: 'edx-et-10',
        front: 'Edexcel Literature Paper 1 - Post-1914 British Play/Novel (Section B)',
        back: "WHAT IT TESTS: AO1 (16 marks), AO3 (16 marks), AO4 (8 marks).\n\nMARKS: 40 marks\nTIMING: 50 minutes, including 5 to proofread\n\nFORMAT: ONE essay from a choice of two. Each question opens with a short quotation; NO extract is printed.\n\nAPPROACH:\n• Build a clear argument (AO1) supported by references from across the text.\n• Context IS assessed: 16 marks for AO3. Weave it into your argument.\n• Use the writer's methods as evidence for your points; AO2 is not marked here.\n• Proofread: AO4 rewards spelling, punctuation, grammar and a range of vocabulary.\n\nSTRUCTURE:\n• Intro: a clear argument that answers the question.\n• Body: 4 paragraphs across the whole text, each linking a moment to context.\n• Conclusion.\n\nCOMMON MISTAKES: Retelling the plot, bolting context on at the end, skipping the proofread.",
      },
      // ── Literature Paper 2: 19th-Century Novel and Poetry ──
      {
        // 9 October 2026: the timing said about 60 minutes, 30 per part. Pearson's 1ET0/02
        // question paper says about 55 minutes on Section A, divided equally between the parts.
        id: 'edx-et-11',
        front: 'Edexcel Literature Paper 2 - 19th-Century Novel (Section A)',
        back: 'WHAT IT TESTS: Part (a) AO2; part (b) AO1.\n\nMARKS: 40 marks: part (a) 20, part (b) 20. No SPaG on Paper 2.\nTIMING: About 55 minutes, divided equally between the parts\n\nFORMAT: ONE question in two parts. Part (a) prints an extract of about 400 words; part (b) is an essay on the novel as a whole.\n\nAPPROACH:\n• Part (a): close analysis of language, form and structure in the extract only.\n• Part (b): an argument about the whole novel, with references from memory.\n• Context earns no marks of its own here; use it only where it sharpens a point.\n\nCONTEXT IDEAS (to explain the writer\'s choices):\n• Social class and inequality.\n• Gender roles and expectations.\n• Industrialisation and urbanisation.\n• Religion and morality.\n• The role of the writer as social critic.\n\nSENTENCE STARTERS:\n• "[Author] uses [character] to expose/challenge/reinforce..."\n• "A contemporary reader might have viewed this as... whereas a modern reader..."\n\nCOMMON MISTAKES: Writing about the wider novel in part (a), retelling the plot in part (b).',
      },
      {
        id: 'edx-et-12',
        front: 'Edexcel Literature Paper 2 - Poetry Anthology (Section B Part 1)',
        back: 'WHAT IT TESTS: AO2 (15 marks), AO3 (5 marks).\n\nMARKS: 20 marks\nONE question: the paper prints a named poem from your collection, and you compare it with ONE other poem of your choice from the same collection, from memory.\nTIMING: 35 minutes\n\nAPPROACH:\n• Choose your second poem quickly, for the strongest links.\n• Alternate between the poems in each paragraph.\n• Analyse methods (language, form, structure) in both poems.\n• Include brief, relevant context for each poem.\n\nCOMPARATIVE CONNECTIVES:\n• "Similarly/Likewise/In contrast/Conversely/However/Whereas"\n\nCOMMON MISTAKES: Writing about one poem then the other, choosing a weak partner poem, only discussing content.',
      },
      {
        // 9 October 2026: the timing said 35 minutes. Pearson's 1ET0/02 question paper says
        // about 45 minutes on Section B Part 2, against 35 on the anthology question.
        id: 'edx-et-13',
        front: 'Edexcel Literature Paper 2 - Unseen Poetry (Section B Part 2)',
        back: 'WHAT IT TESTS: AO1 (8 marks), AO2 (12 marks).\n\nMARKS: 20 marks\nTIMING: About 45 minutes\n\nFORMAT: ONE question comparing two unseen contemporary poems linked by a theme. There is no single-poem question first.\n\nAPPROACH:\n• Read both poems twice before writing.\n• Compare METHODS, not just content, in every paragraph.\n• 3-4 paragraphs with clear comparison throughout.\n\nFIRST READ STRATEGY:\n1. What is each poem about? (Subject/theme)\n2. How does each speaker feel? (Tone/mood)\n3. What techniques stand out? (Language/structure)\n\nCOMMON MISTAKES: Writing about one poem then the other, paraphrasing, not identifying the tone.',
      },
      // ── General Edexcel strategies ──
      {
        id: 'edx-et-14',
        front: 'Edexcel - Alternative Interpretations (AO1)',
        back: 'In Edexcel Literature, considering different readings is part of a critical, informed personal response (AO1). AO4 is something else: spelling, punctuation and grammar, marked only on the Paper 1 post-1914 essay.\n\nWHAT IT MEANS: Show you can consider DIFFERENT READINGS of a text.\n\nHOW TO DO IT:\n• "While some readers might interpret this as..., others could argue..."\n• "A Marxist/feminist/postcolonial reading suggests..."\n• "On the surface this implies..., yet on closer inspection..."\n• "The ambiguity of \'...\' allows for multiple readings..."\n\nSIMPLE VERSION:\n• Identify what seems obvious.\n• Then offer a DIFFERENT angle.\n• Use "alternatively," "however," "conversely."\n\nWHEN TO USE: In the answers marked for AO1 - Shakespeare part (b), the post-1914 essay, the novel part (b) and the unseen comparison - aim for at least 2 moments where you explore an alternative reading.',
      },
      {
        id: 'edx-et-15',
        front: 'Edexcel - Mastering Form Conventions (Paper 2 Writing)',
        back: 'Edexcel Paper 2 Section B sets ONE writing task, chosen from two (Question 8 or 9). Matching the form is essential.\n\nLETTER:\n• Address, date, "Dear [name]", formal/informal register, sign-off.\n\nARTICLE:\n• Headline, optional subheading, engaging opening, journalistic style.\n\nSPEECH:\n• Direct address ("Ladies and gentlemen"), rhetorical questions, repetition, call to action.\n\nREVIEW:\n• Opinion-led, descriptive, may include star rating or recommendation.\n\nESSAY:\n• Formal register, balanced argument, introduction and conclusion.\n\nGUIDE/REPORT:\n• Subheadings, bullet points (sparingly), informative tone.\n\nTOP TIP: The first and last sentences should clearly signal the form.',
      },
      {
        id: 'edx-et-16',
        front: 'Edexcel - Time Management Across Papers',
        // 31 October 2026: Language Paper 1 listed a Q5 and a Q6 among its reading
        // questions and Paper 2 gave 50 minutes to two writing tasks. Literature Paper 2
        // listed two anthology questions and 30 minutes on the unseen, 155 minutes on a
        // 135-minute paper; it is 55, 35 and 45, as edx-et-11 to 13 already said.
        back: "LANGUAGE PAPER 1 (1 hr 45 mins):\n• Section A Reading: about 1 hour\n  - Reading the extract: 10 mins\n  - Q1: 2 mins\n  - Q2: 4 mins\n  - Q3: 12 mins\n  - Q4: 32 mins\n• Section B Writing (Q5 or Q6): 45 mins\n\nLANGUAGE PAPER 2 (2 hrs 5 mins):\n• Section A Reading: about 1 hour 20 mins\n  - Text 1: 6 mins reading, then Q1-Q2 4 mins, Q3 18 mins\n  - Text 2: 6 mins reading, then Q4-Q5 2 mins, Q6 18 mins\n  - Q7(a): 8 mins, Q7(b): 18 mins\n• Section B Writing (Q8 or Q9, one task): 45 mins\n\nLITERATURE PAPER 1 (1 hr 45 mins):\n• Shakespeare: 55 mins\n• Post-1914 text: 50 mins\n\nLITERATURE PAPER 2 (2 hrs 15 mins):\n• 19th-Century Novel: 55 mins\n• Poetry anthology comparison: 35 mins\n• Unseen poetry comparison: 45 mins\n\nGOLDEN RULE: Don't leave ANY question blank - even bullet points earn marks.",
      },
      {
        id: 'edx-et-17',
        // 31 October 2026: this was "How to Handle the 19th-Century Source (Paper 2)".
        // That is AQA's Paper 2. Pearson's Paper 2 texts are from the 20th and 21st
        // centuries; the advice is kept and pointed at two unseen texts of different dates.
        front: 'Edexcel - How to Handle Two Unseen Texts (Paper 2)',
        back: "Both Paper 2 texts are non-fiction from the 20th and 21st centuries, linked by a theme. One may be decades older than the other.\n\nREADING STRATEGIES:\n• Read Text 1 before Questions 1 to 3, and Text 2 before Questions 4 to 6.\n• Don't panic at unfamiliar words - focus on the GIST.\n• Pay attention to punctuation - semicolons and dashes break up long sentences.\n• Identify the writer's ATTITUDE (positive, negative, critical, admiring).\n\nANALYSIS TIPS:\n• Comment on register and tone: formal or chatty, earnest or ironic.\n• Note any rhetorical or persuasive strategies.\n• For Question 7(b), compare how each writer's tone conveys their view.\n\nUSEFUL PHRASES:\n• \"The formal register of '...' suggests a writer who...\"\n• \"Where the writer of Text 1 is reverent, the writer of Text 2 is wry...\"\n\nCOMMON MISTAKES: Reading both texts at the start and forgetting Text 1 by Question 7, not understanding each writer's viewpoint.",
      },
      {
        id: 'edx-et-18',
        // 31 October 2026: this was "Q6 Paper 1: Comparing Linked Texts (10 marks)".
        // Paper 1 has one extract and four reading questions. Its two-text work is
        // Paper 2 Question 7(a), the synthesis, so the card now teaches that.
        front: 'Edexcel - Q7(a) Paper 2: Synthesis Across Both Texts (6 marks)',
        back: 'Q7(a) asks what the two texts have in common, such as similarities between the people, places or experiences they describe.\n\nWHAT IT TESTS: AO1 - selecting and synthesising evidence from both texts.\n\nAPPROACH:\n1. Re-read the question focus.\n2. Find three or four similarities.\n3. For each, give the evidence from Text 1 and from Text 2.\n\nSTRUCTURE:\n• Short paragraphs, each covering both texts.\n• Name the similarity, then the evidence from each text.\n\nLINKING LANGUAGE:\n• "Both writers..."\n• "Similarly, in Text 2..."\n\nTIMING: about 8 minutes. Be concise.\n\nCOMMON MISTAKES: Using one text only (that earns no marks), writing about differences, analysing language (not rewarded here).',
      },
      {
        id: 'edx-et-19',
        front: 'Edexcel - SPaG Strategy (Literature)',
        back: "SPaG marks in Edexcel Literature (AO4):\n• 8 marks, all on the Paper 1 post-1914 essay (Section B).\n• None on Shakespeare, the 19th-century novel or the poetry.\n\nHOW TO SECURE ALL 8:\n• Accurate spelling of character names, literary terms, and ambitious vocabulary.\n• Correct punctuation throughout - especially commas, apostrophes, semicolons.\n• Varied sentence structures and a range of vocabulary.\n\nQUICK WINS:\n• Spell these correctly: your writer's name, metaphor, juxtaposition, foreshadowing, imagery, protagonist, antagonist.\n• Use one semicolon correctly per essay.\n• Proofread your first and last paragraphs (markers notice these most).\n\nPROOFREADING CHECKLIST:\n1. Capital letters for names and sentence starts.\n2. Full stops at sentence ends (no comma splicing).\n3. Apostrophes for possession (the writer's) vs. plurals (the writers).\n4. Homophones: there/their/they're, its/it's, affect/effect.",
      },
      {
        // 9 October 2026: a trap read "In this extract AND in the whole text..." (you must
        // cover both). Pearson's Shakespeare question asks "in this extract" in part (a) and
        // "elsewhere in the play" in part (b), each marked on its own.
        id: 'edx-et-20',
        front: 'Edexcel - Reading the Question Properly',
        back: 'Edexcel questions are often very specific. Misreading the question is the biggest mark-killer.\n\nSTRATEGY:\n1. CIRCLE the key instruction word (analyse, evaluate, compare, explain).\n2. UNDERLINE the focus (character, theme, technique type).\n3. CHECK the line references - only write about those lines for that question.\n4. NOTE the marks - this tells you how much to write.\n\nCOMMON QUESTION TRAPS:\n• "How does the writer use language AND structure..." (Q3 on both Language papers: write about both, or you are capped).\n• "...in this extract" then "...elsewhere in the play" (Shakespeare parts (a) and (b): the extract alone, then the rest of the play).\n• "Compare..." (you MUST discuss both texts with comparison).\n• "Evaluate how successfully..." (Language Paper 1 Q4 and Paper 2 Q6: you need a clear verdict, not just agreement).\n\nBEFORE YOU WRITE: Spend 30 seconds re-reading the question and planning your answer direction.',
      },
      {
        // 9 October 2026: this taught one answer that moves from the extract to the whole
        // text. Pearson sets the Shakespeare question in two parts marked separately: (a) on
        // the extract alone, (b) on the theme elsewhere in the play.
        id: 'edx-et-21',
        front: 'Edexcel - Literature: Tracking a Theme Across a Whole Text',
        back: 'In Edexcel Literature you range across the text in part (b) of the Shakespeare and 19th-century novel questions, and in the post-1914 essay. Part (a) is marked on the printed extract alone.\n\nPREPARATION METHOD:\nFor each theme, prepare quotes from:\n• The beginning of the text.\n• The middle.\n• The end.\n\nThis allows you to discuss how the theme DEVELOPS.\n\nIN THE EXAM:\n• Finish part (a) on the extract, then begin part (b) as a separate answer: "Elsewhere in the [play/novel], [author] develops this theme by..."\n• Show how the character/theme changes over time.\n• Link to the writer\'s overall message.\n\nEXAMPLE (part (b)): "Dickens presents Scrooge\'s transformation through the Ghost of Christmas Present, suggesting that redemption is possible for anyone willing to change."\n\nKEY PHRASES: "initially... however, by the end...", "this contrasts with the earlier scene where...", "the progression from... to... reflects..."',
      },
      {
        id: 'edx-et-22',
        front: 'Edexcel - Paper 1 Section A: Reading Strategy',
        // 31 October 2026: said "6 questions" and "Q3-Q6". Paper 1 has four reading
        // questions (src/data/mark-scheme-guides/edexcel-lang-paper1.ts).
        back: "You have 4 questions on one 19th-century fiction extract. Here is the optimal reading strategy.\n\nSTEP 1 (5 mins): Read the extract ONCE for general understanding.\n• What is happening?\n• Who is involved?\n• What is the mood/atmosphere?\n\nSTEP 2 (5 mins): Re-read with a pen, annotating:\n• Interesting word choices.\n• Structural shifts.\n• Techniques you recognise.\n\nSTEP 3: Answer Q1 and Q2 quickly (about 6 mins in all).\n\nSTEP 4: For Q3 and Q4, refer back to relevant sections.\n• Don't re-read the whole extract for every question.\n• Use your annotations.\n\nGOLDEN RULE: The extract is your evidence. Every point you make must be rooted in the text. No vague claims without proof.",
      },
      {
        id: 'edx-et-23',
        front: 'Edexcel - Building a Persuasive Argument (Paper 2 Writing)',
        // 31 October 2026: began "Both Paper 2 writing tasks". There is one, Q8 or Q9.
        back: 'Whichever Paper 2 writing task you choose (Q8 or Q9), it needs a clear viewpoint. Here is a reliable argument structure.\n\nPARAGRAPH 1: Hook + thesis statement.\nPARAGRAPH 2: Strongest argument + evidence/example.\nPARAGRAPH 3: Second argument + evidence/example.\nPARAGRAPH 4: Emotional/personal appeal (anecdote or emotive language).\nPARAGRAPH 5: Counter-argument + rebuttal.\nPARAGRAPH 6: Conclusion - call to action or memorable image.\n\nPERSUASIVE DEVICES CHECKLIST:\n• Rhetorical question\n• Tricolon (rule of three)\n• Direct address ("you")\n• Statistics (can be invented if plausible)\n• Emotive language\n• Anecdote\n• Expert opinion\n• Imperative verbs\n\nAIM: Use at least 5 of these across each piece.',
      },
      {
        id: 'edx-et-24',
        front: 'Edexcel - How to Compare Methods in Poetry',
        back: "Edexcel poetry questions require comparison of METHODS, not just themes.\n\nMETHODS TO COMPARE:\n\nLANGUAGE:\n• Imagery types (visual, auditory, tactile)\n• Figurative language (metaphor, simile, personification)\n• Tone and register (formal, colloquial, aggressive)\n• Word connotations\n\nSTRUCTURE:\n• Stanza length and regularity\n• Enjambment vs end-stopping\n• Volta or turning point\n• Use of caesura\n\nFORM:\n• Sonnet, dramatic monologue, free verse, ballad\n• Rhyme scheme (or lack of)\n• Metre and rhythm\n\nTEMPLATE:\n\"Both poets use [method] to explore [theme]. In [Poem A], the poet's use of '...' conveys... Similarly/In contrast, [Poem B] employs '...' to suggest... This difference in method reflects...\"",
      },
      {
        // 9 October 2026: this listed "Only writing about the extract - you must discuss the
        // wider text", as if one answer covered both, and filed alternative interpretations
        // under AO4. Section A is two parts, (a) on the extract alone and (b) elsewhere in the
        // play; readings count towards AO1, and AO4 is SPaG and range of vocabulary.
        id: 'edx-et-25',
        front: 'Edexcel - Common Mark-Losing Mistakes to Avoid',
        back: 'LANGUAGE PAPERS:\n1. Not reading the question - leaving structure out of Q3, which asks for language and structure together.\n2. Feature-spotting - naming a technique without analysing its effect.\n3. Long quotes - embed short phrases, not whole sentences.\n4. Ignoring one text in Paper 2 Q7(a) or Q7(b): both need both texts.\n5. Running out of time on the writing section.\n\nLITERATURE PAPERS:\n1. Mixing up the two parts - bringing the rest of the text into part (a), which is marked on the extract alone, or staying with the extract in part (b).\n2. Retelling the story instead of analysing.\n3. Context as a bolt-on - "In Victorian times..." as a separate paragraph.\n4. Not exploring alternative interpretations, which strengthen your personal response (AO1).\n5. Weak conclusions or no conclusion at all.\n\nWRITING TASKS:\n1. Wrong form - writing a speech when asked for a letter.\n2. One-note argument - no counter-argument or range of points.\n3. Weak SPaG - comma splicing, spelling errors, no paragraphs.\n4. Not planning - leads to repetition and structural chaos.\n5. Forgetting to proofread.',
      },
    ],
  },

  // ─── 3. OCR Exam Technique ─────────────────────────────────────────
  {
    id: 'ocr-exam-technique',
    title: 'OCR Exam Technique',
    description: 'Paper-by-paper question technique for OCR GCSE English Language & Literature',
    category: 'Exam Technique',
    board: 'OCR',
    cards: [
      // ── Language: Communicating Information and Ideas ──
      //
      // 31 October 2026: the Language cards were rewritten to the J351 guides in
      // src/data/mark-scheme-guides/ocr-lang-component01.ts and -component02.ts.
      // ocr-et-5 gave Section B "TWO writing tasks, each worth 20 marks", which is
      // Eduqas Component 2; ocr-et-1 said OCR has one Language paper and dated the
      // older text 19th/20th century; ocr-et-4 called a 6-mark comparison the
      // highest-mark reading question; ocr-et-13 timed two 25-minute writing tasks;
      // ocr-et-15 said OCR's writing section has two tasks. Each component sets ONE
      // writing task, Question 5 or 6, for 40 marks (AO5 24 + AO6 16), and its
      // Question 4 is 18 marks, evaluation (12) and comparison (6) together.
      {
        id: 'ocr-et-1',
        front: 'OCR Language Paper 1 - Communicating Information and Ideas: Overview',
        back: 'PAPER: Component 01, Communicating Information and Ideas\nTIME: 2 hours\nMARKS: 80 marks, 50% of the GCSE\n\nSECTION A - Reading (40 marks):\n• 2 unseen non-fiction texts: one from the 19th century, one from the 20th or 21st century.\n• Four questions: Q1 finding information (4 marks), Q2 bringing the two texts together (6), Q3 language and structure (12), Q4 evaluation and comparison (18).\n\nSECTION B - Writing (40 marks):\n• ONE piece of non-fiction writing: Question 5 or 6, your choice of two tasks.\n• Forms: letter, article, speech, report, review, guide.\n\nKEY OCR POINT: There are TWO Language components, each 2 hours and 80 marks. Component 01 is non-fiction reading and writing; Component 02 is literary prose reading and creative writing.\n\nTIMING: OCR advises about 60 minutes per section.',
      },
      {
        id: 'ocr-et-2',
        front: 'OCR Language - Reading: Retrieval and Inference Questions',
        back: 'RETRIEVAL (AO1):\n• Find specific information from the text.\n• Short answers - no analysis needed.\n• Use the line references given.\n\nINFERENCE (AO1):\n• Read between the lines.\n• Use evidence to support your inference.\n• "This suggests that..." is your key phrase.\n\nTIPS:\n• Keep retrieval answers brief - don\'t over-explain.\n• For inference, always provide a quote as evidence.\n• Check you\'re looking at the right source.\n\nSENTENCE STARTERS:\n• "The text states that..."\n• "This implies/suggests/indicates that..."\n• "From the phrase \'...\', we can infer that..."\n\nCOMMON MISTAKES: Writing too much for retrieval questions, not supporting inferences with quotes, confusing the two sources.',
      },
      {
        id: 'ocr-et-3',
        front: 'OCR Language - Reading: Language and Structure Questions',
        back: "WHAT IT TESTS: AO2 - Explain/analyse how writers use language AND structure.\n\nWHERE: Component 01 Question 3 (12 marks). Component 02 Questions 2 (6 marks) and 3 (12 marks).\n\nAPPROACH:\n• Identify specific techniques.\n• Embed short quotes.\n• Explain the EFFECT on the reader.\n• Say how the text is built, too: its opening, shifts in focus, sentence and paragraph shapes, its ending.\n\nOCR MARK SCHEME:\n• An answer that does not give language and structure a fair share cannot reach the higher levels.\n• The top level is detailed, subtle analysis of both. Focus on SUBTLETY - don't just name techniques.\n\nSTRUCTURE PER PARAGRAPH:\n1. Technique + embedded quote.\n2. What it suggests/implies.\n3. Effect on the reader.\n4. Link to writer's purpose.\n\nSENTENCE STARTERS:\n• \"The writer's deliberate use of '...' serves to...\"\n• \"The connotations of '...' evoke a sense of...\"\n• \"This positions the reader to...\"\n\nCOMMON MISTAKES: Listing techniques without analysis, not zooming into individual words, leaving structure out.",
      },
      {
        id: 'ocr-et-4',
        front: 'OCR Language - Reading: Question 4, Evaluation and Comparison',
        back: 'WHAT IT TESTS: AO4 - Evaluate the texts (12 marks) and AO3 - Compare writers\' ideas and perspectives, and how they convey them (6 marks).\n\nTHIS IS THE HIGHEST-MARK READING QUESTION: 18 of the 40 reading marks, in both Language components.\n\nTHE TASK: A statement about both texts. Decide how far you agree, quoting from both.\n\nAPPROACH:\n1. Give a one-sentence verdict on the statement.\n2. Identify each writer\'s viewpoint.\n3. Compare viewpoints (similar? different? nuanced?).\n4. Compare METHODS (how each writer conveys their view).\n5. Use evidence from both texts.\n\nSTRUCTURE:\n• Point about the statement → Text 1 evidence + judgement → Text 2 evidence + judgement → compare how the writers present it.\n\nCOMPARATIVE CONNECTIVES:\n• "Both writers... however..."\n• "While Text 1 adopts... Text 2 instead..."\n• "In contrast to Text 1\'s [tone], Text 2..."\n\nCOMMON MISTAKES: Agreeing without saying how far, writing about each text separately, comparing only content (not methods), quoting from one text only.',
      },
      {
        id: 'ocr-et-5',
        front: 'OCR Language - Writing Task (Section B)',
        back: "ONE writing task: Question 5 or 6, your choice of two. It is worth 40 marks, half the paper.\n\nMARK SPLIT:\n• AO5 - Content and Organisation: 24 marks.\n• AO6 - Vocabulary, sentence structure, spelling, punctuation: 16 marks.\n\nTIMING: About 60 minutes (5-10 plan, about 45 write, 5 check).\n\nCOMPONENT 01: non-fiction. FORMS: Letter, article, speech, review, report, guide, essay.\nCOMPONENT 02: creative writing, such as a story from a given title or personal writing about an experience.\n\nKEY STRATEGIES:\n• Read both tasks before you choose. Each sets its own form, audience and purpose.\n• Match the form and audience precisely.\n• Plan 4-5 paragraphs.\n• Use a range of persuasive/rhetorical devices where the task calls for them.\n• Vary sentence structures and vocabulary.\n• Proofread.\n\nTOP TIP: Pick the task whose form you can write best, then adapt your register to its reader - don't use the same voice for a formal letter and a magazine article.\n\nCOMMON MISTAKES: Choosing in a hurry, forgetting form conventions, working through the bullet points as a list, not planning.",
      },
      // ── Literature (J352 Components 01 and 02) ──
      {
        // Corrected 2 October 2026 against the J352 specification, Version 3.0, and the
        // J352/02 paper of 20 May 2025. This card described Paper 2 as three sections
        // (anthology comparison, unseen poetry, Shakespeare) with other marks and AOs.
        // Paper 2 has two: Section A, Poetry across time (40 marks: part (a) compares a
        // cluster poem with an unseen poem, part (b) explores one other anthology poem;
        // AO1 and AO2), and Section B, Shakespeare (40 marks; AO4 is assessed there).
        // It also said there were no separate SPaG marks; AO4 carries 5%.
        id: 'ocr-et-6',
        front: 'OCR Literature - Paper Overview',
        back: 'OCR has TWO Literature papers, each 2 hours and 80 marks:\n\nPAPER 1: Exploring Modern and Literary Heritage Texts\n• Section A: Modern prose or drama (with extract).\n• Section B: Literary heritage text - 19th century (with extract).\n\nPAPER 2: Exploring Poetry and Shakespeare\n• Section A: Poetry across time (40 marks) - (a) compare a poem from your cluster with an unseen poem; (b) explore one other poem from the anthology.\n• Section B: Shakespeare (40 marks) - an extract-based question or a discursive question, your choice.\n\nKEY OCR DIFFERENCES:\n• Shakespeare is in Paper 2 (not Paper 1 like AQA).\n• The unseen poem is part of the anthology question, not a separate section.\n• Spelling, punctuation and grammar (AO4) are assessed in Section B of each paper.',
      },
      {
        id: 'ocr-et-7',
        front: 'OCR Literature Paper 1 - Modern Prose/Drama (Section A)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 40 marks\nTIMING: 55-60 minutes\n\nFORMAT: Extract + linked essay question.\n\nAPPROACH:\n1. Annotate the extract (5 minutes).\n2. Write about the extract first - close analysis of language, structure, form.\n3. Broaden to the wider text - other key scenes, character development, themes.\n4. Embed context where relevant.\n\nSTRUCTURE:\n• Intro: Direct answer to the question.\n• 2-3 extract paragraphs.\n• 2-3 wider text paragraphs.\n• Conclusion.\n\nOCR TOP BAND:\n• "Assured, personal response"\n• "Exploration of layers of meaning"\n• "Convincing, well-structured argument"\n\nCOMMON MISTAKES: Only writing about the extract, narrative retelling, superficial context.',
      },
      {
        id: 'ocr-et-8',
        front: 'OCR Literature Paper 1 - 19th-Century Text (Section B)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 40 marks\nTIMING: 55-60 minutes\n\nFORMAT: Extract + essay question.\n\nAPPROACH:\n• Same structure as Section A.\n• Pay particular attention to CONTEXT (AO3 is heavily weighted).\n• Analyse the writer\'s language choices in the extract closely.\n• Connect to the broader themes and structure of the novel.\n\nCONTEXT TO WEAVE IN:\n• Victorian social hierarchy.\n• Gender expectations.\n• Attitudes to poverty, crime, and education.\n• Scientific developments (evolution, psychology).\n• The author\'s personal beliefs and intentions.\n\nSENTENCE STARTERS:\n• "[Author] challenges/reinforces Victorian attitudes towards... by..."\n• "Writing in [year], [Author] reflects contemporary anxieties about..."\n\nCOMMON MISTAKES: Context as a bolt-on, not analysing language in the extract, ignoring the wider text.',
      },
      {
        // Corrected 2 October 2026 against the J352 specification, Version 3.0, and the
        // J352/02 paper of 20 May 2025. This card described Paper 2 as three sections
        // (anthology comparison, unseen poetry, Shakespeare) with other marks and AOs.
        // Paper 2 has two: Section A, Poetry across time (40 marks: part (a) compares a
        // cluster poem with an unseen poem, part (b) explores one other anthology poem;
        // AO1 and AO2), and Section B, Shakespeare (40 marks; AO4 is assessed there).
        id: 'ocr-et-9',
        front: 'OCR Literature Paper 2 - Poetry across time (Section A)',
        back: "WHAT IT TESTS: AO1 and AO2. Context (AO3) is not assessed in this section.\n\nMARKS: 40 - part (a) 20, part (b) 20\nTIMING: about 45 minutes for (a), 30 for (b)\n\nFORMAT:\n(a) A poem from your cluster is printed beside an UNSEEN poem. Compare them.\n(b) Explore one other poem from the anthology, from memory.\n\nAPPROACH FOR (a):\n1. Read both poems carefully; annotate the unseen one first.\n2. Compare throughout - don't write about one then the other.\n\nAPPROACH FOR (b):\n• Choose a poem that fits the theme the question names and that you can quote from memory.\n\nCOMPARE:\n• Themes and ideas.\n• Language and imagery.\n• Form and structure.\n• Tone and voice.\n\nCOMMON MISTAKES: Writing about the poems separately in (a), only comparing themes (not methods), choosing a (b) poem you don't know well.",
      },
      {
        // Corrected 2 October 2026 against the J352 specification, Version 3.0, and the
        // J352/02 paper of 20 May 2025. This card described Paper 2 as three sections
        // (anthology comparison, unseen poetry, Shakespeare) with other marks and AOs.
        // Paper 2 has two: Section A, Poetry across time (40 marks: part (a) compares a
        // cluster poem with an unseen poem, part (b) explores one other anthology poem;
        // AO1 and AO2), and Section B, Shakespeare (40 marks; AO4 is assessed there).
        id: 'ocr-et-10',
        front: 'OCR Literature Paper 2 - Reading the Unseen Poem (Section A, part a)',
        back: 'WHAT IT TESTS: AO1, AO2.\n\nWHERE IT COMES: Part (a) of the poetry question prints one unseen poem beside a poem from your cluster, and asks you to compare them (20 marks, about 45 minutes).\n\nFIRST READ STRATEGY:\n1. Read the title - it often reveals the subject.\n2. Read the whole poem once for general meaning.\n3. Re-read, annotating: imagery, tone, structure, key words.\n4. Identify the speaker\'s attitude.\n\nFOR THE COMPARISON:\n• Focus on ONE key difference or similarity in method at a time.\n• Keep both poems in every paragraph.\n\nSENTENCE STARTERS:\n• "The poet creates a tone of... through the use of..."\n• "The image of \'...\' suggests... because..."\n• "Both poems use... to convey..., although Poem A... while Poem B..."\n\nCOMMON MISTAKES: Paraphrasing the poem, not identifying techniques, spending too long on one poem.',
      },
      {
        // Corrected 2 October 2026 against the J352 specification, Version 3.0, and the
        // J352/02 paper of 20 May 2025. This card described Paper 2 as three sections
        // (anthology comparison, unseen poetry, Shakespeare) with other marks and AOs.
        // Paper 2 has two: Section A, Poetry across time (40 marks: part (a) compares a
        // cluster poem with an unseen poem, part (b) explores one other anthology poem;
        // AO1 and AO2), and Section B, Shakespeare (40 marks; AO4 is assessed there).
        id: 'ocr-et-11',
        front: 'OCR Literature Paper 2 - Shakespeare (Section B)',
        back: "WHAT IT TESTS: AO1, AO2, AO3, and AO4 (spelling, punctuation and grammar).\n\nMARKS: 40 marks\nTIMING: about 45 minutes, the rest of the two hours\n\nFORMAT: Your choice of an extract-based question, making links to the whole play, or a discursive essay question.\n\nAPPROACH:\n• Analyse the extract closely for Shakespeare's language choices.\n• Discuss the wider play - character arc, themes, dramatic significance.\n• Embed Elizabethan/Jacobean context.\n\nSTRUCTURE:\n1. Intro: thesis + direct engagement with the question.\n2. 2 paragraphs on the extract.\n3. 2 paragraphs on the wider play.\n4. Brief conclusion.\n\nCONTEXT IDEAS:\n• The Great Chain of Being / Divine Right of Kings.\n• Gender roles in Elizabethan/Jacobean society.\n• Religious beliefs (sin, redemption, damnation).\n• Theatre conventions (soliloquy, aside, dramatic irony).\n\nCOMMON MISTAKES: Only writing about the extract, context that doesn't connect to analysis, ignoring Shakespeare's language.",
      },
      {
        id: 'ocr-et-12',
        front: 'OCR - How to Structure Every Literature Paragraph',
        back: 'OCR marking guides reward "well-structured" and "convincing" arguments.\n\nUSE THIS PARAGRAPH STRUCTURE:\n\n1. POINT - Answer the question directly.\n"[Author] presents [character/theme] as [your argument]..."\n\n2. EVIDENCE - Embed a short quote.\n"...through the phrase \'...\',"\n\n3. ANALYSIS - Explain the technique and its effect.\n"where the [technique] suggests/conveys..."\n\n4. DEVELOP - Add a second layer of interpretation.\n"Furthermore, the connotations of \'[word]\' imply..."\n\n5. CONTEXT - Link to relevant context (if applicable).\n"This reflects [Author]\'s [intention/the attitudes of the era]."\n\n6. LINK - Connect back to the question.\n"Therefore, [Author] uses this to [answer the question]."\n\nThis structure works for EVERY literature paragraph across both OCR papers.',
      },
      {
        id: 'ocr-et-13',
        front: 'OCR - Time Management Strategy',
        back: 'LANGUAGE COMPONENTS 01 AND 02 (2 hours each):\nOCR advises about 1 hour per section.\n• Section A (Reading): 60 mins\n  - Read both texts: about 12 mins\n  - Q1 (4 marks): 5 mins\n  - Q2 (6 marks): 8 mins\n  - Q3 (12 marks): 15 mins\n  - Q4 (18 marks): 20 mins\n• Section B (one writing task, Q5 or Q6): 60 mins\n  - Plan: 5-10 mins\n  - Write: about 45 mins\n  - Check: 5 mins\nThe question times are a suggestion worked out from the marks.\n\nLITERATURE PAPER 1 (2 hours):\n• Section A (Modern text): 55 mins\n• Section B (19th-century): 55 mins\n• Buffer: 10 mins\n\nLITERATURE PAPER 2 (2 hours):\n• Section A (Poetry anthology): 40 mins\n• Section B (Unseen poetry): 30 mins\n• Section C (Shakespeare): 40 mins\n• Buffer: 10 mins\n\nSTRATEGY: Always leave a buffer. If you run out of time, write bullet points - you can still earn marks.',
      },
      {
        id: 'ocr-et-14',
        front: 'OCR - Writing: Adapting Register and Tone',
        back: 'OCR writing tasks reward "assured" adaptation of register.\n\nREGISTER means the level of formality:\n\nFORMAL (letter to MP, report):\n• Complex sentences, no contractions, impersonal tone.\n• "It is imperative that action is taken..."\n\nSEMI-FORMAL (article, review, guide):\n• Accessible but polished. Can use "you" but avoid slang.\n• "Most people would agree that..."\n\nINFORMAL (blog, speech to peers):\n• Conversational, contractions, personal anecdotes.\n• "Let\'s be honest - we\'ve all been there."\n\nHOW TO SHOW RANGE:\n• Shift register within a piece - start formally, include a personal moment, return to formal.\n• Use questions to shift from declarative to conversational.\n• Match vocabulary to audience: "pupils" for teachers, "students" for peers.',
      },
      {
        // 9 October 2026: this said OCR puts "less emphasis on alternative interpretations
        // (AO4)" than Edexcel. Edexcel has no such objective: readings count towards AO1, and
        // its AO4 is SPaG and range of vocabulary, 8 marks on the Paper 1 post-1914 essay.
        // It also said OCR has one Language paper, no separate SPaG marks and no AO4. OCR's
        // specification at a glance lists two Language components, 01 and 02, of 80 marks
        // each, and J352 assesses AO4, 4 marks, in Section B of each Literature component
        // (specification Version 3.0, page 18). AQA's 4 + 4 are on Shakespeare (8702/1
        // Section A) and the modern text (8702/2 Section A).
        // 31 October 2026: it also said OCR's writing section "has 2 tasks" where
        // Edexcel sets one. Each OCR Language component sets one, Question 5 or 6,
        // as each Edexcel Language paper does (ocr-lang-component01.ts guide).
        id: 'ocr-et-15',
        front: 'OCR - Key Differences from Other Boards',
        back: 'COMPARED TO AQA:\n• Shakespeare is in Literature Component 02 (AQA sets it in Paper 1).\n• Literature SPaG (AO4) is 4 marks in Section B of each component: the 19th-century prose essay and the Shakespeare essay. AQA gives its 4 + 4 to Shakespeare and the modern text.\n\nCOMPARED TO EDEXCEL:\n• Four reading questions in each Language component (Edexcel\'s Language Paper 2 has seven).\n• Alternative interpretations are not an assessment objective on either board: Edexcel credits them under AO1, and its AO4 is SPaG.\n• Each Language component sets one writing task, Question 5 or 6, from a choice of two, as each Edexcel Language paper does.\n\nOCR-SPECIFIC STRENGTHS TO EXPLOIT:\n• The marking guides reward "personal response" - be genuine and specific.\n• "Exploration of layers of meaning" - always offer more than one reading.\n• "Assured, well-structured" - clear paragraphing and logical flow win marks.\n\nTOP TIP: OCR values quality over quantity. 4 brilliant paragraphs beat 7 mediocre ones.',
      },
      {
        id: 'ocr-et-16',
        front: 'OCR Language - How to Approach the 19th-Century Text (Component 01)',
        back: 'In Component 01, one of the two non-fiction texts is from the 19th century and the other from the 20th or 21st. Here is how to handle the older one. (Component 02 has no 19th-century text: both of its texts are from the 20th or 21st century.)\n\nREADING TIPS:\n• Focus on overall meaning first - don\'t get lost in archaic vocabulary.\n• Long sentences were common - identify the main clause.\n• Punctuation helps: look for semicolons, colons, and dashes to break up ideas.\n• Context clues: footnotes or introductions tell you when/why it was written.\n\nANALYSIS TIPS:\n• Comment on the formal register as a deliberate choice.\n• Note differences in social attitudes (e.g., attitudes to class, gender, empire).\n• Compare the older text\'s style with the modern source\'s style.\n\nUSEFUL VOCABULARY:\n• "Elevated register," "archaic diction," "elaborate syntax," "rhetorical formality."\n\nCOMMON MISTAKES: Ignoring the older source, not understanding the viewpoint, calling it "old-fashioned" without further analysis.',
      },
      {
        id: 'ocr-et-17',
        front: 'OCR - Building a Personal Response (Top Band)',
        back: 'OCR marking guides consistently reward "personal response" and "original thinking."\n\nWHAT THIS MEANS:\n• Don\'t just repeat generic analysis everyone writes.\n• Engage with the text as a real reader - what did YOU notice?\n• Question the writer\'s choices: why THIS word? Why THIS structure?\n\nHOW TO DEVELOP A PERSONAL RESPONSE:\n1. Ask "Why?" after every observation.\n2. Consider what the writer COULD have written but chose not to.\n3. Explore ambiguity - when a word/image could mean two things, discuss both.\n4. React genuinely - "The abruptness of \'...\'is unsettling because..."\n\nPHRASES THAT SIGNAL PERSONAL ENGAGEMENT:\n• "What is particularly striking is..."\n• "The ambiguity here is significant because..."\n• "This forces the reader to confront..."\n• "Perhaps the most revealing moment is..."\n\nAVOID: Formulaic responses that could apply to any text.',
      },
      {
        id: 'ocr-et-18',
        front: 'OCR Literature - How Context Works Without Separate AO3 Weighting',
        back: 'In some OCR Literature questions, AO3 (context) carries less weight than in AQA. But context still matters.\n\nRULE: Context should DEEPEN your analysis, never replace it.\n\nGOOD USE OF CONTEXT:\n• "Dickens, writing during a period of rapid industrialisation, uses Scrooge to expose the callous indifference of the wealthy towards the working poor."\n• "Shakespeare\'s audience, steeped in the doctrine of the Divine Right of Kings, would have viewed Macbeth\'s actions as an assault on God\'s natural order."\n\nBAD USE OF CONTEXT:\n• "In Victorian times, there was a lot of poverty. This is shown in the text."\n• A standalone paragraph about history that doesn\'t connect to analysis.\n\nHOW MUCH CONTEXT?\n• 1-2 contextual references per essay, woven into analytical paragraphs.\n• Always link context to the writer\'s PURPOSE.\n\nKEY PHRASE: "[Author] uses [technique/character] to [reflect/challenge/expose] [contextual idea]."',
      },
      {
        id: 'ocr-et-19',
        front: 'OCR - Proofreading Strategy for Both Papers',
        back: "OCR assesses quality of written communication as part of the overall mark - so SPaG matters throughout.\n\nPROOFREADING PLAN (3-5 minutes at the end of each section):\n\n1. READ BACKWARDS - start from the last sentence. This helps you spot errors your brain auto-corrects when reading forwards.\n\n2. CHECK THESE FIRST:\n• Capital letters (names, sentence starts).\n• Full stops (no comma splicing).\n• Apostrophes (it's = it is; its = belonging to it).\n• Homophones (there/their/they're, effect/affect, where/were).\n\n3. CHECK THESE SECOND:\n• Spelling of character names and key terms.\n• Tense consistency (don't switch between past and present).\n• Subject-verb agreement.\n\n4. QUICK WINS:\n• Add a semicolon somewhere appropriate.\n• Fix any sentence fragments.\n• Check your first and last paragraphs carefully - markers read these most closely.",
      },
      {
        id: 'ocr-et-20',
        front: 'OCR - Unseen Poetry: A Step-by-Step Method',
        back: "Follow this method for EVERY unseen poem:\n\nSTEP 1 - OVERVIEW (1 minute):\n• Read the title. What does it tell you?\n• Read the whole poem. What is it ABOUT (surface level)?\n• What FEELING does it leave you with?\n\nSTEP 2 - DETAIL (2 minutes):\n• Re-read. Circle/underline striking words and images.\n• Note the tone - does it shift anywhere?\n• Look at structure: stanza lengths, line lengths, enjambment, rhyme.\n\nSTEP 3 - MEANING (1 minute):\n• What is the deeper meaning or message?\n• What is the poet's attitude towards the subject?\n• Is there any ambiguity?\n\nSTEP 4 - WRITE (remaining time):\n• Open with the poem's central theme/message.\n• Write 3 analytical paragraphs: language, imagery, structure.\n• Each paragraph: technique + quote + effect + interpretation.\n\nGOLDEN RULE: If you don't know what the poem means, focus on HOW it makes you feel and why.",
      },
    ],
  },

  // ─── 4. WJEC Exam Technique ────────────────────────────────────────
  {
    id: 'wjec-exam-technique',
    title: 'WJEC Exam Technique',
    description:
      'Paper-by-paper question technique for WJEC Eduqas GCSE English Language & Literature',
    category: 'Exam Technique',
    board: 'WJEC',
    cards: [
      // ── Language Component 1: 20th Century Literature Reading and Creative Prose Writing ──
      //
      // 31 October 2026: the Language cards were rewritten to the C700 guides in
      // src/data/mark-scheme-guides/eduqas-lang-comp1.ts and eduqas-lang-comp2.ts.
      // wjec-et-1 gave Section A 20 marks (it is 40) and offered descriptive
      // writing, which the specification does not ask for (a narrative or recount);
      // wjec-et-2 listed three reading questions where Component 1 sets five; the
      // timings were 50 and 55 minutes where the paper advises about 60 and 45;
      // wjec-et-16 said OCR has one Language component (it has two). Second read:
      // wjec-et-1's list made Q02 an inference question; it is marked for language
      // (AO2), as wjec-et-2 says.
      {
        id: 'wjec-et-1',
        front: 'WJEC Language Component 1 - Overview',
        back: "PAPER: 20th Century Literature Reading and Creative Prose Writing\nTIME: 1 hour 45 minutes\nMARKS: 80 marks, 40% of Language GCSE\n\nSECTION A - Reading (40 marks):\n• One extract from a 20th-century literary prose text, about 60 to 100 lines.\n• Five questions: retrieval (Q01), language (Q02 and Q03), language and structure (Q04) and evaluation (Q05).\n\nSECTION B - Creative Prose Writing (40 marks):\n• One piece from a choice of four titles.\n• A story, or an account of an experience, real or imagined. Writing that only describes cannot reach the top of the mark range.\n\nKEY WJEC/EDUQAS DIFFERENCE: The reading section uses a LITERARY fiction text (not non-fiction). The writing section is prose only (no poetry or transactional writing).\n\nTIMING (the paper's own advice): Section A = about 60 minutes (10 reading, 50 answering). Section B = about 45 minutes (10 planning, 35 writing).",
      },
      {
        id: 'wjec-et-2',
        front: 'WJEC Language Component 1 - Reading Questions Breakdown',
        back: 'The reading section has five questions:\n\nQ01 (5 marks): Retrieval - list five things you learn about [topic] from the opening lines.\n\nQ02 (5 marks): What does the writer show you about a character or situation in the next few lines, and how does the language do it?\n\nQ03 (10 marks): How does the writer show a character\'s thoughts and feelings, or your impressions of a person or place, in a longer section? (Language focus.)\n\nQ04 (10 marks): How does the writer create an effect, such as tension, in a later section? (Language AND structure.)\n\nQ05 (10 marks): How far do you agree with a view about a character or the story? Use the final lines and the passage as a whole. (Evaluation.)\n\nKEY TIPS:\n• Q01: Keep answers brief - one point per line.\n• Q02: Three or four impressions, each with a short quotation.\n• Q03: Work through the whole section in order. 3-4 detailed paragraphs on the language.\n• Q04: Cover how the events are ordered as well as the words.\n• Q05: Give your verdict first, then prove it from across the passage.\n\nSENTENCE STARTERS:\n• "The writer creates a [mood] through..."\n• "The impression of [character] is developed through..."\n\nCOMMON MISTAKES: Over-writing Q01, under-writing the three 10-mark questions, not using quotes.',
      },
      {
        id: 'wjec-et-3',
        front: 'WJEC Language Component 1 - Creative Prose Writing (40 marks)',
        back: 'WHAT IT TESTS: AO5 (Communication & Organisation: 24 marks) + AO6 (Accuracy: 16 marks).\n\nTIMING: About 45 minutes (10 plan, 35 write), as the paper advises. Keep the last few minutes to check.\n\nCHOICE: Four titles. A title may be a phrase, a time you did something, an opening line or a closing line. Write a story or an account of an experience, real or imagined, of about 450-600 words. A purely descriptive piece cannot reach the top of the mark range.\n\nFOR TOP MARKS:\n• Communication: Engaging, sophisticated writing with a clear voice.\n• Organisation: Paragraphing, varied structure, deliberate sequencing.\n• Vocabulary: Ambitious but natural word choices.\n• Sentences: Range of types for effect.\n• Accuracy: Consistent spelling, punctuation, grammar.\n\nWJEC-SPECIFIC TIP: The marking guide rewards "sustained crafting." This means EVERY paragraph should feel deliberately shaped - no filler.\n\nPLANNING TEMPLATE:\n1. Opening hook.\n2. Build (develop character/setting/tension).\n3. Shift/turning point.\n4. Resolution/resonant ending.',
      },
      {
        id: 'wjec-et-4',
        front: 'WJEC Language Component 2 - Overview',
        back: 'PAPER: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing\nTIME: 2 hours\nMARKS: 80 marks, 60% of Language GCSE\n\nSECTION A - Reading (40 marks):\n• TWO non-fiction texts: one 19th-century, one 21st-century.\n• Six questions on: retrieval, how the writer achieves a purpose, evaluation, bringing details together from both texts, comparison of viewpoints.\n\nSECTION B - Writing (40 marks):\n• TWO transactional/persuasive writing tasks.\n• Forms: letter, article, speech, review, report, essay, leaflet.\n\nKEY DIFFERENCE: This component is worth MORE (60%) than Component 1 (40%). Prioritise practice here.\n\nTIMING: Section A = 60 minutes. Section B = 60 minutes (30 per task).',
      },
      {
        id: 'wjec-et-5',
        front: 'WJEC Language Component 2 - Reading: Comparison Question',
        back: 'The comparison question (1.6) is the last reading question in Component 2. At 10 marks it shares the top reading tariff with Questions 1.2 and 1.4.\n\nWHAT IT TESTS: AO3 - Compare writers\' viewpoints and methods across two texts.\n\nMARKS: 10 marks\nTIMING: 12-15 minutes\n\nAPPROACH:\n1. Identify each writer\'s viewpoint on the topic.\n2. Find similarities AND differences.\n3. Compare METHODS (tone, language, rhetorical devices, structure).\n4. Use quotes from both texts.\n\nSTRUCTURE:\n• Opening statement: both writers\' positions.\n• 3 comparison paragraphs (point + Source A + Source B).\n• Use comparative connectives throughout.\n\nSENTENCE STARTERS:\n• "Both writers express [viewpoint], however they differ in..."\n• "While Writer A uses [method] to convey..., Writer B instead employs..."\n• "The contrast between Source A\'s [tone] and Source B\'s [tone] highlights..."\n\nCOMMON MISTAKES: Writing about texts separately, only comparing content, not using both texts equally.',
      },
      {
        id: 'wjec-et-6',
        front: 'WJEC Language Component 2 - Transactional Writing (2 tasks)',
        back: 'TWO tasks, each worth 20 marks.\nMARK SPLIT: AO5 (12 marks) + AO6 (8 marks) per task.\n\nTIMING: 30 minutes each (5 plan, 22 write, 3 check).\n\nFORMS YOU MUST KNOW:\n• Formal letter (Dear Sir/Madam, Yours faithfully)\n• Informal letter (Dear [Name], chatty tone)\n• Article (headline, engaging opening)\n• Speech (direct address, rhetorical devices)\n• Review (opinion-led, descriptive)\n• Report (formal, subheadings, factual tone)\n• Leaflet (headings, accessible language)\n\nKEY STRATEGY: The two tasks ALWAYS differ in form and/or audience. Show you can ADAPT.\n\nWJEC TOP BAND: "Sustained awareness of purpose and audience. Appropriate and effective register."\n\nCOMMON MISTAKES: Same tone in both tasks, forgetting form conventions, not planning.',
      },
      // ── Literature Component 1: Shakespeare and Poetry ──
      {
        id: 'wjec-et-7',
        front: 'WJEC Literature Component 1 - Shakespeare',
        back: 'WHAT IT TESTS: AO1, AO2, AO4.\n\nMARKS: 20 marks (+ 5 SPaG)\nTIMING: 45 minutes\n\nFORMAT: Extract from the play + essay question. Write about the extract and the play as a whole.\n\nAPPROACH:\n1. Read and annotate the extract.\n2. Plan your argument.\n3. Write about the extract (close analysis).\n4. Broaden to the rest of the play.\n\nWJEC-SPECIFIC: AO4 (using supporting evidence) is assessed. This means your response must be well-evidenced with quotes.\n\nNOTE: AO3 (context) is NOT assessed in the Shakespeare question. Focus on language analysis (AO2) and your interpretation.\n\nSTRUCTURE:\n• Intro with thesis.\n• 2 extract paragraphs.\n• 2 wider play paragraphs.\n• Conclusion.\n\nCOMMON MISTAKES: Spending too long on context (no marks), only writing about the extract, not knowing wider play quotes.',
      },
      {
        id: 'wjec-et-8',
        front: 'WJEC Literature Component 1 - Poetry Anthology',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 20 marks\nTIMING: 40 minutes\n\nFORMAT: One named poem printed. You must compare it with one other from the anthology.\n\nAPPROACH:\n• Analyse the named poem in detail.\n• Compare with your chosen poem throughout.\n• Discuss methods: language, form, structure.\n• Include relevant context (AO3 IS assessed here).\n\nCHOOSING YOUR COMPARISON POEM:\n• Pick one that shares the same theme but uses DIFFERENT methods.\n• Pick one you know well and can quote from.\n\nSTRUCTURE:\n• Intro: State both poems and your comparison thesis.\n• 3-4 paragraphs alternating between poems.\n• Conclusion.\n\nCOMMON MISTAKES: Not comparing (writing about poems separately), forgetting context, choosing a poem you barely know.',
      },
      {
        id: 'wjec-et-9',
        front: 'WJEC Literature Component 1 - Unseen Poetry',
        back: 'WHAT IT TESTS: AO1, AO2.\n\nMARKS: 20 marks total\n• Part (a): One poem - 8 marks.\n• Part (b): Compare two poems - 12 marks.\n\nTIMING: Part (a) = 12 minutes. Part (b) = 18 minutes.\n\nPART (a):\n• Analyse one unseen poem.\n• Focus on language, imagery, and structure.\n• 2-3 developed paragraphs.\n\nPART (b):\n• Compare this poem with a second unseen poem.\n• Focus on methods AND themes.\n• Use comparative connectives.\n• 3 developed paragraphs.\n\nFIRST READ METHOD:\n1. Title - what clues does it give?\n2. Read once for meaning.\n3. Read again for techniques.\n4. Note: tone, imagery, structure, voice.\n\nCOMMON MISTAKES: Spending too long on Part (a), not comparing in Part (b), paraphrasing instead of analysing.',
      },
      // ── Literature Component 2: Post-1914 Prose/Drama and 19th-Century Prose ──
      {
        id: 'wjec-et-10',
        front: 'WJEC Literature Component 2 - Overview',
        back: 'PAPER: Post-1914 Prose/Drama and 19th-Century Prose\nTIME: 2 hours 30 minutes\nMARKS: 60% of Literature GCSE\n\nSECTION A - Post-1914 Prose/Drama (40 marks):\n• Extract + essay question on your studied modern text.\n• AO1, AO2, AO3, AO4 all assessed.\n• Includes 5 marks for SPaG.\n\nSECTION B - 19th-Century Prose (40 marks):\n• TWO essay questions (no extract) - answer BOTH.\n• From memory - you need to know quotes.\n• AO1, AO2, AO3, AO4.\n\nKEY CHALLENGE: Section B has NO extract, and you answer TWO questions. Quote memorisation is essential.\n\nTIMING: Section A = 60 minutes. Section B = 90 minutes (45 per question).',
      },
      {
        id: 'wjec-et-11',
        front: 'WJEC Literature Component 2 - Post-1914 Text (Section A)',
        back: 'MARKS: 40 marks (including 5 SPaG)\nTIMING: 60 minutes\n\nFORMAT: Extract + essay question.\n\nALL FOUR AOs ASSESSED:\n• AO1: Informed personal response + textual references.\n• AO2: Writer\'s methods (language, form, structure).\n• AO3: Context (social, historical, literary).\n• AO4: Range of viewpoints and interpretations.\n\nAPPROACH:\n1. Annotate the extract (5 mins).\n2. Plan your argument (5 mins).\n3. Write: extract analysis → wider text → context.\n\nWJEC TOP BAND:\n• "Assured, sustained personal response"\n• "Perceptive analysis of writer\'s methods"\n• "Context integrated convincingly"\n\nSPaG (5 marks):\n• Accurate spelling of key terms.\n• Varied punctuation.\n• Clear expression.\n\nCOMMON MISTAKES: Bolting on context, ignoring AO4, only writing about the extract.',
      },
      {
        id: 'wjec-et-12',
        front: 'WJEC Literature Component 2 - 19th-Century Prose (Section B)',
        back: 'MARKS: 2 questions, 20 marks each (40 total)\nTIMING: 45 minutes per question\n\nFORMAT: NO extract - you write entirely from memory.\n\nTHIS IS THE HARDEST SECTION because you must:\n• Remember specific quotes.\n• Cover the whole text.\n• Answer two separate questions under pressure.\n\nPREPARATION:\n• Memorise 15-20 quotes per text.\n• Organise quotes by theme and character.\n• Practise writing from memory regularly.\n\nIN THE EXAM:\n1. Read both questions and plan both answers (5 mins each).\n2. For each: write 4 focused paragraphs with quotes.\n3. Cover different parts of the novel in each paragraph.\n\nSTRUCTURE PER PARAGRAPH:\nPoint → Quote → Analysis (AO2) → Context (AO3) → Link to question.\n\nCOMMON MISTAKES: Only writing about one part of the novel, running out of quotes, spending too long on Q1 and rushing Q2.',
      },
      {
        id: 'wjec-et-13',
        front: 'WJEC - How to Embed Context Across Both Components',
        back: 'Context is assessed in Literature Component 1 (poetry) and Component 2 (modern text + 19th-century).\n\nBUT NOT in the Shakespeare question - don\'t waste time there.\n\nGOOD EMBEDDING:\n• "[Author] critiques [issue] through [character/event], reflecting [contextual idea]."\n• "The [image/quote] resonates with [historical/social context] because..."\n• "[Author], writing in [period], uses [technique] to challenge/reinforce..."\n\nBAD EMBEDDING:\n• "In the 19th century, women had no rights." (standalone, disconnected)\n• A whole paragraph of background with no textual analysis.\n\nCONTEXT AREAS TO KNOW:\n• Shakespeare: Elizabethan/Jacobean society (but no marks for it in the exam).\n• Poetry: Depends on the anthology - conflict, identity, relationships.\n• Modern text: Social inequality, class, gender, war, morality.\n• 19th-century: Victorian values, class, poverty, empire, science vs religion.',
      },
      {
        id: 'wjec-et-14',
        front: 'WJEC - SPaG Marks: Where and How',
        back: 'SPaG marks are awarded in:\n• Shakespeare (Component 1): 5 marks.\n• Post-1914 text (Component 2, Section A): 5 marks.\n• TOTAL: 10 marks for SPaG across Literature.\n\nWJEC SPaG MARKING GUIDE:\n• Band 5 (5 marks): "Sophisticated use of a range of vocabulary and sentence structures. Spelling, punctuation, and grammar are consistently accurate."\n\nHOW TO HIT BAND 5:\n• Use semicolons, colons, and dashes correctly.\n• Spell literary terminology accurately.\n• Vary sentence openings and lengths.\n• Maintain consistent tense (present tense for literature essays).\n\nCOMMON ERRORS THAT LOSE MARKS:\n• "could of" instead of "could have"\n• Comma splicing (using a comma where you need a full stop)\n• Inconsistent tense shifts\n• Misspelling character names\n\n10 marks for SPaG = nearly a full grade. Don\'t throw these away.',
      },
      {
        id: 'wjec-et-15',
        front: 'WJEC - Time Management Across All Papers',
        back: "LANGUAGE COMPONENT 1 (1 hr 45 mins):\n• Section A (Reading): about 60 mins\n  - Read the extract: 10 mins\n  - Q01: 5 mins\n  - Q02: 6 mins\n  - Q03, Q04 and Q05: 13 mins each\n• Section B (Creative Writing): about 45 mins (10 plan, 35 write)\n\nLANGUAGE COMPONENT 2 (2 hrs):\n• Section A (Reading): about 60 mins\n  - Read both texts: 10 mins\n  - 1.1 and 1.3: 4 mins each\n  - 1.2 and 1.4: 12 mins each\n  - 1.5: 5 mins\n  - 1.6: 13 mins\n• Section B (Writing): 60 mins (30 per task)\n\nThe section times are the papers' own advice; the question times are a suggestion worked out from the marks.\n\nLITERATURE COMPONENT 1 (2 hrs):\n• Shakespeare: 45 mins\n• Poetry anthology: 40 mins\n• Unseen poetry: 30 mins\n• Buffer: 5 mins\n\nLITERATURE COMPONENT 2 (2 hrs 30 mins):\n• Post-1914 text: 60 mins\n• 19th-century Q1: 45 mins\n• 19th-century Q2: 45 mins\n\nRULE: Never leave a question blank.",
      },
      {
        id: 'wjec-et-16',
        front: 'WJEC - Key Differences from Other Boards',
        back: 'COMPARED TO AQA:\n• Language has 2 "Components" (not "Papers") - Component 2 is worth more (60%).\n• Shakespeare has NO context marks (AO3).\n• Literature Component 2 Section B has NO extract - all from memory.\n• SPaG is worth 5 marks per essay (not 4).\n\nCOMPARED TO EDEXCEL:\n• Both mark SPaG as AO4; Edexcel\'s is 8 marks, on the post-1914 essay only.\n• Two 19th-century prose questions (not one) - need more quote memorisation.\n• Creative writing is prose only in Component 1.\n\nCOMPARED TO OCR:\n• Both boards set two Language components, but OCR\'s are 2 hours and 50% each.\n• More structured question formats.\n• Heavier weighting on Component 2 (60%).\n• Component 2 sets TWO compulsory writing tasks; each OCR component sets one, from a choice of two.\n\nWJEC-SPECIFIC ADVANTAGES:\n• Shakespeare question doesn\'t need context - focus on analysis.\n• Component 1 reading uses literary fiction - similar skills to Literature.\n• Marking guides reward personal response - be genuine.',
      },
      {
        id: 'wjec-et-17',
        front: 'WJEC - Creative Writing: How to Start Strong',
        back: 'Component 1 Section B is creative prose writing. Your opening is critical.\n\n5 POWERFUL OPENING TECHNIQUES:\n\n1. IN MEDIAS RES - Start in the middle of action.\n"The glass shattered before she even reached the door."\n\n2. SENSORY DETAIL - Immerse the reader immediately.\n"The air tasted of salt and rust, thick enough to chew."\n\n3. SHORT, PUNCHY SENTENCE - Create intrigue.\n"Nobody spoke. Nobody moved."\n\n4. QUESTION - Hook the reader.\n"Have you ever stood at the edge of something and known - absolutely known - you were about to fall?"\n\n5. CONTRASTING IMAGE - Set up tension.\n"The playground was empty, but the swings still moved."\n\nAVOID:\n• "One day..." or "Once upon a time..."\n• Describing waking up or the weather.\n• Long, context-setting paragraphs.\n\nYour first sentence should make the marker want to read more.',
      },
      {
        id: 'wjec-et-18',
        front: 'WJEC - Component 2 Reading: Handling Two Non-Fiction Sources',
        back: 'Component 2 Section A gives you two non-fiction texts: one 21st-century, one 19th-century.\n\nREADING STRATEGY:\n1. Read the 21st-century text first (it\'s usually easier) - 3 mins.\n2. Read the 19th-century text - 5 mins (allow for harder vocabulary).\n3. Answer questions in order.\n\nFOR THE 19TH-CENTURY TEXT:\n• Don\'t be intimidated by long sentences.\n• Look for the main verb in each sentence.\n• Use footnotes if provided.\n• Identify the writer\'s attitude/opinion.\n\nFOR COMPARISON:\n• Start with the bigger picture - what does each writer THINK about the topic?\n• Then zoom in - HOW do they express this? (Tone, language, rhetorical devices.)\n• Use connectives: "In contrast," "Similarly," "While Source A..."\n\nCOMMON MISTAKES: Rushing the 19th-century text, not answering on the correct source, forgetting to compare methods.',
      },
      {
        id: 'wjec-et-19',
        front: 'WJEC - Literature: Memorising Quotes Effectively',
        back: "Component 2 Section B requires quotes from MEMORY. Here is how to learn them.\n\nMETHOD 1 - QUOTE CARDS:\n• Write 15-20 quotes per text on flashcards.\n• Front: theme/character. Back: quote + brief analysis.\n• Test yourself daily.\n\nMETHOD 2 - QUOTE GRIDS:\n• Create a grid: themes across the top, chapters/acts down the side.\n• Fill in key quotes at each intersection.\n• This shows you have coverage of the WHOLE text.\n\nMETHOD 3 - ACRONYMS:\n• Take the first letter of each key quote to make a memorable word/phrase.\n\nMETHOD 4 - WRITE FROM MEMORY:\n• Practise timed essays without the book.\n• See which quotes you naturally remember and which you don't.\n\nQUOTE SELECTION TIPS:\n• Short quotes (3-6 words) are easier to remember and embed.\n• Choose quotes with clear techniques to analyse.\n• Know WHO says it, WHEN, and WHY it matters.\n\nAIM: Be able to write 4 quotes per essay from memory.",
      },
      {
        id: 'wjec-et-20',
        front: 'WJEC - How to Answer "What Impressions..." Questions',
        back: '"What impressions do you get of [character/place]?" is a common WJEC question type.\n\nMARKS: Usually 10 marks, like each of Questions 03, 04 and 05 in Component 1, its biggest reading questions.\n\nWHAT THEY WANT:\n• Your INTERPRETATION of the character/place.\n• Supported with EVIDENCE (quotes).\n• Analysed using METHODS (techniques).\n\nSTRUCTURE (3-4 paragraphs):\n1. First impression + quote + analysis.\n2. Developing impression + quote + analysis.\n3. Contrasting/deeper impression + quote + analysis.\n4. (Optional) Overall impression + summary.\n\nSENTENCE STARTERS:\n• "The reader\'s first impression of [X] is... as shown by \'...\'"\n• "This impression is developed through the writer\'s use of..."\n• "However, a contrasting impression emerges when..."\n• "Overall, [X] is presented as... which suggests..."\n\nTOP TIP: Show that your impression CHANGES or DEEPENS as the extract progresses. This demonstrates sophisticated reading.\n\nCOMMON MISTAKES: Only giving one impression, not using quotes, describing without analysing techniques.',
      },
    ],
  },

  // ─── 5. Universal Essay Skills ─────────────────────────────────────
  {
    id: 'essay-skills',
    title: 'Universal Essay Skills',
    description: 'Core essay writing techniques applicable across all GCSE English boards',
    category: 'Exam Technique',
    board: 'All',
    cards: [
      {
        id: 'es-1',
        front: 'The PEAL Paragraph Structure',
        back: 'PEAL is a reliable analytical paragraph structure.\n\nP - POINT: Make a clear claim that answers the question.\n"Shakespeare presents Macbeth as consumed by guilt..."\n\nE - EVIDENCE: Embed a short quote.\n"...through the haunting image of \'Will all great Neptune\'s ocean wash this blood clean from my hand?\'"\n\nA - ANALYSIS: Explain HOW the technique creates meaning.\n"The rhetorical question reveals Macbeth\'s desperation, while the hyperbolic reference to \'Neptune\'s ocean\' suggests his guilt is so vast that no amount of cleansing can remove it."\n\nL - LINK: Connect back to the question or broaden to a theme.\n"This reinforces the idea that guilt is an inescapable consequence of moral transgression."\n\nWHEN TO USE: Literature essays, Language analysis questions, any time you need a structured analytical paragraph.',
      },
      {
        id: 'es-2',
        front: 'The WHAT-HOW-WHY Method',
        back: 'A simpler alternative to PEAL for quick, focused analysis.\n\nWHAT - What does the writer do?\n"The writer describes the setting using dark, oppressive imagery."\n\nHOW - How do they do it? (Technique + quote)\n"The metaphor \'the sky pressed down like a bruise\' creates a sense of weight and unease through the comparison to injury."\n\nWHY - Why does this matter? (Effect on reader / writer\'s purpose)\n"This positions the reader to feel trapped alongside the character, reflecting the writer\'s intention to convey psychological confinement."\n\nADVANTAGE: Forces you to always reach the WHY - which is where the marks are.\n\nUSE FOR: Any analysis question where you need to move beyond feature-spotting.',
      },
      {
        id: 'es-3',
        front: 'How to Embed Quotes Effectively',
        back: "Embedding means weaving quotes into your own sentences so they flow naturally.\n\nBAD (bolted on):\n\"Macbeth is scared. He says, 'Is this a dagger which I see before me?' This shows he is scared.\"\n\nGOOD (embedded):\n\"Macbeth's hallucination of 'a dagger' before him reveals the psychological fracturing caused by his murderous intent.\"\n\nRULES FOR EMBEDDING:\n1. Keep quotes SHORT (2-5 words is ideal).\n2. Make the quote grammatically part of YOUR sentence.\n3. Use single quotation marks.\n4. If you change a word, use square brackets: '[his] blood.'\n\nEXAMPLES:\n• \"The 'serpent' imagery positions Lady Macbeth as deceptive and dangerous.\"\n• \"Hyde is described as having 'something displeasing' about him, suggesting an instinctive revulsion.\"\n\nTOP TIP: If your quote is longer than one line, it's probably too long. Find the key phrase within it.",
      },
      {
        id: 'es-4',
        front: 'Transition Phrases for Analytical Essays',
        back: 'Strong transitions guide the marker through your argument.\n\nADDING A POINT:\n• "Furthermore," / "Moreover," / "Additionally,"\n• "Equally significant is..."\n\nCONTRASTING:\n• "However," / "Conversely," / "In contrast,"\n• "On the other hand,"\n• "Yet this interpretation is complicated by..."\n\nDEVELOPING:\n• "This is further reinforced by..."\n• "Building on this idea,"\n• "This is particularly significant because..."\n\nCOMPARING:\n• "Similarly," / "Likewise," / "In the same way,"\n• "Both writers share..." / "This echoes..."\n\nCONCLUDING:\n• "Ultimately," / "In essence,"\n• "This reveals that..." / "It is clear that..."\n\nAVOID:\n• "Also" at the start of sentences.\n• "Firstly, secondly, thirdly" (mechanical).\n• "In conclusion" (try "Ultimately" or "Therefore").',
      },
      {
        id: 'es-5',
        front: 'Academic Vocabulary for GCSE English Essays',
        back: 'Using precise, sophisticated vocabulary earns marks. Here are essential terms.\n\nFOR DESCRIBING A WRITER\'S CHOICES:\n• Conveys, suggests, implies, evokes, establishes, reinforces, subverts, critiques, exposes, champions, undermines.\n\nFOR DESCRIBING EFFECTS:\n• Unsettling, poignant, visceral, evocative, disconcerting, compelling, provocative, resonant.\n\nFOR DESCRIBING TONE:\n• Melancholic, sardonic, vitriolic, wistful, ominous, reverent, defiant, contemplative.\n\nFOR ANALYTICAL VERBS:\n• Highlights, illuminates, encapsulates, epitomises, exemplifies, juxtaposes, parallels, mirrors.\n\nFOR SHOWING UNCERTAINTY:\n• "Perhaps," "arguably," "it could be interpreted that," "this may suggest."\n\nTOP TIP: Use these words naturally. One well-placed "evocative" is better than five forced academic words.',
      },
      {
        id: 'es-6',
        front: 'How to Write an Introduction (Literature Essay)',
        back: 'A good introduction does THREE things in 2-3 sentences:\n\n1. ANSWER THE QUESTION directly.\n2. OUTLINE your argument.\n3. (Optional) MENTION the writer\'s overall purpose.\n\nTEMPLATE:\n"[Writer] presents [character/theme] as [your argument], using [key methods] to [effect]. Across the [play/novel], [Writer] [bigger purpose/message]."\n\nEXAMPLE:\n"Priestley presents Mr Birling as the embodiment of capitalist self-interest, using dramatic irony and his bombastic rhetoric to expose the moral bankruptcy of the upper classes. Through Birling\'s humiliation, Priestley argues that collective responsibility must replace selfish individualism."\n\nAVOID:\n• "In this essay I will discuss..."\n• Starting with context.\n• Long plot summaries.\n• Being vague ("Shakespeare writes about many themes...").\n\nLENGTH: 2-4 sentences. No more. Get into analysis quickly.',
      },
      {
        id: 'es-7',
        front: 'How to Write a Conclusion (Literature Essay)',
        back: 'A conclusion should REFINE your argument, not repeat it.\n\nTEMPLATE:\n"Ultimately, [Writer] uses [character/theme/text] to [overall message]. Through [key method], [Writer] challenges/reinforces/exposes [bigger idea], leaving the [reader/audience] to reflect on [final thought]."\n\nEXAMPLE:\n"Ultimately, Shelley uses the Creature\'s suffering to expose the destructive consequences of unchecked ambition and social rejection. Through the novel\'s frame narrative, she implicates the reader in the act of judgement, forcing us to ask whether it is the Creature - or the society that abandoned him - that is truly monstrous."\n\nGOOD CONCLUSIONS:\n• Zoom out to the writer\'s BIG message.\n• End with something thought-provoking.\n• Reference the beginning of your essay (cyclical).\n\nBAD CONCLUSIONS:\n• "In conclusion, [character] is presented in many ways."\n• Introducing new points.\n• Simply restating the introduction.',
      },
      {
        id: 'es-8',
        front: 'Planning Techniques: 5-Minute Essay Plan',
        back: 'NEVER start writing without a plan. 5 minutes of planning saves 10 minutes of confused writing.\n\nMETHOD 1 - SPIDER DIAGRAM:\n• Question in the centre.\n• 4-5 branches = paragraphs.\n• Each branch: point + quote + technique.\n\nMETHOD 2 - NUMBERED LIST:\n1. Intro: thesis statement.\n2. Para 1: [point] - "[quote]" - [technique].\n3. Para 2: [point] - "[quote]" - [technique].\n4. Para 3: [point] - "[quote]" - [technique].\n5. Conclusion: [overall message].\n\nMETHOD 3 - WHAT/HOW/WHY GRID:\n| What? | How? (quote + technique) | Why? (effect/purpose) |\n\nPLANNING RULES:\n• Plan the ARGUMENT, not just the content.\n• Decide your thesis BEFORE you start.\n• Ensure your points cover the WHOLE text (not just one scene).\n• Put your strongest point second-to-last (build to a climax).',
      },
      {
        id: 'es-9',
        front: 'Tentative Language: Why and How',
        back: 'Tentative language shows sophistication. It signals that you understand texts can be interpreted in multiple ways.\n\nWHY USE IT?\n• Markers reward "exploratory" responses.\n• It shows critical thinking, not just certainty.\n• It allows you to explore alternative readings.\n\nTENTATIVE PHRASES:\n• "Perhaps this suggests..."\n• "It could be argued that..."\n• "This might imply..."\n• "Arguably, the writer intends..."\n• "One possible reading is..."\n• "This potentially reflects..."\n\nBALANCE:\n• Don\'t be tentative about EVERYTHING - that sounds unsure.\n• Be CONFIDENT in your main point, then TENTATIVE when exploring alternatives.\n\nEXAMPLE:\n"The blood imagery clearly symbolises guilt. However, it could also be argued that it represents the irreversible nature of violence - once blood is spilled, there is no undoing the act."',
      },
      {
        id: 'es-10',
        front: 'Evaluative Phrases for Critical Analysis',
        back: 'Evaluative language shows you are JUDGING effectiveness, not just describing.\n\nFOR POSITIVE EVALUATION:\n• "The writer effectively/powerfully/convincingly..."\n• "This is particularly successful because..."\n• "The most striking aspect is..."\n• "This skillfully conveys..."\n\nFOR NUANCED EVALUATION:\n• "While this effectively..., it could be argued that..."\n• "The impact of this is somewhat undermined by..."\n• "This works on multiple levels - on the surface... but beneath this..."\n\nFOR COMPARING EFFECTIVENESS:\n• "This is more effective than... because..."\n• "Where [Writer A] relies on..., [Writer B] more subtly..."\n\nWHEN TO USE:\n• Language Paper evaluation questions (AQA Q4, Edexcel Q5).\n• Any time you are asked "How effectively..." or "To what extent..."\n• Poetry comparison - evaluating which poet\'s method is more impactful.\n\nAVOID: "I think it is good." Always explain WHY.',
      },
      {
        id: 'es-11',
        front: 'How to Write About Structure',
        back: 'Structure is often overlooked, but it earns high marks.\n\nWHAT COUNTS AS STRUCTURE:\n• Opening and ending (how they relate).\n• Paragraph/stanza lengths and why they vary.\n• Shifts in focus, time, perspective, or mood.\n• Pace - created through sentence length, dialogue, white space.\n• Foreshadowing, flashbacks, cyclical structure.\n• Building tension and release.\n• The position of the volta (in poetry).\n\nHOW TO WRITE ABOUT IT:\n• "The writer opens with... which establishes..."\n• "There is a structural shift at [point] where the focus moves from... to..."\n• "The short paragraph / sentence creates a pause that emphasises..."\n• "The cyclical structure - returning to [image] - suggests..."\n\nKEY INSIGHT: Structure is about WHY things are placed WHERE they are. Ask: "Why does the writer reveal this NOW?"',
      },
      {
        id: 'es-12',
        front: 'How to Write an Introduction (Persuasive/Argumentative Writing)',
        back: 'For Language Paper writing tasks (articles, speeches, letters, essays):\n\n5 STRONG OPENING STRATEGIES:\n\n1. BOLD STATEMENT:\n"It is a truth universally ignored that our education system is failing the very people it claims to serve."\n\n2. RHETORICAL QUESTION:\n"How many more young people must struggle in silence before we act?"\n\n3. SHOCKING STATISTIC:\n"One in four teenagers reports feeling anxious every single day. That is not a statistic - it is a crisis."\n\n4. ANECDOTE:\n"Last Tuesday, a student in my school fainted during an exam. She had not eaten since the previous morning."\n\n5. DIRECT ADDRESS:\n"You - yes, you - have the power to change this."\n\nRULES:\n• Your opening must make the reader want to continue.\n• State your position clearly within the first paragraph.\n• Match the tone to the form (formal for a letter, engaging for an article).',
      },
      {
        id: 'es-13',
        front: 'How to Write a Conclusion (Persuasive/Argumentative Writing)',
        back: 'For Language Paper writing tasks:\n\nSTRATEGIES:\n\n1. CALL TO ACTION:\n"The time for talk is over. Write to your MP. Sign the petition. Demand change - because if we don\'t, who will?"\n\n2. RETURN TO OPENING (Cyclical):\n"That student I mentioned? She is still waiting. And so are thousands like her."\n\n3. POWERFUL IMAGE:\n"Imagine a world where every child walks into school feeling safe, valued, and heard. That world is possible - but only if we build it."\n\n4. RHETORICAL QUESTION:\n"The question is not whether we can afford to change. The question is whether we can afford not to."\n\n5. SHORT, PUNCHY FINAL SENTENCE:\n"Enough is enough."\n\nRULES:\n• Never introduce new arguments.\n• Echo the tone and energy of your opening.\n• Leave the reader with something memorable.\n• Keep it concise - 3-5 sentences maximum.',
      },
      {
        id: 'es-14',
        front: 'Varying Sentence Types for Effect',
        back: 'Using a range of sentence types shows control and earns marks across all papers.\n\nSIMPLE (short, punchy):\n"She ran." - Impact, urgency, emphasis.\n\nCOMPOUND (joined by and/but/or/so):\n"The door was open, but nobody dared to enter." - Balance, contrast.\n\nCOMPLEX (subordinate clause):\n"Although the sun was shining, a sense of dread lingered in the air." - Sophistication, layered meaning.\n\nMINOR/FRAGMENT:\n"Silence." - Dramatic emphasis.\n\nRHETORICAL QUESTION:\n"Who could possibly ignore such suffering?" - Engages reader.\n\nEXCLAMATORY:\n"Enough!" - Emotion, force.\n\nLIST SENTENCE:\n"The room was cluttered with broken chairs, stained carpets, cracked mirrors, and memories nobody wanted." - Accumulation.\n\nRULE: Vary sentence length within a paragraph. A long, flowing sentence followed by a short one creates rhythm and emphasis.',
      },
      {
        id: 'es-15',
        front: 'How to Analyse Word-Level Choices',
        back: 'The highest marks come from ZOOMING INTO individual words.\n\nMETHOD:\n1. Select a single word from your quote.\n2. Explore its CONNOTATIONS (associations, implications).\n3. Consider what ALTERNATIVE word the writer could have used.\n4. Explain why THIS word was chosen.\n\nEXAMPLE:\n"Hyde \'trampled calmly\' over the girl."\n• "Trampled" - connotations of violence, weight, dehumanisation. Suggests Hyde treats the child like something beneath him.\n• "Calmly" - absence of emotion, sociopathic indifference. The adverb is more disturbing than the verb - it is the CALM that horrifies.\n• The OXYMORON of violence + calm creates a sense of wrongness.\n\nKEY PHRASES:\n• "The connotations of \'...\' suggest..."\n• "The writer\'s choice of \'...\' rather than \'...\' implies..."\n• "At word level, \'...\' carries associations of..."\n\nTHIS IS WHAT SEPARATES TOP-BAND FROM MID-BAND RESPONSES.',
      },
      {
        id: 'es-16',
        front: 'Paragraphing for Effect',
        back: 'Paragraphing is a structural tool, not just an organisational one.\n\nIN ANALYTICAL ESSAYS:\n• One paragraph = one point.\n• Topic sentence at the start of each paragraph.\n• Link sentence at the end connecting to the next point or back to the question.\n\nIN CREATIVE WRITING:\n• Short paragraphs = urgency, shock, emphasis.\n• Long paragraphs = description, reflection, immersion.\n• One-line paragraphs = maximum dramatic impact.\n• Vary paragraph length to create RHYTHM.\n\nIN PERSUASIVE WRITING:\n• Each paragraph = one argument/point.\n• Build from least to most compelling.\n• Counter-argument in its own paragraph.\n• Short final paragraph for impact.\n\nGOLDEN RULE: If your paragraph is longer than half a page, it probably needs splitting.\n\nMARKER TIP: No paragraphs = automatic cap on your mark. Always paragraph.',
      },
      {
        id: 'es-17',
        front: 'Comparing Texts: A Framework',
        back: 'For any comparison question (Language or Literature):\n\nSTRUCTURE OPTION 1 - ALTERNATING (Recommended):\n• Paragraph 1: Point about Text A → Compare with Text B.\n• Paragraph 2: Point about Text A → Compare with Text B.\n• Paragraph 3: Point about Text A → Compare with Text B.\n\nSTRUCTURE OPTION 2 - BLOCK:\n• Paragraphs 1-2: Text A analysis.\n• Paragraphs 3-4: Text B analysis with comparison back to A.\n(This is easier but earns fewer comparison marks.)\n\nCOMPARATIVE CONNECTIVES:\n• Similarity: "Similarly," "Likewise," "Both texts," "Echoing this,"\n• Difference: "However," "In contrast," "Conversely," "While Text A..."\n• Nuance: "Although both texts..., they differ in..."\n\nWHAT TO COMPARE:\n• Themes/ideas.\n• Language choices.\n• Tone and register.\n• Structure and form.\n• Writer\'s purpose.\n\nNEVER just write about one text then the other with no links.',
      },
      {
        id: 'es-18',
        front: 'Using Discourse Markers in Essays',
        back: 'Discourse markers guide the reader through your argument. They signal the relationship between ideas.\n\nTO ADD:\n• Furthermore, Moreover, In addition, Equally, Similarly.\n\nTO CONTRAST:\n• However, Nevertheless, Conversely, On the other hand, Yet.\n\nTO EXEMPLIFY:\n• For instance, This is evident in, As demonstrated by.\n\nTO EMPHASISE:\n• Indeed, Significantly, Crucially, It is worth noting that.\n\nTO CONCLUDE:\n• Ultimately, Therefore, Thus, Consequently, In essence.\n\nTO SEQUENCE:\n• Initially, Subsequently, Following this, At the outset, By the end.\n\nTO SHOW CAUSE:\n• Consequently, As a result, This leads to, Therefore.\n\nTOP TIP: Place discourse markers at the START of sentences, not in the middle. Use them at paragraph openings to create flow between ideas.\n\nAVOID: Overusing the same marker. Aim for variety.',
      },
      {
        id: 'es-19',
        front: "How to Discuss a Writer's Purpose and Intentions",
        back: 'Markers reward discussion of WHY the writer made their choices.\n\nFRAMEWORK:\n"[Writer] uses [technique] to [effect on reader], perhaps intending to [bigger purpose/message]."\n\nEXAMPLES:\n• "Dickens uses Tiny Tim\'s fragility to evoke pathos, challenging his middle-class readership to confront the human cost of their indifference to poverty."\n• "Duffy uses the dramatic monologue form to give voice to historically silenced women, subverting the male-dominated literary canon."\n\nKEY PHRASES:\n• "[Writer] intends to / aims to / seeks to..."\n• "[Writer] challenges / reinforces / critiques / exposes / celebrates..."\n• "The reader is positioned to..."\n• "[Writer] invites the reader to question..."\n\nAVOID:\n• "The author is trying to..." (too informal - use "seeks to" or "endeavours to").\n• Making claims about what the writer THOUGHT without evidence.\n• Confusing character views with author views.',
      },
      {
        id: 'es-20',
        front: 'Proofreading Checklist: The Final 5 Minutes',
        back: 'ALWAYS save 3-5 minutes at the end to proofread. These marks are FREE.\n\nCHECK IN THIS ORDER:\n\n1. CAPITAL LETTERS:\n• Sentence starts, proper nouns, titles.\n• Character names: Scrooge, Macbeth, Inspector Goole.\n\n2. FULL STOPS AND COMMAS:\n• Every sentence ends with a full stop, question mark, or exclamation mark.\n• No comma splicing (two sentences joined by just a comma).\n\n3. APOSTROPHES:\n• Possession: "the writer\'s method" (NOT "the writers method").\n• Contraction: "it\'s" = "it is" (NOT possession - "its" = belonging to it).\n\n4. SPELLING:\n• Character names.\n• Key terms: metaphor, juxtaposition, Shakespeare, rhetorical.\n• Homophones: their/there/they\'re, effect/affect, where/were.\n\n5. TENSE:\n• Literature essays = present tense ("Shakespeare presents," NOT "presented").\n• Creative writing = consistent tense throughout.\n\nFIXING ONE ERROR = potentially one extra mark. Five minutes of proofreading can gain you several marks across the paper.',
      },
      {
        // 31 October 2026: this gave Pearson's 1EN0 Paper 1 96 marks and AQA's
        // question pattern (4, 8, 12, 16, then a 40-mark Q5) with a two-source
        // comparison the paper does not set. It now follows the guide in
        // src/data/mark-scheme-guides/edexcel-lang-paper1.ts: 64 marks, one
        // 19th-century extract, Q1 1, Q2 2, Q3 6, Q4 15, then Question 5 or 6.
        id: 'es-21',
        front: 'Edexcel Language Paper 1 Technique',
        back: "EDEXCEL GCSE ENGLISH LANGUAGE PAPER 1, FICTION AND IMAGINATIVE WRITING (1hr 45 mins, 64 marks, 40% of the GCSE)\n\nSECTION A: READING (24 marks), on one unseen extract from a 19th-century novel or story\n• Question 1 (1 mark): Find a detail in the lines named.\n• Question 2 (2 marks): Two points from a short section.\n• Question 3 (6 marks): How the writer uses language and structure.\n• Question 4 (15 marks): Evaluate how successfully the writer creates an effect the question names.\n\nSECTION B: WRITING (40 marks)\n• Question 5 or 6: one piece of imaginative writing, from a choice of two tasks.\n\nKEY STRATEGIES:\n• Q1 and Q2: Close reading of exactly what is stated. Keep them short.\n• Q3: Analyse word choice and how the section is built. Use PEE (Point-Evidence-Explanation), and cover structure as well as language.\n• Q4: Give a clear judgement, backed by quotations and the writer's methods.\n• Q5/Q6: Plan before writing. Include sensory detail, varied sentences, sophisticated vocabulary.\n\nMARKING:\n• Reading = 24 marks.\n• Writing = 40 marks: 24 for content and organisation (AO5), 16 for technical accuracy (AO6).\n\nTIME MANAGEMENT (the paper advises about 1 hour on Section A and 45 minutes on Section B): about 10 mins reading, then Q1 2, Q2 4, Q3 12, Q4 32; Section B 5 planning, 35 writing, 5 checking.",
      },
      {
        // 31 October 2026: this card and es-23 described papers that do not exist.
        // This one was "H009/01 (1hr 30 mins, 105 marks)": H009 is an AS-level code,
        // and its three 15-mark questions, a 30-mark writing task and 15 SPaG marks
        // are no OCR GCSE paper. It now follows the J351/01 guide in
        // src/data/mark-scheme-guides/ocr-lang-component01.ts.
        id: 'es-22',
        front: 'OCR English Language Paper 1 Technique',
        back: "OCR GCSE ENGLISH LANGUAGE J351/01, COMMUNICATING INFORMATION AND IDEAS (2 hours, 80 marks)\n\nSECTION A: READING (40 marks)\n• Question 1 (4 marks): Find information in a set of lines from Text 1.\n• Question 2 (6 marks): Bring the two texts together on a link the question names.\n• Question 3 (12 marks): Analyse how one writer uses language and structure.\n• Question 4 (18 marks): Respond to a statement about both texts: evaluate (12) and compare (6).\n\nSECTION B: WRITING (40 marks)\n• Question 5 or 6: one piece of non-fiction writing, such as a speech, letter or article, from a choice of two tasks.\n\nKEY STRATEGIES:\n• Q1: Use only the lines named. Short, exact answers.\n• Q2: Link the texts in every point, with evidence from both. No language analysis is needed.\n• Q3: Cover structure as well as language, and explain the effect of each choice.\n• Q4: Give a clear verdict, quote both texts, compare the writers' methods.\n• Q5/Q6: Match form and audience. Plan, vary sentence length, proofread.\n\nMARKING:\n• Reading = 40 marks.\n• Writing = 40 marks: 24 for content and organisation (AO5), 16 for technical accuracy (AO6).\n\nTIME MANAGEMENT: OCR advises about 1 hour on Section A and 1 hour on Section B.",
      },
      {
        // 31 October 2026: this was "WJEC GCSE ENGLISH LANGUAGE (2 hours, 120 marks)",
        // one paper of five reading questions and a 60-mark writing section. Eduqas
        // sets two components of 80 marks; this now follows the C700 guides in
        // src/data/mark-scheme-guides/eduqas-lang-comp1.ts and eduqas-lang-comp2.ts.
        id: 'es-23',
        front: 'WJEC English Language Exam Technique',
        back: 'EDUQAS (WJEC) GCSE ENGLISH LANGUAGE: TWO COMPONENTS OF 80 MARKS\n\nCOMPONENT 1 (1 hour 45 mins, 40% of the GCSE)\n• Section A, Reading (40 marks), on one 20th-century fiction extract: Q01 (5) find information, Q02 (5) and Q03 (10) language, Q04 (10) language and structure, Q05 (10) evaluate a view.\n• Section B, Writing (40 marks): one story or account, from a choice of four titles.\n\nCOMPONENT 2 (2 hours, 60% of the GCSE)\n• Section A, Reading (40 marks), on one 19th-century and one 21st-century non-fiction text: 1.1 (3), 1.2 (10), 1.3 (3), 1.4 (10) evaluation, 1.5 (4) bringing details together, 1.6 (10) comparison.\n• Section B, Writing (40 marks): TWO compulsory tasks, 2.1 and 2.2, of 20 marks each, such as a letter, article, review or speech.\n\nKEY STRENGTHS FOR EDUQAS:\n• "Evaluate" questions require JUDGEMENT, backed by the text.\n• Comparison needs both what the writers say and how they say it.\n• Writing tasks reward a form and tone that suit the reader.\n\nTIME MANAGEMENT (the papers\' own advice): Component 1, about 60 mins reading and 45 writing. Component 2, about 60 mins reading and 30 mins on each writing task.',
      },
      {
        id: 'es-24',
        front: 'AQA Literature Paper 2 - Modern Text Strategy',
        back: "UNPREPARED TEXT + TEXT YOU KNOW\n\nSECTION A: MODERN TEXT (30 marks, 45 mins)\n• Choose one question from two options.\n• NO EXTRACT PROVIDED - you write from memory.\n\nSUCCESS DEPENDS ON:\n• Knowing 15-20 key quotes from your set text.\n• Understanding character motivations and development.\n• Tracking themes across the ENTIRE play/novel.\n• Discussing writer's methods intentionally (not just listing techniques).\n\nTEMPLATE:\nIntro (thesis) → Para 1 (point + quote + effect + context) → Para 2 → Para 3 → Para 4 → Conclusion.\n\nMARKING:\n• AO1 (12 marks): Direct, relevant response with integrated quotes.\n• AO2 (12 marks): Analysis of writer's methods.\n• AO3 (6 marks): Relevant context and authorial purpose.\n\nCOMMON MISTAKES:\n• Only writing about one part of the text.\n• Including quotes that don't serve your point.\n• Paraphrasing instead of analysing.\n• Missing context opportunities.\n\nPREPARATION: Create a revision guide with key quotes organised by character/theme.",
      },
      {
        id: 'es-25',
        front: 'CAIE English Literature Technique',
        back: 'CAMBRIDGE IGCSE ENGLISH LITERATURE (2 papers, 3 hours total)\n\nPAPER 1: POETRY & PROSE (1hr 45 mins, 96 marks)\n• Section A: Unseen poetry (24 marks).\n• Section B: Poetry anthology comparison (24 marks).\n• Section C: Prose essay (24 marks).\n• Section D: Choice of extended essay or passage analysis (24 marks).\n\nPAPER 2: DRAMA (1hr 45 mins, 96 marks)\n• Section A: Extract-based question (24 marks).\n• Section B: Thematic essay (24 marks).\n• Section C: Character essay (24 marks).\n• Section D: Extended essay (24 marks).\n\nKEY STRATEGIES:\n• Unseen poetry: Annotate, identify techniques, explore meaning.\n• Comparison: Use comparative language, analyse methods across poems.\n• Prose/Drama essays: Know set texts thoroughly, structure clearly.\n• SPaG and expression valued across all sections.\n\nMARKING:\n• Analysis and interpretation = 8 marks per question.\n• Use of textual evidence = 8 marks per question.\n• Quality of expression = 8 marks per question.\n\nTIME MANAGEMENT: Allocate 20 mins per 24-mark question.',
      },
      {
        id: 'es-26',
        front: 'Analysing Structural Techniques',
        back: 'STRUCTURE carries meaning. Markers reward discussing PLACEMENT and EFFECT.\n\nKEY STRUCTURAL FEATURES:\n1. OPENING (What is established?)\n2. ENDING (How does it relate to opening? Cyclical? Twist? Resolution?)\n3. PACING (Slow → Fast? Tension building?)\n4. SHIFTS IN FOCUS (When does the viewpoint/setting/character change?)\n5. POSITION OF KEY MOMENT (Early crisis? Late climax? Why there?)\n6. FORESHADOWING (What hints appear before events?)\n7. JUXTAPOSITION (What is placed alongside what? For contrast?)\n8. REPETITION OF SCENES (What returns? Why?)\n\nHOW TO WRITE ABOUT IT:\n• "The opening establishes... which makes the ending\'s return to this image ironic because..."\n• "By placing the climax in the middle of the text rather than the end, the writer forces readers to see consequences unfold."\n• "The short, brutal sentences in this paragraph contrast with the long, flowing descriptions earlier, mirroring the character\'s emotional shift."\n\nKEY INSIGHT: Ask "Why HERE?" for every structural choice. The answer is the analysis.',
      },
      {
        id: 'es-27',
        front: 'Analysing Tense and Perspective',
        back: 'TENSE and PERSPECTIVE shape how readers experience a text.\n\nTENSE CHOICES:\n• Present tense: Immediacy, urgency, "now-ness."\n• Past tense: Reflection, memory, emotional distance.\n• Future tense: Prediction, hope, dread.\n• Shifts in tense: Can show changing emotional states or reveal unreliability.\n\nPERSPECTIVE CHOICES:\n• First person ("I"): Intimate, subjective. Reader only knows what the narrator knows.\n• Second person ("You"): Direct address, confrontational, makes reader complicit.\n• Third person (close): Focus on one character\'s thoughts while narrating from outside.\n• Third person (omniscient): God-like knowledge of all characters. Can create dramatic irony.\n• Shifting perspective: Can show multiple viewpoints or character development.\n\nWHEN ANALYSING:\n• Link tense/perspective shifts to meaning.\n• "The shift to second person directly addresses the reader, making them complicit in the character\'s guilt."\n• "The unreliable first-person narrator reveals through gaps in memory that he is denying his own guilt."\n\nTOP MARK MOVES: Notice when tense/perspective is NOT what you\'d expect, and explore the effect.',
      },
      {
        id: 'es-28',
        front: 'Analysing Dialogue',
        back: 'DIALOGUE reveals character, drives plot, and conveys theme.\n\nWHAT TO ANALYSE:\n1. WHAT IS SAID (Content - explicit meaning).\n2. HOW IT\'S SAID (Register, formality, dialect, vocabulary).\n3. WHAT\'S NOT SAID (Subtext - what is implied or hidden).\n4. WHO SPEAKS (Frequency - who dominates conversation?).\n5. INTERRUPTIONS (Who speaks over whom? Power dynamics).\n6. SILENCE (What is left unsaid? Why can\'t characters speak?).\n\nEXAMPLE:\n"The Inspector: "You\'re not responsible for Eva\'s death."\nMr Birling: "Of course not! She was just a maid!"\n• Mr Birling\'s interruption and exclamation mark show defensiveness.\n• The class reference ("just a maid") reveals his prejudice.\n• The Inspector\'s calmness contrasts with Birling\'s panic - power reversal.\n\nKEY PHRASES:\n• "Through dialogue, the character reveals..."\n• "The formality/informality of the exchange suggests..."\n• "The fact that [character] does not respond to this indicates..."\n\nTOP MARK MOVE: Analyse what the dialogue REVEALS about the character, not just what they say.',
      },
      {
        id: 'es-29',
        front: 'Analysing Setting and Atmosphere',
        // Until 2 October 2026 the example was "The dark, narrow streets of Soho", given
        // as Jekyll and Hyde's words, which the novel never prints. It is now Stevenson's
        // own description of Soho, Chapter 4 of the held edition (Project Gutenberg #43,
        // src/data/full-texts/jekyll-and-hyde.ts), and the notes follow its words.
        back: 'SETTING is not just backdrop - it shapes meaning and atmosphere.\n\nWHAT TO ANALYSE:\n1. LITERAL SETTING (Place, time period, season, weather).\n2. HOW IT\'S DESCRIBED (Adjectives, imagery, tone).\n3. CHARACTER-SETTING INTERACTION (Are characters comfortable? Out of place?)\n4. CHANGES IN SETTING (What do movements between locations mean?)\n5. MOOD/ATMOSPHERE (What feeling does the setting create?).\n6. PATHETIC FALLACY (Does weather mirror emotions?)\n\nEXAMPLE:\n"The dismal quarter of Soho... with its muddy ways, and slatternly passengers" (Jekyll and Hyde, Chapter 4)\n• Dismal = gloom, moral darkness, danger.\n• Muddy, slatternly = dirt and disorder, the opposite of respectable London.\n• Soho location = known as dissolute area (historical context).\n• Together: These settings symbolise the moral darkness within respectable men.\n\nKEY PHRASES:\n• "The setting functions as a microcosm for..."\n• "The description of [place] establishes an atmosphere of..."\n• "The character\'s movement from [location A] to [location B] symbolises..."\n\nTOP MARK MOVE: Link setting to theme. Show how the where shapes the what and why.',
      },
      {
        id: 'es-30',
        front: 'Answering "To What Extent" Questions',
        back: 'These questions ask you to EVALUATE and ARGUE, not just describe.\n\n"TO WHAT EXTENT" means: How much? How far? How true is this statement?\n\nAPPROACH:\n1. Take a position: Agree fully, partially, or disagree.\n2. Build your case with evidence.\n3. Acknowledge the other side.\n4. Conclude with your judgment.\n\nSTRUCTURE:\nIntro: "To a significant extent, [statement is true] because..., though some qualification exists."\n\nBody para 1: Evidence FOR the statement.\nBody para 2: Evidence FOR but with some complication.\nBody para 3: Evidence AGAINST or limitations.\nBody para 4: Synthesis.\n\nConclusion: "Overall, [statement is true/partially true] in that... However, [qualification]."\n\nLANGUAGE:\n• "Convincingly suggests..."\n• "The extent to which this is true is limited because..."\n• "While this argument has merit, it overlooks..."\n• "Ultimately, the evidence points to..."\n\nKEY RULE: Avoid yes/no binary answers. Show nuance. "Both... and..." is your friend.\n\nMARK DIFFERENCE: Level 4 = Simple answer (yes or no). Level 5 = Nuanced, qualified answer.',
      },
    ],
  },
]
