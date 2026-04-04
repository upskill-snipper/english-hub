// poetry-resources.ts
// Poetry teaching resources for KS3 through IGCSE

export interface PoetryAnalysisGuide {
  id: string;
  title: string;
  yearGroup: string;
  poem?: string;
  poet?: string;
  analysisFramework: string[];
  keyDevices: { device: string; definition: string; example: string }[];
  discussionQuestions: string[];
  writingTask: string;
  modelAnalysisPoints: string[];
}

export interface PoetryComparison {
  id: string;
  title: string;
  yearGroup: string;
  poem1: string;
  poem2: string;
  comparisonTheme: string;
  similarities: string[];
  differences: string[];
  comparisonPhrases: string[];
  essayPlanOutline: string[];
}

// ---------------------------------------------------------------------------
// POETRY ANALYSIS GUIDES
// ---------------------------------------------------------------------------

export const poetryAnalysisGuides: PoetryAnalysisGuide[] = [
  // 1. Y7: Introduction to poetry -- What makes a poem?
  {
    id: "guide-y7-intro-poetry",
    title: "What Makes a Poem? An Introduction to Poetry",
    yearGroup: "Year 7",
    analysisFramework: [
      "Read the poem aloud to hear its sounds and rhythm",
      "Identify what the poem is literally describing on the surface",
      "Ask: what bigger idea or feeling is the poet exploring?",
      "Notice any words or phrases that feel surprising or powerful",
      "Look at how the poem is arranged on the page -- stanzas, line breaks, shape",
      "Consider who is speaking and what their attitude seems to be",
      "Reflect on the overall effect: how does the poem make you feel and why?",
    ],
    keyDevices: [
      {
        device: "Simile",
        definition: "A direct comparison using 'like' or 'as'",
        example: "'My love is like a red, red rose' -- the speaker compares their feeling to something vivid in nature",
      },
      {
        device: "Metaphor",
        definition: "A direct comparison that states one thing is another, without 'like' or 'as'",
        example: "'Life is a journey' -- the poet merges two ideas to suggest movement, choices, and an eventual destination",
      },
      {
        device: "Personification",
        definition: "Giving human qualities to a non-human thing",
        example: "'The wind howled through the trees' -- the wind is given a voice and a feeling, making nature seem threatening",
      },
      {
        device: "Alliteration",
        definition: "Repetition of the same consonant sound at the start of nearby words",
        example: "'The fair breeze blew, the white foam flew' -- the repeated 'f' and 'b' sounds create a rushing, airy effect",
      },
      {
        device: "Rhyme",
        definition: "Words at the end of lines (or within lines) that share the same sound",
        example: "A regular ABAB rhyme scheme can create a sense of order and control in a poem",
      },
      {
        device: "Rhythm",
        definition: "The pattern of stressed and unstressed syllables that gives a poem its beat",
        example: "A fast, short-lined rhythm can mirror urgency or excitement; a slow, long-lined rhythm can feel solemn",
      },
    ],
    discussionQuestions: [
      "What is the first image or feeling you get when you read this poem? What creates that impression?",
      "Which single word or phrase in the poem stands out most to you, and why?",
      "How does the shape or layout of the poem on the page affect the way you read it?",
      "What do you think the poet most wanted the reader to think or feel? How do you know?",
      "Is there anything in the poem that you find confusing or mysterious? Why might the poet have left it open?",
    ],
    writingTask:
      "Write a short poem of your own (at least 8 lines) about a place that matters to you. Try to include at least two of the poetic devices we have studied. Then write a paragraph explaining the choices you made and the effect you hoped to create.",
    modelAnalysisPoints: [
      "Even a simple poem carries layers of meaning beyond its literal subject",
      "Word choice (diction) is deliberate: every word a poet selects creates a specific effect",
      "The arrangement of a poem on the page is itself a form of communication",
      "Sound devices such as rhyme and alliteration contribute to mood and meaning, not just decoration",
      "A reader's personal response is valid, but must always be supported by evidence from the text",
    ],
  },

  // 2. Y7: Folk tale poem analysis
  {
    id: "guide-y7-folktale-poem",
    title: "Folk Tale Poem Analysis",
    yearGroup: "Year 7",
    analysisFramework: [
      "Identify the story being told -- who are the characters and what happens?",
      "Recognise folk tale conventions: the quest, the trickster, the moral, the supernatural",
      "Trace how the poet uses a ballad or narrative structure to drive the story forward",
      "Examine how dialogue and direct speech bring characters to life",
      "Analyse the use of repetition and refrain -- why does the poet return to certain lines?",
      "Consider what moral or lesson the poem might be teaching",
      "Reflect on how the poem preserves or updates a traditional story",
    ],
    keyDevices: [
      {
        device: "Ballad form",
        definition: "A narrative poem often with a regular ABCB rhyme scheme and strong rhythm, rooted in oral tradition",
        example: "Many folk tale poems use ballad stanzas to give the feeling of a story passed down through generations",
      },
      {
        device: "Refrain",
        definition: "A line or group of lines repeated at regular intervals throughout a poem",
        example: "A repeated refrain such as 'And still the river rolls along' builds a sense of inevitability or warning",
      },
      {
        device: "Archetype",
        definition: "A character type or situation that appears across cultures and centuries",
        example: "The wise elder, the cunning trickster, and the brave hero are archetypes found in folk tale poems worldwide",
      },
      {
        device: "Dialogue",
        definition: "Direct speech within the poem that reveals character and advances the narrative",
        example: "'Come, come,' the figure whispered, 'I know the road you seek' -- dialogue creates tension and characterisation",
      },
      {
        device: "Imagery of the natural world",
        definition: "Descriptions of landscape, weather, or animals that carry symbolic weight",
        example: "A dark forest, a crossroads, or a rising moon often signal danger or transformation in folk tale poems",
      },
      {
        device: "Moral or lesson",
        definition: "A message about human behaviour embedded in the story",
        example: "A character who acts out of greed might suffer a reversal of fortune, teaching a lesson without stating it directly",
      },
    ],
    discussionQuestions: [
      "What folk tale or legend does this poem remind you of? What are the connections?",
      "Who is the most powerful character in the poem and how does the poet show that power?",
      "How does the use of rhythm and rhyme make the poem feel like a story told aloud?",
      "What is the moral or lesson of the poem? Is it stated or implied?",
      "How does the poet use the natural world to create atmosphere and symbolism?",
    ],
    writingTask:
      "Retell a folk tale or legend you know as a ballad poem of at least four stanzas, using ABCB rhyme. Include at least one piece of dialogue and one example of imagery drawn from the natural world. Write an annotation on your poem identifying the devices you used.",
    modelAnalysisPoints: [
      "Folk tale poems draw on a shared cultural memory that gives them immediate resonance",
      "The ballad form's oral origins mean rhythm and refrain are especially important structural tools",
      "Characters are often archetypal rather than psychologically complex, which sharpens the moral focus",
      "The natural world functions as a symbolic landscape, not just a backdrop",
      "Repetition in folk tale poems is purposeful: it builds expectation and emphasises the poem's central warning or truth",
    ],
  },

  // 3. Y8: Conflict poetry -- Dulce et Decorum Est (Wilfred Owen)
  {
    id: "guide-y8-dulce",
    title: "Dulce et Decorum Est -- Close Reading Guide",
    yearGroup: "Year 8",
    poem: "Dulce et Decorum Est",
    poet: "Wilfred Owen",
    analysisFramework: [
      "Read the poem in full; note your initial emotional response",
      "Identify the two main sections: the march and the gas attack",
      "Examine Owen's use of simile and metaphor to convey physical suffering",
      "Analyse the shift in pace and tone from stanza one to stanza two",
      "Trace the accusatory second-person address in the final section",
      "Consider the ironic use of the Latin title (Horace) and its effect",
      "Link language choices to Owen's context as a First World War soldier-poet",
    ],
    keyDevices: [
      {
        device: "Extended simile",
        definition: "A simile developed over several lines to create sustained comparison",
        example: "'like old beggars under sacks' -- the soldiers are compared to destitute old men, stripping away any romantic notion of heroism",
      },
      {
        device: "Sibilance",
        definition: "Repetition of 's' sounds, often creating a hissing or unsettling effect",
        example: "'Gas! GAS! Quick, boys!' -- the sudden consonants contrast with the slow sibilance of the gas itself",
      },
      {
        device: "Visceral imagery",
        definition: "Graphic, bodily description designed to force the reader to confront physical reality",
        example: "'the white eyes writhing in his face' -- the image is deliberately difficult to look away from",
      },
      {
        device: "Direct address",
        definition: "The poet speaks directly to 'you', implicating the reader in the poem's argument",
        example: "'you would not tell with such high zest / To children ardent for some desperate glory' -- the reader is challenged",
      },
      {
        device: "Irony",
        definition: "A contrast between what is said and what is meant, often to expose hypocrisy",
        example: "The Latin 'dulce et decorum est pro patria mori' (sweet and fitting it is to die for one's country) is labelled 'the old Lie'",
      },
      {
        device: "Irregular structure",
        definition: "Owen disrupts the expected sonnet-like form to mirror the chaos of war",
        example: "The poem's shifting stanza lengths reflect the unpredictability of the battlefield",
      },
    ],
    discussionQuestions: [
      "How does Owen use the opening stanza to destroy romanticised images of soldiers?",
      "What effect does the dramatic shift of pace in 'Gas! GAS! Quick, boys!' have on the reader?",
      "Why does Owen describe the gas attack through the image of a 'drowning' man? What does this comparison suggest?",
      "Who is the 'you' Owen addresses in the final stanza? Why is this choice so powerful?",
      "How does the Latin title function as irony? Why might Owen have chosen to end with another language?",
      "What does this poem suggest about the relationship between language, propaganda, and truth?",
    ],
    writingTask:
      "Write an analytical paragraph (PEEL structure) examining how Owen uses imagery in the second stanza of 'Dulce et Decorum Est' to challenge the idea that war is heroic. Include at least two embedded quotations and analyse specific language choices.",
    modelAnalysisPoints: [
      "Owen transforms the soldiers from heroes into victims in the very first stanza through the beggars simile",
      "The gas attack section is deliberately chaotic -- the broken syntax and urgent imperative 'Gas! GAS!' mirror the panic",
      "The drowning metaphor for the dying soldier is sustained and precise: it suggests helplessness and slow suffocation",
      "The direct address in the final section makes the poem a moral argument, not just a narrative",
      "The Latin closing irony is directed at civilian propagandists and poets who glorified enlistment without witnessing war",
    ],
  },

  // 4. Y8: Conflict poetry -- Exposure (Wilfred Owen)
  {
    id: "guide-y8-exposure",
    title: "Exposure -- Close Reading Guide",
    yearGroup: "Year 8",
    poem: "Exposure",
    poet: "Wilfred Owen",
    analysisFramework: [
      "Identify the enemy in this poem -- it is not human",
      "Track the repeated structure of stanzas: each builds towards a sense of futility",
      "Examine how Owen uses personification to make the weather an active aggressor",
      "Analyse the repeated phrase 'But nothing happens' and its cumulative effect",
      "Consider how the poem's form (near-rhyme, hesitant rhythm) mirrors the soldiers' exhausted waiting",
      "Explore the contrast between the frozen battlefield and the imagined warmth of home",
      "Link to Owen's context: the poem was written during the winter stalemate of 1917",
    ],
    keyDevices: [
      {
        device: "Personification",
        definition: "Giving human agency and intention to non-human forces",
        example: "'Our brains ache, in the merciless iced east winds that knive us' -- the wind is an active, cruel attacker",
      },
      {
        device: "Para-rhyme (half-rhyme)",
        definition: "End words that share consonants but differ in vowel sounds, creating a sense of dissonance",
        example: "'knife us / nervous' -- the near-rhyme feels unsatisfying and unsettled, reflecting the men's mental state",
      },
      {
        device: "Repetition",
        definition: "The return of a word, phrase, or structure to build emphasis or a sense of futility",
        example: "'But nothing happens' appears three times, each time undercutting any hope of action or relief",
      },
      {
        device: "Pathetic fallacy",
        definition: "Using weather or setting to reflect the emotional state of characters",
        example: "The unceasing cold and snow externalize the soldiers' interior despair",
      },
      {
        device: "Interrogative",
        definition: "A question used rhetorically to deepen the reader's uncertainty",
        example: "'Is it that we are dying?' -- the question is both literal and philosophical, reflecting existential doubt",
      },
      {
        device: "Sensory detail",
        definition: "Precise descriptions of what can be felt, heard, seen, or touched",
        example: "'Pale flakes with fingering stealth come feeling for our faces' -- the snow is tactile and predatory",
      },
    ],
    discussionQuestions: [
      "Why is the title 'Exposure' significant? What are the soldiers exposed to?",
      "How does Owen make the weather feel more dangerous than the enemy in this poem?",
      "What effect does the repeated 'But nothing happens' have on the poem's tone and meaning?",
      "How do the soldiers' memories of home contrast with their present experience? Why does Owen include these?",
      "What does the final stanza suggest about the soldiers' fate? Is there any hope in the poem?",
      "Compare the way Owen presents suffering here to 'Dulce et Decorum Est' -- what is different about this poem's approach?",
    ],
    writingTask:
      "Write two analytical paragraphs comparing how Owen presents the enemy in 'Exposure' and 'Dulce et Decorum Est'. Consider what each poem suggests is the true danger facing soldiers in the First World War.",
    modelAnalysisPoints: [
      "In 'Exposure' the real enemy is not the opposing army but cold, darkness, and inaction -- nature becomes hostile and indifferent",
      "The para-rhyme scheme creates a sense of things being almost right but not quite: a formal embodiment of the soldiers' fractured hope",
      "The recurring 'But nothing happens' transforms waiting itself into a form of violence",
      "The flashbacks to home contrast with the frozen present, creating pathos and showing what the men have lost",
      "Owen's theological references ('For love of God seems dying') suggest that traditional consolations have failed these men",
    ],
  },

  // 5. Y9: Unseen poetry annotation strategy
  {
    id: "guide-y9-unseen-annotation",
    title: "Unseen Poetry Annotation Strategy",
    yearGroup: "Year 9",
    analysisFramework: [
      "First read: read for meaning only -- do not annotate yet, just absorb the poem",
      "Second read: circle any words or phrases that feel significant, surprising, or unusual",
      "Third read: annotate with device labels, but always add a comment on effect -- not just 'this is a metaphor'",
      "Identify the poem's subject (what it is about on the surface) and its theme (the deeper idea)",
      "Mark the poem's turning point or volta -- where does the tone, perspective, or argument shift?",
      "Note the form: is it structured or free verse? What does that choice suggest?",
      "Consider the speaker: who are they, what is their attitude, and does it change?",
      "Identify at least one thing the poem does not say directly -- what is implied or left ambiguous?",
    ],
    keyDevices: [
      {
        device: "Volta",
        definition: "A turn or shift in the poem's argument, tone, or perspective",
        example: "A poem that opens with celebration and then shifts to grief contains a volta that is central to its meaning",
      },
      {
        device: "Ambiguity",
        definition: "Language that can be read in more than one way, inviting multiple interpretations",
        example: "A word like 'still' can mean motionless or continuing -- poets often exploit such ambiguity deliberately",
      },
      {
        device: "Tone",
        definition: "The poet's or speaker's attitude towards the subject, conveyed through word choice",
        example: "A poem about death might be elegiac, bitter, celebratory, or resigned -- tone shapes everything",
      },
      {
        device: "Free verse",
        definition: "Poetry without a regular rhyme scheme or metrical pattern",
        example: "Free verse can suggest freedom, chaos, or naturalistic speech, depending on the context",
      },
      {
        device: "Enjambment",
        definition: "When a sentence or clause runs on beyond the end of a line without pause",
        example: "Enjambment creates momentum and can place surprising emphasis on the first word of the next line",
      },
      {
        device: "Caesura",
        definition: "A strong pause within a line, often marked by punctuation",
        example: "A mid-line full stop creates a dramatic halt, forcing the reader to pause and reconsider",
      },
    ],
    discussionQuestions: [
      "What is the poem about on the surface, and what deeper theme or idea does it explore?",
      "Where does the poem's tone shift? What triggers that shift?",
      "Which single technique has the greatest effect on the poem's meaning?",
      "Is there anything in the poem that you cannot fully explain? What might that ambiguity suggest?",
      "What does the form of the poem (structure, rhythm, rhyme or lack of it) contribute to the overall effect?",
    ],
    writingTask:
      "Practise with an unseen poem provided by your teacher. Annotate the poem in full using the three-read strategy, then write a structured response of three paragraphs: one on language, one on structure, and one on the overall effect and theme.",
    modelAnalysisPoints: [
      "The first read should always be for overall meaning -- students who annotate immediately often miss the poem's arc",
      "Device labels without effect analysis score poorly: the analytical comment is where marks are earned",
      "Identifying a volta is often the key to unlocking what a poem is really about",
      "Ambiguity is not confusion -- it is a deliberate feature that enriches a poem's meaning",
      "Form and structure are not separate from content: they are part of the meaning",
    ],
  },

  // 6. IGCSE: Anthology poem close reading method
  {
    id: "guide-igcse-anthology-close-reading",
    title: "IGCSE Anthology Poem Close Reading Method",
    yearGroup: "IGCSE",
    analysisFramework: [
      "Identify the poem's context: when was it written, who wrote it, and what circumstances shaped it?",
      "Establish the poem's central argument or emotional journey in one sentence",
      "Select three or four key moments in the poem where language is especially significant",
      "For each key moment: quote precisely, name the technique, and analyse the effect in detail",
      "Consider how structure and form reinforce or complicate the poem's content",
      "Identify the poem's relationship to wider themes in the anthology cluster",
      "Consider alternative interpretations: what else might a word or image mean?",
      "End your analysis with a statement about the poem's overall significance and what it reveals about its theme",
    ],
    keyDevices: [
      {
        device: "Semantic field",
        definition: "A group of words associated with the same topic or concept, creating a dominant impression",
        example: "A semantic field of violence (wound, scar, blade, bruise) colours an entire poem with menace even without explicit description",
      },
      {
        device: "Juxtaposition",
        definition: "Placing two contrasting ideas, images, or situations side by side for effect",
        example: "Juxtaposing beauty and destruction, or power and vulnerability, creates irony or complexity",
      },
      {
        device: "Anaphora",
        definition: "Repetition of a word or phrase at the beginning of successive clauses or lines",
        example: "Repeated 'I am' statements build a commanding, assertive voice; repeated 'We' creates collective solidarity",
      },
      {
        device: "Symbolism",
        definition: "An object, image, or event that represents a larger idea",
        example: "A crumbling statue can symbolise the decay of power; a river can symbolise the passage of time",
      },
      {
        device: "Dramatic monologue",
        definition: "A poem in the voice of a single speaker addressing a silent listener",
        example: "The form creates dramatic irony if the speaker unwittingly reveals more than they intend",
      },
      {
        device: "Euphemism",
        definition: "A mild or indirect word substituted for one considered harsh or blunt",
        example: "A poet using euphemism for death or violence can suggest the speaker's discomfort or self-deception",
      },
    ],
    discussionQuestions: [
      "What does this poem reveal about power -- who holds it, who lacks it, and what it costs?",
      "How does the poet's context shape the poem's central concern?",
      "Which technique has the greatest cumulative effect across the whole poem?",
      "What is the poem's relationship to the other poems in its anthology cluster?",
      "How might a reader from a different culture or time period respond to this poem differently?",
    ],
    writingTask:
      "Write a full close-reading analysis of one anthology poem of your choice (400-600 words). Follow the eight-step framework, ensuring you cover language, structure, and context. Conclude with a statement linking the poem to its wider thematic cluster.",
    modelAnalysisPoints: [
      "Context should frame but not dominate an analysis: it explains choices, it does not replace analysis of the text",
      "Selecting three or four key moments is more effective than trying to comment on every line",
      "The best analyses move between specific language choices and the poem's wider argument",
      "Form and structure carry meaning: a sonnet that breaks its own rules is making a point",
      "Offering alternative interpretations demonstrates the highest level of analytical thinking",
    ],
  },

  // 7. IGCSE: Ozymandias (Shelley)
  {
    id: "guide-igcse-ozymandias",
    title: "Ozymandias -- Close Reading Guide",
    yearGroup: "IGCSE",
    poem: "Ozymandias",
    poet: "Percy Bysshe Shelley",
    analysisFramework: [
      "Identify the poem's unusual structure: a story within a story (a traveller's account)",
      "Map the layers of narration: Shelley -- the speaker -- the traveller -- the inscription",
      "Examine the gap between Ozymandias's boast and his actual legacy",
      "Analyse how the sculptor's art has outlasted the king's power",
      "Consider the irony of the phrase 'Look on my works' when surrounded by emptiness",
      "Explore the poem's message about the limits of political power and human ambition",
      "Link to Shelley's Romantic context and his political radicalism",
    ],
    keyDevices: [
      {
        device: "Irony",
        definition: "A gap between what is stated and reality, creating satirical or tragic effect",
        example: "'Look on my works, ye Mighty, and despair!' is ironic: there are no works to look on, only ruins",
      },
      {
        device: "Personification of the sculpture",
        definition: "The statue's 'sneer of cold command' gives it a personality that outlives its subject",
        example: "The sculptor has captured the king's arrogance in stone, making the expression immortal while the empire decays",
      },
      {
        device: "Layered narration",
        definition: "The poem uses multiple narrators to create ironic distance between the tyrant's self-image and his reality",
        example: "Shelley -- the first-person speaker -- a traveller -- the king's inscription: each layer adds perspective",
      },
      {
        device: "Oxymoron",
        definition: "Two contradictory terms placed together",
        example: "'colossal wreck' -- the grandeur of 'colossal' collides with the degradation of 'wreck'",
      },
      {
        device: "Imagery of decay and emptiness",
        definition: "Descriptions of sand, ruins, and vastness suggest the inevitable erosion of power",
        example: "'the lone and level sands stretch far away' -- the final image of infinite emptiness swallows all ambition",
      },
      {
        device: "Sonnet form with disruptions",
        definition: "The poem loosely follows sonnet structure but does not resolve neatly, mirroring its refusal to celebrate power",
        example: "The lack of a neat resolution reflects the poem's argument that power does not lead to lasting order",
      },
    ],
    discussionQuestions: [
      "Why does Shelley use so many layers of narration? What effect does this distancing create?",
      "How does the sculptor's art become more powerful than the king's command?",
      "What does the poem suggest about the nature of power and legacy?",
      "How does the final image of 'lone and level sands' contrast with the inscription on the statue?",
      "In what ways is this poem political? What might Shelley be commenting on about the rulers of his own era?",
    ],
    writingTask:
      "Write an analytical essay (500-700 words) on how Shelley uses structure and language in 'Ozymandias' to present the theme of power. Use the eight-step close reading framework and ensure you discuss how the poem's form contributes to its meaning.",
    modelAnalysisPoints: [
      "The multiple narrators create ironic distance: Ozymandias cannot control how his story is told",
      "The sculptor emerges as the true artist-power figure: his 'hand' and 'heart' have outlasted the king",
      "The boastful inscription is the poem's pivot: placed in a desert with nothing remaining, it becomes self-defeating",
      "'Colossal wreck' is a central oxymoron: greatness and destruction are inseparable in the poem's vision of power",
      "Shelley was a radical critic of monarchy; the poem is a political argument dressed as a traveller's tale",
    ],
  },

  // 8. IGCSE: My Last Duchess (Browning)
  {
    id: "guide-igcse-my-last-duchess",
    title: "My Last Duchess -- Close Reading Guide",
    yearGroup: "IGCSE",
    poem: "My Last Duchess",
    poet: "Robert Browning",
    analysisFramework: [
      "Establish the dramatic monologue form and its implications for reliability",
      "Identify the silent listener and how the Duke performs for them",
      "Trace what the Duke reveals about himself that he does not intend to reveal",
      "Examine how the Duke's language betrays his obsession with control and ownership",
      "Analyse the repeated references to the portrait -- what does confining the Duchess to a painting mean?",
      "Consider the poem's historical context: Renaissance Italy and the power of noble men over women",
      "Reflect on what the poem implies about the Duke's treatment of his previous wife",
    ],
    keyDevices: [
      {
        device: "Dramatic monologue",
        definition: "A poem in which a single speaker addresses a silent listener, unwittingly revealing their character",
        example: "The Duke believes he is in control of his narrative, but the reader sees his jealousy, pride, and implied violence",
      },
      {
        device: "Dramatic irony",
        definition: "When the reader understands more than the speaker realises",
        example: "The Duke describes the Duchess's 'smile' and 'blushes' as faults; the reader recognises these as signs of warmth",
      },
      {
        device: "Enjambment and iambic pentameter",
        definition: "The conversational flow of iambic pentameter with enjambment creates a naturalistic, controlling voice",
        example: "The Duke's speech seems almost casual, masking the menace beneath -- the smoothness is itself unsettling",
      },
      {
        device: "Euphemism and implication",
        definition: "The Duke never directly states what happened to the Duchess -- he implies it through indirect language",
        example: "'I gave commands; / Then all smiles stopped together' -- the euphemism makes the violence more chilling",
      },
      {
        device: "Possessive language",
        definition: "Words of ownership applied to a person",
        example: "'my last Duchess', 'my gift', 'my favour' -- the Duke speaks of the Duchess as a possession throughout",
      },
      {
        device: "The portrait as symbol",
        definition: "Confining the Duchess to a painting represents the Duke's desire to control and silence her",
        example: "In the painting, he controls who sees her smile -- the exact thing he could not control in life",
      },
    ],
    discussionQuestions: [
      "What do we learn about the Duke's character from the way he speaks about the Duchess?",
      "What do you think happened to the Duchess? How does Browning suggest this without stating it?",
      "Why is it significant that the Duke is now negotiating for another bride while describing the last one?",
      "How does the portrait function as a symbol of the Duke's desire for control?",
      "What does the poem suggest about gender and power in the society it depicts?",
    ],
    writingTask:
      "Write a character analysis of the Duke in 'My Last Duchess' (400-550 words). Explore how Browning uses the dramatic monologue form to reveal the Duke's obsession with power and control. Include analysis of language choices, implied meaning, and structural effects.",
    modelAnalysisPoints: [
      "The Duke is an unreliable narrator: he believes he is presenting himself well, but reveals his cruelty and jealousy",
      "The Duchess's 'faults' (her warmth, her courtesy, her joy in life) expose the Duke's possessiveness",
      "The euphemism 'I gave commands; / Then all smiles stopped together' is the poem's most chilling moment",
      "The portrait is the poem's controlling symbol: art is used to imprison and silence a woman",
      "The negotiation context is crucial: the Duke is already seeking a replacement, treating women as acquisitions",
    ],
  },

  // 9. IGCSE: Unseen poem strategy
  {
    id: "guide-igcse-unseen-strategy",
    title: "IGCSE Unseen Poem Strategy",
    yearGroup: "IGCSE",
    analysisFramework: [
      "First read: read the whole poem without annotating; focus on overall meaning and emotional impact",
      "Second read: identify the poem's subject, theme, and speaker",
      "Third read: annotate language choices, naming techniques and commenting on their specific effect",
      "Identify the poem's structure: regular or irregular, stanzaic or free verse, and what this communicates",
      "Locate the turning point or volta: where does the poem's argument or tone shift?",
      "Draft a one-sentence interpretation of the poem's central meaning",
      "Plan your response: intro (theme and overview), two or three body paragraphs (language and structure), conclusion",
      "Write with confidence: an unseen poem has no single correct answer -- show your reasoning clearly",
    ],
    keyDevices: [
      {
        device: "Volta / turning point",
        definition: "A shift in the poem's direction, tone, or argument",
        example: "Locating the volta helps you understand what the poem is building towards or moving away from",
      },
      {
        device: "Speaker and voice",
        definition: "Who is speaking, and what is their relationship to the poem's subject?",
        example: "A first-person speaker creates intimacy; a third-person speaker can create distance or objectivity",
      },
      {
        device: "Imagery patterns",
        definition: "Recurring groups of images or metaphors that build a consistent impression",
        example: "If a poem consistently uses water imagery -- flood, tide, drowning -- this semantic field shapes the whole poem's meaning",
      },
      {
        device: "Structural contrast",
        definition: "Using different stanza lengths, rhyme patterns, or line lengths to signal a contrast in ideas or emotions",
        example: "A long, flowing stanza followed by a single short line creates emphasis through contrast",
      },
      {
        device: "Connotation",
        definition: "The associations and implications carried by a word beyond its literal meaning",
        example: "The word 'still' can mean silent, motionless, or continuing -- its connotations depend on context",
      },
      {
        device: "Tone shift",
        definition: "A change in the speaker's attitude during the poem",
        example: "A poem that opens in hope and ends in resignation creates its meaning through that shift",
      },
    ],
    discussionQuestions: [
      "What is the poem about on the surface, and what does it explore beneath the surface?",
      "How does the speaker's attitude to the subject change, if at all, over the course of the poem?",
      "Which image or phrase has the greatest impact on you, and why?",
      "How does the poem's structure contribute to its overall effect?",
      "What does the poem leave unsaid or unresolved? What is the significance of that gap?",
    ],
    writingTask:
      "Using an unseen poem provided by your teacher, complete the full eight-step strategy. Write a timed response of 350-450 words covering language, structure, and overall effect. Practise under exam conditions: 30 minutes reading and writing.",
    modelAnalysisPoints: [
      "Unseen poetry rewards students who have internalised the habit of asking 'why?' at every point",
      "There is no single correct reading: what matters is the quality of the reasoning and the precision of the evidence",
      "A vocabulary of technical terms should be second nature so that naming a device is instant, freeing time for analysis",
      "The volta is usually the key to understanding the poem's overall argument",
      "An unseen response that acknowledges complexity and ambiguity will always outscore one that forces a simple reading",
    ],
  },

  // 10. IGCSE: War poem cluster overview
  {
    id: "guide-igcse-war-cluster",
    title: "IGCSE War Poem Cluster Overview",
    yearGroup: "IGCSE",
    analysisFramework: [
      "Identify each poem's historical and biographical context -- when and why was it written?",
      "Map each poem's attitude to war: pro-war, anti-war, elegiac, critical, complex, or ambivalent",
      "Consider the speaker's perspective: soldier, civilian, observer, survivor, or other?",
      "Examine how each poem presents violence: directly, indirectly, symbolically, or through omission",
      "Trace the cluster's range of emotional registers: patriotism, grief, anger, numbness, guilt",
      "Identify recurring techniques across the cluster: what do these poems share formally?",
      "Consider which poems are most relevant for comparison questions and why",
      "Develop a view of the cluster as a whole: what does it say about war, memory, and human experience?",
    ],
    keyDevices: [
      {
        device: "Elegy",
        definition: "A poem of lamentation for the dead, often moving from grief towards consolation",
        example: "Some war poems function as elegies for individual soldiers; others are elegies for an entire generation",
      },
      {
        device: "Propaganda subversion",
        definition: "Using or inverting the language of patriotic propaganda to expose its dishonesty",
        example: "Owen, Sassoon, and others deliberately echo recruitment rhetoric and then undercut it with brutal reality",
      },
      {
        device: "Collective voice",
        definition: "Using 'we' to speak on behalf of a group, creating solidarity or shared fate",
        example: "The collective 'we' in 'Exposure' places the reader alongside the soldiers in the frozen trench",
      },
      {
        device: "Understatement",
        definition: "Saying less than the full truth to create irony or to suggest the inadequacy of language before terrible events",
        example: "A poet might describe a man's death in a single flat sentence precisely because the reality cannot be fully expressed",
      },
      {
        device: "Historical allusion",
        definition: "References to specific battles, places, or events that add factual weight to the poem",
        example: "The Charge of the Light Brigade is a historical event; Tennyson's poem transforms it into myth and elegy",
      },
      {
        device: "Contrast of home and front",
        definition: "Juxtaposing the safety and normality of civilian life with the horror of the battlefield",
        example: "This contrast creates pathos and also implied criticism of those who stayed home and did not understand",
      },
    ],
    discussionQuestions: [
      "Which poem in the cluster presents the most complex or ambivalent attitude to war? How?",
      "How do poems written during a conflict differ from those written about it in retrospect?",
      "What different roles does the soldier-speaker play across the cluster?",
      "Which techniques appear most frequently across war poems, and why might that be?",
      "What does the war poetry cluster as a whole suggest about the relationship between language and truth?",
    ],
    writingTask:
      "Write a comparative essay (600-800 words) on how two poems from the war cluster present the experience of soldiers. Ensure you analyse language, structure, and context, and use precise comparative connectives throughout.",
    modelAnalysisPoints: [
      "The war poetry cluster spans multiple conflicts and decades: context is not interchangeable between poems",
      "Not all war poems are anti-war -- Tennyson's 'Charge of the Light Brigade' glorifies sacrifice even as it acknowledges catastrophe",
      "The best comparative essays find both similarity and difference, avoiding simple 'poem A says X, poem B says Y' structures",
      "Recurring formal techniques (fragmented syntax, irregular structure, visceral imagery) form a shared anti-war poetic language",
      "The cluster's lasting power lies in its insistence that the full truth of war cannot be contained in official narratives",
    ],
  },
];

// ---------------------------------------------------------------------------
// POETRY COMPARISONS
// ---------------------------------------------------------------------------

export const poetryComparisons: PoetryComparison[] = [
  // 1. Y8: Dulce et Decorum Est vs Charge of the Light Brigade
  {
    id: "comp-y8-dulce-charge",
    title: "Dulce et Decorum Est vs The Charge of the Light Brigade",
    yearGroup: "Year 8",
    poem1: "Dulce et Decorum Est",
    poem2: "The Charge of the Light Brigade",
    comparisonTheme: "Attitudes to death and sacrifice in war",
    similarities: [
      "Both poems depict the death of soldiers in vivid, specific detail",
      "Both use strong rhythm to convey the momentum of military action",
      "Both address the relationship between soldiers and those who sent them to fight",
      "Both use the second person or rhetorical address to implicate or challenge the reader",
      "Both are written in response to specific historical conflicts, giving them documentary weight",
    ],
    differences: [
      "Owen's poem condemns the glorification of war; Tennyson's poem celebrates courageous sacrifice",
      "Owen uses graphic, visceral imagery; Tennyson uses heroic, elevated language",
      "Owen writes from firsthand experience as a soldier; Tennyson was a civilian laureate writing from a distance",
      "Owen's poem creates a sense of chaos and horror; Tennyson's poem creates a sense of noble, ordered sacrifice",
      "'Dulce' ends with bitter irony and accusation; 'Charge' ends with a call to honour and remember",
      "Owen strips war of romance; Tennyson perpetuates and amplifies the romantic narrative of war",
    ],
    comparisonPhrases: [
      "While Owen uses ... to challenge ..., Tennyson instead ...",
      "Both poets depict the deaths of soldiers, but they frame those deaths very differently: ...",
      "Owen's visceral imagery contrasts sharply with Tennyson's elevated diction ...",
      "In 'Dulce', the soldiers are victims; in 'Charge', they are heroes -- a difference that reflects ...",
      "A further contrast can be seen in the poets' purposes: Owen seeks to disillusion, whereas Tennyson aims to ...",
      "Despite their very different tones, both poets share a concern for ...",
    ],
    essayPlanOutline: [
      "Introduction: Introduce both poems and their contexts; state the central difference in attitude to war and sacrifice",
      "Paragraph 1: Compare how each poet presents the soldiers' experience -- focus on language and imagery",
      "Paragraph 2: Compare the poets' use of structure and form to reinforce their different messages",
      "Paragraph 3: Compare the role of the reader -- how does each poem position us in relation to the soldiers' fate?",
      "Paragraph 4: Compare context -- how does each poet's background shape their approach?",
      "Conclusion: Summarise the comparison; offer a judgment about which poem most effectively conveys its argument and why",
    ],
  },

  // 2. Y8: Two conflict poems comparison
  {
    id: "comp-y8-two-conflict",
    title: "Comparing Two Conflict Poems: Exposure and Dulce et Decorum Est",
    yearGroup: "Year 8",
    poem1: "Exposure",
    poem2: "Dulce et Decorum Est",
    comparisonTheme: "The experience of suffering in the First World War",
    similarities: [
      "Both are written by Wilfred Owen from personal experience as a soldier on the Western Front",
      "Both challenge the idea that war is glorious or that soldiers are heroic warriors",
      "Both use sensory imagery to force the reader to confront physical suffering",
      "Both create a sense of helplessness and futility among the soldiers depicted",
      "Both have a political dimension: they argue against the propaganda that glorified war",
    ],
    differences: [
      "'Dulce' focuses on a single dramatic incident (a gas attack); 'Exposure' focuses on the endless monotony of waiting",
      "The enemy in 'Dulce' is human (gas, artillery, war itself); in 'Exposure' the enemy is weather and inaction",
      "'Dulce' ends with a direct, accusatory address to civilians; 'Exposure' ends with bleak, almost passive resignation",
      "'Dulce' uses vivid, graphic, nightmarish imagery; 'Exposure' uses slow, cold, numbing description",
      "The tone of 'Dulce' is furious and urgent; the tone of 'Exposure' is exhausted and despairing",
      "Para-rhyme is central to 'Exposure'; 'Dulce' uses more traditional rhyme scheme that is then disrupted",
    ],
    comparisonPhrases: [
      "Both Owen poems condemn ..., but they do so through very different methods: ...",
      "Whereas 'Dulce et Decorum Est' presents suffering as ..., 'Exposure' focuses instead on ...",
      "Owen's use of ... in 'Exposure' creates a contrasting effect to his use of ... in 'Dulce'",
      "In both poems, the reader is positioned as ..., though the emotional effect differs because ...",
      "A key difference lies in the poems' conclusions: ...",
      "The shared context of Owen's experiences on the Western Front means that ...",
    ],
    essayPlanOutline: [
      "Introduction: Introduce both poems; establish that both are by Owen but present suffering in different ways",
      "Paragraph 1: Compare the type of suffering each poem depicts -- the dramatic event versus the chronic wait",
      "Paragraph 2: Compare language choices -- visceral imagery in 'Dulce' versus slow, numbing description in 'Exposure'",
      "Paragraph 3: Compare structure and form -- the disrupted rhyme of 'Dulce' versus the para-rhyme of 'Exposure'",
      "Paragraph 4: Compare tone and the poets' implied argument in each poem",
      "Conclusion: Consider which poem you find more affecting and why -- support this with evidence",
    ],
  },

  // 3. IGCSE: Two anthology poems (power theme)
  {
    id: "comp-igcse-power-theme",
    title: "Comparing Two Anthology Poems: Power Theme",
    yearGroup: "IGCSE",
    poem1: "Ozymandias",
    poem2: "My Last Duchess",
    comparisonTheme: "The nature of power, its limits, and its relationship to control",
    similarities: [
      "Both poems are spoken by or focus on a male figure who holds significant political or social power",
      "Both explore the relationship between power and the desire to control the image or legacy one leaves behind",
      "Both use irony to expose the self-deception of those in power",
      "Both use an unusual narrative frame (the traveller's account; the dramatic monologue) that distances the reader from the powerful figure",
      "Both suggest that power is fragile, temporary, or morally corrupting",
    ],
    differences: [
      "Ozymandias's power has already crumbled; the Duke's power is very much present and active during the poem",
      "Ozymandias is an historical (or legendary) figure presented third-hand; the Duke speaks directly to us",
      "Shelley critiques political tyranny through a temporal lens (decay over centuries); Browning critiques personal tyranny in the immediate moment",
      "Ozymandias is unaware of his own irony; the Duke is self-consciously performing -- yet equally blind to how he appears",
      "Shelley's poem is impersonal and cosmic in scale; Browning's is intimate and psychologically intense",
      "The sculptor's art saves or condemns Ozymandias; the Duke uses art to imprison and silence the Duchess",
    ],
    comparisonPhrases: [
      "Both Shelley and Browning use irony to expose ..., though the nature of that irony differs: ...",
      "While Ozymandias's power is shown to be already lost, the Duke's power is ..., which creates ...",
      "The role of art is central to both poems, but functions very differently: in 'Ozymandias' ..., whereas in 'My Last Duchess' ...",
      "Both poems use an unusual narrative frame to create ..., but ...",
      "A further parallel can be drawn in both poets' use of ..., though the effect is ...",
      "Ultimately, both poems argue that ..., but they reach this conclusion through different means: ...",
    ],
    essayPlanOutline: [
      "Introduction: Establish the shared theme of power; introduce both poets and their contexts briefly",
      "Paragraph 1: Compare how each poem's powerful figure is presented -- what kind of power do they hold?",
      "Paragraph 2: Compare the use of irony in each poem and what it reveals about the limits of power",
      "Paragraph 3: Compare the role of art (the ruined statue; the portrait) as a symbol of power and its failures",
      "Paragraph 4: Compare the narrative structures and how distance from the powerful figure shapes the reader's response",
      "Conclusion: Which poem makes the more devastating critique of power? Argue a view with evidence",
    ],
  },

  // 4. IGCSE: Two anthology poems (identity theme)
  {
    id: "comp-igcse-identity-theme",
    title: "Comparing Two Anthology Poems: Identity Theme",
    yearGroup: "IGCSE",
    poem1: "Checking Out Me History",
    poem2: "Half-Caste",
    comparisonTheme: "Identity, cultural heritage, and the politics of belonging",
    similarities: [
      "Both poems are written from the perspective of a speaker asserting a marginalised or hybrid identity",
      "Both use non-standard English spelling and dialect features as a political and cultural statement",
      "Both challenge dominant cultural narratives that have excluded or diminished the speaker's heritage",
      "Both use repetition and rhetorical questions to challenge the reader directly",
      "Both are performative in nature -- they are written to be heard aloud as much as read on the page",
    ],
    differences: [
      "'Checking Out Me History' is focused specifically on the erasure of Caribbean history from colonial education",
      "'Half-Caste' focuses on the cultural assumptions embedded in the phrase 'half-caste' and by extension mixed identity",
      "Agard's poem uses historical figures as positive models to reclaim; the speaker in 'Half-Caste' uses irony and absurdity",
      "The structural contrast in 'Checking Out Me History' (standard vs dialect stanzas) is formally central; 'Half-Caste' uses a consistent voice throughout",
      "Agard's poem ends in a declaration of self-knowledge; 'Half-Caste' ends by inviting the listener to return with their 'whole' self",
    ],
    comparisonPhrases: [
      "Both poems assert a cultural identity that has been marginalised, but they do so through different means: ...",
      "While Agard uses ... to reclaim historical figures, the speaker in 'Half-Caste' uses ... to expose ...",
      "The use of dialect in both poems is a political act: ..., though the effect in each poem is ...",
      "Both poems challenge the reader directly, but the nature of that challenge differs: ...",
      "A key structural difference can be seen in ..., which suggests ...",
      "Ultimately, both poems are concerned with ..., and their shared use of ... reflects ...",
    ],
    essayPlanOutline: [
      "Introduction: Introduce both poems and their shared concern with cultural identity and belonging",
      "Paragraph 1: Compare how each speaker's identity is presented and what or who has threatened it",
      "Paragraph 2: Compare the use of dialect and non-standard language as a formal and political choice",
      "Paragraph 3: Compare the use of repetition and direct address to challenge the reader",
      "Paragraph 4: Compare the poems' conclusions -- what does each speaker claim or reclaim by the end?",
      "Conclusion: What do both poems together reveal about the relationship between language, power, and identity?",
    ],
  },

  // 5. IGCSE: Studied poem vs unseen poem
  {
    id: "comp-igcse-studied-vs-unseen",
    title: "Comparing a Studied Anthology Poem with an Unseen Poem",
    yearGroup: "IGCSE",
    poem1: "Studied anthology poem",
    poem2: "Unseen poem",
    comparisonTheme: "Applying anthology knowledge to an unfamiliar text",
    similarities: [
      "Both poems will share a thematic connection established by the exam question",
      "Both can be analysed using the same toolkit of language and structure terms",
      "Both deserve equal analytical attention -- the unseen should not be neglected in favour of the studied poem",
      "Both offer opportunities to demonstrate awareness of how form shapes meaning",
    ],
    differences: [
      "The studied poem can be supported by contextual knowledge; the unseen poem must be analysed purely from the text",
      "Quotation from the studied poem will be precise; quotation from the unseen requires careful re-reading during the exam",
      "The studied poem's full range of themes is known; the unseen poem must be interpreted in the moment",
      "Students may feel more confident about the studied poem, but should allocate time equally to avoid imbalance",
    ],
    comparisonPhrases: [
      "Like the anthology poem, the unseen poem uses ... to convey ..., though it does so by ...",
      "Both poems share a concern with ...; however, while the studied poem ..., the unseen poem ...",
      "The unseen poem's use of ... mirrors the technique found in ..., suggesting ...",
      "Whereas [studied poem] uses context and biography to frame ..., the unseen poem relies entirely on ...",
      "A significant difference is that ..., which shapes the reader's response in contrasting ways: ...",
      "Despite the different contexts, both poets use ... to explore ...",
    ],
    essayPlanOutline: [
      "Introduction: Introduce both poems and the shared theme; state a clear comparative argument",
      "Paragraph 1: Analyse the studied poem's treatment of the theme with precise language analysis",
      "Paragraph 2: Analyse the unseen poem's treatment of the theme with precise language analysis",
      "Paragraph 3: Make a direct comparison of a key technique or structural feature in both poems",
      "Paragraph 4: Make a second direct comparison focusing on tone, form, or speaker perspective",
      "Conclusion: Offer a judgment about how the two poems together illuminate the shared theme",
    ],
  },

  // 6. IGCSE: Two poems from different clusters
  {
    id: "comp-igcse-cross-cluster",
    title: "Comparing Two Poems from Different Clusters",
    yearGroup: "IGCSE",
    poem1: "A war cluster poem (e.g., Dulce et Decorum Est)",
    poem2: "A power/identity cluster poem (e.g., Ozymandias)",
    comparisonTheme: "The relationship between power and destruction",
    similarities: [
      "Both poems engage with the destructive consequences of power when wielded without regard for human life",
      "Both poets use irony to expose the gap between self-proclaimed greatness and the reality of suffering",
      "Both poems use imagery of ruin, decay, or death to convey their central argument",
      "Both have a political dimension: they challenge the narratives that sustain unjust power",
      "Both are studied for their technical sophistication as well as their thematic richness",
    ],
    differences: [
      "The war poem is focused on immediate, bodily suffering; the power poem operates on a larger historical scale",
      "The war poem typically speaks from within the experience; the power poem observes from a distance",
      "The war poem's imagery is visceral and urgent; the power poem's imagery is symbolic and reflective",
      "The war poem challenges a specific historical event or ideology; the power poem makes a more universal philosophical claim",
      "The emotional register differs: anguish and accusation in the war poem; cold irony and vastness in the power poem",
    ],
    comparisonPhrases: [
      "Both poets use ... to argue that power is fundamentally ..., though their methods differ significantly: ...",
      "While [war poem] confronts the reader with ..., [power poem] creates its argument through ...",
      "The imagery of destruction in both poems serves a similar purpose -- to expose ... -- but the scale is ...",
      "Both poets are ultimately concerned with the abuse of power, yet ...",
      "A cross-cluster comparison reveals that ..., suggesting that these themes are not confined to any single period or context",
      "Despite belonging to different thematic clusters, both poems converge on the idea that ...",
    ],
    essayPlanOutline: [
      "Introduction: Introduce both poems and the cross-cluster connection; argue that the shared theme transcends their separate clusters",
      "Paragraph 1: Compare how each poem presents power and its consequences through specific language choices",
      "Paragraph 2: Compare the use of irony across both poems -- what does irony allow each poet to argue?",
      "Paragraph 3: Compare the imagery of ruin or death and what each poem's imagery reveals about its vision",
      "Paragraph 4: Compare perspective and scale -- the immediate versus the historical/universal",
      "Conclusion: Argue what the cross-cluster comparison reveals about the enduring relationship between power and destruction",
    ],
  },
];
