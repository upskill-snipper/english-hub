/**
 * A Christmas Carol - Grade 9 Model Essays
 * ----------------------------------------
 * Five fully-annotated, exam-ready Grade 9 responses for AQA-style 19th-century
 * prose questions on A Christmas Carol. Each essay runs ~700-900 words and is
 * structured paragraph-by-paragraph so a marker can see exactly why the
 * paragraph hits Level 6 (AO1 conceptual / AO2 analytical / AO3 contextual).
 *
 * Quotation policy
 *  - All quotations are taken from the Project Gutenberg public-domain text of
 *    A Christmas Carol (1843, Chapman & Hall).
 *  - Each direct quotation is kept ≤ 15 words for fair-use habit, even though
 *    the text is public domain.
 *  - Zero fabricated lines: if it is in quotation marks here, it is in Dickens.
 *
 * The ModelEssay interface is defined inline. Other model-essay files in this
 * folder (e.g. macbeth.ts) re-declare the same shape; the orchestrator that
 * loads them is expected to dedupe at the type layer.
 */

/* ─── Types ───────────────────────────────────────────────── */

export interface EssayParagraph {
  /** e.g. "Introduction", "Body 1 - Stave 1: solitary opening", "Conclusion" */
  label: string
  /** The full paragraph text as it would appear in an exam answer. */
  text: string
  /**
   * Annotation that explains *why* the paragraph works at Grade 9.
   * Plain English, suitable for a teacher annotation margin.
   */
  annotation: string
  /** Which Assessment Objectives the annotation chiefly evidences. */
  aoFocus: Array<'AO1' | 'AO2' | 'AO3' | 'AO4'>
}

export interface ModelEssay {
  /** Stable slug, e.g. "scrooge-transformation". */
  id: string
  /** Display title shown above the essay. */
  title: string
  /** The exam-style question the essay answers. */
  question: string
  /** Grade band - every essay in this file is a Grade 9 exemplar. */
  grade: 9
  /** Approximate finished word count (within ±20). */
  wordCount: number
  /**
   * The thesis sentence pulled out for quick scanning. Should match the
   * thesis embedded in the introduction paragraph.
   */
  thesis: string
  /** Ordered paragraphs: intro, 4-5 body paragraphs, conclusion. */
  paragraphs: EssayParagraph[]
  /** Short marker-style overview of why this hits Grade 9 overall. */
  examinerCommentary: string
}

/* ─── Essays ──────────────────────────────────────────────── */

export const aChristmasCarolModelEssays: ModelEssay[] = [
  /* ============================================================= *
   * 1. Scrooge's transformation
   * ============================================================= */
  {
    id: 'scrooge-transformation',
    title: "Scrooge's Transformation",
    question: 'How does Dickens present the transformation of Scrooge in A Christmas Carol?',
    grade: 9,
    wordCount: 820,
    thesis:
      "Dickens stages Scrooge's transformation as a deliberately structured moral pilgrimage, using the novella's five-stave architecture and the symbolic logic of the supernatural to argue that even the most fossilised individualist can - and must - be reformed by empathy.",
    paragraphs: [
      {
        label: 'Introduction',
        text: "Dickens does not merely describe Scrooge's change of heart; he engineers it. A Christmas Carol is structured as a five-stave secular hymn in which the protagonist is moved, deliberately and progressively, from miserly isolation to communal generosity. By framing the narrative around the supernatural visitations of Marley and the three spirits, Dickens stages Scrooge's transformation as a moral pilgrimage that mirrors the conversion narratives familiar to his Victorian Christian readership. Crucially, the change is presented not as a private epiphany but as a social imperative: Dickens, writing in the wake of the 1843 Parliamentary Report on child labour, uses Scrooge as a synecdoche for the wealthy classes, arguing that even the most fossilised individualist can - and must - be reformed by empathy.",
        annotation:
          "Confidence and conceptual control from the first sentence. The thesis is layered (structural, generic, contextual) rather than a simple summary, which signals AO1 'critical, exploratory' response. The reference to the 1843 Report is integrated, not decorative, hitting AO3.",
        aoFocus: ['AO1', 'AO3'],
      },
      {
        label: 'Body 1 - Stave 1: the unredeemed self',
        // VERIFIED: Project Gutenberg #46, Stave 1 - "covetous, old sinner!" with comma after "covetous"
        text: 'In the opening stave Dickens constructs Scrooge as a figure almost beyond reclamation. The narrator\'s notorious asyndetic list - "squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner" - accumulates five aggressive present participles before the damning adjective "covetous", grammatically denying Scrooge any rest and suggesting his greed is not an action but a continuous state of being. The simile "solitary as an oyster" is doubly damning: it isolates Scrooge socially while hinting, through the oyster\'s hidden pearl, that something valuable lies sealed inside him. When asked to give to charity, his retort that the poor should "decrease the surplus population" weaponises the language of Malthus\'s 1798 Essay on Population, allowing Dickens to skewer the pseudo-scientific economic rationalism that allowed his middle-class readers to justify indifference to suffering.',
        annotation:
          "Quotation-led analysis with embedded grammar (asyndetic listing, present participles) - pure AO2. The 'pearl' reading of the oyster simile is an exploratory secondary interpretation, the hallmark of Level 6. The Malthus reference is precise rather than vague.",
        aoFocus: ['AO2', 'AO3'],
      },
      {
        label: 'Body 2 - Marley as catalyst',
        text: "Marley's appearance is the structural hinge that makes transformation conceivable. The chains he drags - forged \"link by link, and yard by yard\" - are an externalised metaphor for the spiritual cost of a life spent in counting-house transactions, and the polysyndetic rhythm enacts the slow accumulation of guilt. Marley's lament that \"Mankind was my business\" performs a semantic reversal of Scrooge's earlier insistence that business is his only concern. Dickens forces the noun 'business' to carry two meanings simultaneously - commerce and moral duty - exposing how capitalist vocabulary has colonised the ethical sphere. Marley does not threaten Scrooge with hell; he threatens him with the ordinary horror of having squandered a chance to help. For a readership steeped in evangelical Christianity, this redefinition of damnation as missed neighbourly duty is rhetorically devastating.",
        annotation:
          "Sophisticated AO2: the 'semantic reversal' point shows the candidate is reading at the level of word-class and discourse, not just imagery. The contextual move (evangelical readership) is integrated into the analysis rather than dropped in.",
        aoFocus: ['AO2', 'AO3'],
      },
      {
        label: 'Body 3 - The Spirits as graduated tutors',
        // VERIFIED: Project Gutenberg #46, Stave 2 - Fan tells Scrooge he "was left here all alone" (the boy is also described as "a solitary child, neglected by his friends")
        text: 'The three spirits function as a graduated tutorial in empathy. The Ghost of Christmas Past works inwardly, retrieving the schoolboy Scrooge "left here all alone" to expose the wound from which his miserliness grew - a Romantic, almost Wordsworthian, insistence that the child is father of the man. The Ghost of Christmas Present works outwardly, lifting his robe to reveal Ignorance and Want, twin allegorical children whose appearance Dickens borrowed directly from the iconography of contemporary social-reform pamphlets. The Ghost of Christmas Yet to Come works terminally, silent and shrouded, forcing Scrooge to read his own name on a neglected gravestone. The triadic structure mirrors the Christian Trinity but is repurposed for civic morality: Dickens secularises redemption so that even agnostic readers cannot dismiss the call to action.',
        annotation:
          "Conceptual AO1 reading of structure (triad / Trinity / secularised redemption) plus precise AO3 (Ignorance and Want as iconography of reform pamphlets). The candidate reads the spirits as a designed pedagogical sequence - exactly the kind of 'conceptualised' response examiners reward.",
        aoFocus: ['AO1', 'AO2', 'AO3'],
      },
      {
        label: 'Body 4 - Stave 5: the reformed self',
        text: 'The final stave is deliberately giddy in tone. Scrooge declares himself "as light as a feather" and "as happy as an angel", and the comic similes mark a complete inversion of the iron-cold imagery of Stave 1. Dickens does not merely tell us Scrooge is changed; he proves it through verbs of action - Scrooge raises Bob\'s salary, sends the prize turkey, attends Fred\'s party. The pledge to "honour Christmas in my heart, and try to keep it all the year" is significant for the modal verb \'try\': Dickens refuses an easy, complete sanctification, instead modelling reform as an ongoing practice. This is a politically shrewd choice, suggesting that his middle-class readers, too, can begin imperfectly without being paralysed by the scale of inequality outside their windows.',
        annotation:
          "The close reading of the modal 'try' is the kind of micro-textual observation that separates Grade 8 from Grade 9. Linking it to Dickens's rhetorical strategy towards his readership shows authorial intent (AO1) plus context (AO3) plus method (AO2) in one move.",
        aoFocus: ['AO1', 'AO2', 'AO3'],
      },
      {
        label: 'Conclusion',
        text: "Scrooge's transformation, then, is not a sentimental conversion but a carefully engineered argument. By tying personal moral change to the novella's five-part structure, by routing it through a supernatural machinery that Victorian readers would recognise as quasi-religious, and by ending with an imperfect, ongoing pledge rather than a perfected saint, Dickens builds a transformation that is both emotionally cathartic and politically usable. The novella's lasting power lies precisely in this fusion: Scrooge changes so that the reader, closing the book, will feel obliged to change too.",
        annotation:
          "A genuine conclusion, not a recap: it returns to the thesis, names the rhetorical mechanism (transformation engineered to provoke reader change), and ends on the novella's afterlife. Tonally controlled, conceptually closed.",
        aoFocus: ['AO1'],
      },
    ],
    examinerCommentary:
      "Level 6 / Grade 9. Conceptualised thesis sustained throughout, integrated context, precise terminology, multiple alternative interpretations (e.g. the 'pearl' reading), and consistent tracking of authorial method. SPaG is sophisticated.",
  },

  /* ============================================================= *
   * 2. Poverty and social responsibility
   * ============================================================= */
  {
    id: 'poverty-social-responsibility',
    title: 'Poverty and Social Responsibility',
    question:
      'How does Dickens explore ideas about poverty and social responsibility in A Christmas Carol?',
    grade: 9,
    wordCount: 805,
    thesis:
      "Dickens transforms the novella into a polemic against laissez-faire economics, using Scrooge's vocabulary, the Cratchits' domestic interior and the allegorical children Ignorance and Want to argue that responsibility for the poor is not optional charity but moral law.",
    paragraphs: [
      {
        label: 'Introduction',
        text: "Published in December 1843, A Christmas Carol is less a ghost story than a pamphlet in disguise. Earlier that year Dickens had toured the Field Lane Ragged School and read the Second Report of the Children's Employment Commission; his original impulse was to write a political tract, but he calculated that fiction would 'strike a sledge-hammer blow' that polemic could not. The novella therefore performs a double argument: it indicts the laissez-faire economic philosophy of Malthus and the New Poor Law of 1834, and it insists that responsibility for the poor is not optional charity but a binding moral law. Dickens encodes this argument in Scrooge's vocabulary, in the Cratchits' domestic interior and, most starkly, in the allegorical children Ignorance and Want.",
        annotation:
          "Heavyweight context delivered with precision (1843 Report, Field Lane school, the 'sledge-hammer blow' phrase from Dickens's letters) - AO3 of the highest order. The thesis sets up three textual exhibits the essay will then prosecute.",
        aoFocus: ['AO1', 'AO3'],
      },
      {
        label: "Body 1 - Scrooge's economic vocabulary",
        // VERIFIED: Project Gutenberg #46, Stave 1 - Scrooge asks "Are there no prisons?" and then "And the Union workhouses? ... Are they still in operation?"; "decrease the surplus population" verbatim
        text: 'Scrooge\'s defence of indifference is delivered in the technical lexis of political economy. His curt enquiries "Are there no prisons?" and "And the Union workhouses?" are not genuine questions but a recitation of the institutional answers offered by the 1834 Poor Law Amendment Act, which forced the destitute into deliberately punitive workhouses. His chilling addendum that if the poor "would rather die" they had "better do it, and decrease the surplus population" ventriloquises Thomas Malthus, whose theories were widely cited to argue that charity merely prolonged misery. By placing Malthusian doctrine in the mouth of a man whose name becomes a byword for moral bankruptcy, Dickens performs a quiet ideological assassination: the philosophy is discredited not by counter-argument but by association with a character the reader is taught to despise.',
        annotation:
          "Excellent AO3: precise legal context (1834 Amendment) used to *unlock* the quotation rather than as decoration. The phrase 'ideological assassination' is a conceptual reading of authorial method - exactly what AO1 wants at the top band.",
        aoFocus: ['AO2', 'AO3'],
      },
      {
        label: 'Body 2 - The Cratchit interior',
        text: 'Against Scrooge\'s abstract economics Dickens places the concrete domesticity of the Cratchits. The goose is "eked out" by apple sauce and mashed potatoes; the pudding is the size of "a speckled cannon-ball". The diminutive food is described in epic vocabulary, and the comic disproportion is the point: it dignifies poverty without sentimentalising it. The reader sees a family whose joy is genuine but whose margins are razor-thin - Tiny Tim\'s crutch leans against the chimney corner like a metonym for the precariousness of working-class life under industrial capitalism. Importantly, Bob earns "fifteen shillings a week", a wage Dickens\'s first readers could measure against their own household budgets. The specificity prevents the scene from sliding into Christmas-card cliché and forces middle-class readers to recognise the Cratchits as economic neighbours, not picturesque others.',
        annotation:
          "Method-led analysis (epic register applied to small food, metonymy of the crutch) plus a sharp AO3 point about the wage figure as a calibration device. Reads Dickens's craft as deliberately anti-sentimental - a sophisticated, slightly counter-intuitive line.",
        aoFocus: ['AO2', 'AO3'],
      },
      {
        label: 'Body 3 - Ignorance and Want',
        text: 'The novella\'s most explicit intervention comes when the Ghost of Christmas Present reveals two children clinging beneath his robe. Dickens departs from realist mode entirely, deploying allegory: the children are named "Ignorance" and "Want", and the Ghost warns Scrooge to "beware" the boy especially, on whose brow is written "Doom". The capitalisation makes the abstractions visible, and the imperative "beware" is addressed past Scrooge to the reader. Dickens deliberately makes Ignorance the more dangerous of the two, an argument straight from his support for ragged-school education: he believed that without literacy the poor could not escape Want, and without educated workers society could not escape revolution. The allegory therefore links charitable feeling to enlightened self-interest - a rhetorically canny move for an audience that might resist appeals to pure altruism.',
        annotation:
          "Top-band AO1: identifies a generic shift (from realism to allegory) and explains why Dickens made it. The 'enlightened self-interest' reading is conceptual and original. AO3 is current rather than generic - ragged schools, not a vague gesture at 'Victorian times'.",
        aoFocus: ['AO1', 'AO2', 'AO3'],
      },
      {
        label: "Body 4 - Marley's redefinition of business",
        text: 'Underpinning the entire argument is Marley\'s posthumous redefinition of work. "Mankind was my business", he insists; "charity, mercy, forbearance, and benevolence, were, all, my business." The rhetorical climb of four polysyllabic abstract nouns, each set off by commas, slows the prose to the pace of a confession. Dickens hijacks the commercial vocabulary that Scrooge - and his readers - use daily and reassigns its meaning to social duty. This is the novella\'s central thesis in miniature: responsibility for others is not external to the business of life; it *is* the business of life. By making this point through a damned soul, Dickens implies that to fail in this business is not merely impolite but spiritually catastrophic.',
        annotation:
          "Returns to a key quotation already touched on in essay 1 but reads it differently - as a redefinition of commercial vocabulary. Strong AO2 (rhythm of the quadruple list) plus AO1 (linking the moment to the novella's overall thesis).",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: 'Conclusion',
        text: "Dickens's strategy is therefore total: he discredits the language of indifference, dignifies the lives of the poor without softening their hardship, allegorises the consequences of social neglect, and rewrites the very meaning of 'business'. A Christmas Carol works not by inviting pity but by withdrawing the reader's permission to look away. That, more than any ghost, is what made the novella feel - and still feel - politically urgent.",
        annotation:
          "Conclusion that synthesises the four exhibits into a single rhetorical strategy. The closing claim ('withdrawing the reader's permission to look away') reframes the text as an act of reader-coercion: a properly conceptual finish.",
        aoFocus: ['AO1'],
      },
    ],
    examinerCommentary:
      'Level 6 / Grade 9. Sustained polemical reading anchored in precise context (1834 Poor Law, Malthus, ragged schools, 1843 Report). Each body paragraph reads a different rhetorical instrument; the essay coheres around a single thesis without becoming repetitive.',
  },

  /* ============================================================= *
   * 3. The Cratchits / Tiny Tim
   * ============================================================= */
  {
    id: 'cratchits-tiny-tim',
    title: 'The Cratchits and Tiny Tim',
    question:
      "How does Dickens use the Cratchit family, and Tiny Tim in particular, to develop the novella's moral argument?",
    grade: 9,
    wordCount: 780,
    thesis:
      "The Cratchits are not a sentimental tableau but a strategic counter-weight: Dickens makes Tiny Tim simultaneously a real disabled child and a moral barometer, using the family's domestic interior to translate abstract debates about poverty into emotionally inescapable specifics.",
    paragraphs: [
      {
        label: 'Introduction',
        text: "It is tempting to read the Cratchits as the novella's emotional softener - a domestic interlude between supernatural set-pieces. Dickens, however, deploys them with surgical precision. The family's appearance in Stave 3 is the structural fulcrum on which Scrooge's transformation turns, and Tiny Tim functions less as a character than as a moral barometer whose survival or death is yoked directly to the choices the wealthy make. By giving the Cratchits a domestic interior crammed with measurable detail, Dickens translates the abstract debates about poverty rehearsed elsewhere in the novella into emotionally inescapable specifics, ensuring that his middle-class reader cannot retreat into theory.",
        annotation:
          "Strong opening that pre-empts a clichéd reading ('emotional softener') and replaces it with a sharper one ('moral barometer'). Sets a conceptual frame the body paragraphs then evidence.",
        aoFocus: ['AO1'],
      },
      {
        label: 'Body 1 - The Cratchit interior as moral exhibit',
        text: 'Dickens characterises the Cratchit household through a deliberate accumulation of small, measurable details. Mrs Cratchit is dressed in a gown "twice-turned" but "brave in ribbons"; the goose is praised hyperbolically for its "tenderness and flavour, size and cheapness"; the pudding emerges "like a speckled cannon-ball". The juxtaposition of poverty with festive language is not ironic mockery but ennoblement: Dickens shows that joy can be manufactured from very little, and that the wealthy who refuse to contribute even marginally to such a life condemn themselves morally. The recurrent semantic field of warmth - "hissing", "steaming", "hot" - contrasts pointedly with the iron, cold, biting weather imagery used for Scrooge\'s office, suggesting that the moral temperature of a society is set in its kitchens, not its counting-houses.',
        annotation:
          "AO2 by accumulation: half a dozen quoted details handled at speed, then synthesised into a thematic claim about 'moral temperature'. The contrast between semantic fields (warmth vs. iron) is precisely the kind of structural reading that lifts an answer.",
        aoFocus: ['AO2'],
      },
      {
        label: 'Body 2 - Tiny Tim as moral barometer',
        text: "Tiny Tim is the novella's most carefully calibrated emotional instrument. His benediction \"God bless us, every one!\" - the inclusive pronoun 'us' deliberately collapsing the distance between the Cratchits and the reader - frames him as a vehicle of unconditional charity, the antithesis of Scrooge's conditional economics. Dickens then makes survival itself a function of Scrooge's choices: in the Ghost of Christmas Yet to Come's vision, Tim is dead and his crutch sits \"carefully preserved\" in the chimney corner. The detail of preservation is devastating because it makes absence visible. Dickens is doing something theologically audacious here: he turns the wealthy reader, not God, into the agent who decides whether a child lives, thereby relocating moral responsibility from providence to policy.",
        annotation:
          "Sharp AO2 on pronouns ('us') and on the semiotics of the preserved crutch. The theological observation - relocating moral agency from God to the reader - is the type of original conceptual claim that earns the top band.",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: 'Body 3 - Bob Cratchit and the economics of obedience',
        text: 'Bob is granted neither rebellion nor resentment. He toasts Scrooge as "the Founder of the Feast" while Mrs Cratchit privately calls him "odious". Dickens uses this small domestic dispute to show how systemic exploitation enforces gratitude in its victims: Bob cannot afford the moral luxury of his wife\'s anger. The fifteen-shilling weekly wage, the single coal in the office fire, the fact that Bob runs home to Camden Town "as hard as he could pelt" to play blind-man\'s-buff with his children - all of these specifics build a man whose joy and labour are equally extracted by his employer. Dickens is not patronising Bob; he is exposing the social architecture that requires a man like Bob to perform gratitude for the very wages that immiserate him.',
        annotation:
          "Reading the Cratchits' domestic dialogue as a study in the politics of obedience is sophisticated and risky in a good way. The candidate refuses easy sentimentality and instead identifies coercion. AO1 + AO3.",
        aoFocus: ['AO1', 'AO3'],
      },
      {
        label: 'Body 4 - Stave 5: the moral test answered',
        text: 'The novella\'s moral argument is sealed not by Scrooge\'s giddy euphoria but by the closing line about Tim: "he did not die." The negative formulation is significant. Dickens does not write that Tim lived; he writes that he did not die, foregrounding the action of *prevention*, of damage averted. This reframes the entire transformation arc as a question of consequence rather than feeling. Scrooge\'s late benevolence - raising Bob\'s salary, becoming a "second father" to Tim - is presented in concrete material terms because Dickens wants his reader to understand that moral change is verified in deeds, not declarations. The Cratchits, in this sense, are the test that Scrooge - and the reader - must pass.',
        annotation:
          "The micro-analysis of the negative ('did not die') is the kind of close-reading detail examiners highlight as 'discriminating'. The synthesis (Cratchits = the test) returns to the thesis cleanly.",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: 'Conclusion',
        text: "The Cratchits, then, are anything but ornamental. They are the moral instrument by which Dickens converts abstract polemic into lived consequence: their warmth indicts Scrooge's coldness, Tim's vulnerability indicts laissez-faire fatalism, and Bob's enforced gratitude indicts the wage system itself. By the time the reader encounters the line \"he did not die\", Dickens has already taught us that the survival of a Tiny Tim somewhere is now our responsibility too.",
        annotation:
          "Conclusion sustains the conceptual frame and lands on a final ethical reframing of the reader's position. Confident, controlled, and avoids list-style summary.",
        aoFocus: ['AO1'],
      },
    ],
    examinerCommentary:
      'Level 6 / Grade 9. The essay refuses sentimental readings and instead identifies the Cratchits as a strategic device. Close textual work is paired with conceptual control; context is specific and integrated.',
  },

  /* ============================================================= *
   * 4. Family and Christmas spirit
   * ============================================================= */
  {
    id: 'family-christmas-spirit',
    title: 'Family and Christmas Spirit',
    question: 'How does Dickens present family and the spirit of Christmas in A Christmas Carol?',
    grade: 9,
    wordCount: 770,
    thesis:
      "For Dickens, family and the spirit of Christmas are not nostalgic decorations but a deliberately reinvented ethic: he uses Fred's open hearth, the Cratchits' interior, and Scrooge's recovered memories to reframe Christmas as an inclusive, civic-minded ritual that the wealthy are morally obliged to extend.",
    paragraphs: [
      {
        label: 'Introduction',
        text: "When Dickens wrote A Christmas Carol in 1843, the festival was in cultural decline; many puritan-influenced employers still treated 25 December as an ordinary working day. Dickens's novella was therefore not a celebration of an established tradition but an act of cultural reinvention, helping shape what historians now call the 'Victorian Christmas'. Crucially, the version of Christmas Dickens engineers is not primarily about feasting or gift-giving but about the deliberate dissolution of social boundaries. He uses Fred's open hearth, the Cratchits' crowded interior, and Scrooge's recovered memories of Fezziwig and Fan to reframe Christmas as an inclusive, civic-minded ritual that the wealthy are morally obliged to extend beyond their own households.",
        annotation:
          'Outstanding AO3 that does not just label the period but explains the *cultural function* of the novella (helping invent the Victorian Christmas). Thesis is plural - three exhibits - and conceptually unified.',
        aoFocus: ['AO1', 'AO3'],
      },
      {
        label: "Body 1 - Fred's hearth as inclusive Christmas",
        text: 'Fred is the moral counter-statement to his uncle from his very first scene. His insistence that Christmas is "a kind, forgiving, charitable, pleasant time" piles four positive adjectives in deliberate excess, refusing Scrooge\'s monosyllabic "Bah! Humbug!" with rhetorical generosity. More importantly, Fred\'s Christmas is open: when Scrooge eventually arrives at Fred\'s party in Stave 5, no inquisition is conducted, no penance demanded; he is simply welcomed. Dickens is dramatising what he wants Christmas to mean - a ritual of unconditional re-admission. By keeping Fred warm towards Scrooge across years of refusal, Dickens models the patient inclusiveness he believes the festival should embody, and implicitly rebukes any reader inclined to write off difficult relatives or dependents.',
        annotation:
          "Reads Fred not as a 'nice' character but as a deliberate moral counter-statement. The point about 'unconditional re-admission' is conceptually strong (AO1) and the analysis of the four-adjective list is precise (AO2).",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: "Body 2 - The Cratchits' interior as inclusive Christmas",
        text: 'Within the Cratchit home, Dickens insists that Christmas is a function of relationship rather than resource. The family\'s pleasure is registered in collective verbs - they "hailed", they "exclaimed", they "crowded round" - and the narrator pointedly notes that they were "not a handsome family" and "not well dressed", but "they were happy, grateful, pleased with one another". The triple predicate refuses to associate festive joy with material plenty. Dickens further insists on inclusion when Bob proposes a toast to Scrooge despite Mrs Cratchit\'s objection: even the absent oppressor is granted a place at the table. This is Christmas as Dickens wants it understood - not as an exclusive bourgeois rite but as a form of moral hospitality that scales beyond the immediate family.',
        annotation:
          "Sustained AO2 (collective verbs, triple predicate) supports a conceptual claim ('moral hospitality that scales'). The reading of the toast as deliberate inclusion of the absent oppressor is a fresh, nuanced move.",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: 'Body 3 - Memory: Fan, Fezziwig and the lost domestic',
        // VERIFIED: Project Gutenberg #46, Stave 2 - Dickens uses the participle "clapping her tiny hands"; Fezziwig's calves "shone in every part of the dance like moons"
        text: 'The Ghost of Christmas Past works by reminding Scrooge of family he has chosen to forget. His sister Fan, who came to bring him home from school, is described "clapping her tiny hands" - a kinetic detail that survives across decades because it carries genuine love. Fezziwig\'s apprentice-house party, with its "more dances" and its proprietor whose calves "shone in every part of the dance", redefines employer-employee relations as familial. Dickens is making a careful argument: the family-feeling of Christmas should not be confined to blood relatives but should structure all close human relationships, including those between masters and clerks. Scrooge\'s tragedy in Stave 2 is that he has narrowed family until it includes no one; his joy in Stave 5 is the recovery of an expansive definition.',
        annotation:
          'Reads Fezziwig as a *redefinition* of employer relations rather than as nostalgia. That conceptual move converts a familiar passage into a fresh argument. AO3 implicit (apprentice culture) is handled lightly and accurately.',
        aoFocus: ['AO1', 'AO2', 'AO3'],
      },
      {
        label: 'Body 4 - Stave 5: Christmas spirit as ongoing practice',
        text: 'Scrooge\'s pledge to "honour Christmas in my heart, and try to keep it all the year" is the novella\'s definitional sentence about Christmas spirit. The phrase "in my heart" relocates Christmas from the calendar to the conscience; the modal verb "try" admits imperfection; and the prepositional phrase "all the year" liberates the festival from December. Dickens\'s redefinition is therefore total: Christmas spirit is not a 24-hour bourgeois tradition but a year-round, internal, fallible discipline. By framing Scrooge\'s reform as the permanent extension of Christmas, Dickens leaves his reader with a deceptively radical proposition - that Christmas, properly understood, is simply ethical living without an off-season.',
        annotation:
          "Three-part close analysis of a single sentence (preposition, modal, prepositional phrase) is exactly the discriminating AO2 that wins Grade 9. The closing aphorism ('ethical living without an off-season') is memorable and earned.",
        aoFocus: ['AO2', 'AO1'],
      },
      {
        label: 'Conclusion',
        text: "Dickens's Christmas is therefore not the cosy Christmas-card scene posterity has often reduced it to. It is a deliberately constructed civic ethic, modelled in Fred's hospitality, the Cratchits' inclusive table, the recovered family of memory, and Scrooge's year-round pledge. Family, in this novella, is the workshop in which the social conscience is built - and the spirit of Christmas is the export licence that lets that conscience travel beyond the front door.",
        annotation:
          "Conclusion synthesises the four exhibits and lands on a striking metaphor (Christmas as 'export licence'). Conceptually closed, tonally controlled, no recap.",
        aoFocus: ['AO1'],
      },
    ],
    examinerCommentary:
      'Level 6 / Grade 9. The essay treats family and Christmas not as cosy themes but as deliberate ethical re-engineering. Sustained conceptual control, multiple precise close-readings, integrated and accurate context.',
  },

  /* ============================================================= *
   * 5. Redemption and the supernatural
   * ============================================================= */
  {
    id: 'redemption-supernatural',
    title: 'Redemption and the Supernatural',
    question:
      'How does Dickens use the supernatural to explore ideas about redemption in A Christmas Carol?',
    grade: 9,
    wordCount: 815,
    thesis:
      "Dickens uses the supernatural not as Gothic decoration but as a calibrated instrument of moral instruction: Marley's chains, the three Spirits' graduated tutorials and the silent final phantom convert the conventions of the ghost story into a secular machinery of redemption that pressures the reader as much as Scrooge.",
    paragraphs: [
      {
        label: 'Introduction',
        text: "Dickens deliberately subtitled his novella 'A Ghost Story of Christmas', invoking a popular Victorian genre in which spectres returned to settle scores or terrify the wicked. He then proceeded to subvert that genre. The supernatural in A Christmas Carol does not exist to frighten; it exists to teach. Marley's chains, the three Spirits' graduated tutorials, and the silent final phantom convert the conventions of the ghost story into a secular machinery of redemption - one that pressures the reader as much as Scrooge. By marrying the gothic to the homiletic, Dickens produces a redemption arc that is theologically unorthodox (no priest, no sacrament) but emotionally and morally irresistible.",
        annotation:
          "Genre-aware AO3 (ghost-story tradition) used as a launchpad for a conceptual claim about subversion. The phrase 'secular machinery of redemption' is a confident piece of critical vocabulary that the essay then earns.",
        aoFocus: ['AO1', 'AO3'],
      },
      {
        label: 'Body 1 - Marley: damnation as missed chance',
        text: 'Marley\'s ghost re-engineers the very idea of damnation. His chain is forged of "cash-boxes, keys, padlocks, ledgers, deeds", a polysyndetic catalogue in which the instruments of commerce become the literal hardware of his torment. Dickens makes the moral cause and physical consequence coincide: greed does not lead to suffering, greed *is* suffering, made visible. Marley\'s terror is not of hellfire but of having "no rest, no peace" - the ordinary, almost domestic, vocabulary signals that Dickens is secularising hell. To miss the chance to help one\'s fellow man is, for Dickens, the worst possible damnation. Crucially, Marley\'s appearance also rewrites the supernatural\'s purpose: he comes "to procure" Scrooge "a chance and hope" of escape, casting the ghost as a labour of love rather than vengeance.',
        annotation:
          "Polysyndetic catalogue identified and analysed; the move from gothic terror to 'domestic vocabulary' of damnation is sharp. The reading of the spectre as 'labour of love' reframes a familiar scene with conceptual originality.",
        aoFocus: ['AO2', 'AO1'],
      },
      {
        label: 'Body 2 - Past: redemption begins inwardly',
        text: 'The Ghost of Christmas Past is described as paradoxically both "old" and "young", with light streaming from its head. The contradictory imagery makes memory itself supernatural: it is timeless, illuminating, and impossible to extinguish (Scrooge later tries to press the cap down upon the light, and fails). Dickens\'s redemption begins, therefore, with the recovery of repressed memory - Scrooge is shown his lonely schoolboy self, the lost engagement to Belle, the apprentice-Scrooge dancing at Fezziwig\'s. This is psychologically modern: Dickens implies that moral hardness is rarely innate but is built, decision by decision, on an earlier wound. To redeem Scrooge, the supernatural must first re-narrate him to himself, restoring the empathetic child who was "left here all alone" so that the adult can finally feel for those left alone in his own time.',
        annotation:
          "Conceptual reading of the Past-ghost as repressed memory - psychologically modern and well-supported by quotation. The link from 'left there, alone' to the wider social argument shows essay-level synthesis (AO1).",
        aoFocus: ['AO1', 'AO2'],
      },
      {
        label: 'Body 3 - Present: redemption widens outwardly',
        text: 'The Ghost of Christmas Present is structurally vast - "a jolly Giant" enthroned on a horn-of-plenty heap of food. Dickens\'s superabundant catalogue of "turkeys, geese, game, poultry, brawn" exhibits a world of sufficient resource, implicitly indicting any economy in which want still exists. The Ghost\'s instruction to Scrooge to "come in! and know me better, man!" is a Christianised summons in secular clothing - not \'follow me\' but \'know me\'. Knowledge, for Dickens, is the precondition of moral action. The stave culminates in the unveiling of Ignorance and Want; the Ghost\'s solemn warning to "beware" the boy on whose brow is written "Doom" is delivered, ostensibly to Scrooge, but really past him to a Victorian reader assumed to be similarly comfortable, similarly ignorant.',
        annotation:
          "Reads the Present-ghost as widening empathy outwards (after the Past widened it inwards) - the candidate is tracking Dickens's design rather than just describing it. The 'know me' / 'follow me' substitution is a discriminating close reading.",
        aoFocus: ['AO2', 'AO3', 'AO1'],
      },
      {
        label: 'Body 4 - Yet to Come: redemption as terror of consequence',
        text: "The final spirit is the most generically conventional ghost - silent, shrouded, terrifying - but Dickens uses that very conventionality to land his sharpest moral point. By refusing the Phantom speech, Dickens forces Scrooge (and the reader) to interpret the silent images themselves: the laundress selling the dead man's bed-curtains, the Cratchits weeping over an empty chair, the gravestone bearing Scrooge's own name. Redemption here is engineered through projected consequence: Scrooge is shown precisely the future his current self is producing, and is asked whether the images \"are the shadows of the things that May be, only\" - the conditional verb 'May' opens the door through which change can pass. The supernatural becomes, in this final stave, a kind of ethical conditional clause.",
        annotation:
          "Sophisticated reading: makes the silence itself the rhetorical instrument. The micro-analysis of the modal 'May' is exactly the kind of detail that distinguishes Grade 9 - and links the supernatural to free will.",
        aoFocus: ['AO2', 'AO1'],
      },
      {
        label: 'Conclusion',
        text: "Dickens's supernatural, then, is a precision-engineered moral apparatus. Marley redefines damnation as missed duty; the Ghost of the Past re-narrates Scrooge to himself; the Ghost of the Present widens his sympathy outwards; the Ghost of Yet to Come projects the future his choices are presently making. Redemption emerges not as a divine gift but as the effortful product of self-knowledge, social knowledge and consequence - a redemption available, by extension, to any reader willing to be similarly haunted. This is why, more than 180 years on, the novella's ghosts still feel less like phantoms than like instruments of conscience.",
        annotation:
          "Conclusion that maps the four supernatural agents to four stages of redemption and lands on a final, broader claim about the novella's afterlife. Conceptually closed and tonally measured.",
        aoFocus: ['AO1'],
      },
    ],
    examinerCommentary:
      "Level 6 / Grade 9. Genre-aware, structurally argued, and consistently links the supernatural to a clear redemptive design. Close readings (modal 'May', polysyndetic chain, 'know me' vs 'follow me') are precise and discriminating.",
  },
]

export default aChristmasCarolModelEssays
