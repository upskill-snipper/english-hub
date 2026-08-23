// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'narrative-techniques',
  title: 'Narrative Techniques & Literary Methods',
  description: 'Essential narrative techniques for literary analysis',
  category: 'Techniques',
  board: 'All',
  cards: [
    {
      id: 'nt-1',
      front: 'Foreshadowing',
      back: `Definition: Hints or clues that suggest future events in the narrative.\n\nHow Writers Use It:\n• Dickens: The door knocker shows Marley\'s face before the ghost appears\n• Shakespeare: The witches\' prophecies foreshadow Macbeth\'s fate\n\nEffect on Reader:\n• Creates suspense and anticipation\n• Makes endings feel inevitable rather than random\n• Rewards careful readers who spot the clues`,
    },
    {
      id: 'nt-2',
      front: 'Flashback (Analepsis)',
      back: `Definition: The story moves backward in time to show events that happened before the main timeline.\n\nHow Writers Use It:\n• Dickens: Ghost of Christmas Past shows Scrooge\'s childhood\n• Crime novels: Detective discovers suspect\'s secret past\n\nEffect on Reader:\n• Provides context and explanation for present behaviour\n• Builds empathy by showing character origins\n• Allows comparison: how has the character changed?`,
    },
    {
      id: 'nt-3',
      front: 'Flash-Forward (Prolepsis)',
      back: `Definition: The story jumps forward in time to show future events, then returns to the present.\n\nHow Writers Use It:\n• Dickens: Ghost of Christmas Yet to Come shows Scrooge\'s death\n• Thriller writers: Brief glimpses of danger to come\n\nEffect on Reader:\n• Creates tension: we know danger is coming but not how\n• Raises questions: how will we get from present to this future?`,
    },
    {
      id: 'nt-4',
      front: 'Unreliable Narrator',
      back: `Definition: A narrator whose account of events cannot be fully trusted - they may lie, misunderstand, or be biased.\n\nHow Writers Use It:\n• Browning ("My Last Duchess"): The Duke reveals jealousy while thinking he appears noble\n• Shelley (Frankenstein): Walton, Victor, and the Creature each give different versions\n\nEffect: Forces active reading; creates ambiguity about truth; reveals character through distortion`,
    },
    {
      id: 'nt-5',
      front: 'Omniscient Narrator',
      back: `Definition: A narrator with unlimited knowledge - can see into all characters\' minds and comment on events.\n\nHow Writers Use It:\n• Austen: The narrator comments on characters\' thoughts and hypocrisy\n• Dickens: The narrator tells us what Scrooge thinks and feels\n\nEffect: Creates intimacy; allows comparison between thought and action; shows narrator as a character`,
    },
    {
      id: 'nt-6',
      front: 'First-Person Narrator',
      back: `Definition: The story is told by a character using "I," limited to their perspective and knowledge.\n\nHow Writers Use It:\n• Brontë (Jane Eyre): Jane tells her own story\n• Shelley (Frankenstein): The Creature and Victor tell their stories directly\n\nEffect: Creates immediate intimacy; limits perspective; can create unreliability`,
    },
    {
      id: 'nt-7',
      front: 'Third-Person Limited',
      back: `Definition: The story is told in third person but limited to one character\'s perspective - like first-person but with distance.\n\nHow Writers Use It:\n• Modern literary fiction often uses this approach\n\nEffect: Balance between closeness and distance; allows irony; character can be analysed while we understand their feelings`,
    },
    {
      id: 'nt-8',
      front: 'Stream of Consciousness',
      back: `Definition: A narrative technique that reproduces the unfiltered flow of a character\'s thoughts, including fragmented and associative thinking.\n\nHow Writers Use It:\n• Joyce (Ulysses): Unfiltered thought sequences\n• Woolf: Shows inner psychological states\n\nEffect: Deep psychological insight; can feel disorienting; blurs line between thought and narration`,
    },
    {
      id: 'nt-9',
      front: 'Interior Monologue',
      back: `Definition: A character\'s unspoken thoughts rendered directly to the reader, as if overhearing their internal voice.\n\nHow Writers Use It:\n• Brontë: Jane\'s inner thoughts\n• Dickens: Characters\' reflections\n\nEffect: Creates intimacy and immediacy; allows contrast between what character says vs. thinks; reveals hidden motivations`,
    },
    {
      id: 'nt-10',
      front: 'Dialogue',
      back: `Definition: Conversation between characters; a primary method of characterisation and advancing plot.\n\nCharacterisation Through Speech:\n• Diction: Word choices reveal education, region, personality\n• Dialect/Accent: Speech patterns signal social class\n• Silence: What\'s NOT said reveals tension or shame\n• Subtext: Hidden meaning beneath surface conversation`,
    },
    {
      id: 'nt-11',
      front: 'Direct vs. Indirect Speech',
      back: `Definition:\n• Direct speech: Exact words spoken in quotation marks ("I am angry")\n• Indirect speech: Content of speech reported by narrator ("He said he was angry")\n\nEffect of Direct: Immediacy, authenticity, reader hears actual voice\n\nEffect of Indirect: Distance, summary, narrator controls how we receive information\n\nAnalyse: Why does writer shift between these? Whose perspective is privileged?`,
    },
    {
      id: 'nt-12',
      front: 'Dramatic Irony',
      back: `Definition: The audience/reader knows something the character does not, creating tension or comedy.\n\nHow Writers Use It:\n• Shakespeare: Audience knows the "poison" in Romeo and Juliet is fake\n• Dickens: Readers understand Scrooge\'s danger while he dismisses warnings\n\nEffect: Creates suspense; can be darkly comic; involves reader as privileged observer`,
    },
    {
      id: 'nt-13',
      front: 'Situational Irony',
      back: `Definition: What actually happens is contrary to what is expected or desired - reality contradicts expectation.\n\nHow Writers Use It:\n• The man who builds a house dies before completing it\n• Dickens: Scrooge, who fears ghosts, is visited by three\n\nEffect: Highlights human powerlessness; can be tragic or comic; makes life seem unpredictable`,
    },
    {
      id: 'nt-14',
      front: 'Verbal Irony',
      back: `Definition: A character says the opposite of what they mean, often for sarcasm or humour.\n\nHow Writers Use It:\n• Austen: "It is a truth universally acknowledged..." is ironic\n• Browning ("My Last Duchess"): Duke praises his courtesy while revealing jealousy\n• Modern dialogue: "Oh, great, a traffic jam" (said sarcastically)\n\nEffect: Creates humour; reveals character attitude`,
    },
    {
      id: 'nt-15',
      front: 'Symbolism',
      back: `Definition: An object, action, or character that represents something beyond its literal meaning.\n\nHow to Identify Symbols:\n• Repeated objects or actions (suggests significance)\n• Objects with traditional meaning (chains = bondage, light = truth, darkness = evil)\n• Connections to themes (author links symbol to main idea)\n\nAnalyse: What does symbol literally represent? What larger idea does it stand for? How does meaning develop?`,
    },
    {
      id: 'nt-16',
      front: 'Metaphor',
      back: `Definition: A direct comparison between two unlike things without "like" or "as," suggesting one thing IS another.\n\nHow Writers Use It:\n• "Life is a journey" - suggests life has direction, stages, obstacles\n• "Scrooge\'s heart is frozen" - suggests emotional coldness\n\nEffect: Creates vivid imagery; suggests deeper meaning through comparison; can create irony`,
    },
    {
      id: 'nt-17',
      front: 'Simile',
      back: `Definition: A comparison between two unlike things using "like" or "as."\n\nHow Writers Use It:\n• "As lonely as an oyster" - Dickens on Scrooge\n• "Like a thief in the night" - suggests stealth and danger\n\nEffect: Creates vivid, memorable images; slightly more obvious than metaphor; can be beautiful or comic`,
    },
    {
      id: 'nt-18',
      front: 'Personification',
      back: `Definition: Giving human qualities to non-human things.\n\nHow Writers Use It:\n• "The wind howled in anger" - wind has human emotion\n• "The city sleeps" - the city is alive and conscious\n• "Death came for him" - death is an active character\n\nEffect: Makes the non-human feel immediate and alive; creates mood; suggests character\'s psychological state`,
    },
    {
      id: 'nt-19',
      front: 'Hyperbole (Exaggeration)',
      back: `Definition: Extreme exaggeration for emphasis, not meant to be taken literally.\n\nHow Writers Use It:\n• "I\'ve told you a million times" - exaggerates frequency\n• "He was the worst person who ever lived" - absolute language for effect\n\nEffect: Creates emphasis and emotional intensity; can be comic or dramatic; suggests emotional state`,
    },
    {
      id: 'nt-20',
      front: 'Understatement (Meiosis)',
      back: `Definition: Deliberately making something seem less significant than it is, often for ironic or comedic effect.\n\nHow Writers Use It:\n• "That\'s not good" when describing catastrophe\n• British understatement: "Rather unfortunate" for tragedy\n\nEffect: Creates dry humour; makes serious situations absurd; signals emotional distance or coping`,
    },
    {
      id: 'nt-21',
      front: 'Allusion',
      back: `Definition: An indirect reference to another work, person, event, or idea.\n\nHow Writers Use It:\n• Dickens alludes to biblical stories (Marley\'s chains echo damnation)\n• Literature alludes to Shakespeare, myths, historical events\n• Creates layers of meaning for educated readers\n\nEffect: Enriches text for those who recognise the reference; suggests author\'s influences; connects text to broader culture`,
    },
    {
      id: 'nt-22',
      front: 'Oxymoron',
      back: `Definition: A figure of speech that combines two contradictory or opposite ideas.\n\nHow Writers Use It:\n• "Sweet sorrow" - combines pleasure and pain\n• "Deafening silence" - combines sound and silence\n• "Cruel kindness" - combines harm and help\n\nEffect: Creates paradox and thought; emphasises contradiction; suggests complexity of experience`,
    },
    {
      id: 'nt-23',
      front: 'Pun',
      back: `Definition: A play on words that exploits multiple meanings or sounds alike.\n\nHow Writers Use It:\n• "Time flies like an arrow; fruit flies like a banana" - plays on word "flies"\n• Shakespeare uses puns constantly\n• Comic writing uses puns for humour\n\nEffect: Creates wordplay and humour; can be comic or groan-worthy; shows wit and linguistic skill`,
    },
    {
      id: 'nt-24',
      front: 'Paradox',
      back: `Definition: A statement that seems contradictory but may reveal a truth.\n\nHow Writers Use It:\n• "The only way to find yourself is to lose yourself"\n• Dickens: Scrooge gains happiness by giving up wealth\n• Creates intellectual tension\n\nEffect: Makes reader think; reveals complex truths; suggests life is paradoxical and complex`,
    },
    {
      id: 'nt-25',
      front: 'Pathetic Fallacy',
      back: `Definition: The attribution of human emotions to nature or inanimate objects.\n\nHow Writers Use It:\n• "The sky wept" - the sky is sad\n• "The angry sea crashed" - the sea is angry\n• Weather mirrors character emotions (rain = sadness, sun = joy)\n\nEffect: Creates mood; suggests nature reflects inner emotional states; connects character to environment`,
    },
    {
      id: 'nt-26',
      front: 'Climax',
      back: `Definition: The turning point or moment of highest tension in a narrative - the point where the main conflict is resolved.\n\nHow Writers Use It:\n• Dickens: Scrooge\'s confrontation with his own death (Stave 4) is the climax\n• Drama: The moment of final decision or revelation\n• Plot structure: Everything leads to climax\n\nAnalyse: What is the climactic moment? What resolves? How does everything change?`,
    },
    {
      id: 'nt-27',
      front: 'Denouement (Resolution)',
      back: `Definition: The final part of a story after the climax, where loose ends are tied up and new equilibrium is established.\n\nHow Writers Use It:\n• Dickens: Stave 5 is the denouement - Scrooge is transformed, the world accepts him\n• Shows consequences of climactic decision\n• Answers remaining questions\n\nAnalyse: What is resolved? What remains unresolved? How does ending affect your interpretation of the whole?`,
    },
    {
      id: 'nt-28',
      front: 'Exposition',
      back: `Definition: The part of a narrative that provides necessary background information, setting, and context.\n\nHow Writers Use It:\n• Dickens: Early stave establishes Scrooge\'s character, Christmas Eve, the financial world\n• Must be clear but not clunky\n• Information must be woven into narrative\n\nAnalyse: How does writer introduce necessary information? Is exposition obvious or seamless? Does it slow the story?`,
    },
    {
      id: 'nt-29',
      front: 'Rising Action',
      back: `Definition: The series of events that build tension and develop conflict between the exposition and climax.\n\nHow Writers Use It:\n• Dickens: Staves 2-4 build tension as Scrooge witnesses consequences and confronts fear\n• Each event raises stakes or reveals new information\n• Reader's tension increases\n\nAnalyse: What events build tension? How is each more significant than the last? What is at stake?`,
    },
    {
      id: 'nt-30',
      front: 'Setting',
      back: `Definition: The time and place where a narrative occurs - both physical location and historical/social context.\n\nHow Writers Use It:\n• Physical setting: London, Scrooge\'s counting house, the streets\n• Historical context: Victorian England, 1843, Industrial Revolution\n• Setting shapes plot (ghosts only visit at night, on Christmas Eve)\n• Setting reveals character (Scrooge\'s cold, dark house reflects his heart)\n\nAnalyse: How does setting influence the story? Would story work in different time/place?`,
    },
    {
      id: 'nt-31',
      front: 'Atmosphere (Mood)',
      back: `Definition: The emotional tone or feeling that pervades a work - the mood the reader experiences.\n\nHow Writers Create It:\n• Word choice (dark, cold language for fear; bright, warm language for joy)\n• Setting details (fog, darkness, chill = danger or sadness)\n• Pacing (fast = excitement; slow = suspense or melancholy)\n• Character reactions (if characters are afraid, reader feels dread)\n\nAnalyse: What is the mood? How does it shift? What literary techniques create it?`,
    },
    {
      id: 'nt-32',
      front: 'Tone',
      back: `Definition: The author\'s attitude toward the subject or audience - the voice the author uses.\n\nHow Writers Establish It:\n• Diction (formal vs. casual language)\n• Sentence structure (simple vs. complex affects pace and tone)\n• Narrator\'s commentary (what narrator approves/disapproves of)\n• Examples: ironic, sarcastic, earnest, mocking, reverent, dark, light\n\nAnalyse: What is the author\'s tone? How does it affect our response? Does tone shift?`,
    },
    {
      id: 'nt-33',
      front: 'Point of View (POV)',
      back: `Definition: The perspective from which a story is told - who is telling the story and what they can see/know.\n\nMain Types:\n• First-person ("I"): Limited to narrator\'s knowledge\n• Second-person ("you"): Rare; creates direct address\n• Third-person omniscient: Knows all\n• Third-person limited: Stays with one character\n• Third-person objective: Reports only observable facts\n\nAnalyse: What POV is used? How does it limit or expand our understanding? Whose perspective dominates?`,
    },
    {
      id: 'nt-34',
      front: 'Characterisation',
      back: `Definition: The methods an author uses to develop and reveal character.\n\nDirect Characterisation:\n• Author tells us directly: "He was greedy"\n\nIndirect Characterisation (STEAL):\n• Speech: What character says and how\n• Thoughts: What character thinks\n• Effects: How character affects others\n• Actions: What character does\n• Looks: Physical description\n\nAnalyse: How do we learn about character? What methods does author use? How reliable is characterisation?`,
    },
    {
      id: 'nt-35',
      front: 'Character Development (Arc)',
      back: `Definition: How a character changes throughout the narrative - their psychological and emotional journey.\n\nTypes of Arcs:\n• Positive arc: Character improves (Scrooge goes from miser to generous)\n• Negative arc: Character deteriorates (falls into vice or corruption)\n• Flat arc: Character doesn\'t change (remains consistent)\n• Complex arc: Character changes in contradictory ways\n\nAnalyse: How does character develop? What causes change? Is change believable? What does change suggest about themes?`,
    },
    {
      id: 'nt-36',
      front: 'Conflict (Internal vs. External)',
      back: `Definition:\n• External conflict: Character vs. external force (person, environment, society, supernatural)\n• Internal conflict: Character vs. themselves (desire vs. duty, fear vs. courage)\n\nHow Writers Use Both:\n• Dickens: Scrooge fights external supernatural visitors AND internal resistance to change\n• Often, internal conflict drives external plot\n\nAnalyse: What conflicts drive the story? Are they resolved? How do internal and external conflicts interact?`,
    },
    {
      id: 'nt-37',
      front: 'Theme',
      back: `Definition: A central idea or message in a work, often about human nature, society, or life.\n\nHow Writers Convey Themes:\n• Repetition: Central ideas recur throughout\n• Character development: Theme shown through character change\n• Symbolism: Objects represent ideas\n• Conflict: Characters' struggles reveal thematic ideas\n• Dialogue: Characters discuss or embody themes\n\nAnalyse: What is the main theme? How is it developed? Is it explicitly stated or implied? What is author\'s message?`,
    },
    {
      id: 'nt-38',
      front: 'Motif',
      back: `Definition: A recurring image, phrase, action, or concept that develops a theme.\n\nHow Writers Use Motifs:\n• In Dickens: Christmas recurs (greed vs. generosity)\n• In literature: Light/darkness, journey, season, number\n• Repetition creates meaning\n\nAnalyse: What motifs recur? How do they develop? What do they suggest about the author\'s message?`,
    },
    {
      id: 'nt-39',
      front: 'Imagery',
      back: `Definition: Vivid, descriptive language that appeals to the senses (sight, sound, smell, taste, touch).\n\nHow Writers Use It:\n• Creates vivid mental pictures\n• Engages reader emotionally\n• Often symbolic\n• Dickens: Cold imagery for Scrooge (emotional coldness = physical coldness)\n\nAnalyse: What imagery dominates? How does it affect mood? Is imagery symbolic?`,
    },
    {
      id: 'nt-40',
      front: 'Diction',
      back: `Definition: The choice and use of words in a text - vocabulary, style, formality level.\n\nHow Diction Works:\n• Formal diction: "The gentleman did not comply" (distant, proper)\n• Informal diction: "The guy wouldn\'t do it" (casual, familiar)\n• Archaic diction: "Hath," "thee" (old-fashioned, formal)\n• Technical diction: Specific vocabulary for a field\n\nAnalyse: What diction does author use? How does it affect tone and characterisation? Does diction reflect social class?`,
    },
    {
      id: 'nt-41',
      front: 'Syntax',
      back: `Definition: The arrangement of words and structure of sentences in a text.\n\nHow Syntax Works:\n• Simple sentences: Fast pacing, clarity, impact ("I came. I saw. I conquered.")\n• Complex sentences: Slow pacing, complexity, sophistication\n• Sentence fragments: Emphasis, mood, modern feel\n• Parallel structure: Rhythm, emphasis, memorability\n\nAnalyse: What sentence patterns does author use? How does syntax affect pacing and meaning? Does it reflect character voice?`,
    },
    {
      id: 'nt-42',
      front: 'Repetition',
      back: `Definition: The intentional recurrence of words, phrases, images, or ideas in a text.\n\nHow Writers Use It:\n• Emphasis: Repeating key words emphasises their importance\n• Rhythm: Repetition creates patterns and music\n• Characterisation: Repeated actions reveal character\n• Theme: Repeating ideas develops theme\n• Dickens: "Christmas" recurs throughout, developing the theme\n\nAnalyse: What is repeated? What effect does repetition have? How does it serve the author\'s purpose?`,
    },
    {
      id: 'nt-43',
      front: 'Parallel Structure',
      back: `Definition: The use of similar grammatical forms or structures to create rhythm, emphasis, or meaning.\n\nHow Writers Use It:\n• "I came, I saw, I conquered" - three parallel clauses\n• "As lonely as an oyster, as hard as nails" - parallel similes\n• "Neither rich nor poor, neither young nor old" - parallel negatives\n\nEffect: Creates rhythm, memorability, emphasis, balance\n\nAnalyse: Where is parallel structure used? How does it affect meaning or emphasis?`,
    },
    {
      id: 'nt-44',
      front: 'Juxtaposition',
      back: `Definition: The placing of two contrasting things side by side to emphasise their differences.\n\nHow Writers Use It:\n• Dickens: Scrooge\'s cold, dark home vs. the Cratchits\' warm, crowded dinner\n• Rich vs. poor, light vs. darkness, past vs. future\n• Emphasises contrast through proximity\n\nEffect: Highlights differences; creates irony or emotional impact; invites comparison\n\nAnalyse: What contrasts are juxtaposed? Why? What does the comparison suggest?`,
    },
    {
      id: 'nt-45',
      front: 'Analogy',
      back: `Definition: An extended comparison between two things that share certain characteristics, used to explain or clarify.\n\nHow Writers Use It:\n• "Life is like a journey" - develops the comparison across multiple lines\n• Explains complex ideas through familiar ones\n• Builds extended metaphor\n\nEffect: Makes abstract ideas concrete; aids understanding; creates depth\n\nAnalyse: What analogy is used? What two things are compared? How does the comparison deepen understanding?`,
    },
    {
      id: 'nt-46',
      front: 'Enjambment',
      back: `Definition: In poetry, the continuation of a sentence beyond the end of a line or stanza.\n\nHow Writers Use It:\n• Creates flow across line breaks\n• Emphasises particular words at the end of lines\n• Can create suspense (reader waits for continuation)\n\nEffect: Disrupts line-by-line rhythm; forces connection between ideas; creates emphasis\n\nAnalyse: Where does enjambment occur? How does it affect meaning or pacing?`,
    },
    {
      id: 'nt-47',
      front: 'Caesura',
      back: `Definition: In poetry, a pause or break within a line, usually marked by punctuation.\n\nHow Writers Use It:\n• Creates rhythm and emphasis\n• Forces pause for reflection\n• Can represent silence or emotional weight\n• Often in the middle of a line\n\nEffect: Breaks rhythm; creates emphasis; adds weight to surrounding words\n\nAnalyse: Where do caesuras occur? What do they emphasise? How do they affect pacing?`,
    },
    {
      id: 'nt-48',
      front: 'Volta',
      back: `Definition: In poetry, a shift or turning point where the poem\'s direction, tone, or thought changes.\n\nHow Writers Use It:\n• Often marks shift from question to answer, problem to solution\n• In sonnets, often occurs at line 9 (between octave and sestet)\n• Can be subtle or dramatic\n\nEffect: Creates surprise; marks intellectual or emotional turning point; focuses attention\n\nAnalyse: Where does volta occur? What changes? How does shift develop the poem\'s meaning?`,
    },
    {
      id: 'nt-49',
      front: 'Alliteration',
      back: `Definition: The repetition of beginning consonant sounds in neighbouring words.\n\nHow Writers Use It:\n• "The fair field was full of folk" - repetition of "f"\n• "Sally sells seashells" - repetition of "s"\n• Creates musicality and emphasis\n\nEffect: Creates rhythm and memorability; emphasises particular words; creates mood\n\nAnalyse: What sounds are repeated? How does alliteration affect tone or emphasis?`,
    },
    {
      id: 'nt-50',
      front: 'Assonance',
      back: `Definition: The repetition of vowel sounds in neighbouring words.\n\nHow Writers Use It:\n• "The silky, shimmering scene" - repetition of "i" sound\n• Creates musicality different from alliteration\n• Often subtle, but affects flow\n\nEffect: Creates flow and musicality; can create mood; affects how words sound together\n\nAnalyse: What vowel sounds are repeated? How does assonance affect the sound and mood of the passage?`,
    },
  ],
}

export default deck
