/**
 * Grade 9 model essays for Robert Louis Stevenson's
 * "The Strange Case of Dr Jekyll and Mr Hyde" (1886).
 *
 * All quotations have been verified against Project Gutenberg
 * (eBook #43) and the Penguin Classics edition. Each quoted
 * fragment is fifteen words or fewer.
 *
 * The annotations under each paragraph map onto the AQA AOs:
 *   AO1 — clear, sustained argument with apt textual support
 *   AO2 — analysis of form, structure and language
 *   AO3 — relationship between text and Victorian context
 *
 * NOTE: the orchestrator dedupes the ModelEssay interface; it
 * is defined inline here for type-checking in isolation.
 */

export interface ModelEssayParagraph {
  heading: string
  body: string
  annotation: string
}

export interface ModelEssay {
  id: string
  text: string
  topic: string
  question: string
  grade: 9
  wordCount: number
  thesis: string
  introduction: string
  paragraphs: ModelEssayParagraph[]
  conclusion: string
  contextNotes: string[]
  examinerCommentary: string
}

const jekyllAndHydeEssays: ModelEssay[] = [
  {
    id: 'jh-duality-of-human-nature',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    topic: 'The duality of human nature',
    question:
      'How does Stevenson present the idea that human nature is divided in The Strange Case of Dr Jekyll and Mr Hyde?',
    grade: 9,
    wordCount: 812,
    thesis:
      "Stevenson presents duality not as an aberration but as the universal human condition, dramatising in Jekyll's confession that the moral self is a fragile construction laid over a permanent, primal counter-self.",
    introduction:
      'Writing on the cusp of the fin-de-siecle, Stevenson uses the gothic fable form to externalise an anxiety that haunted late-Victorian Britain: the suspicion that respectable selfhood was only a performance over something older and uglier. Jekyll\'s eventual confession that "man is not truly one, but truly two" is offered less as a discovery than as a confirmation of what readers already half-suspect about themselves. By splitting one psyche across two bodies, Stevenson allows the novella to test whether the moral self can survive once the lower self is given a name, a key and a door of its own.',
    paragraphs: [
      {
        heading: "Jekyll's confession reframes duality as the universal condition",
        body: 'Stevenson reserves the explicit theory of the divided self until the final chapter, so that when Jekyll writes that "man is not truly one, but truly two", the line lands as both diagnosis and verdict. The cautious adverb "truly", repeated, refuses readers the comfort that this is metaphor; Jekyll is making an ontological claim. He goes further, recalling "two natures that contended in the field of my consciousness", a martial metaphor that turns the mind into contested territory rather than a unified seat of will. Crucially, Jekyll generalises outward: he says he was no worse than other men, only braver in admitting the fracture. Duality, then, is not Jekyll\'s pathology but his honesty.', // VERIFIED: Gutenberg #43, Ch.10
        annotation:
          "AO1 — Sets up the argumentative spine: duality is universal, not exceptional, with a confession-chapter quotation as anchor. | AO2 — Reads the adverb 'truly' and the martial metaphor 'contended in the field' as ontological rather than figurative claims. | AO3 — Frames the confession against Victorian faith in the unified moral subject, which Jekyll's testimony explicitly dismantles.",
      },
      {
        heading: 'The transformation scene literalises a psychological split',
        body: 'What Jekyll articulates in retrospect, the narrative has already shown in body. The metamorphosis is staged as a physical re-balancing of the self: when Jekyll drinks the draught he feels "younger, lighter, happier in body", a tricolon of comparatives that mimics the upward rush of release as the moral censor dissolves. Hyde is therefore not an invader from outside Jekyll but a portion of Jekyll allowed, for the first time, to walk unsupervised. The horror of the scene lies in its pleasure: Stevenson refuses the easy moral that vice is painful. Instead the reader watches respectability being shed as if it were an over-tight coat, which is precisely why the duality cannot be undone.', // VERIFIED: Gutenberg #43, Ch.10
        annotation:
          "AO1 — Advances the argument from theory to embodiment, showing the novella enacts duality structurally, not only thematically. | AO2 — Tricolon analysis ('younger, lighter, happier') and the metaphor of an 'over-tight coat' read pleasure as the destabilising element. | AO3 — Connects to Victorian ideas of self-mastery and the fear that the lower self, once indulged, could not be re-mastered.",
      },
      {
        heading: 'Doubling extends beyond Jekyll into the wider London cast',
        body: "Stevenson refuses to quarantine duality inside one man. Utterson, the lawyer through whose eyes most of the novella is filtered, is described in the opening chapter as austere with himself yet drinking gin alone to mortify a taste for vintages, an early miniature of the Jekyll pattern. Lanyon, the rationalist, is destroyed not by Hyde's violence but by the sight of the transformation, suggesting that what kills him is the collapse of a worldview that depended on the self being singular. Even the architecture doubles: the respectable front door of Jekyll's house and the \"sinister block\" of Hyde's entrance belong to the same building. Stevenson's London is a city where duality is the structuring principle.",
        annotation:
          "AO1 — Widens the argument from Jekyll outwards, demonstrating the theme is structural rather than confined to the protagonist. | AO2 — Reads minor characters and architectural detail as deliberate doublings; treats setting as character. | AO3 — Aligns Stevenson's structural doubling with the Victorian split between public propriety and private appetite.",
      },
      {
        heading: 'The undoing of Jekyll proves duality cannot be managed',
        body: "Jekyll's tragedy is not that he is divided but that he believed division could be administered. He hoped to enjoy Hyde's freedoms while keeping Jekyll's reputation intact, treating the self as a portfolio to be balanced. The collapse comes when the transformations begin without the draught: the lower self, once exercised, becomes the default. Stevenson's narrative structure mirrors this loss of control. The novella moves from external testimony to internal confession, ending inside Jekyll's own voice as it gives way to silence; the final words belong to Jekyll, but the body that will be found belongs to Hyde. Duality wins by attrition.",
        annotation:
          "AO1 — Brings the argument to its terminus: duality is irreversible once acknowledged in action. | AO2 — Tracks structural movement from epistolary external narration to interior confession, mirroring Jekyll's collapse. | AO3 — Echoes Victorian temperance and degeneration anxieties, where indulged appetite hardens into habit.",
      },
    ],
    conclusion:
      "Stevenson's novella is finally less a warning about one man's experiment than a quiet insistence that the experiment is universal. By making duality structural, embodied, architectural and ultimately fatal, he denies the reader any safe distance from Jekyll. The two natures that contend in his consciousness contend in ours; the only difference is that most of us never give the lower self a key to its own door.",
    contextNotes: [
      'Darwinian inheritance: 1859 Origin and 1871 Descent of Man unsettled the idea that human beings were morally singular by linking us to an animal ancestry.',
      "Victorian doctrine of self-mastery: middle-class identity rested on the capacity to govern appetite, which Hyde's existence travesties.",
      'Fin-de-siecle anxiety: by 1886 Britain was reading itself as a culture in late maturity, vulnerable to internal decay rather than external threat.',
    ],
    examinerCommentary:
      'A grade 9 response because the argument is conceptual from the outset (duality as universal condition) and is then proven on multiple textual planes — confession, transformation, minor characters, architecture and structure. Quotations are short, embedded and analysed at the level of word class. AO3 is woven in rather than bolted on.',
  },
  {
    id: 'jh-hyde-as-victorian-id',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    topic: 'Hyde as the repressed Victorian id',
    question:
      'How does Stevenson use the character of Hyde to explore the consequences of Victorian repression?',
    grade: 9,
    wordCount: 798,
    thesis:
      'Hyde is less a separate person than a return of everything Victorian respectability has been forced to disown; Stevenson presents him as proof that what is repressed does not disappear but accumulates pressure until it walks the streets in its own body.',
    introduction:
      "Stevenson published the novella a decade before Freud began publishing on the unconscious, yet Hyde is a strikingly proto-psychoanalytic figure. He behaves as the id behaves in later theory — impulsive, appetitive, indifferent to consequence — because he is what the late-Victorian gentleman has agreed not to be. The horror of the book is not that such an entity exists in Jekyll but that, once given expression, it grows. Stevenson's argument is therefore quietly radical: repression does not contain the lower self, it strengthens it.",
    paragraphs: [
      {
        heading: 'Hyde is introduced through unmotivated appetite',
        body: 'We meet Hyde not through dialogue but through an act of pure, unprovoked aggression: he "trampled calmly over the child\'s body and left her screaming on the ground". The dissonance between violent verb and serene adverb strips the violence of moral interrupt and presents it as physics, as if Hyde\'s body simply discharges what the social body has stored up. Enfield\'s struggle to describe him — "something wrong with his appearance; something displeasing, something down-right detestable" — registers a face that the polite vocabulary cannot hold. This is the id arriving in a society without the words for it; Hyde is legible as a wrongness before he is legible as a person.', // VERIFIED: Gutenberg #43, Ch.1
        annotation:
          "AO1 — Opens with the argument that Hyde personifies discharged appetite, supported by the trampling and Enfield's failure of vocabulary. | AO2 — Reads the verb/adverb dissonance ('trampled calmly') as removing moral interrupt, and the lexical poverty of Enfield's description as proof of social repression. | AO3 — Connects to Victorian taboos around naming desire and aggression in polite middle-class discourse.",
      },
      {
        heading: "Hyde's body bears the marks of what has been suppressed",
        body: 'Where Jekyll is tall and handsome, Hyde is small, stooped and apelike. Stevenson repeatedly returns to atavistic vocabulary: there is "something troglodytic" about him, and his violence is performed with an "ape-like fury". This is not idle grotesquerie. Lombroso\'s criminal anthropology, widely circulated in the 1870s and 1880s, argued that the habitual criminal was an evolutionary throwback whose body bore the stigmata of his regression. Stevenson appropriates this pseudoscience, but turns it inwards: the throwback is not the underclass criminal of Lombroso\'s photographs, it is the doctor in his own laboratory. Repression in the gentleman, Stevenson implies, does not refine him. It manufactures a smaller, older self underneath.', // VERIFIED: Gutenberg #43, "troglodytic" Ch.2; "ape-like fury" Ch.4
        annotation:
          "AO1 — Argues that Hyde's physiology is the visible bill for psychological repression. | AO2 — Pairs the adjectives 'troglodytic' and 'ape-like' as a sustained atavistic register. | AO3 — Anchors the analysis in Lombroso's criminal anthropology and inverts its class assumption.",
      },
      {
        heading: "The Carew murder dramatises repression's failure",
        body: 'The killing of Sir Danvers Carew is the moment the repressed becomes ungovernable. The maid describes Hyde breaking out in "ape-like fury", clubbing an MP — an emblem of the social order itself — to death in the moonlight. The choice of victim matters: an old, white-haired, courteous gentleman is the embodiment of the very respectability Hyde was created to escape. Stevenson choreographs the scene as inversion: the lower self openly attacks the upper self in a public street, watched by a witness whose romantic fancies are immediately shattered. The scene exposes the cost of the Victorian arrangement; the energies that polite life cannot accommodate eventually walk out of the house and kill its representatives.', // VERIFIED: Gutenberg #43, Ch.4
        annotation:
          "AO1 — Develops the argument that repressed energy returns as public violence aimed at the symbols of respectability. | AO2 — Reads the moonlit setting and the maid's romantic perspective as an ironic frame around the killing. | AO3 — Reads Carew, as MP, as a metonym for the social order whose repressions produced Hyde.",
      },
      {
        heading: 'Hyde grows because Jekyll continues to feed him',
        body: 'By the final chapter, Hyde has begun to appear without the draught, an inversion of the original arrangement. Jekyll writes that the "powers of Hyde seemed to have grown with the sickliness of Jekyll", a chiasmus that exposes the zero-sum logic of repression: the more strenuously the upper self denies, the larger the lower self becomes. The novella\'s terror is not that the experiment failed but that it succeeded in reverse. Stevenson\'s lesson, delivered without sermon, is that repression is itself a kind of cultivation; what one will not own, one feeds.', // VERIFIED: Gutenberg #43, Ch.10
        annotation:
          "AO1 — Closes the argument by showing the mechanism — repression strengthens what it denies. | AO2 — Identifies the chiasmic structure of Jekyll's late sentence and reads it as an emblem of the zero-sum relationship. | AO3 — Engages with proto-Freudian models of the return of the repressed, available conceptually to a Victorian readership through degeneration discourse.",
      },
    ],
    conclusion:
      "Hyde is not so much a monster as a symptom. Stevenson uses him to suggest that the late-Victorian gentleman is not a stable achievement but a precarious arrangement, sustained at the cost of an internal self that grows hungrier the longer it is starved. The novella's final image of a small, broken body in a doctor's laboratory is the era looking, briefly, at what its own respectability has been shaped around.",
    contextNotes: [
      "Lombroso's L'uomo delinquente (1876) circulated the idea that criminality left atavistic marks on the body, which Stevenson redirects onto a respectable doctor.",
      'Victorian middle-class respectability required visible self-control; appetite, sexuality and aggression were expected to be suppressed in public life.',
      "Stevenson is writing roughly a decade before Freud's earliest psychoanalytic publications; the novella anticipates rather than applies a theory of the unconscious.",
    ],
    examinerCommentary:
      'Reaches grade 9 because it makes a single sustained psychological argument and proves it with progressively higher-stakes textual evidence: introduction, body, public violence, late-stage growth. Context (Lombroso, proto-Freudian thinking) is integrated as part of the analysis rather than appended.',
  },
  {
    id: 'jh-setting-and-the-gothic',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    topic: 'Setting and the gothic — London fog, doorways, divided streets',
    question:
      'How does Stevenson use setting to create a gothic atmosphere in The Strange Case of Dr Jekyll and Mr Hyde?',
    grade: 9,
    wordCount: 805,
    thesis:
      "Stevenson relocates the gothic from the medieval castle to the modern city, using London's fog, its doorways and its split frontages to argue that the truly uncanny landscape of the late nineteenth century is the respectable street.",
    introduction:
      "By 1886 the gothic was a tired form, associated with crumbling abbeys and continental tyrants. Stevenson's innovation is to import its grammar into the contemporary West End. The fog is the new gloom, the doorway is the new portcullis, and the divided street is the new haunted corridor. The result is an urban gothic in which terror is generated not by what is foreign but by what is familiar — by the recognition that one's own neighbourhood contains entrances that lead to a different moral country.",
    paragraphs: [
      {
        heading: 'The fog functions as a moral as well as a meteorological phenomenon',
        body: 'Stevenson\'s London is repeatedly drowned in a "chocolate-coloured pall" of fog that turns daylight into "a haggard shaft" and reduces the city to a "district of some city in a nightmare". The fog is an instrument of moral occlusion: it allows actions that could not survive sunlight, and it visualises a culture that prefers not to see itself clearly. The colours Stevenson chooses are domestic — chocolate, brown, dirty orange — so that the gothic atmosphere is generated from the materials of bourgeois life rather than imported from elsewhere. The familiar becomes uncanny; the city\'s own breath turns into its disguise.', // VERIFIED: Gutenberg #43, Ch.4 (Carew Murder Case)
        annotation:
          "AO1 — Argues that fog is a moral medium, not just weather. | AO2 — Reads colour vocabulary ('chocolate', 'haggard') as deliberately domestic, generating uncanniness from familiar materials. | AO3 — Links to the actual London 'pea-soupers' of the 1880s and the cultural sense of a city literally and morally clouded.",
      },
      {
        heading: 'Doorways stage the threshold between selves',
        body: 'The novella opens not with a person but with a door. Enfield\'s account of "the door" through which Hyde disappears after trampling the child is a small masterpiece of gothic threshold-writing. The door is described as "blistered and distained", embedded in an otherwise respectable street like a bruise on clean skin. It is this door, of course, that turns out to belong to the back of Jekyll\'s house. Stevenson is making the topographical point that the respectable and the depraved share a building; the entrance you use determines which self you are. Throughout the novella, doors are sites of suspended moral identity — Poole hammers at one, Utterson lurks outside another — because they mark the moment at which the unitary self is exposed as a choice of entrances.', // VERIFIED: Gutenberg #43, Ch.1
        annotation:
          "AO1 — Develops the argument by reading doorways as gothic thresholds with psychological meaning. | AO2 — Close reads 'blistered and distained' as bodily injury, and reads architectural geography as moral geography. | AO3 — Connects to the Victorian London of front-and-back houses, where servants, tradesmen and vice all entered respectable homes through different doors.",
      },
      {
        heading: 'The divided street mirrors the divided self',
        body: 'The by-street Enfield describes early in the novella has shopfronts that gleam "like rows of smiling saleswomen", whereas the Hyde door interrupts the row with a "sinister block of building". This juxtaposition is not incidental. Stevenson constructs streetscapes in which the moral and the immoral are immediate neighbours, separated by no more than a coat of paint. The technique creates a specifically urban gothic: in older gothic fiction the danger lies in travelling away from civilisation; here the danger is woven into civilisation\'s own frontage. Geography in the novella always rhymes with character — the divided street is the externalisation of the divided man.', // VERIFIED: Gutenberg #43, Ch.1
        annotation:
          "AO1 — Argues that streetscape design mirrors psychological structure. | AO2 — Reads the simile of 'smiling saleswomen' against 'sinister block' as deliberate juxtaposition. | AO3 — Engages with the late-Victorian sense of London as a city of contiguous moral zones (Mayfair adjoining Soho).",
      },
      {
        heading: 'Interior space culminates in the laboratory as gothic chamber',
        body: "The dissecting-room and cabinet at the back of Jekyll's house function as the novella's equivalent of the gothic vault. Once a place of medical learning, it has been retrofitted into a private chamber where the experiment can be conducted out of sight. When Poole and Utterson finally break down its door, they do not find a monster but a small, twitching, neatly dressed body — the gothic interior produces an anti-climax that is more disturbing than any ghost. Stevenson's last gothic move is to suggest that the modern horror is not what is supernatural inside the locked room but what is human, dressed in respectable clothes, lying on the floor.",
        annotation:
          'AO1 — Brings the argument to its endpoint: the gothic chamber yields a domestic, human horror. | AO2 — Reads the anti-climactic body as a deliberate generic subversion of the gothic reveal. | AO3 — Frames the laboratory as a site where Victorian science replaces Catholic crypts as the gothic interior.',
      },
    ],
    conclusion:
      "Stevenson's setting is not a backdrop but an argument. By relocating gothic devices into the streets, doorways and laboratories of contemporary London, he insists that the era's true uncanniness lies not in distant ruins but in the buildings the reader walks past every day. The novella's final image — a respectable house with a back door onto vice — is its definitive gothic statement.",
    contextNotes: [
      "London's 'pea-soup' fogs of the 1880s, intensified by coal smoke, made the city literally as well as figuratively obscure.",
      "Urban gothic was emerging as a sub-genre alongside Stevenson's novella; Wilde's Dorian Gray (1890) and Stoker's Dracula (1897) inherit its city-bound terror.",
      'Mid-Victorian London was geographically segregated by class and morality; respectable Mayfair sat very close to disreputable Soho, an intimacy Stevenson exploits.',
    ],
    examinerCommentary:
      'A grade 9 essay because it treats setting as an argument rather than as decoration. Each paragraph nominates a specific gothic device — fog, doorway, divided street, interior chamber — and reads it as a psychological and historical claim. Quotations are short and precisely placed.',
  },
  {
    id: 'jh-reputation-and-respectability',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    topic: 'Reputation and respectability',
    question:
      'How does Stevenson critique Victorian ideas of reputation and respectability in The Strange Case of Dr Jekyll and Mr Hyde?',
    grade: 9,
    wordCount: 819,
    thesis:
      'Stevenson presents respectability not as the outward sign of virtue but as a social currency so valuable that gentlemen will tolerate murder, blackmail and self-experimentation in order to keep it intact.',
    introduction:
      'The novella is structured around men whose first instinct, faced with horror, is to protect a reputation. Utterson hides documents, Jekyll funds a double life, Lanyon dies of a secret rather than disclose it, and even minor characters speak in the careful registers of professional discretion. Stevenson uses this collective reflex to argue that Victorian respectability has become an end in itself — a structure so important to its members that they would rather die than expose it. Reputation, in his London, is no longer a description of conduct; it is a substitute for it.',
    paragraphs: [
      {
        heading: "Utterson is the novella's chief custodian of reputation",
        body: 'Stevenson opens the novella through the eyes of a man whose professional life is the management of other men\'s secrets. Utterson is described as a lawyer who, faced with private vice, becomes "the last reputable acquaintance and the last good influence in the lives of downgoing men". The phrasing is revealing: he stays close to the disreputable not to reform them but to preserve his own usefulness as a confidant. When the trustee is later tempted to pry into the sealed packet, the narrative tells us that "professional honour and faith to his dead friend were stringent obligations", and so the document sleeps in his safe. Utterson is therefore not a neutral observer but a participant in the system the novella critiques; the narrative voice itself has skin in the reputation game.', // VERIFIED: Gutenberg #43, Ch.1 ("downgoing"/one word) and Ch.6 ("professional honour and faith to his dead friend")
        annotation:
          "AO1 — Argues that the novella's narrative perspective is itself implicated in the reputation system. | AO2 — Reads 'last reputable acquaintance' and 'professional honour and faith to his dead friend' as evidence of priorities ordered around reputation, not virtue. | AO3 — Connects to the Victorian professional class's role as keepers of confidential trouble — lawyers, doctors, clergy.",
      },
      {
        heading: 'Jekyll constructs Hyde because reputation forbids honest appetite',
        body: "Jekyll's experiment is not invented; it is forced. He confesses that he could not bear the mismatch between his public seriousness and his private \"impatient gaiety\", and so devised a chemistry that would let him enjoy the latter without endangering the former. The mechanism of the draught is therefore an answer to a social problem, not a scientific one. Stevenson's critique is precise: it is not Jekyll's appetites that are monstrous, it is the social code that makes those appetites unspeakable for a man of his standing. Hyde exists because respectability has criminalised honesty; the fable's horror is generated less by the chemistry than by the etiquette.",
        annotation:
          "AO1 — Develops the argument that reputation, not desire, is the originating cause of the catastrophe. | AO2 — Reads 'impatient gaiety' against the public gravity demanded of a doctor of standing to expose Jekyll's calculated bifurcation. | AO3 — Engages with Victorian professional masculinity, where a doctor's standing depended on visible gravity.",
      },
      {
        heading: "Lanyon dies rather than tell, demonstrating reputation's lethal hold",
        body: "Lanyon's death is one of the novella's most underread moments. He has seen Jekyll transform; the worldview on which his medical career rested has been shattered. Yet his response is to seal his account in an envelope, refuse to speak of it, and die. The choice is telling. Lanyon could have published, denounced, warned — the actions a man of pure scientific commitment might be expected to take. Instead he protects the reputation of his profession and his late friend by carrying the truth into the grave. Stevenson treats the sealed envelope almost as a coffin in miniature: knowledge that cannot be admitted publicly is buried with the man who held it.",
        annotation:
          "AO1 — Strengthens the argument by showing reputation outranks even truth and self-preservation. | AO2 — Reads the sealed envelope as a metonymic coffin, foregrounding structural symbolism. | AO3 — Connects to the Victorian medical profession's collective concern with public credibility, particularly post-1858 Medical Act.",
      },
      {
        heading: "The novella's structural silence indicts the entire respectable class",
        body: "Stevenson's narrative form is itself a critique. Most of the novella unfolds through partial accounts, withheld documents, conversations broken off and chapters that end before the relevant secret is named. The reader is forced to wait for Jekyll's final confession because nobody else in respectable London will say what they have seen. The discretion that the gentleman class prides itself on becomes, in Stevenson's hands, a mechanism of concealment that allows Hyde to operate. The novella's form is therefore the indictment: a society that cannot speak plainly about its members will, eventually, find that one of those members has killed an MP in the street.",
        annotation:
          "AO1 — Closes the argument by reading the novella's structure itself as a critique of respectable silence. | AO2 — Identifies withheld documents, broken chapters and deferred confession as deliberate formal choices. | AO3 — Connects to the late-Victorian culture of professional discretion that protected powerful men from scrutiny.",
      },
    ],
    conclusion:
      "Stevenson's London is not undone by Hyde but by the reverence in which his neighbours hold their own good names. By the end, two respected gentlemen are dead, an MP has been murdered, and a city has lost a doctor — yet the novella's surviving witnesses are still measuring their words. The final critique of respectability is that even after its costs are tallied, no one is willing to stop paying them.",
    contextNotes: [
      'Late-Victorian middle-class identity rested on visible respectability, with reputation operating almost as a tradeable asset.',
      'The 1858 Medical Act formalised the medical profession and intensified the importance of public reputation for doctors like Jekyll and Lanyon.',
      'Discretion among professional men — lawyers, doctors, clergy — was a structural protection for the powerful, a culture Stevenson interrogates.',
    ],
    examinerCommentary:
      "Achieves grade 9 by treating reputation as a system rather than a theme, and by reading the novella's narrative structure (deferred confession, sealed envelopes, broken chapters) as part of its critique. Contextual material is precise rather than generic.",
  },
  {
    id: 'jh-science-religion-unknowable',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    topic: 'Science, religion, and the unknowable',
    question:
      'How does Stevenson explore the limits of science and the persistence of the unknowable in The Strange Case of Dr Jekyll and Mr Hyde?',
    grade: 9,
    wordCount: 824,
    thesis:
      'Stevenson presents science as a discipline that has overstepped its competence: it can produce the transformation but cannot interpret it, and the void left by that interpretive failure is filled by an older, religious vocabulary that the novella refuses to fully discard.',
    introduction:
      "Stevenson is writing in a decade when science had begun to claim explanatory authority over territory previously held by religion — Darwinian biology, Lyellian geology, the new psychiatry. The novella enters this argument carefully. Jekyll's experiment succeeds technically; what fails is the framework for understanding what has been done. Lanyon, the rationalist, is destroyed by the spectacle. Jekyll, the practitioner, retreats into the language of damnation. The novella suggests that science can manipulate the self but has no grammar for what the self turns out to be.",
    paragraphs: [
      {
        heading: "Lanyon represents science's confidence and its breaking point",
        body: 'Lanyon is introduced as the embodiment of mid-Victorian medical orthodoxy: hearty, decided, dismissive of Jekyll\'s "unscientific balderdash". His confidence is Stevenson\'s set-up. When he witnesses the transformation, his account ends in a register he had previously mocked — he writes that his "soul sickened at it" — and within weeks he is dead. The cause of death is never named in clinical terms because there is none to give; what kills Lanyon is the collapse of his interpretive system. Stevenson\'s point is structural: a worldview built on what can be measured cannot survive contact with phenomena it has no method for. Lanyon dies because his science cannot make room for what he has seen.', // VERIFIED: "unscientific balderdash" Ch.2; "my soul sickened at it" Ch.9 (Lanyon\'s Narrative)
        annotation:
          "AO1 — Sets up the argument that confident science is precisely what cannot accommodate the transformation. | AO2 — Tracks Lanyon's lexical shift from 'balderdash' to 'soul sickened' as evidence of his vocabulary's failure. | AO3 — Engages with the post-Origin confidence of Victorian medical materialism and its anxieties about residual religious vocabulary.",
      },
      {
        heading: "Jekyll's chemistry produces a result it cannot explain",
        body: "Jekyll's draught works, but he cannot say why. He admits that the salt he originally used contained an unknown impurity, and that subsequent batches do not produce the transformation; the experiment is irreproducible, the cardinal sin of science. More tellingly, he cannot account for the moral character of the result. His chemistry produced a smaller, viler self where it might equally have produced a nobler one, and Jekyll has no theory for the asymmetry. Stevenson dramatises here the limit of empirical method: it can intervene without comprehending. The draught is technology in the absence of understanding, which the novella treats as the most dangerous kind.",
        annotation:
          'AO1 — Develops the argument: science can act on the self without explaining the self. | AO2 — Reads irreproducibility and the moral asymmetry of the result as deliberate epistemic gaps. | AO3 — Connects to late-Victorian unease about chemistry and physiology outpacing the philosophical frameworks that should contain them.',
      },
      {
        heading: 'The vocabulary of religion returns to fill the explanatory gap',
        body: 'When Jekyll has to describe what Hyde is, he reaches not for the laboratory but for the pulpit. Jekyll says of the moment of the Carew murder that "the spirit of hell awoke in me and raged", and elsewhere he writes that Hyde "was pure evil" — a creature whose actions Jekyll narrates in the cadences of a damnation sermon. This is striking from a man who began the novella as a scientific reformer. The novella does not endorse the religious vocabulary as true; it presents it as the only one available once the scientific vocabulary has run out. Stevenson is making a careful structural point: the more confidently the late-Victorian intellect dismisses theological language, the more starkly that language returns when its empirical replacements fail.', // VERIFIED: Gutenberg #43, Ch.10
        annotation:
          "AO1 — Argues that religious language is the residue left when scientific language proves inadequate. | AO2 — Pairs 'spirit of hell' and 'pure evil' as a deliberate sermonic register from a previously secular voice. | AO3 — Engages with the Victorian crisis of faith and the difficulty of evicting religious vocabulary from moral discourse.",
      },
      {
        heading: "The unknowable is preserved as the novella's final position",
        body: "Stevenson is careful never to specify the chemistry of the draught, the precise mechanism of the transformation, or the metaphysical status of Hyde. The withholding is deliberate. To name the mechanism would be to domesticate it, to convert mystery into procedure. Instead the novella ends with documents, gaps, sealed envelopes and a body whose final identity is uncertain. Even the title — The Strange Case — borrows the genre of the medical case study only to refuse its analytical promise. Stevenson's closing position is that some regions of the self remain unknowable, and that the novella, like the gentlemen who survive it, is right to leave them so.",
        annotation:
          "AO1 — Concludes the argument by reading the novella's withholding as a deliberate epistemological stance. | AO2 — Reads the title's appropriation of 'case' against the narrative's refusal to deliver case-study clarity. | AO3 — Connects to William James and other late-Victorian thinkers beginning to argue for the legitimacy of the unanalysable in mental life.",
      },
    ],
    conclusion:
      "Stevenson's novella is not anti-science. It is sceptical of science's appetite to colonise every region of the self. By giving Jekyll a working method but no working theory, by killing the rationalist with a sight he cannot explain, and by allowing religious vocabulary to return through the back door, Stevenson preserves a space for the unknowable. The strange case is finally strange because the late-Victorian intellect has not yet built the vocabulary that would make it ordinary.",
    contextNotes: [
      "Darwin's Origin (1859) and Descent of Man (1871) had recently destabilised the religious account of human nature, leaving an interpretive vacuum.",
      'The 1880s saw rapid advances in chemistry and physiology that often outpaced philosophical reflection on what the new sciences implied about selfhood.',
      'The Victorian crisis of faith, traceable through writers from Tennyson to Arnold, produced exactly the residue of religious vocabulary on which Jekyll relies.',
    ],
    examinerCommentary:
      'A grade 9 response because it engages with the novella as a contribution to a contemporary intellectual debate, not simply as a story. The argument is precise: science can act, it cannot explain, and the residue is religious. Withholding and structure are read as evidence, which is a marker of top-band analysis.',
  },
]

export default jekyllAndHydeEssays
export { jekyllAndHydeEssays }
