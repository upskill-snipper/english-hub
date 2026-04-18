// Rich category-level context for the /analysis hub.
//
// Each category supplies background, assessment context, exam-tips, and
// cross-link data so that every page in the category can render substantive
// SEO-worthy content even before bespoke per-slug essays are written.

export type AOWeight = {
  ao: string
  weight: string
  description: string
}

export type KeyQuote = {
  quote: string
  source: string
  analysis: string
}

export type CategoryContext = {
  /** Machine key — matches `category` in ANALYSIS_PAGES */
  slug: string
  /** Human-readable label */
  label: string
  /** Short (1–2 sentence) overview for hero block */
  overview: string
  /** Longer "about this text / anthology" block — 2–4 paragraphs */
  about: string[]
  /** Exam boards this category is explicitly relevant to */
  boards: Array<'AQA' | 'Edexcel' | 'OCR' | 'Eduqas' | 'Cambridge' | 'All'>
  /** Assessment context — how this question appears on the exam */
  assessmentContext: {
    board: string
    paper: string
    section: string
    marks: number
    timeGuide: string
    aoWeighting: AOWeight[]
  }[]
  /** 3–6 exam tips, expressed as "do this" sentences */
  examTips: string[]
  /** 4–8 key quotes with short analysis */
  keyQuotes: KeyQuote[]
  /** What makes a Grade 9 answer in this category */
  grade9Indicators: string[]
  /** FAQ entries — suitable for FAQPage schema */
  faqs: { question: string; answer: string }[]
}

export const CATEGORY_CONTEXT: Record<string, CategoryContext> = {
  macbeth: {
    slug: 'macbeth',
    label: 'Macbeth',
    overview:
      "Shakespeare's shortest tragedy is the most commonly-studied GCSE Literature text. Written 1606, set in 11th-century Scotland, it traces the rapid moral disintegration of a soldier-hero who murders his king.",
    about: [
      "Macbeth sits on every major UK GCSE English Literature specification. AQA, Edexcel, OCR, and Eduqas all use it as the Shakespeare text option and most candidates answering the Shakespeare question will choose it. It is also the most-taught Shakespeare in UK state secondaries because it is short (2,106 lines vs 4,024 for Hamlet), fast-paced, and thematically sharp: ambition, guilt, gender, fate, kingship, violence, and the supernatural.",
      "For Jacobean audiences the play was politically loaded. James I had acceded to the English throne in 1603; his Scottish ancestry traced back to Banquo (whose line is promised dominion forever in Act 4 Scene 1). The Gunpowder Plot of November 1605 had attempted to kill him and the entire royal family. Shakespeare's depiction of regicide as a supernatural-moral catastrophe flattered the new king's sense of his own sanctity. James had also published Daemonologie (1597), arguing witches were real and dangerous — the three witches of Act 1 Scene 1 meet the king's theological-political worldview exactly.",
      'Structurally, the tragedy follows the classical five-act arc. Act 1 is exposition and temptation. Act 2 stages the regicide. Act 3 is the consolidation of guilt via Banquo\'s murder and the banquet scene. Act 4 shows Macbeth\'s decay and the witches\' second prophecy. Act 5 delivers catastrophe: Lady Macbeth\'s suicide, the moving of Birnam Wood, the revelation that Macduff was "not of woman born", and Macbeth\'s death.',
    ],
    boards: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 1: Shakespeare and the 19th-century novel',
        section: 'Section A — Shakespeare',
        marks: 30,
        timeGuide: '50 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Read, understand, respond; use textual references' },
          { ao: 'AO2', weight: '12 marks', description: 'Analyse language, form, structure; use subject terminology' },
          { ao: 'AO3', weight: '6 marks', description: 'Show understanding of the relationship between text and context' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'Spelling, punctuation, grammar' },
        ],
      },
      {
        board: 'Edexcel 1ET0',
        paper: 'Paper 1: Shakespeare and Post-1914 Literature',
        section: 'Section A — Shakespeare',
        marks: 24,
        timeGuide: '55 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '8 marks', description: 'Response and textual references' },
          { ao: 'AO2', weight: '12 marks', description: 'Analysis of language, form, structure' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG and vocabulary' },
        ],
      },
      {
        board: 'OCR J352',
        paper: 'Paper 1: Exploring Modern and Literary Heritage Texts',
        section: 'Section A — Shakespeare',
        marks: 40,
        timeGuide: '55 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '10 marks', description: 'Informed personal response' },
          { ao: 'AO2', weight: '10 marks', description: 'Writer\'s methods including effects on reader' },
          { ao: 'AO3', weight: '15 marks', description: 'Relationship between text and context' },
          { ao: 'AO4', weight: '5 marks', description: 'Vocabulary, sentences, SPaG' },
        ],
      },
      {
        board: 'Eduqas Component 1',
        paper: 'Component 1 Section A — Shakespeare',
        section: 'Extract-based question + essay',
        marks: 40,
        timeGuide: '60 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '10 marks', description: 'Response and textual support' },
          { ao: 'AO2', weight: '20 marks', description: 'Analysis of language, form, structure' },
          { ao: 'AO4', weight: '10 marks', description: 'Written accuracy' },
        ],
      },
    ],
    examTips: [
      'Read the extract printed with the question first, then decide which moments elsewhere in the play connect — the question is always "extract + whole play".',
      'Use a conceptual thesis sentence in your opening paragraph. Not "This essay will discuss X" — instead a claim: "Shakespeare presents Macbeth as a tragic hero whose ambition was always already in him, and the witches merely speak it aloud."',
      'Do not retell the plot. Markers deduct implicitly for narrative rather than analytical paragraphs.',
      "Treat Lady Macbeth as a feminist reading opportunity on AQA and OCR (AO3). On Edexcel, context isn't assessed on this question — don't waste time.",
      'Memorise 10–12 quotes that cover the full arc: two from Act 1, two each from Acts 2, 3, 4, and two from Act 5. That distribution lets you answer any thematic question.',
      'Quote embedding beats quote-then-comment. "Macbeth\'s \'vaulting ambition\' betrays him" reads stronger than "Macbeth has ambition. The quote \'vaulting ambition\' shows this."',
    ],
    keyQuotes: [
      {
        quote: '"Fair is foul, and foul is fair"',
        source: 'Act 1 Scene 1, the witches',
        analysis: 'Chiasmus / paradox. Establishes the play\'s moral inversion as the governing principle before any human character appears. Every subsequent moral judgement in the play should be read against this opening.',
      },
      {
        quote: '"Brave Macbeth — well he deserves that name"',
        source: 'Act 1 Scene 2, the Captain',
        analysis: 'Dramatic irony in retrospect. The audience is positioned to admire Macbeth in Scene 2 so that his fall from this position in the rest of the play registers as tragic, not merely villainous.',
      },
      {
        quote: '"Stars, hide your fires; / Let not light see my black and deep desires"',
        source: 'Act 1 Scene 4, Macbeth soliloquy',
        analysis: 'Imperative + light/dark contrast + possessive "my". Macbeth acknowledges both the desires and their moral wrongness in the same breath — the play\'s moral architecture is present in his vocabulary before he acts.',
      },
      {
        quote: '"Unsex me here"',
        source: 'Act 1 Scene 5, Lady Macbeth soliloquy',
        analysis: 'Imperative addressed to the "spirits". Lady Macbeth asks for the removal of her femininity because she assumes cruelty is masculine — a Jacobean gender assumption that the play then complicates when Macbeth, not she, holds firm.',
      },
      {
        quote: '"Is this a dagger which I see before me?"',
        source: 'Act 2 Scene 1, Macbeth soliloquy',
        analysis: 'The interrogative plus the hallucinated object stages Macbeth\'s psychology visually. Shakespeare makes the audience see Macbeth seeing — we cannot dismiss it as narration.',
      },
      {
        quote: '"I am afraid to think what I have done"',
        source: 'Act 2 Scene 2, Macbeth after the regicide',
        analysis: 'Short, monosyllabic, broken into three clauses. Shakespeare marks the psychological rupture through sentence structure: Macbeth can no longer speak in the iambic pentameter that characterised his pre-murder speech.',
      },
      {
        quote: '"Out, damned spot! out, I say!"',
        source: 'Act 5 Scene 1, Lady Macbeth sleepwalking',
        analysis: 'Repeated imperative + apostrophe. Lady Macbeth\'s psychological decay inverts her earlier control. Her "little water" (Act 2) cannot clean the stain that was never physical in the first place.',
      },
      {
        quote: '"Life\'s but a walking shadow, a poor player"',
        source: 'Act 5 Scene 5, Macbeth on hearing of his wife\'s death',
        analysis: 'Metatheatrical metaphor. Macbeth reduces human life to theatrical performance — a Shakespeare who writes plays about plays, and who lets his doomed protagonist speak the disillusionment of the entire genre.',
      },
    ],
    grade9Indicators: [
      'Conceptualised overarching argument stated in the opening paragraph and returned to in the conclusion',
      'Analysis of language, form, AND structure — not just language',
      'Critical vocabulary: hamartia, peripeteia, anagnorisis, catharsis (AO3 / OCR)',
      'Jacobean context woven in, not bolted on (James I, Daemonologie, Gunpowder Plot)',
      'Alternative interpretations acknowledged ("a feminist reading of Lady Macbeth would argue…")',
      'Analysis of contrast and patterning across the whole play, not just the extract',
      'Zoom into single-word choices ("\'vaulting\' connotes athletic overreach — the word itself overshoots")',
    ],
    faqs: [
      {
        question: 'Is Macbeth on every UK GCSE English Literature spec?',
        answer:
          'Macbeth is an option — usually the most popular option — on AQA 8702, Edexcel 1ET0, OCR J352, and Eduqas Component 1. Your school will have chosen it for you; check with your teacher if you are unsure.',
      },
      {
        question: 'How long should my Macbeth essay be?',
        answer:
          'For the big thematic essay, target 800–1,000 words written in 50–55 minutes. Quality of analysis matters far more than length; a focused 700-word answer with Grade 9 analysis outscores a 1,200-word narrative summary.',
      },
      {
        question: 'Do I have to use context in my Macbeth essay?',
        answer:
          'On AQA (6 marks AO3), OCR (15 marks AO3), and Eduqas — yes, integrated context is required for the top bands. On Edexcel Paper 1 Section A, AO3 is NOT assessed for Shakespeare, so do not waste exam time on historical detail there.',
      },
      {
        question: 'How many quotes do I need to memorise?',
        answer:
          'A well-chosen 10–12 quotes covering all five acts gives you the flexibility to answer any thematic question. Prioritise quotes that work for multiple themes (for example, "vaulting ambition" serves ambition, downfall, and hubris).',
      },
    ],
  },

  'aqa-love-relationships': {
    slug: 'aqa-love-relationships',
    label: 'AQA Love and Relationships',
    overview:
      'Fifteen poems on love and relationships — familial, romantic, tragic, obsessive, lost. One of two AQA anthology clusters and the most commonly studied at KS4.',
    about: [
      'The AQA Love and Relationships cluster sits in Section B of AQA Paper 2 (8702/2). Candidates answer one comparison question on one named poem plus one unseen poem of their choice from the rest of the cluster. The comparison is worth 30 marks plus 4 marks for SPaG.',
      'The cluster spans four centuries: Shakespeare\'s Sonnet 29, Browning\'s dramatic monologues, Duffy\'s post-feminist love lyrics, Sheenagh Pugh\'s contemporary voices. Students find the range of form and period challenging — sonnet vs dramatic monologue vs free verse — but this variety is also what makes the cluster examinable in depth.',
      'Strong Love and Relationships essays treat the poems as a conversation across time about what love means. Weak essays treat them as fifteen unrelated set texts. The single best move for most students is to map out 4–5 "thematic pairings" (e.g. grief of losing a parent: Walking Away + Mother Any Distance) that they can deploy regardless of which poem is named on the paper.',
    ],
    boards: ['AQA'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 2: Modern texts and poetry',
        section: 'Section B — Anthology poetry comparison',
        marks: 30,
        timeGuide: '45 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Response to both poems, textual reference' },
          { ao: 'AO2', weight: '12 marks', description: 'Methods analysis (language, form, structure) in BOTH poems' },
          { ao: 'AO3', weight: '6 marks', description: 'Context — romantic, Victorian, modern, contemporary' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG' },
        ],
      },
    ],
    examTips: [
      'Use a comparative thesis in your opening paragraph that names both poems and the shared theme explicitly.',
      'Alternate poems paragraph-by-paragraph or point-by-point. Do NOT write all of Poem A and then all of Poem B — that scores lower on AQA AO2.',
      'Memorise 3–4 quotes per poem. Thirty quotes across the 15-poem cluster is enough to answer any question.',
      'Context matters but do not over-historicise. "Browning\'s dramatic monologue ventriloquises male power in Victorian marriage" is better than "In Victorian times men were in charge".',
      'For the unseen paired poem, pick one you have prepared — AQA lets you choose. Pick the easiest valid comparison, not the most thematically ambitious.',
      'Name the form: sonnet, dramatic monologue, free verse, ballad. Naming form is the fastest route to three AO2 marks.',
    ],
    keyQuotes: [
      {
        quote: '"I love thee to the depth and breadth and height"',
        source: 'Sonnet 43, Elizabeth Barrett Browning',
        analysis: 'Tricolon + spatial metaphor + archaic "thee". EBB maps love onto dimensions — its hyperbole is sincere rather than comic, reinforced by the Petrarchan sonnet form.',
      },
      {
        quote: '"I gave commands; / Then all smiles stopped together"',
        source: 'My Last Duchess, Robert Browning',
        analysis: 'Caesura + euphemism. The Duke\'s three-word admission of uxoricide is made more chilling by the calm syntactic control — the line break does the work.',
      },
      {
        quote: '"One day I\'ll be walking away from me"',
        source: 'Walking Away, Cecil Day-Lewis',
        analysis: 'Reflexive pronoun + temporal shift. The poem stages the paradoxical simultaneity of the child\'s separation and the father\'s self-loss.',
      },
      {
        quote: '"Love\'s not Time\'s fool"',
        source: 'Sonnet 116, Shakespeare',
        analysis: 'Personification + possessive. Love defies the temporal logic that governs every other human thing. The closed Shakespearean couplet enacts the permanence it claims.',
      },
      {
        quote: '"I have tried to write Paris back into that city"',
        source: 'Singh Song!, Daljit Nagra',
        analysis: 'Metatextual claim. The speaker\'s migrant act — writing "Paris" onto a new city — is a love act, mapping memory onto space.',
      },
      {
        quote: '"Not a cut, but a single, cutting word"',
        source: 'The Farmer\'s Bride, Charlotte Mew',
        analysis: 'Antithesis + polyptoton ("cut"/"cutting"). Emotional violence rendered more damaging than physical; late-Victorian frustration within arranged marriage.',
      },
    ],
    grade9Indicators: [
      'Genuinely comparative structure — every paragraph develops BOTH poems',
      'Context anchored to specific literary-historical movements (Petrarchan tradition, Victorian dramatic monologue, confessional poetry)',
      'Form and structure named correctly and related to meaning',
      'Zoom into single-word analysis in both poems',
      "Conceptual thesis that names a shared idea and an important difference",
      "Acknowledgement of alternative readings",
    ],
    faqs: [
      {
        question: 'Which 3 AQA Love and Relationships poems should I prioritise?',
        answer:
          'Strong starter trio: Sonnet 29 (Browning) — sonnet form is explicit, context is clear; Walking Away — emotional range and modern voice; My Last Duchess — dramatic monologue for gender/power essays.',
      },
      {
        question: 'Do I have to compare the named poem with a specific second poem?',
        answer:
          'No. AQA prints one poem and asks you to compare it with any other of your choice from the cluster. Practise pairings in advance — pick the one that gives you the richest points.',
      },
    ],
  },

  'aqa-power-conflict': {
    slug: 'aqa-power-conflict',
    label: 'AQA Power and Conflict',
    overview:
      'Fifteen poems spanning the political, natural, personal, and mythological dimensions of power and conflict. Ozymandias, Exposure, Bayonet Charge, Remains, London.',
    about: [
      "Power and Conflict is the harder of the two AQA anthology clusters. It demands precise historical context — the Ozymandias-Shelley-Romantic moment, Owen\'s WWI trench reality, Armitage\'s post-Iraq-war shell-shock — and it rewards a political reading that Love and Relationships does not.",
      "The cluster is structured around three kinds of power: political (Ozymandias, My Last Duchess, London, Checking Out Me History, Tissue), natural (Storm on the Island, Exposure), and the power of war and its aftermath (Bayonet Charge, Remains, Poppies, War Photographer, Kamikaze, The Emigrée). Memorise this three-way map and your thematic pairings become automatic.",
      "The exam setup is identical to Love and Relationships: one named poem plus one of your choice, 45 minutes, 30+4 marks. The difference is context: AQA Power and Conflict pays AO3 heavily, and the best answers anchor each poem to its specific historical moment rather than to a generic \'war is bad\' reading.",
    ],
    boards: ['AQA'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 2: Modern texts and poetry',
        section: 'Section B — Anthology poetry comparison',
        marks: 30,
        timeGuide: '45 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Response and textual support in both poems' },
          { ao: 'AO2', weight: '12 marks', description: 'Methods in both poems' },
          { ao: 'AO3', weight: '6 marks', description: 'Context — historical, political, cultural' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG' },
        ],
      },
    ],
    examTips: [
      'Build your thesis around the three-category map: political, natural, war. It accelerates comparison.',
      'Context on Power and Conflict matters more than on Love and Relationships. Know the decade: Shelley 1818 · Owen 1917–18 · Armitage Remains 2008.',
      'Name the form. Ozymandias is a Petrarchan sonnet with a disrupted volta. That observation alone unlocks two AO2 marks.',
      'Quote sparingly but precisely. "Nothing beside remains" scores more than a long Ozymandias paraphrase.',
      'When you compare war poems, differentiate between WWI (Owen, Hughes\'s Bayonet Charge imagining the soldier) and modern war (Armitage, Weir, Garland).',
      "Political poems reward a critical reading. London does not describe London — it indicts it.",
    ],
    keyQuotes: [
      {
        quote: '"Look on my Works, ye Mighty, and despair!"',
        source: 'Ozymandias, Percy Bysshe Shelley',
        analysis: 'Imperative + archaic vocative + oxymoron. The dead pharaoh\'s command survives him but its meaning inverts — the emptiness of the surrounding desert makes "despair" self-referential.',
      },
      {
        quote: '"Our brains ache, in the merciless iced east winds that knive us"',
        source: 'Exposure, Wilfred Owen',
        analysis: 'First-person plural + transferred epithet + violent verb. Owen makes the weather more lethal than the enemy — the line refuses the heroic framing of trench warfare.',
      },
      {
        quote: '"I chartered street / chartered Thames"',
        source: 'London, William Blake',
        analysis: 'Repetition + polysemy of "chartered" (legally owned / mapped out / confined). Blake\'s city is owned by power, even its river.',
      },
      {
        quote: '"Then I wiped him off the land"',
        source: 'Remains, Simon Armitage',
        analysis: 'Euphemism + first-person past. Armitage draws on soldier testimony; the colloquial flatness is the trauma — the soldier cannot use appropriately tragic vocabulary.',
      },
      {
        quote: '"Dat dem tell me / Dat dem tell me"',
        source: 'Checking Out Me History, John Agard',
        analysis: 'Repetition + Caribbean-inflected orthography. The colonial imposition of Eurocentric history is performed through the curriculum the speaker was taught, and resisted through the dialect the poem is written in.',
      },
      {
        quote: '"Paper that lets the light / shine through"',
        source: 'Tissue, Imtiaz Dharker',
        analysis: 'Enjambment + paradox. Paper — weak, transient — becomes the metaphor for human power structures (maps, Qurans, receipts) and their fragility.',
      },
    ],
    grade9Indicators: [
      'Precise historical anchoring per poem',
      'Political reading of political poems',
      'Differentiation between types of power and types of conflict',
      'Form named and related to meaning',
      'Comparison woven throughout, not appended at the end',
    ],
    faqs: [
      {
        question: 'Is Ozymandias the most-asked poem?',
        answer:
          "Historically AQA has rotated named poems. Ozymandias has been named in several recent papers but do not assume it will be named next. Prepare the cluster in depth, not just one poem.",
      },
    ],
  },

  'christmas-carol': {
    slug: 'christmas-carol',
    label: 'A Christmas Carol',
    overview:
      "Dickens's 1843 novella — a ghost story, a morality play, and a Christmas pamphlet for the conscience of Victorian Britain. A 19th-century prose option on AQA and Edexcel.",
    about: [
      "A Christmas Carol was written in six weeks in October–November 1843 after Dickens visited the Ragged School in Field Lane, London. The moral urgency behind it is autobiographical: Dickens had himself worked in a blacking factory as a child when his father was imprisoned for debt. He wrote the novella as a direct response to the Poor Law Amendment Act 1834 and the parliamentary reports on child labour he had read earlier that year.",
      "The novella\'s structure — Stave 1: Scrooge\'s pre-conversion state; Staves 2–4: three spirits showing past, present, and future; Stave 5: redemption — is deliberately symmetrical and deliberately short. Dickens wanted it affordable, readable in a single evening, and giveable as a Christmas gift. First-edition copies were priced 5 shillings, high for Dickens but calculated to put it on middle-class parlour tables.",
      "The character of Scrooge anchors the novella. Dickens\'s move is to make Scrooge morally redeemable — crucially, he does not die unrepentant (as Marley does) but changes. The conversion arc is what Dickens wanted Victorian readers to recognise as possible: a moral wake-up, not a revolution.",
    ],
    boards: ['AQA', 'Edexcel'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 1: Shakespeare and the 19th-century novel',
        section: 'Section B — 19th-century novel',
        marks: 30,
        timeGuide: '50 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Read, understand and respond; textual references' },
          { ao: 'AO2', weight: '12 marks', description: 'Writer\'s methods' },
          { ao: 'AO3', weight: '6 marks', description: 'Context — Victorian social reform, poverty, Christianity' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG' },
        ],
      },
    ],
    examTips: [
      'Treat Scrooge\'s transformation as the central engine. Your thesis should claim something specific about HOW Dickens achieves the transformation — the three spirits as didactic device, the sentimental set-pieces, the humour that disarms.',
      'Victorian context is heavily rewarded on AQA. Know 1843, the New Poor Law 1834, the Ragged Schools, Malthusian economics, the Condition-of-England question.',
      'Ignorance and Want — the two child-figures under the Ghost of Christmas Present\'s robe — are the moral centre of the novella. Dickens names them explicitly.',
      'Use "allegorical" correctly. The ghosts are didactic figures, not naturalistic characters. Scrooge\'s conversion reads as allegory, not psychological realism.',
      'Quote economically. "Bah! Humbug!", "I wear the chain I forged in life", "God bless us, every one!" — three quotes can cover almost any thematic question.',
    ],
    keyQuotes: [
      {
        quote: '"Bah! Humbug!"',
        source: 'Stave 1, Scrooge to Fred',
        analysis: 'Onomatopoeic interjection + dismissal. Establishes Scrooge\'s moral register in his first scene: he does not merely disagree with Christmas, he refuses even to engage in the vocabulary of it.',
      },
      {
        quote: '"I wear the chain I forged in life"',
        source: 'Stave 1, Marley',
        analysis: 'First-person past + metaphor of forging. Marley\'s chain is moral guilt made material — Dickens makes invisible sin visible, which is the novella\'s governing technique.',
      },
      {
        quote: '"Are there no prisons? Are there no workhouses?"',
        source: 'Stave 1, Scrooge to the charity collectors',
        analysis: 'Anaphora + rhetorical interrogation. Dickens has Scrooge weaponise two real Victorian institutions — the New Poor Law\'s workhouses and the debtor prisons of Dickens\'s own father — and then returns these exact words in Stave 3 via the Ghost of Christmas Present.',
      },
      {
        quote: '"Ignorance" and "Want"',
        source: 'Stave 3, the Ghost of Christmas Present reveals two children',
        analysis: 'Personified abstractions. Dickens transforms Malthusian economic categories into pitiable children — the rhetorical move that shifts his Victorian reader from policy logic to Christian ethics.',
      },
      {
        quote: '"God bless us, every one!"',
        source: 'Staves 3 and 5, Tiny Tim',
        analysis: 'Framing device. The same line opens the Cratchit dinner and closes the novella. Tim survives — the change is Scrooge\'s choice — and his survival makes the blessing meaningfully inclusive.',
      },
      {
        quote: '"I am as light as a feather, I am as happy as an angel"',
        source: 'Stave 5, Scrooge on Christmas morning',
        analysis: 'Similes + anaphora + anti-Scrooge register. Dickens deliberately over-pitches the conversion for the moralist\'s effect — the reader is meant to laugh with Scrooge, not at him.',
      },
    ],
    grade9Indicators: [
      'Clear grasp of the novella as allegory / moral intervention, not naturalistic fiction',
      'Precise Victorian context anchored to specific legislation or events',
      'Analysis of Dickens\'s structural symmetry (1→5, Staves 2–4 as triptych)',
      'Zoom into single words (e.g. "forged" in Marley\'s chain)',
      'Treatment of Scrooge\'s change as the thematic centre',
    ],
    faqs: [
      {
        question: 'Is A Christmas Carol on both AQA and Edexcel?',
        answer:
          'A Christmas Carol is one of the 19th-century novel options on both AQA 8702 Paper 1 Section B and Edexcel 1ET0 Paper 2. Your school will have chosen it or an alternative (Jekyll and Hyde, Great Expectations, Jane Eyre, Sign of Four, Frankenstein).',
      },
      {
        question: 'How does Scrooge change?',
        answer:
          'Scrooge changes through three distinct spiritual encounters: Past (re-humanisation), Present (compassion triggered by Ignorance and Want), Future (fear of his own unmourned death). Dickens stages the arc as a deliberately symmetrical structure from Stave 1 misery to Stave 5 joy.',
      },
    ],
  },

  'jekyll-hyde': {
    slug: 'jekyll-hyde',
    label: 'Jekyll and Hyde',
    overview:
      "Stevenson\'s 1886 Gothic novella: a respectable London doctor chemically splits his own soul. Duality, repression, late-Victorian moral anxiety.",
    about: [
      "The Strange Case of Dr Jekyll and Mr Hyde appeared as a \'shilling shocker\' in January 1886. Stevenson wrote it in a fortnight, allegedly after a fever-dream. The novella sold 40,000 copies in six months in Britain and became a sermon subject across Protestant Britain within a year — a rare example of a piece of popular fiction entering the Victorian pulpit immediately.",
      "The text is structurally unusual. Most of the narrative is filtered through Utterson, a detective-reader figure, and only in the final \'Full Statement\' do we hear from Jekyll directly. This means the reader spends most of the novella with access withheld — a deliberate Gothic strategy that makes Hyde\'s otherness the governing atmosphere, not a revealed puzzle.",
      "Stevenson was writing into a specific Victorian scientific anxiety: Darwin\'s Origin (1859) and Descent of Man (1871) had displaced humans from divine creation into evolutionary continuity with animals. Hyde\'s repeated description as \'ape-like\' or as giving the impression of deformity without identifiable cause is the language of degeneration theory — a late-Victorian fear that civilisation might slip backwards into primitivism.",
    ],
    boards: ['AQA', 'Edexcel'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 1: Shakespeare and the 19th-century novel',
        section: 'Section B — 19th-century novel',
        marks: 30,
        timeGuide: '50 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Response + textual support' },
          { ao: 'AO2', weight: '12 marks', description: 'Methods analysis' },
          { ao: 'AO3', weight: '6 marks', description: 'Context — late Victorian, Darwin, duality, Gothic tradition' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG' },
        ],
      },
    ],
    examTips: [
      'Treat duality as the thematic spine. Stevenson\'s title has two names; the novella has two London settings (respectable Soho vs fog-bound back alleys); two narrators (Utterson-Enfield vs Jekyll\'s Full Statement).',
      'Context is rich: name Darwin, degeneration theory, Jack the Ripper (1888 — AFTER the novella but reads back onto it).',
      'Hyde is smaller and "younger" than Jekyll. That is significant: Stevenson locates the primal self as developmentally prior.',
      'Use "Gothic" with precision. Gothic does not just mean scary — name specific Gothic techniques (unreliable narration, fragmented document structure, the doubled protagonist).',
      'Quote short and sharp. "Trampled calmly over the child\'s body" captures the contradictory horror in five words.',
    ],
    keyQuotes: [
      {
        quote: '"Trampled calmly over the child\'s body"',
        source: 'Chapter 1, Enfield describing Hyde',
        analysis: 'Adverb/verb dissonance. "Calmly" collides with "trampled" to mark Hyde as beyond moral feeling — Stevenson introduces his villain through affective dissonance, not external description.',
      },
      {
        quote: '"Like some damned Juggernaut"',
        source: 'Chapter 1, Enfield',
        analysis: 'Simile + colonial orientalism. The Juggernaut was a Sanskrit-origin religious symbol Victorian readers understood as monstrous momentum — the comparison displaces primitivism onto the colonial "other".',
      },
      {
        quote: '"Man is not truly one, but truly two"',
        source: 'Chapter 10, Jekyll\'s Full Statement',
        analysis: 'Antithesis + adverbial repetition. Jekyll\'s thesis statement of the novella — and also his philosophical error, since by the end he has become many, not two.',
      },
      {
        quote: '"I have been doomed to such a dreadful shipwreck"',
        source: 'Chapter 10, Jekyll',
        analysis: 'Metaphor of moral catastrophe. Stevenson positions Jekyll\'s fall as passive ("doomed"), which the Full Statement then complicates — Jekyll is both passive victim and active chemist of his own ruin.',
      },
      {
        quote: '"The animal within me licking the chops of memory"',
        source: 'Chapter 10, Jekyll',
        analysis: 'Personification + present participle. The animal is named, located inside Jekyll, and given ongoing appetite. Darwinian anxiety made lexical.',
      },
    ],
    grade9Indicators: [
      'Duality as structural and thematic engine',
      'Named Victorian scientific context (Darwin, degeneration, Lombroso)',
      'Gothic tradition cited with specific techniques',
      'Analysis of narrative framing (why Utterson? why Full Statement last?)',
      'Recognition that Hyde is not simply "evil" — he is an aspect of Jekyll Jekyll chose to release',
    ],
    faqs: [
      {
        question: 'Is Hyde evil or just repressed?',
        answer:
          "Strong answers argue that Stevenson complicates both. Hyde is the released appetite of Jekyll, but Jekyll is also the agent who chose to release him. The novella\'s late-Victorian insight is that evil is not external to the respectable self — it is what the respectable self refused to acknowledge.",
      },
    ],
  },

  'inspector-calls': {
    slug: 'inspector-calls',
    label: 'An Inspector Calls',
    overview:
      "Priestley\'s 1945 three-act morality play, set in 1912. A well-off family is interrogated by a mysterious inspector about the suicide of a young working-class woman.",
    about: [
      "Priestley wrote An Inspector Calls in 1944–45 as the Second World War was ending. It was first staged in Moscow in 1945 and in London in 1946. The decision to set the play in 1912 — on the eve of WWI and the sinking of the Titanic — is deliberately retrospective. Priestley is writing post-Blitz Britain, arguing that the class structure that led to both wars must not be reconstructed.",
      "The play is both a drawing-room whodunit and a socialist sermon. Its structural trick is that the Inspector interrogates the Birlings chronologically through their separate contacts with Eva Smith / Daisy Renton — a device that builds the collective moral case against them scene by scene.",
      "The play premiered the year after the 1945 Labour landslide (Attlee vs Churchill). Priestley was an active socialist and Beveridge-ite. Sheila\'s and Eric\'s \'conversion\' during the play and Mr and Mrs Birling\'s refusal to change maps directly onto the generational politics of 1945 — the young had voted Labour, the old voted Conservative.",
    ],
    boards: ['AQA', 'Edexcel'],
    assessmentContext: [
      {
        board: 'AQA 8702',
        paper: 'Paper 2: Modern texts and poetry',
        section: 'Section A — Modern text (one of: An Inspector Calls, Blood Brothers, Animal Farm, Lord of the Flies, etc.)',
        marks: 30,
        timeGuide: '45 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: '12 marks', description: 'Response and textual reference' },
          { ao: 'AO2', weight: '12 marks', description: 'Dramatic methods' },
          { ao: 'AO3', weight: '6 marks', description: 'Edwardian and post-war context' },
          { ao: 'AO4', weight: '+ 4 marks', description: 'SPaG' },
        ],
      },
    ],
    examTips: [
      'Treat the Inspector as a dramatic device, not a naturalistic character. Priestley uses him as the play\'s moral voice.',
      'Sheila\'s change is the emotional core. She shifts from defending her mother to challenging her parents — her transformation anchors the generational argument.',
      'Mr Birling\'s dramatic irony (Titanic "unsinkable", war "impossible") is Priestley\'s signature 1945-hindsight move. Use it as AO3 material.',
      'Use the terms: dramatic irony, morality play, socialist parable, well-made play.',
      '"We are members of one body" — Priestley\'s thesis statement, delivered through the Inspector\'s final speech. Memorise it.',
    ],
    keyQuotes: [
      {
        quote: '"We are members of one body"',
        source: 'Act 3, Inspector Goole',
        analysis: 'Collective-noun metaphor + plural verb. The Inspector\'s sermon compresses New Testament vocabulary ("one body") into the 1945 case for the welfare state.',
      },
      {
        quote: '"Unsinkable, absolutely unsinkable"',
        source: 'Act 1, Mr Birling on the Titanic',
        analysis: 'Repetition + dramatic irony. The 1945 audience knows the Titanic sank in April 1912. Priestley weaponises audience knowledge to discredit Birling\'s capitalist confidence before the play\'s moral argument even begins.',
      },
      {
        quote: '"The famous younger generation who know it all"',
        source: 'Act 3, Mr Birling',
        analysis: 'Sarcastic superlative + generational dismissal. Birling frames Sheila and Eric as pretentious — but Priestley has already positioned the audience to side with them.',
      },
      {
        quote: '"But these girls aren\'t cheap labour — they\'re people"',
        source: 'Act 1, Sheila',
        analysis: 'Adversative conjunction + dash + assertion. Sheila\'s first moral break with her father; the dash enacts her realisation mid-sentence.',
      },
      {
        quote: '"Fire and blood and anguish"',
        source: 'Act 3, Inspector\'s exit speech',
        analysis: 'Tricolon + biblical register. The Inspector prophesies the world wars; the 1945 audience is the fulfilment of the prophecy.',
      },
    ],
    grade9Indicators: [
      'Clear sense of Priestley\'s socialist-didactic purpose',
      '1912 / 1945 dual-context reading',
      'Inspector as dramatic device rather than naturalistic character',
      'Generational divide mapped across all five Birlings and Gerald',
      'Analysis of stage directions (lighting change on Inspector\'s arrival)',
    ],
    faqs: [
      {
        question: 'Who is Inspector Goole?',
        answer:
          'Priestley leaves the question deliberately open. Goole might be a real inspector, a supernatural agent (the name is a pun on "ghoul"), a future self, or Priestley\'s moral conscience. Strong answers hold the ambiguity open rather than resolve it.',
      },
    ],
  },

  'language-paper': {
    slug: 'language-paper',
    label: 'Language Paper',
    overview:
      'GCSE English Language — unseen fiction and non-fiction texts, reading and writing skills, two papers at 50% each of the total qualification.',
    about: [
      "GCSE English Language is the separate qualification from GCSE English Literature — almost every UK student sits both. AQA, Edexcel, OCR, WJEC/Eduqas all use the same broad two-paper structure: one paper focused on creative / descriptive fiction, one on non-fiction / viewpoint writing.",
      "The paper is unseen: you do not prepare texts in advance. What you prepare are the techniques — structural analysis for Q3, comparison frameworks for Q4, descriptive writing for Section B — so that whatever extract appears on the day, you already have the tools.",
      "AQA Paper 1 has five questions: one-mark list, four-mark language analysis, eight-mark structural analysis, twenty-mark evaluation, and a forty-mark writing task. Total 80 marks. Edexcel, OCR, and Eduqas follow similar but distinctive question mixes.",
    ],
    boards: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    assessmentContext: [
      {
        board: 'AQA 8700',
        paper: 'Paper 1: Explorations in Creative Reading and Writing',
        section: 'Sections A (reading) + B (writing)',
        marks: 80,
        timeGuide: '1 hour 45 minutes',
        aoWeighting: [
          { ao: 'AO1', weight: 'Reading Q1', description: 'Identify information' },
          { ao: 'AO2', weight: 'Reading Q2–3', description: 'Language and structure analysis' },
          { ao: 'AO4', weight: 'Reading Q4', description: 'Critical evaluation' },
          { ao: 'AO5', weight: 'Writing Q5', description: 'Communication and organisation' },
          { ao: 'AO6', weight: 'Writing Q5', description: 'Vocabulary and technical accuracy' },
        ],
      },
    ],
    examTips: [
      'Time-manage by mark weighting. A one-mark question gets 30 seconds, not 3 minutes.',
      'For Q2 (language analysis) — pick 2–3 specific methods and zoom deep. Shallow coverage scores lower than deep analysis of fewer points.',
      'For Q3 (structure) — always discuss beginning, middle, and end, AND one shift within. Named techniques: zoom shift, perspective change, time manipulation, cliffhanger.',
      "For Q4 (evaluation) — the question prompts a statement and asks you to evaluate. Your answer must use the word \'evaluation\' and argue both sides with evidence.",
      'For Q5 (writing) — plan for 5 minutes. Decide opening, closing, and two image-carrying moments. Then write.',
      'Vary sentence length for AO6. One short declarative sentence after a long complex one is an instant AO6 mark.',
    ],
    keyQuotes: [],
    grade9Indicators: [
      'Methods analysis that zooms into single-word or single-phrase choices',
      'Structure analysis that names techniques and explains effects',
      'Evaluation that engages with the question\'s prompt and argues specific sides',
      'Creative writing that shows controlled vocabulary, varied sentence structures, deliberate ambiguity',
      'Non-fiction writing that deploys rhetorical devices (tricolon, anaphora, rhetorical questions) with purpose',
    ],
    faqs: [
      {
        question: 'Are Paper 1 and Paper 2 weighted equally?',
        answer: 'Yes. On AQA, Edexcel, OCR, and WJEC/Eduqas, Paper 1 and Paper 2 each contribute 50% of the total GCSE English Language grade.',
      },
    ],
  },

  revision: {
    slug: 'revision',
    label: 'Revision Skills',
    overview:
      "Study techniques, spaced repetition, timed practice, mock-exam strategy, and the psychology of exam performance.",
    about: [
      "Revision isn\'t a subject — it\'s a meta-skill. The students who score top grades in English are rarely the ones who revise the most hours; they are the ones who revise the right content in the right order using techniques that commit material to long-term memory.",
      "The evidence base for effective revision is well-established: spaced repetition (revisiting material at increasing intervals), retrieval practice (closed-book self-testing), interleaving (mixing topics rather than blocking), and dual-coding (combining verbal and visual representation). These four techniques consistently outperform highlighting, re-reading, and copying notes.",
      "For GCSE English specifically, the highest-leverage revision activity is not memorising quotes — it is writing full timed essays under exam conditions, self-marking them against the specific mark scheme, and rewriting the weakest paragraph. Most students under-practise this and over-practise passive review.",
    ],
    boards: ['All'],
    assessmentContext: [],
    examTips: [
      'Space your revision — do 30 minutes across 6 days rather than 3 hours on one day.',
      'Self-test before you re-read. Close the book, try to recall, then check.',
      'Interleave texts: Macbeth → Power and Conflict → A Christmas Carol rather than three Macbeth sessions in a row.',
      'Write one timed essay a week in the 8 weeks before mocks. Self-mark against the real mark scheme.',
      'Schedule revision as calendar events, not to-do list items — the psychological commitment differs.',
      'Rewrite, don\'t just mark. After every self-marked essay, pick the weakest paragraph and rewrite it as it could have been.',
    ],
    keyQuotes: [],
    grade9Indicators: [
      'Uses evidence-based study techniques: spacing, retrieval, interleaving, dual-coding',
      'Writes full timed essays and self-marks them against real mark schemes',
      'Rewrites weak paragraphs rather than just noting they were weak',
      'Maintains a reflective journal of what worked and what didn\'t per revision session',
    ],
    faqs: [
      {
        question: 'How much should I revise for GCSE English?',
        answer:
          'Quality over quantity. 45 minutes of active retrieval practice and timed writing is worth three hours of passive re-reading. Aim for 4–6 sessions of 45 minutes per week in the 10 weeks before the exam.',
      },
      {
        question: 'Is it worth memorising quotes?',
        answer:
          'Yes, but in layers. Memorise 3–4 flexible quotes per text / poem / anthology that work across multiple themes. Thirty carefully-chosen quotes across GCSE English Literature will cover every likely question.',
      },
    ],
  },
}

/**
 * Utility: get the context block for a given category slug.
 * Returns null if no context exists for that category yet.
 */
export function getCategoryContext(category: string): CategoryContext | null {
  return CATEGORY_CONTEXT[category] ?? null
}
