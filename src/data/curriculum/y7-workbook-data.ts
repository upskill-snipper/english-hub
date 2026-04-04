// =============================================================================
// Year 7 Workbook & Homework Data
// T1: Fox Girl & White Gazelle (Reading, Comprehension, Character & Comparison)
// T2: Voice & Identity (Language, Creative Writing, Grammar)
// T3: Shaping Meaning - Stories & Poetry (Analysis, Poetry, Comparison)
// =============================================================================

export interface WorkbookExercise {
  id: string;
  title: string;
  termUnit: string;
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
    | 'media-literacy';
  instructions: string;
  modelAnswer: string;
  marks: number;
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery';
  keywords: string[];
  linkedObjectives: string[];
}

export interface HomeworkTask {
  id: string;
  title: string;
  halfTerm: number;
  weekNumber: number;
  type:
    | 'reading-response'
    | 'extended-writing'
    | 'research'
    | 'creative'
    | 'revision'
    | 'analysis';
  instructions: string;
  modelAnswer: string;
  marks: number;
  estimatedMinutes: number;
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery';
  keywords: string[];
  linkedObjectives: string[];
}

// =============================================================================
// TERM 1 WORKBOOK: Fox Girl & White Gazelle
// 8 exercises covering comprehension, character, vocabulary, quotation,
// analysis (x2), creative writing, and comparison
// =============================================================================

const t1Exercises: WorkbookExercise[] = [
  {
    id: 'y7wb-ex-01',
    title: 'First Meeting: Fox Girl and the Gazelle',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'comprehension',
    instructions:
      '<p>Read the opening section of <em>Fox Girl and the White Gazelle</em> carefully.</p>' +
      '<ol>' +
      '<li>Where does the story open, and what does the setting tell us about the lives of the characters? (3 marks)</li>' +
      '<li>What do we learn about Fox Girl in the first few pages? List three things. (3 marks)</li>' +
      '<li>Why do you think the white gazelle is important to the story? Use evidence from the text. (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The story opens in a run-down urban neighbourhood, suggesting both characters live on the margins of society with limited resources. ' +
      'Three things we learn about Fox Girl: she is resourceful and independent, she feels like an outsider, and she has a deep connection with nature despite her urban setting. ' +
      'The white gazelle is important because it acts as a symbol of freedom and beauty in a harsh environment. Its presence signals hope and connection -- it brings the two girls together across cultural differences.',
    marks: 10,
    difficulty: 'foundation',
    keywords: ['setting', 'characterisation', 'inference', 'symbolism'],
    linkedObjectives: ['Y7.R1', 'Y7.R2', 'Y7.R3'],
  },
  {
    id: 'y7wb-ex-02',
    title: 'Character Study: Vashti',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'analysis',
    instructions:
      '<p>Focus on the character of Vashti (Fox Girl) in the novel.</p>' +
      '<ol>' +
      '<li>How does the author present Vashti as a complex character? Write two analytical paragraphs using Point, Evidence, Explanation (PEE). (8 marks)</li>' +
      '<li>What challenges does Vashti face? How does she respond to them? (4 marks)</li>' +
      '</ol>' +
      '<p><strong>Sentence starter:</strong> The author presents Vashti as... because...</p>',
    modelAnswer:
      'The author presents Vashti as determined and resilient. The description of her navigating the city streets alone shows her independence -- she does not wait for others to help her. This suggests she has had to grow up quickly and rely on herself, which makes the reader feel both admiration and sympathy for her. ' +
      'Vashti also has a tender, imaginative side shown through her fascination with the gazelle. This contrast -- toughness on the outside, sensitivity within -- makes her a believable and interesting protagonist. ' +
      'Her challenges include cultural isolation, loneliness, and the pressure of her home situation. She responds with determination and by forming an unlikely friendship, showing that connection can overcome barriers.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['characterisation', 'PEE', 'protagonist', 'resilience', 'complexity'],
    linkedObjectives: ['Y7.R4', 'Y7.R5', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-03',
    title: 'Vocabulary in Context',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'vocabulary',
    instructions:
      '<p>The following words appear in <em>Fox Girl and the White Gazelle</em>. For each word:</p>' +
      '<ul><li>Write a definition using context clues from the novel</li><li>Identify the word class</li><li>Write your own sentence using the word correctly</li></ul>' +
      '<p><strong>Words:</strong> tenement, scavenging, wary, solace, defiant, sanctuary, tentative, yearning</p>',
    modelAnswer:
      'tenement (noun): a large, often run-down apartment building divided into many small units. "The crumbling tenement loomed over the alleyway." ' +
      'scavenging (verb/adjective): searching through discarded items to find something useful. "She spent the afternoon scavenging for materials for her art." ' +
      'wary (adjective): cautious and alert to possible danger. "She remained wary of strangers in the market." ' +
      'solace (noun): comfort or consolation in a time of distress. "The music offered her solace after a difficult day." ' +
      'defiant (adjective): openly resisting authority or an opponent. "He gave a defiant shrug and walked away." ' +
      'sanctuary (noun): a place of safety or refuge. "The park became her sanctuary from the noise of the city." ' +
      'tentative (adjective): done with hesitation, not fully confident. "She took a tentative step towards the animal." ' +
      'yearning (noun/verb): a feeling of intense longing. "There was a yearning in her voice when she spoke of home."',
    marks: 16,
    difficulty: 'developing',
    keywords: ['word class', 'context clues', 'definitions', 'connotation'],
    linkedObjectives: ['Y7.V1', 'Y7.V2', 'Y7.R2'],
  },
  {
    id: 'y7wb-ex-04',
    title: 'Selecting and Embedding Quotations',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'quotation-practice',
    instructions:
      '<p>Practise the skill of selecting and embedding quotations from the text.</p>' +
      '<ol>' +
      '<li>Find a quotation that shows how the setting reflects the characters\'s feelings. Write a sentence embedding it correctly. (2 marks)</li>' +
      '<li>Find a quotation that reveals something important about the friendship between the two girls. Embed it and explain its effect. (4 marks)</li>' +
      '<li>Find a quotation that uses an interesting language technique (simile, metaphor, or personification). Name the technique and explain what it suggests. (4 marks)</li>' +
      '</ol>' +
      '<p><em>Remember:</em> short quotations go inside "speech marks" and must be woven into your own sentence.</p>',
    modelAnswer:
      'Example 1: The author writes that the street felt "like a forgotten corner of the world," which mirrors the characters\'s own sense of being overlooked and unimportant. ' +
      'Example 2: The moment the girls share a glance "across the rusted fence" suggests that even small physical barriers represent the cultural distances between them, yet both choose to look rather than turn away -- showing the first stirrings of connection. ' +
      'Example 3: The gazelle is described as "a white flame moving through the grey dawn" -- a metaphor that makes the animal seem almost supernatural. This suggests it represents hope and something extraordinary entering the characters\'s ordinary, dull lives.',
    marks: 10,
    difficulty: 'developing',
    keywords: ['quotation', 'embedding', 'evidence', 'technique', 'effect'],
    linkedObjectives: ['Y7.R5', 'Y7.W3', 'Y7.R6'],
  },
  {
    id: 'y7wb-ex-05',
    title: 'How the Author Creates Tension',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'analysis',
    instructions:
      '<p>Read the scene where the gazelle is threatened. Analyse how the author builds tension in this passage.</p>' +
      '<p>In your response you should comment on:</p>' +
      '<ul>' +
      '<li>Short sentences and sentence structure</li>' +
      '<li>Verb choices (action verbs, verbs of movement)</li>' +
      '<li>Sound effects -- alliteration, sibilance, or onomatopoeia</li>' +
      '<li>How the reader is positioned to feel about the gazelle</li>' +
      '</ul>' +
      '<p>Write two well-developed analytical paragraphs. (10 marks)</p>',
    modelAnswer:
      'The author uses short, punchy sentences to quicken the pace and create a sense of panic: "She ran. The fence rattled. The gazelle froze." Each sentence arrives like a shock, leaving no time for the reader to relax. The accumulation of action verbs -- "sprinted," "lunged," "skidded" -- keeps the momentum relentless, placing the reader in the urgent present moment alongside the character. ' +
      'Sound is also used to heighten tension. The sibilance in phrases like "shadows shifted silently" creates a hissing, sinister atmosphere, as though danger is closing in without warning. The reader has been encouraged to care deeply about the gazelle by this point -- it represents freedom and the girls\'s bond -- so the threat to the animal feels like a threat to everything they have built together. The author makes us fear not just for the gazelle\'s life, but for the friendship itself.',
    marks: 10,
    difficulty: 'secure',
    keywords: ['tension', 'sentence structure', 'verb choices', 'alliteration', 'sibilance', 'reader positioning'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-06',
    title: 'Themes: Belonging and Identity',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'analysis',
    instructions:
      '<p>The novel explores themes of belonging and identity.</p>' +
      '<ol>' +
      '<li>What does "belonging" mean to each of the two main characters? How are their experiences of belonging similar and different? (6 marks)</li>' +
      '<li>How does the author use the white gazelle as a symbol to explore the theme of belonging? (4 marks)</li>' +
      '</ol>' +
      '<p>Use evidence from the text to support all your points.</p>',
    modelAnswer:
      'Both characters experience a sense of not fitting in -- one due to her ethnicity and cultural background, the other due to poverty and her unusual personality. Their experiences are similar in that both feel like outsiders in their own community; they differ in that their reasons for isolation come from different sources. By bringing them together through the gazelle, the author suggests that belonging can be created rather than simply found. ' +
      'The white gazelle symbolises belonging because it is itself a creature out of place -- a wild animal in an urban environment. Yet it survives and even thrives, suggesting that one can find a home in unexpected places. When the girls care for it together, they are not just protecting an animal; they are creating a shared world in which they both belong.',
    marks: 10,
    difficulty: 'secure',
    keywords: ['theme', 'belonging', 'identity', 'symbolism', 'evidence'],
    linkedObjectives: ['Y7.R7', 'Y7.R8', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-07',
    title: 'Imagine You Are Nura',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'creative-writing',
    instructions:
      '<p>Write a diary entry from Nura\'s point of view, set on the evening after she and Vashti first discover the white gazelle together.</p>' +
      '<p>Your diary entry should:</p>' +
      '<ul>' +
      '<li>Be written in the first person, using "I"</li>' +
      '<li>Capture Nura\'s thoughts, feelings, and reactions</li>' +
      '<li>Describe the gazelle vividly using at least two language techniques</li>' +
      '<li>Show what the meeting with Vashti means to Nura</li>' +
      '<li>Use the tone of a private diary -- honest, emotional, personal</li>' +
      '</ul>' +
      '<p>Write between 200 and 300 words. (16 marks)</p>',
    modelAnswer:
      'Dear Diary,' +
      '\n\nI do not know how to explain what happened today, but I know I will never forget it. She was there -- the girl I have seen watching from the rooftop -- and between us, standing like something from a dream, was the most beautiful creature I have ever seen. White as fresh snow. Still as a held breath.' +
      '\n\nI have felt invisible since we moved here. The streets look through me like I am made of glass. But when that girl -- Vashti, I think her name is -- when she looked at me, she actually saw me. Not my headscarf or my accent. Me.' +
      '\n\nThe gazelle watched us both with those enormous dark eyes, calm as though it had always known we would come. I wanted to reach out and touch its flank, but I did not dare in case I broke the spell. It felt sacred, that moment. Like something the city was not supposed to have.' +
      '\n\nI wonder if Vashti felt it too -- that charge in the air, like lightning about to happen. I wonder if tomorrow she will pretend it never occurred, the way people do when something is too real.' +
      '\n\nI hope she does not. I think I need this. I think I need her.' +
      '\n\nNura',
    marks: 16,
    difficulty: 'secure',
    keywords: ['first person', 'diary', 'characterisation', 'descriptive language', 'voice'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4'],
  },
  {
    id: 'y7wb-ex-08',
    title: 'Comparing the Two Girls',
    termUnit: 'T1: Fox Girl & White Gazelle',
    type: 'comparison',
    instructions:
      '<p>Compare how the author presents Vashti and Nura in the novel.</p>' +
      '<p>In your response you should consider:</p>' +
      '<ul>' +
      '<li>Their backgrounds and circumstances</li>' +
      '<li>Their personalities and how they are shown through their actions and words</li>' +
      '<li>How the author uses different techniques to present each character</li>' +
      '<li>How their relationship changes across the novel</li>' +
      '</ul>' +
      '<p>Use comparison connectives: <em>similarly, in contrast, whereas, both, however, unlike, on the other hand</em>.</p>' +
      '<p>Write three to four paragraphs. (16 marks)</p>',
    modelAnswer:
      'Both Vashti and Nura are presented as outsiders, though their isolation stems from different causes. Vashti\'s otherness is linked to her poverty and her fierce, unconventional personality, whereas Nura\'s comes from being a newcomer navigating a different culture and language. Despite these differences, the author draws parallels between them to suggest that their shared sense of not belonging is what makes friendship possible. ' +
      'In terms of personality, Vashti is shown as bold and instinctive -- she acts first and thinks later. Nura, in contrast, is more cautious and reflective. However, both girls share a sensitivity to beauty and an ability to see value in what others ignore. ' +
      'The author uses free indirect discourse to give us access to both girls\'s inner thoughts, which creates intimacy and invites the reader to empathise equally with both. Similarly, both characters are associated with the colour white -- Vashti\'s pale, fox-like face and Nura\'s white clothing -- linking them visually and thematically. ' +
      'By the end of the novel, their relationship has shifted from wariness to trust. Unlike at the opening, where each regards the other with suspicion, they have learned to see past surface differences. The author uses this transformation to argue that identity is richer when it is shared.',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['comparison', 'connectives', 'characterisation', 'technique', 'development'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
];

// =============================================================================
// TERM 2 WORKBOOK: Voice & Identity
// 8 exercises: language-analysis, creative-writing x2, analysis, vocabulary,
// grammar, comparison, evaluation
// =============================================================================

const t2Exercises: WorkbookExercise[] = [
  {
    id: 'y7wb-ex-09',
    title: 'Analysing a Personal Voice',
    termUnit: 'T2: Voice & Identity',
    type: 'language-analysis',
    instructions:
      '<p>Read the following extract from a personal essay by a young writer describing their cultural identity:</p>' +
      '<blockquote>"I am the smell of my grandmother\'s kitchen and the grammar of a language I half-know. I am the awkward pause when someone asks me where I am really from. I am somewhere between two worlds, and I have decided that this in-between place is not a problem to be solved -- it is a home to be made."</blockquote>' +
      '<p>Analyse how the writer uses language to express a sense of identity. Comment on:</p>' +
      '<ul>' +
      '<li>The repeated structure ("I am...")</li>' +
      '<li>The metaphors used for identity</li>' +
      '<li>The tone and how it shifts</li>' +
      '<li>The effect on the reader</li>' +
      '</ul>' +
      '<p>Write two analytical paragraphs. (10 marks)</p>',
    modelAnswer:
      'The writer uses anaphora -- the repeated sentence opener "I am..." -- to build a cumulative portrait of identity. Each repetition adds a new layer, suggesting that identity is not a single fixed thing but an accumulation of experiences, senses, and moments. The use of the second person "someone asks where I am really from" pulls the reader into the experience, making the moment of othering feel universally recognisable. ' +
      'The metaphors are strikingly sensory: identity is "the smell of my grandmother\'s kitchen" -- something felt rather than stated, intimate and specific. The final shift in tone is the most powerful moment. The phrase "not a problem to be solved -- it is a home to be made" transforms what has been described as difficulty into agency. The dash creates a pause before the reframing, making the conclusion feel hard-won rather than easy, and leaving the reader with a sense of quiet triumph.',
    marks: 10,
    difficulty: 'developing',
    keywords: ['anaphora', 'metaphor', 'tone', 'identity', 'effect', 'sensory language'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.LA1'],
  },
  {
    id: 'y7wb-ex-10',
    title: 'Write in Your Own Voice',
    termUnit: 'T2: Voice & Identity',
    type: 'creative-writing',
    instructions:
      '<p>Write a short personal piece (200-250 words) called "I Am..." in which you explore your own identity.</p>' +
      '<p>You may write about:</p>' +
      '<ul>' +
      '<li>Your family, culture, or heritage</li>' +
      '<li>A place that means something to you</li>' +
      '<li>A feeling, memory, or experience that shaped you</li>' +
      '<li>Something unexpected or surprising about who you are</li>' +
      '</ul>' +
      '<p>Try to use at least one of these techniques: anaphora, a striking metaphor, or a short sentence for emphasis.</p>' +
      '<p>(14 marks -- assessed on: ideas and content, use of language, structure, accuracy)</p>',
    modelAnswer:
      'I am the sound of rain on a flat roof and the particular quiet of a Sunday morning before everyone wakes up. I am the wrong answer given confidently, and the right answer kept too long inside my head. ' +
      '\n\nI am my father\'s stubbornness and my mother\'s tendency to apologise for things that are not her fault. I am the book left half-read on the bedside table, the playlist that does not quite fit any single mood.' +
      '\n\nI am the version of myself that is still deciding. And I think that is all right.' +
      '\n\nNot everyone knows what they are yet. But I am learning that not knowing is not the same as being lost -- it just means the map is still being drawn.' +
      '\n\nI am a work in progress. That is enough.',
    marks: 14,
    difficulty: 'developing',
    keywords: ['voice', 'first person', 'anaphora', 'metaphor', 'personal writing'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W5'],
  },
  {
    id: 'y7wb-ex-11',
    title: 'Writing to Describe: A Place That Shaped You',
    termUnit: 'T2: Voice & Identity',
    type: 'creative-writing',
    instructions:
      '<p>Write a descriptive piece about a place that has been important to your identity or sense of self.</p>' +
      '<p>Your writing should:</p>' +
      '<ul>' +
      '<li>Appeal to at least three senses (sight, sound, smell, touch, taste)</li>' +
      '<li>Use figurative language: at least one simile and one metaphor</li>' +
      '<li>Vary your sentence lengths for effect</li>' +
      '<li>Have a clear structure: opening, middle development, and a memorable ending</li>' +
      '</ul>' +
      '<p>Write 250-350 words. (16 marks)</p>',
    modelAnswer:
      'The library smelled of dust and possibility -- that particular combination of old paper and ambition that I have never found anywhere else. Even now, years later, I can close my eyes and find it.' +
      '\n\nThe shelves went all the way up, too high to reach without the wheeled ladder that groaned as you pulled it along its rail. I used to climb it just for the feeling of height, the spines of books pressing close on either side like walls of a secret passage. From the top, the rest of the room looked small and manageable -- which was exactly what I needed.' +
      '\n\nIn the mornings, light came through the high windows in long slanted columns, full of drifting specks. Silence was different there. It was not the silence of being told to be quiet; it was the silence of choosing to listen. The occasional rustle of pages. The soft thud of a book being set down. The world reduced to its most essential sounds.' +
      '\n\nI did not know then that this place was shaping me -- teaching me that the best answers arrive when you stop rushing, that patience is its own kind of power. I only knew that here, I felt entirely myself: no awkwardness, no performance. Just me and the page.' +
      '\n\nThe library is still there. I drove past it last year. It looked smaller than I remembered. ' +
      '\n\nBut then, that is always how it goes with the places that made us.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['descriptive writing', 'senses', 'simile', 'metaphor', 'sentence variety', 'structure'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4', 'Y7.W5'],
  },
  {
    id: 'y7wb-ex-12',
    title: 'How Poets Explore Identity',
    termUnit: 'T2: Voice & Identity',
    type: 'analysis',
    instructions:
      '<p>Read the poem "Search for My Tongue" by Sujata Bhatt (an extract is provided on the insert).</p>' +
      '<ol>' +
      '<li>What is the central metaphor of the poem? What does it mean? (3 marks)</li>' +
      '<li>How does the inclusion of Gujarati script affect the reader? (3 marks)</li>' +
      '<li>How does the poet present the relationship between two languages and two identities? (6 marks)</li>' +
      '</ol>' +
      '<p>Use the Point, Evidence, Explanation structure in your longer answer.</p>',
    modelAnswer:
      '1. The central metaphor is the "tongue" -- meaning both the physical organ of speech and the language one speaks. The speaker fears losing their mother tongue, imagining it "rotting" and dying, which represents the fear of losing cultural identity when assimilated into a new culture. ' +
      '2. The inclusion of Gujarati script creates a visual and linguistic disruption on the page. English-only readers cannot decode it, mirroring the speaker\'s own experience of inhabiting two worlds that do not fully overlap. It insists that the mother tongue exists and cannot be ignored even within an English poem. ' +
      '3. The poet presents the two languages as being in conflict -- "you could not use them both together." However, the poem\'s resolution is hopeful: the mother tongue grows back "like a stump of a shoot," suggesting that cultural identity is resilient and cannot be permanently suppressed. The poem argues that both identities can coexist, even if their coexistence is uncomfortable and complicated.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['metaphor', 'central metaphor', 'structure', 'cultural identity', 'language'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.R8'],
  },
  {
    id: 'y7wb-ex-13',
    title: 'Language of Identity: Key Terms',
    termUnit: 'T2: Voice & Identity',
    type: 'vocabulary',
    instructions:
      '<p>Match each term to its definition, then use each word in a sentence that relates to the theme of identity.</p>' +
      '<p><strong>Terms:</strong> heritage, diaspora, bilingual, assimilation, code-switching, ethnicity, culture, dialect</p>' +
      '<p><strong>Definitions (to match):</strong></p>' +
      '<ol>' +
      '<li>The customs, arts, and social institutions of a particular group</li>' +
      '<li>The process of adapting to or adopting the culture of a new group</li>' +
      '<li>The scattered population sharing a common origin</li>' +
      '<li>Able to speak two languages fluently</li>' +
      '<li>The traditions and values passed down from previous generations</li>' +
      '<li>Moving between different languages or dialects in conversation</li>' +
      '<li>A variety of a language spoken in a particular region or by a particular group</li>' +
      '<li>A person\'s racial or cultural background</li>' +
      '</ol>',
    modelAnswer:
      'heritage -- 5 (traditions passed down): "Her heritage gave her a strong sense of who she was and where she came from." ' +
      'diaspora -- 3 (scattered population): "The African diaspora has profoundly influenced music, language, and culture across the world." ' +
      'bilingual -- 4 (speaks two languages): "Growing up bilingual meant she could move between two worlds with ease." ' +
      'assimilation -- 2 (adopting new culture): "The pressure to assimilate left him feeling he had to choose between two versions of himself." ' +
      'code-switching -- 6 (moving between languages): "She found herself code-switching without thinking, using Urdu words when English ones fell short." ' +
      'ethnicity -- 8 (racial or cultural background): "His ethnicity was only one part of his complex identity." ' +
      'culture -- 1 (customs and institutions): "Culture shapes the way we see the world before we are old enough to question it." ' +
      'dialect -- 7 (regional language variety): "Her Yorkshire dialect marked her out immediately in the London office."',
    marks: 16,
    difficulty: 'developing',
    keywords: ['heritage', 'diaspora', 'bilingual', 'assimilation', 'code-switching', 'ethnicity', 'culture', 'dialect'],
    linkedObjectives: ['Y7.V1', 'Y7.V2', 'Y7.LA1'],
  },
  {
    id: 'y7wb-ex-14',
    title: 'Sentences for Effect: Variety and Control',
    termUnit: 'T2: Voice & Identity',
    type: 'grammar',
    instructions:
      '<p>Skilled writers vary their sentence types to control pace, tone, and emphasis.</p>' +
      '<p><strong>Part A:</strong> Label each sentence type (simple, compound, complex, or minor/fragment) and explain its likely effect:</p>' +
      '<ol>' +
      '<li>"She walked in."</li>' +
      '<li>"She walked in, and the room fell silent."</li>' +
      '<li>"Although she had rehearsed the moment a hundred times, nothing had prepared her for the reality of it."</li>' +
      '<li>"Nothing."</li>' +
      '</ol>' +
      '<p><strong>Part B:</strong> Write a short paragraph (80-100 words) about a moment when you felt like you did not belong. Use all four sentence types at least once.</p>',
    modelAnswer:
      'Part A: ' +
      '1. Simple sentence -- creates a sharp, clear statement. The brevity gives it impact; it suggests something significant is about to happen. ' +
      '2. Compound sentence -- links two events with "and," showing cause and effect. The pause before the consequence ("the room fell silent") builds tension. ' +
      '3. Complex sentence -- the subordinate clause at the start creates contrast and nuance. It conveys internal conflict and psychological depth. ' +
      '4. Minor sentence / fragment -- the single word is dramatically isolated. It conveys emptiness, shock, or finality with maximum economy. ' +
      'Part B example: "The lunchroom was loud with groups that had already formed. I stood at the edge, tray in hand, scanning for a gap I could fit into. Although I smiled at a girl near the window, she looked away before I could make it mean anything. Nothing. Just the roar of everyone else\'s belonging."',
    marks: 12,
    difficulty: 'developing',
    keywords: ['simple sentence', 'compound sentence', 'complex sentence', 'minor sentence', 'sentence variety', 'effect'],
    linkedObjectives: ['Y7.G1', 'Y7.G2', 'Y7.W5'],
  },
  {
    id: 'y7wb-ex-15',
    title: 'Two Poems, Two Voices',
    termUnit: 'T2: Voice & Identity',
    type: 'comparison',
    instructions:
      '<p>Compare how identity is explored in "Search for My Tongue" by Sujata Bhatt and "Half-Caste" by John Agard.</p>' +
      '<p>In your comparison you should discuss:</p>' +
      '<ul>' +
      '<li>The speakers\'s attitude to their own identity</li>' +
      '<li>How each poet uses form and structure to reinforce meaning</li>' +
      '<li>The tone of each poem -- are they angry, sad, defiant, celebratory?</li>' +
      '<li>The key language techniques each poet uses</li>' +
      '</ul>' +
      '<p>Use comparison connectives throughout. Write three to four paragraphs. (16 marks)</p>',
    modelAnswer:
      'Both "Search for My Tongue" and "Half-Caste" explore the experience of cultural hybridity -- of existing between two worlds -- but their tones are strikingly different. Bhatt\'s poem is introspective and anxious, focusing on the inner fear of losing the mother tongue, whereas Agard\'s poem is confrontational and sardonic, challenging the listener directly with the repeated phrase "Explain yuself." ' +
      'In terms of form, Bhatt uses the visual inclusion of Gujarati script to enact the very tension she describes -- the poem itself becomes a space where two languages coexist uneasily. Similarly, Agard uses non-standard spelling and dialect spelling ("wha yu mean") to insist on the validity of his voice, refusing to conform to Standard English even on the page. ' +
      'However, both poems ultimately reach a position of affirmation. Bhatt concludes that the mother tongue will return and grow stronger; Agard implies that mixed identity is not a half but a double fullness. In contrast to the anxiety that runs through Bhatt\'s poem, Agard\'s tone is defiantly proud throughout -- the poem functions as an argument addressed to anyone who has ever used the term "half-caste" dismissively. ' +
      'Both poets use their chosen poetic voice not just as content but as form: the way they write is itself an expression of the identity they are exploring.',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['comparison', 'tone', 'form', 'structure', 'dialect', 'identity', 'cultural hybridity'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-16',
    title: 'Evaluating a Viewpoint on Identity',
    termUnit: 'T2: Voice & Identity',
    type: 'evaluation',
    instructions:
      '<p>Read the following statement:</p>' +
      '<blockquote>"Identity is fixed. You are who you are from birth, and no experience or environment can fundamentally change that."</blockquote>' +
      '<p>Evaluate this viewpoint. In your response you should:</p>' +
      '<ul>' +
      '<li>Explain what the statement is claiming</li>' +
      '<li>Discuss evidence or examples that support it</li>' +
      '<li>Discuss evidence or examples that challenge it</li>' +
      '<li>Reach your own reasoned conclusion</li>' +
      '</ul>' +
      '<p>Write 250-300 words. Use formal, measured language. (14 marks)</p>',
    modelAnswer:
      'The statement argues that identity is essentially unchangeable -- that the person we are born as is the person we remain, regardless of what happens to us. While there is some truth in this view, it is ultimately too rigid to account for the complexity of human experience. ' +
      'It is true that certain aspects of identity -- such as genetic inheritance or place of birth -- cannot be altered. There is evidence from psychology that core personality traits show stability across a lifetime, which might support the claim that identity is, at some level, fixed. ' +
      'However, the texts we have studied this term suggest a very different picture. In "Search for My Tongue," the speaker\'s identity is shown to be in constant negotiation between two languages and cultures. In Fox Girl and the White Gazelle, both Vashti and Nura are changed by their friendship and by the events of the novel. These literary examples reflect real human experience: people who move countries, change faith, survive trauma, or find new communities frequently report that these experiences reshape who they are in fundamental ways. ' +
      'The most accurate view is likely that identity has both stable and fluid elements. We may carry certain core qualities throughout our lives, but the way we understand, express, and build on those qualities is continuously shaped by our relationships, choices, and environments. Identity is less a fixed point and more an ongoing process of becoming.',
    marks: 14,
    difficulty: 'mastery',
    keywords: ['evaluation', 'viewpoint', 'evidence', 'counter-argument', 'conclusion', 'formal language'],
    linkedObjectives: ['Y7.R9', 'Y7.W6', 'Y7.W7'],
  },
];

// =============================================================================
// TERM 3 WORKBOOK: Shaping Meaning - Stories & Poetry
// 8 exercises: analysis x2, comparison x2, creative-writing, language-analysis,
// evaluation, quotation-practice
// =============================================================================

const t3Exercises: WorkbookExercise[] = [
  {
    id: 'y7wb-ex-17',
    title: 'How Short Stories Create Atmosphere',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'analysis',
    instructions:
      '<p>Read the opening of a short story provided on the insert sheet.</p>' +
      '<p>Analyse how the writer creates atmosphere in this opening. You should comment on:</p>' +
      '<ul>' +
      '<li>Setting and how it is described</li>' +
      '<li>The choice of adjectives and verbs</li>' +
      '<li>How the narrator\'s perspective shapes the reader\'s experience</li>' +
      '<li>What mood is created and how</li>' +
      '</ul>' +
      '<p>Write two analytical paragraphs using PEE. (10 marks)</p>',
    modelAnswer:
      'The writer establishes an eerie atmosphere through the careful accumulation of unsettling details. The setting is described in terms of absence -- "the street had no cars, no voices, no signs of life" -- and this triple listing of negatives creates a sense of wrongness, as though normality has been erased. The verb "crouched" personifies the houses, making them seem watchful and threatening rather than neutral. ' +
      'The narrator\'s perspective amplifies the unease because we see everything through their heightened anxiety. The short, clipped sentences -- "She stopped. She listened. Nothing." -- mirror a character holding their breath, and the reader holds theirs too. The mood is one of anticipation and dread: the atmosphere feels like a threat not yet named, which is often more frightening than anything explicit. The writer has shaped meaning through omission as much as description.',
    marks: 10,
    difficulty: 'developing',
    keywords: ['atmosphere', 'setting', 'adjectives', 'verbs', 'perspective', 'mood', 'PEE'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.LA1'],
  },
  {
    id: 'y7wb-ex-18',
    title: 'Structure in Poetry: How Form Creates Meaning',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'analysis',
    instructions:
      '<p>Read the poem "Blackberrying" by Sylvia Plath (extract provided).</p>' +
      '<ol>' +
      '<li>Describe the structure of the poem. How many stanzas are there? What do you notice about the lines? (2 marks)</li>' +
      '<li>How does Plath use enjambment and line breaks to control the reader\'s experience? Give one example. (4 marks)</li>' +
      '<li>How does the structure of the poem mirror the speaker\'s journey -- both physical and emotional? (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      '1. The poem has three stanzas of nine lines each. The lines are long and flowing, suggesting the winding path through the brambles and the speaker\'s extended, meditative state of mind. ' +
      '2. Plath uses enjambment to push the reader forward without rest, mimicking the act of following a path. For example, when a sentence runs from one line to the next without punctuation, the reader is pulled along just as the speaker is pulled deeper into the landscape. A line break mid-thought can create a moment of suspension -- the meaning is incomplete until the next line arrives, generating a gentle tension. ' +
      '3. The three-stanza structure maps onto a journey with a beginning, middle, and unexpected end. The opening is specific and sensory -- berries, birds, a path. The middle becomes stranger and more symbolic. By the final stanza the physical path ends at the sea, but emotionally the poem ends in a kind of emptiness or blankness. The sea offers no reflection, no answer. The structure enacts the poem\'s argument: that the journey towards meaning does not always arrive at meaning.',
    marks: 12,
    difficulty: 'secure',
    keywords: ['structure', 'stanza', 'enjambment', 'line breaks', 'form', 'meaning'],
    linkedObjectives: ['Y7.R7', 'Y7.R8', 'Y7.LA2'],
  },
  {
    id: 'y7wb-ex-19',
    title: 'Comparing Two Short Story Openings',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'comparison',
    instructions:
      '<p>You have read two short story openings this term. Compare how the two writers introduce their stories.</p>' +
      '<p>In your comparison consider:</p>' +
      '<ul>' +
      '<li>How each writer establishes setting</li>' +
      '<li>How each writer introduces character</li>' +
      '<li>The narrative voice used in each (first person / third person)</li>' +
      '<li>Which opening you find more effective and why</li>' +
      '</ul>' +
      '<p>Write three paragraphs using comparison connectives throughout. (14 marks)</p>',
    modelAnswer:
      'Both openings aim to draw the reader in immediately, but they use very different strategies. The first story opens in the third person with a focus on a specific, richly described location, establishing a strong sense of place before introducing character. In contrast, the second story opens in the first person mid-action, creating immediate intimacy and urgency. ' +
      'Similarly, both writers use the opening sentences to signal the tone of the whole story. The first writer\'s slow, atmospheric description prepares us for a meditative, literary style, whereas the second writer\'s breathless pace signals a plot-driven narrative in which events will unfold quickly. The use of first person in the second story also creates a more subjective experience -- we can only know what the narrator knows, which generates suspense. ' +
      'On balance, the first opening is more technically accomplished because the precision of its language rewards careful reading. However, the second opening is more immediately engaging for a reader who wants to be swept along. Both are effective for different purposes, which illustrates that there is no single formula for a successful story opening -- the choices must serve the story being told.',
    marks: 14,
    difficulty: 'secure',
    keywords: ['comparison', 'narrative voice', 'setting', 'characterisation', 'connectives', 'evaluation'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-20',
    title: 'Comparing a Poem and a Prose Extract',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'comparison',
    instructions:
      '<p>Both the poem and the prose extract you have studied this term deal with the theme of loss.</p>' +
      '<p>Compare how loss is presented in each text. Your response should:</p>' +
      '<ul>' +
      '<li>Identify what kind of loss each text explores</li>' +
      '<li>Compare the language techniques used in each</li>' +
      '<li>Compare the tone and mood of each</li>' +
      '<li>Discuss which text you find more powerful and explain your reasoning</li>' +
      '</ul>' +
      '<p>Write three to four paragraphs with evidence from both texts. (16 marks)</p>',
    modelAnswer:
      'Both texts explore loss, but they approach it from different angles. The poem presents grief as something private and internal, using imagery of empty spaces -- "the chair still set for someone who will not return." The prose extract, in contrast, depicts loss through community: the whole village is affected, and the writer uses collective pronouns ("we," "our") to suggest shared mourning. ' +
      'In terms of language, the poem relies heavily on symbolism and understatement -- the loss is never named directly, which intensifies its emotional weight. The prose writer uses direct description and physical detail to ground the grief in the real world: specific objects, specific gestures. Both techniques are effective, but they produce different kinds of feeling in the reader. The poem creates a quiet ache; the prose creates a more immediate, visceral sadness. ' +
      'The tone of the poem is subdued and elegiac, moving slowly as though respecting the gravity of grief. The prose extract is more urgent and fragmented, reflecting the shock of sudden loss. Both tones are convincing because they match the type of loss being described -- the poem deals with a slow, anticipated bereavement, while the prose deals with something unexpected. ' +
      'I find the poem more powerful because its restraint forces the reader to do more emotional work. By holding back, it creates space for the reader\'s own experience of loss to enter the poem, making it feel personal even when it is not.',
    marks: 16,
    difficulty: 'mastery',
    keywords: ['comparison', 'loss', 'symbolism', 'tone', 'imagery', 'understatement', 'prose vs poetry'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
  {
    id: 'y7wb-ex-21',
    title: 'Writing a Short Story Opening',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'creative-writing',
    instructions:
      '<p>Write the opening of a short story (250-350 words). Your opening should:</p>' +
      '<ul>' +
      '<li>Establish a clear setting using at least two senses</li>' +
      '<li>Introduce a character through action or thought (not through a list of physical features)</li>' +
      '<li>Create a sense of something about to happen -- a tension or unanswered question</li>' +
      '<li>Use varied sentence lengths for effect</li>' +
      '</ul>' +
      '<p>You may write in the first or third person. (16 marks)</p>',
    modelAnswer:
      'The tide had been out for three hours when Maya found the box.' +
      '\n\nIt sat on a shelf of wet rock, too perfectly placed to have washed up by accident. She crouched down. The wood was dark and swollen, the iron clasp eaten through with rust, but the lock -- the lock was new. Bright and silver and foreign against the age of everything around it.' +
      '\n\nShe looked up the beach. A dog walker, distant. A child eating chips by the sea wall, head down. No one watching. No one except the gulls, which meant no one at all.' +
      '\n\nShe should leave it. That was the obvious thing. That was the sensible, adult, do-not-get-involved thing. ' +
      '\n\nShe picked it up.' +
      '\n\nIt was lighter than she expected. And from inside -- she pressed her ear against the damp lid -- came the faintest, strangest sound. Not the sea. Not the wind. Something else. Something that made the hairs on her arms rise in a way that was not quite fear and not quite anything she had a name for yet.' +
      '\n\nShe put it in her bag anyway. The tide was coming back in, and whatever this was, she was not leaving it to drown.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['creative writing', 'opening', 'setting', 'tension', 'sentence variety', 'narrative hook'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4', 'Y7.W5'],
  },
  {
    id: 'y7wb-ex-22',
    title: 'Analysing Language in a Poem: Imagery and Sound',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'language-analysis',
    instructions:
      '<p>Read the extract from the poem provided. Focus on how the poet uses imagery and sound devices.</p>' +
      '<p>For each technique below, find one example from the poem and write a sentence explaining its effect:</p>' +
      '<ol>' +
      '<li>A simile</li>' +
      '<li>A metaphor</li>' +
      '<li>Alliteration</li>' +
      '<li>Assonance or sibilance</li>' +
      '<li>Personification</li>' +
      '</ol>' +
      '<p>Then write a final paragraph explaining how sound and imagery work together in this poem to create its overall effect. (12 marks)</p>',
    modelAnswer:
      '1. Simile example: "the water moved like something waking" -- this suggests the water is gaining consciousness, which creates an unsettling sense of the natural world having agency and intention. ' +
      '2. Metaphor example: "the field was a held breath" -- the landscape is frozen in anticipation. By removing the word "like," the metaphor makes the comparison absolute and more immediate. ' +
      '3. Alliteration example: "bare branches bent and broke" -- the repetition of the hard "b" sound creates a percussive rhythm that imitates the noise and violence of a storm. ' +
      '4. Sibilance example: "the slow, soft sigh of the sea" -- the repeated "s" sound slows the line down, making the reader linger on each word, which creates a sense of gentle, hypnotic rhythm that mirrors the movement of water. ' +
      '5. Personification example: "the hills leaned in to listen" -- by giving the landscape the ability to listen, the poet creates a sense that nature is attentive and involved in the human world of the poem. ' +
      'Together, the sound devices and imagery create a poem in which the natural world feels alive and responsive. The gentle, musical sounds contrast with moments of violence (the breaking branches), suggesting that nature contains both tenderness and danger.',
    marks: 12,
    difficulty: 'developing',
    keywords: ['simile', 'metaphor', 'alliteration', 'sibilance', 'assonance', 'personification', 'imagery', 'sound'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.LA2'],
  },
  {
    id: 'y7wb-ex-23',
    title: 'Evaluating the Effectiveness of a Story Ending',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'evaluation',
    instructions:
      '<p>Read the ending of the short story studied this term.</p>' +
      '<p>Evaluate how effective this ending is. In your response consider:</p>' +
      '<ul>' +
      '<li>Does the ending resolve the story\'s central tension, or does it leave questions open?</li>' +
      '<li>Is the ending satisfying emotionally? Why or why not?</li>' +
      '<li>What techniques does the writer use in the final paragraph or sentences?</li>' +
      '<li>How does the ending connect back to the opening?</li>' +
      '</ul>' +
      '<p>Write a balanced evaluation of 200-250 words. (12 marks)</p>',
    modelAnswer:
      'The story\'s ending is deliberately ambiguous, which makes it both frustrating and thought-provoking. The central tension -- whether the protagonist will find what she is looking for -- is not directly resolved. Instead, the writer ends on an image rather than an explanation, leaving the reader to interpret its meaning. ' +
      'Emotionally, I found this ending satisfying despite -- or perhaps because of -- its refusal to offer easy answers. By this point in the story, the reader understands that certainty was never really on offer. The ambiguous ending is therefore honest rather than evasive: it respects the reader\'s intelligence and invites them to bring their own experience to the conclusion. ' +
      'Technically, the final sentences are the shortest in the story. This compression creates a sense of arrival -- of something being distilled. The final image echoes the opening\'s imagery of light and shadow, creating a satisfying circularity that gives the story a sense of shape and completeness even though the plot remains open. ' +
      'In conclusion, the ending is effective because it rewards the careful reader while refusing to reduce the story to a simple message. It trusts that meaning can be felt rather than stated -- which is, ultimately, what the best literature does.',
    marks: 12,
    difficulty: 'mastery',
    keywords: ['evaluation', 'ambiguity', 'resolution', 'circular structure', 'effect', 'ending'],
    linkedObjectives: ['Y7.R9', 'Y7.W6', 'Y7.W7'],
  },
  {
    id: 'y7wb-ex-24',
    title: 'Building a Quotation Bank: Stories and Poems',
    termUnit: 'T3: Shaping Meaning - Stories & Poetry',
    type: 'quotation-practice',
    instructions:
      '<p>Build a revision quotation bank from the texts studied this term.</p>' +
      '<p>For each of the four categories below, find two quotations -- one from a story and one from a poem studied this term. For each quotation:</p>' +
      '<ul>' +
      '<li>Write the quotation accurately (short -- 5 to 10 words)</li>' +
      '<li>Identify the technique used</li>' +
      '<li>Write one sentence explaining its effect</li>' +
      '</ul>' +
      '<p><strong>Categories:</strong></p>' +
      '<ol>' +
      '<li>Quotations about setting or place</li>' +
      '<li>Quotations about a character\'s feelings</li>' +
      '<li>Quotations that use sound devices</li>' +
      '<li>Quotations that use a striking image</li>' +
      '</ol>' +
      '<p>(16 marks -- 2 marks per quotation: 1 for technique, 1 for explanation)</p>',
    modelAnswer:
      'Category 1 -- Setting: Story: "the street had no cars, no voices, no signs of life" -- listing/tricolon -- the absence of normality creates a disturbing sense of emptiness. Poem: "the field was a held breath" -- metaphor -- the landscape is frozen in anticipation, as if the world itself is waiting. ' +
      'Category 2 -- Feelings: Story: "She should leave it. She picked it up." -- short contrasting sentences -- the gap between intention and action reveals the character\'s curiosity overwhelming her caution. Poem: "I half-know" -- understatement -- the fractional uncertainty conveys the speaker\'s complex relationship with belonging. ' +
      'Category 3 -- Sound: Story: "She stopped. She listened. Nothing." -- short sentences / minor sentence -- the rhythm imitates a held breath and creates sharp tension. Poem: "the slow, soft sigh of the sea" -- sibilance -- the repeated "s" sounds slow the line\'s pace to mirror the movement of water. ' +
      'Category 4 -- Striking images: Story: "the lock was new. Bright and silver and foreign" -- listing adjectives -- the contrast between the old box and new lock signals something deliberately hidden. Poem: "a white flame moving through the grey dawn" -- metaphor with colour contrast -- the image makes the subject appear luminous and extraordinary against a dull background.',
    marks: 16,
    difficulty: 'secure',
    keywords: ['quotation bank', 'technique identification', 'effect', 'revision', 'evidence'],
    linkedObjectives: ['Y7.R5', 'Y7.R6', 'Y7.W3'],
  },
];

// =============================================================================
// EXPORTED WORKBOOK ARRAY
// =============================================================================

export const y7WorkbookExercises: WorkbookExercise[] = [
  ...t1Exercises,
  ...t2Exercises,
  ...t3Exercises,
];

// =============================================================================
// TERM 1 HOMEWORK: Fox Girl & White Gazelle (10 tasks, half-terms 1 & 2)
// =============================================================================

const t1Homework: HomeworkTask[] = [
  {
    id: 'y7hw-01',
    title: 'Read and Respond: Chapters 1-3',
    halfTerm: 1,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Read chapters 1-3 of <em>Fox Girl and the White Gazelle</em>.</p>' +
      '<p>Write a reading journal entry (150-200 words) responding to:</p>' +
      '<ol>' +
      '<li>What are your first impressions of Vashti and Nura?</li>' +
      '<li>What questions do you already have about the story?</li>' +
      '<li>Find one sentence you found interesting and explain why.</li>' +
      '</ol>',
    modelAnswer:
      'A strong response will note early character traits for each girl, ask genuine questions about the gazelle or the girls\'s backgrounds, and select a quotation that is specific and meaningful rather than generic. Explanation should go beyond "it is interesting" to identify a technique or effect.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['first impressions', 'characterisation', 'reading journal', 'questions'],
    linkedObjectives: ['Y7.R1', 'Y7.R2'],
  },
  {
    id: 'y7hw-02',
    title: 'Vocabulary Study: Words from the Novel',
    halfTerm: 1,
    weekNumber: 2,
    type: 'revision',
    instructions:
      '<p>Using a dictionary or the context of the novel, write a definition and word class for each of the following words:</p>' +
      '<p>scavenging, tenement, wary, solace, defiant, sanctuary</p>' +
      '<p>Then choose three of the words and write a sentence for each that shows you understand the word\'s meaning.</p>',
    modelAnswer:
      'Definitions should be accurate to the context of the novel. Sentences should demonstrate genuine understanding -- for example, "defiant" used in a context involving resistance or refusal, not just as a synonym for "angry."',
    marks: 12,
    estimatedMinutes: 25,
    difficulty: 'foundation',
    keywords: ['vocabulary', 'word class', 'definitions', 'context'],
    linkedObjectives: ['Y7.V1', 'Y7.V2'],
  },
  {
    id: 'y7hw-03',
    title: 'Character Profile: Vashti',
    halfTerm: 1,
    weekNumber: 3,
    type: 'analysis',
    instructions:
      '<p>Create a detailed character profile for Vashti (Fox Girl). Include:</p>' +
      '<ol>' +
      '<li>Three adjectives that describe her personality, each supported by a brief quotation or reference</li>' +
      '<li>What her home life is like and how it affects her</li>' +
      '<li>What she wants and what is stopping her from getting it</li>' +
      '<li>One question you still have about her that you hope the novel will answer</li>' +
      '</ol>',
    modelAnswer:
      'A strong response selects precise adjectives (e.g., resilient, guarded, imaginative) and supports each with specific textual evidence. The "what she wants" section should show understanding of both surface-level desires and deeper emotional needs. Questions should be genuinely curious and show engagement with the text.',
    marks: 12,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['character profile', 'adjectives', 'evidence', 'motivation'],
    linkedObjectives: ['Y7.R3', 'Y7.R4'],
  },
  {
    id: 'y7hw-04',
    title: 'Research Task: Refugee Experiences',
    halfTerm: 1,
    weekNumber: 4,
    type: 'research',
    instructions:
      '<p>The novel deals with themes of displacement and belonging.</p>' +
      '<p>Research the experience of refugees or migrants in the UK (or another country of your choice).</p>' +
      '<p>Write 150-200 words summarising what you found out. Include:</p>' +
      '<ul>' +
      '<li>At least two specific facts or statistics</li>' +
      '<li>One first-person account or quote from a real person (found in a reliable source)</li>' +
      '<li>How this research changes or deepens your understanding of the novel</li>' +
      '</ul>',
    modelAnswer:
      'A strong response uses specific and accurate information from credible sources (news organisations, charities such as UNHCR or the Refugee Council). The connection to the novel should be thoughtful and specific -- not just "now I understand more" but identifying which specific aspect of the novel is illuminated by the research.',
    marks: 10,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['research', 'refugees', 'displacement', 'context'],
    linkedObjectives: ['Y7.R8', 'Y7.W6'],
  },
  {
    id: 'y7hw-05',
    title: 'Diary Entry: The Night of the Gazelle',
    halfTerm: 1,
    weekNumber: 5,
    type: 'creative',
    instructions:
      '<p>Write a diary entry from either Vashti\'s or Nura\'s perspective, set on the night after they first encounter the white gazelle together.</p>' +
      '<p>Your diary should:</p>' +
      '<ul>' +
      '<li>Be written in the first person</li>' +
      '<li>Include the character\'s thoughts and feelings about the other girl</li>' +
      '<li>Describe the gazelle using vivid language</li>' +
      '<li>End with something the character is hoping for</li>' +
      '</ul>' +
      '<p>Write 200-250 words.</p>',
    modelAnswer:
      'A strong response stays true to the character\'s established voice and situation. The description of the gazelle should use at least one language technique. The ending should feel emotionally authentic -- the hope expressed should fit what we know of the character\'s desires and circumstances.',
    marks: 14,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['diary', 'first person', 'character voice', 'descriptive language', 'creative writing'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4'],
  },
  {
    id: 'y7hw-06',
    title: 'Quotation Practice: Key Moments',
    halfTerm: 2,
    weekNumber: 1,
    type: 'analysis',
    instructions:
      '<p>Choose three key moments from the novel so far. For each moment:</p>' +
      '<ol>' +
      '<li>Write a short quotation (5-10 words)</li>' +
      '<li>Explain what is happening at this point in the story</li>' +
      '<li>Explain what the quotation tells us about character or theme</li>' +
      '</ol>' +
      '<p>Use the PEE structure for each response.</p>',
    modelAnswer:
      'Quotations should be accurate and short. Explanations should move beyond plot summary to comment on characterisation or theme. A strong response will identify language techniques within the quotation and explain their specific effect.',
    marks: 12,
    estimatedMinutes: 30,
    difficulty: 'developing',
    keywords: ['quotation', 'PEE', 'key moments', 'theme', 'evidence'],
    linkedObjectives: ['Y7.R5', 'Y7.R6', 'Y7.W3'],
  },
  {
    id: 'y7hw-07',
    title: 'How Setting Reflects Character',
    halfTerm: 2,
    weekNumber: 2,
    type: 'analysis',
    instructions:
      '<p>Analyse how the author uses the urban setting to reflect the characters\'s inner lives.</p>' +
      '<p>Write two paragraphs using PEE. In each paragraph:</p>' +
      '<ul>' +
      '<li>Make a clear point about how the setting connects to a character\'s feelings or situation</li>' +
      '<li>Use a specific quotation from the text</li>' +
      '<li>Explain the technique used and its effect on the reader</li>' +
      '</ul>',
    modelAnswer:
      'Strong responses will avoid simply describing the setting. They will make explicit connections between specific details (e.g., crumbling buildings, narrow alleyways) and a character\'s emotional state. Language techniques should be named and their effects explained with precision.',
    marks: 12,
    estimatedMinutes: 35,
    difficulty: 'secure',
    keywords: ['setting', 'character', 'pathetic fallacy', 'PEE', 'technique'],
    linkedObjectives: ['Y7.R6', 'Y7.R7'],
  },
  {
    id: 'y7hw-08',
    title: 'Comparing the Two Girls: A Paragraph',
    halfTerm: 2,
    weekNumber: 3,
    type: 'extended-writing',
    instructions:
      '<p>Write one extended comparative paragraph about how Vashti and Nura are presented in the novel.</p>' +
      '<p>Your paragraph should:</p>' +
      '<ul>' +
      '<li>Make a comparative point (similarity or difference)</li>' +
      '<li>Include a quotation about Vashti</li>' +
      '<li>Include a quotation about Nura</li>' +
      '<li>Use at least two comparison connectives</li>' +
      '<li>Explain what each quotation reveals about character or theme</li>' +
      '</ul>',
    modelAnswer:
      'A strong paragraph uses connectives like "similarly," "in contrast," or "whereas" to make the comparison explicit. Both quotations should be embedded naturally into the writing, not dropped in as isolated lines. The explanation should connect the comparison to a thematic point about identity or belonging.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'secure',
    keywords: ['comparison', 'connectives', 'characterisation', 'quotation', 'theme'],
    linkedObjectives: ['Y7.R8', 'Y7.W3'],
  },
  {
    id: 'y7hw-09',
    title: 'Alternative Ending',
    halfTerm: 2,
    weekNumber: 4,
    type: 'creative',
    instructions:
      '<p>Imagine an alternative ending to <em>Fox Girl and the White Gazelle</em>. Write the final scene of your alternative version.</p>' +
      '<p>Your ending should:</p>' +
      '<ul>' +
      '<li>Be consistent with the characters as established in the novel</li>' +
      '<li>Resolve at least one of the central tensions or questions</li>' +
      '<li>Use vivid, precise language</li>' +
      '<li>Leave the reader with a clear final image or idea</li>' +
      '</ul>' +
      '<p>Write 250-300 words.</p>',
    modelAnswer:
      'A strong response stays true to character voice and personality. The ending should feel earned -- flowing naturally from the events of the novel. The final image or idea should be meaningful and not cliched. Stronger responses will use a language technique (symbol, circular structure, or an echo of the opening) to give the ending resonance.',
    marks: 14,
    estimatedMinutes: 45,
    difficulty: 'secure',
    keywords: ['alternative ending', 'creative writing', 'structure', 'character consistency'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W5'],
  },
  {
    id: 'y7hw-10',
    title: 'End of Term Reflection: What This Novel Taught Me',
    halfTerm: 2,
    weekNumber: 5,
    type: 'extended-writing',
    instructions:
      '<p>Write a personal response to <em>Fox Girl and the White Gazelle</em> as a whole.</p>' +
      '<p>In your response:</p>' +
      '<ol>' +
      '<li>What did this novel make you think or feel that you had not expected? (3 marks)</li>' +
      '<li>Which character do you find most interesting and why? Use evidence. (4 marks)</li>' +
      '<li>What do you think is the most important message of the novel? How does the author communicate it? (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Strong responses are honest and personal rather than formulaic. The unexpected reaction should be genuine. Character preference should be supported with specific evidence, not just general impressions. The "message" response should identify a specific theme and link it to the author\'s craft choices (technique, structure, or character) rather than just summarising plot.',
    marks: 12,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['personal response', 'theme', 'characterisation', 'reflection', 'message'],
    linkedObjectives: ['Y7.R9', 'Y7.W6'],
  },
];

// =============================================================================
// TERM 2 HOMEWORK: Voice & Identity (10 tasks, half-terms 1 & 2)
// =============================================================================

const t2Homework: HomeworkTask[] = [
  {
    id: 'y7hw-11',
    title: 'Reading: A Poem About Identity',
    halfTerm: 1,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Read "Half-Caste" by John Agard (available online or in your anthology).</p>' +
      '<p>Write a reading response (150-200 words) covering:</p>' +
      '<ol>' +
      '<li>What is the poem about in your own words?</li>' +
      '<li>How does the poet\'s use of dialect affect you as a reader?</li>' +
      '<li>Find one image or phrase you found striking. Explain why.</li>' +
      '</ol>',
    modelAnswer:
      'A strong response demonstrates genuine engagement with the poem\'s argument. The comment on dialect should go beyond noting it is "different" to exploring its effect -- for example, the way it challenges the standard form and insists on the speaker\'s right to be heard on their own terms.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['poetry', 'dialect', 'identity', 'reading response', 'personal reaction'],
    linkedObjectives: ['Y7.R6', 'Y7.R7'],
  },
  {
    id: 'y7hw-12',
    title: 'Vocabulary: Language and Identity Terms',
    halfTerm: 1,
    weekNumber: 2,
    type: 'revision',
    instructions:
      '<p>Create a vocabulary map for the theme of "Voice and Identity." In the centre, write the word IDENTITY.</p>' +
      '<p>Around it, add at least 10 related words or phrases. For each one, write:</p>' +
      '<ul>' +
      '<li>A brief definition</li>' +
      '<li>An example of how the word could be used in an analytical sentence</li>' +
      '</ul>' +
      '<p>Include words from class: heritage, diaspora, bilingual, assimilation, code-switching, dialect, anaphora, and at least two of your own choices.</p>',
    modelAnswer:
      'A strong vocabulary map includes precise definitions and analytical sentences that go beyond the literal -- e.g., "The poet uses anaphora to create an insistent rhythm that mirrors the urgency of the speaker\'s argument." Personal word choices should be relevant and show independent thinking.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['vocabulary map', 'identity', 'definitions', 'analytical language'],
    linkedObjectives: ['Y7.V1', 'Y7.V2', 'Y7.LA1'],
  },
  {
    id: 'y7hw-13',
    title: 'Personal Writing: My Identity in Objects',
    halfTerm: 1,
    weekNumber: 3,
    type: 'creative',
    instructions:
      '<p>Choose three objects that represent different aspects of your identity (e.g., a book, a family photograph, a piece of food, a piece of clothing).</p>' +
      '<p>Write a short descriptive paragraph about each object (60-80 words each), explaining:</p>' +
      '<ul>' +
      '<li>What the object is and what it looks/feels/smells like</li>' +
      '<li>Why it matters to your sense of who you are</li>' +
      '</ul>' +
      '<p>Use at least one language technique in each paragraph.</p>',
    modelAnswer:
      'Strong responses use vivid sensory detail to bring each object to life. The connection to identity should feel genuine and personal, not generic. Language techniques should be used purposefully, not just dropped in -- the technique should deepen the meaning rather than decorating it.',
    marks: 12,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['descriptive writing', 'identity', 'sensory detail', 'language technique', 'personal writing'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4'],
  },
  {
    id: 'y7hw-14',
    title: 'Grammar: Identifying and Using Sentence Types',
    halfTerm: 1,
    weekNumber: 4,
    type: 'revision',
    instructions:
      '<p>Complete the following exercises:</p>' +
      '<p><strong>Part A:</strong> Label each sentence as simple, compound, complex, or minor:</p>' +
      '<ol>' +
      '<li>"Rain."</li>' +
      '<li>"She ran to the bus stop."</li>' +
      '<li>"She ran to the bus stop, but the bus had already gone."</li>' +
      '<li>"Although she had run as fast as she could, the bus had already gone by the time she arrived."</li>' +
      '</ol>' +
      '<p><strong>Part B:</strong> Write one example of each sentence type on the theme of identity or belonging.</p>',
    modelAnswer:
      'Part A: 1. minor/fragment; 2. simple; 3. compound (joined by "but"); 4. complex (subordinate clause opens the sentence). ' +
      'Part B: Minor: "Belonging." Simple: "She felt out of place." Compound: "He spoke the language, but his accent gave him away." Complex: "Although she had lived there for ten years, she still felt like a visitor."',
    marks: 10,
    estimatedMinutes: 25,
    difficulty: 'developing',
    keywords: ['simple sentence', 'compound sentence', 'complex sentence', 'minor sentence', 'grammar'],
    linkedObjectives: ['Y7.G1', 'Y7.G2'],
  },
  {
    id: 'y7hw-15',
    title: 'Research: A Poet Who Writes About Identity',
    halfTerm: 1,
    weekNumber: 5,
    type: 'research',
    instructions:
      '<p>Research one of the following poets who write about identity, culture, or belonging:</p>' +
      '<ul>' +
      '<li>Sujata Bhatt</li>' +
      '<li>John Agard</li>' +
      '<li>Grace Nichols</li>' +
      '<li>Imtiaz Dharker</li>' +
      '<li>Jackie Kay</li>' +
      '</ul>' +
      '<p>Write 150-200 words covering:</p>' +
      '<ol>' +
      '<li>Key facts about their life and background</li>' +
      '<li>The main themes in their poetry</li>' +
      '<li>One poem you found that you would like to read more of, and why</li>' +
      '</ol>',
    modelAnswer:
      'Strong responses go beyond a Wikipedia-style biography to make genuine connections between the poet\'s life and their themes. The chosen poem should be identified by name and the reason for choosing it should be specific and personal, not generic.',
    marks: 10,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['research', 'poet biography', 'themes', 'identity poetry'],
    linkedObjectives: ['Y7.R8', 'Y7.W6'],
  },
  {
    id: 'y7hw-16',
    title: 'Analytical Paragraph: "Search for My Tongue"',
    halfTerm: 2,
    weekNumber: 1,
    type: 'analysis',
    instructions:
      '<p>Write one analytical paragraph about how Sujata Bhatt presents the experience of living between two languages in "Search for My Tongue."</p>' +
      '<p>Your paragraph must:</p>' +
      '<ul>' +
      '<li>Open with a clear analytical point</li>' +
      '<li>Include an embedded quotation</li>' +
      '<li>Name a language technique</li>' +
      '<li>Explain the effect of that technique on the reader</li>' +
      '<li>Link back to the poem\'s wider theme of identity</li>' +
      '</ul>',
    modelAnswer:
      'A strong paragraph follows the PEE structure precisely. The quotation should be embedded grammatically rather than dropped in. The technique should be named correctly (e.g., metaphor, extended metaphor, imagery) and the effect should be explained in terms of what the reader thinks or feels, not just what the technique "shows."',
    marks: 8,
    estimatedMinutes: 25,
    difficulty: 'secure',
    keywords: ['analytical paragraph', 'PEE', 'quotation', 'technique', 'effect'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.W3'],
  },
  {
    id: 'y7hw-17',
    title: 'Speech Writing: "Identity is Not Fixed"',
    halfTerm: 2,
    weekNumber: 2,
    type: 'extended-writing',
    instructions:
      '<p>Write a short speech (200-250 words) for a school assembly arguing that identity is not fixed -- that it grows and changes throughout our lives.</p>' +
      '<p>Your speech should:</p>' +
      '<ul>' +
      '<li>Open with a hook (a question, a surprising statement, or a short anecdote)</li>' +
      '<li>Use at least two rhetorical devices (e.g., rhetorical question, repetition, rule of three)</li>' +
      '<li>Include at least one reference to a text studied this term</li>' +
      '<li>End with a memorable concluding line</li>' +
      '</ul>',
    modelAnswer:
      'A strong speech sounds like it is meant to be heard, not read. The opening hook should be engaging. Rhetorical devices should be used purposefully, not just included as a checklist. The textual reference should be specific. The conclusion should do more than summarise -- it should land with impact and give the audience something to think about.',
    marks: 14,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['speech', 'rhetorical devices', 'persuasion', 'identity', 'audience'],
    linkedObjectives: ['Y7.W1', 'Y7.W6', 'Y7.W7'],
  },
  {
    id: 'y7hw-18',
    title: 'Comparing Two Poems: First Draft',
    halfTerm: 2,
    weekNumber: 3,
    type: 'extended-writing',
    instructions:
      '<p>Write a comparative analysis of "Search for My Tongue" and "Half-Caste."</p>' +
      '<p>Focus on how each poet uses <strong>form and structure</strong> to express ideas about identity.</p>' +
      '<p>Write two paragraphs (one similarity, one difference). Each paragraph should:</p>' +
      '<ul>' +
      '<li>Open with a comparative point</li>' +
      '<li>Include evidence from both poems</li>' +
      '<li>Explain the effect of the structural choice made by each poet</li>' +
      '</ul>',
    modelAnswer:
      'A strong response makes structural observations that go beyond noting "the poem has three stanzas" to explaining why the structural choice matters. Comparison should be explicit -- connectives like "both," "whereas," "similarly," and "in contrast" should appear throughout.',
    marks: 12,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['comparison', 'form', 'structure', 'poetry', 'connectives'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
  {
    id: 'y7hw-19',
    title: 'Reflection: How My Writing Has Developed',
    halfTerm: 2,
    weekNumber: 4,
    type: 'revision',
    instructions:
      '<p>Look back at the creative writing you produced at the start of Term 2 ("I Am..." exercise) and compare it to a piece you have written more recently.</p>' +
      '<p>Write a reflection (150-200 words) answering:</p>' +
      '<ol>' +
      '<li>What has improved in your writing? Give a specific example.</li>' +
      '<li>What technique have you got better at using? Show an example.</li>' +
      '<li>What do you want to improve next? How will you do this?</li>' +
      '</ol>',
    modelAnswer:
      'A strong reflection is honest and specific rather than vague ("my writing is better"). It identifies a concrete improvement with an example from actual work. The target for improvement should be realistic and come with a strategy, not just a wish.',
    marks: 8,
    estimatedMinutes: 25,
    difficulty: 'developing',
    keywords: ['reflection', 'metacognition', 'self-assessment', 'writing development'],
    linkedObjectives: ['Y7.W5', 'Y7.W7'],
  },
  {
    id: 'y7hw-20',
    title: 'Extended Analysis: A Chosen Identity Poem',
    halfTerm: 2,
    weekNumber: 5,
    type: 'analysis',
    instructions:
      '<p>Choose any poem studied this term about identity or belonging.</p>' +
      '<p>Write an extended analysis (250-300 words) exploring how the poet presents their theme.</p>' +
      '<p>Your analysis should cover:</p>' +
      '<ul>' +
      '<li>The poem\'s main idea or argument (2-3 sentences)</li>' +
      '<li>An analysis of language (at least two techniques with quotations)</li>' +
      '<li>A comment on form or structure</li>' +
      '<li>Your personal response: what does this poem make you think or feel?</li>' +
      '</ul>',
    modelAnswer:
      'A strong extended analysis moves fluidly between ideas rather than working through a checklist. Language techniques should be named and their effects explained precisely. The personal response should be genuine and connected to the analysis -- not just added at the end as an afterthought.',
    marks: 16,
    estimatedMinutes: 50,
    difficulty: 'mastery',
    keywords: ['extended analysis', 'language techniques', 'form', 'structure', 'personal response'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.R8', 'Y7.R9'],
  },
];

// =============================================================================
// TERM 3 HOMEWORK: Shaping Meaning - Stories & Poetry (10 tasks, half-terms 1 & 2)
// =============================================================================

const t3Homework: HomeworkTask[] = [
  {
    id: 'y7hw-21',
    title: 'Reading a Short Story: First Response',
    halfTerm: 1,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Read the short story set for this week\'s reading.</p>' +
      '<p>Write a reading response (150-200 words) covering:</p>' +
      '<ol>' +
      '<li>Briefly summarise what happens (3-4 sentences maximum)</li>' +
      '<li>What atmosphere does the story create and how?</li>' +
      '<li>What is one moment that surprised you, confused you, or made you feel something? Explain why.</li>' +
      '</ol>',
    modelAnswer:
      'A strong response demonstrates genuine engagement. The summary should be concise. The atmosphere comment should use appropriate vocabulary (tense, eerie, melancholic, hopeful). The personal moment should be specific and the explanation should go beyond "it was interesting."',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['short story', 'atmosphere', 'reading response', 'personal reaction'],
    linkedObjectives: ['Y7.R1', 'Y7.R6'],
  },
  {
    id: 'y7hw-22',
    title: 'Vocabulary of Literary Analysis',
    halfTerm: 1,
    weekNumber: 2,
    type: 'revision',
    instructions:
      '<p>Create a revision flashcard set for literary analysis vocabulary. You need at least 12 cards.</p>' +
      '<p>Each card should have:</p>' +
      '<ul>' +
      '<li><strong>Front:</strong> the term (e.g., "enjambment")</li>' +
      '<li><strong>Back:</strong> definition + one example from a text you have studied</li>' +
      '</ul>' +
      '<p>Include: simile, metaphor, personification, alliteration, sibilance, enjambment, stanza, tone, imagery, symbolism, narrative voice, and one word of your own choice.</p>',
    modelAnswer:
      'Definitions should be accurate and in the student\'s own words. Examples should be from texts actually studied, not invented. A strong response adds a brief note about effect alongside the definition -- e.g., "enjambment: when a sentence continues past the end of a line without punctuation. Creates a sense of momentum or breathlessness."',
    marks: 12,
    estimatedMinutes: 30,
    difficulty: 'foundation',
    keywords: ['literary analysis', 'vocabulary', 'flashcards', 'revision', 'terminology'],
    linkedObjectives: ['Y7.V1', 'Y7.V2', 'Y7.R6'],
  },
  {
    id: 'y7hw-23',
    title: 'Poem Annotation: Close Reading',
    halfTerm: 1,
    weekNumber: 3,
    type: 'analysis',
    instructions:
      '<p>Annotate the poem printed on the insert sheet. Your annotations should:</p>' +
      '<ul>' +
      '<li>Identify at least five language techniques (circle and label them)</li>' +
      '<li>For each technique, write a brief note explaining its effect</li>' +
      '<li>Identify any structural features (stanza breaks, line lengths, enjambment)</li>' +
      '<li>Write a one-sentence summary of the poem\'s overall meaning or argument</li>' +
      '</ul>' +
      '<p>Then write two analytical sentences (not full paragraphs) about what you noticed most.</p>',
    modelAnswer:
      'A strong annotation identifies techniques precisely (not just "there is a simile here" but naming both parts of the comparison). Effects should be specific to this poem -- connecting the technique to the poem\'s theme or argument. The overall summary should capture meaning, not just topic.',
    marks: 12,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['annotation', 'close reading', 'techniques', 'structure', 'effect'],
    linkedObjectives: ['Y7.R6', 'Y7.R7', 'Y7.LA2'],
  },
  {
    id: 'y7hw-24',
    title: 'Creative: Write a Poem About a Place',
    halfTerm: 1,
    weekNumber: 4,
    type: 'creative',
    instructions:
      '<p>Write a poem (12-20 lines) about a place that matters to you.</p>' +
      '<p>Your poem should:</p>' +
      '<ul>' +
      '<li>Appeal to at least two senses</li>' +
      '<li>Use at least one simile and one metaphor</li>' +
      '<li>Think carefully about line breaks -- where you end a line should be a deliberate choice</li>' +
      '<li>Not have to rhyme (unless you choose to)</li>' +
      '</ul>' +
      '<p>After your poem, write a brief note (50 words) explaining one structural or language choice you made and why.</p>',
    modelAnswer:
      'A strong poem uses precise, specific details rather than generic descriptions. Line breaks should feel intentional -- ending a line on a word that carries weight or surprise. The poet\'s note should show genuine reflection on craft, not just describe what the poem is about.',
    marks: 14,
    estimatedMinutes: 40,
    difficulty: 'developing',
    keywords: ['poetry writing', 'senses', 'simile', 'metaphor', 'line breaks', 'craft'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4'],
  },
  {
    id: 'y7hw-25',
    title: 'Research: The Context of a Story or Poem',
    halfTerm: 1,
    weekNumber: 5,
    type: 'research',
    instructions:
      '<p>Choose one text studied this term (story or poem). Research the context in which it was written.</p>' +
      '<p>Write 150-200 words covering:</p>' +
      '<ol>' +
      '<li>When and where was the text written?</li>' +
      '<li>What was happening historically or culturally at the time?</li>' +
      '<li>How does knowing this context change or deepen your understanding of the text?</li>' +
      '</ol>' +
      '<p>Use at least one reliable source and reference it at the end.</p>',
    modelAnswer:
      'A strong response makes specific connections between historical or cultural context and the text itself -- not just "this happened at the time" but "this explains why the writer uses X." Sources should be reliable (published books, reputable websites) and the reference should include author, title, and date.',
    marks: 10,
    estimatedMinutes: 35,
    difficulty: 'developing',
    keywords: ['context', 'research', 'historical context', 'textual interpretation'],
    linkedObjectives: ['Y7.R8', 'Y7.W6'],
  },
  {
    id: 'y7hw-26',
    title: 'Planning a Comparative Essay',
    halfTerm: 2,
    weekNumber: 1,
    type: 'analysis',
    instructions:
      '<p>Plan a comparative essay on the following question:</p>' +
      '<p><em>Compare how two writers use language to create a strong sense of place.</em></p>' +
      '<p>Your plan should include:</p>' +
      '<ol>' +
      '<li>A brief introduction (what your two texts are, what you will argue)</li>' +
      '<li>Three comparative points with evidence for each (quotation or reference)</li>' +
      '<li>A brief conclusion (what the comparison reveals)</li>' +
      '</ol>' +
      '<p>You do not need to write the essay itself -- just the plan.</p>',
    modelAnswer:
      'A strong plan identifies genuine points of comparison, not just parallel descriptions. Each point should lead to an insight about meaning or technique, not just observation. Evidence should be specific. The conclusion should make a claim about what the comparison reveals -- which writer is more effective, or what they share despite their differences.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'secure',
    keywords: ['planning', 'comparative essay', 'structure', 'evidence', 'thesis'],
    linkedObjectives: ['Y7.W3', 'Y7.W6', 'Y7.R8'],
  },
  {
    id: 'y7hw-27',
    title: 'Writing: Opening of a Short Story',
    halfTerm: 2,
    weekNumber: 2,
    type: 'creative',
    instructions:
      '<p>Write the opening 200-250 words of a short story. Use what you have learned about how good openings work.</p>' +
      '<p>Your opening should:</p>' +
      '<ul>' +
      '<li>Establish setting and atmosphere quickly</li>' +
      '<li>Introduce a character through their actions, not a list of features</li>' +
      '<li>End with something that makes the reader want to continue (a question, a hint of danger, or a mystery)</li>' +
      '</ul>' +
      '<p>After your opening, write a brief comment (50 words) on one technique you used and why.</p>',
    modelAnswer:
      'A strong opening plunges the reader into a specific moment rather than building up slowly. Characters should feel real through their actions and responses. The hook at the end of the opening should be genuinely intriguing. The technique comment should show understanding of craft.',
    marks: 14,
    estimatedMinutes: 40,
    difficulty: 'secure',
    keywords: ['short story', 'opening', 'atmosphere', 'character', 'narrative hook', 'craft'],
    linkedObjectives: ['Y7.W1', 'Y7.W2', 'Y7.W4', 'Y7.W5'],
  },
  {
    id: 'y7hw-28',
    title: 'Analytical Paragraph: Structural Choices in a Poem',
    halfTerm: 2,
    weekNumber: 3,
    type: 'analysis',
    instructions:
      '<p>Write one analytical paragraph about how a poet uses structure to create meaning in a poem studied this term.</p>' +
      '<p>Your paragraph must include:</p>' +
      '<ul>' +
      '<li>A clear opening point about structure</li>' +
      '<li>A specific example (a line break, stanza division, or pattern of repetition)</li>' +
      '<li>An explanation of what this structural choice does to the reader\'s experience</li>' +
      '<li>A link to the poem\'s overall meaning or theme</li>' +
      '</ul>',
    modelAnswer:
      'A strong paragraph makes the connection between structure and meaning explicit. It should not just describe structure ("the poem has four stanzas") but explain its function ("each stanza end is a moment of silence that..."). The link to theme should feel earned, not just bolted on.',
    marks: 8,
    estimatedMinutes: 25,
    difficulty: 'secure',
    keywords: ['structure', 'analytical paragraph', 'stanza', 'line breaks', 'meaning'],
    linkedObjectives: ['Y7.R7', 'Y7.LA2', 'Y7.W3'],
  },
  {
    id: 'y7hw-29',
    title: 'Comparison Paragraph: Two Endings',
    halfTerm: 2,
    weekNumber: 4,
    type: 'extended-writing',
    instructions:
      '<p>Write a comparative paragraph about the endings of two texts studied this term.</p>' +
      '<p>Your paragraph should:</p>' +
      '<ul>' +
      '<li>Compare how each writer ends their text (technique or structural choice)</li>' +
      '<li>Embed a quotation or reference from each text</li>' +
      '<li>Use at least two comparison connectives</li>' +
      '<li>Explain what each ending achieves for the reader</li>' +
      '</ul>',
    modelAnswer:
      'A strong paragraph makes the comparison structural as well as thematic -- it does not just say both endings are "sad" or "happy" but explains what technique each writer uses to achieve their effect. Connectives should make the comparison explicit throughout.',
    marks: 10,
    estimatedMinutes: 30,
    difficulty: 'secure',
    keywords: ['comparison', 'endings', 'structure', 'connectives', 'effect'],
    linkedObjectives: ['Y7.R8', 'Y7.R9', 'Y7.W3'],
  },
  {
    id: 'y7hw-30',
    title: 'End of Year Reflection: My Reading and Writing Journey',
    halfTerm: 2,
    weekNumber: 5,
    type: 'extended-writing',
    instructions:
      '<p>Write a reflective piece (250-300 words) looking back at your reading and writing across the year.</p>' +
      '<p>Cover:</p>' +
      '<ol>' +
      '<li>Which text studied this year meant the most to you and why? (Use specific evidence.) (4 marks)</li>' +
      '<li>What is the most important thing you have learned about how writers create meaning? (4 marks)</li>' +
      '<li>What kind of writer are you now compared to September? What has changed? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'A strong reflection is honest and specific. The chosen text response should include specific references, not just general impressions. The comment about how writers create meaning should demonstrate genuine understanding of craft. The self-assessment should be honest and show genuine growth -- not a list of achievements, but a real sense of what has changed in how the student thinks about texts.',
    marks: 12,
    estimatedMinutes: 45,
    difficulty: 'developing',
    keywords: ['reflection', 'year review', 'reading journey', 'writing development', 'metacognition'],
    linkedObjectives: ['Y7.R9', 'Y7.W6', 'Y7.W7'],
  },
];

// =============================================================================
// EXPORTED HOMEWORK ARRAY
// =============================================================================

export const y7HomeworkTasks: HomeworkTask[] = [
  ...t1Homework,
  ...t2Homework,
  ...t3Homework,
];
