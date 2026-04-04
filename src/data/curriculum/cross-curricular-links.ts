export interface CrossCurricularLink {
  id: string;
  englishUnit: string;
  yearGroup: string;
  connectedSubject: string;
  connectionDescription: string;
  sharedSkills: string[];
  jointActivity?: string;
  teacherCollaborationNotes: string;
}

export interface LiteracyAcrossSubjects {
  id: string;
  skill: string;
  englishObjective: string;
  subjectsReinforcing: string[];
  teachingStrategy: string;
  assessmentOpportunity: string;
}

// ---------------------------------------------------------------------------
// Cross-Curricular Links
// ---------------------------------------------------------------------------

export const crossCurricularLinks: CrossCurricularLink[] = [

  // -------------------------------------------------------------------------
  // Y7 -- Fox Girl (Minh Tran Chaplin)
  // -------------------------------------------------------------------------
  {
    id: "ccl-y7-fg-geo-01",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "Geography",
    connectionDescription:
      "The novel centres on a family's displacement and migration. Students map real refugee and migration routes and examine push/pull factors alongside the narrative, grounding the fictional experience in geographical reality.",
    sharedSkills: [
      "Reading for information and inference",
      "Interpreting maps and data",
      "Understanding human migration patterns",
      "Empathy and perspective-taking",
    ],
    jointActivity:
      "Geography and English teachers co-plan a double lesson: students annotate a world map with the family's journey, then write a first-person diary entry from Fox Girl's perspective at each stopping point.",
    teacherCollaborationNotes:
      "Geography teacher provides current UNHCR statistics on displacement to contextualise the novel. English teacher feeds geographical detail back into students' creative writing for authenticity.",
  },
  {
    id: "ccl-y7-fg-geo-02",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "Geography",
    connectionDescription:
      "Comparison of urban and rural settings within the novel mirrors geographical study of settlement types. Students analyse how Chaplin uses setting as a narrative device.",
    sharedSkills: [
      "Describing and comparing environments",
      "Using geographical vocabulary purposefully",
      "Linking setting to character experience",
    ],
    teacherCollaborationNotes:
      "Geography teacher can share fieldwork photographs of contrasting settlement types to inspire descriptive writing tasks in English. Shared vocabulary list (settlement, urbanisation, rural) reinforces both subjects.",
  },
  {
    id: "ccl-y7-fg-hist-01",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "History",
    connectionDescription:
      "The novel draws on mid-twentieth-century conflicts that drove mass migration in South-East Asia. History provides the contextual knowledge students need to read the text with critical depth.",
    sharedSkills: [
      "Sourcing and contextualising information",
      "Understanding cause and effect",
      "Analysing how historical events shape personal experience",
      "Extended writing with evidence",
    ],
    jointActivity:
      "History teacher delivers a lesson on the Vietnam War and its refugee crisis. English lesson follows, asking students to identify moments in the novel where historical context deepens their understanding of a character's motivation.",
    teacherCollaborationNotes:
      "Sequence the History lesson before the English reading unit where possible. Share a timeline resource students can annotate alongside the novel. Both departments can contribute to a display on 'Stories of Displacement'.",
  },
  {
    id: "ccl-y7-fg-hist-02",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "History",
    connectionDescription:
      "Study of oral history and personal testimony in History aligns with the novel's use of a child narrator and unreliable memory, helping students evaluate how perspective shapes the telling of events.",
    sharedSkills: [
      "Evaluating reliability and perspective",
      "Comparing primary and secondary sources",
      "Narrative voice analysis",
    ],
    teacherCollaborationNotes:
      "History teachers can share examples of oral testimony (e.g., from the Imperial War Museum archive) to model how first-person accounts differ from third-person historical narratives. English can then apply this to the novel's narrative voice.",
  },
  {
    id: "ccl-y7-fg-pshe-01",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "PSHE",
    connectionDescription:
      "Identity and belonging are central themes in Fox Girl. PSHE units on personal identity, cultural heritage, and belonging provide emotional frameworks for students to engage meaningfully with the protagonist's experience.",
    sharedSkills: [
      "Articulating personal and cultural identity",
      "Recognising and respecting difference",
      "Reflective writing and discussion",
      "Emotional literacy",
    ],
    jointActivity:
      "PSHE teacher leads a structured discussion on identity anchors (family, language, place, culture). Students then write a comparative paragraph exploring how the Fox Girl character's identity anchors are tested by displacement.",
    teacherCollaborationNotes:
      "Coordinate timing so the PSHE identity unit runs concurrently with the novel. Avoid duplicating sensitive disclosures; both teachers should brief the pastoral team if themes resonate with students who have personal experience of migration.",
  },
  {
    id: "ccl-y7-fg-pshe-02",
    englishUnit: "Fox Girl",
    yearGroup: "Y7",
    connectedSubject: "PSHE",
    connectionDescription:
      "The novel raises questions about discrimination, prejudice, and being made to feel 'other'. PSHE anti-bullying and equality content gives students vocabulary and ethical frameworks to discuss these moments critically.",
    sharedSkills: [
      "Identifying and challenging stereotypes",
      "Constructing reasoned arguments",
      "Empathetic response writing",
    ],
    teacherCollaborationNotes:
      "PSHE teacher to share the school's equality and diversity framework language so students use consistent, respectful terminology in English discussion and written tasks.",
  },

  // -------------------------------------------------------------------------
  // Y8 -- The Hunger Games (Suzanne Collins)
  // -------------------------------------------------------------------------
  {
    id: "ccl-y8-hg-hist-01",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "History",
    connectionDescription:
      "Panem's Capitol-district power structure mirrors historical examples of oppression and colonial extraction. History teachers can provide case studies (e.g., Roman gladiatorial spectacles, colonial labour systems) that enrich allegorical reading.",
    sharedSkills: [
      "Identifying power structures and their effects",
      "Comparing historical and fictional scenarios",
      "Analytical essay writing",
      "Using evidence to support an argument",
    ],
    jointActivity:
      "Students produce a dual-column annotated comparison: one column quotes the novel, the adjacent column links to a historical parallel sourced in History. Final task is a short comparative essay for both subjects.",
    teacherCollaborationNotes:
      "History teacher to provide a one-page briefing on the Roman arena and at least one colonial case study. English teacher builds the literary analysis element. Both departments can use the comparative essays as evidence of cross-curricular literacy.",
  },
  {
    id: "ccl-y8-hg-hist-02",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "History",
    connectionDescription:
      "The theme of resistance and revolution connects to Y8 History study of protest movements (e.g., abolition, suffrage, civil rights). Students analyse how Collins draws on real resistance narratives to construct Katniss as a revolutionary symbol.",
    sharedSkills: [
      "Analysing propaganda and symbol",
      "Understanding causes and consequences of rebellion",
      "Sustained critical writing",
    ],
    teacherCollaborationNotes:
      "Share examples of historical resistance symbols and iconography; students then write a controlled assessment-style response on how Collins uses the Mockingjay as a symbol of resistance.",
  },
  {
    id: "ccl-y8-hg-socstud-01",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "Social Studies / Politics",
    connectionDescription:
      "The novel is a rich text for exploring concepts of power, governance, propaganda, and civic resistance. Politics and Social Studies teachers can use it as a gateway to real-world political literacy.",
    sharedSkills: [
      "Understanding governance and accountability",
      "Evaluating propaganda techniques",
      "Constructing persuasive arguments",
      "Critical media literacy",
    ],
    jointActivity:
      "Students design a propaganda poster for either the Capitol or the rebellion, applying visual rhetoric analysed in English and political persuasion techniques discussed in Social Studies.",
    teacherCollaborationNotes:
      "Social Studies teacher to provide a framework for analysing real political propaganda (e.g., wartime posters). English teacher links this to language analysis of the Capitol's broadcast scripts in the novel.",
  },
  {
    id: "ccl-y8-hg-socstud-02",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "Social Studies / Politics",
    connectionDescription:
      "Inequality between districts raises questions about social class, resource distribution, and systemic injustice that directly connect to Social Studies content on inequality and human rights.",
    sharedSkills: [
      "Interpreting data on inequality",
      "Discussing social justice",
      "Evaluative and discursive writing",
    ],
    teacherCollaborationNotes:
      "Social Studies teacher to provide real-world data on wealth inequality. English students use this data as non-fiction support material when writing a speech from a district citizen's perspective.",
  },
  {
    id: "ccl-y8-hg-art-01",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "Art and Design",
    connectionDescription:
      "Dystopian imagery -- the contrast between the Capitol's grotesque opulence and the districts' poverty -- offers rich visual design territory. Art students explore how colour, form, and composition convey dystopian themes.",
    sharedSkills: [
      "Analysing visual and verbal imagery",
      "Using aesthetic choices to convey meaning",
      "Descriptive and analytical writing",
    ],
    jointActivity:
      "Art teacher leads a lesson on dystopian visual art (Metropolis, 1984 covers, Soviet constructivist posters). Students produce a dystopian illustration and write an artist's statement using English analytical vocabulary.",
    teacherCollaborationNotes:
      "English teacher provides a glossary of literary imagery terms (juxtaposition, symbolism, motif). Art teacher introduces complementary visual vocabulary. Students' artist statements feed back into English analytical writing practice.",
  },
  {
    id: "ccl-y8-hg-art-02",
    englishUnit: "The Hunger Games",
    yearGroup: "Y8",
    connectedSubject: "Art and Design",
    connectionDescription:
      "Character costume design in the Capitol reflects social performance and power dressing. Students explore how Collins describes clothing as symbolic language and apply this in Art through costume design briefs.",
    sharedSkills: [
      "Interpreting symbolic use of clothing and colour",
      "Communicating meaning through design choices",
      "Written justification of creative decisions",
    ],
    teacherCollaborationNotes:
      "Coordinate a brief where Art students design a Capitol citizen's costume and annotate it with quotations from the novel to justify their visual choices.",
  },

  // -------------------------------------------------------------------------
  // Y9 -- A Christmas Carol (Dickens)
  // -------------------------------------------------------------------------
  {
    id: "ccl-y9-cc-hist-01",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "History",
    connectionDescription:
      "Dickens wrote the novella in 1843 at the height of Victorian industrialisation. History study of the Industrial Revolution, the Poor Laws, and child labour provides essential contextual knowledge for interpreting Scrooge, the Cratchits, and Ignorance and Want.",
    sharedSkills: [
      "Contextualising literary texts historically",
      "Analysing cause and effect",
      "Using historical evidence to support literary interpretation",
      "Extended analytical writing",
    ],
    jointActivity:
      "History teacher delivers a lesson on the 1834 Poor Law and Victorian workhouses. English lesson follows with a close reading of the Ghost of Christmas Present's revelation of Ignorance and Want, requiring students to draw on historical context.",
    teacherCollaborationNotes:
      "Sequence History content on the Victorian poor prior to the English reading unit. Both departments mark a shared extended writing piece -- History for contextual accuracy, English for analytical skill.",
  },
  {
    id: "ccl-y9-cc-hist-02",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "History",
    connectionDescription:
      "Dickens as a social reformer connects to the broader history of Victorian philanthropy and reform movements. Students evaluate how literature can function as political and social commentary.",
    sharedSkills: [
      "Understanding reform movements and their impact",
      "Evaluating the role of art and culture in social change",
      "Persuasive writing and rhetoric",
    ],
    teacherCollaborationNotes:
      "History teacher to provide examples of Victorian reform pamphlets and newspaper articles. English students compare these with Dickens' narrative techniques to assess the relative power of different forms of social commentary.",
  },
  {
    id: "ccl-y9-cc-pshe-01",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "PSHE",
    connectionDescription:
      "The novella's central theme of social responsibility -- Scrooge's transformation from self-interest to community care -- maps directly to PSHE content on citizenship, ethical responsibility, and community engagement.",
    sharedSkills: [
      "Defining and discussing social responsibility",
      "Evaluating individual versus collective duty",
      "Reflective and discursive writing",
      "Moral reasoning",
    ],
    jointActivity:
      "Students write a speech as either Scrooge or Dickens arguing that wealthy individuals have a moral duty to help the poor. PSHE teacher provides the ethical framework; English teacher develops the rhetorical craft.",
    teacherCollaborationNotes:
      "PSHE teacher to introduce utilitarian and deontological frameworks at a basic level. English teacher uses these as analytical lenses for evaluating Scrooge's moral journey.",
  },
  {
    id: "ccl-y9-cc-pshe-02",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "PSHE",
    connectionDescription:
      "Scrooge's psychological journey -- from emotional isolation to empathy and connection -- offers a case study in mental health, grief, and personal change relevant to PSHE content on emotional wellbeing.",
    sharedSkills: [
      "Understanding emotional literacy and empathy",
      "Recognising how past trauma shapes behaviour",
      "Reflective writing",
    ],
    teacherCollaborationNotes:
      "PSHE teacher can explore the concept of emotional isolation and its causes with students before the English unit. English teacher builds on this in character analysis tasks focusing on Scrooge's backstory.",
  },
  {
    id: "ccl-y9-cc-re-01",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "Religious Education",
    connectionDescription:
      "The novella is saturated with Christian moral teaching on charity, redemption, and compassion. RE provides the theological framework for understanding these concepts and evaluating how Dickens deploys them.",
    sharedSkills: [
      "Analysing moral and ethical themes",
      "Understanding religious symbolism",
      "Philosophical and theological reasoning",
      "Critical essay writing",
    ],
    jointActivity:
      "RE teacher leads a lesson on Christian teachings about charity and redemption (e.g., the parable of the Good Samaritan). Students then write a comparative paragraph exploring how Dickens applies these teachings in the novella.",
    teacherCollaborationNotes:
      "RE teacher to provide a short reference sheet on relevant Christian moral principles. English teacher highlights specific textual moments where Dickens invokes these (e.g., references to Tiny Tim as a Christ figure).",
  },
  {
    id: "ccl-y9-cc-re-02",
    englishUnit: "A Christmas Carol",
    yearGroup: "Y9",
    connectedSubject: "Religious Education",
    connectionDescription:
      "The Ghost of Christmas Yet to Come raises questions about free will, predetermination, and moral agency that RE explores philosophically. Students debate whether Dickens presents humans as capable of genuine moral change.",
    sharedSkills: [
      "Constructing philosophical arguments",
      "Evaluating competing viewpoints",
      "Extended discursive writing",
    ],
    teacherCollaborationNotes:
      "RE teacher to facilitate a structured debate on free will versus determinism. English teacher uses the debate as preparation for a literature essay on whether Scrooge's transformation is credible.",
  },

  // -------------------------------------------------------------------------
  // IGCSE (Y10-Y11)
  // -------------------------------------------------------------------------
  {
    id: "ccl-igcse-media-01",
    englishUnit: "IGCSE Language and Literature",
    yearGroup: "Y10-Y11",
    connectedSubject: "Media Studies",
    connectionDescription:
      "Non-fiction reading and writing at IGCSE requires students to analyse media texts (newspaper articles, advertisements, opinion columns). Media Studies frameworks for analysing audience, purpose, and representation directly support Paper 1 and Paper 2 skills.",
    sharedSkills: [
      "Analysing audience and purpose",
      "Deconstructing media language and bias",
      "Evaluating representation",
      "Writing for different media formats",
    ],
    jointActivity:
      "Students analyse a print advertisement and a newspaper front page in both subjects. Media Studies teacher covers visual codes and audience targeting; English teacher focuses on language analysis and written response technique.",
    teacherCollaborationNotes:
      "Align the choice of media texts across both departments where possible. A shared analytical framework (SLAP: Source, Language, Audience, Purpose) can reduce student cognitive load.",
  },
  {
    id: "ccl-igcse-soc-01",
    englishUnit: "IGCSE Literature -- Of Mice and Men / Inspector Calls",
    yearGroup: "Y10-Y11",
    connectedSubject: "Sociology",
    connectionDescription:
      "Both IGCSE literature texts engage heavily with social class, gender roles, and discrimination. Sociology provides analytical frameworks (e.g., Marxism, feminism as sociological perspectives) that deepen students' literary analysis.",
    sharedSkills: [
      "Applying sociological frameworks to texts",
      "Analysing power, class, and gender",
      "Constructing evidence-based arguments",
      "Extended essay writing",
    ],
    teacherCollaborationNotes:
      "Sociology teacher to provide a brief introduction to Marxist and feminist analytical lenses. English teacher applies these to character analysis of Curley's wife, Crooks, or Sheila Birling. Shared vocabulary list (hegemony, patriarchy, proletariat) reinforces both.",
  },
  {
    id: "ccl-igcse-hist-01",
    englishUnit: "IGCSE Literature -- Of Mice and Men",
    yearGroup: "Y10-Y11",
    connectedSubject: "History",
    connectionDescription:
      "Of Mice and Men is set during the Great Depression of the 1930s. History content on the Wall Street Crash, Dust Bowl migration, and New Deal America gives students the contextual knowledge to understand the itinerant workers' situation and the American Dream's collapse.",
    sharedSkills: [
      "Contextualising fiction within historical events",
      "Interpreting primary sources alongside literary texts",
      "Analytical and evaluative writing",
    ],
    jointActivity:
      "Students study Dorothea Lange's Dust Bowl photographs in History and then use them as visual context for an English descriptive writing task set in 1930s California.",
    teacherCollaborationNotes:
      "History teacher to deliver 1930s America content before or during the English reading of the novel. A shared resource folder with photographs, newspaper headlines, and economic data supports both departments.",
  },
  {
    id: "ccl-igcse-drama-01",
    englishUnit: "IGCSE Literature -- An Inspector Calls",
    yearGroup: "Y10-Y11",
    connectedSubject: "Drama",
    connectionDescription:
      "An Inspector Calls is a stage play and benefits from dramatic performance and staging analysis. Drama provides the skills to explore dramatic tension, staging, and performance interpretation that enrich literary essay writing.",
    sharedSkills: [
      "Analysing dramatic structure and tension",
      "Understanding staging, performance, and direction choices",
      "Interpreting dialogue and subtext",
      "Written analytical evaluation of performance",
    ],
    jointActivity:
      "Drama teacher workshops key scenes (the Inspector's arrival, the final revelation). Students perform and then write analytical essays reflecting on how dramatic choices they explored reinforce Priestley's themes.",
    teacherCollaborationNotes:
      "Drama teacher to focus on Stanislavski-informed character motivation and staging symbolism. English teacher uses students' rehearsal notes as evidence in their analytical essays. A shared performance recording (National Theatre production) works as a common reference point.",
  },

  // -------------------------------------------------------------------------
  // IAL (Y12-Y13)
  // -------------------------------------------------------------------------
  {
    id: "ccl-ial-psych-01",
    englishUnit: "IAL Unit 1 -- Language Acquisition and Development",
    yearGroup: "Y12-Y13",
    connectedSubject: "Psychology",
    connectionDescription:
      "Language acquisition theories (Skinner's behaviourism, Chomsky's nativism, Vygotsky's social interactionist view) are studied in both A-Level English Language and Psychology. Cross-referencing deepens understanding in both subjects.",
    sharedSkills: [
      "Evaluating competing theoretical frameworks",
      "Applying theory to case studies and data",
      "Academic essay writing with hedging language",
      "Critical synthesis of evidence",
    ],
    jointActivity:
      "Students complete a joint case study analysis of a child language transcript, applying both linguistic frameworks (English) and psychological developmental theory (Psychology) in a dual-marked extended response.",
    teacherCollaborationNotes:
      "Align coverage of Chomsky's LAD and Vygotsky's ZPD across both departments. Psychology teacher covers cognitive and developmental angles; English teacher covers linguistic data analysis. A shared reading list (e.g., Pinker's 'The Language Instinct') supports both.",
  },
  {
    id: "ccl-ial-soc-01",
    englishUnit: "IAL Unit 2 -- Language and Society",
    yearGroup: "Y12-Y13",
    connectedSubject: "Sociology",
    connectionDescription:
      "Sociolinguistics topics (dialect, register, social class and language, gender and language) overlap substantially with Sociology content on social stratification and identity. Co-teaching or resource-sharing enriches both subjects.",
    sharedSkills: [
      "Analysing language as a social phenomenon",
      "Applying sociological theory to linguistic data",
      "Evaluating nature vs. nurture in identity formation",
      "Independent research and extended writing",
    ],
    jointActivity:
      "Students conduct a small sociolinguistic survey on language variation (e.g., by age or gender) and write a dual report: one section for English Language (linguistic analysis) and one for Sociology (social implications).",
    teacherCollaborationNotes:
      "Sociology teacher to cover Bernstein's restricted/elaborated code and Bourdieu's linguistic capital. English teacher applies these to real language data sets. Shared reading: Labov on social stratification and language.",
  },
  {
    id: "ccl-ial-media-01",
    englishUnit: "IAL Unit 3 -- Reading and Responding to Texts",
    yearGroup: "Y12-Y13",
    connectedSubject: "Media Studies",
    connectionDescription:
      "A-Level Media Studies and English Literature both require sophisticated analysis of texts for ideology, representation, and audience. Media Studies frameworks complement literary theory in developing students' critical reading repertoire.",
    sharedSkills: [
      "Applying theoretical frameworks (semiotics, narrative theory, representation)",
      "Evaluating texts for ideological positioning",
      "Comparative textual analysis",
      "Academic essay writing conventions",
    ],
    teacherCollaborationNotes:
      "Media Studies teacher to introduce Roland Barthes' semiotics and Stuart Hall's encoding/decoding model. English teacher applies these to unseen literary extracts. Both departments benefit from a shared bank of short texts for analysis practice.",
  },
  {
    id: "ccl-ial-phil-01",
    englishUnit: "IAL Unit 4 -- Language Investigation and Coursework",
    yearGroup: "Y12-Y13",
    connectedSubject: "Philosophy",
    connectionDescription:
      "Philosophy of language (Saussure's sign theory, Wittgenstein on meaning, speech act theory) underpins much of A-Level English Language theory. Philosophy students can access literary and linguistic texts as case studies for philosophical enquiry.",
    sharedSkills: [
      "Applying philosophical frameworks to language and meaning",
      "Constructing rigorous academic arguments",
      "Critical evaluation of competing theories",
      "Independent research methodology",
    ],
    jointActivity:
      "A joint seminar on the question 'Does language shape thought?' draws on Sapir-Whorf hypothesis (English Language) and Wittgenstein's language games (Philosophy). Students write individual position papers for their respective subjects.",
    teacherCollaborationNotes:
      "Philosophy teacher leads the seminar on Wittgenstein and Austin's speech acts. English teacher grounds discussion in real linguistic examples and data. A shared reading: extract from Pinker's 'The Stuff of Thought' works across both disciplines.",
  },
];

// ---------------------------------------------------------------------------
// Literacy Across Subjects
// ---------------------------------------------------------------------------

export const literacyAcrossSubjects: LiteracyAcrossSubjects[] = [
  {
    id: "las-01",
    skill: "Structured analytical paragraph writing",
    englishObjective:
      "Students write analytical paragraphs using a point-evidence-explanation structure to argue a position about a literary or non-fiction text.",
    subjectsReinforcing: ["History", "Science", "Geography", "Sociology", "Psychology"],
    teachingStrategy:
      "All departments use a shared paragraph scaffold (claim, evidence, explanation, link). English introduces and models the structure; other subjects reinforce it with discipline-specific content. A whole-school literacy display shows examples from multiple subjects.",
    assessmentOpportunity:
      "Cross-departmental moderation exercise: teachers from different subjects each mark the same student paragraph using a shared analytical writing rubric to ensure consistency of expectations.",
  },
  {
    id: "las-02",
    skill: "Inference and deduction from unseen texts",
    englishObjective:
      "Students read an unseen passage and make supported inferences about meaning, purpose, and the writer's attitude.",
    subjectsReinforcing: ["History", "Geography", "Science", "Media Studies", "PSHE"],
    teachingStrategy:
      "History teachers use source-analysis tasks that require inference from primary documents. Science teachers apply inference skills to experimental data. English coordinates a whole-school 'reading for meaning' strategy using the same inference prompts across all subjects.",
    assessmentOpportunity:
      "Form-tutor reading sessions use short multi-disciplinary texts. Students practise inferential questioning using a shared 'I think... because...' stem.",
  },
  {
    id: "las-03",
    skill: "Writing for audience and purpose",
    englishObjective:
      "Students adapt their writing style, tone, and register to suit specific audiences and purposes across a range of non-fiction forms.",
    subjectsReinforcing: ["Science", "Geography", "PSHE", "Media Studies", "Business Studies"],
    teachingStrategy:
      "Science teachers reinforce formal report writing; Geography teachers use fieldwork reports; PSHE encourages persuasive letter writing. English provides the metalinguistic framework (audience, purpose, register, form) that all departments reference consistently.",
    assessmentOpportunity:
      "A whole-school writing week assigns the same audience-purpose brief to all year groups; different subjects provide the content, English assesses the writing quality.",
  },
  {
    id: "las-04",
    skill: "Evaluating and comparing viewpoints",
    englishObjective:
      "Students read two texts on the same topic, identify contrasting viewpoints, and write a comparative evaluation with textual evidence.",
    subjectsReinforcing: ["History", "Politics / Social Studies", "RE", "Geography"],
    teachingStrategy:
      "History teachers use contrasting historical interpretations; RE teachers present conflicting ethical viewpoints; Geography uses competing development theories. English provides the comparative writing framework (structural discourse markers, balanced argument conventions).",
    assessmentOpportunity:
      "Students write a comparative response in both English and History using the same two-source extract set, assessed separately against subject-specific criteria but sharing a common analytical writing standard.",
  },
  {
    id: "las-05",
    skill: "Subject-specific and academic vocabulary development",
    englishObjective:
      "Students build and accurately use a wide vocabulary, including subject-specific terminology and Tier 2 academic words that recur across disciplines.",
    subjectsReinforcing: ["All subjects"],
    teachingStrategy:
      "A whole-school Tier 2 vocabulary list (e.g., analyse, evaluate, justify, infer, interpret, compare) is displayed in every classroom. Each department adds its own Tier 3 specialist terms. English introduces and explicitly teaches vocabulary in context; all departments reinforce and assess usage.",
    assessmentOpportunity:
      "Vocabulary quizzes and low-stakes retrieval practice in form time use a rotating bank of Tier 2 and subject-specific Tier 3 words drawn from current units across all departments.",
  },
  {
    id: "las-06",
    skill: "Extended independent writing",
    englishObjective:
      "Students sustain a written argument or analysis over several paragraphs, maintaining coherence, developing ideas, and reaching a reasoned conclusion.",
    subjectsReinforcing: ["History", "Sociology", "Psychology", "RE", "Geography"],
    teachingStrategy:
      "English teaches essay planning, signposting, and conclusion-writing explicitly. Other humanities departments apply these conventions in their own extended writing tasks. A shared essay-planning template (introduction, three developed paragraphs, conclusion) is used school-wide.",
    assessmentOpportunity:
      "Extended writing assessments in History, Geography, and RE are peer-assessed using the school's shared analytical essay rubric before subject teachers provide feedback.",
  },
  {
    id: "las-07",
    skill: "Reading aloud with fluency, expression, and comprehension",
    englishObjective:
      "Students read texts aloud with appropriate pace, expression, and clarity, demonstrating comprehension through accurate phrasing and emphasis.",
    subjectsReinforcing: ["Drama", "MFL", "PSHE", "History"],
    teachingStrategy:
      "Drama reinforces performance reading through scripted work. MFL develops fluency in a second language. History uses reading of primary sources aloud to model engagement with difficult texts. English coordinates a school-wide reading aloud programme and provides guidance to all staff on supporting struggling readers.",
    assessmentOpportunity:
      "Reading aloud assessments in English and Drama use a shared fluency rubric. Drama teacher and English teacher jointly moderate Year 7 and Year 8 oral reading grades.",
  },
  {
    id: "las-08",
    skill: "Discursive and persuasive writing techniques",
    englishObjective:
      "Students deploy a range of persuasive and rhetorical devices (rhetorical questions, tricolon, anaphora, direct address, counter-argument and rebuttal) in their writing.",
    subjectsReinforcing: ["Politics / Social Studies", "PSHE", "RE", "History", "Business Studies"],
    teachingStrategy:
      "PSHE uses persuasive writing in campaigns (e.g., anti-bullying, environmental responsibility). Social Studies applies persuasive writing to civic tasks (letters to elected officials, debate speeches). RE uses discursive essays. English provides the rhetorical devices framework adopted across departments.",
    assessmentOpportunity:
      "A school debate or public speaking event assesses persuasive oral and written skills, judged by a panel including English and PSHE teachers using a shared criteria card.",
  },
  {
    id: "las-09",
    skill: "Note-taking and summarising from information sources",
    englishObjective:
      "Students read or listen to information and produce concise, accurate notes that identify key points and supporting evidence without copying verbatim.",
    subjectsReinforcing: ["History", "Science", "Geography", "Sociology", "Psychology"],
    teachingStrategy:
      "English explicitly teaches note-taking strategies (Cornell notes, mind-mapping, linear notes). Science and Geography reinforce structured note-taking during practical and fieldwork tasks. History applies it to documentary and source-based research. A shared guide on academic note-taking is distributed to all students at the start of Y7.",
    assessmentOpportunity:
      "Students produce a set of research notes as part of an English non-fiction project and a History investigation; both teachers provide feedback on note quality and summarising accuracy.",
  },
  {
    id: "las-10",
    skill: "Identifying and analysing language and structural choices",
    englishObjective:
      "Students identify specific language features and structural devices in texts and analyse the effects created, using precise analytical vocabulary.",
    subjectsReinforcing: ["Media Studies", "History", "Drama", "Art and Design"],
    teachingStrategy:
      "Media Studies applies the same analytical approach to visual and digital texts. History applies it to political speeches and propaganda. Art and Design transfers language of analysis to visual composition. English provides the core analytical vocabulary (connotation, juxtaposition, motif, tone, register, structure) adopted across departments.",
    assessmentOpportunity:
      "A cross-departmental 'analytical vocabulary' assessment in Y10 asks students to analyse a short text (English), a historical source (History), and an advertisement (Media Studies) using the same analytical vocabulary list.",
  },
  {
    id: "las-11",
    skill: "Speaking and listening in formal contexts",
    englishObjective:
      "Students participate in structured academic discussions, debates, and presentations, listening actively and responding constructively to others.",
    subjectsReinforcing: ["Drama", "PSHE", "Politics / Social Studies", "RE", "MFL"],
    teachingStrategy:
      "Drama provides physical and vocal technique for public speaking. PSHE uses structured discussion protocols (Talking Circles, Socratic Seminars). Social Studies uses formal debate format. RE uses philosophical enquiry discussion. English coordinates a school-wide oracy assessment framework adopted across all departments.",
    assessmentOpportunity:
      "An annual whole-school debate or presentation event is jointly assessed by English and at least one other subject teacher. Oracy assessment criteria are shared and moderated across departments.",
  },
  {
    id: "las-12",
    skill: "Referencing and integrating quotations as evidence",
    englishObjective:
      "Students select, embed, and analyse quotations accurately within analytical prose, using correct punctuation and attribution.",
    subjectsReinforcing: ["History", "RE", "Sociology", "Psychology", "Philosophy"],
    teachingStrategy:
      "All essay-based subjects require evidenced writing. English explicitly teaches quotation embedding and analysis (lead-in, quotation, comment). History and Sociology reinforce this with source citations and statistical evidence. A whole-school guide on 'using evidence in writing' is shared across departments.",
    assessmentOpportunity:
      "Peer assessment activities across departments use a shared 'evidence use' checklist (Is the quote embedded? Is the source attributed? Is there analysis?). English coordinates staff training on this checklist.",
  },
  {
    id: "las-13",
    skill: "Crafting an effective introduction and conclusion",
    englishObjective:
      "Students write introductions that contextualise an argument and signal a clear thesis, and conclusions that synthesise rather than merely repeat points made.",
    subjectsReinforcing: ["History", "Geography", "Sociology", "RE"],
    teachingStrategy:
      "English teaches introduction and conclusion conventions explicitly (funnel structure, thesis statement, synthesis in conclusion). History reinforces the thesis statement. Geography reinforces the synthesis conclusion in field reports. A shared model essay library accessible to all students includes annotated introductions and conclusions from multiple subjects.",
    assessmentOpportunity:
      "Year 9 and above receive feedback on introduction and conclusion quality in all essay-based subjects, using a shared two-point scale (developing / secure) for these components.",
  },
  {
    id: "las-14",
    skill: "Independent research and source evaluation",
    englishObjective:
      "Students independently locate, select, and evaluate sources for relevance and reliability, synthesising findings into their own writing.",
    subjectsReinforcing: ["History", "Geography", "Sociology", "Psychology", "Science"],
    teachingStrategy:
      "English coursework requires independent research and bibliography. History teaches source provenance and reliability. Science teaches evaluation of experimental sources. A whole-school research skills unit (delivered in English and reinforced in the library and other departments) covers CRAAP test criteria (Currency, Relevance, Authority, Accuracy, Purpose).",
    assessmentOpportunity:
      "Coursework and project work across subjects is assessed partly on source quality and evaluation. English and subject teachers share feedback criteria for research methodology in extended projects.",
  },
  {
    id: "las-15",
    skill: "Spelling, punctuation, and grammar accuracy (SPaG)",
    englishObjective:
      "Students write accurately, applying consistent spelling, punctuation, and grammatical conventions appropriate to formal academic writing.",
    subjectsReinforcing: ["All subjects"],
    teachingStrategy:
      "SPaG marks are awarded in GCSE and A-Level examinations in several subjects (History, Geography, Religious Studies). English leads a whole-school SPaG strategy: a shared list of high-frequency misspellings, a punctuation guide, and a grammar reference card are used in every classroom. Form tutors use a daily SPaG starter programme in Y7-Y9.",
    assessmentOpportunity:
      "All subjects deduct marks for significant SPaG errors in assessed writing using a consistent two-level marking code (sp = spelling error, p = punctuation error, gr = grammar error). English department leads annual cross-departmental SPaG moderation for Y7-Y9.",
  },
];
