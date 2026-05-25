/**
 * dictionary-b1-resources.ts - Bucket B Phase B1.
 * Curated EN + Khaleeji (Gulf) Arabic for the /resources shell + hub pages.
 *
 * Covers:
 *   - resources/layout.tsx  (GeoFaq heading)
 *   - resources/english-language/layout.tsx  (generateMetadata)
 *   - resources/english-literature/layout.tsx  (generateMetadata)
 *   - resources/glossary/layout.tsx  (generateMetadata)
 *   - resources/revision-notes/layout.tsx  (generateMetadata)
 *   - resources/techniques/layout.tsx  (generateMetadata)
 *   - resources/vocabulary/layout.tsx  (generateMetadata)
 *   - resources/teaching/layout.tsx  (generateMetadata)
 *   - resources/english-language/page.tsx  (hub page, 'use client')
 *   - resources/english-literature/page.tsx  (hub page, server)
 *   - resources/techniques/page.tsx  (hub page, 'use client')
 *   - resources/revision-notes/revision-notes-view.tsx  ('use client')
 *
 * Khaleeji conventions (per dictionary.ts header):
 *   وايد not كثيراً  |  الحين not الآن  |  ببلاش not مجاناً
 *   Brand/exam terms in Latin script: GCSE, IGCSE, AQA, OCR, Edexcel,
 *   WJEC, CAIE, AO1-AO6, SPaG.
 */
export const B1_RESOURCES_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── resources/layout.tsx ────────────────────────────────────────────
  'resources.layout.faq_heading': {
    en: 'English resources: common questions',
    ar: 'مصادر الإنجليزي: أسئلة شائعة',
  },

  // ─── resources/english-language/layout.tsx - metadata ───────────────
  'resources.eng_lang.meta.title': {
    en: 'English Language Resources',
    ar: 'مصادر اللغة الإنجليزية',
  },
  'resources.eng_lang.meta.desc': {
    en: 'GCSE and IGCSE English Language revision resources for AQA, Edexcel, OCR, WJEC and CAIE. Paper guides, techniques, writing skills, and grade boundaries.',
    ar: 'مصادر مراجعة اللغة الإنجليزية لـ GCSE و IGCSE لمجالس AQA و Edexcel و OCR و WJEC و CAIE. أدلة الأوراق والتقنيات ومهارات الكتابة وحدود الدرجات.',
  },
  'resources.eng_lang.meta.og_title': {
    en: 'English Language Resources - The English Hub',
    ar: 'مصادر اللغة الإنجليزية - The English Hub',
  },

  // ─── resources/english-literature/layout.tsx - metadata ─────────────
  'resources.eng_lit.meta.title': {
    en: 'English Literature Revision - GCSE & IGCSE',
    ar: 'مراجعة الأدب الإنجليزي - GCSE و IGCSE',
  },
  'resources.eng_lit.meta.desc': {
    en: 'Complete GCSE and IGCSE English Literature revision. Study guides for Shakespeare, prose, drama, and poetry with character analysis, themes, quotations, and essay techniques.',
    ar: 'مراجعة شاملة لـ GCSE و IGCSE في الأدب الإنجليزي. أدلة دراسة لشكسبير والنثر والمسرح والشعر مع تحليل الشخصيات والثيمات والاقتباسات وتقنيات المقال.',
  },
  'resources.eng_lit.meta.og_title': {
    en: 'English Literature Revision - The English Hub',
    ar: 'مراجعة الأدب الإنجليزي - The English Hub',
  },

  // ─── resources/glossary/layout.tsx - metadata ───────────────────────
  'resources.glossary.meta.title': {
    en: 'English Glossary',
    ar: 'قاموس مصطلحات الإنجليزي',
  },
  'resources.glossary.meta.desc': {
    en: 'Comprehensive glossary of English literary and linguistic terms for GCSE and IGCSE students. Definitions, examples, and exam-relevant terminology explained.',
    ar: 'قاموس شامل للمصطلحات الأدبية واللغوية الإنجليزية لطلاب GCSE و IGCSE. تعريفات وأمثلة وشرح للمصطلحات المهمة للامتحان.',
  },
  'resources.glossary.meta.og_title': {
    en: 'English Glossary - The English Hub',
    ar: 'قاموس مصطلحات الإنجليزي - The English Hub',
  },

  // ─── resources/revision-notes/layout.tsx - metadata ─────────────────
  'resources.rev_notes.meta.title': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
  },
  'resources.rev_notes.meta.desc': {
    en: 'Free GCSE English Literature revision notes for every set text. Character analysis, themes, key quotes, and exam tips for Macbeth, An Inspector Calls, and more.',
    ar: 'ملاحظات مراجعة مجانية لـ GCSE في الأدب الإنجليزي لكل النصوص المقررة. تحليل الشخصيات والثيمات والاقتباسات الرئيسية ونصائح الامتحان لماكبث وتفتيش وغيرها.',
  },
  'resources.rev_notes.meta.og_title': {
    en: 'Revision Notes - The English Hub',
    ar: 'ملاحظات المراجعة - The English Hub',
  },

  // ─── resources/techniques/layout.tsx - metadata ──────────────────────
  'resources.techniques.meta.title': {
    en: 'English Techniques',
    ar: 'تقنيات الإنجليزي',
  },
  'resources.techniques.meta.desc': {
    en: 'Master language and structural techniques for GCSE English. Learn to identify and analyse literary devices, rhetorical techniques, and structural features.',
    ar: 'أتقن تقنيات اللغة والبنية لـ GCSE في الإنجليزي. تعلّم كيف تتعرّف على الأجهزة الأدبية والتقنيات البلاغية والسمات البنيوية وتحلّلها.',
  },
  'resources.techniques.meta.og_title': {
    en: 'English Techniques - The English Hub',
    ar: 'تقنيات الإنجليزي - The English Hub',
  },

  // ─── resources/vocabulary/layout.tsx - metadata ──────────────────────
  'resources.vocab.meta.title': {
    en: 'Vocabulary Builder',
    ar: 'بناء المفردات',
  },
  'resources.vocab.meta.desc': {
    en: 'Build your English vocabulary for GCSE exams. Academic, analytical, and descriptive word banks with definitions, examples, and practice exercises.',
    ar: 'طوِّر مفرداتك الإنجليزية لامتحانات GCSE. بنوك كلمات أكاديمية وتحليلية ووصفية مع تعريفات وأمثلة وتمارين تطبيقية.',
  },
  'resources.vocab.meta.og_title': {
    en: 'Vocabulary Builder - The English Hub',
    ar: 'بناء المفردات - The English Hub',
  },

  // ─── resources/teaching/layout.tsx - metadata ────────────────────────
  'resources.teaching.meta.title': {
    en: 'Teaching Resources',
    ar: 'مصادر التدريس',
  },
  'resources.teaching.meta.desc': {
    en: 'Free teaching resources for English teachers. Lesson plans, assessment materials, printable worksheets, and curriculum-aligned content for KS3 to IGCSE.',
    ar: 'مصادر تدريس مجانية لمعلّمي الإنجليزي. خطط دروس ومواد تقييم وأوراق عمل قابلة للطباعة ومحتوى متوافق مع المنهج من KS3 إلى IGCSE.',
  },
  'resources.teaching.meta.og_title': {
    en: 'Teaching Resources - The English Hub',
    ar: 'مصادر التدريس - The English Hub',
  },

  // ─── resources/english-language/page.tsx - hub (client) ─────────────
  // Hero
  'resources.eng_lang.hub.eyebrow': { en: 'GCSE & IGCSE', ar: 'GCSE و IGCSE' },
  'resources.eng_lang.hub.h1': { en: 'English Language', ar: 'اللغة الإنجليزية' },
  'resources.eng_lang.hub.for_board': { en: 'For', ar: 'لـ' },
  'resources.eng_lang.hub.subtitle': {
    en: 'Master reading analysis, creative writing, and writing for real purposes with comprehensive revision resources tailored to your exam board. Covering all five major boards with AI-powered feedback on your practice answers.',
    ar: 'أتقن تحليل القراءة والكتابة الإبداعية والكتابة للأغراض الحقيقية بمصادر مراجعة شاملة مخصّصة لبورد امتحانك. تغطي كل البوردات الخمسة الكبيرة مع ملاحظات بالذكاء الاصطناعي على إجاباتك التدريبية.',
  },
  // Hero stats
  'resources.eng_lang.stat.boards': { en: 'Exam Boards', ar: 'مجالس الامتحان' },
  'resources.eng_lang.stat.boards_sub': {
    en: 'AQA, Edexcel, CAIE, OCR, WJEC',
    ar: 'AQA، Edexcel، CAIE، OCR، WJEC',
  },
  'resources.eng_lang.stat.papers': { en: 'Papers Covered', ar: 'أوراق الامتحان' },
  'resources.eng_lang.stat.papers_sub': {
    en: 'Reading & writing exams',
    ar: 'امتحانات القراءة والكتابة',
  },
  'resources.eng_lang.stat.marks': { en: 'Total Marks', ar: 'مجموع الدرجات' },
  'resources.eng_lang.stat.marks_sub': { en: 'Across all boards', ar: 'عبر كل البوردات' },
  'resources.eng_lang.stat.skills': { en: 'Key Skills', ar: 'المهارات الرئيسية' },
  'resources.eng_lang.stat.skills_sub': {
    en: 'Core areas of study',
    ar: 'المجالات الأساسية للدراسة',
  },
  // Board section
  'resources.eng_lang.choose_board': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان مالك',
  },
  'resources.eng_lang.your_board': { en: 'Your exam board', ar: 'بورد امتحانك' },
  'resources.eng_lang.board_intro': {
    en: 'Choose your exam board below to access board-specific revision resources, marking guides, and exam tips. Not sure which board you study? Use our',
    ar: 'اختر بورد امتحانك أدناه للوصول إلى مصادر مراجعة خاصة بالبورد وأدلة التصحيح ونصائح الامتحان. مو متأكد من البورد الذي تدرس؟ استخدم',
  },
  'resources.eng_lang.board_finder_link': { en: 'board finder', ar: 'أداة البحث عن البورد' },
  'resources.eng_lang.board_intro_suffix': { en: 'below.', ar: 'أدناه.' },
  'resources.eng_lang.viewing_your_board': {
    en: "You're viewing resources for your chosen exam board only.",
    ar: 'أنت الحين تشوف المصادر الخاصة ببورد امتحانك بس.',
  },
  'resources.eng_lang.marks_total': { en: 'marks total', ar: 'درجة مجموع' },
  'resources.eng_lang.view_resources': { en: 'View resources', ar: 'شوف المصادر' },
  // Board finder
  'resources.eng_lang.which_board': { en: 'Which board am I studying?', ar: 'أنا من أي بورد؟' },
  'resources.eng_lang.not_sure': {
    en: 'Not sure which exam board your school uses? Here are some quick ways to find out, plus a simple helper to narrow it down.',
    ar: 'مو متأكد من البورد الذي تستخدمه مدرستك؟ هذي بعض الطرق السريعة لمعرفته، مع أداة بسيطة تساعدك تضيّق الخيارات.',
  },
  'resources.eng_lang.how_to_check': {
    en: 'How to check your exam board',
    ar: 'كيف تعرف بورد امتحانك',
  },
  'resources.eng_lang.quick_finder': {
    en: 'Quick board finder',
    ar: 'أداة البحث السريع عن البورد',
  },
  'resources.eng_lang.quick_finder_sub': {
    en: 'Answer the question below to narrow down your likely exam board.',
    ar: 'جاوب على السؤال أدناه عشان تضيّق خيارات البورد المحتمل.',
  },
  'resources.eng_lang.likely_boards': {
    en: 'You are most likely studying one of these boards:',
    ar: 'الغالب أنك تدرس أحد هذي البوردات:',
  },
  'resources.eng_lang.start_again': { en: 'Start again', ar: 'ابدأ من جديد' },
  // Core skills
  'resources.eng_lang.core_skills.h2': {
    en: 'Core skills across all boards',
    ar: 'المهارات الأساسية عبر كل البوردات',
  },
  'resources.eng_lang.core_skills.sub': {
    en: 'Regardless of which exam board you study, these six key skill areas form the backbone of every GCSE English Language course.',
    ar: 'بصرف النظر عن البورد الذي تدرس فيه، هذي الست مجالات المهارية الرئيسية تشكّل عمود فقرات كل مساق GCSE في اللغة الإنجليزية.',
  },
  // What does EL cover
  'resources.eng_lang.what_covers.h2': {
    en: 'What does English Language cover?',
    ar: 'ماذا يغطي مساق اللغة الإنجليزية؟',
  },
  'resources.eng_lang.what_covers.p1': {
    en: 'GCSE English Language develops your ability to read critically, analyse how writers use language and structure, and produce your own high-quality writing across a range of forms and purposes. It is a core qualification required by most employers and further education providers, and a grade 4 or above is typically needed for sixth form, college, and apprenticeship entry.',
    ar: 'GCSE في اللغة الإنجليزية ينمّي قدرتك على القراءة النقدية وتحليل كيف يستخدم الكتّاب اللغة والبنية، وإنتاج كتاباتك الخاصة عالية الجودة عبر أشكال وأغراض متنوعة. هو مؤهل أساسي تطلبه معظم جهات العمل ومزودو التعليم العالي، والدرجة 4 أو أعلى مطلوبة عادةً لدخول الصف السادس والكلية والتدريب المهني.',
  },
  'resources.eng_lang.what_covers.p2': {
    en: 'The course is assessed through written examinations (and a spoken language component in most boards). You will study a mix of fiction and non-fiction texts and develop both analytical and creative writing skills that are transferable to A Level and beyond.',
    ar: 'يُقيَّم المساق من خلال امتحانات كتابية (ومكوّن اللغة المنطوقة في معظم البوردات). ستدرس مزيجاً من النصوص الخيالية وغير الخيالية وتطوّر مهارات الكتابة التحليلية والإبداعية التي يمكن نقلها إلى المرحلة A Level وما بعدها.',
  },
  // AI feedback callout
  'resources.eng_lang.ai.h2': {
    en: 'Get instant AI feedback on your answers',
    ar: 'احصل على ملاحظات فورية بالذكاء الاصطناعي على إجاباتك',
  },
  'resources.eng_lang.ai.sub': {
    en: 'Practice exam-style questions and receive detailed, marking-guide-aligned feedback powered by AI. Our system analyses your response against the assessment objectives for your specific exam board and provides targeted improvement suggestions.',
    ar: 'تدرّب على أسئلة بأسلوب الامتحان واحصل على ملاحظات مفصّلة ومتوافقة مع دليل التصحيح مدعومة بالذكاء الاصطناعي. يحلّل نظامنا إجابتك مقارنةً بأهداف التقييم لبوردك المحدد ويقدّم اقتراحات تحسين مستهدفة.',
  },
  'resources.eng_lang.ai.cta_try': { en: 'Try practice questions', ar: 'جرّب أسئلة التدريب' },
  'resources.eng_lang.ai.cta_how': { en: 'See how it works', ar: 'شوف كيف يشتغل' },
  // Explore more
  'resources.eng_lang.more.h2': { en: 'Explore more resources', ar: 'استكشف مصادر أكثر' },
  'resources.eng_lang.more.sub': {
    en: 'Strengthen your English Language skills with these additional study areas.',
    ar: 'قوّي مهاراتك في اللغة الإنجليزية بهذي المجالات الدراسية الإضافية.',
  },
  'resources.eng_lang.more.explore': { en: 'Explore', ar: 'استكشف' },
  // Jump to board bar
  'resources.eng_lang.jump_board': { en: 'Jump to your board', ar: 'روح لبوردك' },

  // ─── resources/english-literature/page.tsx - hub (server) ───────────
  'resources.eng_lit.hub.eyebrow': { en: 'GCSE & IGCSE Revision', ar: 'مراجعة GCSE و IGCSE' },
  'resources.eng_lit.hub.h1': { en: 'English Literature', ar: 'الأدب الإنجليزي' },
  'resources.eng_lit.hub.for_board': { en: 'For', ar: 'لـ' },
  'resources.eng_lit.hub.subtitle': {
    en: 'In-depth study guides for Shakespeare, prose, drama, and poetry. Character analysis, theme breakdowns, key quotations, essay techniques, and exam preparation - everything you need in one place.',
    ar: 'أدلة دراسة متعمّقة لشكسبير والنثر والمسرح والشعر. تحليل الشخصيات وتفكيك الثيمات والاقتباسات الرئيسية وتقنيات المقال والتحضير للامتحان - كل اللي تحتاجه في مكان واحد.',
  },
  // Stat labels
  'resources.eng_lit.stat.texts': { en: 'Set Texts Covered', ar: 'النصوص المقررة' },
  'resources.eng_lit.stat.quotes': { en: 'Key Quotations', ar: 'اقتباسات رئيسية' },
  'resources.eng_lit.stat.notes': { en: 'Revision Notes', ar: 'ملاحظات مراجعة' },
  'resources.eng_lit.stat.questions': { en: 'Practice Questions', ar: 'أسئلة تدريبية' },
  // What it involves
  'resources.eng_lit.what.h2': {
    en: 'What does GCSE English Literature involve?',
    ar: 'ماذا يتضمّن GCSE في الأدب الإنجليزي؟',
  },
  'resources.eng_lit.what.body': {
    en: 'GCSE English Literature requires you to read, analyse, and respond to a range of literary texts from different periods and genres. You will develop skills in close reading, critical analysis, comparison, and essay writing - demonstrating how writers create meaning through language, form, and structure. These skills are universal across all exam boards; while the specific texts and paper structures vary, the core analytical approach remains the same.',
    ar: 'يتطلّب GCSE في الأدب الإنجليزي قراءة وتحليل الاستجابة لمجموعة من النصوص الأدبية من حقب وأنواع مختلفة. ستطوّر مهارات القراءة الدقيقة والتحليل النقدي والمقارنة وكتابة المقال - مع إظهار كيف يصنع الكتّاب المعنى من خلال اللغة والشكل والبنية. هذي المهارات عالمية عبر كل بوردات الامتحان؛ وإن كانت النصوص المحددة وهياكل الأوراق تختلف، يبقى النهج التحليلي الأساسي نفسه.',
  },
  // Study guides section
  'resources.eng_lit.guides.h2': { en: 'Set text study guides', ar: 'أدلة دراسة النصوص المقررة' },
  'resources.eng_lit.guides.sub': {
    en: 'Detailed revision guides covering plot, characters, themes, key quotations, context, and essay planning. Each guide works for any exam board studying that text.',
    ar: 'أدلة مراجعة مفصّلة تغطي الحبكة والشخصيات والثيمات والاقتباسات الرئيسية والسياق وتخطيط المقال. كل دليل يصلح لأي بورد امتحان يدرس ذلك النص.',
  },
  'resources.eng_lit.guides.view': { en: 'View study guide', ar: 'شوف دليل الدراسة' },
  // Poetry anthologies
  'resources.eng_lit.poetry.h2': { en: 'Poetry anthology guides', ar: 'أدلة مجموعات الشعر' },
  'resources.eng_lit.poetry.sub': {
    en: 'Poem-by-poem analysis with stanza breakdowns, technique identification, thematic links, and comparison pairs.',
    ar: 'تحليل قصيدة بقصيدة مع تفكيك المقاطع وتحديد التقنيات والروابط الثيماتية وأزواج المقارنة.',
  },
  // Essay writing tips
  'resources.eng_lit.essay.h2': {
    en: 'How to write a top-mark literature essay',
    ar: 'كيف تكتب مقال أدب بأعلى درجة',
  },
  'resources.eng_lit.essay.sub': {
    en: 'These techniques apply across all exam boards and question types. Master them and you will consistently reach the higher mark bands.',
    ar: 'هذي التقنيات تنطبق على كل بوردات الامتحان وأنواع الأسئلة. أتقنها وستصل باستمرار لمستويات الدرجات الأعلى.',
  },
  // Example paragraph
  'resources.eng_lit.example.h2': {
    en: 'Example analytical paragraph',
    ar: 'فقرة تحليلية نموذجية',
  },
  'resources.eng_lit.example.sub': {
    en: 'See how all six essay tips come together in a single paragraph that would score in the top mark band.',
    ar: 'شوف كيف تتجمّع النصائح الست للمقال في فقرة واحدة تسجّل في أعلى نطاق درجات.',
  },
  'resources.eng_lit.example.question_label': { en: 'Question:', ar: 'السؤال:' },
  'resources.eng_lit.example.effective_label': {
    en: 'What makes this effective:',
    ar: 'شو اللي يخلّيها فعّالة:',
  },
  // AI callout
  'resources.eng_lit.ai.h2': {
    en: 'Get AI-powered essay feedback',
    ar: 'احصل على ملاحظات مقال بالذكاء الاصطناعي',
  },
  'resources.eng_lit.ai.sub': {
    en: 'Paste your literature essay and receive instant, detailed feedback on your argument, use of evidence, analysis of language, and exam technique. Our AI marker is calibrated to GCSE marking guides.',
    ar: 'الصق مقالك الأدبي واحصل على ملاحظات فورية ومفصّلة على حجّتك واستخدام الأدلة وتحليل اللغة وتقنية الامتحان. مصحّح الذكاء الاصطناعي مالتنا معايَر وفق أدلة تصحيح GCSE.',
  },
  'resources.eng_lit.ai.cta': { en: 'Try it free', ar: 'جرّبه ببلاش' },
  // More revision resources
  'resources.eng_lit.more.h2': { en: 'More revision resources', ar: 'مصادر مراجعة أكثر' },
  'resources.eng_lit.more.sub': {
    en: 'Strengthen specific skills that markers reward most highly.',
    ar: 'قوِّ المهارات المحددة التي يكافئها المصحّحون أكثر.',
  },
  // Exam info
  'resources.eng_lit.exam.h2': {
    en: 'Exam information by board',
    ar: 'معلومات الامتحان حسب البورد',
  },
  'resources.eng_lit.exam.sub': {
    en: 'Select your board below to view papers, grade boundaries, and board-specific resources.',
    ar: 'اختر بوردك أدناه لعرض الأوراق وحدود الدرجات والمصادر الخاصة بالبورد.',
  },
  'resources.eng_lit.exam.view_board': { en: 'View board resources', ar: 'شوف مصادر البورد' },

  // ─── resources/techniques/page.tsx - hub (client) ────────────────────
  'resources.techniques.hub.eyebrow': { en: 'Techniques Reference', ar: 'مرجع التقنيات' },
  'resources.techniques.hub.h1': { en: 'Master Every Technique', ar: 'أتقن كل تقنية' },
  'resources.techniques.hub.subtitle': {
    en: 'The definitive guide to 60+ language and structural techniques for GCSE English. Definitions, examples, effects, and exam-ready sentence starters - everything you need in one place.',
    ar: 'الدليل الشامل لأكثر من 60 تقنية لغوية وبنيوية لـ GCSE في الإنجليزي. تعريفات وأمثلة وتأثيرات ومبدئيات جمل جاهزة للامتحان - كل اللي تحتاجه في مكان واحد.',
  },
  'resources.techniques.hub.search_placeholder': {
    en: 'Search techniques... e.g. metaphor, sibilance',
    ar: 'دوّر على التقنيات... مثلاً الاستعارة، التكرار الصفيري',
  },
  'resources.techniques.hub.cta_lang': { en: 'Language Devices', ar: 'أجهزة اللغة' },
  'resources.techniques.hub.cta_struct': { en: 'Structural Devices', ar: 'أجهزة البنية' },
  // Browse by category
  'resources.techniques.hub.browse_h2': { en: 'Browse by Category', ar: 'تصفّح حسب التصنيف' },
  'resources.techniques.hub.browse_sub': {
    en: 'All techniques are organised into two main categories. Each entry includes a definition, example, effect analysis, and a sentence starter you can use in your exam.',
    ar: 'كل التقنيات مرتّبة في تصنيفين رئيسيين. كل مدخل يتضمّن تعريفاً ومثالاً وتحليل تأثير ومبدئية جملة تقدر تستخدمها في امتحانك.',
  },
  'resources.techniques.hub.techniques_count_suffix': { en: 'techniques', ar: 'تقنية' },
  // WHW method
  'resources.techniques.hub.whw.h2': { en: 'The What-How-Why method', ar: 'طريقة ماذا-كيف-لماذا' },
  'resources.techniques.hub.whw.sub': {
    en: 'Use this three-step framework for every technique you identify in an exam response.',
    ar: 'استخدم هذا الإطار الثلاثي لكل تقنية تحدّدها في إجابة الامتحان.',
  },
  // Quick reference filter
  'resources.techniques.hub.qr.h2': { en: 'Quick-reference guide', ar: 'دليل المرجع السريع' },
  'resources.techniques.hub.qr.sub': {
    en: 'The most frequently tested techniques for GCSE English. Click a name to see the full entry.',
    ar: 'أكثر التقنيات التي يُختبر فيها في GCSE في الإنجليزي. انقر على الاسم لعرض المدخل الكامل.',
  },
  'resources.techniques.hub.filter_all': { en: 'All', ar: 'الكل' },
  'resources.techniques.hub.filter_lang': { en: 'Language', ar: 'لغوية' },
  'resources.techniques.hub.filter_struct': { en: 'Structural', ar: 'بنيوية' },
  'resources.techniques.hub.no_results': { en: 'No techniques found', ar: 'ما لقينا تقنيات' },
  // Exam tips
  'resources.techniques.hub.tips.h2': { en: 'Exam writing tips', ar: 'نصائح كتابة الامتحان' },
  'resources.techniques.hub.tips.sub': {
    en: 'Apply these six principles to every technique-based response for consistently high marks.',
    ar: 'طبّق هذي المبادئ الست على كل إجابة مبنية على تقنية عشان تحصل على درجات عالية باستمرار.',
  },

  // ─── resources/revision-notes/revision-notes-view.tsx - client ───────
  'resources.rev_notes.hub.h1': { en: 'Revision Notes', ar: 'ملاحظات المراجعة' },
  'resources.rev_notes.hub.for_board': { en: 'For', ar: 'لـ' },
  'resources.rev_notes.hub.subtitle': {
    en: 'Comprehensive, exam-focused revision guides for every major GCSE English Literature set text. Each guide includes plot summaries, character analysis, key quotations with analysis, thematic exploration, historical context, and exam technique advice.',
    ar: 'أدلة مراجعة شاملة ومركّزة على الامتحان لكل نص مقرر رئيسي في GCSE في الأدب الإنجليزي. كل دليل يتضمّن ملخصات الحبكة وتحليل الشخصيات والاقتباسات الرئيسية مع التحليل واستكشاف الثيمات والسياق التاريخي ونصائح تقنية الامتحان.',
  },
  'resources.rev_notes.hub.search_placeholder': {
    en: 'Search texts, authors, or themes...',
    ar: 'دوّر على النصوص أو المؤلفين أو الثيمات...',
  },
  'resources.rev_notes.hub.no_results.h': { en: 'No texts found', ar: 'ما لقينا نصوص' },
  'resources.rev_notes.hub.no_results.sub': {
    en: 'Try adjusting your search term.',
    ar: 'حاول تعدّل مصطلح البحث.',
  },
  'resources.rev_notes.hub.clear_filters': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'resources.rev_notes.hub.view_guide': { en: 'View revision guide', ar: 'شوف دليل المراجعة' },
  'resources.rev_notes.hub.boards_prefix': { en: 'For:', ar: 'لـ:' },
}
