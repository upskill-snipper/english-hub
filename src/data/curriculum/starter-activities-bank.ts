// ─────────────────────────────────────────────────────────────────
// Curriculum-Aligned Starter Activities Bank
// 60 activities: 20 x Year 7, 20 x Year 8, 20 x Year 9
// ─────────────────────────────────────────────────────────────────

export interface CurriculumStarterActivity {
  id: string
  title: string
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9'
  termUnit: string
  duration: number // minutes (5-8)
  instructions: string
  resources: string[]
  differentiation: {
    support: string
    core: string
    stretch: string
  }
  linkedObjectives: string[]
  activityType: string
}

export const curriculumStarterActivities: CurriculumStarterActivity[] = [
  // ══════════════════════════════════════════════════════════════
  //  YEAR 7 STARTERS (20)
  // ══════════════════════════════════════════════════════════════

  // --- Vocabulary Challenges ---
  {
    id: 'y7-vocab-1',
    title: 'Tier 2 Vocabulary Relay',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Introduction to Literary Analysis',
    duration: 5,
    instructions:
      'Display 8 Tier 2 words on the board (e.g. ominous, reluctant, vivid, elated, sombre, defiant, tranquil, bewildered). Students have 3 minutes to write a definition and use each word in a sentence. Share best sentences with a partner.',
    resources: ['Tier 2 word list projected on board', 'Mini whiteboards'],
    differentiation: {
      support: 'Provide word bank with definitions; students match and write one sentence each.',
      core: 'Write definitions from memory and compose original sentences.',
      stretch: 'Use three of the words in a single cohesive paragraph about a character.',
    },
    linkedObjectives: [
      'Develop ambitious vocabulary for written and spoken responses',
      'Understand and use Tier 2 academic vocabulary in context',
    ],
    activityType: 'Vocabulary Challenge',
  },
  {
    id: 'y7-vocab-2',
    title: 'Word Origins Detective',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Introduction to Literary Analysis',
    duration: 6,
    instructions:
      'Give students 5 words with Latin or Greek roots (e.g. benevolent, malicious, omniscient, protagonist, dialogue). Students guess the root meaning, then check with a partner. Discuss how understanding roots helps decode unfamiliar words.',
    resources: ['Etymology cards or projected list', 'Root meaning reference sheet'],
    differentiation: {
      support: 'Provide root meanings on a separate sheet; students match roots to words.',
      core: 'Predict root meanings before checking, then generate one new word per root.',
      stretch: 'Create a word web showing how one root spawns multiple English words.',
    },
    linkedObjectives: [
      'Use knowledge of word roots and etymology to infer meaning',
      'Expand vocabulary through morphological awareness',
    ],
    activityType: 'Vocabulary Challenge',
  },
  {
    id: 'y7-vocab-3',
    title: 'Connotation Spectrum',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Narrative and Descriptive Writing',
    duration: 5,
    instructions:
      'Present 5 synonym groups (e.g. said/whispered/bellowed/muttered/declared). Students rank each group from most negative to most positive connotation on a spectrum line. Discuss how word choice shapes reader response.',
    resources: ['Synonym group cards', 'Spectrum line template on whiteboard'],
    differentiation: {
      support: 'Work with 3 synonym groups and pre-labelled positive/negative ends.',
      core: 'Rank all 5 groups and justify one placement in writing.',
      stretch: 'Write two contrasting sentences using words from opposite ends of the same spectrum.',
    },
    linkedObjectives: [
      'Analyse how writers use word choice to create effects',
      'Understand connotation and denotation in literary texts',
    ],
    activityType: 'Vocabulary Challenge',
  },

  // --- Quote Matching ---
  {
    id: 'y7-quote-1',
    title: 'Quote-Character Match Up',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Novel Study',
    duration: 6,
    instructions:
      'Display 6 quotations from the class novel on one side and 6 character names on the other. Students draw lines to match each quote to the correct character, then select one quote and write a sentence explaining what it reveals about that character.',
    resources: ['Projected quotation-character grid', 'Exercise books'],
    differentiation: {
      support: 'Provide page references alongside quotations to aid recall.',
      core: 'Match independently and write analytical sentences for two quotations.',
      stretch: 'Explain how two different quotations reveal a change in a single character.',
    },
    linkedObjectives: [
      'Select and use textual evidence to support points',
      'Understand characterisation through dialogue and description',
    ],
    activityType: 'Quote Matching',
  },
  {
    id: 'y7-quote-2',
    title: 'Theme to Quote Sprint',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Poetry Introduction',
    duration: 5,
    instructions:
      'Show 4 theme words on the board (e.g. nature, loss, identity, conflict). Students race to write down one quotation from any studied text that links to each theme. First table with all four correct wins.',
    resources: ['Theme word cards', 'Timer projected on screen'],
    differentiation: {
      support: 'Provide a quotation bank; students select and categorise.',
      core: 'Recall quotations independently and link to themes.',
      stretch: 'For one theme, provide two quotations from different texts and compare.',
    },
    linkedObjectives: [
      'Identify and track themes across a range of texts',
      'Select relevant quotations to support thematic analysis',
    ],
    activityType: 'Quote Matching',
  },

  // --- Character Hot-Seating ---
  {
    id: 'y7-hotseat-1',
    title: 'Character Hot Seat: Motivation',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Novel Study',
    duration: 7,
    instructions:
      'One student sits in the hot seat as a character from the class novel. The rest of the class prepares 3 questions each about the character\'s motivations. The hot-seated student answers in character for 3 minutes. Class then discusses whether the answers were consistent with textual evidence.',
    resources: ['Hot seat chair at front', 'Character profile notes', 'Question prompt cards'],
    differentiation: {
      support: 'Provide question stems (e.g. "Why did you...?", "How did you feel when...?").',
      core: 'Generate original questions and evaluate the quality of answers given.',
      stretch: 'Hot-seat as the character and justify every answer with a textual reference.',
    },
    linkedObjectives: [
      'Infer characters\' feelings, thoughts and motives from their actions',
      'Develop empathy and understanding of character perspective',
    ],
    activityType: 'Character Hot-Seating',
  },
  {
    id: 'y7-hotseat-2',
    title: 'Character Hot Seat: Moral Dilemma',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Drama and Performance',
    duration: 8,
    instructions:
      'Present a moral dilemma related to the studied text. Two students hot-seat as two characters with opposing views. Class votes on who made the more convincing argument. Discuss what textual evidence supports each position.',
    resources: ['Dilemma scenario card', 'Character perspective prompt sheets'],
    differentiation: {
      support: 'Provide scripted opening statements for each character.',
      core: 'Improvise responses in character using textual knowledge.',
      stretch: 'Chair the debate and summarise both arguments with textual references.',
    },
    linkedObjectives: [
      'Explore how different characters respond to moral and ethical issues',
      'Use speaking and listening skills to present and defend a viewpoint',
    ],
    activityType: 'Character Hot-Seating',
  },

  // --- Word Class Sorting ---
  {
    id: 'y7-wordclass-1',
    title: 'Word Class Speed Sort',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Grammar and Language Foundations',
    duration: 5,
    instructions:
      'Give each table a set of 20 word cards. Students sort them into four columns: nouns, verbs, adjectives, adverbs. Time the activity (3 minutes). Review as a class, discussing any words that could belong to more than one class depending on context.',
    resources: ['Word card sets (20 per table)', 'Sorting grid template', 'Timer'],
    differentiation: {
      support: 'Colour-code the cards by word class; students sort within colour groups.',
      core: 'Sort all 20 words and identify two that can be more than one word class.',
      stretch: 'Write a sentence for each dual-class word showing both possible uses.',
    },
    linkedObjectives: [
      'Identify and classify word classes accurately',
      'Understand that some words function as different classes in different contexts',
    ],
    activityType: 'Word Class Sorting',
  },
  {
    id: 'y7-wordclass-2',
    title: 'Extract and Classify',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Narrative and Descriptive Writing',
    duration: 6,
    instructions:
      'Display a short literary extract (4-5 sentences). Students identify and list all adjectives and verbs in the passage. Then discuss: which word class does the writer rely on most, and what effect does this create?',
    resources: ['Projected literary extract', 'Two-column recording sheet'],
    differentiation: {
      support: 'Underline the adjectives and verbs in advance; students classify them.',
      core: 'Identify word classes independently and comment on writer\'s choices.',
      stretch: 'Rewrite the extract replacing all adjectives with more ambitious alternatives and evaluate the effect.',
    },
    linkedObjectives: [
      'Analyse how writers use word classes to create effects',
      'Develop metalinguistic awareness when reading and writing',
    ],
    activityType: 'Word Class Sorting',
  },

  // --- Inference Puzzles ---
  {
    id: 'y7-inference-1',
    title: 'What Happened Here?',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Introduction to Literary Analysis',
    duration: 6,
    instructions:
      'Show students a short descriptive paragraph with no explicit explanation of events (e.g. a description of a room in disarray). Students write 3 inferences about what happened, supporting each with a specific detail from the text. Share and compare with a partner.',
    resources: ['Printed or projected mystery paragraph', 'Inference recording frame'],
    differentiation: {
      support: 'Provide sentence starters: "I can infer that... because the text says..."',
      core: 'Write three independent inferences with textual evidence.',
      stretch: 'Rank inferences by likelihood and explain which textual clues are strongest.',
    },
    linkedObjectives: [
      'Make inferences and refer to evidence in the text',
      'Distinguish between explicit information and implied meaning',
    ],
    activityType: 'Inference Puzzle',
  },
  {
    id: 'y7-inference-2',
    title: 'Character Clue Cards',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Novel Study',
    duration: 6,
    instructions:
      'Hand out cards with 4 short textual clues about a character (actions, dialogue, appearance, others\' reactions). Students infer the character\'s personality traits and emotions. Write a PEE paragraph using one clue as evidence.',
    resources: ['Character clue cards (one set per pair)', 'PEE paragraph frame'],
    differentiation: {
      support: 'Provide a trait word bank (e.g. anxious, confident, secretive) to choose from.',
      core: 'Infer traits independently and write a PEE paragraph.',
      stretch: 'Infer how the character might change later in the story, justifying with clues.',
    },
    linkedObjectives: [
      'Infer character traits from textual evidence',
      'Structure analytical writing using Point, Evidence, Explanation',
    ],
    activityType: 'Inference Puzzle',
  },
  {
    id: 'y7-inference-3',
    title: 'Image Inference Bridge',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Non-Fiction Reading',
    duration: 5,
    instructions:
      'Show a photograph or illustration without context. Students write 3 inferences about the image using the same skills they apply to texts: What can you see? What can you infer? What evidence supports your inference? Then apply the same framework to a short unseen non-fiction extract.',
    resources: ['Projected image', 'Inference framework worksheet', 'Short non-fiction extract'],
    differentiation: {
      support: 'Complete the image inference together as a class before independent text work.',
      core: 'Complete both image and text inference independently.',
      stretch: 'Compare the reliability of inferences from images versus written text.',
    },
    linkedObjectives: [
      'Transfer inference skills across different types of source material',
      'Develop critical reading strategies for non-fiction texts',
    ],
    activityType: 'Inference Puzzle',
  },

  // --- Odd-One-Out ---
  {
    id: 'y7-oddout-1',
    title: 'Odd Word Out',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Grammar and Language Foundations',
    duration: 5,
    instructions:
      'Show 5 sets of 4 words on the board. In each set, one word is the odd one out (e.g. by word class, connotation, register, or semantic field). Students identify the odd one out and explain their reasoning. Accept multiple valid answers with good justification.',
    resources: ['Projected word sets', 'Mini whiteboards'],
    differentiation: {
      support: 'Provide the category for each set (e.g. "Which is not an adjective?").',
      core: 'Identify the odd one out and explain the grouping principle.',
      stretch: 'Create your own odd-one-out set for a partner to solve.',
    },
    linkedObjectives: [
      'Classify and categorise language using grammatical and semantic criteria',
      'Justify reasoning using precise metalinguistic terminology',
    ],
    activityType: 'Odd-One-Out',
  },
  {
    id: 'y7-oddout-2',
    title: 'Odd Character Out',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Novel Study',
    duration: 6,
    instructions:
      'Present groups of 4 characters from studied texts. Students identify which character is the odd one out and explain why. For example: Scrooge, the Inspector, Macbeth, Juliet -- which does not undergo a transformation? Students must justify using textual evidence.',
    resources: ['Character group cards', 'Justification writing frame'],
    differentiation: {
      support: 'Provide a brief character summary for each character in the group.',
      core: 'Identify the odd one out and write a justification with evidence.',
      stretch: 'Argue that a different character could also be the odd one out, providing alternative reasoning.',
    },
    linkedObjectives: [
      'Compare characters across texts using specific criteria',
      'Develop flexible thinking and argumentation skills',
    ],
    activityType: 'Odd-One-Out',
  },

  // --- Sentence Surgery ---
  {
    id: 'y7-surgery-1',
    title: 'Sentence Surgery: Upgrade',
    yearGroup: 'Year 7',
    termUnit: 'Term 2: Narrative and Descriptive Writing',
    duration: 6,
    instructions:
      'Display 5 simple sentences on the board (e.g. "The man walked down the road."). Students rewrite each sentence to make it more descriptive and engaging, using at least two techniques: expanded noun phrases, adverbial openers, sensory detail, or figurative language.',
    resources: ['Simple sentence list projected', 'Technique checklist card'],
    differentiation: {
      support: 'Improve 3 sentences using one technique per sentence with a prompt card.',
      core: 'Improve all 5 sentences using at least two techniques each.',
      stretch: 'Rewrite one sentence five different ways, each prioritising a different technique.',
    },
    linkedObjectives: [
      'Craft varied and effective sentences for impact',
      'Apply a range of descriptive techniques in writing',
    ],
    activityType: 'Sentence Surgery',
  },
  {
    id: 'y7-surgery-2',
    title: 'Sentence Surgery: Fix It',
    yearGroup: 'Year 7',
    termUnit: 'Term 1: Grammar and Language Foundations',
    duration: 5,
    instructions:
      'Display a paragraph containing 8 deliberate errors (spelling, punctuation, grammar, sentence structure). Students identify and correct all errors. Review as a class, discussing why each correction matters for clarity and meaning.',
    resources: ['Error-laden paragraph projected/printed', 'Correction key for teacher'],
    differentiation: {
      support: 'Errors are underlined; students provide the correction.',
      core: 'Find and correct all 8 errors independently.',
      stretch: 'Categorise each error by type and explain the relevant grammar rule.',
    },
    linkedObjectives: [
      'Proofread and edit writing for accuracy in spelling, punctuation, and grammar',
      'Understand how technical accuracy affects meaning and credibility',
    ],
    activityType: 'Sentence Surgery',
  },
  {
    id: 'y7-surgery-3',
    title: 'Sentence Surgery: Combine',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Non-Fiction Reading',
    duration: 5,
    instructions:
      'Give students 6 short, choppy sentences about the same topic. Students combine them into 2-3 well-crafted complex sentences using subordinating conjunctions, relative clauses, and appropriate punctuation. Compare versions and discuss which reads most fluently.',
    resources: ['Short sentence strips', 'Conjunction and connective word mat'],
    differentiation: {
      support: 'Combine into pairs first using provided conjunctions, then try three.',
      core: 'Combine all 6 into 2-3 complex sentences independently.',
      stretch: 'Write two versions: one for a formal report and one for a creative piece, discussing how purpose changes structure.',
    },
    linkedObjectives: [
      'Use subordination and co-ordination to construct complex sentences',
      'Adapt sentence structure to suit audience and purpose',
    ],
    activityType: 'Sentence Surgery',
  },

  // --- Additional Year 7 ---
  {
    id: 'y7-vocab-4',
    title: 'Synonym Showdown',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Poetry Introduction',
    duration: 5,
    instructions:
      'Display 6 overused words on the board (e.g. nice, bad, big, small, said, went). Students have 3 minutes to write as many synonyms as possible for each. Award points for ambitious and precise alternatives. Discuss which synonyms are most effective for literary analysis.',
    resources: ['Overused word list projected', 'Thesaurus (optional)', 'Scoring grid'],
    differentiation: {
      support: 'Focus on 3 words and aim for 3 synonyms each with a thesaurus.',
      core: 'Generate synonyms for all 6 words from memory.',
      stretch: 'For each word, identify a synonym with a positive and one with a negative connotation.',
    },
    linkedObjectives: [
      'Build a broad vocabulary for analytical and creative writing',
      'Understand how synonym choice affects tone and meaning',
    ],
    activityType: 'Vocabulary Challenge',
  },
  {
    id: 'y7-inference-4',
    title: 'Dialogue Detective',
    yearGroup: 'Year 7',
    termUnit: 'Term 3: Drama and Performance',
    duration: 6,
    instructions:
      'Display a short dialogue extract between two characters with no speech tags or stage directions. Students infer: Who are these characters? What is their relationship? What is the mood? Students must cite specific words or phrases as evidence for each inference.',
    resources: ['Printed dialogue extract', 'Inference grid (Character / Relationship / Mood / Evidence)'],
    differentiation: {
      support: 'Provide multiple-choice options for character and relationship.',
      core: 'Complete all four inference categories with evidence.',
      stretch: 'Write stage directions and speech tags that would support your inferences.',
    },
    linkedObjectives: [
      'Infer meaning from dialogue without explicit narration',
      'Analyse how playwrights convey character and mood through speech',
    ],
    activityType: 'Inference Puzzle',
  },

  // ══════════════════════════════════════════════════════════════
  //  YEAR 8 STARTERS (20)
  // ══════════════════════════════════════════════════════════════

  // --- Power Ranking ---
  {
    id: 'y8-power-1',
    title: 'Character Power Ranking',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Gothic Literature',
    duration: 6,
    instructions:
      'List 5 characters from the studied text on the board. Students rank them from most to least powerful, writing a one-sentence justification for each placement. Pairs compare rankings and debate differences. Class agrees on a final ranking with textual evidence.',
    resources: ['Character name cards', 'Ranking grid template', 'Key quotation sheet'],
    differentiation: {
      support: 'Rank 3 characters with provided quotations as evidence.',
      core: 'Rank all 5 characters with original justifications.',
      stretch: 'Define "power" in two different ways and show how this changes the ranking.',
    },
    linkedObjectives: [
      'Analyse how power dynamics operate between characters',
      'Support interpretations with well-selected textual evidence',
    ],
    activityType: 'Power Ranking',
  },
  {
    id: 'y8-power-2',
    title: 'Theme Power Ranking',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Shakespeare Introduction',
    duration: 6,
    instructions:
      'Display 6 themes from the studied play (e.g. ambition, loyalty, jealousy, fate, love, revenge). Students rank them by importance to the play\'s overall message. Write a paragraph defending your top-ranked theme using two quotations.',
    resources: ['Theme cards', 'Quotation bank organised by theme', 'Ranking frame'],
    differentiation: {
      support: 'Rank 4 themes and select from provided quotations.',
      core: 'Rank all 6 themes and write a paragraph on the top theme.',
      stretch: 'Argue why the lowest-ranked theme is still essential to the play\'s meaning.',
    },
    linkedObjectives: [
      'Evaluate the relative significance of themes within a text',
      'Construct a sustained argument supported by textual evidence',
    ],
    activityType: 'Power Ranking',
  },
  {
    id: 'y8-power-3',
    title: 'Technique Impact Ranking',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 5,
    instructions:
      'Present a persuasive extract using 5 identifiable techniques (e.g. rhetorical question, anaphora, emotive language, statistics, direct address). Students rank the techniques by persuasive impact, justifying their top choice in 2-3 sentences.',
    resources: ['Persuasive extract (printed or projected)', 'Technique identification grid'],
    differentiation: {
      support: 'Techniques are pre-identified; students rank and justify one choice.',
      core: 'Identify techniques independently, rank, and justify top choice.',
      stretch: 'Explain how the techniques work together to create a cumulative persuasive effect.',
    },
    linkedObjectives: [
      'Identify and evaluate the effectiveness of persuasive techniques',
      'Analyse how writers construct arguments for specific audiences',
    ],
    activityType: 'Power Ranking',
  },

  // --- Rhetoric Spotting ---
  {
    id: 'y8-rhetoric-1',
    title: 'Rhetoric Bingo',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 7,
    instructions:
      'Give each student a 3x3 bingo grid with rhetoric technique names (e.g. anaphora, tricolon, antithesis, hyperbole, rhetorical question, direct address, imperative, emotive language, allusion). Read aloud a speech extract. Students cross off each technique as they hear it. First to complete a line explains their findings.',
    resources: ['Bingo grid sheets', 'Speech extract for reading aloud', 'Technique definition cards'],
    differentiation: {
      support: 'Provide definitions on the bingo card alongside technique names.',
      core: 'Identify techniques from names only and provide one example.',
      stretch: 'For each technique found, explain the intended effect on the audience.',
    },
    linkedObjectives: [
      'Identify rhetorical devices in spoken and written texts',
      'Understand the persuasive effect of rhetorical techniques',
    ],
    activityType: 'Rhetoric Spotting',
  },
  {
    id: 'y8-rhetoric-2',
    title: 'Spot the Device',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Gothic Literature',
    duration: 6,
    instructions:
      'Display a Gothic literature extract containing at least 6 language devices (e.g. pathetic fallacy, sibilance, semantic field of darkness, juxtaposition, foreshadowing, personification). Students have 4 minutes to identify as many as possible, labelling each with the device name, the quotation, and a brief comment on effect.',
    resources: ['Gothic extract projected/printed', 'Device identification table'],
    differentiation: {
      support: 'Identify 3 devices from a provided checklist.',
      core: 'Identify 5+ devices independently with quotations and effects.',
      stretch: 'Explain how the devices combine to create the overall Gothic atmosphere.',
    },
    linkedObjectives: [
      'Identify and analyse language devices in literary texts',
      'Understand how writers create genre-specific atmospheres through language',
    ],
    activityType: 'Rhetoric Spotting',
  },
  {
    id: 'y8-rhetoric-3',
    title: 'Everyday Rhetoric Hunt',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 6,
    instructions:
      'Show 4 real-world examples: a charity advert, a political campaign poster, a product tagline, and a social media post. Students identify at least one rhetorical device in each and explain who the target audience is and how the device appeals to them.',
    resources: ['Four real-world media examples projected', 'Analysis grid with audience/device/effect columns'],
    differentiation: {
      support: 'Analyse 2 examples with guided questions for each.',
      core: 'Analyse all 4 independently using the grid.',
      stretch: 'Redesign one example using a different rhetorical device and argue it would be more effective.',
    },
    linkedObjectives: [
      'Recognise how rhetoric functions in everyday media and communication',
      'Analyse the relationship between audience, purpose, and technique',
    ],
    activityType: 'Rhetoric Spotting',
  },

  // --- Poetry Speed Analysis ---
  {
    id: 'y8-poetry-1',
    title: 'Poetry Speed Annotation',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Poetry Across Time',
    duration: 7,
    instructions:
      'Hand out a short unseen poem (8-12 lines). Students have 5 minutes to annotate: circle key images, underline language devices, note the tone, and identify the theme. Then share one finding with the class using the sentence stem: "The poet uses [device] to suggest..."',
    resources: ['Printed unseen poem', 'Annotation guide card', 'Coloured pens'],
    differentiation: {
      support: 'Focus on identifying 2 devices and the overall mood of the poem.',
      core: 'Annotate for devices, tone, theme, and one structural feature.',
      stretch: 'Compare the poem to a previously studied poem sharing a similar theme.',
    },
    linkedObjectives: [
      'Annotate poetry efficiently for key features',
      'Develop confidence with unseen poetry analysis',
    ],
    activityType: 'Poetry Speed Analysis',
  },
  {
    id: 'y8-poetry-2',
    title: 'First and Last Line Analysis',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Poetry Across Time',
    duration: 5,
    instructions:
      'Display only the first and last lines of a poem. Students predict: What is the poem about? How does the speaker\'s attitude change? Write 2 sentences of analysis. Then reveal the full poem and check predictions. Discuss what clues the first and last lines gave.',
    resources: ['First/last line display', 'Full poem for reveal', 'Prediction frame'],
    differentiation: {
      support: 'Guided questions: What mood does the first line create? How is the last line different?',
      core: 'Predict theme and attitude shift independently with evidence from the lines.',
      stretch: 'Analyse how the structural choice of the opening and closing shapes the reader\'s journey.',
    },
    linkedObjectives: [
      'Analyse how poets use structure to shape meaning',
      'Develop prediction and inference skills in poetry reading',
    ],
    activityType: 'Poetry Speed Analysis',
  },
  {
    id: 'y8-poetry-3',
    title: 'Poetic Form Quick Quiz',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Poetry Across Time',
    duration: 5,
    instructions:
      'Display 5 short poem extracts. Students identify the form of each (sonnet, ballad, free verse, haiku, limerick) and write one feature that helped them identify it. Review as a class, building a form-feature reference table.',
    resources: ['Five poem extracts projected', 'Form-feature table template'],
    differentiation: {
      support: 'Provide form names as a word bank and match them to extracts.',
      core: 'Identify all 5 forms and cite a defining feature for each.',
      stretch: 'Explain how the form of each poem relates to its content or theme.',
    },
    linkedObjectives: [
      'Identify and distinguish between poetic forms',
      'Understand how poets choose form to reinforce meaning',
    ],
    activityType: 'Poetry Speed Analysis',
  },

  // --- Shakespeare Translation Challenges ---
  {
    id: 'y8-shakespeare-1',
    title: 'Shakespeare to Modern English',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Shakespeare Introduction',
    duration: 7,
    instructions:
      'Display 5 Shakespearean sentences on the board (e.g. "Wherefore art thou Romeo?", "Get thee to a nunnery!", "What light through yonder window breaks?"). Students translate each into modern English. Then discuss: what is lost in translation? Why does Shakespeare\'s original language matter?',
    resources: ['Shakespearean quotation list projected', 'Translation recording sheet', 'Glossary of archaic terms'],
    differentiation: {
      support: 'Translate 3 sentences with a provided glossary of key archaic words.',
      core: 'Translate all 5 and identify one example where modern English loses impact.',
      stretch: 'Rewrite a modern sentence in Shakespearean style and explain the stylistic choices.',
    },
    linkedObjectives: [
      'Develop comprehension of Shakespearean language and syntax',
      'Appreciate how language choices create meaning and effect',
    ],
    activityType: 'Shakespeare Translation Challenge',
  },
  {
    id: 'y8-shakespeare-2',
    title: 'Insult Generator: Shakespeare Edition',
    yearGroup: 'Year 8',
    termUnit: 'Term 2: Shakespeare Introduction',
    duration: 6,
    instructions:
      'Using a three-column Shakespearean insult generator (Column A: adjectives, Column B: adjectives, Column C: nouns), students create 3 insults. Then translate their favourite into modern English and explain which version is more effective and why. Discuss what Shakespeare\'s insults reveal about his characters.',
    resources: ['Three-column insult generator sheet', 'Example insults from plays'],
    differentiation: {
      support: 'Generate 2 insults and pick a favourite, explaining it in modern terms.',
      core: 'Generate 3 insults, translate one, and analyse effectiveness.',
      stretch: 'Write a short dialogue between two characters using Shakespearean insults in context.',
    },
    linkedObjectives: [
      'Engage playfully with Shakespearean vocabulary and syntax',
      'Understand how language reflects character and social status',
    ],
    activityType: 'Shakespeare Translation Challenge',
  },

  // --- Media Headline Analysis ---
  {
    id: 'y8-media-1',
    title: 'Headline Bias Detector',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Non-Fiction and Media Literacy',
    duration: 6,
    instructions:
      'Show 4 headlines reporting the same event from different sources. Students identify the bias in each headline by analysing word choice, what is included or omitted, and the intended emotional response. Write a neutral alternative headline for the most biased example.',
    resources: ['Four headlines projected (same event, different sources)', 'Bias analysis grid'],
    differentiation: {
      support: 'Compare 2 headlines with guided prompts: "Which words are emotive?"',
      core: 'Analyse all 4 headlines and write a neutral alternative.',
      stretch: 'Explain how headline bias reflects the political or commercial interests of each publication.',
    },
    linkedObjectives: [
      'Identify bias and perspective in non-fiction texts',
      'Analyse how language is used to influence readers in media',
    ],
    activityType: 'Media Headline Analysis',
  },
  {
    id: 'y8-media-2',
    title: 'Clickbait Deconstructor',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Non-Fiction and Media Literacy',
    duration: 5,
    instructions:
      'Display 5 clickbait headlines. Students identify the technique used in each (e.g. curiosity gap, exaggeration, emotional trigger, listicle, shock value). Then rewrite each as a factual, informative headline. Discuss why clickbait is effective despite being misleading.',
    resources: ['Clickbait headline examples projected', 'Technique identification sheet'],
    differentiation: {
      support: 'Identify techniques from a provided list and rewrite 3 headlines.',
      core: 'Name techniques independently and rewrite all 5.',
      stretch: 'Write your own clickbait headline for a school event and explain the psychology behind it.',
    },
    linkedObjectives: [
      'Critically evaluate how digital media uses language to engage audiences',
      'Distinguish between informative and manipulative language',
    ],
    activityType: 'Media Headline Analysis',
  },
  {
    id: 'y8-media-3',
    title: 'Front Page Comparison',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 7,
    instructions:
      'Show two newspaper front pages covering the same story. Students compare: headline language, image selection, layout, and pull quotes. Write a paragraph analysing how each paper positions the reader to respond differently to the same event.',
    resources: ['Two front page images projected', 'Comparison grid template'],
    differentiation: {
      support: 'Complete a guided comparison grid focusing on headline and image.',
      core: 'Compare all four features and write a comparative paragraph.',
      stretch: 'Evaluate which front page is more effective at shaping public opinion, with evidence.',
    },
    linkedObjectives: [
      'Compare how different texts present the same topic',
      'Analyse the interplay of language, image, and layout in media texts',
    ],
    activityType: 'Media Headline Analysis',
  },

  // --- Persuasion Bingo ---
  {
    id: 'y8-persuasion-1',
    title: 'Persuasion Technique Bingo',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 7,
    instructions:
      'Each student receives a 4x4 bingo grid with persuasive techniques (e.g. statistics, expert opinion, anecdote, rule of three, emotive language, imperative, flattery, repetition, inclusive pronoun, counterargument, concession, exaggeration, alliteration, contrast, analogy, call to action). Play an audio or read aloud a persuasive speech. Students mark each technique as they identify it.',
    resources: ['4x4 bingo grid sheets', 'Persuasive speech audio or text', 'Technique definitions reference'],
    differentiation: {
      support: 'Use a 3x3 grid with definitions alongside technique names.',
      core: 'Complete the 4x4 grid and quote one example from the speech.',
      stretch: 'For each technique found, rate its effectiveness on a 1-5 scale with justification.',
    },
    linkedObjectives: [
      'Identify a wide range of persuasive techniques in context',
      'Develop active listening and analytical skills',
    ],
    activityType: 'Persuasion Bingo',
  },
  {
    id: 'y8-persuasion-2',
    title: 'Persuasion in 60 Seconds',
    yearGroup: 'Year 8',
    termUnit: 'Term 3: Persuasive Writing and Rhetoric',
    duration: 6,
    instructions:
      'Give students a random topic (e.g. "School uniforms should be abolished"). They have 3 minutes to write a 60-second persuasive speech using at least 3 named techniques. Volunteers perform their speeches. Class identifies the techniques used and votes on the most persuasive speaker.',
    resources: ['Topic cards (random selection)', 'Technique checklist', 'Timer'],
    differentiation: {
      support: 'Use 2 techniques with sentence starters provided.',
      core: 'Use 3+ techniques independently in a structured speech.',
      stretch: 'Deliver a counterargument speech responding to a peer\'s original speech.',
    },
    linkedObjectives: [
      'Apply persuasive techniques in original writing and speech',
      'Develop confidence in spoken language and rhetorical delivery',
    ],
    activityType: 'Persuasion Bingo',
  },

  // --- Additional Year 8 ---
  {
    id: 'y8-gothic-1',
    title: 'Gothic Atmosphere Builder',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Gothic Literature',
    duration: 7,
    instructions:
      'Show a bland, neutral sentence (e.g. "The house was old and the garden was untidy."). Students rewrite it as a Gothic description in 4-5 sentences using at least 3 Gothic conventions: pathetic fallacy, semantic field of decay, sensory detail, personification, or foreboding tone. Best versions are read aloud.',
    resources: ['Neutral sentence projected', 'Gothic conventions checklist', 'Model paragraph'],
    differentiation: {
      support: 'Use a writing frame with sentence starters for each convention.',
      core: 'Write 4-5 sentences using 3+ Gothic conventions independently.',
      stretch: 'Write the same setting twice: once as Gothic horror, once as Gothic romance. Compare the techniques used.',
    },
    linkedObjectives: [
      'Apply Gothic conventions in descriptive writing',
      'Understand how genre expectations shape language choices',
    ],
    activityType: 'Rhetoric Spotting',
  },
  {
    id: 'y8-power-4',
    title: 'Evidence Strength Ranking',
    yearGroup: 'Year 8',
    termUnit: 'Term 1: Non-Fiction and Media Literacy',
    duration: 6,
    instructions:
      'Present 6 pieces of evidence supporting a claim (e.g. anecdote, statistic, expert quote, logical reasoning, emotional appeal, analogy). Students rank them from strongest to weakest for a given audience and purpose. Discuss how audience changes the ranking.',
    resources: ['Evidence cards (6 per set)', 'Ranking template', 'Audience scenario card'],
    differentiation: {
      support: 'Rank 4 pieces of evidence with provided definitions of evidence types.',
      core: 'Rank all 6 and justify the top and bottom choices in writing.',
      stretch: 'Re-rank for a different audience and explain how the hierarchy shifts.',
    },
    linkedObjectives: [
      'Evaluate the strength and appropriateness of different types of evidence',
      'Understand how audience affects the effectiveness of evidence',
    ],
    activityType: 'Power Ranking',
  },

  // ══════════════════════════════════════════════════════════════
  //  YEAR 9 STARTERS (20)
  // ══════════════════════════════════════════════════════════════

  // --- Context Matching ---
  {
    id: 'y9-context-1',
    title: 'Context to Quotation Link',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 6,
    instructions:
      'Display 5 contextual facts (e.g. Victorian class system, industrial revolution, women\'s rights, empire, religious doubt) and 5 quotations from the studied novel. Students match each context to the most relevant quotation and write one sentence explaining the connection.',
    resources: ['Context fact cards', 'Quotation cards', 'Matching grid template'],
    differentiation: {
      support: 'Match 3 pairs with connection sentence starters provided.',
      core: 'Match all 5 pairs and write independent connection sentences.',
      stretch: 'Explain how one quotation could connect to two different contextual factors.',
    },
    linkedObjectives: [
      'Understand how context shapes the meaning of literary texts',
      'Make explicit links between historical/social context and textual evidence',
    ],
    activityType: 'Context Matching',
  },
  {
    id: 'y9-context-2',
    title: 'Author Intent Through Context',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 7,
    instructions:
      'Present a brief biography slide about the studied playwright. Then display 3 quotations from the play. Students write an "author intent" statement for each quotation: "Through [character/technique], [author] intends to [message] because [contextual link]." Discuss the difference between character voice and author message.',
    resources: ['Author biography slide', 'Three quotations projected', 'Intent statement frame'],
    differentiation: {
      support: 'Complete one intent statement using a provided scaffold.',
      core: 'Write intent statements for all 3 quotations independently.',
      stretch: 'Challenge one intent statement with an alternative reading.',
    },
    linkedObjectives: [
      'Distinguish between character perspective and authorial intent',
      'Use contextual knowledge to deepen interpretation',
    ],
    activityType: 'Context Matching',
  },
  {
    id: 'y9-context-3',
    title: 'Timeline to Text',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 6,
    instructions:
      'Display a timeline of 6-8 key historical events relevant to the studied text. Students select 3 events and write a sentence each explaining how the event influenced the writer or is reflected in the text. Share and build a class "context web" on the board.',
    resources: ['Historical timeline display', 'Context web template on whiteboard'],
    differentiation: {
      support: 'Select 2 events from a shorter timeline with guided prompts.',
      core: 'Select 3 events and write independent explanatory sentences.',
      stretch: 'Explain how one event influenced two different aspects of the text (character, theme, or setting).',
    },
    linkedObjectives: [
      'Place literary texts within their historical and cultural context',
      'Analyse how historical events shape literary themes and characters',
    ],
    activityType: 'Context Matching',
  },

  // --- Conceptual Vocabulary Building ---
  {
    id: 'y9-concept-1',
    title: 'Concept Vocabulary Web',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 6,
    instructions:
      'Give students a central concept word (e.g. "patriarchy", "imperialism", "duality", "repression"). Students create a vocabulary web: definition in the centre, 4 related words branching out, a quotation from the text that illustrates the concept, and a sentence using the word in literary analysis.',
    resources: ['Concept word card', 'Vocabulary web template', 'Dictionary access'],
    differentiation: {
      support: 'Definition provided; students find 2 related words and one quotation.',
      core: 'Complete the full web independently.',
      stretch: 'Create a second web for a contrasting concept and link the two.',
    },
    linkedObjectives: [
      'Build conceptual vocabulary for sophisticated literary analysis',
      'Connect abstract ideas to specific textual evidence',
    ],
    activityType: 'Conceptual Vocabulary Building',
  },
  {
    id: 'y9-concept-2',
    title: 'Critical Terminology Sprint',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 5,
    instructions:
      'Display 8 critical/analytical terms (e.g. didactic, allegorical, subversive, catharsis, hubris, microcosm, dramatic irony, denouement). Students write a one-sentence definition for each. Then select 3 and use them in analytical sentences about the studied text.',
    resources: ['Terminology list projected', 'Exercise books'],
    differentiation: {
      support: 'Match 5 terms to provided definitions, then use 1 in a sentence.',
      core: 'Define all 8 from memory and use 3 in analytical sentences.',
      stretch: 'Write a mini-paragraph using 4 terms cohesively to analyse a key scene.',
    },
    linkedObjectives: [
      'Use precise critical terminology in analytical writing',
      'Demonstrate understanding of key literary and dramatic concepts',
    ],
    activityType: 'Conceptual Vocabulary Building',
  },
  {
    id: 'y9-concept-3',
    title: 'Abstract to Concrete',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Conflict Poetry',
    duration: 6,
    instructions:
      'Give students an abstract theme word (e.g. "futility", "sacrifice", "identity", "alienation"). Students write: (1) a dictionary definition, (2) what it means in the context of the studied poems, (3) a quotation that embodies it, (4) why the poet explores this concept. Share strongest responses.',
    resources: ['Abstract theme word cards', 'Four-step recording frame'],
    differentiation: {
      support: 'Complete steps 1-2 with guided prompts; attempt step 3 with a quotation bank.',
      core: 'Complete all 4 steps independently.',
      stretch: 'Compare how two different poets approach the same abstract concept.',
    },
    linkedObjectives: [
      'Move from surface-level understanding to conceptual analysis',
      'Link abstract themes to concrete textual evidence',
    ],
    activityType: 'Conceptual Vocabulary Building',
  },

  // --- Timed Analytical Writing ---
  {
    id: 'y9-timed-1',
    title: 'Two-Minute Analytical Paragraph',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 7,
    instructions:
      'Display a quotation and an analytical focus (e.g. "How does Dickens present social class in this extract?"). Students write a full analytical paragraph in exactly 2 minutes. Then spend 3 minutes peer-assessing using a checklist: clear point, embedded quotation, language analysis, context link, concluding comment.',
    resources: ['Quotation and question projected', 'Peer-assessment checklist', 'Timer'],
    differentiation: {
      support: 'Use a paragraph scaffold (Point... Evidence shows... This suggests... The context of...).',
      core: 'Write a paragraph independently using the full checklist.',
      stretch: 'Write the paragraph, then add a second analytical layer exploring an alternative interpretation.',
    },
    linkedObjectives: [
      'Write analytical paragraphs efficiently under timed conditions',
      'Self-assess and peer-assess analytical writing against success criteria',
    ],
    activityType: 'Timed Analytical Writing',
  },
  {
    id: 'y9-timed-2',
    title: 'Point, Evidence, Analysis Race',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 6,
    instructions:
      'Project a theme word and 3 possible quotations. Students select the best quotation for the theme and write a PEA paragraph in 4 minutes. Focus on: quality of evidence selection, depth of analysis, and use of subject terminology. Top paragraphs are shared and evaluated by the class.',
    resources: ['Theme word and quotation options projected', 'PEA paragraph frame', 'Timer'],
    differentiation: {
      support: 'Quotation is pre-selected; complete the PEA using a writing scaffold.',
      core: 'Select the best quotation and write PEA independently.',
      stretch: 'Write PEA then add a counter-interpretation or contextual extension.',
    },
    linkedObjectives: [
      'Select the most effective evidence to support analytical points',
      'Develop speed and quality in analytical paragraph writing',
    ],
    activityType: 'Timed Analytical Writing',
  },
  {
    id: 'y9-timed-3',
    title: 'Micro-Essay: 100 Words',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Conflict Poetry',
    duration: 8,
    instructions:
      'Give students an essay question (e.g. "How does the poet present the reality of conflict?"). Students write a 100-word micro-essay in 5 minutes. The constraint forces precision: every word must earn its place. Peer-read and identify the single most effective sentence in a partner\'s response.',
    resources: ['Essay question projected', 'Word count guide', 'Peer feedback slips'],
    differentiation: {
      support: 'Write 60-80 words with a provided opening sentence.',
      core: 'Write exactly 100 words with embedded quotation and analysis.',
      stretch: 'Write 100 words, then edit down to 75 without losing any analytical depth.',
    },
    linkedObjectives: [
      'Write concisely and precisely under word and time constraints',
      'Prioritise the most important analytical points in essay writing',
    ],
    activityType: 'Timed Analytical Writing',
  },

  // --- Quotation Embedding Races ---
  {
    id: 'y9-embed-1',
    title: 'Seamless Quotation Embedding',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 6,
    instructions:
      'Display 5 quotations from the studied text. Students practise embedding each one seamlessly into an analytical sentence (not just bolting it on). Model the difference between: "Dickens says \'it was the best of times\'" vs "Dickens\' opening antithesis of \'the best of times\' and \'the worst\' immediately establishes..." Students write 5 embedded quotation sentences in 4 minutes.',
    resources: ['Quotation list projected', 'Embedding technique guide', 'Model examples'],
    differentiation: {
      support: 'Embed 3 quotations using sentence stems that model embedding.',
      core: 'Embed all 5 quotations seamlessly with analytical comment.',
      stretch: 'Embed a single quotation in 3 different ways, each foregrounding a different analytical angle.',
    },
    linkedObjectives: [
      'Embed quotations fluently within analytical writing',
      'Move beyond simple quotation insertion to integrated evidence use',
    ],
    activityType: 'Quotation Embedding Race',
  },
  {
    id: 'y9-embed-2',
    title: 'Single Word Quotation Challenge',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 5,
    instructions:
      'Give students 5 single powerful words from the studied text (e.g. "fire", "blood", "chain", "wall", "light"). Students embed each single word as a quotation within an analytical sentence, zooming in on its connotations and effects. This trains the skill of close language analysis from minimal evidence.',
    resources: ['Single word list projected', 'Analytical sentence frames'],
    differentiation: {
      support: 'Embed 3 words using the frame: "The word [X] suggests... because..."',
      core: 'Embed all 5 with analysis of connotations and effects.',
      stretch: 'Track one word across the whole text, showing how its meaning shifts.',
    },
    linkedObjectives: [
      'Analyse the effect of individual word choices',
      'Develop close reading and language analysis skills',
    ],
    activityType: 'Quotation Embedding Race',
  },
  {
    id: 'y9-embed-3',
    title: 'Quotation Integration Relay',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Conflict Poetry',
    duration: 7,
    instructions:
      'Teams of 4. Each team receives the same set of 4 quotations and an essay question. Student 1 writes a topic sentence and embeds quotation 1. Passes to Student 2 who continues with quotation 2, and so on. The team produces a continuous paragraph integrating all 4 quotations. Best paragraph from each team is read aloud.',
    resources: ['Quotation sets (4 per team)', 'Essay question projected', 'Relay writing sheets'],
    differentiation: {
      support: 'Quotations are ordered for logical flow; connecting phrases provided.',
      core: 'Team decides the order and writes connecting analysis between quotations.',
      stretch: 'Include a counterargument or alternative interpretation within the relay paragraph.',
    },
    linkedObjectives: [
      'Integrate multiple quotations into a sustained analytical argument',
      'Collaborate to build coherent, evidence-rich paragraphs',
    ],
    activityType: 'Quotation Embedding Race',
  },

  // --- Exam Question Deconstruction ---
  {
    id: 'y9-exam-1',
    title: 'Command Word Decoder',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 5,
    instructions:
      'Display 5 exam questions. Students underline the command word in each (e.g. analyse, evaluate, compare, explain, explore) and write what the command word requires them to do. Discuss: how would your response differ between "explain" and "evaluate"? Build a class command word reference.',
    resources: ['Five exam questions projected', 'Command word grid template'],
    differentiation: {
      support: 'Command words are highlighted; students write what each one means.',
      core: 'Identify command words independently and distinguish between similar ones.',
      stretch: 'Write the opening sentence of a response to each question, showing how the command word shapes the approach.',
    },
    linkedObjectives: [
      'Understand and respond precisely to exam command words',
      'Develop strategic approaches to different question types',
    ],
    activityType: 'Exam Question Deconstruction',
  },
  {
    id: 'y9-exam-2',
    title: 'Mark Scheme Reverse Engineer',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Exam Preparation',
    duration: 7,
    instructions:
      'Give students an exam question and the mark scheme descriptors for each band. Students read a sample student response and decide which band it falls into, annotating the evidence in the response that matches the descriptors. Then write 2 "what went well" and 2 "even better if" points.',
    resources: ['Exam question', 'Band descriptors', 'Sample student response', 'WWW/EBI frame'],
    differentiation: {
      support: 'Work with top band and bottom band descriptors only; identify 1 WWW and 1 EBI.',
      core: 'Place in exact band with annotated evidence and write 2 WWW / 2 EBI.',
      stretch: 'Rewrite one paragraph of the response to move it into the next band up.',
    },
    linkedObjectives: [
      'Understand mark scheme criteria and how examiners assess responses',
      'Develop self and peer assessment skills using formal criteria',
    ],
    activityType: 'Exam Question Deconstruction',
  },
  {
    id: 'y9-exam-3',
    title: 'Planning Under Pressure',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Exam Preparation',
    duration: 8,
    instructions:
      'Display an exam-style question. Students have exactly 3 minutes to produce a bullet-point plan: thesis statement, 3 paragraph topics, key quotations for each, and a conclusion direction. Compare plans with a partner and discuss: whose plan would produce the higher-band response? Why?',
    resources: ['Exam question projected', 'Planning template', 'Timer'],
    differentiation: {
      support: 'Use a structured planning frame with guided sections.',
      core: 'Produce a full plan independently within the time limit.',
      stretch: 'Plan two different responses to the same question and argue which approach is stronger.',
    },
    linkedObjectives: [
      'Plan essay responses efficiently under timed conditions',
      'Select and organise evidence strategically for maximum impact',
    ],
    activityType: 'Exam Question Deconstruction',
  },

  // --- Comparative Thinking Maps ---
  {
    id: 'y9-compare-1',
    title: 'Double Bubble Comparison',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Conflict Poetry',
    duration: 7,
    instructions:
      'Give students a double bubble map template. They compare two poems studied in the unit: shared features in the centre bubbles, unique features in the outer bubbles. Categories to consider: theme, tone, form, language devices, and context. Students must include at least one quotation in each bubble.',
    resources: ['Double bubble map template', 'Two poems (printed or accessible)', 'Coloured pens'],
    differentiation: {
      support: 'Compare using 3 provided categories with quotation prompts.',
      core: 'Complete the full map across 5 categories with quotations.',
      stretch: 'Write a comparative topic sentence for each pair of connected bubbles.',
    },
    linkedObjectives: [
      'Compare and contrast texts systematically using a range of criteria',
      'Identify similarities and differences in how writers approach shared themes',
    ],
    activityType: 'Comparative Thinking Map',
  },
  {
    id: 'y9-compare-2',
    title: 'Character Comparison Grid',
    yearGroup: 'Year 9',
    termUnit: 'Term 1: 19th Century Novel Study',
    duration: 6,
    instructions:
      'Create a comparison grid for two characters from the studied text. Columns: trait, Character A evidence, Character B evidence, what the comparison reveals. Students complete at least 3 rows. Focus on how the comparison deepens understanding of the writer\'s message.',
    resources: ['Comparison grid template', 'Character notes/quotation bank'],
    differentiation: {
      support: 'Traits are pre-filled; students find evidence for each character.',
      core: 'Choose traits, find evidence, and write comparative analysis for 3 rows.',
      stretch: 'Add a "writer\'s purpose" column explaining why the author created this contrast.',
    },
    linkedObjectives: [
      'Compare characters to explore writer\'s thematic intentions',
      'Use comparison as an analytical tool to deepen interpretation',
    ],
    activityType: 'Comparative Thinking Map',
  },
  {
    id: 'y9-compare-3',
    title: 'Methods Comparison Lightning Round',
    yearGroup: 'Year 9',
    termUnit: 'Term 2: Modern Drama',
    duration: 6,
    instructions:
      'Display two short extracts from different texts that share a theme but use different methods. Students have 4 minutes to identify: (1) the shared theme, (2) one method each writer uses, (3) how the methods differ in effect. Write a comparative sentence using "whereas" or "in contrast". Best sentences shared aloud.',
    resources: ['Two extracts projected side by side', 'Comparative connective word mat'],
    differentiation: {
      support: 'Theme is provided; identify one method in each extract with guidance.',
      core: 'Identify theme, methods, and effects independently; write comparative sentence.',
      stretch: 'Write a full comparative paragraph linking both methods to their respective contexts.',
    },
    linkedObjectives: [
      'Compare writers\' methods across different texts',
      'Use comparative language and connectives effectively in analytical writing',
    ],
    activityType: 'Comparative Thinking Map',
  },

  // --- Additional Year 9 ---
  {
    id: 'y9-context-4',
    title: 'Context Quick-Fire Quiz',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Exam Preparation',
    duration: 5,
    instructions:
      'Display 10 true/false statements about the historical, social, or literary context of the studied texts (e.g. "Priestley wrote An Inspector Calls during WWII" -- True). Students answer all 10 on mini whiteboards. Review answers and discuss why each contextual fact matters for understanding the text.',
    resources: ['True/false statements projected', 'Mini whiteboards', 'Answer key with explanations'],
    differentiation: {
      support: 'Answer 6 questions with a provided context fact sheet.',
      core: 'Answer all 10 from memory and explain 2 in relation to the text.',
      stretch: 'For any false statement, provide the correct fact and explain its textual significance.',
    },
    linkedObjectives: [
      'Recall and apply key contextual knowledge accurately',
      'Understand why contextual knowledge is essential for exam responses',
    ],
    activityType: 'Context Matching',
  },
  {
    id: 'y9-timed-4',
    title: 'Introduction Paragraph Sprint',
    yearGroup: 'Year 9',
    termUnit: 'Term 3: Exam Preparation',
    duration: 7,
    instructions:
      'Display an essay question. Students write only the introduction paragraph in 3 minutes. The introduction must: address the question directly, establish a thesis, and signal the direction of the argument. Peer-assess using a 3-point checklist. Discuss what makes an introduction compelling versus generic.',
    resources: ['Essay question projected', 'Introduction checklist', 'Timer', 'Peer assessment slips'],
    differentiation: {
      support: 'Use a scaffold: "In [text], [author] explores [theme] through [method]..."',
      core: 'Write an original introduction addressing all 3 checklist points.',
      stretch: 'Write two versions -- one safe and one ambitious -- and argue which would score higher.',
    },
    linkedObjectives: [
      'Craft effective essay introductions that establish a clear thesis',
      'Develop the skill of addressing the question from the very first sentence',
    ],
    activityType: 'Timed Analytical Writing',
  },
]
