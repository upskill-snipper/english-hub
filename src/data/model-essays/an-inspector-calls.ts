/* eslint-disable */
// duplicate of macbeth.ts type — orchestrator will dedupe

export interface AnnotatedParagraph {
  paragraph: string
  annotation: string
}

export interface ModelEssay {
  id: string
  text: string // e.g. "An Inspector Calls"
  topic: string
  question: string
  grade: number // e.g. 9
  wordCount: number
  thesis: string
  paragraphs: AnnotatedParagraph[]
  examinerCommentary: string
  keyTechniques: string[]
}

export const anInspectorCallsEssays: ModelEssay[] = [
  {
    id: 'aic-sheila-socialism',
    text: 'An Inspector Calls',
    topic: "Sheila as a vehicle for Priestley's socialist message",
    question:
      'How does Priestley use the character of Sheila to present his socialist ideas in An Inspector Calls?',
    grade: 9,
    wordCount: 812,
    thesis:
      "Priestley constructs Sheila as the play's clearest didactic figure: a young capitalist transformed into a socialist mouthpiece whose moral evolution embodies the optimistic possibility of generational change that the 1945 audience was being urged to embrace.",
    paragraphs: [
      {
        paragraph:
          "From her first appearance, Priestley signals that Sheila's bourgeois complacency is performative rather than fixed. The stage directions describe her as 'very pleased with life and rather excited', a deliberately superficial happiness rooted in her engagement and the consumer pleasures of the Birling household. Priestley's choice of the qualifier 'rather' undermines the depth of her contentment, hinting that her capitalist comfort is brittle. By dressing her in the language of girlish triviality at the start, Priestley engineers the contrast which will dominate her arc, allowing the audience to measure how far socialist conscience can carry a young woman who began the play complicit in privilege.",
        annotation:
          "Opens with stage directions and a precise lexical analysis of 'rather' to argue Sheila's capitalism is fragile — sets up her arc as a structural device.",
      },
      {
        paragraph:
          "Sheila's confession about Milwards becomes the moment Priestley first uses her to dramatise socialist guilt. She admits she had Eva sacked because she 'caught sight of this girl smiling', and her recognition that this was 'the wrong thing' marks her departure from her father's ideology. Crucially, Priestley has her name jealousy and class power as the cause, not misfortune; she accepts that her tantrum was 'mean' and the abuse of authority a genuine cruelty. The audience watches a young capitalist actively diagnose her own oppression of a worker, which is precisely the kind of self-examination Priestley wanted his post-war audience to undertake about their treatment of the working class.",
        annotation:
          "Tracks Sheila's first moral acceptance using verbatim short quotation; links personal guilt to socialist self-examination of class power.",
      },
      {
        paragraph:
          "Her transformation is reinforced by the vocabulary Priestley gives her in Act Two, where she begins to police her family's capitalist evasions. When her mother tries to dismiss the workers as faceless, Sheila interrupts with the corrective declaration that 'these girls aren't cheap labour — they're people'. The dash here, in performance, forces an audible pause that compels the audience to register the rehumanisation of the working class. The grammatical move from the commodified noun phrase 'cheap labour' to the simple noun 'people' enacts the play's central socialist claim: workers are not units of production. Sheila has become the play's moral grammarian, correcting the language of capitalism itself.",
        annotation:
          "Detailed quotation analysis: examines punctuation, syntactic shift, and metalinguistic effect — 'moral grammarian' is a strong conceptualised label.",
      },
      {
        paragraph:
          "Priestley uses Sheila's growing perceptiveness to dramatise the socialist principle that responsibility cannot be evaded by social rank. She intuits the Inspector's method before her parents do, repeatedly warning them not to 'build up a kind of wall' between themselves and his investigation. This wall metaphor encapsulates the protective barriers of class privilege that Priestley wanted dismantled. By placing the warning in the mouth of the youngest woman onstage — a figure traditionally silenced in Edwardian drawing rooms — Priestley subverts the gendered hierarchies of 1912 to argue that socialist insight is not the property of patriarchal authority but of the morally awake, regardless of age or sex.",
        annotation:
          "Moves from quotation to symbolic reading of 'wall'; connects gender, age, and the play's socialist hierarchy of moral perception.",
      },
      {
        paragraph:
          "By the final act, Sheila has become the rhetorical opposite of her father, and Priestley exploits the contrast to deliver his thesis. Where Birling clings to the comfort of the hoax, Sheila insists 'it frightens me the way you talk', refusing to allow the family to retreat into capitalist denial. Her continued use of moral language — 'fire and blood and anguish' echoes the Inspector's prophecy — marks her as the inheritor of his socialist warning. Priestley structurally rewards her: the second phone call vindicates her conscience and indicts her parents. For a 1945 audience emerging from war and voting in the welfare state, Sheila models the listening, accountable citizen the new society would require.",
        annotation:
          "Ends on structural reward; ties Sheila to Inspector's prophetic register and to the 1945 contextual moment of welfare state formation.",
      },
      {
        paragraph:
          "Ultimately, Sheila is less a fully naturalistic character than a deliberate ideological vehicle. Priestley calibrates her dialogue, stage positioning and emotional rhythm so that her conversion enacts the socialist transformation he wishes upon his audience. By making her young, female and initially complicit, he denies the audience the comfort of thinking change is impossible: if Sheila Birling can renounce capitalist self-interest within a single evening, so can they. Her final, frightened insight is the play's offer of hope, and the proof that Priestley's socialism is not merely critique but pedagogy.",
        annotation:
          "Conceptualised conclusion: re-asserts Sheila as a constructed didactic device — 'pedagogy' captures Priestley's instructive purpose.",
      },
    ],
    examinerCommentary:
      "A confidently conceptualised response that treats Sheila as a constructed dramatic device rather than a person. Quotations are short, accurate and analytically dissected (note the work on the dash in 'cheap labour — they're people'). Context (1912 setting, 1945 audience, welfare state) is woven through argument rather than bolted on. AO1 thesis is sustained; AO2 attends to stage directions, syntax and metaphor; AO3 contextual integration is genuinely analytical. Grade 9.",
    keyTechniques: [
      'stage directions',
      'didactic characterisation',
      'verbal contrast',
      'metaphor (the wall)',
      'lexical shift',
      'dramatic irony',
      'structural foiling',
    ],
  },
  {
    id: 'aic-inspector-moral-force',
    text: 'An Inspector Calls',
    topic: 'The Inspector as a moral force / dramatic device',
    question: 'How does Priestley present the Inspector as a moral force in An Inspector Calls?',
    grade: 9,
    wordCount: 798,
    thesis:
      "Inspector Goole functions less as a policeman than as a constructed moral mechanism: a quasi-supernatural dramatic device whose gravitational presence forces both the Birlings and the audience into ethical confrontation, embodying Priestley's socialist conscience in human form.",
    paragraphs: [
      {
        paragraph:
          "From his first entrance, Priestley engineers the Inspector as a force that disrupts capitalist comfort. The stage directions specify that he creates 'an impression of massiveness, solidity and purposefulness', a tricolon of weighty abstract nouns that grants him moral, almost geological authority. Crucially, he arrives immediately after Birling's complacent speech that 'a man has to mind his own business and look after himself and his own', so the Inspector's entrance is choreographed as a structural rebuke. Priestley uses the contrast between Birling's individualist creed and the Inspector's gravitas to position him from the outset as the embodiment of an opposing, collectivist morality.",
        annotation:
          "Opens with stage direction analysis and structural contrast; the tricolon and Birling's quoted creed establish Inspector as antithesis.",
      },
      {
        paragraph:
          "Priestley constructs the Inspector's interrogative method as a moral instrument rather than a forensic one. He deals with witnesses 'one person and one line of inquiry at a time', a technique that forces individual responsibility upon each Birling rather than allowing collective evasion. His refusal to be hurried — 'I haven't much time' — paradoxically slows the play's pace, granting moral weight to each confession. By controlling the rhythm of disclosure, the Inspector becomes a dramaturgical device that prevents the audience from sharing the Birlings' habitual desire to move quickly past discomfort, modelling the patient, sustained ethical attention Priestley believed his post-war society required.",
        annotation:
          "Reads the Inspector's questioning style as dramaturgy: pace and structure are themselves moral tools — sophisticated AO2.",
      },
      {
        paragraph:
          "The Inspector's vocabulary repeatedly refuses the euphemisms of polite class. His blunt naming of Eva's death — describing her 'burnt her inside out' — uses visceral plosive consonants and disturbing physical detail that strip the Birlings of the abstraction in which they prefer to deal. Where Mr Birling speaks of business and percentages, the Inspector insists on bodies. This linguistic confrontation is itself a moral act, dragging the audience from genteel drawing-room language into the lived horror of working-class suffering. Priestley uses the Inspector to puncture the linguistic anaesthetic of capitalism.",
        annotation:
          "Phonological analysis (plosives) plus contrast of registers; 'linguistic anaesthetic of capitalism' is a strong conceptualised image.",
      },
      {
        paragraph:
          "Priestley signals the Inspector's status as more than mortal through the play's controlled use of supernatural suggestion. The name 'Goole' is a homophone of 'ghoul', priming the audience to read him as spectral. He claims he sees the chain of events 'as if I'd actually been there', a phrasing whose conditional grammar subtly admits omniscience while preserving theatrical realism. Priestley denies the audience the comfort of categorising him: he is neither plainly police nor plainly supernatural, but a liminal presence that makes the play's morality feel both human and inescapable. This generic instability is precisely what gives him his dramatic force.",
        annotation:
          'Handles the supernatural reading with care: notes the homophone, the conditional grammar, and the strategic generic ambiguity.',
      },
      {
        paragraph:
          "His final speech crystallises the Inspector's function as Priestley's moral mouthpiece. The declaration that 'we are members of one body' deploys metaphysical and biblical register to universalise responsibility, and his assertion that 'we are responsible for each other' reduces the play's argument to a single grammatical equation between pronoun and obligation. The repetition of 'we' dissolves the boundary between Birling family and theatre audience, refusing the protective fourth wall. By the speech's end the Inspector has stopped interrogating fictional characters and started interrogating the auditorium, a metatheatrical move that redefines moral force as a shared, public reckoning rather than a private confession.",
        annotation:
          'Examines pronoun work and metatheatre; the verbatim short quotations are deployed to support a precise conceptual claim.',
      },
      {
        paragraph:
          "Ultimately the Inspector is less a character than a moral architecture. His name, register, pacing and exit are calibrated to make ethical accountability inescapable, and his ambiguous ontology — police officer, ghost, conscience, dramatist — allows Priestley to present socialist morality as something larger than any single ideology. By the time the telephone rings in the final moments, the Inspector is no longer onstage, yet his moral logic continues to operate, proving that he was never merely a man but the play's binding ethical principle made temporarily visible.",
        annotation:
          "Conclusion frames the Inspector as 'moral architecture' and connects ending phone call to his enduring symbolic function.",
      },
    ],
    examinerCommentary:
      "A sophisticated, sustained AO1 thesis that treats the Inspector as construct. AO2 work is precise: phonology ('Goole'/ghoul), pronoun analysis, conditional grammar, register contrast. AO3 (Edwardian capitalism vs 1945 collectivism) is woven throughout. Quotations are short, verbatim and analysed rather than narrated. Genuine grade 9.",
    keyTechniques: [
      'stage directions',
      'structural contrast',
      'tricolon',
      'pacing',
      'plosive phonology',
      'biblical register',
      'metatheatre',
      'pronoun analysis',
      'liminal characterisation',
    ],
  },
  {
    id: 'aic-generational-conflict',
    text: 'An Inspector Calls',
    topic: 'Generational conflict (Birling vs Eric/Sheila)',
    question: 'How does Priestley present generational conflict in An Inspector Calls?',
    grade: 9,
    wordCount: 776,
    thesis:
      "Priestley structures An Inspector Calls around an explicit generational divide, making the older Birlings the embodiment of an entrenched capitalist past and Sheila and Eric the proof that socialist conscience is the property of the young — a structural argument designed to flatter and recruit the play's emerging post-war generation.",
    paragraphs: [
      {
        paragraph:
          "Priestley establishes Mr Birling as a deliberately obsolete patriarch in Act One. His pronouncement that 'a man has to mind his own business and look after himself and his own' uses two parallel clauses to crystallise the individualist creed of his generation. The triple repetition of 'his own' constructs a closed grammatical circle that excludes everyone outside the family, dramatising emotional and political insularity. Priestley's audience, hearing this in 1945, would recognise the rhetoric of the inter-war ruling class which had failed to prevent the Depression and the Second World War, and would associate this generational worldview with the discredited past from which Britain was attempting to escape.",
        annotation:
          "Strong opening: parses Birling's syntax for ideological closure and connects 1912/1945 audience reception to a generational historical argument.",
      },
      {
        paragraph:
          "Eric and Sheila are positioned, by contrast, as morally porous to the Inspector's argument. Where Birling and Sybil insist they 'accept no blame', Sheila absorbs blame instantly, telling her parents 'I behaved badly too. I know I did.' The simple monosyllabic grammar of her admission contrasts with Birling's elaborate self-justifying clauses, formally dramatising the difference between an older generation that hides behind rhetoric and a younger one capable of unadorned moral honesty. Priestley signals that grammatical economy can itself be ethical: the young speak truth in fewer words because they have less to defend.",
        annotation:
          "Excellent contrastive analysis: links sentence structure to ideology — older generation's elaborate syntax as defensive, youth's monosyllables as honest.",
      },
      {
        paragraph:
          "Eric's confrontation with his father in Act Three exposes the generational fracture as familial breakdown. His accusation that Birling is 'not the kind of father a chap could go to when he's in trouble' uses the colloquial 'chap' to highlight the failure of even surface-level paternal warmth. Priestley exploits the audience's expectation of Edwardian family loyalty to make the rupture more shocking. The young man cannot turn to his father not because of personal coldness but because the father's worldview makes vulnerability impossible; capitalist self-reliance has destroyed the conditions for paternal care. Generational conflict here is not a quarrel but a diagnosis of capitalism's emotional cost.",
        annotation:
          "Reads Eric's accusation as more than personal; capitalism as the structural cause of paternal failure — sophisticated conceptual lift.",
      },
      {
        paragraph:
          "Priestley uses staging to externalise the divide. By Act Three the older Birlings stand together while Eric and Sheila form a separate, accusing pair, and the dialogue gives them increasingly choric functions. Sheila's repeated 'you began to learn something. And now you've stopped' uses second-person address to put her parents in the position the Inspector previously occupied. Priestley quietly transfers the play's moral authority from the older generation's interrogator to the younger generation themselves, suggesting that the ethical future of England now belongs to those willing to be taught.",
        annotation:
          'Tracks staging and choric function; notes the transfer of moral authority — strong structural awareness.',
      },
      {
        paragraph:
          "The conflict is further dramatised through what each generation does with the possibility that the Inspector was a hoax. Birling and Sybil treat the discovery with relieved laughter, demonstrating that for them morality was always conditional on detection. Sheila and Eric refuse this loophole; the fact that 'a girl died' is unchanged. Priestley constructs this as the play's decisive ideological test: capitalism, as represented by the older generation, only behaves ethically when it can be punished, while socialism, embodied in the young, recognises responsibility as intrinsic. The hoax revelation becomes the climactic moment at which generational conflict crystallises into political philosophy.",
        annotation:
          "Reads the hoax-reveal as a moral test which formally distinguishes the generations' ethical frameworks.",
      },
      {
        paragraph:
          "By the closing telephone call, Priestley has designed his audience to identify with Sheila and Eric. The older Birlings' panic confirms their moral failure; the young Birlings' calm confirms theirs is the worldview equipped for the new society. For a 1945 audience standing on the threshold of the welfare state, generational conflict in the play is not domestic drama but political prophecy — Priestley argues that the country, like the family, must hand its conscience to the young or repeat the catastrophes of the parents.",
        annotation:
          "Conclusion ties generational conflict explicitly to 1945 political moment and to the play's prophetic function.",
      },
    ],
    examinerCommentary:
      'Sustained conceptualised argument; treats generational conflict as a structural and political device, not merely characterisation. Quotation work is verbatim, brief and analysed for grammar and ideology. AO3 contextualisation (1912 Edwardian capitalism vs 1945 welfare-state Britain) is consistently integrated. Grade 9.',
    keyTechniques: [
      'parallelism',
      'monosyllabic diction',
      'contrastive syntax',
      'staging and grouping',
      'choric function',
      'second-person address',
      'structural reveal',
    ],
  },
  {
    id: 'aic-responsibility',
    text: 'An Inspector Calls',
    topic: 'Responsibility (the central theme)',
    question: 'How does Priestley explore the theme of responsibility in An Inspector Calls?',
    grade: 9,
    wordCount: 824,
    thesis:
      "Responsibility is the play's organising principle: Priestley constructs every dramatic device — character, structure, language, staging, even the ringing telephone — to argue that ethical obligation is collective, inescapable and continuous, and that the refusal to recognise it is itself a destructive social ideology.",
    paragraphs: [
      {
        paragraph:
          "Priestley opens the play by ensuring the audience hears the ideology he intends to dismantle. Mr Birling's pre-Inspector monologue insists that 'a man has to mind his own business and look after himself and his own', a creed of self-enclosed responsibility that limits ethical concern to the immediate family. Priestley's choice to give Birling repeated dramatic ironies — about the unsinkable Titanic and impossible war — discredits him before his ideology has finished forming. The audience is therefore taught from the outset that the older capitalist conception of responsibility is intellectually as well as morally bankrupt, preparing them to accept the alternative the Inspector will introduce.",
        annotation:
          'Opens by isolating the ideology to be dismantled; dramatic irony pre-discredits Birling so that his ethics are doomed structurally.',
      },
      {
        paragraph:
          "The Inspector reframes responsibility as a chain rather than a private virtue. By questioning the family 'one person and one line of inquiry at a time', he demonstrates that each individual act of irresponsibility — Birling's sacking, Sheila's complaint, Gerald's affair, Sybil's refusal of charity, Eric's exploitation — combines into Eva's death. Priestley's structural choice to make the interrogations sequential rather than simultaneous embodies the argument: responsibility is not divisible into discrete personal pockets but accumulates into shared social consequence. The dramaturgy itself teaches the audience how guilt actually works in a society.",
        annotation:
          "Connects dramaturgical structure to the play's moral argument — 'accumulates into shared social consequence' is a precise conceptual phrase.",
      },
      {
        paragraph:
          "Priestley uses Sybil to expose how class allows the wealthy to outsource responsibility. Her dismissal of Eva and others as 'girls of that class' uses the deictic 'that' to construct distance, verbally pushing the working class outside her ethical horizon. Her refusal of help to a pregnant young woman, justified by the claim that she 'used the name Birling', is dramatic irony so brutal it becomes structural punishment: her own class snobbery condemns her son. Priestley engineers this moment to demonstrate that capitalist responsibility, restricted to one's own kind, will always eventually devour even those it claims to protect.",
        annotation:
          "Sharp lexical analysis of the deictic 'that'; reads Sybil's hypocrisy as a structurally engineered indictment of class-bounded responsibility.",
      },
      {
        paragraph:
          "The Inspector's final speech distils the play's ethic into a single doctrine. The declaration that 'we are members of one body' grafts a quasi-Pauline biblical metaphor onto a socialist economic argument, while 'we are responsible for each other' deploys the inclusive plural 'we' to draw the audience itself into the moral collective. The juxtaposition of religious and political registers gives socialist responsibility the force of spiritual obligation. Priestley deliberately denies the audience the comfort of treating this as mere political opinion: the play frames responsibility as akin to moral law.",
        annotation:
          "Sophisticated reading of register-mixing (biblical + political) and pronoun work; situates the speech as the play's doctrinal centre.",
      },
      {
        paragraph:
          "Eric's confession 'we did her in alright' shifts responsibility from the singular to the collective grammatically as well as morally. The plural pronoun 'we' refuses individual scapegoating, refusing also the audience the comfort of selecting one villain. Priestley's syntactical insistence on collective subjectivity is a microcosm of his political vision: responsibility is plural by nature. The colloquial 'alright' adds a despairing flatness, suggesting that once true responsibility is faced, theatricality and self-justification both collapse into plain admission.",
        annotation:
          "Pronoun and register analysis again — collective grammar enacts collective ethics; 'alright' read for tonal flatness.",
      },
      {
        paragraph:
          "The play's structural device of the second telephone call ensures that responsibility cannot be discharged simply by waiting out an evening. The reveal that 'a girl has just died' restarts the moral process the older Birlings believed they had escaped, dramatising Priestley's conviction that responsibility has no statute of limitations. The ringing phone becomes a theatrical synecdoche for the ongoing call to ethical action that every audience member, in 1945 and beyond, must answer. Priestley refuses catharsis: the curtain falls on a beginning, not an ending, of accountability.",
        annotation:
          "Ending reads the phone as symbolic synecdoche; refuses catharsis — captures Priestley's didactic intent.",
      },
      {
        paragraph:
          "Priestley therefore makes responsibility not a theme but the play's entire architectural intent. Character is calibrated for it, structure embodies it, language enacts it, staging dramatises it. By denying the older Birlings any genuine moral movement and rewarding the young with insight, the play offers responsibility as both diagnosis of the Edwardian capitalist past and prescription for the post-war collective future the audience itself was being invited to build.",
        annotation:
          "Concludes by elevating responsibility to organising principle — 'architectural intent' anchors the conceptual claim.",
      },
    ],
    examinerCommentary:
      "Genuinely conceptualised top-band response. Treats responsibility as the play's dramatic architecture rather than a topic. Quotation handling is short, verbatim, and analytically rich (deictic 'that', pronoun 'we', biblical register). AO3 contextual integration is purposeful: 1912 Edwardian individualism set against 1945 collectivism. Grade 9.",
    keyTechniques: [
      'dramatic irony',
      'sequential interrogation as structure',
      'deictic reference',
      'biblical metaphor',
      'pronoun analysis',
      'synecdoche',
      'refusal of catharsis',
    ],
  },
  {
    id: 'aic-eva-silence',
    text: 'An Inspector Calls',
    topic: "Eva Smith's silence and significance",
    question:
      'How does Priestley use the absent figure of Eva Smith to convey his ideas in An Inspector Calls?',
    grade: 9,
    wordCount: 802,
    thesis:
      "Eva Smith's absence is Priestley's most radical dramatic decision: by denying the working-class victim a voice, body or even a confirmed identity, he forces the audience to confront how completely capitalism erases the people it consumes — and to recognise that her silence is the play's loudest indictment.",
    paragraphs: [
      {
        paragraph:
          "Priestley's choice to keep Eva Smith permanently offstage is itself a political statement. Every other character speaks, defends themselves, and shapes the audience's perception, while Eva is reduced to a photograph, a name, and the remembered words of those who harmed her. By denying her stage presence, Priestley reproduces in dramatic form exactly what capitalist society does to the working-class woman: she is rendered invisible, framed only by the perspectives of the privileged. The audience's frustration at never seeing her is engineered, designed to make us feel the structural injustice of her erasure rather than merely hear about it.",
        annotation:
          "Identifies the dramatic absence itself as Priestley's central technique — the form of the play enacts its political argument.",
      },
      {
        paragraph:
          "The instability of her name reinforces her erasure. She is variously Eva Smith, Daisy Renton, and the generic 'girl' of Sybil's dismissal. Priestley uses the surnames Smith and Renton — the most common English surname and a name suggesting transactional 'rent' — to suggest she is interchangeable, archetypal, representative of an entire class rather than a singular individual. The Inspector's hint that 'there are millions and millions and millions of Eva Smiths and John Smiths still left with us' uses anaphoric repetition of 'millions' to multiply her into a national working class. Her silence is therefore not empty but populous; it contains every voice capitalism has refused to hear.",
        annotation:
          "Onomastic analysis (Smith/Renton) plus anaphora; reframes Eva's silence as collectively populated rather than absent.",
      },
      {
        paragraph:
          "Priestley uses the photograph as a controlled symbolic device to dramatise how each Birling possesses only a partial Eva. The Inspector shows the picture to one character at a time, refusing to allow the family to see it together. This stagecraft underlines the way the privileged construct private, separate versions of the working-class woman that suit their own narratives — Sheila's jealous rival, Gerald's mistress, Sybil's ungrateful supplicant, Eric's fling. By refusing the audience a glimpse of the photograph, Priestley extends the same logic to us: we, too, are denied the comfort of fixing Eva into a single image, forcing us to grapple with her as a social phenomenon rather than a face.",
        annotation:
          'Brilliant stagecraft analysis: the photograph mechanism dramatises class-bounded perception; audience implicated in the same epistemic limit.',
      },
      {
        paragraph:
          "Her death is described in terms that refuse euphemism. The Inspector's account that she 'burnt her inside out' uses brutal physical detail and plosive consonants to puncture the polite linguistic conventions of the Birling drawing room. Priestley deliberately selects disinfectant — a domestic product associated with cleansing — to make her suicide a black symbol of class inversion: the working-class woman uses a cleaning agent to destroy herself, while the people who treated her like dirt remain physically untouched. Even in death, Eva is forced to perform a kind of self-erasure, her body becoming the receipt for capitalist cruelty.",
        annotation:
          'Phonological detail plus a striking symbolic reading of the disinfectant — turns the suicide method into class symbolism.',
      },
      {
        paragraph:
          "Her silence acquires accusatory force when set against the Birlings' loquacity. The family talk constantly: about wine, weddings, business, themselves. Eva's textual absence creates a structural vacuum that their voices try, and fail, to fill. Priestley uses the asymmetry to dramatise an entire social order in which the wealthy speak endlessly and the workers cannot speak at all. The play's ethical weight depends on this imbalance: every line spoken by a Birling is, in effect, a line stolen from Eva. By the end, the audience hears the Birlings' speech as guilty noise rather than dialogue.",
        annotation:
          'Conceptualised reading of dialogue distribution as political economy — strong AO2 about who gets to speak.',
      },
      {
        paragraph:
          "Finally, Priestley exploits Eva's silence as an unfinished moral demand. The play closes with a telephone announcing that 'a girl has just died' — perhaps Eva, perhaps another, perhaps any of the millions the Inspector invoked. By keeping the identity of this final victim unconfirmed, Priestley universalises Eva, transforming her from one woman into the recurring casualty of capitalism. Her silence is thus permanently re-opened at the curtain, ensuring the audience leaves the theatre haunted rather than reassured. Priestley's most powerful character is the one he refuses to let speak.",
        annotation:
          'Ending elegantly turns silence into open-ended moral demand; the final line lands a memorable conceptualised statement.',
      },
    ],
    examinerCommentary:
      "Outstanding response that turns an apparent absence into the play's central technique. Sustained conceptualised thesis; precise AO2 (onomastics, anaphora, plosives, dialogue distribution); contextualised AO3 (working-class invisibility, capitalism's erasure of women). Quotations are brief, verbatim and analytically interrogated. Grade 9.",
    keyTechniques: [
      'dramatic absence',
      'onomastics',
      'anaphora',
      'symbolic stagecraft (photograph)',
      'plosive phonology',
      'symbolism (disinfectant)',
      'dialogue economy',
      'universalisation',
    ],
  },
]

export default anInspectorCallsEssays
