/**
 * Khaleeji (Gulf) Arabic translations - `study.skills.*` namespace.
 *
 * Scope: UI CHROME ONLY on the GCSE study-resource pages under
 *   src/app/resources/{writing-skills,model-answers,exam-technique,
 *   spoken-language,study-tools,teacher-library}/**
 *
 * This shard deliberately contains NO study/teaching content: no model
 * answers, examiner commentary, lesson-plan or worksheet teaching
 * material, quotations, or analysis. Only navigational chrome,
 * breadcrumbs, buttons/CTAs, short generic section/label headings,
 * hero/intro marketing copy, and resource-card chrome.
 *
 * Brand + technical terms stay in Latin script even inside Arabic
 * (standard Gulf convention): The English Hub, GCSE/IGCSE, exam boards
 * (AQA, Edexcel, OCR, Eduqas, Cambridge), AO1-AO6, Grade N, KS3/KS4,
 * SPaG, PEE/PEEL, AFOREST/DAFOREST, SMILE, £, numbers, text/author
 * names, and literary/linguistic terms.
 *
 * Register: Khaleeji, not MSA/Levantine. شنو/أبغى/وايد/الحين/إحنا/روح/
 * شوف/دوّر/سكّر/ببلاش. Banned: شو, بحكي, كيفك, ليش.
 *
 * Annotated as Record (NOT `as const`) so the lookup chain in
 * dictionary.ts can consume it uniformly. Wiring into dictionary.ts is
 * handled separately.
 */

export const STUDY_SKILLS_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Shared chrome (recurring across study pages) ────────────────
  'study.skills.common.bc.home': { en: 'Home', ar: 'الرئيسية' },
  'study.skills.common.bc.resources': { en: 'Resources', ar: 'المصادر' },
  'study.skills.common.contents': { en: 'Contents', ar: 'المحتويات' },
  'study.skills.common.examiner_commentary': {
    en: 'Examiner Commentary',
    ar: 'تعليق المصحّح',
  },
  'study.skills.common.start_learning': { en: 'Start learning', ar: 'ابدأ التعلّم' },
  'study.skills.common.download_pdf': { en: 'Download as PDF', ar: 'حمّله PDF' },
  'study.skills.common.pdf_coming_soon': {
    en: 'PDF export coming soon',
    ar: 'تصدير PDF قريب',
  },
  'study.skills.common.tl': { en: 'Teacher Library', ar: 'مكتبة المعلّم' },

  // Teacher-library resource-card field labels (chrome)
  'study.skills.common.year_group': { en: 'Year Group', ar: 'المرحلة الدراسية' },
  'study.skills.common.format': { en: 'Format', ar: 'الصيغة' },
  'study.skills.common.objective': { en: 'Objective', ar: 'الهدف' },
  'study.skills.common.exam_board': { en: 'Exam Board', ar: 'هيئة الامتحان' },
  'study.skills.common.use_as': { en: 'Use as', ar: 'استخدمه كـ' },

  // Teacher-library resource-card tag labels (generic status/type chrome)
  'study.skills.common.tag.task_card': { en: 'Task card', ar: 'بطاقة مهمة' },
  'study.skills.common.tag.reference_card': { en: 'Reference card', ar: 'بطاقة مرجعية' },
  'study.skills.common.tag.full_pack': { en: 'Full pack', ar: 'حزمة كاملة' },
  'study.skills.common.tag.full_starter': { en: 'Full starter', ar: 'نشاط كامل' },
  'study.skills.common.tag.full_worksheet': { en: 'Full worksheet', ar: 'ورقة عمل كاملة' },
  'study.skills.common.tag.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'study.skills.common.duration.five_mins': { en: '5 mins', ar: '٥ دقائق' },

  // ─── Writing Skills hub (/resources/writing-skills) ──────────────
  'study.skills.ws.hero.eyebrow': {
    en: 'Writing Skills Masterclass',
    ar: 'ماستر كلاس مهارات الكتابة',
  },
  'study.skills.ws.hero.title': {
    en: 'Write Like a Grade 9 Student',
    ar: 'اكتب مثل طالب Grade 9',
  },
  'study.skills.ws.hero.subtitle': {
    en: 'Board-agnostic writing guides that work for AQA, Edexcel, OCR, and Cambridge IGCSE. Whether you are crafting a story, arguing a case, or analysing a text, these masterclasses will transform your writing.',
    ar: 'أدلة كتابة تنفع مع كل البوردات: AQA و Edexcel و OCR و Cambridge IGCSE. سواء تكتب قصة، أو تبني حجة، أو تحلّل نص، هالماستر كلاس بتغيّر كتابتك.',
  },
  'study.skills.ws.hero.cta_explore': { en: 'Explore Writing Skills', ar: 'استكشف مهارات الكتابة' },
  'study.skills.ws.hero.cta_practice': { en: 'Practice Questions', ar: 'أسئلة تدريب' },
  'study.skills.ws.bc.this': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'study.skills.ws.choose.title': { en: 'Choose a Writing Skill', ar: 'اختر مهارة كتابة' },
  'study.skills.ws.choose.subtitle': {
    en: 'Each guide is a complete masterclass packed with techniques, examples, and full annotated model responses.',
    ar: 'كل دليل ماستر كلاس كامل مليان تقنيات وأمثلة وإجابات نموذجية مشروحة بالكامل.',
  },
  // Skill-area card chrome (navigational card titles/subtitles/descriptions)
  'study.skills.ws.card.creative.title': { en: 'Creative Writing', ar: 'الكتابة الإبداعية' },
  'study.skills.ws.card.creative.subtitle': {
    en: 'Descriptive & Narrative',
    ar: 'وصفية وسردية',
  },
  'study.skills.ws.card.creative.desc': {
    en: 'Master descriptive and narrative writing with advanced techniques including sensory language, structural devices, compelling openings and endings, and vocabulary enhancement. Includes full annotated model responses.',
    ar: 'أتقن الكتابة الوصفية والسردية بتقنيات متقدمة: اللغة الحسّية، الأدوات البنائية، البدايات والنهايات المؤثرة، وتطوير المفردات. ويايه إجابات نموذجية مشروحة بالكامل.',
  },
  'study.skills.ws.card.persuasive.title': { en: 'Persuasive Writing', ar: 'الكتابة الإقناعية' },
  'study.skills.ws.card.persuasive.subtitle': {
    en: 'Articles, Letters & Speeches',
    ar: 'مقالات ورسائل وخطب',
  },
  'study.skills.ws.card.persuasive.desc': {
    en: 'Learn how to argue, persuade, and influence through writing. Covers AFOREST techniques, counter-arguments, tone and register, plus format conventions for articles, speeches, letters, and reports. Annotated models included.',
    ar: 'تعلّم كيف تجادل وتقنع وتأثّر بالكتابة. يغطي تقنيات AFOREST، الحجج المضادة، النبرة والمستوى اللغوي، وقواعد صياغة المقالات والخطب والرسائل والتقارير. ويايه نماذج مشروحة.',
  },
  'study.skills.ws.card.analytical.title': { en: 'Analytical Writing', ar: 'الكتابة التحليلية' },
  'study.skills.ws.card.analytical.subtitle': {
    en: 'Essays & Language Analysis',
    ar: 'مقالات وتحليل لغوي',
  },
  'study.skills.ws.card.analytical.desc': {
    en: 'Write sophisticated analytical responses for literature and language papers. Master PEEL paragraphs, quotation embedding, language and structural analysis, evaluative vocabulary, and contextual linking. Full annotated essays included.',
    ar: 'اكتب إجابات تحليلية راقية لأوراق الأدب واللغة. أتقن فقرات PEEL، تضمين الاقتباسات، التحليل اللغوي والبنائي، المفردات التقييمية، والربط السياقي. ويايه مقالات نموذجية مشروحة بالكامل.',
  },
  'study.skills.ws.card.grammar.title': {
    en: 'Grammar & Punctuation',
    ar: 'القواعد وعلامات الترقيم',
  },
  'study.skills.ws.card.grammar.subtitle': { en: 'SPaG Mastery', ar: 'إتقان SPaG' },
  'study.skills.ws.card.grammar.desc': {
    en: 'Elevate your technical accuracy and learn to use grammar and punctuation for deliberate effect. Covers sentence types, advanced punctuation, paragraphing, common errors, voice, and tense control.',
    ar: 'ارفع دقتك التقنية وتعلّم استخدام القواعد وعلامات الترقيم لأثر مقصود. يغطي أنواع الجمل، الترقيم المتقدم، تقسيم الفقرات، الأخطاء الشائعة، الصوت، والتحكم بالأزمنة.',
  },
  // 5 universal tips section (heading + intro chrome only; tip body = study content, left EN)
  'study.skills.ws.tips.title': {
    en: '5 Tips That Work in Every Exam',
    ar: '٥ نصايح تنفع بكل امتحان',
  },
  'study.skills.ws.tips.subtitle': {
    en: 'Universal writing strategies you can apply to any paper, any board, every time.',
    ar: 'استراتيجيات كتابة عامة تنفع لأي ورقة، أي بورد، كل مرة.',
  },
  // AI feedback callout (marketing chrome)
  'study.skills.ws.ai.title': {
    en: 'AI Feedback Built Into Every Answer',
    ar: 'تغذية راجعة بالذكاء الاصطناعي بكل إجابة',
  },
  'study.skills.ws.ai.body': {
    en: 'Every practice question comes with instant, personalised AI feedback. Submit your response and receive detailed commentary on your vocabulary choices, sentence structures, technique usage, and SPaG -- with actionable suggestions to push your writing into the top band.',
    ar: 'كل سؤال تدريب يايه تغذية راجعة فورية ومخصصة بالذكاء الاصطناعي. أرسل إجابتك وبتوصلك ملاحظات مفصّلة عن اختياراتك للمفردات وبناء الجمل واستخدام التقنيات و SPaG، مع اقتراحات عملية تدفع كتابتك للباند الأعلى.',
  },
  'study.skills.ws.ai.cta': { en: 'Try a Practice Question', ar: 'جرّب سؤال تدريب' },
  // Practice links section (chrome + navigational card chrome)
  'study.skills.ws.practice.title': { en: 'Practice Makes Perfect', ar: 'التدريب يصنع الإتقان' },
  'study.skills.ws.practice.subtitle': {
    en: 'Put your skills to the test with exam-style questions and get instant AI feedback on your responses.',
    ar: 'اختبر مهاراتك بأسئلة على نمط الامتحان واحصل على تغذية راجعة فورية بالذكاء الاصطناعي على إجاباتك.',
  },
  'study.skills.ws.practice.start': { en: 'Start practising', ar: 'ابدأ التدريب' },
  'study.skills.ws.practice.creative.label': {
    en: 'Creative Writing Questions',
    ar: 'أسئلة الكتابة الإبداعية',
  },
  'study.skills.ws.practice.creative.desc': {
    en: 'Descriptive and narrative prompts with AI-powered feedback.',
    ar: 'محفّزات وصفية وسردية مع تغذية راجعة بالذكاء الاصطناعي.',
  },
  'study.skills.ws.practice.persuasive.label': {
    en: 'Persuasive Writing Questions',
    ar: 'أسئلة الكتابة الإقناعية',
  },
  'study.skills.ws.practice.persuasive.desc': {
    en: 'Article, speech, and letter tasks to sharpen your argument.',
    ar: 'مهام مقالات وخطب ورسائل تشحذ حجتك.',
  },
  'study.skills.ws.practice.language.label': {
    en: 'Language Analysis Questions',
    ar: 'أسئلة تحليل اللغة',
  },
  'study.skills.ws.practice.language.desc': {
    en: 'Extract-based questions testing your analytical writing.',
    ar: 'أسئلة مبنية على مقاطع تختبر كتابتك التحليلية.',
  },
  'study.skills.ws.practice.all.label': { en: 'All Practice Questions', ar: 'كل أسئلة التدريب' },
  'study.skills.ws.practice.all.desc': {
    en: 'Browse every question type across all exam boards.',
    ar: 'تصفّح كل أنواع الأسئلة عبر كل البوردات.',
  },
  // "Why these guides work" feature cards (navigational/marketing chrome)
  'study.skills.ws.why.title': { en: 'Why These Guides Work', ar: 'ليش هالأدلة تنفع' },
  'study.skills.ws.why.board.title': { en: 'Board-Agnostic', ar: 'تنفع لكل البوردات' },
  'study.skills.ws.why.board.body': {
    en: 'Works for AQA, Edexcel, OCR, and Cambridge IGCSE. The skills transfer across every specification because great writing is great writing.',
    ar: 'تنفع مع AQA و Edexcel و OCR و Cambridge IGCSE. المهارات تنتقل لكل منهج لأن الكتابة الحلوة كتابة حلوة بأي مكان.',
  },
  'study.skills.ws.why.examples.title': { en: 'Real Examples', ar: 'أمثلة حقيقية' },
  'study.skills.ws.why.examples.body': {
    en: 'Every technique is illustrated with genuine examples you can model in your own work. No vague advice -- just concrete, usable demonstrations.',
    ar: 'كل تقنية موضّحة بأمثلة حقيقية تقدر تحاكيها بشغلك. ما في نصايح غامضة، بس أمثلة ملموسة وقابلة للاستخدام.',
  },
  'study.skills.ws.why.models.title': { en: 'Full Model Responses', ar: 'إجابات نموذجية كاملة' },
  'study.skills.ws.why.models.body': {
    en: 'Every guide includes complete annotated model responses so you can see exactly how top-grade writing looks from start to finish.',
    ar: 'كل دليل يايه إجابات نموذجية كاملة ومشروحة عشان تشوف بالضبط شلون تبين الكتابة عالية الدرجة من البداية للنهاية.',
  },

  // ─── Model Answers hub (/resources/model-answers) ────────────────
  'study.skills.ma.hero.eyebrow': { en: 'Learn from the Best', ar: 'تعلّم من الأفضل' },
  'study.skills.ma.hero.title': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  'study.skills.ma.hero.subtitle': {
    en: 'Expert-written model responses at every grade level. Each answer includes examiner commentary, technique annotations, and clear explanations of what separates a good answer from a great one.',
    ar: 'إجابات نموذجية مكتوبة من خبراء لكل مستوى Grade. كل إجابة فيها تعليق المصحّح، شرح للتقنيات، وتوضيح لشنو يفرّق الإجابة الحلوة عن الممتازة.',
  },
  'study.skills.ma.bc.this': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  'study.skills.ma.grade_level': { en: 'Grade Level', ar: 'مستوى Grade' },
  'study.skills.ma.filter.all': { en: 'All Grades', ar: 'كل الدرجات' },
  // Question-type navigation cards (chrome titles + descriptions)
  'study.skills.ma.type.language.title': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'study.skills.ma.type.language.desc': {
    en: "Model responses to 'How does the writer use language...' questions. Grade 3, 5, 7, and 9 examples with examiner commentary and side-by-side comparisons showing what makes the difference.",
    ar: "إجابات نموذجية لأسئلة 'How does the writer use language...'. أمثلة Grade 3 و5 و7 و9 مع تعليق المصحّح ومقارنات جنب بعض تبيّن شنو يفرّق.",
  },
  'study.skills.ma.type.creative.title': { en: 'Creative Writing', ar: 'الكتابة الإبداعية' },
  'study.skills.ma.type.creative.desc': {
    en: 'Descriptive and narrative model responses at every grade level. Full annotated examples showing how to craft atmosphere, use structural techniques, and deploy sophisticated vocabulary.',
    ar: 'إجابات نموذجية وصفية وسردية لكل مستوى Grade. أمثلة كاملة مشروحة تبيّن شلون تصنع الأجواء، وتستخدم التقنيات البنائية، وتوظّف مفردات راقية.',
  },
  'study.skills.ma.type.literature.title': { en: 'Literature Essays', ar: 'مقالات الأدب' },
  'study.skills.ma.type.literature.desc': {
    en: 'Literature essays on key texts including Macbeth, A Christmas Carol, An Inspector Calls, and poetry comparison at multiple grade levels. Annotations show how to structure arguments and embed quotations.',
    ar: 'مقالات أدب على نصوص أساسية مثل Macbeth و A Christmas Carol و An Inspector Calls ومقارنة الشعر، على مستويات Grade متعددة. الشروح تبيّن شلون تبني الحجج وتضمّن الاقتباسات.',
  },
  'study.skills.ma.type.persuasive.title': {
    en: 'Persuasive & Transactional Writing',
    ar: 'الكتابة الإقناعية والوظيفية',
  },
  'study.skills.ma.type.persuasive.desc': {
    en: 'Model articles, speeches, and letters at every grade level with annotations highlighting rhetorical devices, structural choices, and persuasive techniques.',
    ar: 'مقالات وخطب ورسائل نموذجية لكل مستوى Grade مع شروح تبرز الأدوات البلاغية والخيارات البنائية وتقنيات الإقناع.',
  },
  // "How to use" section (chrome)
  'study.skills.ma.howto.title': {
    en: 'How to Use These Model Answers',
    ar: 'شلون تستخدم هالإجابات النموذجية',
  },
  'study.skills.ma.howto.read.title': { en: 'Read Actively', ar: 'اقرأ بتركيز' },
  'study.skills.ma.howto.read.body': {
    en: 'Hover over highlighted text to see technique annotations and examiner insights.',
    ar: 'حط المؤشر على النص المظلّل عشان تشوف شرح التقنيات وملاحظات المصحّح.',
  },
  'study.skills.ma.howto.compare.title': { en: 'Compare Grades', ar: 'قارن الدرجات' },
  'study.skills.ma.howto.compare.body': {
    en: 'Study the difference between grade 5, 7, and 9 responses on the same question.',
    ar: 'ادرس الفرق بين إجابات grade 5 و7 و9 على نفس السؤال.',
  },
  'study.skills.ma.howto.practise.title': { en: 'Practise', ar: 'تدرّب' },
  'study.skills.ma.howto.practise.body': {
    en: 'Use the techniques you have identified to improve your own answers.',
    ar: 'استخدم التقنيات اللي حددتها عشان تحسّن إجاباتك انت.',
  },
  // Quick stats labels (chrome)
  'study.skills.ma.stat.model_answers': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  'study.skills.ma.stat.grade_levels': { en: 'Grade Levels', ar: 'مستويات Grade' },
  'study.skills.ma.stat.question_types': { en: 'Question Types', ar: 'أنواع الأسئلة' },
  'study.skills.ma.stat.annotations': { en: 'Annotations', ar: 'شروح' },

  // ─── Model Answers subpages (shared chrome) ──────────────────────
  'study.skills.ma.sub.eyebrow': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  // Language Analysis subpage
  'study.skills.ma.lang.title': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'study.skills.ma.lang.subtitle': {
    en: 'See exactly how top students respond to “How does the writer use language...” questions. Grade 3, 5, 7, and 9 examples with full examiner commentary.',
    ar: 'شوف بالضبط شلون يجاوب الطلاب المتفوقين على أسئلة “How does the writer use language...”. أمثلة Grade 3 و5 و7 و9 مع تعليق مصحّح كامل.',
  },
  'study.skills.ma.lang.bc.this': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'study.skills.ma.lang.toc.question': { en: 'The Question', ar: 'السؤال' },
  'study.skills.ma.lang.toc.responses': { en: 'Model Responses', ar: 'الإجابات النموذجية' },
  'study.skills.ma.lang.toc.comparison': { en: 'Grade Comparison', ar: 'مقارنة الدرجات' },
  'study.skills.ma.lang.sec.question': { en: 'The Question', ar: 'السؤال' },
  'study.skills.ma.lang.sec.responses': { en: 'Model Responses', ar: 'الإجابات النموذجية' },
  'study.skills.ma.lang.sec.comparison': {
    en: 'What Makes the Difference?',
    ar: 'شنو يصنع الفرق؟',
  },
  'study.skills.ma.lang.label.source': { en: 'Source Text (Extract)', ar: 'النص المصدر (مقطع)' },
  'study.skills.ma.lang.table.skill': { en: 'Skill', ar: 'المهارة' },
  // Creative Writing subpage
  'study.skills.ma.cw.title': { en: 'Creative Writing', ar: 'الكتابة الإبداعية' },
  'study.skills.ma.cw.subtitle': {
    en: 'Full model descriptive and narrative responses at grade 3, 5, 7, and 9, with annotations highlighting every technique and examiner insights on what earns each grade.',
    ar: 'إجابات نموذجية وصفية وسردية كاملة على grade 3 و5 و7 و9، مع شروح تبرز كل تقنية وملاحظات المصحّح عن شنو يكسب كل درجة.',
  },
  'study.skills.ma.cw.bc.this': { en: 'Creative Writing', ar: 'الكتابة الإبداعية' },
  'study.skills.ma.cw.toc.descriptive': { en: 'Descriptive Writing', ar: 'الكتابة الوصفية' },
  'study.skills.ma.cw.toc.narrative': { en: 'Narrative Writing', ar: 'الكتابة السردية' },
  'study.skills.ma.cw.toc.techniques': { en: 'Key Techniques', ar: 'التقنيات الأساسية' },
  'study.skills.ma.cw.sec.descriptive': { en: 'Descriptive Writing', ar: 'الكتابة الوصفية' },
  'study.skills.ma.cw.sec.narrative': { en: 'Narrative Writing', ar: 'الكتابة السردية' },
  'study.skills.ma.cw.sec.techniques': {
    en: 'Key Techniques Annotated',
    ar: 'التقنيات الأساسية مشروحة',
  },
  'study.skills.ma.cw.label.task': { en: 'Task', ar: 'المهمة' },
  // Literature Essays subpage
  'study.skills.ma.lit.title': { en: 'Literature Essays', ar: 'مقالات الأدب' },
  'study.skills.ma.lit.subtitle': {
    en: 'Model essays on the most popular GCSE texts at grade 3, 5, 7, and 9. Every paragraph is annotated to show you exactly how to build arguments, embed quotations, and explore context.',
    ar: 'مقالات نموذجية على أشهر نصوص GCSE على grade 3 و5 و7 و9. كل فقرة مشروحة تبيّن لك بالضبط شلون تبني الحجج وتضمّن الاقتباسات وتستكشف السياق.',
  },
  'study.skills.ma.lit.bc.this': { en: 'Literature Essays', ar: 'مقالات الأدب' },
  'study.skills.ma.lit.toc.poetry': { en: 'Poetry Comparison', ar: 'مقارنة الشعر' },
  'study.skills.ma.lit.toc.criteria': { en: 'What Examiners Want', ar: 'شنو يبغى المصحّحون' },
  'study.skills.ma.lit.sec.criteria': {
    en: 'What Examiners Want at Each Grade',
    ar: 'شنو يبغى المصحّحون بكل درجة',
  },
  // Persuasive Writing subpage
  'study.skills.ma.pw.title': {
    en: 'Persuasive & Transactional Writing',
    ar: 'الكتابة الإقناعية والوظيفية',
  },
  'study.skills.ma.pw.subtitle': {
    en: 'Model articles, speeches, and letters at grade 3, 5, 7, and 9 with annotations showing you how to deploy rhetorical devices, structure an argument, and write with purpose and flair.',
    ar: 'مقالات وخطب ورسائل نموذجية على grade 3 و5 و7 و9 مع شروح تبيّن لك شلون توظّف الأدوات البلاغية وتبني حجة وتكتب بهدف وأناقة.',
  },
  'study.skills.ma.pw.bc.this': { en: 'Persuasive Writing', ar: 'الكتابة الإقناعية' },
  'study.skills.ma.pw.toc.article': { en: 'Article', ar: 'مقال' },
  'study.skills.ma.pw.toc.speech': { en: 'Speech', ar: 'خطبة' },
  'study.skills.ma.pw.toc.techniques': { en: 'Key Techniques', ar: 'التقنيات الأساسية' },
  'study.skills.ma.pw.sec.article': { en: 'Model Article', ar: 'مقال نموذجي' },
  'study.skills.ma.pw.sec.speech': { en: 'Model Speech', ar: 'خطبة نموذجية' },
  'study.skills.ma.pw.sec.techniques': {
    en: 'Key Persuasive Techniques',
    ar: 'تقنيات الإقناع الأساسية',
  },

  // ─── Spoken Language - Topics (/resources/spoken-language/topics) ─
  'study.skills.sl.topics.back': {
    en: 'Spoken Language Guide',
    ar: 'دليل Spoken Language',
  },
  'study.skills.sl.topics.title': { en: 'Presentation Topic Ideas', ar: 'أفكار مواضيع للعرض' },
  'study.skills.sl.topics.subtitle': {
    en: 'Over 30 topic ideas for your Spoken Language endorsement, organised by category. Each includes a brief outline, key points to cover, and potential audience questions to prepare for.',
    ar: 'أكثر من ٣٠ فكرة موضوع لـ Spoken Language endorsement، مرتّبة حسب التصنيف. كل وحدة فيها مخطط مختصر، نقاط أساسية تغطيها، وأسئلة محتملة من الجمهور تتجهّز لها.',
  },
  'study.skills.sl.topics.bc.this': { en: 'Topics', ar: 'المواضيع' },
  'study.skills.sl.topics.bc.spoken': { en: 'Spoken Language', ar: 'Spoken Language' },
  'study.skills.sl.topics.jump': { en: 'Jump to Category', ar: 'انتقل للتصنيف' },
  'study.skills.sl.topics.count_suffix': { en: 'topics', ar: 'موضوع' },
  'study.skills.sl.topics.keypoints': { en: 'Key Points to Cover', ar: 'نقاط أساسية تغطيها' },
  'study.skills.sl.topics.questions': {
    en: 'Potential Audience Questions',
    ar: 'أسئلة محتملة من الجمهور',
  },
  'study.skills.sl.topics.choose.title': {
    en: 'How to Choose the Right Topic for You',
    ar: 'شلون تختار الموضوع المناسب لك',
  },
  'study.skills.sl.topics.cta.title': { en: 'Ready to Prepare?', ar: 'جاهز تتجهّز؟' },
  'study.skills.sl.topics.cta.body': {
    en: 'Head back to our full Spoken Language guide for detailed advice on planning, delivery, answering questions, and hitting every assessment criterion.',
    ar: 'ارجع لدليل Spoken Language الكامل عشان نصايح مفصّلة عن التخطيط والإلقاء والإجابة على الأسئلة وتحقيق كل معيار تقييم.',
  },
  'study.skills.sl.topics.cta.back': { en: 'Back to the Full Guide', ar: 'ارجع للدليل الكامل' },

  // ─── Teacher Library subpages (hub-style) ────────────────────────
  // Homework
  'study.skills.tl.homework.bc.this': { en: 'Homework Tasks', ar: 'الواجبات البيتية' },
  'study.skills.tl.homework.title': { en: 'Homework Tasks', ar: 'الواجبات البيتية' },
  'study.skills.tl.homework.subtitle': {
    en: 'Meaningful homework that extends classroom learning - without creating a marking mountain. Each task is designed to be self-checked or lightly assessed in class.',
    ar: 'واجبات مفيدة توسّع تعلّم الصف، بدون ما تصير جبل تصحيح. كل مهمة مصممة عشان الطالب يصحّحها بنفسه أو تتقيّم بخفة بالصف.',
  },
  // Mark Schemes
  'study.skills.tl.ms.bc.this': { en: 'Mark Schemes', ar: 'سلالم العلامات' },
  'study.skills.tl.ms.title': { en: 'Mark Schemes', ar: 'سلالم العلامات' },
  'study.skills.tl.ms.subtitle': {
    en: 'Quick-reference mark scheme cards for every major GCSE English exam board. Grade descriptors, AO weightings, and common examiner comments at your fingertips.',
    ar: 'بطاقات سلم علامات مرجعية سريعة لكل بوردات GCSE English الكبيرة. واصفات الدرجات، أوزان الـ AO، وملاحظات المصحّحين الشائعة بين يديك.',
  },
  'study.skills.tl.ms.note': {
    en: 'These are summary reference cards written by teachers. For the official mark schemes, visit the awarding body websites.',
    ar: 'هذي بطاقات مرجعية تلخيصية كتبها معلّمون. لسلالم العلامات الرسمية، روح مواقع الهيئات المانحة.',
  },
  // Revision Packs
  'study.skills.tl.rp.bc.this': { en: 'Revision Packs', ar: 'حزم المراجعة' },
  'study.skills.tl.rp.title': { en: 'Revision Packs', ar: 'حزم المراجعة' },
  'study.skills.tl.rp.subtitle': {
    en: 'Ready-to-print revision booklets for every major GCSE set text. Hand them out as homework, mock-revision packs, or self-study resources.',
    ar: 'كتيّبات مراجعة جاهزة للطباعة لكل نص GCSE مقرر كبير. وزّعها كواجب، أو حزم مراجعة للموكات، أو مصادر دراسة ذاتية.',
  },
  // Starters
  'study.skills.tl.st.bc.this': { en: 'Starter Activities', ar: 'الأنشطة الافتتاحية' },
  'study.skills.tl.st.title': {
    en: '5-Minute Starter Activities',
    ar: 'أنشطة افتتاحية بخمس دقايق',
  },
  'study.skills.tl.st.subtitle': {
    en: '20 quick, classroom-ready starters to hook your class. Retrieval practice, vocabulary, analysis, and creative writing warm-ups that need no printing.',
    ar: '٢٠ نشاط افتتاحي سريع وجاهز للصف يشدّ طلابك. تدريب استرجاع، مفردات، تحليل، وتسخينات كتابة إبداعية ما تحتاج طباعة.',
  },
  // Worksheets
  'study.skills.tl.ws.bc.this': { en: 'Worksheets', ar: 'أوراق العمل' },
  'study.skills.tl.ws.title': { en: 'Worksheets', ar: 'أوراق العمل' },
  'study.skills.tl.ws.subtitle': {
    en: '25 printable worksheets covering comprehension, analysis, writing scaffolds, and exam skills practice. Designed to be used straight from the printer.',
    ar: '٢٥ ورقة عمل قابلة للطباعة تغطي الفهم، التحليل، سقالات الكتابة، وتدريب مهارات الامتحان. مصممة عشان تستخدمها مباشرة من الطابعة.',
  },

  // ─── Teacher Library detail-page breadcrumb current labels ───────
  'study.skills.tl.detail.pee.bc.this': {
    en: 'PEE Paragraph Builder',
    ar: 'PEE Paragraph Builder',
  },
  'study.skills.tl.detail.speed.bc.this': {
    en: 'Literary Device Speed Round',
    ar: 'Literary Device Speed Round',
  },
  'study.skills.tl.detail.jekyll.bc.this': {
    en: 'Jekyll and Hyde',
    ar: 'Jekyll and Hyde',
  },
}
