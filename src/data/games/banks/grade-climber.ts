import type { GameBank } from '@/lib/games/explanations/types'
import type { GCSEGrade } from '@/lib/grades'

/**
 * Grade Climber: questions on technique, meaning and analysis, each set at a
 * level from 3 to 9, many of them on the GCSE set texts.
 *
 * Moved out of src/app/games/grade-climber/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The levels, the types and the order of the questions are unchanged, and none
 * was added or removed.
 *
 * THE PROMPTS CARRY THE BOARD FILTER. The page shows a question about a set
 * text only to a student whose exam board sets that text, and it knows the
 * text by finding its title in the prompt (TEXT_REFERENCES in the page). A
 * prompt edited here must keep the title it names. Six prompts on set texts
 * match no title there (Animal Farm's last line, Simon, Scrooge, Priestley's
 * dramatic irony, Steinbeck's American Dream, and "London" without "by Blake"),
 * so every board is shown them, as it was before the move.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and by
 * the readers who checked them). 38 of the 156 questions were changed.
 *
 * Ten marked answers, or the prompts they answered, said something false:
 *
 *   - Checking Out Me History (form and structure): the answer said the poem
 *     alternates standard English, for colonial history, with Creole, for the
 *     Caribbean heroes. The whole poem is in Caribbean English; what alternates
 *     is mocking, nursery-rhyme stanzas on British history and reverent stanzas
 *     on Toussaint, Nanny and Mary Seacole. The answer now says that.
 *   - Checking Out Me History (the two histories): the answer called Dick
 *     Whittington a nursery rhyme. He is a folk tale and a pantomime; the
 *     answer now speaks of "folk-tale and nursery-rhyme triviality".
 *   - Poppies (domestic imagery): the answer had the mother smoothing "a
 *     blazer collar" and touching "a door handle". She pins a poppy to his
 *     blazer and smooths his shirt collar, and the poem has no door handle.
 *   - Great Expectations (bildungsroman): the answer called Pip's expectations
 *     "founded on criminal wealth". Magwitch made the money lawfully, as a
 *     sheep-farmer and stock-breeder in New South Wales; it is now "a convict's
 *     money".
 *   - Romeo and Juliet (why the families are called Montagues and Capulets):
 *     the marked answer, that the names stress a feud between whole
 *     households, is no reason for the names, and "They are named after real
 *     families" was near the truth (Dante names the Montecchi and Cappelletti).
 *     The answer is now that Shakespeare took the names from the story he
 *     adapted (Arthur Brooke's poem of 1562), and that option is replaced.
 *   - The Charge of the Light Brigade (rhythm): the answer called the metre
 *     "anapaestic dimeter with a dactylic refrain". It is dactylic dimeter,
 *     as the poem's own page says
 *     (src/app/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade).
 *   - The Charge of the Light Brigade (obedience): the answer called "Some one
 *     had blunder'd" a refrain. The line appears once; it is now "the line".
 *   - Macbeth (the Porter): the answer said the castle "has literally become
 *     hell". It is now "a kind of hell".
 *   - Dulce et Decorum Est (tense): the prompt put the shift to the present
 *     tense in the second stanza, which is told in the past ("I saw him
 *     drowning"). The present arrives in the two-line third stanza ("He
 *     plunges at me"). The prompt now says the third stanza, and the answer
 *     says what that shift does: the dying man returns in every dream.
 *   - The Émigrée (light as a motif): the answer had her memory survive "no
 *     matter how the city is invaded or renamed". Nothing in the poem renames
 *     the city; the threats it names are war and tyranny, so the answer now
 *     says "invaded or oppressed".
 *
 * One prompt misquoted: Tennyson's "valley of Death" was printed "Valley of
 * Death"; it now has his lower-case v, as AQA prints it.
 *
 * In 29 questions a wrong option was also right, or near enough to argue, so
 * a student who knew the text could be marked wrong. Each such option was
 * replaced by one that is plainly wrong for that question:
 *
 *   - devices that the example also contains: Alliteration in "Tick tock,
 *     tick tock", "Never, never, never", "Alone, alone, all all alone" and
 *     "The buzzing bees" (a word in an alliterative pair); "Rhyme and rhythm"
 *     in "She sells sea shells" (sells, shells); Hyperbole in "The classroom
 *     was a zoo"; Metaphor for the whispering leaves, since personification is
 *     a kind of metaphor;
 *   - effects the device can have: Humour and Confusion for short sentences
 *     (comic timing, and the broken thoughts of a confused mind), so both
 *     went; "They are cold" for trembling hands; "It shows the soldiers are
 *     bored" for Exposure's refrain, which is the monotony the answer names;
 *   - things true of the text: Macbeth's blood as "Loyalty and honour" (the
 *     bleeding Captain, the sword that "smok'd with bloody execution"); Satis
 *     House as "Wealth and success"; the "valley of Death" as a valley in the
 *     Crimea, where the charge took place; the Duke as an art collector; Pip
 *     not recognising Magwitch, which at first he does not; the darkroom as a
 *     place of death, since Duffy likens it to a church; the Émigrée's memory
 *     as unreliable, which the poem allows; Lady Macbeth "praying", since she
 *     invokes spirits; the humour of Birling's dramatic irony; the Creature
 *     seeming educated, which he is; the dream in Of Mice and Men being "about
 *     buying a farm", which it is; An Inspector Calls being "set in real
 *     time", which it is; Victor as a figure of the Enlightenment, a reading
 *     critics argue; Pip improving himself, which morally he does; "Hyde
 *     exercises more" and "Jekyll takes too much potion", both near Jekyll's
 *     own account ("much exercised and nourished", the doubled doses); Romeo
 *     "confused", which his oxymorons show; the Creature lonely because
 *     ugly, which is why he is shunned; "He is talking to his friend", when
 *     Owen's last stanza says "My friend"; and "Paper represents strength",
 *     close to Tissue's own claim for paper.
 */

export interface GradeQuestion {
  grade: GCSEGrade
  type: 'technique' | 'meaning' | 'analysis'
  prompt: string
  options: string[]
  correctIndex: number
}

export const QUESTION_BANK: GradeQuestion[] = [
  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 3 - Identify the technique (basic)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 3,
    type: 'technique',
    prompt: '"She runs like the wind." What technique is used?',
    options: ['Simile', 'Metaphor', 'Alliteration', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The stars danced in the sky." What technique is used?',
    options: ['Simile', 'Hyperbole', 'Personification', 'Onomatopoeia'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does "cold-hearted" suggest about a character?',
    options: [
      'They are ill',
      'They are unkind and uncaring',
      'They live somewhere cold',
      'They are shy',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Crash! Bang! Wallop!" What technique is this?',
    options: ['Alliteration', 'Onomatopoeia', 'Repetition', 'Simile'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a writer uses short sentences, what effect might this create?',
    options: [
      'A relaxed mood',
      'Tension or urgency',
      'A slow, lingering pace',
      'Rich, detailed description',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Peter Piper picked a peck." What technique is used?',
    options: ['Sibilance', 'Assonance', 'Alliteration', 'Rhyme'],
    correctIndex: 2,
  },
  // NEW Grade 3
  {
    grade: 3,
    type: 'technique',
    prompt: '"The sun smiled down on us." What technique is used?',
    options: ['Simile', 'Personification', 'Hyperbole', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"He was as brave as a lion." What technique is this?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an exclamation mark at the end of a sentence usually show?',
    options: ['A question', 'Strong emotion or surprise', 'A pause', 'The end of a story'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The snake slithered and slid silently." What technique is this?',
    options: ['Onomatopoeia', 'Metaphor', 'Sibilance', 'Hyperbole'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "a heart of stone", what does this mean?',
    options: [
      'They have a medical condition',
      'They are strong',
      'They are unfeeling and cruel',
      'They collect stones',
    ],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Tick tock, tick tock went the clock." What technique is used?',
    options: ['Hyperbole', 'Simile', 'Onomatopoeia', 'Metaphor'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does it mean if a writer repeats a word three times?',
    options: [
      'They made a mistake',
      'They want to emphasise that idea',
      'They ran out of vocabulary',
      'It creates rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The wind howled through the trees." What technique is used?',
    options: ['Simile', 'Personification', 'Alliteration', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Big, bad, bold Billy." What technique is this?',
    options: ['Alliteration', 'Rhyme', 'Simile', 'Personification'],
    correctIndex: 0,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a poem uses words like "dark", "shadow" and "cold", what mood is created?',
    options: [
      'Happy and cheerful',
      'Gloomy and threatening',
      'Exciting and fast',
      'Calm and peaceful',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 4 - Identify technique + basic meaning
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 4,
    type: 'technique',
    prompt: '"He was a lion in battle." What technique is this?',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: '"The room fell silent." What does "fell" suggest?',
    options: ['The room collapsed', 'Silence came suddenly', 'Someone tripped', 'It was evening'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a rhetorical question?',
    options: [
      'To confuse the reader',
      'To engage the reader and make them think',
      'To provide an answer',
      'To end a paragraph',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"I\'ve told you a million times!" What technique?',
    options: ['Metaphor', 'Irony', 'Hyperbole', 'Understatement'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: '"The weather wept." What does this suggest?',
    options: [
      'It was raining and the mood is sad',
      'The weather was happy',
      'Someone was crying outside',
      'It was very hot',
    ],
    correctIndex: 0,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"She sells sea shells on the sea shore." This contains which two techniques?',
    options: [
      'Metaphor and simile',
      'Alliteration and sibilance',
      'Personification and hyperbole',
      'Oxymoron and irony',
    ],
    correctIndex: 1,
  },
  // NEW Grade 4
  {
    grade: 4,
    type: 'technique',
    prompt: '"Life is a rollercoaster." What technique is this?',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'In Romeo and Juliet, what does "star-cross\'d lovers" mean?',
    options: [
      'They love astronomy',
      'They are destined for misfortune by fate',
      'They met under the stars',
      'They are famous',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"Never, never, never give up." What technique is used here?',
    options: ['Personification', 'Repetition', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does the word "lurking" suggest about a character?',
    options: [
      'They are friendly',
      'They are hiding with sinister intent',
      'They are lost',
      'They are sleeping',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The classroom was a zoo." What technique is this?',
    options: ['Simile', 'Personification', 'Metaphor', 'Alliteration'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'If a poem has a regular rhyme scheme (ABAB), what effect does this create?',
    options: ['Confusion', 'A sense of rhythm and musicality', 'Tension and fear', 'Sadness'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a list of three (tricolon)?',
    options: [
      'Because they can only think of three things',
      'To create emphasis and a sense of completeness',
      'To confuse the reader',
      'To save space',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The leaves whispered in the breeze." What technique is this?',
    options: ['Oxymoron', 'Personification', 'Simile', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What is pathetic fallacy?',
    options: [
      'When a character feels sorry for themselves',
      'When weather or nature reflects human emotions',
      'A type of simile',
      'When animals talk',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"Bitter-sweet memories." What technique is this?',
    options: ['Simile', 'Oxymoron', 'Alliteration', 'Personification'],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 5 - Meaning and basic analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Macbeth, what does blood symbolise?',
    options: [
      'Power and ambition',
      'Guilt and violence',
      'Love and passion',
      'Peace and innocence',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: '"The fog crept in on little cat feet." What effect does this create?',
    options: [
      'Fear and horror',
      'A sense of stealth and quiet movement',
      'Excitement and energy',
      'Anger and frustration',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'What is the purpose of pathetic fallacy?',
    options: [
      'To describe animals',
      "To reflect characters' emotions through weather/nature",
      'To create humour',
      'To introduce new characters',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: '"It was the best of times, it was the worst of times." This is an example of:',
    options: ['Oxymoron', 'Juxtaposition', 'Irony', 'Euphemism'],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?',
    options: [
      'To show he likes seafood',
      'To show he is completely isolated and closed off',
      'To show he lives by the sea',
      'To show he is wealthy',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'Why might a poet use enjambment?',
    options: [
      'To create a pause',
      'To create a sense of flow or urgency',
      'To rhyme more easily',
      'To confuse the reader',
    ],
    correctIndex: 1,
  },
  // NEW Grade 5
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Romeo and Juliet, why does Shakespeare use light and dark imagery?',
    options: [
      'To show the time of day',
      'To contrast love and danger, highlighting the secrecy of their relationship',
      'To describe the weather',
      'To make the play more dramatic for actors',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Ozymandias", what does the "shattered visage" represent?',
    options: [
      'A broken mirror',
      'The decay of power and the impermanence of human achievement',
      'A statue that fell over accidentally',
      'Ancient art techniques',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is a volta in a sonnet?',
    options: [
      'The title',
      'A turn or shift in argument or tone',
      'The final word',
      'A type of rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Jekyll and Hyde, what does the locked door of the laboratory represent?',
    options: [
      'Poor building design',
      'The secrets Hyde conceals and the barrier between respectability and evil',
      'That Jekyll is busy working',
      'Victorian architecture',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "London" by Blake, what does the phrase "mind-forged manacles" suggest?',
    options: [
      'People wear handcuffs',
      'People are mentally imprisoned by society and its institutions',
      'People are creative thinkers',
      'London has many blacksmiths',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'Why does Shelley use an iambic pentameter in "Ozymandias"?',
    options: [
      'Because all poems use it',
      'The regular rhythm mirrors the order Ozymandias tried to impose, while the disruptions reflect the decay of his power',
      'It was the easiest rhythm',
      'To make it rhyme',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Bayonet Charge" by Hughes, what does the "hot khaki" suggest?',
    options: [
      'The uniform is fashionable',
      'The physical discomfort and intensity of battle',
      'The soldier is sunbathing',
      'The weather is warm',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Great Expectations, what does Satis House symbolise?',
    options: [
      'Hope and new beginnings',
      "Decay, frozen time, and Miss Havisham's emotional stagnation",
      'A typical Victorian home',
      "Pip's future happiness",
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is a caesura?',
    options: [
      'A type of poem',
      'A deliberate pause or break within a line of poetry',
      'A rhyming couplet',
      'The last line of a stanza',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "The Charge of the Light Brigade", what does "valley of Death" allude to?',
    options: [
      'A horror film',
      'Psalm 23 from the Bible, suggesting inevitable doom',
      'A line from a Shakespeare play',
      'A metaphor for old age',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 6 - More sophisticated analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 6,
    type: 'analysis',
    prompt: 'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?',
    options: [
      'As comic relief',
      'As a mouthpiece for socialist ideas',
      'As a romantic interest',
      'As a symbol of capitalism',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?',
    options: [
      'It describes the weather',
      'It introduces the theme of moral corruption and deception',
      'It is about physical appearance',
      'It describes a battle',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'Complete the analysis: "Stevenson uses the fog in Jekyll and Hyde to symbolise..."',
    options: [
      'The beauty of London',
      'The concealment of truth and moral ambiguity',
      'The industrial revolution',
      'Victorian fashion',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'technique',
    prompt:
      'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?',
    options: [
      'Flashback',
      'An allegory structured like a song/carol',
      'Stream of consciousness',
      'Epistolary form',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Lord of the Flies", what does the conch symbolise?',
    options: [
      'Nature and the wild',
      'Democracy, order and civilisation',
      'Violence and savagery',
      'Isolation and loneliness',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt:
      '"The creatures outside looked from pig to man, and from man to pig." What does Orwell suggest?',
    options: [
      'Pigs are intelligent',
      'The leaders have become indistinguishable from the oppressors',
      'Animals should not be on farms',
      'The revolution succeeded',
    ],
    correctIndex: 1,
  },
  // NEW Grade 6
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Remains" by Armitage, how does the poet present the psychological impact of conflict?',
    options: [
      'The soldier forgets what happened',
      'The use of colloquial language and graphic imagery conveys PTSD and guilt that haunts the speaker',
      'The poem celebrates military service',
      'The soldier feels no guilt',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'How does Shakespeare present the Nurse in Romeo and Juliet as a contrast to Lady Capulet?',
    options: [
      'The Nurse is wealthier',
      'The Nurse provides the warmth and maternal care that Lady Capulet lacks',
      'The Nurse is more educated',
      'They are presented as identical',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: 'In "Exposure" by Owen, what does "merciless iced east winds that knive us" suggest?',
    options: [
      'The soldiers enjoy the cold',
      'Nature is presented as a hostile enemy, as deadly as the opposing forces',
      'The wind is gentle',
      'Owen is describing a kitchen',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: "In Jane Eyre, how does Bronte use the Red Room to develop Jane's character?",
    options: [
      'It shows Jane likes the colour red',
      'The imprisonment reflects her oppression and ignites her passionate desire for freedom and justice',
      'It is simply a bedroom',
      'Jane enjoys being alone',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "My Last Duchess" by Browning, what does the Duke\'s control over the painting reveal?',
    options: [
      'He wants everyone to see her portrait',
      'His possessive, controlling nature and the silencing of women',
      'He misses his wife',
      'He wants to sell the painting',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: "In Frankenstein, why does Shelley frame the narrative with Walton's letters?",
    options: [
      'To make it longer',
      "The epistolary frame creates distance and multiple perspectives, questioning the reliability of the Creature's and Victor's accounts",
      'Because Shelley liked letters',
      'To introduce a romantic subplot',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Checking Out Me History" by Agard, why does the poet use phonetic spelling and dialect?',
    options: [
      'He cannot spell',
      'To assert Caribbean identity and resist the dominance of colonial English',
      'It is a printing error',
      'To make it easier to read',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Tissue" by Dharker, what does paper symbolise?',
    options: [
      'School homework',
      'The fragility and power of human life, identity, and the structures we create',
      'Trees and deforestation',
      "The poet's diary",
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: "In Great Expectations, why does Dickens present Magwitch's return as a shock to Pip?",
    options: [
      'Pip forgot who he was',
      "It shatters Pip's illusions about his benefactor and forces him to confront class prejudice",
      'Magwitch was supposed to be dead',
      'Pip had been expecting him',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 7 - Sophisticated analysis with context
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?',
    options: [
      'Darkness shows it is nighttime',
      "Darkness conceals evil deeds and mirrors the moral decay of Macbeth's character",
      'Darkness represents sadness',
      'Darkness is used for dramatic lighting effects',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?',
    options: [
      'Older characters are wiser',
      'Younger characters represent hope for social change while older ones represent entrenched attitudes',
      'There is no real divide',
      'The young are punished more',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'Complete: "Golding uses Simon as a Christ-like figure to..."',
    options: [
      'Provide comic relief',
      'Symbolise innate human goodness and the sacrifice of innocence',
      'Show the power of democracy',
      'Represent the military',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'meaning',
    prompt: 'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?',
    options: [
      'It was his hometown',
      'Soledad means "solitude" in Spanish, reinforcing themes of loneliness',
      'It was a famous ranch',
      'It had the best weather',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: "How does Dickens use Scrooge's transformation to critique Victorian society?",
    options: [
      'He shows wealth is bad',
      'He suggests individual moral change can address social inequality and neglect of the poor',
      'He promotes Christianity',
      'He shows that ghosts are real',
    ],
    correctIndex: 1,
  },
  // NEW Grade 7
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Owen use sensory imagery in "Exposure" to convey the futility of war?',
    options: [
      'To make the poem more colourful',
      'The emphasis on natural suffering over combat suggests the true enemy is the futility and neglect soldiers endure',
      'To describe a beautiful landscape',
      'To entertain the reader',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Romeo and Juliet, how does the Prologue function as a dramatic device?',
    options: [
      'It introduces the actors',
      'By revealing the tragic ending, Shakespeare shifts focus from what happens to why, creating dramatic irony throughout',
      'It summarises the play for latecomers',
      'It was added by a different writer',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Ozymandias", how does the use of a second-hand account affect the poem\'s message about power?',
    options: [
      'It makes the poem unreliable',
      "The layers of narration mirror the erosion of Ozymandias's legacy, emphasising how power fades through time and retelling",
      'Shelley was too lazy to visit the desert',
      'It makes the poem longer',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Bronte use Bertha Mason in Jane Eyre as a Gothic double for Jane?',
    options: [
      "Bertha is Jane's sister",
      'Bertha represents the suppressed rage and passion that Jane must control to survive in Victorian society',
      'Bertha is purely a plot device for the fire',
      'They look identical',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "London" by Blake, how does the repetition of "every" create meaning?',
    options: [
      'Blake could not think of other words',
      'The relentless repetition emphasises the universality of suffering and the inescapable oppression across all of society',
      'It creates a cheerful rhythm',
      'It is a printing error',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "War Photographer" by Duffy, how does the domestic setting of the darkroom contrast with the war zones?',
    options: [
      'The photographer prefers being at home',
      'The juxtaposition of ordered England with chaotic suffering abroad critiques public indifference to distant conflict',
      'The darkroom is a cheerful, noisy place',
      'Duffy has never been to a war zone',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'How does Stevenson use Mr Utterson as a narrative device in Jekyll and Hyde?',
    options: [
      'Utterson is the villain',
      "As a rational, respectable Victorian gentleman, his gradual discovery mirrors the reader's journey and heightens the horror of the revelation",
      'Utterson is unimportant',
      'He provides comic relief',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "The Émigrée" by Rumens, how does the poet present memory as resistance?',
    options: [
      'The speaker has a bad memory',
      'The idealised, sunlit memory of the homeland resists the threatening forces that try to obliterate identity and belonging',
      'The speaker has returned to live in the city',
      'The poem is about forgetting',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: "In Frankenstein, how does Shelley use the Arctic setting to frame the novel's themes?",
    options: [
      'Shelley liked cold weather',
      "The desolate, frozen landscape mirrors Victor's emotional isolation and the dangerous extremes of unchecked ambition",
      'It provides a holiday backdrop',
      'The Arctic was a popular Victorian destination',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Great Expectations, how does Dickens use Estella to explore the theme of class?',
    options: [
      'Estella is middle class',
      'Estella is raised to weaponise beauty against men, showing how the upper classes perpetuate cruelty through social conditioning',
      'Estella is kind to Pip',
      'She represents the working class',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 8 - Perceptive, evaluative analysis
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?',
    options: [
      'She wants to be a man',
      'She recognises that femininity is equated with weakness in her patriarchal society and must reject it to gain power',
      'She is confused about her identity',
      'She asks to become gentler',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'To what extent does Orwell present revolution as inevitably corrupted in "Animal Farm"?',
    options: [
      'Revolution always works perfectly',
      'The cyclical structure suggests revolutionary ideals are corrupted by those who gain power, reflecting the Soviet experience',
      'Only animal revolutions fail',
      'Orwell supports the revolution throughout',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?',
    options: [
      'Short books are easier',
      'The fragmented narrative structure with multiple perspectives mirrors the fractured identity of Jekyll/Hyde',
      'He ran out of ideas',
      'Novellas were popular at the time',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'Evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.',
    options: [
      'It makes the audience side with the Birlings',
      "The audience knows WWI and WWII are coming, making the Birlings' complacency a powerful critique of capitalist arrogance",
      'It makes the play confusing',
      'It shows the Inspector was wrong',
    ],
    correctIndex: 1,
  },
  // NEW Grade 8
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Browning use the dramatic monologue form in "My Last Duchess" to expose the Duke\'s character?',
    options: [
      'The Duke is honest and self-aware',
      'The single, uninterrupted voice allows the Duke to inadvertently reveal his tyranny, jealousy, and objectification of women while believing he appears reasonable',
      'The monologue is addressed to the audience',
      'Browning had no other characters to include',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'Evaluate how Owen subverts traditional war poetry in "Dulce et Decorum Est".',
    options: [
      'Owen celebrates war',
      'By juxtaposing graphic, visceral imagery with the ironic Latin title, Owen dismantles the patriotic rhetoric that glorified sacrifice and recruited young men',
      'Owen follows traditional conventions',
      'The Latin title is sincere',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "How does Shakespeare use Juliet's soliloquies to challenge patriarchal expectations in Romeo and Juliet?",
    options: [
      'Juliet obeys her father throughout',
      "Juliet's articulate, passionate speeches assert female agency and desire in a society that treats her as property to be exchanged in marriage",
      "Juliet's speeches are unimportant",
      'Shakespeare did not give women soliloquies',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "In Frankenstein, evaluate how Shelley uses the Creature's eloquence to challenge reader expectations.",
    options: [
      'The Creature cannot speak',
      "The Creature's articulate narrative forces the reader to question who the true monster is, subverting the expectation that appearance determines moral worth",
      'The Creature is simply copying Victor',
      'His eloquence makes him seem less human',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Agard use form and structure in "Checking Out Me History" to mirror his argument?',
    options: [
      'The poem follows a strict sonnet form',
      'The alternation between mocking, nursery-rhyme stanzas on the British history he was taught and reverent, image-rich stanzas on Caribbean heroes structurally enacts the conflict between imposed and authentic identity',
      'The structure is random',
      'Agard uses prose, not poetry',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'Evaluate how Dickens uses the Ghost of Christmas Yet to Come as a departure from the other spirits in "A Christmas Carol".',
    options: [
      'This ghost is friendlier',
      'The silent, shrouded figure represents the terrifying finality of death and compels Scrooge through fear rather than instruction, making the transformation feel psychologically authentic',
      'The ghost speaks throughout',
      'Dickens ran out of ideas for dialogue',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Hughes use irregular rhythm in "Bayonet Charge" to convey the experience of combat?',
    options: [
      'Hughes was a bad poet',
      'The disrupted metre and enjambment physically enact the stumbling, chaotic momentum of a soldier charging into gunfire, rejecting the orderly rhythms of patriotic verse',
      'The rhythm is perfectly regular',
      'Hughes used a metronome',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In Great Expectations, evaluate how Dickens uses first-person retrospective narration to explore self-deception.',
    options: [
      'Pip tells the truth throughout',
      "The older Pip narrating his younger self's mistakes creates dramatic irony, allowing Dickens to critique both Pip's snobbery and the class system that shaped it",
      'The narration is third person',
      'Dickens chose first person at random',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Dharker use the extended metaphor of paper in "Tissue" to explore human fragility?',
    options: [
      'The poem is about recycling',
      'Paper becomes a multivalent symbol for human constructs (maps, money, records) whose apparent permanence disguises their fundamental fragility, just like human life',
      'Paper represents permanence',
      'Dharker is describing origami',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In "Poppies" by Weir, how does the domestic imagery create a powerful anti-war statement?',
    options: [
      'The poem is about gardening',
      "By focusing on a mother pinning a poppy to her son's blazer and smoothing his shirt collar, Weir centres the intimate, private grief that public remembrance ceremonies cannot capture",
      'The imagery is purely decorative',
      'Weir avoids any mention of war',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "How does Bronte use the character of St John Rivers in Jane Eyre to test Jane's values?",
    options: [
      'St John is the ideal husband',
      "St John's cold, dutiful proposal forces Jane to articulate the difference between self-sacrifice and self-annihilation, reaffirming her need for emotional equality",
      'Jane immediately accepts his proposal',
      'St John is a minor character',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // GRADE 9 - Conceptualised, critical, original
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?',
    options: [
      'The witches are entertaining',
      "The supernatural externalises Macbeth's ambition while creating dramatic tension; it also reflects Jacobean anxieties about fate versus free will",
      'Ghosts were popular in plays',
      'Shakespeare believed in witches',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".',
    options: [
      'Civilisation is always stable',
      'The rapid descent into savagery suggests civilisation is fragile, but characters like Simon and Ralph complicate a purely pessimistic reading',
      'All the boys are savage from the start',
      'The island causes madness',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Steinbeck use the American Dream as both a motivating force and a destructive illusion?',
    options: [
      'The dream always comes true',
      'The dream provides hope and purpose but its impossibility under systemic inequality leads to tragedy, reflecting 1930s socioeconomic realities',
      'Only George believes in it',
      'The dream is about moving to the city',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt: 'To what extent is "A Christmas Carol" a radical text in its Victorian context?',
    options: [
      'It is just a ghost story',
      'While conservative in proposing individual moral reform, its unflinching depiction of poverty and direct address to the reader made it a provocative social critique',
      'Dickens was not political',
      'It only entertains children',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.',
    options: [
      'Macbeth is purely evil',
      "The five-act structure traces Macbeth's hamartia; his soliloquies create sympathy while his actions provoke condemnation, creating a complex moral response",
      'Shakespeare did not plan the structure',
      'Macbeth is entirely a victim',
    ],
    correctIndex: 1,
  },
  // NEW Grade 9
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shelley use the sonnet form ironically in "Ozymandias" to reinforce the poem\'s message?',
    options: [
      'Shelley uses the sonnet because it is easy',
      "The sonnet's traditional associations with permanence and immortality are subverted by its subject matter of decay, and the irregular rhyme scheme itself enacts the dissolution of order",
      'The sonnet form has no significance',
      'Shelley did not choose the form deliberately',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate how Priestley uses time in "An Inspector Calls" to construct his political argument.',
    options: [
      'The play is set in 1945',
      "By setting the play in 1912 but writing in 1945, Priestley weaponises the audience's hindsight of two World Wars to demolish the Birlings' complacent capitalism, making the cyclical ending both a warning and a structural inevitability",
      'Time is irrelevant to the play',
      'Priestley chose 1912 at random',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'To what extent does Shelley present Victor Frankenstein as a critique of Romantic individualism in Frankenstein?',
    options: [
      'Victor is purely heroic',
      'Victor embodies the dangerous extreme of Romantic genius; his Promethean ambition to transcend natural limits ultimately destroys those around him, suggesting that unchecked individualism without social responsibility is catastrophic',
      "Shelley supported Victor's experiments",
      'Victor works openly as part of a team',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Owen use the gap between the title and the content of "Dulce et Decorum Est" to create a sustained rhetorical argument?',
    options: [
      'The title is simply a label',
      'The entire poem functions as evidence in a rhetorical trial, with the graphic imagery serving as counter-testimony to the Latin maxim, culminating in the direct address that converts the reader from passive observer to complicit participant in the lie',
      'Owen agrees with the Latin phrase',
      'The title was chosen by the publisher',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Bronte uses the Gothic genre in Jane Eyre both to satisfy and to critique Victorian readerly expectations.',
    options: [
      'Bronte follows Gothic conventions without deviation',
      'Bronte deploys Gothic tropes (the madwoman, the brooding hero, the mysterious house) but repurposes them as psychological realism, making Bertha a symbol of patriarchal oppression rather than mere sensationalism, thereby transforming genre fiction into social critique',
      'The Gothic elements are purely decorative',
      'Jane Eyre is not a Gothic novel',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Browning construct dramatic irony through the Duke\'s self-presentation in "My Last Duchess"?',
    options: [
      'The Duke is fully self-aware',
      "The Duke's attempt to present himself as a cultured, reasonable patron inadvertently reveals his pathological need for control; the gap between his self-image and the reader's horrified understanding creates a sustained irony that indicts aristocratic entitlement",
      'There is no irony in the poem',
      'The Duke is presented sympathetically',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically assess how Dickens uses the bildungsroman structure of Great Expectations to interrogate the Victorian myth of self-improvement.',
    options: [
      'Pip earns his fortune through hard work',
      'The novel traces Pip\'s internalisation and eventual rejection of class values; his "great expectations" prove to be founded on a convict\'s money, exposing the self-improvement narrative as a mechanism that perpetuates rather than challenges social hierarchy',
      'The novel has no structure',
      "Dickens endorses Pip's snobbery",
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Duffy use the metaphor of developing photographs in "War Photographer" to explore the ethics of representing suffering?',
    options: [
      'The poem is about photography techniques',
      "The slow emergence of images in developing fluid mirrors how suffering surfaces in comfortable Western consciousness, while the editor's selection of a few frames from hundreds critiques how media reduces complex humanitarian crises to consumable content",
      'Duffy celebrates photojournalism',
      'The darkroom is purely a setting',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Evaluate how Shakespeare uses the Friar in Romeo and Juliet as both a figure of hope and a structural instrument of tragedy.',
    options: [
      'The Friar is purely a villain',
      "The Friar's well-intentioned interventions (the marriage, the sleeping potion) embody the play's central paradox: that love and reason are insufficient against the structural forces of hatred, suggesting that individual goodwill cannot overcome systemic violence",
      'The Friar is irrelevant to the plot',
      'Shakespeare presents the Friar as infallible',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Blake use the concept of "chartered" in "London" to construct a critique of institutional power?',
    options: [
      'Chartered simply means mapped',
      'The word simultaneously invokes commercial charters (monopolies granted by the Crown) and mapped/controlled spaces, collapsing economic exploitation and spatial control into a single image that indicts how institutional power commodifies both land and human freedom',
      'Blake is describing a pleasant city',
      'The word has no special significance',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'To what extent does Armitage present the speaker in "Remains" as trapped between two selves?',
    options: [
      'The speaker is at peace',
      'The colloquial, anecdotal tone of the retelling clashes with the obsessive, haunted repetition of the final stanzas, suggesting the speaker is permanently fractured between his soldierly self (who must be indifferent) and his human self (who cannot forget), reflecting the impossibility of moral resolution after killing',
      'The speaker has fully recovered',
      'Armitage presents a single coherent voice',
    ],
    correctIndex: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ADDITIONAL QUESTIONS - broader coverage
  // ═══════════════════════════════════════════════════════════════════════════════

  // Grade 3 - additional
  {
    grade: 3,
    type: 'technique',
    prompt: '"Her smile was like sunshine." What technique is used?',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does an ellipsis (...) at the end of a sentence usually suggest?',
    options: [
      'The writer forgot to finish',
      'Suspense, a trailing thought, or something left unsaid',
      'A happy ending',
      'A spelling mistake',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The thunder grumbled in the distance." What technique is used?',
    options: ['Simile', 'Alliteration', 'Personification', 'Repetition'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'If a character is described as having "fiery eyes", what does this suggest?',
    options: [
      'Their eyes are on fire',
      'They are angry or passionate',
      'They need glasses',
      'They are tired',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"The buzzing bees flew by." Which technique is "buzzing" an example of?',
    options: ['Personification', 'Simile', 'Onomatopoeia', 'Metaphor'],
    correctIndex: 2,
  },
  {
    grade: 3,
    type: 'meaning',
    prompt: 'What does the word "crept" suggest about how someone is moving?',
    options: [
      'Quickly and loudly',
      'Slowly and secretly',
      'Happily and openly',
      'Clumsily and noisily',
    ],
    correctIndex: 1,
  },
  {
    grade: 3,
    type: 'technique',
    prompt: '"Time is money." What technique is this?',
    options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
    correctIndex: 1,
  },

  // Grade 4 - additional
  {
    grade: 4,
    type: 'technique',
    prompt: '"Alone, alone, all all alone." What technique is used?',
    options: ['Simile', 'Repetition', 'Metaphor', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What does it mean if a writer describes a character\'s hands as "trembling"?',
    options: [
      'They are bored',
      'They are nervous, scared, or emotional',
      'They are strong',
      'They are waving hello',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'analysis',
    prompt: 'Why might a writer use a flashback?',
    options: [
      'Because they forgot to include something',
      "To provide background information and help the reader understand a character's motivations",
      'To confuse the reader',
      'To make the text longer',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The silence was deafening." What technique is this?',
    options: ['Simile', 'Personification', 'Oxymoron', 'Alliteration'],
    correctIndex: 2,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'In Romeo and Juliet, why are the families called "Montagues" and "Capulets"?',
    options: [
      'They are named after London theatres',
      'Shakespeare took them from the older story he adapted',
      'Shakespeare chose them randomly',
      'They are Italian words for love',
    ],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'technique',
    prompt: '"The road stretched endlessly before them." What technique is used?',
    options: ['Personification', 'Hyperbole', 'Simile', 'Onomatopoeia'],
    correctIndex: 1,
  },
  {
    grade: 4,
    type: 'meaning',
    prompt: 'What is the effect of a writer using a question as the opening of a text?',
    options: [
      'It shows the writer does not know the answer',
      'It hooks the reader and makes them curious',
      'It is a sign of poor writing',
      'It creates a sad mood',
    ],
    correctIndex: 1,
  },

  // Grade 5 - additional
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Macbeth, why does Lady Macbeth sleepwalk and try to wash her hands?',
    options: [
      'She is tired',
      "Her guilt over Duncan's murder manifests physically, showing she cannot escape her conscience",
      'She has a skin condition',
      'She is cleaning the castle',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt: 'In "Poppies" by Weir, what do poppies symbolise?',
    options: [
      'Spring gardening',
      'Remembrance of those lost in conflict',
      'The colour red',
      'Happiness and celebration',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is free verse?',
    options: [
      'Poetry that is free to read',
      'Poetry without a regular rhyme scheme or metre',
      'A type of sonnet',
      'Poetry written in paragraphs',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Animal Farm, what does the windmill represent?',
    options: [
      'A real windmill on a farm',
      'The promises of industrialisation and progress used to manipulate the working class',
      "Napoleon's favourite building",
      'The power of nature',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'meaning',
    prompt:
      'In "War Photographer" by Duffy, what does "a hundred agonies in black and white" suggest?',
    options: [
      'The photos are very old',
      'Immense suffering is reduced to monochrome images that fail to convey the full horror',
      'The photographer only uses black and white film',
      'There are exactly one hundred photos',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'analysis',
    prompt: 'In Jekyll and Hyde, why does Hyde become progressively harder to control?',
    options: [
      'Jekyll becomes physically stronger',
      'The evil side of human nature, once unleashed, grows stronger, suggesting repression only intensifies desire',
      'Utterson protects Hyde',
      'The potion expires',
    ],
    correctIndex: 1,
  },
  {
    grade: 5,
    type: 'technique',
    prompt: 'What is an extended metaphor?',
    options: [
      'A very long sentence',
      'A metaphor that is developed over several lines or throughout a whole text',
      'Two metaphors side by side',
      'A metaphor that is obvious',
    ],
    correctIndex: 1,
  },

  // Grade 6 - additional
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In Romeo and Juliet, how does the oxymoron "loving hate" reflect the play\'s central conflict?',
    options: [
      'Romeo is describing his love for Juliet',
      'It captures the paradox of love born from feuding families, where affection and violence are inseparable',
      'Shakespeare made a mistake',
      'It describes Tybalt',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "Exposure" by Owen, how does the refrain "But nothing happens" create meaning?',
    options: [
      'It shows the soldiers are safe and comfortable',
      'The repetition emphasises the futility and monotony of trench warfare, where the real enemy is inaction and exposure rather than combat',
      'Owen ran out of ideas',
      'It means the war is over',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt: 'In Animal Farm, why does Orwell have the pigs learn to walk on two legs?',
    options: [
      'Pigs can really walk upright',
      'It visually represents how the revolutionary leaders have adopted the behaviour of the human oppressors they overthrew',
      'It is humorous',
      'The pigs want to exercise',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In "The Charge of the Light Brigade", how does Tennyson use rhythm to create meaning?',
    options: [
      'The rhythm is random',
      'The driving metre, dactylic dimeter (DUM-da-da DUM-da-da), mimics the thundering hooves of the cavalry charge, creating an unstoppable momentum',
      'Tennyson used a metronome',
      'The rhythm slows throughout',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      "In Macbeth, how does Shakespeare use the banquet scene to reveal Macbeth's psychological state?",
    options: [
      'Macbeth is hungry',
      "Banquo's ghost, visible only to Macbeth, dramatises his guilt and paranoia, exposing his crimes in front of the court",
      'The scene is about food',
      'Macbeth performs well at the banquet',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'meaning',
    prompt:
      "In Frankenstein, what does the Creature's request for a companion reveal about his character?",
    options: [
      'He wants a servant to obey him',
      'His desire for connection shows his fundamental humanity and suggests that isolation, not nature, has made him violent',
      'He wants to create an army',
      'He is copying Victor',
    ],
    correctIndex: 1,
  },
  {
    grade: 6,
    type: 'analysis',
    prompt:
      'In "Dulce et Decorum Est", what effect does Owen create by directly addressing "you" in the final stanza?',
    options: [
      "He is praising the reader's courage",
      'He implicates the reader and propagandists in the lie, making complacency impossible',
      'It is a grammatical error',
      'He is addressing the soldiers',
    ],
    correctIndex: 1,
  },

  // Grade 7 - additional
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In "Poppies" by Weir, how does the poet use time to structure the mother\'s grief?',
    options: [
      'The poem follows a strict timeline',
      'The poem moves between past and present, showing how memory and loss collapse time for the grieving mother',
      'Time is irrelevant in the poem',
      'The poem is set entirely in the future',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt: 'In Animal Farm, how does Orwell use Boxer to represent the working class?',
    options: [
      'Boxer is intelligent and critical',
      "Boxer's strength, loyalty, and eventual betrayal by the pigs illustrate how the ruling class exploits workers' labour and discards them when they are no longer useful",
      'Boxer represents the middle class',
      'Boxer successfully rebels',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Bayonet Charge" by Hughes, how does the shift from "he" to describing a "yellow hare" create meaning?',
    options: [
      'The soldier is hunting',
      "The hare becomes a mirror for the soldier's terror, stripping away patriotic abstractions to reveal the raw, animal instinct for survival",
      'Hughes liked animals',
      'The hare is irrelevant',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In Macbeth, how does Shakespeare present the relationship between Macbeth and Lady Macbeth as a reversal of gender expectations?',
    options: [
      'They have a normal marriage',
      "Lady Macbeth initially dominates through manipulation and questioning Macbeth's masculinity, but as guilt consumes her, she becomes fragile while Macbeth hardens into tyranny",
      'Lady Macbeth is always submissive',
      'Gender is irrelevant in the play',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Checking Out Me History" by Agard, how does the contrast between colonial and Caribbean histories serve the poem\'s argument?',
    options: [
      'Both histories are presented equally',
      'The folk-tale and nursery-rhyme triviality of colonial history (Dick Whittington, Old King Cole) is juxtaposed with the heroic dignity of Caribbean figures, exposing how the curriculum devalues non-white achievement',
      'Agard prefers British history',
      'The poem makes no political argument',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In Jekyll and Hyde, how does Stevenson use the physical contrast between Jekyll and Hyde to explore Victorian anxieties?',
    options: [
      'They look the same',
      "Hyde's smaller, younger, deformed body suggests that the repressed desires of respectable Victorian men are stunted and monstrous, reflecting fears about what lies beneath social propriety",
      'The contrast is purely physical',
      'Stevenson wanted a villain who looked scary',
    ],
    correctIndex: 1,
  },

  // Grade 8 - additional
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'How does Tennyson simultaneously celebrate and question military obedience in "The Charge of the Light Brigade"?',
    options: [
      'Tennyson only celebrates the soldiers',
      "The poem honours the soldiers' bravery and discipline while the line about the blunder and the imagery of the valley of death implicitly questions a command structure that sends men to certain death",
      'Tennyson criticises the soldiers',
      'The poem has no political dimension',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In "The Émigrée" by Rumens, evaluate how the poet uses light as a motif to resist political oppression.',
    options: [
      'Light describes the weather',
      "The persistent sunlight in the speaker's memory functions as an act of defiance; no matter how the city is invaded or oppressed, the luminous personal memory cannot be conquered, making imagination a form of political resistance",
      'The light fades throughout the poem',
      'Light represents danger',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      'In Macbeth, evaluate how Shakespeare uses the Porter scene to both relieve and intensify dramatic tension.',
    options: [
      'The Porter scene is a mistake',
      "The comic interlude provides relief after Duncan's murder but its references to hell and equivocation create a thematic bridge, suggesting that Macbeth's castle has become a kind of hell and that moral ambiguity pervades every level of society",
      'The Porter scene is purely funny',
      'Shakespeare forgot about the murder',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'How does Weir use the absence of the soldier\'s voice in "Poppies" to create meaning?',
    options: [
      'The soldier speaks throughout',
      "The son's silence forces the reader to experience loss through the mother's perspective alone, making the poem a powerful statement about the voicelessness of the dead and the private grief of those left behind",
      'The poet forgot to include dialogue',
      'The soldier is too young to speak',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt: 'In "Tissue" by Dharker, evaluate how the final stanza shifts the poem\'s meaning.',
    options: [
      'The final stanza is unrelated',
      'The shift from paper to human skin reframes the entire poem, revealing that the true subject is not paper but the human body itself, suggesting that our most precious structure is also our most fragile',
      'The final stanza repeats the first',
      'Dharker changes topic accidentally',
    ],
    correctIndex: 1,
  },

  // Grade 9 - additional
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Shelley construct "Ozymandias" as a meditation on the relationship between art and power?',
    options: [
      'Art and power are unrelated in the poem',
      "The sculptor's art outlasts the king's empire, but the poem itself outlasts both, creating a hierarchy where poetic language triumphs over both political authority and visual representation, making the act of writing an assertion of lasting power over transience",
      "The poem celebrates Ozymandias's power",
      'Shelley believed art was inferior to politics',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically evaluate how Owen uses the form of "Exposure" to embody the soldiers\' experience.',
    options: [
      'The form is conventional',
      "The pararhyme (half-rhyme) creates a persistent sense of dissonance and incompleteness that mirrors the soldiers' unresolved trauma, while the shortened final lines of each stanza enact the diminishing of hope and life in the trenches",
      'Owen uses perfect rhyme throughout',
      'The form has no connection to meaning',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt: 'To what extent does Shakespeare present fate as inescapable in Romeo and Juliet?',
    options: [
      'The characters have complete free will',
      "While the Prologue and cosmic imagery suggest fatalistic inevitability, the play simultaneously shows how human choices (Tybalt's aggression, the Friar's schemes, Romeo's impulsiveness) drive the tragedy, creating an unresolvable tension between destiny and agency that makes the play philosophically rich rather than simply predetermined",
      'Shakespeare did not believe in fate',
      'Only Romeo believes in fate',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'How does Hughes use the disruption of patriotic language in "Bayonet Charge" to deconstruct war propaganda?',
    options: [
      'Hughes supports patriotism',
      'The poem systematically dismantles abstractions like "king", "honour", and "human dignity" by placing them inside the physical chaos of a charge, revealing how these concepts dissolve when confronted with the visceral terror of actual combat, suggesting that ideology cannot survive contact with bodily reality',
      'The poem contains no patriotic language',
      'Hughes was a war propagandist',
    ],
    correctIndex: 1,
  },
  {
    grade: 9,
    type: 'analysis',
    prompt:
      'Critically assess how Stevenson uses the will and testament in Jekyll and Hyde as both a legal and symbolic device.',
    options: [
      'The will is a minor detail',
      "Jekyll's will, which leaves everything to Hyde, functions as a legal paradox that encodes the novel's central theme: the terrifying possibility that a respectable man might willingly bequeath his identity to his worst self, making the legal document a site of Gothic horror where social order confronts its own dissolution",
      'The will is straightforward',
      'Stevenson included it for realism',
    ],
    correctIndex: 1,
  },

  // Final additions
  {
    grade: 6,
    type: 'analysis',
    prompt: 'In Great Expectations, what does the marshland at the opening of the novel symbolise?',
    options: [
      'A pleasant countryside',
      'The bleak, dangerous, and morally ambiguous world Pip must navigate, foreshadowing the hardships ahead',
      'Dickens liked nature descriptions',
      'The setting is irrelevant',
    ],
    correctIndex: 1,
  },
  {
    grade: 7,
    type: 'analysis',
    prompt:
      'In "Dulce et Decorum Est", how does Owen\'s use of the present tense in the third stanza create impact?',
    options: [
      'It is a grammatical mistake',
      'The sudden shift to the present tense shows the dying soldier still haunts his dreams, so the gas attack is relived again and again rather than left in the past',
      'Present tense is always used in poetry',
      'Owen forgot to use past tense',
    ],
    correctIndex: 1,
  },
  {
    grade: 8,
    type: 'analysis',
    prompt:
      "In Lord of the Flies, evaluate how Golding uses Piggy's glasses as a symbol that evolves throughout the novel.",
    options: [
      'The glasses are just for reading',
      'Initially representing intellectual clarity and civilisation (fire-making), their theft and destruction trace the disintegration of rational thought and democratic values on the island',
      'The glasses have no symbolic value',
      'Golding wore glasses himself',
    ],
    correctIndex: 1,
  },
]

export const BANK: GameBank<GradeQuestion> = {
  slug: 'grade-climber',
  items: QUESTION_BANK,
  // No two prompts are the same, and the prompt is what the student sees.
  key: (q) => q.prompt,
  answer: (q) => q.options[q.correctIndex],
  options: (q) => q.options,
  tag: (q) => q.type,
}
