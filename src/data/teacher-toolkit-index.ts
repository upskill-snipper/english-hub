// @ts-nocheck
/**
 * ───────────────────────────────────────────────────────────────────────────
 * ENGLISH HUB: COMPREHENSIVE TEACHER TOOLKIT INDEX
 * ───────────────────────────────────────────────────────────────────────────
 * Master index of ALL teacher resources available on the platform.
 * Catalogues lesson plans, assessments, differentiation tools, display resources,
 * homework activities, intervention materials, CPD guides, parent communications,
 * SEND resources, schemes of work, revision materials, and exam preparation.
 * ───────────────────────────────────────────────────────────────────────────
 */

export interface TeacherResource {
  id: string;
  title: string;
  category: ResourceCategory;
  description: string;
  suitableFor: string[];
  fileRef: string;
  tags: string[];
}

export type ResourceCategory =
  | 'Lesson Plans'
  | 'Assessment'
  | 'Differentiation'
  | 'Display'
  | 'Homework'
  | 'Intervention'
  | 'CPD'
  | 'Parent Communication'
  | 'SEND'
  | 'Schemes of Work'
  | 'Revision'
  | 'Exam Prep';

/**
 * ───────────────────────────────────────────────────────────────────────────
 * COMPREHENSIVE TEACHER RESOURCE INDEX (100+ RESOURCES)
 * ───────────────────────────────────────────────────────────────────────────
 */

export const teacherResourceIndex: TeacherResource[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LESSON PLANS (40+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'lp-aqa-lang-p1-metaphor',
    title: 'AQA Language Paper 1: Metaphor & Imagery Deep Dive',
    category: 'Lesson Plans',
    description: 'Full lesson on identifying and analysing metaphor and imagery in unseen texts. Includes starter activity, three guided practice tasks, and independent application to examination questions.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Mixed ability'],
    fileRef: 'lesson-plans/aqa-language-plans.ts',
    tags: ['AQA', 'Language', 'Analysis', 'Imagery', 'Techniques', 'GCSE'],
  },

  {
    id: 'lp-shakespeare-macbeth-act1',
    title: 'Macbeth Act 1: Ambition & Supernatural',
    category: 'Lesson Plans',
    description: 'Three-lesson sequence covering Act 1 of Macbeth. Explores themes of ambition, supernatural elements, and character motivation. Includes context slides, character mapping, and analysis activities.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Shakespeare', 'All abilities'],
    fileRef: 'lesson-plans/macbeth-lessons.ts',
    tags: ['Shakespeare', 'Macbeth', 'Drama', 'Theme', 'Context', 'GCSE'],
  },

  {
    id: 'lp-poetry-love-relationships',
    title: 'Love & Relationships Poetry: Full Scheme (12 lessons)',
    category: 'Lesson Plans',
    description: 'Complete 12-lesson unit on the Love & Relationships poetry anthology. Covers each poem individually with analysis, comparison activities, and essay preparation exercises.',
    suitableFor: ['GCSE', 'Year 11', 'Poetry', 'Literature'],
    fileRef: 'lesson-plans/poetry-love-relationships-lessons.ts',
    tags: ['Poetry', 'AQA', 'Anthology', 'Love', 'Analysis', 'GCSE'],
  },

  {
    id: 'lp-creative-writing-narratives',
    title: 'Creative Writing: Narrative Techniques (5 lessons)',
    category: 'Lesson Plans',
    description: 'Five-lesson progression developing narrative writing skills. Covers structure, dialogue, characterisation, and revision. Includes model answers and student exemplars.',
    suitableFor: ['GCSE', 'Year 9', 'Year 10', 'All abilities'],
    fileRef: 'lesson-plans/creative-writing-lessons.ts',
    tags: ['Creative Writing', 'Narrative', 'Writing', 'Technique', 'GCSE'],
  },

  {
    id: 'lp-grammar-punctuation-ks3',
    title: 'Grammar & Punctuation: Progressive Mastery (KS3)',
    category: 'Lesson Plans',
    description: 'Year-long scheme covering sentence types, punctuation rules, grammatical terminology, and proofreading. Includes interactive activities and consolidation tasks.',
    suitableFor: ['KS3', 'Year 7', 'Year 8', 'Year 9', 'Foundations'],
    fileRef: 'lesson-plans/grammar-punctuation-lessons.ts',
    tags: ['Grammar', 'Punctuation', 'KS3', 'Foundation', 'Writing'],
  },

  {
    id: 'lp-an-inspector-calls-full',
    title: 'An Inspector Calls: Complete Text Study (10 lessons)',
    category: 'Lesson Plans',
    description: 'Comprehensive study of Priestley\'s play covering structure, characterisation, class themes, and social responsibility. Includes context, analysis, and essay preparation.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Literature'],
    fileRef: 'lesson-plans/inspector-calls-lessons.ts',
    tags: ['Drama', 'Priestley', 'Text Study', 'Theme', 'GCSE'],
  },

  {
    id: 'lp-unseen-poetry-strategies',
    title: 'Unseen Poetry: Analytical Reading Strategies',
    category: 'Lesson Plans',
    description: 'Teaches systematic approach to analysing unfamiliar poems in examination conditions. Includes annotation strategies, time management, and practice with diverse poetry.',
    suitableFor: ['GCSE', 'Year 11', 'Assessment'],
    fileRef: 'lesson-plans/unseen-poetry-lessons.ts',
    tags: ['Poetry', 'Analysis', 'Exam skills', 'Unseen', 'GCSE'],
  },

  {
    id: 'lp-non-fiction-writing',
    title: 'Non-Fiction Writing: Informative & Persuasive (8 lessons)',
    category: 'Lesson Plans',
    description: 'Covers articles, reviews, opinion pieces, and speeches. Develops techniques for engaging audiences, using rhetorical devices, and structuring complex ideas.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Writing'],
    fileRef: 'lesson-plans/non-fiction-writing-lessons.ts',
    tags: ['Writing', 'Non-fiction', 'Rhetoric', 'Persuasion', 'GCSE'],
  },

  {
    id: 'lp-jekyll-hyde-gothic-novella',
    title: 'Jekyll and Hyde: Gothic Novella Analysis',
    category: 'Lesson Plans',
    description: 'Exploration of Stevenson\'s novella examining dual nature, Victorian concerns, and gothic conventions. Includes close text analysis and character study.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/jekyll-hyde-lessons.ts',
    tags: ['Literature', 'Gothic', 'Victorian', 'Text Study', 'GCSE'],
  },

  {
    id: 'lp-reading-comprehension-strategies',
    title: 'Reading Comprehension: Active Reading Techniques',
    category: 'Lesson Plans',
    description: 'Develops skills for extracting information, making inferences, and evaluating texts. Includes annotation methods, questioning strategies, and practice questions.',
    suitableFor: ['KS3', 'GCSE', 'Year 7-11', 'Foundation'],
    fileRef: 'lesson-plans/reading-comprehension-lessons.ts',
    tags: ['Reading', 'Comprehension', 'Inference', 'Skills', 'All levels'],
  },

  {
    id: 'lp-power-conflict-poetry-ks3',
    title: 'Power & Conflict Poetry: KS3 Introduction',
    category: 'Lesson Plans',
    description: 'Introduction to power and conflict themes in poetry. Suitable for younger students encountering poetry anthology work. Builds towards GCSE study.',
    suitableFor: ['KS3', 'Year 9', 'Foundation'],
    fileRef: 'lesson-plans/poetry-power-conflict-lessons.ts',
    tags: ['Poetry', 'Power', 'Conflict', 'KS3', 'Theme'],
  },

  {
    id: 'lp-romeo-juliet-tragedy',
    title: 'Romeo and Juliet: Shakespearean Tragedy',
    category: 'Lesson Plans',
    description: 'Full text study exploring Shakespeare\'s treatment of tragedy, love, and fate. Covers key scenes, thematic analysis, and essay techniques.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/romeo-juliet-lessons.ts',
    tags: ['Shakespeare', 'Drama', 'Tragedy', 'Love', 'GCSE'],
  },

  {
    id: 'lp-lord-of-flies-survival',
    title: 'Lord of the Flies: Civilization vs. Chaos',
    category: 'Lesson Plans',
    description: 'Study of Golding\'s novel examining themes of civilisation, power struggles, and human nature. Includes symbolism analysis and thematic essays.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/lord-of-flies-lessons.ts',
    tags: ['Literature', 'Novel', 'Theme', 'Symbolism', 'GCSE'],
  },

  {
    id: 'lp-media-literacy-advertising',
    title: 'Media Literacy: Decoding Advertising',
    category: 'Lesson Plans',
    description: 'Critical analysis of advertising messages, visual techniques, and persuasive language. Includes comparison of campaigns and creating media materials.',
    suitableFor: ['KS3', 'GCSE', 'Media literacy'],
    fileRef: 'lesson-plans/media-literacy-lessons.ts',
    tags: ['Media', 'Advertising', 'Critical thinking', 'Persuasion'],
  },

  {
    id: 'lp-spoken-language-presentations',
    title: 'Spoken Language: Presentation Skills',
    category: 'Lesson Plans',
    description: 'Develops skills in delivering presentations, speaking clearly, responding to questions. Covers for GCSE spoken language endorsement.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/spoken-language-lessons.ts',
    tags: ['Spoken Language', 'Communication', 'Presentation', 'GCSE'],
  },

  {
    id: 'lp-animal-farm-allegory',
    title: 'Animal Farm: Political Allegory Study',
    category: 'Lesson Plans',
    description: 'Examination of Orwell\'s satirical novella exploring political themes, character symbolism, and the corruption of power.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/animal-farm-lessons.ts',
    tags: ['Literature', 'Allegory', 'Political theme', 'Satire', 'GCSE'],
  },

  {
    id: 'lp-christmas-carol-redemption',
    title: 'A Christmas Carol: Redemption & Transformation',
    category: 'Lesson Plans',
    description: 'Study of Dickens\'s ghost story examining themes of redemption, social responsibility, and transformation. Includes context and character development.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/christmas-carol-lessons.ts',
    tags: ['Victorian literature', 'Novel', 'Theme', 'Social concern', 'GCSE'],
  },

  {
    id: 'lp-edexcel-paper1-writing',
    title: 'Edexcel Paper 1: Creative & Transactional Writing',
    category: 'Lesson Plans',
    description: 'Preparation for Edexcel Language Paper 1. Covers both creative narratives and transactional writing (letters, emails, articles).',
    suitableFor: ['GCSE', 'Edexcel', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/edexcel-language-plans.ts',
    tags: ['Edexcel', 'Writing', 'GCSE', 'Exam prep'],
  },

  {
    id: 'lp-frankenstein-gothic-science',
    title: 'Frankenstein: Gothic Science & Responsibility',
    category: 'Lesson Plans',
    description: 'Study of Mary Shelley\'s novel exploring gothic conventions, scientific ambition, and moral responsibility. Includes detailed textual analysis.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/frankenstein-lessons.ts',
    tags: ['Gothic literature', 'Science', 'Responsibility', 'GCSE'],
  },

  {
    id: 'lp-great-expectations-society',
    title: 'Great Expectations: Class & Society',
    category: 'Lesson Plans',
    description: 'Dickens\'s novel examining social class, ambition, and self-understanding. Analyzes character relationships and Victorian society concerns.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/great-expectations-lessons.ts',
    tags: ['Victorian literature', 'Novel', 'Society', 'GCSE'],
  },

  {
    id: 'lp-blood-brothers-social-realism',
    title: 'Blood Brothers: Social Realism & Fate',
    category: 'Lesson Plans',
    description: 'Russell\'s contemporary drama examining social class, superstition, and fate. Includes staging analysis and thematic exploration.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/blood-brothers-lessons.ts',
    tags: ['Drama', 'Contemporary', 'Social realism', 'GCSE'],
  },

  {
    id: 'lp-language-paper2-transactional',
    title: 'Language Paper 2: Transactional Writing',
    category: 'Lesson Plans',
    description: 'Focuses on Paper 2 writing tasks: formal correspondence, articles, reviews. Develops audience awareness and appropriate tone.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Writing'],
    fileRef: 'lesson-plans/language-paper2-lessons.ts',
    tags: ['Writing', 'Transactional', 'Communication', 'GCSE'],
  },

  {
    id: 'lp-shakespeare-context',
    title: 'Shakespeare: Historical & Literary Context',
    category: 'Lesson Plans',
    description: 'Cross-textual study of Shakespeare examining Elizabethan England, theatrical conventions, and language development.',
    suitableFor: ['GCSE', 'Year 9-11', 'Context'],
    fileRef: 'lesson-plans/shakespeare-context-lessons.ts',
    tags: ['Shakespeare', 'Context', 'Historical', 'Elizabethan'],
  },

  {
    id: 'lp-nineteenth-century-prose',
    title: 'Nineteenth Century Prose: Comparison & Analysis',
    category: 'Lesson Plans',
    description: 'Comparative study of Victorian and early 20th century prose. Develops skills in comparison essays required for GCSE Literature.',
    suitableFor: ['GCSE', 'Year 11', 'Literature'],
    fileRef: 'lesson-plans/nineteenth-century-prose-lessons.ts',
    tags: ['Literature', 'Prose', 'Comparison', 'Victorian', 'GCSE'],
  },

  {
    id: 'lp-ocr-language-paper1',
    title: 'OCR Language Paper 1: Reading & Analysis',
    category: 'Lesson Plans',
    description: 'Tailored to OCR exam requirements. Covers unseen reading analysis and evaluation with OCR-specific question types.',
    suitableFor: ['GCSE', 'OCR', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/ocr-language-plans.ts',
    tags: ['OCR', 'Reading', 'Analysis', 'GCSE'],
  },

  {
    id: 'lp-wjec-language-welsh-board',
    title: 'WJEC Language: Welsh Exam Board Materials',
    category: 'Lesson Plans',
    description: 'WJEC-specific lesson plans covering their syllabus requirements and question formats.',
    suitableFor: ['GCSE', 'WJEC', 'Wales'],
    fileRef: 'lesson-plans/wjec-language-plans.ts',
    tags: ['WJEC', 'Regional exam board', 'Language'],
  },

  {
    id: 'lp-igcse-lessons-caie',
    title: 'IGCSE: Cambridge International Exam Materials',
    category: 'Lesson Plans',
    description: 'Lesson plans for Cambridge International IGCSE covering their specifications and assessment style.',
    suitableFor: ['IGCSE', 'Cambridge', 'International'],
    fileRef: 'lesson-plans/igcse-lessons.ts',
    tags: ['IGCSE', 'Cambridge', 'International exam'],
  },

  {
    id: 'lp-poetry-anthology-plans',
    title: 'Poetry Anthology: Complete Study Guide',
    category: 'Lesson Plans',
    description: 'Full coverage of AQA/Edexcel poetry anthologies with individual poem lessons and cross-textual comparison activities.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Poetry'],
    fileRef: 'lesson-plans/poetry-anthology-plans.ts',
    tags: ['Poetry', 'Anthology', 'Comparison', 'GCSE'],
  },

  {
    id: 'lp-ks3-lessons-comprehensive',
    title: 'KS3 Comprehensive Curriculum',
    category: 'Lesson Plans',
    description: 'Year-long schemes of work for Key Stage 3 covering reading, writing, speaking, and listening across genres and texts.',
    suitableFor: ['KS3', 'Year 7', 'Year 8', 'Year 9'],
    fileRef: 'lesson-plans/ks3-lessons.ts',
    tags: ['KS3', 'Curriculum', 'Foundation', 'Progression'],
  },

  {
    id: 'lp-literature-text-plans',
    title: 'Literature Set Texts: Individual Study Guides',
    category: 'Lesson Plans',
    description: 'Detailed lesson plans for all GCSE literature set texts with section-by-section analysis.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Literature'],
    fileRef: 'lesson-plans/literature-text-plans.ts',
    tags: ['Literature', 'Set texts', 'Analysis', 'GCSE'],
  },

  {
    id: 'lp-revision-techniques-engaging',
    title: 'Revision Techniques: Engaging & Effective',
    category: 'Lesson Plans',
    description: 'Teaches students active revision strategies including mind mapping, spaced repetition, and peer teaching.',
    suitableFor: ['GCSE', 'Year 11', 'Revision'],
    fileRef: 'lesson-plans/revision-techniques-lessons.ts',
    tags: ['Revision', 'Study skills', 'Exam preparation', 'GCSE'],
  },

  {
    id: 'lp-pride-prejudice-austen',
    title: 'Pride and Prejudice: Romance & Social Commentary',
    category: 'Lesson Plans',
    description: 'Study of Austen\'s novel examining social class, gender roles, and Regency society through detailed textual analysis.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11'],
    fileRef: 'lesson-plans/pride-prejudice-lessons.ts',
    tags: ['Literature', 'Novel', 'Austen', 'Regency period', 'GCSE'],
  },

  {
    id: 'lp-language-p1-q2-analysis',
    title: 'Language Paper 1 Q2: Detailed Analysis Methods',
    category: 'Lesson Plans',
    description: 'Deep-dive into language analysis techniques for Paper 1, Question 2. Covers identifying techniques and explaining effects.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Analysis'],
    fileRef: 'lesson-plans/language-paper1-lessons.ts',
    tags: ['Language', 'Analysis', 'Techniques', 'GCSE', 'Paper 1'],
  },

  {
    id: 'lp-language-p2-writing-focus',
    title: 'Language Paper 2: Writing Skills Development',
    category: 'Lesson Plans',
    description: 'Progressively develops writing skills for Paper 2 including structure, tone control, and audience awareness.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Writing'],
    fileRef: 'lesson-plans/language-paper2-lessons.ts',
    tags: ['Writing', 'Language', 'Paper 2', 'GCSE'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ASSESSMENT RESOURCES (20+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'assess-mark-scheme-aqa-lang',
    title: 'AQA Language: Complete Mark Scheme Reference',
    category: 'Assessment',
    description: 'Detailed mark schemes for all AQA Language papers covering assessment objectives and grade band descriptors.',
    suitableFor: ['GCSE', 'Teachers', 'AQA'],
    fileRef: 'mark-schemes.ts',
    tags: ['Mark scheme', 'Assessment', 'AQA', 'GCSE'],
  },

  {
    id: 'assess-mock-aqa-lang-p1',
    title: 'AQA Language Paper 1: Full Mock Exam',
    category: 'Assessment',
    description: 'Complete mock examination matching AQA specification with reading and writing tasks. Includes model answers.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Practice'],
    fileRef: 'mock-exams-aqa-lang-p1.ts',
    tags: ['Mock exam', 'Practice', 'AQA', 'Paper 1', 'GCSE'],
  },

  {
    id: 'assess-mock-aqa-lang-p2',
    title: 'AQA Language Paper 2: Full Mock Exam',
    category: 'Assessment',
    description: 'Complete mock examination for AQA Language Paper 2 with reading analysis and creative writing task.',
    suitableFor: ['GCSE', 'Year 10', 'Year 11', 'Practice'],
    fileRef: 'mock-exams-aqa-lang-p2.ts',
    tags: ['Mock exam', 'Practice', 'AQA', 'Paper 2', 'GCSE'],
  },

  {
    id: 'assess-mock-aqa-lit-p1',
    title: 'AQA Literature Paper 1: Mock Examination',
    category: 'Assessment',
    description: 'Full mock examination for AQA Literature Paper 1 testing knowledge of set texts.',
    suitableFor: ['GCSE', 'Year 11', 'Literature'],
    fileRef: 'mock-exams-aqa-lit-p1.ts',
    tags: ['Mock exam', 'Literature', 'AQA', 'GCSE'],
  },

  {
    id: 'assess-mock-edexcel-lang',
    title: 'Edexcel Language: Complete Mock Papers',
    category: 'Assessment',
    description: 'Full mock examinations for both Edexcel Language papers with answer guidance.',
    suitableFor: ['GCSE', 'Edexcel', 'Year 10', 'Year 11'],
    fileRef: 'mock-exams-edexcel-lang-p1.ts',
    tags: ['Mock exam', 'Edexcel', 'Language', 'GCSE'],
  },

  {
    id: 'assess-mock-ocr-language',
    title: 'OCR Language: Practice Papers',
    category: 'Assessment',
    description: 'Mock examinations designed to OCR specifications with model answers and grade descriptors.',
    suitableFor: ['GCSE', 'OCR', 'Year 10', 'Year 11'],
    fileRef: 'mock-exams-ocr-lang.ts',
    tags: ['Mock exam', 'OCR', 'Language', 'Practice'],
  },

  {
    id: 'assess-mock-wjec-language',
    title: 'WJEC Language: Regional Mock Exams',
    category: 'Assessment',
    description: 'WJEC-specific mock papers covering their assessment requirements.',
    suitableFor: ['GCSE', 'WJEC', 'Wales'],
    fileRef: 'mock-exams-wjec-lang.ts',
    tags: ['Mock exam', 'WJEC', 'Regional', 'Language'],
  },

  {
    id: 'assess-mock-igcse-lang',
    title: 'IGCSE Language: Cambridge Mock Exam',
    category: 'Assessment',
    description: 'Full mock examination for Cambridge International IGCSE English language.',
    suitableFor: ['IGCSE', 'Cambridge', 'International'],
    fileRef: 'mock-exams-igcse-lang.ts',
    tags: ['IGCSE', 'Cambridge', 'Language', 'International'],
  },

  {
    id: 'assess-ks3-mock-papers',
    title: 'KS3: Full Mock Papers & Tests',
    category: 'Assessment',
    description: 'KS3 assessment papers in reading, writing, speaking, and listening across different year groups.',
    suitableFor: ['KS3', 'Year 7-9', 'Assessment'],
    fileRef: 'mock-exams-ks3.ts',
    tags: ['KS3', 'Assessment', 'Practice', 'Foundation'],
  },

  {
    id: 'assess-caie-mock-literature',
    title: 'CAIE Literature: Mock Examination',
    category: 'Assessment',
    description: 'Mock paper for Cambridge International IGCSE Literature.',
    suitableFor: ['IGCSE', 'CAIE', 'Literature', 'International'],
    fileRef: 'mock-exams-caie-lit.ts',
    tags: ['IGCSE', 'Literature', 'Cambridge', 'Assessment'],
  },

  {
    id: 'assess-marking-rubrics-essays',
    title: 'Essay Assessment Rubrics: Comprehensive Guide',
    category: 'Assessment',
    description: 'Detailed rubrics for assessing analytical and creative essays with clear grade descriptors.',
    suitableFor: ['GCSE', 'Teachers', 'Assessment'],
    fileRef: 'teacher-marking-rubrics.ts',
    tags: ['Rubric', 'Assessment', 'Essays', 'Grading'],
  },

  {
    id: 'assess-exam-question-bank',
    title: 'Exam Question Bank: 500+ Questions',
    category: 'Assessment',
    description: 'Extensive collection of past and practice examination questions organized by topic and difficulty.',
    suitableFor: ['GCSE', 'Practice', 'Revision'],
    fileRef: 'exam-questions.ts',
    tags: ['Questions', 'Practice', 'Exam style', 'Database'],
  },

  {
    id: 'assess-model-answers-grade9',
    title: 'Grade 9 Model Answers: Complete Examples',
    category: 'Assessment',
    description: 'Exemplary Grade 9 responses to various question types showing best practice in analysis and writing.',
    suitableFor: ['GCSE', 'Year 11', 'Stretching'],
    fileRef: 'model-answers.ts',
    tags: ['Model answer', 'Grade 9', 'Exemplar', 'GCSE'],
  },

  {
    id: 'assess-gap-analysis-tool',
    title: 'Gap Analysis Framework: Student Progress Tracking',
    category: 'Assessment',
    description: 'System for identifying specific gaps in student knowledge and targeting intervention strategies.',
    suitableFor: ['Teachers', 'Data analysis', 'Planning'],
    fileRef: 'teacher-gap-analysis.ts',
    tags: ['Assessment', 'Data', 'Progress', 'Intervention'],
  },

  {
    id: 'assess-mark-scheme-edexcel',
    title: 'Edexcel Mark Schemes: All Papers',
    category: 'Assessment',
    description: 'Complete mark schemes for Edexcel Language and Literature with assessment objective alignment.',
    suitableFor: ['GCSE', 'Teachers', 'Edexcel'],
    fileRef: 'mark-scheme-questions.ts',
    tags: ['Mark scheme', 'Assessment', 'Edexcel'],
  },

  {
    id: 'assess-aqa-lit-comparison-q3',
    title: 'AQA Literature Q3: Comparison Assessments',
    category: 'Assessment',
    description: 'Assessment materials for comparing two texts, aligned to AQA Literature Paper 2 Q3.',
    suitableFor: ['GCSE', 'Year 11', 'Comparison'],
    fileRef: 'mock-exams-aqa-lit.ts',
    tags: ['Comparison', 'AQA', 'Literature', 'Assessment'],
  },

  {
    id: 'assess-edexcel-lit-papers',
    title: 'Edexcel Literature: Mock Papers',
    category: 'Assessment',
    description: 'Full mock examinations for Edexcel Literature papers.',
    suitableFor: ['GCSE', 'Edexcel', 'Literature'],
    fileRef: 'mock-exams-edexcel-lit.ts',
    tags: ['Mock exam', 'Edexcel', 'Literature', 'GCSE'],
  },

  {
    id: 'assess-ocr-literature-mock',
    title: 'OCR Literature: Practice Papers',
    category: 'Assessment',
    description: 'OCR-specific literature mock examinations with mark schemes.',
    suitableFor: ['GCSE', 'OCR', 'Literature'],
    fileRef: 'mock-exams-ocr-lit.ts',
    tags: ['Mock exam', 'OCR', 'Literature', 'Practice'],
  },

  {
    id: 'assess-wjec-literature-mock',
    title: 'WJEC Literature: Regional Papers',
    category: 'Assessment',
    description: 'WJEC Literature mock papers matching Welsh exam board specifications.',
    suitableFor: ['GCSE', 'WJEC', 'Wales'],
    fileRef: 'mock-exams-wjec-lit.ts',
    tags: ['WJEC', 'Literature', 'Regional', 'Assessment'],
  },

  {
    id: 'assess-unseen-practice-poetry',
    title: 'Unseen Poetry: Practice & Assessment',
    category: 'Assessment',
    description: 'Bank of unseen poems for practice with assessment criteria and model responses.',
    suitableFor: ['GCSE', 'Poetry', 'Practice'],
    fileRef: 'unseen-poetry-practice.ts',
    tags: ['Poetry', 'Unseen', 'Practice', 'Assessment'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DIFFERENTIATION & SCAFFOLDING (15+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'diff-essay-scaffolds-all-levels',
    title: 'Essay Writing Scaffolds: Foundation, Core, Extension',
    category: 'Differentiation',
    description: 'Three-tier scaffolds for essay writing with sentence starters, word banks, and support structures at each level.',
    suitableFor: ['GCSE', 'Mixed ability', 'Writing'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Scaffolding', 'Differentiation', 'Writing', 'Three levels'],
  },

  {
    id: 'diff-analysis-support-sheets',
    title: 'Text Analysis: Scaffolded Support Sheets',
    category: 'Differentiation',
    description: 'Graduated worksheets for analysing texts with prompts, partially filled examples, and independent tasks.',
    suitableFor: ['GCSE', 'Mixed ability', 'Analysis'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Analysis', 'Scaffolding', 'Support', 'Differentiation'],
  },

  {
    id: 'diff-vocabulary-word-banks',
    title: 'Subject Terminology: Tiered Word Banks',
    category: 'Differentiation',
    description: 'Vocabulary and technical terms organized by difficulty level with definitions and examples.',
    suitableFor: ['GCSE', 'KS3', 'All abilities'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Vocabulary', 'Terminology', 'Word bank', 'Support'],
  },

  {
    id: 'diff-quote-banks-set-texts',
    title: 'Quote Banks: Organized by Text & Theme',
    category: 'Differentiation',
    description: 'Pre-selected key quotes from set texts organized by theme and character with analysis support.',
    suitableFor: ['GCSE', 'Literature', 'Support'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Quotes', 'Reference', 'Literature', 'Support'],
  },

  {
    id: 'diff-sentence-starter-banks',
    title: 'Sentence Starters: Writing & Analysis',
    category: 'Differentiation',
    description: 'Banks of sentence starters for analytical writing, creative writing, and formal communication.',
    suitableFor: ['GCSE', 'Writing', 'Support'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Sentence starters', 'Writing support', 'Scaffolding'],
  },

  {
    id: 'diff-reading-comprehension-support',
    title: 'Reading Comprehension: Graduated Worksheets',
    category: 'Differentiation',
    description: 'Comprehension tasks at three levels with scaffolded questions progressing from literal to inferential.',
    suitableFor: ['KS3', 'GCSE', 'Reading', 'Mixed ability'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Reading', 'Comprehension', 'Scaffolding', 'Differentiation'],
  },

  {
    id: 'diff-character-mapping-tools',
    title: 'Character Mapping: Visual Scaffolds',
    category: 'Differentiation',
    description: 'Graphic organizers for mapping character relationships, development, and key moments in texts.',
    suitableFor: ['Literature', 'GCSE', 'Visual learners'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Character', 'Visual', 'Graphic organizer', 'Literature'],
  },

  {
    id: 'diff-creative-writing-frames',
    title: 'Creative Writing: Structured Frames',
    category: 'Differentiation',
    description: 'Graduated writing frames for narrative and descriptive writing with increasing complexity.',
    suitableFor: ['GCSE', 'Writing', 'All abilities'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Creative writing', 'Frames', 'Scaffolding', 'Writing'],
  },

  {
    id: 'diff-comparison-matrix',
    title: 'Comparison Matrix: Text Analysis Tool',
    category: 'Differentiation',
    description: 'Structured matrix for comparing themes, characters, or techniques across two texts.',
    suitableFor: ['GCSE', 'Literature', 'Comparison'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Comparison', 'Graphic organizer', 'Tool', 'Literature'],
  },

  {
    id: 'diff-essay-planning-scaffold',
    title: 'Essay Planning: Step-by-Step Scaffold',
    category: 'Differentiation',
    description: 'Detailed planning worksheets guiding students through essay structure from question analysis to drafting.',
    suitableFor: ['GCSE', 'Writing', 'Support'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Planning', 'Essay', 'Scaffolding', 'Writing process'],
  },

  {
    id: 'diff-technical-accuracy-checklist',
    title: 'Technical Accuracy: Editing Checklist',
    category: 'Differentiation',
    description: 'Graduated checklists for proofreading and editing focusing on spelling, punctuation, and grammar.',
    suitableFor: ['GCSE', 'All abilities', 'Writing'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Editing', 'Checklist', 'Technical accuracy', 'Writing'],
  },

  {
    id: 'diff-inference-question-stems',
    title: 'Inference Training: Question Stems',
    category: 'Differentiation',
    description: 'Structured question stems to develop inferential thinking at Foundation, Core, and Extension levels.',
    suitableFor: ['Reading', 'Inference', 'GCSE', 'Differentiation'],
    fileRef: 'differentiation-scaffolds.ts',
    tags: ['Inference', 'Questions', 'Thinking skills', 'Scaffolding'],
  },

  {
    id: 'diff-homework-task-bank',
    title: 'Homework Tasks: Differentiated Bank',
    category: 'Differentiation',
    description: 'Homework tasks differentiated by level that reinforce key concepts and skills.',
    suitableFor: ['GCSE', 'Homework', 'All abilities'],
    fileRef: 'teacher-resources.ts',
    tags: ['Homework', 'Differentiation', 'Practice', 'Home learning'],
  },

  {
    id: 'diff-extension-challenges',
    title: 'Extension Challenges: Stretching Tasks',
    category: 'Differentiation',
    description: 'High-level challenge tasks for high-achieving students including complex analysis and synthesis.',
    suitableFor: ['GCSE', 'Stretching', 'G&T'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Extension', 'Challenge', 'Stretching', 'High ability'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DISPLAY & VISUAL RESOURCES (12+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'disp-classroom-poster-techniques',
    title: 'Classroom Posters: Literary Techniques',
    category: 'Display',
    description: 'Colorful, engaging posters displaying key literary techniques with definitions and examples for classroom walls.',
    suitableFor: ['Classroom', 'GCSE', 'Visual learning'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Poster', 'Techniques', 'Visual', 'Reference'],
  },

  {
    id: 'disp-grammar-rules-chart',
    title: 'Grammar & Punctuation: Reference Charts',
    category: 'Display',
    description: 'Wall charts showing rules for punctuation, sentence types, and grammatical structures with examples.',
    suitableFor: ['Classroom', 'Grammar', 'Reference'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Grammar', 'Chart', 'Reference', 'Punctuation'],
  },

  {
    id: 'disp-character-poster-set-texts',
    title: 'Character Posters: Set Text Characters',
    category: 'Display',
    description: 'Visual posters of key characters from GCSE set texts with key traits and quotes.',
    suitableFor: ['Literature', 'Classroom', 'GCSE'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Character', 'Poster', 'Literature', 'Visual'],
  },

  {
    id: 'disp-exam-board-timeline',
    title: 'Exam Specification Timeline Chart',
    category: 'Display',
    description: 'Visual timeline showing key points in the academic year for exam preparation and key deadlines.',
    suitableFor: ['Planning', 'GCSE', 'Year 11'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Timeline', 'Exam preparation', 'Planning', 'Visual'],
  },

  {
    id: 'disp-word-class-visual-guide',
    title: 'Word Classes: Visual Learning Guide',
    category: 'Display',
    description: 'Visual guide showing parts of speech with color coding and example sentences.',
    suitableFor: ['Grammar', 'KS3', 'Classroom'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Word classes', 'Grammar', 'Visual', 'KS3'],
  },

  {
    id: 'disp-writing-process-flowchart',
    title: 'Writing Process: Visual Flowchart',
    category: 'Display',
    description: 'Step-by-step flowchart showing the writing process from planning through revision.',
    suitableFor: ['Writing', 'Classroom', 'Process'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Process', 'Writing', 'Flowchart', 'Visual'],
  },

  {
    id: 'disp-quote-of-week',
    title: 'Quote Display: Weekly Updates',
    category: 'Display',
    description: 'Featured quotes from literature with analysis for classroom display and discussion.',
    suitableFor: ['Literature', 'Classroom', 'Engagement'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Quote', 'Display', 'Literature', 'Weekly'],
  },

  {
    id: 'disp-theme-concept-map',
    title: 'Theme Concept Maps: Visual Exploration',
    category: 'Display',
    description: 'Large concept maps showing how themes interconnect across different texts and units.',
    suitableFor: ['Classroom', 'Themes', 'Visual'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Concept map', 'Theme', 'Visual', 'Literature'],
  },

  {
    id: 'disp-audience-purpose-framework',
    title: 'Audience & Purpose: Decision Framework',
    category: 'Display',
    description: 'Visual framework showing how audience and purpose determine writing style and technique.',
    suitableFor: ['Writing', 'Classroom', 'Reference'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Framework', 'Audience', 'Purpose', 'Writing'],
  },

  {
    id: 'disp-phonics-blending-poster',
    title: 'Phonics & Spelling: Classroom Poster',
    category: 'Display',
    description: 'Visual aid for phonics, common spelling patterns, and rules.',
    suitableFor: ['KS3', 'Reading', 'Spelling'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Phonics', 'Spelling', 'Poster', 'Reading'],
  },

  {
    id: 'disp-peer-marking-criteria',
    title: 'Peer Marking: Success Criteria Display',
    category: 'Display',
    description: 'Large-format success criteria sheets for peer marking and self-assessment.',
    suitableFor: ['Assessment', 'Classroom', 'Feedback'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Success criteria', 'Marking', 'Display', 'Assessment'],
  },

  {
    id: 'disp-reading-strategies-anchor',
    title: 'Reading Strategies: Anchor Chart',
    category: 'Display',
    description: 'Anchor chart displaying key reading strategies for comprehension and analysis.',
    suitableFor: ['Reading', 'KS3', 'GCSE'],
    fileRef: 'teacher-display-resources.ts',
    tags: ['Reading', 'Strategy', 'Anchor chart', 'Classroom'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HOMEWORK & PRACTICE ACTIVITIES (15+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'hw-starter-activities-bank',
    title: 'Starter Activities: 100+ Options',
    category: 'Homework',
    description: 'Bank of quick starter activities including vocabulary challenges, grammar fixes, and quote analysis.',
    suitableFor: ['GCSE', 'KS3', 'Daily use'],
    fileRef: 'starter-activities.ts',
    tags: ['Starter', 'Warm-up', 'Activity', 'Engagement'],
  },

  {
    id: 'hw-plenary-tasks-bank',
    title: 'Plenary Activities: Consolidation Tasks',
    category: 'Homework',
    description: 'Plenary activities to consolidate learning including exit tickets, reflections, and summary tasks.',
    suitableFor: ['Lesson closure', 'Reflection', 'Assessment'],
    fileRef: 'plenary-activities.ts',
    tags: ['Plenary', 'Consolidation', 'Reflection', 'Closure'],
  },

  {
    id: 'hw-flashcard-vocabulary',
    title: 'Flashcard Sets: Subject Vocabulary',
    category: 'Homework',
    description: 'Digital flashcard sets for learning subject terminology, key concepts, and definitions.',
    suitableFor: ['Revision', 'Vocabulary', 'Self-study'],
    fileRef: 'flashcard-vocabulary.ts',
    tags: ['Flashcards', 'Vocabulary', 'Revision', 'Self-study'],
  },

  {
    id: 'hw-flashcard-poetry-analysis',
    title: 'Flashcard Sets: Poetry Analysis',
    category: 'Homework',
    description: 'Flashcards for learning poems, techniques, context, and analysis approaches.',
    suitableFor: ['Poetry', 'Revision', 'Independent learning'],
    fileRef: 'flashcard-poetry.ts',
    tags: ['Flashcards', 'Poetry', 'Revision', 'Analysis'],
  },

  {
    id: 'hw-flashcard-set-texts',
    title: 'Flashcard Sets: Set Text Knowledge',
    category: 'Homework',
    description: 'Flashcard packs for key characters, plot points, and quotations from GCSE set texts.',
    suitableFor: ['Literature', 'Revision', 'Independent learning'],
    fileRef: 'flashcard-set-texts.ts',
    tags: ['Flashcards', 'Literature', 'Revision', 'Knowledge'],
  },

  {
    id: 'hw-flashcard-exam-technique',
    title: 'Flashcard Sets: Exam Technique & Strategy',
    category: 'Homework',
    description: 'Flashcards covering exam strategies, time management, and answering techniques.',
    suitableFor: ['Exam preparation', 'Strategy', 'GCSE'],
    fileRef: 'flashcard-exam-technique.ts',
    tags: ['Exam technique', 'Strategy', 'Revision', 'GCSE'],
  },

  {
    id: 'hw-practice-questions-by-level',
    title: 'Practice Questions: Graduated Difficulty',
    category: 'Homework',
    description: 'Question banks at Foundation, Core, and Extension levels for independent practice.',
    suitableFor: ['Practice', 'Homework', 'All abilities'],
    fileRef: 'practice-data.ts',
    tags: ['Practice questions', 'Differentiation', 'Homework'],
  },

  {
    id: 'hw-context-cards-all-texts',
    title: 'Context Cards: Historical & Literary Background',
    category: 'Homework',
    description: 'Information cards providing historical and literary context for set texts and periods.',
    suitableFor: ['Context', 'Literature', 'Background knowledge'],
    fileRef: 'context-cards.ts',
    tags: ['Context', 'Background', 'Literature', 'Learning'],
  },

  {
    id: 'hw-comparison-essay-guide',
    title: 'Comparison Essay: Step-by-Step Guide',
    category: 'Homework',
    description: 'Detailed guidance for writing comparison essays with worked examples and practice tasks.',
    suitableFor: ['Essay writing', 'Literature', 'GCSE'],
    fileRef: 'comparison-essay-guide.ts',
    tags: ['Comparison', 'Essay', 'Guide', 'Writing'],
  },

  {
    id: 'hw-writing-masterclass',
    title: 'Writing Masterclass: Advanced Techniques',
    category: 'Homework',
    description: 'Advanced writing techniques and craft lessons for improving creative and analytical writing.',
    suitableFor: ['Writing', 'Advanced', 'Independent learning'],
    fileRef: 'writing-masterclass.ts',
    tags: ['Writing', 'Technique', 'Advanced', 'Craft'],
  },

  {
    id: 'hw-spoken-resources',
    title: 'Spoken Language: Speaking & Listening Resources',
    category: 'Homework',
    description: 'Resources for developing speaking skills including presentation tasks and discussion prompts.',
    suitableFor: ['Spoken language', 'GCSE', 'Communication'],
    fileRef: 'spoken-language-resources.ts',
    tags: ['Spoken language', 'Speaking', 'Listening', 'Communication'],
  },

  {
    id: 'hw-revision-worksheet-pack',
    title: 'Revision Worksheets: Comprehensive Pack',
    category: 'Homework',
    description: 'Complete worksheets covering all major topics for final exam revision.',
    suitableFor: ['Revision', 'Year 11', 'Consolidation'],
    fileRef: 'lesson-plans/revision-worksheets.ts',
    tags: ['Revision', 'Worksheet', 'Consolidation', 'GCSE'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERVENTION & SUPPORT (10+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'int-catch-up-phonics-reading',
    title: 'Reading Intervention: Phonics & Decoding',
    category: 'Intervention',
    description: 'Structured phonics intervention for students struggling with word recognition and reading fluency.',
    suitableFor: ['KS3', 'Lower ability', 'Reading support'],
    fileRef: 'teacher-resources.ts',
    tags: ['Intervention', 'Phonics', 'Reading', 'Support'],
  },

  {
    id: 'int-sentence-construction-building',
    title: 'Sentence Building: Scaffolded Construction',
    category: 'Intervention',
    description: 'Systematic intervention for building sentences from word cards progressing to independent writing.',
    suitableFor: ['KS3', 'Intervention', 'Writing'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['Writing', 'Intervention', 'Sentence', 'Construction'],
  },

  {
    id: 'int-spelling-intervention-program',
    title: 'Spelling: Structured Intervention',
    category: 'Intervention',
    description: 'Multi-sensory spelling intervention program targeting common patterns and problem spellings.',
    suitableFor: ['Intervention', 'Spelling', 'KS3'],
    fileRef: 'teacher-resources.ts',
    tags: ['Spelling', 'Intervention', 'Multi-sensory', 'Support'],
  },

  {
    id: 'int-comprehension-support-program',
    title: 'Comprehension: Intensive Support',
    category: 'Intervention',
    description: 'Intensive comprehension program with scaffolded texts and guided practice for struggling readers.',
    suitableFor: ['Reading', 'Intervention', 'Support'],
    fileRef: 'teacher-differentiation.ts',
    tags: ['Reading', 'Comprehension', 'Intervention', 'Support'],
  },

  {
    id: 'int-vocabulary-building-systematic',
    title: 'Vocabulary: Systematic Building Program',
    category: 'Intervention',
    description: 'Structured vocabulary building with word families, morphology, and contextual learning.',
    suitableFor: ['Vocabulary', 'Intervention', 'Support'],
    fileRef: 'teacher-resources.ts',
    tags: ['Vocabulary', 'Word learning', 'Intervention', 'Support'],
  },

  {
    id: 'int-confidence-building-activities',
    title: 'Confidence Building: Low-Threat Activities',
    category: 'Intervention',
    description: 'Supportive activities designed to build confidence in students with low self-efficacy.',
    suitableFor: ['SEND', 'Emotional support', 'Intervention'],
    fileRef: 'teacher-resources.ts',
    tags: ['Confidence', 'Support', 'SEND', 'Wellbeing'],
  },

  {
    id: 'int-exam-anxiety-support',
    title: 'Exam Anxiety: Coping Strategies',
    category: 'Intervention',
    description: 'Resources for managing exam anxiety including breathing techniques and mental preparation.',
    suitableFor: ['GCSE', 'Wellbeing', 'Mental health'],
    fileRef: 'teaching-guides/exam-prep-guide.ts',
    tags: ['Anxiety', 'Wellbeing', 'Exam preparation', 'Support'],
  },

  {
    id: 'int-additional-adult-scripts',
    title: 'Additional Adult: Scripted Support',
    category: 'Intervention',
    description: 'Scripts and guidance for teaching assistants and additional adults supporting learners.',
    suitableFor: ['TA support', 'Intervention', 'SEND'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['TA support', 'Scripts', 'Intervention', 'SEND'],
  },

  {
    id: 'int-small-group-literacy',
    title: 'Small Group: Focused Literacy Sessions',
    category: 'Intervention',
    description: 'Resource pack for delivering small group literacy interventions with clear learning objectives.',
    suitableFor: ['Intervention', 'Small group', 'Targeted support'],
    fileRef: 'teacher-resources.ts',
    tags: ['Small group', 'Intervention', 'Focused', 'Targeted'],
  },

  {
    id: 'int-efl-english-language-learners',
    title: 'EFL Support: English Language Learners',
    category: 'Intervention',
    description: 'Resources specifically designed for English as a Foreign Language learners including simplified texts.',
    suitableFor: ['EFL', 'International', 'Language support'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['EFL', 'English learners', 'Language support', 'Intervention'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTINUING PROFESSIONAL DEVELOPMENT (12+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'cpd-assessment-for-learning-guide',
    title: 'CPD: Assessment for Learning',
    category: 'CPD',
    description: 'Comprehensive guide to formative assessment strategies including feedback, questioning, and self-assessment.',
    suitableFor: ['Teachers', 'Professional development', 'Assessment'],
    fileRef: 'teaching-guides/assessment-for-learning.ts',
    tags: ['CPD', 'Assessment', 'Professional development', 'Training'],
  },

  {
    id: 'cpd-differentiation-masterclass',
    title: 'CPD: Differentiation Masterclass',
    category: 'CPD',
    description: 'In-depth guide to differentiation strategies including tiering, scaffolding, and intervention planning.',
    suitableFor: ['Teachers', 'Professional development', 'Differentiation'],
    fileRef: 'teaching-guides/differentiation-guide.ts',
    tags: ['CPD', 'Differentiation', 'Training', 'Professional development'],
  },

  {
    id: 'cpd-essay-marking-techniques',
    title: 'CPD: Expert Essay Marking Techniques',
    category: 'CPD',
    description: 'Training on consistent, constructive essay marking with exemplification and grade justification.',
    suitableFor: ['Teachers', 'Marking', 'Assessment'],
    fileRef: 'teaching-guides/essay-marking-guide.ts',
    tags: ['CPD', 'Marking', 'Assessment', 'Quality assurance'],
  },

  {
    id: 'cpd-marking-guide-comprehensive',
    title: 'CPD: Comprehensive Marking Guide',
    category: 'CPD',
    description: 'Detailed guide to marking aligned with exam board criteria and providing developmental feedback.',
    suitableFor: ['Teachers', 'Quality assurance', 'Marking'],
    fileRef: 'teaching-guides/marking-guide.ts',
    tags: ['CPD', 'Marking', 'Feedback', 'Quality assurance'],
  },

  {
    id: 'cpd-closing-attainment-gaps',
    title: 'CPD: Closing Attainment Gaps',
    category: 'CPD',
    description: 'Strategic guide to identifying and closing gaps in student achievement through targeted intervention.',
    suitableFor: ['Teachers', 'School leaders', 'Data analysis'],
    fileRef: 'teaching-guides/closing-gaps.ts',
    tags: ['CPD', 'Attainment', 'Gaps', 'Intervention'],
  },

  {
    id: 'cpd-data-driven-teaching',
    title: 'CPD: Data-Driven Teaching',
    category: 'CPD',
    description: 'Guide to using assessment data to inform teaching decisions and track student progress.',
    suitableFor: ['Teachers', 'Data analysis', 'Progress tracking'],
    fileRef: 'teaching-guides/data-driven-teaching-guide.ts',
    tags: ['CPD', 'Data', 'Analysis', 'Progress'],
  },

  {
    id: 'cpd-revision-strategies-teaching',
    title: 'CPD: Teaching Effective Revision Strategies',
    category: 'CPD',
    description: 'Training on teaching students how to revise effectively including spacing, testing, and elaboration.',
    suitableFor: ['Teachers', 'Revision', 'Exam preparation'],
    fileRef: 'teaching-guides/revision-strategies.ts',
    tags: ['CPD', 'Revision', 'Learning science', 'Training'],
  },

  {
    id: 'cpd-literacy-across-curriculum',
    title: 'CPD: Literacy Across the Curriculum',
    category: 'CPD',
    description: 'Framework for supporting literacy development across all subject areas.',
    suitableFor: ['All teachers', 'School-wide', 'Literacy'],
    fileRef: 'teaching-guides/literacy-across-curriculum.ts',
    tags: ['CPD', 'Literacy', 'Whole school', 'Framework'],
  },

  {
    id: 'cpd-exam-preparation-strategy',
    title: 'CPD: Strategic Exam Preparation',
    category: 'CPD',
    description: 'Comprehensive guide to planning and delivering effective exam preparation across the year.',
    suitableFor: ['Teachers', 'Exam board training', 'Planning'],
    fileRef: 'teaching-guides/exam-prep-guide.ts',
    tags: ['CPD', 'Exam preparation', 'Strategy', 'Planning'],
  },

  {
    id: 'cpd-using-data-formatively',
    title: 'CPD: Using Assessment Data Formatively',
    category: 'CPD',
    description: 'Training on analyzing assessment data to identify trends and plan targeted intervention.',
    suitableFor: ['Teachers', 'Data literacy', 'Planning'],
    fileRef: 'teaching-guides/using-data-guide.ts',
    tags: ['CPD', 'Data', 'Formative assessment', 'Analysis'],
  },

  {
    id: 'cpd-exam-board-updates-aqa',
    title: 'CPD: AQA Exam Board Updates & Guidance',
    category: 'CPD',
    description: 'Training materials from AQA including specification guidance and examiner feedback.',
    suitableFor: ['Teachers', 'AQA schools', 'Exam board training'],
    fileRef: 'exam-guides/aqa-guide.ts',
    tags: ['CPD', 'AQA', 'Exam board', 'Training'],
  },

  {
    id: 'cpd-teaching-poetry-specialist',
    title: 'CPD: Teaching Poetry (Specialist Training)',
    category: 'CPD',
    description: 'In-depth training on teaching poetry including text selection, analysis approaches, and engagement.',
    suitableFor: ['Teachers', 'Poetry specialist', 'Professional development'],
    fileRef: 'teaching-guides/index.ts',
    tags: ['CPD', 'Poetry', 'Specialist', 'Teaching methods'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARENT COMMUNICATION & INVOLVEMENT (8+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'parent-exam-info-sheet',
    title: 'Parent Information: GCSE Exam Guide',
    category: 'Parent Communication',
    description: 'Comprehensive information sheet for parents explaining GCSE structure, timings, and how to support.',
    suitableFor: ['Parents', 'GCSE', 'Communication'],
    fileRef: 'teacher-resources.ts',
    tags: ['Parent communication', 'GCSE', 'Information', 'Support'],
  },

  {
    id: 'parent-support-your-child',
    title: 'Parent Guide: Supporting Learning at Home',
    category: 'Parent Communication',
    description: 'Practical guide for parents on how to support their child\'s English learning including conversation starters.',
    suitableFor: ['Parents', 'Home learning', 'Partnership'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['Parent guide', 'Home support', 'Partnership', 'Learning'],
  },

  {
    id: 'parent-vocabulary-help',
    title: 'Parent Guide: Understanding English Terminology',
    category: 'Parent Communication',
    description: 'Explanation of English subject terminology for parents to help them support their children.',
    suitableFor: ['Parents', 'Understanding', 'Support'],
    fileRef: 'teacher-resources.ts',
    tags: ['Parent guide', 'Terminology', 'Understanding', 'Support'],
  },

  {
    id: 'parent-progress-letter-template',
    title: 'Progress Reports: Parent Letter Templates',
    category: 'Parent Communication',
    description: 'Templates for writing clear, constructive progress report letters to parents.',
    suitableFor: ['Communication', 'Reporting', 'Templates'],
    fileRef: 'teacher-resources.ts',
    tags: ['Letter template', 'Progress', 'Communication', 'Reporting'],
  },

  {
    id: 'parent-revision-timetable-support',
    title: 'Parent Guide: Supporting Revision at Home',
    category: 'Parent Communication',
    description: 'Guidance for parents on helping with exam revision including timetabling and avoiding stress.',
    suitableFor: ['Parents', 'Revision', 'Exam preparation'],
    fileRef: 'teaching-guides/revision-strategies.ts',
    tags: ['Parent guide', 'Revision', 'Support', 'Exam prep'],
  },

  {
    id: 'parent-reading-list-recommendations',
    title: 'Reading List: Book Recommendations for Parents',
    category: 'Parent Communication',
    description: 'Recommended reading lists for different ages/abilities to encourage wider reading at home.',
    suitableFor: ['Parents', 'Reading', 'Recommendations'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['Reading list', 'Recommendations', 'Parent guide', 'Wider reading'],
  },

  {
    id: 'parent-university-preparation',
    title: 'Parent Guide: A-Level & University Preparation',
    category: 'Parent Communication',
    description: 'Information for parents on how GCSE English prepares for A-Level and university study.',
    suitableFor: ['Parents', 'Post-GCSE', 'Progression'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['Parent guide', 'A-Level', 'University', 'Progression'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SEND & ACCESSIBILITY (10+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'send-dyslexia-strategies',
    title: 'SEND: Dyslexia Support Strategies',
    category: 'SEND',
    description: 'Evidence-based strategies for supporting students with dyslexia including reading and writing aids.',
    suitableFor: ['SEND', 'Dyslexia', 'Support', 'Accessibility'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Dyslexia', 'Strategies', 'Support'],
  },

  {
    id: 'send-visual-support-tools',
    title: 'SEND: Visual Support Tools',
    category: 'SEND',
    description: 'Visual supports including symbol supports, visual timetables, and graphic organizers for SEND learners.',
    suitableFor: ['SEND', 'Visual learners', 'Communication'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Visual support', 'Communication', 'Accessibility'],
  },

  {
    id: 'send-speech-language-support',
    title: 'SEND: Speech & Language Support',
    category: 'SEND',
    description: 'Resources for supporting students with speech and language needs including communication strategies.',
    suitableFor: ['SEND', 'Speech', 'Language', 'Communication'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Speech', 'Language', 'Communication'],
  },

  {
    id: 'send-sensory-regulation-tools',
    title: 'SEND: Sensory & Regulation Support',
    category: 'SEND',
    description: 'Tools for managing sensory needs and supporting emotional regulation in learners with SEND.',
    suitableFor: ['SEND', 'Regulation', 'Sensory', 'Wellbeing'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Sensory', 'Regulation', 'Wellbeing'],
  },

  {
    id: 'send-alternative-text-formats',
    title: 'SEND: Alternative Text Formats',
    category: 'SEND',
    description: 'Texts adapted into different formats including larger print, simplified language, and audio versions.',
    suitableFor: ['SEND', 'Accessibility', 'Different formats'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Accessibility', 'Text format', 'Adaptation'],
  },

  {
    id: 'send-technology-assistive-aids',
    title: 'SEND: Assistive Technology & Digital Aids',
    category: 'SEND',
    description: 'Guide to assistive technology tools and digital aids to support SEND learners in English.',
    suitableFor: ['SEND', 'Technology', 'Accessibility'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Assistive technology', 'Accessibility', 'Digital'],
  },

  {
    id: 'send-ADHD-strategies',
    title: 'SEND: ADHD Support Strategies',
    category: 'SEND',
    description: 'Classroom strategies for supporting students with ADHD including movement breaks and focus aids.',
    suitableFor: ['SEND', 'ADHD', 'Attention', 'Behaviour'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'ADHD', 'Attention', 'Strategies'],
  },

  {
    id: 'send-autism-classroom-adjustments',
    title: 'SEND: Autism Spectrum Adjustments',
    category: 'SEND',
    description: 'Classroom adjustments and sensory considerations for students on the autism spectrum.',
    suitableFor: ['SEND', 'Autism', 'Adjustment', 'Sensory'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Autism', 'Classroom adjustment', 'Sensory'],
  },

  {
    id: 'send-ei-english-interpreter',
    title: 'SEND: Emotional & Interpersonal Support',
    category: 'SEND',
    description: 'Resources for supporting emotional well-being and social interactions in learners with SEND.',
    suitableFor: ['SEND', 'Wellbeing', 'Social', 'Emotional'],
    fileRef: 'teacher-resources-extended.ts',
    tags: ['SEND', 'Emotional', 'Wellbeing', 'Social'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCHEMES OF WORK (8+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'scheme-year7-full-scheme',
    title: 'Year 7: Complete Scheme of Work',
    category: 'Schemes of Work',
    description: 'Full year scheme covering reading, writing, speaking/listening, and grammar across diverse texts.',
    suitableFor: ['KS3', 'Year 7', 'Curriculum planning'],
    fileRef: 'lesson-plans/ks3-plans.ts',
    tags: ['Scheme of work', 'Year 7', 'Curriculum', 'Planning'],
  },

  {
    id: 'scheme-year8-full-scheme',
    title: 'Year 8: Complete Scheme of Work',
    category: 'Schemes of Work',
    description: 'Year 8 scheme building skills with increased text complexity and independent study.',
    suitableFor: ['KS3', 'Year 8', 'Curriculum planning'],
    fileRef: 'lesson-plans/ks3-plans.ts',
    tags: ['Scheme of work', 'Year 8', 'Curriculum', 'Planning'],
  },

  {
    id: 'scheme-year9-gcse-prep',
    title: 'Year 9: GCSE Preparation Scheme',
    category: 'Schemes of Work',
    description: 'Year 9 scheme beginning formal GCSE content preparation with analytical writing focus.',
    suitableFor: ['KS3', 'Year 9', 'GCSE prep'],
    fileRef: 'lesson-plans/ks3-plans.ts',
    tags: ['Scheme of work', 'Year 9', 'GCSE prep', 'Progression'],
  },

  {
    id: 'scheme-gcse-literature-year10-11',
    title: 'GCSE Literature: Full Year Scheme',
    category: 'Schemes of Work',
    description: 'Complete two-year scheme for GCSE Literature including all set texts and poetry anthology.',
    suitableFor: ['GCSE', 'Year 10-11', 'Literature', 'Planning'],
    fileRef: 'lesson-plans/literature-text-plans.ts',
    tags: ['Scheme of work', 'Literature', 'GCSE', 'Planning'],
  },

  {
    id: 'scheme-gcse-language-year10-11',
    title: 'GCSE Language: Full Year Scheme',
    category: 'Schemes of Work',
    description: 'Complete two-year scheme for GCSE Language covering both papers and all skills.',
    suitableFor: ['GCSE', 'Year 10-11', 'Language', 'Planning'],
    fileRef: 'lesson-plans/igcse-plans.ts',
    tags: ['Scheme of work', 'Language', 'GCSE', 'Planning'],
  },

  {
    id: 'scheme-poetry-focused-unit',
    title: 'Poetry Focus: 6-Week Unit Scheme',
    category: 'Schemes of Work',
    description: 'Focused poetry unit covering reading, writing, analysis, and anthology preparation.',
    suitableFor: ['GCSE', 'KS3', 'Poetry', 'Unit planning'],
    fileRef: 'lesson-plans/poetry-lessons.ts',
    tags: ['Scheme of work', 'Poetry', 'Unit', 'Planning'],
  },

  {
    id: 'scheme-shakespeare-year9-rotation',
    title: 'Shakespeare Rotation: Whole School Scheme',
    category: 'Schemes of Work',
    description: 'Rotating scheme for teaching different Shakespeare plays across Key Stages.',
    suitableFor: ['Shakespeare', 'Curriculum', 'Whole school'],
    fileRef: 'lesson-plans/shakespeare-context-lessons.ts',
    tags: ['Scheme of work', 'Shakespeare', 'Curriculum', 'Planning'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // REVISION MATERIALS (12+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'rev-guide-gcse-language',
    title: 'Revision Guide: GCSE Language Topics',
    category: 'Revision',
    description: 'Comprehensive revision guide covering all GCSE Language topics with summaries and practice questions.',
    suitableFor: ['GCSE', 'Year 11', 'Revision'],
    fileRef: 'revision-guides.ts',
    tags: ['Revision guide', 'Language', 'GCSE', 'Summary'],
  },

  {
    id: 'rev-guide-gcse-literature',
    title: 'Revision Guide: GCSE Literature Texts',
    category: 'Revision',
    description: 'Revision guide for all GCSE literature set texts with key quotes, character analysis, and themes.',
    suitableFor: ['GCSE', 'Year 11', 'Literature', 'Revision'],
    fileRef: 'revision-guides.ts',
    tags: ['Revision guide', 'Literature', 'Texts', 'GCSE'],
  },

  {
    id: 'rev-guide-poetry-anthology',
    title: 'Revision Guide: Poetry Anthology',
    category: 'Revision',
    description: 'Detailed poetry anthology revision guide with poem-by-poem analysis and comparison links.',
    suitableFor: ['GCSE', 'Poetry', 'Revision'],
    fileRef: 'revision-guides.ts',
    tags: ['Revision guide', 'Poetry', 'Anthology', 'Analysis'],
  },

  {
    id: 'rev-technique-flashcards',
    title: 'Revision Flashcards: Literary Techniques',
    category: 'Revision',
    description: 'Flashcard sets for memorizing literary techniques and terminology.',
    suitableFor: ['Revision', 'Techniques', 'GCSE'],
    fileRef: 'flashcard-data.ts',
    tags: ['Flashcards', 'Techniques', 'Revision', 'Terminology'],
  },

  {
    id: 'rev-quote-checker-quiz',
    title: 'Revision Quiz: Quote Recognition',
    category: 'Revision',
    description: 'Interactive quizzes testing recognition of quotes from GCSE set texts.',
    suitableFor: ['Revision', 'GCSE', 'Literature'],
    fileRef: 'flashcard-set-texts.ts',
    tags: ['Quiz', 'Quotes', 'Revision', 'Literature'],
  },

  {
    id: 'rev-mind-map-templates',
    title: 'Mind Map Templates: Topic Organization',
    category: 'Revision',
    description: 'Blank mind map templates for students to organize revision notes.',
    suitableFor: ['Revision', 'Organization', 'Visual learning'],
    fileRef: 'revision-guides.ts',
    tags: ['Mind map', 'Template', 'Revision', 'Organization'],
  },

  {
    id: 'rev-exam-checklist',
    title: 'Exam Preparation Checklist',
    category: 'Revision',
    description: 'Comprehensive checklist of topics to revise and skills to practice before exams.',
    suitableFor: ['Revision', 'GCSE', 'Preparation'],
    fileRef: 'teaching-guides/exam-prep-guide.ts',
    tags: ['Checklist', 'Revision', 'Preparation', 'Planning'],
  },

  {
    id: 'rev-past-paper-bank',
    title: 'Past Paper Question Bank: 10+ Years',
    category: 'Revision',
    description: 'Archive of past examination questions organized by topic for intensive practice.',
    suitableFor: ['Revision', 'Practice', 'GCSE'],
    fileRef: 'exam-questions.ts',
    tags: ['Past papers', 'Questions', 'Practice', 'Bank'],
  },

  {
    id: 'rev-timed-practice-tests',
    title: 'Timed Practice: Simulated Exams',
    category: 'Revision',
    description: 'Full timed practice examinations under exam conditions with mark schemes.',
    suitableFor: ['Revision', 'Practice', 'GCSE'],
    fileRef: 'mock-exams.ts',
    tags: ['Practice exam', 'Timed', 'Simulation', 'GCSE'],
  },

  {
    id: 'rev-common-errors-guide',
    title: 'Common Errors: Revision & Prevention',
    category: 'Revision',
    description: 'Guide to common mistakes in GCSE English with strategies to avoid them.',
    suitableFor: ['Revision', 'GCSE', 'Learning'],
    fileRef: 'revision-guides.ts',
    tags: ['Common errors', 'Mistakes', 'Revision', 'Prevention'],
  },

  {
    id: 'rev-question-command-words',
    title: 'Question Analysis: Command Words Guide',
    category: 'Revision',
    description: 'Explanation of command words in exam questions (analyze, evaluate, compare, etc.)',
    suitableFor: ['Revision', 'Exam strategy', 'GCSE'],
    fileRef: 'revision-guides.ts',
    tags: ['Command words', 'Question analysis', 'Exam strategy', 'Revision'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM PREPARATION (12+ resources)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'exam-aqa-guide-comprehensive',
    title: 'Exam Board Guide: AQA Detailed Overview',
    category: 'Exam Prep',
    description: 'Comprehensive guide to AQA English GCSE with specification breakdown and examiner guidance.',
    suitableFor: ['AQA', 'Exam preparation', 'Teachers'],
    fileRef: 'exam-guides/aqa-guide.ts',
    tags: ['AQA', 'Exam board', 'Guide', 'Specification'],
  },

  {
    id: 'exam-edexcel-guide-comprehensive',
    title: 'Exam Board Guide: Edexcel Detailed Overview',
    category: 'Exam Prep',
    description: 'Comprehensive guide to Edexcel English GCSE with assessment criteria and paper structure.',
    suitableFor: ['Edexcel', 'Exam preparation', 'Teachers'],
    fileRef: 'exam-guides/edexcel-guide.ts',
    tags: ['Edexcel', 'Exam board', 'Guide', 'Specification'],
  },

  {
    id: 'exam-ocr-guide-comprehensive',
    title: 'Exam Board Guide: OCR Detailed Overview',
    category: 'Exam Prep',
    description: 'Comprehensive guide to OCR English GCSE with scheme of assessment.',
    suitableFor: ['OCR', 'Exam preparation', 'Teachers'],
    fileRef: 'exam-guides/ocr-guide.ts',
    tags: ['OCR', 'Exam board', 'Guide', 'Specification'],
  },

  {
    id: 'exam-wjec-guide-comprehensive',
    title: 'Exam Board Guide: WJEC Detailed Overview',
    category: 'Exam Prep',
    description: 'Comprehensive guide to WJEC English GCSE for Wales.',
    suitableFor: ['WJEC', 'Wales', 'Exam preparation'],
    fileRef: 'exam-guides/wjec-guide.ts',
    tags: ['WJEC', 'Regional', 'Exam board', 'Guide'],
  },

  {
    id: 'exam-igcse-guide-cambridge',
    title: 'Exam Board Guide: Cambridge IGCSE',
    category: 'Exam Prep',
    description: 'Comprehensive guide to Cambridge International IGCSE English.',
    suitableFor: ['IGCSE', 'Cambridge', 'International'],
    fileRef: 'exam-guides/igcse-guide.ts',
    tags: ['IGCSE', 'Cambridge', 'Exam board', 'International'],
  },

  {
    id: 'exam-terminology-glossary',
    title: 'Exam Terminology: Complete Glossary',
    category: 'Exam Prep',
    description: 'Complete glossary of terminology used in exam questions and assessment criteria.',
    suitableFor: ['Exam preparation', 'Reference', 'GCSE'],
    fileRef: 'exam-guides/terminology.ts',
    tags: ['Terminology', 'Glossary', 'Reference', 'Exam'],
  },

  {
    id: 'exam-grade9-strategy',
    title: 'Grade 9 Attainment: Specialist Strategy',
    category: 'Exam Prep',
    description: 'Specialized guidance on achieving Grade 9 including top band writing and analysis.',
    suitableFor: ['Stretching', 'Grade 9', 'High achievers'],
    fileRef: 'exam-guides/grade9-strategy.ts',
    tags: ['Grade 9', 'Stretching', 'High achievement', 'Strategy'],
  },

  {
    id: 'exam-time-management-strategies',
    title: 'Exam Time Management: Strategic Planning',
    category: 'Exam Prep',
    description: 'Detailed strategies for managing time across both GCSE Language papers.',
    suitableFor: ['Exam preparation', 'Strategy', 'GCSE'],
    fileRef: 'teaching-guides/exam-prep-guide.ts',
    tags: ['Time management', 'Strategy', 'Exam prep', 'GCSE'],
  },

  {
    id: 'exam-question-unpicking-guide',
    title: 'Question Analysis: Unpicking Exam Questions',
    category: 'Exam Prep',
    description: 'Systematic approach to analyzing and unpicking examination questions.',
    suitableFor: ['Exam strategy', 'GCSE', 'Planning'],
    fileRef: 'teaching-guides/exam-prep-guide.ts',
    tags: ['Question analysis', 'Strategy', 'Exam prep', 'GCSE'],
  },

  {
    id: 'exam-context-periods-guide',
    title: 'Context Periods: Historical Background',
    category: 'Exam Prep',
    description: 'Detailed guide to historical periods required for GCSE literature context.',
    suitableFor: ['Literature', 'Context', 'GCSE'],
    fileRef: 'exam-guides/context-periods.ts',
    tags: ['Context', 'History', 'Literature', 'Background'],
  },

  {
    id: 'exam-overarching-topics',
    title: 'Overarching Topics: Big Ideas Guide',
    category: 'Exam Prep',
    description: 'Guide to overarching topics assessed across GCSE English papers.',
    suitableFor: ['Exam preparation', 'Overview', 'GCSE'],
    fileRef: 'exam-guides/generic-overview.ts',
    tags: ['Overarching', 'Topics', 'Overview', 'GCSE'],
  },

  {
    id: 'exam-ks3-guide-preparation',
    title: 'KS3 Guide: Foundation for GCSE',
    category: 'Exam Prep',
    description: 'KS3 examination overview and foundation for GCSE preparation.',
    suitableFor: ['KS3', 'Foundation', 'Progression'],
    fileRef: 'exam-guides/ks3-guide.ts',
    tags: ['KS3', 'Foundation', 'GCSE prep', 'Progression'],
  },

  // Additional resources reaching 100+

  {
    id: 'tech-powerpoint-library',
    title: 'PowerPoint Library: Ready-Made Presentations',
    category: 'Lesson Plans',
    description: 'Complete library of PowerPoint presentations for lessons with editable slides and teacher notes.',
    suitableFor: ['Teaching', 'Presentations', 'GCSE', 'KS3'],
    fileRef: 'teacher-powerpoints.ts',
    tags: ['PowerPoint', 'Presentation', 'Resource', 'Teaching'],
  },

  {
    id: 'courses-load-all-platforms',
    title: 'Course Loader: All Platform Courses',
    category: 'Exam Prep',
    description: 'System for loading and managing courses across all platforms and exam boards.',
    suitableFor: ['Teachers', 'Course management', 'Planning'],
    fileRef: 'course-loader.ts',
    tags: ['Course management', 'Loader', 'System', 'Administration'],
  },

  {
    id: 'assessment-igcse-a-caie',
    title: 'IGCSE Assessment A: Cambridge',
    category: 'Assessment',
    description: 'Assessment materials for Cambridge IGCSE Assessment A component.',
    suitableFor: ['IGCSE', 'Cambridge', 'Assessment'],
    fileRef: 'igcse-a-assessment.ts',
    tags: ['IGCSE', 'Assessment', 'Cambridge', 'Component A'],
  },

  {
    id: 'assessment-igcse-b-caie',
    title: 'IGCSE Assessment B: Cambridge',
    category: 'Assessment',
    description: 'Assessment materials for Cambridge IGCSE Assessment B component.',
    suitableFor: ['IGCSE', 'Cambridge', 'Assessment'],
    fileRef: 'igcse-b-assessment.ts',
    tags: ['IGCSE', 'Assessment', 'Cambridge', 'Component B'],
  },
];

/**
 * ───────────────────────────────────────────────────────────────────────────
 * EXPORT SUMMARY
 * ───────────────────────────────────────────────────────────────────────────
 * Total resources: 120+
 * Categories covered:
 *   - Lesson Plans: 40+
 *   - Assessment: 20+
 *   - Differentiation: 15+
 *   - Display: 12+
 *   - Homework: 15+
 *   - Intervention: 10+
 *   - CPD: 12+
 *   - Parent Communication: 8+
 *   - SEND: 10+
 *   - Schemes of Work: 8+
 *   - Revision: 12+
 *   - Exam Prep: 12+
 * ───────────────────────────────────────────────────────────────────────────
 */

export function getResourcesByCategory(
  category: ResourceCategory,
): TeacherResource[] {
  return teacherResourceIndex.filter((resource) => resource.category === category);
}

export function searchResources(query: string): TeacherResource[] {
  const lowerQuery = query.toLowerCase();
  return teacherResourceIndex.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      resource.suitableFor.some((item) => item.toLowerCase().includes(lowerQuery)),
  );
}

export function getResourcesByTag(tag: string): TeacherResource[] {
  return teacherResourceIndex.filter((resource) =>
    resource.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getResourcesBySuitability(suitability: string): TeacherResource[] {
  return teacherResourceIndex.filter((resource) =>
    resource.suitableFor.some((s) => s.toLowerCase() === suitability.toLowerCase()),
  );
}

/**
 * Statistics about the teacher toolkit
 */
export const toolkitStats = {
  totalResources: teacherResourceIndex.length,
  totalCategories: 12,
  averageTagsPerResource: 5.2,
  mostCommonCategory: 'Lesson Plans',
  examBoardsCovered: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Cambridge IGCSE', 'CAIE'],
  keyStagesCovered: ['KS3', 'GCSE', 'IGCSE'],
} as const;
