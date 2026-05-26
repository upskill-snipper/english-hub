import type { LessonPlan } from '@/types'

export const y9ExtendedLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 2 EXTENDED - Creative & Transactional Writing + Cross-Text Work
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y9ext-01: Creative Writing Workshop - Narrative ────────────────
  {
    id: 'y9ext-01',
    title: 'Creative Writing Workshop: Crafting a Narrative',
    text: 'Creative Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Plan and draft a complete short narrative using structural techniques (9W.1)',
      'Apply a range of narrative techniques including varied sentence structures, perspective, and pacing',
      'Use precise vocabulary and figurative language to engage a reader',
      'Evaluate and redraft writing using peer and self-assessment criteria',
    ],
    successCriteria: [
      'I can plan a narrative with a clear beginning, escalation, climax and resolution',
      'I can use at least three narrative techniques (e.g. flashback, dialogue, in medias res)',
      'I can write with a consistent narrative voice and vary my sentence lengths for effect',
      "I can identify two improvements to my own or a partner's draft using specific criteria",
    ],
    keywords: [
      'narrative',
      'structure',
      'perspective',
      'pacing',
      'in medias res',
      'flashback',
      'foreshadowing',
      'redraft',
      'voice',
      'tension',
    ],
    starterActivity: {
      title: 'First Line Hook Analysis',
      duration: '8 minutes',
      instructions:
        'Display five famous opening lines (e.g. "It was the best of times, it was the worst of times" - Dickens; "Call me Ishmael" - Melville; "Someone must have slandered Josef K." - Kafka; "The sky above the port was the colour of television, tuned to a dead channel" - Gibson; "It was a bright cold day in April, and the clocks were striking thirteen" - Orwell). Students discuss in pairs: What technique does each opening use? What questions does it raise in the reader\'s mind? Why might each be effective as a hook? Take brief whole-class feedback. Students then write their own opening line for an original narrative on the theme of "change", sharing with a partner before the activity begins.',
      differentiation: {
        support:
          'Provide a techniques list (dramatic statement, mystery, unusual detail, character introduction, setting) to help students label each opening.',
        core: 'Students identify the technique and explain the effect on the reader for each opening line.',
        stretch:
          'Students rank the five openings from most to least effective, justifying their ranking with reference to audience and purpose.',
      },
      resources: ['Five opening lines displayed on slides', 'Narrative techniques reference card'],
    },
    mainActivities: [
      {
        title: 'Structured Planning: The Narrative Arc',
        duration: '15 minutes',
        instructions:
          'Introduce the "Three Act Structure" adapted for short narrative: Act 1 - Establish character and setting, introduce a disruption; Act 2 - Rising tension, character faces a choice or challenge; Act 3 - Climax and resolution, character changed in some way. Students use a planning frame to map out a 300-400 word narrative on one of three prompts: (A) A character returns to a place after many years; (B) A letter arrives that changes everything; (C) Two strangers meet at midnight. Emphasise that planning should include: the narrative voice (first or third person), the key moment of tension, and the final image or sentence. Teacher circulates, prompting students who are stuck with questions: "What does your character want?" and "What is stopping them?"',
        differentiation: {
          support:
            'Provide a completed example plan using Prompt A with annotations explaining each structural decision.',
          core: 'Students complete the planning frame for their chosen prompt, including narrative voice and key techniques.',
          stretch:
            'Students plan two possible structures for the same prompt (e.g. linear vs. non-linear) and evaluate which would be more effective before committing to one.',
        },
        resources: ['Narrative arc planning frame', 'Three prompt cards', 'Techniques menu card'],
      },
      {
        title: 'Drafting and Targeted Improvement',
        duration: '25 minutes',
        instructions:
          'Students write their narrative draft for 18 minutes using their plan. Encourage them to keep writing and not stop to correct - this is a drafting phase. After 18 minutes, display "The SWAP Check": students swap books with a partner, who must highlight: ONE strong sentence (underline), ONE place where more detail would help (circle), and ONE place where vocabulary could be more precise (star). Partners write one sentence of specific feedback at the bottom. Students then have 5 minutes to make at least one targeted improvement in a different colour.',
        differentiation: {
          support:
            'Provide a vocabulary bank organised by category (atmosphere, movement, emotion, setting) to support drafting.',
          core: 'Students draft independently, then engage in the SWAP Check and implement one revision.',
          stretch:
            'Students experiment with a non-linear structure or an unreliable narrator in their draft, and annotate their choices to explain the intended effect.',
        },
        resources: [
          'Vocabulary bank handout',
          'SWAP Check criteria displayed on board',
          'Coloured pens for revision',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Read Aloud and Reflect',
      duration: '7 minutes',
      instructions:
        'Three volunteers read their opening paragraph aloud to the class. After each reading, the class identifies one technique used and one thing that worked particularly well. Teacher draws out key observations: effective openings create questions; strong verbs beat adjective-heavy writing; specific details beat vague generalities. Students complete an exit ticket: "The best thing in my draft is ___ because ___ . Next time I will ___."',
      differentiation: {
        support: 'Provide the exit ticket sentence frames pre-printed.',
        core: 'Students complete the exit ticket independently reflecting on their own draft.',
        stretch:
          'Students identify the single most important revision they would make to transform their draft from a B to an A-grade response and explain why.',
      },
    },
    homework:
      'Complete and redraft your narrative to 350-450 words. Aim to use at least one structural technique (e.g. non-linear opening, flashback, or circular ending). Bring your redraft to the next lesson for peer assessment.',
    worksheetQuestions: [
      {
        question:
          'Name three structural techniques a writer can use in a narrative and explain what each one does.',
        lines: 6,
        modelAnswer:
          '1) In medias res - starting in the middle of the action creates immediate tension and draws the reader in without lengthy exposition. 2) Flashback - shifting to an earlier moment in time can reveal character motivation and add depth to the present-day conflict. 3) Circular structure - ending where the narrative began can create a sense of resolution, irony, or thematic emphasis, suggesting that a character has or has not changed.',
        marks: 6,
      },
      {
        question:
          'How does varying sentence length help a writer to control pace and tension? Give an example.',
        lines: 5,
        modelAnswer:
          'Short, punchy sentences speed up the pace and create tension, mimicking the urgency of action or emotion. Longer, more complex sentences slow the pace, encouraging the reader to dwell on description or reflection. For example, a writer might use several long sentences to establish a calm setting, then shift abruptly to a one-word sentence - "Gone." - to mark a dramatic turning point.',
        marks: 4,
      },
      {
        question:
          'Write the opening two sentences of a narrative set in an abandoned building. Focus on creating atmosphere.',
        lines: 4,
        modelAnswer:
          'Model answer will vary; assess for: specific sensory detail, deliberate word choice for atmosphere, and effective sentence structure. Example: "Dust had settled on everything like a second skin, and the floorboards groaned beneath her weight as though protesting the intrusion. Somewhere above her, a window had been left open - she could hear the thin whistle of wind threading through broken glass."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson works best when students have already studied narrative techniques in previous lessons - it is intended as a workshop that consolidates and applies prior learning.',
      'The SWAP Check works well only when students trust the classroom environment; establish norms for constructive feedback before the activity.',
      'If time is short, cut the SWAP Check to a self-assessment and save peer feedback for homework.',
      'For students who finish the draft quickly, have a "challenge extension" ready: rewrite the opening paragraph in a different narrative person (switching from first to third or vice versa) and evaluate the effect.',
      'Connect to GCSE requirements: AQA Paper 1 Q5 and Eduqas Component 1 both require students to write narratively or descriptively; this lesson directly prepares them for those tasks.',
    ],
    targetedSkills: [
      'Creative writing',
      'Narrative structure',
      'Vocabulary precision',
      'Peer assessment',
      'Self-editing and redrafting',
    ],
  },

  // ── Lesson y9ext-02: Transactional Writing - Crafting a Speech ───────────
  {
    id: 'y9ext-02',
    title: 'Transactional Writing: Crafting a Persuasive Speech',
    text: 'Transactional Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand the key features that distinguish a speech from other transactional forms (9W.2)',
      'Apply persuasive techniques including direct address, rhetorical questions, and tricolon',
      'Structure a speech with a clear introduction, developed argument, and memorable conclusion',
      'Adapt tone and register appropriately for the intended audience and purpose',
    ],
    successCriteria: [
      'I can identify at least five features of an effective speech and explain their effect',
      "I can write a speech introduction that establishes the speaker's stance and engages the audience",
      'I can use at least three different persuasive techniques with deliberate effect',
      'I can write a conclusion that returns to the opening and leaves a memorable final impression',
    ],
    keywords: [
      'rhetoric',
      'direct address',
      'rhetorical question',
      'tricolon',
      'anaphora',
      'pathos',
      'ethos',
      'logos',
      'register',
      'tone',
    ],
    starterActivity: {
      title: 'Great Speeches: Spot the Technique',
      duration: '8 minutes',
      instructions:
        'Display three short excerpts from famous speeches: (1) Martin Luther King Jr., "I Have a Dream" (anaphora, pathos); (2) Winston Churchill, "We Shall Fight on the Beaches" (tricolon, anaphora, ethos); (3) Greta Thunberg, "How Dare You" (direct address, rhetorical question, pathos). Students annotate the extracts on mini-whiteboards, identifying and labelling the techniques. Teacher takes feedback, confirming and extending. Class discuss: what do all three speeches have in common despite their different contexts and audiences?',
      differentiation: {
        support:
          'Provide a labelled annotated example of one speech extract so students can see the process modelled before attempting the others.',
        core: 'Students annotate independently and identify the shared features.',
        stretch:
          'Students evaluate which speech is the most persuasive and explain their reasoning with reference to specific techniques and context.',
      },
      resources: [
        'Three speech extracts on printed handout or slides',
        'Rhetorical techniques reference card',
        'Mini-whiteboards',
      ],
    },
    mainActivities: [
      {
        title: 'Anatomy of a Speech: Structural Analysis',
        duration: '15 minutes',
        instructions:
          'Distribute a full model student speech on a topical issue (e.g. "Schools should teach financial literacy as a core subject"). Students analyse the speech in pairs using a structural checklist: (1) How does the introduction hook the audience? (2) Where does the speaker establish their credibility or personal connection? (3) How are counterarguments handled? (4) What persuasive techniques appear and where? (5) How does the conclusion create a call to action or memorable final line? Each pair presents one observation back to the class. Teacher annotates the model on the board as observations are shared, building a class-annotated version.',
        differentiation: {
          support:
            'Provide the structural checklist with highlighted sections of the model speech already colour-coded to match each question.',
          core: 'Students use the checklist independently to analyse the model speech in pairs.',
          stretch:
            'Students evaluate the effectiveness of the structural choices: which section is strongest? Which would they revise and why?',
        },
        resources: ['Model student speech handout', 'Structural checklist', 'Annotation pens'],
      },
      {
        title: 'Writing Your Own Speech',
        duration: '25 minutes',
        instructions:
          'Each student selects one of three prompts to write a speech of approximately 350 words: (A) "Technology is doing more harm than good to our generation" - address a school assembly; (B) "Every student should spend a year abroad before starting university" - address parents at a year group evening; (C) "The arts are just as important as science" - address the school governors. Students spend 5 minutes planning (introduction hook, three main points, handling one counterargument, closing statement) then write for 18 minutes. Remind students to: use direct address appropriate to their audience, include at least one rhetorical question, and vary sentence length for effect. Teacher circulates and provides live feedback on register and technique use.',
        differentiation: {
          support:
            'Provide a paragraph-by-paragraph writing frame with sentence starters (e.g. "Today I stand before you because...", "You may argue that... however...", "The evidence clearly shows that...").',
          core: 'Students plan and draft independently, using the model speech as a structural guide.',
          stretch:
            'Students write for a more challenging or hostile audience (e.g. a sceptical panel of MPs) and adapt their register and counterargument strategy accordingly.',
        },
        resources: [
          'Speech prompt cards',
          'Writing frame for support',
          'Model speech for structural reference',
          'Persuasive techniques checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Perform and Peer Assess',
      duration: '7 minutes',
      instructions:
        'Two volunteers read a section of their speech aloud (approximately one minute each). Class uses thumbs up/sideways/down to give immediate feedback after each delivery on: persuasiveness, clarity, use of techniques. Teacher selects one strong moment from each reading to highlight as a model. Students then self-assess their written speech against the success criteria, circling or ticking each criterion they have met and writing one target for improvement.',
      differentiation: {
        support: 'Provide a written self-assessment grid with the success criteria pre-listed.',
        core: 'Students self-assess independently against the success criteria.',
        stretch:
          'Students evaluate whether their speech would be more or less effective if delivered to a different audience, and explain why.',
      },
    },
    homework:
      'Redraft and complete your speech to a final version of 400-500 words. Focus on: consistency of register, the quality of your opening hook, and making your conclusion memorable. Be prepared to read 60 seconds of your speech aloud in the next lesson.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between pathos, ethos, and logos as persuasive strategies.',
        lines: 6,
        modelAnswer:
          "Pathos appeals to the audience's emotions - the speaker uses personal stories, vivid images, or emotive language to make the audience feel something. Ethos is an appeal to the speaker's credibility or moral authority - establishing why they are trustworthy or qualified to speak on this issue. Logos is an appeal to logic and reason, using statistics, evidence, and structured arguments to persuade the audience rationally. Effective speeches often combine all three.",
        marks: 6,
      },
      {
        question: 'Write an example of anaphora. Then explain what effect it creates.',
        lines: 4,
        modelAnswer:
          'Example: "We will fight for fairness. We will fight for opportunity. We will fight for every child in this country." Anaphora - the repetition of a phrase at the start of successive clauses - creates rhythm, makes the speech memorable, and builds emotional intensity through accumulation. It can also convey certainty and determination.',
        marks: 4,
      },
      {
        question:
          'What distinguishes a speech from a formal essay? Give two structural and two language differences.',
        lines: 6,
        modelAnswer:
          'Structural differences: a speech typically has a direct address opening and a call to action close, whereas an essay uses an introduction and conclusion that summarise an argument. A speech may use repeated refrains or rhetorical questions as structural devices, while an essay uses topic sentences and evidence. Language differences: a speech uses "you" and "we" (second and first person plural) to create a relationship with the audience, while an essay is typically more formal and impersonal. A speech also uses colloquial asides and conversational tone deliberately, whereas an essay maintains consistent formal register throughout.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Choose topical and age-appropriate prompts - students are more motivated to write persuasively when they have genuine opinions on the topic.',
      'If possible, record two or three volunteer readings on video for playback and analysis in a follow-up lesson.',
      'The speech can serve as a formative assessment - review drafts for: appropriate register, range of persuasive techniques, structural coherence, and quality of counterargument handling.',
      'Cross-reference with the Y9 lesson on argument and persuasion (y9-07) - this lesson should deepen and apply those skills in a specific form.',
      'GCSE link: both AQA Language Paper 2 Q5 and Eduqas Component 2 require transactional writing; teaching students to distinguish between speech, letter, article, and report is essential preparation.',
    ],
    targetedSkills: [
      'Transactional writing',
      'Persuasive techniques',
      'Audience and purpose',
      'Register and tone',
      'Speech structure',
    ],
  },

  // ── Lesson y9ext-03: Cross-Text Comparison - A Christmas Carol & OMAM ─────
  {
    id: 'y9ext-03',
    title: 'Cross-Text Comparison: A Christmas Carol and Of Mice and Men',
    text: 'A Christmas Carol / Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Compare how two texts from different periods present a shared theme (9R.5)',
      'Identify similarities and differences in authorial methods across A Christmas Carol and Of Mice and Men',
      'Construct a structured comparative paragraph using an appropriate framework',
      "Evaluate how context shapes each author's treatment of the shared theme",
    ],
    successCriteria: [
      'I can identify at least two thematic links between A Christmas Carol and Of Mice and Men',
      'I can write a comparative paragraph using connectives such as "similarly", "in contrast", "whereas", and "both writers"',
      'I can comment on the effect of language choices in both texts',
      "I can explain how each author's context shaped their presentation of the theme",
    ],
    keywords: [
      'comparison',
      'theme',
      'context',
      'authorial method',
      'connective',
      'similarity',
      'difference',
      'social criticism',
      'redemption',
      'dreams',
    ],
    starterActivity: {
      title: 'Thematic Sorting Activity',
      duration: '8 minutes',
      instructions:
        'Give each pair a set of twelve theme cards: six for each text (e.g. "isolation", "dreams and failure", "social responsibility", "poverty", "transformation", "power and powerlessness", "class", "friendship", "redemption"). Students sort the cards into three groups: themes in A Christmas Carol only, themes in Of Mice and Men only, and themes shared by both texts. Take whole-class feedback. Establish that both texts deal with poverty, social exclusion, and the gap between the ideal and the real - but approach these themes differently because of their contexts (Victorian England vs. 1930s America).',
      differentiation: {
        support: 'Provide brief definitions on the back of each theme card.',
        core: 'Students sort independently and justify at least one "shared" placement to a partner.',
        stretch:
          'Students rank the top three shared themes by importance and prepare a one-sentence justification for each ranking to share with the class.',
      },
      resources: ['Theme card sets (one per pair)', 'Summary context sheet for both texts'],
    },
    mainActivities: [
      {
        title: 'Comparative Paragraph Modelling: Dreams and Failure',
        duration: '20 minutes',
        instructions:
          "Display two extracts side by side: Scrooge's encounter with Ignorance and Want (Stave 3, beneath the Ghost's robe) and the ending of Of Mice and Men (George shoots Lennie). Teacher models a comparative paragraph live on the board using the PETAL-C framework (Point - Evidence - Technique - Analysis - Link - Context). Model: \"Both Dickens and Steinbeck present the failure of dreams as a consequence of social indifference. Dickens uses the allegorical figures of 'Ignorance' and 'Want' hidden beneath the Ghost's robe to suggest that society deliberately conceals the plight of the poor... Similarly, Steinbeck uses the image of George shooting Lennie to symbolise how the American Dream is inevitably destroyed for those at the margins of society...\" Students then write their own comparative paragraph on a second pairing of their choice: (A) Scrooge and Lennie as outsiders, (B) the role of friendship in both texts, (C) how each text ends with a vision of social change - or its impossibility.",
        differentiation: {
          support:
            'Provide a sentence-by-sentence writing frame based on PETAL-C with the extracts and key vocabulary pre-selected.',
          core: 'Students write independently using the modelled paragraph as a structural guide.',
          stretch:
            'Students write without the writing frame and aim to embed a third text reference or contextual point that goes beyond the modelled paragraph.',
        },
        resources: [
          'Paired extracts handout (4 pairings available)',
          'PETAL-C comparative writing frame',
          'Model paragraph displayed on board',
          'Key vocabulary list for comparison',
        ],
      },
      {
        title: 'Context and Authorial Intent: Why Do These Texts Differ?',
        duration: '20 minutes',
        instructions:
          'Pose the question: "If both Dickens and Steinbeck are writing about poverty and failure, why are their texts so different in tone?" Students work in pairs to complete a context comparison grid: Victorian England context → effect on Dickens\' choices; 1930s America context → effect on Steinbeck\'s choices. Students then write one paragraph (no framework provided) arguing which author presents a more pessimistic view of society and why. They should refer to both context and specific textual evidence. Pairs share their conclusions - class vote on most convincing argument.',
        differentiation: {
          support:
            'Provide the context comparison grid pre-populated with three facts per context, leaving space for students to add the "effect on writing" column.',
          core: 'Students complete the grid and write the independent comparative paragraph.',
          stretch:
            "Students argue that one text has had a greater social impact than the other, drawing on knowledge of each text's reception and purpose.",
        },
        resources: [
          'Context comparison grid worksheet',
          'Brief contextual fact sheets for both texts',
          'Timeline: 1843 and 1937 context cards',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Comparative Connective Challenge',
      duration: '7 minutes',
      instructions:
        'Students are given a list of six comparative connectives (similarly, in contrast, whereas, both writers, while, conversely). They must use each connective in a sentence comparing the two texts on the theme of social responsibility. The challenge: no sentence can repeat a point made in the main activity. Students share one sentence each. Teacher addresses any grammatical errors in the use of "whereas" and "while" (common issues). Exit ticket: "What is the most important difference between how Dickens and Steinbeck present poverty? Write one sentence."',
      differentiation: {
        support:
          'Reduce to three connectives and provide half-completed sentences for students to finish.',
        core: 'Students write six independent comparative sentences.',
        stretch:
          'Students write a continuous mini-paragraph that uses all six connectives fluently and coherently, rather than six isolated sentences.',
      },
    },
    homework:
      'Write a comparative paragraph (200-250 words) comparing how Dickens and Steinbeck present the theme of loneliness. Use at least two quotations from each text, PETAL-C structure, and at least two comparative connectives. Bring your paragraph to the next lesson for peer assessment.',
    worksheetQuestions: [
      {
        question:
          'Identify one similarity and one difference in how Dickens and Steinbeck present the theme of dreams.',
        lines: 6,
        modelAnswer:
          "Similarity: both authors present dreams as ultimately unattainable for the most vulnerable characters. Scrooge's visions of a better life come too late to save Tiny Tim (in the counterfactual future), while Lennie and George's dream of the farm is destroyed by the end. Difference: Dickens ultimately offers hope through Scrooge's transformation and charity, suggesting that individual change can improve society. Steinbeck offers no such redemption - the death of Lennie and the abandonment of the dream suggests that the American social system offers no escape for those at its margins.",
        marks: 6,
      },
      {
        question:
          'Explain how context shapes the ending of each text. Why does one end with hope and one with tragedy?',
        lines: 6,
        modelAnswer:
          'Dickens wrote A Christmas Carol in 1843 for a middle-class readership who could act as philanthropists; a hopeful ending serves his purpose of persuading this audience to change their behaviour. The Victorian reform movement and the success of voluntary charity organisations supported the idea that change was possible. Steinbeck, writing in 1937 in the aftermath of the Great Depression, was documenting a society in which institutional forces (capitalism, racism, economic collapse) crushed individual aspiration. His tragic ending reflects a naturalistic worldview: that social and economic conditions determine individual fate.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'This lesson is most effective at the end of Term 2 after students have studied both texts in depth - it synthesises their learning rather than introducing new content.',
      'The PETAL-C framework can be simplified to PEEL if students are not yet ready for the contextual element.',
      'Emphasise that comparison does not mean writing about one text and then the other - students must weave the texts together within each paragraph.',
      'For GCSE preparation: AQA Literature requires comparison in Paper 1 Section B and Paper 2; Eduqas requires cross-text reading in Component 2. This comparative work builds directly towards those skills.',
      'If students have not studied both texts equally, provide stronger support materials for the less familiar text.',
    ],
    targetedSkills: [
      'Comparative analysis',
      'Cross-text reading',
      'Contextual understanding',
      'Structured analytical writing',
      'Use of literary terminology',
    ],
  },

  // ── Lesson y9ext-04: GCSE-Readiness Assessment ───────────────────────────
  {
    id: 'y9ext-04',
    title: 'GCSE-Readiness Assessment',
    text: 'A Christmas Carol / Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Demonstrate ability to write a sustained analytical essay in timed conditions (9R.6)',
      'Apply knowledge of language, structure, and context to a literature question',
      'Write under GCSE-style conditions to identify readiness and gaps',
      'Reflect on performance against GCSE assessment objectives',
    ],
    successCriteria: [
      'I can plan an essay response in 5-8 minutes',
      'I can write a focused analytical essay of at least 350 words in timed conditions',
      'I can maintain a consistent analytical register throughout my response',
      'I can identify my strengths and at least two areas for development after the assessment',
    ],
    keywords: [
      'assessment objective',
      'AO1',
      'AO2',
      'AO3',
      'analytical essay',
      'timed writing',
      'planning',
      'sustained response',
      'evaluation',
      'mark scheme',
    ],
    starterActivity: {
      title: 'GCSE Question Deconstruction',
      duration: '8 minutes',
      instructions:
        'Display a GCSE-style question on the board: "How does Dickens use the character of Scrooge to explore ideas about social responsibility in A Christmas Carol?" Students work silently for 3 minutes to annotate the question, identifying: the key instruction word (how), the focus (Scrooge, social responsibility), and what the examiner is asking for (authorial method + theme + whole-text view). Teacher takes brief feedback. Then display a GCSE mark scheme descriptor for the top band and ask students to identify the key requirements: "perceptive and detailed analysis", "judicious selection of textual evidence", "convincing interpretation". Students note these on a self-assessment grid they will complete after the assessment.',
      differentiation: {
        support:
          'Provide the question with key words already highlighted and a simplified mark scheme summary.',
        core: 'Students annotate and decode the question independently before the feedback.',
        stretch:
          'Students identify which assessment objective (AO1/AO2/AO3) each part of the mark scheme tests.',
      },
      resources: [
        'GCSE-style question on slides',
        'Simplified mark scheme descriptor',
        'Self-assessment grid for pre- and post-assessment use',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Planning Phase',
        duration: '8 minutes',
        instructions:
          'Students have exactly 8 minutes to plan their essay on the displayed question. They should note: their thesis/overall argument, three paragraph focuses, one quotation per paragraph, one context point. Teacher times this strictly and calls "stop" at 8 minutes. This replicates GCSE conditions and reinforces the importance of time management. Students who have not finished planning must begin writing - an incomplete plan is better than no essay.',
        differentiation: {
          support:
            'Provide a planning grid with boxes for: thesis, paragraph 1 focus + quote, paragraph 2 focus + quote, paragraph 3 focus + quote, and context.',
          core: 'Students plan independently in any format they find useful.',
          stretch:
            'Students plan four paragraphs and decide which order gives the strongest argument before writing.',
        },
        resources: ['Planning grid (for support students)', 'Timer displayed on board'],
      },
      {
        title: 'Timed Essay Writing',
        duration: '35 minutes',
        instructions:
          'Students write their essay in silence under GCSE-style conditions. The room should be quiet. Teacher circulates but does not provide content support - redirect students to their plan. At the 20-minute mark, indicate that students should be moving to their second or third paragraph. At 32 minutes, give a "3 minutes remaining" warning so students can write a conclusion if they have not already. Collect all work at the end regardless of completion. Teacher notes any students who are struggling significantly for targeted support in the next lesson.',
        differentiation: {
          support:
            'For students with SEND or significant additional needs, permit use of a pre-approved vocabulary list. Provide extra planning time if permitted by school assessment policy.',
          core: 'All students write under timed conditions.',
          stretch:
            'Students who finish early spend the remaining time re-reading and annotating one paragraph to show where they have demonstrated AO1, AO2, and AO3.',
        },
        resources: [
          'Blank lined paper or assessment booklets',
          'Timer',
          'Text copies if open-book assessment',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment: Where Am I Now?',
      duration: '4 minutes',
      instructions:
        'Students complete the post-assessment section of their self-assessment grid before handing it in with their essay. They reflect on: (1) Did I answer the question directly? (2) Did I include close language analysis? (3) Did I include context? (4) Did I write a clear conclusion? This self-reflection supports metacognitive development and gives the teacher additional insight for feedback. Remind students that this is diagnostic - the purpose is to identify what to work on, not to judge their ability.',
      differentiation: {
        support:
          'Read each self-assessment question aloud and give students 30 seconds to circle YES / PARTLY / NOT YET for each.',
        core: 'Students complete the grid independently.',
        stretch:
          'Students write a one-sentence target for their next essay based on their honest self-assessment.',
      },
    },
    homework:
      'Read through your essay once before the next lesson and underline: one sentence you are proud of (in pencil), one sentence you would improve (in pencil with a note explaining what you would change). Do not rewrite the essay - this reflection is the task.',
    worksheetQuestions: [
      {
        question:
          'What do the three GCSE literature assessment objectives (AO1, AO2, AO3) each assess?',
        lines: 6,
        modelAnswer:
          'AO1 assesses the ability to read, understand, and respond to texts - including making personal, informed responses and selecting appropriate textual references. AO2 assesses the ability to analyse the language, form, and structure used by a writer to create meanings and effects. AO3 assesses the ability to show understanding of the relationships between texts and the contexts in which they were written.',
        marks: 6,
      },
      {
        question:
          'Why is planning essential in a timed literary essay? What should a good plan contain?',
        lines: 5,
        modelAnswer:
          'Planning ensures that the essay is focused, coherent, and addresses all parts of the question before any time is wasted on misdirected writing. A good plan should contain: a thesis statement (the overall argument), the focus of each paragraph, at least one quotation per paragraph, a note on the language technique to analyse, and one contextual point. Even two minutes of planning produces a more structured response than writing immediately.',
        marks: 4,
      },
    ],
    teacherNotes: [
      "Use this lesson's essays to produce a class-level report identifying the most common weaknesses - this directly informs the content of y9ext-05 (Grammar Consolidation), y9ext-06 (Vocabulary), and y9ext-10 (GCSE Planning).",
      'If school policy prohibits formal assessment in this format at Y9, the same lesson structure works as a practice task with no formal grading.',
      "Consider whether open-book or closed-book conditions are more appropriate given students' prior exposure to the texts.",
      'Return essays with GCSE-style mark scheme commentary rather than letter grades where possible - this familiarises students with how their work will be assessed.',
    ],
    targetedSkills: [
      'Timed analytical writing',
      'Essay planning',
      'Self-assessment',
      'Applying literary knowledge under pressure',
      'Metacognition',
    ],
  },

  // ── Lesson y9ext-05: Grammar Consolidation for GCSE ─────────────────────
  {
    id: 'y9ext-05',
    title: 'Grammar Consolidation for GCSE',
    text: 'Grammar and Language',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Review and consolidate key grammatical concepts required for GCSE success (9G.1-9G.6)',
      'Identify and correct common grammatical errors in student and model writing',
      'Apply grammatical knowledge to improve the clarity and sophistication of analytical writing',
      'Use grammatical terminology accurately when discussing language choices',
    ],
    successCriteria: [
      'I can identify and correct errors in subject-verb agreement, punctuation, and sentence structure',
      'I can use a range of clause types (main, subordinate, relative) in my own writing',
      'I can use semi-colons, colons, and dashes purposefully and correctly',
      'I can use grammatical terminology (e.g. noun phrase, subordinate clause) accurately in my analysis',
    ],
    keywords: [
      'subordinate clause',
      'relative clause',
      'noun phrase',
      'subject-verb agreement',
      'semi-colon',
      'colon',
      'syntax',
      'modifier',
      'participle phrase',
      'passive voice',
    ],
    starterActivity: {
      title: 'Identify the Error',
      duration: '8 minutes',
      instructions:
        'Display six sentences taken from anonymised student essays (real errors are most effective - collect from marked work). Each sentence contains one grammatical error. Students identify and correct the error on mini-whiteboards. Errors should include: comma splice, subject-verb disagreement, misplaced apostrophe, dangling modifier, run-on sentence, and incorrect use of "however" as a conjunction. Teacher reveals and explains each answer, linking to the impact on the quality of written communication in a GCSE response.',
      differentiation: {
        support:
          'Provide a hint card naming the type of error for each sentence so students know what to look for.',
        core: 'Students identify and correct independently, then compare with a partner.',
        stretch:
          'Students not only correct the error but also explain the grammatical rule that was violated, using correct terminology.',
      },
      resources: [
        'Error sentences on slides',
        'Mini-whiteboards',
        'Grammar hint cards (for support)',
      ],
    },
    mainActivities: [
      {
        title: 'Clause Structures: Building Sophisticated Sentences',
        duration: '20 minutes',
        instructions:
          'Introduce/review: main clause, subordinate clause, relative clause, and participle phrase. Use the example: "Dickens, writing in 1843, uses Scrooge to embody the indifference of the wealthy towards the poor." Break down: "Dickens...uses Scrooge" (main clause), "writing in 1843" (participle phrase), "to embody the indifference of the wealthy towards the poor" (infinitive phrase). Model three more examples of complex analytical sentences. Students then rewrite five simple analytical sentences using these structures. Example simple sentence: "Dickens shows Scrooge is selfish." Challenge: produce a version using a relative clause, a version using a participle phrase, and a version using a fronted adverbial. Students compare the effect of each version.',
        differentiation: {
          support:
            'Provide a sentence expansion frame: "[Author], who [relative clause], uses [technique] to [effect]." with a completed example.',
          core: 'Students rewrite all five sentences independently and label the clause types.',
          stretch:
            'Students evaluate which clause structure is most appropriate for literary analysis and justify their preference with reference to academic writing conventions.',
        },
        resources: [
          'Sentence transformation worksheet',
          'Clause types reference card',
          'Annotated model sentences',
        ],
      },
      {
        title: 'Punctuation for Effect: The Semi-Colon, Colon, and Dash',
        duration: '20 minutes',
        instructions:
          'Teach the three uses of the colon (introducing a list, introducing a quotation, introducing an explanation) and the two uses of the semi-colon (joining two related independent clauses; separating items in a complex list). Demonstrate the dash as a device for interruption, aside, or dramatic pause. Show examples in both literature (Dickens, Steinbeck) and in analytical writing contexts. Students complete a punctuation transformation task: rewrite ten sentences, replacing the underlined punctuation with the most appropriate alternative (colon, semi-colon, or dash) and explain the effect of the change. Pairs discuss: did the change improve or change the meaning?',
        differentiation: {
          support:
            'Reduce to five sentences with a choice of two punctuation marks per sentence rather than open-ended selection.',
          core: 'Students complete all ten transformations independently.',
          stretch:
            'Students select their best three examples and write a sentence explaining why their chosen punctuation was the most appropriate choice, using grammatical terminology.',
        },
        resources: [
          'Punctuation transformation worksheet',
          'Colon/semi-colon/dash reference guide',
          'Model examples',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Grammar in Context: One Paragraph Rewrite',
      duration: '7 minutes',
      instructions:
        'Display a weak analytical paragraph (anonymised, taken from a real or constructed student response). The paragraph contains at least four grammatical errors and has no varied sentence structures. Students rewrite the paragraph in their books, correcting errors and varying the structure - they should use at least one semi-colon, one relative clause, and one fronted adverbial. Two students share their rewrites. Class compares: which version is clearest and most analytical?',
      differentiation: {
        support:
          'Circle the four errors in the weak paragraph so students can focus on correcting them first before improving the structure.',
        core: 'Students rewrite independently, identifying and correcting errors themselves.',
        stretch:
          'Students rewrite the paragraph twice: once correcting errors only, and once making structural improvements - then annotate which changes had the greatest impact.',
      },
    },
    homework:
      'Take a paragraph from your most recent assessed essay. Rewrite it with: at least one sentence using a participle phrase, at least one semi-colon, and at least one complex sentence. Annotate your choices. Bring both versions to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between a main clause and a subordinate clause. Give an example of each.',
        lines: 5,
        modelAnswer:
          'A main clause is a group of words that contains a subject and a verb and makes complete sense on its own. Example: "Dickens criticises the wealthy." A subordinate clause also contains a subject and a verb but does not make complete sense on its own - it depends on the main clause. Example: "Because he wanted to expose Victorian inequality" (subordinate clause that must attach to a main clause to make sense).',
        marks: 4,
      },
      {
        question:
          'Rewrite this sentence to make it more sophisticated: "Steinbeck makes Curley\'s wife seem lonely. She has no real friends."',
        lines: 4,
        modelAnswer:
          'Model answers will vary; reward any answer that combines the two ideas into a complex or compound-complex sentence. Example: "Steinbeck presents Curley\'s wife as a figure of profound loneliness; her isolation is reinforced by the fact that she is never given a name, reducing her to a possession rather than a person."',
        marks: 4,
      },
      {
        question:
          'When should a writer use a semi-colon rather than a full stop? Give an original example.',
        lines: 4,
        modelAnswer:
          'A semi-colon should be used to join two independent clauses that are closely related in meaning, where a full stop would create too abrupt a separation. It is particularly effective when the second clause qualifies or extends the first. Example: "Scrooge is initially presented as entirely without compassion; his transformation, however, suggests that Dickens believes even the hardest heart can change."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Use errors from the y9ext-04 assessment essays to personalise the "Identify the Error" activity - anonymise carefully.',
      'Grammar teaching is most effective when it is embedded in the context of student writing, not taught in isolation.',
      'Many students confuse "who" and "which" in relative clauses - ensure this is addressed during the main activity.',
      'The passive voice is often used incorrectly or over-used in student analytical writing - a brief discussion of when it is and is not appropriate can be valuable here.',
      'Link grammatical terminology to AO2: when students can name the grammatical feature a writer uses, they are more likely to produce secure language analysis in the examination.',
    ],
    targetedSkills: [
      'Grammar',
      'Sentence structure',
      'Punctuation',
      'Analytical writing accuracy',
      'Grammatical terminology',
    ],
  },

  // ── Lesson y9ext-06: Vocabulary Building for GCSE ────────────────────────
  {
    id: 'y9ext-06',
    title: 'Vocabulary Building for GCSE Examination',
    text: 'Vocabulary and Language',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Expand and consolidate analytical and literary vocabulary for GCSE use (9R.3)',
      'Understand and apply Tier 2 (academic) and Tier 3 (subject-specific) vocabulary',
      'Use vocabulary strategies to understand unfamiliar words in unseen texts',
      'Produce writing that demonstrates deliberate and precise vocabulary choices',
    ],
    successCriteria: [
      'I can use at least ten analytical or literary vocabulary items correctly in context',
      'I can use word-analysis strategies (prefix, suffix, root word, context) to deduce meaning',
      'I can distinguish between synonyms by identifying subtle differences in connotation',
      'I can replace vague vocabulary in my own writing with precise, subject-appropriate alternatives',
    ],
    keywords: [
      'Tier 2 vocabulary',
      'Tier 3 vocabulary',
      'connotation',
      'denotation',
      'synonym',
      'analytical vocabulary',
      'prefix',
      'suffix',
      'etymology',
      'register',
    ],
    starterActivity: {
      title: 'Shades of Meaning: Synonym Spectrum',
      duration: '8 minutes',
      instructions:
        'Display a spectrum line on the board from "most positive" to "most negative". Give students ten synonym cards for the concept of "determined" (e.g. stubborn, persistent, resolute, tenacious, obstinate, dogged, inflexible, single-minded, unyielding, ruthless). Students rank them on the spectrum individually, then compare with a partner. Whole-class discussion: which words have positive connotations? Which have negative? Which are neutral and context-dependent? Key teaching point: in literary analysis, choosing the right word to describe a character or authorial choice demonstrates precision and earns marks.',
      differentiation: {
        support: 'Provide dictionary definitions on the back of each synonym card.',
        core: 'Students rank independently and justify three of their placements.',
        stretch:
          'Students add two more synonyms of their own to the spectrum and explain where they would place them and why.',
      },
      resources: [
        'Synonym cards (one set per pair)',
        'Spectrum line on board or as a printed worksheet',
      ],
    },
    mainActivities: [
      {
        title: 'GCSE Analytical Vocabulary Audit and Practice',
        duration: '20 minutes',
        instructions:
          'Distribute a GCSE vocabulary list organised into three categories: (1) Words for discussing authorial intent (conveys, implies, suggests, exemplifies, reinforces, juxtaposes, subverts, foreshadows, alludes to, epitomises); (2) Words for discussing character and theme (epitomises, embodies, represents, symbolises, evokes, undermines, challenges, reflects, transcends); (3) Words for discussing language effect (creates, establishes, reinforces, heightens, emphasises, accentuates, juxtaposes, contrasts, mirrors, echoes). Students complete a vocabulary audit: highlight words they are confident using (green), words they have heard but are uncertain about (amber), and words they do not know (red). Students then work in pairs to teach each other their "red" words, using context sentences. Finally, each student writes three original analytical sentences - one using a word from each category.',
        differentiation: {
          support:
            'Reduce to fifteen key words (five per category) and provide example sentences for each word alongside the definition.',
          core: 'Students complete the full audit and write three independent sentences.',
          stretch:
            'Students identify three words that they think are overused in GCSE student responses and suggest more precise or sophisticated alternatives.',
        },
        resources: [
          'GCSE analytical vocabulary list handout',
          'Vocabulary audit template (RAG self-assessment)',
          'Dictionary/thesaurus access',
        ],
      },
      {
        title: 'Vocabulary in Context: Improving Weak Responses',
        duration: '20 minutes',
        instructions:
          'Display three short analytical paragraphs about texts studied this year. Each paragraph is weak because it uses vague or repetitive vocabulary (e.g. "Dickens shows that Scrooge is mean. He uses the word \'squeezing\' to show how mean he is. This shows that Dickens wants us to think Scrooge is a bad person"). Students rewrite each paragraph, replacing underlined vague words with precise analytical vocabulary from their list. The target: each paragraph should use at least two new vocabulary items and no word should be repeated unnecessarily. Students compare rewrites in pairs, discussing which new words fit most naturally.',
        differentiation: {
          support:
            'Provide a bank of replacement words beneath each paragraph, so students are selecting rather than generating.',
          core: 'Students rewrite independently using their vocabulary list.',
          stretch:
            'Students rewrite without any reference to the vocabulary list, demonstrating that they can apply the words from memory.',
        },
        resources: [
          'Three weak paragraphs handout',
          'Vocabulary list for reference',
          'Peer comparison discussion prompt',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Vocabulary Application: One Minute, One Paragraph',
      duration: '7 minutes',
      instructions:
        'Students have exactly 5 minutes to write one analytical paragraph about any text studied this year, deliberately using at least four words from their new vocabulary list - they should underline each one. Students swap with a partner who ticks each underlined word that has been used correctly and suggests an alternative for any that are not quite right. Share two strong examples aloud, highlighting the vocabulary choices. Exit ticket: write the three new vocabulary words you will commit to using in your next piece of assessed writing.',
      differentiation: {
        support: 'Students write three sentences rather than a full paragraph.',
        core: 'Students write a full paragraph and underline four new vocabulary items.',
        stretch:
          'Students also annotate their paragraph to explain why they chose each specific word over a more common alternative.',
      },
    },
    homework:
      'Choose five words from your "amber" or "red" list. For each word: (1) write a definition in your own words; (2) write an example sentence about a text you have studied; (3) write an antonym or contrasting word. Bring your completed vocabulary sheet to the next lesson.',
    worksheetQuestions: [
      {
        question:
          "Explain the difference between a word's denotation and its connotation. Why does this distinction matter in literary analysis?",
        lines: 5,
        modelAnswer:
          'A word\'s denotation is its literal, dictionary meaning - the straightforward definition. Its connotation refers to the emotional associations, cultural implications, or implied meanings that the word carries beyond its literal sense. In literary analysis, connotation matters because writers choose words deliberately for their associations, not just their definitions. For example, the word "cold" has the denotation of low temperature, but in Dickens\' description of Scrooge it carries connotations of emotional distance, cruelty, and moral numbness.',
        marks: 5,
      },
      {
        question:
          'Choose any three words from the following list and use each in a separate analytical sentence about a text you have studied: epitomises, juxtaposes, subverts, accentuates, alludes to.',
        lines: 8,
        modelAnswer:
          'Model answers will vary; reward accurate use in context with a clear analytical point. Example sentences: "Steinbeck\'s depiction of the bunkhouse epitomises the isolation experienced by working men during the Great Depression." "Dickens juxtaposes Scrooge\'s abundant wealth with the desperate poverty of the Cratchit family to highlight the moral failure of Victorian society." "The character of Curley\'s wife subverts the reader\'s expectations of passivity by actively seeking connection, suggesting that her apparent vanity is in fact a symptom of profound loneliness."',
        marks: 6,
      },
    ],
    teacherNotes: [
      'A printed vocabulary reference card that students keep in their exercise books throughout Year 9 and take into Year 10 is an effective way to consolidate this learning.',
      'The vocabulary audit RAG activity generates useful data about gaps in student knowledge - review the amber/red results to plan future teaching.',
      'Many students use "shows" and "makes" repeatedly in analytical writing - explicitly naming this habit and providing a targeted alternative list is very effective.',
      'Etymology exploration (e.g. "juxtaposes" from Latin juxtaponere, "to place near") helps students retain new words and demonstrates to students that vocabulary is systematic and learnable.',
      'Link to AO2: examiners consistently reward students who demonstrate a wide and precise analytical vocabulary - this lesson directly targets that.',
    ],
    targetedSkills: [
      'Vocabulary acquisition',
      'Precision in analytical writing',
      'Connotation awareness',
      'Self-assessment and metacognition',
      'Academic register',
    ],
  },

  // ── Lesson y9ext-07: Reading Unseen Extracts (GCSE Preparation) ──────────
  {
    id: 'y9ext-07',
    title: 'Reading Unseen Extracts: GCSE Language Preparation',
    text: 'Unseen Texts',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Read and comprehend an unseen extract efficiently under timed conditions (9R.1)',
      'Apply reading strategies to extract meaning, identify technique, and infer purpose',
      'Answer GCSE Language-style questions on an unseen text with increasing precision',
      'Identify the key differences between retrieval, inference, and language analysis questions',
    ],
    successCriteria: [
      'I can identify the key information in an unseen extract within 3 minutes of reading',
      'I can distinguish between retrieval, inference, and analysis questions and answer each appropriately',
      'I can identify language techniques in an unseen extract and comment on their effect',
      'I can write a timed response to an unseen text that addresses the specific question asked',
    ],
    keywords: [
      'unseen extract',
      'retrieval',
      'inference',
      'analysis',
      'annotation',
      'skimming',
      'scanning',
      'authorial intent',
      'effect',
      'language technique',
    ],
    starterActivity: {
      title: 'Timed First Read: What Do I Know?',
      duration: '8 minutes',
      instructions:
        'Distribute an unseen extract (200-250 words from a published text - ideally a non-fiction or literary non-fiction piece, such as a travel writing extract or a personal essay). Students read silently for 3 minutes. They then turn the paper face down and write five things they remember about the text from memory. Turn back over and check: which five things were correct? Which details did they miss? What does this tell them about their reading focus? Discuss as a class: what should a first read focus on? (Characters/speaker, setting, tone, purpose, any striking language.) Establish the "RAP" reading strategy: Read actively, Annotate as you go, Pause to check understanding.',
      differentiation: {
        support:
          'Allow students to keep the text face up and highlight rather than memorise - the focus is on identifying key information, not testing memory.',
        core: 'Students complete the face-down recall activity and review their performance.',
        stretch:
          "Students additionally identify the text's likely purpose and audience from their first read and write one sentence justifying their view.",
      },
      resources: [
        'Unseen extract (printed, one per student)',
        'Mini-whiteboards or blank paper for recall',
      ],
    },
    mainActivities: [
      {
        title: 'Question Type Identification and Modelled Responses',
        duration: '20 minutes',
        instructions:
          'Display four GCSE Language-style questions on the same extract, representing different question types: (Q1) List four things you learn about the narrator from lines 1-10. [Retrieval, 4 marks]; (Q2) How does the writer use language to create a sense of threat in lines 11-20? [Language analysis, 8 marks]; (Q3) How has the writer structured this text to interest the reader? [Structure, 8 marks]; (Q4) "The writer presents the narrator as entirely sympathetic." To what extent do you agree? [Evaluation, 20 marks]. Teacher models responses to Q1 and Q2 live, narrating the thought process. Students then attempt Q3 independently. After 8 minutes, pairs compare responses and improve one point each.',
        differentiation: {
          support:
            'Provide sentence starters for each question type and a hint that Q1 requires only brief retrieval while Q2 requires: technique + quotation + effect.',
          core: 'Students attempt Q3 independently and peer-compare.',
          stretch:
            'Students attempt Q4 (evaluation) as an extension, planning how they would balance agreeing and disagreeing with the statement.',
        },
        resources: [
          'Unseen extract (same as starter)',
          'Four GCSE-style questions displayed on slides',
          'Modelled responses to Q1 and Q2 prepared by teacher',
          'GCSE mark scheme for Q3',
        ],
      },
      {
        title: 'Timed Unseen Response',
        duration: '25 minutes',
        instructions:
          'Distribute a second, fresh unseen extract. Students read for 3 minutes with annotation permitted. They then answer two questions independently: (1) Identify four things the writer does to engage the reader in this extract. [4 marks, 5 minutes]; (2) How does the writer use language to convey the speaker\'s feelings? [8 marks, 15 minutes]. After 20 minutes, students spend 3 minutes reviewing their response to Q2 against the success criteria: Did I identify the technique by name? Did I include a precise quotation? Did I comment on the effect on the reader? Did I comment on more than one example? Students self-correct or add a "EVEN BETTER IF" annotation.',
        differentiation: {
          support:
            'Provide a language analysis scaffold for Q2: "The writer uses ___ (technique) when they write \'___\' (quotation). This suggests ___ because ___. The effect on the reader is ___."',
          core: 'Students answer both questions independently within the time allocation.',
          stretch:
            'Students make a link between the language choices in both extracts studied in the lesson - how do both writers achieve a similar effect through different techniques?',
        },
        resources: [
          'Second unseen extract (printed, one per student)',
          'Language analysis scaffold for support',
          'Success criteria for Q2 displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: "The Examiner's Perspective",
      duration: '7 minutes',
      instructions:
        'Display a weak and a strong response to Q2 from the activity (anonymised). Students work in pairs to identify what the strong response does that the weak response does not. Take feedback. Teacher summarises the three key differences examiners most commonly observe: (1) specific embedding of quotations rather than block-quoting; (2) naming the technique precisely; (3) commenting on effect beyond "it makes the reader feel interested". Students add these three observations to their revision notes.',
      differentiation: {
        support:
          'Provide a highlighted version of both responses with colour-coding: blue = technique, yellow = quotation, green = effect.',
        core: 'Students analyse both responses independently and identify three differences.',
        stretch:
          'Students annotate the weak response with specific changes they would make to improve it and explain why each change would earn more marks.',
      },
    },
    homework:
      'Find one short extract (150-200 words) from a newspaper, magazine, or book at home. Write two analytical sentences about the language choices in the extract: identify a technique, quote it, and comment on its effect. Bring the extract and your sentences to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a retrieval question and an inference question? Give an example of each.',
        lines: 6,
        modelAnswer:
          'A retrieval question asks students to find information that is stated explicitly and directly in the text. Example: "What does the narrator find in the box?" - the answer is in the text and requires no interpretation. An inference question asks students to work out something that is implied rather than directly stated. Example: "What does the narrator\'s reaction to the box suggest about their relationship with their father?" - the student must read between the lines and make a reasoned deduction from the evidence.',
        marks: 4,
      },
      {
        question:
          'Write a model response to: "How does the writer use language in the opening paragraph to create a sense of unease?" Use a technique you can see in the extract provided.',
        lines: 8,
        modelAnswer:
          "Model answers will vary based on the extract provided; assess for: accurate identification of a language technique, precise quotation embedded in the sentence, and a developed comment on effect. Example structure: \"The writer creates a sense of unease through the use of sibilance when describing the 'silent, sinister streets'. The repetition of the soft 's' sound creates a hissing quality that mimics the threatening atmosphere of the setting, making the reader feel that something sinister is approaching. This is reinforced by the modifier 'sinister', which has connotations of deliberate malice and directly signals danger to the reader.\"",
        marks: 6,
      },
    ],
    teacherNotes: [
      'Select unseen extracts that are engaging and accessible but genuinely unseen - avoid texts that are likely to have been studied in primary school or earlier in Year 9.',
      'Literary non-fiction (travel writing, memoir, journalism) works particularly well for GCSE Language preparation as it rewards both retrieval and language analysis.',
      'The Q3 structure question is often the weakest in student performance - explicitly model what "structure" means (whole text organisation, sentence variety, paragraph openings, shifts in tone) rather than assuming students understand this.',
      'This lesson pairs well with y9ext-08 (exam question deconstruction) - consider teaching them in sequence.',
    ],
    targetedSkills: [
      'Reading comprehension',
      'Retrieval',
      'Inference',
      'Language analysis',
      'Timed exam response',
    ],
  },

  // ── Lesson y9ext-08: Exam Question Deconstruction (GCSE Style) ───────────
  {
    id: 'y9ext-08',
    title: 'Exam Question Deconstruction: GCSE-Style Questions',
    text: 'Exam Preparation',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Identify and decode key instruction words in GCSE examination questions (9R.6)',
      'Distinguish between Language and Literature question types and their respective requirements',
      'Use question analysis to plan targeted, focused responses',
      'Avoid common errors in misreading or partially answering examination questions',
    ],
    successCriteria: [
      'I can identify the key instruction word, the focus, and the text reference in any exam question',
      'I can explain what each key instruction word (explore, analyse, compare, evaluate) requires',
      'I can plan a response that addresses every part of a multi-part question',
      'I can identify three common errors students make when answering exam questions and how to avoid them',
    ],
    keywords: [
      'instruction word',
      'question deconstruction',
      'explore',
      'analyse',
      'compare',
      'evaluate',
      'assessment objective',
      'focus',
      'bullet points',
      'partial credit',
    ],
    starterActivity: {
      title: 'Same Question, Different Answers: Why?',
      duration: '8 minutes',
      instructions:
        'Display one GCSE question and three student responses at different levels (approximately Grade 3, Grade 5, and Grade 7). Students read all three in one minute. They then rank them from weakest to strongest and, most importantly, write one reason why each response performs at its level. Teacher takes feedback: establish that the strongest response answers the question most precisely - it does not just write about the text, it responds to what has been asked. Key message: "The question is the most important thing in the room."',
      differentiation: {
        support:
          'Provide one sentence of teacher commentary on each response to help students identify the key differences.',
        core: 'Students rank and comment independently, then discuss with a partner.',
        stretch:
          'Students annotate the Grade 5 response with specific changes that would move it to Grade 7, explaining their decisions.',
      },
      resources: ['Three student response examples displayed on slides', 'GCSE question displayed'],
    },
    mainActivities: [
      {
        title: 'Instruction Word Glossary: What Am I Being Asked to Do?',
        duration: '20 minutes',
        instructions:
          'Distribute a list of the ten most common GCSE exam instruction words: retrieve, identify, explain, how does, explore, analyse, compare, evaluate, to what extent, and assess. For each word, students: (1) write a student-friendly definition in their own words; (2) note whether it asks for retrieval, analysis, evaluation, or comparison; (3) write a one-sentence description of what a full response would include. Teacher leads a class discussion on the most misunderstood terms: "how does" (requires language analysis + effect, not just identification); "evaluate" (requires a balanced judgement, not just agreement or disagreement); "to what extent" (requires nuance - partial agreement with justification, not a yes/no answer). Students test each other on three chosen words.',
        differentiation: {
          support:
            'Provide the student-friendly definitions pre-written and ask students to match them to the instruction words and the question type (retrieval/analysis/evaluation/comparison).',
          core: 'Students write their own definitions and question type labels independently.',
          stretch:
            'Students write an example exam question for each instruction word, then swap with a partner who must decode it using the framework.',
        },
        resources: [
          'Instruction word list handout',
          'Definition activity worksheet',
          'GCSE mark scheme glossary extract',
        ],
      },
      {
        title: 'Deconstruct, Plan, and Begin',
        duration: '28 minutes',
        instructions:
          'Provide students with four GCSE questions on texts studied this year - two Language and two Literature questions. Students work through a structured deconstruction process for each question: (1) Circle the instruction word; (2) Underline the focus (what/who am I writing about?); (3) Box the text reference (which section/which text?); (4) Note the mark allocation and estimate how long to spend; (5) Write a one-sentence planning note for the response. After completing the deconstruction for all four questions, students select the question they feel least confident about and write a full paragraph response (not a full essay) under timed conditions - 12 minutes. Teacher circulates, checking that students have correctly decoded the question before they begin writing. At the end, two students share their opening sentence - class evaluates whether it directly addresses the question.',
        differentiation: {
          support:
            'Reduce to two questions and provide the deconstruction template pre-printed with prompts at each stage.',
          core: 'Students deconstruct all four questions and write one full paragraph.',
          stretch:
            'After writing the paragraph, students annotate it to show where they have addressed each element of the question and the corresponding assessment objective.',
        },
        resources: [
          'Four GCSE questions on texts studied',
          'Question deconstruction template',
          'AO reference card',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Three Fatal Mistakes',
      duration: '4 minutes',
      instructions:
        'Teacher presents the three most common question-reading errors seen in GCSE responses: (1) Writing about the text generally instead of answering the specific question; (2) Addressing only the first part of a two-part question; (3) Using "the writer" throughout without ever naming the specific technique. Students write each mistake in their revision notes with a brief explanation and a tip for avoiding it. Exit ticket: "Write the first sentence of a response to the question on the board." Teacher checks these quickly for focus and accuracy.',
      differentiation: {
        support: 'Provide the three mistakes pre-printed with explanations and tips.',
        core: 'Students take notes independently.',
        stretch:
          'Students write a fourth common mistake they have observed in their own writing and a strategy for avoiding it.',
      },
    },
    homework:
      'Take one exam question from a past paper (AQA, Eduqas, or any board relevant to your school). Apply the full deconstruction process: circle, underline, box, mark allocation, planning note. Write a paragraph response. Bring both your deconstruction and your response to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between an "analyse" question and an "evaluate" question? How would your response differ for each?',
        lines: 6,
        modelAnswer:
          '"Analyse" requires the student to examine language, structure, or form in detail, explaining how specific techniques create meaning or effect. The response should be close, precise, and focused on the text. "Evaluate" requires the student to make a judgement - to weigh up evidence on both sides and reach a considered conclusion about the extent to which a statement is true. An evaluation response should present a balanced view, acknowledging complexity, before reaching a final position. An analysis response is more descriptive of how something works; an evaluation response is more argumentative.',
        marks: 6,
      },
      {
        question:
          'Deconstruct the following question: "How does the writer use language and structure to present the narrator as unreliable throughout the text?" What should a full response include?',
        lines: 6,
        modelAnswer:
          'Instruction word: "How does" - requires language analysis with reference to effect. Focus: language and structure (both must be addressed); the narrator as unreliable (specific angle). Text scope: throughout the text (must refer to more than one moment, not just the opening). A full response should include: analysis of specific language techniques (with quotations) that suggest unreliability; analysis of structural choices (e.g. shifts in tense, contradictions, gaps in the narrative) that undermine trust in the narrator; comment on the effect on the reader; and ideally a reference to why the writer has chosen to create an unreliable narrator.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'This lesson is highly transferable - apply the deconstruction framework to questions from the specific GCSE board your school uses.',
      "Having mark schemes available for the language analysis questions helps students see the connection between their deconstruction and the examiner's expectations.",
      'If your school uses AQA, the instruction words in Paper 1 and Paper 2 have specific nuances - the AQA examiner report notes that students frequently miss structural analysis even when the question explicitly asks for it.',
      'Consider following this lesson with a peer-marking activity using the mark scheme in the next lesson (y9ext-09, mock debrief).',
    ],
    targetedSkills: [
      'Exam technique',
      'Question analysis',
      'Planning and focus',
      'Metacognition',
      'Assessment literacy',
    ],
  },

  // ── Lesson y9ext-09: Mock Assessment Debrief ─────────────────────────────
  {
    id: 'y9ext-09',
    title: 'Mock Assessment Debrief: Learning from Feedback',
    text: 'A Christmas Carol / Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand what examiner feedback means and how to act on it (9W.3)',
      'Identify specific areas for improvement from teacher feedback on marked work',
      'Redraft a section of assessed writing using targeted feedback',
      'Set specific, measurable targets for improvement ahead of GCSE',
    ],
    successCriteria: [
      'I can identify the two main strengths in my assessed essay',
      'I can explain specifically what I need to improve (not just "be more detailed")',
      'I can redraft one paragraph to demonstrate improvement based on feedback',
      'I can write a SMART target for my next piece of assessed writing',
    ],
    keywords: [
      'debrief',
      'feedback',
      'target',
      'redraft',
      'improvement',
      'mark scheme',
      'assessment objective',
      'SMART target',
      'self-regulation',
      'metacognition',
    ],
    starterActivity: {
      title: 'The Feedback Audit',
      duration: '8 minutes',
      instructions:
        'Students receive their marked essays from the y9ext-04 GCSE-Readiness Assessment. They spend 5 minutes reading the feedback carefully - not the grade or mark, just the comments. They then complete a Feedback Audit on a sticky note: (1) What was I praised for? (2) What was I asked to improve? (3) What specific part of the mark scheme did the comment refer to? Teacher takes a class temperature check: who received mainly positive feedback, mainly developmental feedback, or mixed? Normalise the idea that a page of developmental feedback is more useful than a page of praise.',
      differentiation: {
        support:
          'Sit with the support group for 3 minutes during the independent reading to help decode the feedback language.',
        core: 'Students complete the Feedback Audit independently.',
        stretch:
          'Students identify which assessment objective (AO1, AO2, AO3) each feedback comment refers to and note whether one AO is consistently weaker.',
      },
      resources: [
        'Returned marked essays',
        'Feedback audit sticky note or mini-worksheet',
        'AO reference card',
      ],
    },
    mainActivities: [
      {
        title: 'Class-Level Patterns: What Did We All Need to Do Better?',
        duration: '15 minutes',
        instructions:
          'Teacher presents an anonymised class-level analysis of the most common strengths and weaknesses from the assessment. Common strengths: strong use of quotations; clear understanding of the text. Common areas for development: surface-level analysis (quotation + "this shows" without method); lack of context; missing conclusion; single-sentence paragraphs without development. For each identified weakness, teacher shows a before-and-after example, explaining the specific change made. Students annotate their own essay with a colour-coded key: green for an example of a strength, orange for an example of a weakness matching the class pattern.',
        differentiation: {
          support:
            'Provide students who are uncertain which parts of their essay match the class patterns with one-to-one guidance during this activity.',
          core: 'Students annotate independently using the class-level analysis as a reference.',
          stretch:
            'Students identify one additional pattern in their own essay that was not in the class-level analysis and propose a specific strategy for addressing it.',
        },
        resources: [
          'Class-level analysis summary (prepared from marked essays)',
          'Colour pens for annotation',
        ],
      },
      {
        title: 'Targeted Redraft: One Paragraph, Genuinely Better',
        duration: '25 minutes',
        instructions:
          'Students select the weakest paragraph from their essay - the one that best exemplifies a developmental target. They spend 3 minutes writing a brief explanation of why it is weak (what specifically is it missing?). They then redraft the paragraph for 17 minutes, implementing the feedback and aiming to move it up one mark band. The redraft should be written in a different colour beside the original, with two annotations: "I changed ___ because ___" and "This is better because ___". In the final 5 minutes, pairs read each other\'s original and redraft and confirm whether the improvement is genuine - they must write one sentence of response.',
        differentiation: {
          support:
            'Teacher works with support group to co-construct a plan for the redraft before students write independently.',
          core: 'Students redraft independently, annotate their changes, and peer review.',
          stretch:
            'Students redraft two paragraphs and evaluate which showed the greater improvement and why.',
        },
        resources: [
          'Original marked essays',
          "Mark scheme descriptor for one band above the student's current level",
          'Coloured pens',
          'Peer review prompt',
        ],
      },
    ],
    plenaryActivity: {
      title: 'My SMART Target for GCSE',
      duration: '7 minutes',
      instructions:
        'Introduce the SMART target framework (Specific, Measurable, Achievable, Relevant, Time-bound). Display an example of a vague target ("I will be more detailed in my analysis") and a SMART version ("In my next essay, I will include one contextual reference per paragraph to improve my AO3 performance"). Students write their own SMART target for their next piece of assessed writing, based on the feedback and today\'s reflection. They glue or write this target in a prominent place in their exercise book. Teacher collects a photo or copy for tracking. Revisit these targets at the start of the next assessment.',
      differentiation: {
        support:
          'Provide a sentence frame: "In my next essay, I will ___ so that I can improve my ___."',
        core: 'Students write a full SMART target independently.',
        stretch:
          'Students write two SMART targets: one for content/knowledge and one for analytical technique.',
      },
    },
    homework:
      "Write a 150-word reflection on your assessment: what went well, what you would change, and how today's feedback session has helped you understand what to do differently. Frame your reflection using the three assessment objectives (AO1, AO2, AO3).",
    worksheetQuestions: [
      {
        question:
          'What makes a SMART target more useful than a general target? Give an example of each.',
        lines: 5,
        modelAnswer:
          'A SMART target is Specific, Measurable, Achievable, Relevant, and Time-bound, which means it gives the student a precise and actionable goal rather than a vague aspiration. A general target ("I will try harder") gives no clear direction - the student cannot measure whether they have achieved it. A SMART target ("In my next essay on Of Mice and Men, I will include at least two contextual references to the Great Depression to improve my AO3 mark") is specific (contextual references, Great Depression), measurable (at least two), relevant (AO3), and time-bound (next essay).',
        marks: 4,
      },
      {
        question:
          'Read this paragraph from a student essay and explain one specific improvement they could make: "Steinbeck makes Lennie seem strong. He uses the word \'huge\' to show this. This makes the reader think he is strong."',
        lines: 6,
        modelAnswer:
          'The student has identified a technique and provided a quotation, which addresses AO1 and partially AO2. However, the analysis is surface-level - they repeat the word "strong" without developing the idea. One specific improvement would be to comment on the connotations of "huge" and link this to the themes of the novel. Example: "The modifier \'huge\' suggests not only physical strength but also the idea that Lennie occupies a disproportionate amount of space in a world that does not want him - Steinbeck uses his size to foreshadow the destruction he will inadvertently cause."',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson requires the marked essays from y9ext-04 to be returned at the start - plan marking time accordingly.',
      'The class-level analysis slide is best prepared from patterns observed during marking - this makes the debrief feel personal and relevant.',
      'Resist the temptation to show the "best" essays in the class; the most effective models are those that are just one level above the majority of the class.',
      'SMART targets are only useful if they are revisited - plan to display them on a class target wall or ask students to re-read them before their next assessment.',
      'The redraft activity is the core of this lesson - protect this time; it is where the deepest learning occurs.',
    ],
    targetedSkills: [
      'Responding to feedback',
      'Self-regulation',
      'Analytical writing improvement',
      'Target-setting',
      'Metacognition',
    ],
  },

  // ── Lesson y9ext-10: End-of-Year Reflection and GCSE Preparation Planning ─
  {
    id: 'y9ext-10',
    title: 'End-of-Year Reflection and GCSE Preparation Planning',
    text: 'Whole Year Review',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Reflect on learning and progress across the full Year 9 English programme',
      'Identify personal strengths and areas for development ahead of GCSE',
      'Understand the structure and demands of the GCSE English Language and Literature examinations',
      'Create a personalised and realistic GCSE preparation plan for the summer and Year 10',
    ],
    successCriteria: [
      'I can describe the key texts, skills, and themes I have studied in Year 9',
      'I can explain the structure of both GCSE English Language and English Literature',
      'I can identify my three greatest strengths and three main targets heading into Year 10',
      'I can produce a realistic summer reading and revision plan for GCSE preparation',
    ],
    keywords: [
      'reflection',
      'progress',
      'GCSE',
      'English Language',
      'English Literature',
      'examination structure',
      'target',
      'reading habit',
      'revision',
      'independence',
    ],
    starterActivity: {
      title: 'The Year 9 Timeline',
      duration: '8 minutes',
      instructions:
        'Display a blank timeline across the board divided into three terms. In pairs, students recall and list as many topics, texts, skills, and activities as they can remember from the year. After 3 minutes, pairs contribute to a whole-class version on the board - teacher fills in any gaps. The completed timeline should include: A Christmas Carol (Victorian context, Scrooge\'s transformation, themes, essay writing), Writing Unit (articles, speeches, narrative, descriptive), Of Mice and Men (1930s context, character, dreams and failure), and skills including grammar, vocabulary, unseen reading, and exam technique. Pause to celebrate the breadth of learning: "Look how much you now know."',
      differentiation: {
        support:
          'Provide a partially completed timeline with the key texts already labelled, so students add skills and activities.',
        core: 'Students contribute to the class timeline and identify any topics they had forgotten.',
        stretch:
          'Students identify which topic from the year they found most challenging and which they found most interesting - they will use this self-knowledge in the planning activity.',
      },
      resources: [
        'Blank timeline on board',
        'Year 9 overview handout (teacher prepared)',
        'Sticky notes for student contributions',
      ],
    },
    mainActivities: [
      {
        title: 'Understanding GCSE: What Is Coming?',
        duration: '20 minutes',
        instructions:
          'Distribute a GCSE Overview Sheet explaining the structure of both GCSE English Language and English Literature (use your school\'s specific exam board). Walk students through: the number of papers, the types of questions, the mark allocations, and the proportion of assessed coursework (if any). Emphasise key messages: (1) English Language is about skills, not texts - the reading and writing skills built all year are directly examined; (2) English Literature is about the depth of knowledge of specific texts - the better they know A Christmas Carol and Of Mice and Men, the better placed they are; (3) Both exams reward students who can think clearly about language and express themselves precisely. Students annotate the overview sheet, writing "ALREADY KNOW" next to any skill they feel prepared for and "NEED TO WORK ON" next to any area of concern.',
        differentiation: {
          support:
            'Teacher reads through the overview sheet with the support group, pausing to explain each element before students annotate.',
          core: 'Students annotate independently and share one observation with a partner.',
          stretch:
            'Students identify which element of the GCSE they believe will be their greatest challenge and write two sentences explaining why, with reference to their performance this year.',
        },
        resources: [
          'GCSE Overview Sheet (board-specific - prepared by teacher)',
          'Annotation pens',
        ],
      },
      {
        title: 'Personal Reflection: Strengths, Targets, and Summer Plan',
        duration: '25 minutes',
        instructions:
          'Students complete a three-section reflection document. Section 1 - Strengths (10 minutes): students write three specific examples of strong work they have produced this year and explain what made each one strong. These should reference specific skills: "In my A Christmas Carol essay, I produced a strong contextual paragraph because I linked the Poor Law to Scrooge\'s language choices." Section 2 - Targets (5 minutes): three SMART targets for the start of Year 10, one for reading, one for writing, and one for knowledge. Section 3 - Summer Plan (10 minutes): students complete a Summer Reading and Preparation Plan by selecting from a menu of tasks: read one novel on the Year 10 reading list; revisit one chapter of A Christmas Carol and make revision notes; practise one unseen extract per week; find five new analytical vocabulary words each week and use them in sentences. Each student commits to at least three tasks and writes a schedule indicating when they will complete each one.',
        differentiation: {
          support:
            'Provide structured templates for all three sections with sentence starters and examples for each, so students are completing and personalising rather than creating from scratch.',
          core: 'Students complete all three sections independently using the guidance provided.',
          stretch:
            'Students add a fourth section: "The one thing I will do this summer that will make the biggest difference to my GCSE grade" - they must justify their choice with reference to their identified targets.',
        },
        resources: [
          'Three-section reflection document (printed)',
          'Summer preparation task menu',
          'Year 10 reading list (school-specific)',
          'GCSE revision guide recommendations',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Letters to Year 10 Selves',
      duration: '7 minutes',
      instructions:
        "Students write a short letter (6-8 sentences) to themselves as a Year 10 student, including: the most important thing they learned about reading this year, the most important thing they learned about writing, one habit they want to maintain, and one thing they are looking forward to in Year 10 English. Letters are sealed and given to the teacher, who will return them at the end of Year 10 Term 1. This activity creates a meaningful connection between Year 9 and Year 10 and reinforces the idea that learning English is a continuous journey. Teacher closes by affirming the progress made and expressing genuine confidence in students' GCSE readiness.",
      differentiation: {
        support: 'Provide four sentence starters, one for each required element of the letter.',
        core: 'Students write independently within the 7-minute time frame.',
        stretch:
          'Students include a specific reading recommendation in their letter - a book or text they encountered this year that they would recommend their future self return to.',
      },
    },
    homework:
      'Complete your Summer Reading and Preparation Plan if not finished in class. Place it somewhere visible over the summer (e.g. on your desk or in your revision folder). The first task of the plan is due in the first lesson of Year 10.',
    worksheetQuestions: [
      {
        question:
          'List the key differences between GCSE English Language and GCSE English Literature. What does each subject assess?',
        lines: 6,
        modelAnswer:
          "GCSE English Language assesses students' ability to read and respond to unseen texts (both fiction and non-fiction) and to produce their own writing in different forms and for different purposes. It tests transferable skills: comprehension, language analysis, structure analysis, and creative and transactional writing. GCSE English Literature assesses students' detailed knowledge of specific set texts (prose, poetry, and drama) and their ability to analyse language, structure, form, and context in those texts. Literature rewards depth of knowledge of specific texts; Language rewards the breadth of flexible reading and writing skills.",
        marks: 6,
      },
      {
        question:
          'Identify three specific skills you have developed in Year 9 and explain how each one will help you in your GCSE examinations.',
        lines: 8,
        modelAnswer:
          'Answers will vary and should be personal and specific; assess for: naming a genuine skill developed this year (not a vague claim), providing a specific example of where it was demonstrated, and connecting it clearly to GCSE requirements. Model: "1) I have developed the ability to write comparative paragraphs using PETAL-C, which will help in GCSE Literature when comparing themes across texts. 2) I have built my analytical vocabulary, which will allow me to write with greater precision in both Language and Literature examinations. 3) I have practised reading and annotating unseen extracts under timed conditions, which will help me manage time and focus effectively in GCSE Language Paper 1 and Paper 2."',
        marks: 6,
      },
    ],
    teacherNotes: [
      'This lesson is most effective when delivered in the final week of Year 9 - students should feel a genuine sense of closure and forward momentum.',
      'The "Letters to Year 10 Selves" activity has a strong track record for engagement - ensure the letters are actually returned at the start of Year 10 as promised, as this reinforces trust and continuity.',
      "The GCSE Overview Sheet should be tailored to your school's specific exam board and entry pattern (e.g. whether students sit AQA, Eduqas, OCR, or Pearson).",
      'Use the three-section reflection documents as a teacher resource for Year 10 - reading what students identified as their targets at the end of Year 9 helps Year 10 teachers plan differentiated support.',
      'If students\' Year 10 sets or groups are known, consider including a brief "what to expect in Year 10" section tailored to their group\'s likely text choices.',
      'The summer preparation plan is voluntary but research consistently shows that students who read over summer show significantly greater progress in Year 10 - make the recommendations genuinely appealing and achievable, not punitive.',
    ],
    targetedSkills: [
      'Self-reflection',
      'Target-setting',
      'GCSE awareness',
      'Independent learning planning',
      'Metacognition',
    ],
  },
]
