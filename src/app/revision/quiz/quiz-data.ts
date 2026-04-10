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
  aqa:             ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  edexcel:         ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  ocr:             ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  eduqas:          ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'edexcel-igcse': ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context'],
  'cambridge-0500':['language-techniques', 'exam-technique'],
  'cambridge-0990':['language-techniques', 'exam-technique'],
}

export function getTopicsForBoard(board: ExamBoard | null): Topic[] {
  if (!board) return TOPICS
  return TOPICS_FOR_BOARD[board] ?? TOPICS
}

export const TOPIC_META: Record<Topic, { label: string; colour: string; bgColour: string }> = {
  poetry: { label: 'Poetry', colour: 'text-rose-400', bgColour: 'bg-rose-500/10' },
  'set-texts': { label: 'Set Texts', colour: 'text-blue-400', bgColour: 'bg-blue-500/10' },
  'language-techniques': { label: 'Language Techniques', colour: 'text-violet-400', bgColour: 'bg-violet-500/10' },
  'exam-technique': { label: 'Exam Technique', colour: 'text-emerald-400', bgColour: 'bg-emerald-500/10' },
  context: { label: 'Context', colour: 'text-amber-400', bgColour: 'bg-amber-500/10' },
}

export const TOPICS: Topic[] = ['poetry', 'set-texts', 'language-techniques', 'exam-technique', 'context']

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

// ─── Poetry questions (20) ─────────────────────────────────────────────────
const poetryQuestions: QuizQuestion[] = [
  {
    id: 'p1',
    topic: 'poetry',
    question: 'What poetic device involves giving human qualities to non-human things?',
    options: ['Simile', 'Personification', 'Alliteration', 'Onomatopoeia'],
    correctIndex: 1,
    explanation: 'Personification gives human qualities, emotions, or actions to non-human objects, animals, or abstract ideas.',
  },
  {
    id: 'p2',
    topic: 'poetry',
    question: 'In poetry, what is enjambment?',
    options: ['Repeating the first word of each line', 'A line that continues without punctuation into the next', 'Using two contradictory words together', 'The rhyme scheme of a sonnet'],
    correctIndex: 1,
    explanation: 'Enjambment is when a sentence or phrase runs over from one line to the next without a pause or punctuation at the end of the line.',
  },
  {
    id: 'p3',
    topic: 'poetry',
    question: 'How many lines does a traditional sonnet contain?',
    options: ['10', '12', '14', '16'],
    correctIndex: 2,
    explanation: 'A traditional sonnet has 14 lines, typically in iambic pentameter, with a specific rhyme scheme.',
  },
  {
    id: 'p4',
    topic: 'poetry',
    question: 'What is a volta in a sonnet?',
    options: ['The final couplet', 'The turn or shift in argument or tone', 'The rhyme scheme pattern', 'The opening quatrain'],
    correctIndex: 1,
    explanation: 'The volta is the turn or shift in thought, argument, or emotion that typically occurs between the octave and sestet (or before the final couplet).',
  },
  {
    id: 'p5',
    topic: 'poetry',
    question: 'What is iambic pentameter?',
    options: ['Five stressed syllables per line', 'Ten syllables per line with alternating unstressed/stressed pattern', 'Five lines per stanza', 'A line ending in a stressed syllable'],
    correctIndex: 1,
    explanation: 'Iambic pentameter consists of five iambic feet per line -- ten syllables alternating between unstressed and stressed (da-DUM da-DUM da-DUM da-DUM da-DUM).',
  },
  {
    id: 'p6',
    topic: 'poetry',
    question: 'Which poet wrote "Ozymandias"?',
    options: ['William Blake', 'Percy Bysshe Shelley', 'John Keats', 'Lord Byron'],
    correctIndex: 1,
    explanation: 'Percy Bysshe Shelley wrote "Ozymandias" in 1818, exploring themes of power, hubris, and the impermanence of human achievements.',
    boards: ['aqa'], // Power & Conflict cluster (AQA anthology)
  },
  {
    id: 'p7',
    topic: 'poetry',
    question: 'What is a caesura?',
    options: ['A break or pause in the middle of a line', 'The last word of a line', 'A type of rhyme scheme', 'Repetition of vowel sounds'],
    correctIndex: 0,
    explanation: 'A caesura is a pause or break within a line of poetry, often marked by punctuation such as a comma, full stop, or dash.',
  },
  {
    id: 'p8',
    topic: 'poetry',
    question: 'What is the rhyme scheme of a Shakespearean sonnet?',
    options: ['ABBA ABBA CDE CDE', 'ABAB CDCD EFEF GG', 'AABB CCDD EEFF GG', 'ABCB DEFE GHIH JJ'],
    correctIndex: 1,
    explanation: 'A Shakespearean (English) sonnet follows the ABAB CDCD EFEF GG rhyme scheme, with three quatrains and a closing couplet.',
  },
  {
    id: 'p9',
    topic: 'poetry',
    question: 'What theme is central to Wilfred Owen\'s war poetry?',
    options: ['The glory of battle', 'The futility and horror of war', 'Patriotic pride', 'The beauty of nature'],
    correctIndex: 1,
    explanation: 'Owen\'s poetry is renowned for its unflinching depiction of the horrors of trench warfare, challenging romanticised views of conflict.',
  },
  {
    id: 'p10',
    topic: 'poetry',
    question: 'What is assonance?',
    options: ['Repetition of consonant sounds', 'Repetition of vowel sounds within words', 'Words that sound like their meaning', 'Comparing two things using "like" or "as"'],
    correctIndex: 1,
    explanation: 'Assonance is the repetition of vowel sounds in nearby words, creating internal rhyming and a musical quality.',
  },
  {
    id: 'p11',
    topic: 'poetry',
    question: 'In "London" by William Blake, what does the phrase "mind-forg\'d manacles" suggest?',
    options: ['Physical chains on prisoners', 'Mental restrictions imposed by society', 'Decorative jewellery', 'Industrial machinery'],
    correctIndex: 1,
    explanation: 'The metaphor "mind-forg\'d manacles" suggests that people are mentally imprisoned by societal institutions and their own acceptance of oppression.',
    boards: ['aqa'], // Blake's "London" appears in AQA Power & Conflict cluster
  },
  {
    id: 'p12',
    topic: 'poetry',
    question: 'What is a dramatic monologue?',
    options: ['A poem with two speakers', 'A poem where a single character speaks to a silent listener', 'A poem written as a letter', 'A poem that tells a story chronologically'],
    correctIndex: 1,
    explanation: 'A dramatic monologue is a poem where a single speaker addresses a silent listener, revealing their character and situation through their words.',
  },
  {
    id: 'p13',
    topic: 'poetry',
    question: 'What is the effect of using a first-person narrative voice in poetry?',
    options: ['It creates distance from the reader', 'It creates intimacy and personal connection', 'It makes the poem more formal', 'It removes emotion from the poem'],
    correctIndex: 1,
    explanation: 'First-person narration creates an intimate, personal connection between the speaker and reader, making emotions feel more immediate and authentic.',
  },
  {
    id: 'p14',
    topic: 'poetry',
    question: 'What type of poem is "The Charge of the Light Brigade" by Tennyson?',
    options: ['Sonnet', 'Ballad', 'Narrative poem', 'Haiku'],
    correctIndex: 2,
    explanation: 'It is a narrative poem that tells the story of the disastrous British cavalry charge during the Battle of Balaclava in the Crimean War.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p15',
    topic: 'poetry',
    question: 'What is sibilance?',
    options: ['Repetition of "s" and "sh" sounds', 'Repetition of hard consonant sounds', 'Using words that sound like what they describe', 'A long pause in a line'],
    correctIndex: 0,
    explanation: 'Sibilance is the repetition of "s", "sh", "z", and similar sounds, often creating a hissing or whispering effect.',
  },
  {
    id: 'p16',
    topic: 'poetry',
    question: 'What form does "My Last Duchess" by Robert Browning take?',
    options: ['Free verse', 'Dramatic monologue in rhyming couplets', 'Petrarchan sonnet', 'Villanelle'],
    correctIndex: 1,
    explanation: '"My Last Duchess" is a dramatic monologue written in rhyming couplets (heroic couplets), with the Duke speaking to an envoy.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p17',
    topic: 'poetry',
    question: 'What is the purpose of a refrain in poetry?',
    options: ['To introduce a new idea', 'To create emphasis through repetition', 'To change the tone of the poem', 'To end the poem abruptly'],
    correctIndex: 1,
    explanation: 'A refrain is a repeated line or phrase that creates emphasis, reinforces key themes, and provides rhythmic structure to a poem.',
  },
  {
    id: 'p18',
    topic: 'poetry',
    question: 'What is free verse?',
    options: ['Poetry with no consistent metre, rhyme, or structure', 'Poetry that must be read aloud', 'Poetry written without punctuation', 'Poetry about freedom and liberty'],
    correctIndex: 0,
    explanation: 'Free verse is poetry that does not follow regular metre, rhyme scheme, or line length, giving the poet more freedom of expression.',
  },
  {
    id: 'p19',
    topic: 'poetry',
    question: 'In "Exposure" by Wilfred Owen, what is the main enemy the soldiers face?',
    options: ['The opposing army', 'The weather and elements', 'Their own officers', 'Disease'],
    correctIndex: 1,
    explanation: 'In "Exposure", the main enemy is the bitter cold and harsh weather conditions, which Owen presents as more deadly than the enemy soldiers.',
    boards: ['aqa'], // Power & Conflict cluster
  },
  {
    id: 'p20',
    topic: 'poetry',
    question: 'What is an extended metaphor?',
    options: ['A very long poem', 'A metaphor that continues throughout multiple lines or an entire poem', 'A comparison using "like" or "as"', 'A metaphor at the end of a poem'],
    correctIndex: 1,
    explanation: 'An extended metaphor is a metaphor that is developed and sustained over several lines, a stanza, or even an entire poem.',
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
    explanation: 'The Three Witches (or Weird Sisters) prophesy that Macbeth will become Thane of Cawdor and then King of Scotland.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st2',
    topic: 'set-texts',
    question: 'What is the main theme explored through the character of Scrooge in "A Christmas Carol"?',
    options: ['Revenge', 'Redemption and transformation', 'Romantic love', 'Political ambition'],
    correctIndex: 1,
    explanation: 'Scrooge\'s journey from miserly isolation to generous compassion is the central redemption arc of the novella.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st3',
    topic: 'set-texts',
    question: 'In "An Inspector Calls", what is the Inspector\'s surname?',
    options: ['Birling', 'Goole', 'Croft', 'Smith'],
    correctIndex: 1,
    explanation: 'Inspector Goole -- his name is a homophone of "ghoul", hinting at his supernatural or otherworldly nature.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st4',
    topic: 'set-texts',
    question: 'Which Shakespearean play features the character of Tybalt?',
    options: ['Hamlet', 'The Tempest', 'Romeo and Juliet', 'Much Ado About Nothing'],
    correctIndex: 2,
    explanation: 'Tybalt is Juliet\'s cousin in "Romeo and Juliet", known as the "Prince of Cats" for his fiery temper and sword skills.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st5',
    topic: 'set-texts',
    question: 'In "Lord of the Flies", what does the conch shell symbolise?',
    options: ['Power and corruption', 'Democracy and civilised order', 'Nature and beauty', 'Fear and danger'],
    correctIndex: 1,
    explanation: 'The conch shell represents democratic power, order, and civilisation. Its destruction symbolises the complete collapse of civilised behaviour.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st6',
    topic: 'set-texts',
    question: 'What social class do the Birling family belong to in "An Inspector Calls"?',
    options: ['Working class', 'Lower middle class', 'Upper middle class / industrialist class', 'Aristocracy'],
    correctIndex: 2,
    explanation: 'The Birlings are wealthy industrialists -- upper middle class. Arthur Birling is a prosperous factory owner seeking a knighthood.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st7',
    topic: 'set-texts',
    question: 'In "Jekyll and Hyde", what does the door in the street represent?',
    options: ['Wealth and luxury', 'Duality and the hidden side of respectability', 'Religious faith', 'Scientific progress'],
    correctIndex: 1,
    explanation: 'The contrasting door -- neglected yet attached to a respectable building -- symbolises the duality of human nature and hidden vice behind Victorian respectability.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st8',
    topic: 'set-texts',
    question: 'Who is the narrator of "The Sign of the Four" and the Sherlock Holmes stories?',
    options: ['Sherlock Holmes', 'Inspector Lestrade', 'Dr John Watson', 'Mycroft Holmes'],
    correctIndex: 2,
    explanation: 'Dr John Watson narrates the stories, providing a more relatable perspective on Holmes\'s extraordinary deductive abilities.',
    boards: ['aqa'],
  },
  {
    id: 'st9',
    topic: 'set-texts',
    question: 'In "Macbeth", what does Lady Macbeth mean when she says "unsex me here"?',
    options: ['She wants a divorce', 'She wants to be stripped of feminine weakness to carry out violence', 'She wants to disguise herself as a man', 'She wants to become invisible'],
    correctIndex: 1,
    explanation: 'Lady Macbeth calls on dark spirits to remove her feminine qualities (compassion, gentleness) so she can be ruthless enough to help murder King Duncan.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st10',
    topic: 'set-texts',
    question: 'What is the significance of the Ghost of Christmas Past in "A Christmas Carol"?',
    options: ['It shows Scrooge his future', 'It shows Scrooge how his past shaped his present character', 'It punishes Scrooge for his sins', 'It introduces Scrooge to Tiny Tim'],
    correctIndex: 1,
    explanation: 'The Ghost of Christmas Past reveals formative moments from Scrooge\'s past, showing how experiences like loss and isolation led to his miserly nature.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st11',
    topic: 'set-texts',
    question: 'In "Romeo and Juliet", what literary device is the phrase "O brawling love, O loving hate"?',
    options: ['Simile', 'Oxymoron', 'Hyperbole', 'Allusion'],
    correctIndex: 1,
    explanation: 'This is an oxymoron -- combining contradictory terms to express Romeo\'s confused feelings about love and the family feud.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st12',
    topic: 'set-texts',
    question: 'In "An Inspector Calls", what year is the play set in?',
    options: ['1912', '1945', '1918', '1939'],
    correctIndex: 0,
    explanation: 'The play is set in 1912, before both World Wars, though it was written and first performed in 1945. This allows Priestley to use dramatic irony.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st13',
    topic: 'set-texts',
    question: 'What does the character of Piggy represent in "Lord of the Flies"?',
    options: ['Savagery and violence', 'Intellect and rationality', 'Religious faith', 'Physical strength'],
    correctIndex: 1,
    explanation: 'Piggy represents intellect, scientific rationality, and civilised thinking. His glasses (used to make fire) symbolise the power of reason.',
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    id: 'st14',
    topic: 'set-texts',
    question: 'In "Macbeth", what does the motif of blood symbolise?',
    options: ['Life and vitality', 'Guilt and the consequences of violence', 'Love and passion', 'Loyalty to the king'],
    correctIndex: 1,
    explanation: 'Blood is a recurring motif representing guilt, murder, and moral corruption. Lady Macbeth\'s obsessive hand-washing reveals her guilt.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st15',
    topic: 'set-texts',
    question: 'Who is Eva Smith / Daisy Renton in "An Inspector Calls"?',
    options: ['A wealthy socialite', 'A working-class woman exploited by the Birling family', 'The Inspector\'s wife', 'Sheila\'s school friend'],
    correctIndex: 1,
    explanation: 'Eva Smith is a working-class woman who each member of the Birling family has wronged, ultimately leading to her death.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st16',
    topic: 'set-texts',
    question: 'In "A Christmas Carol", what is the significance of Tiny Tim?',
    options: ['He represents the greed of the upper classes', 'He symbolises the innocent poor who suffer from society\'s neglect', 'He is the story\'s antagonist', 'He represents Scrooge\'s childhood'],
    correctIndex: 1,
    explanation: 'Tiny Tim represents the vulnerable poor -- especially children -- who suffer due to the indifference of the wealthy. His potential death motivates Scrooge\'s transformation.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'st17',
    topic: 'set-texts',
    question: 'What is the significance of the weather in "Macbeth"?',
    options: ['It has no particular significance', 'It reflects the moral and political disorder in Scotland', 'It always represents hope', 'It only appears in stage directions'],
    correctIndex: 1,
    explanation: 'Pathetic fallacy is used throughout -- storms, darkness, and unnatural weather mirror the political turmoil and moral corruption caused by Macbeth\'s actions.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st18',
    topic: 'set-texts',
    question: 'In "Jekyll and Hyde", which character is described as "troglodytic"?',
    options: ['Dr Jekyll', 'Mr Utterson', 'Mr Hyde', 'Dr Lanyon'],
    correctIndex: 2,
    explanation: 'Mr Hyde is described as looking "troglodytic" (cave-dweller-like), suggesting he is primitive, barely human, and connects to fears about evolutionary regression.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    id: 'st19',
    topic: 'set-texts',
    question: 'What is Sheila Birling\'s role in the message of "An Inspector Calls"?',
    options: ['She represents the unchangeable older generation', 'She represents hope for social change in the younger generation', 'She is indifferent to Eva\'s fate', 'She supports her father\'s capitalist views'],
    correctIndex: 1,
    explanation: 'Sheila accepts responsibility and changes her views, representing Priestley\'s hope that the younger generation can build a more just society.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'st20',
    topic: 'set-texts',
    question: 'In "Romeo and Juliet", what is the function of the Prologue?',
    options: ['To introduce a subplot', 'To reveal the ending and create dramatic irony', 'To describe the setting in detail', 'To introduce the comic characters'],
    correctIndex: 1,
    explanation: 'The Prologue reveals that the "star-cross\'d lovers" will die, creating dramatic irony as the audience knows the tragic outcome throughout.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
]

// ─── Language Technique questions (20) ─────────────────────────────────────
const languageTechniqueQuestions: QuizQuestion[] = [
  {
    id: 'lt1',
    topic: 'language-techniques',
    question: 'What is a simile?',
    options: ['A direct comparison stating one thing IS another', 'A comparison using "like" or "as"', 'Giving human qualities to objects', 'An exaggeration for effect'],
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
    options: ['To create a flowing, relaxed tone', 'To create tension, impact, or emphasise a point', 'To confuse the reader', 'To make the text seem academic'],
    correctIndex: 1,
    explanation: 'Short sentences create impact, build tension, and draw attention to key ideas. They can also increase pace and urgency.',
  },
  {
    id: 'lt4',
    topic: 'language-techniques',
    question: 'What is hyperbole?',
    options: ['Deliberate understatement', 'Deliberate exaggeration for emphasis', 'A type of rhyme', 'Repeating a word at the start of sentences'],
    correctIndex: 1,
    explanation: 'Hyperbole is deliberate exaggeration not meant to be taken literally, used for emphasis or dramatic effect (e.g., "I\'ve told you a million times").',
  },
  {
    id: 'lt5',
    topic: 'language-techniques',
    question: 'What is pathetic fallacy?',
    options: ['A logical error in an argument', 'Using weather or nature to reflect mood or emotion', 'A character who is overly emotional', 'An unreliable narrator'],
    correctIndex: 1,
    explanation: 'Pathetic fallacy is when the environment (especially weather) is used to mirror or reflect the emotions of characters or the mood of a scene.',
  },
  {
    id: 'lt6',
    topic: 'language-techniques',
    question: 'Identify the technique: "Peter Piper picked a peck of pickled peppers."',
    options: ['Assonance', 'Sibilance', 'Alliteration', 'Onomatopoeia'],
    correctIndex: 2,
    explanation: 'This is alliteration -- the repetition of the same consonant sound ("p") at the beginning of closely connected words.',
  },
  {
    id: 'lt7',
    topic: 'language-techniques',
    question: 'What is the difference between a metaphor and a simile?',
    options: ['There is no difference', 'A metaphor uses "like" or "as"; a simile does not', 'A simile uses "like" or "as"; a metaphor states something IS something else', 'Similes are only used in poetry'],
    correctIndex: 2,
    explanation: 'A simile uses "like" or "as" to compare (e.g., "like a rose"), while a metaphor states one thing IS another (e.g., "she is a rose").',
  },
  {
    id: 'lt8',
    topic: 'language-techniques',
    question: 'What is juxtaposition?',
    options: ['Repeating a phrase for emphasis', 'Placing two contrasting ideas or images side by side', 'A type of narrative perspective', 'Using formal language in an informal context'],
    correctIndex: 1,
    explanation: 'Juxtaposition places two contrasting ideas, images, or concepts close together to highlight their differences and create meaning.',
  },
  {
    id: 'lt9',
    topic: 'language-techniques',
    question: 'What technique is used when a writer asks a question they do not expect an answer to?',
    options: ['Anaphora', 'Rhetorical question', 'Imperative', 'Euphemism'],
    correctIndex: 1,
    explanation: 'A rhetorical question is asked for effect rather than to get an answer. It engages the reader and makes them think about the point being made.',
  },
  {
    id: 'lt10',
    topic: 'language-techniques',
    question: 'What is an oxymoron?',
    options: ['A long, complex sentence', 'Two contradictory words placed together', 'An indirect reference to another text', 'A question that does not need an answer'],
    correctIndex: 1,
    explanation: 'An oxymoron combines two contradictory words (e.g., "deafening silence", "bittersweet") to create a paradoxical effect.',
  },
  {
    id: 'lt11',
    topic: 'language-techniques',
    question: 'What is the rule of three?',
    options: ['Every paragraph must have three sentences', 'Using three related words or phrases for emphasis', 'A story must have three characters', 'Rhyming three lines together'],
    correctIndex: 1,
    explanation: 'The rule of three is a writing principle that groups ideas in threes for emphasis and memorability (e.g., "blood, sweat, and tears").',
  },
  {
    id: 'lt12',
    topic: 'language-techniques',
    question: 'What is anaphora?',
    options: ['A word that sounds like its meaning', 'Deliberate repetition of a word or phrase at the start of successive clauses', 'A reference to a well-known text', 'Using a part to represent the whole'],
    correctIndex: 1,
    explanation: 'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses or sentences for emphasis and rhythm.',
  },
  {
    id: 'lt13',
    topic: 'language-techniques',
    question: 'What is the effect of using emotive language?',
    options: ['To present facts objectively', 'To evoke strong feelings in the reader', 'To make writing more academic', 'To shorten sentences'],
    correctIndex: 1,
    explanation: 'Emotive language is chosen specifically to trigger an emotional response in the reader, often used in persuasive and descriptive writing.',
  },
  {
    id: 'lt14',
    topic: 'language-techniques',
    question: 'What does the term "semantic field" mean?',
    options: ['A field of study about meaning', 'A group of words related to the same theme or subject', 'The dictionary definition of a word', 'A type of paragraph structure'],
    correctIndex: 1,
    explanation: 'A semantic field is a group of words that are all related to the same topic or theme (e.g., a semantic field of war: battle, conflict, fight, weapon).',
  },
  {
    id: 'lt15',
    topic: 'language-techniques',
    question: 'What is a euphemism?',
    options: ['An extreme exaggeration', 'A mild or indirect expression used instead of one considered harsh', 'A sound effect word', 'A type of irony'],
    correctIndex: 1,
    explanation: 'A euphemism substitutes a mild, indirect, or vague expression for one thought to be too harsh (e.g., "passed away" instead of "died").',
  },
  {
    id: 'lt16',
    topic: 'language-techniques',
    question: 'What is the effect of using the imperative mood?',
    options: ['It asks questions', 'It gives commands and creates a direct, authoritative tone', 'It describes a hypothetical situation', 'It always creates a gentle tone'],
    correctIndex: 1,
    explanation: 'The imperative mood gives commands or instructions (e.g., "Stop!", "Consider this"), creating a direct and authoritative tone.',
  },
  {
    id: 'lt17',
    topic: 'language-techniques',
    question: 'What is foreshadowing?',
    options: ['A summary at the end of a story', 'Hints or clues about what will happen later', 'A flashback to an earlier event', 'The climax of a story'],
    correctIndex: 1,
    explanation: 'Foreshadowing is when the writer gives hints or clues about events that will occur later in the narrative, building suspense.',
  },
  {
    id: 'lt18',
    topic: 'language-techniques',
    question: 'What is irony?',
    options: ['Saying exactly what you mean', 'When the opposite of what is expected happens or is said', 'A type of metaphor', 'A sad ending to a story'],
    correctIndex: 1,
    explanation: 'Irony is when there is a contrast between what is said and what is meant, or between what is expected and what actually happens.',
  },
  {
    id: 'lt19',
    topic: 'language-techniques',
    question: 'What technique involves the repetition of consonant sounds within or at the end of words?',
    options: ['Alliteration', 'Assonance', 'Consonance', 'Rhyme'],
    correctIndex: 2,
    explanation: 'Consonance is the repetition of consonant sounds within or at the end of words in close succession (e.g., "pitter patter", "odds and ends").',
  },
  {
    id: 'lt20',
    topic: 'language-techniques',
    question: 'What is a motif?',
    options: ['The main character\'s motivation', 'A recurring element that carries symbolic significance', 'The moral of a story', 'A type of narrative structure'],
    correctIndex: 1,
    explanation: 'A motif is a recurring image, idea, or symbol throughout a text that develops or reinforces the themes.',
  },
]

// ─── Exam Technique questions (20) ─────────────────────────────────────────
const examTechniqueQuestions: QuizQuestion[] = [
  {
    id: 'et1',
    topic: 'exam-technique',
    question: 'In a GCSE English exam, what does the command word "analyse" require you to do?',
    options: ['Simply describe what happens', 'Examine something in detail, exploring how and why', 'Write a creative response', 'List all the techniques used'],
    correctIndex: 1,
    explanation: '"Analyse" requires you to examine language, structure, or form in detail, exploring HOW the writer creates meaning and WHY they make particular choices.',
  },
  {
    id: 'et2',
    topic: 'exam-technique',
    question: 'What does PEE (or PEEL) stand for in essay writing?',
    options: ['Plan, Execute, Evaluate, Learn', 'Point, Evidence, Explanation (Link)', 'Paragraph, Essay, Exam, Literature', 'Present, Explore, Examine, List'],
    correctIndex: 1,
    explanation: 'PEE/PEEL stands for Point, Evidence, Explanation (and Link). This structure ensures each paragraph makes a clear point supported by textual evidence.',
  },
  {
    id: 'et3',
    topic: 'exam-technique',
    question: 'How much time should you typically spend on planning an essay response in a GCSE English exam?',
    options: ['No time -- start writing immediately', 'About 5 minutes', 'About 15 minutes', 'Half the total time'],
    correctIndex: 1,
    explanation: 'About 5 minutes of planning is recommended. A brief plan helps organise ideas, ensures you cover key points, and results in a more coherent response.',
  },
  {
    id: 'et4',
    topic: 'exam-technique',
    question: 'What is the difference between "compare" and "contrast"?',
    options: ['They mean the same thing', '"Compare" looks at similarities; "contrast" looks at differences', '"Compare" is for poetry; "contrast" is for prose', '"Compare" requires quotes; "contrast" does not'],
    correctIndex: 1,
    explanation: '"Compare" identifies similarities between texts, while "contrast" highlights differences. Often both are required together.',
  },
  {
    id: 'et5',
    topic: 'exam-technique',
    question: 'When answering a question on language, what should you always include?',
    options: ['A biography of the author', 'Specific word-level analysis with terminology', 'A summary of the entire text', 'Your personal opinion without evidence'],
    correctIndex: 1,
    explanation: 'Language questions require specific word-level analysis: identify techniques, quote precisely, and explain the effect of particular words and phrases.',
  },
  {
    id: 'et6',
    topic: 'exam-technique',
    question: 'What is the command word "evaluate" asking you to do?',
    options: ['Summarise the text', 'Make a judgement about the effectiveness of something', 'Write a creative response', 'Identify all literary devices'],
    correctIndex: 1,
    explanation: '"Evaluate" asks you to make a judgement, weighing up evidence to assess how effectively the writer achieves their purpose.',
  },
  {
    id: 'et7',
    topic: 'exam-technique',
    question: 'In AQA English Literature Paper 1, how long should you spend on the Shakespeare question?',
    options: ['About 20 minutes', 'About 35 minutes', 'About 50-55 minutes', 'About 1 hour 15 minutes'],
    correctIndex: 2,
    explanation: 'The Shakespeare question (Section A) is worth approximately a third of the paper, so you should allocate around 50-55 minutes including planning.',
  },
  {
    id: 'et8',
    topic: 'exam-technique',
    question: 'What should you do if you cannot remember an exact quote in a closed-book exam?',
    options: ['Make up a quote', 'Leave the response blank', 'Paraphrase closely and refer to specific moments', 'Only write about structure instead'],
    correctIndex: 2,
    explanation: 'If you cannot remember the exact words, closely paraphrase and refer to specific moments. Examiners reward textual knowledge even without exact quotation.',
  },
  {
    id: 'et9',
    topic: 'exam-technique',
    question: 'What does "structure" refer to in English Language analysis?',
    options: ['Only sentence length', 'How the writer organises and sequences the whole text', 'The grammar and punctuation used', 'The number of paragraphs'],
    correctIndex: 1,
    explanation: 'Structure encompasses how the writer organises the entire text: the opening, development, shifts in focus, narrative perspective, chronology, and ending.',
  },
  {
    id: 'et10',
    topic: 'exam-technique',
    question: 'What is the best way to start an analytical paragraph?',
    options: ['With a long quote', 'With a clear topic sentence that addresses the question', 'By introducing the author\'s biography', 'By stating "In this paragraph I will..."'],
    correctIndex: 1,
    explanation: 'Start with a clear topic sentence that directly addresses the question. This signals to the examiner that your paragraph is focused and relevant.',
  },
  {
    id: 'et11',
    topic: 'exam-technique',
    question: 'When the question asks you to "explore", what approach should you take?',
    options: ['Provide a single interpretation', 'Investigate multiple interpretations and ideas', 'Only focus on one paragraph', 'Retell the story in order'],
    correctIndex: 1,
    explanation: '"Explore" invites you to consider multiple angles, interpretations, and ideas. Show depth of thinking by examining different aspects.',
  },
  {
    id: 'et12',
    topic: 'exam-technique',
    question: 'In the English Language creative writing task, what is the most common mistake students make?',
    options: ['Writing too little', 'Focusing too much on plot and not enough on descriptive technique', 'Using too many literary devices', 'Writing in the wrong tense'],
    correctIndex: 1,
    explanation: 'Students often prioritise telling a story over crafting descriptive writing. Examiners reward sophisticated use of language, structure, and technique over complex plots.',
  },
  {
    id: 'et13',
    topic: 'exam-technique',
    question: 'What does AO1 typically assess in English Literature?',
    options: ['Spelling and grammar', 'Response to the text with relevant references', 'Understanding of historical context', 'Comparison between texts'],
    correctIndex: 1,
    explanation: 'AO1 assesses your ability to read, understand, and respond to texts, using evidence and quotations to support a personal and informed interpretation.',
  },
  {
    id: 'et14',
    topic: 'exam-technique',
    question: 'How should you embed quotations in your essays?',
    options: ['Always use a separate line for each quote', 'Weave short quotes into your own sentences', 'Only quote at the end of paragraphs', 'Avoid using quotes entirely'],
    correctIndex: 1,
    explanation: 'Embedding short, precise quotations within your own sentences creates a fluent, sophisticated response and demonstrates confident textual knowledge.',
  },
  {
    id: 'et15',
    topic: 'exam-technique',
    question: 'What should your conclusion to a literature essay include?',
    options: ['New evidence not previously discussed', 'A summary of your argument with a final personal judgement', 'The author\'s biography', 'A list of all techniques found'],
    correctIndex: 1,
    explanation: 'A strong conclusion summarises your argument, links back to the question, and offers a final evaluative judgement. Do not introduce new points.',
  },
  {
    id: 'et16',
    topic: 'exam-technique',
    question: 'What is the purpose of connectives and discourse markers in essay writing?',
    options: ['To make the essay longer', 'To link ideas and create a cohesive argument', 'To replace punctuation', 'To impress the examiner with vocabulary'],
    correctIndex: 1,
    explanation: 'Connectives and discourse markers (however, furthermore, conversely) link ideas, signal shifts in argument, and create a cohesive, well-structured response.',
  },
  {
    id: 'et17',
    topic: 'exam-technique',
    question: 'In a comparison question, what is the best structural approach?',
    options: ['Write about one text completely, then the other', 'Compare both texts point by point throughout', 'Only write about the text you know better', 'Alternate paragraphs between texts randomly'],
    correctIndex: 1,
    explanation: 'Comparing point by point (integrated comparison) is more effective as it directly highlights similarities and differences, demonstrating analytical skill.',
  },
  {
    id: 'et18',
    topic: 'exam-technique',
    question: 'What does AO2 typically assess in English Literature?',
    options: ['SPaG (spelling, punctuation, and grammar)', 'Analysis of language, form, and structure', 'Knowledge of context', 'Personal response to characters'],
    correctIndex: 1,
    explanation: 'AO2 assesses your ability to analyse the language, form, and structure used by a writer to create meanings and effects, using relevant terminology.',
  },
  {
    id: 'et19',
    topic: 'exam-technique',
    question: 'If a question is worth 30 marks, approximately how many paragraphs should you write?',
    options: ['2-3 paragraphs', '4-6 paragraphs', '8-10 paragraphs', '12+ paragraphs'],
    correctIndex: 1,
    explanation: 'For a 30-mark question, 4-6 well-developed paragraphs (plus introduction and conclusion) allows enough depth while managing time effectively.',
  },
  {
    id: 'et20',
    topic: 'exam-technique',
    question: 'What is the best strategy if you run out of time in an exam?',
    options: ['Stop writing immediately', 'Write key points in bullet form to show your knowledge', 'Start a completely new answer', 'Cross out your work and start again'],
    correctIndex: 1,
    explanation: 'If time is short, write remaining points in concise bullet form. Examiners can still award marks for relevant ideas even in note form.',
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
    explanation: 'Shakespeare wrote during the late Elizabethan era (under Elizabeth I) and early Jacobean era (under James I), roughly 1590-1613.',
  },
  {
    id: 'c2',
    topic: 'context',
    question: 'What was the Great Chain of Being?',
    options: ['A method of punishment', 'A hierarchical structure placing God at the top and everything else in ranked order', 'A type of Elizabethan jewellery', 'A scientific theory'],
    correctIndex: 1,
    explanation: 'The Great Chain of Being was the Elizabethan belief in a divinely ordained hierarchy: God, angels, king, nobles, commoners, animals, plants.',
  },
  {
    id: 'c3',
    topic: 'context',
    question: 'What was the main social concern Dickens addressed in "A Christmas Carol"?',
    options: ['The education system', 'Poverty and social inequality in Victorian England', 'Women\'s suffrage', 'The abolition of slavery'],
    correctIndex: 1,
    explanation: 'Dickens wrote "A Christmas Carol" to highlight the plight of the poor in Victorian England and criticise the wealthy who ignored their suffering.',
  },
  {
    id: 'c4',
    topic: 'context',
    question: 'What was the role of the Gunpowder Plot in the context of "Macbeth"?',
    options: ['It has no connection', 'It influenced themes of treason and regicide, as the play was written shortly after the plot', 'It was the direct inspiration for the plot', 'It was part of the play\'s subplot'],
    correctIndex: 1,
    explanation: '"Macbeth" was written around 1606, shortly after the Gunpowder Plot of 1605. Themes of treason and regicide resonated with contemporary fears about attempts on King James I.',
  },
  {
    id: 'c5',
    topic: 'context',
    question: 'What social movement does J.B. Priestley promote in "An Inspector Calls"?',
    options: ['Capitalism and free enterprise', 'Socialism and collective responsibility', 'Anarchism', 'Monarchy'],
    correctIndex: 1,
    explanation: 'Priestley was a committed socialist. The play promotes collective responsibility and criticises selfish capitalism through the Birling family\'s moral failings.',
  },
  {
    id: 'c6',
    topic: 'context',
    question: 'What is the significance of the year 1945 in relation to "An Inspector Calls"?',
    options: ['It is when the play is set', 'It is the year the play was first performed, at the end of World War II', 'It is when Priestley was born', 'It has no significance'],
    correctIndex: 1,
    explanation: 'The play was first performed in 1945, as WWII ended. Priestley wanted audiences to reflect on whether they would build a more equal society or repeat pre-war mistakes.',
  },
  {
    id: 'c7',
    topic: 'context',
    question: 'What was the Victorian attitude towards science and religion?',
    options: ['They were always in agreement', 'There was growing tension as scientific discoveries challenged religious beliefs', 'Science was banned', 'Religion had been completely abandoned'],
    correctIndex: 1,
    explanation: 'The Victorian era saw increasing tension between science and religion, especially after Darwin\'s theory of evolution challenged traditional biblical creation narratives.',
  },
  {
    id: 'c8',
    topic: 'context',
    question: 'What was the significance of the Poor Laws in Victorian England?',
    options: ['They abolished poverty', 'They provided harsh conditions in workhouses for the destitute', 'They gave money to all poor families', 'They were legal protections for workers\' rights'],
    correctIndex: 1,
    explanation: 'The Poor Laws created workhouses where conditions were deliberately harsh to discourage dependency. Dickens criticised this system in many of his works.',
  },
  {
    id: 'c9',
    topic: 'context',
    question: 'In the context of "Romeo and Juliet", what were Italian feuding families called?',
    options: ['Clans', 'Houses', 'Guilds', 'Factions'],
    correctIndex: 1,
    explanation: 'The Montagues and Capulets are noble "houses" -- powerful Italian families whose blood feud drives the tragedy of the play.',
  },
  {
    id: 'c10',
    topic: 'context',
    question: 'What was the role of women in Elizabethan society?',
    options: ['They had equal rights to men', 'They were expected to be obedient to fathers and husbands', 'They dominated political life', 'They were the primary breadwinners'],
    correctIndex: 1,
    explanation: 'Elizabethan women were expected to be subservient -- obedient to fathers before marriage and husbands after. This context is vital for understanding characters like Lady Macbeth.',
  },
  {
    id: 'c11',
    topic: 'context',
    question: 'What was the Industrial Revolution\'s impact on Victorian literature?',
    options: ['It had no impact', 'It inspired themes of urbanisation, poverty, class division, and mechanisation', 'It made all literature more optimistic', 'It only affected scientific writing'],
    correctIndex: 1,
    explanation: 'The Industrial Revolution transformed society, inspiring writers to address rapid urbanisation, child labour, class inequality, and the dehumanising effects of factory work.',
  },
  {
    id: 'c12',
    topic: 'context',
    question: 'What is the significance of King James I to the study of "Macbeth"?',
    options: ['He banned the play', 'Shakespeare wrote it partly to please James, who was interested in witchcraft and was Scottish', 'He acted in the play', 'He wrote the original story'],
    correctIndex: 1,
    explanation: 'King James I was Scottish, believed in witchcraft (he wrote a book on it), and claimed descent from Banquo. Shakespeare crafted "Macbeth" to appeal to his royal patron.',
  },
  {
    id: 'c13',
    topic: 'context',
    question: 'What social class system existed in early 20th-century Britain (as shown in "An Inspector Calls")?',
    options: ['There were no social classes', 'A rigid hierarchy with upper, middle, and working classes', 'Everyone was equal', 'Only two classes existed'],
    correctIndex: 1,
    explanation: 'Early 20th-century Britain had rigid class divisions. The upper and middle classes had power and privilege, while the working class had few rights or protections.',
  },
  {
    id: 'c14',
    topic: 'context',
    question: 'What is the Divine Right of Kings?',
    options: ['A legal document', 'The belief that monarchs derive authority directly from God', 'A type of coronation ceremony', 'A democratic principle'],
    correctIndex: 1,
    explanation: 'The Divine Right of Kings held that the monarch was chosen by God and accountable only to God. Killing a king was therefore seen as defying God -- crucial context for "Macbeth".',
  },
  {
    id: 'c15',
    topic: 'context',
    question: 'What was the Welfare State that Priestley advocated for?',
    options: ['A state where only the wealthy receive benefits', 'A system providing healthcare, education, and social security for all citizens', 'A military state', 'A monarchy without parliament'],
    correctIndex: 1,
    explanation: 'Priestley championed the creation of a Welfare State -- a society where government provides essential services (healthcare, education, housing) for all, regardless of wealth.',
  },
  {
    id: 'c16',
    topic: 'context',
    question: 'What was the significance of the Titanic to "An Inspector Calls"?',
    options: ['It is the setting of the play', 'Mr Birling calls it "unsinkable", creating dramatic irony as it sank in 1912', 'A character survived the Titanic', 'It has no connection'],
    correctIndex: 1,
    explanation: 'Mr Birling confidently declares the Titanic "unsinkable" -- since the audience knows it sank, this creates dramatic irony and undermines his authority as a wise businessman.',
  },
  {
    id: 'c17',
    topic: 'context',
    question: 'What was the social impact of World War I on British society?',
    options: ['Nothing changed', 'It challenged class structures and led to greater social change', 'It reinforced the existing class system', 'It only affected the military'],
    correctIndex: 1,
    explanation: 'WWI challenged traditional class structures. Shared suffering in the trenches eroded deference to the upper classes and contributed to demands for greater social equality.',
  },
  {
    id: 'c18',
    topic: 'context',
    question: 'What literary movement is Robert Louis Stevenson associated with through "Jekyll and Hyde"?',
    options: ['Romanticism', 'Realism', 'Gothic fiction', 'Modernism'],
    correctIndex: 2,
    explanation: '"Jekyll and Hyde" belongs to the Gothic tradition with its themes of horror, duality, the supernatural, and the dark side of human nature.',
  },
  {
    id: 'c19',
    topic: 'context',
    question: 'What was the significance of the British Empire to Victorian literature?',
    options: ['It had no influence', 'It influenced themes of power, civilisation, race, and national identity', 'It only affected travel writing', 'It led to the decline of literature'],
    correctIndex: 1,
    explanation: 'The British Empire influenced literature through themes of power, colonialism, racial attitudes, national identity, and encounters with other cultures.',
  },
  {
    id: 'c20',
    topic: 'context',
    question: 'What is patriarchal society, and why is it relevant to GCSE English texts?',
    options: ['A society led by the youngest members', 'A society dominated by men, affecting how female characters are portrayed and constrained', 'A society with no leaders', 'A society led by religious figures only'],
    correctIndex: 1,
    explanation: 'A patriarchal society is male-dominated. Understanding this context explains the constraints on female characters like Lady Macbeth, Juliet, and Sheila Birling.',
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
