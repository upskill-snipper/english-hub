import type { FlashcardDeck } from './flashcard-data';

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
        id: 'aqa-et-1',
        front: 'AQA Language Paper 1, Question 1',
        back: 'WHAT IT TESTS: AO1 — Identify and interpret explicit/implicit information.\n\nMARKS: 4 marks\nTIMING: 5 minutes\n\nAPPROACH: Read the specified lines carefully. Choose 4 TRUE statements from the list of 8. Shade the boxes clearly.\n\nKEY TIPS:\n• Read every option before selecting.\n• Watch for subtle changes in wording — "always" vs "sometimes" can flip truth.\n• If unsure, eliminate the obviously false ones first.\n\nCOMMON MISTAKES: Selecting more than 4 (you lose marks for extras), rushing and misreading small details, not reading the exact line references given.',
      },
      {
        id: 'aqa-et-2',
        front: 'AQA Language Paper 1, Question 2',
        back: 'WHAT IT TESTS: AO2 — How does the writer use language to...\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Identify specific language features (word-level, then sentence-level). Use short, embedded quotes. Analyse the EFFECT of each technique on the reader.\n\nSENTENCE STARTERS:\n• "The writer uses [technique] in the phrase \'...\' to suggest..."\n• "The connotations of \'...\' imply..."\n• "This creates an effect of... for the reader because..."\n\nSTRUCTURE: 3 detailed paragraphs > 5 shallow ones.\n\nCOMMON MISTAKES: Feature-spotting without analysis, ignoring word-level detail, writing about structure (that is Q3).',
      },
      {
        id: 'aqa-et-3',
        front: 'AQA Language Paper 1, Question 3',
        back: 'WHAT IT TESTS: AO2 — How does the writer use structure to...\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Think about the WHOLE text — beginning, middle, end. Consider: focus shifts, narrative perspective changes, sentence length changes, paragraphing, cyclical structure, contrast, withholding information.\n\nSENTENCE STARTERS:\n• "At the opening, the writer focuses on... which establishes..."\n• "The writer then shifts the focus to... which creates..."\n• "The reader\'s attention is drawn to... through the use of..."\n\nCOMMON MISTAKES: Writing about language instead of structure, not covering the whole text, confusing structural features with language features.',
      },
      {
        id: 'aqa-et-4',
        front: 'AQA Language Paper 1, Question 4',
        back: 'WHAT IT TESTS: AO4 — Critically evaluate a statement about the text.\n\nMARKS: 20 marks\nTIMING: 20–25 minutes\n\nAPPROACH: You are given a statement (e.g., "The writer makes the reader feel sympathy for the character"). You must argue to what extent you agree using textual evidence.\n\nSTRUCTURE:\n1. State your position clearly.\n2. Select quotes that support and/or challenge the statement.\n3. Analyse language/structure for each quote.\n4. Offer a personal, evaluative response.\n\nSENTENCE STARTERS:\n• "I agree that... because the writer uses..."\n• "This is convincing because..."\n• "However, it could also be argued that..."\n\nCOMMON MISTAKES: Not engaging with the statement, retelling the story, forgetting to evaluate (agree/disagree).',
      },
      {
        id: 'aqa-et-5',
        front: 'AQA Language Paper 1, Question 5',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation) + AO6 (Technical Accuracy).\n\nMARKS: 40 marks (24 + 16)\nTIMING: 45 minutes (5 mins planning, 35 writing, 5 checking)\n\nAPPROACH: Descriptive or narrative writing. Choose ONE task. Plan before writing.\n\nKEY STRATEGIES:\n• Use a range of sentence types (short for impact, complex for detail).\n• Include sensory imagery (5 senses).\n• Vary paragraph lengths.\n• Show, don\'t tell emotions.\n• Use ambitious vocabulary and figurative language.\n• Open with a hook; end with resonance.\n\nPLANNING: Who, Where, What happens, What\'s the emotion, What\'s the ending.\n\nCOMMON MISTAKES: No planning, overcomplicating the plot, weak openings, ignoring SPaG, not paragraphing.',
      },
      // ── Paper 2: Writers' Viewpoints and Perspectives ──
      {
        id: 'aqa-et-6',
        front: 'AQA Language Paper 2, Question 1',
        back: 'WHAT IT TESTS: AO1 — Identify true statements about Source A.\n\nMARKS: 4 marks\nTIMING: 5 minutes\n\nAPPROACH: Same format as Paper 1 Q1. Select 4 TRUE statements from 8 options about Source A only.\n\nKEY TIPS:\n• Only refer to the lines specified.\n• Read carefully — one word can change meaning.\n• Don\'t overthink it; this is retrieval, not inference.\n\nCOMMON MISTAKES: Referring to Source B, selecting more than 4, not reading all options.',
      },
      {
        id: 'aqa-et-7',
        front: 'AQA Language Paper 2, Question 2',
        back: 'WHAT IT TESTS: AO1 — Summarise differences/similarities between two sources.\n\nMARKS: 8 marks\nTIMING: 10 minutes\n\nAPPROACH: Use BOTH sources. Find clear points of comparison. Use short quotes from each source as evidence. Focus on INFERENCES, not just surface detail.\n\nSTRUCTURE:\n• Point about Source A + quote, then contrast/compare with Source B + quote.\n• Aim for 3–4 comparative paragraphs.\n\nSENTENCE STARTERS:\n• "Both sources suggest that..."\n• "However, while Source A implies..., Source B suggests..."\n\nCOMMON MISTAKES: Only writing about one source, describing rather than inferring, copying out long quotes.',
      },
      {
        id: 'aqa-et-8',
        front: 'AQA Language Paper 2, Question 3',
        back: 'WHAT IT TESTS: AO2 — How does the writer use language to...\n\nMARKS: 12 marks\nTIMING: 12–15 minutes\n\nAPPROACH: Analyse ONE source only (the one specified). Same skills as Paper 1 Q2 but with more depth and 4 extra marks.\n\nSTRUCTURE: 3–4 paragraphs, each with: technique + embedded quote + detailed effect on reader.\n\nSENTENCE STARTERS:\n• "The writer employs [technique] in \'...\' which conveys..."\n• "The reader is positioned to feel... because..."\n\nCOMMON MISTAKES: Writing about both sources, not identifying specific techniques, surface-level analysis.',
      },
      {
        id: 'aqa-et-9',
        front: 'AQA Language Paper 2, Question 4',
        back: 'WHAT IT TESTS: AO3 — Compare how two writers convey their perspectives.\n\nMARKS: 16 marks\nTIMING: 20–25 minutes\n\nAPPROACH: Compare BOTH sources throughout. Identify each writer\'s viewpoint, then compare HOW they present it using language and structural methods.\n\nSTRUCTURE:\n1. State both writers\' perspectives.\n2. Compare methods: tone, language techniques, structure, rhetorical devices.\n3. Use connectives of comparison throughout.\n\nSENTENCE STARTERS:\n• "Both writers convey... however, Writer A uses... whereas Writer B..."\n• "While Source A adopts a [tone] through..., Source B contrasts this with..."\n\nCOMMON MISTAKES: Treating each source separately (no comparison), forgetting to analyse methods, only comparing content.',
      },
      {
        id: 'aqa-et-10',
        front: 'AQA Language Paper 2, Question 5',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation) + AO6 (Technical Accuracy).\n\nMARKS: 40 marks (24 + 16)\nTIMING: 45 minutes (5 planning, 35 writing, 5 checking)\n\nFORM: Writing to present a viewpoint — could be a letter, article, speech, or essay.\n\nKEY STRATEGIES:\n• Match the form (e.g., "Dear Sir/Madam" for a letter, headline for an article).\n• Use persuasive devices: rhetorical questions, tricolon, direct address, emotive language, anecdote, statistics, counter-argument.\n• Plan 4–5 paragraphs with a clear line of argument.\n• Include a powerful opening and a memorable conclusion.\n\nCOMMON MISTAKES: Ignoring the form, ranting without structure, weak SPaG, no counter-argument.',
      },
      // ── Literature Paper 1: Shakespeare and the 19th-Century Novel ──
      {
        id: 'aqa-et-11',
        front: 'AQA Literature Paper 1 — Shakespeare (Section A)',
        back: 'WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context).\n\nMARKS: 30 marks + 4 SPaG\nTIMING: 55 minutes (including 5 mins planning)\n\nAPPROACH: You get an extract + an essay question. Write about the extract AND the rest of the play.\n\nSTRUCTURE:\n1. Brief intro — answer the question directly.\n2. 2–3 paragraphs on the EXTRACT (close language analysis).\n3. 2–3 paragraphs on the WIDER PLAY (themes, other scenes).\n4. Weave in context naturally.\n\nSENTENCE STARTERS:\n• "Shakespeare presents [character/theme] as... through..."\n• "The [technique] in \'...\' suggests..."\n• "A Jacobean/Elizabethan audience would have..."\n\nCOMMON MISTAKES: Only writing about the extract, bolting on context, retelling the plot.',
      },
      {
        id: 'aqa-et-12',
        front: 'AQA Literature Paper 1 — 19th-Century Novel (Section B)',
        back: 'WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context).\n\nMARKS: 30 marks\nTIMING: 50 minutes (including 5 mins planning)\n\nAPPROACH: Extract + essay question. Write about the extract AND the wider novel.\n\nSTRUCTURE:\n1. Intro — thesis statement.\n2. 2–3 paragraphs on the extract.\n3. 2–3 paragraphs on the wider novel.\n4. Embed context (Victorian attitudes, social class, gender, etc.).\n\nKEY TIPS:\n• Zoom into individual words in the extract.\n• Link to the writer\'s intentions (Dickens wanted to expose poverty, etc.).\n• Discuss structural choices as well as language.\n\nCOMMON MISTAKES: Not linking to the wider text, context as a bolt-on paragraph, not answering the question.',
      },
      // ── Literature Paper 2: Modern Text, Poetry, Unseen Poetry ──
      {
        id: 'aqa-et-13',
        front: 'AQA Literature Paper 2 — Modern Text (Section A)',
        back: 'WHAT IT TESTS: AO1 (Response + quotes), AO2 (Methods), AO3 (Context) — NO extract given.\n\nMARKS: 30 marks + 4 SPaG\nTIMING: 45 minutes\n\nAPPROACH: Choose one question from two. You must write from memory — no extract provided. You need to know quotes.\n\nSTRUCTURE:\n1. Brief intro with thesis.\n2. 4–5 paragraphs, each covering a different moment/aspect.\n3. Each paragraph: Point + Quote + Analysis + Context.\n\nKEY TIPS:\n• Memorise 15–20 key quotes per text.\n• Track the theme/character across the WHOLE text.\n• Discuss the writer\'s craft (why they made these choices).\n\nCOMMON MISTAKES: Not knowing enough quotes, only writing about one part of the text, ignoring the writer\'s methods.',
      },
      {
        id: 'aqa-et-14',
        front: 'AQA Literature Paper 2 — Poetry Anthology (Section B)',
        back: 'WHAT IT TESTS: AO1 (Response), AO2 (Methods), AO3 (Context), AO4 (Comparison).\n\nMARKS: 30 marks\nTIMING: 45 minutes\n\nAPPROACH: One named poem is printed. Compare it with ONE other poem of your choice from the anthology.\n\nSTRUCTURE:\n1. Brief intro — state both poems and your argument.\n2. Alternate between poems OR write about one then the other (alternating is better).\n3. Each paragraph: Point + Quote from Poem A + Analysis + Link to Poem B + Quote + Analysis.\n\nKEY TIPS:\n• Prepare comparison pairs in advance.\n• Compare methods (language, structure, form) as well as themes.\n• Use comparative connectives throughout.\n\nCOMMON MISTAKES: Not comparing enough, only discussing content, not analysing the printed poem in detail.',
      },
      {
        id: 'aqa-et-15',
        front: 'AQA Literature Paper 2 — Unseen Poetry (Section C)',
        back: 'WHAT IT TESTS: Part 1 — AO1 + AO2 (24 marks). Part 2 — AO2 comparison (8 marks).\n\nTIMING: Part 1 = 30 minutes. Part 2 = 15 minutes.\n\nPART 1 APPROACH:\n1. Read the poem 3 times (overview, detail, meaning).\n2. Annotate: imagery, structure, tone shifts, key words.\n3. Write 3–4 analytical paragraphs.\n\nPART 2 APPROACH:\n• Compare ONE method between both poems.\n• Write 2–3 focused paragraphs.\n• Keep it concise — don\'t repeat Part 1.\n\nSENTENCE STARTERS:\n• "The poet conveys [theme] through the use of..."\n• "Both poets explore... however, while Poem A..., Poem B..."\n\nCOMMON MISTAKES: Spending too long on Part 1, not comparing in Part 2, paraphrasing instead of analysing.',
      },
      // ── SPaG and AO4 Strategy ──
      {
        id: 'aqa-et-16',
        front: 'AQA SPaG Marks — How to Secure All 4',
        back: 'SPaG is worth 4 marks on Shakespeare and Modern Text questions.\n\nLEVEL 4 (4 marks) requires:\n• Consistent accurate spelling including complex/ambitious vocabulary.\n• Consistent accurate punctuation — commas, semicolons, apostrophes, colons.\n• Varied sentence forms used effectively for clarity and effect.\n\nSTRATEGY:\n• Save 3–5 minutes at the end for proofreading.\n• Check: capital letters, full stops, comma splicing, apostrophes.\n• Use semicolons and colons deliberately (even one correct use shows range).\n• Spell character names and key terms correctly.\n\nEASY WINS: Know how to spell "Shakespeare," your character names, and 10 analytical words (juxtaposition, foreshadowing, symbolism, etc.).',
      },
      {
        id: 'aqa-et-17',
        front: 'AQA — How to Embed Context (AO3)',
        back: 'Context must feel WOVEN IN, not bolted on.\n\nBAD: "In Victorian times, women had no rights. This links to the text because..."\nGOOD: "Dickens critiques the rigid class system of Victorian England through Pip\'s shame at his \'coarse hands,\' reflecting how social mobility was defined by appearance."\n\nSTRATEGIES:\n• Link context to the writer\'s PURPOSE ("Shelley uses the Creature to challenge Enlightenment arrogance").\n• Use phrases like: "reflecting contemporary anxieties about...", "Dickens, writing for a middle-class audience, exposes...", "Shakespeare subverts the patriarchal expectations of his audience by...".\n\nKEY CONTEXTS TO KNOW: Social class, gender roles, religion, political climate, the writer\'s own life/views.',
      },
      {
        id: 'aqa-et-18',
        front: 'AQA — Time Management Across Papers',
        back: 'LANGUAGE PAPER 1 (1 hr 45 mins):\n• Q1: 5 mins\n• Q2: 10 mins\n• Q3: 10 mins\n• Q4: 20 mins\n• Q5: 45 mins\n• Buffer: 15 mins (use for checking/extra Q5 time)\n\nLANGUAGE PAPER 2 (1 hr 45 mins):\n• Q1: 5 mins\n• Q2: 10 mins\n• Q3: 15 mins\n• Q4: 20 mins\n• Q5: 45 mins\n• Buffer: 10 mins\n\nLITERATURE PAPER 1 (1 hr 45 mins):\n• Shakespeare: 55 mins\n• Novel: 50 mins\n\nLITERATURE PAPER 2 (2 hrs 15 mins):\n• Modern Text: 45 mins\n• Poetry: 45 mins\n• Unseen Poetry: 45 mins\n\nGOLDEN RULE: If you are running out of time, write bullet points rather than leaving a blank.',
      },
      {
        id: 'aqa-et-19',
        front: 'AQA — How to Open a Literature Essay',
        back: 'Your opening should immediately answer the question with a clear thesis.\n\nFORMULA: [Writer\'s name] presents [character/theme] as [your argument], using [method] to [effect/purpose].\n\nEXAMPLES:\n• "Shakespeare presents Lady Macbeth as a subversion of femininity, using imperative verbs and dark imagery to position her as the driving force behind regicide."\n• "Priestley uses the Inspector as a mouthpiece for socialist ideology, structuring the play as a moral interrogation of capitalist complacency."\n\nAVOID:\n• "In this essay I will..."\n• Starting with context.\n• Retelling the plot.\n\nA strong opening tells the examiner you know your argument before you start writing.',
      },
      {
        id: 'aqa-et-20',
        front: 'AQA — Paper 1 Q5: Descriptive vs Narrative',
        back: 'You usually get a CHOICE: one descriptive task, one narrative task.\n\nDESCRIPTIVE WRITING:\n• Freeze a moment in time — don\'t tell a story.\n• Use the 5 senses (sight, sound, smell, taste, touch).\n• Zoom in on small details, then pull out to the wider scene.\n• Vary sentence length: long flowing descriptions + short punchy sentences.\n\nNARRATIVE WRITING:\n• Keep the plot SIMPLE — one event, one character, one setting.\n• Focus on HOW you tell it, not what happens.\n• Use flashbacks, cyclical structure, or in medias res.\n• Show emotions through actions and imagery.\n\nCHOOSE WISELY: If you struggle with plot, go descriptive. If you struggle with sustained imagery, go narrative.',
      },
      {
        id: 'aqa-et-21',
        front: 'AQA — What Examiners Actually Look For (Top Band)',
        back: 'LANGUAGE PAPERS — TOP BAND:\n• "Perceptive, detailed analysis" (Q2/Q3/Q4)\n• "Judicious" use of quotations (short, embedded)\n• "Compelling, convincing" writing (Q5)\n• "Extensive, ambitious vocabulary" (Q5)\n\nLITERATURE PAPERS — TOP BAND:\n• "Critical, exploratory" response\n• "Judicious" use of precise references\n• Analysis of writer\'s methods with "subject terminology used judiciously"\n• Ideas about context "convincingly integrated"\n\nTRANSLATION:\n• "Perceptive" = you see what others miss.\n• "Judicious" = short, well-chosen, embedded quotes.\n• "Critical" = you question, challenge, explore multiple readings.\n• "Convincingly integrated" = context supports your point, not stuck on as a separate sentence.',
      },
      {
        id: 'aqa-et-22',
        front: 'AQA — How to Analyse a Quote (3-Step Method)',
        back: 'STEP 1: IDENTIFY — Name the technique and embed the quote.\n"The writer uses [technique] in the phrase \'...\'"\n\nSTEP 2: EXPLAIN — What does it suggest/imply/convey?\n"This suggests/implies/conveys... The connotations of \'[word]\' are..."\n\nSTEP 3: EFFECT — How does the reader respond? OR What is the writer\'s purpose?\n"This positions the reader to feel... because..."\nOR "The writer does this to..."\n\nEXAMPLE:\n"Stevenson uses animalistic imagery in \'trampled calmly\' to depict Hyde as devoid of human empathy. The oxymoron fuses violence with indifference, positioning the reader to view Hyde as monstrous. This reflects Victorian fears about humanity\'s capacity for repressed savagery."\n\nThis method = AO2 marks every time.',
      },
      {
        id: 'aqa-et-23',
        front: 'AQA — Choosing Your Poetry Comparison Poem',
        back: 'When the exam names a poem, you must choose the BEST comparison from the anthology.\n\nHOW TO PREPARE:\n• Learn comparison PAIRS in advance — for each poem, know 2–3 good matches.\n• Match by THEME first (both about conflict? power? identity?).\n• Then compare METHODS (both use dramatic monologue? contrasting structures?).\n\nIN THE EXAM:\n• Read the question carefully — it tells you the theme.\n• Pick the poem you know best AND that has genuine points of comparison.\n• If stuck, pick the poem where you know the most quotes.\n\nGOOD COMPARISON = same theme but DIFFERENT approach.\nE.g., "Both Ozymandias and My Last Duchess explore power, but Shelley shows power\'s decay while Browning shows power\'s abuse."',
      },
      {
        id: 'aqa-et-24',
        front: 'AQA — Counter-Arguments in Paper 2 Q5',
        back: 'Including a counter-argument shows sophistication and earns top-band marks.\n\nHOW TO DO IT:\n1. State the opposing view clearly.\n2. Concede a small point.\n3. Refute it with your stronger argument.\n\nTEMPLATE:\n"Some may argue that [opposing view]. While there is some truth to this, it fails to account for [your point]. In reality, [your stronger argument] because [evidence/reasoning]."\n\nEXAMPLE:\n"Opponents of school uniform argue it suppresses individuality. While self-expression matters, true individuality lies in ideas, not clothing. Uniform removes the daily anxiety of appearance, allowing students to focus on what genuinely defines them."\n\nPLACEMENT: Usually best as your penultimate paragraph, before a strong conclusion.',
      },
      {
        id: 'aqa-et-25',
        front: 'AQA — How to Write a Strong Conclusion',
        back: 'A strong conclusion can lift your essay by a mark band.\n\nFOR LITERATURE:\n• Return to your thesis and refine it.\n• Zoom out to the writer\'s BIG message or purpose.\n• End with a punchy, memorable final sentence.\n\nTEMPLATE: "Ultimately, [Writer] presents [character/theme] as [your argument]. Through [key method], they [effect], leaving the audience to reflect on [bigger idea]."\n\nFOR LANGUAGE PAPER 2 Q5:\n• Circle back to your opening idea (cyclical).\n• End with a powerful image, rhetorical question, or call to action.\n• Leave the reader thinking.\n\nAVOID:\n• "In conclusion..." (try "Ultimately," or "It is clear that...")\n• Introducing new points.\n• Simply repeating the introduction.\n\nAIM: Make the examiner nod.',
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
      {
        id: 'edx-et-1',
        front: 'Edexcel Language Paper 1 — Section A Overview',
        back: 'PAPER: Fiction and Imaginative Writing\nSECTION A: Reading (40 marks) — 1 hour\nSOURCE: One 20th-century literary fiction extract.\n\nQUESTIONS:\n• Q1 (1 mark): One-word/short answer retrieval.\n• Q2 (2 marks): Short quote + inference.\n• Q3 (6 marks): Analyse language features.\n• Q4 (6 marks): Analyse structure (whole text).\n• Q5 (15 marks): Evaluate critically with own opinion.\n• Q6 (10 marks): Analyse across two short linked texts.\n\nTIMING TIP: Spend roughly 1 minute per mark. Q5 and Q6 deserve the most time.\n\nKEY DIFFERENCE FROM AQA: Edexcel has 6 reading questions (not 4), so answers should be more concise for lower-mark questions.',
      },
      {
        id: 'edx-et-2',
        front: 'Edexcel Language Paper 1, Q3 — Language Analysis (6 marks)',
        back: 'WHAT IT TESTS: AO2 — Analyse effects of language choices.\n\nAPPROACH:\n• Identify 2–3 language features in the specified lines.\n• Use embedded quotes.\n• Analyse the EFFECT on the reader.\n\nSENTENCE STARTERS:\n• "The writer\'s use of [technique] in \'...\' creates a sense of..."\n• "The word \'...\' has connotations of... which suggests..."\n\nFOR 6 MARKS:\n• 2 well-developed points beat 4 shallow ones.\n• Always link back to the question focus.\n\nCOMMON MISTAKES: Feature-spotting without effect, quoting long passages instead of embedding, writing about structure (Q4).',
      },
      {
        id: 'edx-et-3',
        front: 'Edexcel Language Paper 1, Q4 — Structural Analysis (6 marks)',
        back: 'WHAT IT TESTS: AO2 — Analyse structural features.\n\nKEY STRUCTURAL FEATURES:\n• Opening focus vs ending focus (shift in attention).\n• Narrative perspective/voice changes.\n• Pace — sentence length, paragraph length.\n• Foreshadowing, flashbacks, time shifts.\n• Tension building and release.\n• Contrast between sections.\n\nAPPROACH:\n• Cover the WHOLE text — beginning, middle, end.\n• Explain WHY the writer structured it this way.\n\nSENTENCE STARTERS:\n• "The writer opens by... which establishes..."\n• "There is a shift at line X where the focus moves to..."\n• "The ending mirrors/contrasts the opening, creating..."\n\nCOMMON MISTAKES: Only writing about the beginning, confusing language with structure.',
      },
      {
        id: 'edx-et-4',
        front: 'Edexcel Language Paper 1, Q5 — Critical Evaluation (15 marks)',
        back: 'WHAT IT TESTS: AO4 — Evaluate texts critically, supporting with textual references.\n\nMARKS: 15 marks\nTIMING: 15–18 minutes\n\nAPPROACH: You are given a statement about the text. Evaluate how effectively the writer achieves what the statement says.\n\nSTRUCTURE:\n1. State your position (agree/disagree/partially agree).\n2. Choose 3–4 quotes that support your argument.\n3. For each: quote + technique + effect + evaluation.\n4. Use evaluative language throughout.\n\nEVALUATIVE PHRASES:\n• "The writer effectively/convincingly..."\n• "This is particularly successful because..."\n• "The reader is compelled to... which demonstrates..."\n\nCOMMON MISTAKES: Forgetting to evaluate (just analysing), not engaging with the statement, only agreeing without nuance.',
      },
      {
        id: 'edx-et-5',
        front: 'Edexcel Language Paper 1 — Section B: Imaginative Writing (40 marks)',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation: 24 marks) + AO6 (Technical Accuracy: 16 marks).\n\nCHOICE: Two tasks — you do ONE.\nUsually: one narrative task, one descriptive task (linked to the reading text).\n\nTIMING: 45 minutes (5 plan, 35 write, 5 check)\n\nKEY STRATEGIES:\n• Plan a clear structure (beginning, middle, end).\n• Use 5+ different sentence types.\n• Include figurative language (simile, metaphor, personification).\n• Vary paragraph lengths for effect.\n• Craft a powerful opening and a resonant ending.\n\nTOP-BAND REQUIREMENTS:\n• "Compelling, convincing communication"\n• "Extensive and ambitious vocabulary"\n• "Varied and inventive" use of structural features\n• "Consistent accuracy" in SPaG\n\nCOMMON MISTAKES: Overcomplicating the plot, rushed endings, not checking spelling.',
      },
      // ── Language Paper 2: Non-Fiction and Transactional Writing ──
      {
        id: 'edx-et-6',
        front: 'Edexcel Language Paper 2 — Section A Overview',
        back: 'PAPER: Non-Fiction and Transactional Writing\nSECTION A: Reading (40 marks) — Two non-fiction sources (one 19th century, one modern).\n\nQUESTIONS:\n• Q1 (1 mark): Retrieval — short answer.\n• Q2 (2 marks): Inference + quote.\n• Q3 (6 marks): Language analysis on one source.\n• Q4 (6 marks): Language analysis on the other source.\n• Q5 (15 marks): Compare/contrast viewpoints across both sources.\n• Q6 (10 marks): Compare methods across both sources.\n\nKEY DIFFERENCE: Edexcel separates language analysis (Q3/Q4) from comparison (Q5/Q6), whereas AQA combines them.\n\nTIMING: Q1–Q2: 5 mins. Q3–Q4: 15 mins each. Q5: 18 mins. Q6: 12 mins.',
      },
      {
        id: 'edx-et-7',
        front: 'Edexcel Language Paper 2, Q5 — Compare Viewpoints (15 marks)',
        back: 'WHAT IT TESTS: AO3 — Compare writers\' ideas and perspectives.\n\nAPPROACH:\n• Identify each writer\'s viewpoint/attitude clearly.\n• Compare WHAT they think and HOW they express it.\n• Use evidence from both sources.\n\nSTRUCTURE:\n1. State both writers\' positions.\n2. Compare using alternating paragraphs (A then B per point).\n3. 3–4 paragraphs minimum.\n\nSENTENCE STARTERS:\n• "Writer A believes... as evidenced by \'...\', whereas Writer B argues..."\n• "Both writers share the view that... however, they differ in..."\n\nCOMMON MISTAKES: Writing about each source separately with no comparison, comparing content but not methods, not using comparative connectives.',
      },
      {
        id: 'edx-et-8',
        front: 'Edexcel Language Paper 2 — Section B: Transactional Writing (40 marks)',
        back: 'WHAT IT TESTS: AO5 (Content & Organisation) + AO6 (Technical Accuracy).\n\nTWO tasks — you must do BOTH (20 marks each).\nForms: article, letter, review, speech, essay, guide, report.\n\nTIMING: 25 minutes per task (5 plan, 17 write, 3 check).\n\nKEY STRATEGIES:\n• Match the FORM precisely (e.g., letter = addresses, sign-off; article = headline, subheadings).\n• Use persuasive/rhetorical devices for each.\n• Each task = 4–5 paragraphs minimum.\n• Vary tone to match purpose and audience.\n\nCRITICAL: Because there are TWO tasks, time management is essential. Don\'t spend 40 minutes on one and rush the other.\n\nCOMMON MISTAKES: Ignoring form conventions, writing two identical-sounding pieces, running out of time on Task 2.',
      },
      // ── Literature Paper 1: Shakespeare and Post-1914 Literature ──
      {
        id: 'edx-et-9',
        front: 'Edexcel Literature Paper 1 — Shakespeare (Section A)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3, AO4.\n\nMARKS: 40 marks (includes 4 SPaG)\nTIMING: 55 minutes\n\nFORMAT: Extract printed + essay question about a theme/character.\n\nAPPROACH:\n1. Spend 5 minutes reading and annotating the extract.\n2. Write about the extract first (close analysis).\n3. Then broaden to the whole play.\n4. Integrate context naturally.\n\nSTRUCTURE:\n• Intro: Clear thesis.\n• 2–3 paragraphs on extract.\n• 2–3 paragraphs on wider play.\n• Conclusion: Writer\'s overall message.\n\nEDEXCEL-SPECIFIC: AO4 is assessed here — you should explore ALTERNATIVE INTERPRETATIONS.\n• "Alternatively, this could suggest..."\n• "A feminist reading might interpret this as..."',
      },
      {
        id: 'edx-et-10',
        front: 'Edexcel Literature Paper 1 — Post-1914 British Play/Novel (Section B)',
        back: 'WHAT IT TESTS: AO1, AO2, AO4.\n\nMARKS: 40 marks\nTIMING: 55 minutes\n\nFORMAT: Extract + essay question. NO context marks (AO3 not assessed).\n\nAPPROACH:\n• Focus on the writer\'s METHODS (AO2) and your personal response (AO4).\n• Discuss language, structure, and form.\n• Explore alternative interpretations.\n\nSTRUCTURE:\n• Intro: Clear argument.\n• Extract paragraphs (close analysis of language and structure).\n• Wider text paragraphs (other key moments).\n• Conclusion.\n\nKEY DIFFERENCE FROM AQA: No AO3 (context) marks — do not waste time on context. Focus on methods and interpretation instead.\n\nCOMMON MISTAKES: Writing lengthy context paragraphs that earn no marks, not exploring alternatives.',
      },
      // ── Literature Paper 2: 19th-Century Novel and Poetry ──
      {
        id: 'edx-et-11',
        front: 'Edexcel Literature Paper 2 — 19th-Century Novel (Section A)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3, AO4.\n\nMARKS: 40 marks (includes 4 SPaG)\nTIMING: 55 minutes\n\nFORMAT: Extract + essay question.\n\nAPPROACH:\n• Analyse the extract closely, then connect to the wider novel.\n• Context IS assessed — weave in Victorian/19th-century context.\n• Explore alternative readings (AO4).\n\nCONTEXT IDEAS:\n• Social class and inequality.\n• Gender roles and expectations.\n• Industrialisation and urbanisation.\n• Religion and morality.\n• The role of the writer as social critic.\n\nSENTENCE STARTERS:\n• "[Author] uses [character] to expose/challenge/reinforce..."\n• "A contemporary reader might have viewed this as... whereas a modern reader..."\n\nCOMMON MISTAKES: Not covering the wider novel, ignoring AO4.',
      },
      {
        id: 'edx-et-12',
        front: 'Edexcel Literature Paper 2 — Poetry Anthology (Section B)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3, AO4.\n\nMARKS: 20 marks per question.\nTWO questions: one on a named poem (compare with a choice), one on two named poems.\nTIMING: 35 minutes per question.\n\nAPPROACH:\n• For the comparison question: alternate between poems in each paragraph.\n• Analyse methods (language, form, structure).\n• Include relevant context.\n• Explore different interpretations.\n\nCOMPARATIVE CONNECTIVES:\n• "Similarly/Likewise/In contrast/Conversely/However/Whereas"\n\nKEY DIFFERENCE FROM AQA: Edexcel has TWO poetry questions (not one). Budget time carefully.\n\nCOMMON MISTAKES: Running out of time on the second question, not comparing enough, only discussing content.',
      },
      {
        id: 'edx-et-13',
        front: 'Edexcel Literature Paper 2 — Unseen Poetry (Section C)',
        back: 'WHAT IT TESTS: AO1, AO2.\n\nMARKS: 20 marks total (Part a = 12, Part b = 8)\nTIMING: 30 minutes total\n\nPART A (12 marks):\n• Analyse ONE unseen poem.\n• Focus on language, form, and structure.\n• 3 developed paragraphs.\n\nPART B (8 marks):\n• Compare the first poem with a second unseen poem.\n• Focus on METHODS, not just content.\n• 2–3 paragraphs with clear comparison.\n\nFIRST READ STRATEGY:\n1. What is it about? (Subject/theme)\n2. How does the speaker feel? (Tone/mood)\n3. What techniques stand out? (Language/structure)\n\nCOMMON MISTAKES: Spending too long on Part A, paraphrasing in Part B, not identifying the tone.',
      },
      // ── General Edexcel strategies ──
      {
        id: 'edx-et-14',
        front: 'Edexcel — Alternative Interpretations (AO4)',
        back: 'AO4 is assessed in Edexcel Literature — this is a KEY DIFFERENCE from AQA.\n\nWHAT IT MEANS: You must show you can consider DIFFERENT READINGS of a text.\n\nHOW TO DO IT:\n• "While some readers might interpret this as..., others could argue..."\n• "A Marxist/feminist/postcolonial reading suggests..."\n• "On the surface this implies..., yet on closer inspection..."\n• "The ambiguity of \'...\' allows for multiple readings..."\n\nSIMPLE VERSION:\n• Identify what seems obvious.\n• Then offer a DIFFERENT angle.\n• Use "alternatively," "however," "conversely."\n\nWHEN TO USE: In every Literature essay, aim for at least 2 moments where you explore an alternative reading.',
      },
      {
        id: 'edx-et-15',
        front: 'Edexcel — Mastering Form Conventions (Paper 2 Writing)',
        back: 'Edexcel Paper 2 Section B requires TWO writing tasks. Matching the form is essential.\n\nLETTER:\n• Address, date, "Dear [name]", formal/informal register, sign-off.\n\nARTICLE:\n• Headline, optional subheading, engaging opening, journalistic style.\n\nSPEECH:\n• Direct address ("Ladies and gentlemen"), rhetorical questions, repetition, call to action.\n\nREVIEW:\n• Opinion-led, descriptive, may include star rating or recommendation.\n\nESSAY:\n• Formal register, balanced argument, introduction and conclusion.\n\nGUIDE/REPORT:\n• Subheadings, bullet points (sparingly), informative tone.\n\nTOP TIP: The first and last sentences should clearly signal the form.',
      },
      {
        id: 'edx-et-16',
        front: 'Edexcel — Time Management Across Papers',
        back: 'LANGUAGE PAPER 1 (1 hr 45 mins):\n• Section A Reading: 1 hour\n  - Q1–Q2: 5 mins\n  - Q3: 8 mins\n  - Q4: 8 mins\n  - Q5: 18 mins\n  - Q6: 12 mins\n  - Reading time: 10 mins\n• Section B Writing: 45 mins\n\nLANGUAGE PAPER 2 (2 hrs 5 mins):\n• Section A Reading: 1 hour\n• Section B Writing: 50 mins (25 per task)\n• Buffer: 15 mins\n\nLITERATURE PAPER 1 (1 hr 45 mins):\n• Shakespeare: 55 mins\n• Post-1914 text: 50 mins\n\nLITERATURE PAPER 2 (2 hrs 15 mins):\n• 19th-Century Novel: 55 mins\n• Poetry Q1: 35 mins\n• Poetry Q2: 35 mins\n• Unseen Poetry: 30 mins\n\nGOLDEN RULE: Don\'t leave ANY question blank — even bullet points earn marks.',
      },
      {
        id: 'edx-et-17',
        front: 'Edexcel — How to Handle the 19th-Century Source (Paper 2)',
        back: 'One of the Paper 2 sources will be from the 19th century. This can be challenging.\n\nREADING STRATEGIES:\n• Don\'t panic at old-fashioned language — focus on the GIST.\n• Look for familiar words within complex sentences.\n• Pay attention to punctuation — semicolons and dashes break up long sentences.\n• Identify the writer\'s ATTITUDE (positive, negative, critical, admiring).\n\nANALYSIS TIPS:\n• Comment on the formal register and complex syntax.\n• Note any rhetorical or persuasive strategies.\n• Compare the formality with the modern source.\n\nUSEFUL PHRASES:\n• "The archaic register of \'...\' reflects the conventions of 19th-century prose..."\n• "The writer\'s elaborate syntax conveys..."\n\nCOMMON MISTAKES: Skipping or rushing the 19th-century source, not understanding the viewpoint.',
      },
      {
        id: 'edx-et-18',
        front: 'Edexcel — Q6 Paper 1: Comparing Linked Texts (10 marks)',
        back: 'Q6 gives you a second short extract linked to the main text by theme.\n\nWHAT IT TESTS: AO1 + AO2 across two texts.\n\nAPPROACH:\n1. Read the second extract carefully.\n2. Identify the shared theme or topic.\n3. Compare HOW both writers present this theme.\n\nSTRUCTURE:\n• 2–3 comparative paragraphs.\n• Each paragraph: point about Text 1 + quote + analysis, then contrast/compare with Text 2 + quote + analysis.\n\nCOMPARATIVE LANGUAGE:\n• "Both writers present [theme] through... however..."\n• "While the first writer uses... to convey..., the second writer achieves a similar/contrasting effect through..."\n\nTIMING: 12 minutes — be concise. 2–3 focused paragraphs are enough.\n\nCOMMON MISTAKES: Writing about each text separately, not comparing methods.',
      },
      {
        id: 'edx-et-19',
        front: 'Edexcel — SPaG Strategy (Literature)',
        back: 'SPaG marks in Edexcel Literature:\n• Shakespeare (Paper 1): 4 marks for SPaG\n• 19th-Century Novel (Paper 2): 4 marks for SPaG\n\nHOW TO SECURE ALL 4:\n• Accurate spelling of character names, literary terms, and ambitious vocabulary.\n• Correct punctuation throughout — especially commas, apostrophes, semicolons.\n• Varied sentence structures.\n\nQUICK WINS:\n• Spell these correctly: Shakespeare, metaphor, juxtaposition, foreshadowing, imagery, protagonist, antagonist.\n• Use one semicolon correctly per essay.\n• Proofread your first and last paragraphs (examiners notice these most).\n\nPROOFREADING CHECKLIST:\n1. Capital letters for names and sentence starts.\n2. Full stops at sentence ends (no comma splicing).\n3. Apostrophes for possession (the writer\'s) vs. plurals (the writers).\n4. Homophones: there/their/they\'re, its/it\'s, affect/effect.',
      },
      {
        id: 'edx-et-20',
        front: 'Edexcel — Reading the Question Properly',
        back: 'Edexcel questions are often very specific. Misreading the question is the biggest mark-killer.\n\nSTRATEGY:\n1. CIRCLE the key instruction word (analyse, evaluate, compare, explain).\n2. UNDERLINE the focus (character, theme, technique type).\n3. CHECK the line references — only write about those lines for that question.\n4. NOTE the marks — this tells you how much to write.\n\nCOMMON QUESTION TRAPS:\n• "How does the writer use LANGUAGE..." (don\'t write about structure).\n• "In this extract AND in the whole text..." (you must cover both).\n• "Compare..." (you MUST discuss both texts with comparison).\n• "To what extent..." (you need a balanced argument, not just agreement).\n\nBEFORE YOU WRITE: Spend 30 seconds re-reading the question and planning your answer direction.',
      },
      {
        id: 'edx-et-21',
        front: 'Edexcel — Literature: Tracking a Theme Across a Whole Text',
        back: 'Edexcel Literature essays require you to write about the WHOLE text, not just the extract.\n\nPREPARATION METHOD:\nFor each theme, prepare quotes from:\n• The beginning of the text.\n• The middle.\n• The end.\n\nThis allows you to discuss how the theme DEVELOPS.\n\nIN THE EXAM:\n• After discussing the extract, write: "Elsewhere in the [play/novel], [author] develops this theme by..."\n• Show how the character/theme changes over time.\n• Link to the writer\'s overall message.\n\nEXAMPLE: "While the extract shows Scrooge as miserly, Dickens later presents his transformation through the Ghost of Christmas Present, suggesting that redemption is possible for anyone willing to change."\n\nKEY PHRASES: "initially... however, by the end...", "this contrasts with the earlier scene where...", "the progression from... to... reflects..."',
      },
      {
        id: 'edx-et-22',
        front: 'Edexcel — Paper 1 Section A: Reading Strategy',
        back: 'You have 6 questions on one fiction extract. Here is the optimal reading strategy.\n\nSTEP 1 (5 mins): Read the extract ONCE for general understanding.\n• What is happening?\n• Who is involved?\n• What is the mood/atmosphere?\n\nSTEP 2 (5 mins): Re-read with a pen, annotating:\n• Interesting word choices.\n• Structural shifts.\n• Techniques you recognise.\n\nSTEP 3: Answer Q1 and Q2 quickly (5 mins total).\n\nSTEP 4: For Q3–Q6, refer back to relevant sections.\n• Don\'t re-read the whole extract for every question.\n• Use your annotations.\n\nGOLDEN RULE: The extract is your evidence. Every point you make must be rooted in the text. No vague claims without proof.',
      },
      {
        id: 'edx-et-23',
        front: 'Edexcel — Building a Persuasive Argument (Paper 2 Writing)',
        back: 'Both Paper 2 writing tasks require a clear viewpoint. Here is a reliable argument structure.\n\nPARAGRAPH 1: Hook + thesis statement.\nPARAGRAPH 2: Strongest argument + evidence/example.\nPARAGRAPH 3: Second argument + evidence/example.\nPARAGRAPH 4: Emotional/personal appeal (anecdote or emotive language).\nPARAGRAPH 5: Counter-argument + rebuttal.\nPARAGRAPH 6: Conclusion — call to action or memorable image.\n\nPERSUASIVE DEVICES CHECKLIST:\n• Rhetorical question\n• Tricolon (rule of three)\n• Direct address ("you")\n• Statistics (can be invented if plausible)\n• Emotive language\n• Anecdote\n• Expert opinion\n• Imperative verbs\n\nAIM: Use at least 5 of these across each piece.',
      },
      {
        id: 'edx-et-24',
        front: 'Edexcel — How to Compare Methods in Poetry',
        back: 'Edexcel poetry questions require comparison of METHODS, not just themes.\n\nMETHODS TO COMPARE:\n\nLANGUAGE:\n• Imagery types (visual, auditory, tactile)\n• Figurative language (metaphor, simile, personification)\n• Tone and register (formal, colloquial, aggressive)\n• Word connotations\n\nSTRUCTURE:\n• Stanza length and regularity\n• Enjambment vs end-stopping\n• Volta or turning point\n• Use of caesura\n\nFORM:\n• Sonnet, dramatic monologue, free verse, ballad\n• Rhyme scheme (or lack of)\n• Metre and rhythm\n\nTEMPLATE:\n"Both poets use [method] to explore [theme]. In [Poem A], the poet\'s use of \'...\' conveys... Similarly/In contrast, [Poem B] employs \'...\' to suggest... This difference in method reflects..."',
      },
      {
        id: 'edx-et-25',
        front: 'Edexcel — Common Mark-Losing Mistakes to Avoid',
        back: 'LANGUAGE PAPERS:\n1. Not reading the question — writing about language when asked about structure.\n2. Feature-spotting — naming a technique without analysing its effect.\n3. Long quotes — embed short phrases, not whole sentences.\n4. Ignoring one source in comparison questions.\n5. Running out of time on the writing section.\n\nLITERATURE PAPERS:\n1. Only writing about the extract — you must discuss the wider text.\n2. Retelling the story instead of analysing.\n3. Context as a bolt-on — "In Victorian times..." as a separate paragraph.\n4. Not exploring alternative interpretations (AO4).\n5. Weak conclusions or no conclusion at all.\n\nWRITING TASKS:\n1. Wrong form — writing a speech when asked for a letter.\n2. One-note argument — no counter-argument or range of points.\n3. Weak SPaG — comma splicing, spelling errors, no paragraphs.\n4. Not planning — leads to repetition and structural chaos.\n5. Forgetting to proofread.',
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
      {
        id: 'ocr-et-1',
        front: 'OCR Language Paper 1 — Communicating Information and Ideas: Overview',
        back: 'PAPER: Communicating Information and Ideas\nTIME: 2 hours\nMARKS: 80 marks total\n\nSECTION A — Reading (40 marks):\n• 2 non-fiction texts (one modern, one 19th/20th century).\n• Questions test: retrieval, inference, language analysis, comparison.\n\nSECTION B — Writing (40 marks):\n• 2 writing tasks.\n• Forms: letter, article, speech, report, review, guide.\n\nKEY OCR DIFFERENCE: There is only ONE Language paper (not two like AQA). It covers non-fiction reading AND transactional writing.\n\nTIMING: Roughly 60 minutes per section. Budget carefully across tasks.',
      },
      {
        id: 'ocr-et-2',
        front: 'OCR Language — Reading: Retrieval and Inference Questions',
        back: 'RETRIEVAL (AO1):\n• Find specific information from the text.\n• Short answers — no analysis needed.\n• Use the line references given.\n\nINFERENCE (AO1):\n• Read between the lines.\n• Use evidence to support your inference.\n• "This suggests that..." is your key phrase.\n\nTIPS:\n• Keep retrieval answers brief — don\'t over-explain.\n• For inference, always provide a quote as evidence.\n• Check you\'re looking at the right source.\n\nSENTENCE STARTERS:\n• "The text states that..."\n• "This implies/suggests/indicates that..."\n• "From the phrase \'...\', we can infer that..."\n\nCOMMON MISTAKES: Writing too much for retrieval questions, not supporting inferences with quotes, confusing the two sources.',
      },
      {
        id: 'ocr-et-3',
        front: 'OCR Language — Reading: Language Analysis Questions',
        back: 'WHAT IT TESTS: AO2 — Explain/analyse how writers use language.\n\nAPPROACH:\n• Identify specific techniques.\n• Embed short quotes.\n• Explain the EFFECT on the reader.\n\nOCR MARK SCHEME KEY WORDS:\n• Level 6 (top): "Insightful and convincing exploration of effects."\n• Focus on SUBTLETY — don\'t just name techniques.\n\nSTRUCTURE PER PARAGRAPH:\n1. Technique + embedded quote.\n2. What it suggests/implies.\n3. Effect on the reader.\n4. Link to writer\'s purpose.\n\nSENTENCE STARTERS:\n• "The writer\'s deliberate use of \'...\' serves to..."\n• "The connotations of \'...\' evoke a sense of..."\n• "This positions the reader to..."\n\nCOMMON MISTAKES: Listing techniques without analysis, not zooming into individual words.',
      },
      {
        id: 'ocr-et-4',
        front: 'OCR Language — Reading: Comparison Question',
        back: 'WHAT IT TESTS: AO3 — Compare writers\' ideas and perspectives.\n\nTHIS IS THE HIGHEST-MARK READING QUESTION.\n\nAPPROACH:\n1. Identify each writer\'s viewpoint.\n2. Compare viewpoints (similar? different? nuanced?).\n3. Compare METHODS (how each writer conveys their view).\n4. Use evidence from both texts.\n\nSTRUCTURE:\n• Point of comparison → Source A evidence + analysis → Source B evidence + analysis → evaluate the difference.\n\nCOMPARATIVE CONNECTIVES:\n• "Both writers... however..."\n• "While Source A adopts... Source B instead..."\n• "In contrast to Source A\'s [tone], Source B..."\n\nCOMMON MISTAKES: Writing about each source separately, comparing only content (not methods), not using both sources equally.',
      },
      {
        id: 'ocr-et-5',
        front: 'OCR Language — Writing Tasks (Section B)',
        back: 'TWO writing tasks, each worth 20 marks.\n\nMARK SPLIT:\n• AO5 — Communication and Organisation: 12 marks.\n• AO6 — Vocabulary, sentence structure, spelling, punctuation: 8 marks.\n\nTIMING: 25 minutes each (5 plan, 17 write, 3 check).\n\nFORMS: Letter, article, speech, review, report, guide, essay.\n\nKEY STRATEGIES:\n• Match the form and audience precisely.\n• Plan 4–5 paragraphs.\n• Use a range of persuasive/rhetorical devices.\n• Vary sentence structures and vocabulary.\n• Proofread each piece.\n\nTOP TIP: The two tasks often require different forms and audiences. Adapt your register accordingly — don\'t use the same voice for a formal letter and a magazine article.\n\nCOMMON MISTAKES: Identical tone in both tasks, forgetting form conventions, not planning.',
      },
      // ── Literature: Exploring Effects and Impact ──
      {
        id: 'ocr-et-6',
        front: 'OCR Literature — Paper Overview',
        back: 'OCR has TWO Literature papers:\n\nPAPER 1: Exploring Modern and Literary Heritage Texts (2 hours)\n• Section A: Modern prose or drama (with extract).\n• Section B: Literary heritage text — 19th century (with extract).\n\nPAPER 2: Exploring Poetry and Shakespeare (2 hours)\n• Section A: Poetry anthology — comparison.\n• Section B: Unseen poetry.\n• Section C: Shakespeare (with extract).\n\nKEY OCR DIFFERENCES:\n• Shakespeare is in Paper 2 (not Paper 1 like AQA).\n• No separate SPaG marks — quality of written communication is part of the mark scheme throughout.\n• AO4 (alternative interpretations) is not a separate AO — but showing different readings still helps.',
      },
      {
        id: 'ocr-et-7',
        front: 'OCR Literature Paper 1 — Modern Prose/Drama (Section A)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 40 marks\nTIMING: 55–60 minutes\n\nFORMAT: Extract + linked essay question.\n\nAPPROACH:\n1. Annotate the extract (5 minutes).\n2. Write about the extract first — close analysis of language, structure, form.\n3. Broaden to the wider text — other key scenes, character development, themes.\n4. Embed context where relevant.\n\nSTRUCTURE:\n• Intro: Direct answer to the question.\n• 2–3 extract paragraphs.\n• 2–3 wider text paragraphs.\n• Conclusion.\n\nOCR TOP BAND:\n• "Assured, personal response"\n• "Exploration of layers of meaning"\n• "Convincing, well-structured argument"\n\nCOMMON MISTAKES: Only writing about the extract, narrative retelling, superficial context.',
      },
      {
        id: 'ocr-et-8',
        front: 'OCR Literature Paper 1 — 19th-Century Text (Section B)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 40 marks\nTIMING: 55–60 minutes\n\nFORMAT: Extract + essay question.\n\nAPPROACH:\n• Same structure as Section A.\n• Pay particular attention to CONTEXT (AO3 is heavily weighted).\n• Analyse the writer\'s language choices in the extract closely.\n• Connect to the broader themes and structure of the novel.\n\nCONTEXT TO WEAVE IN:\n• Victorian social hierarchy.\n• Gender expectations.\n• Attitudes to poverty, crime, and education.\n• Scientific developments (evolution, psychology).\n• The author\'s personal beliefs and intentions.\n\nSENTENCE STARTERS:\n• "[Author] challenges/reinforces Victorian attitudes towards... by..."\n• "Writing in [year], [Author] reflects contemporary anxieties about..."\n\nCOMMON MISTAKES: Context as a bolt-on, not analysing language in the extract, ignoring the wider text.',
      },
      {
        id: 'ocr-et-9',
        front: 'OCR Literature Paper 2 — Poetry Anthology (Section A)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 30 marks\nTIMING: 40 minutes\n\nFORMAT: One named poem printed. Compare with one other from the anthology.\n\nAPPROACH:\n1. Read the printed poem carefully.\n2. Choose your comparison poem (the one with the best overlap AND that you know well).\n3. Compare throughout — don\'t write about one then the other.\n\nSTRUCTURE:\n• Intro: State both poems and your comparative thesis.\n• 3–4 alternating paragraphs (Poem A method → Poem B method).\n• Conclusion: Summarise the key difference in approach.\n\nCOMPARE:\n• Themes and ideas.\n• Language and imagery.\n• Form and structure.\n• Tone and voice.\n\nCOMMON MISTAKES: Writing about poems separately, only comparing themes (not methods), choosing a poem you don\'t know well.',
      },
      {
        id: 'ocr-et-10',
        front: 'OCR Literature Paper 2 — Unseen Poetry (Section B)',
        back: 'WHAT IT TESTS: AO1, AO2.\n\nMARKS: 24 marks total\nTIMING: 30 minutes\n\nFORMAT: Two unseen poems. Usually one question on one poem, then a comparison.\n\nFIRST READ STRATEGY:\n1. Read the title — it often reveals the subject.\n2. Read the whole poem once for general meaning.\n3. Re-read, annotating: imagery, tone, structure, key words.\n4. Identify the speaker\'s attitude.\n\nFOR THE COMPARISON:\n• Focus on ONE key difference or similarity in method.\n• Keep paragraphs focused — 2–3 is enough.\n\nSENTENCE STARTERS:\n• "The poet creates a tone of... through the use of..."\n• "The image of \'...\' suggests... because..."\n• "Both poems use... to convey..., although Poem A... while Poem B..."\n\nCOMMON MISTAKES: Paraphrasing the poem, not identifying techniques, spending too long on one poem.',
      },
      {
        id: 'ocr-et-11',
        front: 'OCR Literature Paper 2 — Shakespeare (Section C)',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 30 marks\nTIMING: 40 minutes\n\nFORMAT: Extract + essay question.\n\nAPPROACH:\n• Analyse the extract closely for Shakespeare\'s language choices.\n• Discuss the wider play — character arc, themes, dramatic significance.\n• Embed Elizabethan/Jacobean context.\n\nSTRUCTURE:\n1. Intro: thesis + direct engagement with the question.\n2. 2 paragraphs on the extract.\n3. 2 paragraphs on the wider play.\n4. Brief conclusion.\n\nCONTEXT IDEAS:\n• The Great Chain of Being / Divine Right of Kings.\n• Gender roles in Elizabethan/Jacobean society.\n• Religious beliefs (sin, redemption, damnation).\n• Theatre conventions (soliloquy, aside, dramatic irony).\n\nCOMMON MISTAKES: Only writing about the extract, context that doesn\'t connect to analysis, ignoring Shakespeare\'s language.',
      },
      {
        id: 'ocr-et-12',
        front: 'OCR — How to Structure Every Literature Paragraph',
        back: 'OCR mark schemes reward "well-structured" and "convincing" arguments.\n\nUSE THIS PARAGRAPH STRUCTURE:\n\n1. POINT — Answer the question directly.\n"[Author] presents [character/theme] as [your argument]..."\n\n2. EVIDENCE — Embed a short quote.\n"...through the phrase \'...\',"\n\n3. ANALYSIS — Explain the technique and its effect.\n"where the [technique] suggests/conveys..."\n\n4. DEVELOP — Add a second layer of interpretation.\n"Furthermore, the connotations of \'[word]\' imply..."\n\n5. CONTEXT — Link to relevant context (if applicable).\n"This reflects [Author]\'s [intention/the attitudes of the era]."\n\n6. LINK — Connect back to the question.\n"Therefore, [Author] uses this to [answer the question]."\n\nThis structure works for EVERY literature paragraph across both OCR papers.',
      },
      {
        id: 'ocr-et-13',
        front: 'OCR — Time Management Strategy',
        back: 'LANGUAGE PAPER (2 hours):\n• Reading time: 10 mins\n• Section A (Reading): 50 mins total\n  - Low-mark Qs: 2–3 mins each\n  - Language analysis: 10–12 mins\n  - Comparison: 15–18 mins\n• Section B (Writing): 50 mins total\n  - Task 1: 25 mins\n  - Task 2: 25 mins\n• Buffer: 10 mins\n\nLITERATURE PAPER 1 (2 hours):\n• Section A (Modern text): 55 mins\n• Section B (19th-century): 55 mins\n• Buffer: 10 mins\n\nLITERATURE PAPER 2 (2 hours):\n• Section A (Poetry anthology): 40 mins\n• Section B (Unseen poetry): 30 mins\n• Section C (Shakespeare): 40 mins\n• Buffer: 10 mins\n\nSTRATEGY: Always leave a buffer. If you run out of time, write bullet points — you can still earn marks.',
      },
      {
        id: 'ocr-et-14',
        front: 'OCR — Writing: Adapting Register and Tone',
        back: 'OCR writing tasks reward "assured" adaptation of register.\n\nREGISTER means the level of formality:\n\nFORMAL (letter to MP, report):\n• Complex sentences, no contractions, impersonal tone.\n• "It is imperative that action is taken..."\n\nSEMI-FORMAL (article, review, guide):\n• Accessible but polished. Can use "you" but avoid slang.\n• "Most people would agree that..."\n\nINFORMAL (blog, speech to peers):\n• Conversational, contractions, personal anecdotes.\n• "Let\'s be honest — we\'ve all been there."\n\nHOW TO SHOW RANGE:\n• Shift register within a piece — start formally, include a personal moment, return to formal.\n• Use questions to shift from declarative to conversational.\n• Match vocabulary to audience: "pupils" for teachers, "students" for peers.',
      },
      {
        id: 'ocr-et-15',
        front: 'OCR — Key Differences from Other Boards',
        back: 'COMPARED TO AQA:\n• ONE Language paper (not two).\n• Shakespeare is in Literature Paper 2 (not Paper 1).\n• No separate SPaG marks — quality of writing assessed throughout.\n• AO4 not a separate assessment objective.\n\nCOMPARED TO EDEXCEL:\n• Fewer reading questions per paper.\n• Less emphasis on alternative interpretations (AO4).\n• Writing section has 2 tasks (similar to Edexcel Paper 2).\n\nOCR-SPECIFIC STRENGTHS TO EXPLOIT:\n• The mark schemes reward "personal response" — be genuine and specific.\n• "Exploration of layers of meaning" — always offer more than one reading.\n• "Assured, well-structured" — clear paragraphing and logical flow win marks.\n\nTOP TIP: OCR values quality over quantity. 4 brilliant paragraphs beat 7 mediocre ones.',
      },
      {
        id: 'ocr-et-16',
        front: 'OCR Language — How to Approach the 19th/20th Century Source',
        back: 'One of the non-fiction sources will be from an earlier period. Here is how to handle it.\n\nREADING TIPS:\n• Focus on overall meaning first — don\'t get lost in archaic vocabulary.\n• Long sentences were common — identify the main clause.\n• Punctuation helps: look for semicolons, colons, and dashes to break up ideas.\n• Context clues: footnotes or introductions tell you when/why it was written.\n\nANALYSIS TIPS:\n• Comment on the formal register as a deliberate choice.\n• Note differences in social attitudes (e.g., attitudes to class, gender, empire).\n• Compare the older text\'s style with the modern source\'s style.\n\nUSEFUL VOCABULARY:\n• "Elevated register," "archaic diction," "elaborate syntax," "rhetorical formality."\n\nCOMMON MISTAKES: Ignoring the older source, not understanding the viewpoint, calling it "old-fashioned" without further analysis.',
      },
      {
        id: 'ocr-et-17',
        front: 'OCR — Building a Personal Response (Top Band)',
        back: 'OCR mark schemes consistently reward "personal response" and "original thinking."\n\nWHAT THIS MEANS:\n• Don\'t just repeat generic analysis everyone writes.\n• Engage with the text as a real reader — what did YOU notice?\n• Question the writer\'s choices: why THIS word? Why THIS structure?\n\nHOW TO DEVELOP A PERSONAL RESPONSE:\n1. Ask "Why?" after every observation.\n2. Consider what the writer COULD have written but chose not to.\n3. Explore ambiguity — when a word/image could mean two things, discuss both.\n4. React genuinely — "The abruptness of \'...\'is unsettling because..."\n\nPHRASES THAT SIGNAL PERSONAL ENGAGEMENT:\n• "What is particularly striking is..."\n• "The ambiguity here is significant because..."\n• "This forces the reader to confront..."\n• "Perhaps the most revealing moment is..."\n\nAVOID: Formulaic responses that could apply to any text.',
      },
      {
        id: 'ocr-et-18',
        front: 'OCR Literature — How Context Works Without Separate AO3 Weighting',
        back: 'In some OCR Literature questions, AO3 (context) carries less weight than in AQA. But context still matters.\n\nRULE: Context should DEEPEN your analysis, never replace it.\n\nGOOD USE OF CONTEXT:\n• "Dickens, writing during a period of rapid industrialisation, uses Scrooge to expose the callous indifference of the wealthy towards the working poor."\n• "Shakespeare\'s audience, steeped in the doctrine of the Divine Right of Kings, would have viewed Macbeth\'s actions as an assault on God\'s natural order."\n\nBAD USE OF CONTEXT:\n• "In Victorian times, there was a lot of poverty. This is shown in the text."\n• A standalone paragraph about history that doesn\'t connect to analysis.\n\nHOW MUCH CONTEXT?\n• 1–2 contextual references per essay, woven into analytical paragraphs.\n• Always link context to the writer\'s PURPOSE.\n\nKEY PHRASE: "[Author] uses [technique/character] to [reflect/challenge/expose] [contextual idea]."',
      },
      {
        id: 'ocr-et-19',
        front: 'OCR — Proofreading Strategy for Both Papers',
        back: 'OCR assesses quality of written communication as part of the overall mark — so SPaG matters throughout.\n\nPROOFREADING PLAN (3–5 minutes at the end of each section):\n\n1. READ BACKWARDS — start from the last sentence. This helps you spot errors your brain auto-corrects when reading forwards.\n\n2. CHECK THESE FIRST:\n• Capital letters (names, sentence starts).\n• Full stops (no comma splicing).\n• Apostrophes (it\'s = it is; its = belonging to it).\n• Homophones (there/their/they\'re, effect/affect, where/were).\n\n3. CHECK THESE SECOND:\n• Spelling of character names and key terms.\n• Tense consistency (don\'t switch between past and present).\n• Subject-verb agreement.\n\n4. QUICK WINS:\n• Add a semicolon somewhere appropriate.\n• Fix any sentence fragments.\n• Check your first and last paragraphs carefully — examiners read these most closely.',
      },
      {
        id: 'ocr-et-20',
        front: 'OCR — Unseen Poetry: A Step-by-Step Method',
        back: 'Follow this method for EVERY unseen poem:\n\nSTEP 1 — OVERVIEW (1 minute):\n• Read the title. What does it tell you?\n• Read the whole poem. What is it ABOUT (surface level)?\n• What FEELING does it leave you with?\n\nSTEP 2 — DETAIL (2 minutes):\n• Re-read. Circle/underline striking words and images.\n• Note the tone — does it shift anywhere?\n• Look at structure: stanza lengths, line lengths, enjambment, rhyme.\n\nSTEP 3 — MEANING (1 minute):\n• What is the deeper meaning or message?\n• What is the poet\'s attitude towards the subject?\n• Is there any ambiguity?\n\nSTEP 4 — WRITE (remaining time):\n• Open with the poem\'s central theme/message.\n• Write 3 analytical paragraphs: language, imagery, structure.\n• Each paragraph: technique + quote + effect + interpretation.\n\nGOLDEN RULE: If you don\'t know what the poem means, focus on HOW it makes you feel and why.',
      },
    ],
  },

  // ─── 4. WJEC Exam Technique ────────────────────────────────────────
  {
    id: 'wjec-exam-technique',
    title: 'WJEC Exam Technique',
    description: 'Paper-by-paper question technique for WJEC Eduqas GCSE English Language & Literature',
    category: 'Exam Technique',
    board: 'WJEC',
    cards: [
      // ── Language Component 1: 20th Century Literature Reading and Creative Prose Writing ──
      {
        id: 'wjec-et-1',
        front: 'WJEC Language Component 1 — Overview',
        back: 'PAPER: 20th Century Literature Reading and Creative Prose Writing\nTIME: 1 hour 45 minutes\nMARKS: 40% of Language GCSE\n\nSECTION A — Reading (20 marks):\n• One extract from a 20th-century literary text.\n• Questions on: retrieval, inference, language analysis, evaluation.\n\nSECTION B — Creative Prose Writing (40 marks):\n• Choice of creative writing tasks.\n• Narrative or descriptive writing.\n\nKEY WJEC/EDUQAS DIFFERENCE: The reading section uses a LITERARY fiction text (not non-fiction). The writing section is prose only (no poetry or transactional writing).\n\nTIMING: Section A = 50 minutes. Section B = 55 minutes.',
      },
      {
        id: 'wjec-et-2',
        front: 'WJEC Language Component 1 — Reading Questions Breakdown',
        back: 'The reading section follows this pattern:\n\nQ1 (5 marks): Retrieval — list 5 things you learn about [topic] from lines X–Y.\n\nQ2 (5 marks): How does the writer create mood/atmosphere/tension in lines X–Y? (Language focus.)\n\nQ3 (10 marks): "What impressions of [character/place/event] do you get from lines X–Y?" — extended analysis using the whole extract.\n\nKEY TIPS:\n• Q1: Keep answers brief — one fact per line.\n• Q2: Focus on specific language techniques and their effects. 2–3 developed points.\n• Q3: This is the big one. 3–4 detailed paragraphs. Cover language AND structure. Show personal response.\n\nSENTENCE STARTERS:\n• "The writer creates a [mood] through..."\n• "The impression of [character] is developed through..."\n\nCOMMON MISTAKES: Over-writing Q1, under-writing Q3, not using quotes.',
      },
      {
        id: 'wjec-et-3',
        front: 'WJEC Language Component 1 — Creative Prose Writing (40 marks)',
        back: 'WHAT IT TESTS: AO5 (Communication & Organisation: 24 marks) + AO6 (Accuracy: 16 marks).\n\nTIMING: 55 minutes (5 plan, 45 write, 5 check)\n\nCHOICE: Usually 2–4 options (narrative or descriptive prompts, sometimes linked to a picture).\n\nFOR TOP MARKS:\n• Communication: Engaging, sophisticated writing with a clear voice.\n• Organisation: Paragraphing, varied structure, deliberate sequencing.\n• Vocabulary: Ambitious but natural word choices.\n• Sentences: Range of types for effect.\n• Accuracy: Consistent spelling, punctuation, grammar.\n\nWJEC-SPECIFIC TIP: The mark scheme rewards "sustained crafting." This means EVERY paragraph should feel deliberately shaped — no filler.\n\nPLANNING TEMPLATE:\n1. Opening hook.\n2. Build (develop character/setting/tension).\n3. Shift/turning point.\n4. Resolution/resonant ending.',
      },
      {
        id: 'wjec-et-4',
        front: 'WJEC Language Component 2 — Overview',
        back: 'PAPER: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing\nTIME: 2 hours\nMARKS: 60% of Language GCSE\n\nSECTION A — Reading (40 marks):\n• TWO non-fiction texts: one 19th-century, one 21st-century.\n• Questions on: retrieval, inference, language analysis, comparison of viewpoints.\n\nSECTION B — Writing (40 marks):\n• TWO transactional/persuasive writing tasks.\n• Forms: letter, article, speech, review, report, essay, leaflet.\n\nKEY DIFFERENCE: This component is worth MORE (60%) than Component 1 (40%). Prioritise practice here.\n\nTIMING: Section A = 60 minutes. Section B = 60 minutes (30 per task).',
      },
      {
        id: 'wjec-et-5',
        front: 'WJEC Language Component 2 — Reading: Comparison Question',
        back: 'The comparison question is the highest-mark reading question in Component 2.\n\nWHAT IT TESTS: AO3 — Compare writers\' viewpoints and methods across two texts.\n\nMARKS: 10 marks\nTIMING: 12–15 minutes\n\nAPPROACH:\n1. Identify each writer\'s viewpoint on the topic.\n2. Find similarities AND differences.\n3. Compare METHODS (tone, language, rhetorical devices, structure).\n4. Use quotes from both texts.\n\nSTRUCTURE:\n• Opening statement: both writers\' positions.\n• 3 comparison paragraphs (point + Source A + Source B).\n• Use comparative connectives throughout.\n\nSENTENCE STARTERS:\n• "Both writers express [viewpoint], however they differ in..."\n• "While Writer A uses [method] to convey..., Writer B instead employs..."\n• "The contrast between Source A\'s [tone] and Source B\'s [tone] highlights..."\n\nCOMMON MISTAKES: Writing about texts separately, only comparing content, not using both texts equally.',
      },
      {
        id: 'wjec-et-6',
        front: 'WJEC Language Component 2 — Transactional Writing (2 tasks)',
        back: 'TWO tasks, each worth 20 marks.\nMARK SPLIT: AO5 (12 marks) + AO6 (8 marks) per task.\n\nTIMING: 30 minutes each (5 plan, 22 write, 3 check).\n\nFORMS YOU MUST KNOW:\n• Formal letter (Dear Sir/Madam, Yours faithfully)\n• Informal letter (Dear [Name], chatty tone)\n• Article (headline, engaging opening)\n• Speech (direct address, rhetorical devices)\n• Review (opinion-led, descriptive)\n• Report (formal, subheadings, factual tone)\n• Leaflet (headings, accessible language)\n\nKEY STRATEGY: The two tasks ALWAYS differ in form and/or audience. Show you can ADAPT.\n\nWJEC TOP BAND: "Sustained awareness of purpose and audience. Appropriate and effective register."\n\nCOMMON MISTAKES: Same tone in both tasks, forgetting form conventions, not planning.',
      },
      // ── Literature Component 1: Shakespeare and Poetry ──
      {
        id: 'wjec-et-7',
        front: 'WJEC Literature Component 1 — Shakespeare',
        back: 'WHAT IT TESTS: AO1, AO2, AO4.\n\nMARKS: 20 marks (+ 5 SPaG)\nTIMING: 45 minutes\n\nFORMAT: Extract from the play + essay question. Write about the extract and the play as a whole.\n\nAPPROACH:\n1. Read and annotate the extract.\n2. Plan your argument.\n3. Write about the extract (close analysis).\n4. Broaden to the rest of the play.\n\nWJEC-SPECIFIC: AO4 (using supporting evidence) is assessed. This means your response must be well-evidenced with quotes.\n\nNOTE: AO3 (context) is NOT assessed in the Shakespeare question. Focus on language analysis (AO2) and your interpretation.\n\nSTRUCTURE:\n• Intro with thesis.\n• 2 extract paragraphs.\n• 2 wider play paragraphs.\n• Conclusion.\n\nCOMMON MISTAKES: Spending too long on context (no marks), only writing about the extract, not knowing wider play quotes.',
      },
      {
        id: 'wjec-et-8',
        front: 'WJEC Literature Component 1 — Poetry Anthology',
        back: 'WHAT IT TESTS: AO1, AO2, AO3.\n\nMARKS: 20 marks\nTIMING: 40 minutes\n\nFORMAT: One named poem printed. You must compare it with one other from the anthology.\n\nAPPROACH:\n• Analyse the named poem in detail.\n• Compare with your chosen poem throughout.\n• Discuss methods: language, form, structure.\n• Include relevant context (AO3 IS assessed here).\n\nCHOOSING YOUR COMPARISON POEM:\n• Pick one that shares the same theme but uses DIFFERENT methods.\n• Pick one you know well and can quote from.\n\nSTRUCTURE:\n• Intro: State both poems and your comparison thesis.\n• 3–4 paragraphs alternating between poems.\n• Conclusion.\n\nCOMMON MISTAKES: Not comparing (writing about poems separately), forgetting context, choosing a poem you barely know.',
      },
      {
        id: 'wjec-et-9',
        front: 'WJEC Literature Component 1 — Unseen Poetry',
        back: 'WHAT IT TESTS: AO1, AO2.\n\nMARKS: 20 marks total\n• Part (a): One poem — 8 marks.\n• Part (b): Compare two poems — 12 marks.\n\nTIMING: Part (a) = 12 minutes. Part (b) = 18 minutes.\n\nPART (a):\n• Analyse one unseen poem.\n• Focus on language, imagery, and structure.\n• 2–3 developed paragraphs.\n\nPART (b):\n• Compare this poem with a second unseen poem.\n• Focus on methods AND themes.\n• Use comparative connectives.\n• 3 developed paragraphs.\n\nFIRST READ METHOD:\n1. Title — what clues does it give?\n2. Read once for meaning.\n3. Read again for techniques.\n4. Note: tone, imagery, structure, voice.\n\nCOMMON MISTAKES: Spending too long on Part (a), not comparing in Part (b), paraphrasing instead of analysing.',
      },
      // ── Literature Component 2: Post-1914 Prose/Drama and 19th-Century Prose ──
      {
        id: 'wjec-et-10',
        front: 'WJEC Literature Component 2 — Overview',
        back: 'PAPER: Post-1914 Prose/Drama and 19th-Century Prose\nTIME: 2 hours 30 minutes\nMARKS: 60% of Literature GCSE\n\nSECTION A — Post-1914 Prose/Drama (40 marks):\n• Extract + essay question on your studied modern text.\n• AO1, AO2, AO3, AO4 all assessed.\n• Includes 5 marks for SPaG.\n\nSECTION B — 19th-Century Prose (40 marks):\n• TWO essay questions (no extract) — answer BOTH.\n• From memory — you need to know quotes.\n• AO1, AO2, AO3, AO4.\n\nKEY CHALLENGE: Section B has NO extract, and you answer TWO questions. Quote memorisation is essential.\n\nTIMING: Section A = 60 minutes. Section B = 90 minutes (45 per question).',
      },
      {
        id: 'wjec-et-11',
        front: 'WJEC Literature Component 2 — Post-1914 Text (Section A)',
        back: 'MARKS: 40 marks (including 5 SPaG)\nTIMING: 60 minutes\n\nFORMAT: Extract + essay question.\n\nALL FOUR AOs ASSESSED:\n• AO1: Informed personal response + textual references.\n• AO2: Writer\'s methods (language, form, structure).\n• AO3: Context (social, historical, literary).\n• AO4: Range of viewpoints and interpretations.\n\nAPPROACH:\n1. Annotate the extract (5 mins).\n2. Plan your argument (5 mins).\n3. Write: extract analysis → wider text → context.\n\nWJEC TOP BAND:\n• "Assured, sustained personal response"\n• "Perceptive analysis of writer\'s methods"\n• "Context integrated convincingly"\n\nSPaG (5 marks):\n• Accurate spelling of key terms.\n• Varied punctuation.\n• Clear expression.\n\nCOMMON MISTAKES: Bolting on context, ignoring AO4, only writing about the extract.',
      },
      {
        id: 'wjec-et-12',
        front: 'WJEC Literature Component 2 — 19th-Century Prose (Section B)',
        back: 'MARKS: 2 questions, 20 marks each (40 total)\nTIMING: 45 minutes per question\n\nFORMAT: NO extract — you write entirely from memory.\n\nTHIS IS THE HARDEST SECTION because you must:\n• Remember specific quotes.\n• Cover the whole text.\n• Answer two separate questions under pressure.\n\nPREPARATION:\n• Memorise 15–20 quotes per text.\n• Organise quotes by theme and character.\n• Practise writing from memory regularly.\n\nIN THE EXAM:\n1. Read both questions and plan both answers (5 mins each).\n2. For each: write 4 focused paragraphs with quotes.\n3. Cover different parts of the novel in each paragraph.\n\nSTRUCTURE PER PARAGRAPH:\nPoint → Quote → Analysis (AO2) → Context (AO3) → Link to question.\n\nCOMMON MISTAKES: Only writing about one part of the novel, running out of quotes, spending too long on Q1 and rushing Q2.',
      },
      {
        id: 'wjec-et-13',
        front: 'WJEC — How to Embed Context Across Both Components',
        back: 'Context is assessed in Literature Component 1 (poetry) and Component 2 (modern text + 19th-century).\n\nBUT NOT in the Shakespeare question — don\'t waste time there.\n\nGOOD EMBEDDING:\n• "[Author] critiques [issue] through [character/event], reflecting [contextual idea]."\n• "The [image/quote] resonates with [historical/social context] because..."\n• "[Author], writing in [period], uses [technique] to challenge/reinforce..."\n\nBAD EMBEDDING:\n• "In the 19th century, women had no rights." (standalone, disconnected)\n• A whole paragraph of background with no textual analysis.\n\nCONTEXT AREAS TO KNOW:\n• Shakespeare: Elizabethan/Jacobean society (but no marks for it in the exam).\n• Poetry: Depends on the anthology — conflict, identity, relationships.\n• Modern text: Social inequality, class, gender, war, morality.\n• 19th-century: Victorian values, class, poverty, empire, science vs religion.',
      },
      {
        id: 'wjec-et-14',
        front: 'WJEC — SPaG Marks: Where and How',
        back: 'SPaG marks are awarded in:\n• Shakespeare (Component 1): 5 marks.\n• Post-1914 text (Component 2, Section A): 5 marks.\n• TOTAL: 10 marks for SPaG across Literature.\n\nWJEC SPaG MARK SCHEME:\n• Band 5 (5 marks): "Sophisticated use of a range of vocabulary and sentence structures. Spelling, punctuation, and grammar are consistently accurate."\n\nHOW TO HIT BAND 5:\n• Use semicolons, colons, and dashes correctly.\n• Spell literary terminology accurately.\n• Vary sentence openings and lengths.\n• Maintain consistent tense (present tense for literature essays).\n\nCOMMON ERRORS THAT LOSE MARKS:\n• "could of" instead of "could have"\n• Comma splicing (using a comma where you need a full stop)\n• Inconsistent tense shifts\n• Misspelling character names\n\n10 marks for SPaG = nearly a full grade. Don\'t throw these away.',
      },
      {
        id: 'wjec-et-15',
        front: 'WJEC — Time Management Across All Papers',
        back: 'LANGUAGE COMPONENT 1 (1 hr 45 mins):\n• Section A (Reading): 50 mins\n  - Q1: 5 mins\n  - Q2: 10 mins\n  - Q3: 20 mins\n  - Buffer: 15 mins\n• Section B (Creative Writing): 55 mins\n\nLANGUAGE COMPONENT 2 (2 hrs):\n• Section A (Reading): 60 mins\n  - Low-mark Qs: 15 mins\n  - Language analysis: 15 mins\n  - Comparison: 15 mins\n  - Buffer: 15 mins\n• Section B (Writing): 60 mins (30 per task)\n\nLITERATURE COMPONENT 1 (2 hrs):\n• Shakespeare: 45 mins\n• Poetry anthology: 40 mins\n• Unseen poetry: 30 mins\n• Buffer: 5 mins\n\nLITERATURE COMPONENT 2 (2 hrs 30 mins):\n• Post-1914 text: 60 mins\n• 19th-century Q1: 45 mins\n• 19th-century Q2: 45 mins\n\nRULE: Never leave a question blank.',
      },
      {
        id: 'wjec-et-16',
        front: 'WJEC — Key Differences from Other Boards',
        back: 'COMPARED TO AQA:\n• Language has 2 "Components" (not "Papers") — Component 2 is worth more (60%).\n• Shakespeare has NO context marks (AO3).\n• Literature Component 2 Section B has NO extract — all from memory.\n• SPaG is worth 5 marks per essay (not 4).\n\nCOMPARED TO EDEXCEL:\n• Less emphasis on AO4 (alternative interpretations).\n• Two 19th-century prose questions (not one) — need more quote memorisation.\n• Creative writing is prose only in Component 1.\n\nCOMPARED TO OCR:\n• Two Language components (not one).\n• More structured question formats.\n• Heavier weighting on Component 2.\n\nWJEC-SPECIFIC ADVANTAGES:\n• Shakespeare question doesn\'t need context — focus on analysis.\n• Component 1 reading uses literary fiction — similar skills to Literature.\n• Mark schemes reward personal response — be genuine.',
      },
      {
        id: 'wjec-et-17',
        front: 'WJEC — Creative Writing: How to Start Strong',
        back: 'Component 1 Section B is creative prose writing. Your opening is critical.\n\n5 POWERFUL OPENING TECHNIQUES:\n\n1. IN MEDIAS RES — Start in the middle of action.\n"The glass shattered before she even reached the door."\n\n2. SENSORY DETAIL — Immerse the reader immediately.\n"The air tasted of salt and rust, thick enough to chew."\n\n3. SHORT, PUNCHY SENTENCE — Create intrigue.\n"Nobody spoke. Nobody moved."\n\n4. QUESTION — Hook the reader.\n"Have you ever stood at the edge of something and known — absolutely known — you were about to fall?"\n\n5. CONTRASTING IMAGE — Set up tension.\n"The playground was empty, but the swings still moved."\n\nAVOID:\n• "One day..." or "Once upon a time..."\n• Describing waking up or the weather.\n• Long, context-setting paragraphs.\n\nYour first sentence should make the examiner want to read more.',
      },
      {
        id: 'wjec-et-18',
        front: 'WJEC — Component 2 Reading: Handling Two Non-Fiction Sources',
        back: 'Component 2 Section A gives you two non-fiction texts: one 21st-century, one 19th-century.\n\nREADING STRATEGY:\n1. Read the 21st-century text first (it\'s usually easier) — 3 mins.\n2. Read the 19th-century text — 5 mins (allow for harder vocabulary).\n3. Answer questions in order.\n\nFOR THE 19TH-CENTURY TEXT:\n• Don\'t be intimidated by long sentences.\n• Look for the main verb in each sentence.\n• Use footnotes if provided.\n• Identify the writer\'s attitude/opinion.\n\nFOR COMPARISON:\n• Start with the bigger picture — what does each writer THINK about the topic?\n• Then zoom in — HOW do they express this? (Tone, language, rhetorical devices.)\n• Use connectives: "In contrast," "Similarly," "While Source A..."\n\nCOMMON MISTAKES: Rushing the 19th-century text, not answering on the correct source, forgetting to compare methods.',
      },
      {
        id: 'wjec-et-19',
        front: 'WJEC — Literature: Memorising Quotes Effectively',
        back: 'Component 2 Section B requires quotes from MEMORY. Here is how to learn them.\n\nMETHOD 1 — QUOTE CARDS:\n• Write 15–20 quotes per text on flashcards.\n• Front: theme/character. Back: quote + brief analysis.\n• Test yourself daily.\n\nMETHOD 2 — QUOTE GRIDS:\n• Create a grid: themes across the top, chapters/acts down the side.\n• Fill in key quotes at each intersection.\n• This shows you have coverage of the WHOLE text.\n\nMETHOD 3 — ACRONYMS:\n• Take the first letter of each key quote to make a memorable word/phrase.\n\nMETHOD 4 — WRITE FROM MEMORY:\n• Practise timed essays without the book.\n• See which quotes you naturally remember and which you don\'t.\n\nQUOTE SELECTION TIPS:\n• Short quotes (3–6 words) are easier to remember and embed.\n• Choose quotes with clear techniques to analyse.\n• Know WHO says it, WHEN, and WHY it matters.\n\nAIM: Be able to write 4 quotes per essay from memory.',
      },
      {
        id: 'wjec-et-20',
        front: 'WJEC — How to Answer "What Impressions..." Questions',
        back: '"What impressions do you get of [character/place]?" is a common WJEC question type.\n\nMARKS: Usually 10 marks — the biggest reading question.\n\nWHAT THEY WANT:\n• Your INTERPRETATION of the character/place.\n• Supported with EVIDENCE (quotes).\n• Analysed using METHODS (techniques).\n\nSTRUCTURE (3–4 paragraphs):\n1. First impression + quote + analysis.\n2. Developing impression + quote + analysis.\n3. Contrasting/deeper impression + quote + analysis.\n4. (Optional) Overall impression + summary.\n\nSENTENCE STARTERS:\n• "The reader\'s first impression of [X] is... as shown by \'...\'"\n• "This impression is developed through the writer\'s use of..."\n• "However, a contrasting impression emerges when..."\n• "Overall, [X] is presented as... which suggests..."\n\nTOP TIP: Show that your impression CHANGES or DEEPENS as the extract progresses. This demonstrates sophisticated reading.\n\nCOMMON MISTAKES: Only giving one impression, not using quotes, describing without analysing techniques.',
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
        back: 'PEAL is a reliable analytical paragraph structure.\n\nP — POINT: Make a clear claim that answers the question.\n"Shakespeare presents Macbeth as consumed by guilt..."\n\nE — EVIDENCE: Embed a short quote.\n"...through the haunting image of \'Will all great Neptune\'s ocean wash this blood clean from my hand?\'"\n\nA — ANALYSIS: Explain HOW the technique creates meaning.\n"The rhetorical question reveals Macbeth\'s desperation, while the hyperbolic reference to \'Neptune\'s ocean\' suggests his guilt is so vast that no amount of cleansing can remove it."\n\nL — LINK: Connect back to the question or broaden to a theme.\n"This reinforces the idea that guilt is an inescapable consequence of moral transgression."\n\nWHEN TO USE: Literature essays, Language analysis questions, any time you need a structured analytical paragraph.',
      },
      {
        id: 'es-2',
        front: 'The WHAT-HOW-WHY Method',
        back: 'A simpler alternative to PEAL for quick, focused analysis.\n\nWHAT — What does the writer do?\n"The writer describes the setting using dark, oppressive imagery."\n\nHOW — How do they do it? (Technique + quote)\n"The metaphor \'the sky pressed down like a bruise\' creates a sense of weight and unease through the comparison to injury."\n\nWHY — Why does this matter? (Effect on reader / writer\'s purpose)\n"This positions the reader to feel trapped alongside the character, reflecting the writer\'s intention to convey psychological confinement."\n\nADVANTAGE: Forces you to always reach the WHY — which is where the marks are.\n\nUSE FOR: Any analysis question where you need to move beyond feature-spotting.',
      },
      {
        id: 'es-3',
        front: 'How to Embed Quotes Effectively',
        back: 'Embedding means weaving quotes into your own sentences so they flow naturally.\n\nBAD (bolted on):\n"Macbeth is scared. He says, \'Is this a dagger which I see before me?\' This shows he is scared."\n\nGOOD (embedded):\n"Macbeth\'s hallucination of \'a dagger\' before him reveals the psychological fracturing caused by his murderous intent."\n\nRULES FOR EMBEDDING:\n1. Keep quotes SHORT (2–5 words is ideal).\n2. Make the quote grammatically part of YOUR sentence.\n3. Use single quotation marks.\n4. If you change a word, use square brackets: \'[his] blood.\'\n\nEXAMPLES:\n• "The \'serpent\' imagery positions Lady Macbeth as deceptive and dangerous."\n• "Hyde is described as having \'something displeasing\' about him, suggesting an instinctive revulsion."\n\nTOP TIP: If your quote is longer than one line, it\'s probably too long. Find the key phrase within it.',
      },
      {
        id: 'es-4',
        front: 'Transition Phrases for Analytical Essays',
        back: 'Strong transitions guide the examiner through your argument.\n\nADDING A POINT:\n• "Furthermore," / "Moreover," / "Additionally,"\n• "Equally significant is..."\n\nCONTRASTING:\n• "However," / "Conversely," / "In contrast,"\n• "On the other hand,"\n• "Yet this interpretation is complicated by..."\n\nDEVELOPING:\n• "This is further reinforced by..."\n• "Building on this idea,"\n• "This is particularly significant because..."\n\nCOMPARING:\n• "Similarly," / "Likewise," / "In the same way,"\n• "Both writers share..." / "This echoes..."\n\nCONCLUDING:\n• "Ultimately," / "In essence,"\n• "This reveals that..." / "It is clear that..."\n\nAVOID:\n• "Also" at the start of sentences.\n• "Firstly, secondly, thirdly" (mechanical).\n• "In conclusion" (try "Ultimately" or "Therefore").',
      },
      {
        id: 'es-5',
        front: 'Academic Vocabulary for GCSE English Essays',
        back: 'Using precise, sophisticated vocabulary earns marks. Here are essential terms.\n\nFOR DESCRIBING A WRITER\'S CHOICES:\n• Conveys, suggests, implies, evokes, establishes, reinforces, subverts, critiques, exposes, champions, undermines.\n\nFOR DESCRIBING EFFECTS:\n• Unsettling, poignant, visceral, evocative, disconcerting, compelling, provocative, resonant.\n\nFOR DESCRIBING TONE:\n• Melancholic, sardonic, vitriolic, wistful, ominous, reverent, defiant, contemplative.\n\nFOR ANALYTICAL VERBS:\n• Highlights, illuminates, encapsulates, epitomises, exemplifies, juxtaposes, parallels, mirrors.\n\nFOR SHOWING UNCERTAINTY:\n• "Perhaps," "arguably," "it could be interpreted that," "this may suggest."\n\nTOP TIP: Use these words naturally. One well-placed "evocative" is better than five forced academic words.',
      },
      {
        id: 'es-6',
        front: 'How to Write an Introduction (Literature Essay)',
        back: 'A good introduction does THREE things in 2–3 sentences:\n\n1. ANSWER THE QUESTION directly.\n2. OUTLINE your argument.\n3. (Optional) MENTION the writer\'s overall purpose.\n\nTEMPLATE:\n"[Writer] presents [character/theme] as [your argument], using [key methods] to [effect]. Across the [play/novel], [Writer] [bigger purpose/message]."\n\nEXAMPLE:\n"Priestley presents Mr Birling as the embodiment of capitalist self-interest, using dramatic irony and his bombastic rhetoric to expose the moral bankruptcy of the upper classes. Through Birling\'s humiliation, Priestley argues that collective responsibility must replace selfish individualism."\n\nAVOID:\n• "In this essay I will discuss..."\n• Starting with context.\n• Long plot summaries.\n• Being vague ("Shakespeare writes about many themes...").\n\nLENGTH: 2–4 sentences. No more. Get into analysis quickly.',
      },
      {
        id: 'es-7',
        front: 'How to Write a Conclusion (Literature Essay)',
        back: 'A conclusion should REFINE your argument, not repeat it.\n\nTEMPLATE:\n"Ultimately, [Writer] uses [character/theme/text] to [overall message]. Through [key method], [Writer] challenges/reinforces/exposes [bigger idea], leaving the [reader/audience] to reflect on [final thought]."\n\nEXAMPLE:\n"Ultimately, Shelley uses the Creature\'s suffering to expose the destructive consequences of unchecked ambition and social rejection. Through the novel\'s frame narrative, she implicates the reader in the act of judgement, forcing us to ask whether it is the Creature — or the society that abandoned him — that is truly monstrous."\n\nGOOD CONCLUSIONS:\n• Zoom out to the writer\'s BIG message.\n• End with something thought-provoking.\n• Reference the beginning of your essay (cyclical).\n\nBAD CONCLUSIONS:\n• "In conclusion, [character] is presented in many ways."\n• Introducing new points.\n• Simply restating the introduction.',
      },
      {
        id: 'es-8',
        front: 'Planning Techniques: 5-Minute Essay Plan',
        back: 'NEVER start writing without a plan. 5 minutes of planning saves 10 minutes of confused writing.\n\nMETHOD 1 — SPIDER DIAGRAM:\n• Question in the centre.\n• 4–5 branches = paragraphs.\n• Each branch: point + quote + technique.\n\nMETHOD 2 — NUMBERED LIST:\n1. Intro: thesis statement.\n2. Para 1: [point] — "[quote]" — [technique].\n3. Para 2: [point] — "[quote]" — [technique].\n4. Para 3: [point] — "[quote]" — [technique].\n5. Conclusion: [overall message].\n\nMETHOD 3 — WHAT/HOW/WHY GRID:\n| What? | How? (quote + technique) | Why? (effect/purpose) |\n\nPLANNING RULES:\n• Plan the ARGUMENT, not just the content.\n• Decide your thesis BEFORE you start.\n• Ensure your points cover the WHOLE text (not just one scene).\n• Put your strongest point second-to-last (build to a climax).',
      },
      {
        id: 'es-9',
        front: 'Tentative Language: Why and How',
        back: 'Tentative language shows sophistication. It signals that you understand texts can be interpreted in multiple ways.\n\nWHY USE IT?\n• Examiners reward "exploratory" responses.\n• It shows critical thinking, not just certainty.\n• It allows you to explore alternative readings.\n\nTENTATIVE PHRASES:\n• "Perhaps this suggests..."\n• "It could be argued that..."\n• "This might imply..."\n• "Arguably, the writer intends..."\n• "One possible reading is..."\n• "This potentially reflects..."\n\nBALANCE:\n• Don\'t be tentative about EVERYTHING — that sounds unsure.\n• Be CONFIDENT in your main point, then TENTATIVE when exploring alternatives.\n\nEXAMPLE:\n"The blood imagery clearly symbolises guilt. However, it could also be argued that it represents the irreversible nature of violence — once blood is spilled, there is no undoing the act."',
      },
      {
        id: 'es-10',
        front: 'Evaluative Phrases for Critical Analysis',
        back: 'Evaluative language shows you are JUDGING effectiveness, not just describing.\n\nFOR POSITIVE EVALUATION:\n• "The writer effectively/powerfully/convincingly..."\n• "This is particularly successful because..."\n• "The most striking aspect is..."\n• "This skillfully conveys..."\n\nFOR NUANCED EVALUATION:\n• "While this effectively..., it could be argued that..."\n• "The impact of this is somewhat undermined by..."\n• "This works on multiple levels — on the surface... but beneath this..."\n\nFOR COMPARING EFFECTIVENESS:\n• "This is more effective than... because..."\n• "Where [Writer A] relies on..., [Writer B] more subtly..."\n\nWHEN TO USE:\n• Language Paper evaluation questions (AQA Q4, Edexcel Q5).\n• Any time you are asked "How effectively..." or "To what extent..."\n• Poetry comparison — evaluating which poet\'s method is more impactful.\n\nAVOID: "I think it is good." Always explain WHY.',
      },
      {
        id: 'es-11',
        front: 'How to Write About Structure',
        back: 'Structure is often overlooked, but it earns high marks.\n\nWHAT COUNTS AS STRUCTURE:\n• Opening and ending (how they relate).\n• Paragraph/stanza lengths and why they vary.\n• Shifts in focus, time, perspective, or mood.\n• Pace — created through sentence length, dialogue, white space.\n• Foreshadowing, flashbacks, cyclical structure.\n• Building tension and release.\n• The position of the volta (in poetry).\n\nHOW TO WRITE ABOUT IT:\n• "The writer opens with... which establishes..."\n• "There is a structural shift at [point] where the focus moves from... to..."\n• "The short paragraph / sentence creates a pause that emphasises..."\n• "The cyclical structure — returning to [image] — suggests..."\n\nKEY INSIGHT: Structure is about WHY things are placed WHERE they are. Ask: "Why does the writer reveal this NOW?"',
      },
      {
        id: 'es-12',
        front: 'How to Write an Introduction (Persuasive/Argumentative Writing)',
        back: 'For Language Paper writing tasks (articles, speeches, letters, essays):\n\n5 STRONG OPENING STRATEGIES:\n\n1. BOLD STATEMENT:\n"It is a truth universally ignored that our education system is failing the very people it claims to serve."\n\n2. RHETORICAL QUESTION:\n"How many more young people must struggle in silence before we act?"\n\n3. SHOCKING STATISTIC:\n"One in four teenagers reports feeling anxious every single day. That is not a statistic — it is a crisis."\n\n4. ANECDOTE:\n"Last Tuesday, a student in my school fainted during an exam. She had not eaten since the previous morning."\n\n5. DIRECT ADDRESS:\n"You — yes, you — have the power to change this."\n\nRULES:\n• Your opening must make the reader want to continue.\n• State your position clearly within the first paragraph.\n• Match the tone to the form (formal for a letter, engaging for an article).',
      },
      {
        id: 'es-13',
        front: 'How to Write a Conclusion (Persuasive/Argumentative Writing)',
        back: 'For Language Paper writing tasks:\n\nSTRATEGIES:\n\n1. CALL TO ACTION:\n"The time for talk is over. Write to your MP. Sign the petition. Demand change — because if we don\'t, who will?"\n\n2. RETURN TO OPENING (Cyclical):\n"That student I mentioned? She is still waiting. And so are thousands like her."\n\n3. POWERFUL IMAGE:\n"Imagine a world where every child walks into school feeling safe, valued, and heard. That world is possible — but only if we build it."\n\n4. RHETORICAL QUESTION:\n"The question is not whether we can afford to change. The question is whether we can afford not to."\n\n5. SHORT, PUNCHY FINAL SENTENCE:\n"Enough is enough."\n\nRULES:\n• Never introduce new arguments.\n• Echo the tone and energy of your opening.\n• Leave the reader with something memorable.\n• Keep it concise — 3–5 sentences maximum.',
      },
      {
        id: 'es-14',
        front: 'Varying Sentence Types for Effect',
        back: 'Using a range of sentence types shows control and earns marks across all papers.\n\nSIMPLE (short, punchy):\n"She ran." — Impact, urgency, emphasis.\n\nCOMPOUND (joined by and/but/or/so):\n"The door was open, but nobody dared to enter." — Balance, contrast.\n\nCOMPLEX (subordinate clause):\n"Although the sun was shining, a sense of dread lingered in the air." — Sophistication, layered meaning.\n\nMINOR/FRAGMENT:\n"Silence." — Dramatic emphasis.\n\nRHETORICAL QUESTION:\n"Who could possibly ignore such suffering?" — Engages reader.\n\nEXCLAMATORY:\n"Enough!" — Emotion, force.\n\nLIST SENTENCE:\n"The room was cluttered with broken chairs, stained carpets, cracked mirrors, and memories nobody wanted." — Accumulation.\n\nRULE: Vary sentence length within a paragraph. A long, flowing sentence followed by a short one creates rhythm and emphasis.',
      },
      {
        id: 'es-15',
        front: 'How to Analyse Word-Level Choices',
        back: 'The highest marks come from ZOOMING INTO individual words.\n\nMETHOD:\n1. Select a single word from your quote.\n2. Explore its CONNOTATIONS (associations, implications).\n3. Consider what ALTERNATIVE word the writer could have used.\n4. Explain why THIS word was chosen.\n\nEXAMPLE:\n"Hyde \'trampled calmly\' over the girl."\n• "Trampled" — connotations of violence, weight, dehumanisation. Suggests Hyde treats the child like something beneath him.\n• "Calmly" — absence of emotion, sociopathic indifference. The adverb is more disturbing than the verb — it is the CALM that horrifies.\n• The OXYMORON of violence + calm creates a sense of wrongness.\n\nKEY PHRASES:\n• "The connotations of \'...\' suggest..."\n• "The writer\'s choice of \'...\' rather than \'...\' implies..."\n• "At word level, \'...\' carries associations of..."\n\nTHIS IS WHAT SEPARATES TOP-BAND FROM MID-BAND RESPONSES.',
      },
      {
        id: 'es-16',
        front: 'Paragraphing for Effect',
        back: 'Paragraphing is a structural tool, not just an organisational one.\n\nIN ANALYTICAL ESSAYS:\n• One paragraph = one point.\n• Topic sentence at the start of each paragraph.\n• Link sentence at the end connecting to the next point or back to the question.\n\nIN CREATIVE WRITING:\n• Short paragraphs = urgency, shock, emphasis.\n• Long paragraphs = description, reflection, immersion.\n• One-line paragraphs = maximum dramatic impact.\n• Vary paragraph length to create RHYTHM.\n\nIN PERSUASIVE WRITING:\n• Each paragraph = one argument/point.\n• Build from least to most compelling.\n• Counter-argument in its own paragraph.\n• Short final paragraph for impact.\n\nGOLDEN RULE: If your paragraph is longer than half a page, it probably needs splitting.\n\nEXAMINER TIP: No paragraphs = automatic cap on your mark. Always paragraph.',
      },
      {
        id: 'es-17',
        front: 'Comparing Texts: A Framework',
        back: 'For any comparison question (Language or Literature):\n\nSTRUCTURE OPTION 1 — ALTERNATING (Recommended):\n• Paragraph 1: Point about Text A → Compare with Text B.\n• Paragraph 2: Point about Text A → Compare with Text B.\n• Paragraph 3: Point about Text A → Compare with Text B.\n\nSTRUCTURE OPTION 2 — BLOCK:\n• Paragraphs 1–2: Text A analysis.\n• Paragraphs 3–4: Text B analysis with comparison back to A.\n(This is easier but earns fewer comparison marks.)\n\nCOMPARATIVE CONNECTIVES:\n• Similarity: "Similarly," "Likewise," "Both texts," "Echoing this,"\n• Difference: "However," "In contrast," "Conversely," "While Text A..."\n• Nuance: "Although both texts..., they differ in..."\n\nWHAT TO COMPARE:\n• Themes/ideas.\n• Language choices.\n• Tone and register.\n• Structure and form.\n• Writer\'s purpose.\n\nNEVER just write about one text then the other with no links.',
      },
      {
        id: 'es-18',
        front: 'Using Discourse Markers in Essays',
        back: 'Discourse markers guide the reader through your argument. They signal the relationship between ideas.\n\nTO ADD:\n• Furthermore, Moreover, In addition, Equally, Similarly.\n\nTO CONTRAST:\n• However, Nevertheless, Conversely, On the other hand, Yet.\n\nTO EXEMPLIFY:\n• For instance, This is evident in, As demonstrated by.\n\nTO EMPHASISE:\n• Indeed, Significantly, Crucially, It is worth noting that.\n\nTO CONCLUDE:\n• Ultimately, Therefore, Thus, Consequently, In essence.\n\nTO SEQUENCE:\n• Initially, Subsequently, Following this, At the outset, By the end.\n\nTO SHOW CAUSE:\n• Consequently, As a result, This leads to, Therefore.\n\nTOP TIP: Place discourse markers at the START of sentences, not in the middle. Use them at paragraph openings to create flow between ideas.\n\nAVOID: Overusing the same marker. Aim for variety.',
      },
      {
        id: 'es-19',
        front: 'How to Discuss a Writer\'s Purpose and Intentions',
        back: 'Examiners reward discussion of WHY the writer made their choices.\n\nFRAMEWORK:\n"[Writer] uses [technique] to [effect on reader], perhaps intending to [bigger purpose/message]."\n\nEXAMPLES:\n• "Dickens uses Tiny Tim\'s fragility to evoke pathos, challenging his middle-class readership to confront the human cost of their indifference to poverty."\n• "Duffy uses the dramatic monologue form to give voice to historically silenced women, subverting the male-dominated literary canon."\n\nKEY PHRASES:\n• "[Writer] intends to / aims to / seeks to..."\n• "[Writer] challenges / reinforces / critiques / exposes / celebrates..."\n• "The reader is positioned to..."\n• "[Writer] invites the reader to question..."\n\nAVOID:\n• "The author is trying to..." (too informal — use "seeks to" or "endeavours to").\n• Making claims about what the writer THOUGHT without evidence.\n• Confusing character views with author views.',
      },
      {
        id: 'es-20',
        front: 'Proofreading Checklist: The Final 5 Minutes',
        back: 'ALWAYS save 3–5 minutes at the end to proofread. These marks are FREE.\n\nCHECK IN THIS ORDER:\n\n1. CAPITAL LETTERS:\n• Sentence starts, proper nouns, titles.\n• Character names: Scrooge, Macbeth, Inspector Goole.\n\n2. FULL STOPS AND COMMAS:\n• Every sentence ends with a full stop, question mark, or exclamation mark.\n• No comma splicing (two sentences joined by just a comma).\n\n3. APOSTROPHES:\n• Possession: "the writer\'s method" (NOT "the writers method").\n• Contraction: "it\'s" = "it is" (NOT possession — "its" = belonging to it).\n\n4. SPELLING:\n• Character names.\n• Key terms: metaphor, juxtaposition, Shakespeare, rhetorical.\n• Homophones: their/there/they\'re, effect/affect, where/were.\n\n5. TENSE:\n• Literature essays = present tense ("Shakespeare presents," NOT "presented").\n• Creative writing = consistent tense throughout.\n\nFIXING ONE ERROR = potentially one extra mark. Five minutes of proofreading can gain you several marks across the paper.'
      },
      {
        id: 'es-21',
        front: 'Edexcel Language Paper 1 Technique',
        back: 'EDEXCEL GCSE ENGLISH LANGUAGE PAPER 1 (1hr 45 mins, 96 marks)\n\nSECTION A: READING\n• Question 1 (4 marks): Key details retrieval.\n• Question 2 (8 marks): Inference from single source.\n• Question 3 (12 marks): Language analysis.\n• Question 4 (16 marks): Comparison of language in two sources.\n\nSECTION B: WRITING\n• Question 5 (40 marks): Descriptive or narrative writing.\n\nKEY STRATEGIES:\n• Q1: Close reading — exactly what is stated.\n• Q2: Read between the lines — what can you infer?\n• Q3: Analyse word choice, sentence structures, language devices. Use PEE (Point-Evidence-Explanation).\n• Q4: Find exact methods in both texts, compare them directly.\n• Q5: Plan before writing. Include sensory detail, varied sentences, sophisticated vocabulary.\n\nMARKING:\n• Reading section = 40 marks (40% of paper).\n• Writing section = 40 marks (40% of paper).\n• SPaG = 16 marks (16% of paper).\n\nTIME MANAGEMENT: Reading 55 mins, Writing 45 mins, Proofreading 5 mins.'
      },
      {
        id: 'es-22',
        front: 'OCR English Language Paper 1 Technique',
        back: 'OCR GCSE ENGLISH LANGUAGE H009/01 (1hr 30 mins, 105 marks)\n\nSECTION A: READING\n• Question 1 (15 marks): Identify and explain writers\' methods (both texts).\n• Question 2 (15 marks): Analyse writer\'s methods in detail (one text).\n• Question 3 (15 marks): Compare perspectives (both texts).\n\nSECTION B: WRITING\n• Question 4 (30 marks): Persuasive or informative writing.\n• SPaG (15 marks): Spelling, punctuation, grammar, sentence demarcation.\n\nKEY STRATEGIES:\n• Q1: Identify WHAT the writer does, not just describe.\n• Q2: Zoom into language closely — connotations, effects.\n• Q3: Compare HOW writers present different perspectives using methods.\n• Q4: Match form (letter, article, speech). Use persuasive devices. Vary sentence length.\n\nMARKING:\n• Reading = 45 marks.\n• Writing = 30 marks.\n• SPaG = 15 marks.\n• Communicating clearly = 15 marks.\n\nTIME MANAGEMENT: Reading 40 mins, Writing 40 mins, Proofreading 10 mins.'
      },
      {
        id: 'es-23',
        front: 'WJEC English Language Exam Technique',
        back: 'WJEC GCSE ENGLISH LANGUAGE (2 hours, 120 marks)\n\nSECTION A: READING (60 marks, 1 hour)\n• Q1 (10 marks): Retrieve information from text.\n• Q2 (10 marks): Analyse writer\'s methods in detail.\n• Q3 (10 marks): Evaluate effectiveness.\n• Q4 (15 marks): Compare perspectives in two texts.\n• Q5 (15 marks): Extended writing — personal response to text.\n\nSECTION B: WRITING (60 marks, 1 hour)\n• Choice of form: Article, letter, speech, or review.\n• 45 marks: Content, organisation, style.\n• 15 marks: SPaG and accuracy.\n\nKEY STRENGTHS FOR WJEC:\n• "Evaluate" questions require JUDGMENT of effectiveness.\n• Personal response questions reward individual interpretation.\n• Writing tasks value FLUENCY and ENGAGEMENT.\n\nTIME MANAGEMENT: Reading 60 mins, Writing 50 mins, Proofreading 10 mins.'
      },
      {
        id: 'es-24',
        front: 'AQA Literature Paper 2 — Modern Text Strategy',
        back: 'UNPREPARED TEXT + TEXT YOU KNOW\n\nSECTION A: MODERN TEXT (30 marks, 45 mins)\n• Choose one question from two options.\n• NO EXTRACT PROVIDED — you write from memory.\n\nSUCCESS DEPENDS ON:\n• Knowing 15–20 key quotes from your set text.\n• Understanding character motivations and development.\n• Tracking themes across the ENTIRE play/novel.\n• Discussing writer\'s methods intentionally (not just listing techniques).\n\nTEMPLATE:\nIntro (thesis) → Para 1 (point + quote + effect + context) → Para 2 → Para 3 → Para 4 → Conclusion.\n\nMARKING:\n• AO1 (12 marks): Direct, relevant response with integrated quotes.\n• AO2 (12 marks): Analysis of writer\'s methods.\n• AO3 (6 marks): Relevant context and authorial purpose.\n\nCOMMON MISTAKES:\n• Only writing about one part of the text.\n• Including quotes that don\'t serve your point.\n• Paraphrasing instead of analysing.\n• Missing context opportunities.\n\nPREPARATION: Create a revision guide with key quotes organised by character/theme.'
      },
      {
        id: 'es-25',
        front: 'CAIE English Literature Technique',
        back: 'CAMBRIDGE IGCSE ENGLISH LITERATURE (2 papers, 3 hours total)\n\nPAPER 1: POETRY & PROSE (1hr 45 mins, 96 marks)\n• Section A: Unseen poetry (24 marks).\n• Section B: Poetry anthology comparison (24 marks).\n• Section C: Prose essay (24 marks).\n• Section D: Choice of extended essay or passage analysis (24 marks).\n\nPAPER 2: DRAMA (1hr 45 mins, 96 marks)\n• Section A: Extract-based question (24 marks).\n• Section B: Thematic essay (24 marks).\n• Section C: Character essay (24 marks).\n• Section D: Extended essay (24 marks).\n\nKEY STRATEGIES:\n• Unseen poetry: Annotate, identify techniques, explore meaning.\n• Comparison: Use comparative language, analyse methods across poems.\n• Prose/Drama essays: Know set texts thoroughly, structure clearly.\n• SPaG and expression valued across all sections.\n\nMARKING:\n• Analysis and interpretation = 8 marks per question.\n• Use of textual evidence = 8 marks per question.\n• Quality of expression = 8 marks per question.\n\nTIME MANAGEMENT: Allocate 20 mins per 24-mark question.'
      },
      {
        id: 'es-26',
        front: 'Analysing Structural Techniques',
        back: 'STRUCTURE carries meaning. Examiners reward discussing PLACEMENT and EFFECT.\n\nKEY STRUCTURAL FEATURES:\n1. OPENING (What is established?)\n2. ENDING (How does it relate to opening? Cyclical? Twist? Resolution?)\n3. PACING (Slow → Fast? Tension building?)\n4. SHIFTS IN FOCUS (When does the viewpoint/setting/character change?)\n5. POSITION OF KEY MOMENT (Early crisis? Late climax? Why there?)\n6. FORESHADOWING (What hints appear before events?)\n7. JUXTAPOSITION (What is placed alongside what? For contrast?)\n8. REPETITION OF SCENES (What returns? Why?)\n\nHOW TO WRITE ABOUT IT:\n• "The opening establishes... which makes the ending\'s return to this image ironic because..."\n• "By placing the climax in the middle of the text rather than the end, the writer forces readers to see consequences unfold."\n• "The short, brutal sentences in this paragraph contrast with the long, flowing descriptions earlier, mirroring the character\'s emotional shift."\n\nKEY INSIGHT: Ask "Why HERE?" for every structural choice. The answer is the analysis.'
      },
      {
        id: 'es-27',
        front: 'Analysing Tense and Perspective',
        back: 'TENSE and PERSPECTIVE shape how readers experience a text.\n\nTENSE CHOICES:\n• Present tense: Immediacy, urgency, "now-ness."\n• Past tense: Reflection, memory, emotional distance.\n• Future tense: Prediction, hope, dread.\n• Shifts in tense: Can show changing emotional states or reveal unreliability.\n\nPERSPECTIVE CHOICES:\n• First person ("I"): Intimate, subjective. Reader only knows what the narrator knows.\n• Second person ("You"): Direct address, confrontational, makes reader complicit.\n• Third person (close): Focus on one character\'s thoughts while narrating from outside.\n• Third person (omniscient): God-like knowledge of all characters. Can create dramatic irony.\n• Shifting perspective: Can show multiple viewpoints or character development.\n\nWHEN ANALYSING:\n• Link tense/perspective shifts to meaning.\n• "The shift to second person directly addresses the reader, making them complicit in the character\'s guilt."\n• "The unreliable first-person narrator reveals through gaps in memory that he is denying his own guilt."\n\nTOP MARK MOVES: Notice when tense/perspective is NOT what you\'d expect, and explore the effect.'
      },
      {
        id: 'es-28',
        front: 'Analysing Dialogue',
        back: 'DIALOGUE reveals character, drives plot, and conveys theme.\n\nWHAT TO ANALYSE:\n1. WHAT IS SAID (Content — explicit meaning).\n2. HOW IT\'S SAID (Register, formality, dialect, vocabulary).\n3. WHAT\'S NOT SAID (Subtext — what is implied or hidden).\n4. WHO SPEAKS (Frequency — who dominates conversation?).\n5. INTERRUPTIONS (Who speaks over whom? Power dynamics).\n6. SILENCE (What is left unsaid? Why can\'t characters speak?).\n\nEXAMPLE:\n"The Inspector: "You\'re not responsible for Eva\'s death."\nMr Birling: "Of course not! She was just a maid!"\n• Mr Birling\'s interruption and exclamation mark show defensiveness.\n• The class reference ("just a maid") reveals his prejudice.\n• The Inspector\'s calmness contrasts with Birling\'s panic — power reversal.\n\nKEY PHRASES:\n• "Through dialogue, the character reveals..."\n• "The formality/informality of the exchange suggests..."\n• "The fact that [character] does not respond to this indicates..."\n\nTOP MARK MOVE: Analyse what the dialogue REVEALS about the character, not just what they say.'
      },
      {
        id: 'es-29',
        front: 'Analysing Setting and Atmosphere',
        back: 'SETTING is not just backdrop — it shapes meaning and atmosphere.\n\nWHAT TO ANALYSE:\n1. LITERAL SETTING (Place, time period, season, weather).\n2. HOW IT\'S DESCRIBED (Adjectives, imagery, tone).\n3. CHARACTER-SETTING INTERACTION (Are characters comfortable? Out of place?)\n4. CHANGES IN SETTING (What do movements between locations mean?)\n5. MOOD/ATMOSPHERE (What feeling does the setting create?).\n6. PATHETIC FALLACY (Does weather mirror emotions?)\n\nEXAMPLE:\n"The dark, narrow streets of Soho" (Jekyll and Hyde)\n• Darkness = moral ambiguity, danger, secret.\n• Narrow = claustrophobic, confining, inescapable.\n• Soho location = known as dissolute area (historical context).\n• Together: These settings symbolise the moral darkness within respectable men.\n\nKEY PHRASES:\n• "The setting functions as a microcosm for..."\n• "The description of [place] establishes an atmosphere of..."\n• "The character\'s movement from [location A] to [location B] symbolises..."\n\nTOP MARK MOVE: Link setting to theme. Show how the where shapes the what and why.'
      },
      {
        id: 'es-30',
        front: 'Answering "To What Extent" Questions',
        back: 'These questions ask you to EVALUATE and ARGUE, not just describe.\n\n"TO WHAT EXTENT" means: How much? How far? How true is this statement?\n\nAPPROACH:\n1. Take a position: Agree fully, partially, or disagree.\n2. Build your case with evidence.\n3. Acknowledge the other side.\n4. Conclude with your judgment.\n\nSTRUCTURE:\nIntro: "To a significant extent, [statement is true] because..., though some qualification exists."\n\nBody para 1: Evidence FOR the statement.\nBody para 2: Evidence FOR but with some complication.\nBody para 3: Evidence AGAINST or limitations.\nBody para 4: Synthesis.\n\nConclusion: "Overall, [statement is true/partially true] in that... However, [qualification]."\n\nLANGUAGE:\n• "Convincingly suggests..."\n• "The extent to which this is true is limited because..."\n• "While this argument has merit, it overlooks..."\n• "Ultimately, the evidence points to..."\n\nKEY RULE: Avoid yes/no binary answers. Show nuance. "Both... and..." is your friend.\n\nMARK DIFFERENCE: Level 4 = Simple answer (yes or no). Level 5 = Nuanced, qualified answer.'
      },
    ],
  },
];
