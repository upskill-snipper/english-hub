// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'language-devices',
  title: 'Language Devices & Stylistic Features',
  description: 'Language devices and stylistic features for analysis',
  category: 'Devices',
  board: 'All',
  cards: [
    {
      id: 'ld-1',
      front: 'Rhetoric (Art of Persuasion)',
      back: `Definition: The art of using language effectively to persuade, inform, or move an audience.\n\nRhetorical Devices:\n• Ethos: Appeals to credibility or character\n• Pathos: Appeals to emotion\n• Logos: Appeals to logic or reason\n• Rhetorical questions: Questions asked for effect, not answer\n\nAnalyse: What persuasive techniques does writer use? How does language aim to persuade?`,
    },
    {
      id: 'ld-2',
      front: 'Antithesis',
      back: `Definition: The juxtaposition of contrasting ideas in parallel structure.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates emphasis through contrast; makes ideas memorable; suggests complexity\n\nAnalyse: Where is antithesis used? What contrasts are emphasised? How does it strengthen meaning?`,
    },
    {
      id: 'ld-3',
      front: 'Anaphora',
      back: `Definition: The repetition of words or phrases at the beginning of successive clauses or sentences.\n\nExample: "Go forward, go backward, go upside down, go inside out"\n\nEffect: Creates rhythm and emphasis; builds power; makes lists memorable\n\nAnalyse: What phrase is repeated? How does anaphora affect emphasis and sound?`,
    },
    {
      id: 'ld-4',
      front: 'Epistrophe',
      back: `Definition: The repetition of words or phrases at the end of successive clauses or sentences.\n\nExample: "We are a people; all people are we"\n\nEffect: Creates rhythm; emphasises the repeated word; creates closure\n\nAnalyse: What phrase ends the clauses? How does it affect emphasis and unity?`,
    },
    {
      id: 'ld-5',
      front: 'Chiasmus',
      back: `Definition: A reversal of grammatical structures in successive phrases to create balance and emphasis.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates symmetry and balance; makes statement memorable; suggests complexity\n\nAnalyse: What structures are reversed? How does reversal create meaning?`,
    },
    {
      id: 'ld-6',
      front: 'Litotes',
      back: `Definition: A deliberate understatement that affirms something by denying its opposite.\n\nExample: "He\'s no fool" (means he\'s intelligent); "It\'s not bad" (means it\'s good)\n\nEffect: Creates subtle emphasis; can be ironic or polite; creates humor\n\nAnalyse: What is asserted through negation? How does this affect tone?`,
    },
    {
      id: 'ld-7',
      front: 'Rhetorical Question',
      back: `Definition: A question asked for effect, not expecting an answer - asked to make a point.\n\nExample: "Would anyone support this proposal?" (suggesting no one would)\n\nEffect: Engages reader; makes point more emphatic than direct statement; invites reader agreement\n\nAnalyse: What point does the rhetorical question make? Why is question more effective than statement?`,
    },
    {
      id: 'ld-8',
      front: 'Metonymy',
      back: `Definition: A figure of speech where one thing is referred to by the name of something associated with it.\n\nExample: "The White House announced..." (means the President/staff, not the building)\n\nEffect: Creates conciseness; suggests connections; can be poetic or ordinary\n\nAnalyse: What substitution is made? What is the connection between the two things?`,
    },
    {
      id: 'ld-9',
      front: 'Synecdoche',
      back: `Definition: A figure of speech where a part represents the whole or vice versa.\n\nExample: "All hands on deck" (hands = sailors); "Hollywood loves scandal" (Hollywood = the film industry)\n\nEffect: Creates conciseness; can be poetic; emphasises particular aspect\n\nAnalyse: What part represents whole or whole represents part? Why this choice?`,
    },
    {
      id: 'ld-10',
      front: 'Litotes',
      back: `Definition: Understatement for ironic or emphatic effect, often using negative construction.\n\nExample: "That\'s not bad" (good); "She\'s no idiot" (intelligent)\n\nEffect: Creates subtlety; can be polite or sarcastic; makes reader infer full meaning\n\nAnalyse: What is understated? How does understatement affect tone?`,
    },
    {
      id: 'ld-11',
      front: 'Allusion',
      back: `Definition: An indirect reference to another work, person, event, or idea.\n\nHow Writers Use It:\n• Dickens alludes to biblical stories\n• Enriches text for educated readers\n• Connects text to broader culture\n\nEffect: Adds layers of meaning; rewards careful reading; suggests author\'s influences\n\nAnalyse: What is alluded to? What does the allusion add to meaning?`,
    },
    {
      id: 'ld-12',
      front: 'Colloquialism',
      back: `Definition: Informal, conversational language or expressions typical of everyday speech.\n\nExample: "gonna," "sorta," "y\'all," "What\'s up?"\n\nEffect: Creates informal tone; makes characters seem realistic; builds reader rapport\n\nAnalyse: Where is colloquial language used? How does it affect characterisation and tone?`,
    },
    {
      id: 'ld-13',
      front: 'Jargon',
      back: `Definition: Specialized vocabulary particular to a profession, activity, or group.\n\nExample: Legal jargon ("defendant," "plaintiff"); medical jargon ("cardiac arrest")\n\nEffect: Creates authenticity in particular fields; can exclude those unfamiliar; signals expertise\n\nAnalyse: What jargon appears? How does it affect credibility and accessibility?`,
    },
    {
      id: 'ld-14',
      front: 'Cliché',
      back: `Definition: An overused phrase or idea that has lost its originality and impact.\n\nExample: "Crystal clear," "at the end of the day," "it is what it is"\n\nEffect: Can indicate lazy writing; sometimes used intentionally for irony or characterisation\n\nAnalyse: Where are clichés used? Are they used intentionally or accidentally? How do they affect writing quality?`,
    },
    {
      id: 'ld-15',
      front: 'Idiom',
      back: `Definition: A phrase or expression whose meaning cannot be understood from the individual words - meaning is conveyed as a whole.\n\nExample: "Break the ice" (not literally break ice, but start conversation); "Cost an arm and a leg" (very expensive)\n\nEffect: Creates authentic language; shows cultural knowledge; can be humorous\n\nAnalyse: What idioms appear? How do they reveal character or cultural context?`,
    },
    {
      id: 'ld-16',
      front: 'Understatement vs. Overstatement',
      back: `Definition:\n• Understatement (litotes/meiosis): Making something seem less significant\n• Overstatement (hyperbole): Making something seem more significant\n\nEffect of Understatement: Creates dry humor, irony, subtlety\n\nEffect of Overstatement: Emphasises emotion, importance, or absurdity\n\nAnalyse: How do these techniques contrast? What effect does each create?`,
    },
    {
      id: 'ld-17',
      front: 'Concrete Language',
      back: `Definition: Language that refers to specific, tangible things that can be perceived by the senses.\n\nExample: "The red apple" vs. "the fruit"; "the cold winter wind" vs. "bad weather"\n\nEffect: Creates vivid imagery; makes writing memorable; engages reader\n\nAnalyse: How does concrete language enhance the writing? What specific details does writer include?`,
    },
    {
      id: 'ld-18',
      front: 'Abstract Language',
      back: `Definition: Language that refers to ideas, concepts, or qualities that cannot be perceived by the senses.\n\nExample: "justice," "beauty," "love," "freedom"\n\nEffect: Communicates ideas and concepts; can be poetic or philosophical; requires interpretation\n\nAnalyse: What abstract concepts appear? How does abstract language serve the theme?`,
    },
    {
      id: 'ld-19',
      front: 'Denotation vs. Connotation',
      back: `Definition:\n• Denotation: The literal, dictionary definition of a word\n• Connotation: The emotional or cultural associations of a word\n\nExample: "Thin" (denotation) vs. "skinny" (negative) vs. "slender" (positive)\n\nAnalyse: What are the connotations of key words? How do connotations shape meaning?`,
    },
    {
      id: 'ld-20',
      front: 'Semantic Field',
      back: `Definition: A group of related words that cluster around a concept or theme.\n\nExample: Words related to "death": expired, departed, passed away, deceased, perished\n\nEffect: Creates atmosphere; emphasises theme; shows language choices\n\nAnalyse: What semantic fields dominate the text? What do they suggest about themes?`,
    },
    {
      id: 'ld-21',
      front: 'Archaic Language',
      back: `Definition: Words or expressions that are old-fashioned and no longer in common use.\n\nExample: "Thou," "thee," "hath," "forsooth," "prithee"\n\nEffect: Creates period feeling; sounds formal or elevated; can be comic or serious\n\nAnalyse: Where is archaic language used? How does it affect tone and setting?`,
    },
    {
      id: 'ld-22',
      front: 'Neologism',
      back: `Definition: A newly created word or expression, or an old word used in a new way.\n\nExample: "Selfie," "binge-watch," "email" (once new, now common)\n\nEffect: Creates modernity; can be creative or playful; may confuse unfamiliar readers\n\nAnalyse: What new words are used? Why did the writer create or use them?`,
    },
    {
      id: 'ld-23',
      front: 'Pun',
      back: `Definition: A play on words that exploits multiple meanings or similar sounds.\n\nExample: "Time flies like an arrow; fruit flies like a banana"\n\nEffect: Creates wordplay and humour; shows wit; can be groan-worthy\n\nAnalyse: What words are used in multiple ways? How effective is the pun?`,
    },
    {
      id: 'ld-24',
      front: 'Oxymoron',
      back: `Definition: A combination of contradictory or opposite terms placed together.\n\nExample: "Sweet sorrow," "deafening silence," "cruel kindness"\n\nEffect: Creates paradox; suggests complexity; can be poetic or humorous\n\nAnalyse: What contradictions are combined? What does this suggest about the situation?`,
    },
    {
      id: 'ld-25',
      front: 'Paradox',
      back: `Definition: A statement that seems self-contradictory but may reveal a truth.\n\nExample: "The only way to gain freedom is to lose yourself"\n\nEffect: Makes reader think; suggests life is complex; reveals deeper truth\n\nAnalyse: What contradiction is presented? What truth might it reveal?`,
    },
    {
      id: 'ld-26',
      front: 'Antonym',
      back: `Definition: A word with the opposite meaning of another word.\n\nExample: Hot/cold, love/hate, beginning/end\n\nHow Writers Use It:\n• Create contrast; emphasise differences; clarify meanings\n\nAnalyse: What opposites are presented? How does opposition create meaning?`,
    },
    {
      id: 'ld-27',
      front: 'Synonym',
      back: `Definition: A word with the same or nearly the same meaning as another word.\n\nExample: Happy/joyful, sad/melancholy, run/sprint\n\nHow Writers Use It:\n• Vary vocabulary; avoid repetition; find precise nuances of meaning\n\nAnalyse: Why does writer choose particular synonyms? What nuances are created?`,
    },
    {
      id: 'ld-28',
      front: 'Onomatopoeia',
      back: `Definition: A word that imitates the sound it represents.\n\nExample: "Buzz," "hiss," "crack," "splash," "meow"\n\nEffect: Creates vivid sensory experience; makes writing dynamic; engages reader\n\nAnalyse: What sounds are imitated? How does onomatopoeia enhance the writing?`,
    },
    {
      id: 'ld-29',
      front: 'Cacophony',
      back: `Definition: A combination of harsh, discordant sounds that create an unpleasant auditory effect.\n\nHow Writers Use It:\n• Harsh consonants: k, b, g, hard c\n• Short syllables and abrupt stops\n• Creates sense of difficulty, danger, or ugliness\n\nEffect: Creates discomfort; emphasises discord or conflict\n\nAnalyse: What harsh sounds dominate? How does this affect mood?`,
    },
    {
      id: 'ld-30',
      front: 'Euphony',
      back: `Definition: A combination of pleasant-sounding words that flow smoothly together.\n\nHow Writers Use It:\n• Soft consonants: s, f, l, soft c\n• Flowing vowels; longer syllables\n• Creates sense of beauty, calm, or ease\n\nEffect: Creates pleasure; emphasises beauty or peace\n\nAnalyse: What pleasant sounds dominate? How does this affect mood?`,
    },
    {
      id: 'ld-31',
      front: 'Transferred Epithet',
      back: `Definition: An adjective is grammatically applied to one noun but logically applies to another.\n\nExample: "A restless sleep" (the sleep is not restless; the sleeper is); "anxious hours" (hours are not anxious; the person is)\n\nEffect: Creates poetic effect; emphasises emotional state; can be subtle\n\nAnalyse: What epithet is transferred? What is the logical association?`,
    },
    {
      id: 'ld-32',
      front: 'Zeugma',
      back: `Definition: A word applies to multiple parts of a sentence in different ways (literally and figuratively, or in different senses).\n\nExample: "He lost his temper and his keys"; "She broke his heart and the vase"\n\nEffect: Creates wit or humor; can be subtle; engages reader\n\nAnalyse: How is the word used in multiple ways? What is the effect of this double usage?`,
    },
    {
      id: 'ld-33',
      front: 'Ellipsis (Omission)',
      back: `Definition: The deliberate omission of words from a sentence that the reader can infer from context.\n\nExample: "I like coffee; she [likes] tea" OR "The room was dark, [the] silence absolute"\n\nEffect: Creates conciseness; speeds pacing; can create poetic effect\n\nAnalyse: What is omitted? How does omission change the reading experience?`,
    },
    {
      id: 'ld-34',
      front: 'Antithetical Parallelism',
      back: `Definition: Parallel structure used with opposite or contrasting ideas.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country"\n\nEffect: Creates balance and emphasis; makes statement memorable; highlights contrast\n\nAnalyse: What parallel structures contain opposite meanings? How does this create emphasis?`,
    },
    {
      id: 'ld-35',
      front: 'Bathos',
      back: `Definition: A sudden shift from elevated language or ideas to trivial or commonplace ones, creating anticlimax.\n\nExample: "He left the company to pursue his passion: watching television"\n\nEffect: Can create humor (intentional) or show poor writing (unintentional); highlights disappointment\n\nAnalyse: Where does elevation drop to triviality? Is it intentional humor or poor writing?`,
    },
    {
      id: 'ld-36',
      front: 'Malapropism',
      back: `Definition: The mistaken use of a word in place of a similar-sounding word, usually with unintentionally humorous effect.\n\nExample: "Texas has a lot of electrical votes" (instead of "electoral")\n\nEffect: Creates humor; can reveal character\'s education or intellect; can be comic relief\n\nAnalyse: What words are confused? What does this reveal about the character?`,
    },
    {
      id: 'ld-37',
      front: 'Alliteration (Consonance)',
      back: `Definition: The repetition of the same beginning consonant sound in words that are close together.\n\nExample: "The fair field was full of folk"; "Sally sells seashells"\n\nEffect: Creates musical quality; emphasises words; makes memorable\n\nAnalyse: What sounds are repeated? How does alliteration affect rhythm and meaning?`,
    },
    {
      id: 'ld-38',
      front: 'Assonance (Vowel Harmony)',
      back: `Definition: The repetition of vowel sounds in nearby words.\n\nExample: "The silky, shimmering scene"; "The light might ignite tonight"\n\nEffect: Creates flow and music; links words thematically; affects mood\n\nAnalyse: What vowel sounds are repeated? How does assonance affect sound and mood?`,
    },
    {
      id: 'ld-39',
      front: 'Consonance',
      back: `Definition: The repetition of consonant sounds within or at the end of words, creating internal rhyme.\n\nExample: "Back to black"; "The mutt struts"\n\nEffect: Creates rhythm; links words; can be subtle\n\nAnalyse: What consonant patterns appear? How do they connect ideas?`,
    },
    {
      id: 'ld-40',
      front: 'Sestina',
      back: `Definition: A complex poetic form with six six-line stanzas and a three-line envoi, using word repetition instead of rhyme.\n\nStructure: Six end words repeat in a strict pattern.\n\nEffect: Creates elaborate, musical structure; emphasises certain words; demands skilled execution\n\nAnalyse: What six words are repeated? How do repetitions create meaning?`,
    },
    {
      id: 'ld-41',
      front: 'Pantoum',
      back: `Definition: A poetic form with interlocking stanzas where lines repeat in a pattern, building meaning through repetition.\n\nStructure: Each stanza repeats two lines from the previous stanza.\n\nEffect: Creates circular, hypnotic effect; emphasises certain lines; builds meaning through return\n\nAnalyse: How do lines repeat? What effect does the repetition create?`,
    },
    {
      id: 'ld-42',
      front: 'Free Verse',
      back: `Definition: Poetry without regular meter, rhyme, or strict stanzaic form - freedom from formal constraints.\n\nHow Writers Use It:\n• No set pattern; lines break based on meaning\n• Natural speech patterns\n• Emphasises individual words and ideas\n\nEffect: Feels modern or liberated; emphasises content over form; can feel fragmentary\n\nAnalyse: How do line breaks create meaning? Why did poet choose free verse?`,
    },
    {
      id: 'ld-43',
      front: 'Blank Verse',
      back: `Definition: Poetry written in unrhymed iambic pentameter (ten syllables per line, alternating unstressed/stressed).\n\nHow Writers Use It:\n• Shakespeare uses blank verse in dramas\n• Milton uses it in Paradise Lost\n• Formal but flexible\n\nEffect: Creates rhythm without constraining meaning; feels elevated\n\nAnalyse: How does iambic pentameter affect the reading? What effect does lack of rhyme create?`,
    },
    {
      id: 'ld-44',
      front: 'Rhyme Scheme',
      back: `Definition: The pattern of rhymes at the ends of lines, typically marked with letters (ABAB, AABB, etc.).\n\nCommon Schemes:\n• ABAB: Alternate rhyme (creates alternating rhythm)\n• AABB: Couplets (creates paired rhythm)\n• ABBA: Enclosed rhyme (creates circling effect)\n\nEffect: Creates music; unifies stanzas; affects pacing\n\nAnalyse: What is the rhyme scheme? How does it affect the poem\'s sound and structure?`,
    },
    {
      id: 'ld-45',
      front: 'Internal Rhyme',
      back: `Definition: Rhyme that occurs within a line or between nearby lines, rather than just at the ends.\n\nExample: "The fair-haired flare of light"; "Once upon a midnight dreary, while I pondered, weary"\n\nEffect: Creates musicality within lines; emphasises words; can feel forced if overdone\n\nAnalyse: Where do internal rhymes occur? How do they enhance sound and meaning?`,
    },
    {
      id: 'ld-46',
      front: 'Slant Rhyme (Near Rhyme)',
      back: `Definition: Words that are similar but not identical in sound, creating approximate rather than perfect rhyme.\n\nExample: "Home/come," "soul/oil," "Dulles/dells"\n\nEffect: Creates flexibility; sounds more natural than perfect rhyme; can emphasise subtle connections\n\nAnalyse: What near-rhymes appear? Why might poet choose approximate over perfect rhyme?`,
    },
    {
      id: 'ld-47',
      front: 'Eye Rhyme',
      back: `Definition: Words that look like they rhyme (similar spelling) but do not sound alike.\n\nExample: "Cough/though," "love/move," "heard/beard"\n\nEffect: Can create intentional discord; shows written language vs. spoken; can be comic\n\nAnalyse: What words look like they should rhyme? What is the effect of this visual trick?`,
    },
    {
      id: 'ld-48',
      front: 'Iambic Pentameter',
      back: `Definition: A metrical pattern with ten syllables per line, with unstressed/stressed pairs (iambs), so pattern is da-DUM da-DUM da-DUM da-DUM da-DUM.\n\nExample: "So LONG as MEN can BREATHE or EYES can SEE, / So LONG lives THIS, and THIS gives LIFE to THEE"\n\nEffect: Creates natural rhythm; feels elevated; the default for English poetry\n\nAnalyse: How many feet per line? Does writer strictly follow the meter or vary it?`,
    },
    {
      id: 'ld-49',
      front: 'Trochaic Meter',
      back: `Definition: A metrical pattern where stressed/unstressed pairs (trochees) dominate: DUM-da DUM-da DUM-da.\n\nExample: "TELL me NOT in MOURNFUL NUM-bers"\n\nEffect: Creates bouncy, energetic rhythm; feels different from iambic; can feel archaic\n\nAnalyse: What is the stressed/unstressed pattern? How does trochaic meter affect the poem\'s pace?`,
    },
    {
      id: 'ld-50',
      front: 'Dactylic Meter',
      back: `Definition: A metrical pattern where stressed/unstressed/unstressed triads (dactyls) dominate: DUM-da-da DUM-da-da.\n\nExample: "MERRILY we ROLL along"\n\nEffect: Creates falling rhythm; feels musical; often used in light or epic verse\n\nAnalyse: What is the stressed/unstressed pattern? How does dactylic meter affect tone?`,
    },
    {
      id: 'ld-51',
      front: 'Spondee',
      back: `Definition: A metrical foot with two consecutive stressed syllables: DUM-DUM.\n\nExample: "War drums" in iambic verse\n\nEffect: Creates emphasis; breaks regular meter; slows pacing\n\nAnalyse: Where do spondees interrupt regular meter? What effect do they create?`,
    },
    {
      id: 'ld-52',
      front: 'Pyrrhic (Dibrach)',
      back: `Definition: A metrical foot with two consecutive unstressed syllables: da-da.\n\nExample: "Of the" in iambic meter\n\nEffect: Creates lightness; speeds pacing; can weaken emphasis\n\nAnalyse: Where do pyrrhic feet appear? How do they affect the meter\'s flow?`,
    },
    {
      id: 'ld-53',
      front: 'Stress (Accent)',
      back: `Definition: The emphasis placed on a syllable in a word or line; the natural loudness or prominence of a syllable.\n\nHow Stress Works:\n• Some syllables are naturally stressed (PER-fect)\n• In poetry, stress creates meter and emphasis\n• Can change meaning (LEAD vs. lead)\n\nAnalyse: Which syllables are stressed? How does stress pattern create meaning?`,
    },
    {
      id: 'ld-54',
      front: 'Caesura (Pause)',
      back: `Definition: A pause within a line of poetry, usually marked by punctuation.\n\nExample: "With death, the morning came" - pause after "death"\n\nEffect: Creates rhythm and emphasis; forces reflection; adds weight to words around it\n\nAnalyse: Where do caesuras occur? What do they emphasise? How do they affect pacing?`,
    },
    {
      id: 'ld-55',
      front: 'Enjambment',
      back: `Definition: The continuation of a grammatical phrase or clause beyond the end of a line or stanza.\n\nExample: "The world is not\nenough" - thought continues across line break\n\nEffect: Creates flow; speeds reading; emphasises last word of line; can create suspense\n\nAnalyse: Where does enjambment occur? How does it affect pacing and emphasis?`,
    },
    {
      id: 'ld-56',
      front: 'Volta (Turn)',
      back: `Definition: A shift or turning point in thought, emotion, or tone within a poem.\n\nWhere It Occurs:\n• In sonnets: Often at line 9 (between octave and sestet)\n• In other poems: Marked by word like "but," "yet," or structural break\n\nEffect: Shifts perspective; marks intellectual turning point; focuses attention\n\nAnalyse: Where does volta occur? What changes? How does shift develop the poem?`,
    },
    {
      id: 'ld-57',
      front: 'Stanza',
      back: `Definition: A grouped set of lines in a poem, functioning like a paragraph in prose.\n\nTypes:\n• Couplet: 2 lines\n• Tercet: 3 lines\n• Quatrain: 4 lines\n• Quintet: 5 lines\n• Sestet: 6 lines\n\nEffect: Creates structure; separates ideas; allows pacing\n\nAnalyse: What stanza form is used? How does it organize ideas and pacing?`,
    },
    {
      id: 'ld-58',
      front: 'Sonnet',
      back: `Definition: A 14-line poem, usually in iambic pentameter, with strict rhyme scheme.\n\nTypes:\n• Petrarchan (Italian): ABBAABBACDECDE or similar\n• Shakespearean (English): ABABCDCDEFEFGG\n\nEffect: Creates unified, complete thought; allows complex idea development\n\nAnalyse: What type of sonnet? How does rhyme scheme organize the argument or emotion?`,
    },
    {
      id: 'ld-59',
      front: 'Terza Rima',
      back: `Definition: A terza rima uses three-line stanzas (tercets) with interlocking rhyme scheme: ABA BCB CDC...\n\nHow It Works:\n• Each stanza\'s rhyme links to the next\n• Creates chain effect\n• Often ends with couplet\n\nEffect: Creates momentum and flow; links stanzas; builds toward conclusion\n\nAnalyse: How do the rhymes interlock? How does this create connection and flow?`,
    },
    {
      id: 'ld-60',
      front: 'Villanelle',
      back: `Definition: A 19-line poem with two rhyme sounds, using repeated lines as a refrain in a specific pattern.\n\nStructure:\n• Five tercets plus one quatrain\n• Two lines repeat alternately throughout\n• Highly formal and structured\n\nEffect: Creates obsessive, circular effect; emphasises repeated lines through repetition\n\nAnalyse: What lines repeat? How does their repetition create meaning or mood?`,
    },
  ],
}

export default deck
