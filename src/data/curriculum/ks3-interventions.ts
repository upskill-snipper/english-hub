export interface InterventionLesson {
  id: string;
  title: string;
  targetSkill: string;
  skillCode: string;
  yearGroup: string;
  groupSize: 'individual' | 'small-group' | 'whole-class';
  duration: string;
  issue: string;
  objectives: string[];
  activities: {
    title: string;
    duration: string;
    description: string;
    resources: string[];
  }[];
  successIndicators: string[];
  followUp: string;
}

export interface CommonMisconception {
  id: string;
  area: 'reading' | 'writing' | 'grammar' | 'literary-analysis';
  yearGroup: string;
  misconception: string;
  whyItHappens: string;
  howToAddress: string;
  teachingActivity: string;
  preventionStrategy: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERVENTION LESSONS  (18 total: 6 per year group)
// ─────────────────────────────────────────────────────────────────────────────

export const interventionLessons: InterventionLesson[] = [

  // ── YEAR 7 ────────────────────────────────────────────────────────────────

  {
    id: 'int-y7-01',
    title: 'Finding and Lifting Evidence',
    targetSkill: 'Retrieving textual evidence',
    skillCode: 'R-RET',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students give vague, invented, or paraphrased references instead of locating and quoting directly from the text.',
    objectives: [
      'Locate relevant evidence in a short prose extract.',
      'Distinguish between paraphrase and direct quotation.',
      'Copy a quotation accurately with correct punctuation.',
    ],
    activities: [
      {
        title: 'Paraphrase vs. Quote Sort',
        duration: '10 minutes',
        description:
          'Give students a set of 12 cards: six direct quotations from a shared extract and six paraphrases of the same moments. Students sort them into two columns and discuss why exact wording matters when writing about a text.',
        resources: [
          'Laminated card sort (quotation vs. paraphrase)',
          'Short prose extract (approx. 200 words)',
        ],
      },
      {
        title: 'Highlighter Hunt',
        duration: '15 minutes',
        description:
          'Students use three different highlighter colours to mark evidence of character, setting, and atmosphere in a second short extract. Teacher models how to identify the most precise phrase rather than copying whole sentences.',
        resources: [
          'Printed extract (A5, double-spaced)',
          'Three highlighters per student',
        ],
      },
      {
        title: 'Lift and Frame',
        duration: '15 minutes',
        description:
          'Using a sentence-stem scaffold ("The writer shows this when ... "), students practise embedding one piece of highlighted evidence into a complete sentence for each of the three categories. Pairs swap and check for accuracy of copying.',
        resources: [
          'Sentence-stem scaffold sheet',
          'Whiteboard and marker per pair',
        ],
      },
      {
        title: 'Independent Mini-Task',
        duration: '10 minutes',
        description:
          'Students independently answer one retrieval question about a new extract, writing two sentences: one with a direct quotation and one explaining what it shows. Teacher circulates to check quoting accuracy.',
        resources: [
          'Mini-task retrieval question card',
          'Lined response booklet',
        ],
      },
    ],
    successIndicators: [
      'Student can locate a relevant word or phrase within two minutes of being given an extract.',
      'Quotation is copied accurately, including correct punctuation.',
      'Student can explain in one sentence what the evidence shows.',
    ],
    followUp:
      'In the next reading lesson, require every answer to include at least one direct quotation before the student can move on. Use peer-checking of quoting accuracy as a warm-up routine.',
  },

  {
    id: 'int-y7-02',
    title: 'Building a PEE Paragraph',
    targetSkill: 'PEE paragraph structure',
    skillCode: 'W-PEE',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students write either a bare point or a long quotation dump with no explanation, producing single-sentence responses that do not analyse the text.',
    objectives: [
      'Identify the three parts of a PEE paragraph in a model answer.',
      'Write a point that makes a clear claim about the text.',
      'Attach evidence and a two-sentence explanation to that claim.',
    ],
    activities: [
      {
        title: 'Anatomy of a Model Paragraph',
        duration: '10 minutes',
        description:
          'Display a colour-coded model PEE paragraph on the board (Point in red, Evidence in blue, Explanation in green). Students label the same paragraph on their own copy, then identify what would happen if each section were removed.',
        resources: [
          'Colour-coded model paragraph handout',
          'Coloured pencils',
        ],
      },
      {
        title: 'Broken Paragraphs',
        duration: '15 minutes',
        description:
          'Provide three paragraphs that each lack one of P, E, or E. Students identify what is missing, discuss why the response is weaker without it, and then write the missing section in the space provided.',
        resources: [
          'Broken paragraph cards (set of 3)',
          'Writing frame with labelled sections',
        ],
      },
      {
        title: 'Guided Build',
        duration: '15 minutes',
        description:
          'Teacher leads students through building one complete PEE paragraph together using a shared extract. Each student contributes one sentence. Teacher scribes on the board and questions word choices at the explanation stage.',
        resources: [
          'Shared extract (projected or printed)',
          'Interactive whiteboard',
        ],
      },
      {
        title: 'Independent PEE Attempt',
        duration: '10 minutes',
        description:
          'Students write their own PEE paragraph responding to a new question. They label each section P, E, E in the margin before handing in.',
        resources: [
          'PEE paragraph writing frame',
          'Response question card',
        ],
      },
    ],
    successIndicators: [
      'Student can correctly label P, E, E in a model paragraph.',
      'Independent paragraph contains a clear claim, a direct quotation, and at least two sentences of explanation.',
      'Explanation refers back to the original point made.',
    ],
    followUp:
      'Use the PEE label-in-the-margin strategy as a self-editing habit in all subsequent analytical writing. After two weeks, remove the writing frame and check students can sustain structure without it.',
  },

  {
    id: 'int-y7-03',
    title: 'Apostrophes for Possession',
    targetSkill: 'Apostrophe use',
    skillCode: 'G-APO',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students either omit apostrophes for possession, use them for all plurals, or misplace them after singular and plural nouns.',
    objectives: [
      'Distinguish between possessive apostrophes and contractions.',
      'Apply the rule for singular possession correctly.',
      'Apply the rule for plural possession correctly.',
    ],
    activities: [
      {
        title: 'Two Types Sort',
        duration: '10 minutes',
        description:
          'Students receive a set of 16 sentences, each containing an apostrophe. They sort them into two groups: possession and contraction. Class discuss any sentences they disagreed on.',
        resources: [
          'Sentence card sort (16 cards)',
          'Two-column sorting mat',
        ],
      },
      {
        title: 'The Ownership Test',
        duration: '15 minutes',
        description:
          'Teach the "ownership test": if you can rephrase as "the X belonging to Y", it needs a possessive apostrophe. Students apply the test to 10 sentences, deciding where to insert the apostrophe and whether to place it before or after the s.',
        resources: [
          'Ownership test worksheet',
          'Answer key (for peer marking)',
        ],
      },
      {
        title: 'Singular and Plural Contrast Drills',
        duration: '15 minutes',
        description:
          'Paired work: one student reads a noun phrase aloud (e.g., "one dog / three dogs"), the other writes the possessive form on a mini-whiteboard and shows it. Rotate roles every five examples. Teacher corrects in real time.',
        resources: [
          'Noun phrase prompt cards (singular/plural pairs)',
          'Mini-whiteboards and markers',
        ],
      },
      {
        title: 'Error Correction Challenge',
        duration: '10 minutes',
        description:
          'Students are given a short paragraph with eight deliberate apostrophe errors. They identify and correct each one, then explain in a sentence what rule applies to each correction.',
        resources: [
          'Apostrophe error paragraph',
          'Rule reference card',
        ],
      },
    ],
    successIndicators: [
      'Student correctly places apostrophes in 9 out of 10 singular possessives.',
      'Student correctly places apostrophes in 9 out of 10 plural possessives.',
      'Student does not insert apostrophes into simple plurals.',
    ],
    followUp:
      'Build in a weekly proofreading step focused only on apostrophes during the drafting stage of any written work. Reward correct use explicitly in verbal feedback.',
  },

  {
    id: 'int-y7-04',
    title: 'Writing Complex Sentences',
    targetSkill: 'Complex sentence construction',
    skillCode: 'G-CMPLX',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students write exclusively in short simple sentences or link ideas only with "and" and "but", producing writing that lacks subordination and syntactic variety.',
    objectives: [
      'Identify the main clause and subordinate clause in a complex sentence.',
      'Use at least four different subordinating conjunctions accurately.',
      'Vary sentence openings by positioning the subordinate clause first.',
    ],
    activities: [
      {
        title: 'Clause Colour Code',
        duration: '10 minutes',
        description:
          'Students receive a model paragraph. They underline main clauses in red and subordinate clauses in blue. Group discussion: what do the subordinate clauses add to the meaning?',
        resources: [
          'Model paragraph printout',
          'Red and blue coloured pencils',
        ],
      },
      {
        title: 'Conjunction Bank Expansion',
        duration: '10 minutes',
        description:
          'Display a list of six subordinating conjunctions (because, although, since, whenever, unless, while). Students generate one sentence per conjunction, connecting two ideas from a shared topic (e.g., a class novel). Discuss how each changes meaning.',
        resources: [
          'Subordinating conjunction poster',
          'Topic stimulus card',
        ],
      },
      {
        title: 'Sentence Combining Challenge',
        duration: '15 minutes',
        description:
          'Pairs receive ten sets of two simple sentences. They combine each pair into a single complex sentence, choosing an appropriate conjunction. They then rewrite three of their sentences with the subordinate clause at the start, adding a comma after it.',
        resources: [
          'Simple sentence combining cards',
          'Punctuation reminder strip',
        ],
      },
      {
        title: 'Uplift Your Own Writing',
        duration: '15 minutes',
        description:
          'Students return to a piece of their own recent writing. They identify three simple sentences to upgrade. They rewrite them as complex sentences and annotate the conjunction used.',
        resources: [
          'Previous piece of student writing',
          'Annotation stickers',
        ],
      },
    ],
    successIndicators: [
      'Student can write a complex sentence using four different conjunctions without a prompt.',
      'Student uses a fronted subordinate clause correctly with a comma in at least one sentence.',
      'Revised writing contains fewer than three consecutive simple sentences.',
    ],
    followUp:
      'Include a "sentence-type tally" in self-assessment checklists: students count how many complex sentences appear in their next piece of writing and aim to increase the number each time.',
  },

  {
    id: 'int-y7-05',
    title: 'Embedding Short Quotations',
    targetSkill: 'Embedding quotations in analytical writing',
    skillCode: 'W-QUOT',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students drop quotations in as separate sentences or full block extracts rather than weaving brief phrases into their own sentences grammatically.',
    objectives: [
      'Understand why embedded quotations read more fluently than dropped-in quotations.',
      'Embed a quotation of three words or fewer into a grammatically complete sentence.',
      'Use inverted commas correctly around the embedded phrase.',
    ],
    activities: [
      {
        title: 'Dropped vs. Embedded Comparison',
        duration: '10 minutes',
        description:
          'Display two versions of the same analytical point: one with a dropped quotation and one with an embedded quotation. Students discuss the difference in fluency and analytical weight. Teacher explains the "weave test": read the sentence aloud - does the quotation sound part of your sentence?',
        resources: [
          'Comparative example handout (dropped vs. embedded)',
          'Whiteboard',
        ],
      },
      {
        title: 'Shrink the Quote',
        duration: '15 minutes',
        description:
          'Students are given five analytical sentences each containing a full-sentence quotation. They must trim the quotation to the three most important words and embed them into the analytical sentence. Compare choices as a group.',
        resources: [
          'Shrink-the-quote worksheet',
          'Highlighters',
        ],
      },
      {
        title: 'Build It In',
        duration: '15 minutes',
        description:
          'Using a shared extract, teacher selects five key phrases. Students write one analytical sentence per phrase, embedding it grammatically. Pairs swap and read each sentence aloud to check it flows.',
        resources: [
          'Key phrase list',
          'Sentence-building writing frame',
        ],
      },
      {
        title: 'Cold Writing Check',
        duration: '10 minutes',
        description:
          'Students answer a short question about an unseen extract, writing three sentences each with an embedded quotation. Teacher marks for grammatical embedding and correct inverted commas.',
        resources: [
          'Unseen extract card',
          'Response sheet',
        ],
      },
    ],
    successIndicators: [
      'Quotation is three words or fewer in at least two of the three response sentences.',
      'Each embedded quotation forms part of a grammatically complete sentence.',
      'Inverted commas are placed correctly around the embedded phrase.',
    ],
    followUp:
      'During class analytical writing tasks, require students to circle every quotation and draw an arrow to show that it connects to both the words before and after it, confirming grammatical embedding.',
  },

  {
    id: 'int-y7-06',
    title: 'Describing Setting with Precise Language',
    targetSkill: 'Descriptive and creative writing',
    skillCode: 'W-DESC',
    yearGroup: 'Year 7',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students rely on generic adjectives (nice, big, scary) and list features of a setting without creating atmosphere or using sensory detail.',
    objectives: [
      'Select precise, specific vocabulary over generic modifiers.',
      'Use at least two senses beyond sight in descriptive writing.',
      'Create a consistent mood through sustained word choice.',
    ],
    activities: [
      {
        title: 'Thesaurus Upgrade',
        duration: '10 minutes',
        description:
          'Students receive a dull descriptive paragraph using only generic adjectives. Using printed thesaurus strips, they replace every highlighted adjective with a more precise alternative. Discuss which replacements change the mood and why.',
        resources: [
          'Weak descriptive paragraph',
          'Thesaurus strips (topic-specific)',
        ],
      },
      {
        title: 'Five Senses Web',
        duration: '10 minutes',
        description:
          'Display an image of a setting (e.g., a dark forest, a market, an abandoned house). Students complete a five-senses spider diagram. Teacher models how to transform a note into a full descriptive phrase for each sense.',
        resources: [
          'Setting image (projected)',
          'Five-senses spider diagram template',
        ],
      },
      {
        title: 'Mood Bank Writing',
        duration: '15 minutes',
        description:
          'Students choose one mood (menacing, peaceful, eerie, joyful). They write a four-sentence description of a given setting, ensuring every word choice reinforces that mood. Pairs read aloud and guess the intended mood.',
        resources: [
          'Mood word banks (one per mood)',
          'Setting stimulus card',
        ],
      },
      {
        title: 'Redraft and Annotate',
        duration: '15 minutes',
        description:
          'Students revisit a previous setting description from their exercise book. They improve it using strategies from the lesson and annotate two improvements, explaining the effect of the change.',
        resources: [
          'Previous exercise book work',
          'Annotation prompt strip',
        ],
      },
    ],
    successIndicators: [
      'Revised description contains zero instances of the words nice, big, or scary.',
      'At least two senses beyond sight are present in the description.',
      'Peer reader can identify the intended mood without being told.',
    ],
    followUp:
      'Before any creative writing task, students complete a mood/vocabulary bank for their setting as a planning step. Insist on this as non-negotiable for students who went through this intervention.',
  },

  // ── YEAR 8 ────────────────────────────────────────────────────────────────

  {
    id: 'int-y8-01',
    title: 'Selecting and Prioritising Evidence',
    targetSkill: 'Retrieving and selecting textual evidence',
    skillCode: 'R-RET',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students retrieve the first piece of evidence they find rather than selecting the most precise or revealing quotation, limiting the quality of their analysis.',
    objectives: [
      'Distinguish between relevant and highly precise evidence for a given question.',
      'Explain why one piece of evidence is stronger than another for a specific purpose.',
      'Select the single word or short phrase that carries most analytical weight.',
    ],
    activities: [
      {
        title: 'Evidence Ranking',
        duration: '10 minutes',
        description:
          'Provide five quotations from an extract, all technically relevant to a given question. Students rank them from most to least useful and justify their top choice in one sentence. Discuss as a group: what makes evidence "the best"?',
        resources: [
          'Quotation ranking cards (set of 5)',
          'Extract (A5 printed)',
        ],
      },
      {
        title: 'Precision Zoom',
        duration: '15 minutes',
        description:
          'Teacher models zooming in from a long quotation to the key two or three words within it. Students practise with four long quotations: they bracket the most important word or phrase and write one sentence explaining their choice.',
        resources: [
          'Long quotation worksheet',
          'Annotation guidance strip',
        ],
      },
      {
        title: 'Deliberate Weak Choice Challenge',
        duration: '10 minutes',
        description:
          'Students are given two analytical paragraphs: identical in structure, but one uses a vague quotation and one uses a precise zoomed-in phrase. They identify which is stronger and write a sentence explaining how the quotation choice changes the analysis.',
        resources: [
          'Parallel paragraph comparison sheet',
        ],
      },
      {
        title: 'Timed Evidence Selection',
        duration: '15 minutes',
        description:
          'Students have three minutes to read a new extract, two minutes to select their best single piece of evidence for a given focus, and five minutes to write a PEE paragraph. Debrief: how confident were they in their evidence selection?',
        resources: [
          'Unseen extract',
          'Timed task card',
          'PEE response frame',
        ],
      },
    ],
    successIndicators: [
      'Selected quotation is no longer than five words in independent task.',
      'Student can articulate in one sentence why their chosen evidence is better than an alternative.',
      'Analysis paragraph builds on the specific word choice in the quotation.',
    ],
    followUp:
      'Introduce a "precision score" in peer marking: peers highlight whether the quotation is a full sentence (1 point), a phrase (2 points), or a key word or two (3 points), encouraging ongoing attention to evidence selection.',
  },

  {
    id: 'int-y8-02',
    title: 'Upgrading PEE to PEEL',
    targetSkill: 'Analytical paragraph structure',
    skillCode: 'W-PEE',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students can write a basic PEE paragraph but their explanation stops at surface meaning and they do not link back to the question or a wider theme.',
    objectives: [
      'Understand how a "link" sentence strengthens an analytical paragraph.',
      'Write an explanation that discusses effect on the reader, not just surface meaning.',
      'Close a paragraph by connecting evidence to a theme or question focus.',
    ],
    activities: [
      {
        title: 'What is Missing?',
        duration: '10 minutes',
        description:
          'Display a well-structured PEE paragraph and a matching PEEL paragraph. Students compare them and identify what the link sentence adds. Teacher explains that the link shows the "so what?" of the analysis.',
        resources: [
          'PEE vs. PEEL comparison handout',
          'Whiteboard',
        ],
      },
      {
        title: 'Link Sentence Starters',
        duration: '10 minutes',
        description:
          'Give students a list of eight link sentence starters (e.g., "This reinforces the idea that ...", "The reader is therefore encouraged to ...", "Overall, this suggests ..."). Students choose three and draft a link sentence for a shared paragraph already on the board.',
        resources: [
          'Link sentence starter bank',
          'Shared PEE paragraph (projected)',
        ],
      },
      {
        title: 'Retrofit the Link',
        duration: '15 minutes',
        description:
          'Students receive three of their own previous PEE paragraphs. For each, they add a link sentence and a more developed explanation sentence. They annotate what their addition does for the analysis.',
        resources: [
          'Student exercise books (or printed copies of past work)',
          'Annotation prompt cards',
        ],
      },
      {
        title: 'Full PEEL Independent Write',
        duration: '15 minutes',
        description:
          'Students write a complete PEEL paragraph on a new question. They must label each section in the margin. Peer mark against a PEEL success criteria checklist.',
        resources: [
          'PEEL success criteria checklist',
          'Question card',
          'Unseen extract',
        ],
      },
    ],
    successIndicators: [
      'Independent PEEL paragraph contains a link sentence that references the question or theme.',
      'Explanation discusses effect on the reader (e.g., "The reader feels ...", "This creates a sense of ...").',
      'Student can identify missing link sentences in model paragraphs.',
    ],
    followUp:
      'Insist on PEEL structure in all assessed writing. When marking, underline missing link sentences and return for redraft rather than awarding full marks without them.',
  },

  {
    id: 'int-y8-03',
    title: 'Apostrophes for Contraction and Possession',
    targetSkill: 'Apostrophe use (contraction and possession)',
    skillCode: 'G-APO',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students applying apostrophes inconsistently in extended writing, mixing up its/it\'s and whose/who\'s, and still using apostrophes in simple plurals.',
    objectives: [
      "Reliably distinguish its (possessive) from it's (it is).",
      "Reliably distinguish whose (possessive) from who's (who is).",
      'Apply possessive apostrophes correctly in extended writing without prompting.',
    ],
    activities: [
      {
        title: 'Expansion Test',
        duration: '10 minutes',
        description:
          "Teach the expansion test: if the word can be expanded to 'it is' or 'who is', it needs an apostrophe. If not, it is the possessive pronoun and needs no apostrophe. Students apply the test to 15 sentences with blanks, choosing the correct form.",
        resources: [
          'Expansion test worksheet (15 items)',
          'Rule reminder card',
        ],
      },
      {
        title: 'Error Hunt in Published Text',
        duration: '10 minutes',
        description:
          "Display a paragraph (teacher-written, not from a published book) containing six deliberate its/it's and whose/who's errors. Students identify and correct each one, citing the rule they applied.",
        resources: [
          'Error hunt paragraph (projected or printed)',
          'Mini-whiteboards',
        ],
      },
      {
        title: 'Write and Swap',
        duration: '15 minutes',
        description:
          "Each student writes a paragraph (8-10 sentences) on a topic of their choice, deliberately using its, it's, whose, and who's at least twice each. Swap with a partner who underlines every apostrophe and marks it correct or incorrect.",
        resources: [
          'Lined paper',
          'Peer marking guide',
        ],
      },
      {
        title: 'Proofreading Sprint',
        duration: '15 minutes',
        description:
          "Students proofread a piece of their own recent extended writing, hunting exclusively for apostrophe errors. They correct and tally the number of errors found. Teacher notes patterns for future targeted feedback.",
        resources: [
          'Recent extended writing piece',
          'Tally sheet',
        ],
      },
    ],
    successIndicators: [
      "Student achieves 100% accuracy on its/it's in a 10-item test.",
      "Student achieves 100% accuracy on whose/who's in a 10-item test.",
      'Proofreading sprint reveals fewer than two apostrophe errors in extended writing.',
    ],
    followUp:
      "In every piece of extended writing, insist students circle every apostrophe and write above it: 'contraction' or 'possession'. This metacognitive step forces deliberate checking.",
  },

  {
    id: 'int-y8-04',
    title: 'Varying Sentence Structures for Effect',
    targetSkill: 'Syntactic variety and deliberate sentence structure',
    skillCode: 'G-CMPLX',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students can form complex sentences but use only one structural pattern repeatedly, resulting in monotonous rhythm and limited awareness of how sentence length creates effect.',
    objectives: [
      'Use a short simple sentence deliberately for emphasis after a complex sentence.',
      'Use a minor sentence (verbless) for dramatic effect in creative writing.',
      'Vary sentence length consciously to control pace and tension.',
    ],
    activities: [
      {
        title: 'Sentence Length Mapping',
        duration: '10 minutes',
        description:
          'Students count the words in each sentence of a published extract (10-15 sentences). They plot the lengths as a bar graph and discuss how the pattern of long and short sentences creates rhythm and controls pacing.',
        resources: [
          'Printed extract (from a class novel or anthology)',
          'Squared paper or bar graph template',
        ],
      },
      {
        title: 'Power of the Short Sentence',
        duration: '15 minutes',
        description:
          'Give students three tense paragraphs where every sentence is roughly the same length. They identify the one moment of highest tension and insert a two-to-four word sentence at that point. Read aloud before and after to compare effect.',
        resources: [
          'Three tense paragraphs (adapted extracts)',
          'Read-aloud prompt card',
        ],
      },
      {
        title: 'Minor Sentence Workshop',
        duration: '10 minutes',
        description:
          'Teacher introduces the minor sentence and its effect. Students write five minor sentences appropriate to a horror or thriller scenario. Discuss which create the most impact and why.',
        resources: [
          'Minor sentence definition card',
          'Horror/thriller scenario prompts',
        ],
      },
      {
        title: 'Controlled Creative Paragraph',
        duration: '15 minutes',
        description:
          'Students write a paragraph of exactly eight sentences describing a moment of tension. They must include: two complex sentences, one short sentence for emphasis, and one minor sentence. They annotate the intended effect of each.',
        resources: [
          'Structured paragraph task card',
          'Effect annotation strip',
        ],
      },
    ],
    successIndicators: [
      'Written paragraph contains at least three different sentence types.',
      'Student can explain in one sentence why they chose to use a short sentence at a particular point.',
      'Read-aloud of the paragraph demonstrates audible variation in pace.',
    ],
    followUp:
      'Ask students to annotate sentence lengths in any mentor text studied in class and explain how the author uses variety for effect. Transfer this awareness explicitly into writing tasks.',
  },

  {
    id: 'int-y8-05',
    title: 'Embedding Quotations in Analytical Essays',
    targetSkill: 'Fluent quotation embedding',
    skillCode: 'W-QUOT',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students can embed short quotations in simple sentences but struggle to maintain embedding when writing extended analytical paragraphs, reverting to dropped full sentences.',
    objectives: [
      'Embed a quotation using "colon + full quotation" correctly and understand when this is appropriate.',
      'Embed a quotation mid-sentence without breaking grammatical flow.',
      'Use ellipsis correctly to shorten a longer quotation to its essential phrase.',
    ],
    activities: [
      {
        title: 'Three Methods Comparison',
        duration: '10 minutes',
        description:
          'Present three correctly formatted analytical sentences using a single piece of evidence three different ways: (1) short embedded phrase mid-sentence, (2) colon introducing a longer quotation, (3) ellipsis to trim a mid-length quotation. Students discuss which method suits different analytical purposes.',
        resources: [
          'Three-method comparison card',
          'Whiteboard',
        ],
      },
      {
        title: 'Method Match',
        duration: '15 minutes',
        description:
          'Students receive six analytical sentences and six quotations. They decide which embedding method is most appropriate for each pairing and write the combined sentence. Discuss choices.',
        resources: [
          'Method match card set',
          'Embedding method reference strip',
        ],
      },
      {
        title: 'Ellipsis Practice',
        duration: '10 minutes',
        description:
          'Students receive four full quotations of between 15 and 25 words. They use ellipsis to reduce each to the essential eight words or fewer while preserving meaning, then embed the shortened quotation in an analytical sentence.',
        resources: [
          'Full quotation cards',
          'Ellipsis rule reminder',
        ],
      },
      {
        title: 'Extended Paragraph Write',
        duration: '15 minutes',
        description:
          'Students write a full PEEL paragraph using all three embedding methods (one per quotation). They underline each embedded quotation and label the method used.',
        resources: [
          'Unseen extract',
          'PEEL frame with method labels',
        ],
      },
    ],
    successIndicators: [
      'Student uses all three embedding methods correctly in the extended paragraph.',
      'Ellipsis is used correctly (no meaning distorted, three dots used properly).',
      'No quotation appears as a standalone sentence separated from the analysis.',
    ],
    followUp:
      'In the next assessed essay, mark all standalone quotations with a specific code (Q-D: quotation dropped). Return for targeted revision of those sentences only, expecting students to apply a named embedding method.',
  },

  {
    id: 'int-y8-06',
    title: 'Writing to Compare: Two Texts',
    targetSkill: 'Comparative analytical writing',
    skillCode: 'W-COMP',
    yearGroup: 'Year 8',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students write two separate analyses of two texts rather than comparing them, using a "ping-pong" structure that makes connections only through the word "also".',
    objectives: [
      'Understand the difference between sequential and genuinely comparative writing.',
      'Use comparative connectives to link two texts within a single analytical statement.',
      'Write one paragraph that references both texts in an integrated, comparative way.',
    ],
    activities: [
      {
        title: 'Sequential vs. Comparative Models',
        duration: '10 minutes',
        description:
          'Display two model paragraphs on the same pair of texts: one sequential (text A then text B) and one genuinely comparative (both texts discussed simultaneously). Students list what the comparative model does that the sequential one does not.',
        resources: [
          'Model paragraph comparison handout',
          'Highlighters',
        ],
      },
      {
        title: 'Comparative Connective Bank',
        duration: '10 minutes',
        description:
          'Build a class list of comparative connectives beyond "similarly" and "however", grouped into: similarity (likewise, in the same way, both writers), contrast (whereas, in contrast, unlike), and degree of difference (while X is ... Y takes this further by ...). Students practise writing one sentence for each group.',
        resources: [
          'Comparative connective sorting mat',
          'Sentence frame strip',
        ],
      },
      {
        title: 'Frankenstein Paragraph',
        duration: '15 minutes',
        description:
          'Pairs receive a sequential paragraph about two texts, cut into individual sentences. They reorganise it into a genuinely comparative paragraph by interweaving references to both texts and adding a comparative connective where needed. Compare reconstructions across pairs.',
        resources: [
          'Cut-up paragraph strips',
          'Comparative connective prompt card',
        ],
      },
      {
        title: 'Integrated Comparative Write',
        duration: '15 minutes',
        description:
          'Students write one comparative paragraph about two short provided extracts. They must mention both texts in at least three of their sentences and use at least two different comparative connectives.',
        resources: [
          'Pair of short extracts (same theme, different treatment)',
          'Comparative writing frame',
        ],
      },
    ],
    successIndicators: [
      'Independent paragraph references both texts in at least three sentences.',
      'At least two different comparative connectives are used correctly.',
      'Student can identify the point of comparison (not just name both texts) in their paragraph.',
    ],
    followUp:
      'For comparative tasks, insist on a planning step where students complete a "point of comparison" table (similarity / difference / both + evidence) before writing. Collect and check plans before students begin extended writing.',
  },

  // ── YEAR 9 ────────────────────────────────────────────────────────────────

  {
    id: 'int-y9-01',
    title: 'Inference and Deep Retrieval',
    targetSkill: 'Inference and extended retrieval',
    skillCode: 'R-RET',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students retrieve surface-level information but cannot explain implied meaning, missing the distinction between what a text says and what it suggests.',
    objectives: [
      'Distinguish between explicit and implicit information in a text.',
      'Construct an inference by combining textual evidence with contextual knowledge.',
      'Write an inference response using the structure: evidence + reasoning + implication.',
    ],
    activities: [
      {
        title: 'Says / Means / Suggests',
        duration: '10 minutes',
        description:
          'Using a short extract, model the three-column "Says / Means / Suggests" framework: what the text literally says, what that means in context, and what it suggests about character, theme, or attitude. Students complete the framework for three further lines.',
        resources: [
          'Says/Means/Suggests table template',
          'Shared extract (approx. 150 words)',
        ],
      },
      {
        title: 'The Iceberg Model',
        duration: '10 minutes',
        description:
          'Draw an iceberg on the board. Above the waterline: explicit information. Below: implied meaning, tone, theme, authorial intent. Students add examples from a shared text to each zone. Discuss how much of the meaning lies below the surface.',
        resources: [
          'Iceberg diagram template',
          'Printed extract',
        ],
      },
      {
        title: 'Inference Chain Writing',
        duration: '15 minutes',
        description:
          'Teacher models an inference chain: quotation > literal meaning > implied meaning > authorial purpose. Students write three inference chains for three different quotations from a shared text, each written as a flowing analytical sentence.',
        resources: [
          'Inference chain scaffold',
          'Quotation cards (set of 3)',
        ],
      },
      {
        title: 'Unseen Inference Task',
        duration: '15 minutes',
        description:
          'Students answer a two-part retrieval and inference question on an unseen extract (first: find two pieces of explicit information; second: make two inferences about the narrator\'s attitude). Compare answers and discuss quality of reasoning.',
        resources: [
          'Unseen extract with two-part question',
          'Response sheet',
        ],
      },
    ],
    successIndicators: [
      'Student can write an inference that goes beyond literal meaning in every analytical sentence.',
      'Inference response includes a quotation, a literal explanation, and an implied meaning.',
      'Student can distinguish between retrieval and inference in examples shown.',
    ],
    followUp:
      'In every reading lesson, ask at least one question explicitly labelled "inference" and require the student to state which words in the text they are inferring from. Do not accept unsupported inferences.',
  },

  {
    id: 'int-y9-02',
    title: 'Developing Analytical Paragraphs Beyond PEE',
    targetSkill: 'Extended analytical writing',
    skillCode: 'W-PEE',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students produce technically correct PEE paragraphs that are thin: they name a technique, quote, and state an obvious effect, but do not develop alternative readings, context, or authorial intent.',
    objectives: [
      'Develop an explanation beyond one sentence by exploring multiple layers of meaning.',
      'Integrate a reference to authorial intent or context within an analytical paragraph.',
      'Acknowledge an alternative reading using a "counter-interpretation" sentence.',
    ],
    activities: [
      {
        title: 'Layers of Meaning Discussion',
        duration: '10 minutes',
        description:
          'Take a single quotation from a shared text. Teacher models finding at least three layers of meaning: surface, connotative, thematic. Students suggest additional layers. Emphasise that a strong analytical paragraph explores all three layers.',
        resources: [
          'Single quotation card',
          'Layer-of-meaning diagram template',
        ],
      },
      {
        title: 'Authorial Intent Grafting',
        duration: '15 minutes',
        description:
          "Students receive three PEE paragraphs that lack any reference to the author's intention. They add one sentence to each beginning with: 'Dickens/Steinbeck/Shelley uses this to ...' or 'This suggests that the writer wants the reader to ...'. Discuss how this sentence upgrades the analysis.",
        resources: [
          'Thin PEE paragraph set (3 paragraphs)',
          'Author intent sentence starter strip',
        ],
      },
      {
        title: 'Counter-Interpretation Practice',
        duration: '10 minutes',
        description:
          "Introduce the idea that a text can be read in more than one way. Using a shared quotation, students write two analytical sentences: one reading and a counter-reading introduced with 'However, one could argue that ...' or 'Alternatively, ...'. Discuss whether multiple readings weaken or strengthen analysis.",
        resources: [
          'Counter-interpretation sentence starter card',
          'Shared quotation (projected)',
        ],
      },
      {
        title: 'Full Extended Analytical Paragraph',
        duration: '15 minutes',
        description:
          'Students write a fully developed analytical paragraph: point, evidence, three layers of explanation, authorial intent, and a counter-interpretation. They annotate each layer in the margin.',
        resources: [
          'Extended paragraph writing frame',
          'Unseen extract',
          'Annotation labels strip',
        ],
      },
    ],
    successIndicators: [
      'Explanation section is at least three sentences long.',
      'Paragraph contains at least one sentence referencing authorial intent.',
      'Paragraph contains a correctly framed counter-interpretation sentence.',
    ],
    followUp:
      'Introduce a "depth score" in marking: 1 point for naming technique, 2 for effect on reader, 3 for thematic link, 4 for authorial intent, 5 for alternative reading. Students self-score each paragraph before submission.',
  },

  {
    id: 'int-y9-03',
    title: 'Mastering Apostrophes in Extended Writing',
    targetSkill: 'Consistent apostrophe accuracy in extended writing',
    skillCode: 'G-APO',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students who demonstrate apostrophe knowledge in isolation still produce errors in extended writing under time pressure, suggesting the rule is not yet automatic.',
    objectives: [
      'Self-identify apostrophe errors through a targeted proofreading strategy.',
      'Apply apostrophe rules without conscious attention during drafting.',
      'Demonstrate zero apostrophe errors in a timed piece of writing.',
    ],
    activities: [
      {
        title: 'Speed Rule Recall',
        duration: '5 minutes',
        description:
          'Rapid-fire oral round: teacher calls out a noun (singular or plural) and students must immediately say the possessive form with the apostrophe placed correctly. 20 examples in five minutes. No writing required.',
        resources: [
          'Noun prompt list (20 items)',
        ],
      },
      {
        title: 'Apostrophe Audit of Past Work',
        duration: '15 minutes',
        description:
          'Students review three previous pieces of extended writing (exercise book or portfolio) and record every apostrophe error they find, then classify each as: wrong placement, missing apostrophe, or unnecessary apostrophe. Tally and identify the most common error type for each student.',
        resources: [
          'Previous extended writing pieces',
          'Error classification tally sheet',
        ],
      },
      {
        title: 'Rule Automaticity Drills',
        duration: '15 minutes',
        description:
          'Targeted mini-drills based on individual error tallies: students who made mainly "wrong placement" errors drill 15 placement exercises; those with "missing apostrophe" errors work on a cloze activity; those with "unnecessary apostrophe" errors work on a spot-the-extra exercise.',
        resources: [
          'Three differentiated drill sheets',
          'Answer keys',
        ],
      },
      {
        title: 'Timed Apostrophe-Free Write',
        duration: '15 minutes',
        description:
          'Students write for 12 minutes on a given topic, then spend three minutes circling and checking every apostrophe. Teacher marks the piece that evening for apostrophe accuracy only and returns with a score out of 10.',
        resources: [
          'Timed writing prompt',
          'Self-check apostrophe guide',
        ],
      },
    ],
    successIndicators: [
      'Error tally from past work identifies dominant error type.',
      'Score of 9 or 10 out of 10 on apostrophe accuracy in timed write.',
      'Student can describe their personal apostrophe "danger zone" and the strategy to avoid it.',
    ],
    followUp:
      'For the next three extended writing tasks, students must proofread specifically for apostrophes as the final step before submission and sign a self-check box on the cover sheet.',
  },

  {
    id: 'int-y9-04',
    title: 'Sophisticated Sentence Structures in Analytical Writing',
    targetSkill: 'Advanced syntactic control in analytical writing',
    skillCode: 'G-CMPLX',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students use complex sentences in creative writing but revert to simple structures in analytical essays, producing flat and repetitive prose that limits their mark.',
    objectives: [
      'Use a fronted adverbial in an analytical sentence correctly.',
      'Use a relative clause to add information within an analytical sentence without disrupting flow.',
      'Use a passive construction deliberately to shift analytical focus.',
    ],
    activities: [
      {
        title: 'Sentence Transformation Warm-Up',
        duration: '10 minutes',
        description:
          'Give students five simple analytical sentences. They transform each into three different structural versions (fronted adverbial, embedded relative clause, passive). Compare versions and discuss which works best analytically.',
        resources: [
          'Simple analytical sentence cards (set of 5)',
          'Transformation guide strip',
        ],
      },
      {
        title: 'Relative Clause Insertion',
        duration: '15 minutes',
        description:
          'Students take eight analytical sentences and insert a relevant relative clause to add detail about either the author or the text. Focus on comma placement with non-restrictive relative clauses. Teacher corrects punctuation in real time.',
        resources: [
          'Analytical sentence set',
          'Relative clause punctuation rule card',
        ],
      },
      {
        title: 'Passive Voice for Analytical Focus',
        duration: '10 minutes',
        description:
          "Show how passive voice shifts analytical focus: 'Dickens presents Scrooge as ...' versus 'Scrooge is presented by Dickens as ...'. Discuss when each is more effective. Students rewrite three analytical sentences each way and choose which they prefer, justifying their choice.",
        resources: [
          'Active/passive comparison card',
          'Analytical sentence rewrite strip',
        ],
      },
      {
        title: 'Structural Upgrade Essay Opening',
        duration: '15 minutes',
        description:
          "Students write an essay opening (five to six sentences) using all three structures: one fronted adverbial, one sentence with an embedded relative clause, and one deliberate passive. They label each and the group discusses whether the opening reads as sophisticated.",
        resources: [
          'Essay question card',
          'Structure label annotation sheet',
        ],
      },
    ],
    successIndicators: [
      'Essay opening contains all three target structures correctly punctuated.',
      'Student can explain why they chose each structure at a specific point.',
      'No consecutive sentences share the same structure.',
    ],
    followUp:
      'Require students to complete a "sentence variety audit" on their next two essays: they mark the opening structure of every sentence (simple, compound, complex, fronted, passive, relative) and present the pattern as a checklist.',
  },

  {
    id: 'int-y9-05',
    title: 'Precise Quotation Embedding with Technique Naming',
    targetSkill: 'Technique identification and embedded quotation',
    skillCode: 'W-QUOT',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students embed quotations fluently but either fail to name the literary technique used or name it incorrectly, weakening the analytical depth of their writing.',
    objectives: [
      'Correctly identify at least eight literary and language techniques in an extract.',
      'Name the technique and embed the quotation in the same sentence.',
      'Explain the effect of the technique (not just its presence) in the following sentence.',
    ],
    activities: [
      {
        title: 'Technique Identification Warm-Up',
        duration: '10 minutes',
        description:
          'Rapid identification round: teacher projects 10 quotations one at a time. Students write the technique on their mini-whiteboard and hold it up. Common errors are addressed immediately. Techniques include: sibilance, semantic field, pathetic fallacy, oxymoron, anaphora, bathos, juxtaposition, personification.',
        resources: [
          'Technique quotation slides or cards',
          'Mini-whiteboards',
          'Technique reference glossary',
        ],
      },
      {
        title: 'Name and Embed Drills',
        duration: '15 minutes',
        description:
          "Students receive six quotations each using a different technique. For each, they write one sentence in the format: 'The writer uses [technique], describing X as [embedded quotation], to ...'. Teacher checks that the technique name is accurate before the student continues.",
        resources: [
          'Quotation and technique drill sheet',
          'Sentence frame card',
        ],
      },
      {
        title: 'Effect vs. Presence Comparison',
        duration: '10 minutes',
        description:
          "Display two analytical sentences side by side: one that names the technique and quotes (presence), one that names, quotes, and explains the effect (effect). Students add an effect sentence to three of their drill sentences from the previous activity.",
        resources: [
          'Presence vs. effect comparison sheet',
        ],
      },
      {
        title: 'Technique-Rich Paragraph',
        duration: '15 minutes',
        description:
          'Students write a full analytical paragraph on a chosen extract identifying two techniques, embedding both, naming both correctly, and explaining the effect of each. Peer mark: partner ticks each element on a checklist.',
        resources: [
          'Extract card',
          'Technique-naming paragraph checklist',
        ],
      },
    ],
    successIndicators: [
      'Student correctly names eight of ten techniques in the warm-up round.',
      'Both techniques in the independent paragraph are correctly named and their quotations correctly embedded.',
      'Effect explanation moves beyond "this makes the reader think about ..." to a more specific claim.',
    ],
    followUp:
      'Create a personal technique log: each student records every technique they have successfully used in analytical writing, with an example sentence. They aim to add one new technique per fortnight.',
  },

  {
    id: 'int-y9-06',
    title: 'Writing a Comparative Essay: Sustained Integration',
    targetSkill: 'Sustained comparative essay writing',
    skillCode: 'W-COMP',
    yearGroup: 'Year 9',
    groupSize: 'small-group',
    duration: '50 minutes',
    issue:
      'Students produce comparative introductions and then drift into sequential paragraphs, failing to maintain comparison across a full essay response.',
    objectives: [
      'Plan a comparative essay using a thematic framework rather than text-by-text.',
      'Write integrated comparative paragraphs that treat both texts simultaneously.',
      'Maintain comparison throughout an essay without reverting to sequential structure.',
    ],
    activities: [
      {
        title: 'Thematic vs. Text-by-Text Planning',
        duration: '10 minutes',
        description:
          'Compare two essay plans side by side: one organised by text (paragraphs 1-3 = Text A, paragraphs 4-6 = Text B) and one organised by theme (each paragraph discusses a theme using evidence from both texts). Students identify which leads to genuine comparison and why.',
        resources: [
          'Two essay plan comparison sheet',
          'Highlighters',
        ],
      },
      {
        title: 'Point of Comparison Table',
        duration: '10 minutes',
        description:
          'Students complete a three-column table for two provided extracts: Column 1 = theme/technique focus; Column 2 = evidence from Text A; Column 3 = evidence from Text B. They aim for four rows (four comparative paragraphs). This becomes the essay plan.',
        resources: [
          'Point of comparison table template',
          'Pair of extracts',
        ],
      },
      {
        title: 'First Integrated Paragraph Write',
        duration: '15 minutes',
        description:
          'Students write their first comparative paragraph using their plan. Teacher gives live verbal feedback, checking that both texts appear in the first sentence and that comparison is explicit throughout.',
        resources: [
          'Comparative paragraph sentence frame',
          'Point of comparison table (student-completed)',
        ],
      },
      {
        title: 'Comparison Check Peer Edit',
        duration: '15 minutes',
        description:
          'Students exchange their opening two paragraphs. The reader highlights every reference to Text A in yellow and every reference to Text B in blue. If any yellow or blue highlight appears alone for more than two consecutive sentences, they flag it as sequential drift. Writers revise the flagged sections.',
        resources: [
          'Yellow and blue highlighters',
          'Sequential drift checklist',
        ],
      },
    ],
    successIndicators: [
      'Essay plan uses a thematic rather than text-by-text structure.',
      'Both texts are referenced in the opening sentence of each paragraph.',
      'No sequential drift of more than two consecutive sentences in the independent write.',
    ],
    followUp:
      'For all comparative tasks, require submission of the point of comparison table before writing begins. Grade the plan separately and refuse to mark an essay that has no submitted plan.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMMON MISCONCEPTIONS  (20 total)
// ─────────────────────────────────────────────────────────────────────────────

export const commonMisconceptions: CommonMisconception[] = [

  // ── READING ───────────────────────────────────────────────────────────────

  {
    id: 'mc-r-01',
    area: 'reading',
    yearGroup: 'Year 7',
    misconception:
      'Retrieval means copying out the longest sentence that seems related to the question.',
    whyItHappens:
      'Students have been taught that evidence must come from the text, but have not been taught to select within the text, so they default to large chunks.',
    howToAddress:
      'Explicitly teach that the best evidence is usually a single word, phrase, or short clause. Use the "zoom in" technique to practise reducing long quotations to their essential part.',
    teachingActivity:
      'Present five long quotations. Students underline the single most important word in each and explain why that word does the most work.',
    preventionStrategy:
      'In every reading task, impose a five-word maximum on quotations until the habit of selecting precisely is established.',
  },

  {
    id: 'mc-r-02',
    area: 'reading',
    yearGroup: 'Year 7',
    misconception:
      'Inference is guessing or making things up about the text.',
    whyItHappens:
      "Students conflate 'reading between the lines' with unsupported speculation because they have not been shown how to anchor inference to textual evidence.",
    howToAddress:
      "Make the anchor explicit: every inference must be followed by 'because the text says ...' This shows students that inference is reasoned, not invented.",
    teachingActivity:
      "Provide five statements: three are genuine inferences with textual support and two are unsupported guesses. Students identify which are inferences and which are guesses, then explain their reasoning.",
    preventionStrategy:
      "Display and enforce the sentence structure: '[Inference] because the writer says [quotation], which suggests [reasoning].' Decline to accept any inference response that lacks the 'because' clause.",
  },

  {
    id: 'mc-r-03',
    area: 'reading',
    yearGroup: 'Year 8',
    misconception:
      'Summarising a text is the same as analysing it.',
    whyItHappens:
      'Students focus on what happens because it feels safe and complete, whereas analysis requires moving beyond events to examine how and why the writer has constructed meaning.',
    howToAddress:
      "Introduce the question 'so what?' after every summary statement. Model turning a summary sentence into an analysis sentence by asking what the writer achieves through that moment.",
    teachingActivity:
      "Give students a paragraph-long summary of a text. They must convert each sentence from 'what happens' to 'what the writer does and why', using the phrase 'The writer shows / reveals / suggests ...'",
    preventionStrategy:
      'Ban the phrase "this part shows that" as a standalone response. Insist on a follow-up "and this is significant because ..." clause in all reading responses.',
  },

  {
    id: 'mc-r-04',
    area: 'reading',
    yearGroup: 'Year 8',
    misconception:
      'If a character does something bad, the writer must think that action is bad too.',
    whyItHappens:
      "Students collapse the distinction between character and author, assuming the text's moral frame always aligns with simple judgements about character behaviour.",
    howToAddress:
      'Introduce the author-narrator-character distinction explicitly. Discuss how a writer might present a flawed or villainous character sympathetically to challenge the reader.',
    teachingActivity:
      "Read a passage from a morally complex character's perspective. Students write two short responses: one from the perspective of the character's own values and one that considers the author's purpose in showing us those values.",
    preventionStrategy:
      "In every analytical task, require one sentence beginning 'The writer presents this to ...' to keep the distinction between character and author visible.",
  },

  {
    id: 'mc-r-05',
    area: 'reading',
    yearGroup: 'Year 9',
    misconception:
      'Theme is the same as topic. The theme of a book about war is "war".',
    whyItHappens:
      'Students have not been taught that a theme is a statement or argument about a topic, not the topic itself.',
    howToAddress:
      'Define theme as a proposition, not a noun. Model the difference: topic = war; theme = "war destroys innocence" or "war reveals the worst and best in people". Practise converting topic nouns into thematic statements.',
    teachingActivity:
      'Give students ten topic nouns (power, love, identity, loss, ambition). In pairs they generate two different thematic statements for each noun, then compare with another pair.',
    preventionStrategy:
      'Require all essay introductions to state a theme as a full sentence, not a noun. Mark introductions that use only a topic noun as incomplete.',
  },

  {
    id: 'mc-r-06',
    area: 'reading',
    yearGroup: 'Year 9',
    misconception:
      'A text written in first person is autobiographical and the narrator is always the author.',
    whyItHappens:
      'Students have limited experience with unreliable narrators and have absorbed a simplified notion that first-person narrative equals personal experience.',
    howToAddress:
      'Introduce the concept of the constructed narrator. Contrast fiction written in first person with actual autobiography. Discuss what a writer gains from an unreliable or limited narrator.',
    teachingActivity:
      "Read a first-person extract where the narrator is clearly unreliable (contradicts themselves, misjudges others). Students write two lists: 'what the narrator claims' and 'what the reader can infer is actually true'.",
    preventionStrategy:
      "Require the phrase 'the narrator' rather than 'the author' in all analyses of first-person fiction, and correct any essay that conflates the two.",
  },

  // ── WRITING ───────────────────────────────────────────────────────────────

  {
    id: 'mc-w-01',
    area: 'writing',
    yearGroup: 'Year 7',
    misconception:
      'Longer sentences are always better because they show more effort.',
    whyItHappens:
      "Students have been praised for 'using lots of detail' and have internalised the idea that quantity of words equates to quality of writing.",
    howToAddress:
      'Teach sentence length as a deliberate choice, not a measure of effort. Show how a one-word or three-word sentence at a key moment creates more impact than a sprawling complex sentence.',
    teachingActivity:
      "Students take a paragraph of uniformly long sentences and insert one short (three-to-five word) sentence at the moment of highest tension. Read aloud before and after to hear the difference.",
    preventionStrategy:
      'Ban the phrase "write in detail" from teacher feedback. Replace it with "choose your sentence length to match the effect you want here".',
  },

  {
    id: 'mc-w-02',
    area: 'writing',
    yearGroup: 'Year 7',
    misconception:
      'Using a lot of adjectives and adverbs makes writing descriptive and interesting.',
    whyItHappens:
      "Early writing lessons emphasise 'adding detail' through modifiers, which students apply indiscriminately without considering the precision or necessity of each word.",
    howToAddress:
      "Introduce the concept of the 'dead adjective': generic words (nice, big, interesting) that add no specific meaning. Teach precise noun and verb choice as more powerful than adjective stacking.",
    teachingActivity:
      "Give students a paragraph stuffed with generic adjectives. They must remove every adjective and replace it with either a more precise noun or a more precise verb. Compare before and after.",
    preventionStrategy:
      'Require students to justify every adjective they use by asking: "Does this word add a specific image or feeling that the noun alone cannot convey?"',
  },

  {
    id: 'mc-w-03',
    area: 'writing',
    yearGroup: 'Year 8',
    misconception:
      'An introduction should explain what you are going to say in the essay.',
    whyItHappens:
      'Students confuse essay introductions with instructions or plans, having been shown structures that list points without making a substantive claim.',
    howToAddress:
      'Teach that an analytical introduction should make an argument, not list topics. Model a strong thesis-led introduction and contrast it with a "signposting" introduction.',
    teachingActivity:
      'Show students two introductions to the same essay question: one that lists three points and one that makes a single, complex claim. Students identify which is more analytical and write one introductory sentence that makes an argument rather than a list.',
    preventionStrategy:
      'Return any introduction that contains the phrase "In this essay I will discuss ..." with the instruction to replace it with a claim that directly answers the question.',
  },

  {
    id: 'mc-w-04',
    area: 'writing',
    yearGroup: 'Year 8',
    misconception:
      'Formal writing means writing without any personality or voice.',
    whyItHappens:
      'Students have been told to avoid slang and colloquialisms, which they have over-applied to mean "say nothing interesting or distinctive".',
    howToAddress:
      'Distinguish between register (formal/informal) and voice (distinctive perspective and word choices). Show that formal writing can still be assertive, precise, and individual.',
    teachingActivity:
      "Read two formal analytical paragraphs: one bland and formulaic, one that is formal but has a clear voice. Students highlight moments in the second where the writer's perspective is evident without being informal.",
    preventionStrategy:
      'Give explicit credit in marking for precise word choices and clear analytical stance, not only for grammatical accuracy.',
  },

  {
    id: 'mc-w-05',
    area: 'writing',
    yearGroup: 'Year 9',
    misconception:
      'Conclusion means summarising every point you have already made.',
    whyItHappens:
      'Students have been taught to "remind the reader of your points" at the end, which they interpret as repetition rather than synthesis.',
    howToAddress:
      'Teach that a conclusion should synthesise (draw points together into a broader insight) rather than summarise (repeat them). Model a conclusion that makes a new, overarching claim based on the argument developed in the essay.',
    teachingActivity:
      "Give students the body paragraphs of an essay (no introduction or conclusion). They write a conclusion that does not repeat any point already made but draws a broader conclusion from all of them together.",
    preventionStrategy:
      'Mark any conclusion that contains the phrase "In conclusion, I have shown that ..." as requiring revision, and provide a model of a synthesising conclusion instead.',
  },

  {
    id: 'mc-w-06',
    area: 'writing',
    yearGroup: 'Year 9',
    misconception:
      'Comparative writing means using "similarly" and "however" between paragraphs.',
    whyItHappens:
      "Students have been taught comparative connectives as a feature list and apply them mechanically as transitions without genuinely integrating the comparison.",
    howToAddress:
      'Teach that comparison happens within sentences, not just between paragraphs. Model writing one sentence that discusses both texts simultaneously rather than sequentially.',
    teachingActivity:
      "Students take six 'sequential' analytical sentences (one text per sentence) and rewrite them as three 'integrated' sentences, each mentioning both texts in the same sentence.",
    preventionStrategy:
      "Refuse to accept any comparative paragraph where the first sentence mentions only one text. Insist that both texts appear before the end of the first sentence.",
  },

  // ── GRAMMAR ───────────────────────────────────────────────────────────────

  {
    id: 'mc-g-01',
    area: 'grammar',
    yearGroup: 'Year 7',
    misconception:
      "Apostrophes are needed whenever a word ends in 's'.",
    whyItHappens:
      "Students apply a half-remembered rule that 's' and apostrophe are connected, without distinguishing between plurals, possessives, and contractions.",
    howToAddress:
      "Teach the two (and only two) uses of the apostrophe: possession and contraction. Then explicitly teach that plurals never take an apostrophe, regardless of the letter they end with.",
    teachingActivity:
      "Show students 20 words ending in 's'. For each, students write a sentence using the word correctly: as a plural (no apostrophe), as a possessive (apostrophe), or as a contraction (apostrophe). Discuss why each category follows different rules.",
    preventionStrategy:
      "Display a classroom rule: 'When you write an s, ask: plural? possession? contraction? Only the last two need an apostrophe.'",
  },

  {
    id: 'mc-g-02',
    area: 'grammar',
    yearGroup: 'Year 7',
    misconception:
      'A sentence is any group of words that sounds finished.',
    whyItHappens:
      "Students use auditory judgement rather than grammatical knowledge to identify sentences, which breaks down when reading aloud with expression covers over grammatical incompleteness.",
    howToAddress:
      "Teach the two-element test: a sentence needs a subject and a main verb. Students apply the test to borderline cases to check whether both elements are present.",
    teachingActivity:
      "Give students 12 examples: some complete sentences, some fragments (missing subject), some fragments (missing verb). Students apply the two-element test to each and correct the fragments.",
    preventionStrategy:
      'Build the two-element test into the proofreading checklist for all writing: students underline the subject and circle the main verb in every sentence before submitting.',
  },

  {
    id: 'mc-g-03',
    area: 'grammar',
    yearGroup: 'Year 8',
    misconception:
      'A comma splice is acceptable because it represents a pause in speech.',
    whyItHappens:
      "Students have been told to 'write as you speak' and have transferred spoken pause patterns into written punctuation without understanding the grammatical rule.",
    howToAddress:
      "Explain that a comma cannot join two independent clauses: show the three correct alternatives (full stop, semicolon, coordinating conjunction). Emphasise that 'as you speak' applies to word choice and rhythm, not punctuation.",
    teachingActivity:
      'Give students a paragraph with eight comma splices. For each, they choose one of the three correction methods and apply it. Compare choices: same meaning, different effect?',
    preventionStrategy:
      "Build 'comma splice check' as a named step in the proofreading routine: read each sentence on either side of a comma. If both could be standalone sentences, a comma alone is insufficient.",
  },

  {
    id: 'mc-g-04',
    area: 'grammar',
    yearGroup: 'Year 8',
    misconception:
      'A semicolon is a stronger comma used wherever you need a big pause.',
    whyItHappens:
      "Students have been introduced to the semicolon as 'a stronger pause' without being taught the specific grammatical rule (joining two independent clauses that are closely related in meaning).",
    howToAddress:
      'Teach the independent clause test: both parts on either side of a semicolon must be able to stand alone as sentences. If one cannot, a semicolon is incorrect.',
    teachingActivity:
      "Students write five pairs of related sentences. They join each pair with a semicolon and apply the test: can both halves stand alone? If yes, the semicolon is valid. They correct any invalid uses.",
    preventionStrategy:
      "Do not introduce the semicolon as 'a stronger comma'. Introduce it as a connector for two complete, related thoughts from the start.",
  },

  {
    id: 'mc-g-05',
    area: 'grammar',
    yearGroup: 'Year 9',
    misconception:
      'The passive voice is always wrong or weaker than the active voice.',
    whyItHappens:
      "Students have been told to 'avoid the passive' in English lessons (usually referring to weak, evasive writing) and have applied this as an absolute rule.",
    howToAddress:
      'Teach that the passive is a deliberate grammatical choice that shifts focus. In analytical writing, "Scrooge is presented by Dickens as ..." legitimately foregrounds Scrooge. In creative writing, the passive can create distance or mystery.',
    teachingActivity:
      "Students rewrite six analytical sentences from active to passive and six from passive to active. For each pair, they write one sentence explaining which version is more appropriate and why.",
    preventionStrategy:
      "Replace the rule 'avoid the passive' with 'use the passive deliberately'. Teach students to ask: do I want to foreground the actor or the receiver of the action?",
  },

  {
    id: 'mc-g-06',
    area: 'grammar',
    yearGroup: 'Year 9',
    misconception:
      'You should never start a sentence with "And" or "But".',
    whyItHappens:
      "This is an over-correction taught in primary school to prevent students from writing lists of clauses joined with 'and'. Students carry it into secondary without understanding its origin.",
    howToAddress:
      'Explain the historical and pedagogical origin of the rule. Show examples from published literature where sentences begin with coordinating conjunctions for emphasis or rhythm. Teach that the real issue is overuse, not the construction itself.',
    teachingActivity:
      'Students find three examples in published fiction or non-fiction where a sentence begins with "And" or "But". They write a sentence explaining the effect in each case.',
    preventionStrategy:
      "Replace the prohibition with a guideline: 'Use a sentence-opening coordinating conjunction as a deliberate choice for emphasis, not as a default connector. Use it no more than once per page.'",
  },

  // ── LITERARY ANALYSIS ─────────────────────────────────────────────────────

  {
    id: 'mc-la-01',
    area: 'literary-analysis',
    yearGroup: 'Year 7',
    misconception:
      'Identifying a technique (e.g., metaphor) is the same as analysing it.',
    whyItHappens:
      'Students have been rewarded for spotting and naming techniques and have not been required to move beyond identification to explanation of effect.',
    howToAddress:
      "Introduce the 'so what?' challenge: every technique identification must be followed by an explanation of the effect on the reader and how that effect serves the writer's purpose.",
    teachingActivity:
      "Give students ten single-sentence analyses that stop after naming the technique (e.g., 'This is a metaphor.'). Students extend each with a 'so what?' sentence that explains the effect.",
    preventionStrategy:
      "Never award full marks for technique identification alone. State explicitly in success criteria: 'You must explain the effect of the technique, not only name it.'",
  },

  {
    id: 'mc-la-02',
    area: 'literary-analysis',
    yearGroup: 'Year 8',
    misconception:
      'Pathetic fallacy just means using the weather to describe emotions.',
    whyItHappens:
      'Students have been given a simplified definition that reduces pathetic fallacy to weather, missing the broader principle of attributing human feelings to the non-human environment.',
    howToAddress:
      "Redefine pathetic fallacy as the attribution of human emotional states to any aspect of the non-human environment. Give examples beyond weather: a 'cruel sea', 'indifferent stars', 'brooding hills'.",
    teachingActivity:
      "Students write three examples of pathetic fallacy that do not involve weather. They then write three analytical sentences using these examples, naming pathetic fallacy and explaining its effect on the reader's perception of character or theme.",
    preventionStrategy:
      "In the glossary of techniques given to students, define pathetic fallacy broadly and give at least two non-weather examples alongside the classic weather example.",
  },

  {
    id: 'mc-la-03',
    area: 'literary-analysis',
    yearGroup: 'Year 8',
    misconception:
      'Repetition is always used for emphasis.',
    whyItHappens:
      'Students have been taught one use of repetition (emphasis) and apply it to every instance, missing the range of effects repetition can achieve.',
    howToAddress:
      'Present at least four effects of repetition: emphasis, rhythm, obsession or fixation (in characterisation), cyclical structure (in plot or theme). Show one example of each.',
    teachingActivity:
      'Provide four extracts each using repetition for a different effect. Students match each extract to an effect category and write one analytical sentence per extract explaining the specific effect in context.',
    preventionStrategy:
      "Ban the phrase 'for emphasis' as a standalone effect explanation. Require students to specify what is being emphasised and why that is significant to character, theme, or tone.",
  },

  {
    id: 'mc-la-04',
    area: 'literary-analysis',
    yearGroup: 'Year 9',
    misconception:
      'Context means writing about when the author was born and what their life was like.',
    whyItHappens:
      'Students have been told to include context and have interpreted this as biographical or chronological background rather than as relevant influence on meaning.',
    howToAddress:
      'Define relevant context as any historical, social, cultural, or biographical factor that directly influences how a specific moment in the text should be read. Context must be linked to a specific quotation or claim.',
    teachingActivity:
      "Students receive a list of five contextual facts about a text. For each fact, they must write a sentence in the format: '[Contextual fact], which helps the reader understand [quotation/moment] because ...'. They reject any contextual fact they cannot connect to a specific textual moment.",
    preventionStrategy:
      "Refuse to award marks for context that is not connected to a specific textual moment. In all essay briefs, include: 'Context must be linked to your quotation or claim, not written as a separate biographical paragraph.'",
  },
];

// =============================================================================
// INTERVENTION STRATEGIES
// =============================================================================

export interface InterventionStrategy {
  id: string;
  title: string;
  targetGroup: 'below-expected' | 'sen' | 'eal' | 'gifted-talented' | 'all';
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9' | 'All KS3';
  skillArea: 'reading' | 'writing' | 'speaking' | 'grammar' | 'vocabulary';
  description: string;
  triggers: string[];
  strategies: string[];
  resources: string[];
  successIndicators: string[];
  reviewPeriod: string;
}

export const ks3InterventionStrategies: InterventionStrategy[] = [

  // ── READING INTERVENTIONS ─────────────────────────────────────────────────

  {
    id: 'is-read-01',
    title: 'Close Reading for Comprehension',
    targetGroup: 'below-expected',
    yearGroup: 'All KS3',
    skillArea: 'reading',
    description:
      'Structured support for students who struggle to retrieve basic information and construct literal meaning from texts, often re-reading without understanding.',
    triggers: [
      'Cannot answer basic retrieval questions without re-reading multiple times.',
      'Confuses characters, events, or settings within a short extract.',
      'Writes responses that contradict or ignore the text.',
      'Scores below 60% on comprehension checks consistently.',
    ],
    strategies: [
      'Use the "chunk and check" method: read one paragraph aloud together, then pause for a two-sentence summary before moving on.',
      'Provide a graphic organiser (who, what, where, when, why) for each extract to anchor literal understanding before inference work.',
      'Model think-alouds that verbalise the process of constructing meaning from individual sentences.',
      'Pair strong readers with weaker readers for echo reading, where both read aloud in unison to build fluency and confidence.',
      'Use colour-coded annotation: one colour for facts stated directly, another for things students need to work out.',
    ],
    resources: [
      'Chunk-and-check reading mats (laminated)',
      'Graphic organiser: who/what/where/when/why',
      'Paired reading seating plan',
      'Short-extract comprehension quizzes (10 questions)',
    ],
    successIndicators: [
      'Correctly answers at least 4 out of 5 retrieval questions on an unseen extract.',
      'Can identify the main idea of a paragraph without teacher prompting.',
      'Written responses remain consistently text-based with no invented detail.',
      'Demonstrates increased reading fluency during whole-class reading.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-read-02',
    title: 'Building Inference Skills',
    targetGroup: 'below-expected',
    yearGroup: 'All KS3',
    skillArea: 'reading',
    description:
      'Targeted support for students who can retrieve surface information but cannot read between the lines, missing implied meaning, tone, and authorial intent.',
    triggers: [
      'Retrieval strong but inference questions consistently answered poorly.',
      'Explains quotations by repeating the words rather than interpreting them.',
      'Cannot identify tone, mood, or implied character feelings.',
      'Loses marks on analysis tasks for stating facts rather than exploring meaning.',
    ],
    strategies: [
      'Introduce the "iceberg model": what is visible on the surface vs. what lies beneath; students annotate the unseen implications of each quotation.',
      'Use "inference stems" to scaffold responses: "This suggests...", "The reader might infer...", "The writer implies...".',
      'Present deliberately ambiguous images and practise making inferences from visual clues before transferring the skill to text.',
      'Play "what do they really mean?" with scripted dialogues where characters say one thing but imply another.',
      'Use the "so what?" protocol after every quotation -- students must push beyond description to explanation of effect.',
    ],
    resources: [
      'Iceberg diagram template',
      'Inference sentence-starter strips',
      'Ambiguous image stimulus cards',
      'Scripted subtext dialogues (short drama scripts)',
    ],
    successIndicators: [
      'Moves beyond surface retrieval to offer at least one inference per quotation in written work.',
      'Correctly identifies implied tone or mood in an unseen extract.',
      'Uses inference language independently in written and spoken responses.',
      'Scores improve on inference-specific comprehension questions by at least one mark band.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-read-03',
    title: 'Reluctant Reader Engagement',
    targetGroup: 'below-expected',
    yearGroup: 'Year 7',
    skillArea: 'reading',
    description:
      'Strategies to re-engage students who actively avoid reading, have low stamina for sustained reading, or express negative attitudes towards books and texts.',
    triggers: [
      'Refuses to read aloud or read independently.',
      'Does not complete reading homework or reading journal entries.',
      'Expresses belief that reading is boring or not relevant to them.',
      'Reading age significantly below chronological age on standardised assessment.',
    ],
    strategies: [
      'Offer genuine choice: provide a curated book box with a range of genres, lengths, and topics so students select their own independent reading text.',
      'Begin each lesson with 5-minute DEAR time (Drop Everything And Read) with the teacher visibly reading too.',
      'Use high-interest, low-reading-age texts (graphic novels, short stories, narrative non-fiction) to build stamina without shame.',
      'Introduce a reading passport or log where students track books read and earn stamps or stickers for milestones.',
      'Connect texts to student interests during book talks: match reluctant readers with a title based on a brief interest survey.',
    ],
    resources: [
      'Classroom book box (30+ titles, varied genre and level)',
      'Reading passport booklet',
      'Student interest survey (one-page questionnaire)',
      'DEAR time timer (visible to class)',
    ],
    successIndicators: [
      'Student selects and reads an independent reading text without prompting.',
      'Reading stamina increases to 10 minutes of uninterrupted reading within the review period.',
      'Student can name and briefly describe a book they have read independently.',
      'Reading journal contains at least two completed entries per fortnight.',
    ],
    reviewPeriod: 'Half term',
  },

  // ── WRITING INTERVENTIONS ─────────────────────────────────────────────────

  {
    id: 'is-write-01',
    title: 'Structuring Extended Writing',
    targetGroup: 'below-expected',
    yearGroup: 'All KS3',
    skillArea: 'writing',
    description:
      'Support for students who produce writing that lacks clear organisation, jumps between ideas, or fails to sustain a line of argument across multiple paragraphs.',
    triggers: [
      'Written work lacks paragraphs or uses them inconsistently.',
      'Ideas appear in random order with no sense of planning or progression.',
      'Conclusions repeat the introduction word-for-word or are absent.',
      'Writing loses focus mid-response and drifts away from the task.',
    ],
    strategies: [
      'Teach a clear essay skeleton (introduction, three developed points, conclusion) using a visual template before every extended writing task.',
      'Require students to submit a bullet-point plan approved by the teacher before writing begins.',
      'Use "paragraph sequencing" tasks: give students pre-written paragraphs on cards and ask them to arrange them into the most logical order.',
      'Introduce discourse markers explicitly (firstly, furthermore, in contrast, consequently) with a classroom display and a bookmark reference card.',
      'Practise the TEEL paragraph structure (Topic, Evidence, Explanation, Link) with a colour-coded writing frame until it becomes automatic.',
    ],
    resources: [
      'Essay skeleton planning template',
      'TEEL paragraph writing frame (colour-coded)',
      'Discourse marker reference bookmark',
      'Paragraph sequencing card sort sets',
    ],
    successIndicators: [
      'All extended writing attempts contain clearly demarcated paragraphs.',
      'Planning document submitted before each extended task, showing logical sequencing of ideas.',
      'Uses at least three different discourse markers per piece of extended writing.',
      'A reader can follow the line of argument without difficulty.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-write-02',
    title: 'Vocabulary Elevation in Writing',
    targetGroup: 'below-expected',
    yearGroup: 'All KS3',
    skillArea: 'writing',
    description:
      'Targeted intervention for students whose written vocabulary is limited to everyday spoken language, preventing them from achieving higher mark bands.',
    triggers: [
      'Written work repeatedly uses the same simple words (nice, said, good, bad, went).',
      'Cannot generate synonyms or alternatives when prompted.',
      'Teacher feedback consistently mentions "limited vocabulary range".',
      'Reluctant to attempt ambitious or unfamiliar words.',
    ],
    strategies: [
      'Introduce a personal "word bank" notebook where students collect and define ambitious vocabulary encountered in reading and lessons.',
      'Play "word swap" revision: students highlight every basic verb or adjective in a draft and must replace at least half with a more precise alternative.',
      'Use the "Goldilocks vocabulary" framework: too simple, too obscure, just right -- students judge word choices against this scale.',
      'Display a "vocabulary of the week" with five ambitious words, example sentences, and student-generated sentences on the classroom wall.',
      'Set weekly vocabulary quizzes that revisit words from the current unit, requiring students to use each word correctly in a sentence.',
    ],
    resources: [
      'Personal word bank notebooks',
      'Goldilocks vocabulary sorting cards',
      'Weekly vocabulary display (A3 poster)',
      'Unit vocabulary list with definitions and examples',
    ],
    successIndicators: [
      'Word bank notebook contains at least 20 entries by the end of the review period.',
      'Written work uses at least three vocabulary choices that go beyond everyday spoken language per paragraph.',
      'Student can provide a synonym for common basic words without a thesaurus.',
      'Feedback from teacher notes an improvement in vocabulary range.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-write-03',
    title: 'Analysis Paragraph Coaching (PEE/TEEL)',
    targetGroup: 'below-expected',
    yearGroup: 'Year 8',
    skillArea: 'writing',
    description:
      'Intensive support for students who can identify quotations but cannot construct a developed analytical paragraph that explains effect and explores language choices.',
    triggers: [
      'Analytical paragraphs consist of a point followed by a quotation with no explanation.',
      'Explanations describe what happens rather than how the writer creates effect.',
      'No reference to language, structure, or technique in analysis.',
      'Teacher feedback repeatedly notes "quote, no explanation" or "narrative retelling".',
    ],
    strategies: [
      'Use the "because/this shows/the effect is" sentence chain to force students to push explanation beyond description.',
      'Provide a "detective" model: students act as literary detectives who must find evidence (quotation), investigate it (language analysis), and reach a verdict (effect on reader).',
      'Give students model paragraphs graded at different levels; they annotate them for what is missing and then rank them.',
      'Use "explode the quotation" activities where students annotate every word in a short quotation for possible meaning and connotation.',
      'Peer-mark using a focused single-criterion mark scheme: has the student explained how the writer creates effect? Yes/no, with written justification.',
    ],
    resources: [
      'Because/this shows/effect sentence stems strip',
      'Literary detective paragraph template',
      'Graded model paragraph set (four levels)',
      '"Explode the quotation" annotation sheets',
    ],
    successIndicators: [
      'Every analytical paragraph contains a point, embedded quotation, and at least two sentences of explanation.',
      'Explanations reference at least one specific language choice or technique.',
      'Student can self-assess whether their paragraph explains effect or merely describes events.',
      'Mark for analysis section improves by at least one band on the next assessed piece.',
    ],
    reviewPeriod: '4 weeks',
  },

  // ── GRAMMAR INTERVENTIONS ─────────────────────────────────────────────────

  {
    id: 'is-gram-01',
    title: 'Full Stop and Capital Letter Consolidation',
    targetGroup: 'sen',
    yearGroup: 'Year 7',
    skillArea: 'grammar',
    description:
      'Targeted support for students who persistently omit full stops and capital letters, producing run-on sentences or unpunctuated prose despite repeated teacher instruction.',
    triggers: [
      'Every piece of written work contains more than three missing full stops or capital letters.',
      'Student cannot explain the rule for full stop placement when asked.',
      'Errors persist after whole-class teaching and individual feedback.',
      'SEND review or literacy assessment flags sentence demarcation as a priority.',
    ],
    strategies: [
      'Use colour-coded editing: after drafting, student highlights every sentence in a different colour to make boundaries visible before checking punctuation.',
      'Teach the "breath test": read aloud and pause where breath is needed -- if there is no full stop, add one.',
      'Provide a personal checklist card that students attach to their planner: "1. Did I start with a capital? 2. Did I end with a full stop?"',
      'Use sentence-sorting tasks where students must add punctuation to a passage that has been deliberately stripped of all full stops and capitals.',
      'Apply the "proofreading partner" routine: before handing in any work, a designated partner checks only for sentence demarcation.',
    ],
    resources: [
      'Personal punctuation checklist card (laminated)',
      'Unpunctuated passage worksheets (differentiated)',
      'Colour-coded editing highlighters',
      'Proofreading partner prompt cards',
    ],
    successIndicators: [
      'Fewer than two sentence demarcation errors per page of independent writing.',
      'Student can correctly punctuate a given passage when editing independently.',
      'Uses checklist card proactively before submitting work.',
      'Maintains improvement across two consecutive assessed pieces.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-gram-02',
    title: 'Sentence Construction and Variety',
    targetGroup: 'below-expected',
    yearGroup: 'Year 8',
    skillArea: 'grammar',
    description:
      'Support for students whose writing relies almost exclusively on simple sentences, limiting their ability to convey complex ideas or achieve higher marks for sentence structure.',
    triggers: [
      'Written work contains fewer than one compound or complex sentence per paragraph.',
      'Cannot explain the difference between a simple, compound, and complex sentence.',
      'Feedback consistently notes "simple/repetitive sentence structures".',
      'All sentences follow the same subject-verb-object pattern with no variation.',
    ],
    strategies: [
      'Teach the three sentence types explicitly using colour: simple (red), compound (blue), complex (green) -- students colour-code their own writing to spot imbalance.',
      'Use "sentence surgery" tasks: give students a paragraph of only simple sentences and ask them to combine pairs using conjunctions or subordinating clauses.',
      'Introduce fronted adverbials as a single, teachable skill and practise them in isolation before embedding in writing.',
      'Provide a sentence type menu displayed in the classroom and on a desk card so students can select deliberately from a range.',
      'Model how varying sentence length creates rhythm and emphasis using examples from published fiction studied in class.',
    ],
    resources: [
      'Sentence type colour-coding guide (desk card)',
      'Sentence surgery worksheet sets',
      'Fronted adverbial starter cards (20 examples)',
      'Sentence type menu display (A3)',
    ],
    successIndicators: [
      'Written work contains a mix of simple, compound, and complex sentences in each paragraph.',
      'Student can label sentence types correctly in an annotated draft.',
      'Uses at least two fronted adverbials per piece of extended writing.',
      'Feedback from the next assessed piece notes improved sentence variety.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-gram-03',
    title: 'Comma Use and Clause Separation',
    targetGroup: 'below-expected',
    yearGroup: 'Year 9',
    skillArea: 'grammar',
    description:
      'Focused support for students who use commas inconsistently or incorrectly, frequently creating comma splices or failing to punctuate subordinate clauses.',
    triggers: [
      'Student uses commas in place of full stops (comma splices) regularly.',
      'Cannot punctuate a sentence with a subordinate clause correctly.',
      'Omits the comma after a fronted adverbial despite repeated teaching.',
      'Loses marks on SPAG assessments specifically for comma errors.',
    ],
    strategies: [
      'Teach comma rules one at a time across separate lessons rather than all at once -- begin with commas in lists, then fronted adverbials, then relative clauses.',
      'Use the "comma test": can you replace the comma with a full stop and still have two complete sentences? If yes, it is a comma splice -- fix it.',
      'Provide a comma rules reference card with a worked example for each rule, kept in student planners.',
      'Set editing tasks where students are given a piece of writing with deliberate comma errors to identify and correct.',
      'Use a daily warm-up sentence: write one sentence on the board with a subordinate clause; students punctuate it on mini whiteboards for immediate feedback.',
    ],
    resources: [
      'Comma rules reference card (five rules, laminated)',
      'Comma splice correction worksheet',
      'Mini whiteboards and pens',
      'Daily punctuation warm-up slide bank',
    ],
    successIndicators: [
      'Comma splices no longer appear in independent writing.',
      'Correctly punctuates fronted adverbials and subordinate clauses in a proofreading task.',
      'References the comma rules card independently during drafting.',
      'SPAG score for comma use improves on the next formal assessment.',
    ],
    reviewPeriod: '4 weeks',
  },

  // ── SPEAKING INTERVENTIONS ────────────────────────────────────────────────

  {
    id: 'is-speak-01',
    title: 'Building Confidence to Contribute',
    targetGroup: 'below-expected',
    yearGroup: 'Year 7',
    skillArea: 'speaking',
    description:
      'Strategies to support students who are reluctant to participate in class discussion, rarely volunteer answers, and become visibly anxious when called upon.',
    triggers: [
      'Has not made a single voluntary verbal contribution in the first half term.',
      'Displays avoidance behaviour (looking away, hiding behind a book) when discussion is underway.',
      'Gives one-word answers or shrugs when directly questioned.',
      'SEND or pastoral notes flag anxiety as a barrier to participation.',
    ],
    strategies: [
      'Use "no-hands" cold calling with think-pair-share preparation so students have a rehearsed answer before being called on -- remove the fear of the unknown.',
      'Start with "phone a friend": student nominates a peer to answer on their behalf, reducing immediate pressure while keeping them engaged.',
      'Build a "talk ladder": individual written response, whisper to a partner, share with a table, contribute to class -- students move up the ladder at their own pace.',
      'Offer private verbal check-ins at the start or end of lessons as an alternative to public contribution until confidence grows.',
      'Celebrate any verbal contribution publicly and briefly, regardless of accuracy, to reinforce that attempting is valued.',
    ],
    resources: [
      'Talk ladder visual (A5 card for student desk)',
      'Think-pair-share timing slides',
      'Discussion contribution log (teacher record)',
      'Pastoral communication note template',
    ],
    successIndicators: [
      'Makes at least one voluntary contribution per lesson by the end of the review period.',
      'Can respond to a direct question with a complete sentence rather than a one-word answer.',
      'Uses think-pair-share preparation visibly and then contributes to whole-class discussion.',
      'Self-reports reduced anxiety around speaking in class on an end-of-period check-in.',
    ],
    reviewPeriod: 'Half term',
  },

  {
    id: 'is-speak-02',
    title: 'Formal Presentation Skills',
    targetGroup: 'below-expected',
    yearGroup: 'Year 9',
    skillArea: 'speaking',
    description:
      'Structured support for students who struggle with formal spoken presentations, particularly regarding clarity, pace, eye contact, and audience awareness.',
    triggers: [
      'Reads directly from notes without making eye contact with the audience.',
      'Speaks too fast, too quietly, or with excessive filler words (um, like, yeah).',
      'Cannot maintain focus for longer than 90 seconds without losing their place.',
      'Receives consistently low marks on spoken language assessments.',
    ],
    strategies: [
      'Teach the PECS presentation checklist (Pace, Eye contact, Clarity, Structure) and use it as a self-assessment tool after every practice run.',
      'Practise with a one-minute presentation on a low-stakes personal topic (favourite film, hobby) before moving to academic content.',
      'Use video recording on a tablet so students can watch themselves back and identify specific areas for improvement.',
      'Introduce cue cards limited to five bullet points so students cannot read verbatim -- forces internalisation of content.',
      'Stage presentations in small groups before full-class delivery to reduce anxiety while building performance experience.',
    ],
    resources: [
      'PECS presentation self-assessment checklist',
      'Presentation cue card template (five-bullet format)',
      'Tablet or camera for self-review recordings',
      'Peer feedback presentation proforma',
    ],
    successIndicators: [
      'Maintains eye contact with the audience for at least 60% of the presentation.',
      'Speaks at a pace and volume that allows all audience members to follow without difficulty.',
      'Does not read verbatim from notes in a timed presentation.',
      'Achieves a higher mark band on the next formal spoken language assessment.',
    ],
    reviewPeriod: '4 weeks',
  },

  // ── VOCABULARY INTERVENTIONS ──────────────────────────────────────────────

  {
    id: 'is-vocab-01',
    title: 'Tier 2 Vocabulary Building',
    targetGroup: 'below-expected',
    yearGroup: 'All KS3',
    skillArea: 'vocabulary',
    description:
      'Systematic approach to building academic vocabulary (Tier 2 words) that appear across subjects and are essential for access to examination texts and tasks.',
    triggers: [
      'Student cannot define common academic words such as "analyse", "justify", "contrast", or "evaluate".',
      'Struggles to understand task instructions that use academic language.',
      'Written responses lack the academic register expected at KS3.',
      'Reading comprehension breaks down when academic vocabulary appears in a text.',
    ],
    strategies: [
      'Introduce six Tier 2 words per unit using the Frayer model (definition, characteristics, example, non-example) to build deep understanding rather than surface familiarity.',
      'Use spaced retrieval: words introduced in week 1 are revisited in week 3 and week 6 via quick-fire oral quizzes.',
      'Display a permanent "academic language wall" with key Tier 2 words grouped by function (words that describe, words that evaluate, words that compare).',
      'Ask students to find each target word used in context in a piece of reading during the unit and annotate its meaning in situ.',
      'Set a "word detective" homework where students must spot one Tier 2 word from the current unit in a newspaper, website, or book and bring in the example.',
    ],
    resources: [
      'Frayer model vocabulary template',
      'Academic language wall display (A3 cards)',
      'Unit word list with definitions and examples',
      'Spaced retrieval quiz slide bank',
    ],
    successIndicators: [
      'Can define and use all six unit Tier 2 words accurately in a written task.',
      'Academic register is audible in verbal contributions during discussion.',
      'Performance on vocabulary retrieval quizzes improves across the unit.',
      'Written work includes academic vocabulary that was not present in work before the intervention.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-vocab-02',
    title: 'EAL Vocabulary and Language Access',
    targetGroup: 'eal',
    yearGroup: 'All KS3',
    skillArea: 'vocabulary',
    description:
      'Targeted vocabulary support for EAL students who have conversational English fluency but lack the academic and subject-specific vocabulary needed to access KS3 English tasks.',
    triggers: [
      'Student speaks confidently in English socially but written English lacks academic register.',
      'Struggles with figurative language (metaphor, idiom, symbolism) that does not translate directly.',
      'Misunderstands task instructions or examination questions due to vocabulary gaps.',
      'Progress in English significantly below that in other subjects where language demand is lower.',
    ],
    strategies: [
      'Provide bilingual glossaries for key unit vocabulary, allowing students to anchor new English terms to their home language equivalent.',
      'Pre-teach idioms and figurative expressions before the lesson in which they appear, using visual representations to support meaning.',
      'Use sentence frames that model academic English syntax so students can focus on content rather than constructing novel structures from scratch.',
      'Pair EAL students with a consistent reading partner who can clarify vocabulary in context without breaking the flow of the lesson.',
      'Allow students to draft responses in their home language first, then translate and refine into English, reducing the cognitive load of simultaneous language and content processing.',
    ],
    resources: [
      'Bilingual glossary templates (for teacher to populate)',
      'Visual idiom flashcard sets',
      'Academic sentence frame strips (per task type)',
      'EAL reading partner seating plan',
    ],
    successIndicators: [
      'Student can define target unit vocabulary in both English and home language.',
      'Written work shows increased use of academic register compared to the baseline sample.',
      'Student interprets figurative language correctly in comprehension tasks.',
      'Self-reports greater confidence in understanding teacher explanations and written tasks.',
    ],
    reviewPeriod: 'Half term',
  },

  {
    id: 'is-vocab-03',
    title: 'Subject-Specific Literary Terminology',
    targetGroup: 'below-expected',
    yearGroup: 'Year 7',
    skillArea: 'vocabulary',
    description:
      'Building students\' working knowledge of literary and language terminology so they can identify, name, and use devices in reading and writing tasks.',
    triggers: [
      'Cannot name basic literary devices (simile, metaphor, alliteration) when encountered in a text.',
      'Written analysis describes effects without naming the technique used.',
      'Confuses or conflates similar terms (e.g., simile and metaphor).',
      'Glossary pages in exercise book left blank or incomplete.',
    ],
    strategies: [
      'Create a "literary terms toolkit" foldable booklet that students build incrementally across the year, adding each new term with a definition and personal example.',
      'Use recognition games: "spot the technique" in short text extracts as a lesson starter, using mini whiteboards for immediate whole-class response.',
      'Connect each technique to its effect: students learn the term, the definition, and a stock phrase for what it achieves (e.g., "metaphor: suggests...", "sibilance: creates a hissing sound that...").',
      'Use kinesthetic flashcard revision: students test each other in pairs with terminology cards (term on one side, definition + example on the other).',
      'Set a "technique of the fortnight" focus where one device is deeply explored through multiple texts before moving on.',
    ],
    resources: [
      'Literary terms foldable booklet template',
      'Technique flashcard sets (30 terms)',
      'Mini whiteboards and pens',
      '"Spot the technique" starter slide bank',
    ],
    successIndicators: [
      'Can name and define at least 10 literary devices without reference materials.',
      'Written analysis correctly names the technique used in at least 80% of analytical paragraphs.',
      'Toolkit booklet is complete and used actively during independent tasks.',
      'No longer confuses simile and metaphor in written or spoken responses.',
    ],
    reviewPeriod: '4 weeks',
  },

  // ── SEN-SPECIFIC INTERVENTIONS ────────────────────────────────────────────

  {
    id: 'is-sen-01',
    title: 'Scaffolded Extended Writing for SEN',
    targetGroup: 'sen',
    yearGroup: 'All KS3',
    skillArea: 'writing',
    description:
      'Heavily scaffolded writing support for students with identified SEN (dyslexia, processing difficulties, working memory challenges) to enable participation in extended writing tasks.',
    triggers: [
      'Student has an EHCP or SEN support plan identifying written communication as a priority.',
      'Cannot produce more than two or three sentences independently without shutting down.',
      'Written output significantly below verbal ability -- can discuss but not record ideas.',
      'Previous scaffolds (frames, sentence starters) have not been sufficient for independence.',
    ],
    strategies: [
      'Use a "writing sandwich" structure: oral rehearsal with the teacher first, then dictation into a voice recorder or speech-to-text tool, then editing the transcript into a polished piece.',
      'Provide pre-populated planning frames where key content is already partially recorded and the student adds connecting language and detail.',
      'Break extended tasks into timed micro-steps (e.g., "You have 5 minutes to write just the topic sentence") with a checklist to track progress.',
      'Allow use of assistive technology (speech-to-text software, word prediction) as a standard accommodation, not a last resort.',
      'Reduce writing volume requirements whilst maintaining analytical depth: two fully developed sentences are preferable to a paragraph of confused prose.',
    ],
    resources: [
      'Pre-populated planning frame templates (per task type)',
      'Voice recorder or speech-to-text app access',
      'Micro-step writing checklist',
      'SEN writing accommodation record (for evidence file)',
    ],
    successIndicators: [
      'Student completes all extended writing tasks to the expected length with scaffold support.',
      'Quality of analytical content matches or exceeds verbal ability demonstrated in class discussion.',
      'Student can initiate writing independently using the scaffold without teacher prompting for every step.',
      'Progress against SEN targets reviewed at next SEND review shows measurable improvement in written output.',
    ],
    reviewPeriod: 'Half term',
  },

  // ── GIFTED AND TALENTED INTERVENTIONS ────────────────────────────────────

  {
    id: 'is-gt-01',
    title: 'Extending Analysis Beyond the Expected',
    targetGroup: 'gifted-talented',
    yearGroup: 'Year 9',
    skillArea: 'writing',
    description:
      'Challenge and enrichment for high-attaining students who have mastered the expected analysis paragraph structure and are ready to develop more sophisticated, nuanced, and independent analytical writing.',
    triggers: [
      'Consistently achieves the highest mark band on analytical writing tasks.',
      'Analysis paragraphs are technically correct but formulaic -- all follow the same predictable structure.',
      'Peer discussions reveal insight and sophistication that is not reflected in written work.',
      'Teacher assessment notes that the student "would benefit from greater challenge".',
    ],
    strategies: [
      'Introduce the "alternative reading" challenge: for every interpretation offered, students must construct a credible counter-reading of the same evidence.',
      'Require students to write one paragraph without any structural scaffold, choosing their own form to best convey the complexity of their argument.',
      'Assign independent close reading tasks on unseen and challenging texts (e.g., modernist poetry, political speeches) with minimal teacher pre-teaching.',
      'Facilitate a "critical conversation" where gifted-talented students debate competing interpretations, then write up the argument as a structured critical essay.',
      'Introduce academic critical writing (simplified university-level criticism) as a model and discussion text, exposing students to the conventions of formal literary criticism.',
    ],
    resources: [
      'Alternative reading challenge task cards',
      'Unseen challenging text anthology (teacher-curated)',
      'Simplified critical essays (accessible excerpts)',
      'Critical debate proforma',
    ],
    successIndicators: [
      'Written analysis offers multiple readings of the same evidence without being prompted.',
      'Student chooses analytical structure independently and can justify their choice.',
      'Close reading of an unseen text demonstrates independent critical insight.',
      'Writing goes beyond technical accuracy to demonstrate genuine critical voice.',
    ],
    reviewPeriod: 'Half term',
  },

  // ── ALL-STUDENT / WHOLE-CLASS INTERVENTIONS ───────────────────────────────

  {
    id: 'is-all-01',
    title: 'Pre-Teaching Key Vocabulary',
    targetGroup: 'all',
    yearGroup: 'All KS3',
    skillArea: 'vocabulary',
    description:
      'A whole-class approach to introducing essential vocabulary before a new unit or complex text, ensuring all students -- particularly EAL and below-expected -- can access the content from the outset.',
    triggers: [
      'New unit introduces a text with significant cultural, historical, or linguistic distance from students\' experience.',
      'Class assessment data shows wide variation in vocabulary knowledge at the start of a unit.',
      'Previous unit showed that vocabulary gaps were a primary barrier to comprehension.',
      'EAL or below-expected students struggled to access a previous text due to unfamiliar language.',
    ],
    strategies: [
      'Identify the 10-15 most essential words for the unit before teaching begins and introduce them in the first two lessons through context-rich activities.',
      'Use the "meet the word" routine: say it, spell it, define it, use it in a sentence, find it in the text -- repeated three times across the first week.',
      'Create a visual vocabulary wall that grows across the unit as new words are encountered and added by students.',
      'Send a unit vocabulary list home so families can reinforce words in discussion, with simple definitions and example sentences included.',
      'Revisit pre-taught vocabulary at the start of every lesson with a two-minute retrieval activity (matching, gap-fill, or quick definition) to build retention.',
    ],
    resources: [
      'Unit vocabulary list (teacher-prepared, 10-15 words)',
      'Visual vocabulary wall display materials',
      'Family vocabulary letter template',
      'Retrieval warm-up slide bank (matching, gap-fill, definition)',
    ],
    successIndicators: [
      'All students can define and use the 10 core unit words by the end of week two.',
      'Comprehension task scores at the start of the unit are higher than in the equivalent unit the previous year.',
      'EAL and below-expected students access whole-class texts with fewer vocabulary-related comprehension breakdowns.',
      'Vocabulary wall is actively used by students during independent tasks.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-all-02',
    title: 'Building Writing Confidence Through Low-Stakes Tasks',
    targetGroup: 'all',
    yearGroup: 'Year 7',
    skillArea: 'writing',
    description:
      'A preventative whole-class approach at the start of Year 7 to build positive writing habits and reduce writing anxiety before students encounter assessed extended writing tasks.',
    triggers: [
      'Transition data or primary school reports indicate reluctance or anxiety around writing.',
      'Early Year 7 writing tasks show significant avoidance behaviours across the class.',
      'Students are overly concerned with correctness to the detriment of fluency and volume.',
      'A significant proportion of the class has not experienced extended independent writing regularly at KS2.',
    ],
    strategies: [
      'Begin each week with a five-minute free writing task with no marking criteria: students write continuously without stopping, crossing out, or self-correcting.',
      'Introduce "writing without fear" as an explicit classroom value in the first lesson: the goal is to get ideas down, editing comes later.',
      'Use "show not tell" micro-tasks (one or two sentences only) as a daily warm-up to practise descriptive writing without the pressure of a full piece.',
      'Display anonymised examples of strong writing from within the class to show students what their peers can achieve.',
      'Celebrate writing growth over time using a portfolio of drafts so students can see their own improvement.',
    ],
    resources: [
      'Free writing prompt slide bank (30 prompts)',
      '"Show not tell" micro-task cards',
      'Writing portfolio folders (one per student)',
      'Anonymised writing examples display',
    ],
    successIndicators: [
      'All students write continuously for five minutes without stopping by week four.',
      'Avoidance behaviours (blank pages, pencil-down, frequent requests to stop) significantly reduce.',
      'Students can articulate at least one thing they enjoy or do well in writing.',
      'Portfolio shows measurable growth in writing volume and ambition between the first and last entry.',
    ],
    reviewPeriod: 'Half term',
  },

  {
    id: 'is-all-03',
    title: 'Scaffolding Reading Discussions for All Learners',
    targetGroup: 'all',
    yearGroup: 'Year 8',
    skillArea: 'speaking',
    description:
      'Structured discussion frameworks that enable all students to participate meaningfully in talk about texts, from the most reluctant contributor to the most confident.',
    triggers: [
      'Whole-class discussion is dominated by four or five students while the majority do not contribute.',
      'Discussion lacks depth -- students share opinions without textual evidence.',
      'Below-expected and EAL students are excluded from discussion by pace and vocabulary demands.',
      'Class reads together but there is limited meaningful talk about meaning or language.',
    ],
    strategies: [
      'Use structured academic controversy: half the class argues one interpretation, half argues another, then sides swap -- forces evidence-based talk from every student.',
      'Implement a "discussion token" system where each student begins with three tokens and must spend one for each contribution, preventing dominance and encouraging quieter students.',
      'Provide discussion sentence stems displayed on the board: "I agree with X because...", "The text suggests...", "Building on what Y said...".',
      'Use "text-based questioning" protocols where all questions must be answerable from the text, preventing discussion from drifting into unsupported opinion.',
      'Assign discussion roles (questioner, evidence-finder, challenger, summariser) that rotate so every student practises different types of contribution.',
    ],
    resources: [
      'Discussion sentence stem display (A3 poster)',
      'Discussion token sets (three per student)',
      'Discussion role cards (four roles)',
      'Text-based question prompt cards',
    ],
    successIndicators: [
      'At least 80% of students make a verbal contribution in a structured discussion by the end of the review period.',
      'Contributions reference the text rather than being purely personal opinion.',
      'Below-expected and EAL students participate in discussion using provided sentence stems.',
      'Discussion quality improves as measured by teacher observation notes across three lessons.',
    ],
    reviewPeriod: '4 weeks',
  },

  {
    id: 'is-all-04',
    title: 'Metacognitive Reflection and Self-Assessment',
    targetGroup: 'all',
    yearGroup: 'Year 9',
    skillArea: 'writing',
    description:
      'Building metacognitive awareness so students understand their own learning gaps, set meaningful targets, and take ownership of their progress in English.',
    triggers: [
      'Students cannot articulate what they find difficult in English or why.',
      'Feedback from teachers is not acted upon between assessments.',
      'Class shows little improvement between first and second drafts despite written feedback.',
      'Student targets in exercise books are vague or copied without understanding.',
    ],
    strategies: [
      'After every assessment, require students to complete a "gap analysis" using their mark scheme: they identify exactly which criteria they met and which they missed.',
      'Introduce a "my next step" card that students write at the end of each lesson and then review at the start of the next: one concrete, actionable improvement.',
      'Use "before and after" revision tasks: students improve a specific paragraph using teacher feedback, then write a one-sentence explanation of what they changed and why.',
      'Teach students the language of self-assessment explicitly: "My strength is...", "I need to improve...", "Next time I will..." -- practised orally before being written.',
      'Hold brief (five-minute) individual feedback conferences where students must identify their own biggest improvement before the teacher adds any observations.',
    ],
    resources: [
      'Gap analysis proforma (aligned to mark scheme)',
      '"My next step" card template',
      'Before-and-after revision task sheet',
      'Self-assessment language display (A3)',
    ],
    successIndicators: [
      'Every student can name their strongest and weakest assessment criterion without teacher prompting.',
      'Second drafts show targeted improvement in the area identified in the gap analysis.',
      '"My next step" cards are completed consistently and accurately.',
      'Student self-assessment aligns with teacher assessment in at least 70% of cases.',
    ],
    reviewPeriod: 'Half term',
  },
];
