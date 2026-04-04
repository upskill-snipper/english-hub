export interface FeedbackStrategy {
  id: string;
  title: string;
  type:
    | 'written-feedback'
    | 'verbal-feedback'
    | 'peer-feedback'
    | 'self-assessment'
    | 'whole-class-feedback'
    | 'coded-marking';
  yearGroups: string[];
  timeRequired: string;
  description: string;
  howToImplement: string[];
  benefits: string[];
  limitations: string[];
  template?: string;
}

export interface WholeclassFeedbackSheet {
  id: string;
  title: string;
  yearGroup: string;
  taskType: string;
  sections: {
    sectionTitle: string;
    notes: string;
    examples: string[];
  }[];
  commonStrengths: string[];
  commonAreas: string[];
  teachingPoints: string[];
  nextLessonFocus: string;
}

// ─── Feedback Strategies ───────────────────────────────────────────────────

export const feedbackStrategies: FeedbackStrategy[] = [
  {
    id: 'fs-001',
    title: 'WWW / EBI (What Went Well / Even Better If)',
    type: 'written-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '3-5 minutes per student',
    description:
      'A structured two-part written comment that identifies a specific strength and one targeted improvement. The WWW grounds students in success; the EBI gives a single, actionable next step rather than an overwhelming list of corrections.',
    howToImplement: [
      'Read the whole piece before writing any comment.',
      'Write "WWW:" followed by a specific, evidence-based strength (quote a phrase or technique).',
      'Write "EBI:" followed by one focused improvement target phrased as a conditional or directive.',
      'Keep each comment to two or three sentences maximum.',
      'Build DIRT time into the next lesson so students act on the EBI.',
      'Use a consistent colour (e.g. green pen for WWW, orange for EBI) to help students locate feedback quickly.',
    ],
    benefits: [
      'Quick to write once teachers develop a rhythm.',
      'Positive framing reduces student anxiety about receiving feedback.',
      'Single improvement target is cognitively manageable for students.',
      'Easy for students to identify and respond to in DIRT.',
      'Works across all writing genres and year groups.',
    ],
    limitations: [
      'Can become formulaic if teachers write generic comments ("Good vocabulary").',
      'Does not capture the full range of issues in a weak piece.',
      'Students may fixate only on the WWW and ignore the EBI.',
      'Requires clear DIRT follow-through to have impact.',
    ],
    template:
      'WWW: [Specific strength with textual evidence or named technique]\nEBI: [One focused improvement -- phrased as an actionable next step]',
  },
  {
    id: 'fs-002',
    title: 'Code Marking (Symbol / Abbreviation System)',
    type: 'coded-marking',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '1-2 minutes per student (once codes are established)',
    description:
      'A shared set of agreed codes or symbols written directly onto student work to indicate specific issues or strengths. Students have a reference sheet and use it to decode feedback independently before responding. Dramatically reduces marking time whilst keeping feedback specific.',
    howToImplement: [
      'Agree a departmental code sheet (e.g. P = punctuation, Sp = spelling, S/V = subject-verb agreement, ^T = add a topic sentence, Exp = expand this point, // = new paragraph).',
      'Display the code key on classroom walls and paste it inside exercise books.',
      'Introduce codes gradually at the start of the year -- do not overwhelm students.',
      'Mark by reading through and annotating codes in the margin or inline.',
      'In DIRT lessons, students decode each symbol, find their error, and correct or extend.',
      'Combine with a single end-comment for higher-level feedback on argument or structure.',
    ],
    benefits: [
      'Very fast to apply once codes are internalised.',
      'Teaches students to self-correct rather than just read a correction.',
      'Consistent across the department; students benefit from the same system with every teacher.',
      'Encourages active engagement with feedback rather than passive reading.',
      'Easily differentiated -- use fewer codes with lower-ability groups.',
    ],
    limitations: [
      'Requires whole-department buy-in and a launch period to embed.',
      'Students need time to learn the system; initial investment of lesson time.',
      'Does not communicate higher-order concerns about content or argument easily.',
      'Risk of over-marking -- too many codes can overwhelm rather than guide.',
    ],
    template:
      'CODE SHEET (examples):\nP    = punctuation error\nSp   = spelling error\nS/V  = subject-verb agreement\n^T   = add a topic sentence\nExp  = expand / develop this idea\nE    = add a quotation or example\nAna  = add analysis\n//   = new paragraph needed\nRep  = repetition -- vary your expression\n?    = unclear meaning',
  },
  {
    id: 'fs-003',
    title: 'Whole-Class Feedback Sheet',
    type: 'whole-class-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '20-30 minutes to mark the set; 15-20 minutes class time to deliver',
    description:
      'Rather than writing individual comments, the teacher reads through all books quickly, noting patterns on a single feedback sheet. The sheet is then shared with the class and used to drive a responsive teaching session. Individual books may receive a brief tick or code but the substantive feedback is whole-class.',
    howToImplement: [
      'As you read each book, note recurring errors, strong phrases, common misunderstandings, and 2-3 exemplar extracts on your feedback sheet.',
      'Do not write lengthy individual comments -- a code or brief annotation is sufficient.',
      'In the next lesson, project or hand out the completed feedback sheet.',
      'Model corrections using anonymised examples from the class.',
      'Set a DIRT task that addresses the most common weakness identified.',
      'Students write a "purple polishing" improvement in their own book.',
    ],
    benefits: [
      'Dramatically reduces marking time per set (often 50-70% faster than individual comments).',
      'Responsive teaching -- the lesson is driven by what the class actually produced.',
      'Whole-class modelling is often more powerful than individual written comments that students do not read.',
      'Allows the teacher to celebrate strong examples and build class confidence.',
      'Sustainable as a regular practice alongside other feedback types.',
    ],
    limitations: [
      'Individual students do not receive personalised written feedback every time.',
      'Requires teacher discipline to resist over-writing individual comments.',
      'Less effective if DIRT time is not built into the follow-up lesson.',
      'Some parents and school leaders expect written individual comments -- manage expectations.',
    ],
  },
  {
    id: 'fs-004',
    title: 'Live Marking (In-Class Circulating Feedback)',
    type: 'verbal-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '15-30 minutes during a writing task (no additional time outside class)',
    description:
      'The teacher circulates during a lesson writing task, reading over shoulders and giving brief verbal or written feedback in the moment. Students can act on the feedback immediately while the task is fresh. Eliminates much of the need for post-lesson marking.',
    howToImplement: [
      'Set a sustained writing task of at least 15 minutes.',
      'Circulate systematically -- avoid repeatedly visiting the same students.',
      'Give one specific verbal comment per student: name a strength and give one improvement prompt.',
      'Write a brief note or code in the margin to prompt their self-correction.',
      'Use a "live marking" stamp or sticker so students know their work has been read.',
      'Keep a clipboard note of students you have not reached -- prioritise them next time.',
      'After the task, use the patterns you noticed to set a class improvement focus.',
    ],
    benefits: [
      'Feedback is immediate -- students can act on it whilst writing.',
      'No books to take home; the marking is done.',
      'Builds strong teacher-student dialogue about the work.',
      'Allows the teacher to catch misconceptions before they are reinforced in full drafts.',
      'Students feel seen and supported during the task.',
    ],
    limitations: [
      'Not possible for all tasks (timed assessments, exams, silent writing).',
      'Teacher cannot reach every student in a large class in one lesson.',
      'Verbal feedback is not recorded unless students write it down.',
      'Requires confident classroom management to circulate without disrupting focus.',
    ],
  },
  {
    id: 'fs-005',
    title: 'DIRT (Dedicated Improvement and Reflection Time)',
    type: 'self-assessment',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '15-25 minutes of lesson time per cycle',
    description:
      'A structured period built into a lesson for students to read, process, and respond to the feedback they have received. DIRT closes the feedback loop: without it, marking has little impact. Students use a different colour pen to show their improvement work clearly.',
    howToImplement: [
      'Return marked books and give students 2-3 minutes in silence to read all comments.',
      'Direct students to open the task to be improved and pick up their "DIRT pen" (different colour).',
      'Set a specific DIRT task: redraft a paragraph, correct coded errors, extend an analysis, write an improved opening.',
      'Model what a good DIRT response looks like using a visualiser or projected example.',
      'Circulate to check students are engaging with the specific EBI or code, not writing new content elsewhere.',
      'Allow peer comparison: "Show your partner your improvement and explain what you changed."',
      'Collect and briefly re-read to confirm the feedback loop is closed.',
    ],
    benefits: [
      'Transforms marking from a passive to an active process.',
      'Provides clear evidence of progress in books that is visible to students, teachers, and observers.',
      'Metacognitive: students think about what they got wrong and why.',
      'Motivating -- students see their writing improve in real time.',
      'Supports AfL and informs subsequent planning.',
    ],
    limitations: [
      'Takes significant lesson time -- must be planned for deliberately.',
      'Students who did not engage with the original task may have little to respond to.',
      'Low-quality feedback produces low-quality DIRT; the quality of marking drives the quality of the response.',
      'Can feel mechanical if the same DIRT format is used every cycle without variation.',
    ],
  },
  {
    id: 'fs-006',
    title: 'Verbal Feedback Stamp',
    type: 'verbal-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    timeRequired: '2-5 minutes per student during lesson time',
    description:
      'A rubber stamp (or printed label) reading "Verbal Feedback Given" is placed in the student\'s book after the teacher has spoken to them. The student then records the gist of the verbal comment in their own words. Creates a written record of oral feedback without the teacher having to write it.',
    howToImplement: [
      'Use the stamp during live marking or one-to-one conferences.',
      'After stamping, ask the student: "Write down in one sentence what I just told you."',
      'Check the student\'s note -- if it is inaccurate, clarify before moving on.',
      'The student\'s written summary counts as their feedback record.',
      'In DIRT, students respond to their own written summary as the target.',
    ],
    benefits: [
      'Provides an evidence trail for verbal feedback without doubling teacher workload.',
      'Oral feedback is immediately encoded in writing by the student, aiding memory.',
      'Quick to deploy during a lesson.',
      'Students are more likely to remember feedback they have articulated themselves.',
    ],
    limitations: [
      'Students may write vague or inaccurate summaries if not monitored.',
      'Requires a physical stamp or printed label -- minor logistical overhead.',
      'Less detailed than written feedback for complex analytical tasks.',
    ],
    template: '[VERBAL FEEDBACK GIVEN]\nStudent record: ________________________\nMy improvement target: _________________',
  },
  {
    id: 'fs-007',
    title: 'Peer Critique (Structured Peer Feedback)',
    type: 'peer-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '20-30 minutes lesson time',
    description:
      'Students read and comment on each other\'s work using a structured protocol. Peer critique develops critical reading skills, builds a feedback vocabulary, and frees the teacher to focus attention on students who need it most. It works best when criteria are explicit and students have been trained in what good feedback looks like.',
    howToImplement: [
      'Before the task, share the success criteria or mark scheme with students.',
      'Model a good peer comment using a sample text: "This is specific and kind -- this is not."',
      'Pair students thoughtfully (similar ability avoids one partner doing all the work).',
      'Provide a structured frame: "WWW... because... EBI... so that..."',
      'Set a time limit -- 8-10 minutes per direction (A marks B, then B marks A).',
      'Require the reviewer to sign their name so they take responsibility for the comment.',
      'Follow up with a self-reflection: "Do you agree with your partner\'s EBI? Why / why not?"',
    ],
    benefits: [
      'Develops students\' own editing and analytical skills.',
      'Higher volume of feedback per lesson than teacher-only feedback.',
      'Students often respond well to peer voice.',
      'Builds collaborative classroom culture.',
      'Prepares students for self-regulation and independence.',
    ],
    limitations: [
      'Quality is highly variable -- requires careful training and modelling.',
      'Some students are reluctant to criticise peers or are too harsh.',
      'Does not replace teacher feedback for high-stakes tasks.',
      'Can become a surface-level exercise if the criteria are too vague.',
    ],
    template:
      'PEER CRITIQUE FRAME\nReviewer: ____________  Author: ____________\nWWW: I think this works well because...\nEBI: This could be improved by... so that...\nOne question I have about your writing: ...',
  },
  {
    id: 'fs-008',
    title: 'Self-Assessment Against Success Criteria',
    type: 'self-assessment',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '10-15 minutes lesson time',
    description:
      'Students evaluate their own work against shared success criteria or a simplified mark scheme before the teacher provides feedback. This activates metacognition, surfaces misunderstanding about what quality looks like, and makes subsequent teacher comments more meaningful.',
    howToImplement: [
      'Share the success criteria at the start of the task -- not only at the end.',
      'After completing the work, students read back through and highlight or annotate where they meet each criterion.',
      'Provide a self-assessment box or grid at the end of the task for students to rate themselves.',
      'Students write one strength and one target before the teacher sees the work.',
      'Teacher reads the self-assessment first and responds to it (e.g. "I agree -- and specifically..." or "Actually, look at...").',
      'Return books and compare teacher and student assessments; discuss discrepancies.',
    ],
    benefits: [
      'Develops student ownership and metacognitive awareness.',
      'Helps students internalise the criteria for success.',
      'Provides the teacher with insight into student self-perception.',
      'Reduces passive dependency on teacher feedback.',
      'Efficient: teacher can respond to the student\'s own assessment rather than starting from scratch.',
    ],
    limitations: [
      'Students often over- or under-rate their work, especially at KS3.',
      'Only as useful as the quality and clarity of the success criteria.',
      'Some students treat it as a box-ticking exercise unless it is genuinely dialogic.',
    ],
    template:
      'SELF-ASSESSMENT\nTask: ________________________  Date: ________\nSuccess Criteria -- I have...\n[ ] ...\n[ ] ...\n[ ] ...\nOne thing I did well: ___________________\nOne thing I want to improve: ____________\nTeacher response: _______________________',
  },
  {
    id: 'fs-009',
    title: 'Minimal Marking (Selective Correction)',
    type: 'written-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    timeRequired: '1-2 minutes per student',
    description:
      'Rather than correcting every error, the teacher identifies a single line or short section to mark in depth and leaves the rest. Alternatively, only a focused skill (e.g. only punctuation, or only topic sentences) is marked across the whole class. This keeps marking manageable and draws student attention to a specific learning point.',
    howToImplement: [
      'Decide in advance what you are marking for (e.g. "Today I am marking only for paragraph structure").',
      'Read each piece for that focus only -- ignore other issues unless they obscure meaning.',
      'Mark the first paragraph in depth; write a brief comment; tick the rest.',
      'Alternatively, mark only the opening and closing paragraph and note the overall impression.',
      'Communicate the focus to students so they know why only part of the work is annotated.',
      'Rotate the focus over the term so all skills receive attention eventually.',
    ],
    benefits: [
      'Sustainable for teachers -- prevents marking fatigue and ensures regular feedback.',
      'Students receive clear, focused feedback rather than being overwhelmed.',
      'Enables more frequent feedback cycles.',
      'Teaches students to improve a specific skill rather than making cosmetic changes everywhere.',
    ],
    limitations: [
      'Errors in unread sections are not addressed.',
      'Students may feel short-changed if they expect comprehensive marking.',
      'Requires strong communication to students and parents about the rationale.',
    ],
  },
  {
    id: 'fs-010',
    title: 'End-of-Unit Written Feedback',
    type: 'written-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '5-8 minutes per student',
    description:
      'A longer, more detailed written response given once at the end of a unit rather than on every piece. The teacher comments on the student\'s development across the unit, identifies patterns, and sets a priority target for the next unit. This concentrates effort where it has most impact.',
    howToImplement: [
      'Review two or three pieces from the unit together before writing.',
      'Write a comment that is genuinely personal and specific to that student\'s journey in the unit.',
      'Include: one strength that has improved, one recurring issue that needs addressing, and one specific next-steps task.',
      'Where possible, set the improvement task as a concrete action (e.g. "Rewrite your conclusion using the PEEL structure").',
      'Build in lesson time for students to read and respond to the comment.',
      'Use the comments to inform your targets and seating decisions for the next unit.',
    ],
    benefits: [
      'Reduces overall workload -- fewer marking occasions per term.',
      'More holistic view of progress than single-piece feedback.',
      'Allows the teacher to write a genuinely meaningful, personal comment.',
      'Students receive feedback at a natural break-point when they are ready to move on.',
    ],
    limitations: [
      'Students may not remember the work by the time they receive feedback.',
      'Less immediate impact on learning than feedback during a task.',
      'Requires careful tracking of which students have received end-of-unit feedback.',
    ],
  },
  {
    id: 'fs-011',
    title: 'Two Stars and a Wish',
    type: 'peer-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9'],
    timeRequired: '10-15 minutes lesson time (peer); 2-3 minutes per student (teacher)',
    description:
      'A simple and accessible feedback framework -- two specific strengths ("stars") and one aspiration for improvement ("a wish"). Well-suited to younger or lower-ability students who benefit from a more concrete and encouraging framework than open-ended commentary.',
    howToImplement: [
      'Model the framework with a class text: identify two genuine, specific stars and one focused wish.',
      'Provide the sentence starters: "A star is... because..." and "My wish is that you..."',
      'Use in peer marking before transitioning to self-assessment.',
      'Teachers can use the same framework for efficiency.',
      'Move students toward WWW/EBI language as they develop confidence.',
    ],
    benefits: [
      'Accessible and low-anxiety for students new to feedback.',
      'The 2:1 positive-to-improvement ratio maintains motivation.',
      'Simple enough to be used reliably by KS3 students in peer marking.',
      'Quick to write and easy to act upon.',
    ],
    limitations: [
      'Less sophisticated than WWW/EBI -- can feel juvenile for older or more able students.',
      'Stars can become vague ("It was good") without explicit training.',
      'Single wish may not address the most critical weakness.',
    ],
    template:
      'TWO STARS AND A WISH\nStar 1: _______________________________\nStar 2: _______________________________\nWish:   _______________________________',
  },
  {
    id: 'fs-012',
    title: 'Exam-Style Annotated Model Answer',
    type: 'whole-class-feedback',
    yearGroups: ['Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '20-30 minutes lesson time; 15-20 minutes preparation',
    description:
      'The teacher constructs (or adapts from a student submission) a model answer to the same task and annotates it to show what the mark scheme rewards. The class compares the model to their own response. Particularly effective for exam-technique feedback at GCSE and A Level.',
    howToImplement: [
      'After marking a set, identify the two or three most common gaps between student responses and the mark scheme.',
      'Write or adapt a model answer that explicitly addresses those gaps.',
      'Project the model and annotate it live in class, naming the technique or mark-scheme descriptor being demonstrated.',
      'Students annotate their own work to identify where they did or did not do the same.',
      'Students write an improved paragraph under exam conditions.',
      'Use the mark scheme language throughout so students internalise it.',
    ],
    benefits: [
      'Directly addresses mark-scheme literacy.',
      'Models the quality of thinking required, not just surface features.',
      'Efficient: one model serves the whole class.',
      'Reduces the gap between what students write and what examiners reward.',
      'Particularly powerful at GCSE and A Level where students often misread question demands.',
    ],
    limitations: [
      'Preparation time is front-loaded.',
      'Students may copy the model rather than internalise the approach.',
      'Less useful for creative tasks where there is no single "right" answer.',
    ],
  },
  {
    id: 'fs-013',
    title: 'Conferencing (One-to-One Reading Conference)',
    type: 'verbal-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '3-5 minutes per student; requires class working independently',
    description:
      'The teacher calls individual students to a brief one-to-one conversation about their work while the rest of the class writes or works independently. The conference is structured: the teacher asks the student to evaluate their own work first, then adds a targeted response. A note is made in the book.',
    howToImplement: [
      'Ensure the class is set on a sustained independent task before beginning conferences.',
      'Call students in a planned order -- prioritise those who need most guidance.',
      'Ask the student to read aloud one section and tell you what they think is working.',
      'Respond with one specific strength and one precise improvement point.',
      'Ask the student to write down their target before returning to their seat.',
      'Use a verbal feedback stamp alongside the student\'s written note.',
      'Aim for 4-6 conferences per lesson -- do not attempt to see everyone in one go.',
    ],
    benefits: [
      'Dialogue is richer than written comments -- the teacher can probe and redirect.',
      'Highly responsive to the individual student\'s understanding.',
      'Students feel their work is taken seriously.',
      'No books to take home -- all feedback is delivered in class.',
      'Particularly effective for students who do not engage with written comments.',
    ],
    limitations: [
      'Requires the rest of the class to work independently and quietly.',
      'Time-intensive per student -- cannot be done for every student in one lesson.',
      'Record-keeping relies on the student\'s written note, which may be incomplete.',
    ],
  },
  {
    id: 'fs-014',
    title: 'Redrafting (Process Writing Feedback)',
    type: 'written-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
    timeRequired: '5-7 minutes per student (draft 1 comment); 20-30 minutes lesson time for redraft',
    description:
      'Feedback is given on a first draft with the explicit expectation that students will produce a second, improved version. The focus is on the writing process rather than the final product. Particularly effective for extended creative or analytical pieces and for students who need to see how feedback transforms a text.',
    howToImplement: [
      'Frame the task from the outset as a drafting process: "This is Draft 1."',
      'Mark Draft 1 with focused annotations (not corrections) that identify 2-3 areas for revision.',
      'Return drafts with a clear instruction: "Your redraft should show improvement in [X]."',
      'Provide lesson time for redrafting -- students work with Draft 1 open alongside Draft 2.',
      'Assess Draft 2 against the same criteria and note the improvement.',
      'For extended tasks, a third draft may be appropriate before a final submission.',
    ],
    benefits: [
      'Develops genuine writing craft and an understanding of revision as a skill.',
      'Students see their own improvement directly.',
      'Feedback is purposeful because there is a next step built in.',
      'Mirrors real-world writing practice.',
      'Encourages a growth mindset about writing quality.',
    ],
    limitations: [
      'Time-consuming -- requires two rounds of teacher attention per piece.',
      'Some students produce a near-identical redraft unless guidance is specific.',
      'Less practical for timed or exam-condition writing.',
    ],
  },
  {
    id: 'fs-015',
    title: 'Gallery Walk Feedback',
    type: 'peer-feedback',
    yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    timeRequired: '20-25 minutes lesson time',
    description:
      'Completed pieces of writing (or planning) are displayed around the room. Students circulate with sticky notes or pens, leaving brief written comments on each piece. The author then returns to their own work to read the feedback and respond. Creates a high volume of rapid feedback from multiple readers.',
    howToImplement: [
      'Post work around the room (or display on desks if physical space is limited).',
      'Provide sticky notes or a comment frame and a time limit (2 minutes per piece).',
      'Give a specific feedback prompt: "Leave one star and one question" or "Identify one technique."',
      'Students circulate in silence or with quiet music.',
      'When all students have visited 4-6 pieces, they return to their own work.',
      'Students read the comments and write a reflection: "The feedback I will act on is... because..."',
      'The teacher circulates during the gallery to monitor comment quality.',
    ],
    benefits: [
      'Each student receives multiple perspectives on their work.',
      'High energy and kinaesthetic -- good for class cohesion.',
      'Students read widely and develop their critical vocabulary.',
      'No teacher marking required -- the gallery is the feedback event.',
      'Works well for creative writing, planning webs, and analytical introductions.',
    ],
    limitations: [
      'Comment quality can be superficial without tight framing.',
      'Some students may feel exposed having their work publicly displayed.',
      'Logistically complex in a small classroom.',
      'The teacher must ensure anonymity or a safe environment for vulnerable students.',
    ],
  },
];

// ─── Whole-Class Feedback Sheets ──────────────────────────────────────────

export const wholeclassFeedbackSheets: WholeclassFeedbackSheet[] = [
  {
    id: 'wcf-001',
    title: 'Whole-Class Feedback: Analytical Essay',
    yearGroup: 'Year 10 / Year 11',
    taskType: 'Analytical Essay (Literature)',
    sections: [
      {
        sectionTitle: 'Structure and Argument',
        notes: '',
        examples: [
          'No clear thesis statement in the introduction -- argument not signposted.',
          'Paragraphs begin with quotation rather than a topic sentence.',
          'Conclusion repeats introduction rather than developing the argument.',
        ],
      },
      {
        sectionTitle: 'Use of Evidence',
        notes: '',
        examples: [
          'Quotations embedded well in several scripts -- copy this approach.',
          'Some students quote then paraphrase the same line rather than analysing.',
          'Overlong quotations selected -- choose a precise phrase instead.',
        ],
      },
      {
        sectionTitle: 'Language Analysis (PETAL / AO2)',
        notes: '',
        examples: [
          'Many responses identify technique but do not name it.',
          'Effect comments tend to state the obvious: "this makes the reader feel sad."',
          'Best responses linked language choice to context or character motivation.',
        ],
      },
      {
        sectionTitle: 'Contextual Understanding (AO3)',
        notes: '',
        examples: [
          'Context dropped in as a separate paragraph rather than woven into analysis.',
          'Some responses show strong understanding of historical context -- share these.',
        ],
      },
      {
        sectionTitle: 'Spelling, Punctuation, and Grammar',
        notes: '',
        examples: [
          'Recurring: "the writer uses" -- vary with: depicts, presents, implies, conveys.',
          'Recurring SPaG issue: comma splice in complex sentences.',
          'Apostrophes for possession missing in several scripts.',
        ],
      },
    ],
    commonStrengths: [
      'Most students included relevant quotations for each point.',
      'Several strong openings that name the text, author, and key theme.',
      'Good use of connectives to link analytical paragraphs.',
    ],
    commonAreas: [
      'Language analysis remains at feature-spotting level -- move to effect and authorial intent.',
      'Topic sentences need to address the question directly, not just introduce a character.',
      'Conclusions need to synthesise the argument rather than summarise.',
    ],
    teachingPoints: [
      'Model the "zoom in" technique: select a single word, analyse its connotations, link to theme.',
      'Practise writing topic sentences that embed the question wording.',
      'Show two contrasting conclusions -- one that repeats and one that develops.',
    ],
    nextLessonFocus:
      'DIRT: Students rewrite their conclusion using the synthesis frame provided, then redraft one body paragraph to include explicit technique identification and effect comment.',
  },
  {
    id: 'wcf-002',
    title: 'Whole-Class Feedback: Creative Writing',
    yearGroup: 'Year 8 / Year 9',
    taskType: 'Descriptive / Narrative Creative Writing',
    sections: [
      {
        sectionTitle: 'Opening and Reader Engagement',
        notes: '',
        examples: [
          'Several scripts open with "It was a dark and stormy night" -- needs rethinking.',
          'Strong openings used: in medias res, a striking sensory image, an unanswered question.',
          'Some openings spend too long on backstory before the action begins.',
        ],
      },
      {
        sectionTitle: 'Vocabulary and Stylistic Choices',
        notes: '',
        examples: [
          'Adjective overload: three adjectives before every noun -- strip back to one precise one.',
          'Best scripts selected verbs carefully: "crept", "lurched", "hovered" rather than "went".',
          'Similes present but most are cliched: "as cold as ice", "like a lion."',
        ],
      },
      {
        sectionTitle: 'Structural Craft',
        notes: '',
        examples: [
          'Good use of short paragraphs / sentences for pace in several scripts.',
          'Most scripts are chronological -- some experimentation with flashback would elevate.',
          'Endings are abrupt or arrive without narrative logic.',
        ],
      },
      {
        sectionTitle: 'Voice and Perspective',
        notes: '',
        examples: [
          'First-person scripts sometimes lose track of what the narrator can and cannot know.',
          'Good examples of internal monologue used for characterisation.',
        ],
      },
      {
        sectionTitle: 'Technical Accuracy',
        notes: '',
        examples: [
          'Comma splices widespread -- teach the subordinating conjunction fix.',
          'Speech punctuation errors in most scripts -- revisit the punctuation convention.',
          'Tense shifts mid-narrative in a number of scripts.',
        ],
      },
    ],
    commonStrengths: [
      'Confident use of the senses -- sight and sound are well represented.',
      'Most students sustained the piece to the required length.',
      'Strong character names and settings that felt specific.',
    ],
    commonAreas: [
      'Verb choices are safe and generic -- students need to upgrade their lexical ambition.',
      'Show, do not tell -- too many scripts tell us how characters feel rather than showing it.',
      'Endings need to feel purposeful, not simply stopping.',
    ],
    teachingPoints: [
      'Show-not-tell workshop: give three "tell" sentences and ask students to show them instead.',
      'Verb upgrade: replace ten generic verbs in a sample passage.',
      'Model a crafted ending: circular structure, image echo, unresolved ambiguity.',
    ],
    nextLessonFocus:
      'DIRT: Rewrite the opening paragraph removing cliches and upgrading three verbs. Then add a final sentence or paragraph that gives the piece a deliberate sense of an ending.',
  },
  {
    id: 'wcf-003',
    title: 'Whole-Class Feedback: Transactional Writing',
    yearGroup: 'Year 10 / Year 11',
    taskType: 'Persuasive / Transactional Writing (IGCSE Language)',
    sections: [
      {
        sectionTitle: 'Form, Audience, and Purpose',
        notes: '',
        examples: [
          'Some scripts ignore the form (e.g. writing a speech without any direct address).',
          'Register inconsistency: formal in some paragraphs, informal in others.',
          'Most students identified the audience correctly but did not adapt vocabulary for it.',
        ],
      },
      {
        sectionTitle: 'Structural Organisation',
        notes: '',
        examples: [
          'Opening hooks present but not sustained -- argument drifts in the middle section.',
          'Good use of counter-argument and rebuttal in a handful of scripts.',
          'Subheadings used inappropriately in a speech format.',
        ],
      },
      {
        sectionTitle: 'Persuasive Techniques (AFOREST etc.)',
        notes: '',
        examples: [
          'Rhetorical questions overused -- often three in a row without development.',
          'Anecdotes and statistics used but not attributed, weakening credibility.',
          'Best scripts varied technique and embedded it naturally.',
        ],
      },
      {
        sectionTitle: 'Tone and Voice',
        notes: '',
        examples: [
          'Tone is assertive in places but collapses into informal register under pressure.',
          'Good use of inclusive "we" in several scripts to build shared identity with audience.',
        ],
      },
      {
        sectionTitle: 'Accuracy and Expression',
        notes: '',
        examples: [
          'Vocabulary choices are competent but not ambitious -- reward sophistication.',
          'Sentence variety is limited: most sentences are simple or compound.',
          'Recurrent punctuation issue: missing commas after fronted adverbials.',
        ],
      },
    ],
    commonStrengths: [
      'Most students attempted a range of persuasive techniques.',
      'Clear structural signposting with discourse markers.',
      'Confident, direct opening statements that engage the reader.',
    ],
    commonAreas: [
      'Register must be sustained consistently -- do not slip from formal to chatty.',
      'Persuasive techniques need development after their first use, not just stacking.',
      'Conclusions should return to the opening image or argument for circularity.',
    ],
    teachingPoints: [
      'Register audit: highlight every informal word or phrase in a sample script and replace.',
      'Model a rebuttal paragraph: acknowledge the counter-view, then dismantle it.',
      'Practise complex sentence constructions to increase syntactic variety.',
    ],
    nextLessonFocus:
      'DIRT: Identify the weakest persuasive paragraph and redraft it to include a developed technique and a formal register throughout. Then write an improved conclusion that echoes the opening.',
  },
  {
    id: 'wcf-004',
    title: 'Whole-Class Feedback: Poetry Analysis',
    yearGroup: 'Year 9 / Year 10',
    taskType: 'Unseen Poetry Analysis',
    sections: [
      {
        sectionTitle: 'Initial Understanding and Response',
        notes: '',
        examples: [
          'Some scripts misread the poem\'s tone -- assumed sadness where the poem is ironic.',
          'Good initial responses identified the speaker and situation clearly.',
          'A few scripts focused only on one stanza.',
        ],
      },
      {
        sectionTitle: 'Language and Imagery Analysis',
        notes: '',
        examples: [
          'Most students identified imagery but described it rather than analysed it.',
          'Best responses explored the connotations of specific word choices.',
          'Overuse of "the poet uses this to make the reader think" without specificity.',
        ],
      },
      {
        sectionTitle: 'Form and Structure',
        notes: '',
        examples: [
          'Very few responses commented on form (stanza length, line breaks, rhyme scheme).',
          'One or two scripts linked enjambment to meaning effectively -- share these.',
          'Rhyme scheme identified in several scripts but effect not explored.',
        ],
      },
      {
        sectionTitle: 'Comparative Points (if applicable)',
        notes: '',
        examples: [
          'Comparisons are asserted but not developed: "Both poems are about loss."',
          'Better responses used an evaluative framework: similar in theme but contrasting in tone.',
        ],
      },
      {
        sectionTitle: 'Technical Accuracy',
        notes: '',
        examples: [
          'Poem titles not in inverted commas in many scripts.',
          'Present tense for literary analysis not consistently maintained.',
        ],
      },
    ],
    commonStrengths: [
      'Willingness to engage with unfamiliar poems and have a go.',
      'Some sophisticated vocabulary choices in analytical writing.',
      'Evidence selected from across the poem rather than only the first stanza.',
    ],
    commonAreas: [
      'Form and structure are being ignored -- this is always worth exploring.',
      'Language analysis must move beyond identification to connotation and effect.',
      'Avoid summarising the poem -- assume the examiner has read it.',
    ],
    teachingPoints: [
      'Model the connotation drill: take one adjective and brainstorm all its associations.',
      'Form exploration: show how a line break creates ambiguity or mimics an experience.',
      'Teach the "two-way adjective" approach to tone: ironic, elegiac, defiant, tender.',
    ],
    nextLessonFocus:
      'DIRT: Return to the poem and write two additional sentences on form or structure. Then improve one language analysis point by exploring at least two connotations of the word selected.',
  },
  {
    id: 'wcf-005',
    title: 'Whole-Class Feedback: Speaking Task',
    yearGroup: 'Year 9 / Year 10',
    taskType: 'Individual Spoken Presentation',
    sections: [
      {
        sectionTitle: 'Content and Ideas',
        notes: '',
        examples: [
          'Several presentations were well researched with specific examples.',
          'Some presentations were too brief -- the required time was not met.',
          'Arguments were asserted but not supported with evidence in a number of cases.',
        ],
      },
      {
        sectionTitle: 'Structure and Signposting',
        notes: '',
        examples: [
          'Few students used explicit signposting language ("Firstly," "To counter this," "In conclusion").',
          'Introductions did not always name the topic or establish the speaker\'s stance.',
          'Some strong circular structures -- opened and closed with the same image or question.',
        ],
      },
      {
        sectionTitle: 'Delivery: Voice and Pace',
        notes: '',
        examples: [
          'Reading verbatim from notes significantly reduced impact.',
          'Good use of pause for effect in two presentations.',
          'Pace was too fast in several cases -- practise breathing and pausing.',
        ],
      },
      {
        sectionTitle: 'Audience Engagement',
        notes: '',
        examples: [
          'Rhetorical questions directed at the audience worked well.',
          'Eye contact was limited -- notes were a barrier.',
          'Anecdotes were the most engaging moments in most presentations.',
        ],
      },
      {
        sectionTitle: 'Language Register',
        notes: '',
        examples: [
          'Informal filler language ("like," "you know," "basically") needs to be reduced.',
          'Vocabulary was appropriate; some students used technical terms effectively.',
        ],
      },
    ],
    commonStrengths: [
      'Most students prepared adequately and spoke for the full time.',
      'Topics were relevant and personally meaningful.',
      'Good confidence levels across the class.',
    ],
    commonAreas: [
      'Notes should be bullet-point prompts, not full scripts -- practise speaking from key words.',
      'Signposting language is essential for a spoken audience who cannot re-read.',
      'Vocal variety (pace, pitch, emphasis) needs development.',
    ],
    teachingPoints: [
      'Practise bullet-point delivery: students reduce their script to seven words per point.',
      'Model signposting phrases and have students categorise them (opening / developing / concluding).',
      'Peer observation: audience writes one star and one target during each presentation.',
    ],
    nextLessonFocus:
      'Peer feedback review: students read their observer comments and plan one specific change for a re-delivery of their opening 90 seconds.',
  },
  {
    id: 'wcf-006',
    title: 'Whole-Class Feedback: Timed Assessment',
    yearGroup: 'Year 11',
    taskType: 'Timed In-Class Assessment (Mixed Skills)',
    sections: [
      {
        sectionTitle: 'Time Management and Completion',
        notes: '',
        examples: [
          'Several students did not complete all questions -- time allocation needs review.',
          'Some students spent too long on low-mark questions.',
          'Best approach: 1 minute per mark as a rough guide.',
        ],
      },
      {
        sectionTitle: 'Question Interpretation',
        notes: '',
        examples: [
          'AO1 retrieve-and-summarise question answered with analysis -- re-read the command word.',
          'Some students answered the question they wanted rather than the one set.',
          'Good use of the mark allocation to calibrate response length in several scripts.',
        ],
      },
      {
        sectionTitle: 'Reading Section Performance',
        notes: '',
        examples: [
          'Inference responses gave the inference but did not support with textual evidence.',
          'Language analysis responses were mostly feature-identification without effect.',
          'Summary questions included personal opinion -- keep to the text.',
        ],
      },
      {
        sectionTitle: 'Writing Section Performance',
        notes: '',
        examples: [
          'Most writing responses were structurally sound but lacked stylistic ambition.',
          'Some students wrote beyond the suggested length and ran out of time for the rest.',
        ],
      },
      {
        sectionTitle: 'Presentation and Technical Accuracy',
        notes: '',
        examples: [
          'Handwriting legibility was an issue in a small number of scripts.',
          'Paragraphing was inconsistent -- check indentation or line spacing.',
        ],
      },
    ],
    commonStrengths: [
      'Most students attempted all sections.',
      'Reading comprehension answers were clearly referenced to the text.',
      'Writing sections showed awareness of audience and purpose.',
    ],
    commonAreas: [
      'Command-word literacy: students must distinguish between "explain," "analyse," and "evaluate."',
      'Time allocation: practise timed conditions regularly and keep a clock visible.',
      'Language analysis: every question worth more than two marks expects effect, not just feature.',
    ],
    teachingPoints: [
      'Command-word sorting activity: categorise exam questions by what they are asking you to do.',
      'Model annotating a question before writing: underline the command word, circle the focus, note the mark.',
      'Timed micro-tasks: practise writing a 6-mark response in exactly 8 minutes.',
    ],
    nextLessonFocus:
      'DIRT: Students re-attempt the question where marks were most commonly lost, using the model answer on the board as a guide. They annotate their improvement to identify exactly what changed.',
  },
  {
    id: 'wcf-007',
    title: 'Whole-Class Feedback: IGCSE Language Question',
    yearGroup: 'Year 10 / Year 11',
    taskType: 'IGCSE English Language -- Reading Response Question',
    sections: [
      {
        sectionTitle: 'Understanding of Source Material',
        notes: '',
        examples: [
          'Some students paraphrased without selecting the most relevant material.',
          'A number of scripts showed strong ability to identify implied meaning.',
          'Factual misreadings present in three or four scripts -- check inference is grounded.',
        ],
      },
      {
        sectionTitle: 'Use of Evidence',
        notes: '',
        examples: [
          'Quotations copied at length rather than selected precisely.',
          'Best responses embedded a short quotation within the analytical sentence.',
          'Some responses listed points without evidence at all.',
        ],
      },
      {
        sectionTitle: 'Analysis and Interpretation',
        notes: '',
        examples: [
          'Most students identified what the writer says but not how or why.',
          'Language analysis present in stronger scripts: connotation, tone, register addressed.',
          'Effect comments often generic: "this makes the reader interested."',
        ],
      },
      {
        sectionTitle: 'Organisation and Expression',
        notes: '',
        examples: [
          'Responses are generally clear but bullet-pointing where continuous prose is required.',
          'Some excellent use of discourse markers to guide the reader.',
          'A few responses are very short -- more development needed.',
        ],
      },
      {
        sectionTitle: 'Meeting the Mark Scheme Descriptors',
        notes: '',
        examples: [
          'Most responses reach the "some understanding" band; moving to "clear" requires more specific evidence.',
          'Perceptive band requires independent interpretation -- model this explicitly.',
        ],
      },
    ],
    commonStrengths: [
      'Students are reading the source carefully and selecting relevant material.',
      'Majority of responses are clearly structured.',
      'Most students are writing in continuous prose.',
    ],
    commonAreas: [
      'Analysis must move beyond retrieval -- explain the how and the why.',
      'Quotation selection should be precise and purposeful, not long and block-pasted.',
      'Perceptive responses require a personal interpretive voice -- move beyond obvious points.',
    ],
    teachingPoints: [
      'The "because" and "which suggests" sentence frames: practise until automatic.',
      'Model a "band 3 to band 4" upgrade using a class response.',
      'Quotation precision workshop: students reduce a five-line quote to five words.',
    ],
    nextLessonFocus:
      'DIRT: Students locate their weakest analytical point and rewrite it using the evidence-analysis-effect (EAE) model demonstrated on the board.',
  },
  {
    id: 'wcf-008',
    title: 'Whole-Class Feedback: IAL Essay',
    yearGroup: 'Year 12 / Year 13',
    taskType: 'International A Level (IAL) Literature or Language Essay',
    sections: [
      {
        sectionTitle: 'Argument and Thesis',
        notes: '',
        examples: [
          'Few scripts open with a clear, contestable thesis -- most begin with broad context.',
          'Best essays sustained one argument throughout rather than listing observations.',
          'Some scripts changed their position mid-essay without acknowledging it.',
        ],
      },
      {
        sectionTitle: 'Textual Analysis',
        notes: '',
        examples: [
          'Quotations are selected well but analysis often remains at the level of paraphrase.',
          'Strong scripts moved between close reading and conceptual argument fluidly.',
          'Some responses over-quote: entire speeches reproduced rather than a telling phrase.',
        ],
      },
      {
        sectionTitle: 'Critical and Theoretical Engagement',
        notes: '',
        examples: [
          'Few scripts engaged with critical perspectives beyond a brief mention.',
          'Where theory is used, it is often dropped in and not applied to the text.',
          'Best responses used a critical lens to reframe their own reading.',
        ],
      },
      {
        sectionTitle: 'Contextual Literacy',
        notes: '',
        examples: [
          'Historical and biographical context used well in a number of scripts.',
          'Context is sometimes front-loaded in the introduction without returning to it.',
          'Best practice: context woven into analysis rather than listed separately.',
        ],
      },
      {
        sectionTitle: 'Structure, Cohesion, and Academic Register',
        notes: '',
        examples: [
          'Paragraph structure is generally sound but topic sentences are too descriptive.',
          'Register is mostly appropriate; some colloquial expressions creep in.',
          'Conclusions often summarise rather than arrive at a final evaluative insight.',
        ],
      },
    ],
    commonStrengths: [
      'Strong close reading of individual passages in most essays.',
      'Clear evidence of engagement with the text beyond surface level.',
      'Most essays are logically sequenced and easy to follow.',
    ],
    commonAreas: [
      'A thesis is not a topic -- it is a debatable claim. Practise writing one-sentence thesis statements.',
      'Critical voices should be used to challenge or refine your reading, not just be mentioned.',
      'Context must be specific and analytical, not encyclopaedic background information.',
    ],
    teachingPoints: [
      'Thesis workshop: students write five possible thesis statements for the same question and rank them by contestability.',
      'Critical perspectives: model using a feminist or Marxist reading to reframe a paragraph.',
      'Conclusion frames: write a conclusion that develops rather than repeats the introduction argument.',
    ],
    nextLessonFocus:
      'DIRT: Students rewrite their introduction to include a clear, contestable thesis that maps the essay\'s argument. Then identify one paragraph that lacks critical engagement and add a sentence engaging with a named critical perspective.',
  },
];
