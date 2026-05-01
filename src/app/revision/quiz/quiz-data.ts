// ─── Quiz question bank ────────────────────────────────────────────────────
// 100+ GCSE English questions across 5 topics

import type { ExamBoard } from '@/lib/board/board-config'

export type Topic = 'poetry' | 'set-texts' | 'language-techniques' | 'exam-technique' | 'context'

export interface QuizQuestion {
  id: string
  topic: Topic
  question: string
  options: [string, string, string, string]
  correctIndex: number
  explanation: string
  /**
   * Which exam boards this question is relevant for. If unspecified, the
   * question is treated as relevant for ALL GCSE/IGCSE boards (i.e. generic
   * skill / technique / context questions). Use this field to scope a
   * question to boards that actually study a particular text or anthology.
   */
  boards?: ExamBoard[]
}

// Topics covered by each board
export const TOPICS_FOR_BOARD: Record<ExamBoard, Topic[]> = {
  ks3: ['language-techniques', 'exam-technique'],
  aqa: ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  edexcel: ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  ocr: ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  eduqas: ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'edexcel-igcse': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'edexcel-igcse-lang': ['language-techniques', 'exam-technique'],
  'cambridge-0500': ['language-techniques', 'exam-technique'],
  'cambridge-0990': ['language-techniques', 'exam-technique'],
  'cambridge-0475': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'ial-edexcel': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'aqa-a-level': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'edexcel-a-level': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'ocr-a-level': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'eduqas-a-level': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
}

export function getTopicsForBoard(board: ExamBoard | null): Topic[] {
  if (!board) return TOPICS
  return TOPICS_FOR_BOARD[board] ?? TOPICS
}

export const TOPIC_META: Record<Topic, { label: string; colour: string; bgColour: string }> = {
  poetry: { label: 'Poetry', colour: 'text-rose-400', bgColour: 'bg-rose-500/10' },
  'set-texts': { label: 'Set Texts', colour: 'text-blue-400', bgColour: 'bg-blue-500/10' },
  'language-techniques': {
    label: 'Language Techniques',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
  'exam-technique': {
    label: 'Exam Technique',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
  context: { label: 'Context', colour: 'text-amber-400', bgColour: 'bg-amber-500/10' },
}

export const TOPICS: Topic[] = [
  'poetry',
  'set-texts',
  'language-techniques',
  'exam-technique',
  'context',
]

// ─── Grade boundaries (approximate percentage thresholds) ──────────────────
export function getGrade(percentage: number): { grade: string; descriptor: string } {
  if (percentage >= 90) return { grade: '9', descriptor: 'Exceptional' }
  if (percentage >= 80) return { grade: '8', descriptor: 'Outstanding' }
  if (percentage >= 70) return { grade: '7', descriptor: 'Excellent' }
  if (percentage >= 60) return { grade: '6', descriptor: 'Very Good' }
  if (percentage >= 50) return { grade: '5', descriptor: 'Good' }
  if (percentage >= 40) return { grade: '4', descriptor: 'Standard Pass' }
  if (percentage >= 30) return { grade: '3', descriptor: 'Below Pass' }
  if (percentage >= 20) return { grade: '2', descriptor: 'Limited' }
  return { grade: '1', descriptor: 'Very Limited' }
}

// ─── Poetry questions (120) ────────────────────────────────────────────────
const poetryQuestions: QuizQuestion[] = [
  {
    id: 'p1',
    topic: 'poetry',
    question: 'What poetic device involves giving human qualities to non-human things?',
    options: ['Simile', 'Personification', 'Alliteration', 'Onomatopoeia'],
    correctIndex: 1,
    explanation:
      'Personification gives human qualities, emotions, or actions to non-human objects, animals, or abstract ideas.',
  },
  {
    id: 'p2',
    topic: 'poetry',
    question: 'In poetry, what is enjambment?',
    options: [
      'Repeating the first word of each line',
      'A line that continues without punctuation into the next',
      'Using two contradictory words together',
      'The rhyme scheme of a sonnet',
    ],
    correctIndex: 1,
    explanation:
      'Enjambment is when a sentence or phrase runs over from one line to the next without a pause or punctuation at the end of the line.',
  },
  {
    id: 'p3',
    topic: 'poetry',
    question: 'How many lines does a traditional sonnet contain?',
    options: ['10', '12', '14', '16'],
    correctIndex: 2,
    explanation:
      'A traditional sonnet has 14 lines, typically in iambic pentameter, with a specific rhyme scheme.',
  },
  {
    id: 'p4',
    topic: 'poetry',
    question: 'What is a volta in a sonnet?',
    options: [
      'The final couplet',
      'The turn or shift in argument or tone',
      'The rhyme scheme pattern',
      'The opening quatrain',
    ],
    correctIndex: 1,
    explanation:
      'The volta is the turn or shift in thought, argument, or emotion that typically occurs between the octave and sestet (or before the final couplet).',
  },
  {
    id: 'p5',
    topic: 'poetry',
    question: 'What is iambic pentameter?',
    options: [
      'Five stressed syllables per line',
      'Ten syllables per line with alternating unstressed/stressed pattern',
      'Five lines per stanza',
      'A line ending in a stressed syllable',
    ],
    correctIndex: 1,
    explanation:
      'Iambic pentameter consists of five iambic feet per line -- ten syllables alternating between unstressed and stressed (da-DUM da-DUM da-DUM da-DUM da-DUM).',
  },
  {
    id: 'p6',
    topic: 'poetry',
    question: 'Which poet wrote "Ozymandias"?',
    options: ['William Blake', 'Percy Bysshe Shelley', 'John Keats', 'Lord Byron'],
    correctIndex: 1,
    explanation:
      'Percy Bysshe Shelley wrote "Ozymandias" in 1818, exploring themes of power, hubris, and the impermanence of human achievements.',
    boards: ['aqa'], // Power & Conflict cluster (AQA anthology)
  },
  {
    id: 'p7',
    topic: 'poetry',
    question: 'What is a caesura?',
    options: [
      'A break or pause in the middle of a line',
      'The last word of a line',
      'A type of rhyme scheme',
      'Repetition of vowel sounds',
    ],
    correctIndex: 0,
    explanation:
      'A caesura is a pause or break within a line of poetry, often marked by punctuation such as a comma, full stop, or dash.',
  },
  {
    id: 'p8',
    topic: 'poetry',
    question: 'What is the rhyme scheme of a Shakespearean sonnet?',
    options: ['ABBA ABBA CDE CDE', 'ABAB CDCD EFEF GG', 'AABB CCDD EEFF GG', 'ABCB DEFE GHIH JJ'],
    correctIndex: 1,
    explanation:
      'A Shakespearean (English) sonnet follows the ABAB CDCD EFEF GG rhyme scheme, with three quatrains and a closing couplet.',
  },
  {
    id: 'p9',
    topic: 'poetry',
    question: "What theme is central to Wilfred Owen's war poetry?",
    options: [
      'The glory of battle',
      'The futility and horror of war',
      'Patriotic pride',
      'The beauty of nature',
    ],
    correctIndex: 1,
    explanation:
      "Owen's poetry is renowned for its unflinching depiction of the horrors of trench warfare, challenging romanticised views of conflict.",
  },
  {
    id: 'p10',
    topic: 'poetry',
    question: 'What is assonance?',
    options: [
      'Repetition of consonant sounds',
      'Repetition of vowel sounds within words',
      'Words that sound like their meaning',
      'Comparing two things using "like" or "as"',
    ],
    correctIndex: 1,
    explanation:
      'Assonance is the repetition of vowel sounds in nearby words, creating internal rhyming and a musical quality.',
  },
  {
    id: 'p11',
    topic: 'poetry',
    question: 'In "London" by William Blake, what does the phrase "mind-forg\'d manacles" suggest?',
    options: [
      'Physical chains on prisoners',
      'Mental restrictions imposed by society',
      'Decorative jewellery',
      'Industrial machinery',
    ],
    correctIndex: 1,
    explanation:
      'The metaphor "mind-forg\'d manacles" suggests that people are mentally imprisoned by societal institutions and their own acceptance of oppression.',
    boards: ['aqa'], // Blake's "London" appears in AQA Power & Conflict cluster
  },
  {
    id: 'p12',
    topic: 'poetry',
    question: 'What is a dramatic monologue?',
    options: [
      'A poem with two speakers',
      'A poem where a single character speaks to a silent listener',
      'A poem written as a letter',
      'A poem that tells a story chronologically',
    ],
    correctIndex: 1,
    explanation:
      'A dramatic monologue is a poem where a single speaker addresses a silent listener, revealing their character and situation through their words.',
  },
  {
    id: 'p13',
    topic: 'poetry',
    question: 'What is the effect of using a first-person narrative voice in poetry?',
    options: [
      'It creates distance from the reader',
      'It creates intimacy and personal connection',
      'It makes the poem more formal',
      'It removes emotion from the poem',
    ],
    correctIndex: 1,
    explanation:
      'First-person narration creates an intimate, personal connection between the speaker and reader, making emotions feel more immediate and authentic.',
  },
  {
    id: 'p14',
    topic: 'poetry',
    question: 'What type of poem is "The Charge of the Light Brigade" by Tennyson?',
    options: ['Sonnet', 'Ballad', 'Narrative poem', 'Haiku'],
    correctIndex: 2,
    explanation:
      'It is a narrative poem that tells the story of the disastrous British cavalry charge during the Battle of Balaclava in the Crimean War.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p15',
    topic: 'poetry',
    question: 'What is sibilance?',
    options: [
      'Repetition of "s" and "sh" sounds',
      'Repetition of hard consonant sounds',
      'Using words that sound like what they describe',
      'A long pause in a line',
    ],
    correctIndex: 0,
    explanation:
      'Sibilance is the repetition of "s", "sh", "z", and similar sounds, often creating a hissing or whispering effect.',
  },
  {
    id: 'p16',
    topic: 'poetry',
    question: 'What form does "My Last Duchess" by Robert Browning take?',
    options: [
      'Free verse',
      'Dramatic monologue in rhyming couplets',
      'Petrarchan sonnet',
      'Villanelle',
    ],
    correctIndex: 1,
    explanation:
      '"My Last Duchess" is a dramatic monologue written in rhyming couplets (heroic couplets), with the Duke speaking to an envoy.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p17',
    topic: 'poetry',
    question: 'What is the purpose of a refrain in poetry?',
    options: [
      'To introduce a new idea',
      'To create emphasis through repetition',
      'To change the tone of the poem',
      'To end the poem abruptly',
    ],
    correctIndex: 1,
    explanation:
      'A refrain is a repeated line or phrase that creates emphasis, reinforces key themes, and provides rhythmic structure to a poem.',
  },
  {
    id: 'p18',
    topic: 'poetry',
    question: 'What is free verse?',
    options: [
      'Poetry with no consistent metre, rhyme, or structure',
      'Poetry that must be read aloud',
      'Poetry written without punctuation',
      'Poetry about freedom and liberty',
    ],
    correctIndex: 0,
    explanation:
      'Free verse is poetry that does not follow regular metre, rhyme scheme, or line length, giving the poet more freedom of expression.',
  },
  {
    id: 'p19',
    topic: 'poetry',
    question: 'In "Exposure" by Wilfred Owen, what is the main enemy the soldiers face?',
    options: ['The opposing army', 'The weather and elements', 'Their own officers', 'Disease'],
    correctIndex: 1,
    explanation:
      'In "Exposure", the main enemy is the bitter cold and harsh weather conditions, which Owen presents as more deadly than the enemy soldiers.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p20',
    topic: 'poetry',
    question: 'What is an extended metaphor?',
    options: [
      'A very long poem',
      'A metaphor that continues throughout multiple lines or an entire poem',
      'A comparison using "like" or "as"',
      'A metaphor at the end of a poem',
    ],
    correctIndex: 1,
    explanation:
      'An extended metaphor is a metaphor that is developed and sustained over several lines, a stanza, or even an entire poem.',
  },

  // ─── AQA Power & Conflict poems (~30 questions) ────────────────────────
  {
    id: 'p101',
    topic: 'poetry',
    question: 'Who wrote the poem "Storm on the Island"?',
    options: ['Ted Hughes', 'Seamus Heaney', 'Simon Armitage', 'Carol Ann Duffy'],
    correctIndex: 1,
    explanation:
      'Seamus Heaney wrote "Storm on the Island", exploring the power of nature and how a community faces a violent storm.',
    boards: ['aqa'],
  },
  {
    id: 'p102',
    topic: 'poetry',
    question: 'What is the hidden word within the title "Storm on the Island"?',
    options: ['Stormy', 'Ireland', 'Islam', 'Inland'],
    correctIndex: 2,
    explanation:
      'The letters of "Stormont" and "Island" combine to hide the word "Islam" -- but more significantly, the first eight letters spell "Stormont", alluding to Northern Irish politics.',
    boards: ['aqa'],
  },
  {
    id: 'p103',
    topic: 'poetry',
    question: 'In "Bayonet Charge" by Ted Hughes, what is the soldier running towards?',
    options: [
      'Safety behind the lines',
      'A hedge of green',
      'His commanding officer',
      'A field hospital',
    ],
    correctIndex: 1,
    explanation:
      'The soldier charges towards enemy lines across open ground, with Hughes describing a "green hedge" that the soldier runs toward as bullets fly.',
    boards: ['aqa'],
  },
  {
    id: 'p104',
    topic: 'poetry',
    question: 'What war does "Bayonet Charge" by Ted Hughes depict?',
    options: ['World War II', 'The Crimean War', 'World War I', 'The Korean War'],
    correctIndex: 2,
    explanation:
      '"Bayonet Charge" depicts a World War I infantry charge, capturing the raw terror of going over the top. Hughes was born in 1930 and never fought in any war — he drew on his father William\'s WWI accounts (William survived Gallipoli, one of only seventeen of his Lancashire Fusiliers regiment to return) to imagine the soldier\'s experience.',
    boards: ['aqa'],
  },
  {
    id: 'p105',
    topic: 'poetry',
    question: 'In "Remains" by Simon Armitage, what haunts the speaker?',
    options: [
      'The sound of gunfire',
      'The memory of shooting a looter',
      'A letter from home',
      'The desert landscape',
    ],
    correctIndex: 1,
    explanation:
      'The speaker is haunted by the memory of shooting a looter and cannot rid himself of the image, exploring PTSD and the psychological effects of conflict.',
    boards: ['aqa'],
  },
  {
    id: 'p106',
    topic: 'poetry',
    question: 'What form is "Ozymandias" written in?',
    options: ['Free verse', 'Sonnet', 'Ballad', 'Villanelle'],
    correctIndex: 1,
    explanation:
      '"Ozymandias" is a sonnet, though Shelley deliberately disrupts the traditional rhyme scheme to mirror the decay of the statue and the king\'s power.',
    boards: ['aqa'],
  },
  {
    id: 'p107',
    topic: 'poetry',
    question: 'In "Ozymandias", what remains of the statue in the desert?',
    options: [
      'The full statue intact',
      'Only the legs and a shattered face',
      'Just the inscription',
      'Nothing at all',
    ],
    correctIndex: 1,
    explanation:
      'Only two vast trunkless legs and a shattered visage remain, emphasising the impermanence of human power and achievements.',
    boards: ['aqa'],
  },
  {
    id: 'p108',
    topic: 'poetry',
    question: 'What is the main theme of "The Prelude" extract by William Wordsworth?',
    options: [
      'The glory of war',
      'The power of nature over humanity',
      'Romantic love',
      'Industrial progress',
    ],
    correctIndex: 1,
    explanation:
      "The extract shows Wordsworth's initial confidence being overwhelmed by the terrifying power of nature, represented by the mountain.",
    boards: ['aqa'],
  },
  {
    id: 'p109',
    topic: 'poetry',
    question: 'In "Kamikaze" by Beatrice Garland, what decision does the pilot make?',
    options: [
      'He completes his mission',
      'He turns his plane around and returns home',
      'He crashes into the sea',
      'He defects to the enemy',
    ],
    correctIndex: 1,
    explanation:
      'The pilot turns back from his kamikaze mission, but is then shunned by his family and community for his perceived dishonour.',
    boards: ['aqa'],
  },
  {
    id: 'p110',
    topic: 'poetry',
    question: 'Who wrote "Checking Out Me History"?',
    options: ['Benjamin Zephaniah', 'John Agard', 'Grace Nichols', 'Linton Kwesi Johnson'],
    correctIndex: 1,
    explanation:
      'John Agard wrote "Checking Out Me History", challenging the Eurocentric history taught in British schools and celebrating Caribbean and African historical figures.',
    boards: ['aqa'],
  },
  {
    id: 'p111',
    topic: 'poetry',
    question:
      'What form does "Checking Out Me History" use to distinguish different types of history?',
    options: [
      'Sonnets and free verse',
      'Standard English stanzas and Creole/italicised stanzas',
      'Rhyming couplets throughout',
      'Prose poetry',
    ],
    correctIndex: 1,
    explanation:
      'Agard alternates between Standard English stanzas (for imposed colonial history) and Creole/italicised stanzas (for suppressed Black history), highlighting the contrast.',
    boards: ['aqa'],
  },
  {
    id: 'p112',
    topic: 'poetry',
    question: 'In "Poppies" by Jane Weir, what is the mother doing at the beginning of the poem?',
    options: [
      'Writing a letter to her son',
      "Pinning a poppy to her son's blazer",
      'Visiting a war memorial',
      "Packing her son's bag",
    ],
    correctIndex: 1,
    explanation:
      "The poem opens with the mother pinning a poppy to her son's lapel, blending Remembrance Day imagery with the personal act of a parent letting go.",
    boards: ['aqa'],
  },
  {
    id: 'p113',
    topic: 'poetry',
    question: 'What theme connects "Ozymandias" and "My Last Duchess"?',
    options: [
      'The beauty of nature',
      'The abuse and impermanence of power',
      'Romantic love',
      'War and conflict',
    ],
    correctIndex: 1,
    explanation:
      'Both poems explore how powerful men attempt to control others but ultimately reveal the limitations and corruption of their power.',
    boards: ['aqa'],
  },
  {
    id: 'p114',
    topic: 'poetry',
    question: 'In "War Photographer" by Carol Ann Duffy, what is the photographer doing?',
    options: [
      'Taking photos on a battlefield',
      'Developing photographs in his darkroom',
      'Displaying photos in a gallery',
      'Burning his photographs',
    ],
    correctIndex: 1,
    explanation:
      'The poem describes a war photographer developing his photos in his darkroom in rural England, reflecting on the horrors he has witnessed.',
    boards: ['aqa'],
  },
  {
    id: 'p115',
    topic: 'poetry',
    question: 'What contrast is central to "War Photographer" by Carol Ann Duffy?',
    options: [
      'Light and dark',
      'The suffering abroad versus complacent life in England',
      'Youth and old age',
      'Urban and rural life',
    ],
    correctIndex: 1,
    explanation:
      'Duffy contrasts the extreme suffering in war zones with the comfortable indifference of people in England who glance at the photos in newspapers.',
    boards: ['aqa'],
  },
  {
    id: 'p116',
    topic: 'poetry',
    question: 'In "Tissue" by Imtiaz Dharker, what does paper symbolise?',
    options: [
      'Wealth and greed',
      'The fragility and power of human life and structures',
      'Nature and the environment',
      'Religious devotion',
    ],
    correctIndex: 1,
    explanation:
      'Paper symbolises both the fragility and the power of human creations -- maps, receipts, holy books -- suggesting that life itself is delicate like tissue.',
    boards: ['aqa'],
  },
  {
    id: 'p117',
    topic: 'poetry',
    question: 'Who wrote "The Émigrée"?',
    options: ['Imtiaz Dharker', 'Carol Rumens', 'Carol Ann Duffy', 'Beatrice Garland'],
    correctIndex: 1,
    explanation:
      'Carol Rumens wrote "The Émigrée", exploring the speaker\'s idealised memories of a homeland they can never return to.',
    boards: ['aqa'],
  },
  {
    id: 'p118',
    topic: 'poetry',
    question: 'In "London" by William Blake, what does the River Thames represent?',
    options: [
      'Freedom and escape',
      'Trade and wealth',
      'The flow of suffering through the city',
      'Natural beauty',
    ],
    correctIndex: 2,
    explanation:
      'The Thames, described as "charter\'d", represents how even natural elements are controlled and corrupted, carrying the suffering of London\'s people.',
    boards: ['aqa'],
  },
  {
    id: 'p119',
    topic: 'poetry',
    question: 'What technique does Wilfred Owen use in the title "Exposure"?',
    options: ['Metaphor', 'Double meaning / ambiguity', 'Alliteration', 'Hyperbole'],
    correctIndex: 1,
    explanation:
      '"Exposure" has a double meaning -- physical exposure to the freezing weather and the exposure of the truth about war\'s horrors.',
    boards: ['aqa'],
  },
  {
    id: 'p120',
    topic: 'poetry',
    question:
      'Which two poems both explore the theme of memory and loss in the Power & Conflict anthology?',
    options: [
      '"Ozymandias" and "Tissue"',
      '"Poppies" and "Kamikaze"',
      '"London" and "Checking Out Me History"',
      '"Storm on the Island" and "Bayonet Charge"',
    ],
    correctIndex: 1,
    explanation:
      'Both "Poppies" and "Kamikaze" explore how memory shapes the experience of loss -- a mother remembering her son and a family remembering a father\'s decision.',
    boards: ['aqa'],
  },
  {
    id: 'p121',
    topic: 'poetry',
    question:
      'In "The Charge of the Light Brigade", what does the repetition of "six hundred" emphasise?',
    options: [
      'The wealth of the soldiers',
      'The large number of soldiers sacrificed',
      'The duration of the battle',
      'The distance they rode',
    ],
    correctIndex: 1,
    explanation:
      'The repeated "six hundred" emphasises the sheer number of men riding to their deaths, reinforcing the scale of the sacrifice.',
    boards: ['aqa'],
  },
  {
    id: 'p122',
    topic: 'poetry',
    question:
      'What is the effect of the first-person plural pronoun "we" in "Storm on the Island"?',
    options: [
      'It distances the reader',
      'It creates a sense of shared community experience',
      'It shows the speaker is royalty',
      'It suggests multiple narrators',
    ],
    correctIndex: 1,
    explanation:
      'The collective "we" creates a sense of community solidarity -- the islanders facing the storm together -- and draws the reader into their experience.',
    boards: ['aqa'],
  },
  {
    id: 'p123',
    topic: 'poetry',
    question: 'In "Remains", what does the colloquial language suggest about the speaker?',
    options: [
      'He is well-educated',
      'He is an ordinary soldier trying to process trauma in everyday language',
      'He is writing a formal report',
      'He is speaking to a superior officer',
    ],
    correctIndex: 1,
    explanation:
      'The informal, conversational tone mirrors how a real soldier might recount events, making the trauma feel more authentic and immediate.',
    boards: ['aqa'],
  },
  {
    id: 'p124',
    topic: 'poetry',
    question: 'What is the effect of the short final stanza in "Exposure" by Wilfred Owen?',
    options: [
      'It creates a sense of resolution',
      "It mirrors the soldiers' fading energy and impending death",
      'It introduces a new character',
      'It shifts to a hopeful tone',
    ],
    correctIndex: 1,
    explanation:
      "The shorter final stanza mirrors the soldiers' diminishing strength and the gradual approach of death through exposure to the cold.",
    boards: ['aqa'],
  },
  {
    id: 'p125',
    topic: 'poetry',
    question: 'Who is the Duke speaking to in "My Last Duchess"?',
    options: ['His deceased wife', 'A servant', 'An envoy arranging his next marriage', 'A priest'],
    correctIndex: 2,
    explanation:
      "The Duke is speaking to an envoy who is negotiating the Duke's next marriage, revealing his controlling and possessive nature.",
    boards: ['aqa'],
  },
  {
    id: 'p126',
    topic: 'poetry',
    question: 'In "The Prelude", what does the mountain represent?',
    options: [
      'Human achievement',
      'The sublime and terrifying power of nature',
      "God's judgement",
      'A political boundary',
    ],
    correctIndex: 1,
    explanation:
      'The mountain represents the sublime power of nature that overwhelms the young Wordsworth, transforming his confidence into fear and awe.',
    boards: ['aqa'],
  },
  {
    id: 'p127',
    topic: 'poetry',
    question:
      'What technique does Tennyson use in "Cannon to right of them, / Cannon to left of them"?',
    options: ['Enjambment', 'Anaphora (repetition)', 'Oxymoron', 'Pathetic fallacy'],
    correctIndex: 1,
    explanation:
      'The repetition of "Cannon to..." (anaphora) emphasises the soldiers being surrounded and trapped by enemy fire on all sides.',
    boards: ['aqa'],
  },
  {
    id: 'p128',
    topic: 'poetry',
    question: 'In "Kamikaze", why is the poem told partly in the daughter\'s voice?',
    options: [
      'Because the pilot cannot read',
      "To create distance and show the family's shame and silence",
      'Because the daughter was on the plane',
      'To add humour',
    ],
    correctIndex: 1,
    explanation:
      "The daughter's narration creates distance from the pilot's perspective, reflecting how the family shut him out and refused to speak to him directly.",
    boards: ['aqa'],
  },
  {
    id: 'p129',
    topic: 'poetry',
    question:
      'Which poem in the Power & Conflict anthology is a dramatic monologue about a controlling Renaissance duke?',
    options: ['"Ozymandias"', '"My Last Duchess"', '"Checking Out Me History"', '"The Émigrée"'],
    correctIndex: 1,
    explanation:
      '"My Last Duchess" by Robert Browning is a dramatic monologue in which the Duke reveals his jealous, controlling nature as he discusses his late wife.',
    boards: ['aqa'],
  },
  {
    id: 'p130',
    topic: 'poetry',
    question: 'What is the effect of the lack of regular rhyme scheme in "Remains"?',
    options: [
      'It makes the poem sound like a nursery rhyme',
      "It reflects the disorder and chaos of the speaker's traumatised mind",
      'It shows the speaker is uneducated',
      'It creates a formal, dignified tone',
    ],
    correctIndex: 1,
    explanation:
      "The irregular structure mirrors the speaker's disordered psychological state and the way traumatic memories resist neat organisation.",
    boards: ['aqa'],
  },

  // ─── AQA Love & Relationships poems (~20 questions) ────────────────────
  {
    id: 'p131',
    topic: 'poetry',
    question: 'Who wrote "Love\'s Philosophy"?',
    options: ['Lord Byron', 'Percy Bysshe Shelley', 'John Keats', 'Robert Browning'],
    correctIndex: 1,
    explanation:
      'Percy Bysshe Shelley wrote "Love\'s Philosophy", using natural imagery to argue that everything in nature is connected, so lovers should be too.',
    boards: ['aqa'],
  },
  {
    id: 'p132',
    topic: 'poetry',
    question: 'In "When We Two Parted" by Lord Byron, what emotion dominates the poem?',
    options: ['Joy', 'Grief and betrayal', 'Anger', 'Confusion'],
    correctIndex: 1,
    explanation:
      'The poem is dominated by grief and a sense of betrayal as Byron reflects on a secret love affair that ended painfully.',
    boards: ['aqa'],
  },
  {
    id: 'p133',
    topic: 'poetry',
    question: 'What is the central metaphor in "Winter Swans" by Owen Sheers?',
    options: [
      'A thunderstorm represents passion',
      'Swans reuniting on a lake mirror a couple reconciling',
      'Winter represents death',
      'A frozen river represents emotional coldness',
    ],
    correctIndex: 1,
    explanation:
      "The swans' behaviour on the lake mirrors the couple's relationship -- moving apart then coming back together, symbolising reconciliation.",
    boards: ['aqa'],
  },
  {
    id: 'p134',
    topic: 'poetry',
    question: 'In "Singh Song!" by Daljit Nagra, what kind of language does the speaker use?',
    options: [
      'Formal Standard English',
      'A blend of Punjabi-influenced English and colloquial language',
      'Old English',
      'Legal terminology',
    ],
    correctIndex: 1,
    explanation:
      "Nagra uses Punjabi-inflected English to celebrate the speaker's dual cultural identity and create a distinctive, playful voice.",
    boards: ['aqa'],
  },
  {
    id: 'p135',
    topic: 'poetry',
    question: 'What does the "Farmer\'s Bride" by Charlotte Mew explore?',
    options: [
      'A happy rural marriage',
      "A farmer's unrequited desire and his wife's fear of intimacy",
      'The joys of countryside life',
      "A woman's love for farming",
    ],
    correctIndex: 1,
    explanation:
      "The poem explores the farmer's frustrated desire for his young wife, who is terrified of physical closeness, raising themes of consent and entrapment.",
    boards: ['aqa'],
  },
  {
    id: 'p136',
    topic: 'poetry',
    question: 'In "Walking Away" by Cecil Day-Lewis, what event is the poet describing?',
    options: [
      'His wedding day',
      'Watching his son walk to school for the first time',
      'Leaving his hometown',
      'A funeral',
    ],
    correctIndex: 1,
    explanation:
      'Day-Lewis describes watching his young son walk away to play a football match, using it as a metaphor for the painful process of letting a child go.',
    boards: ['aqa'],
  },
  {
    id: 'p137',
    topic: 'poetry',
    question: 'Who wrote "Mother, Any Distance"?',
    options: ['Carol Ann Duffy', 'Simon Armitage', 'Seamus Heaney', 'Owen Sheers'],
    correctIndex: 1,
    explanation:
      'Simon Armitage wrote "Mother, Any Distance", exploring the bond between mother and son as the son moves into his own home.',
    boards: ['aqa'],
  },
  {
    id: 'p138',
    topic: 'poetry',
    question: 'In "Mother, Any Distance", what does the tape measure symbolise?',
    options: [
      "The mother's wealth",
      'The umbilical cord and the bond between mother and child',
      "The son's career",
      'Time passing',
    ],
    correctIndex: 1,
    explanation:
      'The tape measure symbolises the umbilical cord and the stretching bond between mother and son as he gains independence.',
    boards: ['aqa'],
  },
  {
    id: 'p139',
    topic: 'poetry',
    question:
      'What sonnet form does "Sonnet 29 -- I Think of Thee!" by Elizabeth Barrett Browning use?',
    options: ['Shakespearean', 'Petrarchan', 'Spenserian', 'Free verse'],
    correctIndex: 1,
    explanation:
      'Barrett Browning uses the Petrarchan sonnet form with an octave and sestet, reflecting the Italian tradition of love poetry.',
    boards: ['aqa'],
  },
  {
    id: 'p140',
    topic: 'poetry',
    question: 'In "Sonnet 29", what does the vine imagery represent?',
    options: [
      "The speaker's thoughts overwhelming her beloved",
      'Death and decay',
      'Financial dependence',
      'Political entanglement',
    ],
    correctIndex: 0,
    explanation:
      "The vine and tree imagery represents the speaker's overwhelming thoughts about her beloved, which threaten to obscure the real person.",
    boards: ['aqa'],
  },
  {
    id: 'p141',
    topic: 'poetry',
    question: 'What is the tone of "Neutral Tones" by Thomas Hardy?',
    options: [
      'Joyful and celebratory',
      'Bitter, disillusioned, and bleak',
      'Angry and aggressive',
      'Hopeful and optimistic',
    ],
    correctIndex: 1,
    explanation:
      '"Neutral Tones" has a bitter, bleak tone as Hardy reflects on the death of a relationship, using a drained, colourless winter landscape to mirror his feelings.',
    boards: ['aqa'],
  },
  {
    id: 'p142',
    topic: 'poetry',
    question: 'In "Letters from Yorkshire" by Maura Dooley, what contrast is explored?',
    options: [
      'Rich and poor',
      'Urban intellectual life versus rural physical life',
      'Youth and old age',
      'War and peace',
    ],
    correctIndex: 1,
    explanation:
      "Dooley contrasts her indoor, screen-based working life with her correspondent's physical, outdoor life in Yorkshire, questioning which is more real.",
    boards: ['aqa'],
  },
  {
    id: 'p143',
    topic: 'poetry',
    question: 'Who wrote "Eden Rock"?',
    options: ['Simon Armitage', 'Charles Causley', 'Owen Sheers', 'Carol Ann Duffy'],
    correctIndex: 1,
    explanation:
      'Charles Causley wrote "Eden Rock", a poem in which the speaker imagines his deceased parents waiting for him in an idyllic, heavenly setting.',
    boards: ['aqa'],
  },
  {
    id: 'p144',
    topic: 'poetry',
    question: 'In "Eden Rock", what does the crossing of the stream suggest?',
    options: [
      'A holiday trip',
      'The boundary between life and death',
      'Moving to a new country',
      'A childhood adventure',
    ],
    correctIndex: 1,
    explanation:
      'The stream represents the boundary between life and death, with the parents beckoning the speaker to cross over and join them.',
    boards: ['aqa'],
  },
  {
    id: 'p145',
    topic: 'poetry',
    question:
      'What theme links "Before You Were Mine" by Carol Ann Duffy and "Walking Away" by Cecil Day-Lewis?',
    options: [
      'War and conflict',
      'Parent-child relationships and the passage of time',
      'Religious faith',
      "Nature's power",
    ],
    correctIndex: 1,
    explanation:
      "Both poems explore parent-child relationships across time -- Duffy imagines her mother's youth, while Day-Lewis remembers letting his son go.",
    boards: ['aqa'],
  },
  {
    id: 'p146',
    topic: 'poetry',
    question: 'In "Before You Were Mine", what does Duffy imagine about her mother?',
    options: [
      "Her mother's childhood poverty",
      "Her mother's glamorous, carefree youth before motherhood",
      "Her mother's war experience",
      "Her mother's religious devotion",
    ],
    correctIndex: 1,
    explanation:
      "Duffy imagines her mother's exciting, independent life before she was born, suggesting that motherhood changed and limited her mother's freedom.",
    boards: ['aqa'],
  },
  {
    id: 'p147',
    topic: 'poetry',
    question: 'What form is "Follower" by Seamus Heaney written in?',
    options: ['Free verse', 'Regular quatrains', 'Sonnet', 'Villanelle'],
    correctIndex: 1,
    explanation:
      '"Follower" is written in regular quatrains with a tight rhyme scheme, reflecting the disciplined, ordered work of ploughing that the poem describes.',
    boards: ['aqa'],
  },
  {
    id: 'p148',
    topic: 'poetry',
    question: 'In "Follower", how does the power dynamic between father and son shift?',
    options: [
      'It stays the same throughout',
      'The son who once followed his father now finds his elderly father following him',
      'The father abandons the son',
      'The son becomes a farmer too',
    ],
    correctIndex: 1,
    explanation:
      'The poem reverses roles: the child who once stumbled behind his expert father now finds his aging father "will not go away", following him instead.',
    boards: ['aqa'],
  },
  {
    id: 'p149',
    topic: 'poetry',
    question: 'In "Climbing My Grandfather" by Andrew Waterhouse, what extended metaphor is used?',
    options: [
      'The grandfather as a ship',
      'The grandfather as a mountain to climb',
      'The grandfather as a tree',
      'The grandfather as a house',
    ],
    correctIndex: 1,
    explanation:
      "Waterhouse uses the extended metaphor of mountain climbing to describe exploring his grandfather's body, conveying closeness and admiration.",
    boards: ['aqa'],
  },
  {
    id: 'p150',
    topic: 'poetry',
    question:
      'Which two poems in the Love & Relationships anthology both use natural settings to reflect on love?',
    options: [
      '"Singh Song!" and "Letters from Yorkshire"',
      '"Neutral Tones" and "Winter Swans"',
      '"Mother, Any Distance" and "Climbing My Grandfather"',
      '"Eden Rock" and "Before You Were Mine"',
    ],
    correctIndex: 1,
    explanation:
      'Both "Neutral Tones" and "Winter Swans" use natural landscapes (a pond in winter, a lake with swans) to mirror the emotional state of their relationships.',
    boards: ['aqa'],
  },

  // ─── General poetry techniques (no boards tag = all boards) (~30 questions) ─
  {
    id: 'p151',
    topic: 'poetry',
    question: 'What is a stanza in poetry?',
    options: [
      'A single line of poetry',
      'A group of lines forming a unit within a poem',
      'The title of a poem',
      'The rhyme at the end of a line',
    ],
    correctIndex: 1,
    explanation:
      'A stanza is a grouped set of lines within a poem, usually separated by a blank line, functioning like a paragraph in prose.',
  },
  {
    id: 'p152',
    topic: 'poetry',
    question: 'What is pathetic fallacy?',
    options: [
      'A logical error in an argument',
      'Using weather or environment to reflect human emotions',
      'A type of irony',
      'An exaggerated statement',
    ],
    correctIndex: 1,
    explanation:
      'Pathetic fallacy is when the natural world (weather, landscape) is used to mirror or reflect the emotions of characters or the mood of a scene.',
  },
  {
    id: 'p153',
    topic: 'poetry',
    question: 'What is the difference between a simile and a metaphor?',
    options: [
      'A simile is longer than a metaphor',
      'A simile uses "like" or "as"; a metaphor states something is something else',
      'A metaphor uses "like" or "as"; a simile does not',
      'There is no difference',
    ],
    correctIndex: 1,
    explanation:
      'A simile compares using "like" or "as" (e.g. "brave as a lion"), while a metaphor directly states that something is something else (e.g. "he is a lion").',
  },
  {
    id: 'p154',
    topic: 'poetry',
    question: 'What is onomatopoeia?',
    options: [
      'A word that sounds like the thing it describes',
      'Repeating the first letter of words',
      'Exaggerating for effect',
      'A question asked for effect',
    ],
    correctIndex: 0,
    explanation:
      'Onomatopoeia is when a word phonetically imitates the sound it describes, such as "buzz", "crash", "whisper", or "bang".',
  },
  {
    id: 'p155',
    topic: 'poetry',
    question: 'What is a rhetorical question in poetry?',
    options: [
      'A question expecting no answer, used for effect',
      'A question the poet answers immediately',
      'A question asked by the reader',
      'A factual question in an exam',
    ],
    correctIndex: 0,
    explanation:
      'A rhetorical question is asked for dramatic effect rather than to receive an answer, often to provoke thought or emphasise a point.',
  },
  {
    id: 'p156',
    topic: 'poetry',
    question: 'What is the effect of plosive consonants (b, d, p, t, k, g) in poetry?',
    options: [
      'They create a soft, gentle sound',
      'They create a harsh, explosive, aggressive sound',
      'They slow the pace of the poem',
      'They create a whispering effect',
    ],
    correctIndex: 1,
    explanation:
      'Plosive sounds are harsh and explosive, often used to convey anger, violence, power, or intensity in a poem.',
  },
  {
    id: 'p157',
    topic: 'poetry',
    question: 'What is a couplet?',
    options: [
      'A poem about love',
      'Two consecutive lines that rhyme',
      'A poem with two stanzas',
      'Two poems by the same author',
    ],
    correctIndex: 1,
    explanation:
      'A couplet is a pair of successive lines that usually rhyme and have the same metre, often used to conclude a sonnet.',
  },
  {
    id: 'p158',
    topic: 'poetry',
    question: 'What is juxtaposition in poetry?',
    options: [
      'Placing two contrasting ideas, images, or words close together for effect',
      'Using the same word twice',
      'Writing in two different languages',
      'Breaking a line in the middle',
    ],
    correctIndex: 0,
    explanation:
      'Juxtaposition places contrasting elements side by side to highlight their differences, create tension, or provoke thought.',
  },
  {
    id: 'p159',
    topic: 'poetry',
    question: 'What is a Petrarchan sonnet?',
    options: [
      'A 14-line poem with an octave (ABBAABBA) and a sestet',
      'A 14-line poem with three quatrains and a couplet',
      'A 12-line poem about love',
      'A poem with no rhyme scheme',
    ],
    correctIndex: 0,
    explanation:
      'A Petrarchan (Italian) sonnet has an octave (8 lines, ABBAABBA) and a sestet (6 lines, various rhyme schemes), with a volta between them.',
  },
  {
    id: 'p160',
    topic: 'poetry',
    question: 'What is the effect of monosyllabic words in a line of poetry?',
    options: [
      'They speed up the rhythm',
      'They can create a blunt, forceful, or emphatic effect',
      'They always create a gentle tone',
      'They have no particular effect',
    ],
    correctIndex: 1,
    explanation:
      'Monosyllabic words (one-syllable words) can create a stark, forceful, punchy effect, slowing the reader down and adding weight to each word.',
  },
  {
    id: 'p161',
    topic: 'poetry',
    question: 'What is an oxymoron?',
    options: [
      'An extreme exaggeration',
      'A figure of speech combining two contradictory terms',
      'A question asked for effect',
      'A reference to another text',
    ],
    correctIndex: 1,
    explanation:
      'An oxymoron combines two contradictory or opposite words (e.g. "bitter sweet", "living death") to create a paradoxical effect.',
  },
  {
    id: 'p162',
    topic: 'poetry',
    question: 'What is anaphora?',
    options: [
      'A comparison using "as"',
      'The repetition of a word or phrase at the start of successive lines',
      'A reference to a historical event',
      'A poem about nature',
    ],
    correctIndex: 1,
    explanation:
      'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive lines or clauses, creating emphasis and rhythm.',
  },
  {
    id: 'p163',
    topic: 'poetry',
    question: 'What is tone in poetry?',
    options: [
      'The volume at which a poem should be read',
      "The poet's attitude or emotional quality conveyed through word choice",
      'The number of stanzas',
      'The rhyme scheme',
    ],
    correctIndex: 1,
    explanation:
      'Tone is the attitude or emotional quality the poet conveys through language choices, such as angry, reflective, mournful, or celebratory.',
  },
  {
    id: 'p164',
    topic: 'poetry',
    question: 'What is a semantic field?',
    options: [
      'A field described in a poem',
      'A group of words in a text that relate to the same topic or theme',
      'A type of rhyme scheme',
      'The setting of a poem',
    ],
    correctIndex: 1,
    explanation:
      'A semantic field is a group of words that are related in meaning and cluster around a particular theme (e.g. words related to war, nature, or religion).',
  },
  {
    id: 'p165',
    topic: 'poetry',
    question: 'What is the effect of end-stopped lines in poetry?',
    options: [
      'They create a breathless, rushing effect',
      'They create pauses, giving a sense of control, finality, or certainty',
      'They always indicate anger',
      'They remove all rhythm from the poem',
    ],
    correctIndex: 1,
    explanation:
      'End-stopped lines finish with punctuation, creating definite pauses that can suggest certainty, control, or deliberate emphasis.',
  },
  {
    id: 'p166',
    topic: 'poetry',
    question: 'What is synaesthesia?',
    options: [
      'A disease mentioned in poems',
      'Describing one sense in terms of another',
      'A type of rhyme',
      'Repetition of sounds',
    ],
    correctIndex: 1,
    explanation:
      'Synaesthesia is a literary device where one sense is described using terms from another (e.g. "loud colours", "bitter cold"), creating vivid, unusual imagery.',
  },
  {
    id: 'p167',
    topic: 'poetry',
    question: 'What is the difference between "voice" and "speaker" in poetry?',
    options: [
      'They mean the same thing',
      'The speaker is the character in the poem; the voice is the tone and style',
      'The voice is always the poet',
      'The speaker is always fictional',
    ],
    correctIndex: 1,
    explanation:
      'The speaker is the persona or character narrating the poem (not always the poet), while the voice refers to the distinctive tone, style, and attitude conveyed.',
  },
  {
    id: 'p168',
    topic: 'poetry',
    question: 'What is a villanelle?',
    options: [
      'A 14-line poem',
      'A 19-line poem with two repeating refrains and a specific pattern',
      'A poem about a villain',
      'A type of free verse',
    ],
    correctIndex: 1,
    explanation:
      'A villanelle is a 19-line poem with five tercets and a quatrain, using two repeating refrains. Famous examples include Dylan Thomas\'s "Do Not Go Gentle".',
  },
  {
    id: 'p169',
    topic: 'poetry',
    question: 'What is imagery in poetry?',
    options: [
      'Only visual descriptions',
      'Language that appeals to any of the five senses',
      'The illustrations in a poetry book',
      'The structure of a poem',
    ],
    correctIndex: 1,
    explanation:
      "Imagery is descriptive language that appeals to any of the five senses (sight, sound, touch, taste, smell), creating vivid pictures in the reader's mind.",
  },
  {
    id: 'p170',
    topic: 'poetry',
    question: 'What is the effect of irregular line lengths in a poem?',
    options: [
      'It always shows the poet is careless',
      'It can reflect instability, uncertainty, or emotional turbulence',
      'It has no effect on meaning',
      'It only appears in sonnets',
    ],
    correctIndex: 1,
    explanation:
      "Irregular line lengths can mirror the speaker's emotional state, suggesting instability, anxiety, or a lack of control.",
  },
  {
    id: 'p171',
    topic: 'poetry',
    question: 'What is allusion in poetry?',
    options: [
      'An illusion created by the poem',
      'An indirect reference to another text, person, or event',
      'A type of rhyme',
      'The physical appearance of a poem on the page',
    ],
    correctIndex: 1,
    explanation:
      'An allusion is an indirect reference to something outside the poem (a text, myth, historical event), adding layers of meaning for the reader.',
  },
  {
    id: 'p172',
    topic: 'poetry',
    question: 'What is a tercet?',
    options: [
      'A three-line stanza or unit',
      'A three-word phrase',
      'A poem with three themes',
      'A poem by three authors',
    ],
    correctIndex: 0,
    explanation:
      'A tercet is a group of three lines of poetry, which may or may not rhyme. Tercets are the building blocks of villanelles and terza rima.',
  },
  {
    id: 'p173',
    topic: 'poetry',
    question: 'What does the term "connotation" mean in poetry analysis?',
    options: [
      'The dictionary definition of a word',
      'The associations and implied meanings a word carries beyond its literal definition',
      'The origin of a word',
      'The pronunciation of a word',
    ],
    correctIndex: 1,
    explanation:
      'Connotation refers to the implied or associated meanings of a word beyond its literal definition, which poets exploit to create deeper layers of meaning.',
  },
  {
    id: 'p174',
    topic: 'poetry',
    question: 'What is a ballad?',
    options: [
      'A poem that tells a story, often with regular rhyme and rhythm',
      'A poem about a ball or dance',
      'A very short poem',
      'A poem with no narrative',
    ],
    correctIndex: 0,
    explanation:
      'A ballad is a narrative poem, traditionally told in quatrains with an ABCB rhyme scheme, often dealing with love, tragedy, or folklore.',
  },
  {
    id: 'p175',
    topic: 'poetry',
    question: 'What is the effect of listing or cataloguing in poetry?',
    options: [
      'It always bores the reader',
      'It can build intensity, overwhelm the reader, or emphasise abundance',
      'It only appears in shopping lists',
      'It removes all emotion',
    ],
    correctIndex: 1,
    explanation:
      'Listing can create a sense of accumulation, abundance, or overwhelming emotion, and can build to a climactic effect.',
  },
  {
    id: 'p176',
    topic: 'poetry',
    question: 'What is a volta and where is it typically found?',
    options: [
      'A type of rhyme, found at the end',
      'A turn in thought or argument, typically at line 9 of a Petrarchan sonnet',
      'The first line of any poem',
      'A repeated refrain',
    ],
    correctIndex: 1,
    explanation:
      'The volta is a shift in argument, tone, or subject. In a Petrarchan sonnet it typically occurs at line 9 (start of the sestet); in a Shakespearean sonnet, at the couplet.',
  },
  {
    id: 'p177',
    topic: 'poetry',
    question: "What is the term for a poem's visual layout on the page?",
    options: ['Tone', 'Form and structure', 'Metre', 'Rhyme scheme'],
    correctIndex: 1,
    explanation:
      'Form and structure refer to the overall shape and organisation of a poem, including line length, stanza arrangement, and visual layout on the page.',
  },
  {
    id: 'p178',
    topic: 'poetry',
    question: 'What is hyperbole?',
    options: [
      'Extreme exaggeration used for emphasis or effect',
      'Understating something',
      'A comparison without using "like"',
      'A type of sonnet',
    ],
    correctIndex: 0,
    explanation:
      'Hyperbole is deliberate exaggeration not meant to be taken literally, used to create emphasis, humour, or to stress a particular point.',
  },
  {
    id: 'p179',
    topic: 'poetry',
    question: 'What is the difference between internal rhyme and end rhyme?',
    options: [
      'There is no difference',
      'Internal rhyme occurs within a single line; end rhyme occurs at the ends of lines',
      'End rhyme is more important',
      'Internal rhyme only appears in sonnets',
    ],
    correctIndex: 1,
    explanation:
      'End rhyme occurs at the ends of lines (the most common type), while internal rhyme is when words within the same line or across adjacent lines rhyme.',
  },
  {
    id: 'p180',
    topic: 'poetry',
    question: 'What does the term "ambiguity" mean in poetry?',
    options: [
      'A mistake by the poet',
      'When a word, phrase, or image can be interpreted in more than one way',
      'A type of stanza',
      'A poem written in a foreign language',
    ],
    correctIndex: 1,
    explanation:
      'Ambiguity is when language is open to multiple interpretations, adding richness and depth to a poem by allowing different readings.',
  },

  // ─── Edexcel anthology (~10 questions) ─────────────────────────────────
  {
    id: 'p181',
    topic: 'poetry',
    question: 'In the Edexcel anthology, who wrote "The Man He Killed"?',
    options: ['Wilfred Owen', 'Thomas Hardy', 'Siegfried Sassoon', 'Rupert Brooke'],
    correctIndex: 1,
    explanation:
      'Thomas Hardy wrote "The Man He Killed", reflecting on the senselessness of war through a soldier who kills an enemy he might otherwise have befriended.',
    boards: ['edexcel'],
  },
  {
    id: 'p182',
    topic: 'poetry',
    question:
      'What is the main theme of "Sonnet 43" (How Do I Love Thee?) by Elizabeth Barrett Browning in the Edexcel anthology?',
    options: [
      'Loss and grief',
      'The depth and breadth of romantic love',
      'Political protest',
      'The power of nature',
    ],
    correctIndex: 1,
    explanation:
      'Barrett Browning catalogues the many ways and dimensions in which she loves, measuring love against faith, idealism, and everyday life.',
    boards: ['edexcel'],
  },
  {
    id: 'p183',
    topic: 'poetry',
    question: 'In "The Soldier" by Rupert Brooke, how does the speaker view death in war?',
    options: [
      'With horror and disgust',
      'As a noble sacrifice that enriches the foreign land with Englishness',
      'With indifference',
      'As something to be avoided at all costs',
    ],
    correctIndex: 1,
    explanation:
      "Brooke presents an idealised, patriotic view of death in war, where the soldier's death enriches the foreign soil with English values.",
    boards: ['edexcel'],
  },
  {
    id: 'p184',
    topic: 'poetry',
    question: 'Who wrote "Afternoons" in the Edexcel anthology?',
    options: ['Ted Hughes', 'Philip Larkin', 'Simon Armitage', 'Seamus Heaney'],
    correctIndex: 1,
    explanation:
      'Philip Larkin wrote "Afternoons", a melancholy observation of young mothers in a park whose identities are being overtaken by domesticity.',
    boards: ['edexcel'],
  },
  {
    id: 'p185',
    topic: 'poetry',
    question: 'What form is "La Belle Dame sans Merci" by John Keats written in?',
    options: ['Sonnet', 'Ballad', 'Free verse', 'Dramatic monologue'],
    correctIndex: 1,
    explanation:
      'Keats uses the traditional ballad form with quatrains and an ABCB rhyme scheme to tell the story of a knight entrapped by a fairy woman.',
    boards: ['edexcel'],
  },
  {
    id: 'p186',
    topic: 'poetry',
    question:
      'In the Edexcel anthology, what does "Dulce et Decorum Est" by Wilfred Owen describe?',
    options: [
      'A peaceful countryside',
      'A gas attack and its horrific aftermath in the trenches',
      'A soldier returning home',
      'A victory celebration',
    ],
    correctIndex: 1,
    explanation:
      'Owen describes the horror of a poison gas attack in vivid, graphic detail, arguing against the "old lie" that dying for one\'s country is noble.',
    boards: ['edexcel'],
  },
  {
    id: 'p187',
    topic: 'poetry',
    question:
      'What technique does Owen use at the end of "Dulce et Decorum Est" when he addresses the reader directly?',
    options: ['Metaphor', 'Direct address / second person', 'Onomatopoeia', 'Alliteration'],
    correctIndex: 1,
    explanation:
      'Owen uses direct address ("My friend, you would not tell...") to confront the reader, making the anti-war message personal and inescapable.',
    boards: ['edexcel'],
  },
  {
    id: 'p188',
    topic: 'poetry',
    question: 'In "As Imperceptibly as Grief" by Emily Dickinson, what is compared to grief?',
    options: ['A storm', 'The gradual passing of summer', 'A battle', 'A river flowing'],
    correctIndex: 1,
    explanation:
      'Dickinson compares the way grief fades to the imperceptible transition from summer to autumn, suggesting both loss and acceptance.',
    boards: ['edexcel'],
  },
  {
    id: 'p189',
    topic: 'poetry',
    question: 'Who wrote "Half-caste" (studied in some Edexcel specifications)?',
    options: ['Benjamin Zephaniah', 'John Agard', 'Grace Nichols', 'Linton Kwesi Johnson'],
    correctIndex: 1,
    explanation:
      'John Agard wrote "Half-caste", challenging the offensive term by asking whether great art that mixes elements (Picasso, Tchaikovsky) is also "half-caste".',
    boards: ['edexcel'],
  },
  {
    id: 'p190',
    topic: 'poetry',
    question: 'What theme is central to "Remains" as studied in the Edexcel Conflict anthology?',
    options: [
      'The beauty of nature',
      'Guilt and the psychological aftermath of killing',
      'Romantic love',
      'Childhood memories',
    ],
    correctIndex: 1,
    explanation:
      'Armitage explores the lasting psychological trauma (PTSD) of a soldier who cannot stop reliving the moment he shot a looter.',
    boards: ['edexcel'],
  },

  // ─── Eduqas anthology (~10 questions) ──────────────────────────────────
  {
    id: 'p191',
    topic: 'poetry',
    question: 'In the Eduqas anthology, who wrote "Hawk Roosting"?',
    options: ['Seamus Heaney', 'Ted Hughes', 'Wilfred Owen', 'Philip Larkin'],
    correctIndex: 1,
    explanation:
      'Ted Hughes wrote "Hawk Roosting", a dramatic monologue from the perspective of a hawk that sees itself as the ultimate predator and controller of nature.',
    boards: ['eduqas'],
  },
  {
    id: 'p192',
    topic: 'poetry',
    question: 'What does the hawk represent in "Hawk Roosting" by Ted Hughes?',
    options: [
      'Freedom and peace',
      'Absolute power, arrogance, and tyranny',
      'Wisdom and patience',
      "Nature's fragility",
    ],
    correctIndex: 1,
    explanation:
      'The hawk represents unchecked power and arrogance, seeing the world as existing solely for its benefit, which can be read as an allegory for dictatorship.',
    boards: ['eduqas'],
  },
  {
    id: 'p193',
    topic: 'poetry',
    question: 'In the Eduqas anthology, what is the theme of "The Manhunt" by Simon Armitage?',
    options: [
      'Hunting animals',
      "A wife's gentle exploration of her soldier husband's physical and emotional wounds",
      'A detective story',
      'Childhood adventure',
    ],
    correctIndex: 1,
    explanation:
      '"The Manhunt" traces a wife carefully exploring her husband\'s injuries, both physical (scars, broken bones) and psychological (PTSD), as an act of love and reconnection.',
    boards: ['eduqas'],
  },
  {
    id: 'p194',
    topic: 'poetry',
    question: 'Who wrote "Mametz Wood" in the Eduqas anthology?',
    options: ['Wilfred Owen', 'Owen Sheers', 'Siegfried Sassoon', 'Carol Ann Duffy'],
    correctIndex: 1,
    explanation:
      'Owen Sheers wrote "Mametz Wood", describing the discovery of soldiers\' remains from the Battle of the Somme decades after World War I.',
    boards: ['eduqas'],
  },
  {
    id: 'p195',
    topic: 'poetry',
    question: 'In "Mametz Wood", what image does Sheers use to describe the unearthed skeletons?',
    options: [
      'Flowers growing',
      'A bird in flight with broken wings',
      'A river flowing',
      'Soldiers marching',
    ],
    correctIndex: 1,
    explanation:
      "Sheers describes the skeletons as having arms linked as if in a dance, with the broken bird image suggesting both fragility and the soldiers' lost youth.",
    boards: ['eduqas'],
  },
  {
    id: 'p196',
    topic: 'poetry',
    question: 'In the Eduqas anthology, what is "Dulce et Decorum Est" a response to?',
    options: [
      'A love letter',
      "Pro-war propaganda and the glorification of dying for one's country",
      'A nature poem',
      'A religious hymn',
    ],
    correctIndex: 1,
    explanation:
      "Owen's poem directly challenges Jessie Pope and other pro-war propagandists who encouraged young men to enlist by glorifying sacrifice.",
    boards: ['eduqas'],
  },
  {
    id: 'p197',
    topic: 'poetry',
    question: 'Who wrote "To Autumn" studied in the Eduqas anthology?',
    options: ['Percy Bysshe Shelley', 'William Wordsworth', 'John Keats', 'Lord Byron'],
    correctIndex: 2,
    explanation:
      'John Keats wrote "To Autumn", a rich sensory ode celebrating the season of harvest while subtly acknowledging the approach of winter and mortality.',
    boards: ['eduqas'],
  },
  {
    id: 'p198',
    topic: 'poetry',
    question: 'What poetic form is "To Autumn" by Keats?',
    options: ['Ballad', 'Ode', 'Sonnet', 'Dramatic monologue'],
    correctIndex: 1,
    explanation:
      '"To Autumn" is an ode -- a formal lyric poem addressing a subject (here, the season of autumn) with elaborate structure and elevated language.',
    boards: ['eduqas'],
  },
  {
    id: 'p199',
    topic: 'poetry',
    question:
      'In the Eduqas poetry anthology, what theme does "Death of a Naturalist" by Seamus Heaney explore?',
    options: [
      'The joy of farming',
      'The loss of childhood innocence through a frightening encounter with nature',
      'Political conflict in Ireland',
      'Urban life in Belfast',
    ],
    correctIndex: 1,
    explanation:
      'Heaney describes how a childhood fascination with frogspawn turns to disgust and fear, representing the loss of innocence and the darker side of nature.',
    boards: ['eduqas'],
  },
  {
    id: 'p200',
    topic: 'poetry',
    question:
      'What technique does Heaney use in "Death of a Naturalist" to convey the threatening frogs?',
    options: [
      'Gentle, soothing imagery',
      'Harsh, aggressive sounds and military language',
      'Abstract philosophical language',
      'Romantic, idealistic imagery',
    ],
    correctIndex: 1,
    explanation:
      'Heaney uses harsh plosive sounds and militaristic language ("invaded", "grenades") to make the frogs seem threatening, reflecting the child\'s fear.',
    boards: ['eduqas'],
  },
]

// ─── Set Text questions (20) ───────────────────────────────────────────────
const setTextQuestions: QuizQuestion[] = [
  {
    id: 'st1',
    topic: 'set-texts',
    question: 'In "Macbeth", who first prophesies that Macbeth will become king?',
    options: ['Lady Macbeth', 'Banquo', 'The Three Witches', 'King Duncan'],
    correctIndex: 2,
    explanation:
      'The Three Witches (or Weird Sisters) prophesy that Macbeth will become Thane of Cawdor and then King of Scotland.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st2',
    topic: 'set-texts',
    question:
      'What is the main theme explored through the character of Scrooge in "A Christmas Carol"?',
    options: ['Revenge', 'Redemption and transformation', 'Romantic love', 'Political ambition'],
    correctIndex: 1,
    explanation:
      "Scrooge's journey from miserly isolation to generous compassion is the central redemption arc of the novella.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st3',
    topic: 'set-texts',
    question: 'In "An Inspector Calls", what is the Inspector\'s surname?',
    options: ['Birling', 'Goole', 'Croft', 'Smith'],
    correctIndex: 1,
    explanation:
      'Inspector Goole -- his name is a homophone of "ghoul", hinting at his supernatural or otherworldly nature.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st4',
    topic: 'set-texts',
    question: 'Which Shakespearean play features the character of Tybalt?',
    options: ['Hamlet', 'The Tempest', 'Romeo and Juliet', 'Much Ado About Nothing'],
    correctIndex: 2,
    explanation:
      'Tybalt is Juliet\'s cousin in "Romeo and Juliet", known as the "Prince of Cats" for his fiery temper and sword skills.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st5',
    topic: 'set-texts',
    question: 'In "Lord of the Flies", what does the conch shell symbolise?',
    options: [
      'Power and corruption',
      'Democracy and civilised order',
      'Nature and beauty',
      'Fear and danger',
    ],
    correctIndex: 1,
    explanation:
      'The conch shell represents democratic power, order, and civilisation. Its destruction symbolises the complete collapse of civilised behaviour.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st6',
    topic: 'set-texts',
    question: 'What social class do the Birling family belong to in "An Inspector Calls"?',
    options: [
      'Working class',
      'Lower middle class',
      'Upper middle class / industrialist class',
      'Aristocracy',
    ],
    correctIndex: 2,
    explanation:
      'The Birlings are wealthy industrialists -- upper middle class. Arthur Birling is a prosperous factory owner seeking a knighthood.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st7',
    topic: 'set-texts',
    question: 'In "Jekyll and Hyde", what does the door in the street represent?',
    options: [
      'Wealth and luxury',
      'Duality and the hidden side of respectability',
      'Religious faith',
      'Scientific progress',
    ],
    correctIndex: 1,
    explanation:
      'The contrasting door -- neglected yet attached to a respectable building -- symbolises the duality of human nature and hidden vice behind Victorian respectability.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st8',
    topic: 'set-texts',
    question: 'Who is the narrator of "The Sign of the Four" and the Sherlock Holmes stories?',
    options: ['Sherlock Holmes', 'Inspector Lestrade', 'Dr John Watson', 'Mycroft Holmes'],
    correctIndex: 2,
    explanation:
      "Dr John Watson narrates the stories, providing a more relatable perspective on Holmes's extraordinary deductive abilities.",
    boards: ['aqa'],
  },
  {
    id: 'st9',
    topic: 'set-texts',
    question: 'In "Macbeth", what does Lady Macbeth mean when she says "unsex me here"?',
    options: [
      'She wants a divorce',
      'She wants to be stripped of feminine weakness to carry out violence',
      'She wants to disguise herself as a man',
      'She wants to become invisible',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth calls on dark spirits to remove her feminine qualities (compassion, gentleness) so she can be ruthless enough to help murder King Duncan.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st10',
    topic: 'set-texts',
    question: 'What is the significance of the Ghost of Christmas Past in "A Christmas Carol"?',
    options: [
      'It shows Scrooge his future',
      'It shows Scrooge how his past shaped his present character',
      'It punishes Scrooge for his sins',
      'It introduces Scrooge to Tiny Tim',
    ],
    correctIndex: 1,
    explanation:
      "The Ghost of Christmas Past reveals formative moments from Scrooge's past, showing how experiences like loss and isolation led to his miserly nature.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st11',
    topic: 'set-texts',
    question:
      'In "Romeo and Juliet", what literary device is the phrase "O brawling love, O loving hate"?',
    options: ['Simile', 'Oxymoron', 'Hyperbole', 'Allusion'],
    correctIndex: 1,
    explanation:
      "This is an oxymoron -- combining contradictory terms to express Romeo's confused feelings about love and the family feud.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st12',
    topic: 'set-texts',
    question: 'In "An Inspector Calls", what year is the play set in?',
    options: ['1912', '1945', '1918', '1939'],
    correctIndex: 0,
    explanation:
      'The play is set in 1912, before both World Wars, though it was written and first performed in 1945. This allows Priestley to use dramatic irony.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st13',
    topic: 'set-texts',
    question: 'What does the character of Piggy represent in "Lord of the Flies"?',
    options: [
      'Savagery and violence',
      'Intellect and rationality',
      'Religious faith',
      'Physical strength',
    ],
    correctIndex: 1,
    explanation:
      'Piggy represents intellect, scientific rationality, and civilised thinking. His glasses (used to make fire) symbolise the power of reason.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st14',
    topic: 'set-texts',
    question: 'In "Macbeth", what does the motif of blood symbolise?',
    options: [
      'Life and vitality',
      'Guilt and the consequences of violence',
      'Love and passion',
      'Loyalty to the king',
    ],
    correctIndex: 1,
    explanation:
      "Blood is a recurring motif representing guilt, murder, and moral corruption. Lady Macbeth's obsessive hand-washing reveals her guilt.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st15',
    topic: 'set-texts',
    question: 'Who is Eva Smith / Daisy Renton in "An Inspector Calls"?',
    options: [
      'A wealthy socialite',
      'A working-class woman exploited by the Birling family',
      "The Inspector's wife",
      "Sheila's school friend",
    ],
    correctIndex: 1,
    explanation:
      'Eva Smith is a working-class woman who each member of the Birling family has wronged, ultimately leading to her death.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st16',
    topic: 'set-texts',
    question: 'In "A Christmas Carol", what is the significance of Tiny Tim?',
    options: [
      'He represents the greed of the upper classes',
      "He symbolises the innocent poor who suffer from society's neglect",
      "He is the story's antagonist",
      "He represents Scrooge's childhood",
    ],
    correctIndex: 1,
    explanation:
      "Tiny Tim represents the vulnerable poor -- especially children -- who suffer due to the indifference of the wealthy. His potential death motivates Scrooge's transformation.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st17',
    topic: 'set-texts',
    question: 'What is the significance of the weather in "Macbeth"?',
    options: [
      'It has no particular significance',
      'It reflects the moral and political disorder in Scotland',
      'It always represents hope',
      'It only appears in stage directions',
    ],
    correctIndex: 1,
    explanation:
      "Pathetic fallacy is used throughout -- storms, darkness, and unnatural weather mirror the political turmoil and moral corruption caused by Macbeth's actions.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st18',
    topic: 'set-texts',
    question: 'In "Jekyll and Hyde", which character is described as "troglodytic"?',
    options: ['Dr Jekyll', 'Mr Utterson', 'Mr Hyde', 'Dr Lanyon'],
    correctIndex: 2,
    explanation:
      'Mr Hyde is described as looking "troglodytic" (cave-dweller-like), suggesting he is primitive, barely human, and connects to fears about evolutionary regression.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st19',
    topic: 'set-texts',
    question: 'What is Sheila Birling\'s role in the message of "An Inspector Calls"?',
    options: [
      'She represents the unchangeable older generation',
      'She represents hope for social change in the younger generation',
      "She is indifferent to Eva's fate",
      "She supports her father's capitalist views",
    ],
    correctIndex: 1,
    explanation:
      "Sheila accepts responsibility and changes her views, representing Priestley's hope that the younger generation can build a more just society.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st20',
    topic: 'set-texts',
    question: 'In "Romeo and Juliet", what is the function of the Prologue?',
    options: [
      'To introduce a subplot',
      'To reveal the ending and create dramatic irony',
      'To describe the setting in detail',
      'To introduce the comic characters',
    ],
    correctIndex: 1,
    explanation:
      'The Prologue reveals that the "star-cross\'d lovers" will die, creating dramatic irony as the audience knows the tragic outcome throughout.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── Macbeth (20 questions: st101–st120) ──────────────────────────────────
  {
    id: 'st101',
    topic: 'set-texts',
    question: 'What title does Macbeth receive after the battle at the start of the play?',
    options: [
      'Duke of Albany',
      'Thane of Cawdor',
      'Earl of Northumberland',
      'Prince of Cumberland',
    ],
    correctIndex: 1,
    explanation:
      "Macbeth is rewarded with the title Thane of Cawdor after the previous thane is executed for treason, fulfilling the first part of the witches' prophecy.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st102',
    topic: 'set-texts',
    question: 'In "Macbeth", who discovers King Duncan\'s body?',
    options: ['Banquo', 'Macduff', 'Lady Macbeth', 'Malcolm'],
    correctIndex: 1,
    explanation:
      "Macduff discovers Duncan's murdered body in Act 2, Scene 3, and raises the alarm.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st103',
    topic: 'set-texts',
    question: 'What does Lady Macbeth obsessively do during her sleepwalking scene?',
    options: [
      "Recite the witches' prophecy",
      'Wash her hands',
      'Call for Macbeth',
      'Sharpen a dagger',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth compulsively washes her hands, unable to remove the imagined bloodstains, symbolising her overwhelming guilt.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st104',
    topic: 'set-texts',
    question: 'Which theme is most closely linked to the motif of blood in "Macbeth"?',
    options: ['Love and loyalty', 'Guilt and violence', 'Ambition and power', 'Justice and mercy'],
    correctIndex: 1,
    explanation:
      'Blood imagery recurs throughout the play to represent guilt, murder, and the permanent stain of violent actions on the conscience.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st105',
    topic: 'set-texts',
    question: 'Who kills Macbeth at the end of the play?',
    options: ['Malcolm', "Banquo's ghost", 'Macduff', 'Ross'],
    correctIndex: 2,
    explanation:
      'Macduff kills Macbeth in single combat, fulfilling the prophecy that no man "of woman born" can harm Macbeth -- Macduff was born by Caesarean section.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st106',
    topic: 'set-texts',
    question: 'What is the significance of the floating dagger Macbeth sees before killing Duncan?',
    options: [
      'It is a real weapon placed by the witches',
      'It represents his hallucination and moral torment',
      "It symbolises Lady Macbeth's control",
      "It foreshadows Banquo's death",
    ],
    correctIndex: 1,
    explanation:
      "The floating dagger is a hallucination that reveals Macbeth's psychological turmoil and inner conflict about committing regicide.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st107',
    topic: 'set-texts',
    question: 'In "Macbeth", what does the Porter scene (Act 2, Scene 3) primarily provide?',
    options: [
      'Exposition about the witches',
      'Comic relief and dramatic irony',
      'A subplot about the English king',
      'Backstory for Lady Macbeth',
    ],
    correctIndex: 1,
    explanation:
      "The Porter's drunken comedy provides comic relief after Duncan's murder, while his references to hell-gate create dramatic irony about the evil within.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st108',
    topic: 'set-texts',
    question: 'What role does Banquo\'s ghost play in "Macbeth"?',
    options: [
      'He delivers a soliloquy to the audience',
      'He physically attacks Macbeth',
      "He is a manifestation of Macbeth's guilt",
      'He warns Lady Macbeth to confess',
    ],
    correctIndex: 2,
    explanation:
      "Banquo's ghost appears at the banquet, visible only to Macbeth, representing his guilty conscience and growing paranoia after ordering Banquo's murder.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st109',
    topic: 'set-texts',
    question: 'How does Lady Macbeth persuade Macbeth to kill Duncan?',
    options: [
      'She threatens to leave him',
      'She questions his masculinity and courage',
      'She bribes the guards',
      'She claims the witches commanded it',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth manipulates Macbeth by questioning his manhood and bravery, using toxic masculinity as a tool to override his moral hesitation.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st110',
    topic: 'set-texts',
    question: 'What do the witches represent in the context of Jacobean England?',
    options: [
      'Entertainment for the audience',
      'Real supernatural threat reflecting contemporary fears',
      'Political allies of the king',
      'Religious purity',
    ],
    correctIndex: 1,
    explanation:
      'In Jacobean England, witchcraft was widely feared and even legislated against by King James I, making the witches a genuine source of terror for contemporary audiences.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st111',
    topic: 'set-texts',
    question:
      'What is the significance of the natural disturbances on the night Duncan is murdered?',
    options: [
      'They show the weather in Scotland',
      'They reflect the disruption of the natural order (the Great Chain of Being)',
      "They are caused by the witches' spells",
      "They symbolise Lady Macbeth's emotions",
    ],
    correctIndex: 1,
    explanation:
      'The unnatural events (storms, animals behaving strangely) reflect the Jacobean belief that killing a divinely appointed king disrupts the entire natural order.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st112',
    topic: 'set-texts',
    question: 'Which character says "Fair is foul, and foul is fair"?',
    options: ['Macbeth', 'Lady Macbeth', 'The Witches', 'Duncan'],
    correctIndex: 2,
    explanation:
      'The Witches chant this paradox in the opening scene, establishing the theme of moral inversion and the deceptive nature of appearances throughout the play.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st113',
    topic: 'set-texts',
    question: 'Why does Macbeth have Banquo murdered?',
    options: [
      'Banquo insulted Lady Macbeth',
      'Banquo threatened to expose him',
      "The witches prophesied Banquo's descendants would be kings",
      'Banquo was planning a rebellion',
    ],
    correctIndex: 2,
    explanation:
      "Macbeth fears the witches' prophecy that Banquo's line will inherit the throne, so he orders Banquo's assassination to secure his own dynasty.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st114',
    topic: 'set-texts',
    question: 'What happens to Fleance when Banquo is murdered?',
    options: [
      'He is also killed',
      'He escapes into the darkness',
      "He is captured by Macbeth's men",
      'He hides in the castle',
    ],
    correctIndex: 1,
    explanation:
      "Fleance escapes the murderers, ensuring the witches' prophecy about Banquo's descendants could still be fulfilled.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st115',
    topic: 'set-texts',
    question: 'What does Macbeth\'s soliloquy "Tomorrow, and tomorrow, and tomorrow" reveal?',
    options: [
      'His plans for the future',
      'His love for Lady Macbeth',
      'His nihilism and despair at the meaninglessness of life',
      'His regret at not having children',
    ],
    correctIndex: 2,
    explanation:
      'This famous soliloquy, spoken after Lady Macbeth\'s death, reveals Macbeth\'s total despair and his belief that life is meaningless -- a "tale told by an idiot".',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st116',
    topic: 'set-texts',
    question: 'How does Shakespeare present Macbeth as a tragic hero?',
    options: [
      'He is evil from the beginning',
      'He starts as a noble warrior but is destroyed by ambition and moral weakness',
      'He is a victim with no free will',
      'He is a comedic character who becomes serious',
    ],
    correctIndex: 1,
    explanation:
      'Macbeth follows the classical tragic hero arc: a man of high status with a fatal flaw (ambition) whose downfall evokes both pity and fear.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st117',
    topic: 'set-texts',
    question: 'What is the dramatic purpose of Malcolm testing Macduff in Act 4?',
    options: [
      'To provide comic relief',
      "To ensure Macduff's loyalty is genuine before trusting him",
      'To delay the plot',
      'To show Malcolm is a weak leader',
    ],
    correctIndex: 1,
    explanation:
      "Malcolm tests Macduff by pretending to be unfit to rule, ensuring Macduff's opposition to tyranny is genuine before they unite against Macbeth.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st118',
    topic: 'set-texts',
    question: 'What technique does Shakespeare use when Lady Macbeth says "unsex me here"?',
    options: ['Metaphor', 'Apostrophe (invoking supernatural forces)', 'Simile', 'Oxymoron'],
    correctIndex: 1,
    explanation:
      'Lady Macbeth uses apostrophe, addressing the spirits directly, asking them to strip her of feminine compassion so she can help commit murder.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st119',
    topic: 'set-texts',
    question: 'What is the significance of the motif of sleep in "Macbeth"?',
    options: [
      'It shows the characters are lazy',
      'It represents innocence, peace, and the guilty conscience that denies rest',
      'It is used only for comic effect',
      'It symbolises death',
    ],
    correctIndex: 1,
    explanation:
      'Sleep represents innocence and a clear conscience. After killing Duncan, Macbeth declares he has "murdered sleep", and both he and Lady Macbeth suffer insomnia and nightmares.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st120',
    topic: 'set-texts',
    question: 'Why is the play "Macbeth" considered politically relevant to King James I?',
    options: [
      'James I hated Scotland',
      'It flatters James by showing Banquo (his ancestor) as noble and warns against regicide',
      'James I wrote the play himself',
      'It criticises the monarchy',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare wrote Macbeth partly to flatter James I, who claimed descent from Banquo, while also dramatising the dangers of killing a king -- a subject close to James after the Gunpowder Plot.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── An Inspector Calls (15 questions: st121–st135) ──────────────────────
  {
    id: 'st121',
    topic: 'set-texts',
    question: 'In what year is "An Inspector Calls" set, and when was it written?',
    options: [
      'Set in 1945, written in 1912',
      'Set in 1912, written in 1945',
      'Set in 1930, written in 1946',
      'Set in 1918, written in 1939',
    ],
    correctIndex: 1,
    explanation:
      'The play is set in 1912 but written in 1945. Priestley uses dramatic irony by having characters make confident predictions about the future that the audience knows are wrong.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st122',
    topic: 'set-texts',
    question: 'What is Mr Birling celebrating at the start of "An Inspector Calls"?',
    options: [
      'His birthday',
      'A business merger',
      "Sheila's engagement to Gerald Croft",
      'His election as mayor',
    ],
    correctIndex: 2,
    explanation:
      "The play opens with a dinner celebrating Sheila's engagement to Gerald Croft, an event that represents social climbing and capitalist alliance for Mr Birling.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st123',
    topic: 'set-texts',
    question: 'What did Mr Birling do to Eva Smith?',
    options: [
      'Refused to help her find housing',
      'Sacked her for leading a strike for higher wages',
      'Rejected her charity application',
      'Falsely accused her of theft',
    ],
    correctIndex: 1,
    explanation:
      "Mr Birling sacked Eva Smith from his factory after she helped lead a strike asking for a small pay rise, showing his prioritisation of profit over workers' welfare.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st124',
    topic: 'set-texts',
    question: "What is Priestley's main message through the character of the Inspector?",
    options: [
      'That crime does not pay',
      'That we are all responsible for each other in society',
      'That the police should have more power',
      'That socialism always fails',
    ],
    correctIndex: 1,
    explanation:
      "The Inspector acts as Priestley's mouthpiece for social responsibility, delivering the message that selfishness has consequences and we must care for one another.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st125',
    topic: 'set-texts',
    question: 'How does Gerald know Eva Smith (Daisy Renton)?',
    options: [
      'She worked in his office',
      'He had an affair with her',
      'She was his childhood friend',
      'He arrested her',
    ],
    correctIndex: 1,
    explanation:
      'Gerald had an affair with Eva/Daisy, keeping her as his mistress before ending the relationship, which left her alone and vulnerable once again.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st126',
    topic: 'set-texts',
    question: "What role does Mrs Birling play in Eva Smith's downfall?",
    options: [
      'She fired Eva from a shop',
      "She refused Eva's plea for help at a charity committee",
      'She physically attacked Eva',
      'She reported Eva to the police',
    ],
    correctIndex: 1,
    explanation:
      "Mrs Birling used her influence on the Brumley Women's Charity Organisation to refuse help to the pregnant Eva, sending her away without support.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st127',
    topic: 'set-texts',
    question: "What is Eric Birling's connection to Eva Smith?",
    options: [
      'He employed her at his factory',
      'He got her pregnant and stole money to support her',
      'He was her landlord',
      'He wrote her a reference letter',
    ],
    correctIndex: 1,
    explanation:
      "Eric had a relationship with Eva, got her pregnant, and stole money from his father's business to try to support her, revealing his alcoholism and immaturity.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st128',
    topic: 'set-texts',
    question:
      'What dramatic device does Priestley use when Mr Birling predicts the Titanic is "unsinkable"?',
    options: ['Foreshadowing', 'Dramatic irony', 'Symbolism', 'Pathetic fallacy'],
    correctIndex: 1,
    explanation:
      "The 1945 audience knows the Titanic sank, so Birling's confident prediction creates dramatic irony that undermines all of his optimistic capitalist pronouncements.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st129',
    topic: 'set-texts',
    question: 'What does the telephone call at the very end of the play reveal?',
    options: [
      'That Eva Smith is alive',
      'That a girl has just died and a real inspector is on the way',
      'That the Inspector was a ghost',
      'That Gerald has been arrested',
    ],
    correctIndex: 1,
    explanation:
      'The final phone call reveals a girl has died and a real police inspector is coming, suggesting the events may repeat and the family will face real consequences.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st130',
    topic: 'set-texts',
    question: 'How do Mr and Mrs Birling react when they think the Inspector was a hoax?',
    options: [
      'They are relieved and learn nothing',
      'They feel deeply ashamed',
      'They call the real police',
      'They confess to the neighbours',
    ],
    correctIndex: 0,
    explanation:
      'Mr and Mrs Birling are relieved and refuse to change, showing that the older generation is set in its ways and resistant to social responsibility.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st131',
    topic: 'set-texts',
    question:
      'What does the staging direction "pink and intimate" changing to "brighter and harder" light symbolise?',
    options: [
      'A change of time from night to day',
      "The Inspector stripping away the family's comfortable illusions",
      'The arrival of the police',
      'A fire starting in the house',
    ],
    correctIndex: 1,
    explanation:
      "The lighting change from warm pink to harsh brightness represents the Inspector exposing the truth beneath the family's cosy, self-satisfied facade.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st132',
    topic: 'set-texts',
    question: 'What political ideology does Priestley promote through "An Inspector Calls"?',
    options: ['Capitalism', 'Socialism', 'Anarchism', 'Conservatism'],
    correctIndex: 1,
    explanation:
      'Priestley was a committed socialist. The play argues for collective responsibility and criticises the selfish individualism of capitalism represented by the Birlings.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st133',
    topic: 'set-texts',
    question:
      'Why is "An Inspector Calls" structured as a "well-made play" with unity of time and place?',
    options: [
      'Because Priestley lacked imagination',
      'To create claustrophobic tension and prevent the Birlings from escaping scrutiny',
      'Because it was cheaper to produce',
      'To follow Shakespearean conventions',
    ],
    correctIndex: 1,
    explanation:
      'The single setting and real-time structure trap the Birlings in the dining room, intensifying the pressure as the Inspector dismantles their pretences one by one.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st134',
    topic: 'set-texts',
    question: 'What does Eva changing her name to "Daisy Renton" suggest?',
    options: [
      'She was a criminal hiding her identity',
      'She wanted a fresh start and to reinvent herself',
      'She was working as a spy',
      'She had married someone called Renton',
    ],
    correctIndex: 1,
    explanation:
      'Eva changing her name symbolises her attempt to escape her past and start a new life, but society repeatedly denies her that chance.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st135',
    topic: 'set-texts',
    question: 'How does Sheila differ from her parents by the end of "An Inspector Calls"?',
    options: [
      'She becomes more selfish',
      'She accepts responsibility and shows genuine remorse',
      'She denies knowing Eva Smith',
      'She sides with Gerald against the Inspector',
    ],
    correctIndex: 1,
    explanation:
      "Unlike her parents, Sheila accepts her guilt and is genuinely changed by the experience, representing Priestley's hope that the younger generation can create a fairer society.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── A Christmas Carol (15 questions: st136–st150) ────────────────────────
  {
    id: 'st136',
    topic: 'set-texts',
    question: 'How many ghosts visit Scrooge in "A Christmas Carol"?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation:
      "Four ghosts visit Scrooge: Marley's Ghost, the Ghost of Christmas Past, the Ghost of Christmas Present, and the Ghost of Christmas Yet to Come.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st137',
    topic: 'set-texts',
    question: 'What does Jacob Marley\'s chain symbolise in "A Christmas Carol"?',
    options: [
      'Imprisonment by the government',
      'The burden of greed and selfishness in life',
      "Marley's criminal past",
      'The chains of poverty',
    ],
    correctIndex: 1,
    explanation:
      "Marley's chain, forged from cash-boxes and padlocks, represents the spiritual punishment for a life spent prioritising money over compassion and humanity.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st138',
    topic: 'set-texts',
    question: 'What is the significance of Tiny Tim in the novella?',
    options: [
      'He represents the wealthy upper class',
      'He symbolises the innocent poor who suffer under social inequality',
      'He is a villain who tricks Scrooge',
      "He represents Scrooge's childhood",
    ],
    correctIndex: 1,
    explanation:
      'Tiny Tim is a sympathetic figure representing the vulnerable poor. Dickens uses him to evoke compassion and show the human cost of neglecting the disadvantaged.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st139',
    topic: 'set-texts',
    question: "What is Scrooge's attitude towards the poor at the beginning of the novella?",
    options: ['Sympathetic', 'Indifferent and contemptuous', 'Actively charitable', 'Fearful'],
    correctIndex: 1,
    explanation:
      'Scrooge dismisses the poor as a burden, suggesting they should go to workhouses or prisons, reflecting the harsh attitudes of Victorian capitalists.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st140',
    topic: 'set-texts',
    question:
      'What social institution does Dickens criticise through Scrooge\'s reference to "prisons and workhouses"?',
    options: [
      'The monarchy',
      'The Poor Law and its workhouse system',
      'The military',
      'The Church of England',
    ],
    correctIndex: 1,
    explanation:
      'Dickens criticises the 1834 Poor Law, which created harsh workhouses intended to deter the poor from seeking help, treating poverty as a moral failing rather than a social problem.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st141',
    topic: 'set-texts',
    question: 'What does the Ghost of Christmas Past show Scrooge?',
    options: [
      'His future death',
      'Scenes from his childhood and early adult life',
      "The Cratchit family's Christmas",
      "Marley's death",
    ],
    correctIndex: 1,
    explanation:
      "The Ghost of Christmas Past revisits Scrooge's lonely childhood, his happy apprenticeship with Fezziwig, and his broken engagement to Belle, revealing how he became cold and miserly.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st142',
    topic: 'set-texts',
    question: 'Who are "Ignorance" and "Want" in "A Christmas Carol"?',
    options: [
      "Two of Scrooge's employees",
      "Allegorical children hidden beneath the Ghost of Christmas Present's robe",
      "Characters from Scrooge's past",
      "Names of Marley's business partners",
    ],
    correctIndex: 1,
    explanation:
      "Ignorance and Want are wretched children representing society's neglected poor. Dickens warns that Ignorance is the most dangerous, as it breeds indifference.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st143',
    topic: 'set-texts',
    question: 'How does Scrooge change by the end of the novella?',
    options: [
      'He becomes a recluse',
      'He transforms into a generous, joyful, and compassionate person',
      'He leaves London',
      'He gives away his business to Bob Cratchit',
    ],
    correctIndex: 1,
    explanation:
      "Scrooge undergoes a complete moral transformation, becoming charitable, raising Bob's salary, helping Tiny Tim, and embracing family and community.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st144',
    topic: 'set-texts',
    question: 'What is the significance of Fezziwig in "A Christmas Carol"?',
    options: [
      'He shows that wealth always corrupts',
      'He demonstrates that a good employer can bring happiness without great expense',
      "He is Scrooge's rival",
      'He represents the upper class',
    ],
    correctIndex: 1,
    explanation:
      'Fezziwig is a generous employer who uses modest means to create joy, serving as a contrast to Scrooge and showing that kindness matters more than money.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st145',
    topic: 'set-texts',
    question: 'What does the Ghost of Christmas Yet to Come show Scrooge?',
    options: [
      'His wedding day',
      'A prosperous future London',
      "His lonely, unmourned death and Tiny Tim's grave",
      'Marley being released from his chains',
    ],
    correctIndex: 2,
    explanation:
      "The silent, hooded ghost shows Scrooge a future where he dies unloved and his belongings are stolen, while the Cratchits mourn Tiny Tim's death.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st146',
    topic: 'set-texts',
    question: 'What narrative form is "A Christmas Carol"?',
    options: ['A novel', 'A novella', 'A play', 'A short story'],
    correctIndex: 1,
    explanation:
      'A Christmas Carol is a novella -- shorter than a novel but longer than a short story -- divided into five "staves" (chapters), using musical terminology.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st147',
    topic: 'set-texts',
    question: 'Why does Dickens call the chapters "staves" instead of chapters?',
    options: [
      'Because it was a mistake by the publisher',
      'To link the story to music and the idea of a Christmas carol/song',
      'Because it was a play',
      'To make the book seem longer',
    ],
    correctIndex: 1,
    explanation:
      'A stave is a verse of a song. By using this musical term, Dickens reinforces the title and creates the feeling that the story itself is a carol -- a song of celebration and joy.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st148',
    topic: 'set-texts',
    question: 'What was Dickens\'s social purpose in writing "A Christmas Carol"?',
    options: [
      'To entertain the aristocracy',
      'To highlight the plight of the poor and inspire compassion in the wealthy',
      'To advertise Christmas products',
      'To criticise organised religion',
    ],
    correctIndex: 1,
    explanation:
      'Dickens wrote the novella to draw attention to poverty, child labour, and social inequality, hoping to shame the wealthy into charitable action.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st149',
    topic: 'set-texts',
    question: 'What type of narrator does Dickens use in "A Christmas Carol"?',
    options: [
      'First person (Scrooge)',
      'Third person omniscient with a conversational tone',
      'Second person',
      'Multiple narrators',
    ],
    correctIndex: 1,
    explanation:
      'Dickens uses a third-person omniscient narrator who directly addresses the reader in a warm, conversational tone, guiding their moral responses to events.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st150',
    topic: 'set-texts',
    question: "What does Belle represent in Scrooge's past?",
    options: [
      "Scrooge's business partner",
      'The love and happiness Scrooge sacrificed for money',
      "Scrooge's sister",
      'A ghost who haunts him',
    ],
    correctIndex: 1,
    explanation:
      "Belle was Scrooge's fiancee who broke off their engagement because his love of money replaced his love for her, symbolising the emotional cost of greed.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },

  // ─── Jekyll and Hyde (15 questions: st151–st165) ──────────────────────────
  {
    id: 'st151',
    topic: 'set-texts',
    question: 'What is the central theme of "The Strange Case of Dr Jekyll and Mr Hyde"?',
    options: ['Romantic love', 'The duality of human nature', 'Social class', 'Colonialism'],
    correctIndex: 1,
    explanation:
      'The novella explores the idea that every person contains both good and evil, and that repressing the darker side can have catastrophic consequences.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st152',
    topic: 'set-texts',
    question: 'Who narrates most of "Jekyll and Hyde"?',
    options: ['Dr Jekyll', 'Mr Hyde', 'Mr Utterson', 'Dr Lanyon'],
    correctIndex: 2,
    explanation:
      "The story is primarily told from the perspective of Mr Utterson, Jekyll's lawyer, whose rational investigation mirrors the reader's own attempt to solve the mystery.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st153',
    topic: 'set-texts',
    question: "What does Mr Hyde's physical appearance suggest to other characters?",
    options: [
      'He is extremely handsome',
      'He provokes an instinctive feeling of revulsion and evil',
      'He looks exactly like Jekyll',
      'He appears very old and frail',
    ],
    correctIndex: 1,
    explanation:
      'Characters struggle to describe Hyde but feel instinctive loathing, reflecting the Victorian belief in physiognomy -- that outward appearance reflected inner morality.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st154',
    topic: 'set-texts',
    question: 'What is the significance of the door in "Jekyll and Hyde"?',
    options: [
      'It leads to a secret garden',
      'It represents the boundary between respectability and hidden vice',
      'It is purely decorative',
      'It symbolises wealth',
    ],
    correctIndex: 1,
    explanation:
      "The door connects Jekyll's respectable front entrance to the shabby back door used by Hyde, symbolising the divide between public respectability and private sin.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st155',
    topic: 'set-texts',
    question: 'How does Hyde murder Sir Danvers Carew?',
    options: [
      'By poisoning him',
      'By beating him to death with a cane',
      'By pushing him into the Thames',
      'By shooting him',
    ],
    correctIndex: 1,
    explanation:
      "Hyde beats Carew to death with a heavy walking cane in an act of unprovoked and savage violence, showing the uncontrolled brutality of Jekyll's repressed desires.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st156',
    topic: 'set-texts',
    question: "What does Jekyll's experiment represent in Victorian context?",
    options: [
      'Medical progress',
      'The danger of repressing desires in a society obsessed with respectability',
      'Religious devotion',
      'Political reform',
    ],
    correctIndex: 1,
    explanation:
      "Jekyll's experiment reflects how Victorian society's extreme emphasis on respectability forced people to suppress their natural desires, which then erupted destructively.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st157',
    topic: 'set-texts',
    question: "What happens to Dr Lanyon after witnessing Hyde's transformation?",
    options: [
      "He joins Jekyll's experiments",
      'He dies from the shock',
      'He moves abroad',
      'He reports Jekyll to the police',
    ],
    correctIndex: 1,
    explanation:
      "Lanyon dies from shock after witnessing Hyde transform back into Jekyll, unable to reconcile rational science with the horrifying reality of Jekyll's experiment.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st158',
    topic: 'set-texts',
    question: 'Why does Hyde become increasingly difficult for Jekyll to control?',
    options: [
      'The potion runs out',
      'Hyde grows stronger as Jekyll indulges his dark side more frequently',
      'Utterson interferes',
      'The police are closing in',
    ],
    correctIndex: 1,
    explanation:
      'Each time Jekyll becomes Hyde, the evil side grows stronger and harder to suppress, suggesting that indulging dark impulses empowers them.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st159',
    topic: 'set-texts',
    question: 'What genre elements does Stevenson use in "Jekyll and Hyde"?',
    options: [
      'Romance and comedy',
      'Gothic horror and detective fiction',
      'Pastoral and epic',
      'Satire and farce',
    ],
    correctIndex: 1,
    explanation:
      "The novella blends Gothic horror (dark settings, transformation, supernatural) with detective fiction (Utterson's investigation, mystery structure).",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st160',
    topic: 'set-texts',
    question: 'What is the role of Poole in "Jekyll and Hyde"?',
    options: [
      "He is Jekyll's doctor",
      "He is Jekyll's loyal butler who raises the alarm",
      "He is Hyde's accomplice",
      'He is a police inspector',
    ],
    correctIndex: 1,
    explanation:
      "Poole is Jekyll's faithful servant who eventually seeks Utterson's help when he realises something is terribly wrong, leading to the discovery of Hyde's body.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st161',
    topic: 'set-texts',
    question: 'How does Jekyll die?',
    options: [
      'He is murdered by Utterson',
      'He transforms permanently into Hyde and takes poison',
      'He dies of natural causes',
      'He is executed',
    ],
    correctIndex: 1,
    explanation:
      'Jekyll loses the ability to return to his own form and commits suicide as Hyde, choosing death over being trapped permanently in his evil alter ego.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st162',
    topic: 'set-texts',
    question: 'What is the significance of London\'s fog and dark streets in "Jekyll and Hyde"?',
    options: [
      "It shows London's weather accurately",
      'It creates a Gothic atmosphere and symbolises moral obscurity',
      'It represents industrial progress',
      'It is used for comic effect',
    ],
    correctIndex: 1,
    explanation:
      "The fog and dark streets create a sinister Gothic atmosphere while symbolising the moral murkiness and hidden sins beneath Victorian London's respectable surface.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st163',
    topic: 'set-texts',
    question: 'Why is Utterson an effective narrative device?',
    options: [
      'He is unreliable and confuses the reader',
      "As a rational lawyer, his gradual horror mirrors the reader's own discovery",
      'He is omniscient',
      'He provides comic relief',
    ],
    correctIndex: 1,
    explanation:
      "Utterson's calm, rational perspective makes the supernatural horror more believable and terrifying, as the reader discovers the truth alongside this level-headed character.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st164',
    topic: 'set-texts',
    question:
      'What does Hyde trampling the young girl in the opening chapter reveal about his nature?',
    options: [
      'He is clumsy',
      'He represents pure, amoral evil with no empathy',
      'He was provoked',
      'He is afraid of children',
    ],
    correctIndex: 1,
    explanation:
      "Hyde's callous trampling of an innocent child demonstrates his complete lack of conscience or compassion, establishing him as a figure of pure, unchecked evil.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st165',
    topic: 'set-texts',
    question: 'How does Stevenson use the structure of "Jekyll and Hyde" to build suspense?',
    options: [
      'He reveals the twist in chapter one',
      "He withholds Jekyll's confession until the final chapter",
      'He uses flashbacks throughout',
      "He alternates between Jekyll and Hyde's perspectives",
    ],
    correctIndex: 1,
    explanation:
      "Stevenson delays the full revelation until Jekyll's final statement, maintaining mystery and suspense as Utterson (and the reader) piece together clues throughout.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },

  // ─── Romeo and Juliet (10 questions: st166–st175) ─────────────────────────
  {
    id: 'st166',
    topic: 'set-texts',
    question: 'What is the main cause of the conflict in "Romeo and Juliet"?',
    options: [
      'A disagreement over money',
      'An ancient feud between the Montagues and Capulets',
      'A rivalry between Romeo and Paris',
      'A religious dispute',
    ],
    correctIndex: 1,
    explanation:
      'The play centres on an ancient, seemingly pointless feud between two noble families, the Montagues and Capulets, which ultimately destroys their children.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st167',
    topic: 'set-texts',
    question: 'Who secretly marries Romeo and Juliet?',
    options: ['The Nurse', 'Friar Laurence', 'Benvolio', 'The Prince'],
    correctIndex: 1,
    explanation:
      'Friar Laurence agrees to marry them secretly, hoping the union will end the feud between the two families.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st168',
    topic: 'set-texts',
    question: 'Why is Romeo banished from Verona?',
    options: [
      'He married without permission',
      'He killed Tybalt in a fight',
      'He stole from the Capulets',
      'He insulted the Prince',
    ],
    correctIndex: 1,
    explanation:
      "Romeo kills Tybalt in revenge for Mercutio's death and is banished by Prince Escalus, setting the tragedy in motion as the lovers are separated.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st169',
    topic: 'set-texts',
    question: 'What role does fate play in "Romeo and Juliet"?',
    options: [
      'It plays no role; all events are character-driven',
      'The lovers are described as "star-cross\'d", suggesting destiny controls their doom',
      'Fate only affects the minor characters',
      'Fate brings a happy ending',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare presents Romeo and Juliet as victims of fate from the Prologue\'s "star-cross\'d lovers", creating a sense of inevitable tragedy throughout.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st170',
    topic: 'set-texts',
    question: 'What is Mercutio\'s role in "Romeo and Juliet"?',
    options: [
      "He is Juliet's brother",
      'He provides wit and energy; his death marks the turning point from comedy to tragedy',
      'He is the main villain',
      'He narrates the play',
    ],
    correctIndex: 1,
    explanation:
      "Mercutio is Romeo's witty, vibrant friend. His death at Tybalt's hand is the play's turning point, shifting the tone from romantic comedy to inevitable tragedy.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st171',
    topic: 'set-texts',
    question: 'What plan does Friar Laurence devise to reunite Romeo and Juliet?',
    options: [
      'They should run away to Mantua together',
      'Juliet should take a potion to fake her death',
      'Romeo should challenge Lord Capulet to a duel',
      'They should reveal their marriage publicly',
    ],
    correctIndex: 1,
    explanation:
      'Friar Laurence gives Juliet a potion that simulates death for 42 hours, planning for Romeo to retrieve her from the tomb, but the message fails to reach Romeo in time.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st172',
    topic: 'set-texts',
    question: 'How does Juliet die?',
    options: [
      'She drinks poison',
      "She stabs herself with Romeo's dagger",
      'She falls from the balcony',
      'She is killed by Tybalt',
    ],
    correctIndex: 1,
    explanation:
      'Finding Romeo dead beside her, Juliet takes his dagger and stabs herself, choosing death over life without him.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st173',
    topic: 'set-texts',
    question: 'What does the "balcony scene" (Act 2, Scene 2) primarily explore?',
    options: [
      'The feud between the families',
      "The intensity and sincerity of Romeo and Juliet's love",
      "Lord Capulet's authority",
      "Mercutio's sense of humour",
    ],
    correctIndex: 1,
    explanation:
      'The balcony scene is the emotional heart of the play, where Romeo and Juliet declare their love and plan to marry, establishing the depth and urgency of their bond.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st174',
    topic: 'set-texts',
    question: 'What is the Nurse\'s function in "Romeo and Juliet"?',
    options: [
      'She opposes the relationship',
      'She acts as a go-between and provides comic relief, but ultimately fails Juliet',
      "She is Juliet's enemy",
      'She has no significant role',
    ],
    correctIndex: 1,
    explanation:
      'The Nurse helps arrange the secret marriage and acts as a confidante, but her eventual advice to marry Paris represents a betrayal that isolates Juliet.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st175',
    topic: 'set-texts',
    question: 'What is the effect of the double suicide on the Montagues and Capulets?',
    options: [
      'The feud intensifies',
      'They finally reconcile, but at a devastating cost',
      'They ignore the deaths',
      'They blame Friar Laurence and seek revenge',
    ],
    correctIndex: 1,
    explanation:
      'The deaths of Romeo and Juliet finally end the feud, but Shakespeare makes clear that this peace came at a terrible, unnecessary price.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── Animal Farm (10 questions: st176–st185) ──────────────────────────────
  {
    id: 'st176',
    topic: 'set-texts',
    question: 'What does Animal Farm allegorically represent?',
    options: [
      'The French Revolution',
      'The Russian Revolution and the rise of Stalinism',
      'The American Civil War',
      'The Industrial Revolution',
    ],
    correctIndex: 1,
    explanation:
      'Orwell wrote Animal Farm as an allegory of the Russian Revolution, with the pigs representing the Communist Party leadership and their betrayal of revolutionary ideals.',
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st177',
    topic: 'set-texts',
    question: 'Which character in "Animal Farm" represents Joseph Stalin?',
    options: ['Snowball', 'Napoleon', 'Boxer', 'Old Major'],
    correctIndex: 1,
    explanation:
      'Napoleon the pig represents Stalin, using fear, propaganda, and violence to seize and maintain absolute power after driving out his rival Snowball (Trotsky).',
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st178',
    topic: 'set-texts',
    question: "What is Squealer's role on Animal Farm?",
    options: [
      "He is the farm's protector",
      "He spreads propaganda to justify Napoleon's actions",
      'He leads the rebellion',
      'He represents the working class',
    ],
    correctIndex: 1,
    explanation:
      "Squealer is Napoleon's propagandist, manipulating language and statistics to control the other animals and justify the pigs' increasing privileges.",
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st179',
    topic: 'set-texts',
    question: 'What happens to Boxer in "Animal Farm"?',
    options: [
      'He leads a second rebellion',
      "He is sent to the knacker's yard when he can no longer work",
      'He escapes to another farm',
      'He becomes the new leader',
    ],
    correctIndex: 1,
    explanation:
      'Despite his loyal motto "I will work harder", Boxer is sold to a glue factory when he collapses, showing how totalitarian regimes exploit and discard the working class.',
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st180',
    topic: 'set-texts',
    question: 'How do the Seven Commandments change throughout "Animal Farm"?',
    options: [
      'They stay the same',
      'The pigs gradually alter them to justify their own privileges',
      'The animals vote to remove them',
      'Mr Jones changes them when he returns',
    ],
    correctIndex: 1,
    explanation:
      'The pigs secretly modify the commandments (e.g., "No animal shall drink alcohol" becomes "No animal shall drink alcohol to excess"), showing how those in power corrupt founding principles.',
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st181',
    topic: 'set-texts',
    question: 'What is the final commandment on the barn wall at the end of "Animal Farm"?',
    options: [
      'All animals are equal',
      'No animal shall kill another animal',
      'All animals are equal, but some are more equal than others',
      'Four legs good, two legs bad',
    ],
    correctIndex: 2,
    explanation:
      "This famous paradox encapsulates Orwell's critique of how revolutionary ideals of equality are corrupted by those who seize power.",
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st182',
    topic: 'set-texts',
    question: 'What does Old Major\'s speech represent in the allegory of "Animal Farm"?',
    options: [
      'Capitalist ideology',
      'The Communist Manifesto and Marxist ideals',
      'A religious sermon',
      'Democratic principles',
    ],
    correctIndex: 1,
    explanation:
      "Old Major's speech about equality and overthrowing human oppression parallels Marx and Lenin's vision of a communist revolution to liberate the working class.",
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st183',
    topic: 'set-texts',
    question: 'Why does Napoleon drive Snowball off the farm?',
    options: [
      'Snowball was lazy',
      'Napoleon uses his trained dogs to eliminate a rival for power',
      'Snowball stole food',
      'The other animals voted Snowball out',
    ],
    correctIndex: 1,
    explanation:
      "Napoleon uses his privately trained dogs (representing the secret police) to chase Snowball away, mirroring Stalin's expulsion of Trotsky from the Soviet Union.",
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st184',
    topic: 'set-texts',
    question: 'What do the dogs represent in "Animal Farm"?',
    options: [
      'The general army',
      "Stalin's secret police (NKVD)",
      'The working class',
      'Foreign invaders',
    ],
    correctIndex: 1,
    explanation:
      'Napoleon secretly raises the puppies as his personal enforcers, representing the NKVD/secret police that Stalin used to eliminate opponents through fear and violence.',
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    id: 'st185',
    topic: 'set-texts',
    question:
      'What is the significance of the pigs walking on two legs at the end of "Animal Farm"?',
    options: [
      'They are learning new skills',
      'They have become indistinguishable from the humans they once overthrew',
      'They are celebrating a victory',
      'They are performing for visitors',
    ],
    correctIndex: 1,
    explanation:
      'The pigs walking upright and wearing clothes symbolises the complete betrayal of the revolution: the new rulers have become identical to the old oppressors.',
    boards: ['aqa', 'edexcel', 'ocr'],
  },

  // ─── Lord of the Flies (10 questions: st186–st195) ────────────────────────
  {
    id: 'st186',
    topic: 'set-texts',
    question: 'What does the "beast" ultimately represent in "Lord of the Flies"?',
    options: [
      'A real animal on the island',
      'The evil and savagery within human nature',
      'A rival group of boys',
      'The adults who abandoned them',
    ],
    correctIndex: 1,
    explanation:
      "Simon realises the beast is not an external creature but the darkness within every person. Golding suggests civilisation only masks humanity's inherent capacity for evil.",
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st187',
    topic: 'set-texts',
    question: 'Who represents civilisation, democracy, and order in "Lord of the Flies"?',
    options: ['Jack', 'Ralph', 'Roger', 'Simon'],
    correctIndex: 1,
    explanation:
      'Ralph is elected leader and tries to maintain rules, build shelters, and keep the signal fire going, representing democratic governance and the desire for rescue.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st188',
    topic: 'set-texts',
    question: 'What does Piggy\'s glasses symbolise in "Lord of the Flies"?',
    options: [
      'Wealth',
      'Intelligence, reason, and the power of science',
      'Religious faith',
      'Physical weakness',
    ],
    correctIndex: 1,
    explanation:
      "Piggy's glasses represent intellect and rational thought. They are also used to start fire (technology), and their theft by Jack symbolises the triumph of savagery over reason.",
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st189',
    topic: 'set-texts',
    question: 'How does Simon die in "Lord of the Flies"?',
    options: [
      'He falls from the cliff',
      'He is beaten to death by the other boys in a frenzy',
      'He drowns while swimming',
      'Jack kills him in a duel',
    ],
    correctIndex: 1,
    explanation:
      'Simon is killed by the boys during a frenzied ritual dance when they mistake him for the beast, representing the murder of truth and goodness by collective hysteria.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st190',
    topic: 'set-texts',
    question: 'What does Jack represent in "Lord of the Flies"?',
    options: [
      'Democracy and fairness',
      'Savagery, tyranny, and the desire for power',
      'Innocence and purity',
      'Intellectual curiosity',
    ],
    correctIndex: 1,
    explanation:
      "Jack represents the allure of authoritarianism and violence, using fear and the thrill of hunting to draw boys away from Ralph's democratic leadership.",
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st191',
    topic: 'set-texts',
    question: 'What is the significance of the "Lord of the Flies" (the pig\'s head on a stick)?',
    options: [
      'It is an offering to the gods',
      'It is a physical manifestation of the evil within, which speaks to Simon',
      'It is food for the littluns',
      "It represents Jack's leadership",
    ],
    correctIndex: 1,
    explanation:
      'The severed pig\'s head, swarming with flies, speaks to Simon in a hallucination, telling him the beast is inside all the boys. The title translates to "Beelzebub" (the Devil).',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st192',
    topic: 'set-texts',
    question: 'How does Piggy die?',
    options: [
      'He is drowned',
      'Roger pushes a boulder that crushes him and destroys the conch',
      'He dies of illness',
      'Jack stabs him',
    ],
    correctIndex: 1,
    explanation:
      'Roger deliberately levers a boulder onto Piggy, killing him and shattering the conch simultaneously, symbolising the complete destruction of civilised order.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st193',
    topic: 'set-texts',
    question: 'What is the significance of the signal fire in "Lord of the Flies"?',
    options: [
      'It keeps wild animals away',
      "It represents the boys' connection to civilisation and hope of rescue",
      'It is used for cooking',
      "It symbolises Jack's power",
    ],
    correctIndex: 1,
    explanation:
      "The signal fire represents the desire to be rescued and return to civilisation. When it goes out, it symbolises the boys' descent into savagery.",
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st194',
    topic: 'set-texts',
    question: 'What is Roger\'s role in "Lord of the Flies"?',
    options: [
      "He is Ralph's closest ally",
      'He represents pure sadism and cruelty unchecked by society',
      'He mediates between Ralph and Jack',
      'He is the youngest boy on the island',
    ],
    correctIndex: 1,
    explanation:
      "Roger progresses from throwing stones that deliberately miss to killing Piggy, representing how the absence of societal rules unleashes humanity's capacity for cruelty.",
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st195',
    topic: 'set-texts',
    question:
      'What is the irony of the naval officer\'s arrival at the end of "Lord of the Flies"?',
    options: [
      'He is lost too',
      'He rescues civilised boys',
      'He arrives from a warship, suggesting adults are no better at avoiding violence',
      'He punishes the boys',
    ],
    correctIndex: 2,
    explanation:
      'The officer arrives from a warship engaged in a nuclear war, undermining any reassurance of adult superiority and suggesting that savagery exists at all levels of society.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },

  // ─── Of Mice and Men (5 questions: st196–st200) ───────────────────────────
  {
    id: 'st196',
    topic: 'set-texts',
    question: 'What is the American Dream as presented in "Of Mice and Men"?',
    options: [
      'Becoming president',
      'Owning land, self-sufficiency, and independence',
      'Moving to a city',
      'Getting a college education',
    ],
    correctIndex: 1,
    explanation:
      "George and Lennie's dream of owning a small farm represents the wider American Dream of independence and self-sufficiency, which Steinbeck shows is unattainable for migrant workers.",
    boards: ['edexcel-igcse'],
  },
  {
    id: 'st197',
    topic: 'set-texts',
    question: 'Why does George shoot Lennie at the end of "Of Mice and Men"?',
    options: [
      'Out of anger',
      'To spare Lennie from a violent death at the hands of the mob',
      'Because Lennie asked him to',
      "To claim Lennie's wages",
    ],
    correctIndex: 1,
    explanation:
      "George makes the agonising decision to shoot Lennie mercifully, reciting their shared dream, rather than let him be brutally killed or imprisoned by Curley's lynch mob.",
    boards: ['edexcel-igcse'],
  },
  {
    id: 'st198',
    topic: 'set-texts',
    question: "What is the significance of Curley's wife not having a name?",
    options: [
      'Steinbeck forgot to name her',
      'It reflects how women were defined by their husbands and denied individual identity',
      'She is not important to the plot',
      'It was a printing error',
    ],
    correctIndex: 1,
    explanation:
      "Curley's wife is never named, symbolising how women in 1930s America were seen as possessions of their husbands, denied autonomy and personal identity.",
    boards: ['edexcel-igcse'],
  },
  {
    id: 'st199',
    topic: 'set-texts',
    question: 'What does Candy\'s dog symbolise in "Of Mice and Men"?',
    options: [
      'Loyalty and friendship',
      'The fate of those who are old and no longer useful in a harsh society',
      'Wealth and status',
      'Hope for the future',
    ],
    correctIndex: 1,
    explanation:
      "The shooting of Candy's old dog parallels the treatment of ageing workers who are discarded when no longer productive, and foreshadows George's decision about Lennie.",
    boards: ['edexcel-igcse'],
  },
  {
    id: 'st200',
    topic: 'set-texts',
    question: 'What theme does Crooks\'s isolation in "Of Mice and Men" highlight?',
    options: [
      'The beauty of solitude',
      'Racial segregation and loneliness in 1930s America',
      'The importance of hard work',
      'Religious persecution',
    ],
    correctIndex: 1,
    explanation:
      'Crooks, the only Black worker on the ranch, is forced to live separately, representing the racial segregation and discrimination that compounded the loneliness of marginalised groups in Depression-era America.',
    boards: ['edexcel-igcse'],
  },
]

// ─── Language Technique questions (20) ─────────────────────────────────────
const languageTechniqueQuestions: QuizQuestion[] = [
  {
    id: 'lt1',
    topic: 'language-techniques',
    question: 'What is a simile?',
    options: [
      'A direct comparison stating one thing IS another',
      'A comparison using "like" or "as"',
      'Giving human qualities to objects',
      'An exaggeration for effect',
    ],
    correctIndex: 1,
    explanation: 'A simile compares two things using "like" or "as" (e.g., "as brave as a lion").',
  },
  {
    id: 'lt2',
    topic: 'language-techniques',
    question: 'Which technique is used in "The wind howled through the trees"?',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    correctIndex: 2,
    explanation: 'The wind is given the human ability to "howl", which is personification.',
  },
  {
    id: 'lt3',
    topic: 'language-techniques',
    question: 'What is the effect of using short, simple sentences in a text?',
    options: [
      'To create a flowing, relaxed tone',
      'To create tension, impact, or emphasise a point',
      'To confuse the reader',
      'To make the text seem academic',
    ],
    correctIndex: 1,
    explanation:
      'Short sentences create impact, build tension, and draw attention to key ideas. They can also increase pace and urgency.',
  },
  {
    id: 'lt4',
    topic: 'language-techniques',
    question: 'What is hyperbole?',
    options: [
      'Deliberate understatement',
      'Deliberate exaggeration for emphasis',
      'A type of rhyme',
      'Repeating a word at the start of sentences',
    ],
    correctIndex: 1,
    explanation:
      'Hyperbole is deliberate exaggeration not meant to be taken literally, used for emphasis or dramatic effect (e.g., "I\'ve told you a million times").',
  },
  {
    id: 'lt5',
    topic: 'language-techniques',
    question: 'What is pathetic fallacy?',
    options: [
      'A logical error in an argument',
      'Using weather or nature to reflect mood or emotion',
      'A character who is overly emotional',
      'An unreliable narrator',
    ],
    correctIndex: 1,
    explanation:
      'Pathetic fallacy is when the environment (especially weather) is used to mirror or reflect the emotions of characters or the mood of a scene.',
  },
  {
    id: 'lt6',
    topic: 'language-techniques',
    question: 'Identify the technique: "Peter Piper picked a peck of pickled peppers."',
    options: ['Assonance', 'Sibilance', 'Alliteration', 'Onomatopoeia'],
    correctIndex: 2,
    explanation:
      'This is alliteration -- the repetition of the same consonant sound ("p") at the beginning of closely connected words.',
  },
  {
    id: 'lt7',
    topic: 'language-techniques',
    question: 'What is the difference between a metaphor and a simile?',
    options: [
      'There is no difference',
      'A metaphor uses "like" or "as"; a simile does not',
      'A simile uses "like" or "as"; a metaphor states something IS something else',
      'Similes are only used in poetry',
    ],
    correctIndex: 2,
    explanation:
      'A simile uses "like" or "as" to compare (e.g., "like a rose"), while a metaphor states one thing IS another (e.g., "she is a rose").',
  },
  {
    id: 'lt8',
    topic: 'language-techniques',
    question: 'What is juxtaposition?',
    options: [
      'Repeating a phrase for emphasis',
      'Placing two contrasting ideas or images side by side',
      'A type of narrative perspective',
      'Using formal language in an informal context',
    ],
    correctIndex: 1,
    explanation:
      'Juxtaposition places two contrasting ideas, images, or concepts close together to highlight their differences and create meaning.',
  },
  {
    id: 'lt9',
    topic: 'language-techniques',
    question:
      'What technique is used when a writer asks a question they do not expect an answer to?',
    options: ['Anaphora', 'Rhetorical question', 'Imperative', 'Euphemism'],
    correctIndex: 1,
    explanation:
      'A rhetorical question is asked for effect rather than to get an answer. It engages the reader and makes them think about the point being made.',
  },
  {
    id: 'lt10',
    topic: 'language-techniques',
    question: 'What is an oxymoron?',
    options: [
      'A long, complex sentence',
      'Two contradictory words placed together',
      'An indirect reference to another text',
      'A question that does not need an answer',
    ],
    correctIndex: 1,
    explanation:
      'An oxymoron combines two contradictory words (e.g., "deafening silence", "bittersweet") to create a paradoxical effect.',
  },
  {
    id: 'lt11',
    topic: 'language-techniques',
    question: 'What is the rule of three?',
    options: [
      'Every paragraph must have three sentences',
      'Using three related words or phrases for emphasis',
      'A story must have three characters',
      'Rhyming three lines together',
    ],
    correctIndex: 1,
    explanation:
      'The rule of three is a writing principle that groups ideas in threes for emphasis and memorability (e.g., "blood, sweat, and tears").',
  },
  {
    id: 'lt12',
    topic: 'language-techniques',
    question: 'What is anaphora?',
    options: [
      'A word that sounds like its meaning',
      'Deliberate repetition of a word or phrase at the start of successive clauses',
      'A reference to a well-known text',
      'Using a part to represent the whole',
    ],
    correctIndex: 1,
    explanation:
      'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses or sentences for emphasis and rhythm.',
  },
  {
    id: 'lt13',
    topic: 'language-techniques',
    question: 'What is the effect of using emotive language?',
    options: [
      'To present facts objectively',
      'To evoke strong feelings in the reader',
      'To make writing more academic',
      'To shorten sentences',
    ],
    correctIndex: 1,
    explanation:
      'Emotive language is chosen specifically to trigger an emotional response in the reader, often used in persuasive and descriptive writing.',
  },
  {
    id: 'lt14',
    topic: 'language-techniques',
    question: 'What does the term "semantic field" mean?',
    options: [
      'A field of study about meaning',
      'A group of words related to the same theme or subject',
      'The dictionary definition of a word',
      'A type of paragraph structure',
    ],
    correctIndex: 1,
    explanation:
      'A semantic field is a group of words that are all related to the same topic or theme (e.g., a semantic field of war: battle, conflict, fight, weapon).',
  },
  {
    id: 'lt15',
    topic: 'language-techniques',
    question: 'What is a euphemism?',
    options: [
      'An extreme exaggeration',
      'A mild or indirect expression used instead of one considered harsh',
      'A sound effect word',
      'A type of irony',
    ],
    correctIndex: 1,
    explanation:
      'A euphemism substitutes a mild, indirect, or vague expression for one thought to be too harsh (e.g., "passed away" instead of "died").',
  },
  {
    id: 'lt16',
    topic: 'language-techniques',
    question: 'What is the effect of using the imperative mood?',
    options: [
      'It asks questions',
      'It gives commands and creates a direct, authoritative tone',
      'It describes a hypothetical situation',
      'It always creates a gentle tone',
    ],
    correctIndex: 1,
    explanation:
      'The imperative mood gives commands or instructions (e.g., "Stop!", "Consider this"), creating a direct and authoritative tone.',
  },
  {
    id: 'lt17',
    topic: 'language-techniques',
    question: 'What is foreshadowing?',
    options: [
      'A summary at the end of a story',
      'Hints or clues about what will happen later',
      'A flashback to an earlier event',
      'The climax of a story',
    ],
    correctIndex: 1,
    explanation:
      'Foreshadowing is when the writer gives hints or clues about events that will occur later in the narrative, building suspense.',
  },
  {
    id: 'lt18',
    topic: 'language-techniques',
    question: 'What is irony?',
    options: [
      'Saying exactly what you mean',
      'When the opposite of what is expected happens or is said',
      'A type of metaphor',
      'A sad ending to a story',
    ],
    correctIndex: 1,
    explanation:
      'Irony is when there is a contrast between what is said and what is meant, or between what is expected and what actually happens.',
  },
  {
    id: 'lt19',
    topic: 'language-techniques',
    question:
      'What technique involves the repetition of consonant sounds within or at the end of words?',
    options: ['Alliteration', 'Assonance', 'Consonance', 'Rhyme'],
    correctIndex: 2,
    explanation:
      'Consonance is the repetition of consonant sounds within or at the end of words in close succession (e.g., "pitter patter", "odds and ends").',
  },
  {
    id: 'lt20',
    topic: 'language-techniques',
    question: 'What is a motif?',
    options: [
      "The main character's motivation",
      'A recurring element that carries symbolic significance',
      'The moral of a story',
      'A type of narrative structure',
    ],
    correctIndex: 1,
    explanation:
      'A motif is a recurring image, idea, or symbol throughout a text that develops or reinforces the themes.',
  },

  // ── Identify the technique (30 questions: lt101–lt130) ────────────────────

  {
    id: 'lt101',
    topic: 'language-techniques',
    question: 'What technique is used in "The classroom was a zoo"?',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'],
    correctIndex: 1,
    explanation:
      'This is a metaphor because it directly states the classroom IS a zoo, rather than saying it is LIKE one.',
  },
  {
    id: 'lt102',
    topic: 'language-techniques',
    question: 'What technique is used in "She sells sea shells on the sea shore"?',
    options: ['Assonance', 'Onomatopoeia', 'Alliteration', 'Consonance'],
    correctIndex: 2,
    explanation:
      'Alliteration is the repetition of the same consonant sound at the beginning of closely connected words — here the "s" sound.',
  },
  {
    id: 'lt103',
    topic: 'language-techniques',
    question: 'What technique is used in "The stars danced across the night sky"?',
    options: ['Simile', 'Personification', 'Oxymoron', 'Alliteration'],
    correctIndex: 1,
    explanation: 'Stars cannot literally dance; giving them this human action is personification.',
  },
  {
    id: 'lt104',
    topic: 'language-techniques',
    question: 'What technique is used in "He was as brave as a lion"?',
    options: ['Metaphor', 'Personification', 'Simile', 'Hyperbole'],
    correctIndex: 2,
    explanation:
      'A simile compares two things using "as" or "like". Here bravery is compared to a lion using "as".',
  },
  {
    id: 'lt105',
    topic: 'language-techniques',
    question: 'What technique is used in "Bang! Crash! The thunder roared outside"?',
    options: ['Alliteration', 'Onomatopoeia', 'Sibilance', 'Juxtaposition'],
    correctIndex: 1,
    explanation:
      'Onomatopoeia is when words imitate the sounds they describe — "bang" and "crash" sound like the noises they represent.',
  },
  {
    id: 'lt106',
    topic: 'language-techniques',
    question: 'What technique is used in "It was a bittersweet moment"?',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Antithesis'],
    correctIndex: 1,
    explanation:
      'An oxymoron places two contradictory words together — "bitter" and "sweet" are opposites combined into one term.',
  },
  {
    id: 'lt107',
    topic: 'language-techniques',
    question: 'What technique is used in "I have a million things to do today"?',
    options: ['Litotes', 'Metaphor', 'Hyperbole', 'Understatement'],
    correctIndex: 2,
    explanation:
      'Hyperbole is deliberate exaggeration for emphasis. Nobody literally has a million tasks.',
  },
  {
    id: 'lt108',
    topic: 'language-techniques',
    question: 'What technique is used in "The snake slithered silently sideways"?',
    options: ['Sibilance', 'Assonance', 'Consonance', 'Onomatopoeia'],
    correctIndex: 0,
    explanation:
      'Sibilance is the repetition of "s" and "sh" sounds, creating a hissing effect that mirrors the snake\'s movement.',
  },
  {
    id: 'lt109',
    topic: 'language-techniques',
    question: 'What technique is used in "Not bad" to mean "very good"?',
    options: ['Hyperbole', 'Euphemism', 'Litotes', 'Sarcasm'],
    correctIndex: 2,
    explanation:
      'Litotes is a form of understatement that uses a negative to express a positive — "not bad" means "good" or "great".',
  },
  {
    id: 'lt110',
    topic: 'language-techniques',
    question: 'What technique is used in "To be or not to be"?',
    options: ['Antithesis', 'Paradox', 'Rhetorical question', 'Oxymoron'],
    correctIndex: 0,
    explanation:
      'Antithesis places two opposing ideas in a balanced phrase — "to be" is directly contrasted with "not to be".',
  },
  {
    id: 'lt111',
    topic: 'language-techniques',
    question: 'What technique is used in "The rain fell like needles on their skin"?',
    options: ['Metaphor', 'Personification', 'Simile', 'Hyperbole'],
    correctIndex: 2,
    explanation:
      'A simile uses "like" or "as" to compare two things. Here rain is compared to needles using "like".',
  },
  {
    id: 'lt112',
    topic: 'language-techniques',
    question: 'What technique is used in "Break a leg!" meaning "good luck"?',
    options: ['Simile', 'Idiom', 'Litotes', 'Euphemism'],
    correctIndex: 1,
    explanation:
      'An idiom is a phrase whose meaning cannot be understood from the literal meaning of the individual words.',
  },
  {
    id: 'lt113',
    topic: 'language-techniques',
    question: 'What technique is used in "Power. Pain. Purpose."?',
    options: ['Tricolon (rule of three)', 'Anaphora', 'Asyndeton', 'Listing'],
    correctIndex: 0,
    explanation:
      'A tricolon (rule of three) groups three words or phrases together for emphasis, rhythm, and memorability.',
  },
  {
    id: 'lt114',
    topic: 'language-techniques',
    question: 'What technique is used when a fire-station burns down?',
    options: ['Dramatic irony', 'Situational irony', 'Verbal irony', 'Paradox'],
    correctIndex: 1,
    explanation:
      'Situational irony occurs when the outcome is the opposite of what is expected — a fire station is supposed to prevent fires, not burn.',
  },
  {
    id: 'lt115',
    topic: 'language-techniques',
    question: 'What technique is used in "I came, I saw, I conquered"?',
    options: ['Anaphora', 'Tricolon', 'Asyndeton', 'All of these'],
    correctIndex: 3,
    explanation:
      'This phrase uses anaphora (repeated "I"), tricolon (three clauses), and asyndeton (no conjunctions) simultaneously.',
  },
  {
    id: 'lt116',
    topic: 'language-techniques',
    question: 'What technique is used in "The walls have ears"?',
    options: ['Simile', 'Personification', 'Hyperbole', 'Allusion'],
    correctIndex: 1,
    explanation:
      'Walls cannot literally have ears. Giving a human feature to an inanimate object is personification.',
  },
  {
    id: 'lt117',
    topic: 'language-techniques',
    question: 'What technique is used in "He passed away" instead of "He died"?',
    options: ['Euphemism', 'Litotes', 'Understatement', 'Idiom'],
    correctIndex: 0,
    explanation:
      'A euphemism is a polite or mild expression used in place of one that might be harsh or blunt — "passed away" softens "died".',
  },
  {
    id: 'lt118',
    topic: 'language-techniques',
    question:
      'What technique is used in "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields"?',
    options: ['Epistrophe', 'Anaphora', 'Epiphora', 'Parallelism'],
    correctIndex: 1,
    explanation:
      'Anaphora is the repetition of a word or phrase at the beginning of successive clauses — here "we shall fight" is repeated.',
  },
  {
    id: 'lt119',
    topic: 'language-techniques',
    question: 'What technique is used in "The thunder grumbled like an old man"?',
    options: [
      'Personification only',
      'Simile only',
      'Both personification and simile',
      'Pathetic fallacy only',
    ],
    correctIndex: 2,
    explanation:
      'Thunder "grumbled" is personification (human action), and "like an old man" makes it also a simile. Both techniques work together.',
  },
  {
    id: 'lt120',
    topic: 'language-techniques',
    question:
      'What technique is used in "All animals are equal, but some animals are more equal than others"?',
    options: ['Oxymoron', 'Paradox', 'Antithesis', 'Irony'],
    correctIndex: 1,
    explanation:
      'A paradox is a statement that seems contradictory but reveals a deeper truth. Something cannot logically be "more equal".',
  },
  {
    id: 'lt121',
    topic: 'language-techniques',
    question: 'What technique is used in "The bright sun cast dark shadows across the yard"?',
    options: ['Oxymoron', 'Juxtaposition', 'Paradox', 'Antithesis'],
    correctIndex: 1,
    explanation:
      'Juxtaposition places contrasting ideas ("bright" and "dark") close together to highlight their differences.',
  },
  {
    id: 'lt122',
    topic: 'language-techniques',
    question: 'What technique is used in "Hear the mellow wedding bells"?',
    options: ['Consonance', 'Assonance', 'Alliteration', 'Sibilance'],
    correctIndex: 1,
    explanation:
      'Assonance is the repetition of vowel sounds within nearby words — the "e" sound repeats in "hear", "mellow", "wedding", "bells".',
  },
  {
    id: 'lt123',
    topic: 'language-techniques',
    question: 'What technique is used when a writer refers to "the Crown" meaning the monarchy?',
    options: ['Metaphor', 'Synecdoche', 'Metonymy', 'Symbolism'],
    correctIndex: 2,
    explanation:
      'Metonymy replaces the name of something with an attribute closely associated with it — the crown is associated with the monarchy but is not the same thing.',
  },
  {
    id: 'lt124',
    topic: 'language-techniques',
    question: 'What technique is used in "The fog crept in on little cat feet"?',
    options: ['Simile', 'Extended metaphor', 'Personification', 'Allegory'],
    correctIndex: 1,
    explanation:
      'An extended metaphor develops a comparison across multiple phrases or sentences — fog is compared to a cat throughout.',
  },
  {
    id: 'lt125',
    topic: 'language-techniques',
    question:
      'What technique is used when the audience knows a character is walking into a trap, but the character does not?',
    options: ['Situational irony', 'Verbal irony', 'Dramatic irony', 'Foreshadowing'],
    correctIndex: 2,
    explanation:
      'Dramatic irony occurs when the audience knows something a character does not, creating tension or humour.',
  },
  {
    id: 'lt126',
    topic: 'language-techniques',
    question: 'What technique is used in "Lend me your ears"?',
    options: ['Hyperbole', 'Synecdoche', 'Metonymy', 'Idiom'],
    correctIndex: 1,
    explanation:
      'Synecdoche uses a part to represent the whole — "ears" stands for the whole person\'s attention.',
  },
  {
    id: 'lt127',
    topic: 'language-techniques',
    question: 'What technique is used in "The child was a whirlwind of energy"?',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    correctIndex: 1,
    explanation:
      'This is a metaphor — the child is directly described AS a whirlwind rather than being compared using "like" or "as".',
  },
  {
    id: 'lt128',
    topic: 'language-techniques',
    question: 'What technique is used in "Nice weather we\'re having" during a storm?',
    options: ['Litotes', 'Verbal irony', 'Paradox', 'Euphemism'],
    correctIndex: 1,
    explanation:
      'Verbal irony is when someone says the opposite of what they mean — calling a storm "nice weather" is deliberately ironic.',
  },
  {
    id: 'lt129',
    topic: 'language-techniques',
    question: 'What technique is used in "From the cradle to the grave"?',
    options: ['Metaphor', 'Metonymy', 'Symbolism', 'Juxtaposition'],
    correctIndex: 0,
    explanation:
      '"Cradle" and "grave" are metaphors for birth and death, representing the whole span of life.',
  },
  {
    id: 'lt130',
    topic: 'language-techniques',
    question: 'What technique is used when a writer puts "Silence." as its own paragraph?',
    options: ['Anaphora', 'Minor sentence (fragment)', 'Ellipsis', 'Caesura'],
    correctIndex: 1,
    explanation:
      'A minor sentence (or sentence fragment) is a word or short phrase used as a sentence for dramatic emphasis.',
  },

  // ── Effect of technique (20 questions: lt131–lt150) ───────────────────────

  {
    id: 'lt131',
    topic: 'language-techniques',
    question: 'What is the effect of using a rhetorical question in persuasive writing?',
    options: [
      'It confuses the reader',
      'It engages the reader and encourages them to agree',
      'It weakens the argument',
      'It provides factual evidence',
    ],
    correctIndex: 1,
    explanation:
      "Rhetorical questions make the reader think and often lead them towards the writer's viewpoint by implying an obvious answer.",
  },
  {
    id: 'lt132',
    topic: 'language-techniques',
    question: 'What effect does pathetic fallacy typically create?',
    options: [
      'Humour',
      "A connection between the setting and a character's emotions",
      'Confusion about the time of day',
      'Historical context',
    ],
    correctIndex: 1,
    explanation:
      "Pathetic fallacy mirrors characters' emotions in the environment, deepening the mood and allowing readers to feel the emotional atmosphere.",
  },
  {
    id: 'lt133',
    topic: 'language-techniques',
    question: 'What is the effect of listing in descriptive writing?',
    options: [
      'It slows the pace to a halt',
      'It builds up detail, creates emphasis, or conveys overwhelm',
      'It always creates humour',
      'It replaces the need for adjectives',
    ],
    correctIndex: 1,
    explanation:
      'Listing accumulates detail, which can overwhelm the reader, emphasise quantity or variety, or build intensity.',
  },
  {
    id: 'lt134',
    topic: 'language-techniques',
    question: 'What effect does alliteration typically have on the reader?',
    options: [
      'It makes the text harder to read',
      'It creates rhythm, emphasis, or draws attention to particular words',
      'It always creates a soothing mood',
      'It signals the end of a paragraph',
    ],
    correctIndex: 1,
    explanation:
      'Alliteration creates a rhythmic, musical quality, draws attention to key words, and can reinforce meaning — harsh sounds for aggression, soft sounds for calm.',
  },
  {
    id: 'lt135',
    topic: 'language-techniques',
    question: 'What is the effect of using an extended metaphor throughout a text?',
    options: [
      'It confuses the reader with mixed imagery',
      'It develops a comparison in depth, reinforcing themes',
      'It replaces the need for a plot',
      'It shortens the text',
    ],
    correctIndex: 1,
    explanation:
      "An extended metaphor sustains a comparison across multiple lines or a whole text, deepening the reader's understanding of the theme.",
  },
  {
    id: 'lt136',
    topic: 'language-techniques',
    question: 'What effect does juxtaposition create for the reader?',
    options: [
      'It shows two things are identical',
      'It highlights contrasts and forces the reader to consider differences',
      'It always creates a negative tone',
      'It removes ambiguity',
    ],
    correctIndex: 1,
    explanation:
      'Juxtaposition places contrasting ideas side by side, forcing the reader to notice differences and think critically about the comparison.',
  },
  {
    id: 'lt137',
    topic: 'language-techniques',
    question: 'What is the effect of using direct address ("you") in a speech or article?',
    options: [
      'It makes the text more formal',
      'It creates a personal connection and makes the reader feel involved',
      'It distances the writer from the audience',
      'It is considered poor style',
    ],
    correctIndex: 1,
    explanation:
      'Direct address draws the reader in personally, making them feel the message is aimed specifically at them.',
  },
  {
    id: 'lt138',
    topic: 'language-techniques',
    question: 'What is the effect of using a semantic field of war in non-war writing?',
    options: [
      'It literally means there is a battle',
      'It creates connotations of conflict, aggression, or struggle',
      'It confuses the reader about the topic',
      'It has no effect',
    ],
    correctIndex: 1,
    explanation:
      'A semantic field draws on associated vocabulary from a topic (e.g., war: "battle", "fight", "defend") to create connotations of conflict even in unrelated subjects.',
  },
  {
    id: 'lt139',
    topic: 'language-techniques',
    question: 'What is the effect of an ellipsis (...) at the end of a sentence?',
    options: [
      'It shows a spelling error',
      'It creates suspense, trailing off, or suggests something is left unsaid',
      'It means the sentence is complete',
      'It replaces a full stop',
    ],
    correctIndex: 1,
    explanation:
      'An ellipsis creates a sense of incompleteness, suspense, or uncertainty — suggesting there is more to be said or inviting the reader to imagine what follows.',
  },
  {
    id: 'lt140',
    topic: 'language-techniques',
    question: 'What is the effect of using repetition in a speech?',
    options: [
      'It shows the writer has a limited vocabulary',
      'It reinforces key ideas and makes them more memorable',
      'It always bores the audience',
      'It weakens the argument',
    ],
    correctIndex: 1,
    explanation:
      "Repetition hammers home key ideas, makes them stick in the audience's memory, and creates a powerful, persuasive rhythm.",
  },
  {
    id: 'lt141',
    topic: 'language-techniques',
    question: 'What effect does a shift from long to short sentences create?',
    options: [
      'It shows poor writing',
      'It creates a sudden change in pace, often for dramatic impact',
      'It has no stylistic effect',
      'It only occurs in poetry',
    ],
    correctIndex: 1,
    explanation:
      "Moving from long, flowing sentences to a short, abrupt one creates a dramatic pause or shock, jolting the reader's attention.",
  },
  {
    id: 'lt142',
    topic: 'language-techniques',
    question: 'What is the effect of using emotive language in a newspaper article?',
    options: [
      'It makes the article objective',
      "It manipulates the reader's emotions to provoke a reaction",
      'It has no effect on the reader',
      'It is only used in fiction',
    ],
    correctIndex: 1,
    explanation:
      "Emotive language deliberately triggers emotional responses — anger, sympathy, outrage — to influence the reader's opinion.",
  },
  {
    id: 'lt143',
    topic: 'language-techniques',
    question: 'What is the effect of an imperative verb in persuasive writing?',
    options: [
      'It makes the writing tentative',
      'It commands or urges the reader to act, creating urgency',
      'It weakens the argument',
      'It is grammatically incorrect',
    ],
    correctIndex: 1,
    explanation:
      'Imperatives ("Act now", "Consider this") directly command the reader, creating urgency and a call to action.',
  },
  {
    id: 'lt144',
    topic: 'language-techniques',
    question: 'What is the effect of a cyclical structure in a narrative?',
    options: [
      'It confuses the reader',
      'It creates a sense of completeness, inevitability, or entrapment',
      'It shows the writer ran out of ideas',
      'It only works in poetry',
    ],
    correctIndex: 1,
    explanation:
      'Ending where the story began creates satisfaction, suggests nothing has changed, or implies a character is trapped in a cycle.',
  },
  {
    id: 'lt145',
    topic: 'language-techniques',
    question: 'What effect does first-person narration create?',
    options: [
      'Objective distance',
      "Intimacy, subjectivity, and direct access to the narrator's thoughts",
      'A formal, academic tone',
      'An unreliable setting',
    ],
    correctIndex: 1,
    explanation:
      'First person ("I") draws readers close to the narrator\'s perspective, creating intimacy and allowing access to their inner thoughts and feelings.',
  },
  {
    id: 'lt146',
    topic: 'language-techniques',
    question: 'What is the effect of using statistics in an argument?',
    options: [
      'They always mislead the reader',
      'They add authority and factual weight to the argument',
      'They replace the need for language techniques',
      'They make writing less persuasive',
    ],
    correctIndex: 1,
    explanation:
      'Statistics lend credibility and factual authority, making the argument seem well-researched and difficult to dispute.',
  },
  {
    id: 'lt147',
    topic: 'language-techniques',
    question: 'What is the effect of using an anecdote in persuasive writing?',
    options: [
      'It makes the writing fictional',
      'It makes the argument personal, relatable, and emotionally engaging',
      'It weakens credibility',
      'It is only appropriate in speeches',
    ],
    correctIndex: 1,
    explanation:
      'An anecdote (short personal story) engages the reader emotionally, makes abstract arguments concrete, and builds a connection with the audience.',
  },
  {
    id: 'lt148',
    topic: 'language-techniques',
    question: 'What is the effect of using a dash (—) in the middle of a sentence?',
    options: [
      'It is a grammatical error',
      'It creates a sudden interruption, afterthought, or dramatic pause',
      'It replaces a comma with no change in meaning',
      'It signals the end of a text',
    ],
    correctIndex: 1,
    explanation:
      'A dash interrupts the flow of a sentence to add emphasis, an afterthought, or a dramatic shift in direction.',
  },
  {
    id: 'lt149',
    topic: 'language-techniques',
    question: 'What is the effect of using second-person narration in fiction?',
    options: [
      'It distances the reader',
      'It places the reader directly into the story, creating immersion',
      'It is never used in fiction',
      'It makes the text impersonal',
    ],
    correctIndex: 1,
    explanation:
      'Second person ("you") puts the reader into the protagonist\'s position, creating an immersive, unsettling, or intimate experience.',
  },
  {
    id: 'lt150',
    topic: 'language-techniques',
    question: 'What is the effect of ending a text with an unanswered question?',
    options: [
      'It shows the writer forgot to finish',
      'It provokes thought and leaves a lasting impression on the reader',
      'It weakens the conclusion',
      'It is considered poor writing',
    ],
    correctIndex: 1,
    explanation:
      "An unanswered question at the end lingers in the reader's mind, encouraging reflection and making the text memorable.",
  },

  // ── SPaG – spelling, punctuation, grammar (20 questions: lt151–lt170) ─────

  {
    id: 'lt151',
    topic: 'language-techniques',
    question: 'What is the correct use of an apostrophe in "The dog\'s bone"?',
    options: ['Omission', 'Possession (the bone belongs to the dog)', 'Plural', 'Contraction'],
    correctIndex: 1,
    explanation:
      'The apostrophe shows possession — the bone belonging to the dog. This is different from omission (e.g., "don\'t").',
  },
  {
    id: 'lt152',
    topic: 'language-techniques',
    question: 'Which sentence uses a semicolon correctly?',
    options: [
      '"I like cats; and dogs"',
      '"I like cats; they are independent creatures"',
      '"I like; cats"',
      '"I; like cats"',
    ],
    correctIndex: 1,
    explanation:
      'A semicolon joins two closely related independent clauses. Both parts must be able to stand as sentences on their own.',
  },
  {
    id: 'lt153',
    topic: 'language-techniques',
    question: 'What is the difference between "there", "their", and "they\'re"?',
    options: [
      'They all mean the same thing',
      '"There" = place, "their" = possession, "they\'re" = they are',
      '"Their" = place, "there" = possession, "they\'re" = they were',
      'There is no difference',
    ],
    correctIndex: 1,
    explanation:
      '"There" refers to a place, "their" shows possession, and "they\'re" is a contraction of "they are".',
  },
  {
    id: 'lt154',
    topic: 'language-techniques',
    question: 'What is a comma splice?',
    options: [
      'Using too many commas in a list',
      'Incorrectly joining two independent clauses with just a comma',
      'Putting a comma before "and"',
      'Using a comma after a greeting',
    ],
    correctIndex: 1,
    explanation:
      'A comma splice is the error of joining two complete sentences with only a comma. Use a semicolon, conjunction, or full stop instead.',
  },
  {
    id: 'lt155',
    topic: 'language-techniques',
    question: 'When should you use "its" (no apostrophe)?',
    options: [
      'When showing "it is"',
      'When showing possession (belonging to it)',
      'Never — it is always wrong',
      'When starting a sentence',
    ],
    correctIndex: 1,
    explanation:
      '"Its" (no apostrophe) is the possessive form — "the cat licked its paw". "It\'s" with an apostrophe means "it is" or "it has".',
  },
  {
    id: 'lt156',
    topic: 'language-techniques',
    question: 'What is a subordinate clause?',
    options: [
      'A clause that makes sense on its own',
      'A clause that depends on the main clause and cannot stand alone',
      'The first clause in any sentence',
      'A clause that starts with a capital letter',
    ],
    correctIndex: 1,
    explanation:
      'A subordinate (dependent) clause adds information but cannot stand alone as a sentence — e.g., "Although it was raining" needs a main clause.',
  },
  {
    id: 'lt157',
    topic: 'language-techniques',
    question: 'What is the correct plural of "child"?',
    options: ['Childs', 'Childes', 'Children', 'Childrens'],
    correctIndex: 2,
    explanation:
      '"Children" is the correct irregular plural of "child". It does not follow the standard "-s" or "-es" rule.',
  },
  {
    id: 'lt158',
    topic: 'language-techniques',
    question: 'What is a colon used for in a sentence?',
    options: [
      'To join two unrelated ideas',
      'To introduce a list, explanation, or elaboration',
      'To show possession',
      'To indicate a question',
    ],
    correctIndex: 1,
    explanation:
      'A colon introduces what follows — a list, an explanation, or an expansion of the point made before the colon.',
  },
  {
    id: 'lt159',
    topic: 'language-techniques',
    question: 'Which sentence is in the passive voice?',
    options: [
      '"The dog bit the man"',
      '"The man was bitten by the dog"',
      '"The dog is biting"',
      '"The man ran away"',
    ],
    correctIndex: 1,
    explanation:
      'In the passive voice, the subject receives the action: "The man was bitten". In active voice, the subject performs the action: "The dog bit".',
  },
  {
    id: 'lt160',
    topic: 'language-techniques',
    question: 'What is the difference between "affect" and "effect"?',
    options: [
      'They are interchangeable',
      '"Affect" is a verb (to influence); "effect" is usually a noun (a result)',
      '"Effect" is a verb; "affect" is a noun',
      'They are both nouns',
    ],
    correctIndex: 1,
    explanation:
      '"Affect" is usually a verb meaning to influence. "Effect" is usually a noun meaning the result. A useful tip: Affect = Action, Effect = End result.',
  },
  {
    id: 'lt161',
    topic: 'language-techniques',
    question: 'What is a relative clause?',
    options: [
      'A clause about family',
      'A clause introduced by who, which, that, where, or whose',
      'A clause that starts every sentence',
      'A clause that contains a verb',
    ],
    correctIndex: 1,
    explanation:
      'A relative clause gives extra information about a noun, introduced by relative pronouns — who, which, that, whose, or where.',
  },
  {
    id: 'lt162',
    topic: 'language-techniques',
    question: 'When should you use "who" versus "whom"?',
    options: [
      'They mean the same thing',
      '"Who" is the subject; "whom" is the object',
      '"Whom" is always informal',
      '"Who" is never used in questions',
    ],
    correctIndex: 1,
    explanation:
      '"Who" replaces the subject (he/she did it), while "whom" replaces the object (it was done to him/her). Try substituting he/him to check.',
  },
  {
    id: 'lt163',
    topic: 'language-techniques',
    question: 'What does a pair of parenthetical commas do?',
    options: [
      'They create a list',
      'They separate extra information that could be removed without changing the meaning',
      'They end a sentence',
      'They introduce direct speech',
    ],
    correctIndex: 1,
    explanation:
      'Parenthetical commas enclose additional, non-essential information — like brackets — that can be removed and the sentence still makes sense.',
  },
  {
    id: 'lt164',
    topic: 'language-techniques',
    question: 'What is the correct form: "would have" or "would of"?',
    options: [
      '"Would of" is correct',
      '"Would have" is correct',
      'Both are acceptable',
      'Neither is correct',
    ],
    correctIndex: 1,
    explanation:
      '"Would have" (or "would\'ve") is correct. "Would of" is a common error caused by mishearing the contraction "would\'ve".',
  },
  {
    id: 'lt165',
    topic: 'language-techniques',
    question: 'What is subject-verb agreement?',
    options: [
      'The verb must match the tense of the previous sentence',
      'A singular subject takes a singular verb, and a plural subject takes a plural verb',
      'Every sentence must have two verbs',
      'Verbs always come before subjects',
    ],
    correctIndex: 1,
    explanation:
      'Subject-verb agreement means matching singular subjects with singular verbs ("she runs") and plural subjects with plural verbs ("they run").',
  },
  {
    id: 'lt166',
    topic: 'language-techniques',
    question: 'What punctuation is used to introduce direct speech?',
    options: ['A semicolon', 'Inverted commas (speech marks)', 'A colon only', 'Brackets'],
    correctIndex: 1,
    explanation:
      'Direct speech is enclosed in inverted commas (quotation marks): "Hello," she said. A comma, colon, or nothing precedes the opening speech mark.',
  },
  {
    id: 'lt167',
    topic: 'language-techniques',
    question: 'What is a dangling modifier?',
    options: [
      'A long adjective',
      'A modifier that does not clearly refer to the word it is meant to modify',
      'A type of adverb',
      'A punctuation error',
    ],
    correctIndex: 1,
    explanation:
      'A dangling modifier is misplaced so it seems to modify the wrong word — e.g., "Running quickly, the bus was caught" implies the bus was running.',
  },
  {
    id: 'lt168',
    topic: 'language-techniques',
    question: 'What is the difference between "practise" and "practice" in British English?',
    options: [
      'There is no difference',
      '"Practise" is the verb; "practice" is the noun',
      '"Practice" is the verb; "practise" is the noun',
      '"Practise" is American English',
    ],
    correctIndex: 1,
    explanation:
      'In British English, "practise" is the verb (I practise piano) and "practice" is the noun (piano practice). Think: adviCe/adviSe follows the same pattern.',
  },
  {
    id: 'lt169',
    topic: 'language-techniques',
    question:
      'Where should the apostrophe go in the phrase meaning "the toys belonging to the children"?',
    options: ["childrens' toys", "children's toys", 'childrens toys', "children toys'"],
    correctIndex: 1,
    explanation:
      'Because "children" is already plural, the apostrophe goes after the "n" and before the "s": children\'s toys.',
  },
  {
    id: 'lt170',
    topic: 'language-techniques',
    question: 'What is a split infinitive?',
    options: [
      'A verb broken into two parts',
      'Placing a word between "to" and the verb (e.g., "to boldly go")',
      'Using two infinitives in one sentence',
      'An incomplete sentence',
    ],
    correctIndex: 1,
    explanation:
      'A split infinitive occurs when a word (usually an adverb) is placed between "to" and its verb: "to boldly go" instead of "to go boldly".',
  },

  // ── Sentence types and structure (15 questions: lt171–lt185) ──────────────

  {
    id: 'lt171',
    topic: 'language-techniques',
    question: 'What is a declarative sentence?',
    options: [
      'A sentence that asks a question',
      'A sentence that makes a statement',
      'A sentence that gives a command',
      'A sentence that expresses strong emotion',
    ],
    correctIndex: 1,
    explanation:
      'A declarative sentence makes a statement or declares something. It ends with a full stop. Example: "The weather is warm today."',
  },
  {
    id: 'lt172',
    topic: 'language-techniques',
    question: 'What is an interrogative sentence?',
    options: [
      'A sentence that gives a command',
      'A sentence that asks a question',
      'A sentence that makes a statement',
      'A sentence that ends with an exclamation mark',
    ],
    correctIndex: 1,
    explanation:
      'An interrogative sentence asks a question and ends with a question mark. Example: "What time does the lesson start?"',
  },
  {
    id: 'lt173',
    topic: 'language-techniques',
    question: 'What is an imperative sentence?',
    options: [
      'A sentence that asks a question',
      'A sentence that makes a statement',
      'A sentence that gives a command or instruction',
      'A sentence that expresses surprise',
    ],
    correctIndex: 2,
    explanation:
      'An imperative sentence gives a command, instruction, or request. The subject ("you") is often implied. Example: "Close the door."',
  },
  {
    id: 'lt174',
    topic: 'language-techniques',
    question: 'What is an exclamatory sentence?',
    options: [
      'A sentence that asks a question',
      'A sentence that gives a command',
      'A sentence that expresses strong emotion and ends with an exclamation mark',
      'A sentence that starts with "the"',
    ],
    correctIndex: 2,
    explanation:
      'An exclamatory sentence expresses strong feeling — surprise, anger, joy — and ends with an exclamation mark. Example: "What a wonderful day!"',
  },
  {
    id: 'lt175',
    topic: 'language-techniques',
    question: 'What is a compound sentence?',
    options: [
      'A sentence with one clause',
      'Two independent clauses joined by a coordinating conjunction (FANBOYS)',
      'A sentence with a subordinate clause',
      'A sentence with no verbs',
    ],
    correctIndex: 1,
    explanation:
      'A compound sentence joins two independent clauses using a coordinating conjunction: For, And, Nor, But, Or, Yet, So (FANBOYS).',
  },
  {
    id: 'lt176',
    topic: 'language-techniques',
    question: 'What is a complex sentence?',
    options: [
      'A very long sentence',
      'A sentence containing a main clause and at least one subordinate clause',
      'A sentence with two main clauses',
      'A sentence with complicated vocabulary',
    ],
    correctIndex: 1,
    explanation:
      'A complex sentence has a main (independent) clause and one or more subordinate (dependent) clauses joined by subordinating conjunctions like "although", "because", "when".',
  },
  {
    id: 'lt177',
    topic: 'language-techniques',
    question: 'What is a simple sentence?',
    options: [
      'A sentence with no punctuation',
      'A sentence with one main clause containing a subject and verb',
      'A sentence with only short words',
      'A sentence aimed at young children',
    ],
    correctIndex: 1,
    explanation:
      'A simple sentence has one independent clause with a subject and verb. It can still be long: "The large grey cat sat lazily on the warm mat."',
  },
  {
    id: 'lt178',
    topic: 'language-techniques',
    question: 'What is a compound-complex sentence?',
    options: [
      'The same as a compound sentence',
      'A sentence with at least two independent clauses and at least one subordinate clause',
      'A sentence with only subordinate clauses',
      'A run-on sentence',
    ],
    correctIndex: 1,
    explanation:
      'A compound-complex sentence combines at least two independent clauses with one or more subordinate clauses, creating a sophisticated structure.',
  },
  {
    id: 'lt179',
    topic: 'language-techniques',
    question: 'What is a fronted adverbial?',
    options: [
      'An adverb at the end of a sentence',
      'A word or phrase at the start of a sentence that describes the action, followed by a comma',
      'An adjective placed before a noun',
      'A verb at the front of a clause',
    ],
    correctIndex: 1,
    explanation:
      'A fronted adverbial is a word or phrase placed at the beginning of a sentence to modify the verb — e.g., "Cautiously, she opened the door."',
  },
  {
    id: 'lt180',
    topic: 'language-techniques',
    question: 'What is an embedded clause?',
    options: [
      'A clause at the end of a sentence',
      'A clause placed in the middle of another clause, usually between commas',
      'A clause that begins a sentence',
      'A clause with no verb',
    ],
    correctIndex: 1,
    explanation:
      'An embedded clause is inserted into the middle of a sentence, usually between commas or dashes — e.g., "The teacher, who was very strict, gave a test."',
  },
  {
    id: 'lt181',
    topic: 'language-techniques',
    question:
      'What effect does starting a sentence with a conjunction (e.g., "And", "But") create?',
    options: [
      'It is always grammatically wrong',
      'It creates emphasis, informality, or a dramatic continuation',
      'It makes the writing more academic',
      'It has no effect',
    ],
    correctIndex: 1,
    explanation:
      'Starting with a conjunction can create emphasis, a conversational tone, or a dramatic link to the previous idea. It is a deliberate stylistic choice.',
  },
  {
    id: 'lt182',
    topic: 'language-techniques',
    question: 'What is a periodic sentence?',
    options: [
      'A sentence used only in formal essays',
      'A sentence where the main idea is delayed until the end',
      'A sentence with a period at the end',
      'A sentence that repeats',
    ],
    correctIndex: 1,
    explanation:
      'A periodic sentence delays the main clause until the end, building suspense — e.g., "Despite the rain, the cold, and the darkness, she kept running."',
  },
  {
    id: 'lt183',
    topic: 'language-techniques',
    question: 'What is a loose (cumulative) sentence?',
    options: [
      'A sentence with grammatical errors',
      'A sentence that states the main idea first and then adds detail',
      'A sentence with no structure',
      'A very short sentence',
    ],
    correctIndex: 1,
    explanation:
      'A loose sentence puts the main clause first and adds modifying phrases after — e.g., "She kept running, despite the rain, the cold, and the darkness."',
  },
  {
    id: 'lt184',
    topic: 'language-techniques',
    question: 'What is asyndetic listing?',
    options: [
      'A list joined by conjunctions',
      'A list without conjunctions between items',
      'A numbered list',
      'A list of synonyms',
    ],
    correctIndex: 1,
    explanation:
      'Asyndetic listing removes conjunctions between items ("blood, sweat, tears"), creating a fast pace and a sense of accumulation.',
  },
  {
    id: 'lt185',
    topic: 'language-techniques',
    question: 'What is a syndetic list?',
    options: [
      'A list without conjunctions',
      'A list that uses conjunctions between items (often "and" or "or")',
      'A list of verbs only',
      'A list in alphabetical order',
    ],
    correctIndex: 1,
    explanation:
      'A syndetic list includes conjunctions — e.g., "blood and sweat and tears". This slows the pace and gives equal weight to each item.',
  },

  // ── Vocabulary / define literary terms (15 questions: lt186–lt200) ────────

  {
    id: 'lt186',
    topic: 'language-techniques',
    question: 'What does "connotation" mean?',
    options: [
      'The dictionary definition of a word',
      'The associated or implied meanings beyond the literal definition',
      'A type of punctuation',
      'A formal way of speaking',
    ],
    correctIndex: 1,
    explanation:
      'Connotation refers to the feelings, associations, and ideas a word evokes beyond its literal (denotative) meaning — e.g., "home" connotes warmth and safety.',
  },
  {
    id: 'lt187',
    topic: 'language-techniques',
    question: 'What does "denotation" mean?',
    options: [
      'The emotional meaning of a word',
      'The literal, dictionary definition of a word',
      'A musical term',
      'The origin of a word',
    ],
    correctIndex: 1,
    explanation:
      'Denotation is the literal, dictionary definition of a word — as opposed to its connotations (associated meanings).',
  },
  {
    id: 'lt188',
    topic: 'language-techniques',
    question: 'What is a "semantic field"?',
    options: [
      'A field of study',
      'A group of words related to the same topic or theme',
      'A grammatical rule',
      'A type of sentence',
    ],
    correctIndex: 1,
    explanation:
      'A semantic field is a set of words grouped by meaning relating to the same subject — e.g., a semantic field of death: "grave", "tomb", "decay", "ghost".',
  },
  {
    id: 'lt189',
    topic: 'language-techniques',
    question: 'What does "ambiguity" mean in literature?',
    options: [
      'Clear and obvious meaning',
      'When language is open to more than one interpretation',
      'A type of plot structure',
      'An error in writing',
    ],
    correctIndex: 1,
    explanation:
      'Ambiguity is when language can be interpreted in multiple ways, allowing deeper or alternative readings of a text.',
  },
  {
    id: 'lt190',
    topic: 'language-techniques',
    question: 'What is "tone" in writing?',
    options: [
      "The volume of a character's voice",
      "The writer's attitude towards the subject or audience",
      'The genre of the text',
      'The font used in printing',
    ],
    correctIndex: 1,
    explanation:
      "Tone is the writer's attitude conveyed through word choice, style, and content — e.g., sarcastic, melancholic, optimistic, hostile.",
  },
  {
    id: 'lt191',
    topic: 'language-techniques',
    question: 'What is the difference between "mood" and "tone"?',
    options: [
      'They mean the same thing',
      '"Tone" is the writer\'s attitude; "mood" is the atmosphere or feeling created for the reader',
      '"Mood" is formal; "tone" is informal',
      '"Tone" is in poetry; "mood" is in prose',
    ],
    correctIndex: 1,
    explanation:
      "Tone is the writer's attitude (how they feel about the subject). Mood is the atmosphere created for the reader (how the text makes you feel).",
  },
  {
    id: 'lt192',
    topic: 'language-techniques',
    question: 'What does "plosive" mean in language analysis?',
    options: [
      'A type of vowel sound',
      'A harsh consonant sound produced by a burst of air (b, d, g, k, p, t)',
      'A soft, flowing sound',
      'A type of rhyme',
    ],
    correctIndex: 1,
    explanation:
      'Plosive sounds (b, d, g, k, p, t) are created by briefly blocking airflow then releasing it. They create a hard, aggressive, or forceful effect.',
  },
  {
    id: 'lt193',
    topic: 'language-techniques',
    question: 'What is "register" in language?',
    options: [
      'A book of attendance',
      'The level of formality in language suited to the context',
      'A type of verb',
      'The speed at which someone speaks',
    ],
    correctIndex: 1,
    explanation:
      'Register is the level of formality in language. Formal register suits essays and speeches; informal register suits conversations and personal writing.',
  },
  {
    id: 'lt194',
    topic: 'language-techniques',
    question: 'What does "didactic" mean?',
    options: [
      'Humorous and light-hearted',
      'Intended to teach or instruct, often with a moral lesson',
      'Abstract and confusing',
      'Relating to dialect',
    ],
    correctIndex: 1,
    explanation:
      'Didactic writing aims to teach or instruct the reader, often conveying a moral or lesson — e.g., fables and parables are didactic.',
  },
  {
    id: 'lt195',
    topic: 'language-techniques',
    question: 'What is "colloquial language"?',
    options: [
      'Formal, academic language',
      'Informal, everyday language used in conversation',
      'Language from another country',
      'Archaic, old-fashioned language',
    ],
    correctIndex: 1,
    explanation:
      'Colloquial language is informal, conversational language used in everyday speech — e.g., "gonna", "loads of", "kids" instead of "children".',
  },
  {
    id: 'lt196',
    topic: 'language-techniques',
    question: 'What is "imagery"?',
    options: [
      'Only visual descriptions',
      'Language that appeals to any of the five senses',
      'A type of sentence structure',
      'Photographs included in a text',
    ],
    correctIndex: 1,
    explanation:
      'Imagery is descriptive language that appeals to the senses — sight (visual), sound (auditory), touch (tactile), taste (gustatory), and smell (olfactory).',
  },
  {
    id: 'lt197',
    topic: 'language-techniques',
    question: 'What does "polemic" mean?',
    options: [
      'A gentle, balanced discussion',
      'A strongly critical attack on or argument against something',
      'A type of poem',
      'A form of comedy',
    ],
    correctIndex: 1,
    explanation:
      'A polemic is a strong verbal or written attack — a forceful argument against a particular opinion, doctrine, or position.',
  },
  {
    id: 'lt198',
    topic: 'language-techniques',
    question: 'What does "allegory" mean?',
    options: [
      'A type of alliteration',
      'A story with a hidden meaning, where characters and events represent broader themes',
      'An allergic reaction in literature',
      'A short poem',
    ],
    correctIndex: 1,
    explanation:
      'An allegory is a narrative where characters, events, and settings symbolise deeper moral, political, or spiritual meanings — e.g., "Animal Farm" by Orwell.',
  },
  {
    id: 'lt199',
    topic: 'language-techniques',
    question: 'What does "catharsis" mean?',
    options: [
      'A type of character',
      'The release of strong emotions experienced by the audience through art',
      'A structural technique',
      'A category of genre',
    ],
    correctIndex: 1,
    explanation:
      'Catharsis is the emotional release or purging of feelings (such as pity and fear) that the audience experiences through watching drama or reading literature.',
  },
  {
    id: 'lt200',
    topic: 'language-techniques',
    question: 'What does "verisimilitude" mean?',
    options: [
      'Using very long words',
      'The appearance of being true or real in a work of fiction',
      'A verse form in poetry',
      'A type of dramatic irony',
    ],
    correctIndex: 1,
    explanation:
      'Verisimilitude is the quality of seeming real or true. Writers create verisimilitude through realistic detail, dialogue, and settings to make fiction believable.',
  },
]

// ─── Exam Technique questions (20) ─────────────────────────────────────────
const examTechniqueQuestions: QuizQuestion[] = [
  {
    id: 'et1',
    topic: 'exam-technique',
    question: 'In a GCSE English exam, what does the command word "analyse" require you to do?',
    options: [
      'Simply describe what happens',
      'Examine something in detail, exploring how and why',
      'Write a creative response',
      'List all the techniques used',
    ],
    correctIndex: 1,
    explanation:
      '"Analyse" requires you to examine language, structure, or form in detail, exploring HOW the writer creates meaning and WHY they make particular choices.',
  },
  {
    id: 'et2',
    topic: 'exam-technique',
    question: 'What does PEE (or PEEL) stand for in essay writing?',
    options: [
      'Plan, Execute, Evaluate, Learn',
      'Point, Evidence, Explanation (Link)',
      'Paragraph, Essay, Exam, Literature',
      'Present, Explore, Examine, List',
    ],
    correctIndex: 1,
    explanation:
      'PEE/PEEL stands for Point, Evidence, Explanation (and Link). This structure ensures each paragraph makes a clear point supported by textual evidence.',
  },
  {
    id: 'et3',
    topic: 'exam-technique',
    question:
      'How much time should you typically spend on planning an essay response in a GCSE English exam?',
    options: [
      'No time -- start writing immediately',
      'About 5 minutes',
      'About 15 minutes',
      'Half the total time',
    ],
    correctIndex: 1,
    explanation:
      'About 5 minutes of planning is recommended. A brief plan helps organise ideas, ensures you cover key points, and results in a more coherent response.',
  },
  {
    id: 'et4',
    topic: 'exam-technique',
    question: 'What is the difference between "compare" and "contrast"?',
    options: [
      'They mean the same thing',
      '"Compare" looks at similarities; "contrast" looks at differences',
      '"Compare" is for poetry; "contrast" is for prose',
      '"Compare" requires quotes; "contrast" does not',
    ],
    correctIndex: 1,
    explanation:
      '"Compare" identifies similarities between texts, while "contrast" highlights differences. Often both are required together.',
  },
  {
    id: 'et5',
    topic: 'exam-technique',
    question: 'When answering a question on language, what should you always include?',
    options: [
      'A biography of the author',
      'Specific word-level analysis with terminology',
      'A summary of the entire text',
      'Your personal opinion without evidence',
    ],
    correctIndex: 1,
    explanation:
      'Language questions require specific word-level analysis: identify techniques, quote precisely, and explain the effect of particular words and phrases.',
  },
  {
    id: 'et6',
    topic: 'exam-technique',
    question: 'What is the command word "evaluate" asking you to do?',
    options: [
      'Summarise the text',
      'Make a judgement about the effectiveness of something',
      'Write a creative response',
      'Identify all literary devices',
    ],
    correctIndex: 1,
    explanation:
      '"Evaluate" asks you to make a judgement, weighing up evidence to assess how effectively the writer achieves their purpose.',
  },
  {
    id: 'et7',
    topic: 'exam-technique',
    question:
      'In AQA English Literature Paper 1, how long should you spend on the Shakespeare question?',
    options: [
      'About 20 minutes',
      'About 35 minutes',
      'About 50-55 minutes',
      'About 1 hour 15 minutes',
    ],
    correctIndex: 2,
    explanation:
      'The Shakespeare question (Section A) is worth approximately a third of the paper, so you should allocate around 50-55 minutes including planning.',
  },
  {
    id: 'et8',
    topic: 'exam-technique',
    question: 'What should you do if you cannot remember an exact quote in a closed-book exam?',
    options: [
      'Make up a quote',
      'Leave the response blank',
      'Paraphrase closely and refer to specific moments',
      'Only write about structure instead',
    ],
    correctIndex: 2,
    explanation:
      'If you cannot remember the exact words, closely paraphrase and refer to specific moments. Markers reward textual knowledge even without exact quotation.',
  },
  {
    id: 'et9',
    topic: 'exam-technique',
    question: 'What does "structure" refer to in English Language analysis?',
    options: [
      'Only sentence length',
      'How the writer organises and sequences the whole text',
      'The grammar and punctuation used',
      'The number of paragraphs',
    ],
    correctIndex: 1,
    explanation:
      'Structure encompasses how the writer organises the entire text: the opening, development, shifts in focus, narrative perspective, chronology, and ending.',
  },
  {
    id: 'et10',
    topic: 'exam-technique',
    question: 'What is the best way to start an analytical paragraph?',
    options: [
      'With a long quote',
      'With a clear topic sentence that addresses the question',
      "By introducing the author's biography",
      'By stating "In this paragraph I will..."',
    ],
    correctIndex: 1,
    explanation:
      'Start with a clear topic sentence that directly addresses the question. This signals to the marker that your paragraph is focused and relevant.',
  },
  {
    id: 'et11',
    topic: 'exam-technique',
    question: 'When the question asks you to "explore", what approach should you take?',
    options: [
      'Provide a single interpretation',
      'Investigate multiple interpretations and ideas',
      'Only focus on one paragraph',
      'Retell the story in order',
    ],
    correctIndex: 1,
    explanation:
      '"Explore" invites you to consider multiple angles, interpretations, and ideas. Show depth of thinking by examining different aspects.',
  },
  {
    id: 'et12',
    topic: 'exam-technique',
    question:
      'In the English Language creative writing task, what is the most common mistake students make?',
    options: [
      'Writing too little',
      'Focusing too much on plot and not enough on descriptive technique',
      'Using too many literary devices',
      'Writing in the wrong tense',
    ],
    correctIndex: 1,
    explanation:
      'Students often prioritise telling a story over crafting descriptive writing. Markers reward sophisticated use of language, structure, and technique over complex plots.',
  },
  {
    id: 'et13',
    topic: 'exam-technique',
    question: 'What does AO1 typically assess in English Literature?',
    options: [
      'Spelling and grammar',
      'Response to the text with relevant references',
      'Understanding of historical context',
      'Comparison between texts',
    ],
    correctIndex: 1,
    explanation:
      'AO1 assesses your ability to read, understand, and respond to texts, using evidence and quotations to support a personal and informed interpretation.',
  },
  {
    id: 'et14',
    topic: 'exam-technique',
    question: 'How should you embed quotations in your essays?',
    options: [
      'Always use a separate line for each quote',
      'Weave short quotes into your own sentences',
      'Only quote at the end of paragraphs',
      'Avoid using quotes entirely',
    ],
    correctIndex: 1,
    explanation:
      'Embedding short, precise quotations within your own sentences creates a fluent, sophisticated response and demonstrates confident textual knowledge.',
  },
  {
    id: 'et15',
    topic: 'exam-technique',
    question: 'What should your conclusion to a literature essay include?',
    options: [
      'New evidence not previously discussed',
      'A summary of your argument with a final personal judgement',
      "The author's biography",
      'A list of all techniques found',
    ],
    correctIndex: 1,
    explanation:
      'A strong conclusion summarises your argument, links back to the question, and offers a final evaluative judgement. Do not introduce new points.',
  },
  {
    id: 'et16',
    topic: 'exam-technique',
    question: 'What is the purpose of connectives and discourse markers in essay writing?',
    options: [
      'To make the essay longer',
      'To link ideas and create a cohesive argument',
      'To replace punctuation',
      'To impress the marker with vocabulary',
    ],
    correctIndex: 1,
    explanation:
      'Connectives and discourse markers (however, furthermore, conversely) link ideas, signal shifts in argument, and create a cohesive, well-structured response.',
  },
  {
    id: 'et17',
    topic: 'exam-technique',
    question: 'In a comparison question, what is the best structural approach?',
    options: [
      'Write about one text completely, then the other',
      'Compare both texts point by point throughout',
      'Only write about the text you know better',
      'Alternate paragraphs between texts randomly',
    ],
    correctIndex: 1,
    explanation:
      'Comparing point by point (integrated comparison) is more effective as it directly highlights similarities and differences, demonstrating analytical skill.',
  },
  {
    id: 'et18',
    topic: 'exam-technique',
    question: 'What does AO2 typically assess in English Literature?',
    options: [
      'SPaG (spelling, punctuation, and grammar)',
      'Analysis of language, form, and structure',
      'Knowledge of context',
      'Personal response to characters',
    ],
    correctIndex: 1,
    explanation:
      'AO2 assesses your ability to analyse the language, form, and structure used by a writer to create meanings and effects, using relevant terminology.',
  },
  {
    id: 'et19',
    topic: 'exam-technique',
    question:
      'If a question is worth 30 marks, approximately how many paragraphs should you write?',
    options: ['2-3 paragraphs', '4-6 paragraphs', '8-10 paragraphs', '12+ paragraphs'],
    correctIndex: 1,
    explanation:
      'For a 30-mark question, 4-6 well-developed paragraphs (plus introduction and conclusion) allows enough depth while managing time effectively.',
  },
  {
    id: 'et20',
    topic: 'exam-technique',
    question: 'What is the best strategy if you run out of time in an exam?',
    options: [
      'Stop writing immediately',
      'Write key points in bullet form to show your knowledge',
      'Start a completely new answer',
      'Cross out your work and start again',
    ],
    correctIndex: 1,
    explanation:
      'If time is short, write remaining points in concise bullet form. Markers can still award marks for relevant ideas even in note form.',
  },

  // ─── Essay structure (PEEL, introductions, conclusions) — et101–et125 ────
  {
    id: 'et101',
    topic: 'exam-technique',
    question: 'What is the primary purpose of the "Link" in a PEEL paragraph?',
    options: [
      'To repeat the point you already made',
      'To connect your analysis back to the question or thesis',
      'To introduce a new quotation',
      'To summarise the whole essay',
    ],
    correctIndex: 1,
    explanation:
      'The Link ties your analysis back to the essay question or overarching argument, showing the marker you are staying focused and building a coherent response.',
  },
  {
    id: 'et102',
    topic: 'exam-technique',
    question: 'Which of these is the strongest opening for an analytical essay?',
    options: [
      'In this essay I will discuss...',
      "Shakespeare uses violent imagery in Act 1 to establish Macbeth's inner conflict.",
      'Macbeth is a play by William Shakespeare.',
      'There are many themes in this text.',
    ],
    correctIndex: 1,
    explanation:
      'A strong opening immediately engages with the question and signals a clear argument rather than vague scene-setting or mechanical signposting.',
  },
  {
    id: 'et103',
    topic: 'exam-technique',
    question: 'What should a good conclusion do?',
    options: [
      'Introduce new evidence not used in the essay',
      'Summarise key arguments and offer a final evaluative judgement',
      'Simply restate the introduction word-for-word',
      'List every technique found in the text',
    ],
    correctIndex: 1,
    explanation:
      'A conclusion should synthesise your argument and offer a final judgement, not introduce new material or merely repeat the introduction.',
  },
  {
    id: 'et104',
    topic: 'exam-technique',
    question: 'In a PEEL paragraph, what counts as effective "Evidence"?',
    options: [
      'A vague reference to something that happens in the text',
      'A short, precisely chosen quotation embedded in your sentence',
      'Copying out an entire stanza',
      'Giving your personal feelings about the text',
    ],
    correctIndex: 1,
    explanation:
      'The best evidence is a short, precisely selected quotation woven into your own sentence, allowing you to analyse specific words.',
  },
  {
    id: 'et105',
    topic: 'exam-technique',
    question: 'Why should you avoid starting an essay with "In this essay I will..."?',
    options: [
      'It is grammatically incorrect',
      'It wastes time and does not demonstrate analytical skill',
      'Markers deduct marks for it',
      'It is too creative for an analytical essay',
    ],
    correctIndex: 1,
    explanation:
      'Mechanical signposting wastes words and does not show analytical ability. Markers prefer you to dive straight into your argument.',
  },
  {
    id: 'et106',
    topic: 'exam-technique',
    question: 'What is a topic sentence?',
    options: [
      'The last sentence of a paragraph',
      'The sentence that states the main idea of a paragraph',
      'A sentence that only contains a quotation',
      'A sentence in the conclusion',
    ],
    correctIndex: 1,
    explanation:
      'A topic sentence opens the paragraph with a clear point that directly addresses the question, guiding the reader through your argument.',
  },
  {
    id: 'et107',
    topic: 'exam-technique',
    question: 'What is the difference between embedding a quotation and dropping in a quotation?',
    options: [
      'There is no difference',
      'Embedding weaves the quote into your sentence; dropping in places it as a standalone block',
      'Embedding means using longer quotes',
      'Dropping in is the preferred method for top bands',
    ],
    correctIndex: 1,
    explanation:
      'Embedding integrates short quotes seamlessly into your sentence structure, which reads more fluently and allows closer word-level analysis.',
  },
  {
    id: 'et108',
    topic: 'exam-technique',
    question: 'How many PEEL paragraphs should a typical 30-mark essay contain?',
    options: ['1–2', '3–5', '8–10', 'As many as possible'],
    correctIndex: 1,
    explanation:
      'Three to five well-developed PEEL paragraphs allow depth of analysis within the time limit, rather than many superficial points.',
  },
  {
    id: 'et109',
    topic: 'exam-technique',
    question: 'What is a "conceptualised response"?',
    options: [
      'An answer that only uses quotations',
      'An answer driven by a big idea or argument rather than feature-spotting',
      'A response written in bullet points',
      'An answer that avoids any terminology',
    ],
    correctIndex: 1,
    explanation:
      'A conceptualised response is organised around a clear overarching argument or concept, which is characteristic of top-band answers.',
  },
  {
    id: 'et110',
    topic: 'exam-technique',
    question: 'What is "feature-spotting" and why should you avoid it?',
    options: [
      'Identifying techniques without explaining their effect — it limits analysis',
      'Using too many quotations in one paragraph',
      'Writing about features of the exam paper',
      'Planning your essay before writing',
    ],
    correctIndex: 0,
    explanation:
      'Feature-spotting means naming a technique (e.g. "this is a metaphor") without explaining its effect on the reader or how it supports meaning. It stays in lower mark bands.',
  },
  {
    id: 'et111',
    topic: 'exam-technique',
    question: 'Which connective phrase best introduces a contrasting point in an essay?',
    options: ['Similarly', 'Furthermore', 'However', 'In addition'],
    correctIndex: 2,
    explanation:
      '"However" signals a contrast or counter-argument, helping to build a balanced, evaluative response that considers multiple interpretations.',
  },
  {
    id: 'et112',
    topic: 'exam-technique',
    question: 'What does "sustaining a critical argument" mean?',
    options: [
      'Writing a very long essay',
      'Maintaining a consistent line of argument throughout the whole response',
      'Being negative about the text',
      'Using as many quotations as possible',
    ],
    correctIndex: 1,
    explanation:
      'Sustaining a critical argument means every paragraph contributes to and develops the same overarching thesis, creating coherence across the essay.',
  },
  {
    id: 'et113',
    topic: 'exam-technique',
    question: 'What is the purpose of a counter-argument in an essay?',
    options: [
      'To confuse the marker',
      'To show you can consider alternative interpretations before reinforcing your own',
      'To contradict everything you have written',
      'To fill space when you run out of ideas',
    ],
    correctIndex: 1,
    explanation:
      'Including a counter-argument demonstrates evaluative skill and shows you can weigh different readings, a hallmark of top-band responses.',
  },
  {
    id: 'et114',
    topic: 'exam-technique',
    question: 'When writing about structure, which of these would be an effective point?',
    options: [
      'The poem has five stanzas',
      "The shift from long to short sentences in the final paragraph mirrors the character's growing panic",
      'The text is written in English',
      'The writer uses full stops',
    ],
    correctIndex: 1,
    explanation:
      'Effective structural analysis links a structural choice to its effect on meaning or the reader, not just describes what is there.',
  },
  {
    id: 'et115',
    topic: 'exam-technique',
    question: 'What is a thesis statement?',
    options: [
      'A summary of the plot',
      'A clear, arguable claim that your essay will defend',
      'A list of techniques you will mention',
      'The title of your essay',
    ],
    correctIndex: 1,
    explanation:
      'A thesis statement presents a clear, debatable argument that every paragraph will support, giving your essay direction and focus.',
  },
  {
    id: 'et116',
    topic: 'exam-technique',
    question: 'How should you begin a paragraph that builds on the previous one?',
    options: [
      'By repeating the same point',
      'By using a discourse marker that shows progression, such as "Moreover" or "Building on this"',
      'By starting with a quotation without context',
      'By writing "My next point is"',
    ],
    correctIndex: 1,
    explanation:
      'Discourse markers like "Moreover" or "Building on this" create cohesion between paragraphs and show your argument is developing logically.',
  },
  {
    id: 'et117',
    topic: 'exam-technique',
    question: 'What is the danger of retelling the story in an analytical essay?',
    options: [
      'It shows good knowledge of the text',
      'It wastes time and does not demonstrate analysis, keeping you in lower bands',
      'Markers enjoy a good summary',
      'It helps you reach the word count',
    ],
    correctIndex: 1,
    explanation:
      'Narrative retelling does not earn analysis marks. Markers want you to explore how and why the writer makes choices, not what happens.',
  },
  {
    id: 'et118',
    topic: 'exam-technique',
    question: 'Which of these is the best way to end an analytical paragraph?',
    options: [
      'With another quotation',
      'With a link back to the question or a comment on wider significance',
      'With "and that is my point"',
      'By starting the next paragraph',
    ],
    correctIndex: 1,
    explanation:
      'Ending with a link to the question or a comment on wider thematic significance rounds off the paragraph and reinforces your argument.',
  },
  {
    id: 'et119',
    topic: 'exam-technique',
    question: 'What does it mean to "zoom in" on language?',
    options: [
      'To write about the whole text at once',
      'To focus closely on individual words or phrases and explore connotations',
      'To use a magnifying glass in the exam',
      'To copy out long quotations',
    ],
    correctIndex: 1,
    explanation:
      'Zooming in means selecting a specific word or short phrase and exploring its connotations, associations, and effects in detail.',
  },
  {
    id: 'et120',
    topic: 'exam-technique',
    question: 'Why is it useful to explore alternative interpretations of a quotation?',
    options: [
      'It wastes valuable time',
      'It demonstrates perceptive, evaluative reading that markers reward in top bands',
      'It shows you are unsure of your argument',
      'It is only useful in creative writing',
    ],
    correctIndex: 1,
    explanation:
      'Exploring alternative meanings shows sophisticated, perceptive reading — a key discriminator for the highest mark bands.',
  },
  {
    id: 'et121',
    topic: 'exam-technique',
    question: 'What is the best way to introduce context in an essay?',
    options: [
      'Write a whole paragraph of historical background before analysing the text',
      'Weave contextual points into your analysis so they support your argument',
      'Ignore context entirely',
      'Put all context in the conclusion',
    ],
    correctIndex: 1,
    explanation:
      "Context should be integrated into analysis, showing how historical or social factors shape the writer's choices, rather than bolted on as a separate block.",
  },
  {
    id: 'et122',
    topic: 'exam-technique',
    question: 'What is "analytical depth"?',
    options: [
      'Writing a very long answer',
      'Exploring multiple layers of meaning from a single piece of evidence',
      'Using lots of different quotations',
      'Describing the plot in detail',
    ],
    correctIndex: 1,
    explanation:
      'Analytical depth means extracting several layers of meaning from one quotation — word choice, connotations, effect, context — rather than skimming many quotes superficially.',
  },
  {
    id: 'et123',
    topic: 'exam-technique',
    question: 'What is the recommended structure for an introduction to a literature essay?',
    options: [
      'Retell the plot of the text',
      'Establish your argument, briefly reference the text and question focus, and hint at your line of reasoning',
      'List every character in the text',
      "Write about the author's biography",
    ],
    correctIndex: 1,
    explanation:
      'A strong introduction states your argument clearly, signals the aspects you will explore, and engages with the question from the first sentence.',
  },
  {
    id: 'et124',
    topic: 'exam-technique',
    question: 'When is it acceptable to use the first person ("I think") in a GCSE English essay?',
    options: [
      'Never — it is always wrong',
      'It is fine in evaluation questions where you give a personal response, but avoid overuse',
      'Only in creative writing',
      'In every sentence to show personal engagement',
    ],
    correctIndex: 1,
    explanation:
      'First person is acceptable when evaluating or giving a personal response, but overuse can weaken academic tone. Use sparingly and with justification.',
  },
  {
    id: 'et125',
    topic: 'exam-technique',
    question:
      'What is the function of discourse markers such as "Furthermore", "Conversely", and "Ultimately"?',
    options: [
      'They are unnecessary filler words',
      'They guide the reader through your argument and signal logical relationships',
      'They replace the need for quotations',
      'They are only used in creative writing',
    ],
    correctIndex: 1,
    explanation:
      'Discourse markers create cohesion, signal how ideas relate to each other, and make your argument easier for the marker to follow.',
  },

  // ─── Time management (marks per minute, paper timings) — et126–et145 ─────
  {
    id: 'et126',
    topic: 'exam-technique',
    question:
      'As a rough guide, how many minutes per mark should you allocate in a GCSE English exam?',
    options: [
      'About 30 seconds per mark',
      'About 1 minute per mark',
      'About 3 minutes per mark',
      'About 5 minutes per mark',
    ],
    correctIndex: 1,
    explanation:
      'A useful rule of thumb is approximately one minute per mark, which helps you divide your time proportionally across the paper.',
  },
  {
    id: 'et127',
    topic: 'exam-technique',
    question:
      'If a question is worth 8 marks on a 1-hour 45-minute paper, roughly how long should you spend on it?',
    options: ['About 4 minutes', 'About 8–10 minutes', 'About 20 minutes', 'About 30 minutes'],
    correctIndex: 1,
    explanation:
      'At roughly one minute per mark, an 8-mark question deserves about 8–10 minutes, leaving adequate time for higher-tariff questions.',
  },
  {
    id: 'et128',
    topic: 'exam-technique',
    question: 'Why should you read the whole exam paper before you start writing?',
    options: [
      'To waste time',
      'To plan your time allocation, identify question demands, and avoid repeating material',
      'Because the marker checks if you read it all',
      'It is not necessary — start immediately',
    ],
    correctIndex: 1,
    explanation:
      'Reading the whole paper first helps you allocate time wisely, understand what each question requires, and avoid using the same evidence twice.',
  },
  {
    id: 'et129',
    topic: 'exam-technique',
    question: 'What is the biggest risk of spending too long on the first question of a paper?',
    options: [
      'You will get extra marks for it',
      'You will run out of time for later, often higher-mark, questions',
      'The marker will be impressed',
      'There is no risk',
    ],
    correctIndex: 1,
    explanation:
      'Over-spending on early questions is one of the most common exam errors — it leaves you rushing or skipping higher-tariff questions where more marks are available.',
  },
  {
    id: 'et130',
    topic: 'exam-technique',
    question: 'How much time should you typically allocate to planning before a 30-mark essay?',
    options: [
      'No planning time is needed',
      'About 5 minutes',
      'About 15 minutes',
      'About 25 minutes',
    ],
    correctIndex: 1,
    explanation:
      'About 5 minutes of planning for a major essay question is optimal — enough to organise ideas and select evidence without eating into writing time.',
  },
  {
    id: 'et131',
    topic: 'exam-technique',
    question:
      'In a two-part English Language paper (reading and writing), if reading is worth 40 marks and writing is worth 40 marks, how should time be split?',
    options: [
      'Spend all time on reading',
      'Roughly half and half',
      'Spend 75% on writing',
      'It does not matter',
    ],
    correctIndex: 1,
    explanation:
      'When both sections carry equal marks, split your time approximately in half to give each section fair attention.',
  },
  {
    id: 'et132',
    topic: 'exam-technique',
    question: 'What should you do in the final 5 minutes of an exam?',
    options: [
      'Start a new essay',
      'Proofread your answers for spelling, punctuation, and sense',
      'Stop writing immediately',
      'Erase your plan',
    ],
    correctIndex: 1,
    explanation:
      'Use the final minutes to proofread — correcting errors in SPaG, checking quotations, and ensuring your answers make sense can pick up easy marks.',
  },
  {
    id: 'et133',
    topic: 'exam-technique',
    question: 'If you finish early, what is the most productive use of remaining time?',
    options: [
      'Sit quietly',
      'Re-read and improve your answers — add missing analysis, fix errors, strengthen conclusions',
      'Start doodling',
      'Hand in your paper immediately',
    ],
    correctIndex: 1,
    explanation:
      'Re-reading allows you to spot gaps in analysis, fix SPaG errors, and add improvements that could push you into a higher mark band.',
  },
  {
    id: 'et134',
    topic: 'exam-technique',
    question:
      'Why is it a bad strategy to write everything you know about a text regardless of the question?',
    options: [
      'Because markers love detailed answers',
      'Because unfocused answers waste time and do not address the specific question, limiting your marks',
      'Because it shows too much knowledge',
      'It is actually a good strategy',
    ],
    correctIndex: 1,
    explanation:
      'Markers reward relevance. Writing everything you know without tailoring it to the question wastes time and suggests you cannot select and deploy knowledge effectively.',
  },
  {
    id: 'et135',
    topic: 'exam-technique',
    question:
      'On a paper with Section A (reading, 40 marks) and Section B (creative writing, 40 marks) in 1 hour 45 minutes, roughly how long should Section A take?',
    options: ['30 minutes', 'About 50–55 minutes', 'About 70 minutes', 'The entire exam time'],
    correctIndex: 1,
    explanation:
      'With equal marks, Section A should take roughly 50–55 minutes (slightly over half), leaving 45–50 minutes for creative writing plus planning.',
  },
  {
    id: 'et136',
    topic: 'exam-technique',
    question: 'What is the recommended approach if you are stuck on a question?',
    options: [
      'Spend the rest of the exam trying to answer it',
      'Move on to the next question and return to it later if time permits',
      'Leave it blank permanently',
      'Ask the invigilator for the answer',
    ],
    correctIndex: 1,
    explanation:
      'Moving on protects your time. You can return later with fresh perspective, and meanwhile you are earning marks on other questions.',
  },
  {
    id: 'et137',
    topic: 'exam-technique',
    question: 'How should you divide your time between two questions of equal marks in a section?',
    options: [
      'Spend all time on whichever you find easier',
      'Divide time equally between them',
      'Spend twice as long on the second one',
      'Guess the first and focus on the second',
    ],
    correctIndex: 1,
    explanation:
      'Equal marks should receive equal time. Favouring one question risks leaving easy marks uncollected on the other.',
  },
  {
    id: 'et138',
    topic: 'exam-technique',
    question: 'Why is it harder to gain the last few marks on a question than the first few?',
    options: [
      'Because pens run out of ink',
      'Because of diminishing returns — the first marks reward basic competence, while top marks require perceptive, sustained analysis',
      'Because markers get tired',
      'It is equally easy throughout',
    ],
    correctIndex: 1,
    explanation:
      'Diminishing returns mean the effort needed for each additional mark increases at the top of the marking guide, making time better spent starting a new question once you have covered the key points.',
  },
  {
    id: 'et139',
    topic: 'exam-technique',
    question: 'What is a useful way to keep track of time during an exam?',
    options: [
      'Bring a phone to check the time',
      'Note the start time and write target finish times for each question on your plan',
      'Ask the invigilator every 5 minutes',
      'Do not worry about time at all',
    ],
    correctIndex: 1,
    explanation:
      'Writing target times on your plan creates a personal schedule you can glance at, helping you pace yourself without relying on external prompts.',
  },
  {
    id: 'et140',
    topic: 'exam-technique',
    question:
      'Approximately how long should a creative writing piece take if it is worth 40 marks on a 1 hour 45 minute paper with 80 total marks?',
    options: [
      'About 20 minutes',
      'About 45–50 minutes including planning',
      'About 70 minutes',
      'About 10 minutes',
    ],
    correctIndex: 1,
    explanation:
      '40 marks out of 80 is half the paper, so roughly 50 minutes (half of 105 minutes) should be allocated, including 5–10 minutes for planning.',
  },
  {
    id: 'et141',
    topic: 'exam-technique',
    question: 'What is the risk of not planning a creative writing response?',
    options: [
      'No risk — spontaneity is rewarded',
      'You may lose control of structure, narrative arc, and pacing, resulting in a weaker piece',
      'Planning is only for essays',
      'You save time by not planning',
    ],
    correctIndex: 1,
    explanation:
      'Without a plan, stories often ramble, lose focus, or end abruptly. A brief plan ensures a clear beginning, middle, and end with deliberate techniques.',
  },
  {
    id: 'et142',
    topic: 'exam-technique',
    question:
      'If a short-answer question is worth 4 marks, roughly how many points should you aim to make?',
    options: ['1', '2', '4', '8'],
    correctIndex: 2,
    explanation:
      'For simple short-answer questions, aim for roughly one point per mark. Four clear, relevant points should secure full marks.',
  },
  {
    id: 'et143',
    topic: 'exam-technique',
    question: 'Why should you avoid writing excessively long answers for low-mark questions?',
    options: [
      'Long answers always get full marks',
      'It takes time from higher-mark questions where more depth is rewarded',
      'Markers prefer long answers',
      'There is no disadvantage',
    ],
    correctIndex: 1,
    explanation:
      'Over-writing on low-mark questions steals time from bigger questions. Match your response length to the mark allocation.',
  },
  {
    id: 'et144',
    topic: 'exam-technique',
    question: 'How can you quickly estimate whether you are on track with time?',
    options: [
      'Count the number of pages you have written',
      'Check what fraction of the marks you have attempted against what fraction of time has passed',
      'Ask another student',
      'It is impossible to estimate',
    ],
    correctIndex: 1,
    explanation:
      'Comparing marks attempted to time elapsed gives a quick sense of pace — if half the time has gone, you should have attempted roughly half the marks.',
  },
  {
    id: 'et145',
    topic: 'exam-technique',
    question: 'What is "front-loading" in the context of exam time management?',
    options: [
      'Writing your name at the front of the paper',
      'Spending too much time on early questions at the expense of later ones',
      'Reading the front page only',
      'Starting with the hardest question',
    ],
    correctIndex: 1,
    explanation:
      'Front-loading means over-investing time in the first questions, which is a common pitfall that leaves insufficient time for later, often higher-value, questions.',
  },

  // ─── Question types (extract, comparison, creative, evaluation) — et146–et170 ─
  {
    id: 'et146',
    topic: 'exam-technique',
    question: 'In an extract-based question, what should you do before writing your answer?',
    options: [
      'Ignore the extract and write from memory',
      'Read the extract carefully, annotating key words and techniques',
      'Copy out the entire extract',
      'Skim it once very quickly',
    ],
    correctIndex: 1,
    explanation:
      'Careful annotation of the extract helps you identify relevant evidence and techniques before you start writing, leading to a more focused response.',
  },
  {
    id: 'et147',
    topic: 'exam-technique',
    question: 'What is the key requirement of a comparison question?',
    options: [
      'Write about each text separately with no connection',
      'Analyse both texts together, drawing explicit comparisons and contrasts',
      'Only write about the text you prefer',
      'Summarise the plots of both texts',
    ],
    correctIndex: 1,
    explanation:
      'Comparison questions require you to discuss both texts in an integrated way, using comparative connectives to highlight similarities and differences.',
  },
  {
    id: 'et148',
    topic: 'exam-technique',
    question: 'Which comparative connective signals a similarity between two texts?',
    options: ['Whereas', 'On the other hand', 'Similarly', 'In contrast'],
    correctIndex: 2,
    explanation:
      '"Similarly" explicitly signals that a point of comparison shows likeness between two texts, which is essential for integrated comparison.',
  },
  {
    id: 'et149',
    topic: 'exam-technique',
    question:
      'In a creative writing question, what does "write a description suggested by this picture" require?',
    options: [
      'A factual report of what is in the picture',
      'An imaginative, sensory piece of descriptive writing inspired by the image',
      'A story with a beginning, middle, and end',
      'An essay about photography',
    ],
    correctIndex: 1,
    explanation:
      'Picture prompts call for descriptive writing rich in sensory language, figurative devices, and atmosphere — not a literal account or a full narrative.',
  },
  {
    id: 'et150',
    topic: 'exam-technique',
    question: 'What does an evaluation question typically ask you to assess?',
    options: [
      'How many techniques the writer uses',
      'How effectively the writer achieves a particular effect or purpose',
      'Whether you enjoyed the text',
      'The biography of the author',
    ],
    correctIndex: 1,
    explanation:
      'Evaluation questions ask you to judge effectiveness — how well does the writer achieve their stated aim? — supporting your judgement with evidence.',
  },
  {
    id: 'et151',
    topic: 'exam-technique',
    question:
      'When answering a "How does the writer present..." question, what should you focus on?',
    options: [
      'Only the plot',
      "The writer's methods — language, structure, and form — and their effects",
      'Your personal life experiences',
      'The historical period only',
    ],
    correctIndex: 1,
    explanation:
      '"How does the writer present" directs you to methods (language, structure, form) and their effects, not what happens but how and why the writer shapes meaning.',
  },
  {
    id: 'et152',
    topic: 'exam-technique',
    question: 'In a comparison essay, what is the best paragraph structure?',
    options: [
      'Write about Text A in full, then Text B in full',
      'Alternate points: make a point about Text A, then compare with Text B within the same paragraph',
      'Only compare the opening lines',
      'Write about themes without referencing either text',
    ],
    correctIndex: 1,
    explanation:
      'An integrated, alternating approach keeps both texts in dialogue and demonstrates sustained comparison, which markers reward over a "block" method.',
  },
  {
    id: 'et153',
    topic: 'exam-technique',
    question:
      'What is the purpose of a "retrieve and interpret" question (e.g. "List four things...")?',
    options: [
      'To test your analytical skills',
      'To test your ability to find specific information quickly from a given extract',
      'To test creative writing',
      'To test your knowledge of the author',
    ],
    correctIndex: 1,
    explanation:
      'Retrieval questions test comprehension — can you locate and select relevant information from the text quickly and accurately?',
  },
  {
    id: 'et154',
    topic: 'exam-technique',
    question:
      'In a narrative writing task, why is it important to limit the time span of your story?',
    options: [
      'Because markers prefer short stories',
      'Because a narrow time frame allows you to develop detail, tension, and atmosphere rather than rushing through events',
      'Because you must write in real time',
      'It is not important',
    ],
    correctIndex: 1,
    explanation:
      'Limiting the time span (e.g. a single scene or moment) lets you develop rich detail and atmosphere, which is more impressive than a sprawling, undeveloped narrative.',
  },
  {
    id: 'et155',
    topic: 'exam-technique',
    question: 'What is the difference between "describe" and "narrate" in creative writing tasks?',
    options: [
      'They are identical',
      '"Describe" focuses on creating a vivid picture with sensory detail; "narrate" tells a story with events and characters',
      '"Describe" requires dialogue; "narrate" does not',
      '"Narrate" must be factual',
    ],
    correctIndex: 1,
    explanation:
      'Description prioritises atmosphere and sensory impressions; narration involves a sequence of events with characters and a storyline.',
  },
  {
    id: 'et156',
    topic: 'exam-technique',
    question: 'When an extract question says "refer to the whole source", what does this mean?',
    options: [
      'Only quote the first line',
      'Use evidence from different parts of the extract, not just one section',
      'Write about a different text entirely',
      'Refer to the exam paper itself',
    ],
    correctIndex: 1,
    explanation:
      '"Refer to the whole source" means select evidence from across the extract — beginning, middle, and end — to show you can analyse the full text.',
  },
  {
    id: 'et157',
    topic: 'exam-technique',
    question: 'What is a "viewpoint and perspective" question asking you to explore?',
    options: [
      'The camera angles used in a film',
      "How the writer presents attitudes, opinions, or biases and how these shape the reader's understanding",
      'Your own political opinions',
      'The physical location of the narrator',
    ],
    correctIndex: 1,
    explanation:
      'These questions ask you to analyse the attitudes and perspectives expressed in the text, how they are conveyed, and what effect they have on the reader.',
  },
  {
    id: 'et158',
    topic: 'exam-technique',
    question: 'In a comparison question, what does "sustained comparison" mean?',
    options: [
      'Writing a very long answer',
      'Maintaining comparative analysis throughout every paragraph, not just at the start or end',
      'Comparing more than two texts',
      'Using the word "compare" in every sentence',
    ],
    correctIndex: 1,
    explanation:
      'Sustained comparison means both texts are discussed in relation to each other throughout the response, not compartmentalised into separate sections.',
  },
  {
    id: 'et159',
    topic: 'exam-technique',
    question: 'For a "how does the writer use language" question, which of these would score well?',
    options: [
      'The writer uses lots of adjectives',
      'The writer employs the harsh plosive sounds in "brutal" and "broken" to convey a sense of violence',
      'The text has interesting language',
      'I liked the way the writer wrote',
    ],
    correctIndex: 1,
    explanation:
      'A high-scoring answer identifies a specific technique, quotes precisely, and explains the effect of particular sounds or word choices on the reader.',
  },
  {
    id: 'et160',
    topic: 'exam-technique',
    question: 'What is the best approach to a "write a speech" question?',
    options: [
      'Write it as an essay with no rhetorical features',
      'Use direct address, rhetorical questions, repetition, and a persuasive tone appropriate for a spoken audience',
      'Write in very informal text-speak',
      'Only use bullet points',
    ],
    correctIndex: 1,
    explanation:
      'Speech writing requires awareness of a spoken audience: direct address ("you"), rhetorical questions, tricolon, and a clear persuasive structure.',
  },
  {
    id: 'et161',
    topic: 'exam-technique',
    question: 'When an evaluation question provides a statement to respond to, what should you do?',
    options: [
      'Simply agree with the statement',
      'Evaluate the statement by arguing for and against it using evidence from the text',
      'Ignore the statement and write freely',
      'Copy the statement into your answer',
    ],
    correctIndex: 1,
    explanation:
      'You should engage critically with the statement — consider how far you agree, support your view with evidence, and acknowledge counter-arguments.',
  },
  {
    id: 'et162',
    topic: 'exam-technique',
    question: 'What does "transactional writing" mean in a GCSE exam context?',
    options: [
      'Writing about transactions and money',
      'Writing for a specific purpose and audience, such as a letter, article, or speech',
      'Creative fiction writing',
      'Writing a summary of a text',
    ],
    correctIndex: 1,
    explanation:
      'Transactional writing is non-fiction writing with a clear purpose (argue, persuade, inform) and audience (editor, headteacher, peers).',
  },
  {
    id: 'et163',
    topic: 'exam-technique',
    question: 'In a "how does the writer use structure" question, what should you analyse?',
    options: [
      'Only sentence structure',
      'The organisation of ideas across the whole text — openings, shifts in focus, narrative perspective, and endings',
      'The physical layout of the page',
      'Only paragraph lengths',
    ],
    correctIndex: 1,
    explanation:
      'Structural analysis covers how the writer organises the text overall: focus shifts, chronological changes, paragraph arrangement, and how the opening and ending relate.',
  },
  {
    id: 'et164',
    topic: 'exam-technique',
    question: 'When writing a letter in an exam, what format elements should you include?',
    options: [
      'No particular format is needed',
      'An appropriate opening (Dear...), paragraphed body, and suitable sign-off (Yours...)',
      'Only a subject line',
      'Only your name at the end',
    ],
    correctIndex: 1,
    explanation:
      'Letters require correct conventions: an appropriate greeting, well-organised paragraphs, and a sign-off that matches the formality (e.g. "Yours sincerely" for named recipients).',
  },
  {
    id: 'et165',
    topic: 'exam-technique',
    question: 'What is the "unseen text" in English Language Paper 1?',
    options: [
      'A text you have studied in class',
      'A previously unseen fiction or literary non-fiction extract you must analyse for the first time',
      'A text the marker has not read',
      'A blank page',
    ],
    correctIndex: 1,
    explanation:
      'The unseen text is a new extract you have not studied, testing your ability to analyse language, structure, and meaning independently.',
  },
  {
    id: 'et166',
    topic: 'exam-technique',
    question:
      'For a comparison of two non-fiction texts, what kinds of similarities and differences should you explore?',
    options: [
      'Only their word counts',
      'Their purpose, audience, language, tone, structure, and viewpoints',
      'Only their publication dates',
      'Only whether they are handwritten or typed',
    ],
    correctIndex: 1,
    explanation:
      'Compare and contrast purpose, audience, language choices, tone, structural approaches, and the viewpoints or perspectives presented in each text.',
  },
  {
    id: 'et167',
    topic: 'exam-technique',
    question:
      'In a creative writing response, why should you avoid cliched openings like "I woke up and..."?',
    options: [
      'Because waking up is not allowed as a topic',
      'Because it is unoriginal and fails to engage the reader immediately',
      'Because markers only accept dialogue openings',
      'It is perfectly fine to start this way',
    ],
    correctIndex: 1,
    explanation:
      'Cliched openings signal a lack of originality. Starting in the middle of action, with a striking image, or atmospheric description is far more engaging.',
  },
  {
    id: 'et168',
    topic: 'exam-technique',
    question: 'What does "comment on the effect on the reader" mean?',
    options: [
      "Describe the reader's physical reaction",
      "Explain what thoughts, feelings, or impressions the writer's choices create in the reader",
      'State whether readers enjoyed the text',
      'Ask the reader for their opinion',
    ],
    correctIndex: 1,
    explanation:
      'Commenting on reader effect means explaining how a technique makes the reader feel, think, or respond — e.g. tension, sympathy, unease, curiosity.',
  },
  {
    id: 'et169',
    topic: 'exam-technique',
    question: 'What is the difference between an article and a report in transactional writing?',
    options: [
      'There is no difference',
      'An article uses a headline and engages readers with opinion; a report is more formal, factual, and uses subheadings',
      'A report must be handwritten',
      'An article must be shorter than a report',
    ],
    correctIndex: 1,
    explanation:
      'Articles are more engaging and opinion-driven with headlines and a journalistic tone. Reports are formal, factual, structured with subheadings, and objective.',
  },
  {
    id: 'et170',
    topic: 'exam-technique',
    question: 'When a question asks you to "explore" a theme, what level of analysis is expected?',
    options: [
      'A brief mention of the theme',
      'A detailed, in-depth investigation of how the theme is presented, developed, and significant',
      'Only a definition of the theme',
      'A list of characters connected to the theme',
    ],
    correctIndex: 1,
    explanation:
      '"Explore" is a high-demand command word that requires you to investigate in depth — how the theme is introduced, developed, and what its significance is.',
  },

  // ─── Marking guide knowledge (AO1–AO4, what each grade looks like) — et171–et190 ─────
  {
    id: 'et171',
    topic: 'exam-technique',
    question: 'What does AO1 typically assess in GCSE English Literature?',
    options: [
      'Creative writing ability',
      'Reading and responding to texts with appropriate textual references',
      'Spelling and grammar only',
      "Knowledge of the author's biography",
    ],
    correctIndex: 1,
    explanation:
      'AO1 assesses your ability to read, understand, and respond to texts, maintaining a critical style and using well-chosen textual references.',
  },
  {
    id: 'et172',
    topic: 'exam-technique',
    question: 'What does AO2 typically assess?',
    options: [
      'Handwriting quality',
      "Analysis of the writer's methods — language, form, and structure — and their effects",
      'Knowledge of exam board regulations',
      'Ability to memorise quotations',
    ],
    correctIndex: 1,
    explanation:
      'AO2 focuses on how writers use language, structure, and form to create meanings and effects, and your ability to use relevant terminology.',
  },
  {
    id: 'et173',
    topic: 'exam-technique',
    question: 'What does AO3 assess in Literature?',
    options: [
      'Spelling accuracy',
      'Understanding of the relationship between texts and their historical, social, and cultural contexts',
      'Word count of the essay',
      'Use of coloured pens',
    ],
    correctIndex: 1,
    explanation:
      'AO3 tests whether you can show understanding of how contextual factors (historical, social, cultural) influence texts and their meanings.',
  },
  {
    id: 'et174',
    topic: 'exam-technique',
    question: 'What does AO4 assess in GCSE English Language?',
    options: [
      'Knowledge of Shakespeare',
      'Technical accuracy — spelling, punctuation, and grammar (SPaG)',
      'Understanding of context',
      'Use of quotations',
    ],
    correctIndex: 1,
    explanation:
      'AO4 in English Language assesses technical accuracy in writing: spelling, punctuation, grammar, and vocabulary. It can be worth up to 16 marks.',
  },
  {
    id: 'et175',
    topic: 'exam-technique',
    question: 'What does "what each grade looks like" mean in a marking guide?',
    options: [
      'A description of a music band',
      'A set of criteria describing the quality expected at each level/band of marks',
      'The name of the marker',
      'A type of exam question',
    ],
    correctIndex: 1,
    explanation:
      'Grade-level descriptions define what characterises work at each mark level (e.g. Band 1 = limited, Band 4 = perceptive), helping markers place your work.',
  },
  {
    id: 'et176',
    topic: 'exam-technique',
    question:
      'In a typical 4-band marking guide, what word often describes a Band 4 (top band) response?',
    options: ['Simple', 'Limited', 'Perceptive and detailed', 'Adequate'],
    correctIndex: 2,
    explanation:
      'Top-band descriptions typically use words like "perceptive", "detailed", "convincing", or "sophisticated" to describe the highest quality responses.',
  },
  {
    id: 'et177',
    topic: 'exam-technique',
    question: 'What word typically describes a Band 1 (lowest band) response?',
    options: ['Perceptive', 'Detailed', 'Simple or limited', 'Convincing'],
    correctIndex: 2,
    explanation:
      'Band 1 descriptors typically use "simple", "limited", or "basic" — indicating the response shows little understanding or analytical skill.',
  },
  {
    id: 'et178',
    topic: 'exam-technique',
    question: 'How many areas do markers look for in GCSE English Literature?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    explanation:
      'GCSE English Literature has four areas markers look for (AO1–AO4), though the weighting varies by question and exam board.',
  },
  {
    id: 'et179',
    topic: 'exam-technique',
    question: 'Why is it useful to know what markers look for before an exam?',
    options: [
      'So you can quote them in your answer',
      'So you know what skills the marker is looking for and can target them deliberately',
      'Because they are printed on every page',
      'They are not useful to know',
    ],
    correctIndex: 1,
    explanation:
      'Knowing the AOs helps you understand what markers reward, so you can deliberately include analysis (AO2), context (AO3), and accurate writing (AO4).',
  },
  {
    id: 'et180',
    topic: 'exam-technique',
    question: 'What does "judicious use of textual references" mean in a marking guide?',
    options: [
      'Using as many quotations as possible',
      'Selecting quotations carefully so each one is relevant, concise, and effectively analysed',
      'Avoiding quotations entirely',
      'Using only long quotations',
    ],
    correctIndex: 1,
    explanation:
      '"Judicious" means carefully chosen — every quotation should earn its place by being relevant, concise, and leading to meaningful analysis.',
  },
  {
    id: 'et181',
    topic: 'exam-technique',
    question: 'What is the difference between "clear" and "perceptive" in marking guide language?',
    options: [
      'They mean the same thing',
      '"Clear" shows understanding; "perceptive" shows original, insightful interpretation that goes beyond the obvious',
      '"Perceptive" is worse than "clear"',
      '"Clear" is only used for handwriting',
    ],
    correctIndex: 1,
    explanation:
      '"Clear" indicates competent understanding (mid-band), while "perceptive" indicates insightful, nuanced interpretation that reveals deeper meaning (top band).',
  },
  {
    id: 'et182',
    topic: 'exam-technique',
    question:
      'In English Language marking guides, what does "a range of vocabulary and sentence structures" indicate?',
    options: [
      'That you should use the same words repeatedly',
      'That top-band writing demonstrates varied and effective vocabulary and sentence construction',
      'That you should use only simple sentences',
      'That you need exactly 50 different words',
    ],
    correctIndex: 1,
    explanation:
      'Marking guides reward writers who vary vocabulary (ambitious word choices) and sentence structures (short, complex, compound) for deliberate effect.',
  },
  {
    id: 'et183',
    topic: 'exam-technique',
    question: 'What does "critical style" mean in AO1?',
    options: [
      'Being negative about the text',
      'Writing in an analytical, academic register that shows critical engagement with the text',
      'Criticising the marker',
      'Writing in a very casual tone',
    ],
    correctIndex: 1,
    explanation:
      '"Critical style" means adopting an analytical tone — discussing techniques and effects rather than retelling the story, and showing evaluative engagement.',
  },
  {
    id: 'et184',
    topic: 'exam-technique',
    question: 'What does "relevant subject terminology" mean in AO2?',
    options: [
      'Using technical words randomly to impress the marker',
      'Using literary or linguistic terms accurately and in a way that supports your analysis',
      'Mentioning the exam board by name',
      'Defining every term you use',
    ],
    correctIndex: 1,
    explanation:
      'Relevant terminology means using terms like "metaphor", "enjambment", or "semantic field" accurately and purposefully to support your analysis, not just name-dropping.',
  },
  {
    id: 'et185',
    topic: 'exam-technique',
    question:
      'If SPaG marks are awarded separately (e.g. 4 marks for AO4 on a literature question), what must you ensure?',
    options: [
      'It does not matter — focus only on content',
      'Your spelling, punctuation, and grammar are accurate and your expression is clear',
      'You write in capital letters throughout',
      'You underline every sentence',
    ],
    correctIndex: 1,
    explanation:
      'When SPaG marks are allocated, careless errors can cost you up to 4 marks. Proofread to ensure accuracy in spelling, punctuation, and grammar.',
  },
  {
    id: 'et186',
    topic: 'exam-technique',
    question: 'What is "best fit" marking?',
    options: [
      'Fitting your essay onto one page',
      'The marker places your response in the band that best describes its overall quality, even if not every criterion is met',
      'Writing only what fits the question',
      'Marking only the best paragraph',
    ],
    correctIndex: 1,
    explanation:
      'Best-fit marking means the marker reads the whole response and places it in the band that most closely matches the overall quality, not requiring every descriptor to be met.',
  },
  {
    id: 'et187',
    topic: 'exam-technique',
    question:
      'What distinguishes a "thoughtful" response from a "perceptive" one in marking guide terms?',
    options: [
      'There is no difference',
      '"Thoughtful" shows careful consideration (Band 3); "perceptive" shows original insight and deeper understanding (Band 4)',
      '"Thoughtful" is higher than "perceptive"',
      'Both are Band 1 descriptors',
    ],
    correctIndex: 1,
    explanation:
      '"Thoughtful" (typically Band 3) shows careful, considered analysis. "Perceptive" (Band 4) goes further with original insights and deeper layers of meaning.',
  },
  {
    id: 'et188',
    topic: 'exam-technique',
    question: 'What does AO4 in English Literature assess?',
    options: [
      'Creative writing',
      'The relationship between texts and contexts',
      'Use of a range of vocabulary and sentence structures for clarity and effect, with accurate SPaG',
      'Analysis of language techniques',
    ],
    correctIndex: 2,
    explanation:
      'AO4 in Literature assesses the quality of your written expression — clarity, coherence, varied vocabulary and sentence structures, and technical accuracy.',
  },
  {
    id: 'et189',
    topic: 'exam-technique',
    question: 'Why do some questions weight AO3 (context) more heavily than others?',
    options: [
      'Because of a printing error',
      'Because certain questions specifically test your ability to connect the text to its social, historical, or cultural background',
      'AO3 is always weighted equally',
      'Context is never tested',
    ],
    correctIndex: 1,
    explanation:
      "Different questions target different skills. Questions that specifically ask about themes, society, or the writer's intentions weight AO3 more heavily.",
  },
  {
    id: 'et190',
    topic: 'exam-technique',
    question: 'What is an "indicative content" section in a marking guide?',
    options: [
      'The required content every student must include',
      'Examples of valid points students might make — it is not a checklist and other valid points are rewarded',
      'A list of incorrect answers',
      'The marking criteria',
    ],
    correctIndex: 1,
    explanation:
      'Indicative content provides examples of possible valid responses but is not exhaustive. Markers reward any relevant, well-supported point.',
  },

  // ─── Common mistakes to avoid — et191–et200 ─────────────────────────────
  {
    id: 'et191',
    topic: 'exam-technique',
    question: 'What is "technique-spotting" and why is it a common mistake?',
    options: [
      'It is a good exam strategy',
      'Naming techniques without analysing their effect — it does not earn analysis marks',
      'It means highlighting techniques in the text',
      'It is another name for close reading',
    ],
    correctIndex: 1,
    explanation:
      'Simply naming a technique ("this is a simile") without explaining its effect is one of the most common mistakes, as it stays in the lower mark bands.',
  },
  {
    id: 'et192',
    topic: 'exam-technique',
    question: 'Why is it a mistake to memorise and reproduce a pre-prepared essay in the exam?',
    options: [
      'It guarantees top marks',
      'It often does not answer the specific question set, and markers can tell it is not a genuine response',
      'It is always rewarded for showing preparation',
      'Pre-prepared essays are encouraged',
    ],
    correctIndex: 1,
    explanation:
      'Pre-prepared essays rarely address the specific wording of the question, leading to irrelevance. Markers are trained to spot generic, rehearsed answers.',
  },
  {
    id: 'et193',
    topic: 'exam-technique',
    question: 'What is a common mistake students make with quotations?',
    options: [
      'Using quotations that are too short',
      'Using excessively long quotations that are not analysed word by word',
      'Embedding quotations into sentences',
      'Selecting relevant quotations',
    ],
    correctIndex: 1,
    explanation:
      'Long, unanalysed quotations waste time and do not demonstrate close reading. Short, targeted quotations that you can analyse in detail are far more effective.',
  },
  {
    id: 'et194',
    topic: 'exam-technique',
    question:
      'Why should you avoid writing "the writer uses [technique] to create tension" without further explanation?',
    options: [
      'Because it is grammatically wrong',
      'Because it is a generic, surface-level comment — you need to explain how and why the technique creates that effect',
      'Because tension is not a real literary effect',
      'It is perfectly fine',
    ],
    correctIndex: 1,
    explanation:
      'Saying a technique "creates tension" without explaining how it does so is vague. Explain the specific mechanism — what about this word/image/sound produces unease?',
  },
  {
    id: 'et195',
    topic: 'exam-technique',
    question: 'What mistake do students often make when writing about context?',
    options: [
      'Integrating it into analysis',
      'Bolting on a paragraph of context that is not connected to the text or question',
      'Ignoring context as instructed',
      'Using context to support their argument',
    ],
    correctIndex: 1,
    explanation:
      'A common error is adding a block of historical facts disconnected from the text. Context should be woven into analysis to explain why the writer made certain choices.',
  },
  {
    id: 'et196',
    topic: 'exam-technique',
    question: 'Why is it a mistake to only analyse the beginning of an extract?',
    options: [
      'The beginning is the most important part',
      'It suggests you did not read or engage with the whole text, and you miss evidence from later in the extract',
      'Markers only read the first paragraph',
      'It is not a mistake',
    ],
    correctIndex: 1,
    explanation:
      'Focusing only on the start suggests superficial engagement. Use evidence from across the text — beginning, middle, and end — to show thorough analysis.',
  },
  {
    id: 'et197',
    topic: 'exam-technique',
    question: 'What is wrong with writing "the reader feels sad" as analysis?',
    options: [
      'Nothing — it is good analysis',
      'It is too vague — you should specify what emotion and explain precisely how the writer creates it',
      '"Sad" is not a real emotion',
      'It is only wrong in poetry essays',
    ],
    correctIndex: 1,
    explanation:
      '"The reader feels sad" is generic. Specify the precise emotional response and explain which words or techniques generate it and why they are effective.',
  },
  {
    id: 'et198',
    topic: 'exam-technique',
    question:
      'Why should you avoid starting every paragraph with "Another technique the writer uses is..."?',
    options: [
      'It is grammatically incorrect',
      'It creates a repetitive, list-like structure that lacks a cohesive argument',
      'It is too informal',
      'Markers specifically look for this phrase',
    ],
    correctIndex: 1,
    explanation:
      'This formulaic opening turns your essay into a list of techniques rather than a developing argument. Vary your paragraph openings to show analytical sophistication.',
  },
  {
    id: 'et199',
    topic: 'exam-technique',
    question: 'What is a common mistake in creative writing exam responses?',
    options: [
      'Using too much descriptive language',
      'Trying to write an overly complex plot that cannot be resolved within the time, leading to a rushed or absent ending',
      'Using varied vocabulary',
      'Planning before writing',
    ],
    correctIndex: 1,
    explanation:
      'Attempting an epic plot is a frequent error. Keep the scope small so you can craft a satisfying ending with deliberate language choices throughout.',
  },
  {
    id: 'et200',
    topic: 'exam-technique',
    question: 'Why is it a mistake to ignore the mark allocation when writing your answer?',
    options: [
      'Mark allocation is never shown on exam papers',
      'Because the marks indicate how much depth and time a question requires — ignoring them leads to poor time management',
      'Because higher-mark questions are easier',
      'Mark allocation is irrelevant to your answer',
    ],
    correctIndex: 1,
    explanation:
      'Mark allocation signals how much depth is expected. A 2-mark question needs a brief answer; a 30-mark question demands a full, developed essay. Ignoring this wastes time.',
  },
]

// ─── Context questions (20) ────────────────────────────────────────────────
const contextQuestions: QuizQuestion[] = [
  {
    id: 'c1',
    topic: 'context',
    question: 'During which historical period was Shakespeare writing?',
    options: ['Medieval period', 'Elizabethan / Jacobean era', 'Victorian era', 'Georgian era'],
    correctIndex: 1,
    explanation:
      'Shakespeare wrote during the late Elizabethan era (under Elizabeth I) and early Jacobean era (under James I), roughly 1590-1613.',
  },
  {
    id: 'c2',
    topic: 'context',
    question: 'What was the Great Chain of Being?',
    options: [
      'A method of punishment',
      'A hierarchical structure placing God at the top and everything else in ranked order',
      'A type of Elizabethan jewellery',
      'A scientific theory',
    ],
    correctIndex: 1,
    explanation:
      'The Great Chain of Being was the Elizabethan belief in a divinely ordained hierarchy: God, angels, king, nobles, commoners, animals, plants.',
  },
  {
    id: 'c3',
    topic: 'context',
    question: 'What was the main social concern Dickens addressed in "A Christmas Carol"?',
    options: [
      'The education system',
      'Poverty and social inequality in Victorian England',
      "Women's suffrage",
      'The abolition of slavery',
    ],
    correctIndex: 1,
    explanation:
      'Dickens wrote "A Christmas Carol" to highlight the plight of the poor in Victorian England and criticise the wealthy who ignored their suffering.',
  },
  {
    id: 'c4',
    topic: 'context',
    question: 'What was the role of the Gunpowder Plot in the context of "Macbeth"?',
    options: [
      'It has no connection',
      'It influenced themes of treason and regicide, as the play was written shortly after the plot',
      'It was the direct inspiration for the plot',
      "It was part of the play's subplot",
    ],
    correctIndex: 1,
    explanation:
      '"Macbeth" was written around 1606, shortly after the Gunpowder Plot of 1605. Themes of treason and regicide resonated with contemporary fears about attempts on King James I.',
  },
  {
    id: 'c5',
    topic: 'context',
    question: 'What social movement does J.B. Priestley promote in "An Inspector Calls"?',
    options: [
      'Capitalism and free enterprise',
      'Socialism and collective responsibility',
      'Anarchism',
      'Monarchy',
    ],
    correctIndex: 1,
    explanation:
      "Priestley was a committed socialist. The play promotes collective responsibility and criticises selfish capitalism through the Birling family's moral failings.",
  },
  {
    id: 'c6',
    topic: 'context',
    question: 'What is the significance of the year 1945 in relation to "An Inspector Calls"?',
    options: [
      'It is when the play is set',
      'It is the year the play was first performed, at the end of World War II',
      'It is when Priestley was born',
      'It has no significance',
    ],
    correctIndex: 1,
    explanation:
      'The play was first performed in 1945, as WWII ended. Priestley wanted audiences to reflect on whether they would build a more equal society or repeat pre-war mistakes.',
  },
  {
    id: 'c7',
    topic: 'context',
    question: 'What was the Victorian attitude towards science and religion?',
    options: [
      'They were always in agreement',
      'There was growing tension as scientific discoveries challenged religious beliefs',
      'Science was banned',
      'Religion had been completely abandoned',
    ],
    correctIndex: 1,
    explanation:
      "The Victorian era saw increasing tension between science and religion, especially after Darwin's theory of evolution challenged traditional biblical creation narratives.",
  },
  {
    id: 'c8',
    topic: 'context',
    question: 'What was the significance of the Poor Laws in Victorian England?',
    options: [
      'They abolished poverty',
      'They provided harsh conditions in workhouses for the destitute',
      'They gave money to all poor families',
      "They were legal protections for workers' rights",
    ],
    correctIndex: 1,
    explanation:
      'The Poor Laws created workhouses where conditions were deliberately harsh to discourage dependency. Dickens criticised this system in many of his works.',
  },
  {
    id: 'c9',
    topic: 'context',
    question: 'In the context of "Romeo and Juliet", what were Italian feuding families called?',
    options: ['Clans', 'Houses', 'Guilds', 'Factions'],
    correctIndex: 1,
    explanation:
      'The Montagues and Capulets are noble "houses" -- powerful Italian families whose blood feud drives the tragedy of the play.',
  },
  {
    id: 'c10',
    topic: 'context',
    question: 'What was the role of women in Elizabethan society?',
    options: [
      'They had equal rights to men',
      'They were expected to be obedient to fathers and husbands',
      'They dominated political life',
      'They were the primary breadwinners',
    ],
    correctIndex: 1,
    explanation:
      'Elizabethan women were expected to be subservient -- obedient to fathers before marriage and husbands after. This context is vital for understanding characters like Lady Macbeth.',
  },
  {
    id: 'c11',
    topic: 'context',
    question: "What was the Industrial Revolution's impact on Victorian literature?",
    options: [
      'It had no impact',
      'It inspired themes of urbanisation, poverty, class division, and mechanisation',
      'It made all literature more optimistic',
      'It only affected scientific writing',
    ],
    correctIndex: 1,
    explanation:
      'The Industrial Revolution transformed society, inspiring writers to address rapid urbanisation, child labour, class inequality, and the dehumanising effects of factory work.',
  },
  {
    id: 'c12',
    topic: 'context',
    question: 'What is the significance of King James I to the study of "Macbeth"?',
    options: [
      'He banned the play',
      'Shakespeare wrote it partly to please James, who was interested in witchcraft and was Scottish',
      'He acted in the play',
      'He wrote the original story',
    ],
    correctIndex: 1,
    explanation:
      'King James I was Scottish, believed in witchcraft (he wrote a book on it), and claimed descent from Banquo. Shakespeare crafted "Macbeth" to appeal to his royal patron.',
  },
  {
    id: 'c13',
    topic: 'context',
    question:
      'What social class system existed in early 20th-century Britain (as shown in "An Inspector Calls")?',
    options: [
      'There were no social classes',
      'A rigid hierarchy with upper, middle, and working classes',
      'Everyone was equal',
      'Only two classes existed',
    ],
    correctIndex: 1,
    explanation:
      'Early 20th-century Britain had rigid class divisions. The upper and middle classes had power and privilege, while the working class had few rights or protections.',
  },
  {
    id: 'c14',
    topic: 'context',
    question: 'What is the Divine Right of Kings?',
    options: [
      'A legal document',
      'The belief that monarchs derive authority directly from God',
      'A type of coronation ceremony',
      'A democratic principle',
    ],
    correctIndex: 1,
    explanation:
      'The Divine Right of Kings held that the monarch was chosen by God and accountable only to God. Killing a king was therefore seen as defying God -- crucial context for "Macbeth".',
  },
  {
    id: 'c15',
    topic: 'context',
    question: 'What was the Welfare State that Priestley advocated for?',
    options: [
      'A state where only the wealthy receive benefits',
      'A system providing healthcare, education, and social security for all citizens',
      'A military state',
      'A monarchy without parliament',
    ],
    correctIndex: 1,
    explanation:
      'Priestley championed the creation of a Welfare State -- a society where government provides essential services (healthcare, education, housing) for all, regardless of wealth.',
  },
  {
    id: 'c16',
    topic: 'context',
    question: 'What was the significance of the Titanic to "An Inspector Calls"?',
    options: [
      'It is the setting of the play',
      'Mr Birling calls it "unsinkable", creating dramatic irony as it sank in 1912',
      'A character survived the Titanic',
      'It has no connection',
    ],
    correctIndex: 1,
    explanation:
      'Mr Birling confidently declares the Titanic "unsinkable" -- since the audience knows it sank, this creates dramatic irony and undermines his authority as a wise businessman.',
  },
  {
    id: 'c17',
    topic: 'context',
    question: 'What was the social impact of World War I on British society?',
    options: [
      'Nothing changed',
      'It challenged class structures and led to greater social change',
      'It reinforced the existing class system',
      'It only affected the military',
    ],
    correctIndex: 1,
    explanation:
      'WWI challenged traditional class structures. Shared suffering in the trenches eroded deference to the upper classes and contributed to demands for greater social equality.',
  },
  {
    id: 'c18',
    topic: 'context',
    question:
      'What literary movement is Robert Louis Stevenson associated with through "Jekyll and Hyde"?',
    options: ['Romanticism', 'Realism', 'Gothic fiction', 'Modernism'],
    correctIndex: 2,
    explanation:
      '"Jekyll and Hyde" belongs to the Gothic tradition with its themes of horror, duality, the supernatural, and the dark side of human nature.',
  },
  {
    id: 'c19',
    topic: 'context',
    question: 'What was the significance of the British Empire to Victorian literature?',
    options: [
      'It had no influence',
      'It influenced themes of power, civilisation, race, and national identity',
      'It only affected travel writing',
      'It led to the decline of literature',
    ],
    correctIndex: 1,
    explanation:
      'The British Empire influenced literature through themes of power, colonialism, racial attitudes, national identity, and encounters with other cultures.',
  },
  {
    id: 'c20',
    topic: 'context',
    question: 'What is patriarchal society, and why is it relevant to GCSE English texts?',
    options: [
      'A society led by the youngest members',
      'A society dominated by men, affecting how female characters are portrayed and constrained',
      'A society with no leaders',
      'A society led by religious figures only',
    ],
    correctIndex: 1,
    explanation:
      'A patriarchal society is male-dominated. Understanding this context explains the constraints on female characters like Lady Macbeth, Juliet, and Sheila Birling.',
  },
]

// ─── Combined bank ─────────────────────────────────────────────────────────
export const ALL_QUESTIONS: QuizQuestion[] = [
  ...poetryQuestions,
  ...setTextQuestions,
  ...languageTechniqueQuestions,
  ...examTechniqueQuestions,
  ...contextQuestions,
]

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Fisher-Yates shuffle (returns new array) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Deterministic option shuffling ────────────────────────────────────────
// Multiple-choice authors unconsciously bias the correct answer toward the
// middle (most often option B). To balance the answer position across A/B/C/D
// without rewriting the question bank, we shuffle the options at presentation
// time using a deterministic seed derived from the question id and the
// session salt. The same student in the same session sees the same option
// order (so navigating back and forth is stable), but a fresh session
// re-randomises.

/** Cheap, stable string hash → 32-bit unsigned integer. */
function hashString(input: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h >>> 0
}

/** Mulberry32 PRNG — small, fast, deterministic from a 32-bit seed. */
function mulberry32(seed: number): () => number {
  let t = seed >>> 0
  return () => {
    t = (t + 0x6d2b79f5) >>> 0
    let r = t
    r = Math.imul(r ^ (r >>> 15), r | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Shuffle an option list deterministically, using a seed derived from the
 * question id and an opaque session salt. Pure — does not mutate input.
 */
export function shuffleOptionsDeterministic<T>(options: readonly T[], seed: string): T[] {
  const rng = mulberry32(hashString(seed))
  const a = [...options]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Build a shuffled view of a quiz question. Returns the new option order
 * alongside the correct option's VALUE so callers can score answers without
 * relying on indices (which become meaningless after shuffling).
 */
export function getShuffledQuestion(
  question: QuizQuestion,
  sessionSalt: string,
): { options: string[]; correctValue: string } {
  const correctValue = question.options[question.correctIndex]
  const options = shuffleOptionsDeterministic(question.options, `${question.id}|${sessionSalt}`)
  return { options, correctValue }
}

/** True if a question applies to the given board (untagged = all boards). */
export function questionMatchesBoard(q: QuizQuestion, board: ExamBoard | null): boolean {
  if (!board) return true
  if (!q.boards || q.boards.length === 0) return true
  return q.boards.includes(board)
}

/**
 * Filter questions by topic + board. Pass `null` board to skip filtering by
 * board, and `undefined`/empty topics to skip filtering by topic.
 */
export function getQuestionsForBoard(
  topics: Topic[] | undefined,
  board: ExamBoard | null,
): QuizQuestion[] {
  return ALL_QUESTIONS.filter((q) => {
    if (topics && topics.length > 0 && !topics.includes(q.topic)) return false
    if (!questionMatchesBoard(q, board)) return false
    return true
  })
}

/** Pick `count` random questions, optionally filtered by topics and board */
export function pickQuestions(
  count: number,
  topics?: Topic[],
  board?: ExamBoard | null,
): QuizQuestion[] {
  const pool = getQuestionsForBoard(topics, board ?? null)
  return shuffle(pool).slice(0, count)
}
