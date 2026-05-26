// @ts-nocheck
export interface LessonPlan {
  id: string
  title: string
  board: string
  subject: string
  keyStage: string
  duration: string
  objectives: string[]
  resources: string[]
  starterActivity: { title: string; duration: string; description: string }
  mainActivities: {
    title: string
    duration: string
    description: string
    differentiation?: string
  }[]
  plenaryActivity: { title: string; duration: string; description: string }
  assessmentOpportunities: string[]
  homeworkSuggestion: string
  teacherNotes: string
}

export const igcseLessonPlans: LessonPlan[] = [
  {
    id: 'igcse-001',
    title: 'Formal Letter Writing: Structure and Tone',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the conventions of formal letter writing',
      'Identify appropriate register and tone for formal correspondence',
      'Structure a formal letter with correct layout and conventions',
      'Use appropriate vocabulary and sentence structures for formal writing',
      'Apply knowledge of letter writing to directed writing tasks',
    ],
    resources: [
      'Example formal letters (complaints, enquiries, applications)',
      'Letter structure checklist template',
      'Formal vocabulary bank (presentation slides)',
      'Exemplar responses from CAIE past papers',
      'Model answer annotation sheets',
      'Interactive letter template (Google Doc or Word)',
    ],
    starterActivity: {
      title: 'Sorting Exercise: Formal vs Informal',
      duration: '10 minutes',
      description:
        "Display pairs of phrases and sentences on the board. Students classify each as formal or informal, discussing why. Examples: 'I'm writing to complain' vs 'I'm upset about', 'Please advise' vs 'Let me know', 'In light of' vs 'Because of'. This activates prior knowledge and introduces register concepts. Ask students to explain their choices using terminology like 'tone', 'register', and 'audience awareness'.",
    },
    mainActivities: [
      {
        title: 'Deconstructing Model Letters',
        duration: '15 minutes',
        description:
          "Display a formal letter complaint on the interactive board. Work through it systematically with students, highlighting: the sender's address (right-aligned or omitted), date, recipient's details, greeting conventions (Dear Sir/Madam vs Dear Mr), opening statement, body paragraphs with clear progression, closing statement, and sign-off (Yours faithfully vs Yours sincerely). Annotate the text with labels. Students copy the structure diagram into their workbooks.",
        differentiation:
          'Lower ability: Provide a partially completed structure diagram with blanks to fill in. Higher ability: Ask students to annotate a second letter with the features and explain how the writer maintains formality throughout. EAL support: Pre-teach conventions specific to English letter-writing, as these differ significantly across cultures.',
      },
      {
        title: 'Register and Vocabulary Analysis',
        duration: '12 minutes',
        description:
          "Using the exemplar letter, identify formal vocabulary choices. Create a table: Informal Version | Formal Version. Examples: 'thanks for' becomes 'I appreciate', 'had a problem' becomes 'encountered an issue', 'really good' becomes 'of high quality'. Discuss why formal register is essential for reader credibility. Students suggest alternative formal phrases for given informal sentences.",
        differentiation:
          'Lower ability: Provide completed formal/informal table for reference. Higher ability: Challenge students to find synonyms and discuss connotation differences between options. EAL support: Explain that formality in English is shown through vocabulary choice rather than grammar forms, unlike some languages.',
      },
      {
        title: 'Guided Practice: Writing a Complaint Letter',
        duration: '20 minutes',
        description:
          'Provide a scenario: a student received faulty headphones from an online retailer and needs a refund. Scaffold the writing using a framework: Opening (state purpose clearly), Problem (explain what went wrong with specific details), Impact (explain consequences), Request (clearly state what action you want), Closing (thank recipient and express confidence). Students draft their letter using the template, referring to vocabulary banks and structure checklist. Circulate to monitor progress and provide feedback.',
        differentiation:
          'Lower ability: Provide sentence starters for each section. Higher ability: Challenge students to include subordinate clauses and a complex opening paragraph that sets context before stating the problem. EAL support: Provide phrase banks for each section, with pronunciation guidance if needed.',
      },
    ],
    plenaryActivity: {
      title: 'Peer Review Using Checklist',
      duration: '8 minutes',
      description:
        "Students exchange letters with a partner. Each peer reviews using the structure checklist: Has the sender's address been included? Is the date present? Is the greeting appropriate? Are there four clear body paragraphs? Is the sign-off correct? Are there three instances of formal vocabulary? Partners provide one positive comment and one suggestion for improvement. Brief whole-class feedback on common successes and targets.",
    },
    assessmentOpportunities: [
      'Formative: Observation of students during guided practice; listen for appropriate vocabulary choices and structure understanding',
      "Formative: Peer review comments reveal students' understanding of formal conventions",
      'Summative: Teacher collection and marking of draft letters against CAIE assessment criteria (communication, accuracy, vocabulary range)',
      'Self-assessment: Students rate their own use of formal register on a 1-4 scale with justification',
    ],
    homeworkSuggestion:
      "Students complete their complaint letter, ensuring it meets all structure and register criteria. Alternatively, provide a second scenario (letter of enquiry to a university course coordinator) and ask students to draft independently, applying today's learning. Homework should be submitted for teacher marking against assessment criteria.",
    teacherNotes:
      "This lesson introduces formal letter writing conventions which are tested in IGCSE Paper 2 (Directed Writing). Students often confuse formal with overly flowery language; emphasize that formality in English means clarity, appropriate vocabulary, and correct conventions rather than verbosity. Common errors include missing sender's address, incorrect sign-offs (Yours sincerely with Dear Sir/Madam), and inappropriate tone shifts. Have students check the current CAIE mark scheme to understand what constitutes communication level 4 (fully appropriate to the task). Differentiation is essential as EAL students may find English formality conventions unfamiliar; pair with native speakers strategically. Consider creating a visual 'Letter Parts' poster to display throughout the unit for reference. For advanced learners, introduce the concept of persuasive technique within formal letter writing-how to be polite yet firm.",
  },

  {
    id: 'igcse-002',
    title: 'Report Writing: Purpose, Structure and Professional Tone',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the purpose and audience of different report types',
      'Learn the structural features of business and formal reports',
      'Write clear, impersonal reports with appropriate professional tone',
      'Use headings, subheadings, and formatting to enhance clarity',
      'Apply report-writing skills to IGCSE Directed Writing tasks',
    ],
    resources: [
      'Sample reports (incident report, survey report, progress report)',
      'Report structure template',
      'Professional tone vocabulary list',
      'CAIE past paper report-writing tasks and mark schemes',
      'Report formatting guide (headings, bullet points, numbering)',
      'Exemplar annotations showing assessment criteria',
    ],
    starterActivity: {
      title: 'Report Type Identification',
      duration: '10 minutes',
      description:
        'Show students three short texts: a formal letter, a report excerpt with headings, and a narrative account. Ask them to identify which is the report based on features like headings, impersonal language, and structured information. Discuss why reports use these features. What is the purpose of each text type? Who is the audience? This primes students for the structural focus of the lesson.',
    },
    mainActivities: [
      {
        title: 'Analyzing Report Structure',
        duration: '14 minutes',
        description:
          'Distribute a sample report (incident report or school survey). Work through each section: Title (clear and specific), Introduction (background, purpose, brief outline of contents), Main body sections with clear headings (detailed information organized logically), Conclusion (summary of key findings and, if appropriate, recommendations), and possibly Date/Author information. Use highlighters to mark each section in different colors. Discuss how headings make information accessible. Compare to letter structure discussed previously.',
        differentiation:
          'Lower ability: Provide a report with sections already labeled; students identify what information belongs in each section. Higher ability: Provide a jumbled report and ask students to reorganize it logically, justifying their choices. EAL support: Use color-coded sections and provide a visual flowchart of report structure.',
      },
      {
        title: 'Tone and Register in Reports',
        duration: '12 minutes',
        description:
          "Create a comparison table: Personal/Narrative language vs Report language. Examples: 'I noticed the cafeteria was dirty' becomes 'The cafeteria demonstrated substandard cleanliness standards.' Discuss how reports avoid personal pronouns and emotion. Show students how to embed evidence and findings objectively. Practice converting personal observations into objective report statements. Highlight passive voice usage and formal vocabulary in the sample report.",
        differentiation:
          'Lower ability: Provide sentence conversions already completed for pattern recognition. Higher ability: Challenge students to revise their own sentences from personal to report tone, choosing from synonym options. EAL support: Explain that impersonal tone removes the person performing the action; focus on passive voice construction.',
      },
      {
        title: 'Guided Practice: Writing a Survey Report',
        duration: '24 minutes',
        description:
          'Provide a scenario: students conducted a survey about school lunch facilities (or similar). They gathered data showing problems and positive aspects. Using a structured template, students draft a short report with: Title (Survey Report: School Lunch Facilities), Introduction (what survey investigated), Findings section (organized by theme: food quality, cleanliness, queuing times), Conclusion (summary and recommendation). Provide data/findings in a table for students to interpret and include. Circulate and provide scaffolding.',
        differentiation:
          'Lower ability: Provide sentence starters for each section and a partially completed report to extend. Higher ability: Ask students to structure findings under multiple headings and include embedded evidence with analysis. EAL support: Provide glossary of formal report vocabulary and help with passive voice construction if needed.',
      },
    ],
    plenaryActivity: {
      title: 'Report Quality Checklist',
      duration: '8 minutes',
      description:
        'Students evaluate their draft report using a checklist: Does it have a clear, specific title? Are sections clearly headed? Is the language impersonal and objective? Are findings supported by evidence? Is the conclusion clear and does it offer a recommendation if appropriate? Students identify one strength and one area for improvement. Collect reports for teacher feedback focusing on structure and tone.',
    },
    assessmentOpportunities: [
      'Formative: Observation during guided practice; note students who are struggling with impersonal tone',
      "Formative: Checklist self-assessment reveals students' understanding of report features",
      'Summative: Teacher marking of draft reports using CAIE assessment criteria (structure, accuracy, vocabulary, communication)',
      'Peer feedback: Partners comment on clarity and logical organization of report',
    ],
    homeworkSuggestion:
      'Students revise their survey report based on feedback and checklist, ensuring all sections are present and tone is consistently professional. Alternatively, provide a new scenario (progress report on a class project, incident report about a school event) and ask students to draft independently. Students should reference the structure template and vocabulary list provided in class.',
    teacherNotes:
      "Reports are a common Directed Writing task on IGCSE Paper 2. Students often struggle with impersonal tone, particularly moving from narrative thinking. Reinforce that reports present information, not personal experience. Key features include clear headings (which make the report easier to navigate and demonstrate awareness of reader needs), logical organization, and evidence-based findings. Common errors include: overly personal language ('I think'), inconsistent formatting, vague headings, and conclusions that don't summarize findings. Emphasize that headings are a feature of good report writing, not a weakness. For mixed ability, ensure lower ability students have templates with sentence starters; higher ability students should be challenged to write without scaffolding and to add complex sentence structures. EAL students may need explicit instruction on passive voice construction, which is heavily used in formal reports. Consider showing a range of report types (incident, progress, survey, evaluation) to broaden students' understanding of genre variation within the report form.",
  },

  {
    id: 'igcse-003',
    title: 'Speech Writing: Persuasion, Structure and Rhetorical Devices',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the purpose and audience of different speech types',
      'Learn the structural features of persuasive speeches',
      'Identify and apply rhetorical devices (metaphor, rhetorical question, repetition, anaphora, alliteration)',
      'Write a speech with engaging opening, developed ideas, and impactful conclusion',
      'Apply speaking conventions to written speech (tone markers, short sentences for effect)',
    ],
    resources: [
      "Famous speech excerpts (Kennedy's inaugural address, Churchill's wartime speeches, Malala's UN speech)",
      'Speech structure template',
      'Rhetorical devices reference sheet with examples',
      'CAIE past paper speech-writing tasks',
      'Annotated exemplar speeches showing persuasive techniques',
      'Audio/video clips of speeches (if available) to demonstrate delivery',
    ],
    starterActivity: {
      title: 'Rhetorical Device Recognition',
      duration: '8 minutes',
      description:
        "Display five short phrases or sentences containing rhetorical devices: metaphor, repetition, rhetorical question, alliteration, and hyperbole. Examples: 'We shall fight on the beaches, we shall fight on the landing grounds' (repetition/anaphora), 'Is this the Britain we want?' (rhetorical question), 'Freedom's fierce fire' (alliteration). Students identify each device and discuss its effect. This activates knowledge of persuasive techniques needed for speech analysis and writing.",
    },
    mainActivities: [
      {
        title: 'Analyzing Speech Structure and Techniques',
        duration: '14 minutes',
        description:
          'Use a famous speech excerpt (approximately 200 words). Work through it systematically: Opening (hook, establish connection with audience), Main ideas (developed with evidence/examples), Rhetorical devices (highlight each, explain its effect), Conclusion (memorable final statement, call to action). Annotate the text, marking devices and noting how they persuade. Create a visual map showing structure and technique placement. Discuss how speech differs from written language (shorter sentences, personal address, emotional appeal).',
        differentiation:
          'Lower ability: Provide partially highlighted text with the devices already marked. Higher ability: Ask students to analyze the cumulative effect of multiple devices and discuss whether they work together effectively. EAL support: Provide definitions and visual examples of rhetorical devices before analysis.',
      },
      {
        title: 'Rhetorical Devices in Context',
        duration: '12 minutes',
        description:
          'Display a paragraph from a speech and provide multiple versions using different rhetorical devices. Example: basic statement, version with repetition, version with metaphor, version with anaphora. Students compare and discuss which is most persuasive and why. Practice identifying the effect each device creates: repetition (emphasis), rhetorical question (engagement), metaphor (emotional connection), anaphora (memorability). Create a table: Device | Example | Effect. Students fill in examples from the sample speech.',
        differentiation:
          'Lower ability: Provide the completed table as reference. Higher ability: Challenge students to evaluate whether the devices are used effectively and suggest improvements. EAL support: Create visual representations of metaphor and other abstract devices to aid understanding.',
      },
      {
        title: 'Guided Practice: Writing a Persuasive Speech',
        duration: '26 minutes',
        description:
          'Provide a scenario: students are school representatives at a council meeting arguing for or against a proposed change (later school start times, changes to uniform policy, new technology in classrooms-choose one or let students pick). They must write an opening (attention-grabber), main ideas (each with evidence), rhetorical devices (at least three different types), and conclusion (memorable and call to action). Provide a speech structure template: Opening (30 seconds), Idea 1 (45 seconds), Idea 2 (45 seconds), Idea 3 (45 seconds), Conclusion (20 seconds). Students draft, using the rhetorical devices sheet for reference. Circulate to assist with device integration.',
        differentiation:
          'Lower ability: Provide sentence starters for each section and a partially written opening/closing. Pre-select three rhetorical devices for them to incorporate. Higher ability: Challenge students to weave devices throughout rather than list them, and to consider counterarguments. EAL support: Provide a vocabulary bank of persuasive language and help with natural integration of devices.',
      },
    ],
    plenaryActivity: {
      title: 'Speech Peer Evaluation',
      duration: '8 minutes',
      description:
        "In pairs, one student reads their speech aloud while the other listens. The listener identifies: the opening hook, main ideas (can they list them?), rhetorical devices used, and whether the conclusion is memorable. Provides feedback using sentence stems: 'This device was effective because...', 'I was persuaded by...', 'I would suggest adding...' Class shares examples of effective device use.",
    },
    assessmentOpportunities: [
      'Formative: Observation during device recognition activity; check understanding of terms',
      "Formative: Listen to peer evaluations; this shows students' ability to identify persuasive techniques",
      'Summative: Collect drafted speeches and mark using CAIE criteria (communication, vocabulary range, accuracy, content and organization)',
      'Summative: Evaluate whether rhetorical devices are used effectively and appropriately for audience',
    ],
    homeworkSuggestion:
      'Students revise their speech based on peer feedback, ensuring at least three different rhetorical devices are present and used persuasively. They should practice reading it aloud to refine delivery. Alternatively, provide a different speech scenario (persuading school to ban single-use plastics, arguing for extended lunch break, advocating for student representation on the governing body) and ask students to draft independently. Homework can include preparing to deliver the speech in the next lesson.',
    teacherNotes:
      "Speech writing is a key IGCSE Directed Writing task, testing students' ability to write persuasively for a specific audience and purpose. Students often list rhetorical devices rather than integrating them naturally; emphasize that devices should serve the argument, not be added mechanically. When teaching devices, use memorable examples students can visualize (Martin Luther King's 'I have a dream' speech is excellent for anaphora). Common errors include: opening that doesn't grab attention, underdeveloped ideas (generic statements without evidence), devices that don't match the message, and conclusions that fizzle rather than inspire. Encourage students to think about delivery when writing (short sentences for emphasis, pauses, emotional peaks). For EAL students, scaffold device integration carefully; provide frames and examples. For mixed ability, ensure lower ability students receive partially written frameworks and device templates; higher ability students should write without scaffolding and focus on nuance of persuasion. Consider recording some speeches for playback to demonstrate how written techniques translate to spoken delivery. Remind students that the most persuasive speeches often rely on clarity and genuine connection rather than excessive device use.",
  },

  {
    id: 'igcse-004',
    title: "Writer's Effect: Analyzing Adjectives, Adverbs, and Imagery",
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Identify descriptive vocabulary (adjectives, adverbs, noun phrases) and analyze their connotations',
      'Understand how imagery appeals to the senses and creates emotional responses',
      'Analyze the cumulative effect of descriptive language choices',
      "Use subject terminology accurately to discuss writer's methods",
      'Apply analysis skills to unseen texts on IGCSE Paper 1',
    ],
    resources: [
      'Short prose extracts (300-400 words) with rich descriptive language',
      'Connotation analysis worksheet',
      'Imagery types poster (visual, tactile, olfactory, gustatory, auditory, kinesthetic)',
      'Adjective/adverb identification task cards',
      'CAIE past paper extracts for analysis practice',
      'Annotation template showing analytical writing',
    ],
    starterActivity: {
      title: 'Connotation Prediction',
      duration: '8 minutes',
      description:
        "Display pairs of adjectives describing the same thing: 'old building' vs 'historic building', 'crowded room' vs 'bustling room', 'stubborn character' vs 'determined character'. Students discuss how the word choice changes the reader's impression, even though both describe the same thing. What emotional associations does each word carry? This activates understanding that vocabulary choice creates effect, not just information.",
    },
    mainActivities: [
      {
        title: 'Analyzing Descriptive Language in Context',
        duration: '15 minutes',
        description:
          "Display a short prose extract (100-150 words) rich in descriptive language. Model analytical thinking aloud: 'This sentence reads: The elderly woman trudged slowly through the grey marketplace. Let me break this down. Trudged-what does this word suggest? It implies heaviness, weariness, effort. Slowly reinforces this. And grey-not just color, but mood, bleakness. The cumulative effect is one of sadness and struggle, creating sympathy for the character.' Highlight all descriptive words. Create a table: Word | Connotations | Effect on reader. Repeat this analytical process with 3-4 examples from the extract.",
        differentiation:
          'Lower ability: Provide the table partially completed; students add connotations and effects. Higher ability: Ask students to consider alternative word choices and evaluate whether they would be more or less effective. EAL support: Pre-teach subject terminology (connotation, cumulative effect, imagery) with visual examples.',
      },
      {
        title: 'Identifying and Analyzing Imagery',
        duration: '14 minutes',
        description:
          "Introduce imagery types using the poster: visual (sight), tactile (touch), olfactory (smell), gustatory (taste), auditory (sound), kinesthetic (movement). Provide sensory-rich sentences and ask students to identify which senses are engaged. Example: 'The rough, salt-encrusted rope burned her palms as the fishing boat lurched violently over the waves.' (tactile, visual, kinesthetic). Discuss why writers choose to engage certain senses-visual imagery is most common but other senses create immediacy and emotional engagement. Practice converting non-sensory sentences into imagery-rich versions.",
        differentiation:
          "Lower ability: Provide imagery identification worksheets with answer options. Higher ability: Challenge students to evaluate which senses are most effective for different genres/purposes and why. EAL support: Use visual demonstrations of each sense; connect to students' first languages if possible.",
      },
      {
        title: 'Guided Analysis Practice',
        duration: '23 minutes',
        description:
          "Distribute a new short extract (200-250 words) from an IGCSE past paper or similar level text. Students work in pairs to annotate and analyze using the skills taught. They identify: descriptive adjectives and adverbs (underline), connotations (note in margin), imagery (box and label sense), and cumulative effect (write 2-3 sentences analyzing how language choices create overall effect). Provide a sentence frame for written analysis: 'The writer uses [vocabulary/technique] to suggest [effect], creating [cumulative impression].' Circulate to assist and model analysis for those struggling.",
        differentiation:
          'Lower ability: Provide an extract with fewer complex examples; offer a partially completed annotation. Higher ability: Provide a more sophisticated extract; challenge students to identify subtle connotations and evaluate purpose. EAL support: Pre-highlight key descriptive words; provide sentence frames in writing.',
      },
    ],
    plenaryActivity: {
      title: 'Sharing Analysis',
      duration: '8 minutes',
      description:
        'Select 2-3 pairs to share their analysis of a particular sentence. What descriptive words did they identify? What are the connotations? Which imagery sense is engaged? How does this contribute to the overall effect? Reinforce the connection between vocabulary choice and reader response. Highlight particularly insightful observations about how language creates effect.',
    },
    assessmentOpportunities: [
      'Formative: Observation during connotation activity; check understanding of word association',
      'Formative: Review annotations during guided practice; assess ability to identify and analyze descriptive language',
      'Formative: Listen to pair discussions; note quality of analytical thinking',
      'Summative: Collect written analysis from the guided practice task; assess using criteria: identification of techniques, accurate subject terminology, explanation of effect, clarity of writing',
    ],
    homeworkSuggestion:
      'Students write a full analytical response (200-250 words) to a sentence or short paragraph from the analyzed extract, focusing on descriptive language and imagery. They should use subject terminology accurately and write in analytical style (not summarizing). Alternative: provide a new short extract from a past paper and ask students to identify descriptive language and complete a connotation table, practicing skills from the lesson.',
    teacherNotes:
      "Analysis of writer's effect is a core element of IGCSE Paper 1 (Reading and Comprehension). Students often struggle to move from identification to effect-they can spot an adjective but fail to explain why the writer chose that particular word. Emphasize that analysis requires connecting vocabulary choice to emotional or sensory impact. Use strong examples repeatedly; students need to see the pattern of how connotations work. Common errors include: stating the obvious ('old means ancient'), failing to use subject terminology, or analyzing in isolation without considering cumulative effect. Teach students to think about what impression the writer wants to create and how each vocabulary choice contributes. For mixed ability, ensure lower ability students practice identification before moving to connotation and effect analysis; higher ability students should move quickly to evaluating the effectiveness of choices and considering alternatives. EAL students benefit from explicit connotation instruction, as this is language-specific and not always obvious. Create a visual anchor chart showing adjective → connotation → effect for reference during independent work. Consider using poetry alongside prose for imagery analysis, as poetic language often makes techniques more visible.",
  },

  {
    id: 'igcse-005',
    title: "Writer's Effect: Narrative Techniques and Structural Choices",
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand and identify narrative techniques (foreshadowing, flashback, dialogue, interior monologue)',
      'Analyze how structural choices (paragraph length, sentence length variation, chapter breaks) create effect',
      'Evaluate how narrative perspective affects reader response',
      'Use subject terminology accurately to discuss narrative methods',
      'Apply analysis to unseen prose extracts on IGCSE Paper 1',
    ],
    resources: [
      'Narrative technique definition cards (foreshadowing, flashback, etc.)',
      'Short prose extracts demonstrating various techniques',
      'Sentence length analysis worksheets',
      'Dialogue analysis task cards',
      'CAIE past paper narrative extracts',
      'Annotation template for narrative techniques',
    ],
    starterActivity: {
      title: 'Structural Effect Recognition',
      duration: '7 minutes',
      description:
        'Display two versions of the same scene: Version A has long, complex sentences and longer paragraphs. Version B uses short, punchy sentences and shorter paragraphs. Students read both and discuss: which feels more tense? Which feels more reflective? Why might sentence length and paragraph length affect pace and mood? This demonstrates that structure creates effect beyond word choice.',
    },
    mainActivities: [
      {
        title: 'Narrative Techniques: Definition and Effect',
        duration: '14 minutes',
        description:
          "Introduce five key narrative techniques using definition cards and examples: Foreshadowing (hints of future events create suspense), Flashback (movement to past events provides context or contrast), Dialogue (direct speech reveals character and advances plot), Interior monologue (character's thoughts create intimacy), and Pathetic fallacy (weather/setting reflects emotion). For each, provide a short example from literature or a scenario. Discuss the effect: foreshadowing creates anticipation; flashback provides necessary context; dialogue makes characters vivid; interior monologue builds emotional connection; pathetic fallacy reinforces mood. Create an anchor chart.",
        differentiation:
          'Lower ability: Provide technique cards with clear definitions and labeled examples to refer to. Higher ability: Challenge students to identify techniques in complex extracts and evaluate their effectiveness. EAL support: Use visual representations and provide a glossary of terms.',
      },
      {
        title: 'Analyzing Sentence and Paragraph Structure',
        duration: '13 minutes',
        description:
          "Provide an extract with varied sentence lengths and paragraph structures. Model analysis: 'This sentence is eight words long. Its brevity creates impact, stopping the reader momentarily. The next sentence is much longer, with multiple clauses, creating a breathless effect. Then we have a one-word paragraph: Silence. This stands alone, emphasizing its importance.' Students practice identifying sentence length patterns and hypothesizing their effect. Create a chart showing: Short sentences create (tension, emphasis, surprise), Long sentences create (complexity, breathlessness, flow), Single-sentence paragraphs create (impact, pause for reflection).",
        differentiation:
          'Lower ability: Provide sentence lengths already highlighted; students match to effects. Higher ability: Ask students to count words in sentences and graph patterns, interpreting their purpose. EAL support: Use color-coding to show sentence length variations visually.',
      },
      {
        title: 'Guided Analysis: Narrative Techniques in Extract',
        duration: '26 minutes',
        description:
          'Distribute a short prose extract (250-300 words) from an IGCSE past paper containing 2-3 narrative techniques and varied sentence/paragraph structure. In pairs, students annotate to identify: narrative techniques used (label and circle), sentence length variation (note long/short/medium), paragraph structure (note length and breaks), and effect of each choice. Provide a table for organizing analysis: Technique/Feature | Location | Effect on reader. Students complete the table, then write 2-3 analytical sentences about how the writer uses structure and narrative techniques to create effect. Circulate to guide analytical thinking.',
        differentiation:
          'Lower ability: Provide an extract with fewer techniques; offer a partially completed annotation with some techniques identified. High ability: Provide a more complex extract; challenge students to evaluate which techniques are most effective and why. EAL support: Highlight key narrative techniques in the extract; provide sentence frames for analysis.',
      },
    ],
    plenaryActivity: {
      title: 'Technique Effect Sharing',
      duration: '8 minutes',
      description:
        "Select 2-3 pairs to share their most interesting finding about narrative technique or structural effect. What technique did they identify? What effect does it create? How does the reader respond? Class discusses whether this technique achieves the writer's purpose. Reinforce the link between technical choice and reader impact.",
    },
    assessmentOpportunities: [
      'Formative: Check understanding of narrative techniques during definition activity',
      'Formative: Review annotations and analysis table during guided practice',
      'Formative: Listen to pair discussions about structural effect',
      'Summative: Collect written analysis; assess ability to identify techniques, explain effects, and use subject terminology accurately',
    ],
    homeworkSuggestion:
      'Students write a full analytical response (200-250 words) analyzing how the writer uses narrative techniques and/or structure in the analyzed extract. They should focus on effect and impact on the reader. Alternatively, provide a new narrative extract from a past paper and ask students to complete an annotation sheet identifying techniques and analyzing their effects, practicing skills independently.',
    teacherNotes:
      "Narrative techniques and structural choices are frequently examined on IGCSE Paper 1. Students often identify techniques without explaining their effect-they might note 'this is a flashback' but fail to discuss why the writer includes it at this point. Emphasize that form serves function; every structural choice creates a specific effect. Common errors include: confusing narrative techniques with literary devices, failing to consider the timing of techniques (why does the flashback occur here?), and writing vague analyses ('this is sad' rather than explaining how the technique creates that sadness). Teach students to always ask 'why would the writer choose to do this?' Sentence length variation is particularly powerful in creating pace and tension-use this extensively in modeling. For mixed ability, ensure lower ability students focus on identifying and naming techniques before moving to effect analysis; higher ability students should evaluate whether techniques achieve the writer's purpose. EAL students may need explicit instruction on how these techniques work in English narrative, as they vary by language and culture. Create an interactive display showing before/and-after versions of sentences/paragraphs to demonstrate how changes in structure affect reading experience. Remind students that narrative techniques are tools the writer uses deliberately to affect the reader.",
  },

  {
    id: 'igcse-006',
    title: "Writer's Effect: Persuasive Techniques in Non-Fiction",
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Identify persuasive techniques in non-fiction texts (statistics, expert opinion, emotive language, rhetorical devices, direct address)',
      'Analyze how each technique appeals to the reader (logical appeal, emotional appeal, credibility appeal)',
      'Understand the cumulative effect of multiple persuasive techniques',
      'Evaluate the effectiveness of techniques for different audiences',
      'Apply analysis skills to unseen non-fiction texts on IGCSE Paper 1',
    ],
    resources: [
      'Non-fiction persuasive texts (advertisements, opinion articles, campaign materials)',
      'Persuasive technique reference sheet',
      'Appeal types poster (ethos, pathos, logos)',
      'Annotated exemplar analysis',
      'CAIE past paper non-fiction extracts',
      'Worksheet: technique identification and effect analysis',
    ],
    starterActivity: {
      title: 'Technique Spotting in Advertisements',
      duration: '8 minutes',
      description:
        'Show 3-4 short advertisements (print or digital images only, no sound). Students identify techniques they notice: attractive images, statistics, celebrity endorsement, emotional language, rhetorical questions, repetition. Discuss why advertisers use these techniques. What are they trying to make the reader do (buy, believe, feel)? This activates knowledge of persuasion and shows students that they encounter persuasive techniques daily.',
    },
    mainActivities: [
      {
        title: 'Identifying and Naming Persuasive Techniques',
        duration: '13 minutes',
        description:
          'Introduce eight key persuasive techniques with examples: Statistics (numbers create credibility), Expert opinion/authority (quoting experts adds authority), Emotive language (descriptive words trigger emotional response), Rhetorical devices (repetition, rhetorical questions, metaphor create emphasis), Direct address/second person (makes reader feel personally involved), Anecdote (personal story creates connection), Hyperbole (exaggeration for emphasis), Alliteration (repetition of sounds makes phrases memorable). For each technique, discuss what kind of appeal it makes: logos (logical/rational), pathos (emotional), ethos (credibility/authority). Create an anchor chart showing technique, definition, and example. Students take notes.',
        differentiation:
          'Lower ability: Provide completed anchor chart for reference. Higher ability: Challenge students to identify subtle uses of techniques in complex extracts. EAL support: Provide visual examples for each technique; explain appeal types with simple language.',
      },
      {
        title: 'Analyzing Effects and Appeals',
        duration: '13 minutes',
        description:
          "Distribute a short persuasive non-fiction extract (150-200 words) such as a newspaper opinion column or campaign text. Model analytical thinking: 'This sentence uses expert opinion, quoting a doctor. This appeals to logos-the reader is more likely to believe the argument because a qualified person endorses it. This creates credibility.' Identify 4-5 persuasive techniques in the extract. For each, discuss: What technique is this? What appeal does it make? What effect on the reader? Create a table: Technique | Type of appeal | Effect on reader. Students complete the table with guidance.",
        differentiation:
          'Lower ability: Provide partially completed table; focus on identifying obvious techniques. Higher ability: Challenge students to evaluate which techniques are most effective and which audience would respond best to each appeal type. EAL support: Highlight persuasive techniques in the extract; label appeal types.',
      },
      {
        title: 'Guided Practice: Analyzing Full Persuasive Text',
        duration: '26 minutes',
        description:
          "Provide a longer persuasive extract (300-350 words) from IGCSE past papers or similar. Students work individually or in pairs to annotate all persuasive techniques, labeling each and noting the appeal type (logos, pathos, or ethos). They then write an analysis (200-250 words) evaluating how the writer uses these techniques to persuade the reader. Provide a sentence frame: 'The writer uses [technique] to appeal to [type of appeal], suggesting that [effect on reader].' or 'By combining [technique 1] and [technique 2], the writer creates [cumulative effect] that persuades the reader to [intended action/belief].' Circulate to guide analytical development.",
        differentiation:
          'Lower ability: Provide an extract with fewer, more obvious techniques. Offer a partially completed annotation. Higher ability: Provide a complex extract; challenge students to evaluate effectiveness and consider counterarguments. EAL support: Highlight key persuasive phrases; provide completed appeal type labels; offer detailed sentence frames for analysis.',
      },
    ],
    plenaryActivity: {
      title: 'Technique Effectiveness Discussion',
      duration: '8 minutes',
      description:
        'Facilitate a whole-class discussion: For the analyzed extract, which persuasive technique was most effective? Why? Did the combination of techniques strengthen the persuasion? Would the text be more persuasive to some audiences than others? What values or beliefs does the text appeal to? This reinforces that persuasive effectiveness is contextual-different audiences respond to different appeals.',
    },
    assessmentOpportunities: [
      'Formative: Observation during technique identification; check understanding of terms and definitions',
      'Formative: Review annotations and technique identification in guided practice',
      "Formative: Discussion reveals students' ability to evaluate technique effectiveness",
      'Summative: Collect written analysis; mark using IGCSE criteria (identification of techniques, explanation of effects, use of subject terminology, clarity of writing)',
    ],
    homeworkSuggestion:
      'Students write a full analytical response (250-300 words) to the persuasive extract analyzed in class, focusing on how the writer uses persuasive techniques to convince the reader. They should identify at least four techniques, explain the type of appeal each makes, and evaluate their combined effect. Alternatively, provide a new persuasive non-fiction extract and ask students to complete a technique identification table and short analysis, practicing skills independently.',
    teacherNotes:
      "Persuasive techniques in non-fiction texts are regularly examined on IGCSE Paper 1, particularly when analyzing advertising, opinion pieces, or campaign materials. Students often list techniques without explaining their effect or appeal. Teach them to always connect technique to reader response. Common errors include: not naming techniques correctly, failing to consider the intended audience, or writing vague analyses ('this is emotive' rather than 'this emotive language triggers sympathy for the character, making the reader more likely to support the cause'). Emphasize that the same technique can be more or less effective depending on audience and purpose. For example, expert opinion appeals to those who value authority; personal anecdote appeals to those who value authenticity. Teach students to consider what beliefs or values the writer is appealing to. For mixed ability, ensure lower ability students focus on identifying obvious techniques before moving to appeal analysis; higher ability students should evaluate effectiveness and consider alternative techniques. EAL students benefit from explicit teaching of persuasive techniques, as propaganda and persuasion strategies vary significantly across cultures. Create a classroom display of examples of each persuasive technique for ongoing reference. Remind students that understanding persuasive techniques makes them more critical readers and resistant to manipulation-a valuable life skill beyond IGCSE assessment.",
  },

  {
    id: 'igcse-007',
    title: 'Summary Writing: Selecting Key Information',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the difference between main ideas and supporting details',
      'Select key information relevant to the task',
      'Condense information without losing meaning or accuracy',
      'Write summaries in continuous prose (not bullet points)',
      'Maintain own words (paraphrase) without copying whole phrases from source',
      'Practice summary skills for IGCSE Paper 1 Question 4',
    ],
    resources: [
      'Non-fiction articles or extracts (500-600 words) appropriate for summary practice',
      'Main idea identification worksheets',
      'Paraphrasing practice cards',
      'Summary planning template (topic sentences, key details per paragraph)',
      'CAIE past paper summary tasks and mark schemes',
      'Model summary with annotations showing selection and paraphrasing',
    ],
    starterActivity: {
      title: 'Main Idea vs Supporting Detail Recognition',
      duration: '8 minutes',
      description:
        "Display a short paragraph (5-6 sentences). Highlight the main idea sentence in one color, supporting details/examples in another. Discuss: How do we know which is the main idea? (It's usually first or last; other sentences expand on it.) Which details could be cut without losing the central message? Students practice identifying main ideas in 3-4 more short paragraphs. This skill is foundational for summary selection.",
    },
    mainActivities: [
      {
        title: 'Paraphrasing Practice',
        duration: '12 minutes',
        description:
          "Introduce paraphrasing: restating ideas in your own words while maintaining meaning. Provide 5-6 sentences from a source text. Model thinking aloud: Original: 'The government implemented new policies designed to reduce carbon emissions by 40% over the next decade.' Paraphrase: 'New policies aim to cut carbon output by 40% within ten years.' Key changes: rearranged structure, replaced 'implemented' with simple verb, changed 'designed to reduce' to simpler 'aim to cut'. Show how to paraphrase by changing word order, replacing vocabulary with synonyms, or combining/separating ideas. Students practice paraphrasing 4-5 provided sentences, ensuring they capture meaning without copying.",
        differentiation:
          'Lower ability: Provide paraphrased versions for comparison; focus on understanding that paraphrasing changes words but keeps meaning. Higher ability: Challenge students to paraphrase complex sentences and evaluate whether their versions maintain nuance. EAL support: Use color-coding to show which words changed; provide synonym options.',
      },
      {
        title: 'Summary Planning',
        duration: '14 minutes',
        description:
          'Distribute a longer non-fiction extract (400-500 words). Model planning for a summary: Read and annotate the text, identifying the main idea of each paragraph (write a one-sentence summary in margin). Create a planning template with one row per paragraph, listing the main idea and 1-2 key supporting details. Decide which details are most important for the summary-which ones address the central topic/purpose? Cross out less important details. Count how many words the summary should be (usually 1/3 to 1/2 the original length). Students practice planning a summary for a provided text using the template.',
        differentiation:
          'Lower ability: Provide the planning template with paragraph main ideas already identified; students select supporting details. Higher ability: Challenge students to decide what word count is appropriate and why; evaluate what details truly support the main purpose. EAL support: Provide paragraph summaries in single sentences to build from; help with detail selection.',
      },
      {
        title: 'Writing the Summary',
        duration: '24 minutes',
        description:
          "Using their planning from the previous activity, students write a summary in continuous prose (not bullet points). Remind them to: paraphrase (use own words), maintain accuracy, follow the logical order of the original, and reach approximately the target word count. Provide a sentence frame for opening: 'This text outlines [main topic]...' or 'The writer discusses...' Students draft their summary, circulating for guidance. Emphasize: Don't copy whole phrases; condense without losing meaning; write in complete sentences; maintain third person unless the source uses first person. After drafting, students check: Have I paraphrased throughout? Does each sentence serve a purpose? Is it approximately the right length?",
        differentiation:
          'Lower ability: Provide a partially written summary with some paraphrasing done; students complete remaining sentences. Use shorter source texts (300-350 words). Higher ability: Use longer, more complex source texts (600+ words). Challenge students to identify what details could be omitted and why. EAL support: Provide key vocabulary and topic-specific terms; help with complex sentence paraphrasing.',
      },
    ],
    plenaryActivity: {
      title: 'Summary Checklist and Peer Review',
      duration: '8 minutes',
      description:
        'Students exchange summaries with a partner. Each reviews using a checklist: Is the main idea of the original text captured? Has the writer paraphrased (not copied phrases)? Is information accurate? Is it concise (removing unnecessary details)? Is it written in continuous prose? Partners provide one positive comment and one suggestion. Class discusses common strengths and areas for improvement.',
    },
    assessmentOpportunities: [
      'Formative: Observation during paraphrasing practice; check ability to capture meaning in own words',
      'Formative: Review planning templates; assess understanding of main ideas and key details',
      "Formative: Peer review comments reveal students' critical reading and evaluation skills",
      'Summative: Collect drafted summaries; mark using CAIE criteria (selection of relevant details, accuracy, own words, conciseness, clarity)',
    ],
    homeworkSuggestion:
      'Students revise their summary based on peer feedback and checklist, ensuring thorough paraphrasing and appropriate length. Alternatively, provide a new non-fiction extract (400-500 words) with a specific focus/word count requirement and ask students to write a summary independently, practicing the three-stage process (planning, identifying main ideas, drafting).',
    teacherNotes:
      "Summary writing appears in IGCSE Paper 1 Question 4, where students must extract and synthesize information from two texts. Success requires understanding of main ideas versus details, skill in paraphrasing (maintaining meaning while changing expression), and conciseness. Common errors include: copying whole phrases from the source (plagiarism), including too much detail/not condensing enough, losing accuracy when paraphrasing, or failing to maintain the original text's meaning. Emphasize that paraphrasing is not easy-students need extensive practice. Highlight the difference between a good paraphrase (changes words and structure while maintaining meaning) and poor paraphrasing (changes a few words but still copies heavily). For mixed ability, lower ability students benefit from guided planning and partially written summaries; higher ability students should work independently with longer, more complex texts. EAL students often struggle with paraphrasing and may resort to copying because they're unsure of their vocabulary range. Support them with vocabulary lists and model paraphrasing of complex sentences multiple times. Create a paraphrasing anchor chart showing original → paraphrase for reference. Remind students that summary writing is a life skill valuable beyond IGCSE-job applications, research papers, and professional communication all require summarization ability.",
  },

  {
    id: 'igcse-008',
    title: 'Summary Writing: Synthesizing Information from Multiple Texts',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Extract relevant information from two different texts on a related topic',
      'Identify overlapping themes and complementary details across texts',
      'Synthesize information into a cohesive summary',
      'Compare and integrate perspectives or information from both sources',
      'Write summaries that reflect information from both texts equally',
      'Practice synthesis skills for IGCSE Paper 1 Question 4 (two-text task)',
    ],
    resources: [
      'Two paired non-fiction texts on related topics (e.g., both about climate change, technology impact, education)',
      'Venn diagram template for identifying common and unique themes',
      'Synthesis planning template (theme/topic grid across both texts)',
      'Paraphrasing reference from previous lesson',
      'CAIE past paper two-text summary tasks and mark schemes',
      'Model synthesis showing integration of both sources',
    ],
    starterActivity: {
      title: 'Identifying Overlapping Themes',
      duration: '8 minutes',
      description:
        "Display two short extracts (100-150 words each) on a related topic (both about social media, for example). Students identify: What does Text A discuss? What does Text B discuss? Are there overlapping themes? Where do they differ? This demonstrates that when synthesizing multiple sources, you need to find connections while respecting each text's unique perspective. Model creating a simple Venn diagram with overlapping circles.",
    },
    mainActivities: [
      {
        title: 'Planning a Synthesis',
        duration: '14 minutes',
        description:
          "Provide two paired texts (400-500 words each) on a related topic. Model the planning process: Read Text A and identify main themes/ideas. Read Text B and identify main themes/ideas. Now ask: Which ideas appear in both texts? Which ideas are unique to Text A? Which are unique to Text B? Create a grid with three columns: 'Text A only', 'Both texts', 'Text B only'. Students fill in the grid based on the provided texts. Discuss: When synthesizing, you should cover points in the 'Both texts' column and select the most important points from each column. This ensures fair representation of both sources.",
        differentiation:
          'Lower ability: Provide a partially completed grid with some themes/ideas already identified. Higher ability: Challenge students to identify subtle connections between texts and to determine which ideas are most significant. EAL support: Use color-coding for themes; help identify key sentences that express each theme.',
      },
      {
        title: 'Writing a Synthesis Summary',
        duration: '24 minutes',
        description:
          "Using their planning grid, students write a synthesis summary in continuous prose (target word count: typically 1/3 of combined source length). Unlike a single-text summary, a synthesis summary integrates ideas from both texts, showing how they relate. Provide sentence frames that help with synthesis: 'Both texts emphasize...', 'While Text A argues [point], Text B suggests [point]', 'Text A provides specific examples of [theme], whereas Text B discusses [theme] more broadly.' Remind students to paraphrase throughout and maintain accuracy. The summary should follow a logical organization (by theme rather than text order) and give roughly equal weight to both sources. Circulate to help students integrate information smoothly.",
        differentiation:
          "Lower ability: Provide sentence starters for each section; use shorter, simpler texts (300 words each). Model how to combine ideas from both texts in single sentences. Higher ability: Use more complex or longer texts (600+ words each); challenge students to identify implicit connections between sources. EAL support: Provide vocabulary for comparing/synthesizing ('similarly', 'conversely', 'both texts suggest'); help with complex paraphrasing.",
      },
    ],
    plenaryActivity: {
      title: 'Synthesis Quality Discussion',
      duration: '8 minutes',
      description:
        'Select 2-3 student summaries to read aloud (or display excerpts). Class evaluates: Does this summary represent both texts fairly? Can you tell which ideas come from Text A and which from Text B? Has the writer successfully integrated the information, or does it feel like two separate summaries joined together? What is the main theme that connects both sources? This reinforces that synthesis requires thinking beyond the texts to see relationships and create a unified summary.',
    },
    assessmentOpportunities: [
      'Formative: Review planning grids; check understanding of common and unique themes across texts',
      'Formative: Observation during synthesis writing; listen for successful integration of both sources',
      'Formative: Discuss class examples; assess ability to evaluate synthesis quality',
      'Summative: Collect synthesis summaries; mark using CAIE criteria (relevant selection from both texts, equal coverage, own words, accuracy, conciseness, clarity)',
    ],
    homeworkSuggestion:
      'Students revise their synthesis summary ensuring both texts are represented equally and ideas are integrated (not presented separately). Alternatively, provide a new pair of related texts and ask students to complete a synthesis planning grid and write a summary independently, practicing the full synthesis process.',
    teacherNotes:
      "IGCSE Paper 1 Question 4 explicitly requires synthesis of two texts. This is more challenging than summarizing a single text because students must hold multiple perspectives in mind, identify connections, and integrate information cohesively. Common errors include: summarizing Text A then Text B separately (rather than synthesizing), over-representing one text, losing accuracy when attempting paraphrasing, or failing to identify the connecting theme between sources. Emphasize that synthesis requires higher-order thinking-students must see relationships beyond what's explicitly stated. The planning grid is crucial; spending time on planning prevents disconnected writing. Model synthesis writing multiple times, showing how to embed information from both texts within single sentences and paragraphs. For mixed ability, lower ability students benefit from explicit planning and guided paraphrasing; they may need shorter texts or fewer sources to synthesize. Higher ability students should work with longer texts and be challenged to identify implicit connections. EAL students often struggle with sentence combining and smooth integration of multiple ideas; provide explicit instruction and models for sentences that incorporate multiple sources. Create an anchor chart showing 'Poor synthesis vs Good synthesis' examples for reference. Remind students that synthesis skills are valuable beyond IGCSE-research papers, literature reviews, and professional report-writing all require this skill.",
  },

  {
    id: 'igcse-009',
    title: 'Summary and Synthesis Workshop: Consolidating Skills',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Consolidate summary and synthesis skills through intensive practice',
      'Apply selection, paraphrasing, and synthesis skills to varied texts',
      'Work with realistic IGCSE Paper 1 Question 4 tasks',
      'Develop independence and confidence in summary writing',
      'Receive and act upon feedback to improve summary quality',
    ],
    resources: [
      'Past IGCSE Paper 1 Question 4 tasks (single and two-text versions)',
      'Model answers and mark scheme for reference',
      'Planning templates (main idea identification, synthesis grid)',
      'Paraphrasing and synthesis reference sheets from previous lessons',
      'Checklist for self-assessment of summaries',
    ],
    starterActivity: {
      title: 'Reviewing Skills: Single Text Summary',
      duration: '8 minutes',
      description:
        "Display a short non-fiction extract (200 words). Students have 5 minutes to plan a summary (identifying main idea and key details) and 3 minutes to share their planning with a partner. Partners comment: 'You've identified the main idea clearly/your key details support it well.' This quick activity reviews the summary planning process and builds confidence before the main workshop task.",
    },
    mainActivities: [
      {
        title: 'Independent Single-Text Summary Practice',
        duration: '15 minutes',
        description:
          'Provide a non-fiction extract (400-500 words) from a past IGCSE paper or similar. Students work independently to write a summary (target: 120-150 words) following the three-stage process: Plan (identify main ideas and key details), draft (paraphrase in continuous prose), and check (read through, verify paraphrasing, check length). After drafting, students self-assess using a checklist: Have I captured the main idea? Have I paraphrased throughout? Is it the right length? Have I included key supporting details? Circulate and provide feedback on planning or draft as needed.',
        differentiation:
          'Lower ability: Provide a shorter text (250-300 words) with a planning template partially completed. Higher ability: Use a longer text (600+ words); challenge students to identify subtle distinctions between main ideas and supporting details. EAL support: Provide vocabulary list and help with complex paraphrasing.',
      },
      {
        title: 'Paired Text Synthesis: Guided Practice',
        duration: '27 minutes',
        description:
          "Provide two paired texts on a related topic (400-500 words each) from a past IGCSE paper. Students work in pairs to: 1) Read both texts and create a planning grid (themes in Text A, themes in Text B, overlapping themes), 2) Identify which ideas are most important for addressing the task focus, 3) Write a synthesis summary (target: 200-250 words) that integrates both sources. Provide the task/focus question (e.g., 'Write a summary of the key points made by both writers about the importance of environmental protection'). Emphasize that the summary should be organized by theme/idea rather than by text. Circulate to provide feedback on planning and help with synthesis integration. After drafting, students self-assess and peer review.",
        differentiation:
          "Lower ability: Provide a planning grid template partially completed. Use shorter texts (250-300 words each). Higher ability: Use longer, more complex texts (600 words each) or texts with more subtle connections. Challenge students to identify the 'angle' or perspective each writer brings. EAL support: Highlight key sentences in each text; help with synthesis sentence construction.",
      },
    ],
    plenaryActivity: {
      title: 'Sharing Successes and Addressing Challenges',
      duration: '10 minutes',
      description:
        "Facilitate a closing discussion: Which part of summary/synthesis writing are you most confident in? (Selecting ideas? Paraphrasing? Integrating sources?) What challenges remain? (Word count? Avoiding copying? Maintaining accuracy?) Share one successful summary or synthesis excerpt as a class. Address common challenges with quick strategies. For example, if students struggle with paraphrasing: 'Cover the original sentence and write what it means in your own words without looking.' If they struggle with synthesis integration: 'When you move to a new idea, ask yourself: which text discusses this? Can I combine it with an idea from the other text?' End by emphasizing progress and encouraging continued practice.",
    },
    assessmentOpportunities: [
      'Formative: Observe planning processes; check accuracy and completeness',
      "Formative: Review self-assessments; note students' awareness of their own strengths/challenges",
      'Formative: Listen to peer reviews; assess ability to evaluate summary/synthesis quality',
      'Summative: Collect both the single-text summary and paired-text synthesis; mark using full CAIE criteria',
      'Formative: Note which students need additional support and which can move to independent practice',
    ],
    homeworkSuggestion:
      'Students revise both their summary and synthesis based on feedback and self-assessment, ensuring all skills are applied effectively. Alternatively, provide a different past paper Question 4 task and ask students to complete it independently as homework, applying all skills from the previous three lessons. This homework can be marked using the full CAIE mark scheme for exam preparation.',
    teacherNotes:
      "This workshop consolidates learning from the previous two summary and synthesis lessons through intensive practice with realistic IGCSE tasks. It serves as a bridge between skill-building lessons and independent exam preparation. The mixed-ability approach (single-text practice followed by paired-text synthesis) ensures all students experience success while being challenged appropriately. This lesson reveals which students are confident in summary/synthesis and which need further support before moving on. Use observations to differentiate future lessons and revision sessions. Common issues that may emerge: difficulty paraphrasing (provide more models and practice), struggling to identify main ideas (work with students on distinguishing hierarchy of information), or poor synthesis integration (provide more sentence frames and model sentences that combine ideas from both texts). By the end of this lesson, students should feel increasingly confident about Paper 1 Question 4. Those who struggled should receive targeted support in subsequent lessons. Consider recording successful student summaries (anonymously) for use in future year's lessons as additional models. Remind students that Question 4 is worth 8 marks and is a high-stakes task on the Paper 1 exam-the skills they've practiced in these three lessons are directly transferable to the exam.",
  },

  {
    id: 'igcse-010',
    title: 'Argumentative Writing: Planning and Thesis Development',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the structure of argumentative essays (thesis, supporting arguments, counterarguments, conclusion)',
      'Develop a clear, defensible thesis statement',
      'Plan arguments with supporting evidence and reasoning',
      'Consider counterarguments and refute them effectively',
      'Organize arguments logically for maximum persuasive impact',
      'Prepare for argumentative writing on IGCSE Paper 2',
    ],
    resources: [
      'Sample argumentative essays on various topics',
      'Thesis statement examples and non-examples',
      'Argument planning template (argument, evidence, explanation)',
      'Counterargument and refutation examples',
      'CAIE past paper argumentative writing prompts',
      'Model essay annotated for structure and thesis clarity',
    ],
    starterActivity: {
      title: 'Identifying Strong Thesis Statements',
      duration: '8 minutes',
      description:
        "Display 5 statements on a single topic. Students identify which is the clearest, most defensible thesis. Example weak statements: 'Technology is important in education' (too vague, too obvious). 'Some people like technology in education and some don't' (not argumentative, just observation). Strong statement: 'While technology offers beneficial learning tools, excessive screen time in classrooms undermines critical thinking skills and social interaction, ultimately harming student development.' Discuss what makes a thesis argumentative (makes a claim that requires support, not obvious fact), clear (specific enough to be understood), and defensible (supported by evidence/logic).",
    },
    mainActivities: [
      {
        title: 'Thesis Development',
        duration: '12 minutes',
        description:
          "Provide a debatable topic (e.g., 'Should social media be regulated?', 'Is university education essential for career success?', 'Should governments prioritize climate action over economic growth?'). Model developing a thesis: First, take a position-which side do you support? For social media regulation: yes, it should be regulated. Now, why? What are your reasons? (Protects young people, prevents misinformation, protects privacy.) Narrow to one or two key reasons for your thesis: 'Social media must be regulated to protect young people's mental health and privacy, despite claims that regulation stifles free expression.' This is clear, specific, and defensible. Students practice developing thesis statements for two different topics, sharing aloud and receiving feedback.",
        differentiation:
          "Lower ability: Provide a position (agree/disagree) and one key reason; students develop the thesis. Offer thesis templates. Higher ability: Challenge students to develop theses that acknowledge complexity (e.g., 'While X, the benefits of Y outweigh the drawbacks because...'). EAL support: Provide sentence frames for thesis construction.",
      },
      {
        title: 'Planning Arguments with Supporting Evidence',
        duration: '13 minutes',
        description:
          "Using the social media regulation thesis, model planning arguments: What reasons support this thesis? Create a table with columns: Argument (main claim), Evidence (examples, statistics, expert opinions), Explanation (how does this evidence support the thesis?). Example: Argument: 'Regulation protects young people from harmful content.' Evidence: 'Studies show excessive social media use correlates with increased anxiety and depression in teens.' Explanation: 'This evidence demonstrates that without regulation, vulnerable users face mental health risks, supporting the need for protective measures.' Students practice planning 2-3 arguments with evidence and explanation for their thesis, using the table. Emphasize that each argument must directly support the thesis.",
        differentiation:
          "Lower ability: Provide argument topics; students identify supporting evidence. Higher ability: Challenge students to evaluate evidence quality and consider which evidence is most compelling. EAL support: Provide vocabulary for introducing evidence ('Evidence suggests...', 'Studies show...').",
      },
      {
        title: 'Addressing Counterarguments',
        duration: '23 minutes',
        description:
          "Introduce counterarguments: What would someone who disagrees with your thesis say? For social media regulation: 'Opponents argue that regulation violates free expression and stifles innovation.' How do you refute this? You acknowledge it as legitimate concern, then explain why your thesis's benefits outweigh this concern: 'While free expression is important, protecting young people's wellbeing is a higher priority. Regulation doesn't eliminate expression; it establishes boundaries for platforms targeting minors, similar to regulations in broadcasting.' Model this acknowledgment + refutation structure for 1-2 counterarguments. Students identify 1-2 counterarguments to their thesis and draft refutations using the structure: 'Some argue [counterargument]. However, [refutation addressing the concern while supporting your thesis].' This demonstrates sophistication and strengthens the argument.",
        differentiation:
          "Lower ability: Provide counterarguments; students draft refutations using a template. Higher ability: Challenge students to identify the strongest counterargument and develop the most effective refutation. EAL support: Provide transition phrases for counterargument introduction ('On the other hand...', 'It is true that...', 'One might argue...').",
      },
    ],
    plenaryActivity: {
      title: 'Sharing and Evaluating Argument Plans',
      duration: '8 minutes',
      description:
        'Select 2-3 students to share their thesis, key arguments, and planned counterargument refutation. Class evaluates: Is the thesis clear and defensible? Do the arguments directly support it? Is the counterargument acknowledgment + refutation effective? Does the plan provide enough substance for an essay? Provide positive feedback and suggestions. Emphasize that strong planning is the foundation of strong argumentative writing.',
    },
    assessmentOpportunities: [
      'Formative: Monitor thesis development activity; check clarity and defensibility',
      'Formative: Review argument planning tables; assess quality of evidence and explanation',
      'Formative: Listen to counterargument refutations; note understanding of this sophisticated strategy',
      "Formative: Class evaluation of student plans reveals peers' understanding of argumentative structure",
      'Summative: Collect completed argument plans; score based on thesis clarity, argument quality, evidence relevance, and counterargument handling',
    ],
    homeworkSuggestion:
      'Students complete a full argument plan for their thesis including: (1) clear thesis statement, (2) three detailed arguments with evidence and explanation, (3) one counterargument with refutation, (4) brief conclusion summary. This planning will form the basis for essay writing in the next lesson. Alternatively, students can plan arguments for a second debatable topic, providing additional practice.',
    teacherNotes:
      "Argumentative writing is a major component of IGCSE Paper 2 (Writing). Success requires strong planning before writing begins. Many students struggle with argumentative writing because they either list opinions without evidence or become overwhelmed trying to write while developing ideas simultaneously. This lesson emphasizes planning as a critical step. The thesis statement is particularly important-it's the controlling idea the entire essay must support. Common errors: theses that are too vague ('Technology is good'), too obvious (facts not arguments), not actually argumentative (observations rather than claims), or theses that attempt too much (trying to argue multiple conflicting points). The counterargument strategy is sophisticated and demonstrates critical thinking; many students skip this, but it significantly strengthens arguments by showing awareness of alternatives while defending the thesis. For mixed ability, lower ability students need thesis templates, provided argument topics, and structured evidence-explanation frames; higher ability students should develop theses independently and be challenged to consider opposing perspectives genuinely. EAL students benefit from explicit instruction on argument structure and transition language showing argument progression. Create a visual anchor chart showing thesis → arguments → counterargument → conclusion for reference. Remind students that organization and planning skills taught here apply beyond IGCSE-professional writing, persuasive communication, and critical thinking all depend on these skills.",
  },

  {
    id: 'igcse-011',
    title: 'Argumentative Writing: Drafting and Revision',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Transform argument plans into coherent, flowing argumentative essays',
      'Write introductions that hook the reader and present the thesis',
      'Develop body paragraphs with clear topic sentences, evidence, and analysis',
      'Write counterargument paragraphs that strengthen the argument',
      'Craft conclusions that reinforce the thesis and broader implications',
      'Revise and improve drafts for clarity, persuasiveness, and accuracy',
    ],
    resources: [
      'Argument plans from previous lesson (igcse-010)',
      'Paragraph structure template (topic sentence, evidence, explanation)',
      'Introduction and conclusion sentence starters',
      'Transition phrases and linking words reference sheet',
      'Self-revision checklist',
      'Peer review checklist for argumentative essays',
      'Model argumentative essay with annotations showing effective techniques',
    ],
    starterActivity: {
      title: 'Analyzing Introduction and Conclusion',
      duration: '8 minutes',
      description:
        'Display an introduction and conclusion from a model argumentative essay. Discuss: How does the introduction engage the reader? Does it present the thesis clearly? How does the conclusion reinforce the thesis? What broader implications does it suggest? This activates understanding of how essays begin and end persuasively before students draft their own.',
    },
    mainActivities: [
      {
        title: 'Writing the Introduction',
        duration: '10 minutes',
        description:
          "Model writing an introduction using the social media regulation thesis. Structure: Hook (attention-grabbing opening, perhaps a statistic or question), Context (brief background), Thesis (the main argument to be developed). Example: 'Consider this: the average teenager spends over seven hours daily on social media, often experiencing anxiety and sleep disruption as a result. [Context] While some argue regulation restricts free expression, governments must implement social media regulation to protect young people's mental health and privacy. [Thesis]' Students draft introductions for their thesis using this structure, receiving guidance. Emphasize: Hook should be interesting, context should be brief (not the entire essay), thesis should be clear and specific.",
        differentiation:
          'Lower ability: Provide sentence starters and templates for each section. Higher ability: Challenge students to develop more sophisticated hooks (rhetorical questions, provocative scenarios, relevant quotes). EAL support: Provide introduction templates and vocabulary for transition to context and thesis.',
      },
      {
        title: 'Developing Body Paragraphs',
        duration: '22 minutes',
        description:
          "Model writing a body paragraph using one planned argument. Structure: Topic sentence (state the argument clearly), Evidence (provide specific example, statistic, or expert opinion), Explanation (connect evidence back to thesis-explain why it matters). Example paragraph: 'First, regulation protects young people from content designed to exploit their developing brains. [Topic] Research from Stanford University shows that social media algorithms deliberately use psychological principles to maximize engagement, which can lead to addiction-like patterns in adolescents. [Evidence] This evidence demonstrates that without regulation, young people face deliberate manipulation from profit-driven companies, supporting the need for protective measures. [Explanation]' Students draft body paragraphs for their planned arguments using this structure. Key points: Topic sentence should clearly state the argument, evidence should be specific (not vague), explanation should connect to the thesis. Circulate to provide feedback on clarity and logic.",
        differentiation:
          "Lower ability: Provide topic sentences and evidence; students write explanations connecting to thesis. Use shorter paragraphs. Higher ability: Challenge students to weave evidence and explanation together for smoother reading; add counterargument-refutation within body paragraphs if appropriate. EAL support: Provide sentence frames for each section ('First, [topic]...', 'For example...', 'This shows that...').",
      },
      {
        title: 'Writing the Counterargument Paragraph and Conclusion',
        duration: '20 minutes',
        description:
          "Model a counterargument paragraph: 'Opponents argue that regulation violates free expression and stifles innovation in social media platforms. [Acknowledge] While these concerns are legitimate, they overlook the reality that protecting vulnerable users is a priority that outweighs these risks. [Refute] Governments establish regulations in other media-broadcasting, advertising to children-without elimination of innovation or expression, suggesting regulation can coexist with a healthy industry. [Support refutation]' Students draft their counterargument paragraph. Then model a conclusion: Restate thesis, summarize key arguments, discuss broader implications, end with thought-provoking statement. Example: 'Protecting young people from social media manipulation requires regulation, despite concerns about free expression. The evidence is clear: young people face documented psychological harm from deliberately addictive platforms. As a society, we must prioritize wellbeing over corporate profit. [Implication] This isn't just about individual young people; it's about the kind of future we're building.' Students draft conclusions for their essays.",
        differentiation:
          'Lower ability: Provide templates and sentence starters for both counterargument and conclusion. Higher ability: Challenge students to develop nuanced refutations and conclusions that raise interesting questions. EAL support: Provide glossary and sentence frames.',
      },
    ],
    plenaryActivity: {
      title: 'Peer Review and Self-Assessment',
      duration: '8 minutes',
      description:
        'Students exchange essays with a partner. Using a checklist, each reviews: Does the introduction hook and present the thesis clearly? Does each body paragraph have a clear argument, evidence, and explanation? Is there a counterargument addressed effectively? Does the conclusion reinforce the thesis? Partners provide specific feedback. Students complete a self-assessment: What part of my essay is strongest? What could be improved? This feedback guides revision.',
    },
    assessmentOpportunities: [
      'Formative: Observe paragraph writing; check topic sentence clarity, evidence appropriateness, and explanation logic',
      "Formative: Review peer feedback; listen to students' evaluative comments about essay quality",
      "Formative: Self-assessment reveals students' metacognitive awareness",
      'Summative: Collect drafted essays; mark using CAIE criteria (content and organization, vocabulary range and accuracy, communication)',
    ],
    homeworkSuggestion:
      'Students revise their essays based on peer feedback and self-assessment, improving clarity, adding evidence where needed, strengthening transitions, and refining conclusions. They should ensure the essay flows logically from thesis through arguments to conclusion. Alternatively, provide a different debatable topic with planning template, and ask students to write an essay independently from planning through final draft, applying all skills from this and the previous lesson.',
    teacherNotes:
      "This lesson translates argument plans into full essays. The paragraph structure (topic sentence, evidence, explanation) is critical-each element serves a purpose in supporting the thesis. Many students write evidence without explanation (stating a fact but not connecting it to their argument), which weakens persuasiveness. Emphasize that explanation is where the argument really happens. The counterargument paragraph demonstrates sophisticated thinking and should be encouraged; it shows the writer can consider alternatives while defending their position. Common errors include: weak introductions that don't engage the reader, underdeveloped body paragraphs (long evidence, brief explanation), forgetting the counterargument, or conclusions that simply repeat the thesis without deeper reflection. Peer review is particularly valuable here as it reveals whether arguments are clear to readers other than the writer. For mixed ability, lower ability students need more scaffolding (templates, sentence starters, shorter essay length expectations); higher ability students should write with minimal scaffolding and be challenged to develop sophisticated counterargument refutations. EAL students often struggle with fluency and linking ideas; provide transition words/phrases reference sheet and model paragraph combining multiple sentences. Create a model essay on the wall showing annotation of all structural elements for reference. Remind students that essay-writing skills learned here are fundamental to academic success beyond IGCSE-university essays, professional reports, and persuasive writing all rely on these structures. Time spent on revision is never wasted; strong writers revise multiple times.",
  },

  {
    id: 'igcse-012',
    title: 'Discursive Writing: Exploring Multiple Perspectives',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Understand the difference between argumentative and discursive writing',
      'Present multiple perspectives fairly on a debatable topic',
      'Support each perspective with evidence and reasoning',
      'Synthesize perspectives and discuss implications',
      'Write balanced, thoughtful conclusions that show critical thinking',
      'Apply discursive writing skills to IGCSE Paper 2 writing tasks',
    ],
    resources: [
      'Model discursive essays on various debatable topics',
      'Perspective analysis template (perspective, supporting arguments, evidence)',
      'Comparison framework for evaluating different perspectives',
      'CAIE past paper discursive writing prompts',
      'Discourse markers and transition phrase reference sheet',
      'Annotated exemplar showing balanced perspective presentation',
    ],
    starterActivity: {
      title: 'Identifying Multiple Perspectives',
      duration: '8 minutes',
      description:
        "Present a debatable issue: 'Should school uniforms be mandatory?' Brainstorm perspectives: Support uniforms (reduce socioeconomic disparities, improve focus, school identity); Against uniforms (restrict individuality, expensive, poor quality control). List supporters of each view (students, parents, educators). This demonstrates that complex issues have legitimate multiple viewpoints. Discursive writing explores these, whereas argumentative writing advocates for one.",
    },
    mainActivities: [
      {
        title: 'Analyzing a Model Discursive Essay',
        duration: '12 minutes',
        description:
          "Display a model discursive essay on a debatable topic. Work through its structure: Introduction (present the issue as multifaceted, not take a side), Perspective 1 (present arguments and evidence fairly), Perspective 2 (present counterarguments and evidence fairly), Synthesis (compare perspectives, discuss implications), Conclusion (show critical thinking without necessarilyEndorsing one view). Annotate each section, highlighting how the writer presents perspectives neutrally (using phrases like 'Some argue...', 'Others contend...', 'One viewpoint is that...') and supports each with evidence. Discuss: How is this different from argumentative writing? (No advocacy for one position; fair exploration of competing views.)",
        differentiation:
          'Lower ability: Provide labeled essay sections highlighting structure. Higher ability: Challenge students to identify assumptions underlying each perspective and evaluate evidence quality. EAL support: Highlight discourse markers showing perspective introduction and transition.',
      },
      {
        title: 'Planning a Discursive Essay',
        duration: '14 minutes',
        description:
          "Provide a debatable topic (e.g., 'Should artificial intelligence be regulated?', 'Is social media more harmful or beneficial to society?', 'Should governments prioritize immigration control or open borders?'). Model planning: Identify the issue clearly. Brainstorm Perspective A (supporting arguments, evidence). Brainstorm Perspective B (opposing arguments, evidence). Consider: Are there additional perspectives? What are the strongest arguments for each view? Create a planning table with columns: Perspective | Supporting arguments | Evidence | Counterpoints. Students complete planning for their chosen topic, ensuring fair representation of multiple viewpoints. This thorough planning prevents one-sided presentation.",
        differentiation:
          'Lower ability: Provide a partially completed planning table with some arguments identified. Higher ability: Challenge students to identify a third perspective or nuanced middle-ground viewpoint. EAL support: Provide vocabulary for introducing different perspectives; help brainstorm supporting evidence.',
      },
      {
        title: 'Drafting the Discursive Essay',
        duration: '26 minutes',
        description:
          "Students draft their discursive essay using their plan. Structure: Introduction (present the issue objectively, note that reasonable people disagree), Perspective A (2-3 paragraphs developing arguments with evidence), Perspective B (2-3 paragraphs developing opposing arguments with evidence), Synthesis (1-2 paragraphs comparing perspectives, noting strengths/weaknesses of each, discussing broader implications), Conclusion (show critical evaluation-perhaps suggest conditions under which one perspective becomes more valid, or identify common ground). Emphasize: Use neutral language; avoid words that show bias ('obviously', 'clearly', 'of course'). Support each perspective with real evidence. In synthesis, move beyond simple 'both have merit' to deeper analysis: What assumptions does each perspective rely on? What evidence is stronger? What are implications of each view? Circulate to guide essay development and help students maintain balance.",
        differentiation:
          'Lower ability: Provide essay template with section headings and sentence starters. Allow shorter essay (3-4 main paragraphs). Higher ability: Challenge students to develop a nuanced synthesis that identifies partial validity in each perspective or suggests conditions for agreement. EAL support: Provide discourse markers and transition phrases; help with sentence combining for smooth flow.',
      },
    ],
    plenaryActivity: {
      title: 'Evaluating Discursive Balance',
      duration: '8 minutes',
      description:
        "Share 2-3 student essay excerpts (from perspective/synthesis sections). Class evaluates: Does this present the perspective fairly? Is evidence adequate? Does the synthesis go beyond simple 'both are valid' to deeper analysis? Is the language neutral/unbiased? Highlight essays that achieve genuine balance while showing critical evaluation-this is the goal of discursive writing.",
    },
    assessmentOpportunities: [
      'Formative: Review planning tables; check fair representation of multiple perspectives',
      'Formative: Observe essay drafting; ensure students maintain balanced tone and support each perspective',
      'Formative: Class evaluation reveals understanding of what constitutes good discursive writing',
      'Summative: Collect essays; mark using CAIE criteria (content and organization, vocabulary, accuracy, communication)',
    ],
    homeworkSuggestion:
      "Students revise their discursive essay ensuring: fair presentation of multiple perspectives, adequate supporting evidence for each, neutral language throughout, synthesis that moves beyond surface 'both are valid' to deeper analysis, and a conclusion that shows critical thinking. Alternatively, provide a different debatable topic and ask students to plan and draft a discursive essay independently, applying all skills from this lesson.",
    teacherNotes:
      "Discursive writing requires more sophisticated thinking than argumentative writing-rather than advocating for one position, students must hold multiple perspectives in mind, evaluate their strengths and weaknesses, and synthesize understanding. This is challenging for many students, who default to argumentative approaches. Emphasize the key difference: argumentative = persuade reader of one position; discursive = explore multiple positions fairly. Common errors include: bias toward one perspective despite claims of balance, weak evidence for one perspective (suggesting the writer doesn't actually understand it), superficial synthesis ('Both views are valid and important'), or conclusion that suddenly endorses one perspective (inconsistent with discursive approach). The synthesis section is where critical thinking shines-encourage students to move beyond 'both have merit' to analysis of trade-offs, value assumptions, evidence quality, real-world implications. For mixed ability, lower ability students may work with two simple perspectives and shorter essays; higher ability students should tackle complex, nuanced topics with multiple perspectives and deeper synthesis. EAL students benefit from explicit instruction on neutral language and discourse markers showing perspective introduction ('Some argue...', 'Others maintain...', 'It could be claimed that...'). Create a neutral vs biased language anchor chart for reference. Discursive writing skills are valuable beyond IGCSE-sociology, ethics, policy discussion, and critical thinking all require this capacity to explore multiple viewpoints fairly. Remind students that understanding opposing perspectives doesn't require agreement; it requires intellectual honesty and genuine engagement.",
  },

  {
    id: 'igcse-013',
    title: 'Narrative Writing: Creating Character and Atmosphere',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Create vivid, believable characters through physical description, dialogue, action, and thought',
      'Establish and sustain mood/atmosphere throughout a narrative',
      'Use narrative techniques (foreshadowing, flashback, interior monologue) to deepen storytelling',
      'Show character development and emotional depth',
      'Write narratives with engaging openings and satisfying conclusions',
      'Apply narrative writing skills to IGCSE Paper 1 creative writing tasks',
    ],
    resources: [
      'Model narrative extracts showing strong characterization',
      'Character development chart template',
      'Dialogue writing guidelines and examples',
      'Atmosphere/mood creation techniques reference',
      'Narrative techniques checklist (from lesson igcse-005)',
      'IGCSE past paper narrative/creative writing prompts',
    ],
    starterActivity: {
      title: 'Character Analysis Through Description',
      duration: '8 minutes',
      description:
        "Display two character descriptions. Description A: 'She was young and had red hair.' Description B: 'She was perhaps twenty-three, with wild red curls escaping from a hastily pinned bun, and paint stains on her fingers. Her eyes held both defiance and uncertainty, as if she expected to be dismissed but refused to show her fear.' Discuss: Which feels more real? Why? The second uses specific details, suggests backstory, and hints at personality/emotions. This demonstrates that characterization requires much more than basic physical description.",
    },
    mainActivities: [
      {
        title: 'Characterization Techniques',
        duration: '13 minutes',
        description:
          "Teach four ways to reveal character: Physical description (what they look like, what clothes/objects they carry), Dialogue (how they speak, what they say, what they don't say), Action (what they do, how they behave under stress), Thought/Interior monologue (what they think, revealing inner life). Model each with a character: A anxious student waiting for exam results. Physical: 'Her knee bounced nervously; she'd chewed her fingernails raw.' Dialogue: ''It's probably fine,' she said, though her voice wavered.' Action: 'She checked her phone every thirty seconds.' Thought: 'What if I failed? My parents... No, don't think about it.' Students practice describing a character using all four techniques, creating a fuller, more believable portrait.",
        differentiation:
          'Lower ability: Provide a character and one technique example; students complete remaining techniques using templates. Higher ability: Challenge students to show character contradictions (says one thing, does another) or character change. EAL support: Provide vocabulary and sentence frames for each technique.',
      },
      {
        title: 'Creating Atmosphere',
        duration: '12 minutes',
        description:
          "Introduce atmosphere as the mood/feeling a scene creates. Model techniques: Sensory imagery (sight, sound, smell, touch, taste) to immerse reader, weather/setting reflecting emotion (pathetic fallacy), pacing through sentence length/paragraph length variation, word choice with negative/positive connotations. Example: Creating an ominous atmosphere in a school corridor at night: 'The hallway stretched empty before her, fluorescent lights humming with an almost threatening presence. The air hung cold and still-unusual for a normal school day. Her footsteps echoed, each one seeming to announce her solitude. Above, the lights flickered-once, twice-casting brief shadows across the lockers.' Students identify techniques used, then practice writing a paragraph creating a specific atmosphere (peaceful, tense, nostalgic, etc.).",
        differentiation:
          'Lower ability: Provide a list of descriptive words and atmosphere-creating techniques; students create a short atmospheric paragraph. Higher ability: Challenge students to create contrasting atmospheres in successive paragraphs, showing character response to setting change. EAL support: Provide vocabulary for sensory description and mood-related words.',
      },
      {
        title: 'Writing a Character-Driven Narrative',
        duration: '27 minutes',
        description:
          "Provide a narrative prompt focused on character: 'Write about a moment when someone discovers something unexpected about themselves or someone else.' Students plan their narrative considering: Who is the main character? (Develop using four techniques learned.) What is the key moment/conflict? (Establish atmosphere appropriate to this moment.) How does the character change or respond? (Show development, not just action.) What atmosphere/mood do I want to create? Students draft their narrative (500-700 words) incorporating: vivid character description, dialogue showing personality, action revealing character, interior monologue revealing thoughts/emotions, strong atmospheric description, and a satisfying conclusion showing character response/development. Circulate to guide drafting and help students integrate techniques naturally.",
        differentiation:
          'Lower ability: Provide a simpler prompt with a character partially sketched; students develop and complete the narrative. Use shorter length target (350-400 words). Higher ability: Provide an open-ended prompt; challenge students to create multiple complex characters and show character dynamics. EAL support: Provide vocabulary and dialogue punctuation guidance; help with idiom/natural speech patterns.',
      },
    ],
    plenaryActivity: {
      title: 'Sharing and Peer Feedback',
      duration: '8 minutes',
      description:
        'Invite 2-3 students to read their opening paragraphs aloud. Class listens and comments: What character details did you notice? What atmosphere was created? What do you want to know more about? Readers share what worked powerfully in creating character and atmosphere. Emphasize that successful narrative writing makes readers care about characters and feel invested in their journeys.',
    },
    assessmentOpportunities: [
      'Formative: Review characterization practice; check use of physical description, dialogue, action, and thought',
      'Formative: Observe atmosphere-creation activity; assess sensory imagery and mood-setting vocabulary',
      "Formative: Listen to peer feedback; assess readers' engagement with character and setting",
      'Summative: Collect narrative drafts; mark using CAIE criteria (content and organization, vocabulary, accuracy, communication)',
    ],
    homeworkSuggestion:
      'Students revise their narrative focusing on character development and atmosphere. They should ensure: character is vivid and revealed through multiple techniques, dialogue sounds natural and reveals personality, atmosphere is sustained throughout, and transitions between sections are smooth. Alternatively, provide a different narrative prompt and ask students to write independently, applying all techniques from this lesson.',
    teacherNotes:
      "Narrative writing on IGCSE Paper 1 is often part of creative writing options. Success requires careful character development and atmosphere creation-reader engagement depends on caring about characters and feeling the emotional/sensory world the writer creates. Many students default to action-driven narratives without developing character or mood. Emphasize that character and atmosphere make stories memorable. Common errors include: flat, one-dimensional characters (described only physically, not revealed through dialogue/action/thought), dialogue that doesn't sound natural (too formal or unrealistic), telling rather than showing (describing emotions instead of demonstrating them), and weak atmosphere (generic descriptions rather than sensory, specific detail). Teach students to write scenes (showing moment unfold) rather than summaries (telling what happened). For mixed ability, lower ability students benefit from character templates and sentence frames for dialogue/internal thought; higher ability students should create complex, contradictory characters and be challenged to show emotional growth. EAL students often struggle with natural-sounding dialogue and with culturally-specific imagery; provide dialogue examples and encourage them to draw on their own cultural knowledge for vivid description. Create an anchor chart showing characterization techniques with examples for reference. Remind students that characterization skills are essential to all fiction writing-novels, screenplays, comics all depend on readers' connection to characters. Strong writers invest time in developing characters fully.",
  },

  {
    id: 'igcse-014',
    title: 'Descriptive Writing: Engaging the Senses and Crafting Vivid Imagery',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Craft detailed, sensory-rich descriptions that engage multiple senses',
      'Use precise vocabulary and figurative language effectively',
      'Create vivid imagery that helps readers visualize scenes',
      'Develop descriptions of places, objects, and experiences',
      'Write extended descriptions with variety in sentence structure',
      'Apply descriptive writing skills to IGCSE Paper 1 creative writing tasks',
    ],
    resources: [
      'Model descriptive passages showing sensory imagery',
      'Imagery types poster (visual, tactile, olfactory, gustatory, auditory, kinesthetic)',
      'Descriptive vocabulary bank (verbs, adjectives, adverbs for various settings)',
      'Figurative language reference (simile, metaphor, personification)',
      'IGCSE past paper descriptive writing prompts',
      'Annotated exemplar showing sensory detail and varied sentence structure',
    ],
    starterActivity: {
      title: 'Sensory Imagery Recognition',
      duration: '8 minutes',
      description:
        "Display four descriptions of the same scene (a beach), each emphasizing different senses: Visual only ('The beach was golden and bright blue.'), Multi-sensory ('The warm sand slipped through her fingers. The salt air burned her nostrils. Seagulls shrieked overhead. Waves thundered against the shore.'). Discuss: Which feels more vivid? Why? Which makes you feel like you're there? This demonstrates that sensory-rich description engages readers more deeply than basic visual description alone.",
    },
    mainActivities: [
      {
        title: 'Developing Sensory Vocabulary',
        duration: '12 minutes',
        description:
          "For a specific setting (e.g., 'an old library'), develop sensory vocabulary for each sense. Visual: 'leather-bound spines, faded gold lettering, dust motes dancing in afternoon light.' Auditory: 'the crack of pages turning, the soft whisper of paper, occasional creaks of floorboards.' Olfactory: 'the musty smell of aging paper, hint of leather and dust.' Tactile: 'smooth covers, rough pages, cool wood beneath fingertips.' Gustatory: 'bitter dust on the tongue from inhaling old air.' Create a sensory bank for this setting. Students then practice writing a short descriptive paragraph (5-6 sentences) about the library using vocabulary from multiple senses. This activity builds confidence in sensory description.",
        differentiation:
          'Lower ability: Provide completed sensory vocabulary bank; students write paragraph using provided words. Higher ability: Challenge students to select only the most effective details rather than including all senses. EAL support: Provide pronunciation guidance and visual images to support vocabulary learning.',
      },
      {
        title: 'Figurative Language in Description',
        duration: '13 minutes',
        description:
          "Teach three figurative devices for description: Simile (comparison using 'like' or 'as'): 'The rain fell like needles.' Metaphor (direct comparison): 'The city was a living organism.' Personification (giving human qualities to objects): 'The wind whispered secrets.' Model using each to describe a winter morning: 'The frost clung to the windows like a layer of old lace. Ice sculptures-icicles-hung from the eaves, each one a small frozen landscape. The silence seemed to listen, waiting for the day to fully wake.' Discuss how figurative language creates more imaginative, engaging descriptions. Students practice writing descriptive sentences using each device for a given setting or object.",
        differentiation:
          "Lower ability: Provide simile/metaphor starters; students complete. Focus on simile before metaphor. Higher ability: Challenge students to select figurative language that precisely captures intended mood/impression. EAL support: Explain figurative language concept; provide cultural examples from students' languages if possible.",
      },
      {
        title: 'Writing Extended Description',
        duration: '27 minutes',
        description:
          "Provide a descriptive writing prompt: 'Describe a place that holds special meaning for you' or 'Describe a moment of natural beauty you've witnessed.' Students write an extended description (500-700 words) emphasizing sensory detail, precise vocabulary, and varied sentence structure. Remind them to: include imagery engaging multiple senses, use figurative language where appropriate, vary sentence length and structure to maintain reader interest, and create a dominant impression (the overall feeling or mood they want to convey). Provide a planning stage: What senses will I emphasize? What figurative language might enhance description? What mood am I creating? Students draft their description, incorporating these elements. Circulate to guide development and help students move beyond surface description to deeper sensory engagement.",
        differentiation:
          'Lower ability: Provide sensory vocabulary bank and sentence starters for each sense type. Use shorter length target (300-400 words). Higher ability: Challenge students to create descriptions that evoke specific emotions and to integrate figurative language seamlessly. EAL support: Provide vocabulary bank; help with idiom and cultural knowledge (encourage drawing on their own cultural experiences).',
      },
    ],
    plenaryActivity: {
      title: 'Appreciating Vivid Description',
      duration: '8 minutes',
      description:
        'Read aloud 2-3 student descriptions (or excerpts). Class listens with eyes closed initially, then discusses: What did you see, hear, smell, feel? What mood/atmosphere was created? What specific details made the description vivid? Which figurative language was most effective? Celebrate descriptions that genuinely transport readers into the scene. Emphasize that descriptive writing is an art form-writers craft words to create experiences for readers.',
    },
    assessmentOpportunities: [
      'Formative: Review sensory vocabulary banks; check variety of sensory details',
      'Formative: Observe figurative language practice; assess understanding of simile, metaphor, personification',
      "Formative: Listen to class discussion of descriptions; assess readers' sensory engagement",
      'Summative: Collect extended descriptions; mark using CAIE criteria (vocabulary, imagery, structure variety, communication)',
    ],
    homeworkSuggestion:
      'Students revise their description ensuring: sensory imagery engages multiple senses, vocabulary is precise and varied, figurative language enhances description, sentence structure varies for interest, and a clear mood/impression emerges. Alternatively, provide a different descriptive prompt (describe an object, a person, a moment, an emotion) and ask students to write independently, applying all sensory and figurative techniques from this lesson.',
    teacherNotes:
      "Descriptive writing appears in IGCSE Paper 1 creative writing options and is assessed on vocabulary, imagery, sentence variety, and overall effect. Success requires students to think beyond basic description ('The sky was blue') to vivid, engaging imagery. Many students initially struggle with moving past visual description to include other senses; this requires deliberate practice. Figurative language should enhance description naturally, not feel forced-teach students to select devices that precisely capture their intended impression rather than including figurative language for its own sake. Common errors include: over-use of complex figurative language making descriptions overwrought, lack of sentence variety creating monotonous rhythm, vague descriptions lacking specific detail, or descriptions that lack a unifying mood/atmosphere. Encourage students to describe not just what they see but what they feel-description should evoke emotion and atmosphere. For mixed ability, lower ability students need substantial scaffolding (vocabulary banks, sentence starters, shorter length); they may focus primarily on visual and one other sense before moving to multi-sensory description. Higher ability students should be challenged to write descriptions that create specific moods and integrate figurative language subtly. EAL students benefit from extensive vocabulary building and from being encouraged to draw on their own cultural/linguistic knowledge for vivid imagery. Create a sensory description anchor chart with examples for each sense type. Remind students that descriptive writing skills enhance all writing-even argumentative or narrative writing benefits from vivid, precise description of key scenes and ideas. Great writers make readers see, hear, smell, taste, and feel their words.",
  },

  {
    id: 'igcse-015',
    title: 'Paper 1 Creative Writing Workshop: Applying All Skills',
    board: 'IGCSE',
    subject: 'English Language',
    keyStage: 'IGCSE',
    duration: '60 minutes',
    objectives: [
      'Apply narrative, descriptive, and character development skills to IGCSE Paper 1 creative writing options',
      'Work with realistic exam prompts and time constraints',
      'Plan and draft complete creative responses within a lesson period',
      'Develop independence and confidence in creative writing',
      'Reflect on strengths and areas for continued development',
    ],
    resources: [
      '3-4 past IGCSE Paper 1 creative writing prompts',
      'Planning templates (character, setting, plot; sensory vocabulary banks)',
      'Narrative technique checklist (from lesson igcse-005)',
      'Characterization techniques checklist (from lesson igcse-013)',
      'Self-assessment rubric for creative writing',
      'Time management guide for exam conditions (planning, drafting, revising within 60-90 minutes)',
    ],
    starterActivity: {
      title: 'Reviewing Creative Writing Skills',
      duration: '8 minutes',
      description:
        'Display a paragraph incorporating narrative techniques, vivid characterization, and sensory description. Together, identify: narrative techniques used, character-revealing details, sensory imagery, sentence variety for effect, figurative language. This quick review activates all skills students have learned in recent lessons and shows how they work together in complete creative writing.',
    },
    mainActivities: [
      {
        title: 'Selecting and Planning a Creative Writing Prompt',
        duration: '12 minutes',
        description:
          "Display 3-4 IGCSE Paper 1 creative writing prompts (students might see narrative starters, descriptive scenarios, or combined options). Discuss each: What kind of writing does this prompt call for (narrative, descriptive, mixed)? What's the creative challenge here? Encourage students to choose a prompt they find genuinely interesting-motivation matters. Once students have selected their prompt, they spend 10 minutes planning using a comprehensive template: Main character (describe using four techniques), Setting/Atmosphere (sensory details, mood), Plot/Events (sequence, key moments), Narrative techniques to use (foreshadowing, dialogue, flashback, etc.), Figurative language opportunities. Circulate to ensure planning is thorough and purposeful.",
        differentiation:
          'Lower ability: Provide simplified planning templates with sentence starters. Offer pre-developed character/setting options to choose from. Higher ability: Use more open-ended prompts; challenge students to subvert expectations or create complex narrative structures. EAL support: Provide vocabulary and help clarify prompt requirements.',
      },
      {
        title: 'Drafting the Creative Response',
        duration: '32 minutes',
        description:
          'Students draft their response to their chosen prompt, applying skills from recent lessons. As they write, they should consider: Are my characters vivid and developed? Is the atmosphere/setting engaging? Are narrative techniques integrated naturally? Is my vocabulary precise and varied? Does my sentence structure vary for interest and effect? Emphasize quality over quantity-a shorter response with vivid detail and strong technique is superior to a longer, rushed piece. After drafting, students do a quick self-edit: Check dialogue punctuation, scan for repeated words, ensure transitions are clear, verify that descriptions are specific. Time management note: In an exam, students would have approximately 45-60 minutes for creative writing; this activity replicates that constraint.',
        differentiation:
          'Lower ability: Provide a paragraph-by-paragraph outline to follow. Reduce word count expectation (400-500 words rather than 600+). Offer feedback on sentence starters/transitions. Higher ability: Provide no outline; challenge students to experiment with narrative structure, point of view, or unexpected endings. EAL support: Provide vocabulary support and help with complex sentence construction.',
      },
    ],
    plenaryActivity: {
      title: 'Celebrating Creative Writing and Reflecting',
      duration: '10 minutes',
      description:
        'Invite 2-3 volunteers to share opening paragraphs of their creative writing (or if time short, just opening sentences). Class appreciates the different approaches and styles. Facilitate a reflection: What technique from recent lessons did you use most effectively? What was challenging about this prompt? How would you improve your draft if you had more time? What are you most proud of in your creative writing? This metacognitive reflection helps students recognize their progress and identify areas for future focus. End by emphasizing that creative writing is valuable for its own sake-it develops imagination, communication skills, and personal voice beyond IGCSE assessment.',
    },
    assessmentOpportunities: [
      'Formative: Observe planning; assess appropriateness and thoroughness for the chosen prompt',
      'Formative: Circulate during drafting; note effective use of learned techniques and areas of struggle',
      "Formative: Quick self-edit reveals students' awareness of writing quality",
      'Formative: Listen to student reflections; assess metacognitive awareness of strengths and needs',
      'Summative: Collect creative writing drafts; can be marked using full CAIE assessment criteria (content and organization, vocabulary, accuracy, communication) for final feedback and grade',
    ],
    homeworkSuggestion:
      'Students revise their creative writing response, incorporating all learned techniques more fully: stronger character development, richer sensory description, more varied sentence structure, more sophisticated narrative technique integration. Alternatively, students choose a different IGCSE creative writing prompt and write a complete response (planning through final revision), applying all skills from recent lessons without teacher support.',
    teacherNotes:
      'This workshop consolidates all narrative and descriptive writing skills practiced in the previous four lessons (igcse-010 through igcse-014). The combination of planning and drafting under time pressure replicates exam conditions while allowing support. This lesson serves as a capstone to recent instruction and a bridge to independent exam preparation. It reveals which students are confident in creative writing and which need additional support. Observations made here should guide future differentiation and revision planning. For example, if students struggle with characterization, schedule additional characterization lessons; if dialogue punctuation errors are common, address this explicitly. For mixed ability, lower ability students benefit from structured outlines and vocabulary support; higher ability students should write with minimal scaffolding and explore sophisticated narrative structures. EAL students may need particular support with figurative language, natural-sounding dialogue, and cultural knowledge required for some prompts; encourage them to draw on their own experiences. The tone of this lesson should be celebratory-creative writing is challenging and rewarding. Emphasize that all writers struggle and revise extensively. Remind students that the skills practiced in these lessons (characterization, atmosphere, sensory description, narrative technique) are fundamental to all creative writing and will serve them throughout their education and careers. Encourage students to continue writing beyond IGCSE for pleasure and development. Consider displaying strong student writing (with permission) as inspiration for future classes.',
  },
]
