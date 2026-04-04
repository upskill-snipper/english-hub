export interface WritingFrame {
  id: string;
  title: string;
  yearGroup: string;
  taskType:
    | 'analytical-paragraph'
    | 'comparative-essay'
    | 'creative-writing'
    | 'transactional'
    | 'speech'
    | 'letter'
    | 'article'
    | 'report'
    | 'ial-data-essay'
    | 'ial-commentary';
  level: 'foundation' | 'developing' | 'secure' | 'independent';
  frame: string;
  sentenceStarters: string[];
  connectives: string[];
  technicalVocabulary: string[];
  modelSentence: string;
  notes: string;
}

export const writingFramesExtended: WritingFrame[] = [
  // --- Y7-Y9 FRAMES (15) ---

  {
    id: 'wf-y7-pee-foundation',
    title: 'PEE Paragraph (Foundation)',
    yearGroup: 'Y7',
    taskType: 'analytical-paragraph',
    level: 'foundation',
    frame:
      'POINT: The writer shows ___.\n' +
      'EVIDENCE: For example, "___".\n' +
      'EXPLANATION: This shows that ___.',
    sentenceStarters: [
      'The writer shows...',
      'For example, "...".',
      'This shows that...',
      'The word "..." tells us...',
      'We can see that...',
    ],
    connectives: ['for example', 'this shows', 'this tells us', 'because', 'therefore'],
    technicalVocabulary: ['evidence', 'quote', 'language', 'effect', 'reader'],
    modelSentence:
      'The writer shows that the character is frightened. For example, "his hands trembled uncontrollably". This shows that the character has lost control of his body through fear.',
    notes:
      'Ideal for students new to analytical writing. Colour-code each section (P=blue, E=yellow, E=green) to build the habit before removing the scaffold.',
  },

  {
    id: 'wf-y7-pee-developing',
    title: 'PEE Paragraph (Developing)',
    yearGroup: 'Y7',
    taskType: 'analytical-paragraph',
    level: 'developing',
    frame:
      'POINT: The writer presents ___ as ___.\n' +
      'EVIDENCE: The ___ "___" suggests ___.\n' +
      'EXPLANATION: This creates an effect of ___ because ___.',
    sentenceStarters: [
      'The writer presents... as...',
      'The [noun/verb/adjective] "..." suggests...',
      'This creates an effect of...',
      'The use of... implies...',
      'The reader feels... because...',
    ],
    connectives: ['suggests', 'implies', 'creates', 'conveys', 'because', 'which'],
    technicalVocabulary: ['technique', 'connotation', 'imagery', 'tone', 'atmosphere', 'verb', 'adjective', 'noun'],
    modelSentence:
      'The writer presents the forest as threatening. The adjective "gnarled" suggests the trees are twisted and unnatural, creating an atmosphere of danger because the reader associates distortion with evil.',
    notes:
      'Push students to name the word class and begin unpacking connotation. Use alongside a vocabulary mat of word classes.',
  },

  {
    id: 'wf-y7-pee-secure',
    title: 'PEE Paragraph (Secure)',
    yearGroup: 'Y7',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'POINT: The writer uses ___ to present ___ as ___.\n' +
      'EVIDENCE: The ___ "___" ___s ___.\n' +
      'EXPLANATION: The connotations of "___ " suggest ___, which creates ___ for the reader. This is reinforced by ___, which ___.',
    sentenceStarters: [
      'The writer uses [technique] to present...',
      'The [word class] "..." [verb] the idea of...',
      'The connotations of "..." suggest...',
      'This creates a sense of... for the reader.',
      'This is further reinforced by...',
    ],
    connectives: ['furthermore', 'in addition', 'this is reinforced by', 'consequently', 'as a result'],
    technicalVocabulary: [
      'connotation',
      'metaphor',
      'simile',
      'personification',
      'juxtaposition',
      'sibilance',
      'tone',
      'motif',
    ],
    modelSentence:
      'The writer uses personification to present nature as hostile. The verb "clawed" positions the branches as predators, with connotations of violence and intent, which creates unease for the reader. This is reinforced by the sibilance in "silent, sinister shadows", which heightens the threatening atmosphere.',
    notes:
      'Students should aim for two pieces of evidence with linked explanation. Use mini-whiteboards to draft first evidence chain before writing in full.',
  },

  {
    id: 'wf-y8-peel-extension',
    title: 'PEEL Extension Paragraph',
    yearGroup: 'Y8',
    taskType: 'analytical-paragraph',
    level: 'developing',
    frame:
      'POINT: ___ is presented as ___.\n' +
      'EVIDENCE: "___".\n' +
      'EXPLANATION: ___.\n' +
      'LINK: This connects to the wider theme of ___ because ___.',
    sentenceStarters: [
      'Throughout the text, ... is presented as...',
      'The quotation "..." demonstrates...',
      'This highlights the idea that...',
      'This connects to the wider theme of...',
      'Ultimately, the writer suggests that...',
    ],
    connectives: ['ultimately', 'this connects to', 'on a wider level', 'this reflects', 'consequently'],
    technicalVocabulary: ['theme', 'motif', 'symbol', 'context', 'interpretation', 'significance'],
    modelSentence:
      'Power is presented as corrupting throughout the text. The phrase "absolute authority" implies total domination with no room for challenge. This highlights the idea that unchecked power removes the humanity of the ruler. This connects to the wider theme of moral decline, as the writer suggests that power and goodness are fundamentally incompatible.',
    notes:
      'The Link sentence moves students from textual analysis to thematic argument, a key transition for KS3-4 progression.',
  },

  {
    id: 'wf-y8-comparison',
    title: 'Comparison Paragraph',
    yearGroup: 'Y8',
    taskType: 'comparative-essay',
    level: 'developing',
    frame:
      'In [Text A], ___ is presented as ___ through ___.\n' +
      'Similarly / In contrast, in [Text B], ___ is presented as ___ through ___.\n' +
      'Both writers / However, the writers differ because ___.',
    sentenceStarters: [
      'In [Text A], ... is presented as...',
      'Similarly, in [Text B]...',
      'In contrast, [Text B] presents...',
      'Both writers use... to suggest...',
      'Whereas [Text A]..., [Text B]...',
      'The writers differ in their approach because...',
    ],
    connectives: [
      'similarly',
      'in contrast',
      'whereas',
      'on the other hand',
      'both writers',
      'however',
      'by comparison',
    ],
    technicalVocabulary: ['perspective', 'viewpoint', 'contrast', 'parallel', 'diverge', 'converge', 'thematic link'],
    modelSentence:
      'In Text A, conflict is presented as inevitable through the recurring imagery of storms. In contrast, Text B presents conflict as a choice, using the verb "turned away" to suggest the speaker could have avoided confrontation. Both writers acknowledge the destructive potential of conflict, yet differ in whether human agency can prevent it.',
    notes:
      'Teach the "zoom in, zoom out" technique: zoom into each text before zooming out to a comparative statement. Use a two-column evidence grid in pre-writing.',
  },

  {
    id: 'wf-y7-descriptive-opening',
    title: 'Descriptive Writing Opening',
    yearGroup: 'Y7',
    taskType: 'creative-writing',
    level: 'foundation',
    frame:
      'SETTING (sight): The ___ was ___. [One sentence describing what you see.]\n' +
      'SOUND: The only sound was ___.\n' +
      'ATMOSPHERE: Everything felt ___.\n' +
      'MOVEMENT: Suddenly / Slowly, ___.',
    sentenceStarters: [
      'The [place] was...',
      'Stretching out before me...',
      'The only sound was...',
      'Everything felt...',
      'Slowly, the...',
      'Not a single...',
    ],
    connectives: ['suddenly', 'slowly', 'above', 'beneath', 'in the distance', 'all around'],
    technicalVocabulary: ['atmosphere', 'setting', 'sensory detail', 'description', 'imagery', 'pathetic fallacy'],
    modelSentence:
      'The market square was deserted. Crumpled newspapers skittered across the cobblestones in the wind. Everything felt abandoned, as though the world had simply forgotten this place existed. Then, slowly, a light flickered in the window above the baker\'s shop.',
    notes:
      'Encourage students to use the five senses systematically. Provide a "sensory word bank" per setting type (e.g. forest, city, beach) to support vocabulary choice.',
  },

  {
    id: 'wf-y8-narrative-structure',
    title: 'Narrative Structure Frame',
    yearGroup: 'Y8',
    taskType: 'creative-writing',
    level: 'developing',
    frame:
      'OPENING (establish character/setting): ___.\n' +
      'INCITING INCIDENT: Everything changed when ___.\n' +
      'RISING TENSION: As ___ happened, ___.\n' +
      'CRISIS POINT: At the moment when ___, ___.\n' +
      'RESOLUTION / AMBIGUITY: In the end, ___.',
    sentenceStarters: [
      'Everything changed when...',
      'As the days passed...',
      'At the precise moment when...',
      'What she had not expected was...',
      'In the end, nothing was quite...',
    ],
    connectives: [
      'meanwhile',
      'as a result',
      'suddenly',
      'by the time',
      'no sooner had... than',
      'despite this',
      'in the end',
    ],
    technicalVocabulary: ['narrative arc', 'inciting incident', 'rising action', 'climax', 'resolution', 'ambiguity', 'protagonist'],
    modelSentence:
      'Everything changed the morning the letter arrived. Its red wax seal sat at the centre of the kitchen table, unbroken, accusatory. As the hours passed and her parents spoke in lowered voices, Mira understood that the life she had known was already over.',
    notes:
      'Based on a simplified Freytag pyramid. Ask students to map their own story onto the frame before drafting. Ambiguous endings are rewarded in IGCSE marking.',
  },

  {
    id: 'wf-y7-speech-intro',
    title: 'Speech Introduction Frame',
    yearGroup: 'Y7',
    taskType: 'speech',
    level: 'foundation',
    frame:
      'HOOK: [Rhetorical question / Shocking statistic / Anecdote]: ___.\n' +
      'INTRODUCE TOPIC: Today I am going to talk to you about ___.\n' +
      'WHY IT MATTERS: This matters because ___.\n' +
      'SIGNPOST: I will cover three key points: ___, ___, and ___.',
    sentenceStarters: [
      'Have you ever wondered...?',
      'Imagine a world where...',
      'Today I am going to talk to you about...',
      'This matters because...',
      'By the end of my speech, you will...',
    ],
    connectives: ['firstly', 'secondly', 'finally', 'most importantly', 'above all'],
    technicalVocabulary: ['rhetorical question', 'anecdote', 'direct address', 'signposting', 'hook', 'audience'],
    modelSentence:
      'Have you ever stood in a supermarket aisle for five minutes, paralysed by the choice between seventeen types of cereal? Today I am going to talk to you about the paradox of choice and why having more options can make us less happy. This matters because it affects every decision we make, from the trivial to the life-changing.',
    notes:
      'Practise the hook in isolation before the full frame. Students can vote on the most effective hook type for their topic before drafting.',
  },

  {
    id: 'wf-y8-persuasive-paragraph',
    title: 'Persuasive Paragraph Frame',
    yearGroup: 'Y8',
    taskType: 'transactional',
    level: 'developing',
    frame:
      'CLAIM: It is clear that ___.\n' +
      'REASON: This is because ___.\n' +
      'EVIDENCE / EXAMPLE: For instance, ___.\n' +
      'COUNTER AND DISMISS: Some may argue that ___, however ___.\n' +
      'REINFORCE: Therefore, ___.',
    sentenceStarters: [
      'It is clear that...',
      'This is because...',
      'For instance, research has shown that...',
      'Some may argue that..., however...',
      'Therefore, it is undeniable that...',
    ],
    connectives: ['therefore', 'however', 'moreover', 'despite this', 'undeniably', 'as a result'],
    technicalVocabulary: [
      'argument',
      'counter-argument',
      'evidence',
      'refutation',
      'assertion',
      'persuasive technique',
      'rhetorical device',
    ],
    modelSentence:
      'It is clear that single-use plastics must be banned immediately. This is because they persist in ecosystems for up to five hundred years, leaching toxins that enter the food chain. Some may argue that a ban would harm the packaging industry, however the long-term environmental cost vastly outweighs any short-term economic inconvenience. Therefore, the case for a complete ban is irrefutable.',
    notes:
      'Teach the AREA structure (Assertion, Reason, Evidence, Answer counter-argument) as an alternative name for this frame. Students should avoid using "I think" in formal persuasive writing.',
  },

  {
    id: 'wf-y7-letter-opening',
    title: 'Formal Letter Opening Frame',
    yearGroup: 'Y7',
    taskType: 'letter',
    level: 'foundation',
    frame:
      '[Your address]\n[Date]\n\n[Recipient name and address]\n\nDear [Mr/Ms ___],\n\n' +
      'OPENING PARAGRAPH: I am writing to you regarding ___. I am a ___ and I am deeply concerned about ___.\n' +
      'PURPOSE: The purpose of this letter is to ___.',
    sentenceStarters: [
      'I am writing to you regarding...',
      'I am writing on behalf of...',
      'I am deeply concerned about...',
      'The purpose of this letter is to...',
      'I would be grateful if you could...',
    ],
    connectives: ['furthermore', 'in addition', 'however', 'as a result', 'I trust that'],
    technicalVocabulary: ['formal register', 'recipient', 'salutation', 'purpose', 'tone', 'convention'],
    modelSentence:
      'I am writing to you regarding the proposed closure of Greenfield Youth Centre. I am a parent of two children who attend the centre weekly and I am deeply concerned about the impact this closure will have on young people in our community.',
    notes:
      'Practise the layout conventions separately from the content. Use a checklist: address, date, salutation, opening paragraph, sign-off.',
  },

  {
    id: 'wf-y9-folk-tale-retelling',
    title: 'Folk Tale Retelling Frame',
    yearGroup: 'Y9',
    taskType: 'creative-writing',
    level: 'developing',
    frame:
      'ESTABLISH WORLD: Once, in a time when ___, there lived ___.\n' +
      'PROBLEM / QUEST: But ___ had a problem: ___.\n' +
      'JOURNEY / TRIALS: On the journey, ___ encountered ___. Only by ___ could they ___.\n' +
      'TRANSFORMATION: When at last ___, ___ understood that ___.\n' +
      'MORAL ENDING: And so it is said that ___.',
    sentenceStarters: [
      'Once, in a time when...',
      'But [character] had a problem:...',
      'On the third day of the journey...',
      'Only by [action] could they...',
      'When at last...',
      'And so it is said that...',
    ],
    connectives: ['and so', 'but', 'yet', 'at last', 'no sooner had... than', 'and from that day forward'],
    technicalVocabulary: ['oral tradition', 'archetype', 'motif', 'rule of three', 'transformation', 'moral', 'parable'],
    modelSentence:
      'Once, in a time when the rivers still spoke in human tongues, there lived a girl who had never learned to listen. But the girl had a problem: a silence had fallen over her village, and only she could break it. On the third trial, offered the gift of a golden voice, she turned it down and offered her own silence instead, and from that day forward the river sang for her.',
    notes:
      'Link to Y9 T1 work on A Christmas Carol and moral transformation. Ask students to select a contemporary issue and encode it within a folk tale structure.',
  },

  {
    id: 'wf-y9-poetry-analysis',
    title: 'Poetry Analysis Paragraph',
    yearGroup: 'Y9',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'OPENING STATEMENT: In this poem, ___ presents ___ as ___.\n' +
      'LANGUAGE ANALYSIS 1: The ___ "___" ___, suggesting ___.\n' +
      'DEVELOP: The connotations of "___ " evoke ___, which ___.\n' +
      'STRUCTURE / FORM LINK: This is reinforced by the ___, which mirrors ___.\n' +
      'CONTEXT: This may reflect ___, as ___.',
    sentenceStarters: [
      'In this poem, [poet] presents... as...',
      'The [word class] "..." suggests...',
      'The connotations of "..." evoke...',
      'This is reinforced by the [structural/formal feature]...',
      'This may reflect [context] because...',
    ],
    connectives: ['furthermore', 'this is mirrored in', 'structurally', 'in terms of form', 'contextually'],
    technicalVocabulary: [
      'enjambment',
      'caesura',
      'volta',
      'stanza',
      'sonnet',
      'free verse',
      'iambic pentameter',
      'alliteration',
      'assonance',
      'extended metaphor',
    ],
    modelSentence:
      'In "Remains", Armitage presents the psychological aftermath of combat as inescapable. The verb "dug in" carries connotations of permanent entrenchment, suggesting the memory has literally burrowed into the speaker\'s body. This is reinforced by the shift to present tense at the volta, which mirrors the way trauma collapses past and present into a single, unresolvable moment.',
    notes:
      'Always encourage AO2 (language/form/structure) to lead with AO1 (argument) as the frame, rather than simply listing techniques. Use this frame in preparation for IGCSE poetry assessment.',
  },

  {
    id: 'wf-y9-character-essay',
    title: 'Character Essay Paragraph',
    yearGroup: 'Y9',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'TOPIC: [Character] is presented as ___ throughout the text.\n' +
      'MICRO-ANALYSIS 1: In ___, the writer uses "___ " to suggest ___.\n' +
      'MICRO-ANALYSIS 2: This is developed later when ___, as "___ " implies ___.\n' +
      'THEMATIC LINK: Both moments suggest that the writer uses [character] to explore the theme of ___.',
    sentenceStarters: [
      '[Character] is presented as... throughout the text.',
      'In [chapter/act/stanza], the writer uses...',
      'This is developed later when...',
      'The writer uses [character] to explore...',
      'Ultimately, [character] represents...',
    ],
    connectives: ['throughout', 'initially', 'as the text progresses', 'this is developed when', 'ultimately'],
    technicalVocabulary: ['characterisation', 'protagonist', 'antagonist', 'foil', 'archetype', 'dynamic character', 'static character', 'motivation'],
    modelSentence:
      'Scrooge is presented as morally isolated throughout A Christmas Carol. In Stave One, Dickens uses the metaphor "solitary as an oyster" to suggest that Scrooge has sealed himself away from human feeling. This is developed in Stave Two, when the Ghost shows him Belle\'s departure and Scrooge makes no protest, implying that he has chosen money over love so many times it has become instinct. Both moments suggest that Dickens uses Scrooge to explore how capitalism corrodes human connection.',
    notes:
      'Suitable for Y9 T1 A Christmas Carol and Y9 T3 Of Mice and Men. Encourage students to track character across the whole text rather than treating moments in isolation.',
  },

  {
    id: 'wf-y9-theme-essay',
    title: 'Theme Essay Paragraph',
    yearGroup: 'Y9',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'THEME STATEMENT: The theme of ___ is central to [text].\n' +
      'FIRST EXPLORATION: The writer first explores this in ___, where ___.\n' +
      'SECOND EXPLORATION: The theme is further developed in ___, as ___.\n' +
      'AUTHORIAL INTENT: By returning to this theme, the writer suggests that ___.\n' +
      'CONTEXT (if applicable): This reflects the social/historical context of ___, in which ___.',
    sentenceStarters: [
      'The theme of... is central to...',
      'The writer first explores this when...',
      'The theme is further developed through...',
      'By returning to this idea, the writer suggests...',
      'This reflects the [historical/social/political] context...',
    ],
    connectives: [
      'furthermore',
      'as the text progresses',
      'by returning to',
      'this reflects',
      'in the context of',
      'it is significant that',
    ],
    technicalVocabulary: ['theme', 'motif', 'symbol', 'allegory', 'social context', 'authorial intent', 'critique'],
    modelSentence:
      'The theme of social injustice is central to Of Mice and Men. Steinbeck first explores this through Crooks, whose segregated room physically embodies the racial hierarchies of 1930s California. The theme is further developed through Curley\'s wife, whose anonymity -- she is never given a name -- reflects the silencing of women in a patriarchal society. By presenting multiple characters as victims of different but intersecting systems of oppression, Steinbeck suggests that injustice is systemic, not incidental.',
    notes:
      'Pairs well with the context paragraph frame. Students should be taught to distinguish between the theme as an abstract noun and the writer\'s argument about that theme.',
  },

  {
    id: 'wf-y9-context-paragraph',
    title: 'Context Integration Paragraph',
    yearGroup: 'Y9',
    taskType: 'analytical-paragraph',
    level: 'independent',
    frame:
      'CONTEXT FACT: [Author] was writing in a context in which ___.\n' +
      'LINK TO TEXT: This is evident in the way ___, suggesting ___.\n' +
      'NUANCE: However, the writer complicates this by ___, which suggests ___.\n' +
      'EVALUATIVE STATEMENT: It is therefore possible to read [text] as both a reflection of and a challenge to its historical moment.',
    sentenceStarters: [
      '[Author] was writing in a context in which...',
      'Writing in [year/period], [author] would have been aware that...',
      'This is reflected in the text when...',
      'However, the writer complicates this contextual reading by...',
      'It is possible to read [text] as both a reflection of and a challenge to...',
    ],
    connectives: ['however', 'despite this', 'it is significant that', 'in contrast', 'this complicates the reading'],
    technicalVocabulary: [
      'historical context',
      'social context',
      'authorial intent',
      'contemporary reader',
      'modern reader',
      'Victorian',
      'post-war',
      'critique',
      'subversion',
    ],
    modelSentence:
      'Dickens was writing in a context in which the New Poor Law of 1834 had introduced workhouses that punished poverty rather than relieved it. This is evident in the bleak description of Ignorance and Want in Stave Three, suggesting Dickens intended the novella as a direct attack on the middle-class indifference that sustained such legislation. However, Dickens complicates any straightforward political reading by placing redemption at the individual level, implying that systemic change must begin with personal moral transformation.',
    notes:
      'Context should never be "bolted on" at the start of an essay. This frame teaches students to weave context into analysis and to treat it as a lens, not a fact dump.',
  },

  {
    id: 'wf-y9-conclusion',
    title: 'Essay Conclusion Frame',
    yearGroup: 'Y9',
    taskType: 'analytical-paragraph',
    level: 'developing',
    frame:
      'RESTATE ARGUMENT: In conclusion, throughout [text], [author] presents ___ as ___.\n' +
      'SYNTHESIS: Through the use of ___, ___, and ___, the writer consistently ___.\n' +
      'WIDER SIGNIFICANCE: Ultimately, [text] invites the reader to consider ___, a concern that remains relevant today because ___.',
    sentenceStarters: [
      'In conclusion, throughout [text]...',
      'Through the use of [technique], [technique], and [technique]...',
      'Ultimately, [text] invites the reader to consider...',
      'The enduring power of this text lies in...',
      'It is this tension between... and... that gives the text its lasting significance.',
    ],
    connectives: ['ultimately', 'in conclusion', 'through', 'as a whole', 'this enduring tension'],
    technicalVocabulary: ['synthesis', 'argument', 'significance', 'enduring', 'relevant', 'complexity', 'ambiguity'],
    modelSentence:
      'In conclusion, throughout A Christmas Carol, Dickens presents selfishness as a learned condition that can be unlearned. Through the use of the supernatural framework, the journey motif, and the redemption arc, he consistently argues that empathy is a moral choice available to all. Ultimately, the novella invites the reader to consider whether the comfortable classes of any era have a duty to the poor -- a concern that remains urgently relevant today.',
    notes:
      'Discourage students from simply summarising in the conclusion. The "wider significance" sentence pushes them towards the evaluative comment that gains the highest marks.',
  },

  // --- IGCSE FRAMES (10) ---

  {
    id: 'wf-igcse-lang-p1-q1',
    title: 'IGCSE Language P1 Q1: List / Select (AO1)',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'foundation',
    frame:
      'FIND AND COPY approach:\n' +
      'From [lines __ to __], the writer states that ___.\n' +
      'They also mention that ___.\n' +
      'In addition, the text tells us that ___.\n' +
      'Finally, ___.',
    sentenceStarters: [
      'From the text, we learn that...',
      'The writer states that...',
      'They also mention that...',
      'In addition, the text tells us that...',
      'Finally, the passage reveals that...',
    ],
    connectives: ['also', 'in addition', 'furthermore', 'finally', 'additionally'],
    technicalVocabulary: ['explicit', 'implicit', 'retrieve', 'identify', 'select', 'infer'],
    modelSentence:
      'From the passage, we learn that the journey took three days. The writer also mentions that the group had no map. In addition, the text tells us that temperatures dropped below freezing each night.',
    notes:
      'Q1 tests AO1 retrieval. Students must stay within the specified lines. Remind them: no analysis needed here. Penalise responses that quote but do not identify the relevant information.',
  },

  {
    id: 'wf-igcse-lang-p1-q2',
    title: 'IGCSE Language P1 Q2: Impression / Attitude (AO2 + AO1)',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'developing',
    frame:
      'IMPRESSION STATEMENT: From the passage, the reader gains the impression that ___.\n' +
      'EVIDENCE: This is suggested by the [word class] "___ ", which ___.\n' +
      'DEVELOP: The connotations of "___ " imply that ___.\n' +
      'SECOND POINT: Furthermore, the writer uses "___ " to suggest ___.',
    sentenceStarters: [
      'From the passage, the reader gains the impression that...',
      'This is suggested by the [word class] "..."...',
      'The connotations of "..." imply...',
      'Furthermore, the writer uses...',
      'This reinforces the idea that...',
    ],
    connectives: ['furthermore', 'in addition', 'this reinforces', 'as a result', 'this suggests'],
    technicalVocabulary: ['impression', 'attitude', 'connotation', 'implication', 'perspective', 'viewpoint'],
    modelSentence:
      'From the passage, the reader gains the impression that the narrator finds the city overwhelming. This is suggested by the verb "engulfed", which implies the narrator has been swallowed and lost. The connotations of "engulfed" imply a loss of identity and agency. Furthermore, the writer uses the listing of sounds -- "horns, voices, machinery, bells" -- to reinforce the sense that the city assaults the senses without pause.',
    notes:
      'Q2 on Edexcel IGCSE Language P1 requires students to track the impression of a character or place. Two fully developed points, each with a quotation and analysis, typically secures Level 3.',
  },

  {
    id: 'wf-igcse-lang-p1-q3',
    title: 'IGCSE Language P1 Q3: Language Analysis (AO2)',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'The writer uses [technique] to ___.\n' +
      'For example, "___ " ___s the idea of ___.\n' +
      'The [word class] "___ " has connotations of ___, which creates ___.\n' +
      'This language choice is effective because ___.',
    sentenceStarters: [
      'The writer uses [technique] to...',
      'The [word class] "..." creates an effect of...',
      'The connotations of "..." suggest...',
      'This language choice is effective because...',
      'The writer deliberately chooses "..." rather than a simpler alternative, in order to...',
    ],
    connectives: ['in order to', 'this creates', 'as a result', 'this is effective because', 'furthermore'],
    technicalVocabulary: [
      'technique',
      'effect',
      'simile',
      'metaphor',
      'personification',
      'alliteration',
      'hyperbole',
      'pathetic fallacy',
      'semantic field',
    ],
    modelSentence:
      'The writer uses personification to present the storm as a deliberate aggressor. The verb "attacked" creates an effect of intent and malice, as though the storm has chosen its victims. The connotations of "attacked" suggest violence and vulnerability, which creates a sense of helplessness in the reader. This language choice is effective because it transforms a natural event into a narrative of threat, heightening tension in the opening scene.',
    notes:
      'Q3 is the highest-tariff AO2 question on P1. Teach students to avoid "the writer uses a metaphor to create imagery" -- they must name the effect precisely. Practise swapping alternatives to sharpen vocabulary choice commentary.',
  },

  {
    id: 'wf-igcse-lang-p1-q4',
    title: 'IGCSE Language P1 Q4: Evaluation (AO4)',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'independent',
    frame:
      'EVALUATIVE CLAIM: I agree [to a great extent / partially] that ___ because ___.\n' +
      'EVIDENCE 1: This is demonstrated when "___ ", which suggests ___.\n' +
      'EVALUATION: This is [very / somewhat] effective because ___.\n' +
      'NUANCE: However, the writer also ___, which complicates this reading because ___.',
    sentenceStarters: [
      'I agree to a great extent that...',
      'I partially agree that...',
      'This is clearly demonstrated when...',
      'This technique is effective because...',
      'However, the writer also..., which complicates...',
      'On balance, the writer succeeds in... because...',
    ],
    connectives: ['however', 'on balance', 'to a great extent', 'partially', 'although', 'despite'],
    technicalVocabulary: ['evaluate', 'assess', 'extent', 'effectiveness', 'succeed', 'limitation', 'nuance'],
    modelSentence:
      'I agree to a great extent that the writer successfully creates a sense of danger in this extract. This is clearly demonstrated when the phrase "the ice groaned beneath him" uses personification to make the environment sound alive and hostile, which forces the reader to share the protagonist\'s fear. This technique is highly effective because sound is the most immediate of the senses, placing the reader viscerally inside the scene. However, the writer also uses long sentences in the preceding paragraph, which slows the pace and slightly dilutes the tension before this moment.',
    notes:
      'AO4 requires students to make a judgement and justify it. The "nuance" move -- partial disagreement or a complication -- is what separates Level 4 from Level 3. Use past papers to practise the statement prompt.',
  },

  {
    id: 'wf-igcse-lang-p2-article',
    title: 'IGCSE Language P2 Article Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'article',
    level: 'developing',
    frame:
      'HEADLINE: [Attention-grabbing headline]\n' +
      'STANDFIRST (optional): [One sentence summary]\n\n' +
      'OPENING HOOK: [Anecdote / Statistic / Rhetorical question]\n' +
      'PARAGRAPH 1 -- CONTEXT: The issue of ___ has become ___.\n' +
      'PARAGRAPH 2 -- ARGUMENT: There are compelling reasons why ___.\n' +
      'PARAGRAPH 3 -- COUNTER AND REBUTTAL: Some argue that ___. However, ___.\n' +
      'CLOSING CALL TO ACTION / THOUGHT: Ultimately, ___.',
    sentenceStarters: [
      'Every year, thousands of...',
      'The question of... has divided opinion for...',
      'There are compelling reasons to believe that...',
      'Critics may argue that..., however...',
      'The evidence is clear:...',
      'Ultimately, the choice we make now will...',
    ],
    connectives: ['however', 'moreover', 'despite this', 'crucially', 'ultimately', 'as a result'],
    technicalVocabulary: ['headline', 'standfirst', 'subheading', 'tone', 'register', 'audience', 'broadsheet', 'tabloid'],
    modelSentence:
      'Every year, millions of tonnes of food are discarded before they even reach a supermarket shelf -- not because they are unsafe, but because they are the wrong shape. The question of cosmetic food standards has divided farmers and retailers for decades, yet its resolution has never been more urgent.',
    notes:
      'P2 writing is marked on communication (AO5) and technical accuracy (AO6). Headlines must be punchy. Students should be taught to match register to the specified audience -- broadsheet vs. student magazine, for example.',
  },

  {
    id: 'wf-igcse-lang-p2-speech',
    title: 'IGCSE Language P2 Speech Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'speech',
    level: 'developing',
    frame:
      'OPENING ADDRESS: Good morning / afternoon, [audience].\n' +
      'HOOK: [Rhetorical question / Startling statement / Personal anecdote]\n' +
      'FIRST ARGUMENT: The first and most important point is ___.\n' +
      'SECOND ARGUMENT: Equally significant is ___.\n' +
      'THIRD ARGUMENT: Finally, consider ___.\n' +
      'CLOSING APPEAL: I urge you, [audience], to ___. Because ___.',
    sentenceStarters: [
      'Good morning/afternoon, [audience].',
      'Ask yourself this:...',
      'The first and most important point is...',
      'Equally significant is...',
      'I urge you to...',
      'Because, in the end,...',
    ],
    connectives: ['furthermore', 'most importantly', 'equally', 'finally', 'in conclusion', 'above all else'],
    technicalVocabulary: [
      'direct address',
      'rhetorical question',
      'rule of three',
      'anaphora',
      'emotive language',
      'inclusive pronoun',
      'logos',
      'ethos',
      'pathos',
    ],
    modelSentence:
      'Ask yourself this: when did you last go a full hour without looking at a screen? I suspect for most of us in this room, the honest answer is "I cannot remember". The first and most important point I want to make today is that our relationship with technology has shifted from tool to dependency -- and this shift has happened so gradually we have barely noticed.',
    notes:
      'Students must signal the speech format through direct address and spoken language features. A closing rhetorical appeal is expected by examiners for Level 4 AO5 marks.',
  },

  {
    id: 'wf-igcse-lang-p2-letter',
    title: 'IGCSE Language P2 Formal Letter Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'letter',
    level: 'developing',
    frame:
      '[Address]\n[Date]\n\nDear [Sir/Madam / Name],\n\n' +
      'PARAGRAPH 1 -- PURPOSE: I am writing to [express concern about / argue in favour of / respond to] ___.\n' +
      'PARAGRAPH 2 -- FIRST POINT: I would like to draw your attention to ___. Evidence suggests that ___.\n' +
      'PARAGRAPH 3 -- SECOND POINT: Furthermore, ___.\n' +
      'PARAGRAPH 4 -- REQUEST / CALL TO ACTION: I would therefore ask that you ___.\n\n' +
      'Yours sincerely / faithfully,\n[Name]',
    sentenceStarters: [
      'I am writing to draw your attention to...',
      'I would like to respectfully suggest that...',
      'The evidence clearly indicates that...',
      'I would therefore urge you to...',
      'I trust you will give this matter your serious consideration.',
    ],
    connectives: ['furthermore', 'in addition', 'however', 'therefore', 'as a consequence', 'I trust that'],
    technicalVocabulary: ['formal register', 'persuasive', 'salutation', 'sign-off', 'convention', 'tone', 'audience'],
    modelSentence:
      'I am writing to draw your attention to the dangerous condition of the footpath along Merton Road, which has been in a state of serious disrepair for over eighteen months. I would respectfully suggest that this matter has been overlooked for too long; the evidence of multiple near-accidents reported to the parish council speaks for itself.',
    notes:
      'Distinguish between "Yours sincerely" (when the recipient is named) and "Yours faithfully" (Dear Sir/Madam). This is a frequent error. Formal letters must use third-person evidence and avoid colloquial language.',
  },

  {
    id: 'wf-igcse-lang-p2-report',
    title: 'IGCSE Language P2 Report Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'report',
    level: 'secure',
    frame:
      'TITLE: Report on ___\n' +
      'PREPARED BY: ___  DATE: ___\n\n' +
      'INTRODUCTION\nThe purpose of this report is to ___. The findings are based on ___.\n\n' +
      'FINDINGS\n[Subheading 1]: ___.\n[Subheading 2]: ___.\n\n' +
      'CONCLUSION\nIn summary, the evidence suggests that ___.\n\n' +
      'RECOMMENDATIONS\nIt is recommended that ___.',
    sentenceStarters: [
      'The purpose of this report is to...',
      'The findings are based on...',
      'The data indicates that...',
      'In summary, the evidence suggests that...',
      'It is recommended that...',
      'A significant proportion of...',
    ],
    connectives: ['furthermore', 'however', 'as a result', 'in summary', 'it is therefore recommended that'],
    technicalVocabulary: ['objective', 'findings', 'recommendation', 'subheading', 'impersonal', 'passive voice', 'quantitative', 'qualitative'],
    modelSentence:
      'The purpose of this report is to examine student attitudes towards homework in Year 10 and to make recommendations to the school leadership team. The findings are based on a survey of eighty-three students conducted in March 2026. A significant proportion of respondents (67%) reported that they spent more than two hours per night on written tasks, yet felt that this volume did not translate into improved understanding.',
    notes:
      'Reports use an impersonal, objective register. Subheadings are expected and demonstrate structural control. The passive voice ("it is recommended") is appropriate here unlike in creative writing.',
  },

  {
    id: 'wf-igcse-lit-paragraph',
    title: 'IGCSE Literature Paragraph (AO1 + AO2 + AO3)',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'AO1 ARGUMENT: [Writer] presents ___ as ___ in order to ___.\n' +
      'AO2 LANGUAGE: Through the use of "___ ", the writer ___. The [word class] "___ " has connotations of ___, which ___.\n' +
      'AO2 STRUCTURE / FORM: This is reinforced by ___, which mirrors ___.\n' +
      'AO3 CONTEXT: This may reflect [historical/social/biographical context], as ___.',
    sentenceStarters: [
      '[Writer] presents... in order to...',
      'Through the use of "..."...',
      'The connotations of "..." convey...',
      'This is reinforced by the [structural feature]...',
      'Contextually, this reflects...',
      'A [contemporary / modern] reader might interpret this as...',
    ],
    connectives: ['through', 'this is reinforced by', 'contextually', 'in terms of structure', 'a modern reader might'],
    technicalVocabulary: [
      'AO1',
      'AO2',
      'AO3',
      'context',
      'form',
      'structure',
      'language',
      'connotation',
      'contemporary reader',
      'authorial intent',
    ],
    modelSentence:
      'Priestley presents Birling as complacent and self-deluding in order to satirise the capitalist class. Through the dramatic irony of the Titanic speech, the audience -- who know the ship sank -- immediately distrust Birling\'s certainty. The pompous cadence of "unsinkable, absolutely unsinkable" reinforces his refusal to consider fallibility. Contextually, Priestley was writing in 1945, and a post-war audience would recognise in Birling\'s hubris the very attitudes that had led Britain into two devastating wars.',
    notes:
      'Students must interweave AO1, AO2, and AO3 in every paragraph for the highest marks. Context must be relevant and analytical, not a separate historical paragraph at the start.',
  },

  {
    id: 'wf-igcse-poetry-comparison',
    title: 'IGCSE Poetry Comparison Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'comparative-essay',
    level: 'secure',
    frame:
      'OPENING COMPARISON: Both [Poem A] and [Poem B] explore the theme of ___, yet they approach it very differently.\n' +
      'POEM A ANALYSIS: In [Poem A], [poet] presents ___ through ___. The [word class] "___ " ___.\n' +
      'LINK TO POEM B: In contrast / Similarly, in [Poem B], [poet] ___. Whereas [Poem A] ___, [Poem B] ___.\n' +
      'SYNTHESIS: Both poets use ___, suggesting that ___.',
    sentenceStarters: [
      'Both [Poem A] and [Poem B] explore...',
      'In [Poem A], [poet] presents...',
      'In contrast, in [Poem B]...',
      'Whereas [Poem A]..., [Poem B]...',
      'Both poets use... to suggest...',
      'Ultimately, both poems...',
    ],
    connectives: ['whereas', 'in contrast', 'similarly', 'both poets', 'however', 'equally', 'by contrast'],
    technicalVocabulary: [
      'thematic link',
      'structural contrast',
      'tonal shift',
      'form',
      'free verse',
      'volta',
      'perspective',
      'voice',
    ],
    modelSentence:
      'Both "War Photographer" and "Remains" explore the psychological cost of bearing witness to violence, yet they approach this shared theme very differently. In "War Photographer", Duffy uses the extended metaphor of the darkroom as a space of moral reckoning, with the verb "dissolves" suggesting that the photographer\'s certainties break down as the images develop. In contrast, Armitage uses colloquial language in "Remains" to present trauma as banal and inescapable; the casual tone makes the horror more, not less, disturbing. Both poets use the present tense at key moments, suggesting that traumatic memory refuses to remain in the past.',
    notes:
      'For Edexcel IGCSE Literature, poetry comparison is a key examination skill. Students should embed comparison throughout each paragraph rather than writing about each poem separately.',
  },

  {
    id: 'wf-igcse-extract-analysis',
    title: 'IGCSE Extract Analysis Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'secure',
    frame:
      'OVERVIEW: In this extract, [writer] focuses on ___ and creates a mood of ___.\n' +
      'OPENING: At the start of the extract, ___ is established through ___.\n' +
      'DEVELOPMENT: As the extract progresses, the writer shifts to ___, using "___ " to suggest ___.\n' +
      'CLIMAX / TURNING POINT: The most significant moment in the extract is ___, where "___ " implies ___.\n' +
      'WHOLE-TEXT LINK: This extract is significant to the whole text because ___.',
    sentenceStarters: [
      'In this extract, [writer] focuses on...',
      'At the start of the extract...',
      'As the extract progresses...',
      'The most significant moment in the extract is...',
      'This extract is significant to the whole text because...',
    ],
    connectives: ['as the extract progresses', 'this shifts to', 'at this point', 'crucially', 'in the context of the whole text'],
    technicalVocabulary: ['extract', 'focus', 'development', 'turning point', 'foreshadowing', 'dramatic irony', 'whole text'],
    modelSentence:
      'In this extract, Dickens focuses on Scrooge\'s first encounter with the Ghost of Christmas Past and creates a mood of uneasy wonder. At the start, the childlike description of the spirit -- "like a child: yet not so like a child as like an old man" -- establishes a disorienting ambiguity that prepares Scrooge, and the reader, for the disorientation of memory. As the extract progresses, Scrooge\'s emotional resistance softens, marked by the shift from short, guarded sentences to the longer, more breathless syntax of his recognition of his younger self.',
    notes:
      'Extract questions require students to track movement through the passage, not just comment on single moments. The "whole-text link" is essential for the highest band responses.',
  },

  {
    id: 'wf-igcse-context-integration',
    title: 'IGCSE Context Integration Frame',
    yearGroup: 'Y10-Y11',
    taskType: 'analytical-paragraph',
    level: 'independent',
    frame:
      'CONTEXTUAL LENS: [Writer], writing in [year/period], was responding to ___.\n' +
      'TEXTUAL EVIDENCE: This is reflected in the text when "___ ", suggesting ___.\n' +
      'DUAL AUDIENCE: A contemporary audience would have read this as ___. A modern reader, however, might interpret this differently, as ___.\n' +
      'EVALUATIVE CONCLUSION: This contextual awareness enriches the text because ___.',
    sentenceStarters: [
      '[Writer], writing in [year/period], was acutely aware of...',
      'This social/historical context is reflected in...',
      'A contemporary audience would have recognised...',
      'A modern reader might read this more critically, as...',
      'This dual reading enriches the text because...',
    ],
    connectives: ['however', 'in contrast', 'when viewed through a modern lens', 'this contextual background', 'enriched by'],
    technicalVocabulary: [
      'Edwardian',
      'Victorian',
      'post-war',
      'contemporary reader',
      'modern reader',
      'social context',
      'political context',
      'biographical context',
    ],
    modelSentence:
      'Priestley, writing in 1945, was acutely aware that his audience had just lived through the consequences of class complacency and moral blindness. The Birlings\' refusal to accept collective responsibility for Eva Smith directly reflects the failures of the pre-war establishment that Priestley held responsible for the social catastrophes of the twentieth century. A contemporary 1945 audience would have recognised in Birling the type of man whose attitudes had contributed to national disaster. A modern reader might interpret Sheila\'s arc more optimistically, as a model for the possibility of genuine moral education across generational lines.',
    notes:
      'Context integration at this level requires comparison between contemporary and modern reader responses. Avoid context as a standalone paragraph -- it must always be tied to a specific textual moment.',
  },

  // --- IAL FRAMES (5) ---

  {
    id: 'wf-ial-data-analysis',
    title: 'IAL Data Analysis Paragraph',
    yearGroup: 'Y12-Y13',
    taskType: 'ial-data-essay',
    level: 'secure',
    frame:
      'DATA OBSERVATION: The data shows that ___. This is evident from [source/table/figure], which indicates ___.\n' +
      'SIGNIFICANCE: This finding is significant because ___.\n' +
      'INTERPRETATION: One possible interpretation is that ___. This suggests ___.\n' +
      'LIMITATION / COMPLICATION: However, this data must be treated with caution because ___.\n' +
      'LINK TO THEORY: This is consistent with [theory/concept], which argues that ___.',
    sentenceStarters: [
      'The data shows that...',
      'According to [Figure/Table]...',
      'This finding is significant because...',
      'One possible interpretation of this data is...',
      'However, this data must be treated with caution because...',
      'This is consistent with [theoretical concept], which suggests...',
    ],
    connectives: [
      'however',
      'this suggests',
      'one possible interpretation',
      'this is consistent with',
      'in contrast',
      'nevertheless',
      'it should be noted that',
    ],
    technicalVocabulary: [
      'quantitative data',
      'qualitative data',
      'correlation',
      'causation',
      'sample size',
      'validity',
      'reliability',
      'bias',
      'statistical significance',
      'trend',
    ],
    modelSentence:
      'The data shows a strong correlation between parental income and attainment at age sixteen. According to Figure 2, students in the lowest income quintile achieved an average of 4.2 GCSE grade points, compared to 6.8 for the highest quintile. This finding is significant because it suggests that material disadvantage directly constrains educational outcomes. However, this data must be treated with caution because correlation does not imply causation: other variables, including school quality and cultural capital, may account for much of the variance.',
    notes:
      'IAL students must demonstrate the ability to interrogate data critically, not merely describe it. The "limitation" move is essential for A-grade responses. Link to Bourdieu, Bernstein, or relevant sociological theory as appropriate.',
  },

  {
    id: 'wf-ial-discursive-essay',
    title: 'IAL Discursive Essay Structure',
    yearGroup: 'Y12-Y13',
    taskType: 'ial-data-essay',
    level: 'independent',
    frame:
      'INTRODUCTION:\n' +
      '  - Define key terms: "For the purposes of this essay, ___ is understood as ___.".\n' +
      '  - Signpost argument: "This essay will argue that ___, although it will also consider ___.".\n\n' +
      'BODY PARAGRAPH (repeat per argument):\n' +
      '  - Claim: "It can be argued that ___.".\n' +
      '  - Evidence/Example: "This is supported by ___.".\n' +
      '  - Critical engagement: "However, this view is complicated by ___.".\n\n' +
      'CONCLUSION:\n' +
      '  - Synthesis: "The weight of evidence suggests ___.".\n' +
      '  - Qualification: "Nevertheless, the question of ___ remains open because ___.".',
    sentenceStarters: [
      'For the purposes of this essay, ... is understood as...',
      'This essay will argue that..., although it will also consider...',
      'It can be argued that...',
      'This is supported by the work of [scholar/theorist]...',
      'However, this view is complicated by...',
      'The weight of evidence suggests...',
      'Nevertheless, the question of... remains open because...',
    ],
    connectives: [
      'however',
      'conversely',
      'on the other hand',
      'notwithstanding this',
      'the weight of evidence suggests',
      'it can be argued',
      'a more nuanced position would be',
    ],
    technicalVocabulary: [
      'thesis',
      'antithesis',
      'synthesis',
      'discursive',
      'hedged claim',
      'scholarly consensus',
      'contested',
      'nuance',
      'epistemology',
    ],
    modelSentence:
      'For the purposes of this essay, "identity" is understood as a dynamic and socially constructed sense of self, shaped by factors including class, gender, ethnicity, and language. This essay will argue that identity is primarily formed through interpersonal interaction rather than fixed biological attributes, although it will also consider the extent to which structural forces constrain individual agency in identity formation.',
    notes:
      'IAL discursive essays require a clear thesis, engagement with counter-arguments, and a qualified conclusion. Students must demonstrate critical thinking, not just knowledge recall. Hedged language is a mark of academic sophistication at this level.',
  },

  {
    id: 'wf-ial-commentary',
    title: 'IAL Commentary Paragraph',
    yearGroup: 'Y12-Y13',
    taskType: 'ial-commentary',
    level: 'secure',
    frame:
      'IDENTIFICATION: In this passage/poem, the writer employs [technique] ___.\n' +
      'CLOSE READING: The [word class] "___ " ___. Its [phonological/syntactic/semantic] qualities create ___.\n' +
      'INTERPRETATION: This can be interpreted as ___, suggesting ___.\n' +
      'ALTERNATIVE READING: An alternative interpretation would position "___ " as ___, which would suggest ___.\n' +
      'CRITICAL CONTEXT: This is consistent with [critic/theoretical framework], who argues ___.',
    sentenceStarters: [
      'In this passage, the writer employs...',
      'The [word class] "..." demonstrates...',
      'Its [phonological/syntactic/semantic] qualities create...',
      'This can be interpreted as...',
      'An alternative reading would position this as...',
      'This reading is supported by [critic/framework], who argues...',
    ],
    connectives: [
      'however',
      'alternatively',
      'this is supported by',
      'in the context of',
      'it is equally plausible that',
      'a post-colonial / feminist / Marxist reading might suggest',
    ],
    technicalVocabulary: [
      'semantic field',
      'syntactic parallelism',
      'phonological patterning',
      'diegesis',
      'intertextuality',
      'irony',
      'ambiguity',
      'polysemy',
      'deconstruction',
    ],
    modelSentence:
      'In this passage, Woolf employs free indirect discourse to blur the boundary between narrator and character. The fragmented syntax of "But nothing was simply one thing" resists closure, with its paratactic structure suggesting a consciousness that cannot resolve contradictions. This can be interpreted as Woolf\'s challenge to the Modernist demand for unified meaning. An alternative reading would position this ambiguity as a specifically feminist critique of singular, authoritative narrative voice -- a voice historically gendered as male.',
    notes:
      'IAL commentaries require multi-layered close reading with alternative interpretations and engagement with critical frameworks. Students at this level should be familiar with at least two critical approaches (e.g. feminist, post-colonial, Marxist, psychoanalytic) and deploy them selectively.',
  },

  {
    id: 'wf-ial-investigation-findings',
    title: 'IAL Investigation Findings Section',
    yearGroup: 'Y12-Y13',
    taskType: 'ial-data-essay',
    level: 'independent',
    frame:
      'FINDINGS INTRODUCTION: The investigation sought to explore ___. The following findings address this research question.\n\n' +
      'FINDING 1: [Subheading] -- The analysis revealed that ___. This is illustrated by [data/example], which ___.\n' +
      'FINDING 2: [Subheading] -- A further finding was that ___. In particular, ___.\n' +
      'UNEXPECTED FINDING (if applicable): An unexpected outcome of the investigation was ___. This may indicate ___.\n\n' +
      'CRITICAL REFLECTION: The methodology used in this investigation had certain limitations, including ___. Future research might address this by ___.',
    sentenceStarters: [
      'The investigation sought to explore...',
      'The analysis revealed that...',
      'This is illustrated by...',
      'A further finding was that...',
      'An unexpected outcome of the investigation was...',
      'This may indicate that...',
      'The methodology had certain limitations, including...',
      'Future research might address this by...',
    ],
    connectives: [
      'furthermore',
      'in addition',
      'however',
      'this may indicate',
      'a notable exception was',
      'it is also worth noting that',
    ],
    technicalVocabulary: [
      'research question',
      'methodology',
      'primary data',
      'secondary data',
      'variable',
      'finding',
      'limitation',
      'validity',
      'reflexivity',
      'triangulation',
    ],
    modelSentence:
      'The investigation sought to explore how code-switching functions in bilingual adolescent speech communities. The analysis revealed that code-switching was used strategically to signal group membership and exclude outsiders, consistent with Gumperz\'s concept of conversational code-switching. An unexpected finding was the extent to which code-switching also occurred in private journaling, suggesting that the phenomenon is not purely socially performative but may also serve an internal, identity-consolidating function.',
    notes:
      'IAL independent investigations (NEA/coursework) require both empirical reporting and critical reflection on methodology. Students should be taught to treat limitations as a sign of intellectual rigour, not failure.',
  },

  {
    id: 'wf-ial-academic-conclusion',
    title: 'IAL Academic Conclusion Frame',
    yearGroup: 'Y12-Y13',
    taskType: 'ial-data-essay',
    level: 'independent',
    frame:
      'RESTATE THESIS (refined): This essay has argued that ___. The evidence examined supports this position because ___.\n' +
      'ACKNOWLEDGE COMPLEXITY: Nevertheless, the issue is complicated by ___. A fully satisfactory account would need to address ___.\n' +
      'CRITICAL SYNTHESIS: The most convincing position is ___, since it accounts for ___ while also acknowledging ___.\n' +
      'BROADER SIGNIFICANCE: Ultimately, this question matters because ___, and future scholarship might productively examine ___.',
    sentenceStarters: [
      'This essay has argued that...',
      'The evidence examined supports this position because...',
      'Nevertheless, the issue is complicated by...',
      'A fully satisfactory account would need to address...',
      'The most convincing position is...',
      'Ultimately, this question matters because...',
      'Future scholarship might productively examine...',
    ],
    connectives: [
      'nevertheless',
      'notwithstanding',
      'on balance',
      'a more nuanced position would acknowledge',
      'ultimately',
      'the most convincing position',
      'future scholarship',
    ],
    technicalVocabulary: [
      'thesis',
      'synthesis',
      'nuance',
      'qualified',
      'scholarly debate',
      'epistemological',
      'paradigm',
      'complexity',
      'implications',
    ],
    modelSentence:
      'This essay has argued that linguistic determinism, in its strong form, is untenable. The evidence examined -- from bilingual studies, sign language acquisition, and colour perception research -- consistently suggests that thought can proceed without language, even if language shapes certain cognitive tendencies. Nevertheless, the issue is complicated by the difficulty of studying prelinguistic thought empirically. The most convincing position is a weak relativity thesis: language influences the habitual pathways of thought without determining its absolute limits. Ultimately, this question matters because it underpins debates about translation, cultural understanding, and the extent to which shared language is necessary for shared reality.',
    notes:
      'The IAL academic conclusion must go beyond summary. The "broader significance" move demonstrates that the student understands why the argument matters -- this is what separates A from A*. Avoid concluding with "In conclusion, I have shown that..." as an opening -- restate the refined argument directly.',
  },
];
