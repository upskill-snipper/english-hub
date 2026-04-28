// =============================================================================
// Year 8 Workbook & Homework SUPPLEMENT -- Terms 2 and 3
// Conflict Poetry & Macbeth (T2) | Rhetoric & Media (T3)
// =============================================================================
// These arrays supplement y8-workbook-data.ts with additional exercises and
// homework tasks. Interfaces are redefined here to keep this file self-contained.
// =============================================================================

export interface WorkbookExercise {
  id: string
  title: string
  termUnit: string
  type:
    | 'comprehension'
    | 'analysis'
    | 'creative-writing'
    | 'grammar'
    | 'vocabulary'
    | 'comparison'
    | 'evaluation'
    | 'planning'
    | 'quotation-practice'
    | 'language-analysis'
    | 'speech-writing'
    | 'media-literacy'
  instructions: string
  modelAnswer: string
  marks: number
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery'
  keywords: string[]
  linkedObjectives: string[]
}

export interface HomeworkTask {
  id: string
  title: string
  halfTerm: number
  weekNumber: number
  type: 'reading-response' | 'extended-writing' | 'research' | 'creative' | 'revision' | 'analysis'
  instructions: string
  modelAnswer: string
  marks: number
  estimatedMinutes: number
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery'
  keywords: string[]
  linkedObjectives: string[]
}

// =============================================================================
// TERM 2 SUPPLEMENT: Conflict Poetry & Macbeth
// =============================================================================

export const y8Term2WorkbookExercises: WorkbookExercise[] = [
  // 1. poem-analysis
  {
    id: 'y8t2-wb-01',
    title: "Reading Conflict: Annotating 'Charge of the Light Brigade'",
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'analysis',
    instructions:
      "<p>Read Tennyson's <em>The Charge of the Light Brigade</em> carefully before answering.</p>" +
      '<ol>' +
      "<li>Identify the poem's rhyme scheme and explain how it mirrors the rhythm of a cavalry charge. (3 marks)</li>" +
      '<li>Explain the effect of Tennyson\'s repeated phrase "Into the valley of Death." (3 marks)</li>' +
      '<li>How does Tennyson present the soldiers as simultaneously heroic and powerless? Use two quotations. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The poem uses a predominantly anapaestic dimeter (da-da-DUM da-da-DUM), with the refrain "Rode the six hundred" sustaining the same propulsive metre. Together these features propel the reader forward, replicating the relentless gallop of horses into battle. The irregular line lengths create a sense of chaos and urgency. ' +
      'The repeated phrase "Into the valley of Death" functions as an anaphora that builds a sense of doom. Each repetition deepens the reader\'s awareness that the soldiers are riding to certain destruction, making their courage more admirable and the tragedy more acute. ' +
      'The soldiers are heroic: "Theirs not to reason why, / Theirs but to do and die" presents unquestioning obedience as noble. Yet they are simultaneously powerless: they ride into "the jaws of Death," imagery that frames them as prey consumed by forces beyond their control. Tennyson honours their sacrifice while implicitly critiquing the commanders who ordered a doomed charge.',
    marks: 12,
    difficulty: 'developing',
    keywords: [
      'conflict poetry',
      'anaphora',
      'anapaestic dimeter',
      'refrain',
      'heroism',
      'Tennyson',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8'],
  },
  // 2. comparison
  {
    id: 'y8t2-wb-02',
    title: "Comparing Conflict: 'Dulce et Decorum Est' and 'Anthem for Doomed Youth'",
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'comparison',
    instructions:
      '<p>Both poems are by Wilfred Owen and respond to World War One. Read both before answering.</p>' +
      '<ol>' +
      '<li>How does each poem challenge the idea that dying in war is glorious? (4 marks)</li>' +
      '<li>Compare the mood created by imagery in each poem. (4 marks)</li>' +
      '<li>Write a comparative paragraph about how Owen uses sound in both poems. Use connectives such as "whereas," "similarly," and "by contrast." (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      '"Dulce et Decorum Est" challenges glory through visceral physical horror: soldiers stumbling, "blood-shod," drowning in gas -- no glory survives contact with this reality. "Anthem for Doomed Youth" challenges it through absence: the lack of bells, prayers, and wreaths denies soldiers the traditional rituals of honoured death. ' +
      '"Dulce" creates a suffocating, urgent mood through sensory overload and second-person address that implicates the reader. "Anthem" creates a sorrowful, elegiac mood through its sonnet form and rhetorical questions, mourning what cannot be recovered. ' +
      'Comparative paragraph: Both poems weaponise sound to convey the horror of war. In "Dulce," the onomatopoeic "guttering, choking, drowning" forces the reader to hear a man dying, whereas in "Anthem," Owen uses the rhetorical question "What passing-bells for these who die as cattle?" to draw attention to a devastating silence. Similarly, "Dulce" uses sibilance in "gas-shells dropping softly behind" to make danger feel deceptively quiet, while "Anthem\'s" "stuttering rifles\' rapid rattle" mirrors the mechanical indifference of industrialised slaughter.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['Wilfred Owen', 'comparison', 'sound', 'World War One', 'imagery', 'contrast'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8', 'Y8.W3'],
  },
  // 3. language-analysis (Shakespeare)
  {
    id: 'y8t2-wb-03',
    title: "Shakespeare's Language: Macbeth's 'Dagger' Soliloquy",
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'language-analysis',
    instructions:
      '<p>Read Macbeth\'s soliloquy from Act 2, Scene 1: "Is this a dagger which I see before me..."</p>' +
      '<ol>' +
      '<li>What is a soliloquy, and why does Shakespeare use this technique here? (3 marks)</li>' +
      "<li>Identify three language techniques in the soliloquy and explain what each reveals about Macbeth's state of mind. (9 marks)</li>" +
      '</ol>',
    modelAnswer:
      "A soliloquy is a speech delivered by a character alone on stage, revealing their innermost thoughts directly to the audience. Shakespeare uses it here so the audience can witness Macbeth's psychological unravelling in real time -- we see his guilt and ambition tearing him apart before he commits the murder, making us both horrified and complicit. " +
      'Three techniques: (1) Apostrophe -- "Come, let me clutch thee" -- Macbeth addresses the hallucinated dagger as though it is real, suggesting his mind is fracturing under the weight of his intention. (2) Interrogative sentences -- "Art thou not, fatal vision, sensible / To feeling as to sight?" -- the frantic questioning shows his desperate need to rationalise the vision, revealing he cannot fully commit to the act with a clear conscience. (3) Semantic field of darkness -- "witchcraft," "Hecate," "wolf," "murder" -- the accumulation of dark imagery shows Macbeth consciously aligning himself with evil, as if naming the darkness gives him the courage to proceed.',
    marks: 12,
    difficulty: 'secure',
    keywords: [
      'soliloquy',
      'Macbeth',
      'Shakespeare',
      'apostrophe',
      'semantic field',
      'language analysis',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W3'],
  },
  // 4. language-analysis (Shakespeare)
  {
    id: 'y8t2-wb-04',
    title: 'Lady Macbeth: Language of Manipulation',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'language-analysis',
    instructions:
      '<p>Read Act 1, Scene 7 in which Lady Macbeth persuades Macbeth to murder King Duncan.</p>' +
      '<ol>' +
      '<li>How does Lady Macbeth use imperatives to exert control over Macbeth? Give two examples. (4 marks)</li>' +
      '<li>Analyse the effect of Lady Macbeth\'s rhetorical question: "Was the hope drunk / Wherein you dress\'d yourself?" (4 marks)</li>' +
      '<li>How does Shakespeare present Lady Macbeth as more ruthless than Macbeth at this point in the play? Write a structured paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Lady Macbeth uses imperatives to dominate: "screw your courage to the sticking-place" commands Macbeth as if he is a machine to be adjusted, stripping away his agency, while "be so much more the man" weaponises his sense of masculinity and honour against him. Both imperatives reframe murder as a performance of strength rather than a moral transgression. ' +
      'The rhetorical question mocks Macbeth\'s earlier resolution as a drunken illusion, implying his courage was never real. The word "drunk" degrades his ambition and challenges his self-image, forcing him to prove his manhood. ' +
      'Shakespeare presents Lady Macbeth as more ruthless through her cold practicality -- she has a detailed plan, dismisses the possibility of failure, and frames the murder as simple ("a little water clears us of this deed"). By contrast, Macbeth remains tormented by conscience. Shakespeare may be suggesting that ambition unchecked by morality is more dangerous than ambition troubled by guilt.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['Lady Macbeth', 'manipulation', 'imperatives', 'rhetorical question', 'masculinity'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W3'],
  },
  // 5. quotation-practice
  {
    id: 'y8t2-wb-05',
    title: 'Quotation Bank: Macbeth Key Themes',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'quotation-practice',
    instructions:
      '<p>Below are six quotations from <em>Macbeth</em>. For each one:</p>' +
      '<ul>' +
      '<li>State which character says it and the context (when/why)</li>' +
      '<li>Identify one language technique</li>' +
      '<li>Explain what it reveals about a key theme (ambition, guilt, power, or appearance vs reality)</li>' +
      '</ul>' +
      '<ol>' +
      '<li>"Fair is foul, and foul is fair." (2 marks each)</li>' +
      '<li>"Stars, hide your fires; / Let not light see my black and deep desires." (2 marks each)</li>' +
      '<li>"Will all great Neptune\'s ocean wash this blood / Clean from my hand?" (2 marks each)</li>' +
      '<li>"Out, damned spot! Out, I say!" (2 marks each)</li>' +
      '<li>"I am in blood / Stepp\'d in so far." (2 marks each)</li>' +
      '<li>"Something wicked this way comes." (2 marks each)</li>' +
      '</ol>',
    modelAnswer:
      '1. The Witches, Act 1. Chiasmus/paradox; introduces the theme of appearance vs reality -- nothing in this world is what it seems, and the moral order has inverted. ' +
      "2. Macbeth, Act 1 -- he has just heard the witches' prophecy. Apostrophe addressed to the stars; reveals his ambition is fully formed but recognises its darkness, establishing the theme of hidden evil beneath a noble exterior. " +
      "3. Macbeth, Act 2, immediately after killing Duncan. Rhetorical question and hyperbole; the vastness of Neptune's ocean unable to clean one pair of hands shows Macbeth understands his guilt is absolute and beyond redemption. " +
      '4. Lady Macbeth, Act 5 -- she is sleepwalking. Imperative and repetition; the fragmented, obsessive speech contrasts with her earlier cold control, showing that guilt eventually destroys even those who claimed to be above it. ' +
      '5. Macbeth, Act 3. Extended metaphor of blood as a river; he recognises he is past the point of no return, suggesting that unchecked ambition entraps the one who pursues it. ' +
      '6. The Second Witch, Act 4, as Macbeth approaches. Sinister announcement; Macbeth has become so associated with evil that the witches recognise him as one of their own -- his transformation from "brave Macbeth" to "something wicked" is complete.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['Macbeth', 'quotation', 'context', 'theme', 'language technique', 'analysis'],
    linkedObjectives: ['Y8.R5', 'Y8.W1', 'Y8.W3'],
  },
  // 6. analysis
  {
    id: 'y8t2-wb-06',
    title: "Analysing Conflict in 'Remains' by Simon Armitage",
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'analysis',
    instructions:
      '<p>Read "Remains" by Simon Armitage, in which a soldier describes shooting a looter and the lasting psychological aftermath.</p>' +
      '<ol>' +
      '<li>How does Armitage use colloquial language to position the speaker? (4 marks)</li>' +
      '<li>Analyse how the poem presents the theme of psychological trauma. Use two embedded quotations. (6 marks)</li>' +
      "<li>How does the poem's form (loosely structured stanzas, enjambment) reflect the speaker's mental state? (4 marks)</li>" +
      '</ol>',
    modelAnswer:
      'Armitage uses colloquial language ("legs it," "on the ground," "tosses his guts") to place the speaker firmly in an ordinary, working-class voice. This informality is deliberately jarring -- violence described in everyday language suggests the soldier has been conditioned to normalise killing. It also creates authenticity, making the psychological unravelling that follows feel more credible and devastating. ' +
      'The poem presents trauma through haunting repetition: "his blood-shadow stays on the street" suggests the dead man leaves a permanent imprint that cannot be erased. Furthermore, "he\'s here in my head / when I close my eyes" makes the trauma invasive and inescapable, showing that the real conflict continues long after the physical one ends. ' +
      "The loosely structured stanzas and frequent enjambment mirror the speaker's fragmented, unstable thought process. Lines do not end where expected -- they spill over, just as the soldier's trauma spills beyond the moment of violence. The lack of a neat formal structure suggests there is no resolution or peace, only ongoing mental disruption.",
    marks: 14,
    difficulty: 'secure',
    keywords: [
      'Remains',
      'Simon Armitage',
      'colloquial language',
      'trauma',
      'enjambment',
      'conflict',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.R8', 'Y8.W3'],
  },
  // 7. creative-writing
  {
    id: 'y8t2-wb-07',
    title: "Creative Writing: A Soldier's Inner Monologue",
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'creative-writing',
    instructions:
      '<p>Write a first-person interior monologue (200-250 words) from the perspective of a soldier at a moment of conflict. Your focus should be on the psychological experience rather than action sequences.</p>' +
      '<p>Your writing must include:</p>' +
      '<ul>' +
      '<li>A clear sense of internal conflict (moral, emotional, or psychological)</li>' +
      '<li>At least two specific sensory details</li>' +
      '<li>One technique borrowed from the conflict poems studied (e.g., fragmented sentences for trauma, repetition for obsession, colloquial language for authenticity)</li>' +
      '<li>A moment of ambiguity -- the reader should not be entirely sure what the character will decide or feel</li>' +
      '</ul>' +
      '<p>After writing, annotate three choices you made and explain why. (12 marks writing, 4 marks annotation)</p>',
    modelAnswer:
      'A strong response will avoid glorifying violence and instead focus on the human complexity of conflict. The psychological realism should come through fragmented or contradictory thoughts, not dramatic action. ' +
      'Sensory details should be specific and unexpected (not generic battlefield imagery) -- the smell of rain on concrete, the sound of silence after gunfire. ' +
      'The borrowed technique should be clearly identified in the annotation with a reference to the source poem (e.g., "I used short declarative sentences like Armitage in Remains to show how the character shuts down emotionally"). ' +
      'The best responses will create a character who feels real and morally complicated -- neither a hero nor a villain -- and whose inner conflict resonates with the reader beyond the immediate situation.',
    marks: 16,
    difficulty: 'secure',
    keywords: [
      'interior monologue',
      'conflict',
      'creative writing',
      'psychological',
      'sensory detail',
    ],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  // 8. evaluation
  {
    id: 'y8t2-wb-08',
    title: 'Evaluation: Is Macbeth a Villain or a Victim?',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'evaluation',
    instructions:
      "<p>Some readers see Macbeth as a cold-blooded villain; others argue he is a victim of his own ambition, his wife's manipulation, and the witches' prophecies.</p>" +
      '<ol>' +
      '<li>List three pieces of evidence that support the view that Macbeth is a villain. (3 marks)</li>' +
      '<li>List three pieces of evidence that support the view that Macbeth is a victim. (3 marks)</li>' +
      '<li>Write a well-structured paragraph presenting your own view, using evidence from the play. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      "Villain evidence: he murders the sleeping King Duncan (a guest under his protection, a deeply dishonourable act); he orders the massacre of Macduff's innocent family; he returns to the witches of his own will in Act 4, actively seeking power. " +
      "Victim evidence: the witches target Macbeth specifically, planting the seed of ambition; Lady Macbeth systematically dismantles his conscience and sense of self; he is tortured by guilt from the moment of Duncan's murder, suggesting he is not fundamentally evil. " +
      'Evaluative paragraph: Shakespeare presents Macbeth as a deeply tragic figure whose capacity for both greatness and destruction makes him impossible to reduce to a simple villain. He chooses to act on the witches\' prophecy -- "I am settled, and bend up / Each corporal agent to this terrible feat" -- showing agency and deliberate commitment to evil. Yet his vivid moral imagination, expressed through the dagger hallucination and post-murder torment, reveals a man whose conscience never entirely surrenders. Perhaps Shakespeare\'s most disturbing suggestion is that Macbeth is neither villain nor victim, but a warning: that ordinary human ambition, given the right conditions, can destroy everything it touches.',
    marks: 14,
    difficulty: 'mastery',
    keywords: ['evaluation', 'Macbeth', 'villain', 'victim', 'ambition', 'Shakespeare'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2', 'Y8.W3'],
  },
]

// =============================================================================
// TERM 3 SUPPLEMENT: Rhetoric & Media
// =============================================================================

export const y8Term3WorkbookExercises: WorkbookExercise[] = [
  // 1. speech-writing
  {
    id: 'y8t3-wb-01',
    title: 'Structuring a Persuasive Speech',
    termUnit: 'T3: Rhetoric & Media',
    type: 'speech-writing',
    instructions:
      '<p>Before writing a full speech, planning its structure is essential.</p>' +
      '<ol>' +
      '<li>List the five key components of a persuasive speech (opening hook, thesis statement, argument, counter-argument, call to action) and explain the purpose of each. (10 marks)</li>' +
      '<li>Plan a two-minute speech on the topic: <strong>"Schools should ban smartphones during the school day."</strong> Write a bullet-pointed plan with at least three main arguments and one concession. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Five components: (1) Opening hook -- grabs attention immediately; may be a statistic, anecdote, rhetorical question, or bold claim; creates a reason to listen. (2) Thesis statement -- a clear, arguable statement of your position; tells the audience exactly where you stand. (3) Argument -- the body of evidence and reasoning that supports your thesis; should use logos, pathos, and ethos in combination. (4) Counter-argument -- acknowledging the opposing view and refuting it; demonstrates intellectual honesty and makes your position more credible. (5) Call to action -- a specific request for what the audience should do, think, or feel; gives purpose to the speech. ' +
      'A strong plan for the smartphone speech would include arguments such as: reduced distraction improves learning outcomes (logos/statistics); mental health of teenagers linked to reduced screen time (pathos/wellbeing); duty of schools to prepare students for focused work environments (ethos/responsibility). The concession might acknowledge that smartphones have educational uses but argue these can be managed through teacher-controlled access.',
    marks: 16,
    difficulty: 'developing',
    keywords: ['speech structure', 'persuasion', 'call to action', 'counter-argument', 'planning'],
    linkedObjectives: ['Y8.W2', 'Y8.S1', 'Y8.S2'],
  },
  // 2. speech-writing
  {
    id: 'y8t3-wb-02',
    title: "Write and Annotate a Persuasive Speech: 'The World Needs More Dreamers'",
    termUnit: 'T3: Rhetoric & Media',
    type: 'speech-writing',
    instructions:
      '<p>Write a persuasive speech of 250-300 words on the title: <strong>"The world needs more dreamers, not more realists."</strong></p>' +
      '<p>Your speech must deliberately include:</p>' +
      '<ul>' +
      '<li>A rhetorical question in the opening</li>' +
      '<li>A rule of three (tricolon)</li>' +
      '<li>An appeal to emotion (pathos)</li>' +
      '<li>A direct address to the audience ("you," "we," "us")</li>' +
      '<li>A memorable concluding line</li>' +
      '</ul>' +
      '<p>After writing, annotate each technique and explain the intended effect. (14 marks writing, 6 marks annotation)</p>',
    modelAnswer:
      'A strong speech will open with an engaging rhetorical question that challenges the audience to reconsider assumptions (e.g., "When did we decide that practicality was a virtue and imagination a childish indulgence?"). The tricolon should demonstrate rhythmic control and build momentum. Pathos should be specific -- naming a real dreamer whose vision changed the world (e.g., Malala Yousafzai, Alan Turing, Rosa Parks) will be more powerful than abstract claims. ' +
      'Direct address should be consistent and natural, drawing the audience into a shared position ("We need to choose..."). The concluding line should be short, quotable, and echo an idea from the opening for structural cohesion. ' +
      'Annotations should name each technique correctly, quote the relevant words, and explain the specific effect on a live audience rather than a general reader.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['speech writing', 'rhetorical question', 'tricolon', 'pathos', 'direct address'],
    linkedObjectives: ['Y8.W2', 'Y8.W5', 'Y8.S1', 'Y8.S2'],
  },
  // 3. media-literacy
  {
    id: 'y8t3-wb-03',
    title: 'Deconstructing a News Headline',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Your teacher will provide four news headlines covering the same story from different publications (e.g., two broadsheets and two tabloids).</p>' +
      '<ol>' +
      '<li>Identify the language differences between the broadsheet and tabloid headlines. (4 marks)</li>' +
      '<li>What assumptions does each headline make about its reader? (4 marks)</li>' +
      '<li>Which headline do you think is most responsible, and why? (4 marks)</li>' +
      '<li>Write your own neutral headline for the same story. (2 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Broadsheet headlines typically use formal vocabulary, avoid sensationalism, and present information objectively (e.g., "Government announces revised immigration policy"). Tabloid headlines use emotive, colloquial language and prioritise impact over accuracy (e.g., "MIGRANT CRISIS: PM\'s shock U-turn"). ' +
      'Broadsheet headlines assume an educated reader who wants context and analysis; tabloid headlines assume a reader who responds to emotion, urgency, and simple binaries. ' +
      'The most responsible headline will be the one that accurately represents the story without distortion, regardless of the emotional impact this has on circulation. ' +
      'A strong neutral headline will be factual, specific, and free of loaded language: "Prime Minister revises asylum-seeker processing policy."',
    marks: 14,
    difficulty: 'developing',
    keywords: ['media literacy', 'headlines', 'broadsheet', 'tabloid', 'bias', 'language'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  // 4. media-literacy
  {
    id: 'y8t3-wb-04',
    title: 'Analysing Advertising: Persuasion in Visual Media',
    termUnit: 'T3: Rhetoric & Media',
    type: 'media-literacy',
    instructions:
      '<p>Study the advertisement provided (a print or digital advert chosen by your teacher).</p>' +
      '<ol>' +
      '<li>Identify the target audience and explain how you know. (3 marks)</li>' +
      "<li>List three persuasive techniques used in the advert's text or visuals. For each, explain the intended effect. (9 marks)</li>" +
      '<li>Is this advert ethical? Consider whether it uses exaggeration, false needs, or manipulation of insecurity. Write a judgment paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The target audience should be identified through specific evidence: colour palette, models used, language register, platform context, and the product itself. ' +
      'Persuasive techniques might include: bandwagon ("Join millions who already..."); aspirational imagery that associates the product with an idealised lifestyle; scarcity/urgency language ("Limited time offer"); celebrity endorsement (ethos); emotional narrative that creates pathos before introducing the product. ' +
      'The ethical judgment should apply specific criteria: does the advert make truthful claims? Does it exploit insecurities (common in beauty/diet adverts)? Does it target vulnerable groups? A strong response will weigh evidence on both sides before reaching a clear, qualified conclusion.',
    marks: 18,
    difficulty: 'secure',
    keywords: [
      'advertising',
      'media literacy',
      'target audience',
      'persuasion',
      'ethics',
      'visual media',
    ],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  // 5. language-analysis
  {
    id: 'y8t3-wb-05',
    title: "Language Analysis: Greta Thunberg's UN Speech (2019)",
    termUnit: 'T3: Rhetoric & Media',
    type: 'language-analysis',
    instructions:
      "<p>Read the extract from Greta Thunberg's address to the UN Climate Action Summit, September 2019.</p>" +
      '<ol>' +
      "<li>Identify the dominant emotion in Thunberg's speech. How is this emotion conveyed through word choice? (4 marks)</li>" +
      '<li>Analyse the effect of Thunberg\'s repeated phrase "How dare you!" (4 marks)</li>' +
      '<li>How does Thunberg use personal narrative to strengthen her argument? Write a PEEL paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The dominant emotion is controlled fury. Thunberg conveys this through forceful, accusatory diction ("betrayed," "stolen," "suffering") that positions world leaders as perpetrators of harm against young people. The register is deliberately direct, stripping away diplomatic softening to expose what she presents as moral failure. ' +
      '"How dare you!" functions as an anaphoric exclamation that escalates the emotional intensity of the speech with each repetition. The phrase is unusually combative for a diplomatic address, which makes it memorable and unsettling. It refuses to allow the audience to remain neutral -- they are accused, not just addressed. ' +
      'PEEL paragraph: Thunberg uses personal narrative to anchor global catastrophe in human experience. She states that scientists have been warning about climate change "for more than thirty years," establishing that the problem is not new and that inaction has been a choice. By positioning herself as a teenager whose childhood "was stolen," she creates pathos -- her individual loss stands in for the future of an entire generation. Collins\' tactic of personalising statistics transforms abstract data into lived injustice, giving the audience an emotional reason to act where logic alone has failed.',
    marks: 14,
    difficulty: 'secure',
    keywords: [
      'Greta Thunberg',
      'anaphora',
      'language analysis',
      'pathos',
      'rhetoric',
      'personal narrative',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R9', 'Y8.W3'],
  },
  // 6. persuasive writing
  {
    id: 'y8t3-wb-06',
    title: 'Persuasive Writing: Letter to a Decision Maker',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    instructions:
      '<p>Write a formal persuasive letter (250-300 words) to a decision maker of your choice (a headteacher, local councillor, or government minister) arguing for a change you believe is necessary.</p>' +
      '<p>You must:</p>' +
      '<ul>' +
      '<li>Use appropriate formal letter conventions (address, date, salutation, sign-off)</li>' +
      '<li>Deploy ethos (establish your credibility or connect to shared values)</li>' +
      '<li>Include at least one statistic or specific fact (logos)</li>' +
      '<li>Use pathos to illustrate the human impact of the issue</li>' +
      '<li>Maintain a respectful yet assertive tone throughout</li>' +
      '</ul>',
    modelAnswer:
      'A strong letter will open with a clear statement of purpose and quickly establish the writer\'s connection to the issue (ethos). The formal conventions -- including a properly formatted address, "Dear [Title]," and "Yours sincerely/faithfully" -- should be accurate. ' +
      'The statistic or fact should be plausible and integrated naturally, not bolted on. Pathos should humanise the issue with a brief scenario or example of real impact. ' +
      'The tone should demonstrate the balance between confidence and respect that persuasive non-fiction requires: the writer must be assertive enough to be compelling without being aggressive. The concluding paragraph should restate the core request and invite a response.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['formal letter', 'persuasion', 'ethos', 'logos', 'pathos', 'tone'],
    linkedObjectives: ['Y8.W2', 'Y8.W5', 'Y8.S1'],
  },
  // 7. analysis
  {
    id: 'y8t3-wb-07',
    title: 'Analysing the Language of Political Speeches',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    instructions:
      '<p>Read the two speech extracts provided (one historical, one contemporary) on the theme of social justice or national identity.</p>' +
      '<ol>' +
      '<li>Identify one rhetorical technique used in each speech and explain its purpose. (4 marks)</li>' +
      '<li>How does each speaker construct their authority (ethos)? (4 marks)</li>' +
      '<li>Compare the two speakers\' use of inclusive language ("we," "us," "our"). What is the effect of this technique in each context? (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Answers will vary depending on the speeches provided. A strong response for the technique question will move beyond identification to analyse why the technique works in the specific context of that speech and audience. ' +
      'Ethos can be established through: personal experience ("As someone who..."), professional authority, shared values ("As citizens, we all believe..."), or tone of measured reason. Students should identify which strategy each speaker uses and evaluate its effectiveness. ' +
      'The comparison of inclusive language should note both the similarity (both speeches create a shared identity) and the difference (the context of "we" changes its meaning -- national unity, class solidarity, or shared humanity carry different implications). The best responses will consider who is included in "we" and, crucially, who is excluded.',
    marks: 14,
    difficulty: 'mastery',
    keywords: [
      'political speech',
      'rhetorical technique',
      'ethos',
      'inclusive language',
      'comparison',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R9', 'Y8.W3'],
  },
  // 8. evaluation
  {
    id: 'y8t3-wb-08',
    title: "Evaluation: 'Rhetoric is Manipulation in Disguise'",
    termUnit: 'T3: Rhetoric & Media',
    type: 'evaluation',
    instructions:
      '<p>Some people argue that rhetoric is simply a polished form of manipulation -- that skilled speakers use emotional and persuasive techniques to bypass rational thinking.</p>' +
      '<ol>' +
      '<li>Give two arguments that support this view with examples. (4 marks)</li>' +
      '<li>Give two arguments that challenge this view. (4 marks)</li>' +
      '<li>Write a developed paragraph presenting your own evaluation. Refer to at least one speech you have studied. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Supporting the view: propaganda uses rhetorical techniques (repetition, emotional appeals, dehumanising language) to manipulate populations into supporting harmful ideologies -- evidence from historical totalitarian regimes; advertising deliberately exploits insecurity and creates artificial need through pathos and aspiration. ' +
      'Challenging the view: rhetoric is also the language of moral courage -- civil rights leaders used rhetorical techniques to expose injustice and inspire ethical action; the ability to argue compellingly is essential to democracy, where persuasion is the alternative to force. ' +
      'Evaluative paragraph: The distinction between rhetoric and manipulation lies not in the techniques used but in the honesty and purpose of the speaker. Greta Thunberg\'s use of anaphora and pathos in her 2019 UN address ("How dare you!") deploys the same tools as a demagogue, yet the transparency of her evidence and the moral weight of her cause distinguish her speech from manipulation. Rhetoric becomes manipulation when it deliberately distorts truth or exploits the powerless; used by those speaking truth to power, it is one of the most important tools available to those without institutional authority. To condemn all rhetoric, therefore, is to silence the voices that need to be heard most.',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['rhetoric', 'manipulation', 'evaluation', 'propaganda', 'ethics', 'persuasion'],
    linkedObjectives: ['Y8.R9', 'Y8.W2', 'Y8.W3'],
  },
]

// =============================================================================
// TERM 2 HOMEWORK TASKS: Conflict Poetry & Macbeth
// Half-terms 3 and 4 (matching the main file's pattern)
// =============================================================================

export const y8Term2HomeworkTasks: HomeworkTask[] = [
  // ── Half-Term 3 (T2a: Conflict Poetry) ──────────────────────────────────
  {
    id: 'y8t2-hw-01',
    title: 'Reading Response: A Conflict Poem of Your Choice',
    halfTerm: 3,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Choose a conflict poem not studied in class (use an anthology, anthology website, or library resource).</p>' +
      '<ol>' +
      '<li>Write out the poem or attach a printed copy. (1 mark)</li>' +
      '<li>Annotate it, identifying at least four techniques with brief explanations. (4 marks)</li>' +
      '<li>Write a response paragraph (100-130 words) explaining how the poem presents conflict and why it affected you. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Annotations should be specific: identifying techniques by name, quoting the relevant words, and noting the intended effect rather than simply labelling. ' +
      'The response paragraph should demonstrate personal engagement alongside critical analysis. It should explain how the poet specifically presents conflict -- through whose perspective, with what emotional effect -- and connect to one of the broader ideas discussed in class (e.g., futility, heroism, psychological cost, civilian experience). The best responses will justify their emotional reaction with reference to specific language choices.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: [
      'conflict poetry',
      'annotation',
      'personal response',
      'technique',
      'independent reading',
    ],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W3'],
  },
  {
    id: 'y8t2-hw-02',
    title: 'Research Task: The Reality of World War One',
    halfTerm: 3,
    weekNumber: 2,
    type: 'research',
    instructions:
      '<p>Research the conditions faced by soldiers on the Western Front during World War One.</p>' +
      '<ol>' +
      '<li>Write a factual summary (100 words) of life in the trenches. (4 marks)</li>' +
      "<li>Find one primary source (a soldier's letter, diary entry, or contemporary photograph). Describe what it reveals about the experience of conflict. (5 marks)</li>" +
      '<li>How does your research change or deepen your understanding of the Owen poems studied in class? (6 marks)</li>' +
      '</ol>' +
      '<p>List your sources in a brief bibliography.</p>',
    modelAnswer:
      'The factual summary should be accurate and specific (e.g., trench foot, bombardments, "going over the top," the high casualty rates of major offensives). ' +
      'Primary source analysis should consider what the source reveals that statistics cannot: the personal, sensory, emotional reality of being a soldier. ' +
      'The connection to Owen should be specific -- students should identify particular images, words, or ideas in the poems that now carry more weight given their research (e.g., "blood-shod" understood in the context of trench foot; "guttering, choking" understood as an accurate description of mustard gas). This task tests whether students can use contextual knowledge as a lens for literary analysis.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['World War One', 'research', 'primary source', 'context', 'Owen', 'trenches'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8t2-hw-03',
    title: 'Analytical Paragraph: A Conflict Poem Key Moment',
    halfTerm: 3,
    weekNumber: 4,
    type: 'analysis',
    instructions:
      '<p>Choose a single moment from one of the conflict poems studied in class that you found striking.</p>' +
      '<p>Write one PEEL paragraph (100-150 words) analysing how the poet presents this moment. Your paragraph must:</p>' +
      '<ul>' +
      '<li>State a clear analytical point about the moment</li>' +
      '<li>Embed a quotation as evidence</li>' +
      '<li>Analyse a specific language technique and its effect</li>' +
      '<li>Link to the wider theme of conflict in the poem</li>' +
      '</ul>',
    modelAnswer:
      "A strong paragraph will have a clear analytical point (not a retelling of events), a well-chosen embedded quotation, detailed exploration of a language technique's connotations and effect, and a convincing link to a theme of conflict (e.g., futility, heroism, trauma, civilian experience, remembrance). " +
      'The PEEL structure should be evident but not mechanical -- the best responses will read as fluent analytical writing rather than a checklist. The link (L) should extend beyond the immediate poem to consider what the moment reveals about conflict more broadly.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'developing',
    keywords: ['PEEL', 'conflict poem', 'analysis', 'quotation', 'technique', 'theme'],
    linkedObjectives: ['Y8.W1', 'Y8.W3', 'Y8.R5'],
  },
  {
    id: 'y8t2-hw-04',
    title: 'Creative Writing: A Poem About Modern Conflict',
    halfTerm: 3,
    weekNumber: 6,
    type: 'creative',
    instructions:
      '<p>Write an original poem (12-20 lines) responding to a form of modern conflict. This could be armed conflict, but may also include social conflict, environmental conflict, or personal internal conflict.</p>' +
      '<p>Your poem must demonstrate:</p>' +
      '<ul>' +
      '<li>A deliberate choice of form (free verse, regular stanzas, sonnet, or another form)</li>' +
      '<li>At least two techniques from the conflict poems studied (e.g., anaphora, enjambment, imagery, sound effects)</li>' +
      '<li>A consistent tone or voice</li>' +
      '</ul>' +
      '<p>Write a 50-word commentary explaining your structural and linguistic choices.</p>',
    modelAnswer:
      'A strong poem will demonstrate genuine creative thought beyond imitation of studied poems. The form choice should be purposeful -- free verse for chaos or fragmentation, regular stanzas for order under pressure, an interrupted sonnet for broken love or hope. ' +
      'Techniques should be embedded naturally, not visibly bolted on. The tone should be consistent: a poem cannot be angry and wistful simultaneously without clear intention. ' +
      'The commentary should demonstrate critical self-awareness: students should explain what effect they intended with specific choices, referencing studied poets where relevant (e.g., "I used enjambment across stanzas as Armitage does in \'Remains\' to show how trauma spills beyond its moment").',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['creative writing', 'poetry', 'form', 'modern conflict', 'commentary'],
    linkedObjectives: ['Y8.W4', 'Y8.W5', 'Y8.W6'],
  },
  // ── Half-Term 4 (T2b: Macbeth) ──────────────────────────────────────────
  {
    id: 'y8t2-hw-05',
    title: 'Reading Response: Macbeth Act 1 -- First Impressions',
    halfTerm: 4,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Re-read Act 1 of <em>Macbeth</em>, focusing on how Macbeth and Lady Macbeth are introduced.</p>' +
      '<ol>' +
      '<li>Write two sentences summarising the first impression each character creates. (4 marks)</li>' +
      '<li>Find a quotation for each character that you think most powerfully reveals their true nature at this point. Embed each quotation in a sentence of analysis. (6 marks)</li>' +
      '<li>Do you think Shakespeare wants us to sympathise with Macbeth at the end of Act 1? Explain why. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Macbeth is initially presented as a celebrated warrior whose bravery is publicly honoured -- "brave Macbeth (well he deserves that name)" -- before being destabilised by the witches\' prophecy, revealing the fragility of honour when ambition is awakened. ' +
      'Lady Macbeth is introduced reading a letter (immediately a powerful image of intelligence and purpose), and her "unsex me here" soliloquy reveals a woman who believes she must purge her femininity to pursue power, suggesting she views emotion as a weakness. ' +
      'Whether we sympathise with Macbeth depends on how we read the evidence: he is clearly troubled by his murderous intention, and his soliloquy shows a vivid moral imagination. Shakespeare creates a character we understand, even as we watch him choose wrongly -- and that understanding is the beginning of sympathy.',
    marks: 15,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['Macbeth', 'Act 1', 'characterisation', 'first impressions', 'sympathy'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.W3'],
  },
  {
    id: 'y8t2-hw-06',
    title: 'Extended Writing: How Does Shakespeare Present Power in Macbeth?',
    halfTerm: 4,
    weekNumber: 2,
    type: 'extended-writing',
    instructions:
      '<p>Write a response (200-250 words) to the question: <strong>"How does Shakespeare present the theme of power in <em>Macbeth</em>?"</strong></p>' +
      '<p>Your response should:</p>' +
      '<ul>' +
      '<li>Make at least two distinct analytical points</li>' +
      '<li>Use embedded quotations as evidence for each point</li>' +
      '<li>Analyse a specific language or dramatic technique for each point</li>' +
      '<li>Consider how power shifts and changes through the play</li>' +
      '</ul>',
    modelAnswer:
      "A strong response will identify different dimensions of power in the play: political power (kingship, divine right), psychological power (Lady Macbeth's manipulation, the witches' influence), and the corrupting nature of illegitimately gained power. " +
      'Points should be clearly stated, supported with embedded quotations, and developed through analysis of specific language choices. The response should demonstrate an understanding that power in Macbeth is never stable -- it shifts, corrupts, and ultimately destroys those who seek it through betrayal. ' +
      "The best responses will consider how Shakespeare's original audience (in the context of the Gunpowder Plot and James I's belief in divine right) would have understood the play's treatment of power as a political warning.",
    marks: 20,
    estimatedMinutes: 50,
    difficulty: 'secure',
    keywords: ['Macbeth', 'power', 'theme', 'extended writing', 'Shakespeare', 'analysis'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W1', 'Y8.W3'],
  },
  {
    id: 'y8t2-hw-07',
    title: 'Revision: Macbeth Character Profile',
    halfTerm: 4,
    weekNumber: 4,
    type: 'revision',
    instructions:
      '<p>Create a detailed revision profile for one character from <em>Macbeth</em> (your teacher will assign or you may choose). Your profile must include:</p>' +
      '<ul>' +
      '<li>A brief character summary (who they are, their role in the play)</li>' +
      '<li>Three key quotations that reveal their character, with a one-sentence analysis of each</li>' +
      '<li>How the character changes (or fails to change) across the play</li>' +
      '<li>What the character represents thematically (ambition, guilt, loyalty, manipulation, etc.)</li>' +
      '<li>One evaluative statement: what do you think Shakespeare ultimately wants the audience to think about this character?</li>' +
      '</ul>',
    modelAnswer:
      'The character summary should be concise and accurate. Quotation analysis should embed the quotation and identify a specific technique. ' +
      'The change section should identify at least one significant turning point for the character and explain what drives it. ' +
      'The thematic analysis should connect the individual character to the play\'s larger ideas, not just describe them as "good" or "evil." ' +
      'The evaluative statement should demonstrate independent thought and be supported with evidence. Strong responses will acknowledge ambiguity -- Shakespeare rarely invites simple judgments.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['Macbeth', 'revision', 'character', 'theme', 'quotation', 'evaluation'],
    linkedObjectives: ['Y8.R3', 'Y8.R5', 'Y8.R6', 'Y8.W3'],
  },
  {
    id: 'y8t2-hw-08',
    title: "Research Task: Shakespeare's Context",
    halfTerm: 4,
    weekNumber: 5,
    type: 'research',
    instructions:
      '<p>Research one aspect of the context in which Shakespeare wrote <em>Macbeth</em>.</p>' +
      '<p>Choose ONE of the following:</p>' +
      '<ul>' +
      '<li>The Gunpowder Plot of 1605 and its connection to the play</li>' +
      "<li>King James I's beliefs about witchcraft (see his book <em>Daemonologie</em>)</li>" +
      '<li>The concept of the "Divine Right of Kings" in Jacobean England</li>' +
      '</ul>' +
      '<ol>' +
      '<li>Write a factual summary of your chosen topic (100-120 words). (5 marks)</li>' +
      '<li>Explain how this context would have affected how a Jacobean audience understood the play differently from a modern audience. (5 marks)</li>' +
      '<li>Identify a specific moment in <em>Macbeth</em> that gains additional meaning from this context. Explain the connection. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The factual summary should be accurate and appropriately specific (e.g., the Gunpowder Plot summary should include key figures, date, and outcome). ' +
      'The audience comparison should be thoughtful: a Jacobean audience would have found the witches immediately threatening rather than theatrical, the murder of a king literally sacrilegious rather than metaphorically wrong, and the betrayal of a guest a specific violation of sacred codes of hospitality. ' +
      'The connection to a specific moment should be well-chosen and convincingly argued (e.g., the "equivocation" theme in Act 2 directly echoes the Jesuit trial argument of the Gunpowder conspirators).',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: [
      'Shakespeare',
      'context',
      'Jacobean',
      'Gunpowder Plot',
      'divine right',
      'witchcraft',
    ],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W2'],
  },
  {
    id: 'y8t2-hw-09',
    title: 'Extended Writing: Conflict in Macbeth -- Internal and External',
    halfTerm: 4,
    weekNumber: 6,
    type: 'extended-writing',
    instructions:
      '<p>Write a response (200-250 words) to: <strong>"Explore how Shakespeare presents conflict in <em>Macbeth</em>."</strong></p>' +
      "<p>Consider BOTH internal conflict (within a character's mind) and external conflict (between characters or forces).</p>" +
      '<p>You must use at least three embedded quotations and analyse a technique in each case.</p>',
    modelAnswer:
      'Strong responses will recognise that conflict operates on multiple levels simultaneously in Macbeth. Internal conflict is most powerfully dramatised in Macbeth\'s soliloquies -- the dagger speech, the "I am settled" speech, and the "Tomorrow and tomorrow and tomorrow" speech chart the arc of a man at war with himself. ' +
      "External conflict includes: Macbeth vs Duncan (power), Macbeth vs Macduff (justice), the witches vs the natural order. The best responses will argue that the internal and external conflicts are interdependent -- Macbeth's internal conflict weakens, which enables external forces to destroy him. " +
      'Quotation analysis should demonstrate ability to explore connotations and technique rather than merely explaining meaning.',
    marks: 20,
    estimatedMinutes: 50,
    difficulty: 'mastery',
    keywords: ['Macbeth', 'conflict', 'internal', 'external', 'extended writing', 'Shakespeare'],
    linkedObjectives: ['Y8.R4', 'Y8.R6', 'Y8.W1', 'Y8.W3'],
  },
  {
    id: 'y8t2-hw-10',
    title: 'Revision: Conflict Poetry and Macbeth -- Key Connections',
    halfTerm: 4,
    weekNumber: 7,
    type: 'revision',
    instructions:
      '<p>Create a revision mind map or structured notes connecting the conflict poems to <em>Macbeth</em> under the following headings:</p>' +
      '<ul>' +
      '<li>The psychological cost of conflict (with one quotation from a poem and one from Macbeth)</li>' +
      '<li>The relationship between power and conflict (with one quotation from each)</li>' +
      '<li>How writers use language to make conflict feel real (identify one technique from a poem and one from Macbeth)</li>' +
      '</ul>' +
      '<p>Then write one paragraph (80-100 words) explaining which text you think presents conflict most powerfully, and why. (15 marks total)</p>',
    modelAnswer:
      'The mind map or notes should demonstrate the ability to make genuine thematic connections across texts rather than treating them as entirely separate units. ' +
      "The psychological cost section might connect Macbeth's hallucinations to the trauma in \"Remains.\" The power and conflict section might connect Lady Macbeth's manipulation to the authority of military commanders in Owen's poems. " +
      'The comparative paragraph should be specific and evaluative, presenting a clear preference with reasons rather than simply describing both texts. The best responses will identify a dimension of conflict that one text explores more fully or more powerfully than the other.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['revision', 'conflict', 'Macbeth', 'poetry', 'connections', 'comparison'],
    linkedObjectives: ['Y8.R5', 'Y8.R7', 'Y8.W2', 'Y8.W3'],
  },
]

// =============================================================================
// TERM 3 HOMEWORK TASKS: Rhetoric & Media
// Half-terms 5 and 6 (matching the main file's pattern)
// =============================================================================

export const y8Term3HomeworkTasks: HomeworkTask[] = [
  // ── Half-Term 5 (T3a: Rhetoric) ─────────────────────────────────────────
  {
    id: 'y8t3-hw-01',
    title: 'Research Task: A Great Rhetorical Speech',
    halfTerm: 5,
    weekNumber: 1,
    type: 'research',
    instructions:
      '<p>Research a speech that is widely considered a landmark of rhetoric. You may choose from the following or select your own with teacher approval:</p>' +
      '<ul>' +
      '<li>Martin Luther King Jr. -- "I Have a Dream" (1963)</li>' +
      '<li>Malala Yousafzai -- UN Speech (2013)</li>' +
      '<li>Winston Churchill -- "We Shall Fight on the Beaches" (1940)</li>' +
      '<li>Nelson Mandela -- "I Am Prepared to Die" (1964)</li>' +
      '</ul>' +
      '<ol>' +
      '<li>Write a brief summary of the context: who, when, where, and why. (3 marks)</li>' +
      '<li>Identify three rhetorical techniques used and explain the effect of each. (9 marks)</li>' +
      '<li>Why do you think this speech is still remembered? What makes it timeless? (3 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The context summary should be accurate and specific -- knowing the stakes (e.g., Mandela was on trial for his life; MLK spoke during the March on Washington) enriches understanding of rhetorical choices. ' +
      'Technique analysis should move beyond labelling to explaining why the technique works in this specific speech, for this specific audience, at this specific historical moment. ' +
      'The timelessness question should produce genuine reflection: strong responses will consider whether the speech addresses universal human concerns (justice, freedom, courage) or speaks to a particular moment -- or both.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['rhetoric', 'speech', 'research', 'context', 'technique', 'persuasion'],
    linkedObjectives: ['Y8.R9', 'Y8.W2', 'Y8.S1'],
  },
  {
    id: 'y8t3-hw-02',
    title: 'Reading Response: Analysing a Speech Extract',
    halfTerm: 5,
    weekNumber: 2,
    type: 'reading-response',
    instructions:
      '<p>Your teacher will provide an unseen speech extract for you to analyse at home.</p>' +
      '<ol>' +
      '<li>Annotate the extract, identifying at least five language or rhetorical techniques. (5 marks)</li>' +
      '<li>Write a structured paragraph (100-130 words) analysing how the speaker uses language to persuade. Use at least two embedded quotations. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Annotations should identify techniques correctly and note their intended effect rather than just labelling them. Strong annotations will consider the cumulative effect of techniques working together. ' +
      "The analytical paragraph should demonstrate a clear argument (not just a list of techniques) and show how language choices serve the speaker's persuasive purpose. The best responses will consider the intended audience and how specific techniques are calibrated to appeal to that audience's values, fears, or aspirations.",
    marks: 15,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['speech analysis', 'annotation', 'rhetoric', 'persuasion', 'unseen text'],
    linkedObjectives: ['Y8.R5', 'Y8.R9', 'Y8.W3'],
  },
  {
    id: 'y8t3-hw-03',
    title: 'Creative Task: Write and Perform a Two-Minute Speech',
    halfTerm: 5,
    weekNumber: 4,
    type: 'creative',
    instructions:
      '<p>Choose a topic you feel strongly about and write a two-minute persuasive speech (approximately 280-320 words when spoken at a natural pace).</p>' +
      '<p>Your speech must:</p>' +
      '<ul>' +
      '<li>Have a clear structure (hook, thesis, at least two arguments, counter-argument, call to action)</li>' +
      '<li>Use at least four named rhetorical techniques (label these in the margin)</li>' +
      '<li>Be written to be spoken aloud -- use conversational rhythm, direct address, and moments of deliberate pause or emphasis</li>' +
      '</ul>' +
      '<p>Practice reading it aloud before submission. You may be asked to deliver it in class.</p>',
    modelAnswer:
      'A strong speech will demonstrate real conviction -- the best topics are ones the student genuinely cares about rather than safe or generic subjects. ' +
      'The structural requirement should be evident but not mechanical. The techniques should be varied (not four rhetorical questions) and deployed at moments where they add maximum impact. ' +
      'The spoken quality is essential: the speech should not read like an essay. Sentences should feel natural when spoken aloud, with rhythm and emphasis built into the writing. ' +
      'Marginal technique labels should be accurate and should demonstrate that the student understands why the technique is used at that point in the speech, not just what it is.',
    marks: 20,
    estimatedMinutes: 55,
    difficulty: 'secure',
    keywords: [
      'speech writing',
      'rhetoric',
      'creative',
      'spoken language',
      'persuasion',
      'structure',
    ],
    linkedObjectives: ['Y8.W2', 'Y8.W5', 'Y8.S1', 'Y8.S2'],
  },
  {
    id: 'y8t3-hw-04',
    title: 'Extended Writing: Ethos, Pathos, and Logos in a Text You Have Chosen',
    halfTerm: 5,
    weekNumber: 6,
    type: 'extended-writing',
    instructions:
      '<p>Choose any persuasive text you encounter in everyday life (an advert, a charity appeal, a political leaflet, a newspaper editorial, or an online opinion piece).</p>' +
      "<p>Write a response (200-250 words) analysing how Aristotle's three modes of persuasion (ethos, pathos, logos) are used. For each mode:</p>" +
      '<ul>' +
      '<li>Provide a specific example from your chosen text</li>' +
      '<li>Explain the effect on the target audience</li>' +
      '<li>Evaluate how effectively that mode is used</li>' +
      '</ul>',
    modelAnswer:
      'The task rewards genuine engagement with the world outside school. Strong responses will choose an interesting, specific text (not a generic example) and analyse it with precision. ' +
      'For each mode, students should quote or closely describe specific language from the text. The evaluation should go beyond "it is effective" to explain why it works for that particular audience in that particular context. ' +
      'The best responses will consider how the three modes interact: a text that uses pathos without logos may feel emotionally manipulative, while one that uses logos without pathos may feel cold and unconvincing. The most persuasive texts usually balance all three.',
    marks: 20,
    estimatedMinutes: 50,
    difficulty: 'secure',
    keywords: ['ethos', 'pathos', 'logos', 'persuasion', 'real-world text', 'Aristotle'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2', 'Y8.W3'],
  },
  {
    id: 'y8t3-hw-05',
    title: 'Revision: Rhetoric Techniques Quick-Reference Guide',
    halfTerm: 5,
    weekNumber: 7,
    type: 'revision',
    instructions:
      '<p>Create a revision reference guide for rhetorical techniques. For each technique below, write:</p>' +
      '<ul>' +
      '<li>A clear definition</li>' +
      '<li>An original example sentence</li>' +
      '<li>A brief explanation of when or why a speaker might use it</li>' +
      '</ul>' +
      '<p>Techniques to include: anaphora, tricolon (rule of three), rhetorical question, antithesis, hyperbole, direct address, alliteration, inclusive language.</p>',
    modelAnswer:
      'Definitions should be accurate and student-generated rather than copied from a dictionary. Original example sentences should demonstrate genuine understanding rather than formulaic substitutions. ' +
      'The "when and why" explanations should demonstrate understanding of rhetoric as a tool shaped by context and purpose: anaphora builds momentum and makes ideas memorable; rhetorical questions engage and challenge the audience without requiring an answer; antithesis dramatises a contrast that makes the speaker\'s position clearer by showing what it is not. ' +
      'The best revision guides will be clear, well-organised, and show that the student has genuinely processed the material rather than transcribed it.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'foundation',
    keywords: [
      'rhetoric',
      'revision',
      'anaphora',
      'tricolon',
      'rhetorical question',
      'antithesis',
      'techniques',
    ],
    linkedObjectives: ['Y8.V2', 'Y8.R9', 'Y8.W2'],
  },
  // ── Half-Term 6 (T3b: Media Literacy) ──────────────────────────────────
  {
    id: 'y8t3-hw-06',
    title: 'Media Literacy: Comparing News Coverage of the Same Story',
    halfTerm: 6,
    weekNumber: 1,
    type: 'analysis',
    instructions:
      '<p>Find a news story covered by at least three different news sources on the same day.</p>' +
      '<ol>' +
      '<li>Summarise the story in two sentences using only facts that appear in all three sources. (3 marks)</li>' +
      '<li>Identify two significant differences in how the story is framed, worded, or presented across the sources. (6 marks)</li>' +
      '<li>What does this comparison reveal about how news is constructed rather than simply reported? Write a paragraph. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      "The two-sentence summary tests students' ability to identify shared, verified facts and resist editorialising. " +
      'The differences should be significant and specific: not just "one used a more dramatic headline" but an analysis of what different vocabulary choices imply, whose voices are included or excluded, what images are chosen, and what context is or is not provided. ' +
      'The analytical paragraph should demonstrate an understanding that all news involves selection, framing, and perspective -- this is not necessarily sinister (it may reflect different readerships and purposes) but it means that no single source gives the complete picture. The best responses will avoid a cynical "all news is lying" conclusion in favour of a nuanced understanding of how media works.',
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['media literacy', 'news', 'bias', 'framing', 'comparison', 'critical thinking'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8t3-hw-07',
    title: 'Creative Task: Design a Responsible Advert',
    halfTerm: 6,
    weekNumber: 2,
    type: 'creative',
    instructions:
      '<p>Design and write the text for a responsible advertisement for a cause you believe in (e.g., environmental action, mental health awareness, local community initiative).</p>' +
      '<p>Your advert should include:</p>' +
      '<ul>' +
      '<li>A slogan that uses at least one rhetorical technique</li>' +
      '<li>A brief body text (40-60 words) using ethos, pathos, or logos</li>' +
      '<li>A call to action</li>' +
      '</ul>' +
      '<p>After creating the advert, write a 50-word commentary explaining your choices and why your advert is responsible and ethical.</p>',
    modelAnswer:
      'The slogan should be memorable, concise, and demonstrate a clearly identifiable rhetorical technique (e.g., alliteration, antithesis, rhetorical question). It should feel genuine rather than corporate. ' +
      'The body text should demonstrate a clear understanding of which mode of persuasion is most appropriate for the cause and audience. A mental health advert may rely on pathos; an environmental advert may use logos (statistics); a community initiative may use ethos (shared local identity). ' +
      "The commentary should reflect critically on the ethical dimension: responsible advertising is honest, does not exploit vulnerability, and serves the audience's interests rather than manipulating them against their own.",
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['advertising', 'media literacy', 'creative', 'ethics', 'rhetoric', 'call to action'],
    linkedObjectives: ['Y8.W2', 'Y8.W5', 'Y8.R9'],
  },
  {
    id: 'y8t3-hw-08',
    title: 'Research Task: The History of Propaganda',
    halfTerm: 6,
    weekNumber: 4,
    type: 'research',
    instructions:
      '<p>Research the use of propaganda in one of the following historical contexts:</p>' +
      '<ul>' +
      '<li>World War One recruitment posters (Britain)</li>' +
      '<li>Nazi Germany (1930s-1940s)</li>' +
      '<li>Cold War propaganda (USA or USSR)</li>' +
      '</ul>' +
      '<ol>' +
      '<li>Describe one specific piece of propaganda from your chosen context, including what it showed and what message it conveyed. (4 marks)</li>' +
      '<li>What rhetorical techniques does it use? (4 marks)</li>' +
      '<li>Why is understanding propaganda history important for media literacy today? (7 marks)</li>' +
      '</ol>',
    modelAnswer:
      "The description should be specific and detailed enough that a reader could picture the propaganda piece. Students should explain both its explicit message and its implied assumptions (e.g., a WWI recruitment poster's implied message about masculinity and shame). " +
      'Rhetorical techniques in visual propaganda might include: appeal to emotion (pathos through imagery), authority figures (ethos), simple binary oppositions (us vs them), use of colour and symbolism. ' +
      "The contemporary relevance question should produce genuine, thoughtful analysis. Strong responses will argue that understanding propaganda's historical techniques helps us identify when similar tactics are used in modern media: identifying loaded imagery, recognising dehumanising language, questioning whose voices are absent from a narrative.",
    marks: 15,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['propaganda', 'history', 'research', 'media literacy', 'rhetoric', 'visual media'],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2'],
  },
  {
    id: 'y8t3-hw-09',
    title: 'Extended Writing: Are We More Susceptible to Persuasion Online?',
    halfTerm: 6,
    weekNumber: 6,
    type: 'extended-writing',
    instructions:
      '<p>Write a response (200-250 words) to the question: <strong>"Are people more susceptible to persuasion and manipulation in the digital age than in previous eras?"</strong></p>' +
      '<p>Your response must:</p>' +
      '<ul>' +
      '<li>Present an argument for one side, then engage with the counter-argument</li>' +
      '<li>Reference at least one specific digital platform or online phenomenon (e.g., algorithm-curated content, viral social media, influencer culture)</li>' +
      '<li>Draw on knowledge of rhetoric and media literacy from this term</li>' +
      '</ul>',
    modelAnswer:
      'Strong responses will demonstrate genuine critical thinking rather than simply listing concerns about social media. The most interesting responses will acknowledge genuine complexity: people today have access to more information than ever before, which could make them more or less susceptible depending on their media literacy skills. ' +
      'Arguments for greater susceptibility: algorithms show users content that confirms existing beliefs (filter bubbles), making it harder to encounter challenging perspectives; the speed and volume of online information makes fact-checking impractical; persuasion techniques are now data-driven and highly targeted. ' +
      'Counter-arguments: traditional media also used propaganda, limited narratives, and emotional manipulation; the internet enables access to diverse viewpoints; young people today receive more media literacy education than previous generations. ' +
      'The conclusion should be qualified and genuinely argued rather than categorical.',
    marks: 20,
    estimatedMinutes: 50,
    difficulty: 'mastery',
    keywords: [
      'digital media',
      'persuasion',
      'media literacy',
      'algorithm',
      'extended writing',
      'critical thinking',
    ],
    linkedObjectives: ['Y8.R9', 'Y8.R10', 'Y8.W2', 'Y8.W3'],
  },
  {
    id: 'y8t3-hw-10',
    title: 'Revision: Year 8 Term 3 -- Key Skills and Concepts',
    halfTerm: 6,
    weekNumber: 7,
    type: 'revision',
    instructions:
      '<p>Create a structured revision resource that consolidates your learning from Term 3 (Rhetoric and Media).</p>' +
      '<p>Your resource should address all three of the following sections:</p>' +
      '<ul>' +
      '<li><strong>Section A: Key vocabulary</strong> -- define eight key terms from the term (your choice from the terms studied)</li>' +
      '<li><strong>Section B: Analytical skills</strong> -- write one PEEL paragraph analysing a rhetorical technique from a speech or text studied this term</li>' +
      '<li><strong>Section C: Personal reflection</strong> -- write three sentences explaining how your understanding of how language is used to persuade has changed this term</li>' +
      '</ul>',
    modelAnswer:
      'Section A definitions should be student-generated and accurate. Eight good choices might include: rhetoric, ethos, pathos, logos, anaphora, tricolon, media literacy, propaganda, bias, framing. ' +
      'Section B PEEL paragraph should demonstrate all four components: Point (clear analytical statement), Evidence (embedded quotation or specific reference), Explanation (technique and effect), Link (to broader theme of persuasion/rhetoric). ' +
      'Section C reflection should be specific and honest -- students should reference concrete changes in how they read, watch, or listen to persuasive content. The best reflections will show genuine metacognitive awareness of their own developing critical literacy.',
    marks: 15,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['revision', 'rhetoric', 'media literacy', 'PEEL', 'vocabulary', 'reflection'],
    linkedObjectives: ['Y8.R9', 'Y8.W2', 'Y8.W3', 'Y8.V2'],
  },
]
