// Edexcel IAL English Language — Mock Exam Papers and Coursework Briefs
// Units 1 and 2 (YEN01 / YEN02) and Units 3 and 4 (WEN03 / WEN04)

export interface IalMockQuestion {
  id: string;
  questionNumber: string;
  questionText: string;
  dataText?: string;
  marks: number;
  assessmentObjectives: string[];
  timeAllocation: string;
  markDescriptors: { band: number; marks: string; descriptor: string }[];
  examinerAdvice: string;
}

export interface IalMockPaper {
  id: string;
  unit: string;
  specCode: string;
  duration: string;
  totalMarks: number;
  sections: {
    sectionTitle: string;
    instructions: string;
    questions: IalMockQuestion[];
  }[];
}

export interface CourseWorkBrief {
  id: string;
  unit: string;
  title: string;
  wordCount: string;
  assessment: string;
  tasks: string[];
  assessmentCriteria: { criterion: string; marks: number; description: string }[];
  deadlineGuidance: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK EXAM PAPERS
// ─────────────────────────────────────────────────────────────────────────────

export const ialMockPapers: IalMockPaper[] = [
  // ── UNIT 1: Language and Identity ──────────────────────────────────────────
  {
    id: 'ial-mock-u1-a',
    unit: 'Unit 1: Language and Identity',
    specCode: 'YEN01',
    duration: '2 hours',
    totalMarks: 60,
    sections: [
      {
        sectionTitle: 'Section A: Analysing Language',
        instructions:
          'Read the two texts below carefully and answer both questions. You should spend approximately 60 minutes on this section. Both questions are compulsory.',
        questions: [
          {
            id: 'ial-mock-u1-a-q1',
            questionNumber: 'Question 1',
            questionText:
              'Analyse the linguistic methods used in Text A to construct the speaker\'s regional and social identity. In your answer you should:\n- comment on significant features of language at different levels of analysis\n- explore how these features position the speaker within a particular social and regional context\n- use appropriate linguistic terminology throughout.',
            dataText:
              'Text A: Transcript of a sociolinguistic interview. The speaker, Dean (male, aged 28, from Leeds), is talking about his experience of starting university in London.\n\n[Dean speaks]: Right so (.) when I first got there like (.) it were proper strange yeah (1.0) because everyone just (.) they looked at you different when you opened yer mouth (.) like I\'d say summat and people\'d just (.) you know (.) do that face (.) like what did he just say (0.5) and I thought (.) I\'m not gonna change the way I talk just cos they can\'t be bothered to listen properly (.) know what I mean (.) I\'m from Leeds and I\'m proud of it (1.0) but then again (.) towards the end of first year I noticed I were (.) I were dropping some of it when I was in lectures and seminars (.) not changing everything like (.) just (.) softening it a bit I s\'pose\n\nKey: (.) = micropause, (1.0) = one second pause, underlining = stressed syllable',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2'],
            timeAllocation: '30 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive and detailed analysis. A wide range of precisely identified linguistic features across multiple levels (phonology, lexis, grammar, pragmatics, discourse). Confident and accurate use of linguistic terminology. Sustained, well-developed exploration of how features construct identity, with specific reference to relevant linguistic and sociolinguistic concepts such as dialect levelling, accommodation theory, or covert prestige. Argument is well structured and coherently developed throughout.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Competent analysis with good range of linguistic features identified. Terminology used accurately in most instances. Clear discussion of how language constructs identity with reference to at least two levels of analysis. Some discussion of sociolinguistic context. Response is generally focused but may lack development in places.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some relevant features identified with basic analysis. Terminology used but sometimes inaccurately or without explanation. Discussion of identity is present but may be generalised or superficial. Limited range of linguistic levels considered. Some relevant points made but underdeveloped.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Limited analysis. Few linguistic features identified and mostly described rather than analysed. Terminology limited or frequently inaccurate. Little connection made between language features and the construction of identity. Very restricted range of reference.',
              },
            ],
            examinerAdvice:
              'The strongest responses integrate phonological observations (vowel patterns, glottal stops, elision) with lexical choices (dialect vocabulary such as "summat", "proper"), grammatical features (non-standard past tense "it were"), and discourse-level observations (hedging, fillers, self-correction). Link your analysis explicitly to sociolinguistic frameworks: accommodation theory explains the code-switching at the end, while covert prestige explains the initial resistance to change. Avoid listing features in isolation — always connect each feature to the construction of identity.',
          },
          {
            id: 'ial-mock-u1-a-q2',
            questionNumber: 'Question 2',
            questionText:
              'Compare how language is used in Text A and Text B to construct aspects of identity. In your answer you should:\n- analyse significant linguistic features in both texts\n- compare the methods and effects in each text\n- consider the contexts of production and reception for each text\n- use appropriate linguistic terminology throughout.',
            dataText:
              'Text B: An extract from a personal essay published in a literary magazine. The writer, Priya, reflects on her experience of code-switching between English and Gujarati.\n\n"There is a word in Gujarati — aapnu — which means ours, belonging to us, something held in common. My grandmother uses it constantly: aapnu ghar, our home; aapna lok, our people. When I am in her kitchen, I am aapnu. I belong to something. I have a place in a network of obligation and love that extends back through generations I never knew. But when I step outside and become Priya-the-professional — the Priya who presents at conferences and writes reports and speaks in the measured cadences of educated British English — the word loses its purchase. It floats. I am fluent in both languages and truly at home in neither. This is not loss, exactly. It is a particular kind of multiplicity. A self assembled from fragments, code-switched into coherence."',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '30 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive, balanced comparison that analyses both texts in depth. Precise linguistic analysis at multiple levels with accurate and varied terminology. Thoughtful consideration of contextual factors (mode, genre, audience, purpose) and how these shape language choices. Fluent integration of comparison throughout rather than treating texts sequentially. Linguistic and sociolinguistic concepts (code-switching, diglossia, linguistic relativity, identity construction) deployed accurately and with insight.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Clear comparison with competent analysis of both texts. Good range of linguistic features identified and mostly accurate terminology. Context considered with some insight. Comparison is present though may sometimes drift into separate treatment. Relevant sociolinguistic concepts referenced.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some comparison present but may be superficial. Reasonable analysis of one text with less developed treatment of the other. Terminology present but variable in accuracy. Context acknowledged but not fully explored. Some relevant linguistic points made.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Limited comparison. Mostly descriptive treatment of texts. Few linguistic features identified. Terminology sparse or inaccurate. Little engagement with context. Texts may be treated entirely separately.',
              },
            ],
            examinerAdvice:
              'This question rewards candidates who treat comparison as a genuine analytical tool rather than a structural checklist. Note the contrast in mode: Text A is spontaneous spoken language while Text B is a crafted written reflection. The phonological and grammatical features of spontaneous speech (pauses, fillers, non-standard forms) contrast sharply with the literary techniques of Text B (metaphor — "loses its purchase", "floats"; rhetorical triplet in the professional Priya list; sentence fragments for effect). Both texts foreground code-switching, but through entirely different linguistic means. Bring in relevant theory: Giles\' accommodation theory for Text A, Bhabha\'s concept of the third space or Canagarajah\'s code-meshing for Text B.',
          },
        ],
      },
      {
        sectionTitle: 'Section B: Language Concepts',
        instructions:
          'Answer one question from Section B. You should spend approximately 60 minutes on this section.',
        questions: [
          {
            id: 'ial-mock-u1-a-q3',
            questionNumber: 'Question 3',
            questionText:
              '"Language is the primary means by which social groups construct and maintain their identity. Without a shared language variety, group identity cannot exist."\n\nUsing your knowledge of language and identity, evaluate this claim. In your answer you should:\n- engage critically with the statement, considering its strengths and limitations\n- draw on relevant linguistic theories and research\n- use examples from spoken and/or written language to support your argument\n- use appropriate linguistic terminology throughout.',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '60 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Sophisticated, critically engaged response that evaluates the claim from multiple perspectives. Wide range of relevant linguistic theories and research deployed accurately and critically (not merely described). Examples are well chosen and linguistically analysed rather than simply cited. Argument is coherent, nuanced, and progresses throughout. Excellent command of linguistic terminology. Consideration of counterarguments shows genuine critical thinking.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Competent evaluation that engages with the claim from more than one perspective. Relevant theories and research included with reasonable accuracy. Examples used to support argument. Good use of terminology. Argument is generally clear though may lack full critical engagement at points.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some evaluation present but may be one-sided or descriptive. Theories or research mentioned but not always accurately applied. Examples present but may not be linguistically analysed. Argument present but may be loosely organised. Variable use of terminology.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Limited engagement with the claim. Mostly descriptive or opinionated rather than analytical. Few or no theories referenced. Limited examples. Poor organisation and limited terminology.',
              },
            ],
            examinerAdvice:
              'This essay question expects you to engage critically rather than simply agree or list theories. A strong response will consider: (1) evidence in favour — Labov\'s work on in-group markers in African American Vernacular English, Trudgill\'s research on dialect and identity, communities of practice theory (Eckert and McConnell-Ginet); (2) complications and counterarguments — multilingual speakers who hold multiple identities simultaneously, sign languages as identity markers, the role of non-linguistic factors (clothing, ritual, shared history) in group identity. The strongest essays will engage with linguistic relativity (does language shape identity or merely reflect it?) and consider whether language is necessary or sufficient for group identity. Aim for a clear thesis that you sustain and develop throughout.',
          },
          {
            id: 'ial-mock-u1-a-q4',
            questionNumber: 'Question 4',
            questionText:
              '"Standard English is a neutral, prestige variety of the language that should be taught to all speakers because it offers the greatest social and economic opportunities."\n\nUsing your knowledge of language, power, and identity, evaluate this claim. In your answer you should:\n- engage critically with the statement, considering its strengths and limitations\n- draw on relevant linguistic theories and research\n- use examples from spoken and/or written language to support your argument\n- use appropriate linguistic terminology throughout.',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '60 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive and balanced critical evaluation. Engages with both the pragmatic case for Standard English and the sociolinguistic critique. Accurate and confident use of relevant theories (Bourdieu\'s linguistic capital, Milroy\'s standardisation ideology, Labov\'s work on covert prestige). Examples are linguistically analysed. Argument is sustained, nuanced, and clearly structured.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Clear evaluation from more than one perspective. Relevant theories and concepts included with general accuracy. Good use of examples. Argument is coherent. Terminology used competently throughout.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some engagement with the claim from more than one angle but may be unbalanced. Some theory referenced. Examples present. Variable accuracy of terminology. Argument present but may lack coherence.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Mostly descriptive or one-sided. Little theoretical engagement. Limited examples. Weak command of terminology.',
              },
            ],
            examinerAdvice:
              'Avoid presenting this as a simple debate where "both sides have a point." The strongest responses interrogate the claim\'s key assumptions: Is Standard English truly "neutral"? (No — it is the dialect of the economically powerful, codified through historical accident.) Does teaching Standard English guarantee opportunity? (Research suggests accent and dialect discrimination persist regardless of written Standard English competence.) Draw on Bourdieu\'s concepts of linguistic capital and the linguistic market, Milroy and Milroy\'s standardisation ideology, and Lippi-Green\'s work on language ideology. You might also consider the distinction between Standard English as a written code (relatively uncontroversial) and as a spoken accent (deeply contested).',
          },
        ],
      },
    ],
  },

  // ── UNIT 2: Language in Transition ────────────────────────────────────────
  {
    id: 'ial-mock-u2-a',
    unit: 'Unit 2: Language in Transition',
    specCode: 'YEN02',
    duration: '2 hours',
    totalMarks: 60,
    sections: [
      {
        sectionTitle: 'Section A: Analysing Language Change',
        instructions:
          'Read the two texts below carefully and answer both questions. You should spend approximately 60 minutes on this section. Both questions are compulsory.',
        questions: [
          {
            id: 'ial-mock-u2-a-q1',
            questionNumber: 'Question 1',
            questionText:
              'Analyse the linguistic features of Text C that reflect its historical period. In your answer you should:\n- identify and analyse specific linguistic features at different levels (lexis, grammar, phonology/graphology, semantics)\n- explain what these features reveal about language change over time\n- use appropriate linguistic terminology throughout.',
            dataText:
              'Text C: An extract from a household management manual, published in 1762.\n\n"The good Mistress of a Family ought to be acquainted with the general Principles of Oeconomy, not only with respect to the wholesome Preparation of Food, but likewise in the judicious Expence of Household Stores. She must endeavour that nothing be spoil\'d thro\' Neglect or ill Management; and that the Servants under her Direction conduct themselves with Propriety and Diligence. It is most necessary that she keep an exact Account of all Monies laid out, that she may at any Time present her Husband with a full and faithful Reckoning of the same, such being the Foundation of that domestic Order upon which the Comfort and Prosperity of every well-regulated Family doth entirely depend."',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2'],
            timeAllocation: '30 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive and detailed historical linguistic analysis. Wide range of features identified across multiple levels with accurate, confident terminology. Features are not merely listed but analysed for what they reveal about the state of the language and its historical context. Strong knowledge of language change processes (archaism, semantic change, grammatical change, spelling standardisation) applied with precision. Response is well structured and coherently developed.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Competent historical analysis with good range of features identified. Terminology used accurately in most cases. Clear discussion of what features reveal about language change. At least three levels of analysis addressed. Generally focused and organised.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some relevant historical features identified with basic analysis. Terminology used but sometimes imprecisely. Discussion of language change is present but may be generalised. Limited range of levels. Some relevant points made but underdeveloped.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Limited analysis. Features mostly described rather than analysed. Terminology sparse or inaccurate. Little connection to language change. Very restricted range.',
              },
            ],
            examinerAdvice:
              'Key features to analyse include: (1) Graphology — capitalisation of nouns ("Mistress", "Family", "Account"), archaic spelling ("Oeconomy", "spoil\'d", "thro\'", "Monies"), use of the long s; (2) Lexis — Latinate vocabulary reflecting the prestige of classical learning ("Propriety", "Diligence", "Prosperity"), archaic vocabulary ("Oeconomy" = economy, "Reckoning" = account); (3) Grammar — third-person singular present tense with "-eth" ending ("doth"), subjunctive mood ("that nothing be spoil\'d"), complex-compound sentences with multiple subordinate clauses, use of modal "ought to" and "must"; (4) Semantics — semantic shift in "Oeconomy" (originally household management, now referring to financial systems); (5) Pragmatics and ideology — prescriptive construction of femininity and domestic duty. Contextualise in terms of the standardisation movement, the role of grammars and dictionaries in codifying English, and the social history of the period.',
          },
          {
            id: 'ial-mock-u2-a-q2',
            questionNumber: 'Question 2',
            questionText:
              'Compare the linguistic features of Text C and Text D, explaining what the differences between them reveal about how English has changed over time. In your answer you should:\n- analyse significant linguistic features in both texts\n- compare and contrast the features and effects in each text\n- relate your analysis to relevant theories and models of language change\n- use appropriate linguistic terminology throughout.',
            dataText:
              'Text D: An extract from a food and lifestyle blog post published online in 2024.\n\n"OK so real talk — I have been absolutely WINGING household admin for literally the past three years and honestly? I\'m not even ashamed lmao. Like, I buy whatever looks good at the supermarket, I rotate the same five dinners, and my budgeting strategy is basically vibes. But then I went down an absolute rabbit hole of \'homesteading\' content on TikTok and suddenly I\'m making sourdough at midnight and googling \'is it bad that I\'ve never cleaned my oven\'. No shade to the people who genuinely have their life together tho. Aspirational content is aspirational. Anyway — here are some actual practical tips I\'ve picked up that even chaotic girlies like me can manage without losing their mind."',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '30 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive, analytically integrated comparison. Texts treated as windows onto different historical and sociolinguistic moments rather than simply different styles. Wide range of features compared across multiple levels with precise terminology. Strong theoretical engagement (e.g. Aitchison\'s models of language change, Netspeak features, technological influence on language, prescriptivism vs descriptivism, digital discourse). Comparison is woven throughout rather than sequential. Contextual factors (audience, mode, genre, platform) fully integrated into analysis.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Clear comparison with good analytical range. Competent analysis of both texts with accurate terminology. Theory referenced and relevant context considered. Comparison present and mostly integrated. Generally well organised.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some comparison present, possibly sequential. Reasonable analysis of features in each text with basic terminology. Some reference to context or theory. Points made but not always fully developed.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Limited comparison. Mostly descriptive. Few features identified. Terminology sparse. Little theory or context. Texts may be treated entirely separately.',
              },
            ],
            examinerAdvice:
              'The contrast between these texts spans approximately 260 years and two radically different communicative contexts. Key comparisons include: Lexis — Latinate prestige vocabulary (Text C) vs digital-native slang and neologisms ("WINGING", "vibes", "lmao", "no shade", "chaotic girlies") in Text D; the semantic field of household management is present in both but expressed through entirely different registers. Grammar — complex subordination and formal syntax (Text C) vs short sentences, sentence fragments, parenthetical asides, and rhetorical questions (Text D). Graphology — archaic capitalisation and spelling conventions (Text C) vs deliberate capitalisation for emphasis ("WINGING"), emoji-adjacent expressions, internet orthography ("lol", "tho"). Discourse — prescriptive, authoritative tone (Text C) vs self-deprecating, confessional mode with parasocial intimacy (Text D). Theoretical frameworks: Aitchison\'s "damp spoon", "crumbling castle", and "infectious disease" metaphors for attitudes to change; Crystal\'s defence of Netspeak; the concept of digital discourse communities.',
          },
        ],
      },
      {
        sectionTitle: 'Section B: Language Change Essay',
        instructions:
          'Answer one question from Section B. You should spend approximately 60 minutes on this section.',
        questions: [
          {
            id: 'ial-mock-u2-a-q3',
            questionNumber: 'Question 3',
            questionText:
              '"The internet and digital communication have had a more damaging effect on the English language than any previous development in its history."\n\nUsing your knowledge of language change, evaluate this claim. In your answer you should:\n- engage critically with the statement, considering its strengths and limitations\n- draw on relevant linguistic theories, research, and historical knowledge\n- use examples from language data where appropriate\n- use appropriate linguistic terminology throughout.',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '60 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Sophisticated evaluation that interrogates the value-laden language of the claim ("damaging") before assessing its empirical basis. Broad historical perspective brought to bear — other periods of major language change (Norman Conquest, Renaissance, printing press, industrialisation) contextualised accurately. Crystal, Aitchison, and prescriptivist voices engaged critically. Argument is nuanced, original, and sustained. Excellent command of terminology and theoretical frameworks.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Clear evaluation with historical context. Relevant theories and examples used. Good engagement with prescriptivist and descriptivist perspectives. Terminology accurate. Argument coherent and generally well developed.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some evaluation of the claim from more than one angle. Some historical examples and theory. Variable terminology. Argument present but may be unbalanced or loosely structured.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Mostly descriptive or one-sided. Limited historical context. Few theories. Weak terminology and organisation.',
              },
            ],
            examinerAdvice:
              'The word "damaging" is doing ideological work in this claim — begin by interrogating it. What counts as damage? Who decides? Is change the same as deterioration? Strong responses will: (1) acknowledge that digital communication has produced genuine changes in language — new orthographic conventions, new vocabulary, new genre norms; (2) challenge the "damage" framing using Crystal\'s argument that digital literacy requires new skills rather than destroying old ones; (3) place digital change in historical perspective — the Norman Conquest caused far more structural disruption to English than any app; the printing press altered spelling and grammar permanently; the loss of the T-V distinction (thou/you) was mourned for centuries; (4) consider descriptivism vs prescriptivism as meta-level frameworks for evaluating such claims. Avoid simply listing features of internet language — every feature you mention must be analytically deployed in service of your argument.',
          },
          {
            id: 'ial-mock-u2-a-q4',
            questionNumber: 'Question 4',
            questionText:
              '"Language change is inevitable and unstoppable; attempts to resist or reverse it are futile and misguided."\n\nUsing your knowledge of language change, evaluate this claim. In your answer you should:\n- engage critically with the statement, considering its strengths and limitations\n- draw on relevant linguistic theories, research, and historical knowledge\n- use examples from spoken and/or written language where appropriate\n- use appropriate linguistic terminology throughout.',
            marks: 20,
            assessmentObjectives: ['AO1', 'AO2', 'AO3'],
            timeAllocation: '60 minutes',
            markDescriptors: [
              {
                band: 4,
                marks: '16-20',
                descriptor:
                  'Perceptive, critically engaged evaluation. Sophisticated handling of the "inevitability" claim — acknowledges the descriptive truth while exploring cases where intervention has had some effect (language academies, corpus planning, revivals). Theoretically rich: Aitchison, Crystal, Trudgill on language change mechanisms; language planning and policy literature; case studies of corpus planning (Icelandic, French Academie). Nuanced and original argument with excellent terminology.',
              },
              {
                band: 3,
                marks: '11-15',
                descriptor:
                  'Clear evaluation with relevant theory and examples. Good range of perspectives including some consideration of language planning. Terminology accurate. Argument generally coherent.',
              },
              {
                band: 2,
                marks: '6-10',
                descriptor:
                  'Some evaluation from more than one angle. Theory and examples present but not always fully analysed. Variable terminology. Argument present but may be unbalanced.',
              },
              {
                band: 1,
                marks: '1-5',
                descriptor:
                  'Mostly descriptive or one-sided. Limited theory or examples. Weak terminology.',
              },
            ],
            examinerAdvice:
              'This question invites you to test the "inevitability" thesis against historical and contemporary evidence. Arguments supporting the claim: Trudgill\'s social determinism (dialect levelling is driven by contact patterns beyond individual control); historical examples show all attempts to freeze language have failed (Johnson\'s dictionary aimed to fix English, but change continued); natural language change processes (drift, analogy, contact-induced change) operate below conscious awareness. Complicating the claim: language planning has demonstrably slowed certain changes in French and preserved features of Icelandic; Hebrew was revived from a liturgical language to a spoken vernacular; Welsh has gained speakers through policy intervention. The distinction between phonological/grammatical change (largely unstoppable) and lexical/status change (more amenable to planning) is analytically powerful. Use Aitchison\'s models of language change as a theoretical backbone.',
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COURSEWORK BRIEFS
// ─────────────────────────────────────────────────────────────────────────────

export const ialCourseworkBriefs: CourseWorkBrief[] = [
  // ── UNIT 3: Original Writing and Commentary ────────────────────────────────
  {
    id: 'ial-cw-u3-brief',
    unit: 'Unit 3: Original Writing and Commentary',
    title: 'Original Writing Portfolio: Two Pieces in Different Genres',
    wordCount:
      'Total 2,000-2,500 words across both original pieces, plus a commentary of 750-1,000 words. The two original pieces should be roughly balanced (approximately 1,000-1,250 words each).',
    assessment:
      'Centre-assessed and externally moderated by Pearson. This unit is worth 20% of the total IAL qualification. Total marks: 40.',
    tasks: [
      'Task 1: Produce two original pieces of writing in clearly different genres. At least one piece must be non-fiction. Suitable genre combinations include: short story and speech; personal essay and feature article; travel writing and short story; opinion column and monologue. Both pieces must have a clearly defined audience, purpose, and context.',
      'Task 2: Write a commentary (750-1,000 words) in which you reflect on the linguistic and stylistic choices you made in your writing. Your commentary should: identify the genre, audience, and purpose of each piece; explain and justify specific language choices at multiple levels (lexical, grammatical, structural, rhetorical); demonstrate awareness of genre conventions and how you have worked within, adapted, or subverted them; reflect on the choices you considered but rejected and explain why.',
      'Task 3: Ensure both pieces are polished and complete. Your work should demonstrate the full range of your writing skills and should not be a draft. Proofreading and editing are part of the process.',
      'Task 4: Before submitting, review your pieces against the assessment criteria. Ensure your commentary references specific moments in your writing using quotation and explains the linguistic effects you intended to create.',
    ],
    assessmentCriteria: [
      {
        criterion: 'AO2: Writing Skills — Craft and Technical Control',
        marks: 20,
        description:
          'Marks are awarded for the quality and range of your writing. Band 4 (17-20 marks): Fluent, assured, and purposeful writing that demonstrates sophisticated control of language at all levels. Vocabulary is precise and carefully chosen; sentences are varied in length, type, and structure for deliberate effect; genre conventions are handled with confidence and originality. Both pieces are fully sustained and cohesive. Band 3 (13-16 marks): Competent, controlled writing with good range. Language choices are mostly effective; some variation in sentence structure; genre conventions observed with some originality. Minor lapses in control. Band 2 (8-12 marks): Some effective writing with reasonable control. Language choices show awareness of audience and purpose but may be uneven. Limited range. Band 1 (1-7 marks): Basic writing with limited control. Vocabulary restricted; sentence structures repetitive; limited genre awareness.',
      },
      {
        criterion: 'AO5: Commentary — Linguistic Reflection and Meta-awareness',
        marks: 20,
        description:
          'Marks are awarded for the quality of your linguistic reflection in the commentary. Band 4 (17-20 marks): Perceptive and detailed commentary that engages analytically with specific language choices using accurate linguistic terminology. Demonstrates sophisticated awareness of genre, audience, and purpose. Choices explained in terms of intended effects with reference to specific textual examples. Evaluation of alternatives shows genuine reflective thinking. Band 3 (13-16 marks): Competent commentary with good analytical engagement. Linguistic terminology used accurately. Clear discussion of genre, audience, and purpose. Specific examples used. Band 2 (8-12 marks): Some analytical discussion with basic terminology. Commentary may describe rather than analyse choices. Limited range of features discussed. Band 1 (1-7 marks): Mostly descriptive. Limited terminology. Little genuine linguistic reflection.',
      },
    ],
    deadlineGuidance:
      'Plan to complete a first draft of both pieces by the end of Week 6 of the coursework period. Spend Weeks 7-8 revising and editing, paying particular attention to lexical precision and sentence variety. Draft your commentary in Week 9, ensuring you refer to specific textual choices. Finalise and proofread everything in Week 10. Your centre will confirm submission deadlines, which must be met for Pearson moderation. Work submitted late may not be moderated and may receive zero marks. Keep backup copies of all drafts.',
  },

  // ── UNIT 4: Language Investigation ────────────────────────────────────────
  {
    id: 'ial-cw-u4-brief',
    unit: 'Unit 4: Language Investigation',
    title: 'Independent Language Investigation with Written Introduction',
    wordCount:
      'Investigation: 2,500-3,000 words. Introduction to Language in the World: 500-750 words. Total: approximately 3,000-3,750 words. Appendices containing data are not included in the word count.',
    assessment:
      'Centre-assessed and externally moderated by Pearson. This unit is worth 20% of the total IAL qualification. Total marks: 40.',
    tasks: [
      'Task 1: Identify and refine your investigation question. The question must be genuinely linguistic — focused on language features, patterns, or variation — rather than on content, theme, or personal opinion. Good investigation questions are specific, testable using real language data, and connected to established linguistic concepts or frameworks. Discuss your question with your teacher before collecting data.',
      'Task 2: Collect primary language data. Your data may be spoken (transcribed according to a consistent transcription system), written (scanned or printed), or digital (screenshots or printouts). You must collect a sufficient quantity of data for meaningful analysis — typically a minimum of 500-800 words of written data or equivalent. All data must be included in an appendix. If your data involves human participants, you must obtain informed consent.',
      'Task 3: Analyse your data systematically using appropriate linguistic frameworks (phonology, lexis, grammar, semantics, pragmatics, discourse). Apply relevant linguistic theory and research to your analysis. Where appropriate, use quantitative methods (frequency counts, percentages) alongside qualitative analysis. Present your findings clearly and logically.',
      'Task 4: Evaluate your methodology critically. Discuss the limitations of your data collection and analysis. Consider what alternative approaches might have yielded different findings. Suggest directions for further research.',
      'Task 5: Write the Introduction to Language in the World (500-750 words). In this separate piece, choose a recent development, controversy, or phenomenon in language use (e.g. language and AI, the rise of a new variety, a public debate about language standards, language endangerment) and write an informed, analytical overview aimed at a general educated audience. This piece demonstrates the breadth of your linguistic knowledge beyond your specific investigation topic.',
    ],
    assessmentCriteria: [
      {
        criterion: 'AO1: Knowledge and Application of Linguistic Concepts and Methods',
        marks: 20,
        description:
          'Marks are awarded for the rigour of your linguistic analysis and the accuracy of your use of frameworks and terminology. Band 4 (17-20 marks): Precise, confident application of linguistic frameworks and terminology throughout. Wide range of relevant linguistic concepts deployed accurately. Quantitative and qualitative methods used appropriately and integrated effectively. Analysis is systematic and detailed, covering multiple levels. Strong theoretical grounding with accurate and critical use of relevant research. Band 3 (13-16 marks): Competent linguistic analysis with good range of frameworks and terminology. Theory and research referenced and mostly accurately applied. Generally systematic approach. Some integration of quantitative and qualitative methods. Band 2 (8-12 marks): Some linguistic analysis using appropriate frameworks. Terminology present but variable in accuracy. Limited range of levels. Theory or research referenced but not always well applied. Band 1 (1-7 marks): Limited linguistic analysis. Terminology sparse or inaccurate. Frameworks not clearly applied. Little theoretical engagement.',
      },
      {
        criterion: 'AO3: Analysis, Argument, and Evaluation',
        marks: 20,
        description:
          'Marks are awarded for the quality of your analytical reasoning, the coherence of your argument, and the rigour of your evaluation. Band 4 (17-20 marks): Incisive analytical argument that draws together findings into a coherent, well-evidenced conclusion. Critical evaluation of methodology demonstrates genuine self-awareness. Introduction to Language in the World is perceptive, well-informed, and engages analytically with the chosen topic. Argument is sustained and well structured throughout both pieces. Band 3 (13-16 marks): Clear analytical argument with coherent findings and conclusions. Evaluation is present and mostly honest. Introduction is informative and reasonably analytical. Argument generally coherent. Band 2 (8-12 marks): Some analytical argument with reasonable findings. Evaluation present but may be superficial. Introduction is descriptive rather than analytical. Argument may be loosely organised. Band 1 (1-7 marks): Limited analytical argument. Conclusions weak or unsupported. Evaluation absent or very limited. Introduction descriptive and underdeveloped.',
      },
    ],
    deadlineGuidance:
      'The investigation is a substantial independent project requiring sustained work over the coursework period. Suggested timeline: Weeks 1-2 — finalise your research question and receive teacher approval; Weeks 3-5 — collect data and transcribe or organise it; Weeks 6-8 — conduct your linguistic analysis, applying frameworks systematically; Weeks 9-10 — write up your investigation, including methodology, findings, and evaluation; Week 11 — draft your Introduction to Language in the World; Week 12 — proofread, finalise, and prepare appendices. Do not leave data collection until the last few weeks — transcription of spoken data in particular is time-consuming. Your centre will advise on the final submission deadline for Pearson moderation.',
  },
];
