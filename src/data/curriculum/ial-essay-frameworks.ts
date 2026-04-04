// ──────────────────────────────────────────────────────────────────────────────
// IAL English Language — Essay Planning Frameworks and Model Plans
// Edexcel IAL Units WEN01-WEN04
// ──────────────────────────────────────────────────────────────────────────────

export interface EssayFramework {
  id: string;
  title: string;
  unit: 'WEN01' | 'WEN02' | 'WEN03' | 'WEN04';
  yearGroup: 'Year 12' | 'Year 13';
  questionType: string;
  structure: { section: string; purpose: string; timing: string; guidance: string }[];
  keyPhrases: string[];
  commonMistakes: string[];
  modelPlanOutline: string[];
}

// ──────────────────────────────────────────────────────────────────────────────
// FRAMEWORKS
// ──────────────────────────────────────────────────────────────────────────────

export const ialEssayFrameworks: EssayFramework[] = [

  // ── WEN01 Framework 1: Data Analysis Essay ─────────────────────────────────
  {
    id: 'wen01-fw-01',
    title: 'Data Analysis Essay: Analysing Spoken and Written Language Data',
    unit: 'WEN01',
    yearGroup: 'Year 12',
    questionType: 'Data analysis: apply linguistic frameworks to supplied texts',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Establish analytical direction and introduce relevant frameworks',
        timing: '5 minutes',
        guidance:
          'Identify the text types, contexts and purposes. Name the two or three linguistic ' +
          'frameworks most relevant to the data (e.g. lexis, pragmatics, discourse). Offer a ' +
          'focused claim about what the data reveals — do not list features; establish an ' +
          'analytical direction that you will sustain throughout.',
      },
      {
        section: 'Framework Analysis 1: Lexis and Semantics',
        purpose: 'Explore word choices and their semantic effects in context',
        timing: '12 minutes',
        guidance:
          'Select three to four salient lexical items from the data. Comment on register, ' +
          'field-specific vocabulary, connotation, and any patterns of semantic prosody. ' +
          'Always connect observations back to context and purpose rather than labelling ' +
          'features in isolation.',
      },
      {
        section: 'Framework Analysis 2: Grammar and Syntax',
        purpose: 'Examine structural choices and their pragmatic or social functions',
        timing: '12 minutes',
        guidance:
          'Focus on clause structure, sentence types, and any marked grammatical choices ' +
          '(e.g. passive constructions, nominalisation, non-standard syntax). Explain the ' +
          'communicative effect of each feature rather than simply classifying it.',
      },
      {
        section: 'Framework Analysis 3: Discourse and Pragmatics',
        purpose: 'Analyse how meaning is shaped beyond sentence level',
        timing: '10 minutes',
        guidance:
          'Consider cohesion devices, turn-taking (if spoken), politeness strategies, face ' +
          'management, and implied meaning. Reference relevant theories (e.g. Grice\'s ' +
          'maxims, Brown and Levinson) to support analysis.',
      },
      {
        section: 'Conclusion',
        purpose: 'Synthesise findings and evaluate the significance of the data',
        timing: '6 minutes',
        guidance:
          'Draw together the strands of your analysis into a coherent evaluative statement. ' +
          'Avoid introducing new points. Reflect on what the combined evidence reveals about ' +
          'language use in this context.',
      },
    ],
    keyPhrases: [
      'the data reveals a pattern of...',
      'this lexical choice foregrounds...',
      'the syntactic structure here functions to...',
      'from a pragmatic perspective, this utterance...',
      'applying Goffman\'s concept of face, we can observe...',
      'the discourse structure reinforces...',
      'this semantic field signals...',
      'the register shifts in the data suggest...',
      'a corpus-informed reading of this text indicates...',
      'the convergence of these features implies...',
    ],
    commonMistakes: [
      'Feature-spotting without explaining communicative effect or contextual significance',
      'Treating spoken and written data with identical analytical criteria rather than ' +
        'accounting for mode-specific features',
      'Failing to sustain a coherent analytical argument across the essay',
      'Overloading the introduction with a list of frameworks rather than establishing a ' +
        'clear analytical claim',
    ],
    modelPlanOutline: [
      'Introduction: establish context (social media interaction vs. formal speech); ' +
        'claim that both texts construct authority through distinct lexical and pragmatic strategies',
      'Lexis: technical/formal vocabulary in Text A signals expert positioning; informal ' +
        'hedges in Text B signal solidarity-seeking',
      'Grammar: nominalisation in Text A creates impersonal authority; direct address ' +
        'and second-person pronouns in Text B build rapport',
      'Discourse/pragmatics: Text A follows formal adjacency pair structure; ' +
        'Text B uses positive politeness strategies and shared references',
      'Synthesis: both texts construct authority but through contrasting orientations — ' +
        'power-over (Text A) vs. power-with (Text B)',
      'Conclusion: the data illustrates that authority is contextually contingent and ' +
        'realised through complementary linguistic choices across mode and register',
    ],
  },

  // ── WEN01 Framework 2: Language and Identity Discursive Essay ───────────────
  {
    id: 'wen01-fw-02',
    title: 'Language and Identity: Discursive Essay',
    unit: 'WEN01',
    yearGroup: 'Year 12',
    questionType: 'Discursive essay: evaluate a claim about language and identity',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Frame the debate and state your evaluative stance',
        timing: '5 minutes',
        guidance:
          'Define the key terms in the question (e.g. identity, dialect, ethnicity). ' +
          'Briefly map the theoretical landscape. Close the introduction with a clear ' +
          'thesis that signals your overall position.',
      },
      {
        section: 'Argument 1: Supporting Evidence',
        purpose: 'Present the strongest case for the proposition',
        timing: '10 minutes',
        guidance:
          'Use academic research and/or linguistic data to build a well-evidenced argument. ' +
          'Integrate theorists (e.g. Labov, Trudgill, Gumperz) rather than simply ' +
          'name-dropping them.',
      },
      {
        section: 'Argument 2: Counter-Argument and Nuance',
        purpose: 'Explore complexity and qualification of the claim',
        timing: '10 minutes',
        guidance:
          'Introduce a counter-argument or a significant complication. Show awareness that ' +
          'identity is multiple, fluid, and intersectional. Reference theorists whose work ' +
          'challenges or complicates the initial position.',
      },
      {
        section: 'Argument 3: Synthesis',
        purpose: 'Bring together competing perspectives with critical evaluation',
        timing: '10 minutes',
        guidance:
          'Do not simply repeat prior points. Develop a more sophisticated position that ' +
          'accounts for the tension between arguments. Consider contextual variables such ' +
          'as audience, setting, and power.',
      },
      {
        section: 'Conclusion',
        purpose: 'Deliver a substantiated evaluative judgement',
        timing: '5 minutes',
        guidance:
          'Return to your thesis and refine it in light of the evidence discussed. Avoid ' +
          'sitting on the fence — commit to a position while acknowledging complexity.',
      },
    ],
    keyPhrases: [
      'identity is not fixed but dynamically constructed through language...',
      'Labov\'s findings suggest that speakers accommodate to...',
      'the concept of code-switching indicates...',
      'intersectionality complicates the straightforward equation of language with...',
      'this position is complicated by evidence from...',
      'from a social constructionist perspective...',
      'the ethnolinguistic vitality of a community influences...',
      'gender/ethnicity/class intersect with language use to produce...',
      'this argument is strengthened by corpus evidence showing...',
      'a more nuanced reading of the data reveals...',
    ],
    commonMistakes: [
      'Presenting arguments as a list rather than building a sustained analytical line',
      'Mentioning theorists without explaining or applying their ideas',
      'Failing to engage with the counter-argument, resulting in a one-sided essay',
      'Concluding without committing to an evaluative judgement',
    ],
    modelPlanOutline: [
      'Introduction: define identity as socially constructed; state that language is the ' +
        'primary means through which identity is performed and negotiated',
      'Argument 1: Labov\'s New York department store study demonstrates that speakers ' +
        'adjust phonological features to align with social aspirations',
      'Argument 2: Gumperz and code-switching evidence shows identity is multiple and ' +
        'context-dependent rather than singular',
      'Argument 3: intersectionality (Crenshaw applied to language) reveals that class, ' +
        'gender, and ethnicity cannot be treated as separate identity vectors',
      'Synthesis: language constructs identity, but that identity is always situated, ' +
        'contested, and subject to power relations',
      'Conclusion: language is both a mirror of and a mechanism for identity formation; ' +
        'reductive accounts that fix identity to a single variable are inadequate',
    ],
  },

  // ── WEN01 Framework 3: Short Analytical Paragraph on Sociolinguistic Data ───
  {
    id: 'wen01-fw-03',
    title: 'Short Analytical Paragraph: Sociolinguistic Data',
    unit: 'WEN01',
    yearGroup: 'Year 12',
    questionType: 'Short-answer analysis: write a focused analytical paragraph on a data extract',
    structure: [
      {
        section: 'Topic Sentence',
        purpose: 'State the analytical point the paragraph will develop',
        timing: '1 minute',
        guidance:
          'Open with a claim, not an observation. For example: "The speaker\'s use of ' +
          'non-standard syntax functions as a marker of in-group solidarity" — not ' +
          '"The speaker uses non-standard syntax."',
      },
      {
        section: 'Evidence',
        purpose: 'Quote or reference specific linguistic data to support the claim',
        timing: '2 minutes',
        guidance:
          'Select one to two precise examples from the extract. Keep quotations brief and ' +
          'ensure they directly support the topic sentence.',
      },
      {
        section: 'Analysis',
        purpose: 'Explain the linguistic significance of the evidence',
        timing: '3 minutes',
        guidance:
          'Apply the relevant framework (lexis, grammar, phonology, discourse). Name the ' +
          'feature precisely. Explain the communicative or social effect. Reference a ' +
          'relevant theory or concept to deepen the analysis.',
      },
      {
        section: 'Contextualisation',
        purpose: 'Connect the analysis to the broader sociolinguistic context',
        timing: '2 minutes',
        guidance:
          'Place the feature in its social, cultural, or situational context. Consider ' +
          'how power, gender, age, or ethnicity might inform interpretation.',
      },
    ],
    keyPhrases: [
      'this feature functions as...',
      'the pragmatic effect of this choice is...',
      'this can be understood through the lens of...',
      'the social meaning encoded here is...',
      'drawing on Labov\'s notion of prestige, we can argue...',
      'this linguistic choice indexes...',
      'the speaker\'s deployment of X signals...',
      'this is consistent with research into...',
      'the contextual variable most relevant here is...',
      'this finding suggests a broader pattern of...',
    ],
    commonMistakes: [
      'Opening with an observation rather than an analytical claim',
      'Quoting long stretches of data instead of selecting precise evidence',
      'Describing what the feature is rather than what it does',
      'Omitting contextualisation so the analysis appears decontextualised',
    ],
    modelPlanOutline: [
      'Topic sentence: the repeated hedging devices in this extract construct the speaker ' +
        'as tentative, signalling awareness of face threat',
      'Evidence: "sort of", "I suppose", "maybe" appear in close proximity within ' +
        'a single turn',
      'Analysis: these are positive politeness strategies (Brown and Levinson) that ' +
        'mitigate the imposition of the speaker\'s request',
      'Analysis extended: modal hedges also reduce the speaker\'s epistemic commitment, ' +
        'consistent with Labov\'s findings on vernacular speech in formal contexts',
      'Contextualisation: the institutional setting (job interview) amplifies the ' +
        'pressure to manage face, motivating the density of hedging',
      'Conclusion sentence: the convergence of these features reveals how speakers ' +
        'navigate power asymmetry through pragmatic self-presentation',
    ],
  },

  // ── WEN01 Framework 4: Comparative Analysis of Two Language Contexts ─────────
  {
    id: 'wen01-fw-04',
    title: 'Comparative Analysis: Two Language Contexts',
    unit: 'WEN01',
    yearGroup: 'Year 12',
    questionType: 'Comparative analysis: compare language use across two different contexts',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Establish the comparative frame and state your argument',
        timing: '5 minutes',
        guidance:
          'Briefly contextualise both texts. Identify the key point of similarity or ' +
          'contrast that will organise your comparison. Avoid a simple "Text A does X, ' +
          'Text B does Y" listing approach — instead, establish a comparative claim.',
      },
      {
        section: 'Comparative Point 1: Lexis and Register',
        purpose: 'Compare lexical choices and register across the two texts',
        timing: '10 minutes',
        guidance:
          'Identify corresponding or contrasting features across both texts. Use discourse ' +
          'deixis (e.g. "similarly", "in contrast", "whereas") to maintain a comparative ' +
          'logic. Avoid treating each text in isolation.',
      },
      {
        section: 'Comparative Point 2: Grammatical and Structural Features',
        purpose: 'Compare syntactic and structural strategies',
        timing: '10 minutes',
        guidance:
          'Focus on a structural feature that appears in both texts but serves different ' +
          'or similar functions. Consider how mode (spoken vs. written) shapes grammatical ' +
          'choices.',
      },
      {
        section: 'Comparative Point 3: Pragmatics and Context',
        purpose: 'Compare how context shapes meaning-making in each text',
        timing: '8 minutes',
        guidance:
          'Discuss how audience, purpose, and setting interact with linguistic choices ' +
          'differently or similarly across the two texts.',
      },
      {
        section: 'Conclusion',
        purpose: 'Evaluate the significance of the comparison',
        timing: '5 minutes',
        guidance:
          'Synthesise the comparisons into an evaluative statement about what the ' +
          'comparison reveals regarding language in context. Avoid a mere summary.',
      },
    ],
    keyPhrases: [
      'in contrast to Text A, Text B employs...',
      'both texts share a reliance on...',
      'whereas Text A prioritises..., Text B foregrounds...',
      'the contextual difference between the two texts is reflected in...',
      'this comparative reading suggests that...',
      'the modal choices in Text A stand in stark contrast to...',
      'a shared pragmatic strategy of X is evident in both texts, albeit realised differently',
      'the mode-specific features of each text illuminate...',
      'this parallel construction suggests a common communicative goal of...',
      'the divergence in register signals differing orientations toward...',
    ],
    commonMistakes: [
      'Writing two separate analyses rather than weaving a genuine comparison',
      'Neglecting the importance of context in explaining why the texts differ or converge',
      'Using "compare" as a synonym for "list similarities"; failing to evaluate significance',
      'Applying the same framework to both texts without considering mode-specific features',
    ],
    modelPlanOutline: [
      'Introduction: Text A (formal public speech) and Text B (online forum post) both ' +
        'construct expertise, but through contrasting linguistic means',
      'Lexis: Text A uses technical field-specific vocabulary to signal authority; ' +
        'Text B uses informal hedges and first-person anecdotes to build credibility through relatability',
      'Grammar: Text A deploys passive constructions and nominalisation to create ' +
        'objectivity; Text B uses active voice and imperative mood to create directness',
      'Pragmatics: Text A manages face through formal politeness conventions; ' +
        'Text B uses solidarity-based positive politeness',
      'Synthesis: the contrast reflects mode and audience — formal register signals ' +
        'institutional authority; informal register signals peer credibility',
      'Conclusion: the comparison illustrates that expertise is not a fixed linguistic ' +
        'property but is constructed differently according to context and audience expectations',
    ],
  },

  // ── WEN02 Framework 5: Historical Language Change Analysis Essay ─────────────
  {
    id: 'wen02-fw-05',
    title: 'Historical Language Change: Analysis Essay',
    unit: 'WEN02',
    yearGroup: 'Year 12',
    questionType: 'Historical data analysis: trace and explain patterns of language change',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Establish the chronological scope and central analytical argument',
        timing: '5 minutes',
        guidance:
          'Identify the time period and language level(s) under examination. State the ' +
          'primary change under discussion and the external factors (social, political, ' +
          'technological) that drove it. Avoid a narrative account — establish an ' +
          'analytical thesis from the outset.',
      },
      {
        section: 'Lexical and Semantic Change',
        purpose: 'Trace patterns of word-level change over time',
        timing: '12 minutes',
        guidance:
          'Discuss semantic shift (broadening, narrowing, amelioration, pejoration), ' +
          'borrowing, and neologism. Use diachronic evidence from the texts or your ' +
          'subject knowledge. Link changes to identifiable social or historical causes.',
      },
      {
        section: 'Grammatical and Syntactic Change',
        purpose: 'Analyse structural changes and their social drivers',
        timing: '12 minutes',
        guidance:
          'Focus on changes in morphology (e.g. loss of inflectional endings), pronoun ' +
          'usage, or syntactic word order. Explain each change with reference to ' +
          'identifiable processes (e.g. grammaticalisation, analogy).',
      },
      {
        section: 'Contextual Factors',
        purpose: 'Evaluate the external drivers of the changes identified',
        timing: '8 minutes',
        guidance:
          'Consider the role of printing, standardisation, colonialism, digital media, ' +
          'or social mobility. Reference relevant scholars (e.g. Aitchison, Crystal) to ' +
          'support your explanation.',
      },
      {
        section: 'Conclusion',
        purpose: 'Evaluate the significance and trajectory of the changes',
        timing: '5 minutes',
        guidance:
          'Reflect on what the changes reveal about the relationship between language ' +
          'and society. Consider whether the trajectory is likely to continue.',
      },
    ],
    keyPhrases: [
      'the process of semantic broadening is evident in...',
      'this change can be attributed to contact with...',
      'the influence of standardisation led to...',
      'Aitchison\'s metaphor of "damp spoon" decline is relevant here because...',
      'the grammaticalisation of X into a function word illustrates...',
      'this shift reflects the broader social change of...',
      'corpus evidence from the period indicates...',
      'the displacement of X by Y occurred gradually through...',
      'the printing press accelerated the process of...',
      'this diachronic pattern suggests that language change is...',
    ],
    commonMistakes: [
      'Writing a chronological narrative instead of an analytical argument',
      'Identifying changes without explaining their social or linguistic causes',
      'Treating language change as inherently progressive or degenerative',
      'Failing to distinguish between different levels of language change (lexis, grammar, phonology)',
    ],
    modelPlanOutline: [
      'Introduction: Old English to Present Day — claim that social upheaval is the ' +
        'primary driver of the most significant lexical and grammatical changes',
      'Lexis: Norman Conquest introduced French borrowings that stratified the lexicon ' +
        'by social register (e.g. beef/cow, pork/pig)',
      'Semantics: semantic pejoration of terms associated with lower social groups ' +
        'reflects historical power structures',
      'Grammar: loss of inflectional case endings between Old and Middle English enabled ' +
        'greater syntactic flexibility and contact-induced simplification',
      'Context: printing press (1476) standardised spelling and accelerated the ' +
        'prestige of London dialect; digital media now drives rapid lexical innovation',
      'Conclusion: language change is inevitable, socially driven, and neither ' +
        'degenerative nor progressive — it reflects the society that speaks it',
    ],
  },

  // ── WEN02 Framework 6: Contemporary Change Discursive Essay ─────────────────
  {
    id: 'wen02-fw-06',
    title: 'Contemporary Language Change: Discursive Essay',
    unit: 'WEN02',
    yearGroup: 'Year 12',
    questionType: 'Discursive essay: evaluate the nature and significance of contemporary language change',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Define contemporary change and establish analytical focus',
        timing: '5 minutes',
        guidance:
          'Clarify which aspects of contemporary change will be examined (e.g. digital ' +
          'communication, globalisation, youth language). State your evaluative thesis ' +
          'about the significance of these changes.',
      },
      {
        section: 'Internal Linguistic Processes',
        purpose: 'Explain how language changes through its own internal mechanisms',
        timing: '10 minutes',
        guidance:
          'Discuss processes such as affixation, blending, clipping, conversion, and ' +
          'extension of existing words. Provide contemporary examples and explain their ' +
          'systemic logic.',
      },
      {
        section: 'External Social Drivers',
        purpose: 'Analyse how technology, globalisation, and social change accelerate change',
        timing: '10 minutes',
        guidance:
          'Focus on digital media, social networking, and global English spread as ' +
          'drivers of rapid lexical innovation and variation. Reference Crystal, ' +
          'Thurlow, or Herring where relevant.',
      },
      {
        section: 'Evaluation of Significance',
        purpose: 'Assess whether contemporary change is exceptional or continuous with historical patterns',
        timing: '10 minutes',
        guidance:
          'Compare the pace and nature of contemporary change with historical precedents. ' +
          'Evaluate whether the changes are systemic or surface-level.',
      },
      {
        section: 'Conclusion',
        purpose: 'Deliver a substantiated evaluative judgement',
        timing: '5 minutes',
        guidance:
          'Commit to a position on the significance of contemporary change. Acknowledge ' +
          'the complexity while arguing a clear overall point.',
      },
    ],
    keyPhrases: [
      'the process of blending (portmanteau formation) is particularly productive in...',
      'Crystal\'s analysis of Netspeak reveals...',
      'globalisation has accelerated the spread of American English lexis into...',
      'this innovation is consistent with the systemic principle of...',
      'the register of digital communication has enabled...',
      'far from representing decline, these changes reflect...',
      'this neologism demonstrates the productivity of the affix...',
      'social media platforms function as accelerators of...',
      'the convergence between spoken and written norms in CMC suggests...',
      'this change is significant because it alters the structural property of...',
    ],
    commonMistakes: [
      'Treating contemporary change as uniquely significant without comparison with historical change',
      'Conflating spelling variation with grammatical change',
      'Ignoring internal linguistic mechanisms and focusing exclusively on social drivers',
      'Presenting change as either entirely positive or negative without nuance',
    ],
    modelPlanOutline: [
      'Introduction: digital communication has accelerated certain types of lexical ' +
        'change; claim that the mechanisms are not new, but the pace is unprecedented',
      'Internal processes: blending ("vlog", "Brexit"), conversion, and affixation ' +
        '("-gate", "de-") remain the primary generative mechanisms',
      'External drivers: social media platforms create new registers and spread ' +
        'innovations rapidly; Crystal\'s notion of "Netspeak" as a new hybrid mode',
      'Evaluation: changes are primarily lexical and register-level, not structural; ' +
        'core grammar remains stable despite surface-level variation',
      'Counter-view: some scholars argue that CMC is driving structural change in ' +
        'punctuation conventions and sentence boundaries',
      'Conclusion: contemporary change is significant in pace and visibility, but ' +
        'linguistically it follows the same internal logic as historical change',
    ],
  },

  // ── WEN02 Framework 7: Language Debate Essay (Prescriptivism vs Descriptivism) ─
  {
    id: 'wen02-fw-07',
    title: 'Language Debate Essay: Prescriptivism vs Descriptivism',
    unit: 'WEN02',
    yearGroup: 'Year 12',
    questionType: 'Debate essay: evaluate competing attitudes toward language change and correctness',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Define the debate and establish your evaluative position',
        timing: '5 minutes',
        guidance:
          'Define prescriptivism and descriptivism with precision. Acknowledge that ' +
          'both are coherent positions with different starting assumptions. State which ' +
          'framework is better supported by linguistic evidence and why.',
      },
      {
        section: 'The Prescriptivist Case',
        purpose: 'Present the strongest version of the prescriptivist argument',
        timing: '10 minutes',
        guidance:
          'Discuss the role of standard language ideology, the arguments for ' +
          'standardisation in education and public life, and the views of scholars ' +
          'such as John Humphrys or Simon Heffer. Represent the position fairly before ' +
          'evaluating it.',
      },
      {
        section: 'The Descriptivist Case',
        purpose: 'Present the linguistic case for descriptivism',
        timing: '10 minutes',
        guidance:
          'Explain that all natural languages are rule-governed; change is systematic, ' +
          'not random degradation. Reference Aitchison, Crystal, and corpus linguistics ' +
          'to support the descriptivist position.',
      },
      {
        section: 'Critical Evaluation',
        purpose: 'Weigh the evidence and explore the ideological dimensions of the debate',
        timing: '8 minutes',
        guidance:
          'Examine how prescriptive attitudes frequently correlate with social prejudice ' +
          'and the policing of class, ethnicity, and gender. Evaluate the practical ' +
          'implications of each stance for education and public discourse.',
      },
      {
        section: 'Conclusion',
        purpose: 'Deliver a clear, substantiated evaluative judgement',
        timing: '5 minutes',
        guidance:
          'Commit to a position. The most sophisticated essays argue that descriptivism ' +
          'is the more scientifically defensible position while acknowledging that some ' +
          'degree of standardisation serves practical social purposes.',
      },
    ],
    keyPhrases: [
      'prescriptivism proceeds from the assumption that...',
      'descriptivism, by contrast, treats language as...',
      'Aitchison argues that the "crumbling castle" metaphor misrepresents...',
      'standard language ideology conflates social prestige with linguistic correctness',
      'corpus evidence demonstrates that the alleged "error" is in fact...',
      'the policing of language often functions as a proxy for...',
      'Crystal\'s distinction between descriptive adequacy and prescriptive prejudice...',
      'the prescriptivist position is weakened by its failure to account for...',
      'all natural languages are equally systematic; variation is not deviation but...',
      'the ideological dimension of this debate reveals that...',
    ],
    commonMistakes: [
      'Presenting prescriptivism as obviously wrong without engaging with its strongest arguments',
      'Confusing descriptivism with "anything goes" rather than systematic empirical analysis',
      'Failing to engage with the ideological and social power dimensions of the debate',
      'Concluding without committing to a clearly argued evaluative position',
    ],
    modelPlanOutline: [
      'Introduction: define both positions; thesis — descriptivism is linguistically ' +
        'better supported but prescriptivism reflects real social pressures',
      'Prescriptivist case: standard language serves communication across communities; ' +
        'Humphrys argues that change erodes clarity and precision',
      'Descriptivist case: Aitchison — "damp spoon" fallacy; change is systematic; ' +
        'all dialects are rule-governed; Crystal on the historical inevitability of change',
      'Ideological critique: prescriptive attitudes frequently police working-class, ' +
        'ethnic minority, or female language use rather than logic of the language system',
      'Synthesis: education benefits from a standard, but this must not be achieved ' +
        'by stigmatising non-standard varieties',
      'Conclusion: descriptivism is the more defensible linguistic position; ' +
        'prescriptivism is better understood as social ideology than linguistics',
    ],
  },

  // ── WEN02 Framework 8: Child Language Acquisition Essay ─────────────────────
  {
    id: 'wen02-fw-08',
    title: 'Child Language Acquisition Essay',
    unit: 'WEN02',
    yearGroup: 'Year 12',
    questionType: 'Theory evaluation essay: assess theoretical accounts of child language acquisition',
    structure: [
      {
        section: 'Introduction',
        purpose: 'Establish the theoretical landscape and your central evaluative claim',
        timing: '5 minutes',
        guidance:
          'Briefly map the main competing frameworks (nativist, behaviourist, ' +
          'interactionist, usage-based). State the question focus and offer a thesis ' +
          'that distinguishes the most well-supported account.',
      },
      {
        section: 'Stage-by-Stage Development',
        purpose: 'Outline the key stages of language acquisition with evidence',
        timing: '10 minutes',
        guidance:
          'Cover the major milestones: pre-linguistic (cooing, babbling), holophrastic, ' +
          'two-word, telegraphic, and beyond. Use research evidence (e.g. Brown\'s ' +
          'morpheme acquisition order) to support stage claims.',
      },
      {
        section: 'Theoretical Accounts',
        purpose: 'Evaluate the major theoretical frameworks',
        timing: '12 minutes',
        guidance:
          'Assess nativism (Chomsky, LAD, poverty of the stimulus), behaviourism ' +
          '(Skinner, operant conditioning), and interactionism (Vygotsky, ZPD, ' +
          'CDS/motherese). Evaluate strengths and weaknesses of each.',
      },
      {
        section: 'Evidence and Application',
        purpose: 'Apply theoretical claims to evidence from child language data',
        timing: '8 minutes',
        guidance:
          'Use examples of over-generalisation, virtuous errors, or CDS features to ' +
          'test theoretical claims. Consider what the evidence most strongly supports.',
      },
      {
        section: 'Conclusion',
        purpose: 'Deliver a substantiated evaluation of the competing accounts',
        timing: '5 minutes',
        guidance:
          'Argue which theoretical framework is best supported by the overall evidence ' +
          'while acknowledging the partial validity of others.',
      },
    ],
    keyPhrases: [
      'Chomsky\'s notion of the Language Acquisition Device proposes that...',
      'the poverty of the stimulus argument suggests that...',
      'Skinner\'s behaviourist account is undermined by evidence of...',
      'the interactionist framework, supported by Vygotsky, holds that...',
      'child-directed speech (CDS) features such as higher pitch and simplified syntax...',
      'over-generalisation errors (e.g. "goed", "runned") suggest that children are...',
      'Brown\'s morpheme acquisition order provides evidence that...',
      'the critical period hypothesis (Lenneberg) is supported by cases such as...',
      'usage-based approaches challenge nativism by arguing that...',
      'the most compelling account synthesises innate capacity with environmental input',
    ],
    commonMistakes: [
      'Describing stages of acquisition without relating them to theoretical frameworks',
      'Treating Chomsky\'s nativism as definitively correct without acknowledging challenges',
      'Confusing the LAD as a physical brain structure rather than a theoretical construct',
      'Failing to use specific child language examples to test and illustrate theoretical claims',
    ],
    modelPlanOutline: [
      'Introduction: three main accounts (nativist, behaviourist, interactionist); ' +
        'thesis — interactionist accounts best explain the full range of acquisition evidence',
      'Stage overview: pre-linguistic through telegraphic stage; key milestone evidence ' +
        'from Brown, Berko, and Bates',
      'Nativism: LAD explains speed of acquisition and universal grammar; ' +
        'weaknesses — cannot account for role of input or cultural variation',
      'Behaviourism: reinforcement model — fails to explain novel utterances and ' +
        'virtuous errors; Chomsky\'s 1959 critique remains relevant',
      'Interactionism: ZPD and scaffolding; CDS as finely tuned input; ' +
        'usage-based theories (Tomasello) support constructivist view',
      'Conclusion: no single account is sufficient; the weight of evidence supports an ' +
        'interactionist position that recognises both biological readiness and environmental scaffolding',
    ],
  },

  // ── WEN03 Framework 9: Original Writing Planning Framework ──────────────────
  {
    id: 'wen03-fw-09',
    title: 'Original Writing: Planning Framework',
    unit: 'WEN03',
    yearGroup: 'Year 13',
    questionType: 'Coursework: plan and draft an original piece of crafted writing',
    structure: [
      {
        section: 'Audience, Purpose, and Form Decision',
        purpose: 'Establish the communicative context for the piece',
        timing: '15 minutes',
        guidance:
          'Define your target audience precisely (age, interest, prior knowledge). ' +
          'Clarify your dominant purpose (entertain, persuade, inform, provoke). ' +
          'Select a form appropriate to that audience-purpose combination (e.g. short ' +
          'story, personal essay, monologue, journalism). Justify your choices in your ' +
          'planning notes.',
      },
      {
        section: 'Structural Planning',
        purpose: 'Map the overall architecture of the piece',
        timing: '20 minutes',
        guidance:
          'Decide on narrative structure (linear, non-linear, circular), point of view, ' +
          'and tonal register. Sketch the opening, key turning points, and ending. ' +
          'Consider how structural choices serve your communicative purpose.',
      },
      {
        section: 'Linguistic Register and Style Plan',
        purpose: 'Plan the stylistic repertoire you will deploy',
        timing: '15 minutes',
        guidance:
          'List the specific techniques you intend to use: lexical register, sentence ' +
          'variety (syndetic, asyndetic, periodic), figurative language (metaphor, ' +
          'pathetic fallacy, symbolism), and rhythm. These decisions should be ' +
          'defensible in your critical commentary.',
      },
      {
        section: 'Drafting and Revision',
        purpose: 'Produce and refine the piece',
        timing: 'Ongoing over coursework period',
        guidance:
          'Write a first draft, then revise with specific attention to: opening impact, ' +
          'sentence-level rhythm and variation, coherence of voice, and the cumulative ' +
          'effect of style choices. Use your planning notes to maintain intentionality.',
      },
      {
        section: 'Self-Evaluation',
        purpose: 'Reflect on how successfully the piece achieves its aims',
        timing: '20 minutes',
        guidance:
          'Assess the draft against your original audience-purpose specification. ' +
          'Identify two or three areas for revision and articulate why specific changes ' +
          'would improve communicative effectiveness. This feeds directly into the ' +
          'critical commentary.',
      },
    ],
    keyPhrases: [
      'the intended audience will recognise this register as...',
      'this structural choice creates the effect of...',
      'the shift in tense/person at this point signals...',
      'the figurative language here serves the dual purpose of...',
      'sentence rhythm is varied here to achieve...',
      'the opening is designed to create immediate engagement by...',
      'the cumulative effect of these style choices is...',
      'the narrative perspective is chosen to...',
      'the cyclical structure reinforces the thematic concern with...',
      'this lexical choice is precisely calibrated to the register of...',
    ],
    commonMistakes: [
      'Selecting a form without considering whether it suits the intended audience and purpose',
      'Producing a technically competent piece that lacks a distinctive, sustained voice',
      'Failing to plan structure before drafting, resulting in an incoherent arc',
      'Making style choices that are not reflected or explained in the critical commentary',
    ],
    modelPlanOutline: [
      'Audience-purpose-form: literary personal essay for adult readers of a cultural ' +
        'magazine; purpose to explore the estrangement of bilingual identity; form chosen ' +
        'for its capacity to blend narration and reflection',
      'Structure: non-linear; opens with a sensory memory (childhood), shifts to ' +
        'present-tense reflection, closes with return to the opening image (circular)',
      'Register/style plan: intimate second-person address; fragmented syntax to ' +
        'represent disorientation; bilingual code-switching as a structural device; ' +
        'extended metaphor of "translation" as loss',
      'Draft focus: opening paragraph — sensory detail and second-person address to ' +
        'create immediacy; closing paragraph — resolution through ambiguity, not resolution',
      'Self-evaluation: assess whether the code-switching feels organic or performative; ' +
        'revise sentence length variation in the central section',
      'Commentary hook: the non-linear structure enacts the essay\'s central argument ' +
        'that identity cannot be linearised — it is a form of active, ongoing negotiation',
    ],
  },

  // ── WEN03 Framework 10: Critical Commentary Structure Guide ─────────────────
  {
    id: 'wen03-fw-10',
    title: 'Critical Commentary: Structure Guide',
    unit: 'WEN03',
    yearGroup: 'Year 13',
    questionType: 'Coursework: write a critical commentary on your original writing',
    structure: [
      {
        section: 'Statement of Intent',
        purpose: 'Articulate the communicative aims of the piece',
        timing: '10 minutes',
        guidance:
          'State your audience, purpose, and form and explain why these choices were ' +
          'made. Be specific: who exactly is the reader, and what specific effect do ' +
          'you intend to produce? Avoid vague claims such as "to interest the reader".',
      },
      {
        section: 'Structural and Organisational Choices',
        purpose: 'Explain how the overall architecture of the piece serves your aims',
        timing: '15 minutes',
        guidance:
          'Discuss how structure (e.g. circular, episodic, fragmented) creates meaning. ' +
          'Reference specific moments in the text and explain what structural choice ' +
          'was made and why.',
      },
      {
        section: 'Language and Style Analysis',
        purpose: 'Analyse specific linguistic choices using accurate metalanguage',
        timing: '20 minutes',
        guidance:
          'Select three to four specific stylistic choices (lexical, grammatical, ' +
          'figurative). For each, name the technique precisely, quote from the piece, ' +
          'and explain its intended effect on the reader.',
      },
      {
        section: 'Influences and Intertextuality',
        purpose: 'Situate your writing in relation to relevant models and traditions',
        timing: '10 minutes',
        guidance:
          'Refer to at least two texts or writers who have influenced your approach. ' +
          'Explain how and why, not just that you read them. Show how your piece adapts ' +
          'or responds to these models.',
      },
      {
        section: 'Self-Evaluation and Reflection',
        purpose: 'Critically evaluate the success of your piece',
        timing: '10 minutes',
        guidance:
          'Acknowledge at least one aspect of the piece that could be improved. ' +
          'Explain what you would revise and why it would enhance the communicative ' +
          'effectiveness. Avoid false modesty or excessive self-congratulation.',
      },
    ],
    keyPhrases: [
      'my intended audience is..., and this choice is reflected in...',
      'the form was selected because it enables...',
      'the structure is designed to create the effect of...',
      'the metaphor of X functions to...',
      'drawing on the style of [author], I adopted...',
      'the register shift at this point is deliberate because...',
      'the sentence rhythm in this passage is calibrated to...',
      'in revision, I would reconsider X because...',
      'the intertextual reference to X enriches the piece by...',
      'this linguistic choice enacts the thematic concern with...',
    ],
    commonMistakes: [
      'Describing what happens in the piece rather than explaining why specific choices were made',
      'Using imprecise or incorrect metalanguage (e.g. calling a metaphor a "simile")',
      'Claiming effects without quoting the specific text that produces them',
      'Failing to evaluate the piece critically — only celebrating its successes',
    ],
    modelPlanOutline: [
      'Statement of intent: short story for an educated adult reader; purpose to ' +
        'explore grief through understatement; form chosen for its capacity to sustain irony',
      'Structure: third-person limited perspective to create distance; ' +
        'temporal ellipsis to enact the disorientation of bereavement',
      'Language analysis: semantic field of domestic routine to contrast with the ' +
        'enormity of loss (bathetic juxtaposition); free indirect discourse to allow ' +
        'reader access to character\'s interior voice without direct statement',
      'Influences: Carver\'s minimalism — saying less to mean more; O\'Brien\'s ' +
        'use of repetition to enact psychological fixation',
      'Self-evaluation: the final paragraph risks sentimentality; a revision could ' +
        'replace the closing image with a more ambiguous domestic detail',
      'Meta-reflection: the restraint of the prose is itself the argument — ' +
        'grief that exceeds language is best approached by withholding language',
    ],
  },

  // ── WEN04 Framework 11: Investigation Report Structure Framework ─────────────
  {
    id: 'wen04-fw-11',
    title: 'Language Investigation: Report Structure Framework',
    unit: 'WEN04',
    yearGroup: 'Year 13',
    questionType: 'Coursework: plan and structure a language investigation report',
    structure: [
      {
        section: 'Introduction and Research Question',
        purpose: 'Establish the focus and rationale for the investigation',
        timing: '1-2 hours drafting',
        guidance:
          'State the research question precisely. Justify its linguistic significance — ' +
          'why is this question worth investigating? Identify the key variables and ' +
          'explain how they connect to established linguistic research. Avoid questions ' +
          'that are too broad or too narrow to yield meaningful findings.',
      },
      {
        section: 'Literature Review and Theoretical Framework',
        purpose: 'Situate the investigation within existing research',
        timing: '2-3 hours drafting',
        guidance:
          'Review a minimum of three to four relevant academic sources. Explain how ' +
          'existing research informs your hypotheses. Identify any gaps in the literature ' +
          'that your investigation addresses. Do not summarise sources — evaluate them.',
      },
      {
        section: 'Methodology',
        purpose: 'Explain and justify data collection and analytical methods',
        timing: '1-2 hours drafting',
        guidance:
          'Describe your data collection process (corpus, interviews, social media ' +
          'scraping, etc.). Justify your sampling decisions. Explain your analytical ' +
          'framework (quantitative, qualitative, or mixed methods). Address ethical ' +
          'considerations, including participant consent and anonymisation.',
      },
      {
        section: 'Data Presentation',
        purpose: 'Present findings clearly and systematically',
        timing: '2-3 hours drafting',
        guidance:
          'Organise findings by theme or linguistic level. Use tables, frequency counts, ' +
          'or charts where appropriate. Present data objectively at this stage — ' +
          'interpretation belongs in the discussion section.',
      },
      {
        section: 'Discussion',
        purpose: 'Interpret findings in relation to your research question and literature',
        timing: '2-3 hours drafting',
        guidance:
          'Explain what the data reveals. Connect findings to the theoretical framework. ' +
          'Address any unexpected or contradictory results. Evaluate the extent to which ' +
          'your hypotheses are supported.',
      },
      {
        section: 'Conclusion',
        purpose: 'Evaluate the investigation and suggest directions for further research',
        timing: '1 hour drafting',
        guidance:
          'Summarise the key findings concisely. Reflect on the limitations of your ' +
          'methodology. Propose two or three directions for future research. End with a ' +
          'clear statement of the investigation\'s contribution to the field.',
      },
    ],
    keyPhrases: [
      'the research question is designed to investigate the hypothesis that...',
      'existing literature (e.g. X, Y) suggests that...',
      'the data was collected using a [method] in order to...',
      'the sample was selected to ensure [representativeness/focus] because...',
      'the quantitative analysis reveals a statistically notable pattern of...',
      'the qualitative close reading of these extracts suggests...',
      'this finding is consistent with / challenges the prediction of...',
      'a potential limitation of the methodology is...',
      'the implications of these findings for understanding X are...',
      'further research might investigate the effect of [variable] on...',
    ],
    commonMistakes: [
      'Choosing a research question that is too vague (e.g. "How does language change?") ' +
        'rather than precisely scoped',
      'Summarising sources in the literature review rather than critically evaluating them',
      'Mixing data presentation with interpretation instead of separating the two sections',
      'Failing to acknowledge methodological limitations, which undermines academic credibility',
    ],
    modelPlanOutline: [
      'Research question: to what extent does gender influence the use of hedging ' +
        'devices in professional workplace email communication?',
      'Literature review: Lakoff (1975) on women\'s language features; Holmes (1995) ' +
        'on politeness and gender; Cameron (2007) critique of gender essentialism; ' +
        'corpus studies of CMC register',
      'Methodology: 60-email corpus (30 per gender) from a single workplace; ' +
        'quantitative frequency analysis of hedging devices; qualitative close reading ' +
        'of selected extracts; ethical consent obtained',
      'Data: frequency table of hedge types by gender; annotated extracts showing ' +
        'hedging in context',
      'Discussion: data partially supports Lakoff but is complicated by role hierarchy; ' +
        'Cameron\'s critique of gender essentialism supported by variation within groups',
      'Conclusion: gender is a significant but not deterministic variable; ' +
        'professional role may be a stronger predictor; future research should ' +
        'control for seniority as an independent variable',
    ],
  },

  // ── WEN04 Framework 12: Findings and Discussion Section Guide ───────────────
  {
    id: 'wen04-fw-12',
    title: 'Language Investigation: Findings and Discussion Section Guide',
    unit: 'WEN04',
    yearGroup: 'Year 13',
    questionType: 'Coursework: write the findings and discussion sections of a language investigation',
    structure: [
      {
        section: 'Organising the Findings Section',
        purpose: 'Present data clearly and systematically before interpretation',
        timing: '2-3 hours drafting',
        guidance:
          'Group findings by linguistic level (lexis, grammar, discourse) or by theme. ' +
          'Use precise frequency data, percentages, or counts. Use labelled tables or ' +
          'charts. At this stage, describe what you found — do not explain why or ' +
          'interpret significance.',
      },
      {
        section: 'Linking Findings to Hypotheses',
        purpose: 'Show whether the data supports, partially supports, or refutes predictions',
        timing: '1 hour drafting',
        guidance:
          'State explicitly for each hypothesis whether the data supports or challenges ' +
          'it. Avoid vague claims. Quantify where possible (e.g. "68% of instances " ' +
          'showed X, consistent with the prediction that...").',
      },
      {
        section: 'Qualitative Close Analysis',
        purpose: 'Provide in-depth linguistic analysis of selected data extracts',
        timing: '2 hours drafting',
        guidance:
          'Select two or three representative or significant extracts for close ' +
          'linguistic analysis. Apply relevant frameworks (pragmatics, CDA, ' +
          'sociolinguistic theory). Use accurate metalanguage throughout.',
      },
      {
        section: 'Contextualisation within the Literature',
        purpose: 'Interpret findings in relation to the theoretical framework',
        timing: '1-2 hours drafting',
        guidance:
          'For each major finding, connect it to at least one source from your ' +
          'literature review. Explain whether your data confirms, extends, or ' +
          'challenges the existing research.',
      },
      {
        section: 'Accounting for Anomalies',
        purpose: 'Address unexpected or contradictory findings rigorously',
        timing: '45 minutes drafting',
        guidance:
          'Do not ignore data that does not fit your argument. Discuss anomalous ' +
          'findings explicitly. Consider whether they reflect genuine complexity, ' +
          'methodological limitations, or contextual variables not accounted for in ' +
          'the original design.',
      },
    ],
    keyPhrases: [
      'the frequency data indicates that...',
      'this finding is consistent with the hypothesis that...',
      'the data challenges the prediction of X because...',
      'a close reading of Extract 2 reveals...',
      'applying critical discourse analysis, we can observe...',
      'this pattern is consistent with Holmes\'s claim that...',
      'the anomalous finding in the subset may be attributed to...',
      'the limitation of this analysis is that...',
      'taken together, these findings suggest that...',
      'the data contributes to the field by demonstrating that...',
    ],
    commonMistakes: [
      'Interpreting data in the findings section instead of reserving this for the discussion',
      'Ignoring or downplaying data that contradicts the hypothesis',
      'Providing qualitative analysis without quantitative grounding or vice versa',
      'Failing to connect discussion points back to the literature review, leaving findings ' +
        'as isolated observations rather than contributions to a field',
    ],
    modelPlanOutline: [
      'Findings: frequency table — hedging devices per 1000 words by gender category; ' +
        'clear labelling and objective description of the distribution',
      'Hypothesis check: Hypothesis 1 (female writers hedge more frequently) partially ' +
        'supported (58% vs 42%) but less strongly than Lakoff predicted',
      'Close analysis: Extract A (senior female manager) shows minimal hedging despite ' +
        'gender, suggesting role overrides gender as a variable',
      'Contextualisation: Cameron\'s (2007) critique of gender essentialism is supported ' +
        'by the within-group variation; Lakoff\'s claims are shown to be insufficiently contextualised',
      'Anomalies: two male participants in junior roles showed hedging frequency above ' +
        'the female mean; this suggests hierarchy is a confounding variable worth controlling',
      'Implications: findings support a social constructionist rather than essentialist ' +
        'account of gendered language; the investigation adds workplace email to a corpus ' +
        'of evidence complicating binary gender-language claims',
    ],
  },
];
