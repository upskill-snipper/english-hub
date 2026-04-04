import type { LessonPlan } from '@/types';

export const y8Term2Lessons: LessonPlan[] = [
  // ── Lesson 1: Introduction to Conflict Poetry ────────────────────────────
  {
    id: 'y8t2-01',
    title: 'Introduction to Conflict Poetry – Anthology Overview & Context',
    text: 'Conflict Poetry Anthology',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand why poets write about conflict and what an anthology is (8R.1)',
      'Identify key historical contexts that shape conflict poetry from different periods',
      'Develop initial responses to two contrasting conflict poems read aloud',
      'Begin building a poetry journal as a personal revision tool',
    ],
    successCriteria: [
      'I can explain what an anthology is and why historical context matters when reading conflict poetry',
      'I can identify the speaker, tone, and subject of a conflict poem on first reading',
      'I can write an initial response to a poem using at least one piece of evidence',
      'I can explain how two poems on the same theme differ in attitude',
    ],
    keywords: [
      'anthology',
      'conflict',
      'context',
      'historical context',
      'tone',
      'speaker',
      'attitude',
      'imagery',
    ],
    starterActivity: {
      title: 'Word Association: "Conflict"',
      duration: '8 minutes',
      instructions:
        'Display the word CONFLICT in large letters on the board. Students have 60 seconds to write every word or image that comes to mind on their mini-whiteboards. Teacher collects responses and sorts them into three columns: Physical conflict, Emotional conflict, Political conflict. Discuss as a class: why might poets be drawn to write about conflict above almost any other subject? Introduce the idea that poetry can capture what news reports cannot.',
      differentiation: {
        support:
          'Provide a list of ten seed words (war, battle, pain, loss, courage, grief, power, duty, sacrifice, peace) to help students begin their association map.',
        core: 'Students generate their own associations freely and contribute to the class sort.',
        stretch:
          'Students explain why conflict is a uniquely powerful subject for poetry rather than prose, drawing on any prior knowledge of both forms.',
      },
      resources: ['Mini-whiteboards and pens', '"CONFLICT" slide displayed on board'],
    },
    mainActivities: [
      {
        title: 'What Is an Anthology? – Reading and Context Setting',
        duration: '20 minutes',
        instructions:
          'Teacher delivers a brief guided input (8 minutes): explain what an anthology is, introduce the three contextual questions students must always ask (When was it written? Who wrote it? Why was it written?), and introduce the six key themes of conflict poetry on a reference card. Students then read two short conflict poems — one from the First World War era and one contemporary — aloud together. After each reading, students discuss in pairs: Who is the speaker? What is the tone? What does the poem seem to be saying about conflict? Teacher takes brief whole-class feedback and annotates on the board.',
        differentiation: {
          support:
            'Provide an annotated reading guide with key vocabulary pre-glossed and the three contextual questions printed as prompts beside each poem.',
          core: 'Students annotate their own copy of the poems using the three contextual questions as a guide.',
          stretch:
            'Students begin to notice structural choices (rhyme, stanza form) and suggest why the poet might have chosen them.',
        },
        resources: [
          'Printed anthology extract with two poems',
          'Key themes reference card',
          'Three contextual questions prompt card',
        ],
      },
      {
        title: 'Poetry Journal – First Entries',
        duration: '22 minutes',
        instructions:
          'Introduce the poetry journal format: title, poet, date, speaker, tone, and one quotation with a brief comment. Model completing a full journal entry for the first poem on the board, thinking aloud through each section. Students complete their own journal entries for both poems independently. In the final 5 minutes, partners share their chosen quotations and explain their choice. Teacher circulates, prompting students to be more specific about tone and to move from identifying to explaining.',
        differentiation: {
          support:
            'Provide a pre-formatted poetry journal template with sentence starters for each section: "The speaker appears to be... because...", "The tone seems... because the word \'...\' suggests...".',
          core: 'Students complete both journal entries using the format modelled on the board.',
          stretch:
            'Students add a sixth section to their journal entry: "A question I would ask the poet about this poem," justifying why the question matters.',
        },
        resources: [
          'Poetry journal booklets (or exercise book with template)',
          'Model journal entry displayed on board',
          'Both poems for annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Fact, Inference, Response',
      duration: '10 minutes',
      instructions:
        'Display a final quotation from one of the poems. Students write three sentences on their exit slip: (1) A fact — something the poem directly tells us. (2) An inference — something we can work out from the poem. (3) A personal response — how the poem makes them feel and why. Teacher collects exit slips to assess starting points for the class.',
      differentiation: {
        support: 'Provide the three sentence frames: "The poem directly tells us that...", "We can infer that... because...", "The poem makes me feel... because...".',
        core: 'Students write all three sentences independently.',
        stretch: 'Students write a fourth sentence linking their personal response to a specific technique the poet uses.',
      },
    },
    homework:
      'Research one of the following conflicts: the First World War, the Falklands War, or the conflict in Syria. Find one fact, one statistic, and one personal account (soldier, civilian, or journalist). Bring your findings to Lesson 2 in note form.',
    worksheetQuestions: [
      {
        question: 'What is an anthology? Use the word "curated" in your answer.',
        lines: 3,
        modelAnswer:
          'An anthology is a curated collection of poems grouped around a shared theme or period. The word comes from the Greek anthologia, meaning "a gathering of flowers." A conflict poetry anthology brings together different voices, styles, and historical perspectives on the subject of war.',
        marks: 2,
      },
      {
        question: 'Name the three contextual questions you should ask about any conflict poem, and explain why each one matters.',
        lines: 6,
        modelAnswer:
          'The three questions are: When was it written? (because historical period shapes the poet\'s attitudes and language), Who wrote it? (because a soldier poet has a very different perspective from a civilian), and Why was it written? (because a poem written to recruit has a different purpose from one written to mourn). Knowing the answers helps the reader interpret the poem\'s tone and attitude accurately.',
        marks: 3,
      },
      {
        question: 'Choose one of the poems studied in this lesson. Identify the speaker and explain what their attitude to conflict appears to be.',
        lines: 5,
        modelAnswer:
          'In [poem title], the speaker appears to be [a soldier/a civilian/an observer]. Their attitude to conflict is [tone: bitter/proud/mournful] because the poet uses words such as "[quotation]" which suggest [explanation]. This implies the speaker [wider inference about attitude].',
        marks: 3,
      },
      {
        question: 'Write down two differences you noticed between the two poems studied in this lesson.',
        lines: 5,
        modelAnswer:
          'The two poems differ in tone: Poem A has a [tone] tone, using words like "[quotation]," while Poem B has a [contrasting tone] tone, shown through "[quotation]." They also differ in form: Poem A uses [form] which creates [effect], whereas Poem B uses [form] which creates [different effect].',
        marks: 4,
      },
      {
        question: 'Explain why a common mistake when studying conflict poetry is to assume all of it is anti-war.',
        lines: 4,
        modelAnswer:
          'Not all conflict poetry criticises war. Some poets genuinely celebrate military courage, sacrifice, and patriotism, particularly those writing during periods when such attitudes were culturally dominant. Assuming all conflict poetry is anti-war causes readers to misread poems whose tone is actually proud or elegiac, and can lead to inaccurate analysis of the poet\'s intentions.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose two poems with clearly contrasting tones for the paired reading — for example a patriotic Victorian poem alongside an anti-war First World War poem. The contrast makes the concept of shifting historical attitudes immediately visible.',
      'The poetry journal is a long-term investment: students who maintain it consistently will have a ready-made revision resource by the end of the unit. Consider checking journals briefly at the start of each lesson.',
      'Do not expect fully analytical responses in journal entries at this stage. The goal is to establish the habit of noticing and recording. Analysis deepens across the unit.',
      'Use exit slips diagnostically: students who struggle to distinguish "fact" from "inference" will need explicit modelling in Lesson 2 before they can work with imagery and tone independently.',
      'If any students have personal connections to conflict (family members in the military, refugee backgrounds), handle the topic with sensitivity and give those students the option to write about a poem rather than share personal experiences.',
    ],
    targetedSkills: [
      '8R.1 - Reading for meaning and retrieval',
      '8R.2 - Understanding context',
      '8R.7 - Developing personal reading responses',
      '8W.1 - Writing for purpose and audience',
    ],
  },

  // ── Lesson 2: Imagery in War Poetry ─────────────────────────────────────
  {
    id: 'y8t2-02',
    title: 'Imagery in War Poetry – Visual Language and Effect',
    text: 'Conflict Poetry Anthology',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Identify and name simile, metaphor, personification, and sensory imagery in conflict poems (8R.3)',
      'Analyse the effect of imagery using a four-step method: identify, describe, connotations, poet\'s intention',
      'Move beyond feature-spotting to genuine analysis of a poet\'s language choices',
      'Write an analytical paragraph about imagery using embedded quotation (8W.4)',
    ],
    successCriteria: [
      'I can identify at least three different types of imagery in a conflict poem',
      'I can explain the connotations of an image and link them to the poem\'s theme',
      'I can distinguish between a simile and a metaphor and explain the difference in effect',
      'I can write an analytical paragraph that identifies, quotes, and analyses imagery',
    ],
    keywords: [
      'imagery',
      'simile',
      'metaphor',
      'personification',
      'sensory imagery',
      'connotations',
      'extended metaphor',
      'effect',
    ],
    starterActivity: {
      title: 'Spot the Technique – Five Sentences',
      duration: '8 minutes',
      instructions:
        'Display five sentences on the board, each containing a different type of imagery (visual, auditory, tactile, simile, metaphor). Students work individually to identify the technique and write one word describing the image created. Answers discussed as a class. Teacher uses this as a diagnostic to gauge prior knowledge before introducing the four-step analysis method.',
      differentiation: {
        support:
          'Provide a glossary card with definitions and examples of each imagery type for students to use as a reference.',
        core: 'Students identify the technique and write a word describing the image independently.',
        stretch:
          'Students also explain what each image suggests about war beyond its literal meaning.',
      },
      resources: ['Five-sentence slide', 'Imagery glossary cards (for support)'],
    },
    mainActivities: [
      {
        title: 'Modelled Analysis: The Four-Step Method',
        duration: '20 minutes',
        instructions:
          'Introduce and model the four-step method for analysing imagery: (1) Identify the technique. (2) Describe what you see/hear/feel. (3) Explain the connotations — what does the comparison suggest beyond its literal meaning? (4) Link to the poet\'s intention — why this image? What effect on the reader? Work through two examples from a war poem on the board, thinking aloud through each step. Then give students a third quotation and ask them to attempt steps 3 and 4 independently before sharing with a partner. Collect whole-class responses to address misconceptions.',
        differentiation: {
          support:
            'Provide a scaffold sheet with the four steps numbered and sentence starters for each: "The technique used here is... because...", "This creates an image of...", "The connotations of this are...", "The poet may have chosen this because...".',
          core: 'Students apply the four-step method to the third quotation using their notes from the modelling.',
          stretch:
            'Students apply all four steps to a fourth unseen quotation without any scaffold, then evaluate whether a simile or metaphor would create a stronger effect and why.',
        },
        resources: [
          'Four-step analysis slide',
          'War poem extract with three annotated quotations',
          'Scaffold sheet (differentiated)',
        ],
      },
      {
        title: 'Independent Analysis – Two Poems Compared',
        duration: '22 minutes',
        instructions:
          'Students receive two short poem extracts (8–12 lines each). Their task is to annotate each extract, identifying at least two examples of imagery per poem. They then choose the most powerful image from each poem and complete a full four-step analysis in writing. In the final 5 minutes, pairs share their chosen images and vote on which poet creates the more powerful effect, giving a reason.',
        differentiation: {
          support:
            'Pre-highlight three quotations in each poem so that students select from a limited range. Provide a sentence frame for the written analysis.',
          core: 'Students annotate freely and write two full four-step analyses independently.',
          stretch:
            'Students compare the two poets\' use of imagery in a short paragraph (5–6 sentences), using at least two comparative connectives.',
        },
        resources: [
          'Two poem extracts (printed)',
          'Annotation pens/pencils',
          'Four-step analysis recording sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Best Sentence Challenge',
      duration: '10 minutes',
      instructions:
        'Teacher displays three student-written analysis sentences (anonymised) under the visualiser. Class votes on which is the strongest and explains why. Teacher annotates the winning sentence, highlighting what makes it work: subject terminology, connotation exploration, link to effect. Students then improve one of their own sentences from the main activity using the class feedback.',
      differentiation: {
        support: 'Students improve a given weak sentence rather than one of their own.',
        core: 'Students improve one of their own sentences using the criteria identified by the class.',
        stretch: 'Students write a further sentence that zooms in on a single word in their quotation and explores its specific connotations.',
      },
    },
    homework:
      'Find one example of imagery in a poem you have read this week. Write a full four-step analysis of it (aim for 6–8 sentences). Bring it to Lesson 3 for peer feedback.',
    worksheetQuestions: [
      {
        question: 'What is the difference between a simile and a metaphor? Give an example of each from war poetry.',
        lines: 4,
        modelAnswer:
          'A simile compares two things using "like" or "as" (e.g., "soldiers moved like old beggars under sacks"). A metaphor states that one thing IS another without those connecting words (e.g., "the battlefield is a hungry mouth"). Metaphors are often more powerful because they make the identification absolute rather than suggesting a comparison.',
        marks: 3,
      },
      {
        question: 'Why is sensory imagery especially important in war poetry? Explain with reference to the poet\'s purpose.',
        lines: 5,
        modelAnswer:
          'Most readers have never experienced combat, so the poet must bridge the gap between the battlefield and the reader\'s imagination. Sensory imagery recreates the sights, sounds, smells, and physical sensations of war, making the reader feel present in the experience. This forces the reader to engage emotionally rather than intellectually, which is essential for a poem that aims to convey horror, grief, or the injustice of war.',
        marks: 3,
      },
      {
        question: 'Choose a quotation from one of the poems studied today. Apply steps 3 and 4 of the four-step method.',
        lines: 6,
        modelAnswer:
          'The connotations of [quotation] suggest [deeper meaning beyond literal]. The word/phrase "[specific word]" carries associations of [connotation], which implies [what this tells us about conflict/the speaker\'s experience]. The poet likely chose this image to make the audience/reader feel [effect], reinforcing the poem\'s wider theme of [theme: loss/futility/heroism etc.].',
        marks: 4,
      },
      {
        question: 'What is an extended metaphor? Explain how it differs from a single metaphor.',
        lines: 3,
        modelAnswer:
          'An extended metaphor develops a comparison across several lines or even the entire poem, building a sustained parallel between two ideas. A single metaphor makes one identification and moves on, while an extended metaphor returns to and deepens the same comparison repeatedly, adding layers of meaning with each new detail.',
        marks: 2,
      },
      {
        question: 'A student writes: "The poet uses a metaphor." Explain what is wrong with this analysis and how it should be improved.',
        lines: 5,
        modelAnswer:
          'This response merely identifies a technique without explaining its effect — this is called "feature-spotting" and earns minimal marks. A stronger analysis would: name the specific quotation, explain what the metaphor compares, explore the connotations of the comparison, and link to the poet\'s intention and effect on the reader. For example: "The metaphor of the battlefield as \'a hungry mouth\' suggests war consumes human life indiscriminately, reducing soldiers to mere food for destruction, creating a sense of horror and helplessness in the reader."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The most common difficulty at this stage is step 3 (connotations). Students often describe what they see rather than what the image implies. Model explicitly: "what does the comparison between X and Y make you think of — not just what you see, but what it suggests about the subject?"',
      'Pre-select poem extracts carefully: poems that use several different types of imagery within a short extract are ideal for this lesson (e.g., Owen\'s "Dulce et Decorum Est" or portions of "Exposure").',
      'When displaying student sentences for the plenary, always anonymise and ask permission — or use fabricated model/non-model sentences to avoid embarrassment.',
      'The step from "identifying" to "analysing connotations" is the pivotal skill for the whole unit. Budget extra time here if students are struggling — it is worth going slower now than moving on with a class that cannot yet analyse.',
    ],
    targetedSkills: [
      '8R.3 - Understanding language choices',
      '8R.4 - Exploring inference and connotation',
      '8W.4 - Writing analytical paragraphs',
      '8W.5 - Using subject terminology accurately',
    ],
  },

  // ── Lesson 3: Tone and Mood in Conflict Poetry ───────────────────────────
  {
    id: 'y8t2-03',
    title: 'Tone and Mood in Conflict Poetry – Diction, Shift, and Volta',
    text: 'Conflict Poetry Anthology',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Distinguish between tone (poet\'s attitude) and mood (reader\'s feeling) in conflict poems (8R.4)',
      'Identify how diction creates tone, with reference to specific word choices',
      'Recognise a volta (shift in tone) and explain its effect on the reader',
      'Write a developed analytical response about how a poet creates tone across a whole poem (8W.4)',
    ],
    successCriteria: [
      'I can define tone and mood and explain the difference between them',
      'I can explain how specific word choices create a particular tone',
      'I can identify where a volta occurs in a poem and explain its effect',
      'I can write a paragraph discussing tone that refers to diction, structure, and effect',
    ],
    keywords: [
      'tone',
      'mood',
      'diction',
      'volta',
      'shift',
      'bitter',
      'elegiac',
      'ironic',
      'patriotic',
      'detached',
    ],
    starterActivity: {
      title: 'Tone Detective – Same Event, Different Diction',
      duration: '8 minutes',
      instructions:
        'Display two versions of the same sentence on the board — one written in an admiring, patriotic tone and one in a bitter, accusatory tone (based on the same battlefield event). Students identify which is which and highlight the specific words that create each tone. Class discussion: what single word could you change to completely alter the tone? Why is word choice so powerful? Introduce "diction" as the technical term for a poet\'s deliberate word choice.',
      differentiation: {
        support:
          'Provide three key words in each sentence labelled with arrows. Students explain why each word contributes to the tone.',
        core: 'Students identify tone and highlight the key words that create it, giving a reason for each.',
        stretch:
          'Students rewrite one sentence in a third tone (e.g., ironic or detached) and compare the effect.',
      },
      resources: ['Two-sentence comparison slide', 'Tone vocabulary mat'],
    },
    mainActivities: [
      {
        title: 'Tone Mapping Across a Whole Poem',
        duration: '22 minutes',
        instructions:
          'Students receive a conflict poem that contains a clear volta — a moment where the tone shifts significantly. Read the poem aloud twice. First task: students work in pairs to draw a "tone map" — a simple line on a timeline showing how the emotional tone changes across the poem from start to finish. Second task: pairs annotate the poem to identify (a) the most important diction choices that establish the opening tone, (b) the exact moment of the volta, and (c) how the tone changes after the volta. Teacher models the process with the first stanza, then releases students to continue independently.',
        differentiation: {
          support:
            'Provide the tone map as a pre-drawn template with three prompts: "The opening tone is... shown by...", "The volta occurs at line... when...", "After the volta the tone becomes... because...".',
          core: 'Students draw their own tone map and annotate the poem in pairs.',
          stretch:
            'Students write a short analytical paragraph (5–6 sentences) explaining how the poet uses the volta to change the reader\'s understanding of the poem\'s overall message.',
        },
        resources: [
          'Conflict poem with visible volta (printed)',
          'Tone map template (for support)',
          'Annotation pens',
        ],
      },
      {
        title: 'Written Response – Developing Tone Analysis',
        duration: '20 minutes',
        instructions:
          'Students write a developed analytical response (two paragraphs minimum) answering: "How does the poet create tone in this poem?" Paragraph 1 should focus on the opening tone and the diction that creates it. Paragraph 2 should address the volta and explain how the shift changes the reader\'s experience of the poem. Teacher circulates, targeting individual students with questions: "Can you be more specific about which word creates that feeling?" Collect written responses for marking.',
        differentiation: {
          support:
            'Provide a paragraph scaffold with sentence starters and a word bank of tone vocabulary (bitter, mournful, ironic, celebratory, detached, sorrowful).',
          core: 'Students write two independent paragraphs using the annotation they completed in the first main activity.',
          stretch:
            'Students write a third paragraph that addresses whether the speaker\'s tone is the same as the poet\'s tone, exploring the possibility of irony.',
        },
        resources: [
          'Paragraph scaffold (for support)',
          'Tone vocabulary mat',
          'Lined response paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Tone in One Sentence',
      duration: '10 minutes',
      instructions:
        'Students write a single sentence that identifies the overall tone of the poem AND names two specific words that create it. Teacher selects five responses to share. Class evaluates: does the sentence prove its claim with evidence? Teacher models how to tighten a vague tone claim into a precise, supported statement.',
      differentiation: {
        support: 'Provide the sentence frame: "The overall tone of [poem] is [tone word] because the words \'[word 1]\' and \'[word 2]\' suggest [explanation]."',
        core: 'Students write the sentence independently.',
        stretch: 'Students write two sentences: one for the opening tone and one for the tone after the volta, showing awareness of change.',
      },
    },
    homework:
      'Re-read any conflict poem in your anthology. Write a tone map for it (draw it and label it). Then write one sentence identifying the tone and two words that create it. Bring to Lesson 4.',
    worksheetQuestions: [
      {
        question: 'Define tone and mood. Explain the difference between them using an example.',
        lines: 4,
        modelAnswer:
          'Tone is the poet\'s attitude towards their subject, revealed through word choice and style. Mood is the feeling the poem creates in the reader — the emotional atmosphere. For example, a poet might use a calm, detached tone to describe horrific events; the contrast between the cool voice and the terrible content creates a deeply disturbing mood in the reader, even though the poet\'s tone is controlled.',
        marks: 3,
      },
      {
        question: 'What is diction? Why is it the most important tool for creating tone?',
        lines: 3,
        modelAnswer:
          'Diction is the poet\'s deliberate choice of individual words. It is the primary tool for creating tone because the same event can be described in radically different ways depending on the specific words selected — "advanced bravely" creates an admiring tone while "stumbled blindly" creates a bitter one, even though both describe the same soldiers moving across the same field.',
        marks: 2,
      },
      {
        question: 'Identify the volta in the poem studied today. Explain what triggers the shift and what effect it has on the reader.',
        lines: 6,
        modelAnswer:
          'The volta occurs at [line/stanza reference]. Before this point, the tone is [tone word], created through words such as "[quotation]." The shift is triggered by [new event/image/realisation]. After the volta, the tone becomes [new tone], shown by "[quotation]." This shift has the effect of [effect on reader: shock/sadness/disillusionment], forcing the reader to reconsider the poem\'s overall message about conflict.',
        marks: 4,
      },
      {
        question: 'Choose a word from the poem that you think is particularly important for creating tone. Explain your choice in three sentences.',
        lines: 5,
        modelAnswer:
          'The word "[word]" is particularly important because it carries connotations of [connotations]. These associations contribute to the [tone] tone by suggesting [what the word implies about the speaker\'s attitude]. The effect on the reader is [effect], which reinforces the poem\'s wider message that [thematic statement].',
        marks: 3,
      },
      {
        question: 'A student says: "The tone of the poem is sad." Explain why this is a weak analytical statement and write an improved version.',
        lines: 5,
        modelAnswer:
          'The statement is weak because it merely names the tone without supporting it with evidence or explaining how it is created. An improved version would be: "The poet creates an elegiac tone through the word \'guttering,\' which suggests a life flickering out like a dying candle, stripping away any sense of heroism and forcing the reader to confront the quiet, undignified reality of death." This version identifies the specific technique, analyses the connotation, and links to the reader\'s response.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose a poem with a clear, dramatic volta for this lesson — "Dulce et Decorum Est" works well because the shift between the opening march and the gas attack is unmistakable. Alternatively, any poem with a strong before/after structure will serve the lesson aims.',
      'The tone map activity is particularly effective for visual learners and helps all students see a poem as a dynamic object that moves and changes, rather than a static text to be decoded.',
      'When students write their two-paragraph response, look for those who slip back into retelling what happens. Redirect them to writing about how and why the poet makes choices, not what happens in the poem.',
      'The distinction between the speaker\'s tone and the poet\'s tone (addressed in the stretch task) is an important A-level concept that higher-attaining Year 8 students can begin to access. Flag it carefully — it requires students to understand irony at a meta-level.',
    ],
    targetedSkills: [
      '8R.4 - Exploring tone and mood',
      '8R.5 - Analysing language for effect',
      '8W.4 - Writing analytical paragraphs',
      '8W.6 - Developing a personal critical voice',
    ],
  },

  // ── Lesson 4: Structure, Form, and Comparison Preparation ────────────────
  {
    id: 'y8t2-04',
    title: 'Structure and Form – How Shape Creates Meaning in Conflict Poetry',
    text: 'Conflict Poetry Anthology',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Explain how structural choices (stanza form, enjambment, caesura, end-stopping) create meaning (8R.5)',
      'Analyse the significance of a poem\'s form (sonnet, ballad, free verse) in the context of its subject matter',
      'Connect structural analysis to a poem\'s themes and the poet\'s intentions',
      'Write a comparative analytical paragraph discussing the structural choices of two conflict poets (8W.7)',
    ],
    successCriteria: [
      'I can define and identify enjambment, caesura, and end-stopping in a conflict poem',
      'I can explain how stanza regularity or irregularity reflects the poem\'s content',
      'I can connect the choice of form (e.g., free verse vs sonnet) to the poet\'s intentions',
      'I can write a paragraph comparing the structural choices of two poems',
    ],
    keywords: [
      'structure',
      'form',
      'stanza',
      'enjambment',
      'caesura',
      'end-stopping',
      'free verse',
      'sonnet',
      'ballad',
      'volta',
    ],
    starterActivity: {
      title: 'Look Before You Read',
      duration: '8 minutes',
      instructions:
        'Display two poems on the board without revealing any words — just their visual shapes (white rectangles representing lines, with the proportions of each poem). Students work in pairs to describe what they see: How many stanzas? Are they regular or irregular? Are there very short or very long lines? Any gaps? Students speculate: what kind of content might create each shape? Reveal the poems. Were their predictions close? Introduce the idea that the shape of a poem on the page is never accidental.',
      differentiation: {
        support:
          'Provide three guided questions to frame the observation: "How many stanzas are there?", "Are all the stanzas the same length?", "Are there any lines that look much shorter or longer than the others?"',
        core: 'Students observe and speculate freely in pairs.',
        stretch:
          'Students write a hypothesis about the content of each poem based solely on its visual shape, and evaluate their hypothesis after the reveal.',
      },
      resources: ['Silhouette slide of two poems (shapes only)', 'Reveal slide with full poems'],
    },
    mainActivities: [
      {
        title: 'Structural Features Hunt – Annotation Challenge',
        duration: '20 minutes',
        instructions:
          'Students receive a conflict poem. Their task is to annotate it for five structural features in 15 minutes: (1) Mark any enjambment with an arrow and label with "E". (2) Mark any caesura with a forward slash "/". (3) Circle any end-stopped lines and label "ES". (4) Note stanza length and regularity in the margin. (5) Identify the form. For each feature they find, students write a brief note explaining the effect: "The enjambment here creates... because..." Teacher models one of each feature on the board before releasing students.',
        differentiation: {
          support:
            'Provide the poem with enjambment and caesura already highlighted; students write the effect notes only.',
          core: 'Students annotate all five features and write effect notes independently.',
          stretch:
            'Students also identify one structural pattern that changes across the poem (e.g., regular stanzas that become irregular) and explain what this might signal.',
        },
        resources: [
          'Conflict poem (printed, double-spaced for annotation)',
          'Annotation guide with symbols',
          'Five-feature tracking sheet',
        ],
      },
      {
        title: 'Comparative Structural Paragraph',
        duration: '22 minutes',
        instructions:
          'Students now receive a second poem. They annotate it for structural features (10 minutes) and then write a comparative paragraph (12 minutes) using the prompt: "Compare how the poets use structure in these two poems." Before writing, teacher models a topic sentence on the board: "While [Poet A] uses [structural feature] to create [effect], [Poet B] employs [contrasting structural choice] to suggest [different effect]." Students write independently, using at least two comparative connectives in their paragraph.',
        differentiation: {
          support:
            'Provide a paragraph frame with the topic sentence and connectives supplied; students insert their analysis and quotations.',
          core: 'Students write a full comparative paragraph with a topic sentence, analysis of both poems, and a connective linking them.',
          stretch:
            'Students write two paragraphs — one on enjambment/caesura and one on stanza form — creating a mini comparative essay on structure.',
        },
        resources: [
          'Second conflict poem (printed)',
          'Paragraph frame (for support)',
          'Comparative connectives reference card',
          'Lined response paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure in Three Words',
      duration: '10 minutes',
      instructions:
        'Students write three words that describe the structural effect of Poem 1 and three words for Poem 2. They then write one sentence explaining the most important structural difference between the two poems. Pairs compare their sentences and decide which is more precise. Teacher selects the strongest sentences for whole-class discussion.',
      differentiation: {
        support: 'Students choose from a bank of structural effect words: controlled, fragmented, breathless, relentless, ordered, chaotic.',
        core: 'Students generate their own three words and write their comparative sentence.',
        stretch: 'Students write a sentence that addresses why the structural difference matters in the context of each poem\'s theme.',
      },
    },
    homework:
      'Find a poem with a structural feature you have not yet analysed (e.g., a single-stanza poem, a poem with isolated single lines, or a poem where the stanzas get shorter). Write two sentences explaining the effect of the structural choice.',
    worksheetQuestions: [
      {
        question: 'Define enjambment and explain the effect it typically creates. Use an example from poetry you have studied.',
        lines: 4,
        modelAnswer:
          'Enjambment occurs when a sentence or phrase runs over from one line to the next without a punctuation mark at the line break, pulling the reader forward without pause. It typically creates a sense of momentum, urgency, or overflow. In war poetry, enjambment can mirror the unstoppable chaos of battle or the rushing thoughts of a frightened soldier — the reader has no time to pause, just as the soldier has no time to think.',
        marks: 3,
      },
      {
        question: 'What is a caesura and what effect does it create? Give an example.',
        lines: 3,
        modelAnswer:
          'A caesura is a pause within a line of poetry, created by punctuation such as a full stop, dash, comma, or ellipsis. It creates a sense of interruption, hesitation, or fracture. In conflict poetry, a mid-line pause might represent a moment of shock, a heartbeat of silence, or the abrupt end of a life — the physical gap mirrors the emotional break.',
        marks: 2,
      },
      {
        question: 'Why might a war poet choose to write in free verse rather than a regular form like a sonnet?',
        lines: 4,
        modelAnswer:
          'Free verse has no fixed metre or rhyme scheme — it is deliberately formless. A war poet might choose free verse to mirror the chaos, disorder, and unpredictability of conflict. A fixed form like a sonnet would impose order and control on the subject matter, which might undermine the poem\'s message about the senselessness of war. Free verse also allows the poet to break lines at psychologically significant moments, creating pauses and rushes that a fixed form cannot easily accommodate.',
        marks: 3,
      },
      {
        question: 'How can irregular stanza lengths reflect the content of a conflict poem? Explain with reference to a poem you have studied.',
        lines: 5,
        modelAnswer:
          'Irregular stanza lengths suggest disorder, instability, and emotional turbulence. In [poem title], the stanzas vary from [length] to [length] lines, mirroring the chaotic, unpredictable nature of [the battle/the speaker\'s emotional state]. The contrast between longer, more measured stanzas and shorter, abrupt ones creates a visual representation of the speaker\'s experience — moments of endurance interrupted by sudden shock or breakdown.',
        marks: 3,
      },
      {
        question: 'Write a topic sentence for a paragraph comparing the structural choices of two conflict poems. Include both poems\' titles and a comparative connective.',
        lines: 3,
        modelAnswer:
          'While [Poem A] uses regular quatrains and end-stopped lines to impose order and control on its subject matter, suggesting a composed, measured response to conflict, [Poem B] employs irregular stanzas and frequent enjambment that mirrors the chaos and emotional overwhelm the speaker experiences on the battlefield.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The "Look Before You Read" starter is particularly effective at demonstrating to students that structural choices are visible before a single word is read — it makes the abstract concept of structure immediately concrete.',
      'For the annotation activity, poems with varied structural features across their length work best. "Exposure" by Owen (regular stanzas, strong caesura) paired with a more fragmented contemporary poem creates a productive contrast for comparison.',
      'Students often feel less confident about structural analysis than language analysis. Reassure them that the same principle applies: always explain the effect, not just the feature.',
      'If time is tight, the comparative paragraph can be set as homework with the second poem given at the end of the lesson, and discussed at the start of Lesson 5.',
    ],
    targetedSkills: [
      '8R.5 - Analysing structural choices',
      '8R.6 - Comparing texts',
      '8W.4 - Writing analytical paragraphs',
      '8W.7 - Comparing and contrasting in writing',
    ],
  },

  // ── Lesson 5: Comparative Essay Planning and Writing ─────────────────────
  {
    id: 'y8t2-05',
    title: 'Comparing Two Conflict Poems – Planning and Essay Writing',
    text: 'Conflict Poetry Anthology',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Plan and write a structured comparative essay on two conflict poems (8W.7, 8W.8)',
      'Use comparative connectives fluently to link analysis of two poems within single paragraphs',
      'Write a thesis statement that makes a comparative argument, not just a summary',
      'Apply language, structural, and tonal analysis across a sustained piece of analytical writing',
    ],
    successCriteria: [
      'I can write a thesis statement that makes an argued, comparative claim about two poems',
      'I can write comparative paragraphs that discuss both poems in each paragraph using connectives',
      'I can avoid narrative retelling and focus on how and why poets make choices',
      'I can write a conclusion that offers a final evaluative judgement',
    ],
    keywords: [
      'thesis statement',
      'comparative connective',
      'point of comparison',
      'similarly',
      'whereas',
      'in contrast',
      'however',
      'both poets',
      'evaluative comment',
    ],
    starterActivity: {
      title: 'Strong or Weak Thesis?',
      duration: '8 minutes',
      instructions:
        'Display four thesis statements on the board — two weak (descriptive, vague) and two strong (argued, specific). Students work in pairs to sort them into strong and weak. Discuss as a class: what makes a thesis strong? Key criteria: names both poems and poets, identifies a shared theme, makes an arguable comparative claim (not just "they are both about war"). Students then attempt to write their own thesis statement for the two poems they will use in today\'s essay.',
      differentiation: {
        support:
          'Provide a thesis template: "While both [Poem A] by [Poet A] and [Poem B] by [Poet B] explore [shared theme], [Poet A] focuses on [approach A] whereas [Poet B] examines [approach B]."',
        core: 'Students evaluate the examples and write their own thesis independently.',
        stretch:
          'Students write two alternative thesis statements for the same poem pairing, each making a different comparative argument, and explain which is stronger and why.',
      },
      resources: ['Four thesis statements slide', 'Thesis template card (for support)'],
    },
    mainActivities: [
      {
        title: 'Essay Planning – Points of Comparison',
        duration: '15 minutes',
        instructions:
          'Students complete a three-row comparison planning table: rows are "Imagery/Language," "Structure/Form," and "Tone/Mood." In each row they note: what Poem A does, what Poem B does, and whether this is a similarity or difference. Teacher models the first row together on the board, selecting one quotation per poem and suggesting a connective. Students complete rows 2 and 3 independently. After planning, students choose the order of their three paragraphs — strongest point first, to create the most compelling argument.',
        differentiation: {
          support:
            'Provide the table pre-populated with quotations from both poems; students add the analysis and the similarity/difference column only.',
          core: 'Students complete the full planning table independently.',
          stretch:
            'Students add a fourth row for "Context/Historical perspective" and consider how the historical moment of each poem shapes its argument about conflict.',
        },
        resources: [
          'Three-row planning table (printed)',
          'Both poems (printed)',
          'Comparative connectives reference card',
        ],
      },
      {
        title: 'Essay Writing – 30 Minutes Sustained Writing',
        duration: '30 minutes',
        instructions:
          'Students write their comparative essay in timed conditions: Introduction (thesis statement, 3–5 sentences), Body paragraph 1 (imagery/language), Body paragraph 2 (structure/form), Body paragraph 3 (tone/mood), Conclusion (summary and evaluative judgement). Teacher circulates in the first 5 minutes checking thesis statements, then allows sustained independent writing. With 5 minutes remaining, teacher calls time and directs students to begin their conclusion if they have not already.',
        differentiation: {
          support:
            'Students write three paragraphs rather than five (drop the introduction and write a short opening sentence instead, and write a two-sentence conclusion). Provide paragraph frames for body paragraphs.',
          core: 'Students write the full five-section essay independently using their plan.',
          stretch:
            'Students aim to include an evaluative comment in each body paragraph (not just the conclusion), and write a longer conclusion that considers why understanding the differences between the two poems matters.',
        },
        resources: [
          'Lined essay paper',
          'Planning table (from previous activity)',
          'Both poems (for reference)',
          'Comparative connectives card',
          'Timer displayed',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against the Criteria',
      duration: '7 minutes',
      instructions:
        'Students re-read their essay and highlight with three different colours: (1) every comparative connective (shows they are genuinely comparing), (2) every quotation (shows they are evidencing), (3) every evaluative comment (shows they are going beyond description). Students count each colour and write their own target on a sticky note: "My next step is to add more [connectives/quotations/evaluative comments]."',
      differentiation: {
        support: 'Students highlight only comparative connectives and count whether there is at least one per body paragraph.',
        core: 'Students use all three colours and write a self-assessment target.',
        stretch: 'Students also annotate one of their evaluative comments, explaining whether it focuses on similarity, difference, or significance — and adding a sentence that addresses significance if it is missing.',
      },
    },
    homework:
      'Redraft one body paragraph of your essay, incorporating the improvement identified in your self-assessment. Aim to add at least one more evaluative comment. Submit the original and the redraft so your teacher can see the improvement.',
    worksheetQuestions: [
      {
        question: 'What is a thesis statement and what three elements should it contain?',
        lines: 4,
        modelAnswer:
          'A thesis statement is a clear, arguable claim made at the beginning of a comparative essay that the rest of the essay will support. It should contain: (1) the names of both poems and their poets; (2) the shared theme or subject; (3) an arguable comparative claim about how the poets approach the theme differently — going beyond description to make a genuine argument.',
        marks: 3,
      },
      {
        question: 'Write a comparative sentence about two conflict poems using the connective "whereas."',
        lines: 3,
        modelAnswer:
          'Whereas [Poet A] creates a tone of bitter disillusionment through the violent imagery of "[quotation]," which strips all heroism from the act of dying in battle, [Poet B] employs a more elegiac tone, using the image of "[quotation]" to suggest that the soldier\'s death, though painful, carries a kind of quiet dignity.',
        marks: 3,
      },
      {
        question: 'What is "feature-spotting" and why does it fail to score highly in a comparative essay?',
        lines: 4,
        modelAnswer:
          'Feature-spotting means identifying a technique without explaining its effect — for example, "the poet uses alliteration" with no further analysis. It fails to score highly because it demonstrates only the ability to recognise techniques, not the ability to analyse them. Examiners reward students who explain how techniques create effects, what those effects suggest about the poem\'s themes, and how the choices differ between poems — not students who merely list the features they have spotted.',
        marks: 3,
      },
      {
        question: 'Explain the difference between the alternating and block methods for structuring a comparative essay. Which is more effective and why?',
        lines: 5,
        modelAnswer:
          'The alternating method discusses both poems within each paragraph, moving between them point by point throughout the essay. The block method covers one poem fully before moving to the second. The alternating method is more effective because it forces genuine comparison throughout — every paragraph considers both poems simultaneously. The block method risks becoming two separate essays, with comparison only appearing as an afterthought in the second half, which does not fulfil the task\'s requirement to compare.',
        marks: 3,
      },
      {
        question: 'Write an evaluative comment that could appear in the conclusion of a comparative essay about two conflict poems.',
        lines: 4,
        modelAnswer:
          'Ultimately, while both poets confront the reality of human suffering in conflict, [Poet A]\'s approach is more visceral and immediate, forcing the reader to experience the physical horror of battle through graphic sensory imagery, whereas [Poet B]\'s restrained, elegiac tone creates a more lasting emotional resonance. It is [Poet B]\'s poem that stays with me longer, because the quietness of the grief feels more truthful — loss, as the poem suggests, is often not dramatic but silent and unwitnessed.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is the culmination of the poetry half of the unit. Students should be bringing together everything from Lessons 1–4: contextual awareness, imagery analysis, tone identification, and structural comment. The essay is an opportunity to see how well these skills have integrated.',
      'The 30-minute writing window is tight. Students who have a solid plan will manage; students who are still thinking about what to say when writing begins will not finish. Make clear that the plan is the most important preparation.',
      'Mark the essays against four criteria: comparative structure (are both poems discussed in each paragraph?), evidence (quotations used accurately?), analysis (techniques identified and effect explained?), evaluative comment (does the student offer a judgement, not just a description?).',
      'Feed back on essays at the start of Lesson 6 (the Shakespeare unit) to maintain momentum and provide a bridge between the two halves of the term.',
    ],
    targetedSkills: [
      '8R.6 - Comparing texts',
      '8W.7 - Writing comparatively',
      '8W.8 - Sustained analytical writing',
      '8W.9 - Drafting, revising, and evaluating own writing',
    ],
  },

  // ── Lesson 6: Introduction to Macbeth and Shakespeare's Language ──────────
  {
    id: 'y8t2-06',
    title: 'Introduction to Macbeth – Shakespeare\'s Language and Context',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the historical and theatrical context of Macbeth (8R.2)',
      'Crack key features of Early Modern English: thee/thou, verb endings, inverted word order',
      'Understand the distinction between verse and prose and what it signals',
      'Identify and define soliloquy, aside, and dramatic irony as theatrical conventions',
    ],
    successCriteria: [
      'I can explain when and why Macbeth was written and link it to its themes',
      'I can decode Early Modern English vocabulary and inverted syntax',
      'I can explain the difference between verse and prose in Shakespeare and what a switch signals',
      'I can define soliloquy, aside, and dramatic irony and identify them in an extract',
    ],
    keywords: [
      'tragedy',
      'ambition',
      'iambic pentameter',
      'verse',
      'prose',
      'soliloquy',
      'aside',
      'dramatic irony',
      'Early Modern English',
      'hamartia',
    ],
    starterActivity: {
      title: 'Decode the Shakespeare',
      duration: '8 minutes',
      instructions:
        'Display five lines from Macbeth on the board — in original Early Modern English. Students work in pairs to translate each line into modern English. Share answers. Teacher explains the key decoding tools: thee/thou/thy = you/your; inverted word order (rearrange subject-verb-object); verb endings (-est, -eth); contractions (\'tis, \'twas, o\'er, ne\'er). Reassure students that Shakespeare is not a foreign language — the code is crackable with these five tools.',
      differentiation: {
        support:
          'Provide a decoder card with all five tools listed with examples. Students use it to attempt the translations.',
        core: 'Students attempt translations in pairs before consulting the decoder card.',
        stretch:
          'Students identify which of the five tools they needed for each line and suggest what effect the original phrasing has compared to the modern equivalent.',
      },
      resources: ['Five Shakespeare lines slide', 'Decoder card'],
    },
    mainActivities: [
      {
        title: 'Context and Plot Overview',
        duration: '18 minutes',
        instructions:
          'Teacher delivers a structured contextual input (10 minutes): when and why Macbeth was written (1606, James I, interest in witchcraft), the brief plot arc (Macbeth\'s rise and fall), the central question (what happens when ambition overrides morality?), and the five key theatrical conventions (soliloquy, aside, dramatic irony, verse vs prose, iambic pentameter). Students take notes on a structured handout with gaps to fill. After the input, students have 5 minutes to discuss in pairs: "What do you think Macbeth\'s greatest mistake is, based on what you have just heard?" Teacher takes brief feedback.',
        differentiation: {
          support:
            'Provide a fully gapped notes sheet with key words to fill in (rather than extended note-taking).',
          core: 'Students take notes on a partially structured handout.',
          stretch:
            'Students annotate their notes with predictions: "I think this suggests that the play will...", "The theme of [X] will probably appear when..."',
        },
        resources: [
          'Context input slides',
          'Structured notes handout (differentiated)',
          'Plot overview timeline',
        ],
      },
      {
        title: 'First Extract Reading: Verse, Prose, and Theatrical Conventions',
        duration: '24 minutes',
        instructions:
          'Read an extract from Act 1, Scenes 1–3 (the witches\' opening and Macbeth\'s first soliloquy-style aside "Stars, hide your fires") aloud together. After reading, students answer three questions in writing: (1) Is this extract written in verse or prose? How can you tell? (2) Identify one moment of dramatic irony in the extract and explain what the audience knows that the characters do not. (3) What does the aside reveal about Macbeth\'s private thoughts that his public behaviour does not show? Students swap books and peer-mark using teacher\'s model answers displayed.',
        differentiation: {
          support:
            'Provide the three questions with page/line references guiding students to the relevant moments.',
          core: 'Students answer all three questions independently from memory and the extract.',
          stretch:
            'Students write a fourth response: "What does the contrast between Macbeth\'s public role as loyal general and his private thoughts tell us about the play\'s central theme of deception?"',
        },
        resources: [
          'Printed extract from Act 1 Scenes 1–3',
          'Three analysis questions sheet',
          'Model answers slide for peer-marking',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Convention Quick Quiz',
      duration: '10 minutes',
      instructions:
        'Teacher asks five rapid questions — one per theatrical convention studied today. Students write answers on mini-whiteboards and hold up on the count of three. Teacher addresses any widespread misconceptions immediately. End with a check: "In one sentence, why do you think Shakespeare uses soliloquies in Macbeth rather than just showing the audience his actions?"',
      differentiation: {
        support: 'Students can look at their notes handout during the quiz.',
        core: 'Students answer from memory.',
        stretch: 'Students write an extended answer to the final question (3–4 sentences) explaining the dramatic and psychological function of the soliloquy.',
      },
    },
    homework:
      'Read the plot summary of Macbeth Acts 1 and 2. Write down: three things Macbeth does, three things Lady Macbeth does, and one question you have about a character\'s motivation. Bring to Lesson 7.',
    worksheetQuestions: [
      {
        question: 'Why was Macbeth written in 1606? Explain how the historical context shaped at least one aspect of the play.',
        lines: 4,
        modelAnswer:
          'Macbeth was written during the reign of King James I, who was fascinated by witchcraft and had written a book called Daemonologie on the subject. Shakespeare likely included the three witches partly to appeal to his royal audience. The play\'s exploration of the divine right of kings and the consequences of murdering a monarch also spoke directly to James I\'s political anxieties, particularly after the Gunpowder Plot of 1605.',
        marks: 3,
      },
      {
        question: 'Translate the following into modern English: "Thou art too full o\' the milk of human kindness."',
        lines: 2,
        modelAnswer:
          '"You are too full of the milk of human kindness." In this line, Lady Macbeth is telling Macbeth that he is too gentle and compassionate to seize the throne through violence — she sees his conscience as a weakness.',
        marks: 2,
      },
      {
        question: 'What is iambic pentameter? Why does it matter when a character breaks this rhythm?',
        lines: 4,
        modelAnswer:
          'Iambic pentameter is a rhythmic pattern of ten syllables per line, alternating unstressed and stressed beats (da-DUM da-DUM, five times). Shakespeare\'s noble characters speak in iambic pentameter when they are composed and in control. When a character breaks the rhythm — through irregular lines, extra syllables, or missing beats — it signals emotional disturbance or psychological crisis. Macbeth\'s speech often breaks down rhythmically at moments of extreme guilt or fear.',
        marks: 3,
      },
      {
        question: 'Define dramatic irony. Give an example of dramatic irony from the opening of Macbeth.',
        lines: 4,
        modelAnswer:
          'Dramatic irony occurs when the audience knows something that the characters on stage do not. In the opening of Macbeth, King Duncan praises Macbeth as his "worthiest cousin" and a loyal, heroic warrior. The audience, however, has already heard Macbeth\'s private ambitions and knows he is already contemplating murder. The irony of Duncan\'s trust makes the scene deeply unsettling.',
        marks: 3,
      },
      {
        question: 'Why does Shakespeare switch a character from verse to prose? What does it usually signal?',
        lines: 3,
        modelAnswer:
          'Shakespeare typically gives high-status characters and serious moments verse (iambic pentameter), while lower-status characters and comedy are written in prose. When a high-status character switches to prose it usually signals a breakdown — emotional, psychological, or moral. Lady Macbeth\'s sleepwalking scene is written in prose, mirroring her mental disintegration and the collapse of the control she once had over language and herself.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson works best if students have no prior experience of Shakespeare — use that unfamiliarity as a starting point. Many students are intimidated by the language, and the decoder activity is specifically designed to demystify Early Modern English quickly.',
      'When reading the extract together, use different voices for different characters to make the theatrical nature of the text immediate. If possible, have two students read as the witches in unison — the effect is genuinely unsettling.',
      'Do not expect students to understand every word on first reading. Model your own process of navigating confusion: "I don\'t know this word, so I\'ll read the whole sentence and use context to work it out." This normalises productive confusion.',
      'The link between Macbeth\'s ambition theme and the conflict poetry studied in Lessons 1–5 is worth making explicit: both explore what happens when human beings pursue power or violence beyond their moral limits.',
    ],
    targetedSkills: [
      '8R.1 - Reading for meaning',
      '8R.2 - Understanding context',
      '8R.3 - Understanding language and form',
      '8W.1 - Writing for purpose',
    ],
  },

  // ── Lesson 7: Power and Ambition in Macbeth ──────────────────────────────
  {
    id: 'y8t2-07',
    title: 'Power and Ambition in Macbeth – Close Reading Key Scenes',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare presents Macbeth\'s ambition and its consequences in Acts 1–3 (8R.3)',
      'Identify how Lady Macbeth manipulates Macbeth using emotional pressure and masculine shame',
      'Explain the significance of the dagger hallucination as a theatrical device and psychological symbol',
      'Write an analytical paragraph about how Shakespeare presents power and ambition (8W.4)',
    ],
    successCriteria: [
      'I can identify Macbeth\'s fatal flaw (hamartia) and explain how it drives the plot',
      'I can analyse how Lady Macbeth uses language to manipulate Macbeth in Act 1 Scene 7',
      'I can explain what the dagger hallucination reveals about Macbeth\'s psychological state',
      'I can write a paragraph about power/ambition with an embedded quotation and a developed analysis',
    ],
    keywords: [
      'hamartia',
      'vaulting ambition',
      'manipulation',
      'guilt',
      'hallucination',
      'masculinity',
      'tragic hero',
      'paranoia',
      'conscience',
      'tyranny',
    ],
    starterActivity: {
      title: 'Ranking the Influences',
      duration: '8 minutes',
      instructions:
        'Display four "suspects" on the board: The Witches, Lady Macbeth, Macbeth\'s own ambition, and Fate. Students work in pairs to rank them from most to least responsible for the murder of King Duncan, giving one reason for each ranking. Teacher takes class feedback — expect disagreement and encourage it. Introduce the idea of Macbeth as a tragic hero: a character who is fundamentally good but destroyed by a fatal flaw (hamartia). The question is whether the flaw is his alone, or whether external forces awaken it.',
      differentiation: {
        support:
          'Provide one sentence of description for each "suspect" before students rank them.',
        core: 'Students rank all four and give a reason for each.',
        stretch:
          'Students argue that the "most responsible" answer is ambiguous and that the play\'s power lies precisely in making this question unanswerable. They write one sentence of justification.',
      },
      resources: ['Four suspects slide', 'Ranking activity sheet'],
    },
    mainActivities: [
      {
        title: 'Scene Close Reading: Act 1 Scene 7 and Act 2 Scene 1',
        duration: '25 minutes',
        instructions:
          'Divide the class into two groups. Group A analyses Lady Macbeth\'s persuasion speech (Act 1, Scene 7: "Was the hope drunk..."). Group B analyses the dagger soliloquy (Act 2, Scene 1: "Is this a dagger which I see before me..."). Each group has 15 minutes to: (a) identify and annotate three key quotations, (b) answer the focus question on their extract card. Group A: "How does Lady Macbeth use language to destroy Macbeth\'s resistance?" Group B: "What does the dagger soliloquy reveal about Macbeth\'s state of mind?" After annotation, pairs from each group share their findings with a partner from the other group (expert jigsaw).',
        differentiation: {
          support:
            'Pre-annotate the extract with one quotation already highlighted per section. Students add two more and the analysis.',
          core: 'Students annotate and analyse independently before the jigsaw.',
          stretch:
            'Students prepare a "director\'s note" for their extract: how would they stage this scene to convey the psychological tension? What would the actor playing Macbeth/Lady Macbeth do physically?',
        },
        resources: [
          'Act 1 Scene 7 extract (Group A)',
          'Act 2 Scene 1 extract (Group B)',
          'Extract focus question cards',
          'Annotation pens',
        ],
      },
      {
        title: 'Analytical Paragraph: Power and Ambition',
        duration: '17 minutes',
        instructions:
          'Students write an analytical paragraph (12 minutes) in response to the question: "How does Shakespeare present the theme of ambition in Macbeth?" Students should use at least one quotation from the scene they studied in the jigsaw and must include: a point about ambition, an embedded quotation, an analysis of how the language works, and a comment on the effect on the audience. Teacher models the opening two sentences on the board before releasing students. Spend 5 minutes sharing and discussing two student paragraphs under the visualiser.',
        differentiation: {
          support:
            'Provide a PEEL paragraph frame (Point, Evidence, Explain, Link) with prompts for each section.',
          core: 'Students write independently using the PEEL structure.',
          stretch:
            'Students write a second paragraph on the same theme using a different quotation and a different aspect of ambition (e.g., Lady Macbeth\'s ambition vs Macbeth\'s).',
        },
        resources: [
          'PEEL paragraph frame (for support)',
          'Both extracts (for reference)',
          'Lined response paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Where Are We Now? – Macbeth\'s Moral Journey',
      duration: '10 minutes',
      instructions:
        'Display a moral spectrum line on the board running from "Entirely good" to "Entirely evil." Teacher reads out six moments from Acts 1–3 in chronological order. After each moment, students hold up a card (or move to a position in the room) showing where on the spectrum they would place Macbeth at that moment. Discuss: is Macbeth the same person at the end of Act 3 as he was at the beginning of Act 1? What has changed — and what has remained the same?',
      differentiation: {
        support: 'Provide a brief one-sentence description of each moment before students respond.',
        core: 'Students place Macbeth on the spectrum and give one reason for their choice.',
        stretch: 'Students argue whether Shakespeare wants the audience to pity or condemn Macbeth at this point, and which is the more powerful response.',
      },
    },
    homework:
      'Find three quotations from Acts 1–3 that show Macbeth\'s ambition, guilt, and fear respectively. For each quotation, write one sentence explaining what it reveals about his character at that moment in the play.',
    worksheetQuestions: [
      {
        question: 'What is Macbeth\'s hamartia? Use a quotation from the play in your answer.',
        lines: 4,
        modelAnswer:
          'Macbeth\'s hamartia — his fatal flaw — is his "vaulting ambition, which o\'erleaps itself." This means his ambition is so extreme that it overreaches and destroys him. Shakespeare signals this flaw early: even before meeting the witches, Macbeth\'s mind leaps to violent thoughts, revealing that the desire for power was already present inside him, waiting to be ignited.',
        marks: 3,
      },
      {
        question: 'How does Lady Macbeth use the idea of masculinity to persuade Macbeth to kill Duncan? Use a quotation in your answer.',
        lines: 5,
        modelAnswer:
          'Lady Macbeth attacks Macbeth\'s identity as a man, arguing that hesitation makes him less than male. She tells him: "When you durst do it, then you were a man" — equating manhood with the willingness to commit murder. This is a form of emotional manipulation that bypasses rational argument. Macbeth does not capitulate because he is convinced the murder is right; he capitulates because he cannot bear Lady Macbeth\'s contempt for his courage. Shakespeare shows that masculinity and power are distorted concepts in this world.',
        marks: 4,
      },
      {
        question: 'What does the floating dagger in Act 2 Scene 1 represent? What does it tell us about Macbeth\'s state of mind?',
        lines: 4,
        modelAnswer:
          'The floating dagger is a hallucination — Macbeth himself acknowledges it is "a dagger of the mind, a false creation / Proceeding from the heat-oppressed brain." It represents the tangled mixture of guilt, desire, and fear inside Macbeth at this moment. The dagger points him towards Duncan\'s chamber, as though fate or his own guilty imagination is directing his hand. It shows that Macbeth\'s mind is already fracturing under the weight of what he is about to do — the boundary between reality and imagination is beginning to break down.',
        marks: 3,
      },
      {
        question: 'Explain how the banquet scene (Act 3 Scene 4) shows the political consequences of Macbeth\'s ambition.',
        lines: 4,
        modelAnswer:
          'The banquet was meant to be a public display of Macbeth\'s kingship — a symbol of order, community, and shared prosperity. Instead, the appearance of Banquo\'s ghost destroys it. Macbeth\'s outburst in front of his thanes exposes his guilt and instability to his court. Politically, a king who cannot control his own behaviour at a public dinner cannot command loyalty. The banquet\'s collapse symbolises the collapse of Macbeth\'s reign — the violent means by which he gained power is now destroying the power itself.',
        marks: 3,
      },
      {
        question: 'Write a paragraph about how Shakespeare presents the theme of ambition. Include an embedded quotation.',
        lines: 6,
        modelAnswer:
          'Shakespeare presents ambition in Macbeth as a force that begins as a private temptation and rapidly becomes a public catastrophe. When Macbeth admits that "vaulting ambition... o\'erleaps itself," the verb "o\'erleaps" suggests ambition that has gone so far beyond its proper limits that it has become self-destructive — it overshoots its target and falls. The metaphor of leaping implies recklessness, a failure to calculate the consequences of one\'s actions. For the audience, this moment functions as a warning: Macbeth knows the danger of his own ambition but is unable to stop himself. Shakespeare suggests that the most dangerous ambition is not the kind that ignores consequences, but the kind that sees them clearly and proceeds anyway.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The "Ranking the Influences" starter is deliberately provocative — there is no correct answer, which is the point. Students who have been in the habit of looking for right answers in English lessons need to be encouraged to argue and justify rather than select the "correct" option.',
      'The jigsaw structure works well here because it means every student becomes an expert on one scene and must teach that scene to a partner — this deepens understanding and builds confidence.',
      'When students write their analytical paragraph, the most common pitfall is describing what happens in the scene rather than analysing how Shakespeare uses language. Circulate actively and ask: "Are you writing about what Macbeth does, or about how Shakespeare uses language to show us what Macbeth does?"',
      'The moral spectrum plenary is engaging and generates real debate. Use it to reinforce the idea that Macbeth is a character study in moral complexity, not a simple villain — this understanding is essential for analytical writing about him.',
    ],
    targetedSkills: [
      '8R.3 - Analysing language in Shakespeare',
      '8R.4 - Exploring character and motivation',
      '8R.5 - Understanding structural and dramatic choices',
      '8W.4 - Writing analytical paragraphs with embedded quotation',
    ],
  },

  // ── Lesson 8: The Soliloquy – "Tomorrow, and tomorrow, and tomorrow" ──────
  {
    id: 'y8t2-08',
    title: 'Soliloquy and Stagecraft – Analysing "Tomorrow, and tomorrow, and tomorrow"',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the dramatic function and psychological purpose of soliloquy in Macbeth (8R.3)',
      'Perform a close reading of "Tomorrow, and tomorrow, and tomorrow" (Act 5 Scene 5), analysing language, structure, and imagery',
      'Write about stagecraft, using the term "audience" and considering how the soliloquy would be performed',
      'Develop an extended analytical response to a Shakespeare soliloquy (8W.8)',
    ],
    successCriteria: [
      'I can explain the dramatic function of soliloquy in Macbeth and name two key soliloquies',
      'I can analyse the language of the "Tomorrow" soliloquy with reference to specific quotations',
      'I can write about how the soliloquy would be staged, using theatrical vocabulary',
      'I can write an extended analytical response (at least three paragraphs) about the soliloquy',
    ],
    keywords: [
      'soliloquy',
      'nihilism',
      'stagecraft',
      'proxemics',
      'repetition',
      'metaphor',
      'imagery',
      'performance',
      'theatrical effect',
      'audience',
    ],
    starterActivity: {
      title: 'Soliloquy Performed – Three Versions',
      duration: '8 minutes',
      instructions:
        'Play three short clips (or read three contrasting performances) of the "Tomorrow" soliloquy — one performed angrily, one with quiet resignation, one with dark sarcasm. Students discuss in pairs: which version best matches their interpretation of the text? Why? Take class feedback. Establish: there is no single "correct" way to perform a soliloquy — it is an interpretation. This is why thinking about performance is a genuine analytical skill, not just speculation.',
      differentiation: {
        support:
          'Provide three adjective options to describe each performance (e.g., angry/resigned/sarcastic) and ask students to match them before discussing which fits the text best.',
        core: 'Students discuss freely and justify their preference with reference to specific lines.',
        stretch:
          'Students write a director\'s note (3–4 sentences) advising the actor on how to deliver the first four lines, with reasons.',
      },
      resources: ['Three performance clips or readings', 'Printed text of the soliloquy'],
    },
    mainActivities: [
      {
        title: 'Close Reading: Line by Line',
        duration: '22 minutes',
        instructions:
          'Students work through the soliloquy in four sections, spending 4–5 minutes on each. For each section, they annotate: (1) one language technique and its effect; (2) one word they find particularly powerful and why; (3) what this section reveals about Macbeth\'s state of mind. Teacher models the first section together: the triple repetition of "tomorrow" (creating a sense of meaningless, endless time), the metaphor of life as "a walking shadow" (suggesting unreality and impermanence). Students work in pairs for sections 2–4. Class discussion after each section to check understanding.',
        differentiation: {
          support:
            'Provide the soliloquy with three key quotations pre-highlighted in each section. Students focus their annotation on these quotations.',
          core: 'Students annotate all four sections with their own selected quotations.',
          stretch:
            'Students also track the development of Macbeth\'s argument across the four sections: does his nihilism deepen, or is there a moment where it wavers?',
        },
        resources: [
          'Printed text of the "Tomorrow" soliloquy (double-spaced)',
          'Four-section annotation guide',
          'Annotation pens',
        ],
      },
      {
        title: 'Extended Written Response',
        duration: '22 minutes',
        instructions:
          'Students write an extended analytical response (minimum three paragraphs) to the question: "How does Shakespeare use the \'Tomorrow\' soliloquy to present the consequences of Macbeth\'s ambition?" Paragraph 1: the opening repetition and what it reveals. Paragraph 2: the central metaphor of life as performance ("a poor player / That struts and frets his hour upon the stage"). Paragraph 3: the final nihilistic conclusion and its effect on the audience. Students should refer to stagecraft in at least one paragraph — how the soliloquy would be performed and experienced in a theatre. Teacher circulates, prompting students to move from language analysis to wider thematic connection.',
        differentiation: {
          support:
            'Provide a guided paragraph structure for each of the three paragraphs, with sentence starters and the key quotation to analyse.',
          core: 'Students write three independent paragraphs using their annotations.',
          stretch:
            'Students add a fourth paragraph making a connection between this soliloquy and another soliloquy studied earlier in the unit (e.g., the dagger soliloquy), comparing what the two moments reveal about Macbeth\'s psychological journey.',
        },
        resources: [
          'Guided paragraph frames (for support)',
          'Lined response paper',
          'Annotations from previous activity',
        ],
      },
    ],
    plenaryActivity: {
      title: 'In the Audience: What Would You Feel?',
      duration: '8 minutes',
      instructions:
        'Students write a response from the perspective of an audience member in the Globe Theatre watching this soliloquy in 1606. What would they feel? Would they pity Macbeth, despise him, or both? Why? Students share responses. Teacher draws out the key idea: great tragedy makes us feel complex, contradictory emotions. We can simultaneously understand Macbeth\'s despair and hold him responsible for creating the situation that caused it. This dual response — pity and condemnation — is what makes him a tragic hero.',
      differentiation: {
        support: 'Students choose from three response options: "I pity Macbeth because...", "I condemn Macbeth because...", "I feel both pity and condemnation because..."',
        core: 'Students write a 3–4 sentence audience response independently.',
        stretch: 'Students consider how a 1606 audience (who believed strongly in the divine right of kings) would respond differently from a modern audience, and what that tells us about how meaning changes across time.',
      },
    },
    homework:
      'Learn the first eight lines of the "Tomorrow" soliloquy by heart. Also: write a one-paragraph explanation of what these lines reveal about Macbeth\'s state of mind at this point in the play, using at least two quotations.',
    worksheetQuestions: [
      {
        question: 'What is the dramatic function of a soliloquy? Why is it particularly important in Macbeth?',
        lines: 4,
        modelAnswer:
          'A soliloquy allows a character to share their innermost thoughts with the audience while alone on stage, revealing what they truly think and feel beneath their public behaviour. In Macbeth, soliloquies are particularly important because Macbeth\'s public role — as warrior, king, host — is so different from his private self. The soliloquies reveal his guilt, fear, and moral disintegration, creating dramatic irony by showing the audience the truth that other characters cannot see.',
        marks: 3,
      },
      {
        question: 'Analyse the effect of the triple repetition of "tomorrow" in the opening of the soliloquy.',
        lines: 5,
        modelAnswer:
          'The triple repetition of "tomorrow" creates a sense of meaningless, endless time — each day simply gives way to another identical day, with nothing to differentiate them or give them purpose. The repetition mimics the monotony and futility that Macbeth now feels about his own existence. It has a hypnotic, almost incantatory quality, as though he is speaking to himself in a kind of trance. The word "tomorrow" usually carries a sense of hope or possibility; here, its repetition drains it of meaning, making it a symbol of hopelessness rather than future promise.',
        marks: 4,
      },
      {
        question: 'Explain the metaphor of life as "a poor player / That struts and frets his hour upon the stage." What does this suggest about Macbeth\'s view of human existence?',
        lines: 5,
        modelAnswer:
          'The metaphor compares human life to the performance of a bad actor — one who is self-important ("struts"), anxious ("frets"), but only present briefly ("his hour") before being forgotten. The word "poor" suggests inadequacy and pity. The theatrical setting is deliberately ironic: this metaphor is spoken in a play, by an actor. Shakespeare layers the idea — life is a performance, and even our experience of watching this play is a kind of performance. For Macbeth, the metaphor reveals a complete nihilism: life is not meaningful action but mere posturing, signifying nothing.',
        marks: 4,
      },
      {
        question: 'How might a director stage the "Tomorrow" soliloquy to emphasise Macbeth\'s psychological isolation?',
        lines: 4,
        modelAnswer:
          'A director might have Macbeth stand alone in the centre of a vast, empty stage, with cold, blue-grey lighting that emphasises the emptiness around him. The absence of other characters would visually embody his isolation. He might speak quietly rather than declaiming, as though the speech is barely for the audience at all — as though he is thinking aloud in a void. A slow pace with long pauses between the repeated "tomorrows" would allow the weight of each word to register. The contrast between his stillness and the noise and action of the approaching battle offstage would heighten the sense of a man who has withdrawn entirely from the world he fought so hard to control.',
        marks: 3,
      },
      {
        question: 'How does the "Tomorrow" soliloquy show what ambition ultimately leads to in Macbeth?',
        lines: 5,
        modelAnswer:
          'The soliloquy is the culmination of Macbeth\'s arc: a man who killed for power, only to find that power is meaningless. He began the play with "vaulting ambition" — a desperate hunger for kingship. Now that he has been king for years, his conclusion is that life "signifies nothing." The ambition that drove every act of violence has consumed everything he valued — his wife, his friends, his conscience, his sense of purpose — and left him with only emptiness. Shakespeare presents ambition not as a path to greatness but as a path to destruction, with nihilism as its final destination.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is perhaps the most intellectually ambitious lesson of the unit. The nihilism of the "Tomorrow" soliloquy can be difficult for Year 8 students to connect with emotionally, but the starter activity (watching three different performances) tends to make it immediate and accessible.',
      'The theatrical metaphor within the soliloquy ("a poor player...") is worth dwelling on — it is a moment of genuine meta-theatrical self-awareness, and higher-attaining students will be fascinated by the idea of an actor in a play about life-as-performance.',
      'The stagecraft writing task is demanding: students who are used to writing only about language need explicit guidance to write about performance. Scaffold this with the phrase "If I were directing this scene, I would...". They can use this tentative register without it weakening their analysis.',
      'Learning the lines for homework is valuable not just for memorisation but because saying the lines aloud at home makes the rhythm and meaning click in ways that silent reading often does not.',
    ],
    targetedSkills: [
      '8R.3 - Analysing language, form, and structure',
      '8R.5 - Understanding dramatic devices and stagecraft',
      '8W.4 - Writing analytical paragraphs',
      '8W.8 - Sustained analytical writing',
    ],
  },

  // ── Lesson 9: Macbeth and Julius Caesar – Comparative Extract Work ─────────
  {
    id: 'y8t2-09',
    title: 'Macbeth and Julius Caesar – Comparing Persuasion Scenes',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Compare how Shakespeare presents persuasion and manipulation in Macbeth and Julius Caesar (8R.6)',
      'Identify the different rhetorical strategies used by Lady Macbeth and Cassius and analyse their language',
      'Write a comparative analytical paragraph about how Shakespeare explores power and language across two plays',
      'Develop evaluative skills: which portrayal of manipulation is more disturbing and why? (8W.7)',
    ],
    successCriteria: [
      'I can identify at least two differences between the persuasion methods of Lady Macbeth and Cassius',
      'I can analyse specific language choices in each scene and explain their effect on the target character',
      'I can write a comparative paragraph about the two scenes using at least two connectives',
      'I can make an evaluative judgement about which scene is more dramatically effective and support it',
    ],
    keywords: [
      'persuasion',
      'manipulation',
      'rhetoric',
      'emotional manipulation',
      'intellectual seduction',
      'honour',
      'masculinity',
      'comparative',
      'Julius Caesar',
      'Cassius',
    ],
    starterActivity: {
      title: 'Two Types of Persuasion',
      duration: '8 minutes',
      instructions:
        'Display two short extracts on the board — one a brief segment of Lady Macbeth\'s persuasion (Act 1 Scene 7) and one from Cassius\'s persuasion of Brutus (Julius Caesar Act 1 Scene 2). Without any context, students identify which speaker uses emotional pressure and which uses rational/rhetorical argument. Share reasoning. Introduce Julius Caesar: brief context (Rome, 44 BC, fear of one-man rule, Brutus as idealist who believes killing Caesar is patriotic). Establish the comparison question for the lesson: "Whose method is more effective? Whose is more dangerous?"',
      differentiation: {
        support:
          'Provide three key words for each method — emotional/physical/shame for Lady Macbeth; logical/patriotic/flattering for Cassius — and ask students to match words to extracts.',
        core: 'Students identify the methods from the extracts and justify their identification.',
        stretch:
          'Students consider why Shakespeare uses two completely different methods of persuasion in two plays written seven years apart, and what this might suggest about his thinking about power.',
      },
      resources: ['Two extract comparison slide', 'Brief Julius Caesar context card'],
    },
    mainActivities: [
      {
        title: 'Paired Scene Analysis with Comparison Grid',
        duration: '25 minutes',
        instructions:
          'Students receive both extracts in full (Lady Macbeth Act 1 Scene 7; Cassius Act 1 Scene 2 Julius Caesar). They read both and complete a four-row comparison grid: rows covering (1) the manipulator\'s strategy, (2) the language techniques used, (3) the victim\'s response/reaction, and (4) what the manipulation reveals about power in each play. Students work in pairs, spending 10 minutes on each extract before filling in the comparison column. Teacher circulates, probing with questions: "Cassius uses the word \'honour\' repeatedly — what is he actually appealing to in Brutus?" "Lady Macbeth challenges Macbeth\'s masculinity — why is that her weapon of choice?"',
        differentiation: {
          support:
            'Provide the grid with the "strategy" row pre-completed for both plays. Students complete rows 2–4.',
          core: 'Students complete the full grid independently in pairs.',
          stretch:
            'Students add a fifth row: "What does the manipulator\'s method reveal about their understanding of the person they are manipulating?" This requires genuine psychological insight.',
        },
        resources: [
          'Lady Macbeth Act 1 Scene 7 extract (printed)',
          'Cassius Act 1 Scene 2 Julius Caesar extract (printed)',
          'Four-row comparison grid',
        ],
      },
      {
        title: 'Comparative Writing: Two Paragraphs',
        duration: '17 minutes',
        instructions:
          'Students write two comparative paragraphs using their grid. Paragraph 1: "Both Shakespeare plays feature a persuader who exploits the target\'s greatest vulnerability..." (develop with evidence from both plays). Paragraph 2: "However, while Lady Macbeth uses [method], Cassius uses [contrasting method]..." (develop with contrasting evidence). After 14 minutes, students swap books with a partner. Partners underline any comparative connective they find and circle any evaluative comment. If either is absent, they suggest where one could be added.',
        differentiation: {
          support:
            'Provide the opening topic sentence for each paragraph; students complete the analysis and evidence sections.',
          core: 'Students write both paragraphs independently, incorporating connectives and at least one evaluative comment.',
          stretch:
            'Students write a third paragraph that makes an evaluative judgement: "The more psychologically disturbing method is [Lady Macbeth\'s / Cassius\'s] because..." They must justify with specific language analysis.',
        },
        resources: [
          'Comparison grid (from previous activity)',
          'Comparative connectives card',
          'Lined response paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Victim\'s Perspective',
      duration: '10 minutes',
      instructions:
        'Students write 4–5 sentences from the perspective of Macbeth or Brutus at the moment they decide to commit the act of political violence. What are they thinking? What are they feeling? How has the persuasion shaped their decision? Students share responses. Teacher uses these to make a final analytical point: the most effective manipulation is the kind that makes the victim feel they have chosen freely — both Lady Macbeth and Cassius achieve this, and that is why both plays are so disturbing.',
      differentiation: {
        support: 'Students write from the perspective of the character they know best (Macbeth).',
        core: 'Students choose either character and write in the first person.',
        stretch: 'Students write a brief comparison: how does the internal experience of Macbeth differ from that of Brutus at the moment of decision? What does this tell us about the difference between the two plays?',
      },
    },
    homework:
      'Read the brief plot summary of Julius Caesar. Write a paragraph comparing Brutus and Macbeth as tragic heroes: what do they share, and how do they differ? Use the word "whereas" at least once in your paragraph.',
    worksheetQuestions: [
      {
        question: 'Briefly explain the historical context of Julius Caesar. Why does Brutus join the conspiracy against Caesar?',
        lines: 4,
        modelAnswer:
          'Julius Caesar is set in ancient Rome. Julius Caesar has become the most powerful man in the Roman Republic, and a group of senators fear he will declare himself king, destroying the republic\'s democratic traditions. Brutus joins the conspiracy not out of personal ambition but out of political idealism — he believes that killing Caesar is a patriotic act that will save Rome from tyranny. Unlike Macbeth, who kills for personal power, Brutus kills out of a (misguided) sense of duty.',
        marks: 3,
      },
      {
        question: 'Compare the persuasion methods of Lady Macbeth and Cassius. What is the key difference?',
        lines: 5,
        modelAnswer:
          'Lady Macbeth uses emotional manipulation: she attacks Macbeth\'s identity as a man ("When you durst do it, then you were a man"), questions his love, and employs shocking violent imagery. She does not argue that the murder is right — she argues that Macbeth is weak if he does not commit it. Cassius, by contrast, uses intellectual seduction: he appeals to Brutus\'s sense of Roman honour, his pride in the republic, and his noble ancestry. His language is measured and rhetorical, building a logical (if distorted) patriotic case. The key difference is that Lady Macbeth exploits shame and emotion while Cassius exploits reason and pride.',
        marks: 4,
      },
      {
        question: 'Analyse the word "honour" in Cassius\'s persuasion of Brutus. Why does Cassius use this word repeatedly?',
        lines: 4,
        modelAnswer:
          'Cassius uses "honour" repeatedly because he understands that Brutus\'s greatest vulnerability is his sense of Roman virtue and duty. By repeatedly framing the assassination as an honourable act — a patriotic duty to Rome and to the republic — Cassius makes it almost impossible for Brutus to refuse without feeling that he is betraying his deepest values. The word "honour" becomes a rhetorical trap: it redefines murder as nobility, making the act feel not only acceptable but necessary. This is more sophisticated manipulation than Lady Macbeth\'s because it co-opts the victim\'s own moral framework.',
        marks: 4,
      },
      {
        question: 'Write a comparative topic sentence for a paragraph about how Shakespeare explores the theme of manipulation in Macbeth and Julius Caesar.',
        lines: 3,
        modelAnswer:
          'Both Macbeth and Julius Caesar explore manipulation as a force that exploits its victim\'s most fundamental weakness: in Macbeth, Lady Macbeth targets Macbeth\'s fragile sense of masculinity, while in Julius Caesar, Cassius targets Brutus\'s idealistic pride in Roman honour — and in both cases, the result is political murder that the manipulated character has been made to feel they chose freely.',
        marks: 3,
      },
      {
        question: 'Which method of manipulation do you find more disturbing — Lady Macbeth\'s or Cassius\'s? Justify your view with evidence from both plays.',
        lines: 6,
        modelAnswer:
          'Lady Macbeth\'s method is more disturbing because it is more visceral and personal. While Cassius appeals to abstract principles, Lady Macbeth attacks the most intimate aspects of Macbeth\'s identity — his masculinity, his love for her, his courage. The image of dashing out the brains of her own nursing baby is designed to shock him into silence, not to persuade him rationally. The violence of her language reflects the violence she is demanding. Furthermore, their relationship means that her manipulation feels like a betrayal of trust, not just a political gambit. Cassius exploits Brutus\'s public values; Lady Macbeth destroys Macbeth\'s private self — and that, I would argue, is the more devastating form of power.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students do not need to have read Julius Caesar in full to engage with this lesson — the brief context card and the extract are sufficient. Frame the comparison as an opportunity to see Shakespeare thinking about the same problem (political violence) from a different angle seven years later.',
      'The comparison grid is the key scaffold for the writing task. Students who complete it thoroughly will find the comparative paragraphs manageable; students who rush it will struggle to sustain the comparison in writing. Build in time to check grids before writing begins.',
      'The "victim\'s perspective" plenary is designed to develop empathy and deepen character understanding. It also generates creative writing that can reveal misconceptions — students who write Macbeth\'s internal monologue as pure excitement (with no guilt) clearly need to revisit the Act 2 evidence.',
      'If the class is ready for it, the meta-point about manipulation making victims feel they have chosen freely is philosophically rich and worth dwelling on — it connects to questions of free will and responsibility that are central to both tragedies.',
    ],
    targetedSkills: [
      '8R.3 - Analysing language in Shakespeare',
      '8R.6 - Comparing texts across a playwright\'s work',
      '8W.4 - Analytical paragraph writing',
      '8W.7 - Writing comparatively across two texts',
    ],
  },

  // ── Lesson 10: End-of-Term Assessment ────────────────────────────────────
  {
    id: 'y8t2-10',
    title: 'End-of-Term Assessment – Conflict Poetry and Macbeth',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Demonstrate analytical writing skills developed across the term in timed assessment conditions (8W.8, 8W.9)',
      'Apply skills from conflict poetry (imagery, tone, structure, comparison) and Shakespeare (language analysis, dramatic effect, theme) in a structured response',
      'Write a well-organised, evidenced analytical essay under assessment conditions',
      'Self-assess and identify targets for future improvement',
    ],
    successCriteria: [
      'I can write a thesis-led introduction that identifies the focus of my essay',
      'I can write at least two analytical paragraphs with embedded quotations and language analysis',
      'I can link my analysis to the wider themes of conflict, power, and humanity',
      'I can write a conclusion that offers an evaluative judgement',
    ],
    keywords: [
      'assessment',
      'thesis',
      'analytical paragraph',
      'embedded quotation',
      'language analysis',
      'theme',
      'evaluation',
      'structure',
      'comparison',
      'effect',
    ],
    starterActivity: {
      title: 'Preparation and Question Analysis',
      duration: '10 minutes',
      instructions:
        'Students are given the assessment question 10 minutes before writing begins. Two options are available (students choose one): Option A (Poetry) — "How does [Poet A] use language and structure to present the reality of conflict? Compare with [Poem B]." Option B (Shakespeare) — "How does Shakespeare use the character of Macbeth to explore the consequences of ambition? Refer closely to at least two moments in the play." Students read their chosen question carefully and annotate it: underline the key words, identify the text, identify the task (language? structure? theme? character?), and note which two moments or poems they will use. Teacher circulates to check students have understood the question and have selected appropriate material.',
      differentiation: {
        support:
          'Provide a question decoding prompt: "This question is asking me to write about [text] and focus on [skill]. I will use these quotations: [space for notes]."',
        core: 'Students annotate the question and make brief bullet-point notes independently.',
        stretch:
          'Students draft a full thesis statement before beginning to write.',
      },
      resources: [
        'Assessment question sheet (both options)',
        'Question decoding prompt (for support)',
        'Planning space on assessment sheet',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Assessment Writing',
        duration: '40 minutes',
        instructions:
          'Students write their assessed essay in silence. The structure recommended by the teacher is: Introduction (thesis + overview of approach, 3–4 sentences), Body paragraph 1 (first quotation/moment, language analysis, effect), Body paragraph 2 (second quotation/moment, language analysis, effect, comparative point if applicable), Body paragraph 3 (structural or tonal analysis, development of theme), Conclusion (summary and evaluative judgement). Teacher writes time checkpoints on the board: "Introduction should be complete by [time + 5 min]", "Body P2 should be complete by [time + 25 min]". This helps students manage their time. Teacher circulates silently.',
        differentiation: {
          support:
            'Students have access to a paragraph frame during the assessment — they fill in the analysis, quotations, and explanations but are given the structural connectives and transition sentences.',
          core: 'Students write independently without scaffold.',
          stretch:
            'Students aim for four body paragraphs and a more developed evaluative conclusion that considers the poet\'s or playwright\'s wider purpose in writing about conflict.',
        },
        resources: [
          'Lined assessment paper',
          'Assessment question (already issued)',
          'Timer displayed on board with checkpoints',
          'Paragraph frame (for support only)',
        ],
      },
      {
        title: 'Self-Assessment and Target Setting',
        duration: '10 minutes',
        instructions:
          'Students finish writing and spend 10 minutes on self-assessment. Using the four-colour highlighting method from Lesson 5: (1) Highlight every analytical term in yellow. (2) Highlight every quotation in green. (3) Highlight every evaluative comment in blue. (4) Circle every comparative connective in pen. Students count each type and write in the margin: "Strength: I have..." and "Target: Next time I will add more..." Teacher collects both the essay and the self-assessment.',
        differentiation: {
          support: 'Students highlight only quotations (green) and circle evaluative comments (underline), and write one strength and one target.',
          core: 'Students use all four colours and write two strengths and one target.',
          stretch: 'Students write a reflection paragraph explaining which aspect of the essay they are most proud of and why, linking to a specific analytical skill developed this term.',
        },
        resources: [
          'Highlighters (three colours)',
          'Pen for circling',
          'Self-assessment strip at the bottom of the essay page',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Term Review: What I Can Now Do',
      duration: '0 minutes',
      instructions:
        'Given that the full 60 minutes are needed for preparation, writing, and self-assessment, the plenary is embedded within the self-assessment activity. After submitting, students have the optional extension task of writing on a sticky note: "The most important thing I have learned about reading and writing about conflict this term is..." These are posted on a class display wall — "Conflict and Humanity: What We Know Now" — and reviewed at the start of next term.',
      differentiation: {
        support: 'Students choose from three sentence starters for their sticky note.',
        core: 'Students write their own reflection freely.',
        stretch: 'Students write a connection: "What I have learned about conflict in poetry connects to Macbeth because both..."',
      },
    },
    homework:
      'No written homework this week. Review the feedback on your assessment when it is returned. Identify one skill from the mark scheme that you want to improve in Term 3 and write it in the front of your exercise book as a personal target.',
    worksheetQuestions: [
      {
        question: '(Assessment preparation) What are the four key areas you should cover when analysing a conflict poem?',
        lines: 4,
        modelAnswer:
          'The four key areas for analysing a conflict poem are: (1) Language — how the poet uses imagery, diction, and figurative techniques to create meaning and effect; (2) Structure — how the form, stanza arrangement, enjambment, and caesura shape the reader\'s experience; (3) Tone and mood — the poet\'s attitude to the subject and the emotional atmosphere created; (4) Context — when, why, and by whom the poem was written, and how this shapes its meaning.',
        marks: 4,
      },
      {
        question: '(Assessment preparation) Write a model thesis statement for a comparative essay on two conflict poems of your choice.',
        lines: 4,
        modelAnswer:
          'While both [Poem A] by [Poet A] and [Poem B] by [Poet B] explore the devastating human cost of conflict, [Poet A] focuses on the physical horror of the battlefield through graphic sensory imagery that forces the reader to confront the reality of death, whereas [Poet B] takes a more elegiac approach, dwelling on the psychological aftershocks of war and the grief of those left behind — suggesting that conflict\'s greatest damage may be invisible.',
        marks: 4,
      },
      {
        question: '(Assessment preparation) Write a model analytical paragraph about how Shakespeare presents ambition in Macbeth.',
        lines: 8,
        modelAnswer:
          'Shakespeare presents ambition in Macbeth as a force that begins as a private temptation before escalating into public catastrophe. When Macbeth acknowledges his "vaulting ambition, which o\'erleaps itself," the metaphor of leaping suggests reckless overreach — ambition that has gone so far beyond proper limits that it cannot stop. The verb "o\'erleaps" implies Macbeth is aware of his own excess but cannot control it, suggesting that the most dangerous ambition is not the kind that ignores consequences, but the kind that sees them and proceeds regardless. For the audience, who understand from the opening scenes that this ambition leads to murder and eventual destruction, this moment of self-knowledge is deeply ironic and profoundly disturbing — Macbeth can diagnose the flaw that will destroy him, yet is unable to cure it.',
        marks: 5,
      },
      {
        question: '(Assessment preparation) What should a conclusion to a Shakespeare essay include? Write a model conclusion for a Macbeth essay.',
        lines: 6,
        modelAnswer:
          'A conclusion should: summarise the key analytical points made in the essay; offer a final evaluative judgement about Shakespeare\'s purpose or the play\'s wider significance; and end with a statement that leaves the reader thinking. Model conclusion: "Ultimately, Shakespeare uses Macbeth to demonstrate that ambition, when it overrides morality, does not merely destroy the individual — it corrupts everything around them. Macbeth ends the play having gained the kingdom he killed for and lost everything that made that kingdom worth having: his wife, his friends, his peace of mind, and his sense of self. The play\'s enduring power lies in its insistence that the consequences of unethical ambition are not political abstractions but deeply personal tragedies — a message as urgent in 2026 as it was in 1606."',
        marks: 4,
      },
      {
        question: '(Reflection) Which skill developed during this term do you feel most confident about now, and which do you most want to improve? Give specific examples.',
        lines: 6,
        modelAnswer:
          'This is a personal reflection question; there is no single model answer. A strong response might read: "I feel most confident about analysing imagery because I now understand the difference between identifying a technique and explaining its connotations and effect on the reader. For example, I can now explain why a specific metaphor is powerful, not just name it. I most want to improve my structural analysis — I find it harder to explain why a poet\'s structural choices (like enjambment or irregular stanzas) create specific effects. Next term I will look for structural features first whenever I read a new poem."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This assessment is designed to give students choice — those who feel stronger on poetry choose Option A; those who have responded better to Shakespeare choose Option B. Both options assess the same underlying analytical skills, so choice does not disadvantage either group.',
      'The paragraph frame available to support students during the assessment is a genuine scaffold, not a crutch: it provides the connective structure but requires students to supply all the analysis and quotation. This allows a fair and differentiated assessment without removing the challenge.',
      'When marking, prioritise the quality of analysis over the quantity of points made. A student who makes two genuinely analytical points with detailed language commentary should score more highly than one who makes five feature-spotting observations.',
      'Return essays with two written comments: one specific praise point (naming what the student did well and why it works) and one specific development target (naming what to add or improve and how to do it). Avoid generic comments like "good analysis — more detail needed."',
      'Use the sticky note reflection display as a genuine talking point at the start of Term 3 — reading what students have written demonstrates to them that their thinking has been heard and valued, and reinforces the habit of reflecting on their own learning.',
    ],
    targetedSkills: [
      '8R.3 - Language and structural analysis',
      '8R.6 - Comparing texts',
      '8W.4 - Analytical paragraph writing',
      '8W.8 - Sustained analytical writing',
      '8W.9 - Drafting, revising, and self-evaluating',
    ],
  },
];
