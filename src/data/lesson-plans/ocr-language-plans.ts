// ─── OCR English Language J351: 15 Comprehensive Lesson Plans ────────────────
// Component 01 (Communicative Skills) + Component 02 (Language Systems & Accuracy)
// Ready-to-teach with full differentiation, model answers, and assessment

export interface OCRLessonPlan {
  id: string
  title: string
  duration: string
  yearGroup: string
  examBoard: 'OCR'
  learningObjectives: string[]
  starterActivity: {
    description: string
    duration: string
    resources: string[]
  }
  mainActivity: {
    description: string
    duration: string
    steps: string[]
    differentiation: {
      support: string
      stretch: string
    }
  }
  plenary: {
    description: string
    duration: string
  }
  homework: string
  resourcesNeeded: string[]
  assessmentOpportunities: string[]
  keyVocabulary: string[]
  crossCurricular: string[]
  sendAdaptations: string
}

export const ocrLanguageLessonPlans: OCRLessonPlan[] = [
  {
    id: 'ocr-lang-c1-01',
    title: 'Overview: OCR J351 Assessment Structure, Objectives & Weightings',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Understand the complete OCR J351 structure: Component 01 (50%) and Component 02 (50%)',
      'Know assessment weightings: Communicative Skills (reading, writing, speaking, listening)',
      'Identify the four language system areas tested in Component 02',
      'Create a personalized revision plan based on exam weighting'
    ],
    starterActivity: {
      description: 'Assessment Structure Puzzle: Divide the class into four groups. Give each group a card describing one part of OCR J351 (Component 01: Written Communication, Component 01: Spoken Communication, Component 02: Vocabulary & Spelling, Component 02: Grammar & Punctuation). Groups order themselves according to mark weighting (50%, 25%, 15%, 10%). Discuss why OCR weights communicative skills so heavily.',
      duration: '10 mins',
      resources: ['Four assessment structure cards', 'Weighting reference sheet', 'Whiteboard timeline']
    },
    mainActivity: {
      description: 'Build a comprehensive OCR J351 framework showing both components, assessment weightings, mark allocations per task, and time management strategy. Use OCR specimen papers to identify each component in context. Students work in pairs to complete a blank template, then compare in groups of four. Build a master version on the board together. Key teaching: Component 01 (60 marks) = Written Comm (40 marks) + Spoken Comm (20 marks); Component 02 (40 marks) = integrated language accuracy assessment. Run a "skill simulation": project extracts from different task types (formal email, persuasive text, speech transcript) and ask students to identify which component each would be assessed under and what weighting it carries. Debrief: What skills do you already have? What needs development? Students write personalised component focus plan.',
      duration: '35 mins',
      steps: ['Distribute blank OCR J351 framework with two rows (Component 01 and 02)', 'Using projected OCR specimen papers, students identify tasks and their marks', 'Fill in: component, task type, marks, weighting, suggested time allocation', 'Pairs compare with groups of four, resolving differences', 'Teacher builds master version on board; discuss component weighting rationale', 'Project three extracts from different communicative tasks; students identify component and weighting', 'Students write personalised component focus plan (which skills to prioritize)'],
      differentiation: {
        support: 'Provide partially completed framework with Component 01 Written Comm pre-filled. Include visual diagram showing mark distribution. Offer percentage glossary. Allow extra time to process weighting information.',
        stretch: 'Students analyse past paper results to identify which component carries highest marks across multiple years. Create a "skills matrix" matching each OCR skill to a learning priority. Write brief explanations for why OCR weights each component as it does.'
      }
    },
    plenary: {
      description: 'OCR J351 in 60 Seconds: Students write everything they now know about the qualification structure (components, weightings, marks, timing). Swap with partner who ticks correct information and adds anything missing in different colour. Cold-call three students to share one key fact each.',
      duration: '10 mins'
    },
    homework: 'Create a revision poster showing OCR J351 structure: both components, marks, weightings, task types, and one key success criterion per component. Bring to next lesson for peer review.',
    resourcesNeeded: ['OCR specimen papers (projected or printed)', 'Blank OCR J351 framework sheet', 'Component weighting diagram', 'Percentage glossary for LA students', 'Task type reference cards'],
    assessmentOpportunities: ['Check completed framework for accuracy', 'Assess component focus plan justifications', '60-second recall test (formative check of understanding)'],
    keyVocabulary: ['component', 'communicative', 'weighting', 'mark allocation', 'assessment objective', 'specimen paper', 'criterion', 'communicative purpose', 'spoken language', 'written text'],
    crossCurricular: ['Mathematics (percentages, time allocation)', 'Organisation and planning skills'],
    sendAdaptations: 'Provide pre-completed weighting diagram; simplify framework to show only main points; allow extra time for information processing; pair with stronger peer for task identification; offer visual percentage cards; seat near teacher for additional explanation of weighting concept.'
  },

  {
    id: 'ocr-lang-c1-02',
    title: 'Task Type 1: Transactional Writing (Email, Letter, Formal Request)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Understand the conventions of transactional writing for specific purposes',
      'Identify register, tone, and formality requirements for different recipient types',
      'Structure transactional texts with clear communication and appropriate detail',
      'Score 7+ marks by achieving communicative purpose effectively'
    ],
    starterActivity: {
      description: 'Tone Detector: Display three versions of the same message (very formal, neutral, very informal). Students identify which version suits different scenarios: emailing a headteacher, texting a friend, writing to a company. Discuss how register changes based on audience and purpose. Show that transactional writing demands specific tone choices.',
      duration: '10 mins',
      resources: ['Three tone-variant versions of same message (printed/projected)', 'Scenario cards (different recipients)', 'Register reference sheet']
    },
    mainActivity: {
      description: 'Teach the structure of transactional writing: (1) Clear opening stating the purpose. (2) Logically organized main points. (3) Specific details and examples supporting your request/complaint/enquiry. (4) Polite, purposeful closing with any required action. Model email to a company: Opening (state purpose: requesting refund), Detail (explain issue, reference order number, date), Request (ask for specific action), Closing (thank you, await response). Show Grade 6 response (clear purpose + some detail, minor format issues) and Grade 8 response (purposeful opening + well-organized points + specific details + appropriate tone throughout). Complete three timed transactional writing tasks (15 mins each) responding to different scenarios (formal email, letter to local council, customer complaint). Self-assess using mark scheme focused on: Does the text achieve its communicative purpose? Is register appropriate? Is it clearly structured? Are specific details included?',
      duration: '35 mins',
      steps: ['Introduce transactional writing purpose: to achieve a specific outcome (request, complain, enquire, inform)', 'Display structure: Clear opening + organized main points + specific detail + purposeful closing', 'Model email response using a specimen scenario (teacher thinks aloud)', 'Show Grade 6 model response (achieves purpose, some organizational issues)', 'Show Grade 8 model response (achieves purpose purposefully, well-organized, appropriate tone, specific details)', 'Discuss why Grade 8 is higher', 'Task 1: Email task with scenario A (15 mins); self-assess using mark scheme', 'Task 2: Letter or formal request with scenario B (15 mins); self-assess', 'Task 3: Customer complaint with scenario C (15 mins); self-assess', 'Peer review of Task 3: Does the purpose come across clearly? Is tone appropriate?'],
      differentiation: {
        support: 'Provide structure frame: (Opening: "I am writing to...") (Detail: "Specifically, [explain]...") (Request: "I would appreciate it if...") (Closing: "Thank you for..."). Offer purpose-specific word banks (complaint: "unsatisfactory", "disappointed", "request compensation"; enquiry: "I would like to know", "Could you clarify"). Allow shorter responses (three short paragraphs instead of four).',
        stretch: 'Write a transactional text achieving a complex purpose (e.g., complaining AND requesting a refund AND asking for future improvement). Analyse how your tone shifts to suit the dual purpose. Rewrite one task in a different register (formal to informal or vice versa) and discuss what changes are required. Compare your response with a model answer and identify one area to improve.'
      }
    },
    plenary: {
      description: 'Transactional Text Surgery: Display one student response (anonymized) on the board. Class identifies: (1) Is the purpose clear from the opening? (2) Are the main points logically ordered? (3) Is specific detail included? (4) Is the closing purposeful and appropriate? Highlight strengths and one area for improvement. Repeat with a second response if time allows.',
      duration: '10 mins'
    },
    homework: 'Write a transactional text in response to a real-world scenario (provided). You will choose from: formal email to school about curriculum concern, letter to local authority about community issue, customer complaint about faulty product. Bring completed task to next lesson for peer feedback.',
    resourcesNeeded: ['Three tone-variant message examples', 'Three scenario cards for main tasks', 'Structure frame template (for support)', 'Purpose-specific word banks (for support)', 'Grade 6 and Grade 8 model responses', 'Transactional mark scheme', 'Register reference poster'],
    assessmentOpportunities: ['Tone matching in starter (quick check)', 'Three transactional writing tasks (self-assessed)', 'Peer review of structure and purpose clarity', 'Homework transactional text (self/peer/teacher marked)'],
    keyVocabulary: ['transactional', 'register', 'tone', 'formality', 'communicative purpose', 'audience', 'recipient', 'opening', 'closing', 'detail', 'complaint', 'enquiry'],
    crossCurricular: ['Professional communication skills', 'Customer service', 'Civic engagement'],
    sendAdaptations: 'Provide detailed structure frame with sentence starters; offer comprehensive word banks with definitions; reduce writing task length (aim for 200–250 words instead of 300); allow typed response if handwriting is barrier; allow extra 10 minutes per task; pair with peer for brainstorming; provide example texts from real organizations (e.g., actual complaint emails); allow oral response scribed by TA.'
  },

  {
    id: 'ocr-lang-c1-03',
    title: 'Task Type 2: Persuasive/Discursive Writing (Speech, Article, Opinion Piece)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Construct a persuasive argument with multiple supporting points',
      'Use rhetorical devices to enhance persuasive effect (repetition, rhetorical questions, etc.)',
      'Structure a persuasive text with clear argument progression',
      'Score 7+ marks by developing a sustained, engaging persuasive voice'
    ],
    starterActivity: {
      description: 'Spot the Persuasion Technique: Display five short extracts (sentence-level) showing different persuasive techniques: rhetorical question, repetition, personal anecdote, statistics, emotive language. Students match techniques to their names and discuss which is most persuasive and why. Teacher introduces the concept of "persuasive voice" — the writer\'s tone that makes the reader believe and care.',
      duration: '10 mins',
      resources: ['Five short persuasive extracts (printed/projected)', 'Technique name cards', 'Persuasive voice poster']
    },
    mainActivity: {
      description: 'Teach the structure of persuasive writing: (1) Compelling opening that hooks the reader and signals your position. (2) 2–3 main arguments, each developed with evidence, explanation, and persuasive language. (3) Acknowledge a counterargument briefly, then refute it. (4) Strong closing that reinforces your position and calls reader to action. Model a persuasive speech on a student-relevant topic (e.g., "School uniform should be abolished"): Opening (hook + position), Argument 1 (with example, persuasive language), Argument 2 (with statistic, rhetorical device), Counterargument (brief acknowledgment + refutation), Closing (call to action). Show Grade 6 response (clear position + 2 arguments, basic persuasive language) and Grade 8 response (compelling opening + 3 developed arguments + varied persuasive techniques + sophisticated refutation of counterargument). Complete two timed persuasive writing tasks (20 mins each): Speech or opinion article on given topics. Self-assess using mark scheme: Are arguments developed? Is persuasive language used effectively? Does the position come across powerfully?',
      duration: '35 mins',
      steps: ['Introduce persuasive structure: Compelling opening + 2–3 developed arguments + counterargument refutation + strong closing', 'Display list of persuasive techniques: rhetorical question, repetition, anecdote, statistics, emotive language, address to reader', 'Model persuasive speech using student-relevant topic (teacher thinks aloud about argument development)', 'Show Grade 6 model response (position clear, 2 arguments, limited technique variation)', 'Show Grade 8 model response (compelling voice, 3 developed arguments, varied techniques, effective counterargument handling)', 'Discuss why Grade 8 is higher: persuasive voice, argument development, technique range', 'Task 1: Persuasive speech on topic A (20 mins); self-assess using mark scheme', 'Task 2: Opinion article on topic B (20 mins); self-assess and compare with peer'],
      differentiation: {
        support: 'Provide argument frame: (Opening: "Many people argue that [position]. I agree because...") (Argument 1: "First, [point]. For example, [evidence]...") (Argument 2: "Second, [point]...") (Counterargument: "Some say [opposite view]. However, [refutation]...") (Closing: "Clearly, [position] is the right choice."). Offer bank of persuasive phrases and techniques. Allow shorter response (2 developed arguments instead of 3). Reduce counterargument requirement.',
        stretch: 'Identify three persuasive techniques you used and explain why each enhances your argument. Rewrite your opening two different ways and discuss which is most compelling. Analyse how your tone shifts across the text to build persuasive effect. Compare your argument with a model answer and identify how to develop from Grade 7 to Grade 8.'
      }
    },
    plenary: {
      description: 'Persuasion Analysis: Display an excerpt from a published persuasive text (article, speech excerpt, advertisement). Students identify: (1) What is the writer\'s position? (2) What techniques make this persuasive? (3) How would you rate the persuasive impact (1–10) and why? Whole-class discussion of what makes persuasion "work" — position clarity + technique variety + compelling voice.',
      duration: '10 mins'
    },
    homework: 'Write a persuasive text (speech or article) on a topic of your choice. You must include at least three different persuasive techniques, acknowledge one counterargument, and write a closing that calls readers to action. Bring to next lesson for peer feedback on persuasive impact.',
    resourcesNeeded: ['Five persuasive technique extracts', 'Persuasive technique checklist', 'Argument frame template (for support)', 'Persuasive phrases word bank (for support)', 'Grade 6 and Grade 8 model responses', 'Persuasive writing mark scheme', 'Published persuasive text excerpt (for plenary)'],
    assessmentOpportunities: ['Technique identification in starter (quick check)', 'Two timed persuasive writing tasks (self-assessed)', 'Peer review of persuasive impact and voice consistency', 'Homework persuasive text (self/peer/teacher marked for technique variety)'],
    keyVocabulary: ['persuasive', 'rhetoric', 'rhetorical question', 'repetition', 'anecdote', 'emotive language', 'counterargument', 'refute', 'position', 'argument', 'evidence', 'persuasive voice'],
    crossCurricular: ['Debating', 'Political literacy', 'Media analysis', 'Social campaigns'],
    sendAdaptations: 'Provide detailed argument frame with sentence starters; offer comprehensive persuasive phrases bank; reduce writing task length (aim for 250–300 words instead of 400); allow typed response; allow extra 10 minutes per task; provide examples of published persuasive texts for analysis; allow oral response recorded by TA; pair with peer for persuasive technique brainstorming.'
  },

  {
    id: 'ocr-lang-c1-04',
    title: 'Task Type 3: Descriptive/Narrative Writing (Short Story, Descriptive Passage)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Create vivid, engaging descriptive and narrative writing',
      'Use literary devices (imagery, symbolism, pacing) to enhance effect',
      'Show character and emotion through description and action, not telling',
      'Score 7+ marks by balancing narrative/descriptive detail with linguistic quality'
    ],
    starterActivity: {
      description: 'Show Not Tell: Display a sentence telling emotion ("She was sad") and three alternative versions showing emotion through detail ("Her eyes fixed on the empty chair where he always sat. She did not move for twenty minutes."). Students discuss which conveys emotion more powerfully and why. Discuss that descriptive writing shows rather than tells.',
      duration: '10 mins',
      resources: ['Four versions of same emotional sentence (printed/projected)', 'Show vs Tell comparison poster', 'Imagery examples sheet']
    },
    mainActivity: {
      description: 'Teach descriptive/narrative writing structure: (1) Engaging opening that sets scene or introduces character. (2) Vivid description using sensory detail, imagery, and literary devices. (3) Narrative development (if applicable) showing character emotion and motivation. (4) Satisfying ending that echoes or develops the opening theme. Model a descriptive passage: "The kitchen smelled of burnt toast and stale coffee. Morning light slanted across the unwashed dishes, each one a small betrayal." Show how sensory detail + specific objects convey mood without explicit statement. Show Grade 6 response (clear description + some sensory detail, limited literary device use) and Grade 8 response (vivid description + varied imagery + effective symbolism + compelling voice). Complete two timed descriptive/narrative tasks (20 mins each) responding to prompts or brief scenarios. Self-assess using mark scheme: Is description vivid and specific? Are literary devices used effectively? Does the writing show emotion/atmosphere rather than telling?',
      duration: '35 mins',
      steps: ['Introduce descriptive/narrative structure: Engaging opening + vivid sensory description + literary device use + satisfying ending', 'Discuss literary devices: simile, metaphor, personification, symbolism, imagery', 'Display Show vs Tell poster: comparison of telling statements vs showing through detail', 'Model descriptive passage using a simple scenario (teacher thinks aloud about sensory choices, imagery)', 'Show Grade 6 model response (description clear, some sensory detail, limited device variety)', 'Show Grade 8 model response (vivid sensory language, varied literary devices, compelling atmosphere)', 'Discuss why Grade 8 is higher: specificity, device variety, atmosphere creation', 'Task 1: Descriptive passage task (describe a place or character) — 20 mins; self-assess', 'Task 2: Narrative task (brief story or scene) — 20 mins; self-assess and peer review for imagery impact'],
      differentiation: {
        support: 'Provide descriptive frame with prompts: (Opening: "The [place/person] was [specific detail]...") (Sensory detail: "I could smell/hear/see...") (Emotional response: "This made me feel..."). Offer literary device examples with brief definitions. Allow shorter response (one page instead of 1.5–2 pages). Provide starting sentence and scenario.',
        stretch: 'Write a descriptive passage that uses an extended metaphor throughout (e.g., describing a character using nature imagery). Identify three literary devices you used and explain how each enhances atmosphere. Rewrite a passage from Grade 6 level to Grade 8 level, adding imagery and device variety. Compare your work with a model answer and identify what distinguishes high-level description.'
      }
    },
    plenary: {
      description: 'Imagery Circle: Students stand in a circle. One student reads aloud one vivid sentence from their descriptive writing. Next student reads another student\'s sentence. Continue until five sentences are shared. Class discusses: Which images are most powerful and why? What makes descriptive language memorable? Which sentences "show" rather than "tell"?',
      duration: '10 mins'
    },
    homework: 'Write a descriptive passage (300–400 words) describing either a place that holds emotional significance for you OR a person you know well. Focus on showing emotion/atmosphere through sensory detail and imagery rather than telling the reader how to feel. Bring to next lesson for peer feedback on imagery impact.',
    resourcesNeeded: ['Show vs Tell comparison poster', 'Literary device examples sheet', 'Descriptive frame template (for support)', 'Sensory vocabulary word bank (for support)', 'Grade 6 and Grade 8 model responses', 'Descriptive writing mark scheme', 'Imagery collection sheet'],
    assessmentOpportunities: ['Show vs Tell identification in starter (quick check)', 'Two timed descriptive/narrative writing tasks (self-assessed)', 'Peer review of imagery impact and literary device effectiveness', 'Homework descriptive passage (self/peer/teacher marked for specificity and device use)'],
    keyVocabulary: ['descriptive', 'narrative', 'imagery', 'simile', 'metaphor', 'personification', 'symbolism', 'sensory detail', 'atmosphere', 'perspective', 'pacing', 'show not tell'],
    crossCurricular: ['Creative writing', 'Visual arts (composition, perspective)', 'Music (pacing, tone)', 'Psychology (emotional communication)'],
    sendAdaptations: 'Provide detailed descriptive frame with sentence starters; offer comprehensive sensory vocabulary word bank; reduce writing task length (aim for 250 words instead of 400); allow typed response; allow extra 10 minutes per task; provide example descriptive passages from published authors for analysis; pair with peer for brainstorming imagery; allow verbal description recorded by TA.'
  },

  {
    id: 'ocr-lang-c1-05',
    title: 'Integrated Task: Multi-Genre Response (Combining 2–3 Text Types)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Demonstrate understanding of multiple text types and their communicative purposes',
      'Switch register and style effectively between different text forms',
      'Plan a multi-text response meeting all communicative objectives',
      'Score 7+ marks by managing complexity and maintaining quality across formats'
    ],
    starterActivity: {
      description: 'Text Type Decoder: Display three short texts: a formal email, a newspaper article headline, and a speech opening sentence. Students identify the text type, communicative purpose, and intended audience. Discuss what makes each one recognizable and how they differ in tone, structure, and language choice. Introduce the concept of multi-genre response: same topic, multiple formats.',
      duration: '10 mins',
      resources: ['Three short text examples (printed/projected)', 'Text type identification checklist', 'Register comparison chart']
    },
    mainActivity: {
      description: 'Teach planning a multi-genre response: (1) Read the task carefully to identify how many texts are required and their types. (2) Brainstorm content and key points applicable across formats. (3) For each text, identify specific communicative purpose, register, and structure. (4) Draft texts separately, ensuring each maintains its own conventions while addressing overall task topic. Model a two-text response: task asks for "an email to local council about youth facilities + a speech to school assembly on same topic". Plan: Content (facilities needed, benefits, call to action). Text 1 — Email: formal register, transactional structure, specific requests. Text 2 — Speech: persuasive tone, rhetorical devices, call to action. Show Grade 6 response (both texts present, some register confusion, limited distinction) and Grade 8 response (clear register distinction, texts maintain individual conventions, all communicative purposes achieved). Complete one multi-genre task (30 mins planning + drafting) requiring two or three texts. Self-assess using mark scheme: Are all text types present? Does each maintain appropriate register and structure? Do all communicative objectives come through?',
      duration: '35 mins',
      steps: ['Introduce multi-genre task structure: two or three texts on same topic, different formats', 'Display text type identification checklist: purpose, register, structure, audience', 'Model planning a two-text response (email + speech): identify shared content vs format-specific choices', 'Show how register and tone differ between the same message in two formats', 'Show Grade 6 model response (both texts present, inconsistent register)', 'Show Grade 8 model response (clear register distinction, strong individual conventions)', 'Discuss why Grade 8 is higher: register clarity, format-specific conventions, maintained quality', 'Distribute multi-genre task requiring 2–3 texts', 'Students plan (10 mins): identify content applicable across texts, then specific choices per format', 'Students draft (20 mins): maintain quality while switching between formats'],
      differentiation: {
        support: 'Reduce to two texts instead of three. Provide separate structure frames for each text type with register reminders. Offer content planning sheet showing key points applicable to all texts, then prompting format-specific choices. Allow shorter response per text type (150–200 words instead of 250). Provide register reference cards.',
        stretch: 'Complete with three texts. Analyse whether any content appears across all three formats and explain why certain points suit certain formats better. Identify register shifts and explain why each is necessary. Compare with model answer and discuss what distinguishes high-level multi-genre responses.'
      }
    },
    plenary: {
      description: 'Register Reflection: Students read their two or three texts aloud (or display on board). Class listens for register shifts: Does the formal email sound different from the persuasive speech? Are there moments where register slips or becomes inconsistent? Discuss: What makes register shift convincing? How do experienced writers maintain different voices across formats?',
      duration: '10 mins'
    },
    homework: 'Complete a multi-genre response task at home (provided scenario, 2–3 text types required). Annotate your response identifying the register and communicative purpose of each text. Bring to next lesson for peer analysis of register distinction and format convention accuracy.',
    resourcesNeeded: ['Three short text type examples', 'Text type identification checklist', 'Register comparison chart', 'Multi-genre task scenario(s)', 'Structure frames for each text type (for support)', 'Content planning sheet (for support)', 'Grade 6 and Grade 8 model responses (showing register shifts)', 'Multi-genre mark scheme'],
    assessmentOpportunities: ['Text type identification in starter (quick check)', 'Planning task (organization and content identification check)', 'Timed multi-genre response (self-assessed for register consistency and format conventions)', 'Peer analysis of register shifts and format accuracy', 'Homework multi-genre response (self/peer/teacher marked)'],
    keyVocabulary: ['multi-genre', 'register', 'communicative purpose', 'tone', 'formality', 'convention', 'format', 'text type', 'audience', 'register shift', 'consistency'],
    crossCurricular: ['Code-switching (linguistics)', 'Professional communication', 'Audience awareness'],
    sendAdaptations: 'Provide detailed structure frames for each required text type; include register reminders on each frame; reduce to two texts instead of three; allow shorter responses per format; provide register reference cards with key phrases; allow extra 10 minutes planning time; pair with peer for planning discussion; allow oral planning recorded by TA; provide example multi-genre responses from published sources.'
  },

  {
    id: 'ocr-lang-c1-06',
    title: 'Reading Comprehension: Inference & Inference Development Skills',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Distinguish between explicit information (stated in text) and implicit information (inferred from text)',
      'Make supported inferences using textual evidence',
      'Identify and analyze inference across complex texts',
      'Develop inference skills to understand writer intent and implied meaning'
    ],
    starterActivity: {
      description: 'What\'s Implied?: Display a short scenario with minimal detail: "She picked up the envelope. Her hands trembled." Ask students what they infer: Is she nervous? Excited? Shocked? How do they know? Discuss that readers must infer meaning beyond explicit words. Show that inference requires text evidence, not pure guessing.',
      duration: '10 mins',
      resources: ['Short scenario with sparse detail (projected/printed)', 'Inference prompt cards', 'Evidence checklist']
    },
    mainActivity: {
      description: 'Teach inference as an active reading skill: (1) Identify explicit information (what the text directly states). (2) Notice detail (word choice, actions, setting) that suggests meaning beyond the explicit. (3) Connect details to infer the writer\'s implication. (4) Support inferences with quotations. Model with a short story extract showing character anxiety through description and dialogue. Explicit: "She waited in the corridor." Inferred (from detail): She was nervous or apprehensive. Evidence: specific descriptions (hands trembling, avoiding eye contact, short responses). Show how different readers might make different inferences from the same text, but all inferences must be supported by evidence. Complete three inference tasks (15 mins each) with increasing complexity: simple extract with clear inference, complex extract with multiple possible inferences, sophisticated text requiring layered inference. Self-assess using mark scheme: Did I identify explicit information? Did I notice telling details? Is my inference supported by evidence?',
      duration: '35 mins',
      steps: ['Introduce inference as distinguishing explicit (stated) from implicit (implied) information', 'Discuss that writers imply meaning through: word choice, actions, setting detail, dialogue tone', 'Model inference thinking using short extract: identify explicit info, notice details, infer meaning, provide evidence', 'Show how same text might support multiple valid inferences if each is evidence-backed', 'Discuss unreasonable inferences: those without textual support', 'Task 1: Simple inference task (clear explicit + clear implied information) — identify both and state inference with evidence', 'Task 2: Complex inference task (multiple details suggesting meaning) — identify layered inferences', 'Task 3: Sophisticated inference task (ambiguous, requiring close reading) — explain inferences with quotation support', 'Peer review Task 3: Does the evidence genuinely support the inference stated?'],
      differentiation: {
        support: 'Provide explicit information first (what the text states), then guide inference through questions: "What word choice suggests emotion?", "What action shows attitude?". Offer inference sentence starters: "The writer implies that...", "I infer [character] was [emotion] because...". Allow shorter text extracts. Reduce number of inferences to identify.',
        stretch: 'Identify multiple valid inferences from a single extract. Explain which inference the writer most likely intended and why. Analyse how textual ambiguity creates multiple possible readings. Compare inferences across different readers and discuss how evidence can support multiple interpretations.'
      }
    },
    plenary: {
      description: 'Inference Jury: Display a short extract and one inference statement (e.g., "The narrator distrusts the stranger"). Students vote: "Supported by evidence" or "Insufficient evidence." Discuss their reasoning. Show the specific quotations and detail that support or fail to support the inference. Reinforce: inference ≠ guessing; it requires text evidence.',
      duration: '10 mins'
    },
    homework: 'Find a paragraph from a novel or short story you are reading. Identify three explicit facts (stated directly) and three inferences (implied but not directly stated). Write one sentence explaining each inference and cite the evidence supporting it. Bring to next lesson for peer review of inference validity.',
    resourcesNeeded: ['Scenario with sparse detail', 'Three inference task extracts (simple, complex, sophisticated)', 'Inference prompt cards', 'Evidence checklist', 'Inference sentence starters sheet', 'Model inference responses', 'Inference mark scheme', 'Extract for plenary jury task'],
    assessmentOpportunities: ['Inference identification in starter (quick check)', 'Three inference tasks (self-assessed)', 'Inference jury discussion (formative check of reasoning)', 'Homework inference analysis (self/peer/teacher marked for evidence use)'],
    keyVocabulary: ['inference', 'implicit', 'explicit', 'evidence', 'imply', 'suggest', 'detail', 'word choice', 'tone', 'interpretation', 'infer', 'deduction'],
    crossCurricular: ['Critical thinking', 'Reading strategies', 'Evidence-based reasoning'],
    sendAdaptations: 'Provide explicit information first through guided questions; offer comprehensive inference sentence starters; use shorter, simpler text extracts initially; reduce number of inferences to identify; provide visual cues (highlighting detail words, marking quoted evidence); allow verbal inference explanations scribed by TA; pair with stronger peer for complex inferences; provide inference checklist to guide thinking.'
  },

  {
    id: 'ocr-lang-c1-07',
    title: 'Spoken Language: Preparing & Delivering an Effective Presentation',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Prepare an organized, purposeful spoken presentation',
      'Use vocal delivery techniques (pace, pause, stress) to enhance communication',
      'Manage audience engagement through eye contact, gesture, and tone',
      'Deliver a 3–5 minute presentation meeting OCR spoken language assessment criteria'
    ],
    starterActivity: {
      description: 'Delivery Detective: Play a video clip of a poor presentation (hesitant, no eye contact, rapid speech) and a strong presentation (clear pacing, audience address, varied tone). Students identify specific techniques used in the strong version: eye contact, pause for emphasis, varied pace, gesture. Discuss how delivery affects message impact.',
      duration: '10 mins',
      resources: ['Two video presentation clips (contrasting quality)', 'Delivery techniques checklist', 'Eye contact/gesture examples']
    },
    mainActivity: {
      description: 'Teach presentation planning and delivery: (1) Plan content: clear opening statement, 2–3 main points with examples, purposeful closing. (2) Prepare delivery notes (not full script): key points only, pause reminders, emphasis notes. (3) Practise delivery: test pacing, eye contact, gesture, voice variety. (4) Manage Q&A if required. Model a 3-minute presentation on a student-relevant topic (e.g., "Why Year 11 should have flexible break times"). Show opening (introduce topic, signal main points), three developed points (with examples, voice variety), closing (summary + call to action). Demonstrate delivery techniques: eye contact with different audience members, purposeful pause after key point, stress on important words, gesture supporting content. Show video of student delivering same presentation with varying techniques: Version 1 (hesitant, no eye contact, monotone), Version 2 (confident, audience-focused, varied delivery). Discuss impact difference. Complete two activities: (A) Plan a 3–5 minute presentation on assigned topic, preparing delivery notes. (B) Deliver presentation to small group or whole class, recorded if possible. Self-assess using mark scheme: Is content organized clearly? Is delivery confident and varied? Does the speaker engage the audience?',
      duration: '35 mins',
      steps: ['Introduce presentation structure: Opening (topic introduction + signal of main points) + 2–3 developed points + Closing (summary + reinforcement)', 'Discuss preparation: content planning, delivery notes (not full script), vocabulary selection', 'Demonstrate vocal delivery techniques: pace variation, purposeful pause, stress on key words', 'Demonstrate physical delivery techniques: eye contact, gesture, posture, movement', 'Show video of same content delivered two different ways; compare impact', 'Discuss anxiety management: deep breathing, visualization, focusing on message not judgment', 'Students plan a 3–5 minute presentation (15 mins): write outline, prepare delivery notes', 'Students deliver presentation to small group or record (15 mins)', 'Peer/teacher feedback: Is content clear? Is delivery engaging?'],
      differentiation: {
        support: 'Provide presentation planning frame: (Opening: "I\'m going to talk about..."), (Point 1: "First, [topic]..."), (Point 2: "Second, [topic]..."), (Closing: "In conclusion..."). Offer delivery note template with cues for pause and emphasis marked. Reduce presentation length to 2–3 minutes. Allow small group presentation rather than whole class. Provide opportunity to practise multiple times before formal delivery. Offer vocal delivery checklist.',
        stretch: 'Deliver 4–5 minutes with seamless transitions between points. Handle Q&A questions confidently. Use advanced rhetorical devices in spoken language (anaphora, parallel structure). Record delivery and self-analyse vocal and physical techniques. Compare self-assessment with peer feedback.'
      }
    },
    plenary: {
      description: 'Presentation Feedback Circle: Students provide structured feedback on presentations delivered. Feedback format: "One thing that worked well was [specific technique]. One thing you could develop next time is [specific suggestion]." Focus on delivery techniques, not just content. Presenter listens without responding, then thanks peer for feedback.',
      duration: '10 mins'
    },
    homework: 'Prepare and deliver a 3–5 minute presentation on a topic of your choice (or assigned). Record your presentation if possible. Reflect: What delivery techniques did you use successfully? What felt challenging? What would you do differently if repeating this presentation? Bring reflection sheet to next lesson.',
    resourcesNeeded: ['Two contrasting presentation videos', 'Delivery techniques checklist', 'Presentation planning frame (for support)', 'Delivery note template (for support)', 'Vocal delivery techniques poster', 'Recording device (camera or phone)', 'Presentation assessment rubric', 'Feedback template (one thing worked well, one to develop)'],
    assessmentOpportunities: ['Delivery technique identification in videos (quick check)', 'Presentation planning (organization check)', 'Live presentation delivery (assessed against rubric, peer feedback)', 'Self-reflection on delivery techniques and challenges'],
    keyVocabulary: ['presentation', 'delivery', 'vocal technique', 'pace', 'pause', 'stress', 'emphasis', 'eye contact', 'gesture', 'engagement', 'opening', 'closing', 'audience awareness'],
    crossCurricular: ['Public speaking', 'Communication skills', 'Confidence building', 'Audience awareness'],
    sendAdaptations: 'Provide detailed presentation frame with sentence starters; include vocal delivery checklist with specific techniques listed; reduce presentation length to 2–3 minutes; allow small group presentation rather than whole class; provide opportunity for multiple practice runs before formal delivery; use visual delivery cues (gesture prompts on notes); allow presentation with visual aids (slides, notes) as support; pair with confident peer for co-presentation option; allow extra practice time.'
  },

  {
    id: 'ocr-lang-c1-08',
    title: 'Synthesis: Integrating All Communicative Skills in Exam Conditions',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Integrate reading, writing, and speaking skills in a realistic exam scenario',
      'Manage time effectively across multiple tasks within one session',
      'Demonstrate all communicative skills under assessment conditions',
      'Self-assess and identify areas for further development before final exam'
    ],
    starterActivity: {
      description: 'Skills Review Speedround: Display 10 quick questions, each addressing one communicative skill (transactional writing: "What makes an opening clear?", Persuasive writing: "Name three rhetorical devices", Descriptive writing: "Explain show vs tell", Reading inference: "What\'s the difference between explicit and implicit?", Speaking delivery: "Name two vocal techniques"). Students answer in pairs. Quick feedback reinforces key concepts.',
      duration: '10 mins',
      resources: ['Speedround quiz questions (10 items, mixed skills)', 'Answer key', 'Whiteboard for whole-class answers']
    },
    mainActivity: {
      description: 'Simulate a realistic Component 01 exam session: Students complete a shortened version of the full OCR J351 Component 01 assessment (with all reading comprehension, writing tasks, and speaking task). Time allocation mirrors actual exam: Reading task (15 mins), Writing tasks (2 × 20 mins), Speaking preparation and delivery (10 mins prep + 5 mins delivery). Scaffold initially: provide mark schemes, prompts for time management, and mid-session check-ins. Debrief after exam: students self-assess each section using mark schemes, identify what they did well, and pinpoint what needs development before the real exam. Discuss: Which task took longest? Where did you feel confident? Where would you like more practice? Create individual action plans: "Before the real exam, I will focus on [specific skill or task type]."',
      duration: '35 mins',
      steps: ['Explain that this is a mock-exam session simulating real conditions', 'Display time allocations and expectations for each section', 'Provide detailed mark schemes for all writing and speaking tasks', 'Section 1 — Reading task (15 mins): Students complete reading comprehension questions', 'Section 2 — Writing tasks (2 × 20 mins): Students complete two different writing tasks under timed conditions', 'Section 3 — Speaking task (10 mins prep + 5 mins delivery): Students prepare and deliver a short presentation', 'Debrief: Students complete self-assessment sheet for each section using mark schemes', 'Discuss challenges and successes; identify personal development priorities'],
      differentiation: {
        support: 'Provide detailed mark schemes with visual hierarchy showing band descriptors. Offer time management cues (timer reminders at 5-minute intervals). Reduce writing task length or number of tasks. Allow extra 5 minutes per section. Pair with stronger peer for speaking task. Provide structure frames and word banks. Allow access to reference materials during writing sections.',
        stretch: 'Challenge students to improve from their previous self-assessed mark by targeting specific mark scheme criteria. Compare mock exam response with model answer and identify specific areas for improvement. Analyse time management choices and discuss how to optimize in real exam. Set stretch targets for each task type.'
      }
    },
    plenary: {
      description: 'Individual Action Planning: Each student writes their personal exam development plan: (1) What went well in this mock exam? (2) What felt challenging? (3) What specific skill or task type needs more practice? (4) What will you focus on before the real exam? Students share one focus area with a partner. Teacher collects action plans to inform next lessons.',
      duration: '10 mins'
    },
    homework: 'Complete final self-reflection on your mock exam performance. Review your responses and compare with mark scheme. Identify one specific area where you\'d like to improve before the real exam and complete one focused practice task on that skill. Bring both reflection and practice task to next lesson.',
    resourcesNeeded: ['Shortened full Component 01 mock exam paper (reading, writing × 2, speaking)', 'Detailed mark schemes for all sections', 'Time management cues/timer', 'Self-assessment sheet template', 'Individual action plan template', 'Model answers for comparison', 'Timer or clock visible to all'],
    assessmentOpportunities: ['Speedround quiz (quick formative check)', 'Mock exam response (comprehensive assessment of all communicative skills)', 'Self-assessment against mark schemes', 'Individual action plan (identifies student priorities)', 'Homework practice task and reflection'],
    keyVocabulary: ['integrative', 'communicative skills', 'exam conditions', 'time management', 'self-assessment', 'mark scheme', 'action plan', 'development', 'reflection', 'strength', 'challenge', 'priority'],
    crossCurricular: ['Self-awareness', 'Metacognition', 'Planning skills', 'Exam technique'],
    sendAdaptations: 'Provide detailed, visually clear mark schemes with band descriptors highlighted; offer frequent time management cues (5-minute interval reminders); reduce exam length or task number; allow extra time across all sections; provide structure frames and word banks for all writing tasks; pair with peer for speaking task; allow use of reference materials; provide detailed self-assessment sheet with yes/no questions to guide reflection; allow recorded speaking task if comfortable.'
  },

  {
    id: 'ocr-lang-c2-01',
    title: 'Spelling: Common Patterns, Rules & High-Frequency Word Lists',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Master common spelling patterns and rules (suffix addition, prefixes, homophones)',
      'Build fluency with high-frequency potentially-misspelled words',
      'Apply spelling rules consistently in own writing',
      'Reduce spelling errors to improve mark in accuracy assessment'
    ],
    starterActivity: {
      description: 'Spelling Error Sort: Display 20 words, half correctly spelled, half with intentional errors (e.g., "occured" vs "occurred", "seperate" vs "separate", "untill" vs "until"). Students sort into two columns: Correct and Incorrect. Discuss the specific letter patterns that cause confusion. Introduce the concept of "tricky spellings" that don\'t follow obvious rules and need memorization.',
      duration: '10 mins',
      resources: ['List of 20 correctly and incorrectly spelled words (projected/printed)', 'High-frequency word list (top 50 commonly misspelled words)', 'Sorting grid worksheet']
    },
    mainActivity: {
      description: 'Teach spelling through pattern recognition and rule application: (1) Common suffixes (e.g., -tion, -sion, -ing, -ed, -ness, -ment, -ous, -ful) and how they change spelling when added to root words. (2) Common prefixes (e.g., un-, re-, dis-, pre-, mis-) and their consistent spelling. (3) Homophones and near-homophones (their/there/they\'re, to/too/two, accept/except) and their different meanings. (4) Tricky high-frequency words that don\'t follow typical patterns (accommodation, necessary, rhythm, bureaucracy). Model suffix addition rule: "Double the final consonant before adding -ing or -ed to a one-syllable word ending in CVC (consonant-vowel-consonant)": hop → hopping, plan → planning. Show how forgetting this rule causes common errors: "hopeing" (wrong), "hopPing" (correct). Complete three structured spelling activities: (A) Suffix application (add suffixes to base words and write correctly), (B) Prefix application (create words with prefixes, noting no rule change), (C) Homophone differentiation (use each homophone in a sentence to show meaning difference). Self-assess using answer key.',
      duration: '35 mins',
      steps: ['Introduce major spelling patterns: suffixes, prefixes, homophones, irregular words', 'Display and explain each pattern with examples and non-examples', 'Model suffix addition rule with CVC words: demonstrate and use in context', 'Explain homophone pairs: their/there/they\'re, to/too/two, accept/except, etc.', 'Discuss why some words are "tricky" (e.g., "necessary" — one collar, two sleeves = one "c", two "s"s)', 'Task A: Add suffixes to base words (10 words) — apply rules correctly', 'Task B: Create words using prefixes (10 words) — check no spelling change in root', 'Task C: Homophone challenge (10 sentences) — use each homophone correctly', 'Self-assess all three tasks using answer key; review any errors'],
      differentiation: {
        support: 'Provide suffix/prefix rule cards with examples. Pre-highlight the relevant part of each word. Reduce number of words to spell (5 instead of 10 per task). Offer visual mnemonic devices (e.g., "separate" — "there\'s a rat in separate"). Provide word bank for homophones. Allow use of computer spelling checker for reference checking.',
        stretch: 'Identify which spelling rule applies to each word and explain it. Collect examples of spelling errors from your own recent writing, categorize them by rule, and explain the error. Create a "tricky words" study guide for younger students.'
      }
    },
    plenary: {
      description: 'Spelling Speed Test: Call out 10 words for students to spell (mix of patterned words from lesson + tricky high-frequency words). Students write quickly. Mark together. Discuss: Which words are trickiest? Why? What strategy helps you remember the trickiest ones? Reinforce: most spelling is pattern-based; tricky words need specific memory techniques.',
      duration: '10 mins'
    },
    homework: 'Create a personal "tricky words" study list from errors in your recent writing or from the high-frequency word list provided. Write each word three times, saying the letters aloud. Create a mnemonic or memory device for the five trickiest words. Bring both list and memory devices to next lesson.',
    resourcesNeeded: ['Spelling error sorting list (20 words)', 'Suffix/prefix rule cards with examples (for support)', 'High-frequency word list (top 50 commonly misspelled)', 'Homophone reference card (their/there/they\'re, etc.)', 'Three spelling task worksheets (suffix, prefix, homophone)', 'Answer key for self-marking', 'Spelling speed test word list (10 words for plenary)', 'Visual mnemonic examples'],
    assessmentOpportunities: ['Spelling error identification in sorting starter (quick check)', 'Three structured spelling tasks (self-assessed against answer key)', 'Spelling speed test (10 words, marked immediately)', 'Homework personal word list and memory devices'],
    keyVocabulary: ['spelling', 'suffix', 'prefix', 'homophone', 'pattern', 'rule', 'consonant', 'vowel', 'mnemonic', 'CVC', 'tricky words', 'accuracy'],
    crossCurricular: ['Memory techniques', 'Pattern recognition', 'Phonics and language structure'],
    sendAdaptations: 'Provide comprehensive suffix/prefix rule cards with highlighted examples; offer visual mnemonic devices for tricky words; reduce number of words per task (aim for 5–7 instead of 10); allow extended time for spelling tasks; provide word bank for all activities; allow typed response instead of handwritten; use multi-sensory spelling techniques (say aloud, trace in air, color-code patterns); pair with peer for checking; allow use of spell-checker as reference tool after completing task.'
  },

  {
    id: 'ocr-lang-c2-02',
    title: 'Punctuation Mastery: Sentence Demarcation, Clauses & Complex Structures',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Use sentences accurately: capital letters, full stops, question marks, exclamation marks',
      'Punctuate complex sentences correctly using semicolons, colons, commas, dashes',
      'Demonstrate control of subordination and coordination through accurate punctuation',
      'Maintain punctuation accuracy under exam conditions to maximize marks'
    ],
    starterActivity: {
      description: 'Punctuation Detox: Display five sentences with deliberate punctuation errors (run-on sentences, misplaced commas, incorrect semicolon use, missing capital letters). Students identify the error type and correct it. Discuss why each error affects clarity. Introduce the concept of punctuation as "traffic signals" for readers — guiding them through ideas logically.',
      duration: '10 mins',
      resources: ['Five sentences with deliberate punctuation errors (projected/printed)', 'Punctuation rules reference sheet', 'Error type labels']
    },
    mainActivity: {
      description: 'Teach punctuation systematically: (1) Sentence demarcation: capital letter at start, full stop/question mark/exclamation mark at end. Never start a sentence with a lowercase letter or end without terminal punctuation. (2) Subordination punctuation: Dependent clauses introduced by subordinators (because, although, while, if, since, unless) require correct comma placement. "Because it was raining, she stayed home" (introductory clause, comma before main clause). "She stayed home because it was raining" (no comma; clause is final). (3) Coordination punctuation: Independent clauses joined by conjunctions (and, but, or, yet, so) use comma before conjunction: "She wanted to go, but the weather was terrible." (4) Advanced punctuation: Semicolons join closely related independent clauses without conjunction: "The match ended in a draw; neither team was satisfied." Colons introduce explanation or list: "There were three options: red, blue, or green." (5) Parenthetical punctuation: Commas, dashes, brackets insert additional information: "The novel—published in 2005—became a bestseller." Model errors and corrections with reasoning. Complete three structured punctuation tasks: (A) Sentence demarcation (identify and correct run-ons and fragments), (B) Subordination punctuation (place commas correctly in complex sentences), (C) Advanced punctuation (use semicolons and colons appropriately). Self-assess using answer key.',
      duration: '35 mins',
      steps: ['Introduce punctuation as "reader guidance" — helping readers understand sentence structure', 'Teach sentence demarcation rules with clear examples and non-examples', 'Explain subordination: dependent clauses + comma rules (introductory vs final)', 'Explain coordination: independent clauses + comma before conjunction', 'Teach advanced punctuation: semicolons (closely related independent clauses), colons (introduction/explanation)', 'Model parenthetical punctuation: commas, dashes, brackets for additional information', 'Provide sentence patterns showing where commas should and should not go', 'Task A: Identify run-ons and fragments; rewrite correctly using correct terminal punctuation', 'Task B: Place commas in complex sentences with subordination; justify comma placement', 'Task C: Use semicolons and colons appropriately in sentences; explain usage', 'Self-assess all three tasks using answer key; discuss tricky patterns'],
      differentiation: {
        support: 'Provide punctuation rules reference card with visual examples. Pre-highlight subordinators and conjunctions in sentences. Reduce number of sentences per task (5 instead of 10). Offer multiple-choice format for some tasks. Provide sentence pattern templates. Allow extra time per task.',
        stretch: 'Explain the grammatical reasoning behind each punctuation choice (why a comma is needed here, not there). Rewrite sentences using different punctuation structures (e.g., coordinated independent clause vs subordinated clause) and discuss effect on meaning. Analyse professional writing and identify how complex punctuation is used effectively.'
      }
    },
    plenary: {
      description: 'Punctuation Puzzle: Display a poorly punctuated paragraph (multiple errors: run-ons, misplaced commas, missing terminal punctuation, incorrect semicolon use). Students work in pairs to identify and correct all errors, explaining the rule for each correction. Share corrections and reasoning with whole class.',
      duration: '10 mins'
    },
    homework: 'Take a paragraph you\'ve written recently (from a previous assignment) and edit for punctuation accuracy. Identify any errors and correct them, writing the rule you applied next to each correction. If you find no errors, analyze your punctuation choices and explain why each is correct. Bring edited paragraph to next lesson.',
    resourcesNeeded: ['Five sentences with deliberate punctuation errors', 'Punctuation rules reference sheet (comprehensive)', 'Subordination and coordination pattern examples', 'Three punctuation task worksheets (demarcation, subordination, advanced)', 'Answer key for self-marking', 'Poorly punctuated paragraph for plenary puzzle', 'Visual sentence pattern templates'],
    assessmentOpportunities: ['Error identification in sorting starter (quick check)', 'Three structured punctuation tasks (self-assessed against answer key)', 'Plenary punctuation puzzle (pair work, whole-class discussion)', 'Homework paragraph editing (self-assessed against reference sheet)'],
    keyVocabulary: ['punctuation', 'capital letter', 'full stop', 'question mark', 'exclamation mark', 'comma', 'semicolon', 'colon', 'dash', 'bracket', 'subordination', 'coordination', 'independent clause', 'dependent clause', 'run-on sentence', 'fragment'],
    crossCurricular: ['Grammar structures', 'Sentence construction', 'Clarity and communication'],
    sendAdaptations: 'Provide comprehensive punctuation rules reference sheet with visual examples; highlight subordinators and conjunctions in sentences; reduce number of sentences per task (aim for 5–7 instead of 10); offer multiple-choice format for some items; provide sentence pattern templates; allow extended time per task; use color-coding to show where punctuation goes; pair with peer for checking; provide annotated examples showing correct punctuation with explanation.'
  },

  {
    id: 'ocr-lang-c2-03',
    title: 'Grammar: Parts of Speech, Sentence Construction & Common Errors',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Identify and use parts of speech accurately (noun, verb, adjective, adverb, pronoun, etc.)',
      'Construct grammatically correct sentences using varied structures',
      'Recognize and avoid common grammatical errors (subject-verb agreement, pronoun confusion, tense consistency)',
      'Demonstrate grammatical control in own writing to secure accuracy marks'
    ],
    starterActivity: {
      description: 'Parts of Speech Relay: Display a paragraph with every word labeled by part of speech (noun, verb, adjective, adverb, preposition, conjunction, pronoun, article). Students read the paragraph aloud, pausing at each word to say its part of speech. Create a class tally: count total nouns, verbs, adjectives. Discuss patterns: Are there more nouns or verbs? How many adjectives does the writer use? Why?',
      duration: '10 mins',
      resources: ['Paragraph with parts of speech labeled', 'Parts of speech reference poster', 'Tallying worksheet']
    },
    mainActivity: {
      description: 'Teach grammar systematically: (1) Parts of speech: noun (person, place, thing), verb (action, state), adjective (describes noun), adverb (describes verb or adjective), pronoun (replaces noun), preposition (location, direction, time), conjunction (links words/clauses), article (a, an, the). (2) Subject-verb agreement: Singular subject takes singular verb; plural subject takes plural verb. Common error: "The team are playing" (British usage, team = plural) vs "The team is playing" (American usage, team = singular unit). Discuss regional variation. (3) Pronoun agreement: Pronoun must match its antecedent (noun) in number and gender. Error: "A student should do their homework" (singular student, but plural their). Correct: "Students should do their homework" (plural both). (4) Tense consistency: Maintain same tense throughout text unless there\'s a reason to change (flashback, reported speech). Error: "She walked into the room and sits down" (past then present). Correct: "She walked into the room and sat down." (5) Sentence construction: Use varied structures (simple, compound, complex) for clarity and effect. Model errors and corrections. Complete three grammar tasks: (A) Identify parts of speech and explain how each functions in the sentence, (B) Correct subject-verb agreement and pronoun errors, (C) Fix tense consistency issues. Self-assess using answer key.',
      duration: '35 mins',
      steps: ['Review all eight parts of speech with clear definitions and examples', 'Explain subject-verb agreement rule with British/American variation note', 'Teach pronoun agreement: pronoun must match antecedent', 'Teach tense consistency: maintain tense throughout unless justified', 'Model sentence construction: simple (one clause), compound (two independent clauses), complex (independent + dependent clause)', 'Display common grammatical errors and correct versions with explanations', 'Task A: Label parts of speech in 10 sentences; explain how each word functions', 'Task B: Identify and correct subject-verb agreement and pronoun errors (10 sentences)', 'Task C: Fix tense consistency errors (rewrite 5 paragraphs, maintaining past or present tense)', 'Self-assess all three tasks using answer key'],
      differentiation: {
        support: 'Provide parts of speech reference poster with visual examples for each. Provide word bank identifying what\'s wrong in error sentences ("subject-verb error", "pronoun error", "tense shift"). Reduce number of sentences per task (5 instead of 10). Offer matching format (match error to correction type). Provide sentence pattern templates.',
        stretch: 'Explain the grammatical reason why each error is incorrect (e.g., subject-verb agreement rule). Rewrite sentences using different subject-verb structures and discuss how agreement changes. Analyse grammar in published texts and identify how varied sentence construction creates effect.'
      }
    },
    plenary: {
      description: 'Grammar Surgery: Display a paragraph containing multiple grammar errors (subject-verb disagreement, pronoun mismatch, tense shifts, unclear sentence structure). Students work in pairs to identify and correct all errors, labeling what type of error each is. Share corrections and discuss grammatical reasoning.',
      duration: '10 mins'
    },
    homework: 'Take a piece of your recent writing (2–3 paragraphs from a previous assignment). Edit for grammar accuracy: (1) Check subject-verb agreement in every sentence. (2) Ensure pronouns match their antecedents. (3) Verify tense consistency. (4) Label parts of speech in at least five sentences. Write corrections and explanations. Bring edited work to next lesson.',
    resourcesNeeded: ['Paragraph with parts of speech labeled (starter)', 'Parts of speech reference poster (comprehensive)', 'Subject-verb agreement examples and non-examples', 'Pronoun agreement examples and non-examples', 'Tense consistency examples and non-examples', 'Three grammar task worksheets (parts of speech, agreement, tense)', 'Answer key for self-marking', 'Paragraph for plenary grammar surgery', 'Sentence construction pattern templates'],
    assessmentOpportunities: ['Parts of speech identification and tallying in starter (quick check)', 'Three grammar tasks (self-assessed against answer key)', 'Plenary grammar surgery (pair work, whole-class discussion)', 'Homework editing of own writing (self-assessed against grammar checklist)'],
    keyVocabulary: ['grammar', 'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'article', 'subject-verb agreement', 'antecedent', 'tense consistency', 'clause', 'sentence construction', 'error type'],
    crossCurricular: ['Language structure', 'Sentence clarity', 'Communication precision'],
    sendAdaptations: 'Provide comprehensive parts of speech reference poster with visual examples; identify error types in advance (label what\'s wrong: "subject-verb error", etc.); reduce number of sentences per task (aim for 5–7 instead of 10); offer matching format for some items; provide sentence pattern templates; use color-coding to highlight subjects, verbs, pronouns in practice sentences; allow extended time per task; pair with stronger peer for checking; provide annotated example sentences showing correct grammar with explanation.'
  },

  {
    id: 'ocr-lang-c2-04',
    title: 'Vocabulary Development: Etymology, Semantic Fields & Register Variation',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Understand word origins (etymology) and how they relate to meaning',
      'Identify semantic fields (groups of related words) and their subtle differences',
      'Use vocabulary variation strategically to suit register (formal, neutral, informal)',
      'Expand vocabulary range to access higher marks in accurate, precise writing'
    ],
    starterActivity: {
      description: 'Word Web: Display a central word (e.g., "happy") on the board. Students brainstorm related words of similar meaning: pleased, delighted, joyful, cheerful, content, satisfied, ecstatic, blissful. Create a web showing all synonyms. Discuss: Are all these words the same? Where is each one used? (e.g., "delighted" more formal than "happy"; "ecstatic" more intense). Introduce the concept of semantic fields — groups of related words with subtle meaning variations.',
      duration: '10 mins',
      resources: ['Central word for web (projected)', 'Whiteboard for brainstorm', 'Semantic field poster showing synonyms with usage contexts']
    },
    mainActivity: {
      description: 'Teach vocabulary development: (1) Etymology: understanding word origins (Latin, French, Anglo-Saxon roots) helps unlock meaning and spelling. E.g., "per" = through (perspire = through sweat), "port" = carry (portable = able to carry). (2) Semantic fields: groups of related words with subtle meaning differences and contextual appropriateness. "Walk" semantic field: amble (leisurely), stride (purposeful), trudge (exhausted), saunter (aimless), shuffle (reluctant). Each carries different connotation. (3) Register-appropriate vocabulary: formal (academic, professional), neutral (general use), informal (conversational, colloquial). "The problem" (formal) vs "the issue" (neutral) vs "the thing" (informal). Select vocabulary to suit context. Model each concept. Complete three vocabulary tasks: (A) Word origins: break down unfamiliar words using common roots and prefixes to predict meaning, (B) Semantic field exploration: match synonyms to their contextual uses, (C) Register variation: rewrite sentences adjusting vocabulary to shift register (formal to informal or vice versa). Self-assess using answer key.',
      duration: '35 mins',
      steps: ['Introduce word origins (etymology): common roots and prefixes as meaning clues', 'Provide list of 20 common Latin/French roots (port, ject, sent, scrib, form, etc.) with meanings', 'Model breaking down unfamiliar word using roots: "chronological" (chrono = time, log = study, -ical = relating to)', 'Introduce semantic fields: synonyms with subtle meaning differences and usage contexts', 'Model semantic field exploration: "walk" field showing amble, stride, trudge, saunter, shuffle with contextual descriptions', 'Teach register variation: vocabulary shifts based on formality required', 'Model register shift example: "Kids should try hard at school" (informal) → "Students should endeavor to excel academically" (formal)', 'Task A: Break down 10 unfamiliar words using root knowledge; predict meanings', 'Task B: Match 15 synonyms to their semantic field; use each in a contextually appropriate sentence', 'Task C: Rewrite 5 sentences, shifting register (formal ↔ informal)', 'Self-assess all three tasks using answer key'],
      differentiation: {
        support: 'Provide root/prefix/suffix reference sheet with meanings and examples. Provide semantic field words with definitions and usage contexts already identified. Reduce number of words per task (5–7 instead of 10–15). Offer matching format for semantic field task. Provide sentence frames showing formal and informal register contrasts.',
        stretch: 'Identify which root and prefix appear in each unfamiliar word and explain how they contribute to meaning. Create a new semantic field for a word of your choice, listing 5+ synonyms with subtle differences. Analyse published texts and identify register choices, explaining why each suits the context.'
      }
    },
    plenary: {
      description: 'Vocabulary Challenge: Display a formal sentence using sophisticated vocabulary (e.g., "The protagonist\'s predicament was exacerbated by his propensity for procrastination"). Ask: What does this mean in simpler terms? Students rewrite in neutral or informal register. Then display an informal version ("The main character\'s problem got worse because he kept putting things off"). Discuss: Both versions communicate the same idea. Why might a writer choose one over the other? Reinforce: vocabulary choice is about effect and appropriateness, not just using "fancy" words.',
      duration: '10 mins'
    },
    homework: 'Collect 10 words you encounter in reading this week that are unfamiliar to you. For each word: (1) Break it down using root/prefix/suffix knowledge to predict meaning. (2) Look up the actual definition. (3) Place it in a semantic field with at least three synonyms. (4) Write example sentences for the target word AND at least one synonym in its semantic field, showing how context determines which word to use. Bring vocabulary collection to next lesson.',
    resourcesNeeded: ['Central word for web (starter)', 'Semantic field poster showing synonyms and usage contexts', 'Root/prefix/suffix reference sheet (for support)', 'List of 20 common Latin/French roots with meanings and examples', 'Three vocabulary task worksheets (etymology, semantic field, register variation)', 'Answer key for self-marking', 'Formal vs informal register comparison examples', 'Published text excerpt showing register variation (for analysis in plenary)'],
    assessmentOpportunities: ['Word web brainstorm (quick check of vocabulary awareness)', 'Three vocabulary tasks (self-assessed against answer key)', 'Vocabulary challenge plenary (register awareness check)', 'Homework vocabulary collection (self-assessed against target definitions and usage)'],
    keyVocabulary: ['vocabulary', 'etymology', 'root', 'prefix', 'suffix', 'semantic field', 'synonym', 'connotation', 'register', 'formal', 'neutral', 'informal', 'register variation', 'context', 'usage'],
    crossCurricular: ['Word origins and language history', 'Contextual language use', 'Semantic relationships'],
    sendAdaptations: 'Provide comprehensive root/prefix/suffix reference sheet with color-coding; identify semantic field words with definitions already provided; reduce number of words per task (aim for 5–7 instead of 10–15); offer matching format for semantic field and register tasks; provide sentence frames showing formal vs informal contrasts; use visual semantic field webs with arrows showing relationships; allow extended time per task; pair with peer for checking; provide annotated example sentences showing register shifts with explanation.'
  },

  {
    id: 'ocr-lang-c2-05',
    title: 'Integration: Applying Language Accuracy Across All Writing Tasks',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Apply spelling, punctuation, grammar, and vocabulary knowledge to own writing',
      'Identify and correct errors in multiple drafts without reliance on spell-checker',
      'Maintain accuracy under timed exam conditions across all task types',
      'Secure maximum marks in Component 02 Language Systems & Accuracy'
    ],
    starterActivity: {
      description: 'Error Hunt: Display a passage (150–200 words) containing 10 intentional errors distributed across all language systems categories: 2 spelling errors, 2 punctuation errors, 2 grammar errors, 2 vocabulary errors (imprecise word choice), 2 register errors. Students work in pairs to locate and correct all 10 errors. Share findings and discuss error types. Highlight that all language systems must be monitored simultaneously.',
      duration: '10 mins',
      resources: ['Passage with 10 distributed errors (projected/printed)', 'Error type checklist (spelling, punctuation, grammar, vocabulary, register)', 'Answer key with explanations']
    },
    mainActivity: {
      description: `Teach integration of all accuracy elements: (1) Spell-checker avoidance: Don't rely on technology during exam. Use knowledge of patterns and rules instead. (2) Proofreading strategy: Read for different error types in separate passes — first for spelling, second for punctuation, third for grammar, fourth for vocabulary precision, fifth for register consistency. (3) Common exam-time errors: Hastily constructed sentences, subject-verb disagreement under time pressure, tense shifts, imprecise vocabulary choices, register inconsistency. (4) Time allocation in writing tasks: Reserve 5 minutes per task for careful checking (spelling, punctuation, grammar). Model proofreading strategy: "First pass, I look for spelling errors only. I read slowly, focusing on each word. Second pass, I check punctuation — is every sentence properly demarcated? Third pass, I verify subject-verb agreement and tense consistency. Fourth pass, I ask: Did I choose the most precise word? Fifth pass: Is my register consistent throughout?" Complete two extended writing tasks (each 20 mins writing + 5 mins careful proofreading). Self-assess using detailed accuracy checklist: Spelling — correct? Punctuation — correct? Grammar — subject-verb agreement, pronoun consistency, tense consistency? Vocabulary — precise and appropriate? Register — consistent throughout? Identify any errors and categorize them by type.`,
      duration: '35 mins',
      steps: ['Review error types across all language systems (spelling, punctuation, grammar, vocabulary, register)', 'Introduce multi-pass proofreading strategy: address one error type per pass', 'Model proofreading workflow on a sample text: pass 1 (spelling), pass 2 (punctuation), pass 3 (grammar), pass 4 (vocabulary), pass 5 (register)', 'Discuss common exam-time errors and how proofreading catches them', 'Provide detailed accuracy checklist for self-assessment', 'Task 1: Write a transactional text (email or letter, 250 words) — 20 mins writing, 5 mins proofreading', 'Self-assess Task 1 using accuracy checklist; categorize any errors found by type', 'Task 2: Write a persuasive text (speech or article, 300 words) — 20 mins writing, 5 mins proofreading', 'Self-assess Task 2; identify if certain error types appear more frequently (personalized insight)'],
      differentiation: {
        support: 'Provide detailed accuracy checklist with specific questions for each element (e.g., "Is every sentence properly demarcated?" "Does every verb agree with its subject?"). Offer proofreading symbols sheet (caret for insertion, strikethrough for deletion, etc.). Reduce writing task length (200 words instead of 250–300). Allow extra 2 minutes per task for proofreading. Pair with peer for mutual checking.',
        stretch: `Identify which error type you personally struggle with most and create a targeted proofreading strategy for that error. Write both writing tasks, then exchange one with a peer and proofread their work, categorizing errors found. Compare your own proofreading effectiveness with a partner\'s.`,
      }
    },
    plenary: {
      description: 'Proofreading Retrospective: Display both writing samples (Task 1 and Task 2) you completed anonymously on board. Class engages in "forensic marking" — identifying any remaining errors you may have missed during proofreading. Discuss: Why might certain errors slip through? How could your proofreading strategy be more thorough next time? Reinforce: Proofreading is an active skill requiring conscious effort, not just a quick skim.',
      duration: '10 mins'
    },
    homework: 'Retrieve a piece of writing from a previous OCR English task (Component 01 writing task). Conduct a full five-pass proofreading: (1) Spelling check, (2) Punctuation check, (3) Grammar check (agreement, consistency, construction), (4) Vocabulary precision check, (5) Register consistency check. Document all errors found and categorize by type. Reflect: What error types appear most frequently in your writing? What proofreading strategy would help you catch these errors more quickly in exam conditions? Bring annotated text and reflection to next lesson.',
    resourcesNeeded: ['Passage with 10 distributed errors (starter)', 'Error type checklist', 'Multi-pass proofreading strategy poster', 'Proofreading symbols sheet (for support)', 'Two writing task prompts (transactional and persuasive)', 'Detailed accuracy checklist (spelling, punctuation, grammar, vocabulary, register)', 'Answer key for error hunt', 'Timer for writing and proofreading sections'],
    assessmentOpportunities: ['Error hunt identification (starter check of error detection)', 'Two extended writing tasks with timed proofreading (comprehensive assessment of integrated accuracy)', 'Self-assessment against accuracy checklist (identifies personalized error patterns)', 'Plenary forensic marking (highlights any overlooked errors)', 'Homework proofreading of own previous work (self-assessment of accuracy improvement)'],
    keyVocabulary: ['integration', 'accuracy', 'proofreading', 'error type', 'spelling', 'punctuation', 'grammar', 'vocabulary', 'register', 'multi-pass proofreading', 'spell-checker independence', 'conscious checking'],
    crossCurricular: ['Quality control', 'Self-monitoring', 'Attention to detail', 'Error analysis'],
    sendAdaptations: 'Provide detailed accuracy checklist with yes/no questions for each element; offer proofreading symbols sheet; reduce writing task length (aim for 200 words instead of 250–300); allow extra 2–3 minutes per task for proofreading; pair with peer for mutual checking; use visual error highlighting (color-code different error types in example texts); provide annotated examples showing common errors and corrections; allow typed response if handwriting is difficult; allow access to reference materials (spelling reference, punctuation guide) during proofreading pass; provide recording device to read aloud while proofreading (helps catch errors).'
  },

  {
    id: 'ocr-lang-c2-06',
    title: 'Mock Assessment: Full OCR Component 02 Language Systems & Accuracy (Timed Exam Conditions)',
    duration: '1 hour 15 mins',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Apply all spelling, punctuation, grammar, and vocabulary knowledge under exam conditions',
      'Complete a full OCR Component 02 assessment task within the timed limit',
      'Self-assess and reflect on accuracy performance across all language systems',
      'Identify remaining areas for focused revision before the formal exam'
    ],
    starterActivity: {
      description: 'Assessment Briefing: Explain that this is a full mock assessment mirroring formal exam conditions. Review the task requirements and time allocation: 20 minutes for initial writing, 10 minutes for focused proofreading, 5 minutes for final reflection. Stress: No access to spell-checkers or reference materials. Use knowledge of language systems only. Reinforce accuracy checklist strategy.',
      duration: '5 mins',
      resources: ['Mock assessment task (printed)', 'Blank answer booklet or lined paper', 'Answer checklist sheet (if permitted by awarding body)', 'Assessment conditions information sheet']
    },
    mainActivity: {
      description: 'Timed Mock Assessment: (1) Distribute mock task matching OCR Component 02 style and difficulty. (2) Students complete assessment task under full exam conditions — 20 minutes for writing a text requiring strong accuracy (e.g., formal letter, informative article, speech). (3) Following writing, students have 10 minutes for conscious proofreading using multi-pass strategy (spelling, punctuation, grammar, vocabulary, register). (4) Collect completed work. (5) Distribute completed paper back for 5-minute reflection: students analyze their accuracy performance against the detailed checklist, identify error patterns, and note which language systems they found challenging.',
      duration: '45 mins',
      steps: ['Review assessment conditions and timing strategy', 'Distribute mock assessment task', 'Students begin writing (20 mins) — start timer, monitor for exam-like conditions', 'Call time on writing; students transition to proofreading phase (10 mins)', 'Collect completed assessments', 'Return papers and distribute reflection sheet', 'Students complete 5-minute reflection on accuracy performance, error patterns, and areas for further revision'],
      differentiation: {
        support: 'Provide a structured writing frame outlining key points to cover; offer vocabulary list with synonyms for common terms; allow 25 minutes for writing (instead of 20); extend proofreading time to 12 minutes; provide detailed accuracy checklist with yes/no questions; allow extra 2 minutes for reflection.',
        stretch: 'Extend writing task to 25 minutes to allow greater complexity; challenge: deliberately incorporate one sophisticated vocabulary choice and one complex sentence structure in addition to maintaining accuracy; after proofreading, provide peer exchange to identify errors they missed; analyze mistakes to develop personalized revision strategy for remaining weak areas.'
      }
    },
    plenary: {
      description: 'Assessment Reflection Circle: Ask 4–5 volunteers to briefly share: Which language system did you find most challenging in this mock (spelling, punctuation, grammar, vocabulary, register)? What would help you improve? Collate responses on the board to identify class-wide patterns. Conclude: Accuracy is skill-building, not innate talent. Targeted revision of weak areas before the formal exam will secure significant mark improvement.',
      duration: '5 mins'
    },
    homework: 'Analyze your mock assessment paper using the detailed accuracy checklist. Create a table with columns: Error Type | How Many Errors | Which Part of Writing | Strategy to Prevent in Formal Exam. Categorize all errors found; count by type; note where they occurred (opening, body, conclusion). Reflect: Which error type appeared most frequently? Design a personalized revision focus for the next 2 weeks targeting your weakest area. Bring error analysis and revision plan to next lesson.',
    resourcesNeeded: ['Full OCR Component 02 mock assessment task (exam-board approved format)', 'Blank answer booklets or lined paper', 'Timers/stopwatch for exam conditions', 'Detailed accuracy checklist (spelling, punctuation, grammar, vocabulary, register)', 'Reflection sheet with prompts', 'Answer key (for teacher marking)', 'Grade descriptor or mark scheme (optional, for student self-assessment)', 'Error analysis template (for homework)'],
    assessmentOpportunities: ['Full mock assessment paper (comprehensive assessment of all language systems under exam conditions)', 'Timed proofreading performance (checks conscious checking strategy)', 'In-exam reflection (identifies student confidence and perceived weak areas)', 'Homework error analysis (metacognitive assessment of accuracy patterns)', 'Personalized revision plan (sets goals for remaining exam preparation)'],
    keyVocabulary: ['mock assessment', 'exam conditions', 'timed writing', 'proofreading', 'accuracy checklist', 'error analysis', 'language systems', 'spelling', 'punctuation', 'grammar', 'vocabulary', 'register', 'reflection'],
    crossCurricular: ['Self-assessment', 'Error analysis', 'Metacognition', 'Time management under pressure'],
    sendAdaptations: 'Provide structured writing frame with key points outlined; offer vocabulary list with synonyms; allow extended time (25 minutes writing instead of 20, 12 minutes proofreading instead of 10); provide detailed accuracy checklist with yes/no questions for each element; allow typed response if handwriting is difficult; reduce length expectation (aim for 180–200 words instead of 250+); allow access to reference materials (spelling reference, punctuation guide) during proofreading phase; pair with peer for mutual checking of one section; provide recording device to read aloud while proofreading; allow rest breaks if needed; alternative: complete task in two short sessions (first session: writing, second session: proofreading and reflection after short break).'
  },

  {
    id: 'ocr-lang-c2-07',
    title: 'Extended Revision: Language Accuracy Across Different Text Types & Contexts',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'OCR',
    learningObjectives: [
      'Apply spelling, punctuation, grammar, and vocabulary knowledge across diverse text types',
      'Recognize how context and audience influence register and vocabulary choices',
      'Identify accuracy errors in unfamiliar texts and propose corrections',
      'Master accurate writing across formal, neutral, and informal registers'
    ],
    starterActivity: {
      description: 'Register Variation Analysis: Display three versions of the same message written in formal, neutral, and informal registers (e.g., a customer complaint in three registers). Students identify differences: vocabulary choices, sentence structure, punctuation conventions, formality markers. Discuss: Does each version require the same level of accuracy? Yes — regardless of register, spelling, punctuation, grammar must be correct. Register variation is about word choice and tone, not about lowering standards.',
      duration: '10 mins',
      resources: ['Three register-varied texts (printed or projected)', 'Highlighter pens (optional)', 'Register analysis template']
    },
    mainActivity: {
      description: 'Multi-Register Writing & Revision: (1) Introduce three writing tasks, each requiring different register: Task A (Formal): Write a formal letter of complaint to a company about a service failure (150–180 words). Task B (Neutral): Write an informative article about a social issue for a school magazine (180–220 words). Task C (Informal): Write an email to a friend about a memorable experience (150–180 words). (2) Students select two of three tasks and complete both within 30 minutes, focusing on accuracy within their chosen registers. (3) Self-check using register-specific accuracy checklist: formal letter checklist, article checklist, email checklist — each includes language-system elements (spelling, punctuation, grammar, vocabulary, register features). (4) Peer exchange: swap completed task with partner; identify any accuracy errors or register inconsistencies. (5) Discuss findings and revisions.',
      duration: '35 mins',
      steps: ['Review three register contexts and requirements', 'Explain three writing tasks (formal letter, article, email)', 'Students select two tasks to complete in 30 mins', 'Provide register-specific accuracy checklist for each task type', 'Students begin writing; monitor for register consistency and accuracy', 'Transition: students self-check against checklist', 'Peer exchange: partners identify errors', 'Discuss errors found and register consistency; brainstorm corrections'],
      differentiation: {
        support: 'Provide pre-written opening sentences for all three tasks; offer register-specific word lists (formal synonyms, neutral synonyms, informal synonyms for common words); reduce word count expectations (Task A: 120–150, Task B: 150–180, Task C: 120–150); allow students to choose just one task instead of two; provide detailed accuracy checklist with sentence frames for checking.',
        stretch: 'Challenge: complete all three tasks within 30 minutes; write two register variations of the same content (e.g., formal letter + informal email about the same complaint); peer-edit partner\'s work for both accuracy and register consistency; identify which accuracy errors are most common in which register (e.g., are tone-related errors more frequent in informal writing?).'
      }
    },
    plenary: {
      description: 'Register & Accuracy Debrief: Ask: What was most challenging in maintaining accuracy across different registers? Did register change affect your accuracy? Showcase 2–3 student samples (anonymized) showing strong register consistency + accuracy. Highlight: Accuracy is non-negotiable across all registers. Register variation is about audience-appropriate word and tone choices, but spelling, punctuation, and grammar standards remain constant.',
      duration: '5 mins'
    },
    homework: 'Select one piece of writing from a previous assessment task (any OCR English component). Rewrite it in two different registers (if originally formal, rewrite in informal; if informal, rewrite in formal). Check both versions for accuracy using the multi-system checklist: spelling, punctuation, grammar, vocabulary appropriateness, register consistency. Document any errors found in either version. Reflect: Did changing register reveal new errors or make certain error types more likely? Bring rewritten versions and reflection to next lesson.',
    resourcesNeeded: ['Three register-varied sample texts (formal, neutral, informal)', 'Three writing task prompts (letter, article, email)', 'Register-specific accuracy checklists (one per task type)', 'Peer feedback sheet', 'Timer for writing phase', 'Highlighter pens (optional)', 'Sample student responses showing strong register consistency (for plenary)'],
    assessmentOpportunities: ['Register analysis starter (checks register awareness)', 'Two completed writing tasks in different registers (comprehensive assessment of accuracy across contexts)', 'Self-check using register-specific checklist (metacognitive accuracy check)', 'Peer feedback exchange (identifies errors in unfamiliar texts)', 'Plenary discussion (register + accuracy connection)', 'Homework register variation task (applies learning to previous work)'],
    keyVocabulary: ['register', 'formal', 'neutral', 'informal', 'audience', 'context', 'tone', 'vocabulary appropriateness', 'accuracy', 'spelling', 'punctuation', 'grammar', 'consistency', 'register variation'],
    crossCurricular: ['Code-switching', 'Audience awareness', 'Context sensitivity', 'Language variation'],
    sendAdaptations: 'Provide pre-written opening sentences for all three tasks; offer comprehensive register-specific word lists; reduce word count expectations by 20–25%; allow choice of one task instead of two; provide detailed accuracy checklist with yes/no questions for each element; allow typed response if handwriting is difficult; use visual register comparison chart (formal/neutral/informal columns with examples); pair with peer for co-writing one task; allow extended time (45 minutes instead of 30 for writing); provide reference materials (formal letter format guide, article structure guide); use color-coding to highlight register shifts in example texts; allow alternative: complete one task thoroughly instead of two.'
  },
]
