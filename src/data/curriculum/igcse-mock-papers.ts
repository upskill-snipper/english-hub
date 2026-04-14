export interface MockQuestion {
  id: string;
  questionNumber: string;
  questionText: string;
  marks: number;
  assessmentObjective: string;
  timeAllocation: string;
  markScheme: string[];
  exampleResponse: string;
}

export interface MockPaper {
  id: string;
  title: string;
  specCode: string;
  paperName: string;
  duration: string;
  totalMarks: number;
  textExtract?: string;
  instructions: string;
  questions: MockQuestion[];
}

// =============================================================================
// PAPER 1: IGCSE English Language -- Non-Fiction Reading
// Edexcel spec code 4EA1, Paper 1
// =============================================================================

const langPaper1Extract = `The following is an extract from a travel memoir written in the early twenty-first century.
The narrator describes arriving in a remote coastal village in northern Iceland after a long journey.

---

  The bus left me at a crossroads marked only by a rusted iron sign, its lettering long since
scoured away by salt winds. I stood there with my rucksack and watched the vehicle dwindle to
a red dot on the road, then disappear entirely behind a fold of volcanic hillside. The silence
that followed was so absolute it felt physical -- a pressure against the eardrums.

  It was already past nine in the evening, yet the sky held a pale, milky light that gave the
landscape a dreamlike quality. The mountains to the east were the colour of charcoal, streaked
with the last remnants of the winter's snow. Below them, the fjord lay motionless, a dark mirror
in which the clouds above were perfectly doubled. Nothing moved. I had been told the village was
a fifteen-minute walk north, but the track ahead rose steeply and the word "walk" seemed optimistic.

  I had come here, I reminded myself, for exactly this: the emptiness, the cold, the sense of
being genuinely far from anything familiar. Back home, quiet was a relative term -- the muted hum
of distant traffic, the neighbour's television bleeding through the wall. Here, quiet was its own
country, and I was a stranger in it. I pulled the straps of my rucksack tighter, turned north,
and began to climb. The gravel crunched under my boots with a sound that seemed, in that vast
stillness, almost embarrassingly loud.

  By the time the first lights of the village appeared -- a small cluster of yellow windows low
against the hillside -- my legs ached and the cold had worked its way inside my jacket. But I
felt something else too: a lightness, as though the distance I had put between myself and
everything I knew had, somehow, reduced rather than increased my sense of weight.

---`;

const langPaper1Questions: MockQuestion[] = [
  {
    id: "lp1-q1",
    questionNumber: "Question 1",
    questionText:
      "Read lines 1-8 (from 'The bus left me...' to '...seemed optimistic.').\n\n" +
      "List FOUR details from these lines that suggest the narrator feels isolated or alone.\n\n" +
      "You should use your own words as far as possible.",
    marks: 4,
    assessmentObjective: "AO1 -- Identify and interpret explicit and implicit information and ideas",
    timeAllocation: "Approximately 8 minutes",
    markScheme: [
      "Award 1 mark per valid detail, up to a maximum of 4 marks.",
      "The bus disappears / leaves the narrator behind (1)",
      "There is a rusted / damaged sign with no readable lettering (1)",
      "The silence is described as complete / total / overwhelming (1)",
      "The narrator is standing alone with only a rucksack (1)",
      "The landscape shows no signs of other people or activity (1)",
      "The path ahead is steep / challenging, suggesting a long walk alone (1)",
      "Do not accept direct quotation without demonstration of understanding.",
      "Accept any four valid points drawn from the specified lines."
    ],
    exampleResponse:
      "1. The bus drives away and vanishes, leaving the narrator entirely alone at the crossroads.\n" +
      "2. The silence is described as so complete it felt like a physical force, suggesting no human sounds.\n" +
      "3. The landscape shows no movement at all -- nothing living is visible.\n" +
      "4. The sign has lost its lettering, implying this is a forgotten or rarely visited place."
  },
  {
    id: "lp1-q2",
    questionNumber: "Question 2",
    questionText:
      "Read lines 9-17 (from 'I had come here...' to '...almost embarrassingly loud.').\n\n" +
      "How does the writer use language to convey the narrator's feelings about the silence and emptiness?\n\n" +
      "You should write about:\n" +
      "- the words and phrases the writer uses\n" +
      "- the effect of these choices on the reader.",
    marks: 8,
    assessmentObjective: "AO2 -- Explain, comment on and analyse how writers use language and structure",
    timeAllocation: "Approximately 15 minutes",
    markScheme: [
      "Band 4 (7-8 marks): Perceptive, detailed analysis. Apt and specific references. Convincing exploration of effect.",
      "Band 3 (5-6 marks): Clear and explained comments on language. Relevant references. Some analysis of effect.",
      "Band 2 (3-4 marks): Some comment on language features. References used but may be embedded. Limited analysis.",
      "Band 1 (1-2 marks): Simple identification of features. Mostly retrieval. Little or no analysis.",
      "Look for: 'quiet was a relative term' (contrast between home and Iceland); 'quiet was its own country' (personification/metaphor suggesting silence has a complete, separate existence); 'a stranger in it' (narrator as outsider to this silence); 'embarrassingly loud' (personification, hyperbole -- human presence feels like an intrusion); semantic field of isolation and unfamiliarity.",
      "Credit any other well-supported point."
    ],
    exampleResponse:
      "The writer uses an extended metaphor to explore the quality of silence: 'quiet was its own country, and I was a stranger in it.' By comparing silence to a country -- something vast, self-governing and foreign -- the writer conveys that this is not merely an absence of sound but a whole environment with its own rules. The word 'stranger' reinforces the narrator's sense of not belonging, of being an outsider even within emptiness itself. This creates a feeling of both wonder and vulnerability.\n\n" +
      "The phrase 'almost embarrassingly loud' is striking because the adverb 'embarrassingly' attributes a social emotion to a physical sound. This suggests the narrator feels as though the crunch of gravel is a kind of intrusion -- as if the landscape itself might disapprove of being disturbed. This personifies the silence, making it feel watchful and alive, which heightens the reader's sense of the narrator's smallness within the vast, indifferent landscape."
  },
  {
    id: "lp1-q3",
    questionNumber: "Question 3",
    questionText:
      "How does the writer structure the whole text to take the reader on a journey -- both physical and emotional?\n\n" +
      "You should write about:\n" +
      "- how the text is organised and sequenced\n" +
      "- how structural features create meaning or effect.",
    marks: 8,
    assessmentObjective: "AO2 -- Explain, comment on and analyse how writers use structure",
    timeAllocation: "Approximately 15 minutes",
    markScheme: [
      "Band 4 (7-8 marks): Perceptive discussion of structure. Specific references to whole text. Convincing analysis of how structure shapes meaning.",
      "Band 3 (5-6 marks): Clear discussion of structural choices. References drawn from across the text. Explained effects.",
      "Band 2 (3-4 marks): Some awareness of structure. May focus on one or two features. Limited range of references.",
      "Band 1 (1-2 marks): Simple or generalised comments on structure.",
      "Look for: opening with departure/abandonment (bus leaving) creates immediate isolation; shift from external description to internal reflection in paragraph 3; use of contrast (home vs Iceland) as structural pivot; ending with arrival at lights -- movement from darkness/cold to warmth; the emotional arc from dislocation to 'lightness'; short final sentence acting as a resolution; use of present-tense sense of immediacy.",
      "Credit any well-supported structural observation."
    ],
    exampleResponse:
      "The text is structured as a physical journey that mirrors an internal, emotional one. It opens with an act of departure -- the bus leaving -- which immediately establishes the narrator as isolated and moving forward without the option to turn back. This creates tension from the very first sentence.\n\n" +
      "As the extract progresses, the writer shifts from external description of the landscape to internal reflection. The third paragraph -- 'I had come here, I reminded myself, for exactly this' -- acts as a structural pivot. Up to this point, the narrator has observed the world around them; here, the focus turns inward, and the reader begins to understand the emotional motivation behind the journey.\n\n" +
      "The extract ends with a resolution: the narrator arrives, sees the lights of the village, and feels 'a lightness.' This mirrors the structure of a traditional journey narrative -- struggle followed by arrival -- but the writer subverts expectations by making the reward emotional rather than physical. The final long, reflective sentence slows the pace and invites the reader to share in the narrator's sense of calm, providing a satisfying contrast to the unsettled opening."
  },
  {
    id: "lp1-q4",
    questionNumber: "Question 4",
    questionText:
      "A student, having read this extract, said: 'The writer makes the experience of being alone in a remote place sound like something to be desired rather than feared.'\n\n" +
      "To what extent do you agree with this view?\n\n" +
      "You should write about:\n" +
      "- your own impressions of how the writer presents solitude\n" +
      "- how the writer uses language and structure to present these ideas\n" +
      "- how far you agree with the student's view.",
    marks: 20,
    assessmentObjective: "AO1 and AO2 -- Evaluate texts critically and support with textual evidence",
    timeAllocation: "Approximately 35 minutes",
    markScheme: [
      "Band 4 (16-20 marks): Perceptive and convincing evaluation. Detailed and apt references. Sophisticated exploration of how language and structure create meaning. Clearly stated and developed personal view.",
      "Band 3 (11-15 marks): Clear evaluation with developed personal view. Relevant references. Explained analysis of language/structure effects.",
      "Band 2 (6-10 marks): Some evaluation. Personal view present but undeveloped. Some relevant references. Limited analysis.",
      "Band 1 (1-5 marks): Simple response. Limited engagement with the student's view. Mostly retrieval.",
      "Look for: evidence FOR (desire for solitude -- narrator chose this; 'lightness' at end; contrast with crowded home life; language of wonder); evidence AGAINST (physical discomfort; 'stranger' suggests unease; silence as 'pressure'; the climb is difficult); nuanced responses that acknowledge both will score highest.",
      "Do not penalise disagreement with the student's view if well-argued and evidenced."
    ],
    exampleResponse:
      "I largely agree with the student's view. While the writer acknowledges the physical hardship and psychological strangeness of solitude, the overall presentation of being alone in a remote landscape is one of purposeful choice and ultimate reward.\n\n" +
      "The most direct evidence for this is the narrator's self-reminder in paragraph three: 'I had come here, I reminded myself, for exactly this.' The use of 'exactly' is emphatic -- this is not reluctant endurance but deliberate seeking. The writer reinforces this by contrasting Iceland's silence with the noise of home: 'the muted hum of distant traffic, the neighbour's television bleeding through the wall.' The word 'bleeding' has connotations of harm and intrusion, suggesting that urban noise is something to escape from. This makes the Icelandic emptiness seem like a cure rather than a punishment.\n\n" +
      "The ending further supports the student's view. Despite the physical discomfort -- 'my legs ached and the cold had worked its way inside my jacket' -- the narrator does not describe relief at reaching the village but rather a curious 'lightness.' This paradox -- that distance from the familiar reduces rather than increases the sense of weight -- presents solitude as something psychologically liberating. The word 'lightness' has connotations of freedom and release, suggesting solitude has done something positive.\n\n" +
      "However, the writer does not entirely romanticise the experience. The opening image -- standing alone at a crossroads with no legible sign -- carries unsettling associations of being lost. The silence is described as having 'a pressure against the eardrums,' which is a physical, slightly oppressive image. The narrator feels like 'a stranger' in the country of quiet, which suggests alienation as much as wonder. These details prevent the text from becoming purely celebratory and add a layer of honesty about the difficulty of solitude.\n\n" +
      "Overall, I agree with the student's view to a significant degree. The writer frames solitude as something consciously chosen and ultimately rewarding, even while honestly portraying its physical and emotional challenges. The emotional arc of the extract -- from isolation and unease to arrival and lightness -- ensures the reader finishes with a positive impression of being alone in a vast, quiet landscape."
  }
];

// =============================================================================
// PAPER 2: IGCSE English Language -- Writing
// Edexcel spec code 4EA1, Paper 2
// =============================================================================

const langPaper2Questions: MockQuestion[] = [
  {
    id: "lp2-q1",
    questionNumber: "Question 1",
    questionText:
      "EITHER\n\n" +
      "(a) Write a speech to be delivered to your school assembly with the title:\n\n" +
      "    'The best journeys are the ones that take you somewhere unexpected.'\n\n" +
      "OR\n\n" +
      "(b) Write a letter to a local newspaper in which you argue for or against the following view:\n\n" +
      "    'Young people today spend too much time looking at screens and not enough time experiencing the real world.'\n\n" +
      "---\n\n" +
      "Choose ONE task only. Write your answer clearly.\n\n" +
      "You will be assessed on:\n" +
      "- the quality and impact of your writing\n" +
      "- the accuracy of your spelling, punctuation and grammar.",
    marks: 40,
    assessmentObjective:
      "AO5 (24 marks) -- Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register. " +
      "AO6 (16 marks) -- Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
    timeAllocation: "Approximately 50 minutes (including planning time)",
    markScheme: [
      "AO5 -- Content and Organisation (24 marks):",
      "Band 4 (19-24): Communication is compelling and sophisticated. Extensive and inventive. Form, purpose and audience are managed with skill. Structural and organisational features are used to great effect.",
      "Band 3 (13-18): Communication is clear and consistent. Varied and engaging. Form, purpose and audience are mostly secure. A range of structural features used with intention.",
      "Band 2 (7-12): Communication is mostly clear. Some variety. Form and purpose are broadly appropriate. Some structural features present.",
      "Band 1 (1-6): Simple communication. Limited awareness of form or purpose. Basic structure.",
      "AO6 -- Technical Accuracy (16 marks):",
      "Band 4 (13-16): Wide range of punctuation and sentence structures used accurately and for effect. Extensive and ambitious vocabulary. Spelling virtually always correct.",
      "Band 3 (9-12): Varied vocabulary and sentence structures mostly used accurately. Punctuation mostly accurate. Spelling of complex words mostly correct.",
      "Band 2 (5-8): Some variety in vocabulary and sentence structures. Punctuation and spelling broadly accurate, with some errors.",
      "Band 1 (1-4): Simple vocabulary and sentence structures. Frequent errors in spelling and punctuation.",
      "For speech: credit rhetorical devices (rule of three, direct address, rhetorical questions, anaphora), appropriate register, clear argument or narrative arc.",
      "For letter: credit correct letter conventions (address, salutation, sign-off), persuasive techniques, clear stance."
    ],
    exampleResponse:
      "EXAMPLE SPEECH RESPONSE (a):\n\n" +
      "Ladies and gentlemen, I want to ask you something. When was the last time you got genuinely, hopelessly, wonderfully lost?\n\n" +
      "Not lost in the terrifying way -- not the 'I've missed the last bus and my phone is dead' kind of lost. I mean lost in the beautiful way. The kind of lost where you turn down a street you've never walked before and find yourself in a square with a market you didn't know existed, with a smell coming from somewhere that pulls you towards it before your brain has even had time to form a thought.\n\n" +
      "The best journeys, I believe, are exactly those: the ones where the destination surprises you. Where what you find is not what you were looking for but is, somehow, better.\n\n" +
      "We live in an age of the planned journey. Before we go anywhere, we have already been there -- on a screen, through a map, via a hundred photographs posted by people who want us to see a place exactly as they did. And there is nothing wrong with that. But something is lost when we arrive already knowing what to expect. The surprise -- that small, electric shock of discovery -- has been smoothed away.\n\n" +
      "I am not saying we should throw away our maps. I am saying that we should occasionally fold them up, put them in our pockets, and allow ourselves to turn left when we had planned to turn right. Because the world does not end at the edges of our itineraries. It continues. And the places it continues into are often the most interesting ones.\n\n" +
      "The unexpected journey teaches us things the planned one cannot. It teaches us to trust ourselves when we are uncertain. It teaches us to ask for help from strangers -- and to discover, most of the time, that strangers are willing to give it. It teaches us that being unsure of where we are is not the same as being lost.\n\n" +
      "So the next time you plan a journey -- whether it is across a country or simply to a new part of your own town -- leave a little room in the itinerary for the unplanned. For the detour. For the unexpected turning.\n\n" +
      "Because the best journeys, I promise you, are the ones that take you somewhere you never expected to go.\n\n" +
      "Thank you."
  },
  {
    id: "lp2-q2",
    questionNumber: "Question 2",
    questionText:
      "EITHER\n\n" +
      "(a) Write a short story that begins with the following sentence:\n\n" +
      "    'The key had been in the drawer for thirty years, and she had never once asked what it opened.'\n\n" +
      "OR\n\n" +
      "(b) Describe a place where time seems to stand still.\n\n" +
      "---\n\n" +
      "Choose ONE task only. Write your answer clearly.\n\n" +
      "You will be assessed on:\n" +
      "- the quality and impact of your writing\n" +
      "- the accuracy of your spelling, punctuation and grammar.",
    marks: 40,
    assessmentObjective:
      "AO5 (24 marks) -- Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register. " +
      "AO6 (16 marks) -- Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
    timeAllocation: "Approximately 40 minutes (including planning time)",
    markScheme: [
      "AO5 -- Content and Organisation (24 marks):",
      "Band 4 (19-24): Writing is compelling, crafted and controlled. Voice is distinctive. A range of structural techniques is used for deliberate effect (e.g. non-linear narrative, withholding information, shifts in time/perspective). Engages the reader throughout.",
      "Band 3 (13-18): Writing is engaging and mostly sustained. Structural choices are intentional. Some craft in vocabulary and technique. Reader interest is maintained.",
      "Band 2 (7-12): Some engaging moments. Narrative or descriptive framework is mostly present. Some deliberate technique, but inconsistently applied.",
      "Band 1 (1-6): Simple narrative or description. Limited control of form. Basic vocabulary.",
      "AO6 -- Technical Accuracy (16 marks): (as above)",
      "For story: credit control of narrative tension, characterisation, effective use of the opening sentence, resolution (or deliberate lack of one).",
      "For description: credit use of sensory detail, figurative language, structural variation (e.g. changes in sentence length and rhythm to create atmosphere).",
      "Do not reward length over quality. A concise, crafted response should score as highly as a longer but less controlled one."
    ],
    exampleResponse:
      "EXAMPLE NARRATIVE RESPONSE (a):\n\n" +
      "The key had been in the drawer for thirty years, and she had never once asked what it opened.\n\n" +
      "Not because she was not curious. She was. Every time she reached past it for the rubber bands or the spare batteries, her fingers would graze its cold brass surface and she would feel the question surface again, briefly, before she pressed it back down. Her mother had put it there. That was all she knew.\n\n" +
      "Her mother was gone now -- two months, a Thursday, a phone call at half past six in the morning. The drawer was one of dozens of things that still required sorting. She had been working through the house methodically, one room per weekend, moving things into boxes labelled KEEP, DONATE, UNCLEAR. The key lived in the UNCLEAR box now, wrapped in a piece of kitchen roll.\n\n" +
      "It was her husband who found the door. He was checking the roof space above the back bedroom -- something the estate agent had mentioned -- when his torch beam caught the edge of a frame behind a stack of old suitcases. Low, narrow, barely shoulder height. Padlocked.\n\n" +
      "She stood in the hatch with the key in her hand for a long time before she used it. Part of her wondered whether she was about to find something that would change what she knew about her mother. Whether thirty years of silence around a small brass key would turn out to be something she could not un-know.\n\n" +
      "The lock opened on the third try. The door swung inward. Inside: a shoebox. Inside the shoebox: a bundle of letters, a photograph of a woman she did not recognise, and a pressed flower, still faintly yellow after all this time.\n\n" +
      "She sat on the dusty floor of the roof space and began to read. Outside, the afternoon light changed. She did not notice.\n\n" +
      "Her mother, it turned out, had been a different person before she was her mother. Wasn't everyone."
  }
];

// =============================================================================
// PAPER 3: IGCSE English Literature -- Paper 1 (Poetry)
// Edexcel IGCSE Literature, Paper 1
// =============================================================================

const litPaper1Extract = `UNSEEN POEM FOR SECTION A\n\n` +
  `Read the following poem carefully before answering the questions.\n\n` +
  `'The Beekeeper'\n\n` +
  `My father kept bees in the orchard at the edge\n` +
  `of the property, where the garden gave up\n` +
  `being a garden and became instead\n` +
  `a half-wild tangle of apple and elder.\n\n` +
  `He wore no suit. He said they knew him.\n` +
  `On summer evenings I would watch from the fence\n` +
  `as he lifted each frame with his bare hands,\n` +
  `reading the comb like a page he had written himself.\n\n` +
  `I never asked to join him. There was something\n` +
  `in the way he stood there, not quite smiling,\n` +
  `talking low to what could not talk back,\n` +
  `that asked for distance rather than company.\n\n` +
  `Now the hives are empty. I stand where he stood.\n` +
  `The frames hang like sentences he left unfinished,\n` +
  `and I am still too far away to read them.\n\n` +
  `-- Original poem for assessment purposes`;

const litPaper1Questions: MockQuestion[] = [
  {
    id: "llp1-q1",
    questionNumber: "Question 1",
    questionText:
      "SECTION A -- UNSEEN POETRY\n\n" +
      "Read the poem 'The Beekeeper' printed on the insert.\n\n" +
      "How does the poet present the relationship between the speaker and their father?\n\n" +
      "You should write about:\n" +
      "- what the speaker says about their father and their relationship\n" +
      "- how the poet uses language, structure and form to present this relationship\n" +
      "- the effects created for the reader.",
    marks: 30,
    assessmentObjective:
      "AO1 -- Respond to texts in ways that are informed and personal, referring to details from the text. " +
      "AO2 -- Understand how writers use language, structure and form to create effects.",
    timeAllocation: "Approximately 45 minutes",
    markScheme: [
      "Band 4 (25-30 marks): A convincing, insightful response. Perceptive personal response that is well-grounded in the text. Sophisticated analysis of language, structure and form. Develops a coherent line of argument. Apt, embedded quotation.",
      "Band 3 (17-24 marks): A developed, explained response. Thoughtful personal engagement. Clear analysis of language, structure and form with explained effects. Relevant references.",
      "Band 2 (9-16 marks): A mostly relevant response. Some personal engagement. Some comment on language/form with limited analysis. References used but may be listed.",
      "Band 1 (1-8 marks): A simple response. Surface reading. Mostly retrieval. Limited reference to language.",
      "Look for: the emotional distance between speaker and father ('asked for distance rather than company'); the father's self-sufficiency ('He said they knew him'); the intimacy with bees vs distance from child (irony); 'reading the comb like a page he had written himself' -- metaphor suggesting private inner world; the shift to present tense after the father's death; 'frames hang like sentences he left unfinished' -- extended metaphor of communication/silence; the final line reuses 'too far away to read' -- death has not closed the distance; form: four quatrains, regular but unrhymed (suggesting order that is slightly incomplete); the enjambment across stanzas 1-2 mirrors the way the relationship extends but never quite connects.",
      "Credit any well-supported observation not listed here."
    ],
    exampleResponse:
      "The poem presents a relationship characterised by distance and incompleteness -- a father and child who occupy the same space but cannot quite reach each other. This emotional gap is established from the opening stanza, where the orchard is described as a place 'where the garden gave up / being a garden' -- a place at the edge of things, half-wild, existing outside the domestic world. By placing the father in this liminal space, the poet immediately suggests that he operates in a world the speaker cannot easily enter.\n\n" +
      "The father's relationship with the bees is contrasted with his relationship with his child. 'He said they knew him' is quietly revealing: the father attributes to the bees an understanding that the poem implies the child was never offered. He talks 'low to what could not talk back' -- a striking image that suggests the father found it easier to communicate with creatures incapable of response than to connect with a child who was. This is not presented as cruelty but as something closer to sadness, a private man who retreated to where he felt understood.\n\n" +
      "The central metaphor of reading -- 'reading the comb like a page he had written himself' -- extends throughout the poem and gives it much of its power. The comb is compared to a personal text, something authored and therefore deeply individual. The speaker watches but cannot read it. In the final stanza, after the father's death, the empty frames 'hang like sentences he left unfinished' -- the metaphor of text continues, but now it is incomplete, abandoned. The final line -- 'I am still too far away to read them' -- returns to this metaphor with devastating effect. Death has not brought the speaker closer to understanding the father; the distance that existed in life persists beyond it.\n\n" +
      "Structurally, the poem divides clearly into two halves: three stanzas of memory and one stanza of the present. The shift to the present tense in the final stanza -- 'Now the hives are empty. I stand where he stood' -- enacts the inheritance the poem describes. The speaker has taken the father's physical position but cannot take his knowledge or his ease. The short, declarative sentences of this final stanza slow the poem's pace, giving the reader time to feel the weight of absence."
  },
  {
    id: "llp1-q2",
    questionNumber: "Question 2",
    questionText:
      "SECTION B -- STUDIED POETRY\n\n" +
      "Choose ONE poem from the Edexcel IGCSE Poetry Anthology that explores the theme of memory or the past.\n\n" +
      "How does the poet explore this theme?\n\n" +
      "You should write about:\n" +
      "- what the poem says about memory or the past\n" +
      "- how the poet uses language, structure and form to explore these ideas\n" +
      "- your personal response to the poem.\n\n" +
      "Name the poem and poet in your opening paragraph.",
    marks: 30,
    assessmentObjective:
      "AO1 -- Respond to texts in ways that are informed and personal, citing relevant evidence. " +
      "AO2 -- Understand how writers use language, structure and form to create effects.",
    timeAllocation: "Approximately 45 minutes",
    markScheme: [
      "Band 4 (25-30 marks): Convincing, insightful personal response. Perceptive analysis of language, structure and form. Explores complexity and ambiguity. Apt, embedded references.",
      "Band 3 (17-24 marks): Developed, explained personal response. Clear analysis with explained effects. Range of textual references.",
      "Band 2 (9-16 marks): Mostly relevant response with some personal engagement. Some comment on language. References used but may be listed rather than analysed.",
      "Band 1 (1-8 marks): Simple response, mostly narrative or paraphrase. Limited analysis.",
      "Suitable poems include: 'Half-past Two' (U.A. Fanthorpe), 'Piano' (D.H. Lawrence), 'The Blackbird of Glanmore' (Seamus Heaney), 'On the Train' (Gillian Clarke), or any anthology poem treating memory.",
      "Award marks for quality of response, not for which poem is chosen.",
      "Look for: identification of what the poem communicates about memory (fragility, comfort, pain, distortion); analysis of specific techniques (imagery, structure, time shifts, form); personal engagement that is grounded in the text rather than generalised."
    ],
    exampleResponse:
      "In 'Half-past Two' by U.A. Fanthorpe, the speaker explores childhood memory through the perspective of a young boy who, having been kept behind in school, enters a timeless state where normal experience ceases to apply. The poem uses the theme of memory to ask a profound question: what does a child remember when they do not yet have the language to organise what they feel?\n\n" +
      "Fanthorpe presents memory as inseparable from language. The boy's world is structured by named times -- 'Getting-up-time, LateTea, / Timeformykisstime' -- a series of compound nouns that the poet invents to show how the child's experience is not yet divided by conventional clock-time but by events and emotions. When the teacher leaves him alone with no instruction about when to go, he falls into 'the long timepieces of time.' This paradoxical phrase is wonderfully strange: time cannot be measured in pieces of itself, but the child does not know that. For him, time becomes elastic, infinite, and oddly peaceful.\n\n" +
      "The poem's most powerful insight is that this unstructured, forgotten time is not traumatic but beautiful. The boy slips into 'the still / Center of the still' -- a moment of genuine peace that adult life, with its obsessive timekeeping, has closed off. The repetition of 'still' emphasises this double meaning: stillness as calm, and stillness as the absence of movement or change. Memory, Fanthorpe implies, preserves these moments precisely because they existed outside time's normal flow.\n\n" +
      "I find the final stanza particularly moving. The speaker reflects that the boy was 'quite forgotten' -- not cruelly, just inadvertently -- and that in being forgotten he found something unrepeatable. Fanthorpe uses form to reinforce this: the short stanzas give the poem a fragmented, childlike quality, as though we are receiving the memory in pieces rather than as a continuous narrative. This makes the poem feel like memory itself -- partial, impressionistic, and yet strangely vivid."
  }
];

// =============================================================================
// PAPER 4: IGCSE English Literature -- Paper 2 (Prose and Drama)
// Edexcel IGCSE Literature, Paper 2
// =============================================================================

const litPaper2Extract = `SECTION A -- PROSE\n\n` +
  `The following extract is from Chapter 3 of 'Of Mice and Men' by John Steinbeck.\n` +
  `George and Lennie have just arrived at the ranch. Curley's wife has appeared in the doorway.\n\n` +
  `[Extract begins after Curley's wife has left]\n\n` +
  `"Jesus, what a tramp," said George decisively. "So that's what Curley picks for a wife."\n` +
  `"She's purty," said Lennie defensively.\n` +
  `"Yeah, and she's sure hidin' it. Curley got his work ahead of him. Ranch with a bunch of guys on it ain't no place for a girl, specially like her."\n` +
  `Lennie still stared at the doorway where she had been. "Gosh, she was purty." He smiled admiringly.\n` +
  `George looked sharply at him. "Listen to me, you crazy bastard," he said fiercely. "Don't you even take a look at that bitch. I don't care what she says and what she does. I seen 'em poison before, but I never seen no piece of jail bait worse than her. You leave her be."\n` +
  `Lennie tried to divert his attention. "If that bull come in," he said, "we could take him and cut him in two halves."\n` +
  `"Never you mind," said George. "You remember where we're sleepin'?"\n` +
  `"Sure," said Lennie. "In them bunks in there. George -- if you an' me had a ranch of our own -- "\n` +
  `"Awright. Some other time."\n` +
  `"But just s'pose -- "\n` +
  `George snapped, "Whatever we ain't got, that's what you want. God Almighty, if I was alone I could live so easy. I could go get a job an' work, an' no trouble. No mess at all, and when the end of the month come I could take my fifty bucks and go into town and get whatever I want. Why, I could stay in a flop house. I could eat any place I want, hotel or any place, and order any damn thing I could think of. And I could do all that every single month.""`+
  `\n\n[End of extract]`;

const litPaper2Questions: MockQuestion[] = [
  {
    id: "llp2-q1",
    questionNumber: "Question 1",
    questionText:
      "SECTION A -- PROSE: Of Mice and Men\n\n" +
      "Read the extract from 'Of Mice and Men' printed on the insert.\n\n" +
      "How does Steinbeck present the relationship between George and Lennie in this extract?\n\n" +
      "Write about:\n" +
      "- what happens between George and Lennie in this extract\n" +
      "- how Steinbeck uses language to present their relationship here and in the novel as a whole.",
    marks: 30,
    assessmentObjective:
      "AO1 -- Respond to texts with insight, referring to relevant details. " +
      "AO2 -- Understand how writers use language and structure for effect. " +
      "AO3 -- Relate texts to their social, cultural and historical contexts.",
    timeAllocation: "Approximately 45 minutes",
    markScheme: [
      "Band 4 (25-30 marks): Convincing, perceptive response. Insightful analysis of language. Secure contextual understanding woven naturally into the response. Confident movement between extract and wider novel.",
      "Band 3 (17-24 marks): Developed, explained response. Clear analysis of language with explained effects. Relevant contextual references. Movement between extract and novel present.",
      "Band 2 (9-16 marks): Mostly relevant. Some comment on language. Some contextual awareness. Focus may be mainly on extract.",
      "Band 1 (1-8 marks): Simple response. Mostly narrative or paraphrase. Limited analysis or context.",
      "Look for: the tension between George's harshness and his protectiveness ('crazy bastard' as term of frustration mixed with genuine fear for Lennie); Lennie's vulnerability and innocence ('She's purty'); George's fantasy of freedom ('I could live so easy') -- note this is a recurring speech in the novel, suggesting George has performed his frustration before, perhaps as a way of processing it; George's immediate pivot to practical instruction ('You remember where we're sleepin'?') showing his care overrides his frustration; context: Great Depression, itinerant workers, the dream as survival mechanism; Curley's wife as a threat specific to Lennie's nature; the way this extract foreshadows the novel's ending.",
      "Credit any contextually grounded, well-evidenced point."
    ],
    exampleResponse:
      "In this extract, Steinbeck presents George and Lennie's relationship as one built on a fundamental tension between frustration and deep, protective love. George's language towards Lennie is harsh -- 'you crazy bastard,' 'Never you mind' -- yet the harshness functions not as cruelty but as a form of care. George's warning about Curley's wife is framed as an instruction, almost a command, because he knows that Lennie cannot fully understand danger until it is already upon him. The force of George's language is proportional to the size of his fear.\n\n" +
      "Steinbeck uses the repeated description of Curley's wife as 'purty' to highlight the difference between how George and Lennie see the world. For Lennie, prettiness is an uncomplicated, admirable thing -- he has no capacity for social calculation, no understanding of what Curley's possessive jealousy might mean, no awareness of his own dangerous strength. For George, the wife's attractiveness is immediately and specifically a threat. His phrase 'jail bait' shows he has already run through the legal and social consequences of Lennie's possible actions. Where Lennie sees beauty, George sees catastrophe in waiting.\n\n" +
      "The passage in which George imagines his life without Lennie is among the most revealing in the novel. On the surface it reads as an outburst of self-pity: George catalogues the freedoms he would have -- the fifty dollars, the hotel, 'any damn thing I could think of.' But Steinbeck includes this speech more than once in the novel, and the repetition matters. It begins to feel less like a genuine expression of desire and more like a ritual -- a way George has found of acknowledging the burden of his situation without abandoning it. He does not actually leave. He never has.\n\n" +
      "The historical context of the Great Depression is crucial here. Steinbeck's America is one in which the freedoms George describes -- a steady wage, a room, a choice of meal -- are already fantasies for most itinerant workers. That George frames them as what he could have if not for Lennie is both honest and ironic: in this world, even the uncomplicated life he imagines is barely achievable. Their shared dream of the farm serves a similar function -- it is not entirely realistic, but it is necessary. For both men, the dream is what makes the present bearable."
  },
  {
    id: "llp2-q2",
    questionNumber: "Question 2",
    questionText:
      "SECTION B -- DRAMA\n\n" +
      "Answer ONE of the following questions. Write the letter of the question you are answering at the start of your response.\n\n" +
      "(a) AN INSPECTOR CALLS by J.B. Priestley\n\n" +
      "    How does Priestley present the theme of responsibility in 'An Inspector Calls'?\n\n" +
      "    Write about:\n" +
      "    - how characters respond to the Inspector's revelations about Eva Smith\n" +
      "    - how Priestley uses dramatic techniques to explore ideas about responsibility.\n\n" +
      "    OR\n\n" +
      "(b) MACBETH by William Shakespeare\n\n" +
      "    How does Shakespeare present the relationship between Macbeth and Lady Macbeth?\n\n" +
      "    Write about:\n" +
      "    - how the relationship changes at different points in the play\n" +
      "    - how Shakespeare uses language and dramatic technique to show this relationship.",
    marks: 30,
    assessmentObjective:
      "AO1 -- Respond to texts with insight, citing relevant evidence. " +
      "AO2 -- Understand how writers use language, structure and form for effect. " +
      "AO3 -- Relate texts to their social, cultural and historical contexts.",
    timeAllocation: "Approximately 45 minutes",
    markScheme: [
      "Band 4 (25-30 marks): Convincing, perceptive response with sophisticated analysis. Secure contextual understanding integrated naturally. Confident range of textual reference.",
      "Band 3 (17-24 marks): Developed, explained response. Clear analysis with explained effects. Relevant contextual understanding. Range of references.",
      "Band 2 (9-16 marks): Mostly relevant response. Some language analysis. Some contextual awareness.",
      "Band 1 (1-8 marks): Simple response. Mostly narrative or paraphrase. Limited analysis.",
      "AN INSPECTOR CALLS -- Look for: Birling's refusal to accept responsibility vs Sheila and Eric's genuine contrition; the Inspector as mouthpiece for socialist responsibility; 'We are members of one body' speech; dramatic irony of Birling's capitalist speeches (audience knows 1945 context); the generational divide; the cyclical ending (another Inspector may call); the use of the stage set as symbol (the comfortable, enclosed house opened up); Eva Smith as Every Woman of the working class.",
      "MACBETH -- Look for: early balance/partnership ('my dearest partner of greatness'); Lady Macbeth's initial dominance ('Was the hope drunk wherein you dressed yourself?'); the murder as the last act of true partnership; the divergence after -- Macbeth acts alone (Banquo, the Macduff family), Lady Macbeth is excluded; the sleepwalking scene as Lady Macbeth's private collapse; Macbeth's response to her death ('She should have died hereafter'); structural shift from her being stronger in Act 1 to his being indifferent in Act 5; context: Jacobean gender expectations; the 'unnatural' woman who seeks masculine power.",
      "Award marks on quality and insight, not on which option is chosen."
    ],
    exampleResponse:
      "EXAMPLE RESPONSE (a) -- AN INSPECTOR CALLS:\n\n" +
      "Priestley presents responsibility as the central moral challenge of the play, using the figure of Inspector Goole to force each member of the Birling family to confront their role in Eva Smith's death. The play's power lies in Priestley's insistence that responsibility cannot be divided or diminished: each character's action was part of a chain, and the chain holds them all.\n\n" +
      "Arthur Birling represents the refusal of responsibility most fully. His response to the Inspector's revelations is consistently one of deflection -- he dismisses his dismissal of Eva Smith as sound business practice, and when the Inspector's credentials are called into question at the end of the play, he seizes on this as a way to escape moral reckoning entirely. His words -- 'the whole story will have to be investigated properly' -- reveal that for him, responsibility is a legal and social concept, not a moral one. If no court condemns him, he is not guilty.\n\n" +
      "Sheila and Eric represent the opposite response. Their contrition is genuine and, crucially, it survives the revelation that the Inspector may not have been real. Sheila's line -- 'I know I'm to blame -- and I'm ashamed of it' -- stands as the moral centre of the play. She understands that the truth of what she did to Eva Smith is not altered by the truth or falsity of the man who revealed it. Priestley uses this distinction to argue that genuine moral responsibility is internal, not externally enforced.\n\n" +
      "The Inspector's final speech is a direct statement of Priestley's socialist thesis: 'We are members of one body. We are responsible for each other.' Written in 1945, the play speaks to an audience who had experienced the collective suffering of two world wars. Priestley implies that the Birlings' individualism -- their belief that they owe nothing to those below them in the social hierarchy -- is not merely morally wrong but actively dangerous. The ending, with the phone call announcing a real inspector's arrival, is Priestley's warning: if we fail to learn from the past, we will be forced to relive it."
  }
];

// =============================================================================
// ASSEMBLED MOCK PAPERS
// =============================================================================

export const igcseMockPapers: MockPaper[] = [
  {
    id: "igcse-lang-p1-mock",
    title: "IGCSE English Language Paper 1 Mock",
    specCode: "4EA1/01",
    paperName: "Non-Fiction Texts and Transactional Writing",
    duration: "1 hour 45 minutes",
    totalMarks: 40,
    textExtract: langPaper1Extract,
    instructions:
      "Answer ALL questions in Section A.\n" +
      "Read the text extract carefully before attempting any question.\n" +
      "The marks for each question are shown in brackets.\n" +
      "Use the marks and time guidance to help you allocate your time.\n" +
      "Write in full sentences unless the question asks for a list.\n" +
      "All answers must be based on the text extract provided.\n" +
      "Recommended timings: Q1 (8 min), Q2 (15 min), Q3 (15 min), Q4 (35 min). Allow 10 minutes for reading.\n" +
      "Total marks available: 40. Note: the full Edexcel paper is 50 marks; this mock covers the reading section.",
    questions: langPaper1Questions
  },
  {
    id: "igcse-lang-p2-mock",
    title: "IGCSE English Language Paper 2 Mock",
    specCode: "4EA1/02",
    paperName: "Poetry and Prose Texts and Transactional Writing",
    duration: "1 hour 30 minutes",
    totalMarks: 80,
    instructions:
      "Answer BOTH questions.\n" +
      "For each question, choose ONE of the two options (a) or (b).\n" +
      "Write the letter of the option you have chosen at the start of your answer.\n" +
      "You will be assessed on the quality and impact of your writing (AO5) and on the accuracy of your spelling, punctuation and grammar (AO6).\n" +
      "Plan your answers before you write. You may wish to use the blank pages in this booklet.\n" +
      "Planning time is included in the timings shown for each question.\n" +
      "Q1 is worth 40 marks (24 AO5 + 16 AO6). Recommended time: 50 minutes.\n" +
      "Q2 is worth 40 marks (24 AO5 + 16 AO6). Recommended time: 40 minutes.\n" +
      "Total marks available: 80.",
    questions: langPaper2Questions
  },
  {
    id: "igcse-lit-p1-mock",
    title: "IGCSE English Literature Paper 1 Mock",
    specCode: "4ET1/01",
    paperName: "Poetry (Unseen and Studied)",
    duration: "1 hour 30 minutes",
    totalMarks: 60,
    textExtract: litPaper1Extract,
    instructions:
      "Answer BOTH questions.\n" +
      "Section A (Question 1): Unseen Poetry. Read the poem on the insert carefully before answering.\n" +
      "Section B (Question 2): Studied Poetry. Choose ONE poem from the anthology you have studied.\n" +
      "Both questions are worth 30 marks.\n" +
      "Spend approximately 45 minutes on each question, including reading and planning time.\n" +
      "Marks are awarded for: personal response (AO1), analysis of language, structure and form (AO2), and contextual understanding (AO3).\n" +
      "You are allowed to use your annotated poetry anthology for Section B ONLY (if your centre permits).\n" +
      "Write in full, continuous prose. Do not write in bullet points.\n" +
      "Total marks available: 60.",
    questions: litPaper1Questions
  },
  {
    id: "igcse-lit-p2-mock",
    title: "IGCSE English Literature Paper 2 Mock",
    specCode: "4ET1/02",
    paperName: "Prose and Drama",
    duration: "1 hour 30 minutes",
    totalMarks: 60,
    textExtract: litPaper2Extract,
    instructions:
      "Answer BOTH questions.\n" +
      "Section A (Question 1): Prose. Answer the question on 'Of Mice and Men' by John Steinbeck.\n" +
      "Read the extract printed on the insert carefully before answering. You must refer to both the extract and the novel as a whole in your answer.\n" +
      "Section B (Question 2): Drama. Choose ONE of the following options:\n" +
      "  (a) An Inspector Calls by J.B. Priestley\n" +
      "  (b) Macbeth by William Shakespeare\n" +
      "Write the letter of the option you have chosen at the start of your Section B answer.\n" +
      "Both questions are worth 30 marks.\n" +
      "Spend approximately 45 minutes on each question.\n" +
      "Marks are awarded for: personal response (AO1), analysis of language and dramatic technique (AO2), and contextual understanding (AO3).\n" +
      "Write in full, continuous prose.\n" +
      "Total marks available: 60.",
    questions: litPaper2Questions
  }
];

export default igcseMockPapers;
