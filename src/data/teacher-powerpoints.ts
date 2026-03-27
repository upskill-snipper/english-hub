export interface TeacherPresentation {
  id: string;
  title: string;
  examBoard: string;
  topic: string;
  yearGroup: string;
  slideCount: number;
  slides: Array<{
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    teacherNotes: string;
    activityInstructions?: string;
  }>;
  estimatedDuration: string;
  learningObjectives: string[];
}

export const teacherPowerpoints: TeacherPresentation[] = [
  {
    id: "aqa-paper1-q2-language",
    title: "AQA Paper 1 Q2: Language Analysis Techniques",
    examBoard: "AQA",
    topic: "Language Analysis",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Identify and analyse language techniques in unseen texts",
      "Use subject terminology accurately",
      "Link language techniques to writer's purpose and effect",
      "Develop precise analytical vocabulary"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Paper 1 Q2: What You Need to Know",
        bulletPoints: [
          "You will be given an unseen text (fiction or non-fiction)",
          "40 minutes to analyse language features",
          "Focus on how the writer uses language to create effects",
          "Worth 20 marks - 8% of total GCSE grade",
          "You must use subject terminology to describe techniques"
        ],
        teacherNotes: "This is a high-stakes question. Emphasise that students must spend 40 minutes here and plan their response. The key is precision in identifying techniques and explaining their effects."
      },
      {
        slideNumber: 2,
        title: "The Five Key Language Techniques",
        bulletPoints: [
          "Metaphor: comparing two things without using 'like' or 'as'",
          "Simile: comparing two things using 'like' or 'as'",
          "Personification: giving human qualities to non-human things",
          "Alliteration: repetition of initial sounds in nearby words",
          "Onomatopoeia: words that imitate the sounds they represent"
        ],
        teacherNotes: "These five are the most commonly used. Have students note them in their books with examples from texts they've recently studied."
      },
      {
        slideNumber: 3,
        title: "Imagery & Sensory Language",
        bulletPoints: [
          "Visual imagery: appeals to sight (colours, light, darkness, shapes)",
          "Auditory imagery: appeals to hearing (sounds, music, silence)",
          "Tactile imagery: appeals to touch (textures, temperature, pain)",
          "Gustatory imagery: appeals to taste (flavours, sourness, sweetness)",
          "Olfactory imagery: appeals to smell (fragrances, odours)"
        ],
        teacherNotes: "Remind students that imagery is powerful because it engages readers' senses. Ask them to identify which sense is being engaged in example texts.",
        activityInstructions: "Give students a short paragraph and ask them to highlight examples of each type of imagery they can find."
      },
      {
        slideNumber: 4,
        title: "Sentence Structure: Creating Effects",
        bulletPoints: [
          "Short sentences: create tension, drama, or simplicity",
          "Long sentences: build complexity, overwhelm, or exhaustion",
          "Fragmented sentences: create disorientation or emphasis",
          "Compound sentences: show equal ideas or contrast",
          "Complex sentences: show hierarchy and relationships between ideas"
        ],
        teacherNotes: "Students often miss sentence structure. Emphasise that HOW ideas are presented matters as much as WHAT is said. Model analysing a sentence from a real text."
      },
      {
        slideNumber: 5,
        title: "Punctuation & Its Effects",
        bulletPoints: [
          "Exclamation marks: show urgency, emotion, or intensity",
          "Ellipsis (...): suggests hesitation, trailing off, mystery",
          "Dashes: add emphasis, show interruption or sudden change",
          "Commas: control pace and separate ideas",
          "Colons and semicolons: introduce information or show connection"
        ],
        teacherNotes: "Punctuation is easy to miss but creates powerful effects. Show how the same sentence reads differently with different punctuation."
      },
      {
        slideNumber: 6,
        title: "Anaphora & Rhetorical Devices",
        bulletPoints: [
          "Anaphora: repetition of words at the beginning of clauses",
          "Epistrophe: repetition of words at the end of clauses",
          "Allusion: reference to another text, person, or event",
          "Paradox: statement that contradicts itself but contains truth",
          "Irony: when something means the opposite of its literal meaning"
        ],
        teacherNotes: "These are more sophisticated techniques that elevate analysis. Focus on how they create emphasis or reveal writer's attitude."
      },
      {
        slideNumber: 7,
        title: "Tone & Register",
        bulletPoints: [
          "Tone: the writer's attitude towards the subject (formal, sarcastic, sympathetic)",
          "Register: the level of language formality (colloquial, formal, technical)",
          "Word choice reveals tone and register",
          "Tone can change throughout a text",
          "Identify tone by looking at: sentence structure, imagery, vocabulary, punctuation"
        ],
        teacherNotes: "Tone is often the answer to 'why did the writer choose these techniques?'. Help students move beyond basic descriptions to identifying and explaining tone.",
        activityInstructions: "Read aloud the same sentence with different tones (angry, sad, sarcastic, matter-of-fact) and discuss how it changes meaning."
      },
      {
        slideNumber: 8,
        title: "How to Analyse Language: Step-by-Step",
        bulletPoints: [
          "1. Identify the technique (What is it?)",
          "2. Locate the technique in the text (Show evidence)",
          "3. Explain what the technique does (Effect on the reader)",
          "4. Link to writer's purpose (Why did they choose this?)",
          "5. Evaluate impact (Is it successful? Why?)"
        ],
        teacherNotes: "This is the golden framework. Make it visual and reference it constantly. Students should use this structure in every answer."
      },
      {
        slideNumber: 9,
        title: "EXAMPLE ANALYSIS: Metaphor",
        bulletPoints: [
          "Text: 'The city is a living, breathing organism'",
          "Technique: Metaphor (comparing city to organism)",
          "Effect: Makes city seem alive, dynamic, and organic",
          "Purpose: Suggests cities grow, change, and have complex systems",
          "Impact: Elevates the city from mere buildings to something with agency"
        ],
        teacherNotes: "Model complete analysis. Show how each step builds on the previous one. Emphasise that good analysis is about making connections.",
        activityInstructions: "Students analyse a given metaphor using the five-step framework. Circulate and check they're linking technique to effect to purpose."
      },
      {
        slideNumber: 10,
        title: "Avoiding Common Mistakes",
        bulletPoints: [
          "Don't just identify the technique - explain its effect",
          "Don't forget to support with evidence from the text",
          "Don't use vague language like 'it makes the reader feel something'",
          "Don't analyse in isolation - link to writer's overall purpose",
          "Don't spend too long on one technique - analyse several"
        ],
        teacherNotes: "These are the most common errors in student responses. Be explicit about what not to do.",
        activityInstructions: "Show examples of weak analysis and strong analysis side-by-side. Ask students to identify why the strong example is better."
      },
      {
        slideNumber: 11,
        title: "Planning Your Response (5 minutes)",
        bulletPoints: [
          "Read the question - what is it asking you to focus on?",
          "Skim the text - what is the general topic?",
          "Identify 4-5 key techniques that stand out",
          "Note line numbers or quotes for quick reference",
          "Plan your argument - what's the overall effect these techniques create?"
        ],
        teacherNotes: "Good planning prevents rambling. Students should spend 5 minutes planning to save time and stay focused."
      },
      {
        slideNumber: 12,
        title: "Writing Your Response (35 minutes)",
        bulletPoints: [
          "Write in clear paragraphs - one technique per paragraph (usually)",
          "Use PEA structure: Point, Evidence, Analysis",
          "Use connectives to show development: Furthermore, Moreover, However",
          "Write about HOW language creates meaning, not just WHAT it means",
          "Conclude by summarising the overall effect of language choices"
        ],
        teacherNotes: "Emphasise the importance of structure in exam writing. A well-organised response is easier to mark and impresses examiners."
      },
      {
        slideNumber: 13,
        title: "Using Precise Terminology",
        bulletPoints: [
          "Good: 'The metaphor of 'drowning in paperwork' suggests overwhelm'",
          "Bad: 'This language makes you think about being overwhelmed'",
          "Good: 'The alliteration of /s/ sounds creates a whispering effect'",
          "Bad: 'The words sound similar and it's effective'",
          "Precision shows understanding and gains marks"
        ],
        teacherNotes: "Mark up student work showing where they lose marks by being imprecise. Encourage them to use technical language confidently.",
        activityInstructions: "Give students vague analysis sentences and ask them to rewrite using precise terminology."
      },
      {
        slideNumber: 14,
        title: "Practice: Analyse This Extract",
        bulletPoints: [
          "'The rain hammered against the windows like angry fists, each drop a percussion of anxiety.'",
          "Techniques visible: Personification, Simile, Metaphor, Onomatopoeia, Imagery",
          "Question: How does the writer use language to create a sense of menace?",
          "You have 8 minutes to write your analysis",
          "Then we'll review what you've written"
        ],
        teacherNotes: "Use this as a timed practice. Circulate while students write and provide feedback as they work.",
        activityInstructions: "After 8 minutes, display a strong model answer and compare students' responses to it. Identify strengths and areas for improvement."
      },
      {
        slideNumber: 15,
        title: "Final Tips for Exam Success",
        bulletPoints: [
          "Read the question twice - once before reading the text, once after",
          "Analyse the language, not the meaning - focus on HOW not WHAT",
          "Use subject terminology but only if you can explain it",
          "Include evidence - quotes or line numbers - for every point",
          "Check your work for spelling and punctuation (these count too)"
        ],
        teacherNotes: "End on a motivational note. Remind students that this is a skill they can absolutely master with practice."
      }
    ]
  },
  {
    id: "aqa-paper1-q5-creative-writing",
    title: "AQA Paper 1 Q5: Creative Writing Masterclass",
    examBoard: "AQA",
    topic: "Creative Writing",
    yearGroup: "GCSE",
    slideCount: 20,
    estimatedDuration: "4 hours",
    learningObjectives: [
      "Write an engaging creative narrative under timed conditions",
      "Use sophisticated vocabulary and varied sentence structures",
      "Create atmosphere and develop character effectively",
      "Organise ideas with clear structure and pacing",
      "Demonstrate control of Standard English"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Paper 1 Q5: The Challenge",
        bulletPoints: [
          "45 minutes to write a creative narrative",
          "Response must be 400-600 words",
          "Choose from two prompts (or both)",
          "Worth 40 marks - 16% of total GCSE",
          "Tests: imagination, technical accuracy, vocabulary, narrative skill"
        ],
        teacherNotes: "This is worth double the marks of Q2. Emphasise that time management and planning are crucial. Spend 5 minutes reading and planning."
      },
      {
        slideNumber: 2,
        title: "Understanding the Prompts",
        bulletPoints: [
          "Prompts are deliberately vague to encourage creativity",
          "You might get a picture, a sentence starter, or a scenario",
          "Don't overthink - write what comes naturally",
          "Both prompts are equally valid - choose the one you can write most about",
          "You can adapt the prompt as long as you address it"
        ],
        teacherNotes: "Students often worry they're not following the prompt correctly. Reassure them that examiners reward engaging writing that responds to the prompt, even if adapted."
      },
      {
        slideNumber: 3,
        title: "Planning Your Narrative (5 minutes)",
        bulletPoints: [
          "What is the basic story? (Beginning, middle, end)",
          "Who is the main character? (One or two words describing them)",
          "What is the conflict or complication?",
          "Where and when is it set?",
          "What is the tone? (Scary, funny, emotional, tense?)"
        ],
        teacherNotes: "Quick planning prevents waffling and dead ends. Show students how to write a 5-minute plan on a scrap of paper."
      },
      {
        slideNumber: 4,
        title: "Opening: Hook Your Reader",
        bulletPoints: [
          "First line should be interesting and set the tone",
          "Avoid: 'It was a dark night' or 'My name is...'",
          "Try: Start with dialogue, action, a vivid image, or a question",
          "Examples: 'The letter arrived on a Tuesday.' / 'Blood on snow has a particular beauty.'",
          "You have 30 seconds to convince the reader to keep going"
        ],
        teacherNotes: "Analyse published openings and discuss why they work. Have students write multiple opening lines and choose the strongest.",
        activityInstructions: "Read aloud three different openings to the same story. Ask students to vote on which is most engaging and explain why."
      },
      {
        slideNumber: 5,
        title: "Building Setting: Show, Don't Tell",
        bulletPoints: [
          "Don't: 'The room was very old'",
          "Do: 'Dust motes drifted through the single shaft of light. The floorboards groaned under her weight.'",
          "Use sensory detail: sight, sound, smell, touch, taste",
          "Let setting reveal character and mood",
          "Limit detailed description - 2-3 sentences per location"
        ],
        teacherNotes: "This is where students often lose marks by over-describing. Emphasise that less is more - vivid detail beats lengthy description.",
        activityInstructions: "Give students a setting (an old house, a busy market, a hospital) and ask them to write 3 sentences using only sensory detail."
      },
      {
        slideNumber: 6,
        title: "Character Development: Round vs Flat",
        bulletPoints: [
          "Round characters: have depth, complexity, and change",
          "Flat characters: serve a purpose but don't change",
          "In 45 minutes, focus on one round character",
          "Show character through: actions, dialogue, thoughts, and reaction to conflict",
          "Avoid lengthy descriptions - show character through what they do"
        ],
        teacherNotes: "Students often rely on physical descriptions instead of showing personality through behaviour. Model how to reveal character through action."
      },
      {
        slideNumber: 7,
        title: "Dialogue: Making It Sound Real",
        bulletPoints: [
          "Real dialogue has interruptions, pauses, and incomplete sentences",
          "Use dialogue to reveal character, not to explain plot",
          "Avoid: 'Hello, how are you?' unless it's ironic or reveals something",
          "Use different voices for different characters (vocabulary, sentence structure)",
          "Dialogue should move the story forward"
        ],
        teacherNotes: "Read aloud good and bad dialogue examples. Show how variation in sentence length and style creates different voices.",
        activityInstructions: "Give students a tense situation (waiting for exam results, job interview) and ask them to write 10 lines of dialogue without explanation."
      },
      {
        slideNumber: 8,
        title: "Creating Conflict & Tension",
        bulletPoints: [
          "Every story needs a problem or complication (external or internal)",
          "Tension comes from: obstacles, decisions, unexpected twists, secrets",
          "Don't resolve the conflict too quickly",
          "Build to a climax - the moment of highest tension",
          "Resolve or reflect on the conflict by the end"
        ],
        teacherNotes: "Many students write descriptive pieces without real conflict. Emphasise that stories need something at stake - what does the character want and what's preventing it?"
      },
      {
        slideNumber: 9,
        title: "Pacing: Controlling the Rhythm",
        bulletPoints: [
          "Short sentences and paragraphs = fast pacing (action, urgency)",
          "Long sentences and detailed description = slow pacing (reflection, atmosphere)",
          "Vary your pacing throughout the narrative",
          "Speed up towards the climax, slow down at moments of reflection",
          "Use paragraph breaks to control pacing"
        ],
        teacherNotes: "Show how the same event reads differently when written with different pacing. Model editing for pacing."
      },
      {
        slideNumber: 10,
        title: "Vocabulary: Beyond 'Nice' and 'Sad'",
        bulletPoints: [
          "Instead of 'nice': pleasant, charming, delightful, endearing, appealing",
          "Instead of 'sad': melancholy, sorrowful, despondent, forlorn, anguished",
          "Use a thesaurus strategically - not for every word",
          "Choose words that fit your tone and setting",
          "Vary word choice - don't overuse the same word or phrase"
        ],
        teacherNotes: "Show how sophisticated vocabulary elevates writing. But warn against using words they don't fully understand - it shows in the writing.",
        activityInstructions: "Take a paragraph written with simple vocabulary and rewrite it with more sophisticated word choices. Discuss which version is more engaging."
      },
      {
        slideNumber: 11,
        title: "Metaphor & Comparison in Narrative",
        bulletPoints: [
          "Use metaphor and simile to create imagery, not to explain",
          "Example: 'Her anxiety was a flock of birds in her chest' (shows, doesn't tell)",
          "Avoid mixing metaphors: don't compare something to a bird and then a fish",
          "Use extended metaphors for deeper meaning",
          "Keep metaphors fresh - avoid clichés (dark as night, light as a feather)"
        ],
        teacherNotes: "Figurative language in creative writing shows sophistication. Have students identify clichés and replace them with fresh comparisons."
      },
      {
        slideNumber: 12,
        title: "Narrative Perspective: First or Third Person?",
        bulletPoints: [
          "First person: immediate, intimate, but limited knowledge",
          "Third person: more flexibility, can show multiple perspectives",
          "Choose based on what serves your story",
          "Be consistent - don't switch perspectives",
          "Consider whether your narrator is reliable or unreliable"
        ],
        teacherNotes: "Discuss how the same story reads differently from different perspectives. Have students write the same scene from two viewpoints."
      },
      {
        slideNumber: 13,
        title: "Common Pitfalls to Avoid",
        bulletPoints: [
          "Don't over-explain or tell the reader how to feel",
          "Don't use dialogue to convey information the reader doesn't need",
          "Don't describe every physical detail - show, don't tell",
          "Don't write a shopping list of events - make choices and develop them",
          "Don't end too abruptly or drag the ending out"
        ],
        teacherNotes: "These are the most common reasons narratives lose marks. Show examples of each pitfall and how to fix them."
      },
      {
        slideNumber: 14,
        title: "Endings: Satisfy or Surprise",
        bulletPoints: [
          "Ending should resolve the conflict or reflect on it meaningfully",
          "Avoid: tying everything up neatly, sudden deaths, 'it was all a dream'",
          "Strong endings often have: a twist, a moment of realisation, or bittersweet closure",
          "Last line should be memorable and worth the wait",
          "End before you've said everything - leave the reader thinking"
        ],
        teacherNotes: "Endings are disproportionately important. Show examples of strong and weak endings. Have students practise writing endings that linger.",
        activityInstructions: "Write several different endings for the same story (happy, sad, twist, open-ended) and discuss which feels most earned."
      },
      {
        slideNumber: 15,
        title: "Proofreading: Technical Accuracy Counts",
        bulletPoints: [
          "Spend 2-3 minutes proofreading at the end",
          "Check: spelling, punctuation, sentence fragments, agreement",
          "Read aloud to catch awkward phrasing",
          "Look for repeated words or phrases you can vary",
          "Technical accuracy is worth up to 12 marks - it matters"
        ],
        teacherNotes: "Many students skip this step. Emphasise that careless errors lose marks that good planning and execution should have earned."
      },
      {
        slideNumber: 16,
        title: "Model Answer Analysis: Opening",
        bulletPoints: [
          "EXAMPLE: 'The parcel sat on the doorstep like an accusation.'",
          "What works: vivid comparison, sets mystery, formal tone",
          "What happens next: reader wants to know what's in the parcel",
          "How it establishes character: protagonist sees objects as threatening",
          "How it sets tone: ominous, tense, reflective"
        ],
        teacherNotes: "Use this as a model for students to annotate what makes it effective. Have them replicate this structure in their own openings."
      },
      {
        slideNumber: 17,
        title: "Model Answer Analysis: Middle",
        bulletPoints: [
          "Develops character through action and internal thought",
          "Uses varied sentence length to control pacing",
          "Includes sensory detail that serves the narrative",
          "Dialogue reveals character without explaining",
          "Building tension - reader anticipates what will happen"
        ],
        teacherNotes: "Show a 200-word extract from a strong student response. Annotate techniques used and mark them against the criteria."
      },
      {
        slideNumber: 18,
        title: "Model Answer Analysis: Ending",
        bulletPoints: [
          "Resolves central conflict or reveals its significance",
          "Character has changed or understood something new",
          "Final line is memorable and doesn't explain everything",
          "Reader is satisfied but still thinking",
          "Demonstrates technical control throughout"
        ],
        teacherNotes: "Use this to show how a complete narrative comes together. Emphasise that this didn't happen by accident - it required planning."
      },
      {
        slideNumber: 19,
        title: "Practice: Write Under Timed Conditions",
        bulletPoints: [
          "Choose one prompt (real exam prompts work best)",
          "Spend 5 minutes planning (write it down)",
          "Write for 35 minutes (aim for 450-500 words)",
          "Spend 5 minutes proofreading",
          "Then peer-mark using the mark scheme criteria"
        ],
        teacherNotes: "Do this regularly in class. Timed practice is the best preparation. Use real exam prompts so students get familiar with the style.",
        activityInstructions: "After writing, pair students up and have them mark each other's work using mark scheme. Discuss what was effective and what could improve."
      },
      {
        slideNumber: 20,
        title: "Final Checklist Before Exam Day",
        bulletPoints: [
          "Do I have a clear plan before I start writing?",
          "Is my opening engaging and sets tone?",
          "Does my narrative have clear conflict or complication?",
          "Have I used varied sentence structures?",
          "Is my ending satisfying and earned?",
          "Have I proofread for technical accuracy?",
          "Would I want to read this story if someone else wrote it?"
        ],
        teacherNotes: "Give students this checklist to take home. They should ask themselves these questions before submitting."
      }
    ]
  },
  {
    id: "lit-macbeth-ambition",
    title: "Macbeth: Ambition & Guilt Theme",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Literature - Drama",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Analyse how Shakespeare portrays the destructive nature of ambition",
      "Trace how guilt manifests through Macbeth's psychological deterioration",
      "Understand the relationship between ambition and power",
      "Evaluate Macbeth and Lady Macbeth's moral transformation"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Macbeth: Overview & Context",
        bulletPoints: [
          "Written: 1606 for King James I",
          "Setting: Medieval Scotland (fictional version)",
          "Genre: Tragic drama - explores fall of a protagonist",
          "Key themes: Ambition, power, guilt, fate vs free will, masculinity",
          "Structure: 5 acts, builds from prophecy to inevitable tragedy"
        ],
        teacherNotes: "Context matters. James I believed in divine right of kings, so regicide (Macbeth's crime) was considered unnatural and damaging to the state."
      },
      {
        slideNumber: 2,
        title: "Ambition Defined",
        bulletPoints: [
          "Ambition: intense desire for power, achievement, or recognition",
          "Can be positive: drives people to improve and achieve",
          "Can be destructive: when pursued at any moral cost",
          "In Macbeth: ambition is portrayed as corrupting and ultimately self-defeating",
          "Shakespeare asks: Is Macbeth ambitious by nature or corrupted by circumstance?"
        ],
        teacherNotes: "This is a central question. Students should grapple with whether Macbeth is a bad man or a good man corrupted by ambition."
      },
      {
        slideNumber: 3,
        title: "Act 1: The Seeds of Ambition",
        bulletPoints: [
          "Macbeth is a loyal soldier, praised for bravery in battle",
          "Witches' prophecy: 'All hail, Macbeth, that shalt be king hereafter'",
          "Macbeth is ambitious but initially hesitant about murder",
          "Lady Macbeth questions his manhood and pushes him towards regicide",
          "Duncan is killed - Macbeth becomes king through violence"
        ],
        teacherNotes: "The witches' role is ambiguous. Do they create the ambition or reveal it? This debate is valuable for analysis.",
        activityInstructions: "Read the prophecy scene aloud. Ask students: Would Macbeth have killed Duncan without the witches and Lady Macbeth's influence?"
      },
      {
        slideNumber: 4,
        title: "Lady Macbeth: Ambition Without Conscience",
        bulletPoints: [
          "She hears the prophecy from Macbeth's letter and immediately envisions murder",
          "Calls upon evil spirits to 'unsex' her - remove her feminine compassion",
          "Manipulates Macbeth through questions of masculinity",
          "Quote: 'How tender 'tis to love the thing I hold'",
          "She represents ambition without moral restraint - initially"
        ],
        teacherNotes: "Lady Macbeth is complex. She's not simply evil - she's shown as ambitious and manipulative but ultimately destroyed by conscience."
      },
      {
        slideNumber: 5,
        title: "Guilt: Macbeth's Psychological Breakdown",
        bulletPoints: [
          "Immediately after murder: 'I have no spur to prick the sides of my intent'",
          "Guilt manifests as: insomnia, paranoia, violent impulses",
          "Dagger hallucination before murder - guilt before the crime",
          "Blood imagery: 'A little water clears us of this deed' (later proves false)",
          "Macbeth cannot wash away the guilt - 'Will all great Neptune's ocean wash away?'"
        ],
        teacherNotes: "Guilt is not just remorse - it's a physical, psychological torment that destroys Macbeth from within.",
        activityInstructions: "Trace Macbeth's language about guilt. Chart how it becomes more desperate and violent as the play progresses."
      },
      {
        slideNumber: 6,
        title: "Acts 2-3: The Secure Tyrant",
        bulletPoints: [
          "Macbeth is king but not secure in his position",
          "He orders the murder of Banquo and Fleance (fear drives him)",
          "Murder becomes habitual - each crime leads to more crimes",
          "Macbeth becomes isolated, unable to trust anyone",
          "Power achieved through ambition brings insecurity and paranoia"
        ],
        teacherNotes: "Show how ambition doesn't satisfy - it creates the need for more ambition. The crown is hollow without security."
      },
      {
        slideNumber: 7,
        title: "The Banquet Scene: Macbeth's Isolation",
        bulletPoints: [
          "Macbeth sees Banquo's ghost - only he sees it",
          "In front of his thegns (nobles), he's visibly disturbed",
          "His lack of control reveals his guilt and instability",
          "Quote: 'I am in blood stepped in so far that should I wade no more'",
          "The feast, meant to secure his position, becomes a display of his weakness"
        ],
        teacherNotes: "This scene shows ambition's cost - Macbeth cannot enjoy his success because he's tormented by guilt."
      },
      {
        slideNumber: 8,
        title: "Lady Macbeth's Guilt: Sleepwalking Scene",
        bulletPoints: [
          "She, who seemed unsexed and ruthless, is destroyed by conscience",
          "Sleepwalking reveals unconscious guilt she cannot suppress",
          "Quote: 'Out, damned spot. Out, I say.'",
          "She tries to wash away imaginary blood - guilt is visceral, not rational",
          "Demonstrates that conscience cannot be permanently overridden"
        ],
        teacherNotes: "This is one of Shakespeare's most powerful explorations of guilt. It shows that even determined ambition cannot escape conscience.",
        activityInstructions: "Have students perform the sleepwalking scene with different interpretations - is she mad, or is her unconscious speaking truth?"
      },
      {
        slideNumber: 9,
        title: "The Witches' Second Prophecy: False Comfort",
        bulletPoints: [
          "'None of woman born shall harm Macbeth'",
          "'Macbeth shall never vanquished be until Great Birnam Wood to Dunsinane hill shall come'",
          "These are literally true but misleadingly interpreted",
          "Macbeth's ambition makes him arrogant - he ignores hidden meanings",
          "The prophecies drive him to more murder (Macduff's family)"
        ],
        teacherNotes: "The witches don't lie - they're just ambiguous. Macbeth's ambition blinds him to alternative interpretations."
      },
      {
        slideNumber: 10,
        title: "The Murder of Macduff's Family: Ambition Unchecked",
        bulletPoints: [
          "Macbeth orders their murder out of fear, not necessity",
          "This is the moment of his deepest moral corruption",
          "Killing innocents shows ambition has transformed him completely",
          "His early hesitation about Duncan is completely gone",
          "Even his murderers are shocked by his cruelty"
        ],
        teacherNotes: "This murder is the point of no return. It shows how ambition has corrupted Macbeth from a loyal soldier to a tyrant."
      },
      {
        slideNumber: 11,
        title: "Act 5: The Hollow Crown",
        bulletPoints: [
          "Macbeth has achieved his ambition - he is king",
          "But he feels nothing: 'Life's but a walking shadow, a poor player'",
          "He's surrounded by enemies; his wife is dead (likely by suicide)",
          "Quote: 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace'",
          "The ambition that drove him has left him empty"
        ],
        teacherNotes: "This is the ultimate statement about ambition - it promises fulfilment but delivers emptiness."
      },
      {
        slideNumber: 12,
        title: "Fate vs Free Will: The Central Question",
        bulletPoints: [
          "Do the witches determine Macbeth's fate, or does he choose?",
          "Macbeth uses the prophecy as justification for his actions",
          "But he chooses to murder Duncan, not the witches",
          "He chooses to murder Banquo and Macduff's family",
          "Shakespeare suggests: the witches reveal temptation, but Macbeth chooses evil"
        ],
        teacherNotes: "This debate is essential. Help students see that Shakespeare complicates the question - it's both fate and choice."
      },
      {
        slideNumber: 13,
        title: "Masculine Identity & Ambition",
        bulletPoints: [
          "Lady Macbeth: 'Are you a man?' - uses masculinity to drive him to murder",
          "Macbeth equates manhood with aggression and ambition",
          "Later: 'I have no sons' - his ambition leaves him with no legacy",
          "Macduff: 'I'll not fight with a man that has no children' - true manhood is about protecting",
          "Shakespeare questions how ambition distorts masculine identity"
        ],
        teacherNotes: "This is a sophisticated theme. Ambition is portrayed as a distortion of masculinity, not its natural expression."
      },
      {
        slideNumber: 14,
        title: "Imagery Analysis: Blood, Sleep, Darkness",
        bulletPoints: [
          "Blood: Represents guilt, violence, and the impossibility of washing away crime",
          "Sleep: Represents peace and innocence - which Macbeth murders along with Duncan",
          "Darkness: Enables the crime but also represents moral blindness",
          "These images recur and intensify throughout the play",
          "Imagery shows internal psychological states made visible"
        ],
        teacherNotes: "Trace these images through the play. Show how Shakespeare uses them to track Macbeth's moral deterioration.",
        activityInstructions: "Find 5 quotes using blood, sleep, or darkness. Chart how the meaning changes as the play progresses."
      },
      {
        slideNumber: 15,
        title: "Thematic Summary: Ambition & Guilt",
        bulletPoints: [
          "Ambition is portrayed as corrosive - it corrupts the person who pursues it",
          "Power achieved through evil cannot be enjoyed or secured",
          "Guilt is inescapable - it manifests psychologically and physically",
          "Macbeth's tragedy is that he achieves his ambition only to find it meaningless",
          "Shakespeare argues for the importance of conscience and moral restraint"
        ],
        teacherNotes: "This is the takeaway message. Macbeth is a warning about the cost of unchecked ambition."
      }
    ]
  },
  {
    id: "lit-christmas-carol-responsibility",
    title: "A Christmas Carol: Social Responsibility",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Literature - Prose",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Analyse Dickens' critique of Victorian society and economic inequality",
      "Understand social responsibility as a central theme",
      "Trace Scrooge's transformation and moral redemption",
      "Evaluate Dickens' use of supernatural narrative to convey moral messages"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "A Christmas Carol: Context & Purpose",
        bulletPoints: [
          "Written: 1843 (height of Industrial Revolution)",
          "Published: November 1843, sold out by Christmas",
          "Dickens' purpose: To critique social inequality and promote charitable giving",
          "Victorian England: Extreme wealth alongside dire poverty",
          "Novella length: Deliberately short and accessible for wide audience"
        ],
        teacherNotes: "This was a radical work. Dickens was arguing that the rich had a moral obligation to the poor - a controversial idea at the time."
      },
      {
        slideNumber: 2,
        title: "Scrooge: The Epitome of Social Irresponsibility",
        bulletPoints: [
          "Scrooge represents capitalist self-interest taken to its extreme",
          "Quote: 'If they would rather die, they had better do it, and decrease the surplus population'",
          "He rejects responsibility for the poor: 'It's not my business'",
          "He hoards wealth while workers starve",
          "His name has become synonymous with meanness and greed"
        ],
        teacherNotes: "Scrooge is not just a character - he's a symbol of capitalism divorced from morality and human connection."
      },
      {
        slideNumber: 3,
        title: "Stave 1: The Present State of Society",
        bulletPoints: [
          "Scrooge is wealthy but miserable and alone",
          "Cratchit works in cold, miserable conditions for meagre wage",
          "Charities appeal to Scrooge for donations; he refuses",
          "The poor are represented as background to his world",
          "Marley's ghost appears - warns that redemption is possible but time is running out"
        ],
        teacherNotes: "Show contrast between Scrooge's wealth and Cratchit's poverty. They work in the same building but live in different worlds."
      },
      {
        slideNumber: 4,
        title: "The Three Spirits: A Moral Education",
        bulletPoints: [
          "The ghosts represent three time periods: Past, Present, Future",
          "They are Scrooge's only hope for redemption and self-awareness",
          "Each spirit shows Scrooge a different perspective on his life",
          "The journey is interior - Scrooge must confront his own choices",
          "The supernatural element makes moral lessons vivid and undeniable"
        ],
        teacherNotes: "The ghosts are not punishing Scrooge - they're trying to save him. This is crucial to understanding the message of redemption."
      },
      {
        slideNumber: 5,
        title: "Stave 2: The Ghost of Christmas Past",
        bulletPoints: [
          "Shows Scrooge his younger self - lonely, ambitious, isolated",
          "Reveals how he became hard-hearted: loss of loved ones, pursuit of wealth",
          "Fan (his sister) shows warmth Scrooge has lost",
          "Belle rejects him because he loves gold more than her",
          "Scrooge sees the roots of his isolation and emotional coldness"
        ],
        teacherNotes: "This stave asks: How did Scrooge become like this? The answer is: through his own choices and losses that hardened him."
      },
      {
        slideNumber: 6,
        title: "Stave 3: The Ghost of Christmas Present",
        bulletPoints: [
          "Shows abundance coexisting with poverty - inequality is stark",
          "The Cratchit family Christmas is joyful despite poverty",
          "Tiny Tim is introduced - innocent, suffering, possibly dying",
          "The spirit shows miners, sailors, and others celebrating",
          "Contrast: Cratchit family has love; Scrooge has wealth but no love"
        ],
        teacherNotes: "This is where the social critique is sharpest. Dickens shows that poor people have more genuine happiness than the wealthy."
      },
      {
        slideNumber: 7,
        title: "Tiny Tim: The Symbol of Innocent Suffering",
        bulletPoints: [
          "Tiny Tim is good-natured despite illness and poverty",
          "He represents innocent victims of social inequality",
          "His possible death would be caused by Scrooge's refusal to pay fair wages",
          "The spirit tells Scrooge: 'If these shadows remain unchanged, the child will die'",
          "Tim's fate depends on whether the wealthy choose responsibility"
        ],
        teacherNotes: "Tiny Tim is not a real person to Scrooge initially - he's a statistic. The ghost makes him real and sympathetic."
      },
      {
        slideNumber: 8,
        title: "Stave 4: The Ghost of Christmas Yet to Come",
        bulletPoints: [
          "Silent and terrifying - shows a possible future",
          "Scrooge is dead; businessmen discuss his death with indifference",
          "His possessions are stolen by his servants and laundresses",
          "Tiny Tim is also dead, buried in a neglected grave",
          "Scrooge desperately asks: 'Are these the shadows of things that will be, or things that may be?'"
        ],
        teacherNotes: "This stave shows the ultimate consequence of irresponsibility - a meaningless death leaving nothing behind."
      },
      {
        slideNumber: 9,
        title: "The Question of Change: Free Will & Redemption",
        bulletPoints: [
          "Scrooge asks: 'Can I change these shadows?'",
          "The ghost's answer is ambiguous - the future is not fixed",
          "Dickens suggests: If we change our behaviour, the future changes",
          "Scrooge wakes on Christmas morning - he has been given a chance",
          "His redemption is not inevitable, but possible"
        ],
        teacherNotes: "This is Dickens' optimistic message: No matter how bad someone has been, redemption is possible if they choose it."
      },
      {
        slideNumber: 10,
        title: "Scrooge's Transformation: Not Sentimental",
        bulletPoints: [
          "Scrooge doesn't give away all his money (he's still realistic)",
          "He raises Cratchit's wages and becomes his friend",
          "He donates to charities and becomes known as a generous man",
          "Crucially: He changes how he treats people, not just what he gives",
          "His transformation is about responsibility and human connection"
        ],
        teacherNotes: "Emphasise that Scrooge doesn't become a saint. He becomes responsible - he acknowledges his connection to society."
      },
      {
        slideNumber: 11,
        title: "The Ending: 'God Bless Us, Every One'",
        bulletPoints: [
          "Tiny Tim's closing line is central to the message",
          "It suggests that kindness and responsibility benefit everyone",
          "Scrooge becomes 'as good a friend, as good a master, as good a man as the good old City knew'",
          "The novella ends with affirmation and hope",
          "Scrooge is redeemed; society (through him) shows responsibility"
        ],
        teacherNotes: "This ending is sentimental, but it's also radical - Dickens is saying that wealth can be a moral responsibility, not just a possession."
      },
      {
        slideNumber: 12,
        title: "Social Responsibility: Dickens' Central Message",
        bulletPoints: [
          "The rich cannot ignore the poor without moral consequence",
          "Wealth brings responsibility to use it for good",
          "Human connection is more valuable than money",
          "Individual action (Scrooge's change) can improve society",
          "Compassion and charity are not optional - they're moral imperatives"
        ],
        teacherNotes: "This was controversial in 1843. Dickens was arguing against laissez-faire economics. Help students see the radical nature of this message."
      },
      {
        slideNumber: 13,
        title: "Contrasts: Wealth vs Happiness, Greed vs Generosity",
        bulletPoints: [
          "Scrooge before: wealthy, miserable, isolated",
          "Cratchit family: poor but happy, loving, united",
          "Scrooge's isolation: 'solitary as an oyster'",
          "Christmas symbolizes generosity and human connection",
          "The play argues: Generosity creates happiness; greed creates loneliness"
        ],
        teacherNotes: "Use these contrasts to show how Dickens structures the story around opposition between competing values."
      },
      {
        slideNumber: 14,
        title: "Supernatural Elements: Making the Message Unforgettable",
        bulletPoints: [
          "Ghosts are not explained rationally - they're accepted as real",
          "The supernatural makes the moral lesson vivid and unambiguous",
          "Scrooge's journey is internal (psychological) but portrayed as external (supernatural)",
          "The ghosts bypass intellectual resistance - they show rather than argue",
          "This storytelling choice makes the message emotionally powerful"
        ],
        teacherNotes: "Dickens uses the supernatural not for horror, but for moral clarity. The ghosts make abstract ideas concrete and undeniable."
      },
      {
        slideNumber: 15,
        title: "Legacy: Why This Text Still Matters",
        bulletPoints: [
          "Questions about wealth inequality are still relevant",
          "Social responsibility in wealthy societies remains contested",
          "The text asks: Do the rich have obligations to the poor?",
          "Scrooge's transformation suggests people can change",
          "Christmas Carol remains a text about hope, redemption, and moral choice"
        ],
        teacherNotes: "Help students see this is not just a Victorian story - it speaks to contemporary issues about inequality and responsibility."
      }
    ]
  },
  {
    id: "lit-inspector-calls-priestley",
    title: "An Inspector Calls: Priestley's Message",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Literature - Drama",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Understand Priestley's socialist political message",
      "Analyse how the Inspector is used to convey the play's themes",
      "Trace collective responsibility through the Birling family's guilt",
      "Evaluate the significance of the inspector's ambiguous identity"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "An Inspector Calls: Historical Context",
        bulletPoints: [
          "Written: 1945 (end of WWII), set in 1912 (before WWI)",
          "Post-war period: Britain rebuilding, debating social responsibility",
          "Priestley was a socialist, critical of capitalism and class divisions",
          "The play critiques the Edwardian social order through a modern lens",
          "Deliberately set in the past to show how attitudes have (and haven't) changed"
        ],
        teacherNotes: "The setting is deliberate. By setting it in 1912, Priestley can show that the warnings about war and inequality were ignored."
      },
      {
        slideNumber: 2,
        title: "The Inspector: An Enigma",
        bulletPoints: [
          "Inspector Goole arrives unexpectedly at the Birling family dinner",
          "His name suggests 'ghoul' - is he supernatural?",
          "He investigates Eva Smith's death with forensic detail",
          "He refuses to be bullied by Mr. Birling's authority",
          "By the end, his identity becomes ambiguous and unsettling"
        ],
        teacherNotes: "The Inspector is the moral centre of the play. Students should grapple with whether he's real or a symbol of conscience."
      },
      {
        slideNumber: 3,
        title: "Act 1: The Birling Dinner - Complacency & Capitalization",
        bulletPoints: [
          "The play opens with the family celebrating Sheila and Gerald's engagement",
          "Mr. Birling gives a speech about the future: confidence in progress, denial of war coming",
          "The Titanic is mentioned as 'unsinkable' - dramatic irony",
          "Mr. Birling: 'a man has to look after himself and his own'",
          "The Inspector's arrival interrupts their comfortable evening"
        ],
        teacherNotes: "The opening establishes the Birlings as comfortable, privileged, and self-interested. The Inspector will challenge everything they believe."
      },
      {
        slideNumber: 4,
        title: "Mr. Birling: The Capitalist Authority Figure",
        bulletPoints: [
          "Birling is successful, confident in his status and judgement",
          "He believes poverty is the fault of the poor: 'They're silly enough to imagine the rates here ought to be sixteen shillings'",
          "He fired Eva Smith for asking for higher wages",
          "He uses his position to try to intimidate the Inspector",
          "He represents the self-made man who believes he owes nothing to society"
        ],
        teacherNotes: "Birling is not evil - he's typical of his class and time. But he's complicit in Eva's suffering through his indifference."
      },
      {
        slideNumber: 5,
        title: "Mrs. Birling: Privilege & Denial",
        bulletPoints: [
          "She represents upper-class women disconnected from social reality",
          "She works for a charity but rejects responsibility for helping Eva",
          "She denies Eva aid because Eva gave a false name",
          "She's more concerned with propriety than justice",
          "She refuses to acknowledge her role in Eva's death"
        ],
        teacherNotes: "Mrs. Birling shows how privilege can lead to moral blindness. She sees herself as charitable while being cruel."
      },
      {
        slideNumber: 6,
        title: "Sheila Birling: Youth & Conscience",
        bulletPoints: [
          "Initially self-centred and cruel (gets Eva fired from a shop)",
          "She feels immediate guilt and shame when confronted",
          "She shows capacity for moral growth and self-awareness",
          "She understands the Inspector's message: 'We are responsible for each other'",
          "She represents hope that the next generation might be different"
        ],
        teacherNotes: "Sheila's transformation is significant. She shows that young people are not trapped by their class - they can choose differently."
      },
      {
        slideNumber: 7,
        title: "Gerald Croft: Complicity & Class Loyalty",
        bulletPoints: [
          "Gerald had an affair with Eva, using his power and money",
          "He shows remorse initially but is persuaded by Mr. Birling to deny responsibility",
          "He chooses his class loyalty over moral responsibility",
          "He represents the comfortable middle class who benefit from exploitation",
          "His return to complacency shows how easily guilt can be suppressed"
        ],
        teacherNotes: "Gerald's arc is tragic. He could have been different, but he chooses to retreat into privilege and denial."
      },
      {
        slideNumber: 8,
        title: "Eric Birling: Guilt & Alcoholism",
        bulletPoints: [
          "Eric also had relations with Eva and fathered her unborn child",
          "He stole money from his father to support her",
          "He's consumed by genuine guilt and shame",
          "He's the only character (besides Sheila) who truly accepts responsibility",
          "His drinking hints at psychological torment from his actions"
        ],
        teacherNotes: "Eric shows that conscience exists even in the young and privileged. His guilt is real and inescapable."
      },
      {
        slideNumber: 9,
        title: "Eva Smith: The Absent Center",
        bulletPoints: [
          "Eva never appears on stage - she's dead before the play begins",
          "She represents all exploited workers, all victims of the system",
          "Each character's treatment of her reveals their moral character",
          "She's unnamed and powerless - typical of working-class women",
          "Her death is described as suicide: she took her own life"
        ],
        teacherNotes: "Eva's absence is crucial. She's not a full character - she's a victim whose humanity the privileged failed to recognize."
      },
      {
        slideNumber: 10,
        title: "Collective Responsibility: Priestley's Central Message",
        bulletPoints: [
          "The Inspector: 'Eva Smith is dead. And if we don't admit responsibility to her, we'll make a bigger mess'",
          "The play argues: Everyone contributed to Eva's death",
          "Birling fired her; Sheila got her sacked; Gerald seduced her; Mrs. Birling refused her help; Eric fathered her child",
          "No single person is solely responsible - but all are implicated",
          "Priestley argues: Society is interconnected; we are responsible for each other"
        ],
        teacherNotes: "This is socialist philosophy - individuals are part of a society, and all share responsibility for its victims."
      },
      {
        slideNumber: 11,
        title: "Act 3: The Inspector Departs - Revelation of Identity",
        bulletPoints: [
          "After his final speech, the Inspector leaves",
          "Mr. Birling makes a phone call to confirm: no such inspector exists",
          "No girl matching Eva's description has died",
          "The family's guilt seems unfounded - was it all an illusion?",
          "But immediately after, news comes: a girl has died in hospital from drinking disinfectant"
        ],
        teacherNotes: "This twist is brilliant. It makes the audience question: Who was the Inspector? Does it matter?"
      },
      {
        slideNumber: 12,
        title: "Is the Inspector Real? The Play's Ambiguity",
        bulletPoints: [
          "No definitive answer is given - Priestley deliberately leaves this unclear",
          "Possible interpretations: He's a real policeman; He's a ghost; He's a figment of conscience",
          "What matters is the truth of his accusations, not his identity",
          "His reality is less important than his message",
          "The ambiguity forces the audience to grapple with the play's morality"
        ],
        teacherNotes: "Encourage debate about the Inspector's identity. The point is that the play challenges us to believe in responsibility regardless."
      },
      {
        slideNumber: 13,
        title: "The Ending: Renewed Guilt",
        bulletPoints: [
          "The Birlings begin to feel relief - maybe the Inspector wasn't real",
          "But the news of the actual girl's death shatters this relief",
          "The family is plunged back into guilt and confusion",
          "Eric and Sheila are horrified; Mr. Birling and Mrs. Birling are defensive",
          "The play ends with unresolved tension and continued moral questioning"
        ],
        teacherNotes: "The ending is not neat. Priestley refuses to provide comfort or clear resolution. The audience, like the family, is left troubled."
      },
      {
        slideNumber: 14,
        title: "Imagery & Symbolism: Light & Darkness",
        bulletPoints: [
          "The Inspector's arrival brings harsh 'light' to the family's comfortable darkness",
          "Stage directions often involve lighting that isolates characters",
          "The Inspector's knowledge seems almost supernatural - he knows things before being told",
          "The 'brightness' of his presence disrupts the family's easy comfort",
          "This imagery suggests moral illumination - seeing the truth about oneself"
        ],
        teacherNotes: "Use stage directions to show how Priestley uses lighting symbolically to represent moral clarity."
      },
      {
        slideNumber: 15,
        title: "Priestley's Message: Interconnectedness & Responsibility",
        bulletPoints: [
          "We are not 'an island unto ourselves' - we are bound to others",
          "Capitalism that ignores human suffering is immoral",
          "The next generation must learn responsibility or face consequences",
          "Individual morality is inseparable from social responsibility",
          "The play remains relevant because these questions are never settled"
        ],
        teacherNotes: "End by connecting the play's message to contemporary debates about wealth inequality, social responsibility, and economic justice."
      }
    ]
  }
];

export const teacherPowerpoints2: TeacherPresentation[] = [
  {
    id: "aqa-power-conflict-poetry",
    title: "AQA Power & Conflict Poetry Overview",
    examBoard: "AQA",
    topic: "Poetry - Power & Conflict",
    yearGroup: "GCSE",
    slideCount: 20,
    estimatedDuration: "4 hours",
    learningObjectives: [
      "Analyse poems exploring themes of power and conflict",
      "Compare poetic techniques across different texts",
      "Understand historical and cultural contexts of power dynamics",
      "Develop sophisticated analysis of form and meaning"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Power & Conflict Anthology: 15 Key Poems",
        bulletPoints: [
          "Power and conflict are explored across multiple time periods",
          "Poems range from contemporary to 18th century",
          "Themes include: war, colonialism, political oppression, personal power dynamics",
          "You need to know all 15 poems and be able to compare them",
          "Exam requires comparison of two poems chosen from the anthology"
        ],
        teacherNotes: "This is a major unit. The key to success is deep knowledge of all poems and practice comparing them."
      },
      {
        slideNumber: 2,
        title: "The 15 Poems: A Quick Overview",
        bulletPoints: [
          "Ozymandias (Shelley) - Power's impermanence",
          "London (Blake) - Political oppression and social suffering",
          "The Prelude (Wordsworth) - Personal power and nature's might",
          "My Last Duchess (Browning) - Control and dominance in relationships",
          "The Charge of the Light Brigade (Tennyson) - War and obedience",
          "Exposure (Owen) - Futility of war, soldiers vs nature",
          "Bayonet Charge (Reid) - Individual in warfare, shock of combat",
          "Porphyria's Lover (Browning) - Obsession and violent control",
          "The Mask of the Red Death (Armitage) - Power and mortality",
          "Kamikaze (Garland) - Family honour vs individual choice",
          "Checking Out Me History (Agard) - Colonial power and narrative control",
          "Remains (Armitage) - Psychological trauma from conflict",
          "War Photographer (Duffy) - Power of photography and truth",
          "Tissue (Duffy) - Fragility of political power, globalisation",
          "The Right Word (Armitage) - Language as power tool"
        ],
        teacherNotes: "Print this list for students. They should know these poems well enough to reference them in essays without checking."
      },
      {
        slideNumber: 3,
        title: "Ozymandias: The Decay of Power",
        bulletPoints: [
          "Shelley's sonnet about a fallen ancient ruler",
          "Ironic inscription: 'Look on my Works, ye Mighty, and despair!'",
          "The statue is now ruined; the kingdom is a desert",
          "Theme: Power is temporary; even mighty rulers are forgotten",
          "Form: Sonnet structure suggests classical ideals, now broken"
        ],
        teacherNotes: "This is often the first poem studied. Its message is clear - power is temporary. Use it as a baseline for comparing other power poems."
      },
      {
        slideNumber: 4,
        title: "Comparing Ozymandias & The Mask of the Red Death",
        bulletPoints: [
          "Both explore power's inability to protect from death",
          "Ozymandias: ruler's legacy crumbles",
          "Red Death: prince can't escape mortality behind his walls",
          "Both suggest: ultimate powerlessness in the face of time and death",
          "Different forms: Shelley's sonnet vs Armitage's poem"
        ],
        teacherNotes: "This is a common exam pairing. Students should understand how both poems explore the same theme differently."
      },
      {
        slideNumber: 5,
        title: "London & Checking Out Me History: Colonial Power",
        bulletPoints: [
          "Blake's London: Critique of authority and control in an oppressed city",
          "Agard's poem: Critique of colonial control of historical narrative",
          "Both poems argue: Power silences voices and controls meaning",
          "Blake: Institutional power (monarchy, church, military)",
          "Agard: Colonial power suppressing alternative histories"
        ],
        teacherNotes: "These poems show different types of power - institutional and colonial. Both use the power of poetry to challenge oppressive power."
      },
      {
        slideNumber: 6,
        title: "War Poetry: Individual vs System",
        bulletPoints: [
          "Owen's Exposure: Soldiers helpless against nature and indifference",
          "Reid's Bayonet Charge: Individual soldier in chaos, questions why he's fighting",
          "Tennyson's Charge of the Light Brigade: Obedience despite futility",
          "All show: Individual powerlessness within military/political systems",
          "Different eras, but consistent critique of war's cost"
        ],
        teacherNotes: "Have students compare these three war poems. Show how each uses different techniques to convey powerlessness."
      },
      {
        slideNumber: 7,
        title: "Personal Power & Control: The Browning Poems",
        bulletPoints: [
          "My Last Duchess: Duke's control over wife and her image after death",
          "Porphyria's Lover: Speaker's violent assertion of power over lover",
          "Both show: Power in relationships leading to harm and control",
          "Both use dramatic monologue - speakers reveal their own culpability",
          "Contrast: Institutional power vs intimate power"
        ],
        teacherNotes: "These poems are disturbing but brilliant critiques of power. Help students see they're not celebrating the speakers - they're exposing them."
      },
      {
        slideNumber: 8,
        title: "Form & Power: How Structure Conveys Meaning",
        bulletPoints: [
          "Ozymandias (Sonnet): Formal structure undermined by decay of power",
          "The Charge of the Light Brigade (Ballad): Repetitive form mirrors military obedience",
          "London (Quatrains): Repetition emphasizes oppression",
          "War Photographer (Free verse): Fragmented form mirrors fragmented experience",
          "Form is not neutral - it conveys ideas about power and control"
        ],
        teacherNotes: "Teach students that form matters. The way a poem is structured contributes to its meaning about power."
      },
      {
        slideNumber: 9,
        title: "Language Techniques: Power & Powerlessness",
        bulletPoints: [
          "Imperative verbs: Commands showing authority (Charge, Check out)",
          "Passive voice: Shows lack of agency (soldiers are sent, killed)",
          "Metaphor: Transforms power dynamics ('drowning', 'chains', 'walls')",
          "Repetition: Emphasises oppression or dominance",
          "Enjambment: Creates momentum or disruption"
        ],
        teacherNotes: "Have students identify these techniques in poems. Show how language choices directly convey power relationships."
      },
      {
        slideNumber: 10,
        title: "Comparison Strategy: Finding Links",
        bulletPoints: [
          "Common themes: Power, conflict, mortality, powerlessness, control",
          "Different contexts: War, relationships, politics, nature, colonialism",
          "Different forms: Sonnets, dramatic monologues, free verse, ballads",
          "Different tones: Mournful, angry, satirical, reflective, horrified",
          "Ask: How does each poem explore a similar theme differently?"
        ],
        teacherNotes: "Teach students a comparison methodology. Give them sentence starters like 'Both poems explore...' and 'However, unlike X, Y...'."
      },
      {
        slideNumber: 11,
        title: "Context Matters: Historical & Cultural Understanding",
        bulletPoints: [
          "Romantic era (Wordsworth, Shelley): Power of nature, individual freedom",
          "Victorian era (Browning, Tennyson): Power of will, control, duty",
          "WWI (Owen, Sassoon): Industrial slaughter, young men's powerlessness",
          "Post-colonial (Agard): Reclaiming narratives, challenging imposed histories",
          "Contemporary (Duffy, Armitage): Media power, globalisation, psychological trauma"
        ],
        teacherNotes: "Show how historical period shapes what poets write about and how they write. Context illuminates meaning."
      },
      {
        slideNumber: 12,
        title: "EXAMPLE COMPARISON: Ozymandias & Tissue",
        bulletPoints: [
          "Ozymandias: Ancient power crumbles to dust",
          "Tissue: Modern political power is fragile (like tissue paper)",
          "Both: Power is temporary and easily destroyed",
          "Ozymandias: Natural erosion over centuries",
          "Tissue: Human action (war, conflict) destroys quickly",
          "Both suggest: Acceptance of transience is necessary"
        ],
        teacherNotes: "Model this comparison for students. Show how to structure an answer that identifies similarities and explores differences meaningfully."
      },
      {
        slideNumber: 13,
        title: "Common Essay Structures for Comparison",
        bulletPoints: [
          "Thematic: Compare how both poems explore one theme",
          "Technical: Compare how form/language conveys similar ideas differently",
          "Contextual: Compare how historical context shapes different treatments",
          "Integrated: Weave comparisons throughout rather than separate sections",
          "Key: Always come back to the question - don't just list similarities"
        ],
        teacherNotes: "Don't let students think comparison means separate paragraphs about each poem. Show integrated comparison models."
      },
      {
        slideNumber: 14,
        title: "Avoiding Common Mistakes in Poetry Analysis",
        bulletPoints: [
          "Don't just identify techniques - explain their effect",
          "Don't assume all poems are autobiographical - they're constructed arguments",
          "Don't ignore form - it conveys meaning",
          "Don't compare only what's similar - explore differences too",
          "Don't lose sight of the theme (power & conflict) - everything should link to it"
        ],
        teacherNotes: "These mistakes are endemic in student work. Be explicit about what not to do."
      },
      {
        slideNumber: 15,
        title: "Revision Strategy: Knowing All 15 Poems",
        bulletPoints: [
          "Make a grid: Poem title, form, context, main theme, key quote",
          "Group poems by theme: War, control, powerlessness, mortality, resistance",
          "Practice comparing different pairs multiple times",
          "Know at least 2-3 strong quotes from each poem",
          "Be able to explain why poets chose their particular forms and language"
        ],
        teacherNotes: "Systematic revision beats last-minute cramming. Encourage students to make their grid and update it regularly.",
        activityInstructions: "Have students make a study grid and fill it in over the unit. Use this as the basis for revision."
      },
      {
        slideNumber: 16,
        title: "Timed Practice: Exam-Style Comparison",
        bulletPoints: [
          "Question: Compare how two poets explore powerlessness (45 minutes)",
          "Step 1 (5 min): Choose two poems and quickly plan key points",
          "Step 2 (35 min): Write comparison essay integrating analysis",
          "Step 3 (5 min): Check for clear argument and textual evidence",
          "Then peer-mark using mark scheme criteria"
        ],
        teacherNotes: "Timed practice is essential. Do this regularly with different question prompts."
      },
      {
        slideNumber: 17,
        title: "Understanding Mark Schemes: What Examiners Look For",
        bulletPoints: [
          "Knowledge of texts and contexts (select appropriate poems, understand historical moment)",
          "Analytical skill (identify techniques, explain effects, link to themes)",
          "Comparative skill (find meaningful similarities and differences)",
          "Use of evidence (well-integrated quotes supporting points)",
          "Sophistication (nuanced interpretation, doesn't oversimplify)"
        ],
        teacherNotes: "Share the actual mark scheme with students. Show examples of responses at different levels."
      },
      {
        slideNumber: 18,
        title: "Using Quotations Effectively",
        bulletPoints: [
          "Embed quotes in your own sentences",
          "Quote sparingly - 1-2 lines per point usually",
          "Explain what the quote shows, not just what it means",
          "Link quotes to wider themes and contexts",
          "Avoid block quotes - use selective quotation"
        ],
        teacherNotes: "Demonstrate effective quotation use. Show the difference between embedding and blocking out quotes."
      },
      {
        slideNumber: 19,
        title: "Exam Technique: Managing Time & Stress",
        bulletPoints: [
          "Spend 5 minutes understanding the question",
          "Spend 5 minutes planning your response",
          "Spend 35 minutes writing your detailed analysis",
          "Spend 5 minutes checking for errors and clarity",
          "Quality of analysis matters more than length"
        ],
        teacherNotes: "Stress the importance of planning. Students who plan tend to write better-organised essays."
      },
      {
        slideNumber: 20,
        title: "Final Revision Checklist",
        bulletPoints: [
          "Can I identify all 15 poems and recall their main themes?",
          "Can I quote accurately from each poem?",
          "Do I understand the historical and cultural contexts?",
          "Can I compare any two poems meaningfully?",
          "Can I explain how form and language convey meaning?",
          "Can I write a structured comparative essay under time pressure?",
          "Am I ready for the exam?"
        ],
        teacherNotes: "Give students this checklist. If they can answer yes to all questions, they're ready."
      }
    ]
  },
  {
    id: "persuasive-writing-toolkit",
    title: "Persuasive Writing Toolkit",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Writing Skills",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Identify and analyse persuasive techniques in writing",
      "Construct persuasive arguments with clear evidence",
      "Adapt persuasive writing to different audiences and purposes",
      "Develop personal voice while maintaining persuasive effect"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "What Is Persuasive Writing?",
        bulletPoints: [
          "Persuasive writing aims to convince the reader to believe or do something",
          "It relies on emotion, logic, and credibility",
          "Different from informative writing - it takes a stance",
          "Appears in: Articles, speeches, advertisements, campaigns, letters",
          "Success measured by: How effectively it convinces the audience"
        ],
        teacherNotes: "Persuasion is not the same as coercion. Good persuasive writing makes an honest argument, not a dishonest one."
      },
      {
        slideNumber: 2,
        title: "The Three Pillars of Persuasion",
        bulletPoints: [
          "Ethos: Credibility and trustworthiness of the writer",
          "Pathos: Emotional appeal to the reader",
          "Logos: Logical reasoning and evidence"
        ],
        teacherNotes: "These come from Aristotle. Strong persuasive writing uses all three."
      },
      {
        slideNumber: 3,
        title: "Ethos: Building Credibility",
        bulletPoints: [
          "Show expertise: Reference relevant knowledge or experience",
          "Show respect: Acknowledge counterarguments fairly",
          "Show honesty: Admit limitations or complexities",
          "Show alignment: Show you share values with your audience",
          "Examples: 'As a teacher with 20 years experience...' / 'I understand why some disagree, however...'"
        ],
        teacherNotes: "Credibility is built through evidence, fairness, and transparency. Help students see they don't need false authority."
      },
      {
        slideNumber: 4,
        title: "Pathos: Emotional Appeal",
        bulletPoints: [
          "Use vivid, specific examples: Not 'poverty is bad' but describe a specific family's struggle",
          "Tell stories: Narratives are more powerful than statistics",
          "Use emotive language: Words that create emotional response",
          "Address shared values: Appeal to what the audience cares about",
          "Balance: Emotion without manipulation; passion without exaggeration"
        ],
        teacherNotes: "Emotional appeal is powerful but can be seen as manipulation. Teach students the ethical use of pathos."
      },
      {
        slideNumber: 5,
        title: "Logos: Logical Reasoning",
        bulletPoints: [
          "Use evidence: Statistics, research, expert opinion",
          "Build clear arguments: Premise → evidence → conclusion",
          "Avoid logical fallacies: Don't use flawed reasoning",
          "Use rhetorical questions: 'Don't we all want safer schools?'",
          "Causal reasoning: Explain cause and effect relationships"
        ],
        teacherNotes: "Logic without emotion feels cold. But pathos without logos feels manipulative. Both matter."
      },
      {
        slideNumber: 6,
        title: "Key Persuasive Techniques: Rhetorical Devices",
        bulletPoints: [
          "Repetition: Emphasis through repetition ('We must... We must... We must')",
          "Rhetorical questions: Questions that assume agreement ('Don't we deserve better?')",
          "Anaphora: Beginning sentences with same words",
          "Metaphor: Help audiences see ideas in new ways",
          "Contrast: Highlight differences to emphasise a point"
        ],
        teacherNotes: "These techniques should feel natural, not forced. Model how to use them authentically."
      },
      {
        slideNumber: 7,
        title: "Sentence Structure & Persuasion",
        bulletPoints: [
          "Short sentences: Create impact, urgency, emphasis",
          "Long sentences: Build complexity, show sophistication",
          "Varied length: Keeps reader engaged, prevents monotony",
          "Parallelism: Repeated grammatical structure emphasises points",
          "The final sentence matters most - end strongly"
        ],
        teacherNotes: "Sentence variety is crucial to maintaining engagement while building persuasive force."
      },
      {
        slideNumber: 8,
        title: "Vocabulary Choices in Persuasive Writing",
        bulletPoints: [
          "Formal vs Informal: Choose based on audience (formal for adults, informal for peers)",
          "Positive framing: 'Opportunity' vs 'problem'; 'investment' vs 'cost'",
          "Connotation matters: 'Freedom fighter' vs 'terrorist' (same action, different framing)",
          "Emotive words: Choose words that resonate emotionally without being dishonest",
          "Precision: Vague words weaken persuasion; specific language strengthens it"
        ],
        teacherNotes: "Show how word choice shapes perception. This is where persuasion becomes either honest advocacy or manipulation."
      },
      {
        slideNumber: 9,
        title: "Addressing Your Audience",
        bulletPoints: [
          "Know your audience: Age, education, values, potential objections",
          "Adjust tone: Formal for authority, casual for peers, sympathetic for those who disagree",
          "Acknowledge their perspective: 'You might think... but consider...'",
          "Use 'we': Creates inclusive feeling, builds community",
          "Anticipate objections: Address them before opponents do"
        ],
        teacherNotes: "The most persuasive writing acknowledges the reader. Show how adjusting tone changes persuasive impact."
      },
      {
        slideNumber: 10,
        title: "Building an Argument: Structure",
        bulletPoints: [
          "Hook: Grab attention with a striking opening",
          "Thesis: State your position clearly",
          "Evidence: 2-3 strongest supporting points with evidence",
          "Counterargument: Address opposing views, then refute them",
          "Conclusion: Restate thesis powerfully, call to action if appropriate"
        ],
        teacherNotes: "This is the basic structure. Students should be able to apply it to any persuasive task."
      },
      {
        slideNumber: 11,
        title: "Evidence Types: Making Your Case",
        bulletPoints: [
          "Statistical data: Numbers are persuasive (cite sources)",
          "Expert testimony: Quotes from respected authorities",
          "Examples: Specific cases illustrate abstract points",
          "Analogies: Compare to something the audience understands",
          "Personal experience: 'I saw this firsthand...' is powerful"
        ],
        teacherNotes: "Teach students to ask: Where does this evidence come from? Is it reliable? Is it recent?"
      },
      {
        slideNumber: 12,
        title: "Handling Counterarguments",
        bulletPoints: [
          "Don't ignore opposition - it looks evasive",
          "Present counterarguments fairly and respectfully",
          "Explain why they're insufficient or flawed",
          "Concede small points if valid - it builds credibility",
          "Use counterarguments to strengthen your own position"
        ],
        teacherNotes: "The ability to fairly address opposition is a mark of sophisticated persuasion."
      },
      {
        slideNumber: 13,
        title: "Avoiding Logical Fallacies",
        bulletPoints: [
          "Ad hominem: Attacking the person, not the argument ('He's stupid, so he's wrong')",
          "Strawman: Attacking exaggerated version of opposing argument",
          "False dichotomy: Presenting only two options when more exist",
          "Hasty generalisation: Drawing conclusions from too little evidence",
          "Begging the question: Assuming the conclusion as evidence"
        ],
        teacherNotes: "Show examples of fallacies in real persuasive writing. Help students avoid them in their own work."
      },
      {
        slideNumber: 14,
        title: "Practice: Persuade on a Controversial Topic",
        bulletPoints: [
          "Topic: School uniforms should/should not be compulsory",
          "Step 1: Identify your audience (parents, students, teachers?)",
          "Step 2: Choose your position and 3 strongest arguments",
          "Step 3: Find evidence for each argument",
          "Step 4: Write 400 words of persuasive writing",
          "Step 5: Peer-review focusing on techniques and clarity"
        ],
        teacherNotes: "Use a topic students can relate to. This exercise shows how perspective shapes argument.",
        activityInstructions: "Have students write opposing positions on the same topic. Compare them to see how perspective shapes evidence selection."
      },
      {
        slideNumber: 15,
        title: "Final Checklist: Is My Writing Persuasive?",
        bulletPoints: [
          "Have I established credibility (ethos)?",
          "Have I appealed to emotion (pathos) appropriately?",
          "Have I provided logical evidence (logos)?",
          "Is my language precise and my tone appropriate?",
          "Have I addressed potential counterarguments?",
          "Does my opening hook the reader?",
          "Does my conclusion drive my argument home?",
          "Would this convince someone who initially disagreed?"
        ],
        teacherNotes: "Give students this checklist. It works for any persuasive task."
      }
    ]
  },
  {
    id: "edexcel-paper1-nonfiction",
    title: "Edexcel Paper 1: Non-Fiction Analysis",
    examBoard: "Edexcel",
    topic: "Non-Fiction Analysis",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Analyse non-fiction texts for form, content, and purpose",
      "Identify writer's voice, tone, and perspective",
      "Track how non-fiction texts construct meaning",
      "Compare two non-fiction texts on similar topics"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Edexcel Paper 1: Non-Fiction Reading",
        bulletPoints: [
          "You are given two unseen non-fiction texts (roughly 800-1200 words each)",
          "Question 1: Analyse one text (15 marks, 15 minutes)",
          "Question 2: Compare two texts (15 marks, 15 minutes)",
          "Non-fiction: Articles, essays, letters, memoirs, speeches, reviews",
          "Focus: How does the writer construct meaning and achieve purpose?"
        ],
        teacherNotes: "This is about reading comprehension and analytical skill. Speed and clarity matter."
      },
      {
        slideNumber: 2,
        title: "What Is Non-Fiction? Texts We Analyse",
        bulletPoints: [
          "Journalism: News articles, reviews, columns",
          "Memoir: Personal narrative with reflection",
          "Essay: Structured argument on a topic",
          "Speech: Persuasive address to an audience",
          "Letter: Formal or informal communication with specific purpose"
        ],
        teacherNotes: "Non-fiction texts have different conventions. Help students understand each type's characteristics."
      },
      {
        slideNumber: 3,
        title: "First Reading: Get the Gist",
        bulletPoints: [
          "Read the whole text without stopping to analyse",
          "What is the text about? (Topic/subject matter)",
          "Who is the writer? (What's their perspective?)",
          "Who is the audience? (Who is this written for?)",
          "What is the purpose? (To inform, persuade, entertain, explain?)",
          "What is the tone? (Serious, ironic, sympathetic, critical?)"
        ],
        teacherNotes: "First reading should be quick - 5 minutes. Don't start analysing yet."
      },
      {
        slideNumber: 4,
        title: "Second Reading: Identify Writer's Methods",
        bulletPoints: [
          "Structure: How is the text organised? Does it matter?",
          "Paragraph function: What does each paragraph do?",
          "Vocabulary: What kinds of words does the writer use?",
          "Sentence structure: Short? Long? Varied?",
          "Tone shifts: Does the tone change? Where and why?"
        ],
        teacherNotes: "Second reading should be more careful - maybe 10 minutes. Mark up the text as you read."
      },
      {
        slideNumber: 5,
        title: "Structure: How Non-Fiction Is Organised",
        bulletPoints: [
          "Chronological: Events in order they happened",
          "Thematic: Organised by ideas or topics",
          "Argumentative: Building from claim to evidence to conclusion",
          "Question-and-answer: Posing questions then addressing them",
          "Ask: Why did the writer choose this structure? Does it help their purpose?"
        ],
        teacherNotes: "Structure is not accidental. Show how structure shapes meaning and serves purpose."
      },
      {
        slideNumber: 6,
        title: "Paragraph Analysis: What's Happening",
        bulletPoints: [
          "Topic sentence: States main idea of paragraph",
          "Development: Evidence, examples, explanation",
          "Conclusion: How does this connect to bigger argument?",
          "Transitions: How does it link to next paragraph?",
          "Ask: Why is this paragraph here? What does it contribute?"
        ],
        teacherNotes: "Many students skip paragraph analysis. But understanding paragraph function is crucial to understanding how texts work."
      },
      {
        slideNumber: 7,
        title: "Vocabulary: Word Choice Reveals Meaning",
        bulletPoints: [
          "Formal vs informal: Reveals audience and tone",
          "Technical language: Shows expertise and authority",
          "Emotive words: Reveal writer's attitude towards subject",
          "Repetition: Emphasises important ideas",
          "Connotation: Words carry associated meanings"
        ],
        teacherNotes: "Show how the same idea can be expressed with different vocabulary, each conveying different meaning."
      },
      {
        slideNumber: 8,
        title: "Sentence Variety: Creating Effects",
        bulletPoints: [
          "Short sentences: Create punch, urgency, emphasis",
          "Long sentences: Build complexity, show sophistication, create flow",
          "Fragmented sentences: Create tension, surprise, emphasis",
          "Questions: Engage reader, create doubt, build argument",
          "Varied length: Keeps reader engaged, prevents monotony"
        ],
        teacherNotes: "Ask students: Why did the writer choose this sentence length here? What effect does it create?"
      },
      {
        slideNumber: 9,
        title: "Writer's Voice & Tone: Attitude Towards Subject",
        bulletPoints: [
          "Voice: The personality behind the writing (formal, friendly, authoritative)",
          "Tone: Attitude towards subject (serious, ironic, sympathetic, critical)",
          "Perspective: The writer's point of view and biases",
          "These are created through: word choice, sentence structure, what they choose to discuss"
        ],
        teacherNotes: "Tone and voice are often confused. Help students understand tone is more specific - attitude towards the subject matter."
      },
      {
        slideNumber: 10,
        title: "Analysis Framework: PEA (Point, Evidence, Analysis)",
        bulletPoints: [
          "Point: What's the writer doing here? (State an observation)",
          "Evidence: Show exactly where and how (quote or describe)",
          "Analysis: Explain the effect and link to purpose (Why does it matter?)",
          "Example: Point: The writer uses short sentences. Evidence: 'He died.' Evidence: 'She walked away.' Analysis: These short sentences create impact and finality, emphasising the tragedy."
        ],
        teacherNotes: "PEA is the gold standard. Use it repeatedly until it becomes automatic."
      },
      {
        slideNumber: 11,
        title: "EXAMPLE ANALYSIS: A Memoir Passage",
        bulletPoints: [
          "Text: 'I remember my grandmother's hands - worn from decades of work, spotted with age. She held mine firmly, saying nothing.'",
          "Point: The writer uses sensory detail and contrast",
          "Evidence: 'worn from decades of work, spotted with age' and physical touch",
          "Analysis: The focus on her hands shows how the writer understands her through her labour. Holding hands without speaking creates intimacy while emphasising the generation gap and unspoken connection between them."
        ],
        teacherNotes: "Show complete analysis. Walk through each step."
      },
      {
        slideNumber: 12,
        title: "Comparing Two Texts: Finding Links",
        bulletPoints: [
          "Similar topics: Both texts address similar themes or issues",
          "Different purposes: One might argue, another might narrative",
          "Different audiences: Each text is written for different readers",
          "Different tones: Same topic, different attitudes",
          "Ask: How do different approaches create different meanings?"
        ],
        teacherNotes: "Comparison is not just 'both texts are about X'. It's about understanding how different writers approach the same topic."
      },
      {
        slideNumber: 13,
        title: "Comparison Structure: Integrated vs Separate",
        bulletPoints: [
          "Integrated: Compare throughout - 'Text A uses X, while Text B uses Y'",
          "Separate: Describe Text A, then Text B, then compare",
          "Integrated is more sophisticated - it shows comparison is the focus, not individual texts",
          "But start with structure that feels natural to you"
        ],
        teacherNotes: "Most strong students use integrated comparison. Model this structure repeatedly."
      },
      {
        slideNumber: 14,
        title: "Practice: Analysing an Unseen Text",
        bulletPoints: [
          "You have 15 minutes",
          "Read the text twice, marking it up as you read",
          "Write 3-4 analytical points using PEA structure",
          "Focus on: structure, vocabulary, sentence structure, tone",
          "Link observations to writer's purpose and effect on reader"
        ],
        teacherNotes: "Do this regularly in class. Time pressure helps students develop fluency and confidence.",
        activityInstructions: "Use real Edexcel non-fiction texts if possible. Time students strictly - 5 minutes reading, 10 minutes writing."
      },
      {
        slideNumber: 15,
        title: "Exam Technique: Managing Time & Stress",
        bulletPoints: [
          "Total time: 1 hour for both questions",
          "Question 1 (15 marks): 15 minutes (5 reading, 10 writing)",
          "Question 2 (15 marks): 15 minutes (5 comparing, 10 writing)",
          "Leave 10 minutes for checking",
          "Quality of analysis matters more than length"
        ],
        teacherNotes: "Time management prevents panic. Students who stick to these timings tend to produce better essays."
      }
    ]
  },
  {
    id: "narrative-writing-atmosphere",
    title: "Narrative Writing: Creating Atmosphere",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Writing Skills - Narrative",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Understand what atmosphere is and how it affects the reader",
      "Use sensory detail to create specific moods",
      "Control pacing and tension through writing technique",
      "Develop narrative that creates and sustains atmosphere"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "What Is Atmosphere?",
        bulletPoints: [
          "Atmosphere is the mood or feeling created by a text",
          "It's the emotional landscape the reader inhabits",
          "Atmosphere can be: tense, peaceful, eerie, joyful, melancholic, ominous",
          "Atmosphere shapes how readers experience and interpret events",
          "It's created through: detail, pace, word choice, structure, sensory language"
        ],
        teacherNotes: "Atmosphere is more subtle than plot or character. Help students learn to see and create it."
      },
      {
        slideNumber: 2,
        title: "Sensory Detail: The Foundation of Atmosphere",
        bulletPoints: [
          "Visual: colours, light, shadows, movement, shapes",
          "Auditory: sounds, silence, music, voices",
          "Tactile: texture, temperature, physical sensation",
          "Olfactory: smells, scents, fragrances",
          "Gustatory: taste, flavours, bitterness"
        ],
        teacherNotes: "Most students focus on visual detail. Push them to use all senses. It makes writing vivid and immersive."
      },
      {
        slideNumber: 3,
        title: "EXAMPLE: Creating Tension Through Sensory Detail",
        bulletPoints: [
          "Weak: 'The house was scary. She walked slowly.'",
          "Strong: 'Dust motes drifted through the single shaft of light. The floorboards groaned under her weight. The air tasted stale, metallic. Her heartbeat was the only sound.'",
          "What changed: Specific sensory detail (sight, sound, taste, proprioception) creates immersion",
          "The reader feels the tension; they don't just hear about it"
        ],
        teacherNotes: "Read both versions aloud. The difference is striking. Emphasise 'show, don't tell'."
      },
      {
        slideNumber: 4,
        title: "Word Choice: Building Mood",
        bulletPoints: [
          "Light vocabulary: bright, glimmer, sparkle, dance, soar (creates lightness)",
          "Dark vocabulary: shadow, creep, lurk, suffocate, decay (creates unease)",
          "Velocity vocabulary: rush, race, hurtle, surge (creates urgency)",
          "Stillness vocabulary: suspended, motionless, hushed, lingering (creates calm)",
          "Choose vocabulary that serves the atmosphere you're building"
        ],
        teacherNotes: "Show how the same object described with different vocabulary creates different moods."
      },
      {
        slideNumber: 5,
        title: "Pacing: Controlling the Reader's Experience",
        bulletPoints: [
          "Fast pacing: Short sentences, quick action, brief paragraphs",
          "Slow pacing: Long sentences, detailed description, lingering observations",
          "Variable pacing: Changes in pace create emphasis and interest",
          "Paragraph breaks: Control when the reader pauses for breath",
          "Dialogue: Quickens pace; silence or introspection slows it"
        ],
        teacherNotes: "Pacing is powerful. Show how the same scene reads differently with different pacing."
      },
      {
        slideNumber: 6,
        title: "Tension: Building & Sustaining",
        bulletPoints: [
          "Tension needs conflict or danger - something at stake",
          "Build gradually: Don't reveal everything at once",
          "Use contrast: Peace disrupted by violence is more shocking",
          "Create questions: What will happen? Why is this happening?",
          "Sustain tension: Keep obstacles in place before resolution"
        ],
        teacherNotes: "Help students understand tension is not the same as action. A quiet scene can be tense."
      },
      {
        slideNumber: 7,
        title: "Metaphor & Atmosphere",
        bulletPoints: [
          "Extended metaphors create consistent mood",
          "Example: Describing a relationship as a storm creates turbulent atmosphere",
          "Metaphors transform familiar into strange, making readers see anew",
          "Consistency: Don't switch metaphors - it breaks atmosphere",
          "Use metaphors to reflect the emotional state, not just describe setting"
        ],
        teacherNotes: "Show how metaphors do more than decorate - they carry emotional weight."
      },
      {
        slideNumber: 8,
        title: "Contrast: Amplifying Atmosphere",
        bulletPoints: [
          "Beauty contrasted with decay: Emphasises tragedy or loss",
          "Noise followed by silence: Emphasises emptiness or significance",
          "Brightness contrasted with darkness: Emphasises hope or despair",
          "Warmth contrasted with cold: Emphasises isolation or connection",
          "Movement contrasted with stillness: Emphasises disruption or peace"
        ],
        teacherNotes: "Contrast is a powerful tool. Show how it amplifies emotional effect."
      },
      {
        slideNumber: 9,
        title: "Establishing Atmosphere: Opening Lines",
        bulletPoints: [
          "Opening line sets the atmospheric tone for the whole piece",
          "Choose specific sensory detail that previews the mood",
          "Don't explain the atmosphere - create it through description",
          "Examples: 'The house held its breath.' / 'Rain hammered against the windows like accusations.' / 'She stepped into the empty room and heard nothing but her own heartbeat.'"
        ],
        teacherNotes: "Analyse published opening lines. What atmosphere do they create? How?"
      },
      {
        slideNumber: 10,
        title: "Sustaining Atmosphere: Middle Sections",
        bulletPoints: [
          "Keep atmospheric consistency (don't suddenly change mood without reason)",
          "Use recurring images or sensory details (reinforces atmosphere)",
          "Vary pacing to maintain reader engagement",
          "Introduce complications that deepen rather than break atmosphere",
          "Layer details - don't just repeat the same descriptions"
        ],
        teacherNotes: "Sustaining atmosphere over 400-500 words is a challenge. Show how to evolve without losing coherence."
      },
      {
        slideNumber: 11,
        title: "Shifting Atmosphere: Dynamic Stories",
        bulletPoints: [
          "Not all stories maintain one atmosphere - sometimes it shifts",
          "Shifts can be gradual (slow darkening) or sudden (violent disruption)",
          "Shifted atmosphere reflects character development or plot change",
          "Mark shifts clearly so reader understands the transition",
          "Explain shifts through plot and character, not through authorial comment"
        ],
        teacherNotes: "Show stories where atmosphere shifts meaningfully. Explain what signals the shift."
      },
      {
        slideNumber: 12,
        title: "Avoiding Common Mistakes",
        bulletPoints: [
          "Don't over-describe: Endless description becomes tedious",
          "Don't explain atmosphere: Let readers feel it through detail",
          "Don't use clichés: 'It was a dark and stormy night' doesn't create atmosphere",
          "Don't forget character: Atmosphere should reflect character perception",
          "Don't lose plot: Atmosphere serves story, not the reverse"
        ],
        teacherNotes: "These mistakes weaken atmospheric writing. Be explicit about what not to do."
      },
      {
        slideNumber: 13,
        title: "EXAMPLE: Atmosphere Builds & Breaks",
        bulletPoints: [
          "Setup: Peaceful garden on a summer evening",
          "Building tension: Shadow falls; sounds change; temperature drops",
          "Climax: A figure appears; all atmosphere shatters",
          "Resolution: New atmosphere as situation becomes clear",
          "Technique: Pacing quickens as tension builds; slows as it resolves"
        ],
        teacherNotes: "Model a complete short narrative showing how atmosphere builds and shifts."
      },
      {
        slideNumber: 14,
        title: "Practice: Write a Scene Focused on Atmosphere",
        bulletPoints: [
          "Scenario: Waiting for important news (test results, hospital visit, job interview)",
          "Goal: Create atmospheric tension through sensory detail and pacing",
          "Time: 20 minutes of writing",
          "Focus: Don't just describe the scene - create the feeling of waiting",
          "Then analyze: What details created atmosphere? What worked? What could improve?"
        ],
        teacherNotes: "Do this exercise regularly. It's the best way to develop atmospheric writing skill.",
        activityInstructions: "Have students read their work aloud to a partner. Ask: Does the listener feel the atmosphere being created?"
      },
      {
        slideNumber: 15,
        title: "Checklist: Does My Writing Have Strong Atmosphere?",
        bulletPoints: [
          "Have I used sensory detail beyond sight?",
          "Is my vocabulary choice supporting the mood?",
          "Does my pacing reinforce the atmosphere?",
          "Have I avoided over-explanation?",
          "Would a reader feel the atmosphere through detail, not description?",
          "Is the atmosphere consistent with my character's perspective?",
          "Could any description be cut without losing atmospheric effect?",
          "Would this piece hold a reader emotionally?"
        ],
        teacherNotes: "Give students this checklist. They should review their drafts against it."
      }
    ]
  },
  {
    id: "comparing-texts-framework",
    title: "Comparing Texts: Step-by-Step Framework",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Comparative Analysis",
    yearGroup: "GCSE",
    slideCount: 12,
    estimatedDuration: "2.5 hours",
    learningObjectives: [
      "Develop a systematic approach to text comparison",
      "Identify meaningful similarities and differences",
      "Write integrated comparative analysis",
      "Apply comparison framework across different text types"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "What Does 'Compare' Mean?",
        bulletPoints: [
          "Compare means: Find similarities AND differences",
          "Many students only list similarities - that's incomplete",
          "Strong comparison explains WHY texts are similar or different",
          "Comparison is not neutral - it reveals meaning",
          "Compare: purpose, audience, form, tone, themes, techniques, impact"
        ],
        teacherNotes: "Help students understand comparison is not a checklist - it's an analytical process."
      },
      {
        slideNumber: 2,
        title: "Step 1: Identify the Comparison Question",
        bulletPoints: [
          "What exactly are you comparing? (themes, techniques, effects, purposes)",
          "The question controls what you compare",
          "Question: 'Compare how both poems explore loss' → Focus on loss",
          "Question: 'Compare the writers' attitudes' → Focus on perspective/tone",
          "Read the question at least twice before you start"
        ],
        teacherNotes: "Many students compare everything without focus. The question determines focus."
      },
      {
        slideNumber: 3,
        title: "Step 2: Understand Each Text Independently",
        bulletPoints: [
          "Before comparing, fully understand each text separately",
          "For each text note: Main theme/argument, Purpose, Tone, Techniques, Audience",
          "This should take 10-15 minutes for each text",
          "Use a simple grid to organize information",
          "Don't start comparing yet - understand first"
        ],
        teacherNotes: "Understanding each text before comparison prevents shallow analysis."
      },
      {
        slideNumber: 4,
        title: "Step 3: Find Meaningful Similarities",
        bulletPoints: [
          "What do both texts have in common?",
          "Be specific - not 'both are sad' but 'both explore how loss changes people'",
          "Look for: Themes, audience impact, techniques, tone, purpose",
          "Ask: Why might both writers explore this? Does it matter?",
          "Not all similarities are worth mentioning - choose the significant ones"
        ],
        teacherNotes: "Teach students to distinguish between obvious and meaningful similarities."
      },
      {
        slideNumber: 5,
        title: "Step 4: Find Significant Differences",
        bulletPoints: [
          "What makes these texts distinct?",
          "Differences are often more interesting than similarities",
          "Look for: Contrasting approaches to similar themes, different audiences, different forms",
          "Ask: Why do these differences matter? What do they reveal?",
          "A difference that doesn't connect to your argument is irrelevant"
        ],
        teacherNotes: "Strong students spend more time on differences than similarities. Show why differences are more analytical."
      },
      {
        slideNumber: 6,
        title: "Step 5: Plan Your Comparison",
        bulletPoints: [
          "Method 1: Integrated - Compare throughout (recommended)",
          "Method 2: Separate - Text A, then Text B, then compare",
          "Method 3: Thematic - Point by point, showing how each text approaches it",
          "Choose based on what feels natural",
          "Create a simple outline before writing"
        ],
        teacherNotes: "Integrated comparison is more sophisticated. Model it explicitly and repeatedly."
      },
      {
        slideNumber: 7,
        title: "Step 6: Use Comparison Language",
        bulletPoints: [
          "Both texts..., Both writers..., Both poems...",
          "In contrast, Text A... while Text B...",
          "Similarly, ... However, ...",
          "Unlike X, Y..., Whereas X, Y...",
          "This difference matters because..."
        ],
        teacherNotes: "Explicit comparison language makes the comparison clear to the reader."
      },
      {
        slideNumber: 8,
        title: "EXAMPLE: Comparing Two Poems on Love",
        bulletPoints: [
          "Text A: Romantic poem celebrating passionate love",
          "Text B: Realistic poem about long-term partnership",
          "Similarity: Both value love and commitment",
          "Difference: A celebrates intensity; B celebrates stability",
          "Why it matters: Different ages/contexts shape different understanding of love"
        ],
        teacherNotes: "Model complete comparison. Show how to identify, explain, and evaluate differences."
      },
      {
        slideNumber: 9,
        title: "Step 7: Evaluate & Judge",
        bulletPoints: [
          "Don't just identify similarities/differences - evaluate them",
          "Ask: Which approach is more convincing? More effective? More complex?",
          "Avoid: 'I like this one better' - Stay analytical",
          "Consider: What does each text do well? What are its limitations?",
          "Conclusion should reflect thoughtful analysis, not preference"
        ],
        teacherNotes: "Evaluation elevates comparison from list to analysis. Teach students to judge fairly."
      },
      {
        slideNumber: 10,
        title: "Common Comparison Mistakes",
        bulletPoints: [
          "Only listing similarities - incomplete comparison",
          "Separate paragraphs for each text - not integrated",
          "Comparing irrelevant features - not focused on the question",
          "Explaining without comparing - just describing each text",
          "Using vague language - 'Both are similar' without detail",
          "Losing the texts - spending too long on theory, not enough on evidence"
        ],
        teacherNotes: "These mistakes are endemic. Be explicit about what to avoid."
      },
      {
        slideNumber: 11,
        title: "Practice: Timed Comparison Exercise",
        bulletPoints: [
          "You have 30 minutes total",
          "Read two texts carefully (8 minutes)",
          "Plan your comparison (5 minutes)",
          "Write integrated comparison (15 minutes)",
          "Check and revise (2 minutes)"
        ],
        teacherNotes: "Timed practice builds fluency. Use different text pairs each time.",
        activityInstructions: "After writing, have students mark each other's work. Is the comparison integrated or separate? Is it focused on the question?"
      },
      {
        slideNumber: 12,
        title: "Final Checklist: Strong Comparison",
        bulletPoints: [
          "Is my comparison focused on the question asked?",
          "Have I found both similarities and differences?",
          "Is my comparison integrated (throughout) not separate?",
          "Have I used explicit comparison language?",
          "Have I supported every point with evidence from the texts?",
          "Have I explained WHY similarities/differences matter?",
          "Would a reader understand which aspects I find most significant?",
          "Have I evaluated, not just described?"
        ],
        teacherNotes: "Give this to students. Reviewing against it will improve their comparative writing."
      }
    ]
  }
];

// Combine both arrays
export const allTeacherPowerpoints = [...teacherPowerpoints, ...teacherPowerpoints2];

export const teacherPowerpoints3: TeacherPresentation[] = [
  {
    id: "lit-romeo-juliet-love",
    title: "Romeo & Juliet: Love & Conflict",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Literature - Drama",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Analyse how Shakespeare portrays love as transformative and destructive",
      "Understand the context of Elizabethan patriarchy and feudalism",
      "Evaluate the role of fate vs. free will in the tragedy",
      "Trace how conflict drives the narrative"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Romeo & Juliet: Overview",
        bulletPoints: [
          "Written: ~1595, performed for Queen Elizabeth I",
          "Setting: Verona, Italy (though based on English feudalism)",
          "Genre: Tragic drama - young love destroyed by social conflict",
          "Core themes: Love, family conflict, fate vs. choice, passion vs. reason",
          "Plot: Secret marriage, miscommunication, suicide, family reconciliation"
        ],
        teacherNotes: "This is Shakespeare's most famous play. Help students see beyond the romance to the social and tragic dimensions."
      },
      {
        slideNumber: 2,
        title: "Act 1: Love at First Sight",
        bulletPoints: [
          "Prologue establishes fate: 'star-crossed lovers'",
          "Romeo is initially infatuated with Rosaline (not Juliet)",
          "At the ball, Romeo sees Juliet and immediately forgets Rosaline",
          "Their meeting is presented as instant, overwhelming love",
          "The balcony scene: They declare love and plan marriage",
          "Question: Is this love or infatuation?"
        ],
        teacherNotes: "The speed of Romeo's transformation is important. This isn't gradual love - it's passionate, overwhelming, potentially foolish."
      },
      {
        slideNumber: 3,
        title: "Love Language: Shakespeare's Portrayal",
        bulletPoints: [
          "Love is expressed through: Metaphor (Juliet as sun), hyperbole, immediacy",
          "Quote: 'What's in a name? That which we call a rose by any other name would smell as sweet'",
          "Juliet rejects family identity for love",
          "Love is presented as transcendent - beyond social boundaries",
          "But also: Presented as reckless, dangerous, defying social order"
        ],
        teacherNotes: "Shakespeare presents love as beautiful and terrible - transformative but destructive."
      },
      {
        slideNumber: 4,
        title: "Conflict: The Capulet-Montague Feud",
        bulletPoints: [
          "The feud is ancient - neither family remembers how it started",
          "Fighting is habitual, almost ritualistic",
          "Young men (Tybalt, Mercutio) are violent, honour-obsessed",
          "The feud is presented as senseless - 'new broils' break out constantly",
          "Love across enemy families is an impossible situation"
        ],
        teacherNotes: "The feud is structural - it's the reason the tragedy unfolds. Without it, the couple could marry freely."
      },
      {
        slideNumber: 5,
        title: "Act 2: Secret Marriage & Consummation",
        bulletPoints: [
          "Romeo and Juliet marry secretly (Friar Lawrence presides)",
          "Friar hopes the marriage will end the feud",
          "They consummate the marriage - physical commitment",
          "But family conflict intensifies",
          "Romeo is forced to hide; Juliet is trapped between love and family duty"
        ],
        teacherNotes: "The marriage is the point of no return. It commits them to each other against their families."
      },
      {
        slideNumber: 6,
        title: "Act 3: Tragedy Unfolds",
        bulletPoints: [
          "Tybalt (Juliet's cousin) kills Mercutio (Romeo's friend)",
          "Romeo, enraged, kills Tybalt in revenge",
          "Romeo is banished from Verona",
          "Juliet learns Romeo killed her cousin, but loves him anyway",
          "The conflict forces Romeo and Juliet apart - consummation interrupted by exile"
        ],
        teacherNotes: "This is the turning point. Romeo's rash action drives the tragedy forward."
      },
      {
        slideNumber: 7,
        title: "Act 4: Juliet's Dilemma",
        bulletPoints: [
          "Juliet is betrothed to Paris (a powerful count)",
          "Her father insists on the marriage",
          "She cannot reveal she's already married to Romeo",
          "Friar gives her a potion to simulate death",
          "Plan: She'll wake in the tomb, Romeo will rescue her"
        ],
        teacherNotes: "Juliet is trapped. She must obey her father's marriage demand or reveal her secret. The potion is a desperate solution."
      },
      {
        slideNumber: 8,
        title: "Act 5: Fatal Miscommunication",
        bulletPoints: [
          "Romeo doesn't learn Juliet took a potion - he thinks she's dead",
          "He rushes to her tomb and kills Paris",
          "He kills himself beside Juliet's 'dead' body",
          "Juliet wakes to find Romeo actually dead",
          "She kills herself in despair",
          "The families, grief-stricken, finally reconcile"
        ],
        teacherNotes: "The tragedy is sealed by miscommunication. If Romeo had known about the potion, everyone would live."
      },
      {
        slideNumber: 9,
        title: "Fate vs. Free Will: Central Debate",
        bulletPoints: [
          "Prologue says they're 'star-crossed' - suggesting fate",
          "But each character makes choices: Romeo pursues Juliet; Tybalt picks fights; Romeo kills; Juliet takes poison",
          "Are these choices tragic because they're free, or because fate guides them?",
          "Shakespeare leaves this ambiguous - we must grapple with it",
          "This ambiguity is what makes the play endure"
        ],
        teacherNotes: "This is a profound question. Don't expect a simple answer - help students explore the tension."
      },
      {
        slideNumber: 10,
        title: "Violence & Masculinity",
        bulletPoints: [
          "Violence is coded as masculine - Tybalt is 'fiery', Mercutio is bawdy and aggressive",
          "Romeo begins as a lover, becomes violent through Tybalt's death",
          "Juliet shows strength in defying family for love",
          "The play questions: Is masculine violence noble or destructive?",
          "Mercutio's death suggests: Masculine pride leads to death"
        ],
        teacherNotes: "Show how Shakespeare complicates gender - Juliet shows courage while men show destructive aggression."
      },
      {
        slideNumber: 11,
        title: "Family vs. Love: An Unresolvable Conflict",
        bulletPoints: [
          "Juliet must choose between family loyalty and love",
          "There is no compromise possible - families are at war",
          "She cannot openly marry Romeo without betraying her family",
          "This structural impossibility drives the tragedy",
          "The families only reconcile after their children are dead"
        ],
        teacherNotes: "This is the core tragedy - not that love is bad, but that social structures make it impossible."
      },
      {
        slideNumber: 12,
        title: "Light & Dark Imagery: Love & Death",
        bulletPoints: [
          "Light imagery: Juliet is 'the sun', 'light of the stars'",
          "Darkness imagery: Tomb, poison, secrecy, death",
          "Their love exists in darkness (secret meetings)",
          "They are pulled toward darkness (death) even as they love",
          "Imagery suggests: Love and death are intertwined"
        ],
        teacherNotes: "Trace light/dark imagery through the play. Show how it reflects the tragedy of love in a violent world."
      },
      {
        slideNumber: 13,
        title: "Friar Lawrence: Well-Intentioned but Misguided",
        bulletPoints: [
          "Friar hopes marriage will end the feud",
          "He aids the secret marriage and provides the poison",
          "But he doesn't account for miscommunication",
          "His plans fail catastrophically",
          "Question: Is Friar partly responsible for the tragedy?"
        ],
        teacherNotes: "Friar is a complex figure - trying to do good but making things worse. This adds another layer to the tragedy."
      },
      {
        slideNumber: 14,
        title: "Themes: Love Transcendent & Destructive",
        bulletPoints: [
          "Love is portrayed as: Beautiful, transformative, brave, defiant",
          "Love is also: Reckless, violent, destructive, impossible in their context",
          "Shakespeare doesn't judge - he shows both aspects",
          "The tragedy isn't that they love, but that society makes their love impossible",
          "The play asks: Is passionate love worth the cost?"
        ],
        teacherNotes: "The genius of the play is that it doesn't provide a clear moral. Help students sit with the ambiguity."
      },
      {
        slideNumber: 15,
        title: "Legacy & Relevance: Why This Matters",
        bulletPoints: [
          "Questions about love, family, and social boundaries are timeless",
          "The tragedy arises from social structures, not from love itself",
          "Romeo & Juliet shows love as revolutionary - defying authority and family",
          "The play remains a meditation on passion, duty, and the cost of conflict",
          "Modern adaptations (musicals, films) show the play's continued relevance"
        ],
        teacherNotes: "End by connecting the play to contemporary issues of family conflict, social pressure, and love across divides."
      }
    ]
  },
  {
    id: "gcse-exam-technique",
    title: "GCSE Exam Technique: Time Management",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Exam Strategy",
    yearGroup: "GCSE",
    slideCount: 10,
    estimatedDuration: "2 hours",
    learningObjectives: [
      "Develop effective time management strategies for GCSE exams",
      "Understand how to allocate time based on marks and questions",
      "Practice planning responses quickly and effectively",
      "Manage anxiety and maintain focus under exam conditions"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Exam Structure: English Language & Literature",
        bulletPoints: [
          "English Language: 3 papers, 2.5 hours total (Reading & Writing, Spoken)",
          "English Literature: 2 papers, 3 hours total (Poetry & Drama/Prose)",
          "Each paper has specific time allocations",
          "Understanding the structure is step 1 of time management",
          "Know which paper is worth most marks"
        ],
        teacherNotes: "Distribute specific exam paper breakdowns for your exam board."
      },
      {
        slideNumber: 2,
        title: "The Golden Rule: Allocate Time Based on Marks",
        bulletPoints: [
          "Rule of thumb: 1 minute per mark = your time allocation",
          "A 40-mark question = 40 minutes (approximately)",
          "A 15-mark question = 15 minutes",
          "Always leave 5 minutes at the end for checking",
          "Questions with more marks deserve more time"
        ],
        teacherNotes: "This is a simple rule that helps students allocate time fairly. Practice applying it to different papers."
      },
      {
        slideNumber: 3,
        title: "Reading Strategically: First Read",
        bulletPoints: [
          "First read of a text: 5-8 minutes (understand what it's about)",
          "Don't start annotating yet - just read for gist",
          "Note: Topic, perspective, tone, overall message",
          "Ask yourself: What is this text about? Who wrote it? Why?",
          "This prevents rereading and saves time overall"
        ],
        teacherNotes: "Many students read multiple times. One strategic read beats three confused reads."
      },
      {
        slideNumber: 4,
        title: "Planning: 5 Minutes That Save 20",
        bulletPoints: [
          "Spend 5 minutes writing a plan before answering",
          "Plan includes: Main points, evidence, order",
          "A written plan prevents rambling and dead-ends",
          "Plans don't need to be formal - notes are fine",
          "Good planning typically results in better essays in less time"
        ],
        teacherNotes: "Many students skip planning to save time. Actually, planning saves time because it prevents writing that goes nowhere."
      },
      {
        slideNumber: 5,
        title: "Writing: Quality over Quantity",
        bulletPoints: [
          "Examiners reward quality of analysis, not length",
          "A focused 300-word answer beats an unfocused 500-word answer",
          "Spend time developing ideas, not writing more ideas",
          "One paragraph with detailed evidence beats 3 paragraphs with assertion",
          "Better to answer fewer questions brilliantly than more questions weakly"
        ],
        teacherNotes: "Emphasise quality. Student essays don't need to be long if they're analytical."
      },
      {
        slideNumber: 6,
        title: "Speed: Legibility Matters",
        bulletPoints: [
          "You need to write fast, but your writing must be readable",
          "Examiners can only mark what they can read",
          "Illegible answers lose marks regardless of content",
          "Practice writing quickly without sacrificing legibility",
          "Use bullet points or brief notes if your handwriting suffers under pressure"
        ],
        teacherNotes: "Have students practise timed writing to build speed without losing legibility."
      },
      {
        slideNumber: 7,
        title: "Checking: The Final 5 Minutes",
        bulletPoints: [
          "Save 5 minutes per paper for checking",
          "Check for: Spelling errors, sentence fragments, clarity of argument",
          "Focus on common errors (apostrophes, capitals, subject-verb agreement)",
          "Don't rewrite entire paragraphs - just fix obvious errors",
          "A quick check can recover easy marks"
        ],
        teacherNotes: "Many students skip checking. Five minutes of checking typically recovers 3-5 marks."
      },
      {
        slideNumber: 8,
        title: "Staying Calm: Managing Exam Stress",
        bulletPoints: [
          "Anxiety burns time and kills focus",
          "Take 3 deep breaths before starting - calms nervous system",
          "Read questions carefully - rushing creates errors",
          "If you blank on a question, move on - come back to it",
          "Remember: You've practised this material - you can do it"
        ],
        teacherNotes: "Anxiety is normal. Teach students strategies to manage it - breathing, perspective, moving forward."
      },
      {
        slideNumber: 9,
        title: "Mock Exam Strategy: Preparing for Real Exam",
        bulletPoints: [
          "Treat mocks as if they were real - same time limits, same pressure",
          "Practise in exam conditions: Quiet room, no help, time limits",
          "Track your timing - see where you lose time",
          "Identify your problem areas: Are you reading too slowly? Writing too slow? Getting stuck?",
          "Adjust strategy based on mock performance"
        ],
        teacherNotes: "Mocks should be used for this purpose. Help students learn from their mock performance."
      },
      {
        slideNumber: 10,
        title: "Final Checklist: Am I Ready?",
        bulletPoints: [
          "Do I know the exam structure and mark allocations?",
          "Can I allocate time fairly to each question?",
          "Can I plan a response in 5 minutes?",
          "Can I write analysing responses under time pressure?",
          "Do I leave time for checking?",
          "Have I practised with timed mocks?",
          "Do I know what to do if I get stuck?",
          "Am I ready for exam day?"
        ],
        teacherNotes: "This checklist summarises the entire session. If students can answer yes to all, they're prepared."
      }
    ]
  },
  {
    id: "language-techniques-revision",
    title: "Language Techniques Revision",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Language Analysis",
    yearGroup: "GCSE",
    slideCount: 20,
    estimatedDuration: "4 hours",
    learningObjectives: [
      "Master identification of all major language techniques",
      "Understand how language techniques create effects",
      "Use precise terminology in analysis",
      "Link language techniques to writer's purpose"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Language Techniques: Overview",
        bulletPoints: [
          "Language techniques are the tools writers use to create effects",
          "Identifying the technique is only the start - you must explain the effect",
          "Techniques include: Word choice, imagery, figurative language, syntax, tone",
          "The same technique can have different effects in different contexts",
          "Master these 20 techniques and you can analyse any text"
        ],
        teacherNotes: "This is a comprehensive revision session. Use it to consolidate student knowledge of all major techniques."
      },
      {
        slideNumber: 2,
        title: "Metaphor: Comparing Without 'Like' or 'As'",
        bulletPoints: [
          "Metaphor directly compares two things",
          "Example: 'Time is money' (compares time to money)",
          "Effect: Helps readers understand abstract concepts through concrete ones",
          "Extended metaphor: Metaphor continued throughout a text",
          "Example: 'Love is a journey' - we can then talk about 'hitting roadblocks', 'moving forward'"
        ],
        teacherNotes: "Metaphors are not just decoration - they shape how we think about things."
      },
      {
        slideNumber: 3,
        title: "Simile: Comparing With 'Like' or 'As'",
        bulletPoints: [
          "Simile explicitly compares using 'like' or 'as'",
          "Example: 'She was as bright as the sun' / 'He moved like a ghost'",
          "Difference from metaphor: The comparison is stated, not implied",
          "Effect: Creates vivid imagery; helps readers visualise abstract concepts",
          "Overused similes (clichés) are weak - fresh comparisons are better"
        ],
        teacherNotes: "Show how the same comparison works differently as metaphor vs. simile."
      },
      {
        slideNumber: 4,
        title: "Personification: Giving Human Qualities",
        bulletPoints: [
          "Personification gives human characteristics to non-human things",
          "Example: 'The wind whispered through the trees' / 'The city never sleeps'",
          "Effect: Makes non-human things more relatable; creates mood or atmosphere",
          "Common in: Poetry and descriptive prose",
          "Can emphasise a quality by comparing it to human behaviour"
        ],
        teacherNotes: "Personification is everywhere in poetry. Help students identify and explain its effects."
      },
      {
        slideNumber: 5,
        title: "Alliteration: Repetition of Sounds",
        bulletPoints: [
          "Alliteration: Repetition of initial consonant sounds",
          "Example: 'The beautiful, bountiful blue bay'",
          "Effect: Creates rhythm, emphasis, makes language memorable",
          "Can be positive: 'peaceful, pleasant place' or negative: 'dark, dreadful doom'",
          "Overuse becomes silly - use sparingly"
        ],
        teacherNotes: "Show how alliteration affects how language sounds when read aloud."
      },
      {
        slideNumber: 6,
        title: "Onomatopoeia: Words That Sound Like Their Meaning",
        bulletPoints: [
          "Onomatopoeia: Words that imitate the sounds they represent",
          "Examples: 'buzz', 'crash', 'hiss', 'splash', 'crackle'",
          "Effect: Creates auditory imagery; draws reader into the sensory experience",
          "Especially powerful in poetry and descriptive writing",
          "Unique to: Auditory sense - appeals to how readers 'hear' the text"
        ],
        teacherNotes: "Read examples aloud. The sound of the words reinforces meaning."
      },
      {
        slideNumber: 7,
        title: "Imagery: Appeals to the Senses",
        bulletPoints: [
          "Imagery: Language that appeals to the reader's senses",
          "Types: Visual (sight), auditory (sound), tactile (touch), olfactory (smell), gustatory (taste)",
          "Effect: Creates immersive experience; makes writing more vivid",
          "Most writing uses visual imagery; good writing uses multiple senses",
          "Imagery can create mood and atmosphere"
        ],
        teacherNotes: "Push students to identify all types of imagery, not just visual."
      },
      {
        slideNumber: 8,
        title: "Hyperbole: Extreme Exaggeration",
        bulletPoints: [
          "Hyperbole: Extreme exaggeration for effect",
          "Example: 'I've told you a million times' / 'He's been waiting for ages'",
          "Effect: Emphasises emotion or urgency; can be humorous or dramatic",
          "Used in: Everyday speech and creative writing",
          "Differs from: Lying - readers understand it's exaggerated"
        ],
        teacherNotes: "Hyperbole is often used for comic or emotional effect. Show how it differs from deliberate deception."
      },
      {
        slideNumber: 9,
        title: "Irony: Saying One Thing, Meaning Another",
        bulletPoints: [
          "Irony: When words mean something different from their literal meaning",
          "Verbal irony: Saying something but meaning the opposite (sarcasm)",
          "Dramatic irony: Audience knows something characters don't",
          "Situational irony: When reality is opposite of expectations",
          "Effect: Creates humour, emphasis, reveals character or critique"
        ],
        teacherNotes: "Irony can be difficult. Provide multiple examples of each type."
      },
      {
        slideNumber: 10,
        title: "Paradox: Contradiction That Contains Truth",
        bulletPoints: [
          "Paradox: A statement that seems to contradict itself but is true",
          "Example: 'Less is more' / 'I know that I know nothing'",
          "Effect: Makes readers pause and think; reveals complex truth",
          "Used in: Poetry, philosophy, rhetoric",
          "Differs from: Logical fallacy - paradox is intentional and meaningful"
        ],
        teacherNotes: "Paradoxes reveal truth through contradiction. They're intellectually interesting."
      },
      {
        slideNumber: 11,
        title: "Oxymoron: Contradictory Words Together",
        bulletPoints: [
          "Oxymoron: Two contradictory words placed together",
          "Example: 'Deafening silence' / 'Living dead' / 'Bittersweet'",
          "Effect: Creates surprise and emphasis; reveals complexity",
          "Often used in: Poetry, advertising, dramatic speech",
          "Similar to paradox but: Shorter, more compressed, immediately contradictory"
        ],
        teacherNotes: "Oxymora are vivid and striking. They're excellent for creating memorable language."
      },
      {
        slideNumber: 12,
        title: "Pun: Using Words With Multiple Meanings",
        bulletPoints: [
          "Pun: A joke exploiting multiple meanings of a word",
          "Example: 'I used to be addicted to soap, but I'm clean now'",
          "Effect: Creates humour; shows cleverness",
          "Can be: Witty or groan-worthy depending on quality",
          "Used in: Comedy, clever writing, advertising"
        ],
        teacherNotes: "Puns can be terrible or clever. Show examples of effective ones."
      },
      {
        slideNumber: 13,
        title: "Anaphora: Repetition at the Start",
        bulletPoints: [
          "Anaphora: Repetition of words at the beginning of clauses/sentences",
          "Example: 'We cannot, we will not, we shall not surrender'",
          "Effect: Creates rhythm, emphasis, builds power",
          "Often used in: Speeches, poetry, rhetoric",
          "Creates: Sense of building intensity and conviction"
        ],
        teacherNotes: "Anaphora is rhythmic and memorable. It's powerful for building argument."
      },
      {
        slideNumber: 14,
        title: "Sentence Structure: Syntax Effects",
        bulletPoints: [
          "Short sentences: Create impact, urgency, simplicity",
          "Long sentences: Build complexity, create flow, show relationships",
          "Fragmented sentences: Create disorientation, emphasis, urgency",
          "Questions: Engage reader, create doubt, build argument",
          "Declarative sentences: State facts, create authority"
        ],
        teacherNotes: "Syntax is not separate from meaning - it's a major way writers create effects."
      },
      {
        slideNumber: 15,
        title: "Punctuation: Creating Effects",
        bulletPoints: [
          "Exclamation marks: Urgency, emotion, emphasis",
          "Ellipsis (...): Trails off, suggests hesitation, creates mystery",
          "Dashes: Emphasis, interruption, sudden shift",
          "Commas: Control pace, separate ideas, create variety",
          "Colons: Introduce information, create anticipation"
        ],
        teacherNotes: "Punctuation is not just correct/incorrect - it's a tool for creating specific effects."
      },
      {
        slideNumber: 16,
        title: "Word Choice: Connotation & Denotation",
        bulletPoints: [
          "Denotation: The literal meaning of a word",
          "Connotation: The associated or implied meaning",
          "Example: 'Thin' (neutral) vs. 'Skeletal' (negative) vs. 'Lean' (positive)",
          "Effect: Word choice shapes reader's perception and emotion",
          "Same meaning, different words = different effects"
        ],
        teacherNotes: "Word choice determines tone and reader response. Show how synonyms differ in their connotations."
      },
      {
        slideNumber: 17,
        title: "Tone & Register: Writer's Attitude",
        bulletPoints: [
          "Tone: The writer's attitude towards the subject",
          "Register: The level of formality in language",
          "Revealed through: Word choice, sentence structure, punctuation",
          "Can be: Formal, informal, sarcastic, sympathetic, critical, celebratory",
          "Tone shapes how readers interpret and respond"
        ],
        teacherNotes: "Tone is crucial but often underanalysed. Help students identify and explain tone."
      },
      {
        slideNumber: 18,
        title: "Repetition: Using Words Again & Again",
        bulletPoints: [
          "Repetition: Using the same word or phrase multiple times",
          "Effect: Emphasis, rhythm, drives home a point",
          "Can be: Rhetorical (building power) or structural (creating pattern)",
          "Used in: Speeches, poetry, persuasive writing",
          "Overuse: Can become tedious if not purposeful"
        ],
        teacherNotes: "Repetition is powerful but must be purposeful. Show how it emphasises and reinforces ideas."
      },
      {
        scoreNumber: 19,
        title: "Allusion: Reference to Another Text/Person",
        bulletPoints: [
          "Allusion: A reference to another text, person, event, or mythology",
          "Example: 'This is his Achilles heel' (reference to Greek mythology)",
          "Effect: Adds depth; connects to wider meanings",
          "Reader must recognise the reference for it to work",
          "Used in: Literary writing, sophisticated prose"
        ],
        teacherNotes: "Allusions can be missed by readers unfamiliar with the reference. Explain their effect clearly."
      },
      {
        slideNumber: 20,
        title: "Putting It Together: Analysing With Techniques",
        bulletPoints: [
          "Identify the technique (What is it?)",
          "Locate it in the text (Show evidence)",
          "Explain the effect (What does it do?)",
          "Link to purpose (Why did the writer choose it?)",
          "Use precise terminology throughout",
          "Support every point with evidence",
          "Connect techniques to overall meaning"
        ],
        teacherNotes: "This summarises the entire approach. Students should use this framework for all analysis."
      }
    ]
  },
  {
    id: "descriptive-writing-sensory",
    title: "Descriptive Writing: Sensory Detail",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Writing Skills - Description",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Use sensory language to create vivid, immersive description",
      "Develop vocabulary for precise sensory expression",
      "Integrate description into narrative effectively",
      "Use description to reveal character and create mood"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "What Is Sensory Detail?",
        bulletPoints: [
          "Sensory detail: Language that appeals to the reader's senses",
          "Senses: Sight, sound, smell, taste, touch",
          "Sensory detail creates: Vivid imagery, immersion, atmosphere",
          "Without sensory detail: Writing is abstract, distant, boring",
          "With sensory detail: Reader experiences the text, not just reads it"
        ],
        teacherNotes: "Sensory detail is the difference between showing and telling. It's essential for engaging writing."
      },
      {
        slideNumber: 2,
        title: "Visual Imagery: What the Reader Sees",
        bulletPoints: [
          "Visual imagery: Appeals to sight through description of colours, light, shapes, movement",
          "Strong visual: 'The sunset was a blazing inferno of orange and red'",
          "Weak visual: 'The sunset was beautiful'",
          "Visual details: Colors (specific shades, not 'red'), light (harsh, soft, golden), movement",
          "Most writing uses visual detail - expand beyond it"
        ],
        teacherNotes: "Visual is the default. Push students to include other senses."
      },
      {
        slideNumber: 3,
        title: "Auditory Imagery: What the Reader Hears",
        bulletPoints: [
          "Auditory imagery: Appeals to hearing through sound description",
          "Examples: 'The rain hammered against the windows' / 'She whispered softly'",
          "Sound can be: Harsh (screech, crash), soft (whisper, murmur), rhythmic (ticking, beating)",
          "Silence is powerful: 'The room held its breath'",
          "Auditory detail makes scenes vivid and immersive"
        ],
        teacherNotes: "Many students neglect sound. Read examples aloud - the difference is striking."
      },
      {
        slideNumber: 4,
        title: "Tactile Imagery: What the Reader Feels",
        bulletPoints: [
          "Tactile imagery: Appeals to touch through texture, temperature, physical sensation",
          "Examples: 'The rough bark scraped her palms' / 'An icy chill ran down his spine'",
          "Textures: Rough, smooth, slippery, sticky, sharp, soft",
          "Temperature: Icy, burning, warm, cold, scalding",
          "Physical sensation creates: Intimacy, discomfort, pleasure, pain"
        ],
        teacherNotes: "Tactile detail is often neglected but extremely powerful for creating immersion."
      },
      {
        slideNumber: 5,
        title: "Olfactory Imagery: What the Reader Smells",
        bulletPoints: [
          "Olfactory imagery: Appeals to smell",
          "Powerful because: Smell is linked to emotion and memory",
          "Examples: 'The sweet decay of autumn leaves' / 'Stale cigarette smoke'",
          "Smells: Fresh, rotten, sweet, acrid, musty, fragrant",
          "Smell conveys: Time of year, emotional state, place, character"
        ],
        teacherNotes: "Smell is underused but powerful. A few well-chosen olfactory details enhance vividness."
      },
      {
        slideNumber: 6,
        title: "Gustatory Imagery: What the Reader Tastes",
        bulletPoints: [
          "Gustatory imagery: Appeals to taste",
          "Often used in: Food scenes, emotional states, sensory memories",
          "Examples: 'The bitter taste of regret' / 'Sweet anticipation'",
          "Tastes: Bitter, sweet, sour, salty, metallic",
          "Gustatory detail: Least common but creates memorable impact"
        ],
        teacherNotes: "Taste is rare in writing. When used well, it's striking and memorable."
      },
      {
        slideNumber: 7,
        title: "Combining Multiple Senses: Synesthesia",
        bulletPoints: [
          "Synesthesia: Mixing senses - describing one sense through another",
          "Example: 'A sharp red colour' / 'The music tasted bitter'",
          "Creates: Unusual, striking imagery; makes readers experience the text differently",
          "Use sparingly: Synesthesia is powerful but can be confusing if overused",
          "Effect: Marks sophisticated, imaginative writing"
        ],
        teacherNotes: "Synesthesia is a technique used by sophisticated writers. Introduce it but use restraint."
      },
      {
        slideNumber: 8,
        title: "Specific Detail: Better Than General Description",
        bulletPoints: [
          "General: 'She was beautiful'",
          "Specific: 'Her eyes were a storm grey, and when she smiled, a single dimple appeared in her left cheek'",
          "Specific detail: Lets readers form their own image",
          "General description: Forces one interpretation, sounds lazy",
          "Rule: Always choose specific sensory details over generalised adjectives"
        ],
        teacherNotes: "This is a crucial lesson. Specific detail is always better than abstract description."
      },
      {
        slideNumber: 9,
        title: "Metaphor & Simile in Description",
        bulletPoints: [
          "Figurative language creates: Vivid imagery, unexpected connections",
          "Metaphor: 'Her laugh was a symphony'",
          "Simile: 'She walked like a dancer'",
          "Fresh comparisons are striking; clichés are weak",
          "Use figurative language to reveal character and emotion"
        ],
        teacherNotes: "Figurative language elevates description. Show how it goes beyond literal description."
      },
      {
        slideNumber: 10,
        title: "Avoiding Description Overload",
        bulletPoints: [
          "Too much description: Readers lose patience, story drags",
          "The balance: 2-3 sentences of vivid description per location",
          "Choose: Most significant sensory detail, not everything",
          "Keep descriptions active: Movement and change, not static painting",
          "Link description to: Character perception, emotional state, plot"
        ],
        teacherNotes: "More description doesn't equal better writing. Teach selectivity and restraint."
      },
      {
        slideNumber: 11,
        title: "Description Reveals Character",
        bulletPoints: [
          "What a character notices reveals: Their values, background, emotional state",
          "A musician notices: Sounds",
          "A chef notices: Smells and tastes",
          "A traumatised person might notice: Threats and danger",
          "Perspective shapes sensory detail"
        ],
        teacherNotes: "Show how sensory detail is not neutral - it reveals the perspective of the narrator."
      },
      {
        slideNumber: 12,
        title: "Description Creates Mood & Atmosphere",
        bulletPoints: [
          "Sensory detail is the primary tool for creating atmosphere",
          "To create peace: Soft sounds, pleasant textures, gentle light",
          "To create tension: Harsh sounds, uncomfortable textures, changing light",
          "Consistent sensory language: Creates consistent mood",
          "Shifting sensory language: Signals shift in atmosphere"
        ],
        teacherNotes: "Show how sensory detail directly creates the feeling of a scene."
      },
      {
        slideNumber: 13,
        title: "EXAMPLE: Weak vs Strong Sensory Description",
        bulletPoints: [
          "Weak: 'The forest was dark and quiet. She walked slowly, feeling scared.'",
          "Strong: 'Shadows deepened beneath ancient oaks. The air hung thick with moisture and decay. Her footsteps crackled on dead leaves - too loud, too revealing. Somewhere, a bird's cry pierced the silence.'",
          "Difference: Specific sensory detail vs abstract description",
          "Strong version: Reader experiences the fear; weak version just tells about it"
        ],
        teacherNotes: "Compare these directly. The difference is stark. Use this as a model for what works."
      },
      {
        slideNumber: 14,
        title: "Practice: Describe a Place Using All Five Senses",
        bulletPoints: [
          "Location: A café, school hallway, park, beach (choose one)",
          "Goal: Write 300 words using all five senses",
          "Requirements: At least one detail for each sense",
          "Avoid: Saying 'it smells like coffee' - show a character smelling it",
          "Focus: Vivid, specific sensory language"
        ],
        teacherNotes: "This exercise forces students to think beyond visual detail and engage all senses.",
        activityInstructions: "After writing, peer-mark focusing on: Which senses are used? Are descriptions specific? Is there too much or too little?"
      },
      {
        slideNumber: 15,
        title: "Final Checklist: Sensory Detail Quality",
        bulletPoints: [
          "Have I used all five senses, not just sight?",
          "Are my sensory details specific, not generalised?",
          "Do sensory details serve the story/mood, not just decorate?",
          "Have I avoided over-description?",
          "Do sensory details reveal character or create atmosphere?",
          "Have I used figurative language effectively?",
          "Would a reader feel immersed in the scene?",
          "Can I cut any description without losing essential sensory impact?"
        ],
        teacherNotes: "This checklist guides students toward strong sensory writing."
      }
    ]
  },
  {
    id: "lit-jekyll-hyde-duality",
    title: "Jekyll & Hyde: Duality & Victorian Society",
    examBoard: "AQA/Edexcel/OCR",
    topic: "Literature - Prose",
    yearGroup: "GCSE",
    slideCount: 15,
    estimatedDuration: "3 hours",
    learningObjectives: [
      "Analyse the theme of duality and the dual nature of human psychology",
      "Understand Victorian attitudes toward morality, science, and society",
      "Examine how Stevenson critiques Victorian respectability",
      "Evaluate the significance of the scientific experiment"
    ],
    slides: [
      {
        slideNumber: 1,
        title: "The Strange Case of Dr. Jekyll and Mr. Hyde: Context",
        bulletPoints: [
          "Published: 1886 (Victorian era)",
          "Written as: Gothic novella with psychological elements",
          "Historical context: Victorian repression, scientific optimism, industrial society",
          "Stevenson's preoccupation: The duality of human nature",
          "Reception: Instant bestseller; remains relevant 140 years later"
        ],
        teacherNotes: "The Victorian era is crucial context. Respectability, moral codes, and repression shaped society - and Stevenson critiques this."
      },
      {
        slideNumber: 2,
        title: "The Problem: Respectability vs. Desire",
        bulletPoints: [
          "Jekyll describes his life as respectable but divided",
          "He has respectable interests (science, philosophy) and unrespectable desires",
          "Victorian society: Demands absolute respectability, suppresses any 'improper' behaviour",
          "Jekyll's solution: Create a separate identity to express his darker impulses",
          "The experiment: Attempts to chemically separate his two natures"
        ],
        teacherNotes: "This is the central problem. Victorian society demanded repression - Jekyll tries to escape it through science."
      },
      {
        slideNumber: 3,
        title: "Dr. Jekyll: Respectable Scientist",
        bulletPoints: [
          "Jekyll is eminent, respected, successful",
          "His respectability depends on maintaining his public image",
          "Privately, he feels constrained by respectability",
          "He's not evil - he wants both his respectable and 'lower' natures",
          "His fatal flaw: Belief that separation is possible"
        ],
        teacherNotes: "Jekyll is sympathetic - he's trapped by Victorian society's demands. But his solution is destructive."
      },
      {
        slideNumber: 4,
        title: "Mr. Hyde: The Dark Side",
        bulletPoints: [
          "Hyde represents Jekyll's repressed desires and appetites",
          "He's described as small, ugly, violent, immoral",
          "Unlike Jekyll, Hyde has no social constraints",
          "Hyde is not pure evil - he's freedom from respectability",
          "But his freedom is destructive and cruel"
        ],
        teacherNotes: "Hyde is not a separate person - he's part of Jekyll. The duality is internal, not external."
      },
      {
        slideNumber: 5,
        title: "The Experiment: Science as Hubris",
        bulletPoints: [
          "Jekyll believes science can separate the good from the evil",
          "He creates a potion to chemically induce the transformation",
          "Initial success: He can become Hyde, experience freedom, then return",
          "But the transformation becomes involuntary",
          "Lesson: Science cannot control human nature; it cannot rewrite the self"
        ],
        teacherNotes: "The experiment is central. Stevenson critiques both scientific optimism and the belief that repression is healthy."
      },
      {
        slideNumber: 6,
        title: "Transformation & Addiction: The Loss of Control",
        bulletPoints: [
          "Jekyll takes the potion expecting control",
          "But gradually, Hyde asserts control",
          "Jekyll transforms into Hyde involuntarily (while sleeping)",
          "Eventually, Jekyll loses the ability to transform back",
          "Metaphor: Any attempt at separation leads to destruction"
        ],
        teacherNotes: "The loss of control is the tragedy. Jekyll tries to master his nature and is mastered by it instead."
      },
      {
        slideNumber: 7,
        title: "Victorian Respectability: The Real Monster?",
        bulletPoints: [
          "The novella critiques Victorian society's demand for absolute respectability",
          "This repression creates: Hypocrisy, compartmentalisation, psychological damage",
          "Jekyll: 'I was the first that could thus plod in the public eye with a load of genial respectability'",
          "Suggestion: Respectability itself is a kind of hypocrisy",
          "Stevenson asks: Is total respectability humanly possible or healthy?"
        ],
        teacherNotes: "The critique of Victorian society is subtle but clear. Respectability demands denial of human nature."
      },
      {
        slideNumber: 8,
        title: "Secrecy & Shame: The Psychological Cost",
        bulletPoints: [
          "The novella is structured around secrecy: Jekyll's true nature hidden",
          "Secrecy creates: Shame, compartmentalisation, psychological splitting",
          "Those close to Jekyll (Utterson, Lanyon) sense something wrong but don't know",
          "The truth destroys those who learn it: Lanyon dies from the shock",
          "Lesson: Secrecy and shame are destructive"
        ],
        teacherNotes: "The psychological effects of keeping secrets are explored through Lanyon's shock and death."
      },
      {
        slideNumber: 9,
        title: "The Role of Utterson: Respectable Observer",
        bulletPoints: [
          "Utterson is the protagonist (not Jekyll) for most of the narrative",
          "He's respectable, curious, and tries to understand Jekyll's behaviour",
          "He represents the respectable world asking: What is Jekyll hiding?",
          "His investigation is methodical but ultimately ineffective",
          "He represents the respectable society that values privacy over truth"
        ],
        teacherNotes: "Utterson is important because he represents us - the respectable reader trying to understand darker things."
      },
      {
        slideNumber: 10,
        title: "Good vs. Evil: Simple or Complex?",
        bulletPoints: [
          "Initial reading: Jekyll is good, Hyde is evil",
          "Closer reading: The division is not so clear",
          "Jekyll's 'good' includes: Selfish ambition, intellectual pride",
          "Hyde's 'evil' includes: Simple desires, impulses all humans have",
          "Stevenson suggests: Good and evil are not separable; they're mixed"
        ],
        teacherNotes: "Help students see the complexity. The novella doesn't present simple morality."
      },
      {
        slideNumber: 11,
        title: "Duality as a Human Condition",
        bulletPoints: [
          "Jekyll isn't unique - all humans are dual",
          "We all contain: Respectable and unrespectable desires",
          "We all suppress: Aspects of ourselves that don't fit social expectations",
          "Stevenson suggests: Health requires integration, not separation",
          "The tragedy: Jekyll tries to escape the human condition"
        ],
        teacherNotes: "This is the psychological truth at the heart of the novella. Duality is universal."
      },
      {
        slideNumber: 12,
        title: "Gothic Elements: Atmosphere & Dread",
        bulletPoints: [
          "Setting: Victorian London (respectable on surface, concealing darkness)",
          "Atmosphere: Fog, shadows, mystery, transformation",
          "Imagery: Physical distortion mirrors moral corruption",
          "Tone: Growing dread as Jekyll loses control",
          "Gothic form emphasises: The darkness beneath respectability"
        ],
        teacherNotes: "The Gothic elements are not incidental - they're central to the meaning about hidden darkness."
      },
      {
        slideNumber: 13,
        title: "The Unreliable Narrative: Whose Truth?",
        bulletPoints: [
          "Structure: Different perspectives (Utterson, Lanyon, Jekyll)",
          "Each narrator has limited understanding",
          "Jekyll's final confession reveals his version, but is it complete?",
          "Readers can't fully trust any single perspective",
          "This mirrors: The difficulty of knowing anyone fully"
        ],
        teacherNotes: "The multiple perspectives prevent a single, definitive truth. This mirrors the novella's theme about hidden natures."
      },
      {
        slideNumber: 14,
        title: "Themes: Integration & Acceptance",
        bulletPoints: [
          "Central theme: Human nature cannot be divided; integration is necessary",
          "Jekyll tries to escape his nature; instead, it destroys him",
          "Lesson: Accepting all parts of ourselves (good and bad) is necessary",
          "Moral: Repression doesn't eliminate bad impulses - it amplifies them",
          "Health: Comes from accepting, not denying, our complexity"
        ],
        teacherNotes: "This psychological insight was revolutionary in 1886 and remains relevant."
      },
      {
        slideNumber: 15,
        title: "Legacy: Why Jekyll & Hyde Still Matters",
        bulletPoints: [
          "The novella explores enduring questions: Can we escape our nature? Are we fundamentally good or evil?",
          "Critique of Victorian respectability speaks to all societies: What do we repress? What are the costs?",
          "Psychological insight remains relevant: The dangers of denial and repression",
          "Gothic atmosphere endures: The fear that beneath respectability lies darkness",
          "The text asks us: How do we acknowledge and integrate our full humanity?"
        ],
        teacherNotes: "End by connecting the text to contemporary issues - what do we still repress? What are the costs?"
      }
    ]
  }
];

// Export all presentations combined
export const allTeacherPowerpointsComplete = [...teacherPowerpoints, ...teacherPowerpoints2, ...teacherPowerpoints3];
