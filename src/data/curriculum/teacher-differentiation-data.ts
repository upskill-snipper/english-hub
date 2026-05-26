// ---------------------------------------------------------------------------
// Teacher Differentiation & Scaffolding Data
// Comprehensive differentiation frameworks for KS3 English curriculum (Y7-Y9)
// Designed for international school context with EAL and SEN provisions
// ---------------------------------------------------------------------------

// ========================== INTERFACES ==========================

export type YearGroup = 'Y7' | 'Y8' | 'Y9'
export type DiffTier = 'support' | 'core' | 'extension'
export type AssessmentObjective = 'AO1' | 'AO2' | 'AO3' | 'AO4' | 'AO5' | 'AO6'

export interface WritingFrame {
  yearGroup: YearGroup
  frameworkName: string
  description: string
  structure: FrameStep[]
  sentenceStarters: string[]
  transitionPhrases: string[]
  modelParagraph: string
}

export interface FrameStep {
  label: string
  abbreviation: string
  instruction: string
  example: string
}

export interface AOSentenceStarters {
  ao: AssessmentObjective
  aoLabel: string
  yearGroup: YearGroup
  starters: string[]
}

export interface UnitWordBank {
  unitId: string
  unitTitle: string
  yearGroup: YearGroup
  categories: WordBankCategory[]
}

export interface WordBankCategory {
  category: string
  words: WordEntry[]
}

export interface WordEntry {
  term: string
  definition: string
  exampleSentence?: string
}

export interface VisualOrganiser {
  id: string
  name: string
  description: string
  bestFor: string[]
  yearGroups: YearGroup[]
  structure: string
}

export interface UnitDifferentiation {
  unitId: string
  unitTitle: string
  yearGroup: YearGroup
  termNumber: number
  support: TierStrategy
  core: TierStrategy
  extension: TierStrategy
  ealAdaptations: EALAdaptation[]
  senConsiderations: SENConsideration[]
}

export interface TierStrategy {
  description: string
  scaffolding: string[]
  expectedOutcomes: string[]
  activities: string[]
  resources: string[]
}

export interface EALAdaptation {
  stage: 'beginner' | 'intermediate' | 'advanced'
  strategies: string[]
  resources: string[]
}

export interface SENConsideration {
  need: string
  adaptations: string[]
  resources: string[]
}

export interface AssessmentModification {
  yearGroup: YearGroup
  tier: DiffTier
  readingModifications: string[]
  writingModifications: string[]
  timingModifications: string[]
  presentationModifications: string[]
}

export interface GradeDescriptor {
  yearGroup: YearGroup
  grade: string
  reading: string
  writing: string
  spag: string
}

export interface ProgressIndicator {
  yearGroup: YearGroup
  term: number
  emergingDescriptors: string[]
  developingDescriptors: string[]
  secureDescriptors: string[]
  masteringDescriptors: string[]
}

export interface MarkingTemplate {
  yearGroup: YearGroup
  templateType: 'www_ebi' | 'marking_codes' | 'peer_assessment' | 'self_assessment'
  title: string
  description: string
  content: string[]
}

export interface MarkingCode {
  code: string
  meaning: string
  category: 'literacy' | 'content' | 'structure' | 'praise'
}

export interface PeerAssessmentGuide {
  yearGroup: YearGroup
  taskType: string
  criteria: PeerCriterion[]
  sentenceStarters: string[]
  rules: string[]
}

export interface PeerCriterion {
  label: string
  lookFor: string[]
  scale: string
}

export interface SelfAssessmentChecklist {
  yearGroup: YearGroup
  taskType: string
  title: string
  items: ChecklistItem[]
}

export interface ChecklistItem {
  statement: string
  category: string
  tier: DiffTier
}

// ========================== 1. SCAFFOLDING FRAMEWORKS ==========================

// ---- 1A. Writing Frames per Year Group ----

export const writingFrames: WritingFrame[] = [
  // ── Y7: PEE Framework ──
  {
    yearGroup: 'Y7',
    frameworkName: 'PEE (Point, Evidence, Explain)',
    description:
      'The foundational analytical paragraph structure for Year 7. Students learn to make a clear point, support it with a quotation, and explain the effect.',
    structure: [
      {
        label: 'Point',
        abbreviation: 'P',
        instruction:
          'State your argument in one clear sentence. This should directly answer the question.',
        example: 'The writer presents the character as threatening and powerful.',
      },
      {
        label: 'Evidence',
        abbreviation: 'E',
        instruction:
          'Provide a short, relevant quotation from the text. Keep it to key words or a single phrase where possible.',
        example: 'This is shown when they are described as having "eyes like burning coals."',
      },
      {
        label: 'Explain',
        abbreviation: 'E',
        instruction:
          'Analyse what the evidence means. Discuss the technique used, the connotations of key words, and the effect on the reader.',
        example:
          'The simile "burning coals" suggests intense anger and danger, making the reader feel uneasy about this character.',
      },
    ],
    sentenceStarters: [
      'The writer shows/suggests/presents...',
      'This is evident when...',
      'The word/phrase "___" suggests...',
      'This makes the reader feel...',
      'The effect of this is...',
    ],
    transitionPhrases: [
      'Furthermore,',
      'In addition,',
      'Similarly,',
      'However,',
      'On the other hand,',
    ],
    modelParagraph:
      'The writer presents the forest as a dangerous and unwelcoming place. This is shown through the description of the trees having "twisted, grasping branches." The verb "grasping" personifies the trees as if they are actively trying to grab and trap the character, which creates a sense of claustrophobia and threat for the reader.',
  },

  // ── Y8: PEEL Framework ──
  {
    yearGroup: 'Y8',
    frameworkName: 'PEEL (Point, Evidence, Explain, Link)',
    description:
      'Building on PEE, Year 8 students add a Link sentence to connect their analysis back to the question or to a broader theme, creating more cohesive paragraphs.',
    structure: [
      {
        label: 'Point',
        abbreviation: 'P',
        instruction:
          'Make a clear, arguable point that directly addresses the question. Be specific rather than vague.',
        example:
          'Shakespeare presents Lady Macbeth as manipulative in order to challenge Jacobean expectations of femininity.',
      },
      {
        label: 'Evidence',
        abbreviation: 'E',
        instruction:
          'Embed a short quotation smoothly into your sentence. Aim for key words rather than long chunks of text.',
        example:
          'She commands Macbeth to "look like the innocent flower, but be the serpent under it."',
      },
      {
        label: 'Explain',
        abbreviation: 'E',
        instruction:
          'Analyse the language closely. Name the technique, explore connotations of individual words, and consider the effect on the audience.',
        example:
          'The juxtaposition of "innocent flower" and "serpent" creates a stark contrast between appearance and reality. The biblical connotation of the serpent links Lady Macbeth to Eve and original sin, implying she is a corrupting force.',
      },
      {
        label: 'Link',
        abbreviation: 'L',
        instruction:
          "Connect your analysis back to the question, to a theme, or to the writer's wider purpose. This demonstrates your understanding of the text as a whole.",
        example:
          'This reinforces the theme of deception that runs throughout the play, where nothing is as it seems.',
      },
    ],
    sentenceStarters: [
      'The writer uses ___ to convey...',
      'This is demonstrated through the use of...',
      'The connotations of "___" imply...',
      'This would have resonated with a contemporary audience because...',
      'This links to the wider theme of...',
      'Ultimately, this reveals...',
    ],
    transitionPhrases: [
      'Building on this idea,',
      'This is further reinforced by...',
      'Conversely,',
      'What is particularly significant is...',
      'This contrasts sharply with...',
    ],
    modelParagraph:
      'Dickens presents Scrooge as isolated and cold in order to critique Victorian attitudes towards the poor. He is described as "solitary as an oyster," a simile which suggests he has sealed himself away from the world, hard and impenetrable on the outside. The word "oyster" carries connotations of something that is tightly shut and unwilling to open, mirroring Scrooge\'s refusal to engage with those around him. This initial characterisation establishes the moral journey that Scrooge must undertake, reinforcing Dickens\' message that compassion and community are essential to a meaningful life.',
  },

  // ── Y9: Conceptual/Thesis-Driven Framework ──
  {
    yearGroup: 'Y9',
    frameworkName: 'Conceptual Analysis (Thesis-Driven)',
    description:
      "Year 9 students move beyond formulaic structures towards thesis-driven paragraphs that foreground critical concepts, engage with writer's intentions, and consider context. This prepares them for GCSE-level analysis.",
    structure: [
      {
        label: 'Concept/Thesis',
        abbreviation: 'C',
        instruction:
          'Open with an analytical concept or a critical argument. This is not simply a point about the text but an interpretive claim about meaning, purpose, or effect.',
        example:
          'Shelley constructs the Creature as a vehicle for Enlightenment anxieties about the limits of scientific progress.',
      },
      {
        label: 'Textual Evidence',
        abbreviation: 'T',
        instruction:
          'Select precise textual evidence. Embed quotations fluently and choose words that are rich for analysis.',
        example:
          'The Creature\'s plea, "I ought to be thy Adam, but I am rather the fallen angel," directly invokes Milton\'s Paradise Lost.',
      },
      {
        label: 'Analysis',
        abbreviation: 'A',
        instruction:
          'Provide layered analysis. Explore multiple interpretations, discuss technique and form, and consider how context shapes meaning.',
        example:
          'The allusion to Paradise Lost positions the Creature as simultaneously innocent and damned, while the shift from "Adam" to "fallen angel" traces his trajectory from hopeful creation to vengeful outcast. The Biblical framework invites the reader to question whether Frankenstein, as creator, has failed in a divine responsibility.',
      },
      {
        label: 'Wider Significance',
        abbreviation: 'W',
        instruction:
          "Zoom out to the writer's purpose, contextual factors, alternative interpretations, or connections to other parts of the text.",
        example:
          'Shelley, writing in the aftermath of the French Revolution, uses this dynamic to warn against the abandonment of moral responsibility in the pursuit of knowledge, a theme that resonates with contemporary debates about technology and ethics.',
      },
    ],
    sentenceStarters: [
      'Perhaps more significantly,',
      'It could be argued that...',
      'Through the lens of ___,',
      "The writer's deliberate choice to...",
      'A contemporary audience might have interpreted this as...',
      "This destabilises the reader's assumption that...",
      'Structurally, this moment functions as...',
    ],
    transitionPhrases: [
      'This tension between ___ and ___ underpins...',
      'Significantly,',
      'What complicates this reading is...',
      'An alternative interpretation might suggest...',
      'This duality is echoed in...',
    ],
    modelParagraph:
      'Stevenson uses the Gothic motif of the double to externalise Victorian anxieties about moral hypocrisy. Jekyll\'s confession that Hyde gave him "a solution of the bonds of obligation" reveals the allure of transgression: the metaphor of "bonds" frames social respectability as imprisonment, while "solution" puns on both a chemical formula and a release from constraint. This dual meaning is characteristic of a novella obsessed with surfaces and depths, where language itself becomes a site of concealment. Writing during an era of intense public moralising, Stevenson exposes the fragility of the respectable self, suggesting that the boundary between civilisation and savagery is not a wall but a membrane.',
  },
]

// ---- 1B. Sentence Starters per Assessment Objective ----

export const aoSentenceStarters: AOSentenceStarters[] = [
  // AO1 - Identify and interpret information
  {
    ao: 'AO1',
    aoLabel: 'Identify and interpret explicit and implicit information and ideas',
    yearGroup: 'Y7',
    starters: [
      'The text tells us that...',
      'We can see from the text that...',
      'This shows that...',
      'The character feels ___ because...',
      'An example of this is when...',
    ],
  },
  {
    ao: 'AO1',
    aoLabel: 'Identify and interpret explicit and implicit information and ideas',
    yearGroup: 'Y8',
    starters: [
      'The writer implies that...',
      'It is evident from ___ that...',
      'This suggests...',
      'The reader can infer that...',
      'A close reading reveals...',
    ],
  },
  {
    ao: 'AO1',
    aoLabel: 'Identify and interpret explicit and implicit information and ideas',
    yearGroup: 'Y9',
    starters: [
      'On the surface, the text presents..., however a deeper reading suggests...',
      'The implicit meaning here is...',
      'What is left unsaid is as significant as what is stated...',
      'The reader is positioned to understand that...',
      'This operates on both a literal and symbolic level...',
    ],
  },

  // AO2 - Explain, comment on, analyse language, form, structure
  {
    ao: 'AO2',
    aoLabel: 'Explain, comment on, and analyse how writers use language and structure',
    yearGroup: 'Y7',
    starters: [
      'The writer uses ___ to show...',
      'The word "___" means...',
      'This technique makes the reader feel...',
      'The effect of this is...',
      'An example of ___ is...',
    ],
  },
  {
    ao: 'AO2',
    aoLabel: 'Explain, comment on, and analyse how writers use language and structure',
    yearGroup: 'Y8',
    starters: [
      'The writer employs ___ to create an atmosphere of...',
      'The connotations of "___" suggest...',
      'Structurally, this moment is significant because...',
      'The shift in tone from ___ to ___ reflects...',
      'The repetition of "___" emphasises...',
    ],
  },
  {
    ao: 'AO2',
    aoLabel: 'Explain, comment on, and analyse how writers use language and structure',
    yearGroup: 'Y9',
    starters: [
      'The semantic field of ___ constructs...',
      'Through the juxtaposition of ___ and ___, the writer destabilises...',
      'The fragmented syntax mirrors...',
      "Formally, the writer's choice to ___ serves to...",
      'The sibilance in "___" creates an auditory quality that...',
      'This structural pivot functions as...',
    ],
  },

  // AO3 - Compare texts
  {
    ao: 'AO3',
    aoLabel: "Compare writers' ideas and perspectives across texts",
    yearGroup: 'Y7',
    starters: [
      'Both writers think that...',
      'However, Writer A says ___ while Writer B says...',
      'The texts are similar because...',
      'One difference is that...',
      'Unlike Source A, Source B...',
    ],
  },
  {
    ao: 'AO3',
    aoLabel: "Compare writers' ideas and perspectives across texts",
    yearGroup: 'Y8',
    starters: [
      'While both writers address ___, their approaches differ in...',
      'Writer A adopts a ___ tone, whereas Writer B is more...',
      'A key point of divergence is...',
      'Both texts share the perspective that..., yet they present it through...',
      'The contrasting use of ___ in each text reveals...',
    ],
  },
  {
    ao: 'AO3',
    aoLabel: "Compare writers' ideas and perspectives across texts",
    yearGroup: 'Y9',
    starters: [
      'The ideological underpinnings of each text diverge significantly...',
      'Where Source A frames ___ as ___, Source B challenges this by...',
      'The rhetorical strategies employed by each writer reveal contrasting assumptions about...',
      'Both texts are products of their historical moment, yet...',
      'A synthesis of both perspectives suggests...',
    ],
  },

  // AO4 - Evaluate critically
  {
    ao: 'AO4',
    aoLabel: 'Evaluate texts critically and support with textual references',
    yearGroup: 'Y7',
    starters: [
      'I agree/disagree with this statement because...',
      'The writer is successful in ___ because...',
      'One way the writer achieves this is...',
      'I think the most effective technique is ___ because...',
      'Overall, the writer manages to...',
    ],
  },
  {
    ao: 'AO4',
    aoLabel: 'Evaluate texts critically and support with textual references',
    yearGroup: 'Y8',
    starters: [
      'To a large extent, the writer succeeds in ___ because...',
      'While the statement has some validity, it overlooks...',
      "The writer's most compelling strategy is...",
      'A reader might find this particularly effective because...',
      'The strength of this argument lies in...',
    ],
  },
  {
    ao: 'AO4',
    aoLabel: 'Evaluate texts critically and support with textual references',
    yearGroup: 'Y9',
    starters: [
      'This statement is partially valid; however, it fails to account for...',
      'A nuanced reading would suggest that the writer both ___ and ___, creating...',
      "The efficacy of the writer's approach depends on the reader's willingness to...",
      'While ostensibly ___, the text subtly undermines this through...',
      'The critical lens of ___ offers a more productive reading of this passage...',
    ],
  },

  // AO5 - Communicate clearly, effectively, and imaginatively
  {
    ao: 'AO5',
    aoLabel: 'Communicate clearly, effectively, and imaginatively',
    yearGroup: 'Y7',
    starters: [
      'Suddenly,',
      'Without warning,',
      'As the sun began to set,',
      'Heart pounding,',
      'In the distance,',
    ],
  },
  {
    ao: 'AO5',
    aoLabel: 'Communicate clearly, effectively, and imaginatively',
    yearGroup: 'Y8',
    starters: [
      'The silence was suffocating.',
      'It was the kind of place that...',
      'Every instinct screamed at her to...',
      'Beneath the surface of normality,',
      'Time seemed to fracture.',
    ],
  },
  {
    ao: 'AO5',
    aoLabel: 'Communicate clearly, effectively, and imaginatively',
    yearGroup: 'Y9',
    starters: [
      'Memory is an unreliable narrator.',
      'The city breathed.',
      'She had always understood that truth was not singular.',
      'What followed was not silence but the absence of sound.',
      'They told themselves it was coincidence.',
    ],
  },

  // AO6 - Technical accuracy (SPAG)
  {
    ao: 'AO6',
    aoLabel: 'Technical accuracy in spelling, punctuation, and grammar',
    yearGroup: 'Y7',
    starters: [
      'Check: Does every sentence start with a capital letter?',
      'Check: Have I used full stops at the end of every sentence?',
      'Check: Have I used commas in lists?',
      'Check: Have I spelled key words correctly?',
      'Check: Does my writing make sense when I read it aloud?',
    ],
  },
  {
    ao: 'AO6',
    aoLabel: 'Technical accuracy in spelling, punctuation, and grammar',
    yearGroup: 'Y8',
    starters: [
      'Check: Have I varied my sentence openings?',
      'Check: Have I used semicolons to link related ideas?',
      'Check: Have I used apostrophes correctly for possession and contraction?',
      'Check: Is my paragraphing logical and effective?',
      'Check: Have I avoided comma splicing?',
    ],
  },
  {
    ao: 'AO6',
    aoLabel: 'Technical accuracy in spelling, punctuation, and grammar',
    yearGroup: 'Y9',
    starters: [
      'Check: Have I used colons and semicolons with precision?',
      'Check: Does my syntax create deliberate effects (e.g. short sentences for impact)?',
      'Check: Have I used parenthetical dashes or brackets for embedded clauses?',
      'Check: Is my subject-verb agreement consistent throughout?',
      'Check: Have I deployed a range of punctuation for effect?',
    ],
  },
]

// ---- 1C. Word Banks per Unit/Topic ----

export const unitWordBanks: UnitWordBank[] = [
  // Y7 Units
  {
    unitId: 'y7-t1-intro-fiction',
    unitTitle: 'Introduction to Fiction',
    yearGroup: 'Y7',
    categories: [
      {
        category: 'Narrative Techniques',
        words: [
          {
            term: 'narrator',
            definition: 'The voice telling the story',
            exampleSentence: 'The first-person narrator shares their personal perspective.',
          },
          {
            term: 'protagonist',
            definition: 'The main character in a story',
            exampleSentence: 'The protagonist faces a difficult moral choice.',
          },
          {
            term: 'antagonist',
            definition: 'The character who opposes the protagonist',
            exampleSentence: 'The antagonist creates obstacles for the hero.',
          },
          {
            term: 'setting',
            definition: 'Where and when a story takes place',
            exampleSentence: "The gloomy setting reflects the character's mood.",
          },
          {
            term: 'atmosphere',
            definition: 'The mood or feeling created in a text',
            exampleSentence: 'The writer creates a tense atmosphere through short sentences.',
          },
          {
            term: 'foreshadowing',
            definition: 'Hints about what will happen later in the story',
            exampleSentence: 'The dark clouds foreshadow the coming danger.',
          },
        ],
      },
      {
        category: 'Language Techniques',
        words: [
          {
            term: 'simile',
            definition: 'A comparison using "like" or "as"',
            exampleSentence: 'The moon was like a silver coin.',
          },
          {
            term: 'metaphor',
            definition: 'Describing something as if it is something else',
            exampleSentence: 'The classroom was a zoo.',
          },
          {
            term: 'personification',
            definition: 'Giving human qualities to non-human things',
            exampleSentence: 'The wind whispered through the trees.',
          },
          {
            term: 'alliteration',
            definition: 'Repeating the same sound at the start of words close together',
            exampleSentence: 'The slippery snake slithered silently.',
          },
          {
            term: 'onomatopoeia',
            definition: 'Words that sound like what they describe',
            exampleSentence: 'The door creaked open.',
          },
        ],
      },
      {
        category: 'Analytical Vocabulary',
        words: [
          { term: 'suggests', definition: 'Implies or hints at a meaning' },
          { term: 'conveys', definition: 'Communicates or expresses' },
          { term: 'emphasises', definition: 'Draws attention to or stresses' },
          { term: 'creates', definition: 'Produces a particular effect' },
          { term: 'portrays', definition: 'Represents or depicts' },
          { term: 'reveals', definition: 'Shows something previously hidden' },
        ],
      },
    ],
  },
  {
    unitId: 'y7-t1-poetry-intro',
    unitTitle: 'Introduction to Poetry',
    yearGroup: 'Y7',
    categories: [
      {
        category: 'Poetic Form and Structure',
        words: [
          {
            term: 'stanza',
            definition: 'A group of lines in a poem, like a paragraph',
            exampleSentence: 'The poem is divided into four stanzas of equal length.',
          },
          {
            term: 'rhyme scheme',
            definition: 'The pattern of rhyming words at the end of lines',
            exampleSentence: 'The ABAB rhyme scheme creates a regular, predictable rhythm.',
          },
          {
            term: 'rhythm',
            definition: 'The pattern of stressed and unstressed syllables',
            exampleSentence: 'The steady rhythm mirrors a heartbeat.',
          },
          {
            term: 'enjambment',
            definition: 'When a sentence runs on past the end of a line',
            exampleSentence: 'The enjambment creates a sense of urgency.',
          },
          {
            term: 'caesura',
            definition: 'A pause in the middle of a line of poetry',
            exampleSentence: 'The caesura forces the reader to pause and reflect.',
          },
          {
            term: 'free verse',
            definition: 'Poetry without a regular rhyme or rhythm pattern',
            exampleSentence: 'The poet uses free verse to reflect the chaos of war.',
          },
        ],
      },
      {
        category: 'Sound Devices',
        words: [
          {
            term: 'sibilance',
            definition: 'Repetition of "s" sounds',
            exampleSentence:
              'The sibilance in "the snake slithered silently" creates a sinister tone.',
          },
          {
            term: 'assonance',
            definition: 'Repetition of vowel sounds within words',
            exampleSentence: 'The long "o" sounds in "moaning" and "groaning" slow the pace.',
          },
          {
            term: 'plosive',
            definition: 'Harsh, explosive sounds like b, d, p, t',
            exampleSentence: 'The plosive sounds convey anger and force.',
          },
        ],
      },
    ],
  },
  {
    unitId: 'y7-t2-myths-legends',
    unitTitle: 'Myths, Legends, and Traditional Tales',
    yearGroup: 'Y7',
    categories: [
      {
        category: 'Genre Vocabulary',
        words: [
          {
            term: 'myth',
            definition: 'A traditional story that explains natural phenomena or beliefs',
          },
          {
            term: 'legend',
            definition: 'A traditional story sometimes based on historical events',
          },
          {
            term: 'archetype',
            definition: 'A typical character, image, or situation that recurs across stories',
          },
          { term: 'quest', definition: 'A long journey undertaken to achieve a goal' },
          { term: 'moral', definition: 'The lesson or message of a story' },
          {
            term: 'allegory',
            definition: 'A story with a hidden meaning, usually a moral or political one',
          },
        ],
      },
      {
        category: 'Character Types',
        words: [
          { term: 'hero', definition: 'A character admired for courage and noble qualities' },
          { term: 'trickster', definition: 'A character who uses cunning to achieve their goals' },
          { term: 'mentor', definition: 'A wise figure who guides the hero' },
          { term: 'villain', definition: 'A character whose evil actions drive the plot' },
        ],
      },
    ],
  },
  {
    unitId: 'y7-t2-creative-writing',
    unitTitle: 'Creative Writing: Descriptive and Narrative',
    yearGroup: 'Y7',
    categories: [
      {
        category: 'Descriptive Vocabulary',
        words: [
          { term: 'vivid', definition: 'Producing powerful images in the mind' },
          { term: 'atmospheric', definition: 'Creating a strong mood or feeling' },
          { term: 'sensory language', definition: 'Words that appeal to the five senses' },
          { term: 'precise', definition: 'Exact and carefully chosen' },
          { term: 'evocative', definition: 'Bringing strong images or feelings to mind' },
        ],
      },
      {
        category: 'Structural Techniques',
        words: [
          { term: 'cyclical structure', definition: 'When a text ends where it began' },
          { term: 'flashback', definition: 'A scene set in an earlier time than the main story' },
          { term: 'in medias res', definition: 'Starting a story in the middle of the action' },
          { term: 'cliffhanger', definition: 'An ending that leaves the reader in suspense' },
          { term: 'zoom in', definition: 'Moving from a wide overview to a close detail' },
        ],
      },
    ],
  },
  {
    unitId: 'y7-t3-shakespeare-intro',
    unitTitle: 'Introduction to Shakespeare',
    yearGroup: 'Y7',
    categories: [
      {
        category: 'Shakespearean Language',
        words: [
          { term: 'thou/thee', definition: 'You (informal singular)' },
          { term: 'hath', definition: 'Has' },
          { term: 'doth', definition: 'Does' },
          { term: 'wherefore', definition: 'Why (not "where")' },
          { term: 'hence', definition: 'From here / for this reason' },
          { term: 'prithee', definition: 'I pray thee; please' },
        ],
      },
      {
        category: 'Drama Techniques',
        words: [
          {
            term: 'soliloquy',
            definition: 'A speech where a character speaks their thoughts aloud, alone on stage',
          },
          {
            term: 'aside',
            definition: 'A remark spoken to the audience that other characters cannot hear',
          },
          {
            term: 'dramatic irony',
            definition: 'When the audience knows something that the characters do not',
          },
          {
            term: 'stage directions',
            definition: 'Instructions in a script about actions, movement, or tone',
          },
          { term: 'monologue', definition: 'A long speech by one character' },
        ],
      },
    ],
  },

  // Y8 Units
  {
    unitId: 'y8-t1-gothic-fiction',
    unitTitle: 'Gothic Fiction',
    yearGroup: 'Y8',
    categories: [
      {
        category: 'Gothic Conventions',
        words: [
          { term: 'sublime', definition: 'Awe-inspiring beauty or terror in nature' },
          { term: 'uncanny', definition: 'Strangely familiar; unsettling in an inexplicable way' },
          { term: 'doppelganger', definition: 'A ghostly double of a living person' },
          { term: 'transgression', definition: 'Going beyond accepted boundaries or rules' },
          {
            term: 'pathetic fallacy',
            definition: 'Using weather or nature to reflect mood or emotions',
          },
          { term: 'the supernatural', definition: 'Events or beings beyond natural explanation' },
          { term: 'isolation', definition: 'Being separated or cut off from others' },
        ],
      },
      {
        category: 'Atmospheric Vocabulary',
        words: [
          { term: 'foreboding', definition: 'A feeling that something bad will happen' },
          {
            term: 'ominous',
            definition: 'Giving the impression that something bad is going to happen',
          },
          { term: 'oppressive', definition: 'Weighing heavily on the mind; suffocating' },
          { term: 'desolate', definition: 'Empty, bleak, and lifeless' },
          { term: 'sinister', definition: 'Giving the impression of evil or harm' },
          { term: 'malevolent', definition: 'Having or showing a wish to do evil' },
        ],
      },
    ],
  },
  {
    unitId: 'y8-t1-non-fiction',
    unitTitle: 'Non-Fiction: Persuasion and Argument',
    yearGroup: 'Y8',
    categories: [
      {
        category: 'Rhetorical Techniques',
        words: [
          {
            term: 'rhetoric',
            definition: 'The art of effective or persuasive speaking or writing',
          },
          {
            term: 'anaphora',
            definition:
              'The deliberate repetition of a word or phrase at the start of successive clauses',
          },
          { term: 'tricolon', definition: 'A group of three parallel words, phrases, or clauses' },
          { term: 'hyperbole', definition: 'Deliberate exaggeration for emphasis or effect' },
          {
            term: 'rhetorical question',
            definition: 'A question asked for effect, not expecting an answer',
          },
          { term: 'emotive language', definition: 'Words chosen to provoke an emotional response' },
          { term: 'counterargument', definition: 'An argument opposing the main position' },
        ],
      },
      {
        category: 'Connectives for Argument',
        words: [
          { term: 'consequently', definition: 'As a result' },
          { term: 'furthermore', definition: 'In addition; moreover' },
          { term: 'nevertheless', definition: 'In spite of that; however' },
          { term: 'conversely', definition: 'In an opposite way' },
          { term: 'notwithstanding', definition: 'Despite; in spite of' },
        ],
      },
    ],
  },
  {
    unitId: 'y8-t2-novel-study',
    unitTitle: 'Novel Study (Prose Text)',
    yearGroup: 'Y8',
    categories: [
      {
        category: 'Narrative Analysis',
        words: [
          {
            term: 'omniscient narrator',
            definition: "An all-knowing narrator who can see into every character's mind",
          },
          {
            term: 'unreliable narrator',
            definition: 'A narrator whose credibility is compromised',
          },
          { term: 'motif', definition: 'A recurring element that has symbolic significance' },
          {
            term: 'subtext',
            definition: 'The underlying meaning beneath the surface of dialogue or action',
          },
          {
            term: 'characterisation',
            definition: 'The way a writer creates and develops characters',
          },
          {
            term: 'bildungsroman',
            definition: "A novel about a character's growth from youth to maturity",
          },
        ],
      },
    ],
  },
  {
    unitId: 'y8-t2-poetry-comparison',
    unitTitle: 'Poetry Comparison',
    yearGroup: 'Y8',
    categories: [
      {
        category: 'Comparison Vocabulary',
        words: [
          { term: 'similarly', definition: 'In a like manner' },
          { term: 'conversely', definition: 'In a contrasting way' },
          { term: 'whereas', definition: 'In contrast to the fact that' },
          { term: 'juxtaposition', definition: 'Placing two things side by side for contrast' },
          { term: 'diverge', definition: 'To differ or move apart' },
          { term: 'complement', definition: 'To complete or enhance by providing what is lacking' },
        ],
      },
      {
        category: 'Thematic Vocabulary',
        words: [
          {
            term: 'identity',
            definition: 'The qualities and beliefs that make a person who they are',
          },
          { term: 'conflict', definition: 'A struggle between opposing forces' },
          { term: 'power', definition: 'The ability to influence or control' },
          {
            term: 'nature',
            definition: "The physical world; also used to mean a person's character",
          },
          { term: 'mortality', definition: 'The state of being subject to death' },
        ],
      },
    ],
  },
  {
    unitId: 'y8-t3-shakespeare-depth',
    unitTitle: 'Shakespeare in Depth',
    yearGroup: 'Y8',
    categories: [
      {
        category: 'Contextual Terms',
        words: [
          {
            term: 'Elizabethan',
            definition: 'Relating to the reign of Queen Elizabeth I (1558-1603)',
          },
          { term: 'Jacobean', definition: 'Relating to the reign of King James I (1603-1625)' },
          {
            term: 'patriarchy',
            definition: 'A system where men hold power and women are largely excluded',
          },
          { term: 'divine right', definition: 'The belief that a monarch is chosen by God' },
          {
            term: 'Great Chain of Being',
            definition: 'The medieval/Renaissance belief in a God-ordained hierarchy',
          },
          { term: 'hubris', definition: 'Excessive pride that leads to downfall' },
          { term: 'hamartia', definition: 'A fatal flaw in a tragic hero' },
          {
            term: 'catharsis',
            definition: 'The release of emotions experienced by the audience of a tragedy',
          },
        ],
      },
    ],
  },

  // Y9 Units
  {
    unitId: 'y9-t1-19c-fiction',
    unitTitle: 'Nineteenth-Century Fiction',
    yearGroup: 'Y9',
    categories: [
      {
        category: 'Victorian Context',
        words: [
          {
            term: 'industrialisation',
            definition: 'The transformation of society from agrarian to manufacturing-based',
          },
          {
            term: 'social class',
            definition: 'A hierarchical division of society based on wealth and status',
          },
          { term: 'philanthropy', definition: 'Charitable acts for the benefit of others' },
          {
            term: 'empire',
            definition: 'An extensive group of territories under a single authority',
          },
          {
            term: 'Darwinism',
            definition: 'The theory of evolution by natural selection; "survival of the fittest"',
          },
          { term: 'didactic', definition: 'Intended to teach, particularly a moral lesson' },
          {
            term: 'social mobility',
            definition: 'The ability to move between different social classes',
          },
        ],
      },
      {
        category: 'Advanced Analytical Vocabulary',
        words: [
          { term: 'microcosm', definition: 'A small representation of something much larger' },
          { term: 'paradigm', definition: 'A typical example or pattern' },
          { term: 'subvert', definition: 'To undermine or challenge expectations' },
          { term: 'dichotomy', definition: 'A division into two contrasting parts' },
          { term: 'ambivalence', definition: 'Having mixed feelings about something' },
          { term: 'polemic', definition: 'A strong verbal or written attack on something' },
        ],
      },
    ],
  },
  {
    unitId: 'y9-t1-media-non-fiction',
    unitTitle: 'Media and Non-Fiction: Critical Literacy',
    yearGroup: 'Y9',
    categories: [
      {
        category: 'Media Literacy',
        words: [
          { term: 'bias', definition: 'Prejudice in favour of or against something' },
          {
            term: 'propaganda',
            definition: 'Information used to promote a particular cause or viewpoint',
          },
          { term: 'objectivity', definition: 'Presenting facts without personal feelings or bias' },
          { term: 'subjectivity', definition: 'Based on personal feelings and opinions' },
          {
            term: 'representation',
            definition: 'How groups, events, or ideas are depicted in media',
          },
          {
            term: 'discourse',
            definition:
              'Written or spoken communication; also the way a topic is discussed in society',
          },
        ],
      },
    ],
  },
  {
    unitId: 'y9-t2-modern-drama',
    unitTitle: 'Modern Drama',
    yearGroup: 'Y9',
    categories: [
      {
        category: 'Dramatic Terms',
        words: [
          {
            term: 'stage directions',
            definition: 'Instructions about movement, tone, and setting in a play script',
          },
          {
            term: 'subtext',
            definition: 'The meaning beneath what is said; what a character really means',
          },
          {
            term: 'dramatic tension',
            definition: 'The feeling of suspense or anticipation created for the audience',
          },
          { term: 'fourth wall', definition: 'The imaginary wall between actors and audience' },
          {
            term: 'naturalism',
            definition: 'A style of drama that aims to represent life realistically',
          },
          {
            term: 'didactic theatre',
            definition: 'Theatre designed to teach the audience a lesson',
          },
          {
            term: 'well-made play',
            definition:
              'A play following a conventional structure of exposition, complication, and resolution',
          },
        ],
      },
    ],
  },
  {
    unitId: 'y9-t2-world-literature',
    unitTitle: 'World Literature and Diverse Voices',
    yearGroup: 'Y9',
    categories: [
      {
        category: 'Critical Perspectives',
        words: [
          {
            term: 'postcolonial',
            definition: 'Relating to the period after colonial rule; examining its effects',
          },
          { term: 'diaspora', definition: 'The dispersion of a people from their homeland' },
          { term: 'othering', definition: 'Treating a person or group as fundamentally different' },
          {
            term: 'cultural identity',
            definition: 'The sense of belonging to a particular cultural group',
          },
          { term: 'hegemony', definition: 'Dominance of one group over others' },
          {
            term: 'marginalisation',
            definition: 'The process of pushing a group to the edges of society',
          },
        ],
      },
    ],
  },
  {
    unitId: 'y9-t3-gcse-preparation',
    unitTitle: 'GCSE/IGCSE Preparation and Transition',
    yearGroup: 'Y9',
    categories: [
      {
        category: 'Exam-Ready Vocabulary',
        words: [
          { term: 'evaluate', definition: 'To judge the value or effectiveness of something' },
          { term: 'synthesise', definition: 'To combine information from different sources' },
          { term: 'critique', definition: 'A detailed analysis and assessment' },
          { term: 'substantiate', definition: 'To provide evidence to support a claim' },
          { term: 'nuanced', definition: 'Showing subtle differences or distinctions' },
          { term: 'cogent', definition: 'Clear, logical, and convincing' },
        ],
      },
    ],
  },
]

// ---- 1D. Visual Organisers ----

export const visualOrganisers: VisualOrganiser[] = [
  {
    id: 'vo-mind-map',
    name: 'Mind Map / Spider Diagram',
    description:
      'Central topic with branches for key ideas. Each branch can have sub-branches for evidence and analysis. Colour-code branches by theme or character.',
    bestFor: ['brainstorming', 'revision', 'character analysis', 'theme mapping'],
    yearGroups: ['Y7', 'Y8', 'Y9'],
    structure:
      'Central node (topic/question) with 4-6 main branches (key ideas). Each branch has 2-3 sub-branches (evidence/quotations). Colour-coded by theme.',
  },
  {
    id: 'vo-venn-diagram',
    name: 'Venn Diagram',
    description:
      'Two overlapping circles for comparing texts, characters, or themes. The overlap section captures shared features.',
    bestFor: ['text comparison', 'character comparison', 'AO3 tasks'],
    yearGroups: ['Y7', 'Y8', 'Y9'],
    structure:
      'Two overlapping circles. Left circle: Text/Character A unique features. Right circle: Text/Character B unique features. Overlap: shared features.',
  },
  {
    id: 'vo-flow-chart',
    name: 'Plot Flow Chart',
    description:
      'Linear sequence showing the progression of events in a narrative, with space for structural features (flashbacks, shifts, climax) to be annotated.',
    bestFor: ['plot tracking', 'structural analysis', 'sequencing events'],
    yearGroups: ['Y7', 'Y8'],
    structure:
      'Linear boxes connected by arrows: Opening > Rising Action > Climax > Falling Action > Resolution. Annotation boxes below for structural features.',
  },
  {
    id: 'vo-tracking-grid',
    name: 'Character/Theme Tracking Grid',
    description:
      'Grid with chapters/scenes across the top and characters/themes down the side. Students fill in key moments and quotations in each cell.',
    bestFor: ['novel study', 'character development', 'theme tracking across a text'],
    yearGroups: ['Y8', 'Y9'],
    structure:
      'Rows: characters or themes. Columns: chapters, acts, or key scenes. Cells: key quotation + brief note on significance.',
  },
  {
    id: 'vo-pee-grid',
    name: 'PEE/PEEL Planning Grid',
    description:
      'A structured grid with labelled columns for Point, Evidence, Explain (and Link for Y8+). Students fill in one row per paragraph before writing.',
    bestFor: ['essay planning', 'analytical writing preparation', 'structured responses'],
    yearGroups: ['Y7', 'Y8'],
    structure:
      'Columns: Point | Evidence (Quotation) | Explain (Technique + Effect) | Link (for PEEL). One row per planned paragraph.',
  },
  {
    id: 'vo-argument-map',
    name: 'Argument/Counter-Argument Map',
    description:
      'A T-chart or diamond ranking for organising arguments and counterarguments. Useful for persuasive writing and evaluation tasks.',
    bestFor: ['persuasive writing', 'debate preparation', 'AO4 evaluation', 'non-fiction analysis'],
    yearGroups: ['Y8', 'Y9'],
    structure:
      'T-chart: left column for arguments (with evidence), right column for counterarguments. Or diamond ranking for prioritising points by strength.',
  },
  {
    id: 'vo-context-timeline',
    name: 'Context Timeline',
    description:
      'A horizontal timeline placing the text in its historical context. Key historical events above the line, connections to the text below.',
    bestFor: ['contextual understanding', '19th-century texts', 'Shakespeare', 'AO3 context'],
    yearGroups: ['Y8', 'Y9'],
    structure:
      'Horizontal line with dates. Above: historical events. Below: how each event connects to/influences the text. Colour-coded by type (social, political, literary).',
  },
  {
    id: 'vo-language-analysis-grid',
    name: 'Language Analysis Close-Reading Grid',
    description:
      'A grid for zooming into individual words and phrases. Columns for quotation, technique, word-level analysis (connotations), and effect on reader.',
    bestFor: ['AO2 language analysis', 'extract-based questions', 'close reading'],
    yearGroups: ['Y7', 'Y8', 'Y9'],
    structure:
      'Columns: Quotation | Technique | Word-level analysis (connotations) | Effect on reader/audience. One row per quotation.',
  },
]

// ========================== 2. DIFFERENTIATION STRATEGIES PER UNIT ==========================

export const unitDifferentiation: UnitDifferentiation[] = [
  // ── Y7 UNITS ──

  // Y7 Term 1: Introduction to Fiction
  {
    unitId: 'y7-t1-intro-fiction',
    unitTitle: 'Introduction to Fiction',
    yearGroup: 'Y7',
    termNumber: 1,
    support: {
      description:
        'Heavily scaffolded approach with pre-structured frames, word banks, and guided reading activities.',
      scaffolding: [
        'Provide PEE paragraph frames with sentence starters pre-filled',
        'Pre-highlight key quotations in extracts for students to use',
        'Supply a glossary of key terms with definitions and visual cues',
        'Use colour-coded text annotation with a key provided',
        'Provide writing frames with gap-fill structures for analytical paragraphs',
      ],
      expectedOutcomes: [
        'Identify basic narrative features (character, setting, plot)',
        'Use provided quotations to support a simple point',
        'Write a PEE paragraph with scaffolding support',
        'Identify at least two language techniques with teacher guidance',
      ],
      activities: [
        'Matching technique names to definitions card sort',
        'Highlight and label exercise on a pre-selected extract',
        'Guided PEE paragraph writing using a writing frame',
        'Comprehension questions moving from literal to simple inference',
      ],
      resources: [
        'Word bank cards',
        'PEE writing frame',
        'Pre-highlighted extract',
        'Technique matching cards',
      ],
    },
    core: {
      description:
        'Students work independently with some scaffolding available. They select their own evidence and structure their analysis.',
      scaffolding: [
        'Provide sentence starters as prompts rather than full frames',
        'Model one paragraph and ask students to write a second independently',
        'Offer a checklist for self-assessment after writing',
      ],
      expectedOutcomes: [
        'Independently identify and analyse language techniques',
        'Write PEE paragraphs with embedded quotations',
        'Explain the effect of techniques on the reader',
        "Begin to comment on writer's purpose",
      ],
      activities: [
        'Independent extract annotation for techniques and effects',
        'Write two PEE paragraphs with self-selected evidence',
        'Peer assessment using PEE success criteria',
        'Short comparison between two character descriptions',
      ],
      resources: ['Sentence starter prompt sheet', 'Self-assessment checklist', 'Extract booklet'],
    },
    extension: {
      description:
        "Students work without scaffolding, developing conceptual analysis and exploring writer's intentions.",
      scaffolding: [
        'No sentence starters provided; students develop their own analytical voice',
        'Challenge prompts to push towards deeper analysis',
      ],
      expectedOutcomes: [
        'Analyse language with reference to connotation and multiple meanings',
        'Comment on structure and its effects on the reader',
        "Begin to consider context and writer's purpose",
        'Sustain a coherent argument across multiple paragraphs',
      ],
      activities: [
        'Write a multi-paragraph analytical response without scaffolding',
        "Compare writer's methods across two extracts",
        "Evaluate the effectiveness of a writer's technique choices",
        'Creative rewriting: change the narrative perspective and analyse the effect',
      ],
      resources: [
        'Challenge question cards',
        'Exam-style question bank',
        'Critical reading extracts',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Provide a bilingual glossary of key terms',
          'Use visual cues and images alongside all vocabulary',
          'Pre-teach 5-8 key words before each lesson with pronunciation practice',
          'Allow use of translation tools for comprehension tasks',
          'Pair with a strong English speaker for collaborative tasks',
          'Provide simplified extracts alongside original texts',
        ],
        resources: [
          'Bilingual word bank',
          'Visual vocabulary cards',
          'Simplified extract versions',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Provide sentence starters with grammatical structures modelled',
          'Allow extended response in home language first, then translate key ideas',
          'Focus on high-frequency analytical vocabulary (suggests, implies, conveys)',
          'Use cloze activities to practise sentence construction',
          'Provide model paragraphs to deconstruct and imitate',
        ],
        resources: [
          'Sentence construction frames',
          'Cloze activity sheets',
          'Model paragraph exemplars',
        ],
      },
      {
        stage: 'advanced',
        strategies: [
          'Focus on nuanced vocabulary and idiomatic expressions',
          'Explicitly teach academic register and formal writing conventions',
          'Encourage exploration of how culture shapes reading of texts',
          'Target common L1 interference errors in written feedback',
        ],
        resources: ['Academic phrase bank', 'Register comparison sheet'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Use dyslexia-friendly fonts (e.g. OpenDyslexic, Comic Sans) on resources',
          'Print on cream or pastel-coloured paper',
          'Provide audio recordings of key extracts',
          'Allow extra time for reading and writing tasks',
          'Use a reading ruler or coloured overlay',
          'Break written tasks into smaller, numbered steps',
        ],
        resources: [
          'Audio extract recordings',
          'Coloured overlay set',
          'Dyslexia-friendly resource versions',
        ],
      },
      {
        need: 'ADHD',
        adaptations: [
          'Break lessons into short, varied activities (no longer than 10-12 minutes each)',
          'Provide a clear lesson structure visible on the board throughout',
          'Use a timer for focused writing bursts (5-8 minutes)',
          'Allow movement breaks between activities',
          'Seat near the front to minimise distractions',
          'Provide a task checklist so students can tick off completed steps',
        ],
        resources: ['Visual timer', 'Task checklist template', 'Lesson structure slide'],
      },
      {
        need: 'ASD (Autism Spectrum)',
        adaptations: [
          'Provide a clear, predictable lesson structure every lesson',
          'Give explicit instructions; avoid ambiguous or figurative task directions',
          'Pre-warn of any changes to routine',
          'Offer choice in how to present work (written, verbal, visual)',
          'Provide a "social stories" guide for collaborative work expectations',
          'Use concrete examples before abstract concepts',
        ],
        resources: ['Lesson routine card', 'Task instruction cards', 'Social story for group work'],
      },
      {
        need: 'Visual impairment',
        adaptations: [
          'Provide enlarged text versions of all resources (minimum 14pt)',
          'Ensure high contrast on all slides and handouts',
          'Describe visual content verbally',
          'Seat student where they can see the board clearly',
          'Provide digital versions of texts compatible with screen readers',
        ],
        resources: [
          'Enlarged text resources',
          'Digital text files',
          'High-contrast slide templates',
        ],
      },
    ],
  },

  // Y7 Term 1: Introduction to Poetry
  {
    unitId: 'y7-t1-poetry-intro',
    unitTitle: 'Introduction to Poetry',
    yearGroup: 'Y7',
    termNumber: 1,
    support: {
      description:
        'Guided approach with annotated model poems, structured response frames, and technique identification support.',
      scaffolding: [
        'Provide pre-annotated poems with techniques labelled',
        'Use a technique checklist for students to identify in poems',
        'Offer a "poetry toolkit" card with technique names, definitions, and examples',
        'Provide close-reading grids with partially completed rows',
        'Use read-aloud and listen activities before independent reading',
      ],
      expectedOutcomes: [
        'Identify basic poetic techniques (simile, metaphor, personification, rhyme)',
        'Comment on the effect of a technique with support',
        'Use a structured frame to write about a poem',
        'Understand the difference between a stanza and a line',
      ],
      activities: [
        'Technique treasure hunt in a poem',
        'Fill-in-the-blank analysis paragraph',
        'Match the technique to the example card sort',
        'Draw what the poem describes (visual response before written)',
      ],
      resources: [
        'Poetry toolkit card',
        'Technique matching cards',
        'Close-reading grid',
        'Drawing template',
      ],
    },
    core: {
      description:
        'Students independently annotate poems and write analytical paragraphs with access to prompt sheets.',
      scaffolding: [
        'Provide sentence starters for analysis',
        'Supply a list of key questions to ask about any poem',
        'Model annotation of one stanza; students continue independently',
      ],
      expectedOutcomes: [
        'Annotate a poem independently for technique and effect',
        'Write PEE paragraphs about a poem with embedded quotations',
        'Comment on how structure (stanzas, line length, enjambment) creates meaning',
        "Begin to consider the poet's intentions",
      ],
      activities: [
        'Independent poem annotation with margin notes',
        'Write two PEE paragraphs on a new poem',
        'Perform a poem and explain choices about pace and emphasis',
        'Create a "this poem in 5 words" summary and justify choices',
      ],
      resources: ['Annotation guide', 'Key questions prompt', 'Performance planning sheet'],
    },
    extension: {
      description:
        'Students explore multiple interpretations, consider context, and develop a personal critical voice.',
      scaffolding: [
        'Challenge cards with higher-order questions',
        'Encourage alternative/competing interpretations',
      ],
      expectedOutcomes: [
        'Analyse how form and structure contribute to meaning',
        'Offer alternative interpretations of key images or phrases',
        'Write a sustained analytical response across multiple paragraphs',
        'Make connections between poems or between a poem and its context',
      ],
      activities: [
        'Write a critical comparison of two poems on a shared theme',
        "Research the poet's context and explain how it shapes the poem",
        'Write their own poem inspired by the studied poem, with a commentary explaining their choices',
        'Debate: "Is this poem about ___ or about ___?" with textual evidence',
      ],
      resources: ['Challenge question cards', 'Poet biography sheets', 'Comparison planning frame'],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use poems with strong visual imagery that can be illustrated',
          'Provide side-by-side translations for key poems',
          'Focus on sensory language which is more accessible across languages',
          'Use audio recordings of poems read aloud clearly and slowly',
        ],
        resources: ['Illustrated poetry booklet', 'Audio recordings', 'Bilingual glossary'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach the language of analysis explicitly (the poet uses, this suggests, the effect is)',
          'Use cloze paragraphs to build analytical sentence construction',
          "Compare poetry from student's home culture with English poetry to build bridges",
        ],
        resources: ['Analytical language phrase bank', 'Cloze analysis activities'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore nuance, ambiguity, and multiple meanings in poetic language',
          'Encourage students to draw on multilingual perspectives in analysis',
          'Focus on connotation and register which may differ across cultures',
        ],
        resources: ['Connotation exploration worksheet', 'Cultural context discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide poems in large print with wide line spacing',
          'Allow students to listen to poems before reading independently',
          'Use colour-coding for different techniques in annotation',
          'Offer oral response options alongside written tasks',
        ],
        resources: ['Large print poem booklet', 'Audio poem files', 'Colour-coding guide'],
      },
      {
        need: 'Processing difficulties',
        adaptations: [
          'Pre-teach vocabulary before reading the poem',
          'Break the poem into stanza-by-stanza analysis rather than whole-poem tasks',
          'Allow extra processing time; do not cold-call for immediate responses',
          'Provide a "what to look for" checklist before annotation',
        ],
        resources: [
          'Vocabulary pre-teach cards',
          'Stanza analysis worksheets',
          'Annotation checklist',
        ],
      },
    ],
  },

  // Y7 Term 2: Myths, Legends, and Traditional Tales
  {
    unitId: 'y7-t2-myths-legends',
    unitTitle: 'Myths, Legends, and Traditional Tales',
    yearGroup: 'Y7',
    termNumber: 2,
    support: {
      description:
        'Story mapping, simplified retellings, and visual approaches to understanding narrative structure.',
      scaffolding: [
        'Provide story maps/comic strip templates for sequencing',
        'Use simplified retellings alongside original versions',
        'Supply character profile templates with guided questions',
        'Offer writing frames for retelling in own words',
      ],
      expectedOutcomes: [
        'Retell a myth or legend in sequence',
        'Identify the hero, villain, and moral of a story',
        'Use a story map to plan their own narrative',
        'Understand the concept of an archetype with examples',
      ],
      activities: [
        'Comic strip sequencing of a myth',
        'Character profile for the hero and villain',
        'Write a retelling of a myth using a writing frame',
        'Match archetypes to characters from studied myths',
      ],
      resources: [
        'Story map template',
        'Comic strip template',
        'Character profile frame',
        'Archetype matching cards',
      ],
    },
    core: {
      description:
        'Students analyse narrative structures and character functions, writing analytical and creative responses independently.',
      scaffolding: [
        'Provide analytical prompt questions rather than full frames',
        'Model one analytical response and students replicate for a new myth',
      ],
      expectedOutcomes: [
        'Analyse how myths use archetypes and narrative patterns',
        'Write a PEE response about characterisation in a myth',
        'Create their own myth following genre conventions',
        'Compare two myths from different cultures',
      ],
      activities: [
        "Analyse the hero's journey structure in a studied myth",
        'Write a PEE paragraph on how a character is presented',
        'Write an original myth incorporating studied conventions',
        'Venn diagram comparing myths from two cultures',
      ],
      resources: [
        "Hero's journey template",
        'Analytical prompt cards',
        'Creative writing planning sheet',
      ],
    },
    extension: {
      description:
        'Critical exploration of myth as cultural expression, including comparison across traditions and modern retellings.',
      scaffolding: ['Challenge prompts encouraging critical thinking about culture and power'],
      expectedOutcomes: [
        'Analyse how myths reflect the values and beliefs of their culture',
        'Compare myths across cultures to identify universal themes',
        'Evaluate how modern retellings adapt and subvert original myths',
        'Write an extended analytical essay on mythological archetypes',
      ],
      activities: [
        'Research project: compare a Greek myth with a myth from another tradition',
        'Analytical essay: how do myths reflect the values of their society?',
        'Create a modern retelling that subverts the original (e.g. villain as hero)',
        'Debate: are myths still relevant today?',
      ],
      resources: [
        'Research project brief',
        'Extended writing planning frame',
        'Critical thinking prompts',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          "Use myths from the student's home culture as entry points",
          'Provide heavily illustrated or graphic novel versions',
          'Allow oral retelling before written',
          'Use visual story maps with minimal text',
        ],
        resources: ['Graphic novel versions', 'Visual story map', 'Oral retelling rubric'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Encourage students to compare myths from their own culture with English myths',
          'Teach narrative vocabulary explicitly (quest, hero, moral, archetype)',
          'Provide sentence frames for comparative writing',
        ],
        resources: ['Comparative sentence frames', 'Narrative vocabulary list'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how translation affects the telling of myths',
          'Discuss cultural assumptions embedded in different mythological traditions',
          'Encourage writing that draws on multiple cultural traditions',
        ],
        resources: ['Cultural analysis discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio versions of myths',
          'Use graphic novel/illustrated versions as primary texts',
          'Allow creative responses (drama, art, oral storytelling) alongside written',
          'Reduce quantity of writing; focus on quality of ideas',
        ],
        resources: ['Audio myth recordings', 'Illustrated myth books', 'Response choice board'],
      },
      {
        need: 'ADHD',
        adaptations: [
          'Use short, action-packed myth extracts for analysis',
          'Include drama and active learning activities',
          'Break writing tasks into 5-minute timed bursts',
          'Allow doodling/sketching during listening activities',
        ],
        resources: ['Short extract booklet', 'Drama activity cards', 'Timer'],
      },
    ],
  },

  // Y7 Term 2: Creative Writing
  {
    unitId: 'y7-t2-creative-writing',
    unitTitle: 'Creative Writing: Descriptive and Narrative',
    yearGroup: 'Y7',
    termNumber: 2,
    support: {
      description:
        'Structured writing with image prompts, word banks, and step-by-step planning templates.',
      scaffolding: [
        'Provide image prompts with guided sensory detail questions',
        'Supply word banks organised by the five senses',
        'Offer story planning templates with section-by-section prompts',
        'Provide model openings for students to continue',
        'Use writing checklists with specific targets (e.g. include one simile)',
      ],
      expectedOutcomes: [
        'Write a descriptive paragraph using sensory language',
        'Plan a simple narrative with a beginning, middle, and end',
        'Include at least two language techniques in their writing',
        'Use paragraphs to organise their writing',
      ],
      activities: [
        'Describe an image using a five-senses grid',
        'Continue a model story opening',
        'Write a 200-word description using a word bank',
        'Plan a narrative using a storyboard template',
      ],
      resources: [
        'Image prompt pack',
        'Five-senses word bank',
        'Story planning template',
        'Writing checklist',
      ],
    },
    core: {
      description:
        'Students plan and write creative pieces independently, using a range of techniques for effect.',
      scaffolding: [
        'Provide a techniques checklist as a reminder rather than a requirement',
        'Model planning process but not writing itself',
        'Offer exemplar pieces for students to evaluate before writing their own',
      ],
      expectedOutcomes: [
        'Write a sustained descriptive or narrative piece (300-400 words)',
        'Use a range of language techniques deliberately for effect',
        'Vary sentence structures for impact (short sentences, compound, complex)',
        'Create an effective opening and ending',
      ],
      activities: [
        'Plan and write a descriptive piece based on a stimulus',
        'Write a narrative with a clear climax and resolution',
        'Edit and improve a first draft using a peer feedback sheet',
        'Experiment with narrative perspective (first vs third person)',
      ],
      resources: [
        'Stimulus pack',
        'Techniques reminder card',
        'Peer editing guide',
        'Exemplar extracts',
      ],
    },
    extension: {
      description:
        'Students develop a distinctive voice, experiment with form and structure, and write with conscious craft.',
      scaffolding: [
        'Provide mentor texts from published authors for inspiration and analysis',
        'Challenge students to use specific structural devices',
      ],
      expectedOutcomes: [
        'Write an extended creative piece with conscious control of craft',
        'Experiment with structural techniques (flashback, cyclical, in medias res)',
        'Develop a distinctive narrative voice or persona',
        'Write a reflective commentary on their own creative choices',
      ],
      activities: [
        'Write a piece that uses a non-chronological structure',
        "Analyse a published author's opening and write one in the same style",
        'Write a piece from the perspective of an unusual narrator (object, animal, etc.)',
        'Write a commentary explaining 3-5 deliberate creative choices',
      ],
      resources: ['Mentor text anthology', 'Commentary writing guide', 'Structural device cards'],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Allow students to plan in their home language before writing in English',
          'Provide a heavily supported word bank with example sentences',
          'Focus on descriptive writing before narrative (less complex language demands)',
          'Use images as stimuli rather than text-based prompts',
        ],
        resources: [
          'Bilingual planning template',
          'Visual stimulus pack',
          'Example sentence word bank',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          "Teach English descriptive conventions explicitly (show don't tell)",
          'Provide model sentences demonstrating technique use',
          'Focus on building vocabulary for sensory description',
          'Offer sentence-combining activities to develop complex sentences',
        ],
        resources: ["Show don't tell examples", 'Sentence combining worksheets'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Encourage students to bring stylistic influences from their home literature',
          'Focus on idiomatic English and natural-sounding prose',
          'Explore how different cultures value different narrative structures',
        ],
        resources: ['Idiomatic expressions guide', 'Cross-cultural narrative discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Allow use of speech-to-text software for drafting',
          'Focus marking on creative content rather than spelling',
          'Provide a personal word bank of frequently misspelled words',
          'Reduce word count expectations while maintaining quality expectations',
        ],
        resources: ['Speech-to-text guide', 'Personal spelling list template'],
      },
      {
        need: 'ADHD',
        adaptations: [
          'Use timed writing sprints (5-8 minutes) with short breaks',
          'Allow background music or white noise during writing',
          'Provide a visual planning template to maintain focus',
          'Set very specific, small targets (e.g. write one paragraph with a simile)',
        ],
        resources: ['Timer', 'Visual planning template', 'Micro-target cards'],
      },
    ],
  },

  // Y7 Term 3: Introduction to Shakespeare
  {
    unitId: 'y7-t3-shakespeare-intro',
    unitTitle: 'Introduction to Shakespeare',
    yearGroup: 'Y7',
    termNumber: 3,
    support: {
      description:
        'Modern English translations alongside original text, drama-based approaches, and visual character guides.',
      scaffolding: [
        'Provide side-by-side modern English translations',
        'Use animated or filmed versions before reading the text',
        'Supply character relationship diagrams',
        'Pre-teach key archaic vocabulary before each scene',
        'Use drama activities to make language physical and memorable',
      ],
      expectedOutcomes: [
        'Understand the basic plot and characters',
        'Translate key quotations into modern English',
        "Identify simple techniques (metaphor, simile) in Shakespeare's language",
        'Write a basic PEE paragraph about a character',
      ],
      activities: [
        'Act out a key scene using modern English paraphrase',
        'Create a character relationship diagram',
        'Match Shakespearean words to modern meanings',
        'Write a PEE paragraph using a provided quotation',
      ],
      resources: [
        'Modern English translation',
        'Character relationship diagram',
        'Vocabulary matching cards',
        'Film clips',
      ],
    },
    core: {
      description:
        'Students engage with the original text, analyse language, and write analytical responses about character and theme.',
      scaffolding: [
        'Provide a glossary for each scene rather than full translation',
        'Model close reading of one speech, then students practise independently',
      ],
      expectedOutcomes: [
        'Read and understand the original text with glossary support',
        'Analyse how Shakespeare uses language to present character and theme',
        "Write PEEL paragraphs about Shakespeare's use of language",
        "Begin to consider the play's relevance to a modern audience",
      ],
      activities: [
        'Annotate a soliloquy for language techniques and effects',
        'Hot-seat a character and answer questions in role',
        'Write a PEEL paragraph on how a character is presented in a key scene',
        'Debate a moral question raised by the play',
      ],
      resources: ['Scene glossary', 'Annotation guide for Shakespeare', 'Hot-seat question cards'],
    },
    extension: {
      description:
        'Students engage with context, alternative interpretations, and sustained analytical writing about Shakespeare.',
      scaffolding: ['Challenge questions encouraging contextual analysis and directorial choices'],
      expectedOutcomes: [
        'Analyse how context (Elizabethan/Jacobean) shapes meaning',
        'Compare different directorial interpretations of key scenes',
        'Write a sustained analytical response across multiple paragraphs',
        "Consider how Shakespeare's themes resonate with modern audiences",
      ],
      activities: [
        'Compare two film versions of the same scene and evaluate directorial choices',
        'Write an analytical essay exploring how context shapes a character',
        'Direct a scene: write notes justifying staging, tone, and delivery choices',
        'Research and present on an aspect of Elizabethan/Jacobean context',
      ],
      resources: [
        'Film comparison clips',
        "Director's notebook template",
        'Context research brief',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use film and visual versions as primary access to the story',
          'Provide plot summaries in modern English with key vocabulary glossed',
          'Focus on a small number of key speeches rather than the whole play',
          'Use drama activities that do not require fluent reading',
          'Allow responses about the plot and characters rather than close language analysis',
        ],
        resources: ['Film version', 'Plot summary booklet', 'Key speech extracts with glossary'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Provide parallel text (original and modern) for key scenes',
          'Teach the language of analysis explicitly using Shakespeare examples',
          'Use translation as a learning activity (translate a speech into modern English)',
        ],
        resources: ['Parallel text booklet', 'Translation activity sheets'],
      },
      {
        stage: 'advanced',
        strategies: [
          "Explore how Shakespeare's language creates effects that modern English cannot replicate",
          'Discuss universal themes that transcend language and culture',
          "Encourage comparison with dramatic traditions from the student's own culture",
        ],
        resources: ['Language comparison worksheet', 'Cross-cultural drama discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Prioritise audio and visual engagement with the text (film, audio, drama)',
          'Provide large print, well-spaced extracts of key speeches',
          'Allow oral analysis and verbal responses alongside written',
          'Use graphic organisers for essay planning',
        ],
        resources: [
          'Audio recordings of speeches',
          'Large print extracts',
          'Graphic organiser templates',
        ],
      },
      {
        need: 'ASD (Autism Spectrum)',
        adaptations: [
          'Explicitly teach figurative language - Shakespeare relies heavily on metaphor',
          'Provide character emotion guides with clear explanations of motivation',
          'Use visual aids for abstract concepts like ambition, jealousy, honour',
          'Prepare students for role-play/drama with clear expectations and opt-out options',
        ],
        resources: [
          'Figurative language guide',
          'Character motivation cards',
          'Drama participation choice board',
        ],
      },
    ],
  },

  // ── Y8 UNITS ──

  // Y8 Term 1: Gothic Fiction
  {
    unitId: 'y8-t1-gothic-fiction',
    unitTitle: 'Gothic Fiction',
    yearGroup: 'Y8',
    termNumber: 1,
    support: {
      description:
        'Genre conventions taught through visual and sensory approaches with structured analytical frames.',
      scaffolding: [
        'Provide a Gothic conventions checklist for identification in texts',
        'Supply atmospheric word banks sorted by mood (fear, isolation, decay)',
        'Use visual aids: Gothic art, film stills, photographs of Gothic architecture',
        'Offer PEEL writing frames with sentence starters tailored to Gothic analysis',
        'Pre-annotate key extracts highlighting techniques for students to explain',
      ],
      expectedOutcomes: [
        'Identify key Gothic conventions in a text',
        'Use atmospheric vocabulary in their own writing and analysis',
        'Write a scaffolded PEEL paragraph about how a writer creates atmosphere',
        'Understand pathetic fallacy and its purpose',
      ],
      activities: [
        'Gothic convention scavenger hunt in an extract',
        'Atmosphere word bank challenge: sort words by mood',
        'Guided PEEL paragraph on creating tension in a Gothic extract',
        'Create a Gothic setting description using a word bank',
      ],
      resources: [
        'Gothic conventions checklist',
        'Atmospheric word bank',
        'PEEL frame',
        'Gothic image gallery',
      ],
    },
    core: {
      description:
        'Students analyse Gothic texts independently, exploring how writers create atmosphere and suspense.',
      scaffolding: [
        'Provide prompt questions for analysis rather than full frames',
        'Model one close reading, then students apply to a new extract',
      ],
      expectedOutcomes: [
        'Analyse how writers use language, structure, and conventions to create Gothic atmosphere',
        'Write sustained PEEL paragraphs with embedded quotations',
        'Compare how two writers use the same Gothic convention',
        'Write their own Gothic narrative extract using studied conventions',
      ],
      activities: [
        'Close reading and annotation of a Gothic extract',
        'Write two PEEL paragraphs on how atmosphere is created',
        'Comparison of openings from two Gothic novels',
        'Write a Gothic narrative opening (300-400 words)',
      ],
      resources: ['Gothic extract anthology', 'Prompt question cards', 'Comparison planning grid'],
    },
    extension: {
      description:
        'Students explore the Gothic as a cultural and historical phenomenon, analysing subtext and subversion.',
      scaffolding: ['Challenge prompts linking texts to context and critical theory'],
      expectedOutcomes: [
        'Analyse how Gothic fiction reflects cultural anxieties (science, gender, empire)',
        'Write sustained, multi-paragraph analytical responses',
        'Evaluate how modern texts subvert or reinvent Gothic conventions',
        'Consider the Gothic from feminist, postcolonial, or psychoanalytic perspectives',
      ],
      activities: [
        'Research: how does the Gothic reflect Victorian anxieties?',
        'Extended essay: how does the writer use the Gothic to explore ___?',
        'Compare a classic Gothic text with a modern Gothic work',
        'Present a critical reading of a Gothic text from a specific perspective',
      ],
      resources: [
        'Critical perspectives guide',
        'Extended essay planning template',
        'Context research booklet',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use Gothic images and film clips to build understanding before reading',
          'Provide heavily glossed extracts with visual vocabulary support',
          'Focus on sensory and emotional vocabulary which transfers across languages',
          "Use the student's own cultural horror/supernatural traditions as a bridge",
        ],
        resources: [
          'Gothic image bank',
          'Glossed extracts',
          'Cultural comparison discussion cards',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach Gothic-specific vocabulary explicitly (uncanny, sublime, transgression)',
          'Provide model analytical sentences for imitation',
          'Use structured comparison frameworks for Gothic conventions across cultures',
        ],
        resources: [
          'Gothic vocabulary drill',
          'Model sentence bank',
          'Cross-cultural Gothic comparison grid',
        ],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how the Gothic is a distinctly Western genre and discuss parallels in other traditions',
          'Encourage analysis of how the Gothic "others" non-Western cultures',
          'Discuss connotations that may vary across cultural contexts',
        ],
        resources: ['Postcolonial Gothic reading list', 'Connotation discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Anxiety/emotional sensitivity',
        adaptations: [
          'Preview content and warn students about potentially disturbing material',
          'Offer alternative, less intense extracts that still demonstrate Gothic conventions',
          'Allow students to choose their own level of engagement with horror elements',
          'Provide quiet reflection time after reading intense passages',
        ],
        resources: ['Content preview notes', 'Alternative extract options', 'Reflection journal'],
      },
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio versions of key Gothic extracts',
          'Use colour-coded annotation for different Gothic conventions',
          'Allow oral analysis alongside written tasks',
          'Print extracts in dyslexia-friendly format',
        ],
        resources: [
          'Audio extracts',
          'Colour-coding system guide',
          'Dyslexia-friendly extract prints',
        ],
      },
    ],
  },

  // Y8 Term 1: Non-Fiction
  {
    unitId: 'y8-t1-non-fiction',
    unitTitle: 'Non-Fiction: Persuasion and Argument',
    yearGroup: 'Y8',
    termNumber: 1,
    support: {
      description:
        'Technique identification supported by acronyms (AFOREST), structured writing frames, and model texts.',
      scaffolding: [
        'Teach AFOREST (Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon) as a memorable device',
        'Provide writing frames for speeches and letters with labelled sections',
        'Supply simplified model texts with techniques already highlighted',
        'Offer sentence starters for each paragraph of an argument',
      ],
      expectedOutcomes: [
        'Identify persuasive techniques in a non-fiction text using AFOREST',
        'Write a structured letter or speech using a frame',
        'Use at least three persuasive techniques in their own writing',
        'Understand the difference between fact and opinion',
      ],
      activities: [
        'AFOREST technique hunt in a newspaper article',
        'Scaffolded speech writing using a frame',
        'Fact vs opinion sorting activity',
        'Write a short letter to the headteacher about a school issue',
      ],
      resources: [
        'AFOREST poster/card',
        'Speech writing frame',
        'Letter writing frame',
        'Fact/opinion sorting cards',
      ],
    },
    core: {
      description:
        'Students analyse and create persuasive texts independently, using a range of rhetorical strategies.',
      scaffolding: [
        'Provide a rhetorical techniques reference card rather than a frame',
        'Model analysis of one text, then students apply to a new text',
      ],
      expectedOutcomes: [
        'Analyse how writers use language and structure to persuade',
        'Write a persuasive text using a range of rhetorical devices',
        'Include counterarguments and refute them in their writing',
        'Evaluate the effectiveness of persuasive strategies',
      ],
      activities: [
        'Analyse a real speech for rhetorical techniques and their effects',
        'Write a 400-word persuasive article on a chosen topic',
        'Peer assessment of persuasive writing using success criteria',
        'Debate a topical issue using evidence and rhetorical strategies',
      ],
      resources: [
        'Rhetorical techniques reference card',
        'Real speech extracts',
        'Debate preparation sheet',
      ],
    },
    extension: {
      description:
        'Students critically evaluate persuasion in media and politics, exploring bias, manipulation, and ethical rhetoric.',
      scaffolding: ['Provide challenging source materials from real-world contexts'],
      expectedOutcomes: [
        'Critically analyse how bias and ideology shape non-fiction texts',
        'Compare how different sources present the same event or issue',
        'Write a sustained, nuanced argument considering multiple perspectives',
        'Evaluate the ethics of persuasive strategies',
      ],
      activities: [
        'Compare news coverage of the same event from different outlets',
        'Write an extended argument essay considering multiple viewpoints',
        'Analyse propaganda techniques in historical or contemporary sources',
        'Create a media literacy guide for younger students',
      ],
      resources: [
        'News comparison pack',
        'Propaganda analysis framework',
        'Extended writing planning grid',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use visual persuasion (advertisements, posters) before written texts',
          'Teach key rhetorical techniques using simple, clear examples',
          'Provide a bilingual glossary of argument connectives',
          'Allow oral persuasion tasks before written ones',
        ],
        resources: [
          'Advertisement analysis pack',
          'Visual persuasion examples',
          'Bilingual connectives list',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach formal register explicitly with before/after examples',
          'Provide sentence frames for argument and counterargument',
          'Compare persuasive conventions across languages and cultures',
        ],
        resources: ['Register comparison guide', 'Argument sentence frames'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how cultural context affects what is considered persuasive',
          "Discuss rhetorical traditions in the student's home culture",
          'Focus on idiomatic persuasive phrases and tone',
        ],
        resources: ['Cross-cultural rhetoric discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio recordings of non-fiction texts',
          'Use graphic organisers for argument planning',
          'Allow voice recording for first drafts of persuasive writing',
          'Reduce text length for analysis tasks while maintaining complexity',
        ],
        resources: ['Audio recordings', 'Graphic organisers', 'Voice recording guide'],
      },
      {
        need: 'ADHD',
        adaptations: [
          'Use debate and active discussion rather than extended reading',
          'Break writing tasks into clear, short stages',
          'Use real-world, relevant topics to maintain engagement',
          'Allow movement during debate activities',
        ],
        resources: ['Debate cards', 'Staged writing checklist', 'Topic choice board'],
      },
    ],
  },

  // Y8 Term 2: Novel Study
  {
    unitId: 'y8-t2-novel-study',
    unitTitle: 'Novel Study (Prose Text)',
    yearGroup: 'Y8',
    termNumber: 2,
    support: {
      description:
        'Chapter-by-chapter guided reading with comprehension support, character tracking grids, and structured analytical frames.',
      scaffolding: [
        'Provide chapter summaries to support comprehension',
        'Supply character tracking grids to fill in as reading progresses',
        'Pre-select key quotations for analytical tasks',
        'Use a reading journal with guided questions per chapter',
        'Offer PEEL frames for each analytical writing task',
      ],
      expectedOutcomes: [
        'Follow and retell the plot of the novel',
        'Track character development using a grid',
        'Write scaffolded PEEL paragraphs about character or theme',
        'Identify key themes with support',
      ],
      activities: [
        'Chapter-by-chapter reading journal',
        'Character tracking grid completion',
        'Guided PEEL paragraph on character presentation',
        'Theme identification: match quotations to themes',
      ],
      resources: [
        'Chapter summary booklet',
        'Character tracking grid',
        'PEEL frame',
        'Theme matching cards',
      ],
    },
    core: {
      description:
        'Students read, analyse, and respond to the novel independently with prompt support.',
      scaffolding: [
        'Provide discussion questions rather than guided journal prompts',
        'Model close reading of one key extract, then students do another independently',
      ],
      expectedOutcomes: [
        'Write sustained analytical responses about character, theme, and language',
        'Select and embed their own evidence effectively',
        'Analyse how the writer uses structure across the novel',
        'Make connections between the text and its social/historical context',
      ],
      activities: [
        'Independent analytical writing on a key extract',
        'Character transformation essay',
        'Structural analysis: how does the opening/ending shape meaning?',
        'Context research and presentation on a relevant topic',
      ],
      resources: ['Discussion question cards', 'Extract booklet', 'Context research guide'],
    },
    extension: {
      description:
        'Students engage in critical and comparative analysis of the novel, considering authorial intent and multiple interpretations.',
      scaffolding: ['Challenge questions encouraging critical debate and alternative readings'],
      expectedOutcomes: [
        'Write a sustained critical essay on the novel',
        'Offer and evaluate competing interpretations of key moments',
        'Analyse the novel as a product of its time and a commentary on society',
        'Make intertextual connections with other literary works',
      ],
      activities: [
        'Extended essay on a thematic or character-based question',
        'Critical debate: competing interpretations of a key moment',
        'Book review for a literary magazine audience',
        'Comparative study: this novel and another text on a shared theme',
      ],
      resources: [
        'Extended essay brief',
        'Critical debate preparation cards',
        'Comparative essay planning grid',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Provide chapter summaries in advance to support comprehension',
          'Use audio version alongside reading for listening support',
          'Pre-teach 8-10 key vocabulary items per chapter',
          'Allow mixed-language annotations',
        ],
        resources: ['Chapter summaries', 'Audiobook', 'Vocabulary pre-teach lists'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Provide a reading journal with comprehension and analytical questions',
          'Teach connectives and cohesive devices for extended writing',
          'Use collaborative discussion before individual writing',
        ],
        resources: ['Reading journal template', 'Connectives reference card'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Focus on nuanced vocabulary and sophisticated sentence structures',
          'Explore how cultural background shapes interpretation',
          "Encourage comparison with literature from the student's own tradition",
        ],
        resources: ['Advanced vocabulary builder', 'Cultural interpretation prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audiobook version for following along',
          'Use dyslexia-friendly font in all printed extracts',
          'Allow oral responses and recording of ideas before writing',
          'Reduce the number of quotations required but maintain analytical depth',
        ],
        resources: [
          'Audiobook access',
          'Dyslexia-friendly extract prints',
          'Voice recording app guide',
        ],
      },
      {
        need: 'Processing difficulties',
        adaptations: [
          'Break reading into smaller chunks with comprehension checks',
          'Provide visual summaries (mind maps, timelines) after each section',
          'Allow extra time for reading and written tasks',
          'Use think-pair-share before independent analysis',
        ],
        resources: [
          'Visual summary templates',
          'Comprehension check questions',
          'Think-pair-share cards',
        ],
      },
    ],
  },

  // Y8 Term 2: Poetry Comparison
  {
    unitId: 'y8-t2-poetry-comparison',
    unitTitle: 'Poetry Comparison',
    yearGroup: 'Y8',
    termNumber: 2,
    support: {
      description:
        'Structured comparison frameworks, pre-annotated poems, and comparison sentence starters.',
      scaffolding: [
        'Provide pre-annotated poem pairs with techniques labelled',
        'Use Venn diagram templates for identifying similarities and differences',
        'Supply comparison sentence starters (Both poets... / However, Poet A...)',
        'Offer a structured comparison writing frame with labelled sections',
      ],
      expectedOutcomes: [
        'Identify similarities and differences between two poems',
        'Use a comparison frame to write about two poems together',
        'Comment on shared and contrasting techniques',
        'Understand the concept of thematic comparison',
      ],
      activities: [
        'Venn diagram: comparing two poems on a shared theme',
        'Scaffolded comparison paragraph using sentence starters',
        'Technique matching: find the same technique in both poems',
        'Complete a comparison grid for two poems',
      ],
      resources: [
        'Venn diagram template',
        'Comparison sentence starters',
        'Comparison writing frame',
        'Pre-annotated poems',
      ],
    },
    core: {
      description:
        'Students compare poems independently, analysing methods and effects with appropriate comparative language.',
      scaffolding: [
        'Provide a comparison connectives reference card',
        'Model one comparative paragraph, then students write the next independently',
      ],
      expectedOutcomes: [
        'Write comparative paragraphs using topic sentences that address both poems',
        'Analyse how different poets use language to explore the same theme',
        'Maintain a comparative thread throughout their writing',
        "Consider how context shapes each poet's approach",
      ],
      activities: [
        'Write a comparative essay on two poems (500+ words)',
        'Annotate poem pairs independently for comparison points',
        'Rank poems on a spectrum (e.g. most hopeful to most despairing) and justify',
        'Peer assessment of comparative writing',
      ],
      resources: ['Comparison connectives card', 'Annotated model essay', 'Poem ranking activity'],
    },
    extension: {
      description:
        'Students write sustained, critical comparisons exploring themes, context, and form across multiple poems.',
      scaffolding: ['Challenge questions requiring evaluation and alternative interpretations'],
      expectedOutcomes: [
        'Write a sustained comparative essay engaging with both poems equally',
        'Compare form and structure as well as language',
        'Offer alternative interpretations and evaluate which is most convincing',
        'Situate poems in their cultural and historical contexts',
      ],
      activities: [
        'Extended comparative essay with no scaffolding',
        'Choose their own poem pairing and justify the comparison',
        'Critical evaluation: which poem more effectively conveys its theme?',
        'Present a comparative analysis to the class',
      ],
      resources: [
        'Poetry anthology for independent selection',
        'Evaluation planning frame',
        'Presentation rubric',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Focus on the emotional impact of poems before technical analysis',
          "Use poems from the student's own language/culture as a comparison text",
          "Provide visual representations of each poem's key images",
          'Allow comparative responses in mixed language initially',
        ],
        resources: [
          'Emotion response chart',
          'Visual imagery cards',
          'Mixed-language response template',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach comparison language explicitly with examples',
          'Provide structured comparison frames that model syntax',
          'Use translation of a poem as an analytical activity',
        ],
        resources: ['Comparison language drill', 'Structured comparison frame'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how cultural context shapes the reading of poetry',
          'Discuss whether poetic effects can survive translation',
          'Encourage students to compare English poetry with poetry from their own tradition',
        ],
        resources: ['Translation and poetry discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio recordings of both poems',
          'Use colour-coding: one colour for each poem in comparative writing',
          'Reduce the number of comparison points required but maintain depth',
          'Allow oral comparison before written',
        ],
        resources: ['Audio recordings', 'Colour-coded writing template'],
      },
      {
        need: 'Working memory difficulties',
        adaptations: [
          'Place both poems side by side rather than on separate pages',
          'Provide a comparison checklist to keep track of points made',
          'Allow students to annotate poems during the writing task',
          'Use graphic organisers to plan before writing',
        ],
        resources: [
          'Side-by-side poem layout',
          'Comparison checklist',
          'Graphic organiser template',
        ],
      },
    ],
  },

  // Y8 Term 3: Shakespeare in Depth
  {
    unitId: 'y8-t3-shakespeare-depth',
    unitTitle: 'Shakespeare in Depth',
    yearGroup: 'Y8',
    termNumber: 3,
    support: {
      description:
        'Parallel text support, drama-based activities, and guided analytical writing with contextual scaffolding.',
      scaffolding: [
        'Provide parallel text (original and modern English)',
        'Use film clips before reading key scenes',
        'Supply character motivation charts showing how characters change',
        'Offer quotation banks organised by theme and character',
        'Provide PEEL frames for analytical writing with sentence starters',
      ],
      expectedOutcomes: [
        'Understand and retell key scenes in the play',
        'Identify how characters change over the course of the play',
        'Write scaffolded PEEL paragraphs using provided quotations',
        'Understand basic contextual information relevant to the play',
      ],
      activities: [
        'Scene summaries with key quotation identification',
        'Character motivation chart completion',
        'Guided PEEL paragraph on character or theme',
        'Role-play key scenes using simplified language where needed',
      ],
      resources: [
        'Parallel text booklet',
        'Character motivation chart',
        'Quotation bank',
        'PEEL frame',
      ],
    },
    core: {
      description:
        "Students analyse Shakespeare's language, structure, and context independently with targeted support.",
      scaffolding: [
        'Provide a quotation bank but no pre-selected evidence',
        'Model close reading of one speech, then students apply independently',
      ],
      expectedOutcomes: [
        "Analyse Shakespeare's language choices and their effects",
        'Write sustained PEEL responses with self-selected evidence',
        'Link analysis to relevant context',
        'Compare how the same theme is explored in different scenes',
      ],
      activities: [
        'Close reading and annotation of a soliloquy',
        'PEEL essay on how Shakespeare presents a character at a key moment',
        'Context research and application to a key scene',
        'Comparison of two speeches on a shared theme',
      ],
      resources: ['Quotation bank', 'Context information sheets', 'Comparison planning template'],
    },
    extension: {
      description:
        'Students write critical essays engaging deeply with language, context, multiple interpretations, and performance choices.',
      scaffolding: ['Challenge questions on alternative critical readings and directorial vision'],
      expectedOutcomes: [
        'Write a critical essay engaging with alternative interpretations',
        'Analyse how context shapes meaning at a sophisticated level',
        'Evaluate how performance choices affect audience reception',
        'Make connections between the play and other literary works or historical events',
      ],
      activities: [
        'Extended essay on a character or thematic question',
        'Directorial notes: how would you stage a key scene and why?',
        'Critical comparison of two interpretations (academic or performance-based)',
        'Research and present on a contextual topic relevant to the play',
      ],
      resources: [
        'Extended essay brief',
        "Director's notebook template",
        'Critical reading extracts',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use film versions as the primary text with original text extracts',
          'Provide scene-by-scene summaries with visual aids',
          'Focus on understanding character and plot before language analysis',
          'Use drama and physical activities to make language memorable',
        ],
        resources: [
          'Film version with subtitles',
          'Visual scene summaries',
          'Drama activity cards',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Provide glossed extracts of key speeches for close reading',
          'Teach analytical vocabulary through Shakespeare examples',
          'Use translation activities as a pathway to understanding',
        ],
        resources: ['Glossed speech extracts', 'Analytical vocabulary builder'],
      },
      {
        stage: 'advanced',
        strategies: [
          "Explore Shakespeare's wordplay and ambiguity in depth",
          'Compare English Renaissance drama with dramatic traditions from other cultures',
          'Discuss how translations of Shakespeare alter meaning and effect',
        ],
        resources: ['Wordplay and ambiguity guide', 'Cross-cultural drama comparison prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Prioritise audio and dramatic engagement over independent reading',
          'Provide extracts in large, well-spaced print with glossary alongside',
          'Allow oral responses for analytical tasks',
          'Use graphic organisers for essay planning',
        ],
        resources: ['Audio recordings', 'Large print extracts', 'Graphic organiser templates'],
      },
      {
        need: 'ASD (Autism Spectrum)',
        adaptations: [
          'Explicitly explain character motivations and emotions',
          'Provide a "social understanding" guide for complex character interactions',
          'Use visual scales for character emotions throughout the play',
          'Offer clear structures and expectations for any group or drama work',
        ],
        resources: [
          'Character emotion guide',
          'Social understanding notes',
          'Drama expectations card',
        ],
      },
    ],
  },

  // ── Y9 UNITS ──

  // Y9 Term 1: Nineteenth-Century Fiction
  {
    unitId: 'y9-t1-19c-fiction',
    unitTitle: 'Nineteenth-Century Fiction',
    yearGroup: 'Y9',
    termNumber: 1,
    support: {
      description:
        'Contextual pre-teaching, glossed extracts, and guided analytical frameworks for challenging 19th-century texts.',
      scaffolding: [
        'Pre-teach Victorian context and key concepts before reading',
        'Provide glossed extracts with archaic vocabulary explained',
        'Supply analytical paragraph frames (PEEL) with context sentence starters',
        'Use visual timelines and maps to situate texts historically and geographically',
        'Offer simplified versions of challenging extracts alongside originals',
      ],
      expectedOutcomes: [
        'Understand the main ideas and plot of 19th-century extracts with support',
        'Identify how writers use language to present character and setting',
        'Write scaffolded analytical paragraphs linking text to context',
        'Understand key features of 19th-century prose style',
      ],
      activities: [
        'Context quiz and timeline activity before reading',
        'Guided close reading of a glossed extract',
        'PEEL paragraph using provided quotation and context link',
        'Character presentation analysis using a structured grid',
      ],
      resources: [
        'Context timeline',
        'Glossed extract booklet',
        'PEEL frame with context sentence starters',
        'Character grid',
      ],
    },
    core: {
      description:
        'Students analyse 19th-century texts independently, engaging with language, structure, and context.',
      scaffolding: [
        'Provide context information sheets for reference during writing',
        'Model one analysis then students apply to a new extract',
      ],
      expectedOutcomes: [
        'Analyse how 19th-century writers use language and structure',
        'Write sustained analytical responses with relevant context',
        'Compare how different writers present similar themes',
        'Use subject-specific vocabulary accurately (omniscient narrator, didactic, etc.)',
      ],
      activities: [
        'Independent close reading and annotation of a 19th-century extract',
        'Analytical essay on how a writer presents a theme or character',
        'Comparison of two 19th-century extracts on a shared theme',
        "Context-rich analysis: how does context shape the writer's choices?",
      ],
      resources: ['Context reference sheets', 'Extract anthology', 'Comparison planning grid'],
    },
    extension: {
      description:
        'Students engage critically with 19th-century literature, exploring ideology, narrative form, and socio-political commentary.',
      scaffolding: ['Challenge prompts on critical perspectives and ideological readings'],
      expectedOutcomes: [
        'Write critical essays engaging with multiple interpretations',
        'Analyse how 19th-century texts reflect and challenge their society',
        'Evaluate the effectiveness of narrative techniques (unreliable narrator, multiple perspectives)',
        'Make sophisticated connections between text and context',
      ],
      activities: [
        'Extended critical essay on a 19th-century text',
        'Research project: how a specific social issue is reflected in literature',
        'Debate: was the writer radical or conservative?',
        'Creative critical writing: a modern response to a 19th-century text',
      ],
      resources: [
        'Critical perspectives guide',
        'Extended essay planning template',
        'Research project brief',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Provide heavily glossed and simplified extract versions',
          'Use visual and audio resources to build context understanding',
          'Focus on a small number of key extracts rather than full texts',
          'Allow comprehension responses before analytical ones',
        ],
        resources: ['Simplified glossed extracts', 'Visual context resources', 'Audio recordings'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach archaic vocabulary explicitly as a pre-reading activity',
          'Provide sentence frames for context-rich analysis',
          'Use comparison with 19th-century texts from other cultures and traditions',
        ],
        resources: ['Archaic vocabulary drill', 'Context analysis sentence frames'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how 19th-century British literature reflects imperial attitudes',
          'Encourage postcolonial readings of canonical texts',
          'Discuss how translation and cultural distance affect interpretation',
        ],
        resources: ['Postcolonial reading guide', 'Imperial context discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio recordings of key extracts (read clearly and slowly)',
          'Use glossed and annotated versions with larger print',
          'Allow oral analysis alongside written tasks',
          'Focus on fewer quotations analysed in greater depth',
        ],
        resources: ['Audio extracts', 'Annotated large print extracts', 'Oral response framework'],
      },
      {
        need: 'Processing difficulties',
        adaptations: [
          'Pre-teach vocabulary and context before reading',
          'Break extracts into smaller sections with comprehension checks',
          'Provide visual summaries of plot and character',
          'Allow extended time for all reading and writing tasks',
        ],
        resources: [
          'Vocabulary pre-teach cards',
          'Section-by-section reading guides',
          'Visual summaries',
        ],
      },
    ],
  },

  // Y9 Term 1: Media and Non-Fiction
  {
    unitId: 'y9-t1-media-non-fiction',
    unitTitle: 'Media and Non-Fiction: Critical Literacy',
    yearGroup: 'Y9',
    termNumber: 1,
    support: {
      description:
        'Accessible real-world texts with guided analysis frameworks and media literacy scaffolding.',
      scaffolding: [
        'Provide a bias detection checklist for analysing media texts',
        'Supply a rhetorical analysis framework with labelled sections',
        'Use visual examples (advertisements, infographics) before complex written texts',
        'Offer sentence starters for evaluative and comparative writing',
        'Pre-annotate some texts to model analysis process',
      ],
      expectedOutcomes: [
        'Identify bias and perspective in a media text',
        'Use a framework to analyse how a writer persuades',
        'Write a structured response about a non-fiction text',
        'Understand the difference between objectivity and subjectivity',
      ],
      activities: [
        'Bias detection checklist on a news article',
        'Guided analysis of an advertisement',
        'Structured comparison of two news reports on the same event',
        'Write a letter to the editor on a topical issue using a frame',
      ],
      resources: [
        'Bias detection checklist',
        'Advertisement analysis frame',
        'News comparison pack',
        'Letter frame',
      ],
    },
    core: {
      description:
        'Students critically analyse non-fiction and media texts independently, evaluating purpose, audience, and method.',
      scaffolding: [
        'Provide analytical prompts rather than full frames',
        'Model one analysis then students apply independently',
      ],
      expectedOutcomes: [
        'Critically analyse how non-fiction texts construct meaning and persuade',
        'Compare how different media sources present the same issue',
        'Write evaluative responses assessing effectiveness of media strategies',
        'Produce their own non-fiction writing for a specific purpose and audience',
      ],
      activities: [
        'Critical analysis of a speech or opinion piece',
        'Media comparison essay on coverage of a current issue',
        'Write an opinion column or blog post on a chosen topic',
        'Evaluate the reliability of different types of sources',
      ],
      resources: [
        'Speech/article anthology',
        'Comparison planning grid',
        'Source reliability guide',
      ],
    },
    extension: {
      description:
        'Students engage with complex media theory, propaganda analysis, and critical discourse analysis.',
      scaffolding: ['Provide challenging real-world texts and critical frameworks'],
      expectedOutcomes: [
        'Analyse how power structures shape media representation',
        'Write sustained critical analyses of complex non-fiction texts',
        'Evaluate the ethical dimensions of persuasion and propaganda',
        'Produce sophisticated non-fiction writing for diverse audiences',
      ],
      activities: [
        'Extended essay on media representation of a social group',
        'Propaganda analysis: historical and contemporary examples',
        'Create a media literacy resource for a younger audience',
        'Critical discourse analysis of a political speech',
      ],
      resources: [
        'Critical discourse analysis guide',
        'Propaganda examples pack',
        'Extended essay brief',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use visual media (advertisements, infographics, images) as primary texts',
          'Provide simplified news articles with key vocabulary glossed',
          "Compare media from the student's home country with English media",
          'Allow responses about purpose and audience before technique analysis',
        ],
        resources: [
          'Visual media pack',
          'Simplified news articles',
          'Cross-cultural media comparison cards',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach evaluative and analytical language explicitly',
          'Provide sentence frames for comparative analysis',
          'Discuss how media conventions differ across cultures',
        ],
        resources: ['Evaluative language builder', 'Comparison sentence frames'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how English-language media represents non-Western cultures',
          'Encourage critical analysis from a multicultural perspective',
          'Discuss media literacy as a global skill with different challenges in different contexts',
        ],
        resources: ['Global media literacy discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio or video versions of texts where possible',
          'Use visual analysis (advertisements, infographics) to build skills before text analysis',
          'Allow voice-recorded responses for analysis tasks',
          'Print texts in dyslexia-friendly format',
        ],
        resources: [
          'Audio/video resources',
          'Visual analysis pack',
          'Dyslexia-friendly text prints',
        ],
      },
      {
        need: 'ADHD',
        adaptations: [
          'Use short, high-interest texts (social media posts, advertisements)',
          'Include debate and discussion activities to maintain engagement',
          'Break analysis tasks into clear, short steps',
          'Allow choice in topic for extended writing',
        ],
        resources: ['Short text pack', 'Debate cards', 'Step-by-step analysis guide'],
      },
    ],
  },

  // Y9 Term 2: Modern Drama
  {
    unitId: 'y9-t2-modern-drama',
    unitTitle: 'Modern Drama',
    yearGroup: 'Y9',
    termNumber: 2,
    support: {
      description:
        'Plot and character support, guided analysis of stage directions, and scaffolded analytical writing.',
      scaffolding: [
        'Provide act/scene summaries with key events and quotations',
        'Supply character relationship diagrams updated as the play progresses',
        'Use film/theatrical recordings alongside reading the script',
        'Offer guided analytical frames for writing about drama',
        'Pre-teach dramatic terminology before each act',
      ],
      expectedOutcomes: [
        'Understand plot, character, and key themes of the play',
        'Analyse how stage directions contribute to meaning',
        'Write scaffolded analytical paragraphs about character and theme',
        'Understand how the playwright communicates ideas to the audience',
      ],
      activities: [
        'Act/scene summary and key quotation identification',
        'Character relationship diagram updates',
        'Guided analysis of stage directions in a key scene',
        'PEEL paragraph on how a character is presented',
      ],
      resources: [
        'Scene summary booklet',
        'Character relationship diagram',
        'Stage direction analysis frame',
        'PEEL frame',
      ],
    },
    core: {
      description:
        'Students analyse the play independently, exploring how the playwright uses dramatic techniques to convey meaning.',
      scaffolding: [
        'Provide discussion prompts rather than full frames',
        'Model analysis of one scene, then students apply to another',
      ],
      expectedOutcomes: [
        'Analyse how the playwright uses language, structure, and dramatic techniques',
        'Write sustained analytical responses about character, theme, and context',
        'Consider the play as a performance text (audience, staging, direction)',
        "Link analysis to the playwright's purpose and context",
      ],
      activities: [
        'Close reading and analysis of a key scene',
        'Essay on how the playwright presents a theme or character',
        'Performance analysis: how does staging affect meaning?',
        'Context research and application to the play',
      ],
      resources: ['Discussion prompt cards', 'Extract booklet', 'Performance analysis guide'],
    },
    extension: {
      description:
        'Students critically evaluate the play, exploring alternative interpretations, political context, and dramatic form.',
      scaffolding: ['Challenge questions on political readings and dramatic theory'],
      expectedOutcomes: [
        "Write critical essays evaluating the play's themes and techniques",
        'Analyse the play as a political or social text',
        'Compare different productions and evaluate their effectiveness',
        'Engage with dramatic theory (Brechtian, naturalism, Theatre of the Absurd)',
      ],
      activities: [
        'Extended critical essay on a thematic or political question',
        'Compare two productions of the same play',
        "Research and present on the play's original reception and context",
        "Write director's notes for a reimagined production",
      ],
      resources: [
        'Critical essay brief',
        'Production comparison materials',
        'Dramatic theory overview',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Use a filmed production as primary access to the play',
          'Provide simplified scene summaries with visual character guides',
          'Focus on understanding plot and character before language analysis',
          'Use drama activities that build physical understanding of relationships',
        ],
        resources: ['Filmed production', 'Visual scene summaries', 'Drama activity cards'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Teach the language of drama analysis explicitly',
          'Provide sentence frames for writing about dramatic techniques',
          "Compare dramatic conventions in the student's home culture",
        ],
        resources: ['Drama analysis vocabulary builder', 'Sentence frames for drama analysis'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Explore how the play addresses themes that resonate across cultures',
          'Encourage critical responses drawing on multicultural perspectives',
          'Discuss how performance traditions vary globally',
        ],
        resources: ['Cross-cultural drama discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio/video versions of the play',
          'Use large print, well-spaced scripts',
          'Allow oral analysis and recorded responses',
          'Focus on key scenes rather than the entire play for close analysis',
        ],
        resources: ['Audio/video production', 'Large print script', 'Key scene extracts'],
      },
      {
        need: 'ASD (Autism Spectrum)',
        adaptations: [
          'Explicitly explain character motivations, subtext, and irony',
          'Provide a character emotion/motivation guide for each act',
          'Use visual aids for abstract themes and concepts',
          'Offer clear structures for any group or performance work',
        ],
        resources: [
          'Character motivation guide',
          'Abstract concept visual aids',
          'Group work expectations card',
        ],
      },
    ],
  },

  // Y9 Term 2: World Literature and Diverse Voices
  {
    unitId: 'y9-t2-world-literature',
    unitTitle: 'World Literature and Diverse Voices',
    yearGroup: 'Y9',
    termNumber: 2,
    support: {
      description:
        'Accessible texts with cultural context support, visual resources, and guided analytical frameworks.',
      scaffolding: [
        'Provide cultural context fact sheets for each text studied',
        'Supply visual maps and timelines for geographical and historical context',
        'Use pre-annotated extracts with cultural references explained',
        'Offer analytical frames that include prompts for cultural context',
        'Pair texts with visual or audio resources from the same culture',
      ],
      expectedOutcomes: [
        'Understand the cultural context of texts from diverse traditions',
        'Identify key themes in world literature texts',
        'Write scaffolded analytical paragraphs linking text to cultural context',
        'Appreciate the value of diverse literary voices',
      ],
      activities: [
        'Cultural context fact file creation',
        'Guided close reading of an annotated extract',
        'PEEL paragraph linking a text to its cultural context',
        'Thematic comparison using a simple frame',
      ],
      resources: [
        'Cultural context fact sheets',
        'Visual context resources',
        'Annotated extracts',
        'PEEL frame',
      ],
    },
    core: {
      description:
        'Students independently analyse texts from diverse traditions, exploring themes of identity, belonging, and cultural difference.',
      scaffolding: [
        'Provide discussion prompts and critical thinking questions',
        'Model cultural analysis on one text, then students apply to another',
      ],
      expectedOutcomes: [
        'Analyse how writers from diverse backgrounds explore themes of identity and belonging',
        'Write sustained analytical responses connecting text, theme, and context',
        'Compare how different cultural traditions approach similar themes',
        'Reflect on how their own cultural perspective shapes their reading',
      ],
      activities: [
        'Independent analysis of a text from a non-Western tradition',
        'Comparative essay: how do two texts explore identity differently?',
        'Reflective writing: how does my own background shape my reading?',
        'Group discussion: what do these texts teach us about different perspectives?',
      ],
      resources: [
        'Discussion prompt cards',
        'Comparative planning grid',
        'Reflective writing guide',
      ],
    },
    extension: {
      description:
        'Students engage critically with postcolonial and multicultural literary theory, questioning canon formation and representation.',
      scaffolding: ['Challenge questions on canon, representation, and literary value'],
      expectedOutcomes: [
        'Write critical essays on representation and identity in literature',
        'Question why certain voices are marginalised in literary traditions',
        'Analyse how translation affects meaning and reception',
        'Engage with concepts like postcolonialism, diaspora, and cultural hybridity',
      ],
      activities: [
        'Extended essay on how a text explores cultural identity',
        'Debate: should the literary canon be expanded or replaced?',
        'Research project on a literary tradition from a non-Western culture',
        'Write a creative response inspired by a studied text from a different tradition',
      ],
      resources: ['Extended essay brief', 'Canon debate materials', 'Research project guide'],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          "Use texts from the student's own cultural tradition as starting points",
          'Provide bilingual resources where possible',
          'Focus on universal themes (family, identity, belonging) as entry points',
          'Use visual and audio resources to build cultural understanding',
        ],
        resources: ['Multilingual text options', 'Visual cultural resources', 'Audio recordings'],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Encourage students to make connections between texts and their own cultural experience',
          'Teach comparative and analytical language explicitly',
          'Discuss how translation shapes meaning and what is lost or gained',
        ],
        resources: ['Comparative language builder', 'Translation discussion prompts'],
      },
      {
        stage: 'advanced',
        strategies: [
          'Position students as cultural experts who can enrich class discussion',
          'Encourage original critical perspectives informed by multicultural knowledge',
          'Explore how English-language literature engages with or appropriates other traditions',
        ],
        resources: ['Critical perspectives discussion prompts'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Provide audio recordings of texts',
          'Use shorter extracts with clear cultural context support',
          'Allow oral responses and creative alternatives to extended writing',
          'Print all resources in dyslexia-friendly format',
        ],
        resources: ['Audio recordings', 'Short extract pack', 'Dyslexia-friendly prints'],
      },
      {
        need: 'Processing difficulties',
        adaptations: [
          'Pre-teach cultural context and vocabulary before reading',
          'Break texts into smaller sections with comprehension checks',
          'Provide visual summaries and mind maps',
          'Allow extended processing time',
        ],
        resources: ['Pre-teaching materials', 'Visual summaries', 'Comprehension check questions'],
      },
    ],
  },

  // Y9 Term 3: GCSE/IGCSE Preparation
  {
    unitId: 'y9-t3-gcse-preparation',
    unitTitle: 'GCSE/IGCSE Preparation and Transition',
    yearGroup: 'Y9',
    termNumber: 3,
    support: {
      description:
        'Exam-skills focused scaffolding with practice questions, model responses, and technique revision.',
      scaffolding: [
        'Provide exam technique revision cards for each question type',
        'Supply model responses at different grades with annotations',
        'Offer structured planning frames for each exam question type',
        'Use mark scheme checklists in student-friendly language',
        'Break exam papers into individual questions for focused practice',
      ],
      expectedOutcomes: [
        'Understand the format and requirements of GCSE/IGCSE English exams',
        'Practise answering exam-style questions with scaffolding',
        'Use a planning frame to organise responses under timed conditions',
        'Self-assess using simplified mark scheme criteria',
      ],
      activities: [
        'Exam technique revision carousel',
        'Scaffolded practice on individual exam questions',
        'Grade a model response using a mark scheme checklist',
        'Timed paragraph practice (one PEEL in 8 minutes)',
      ],
      resources: [
        'Exam technique cards',
        'Model response booklet',
        'Planning frames per question type',
        'Mark scheme checklist',
      ],
    },
    core: {
      description:
        'Students practise exam-style questions independently, developing time management and exam technique.',
      scaffolding: [
        'Provide a revision checklist of skills and techniques',
        'Model timing and planning for one question, then students practise independently',
      ],
      expectedOutcomes: [
        'Complete exam-style questions independently under timed conditions',
        'Plan, write, and review responses within time limits',
        'Self-assess and improve their own work using mark schemes',
        'Identify their strengths and areas for improvement across assessment objectives',
      ],
      activities: [
        'Full exam-style question practice under timed conditions',
        'Self-assessment using mark scheme criteria',
        'Revision planning: identify gaps and create a revision schedule',
        'Peer assessment and feedback on timed responses',
      ],
      resources: [
        'Exam question bank',
        'Mark scheme booklet',
        'Revision planning template',
        'Peer assessment guide',
      ],
    },
    extension: {
      description:
        'Students refine exam technique for the highest grades, focusing on sophistication, originality, and critical thinking.',
      scaffolding: [
        'Provide grade 8/9 exemplar responses for analysis',
        'Challenge students to develop personal critical voices',
      ],
      expectedOutcomes: [
        'Write sophisticated, original responses that demonstrate conceptual understanding',
        'Develop a personal critical voice and analytical style',
        'Achieve consistency across all assessment objectives',
        'Self-direct their revision effectively, targeting specific weaknesses',
      ],
      activities: [
        'Analyse grade 8/9 exemplars: what makes them exceptional?',
        'Write a response aiming for the highest grade with self-commentary',
        'Peer-teach a skill or technique to a classmate',
        'Create revision resources (flashcards, guides) for a specific area',
      ],
      resources: [
        'Grade 8/9 exemplar pack',
        'Self-commentary guide',
        'Peer-teaching planning sheet',
      ],
    },
    ealAdaptations: [
      {
        stage: 'beginner',
        strategies: [
          'Provide exam rubrics and instructions in simplified English with visual aids',
          'Focus on one question type at a time with extended practice',
          'Allow bilingual planning before writing in English',
          'Provide sentence starters tailored to exam question types',
        ],
        resources: [
          'Simplified exam guide',
          'Bilingual planning templates',
          'Question-type sentence starters',
        ],
      },
      {
        stage: 'intermediate',
        strategies: [
          'Focus on building exam-specific vocabulary and register',
          'Provide model responses with annotations explaining language choices',
          'Practise timed writing with gradually decreasing support',
        ],
        resources: [
          'Exam vocabulary builder',
          'Annotated model responses',
          'Timed writing progression plan',
        ],
      },
      {
        stage: 'advanced',
        strategies: [
          'Focus on sophistication: nuanced vocabulary, complex syntax, critical voice',
          'Discuss how to bring multicultural knowledge into exam responses appropriately',
          'Target any remaining L1 interference patterns in writing',
        ],
        resources: ['Sophistication checklist', 'L1 interference correction guide'],
      },
    ],
    senConsiderations: [
      {
        need: 'Dyslexia',
        adaptations: [
          'Apply for access arrangements (extra time, reader, scribe) well in advance',
          'Practise with access arrangements in place during mock exams',
          'Focus marking on content and ideas rather than spelling',
          'Teach exam-specific strategies: planning, time allocation, checking',
        ],
        resources: [
          'Access arrangements guide',
          'Exam strategy cards',
          'Practice papers with access arrangements',
        ],
      },
      {
        need: 'Exam anxiety',
        adaptations: [
          'Build up to full timed practice gradually (single paragraphs first)',
          'Teach breathing and grounding techniques for exam stress',
          'Provide positive reinforcement and focus on progress over grades',
          'Use mock exams as learning opportunities, not just assessments',
          'Offer practice in exam-like conditions to build familiarity',
        ],
        resources: [
          'Gradual exam practice plan',
          'Stress management guide',
          'Progress tracking sheet',
        ],
      },
    ],
  },
]

// ========================== 3. ASSESSMENT MODIFICATION GUIDANCE ==========================

export const assessmentModifications: AssessmentModification[] = [
  // Y7
  {
    yearGroup: 'Y7',
    tier: 'support',
    readingModifications: [
      'Use simplified or glossed versions of assessment extracts',
      'Pre-teach key vocabulary before the assessment',
      'Provide a word bank of key terms with definitions',
      'Allow use of a dictionary during reading tasks',
      'Reduce the number of questions or the length of the extract',
      'Use larger font and increased line spacing on assessment papers',
    ],
    writingModifications: [
      'Provide writing frames or planning templates',
      'Supply sentence starters for each paragraph',
      'Reduce the expected word count while maintaining quality expectations',
      'Allow use of a word bank during writing tasks',
      'Accept bullet points for planning evidence alongside written paragraphs',
    ],
    timingModifications: [
      'Allow up to 25% additional time',
      'Break the assessment into shorter, separate sessions if needed',
      'Provide rest breaks during extended assessments',
    ],
    presentationModifications: [
      'Print on cream or pastel paper for dyslexic students',
      'Use minimum 14pt font, sans-serif (Arial or Verdana)',
      'Include clear, numbered instructions',
      'Use visual cues (icons, borders, highlighting) to distinguish sections',
    ],
  },
  {
    yearGroup: 'Y7',
    tier: 'core',
    readingModifications: [
      'Use the standard assessment extract without modification',
      'Provide a brief glossary only for genuinely obscure vocabulary',
    ],
    writingModifications: [
      'Provide a planning template but no sentence starters',
      'Standard word count expectations apply',
    ],
    timingModifications: ['Standard timing applies'],
    presentationModifications: ['Standard assessment paper format'],
  },
  {
    yearGroup: 'Y7',
    tier: 'extension',
    readingModifications: [
      'Use a more challenging extract or an additional unseen text',
      'Include an evaluation or comparison question',
    ],
    writingModifications: [
      'Expect a fully independent response with no scaffolding',
      'Set a higher word count or additional analytical paragraph',
      'Include a challenge question requiring conceptual or evaluative thinking',
    ],
    timingModifications: ['Standard timing; challenge students to plan within the first 5 minutes'],
    presentationModifications: [
      'Standard assessment paper; may include a separate challenge sheet',
    ],
  },

  // Y8
  {
    yearGroup: 'Y8',
    tier: 'support',
    readingModifications: [
      'Provide glossed extracts with challenging vocabulary defined in margins',
      'Pre-teach context and vocabulary the lesson before the assessment',
      'Allow a glossary or key terms sheet during the assessment',
      'Use visual cues to highlight which sections of the extract to focus on',
    ],
    writingModifications: [
      'Provide PEEL planning templates',
      'Supply sentence starters for the first paragraph only',
      'Reduce the number of required paragraphs (2 instead of 3)',
      'Provide a quotation bank to select from rather than finding own evidence',
    ],
    timingModifications: [
      'Allow up to 25% additional time',
      'Offer a brief planning period before writing begins',
    ],
    presentationModifications: [
      'Dyslexia-friendly formatting on all papers',
      'Use clear section headings and numbered questions',
    ],
  },
  {
    yearGroup: 'Y8',
    tier: 'core',
    readingModifications: ['Standard extract with brief glossary for archaic terms only'],
    writingModifications: [
      'Provide a planning space but no sentence starters or frames',
      'Standard paragraph expectations (3+ analytical paragraphs)',
    ],
    timingModifications: ['Standard timing'],
    presentationModifications: ['Standard assessment paper format'],
  },
  {
    yearGroup: 'Y8',
    tier: 'extension',
    readingModifications: [
      'Use a more demanding extract or include an unseen text for comparison',
      'Set evaluation and comparison questions',
    ],
    writingModifications: [
      'Fully independent response expected',
      "Expect engagement with context, alternative interpretations, and writer's purpose",
      'Include an extension question requiring critical evaluation',
    ],
    timingModifications: ['Standard timing with expectation of efficient planning'],
    presentationModifications: ['Standard paper; extension question on separate sheet'],
  },

  // Y9
  {
    yearGroup: 'Y9',
    tier: 'support',
    readingModifications: [
      'Provide glossed and annotated extracts for assessment tasks',
      'Pre-teach all necessary context and vocabulary',
      'Allow a key terms glossary during the assessment',
      'Focus questions on specific sections rather than whole extracts',
    ],
    writingModifications: [
      'Provide a PEEL planning template',
      'Supply a limited quotation bank to choose from',
      'Reduce the number of required paragraphs to 2-3',
      'Offer sentence starters for opening the response',
    ],
    timingModifications: [
      'Allow up to 25% additional time',
      'Build in a structured 5-minute planning period',
    ],
    presentationModifications: [
      'Dyslexia-friendly formatting',
      'Clear section breaks and visual organisation',
    ],
  },
  {
    yearGroup: 'Y9',
    tier: 'core',
    readingModifications: [
      'Standard extracts with minimal glossary support (archaic terms only)',
      'Exam-style question format used to build familiarity',
    ],
    writingModifications: [
      'Planning space provided but no frames or starters',
      'Standard expectations: 3+ paragraphs with PEEL structure expected',
      'Evidence must be self-selected and embedded',
    ],
    timingModifications: ['Standard timing, aligned with GCSE exam timing where possible'],
    presentationModifications: ['Standard exam-style paper format'],
  },
  {
    yearGroup: 'Y9',
    tier: 'extension',
    readingModifications: [
      'Use challenging unseen extracts at GCSE difficulty level',
      'Include questions requiring sustained critical evaluation',
      'Set comparison tasks across two texts',
    ],
    writingModifications: [
      'Fully independent, sustained critical response expected',
      'Expect conceptual analysis, alternative interpretations, and contextual engagement',
      'Challenge question requiring evaluation or synthesis',
    ],
    timingModifications: ['GCSE-aligned timing with no additional time'],
    presentationModifications: ['GCSE-style paper format for exam preparation'],
  },
]

// ---- Grade Descriptors ----

export const gradeDescriptors: GradeDescriptor[] = [
  // Y7
  {
    yearGroup: 'Y7',
    grade: 'Emerging',
    reading:
      'Can identify simple, explicit information from a text. Attempts to use a quotation but may not explain its relevance. Limited awareness of techniques.',
    writing:
      'Communicates simple ideas with basic sentence structures. Limited vocabulary range. Some awareness of audience and purpose.',
    spag: 'Frequent errors in spelling, punctuation, and grammar. Some sentences may be incomplete. Limited punctuation range (full stops, capital letters).',
  },
  {
    yearGroup: 'Y7',
    grade: 'Developing',
    reading:
      'Can identify and explain some implicit ideas. Uses quotations to support points with some explanation. Can name some techniques and suggest effects.',
    writing:
      'Communicates ideas clearly with some variety in sentence structure. Uses some descriptive vocabulary. Shows awareness of audience and form.',
    spag: 'Generally accurate basic punctuation. Some variety in sentence structure. Spelling of common words is accurate; some errors with complex words.',
  },
  {
    yearGroup: 'Y7',
    grade: 'Secure',
    reading:
      "Makes clear inferences supported by well-chosen quotations. Identifies techniques and explains effects on the reader clearly. Comments on writer's purpose.",
    writing:
      'Writing is engaging and purposeful. Uses varied vocabulary and sentence structures for effect. Clear sense of audience, purpose, and form.',
    spag: 'Accurate punctuation including commas, apostrophes, and speech marks. Varied sentence structures used deliberately. Spelling is generally accurate.',
  },
  {
    yearGroup: 'Y7',
    grade: 'Mastering',
    reading:
      "Explores layers of meaning with perceptive inferences. Analyses techniques with detailed attention to word-level choices and connotation. Considers writer's intentions.",
    writing:
      'Writing is assured and compelling. Ambitious vocabulary used precisely. Structural choices enhance meaning. Strong control of form and register.',
    spag: 'Consistently accurate and varied punctuation. Confident use of complex sentences. Spelling is accurate including ambitious vocabulary.',
  },

  // Y8
  {
    yearGroup: 'Y8',
    grade: 'Emerging',
    reading:
      'Identifies straightforward ideas and uses quotations with some relevance. Limited analysis of language; tends to describe rather than analyse. Little reference to context.',
    writing:
      'Communicates ideas with some clarity. Basic vocabulary and sentence structures. Some attempt at paragraphing. Limited control of tone and register.',
    spag: 'Errors in basic punctuation are frequent. Limited sentence variety. Spelling errors in common and subject-specific words.',
  },
  {
    yearGroup: 'Y8',
    grade: 'Developing',
    reading:
      'Makes some valid inferences with supporting evidence. Identifies techniques and attempts to explain effects. Some awareness of context but may not be integrated.',
    writing:
      'Writing is generally clear and organised. Uses some varied vocabulary and sentence structures. Paragraphing is logical. Developing sense of register.',
    spag: 'Basic punctuation is mostly accurate. Some use of semicolons and colons. Spelling is mostly accurate. Some variety in sentence openings.',
  },
  {
    yearGroup: 'Y8',
    grade: 'Secure',
    reading:
      'Makes clear, supported inferences. Analyses language and structure with reference to effects on the reader. Integrates relevant context into analysis.',
    writing:
      'Writing is controlled and engaging. Varied vocabulary used effectively. Deliberate structural choices. Secure control of register and tone.',
    spag: 'Accurate and varied punctuation. Confident use of semicolons, colons, and dashes. Varied and controlled sentence structures. Accurate spelling.',
  },
  {
    yearGroup: 'Y8',
    grade: 'Mastering',
    reading:
      'Explores multiple layers of meaning with perceptive analysis. Examines how language, structure, and form work together. Sophisticated integration of context. Considers alternative interpretations.',
    writing:
      'Writing is compelling and sophisticated. Precise, ambitious vocabulary. Structural choices are innovative and purposeful. Assured control of voice and register.',
    spag: 'Consistently accurate and sophisticated punctuation. Confident, varied syntax used for deliberate effect. Ambitious vocabulary spelled accurately throughout.',
  },

  // Y9
  {
    yearGroup: 'Y9',
    grade: 'Emerging',
    reading:
      'Identifies some relevant ideas with limited textual support. Attempts analysis of language but tends towards feature-spotting. Context is mentioned but not connected to analysis.',
    writing:
      'Communicates ideas with some clarity but limited control. Basic vocabulary and simple sentence structures predominate. Some awareness of form.',
    spag: 'Errors in basic punctuation. Limited sentence variety. Spelling errors in common and subject-specific vocabulary.',
  },
  {
    yearGroup: 'Y9',
    grade: 'Developing',
    reading:
      'Makes valid inferences with supporting evidence. Analysis of language shows developing understanding of effects. Context is referenced but may be bolted on.',
    writing:
      'Writing is organised and mostly clear. Some varied vocabulary and sentence structures. Developing control of tone and register. Logical paragraphing.',
    spag: 'Basic punctuation is accurate. Some use of semicolons and colons. Mostly accurate spelling. Developing variety in sentence construction.',
  },
  {
    yearGroup: 'Y9',
    grade: 'Secure',
    reading:
      'Clear, sustained analysis of language and structure with well-selected evidence. Explores effects on the reader with confidence. Context is integrated effectively into analysis.',
    writing:
      'Writing is effective and well-controlled. Varied vocabulary used for specific effects. Deliberate structural and tonal choices. Strong sense of audience and purpose.',
    spag: 'Accurate, varied punctuation used for effect. Controlled sentence variety. Accurate spelling including ambitious vocabulary. Secure paragraphing.',
  },
  {
    yearGroup: 'Y9',
    grade: 'Mastering',
    reading:
      'Perceptive, critical analysis exploring multiple interpretations. Sophisticated examination of how writers craft meaning through language, structure, and form. Context is woven seamlessly into analysis. Personal critical voice evident.',
    writing:
      'Writing is compelling, original, and distinctive. Precise, sophisticated vocabulary. Innovative structural choices that enhance meaning. Assured control of voice, register, and form.',
    spag: 'Consistently accurate, sophisticated punctuation deployed for deliberate effect. Fluent, varied syntax. Ambitious vocabulary spelled accurately. Paragraphing enhances cohesion and coherence.',
  },
]

// ---- Progress Indicators ----

export const progressIndicators: ProgressIndicator[] = [
  // Y7
  {
    yearGroup: 'Y7',
    term: 1,
    emergingDescriptors: [
      'Can identify basic information from texts',
      'Attempts to use quotations',
      'Writes in simple sentences',
      'Knows some technique names',
    ],
    developingDescriptors: [
      'Makes simple inferences',
      'Supports points with relevant quotations',
      'Writes PEE paragraphs with support',
      'Identifies and names techniques',
    ],
    secureDescriptors: [
      'Makes clear inferences with well-chosen evidence',
      'Writes independent PEE paragraphs',
      'Explains effects of techniques on the reader',
      'Uses varied vocabulary in writing',
    ],
    masteringDescriptors: [
      'Explores layers of meaning',
      'Analyses word-level choices and connotations',
      'Writes with a clear critical voice',
      'Uses ambitious language techniques in own writing',
    ],
  },
  {
    yearGroup: 'Y7',
    term: 2,
    emergingDescriptors: [
      'Can retell a story in sequence',
      'Uses basic descriptive vocabulary',
      'Identifies the moral of a story',
      'Writes in paragraphs with support',
    ],
    developingDescriptors: [
      'Analyses how characters are presented',
      'Uses sensory language in creative writing',
      'Writes structured narratives with a clear plan',
      'Identifies genre conventions',
    ],
    secureDescriptors: [
      'Analyses narrative and descriptive techniques with evidence',
      'Writes engaging creative pieces with varied techniques',
      'Compares texts at a basic level',
      'Plans and structures writing effectively',
    ],
    masteringDescriptors: [
      'Analyses how genre conventions are used and subverted',
      'Writes with a distinctive voice and conscious craft',
      'Makes cross-cultural comparisons',
      'Reflects on own writing choices',
    ],
  },
  {
    yearGroup: 'Y7',
    term: 3,
    emergingDescriptors: [
      'Understands the basic plot of a Shakespeare play',
      'Can translate key phrases into modern English',
      'Identifies simple techniques in Shakespeare',
      'Writes about Shakespeare with heavy scaffolding',
    ],
    developingDescriptors: [
      'Understands character and theme in Shakespeare',
      "Analyses Shakespeare's language with support",
      'Writes PEE paragraphs about Shakespeare',
      'Shows basic awareness of Elizabethan context',
    ],
    secureDescriptors: [
      "Analyses Shakespeare's language choices and effects independently",
      'Writes PEEL paragraphs about Shakespeare with embedded quotations',
      'Links analysis to context',
      "Considers the play's relevance to modern audiences",
    ],
    masteringDescriptors: [
      'Writes sustained analysis of Shakespeare engaging with context and interpretation',
      'Considers alternative readings of key speeches',
      'Evaluates directorial choices',
      'Makes connections between Shakespeare and other texts',
    ],
  },

  // Y8
  {
    yearGroup: 'Y8',
    term: 1,
    emergingDescriptors: [
      'Identifies Gothic conventions with support',
      'Recognises some persuasive techniques',
      'Writes basic PEEL paragraphs with scaffolding',
      'Uses some subject-specific vocabulary',
    ],
    developingDescriptors: [
      'Analyses how Gothic atmosphere is created',
      'Evaluates persuasive writing with some independence',
      'Writes PEEL paragraphs with appropriate evidence',
      'Uses atmospheric and rhetorical vocabulary',
    ],
    secureDescriptors: [
      'Analyses language and structure in Gothic texts with depth',
      'Critically evaluates persuasive strategies',
      'Writes sustained PEEL responses independently',
      'Integrates context into analysis',
    ],
    masteringDescriptors: [
      'Explores the Gothic as cultural commentary',
      'Analyses bias and ideology in non-fiction',
      'Writes with a personal critical voice',
      'Considers multiple interpretations',
    ],
  },
  {
    yearGroup: 'Y8',
    term: 2,
    emergingDescriptors: [
      'Follows the plot of a novel with support',
      'Identifies basic comparison points between poems',
      'Writes about character with quotation support',
      'Uses some comparison vocabulary',
    ],
    developingDescriptors: [
      'Analyses character development across a novel',
      'Compares two poems with relevant evidence',
      'Writes sustained PEEL paragraphs about prose and poetry',
      'Uses comparative connectives effectively',
    ],
    secureDescriptors: [
      'Writes sustained analysis of a novel engaging with theme and context',
      'Produces effective comparative essays on poetry',
      'Selects and embeds evidence skillfully',
      'Maintains a comparative thread throughout writing',
    ],
    masteringDescriptors: [
      'Offers alternative interpretations of the novel',
      'Writes sophisticated comparative essays considering form, language, and context',
      'Develops a personal critical voice',
      'Makes intertextual connections',
    ],
  },
  {
    yearGroup: 'Y8',
    term: 3,
    emergingDescriptors: [
      'Understands plot and character in Shakespeare with parallel text',
      "Identifies some techniques in Shakespeare's language",
      'Writes about Shakespeare with heavy scaffolding',
      'Has basic awareness of context',
    ],
    developingDescriptors: [
      "Analyses Shakespeare's language with developing independence",
      'Writes PEEL paragraphs on character and theme',
      'References context in analysis',
      'Comments on audience response',
    ],
    secureDescriptors: [
      'Writes sustained analysis of Shakespeare engaging with language, structure, and context',
      'Embeds quotations fluently',
      "Links analysis to the writer's purpose",
      'Considers the play as performance',
    ],
    masteringDescriptors: [
      'Writes critical essays on Shakespeare with alternative interpretations',
      'Analyses the interplay of form, language, and context',
      'Evaluates performance choices',
      'Develops original critical arguments',
    ],
  },

  // Y9
  {
    yearGroup: 'Y9',
    term: 1,
    emergingDescriptors: [
      'Understands 19th-century extracts with glossary support',
      'Identifies some media techniques',
      'Writes basic analytical paragraphs',
      'Has some awareness of historical context',
    ],
    developingDescriptors: [
      'Analyses 19th-century language and style with developing confidence',
      'Critically evaluates media texts',
      'Writes sustained analytical responses',
      'Integrates context into analysis',
    ],
    secureDescriptors: [
      'Analyses 19th-century texts with detailed attention to language, structure, and context',
      'Produces sophisticated media analysis',
      'Writes sustained, well-structured essays',
      'Demonstrates critical thinking about representation and bias',
    ],
    masteringDescriptors: [
      'Writes critical essays on 19th-century texts exploring ideology and form',
      'Produces original critical analysis of media texts',
      'Develops a distinctive critical voice',
      'Engages with literary and media theory',
    ],
  },
  {
    yearGroup: 'Y9',
    term: 2,
    emergingDescriptors: [
      'Understands plot and character in a play with support',
      'Identifies themes in world literature with guidance',
      'Writes structured paragraphs about drama',
      'Shows awareness of cultural context',
    ],
    developingDescriptors: [
      'Analyses dramatic techniques and their effects',
      'Explores themes of identity and belonging in world literature',
      'Writes comparative responses',
      'Integrates cultural context into analysis',
    ],
    secureDescriptors: [
      'Writes sustained analysis of drama engaging with staging, language, and context',
      'Produces thoughtful analytical responses to diverse texts',
      'Compares across cultures with sensitivity and depth',
      'Develops an informed personal response',
    ],
    masteringDescriptors: [
      'Writes critical essays evaluating drama from multiple perspectives',
      'Engages with postcolonial and multicultural literary theory',
      'Produces sophisticated comparative analysis',
      'Questions canon formation and literary value',
    ],
  },
  {
    yearGroup: 'Y9',
    term: 3,
    emergingDescriptors: [
      'Understands the format of GCSE/IGCSE exams',
      'Practises exam questions with scaffolding',
      'Writes structured responses within time limits with support',
      'Self-assesses with guidance',
    ],
    developingDescriptors: [
      'Completes exam-style questions with increasing independence',
      'Plans and writes responses within time limits',
      'Self-assesses using mark scheme criteria',
      'Identifies strengths and areas for improvement',
    ],
    secureDescriptors: [
      'Completes exam-style questions independently under timed conditions',
      'Produces well-structured, well-evidenced responses',
      'Self-directs revision targeting specific weaknesses',
      'Achieves consistency across assessment objectives',
    ],
    masteringDescriptors: [
      'Produces sophisticated, original exam responses',
      'Demonstrates conceptual understanding and personal critical voice',
      'Achieves the highest grades consistently',
      'Self-directs learning with independence and precision',
    ],
  },
]

// ========================== 4. MARKING TEMPLATES ==========================

// ---- 4A. WWW/EBI Templates ----

export const markingTemplates: MarkingTemplate[] = [
  // Y7 WWW/EBI
  {
    yearGroup: 'Y7',
    templateType: 'www_ebi',
    title: 'Y7 Analytical Writing: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 7 analytical writing tasks.',
    content: [
      'WWW (What Went Well):',
      '- You made a clear point that answered the question.',
      '- You used a quotation from the text to support your point.',
      '- You explained how the technique works and its effect on the reader.',
      '- You used the PEE structure effectively.',
      '- You used subject-specific vocabulary (e.g. simile, metaphor, personification).',
      '',
      'EBI (Even Better If):',
      '- You embedded your quotation more smoothly into your sentence.',
      '- You explored the connotations of individual words in your quotation.',
      "- You explained how the technique affects the reader's feelings or understanding.",
      '- You linked your point back to the question or to a wider theme.',
      '- You extended your explanation with a second point about the same quotation.',
      '- You varied your sentence openings to avoid repetition.',
    ],
  },
  {
    yearGroup: 'Y7',
    templateType: 'www_ebi',
    title: 'Y7 Creative Writing: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 7 creative writing tasks.',
    content: [
      'WWW (What Went Well):',
      '- You used descriptive vocabulary to create a vivid picture.',
      '- You included a simile/metaphor/personification to enhance your description.',
      '- Your writing had a clear structure (beginning, middle, end).',
      '- You used paragraphs to organise your ideas.',
      '- You included sensory details (sight, sound, touch, smell, taste).',
      '',
      'EBI (Even Better If):',
      '- You varied your sentence lengths for effect (e.g. a short sentence for impact).',
      '- You "showed" rather than "told" the reader how a character feels.',
      '- You used more ambitious vocabulary to replace common words.',
      '- You created a more effective opening to hook the reader.',
      '- You developed your ending so it leaves a lasting impression.',
      '- You checked your spelling, punctuation, and grammar more carefully.',
    ],
  },

  // Y8 WWW/EBI
  {
    yearGroup: 'Y8',
    templateType: 'www_ebi',
    title: 'Y8 Analytical Writing: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 8 analytical writing tasks.',
    content: [
      'WWW (What Went Well):',
      '- You made a clear, arguable point that directly addressed the question.',
      '- You embedded a well-chosen quotation smoothly into your writing.',
      '- You analysed the language closely, naming techniques and exploring connotations.',
      '- You used the PEEL structure to create a cohesive paragraph.',
      "- You linked your analysis back to a theme, context, or the writer's purpose.",
      '',
      'EBI (Even Better If):',
      '- You explored the connotations of individual words more closely.',
      "- You considered how the writer's context shapes the meaning of the text.",
      '- You commented on structural features as well as language.',
      '- You offered an alternative interpretation of your quotation.',
      '- You used more sophisticated connectives to link your ideas.',
      '- You developed a more sustained argument across your paragraphs.',
    ],
  },
  {
    yearGroup: 'Y8',
    templateType: 'www_ebi',
    title: 'Y8 Comparative Writing: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 8 comparative writing tasks.',
    content: [
      'WWW (What Went Well):',
      '- You made a clear comparison between the two texts/poems.',
      '- You used comparative connectives (similarly, however, whereas) effectively.',
      '- You supported your comparison with evidence from both texts.',
      '- You analysed methods used by both writers.',
      '- You maintained a comparative thread throughout your response.',
      '',
      'EBI (Even Better If):',
      '- You compared methods as well as themes and ideas.',
      '- You used topic sentences that address both texts.',
      "- You explored how context shapes each writer's perspective.",
      "- You considered the effect on the reader of each writer's choices.",
      '- You offered an evaluation of which text is more effective and why.',
      '- You integrated comparison more fluently rather than writing about texts separately.',
    ],
  },

  // Y9 WWW/EBI
  {
    yearGroup: 'Y9',
    templateType: 'www_ebi',
    title: 'Y9 Critical Analysis: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 9 critical analysis tasks.',
    content: [
      'WWW (What Went Well):',
      '- You opened with a clear critical argument or thesis.',
      '- You selected precise, well-chosen textual evidence.',
      '- You provided layered analysis exploring multiple meanings and effects.',
      '- You integrated context seamlessly into your argument.',
      "- You considered the writer's purpose and its effect on the audience.",
      '- You developed a sustained, coherent argument across your essay.',
      '',
      'EBI (Even Better If):',
      '- You explored alternative interpretations and evaluated their validity.',
      '- You analysed form and structure as well as language.',
      '- You zoomed out to consider the wider significance of your analysis.',
      '- You developed a more distinctive personal critical voice.',
      '- You used more sophisticated critical vocabulary.',
      '- You considered how different readers might respond to the text.',
      '- You made connections to other texts or literary movements.',
    ],
  },
  {
    yearGroup: 'Y9',
    templateType: 'www_ebi',
    title: 'Y9 Creative Writing: WWW/EBI',
    description: 'What Went Well / Even Better If template for Year 9 creative writing tasks.',
    content: [
      'WWW (What Went Well):',
      '- You created a distinctive narrative voice or atmosphere.',
      '- You used language techniques deliberately and effectively.',
      '- You varied sentence structures for specific effects.',
      '- You made conscious structural choices (opening, pacing, ending).',
      '- Your writing engaged the reader and sustained interest.',
      '',
      'EBI (Even Better If):',
      '- You developed a more original or surprising perspective.',
      '- You used structural devices (flashback, cyclical, shift in perspective) more ambitiously.',
      '- You controlled pace more effectively, balancing action with reflection.',
      '- You crafted a more resonant or thought-provoking ending.',
      '- You experimented with form (e.g. fragmented narrative, second person).',
      '- You refined your proofreading to eliminate technical errors.',
    ],
  },
]

// ---- 4B. Marking Codes ----

export const markingCodes: MarkingCode[] = [
  // Literacy codes
  { code: 'Sp', meaning: 'Spelling error', category: 'literacy' },
  { code: 'P', meaning: 'Punctuation error', category: 'literacy' },
  { code: 'G', meaning: 'Grammar error', category: 'literacy' },
  { code: 'C', meaning: 'Capital letter needed', category: 'literacy' },
  { code: '//', meaning: 'New paragraph needed', category: 'literacy' },
  { code: '^', meaning: 'Something is missing (a word, a punctuation mark)', category: 'literacy' },
  { code: '~~', meaning: 'This word or phrase is not needed (remove it)', category: 'literacy' },
  {
    code: 'WW',
    meaning: 'Wrong word (homophone error or incorrect word choice)',
    category: 'literacy',
  },
  {
    code: 'Rep',
    meaning: 'Repetition (you have used this word or phrase too often)',
    category: 'literacy',
  },
  { code: 'Exp', meaning: 'Expression is unclear (rephrase this)', category: 'literacy' },

  // Content codes
  { code: 'Ev', meaning: 'Evidence needed (add a quotation)', category: 'content' },
  { code: 'Ex', meaning: 'Explain further (develop your point)', category: 'content' },
  { code: 'Rel', meaning: 'Relevance? (how does this link to the question?)', category: 'content' },
  { code: 'Ctx', meaning: 'Context (add a reference to context here)', category: 'content' },
  { code: 'Tech', meaning: 'Name the technique used', category: 'content' },
  { code: 'Eff', meaning: 'What is the effect on the reader?', category: 'content' },
  { code: 'Int', meaning: 'Consider an alternative interpretation', category: 'content' },
  { code: 'Emb', meaning: 'Embed your quotation into your sentence', category: 'content' },
  { code: 'Conn', meaning: 'Add connotations (what does this word suggest?)', category: 'content' },

  // Structure codes
  { code: 'Str', meaning: 'Structure your paragraph (use PEE/PEEL)', category: 'structure' },
  { code: 'TS', meaning: 'Improve your topic sentence', category: 'structure' },
  {
    code: 'Link',
    meaning: 'Add a link sentence (connect to the question or theme)',
    category: 'structure',
  },
  {
    code: 'Org',
    meaning: 'Organisation (reorder your ideas for better flow)',
    category: 'structure',
  },
  { code: 'Trans', meaning: 'Add a transition/connective between points', category: 'structure' },

  // Praise codes
  { code: '!', meaning: 'Excellent point or expression', category: 'praise' },
  { code: 'V', meaning: 'Impressive vocabulary choice', category: 'praise' },
  { code: 'Orig', meaning: 'Original and perceptive thinking', category: 'praise' },
  { code: 'Soph', meaning: 'Sophisticated analysis', category: 'praise' },
  { code: 'Dev', meaning: 'Well-developed point', category: 'praise' },
]

// ---- 4C. Peer Assessment Guidance ----

export const peerAssessmentGuides: PeerAssessmentGuide[] = [
  // Y7
  {
    yearGroup: 'Y7',
    taskType: 'Analytical Paragraph (PEE)',
    criteria: [
      {
        label: 'Point',
        lookFor: [
          'Is there a clear point that answers the question?',
          'Does the first sentence tell you the argument?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
      {
        label: 'Evidence',
        lookFor: [
          'Is there a quotation from the text?',
          'Is the quotation relevant to the point?',
          'Is it short and well-chosen?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
      {
        label: 'Explain',
        lookFor: [
          'Does the writer explain what the quotation means?',
          'Is a technique named?',
          'Is the effect on the reader mentioned?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
    ],
    sentenceStarters: [
      'I think your strongest point was...',
      'Your quotation was effective because...',
      'To improve, you could...',
      'One thing I learned from your writing was...',
      'Next time, try to...',
    ],
    rules: [
      'Be kind, specific, and helpful.',
      'Always start with something positive.',
      'Give one specific suggestion for improvement.',
      'Focus on the writing, not the person.',
      'Use the sentence starters provided.',
    ],
  },
  {
    yearGroup: 'Y7',
    taskType: 'Creative Writing',
    criteria: [
      {
        label: 'Description',
        lookFor: [
          'Does the writing create a clear picture?',
          'Are sensory details used (sight, sound, touch, smell, taste)?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
      {
        label: 'Techniques',
        lookFor: [
          'Is at least one technique used (simile, metaphor, personification)?',
          'Does the technique add to the description?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
      {
        label: 'Structure',
        lookFor: [
          'Is the writing organised into paragraphs?',
          'Is there a clear beginning and ending?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
      {
        label: 'Accuracy',
        lookFor: [
          'Are sentences complete?',
          'Is spelling mostly correct?',
          'Is punctuation used accurately?',
        ],
        scale: 'Yes / Partially / Not yet',
      },
    ],
    sentenceStarters: [
      'The part I enjoyed most was...',
      'A really effective description was...',
      'You could make your writing even better by...',
      'I thought your use of ___ was good because...',
    ],
    rules: [
      'Be kind, specific, and helpful.',
      'Start with a positive comment about the writing.',
      'Choose one specific area for improvement.',
      'Explain why your suggestion would help.',
    ],
  },

  // Y8
  {
    yearGroup: 'Y8',
    taskType: 'Analytical Essay (PEEL)',
    criteria: [
      {
        label: 'Point',
        lookFor: [
          'Is the point clearly stated?',
          'Does it directly address the question?',
          'Is it arguable (not just a fact)?',
        ],
        scale: 'Strong / Developing / Needs work',
      },
      {
        label: 'Evidence',
        lookFor: [
          'Is the quotation relevant and well-chosen?',
          'Is it embedded smoothly into the sentence?',
          'Are key words highlighted for analysis?',
        ],
        scale: 'Strong / Developing / Needs work',
      },
      {
        label: 'Explain',
        lookFor: [
          'Is a technique named?',
          'Are connotations of key words explored?',
          'Is the effect on the reader explained?',
        ],
        scale: 'Strong / Developing / Needs work',
      },
      {
        label: 'Link',
        lookFor: [
          'Does the paragraph link back to the question?',
          "Is there a connection to a theme or the writer's purpose?",
          'Does it develop the argument?',
        ],
        scale: 'Strong / Developing / Needs work',
      },
    ],
    sentenceStarters: [
      'Your argument is clear because...',
      'Your analysis is effective when you...',
      'To push your analysis further, try...',
      'Consider exploring the connotations of...',
      'A stronger link sentence might be...',
    ],
    rules: [
      'Use the PEEL criteria to structure your feedback.',
      'Give at least one specific strength and one specific target.',
      'Suggest how to improve, not just what to improve.',
      'Be respectful and constructive.',
    ],
  },

  // Y9
  {
    yearGroup: 'Y9',
    taskType: 'Critical Essay',
    criteria: [
      {
        label: 'Thesis/Argument',
        lookFor: [
          'Is there a clear critical argument or thesis?',
          'Is it sophisticated and original?',
          'Does it directly engage with the question?',
        ],
        scale: 'Excellent / Good / Developing / Needs revision',
      },
      {
        label: 'Evidence and Analysis',
        lookFor: [
          'Is textual evidence precise and well-selected?',
          'Is analysis layered (technique, connotation, effect)?',
          'Are multiple meanings explored?',
        ],
        scale: 'Excellent / Good / Developing / Needs revision',
      },
      {
        label: 'Context',
        lookFor: [
          'Is context integrated into the analysis?',
          'Does it inform rather than replace analysis?',
          'Is it relevant and specific?',
        ],
        scale: 'Excellent / Good / Developing / Needs revision',
      },
      {
        label: 'Coherence and Voice',
        lookFor: [
          'Is the essay well-structured and cohesive?',
          'Is there a distinctive critical voice?',
          'Does the essay build a sustained argument?',
        ],
        scale: 'Excellent / Good / Developing / Needs revision',
      },
    ],
    sentenceStarters: [
      'Your argument is most convincing when...',
      'The most sophisticated moment in your analysis is...',
      'To develop your critical voice further, consider...',
      'An alternative interpretation you could explore is...',
      'Your use of context is effective because... / could be strengthened by...',
    ],
    rules: [
      "Engage seriously with the writer's ideas.",
      'Identify what is working well at a conceptual level, not just a technical one.',
      'Suggest one specific way to deepen the analysis.',
      'Consider whether the essay would benefit from an alternative perspective.',
      'Be critical but constructive.',
    ],
  },
]

// ---- 4D. Self-Assessment Checklists ----

export const selfAssessmentChecklists: SelfAssessmentChecklist[] = [
  // Y7 Analytical Writing
  {
    yearGroup: 'Y7',
    taskType: 'Analytical Writing (PEE)',
    title: 'Y7 Self-Assessment: Analytical Paragraph',
    items: [
      {
        statement: 'I have made a clear point that answers the question.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have included a quotation from the text.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have explained what the quotation shows or means.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have named the technique the writer uses (e.g. simile, metaphor).',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have explained the effect the technique has on the reader.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have embedded my quotation smoothly into my sentence.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have explored the connotations of key words in my quotation.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: "I have considered the writer's purpose or intention.",
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My sentences start with a capital letter and end with a full stop.',
        category: 'SPAG',
        tier: 'support',
      },
      { statement: 'I have checked my spelling of key words.', category: 'SPAG', tier: 'support' },
      {
        statement: 'I have used commas correctly in my sentences.',
        category: 'SPAG',
        tier: 'core',
      },
      { statement: 'I have varied my sentence openings.', category: 'SPAG', tier: 'core' },
    ],
  },

  // Y7 Creative Writing
  {
    yearGroup: 'Y7',
    taskType: 'Creative Writing',
    title: 'Y7 Self-Assessment: Creative Writing',
    items: [
      {
        statement: 'My writing has a clear beginning, middle, and end.',
        category: 'Structure',
        tier: 'support',
      },
      { statement: 'I have written in paragraphs.', category: 'Structure', tier: 'support' },
      {
        statement: 'I have used at least two descriptive techniques (simile, metaphor, etc.).',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have included sensory details (what can be seen, heard, felt, etc.).',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have varied my sentence lengths for effect.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have "shown" rather than "told" the reader about emotions.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have created a distinctive voice or atmosphere.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have used a structural technique (flashback, cyclical, zoom in).',
        category: 'Structure',
        tier: 'extension',
      },
      { statement: 'My spelling and punctuation are accurate.', category: 'SPAG', tier: 'support' },
      {
        statement: 'I have used a range of punctuation (commas, speech marks, exclamation marks).',
        category: 'SPAG',
        tier: 'core',
      },
    ],
  },

  // Y8 Analytical Essay (PEEL)
  {
    yearGroup: 'Y8',
    taskType: 'Analytical Essay (PEEL)',
    title: 'Y8 Self-Assessment: Analytical Essay',
    items: [
      {
        statement: 'Each paragraph starts with a clear point that addresses the question.',
        category: 'Structure',
        tier: 'support',
      },
      {
        statement: 'I have included a relevant quotation in each paragraph.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have explained what each quotation means and its effect.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have linked each paragraph back to the question or a theme.',
        category: 'Structure',
        tier: 'core',
      },
      { statement: 'I have embedded my quotations smoothly.', category: 'Content', tier: 'core' },
      {
        statement: 'I have explored the connotations of key words.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have named and analysed specific techniques.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have referenced relevant context (social, historical, literary).',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: "I have considered the writer's purpose and its effect on the audience.",
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have offered an alternative interpretation of the text.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My paragraphs flow logically with appropriate connectives.',
        category: 'Structure',
        tier: 'core',
      },
      {
        statement: 'My spelling, punctuation, and grammar are accurate.',
        category: 'SPAG',
        tier: 'support',
      },
      {
        statement: 'I have used semicolons, colons, or dashes effectively.',
        category: 'SPAG',
        tier: 'extension',
      },
    ],
  },

  // Y8 Comparative Essay
  {
    yearGroup: 'Y8',
    taskType: 'Comparative Essay',
    title: 'Y8 Self-Assessment: Comparative Writing',
    items: [
      {
        statement: 'I have written about both texts/poems, not just one.',
        category: 'Structure',
        tier: 'support',
      },
      {
        statement: 'I have used comparison words (similarly, however, whereas, in contrast).',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: 'I have included quotations from both texts.',
        category: 'Content',
        tier: 'support',
      },
      { statement: 'My topic sentences address both texts.', category: 'Structure', tier: 'core' },
      {
        statement: 'I have compared the methods used by both writers, not just the themes.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have maintained a comparative thread throughout my essay.',
        category: 'Structure',
        tier: 'core',
      },
      {
        statement: "I have considered how context shapes each writer's perspective.",
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have evaluated which text is more effective and explained why.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My spelling, punctuation, and grammar are accurate.',
        category: 'SPAG',
        tier: 'support',
      },
    ],
  },

  // Y9 Critical Essay
  {
    yearGroup: 'Y9',
    taskType: 'Critical Essay',
    title: 'Y9 Self-Assessment: Critical Essay',
    items: [
      {
        statement: 'I have opened with a clear critical argument or thesis.',
        category: 'Structure',
        tier: 'support',
      },
      {
        statement: 'I have selected precise, well-chosen textual evidence.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement:
          'I have analysed language closely, including technique, connotation, and effect.',
        category: 'Content',
        tier: 'support',
      },
      {
        statement: "I have linked analysis to the writer's purpose.",
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have integrated context seamlessly into my argument.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'My essay builds a sustained, coherent argument.',
        category: 'Structure',
        tier: 'core',
      },
      {
        statement: 'I have explored multiple layers of meaning.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I have considered alternative interpretations.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have analysed form and structure as well as language.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have developed a distinctive personal critical voice.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'I have made connections to other texts or critical ideas.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My writing demonstrates sophisticated, varied syntax.',
        category: 'SPAG',
        tier: 'core',
      },
      {
        statement: 'My punctuation is accurate and deployed for effect.',
        category: 'SPAG',
        tier: 'extension',
      },
      {
        statement: 'I have proofread carefully and corrected any errors.',
        category: 'SPAG',
        tier: 'support',
      },
    ],
  },

  // Y9 Exam Practice
  {
    yearGroup: 'Y9',
    taskType: 'Exam Practice',
    title: 'Y9 Self-Assessment: Exam Practice',
    items: [
      {
        statement: 'I read the question carefully and underlined the command word.',
        category: 'Exam Technique',
        tier: 'support',
      },
      {
        statement: 'I checked how many marks the question is worth.',
        category: 'Exam Technique',
        tier: 'support',
      },
      {
        statement: 'I spent approximately one minute per mark.',
        category: 'Exam Technique',
        tier: 'support',
      },
      {
        statement: 'I planned my response before writing (2-3 minutes).',
        category: 'Exam Technique',
        tier: 'core',
      },
      {
        statement: 'I answered the specific question set, not a different one.',
        category: 'Exam Technique',
        tier: 'core',
      },
      {
        statement: 'I used the correct structure for this question type.',
        category: 'Structure',
        tier: 'core',
      },
      {
        statement: 'I included relevant evidence and analysis.',
        category: 'Content',
        tier: 'core',
      },
      {
        statement: 'I left time to check my response at the end.',
        category: 'Exam Technique',
        tier: 'core',
      },
      {
        statement: 'My response would meet the criteria for the top band of the mark scheme.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My analysis demonstrates conceptual understanding and originality.',
        category: 'Content',
        tier: 'extension',
      },
      {
        statement: 'My spelling, punctuation, and grammar are accurate throughout.',
        category: 'SPAG',
        tier: 'support',
      },
    ],
  },
]
