// ──────────────────────────────────────────────
// IAL English Language - Coursework Guidance
// Units 3 (WEN03) and 4 (WEN04)
// Pearson Edexcel International A Level
// ──────────────────────────────────────────────

export interface CourseworkGuidance {
  id: string
  unit: 'Unit 3' | 'Unit 4'
  component: string
  title: string
  wordCount: string
  marks: number
  percentage: number
  requirements: string[]
  commonMistakes: string[]
  topTips: string[]
  checklistItems: string[]
}

export interface CourseworkTimeline {
  id: string
  unit: 'Unit 3' | 'Unit 4'
  week: number
  milestone: string
  tasks: string[]
  teacherFeedbackPoint: boolean
  submissionType: 'draft' | 'final' | 'none'
}

export interface AnnouncedExemplar {
  id: string
  unit: string
  component: string
  band: number
  examinerComment: string
  whatWorksWell: string[]
  whatToImprove: string[]
  grade: string
}

// ──────────────────────────────────────────────
// COURSEWORK GUIDANCE
// ──────────────────────────────────────────────

export const courseworkGuidance: CourseworkGuidance[] = [
  // ── Unit 3: Original Writing ─────────────────
  {
    id: 'ial-cw-u3-original-writing',
    unit: 'Unit 3',
    component: 'Original Writing',
    title: 'Unit 3 Original Writing - Two Crafted Texts',
    wordCount: '750-1,500 words per piece (total 1,500-3,000 words for both pieces combined)',
    marks: 40,
    percentage: 20,
    requirements: [
      'Produce two original pieces of writing in different genres to demonstrate range and versatility.',
      'Each piece must be written for a clearly defined audience, purpose, and genre context.',
      'The two pieces must differ meaningfully in genre conventions, not simply in subject matter.',
      'Acceptable genres include but are not limited to: short fiction, speech, travel writing, opinion journalism, autobiography/memoir, script, or literary non-fiction.',
      'At least one piece must be non-fiction or have a primarily non-fiction genre framework.',
      'Each piece should demonstrate control of form, structure, and stylistic choices appropriate to its genre.',
      'Writing must show awareness of linguistic and rhetorical techniques deployed for deliberate effect.',
      'Pieces should be submitted alongside the commentary as a single coursework portfolio.',
      'All work must be your own original writing; use of generative AI or direct copying constitutes malpractice.',
      'Final word counts for each piece must be declared on the coversheet.',
    ],
    commonMistakes: [
      'Choosing two genres that are too similar (e.g., two personal essays), which limits the range of techniques on display.',
      'Writing for a vague or undefined audience, resulting in inconsistent register throughout the piece.',
      'Over-relying on narrative description at the expense of linguistic craft - examiners reward deliberate technique, not just storytelling.',
      'Neglecting structure: beginning both pieces the same way (e.g., chronological openings) when the genre demands a different structural logic.',
      'Using informal internet language or text-speak in formal genres without deliberate stylistic justification.',
      'Exceeding the word count and then cutting indiscriminately, removing carefully crafted passages rather than planning length from the outset.',
      'Producing writing that reads as a first draft rather than a refined, redrafted piece - coursework rewards revision.',
      'Failing to sustain the chosen register across the full length of the piece; register drift is penalised heavily in Band 3 and above.',
      'Choosing sensationalist or shock-value subjects as a substitute for genuine linguistic craft.',
      'Ignoring genre conventions entirely in the name of "originality" without demonstrating awareness of the conventions being subverted.',
    ],
    topTips: [
      'Read extensively in your chosen genres before you write: read three or four professional examples, annotating the specific techniques each writer uses.',
      'Write a genre profile before you begin: define the conventions, register, structural expectations, and typical audience for your chosen genre.',
      'Draft an opening paragraph in at least two different ways, then choose the stronger one and analyse why it is more effective.',
      'Use a technique log as you draft: keep a running list of every deliberate linguistic choice you make, as this material feeds directly into your commentary.',
      'Read your work aloud during revision - you will catch awkward rhythms, inconsistent register, and overlong sentences that the eye skips over.',
      'Vary your sentence architecture deliberately: examiners look for a repertoire of structures (simple, compound, complex, minor, fragmented) deployed for effect.',
      'Use a trusted peer reader and ask them to identify any moment where the genre illusion breaks down or the register shifts unexpectedly.',
      'Allocate your word count strategically: identify the two or three moments in each piece where the most linguistic complexity should be concentrated.',
      "Revisit your opening and closing last - these carry the most weight in a reader's impression and often need to be rewritten after the full piece exists.",
      'Submit your penultimate draft to your teacher for formative feedback at least two weeks before the internal deadline.',
    ],
    checklistItems: [
      'Both pieces have clearly defined genres that differ meaningfully from each other.',
      'Each piece has an explicitly identified audience, purpose, and context.',
      'Register is sustained consistently across the full length of each piece.',
      'Each piece opens with a strategically crafted sentence or paragraph that establishes genre, register, and voice.',
      'A variety of sentence structures is deployed across each piece for deliberate rhetorical or stylistic effect.',
      'Lexical choices are precise and appropriate to the genre and audience throughout.',
      'Structural choices (sequencing, pacing, paragraphing, use of headings/sections where appropriate) reflect genre conventions.',
      'At least one specific named linguistic technique (e.g., anaphora, asyndeton, zeugma, bathos) is used in each piece.',
      'Word count for each piece falls within the specified range and is noted on the coversheet.',
      'The writing has been through at least two full revision cycles, not just a single proofread.',
      'Spelling, punctuation, and grammar are accurate throughout both pieces.',
      'No material has been copied from published sources; all writing is original and in your own voice.',
    ],
  },

  // ── Unit 3: Commentary ───────────────────────
  {
    id: 'ial-cw-u3-commentary',
    unit: 'Unit 3',
    component: 'Commentary',
    title: 'Unit 3 Commentary - Analytical Reflection on Original Writing',
    wordCount: '500-750 words (total for commentary on both pieces)',
    marks: 20,
    percentage: 10,
    requirements: [
      'Write an analytical commentary reflecting on the linguistic and stylistic choices made in your original writing pieces.',
      'The commentary must discuss both pieces, not just one.',
      'Reference specific moments in the writing using short quotations to anchor analytical claims.',
      'Discuss audience, purpose, and genre and explain how these shaped specific language decisions.',
      'Use accurate linguistic metalanguage (e.g., semantic field, syndetic listing, modal verbs, deixis) to describe your choices.',
      'Explain the intended effect of key techniques on the target audience.',
      'Reflect honestly on what works well and acknowledge any compromises or challenges encountered.',
      'The commentary is not a creative piece - it must be written in formal academic register.',
      'Do not merely describe what you wrote; every observation must be analytical (explain why a choice was made and what effect it achieves).',
      'The commentary is marked separately from the original writing under AO5 (context and independent thinking).',
    ],
    commonMistakes: [
      'Writing a descriptive summary of the content of each piece rather than an analysis of language choices.',
      'Using vague metalanguage ("I used lots of adjectives to describe the scene") without naming specific techniques or explaining their effects.',
      'Forgetting to reference both pieces - commentaries that focus on one piece and ignore the other lose marks immediately.',
      'Treating the commentary as an afterthought written in one sitting after the creative work is complete, rather than as a parallel analytical process.',
      'Quoting too much from the original writing, leaving insufficient space for analysis within the word limit.',
      'Writing in an informal or semi-creative register rather than the formal academic register required.',
      'Claiming effects without linking them to specific evidence ("My speech was very persuasive because it had emotion in it").',
      'Ignoring the comparative dimension: the commentary can gain marks by explaining how the two pieces contrast in their use of language.',
      'Padding with biographical or contextual waffle about the subject matter rather than focusing on linguistic craft.',
      'Exceeding the word limit: a commentary that runs to 1,000 words is usually unfocused and repetitive.',
    ],
    topTips: [
      'Build your commentary as you write, not afterwards: keep a running analytical log of decisions made during drafting.',
      'Structure the commentary clearly: a brief introduction naming your genres and audiences, then analytical paragraphs using the PEE (Point, Evidence, Effect) framework.',
      'Aim for at least four or five precisely named linguistic techniques per piece, each discussed with a short quotation and a clear explanation of effect.',
      'Use connectives that signal comparison across pieces ("In contrast to the speech, my short story deploys...") to add analytical sophistication.',
      'Check that every paragraph contains at least one piece of embedded evidence from the original writing.',
      'Consult the mark scheme language: Band 4 and 5 commentaries "evaluate" and "reflect critically" - use these words as a prompt to push analysis further.',
      'Avoid the word "effective" without qualification - instead, name the specific effect (creates a sense of urgency, foregrounds the political argument, positions the reader as complicit).',
      'End the commentary with a reflective sentence about what you would refine if you had additional time - this signals the independent critical awareness valued at the top bands.',
      'Read your commentary against your original writing to check that every analytical claim is actually visible in the text.',
      'Ask your teacher to read the commentary before the final submission and check that your metalanguage is used accurately.',
    ],
    checklistItems: [
      'Both original writing pieces are discussed in the commentary.',
      'Specific quotations from the original writing are embedded as evidence throughout.',
      'At least four named linguistic or stylistic techniques are identified and analysed per piece.',
      'Audience, purpose, and genre are explicitly discussed in relation to language choices.',
      'Formal academic register is maintained throughout the commentary.',
      'Every analytical point follows the structure: name the technique, quote the evidence, explain the effect.',
      'The commentary is within the 500-750 word limit.',
      'Metalanguage is used accurately (no misapplied terms).',
      'The commentary contains some comparative or contrastive analysis between the two pieces.',
      'A reflective element acknowledges challenges faced or choices that were revised during drafting.',
    ],
  },

  // ── Unit 4: Language Investigation ───────────
  {
    id: 'ial-cw-u4-investigation',
    unit: 'Unit 4',
    component: 'Language Investigation',
    title: 'Unit 4 Language Investigation - Independent Research Project',
    wordCount: '2,500-3,000 words (excluding bibliography and data appendix)',
    marks: 60,
    percentage: 30,
    requirements: [
      'Conduct an independent investigation into an aspect of language use, language change, language variation, or language and identity.',
      'Formulate a clear research question or hypothesis at the outset of the investigation.',
      'Collect and analyse a primary data set of your own: this may include written texts, transcripts of spoken language, advertisements, social media posts, or other authentic language samples.',
      'Apply at least two named linguistic frameworks or analytical approaches (e.g., Hallidayan systemic functional grammar, Gricean maxims, sociolinguistic variation frameworks, discourse analysis).',
      'Contextualise findings within relevant linguistic theory and scholarship - secondary sources must be cited accurately.',
      'Present findings objectively and interpret them in relation to the original research question.',
      'Include a data appendix with a sample or full set of the primary data analysed.',
      'All sources must be listed in a full bibliography using a consistent referencing style (Harvard or MLA).',
      'The investigation must be your own independent work; collaborative data collection is only permitted with individual analysis.',
      'Avoid topics so broad that they cannot be addressed rigorously within the word limit (e.g., "the history of the English language").',
    ],
    commonMistakes: [
      'Choosing a research question that is too vague or too broad to be answered through primary data analysis within the word count.',
      'Collecting a data set that is too small or too homogeneous to support meaningful patterns or conclusions.',
      'Describing the data rather than analysing it: listing features found without linking them to linguistic theory or to the research question.',
      'Importing large blocks of data into the main body of the investigation rather than placing data in an appendix and quoting selectively.',
      'Failing to engage with any secondary linguistic scholarship, resulting in a descriptive data commentary rather than a genuine investigation.',
      'Overstating conclusions: drawing sweeping claims about language use from a small or unrepresentative sample.',
      'Neglecting the methodology section: examiners need to understand how data was collected, why it was chosen, and what its limitations are.',
      'Using informal register in the write-up, particularly in the analysis and conclusion sections.',
      'Misapplying theoretical frameworks: quoting Grice or Lakoff, for example, without demonstrating understanding of the theoretical content.',
      'Submitting an investigation without a bibliography or with incomplete references, which undermines academic credibility.',
    ],
    topTips: [
      'Choose a topic you are genuinely curious about: the best investigations come from authentic questions, not safe or obvious ones.',
      'Narrow your research question to something specific and answerable: "How do female and male students at my school differ in their use of hedging language in classroom discussions?" is more productive than "gender and language".',
      'Collect more data than you think you need: it is always better to have surplus data and select the most telling examples than to pad an insufficient data set.',
      'Plan your methodology carefully and write it up as you go, noting decisions made, alternatives rejected, and limitations acknowledged.',
      'Read at least three academic sources on your topic area before you begin data collection, so that you have a theoretical lens in place when you analyse.',
      'Use a systematic coding system when you analyse your data: colour-code or annotate features consistently so that your findings are replicable.',
      'Write your introduction and research question first, then your methodology, then your analysis, then your conclusion - in that order. Revise the introduction last.',
      'Use tables, frequency counts, or simple statistical comparisons where appropriate to present quantitative patterns clearly.',
      'Signpost your structure clearly: subheadings for Introduction, Methodology, Analysis, Conclusion, and Bibliography are expected and help the examiner follow your argument.',
      'Leave at least a week between completing a full draft and your final revision, so you can read the investigation with fresh critical distance.',
    ],
    checklistItems: [
      'A clear, focused, and answerable research question or hypothesis is stated in the introduction.',
      'The primary data set is described in the methodology: what it is, how it was collected, why it was chosen.',
      'Limitations of the data or methodology are acknowledged honestly.',
      'At least two named linguistic frameworks are applied to the data analysis.',
      'At least three secondary sources (academic books, peer-reviewed articles, or reputable linguistic databases) are cited in the body of the investigation.',
      'Data examples are quoted selectively and precisely within the analysis rather than reproduced in full in the main body.',
      'A data appendix is attached containing a representative sample of the primary data.',
      'Findings are interpreted in direct relation to the original research question or hypothesis.',
      'The conclusion does not introduce new evidence but synthesises the main analytical findings.',
      'A full bibliography is included using a consistent referencing format.',
      'The investigation is within the 2,500-3,000 word limit (excluding bibliography and appendix).',
      'Formal academic register is maintained throughout; first-person is used sparingly and purposefully.',
    ],
  },

  // ── Unit 4: Bibliography ─────────────────────
  {
    id: 'ial-cw-u4-bibliography',
    unit: 'Unit 4',
    component: 'Bibliography',
    title: 'Unit 4 Bibliography - Academic Referencing and Source Management',
    wordCount:
      'No word limit (excluded from total count); typically 8-15 entries for a strong investigation',
    marks: 0,
    percentage: 0,
    requirements: [
      'All secondary sources cited in the investigation must appear in the bibliography.',
      'All bibliography entries must appear in the investigation body as in-text citations.',
      'Use a single consistent referencing format throughout: Harvard or MLA are both accepted.',
      'For Harvard style: list entries alphabetically by author surname, with surname, initials, year, title, place, and publisher for books.',
      'For website sources, include the URL and the date accessed.',
      'Academic journal articles should include volume, issue number, and page range.',
      'Primary data sources (e.g., a corpus or online archive used to gather data) must also be cited.',
      'Do not include sources you have read but not cited in the body text.',
      'Avoid relying exclusively on websites or popular sources; the bibliography should demonstrate engagement with academic scholarship.',
      'If a source has no named author (e.g., a corpus or institutional document), list it under the title or institutional name.',
    ],
    commonMistakes: [
      'Listing sources in the bibliography that do not appear as in-text citations in the investigation body.',
      'Omitting sources that are clearly drawn upon in the analysis but never formally cited.',
      'Mixing two different referencing styles (e.g., Harvard for books, numbered footnotes for websites) in the same bibliography.',
      'Providing incomplete entries that omit year of publication, publisher, or page range for journal articles.',
      'Citing Wikipedia or general encyclopedias as academic sources - these are not peer-reviewed and should not appear as primary scholarly references.',
      'Including only web sources with no academic books or journal articles, which signals limited independent research.',
      'Failing to include the date accessed for online sources, which makes the reference unverifiable.',
      'Listing an entire website rather than the specific page or article consulted.',
      'Not updating the bibliography when sources are added during revision, leading to discrepancies between citations and bibliography.',
      'Treating the bibliography as an afterthought assembled in the final hour rather than a document built throughout the research process.',
    ],
    topTips: [
      'Build the bibliography as you research: add each source at the moment you first read it, not retrospectively.',
      'Use a free reference manager such as Zotero to generate correctly formatted entries and sync in-text citations automatically.',
      'Aim for a balance of primary linguistic scholarship (David Crystal, Deborah Tannen, Norman Fairclough, Penelope Gardner-Chloros) and secondary contextual reading relevant to your topic area.',
      'Check every in-text citation in the investigation body against the bibliography to confirm each has a corresponding full entry.',
      'Italicise titles of books and journals; use quotation marks for titles of articles within journals or chapters within edited collections.',
      'If you cite a website, include the full URL not a shortened link, so the examiner can locate the original source.',
      'A bibliography with eight to twelve well-chosen academic sources signals independent scholarly reading; more entries do not automatically mean more marks.',
      'Check the year of publication for all sources: linguistic scholarship from more than twenty years ago may be foundational but should be complemented by more recent work.',
      'Ask your teacher to check your referencing format before final submission - minor errors (missing commas, wrong order of elements) are easy to fix.',
      'Alphabetical ordering is required in Harvard style: sort your entries carefully, especially when authors share the same surname or you have multiple works by the same author.',
    ],
    checklistItems: [
      'Every source cited in the investigation body has a corresponding entry in the bibliography.',
      'Every entry in the bibliography appears as an in-text citation somewhere in the investigation.',
      'A single consistent referencing style (Harvard or MLA) is used for all entries.',
      'Book entries include: author surname, initials, year, title (italicised), place of publication, and publisher.',
      'Journal article entries include: author, year, article title (in quotation marks), journal name (italicised), volume, issue, and page range.',
      'Website entries include: author (or institution), year (or n.d.), title of page, URL, and date accessed.',
      'No Wikipedia or non-peer-reviewed encyclopaedia entries are included as academic sources.',
      'At least three entries are academic books or peer-reviewed articles.',
      'Entries are listed in alphabetical order by author surname (Harvard) or in the order of citation (MLA numbered).',
      'Titles are formatted correctly: books and journals in italics, articles and chapters in quotation marks.',
    ],
  },
]

// ──────────────────────────────────────────────
// COURSEWORK TIMELINES
// ──────────────────────────────────────────────

export const courseworkTimelines: CourseworkTimeline[] = [
  // ── Unit 3 - 12-Week Timeline ────────────────
  {
    id: 'u3-week-01',
    unit: 'Unit 3',
    week: 1,
    milestone: 'Genre Exploration and Topic Brainstorming',
    tasks: [
      'Read and annotate three professional examples of different genres (e.g., a broadsheet opinion column, a short story opening, a travel writing extract).',
      'Brainstorm at least six potential topics or ideas for your two original writing pieces.',
      'Complete a genre profile worksheet for two genres you are considering: list conventions, typical audience, register, and structural features.',
      'Begin a coursework notebook or document to log ideas, technique choices, and reflections throughout the project.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u3-week-02',
    unit: 'Unit 3',
    week: 2,
    milestone: 'Research and Close Reading of Mentor Texts',
    tasks: [
      'Select your two final genres and confirm they differ significantly in form and convention.',
      'Identify two or three "mentor texts" (professional examples) for each genre and annotate them closely for linguistic technique.',
      'Create a technique bank: a list of named techniques observed in each mentor text with examples and effects.',
      'Draft a one-paragraph outline of each planned piece, identifying: genre, audience, purpose, intended effect, and key structural moves.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'none',
  },
  {
    id: 'u3-week-03',
    unit: 'Unit 3',
    week: 3,
    milestone: 'Planning and Structural Mapping',
    tasks: [
      'Produce a detailed structural plan for both pieces: map the arc of each piece, identifying opening, development, and closing strategies.',
      'Draft the opening paragraph of each piece in two different ways and compare - choose the stronger option with written justification.',
      'Begin your commentary log: write your first analytical entry explaining the genre and audience choices you have made so far.',
      'Identify potential word count distribution: how much space will each section or scene require?',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u3-week-04',
    unit: 'Unit 3',
    week: 4,
    milestone: 'First Full Draft - Piece 1',
    tasks: [
      'Write a complete first draft of your first original writing piece.',
      'Do not self-edit as you write: the goal this week is to get a full draft on paper.',
      'After completing the draft, read it aloud in full and note any register inconsistencies, awkward phrasing, or structural weaknesses.',
      'Add at least five new entries to your commentary log identifying specific technique choices made in this draft.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-05',
    unit: 'Unit 3',
    week: 5,
    milestone: 'Peer Review and Revision - Piece 1',
    tasks: [
      'Exchange Piece 1 draft with a peer and give each other structured written feedback using the genre profile criteria.',
      'Complete a self-review checklist against the mark scheme Band descriptors.',
      'Revise the draft based on peer and self-review: focus on register consistency, technique density, and structural coherence.',
      'Submit the revised draft of Piece 1 to your teacher for formative feedback.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-06',
    unit: 'Unit 3',
    week: 6,
    milestone: 'First Full Draft - Piece 2',
    tasks: [
      'Write a complete first draft of your second original writing piece.',
      'Apply lessons learned from the Piece 1 drafting process: plan technique deployment more deliberately from the start.',
      'Read the draft aloud and annotate it with technique labels as you go, noting where the genre logic breaks down.',
      "Update your commentary log with entries specific to Piece 2's genre, audience, and language choices.",
    ],
    teacherFeedbackPoint: false,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-07',
    unit: 'Unit 3',
    week: 7,
    milestone: 'Peer Review and Revision - Piece 2',
    tasks: [
      'Peer-review Piece 2 with a different partner than Week 5, asking them to focus on genre authenticity and audience impact.',
      'Complete a self-review of Piece 2 against the mark scheme.',
      'Revise Piece 2 and submit to teacher for formative feedback alongside the revised Piece 1.',
      'Teacher provides consolidated written feedback on both pieces.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-08',
    unit: 'Unit 3',
    week: 8,
    milestone: 'Incorporating Teacher Feedback - Both Pieces',
    tasks: [
      'Read teacher feedback carefully and categorise suggestions: structural, lexical, technical, register-related.',
      'Produce a revision action plan specifying the exact changes you will make to each piece.',
      'Complete revised versions of both pieces, addressing all substantive feedback points.',
      'Do a word count check for both pieces: are you within the required range?',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u3-week-09',
    unit: 'Unit 3',
    week: 9,
    milestone: 'Commentary First Draft',
    tasks: [
      'Write a full first draft of the commentary covering both pieces.',
      'Use the PEE framework (Point, Evidence, Effect) for each analytical paragraph.',
      'Ensure at least four named linguistic techniques are discussed per piece with embedded quotations.',
      'Check that the commentary addresses genre, audience, and purpose explicitly for both pieces.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-10',
    unit: 'Unit 3',
    week: 10,
    milestone: 'Commentary Revision and Teacher Feedback',
    tasks: [
      'Self-review the commentary against the AO5 mark scheme descriptors.',
      'Check that all metalanguage is used accurately and that every analytical claim is supported by evidence.',
      'Submit the commentary draft to your teacher for written feedback.',
      'Begin final proofreading of both original writing pieces: check spelling, punctuation, and grammar with fresh eyes.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'draft',
  },
  {
    id: 'u3-week-11',
    unit: 'Unit 3',
    week: 11,
    milestone: 'Final Portfolio Assembly',
    tasks: [
      'Incorporate teacher feedback on the commentary draft.',
      'Complete the final version of both original writing pieces and the commentary.',
      'Check all word counts and record them on the coversheet.',
      'Assemble the full portfolio in the required order: coversheet, Piece 1, Piece 2, Commentary.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'final',
  },
  {
    id: 'u3-week-12',
    unit: 'Unit 3',
    week: 12,
    milestone: 'Submission and Reflection',
    tasks: [
      'Submit the completed Unit 3 portfolio by the internal centre deadline.',
      'Complete a personal reflection: what would you do differently? What are you most proud of?',
      'Archive a copy of all drafts and teacher feedback notes for reference during revision.',
      'Begin reviewing the Unit 3 assessment objectives in preparation for any written examination components.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'final',
  },

  // ── Unit 4 - 12-Week Timeline ────────────────
  {
    id: 'u4-week-01',
    unit: 'Unit 4',
    week: 1,
    milestone: 'Topic Selection and Research Question Formulation',
    tasks: [
      'Brainstorm at least eight potential investigation topics across the areas of: language change, language variation, language and identity, language and power, or language in digital contexts.',
      'Narrow the list to three candidates and for each write a draft research question - specific, focused, and answerable through primary data.',
      'Discuss all three candidates with your teacher and confirm your final topic and research question.',
      'Begin an investigation notebook to log reading, data ideas, analytical observations, and bibliography entries.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'none',
  },
  {
    id: 'u4-week-02',
    unit: 'Unit 4',
    week: 2,
    milestone: 'Literature Review and Theoretical Framework',
    tasks: [
      'Read at least three academic sources directly relevant to your research question and take detailed notes.',
      "Identify the theoretical frameworks you will use (e.g., Grice's maxims, Labovian sociolinguistics, Fairclough's critical discourse analysis).",
      'Write a 300-word literature review summary: what does existing scholarship say about your topic area?',
      'Add all sources read this week to your developing bibliography in the correct referencing format.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u4-week-03',
    unit: 'Unit 4',
    week: 3,
    milestone: 'Data Collection Planning and Ethics',
    tasks: [
      'Design your data collection methodology: what data will you collect, how, from whom, and in what quantity?',
      'Consider ethical implications: obtain consent where required, anonymise participants, and ensure data is collected responsibly.',
      'Prepare any data collection instruments needed (e.g., recording setup, text selection criteria, corpus parameters).',
      'Write a draft methodology section of approximately 300-400 words explaining and justifying your approach.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u4-week-04',
    unit: 'Unit 4',
    week: 4,
    milestone: 'Data Collection',
    tasks: [
      'Collect your full primary data set according to the methodology planned in Week 3.',
      'Organise and label the data systematically: number transcripts, label text samples, or create a corpus inventory.',
      'Conduct a preliminary scan of the data and note any immediate patterns, surprises, or questions that emerge.',
      'Begin preparing the data appendix: select which samples will be included and format them consistently.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u4-week-05',
    unit: 'Unit 4',
    week: 5,
    milestone: 'Systematic Data Analysis - First Pass',
    tasks: [
      'Apply your first analytical framework systematically to the full data set, coding features consistently.',
      'Record quantitative counts where appropriate (e.g., frequency of hedging expressions, instances of code-switching).',
      'Write up preliminary findings in note form: what patterns are emerging? Do they support or challenge your hypothesis?',
      'Submit your research question, methodology draft, and preliminary findings summary to teacher for formative feedback.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'draft',
  },
  {
    id: 'u4-week-06',
    unit: 'Unit 4',
    week: 6,
    milestone: 'Systematic Data Analysis - Second Pass and Theoretical Integration',
    tasks: [
      'Apply your second analytical framework to the data, looking for patterns the first framework may have missed.',
      'Return to your secondary sources and identify specific scholarly arguments that your data either supports or complicates.',
      'Draft the analysis section of the investigation, integrating data evidence and theoretical commentary in each paragraph.',
      'Check that you are selecting specific, precise quotations from the data rather than reproducing entire samples in the main body.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u4-week-07',
    unit: 'Unit 4',
    week: 7,
    milestone: 'Full Investigation Draft - Introduction, Methodology, and Analysis',
    tasks: [
      'Write the complete introduction section: context, research question, significance, and structure overview.',
      'Finalise and polish the methodology section, ensuring limitations are acknowledged.',
      'Complete a full draft of the analysis section with all data evidence and theoretical references in place.',
      'Check word count: are you on track for the 2,500-3,000 word target?',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'draft',
  },
  {
    id: 'u4-week-08',
    unit: 'Unit 4',
    week: 8,
    milestone: 'Conclusion and Bibliography First Draft',
    tasks: [
      'Write the conclusion: synthesise findings in direct relation to the original research question without introducing new evidence.',
      'Acknowledge limitations of the study and suggest directions for further investigation.',
      'Compile the complete bibliography and cross-check every entry against in-text citations in the body of the investigation.',
      'Ensure the bibliography is formatted consistently and alphabetically (Harvard) or numerically (MLA).',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'draft',
  },
  {
    id: 'u4-week-09',
    unit: 'Unit 4',
    week: 9,
    milestone: 'Full Draft Submission for Teacher Feedback',
    tasks: [
      'Assemble the complete investigation draft: introduction, methodology, analysis, conclusion, bibliography, and data appendix.',
      'Conduct a self-review using the mark scheme Band descriptors for each assessment objective.',
      'Submit the full draft to your teacher for detailed written formative feedback.',
      'While awaiting feedback, continue refining the data appendix and checking referencing consistency.',
    ],
    teacherFeedbackPoint: true,
    submissionType: 'draft',
  },
  {
    id: 'u4-week-10',
    unit: 'Unit 4',
    week: 10,
    milestone: 'Incorporating Teacher Feedback and Deepening Analysis',
    tasks: [
      'Read teacher feedback and produce a prioritised revision action plan.',
      'Deepen analytical sections identified as descriptive: add theoretical references, additional data evidence, or evaluative commentary.',
      'Address any structural weaknesses: improve signposting, paragraph topic sentences, and logical sequencing.',
      'Conduct a full bibliography audit: add any missing entries, correct formatting errors, and remove uncited sources.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'none',
  },
  {
    id: 'u4-week-11',
    unit: 'Unit 4',
    week: 11,
    milestone: 'Final Proofreading and Portfolio Assembly',
    tasks: [
      'Complete the final revised version of the investigation.',
      'Proofread the entire investigation for spelling, grammar, punctuation, and consistency of terminology.',
      'Conduct a final word count check: main body 2,500-3,000 words, bibliography and appendix excluded.',
      'Assemble the final portfolio: coversheet, investigation, bibliography, data appendix in the required order.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'final',
  },
  {
    id: 'u4-week-12',
    unit: 'Unit 4',
    week: 12,
    milestone: 'Submission and Consolidation',
    tasks: [
      'Submit the completed Unit 4 investigation portfolio by the internal centre deadline.',
      'Archive all drafts, research notes, data, and feedback documents for potential moderation.',
      'Write a personal reflection: what would you investigate differently? What did the research process teach you about language?',
      'Review the full Unit 4 specification and mark scheme in preparation for any remaining assessed components.',
    ],
    teacherFeedbackPoint: false,
    submissionType: 'final',
  },
]

// ──────────────────────────────────────────────
// COURSEWORK EXEMPLARS
// ──────────────────────────────────────────────

export const courseworkExemplars: AnnouncedExemplar[] = [
  // ── Unit 3 - Band 2 ──────────────────────────
  {
    id: 'u3-exemplar-band2-a',
    unit: 'Unit 3',
    component: 'Original Writing',
    band: 2,
    examinerComment:
      'This piece demonstrates some awareness of the chosen genre - a travel article - and maintains a broadly appropriate register for much of its length. The candidate attempts a variety of sentence structures and includes some descriptive imagery. However, the writing lacks the consistent linguistic control required for the higher bands. Register shifts occur across the piece, moving between formal journalistic style and colloquial phrasing without deliberate effect. The opening is competent but generic, and the closing fails to resolve the piece in a way that is specific to travel writing conventions. Several technique choices feel accidental rather than crafted.',
    whatWorksWell: [
      'Genre is identifiable throughout: the candidate uses subheadings, a scene-setting opening paragraph, and evaluative commentary consistent with travel writing.',
      'Some specific sensory detail is present, showing an awareness that description should engage multiple senses.',
      'Sentence variety is attempted: the candidate uses both longer compound-complex sentences for atmosphere and shorter declarative sentences for emphasis.',
      'The piece sustains a broadly positive evaluative tone towards the destination, which is consistent with the audience-facing purpose of a travel article.',
    ],
    whatToImprove: [
      'Develop register consistency: identify moments where colloquial vocabulary intrudes on the formal journalistic tone and revise these deliberately.',
      'Make structural choices more genre-specific: a travel article typically builds towards a recommendation - restructure the closing paragraph to fulfil this generic expectation.',
      'Replace generic descriptors (beautiful, amazing, incredible) with precise, original language choices that create a distinctive voice.',
      'The commentary should name and explain specific techniques rather than describing the content of the writing; band 3 and above requires linguistic metalanguage.',
    ],
    grade: '6',
  },
  {
    id: 'u3-exemplar-band2-b',
    unit: 'Unit 3',
    component: 'Commentary',
    band: 2,
    examinerComment:
      'The commentary shows some understanding of the task but remains largely descriptive. The candidate identifies that they "used adjectives to describe the setting" and that they "wanted the reader to feel as if they were there", but these observations do not reach the level of analytical precision required for the higher bands. Metalanguage is sparse and, where present, is occasionally misapplied. The discussion of audience and purpose is brief and formulaic. The commentary does address both pieces, which is a requirement, but the treatment of the second piece is noticeably thinner than the first.',
    whatWorksWell: [
      'Both pieces are discussed, meeting the fundamental requirement of the task.',
      'The candidate makes a genuine attempt to connect language choices to intended audience, even if the connection is not always precise.',
      'Some short quotations from the original writing are included, demonstrating an awareness that analytical claims should be evidenced.',
      'The register of the commentary is appropriately formal and distinct from the creative writing pieces.',
    ],
    whatToImprove: [
      'Replace vague descriptive observations with technique-specific analytical statements: name the technique, quote the evidence, explain the effect.',
      'Increase the range of metalanguage: aim to use at least four named techniques per piece.',
      'Develop the audience discussion: identify specific characteristics of the target audience and explain how individual language choices respond to those characteristics.',
      'Give equal analytical attention to both pieces: the second piece deserves as many analytical observations as the first.',
    ],
    grade: '6',
  },

  // ── Unit 3 - Band 4 ──────────────────────────
  {
    id: 'u3-exemplar-band4-a',
    unit: 'Unit 3',
    component: 'Original Writing',
    band: 4,
    examinerComment:
      'This is a confident and accomplished piece of writing that demonstrates sustained control of genre, register, and linguistic technique. The candidate has chosen to write a political speech, and the piece successfully deploys the rhetorical conventions of the genre throughout: direct address, inclusive pronouns, anaphora, tricolon, and modal verb choices are all used with clear purpose. Register is consistently maintained at the appropriate formal-but-accessible pitch for a public speech, and the structural logic builds effectively towards the peroration. One or two minor lapses in phrasing prevent this from reaching Band 5, but the overall quality is high.',
    whatWorksWell: [
      'Register is highly consistent throughout: the candidate navigates the distinctive demands of formal political oratory without slipping into either stiff bureaucratic language or inappropriate informality.',
      'Structural control is impressive: the speech follows the convention of building argument through a series of reframings of the central issue, with the anaphoric refrain providing cohesion across the whole text.',
      'Rhetorical technique is deployed purposefully and with variety: anaphora, tricolon, rhetorical question, antithesis, and direct address are all present and contribute to the cumulative persuasive effect.',
      "The opening is original and immediately establishes the speaker's ethos, and the closing circles back to the opening image in a way that is structurally sophisticated.",
      'Lexical choices reflect a strong vocabulary range, including precise abstract nouns and carefully chosen modal verbs that modulate the degree of assertion across the argument.',
    ],
    whatToImprove: [
      'One paragraph in the central section loses momentum: the argument becomes circular rather than building, and the sentence structures become repetitive without the variation that elsewhere drives the speech forward.',
      'The occasional use of overly literary metaphor sits slightly uneasily within the political oratory genre, which tends to prefer accessible metaphors grounded in shared experience.',
      'The commentary could more precisely identify the strategic placement of techniques: not just that anaphora is used but why it is positioned at that specific moment in the argument.',
    ],
    grade: '8',
  },
  {
    id: 'u3-exemplar-band4-b',
    unit: 'Unit 3',
    component: 'Commentary',
    band: 4,
    examinerComment:
      'An analytical and well-structured commentary that demonstrates clear understanding of the relationship between linguistic choices and communicative effect. The candidate uses metalanguage accurately and consistently and provides well-chosen embedded quotations to anchor each analytical point. The discussion of both pieces is balanced and the comparative element in the final paragraph is a strong feature. To reach Band 5 the candidate would need to develop the evaluative and reflective dimension more fully - questioning why particular choices were more or less successful rather than only affirming that they work.',
    whatWorksWell: [
      'Metalanguage is used accurately and with clear understanding: terms such as syndetic listing, second-person deixis, and modal epistemic verb are all applied correctly with appropriate examples.',
      'The analytical structure is disciplined: each paragraph uses point-evidence-effect with precision, and there is genuine insight about how techniques create meaning for the specific audience.',
      'Both pieces receive thorough and roughly equal treatment, and the comparison drawn in the final paragraph demonstrates critical awareness of how genre shapes linguistic choice.',
      'The commentary is written in fluent formal academic prose and stays within the word limit without any sense of padding or compression.',
      'The candidate demonstrates awareness of the deliberate nature of their choices, signalled by phrases such as "the decision to use..." and "this choice was made in order to...".',
    ],
    whatToImprove: [
      'Develop the evaluative dimension: at Band 5 commentaries reflect critically on whether choices fully achieved their intended effect, not only that an effect was intended.',
      "The discussion of the second piece's structure is thinner than that of the first - the final section feels slightly rushed and could benefit from two or three additional precise analytical observations.",
      'Consider discussing a moment where an initial choice was rejected in favour of a better alternative - this kind of meta-reflective writing is highly valued at the top of the band.',
    ],
    grade: '8',
  },

  // ── Unit 4 - Band 2 ──────────────────────────
  {
    id: 'u4-exemplar-band2-a',
    unit: 'Unit 4',
    component: 'Language Investigation',
    band: 2,
    examinerComment:
      "The investigation addresses a recognisable linguistic topic - gender differences in conversational turn-taking - and the candidate has made a genuine attempt to collect primary data through two recorded conversations. However, the analysis remains largely at the level of data description: the candidate notes that female speakers take longer turns and uses more back-channelling, but does not connect these observations to the theoretical frameworks named in the introduction (Tannen's rapport versus report talk model goes uncited in the analysis itself). The bibliography contains two sources but one is a general website with no named author or publication date.",
    whatWorksWell: [
      'Primary data has been collected and is attached as an appendix, meeting a basic requirement of the task.',
      'The research question is identifiable and focused on a specific linguistic variable.',
      'The candidate demonstrates basic awareness that female and male speakers may differ in conversational behaviour, which shows some engagement with the topic.',
      'The writing is generally clear and readable, with a recognisable investigation structure (introduction, data, findings).',
    ],
    whatToImprove: [
      'Apply the named theoretical frameworks within the analysis section itself: Tannen must appear not only in the introduction but in the paragraphs where specific data features are discussed.',
      'Move from description to analysis: do not only state what you found, but explain what it means, why it might have occurred, and how it relates to existing scholarship.',
      'Strengthen the bibliography: replace the uncited website with an academic source and ensure all entries have full publication details.',
      'Include a methodology section that explains how data was collected, why these particular speakers were chosen, and what the limitations of the data set are.',
    ],
    grade: '5',
  },
  {
    id: 'u4-exemplar-band2-b',
    unit: 'Unit 4',
    component: 'Language Investigation',
    band: 2,
    examinerComment:
      'This investigation into the language of social media posts makes an interesting choice of topic but is undermined by the breadth of the data set and the absence of a systematic analytical method. The candidate has collected 40 posts from four different platforms but has not coded or categorised them in any consistent way, resulting in an analysis that moves unsystematically between examples without building a coherent argument. The conclusion overstates what the data can support, making claims about "how all young people use social media language" from a sample of 40 posts from a single age group in one school.',
    whatWorksWell: [
      'The topic is genuinely interesting and relevant to contemporary sociolinguistics.',
      'The candidate shows enthusiasm for the subject and has collected a substantive primary data set.',
      'Some observations about graphological features of posts (emoji use, capitalisation for emphasis, hashtag syntax) are perceptive.',
      'The investigation is presented clearly with a coversheet, numbered sections, and a data appendix.',
    ],
    whatToImprove: [
      'Narrow the research question: instead of "social media language", focus on one specific feature (e.g., hedging strategies in personal posts versus brand posts) that can be analysed systematically.',
      'Develop a coding methodology: categorise data features consistently before beginning the written analysis.',
      'Moderate the conclusion: acknowledge the limitations of the sample size and avoid generalisations that the data cannot support.',
      "Engage more specifically with linguistic theory: Crystal's work on language and the internet or Baron's research on digital communication should be cited and applied in the analysis.",
    ],
    grade: '5',
  },

  // ── Unit 4 - Band 4 ──────────────────────────
  {
    id: 'u4-exemplar-band4-a',
    unit: 'Unit 4',
    component: 'Language Investigation',
    band: 4,
    examinerComment:
      "This is a rigorous and well-constructed investigation into code-switching patterns among bilingual speakers in a multilingual family setting. The research question is sharply focused, the methodology is clearly explained and appropriately justified, and the analysis demonstrates genuine fluency with sociolinguistic theory. Gumperz's concept of situational code-switching and Myers-Scotton's Markedness Model are both applied accurately and productively to the transcribed data. The conclusion is appropriately measured, acknowledging the limitations of the small sample while drawing meaningful interpretations that are well-supported by evidence. A full and correctly formatted bibliography is presented.",
    whatWorksWell: [
      'The research question is precise, answerable within the word count, and genuinely advances understanding rather than merely confirming prior expectations.',
      'The methodology section is thorough and honest about limitations: the candidate acknowledges that the presence of a recorder may have affected natural speech patterns.',
      'Theoretical frameworks are applied correctly and integrated into the analytical prose rather than presented as separate sections of theory.',
      'The data is analysed systematically: the candidate uses a consistent set of coding categories and cross-references individual examples with frequency counts.',
      'The bibliography contains eight well-chosen academic sources, all correctly formatted in Harvard style, with no discrepancies between in-text citations and the reference list.',
      'Academic register is sustained throughout, and the writing is clear and precise without being dry.',
    ],
    whatToImprove: [
      'The comparison between the two speakers in the family could be developed further: the current analysis identifies differences but does not fully explore the social motivations behind them.',
      'One analytical paragraph in the central section moves away from the data to discuss broader sociolinguistic theory at length - this should be tightened to maintain focus on what the primary data reveals.',
      'The conclusion could go slightly further in positioning the findings within the wider scholarly debate about bilingual identity and code-switching function.',
    ],
    grade: '9',
  },
  {
    id: 'u4-exemplar-band4-b',
    unit: 'Unit 4',
    component: 'Language Investigation',
    band: 4,
    examinerComment:
      "An impressive investigation that examines the representation of scientific uncertainty in newspaper reporting of climate change across two broadsheet publications. The candidate has designed a focused corpus of 20 articles and applied a systematic discourse analysis using Fairclough's framework alongside a specific examination of modal verb use and hedging devices. The analysis moves fluently between micro-level linguistic detail and the broader ideological framing of the two newspapers, creating an investigation that is genuinely analytical at both levels. The bibliography is thorough and includes both linguistic theory and media studies scholarship relevant to the topic.",
    whatWorksWell: [
      'The corpus is well-designed: the candidate has matched articles by date and topic across the two newspapers, controlling for variables beyond linguistic choice.',
      'The analytical method is transparent and systematic: the candidate explains how modal verbs were categorised (epistemic, deontic, dynamic) and counts are presented in a clear table.',
      "Fairclough's framework is applied with genuine understanding: the candidate moves convincingly between the textual, discursive, and social dimensions of the analysis.",
      'The investigation demonstrates independent thinking: the candidate identifies a pattern in the data that contradicts the initial hypothesis and adjusts the argument accordingly rather than ignoring the counter-evidence.',
      'Writing is fluent, precise, and consistently academic in register; hedging in the conclusion is itself an interesting meta-linguistic demonstration of the topic under investigation.',
    ],
    whatToImprove: [
      'A small number of secondary sources in the bibliography are cited in the introduction but not revisited in the analysis section itself - ensure every source cited is actually integrated into the argument.',
      'The investigation would benefit from a brief discussion of the role of editorial policy in shaping linguistic choices, which would add another layer of contextual awareness to the discourse analysis.',
      "Some of the modal verb frequency tables could be more precisely labelled to distinguish instances in direct quotation from scientists from those in the journalist's own prose.",
    ],
    grade: '9',
  },
]
