// Model essay bank for Macbeth - grade 9 exemplars with paragraph-level annotations.
// Quotations are taken from the standard Folger / RSC editions of Shakespeare's Macbeth
// and have been kept short (under 15 words) for fair-dealing study purposes.

export interface ModelEssay {
  slug: string
  title: string
  text: 'macbeth'
  board: (
    | 'AQA'
    | 'EDEXCEL'
    | 'OCR'
    | 'EDUQAS'
    | 'EDEXCEL_IGCSE'
    | 'CAMBRIDGE_0500'
    | 'CAMBRIDGE_0990'
  )[]
  targetGrade: 9
  wordCount: number
  paragraphs: { content: string; annotation: string }[]
  keyTechniques: string[]
}

export const macbethModelEssays: ModelEssay[] = [
  // ────────────────────────────────────────────────────────────────────────────
  // 1. AMBITION (extract + whole text)
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'macbeth-ambition',
    title: "How does Shakespeare present Macbeth's ambition in the play?",
    text: 'macbeth',
    board: ['AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990'],
    targetGrade: 9,
    wordCount: 812,
    keyTechniques: [
      'Thesis-led introduction',
      'Embedded short quotation',
      'AO2 method analysis (imagery, metre, soliloquy)',
      'AO3 Jacobean context (divine right, regicide, Gunpowder Plot)',
      'Conceptualised conclusion that bookends the thesis',
    ],
    paragraphs: [
      {
        content:
          "Shakespeare presents Macbeth's ambition not as a noble drive but as a contagious moral disease that infects, isolates and finally consumes him. Written in 1606 for the Jacobean court of King James I - a monarch who survived the Gunpowder Plot only a year earlier - the play stages ambition as the very impulse that destroys the Great Chain of Being. Through soliloquy, equivocal imagery and the collapsing pentameter of Macbeth's later speeches, Shakespeare warns an audience steeped in the doctrine of divine right that ambition, untethered from loyalty, is a self-cannibalising force.",
        annotation:
          "Thesis-led introduction. Pins a clear, conceptual argument ('contagious moral disease') rather than listing ideas, immediately hitting AO1. Embeds AO3 context (1606, James I, Gunpowder Plot, divine right) and previews the AO2 methods that will be analysed. The verb 'cannibalising' echoes the language of the play and signals interpretive ambition.",
      },
      {
        content:
          "From the moment the witches hail him as 'thou shalt be king hereafter', ambition is presented as something planted from outside but eagerly cultivated within. Macbeth's aside that the thought 'doth unfix my hair' uses visceral somatic imagery: ambition is felt physically before it is reasoned morally. The verb 'unfix' is telling - it suggests dislocation, a mind being prised loose from its natural order. For a Jacobean audience who believed kings were ordained by God, Macbeth's bodily reaction dramatises the cosmic wrongness of even contemplating regicide. Shakespeare therefore shows ambition entering Macbeth not as choice but as temptation, complicating any simple reading of him as villain.",
        annotation:
          "Topic sentence makes a precise conceptual claim ('planted from outside but cultivated within'). Two short embedded quotations support analysis of a single word ('unfix'), modelling AO2 zoom. Context (divine right) is woven in to extend interpretation, not bolted on. Closes by complicating the argument - sophisticated AO1.",
      },
      {
        content:
          "Yet Shakespeare quickly redirects responsibility onto Macbeth himself. In his soliloquy in Act 1 Scene 7, he admits he has 'no spur' to prick the sides of his intent, only 'vaulting ambition, which o'erleaps itself'. The equestrian metaphor is double-edged: ambition is the rider that overshoots the saddle and crashes. The caesura after 'itself' enacts that fall metrically, as if the line stumbles. Crucially, Macbeth here knows the act is wrong - he lists Duncan's virtues, the duties of kinship and hospitality - yet chooses ambition over conscience. Shakespeare uses the soliloquy form, the most intimate access to thought available on the early modern stage, to expose ambition as a deliberate moral surrender.",
        annotation:
          "Strong analytical pivot ('Yet Shakespeare quickly redirects responsibility'). Demonstrates AO2 across multiple methods: metaphor, caesura, form (soliloquy). Shows the student tracking the writer's craft, not just plot. Note the exam technique of analysing what the character knows and still chooses - moves the answer from description to argument.",
      },
      {
        content:
          "Ambition then begins to corrode Macbeth's language itself. By Act 3, his commands are clipped and paranoid: 'be innocent of the knowledge, dearest chuck'. The pet name 'chuck' is grotesque next to the murder he is commissioning, and the syntactic inversion mimics a mind that no longer thinks in straight lines. Shakespeare also gives him the imperative 'be' - Macbeth, once a subject, now legislates emotion in others. Ambition has reshaped not only his actions but his grammar. A Jacobean audience would have recognised this slippage as the symptom of a tyrant, the very figure James I had warned against in his treatise Basilikon Doron.",
        annotation:
          'Tracks change across the play (whole-text AO1). Sophisticated AO2 - analysing syntax and grammatical mood, not just imagery. Context is specific (Basilikon Doron) rather than generic, signalling top-band AO3. The single embedded quotation does heavy lifting: this is efficient quotation use under exam pressure.',
      },
      {
        content:
          "By Act 5, ambition has burned through Macbeth and left only ash. His 'tomorrow, and tomorrow, and tomorrow' speech reduces existence to a 'walking shadow' and a tale 'signifying nothing'. The polysyndetic repetition flattens time into monotony; ambition, which once promised futurity, has hollowed it out. The metrical regularity of those repeated trochees mimics a clock that no longer means anything to the speaker. Shakespeare's structural choice to deny Macbeth a final soliloquy of repentance is itself an argument: ambition, taken to its end, evacuates the self. Where Lady Macbeth's guilt drives her mad, Macbeth's ambition drives him into nihilism.",
        annotation:
          'Excellent whole-text awareness - moves from Act 1 to Act 5 across the essay. Analyses structure (the absence of repentance) as well as language and metre, which is a hallmark of grade 9 work. Comparative aside on Lady Macbeth shows conceptual range without losing focus.',
      },
      {
        content:
          "Ultimately, Shakespeare presents ambition as a thought that grows teeth. It begins as suggestion, hardens into choice, deforms language and finally consumes meaning itself. For a Jacobean audience, Macbeth's arc was a theological warning: to grasp at the throne is to unmake the cosmos and the self at once. For a modern audience, the play remains a study of how desire, once licensed, devours its host. The 'vaulting ambition' that began as a horse to be ridden ends, fittingly, as the rider thrown.",
        annotation:
          "Conclusion bookends the thesis (the disease/cannibalism image returns as 'devours its host'). Layers two readings - Jacobean and modern - which examiners reward as 'considered personal response'. Final sentence echoes the Act 1 quotation, giving the essay a satisfying ring composition.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 2. LADY MACBETH AS A POWERFUL WOMAN
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'lady-macbeth-power',
    title: 'How does Shakespeare present Lady Macbeth as a powerful woman?',
    text: 'macbeth',
    board: ['AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990'],
    targetGrade: 9,
    wordCount: 798,
    keyTechniques: [
      'Conceptual thesis (power as performance)',
      'Feminist / Jacobean gender context',
      'Imperatives and apostrophe analysis',
      'Tracked decline as structural argument',
      'Bookended conclusion',
    ],
    paragraphs: [
      {
        content:
          "Shakespeare presents Lady Macbeth's power not as innate authority but as a performance - a ferocity she must summon, sustain and ultimately cannot survive. In a Jacobean society that legally treated wives as the property of their husbands and theologically framed female ambition as demonic, her domination of Macbeth in the first two acts is genuinely transgressive. Yet by staging her unravelling in Act 5, Shakespeare suggests that her power was always borrowed, costumed, and structurally unsustainable in a patriarchal universe.",
        annotation:
          "Thesis is conceptual and double-edged ('borrowed, costumed, unsustainable'), avoiding the trap of arguing she is simply 'powerful' or 'evil'. Anchors AO3 immediately (Jacobean gender norms) and previews AO1 structural argument (power that decays).",
      },
      {
        content:
          "Her first soliloquy stages power as ritual self-transformation. She commands the spirits to 'unsex me here' and to 'fill me from the crown to the toe top-full / Of direst cruelty'. The verb 'unsex' is violent and clinical - she perceives her femininity as an obstacle to be surgically removed, not a strength to be wielded. The apostrophe to spirits is itself a claim to power: she addresses the supernatural as equals, summoning rather than supplicating. For a Jacobean audience watching the play only a year after the Gunpowder Plot, a woman invoking dark forces would have evoked the witch-hunting anxieties James I personally championed in Daemonologie.",
        annotation:
          "Strong AO2 analysis of a single verb ('unsex') and a rhetorical mode (apostrophe). Two short quotations within fair-dealing limits. AO3 context is precise (Daemonologie, James I), not generic, and is connected to dramatic effect on the original audience.",
      },
      {
        content:
          "Her power over Macbeth is rhetorical and emasculating. When he wavers, she taunts: 'When you durst do it, then you were a man'. The conditional grammar is brutal - manhood is conditional on murder, withheld until he obeys her. Shakespeare loads the line with hard plosives ('durst', 'do', 'then') that mimic the verbal blows she lands. She also weaponises the era's gender script against him: in a patriarchal society, to be told one is not a man by one's wife is a public-facing humiliation, not merely a private rebuke. Her power, then, lies in her ability to invert the gender hierarchy and use its own logic against her husband.",
        annotation:
          'Excellent AO2 - analyses grammar (conditional mood) and phonology (plosives) on the same quotation. Top-band answers analyse multiple methods on one piece of evidence. AO3 is integrated, not appended: gender norms are used to explain why the rhetorical move lands so hard.',
      },
      {
        content:
          "Yet Shakespeare repeatedly hints that her power requires effort to maintain. She admits she would have killed Duncan herself 'had he not resembled / My father as he slept'. The enjambment over the line break is psychologically revealing: her certainty falters at the line-end, as her father's image intrudes. This brief, almost concealed, moment of feminine relational feeling exposes the fault line in her constructed cruelty. Shakespeare uses this crack to foreshadow the collapse to come - power built on the suppression of the self cannot hold indefinitely.",
        annotation:
          'Sophisticated AO2 - analyses the position of a word at the line break (enjambment) as evidence. Reads what the character does not quite say, which is grade 9 territory. Sets up the structural argument for the next paragraph.',
      },
      {
        content:
          "By Act 5, the performance shatters. The sleepwalking scene strips her of verse - she speaks in fragmented prose, the dramatic form Shakespeare reserves for madness, commoners, or characters losing control. Her 'Out, damned spot!' compresses panic into monosyllables and inverts her earlier composure. The rhetorical commands she once aimed at spirits and at Macbeth now circle uselessly around an imaginary stain. Crucially, she is observed by a Doctor and a Gentlewoman - figures who anatomise her without intervening. Power that was once theatrical and commanding has become spectacle: she is now the watched, not the watcher.",
        annotation:
          "Whole-text and structural awareness - links Act 1 imperatives to Act 5 fragmentation. Analyses form (verse vs prose) as a deliberate authorial choice, which is a top-band move. The 'watched, not the watcher' inversion is conceptual writing examiners reward.",
      },
      {
        content:
          "Ultimately, Shakespeare presents Lady Macbeth as powerful precisely because her power is unnatural in her world - and tragic for the same reason. Her dominance is real but exorbitant; it requires her to 'unsex' herself, to suppress kinship, to stage-manage a husband. The play does not punish her for being powerful so much as for being powerful in a system that gave her no legitimate channel for it. To a modern audience, she is one of Shakespeare's most psychologically complex women: a study in what happens when ambition meets a closed door.",
        annotation:
          'Conclusion bookends the thesis (performance, costume, sustainability) and adds a modern critical framing. Avoids moralising; offers an analytical reading that holds tragedy and transgression together. Strong AO1 closure.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 3. THE SUPERNATURAL / WITCHES
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'macbeth-supernatural',
    title: 'How does Shakespeare use the supernatural in Macbeth?',
    text: 'macbeth',
    board: ['AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990'],
    targetGrade: 9,
    wordCount: 786,
    keyTechniques: [
      'Conceptual reading (supernatural as moral mirror)',
      'AO2 trochaic metre and equivocation',
      'Daemonologie / witchcraft context',
      'Structural framing (witches open and pre-empt)',
      'Bookended thesis',
    ],
    paragraphs: [
      {
        content:
          "Shakespeare uses the supernatural in Macbeth not as spectacle but as a moral mirror - an externalisation of the desires the human characters are not yet honest enough to own. The witches speak in trochaic tetrameter, a metre that beats backwards against the iambic pulse of the play's mortal speech, and their equivocations dramatise the way ambition lies even when it tells the truth. For a Jacobean audience whose king had personally tried witches and authored Daemonologie, the supernatural was not a metaphor but a live theological threat, and Shakespeare exploits that anxiety to interrogate the limits of human agency.",
        annotation:
          "Conceptual thesis ('externalisation of desires'). Immediately fuses AO2 (metre) and AO3 (Daemonologie, James VI/I) within a single argument. Sets up the central interpretive question of the essay: do the witches cause, or merely reveal, evil?",
      },
      {
        content:
          "From the opening scene, Shakespeare uses the witches to invert order. Their paradox 'fair is foul, and foul is fair' establishes a moral universe where appearances cannot be trusted. The chiastic structure mirrors itself, enacting linguistically the inversion it describes. Crucially, this line is given to the supernatural before any human speaks - Shakespeare structurally privileges the witches' worldview, allowing it to colour every subsequent scene. When Macbeth's first line later echoes them with 'so foul and fair a day', the audience hears the contamination already at work. The supernatural is not waiting to corrupt Macbeth; it has already shaped the air he breathes.",
        annotation:
          "Excellent AO2 - analyses chiasmus, structure (which character speaks first) and verbal echo across scenes. Strong AO1 - connects the witches' line to Macbeth's later one to make a structural argument. Note the analytical move from form to thematic effect.",
      },
      {
        content:
          "The witches' power, however, is presented as equivocal rather than absolute. Banquo notes that 'instruments of darkness tell us truths' to 'betray's / In deepest consequence'. Shakespeare uses Banquo here as a moral foil: he hears the same prophecy as Macbeth and chooses not to act on it. This dramatic parallelism is decisive - it shows the supernatural offers temptation, not compulsion. The witches predict; Macbeth elects. By giving Banquo this clarity, Shakespeare denies Macbeth the alibi of fate. A Jacobean audience, who believed in free will under God, would have recognised that the witches reveal what is already latent in the soul that listens.",
        annotation:
          "Analytical pivot. Uses parallelism between Banquo and Macbeth as evidence - a structural AO2 method that examiners love. AO3 is integrated theologically (free will). The phrase 'denies Macbeth the alibi of fate' is conceptual writing characteristic of grade 9 answers.",
      },
      {
        content:
          "Shakespeare also uses the supernatural to externalise guilt. The 'dagger of the mind' that Macbeth sees before Duncan's murder is explicitly a 'false creation' of his 'heat-oppressed brain'. Shakespeare gives Macbeth the vocabulary to diagnose his own hallucination, and yet he follows the dagger anyway. This is dramatically vital: the supernatural here is unambiguously psychological, suggesting that even the witches earlier may have been catalysts rather than causes. Banquo's ghost performs the same function - visible only to Macbeth, it stages publicly what guilt looks like when it cannot be kept inside. The supernatural is the play's lie-detector.",
        annotation:
          "Strong conceptual reading - 'the supernatural is the play's lie-detector'. Tracks the supernatural across multiple scenes (whole-text AO1). Analyses the writer's choice to make the dagger ambiguous, which is more sophisticated than asking 'is it real?'",
      },
      {
        content:
          "Finally, the apparitions of Act 4 trap Macbeth in his own confidence. The witches tell him 'none of woman born / Shall harm Macbeth'. The line scans with iambic regularity, lulling him into security, but it conceals an equivocation that hinges on a single grammatical preposition. Shakespeare here exploits the early modern legal panic around equivocation - a Jesuit doctrine notoriously associated with the 1606 Gunpowder Plot trials - to make the supernatural feel topical and dangerous. The witches do not lie; they let Macbeth lie to himself. This is the play's most devastating use of the supernatural: it weaponises the listener's own ambition.",
        annotation:
          "Specific AO3 (equivocation, Gunpowder Plot, Jesuit doctrine) is precisely deployed and tied to AO2 (iambic metre). Conceptual conclusion to the paragraph ('weaponises the listener's own ambition') keeps the argument moving rather than just describing.",
      },
      {
        content:
          'Ultimately, Shakespeare uses the supernatural as a structural device that reveals rather than determines. The witches frame the play, but they do not write its plot - Macbeth does. By blending Jacobean witch-hunt anxiety with a deeper psychological realism, Shakespeare turns the supernatural into a question rather than an answer: how much of evil is whispered in from outside, and how much was always waiting inside? The play, with characteristic economy, refuses to choose, and that refusal is what keeps it terrifying.',
        annotation:
          "Conclusion bookends the thesis (mirror / external vs internal) and ends on an open critical question - a sophisticated way to handle 'considered personal response'. Avoids the weaker move of restating the introduction.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 4. GUILT AND CONSCIENCE
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'macbeth-guilt',
    title: 'How does Shakespeare present guilt and conscience in Macbeth?',
    text: 'macbeth',
    board: ['AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990'],
    targetGrade: 9,
    wordCount: 802,
    keyTechniques: [
      'Conceptual thesis (guilt as a body)',
      'Hands and blood motif tracked across acts',
      'Comparative reading of Macbeth and Lady Macbeth',
      'Form analysis (verse to prose)',
      'Christian / Jacobean moral context',
    ],
    paragraphs: [
      {
        content:
          "Shakespeare presents guilt in Macbeth not as an emotion but as a body - something staining hands, breaking sleep, speaking through hallucination. In a Christian Jacobean culture that read murder as a sin against the Great Chain of Being and against God's anointed king, guilt was not psychological furniture but theological fact. Through the recurring motifs of blood, hands and sleep, and through the divergent trajectories of Macbeth and his wife, Shakespeare dramatises conscience as the part of the self that cannot be governed by ambition.",
        annotation:
          "Conceptual thesis ('guilt as a body'). Frames the essay around motifs (blood, hands, sleep) the student will track. AO3 is theological, not just historical, which often unlocks higher marks. Sets up a comparative structural argument between the two protagonists.",
      },
      {
        content:
          "Guilt in Macbeth speaks first through the body's surfaces. After Duncan's murder, he stares at his hands and asks whether 'all great Neptune's ocean' will 'wash this blood / Clean from my hand'. The hyperbolic image of an entire ocean failing to cleanse a single hand makes guilt geological - it has weight, it has volume, it cannot be removed. The interrogative form is crucial: Macbeth does not assert his guilt, he investigates it, and finds it bottomless. Shakespeare also uses the enjambment between 'blood' and 'clean' to enact what the metaphor describes: the words split apart, just as the stain refuses to lift.",
        annotation:
          "Strong AO2 - analyses imagery (hyperbole), grammatical mood (interrogative) and form (enjambment) on a single quotation. The phrase 'guilt geological' is original conceptual writing. Note the analytical patience: one image, three methods, one argument.",
      },
      {
        content:
          "Lady Macbeth, who once dismissed guilt as a stain that 'a little water clears us of', inherits this same image and is destroyed by it. By Act 5 her famous 'Out, damned spot!' literalises what she once denied. Shakespeare's structural irony is exact: the wife who taught her husband to scorn conscience is the first to be undone by it. The shift from her earlier confident verse to fragmented prose is dramaturgically loaded - Shakespeare uses prose here as the formal signature of a self that can no longer hold itself in metre. Guilt, denied long enough, dismantles the very grammar of the personality.",
        annotation:
          "Excellent comparative AO1 - links Lady Macbeth's Act 2 line to her Act 5 collapse. Reads form (verse vs prose) as evidence of psychology. Structural irony is named explicitly, which examiners reward. The final sentence is a conceptual flourish that connects form to meaning.",
      },
      {
        content:
          "Shakespeare also dramatises guilt through the destruction of sleep. Macbeth hears a voice cry that he 'does murder sleep'. The personification of sleep as a victim Macbeth has killed is theologically charged: sleep, in early modern thought, was a daily rehearsal of death and a gift of God to the innocent. To murder sleep is to forfeit the divine. Macbeth's later insomnia - and Lady Macbeth's somnambulism - are therefore not merely symptoms; they are punishments. Shakespeare here aligns conscience with cosmic order: guilt is the body's recognition that the soul has stepped outside the moral universe.",
        annotation:
          "Tracks a single motif (sleep) across the play with theological context. Argues that symptom is punishment, which is a sophisticated AO3 move. The phrase 'stepped outside the moral universe' synthesises Christian context with character analysis without becoming preachy.",
      },
      {
        content:
          "Crucially, Shakespeare differentiates the two characters' guilt to reveal two ways conscience can fail. Macbeth's guilt hardens: by Act 3 he resolves that he is 'in blood / Stepp'd in so far' that returning would be as tedious as going on. The metaphor of wading into a river of blood is grotesque, but the truly chilling word is 'tedious' - guilt has not vanished, it has been demoted to inconvenience. Lady Macbeth's guilt, suppressed too long, erupts and unravels her. Shakespeare offers two endpoints for an unattended conscience: numbness or madness. Neither, the play insists, is survival.",
        annotation:
          "Sophisticated comparative analysis - argues for a precise difference between two characters' arcs. Single-word AO2 ('tedious') is doing a lot of work. The dichotomy 'numbness or madness' is conceptual writing that reads like a critic, not a student.",
      },
      {
        content:
          'Ultimately, Shakespeare presents conscience as the part of us that ambition cannot legislate away. Guilt in this play has weight, voice and a clock; it stains the hand, murders the sleep, and finally evicts the mind. For a Jacobean audience this was the doctrine of providence in dramatic form - sin will out. For a modern audience, it is a study in how the suppressed returns. The Macbeths build a kingdom on the assumption that conscience can be managed. The play, with terrifying patience, proves them wrong.',
        annotation:
          'Conclusion bookends the thesis (guilt as body - weight, voice, clock). Layers Jacobean and modern readings. The closing sentence has rhythmic shape, which is a marker of a confident writer. AO1 closure is conceptual, not just summative.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 5. KINGSHIP / TYRANNY
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: 'macbeth-kingship-tyranny',
    title: 'How does Shakespeare present ideas about kingship and tyranny in Macbeth?',
    text: 'macbeth',
    board: ['AQA', 'EDEXCEL', 'OCR', 'EDUQAS', 'EDEXCEL_IGCSE', 'CAMBRIDGE_0500', 'CAMBRIDGE_0990'],
    targetGrade: 9,
    wordCount: 821,
    keyTechniques: [
      'Triangulated character analysis (Duncan / Macbeth / Malcolm)',
      'AO3 divine right and Basilikon Doron context',
      'Imagery of clothing and disease',
      'Structural argument (kingship measured by its absence)',
      'Bookended thesis',
    ],
    paragraphs: [
      {
        content:
          'Shakespeare presents kingship in Macbeth as a sacred office and tyranny as its mirror-image perversion. Written for a king - James I - who had survived assassination attempts and personally theorised monarchy in Basilikon Doron, the play stages kingship as a covenant with God and the realm, and tyranny as the grotesque private inflation of the self into the state. Through the contrast of Duncan, Macbeth and Malcolm, and through recurring imagery of ill-fitting clothes and a sick body politic, Shakespeare argues that the difference between king and tyrant is not who sits on the throne but what the throne does to them.',
        annotation:
          "Conceptual thesis. Anchors AO3 (Basilikon Doron, James I) without dropping the argument. Establishes a triangulated structure (Duncan / Macbeth / Malcolm) the essay will follow. The closing aphorism - 'not who sits on the throne but what the throne does to them' - signals interpretive confidence.",
      },
      {
        content:
          "Duncan embodies the ideal of kingship as gratitude and generosity. He rewards Macbeth publicly and tells him 'I have begun to plant thee, and will labour / To make thee full of growing'. The horticultural metaphor presents kingship as cultivation - the king nourishes his subjects so that the realm itself flourishes. Shakespeare draws here on the Jacobean doctrine of the king as God's gardener of the commonwealth. Duncan's offstage murder is therefore not just a personal crime but an ecological one: the gardener is killed in the garden he tends, and Scotland will accordingly wither.",
        annotation:
          'Strong AO2 - sustained metaphor analysis (horticulture) extended into thematic argument. AO3 is theologically precise. The link from metaphor to plot consequence (Scotland withers) is a structural reading that examiners reward.',
      },
      {
        content:
          "Macbeth's kingship, by contrast, is presented as a bad fit. Angus observes that his title hangs 'loose about him, like a giant's robe / Upon a dwarfish thief'. The simile is brutally diminishing: Macbeth has stolen a garment, not earned it, and his moral stature shrinks to fit the theft. Shakespeare repeatedly uses clothing imagery throughout the play - borrowed robes, ill-tailored honours - to argue that legitimate kingship must be conferred, not seized. For a Jacobean audience versed in the doctrine of divine right, Macbeth's reign is therefore not merely illegal but ontologically false: he wears the title without bearing the office.",
        annotation:
          "Excellent motif tracking (clothing imagery). Single quotation analysed for tenor and vehicle, then connected to a wider patterning. AO3 ('ontologically false') is intellectually ambitious vocabulary used precisely. The distinction between 'wearing the title' and 'bearing the office' is genuinely original critical writing.",
      },
      {
        content:
          // VERIFIED: Malcolm (not Macduff) is the speaker. Folger 4.3.46-48 / OpenSourceShakespeare 4.3 lines 1888-1890: "I think our country sinks beneath the yoke; / It weeps, it bleeds; and each new day a gash / Is added to her wounds."
          "Tyranny is then dramatised as the conversion of the body politic into a sick body. Malcolm laments that Scotland 'sinks beneath the yoke; it weeps, it bleeds'. Shakespeare's tricolon stacks suffering into a single line, and the personification turns the country itself into a victim of Macbeth's misrule. Crucially, the verbs are passive and corporeal - sinking, weeping, bleeding - they are what a body does when it cannot defend itself. The early modern political theory of the king's two bodies, which James I explicitly endorsed, held that the natural body of the king and the political body of the realm were mystically joined; a corrupt king infects the kingdom. Shakespeare literalises that doctrine in Malcolm's lament.",
        annotation:
          "Sophisticated AO3 - invokes 'the king's two bodies', a specific political-theological doctrine, rather than waving at 'context'. AO2 analyses tricolon and personification together. The argument that corruption spreads from king to land is precise and earns top-band marks.",
      },
      {
        content:
          "Malcolm's testing of Macduff in Act 4 is Shakespeare's most explicit anatomy of kingship. He lists the 'king-becoming graces' - 'justice, verity, temperance, stableness' - as the moral architecture of legitimate rule. Structurally, this scene is positioned as the play's ethical centre: in a drama of regicide, Shakespeare pauses to define what the murdered office actually is. The list itself is non-dramatic, almost catechistic, and that is the point - kingship, the play insists, is a discipline of virtues, not a crown. Malcolm's later restraint, his refusal to claim the throne by force alone, models the curative kingship Scotland needs.",
        annotation:
          "Reads structure as argument - a top-band move. Notes that Shakespeare interrupts the action to deliver a definition, and asks why. Connects the 'king-becoming graces' speech to Malcolm's later behaviour, demonstrating whole-text AO1.",
      },
      {
        content:
          'Ultimately, Shakespeare presents kingship and tyranny as two destinies of the same office. Duncan plants and is harvested; Macbeth steals and is unmade; Malcolm inherits and must learn restraint. The throne itself is morally neutral - what matters is whether the king serves the realm or the realm is conscripted to serve the king. For James I in 1606, the play was a flattering reaffirmation of divine right and a warning against regicidal ambition. For modern audiences, it remains a lucid study of how power can either tend a country like a garden or wear it like a stolen coat.',
        annotation:
          'Conclusion bookends both motifs (gardening, clothing) introduced earlier and triangulates the three kings. The dual reading - Jacobean and modern - closes the essay with critical perspective rather than mere summary. The final image lands the argument with rhythmic shape.',
      },
    ],
  },
]
