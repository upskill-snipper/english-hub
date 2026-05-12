// Extra Speed Analysis prompts — short-quote close-reading drills.
// Each quote is verbatim from the canonical source text and kept to 15 words
// or fewer for fair-dealing under UK copyright law (CDPA 1988).
// Model answers target a Grade 9 standard, weaving AO1 (informed response),
// AO2 (language/structure/methods) and AO3 (context).

export interface SpeedAnalysisPromptExtra {
  id: string
  quote: string
  text: string
  character: string
  context: string
  expectedFeatures: string[]
  expectedMethods: string[]
  modelAnswer: string
  time: number
}

export const speedAnalysisPromptsExtra: SpeedAnalysisPromptExtra[] = [
  // ── Macbeth (12) ───────────────────────────────────────────────────────────
  {
    id: 'sa-extra-mac-01',
    quote: 'Out, damned spot! out, I say!',
    text: 'Macbeth',
    character: 'Lady Macbeth',
    context: "Act 5, Scene 1 — sleepwalking, hallucinating Duncan's blood on her hands.",
    expectedFeatures: [
      'imperative verb signalling lost control',
      'exclamatory syntax mirroring frenzied guilt',
      'adjective "damned" with infernal/Christian connotations',
      'monosyllabic urgency',
    ],
    expectedMethods: ['imperative', 'exclamation', 'monosyllabic stress'],
    modelAnswer:
      'Lady Macbeth\'s frantic imperative "Out" tries to command the bloodstain as she once commanded Macbeth, yet the repetition exposes her impotence: regicide cannot be scrubbed away. The adjective "damned" is double-edged, cursing the spot while damning her own soul, evoking Jacobean fears of hellfire that would haunt a 1606 audience under King James, a divinely appointed monarch. The clipped monosyllables and exclamatory rhythm fracture her earlier composed blank verse, dramatising psychological collapse.',
    time: 90,
  },
  {
    id: 'sa-extra-mac-02',
    quote: 'Fair is foul, and foul is fair.',
    text: 'Macbeth',
    character: 'The Witches',
    context: 'Act 1, Scene 1 — chanted in unison on the heath, opening the play.',
    expectedFeatures: [
      'paradox inverting moral order',
      'chiasmus mirroring disorder',
      'trochaic tetrameter — witches\' "spell" rhythm',
      'establishes equivocation motif',
    ],
    expectedMethods: ['paradox', 'chiasmus', 'trochaic metre'],
    modelAnswer:
      'The chiastic paradox collapses the binary of good and evil, prefiguring a play in which a "noble" thane becomes a tyrant. Trochaic tetrameter — falling stress, opposite of iambic blank verse — sonically marks the Witches as outside natural order, a deliberate jolt for a Jacobean audience hyper-alert to witchcraft after James I\'s "Daemonologie". The line seeds the equivocation motif Macbeth will fall to, fusing language with a theology of moral inversion that destabilises the kingdom.',
    time: 90,
  },
  {
    id: 'sa-extra-mac-03',
    quote: 'Is this a dagger which I see before me?',
    text: 'Macbeth',
    character: 'Macbeth',
    context: 'Act 2, Scene 1 — soliloquy moments before murdering Duncan.',
    expectedFeatures: [
      'rhetorical question dramatising doubt',
      'hallucinatory imagery',
      'soliloquy granting audience interiority',
      'iambic pentameter destabilised',
    ],
    expectedMethods: ['rhetorical question', 'soliloquy', 'visual imagery'],
    modelAnswer:
      'The rhetorical question stages Macbeth\'s fracturing psyche: he cannot trust his own senses on the threshold of regicide. Soliloquy form makes the audience complicit, witnessing private temptation usually reserved for prayer. The hallucinated dagger externalises ambition as supernatural prompt, blurring whether evil is summoned or innate — a question central to Jacobean providential theology. The hesitant iambic line lurches into questioning rhythm, mirroring a man already losing the metrical "order" Duncan represents.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-04',
    quote: 'Out, out, brief candle!',
    text: 'Macbeth',
    character: 'Macbeth',
    context: "Act 5, Scene 5 — on hearing of Lady Macbeth's death.",
    expectedFeatures: [
      'metaphor of life as candle',
      'apostrophe addressing life',
      'imperative "Out" echoing Lady Macbeth',
      'monosyllabic exhaustion',
    ],
    expectedMethods: ['metaphor', 'apostrophe', 'imperative'],
    modelAnswer:
      'The candle metaphor reduces human life to fragile, expendable wax — an emblem of memento mori that Renaissance audiences would know from religious iconography. The imperative "Out" grimly echoes Lady Macbeth\'s sleepwalking cry, binding the couple in nihilism. Apostrophe permits Macbeth to dismiss life itself, while the spondaic stresses on "brief candle" make the line drag like a dying flame. By Act 5 his blank verse has shrunk into clipped monosyllables, structurally mirroring his diminished moral universe.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-05',
    quote: "Look like the innocent flower, but be the serpent under't.",
    text: 'Macbeth',
    character: 'Lady Macbeth',
    context: "Act 1, Scene 5 — instructing Macbeth before Duncan's arrival.",
    expectedFeatures: [
      'antithesis flower vs serpent',
      'biblical allusion to Eden',
      'imperative voice — she dominates',
      'duplicity as theme',
    ],
    expectedMethods: ['antithesis', 'biblical allusion', 'imperative'],
    modelAnswer:
      'Lady Macbeth\'s antithesis between "flower" and "serpent" weaponises Edenic imagery: the serpent recalls Genesis 3, casting her as a tempter and Macbeth as a fallen Adam. Her chain of imperatives inverts gender hierarchy in 1606 Scotland, where wifely obedience was scriptural. The botanical surface concealing reptilian threat dramatises the play\'s equivocation motif, training Macbeth in the very duplicity the Witches embody. The line is an instruction in performative villainy.',
    time: 90,
  },
  {
    id: 'sa-extra-mac-06',
    quote: 'Hover through the fog and filthy air.',
    text: 'Macbeth',
    character: 'The Witches',
    context: 'Act 1, Scene 1 — closing line of the opening scene.',
    expectedFeatures: [
      'pathetic fallacy / atmospheric foreshadowing',
      'fricative alliteration "fog"/"filthy"',
      'verb "hover" denying earthly gravity',
      'sets motif of obscured vision',
    ],
    expectedMethods: ['pathetic fallacy', 'alliteration', 'sibilant fricatives'],
    modelAnswer:
      'The fricative alliteration of "fog" and "filthy" hisses with corruption, infecting the play\'s opening atmosphere before any human enters. "Hover" suspends the witches between worlds, refusing the natural order on which Jacobean kingship depended. Pathetic fallacy of the murky air foreshadows the moral fog Macbeth will wander in, where "fair is foul". For James I, who survived the 1605 Gunpowder Plot, occult disturbances of air and weather were not theatrical decoration but theological menace.',
    time: 90,
  },
  {
    id: 'sa-extra-mac-07',
    quote: 'Unsex me here.',
    text: 'Macbeth',
    character: 'Lady Macbeth',
    context: "Act 1, Scene 5 — invocation to spirits before Duncan's murder.",
    expectedFeatures: [
      'neologism / verbal coinage',
      'imperative addressing supernatural',
      'rejection of Jacobean femininity',
      'self-erasure of maternal identity',
    ],
    expectedMethods: ['neologism', 'imperative', 'invocation'],
    modelAnswer:
      'Shakespeare\'s coinage "unsex" is shockingly transgressive: prefix "un-" performs the very stripping the verb requests, dramatising Lady Macbeth\'s renunciation of the gentle, maternal femininity prescribed by Jacobean conduct manuals. The imperative directed at "spirits" courts demonic possession — a serious charge in 1606 — aligning her with the Witches. By collapsing her gendered identity, she also collapses the natural hierarchy underwriting divine kingship, making regicide thinkable. The line is a self-curse.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-08',
    quote: 'Hell is murky.',
    text: 'Macbeth',
    character: 'Lady Macbeth',
    context: 'Act 5, Scene 1 — sleepwalking scene.',
    expectedFeatures: [
      'monosyllabic prose — collapse from earlier verse',
      'present-tense certainty',
      'theological revelation of damnation',
      'plain register denoting psychological breakdown',
    ],
    expectedMethods: ['monosyllabic prose', 'declarative', 'understatement'],
    modelAnswer:
      'Three monosyllables in flat prose: Lady Macbeth, who once commanded soaring blank verse, now speaks in the sparse register of nightmare. The bald declarative makes Hell unanswerable — she does not speculate but reports, as if she has glimpsed it. For a Jacobean audience steeped in Calvinist ideas of predestination, this is theological catastrophe: she is already damned. The understatement of "murky" makes Hell more frightening than Marlowe\'s flames; it is fog, exactly the moral atmosphere the Witches conjured.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-09',
    quote: 'A little water clears us of this deed.',
    text: 'Macbeth',
    character: 'Lady Macbeth',
    context: "Act 2, Scene 2 — immediately after Duncan's murder.",
    expectedFeatures: [
      'dramatic irony — water cannot cleanse',
      'diminutive "little" trivialises regicide',
      'noun "deed" as evasive euphemism',
      'foreshadows sleepwalking guilt',
    ],
    expectedMethods: ['dramatic irony', 'euphemism', 'diminutive'],
    modelAnswer:
      'The euphemism "deed" sanitises regicide — already Lady Macbeth cannot name what she has done. The diminutive "a little water" sounds sacramental, ironically inverting baptism: she trusts ritual cleansing she will later find impossible. Dramatic irony bristles, for the audience knows she will return to this scene mad with washing. Theologically, in a Jacobean cosmos where the king\'s body is divinely consecrated, no domestic water can absolve regicide; only divine grace can — grace she will not seek.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-10',
    quote: 'Lay on, Macduff, and damned be him that first cries "Hold, enough!"',
    text: 'Macbeth',
    character: 'Macbeth',
    context: 'Act 5, Scene 8 — final duel with Macduff.',
    expectedFeatures: [
      'imperative challenging Macduff',
      'embedded curse "damned be him"',
      'restoration of warrior code',
      'iambic pentameter regained at death',
    ],
    expectedMethods: ['imperative', 'embedded direct speech', 'iambic pentameter'],
    modelAnswer:
      'Macbeth dies as he began — a soldier — recovering the iambic pentameter that fragmented in earlier acts. The imperative "Lay on" reclaims agency from the prophecies that have manipulated him, while the embedded curse "damned be him" knowingly accepts damnation he has long earned. For a Jacobean audience, this is a paradoxical moment: tyrannical hubris meeting flickers of admirable martial code, complicating any neat moral. The pentameter\'s restoration suggests order returning even as Macbeth himself is extinguished.',
    time: 110,
  },
  {
    id: 'sa-extra-mac-11',
    quote: "Will all great Neptune's ocean wash this blood clean from my hand?",
    text: 'Macbeth',
    character: 'Macbeth',
    context: 'Act 2, Scene 2 — after murdering Duncan, staring at his hands.',
    expectedFeatures: [
      'classical allusion to Neptune',
      'rhetorical question expressing despair',
      'hyperbole — entire ocean cannot cleanse',
      'inverted by Lady Macbeth\'s "little water"',
    ],
    expectedMethods: ['classical allusion', 'rhetorical question', 'hyperbole'],
    modelAnswer:
      'The classical allusion to Neptune scales the guilt to mythic proportions — even a god\'s ocean is insufficient. The rhetorical question expects the appalling answer "no", staging Macbeth\'s instantaneous theological knowledge that regicide is irreversible. Hyperbole contrasts pointedly with Lady Macbeth\'s domestic "a little water", dramatising the gulf between their consciences in this scene. For James I, who saw kingship as divinely sanctioned, the line ratifies orthodoxy: the king\'s blood cannot be washed away because it is sacred.',
    time: 100,
  },
  {
    id: 'sa-extra-mac-12',
    quote: 'Tomorrow, and tomorrow, and tomorrow.',
    text: 'Macbeth',
    character: 'Macbeth',
    context: "Act 5, Scene 5 — soliloquy on hearing of his wife's death.",
    expectedFeatures: [
      'anaphoric repetition flattening time',
      'polysyndeton dragging rhythm',
      'nihilistic tone',
      'metrical exhaustion',
    ],
    expectedMethods: ['anaphora', 'polysyndeton', 'repetition'],
    modelAnswer:
      'The anaphoric "tomorrow" enacts the meaningless treadmill it describes, polysyndeton extending time into a flat horizon devoid of progress. Macbeth\'s ambition once strained towards a future; here the future has collapsed into mere succession. The line\'s flat trochaic drone refuses the rising iambic hope of his earlier verse. Theologically, it borders on heresy — a Jacobean Christian should see time leading to judgement and salvation; Macbeth sees only an empty stage, and shortly speaks of life as a "tale told by an idiot".',
    time: 110,
  },

  // ── An Inspector Calls (10) ────────────────────────────────────────────────
  {
    id: 'sa-extra-aic-01',
    quote: 'We are responsible for each other.',
    text: 'An Inspector Calls',
    character: 'Inspector Goole',
    context: 'Act 3 — final speech before exit, addressing the Birlings.',
    expectedFeatures: [
      'collective pronoun "we"',
      'declarative certainty',
      'modal-like absolute "are"',
      'didactic socialist thesis',
    ],
    expectedMethods: ['inclusive pronoun', 'declarative', 'didactic register'],
    modelAnswer:
      'The inclusive "we" forcibly enrols the Birlings — and Priestley\'s 1945 audience — in collective ethics, dissolving Birling\'s "every man for himself". The declarative refuses debate; the verb "are" presents responsibility not as suggestion but ontological fact. Written immediately post-war, the line is Priestley\'s socialist manifesto, urging the audience towards the Welfare State then being legislated. The Inspector functions as moral chorus, his didactic register elevating ordinary speech to almost biblical commandment, recasting Christian "love thy neighbour" in collectivist terms.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-02',
    quote: 'The Titanic — unsinkable, absolutely unsinkable.',
    text: 'An Inspector Calls',
    character: 'Mr Birling',
    context: 'Act 1 — pre-dinner speech, set in 1912.',
    expectedFeatures: [
      'dramatic irony — audience knows Titanic sank',
      'intensifier "absolutely"',
      'caesura around dash for emphasis',
      'symbolic of capitalist hubris',
    ],
    expectedMethods: ['dramatic irony', 'intensifier', 'caesura'],
    modelAnswer:
      'Priestley weaponises dramatic irony: a 1945 audience knows the Titanic sank within weeks of the play\'s 1912 setting, instantly discrediting Birling\'s economic confidence. The intensifier "absolutely" and the caesura before the second "unsinkable" theatrically inflate his certainty so that its collapse will be greater. Symbolically, the ship represents Edwardian capitalism\'s belief in its own indestructibility; Priestley uses Birling\'s misjudgement to invite the post-war audience to mistrust capitalist confidence and embrace collective social planning instead.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-03',
    quote: 'A man has to make his own way.',
    text: 'An Inspector Calls',
    character: 'Mr Birling',
    context: 'Act 1 — lecturing Eric and Gerald before the Inspector arrives.',
    expectedFeatures: [
      'modal "has to" — pseudo-necessity',
      'gendered noun "man" excluding others',
      'individualist capitalist creed',
      'positioned for ironic dismantling',
    ],
    expectedMethods: ['modal verb', 'gendered noun', 'declarative'],
    modelAnswer:
      'Birling\'s modal "has to" disguises ideology as natural law — capitalist self-reliance becomes inevitability rather than choice. The gendered "man" exposes the patriarchal exclusivity of his world: women like Eva exist outside the moral economy. Priestley deliberately stages this creed at the play\'s outset so the Inspector can systematically dismantle it. For a 1945 audience considering Beveridge\'s welfare proposals, Birling sounds like a fossil; his confident declarative is ironised by the very next stage direction — the doorbell.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-04',
    quote: "But these girls aren't cheap labour — they're people.",
    text: 'An Inspector Calls',
    character: 'Sheila Birling',
    context: "Act 1 — challenging her father's account of sacking Eva.",
    expectedFeatures: [
      'antithesis "labour"/"people"',
      'contraction "aren\'t" softens but accuses',
      'plural "girls" gestures to wider class',
      "Sheila's political awakening",
    ],
    expectedMethods: ['antithesis', 'plural noun', 'declarative'],
    modelAnswer:
      'Sheila\'s antithesis between "cheap labour" and "people" performs an ethical reclassification, refusing her father\'s reduction of workers to economic units. The plural "girls" generalises the moment beyond Eva, gesturing to a class of women being exploited — exactly Priestley\'s dramatic point. The contraction "aren\'t" keeps the line conversational, marking Sheila as the play\'s most plausible socialist convert: a member of the bourgeoisie whose conscience can still be reached. For the 1945 audience, she models the moral journey Priestley wants them to undertake.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-05',
    quote: 'Girls of that class.',
    text: 'An Inspector Calls',
    character: 'Mrs Birling',
    context: 'Act 2 — defending her decision to refuse Eva charity.',
    expectedFeatures: [
      'dismissive demonstrative "that"',
      'plural noun depersonalising Eva',
      'noun "class" foregrounding hierarchy',
      'caesural finality of full stop',
    ],
    expectedMethods: ['demonstrative pronoun', 'depersonalisation', 'caesura'],
    modelAnswer:
      'The demonstrative "that" performs social distance, holding Eva\'s class at arm\'s length as if it were contagious. The plural "girls" erases Eva\'s individuality entirely — Mrs Birling cannot see a person, only a category. The blunt full stop offers no qualification or pity; it is the syntax of prejudice. Priestley designed Mrs Birling as the play\'s least redeemable adult precisely because she will not learn; for a 1945 audience leaving years of war-time collectivism, her snobbery is exactly what must be left behind.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-06',
    quote: "It's better to ask for the earth than to take it.",
    text: 'An Inspector Calls',
    character: 'Inspector Goole',
    context: 'Act 2 — to Gerald and the family during cross-examination.',
    expectedFeatures: [
      'comparative "better"',
      'symbol of the "earth" — entitlement',
      'parallel infinitives "to ask"/"to take"',
      'morally instructive register',
    ],
    expectedMethods: ['comparative', 'parallelism', 'symbolism'],
    modelAnswer:
      'Parallel infinitives "to ask" and "to take" mirror two postures towards the world — humility versus possession. The biblical scale of "the earth" inflates ordinary entitlement into cosmic greed, casting capitalist appropriation as a sin against creation. The comparative "better" makes the Inspector\'s ethics provisional and reasonable, not utopian. For a 1945 audience contemplating a more equal post-war Britain, the line frames asking — collective negotiation, the language of unions and welfare — as morally superior to the unilateral seizure that defines Birling capitalism.',
    time: 100,
  },
  {
    id: 'sa-extra-aic-07',
    quote: "I can't accept any responsibility.",
    text: 'An Inspector Calls',
    character: 'Mr Birling',
    context: "Act 1 — initial reaction to the Inspector's questions.",
    expectedFeatures: [
      'modal "can\'t" — impotence performed as principle',
      'absolute determiner "any"',
      "antithesis with Inspector's closing speech",
      'capitalist denial of consequence',
    ],
    expectedMethods: ['modal verb', 'absolute determiner', 'declarative'],
    modelAnswer:
      'Birling\'s modal "can\'t" parades incapacity as principle — he claims responsibility is impossible rather than refused. The absolute "any" forecloses even partial guilt, mirroring his earlier dismissal of community. Priestley engineers a direct verbal antithesis with the Inspector\'s "we are responsible for each other", making the play\'s moral argument as syntactic as it is thematic. For a 1945 audience, Birling\'s denial sounds like the inter-war complacency that bred two world wars; Priestley wants them to hear it as historically discredited.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-08',
    quote: 'I felt rotten about it at the time and now I feel a lot worse.',
    text: 'An Inspector Calls',
    character: 'Sheila Birling',
    context: "Act 1 — confessing her role in Eva's dismissal from Milwards.",
    expectedFeatures: [
      'colloquial register "rotten" — sincere',
      'time markers contrast then/now',
      'comparative intensification',
      'evidence of moral growth',
    ],
    expectedMethods: ['colloquialism', 'temporal contrast', 'comparative'],
    modelAnswer:
      'The colloquial "rotten" gives Sheila\'s remorse an unforced authenticity her parents never achieve. The temporal contrast — "at the time" / "now" — dramatises an evolving conscience rather than a fixed position, and the comparative "a lot worse" intensifies guilt rather than diluting it. Priestley uses Sheila to model what an ethical 1945 citizen should look like: capable of revising their own behaviour in light of new evidence. Her growth is the structural counterweight to her parents\' refusal to learn.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-09',
    quote: "We don't live alone.",
    text: 'An Inspector Calls',
    character: 'Inspector Goole',
    context: 'Act 3 — final speech, reinforcing collective responsibility.',
    expectedFeatures: [
      'inclusive plural "we"',
      'negation of solipsism',
      'simple monosyllabic register',
      'echoes Donne\'s "no man is an island"',
    ],
    expectedMethods: ['inclusive pronoun', 'negation', 'allusion'],
    modelAnswer:
      'The inclusive "we" again binds audience and Birlings into a single moral community, while the negation "don\'t" dismantles Birling\'s individualist creed. The bare monosyllables mimic scripture or proverb, allowing the line to feel timeless rather than partisan. There is a clear allusion to Donne\'s "No man is an island", drawing on a four-century tradition of Christian collectivism to legitimise Priestley\'s socialist message. In 1945, with the war-time spirit of mutual sacrifice fresh, the audience is primed to receive this as common sense.',
    time: 90,
  },
  {
    id: 'sa-extra-aic-10',
    quote: 'There are millions and millions and millions of Eva Smiths.',
    text: 'An Inspector Calls',
    character: 'Inspector Goole',
    context: 'Act 3 — final speech, expanding Eva to a class of women.',
    expectedFeatures: [
      'tricolon repetition of "millions"',
      'generic noun phrase "Eva Smiths"',
      'pluralising of an individual',
      'rhetoric of scale',
    ],
    expectedMethods: ['tricolon', 'repetition', 'generic plural'],
    modelAnswer:
      'The tricolon "millions and millions and millions" performs the scale it describes, the polysyndeton extending the line until the audience hears the size of suffering. Pluralising "Eva Smiths" abolishes Eva\'s singularity and instead offers her as a representative — every name standing for thousands of working-class women crushed by industry. Priestley\'s 1945 audience, having lived through Depression and war, would readily map "Eva Smiths" onto factory girls and war widows, making the line a roll-call for the welfare state.',
    time: 100,
  },

  // ── A Christmas Carol (8) ──────────────────────────────────────────────────
  {
    id: 'sa-extra-acc-01',
    quote: 'Marley was dead: to begin with.',
    text: 'A Christmas Carol',
    character: 'Narrator',
    context: 'Stave 1, opening line of the novella.',
    expectedFeatures: [
      'inverted syntax for emphasis',
      'colon creating dramatic pause',
      'metafictional "to begin with"',
      'Gothic establishing shot',
    ],
    expectedMethods: ['inversion', 'caesura via colon', 'metafiction'],
    modelAnswer:
      'Dickens\'s opening declarative is forensic — "dead" is foregrounded so no reader can mistake the supernatural for hallucination later. The colon creates a graveside caesura before the metafictional "to begin with", which playfully reminds Victorian readers they are inside a "ghostly little book". The aphoristic register echoes Hamlet\'s grave-digging scene, lending the novella Shakespearean gravity. By stating Marley\'s death as fact, Dickens earns the moral authority for Marley\'s ghost to demand spiritual reform from Scrooge — and from Victorian readers complicit in industrial misery.',
    time: 90,
  },
  {
    id: 'sa-extra-acc-02',
    quote: 'Hard and sharp as flint.',
    text: 'A Christmas Carol',
    character: 'Narrator (about Scrooge)',
    context: 'Stave 1 — early characterisation of Scrooge.',
    expectedFeatures: [
      'simile comparing Scrooge to mineral',
      'plosive consonants "hard"/"sharp"',
      'flint as cold/igneous symbol',
      'dehumanising imagery',
    ],
    expectedMethods: ['simile', 'plosive consonants', 'dehumanising imagery'],
    modelAnswer:
      'The simile aligns Scrooge with flint — a stone capable of striking sparks but giving none of its own. Plosive consonants in "hard" and "sharp" make the line itself feel struck, as if Scrooge\'s very name should hurt. Dickens dehumanises him geologically, suggesting industrial-era greed has petrified the soul. Crucially flint can produce fire: Dickens encodes potential redemption in the very image of Scrooge\'s hardness, which the Spirits will eventually strike. For Victorian readers concerned with the deserving poor, the metaphor diagnoses a curable spiritual condition.',
    time: 90,
  },
  {
    id: 'sa-extra-acc-03',
    quote: 'Are there no prisons?',
    text: 'A Christmas Carol',
    character: 'Scrooge',
    context: 'Stave 1 — to the charitable gentlemen seeking donations.',
    expectedFeatures: [
      'rhetorical question dismissing the poor',
      'noun "prisons" conflating poverty with crime',
      'echoes Malthusian/Poor Law rhetoric',
      'returned ironically by the Spirit later',
    ],
    expectedMethods: ['rhetorical question', 'allusion to Poor Laws', 'irony'],
    modelAnswer:
      "Scrooge's rhetorical question weaponises Victorian Poor Law rhetoric, treating poverty as criminality requiring incarceration in workhouses or prisons. By posing the question rather than offering money, he refuses moral engagement, outsourcing charity to the punitive state. Dickens loads the line with dramatic irony: the Ghost of Christmas Present will quote it back in Stave 3 as Tiny Tim faces death. The novella is thus structured around this sentence, dismantling Malthusian indifference for a Victorian audience newly exposed to industrial slums.",
    time: 100,
  },
  {
    id: 'sa-extra-acc-04',
    quote: 'I wear the chain I forged in life.',
    text: 'A Christmas Carol',
    character: 'Jacob Marley',
    context: "Stave 1 — Marley's ghost warns Scrooge.",
    expectedFeatures: [
      'extended metaphor of chain',
      'verb "forged" — industrial/agentive',
      'first-person ownership of guilt',
      'spiritual didacticism',
    ],
    expectedMethods: ['extended metaphor', 'agentive verb', 'first-person confession'],
    modelAnswer:
      'The metaphor of the chain literalises sin as physical burden, drawing on medieval Christian iconography of the damned. The verb "forged" is doubly resonant: industrial, recalling the era\'s factories, and confessional, since Marley admits he himself manufactured his torment. The first-person "I wear" refuses any blame outside himself, a model of accountability Scrooge must learn. For Victorian readers steeped in evangelical revivalism, Marley\'s ghost is a living sermon: the misuse of wealth in life produces eternal weight in death.',
    time: 100,
  },
  {
    id: 'sa-extra-acc-05',
    quote: 'This boy is Ignorance. This girl is Want.',
    text: 'A Christmas Carol',
    character: 'Ghost of Christmas Present',
    context: 'Stave 3 — revealing the wretched children beneath his robe.',
    expectedFeatures: [
      'allegorical personification',
      'parallel sentence structure',
      'capitalised abstract nouns',
      'didactic warning',
    ],
    expectedMethods: ['personification', 'parallelism', 'allegory'],
    modelAnswer:
      'Dickens revives medieval allegory: by capitalising "Ignorance" and "Want" he turns abstract social ills into named figures, demanding Victorian readers see them. The parallel syntax "This boy / This girl" makes the children both individual and emblematic — a particular street child and a national emergency. Personification permits a critique that statistics could not deliver: poverty has a face, and it is a child\'s. The Ghost\'s warning addresses readers as much as Scrooge, indicting an industrial society that produces both children daily.',
    time: 100,
  },
  {
    id: 'sa-extra-acc-06',
    quote: 'Decrease the surplus population.',
    text: 'A Christmas Carol',
    character: 'Scrooge',
    context: 'Stave 1 — dismissing the charitable gentlemen.',
    expectedFeatures: [
      'Malthusian allusion',
      'euphemistic noun "population"',
      'detached economic register',
      'returned ironically by the Spirit',
    ],
    expectedMethods: ['allusion', 'euphemism', 'cold register'],
    modelAnswer:
      'The euphemism "surplus population" alludes to Malthus\'s 1798 essay, which argued that the poor naturally die off to balance resources. By recycling its language, Scrooge sounds rational while advocating mass death. The detached economic register — population as inventory — strips humanity from the poor exactly as the Poor Laws did. Dickens later weaponises the phrase: the Ghost of Christmas Present quotes it back when Tiny Tim is shown dying. For Victorian readers, the sentence indicts the cold arithmetic underwriting workhouse policy.',
    time: 100,
  },
  {
    id: 'sa-extra-acc-07',
    quote: 'I am as light as a feather, I am as happy as an angel.',
    text: 'A Christmas Carol',
    character: 'Scrooge',
    context: 'Stave 5 — waking on Christmas Day, transformed.',
    expectedFeatures: [
      'paired similes — natural and divine',
      'anaphoric "I am"',
      'tonal contrast with earlier "flint"',
      'religious imagery of redemption',
    ],
    expectedMethods: ['simile', 'anaphora', 'religious imagery'],
    modelAnswer:
      'Paired similes pair the earthly ("feather") with the celestial ("angel"), tracing Scrooge\'s reformation from material to spiritual being. Anaphoric "I am" insists on a new identity, syntactically rebirthing him. The tonal contrast with Stave 1\'s "hard and sharp as flint" is total: Scrooge has been transmuted from mineral to bird to angel, climbing the chain of being. For a Victorian readership hungry for redemption narratives, the line provides Christian closure: the Spirits\' intercession works, and individual conscience can still be saved.',
    time: 90,
  },
  {
    id: 'sa-extra-acc-08',
    quote: 'Secret, and self-contained, and solitary as an oyster.',
    text: 'A Christmas Carol',
    character: 'Narrator (about Scrooge)',
    context: 'Stave 1 — the famous opening characterisation.',
    expectedFeatures: [
      'sibilant tricolon',
      'simile with oyster — closed shell, hidden pearl',
      'polysyndeton accumulating isolation',
      'subtle redemptive hint',
    ],
    expectedMethods: ['sibilance', 'tricolon', 'simile'],
    modelAnswer:
      'The hissing sibilance — "secret, self-contained, solitary" — sonically encloses Scrooge in his own shell, the polysyndeton piling each adjective until isolation becomes oppressive. The oyster simile is brilliantly double-edged: it images closed defensiveness, but oysters also conceal pearls — a quiet hint that Scrooge contains hidden value redeemable by the Spirits. Dickens\'s narrator thus diagnoses the disease and prescribes the cure in a single line, training Victorian readers to see even a Scrooge as redeemable, not disposable.',
    time: 100,
  },

  // ── Jekyll & Hyde (6) ──────────────────────────────────────────────────────
  {
    id: 'sa-extra-jh-01',
    quote: 'Man is not truly one, but truly two.',
    text: 'Jekyll and Hyde',
    character: 'Dr Jekyll',
    context: 'Final chapter — Jekyll\'s "Full Statement of the Case".',
    expectedFeatures: [
      'antithesis "one"/"two"',
      'modifier "truly" used twice',
      'philosophical declarative',
      'duality as central thesis',
    ],
    expectedMethods: ['antithesis', 'parallelism', 'philosophical aphorism'],
    modelAnswer:
      'Stevenson\'s antithesis frames human identity as fundamentally split — a thesis the entire novella has dramatised. Repetition of "truly" insists on the equal reality of both halves, refusing to dismiss the darker self as mere aberration. The aphoristic register lifts the moment to philosophy, engaging Victorian debates over Darwinian descent and the unconscious that Freud would soon theorise. For a late-Victorian readership anxious about respectability, the line is destabilising: even the gentleman Jekyll harbours an inner Hyde, and repression cannot abolish the second self.',
    time: 100,
  },
  {
    id: 'sa-extra-jh-02',
    quote: 'Something troglodytic.',
    text: 'Jekyll and Hyde',
    character: 'Mr Utterson (free indirect)',
    context: 'Chapter 2 — describing his impression of Hyde.',
    expectedFeatures: [
      'classical/anthropological diction "troglodytic"',
      'vague pronoun "something"',
      'evolutionary regression imagery',
      'class anxiety',
    ],
    expectedMethods: ['Latinate diction', 'indefinite pronoun', 'evolutionary imagery'],
    modelAnswer:
      'The Latinate "troglodytic" — cave-dwelling, prehistoric — frames Hyde as evolutionarily regressed, drawing on 1880s anxieties around Darwin\'s "Descent of Man" and Lombroso\'s "born criminal" theories. The vague "something" enacts the inability to categorise Hyde with rational language, marking the limit of Victorian taxonomies. Stevenson exploits middle-class fears that respectable society could devolve into atavistic degenerates living in slums. The diction performs class disgust: Hyde is not just immoral but biologically primitive, an animal Jekyll has unleashed by suspending civilised restraint.',
    time: 100,
  },
  {
    id: 'sa-extra-jh-03',
    quote: 'My devil had been long caged, he came out roaring.',
    text: 'Jekyll and Hyde',
    character: 'Dr Jekyll',
    context: 'Final chapter — explaining the murder of Sir Danvers Carew.',
    expectedFeatures: [
      'metaphor of caged animal',
      'theological noun "devil"',
      'verb "roaring" — bestial release',
      'long vowels suggesting accumulation',
    ],
    expectedMethods: ['extended metaphor', 'religious diction', 'animalistic verb'],
    modelAnswer:
      'The cage metaphor literalises Victorian repression: Jekyll\'s respectable veneer has merely imprisoned, not extinguished, his appetites. The theological noun "devil" gives the released self damnable status while paradoxically alleviating Jekyll\'s personal guilt — it was the devil, not him. The verb "roaring" is bestial, recalling Hyde\'s evolutionary regression elsewhere. Stevenson speaks to a fin-de-siècle readership uneasy that the era\'s strict moral codes might be storing up violence rather than reforming it; the line frames repression as combustible.',
    time: 100,
  },
  {
    id: 'sa-extra-jh-04',
    quote: 'I learned to recognise the thorough and primitive duality of man.',
    text: 'Jekyll and Hyde',
    character: 'Dr Jekyll',
    context: 'Final chapter — his confessional statement.',
    expectedFeatures: [
      'epistemic verb "learned"',
      'adjective "primitive" — pre-civilised',
      'abstract noun "duality"',
      'scientific register',
    ],
    expectedMethods: ['epistemic verb', 'abstract noun', 'scientific register'],
    modelAnswer:
      'Jekyll frames moral knowledge as scientific discovery — "learned to recognise" — aligning self-experimentation with the empirical method of his Victorian peers. The adjective "primitive" again invokes evolutionary regression: duality is not a modern accident but ancestral, pre-civilised. The abstract noun "duality" elevates personal experience to universal law, suggesting every reader contains the same split. Stevenson thus uses scientific register to smuggle theological alarm: science can describe the divided self but cannot save it, leaving Victorian readers without comfort.',
    time: 100,
  },
  {
    id: 'sa-extra-jh-05',
    quote: 'Like some damned Juggernaut.',
    text: 'Jekyll and Hyde',
    character: 'Mr Enfield (about Hyde)',
    context: 'Chapter 1 — recounting Hyde trampling a child.',
    expectedFeatures: [
      'simile with "Juggernaut"',
      'colonial allusion to Hindu festival',
      'expletive intensifier "damned"',
      'mechanical/unstoppable imagery',
    ],
    expectedMethods: ['simile', 'colonial allusion', 'intensifier'],
    modelAnswer:
      'The simile yokes Hyde to "Juggernaut" — the chariot of Jagannath, which colonial accounts sensationally described crushing devotees beneath its wheels. The allusion borrows Victorian imperial anxiety to portray Hyde as alien, idolatrous, and unstoppable, "Othering" him through Empire\'s vocabulary. The expletive "damned" lends a clubbable Englishman\'s casual disgust while inadvertently confirming Hyde\'s theological status. The mechanical image — a vehicle, not a man — completes the dehumanisation: Hyde is force without conscience, an industrial-era nightmare colliding with a child\'s body.',
    time: 100,
  },
  {
    id: 'sa-extra-jh-06',
    quote: 'There must be something else.',
    text: 'Jekyll and Hyde',
    character: 'Mr Utterson',
    context: "Chapter 2 — puzzling over Jekyll's strange will.",
    expectedFeatures: [
      'modal "must" — epistemic certainty',
      'indefinite pronoun "something"',
      'detective register',
      'foreshadowing of supernatural truth',
    ],
    expectedMethods: ['modal verb', 'indefinite pronoun', 'detective register'],
    modelAnswer:
      'The epistemic modal "must" marks Utterson\'s rationalist refusal to accept the surface story — yet the indefinite "something" admits how little he can specify. Stevenson exploits this gap to generate suspense, training the reader in the same investigative posture as Utterson, the lawyer-detective. The line typifies the novella\'s gothic-detective hybrid: rational inquiry will lead, eventually, to a wholly irrational truth. For a Victorian readership trained on Sherlock Holmes, the promise is that reason can solve the mystery — until Stevenson reveals it cannot.',
    time: 90,
  },

  // ── Romeo & Juliet (6) ─────────────────────────────────────────────────────
  {
    id: 'sa-extra-rj-01',
    quote: "A pair of star-cross'd lovers take their life.",
    text: 'Romeo and Juliet',
    character: 'Chorus',
    context: 'Prologue — opening sonnet, Act 1.',
    expectedFeatures: [
      'astrological imagery of fate',
      'compound adjective "star-cross\'d"',
      'noun "pair" emphasising couple',
      'spoils ending — dramatic irony',
    ],
    expectedMethods: ['compound adjective', 'astrological imagery', 'foreshadowing'],
    modelAnswer:
      'The compound adjective "star-cross\'d" frames the lovers\' deaths as cosmically determined, drawing on Elizabethan belief that the stars governed earthly fate. By disclosing the ending in the Prologue, Shakespeare strips suspense and replaces it with tragic inevitability — the audience watches choices unfold under predestined doom. The noun "pair" insists on their inseparability, which the play structurally honours by killing them within minutes. For Elizabethans schooled in Christian providence yet entertained by classical fatalism, "star-cross\'d" elegantly fuses both worldviews.',
    time: 100,
  },
  {
    id: 'sa-extra-rj-02',
    quote: 'My only love sprung from my only hate!',
    text: 'Romeo and Juliet',
    character: 'Juliet',
    context: 'Act 1, Scene 5 — discovering Romeo is a Montague.',
    expectedFeatures: [
      'antithesis "love"/"hate"',
      'parallelism with repeated "only"',
      'exclamatory horror',
      'anagnorisis moment',
    ],
    expectedMethods: ['antithesis', 'parallelism', 'exclamation'],
    modelAnswer:
      'Juliet\'s antithesis between "love" and "hate" enacts the play\'s central oxymoronic structure, the parallel "only / only" forcing each absolute to share grammatical space. The exclamatory mark performs the lurch of recognition — anagnorisis — as romantic ecstasy collapses into familial horror. Shakespeare uses syntactical mirroring to suggest love and hate are not opposites but twins in the Verona feud. For an Elizabethan audience, the moment also stages the Reformation\'s anxieties about marriage choice versus parental and tribal duty, with Juliet\'s heart already siding with the former.',
    time: 100,
  },
  {
    id: 'sa-extra-rj-03',
    quote: "A plague o' both your houses!",
    text: 'Romeo and Juliet',
    character: 'Mercutio',
    context: 'Act 3, Scene 1 — dying after being stabbed by Tybalt.',
    expectedFeatures: [
      'curse / malediction',
      'biblical/medical noun "plague"',
      'topical reference for 1590s audience',
      'blames both feuding houses',
    ],
    expectedMethods: ['curse', 'biblical allusion', 'apostrophe'],
    modelAnswer:
      "Mercutio's curse names \"plague\" — terrifyingly literal for a London audience repeatedly closed by epidemic in the 1590s, including theatre closures. The malediction blames both feuding families equally, refusing the partisan logic that has killed him. Biblically, plague is divine punishment, casting the Capulet–Montague feud as a sin against God's order. The topical immediacy guarantees the line lands; Shakespeare locates Mercutio's personal death within a wider civic catastrophe, foreshadowing how the feud will indeed kill the city's children — Romeo and Juliet included.",
    time: 100,
  },
  {
    id: 'sa-extra-rj-04',
    quote: 'These violent delights have violent ends.',
    text: 'Romeo and Juliet',
    character: 'Friar Lawrence',
    context: 'Act 2, Scene 6 — warning Romeo before the secret marriage.',
    expectedFeatures: [
      'epigrammatic warning',
      'repetition of "violent"',
      'antithesis "delights"/"ends"',
      'foreshadows tragic conclusion',
    ],
    expectedMethods: ['epigram', 'repetition', 'antithesis'],
    modelAnswer:
      'The Friar\'s epigram packages the play\'s thesis in a single iambic line, his repetition of "violent" hammering the warning into ominous symmetry. Antithesis between sensual "delights" and lethal "ends" presages exactly the play\'s arc: the lovers\' bedroom intimacy will deliver them to the tomb. The Friar speaks in the moralised aphorism of medieval homily, voicing Christian temperance against passionate excess. For an Elizabethan audience trained in proverbial wisdom, the line marks the Friar as authoritative — yet his own scheming will produce the very violent end he predicts.',
    time: 100,
  },
  {
    id: 'sa-extra-rj-05',
    quote: "O, I am fortune's fool!",
    text: 'Romeo and Juliet',
    character: 'Romeo',
    context: 'Act 3, Scene 1 — immediately after killing Tybalt.',
    expectedFeatures: [
      'apostrophe to fortune',
      'noun "fool" — pawn of fate',
      "classical allusion to Fortuna's wheel",
      'exclamatory anguish',
    ],
    expectedMethods: ['apostrophe', 'classical allusion', 'exclamation'],
    modelAnswer:
      'Romeo\'s apostrophe to "fortune" invokes the medieval Wheel of Fortune, casting himself as a pawn rather than agent. The noun "fool" yokes him to court jesters and to lovers in the conventional Petrarchan sense, doubling humiliation with helplessness. The exclamation "O" performs the ejaculatory grief of tragedy. For an Elizabethan audience versed in Boethius and Chaucer, fortune\'s capricious wheel was a familiar lens; Shakespeare uses it to lift Romeo\'s personal disaster into cosmic tragedy, while quietly absolving him of pure responsibility for Tybalt\'s death.',
    time: 100,
  },
  {
    id: 'sa-extra-rj-06',
    quote: 'For never was a story of more woe.',
    text: 'Romeo and Juliet',
    character: 'Prince Escalus',
    context: "Act 5, Scene 3 — final lines, after the lovers' deaths.",
    expectedFeatures: [
      'superlative implied via "never"',
      'noun "woe" elevating to tragedy',
      'metafictional "story"',
      'closing rhyming couplet',
    ],
    expectedMethods: ['superlative', 'metafiction', 'rhyming couplet'],
    modelAnswer:
      'The Prince closes the play with self-conscious metafiction — naming the events a "story" — inviting the audience to canonise this particular tragedy as paradigmatic. The implied superlative "never...more" elevates the lovers\' deaths above all prior griefs the audience knows, including the era\'s Senecan tragedies. The archaic noun "woe" lends ritual weight, and the rhyming couplet provides ceremonial closure of the kind Elizabethan tragedy demanded. For all its inevitability, the line refuses cheap consolation: civic order is restored only at the price of two children.',
    time: 100,
  },

  // ── AQA Power & Conflict / Love & Relationships (8) ────────────────────────
  {
    id: 'sa-extra-pc-ozy-01',
    quote: 'Look on my Works, ye Mighty, and despair!',
    text: 'Ozymandias — Shelley',
    character: 'Speaker quoting Ozymandias',
    context: "Power & Conflict — inscription on the ruined statue's pedestal.",
    expectedFeatures: [
      'imperative "Look"',
      'archaic vocative "ye Mighty"',
      'capitalisation of "Works" — hubris',
      'dramatic irony — nothing remains',
    ],
    expectedMethods: ['imperative', 'archaic vocative', 'capitalisation'],
    modelAnswer:
      'Ozymandias\'s imperative commands awe, but Shelley engineers savage dramatic irony: the surrounding desert is empty. The archaic vocative "ye Mighty" addresses fellow rulers, exposing tyranny as a closed elite club. Capitalising "Works" parodies Romantic monumental ambition while echoing biblical phrasing — Shelley\'s 1818 republicanism turning sacred register against monarchy. The very inscription that should glorify the king now mocks him, an embodied argument that political power decays while the poet\'s words endure. For post-Napoleonic readers, the warning aimed squarely at autocrats.',
    time: 100,
  },
  {
    id: 'sa-extra-pc-mp-01',
    quote: 'My Last Duchess painted on the wall.',
    text: 'My Last Duchess — Browning',
    character: 'The Duke of Ferrara',
    context: 'Power & Conflict — opening line of the dramatic monologue.',
    expectedFeatures: [
      'possessive "My"',
      'dramatic monologue form',
      'objectification — Duchess as painting',
      'casual past tense "Last"',
    ],
    expectedMethods: ['possessive determiner', 'dramatic monologue', 'objectification'],
    modelAnswer:
      'The possessive "My" announces ownership before the line even reaches the noun, instantly subordinating the Duchess. The chilling adjective "Last" implies a sequence — others have followed her — reducing wives to interchangeable items. The dramatic monologue form lets Browning expose the Duke\'s ego without authorial comment, allowing 1842 readers to convict him themselves. The painting reduces a once-living woman to a controllable image: she now smiles only when the Duke draws back the curtain. Browning critiques Renaissance — and Victorian — patriarchal possessiveness in a single line.',
    time: 100,
  },
  {
    id: 'sa-extra-pc-clb-01',
    quote: 'Half a league, half a league, Half a league onward.',
    text: 'Charge of the Light Brigade — Tennyson',
    character: 'Speaker / narrator',
    context: 'Power & Conflict — opening lines, evoking the cavalry charge.',
    expectedFeatures: [
      'anaphora / repetition',
      'dactylic dimeter mimicking hoofbeats',
      'cumulative momentum',
      'detached military diction',
    ],
    expectedMethods: ['anaphora', 'dactylic dimeter', 'repetition'],
    modelAnswer:
      'Tennyson\'s anaphoric "Half a league" pulses in dactylic dimeter, the falling stress mimicking horses\' hoofbeats and dragging the reader into the charge. The cumulative repetition denies escape, performing the inevitability the cavalrymen themselves felt. The clipped military register withholds judgement, allowing the form to do the moral work. Written within weeks of the 1854 disaster reported in The Times, the poem honours obedient courage while implicitly indicting the commanders whose blunder caused the slaughter — a tension Tennyson, as Poet Laureate, had to negotiate carefully.',
    time: 100,
  },
  {
    id: 'sa-extra-pc-london-01',
    quote: "Mind-forg'd manacles.",
    text: 'London — Blake',
    character: 'Speaker',
    context: 'Power & Conflict — second stanza, hearing the cries of Londoners.',
    expectedFeatures: [
      'metaphor of internal chains',
      'compound adjective "mind-forg\'d"',
      'industrial verb "forg\'d"',
      'critique of ideological oppression',
    ],
    expectedMethods: ['metaphor', 'compound adjective', 'industrial diction'],
    modelAnswer:
      'Blake\'s compound "mind-forg\'d" relocates oppression from the body to the brain — Londoners are not just shackled by King and Church but have internalised those chains. The verb "forg\'d" borrows industrial vocabulary, indicting the new factory economy that 1794 London was building. The metaphor is doubly damning: it describes oppression and accuses the oppressed of complicity in their own enslavement. For a radical readership sympathetic to the French Revolution, Blake\'s line argues that political freedom requires intellectual emancipation from inherited authority.',
    time: 100,
  },
  {
    id: 'sa-extra-pc-prelude-01',
    quote: 'A huge peak, black and huge.',
    text: 'Extract from The Prelude — Wordsworth',
    character: 'Speaker (young Wordsworth)',
    context: 'Power & Conflict — boat-stealing episode, the mountain rises into view.',
    expectedFeatures: [
      'repetition of "huge"',
      'colour symbolism "black"',
      'sublime / Romantic awe',
      'caesura mid-line',
    ],
    expectedMethods: ['repetition', 'colour symbolism', 'sublime imagery'],
    modelAnswer:
      'Wordsworth\'s repetition of "huge" enacts vocabulary failing before the sublime — language can only reach for one word and stammer it twice. The colour "black" makes the peak ominous, a Romantic encounter with awesome rather than benign nature. The caesura between "black" and "huge" leaves a syntactical gulf mirroring the speaker\'s arrested breath. Drawing on Burke\'s 1757 theory of the sublime, the line stages nature as morally instructive: the mountain seems to chastise the boy for stealing the boat, asserting an ethical universe that 1790s Romanticism took seriously.',
    time: 100,
  },
  {
    id: 'sa-extra-lr-she-walks-01',
    quote: 'She walks in beauty, like the night.',
    text: 'She Walks in Beauty — Byron',
    character: 'Speaker',
    context: 'Love & Relationships — opening line of the lyric.',
    expectedFeatures: [
      'simile linking woman to night',
      'paradox of beauty and darkness',
      'iambic tetrameter',
      'idealised feminine beauty',
    ],
    expectedMethods: ['simile', 'paradox', 'iambic tetrameter'],
    modelAnswer:
      'Byron\'s simile likens his subject to "night", paradoxically locating beauty in darkness rather than conventional Petrarchan sunlight. The iambic tetrameter glides like the walking it describes, smooth and unhurried. The line idealises a stilled, almost reverential femininity — admired from a distance, the speaker contemplative rather than seductive. Written for his cousin Mrs Wilmot at a mourning ball where she wore black, the simile is biographically literal as well as figurative. For Regency readers used to Byron\'s scandalous reputation, the chaste tone is itself remarkable.',
    time: 100,
  },
  {
    id: 'sa-extra-lr-sonnet29-01',
    quote: 'I think of thee!',
    text: 'Sonnet 29 — Elizabeth Barrett Browning',
    character: 'Speaker (the poet)',
    context: 'Love & Relationships — opening of the Petrarchan sonnet.',
    expectedFeatures: [
      'exclamatory opening',
      'archaic pronoun "thee" — intimacy',
      'mental verb "think"',
      'Petrarchan sonnet form',
    ],
    expectedMethods: ['exclamation', 'archaic pronoun', 'sonnet form'],
    modelAnswer:
      'The exclamatory opening bursts into the sonnet without preamble, the intensity of feeling overflowing decorum. The archaic "thee" — already old-fashioned in 1850 — invokes the intimate register of devotional poetry, addressing Robert Browning as if in prayer. The mental verb "think" foregrounds female intellectual agency, central to a sonnet that will end by privileging presence over thought. Choosing the Petrarchan sonnet, traditionally a male form addressing a silent female beloved, Barrett Browning radically reverses the gendered tradition for a Victorian readership.',
    time: 100,
  },
  {
    id: 'sa-extra-lr-porphyria-01',
    quote: 'And strangled her. No pain felt she.',
    text: "Porphyria's Lover — Browning",
    character: 'The unnamed male speaker',
    context: 'Love & Relationships — the moment of murder in the dramatic monologue.',
    expectedFeatures: [
      'shocking caesura via full stop',
      'inverted syntax "No pain felt she"',
      'first-person normalisation of violence',
      'unreliable narrator',
    ],
    expectedMethods: ['caesura', 'syntactic inversion', 'dramatic monologue'],
    modelAnswer:
      'Browning\'s mid-line caesura performs the abruptness of strangulation — life ends inside a single iambic line. The inverted syntax "No pain felt she" sounds bizarrely chivalric, as if the speaker is arguing he has spared her suffering, exposing his self-justifying derangement. Dramatic monologue form lets Browning indict patriarchal control without authorial comment, allowing Victorian readers to convict the speaker themselves. The line dramatises a possessive masculinity that would rather kill a woman at the peak of love than lose her, a chilling critique of contemporary gender power.',
    time: 110,
  },
]

export default speedAnalysisPromptsExtra
