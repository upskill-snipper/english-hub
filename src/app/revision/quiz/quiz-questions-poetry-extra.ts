// ─── Extra poetry quiz question bank (100 questions) ─────────────────────────
// Authored as a stand-alone module. The orchestrator will wire this into the
// main quiz registry by importing `poetryExtraQuestions` from this file and
// concatenating it with the existing `poetryQuestions` array in quiz-data.ts.
//
// Coverage:
//   • 25 AQA Power & Conflict cluster
//   • 25 AQA Love & Relationships cluster
//   • 20 Edexcel anthology (Pearson Poems from Different Cultures / Conflict)
//   • 15 OCR + Eduqas anthologies (Towards a World Unknown / Poetry Anthology)
//   • 15 Unseen poetry technique
//
// Every question has 4 options, one correct answer (correctIndex), and an
// explanation paragraph teaching WHY the answer is right (with reference to
// line, technique or AO where helpful). Quotations in question stems are kept
// canonically accurate and short (≤15 words); where exact wording was
// uncertain, the question instead asks about technique, structure or theme.

import type { QuizQuestion } from './quiz-data'

export const poetryExtraQuestions: QuizQuestion[] = [
  // ─── AQA Power & Conflict (25) ───────────────────────────────────────────
  {
    id: 'poetry-extra-001',
    topic: 'poetry',
    question:
      'In Shelley\'s "Ozymandias", what does the phrase "sneer of cold command" reveal about the king?',
    options: [
      'His warmth toward his subjects',
      'His arrogance and tyrannical authority',
      'His military incompetence',
      'His religious devotion',
    ],
    correctIndex: 1,
    explanation:
      'The oxymoronic "sneer of cold command" captures Ozymandias\'s contemptuous arrogance: a "sneer" suggests scorn for those beneath him while "cold command" implies emotionless, absolute power. Shelley uses this to condemn tyranny (AO1/AO2) and prepare the reader for the irony that such pride is now a "shattered visage" in the sand.',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-002',
    topic: 'poetry',
    question: 'What form does Shelley\'s "Ozymandias" take?',
    options: [
      'A Shakespearean sonnet',
      'A hybrid sonnet that blends Petrarchan and Shakespearean features',
      'A villanelle',
      'A dramatic monologue in heroic couplets',
    ],
    correctIndex: 1,
    explanation:
      '"Ozymandias" is a 14-line sonnet but its irregular rhyme scheme (ABABACDCEDEFEF) refuses to settle into either Petrarchan or Shakespearean form. This structural disorder mirrors the crumbling statue and undermines the king\'s claim to ordered, eternal power (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-003',
    topic: 'poetry',
    question:
      'In Blake\'s "London", the repetition of "every" in lines such as "In every cry of every Man" is an example of which technique?',
    options: ['Volta', 'Anaphora', 'Caesura', 'Sibilance'],
    correctIndex: 1,
    explanation:
      'Anaphora is the repetition of a word at the start of successive phrases or clauses. Blake hammers "every" through stanza two ("every cry…every Infant…every voice…every ban") to suggest that suffering in London is universal and inescapable, reinforcing his Romantic critique of institutional oppression (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-004',
    topic: 'poetry',
    question: 'In Blake\'s "London", who does the speaker say is blackening the Church?',
    options: ['The soldier', 'The harlot', 'The chimney-sweeper', 'The king'],
    correctIndex: 2,
    explanation:
      'The "Chimney-sweepers cry" appalls "every blackning Church"—Blake suggests the Church is morally blackened by its complicity in the exploitation of child labour, while the soot of industry literally blackens its walls. This double meaning attacks institutional hypocrisy (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-005',
    topic: 'poetry',
    question:
      'Heaney\'s "Storm on the Island" opens "We are prepared". What is the effect of this collective pronoun?',
    options: [
      'It distances the reader from the islanders',
      'It builds a defiant, communal voice that the storm will later undermine',
      'It signals that the speaker is alone',
      'It introduces a child narrator',
    ],
    correctIndex: 1,
    explanation:
      'The plural "we" creates a confident, communal opening; the islanders sound defended and capable. Heaney then dismantles this certainty as the storm arrives, exposing human powerlessness before nature. The structural shift from confidence to fear is central to the poem\'s argument (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-006',
    topic: 'poetry',
    question:
      'The closing line of "Storm on the Island" is "it is a huge nothing that we fear". What technique is at work?',
    options: ['Hyperbole only', 'Oxymoron / paradox', 'Personification', 'Rhetorical question'],
    correctIndex: 1,
    explanation:
      'The phrase "huge nothing" is paradoxical/oxymoronic: nothing cannot be huge. Heaney captures the way that an invisible, intangible force—wind, fear, perhaps political violence—can dominate human experience. The line\'s simplicity makes the paradox land with force (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-007',
    topic: 'poetry',
    question:
      'Hughes\'s "Bayonet Charge" opens with the soldier "running". How does this affect the reader?',
    options: [
      'It establishes a slow, reflective tone',
      'It throws the reader straight into the chaos and panic of the action',
      'It signals that the poem is comic',
      'It tells us the soldier is a child',
    ],
    correctIndex: 1,
    explanation:
      'Hughes drops the reader in medias res. The present-participle "running" denies any establishing context, mirroring the soldier\'s loss of orientation. The poem\'s frantic structure—broken sentences, dashes, enjambment—dramatises the collapse of patriotic ideals into instinctive terror (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-008',
    topic: 'poetry',
    question:
      'In "Bayonet Charge", Hughes describes patriotism as dropping "like luxuries". What does this simile suggest?',
    options: [
      'Patriotism becomes more valuable in war',
      'Patriotic ideals are non-essential and are abandoned in real combat',
      'The soldier is greedy',
      'War is a luxury experience',
    ],
    correctIndex: 1,
    explanation:
      'The simile reframes "King, honour, human dignity, etcetera" as "luxuries"—items shed when survival is the only goal. Hughes attacks the propaganda that lured young men into the trenches, showing how abstract values evaporate in the face of bodily fear (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-009',
    topic: 'poetry',
    question: 'Simon Armitage\'s "Remains" is written largely in which voice?',
    options: [
      'Third-person omniscient',
      'First-person colloquial monologue',
      'Second-person address',
      'Choric plural "we"',
    ],
    correctIndex: 1,
    explanation:
      'The poem is a first-person dramatic monologue based on a soldier\'s testimony from the documentary "The Not Dead". Colloquial phrases ("probably armed, possibly not") create authentic voice and make the trauma feel immediate, while the mid-poem shift home dramatises PTSD (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-010',
    topic: 'poetry',
    question: 'In "Remains", which structural feature signals the speaker\'s descent into trauma?',
    options: [
      'A perfect ABAB rhyme scheme throughout',
      "The shift from outside the bank to inside the speaker's head",
      'A switch from past to future tense in the opening stanza',
      'The introduction of a second speaker',
    ],
    correctIndex: 1,
    explanation:
      'Armitage divides the poem at the volta-like turn where action ("End of story…") gives way to memory ("except not really"). The setting moves from a specific Iraqi street to the speaker\'s sleepless mind, dramatising how trauma collapses time and place (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-011',
    topic: 'poetry',
    question:
      'Tennyson\'s "The Charge of the Light Brigade" repeatedly uses dactylic metre. What is the effect?',
    options: [
      'It mimics a slow funeral march',
      'It mimics the galloping rhythm of cavalry horses',
      'It creates a comic, sing-song tone',
      'It imitates speech rhythms',
    ],
    correctIndex: 1,
    explanation:
      'The dactyl (DUM-da-da, e.g. "Half a league, half a league") drives the poem forward like hooves at a charge. Tennyson uses metre to celebrate courage while the relentless beat also evokes the inescapable forward momentum into "the valley of Death" (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-012',
    topic: 'poetry',
    question: 'What does the refrain "Theirs not to reason why,/Theirs but to do and die" express?',
    options: [
      'The cowardice of the cavalry',
      'Unquestioning duty and the moral cost of obedience',
      "Tennyson's opposition to all war",
      "The brigade's strategic genius",
    ],
    correctIndex: 1,
    explanation:
      'Tennyson commemorates the soldiers\' obedient courage but the rhyme of "why" with "die" quietly exposes the human cost of unquestioning command. The line is often read as patriotic tribute and gentle critique simultaneously (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-013',
    topic: 'poetry',
    question:
      'Owen\'s "Exposure" repeats the line "But nothing happens". What does this refrain suggest?',
    options: [
      'The soldiers are bored of leisure',
      'The true enemy is the weather and waiting, not combat',
      'A ceasefire has been declared',
      'The soldiers have escaped to safety',
    ],
    correctIndex: 1,
    explanation:
      'Owen subverts war poetry: the killer here is not bullets but cold and exhaustion. The refrain enacts stasis, while half-rhymes ("knive us / nervous", "silent / salient") create discordant unease that mirrors the men\'s frozen, waiting horror (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-014',
    topic: 'poetry',
    question: 'Which poem in the AQA Power & Conflict cluster is set on the Khyber Pass?',
    options: ['"Tissue"', '"Kamikaze"', '"The Émigrée"', '"Checking Out Me History"'],
    correctIndex: 0,
    explanation:
      'Imtiaz Dharker\'s "Tissue" references the Khyber Pass to evoke ancient maps and the fragility of human-drawn borders. The poem uses paper as an extended metaphor for human life and the constructed nature of power (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-015',
    topic: 'poetry',
    question: 'In Carol Ann Duffy\'s "War Photographer", what is contrasted with "Rural England"?',
    options: [
      "The photographer's childhood",
      'Distant war zones full of suffering',
      'A Scottish landscape',
      'A Victorian battlefield',
    ],
    correctIndex: 1,
    explanation:
      'Duffy juxtaposes "Rural England" with places of horror ("Belfast. Beirut. Phnom Penh."). The asyndetic list of war zones flattens distinct conflicts into a litany of suffering, while the safe pastoral home highlights Western readers\' complacency (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-016',
    topic: 'poetry',
    question: 'What is the significance of the "spools of suffering" in "War Photographer"?',
    options: [
      'It is a metaphor for sewing thread',
      'The metaphor equates film rolls with the contained pain they record',
      "It refers to the photographer's tears",
      'It refers to barbed wire',
    ],
    correctIndex: 1,
    explanation:
      'Duffy\'s metaphor compresses physical objects (rolls of film) and human pain into one image. The sibilance of "spools of suffering" makes the line whisper, as if grief is held inside the canisters; this preserves the photographer\'s ethical burden (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-017',
    topic: 'poetry',
    question:
      'Imtiaz Dharker\'s "Tissue" uses paper as an extended metaphor. What does paper represent?',
    options: [
      'Hard, immovable systems of power',
      'The fragility and translucence of human life and structures',
      'Wealth and luxury alone',
      'Childhood innocence only',
    ],
    correctIndex: 1,
    explanation:
      'Paper—maps, holy books, receipts, "tissue" itself—stands for the fragile structures we build to govern and remember our lives. Dharker contrasts paper\'s vulnerability with its enduring power, asking what would happen if humans were as transparent as the things they create (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-018',
    topic: 'poetry',
    question: 'Beatrice Garland\'s "Kamikaze" is structured as which kind of narrative?',
    options: [
      'A first-person account by the pilot himself',
      "A daughter's retelling of her father's story, framed by third-person narration",
      'A letter from the Emperor',
      'A dialogue between two pilots',
    ],
    correctIndex: 1,
    explanation:
      'The poem alternates between a third-person account of the pilot\'s flight and the daughter\'s direct speech (in italics). The framing emphasises how shame is socially constructed: the family "treated him as though he no longer existed" after he returned (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-019',
    topic: 'poetry',
    question:
      'In "The Émigrée" by Carol Rumens, the city the speaker remembers is described as having which dominant quality?',
    options: [
      'Darkness and decay',
      'Sunlight, despite political tyranny',
      'Snow and silence',
      'Rain and grey skies',
    ],
    correctIndex: 1,
    explanation:
      'Sunlight is the poem\'s controlling motif: "There once was a country… I left it as a child / but my memory of it is sunlight-clear". Light symbolises memory, hope and identity that politics ("tyrants", "branded by an impression of sunlight") cannot extinguish (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-020',
    topic: 'poetry',
    question:
      'John Agard\'s "Checking Out Me History" uses non-standard spelling such as "dem" and "Toussaint". Why?',
    options: [
      'To suggest the speaker is uneducated',
      'To assert Caribbean Creole identity against a colonial syllabus',
      'Because the poem is a translation error',
      'To make the poem easier to read aloud',
    ],
    correctIndex: 1,
    explanation:
      "Agard's phonetic Creole spelling is a deliberate political choice. By giving the colonisers' figures (Dick Whittington, Lord Nelson) standard English and the Black freedom-fighters (Toussaint L'Ouverture, Mary Seacole) lyrical, italicised rhyme, he reclaims linguistic and historical agency (AO2/AO3).",
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-021',
    topic: 'poetry',
    question:
      'Wordsworth\'s "Extract from The Prelude" describes a stolen boat trip. What dominates the second half of the extract?',
    options: [
      'A celebratory feast on shore',
      'A "huge peak, black and huge" that fills the speaker with awe and guilt',
      'A storm at sea',
      'A meeting with a stranger',
    ],
    correctIndex: 1,
    explanation:
      'As the boy rows further out, a mountain looms into view ("a huge peak, black and huge"). The repetition emphasises its sublime, threatening scale. Wordsworth uses the natural world as a moral force whose grandeur reveals the boy\'s own guilt at his "act of stealth" (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-022',
    topic: 'poetry',
    question: 'What is the form of Browning\'s "My Last Duchess"?',
    options: [
      'Free verse',
      'A dramatic monologue in iambic pentameter rhyming couplets',
      'A Petrarchan sonnet',
      'Blank verse with no rhyme',
    ],
    correctIndex: 1,
    explanation:
      'The Duke speaks the entire poem to a silent envoy in tightly controlled iambic pentameter rhyming couplets. The rigid form mirrors his desire for control over his wife and listener; enjambment across the couplets shows his apparently casual eloquence masking obsession (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-023',
    topic: 'poetry',
    question:
      'In "My Last Duchess", what does the Duke object to about his late wife\'s behaviour?',
    options: [
      'Her wealth',
      'That she "liked whate\'er / She looked on" and gave equal regard to everyone',
      'Her religious devotion',
      'Her fondness for poetry',
    ],
    correctIndex: 1,
    explanation:
      'The Duke is enraged that the Duchess responded warmly to everyone—not just to his "gift of a nine-hundred-years-old name". Browning uses the Duke\'s self-incriminating speech to expose aristocratic, patriarchal power that demands ownership of female attention (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-024',
    topic: 'poetry',
    question:
      'In Jane Weir\'s "Poppies", the speaker releases her son to which place at the start?',
    options: ['The seaside', 'School / the war / a new life', 'A wedding', 'Hospital'],
    correctIndex: 1,
    explanation:
      "The poem opens with the mother pinning a poppy to her son's blazer; domestic detail elides school-day departure with the deeper grief of a mother whose son has gone to war. Weir merges everyday and traumatic separation, a key feature of contemporary war poetry (AO2/AO3).",
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-025',
    topic: 'poetry',
    question: 'How does enjambment function in "Poppies" by Jane Weir?',
    options: [
      'It locks the poem into rigid stanzas',
      "It mirrors the speaker's grief running uncontrollably across line breaks",
      'It is used only for comic effect',
      'It signals direct speech',
    ],
    correctIndex: 1,
    explanation:
      'Long enjambed lines spill the mother\'s memories onto the page without the relief of full stops. Form embodies feeling: grief, like the poem\'s sentences, refuses to be contained, while textile imagery ("crimped", "spasms", "blackthorns") stitches the personal and political together (AO2).',
    boards: ['aqa'],
  },

  // ─── AQA Love & Relationships (25) ───────────────────────────────────────
  {
    id: 'poetry-extra-026',
    topic: 'poetry',
    question:
      'Shelley\'s "Love\'s Philosophy" argues that natural elements all combine — to what end?',
    options: [
      'To prove that love is impossible',
      'To persuade the addressee that she should kiss the speaker',
      'To celebrate religious devotion',
      'To mourn a lost lover',
    ],
    correctIndex: 1,
    explanation:
      'The poem is a witty seduction: if "fountains mingle with the river" and "the winds of heaven mix for ever", what worth is "all this sweet work" if the beloved will not kiss him? Shelley uses natural law as rhetorical proof, ending with an unanswered rhetorical question (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-027',
    topic: 'poetry',
    question: 'What is the form of "Love\'s Philosophy"?',
    options: [
      'A Shakespearean sonnet',
      'Two regular octaves with an ABABCDCD rhyme scheme',
      'A villanelle',
      'A blank-verse dramatic monologue',
    ],
    correctIndex: 1,
    explanation:
      "The poem is in two eight-line stanzas of regular alternating rhyme. The neat parallel structure reinforces the rhetorical argument from analogy: each stanza presents nature's couplings, then turns on the lover's refusal. Form mirrors persuasion (AO2).",
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-028',
    topic: 'poetry',
    question:
      'Browning\'s "Porphyria\'s Lover" is a dramatic monologue. What disturbing act does the speaker commit?',
    options: [
      'He elopes with Porphyria',
      'He strangles Porphyria with her own hair',
      'He poisons her wine',
      'He abandons her in the storm',
    ],
    correctIndex: 1,
    explanation:
      'Wanting to preserve the moment Porphyria "worshipped" him, the speaker uses her "yellow hair" to strangle her. Browning exposes a possessive, deluded male psyche through chilling first-person justification: "No pain felt she; / I am quite sure she felt no pain" (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-029',
    topic: 'poetry',
    question: 'Why is the rhyme scheme of "Porphyria\'s Lover" (ABABB) significant?',
    options: [
      'It is a perfect, soothing pattern',
      'The extra B creates a faintly unbalanced, obsessive feel within ostensible regularity',
      'It mirrors a Petrarchan sonnet',
      'It is identical to the heroic couplet',
    ],
    correctIndex: 1,
    explanation:
      'The ABABB pattern looks orderly but the repeated final B is subtly off-balance—an apt aural emblem for a speaker whose calm tone hides homicidal obsession. Browning matches form to a deranged psychology (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-030',
    topic: 'poetry',
    question:
      "Elizabeth Barrett Browning's \"Sonnet 29 ('I think of thee!')\" uses which sustained metaphor for the speaker's thoughts?",
    options: ['A river', 'A vine winding around a tree', 'A burning candle', 'A silver chain'],
    correctIndex: 1,
    explanation:
      'The speaker compares her thoughts of her lover to "wild vines, about a tree". The metaphor admits that her thinking risks "hiding" the man himself; she asks him to renew her with his presence so the real lover overrides her imagined version. The conceit complicates idealised love (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-031',
    topic: 'poetry',
    question:
      'Andrew Waterhouse\'s "Climbing My Grandfather" uses an extended metaphor of grandfather as what?',
    options: ['A house', 'A mountain', 'An ocean', 'A library'],
    correctIndex: 1,
    explanation:
      'The poem treats the grandfather as a mountain to be climbed "free, without a rope", noticing his "splintered" nails, "screed cheek", "soft and white" hair as a summit. The conceit makes intimate childhood memory feel epic and tender (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-032',
    topic: 'poetry',
    question: 'What is the dominant tone of "Climbing My Grandfather"?',
    options: [
      'Bitter and resentful',
      'Affectionate, admiring and patient',
      'Mocking and ironic',
      'Detached and clinical',
    ],
    correctIndex: 1,
    explanation:
      'The careful, sensory detail and the slow vertical journey create reverence for the grandfather. The final image of his heart "pulsing" beneath the skin is tender. Free verse, with no end-stops in the long sentences, allows admiration to flow uninterrupted (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-033',
    topic: 'poetry',
    question:
      'In Carol Ann Duffy\'s "Valentine", the central conceit compares love to which everyday object?',
    options: ['A red rose', 'A satin heart', 'An onion', 'A wedding ring'],
    correctIndex: 2,
    explanation:
      'Duffy refuses cliché ("Not a red rose or a satin heart") and chooses an onion. Like love, the onion has layers, "blinds you with tears", smells "fierce" and leaves a lasting mark. The unromantic image insists on honesty about love\'s pain as well as its sweetness (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-034',
    topic: 'poetry',
    question: 'Which line from "Valentine" warns of love\'s potential for harm?',
    options: [
      '"Its scent will cling to your fingers"',
      '"Lethal."',
      '"A moon wrapped in brown paper"',
      '"Take it."',
    ],
    correctIndex: 1,
    explanation:
      'The single-word sentence "Lethal." stops the poem dead. Duffy warns that love\'s ring/possession can be deadly, alluding both to wedding rings and to a knife\'s blade. The minor sentence creates emphatic finality—form mirrors danger (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-035',
    topic: 'poetry',
    question: 'Lord Byron\'s "When We Two Parted" expresses what kind of love?',
    options: [
      'A celebrated public romance',
      'A clandestine affair remembered with grief and bitterness',
      'A happy marriage',
      'A new love beginning',
    ],
    correctIndex: 1,
    explanation:
      'The poem mourns a secret relationship: the speaker hears the lover\'s name "in silence and tears" because he cannot acknowledge her publicly. Cold imagery ("colder thy kiss") and the closing stanza\'s prediction—"with silence and tears"—frame the affair as a private, enduring wound (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-036',
    topic: 'poetry',
    question: 'Thomas Hardy\'s "Neutral Tones" presents a memory of which kind of day?',
    options: [
      'A sunlit summer afternoon',
      'A grey, wintry day by a pond',
      'A snowstorm on Christmas Eve',
      'A misty autumn morning in a forest',
    ],
    correctIndex: 1,
    explanation:
      'Hardy sets the scene by a pond on a winter day with "the sun was white, as though chidden of God". The greyscale palette ("starving sod", "grayish leaves") embodies the emotional deadness of a love at its end—pathetic fallacy as moral landscape (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-037',
    topic: 'poetry',
    question: 'What is the structural significance of the final stanza of "Neutral Tones"?',
    options: [
      'It introduces a new lover',
      "It returns to the pond, freezing the memory as a permanent emblem of love's deceit",
      'It changes setting to a wedding',
      'It moves into hopeful future tense',
    ],
    correctIndex: 1,
    explanation:
      'The poem cycles back to the opening scene, but now distilled into a "lesson". The bleak pond and "tree, / And a pond edged with grayish leaves" become a fixed image of betrayal—Hardy uses circular structure to suggest the experience has shaped his whole worldview (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-038',
    topic: 'poetry',
    question: 'Owen Sheers\'s "Winter Swans" uses the swans\' behaviour as a metaphor for what?',
    options: [
      'War and conflict',
      'A reconciliation in a struggling relationship',
      'Childhood friendship',
      'Religious salvation',
    ],
    correctIndex: 1,
    explanation:
      'After "two days of rain", a couple walk in silence; the swans paired on the water mirror what the couple might recover. By the end the speakers\' hands "[swim] the distance between us" and "folded, one over the other"—the swan imagery transfers to them (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-039',
    topic: 'poetry',
    question:
      'In "Mother, any distance" by Simon Armitage, what extended metaphor controls the poem?',
    options: [
      'A boat journey',
      'Measuring a new house with a tape measure as a symbol of separation',
      'A cooking recipe',
      'A chess game',
    ],
    correctIndex: 1,
    explanation:
      'The mother holds the "zero-end" of the tape measure while the son climbs into the loft. The tape becomes an "unreeling / years between us"—an umbilical bond that must extend or break. Form (uneven sonnet-like 15 lines) signals love that cannot quite stay neatly contained (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-040',
    topic: 'poetry',
    question: 'How does Armitage end "Mother, any distance"?',
    options: [
      'With a clear declaration of independence',
      'Ambiguously, with the son uncertain whether to "fall or fly"',
      'With the mother leaving the house',
      "With a sonnet's final couplet of marriage",
    ],
    correctIndex: 1,
    explanation:
      'The closing image of the speaker on a stepladder, anchor or kite, ready "to fall or fly", refuses neat resolution. Armitage uses the open ending to capture the fragile balance of growing up—autonomy is risk as well as freedom (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-041',
    topic: 'poetry',
    question:
      'Seamus Heaney\'s "Follower" contrasts the boy speaker with his ploughman father. What is the closing reversal?',
    options: [
      'The father becomes a sailor',
      'In old age the father now stumbles behind the speaker',
      'The boy abandons farming for poetry',
      'The father dies suddenly',
    ],
    correctIndex: 1,
    explanation:
      'The poem inverts childhood: "today / It is my father who keeps stumbling / Behind me, and will not go away". The reversal captures filial love, ageing, and inherited memory; pronouns and tense shifts mark the passage from awe to caretaker (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-042',
    topic: 'poetry',
    question: 'Charles Causley\'s "Eden Rock" presents the speaker\'s parents as which figures?',
    options: [
      'Strangers on a train',
      'Young again, beckoning the speaker to cross to them',
      'Quarrelling',
      'Asleep and silent',
    ],
    correctIndex: 1,
    explanation:
      'The parents picnic by a river, "twenty-five" and "twenty-three", ready to meet the speaker. The closing lines ("I had not thought that it would be like this") imply death or transition; the picnic becomes a tender, ambiguous afterlife (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-043',
    topic: 'poetry',
    question:
      'Daljit Nagra\'s "Singh Song!" subverts traditional love poetry by setting its romance where?',
    options: [
      'At a wedding banquet',
      "In the speaker's family corner shop",
      'On a desert island',
      'In an abandoned palace',
    ],
    correctIndex: 1,
    explanation:
      'The newlywed shopkeeper neglects the till to be with his wife upstairs. Nagra blends Punjabi-English ("Punglish"), pop culture and traditional ghazal motifs to celebrate ordinary, modern, multicultural love—form and voice are the politics (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-044',
    topic: 'poetry',
    question:
      'Which Maura Dooley poem in the AQA Love & Relationships cluster compares love to a photograph in a frame?',
    options: [
      '"Letters from Yorkshire"',
      '"Before You Were Mine"',
      '"Walking Away"',
      '"When We Two Parted"',
    ],
    correctIndex: 0,
    explanation:
      'Dooley\'s "Letters from Yorkshire" compares writing letters across distance to a kind of love. The poem\'s "souls tap out messages across the icy miles" frames technology and handwriting as competing carriers of intimacy (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-045',
    topic: 'poetry',
    question:
      'In Cecil Day-Lewis\'s "Walking Away", what extended metaphor is used for the son\'s departure?',
    options: [
      'A satellite breaking from orbit',
      'A boat leaving harbour',
      'A bird leaving a nest',
      'A train leaving a station',
    ],
    correctIndex: 0,
    explanation:
      'The poem compares the son to "a satellite / Wrenched from its orbit", drifting "free into a wilderness". Day-Lewis transforms a school gate goodbye into a cosmic image of separation, balancing pain with the necessary "selfhood" growth requires (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-046',
    topic: 'poetry',
    question: 'What is the closing aphorism of "Walking Away" by Cecil Day-Lewis?',
    options: [
      '"Love withers when nurtured"',
      '"Love is proved in the letting go"',
      '"Love conquers all"',
      '"Love is blind"',
    ],
    correctIndex: 1,
    explanation:
      'Day-Lewis ends with the resolution that "love is proved in the letting go". Placing the realisation as the poem\'s final line gives it the weight of hard-won wisdom; the verb "proved" (tested) suggests parental love is measured by the willingness to release (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-047',
    topic: 'poetry',
    question: 'Carol Ann Duffy\'s "Before You Were Mine" addresses whom?',
    options: [
      'Her child',
      'Her mother, imagining her as a young woman before motherhood',
      'A lover',
      'Her grandmother',
    ],
    correctIndex: 1,
    explanation:
      'The speaker pictures her mother as a glamorous teenager "ten years away" from her birth. The reversal of possession in the title—"Before You Were Mine"—asks who owns whom in mother–daughter love. Sensory detail (the "Marilyn" pose) animates the imagined past (AO2/AO3).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-048',
    topic: 'poetry',
    question: 'How does the structure of "Before You Were Mine" reinforce its theme?',
    options: [
      'A regular sonnet form celebrates fixed love',
      'Four equal stanzas frame a series of imagined snapshots, like a photo album',
      "A villanelle's refrains echo a memory",
      'A single block of unbroken text refuses memory',
    ],
    correctIndex: 1,
    explanation:
      'The four ten-line stanzas function like four photographs the speaker leafs through. Photographic motifs ("polka-dot dress", "high-heeled red shoes") and the chronological reverse-chronology give the poem its album-like feel (AO2).',
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-049',
    topic: 'poetry',
    question:
      'Carol Ann Duffy and other poets in the Love & Relationships cluster often subvert the sonnet form. Why is this significant?',
    options: [
      'Sonnets are very rare in English poetry',
      'The sonnet historically encodes idealised love, so subverting it questions traditional gender roles',
      'It makes the poem easier to memorise',
      'It guarantees the poem will rhyme perfectly',
    ],
    correctIndex: 1,
    explanation:
      "Modifying the sonnet (length, rhyme, voice) lets contemporary poets honour the form's romantic heritage while critiquing its assumptions—e.g. patriarchal idealisation of women. Awareness of form versus tradition is a strong AO2/AO3 move in essays.",
    boards: ['aqa'],
  },
  {
    id: 'poetry-extra-050',
    topic: 'poetry',
    question:
      'Comparing "Porphyria\'s Lover" and "My Last Duchess", what shared concern do both Browning poems reveal?',
    options: [
      'A celebration of female autonomy',
      'Male desire for total control over a female partner',
      'Religious salvation through marriage',
      "Children's perspectives on adulthood",
    ],
    correctIndex: 1,
    explanation:
      'Both dramatic monologues feature speakers who silence their partner—Porphyria literally strangled, the Duchess reduced to a painting "behind a curtain". Browning critiques 19th-century patriarchal ideologies by allowing the speakers to incriminate themselves through their own voices (AO2/AO3).',
    boards: ['aqa'],
  },

  // ─── Edexcel anthology (20) ──────────────────────────────────────────────
  {
    id: 'poetry-extra-051',
    topic: 'poetry',
    question:
      'Maya Angelou\'s "Still I Rise" employs which dominant rhetorical device in lines such as "You may shoot me with your words, / You may cut me with your eyes"?',
    options: ['Anaphora', 'Oxymoron', 'Apostrophe', 'Litotes'],
    correctIndex: 0,
    explanation:
      'Anaphora—"You may…you may…you may"—gives the poem a defiant, sermonic rhythm. The repeated structure both anticipates oppressors\' attacks and overrides them; the speaker\'s "I rise" refrain, also anaphoric, asserts collective, historical resilience (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-052',
    topic: 'poetry',
    question: 'In "Half-caste" by John Agard, the speaker challenges whom?',
    options: [
      'A racist tradition that uses "half" to denigrate mixed-heritage identity',
      'His parents',
      'A teacher only',
      'A government minister',
    ],
    correctIndex: 0,
    explanation:
      'Agard takes the slur "half-caste" and demolishes it through analogy ("yu mean when picasso / mix red an green / is a half-caste canvas?"). Caribbean-English voice and direct address ("explain yuself") confront the reader\'s complicity (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-053',
    topic: 'poetry',
    question:
      'The Edexcel "Conflict" cluster includes Wilfred Owen\'s "Exposure". Which technique structures its stanzas?',
    options: [
      'Pararhyme (half-rhyme) and a recurring refrain',
      'Perfect ABAB rhyme',
      'A villanelle scheme',
      'A Shakespearean sonnet sequence',
    ],
    correctIndex: 0,
    explanation:
      'Owen pairs near-rhymes such as "knive us / nervous" and ends most stanzas with refrains like "But nothing happens". The discordant pararhyme withholds resolution, mirroring the men\'s frozen, suspended suffering on the front (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-054',
    topic: 'poetry',
    question: 'Imtiaz Dharker\'s "Blessing" celebrates what event?',
    options: [
      'A wedding',
      'A burst water pipe in a Mumbai slum',
      'A religious festival',
      'A funeral',
    ],
    correctIndex: 1,
    explanation:
      'When a municipal pipe bursts, the community rushes with "frantic hands" and "every man, woman, / child" to catch the water. Dharker uses religious diction ("blessing", "kindly god") to honour the holiness of an everyday miracle in extreme poverty (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-055',
    topic: 'poetry',
    question: 'In "Blessing", what is the effect of the line "the sudden rush / of fortune"?',
    options: [
      'It introduces dialogue between two children',
      'It uses metaphor to equate water with wealth in a place where it is scarce',
      'It signals a change in setting to a city office',
      "It mocks the community's reaction",
    ],
    correctIndex: 1,
    explanation:
      'Dharker collapses water and wealth—"fortune"—to make the reader recognise what is taken for granted in richer countries. Enjambment ("rush / of fortune") mimics the gushing flow, while diction conveys both scarcity and ecstatic joy (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-056',
    topic: 'poetry',
    question: 'Sujata Bhatt\'s "Search for My Tongue" dramatises which kind of conflict?',
    options: [
      'A military invasion',
      "A bilingual speaker's fear of losing her mother tongue while living in another country",
      'A family argument',
      'A religious schism',
    ],
    correctIndex: 1,
    explanation:
      'The speaker imagines her "mother tongue" as a physical organ that "rots" in the mouth that must speak the "foreign tongue". Inserted Gujarati script and transliteration enact the language\'s persistent return in dreams—form embodies linguistic identity (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-057',
    topic: 'poetry',
    question: 'In Grace Nichols\'s "Hurricane Hits England", the storm functions as which symbol?',
    options: [
      'A Christian punishment for sin',
      'A force that reconnects the Caribbean speaker with her homeland and identity',
      'A British weather complaint',
      'A symbol of military defeat',
    ],
    correctIndex: 1,
    explanation:
      'The English hurricane brings "gods" of Caribbean folklore (Oya, Shango, Hattie) into Sussex, allowing the speaker to recognise that "the earth is the earth is the earth". The storm dissolves the binary of homeland and exile (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-058',
    topic: 'poetry',
    question:
      'Moniza Alvi\'s "Presents from My Aunts in Pakistan" uses clothing as a symbol of what?',
    options: [
      'Wealth and status only',
      'A bicultural identity caught between two worlds',
      'Religious tradition exclusively',
      'Physical illness',
    ],
    correctIndex: 1,
    explanation:
      'Salwar kameez "glistening like an orange split open" delights the speaker yet she cannot wear it confidently in 1960s Britain. Alvi explores hyphenated identity through colour, texture, and fitting-room shame; metaphors of split fruit and broken glass embody divided self (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-059',
    topic: 'poetry',
    question:
      "Which Edexcel anthology poem is structured as a parent's warning to a child about the world's dangers?",
    options: [
      '"Half-past Two"',
      '"Hide and Seek"',
      '"Catrin"',
      '"Do Not Go Gentle into That Good Night"',
    ],
    correctIndex: 2,
    explanation:
      // VERIFIED: gillianclarke.co.uk — "rosy in the heat" is not in the poem; the actual phrase is "rosy, / Defiant glare". The "tight / Red rope of love" is from stanza one.
      'Gillian Clarke\'s "Catrin" centres on the bond between mother and daughter, both at birth and during a teenage standoff (her "rosy, / Defiant glare"), where the "tight / Red rope of love" still ties them. Form uses irregular line lengths to dramatise tension (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-060',
    topic: 'poetry',
    question:
      'In "Hide and Seek" by Vernon Scannell, what closing realisation does the child come to?',
    options: [
      'The other children have left and no one is seeking him',
      'He has won the game',
      'It is dinner time',
      'A storm is coming',
    ],
    correctIndex: 0,
    explanation:
      'The child, hidden in salty sacks for too long, emerges to find "The darkening garden watches. Nothing stirs". Scannell uses second-person narration ("Call out. Call loud.") to draw the reader in; the volta from triumph to abandonment makes the final isolation devastating (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-061',
    topic: 'poetry',
    question: 'U. A. Fanthorpe\'s "Half-past Two" presents time from whose perspective?',
    options: [
      "A school inspector's",
      "A young child's, who cannot yet read clock time",
      "An elderly grandparent's",
      'A teacher in detention',
    ],
    correctIndex: 1,
    explanation:
      'The child knows "Gettinguptime, timeyouwereofftime" but not "half-past two". Fanthorpe runs the words together to mimic a child\'s undivided sense of time, then opens space-time as the child enters "ever" until the teacher rescues him. Form embodies cognition (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-062',
    topic: 'poetry',
    question: 'Owen Sheers\'s "Mametz Wood" is set on which battlefield?',
    options: ['The Somme, 1916', 'Waterloo, 1815', 'Agincourt, 1415', 'Ypres, 1914'],
    correctIndex: 0,
    explanation:
      'Sheers commemorates the Welsh dead at Mametz Wood during the Battle of the Somme. Farmers turning the soil decades later "find them", their bones surfacing like "a chit of bone, the china plate of a shoulder blade"—imagery of fragile crockery dignifies the dead (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-063',
    topic: 'poetry',
    question:
      'Which technique dominates Sheers\'s line "the wasted young, turning up under their plough blades"?',
    options: [
      'Iambic pentameter',
      'Euphemism / understatement plus alliteration',
      'Rhetorical question',
      'Apostrophe',
    ],
    correctIndex: 1,
    explanation:
      '"Wasted" understates mass death while "turning up under their plough blades" pictures soldiers exhumed accidentally. The image yokes farming to grief; sibilance and assonance ("wasted young") give the loss a soft, mournful music (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-064',
    topic: 'poetry',
    question: '"Belfast Confetti" by Ciaran Carson uses punctuation marks as imagery for what?',
    options: [
      'A peaceful procession',
      'Shrapnel and gunfire from a bomb during the Troubles',
      'Snowflakes',
      'Wedding confetti',
    ],
    correctIndex: 1,
    explanation:
      // VERIFIED: WFU Press / LitCharts — "car-keys" is hyphenated in Carson's text.
      'Question marks, full stops, exclamation marks become flying nails and shrapnel. Carson literalises punctuation as violence: "It was raining exclamation marks, / Nuts, bolts, nails, car-keys". The form falters into broken lines, mirroring the speaker\'s panicked stutter (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-065',
    topic: 'poetry',
    question: 'In "Belfast Confetti", what does the closing question "What is / My name?" suggest?',
    options: [
      'The speaker is meeting a new neighbour',
      'Identity is destabilised by sectarian violence and military checkpoints',
      'The speaker has amnesia after a fall',
      'The speaker is at a wedding',
    ],
    correctIndex: 1,
    explanation:
      'The questions ("Where am I going?…What is / My name?") replicate British soldiers\' interrogation of Belfast residents. Carson shows that violence shatters not only streets but selfhood; line-broken syntax enacts the splintering of language and identity (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-066',
    topic: 'poetry',
    question:
      'Choman Hardi\'s "At the Border, 1979" describes a child crossing back into Kurdistan. What is the central irony?',
    options: [
      'The child is too tall for the gate',
      "The two sides of the border look and feel identical despite the family's celebration",
      'The border guard is a relative',
      'The journey is by aeroplane',
    ],
    correctIndex: 1,
    explanation:
      'The child observes that "the same chain of mountains encompassed all of us"—the soil, mud, weather are identical on both sides. Adult patriotism is gently undermined by the child\'s plain observation; the poem becomes a meditation on how nationhood is constructed (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-067',
    topic: 'poetry',
    question: 'Simon Armitage\'s "The Manhunt" is voiced by which speaker?',
    options: [
      'A wounded soldier himself',
      'The wife of a soldier returned from war and changed by injury',
      'A military doctor',
      'A childhood friend',
    ],
    correctIndex: 1,
    explanation:
      'Laura Beddoes\'s testimony underlies the poem; the wife maps her husband\'s body and trauma "phase" by "phase". Couplet form, often imperfect, embodies a marriage trying to re-knit itself; "porcelain collar-bone" and "broken hinge of his lower jaw" treat the body as fragile object (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-068',
    topic: 'poetry',
    question: 'What is the structural pattern of "The Manhunt"?',
    options: [
      'Continuous prose',
      'A series of two-line stanzas (couplets) of varied rhyme',
      'A villanelle with refrains',
      'A Petrarchan sonnet',
    ],
    correctIndex: 1,
    explanation:
      'The poem unfolds in couplets, many linked by half-rhyme or pararhyme ("frozen river / fractured rudder"). The pairings echo the marital bond while the broken rhymes embody fracture; the gradual movement from "phase by phase" to "blown" reveals sustained, careful intimacy (AO2).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-069',
    topic: 'poetry',
    question:
      'Which Edexcel "Conflict" poem features the line of an older man taunted by youths in a city park?',
    options: [
      '"No Problem" by Benjamin Zephaniah',
      '"What Were They Like?" by Denise Levertov',
      '"The Class Game" by Mary Casey',
      '"Flag" by John Agard',
    ],
    correctIndex: 0,
    explanation:
      'Zephaniah\'s "No Problem" attacks racial stereotyping in late-20th-century Britain in a defiant first-person voice that uses non-standard spelling and Caribbean-British vernacular as identity markers (AO2/AO3).',
    boards: ['edexcel'],
  },
  {
    id: 'poetry-extra-070',
    topic: 'poetry',
    question: 'John Agard\'s "Flag" repeatedly asks what kind of question?',
    options: [
      'Rhetorical questions about a flag\'s power to "unfurl fear" and "outlive the blood you bleed"',
      'Questions about geography',
      "Questions about a child's school day",
      'Questions about cooking',
    ],
    correctIndex: 0,
    explanation:
      'The poem\'s catechism—"What\'s that…?"—invites the reader to recognise that a flag is "just a piece of cloth" yet inspires people to kill and die. Agard\'s tightly patterned tercets and refrain structure expose how nationalism manipulates symbol (AO2/AO3).',
    boards: ['edexcel'],
  },

  // ─── OCR + Eduqas anthologies (15) ────────────────────────────────────────
  {
    id: 'poetry-extra-071',
    topic: 'poetry',
    question: 'In Maya Angelou\'s "Caged Bird", which dominant binary structures the poem?',
    options: [
      'Freedom (free bird) versus oppression (caged bird)',
      'Day versus night',
      'Wealth versus poverty',
      'Past versus future',
    ],
    correctIndex: 0,
    explanation:
      'Angelou alternates stanzas between the free bird and the caged bird, a structural antithesis that embodies racial injustice. The caged bird "sings of freedom" precisely because it has been denied; song becomes resistance (AO2/AO3).',
    boards: ['eduqas'],
  },
  {
    id: 'poetry-extra-072',
    topic: 'poetry',
    // VERIFIED: Poetry Foundation/LitCharts — "Hawk Roosting" is by Ted Hughes alone (no Sheers attribution).
    question: 'Ted Hughes\'s "Hawk Roosting" (Eduqas anthology) is voiced by whom?',
    options: [
      'A naturalist observer',
      'The hawk itself, declaring its own dominance',
      'A child watching the hawk',
      'A farmer planning to kill the hawk',
    ],
    correctIndex: 1,
    explanation:
      'Hughes adopts the hawk\'s first-person perspective: "I sit in the top of the wood, my eyes closed". The dramatic monologue gives the predator chilling self-confidence ("My manners are tearing off heads"), often read as a study of unchecked power (AO2/AO3).',
    boards: ['eduqas'],
  },
  {
    id: 'poetry-extra-073',
    topic: 'poetry',
    question:
      'Which Eduqas anthology poem by Mary Oliver invites the reader to pay attention to wild geese?',
    options: ['"Wild Geese"', '"Death of a Naturalist"', '"To Autumn"', '"The Soldier"'],
    correctIndex: 0,
    explanation:
      'Mary Oliver\'s "Wild Geese" reassures: "You do not have to be good." The poem uses the natural world to absolve the reader, with the geese\'s flight serving as a metaphor for belonging to a wider, forgiving universe (AO2/AO3).',
    boards: ['eduqas'],
  },
  {
    id: 'poetry-extra-074',
    topic: 'poetry',
    question:
      'In Wilfred Owen\'s "Dulce et Decorum Est", to what does the speaker compare the gassed soldier\'s face?',
    options: [
      "A child's sleeping face",
      '"A devil\'s sick of sin"',
      'A marble statue',
      'A pale moon',
    ],
    correctIndex: 1,
    explanation:
      'Owen\'s simile "His hanging face, like a devil\'s sick of sin" makes the soldier\'s suffering monstrous yet pathetic—even devils would be sickened. The image fuels Owen\'s closing attack on the "old Lie" of patriotic glory (AO2/AO3).',
    boards: ['eduqas', 'ocr'],
  },
  {
    id: 'poetry-extra-075',
    topic: 'poetry',
    question: 'Which line opens Wilfred Owen\'s "Dulce et Decorum Est"?',
    options: [
      '"Gas! GAS! Quick, boys!"',
      '"Bent double, like old beggars under sacks"',
      '"In Flanders fields the poppies blow"',
      '"What passing-bells for these who die as cattle?"',
    ],
    correctIndex: 1,
    explanation:
      'The first line, "Bent double, like old beggars under sacks", instantly demolishes patriotic imagery. The simile reduces young soldiers to bent, impoverished figures; vowel-heavy spondees slow the line to a trudge that mirrors exhaustion (AO2).',
    boards: ['eduqas', 'ocr'],
  },
  {
    id: 'poetry-extra-076',
    topic: 'poetry',
    question: 'Carol Ann Duffy\'s "Mrs Tilscher\'s Class" (Eduqas) charts what change?',
    options: [
      'A school year ending in ordinary boredom',
      "A child's loss of innocence as primary school ends and adolescence begins",
      "A teacher's retirement party",
      'A school move to a new building',
    ],
    correctIndex: 1,
    explanation:
      'The poem moves from cosy classroom rituals ("Brady and Hindley faded, like the faint, uneasy smudge of a mistake") to a "rough boy" who tells the speaker how she was born. The seasonal arc to "thunderstorm" enacts puberty and exile from childhood (AO2/AO3).',
    boards: ['eduqas'],
  },
  {
    id: 'poetry-extra-077',
    topic: 'poetry',
    question: 'In Heaney\'s "Death of a Naturalist", what shifts halfway through the poem?',
    options: [
      "The speaker's tone moves from childlike fascination to revulsion at the frogspawn",
      'The setting changes to America',
      'The speaker becomes a soldier',
      'A teacher enters the scene',
    ],
    correctIndex: 0,
    explanation:
      'The early stanza\'s tactile pleasure ("warm thick slobber / Of frogspawn") gives way to "angry frogs" with "blunt heads". Heaney enacts the volta of growing up: nature stops being a friendly classroom and becomes threatening, embodying lost innocence (AO2).',
    boards: ['eduqas', 'ocr'],
  },
  {
    id: 'poetry-extra-078',
    topic: 'poetry',
    question: 'Christina Rossetti\'s "Cousin Kate" is voiced by whom?',
    options: [
      'The lord who seduces the speaker',
      'A "cottage maiden" who has been seduced and abandoned',
      'Cousin Kate herself',
      "The lord's mother",
    ],
    correctIndex: 1,
    explanation:
      'The "cottage maiden" addresses Cousin Kate, who married the lord that ruined the speaker. Ballad-like quatrains and direct address dramatise Victorian double standards: the speaker has a child but no respectability ("my fair-haired son, my shame, my pride"), AO2/AO3.',
    boards: ['ocr', 'eduqas'],
  },
  {
    id: 'poetry-extra-079',
    topic: 'poetry',
    question: 'In Owen\'s "Anthem for Doomed Youth", what religious imagery is subverted?',
    options: [
      'A wedding ceremony',
      'The funeral rites a Christian soldier might expect',
      'A baptism',
      'A harvest festival',
    ],
    correctIndex: 1,
    explanation:
      'Owen replaces "passing-bells", "orisons" and "candles" with "the monstrous anger of the guns" and "shrill, demented choirs of wailing shells". The sonnet form ironically dignifies what proper rites cannot, while the volta turns inward to bereaved homes (AO2/AO3).',
    boards: ['ocr', 'eduqas'],
  },
  {
    id: 'poetry-extra-080',
    topic: 'poetry',
    question:
      'Which OCR/Eduqas anthology poem by Rupert Brooke begins "If I should die, think only this of me"?',
    options: ['"The Soldier"', '"Futility"', '"MCMXIV"', '"Disabled"'],
    correctIndex: 0,
    explanation:
      '"The Soldier" (1914) frames death in war as a patriotic gift: any "corner of a foreign field…is for ever England". The Petrarchan sonnet form lends the speaker\'s idealism dignity—Brooke\'s position is often contrasted with Owen\'s critique (AO2/AO3).',
    boards: ['ocr', 'eduqas'],
  },
  {
    id: 'poetry-extra-081',
    topic: 'poetry',
    question: 'Hopkins\'s "The Windhover" praises a kestrel using which characteristic technique?',
    options: [
      'Sprung rhythm and dense alliteration',
      'Free verse with no rhyme',
      'Strict iambic pentameter only',
      "A villanelle's refrains",
    ],
    correctIndex: 0,
    explanation:
      "Hopkins's sprung rhythm packs stresses tightly (\"dapple-dawn-drawn Falcon, in his riding\"), while alliterative chains imitate the bird's plunging flight. The poem's sonnet form bursts at the seams; nature points beyond itself toward Christ (AO3).",
    boards: ['ocr'],
  },
  {
    id: 'poetry-extra-082',
    topic: 'poetry',
    question: 'Robert Frost\'s "Out, Out—" tells the story of which event?',
    options: [
      'A boy losing his hand in a buzz-saw accident on a New England farm, and then dying',
      'A soldier returning home from war',
      'A lost dog finding its way back',
      'A wedding interrupted by snow',
    ],
    correctIndex: 0,
    explanation:
      'The blank-verse narrative title alludes to Macbeth ("Out, out, brief candle!"). The boy\'s death is reported with brutal economy: "And then—the watcher at his pulse took fright. / No one believed". The poem\'s flat, witnessing tone amplifies horror (AO2/AO3).',
    boards: ['ocr', 'eduqas'],
  },
  {
    id: 'poetry-extra-083',
    topic: 'poetry',
    question: 'In Edward Thomas\'s "Adlestrop", why is the train\'s stop significant?',
    options: [
      'It marks an outbreak of war',
      'It is "unwontedly" — an ordinary halt that becomes a transcendent moment of stillness',
      'It marks a derailment',
      'A famous person boards the train',
    ],
    correctIndex: 1,
    explanation:
      'Thomas memorialises a brief stop in June 1914—blackbird song, "willow-herb, and grass", the empty platform—just before world war shattered such peace. The poem\'s significance comes from its quietness; deceptively simple form preserves a vanished pastoral (AO2/AO3).',
    boards: ['ocr', 'eduqas'],
  },
  {
    id: 'poetry-extra-084',
    topic: 'poetry',
    question: 'In Carol Ann Duffy\'s "Anne Hathaway" (Eduqas), what is the controlling conceit?',
    options: [
      'The "second best bed" Shakespeare bequeathed his wife is reframed as the marital bed of love',
      "A lost play of Shakespeare's",
      'A globe-shaped jewellery box',
      'A stage curtain',
    ],
    correctIndex: 0,
    explanation:
      'Hathaway recasts the famously slighting bequest as the bed of "passion and rhyme". Duffy gives Anne a sonnet (14 lines, final couplet) so the wife speaks in her husband\'s own form, claiming literary and romantic equality (AO2/AO3).',
    boards: ['eduqas'],
  },
  {
    id: 'poetry-extra-085',
    topic: 'poetry',
    question: 'What is the rhyme scheme of "Anne Hathaway" by Carol Ann Duffy?',
    options: [
      'Free verse',
      'A Shakespearean sonnet rhyme scheme (ABAB CDCD EFEF GG)',
      'A Petrarchan sonnet (ABBAABBA CDECDE)',
      'A villanelle',
    ],
    correctIndex: 1,
    explanation:
      "Duffy uses Shakespeare's own sonnet form to give Anne the last word. The closing couplet—\"I hold him in the casket of my widow's head / as he held me upon that next best bed\"—seals the lovers' equality with the form's most marital convention (AO2).",
    boards: ['eduqas'],
  },

  // ─── Unseen poetry technique (15) ────────────────────────────────────────
  {
    id: 'poetry-extra-086',
    topic: 'poetry',
    question: 'Which definition best describes anaphora?',
    options: [
      'A pause in the middle of a line',
      'Repetition of a word or phrase at the start of successive lines or clauses',
      'A sudden turn or shift in argument',
      'Two contradictory ideas placed side by side',
    ],
    correctIndex: 1,
    explanation:
      'Anaphora ("Mad world! Mad kings! Mad composition!" — Shakespeare, King John) creates rhythm, urgency or emphasis. In unseen analysis, identify where the repetition falls and explain the cumulative emotional or rhetorical effect (AO2).',
  },
  {
    id: 'poetry-extra-087',
    topic: 'poetry',
    question: 'A volta most precisely refers to which feature of a sonnet?',
    options: [
      'The opening line',
      'The closing word',
      'A turn or shift in argument, tone, or perspective, often at line 9 (Petrarchan) or line 13 (Shakespearean)',
      'A repeated refrain',
    ],
    correctIndex: 2,
    explanation:
      "The volta is the structural turn that distinguishes the sonnet's two halves. In a Petrarchan sonnet it usually arrives between octave and sestet; in a Shakespearean sonnet often before the final couplet. Identifying the volta is essential AO2 work (AO1/AO2).",
  },
  {
    id: 'poetry-extra-088',
    topic: 'poetry',
    question: 'A caesura is best identified by:',
    options: [
      'A dash, comma, semicolon, full stop or other strong pause within a line',
      'A run-on sentence with no punctuation',
      'A rhyming couplet at the end of a stanza',
      'The repetition of a vowel sound',
    ],
    correctIndex: 0,
    explanation:
      'Caesurae interrupt metrical flow, often dramatising thought, breath or violence (e.g. Hughes\'s "King, honour, human dignity, etcetera / Dropped like luxuries"). When commenting in unseens, name the caesura, locate it, and explain the effect on pace and meaning (AO2).',
  },
  {
    id: 'poetry-extra-089',
    topic: 'poetry',
    question: 'Enjambment occurs when:',
    options: [
      'A line ends with strong punctuation',
      'A grammatical unit runs over the line break without pause',
      'Two lines rhyme',
      'A line is unusually short',
    ],
    correctIndex: 1,
    explanation:
      'Enjambment can suggest spilling emotion, momentum, the reach of thought, or the destabilising of order. Always pair the term with effect: e.g. "the enjambment from \'broken / flag\' enacts the rupture it describes" (AO2).',
  },
  {
    id: 'poetry-extra-090',
    topic: 'poetry',
    question: 'Sibilance is best defined as:',
    options: [
      'Repetition of "s", "sh", "z" and similar sounds',
      'Repetition of hard plosive sounds like "p" and "b"',
      'Repetition of vowel sounds within words',
      'Words that imitate sounds',
    ],
    correctIndex: 0,
    explanation:
      'Sibilance can suggest whispering, hissing, soothing softness or threat. Effect depends on context: Duffy\'s "spools of suffering" mournfully whispers, while a snake\'s sibilants menace. Always weigh tone before attaching meaning (AO2).',
  },
  {
    id: 'poetry-extra-091',
    topic: 'poetry',
    question: 'A dramatic monologue is characterised by which features?',
    options: [
      'A choric "we" that speaks for many',
      'A single speaker, distinct from the poet, addressing a silent listener and revealing self through speech',
      'Two speakers in alternating dialogue',
      'A first-person diary entry never spoken aloud',
    ],
    correctIndex: 1,
    explanation:
      'Browning is the classic exemplar ("My Last Duchess", "Porphyria\'s Lover"). The speaker often incriminates themselves; the silent auditor implicates the reader. Form dramatises power, voice and unreliable narration (AO2/AO3).',
  },
  {
    id: 'poetry-extra-092',
    topic: 'poetry',
    question: 'Iambic pentameter consists of:',
    options: [
      'Five stressed syllables per line',
      'Five iambs (unstressed–stressed feet) giving ten syllables per line',
      'Five lines per stanza',
      'Four iambs and a final spondee',
    ],
    correctIndex: 1,
    explanation:
      "The iamb (da-DUM) approximates natural English speech. Five feet creates a flexible, civilised rhythm—Shakespeare's, Wordsworth's and Browning's default. Departures from it (substitutions, missing syllables) often carry meaning and should be flagged in analysis (AO2).",
  },
  {
    id: 'poetry-extra-093',
    topic: 'poetry',
    question: 'A Petrarchan sonnet is structurally divided into:',
    options: [
      'Three quatrains and a couplet',
      'An octave (8 lines) and a sestet (6 lines), with the volta typically at line 9',
      'Two tercets and an octave',
      'Four tercets and a couplet',
    ],
    correctIndex: 1,
    explanation:
      "Petrarchan sonnets present a problem in the octave (ABBAABBA) and a response in the sestet (often CDECDE or CDCDCD). The volta's placement contrasts with the Shakespearean sonnet's late turn before the couplet (AO2).",
  },
  {
    id: 'poetry-extra-094',
    topic: 'poetry',
    question: 'Pathetic fallacy is best illustrated by which example?',
    options: [
      'A storm raging as a character feels rage',
      'A list of three adjectives',
      'A pause halfway through a line',
      'A first-person speaker addressing the reader',
    ],
    correctIndex: 0,
    explanation:
      'Pathetic fallacy attributes human feeling to nature or weather to mirror character emotion. Hardy\'s "Neutral Tones" (white sun, grey leaves) is a classic instance; the term is more specific than "personification" and especially useful in unseen analysis (AO2).',
  },
  {
    id: 'poetry-extra-095',
    topic: 'poetry',
    question:
      'A poem that uses the rhyme scheme ABA ABA ABA ABA ABAA, with two refrains weaving through 19 lines, is most likely a:',
    options: ['Sonnet', 'Villanelle', 'Sestina', 'Ballad'],
    correctIndex: 1,
    explanation:
      'A villanelle has 19 lines arranged in five tercets and a quatrain, with two refrains alternating and combining at the close (e.g. Dylan Thomas\'s "Do Not Go Gentle into That Good Night"). The form\'s circular repetition often dramatises obsession or grief (AO2).',
  },
  {
    id: 'poetry-extra-096',
    topic: 'poetry',
    question: 'Free verse is best described as:',
    options: [
      'Verse with no metrical or rhyme constraints, but still using rhythm and form deliberately',
      'Prose written in a single block',
      'Verse that always rhymes ABAB',
      'Verse with strict iambic pentameter',
    ],
    correctIndex: 0,
    explanation:
      'Free verse abandons regular metre and rhyme, yet skilled poets shape rhythm through line breaks, caesurae, repetition and sound. Saying a poem is "in free verse" is only the start—you must comment on what the freedom is being used to achieve (AO2).',
  },
  {
    id: 'poetry-extra-097',
    topic: 'poetry',
    question: 'A blank verse line is:',
    options: [
      'A line with no words',
      'Unrhymed iambic pentameter',
      'A rhymed couplet',
      'A line in trochaic tetrameter',
    ],
    correctIndex: 1,
    explanation:
      "Blank verse (Shakespeare's soliloquies, Milton's Paradise Lost, Wordsworth's Prelude) gives speech the dignity of metre without the chime of rhyme. Watch for metrical substitutions (trochees, spondees) that signal emotional emphasis (AO2).",
  },
  {
    id: 'poetry-extra-098',
    topic: 'poetry',
    question: 'An extended metaphor is:',
    options: [
      'A single brief metaphor',
      'A metaphor sustained and developed across multiple lines or the whole poem',
      'A simile using "like" or "as"',
      'A pun on two meanings of a word',
    ],
    correctIndex: 1,
    explanation:
      'Examples include Dharker\'s "Tissue" (paper as life), Duffy\'s "Valentine" (onion as love), Armitage\'s "Mother, any distance" (tape measure as bond). In analysis, trace how the metaphor evolves and where it strains—those moments often carry the poem\'s argument (AO2).',
  },
  {
    id: 'poetry-extra-099',
    topic: 'poetry',
    question: 'Pararhyme (half-rhyme) differs from full rhyme because:',
    options: [
      'It rhymes only the first letter of each word',
      'It matches consonants but not vowel sounds (e.g. "knive us / nervous", "groined / groaned")',
      'It is always perfect',
      'It only occurs in sonnets',
    ],
    correctIndex: 1,
    explanation:
      'Wilfred Owen pioneered pararhyme in "Strange Meeting" and "Exposure". The unsettled near-rhyme refuses the satisfying chime of full rhyme, embodying disorientation, dissonance, or the ungraspable horror of war (AO2).',
  },
  {
    id: 'poetry-extra-100',
    topic: 'poetry',
    question:
      'When analysing an unseen poem, which comparison best demonstrates AO2 (analysis of language, form, structure)?',
    options: [
      '"The poem is sad because the speaker uses sad words"',
      "\"The enjambment between 'broken' and 'flag' visually enacts the rupture it describes, slowing the reader and forcing focus onto 'flag' as a symbol of national failure\"",
      '"The poet probably meant the reader to feel something"',
      '"The poem rhymes a lot"',
    ],
    correctIndex: 1,
    explanation:
      'Strong AO2 names a precise feature, locates it in the poem, and explains its effect on meaning. The model answer pairs term ("enjambment"), evidence ("\'broken / flag\'"), and analytical effect (rupture, focus, symbol). Always do all three for top-band marks.',
  },
]
