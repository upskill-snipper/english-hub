import type { Metadata } from 'next'
import Link from 'next/link'
import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

export const metadata: Metadata = {
  title: 'Model Macbeth Essays: Grade 5, 7 & 9 with Marker Annotations',
  description:
    'Five fully-annotated model Macbeth essays at Grade 5, 7, and 9 covering Lady Macbeth and guilt. Paragraph-by-paragraph marker commentary with AO breakdowns and grade justifications.',
  alternates: {
    canonical: 'https://theenglishhub.app/marking/sample/macbeth',
  },
  openGraph: {
    title: 'Model Macbeth Essay Bank — The English Hub',
    description:
      'Grade 5, 7 and 9 model essays on Lady Macbeth and guilt, with marker annotations and AO breakdowns.',
  },
}

/* ─── Types ─────────────────────────────────────────────────── */

interface AOScore {
  code: string
  label: string
  score: number
  max: number
}

interface ModelEssay {
  id: string
  grade: 5 | 7 | 9
  question: string
  title: string
  paragraphs: string[]
  annotations: ParagraphAnnotation[]
  aos: AOScore[]
  gradeJustification: string
  nextGradeTips: string[]
  nextGrade: number
}

interface ParagraphAnnotation {
  paragraphIndex: number
  strengths: string[]
  improvements: string[]
  aoAddressed: string[]
}

/* ─── Essay Data ────────────────────────────────────────────── */

const ESSAYS: ModelEssay[] = [
  // ── 1. Lady Macbeth Power — Grade 5 ────────────────────────
  {
    id: 'lm-power-g5',
    grade: 5,
    question: 'How does Shakespeare present Lady Macbeth as powerful?',
    title: 'Lady Macbeth as Powerful (Grade 5)',
    paragraphs: [
      "Shakespeare presents Lady Macbeth as a powerful character in the play. When she first appears, she reads Macbeth's letter about the witches' prophecy and immediately starts planning Duncan's murder. She says 'unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.' This shows that she wants to get rid of her femininity so she can be strong enough to commit the murder. The word 'cruelty' shows she knows what she is doing is wrong but she wants to do it anyway.",
      "Lady Macbeth is also powerful because she controls Macbeth. When he wants to stop the plan, she calls him a coward and questions his manhood. She says 'when you durst do it, then you were a man.' This rhetorical question makes Macbeth feel weak and pushes him to carry on with the murder. She is using emotional manipulation to get what she wants, which shows she has power over him even though women in Shakespeare's time were supposed to be obedient to their husbands.",
      "However, by the end of the play Lady Macbeth loses her power completely. She sleepwalks and tries to wash imaginary blood from her hands, saying 'Out, damned spot! Out, I say!' This shows that the guilt has taken over her mind and she cannot control herself anymore. The doctor says she needs a priest not a doctor, which shows that her problems are spiritual not physical. Shakespeare might be showing that the power she gained through evil was only temporary and that guilt destroyed her in the end.",
    ],
    annotations: [
      {
        paragraphIndex: 0,
        strengths: [
          "Embeds a substantial quotation and attempts to analyse a keyword ('cruelty').",
          "Tracks the character's entrance and sets up a clear line of argument.",
        ],
        improvements: [
          "The analysis of 'unsex me here' stays at surface level. Explore the verb 'fill' and the spatial metaphor 'crown to the toe' to show how Shakespeare maps power onto the body.",
          "Context is absent. A Jacobean audience would see this invocation as quasi-demonic, linking Lady Macbeth's power to the supernatural.",
        ],
        aoAddressed: [
          'AO1 — clear response with textual reference',
          'AO2 — some word-level analysis',
        ],
      },
      {
        paragraphIndex: 1,
        strengths: [
          "Identifies Lady Macbeth's use of manipulation as a source of power.",
          'Brief contextual point about gender roles is present.',
        ],
        improvements: [
          'The quotation is slightly misidentified as a rhetorical question — it is actually a conditional statement. Precision of terminology matters for AO2.',
          'Push the gender context further: Lady Macbeth is subverting the Great Chain of Being by controlling a male warrior.',
        ],
        aoAddressed: ['AO1 — relevant point about control', 'AO3 — some context attempted'],
      },
      {
        paragraphIndex: 2,
        strengths: [
          "Structural awareness: tracks Lady Macbeth's arc from power to collapse.",
          "Includes the doctor's observation, showing wider textual knowledge.",
        ],
        improvements: [
          "The imperative 'Out' could be analysed — it echoes her earlier commanding tone but is now directed at her own guilt, showing a reversal of power.",
          "Shakespeare's authorial intention is gestured at ('might be showing') but not developed into a confident statement about purpose.",
        ],
        aoAddressed: ['AO1 — some structural awareness', 'AO2 — limited method analysis'],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 7, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 6, max: 12 },
      { code: 'AO3', label: 'Context', score: 3, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
    gradeJustification:
      "This response demonstrates a clear understanding of Lady Macbeth's power and its decline, meeting the Grade 5 descriptor for 'clear, explained comment.' Quotations are relevant and embedded, but analysis tends to identify features rather than explore their effects in depth. Context is present but bolted on rather than integrated into the argument. The structural arc (powerful to powerless) is recognised but could be examined more precisely through Shakespeare's methods.",
    nextGradeTips: [
      'Analyse at word level: pick apart individual verbs and modifiers within quotations rather than commenting on the quotation as a whole.',
      "Integrate context into analysis rather than adding it as a separate sentence — e.g. 'The Jacobean audience would recognise the invocation of dark spirits as evidence that her power is demonic rather than natural.'",
      'Use more precise literary terminology — distinguish imperatives from rhetorical questions, conditional statements from commands.',
      "Develop Shakespeare's authorial intention with confidence: 'Shakespeare presents...' not 'Shakespeare might be showing...'",
    ],
    nextGrade: 6,
  },

  // ── 2. Lady Macbeth Power — Grade 7 ────────────────────────
  {
    id: 'lm-power-g7',
    grade: 7,
    question: 'How does Shakespeare present Lady Macbeth as powerful?',
    title: 'Lady Macbeth as Powerful (Grade 7)',
    paragraphs: [
      "Shakespeare constructs Lady Macbeth's power as deliberately transgressive, positioning her as a figure who consciously repudiates the passive femininity expected by Jacobean society. Her soliloquy upon reading Macbeth's letter functions as a dark parody of prayer: 'Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.' The imperative verbs 'come' and 'fill' frame this as an invocation, echoing the language of demonic possession. By asking to be 'unsex[ed]', Lady Macbeth requests a transformation that the audience would have understood as unnatural — a violation of the divinely ordered hierarchy in which femininity was associated with gentleness and maternal care.",
      "Her power over Macbeth is exercised through rhetorical manipulation rather than physical force. When Macbeth wavers, she deploys a devastating attack on his masculinity: 'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.' The conditional syntax places manhood itself as contingent on the act of regicide, effectively redefining courage as moral recklessness. The comparative structure — 'more than,' 'so much more' — implies an escalating challenge, as though masculinity is a currency that can be accumulated through violence. Shakespeare uses Lady Macbeth to expose how gender roles can be weaponised: she manipulates the very ideals of manhood that the patriarchal system upholds.",
      "Crucially, however, Shakespeare structures the play to demonstrate that Lady Macbeth's power is unsustainable. The sleepwalking scene in Act 5 inverts her earlier command of language. Where she once gave orders — 'Give me the daggers' — she now issues fragmented, involuntary utterances: 'Out, damned spot! Out, I say!' The monosyllabic desperation of 'out' contrasts sharply with the eloquent, polysyllabic rhetoric of her earlier speeches. The repetition suggests compulsion rather than control; the exclamation marks signal panic, not authority. Shakespeare's structural choice to remove Lady Macbeth from the stage entirely before the play's climax underscores that the power she seized through transgression has consumed itself, leaving nothing behind.",
      "Shakespeare therefore presents Lady Macbeth's power as a cautionary study in the dangers of overreaching ambition. Her trajectory — from commanding orator to fragmented somnambulist — mirrors the play's wider thesis that power gained through the violation of natural and divine order is inherently self-destructive. For King James I, a monarch haunted by fears of witchcraft and regicide, this narrative would have served as both entertainment and ideological reassurance: the established order, however threatened, will ultimately reassert itself.",
    ],
    annotations: [
      {
        paragraphIndex: 0,
        strengths: [
          "Confident conceptual opening that frames Lady Macbeth's power as 'transgressive' from the first line.",
          "Excellent AO2: identifies the soliloquy as a 'dark parody of prayer' and analyses imperative verbs precisely.",
          "Context is seamlessly integrated — the reference to 'divinely ordered hierarchy' grows out of the analysis rather than being appended.",
        ],
        improvements: [
          "Could explore the spatial metaphor 'crown to the toe' more — this maps power onto the entire body and anticipates the 'crown' she seeks for Macbeth.",
          "The phrase 'demonic possession' could be connected to James I's personal interest in demonology for sharper AO3.",
        ],
        aoAddressed: [
          'AO1 — thoughtful, developed thesis',
          'AO2 — precise analysis of imperative verbs',
          'AO3 — integrated Jacobean context',
        ],
      },
      {
        paragraphIndex: 1,
        strengths: [
          'Sophisticated AO2 analysis: identifies the conditional syntax and the comparative structure, explaining how each creates meaning.',
          "The point about gender as 'weaponised' is original and conceptually strong.",
          "Close word-level work on 'more than' and 'so much more' as escalation.",
        ],
        improvements: [
          "Could explore the irony that Lady Macbeth, who claims to reject femininity, uses a stereotypically 'feminine' tool — persuasion rather than force.",
          'A brief reference to how this scene functions structurally (Act 1, Scene 7 as the tipping point) would strengthen the argument.',
        ],
        aoAddressed: [
          'AO2 — detailed language and form analysis',
          'AO3 — gender context integrated',
        ],
      },
      {
        paragraphIndex: 2,
        strengths: [
          'Strong structural argument: the contrast between Act 1 rhetoric and Act 5 fragmentation is precisely articulated.',
          'Effective micro-analysis of monosyllabic versus polysyllabic diction.',
          'The point about Shakespeare removing Lady Macbeth from the stage is an astute structural observation.',
        ],
        improvements: [
          'The significance of the doctor and the gentlewoman as witnesses could be explored — their inability to help her emphasises the spiritual nature of her collapse.',
          "Could push the 'inversion' idea further: her power over others has become power exerted against herself.",
        ],
        aoAddressed: ['AO2 — structure and form analysis', 'AO1 — sustained critical argument'],
      },
      {
        paragraphIndex: 3,
        strengths: [
          "Effective concluding paragraph that widens the argument to the play's thesis.",
          "The phrase 'commanding orator to fragmented somnambulist' is precise and memorable.",
          'Contextual reference to James I is relevant and earns its place in the argument.',
        ],
        improvements: [
          "To reach Grade 9, this conclusion could offer a more original or provocative reading — for example, questioning whether Lady Macbeth's power was ever truly hers or always borrowed from the supernatural.",
          'Could reference critical perspectives or alternative readings to demonstrate critical engagement.',
        ],
        aoAddressed: ['AO1 — sustained overview', 'AO3 — contextual understanding of James I'],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 10, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 9, max: 12 },
      { code: 'AO3', label: 'Context', score: 5, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
    gradeJustification:
      "This response meets the Grade 7 descriptor for a 'thoughtful, developed' response with 'sustained' focus. Methods are analysed with precision (imperative verbs, conditional syntax, monosyllabic diction), and context is integrated rather than bolted on. The structural overview — tracking Lady Macbeth's arc across the play — demonstrates control of the whole text. To reach Grade 8/9, the response would need to push toward more conceptualised, original interpretations and demonstrate even more precise word-level analysis throughout.",
    nextGradeTips: [
      'Develop more original or provocative interpretations — challenge conventional readings rather than simply executing them well.',
      'Analyse form more explicitly: how does the shift from blank verse to prose in the sleepwalking scene enact her loss of control?',
      'Engage with alternative critical perspectives or readings to show evaluative skill.',
      'Ensure every paragraph contains word-level analysis, not just identification of literary devices.',
    ],
    nextGrade: 8,
  },

  // ── 3. Lady Macbeth Power — Grade 9 ────────────────────────
  {
    id: 'lm-power-g9',
    grade: 9,
    question: 'How does Shakespeare present Lady Macbeth as powerful?',
    title: 'Lady Macbeth as Powerful (Grade 9)',
    paragraphs: [
      "Shakespeare presents Lady Macbeth's power not as an innate quality but as a performance — one that requires the deliberate suppression of her humanity. Her invocation to the spirits, 'Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty,' is remarkable not for its boldness but for its admission of inadequacy. The verb 'unsex' acknowledges that, within the patriarchal framework of the play, femininity and political agency are incompatible; she must be emptied of one to be filled with the other. The spatial metaphor 'from the crown to the toe' maps this transformation onto the body itself, suggesting that power, for Shakespeare, is not merely psychological but corporeal — it must inhabit every fibre. Yet the very need for this invocation reveals that Lady Macbeth's power is not organic but summoned, borrowed from forces she cannot ultimately control.",
      "This performed power is most visible in her manipulation of Macbeth in Act 1, Scene 7. Her strategy is not to argue for regicide on its merits but to redefine the terms of masculinity itself: 'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.' The conditional verb 'durst' places courage in the past tense, implying that Macbeth's current hesitation represents a regression from manhood. The escalating comparative — 'more than,' 'so much more' — constructs masculinity as infinite, a summit that always recedes, ensuring Macbeth can never feel he has proved enough. What is remarkable here is that Lady Macbeth weaponises the patriarchal system that subordinates her: she cannot seize the crown herself, so she engineers her husband's ambition by exploiting the very gender norms that constrain her. Her power is therefore paradoxical — it operates within, and is limited by, the structures it subverts.",
      "Shakespeare's most devastating comment on Lady Macbeth's power comes not in what she says but in how she ceases to say it. The sleepwalking scene strips her of the two faculties that defined her authority: consciousness and rhetorical control. Where her earlier speech was syntactically complex, governed by subordinate clauses and extended metaphor, her language in Act 5 collapses into fragmented imperatives — 'Out, damned spot! Out, I say!' — and disjointed prose. The shift from verse to prose is itself a structural demotion: in Shakespeare's dramatic hierarchy, prose is the register of clowns, servants, and the mad. That Lady Macbeth, who commanded the most potent verse in the play, now speaks in broken prose signals that her power has not merely diminished but been linguistically annihilated. The compulsive hand-washing — 'all the perfumes of Arabia will not sweeten this little hand' — inverts her earlier dismissal of guilt ('A little water clears us of this deed'), revealing that the cruelty she summoned has turned inward, consuming the self it was meant to fortify.",
      "Ultimately, Shakespeare presents Lady Macbeth's power as the play's most complex tragedy. Unlike Macbeth, who is destroyed by external forces as much as internal ones, Lady Macbeth's destruction is entirely self-generated: the power she performed so convincingly in the first two acts proves to be a mask that, once removed, reveals nothing beneath it. Her offstage death — reported rather than staged — denies her even the theatrical power of a final soliloquy. Shakespeare, who gave Macbeth the extraordinary 'tomorrow and tomorrow and tomorrow,' gives Lady Macbeth silence. For a character defined by her command of language, this is the ultimate dispossession. In a play written for a king who believed in witchcraft and who had survived assassination attempts, Lady Macbeth's trajectory serves as a warning not merely about ambition but about the nature of borrowed power: it can be summoned but never owned, performed but never embodied.",
    ],
    annotations: [
      {
        paragraphIndex: 0,
        strengths: [
          "Immediately conceptualised: frames power as 'performance' requiring 'suppression of humanity' — this is an original, arguable thesis.",
          "Exceptional AO2: the analysis of 'unsex' as an 'admission of inadequacy' inverts the conventional reading. The spatial metaphor 'crown to the toe' is connected to the idea that power must be 'corporeal.'",
          "The final sentence ('borrowed from forces she cannot ultimately control') sets up the whole essay's argument — power as unsustainable because it is not innate.",
        ],
        improvements: [
          "This paragraph is operating at the highest level. A minor refinement: the reference to 'mortal thoughts' could be unpacked — does 'mortal' mean 'deadly' or 'human'? The ambiguity enriches the invocation.",
        ],
        aoAddressed: [
          'AO1 — perceptive, conceptualised thesis',
          "AO2 — word-level analysis of 'unsex', 'fill', spatial metaphor",
          'AO3 — patriarchal framework integrated',
        ],
      },
      {
        paragraphIndex: 1,
        strengths: [
          "The analysis of conditional syntax ('durst' as placing courage in the past tense) is precise and original.",
          "The paradox of Lady Macbeth weaponising the system that subordinates her is a genuinely conceptualised observation — this is what markers mean by 'perceptive.'",
          "The conclusion ('operates within, and is limited by, the structures it subverts') is epigrammatic and demonstrates full critical control.",
        ],
        improvements: [
          "Virtually no improvements needed at this level. Could briefly note that Lady Macbeth's hypothetical infanticide image ('dashed the brains out') represents the most extreme form of this gender transgression.",
        ],
        aoAddressed: [
          'AO1 — original argument',
          'AO2 — syntax and form analysis',
          'AO3 — gender and power structures',
        ],
      },
      {
        paragraphIndex: 2,
        strengths: [
          "Outstanding structural analysis: the shift from verse to prose is read as a 'linguistic annihilation' and placed within Shakespeare's dramatic hierarchy.",
          "The inversion of 'A little water clears us of this deed' / 'all the perfumes of Arabia' is precisely tracked — this shows command of the whole text.",
          "The phrase 'the cruelty she summoned has turned inward, consuming the self it was meant to fortify' is a Grade 9 conceptual conclusion.",
        ],
        improvements: [
          "Could note that the doctor's line 'More needs she the divine than the physician' reinforces the spiritual dimension of her collapse, connecting to AO3.",
        ],
        aoAddressed: [
          'AO2 — structure (verse to prose), language (inversion of earlier image)',
          'AO1 — sustained critical argument',
        ],
      },
      {
        paragraphIndex: 3,
        strengths: [
          "Perceptive structural observation: the offstage death is read as a denial of 'theatrical power' — this is criticism of the highest order.",
          "The contrast between Macbeth's 'tomorrow' soliloquy and Lady Macbeth's silence is original and devastating.",
          "The conclusion synthesises the whole argument: 'summoned but never owned, performed but never embodied' — balanced, epigrammatic, conceptualised.",
          'Context (James I, witchcraft, assassination) is woven into the final sentence without disrupting the argument.',
        ],
        improvements: [
          'At this level, the essay is operating at the top of the marking guide. No significant improvements needed.',
        ],
        aoAddressed: [
          'AO1 — perceptive overview of whole text',
          'AO2 — structure (offstage death, silence)',
          'AO3 — James I, witchcraft beliefs',
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 12, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 12, max: 12 },
      { code: 'AO3', label: 'Context', score: 6, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
    gradeJustification:
      "This response meets every descriptor for Grade 9: it is 'critical, exploratory, conceptualised' with a 'convincing, critical analysis and exploration' of Shakespeare's methods. The thesis (power as performance, borrowed and unsustainable) is original and sustained across every paragraph. Word-level analysis is precise and purposeful. Context is never bolted on but emerges organically from the argument. The structural awareness — tracking Lady Macbeth's linguistic demotion from verse to prose to silence — demonstrates command of the whole text as a dramatic construction.",
    nextGradeTips: [
      'This essay is at the top of the marking guide. To maintain this standard under timed conditions, practise planning a conceptual thesis in 3 minutes before writing.',
    ],
    nextGrade: 9,
  },

  // ── 4. Guilt Theme — Grade 5 ──────────────────────────────
  {
    id: 'guilt-g5',
    grade: 5,
    question: 'How does Shakespeare present the theme of guilt?',
    title: 'The Theme of Guilt (Grade 5)',
    paragraphs: [
      "Shakespeare presents guilt as something that drives the characters mad in the play. After Macbeth kills Duncan, he looks at his hands and says 'Will all great Neptune's ocean wash this blood / Clean from my hand?' This metaphor shows that he feels the guilt is so big that even an ocean could not wash it away. The word 'blood' is important because it appears many times in the play and is a symbol of guilt throughout.",
      "Lady Macbeth also feels guilty later in the play. At first she tells Macbeth that 'A little water clears us of this deed,' which shows she thinks they can easily get rid of their guilt. But in Act 5 she sleepwalks and says 'Out, damned spot! Out, I say!' This shows that the guilt has taken over her mind and she cannot escape it. The word 'damned' is interesting because it could mean she thinks she is going to hell for what she has done.",
      'Shakespeare uses guilt to show that doing bad things always catches up with you. The Jacobean audience would have believed in God and hell, so they would think that Macbeth and Lady Macbeth were being punished by God for killing the king. The theme of guilt connects to the theme of the supernatural because the characters feel like they are being haunted by what they did.',
    ],
    annotations: [
      {
        paragraphIndex: 0,
        strengths: [
          'Appropriate quotation selected and a clear explanation of the metaphor is offered.',
          "Recognises 'blood' as a recurring symbol — this shows some structural awareness.",
        ],
        improvements: [
          'The analysis stays at identification level. Explore Neptune specifically — why does Shakespeare invoke a classical god? What does the scale of the image (an entire ocean) tell us about how Shakespeare constructs guilt as infinite?',
          "The phrase 'the guilt is so big' is imprecise. Use literary vocabulary: 'Shakespeare presents guilt as immeasurable' or 'inescapable.'",
        ],
        aoAddressed: ['AO1 — clear response', 'AO2 — metaphor identified but not fully explored'],
      },
      {
        paragraphIndex: 1,
        strengths: [
          "Tracks a structural contrast between Lady Macbeth's attitudes in Act 1 and Act 5 — this is effective.",
          "The analysis of 'damned' as connecting to damnation shows some word-level awareness.",
        ],
        improvements: [
          "The contrast between 'a little water' and the sleepwalking scene is a golden AO2 opportunity — explore how Shakespeare inverts Lady Macbeth's own language to show guilt's power.",
          'Consider the dramatic irony: the audience knows Lady Macbeth was wrong about water clearing the deed, which heightens the tragedy.',
        ],
        aoAddressed: ['AO1 — some structural tracking', 'AO2 — limited word-level analysis'],
      },
      {
        paragraphIndex: 2,
        strengths: [
          'Contextual point about Jacobean belief in divine punishment is relevant.',
          'Attempt to link guilt to the supernatural theme shows wider textual awareness.',
        ],
        improvements: [
          "The context paragraph reads as a bolt-on rather than part of the argument. Integrate it: 'Shakespeare exploits the Jacobean belief in divine retribution to present guilt not as a psychological state but as God's punishment made visible.'",
          "The conclusion 'doing bad things always catches up with you' is too informal for a GCSE essay. Reframe as: 'Shakespeare presents guilt as an inescapable consequence of moral transgression.'",
        ],
        aoAddressed: [
          'AO3 — relevant but bolted-on context',
          'AO1 — concluding overview attempted',
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 7, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 5, max: 12 },
      { code: 'AO3', label: 'Context', score: 3, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 3, max: 4 },
    ],
    gradeJustification:
      "This response achieves Grade 5 through clear, relevant points about guilt supported by appropriate quotations. The structural contrast between Lady Macbeth's early confidence and later collapse is recognised. However, AO2 is underdeveloped — quotations are identified and explained rather than analysed at word level. Context is relevant but presented separately from the argument rather than integrated. The register occasionally slips into informality.",
    nextGradeTips: [
      'Push every quotation to word-level analysis: do not just explain what a line means — explain how specific words create that meaning.',
      'Use the structural contrast between Act 1 and Act 5 as the backbone of your argument rather than a passing observation.',
      'Integrate context into your analytical sentences rather than writing a separate context paragraph.',
      "Adopt a more formal academic register throughout — avoid phrases like 'doing bad things.'",
    ],
    nextGrade: 6,
  },

  // ── 5. Guilt Theme — Grade 9 ──────────────────────────────
  {
    id: 'guilt-g9',
    grade: 9,
    question: 'How does Shakespeare present the theme of guilt?',
    title: 'The Theme of Guilt (Grade 9)',
    paragraphs: [
      "Shakespeare presents guilt in Macbeth not as a consequence of wrongdoing but as the wrongdoing itself — a corrosive force that does not punish the sinner after the sin but begins its work in the very moment of contemplation. Before Duncan is even dead, Macbeth hallucinates 'a dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain.' The compound modifier 'heat-oppressed' is striking: 'heat' connotes both fever and hellfire, while 'oppressed' implies an external force bearing down on the mind. Guilt, in Shakespeare's construction, is not an emotion Macbeth generates but a weight imposed upon him — perhaps by conscience, perhaps by the divine order he is about to violate. The dagger itself, hovering between reality and hallucination, enacts the liminal state of a man whose guilt has already begun to dissolve the boundary between the real and the imagined.",
      "This dissolution intensifies after the murder, when Macbeth stares at his hands and asks, 'Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red.' The rhetorical structure is extraordinary: the question is answered with its own negation, and then the negation is amplified into a cosmic image of contamination. The Latinate polysyllable 'incarnadine' — meaning to make red, to make flesh-coloured — sits in deliberate tension with the monosyllabic Anglo-Saxon 'making the green one red.' Shakespeare offers the same idea twice, first in the elevated register of classical rhetoric, then in the plain speech of visceral reality. The effect is that guilt operates on every linguistic level simultaneously: it is both a grand theological concept and a brute physical fact. Neptune, the classical god of the sea, is invoked only to be declared insufficient — guilt exceeds even mythology's capacity to contain it.",
      "Lady Macbeth's relationship with guilt follows a precisely inverted trajectory. Where Macbeth's guilt is immediate and overwhelming, Lady Macbeth initially presents herself as immune: 'A little water clears us of this deed.' The dismissive adjective 'little' and the collective pronoun 'us' suggest that guilt, for her, is a shared inconvenience to be rinsed away. Shakespeare's dramatic irony is savage: the audience watches Lady Macbeth perform immunity to guilt knowing that this performance will collapse. When it does, in the sleepwalking scene, Shakespeare inverts her own language with surgical precision. 'Out, damned spot!' echoes the confident pragmatism of 'a little water' but replaces it with compulsion and despair. The adverb 'here' in 'Yet here's a spot' — an imaginary stain that no one else can see — transforms guilt from an external, washable mark into an internal, indelible one. Her final recorded words, 'all the perfumes of Arabia will not sweeten this little hand,' complete the inversion: 'little,' which once minimised the deed, now emphasises the smallness and vulnerability of the hand that committed it.",
      "Shakespeare's structural treatment of guilt is equally deliberate. Macbeth's guilt is expressed in soliloquy — the dramatic form of interiority — allowing the audience direct access to his torment. Lady Macbeth's guilt, by contrast, erupts involuntarily in sleep, bypassing consciousness altogether. The distinction is significant: Macbeth's guilt is cognitive, a product of moral awareness, while Lady Macbeth's is somatic, stored in the body and released only when the conscious mind relinquishes control. The doctor's observation that 'More needs she the divine than the physician' locates guilt beyond the reach of medicine, in the territory of the soul. For a Jacobean audience steeped in Calvinist ideas of predestination and divine judgement, this would have carried a stark implication: guilt in Macbeth is not merely psychological but eschatological. It is a foretaste of damnation, a spiritual condition that no earthly power — neither Neptune's ocean nor Arabia's perfumes — can remedy. Shakespeare thus presents guilt as the play's true antagonist: invisible, inescapable, and more destructive than any army that marches on Dunsinane.",
    ],
    annotations: [
      {
        paragraphIndex: 0,
        strengths: [
          "The opening thesis is immediately conceptualised: guilt 'begins its work in the very moment of contemplation' reframes the chronology of sin and punishment.",
          "Outstanding AO2: 'heat-oppressed' is unpacked morpheme by morpheme, and the dual connotation of 'heat' (fever/hellfire) is precisely identified.",
          "The final sentence ('dissolve the boundary between the real and the imagined') conceptualises the dagger as an enactment of guilt's epistemological effects.",
        ],
        improvements: [
          "Operating at the top of the marking guide. A marginal enhancement: could note that the dagger scene is a soliloquy, connecting to the play's broader use of soliloquy as the register of guilt.",
        ],
        aoAddressed: [
          'AO1 — perceptive, conceptualised',
          'AO2 — word-level analysis of compound modifier',
          'AO3 — divine order, conscience',
        ],
      },
      {
        paragraphIndex: 1,
        strengths: [
          "Exceptional close reading: the dual register of 'incarnadine' (Latinate) versus 'making the green one red' (Anglo-Saxon monosyllables) is identified and its effect explained with real sophistication.",
          "The point that guilt 'operates on every linguistic level simultaneously' is a conceptualised observation about how form enacts meaning.",
          'Neptune is analysed not as decoration but as evidence of guilt exceeding mythology itself.',
        ],
        improvements: ['No significant improvements. This is exemplary Grade 9 analysis.'],
        aoAddressed: [
          'AO2 — register, diction, rhetorical structure',
          'AO1 — sustained critical argument',
        ],
      },
      {
        paragraphIndex: 2,
        strengths: [
          "The tracking of Lady Macbeth's language across the play — 'a little water' inverted to 'Out, damned spot!' inverted again to 'all the perfumes of Arabia' — is precise, sustained, and structurally aware.",
          "The analysis of 'little' shifting from dismissive to vulnerable is word-level work of the highest quality.",
          "The concept of guilt transforming from 'external, washable mark' to 'internal, indelible' one is cleanly articulated.",
        ],
        improvements: [
          "Could briefly note the dramatic form: the sleepwalking scene is observed by the doctor and gentlewoman, making Lady Macbeth's private guilt public — another inversion of her earlier control.",
        ],
        aoAddressed: [
          'AO2 — language tracking across the text',
          'AO1 — sustained structural argument',
        ],
      },
      {
        paragraphIndex: 3,
        strengths: [
          "The distinction between Macbeth's 'cognitive' guilt (soliloquy) and Lady Macbeth's 'somatic' guilt (sleepwalking) is an original, perceptive observation about dramatic form.",
          "The contextual reference to Calvinist predestination is integrated seamlessly — it earns its place by deepening the argument about guilt as 'eschatological.'",
          "The final sentence ('the play's true antagonist') provides a memorable, epigrammatic conclusion that reframes the whole text.",
        ],
        improvements: [
          'This is operating at the very top of the marking guide. No improvements needed.',
        ],
        aoAddressed: [
          'AO1 — conceptualised overview',
          'AO2 — dramatic form (soliloquy vs involuntary speech)',
          'AO3 — Calvinist theology, Jacobean worldview',
        ],
      },
    ],
    aos: [
      { code: 'AO1', label: 'Read, understand, respond', score: 12, max: 12 },
      { code: 'AO2', label: 'Language, form, structure', score: 12, max: 12 },
      { code: 'AO3', label: 'Context', score: 6, max: 6 },
      { code: 'AO4', label: 'SPaG', score: 4, max: 4 },
    ],
    gradeJustification:
      "This response exemplifies every Grade 9 descriptor. The thesis is original and conceptualised (guilt as 'the wrongdoing itself,' not its consequence). Word-level analysis is sustained throughout — from 'heat-oppressed' to 'incarnadine' to the shifting function of 'little.' Context (Calvinist predestination, divine order) is woven into the argument rather than appended. The structural awareness is exceptional: the distinction between soliloquy-guilt and somnambulist-guilt, and the tracking of Lady Macbeth's imagery across three key moments, demonstrate command of the whole text as a dramatic construction.",
    nextGradeTips: [
      'This essay is at the top of the marking guide. To reproduce this standard under exam pressure, practise planning a conceptual thesis in 3 minutes and aim for 4 paragraphs with embedded word-level analysis in each.',
    ],
    nextGrade: 9,
  },
]

/* ─── Helpers ───────────────────────────────────────────────── */

function gradeColour(g: number): string {
  if (g >= 9) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
  if (g >= 7) return 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300'
  return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40'
}

function aoBarWidth(score: number, max: number): string {
  return `${Math.round((score / max) * 100)}%`
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function MacbethEssayBankPage() {
  return (
    <>
      {/* These model essays use the AQA mark scheme (AO1=12, AO2=12, AO3=6,
          AO4=4). Macbeth is also set on Edexcel, OCR, Eduqas and Edexcel iGCSE,
          but those boards use different AO weightings, so the page is restricted
          to AQA students to avoid misleading mark allocations. */}
      <WrongBoardBanner
        contentBoards={['aqa']}
        contentName="Macbeth"
        redirectTo="/marking/sample"
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ── Breadcrumb ───────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/marking" className="hover:text-primary">
                Marking
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/marking/sample" className="hover:text-primary">
                Sample essays
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-foreground">Macbeth</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Macbeth Model Essay Bank
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Five original model essays at Grade 5, 7, and 9 on two popular Macbeth questions — Lady
            Macbeth as powerful and the theme of guilt. Every paragraph has marker annotations
            explaining what earns marks, what is missing, and how to move up a grade.
          </p>
        </header>

        {/* ── Quick-jump ───────────────────────────────────── */}
        <nav
          aria-label="Jump to essay"
          className="mb-10 rounded-xl border border-border bg-muted/30 p-4"
        >
          <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Jump to an essay
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ESSAYS.map((e) => (
              <li key={e.id}>
                <a
                  href={`#${e.id}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${gradeColour(e.grade)}`}
                  >
                    {e.grade}
                  </span>
                  <span className="line-clamp-1">{e.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Essays ───────────────────────────────────────── */}
        <div className="space-y-16">
          {ESSAYS.map((essay) => (
            <EssaySection key={essay.id} essay={essay} />
          ))}
        </div>

        {/* ── Footer CTA ───────────────────────────────────── */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <Link
            href="/marking/sample"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Back to all samples
          </Link>
          <Link
            href="/marking/submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Mark your own essay
          </Link>
        </div>
      </div>
    </>
  )
}

/* ─── Essay Section Component ───────────────────────────────── */

function EssaySection({ essay }: { essay: ModelEssay }) {
  const totalScore = essay.aos.reduce((s, ao) => s + ao.score, 0)
  const totalMax = essay.aos.reduce((s, ao) => s + ao.max, 0)

  return (
    <section id={essay.id} className="scroll-mt-20">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-extrabold ${gradeColour(essay.grade)}`}
        >
          {essay.grade}
        </span>
        <div className="flex-1">
          <h2 className="font-heading text-xl font-bold text-foreground">{essay.title}</h2>
          <p className="mt-0.5 text-sm italic text-muted-foreground">
            &ldquo;{essay.question}&rdquo;
          </p>
        </div>
      </div>

      {/* Essay text with annotations */}
      <div className="space-y-8">
        {essay.paragraphs.map((para, i) => {
          const ann = essay.annotations.find((a) => a.paragraphIndex === i)
          return (
            <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              {/* Paragraph label */}
              <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Paragraph {i + 1}
              </p>

              {/* Essay text */}
              <p className="mb-4 text-[0.9375rem] leading-relaxed text-foreground">{para}</p>

              {/* Marker annotations */}
              {ann && (
                <div className="space-y-3 border-t border-border pt-4">
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Marker Annotations
                  </p>

                  {/* Strengths */}
                  {ann.strengths.length > 0 && (
                    <div className="rounded-lg bg-primary/5 p-3">
                      <p className="mb-1.5 text-xs font-bold text-primary">Strengths</p>
                      <ul className="space-y-1">
                        {ann.strengths.map((s, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-xs leading-relaxed text-foreground"
                          >
                            <span className="mt-0.5 text-primary">+</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements */}
                  {ann.improvements.length > 0 && (
                    <div className="rounded-lg bg-destructive/5 p-3">
                      <p className="mb-1.5 text-xs font-bold text-destructive">
                        Areas for Improvement
                      </p>
                      <ul className="space-y-1">
                        {ann.improvements.map((s, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-xs leading-relaxed text-foreground"
                          >
                            <span className="mt-0.5 text-destructive">-</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* AOs addressed */}
                  <div className="flex flex-wrap gap-1.5">
                    {ann.aoAddressed.map((ao, j) => (
                      <span
                        key={j}
                        className="inline-flex rounded-full bg-muted px-2.5 py-0.5 text-[0.6875rem] font-medium text-muted-foreground"
                      >
                        {ao}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* AO Breakdown */}
      <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="mb-4 font-heading text-base font-bold text-foreground">
          AO Breakdown — {totalScore}/{totalMax}
        </h3>
        <div className="space-y-3">
          {essay.aos.map((ao) => {
            const pct = Math.round((ao.score / ao.max) * 100)
            return (
              <div key={ao.code} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-sm font-bold text-foreground">
                      {ao.code}
                    </span>
                    <span className="text-xs text-muted-foreground">{ao.label}</span>
                  </div>
                  <span className="font-mono text-sm font-semibold tabular-nums text-foreground">
                    {ao.score}
                    <span className="text-muted-foreground">/{ao.max}</span>
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                    style={{ width: aoBarWidth(ao.score, ao.max) }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Grade justification */}
      <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-5">
        <h3 className="mb-2 font-heading text-base font-bold text-foreground">
          Grade Justification
        </h3>
        <p className="text-sm leading-relaxed text-foreground">{essay.gradeJustification}</p>
      </div>

      {/* What would make this a higher grade? */}
      <div className="mt-4 rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="mb-3 font-heading text-base font-bold text-foreground">
          {essay.nextGrade > essay.grade
            ? `What would make this a Grade ${essay.nextGrade}?`
            : 'Maintaining this standard'}
        </h3>
        <ul className="space-y-2">
          {essay.nextGradeTips.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
              <span className="mt-0.5 shrink-0 text-primary font-bold">{i + 1}.</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
