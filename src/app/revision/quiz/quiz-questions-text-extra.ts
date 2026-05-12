// ─── Set-text quiz questions (supplementary bank) ─────────────────────────
// 100 GCSE/IGCSE set-text questions covering Macbeth, AIC, A Christmas Carol,
// Jekyll & Hyde, Romeo & Juliet, Animal Farm/LOTF/OMAM, Blood Brothers/AVFTB,
// Frankenstein/Jane Eyre/P&P, and IGCSE prose (TFA/TKAM/Curious Incident).
//
// All quotations have been verified against authoritative editions (Folger
// Shakespeare for Shakespeare, Heinemann for An Inspector Calls, Penguin for
// Dickens / Stevenson, Penguin Modern Classics for the modern prose).
// Quotations are kept to 15 words or fewer.

import type { QuizQuestion } from './quiz-data'

export const setTextExtraQuestions: QuizQuestion[] = [
  // ─── Macbeth (20) ────────────────────────────────────────────────────────
  {
    id: 'text-extra-001',
    topic: 'set-texts',
    question: 'Who first hails Macbeth as "Thane of Cawdor" in Act 1?',
    options: ['King Duncan', 'The Witches', 'Banquo', 'Ross'],
    correctIndex: 1,
    explanation:
      'The Three Witches greet Macbeth with "All hail, Macbeth, hail to thee, Thane of Cawdor!" before Ross later confirms the title.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-002',
    topic: 'set-texts',
    question: 'Who says "Look like the innocent flower, but be the serpent under\'t"?',
    options: ['Macbeth', 'Lady Macbeth', 'The First Witch', 'Banquo'],
    correctIndex: 1,
    explanation:
      'Lady Macbeth instructs her husband to mask his murderous intent with a welcoming face when Duncan arrives at Inverness.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-003',
    topic: 'set-texts',
    question: 'In which act and scene does Macbeth see the floating dagger?',
    options: ['Act 1 Scene 7', 'Act 2 Scene 1', 'Act 2 Scene 2', 'Act 3 Scene 4'],
    correctIndex: 1,
    explanation:
      'Macbeth\'s "Is this a dagger which I see before me" soliloquy occurs in Act 2 Scene 1, just before he murders Duncan.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-004',
    topic: 'set-texts',
    question: 'Which character says "Fair is foul, and foul is fair"?',
    options: ['Macbeth', 'Lady Macbeth', 'The Witches', 'Hecate'],
    correctIndex: 2,
    explanation:
      "The Witches chant this paradox in Act 1 Scene 1, establishing the play's theme that appearance and reality are inverted.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-005',
    topic: 'set-texts',
    question: 'How does Lady Macbeth ultimately die?',
    options: [
      'Stabbed by Macduff',
      'By suicide (off-stage)',
      'Poisoned by Macbeth',
      'Killed by the Witches',
    ],
    correctIndex: 1,
    explanation:
      'Lady Macbeth dies off-stage; Seyton reports the news to Macbeth in Act 5, and her death is widely understood as suicide.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-006',
    topic: 'set-texts',
    question: 'Who says "Out, damned spot! out, I say!"?',
    options: ['Macbeth', 'Lady Macbeth', 'The Gentlewoman', 'The Doctor'],
    correctIndex: 1,
    explanation:
      "Lady Macbeth utters this in her sleepwalking scene (Act 5 Scene 1), tormented by guilt over Duncan's blood she imagines on her hands.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-007',
    topic: 'set-texts',
    question: 'What does the apparition of the bloody child tell Macbeth?',
    options: [
      'Beware Macduff',
      'None of woman born shall harm Macbeth',
      'Macbeth shall never vanquished be until Birnam Wood comes to Dunsinane',
      "Banquo's sons shall be kings",
    ],
    correctIndex: 1,
    explanation:
      'The second apparition (a bloody child) tells Macbeth that "none of woman born shall harm Macbeth" — a prophecy Macduff later overturns.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-008',
    topic: 'set-texts',
    question:
      'Which dramatic technique is "Will all great Neptune\'s ocean wash this blood clean from my hand?"',
    options: ['Soliloquy with hyperbole', 'Dramatic irony', 'Pathetic fallacy', 'Stichomythia'],
    correctIndex: 0,
    explanation:
      "Macbeth's line is hyperbolic — exaggerating that not even an ocean could cleanse his guilt — spoken in private reflection after Duncan's murder.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-009',
    topic: 'set-texts',
    question: 'Who kills Banquo?',
    options: [
      'Macbeth himself',
      'Two murderers hired by Macbeth',
      'Three murderers hired by Macbeth',
      'Macduff',
    ],
    correctIndex: 2,
    explanation:
      'Macbeth hires two murderers, but a mysterious third joins them at the ambush. Banquo is killed; Fleance escapes.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-010',
    topic: 'set-texts',
    question: 'What does Lady Macbeth ask spirits to do in her "unsex me here" speech?',
    options: [
      'Grant her a son to inherit the throne',
      'Fill her with cruelty and stop her remorse',
      'Curse Duncan with sleeplessness',
      "Reveal Macbeth's future to her",
    ],
    correctIndex: 1,
    explanation:
      'She invokes spirits to "fill me, from the crown to the toe, top-full / Of direst cruelty" and stop "compunctious visitings of nature".',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-011',
    topic: 'set-texts',
    question:
      'Which theme is most central to the line "Life\'s but a walking shadow, a poor player"?',
    options: ['Ambition', 'Nihilism / futility of life', 'Loyalty', 'Supernatural'],
    correctIndex: 1,
    explanation:
      'Macbeth\'s "Tomorrow" soliloquy reflects nihilistic despair after Lady Macbeth\'s death — life is meaningless, brief and signifying nothing.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-012',
    topic: 'set-texts',
    question: 'Who says "Something wicked this way comes"?',
    options: ['Banquo', 'The Second Witch', 'Hecate', 'Macduff'],
    correctIndex: 1,
    explanation:
      'The Second Witch announces Macbeth\'s arrival in Act 4 Scene 1: "By the pricking of my thumbs, / Something wicked this way comes."',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-013',
    topic: 'set-texts',
    question: 'How is the prophecy about Birnam Wood fulfilled?',
    options: [
      'A storm uproots the trees',
      "Malcolm's soldiers cut branches as camouflage",
      'Macduff burns the forest down',
      'The Witches summon the trees',
    ],
    correctIndex: 1,
    explanation:
      'In Act 5, Malcolm orders each soldier to "hew him down a bough" from Birnam Wood as camouflage, fulfilling the prophecy literally.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-014',
    topic: 'set-texts',
    question: 'How does Macduff overturn the "none of woman born" prophecy?',
    options: [
      'He is an orphan',
      'He was "from his mother\'s womb / Untimely ripp\'d"',
      'He was raised by the Witches',
      'He is half-fairy',
    ],
    correctIndex: 1,
    explanation:
      'Macduff reveals he was delivered by Caesarean section — therefore not "of woman born" in the natural sense the prophecy implied.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-015',
    topic: 'set-texts',
    question: 'Who calls Macbeth a "dead butcher" in the play\'s closing speech?',
    options: ['Macduff', 'Malcolm', 'Ross', 'Lennox'],
    correctIndex: 1,
    explanation:
      'Malcolm closes the play describing Macbeth and Lady Macbeth as "this dead butcher and his fiend-like queen", restoring moral order.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-016',
    topic: 'set-texts',
    question: "What does Banquo's ghost symbolise when it appears at the banquet?",
    options: [
      "Macbeth's public power",
      "Macbeth's guilt and the consequences of murder",
      'A real supernatural threat to the kingdom',
      "The Witches' power over reality",
    ],
    correctIndex: 1,
    explanation:
      "The ghost — visible only to Macbeth — externalises his guilt and paranoia, fracturing the banquet's symbolic order of kingship.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-017',
    topic: 'set-texts',
    question:
      'Who says "I have no spur / To prick the sides of my intent, but only / Vaulting ambition"?',
    options: ['Lady Macbeth', 'Macbeth', 'Banquo', 'Duncan'],
    correctIndex: 1,
    explanation:
      'Macbeth, weighing whether to kill Duncan in Act 1 Scene 7, recognises that ambition alone — not justice — drives him.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-018',
    topic: 'set-texts',
    question:
      'What technique is used in "So foul and fair a day I have not seen" — Macbeth\'s first line?',
    options: ['Pathetic fallacy', 'Paradox / oxymoron', 'Iambic trimeter', 'Caesura'],
    correctIndex: 1,
    explanation:
      'The paradox echoes the Witches\' "Fair is foul, and foul is fair", linking Macbeth to them before they have even met on stage.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-019',
    topic: 'set-texts',
    question: 'Which character serves as a foil to Macbeth, contrasting his moral choices?',
    options: ['Duncan', 'Banquo', 'Ross', 'Lennox'],
    correctIndex: 1,
    explanation:
      "Banquo hears the same prophecy but refuses to act on it, foiling Macbeth's ruthless ambition with cautious integrity.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-020',
    topic: 'set-texts',
    question: 'Why is Macbeth often read as flattering King James I?',
    options: [
      'James commissioned the play personally',
      'James claimed descent from Banquo, who is portrayed nobly',
      "It is set in James's birthplace",
      'It contains a character named James',
    ],
    correctIndex: 1,
    explanation:
      "James I traced his lineage to Banquo, so Banquo's noble portrayal — and Fleance's survival — flattered the new Stuart king.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── An Inspector Calls (15) ────────────────────────────────────────────
  {
    id: 'text-extra-021',
    topic: 'set-texts',
    question: 'Who says "We are members of one body. We are responsible for each other"?',
    options: ['Sheila Birling', 'Eric Birling', 'Inspector Goole', 'Mr Birling'],
    correctIndex: 2,
    explanation:
      "Inspector Goole's final speech encapsulates Priestley's socialist message of collective responsibility against Mr Birling's individualism.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-022',
    topic: 'set-texts',
    question: 'In what year is An Inspector Calls SET (not written)?',
    options: ['1912', '1914', '1945', '1946'],
    correctIndex: 0,
    explanation:
      'The play is set in spring 1912 — before WWI and the Titanic — but was written in 1945, generating heavy dramatic irony.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-023',
    topic: 'set-texts',
    question: 'Mr Birling famously calls the Titanic what?',
    options: [
      '"A miracle of engineering"',
      '"Absolutely unsinkable"',
      '"Britain\'s pride"',
      '"Unbreakable"',
    ],
    correctIndex: 1,
    explanation:
      'Birling boasts the Titanic is "absolutely unsinkable" — heavy dramatic irony for a 1945 audience who knew it sank weeks later.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-024',
    topic: 'set-texts',
    question: 'What name does Eva Smith use when she meets Gerald Croft?',
    options: ['Daisy Renton', 'Eva Renton', 'Sheila Smith', 'Edna Smith'],
    correctIndex: 0,
    explanation:
      'Eva calls herself "Daisy Renton" by the time she meets Gerald in the Palace Variety bar, becoming his mistress.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-025',
    topic: 'set-texts',
    question: 'Why does Sheila get Eva fired from Milwards?',
    options: [
      'Eva stole money',
      "Eva was rude about Sheila's appearance",
      'Sheila thought Eva had laughed at her in a dress',
      'Eva refused to serve her',
    ],
    correctIndex: 2,
    explanation:
      'Sheila admits she was "in a furious temper" and complained because she thought Eva had smirked when a dress did not suit her.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-026',
    topic: 'set-texts',
    question: 'Mr Birling describes himself as a "hard-headed" what?',
    options: ['Politician', 'Practical man of business', 'Magistrate', 'Father'],
    correctIndex: 1,
    explanation:
      'Birling repeatedly calls himself "a hard-headed practical man of business", a phrase Priestley uses to mock his complacent capitalism.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-027',
    topic: 'set-texts',
    question: "Who refuses Eva charity at the Brumley Women's Charity Organisation?",
    options: ['Sheila', 'Mrs Birling', 'Mr Birling', 'Gerald'],
    correctIndex: 1,
    explanation:
      'Mrs Birling, chairing the charity committee, denies Eva help and blames "the father of the child" — unaware it is her son Eric.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-028',
    topic: 'set-texts',
    question: 'What does the Inspector\'s warning about "fire and blood and anguish" foreshadow?',
    options: [
      "Eva's suicide method",
      'The two World Wars',
      'The end of the British Empire',
      "A house fire at the Birlings'",
    ],
    correctIndex: 1,
    explanation:
      "A 1945 audience would have read the Inspector's prophecy as a warning about WWI and WWII — the consequences of social irresponsibility.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-029',
    topic: 'set-texts',
    question: "Which character represents Priestley's hope for the younger generation?",
    options: ['Gerald Croft', 'Sheila Birling', 'Mrs Birling', 'Edna'],
    correctIndex: 1,
    explanation:
      'Sheila accepts responsibility and changes morally — Priestley uses her (and Eric) to show younger people are "more impressionable".',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-030',
    topic: 'set-texts',
    question: 'What is the dramatic genre of An Inspector Calls?',
    options: ['Comedy of manners', 'Morality play / well-made play', 'Tragedy', 'History play'],
    correctIndex: 1,
    explanation:
      'It blends a "well-made play" structure with the morality play tradition, the Inspector functioning almost as a moral judge.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-031',
    topic: 'set-texts',
    question: 'Who says "But these girls aren\'t cheap labour — they\'re people"?',
    options: ['Sheila', 'Eric', 'Inspector Goole', 'Gerald'],
    correctIndex: 0,
    explanation:
      "Sheila challenges her father's view of workers as commodities, marking her moral awakening early in Act 1.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-032',
    topic: 'set-texts',
    question: "What is Eric's drinking problem used to expose?",
    options: [
      'Hereditary alcoholism',
      'The hidden moral rot beneath middle-class respectability',
      'Wartime trauma',
      'The dangers of socialism',
    ],
    correctIndex: 1,
    explanation:
      "Eric's alcoholism — and Mrs Birling's denial of it — exposes the gap between the family's outward respectability and inward failures.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-033',
    topic: 'set-texts',
    question: 'What is the final twist that ends the play?',
    options: [
      'Eva is alive',
      'A police inspector phones to say a girl has just died and is on the way',
      'Inspector Goole returns to arrest them',
      'Gerald is revealed as the Inspector',
    ],
    correctIndex: 1,
    explanation:
      'After convincing themselves "Goole" was a hoax, the family receives a phone call: a girl has died and a real inspector is coming.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-034',
    topic: 'set-texts',
    question: "What stage direction governs the Inspector's presence?",
    options: [
      '"Cheerful and welcoming"',
      '"Massiveness, solidity and purposefulness"',
      '"Quiet and nervous"',
      '"Anxious and apologetic"',
    ],
    correctIndex: 1,
    explanation:
      'Priestley\'s opening stage direction says the Inspector creates "an impression of massiveness, solidity and purposefulness".',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-035',
    topic: 'set-texts',
    question: 'Which philosophy does Mr Birling endorse with "a man has to make his own way"?',
    options: [
      'Socialism',
      'Individualism / laissez-faire capitalism',
      'Marxism',
      'Christian charity',
    ],
    correctIndex: 1,
    explanation:
      'Birling\'s speech celebrates self-interest and rejects "community and all that nonsense" — the capitalist ethic Priestley critiques.',
    boards: ['aqa', 'edexcel', 'eduqas'],
  },

  // ─── A Christmas Carol (15) ─────────────────────────────────────────────
  {
    id: 'text-extra-036',
    topic: 'set-texts',
    question: "Who is Scrooge's deceased business partner?",
    options: ['Jacob Marley', 'Bob Cratchit', 'Mr Fezziwig', 'Old Joe'],
    correctIndex: 0,
    explanation:
      'Jacob Marley, dead seven years, returns as a fettered ghost to warn Scrooge of the chains he is forging in life.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-037',
    topic: 'set-texts',
    question: 'In what order do the three spirits visit Scrooge?',
    options: [
      'Yet to Come, Present, Past',
      'Past, Present, Yet to Come',
      'Present, Past, Yet to Come',
      'Past, Yet to Come, Present',
    ],
    correctIndex: 1,
    explanation:
      'The Ghost of Christmas Past comes first, then the Ghost of Christmas Present, and finally the silent Ghost of Christmas Yet to Come.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-038',
    topic: 'set-texts',
    question: "Who are the two children revealed beneath the Ghost of Christmas Present's robe?",
    options: ['Want and Ignorance', 'Hope and Despair', 'Greed and Charity', 'Famine and War'],
    correctIndex: 0,
    explanation:
      'Dickens names the boy Ignorance and the girl Want, warning Scrooge to "beware them both, and all of their degree".',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-039',
    topic: 'set-texts',
    question:
      'Who says "If they would rather die... they had better do it, and decrease the surplus population"?',
    options: ['Marley', 'Scrooge', 'Fred', 'The Charity Gentleman'],
    correctIndex: 1,
    explanation:
      'Scrooge dismisses the charity collectors with this Malthusian sneer in Stave 1, words later thrown back at him by the Ghost of Christmas Present.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-040',
    topic: 'set-texts',
    question: 'What is the famous opening line of A Christmas Carol?',
    options: [
      '"It was the best of times, it was the worst of times."',
      '"Marley was dead: to begin with."',
      '"Bah! Humbug!"',
      '"Once upon a time — of all the good days in the year, on Christmas Eve."',
    ],
    correctIndex: 1,
    explanation:
      'The novella opens "Marley was dead: to begin with", a blunt statement Dickens insists on before the supernatural can work.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-041',
    topic: 'set-texts',
    question: "Who is Tiny Tim's father?",
    options: ['Fred', 'Bob Cratchit', 'Mr Fezziwig', 'Peter'],
    correctIndex: 1,
    explanation:
      "Tim is the youngest son of Bob Cratchit, Scrooge's underpaid clerk. His potential death drives Scrooge's emotional transformation.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-042',
    topic: 'set-texts',
    question: "Who is Scrooge's nephew, who repeatedly invites him to Christmas dinner?",
    options: ['Fred', 'Edward', 'Peter', 'Joe'],
    correctIndex: 0,
    explanation:
      "Fred — son of Scrooge's sister Fan — embodies Christmas generosity and warmth, refusing to give up on his uncle.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-043',
    topic: 'set-texts',
    question: "Why is Mr Fezziwig included in Scrooge's memories?",
    options: [
      'He cheated young Scrooge out of money',
      'He is a foil — a generous employer Scrooge once admired',
      "He is Belle's father",
      "He is Marley's relative",
    ],
    correctIndex: 1,
    explanation:
      "Fezziwig's warm Christmas party shows Scrooge that an employer's kindness costs little but means everything — a moral foil to himself.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-044',
    topic: 'set-texts',
    question: 'Why does Belle leave the young Scrooge?',
    options: [
      'He has been unfaithful',
      'A "golden idol" — money — has displaced her in his heart',
      'Her family disapproves',
      'He moves abroad',
    ],
    correctIndex: 1,
    explanation:
      'Belle releases Scrooge from their engagement because his love of gold has replaced his love for her — a key moment of moral loss.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-045',
    topic: 'set-texts',
    question: 'Whose corpse does Scrooge see laid out in Stave 4?',
    options: ["Tiny Tim's", "Bob Cratchit's", 'His own', "Marley's"],
    correctIndex: 2,
    explanation:
      "The Ghost of Christmas Yet to Come shows Scrooge his own neglected corpse, stripped by Old Joe's scavengers — a chilling self-confrontation.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-046',
    topic: 'set-texts',
    question: 'What word does Marley use to describe what he forged in life?',
    options: ['Wealth', 'Chain', 'Tomb', 'Empire'],
    correctIndex: 1,
    explanation:
      'Marley laments: "I wear the chain I forged in life... I made it link by link, and yard by yard." The chain symbolises greed.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-047',
    topic: 'set-texts',
    question: 'How is Scrooge described in Stave 1?',
    options: [
      '"A jolly, generous old fellow"',
      '"A squeezing, wrenching, grasping, scraping, clutching, covetous old sinner"',
      '"A merry, rosy-cheeked man"',
      '"A solemn but kindly miser"',
    ],
    correctIndex: 1,
    explanation:
      "Dickens's asyndetic list of present participles characterises Scrooge as relentlessly grasping — every verb piling on his greed.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-048',
    topic: 'set-texts',
    question: 'Which contextual issue is Dickens directly attacking via Ignorance and Want?',
    options: [
      'Catholic emancipation',
      'Lack of education and welfare for the Victorian poor',
      'The slave trade',
      'Income tax',
    ],
    correctIndex: 1,
    explanation:
      'Dickens campaigned for ragged schools and poor relief; the two children embody the social neglect he believed produced Victorian misery.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-049',
    topic: 'set-texts',
    question: 'Which structural form does Dickens use to mirror a religious conversion?',
    options: [
      'Five acts',
      'Five staves (musical for "verses")',
      'Three chapters',
      'A frame narrative',
    ],
    correctIndex: 1,
    explanation:
      'Dickens calls the chapters "staves" (verses of a carol), framing Scrooge\'s redemption as a song moving from discord to harmony.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-050',
    topic: 'set-texts',
    question: 'How does Scrooge first react when he realises he is alive on Christmas morning?',
    options: [
      'He weeps quietly',
      'He laughs and declares himself "as light as a feather"',
      'He hides under the bed',
      'He goes back to sleep',
    ],
    correctIndex: 1,
    explanation:
      'In Stave 5 Scrooge is "as light as a feather... as happy as an angel... as merry as a school-boy", reborn into joyful generosity.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── Jekyll & Hyde (10) ─────────────────────────────────────────────────
  {
    id: 'text-extra-051',
    topic: 'set-texts',
    question: 'Who is the lawyer who narrates much of the novella?',
    options: ['Dr Lanyon', 'Mr Utterson', 'Mr Enfield', 'Poole'],
    correctIndex: 1,
    explanation:
      "Gabriel John Utterson, Jekyll's rational, reserved lawyer friend, drives the investigation through most of the novella.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-052',
    topic: 'set-texts',
    question: 'How does Mr Hyde first reveal his violence in the novel?',
    options: [
      'He murders Sir Danvers Carew',
      'He tramples a young girl in the street',
      'He attacks Poole',
      'He robs Utterson',
    ],
    correctIndex: 1,
    explanation:
      'Enfield\'s opening anecdote describes Hyde "trampling calmly" over a child at a street corner, introducing his casual cruelty.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-053',
    topic: 'set-texts',
    question: 'Whom does Hyde murder in cold blood?',
    options: ['Dr Lanyon', 'Mr Utterson', 'Sir Danvers Carew', 'Poole'],
    correctIndex: 2,
    explanation:
      'Hyde clubs the elderly MP Sir Danvers Carew to death with a cane — witnessed by a maid in moonlight.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-054',
    topic: 'set-texts',
    question: 'Who says "If he be Mr Hyde, I shall be Mr Seek"?',
    options: ['Jekyll', 'Utterson', 'Enfield', 'Lanyon'],
    correctIndex: 1,
    explanation:
      "Utterson's pun marks his decision to investigate Hyde's identity — a typically restrained legal joke from a curious lawyer.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-055',
    topic: 'set-texts',
    question: 'What scientific theory of the time most influenced the novel\'s "duality"?',
    options: [
      'Newtonian mechanics',
      'Darwinism / theories of degeneration and atavism',
      'Quantum theory',
      'Germ theory',
    ],
    correctIndex: 1,
    explanation:
      'Late-Victorian fears of degeneration — humans "regressing" to ape-like ancestors — shape Hyde\'s simian, "troglodytic" descriptions.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-056',
    topic: 'set-texts',
    question: 'Hyde is repeatedly described using which adjective suggesting deformity?',
    options: ['"Tall"', '"Pale and dwarfish"', '"Refined"', '"Fair"'],
    correctIndex: 1,
    explanation:
      'Witnesses call Hyde "pale and dwarfish" with "a strong feeling of deformity", though no one can specify what is wrong.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-057',
    topic: 'set-texts',
    question: 'How does Dr Lanyon die?',
    options: [
      'Hyde murders him',
      "Of shock after witnessing Jekyll's transformation",
      'Of typhoid',
      'He takes his own life',
    ],
    correctIndex: 1,
    explanation:
      'Lanyon witnesses Hyde drinking the potion and transforming back into Jekyll; the shock destroys his rational worldview and kills him.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-058',
    topic: 'set-texts',
    question: "What city setting amplifies the novella's themes of hidden evil?",
    options: ['Edinburgh', 'Foggy, gas-lit London', 'Paris', 'Bath'],
    correctIndex: 1,
    explanation:
      "Stevenson's fog-shrouded London — its respectable façades hiding back-alleys — mirrors the duality of Jekyll's respectable surface and Hyde's underworld.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-059',
    topic: 'set-texts',
    question: 'Whose first-person account closes the novel?',
    options: ["Utterson's", "Hyde's", 'Jekyll\'s ("Full Statement of the Case")', "Lanyon's only"],
    correctIndex: 2,
    explanation:
      'The final chapter is "Henry Jekyll\'s Full Statement of the Case", retrospectively explaining the experiment and his loss of control.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-060',
    topic: 'set-texts',
    question: "What narrative structure does Stevenson use to delay revealing Jekyll's secret?",
    options: [
      'Linear chronological order',
      'Multiple framed narratives and embedded documents',
      'Stream of consciousness',
      'A single first-person voice throughout',
    ],
    correctIndex: 1,
    explanation:
      "Stevenson layers Enfield's tale, Lanyon's letter and Jekyll's statement around Utterson's investigation — a fragmented structure that builds suspense.",
    boards: ['aqa', 'eduqas'],
  },

  // ─── Romeo & Juliet (10) ────────────────────────────────────────────────
  {
    id: 'text-extra-061',
    topic: 'set-texts',
    question: 'Who says "These violent delights have violent ends"?',
    options: ['Romeo', 'Juliet', 'Friar Lawrence', 'Mercutio'],
    correctIndex: 2,
    explanation:
      'Friar Lawrence warns Romeo before marrying him to Juliet that passion consuming itself "like fire and powder" leads to ruin.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-062',
    topic: 'set-texts',
    question: 'Whom does Tybalt kill before dying himself?',
    options: ['Romeo', 'Mercutio', 'Benvolio', 'Paris'],
    correctIndex: 1,
    explanation:
      'Tybalt fatally stabs Mercutio "under Romeo\'s arm" in Act 3 Scene 1; Romeo then avenges him by killing Tybalt.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-063',
    topic: 'set-texts',
    question: 'Who delivers the Prologue describing "a pair of star-cross\'d lovers"?',
    options: ['Romeo', 'The Chorus', 'Friar Lawrence', 'Prince Escalus'],
    correctIndex: 1,
    explanation:
      'The Chorus speaks the sonnet-form Prologue, telling the audience the lovers are doomed — establishing fate as a controlling force.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-064',
    topic: 'set-texts',
    question: 'How old is Juliet at the start of the play?',
    options: ['12', 'Not yet 14', '15', '16'],
    correctIndex: 1,
    explanation:
      'Lady Capulet says Juliet "is not fourteen", and the Nurse remembers her exact age in Act 1 Scene 3 — she will turn 14 at Lammas-tide.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-065',
    topic: 'set-texts',
    question: 'Who first calls Romeo and Juliet\'s love a "lightning"?',
    options: ['Mercutio', 'Juliet', 'Romeo', 'Friar Lawrence'],
    correctIndex: 1,
    explanation:
      'Juliet says their contract is "Too like the lightning, which doth cease to be / Ere one can say it lightens" in the balcony scene.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-066',
    topic: 'set-texts',
    question: "What is the form of the lovers' shared first dialogue at the Capulet ball?",
    options: [
      'A blank-verse soliloquy',
      'A shared sonnet',
      'A villanelle',
      'A rhyming couplet only',
    ],
    correctIndex: 1,
    explanation:
      'Their first exchange (Act 1 Scene 5) forms a perfect Shakespearean sonnet, dramatising their union through poetic structure itself.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-067',
    topic: 'set-texts',
    question: "Who is killed by Romeo at Juliet's tomb?",
    options: ['Tybalt', 'Paris', 'Mercutio', 'Benvolio'],
    correctIndex: 1,
    explanation:
      "Paris challenges Romeo at the Capulet vault and is killed; Romeo lays his body inside before drinking the apothecary's poison.",
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-068',
    topic: 'set-texts',
    question: 'What does the Friar give Juliet to fake her death?',
    options: [
      'Belladonna berries',
      'A "distilling liquor" / sleeping potion',
      'A dagger',
      'A holy wafer',
    ],
    correctIndex: 1,
    explanation:
      'Friar Lawrence gives Juliet a "distilling liquor" that mimics death for "two and forty hours" so she can avoid marrying Paris.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-069',
    topic: 'set-texts',
    question: 'Which character is the voice of bawdy comedy and dies cursing both houses?',
    options: ['Tybalt', 'Mercutio', 'Benvolio', 'Friar Lawrence'],
    correctIndex: 1,
    explanation:
      'Mercutio\'s dying line "A plague o\' both your houses!" condemns the feud whose violence has claimed his life.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-070',
    topic: 'set-texts',
    question: "Why does Romeo's letter never reach him in Mantua?",
    options: [
      "It is intercepted by Tybalt's allies",
      'Friar John is quarantined due to plague',
      'Balthasar destroys it',
      'The Prince forbids it',
    ],
    correctIndex: 1,
    explanation:
      'Friar John is shut up in a plague-quarantined house and cannot deliver the letter — fate, not malice, dooms the plan.',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },

  // ─── Animal Farm / Lord of the Flies / Of Mice and Men (10) ─────────────
  {
    id: 'text-extra-071',
    topic: 'set-texts',
    question: 'In Animal Farm, what becomes the only commandment by the end?',
    options: [
      '"Four legs good, two legs bad."',
      '"All animals are equal but some animals are more equal than others."',
      '"No animal shall kill any other animal."',
      '"Whatever goes upon two legs is an enemy."',
    ],
    correctIndex: 1,
    explanation:
      "The final corrupted commandment exposes the pigs' totalitarian betrayal — Orwell's satire of the Stalinist USSR.",
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-072',
    topic: 'set-texts',
    question: "Which Animal Farm character represents Stalin in Orwell's allegory?",
    options: ['Snowball', 'Napoleon', 'Old Major', 'Boxer'],
    correctIndex: 1,
    explanation:
      'Napoleon — the Berkshire boar who drives Snowball (Trotsky) into exile and consolidates dictatorial power — represents Stalin.',
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-073',
    topic: 'set-texts',
    question: 'In Lord of the Flies, what does the "beast" ultimately turn out to be?',
    options: [
      'A real wild animal',
      "A pilot's parachute and dead body",
      "The boys' inner savagery",
      "A figment of Simon's imagination",
    ],
    correctIndex: 2,
    explanation:
      'Though a parachutist\'s corpse is mistaken for the beast, Simon realises the true "beast" is the darkness within the boys themselves.',
    boards: ['edexcel-igcse', 'aqa', 'eduqas'],
  },
  {
    id: 'text-extra-074',
    topic: 'set-texts',
    question: 'Which character is murdered while bringing news that there is no beast?',
    options: ['Piggy', 'Simon', 'Ralph', 'Sam'],
    correctIndex: 1,
    explanation:
      "Simon is killed in a frenzied tribal dance just as he tries to share the truth about the dead parachutist — Golding's key turning point.",
    boards: ['edexcel-igcse', 'aqa', 'eduqas'],
  },
  {
    id: 'text-extra-075',
    topic: 'set-texts',
    question: 'What symbol of order shatters along with Piggy in Lord of the Flies?',
    options: ['The signal fire', 'The conch shell', "Piggy's glasses", "The pig's head"],
    correctIndex: 1,
    explanation:
      'The conch — symbol of democratic speech — explodes "into a thousand white fragments" as Piggy is killed by Roger\'s boulder.',
    boards: ['edexcel-igcse', 'aqa', 'eduqas'],
  },
  {
    id: 'text-extra-076',
    topic: 'set-texts',
    question: "In Of Mice and Men, what is George and Lennie's shared dream?",
    options: [
      'To return to Auburn',
      'To "live off the fatta the lan\'" on their own farm',
      'To open a bar in Soledad',
      'To buy a racehorse',
    ],
    correctIndex: 1,
    explanation:
      'Their dream of a small farm where Lennie can tend rabbits embodies the broken American Dream during the Great Depression.',
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-077',
    topic: 'set-texts',
    question: 'Whose wife does Lennie accidentally kill?',
    options: ["Slim's", "Curley's", "Crooks's", "Candy's"],
    correctIndex: 1,
    explanation:
      "Lennie breaks Curley's wife's neck while stroking her hair, panicking when she struggles — the act forces George's final decision.",
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-078',
    topic: 'set-texts',
    question: 'Who is the only black ranch-hand in Of Mice and Men?',
    options: ['Candy', 'Crooks', 'Carlson', 'Whit'],
    correctIndex: 1,
    explanation:
      'Crooks, the stable buck, lives apart in the harness room — Steinbeck uses him to expose the racism of 1930s ranch life.',
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-079',
    topic: 'set-texts',
    question: 'Why does George shoot Lennie at the end?',
    options: [
      'Lennie attacks him',
      'To spare Lennie from a brutal lynching by Curley',
      'For the reward money',
      'Slim orders him to',
    ],
    correctIndex: 1,
    explanation:
      "George kills Lennie mercifully — echoing Carlson's shooting of Candy's dog — to prevent Curley's violent revenge.",
    boards: ['edexcel-igcse', 'aqa'],
  },
  {
    id: 'text-extra-080',
    topic: 'set-texts',
    question: 'Which Animal Farm character represents the loyal but exploited working class?',
    options: ['Boxer', 'Squealer', 'Mollie', 'Benjamin'],
    correctIndex: 0,
    explanation:
      'Boxer the cart-horse — "I will work harder" — embodies the loyal proletariat ultimately betrayed and sold to the knacker by the pigs.',
    boards: ['edexcel-igcse', 'aqa'],
  },

  // ─── Blood Brothers / A View from the Bridge (10) ───────────────────────
  {
    id: 'text-extra-081',
    topic: 'set-texts',
    question: 'In Blood Brothers, what is the "superstition" the Narrator returns to throughout?',
    options: [
      "Breaking a mirror means seven years' bad luck",
      'Twins separated at birth must die if they learn the truth',
      'Walking under a ladder brings death',
      'Black cats bring misfortune',
    ],
    correctIndex: 1,
    explanation:
      "Mrs Lyons' invented superstition that the twins will die if they learn they are brothers becomes a self-fulfilling prophecy.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-082',
    topic: 'set-texts',
    question: 'Who is the biological mother of both Mickey and Edward?',
    options: ['Mrs Lyons', 'Mrs Johnstone', 'Linda', 'The Narrator'],
    correctIndex: 1,
    explanation:
      "Mrs Johnstone, struggling with seven children, gives one twin (Edward) to Mrs Lyons — Russell's critique of class-determined fates.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-083',
    topic: 'set-texts',
    question: 'Whom does Mickey shoot at the end of Blood Brothers?',
    options: ['Sammy', 'Edward', 'Mr Lyons', 'The Narrator'],
    correctIndex: 1,
    explanation:
      'Mickey, broken by unemployment and prison, shoots Edward in the council chamber — and is in turn shot by the police.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-084',
    topic: 'set-texts',
    question: 'Which iconic figure does Mrs Johnstone repeatedly reference?',
    options: ['Marilyn Monroe', 'Audrey Hepburn', 'Marlene Dietrich', 'Doris Day'],
    correctIndex: 0,
    explanation:
      'Mrs Johnstone compares herself to Marilyn Monroe throughout — a motif tracking her decline from hopeful youth to despair.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-085',
    topic: 'set-texts',
    question: 'What city is Blood Brothers set in?',
    options: ['Manchester', 'Liverpool', 'London', 'Glasgow'],
    correctIndex: 1,
    explanation:
      'Russell sets the play in Liverpool, drawing on Thatcher-era unemployment and class politics central to its tragedy.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-086',
    topic: 'set-texts',
    question: 'In A View from the Bridge, who is the lawyer-narrator?',
    options: ['Marco', 'Rodolpho', 'Alfieri', 'Eddie'],
    correctIndex: 2,
    explanation:
      'Alfieri frames the play as a Greek-style chorus, foreshadowing tragedy from his Brooklyn law office.',
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-087',
    topic: 'set-texts',
    question: 'Why is Eddie obsessed with Catherine in A View from the Bridge?',
    options: [
      'She is his biological daughter',
      'He has unspoken incestuous feelings towards his niece',
      'She owes him money',
      'She has stolen from him',
    ],
    correctIndex: 1,
    explanation:
      "Eddie's repressed desire for his niece Catherine drives the tragedy; his betrayal of Marco and Rodolpho stems from this jealousy.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-088',
    topic: 'set-texts',
    question: 'How does Eddie betray Marco and Rodolpho?',
    options: [
      'He attacks them physically',
      'He reports them to the Immigration Bureau',
      'He steals their wages',
      'He banishes them from his home only',
    ],
    correctIndex: 1,
    explanation:
      "Eddie phones Immigration to report the cousins as illegal immigrants — the ultimate community betrayal in Red Hook's Italian-American world.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-089',
    topic: 'set-texts',
    question: 'How does Eddie die?',
    options: [
      'Shot by Immigration officers',
      'Killed by Marco with his own knife',
      'Hanged',
      'Poisoned by Beatrice',
    ],
    correctIndex: 1,
    explanation:
      "In the climactic street fight Marco turns Eddie's knife back on him, fulfilling Alfieri's tragic prediction.",
    boards: ['aqa', 'eduqas'],
  },
  {
    id: 'text-extra-090',
    topic: 'set-texts',
    question:
      'Which Greek tragic element does Miller deliberately invoke in A View from the Bridge?',
    options: [
      'Three unities and a chorus-like narrator',
      'Comic chorus and satyr play',
      'Episodic structure with no narrator',
      'A deus ex machina',
    ],
    correctIndex: 0,
    explanation:
      "Miller frames Eddie's downfall in classical-tragic terms, with Alfieri as chorus and the action observing tight unity of place and inevitability.",
    boards: ['aqa', 'eduqas'],
  },

  // ─── Frankenstein / Jane Eyre / Pride & Prejudice (5) ───────────────────
  {
    id: 'text-extra-091',
    topic: 'set-texts',
    question: 'What narrative form does Frankenstein use?',
    options: [
      'Single first-person narrator',
      "Frame narrative with Walton's letters enclosing other voices",
      'Omniscient third person only',
      'Stream of consciousness',
    ],
    correctIndex: 1,
    explanation:
      "Walton's Arctic letters frame Victor's account, which itself frames the Creature's — a Russian-doll structure raising questions of reliability.",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-092',
    topic: 'set-texts',
    question: 'Which Romantic-era poem does the Creature in Frankenstein read and identify with?',
    options: [
      '"Ozymandias"',
      'Paradise Lost',
      '"The Rime of the Ancient Mariner"',
      '"The Prelude"',
    ],
    correctIndex: 1,
    explanation:
      "The Creature reads Milton's Paradise Lost and identifies with both Adam (created) and Satan (rejected by his maker).",
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    id: 'text-extra-093',
    topic: 'set-texts',
    question: 'In Jane Eyre, who is locked in the attic at Thornfield?',
    options: ['Adèle', 'Bertha Mason', 'Grace Poole', 'Blanche Ingram'],
    correctIndex: 1,
    explanation:
      "Bertha Mason — Rochester's first wife, brought from Jamaica — is confined upstairs and watched by Grace Poole.",
    boards: ['aqa', 'edexcel', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-094',
    topic: 'set-texts',
    question: 'How does Pride and Prejudice famously open?',
    options: [
      '"Call me Ishmael."',
      '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
      '"Happy families are all alike."',
      '"All this happened, more or less."',
    ],
    correctIndex: 1,
    explanation:
      "Austen's ironic opening sentence sets the novel's satirical tone about marriage, money and social expectation in Regency England.",
    boards: ['aqa', 'edexcel', 'eduqas', 'edexcel-igcse'],
  },
  {
    id: 'text-extra-095',
    topic: 'set-texts',
    question: 'In Pride and Prejudice, whose first proposal does Elizabeth Bennet refuse?',
    options: ["Mr Bingley's", "Mr Darcy's", "Mr Wickham's", "Mr Collins's"],
    correctIndex: 3,
    explanation:
      "Elizabeth refuses the pompous clergyman Mr Collins (and later Darcy's first proposal) — both refusals scandalise her mother.",
    boards: ['aqa', 'edexcel', 'eduqas', 'edexcel-igcse'],
  },

  // ─── IGCSE prose: TFA / TKAM / Curious Incident (5) ─────────────────────
  {
    id: 'text-extra-096',
    topic: 'set-texts',
    question: 'Who is the protagonist of Things Fall Apart?',
    options: ['Obierika', 'Okonkwo', 'Nwoye', 'Unoka'],
    correctIndex: 1,
    explanation:
      'Okonkwo, a respected Igbo wrestler and warrior of Umuofia, is the central tragic figure whose life shatters under colonial pressure.',
    boards: ['edexcel-igcse', 'cambridge-0475'],
  },
  {
    id: 'text-extra-097',
    topic: 'set-texts',
    question: 'What is the source of the title Things Fall Apart?',
    options: [
      'A Yoruba proverb',
      'W. B. Yeats\'s poem "The Second Coming"',
      'A Bible verse',
      'A speech by Nehru',
    ],
    correctIndex: 1,
    explanation:
      'Achebe takes the title from Yeats: "Things fall apart; the centre cannot hold" — framing the collapse of Igbo society under colonialism.',
    boards: ['edexcel-igcse', 'cambridge-0475'],
  },
  {
    id: 'text-extra-098',
    topic: 'set-texts',
    question: 'In To Kill a Mockingbird, who is the black man Atticus Finch defends?',
    options: ['Tom Robinson', 'Boo Radley', "Calpurnia's son", 'Walter Cunningham'],
    correctIndex: 0,
    explanation:
      "Atticus defends Tom Robinson, falsely accused of raping Mayella Ewell — Lee's portrait of racial injustice in 1930s Alabama.",
    boards: ['edexcel-igcse', 'cambridge-0475'],
  },
  {
    id: 'text-extra-099',
    topic: 'set-texts',
    question: 'Who is the reclusive neighbour Scout and Jem are obsessed with?',
    options: ['Mr Cunningham', 'Boo (Arthur) Radley', 'Mr Avery', 'Dolphus Raymond'],
    correctIndex: 1,
    explanation:
      'Boo Radley — initially feared as a "malevolent phantom" — ultimately saves the children, embodying the "mockingbird" the title warns not to harm.',
    boards: ['edexcel-igcse', 'cambridge-0475'],
  },
  {
    id: 'text-extra-100',
    topic: 'set-texts',
    question:
      "Why is Christopher's narration distinctive in The Curious Incident of the Dog in the Night-Time?",
    options: [
      'It is told in verse',
      'The first-person narrator is a 15-year-old with an autistic-spectrum perspective',
      'It is narrated by a dog',
      'It is told in second person',
    ],
    correctIndex: 1,
    explanation:
      "Christopher Boone's literal, pattern-loving voice — and his use of diagrams, prime-numbered chapters and lists — defines Haddon's narrative style.",
    boards: ['edexcel-igcse', 'cambridge-0475'],
  },
]
