/**
 * dictionary-b1-revision.ts — Bucket B Phase B1.
 * Curated EN + Khaleeji (Gulf) Arabic for the /revision shell + hub pages.
 *
 * Khaleeji conventions (matches dictionary.ts):
 *   شنو / وايد / الحين / إحنا / روح / شوف / دوّر / سكّر / ببلاش
 * Brand + technical terms stay Latin: The English Hub, GCSE, IGCSE, IAL,
 *   AQA, OCR, Edexcel, Eduqas, Cambridge, AO1-AO5.
 * Western digits used throughout.
 */
export const B1_REVISION_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── revision/layout.tsx ────────────────────────────────────────────────

  'revision.layout.geo_faq_heading': {
    en: 'English revision: common questions',
    ar: 'مراجعة الإنجليزي: أسئلة شائعة',
  },

  // ─── revision/_components/revision-shell.tsx (client) ──────────────────

  'revision.shell.nav_aria': {
    en: 'Revision sections',
    ar: 'أقسام المراجعة',
  },
  'revision.shell.hub_title': {
    en: 'Your Hub',
    ar: 'Hub مالك',
  },
  'revision.shell.open_menu_sr': {
    en: 'Open revision menu',
    ar: 'افتح قائمة المراجعة',
  },
  'revision.shell.exam_board_label': {
    en: 'Exam board',
    ar: 'بورد الامتحان',
  },
  'revision.shell.target_grade_label': {
    en: 'Target grade',
    ar: 'الدرجة المستهدفة',
  },
  'revision.shell.progress_hint': {
    en: 'Sit quizzes and submit essays to see your real-data progress.',
    ar: 'حلّ الكويزات وأرسل مقالاتك عشان تشوف تقدّمك الحقيقي.',
  },

  // Nav item labels
  'revision.shell.nav.your_hub': {
    en: 'Your Hub',
    ar: 'Hub مالك',
  },
  'revision.shell.nav.analytics': {
    en: 'Your Analytics',
    ar: 'تحليلاتك',
  },
  'revision.shell.nav.my_papers': {
    en: 'My Papers',
    ar: 'أوراقي',
  },
  'revision.shell.nav.study_tools': {
    en: 'Study Tools',
    ar: 'أدوات الدراسة',
  },
  'revision.shell.nav.study_plan': {
    en: 'Study Plan',
    ar: 'خطة الدراسة',
  },
  'revision.shell.nav.reading_assessment': {
    en: 'Reading Assessment',
    ar: 'تقييم القراءة',
  },
  'revision.shell.nav.mock_exams': {
    en: 'Mock Exams',
    ar: 'امتحانات تجريبية',
  },
  'revision.shell.nav.practice': {
    en: 'Practice',
    ar: 'تمارين',
  },
  'revision.shell.nav.games': {
    en: 'Games',
    ar: 'ألعاب',
  },
  'revision.shell.nav.poetry': {
    en: 'Poetry',
    ar: 'الشعر',
  },
  'revision.shell.nav.set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقرّرة',
  },
  'revision.shell.nav.language_skills': {
    en: 'Language Skills',
    ar: 'مهارات اللغة',
  },
  'revision.shell.nav.flashcards': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
  },
  'revision.shell.nav.exam_technique': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
  },
  'revision.shell.nav.grade_targets': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
  },
  'revision.shell.nav.quick_quizzes': {
    en: 'Quick Quizzes',
    ar: 'كويزات سريعة',
  },
  'revision.shell.nav.resources_hub': {
    en: 'Resources Hub',
    ar: 'مركز الموارد',
  },
  'revision.shell.nav.revision_notes': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
  },
  'revision.shell.nav.model_answers': {
    en: 'Model Answers',
    ar: 'نماذج الإجابات',
  },
  'revision.shell.nav.comparison_essays': {
    en: 'Comparison Essays',
    ar: 'مقالات المقارنة',
  },
  'revision.shell.nav.vocabulary': {
    en: 'Vocabulary',
    ar: 'المفردات',
  },
  'revision.shell.nav.writing_skills': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
  },
  'revision.shell.nav.toolkit': {
    en: 'Toolkit',
    ar: 'صندوق الأدوات',
  },
  'revision.shell.nav.ial_guide': {
    en: 'IAL Specification Guide',
    ar: 'دليل مواصفات IAL',
  },
  'revision.shell.nav.edexcel_igcse_hub': {
    en: 'Edexcel IGCSE Hub',
    ar: 'Edexcel IGCSE Hub',
  },
  'revision.shell.nav.cambridge_hub': {
    en: 'Cambridge Hub',
    ar: 'Cambridge Hub',
  },
  'revision.shell.nav.cambridge_91_hub': {
    en: 'Cambridge (9-1) Hub',
    ar: 'Cambridge (9-1) Hub',
  },

  // ─── revision/grade-targets/page.tsx (server) ───────────────────────────

  'revision.grade_targets.breadcrumb_label': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
  },
  'revision.grade_targets.back_to_hub': {
    en: 'Back to Revision Hub',
    ar: 'رجوع للـ Hub',
  },
  'revision.grade_targets.page_title': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
  },
  'revision.grade_targets.subtitle_board': {
    en: 'Understand your {board} grade, set your target, and know exactly how to get there ({system} grading)',
    ar: 'افهم درجتك في {board}، حدّد هدفك، واعرف بالضبط كيف توصل (نظام تقييم {system})',
  },
  'revision.grade_targets.subtitle_generic': {
    en: 'Understand your grade, set your target, and know exactly how to get there',
    ar: 'افهم درجتك، حدّد هدفك، واعرف بالضبط كيف توصل',
  },
  'revision.grade_targets.board_context_board_label': {
    en: 'Showing {board} guidance.',
    ar: 'يعرض إرشادات {board}.',
  },
  'revision.grade_targets.letter_grade_note': {
    en: 'Cambridge IGCSE uses the traditional A*-G grading system, not the 9-1 system used by most GCSE boards. Throughout these guides you will also see 9-1 conversions so you can compare with other students.',
    ar: 'Cambridge IGCSE يستخدم نظام التقييم التقليدي A*-G، مو نظام 9-1 اللي تستخدمه معظم بورودات GCSE. في هالأدلة بتشوف كمان تحويلات 9-1 عشان تقدر تقارن مع الطلاب الثانيين.',
  },
  'revision.grade_targets.nine_one_note': {
    en: '{board} uses the 9-1 grading system. Mark boundaries and paper references below are specific to your board.',
    ar: '{board} يستخدم نظام التقييم 9-1. حدود الدرجات ومراجع الأوراق أدناه خاصة ببورد مالك.',
  },
  'revision.grade_targets.understanding_heading': {
    en: 'Understanding Your Grades',
    ar: 'فهم درجاتك',
  },
  'revision.grade_targets.understanding_intro_board': {
    en: 'In {board}, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.',
    ar: 'في {board}، بتشوف ثلاث درجات مختلفة على تقاريرك. فهم شنو تعني كل درجة يساعدك تحدد أهداف واقعية وتركز مراجعتك.',
  },
  'revision.grade_targets.understanding_intro_generic': {
    en: 'In GCSE English, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.',
    ar: 'في GCSE English، بتشوف ثلاث درجات مختلفة على تقاريرك. فهم شنو تعني كل درجة يساعدك تحدد أهداف واقعية وتركز مراجعتك.',
  },
  'revision.grade_targets.working_at_title': {
    en: 'Working At Grade',
    ar: 'الدرجة الحالية',
  },
  'revision.grade_targets.working_at_body': {
    en: 'This is the grade your current work is at right now. It is based on your classwork, homework, and assessments so far. Think of it as a snapshot of where you are today. This grade can change with effort and targeted practice.',
    ar: 'هذي درجة شغلك الحالي. تعتمد على أعمالك الصفية والواجبات والتقييمات اللي سوّيتها لحد الحين. فكّر فيها كصورة للحظتك الراهنة. هالدرجة تقدر تتغير بالمجهود والتدريب المركّز.',
  },
  'revision.grade_targets.predicted_title': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقعة',
  },
  'revision.grade_targets.predicted_body': {
    en: 'This is the grade your teacher thinks you will get in the actual exam, based on your trajectory. It factors in your current level plus how much progress is expected. If your predicted grade is lower than your target, it means you need to change something.',
    ar: 'هذي الدرجة اللي معلمك يتوقع تحصل عليها في الامتحان الفعلي، بناءً على مسارك. تأخذ بعين الاعتبار مستواك الحالي وكمية التقدم المتوقع. إذا كانت أقل من هدفك، يعني لازم تغيّر شي.',
  },
  'revision.grade_targets.target_title': {
    en: 'Target Grade',
    ar: 'الدرجة المستهدفة',
  },
  'revision.grade_targets.target_body': {
    en: 'This is the grade your school expects you to achieve, usually based on your KS2 SATs results or baseline tests. It is the minimum you should be aiming for. Many students exceed their target grade with consistent revision and exam practice.',
    ar: 'هذي الدرجة اللي مدرستك تتوقع تحقّقها، عادةً بناءً على نتائج SATs في KS2 أو اختبارات خط الأساس. هي الحد الأدنى اللي المفروض تهدف له. وايد طلاب يتجاوزون درجتهم المستهدفة بالمراجعة المنتظمة وتمارين الامتحان.',
  },
  'revision.grade_targets.boundaries_heading': {
    en: '{board} Mark Boundaries (approximate, % of total)',
    ar: 'حدود درجات {board} (تقريبية، % من المجموع)',
  },
  'revision.grade_targets.boundaries_note': {
    en: 'Boundaries shift slightly year to year. Always check the latest official grade boundaries from {board}.',
    ar: 'الحدود تتغير قليلاً من سنة لثانية. دايماً راجع آخر الحدود الرسمية من {board}.',
  },
  'revision.grade_targets.boundaries_grade_label': {
    en: 'Grade',
    ar: 'الدرجة',
  },
  'revision.grade_targets.key_insight_label': {
    en: 'Key insight:',
    ar: 'نقطة مهمة:',
  },
  'revision.grade_targets.key_insight_body': {
    en: 'Your working at grade is not fixed. Students regularly jump one or two grades between mocks and the real exam. The difference is almost always revision quality and exam technique, not natural ability.',
    ar: 'درجتك الحالية مو ثابتة. الطلاب كثيراً يرتفعون درجة أو درجتين بين الامتحانات التجريبية والفعلية. الفرق دايماً تقريباً جودة المراجعة وأسلوب الامتحان، مو الموهبة الطبيعية.',
  },
  'revision.grade_targets.grade_guides_heading_91': {
    en: 'Grade-Specific Guides (9-1)',
    ar: 'أدلة خاصة بكل درجة (9-1)',
  },
  'revision.grade_targets.grade_guides_heading_letter': {
    en: 'Grade-Specific Guides (A*-G)',
    ar: 'أدلة خاصة بكل درجة (A*-G)',
  },
  'revision.grade_targets.grade_guides_intro_letter': {
    en: 'Each guide is written for 9-1 grades, but we also show the equivalent A*-G grade for Cambridge IGCSE. Examples use texts you study.',
    ar: 'كل دليل مكتوب لدرجات 9-1، بس بنبيّن كمان الدرجة المعادلة بنظام A*-G لـ Cambridge IGCSE. الأمثلة من النصوص اللي تدرسها.',
  },
  'revision.grade_targets.grade_guides_intro_91': {
    en: 'Each guide tells you exactly what markers want at that grade, what skills to practise, and how to level up from where you are now.',
    ar: 'كل دليل يخبرك بالضبط شنو يبي المصحّحون في تلك الدرجة، وشنو المهارات اللي تدرّبها، وكيف ترتقي من مستواك الحين.',
  },
  'revision.grade_targets.read_the_guide': {
    en: 'Read the guide',
    ar: 'اقرا الدليل',
  },

  // Grade card titles & subtitles (9-1)
  'revision.grade_targets.grade5.title': {
    en: 'How to Get a Grade 5',
    ar: 'كيف تحصل على الدرجة 5',
  },
  'revision.grade_targets.grade5.subtitle': {
    en: 'The "strong pass" — what you need to secure it',
    ar: 'الاجتياز القوي — شنو تحتاج تضمنه',
  },
  'revision.grade_targets.grade7.title': {
    en: 'How to Get a Grade 7',
    ar: 'كيف تحصل على الدرجة 7',
  },
  'revision.grade_targets.grade7.subtitle': {
    en: 'Moving into the top band — what separates good from great',
    ar: 'الدخول للمستوى الأعلى — شنو يفرّق الجيد عن المتميّز',
  },
  'revision.grade_targets.grade9.title': {
    en: 'How to Get a Grade 9',
    ar: 'كيف تحصل على الدرجة 9',
  },
  'revision.grade_targets.grade9.subtitle': {
    en: 'The very top — what markers look for in exceptional work',
    ar: 'القمة — شنو يبحث عنه المصحّحون في العمل الاستثنائي',
  },

  // Grade card titles & subtitles (A*-G)
  'revision.grade_targets.gradeC.title': {
    en: 'How to Get a Grade C',
    ar: 'كيف تحصل على الدرجة C',
  },
  'revision.grade_targets.gradeC.subtitle': {
    en: 'The pass mark — what you need to secure it',
    ar: 'درجة الاجتياز — شنو تحتاج تضمنها',
  },
  'revision.grade_targets.gradeC.equivalent': {
    en: 'equivalent to 9-1 Grade 4-5',
    ar: 'معادل الدرجة 4-5 في نظام 9-1',
  },
  'revision.grade_targets.gradeA.title': {
    en: 'How to Get an A',
    ar: 'كيف تحصل على الدرجة A',
  },
  'revision.grade_targets.gradeA.subtitle': {
    en: 'Strong analytical work — thoughtful and developed',
    ar: 'عمل تحليلي قوي — متأنٍّ ومتطوّر',
  },
  'revision.grade_targets.gradeA.equivalent': {
    en: 'equivalent to 9-1 Grade 7',
    ar: 'معادل الدرجة 7 في نظام 9-1',
  },
  'revision.grade_targets.gradeAstar.title': {
    en: 'How to Get an A*',
    ar: 'كيف تحصل على الدرجة A*',
  },
  'revision.grade_targets.gradeAstar.subtitle': {
    en: 'The very top — sophisticated, conceptualised responses',
    ar: 'القمة — إجابات متطوّرة وتصوّرية',
  },
  'revision.grade_targets.gradeAstar.equivalent': {
    en: 'equivalent to 9-1 Grade 8-9',
    ar: 'معادل الدرجة 8-9 في نظام 9-1',
  },

  // Grade card skills (shared)
  'revision.grade_targets.skill.clear_explanations': {
    en: 'Clear explanations with evidence',
    ar: 'شروحات واضحة مع أدلة',
  },
  'revision.grade_targets.skill.subject_terminology': {
    en: 'Relevant use of subject terminology',
    ar: 'استخدام مناسب لمصطلحات المادة',
  },
  'revision.grade_targets.skill.writer_methods': {
    en: "Understanding of writer's methods",
    ar: 'فهم أساليب الكاتب',
  },
  'revision.grade_targets.skill.developed_analysis': {
    en: 'Thoughtful, developed analysis',
    ar: 'تحليل متأنٍّ ومتطوّر',
  },
  'revision.grade_targets.skill.judicious_quotes': {
    en: 'Judicious use of quotes',
    ar: 'استخدام حكيم للاقتباسات',
  },
  'revision.grade_targets.skill.meanings_shaped': {
    en: 'Understanding of how meanings are shaped',
    ar: 'فهم كيف تُصاغ المعاني',
  },
  'revision.grade_targets.skill.conceptualised': {
    en: 'Conceptualised, critical responses',
    ar: 'إجابات نقدية تصوّرية',
  },
  'revision.grade_targets.skill.alt_interpretations': {
    en: 'Alternative interpretations',
    ar: 'تفسيرات بديلة',
  },
  'revision.grade_targets.skill.sophisticated_expression': {
    en: 'Sophisticated, assured expression',
    ar: 'تعبير راقٍ وواثق',
  },

  // ─── revision/exam-technique/exam-technique-hub-view.tsx (client) ───────

  'revision.exam_technique.breadcrumb_label': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
  },
  'revision.exam_technique.back_to_hub': {
    en: 'Back to Revision Hub',
    ar: 'رجوع للـ Hub',
  },
  'revision.exam_technique.page_title': {
    en: '{board} Exam Technique',
    ar: 'أسلوب امتحان {board}',
  },
  'revision.exam_technique.page_subtitle': {
    en: 'Essay structure, timing and marking guide mastery for {board}',
    ar: 'إتقان بنية المقال والتوقيت ودليل التصحيح لـ {board}',
  },
  'revision.exam_technique.why_matters_badge': {
    en: 'Why This Matters',
    ar: 'ليش هذا مهم',
  },
  'revision.exam_technique.why_matters_heading': {
    en: 'Technique can be the difference between Grade 5 and Grade 9',
    ar: 'الأسلوب يقدر يكون الفرق بين الدرجة 5 والدرجة 9',
  },
  'revision.exam_technique.why_matters_body': {
    en: 'You can know every quote and every context point, but without strong exam technique your knowledge stays in your head instead of on the page. These guides are tailored specifically to the {board} specification — paper structures, question types and what each grade looks like — so every tip maps to the marks you can actually earn.',
    ar: 'تقدر تحفظ كل اقتباس وكل نقطة سياق، بس بدون أسلوب امتحان قوي تبقى معلوماتك في رأسك بدل ما تنزل على الورقة. هالأدلة مصمّمة خصيصاً لمواصفات {board} — بنية الأوراق، أنواع الأسئلة، وشكل كل درجة — بحيث كل نصيحة ترتبط بدرجات تقدر فعلاً تكسبها.',
  },
  'revision.exam_technique.guides_heading': {
    en: '{board} Technique Guides',
    ar: 'أدلة أسلوب {board}',
  },
  'revision.exam_technique.read_guide': {
    en: 'Read guide',
    ar: 'اقرا الدليل',
  },
  'revision.exam_technique.quick_tips_heading': {
    en: 'Quick Tips',
    ar: 'نصائح سريعة',
  },
  'revision.exam_technique.markers_heading': {
    en: 'Know What Your {board} Markers Look For',
    ar: 'اعرف شنو يبحث عنه مصحّحو {board}',
  },
  'revision.exam_technique.markers_body': {
    en: 'Every mark in GCSE English is tied to what markers look for. AOs differ between Literature and Language papers — Literature uses AO1-AO4, while Language uses AO1-AO4 (reading) and AO5-AO6 (writing). Note that AO4 means different things in each.',
    ar: 'كل درجة في GCSE English مرتبطة بما يبحث عنه المصحّحون. معايير AO تختلف بين أوراق Literature وLanguage — Literature تستخدم AO1-AO4، بينما Language تستخدم AO1-AO4 (قراءة) وAO5-AO6 (كتابة). لاحظ إن AO4 يعني أشياء مختلفة في كل منهم.',
  },

  // Guide card titles & descriptions
  'revision.exam_technique.guide.essay_structure.title': {
    en: 'Essay Structure',
    ar: 'بنية المقال',
  },
  'revision.exam_technique.guide.essay_structure.desc': {
    en: 'PEEL paragraphs, thesis statements, introductions, conclusions and model answers aligned to what each {board} grade looks like.',
    ar: 'فقرات PEEL، الأطروحات، المقدمات، الخواتيم ونماذج الإجابات المتوافقة مع شكل كل درجة في {board}.',
  },
  'revision.exam_technique.guide.essay_structure.tag': {
    en: 'Essential',
    ar: 'أساسي',
  },
  'revision.exam_technique.guide.time_management.title': {
    en: 'Time Management',
    ar: 'إدارة الوقت',
  },
  'revision.exam_technique.guide.time_management.desc': {
    en: 'Minute-by-minute plans for every {board} paper, marks-to-time conversion and rapid planning techniques.',
    ar: 'خطط دقيقة بدقيقة لكل ورقة في {board}، تحويل الدرجات للوقت وتقنيات التخطيط السريع.',
  },
  'revision.exam_technique.guide.question_types.title': {
    en: 'Question Types',
    ar: 'أنواع الأسئلة',
  },
  'revision.exam_technique.guide.question_types.desc': {
    en: 'Every {board} question type decoded — how to approach extract, comparison, creative and evaluation questions.',
    ar: 'كل أنواع أسئلة {board} مشروحة — كيف تتعامل مع أسئلة المقتطف والمقارنة والإبداعية والتقييمية.',
  },

  // Quick tip titles & bodies
  'revision.exam_technique.tip.read_question.title': {
    en: 'Read the question twice',
    ar: 'اقرا السؤال مرتين',
  },
  'revision.exam_technique.tip.read_question.body': {
    en: 'Underline key command words and circle the focus of the question before you start writing. Most marks are lost through misreading, not poor knowledge.',
    ar: 'حطّ خط تحت كلمات الأمر الأساسية وحوّط محور السؤال قبل ما تبدأ الكتابة. أكثر الدرجات تروح بسبب سوء الفهم، مو ضعف المعلومات.',
  },
  'revision.exam_technique.tip.plan.title': {
    en: 'Plan for 5 minutes',
    ar: 'خطّط لمدة 5 دقائق',
  },
  'revision.exam_technique.tip.plan.body': {
    en: 'A rough plan prevents waffle and keeps your argument focused. Jot down 3 points, the quotes you will use, and your thesis before writing.',
    ar: 'خطة خشنة تمنع الكلام الفارغ وتخلي حجّتك مركّزة. دوّن 3 نقاط والاقتباسات اللي ستستخدمها وأطروحتك قبل الكتابة.',
  },
  'revision.exam_technique.tip.embed_quotes.title': {
    en: 'Embed your quotes',
    ar: 'ادمج اقتباساتك',
  },
  'revision.exam_technique.tip.embed_quotes.body': {
    en: 'Never drop a quote into a sentence on its own. Weave it into your analysis: "Shelley uses the adjective \'vast\' to convey..." is far stronger than a standalone quote.',
    ar: 'لا تحطّ اقتباسًا في الجملة وحده. اندمجه في تحليلك: "يستخدم شيلي الصفة \'vast\' للتعبير عن..." أقوى بكثير من اقتباس منفصل.',
  },
  'revision.exam_technique.tip.link_ideas.title': {
    en: 'Link to the big ideas',
    ar: 'اربط بالأفكار الكبيرة',
  },
  'revision.exam_technique.tip.link_ideas.body': {
    en: 'Markers reward responses that connect to context, authorial intent, and wider themes. Always ask yourself: why did the writer make this choice?',
    ar: 'المصحّحون يكافئون الإجابات اللي تتصل بالسياق وقصد الكاتب والموضوعات الأشمل. دايماً اسأل نفسك: ليش الكاتب اختار هذا؟',
  },
  'revision.exam_technique.tip.watch_clock.title': {
    en: 'Watch the clock',
    ar: 'راقب الوقت',
  },
  'revision.exam_technique.tip.watch_clock.body': {
    en: 'If you cannot finish a paragraph, write your key point in a single sentence and move on. A complete paper with short answers beats an incomplete paper with perfect ones.',
    ar: 'إذا ما قدرت تكمّل الفقرة، اكتب نقطتك الأساسية في جملة واحدة وانتقل. ورقة مكتملة بإجابات قصيرة أفضل من ورقة ناقصة بإجابات مثالية.',
  },
  'revision.exam_technique.tip.terminology.title': {
    en: 'Use subject terminology',
    ar: 'استخدم مصطلحات المادة',
  },
  'revision.exam_technique.tip.terminology.body': {
    en: 'Words like "metaphor", "sibilance", "iambic pentameter", and "semantic field" show the marker you understand craft. Use them precisely, not just to drop them in.',
    ar: 'كلمات مثل "استعارة" و"صفير" و"iambic pentameter" و"حقل دلالي" تُظهر للمصحّح إنك تفهم الحِرفة. استخدمها بدقة، مو بس للإشارة.',
  },

  // Assessment objectives table
  'revision.exam_technique.ao.response_quotation.label': {
    en: 'Response & quotation',
    ar: 'الإجابة والاقتباس',
  },
  'revision.exam_technique.ao.response_quotation.detail': {
    en: 'Lit & Lang: read, understand, and respond using textual references (including quotations) to support your interpretation.',
    ar: 'Lit وLang: اقرأ وافهم واستجب باستخدام مراجع نصية (بما فيها الاقتباسات) لتدعيم تفسيرك.',
  },
  'revision.exam_technique.ao.language_structure.label': {
    en: 'Language & structure',
    ar: 'اللغة والبنية',
  },
  'revision.exam_technique.ao.language_structure.detail': {
    en: 'Lit & Lang: analyse how writers use language, form, and structure to create meanings and effects. Use relevant subject terminology.',
    ar: 'Lit وLang: حلّل كيف يستخدم الكتّاب اللغة والشكل والبنية لخلق المعاني والتأثيرات. استخدم المصطلحات المناسبة.',
  },
  'revision.exam_technique.ao.context_synthesis.label': {
    en: 'Context (Lit) / Synthesis (Lang)',
    ar: 'السياق (Lit) / التوليف (Lang)',
  },
  'revision.exam_technique.ao.context_synthesis.detail': {
    en: "Lit: show understanding of texts and the contexts they were written in. Lang: compare writers' ideas and perspectives across two or more texts.",
    ar: 'Lit: أظهر فهمك للنصوص وسياقاتها. Lang: قارن أفكار ووجهات نظر الكتّاب عبر نصّين أو أكثر.',
  },
  'revision.exam_technique.ao.ao4_lit.label': {
    en: 'Technical accuracy',
    ar: 'الدقة التقنية',
  },
  'revision.exam_technique.ao.ao4_lit.detail': {
    en: 'Literature only: use a range of vocabulary and sentence structures for clarity, purpose and effect with accurate spelling and punctuation. Worth ~5% of Lit marks and assessed on specific essays only (e.g. AQA Shakespeare + modern text).',
    ar: 'Literature فقط: استخدم طيفاً من المفردات وبنى الجمل للوضوح والغرض والتأثير مع هجاء وترقيم دقيقين. تساوي ~5% من درجات Lit وتُقيَّم على مقالات محددة فقط.',
  },
  'revision.exam_technique.ao.ao4_lang.label': {
    en: 'Evaluation',
    ar: 'التقييم',
  },
  'revision.exam_technique.ao.ao4_lang.detail': {
    en: 'Language reading only: evaluate texts critically, supporting this with appropriate textual references.',
    ar: 'قراءة Language فقط: قيّم النصوص بشكل نقدي، مدعومًا بمراجع نصية مناسبة.',
  },
  'revision.exam_technique.ao.ao5.label': {
    en: 'Writing: content & organisation',
    ar: 'الكتابة: المحتوى والتنظيم',
  },
  'revision.exam_technique.ao.ao5.detail': {
    en: 'Language writing only: communicate clearly, effectively, and imaginatively, selecting and adapting tone, style, and register. Usually 24 of the 40 writing marks.',
    ar: 'كتابة Language فقط: تواصل بوضوح وفاعلية وإبداع، مع اختيار النبرة والأسلوب والمستوى اللغوي وتكييفها. عادةً 24 من أصل 40 درجة كتابة.',
  },
  'revision.exam_technique.ao.ao6.label': {
    en: 'Writing: technical accuracy',
    ar: 'الكتابة: الدقة التقنية',
  },
  'revision.exam_technique.ao.ao6.detail': {
    en: 'Language writing only: use a range of vocabulary and sentence structures for clarity, purpose, and effect with accurate spelling and punctuation. Usually 16 of the 40 writing marks.',
    ar: 'كتابة Language فقط: استخدم طيفاً من المفردات وبنى الجمل للوضوح والغرض والتأثير مع هجاء وترقيم دقيقين. عادةً 16 من أصل 40 درجة كتابة.',
  },
  'revision.exam_technique.cta_heading': {
    en: 'Start with {board} essay structure',
    ar: 'ابدأ ببنية مقال {board}',
  },
  'revision.exam_technique.cta_body': {
    en: 'Learning how to structure a paragraph properly is the single fastest way to improve your grade. Start with PEEL and work through our {board}-specific model answers.',
    ar: 'تعلّم كيف تبني الفقرة بشكل صحيح هو أسرع طريقة لتحسين درجتك. ابدأ بـ PEEL واشتغل على نماذج الإجابات الخاصة بـ {board}.',
  },
  'revision.exam_technique.cta_button': {
    en: 'Essay Structure Guide',
    ar: 'دليل بنية المقال',
  },

  // ─── revision/ial/page.tsx (server) ─────────────────────────────────────

  'revision.ial.back_to_hub': {
    en: 'Back to Your Hub',
    ar: 'رجوع لـ Hub مالك',
  },
  'revision.ial.hero_badge': {
    en: 'Pearson Edexcel International A-Level',
    ar: 'Pearson Edexcel International A-Level',
  },
  'revision.ial.hero_title': {
    en: 'Your IAL Hub',
    ar: 'IAL Hub مالك',
  },
  'revision.ial.hero_body': {
    en: 'Unit-by-unit guidance, mock exam packs, AI-marked essays, and set-text study for Pearson Edexcel International A-Level English Literature (YLE0) and Language. Every section below is built around the IAL specification — not borrowed from UK A-Level.',
    ar: 'إرشادات وحدة بوحدة، حزم امتحانات تجريبية، مقالات مصحَّحة بالذكاء الاصطناعي، ودراسة النصوص المقرّرة لـ Pearson Edexcel International A-Level English Literature (YLE0) واللغة. كل قسم أدناه مبني على مواصفات IAL — مو مستعار من UK A-Level.',
  },
  'revision.ial.cta_units': {
    en: 'Jump to units',
    ar: 'روح للوحدات',
  },
  'revision.ial.cta_mocks': {
    en: 'Mock exam pack',
    ar: 'حزمة الامتحانات التجريبية',
  },
  'revision.ial.cta_ai': {
    en: 'AI self-learning',
    ar: 'التعلّم الذاتي بالذكاء الاصطناعي',
  },
  'revision.ial.units_heading': {
    en: 'Unit structure',
    ar: 'بنية الوحدات',
  },
  'revision.ial.units_subheading': {
    en: 'Four modular exams — two at AS, two at A2. Each carries its own weighting and demands a different revision approach.',
    ar: 'أربعة امتحانات معيارية — اثنان في AS واثنان في A2. كل منها له وزنه الخاص ويحتاج أسلوب مراجعة مختلف.',
  },
  'revision.ial.mocks_heading': {
    en: 'Mock exam pack',
    ar: 'حزمة الامتحانات التجريبية',
  },
  'revision.ial.mocks_subheading': {
    en: 'Timed practice papers aligned to each IAL unit.',
    ar: 'أوراق تدريب موقّتة متوافقة مع كل وحدة IAL.',
  },
  'revision.ial.ai_heading': {
    en: 'AI self-learning tools',
    ar: 'أدوات التعلّم الذاتي بالذكاء الاصطناعي',
  },
  'revision.ial.ai_subheading': {
    en: 'Submit, get feedback, and iterate faster than any textbook allows.',
    ar: 'أرسل، احصل على تغذية راجعة، وحسّن بسرعة أكثر من أي كتاب مدرسي.',
  },
  'revision.ial.pitfalls_heading': {
    en: 'Common IAL pitfalls',
    ar: 'الأخطاء الشائعة في IAL',
  },
  'revision.ial.pitfalls_subheading': {
    en: 'IAL-specific traps that catch students used to the UK A-Level system.',
    ar: 'فخاخ خاصة بـ IAL تقع فيها الطلاب اللي اعتادوا نظام UK A-Level.',
  },
  'revision.ial.set_texts_heading': {
    en: 'Set texts',
    ar: 'النصوص المقرّرة',
  },
  'revision.ial.set_texts_subheading': {
    en: 'IAL English Literature set texts — analysis and context guides.',
    ar: 'نصوص IAL English Literature المقرّرة — أدلة التحليل والسياق.',
  },
  'revision.ial.open_text': {
    en: 'Open text guide',
    ar: 'افتح دليل النص',
  },
  'revision.ial.open_tool': {
    en: 'Open tool',
    ar: 'افتح الأداة',
  },
  'revision.ial.start_mock': {
    en: 'Start mock',
    ar: 'ابدأ الامتحان التجريبي',
  },
  'revision.ial.difficulty.practice': {
    en: 'Practice',
    ar: 'تدريب',
  },
  'revision.ial.difficulty.mock': {
    en: 'Mock',
    ar: 'تجريبي',
  },
  'revision.ial.difficulty.real_time': {
    en: 'Real-Time',
    ar: 'وقت فعلي',
  },
  'revision.ial.ao_heading': {
    en: 'Assessment Objectives (AOs)',
    ar: 'معايير التقييم (AOs)',
  },
  'revision.ial.ao_subheading': {
    en: 'Every IAL essay is marked against these five AOs. Your writing needs to serve all of them — missing one is the difference between an A and an A*.',
    ar: 'كل مقال IAL يُصحَّح وفق هذه المعايير الخمسة. كتابتك لازم تخدم كلها — التغاضي عن معيار واحد يفرّق بين A وA*.',
  },
  'revision.ial.keep_going_heading': {
    en: 'Keep going',
    ar: 'كمّل',
  },
  'revision.ial.link.analytics.title': {
    en: 'Your Analytics',
    ar: 'تحليلاتك',
  },
  'revision.ial.link.analytics.body': {
    en: 'Progress + weak AOs',
    ar: 'التقدم + AOs الضعيفة',
  },
  'revision.ial.link.study_plan.title': {
    en: 'Study Plan',
    ar: 'خطة الدراسة',
  },
  'revision.ial.link.study_plan.body': {
    en: 'Week-by-week diagnostic',
    ar: 'تشخيص أسبوعاً بأسبوع',
  },
  'revision.ial.link.flashcards.title': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
  },
  'revision.ial.link.flashcards.body': {
    en: 'Quote + terminology drill',
    ar: 'تدريب الاقتباسات والمصطلحات',
  },
  'revision.ial.link.exam_technique.title': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
  },
  'revision.ial.link.exam_technique.body': {
    en: 'Essay structures + timing',
    ar: 'بنى المقالات والتوقيت',
  },
  'revision.ial.footnote': {
    en: 'Aligned with the Pearson Edexcel International A-Level English Literature (YLE0) and English Language (WEN0) specifications. Always cross-check with the current live specification before exam entry. New content and mock packs are added regularly.',
    ar: 'متوافق مع مواصفات Pearson Edexcel International A-Level English Literature (YLE0) وEnglish Language (WEN0). دايماً راجع المواصفة الحية الحالية قبل التسجيل في الامتحان. يُضاف محتوى جديد وحزم تجريبية بانتظام.',
  },

  // ─── revision/common-errors/page.tsx (server) ────────────────────────────

  'revision.common_errors.breadcrumb_label': {
    en: 'Common Errors',
    ar: 'الأخطاء الشائعة',
  },
  'revision.common_errors.hero_badge': {
    en: 'Verified library',
    ar: 'مكتبة موثّقة',
  },
  'revision.common_errors.hero_title': {
    en: '{count} Mistakes That Cost Marks',
    ar: '{count} خطأ يكلّفك درجات',
  },
  'revision.common_errors.hero_body': {
    en: 'Verified against board specifications and primary sources. These are the misquotations, wrong contexts, and version mix-ups examiners see most often in GCSE and IGCSE English Literature.',
    ar: 'موثّقة ضد مواصفات البورد والمصادر الأولية. هذي أكثر الاقتباسات الخاطئة والسياقات الغلط والخلط في الإصدارات اللي يشوفها المصحّحون في GCSE وIGCSE English Literature.',
  },
  'revision.common_errors.cta_worst': {
    en: 'Start with the worst offenders',
    ar: 'ابدأ بالأخطر',
  },
  'revision.common_errors.cta_essay_mistakes': {
    en: 'Essay-writing mistakes (different page)',
    ar: 'أخطاء كتابة المقال (صفحة ثانية)',
  },
  'revision.common_errors.badge_primary_sources': {
    en: 'Verified against primary sources',
    ar: 'موثّق ضد المصادر الأولية',
  },
  'revision.common_errors.badge_board_specs': {
    en: 'Cross-checked with board specs',
    ar: 'مراجَع مع مواصفات البورد',
  },
  'revision.common_errors.badge_examples': {
    en: 'Wrong vs right examples',
    ar: 'أمثلة غلط مقابل صح',
  },
  'revision.common_errors.badge_updated': {
    en: 'Updated for current anthologies',
    ar: 'محدَّث لأحدث المقتطفات',
  },
  'revision.common_errors.why_different_heading': {
    en: 'Why these errors are different',
    ar: 'ليش هالأخطاء مختلفة',
  },
  'revision.common_errors.why_different_body1': {
    en: 'Most "common mistakes" lists are about essay-writing technique (retelling, no quotation, no terminology). This list is different. Every entry below is a factual error — a misquotation, a wrong setting, a wrong date, an anthology version mix-up — that examiners can verify against the text in front of them. Get one of these wrong and the marker can\'t give you the AO2 or AO3 mark, no matter how strong the rest of the analysis is.',
    ar: 'معظم قوائم "الأخطاء الشائعة" عن أسلوب كتابة المقال (إعادة السرد، ما في اقتباس، ما في مصطلحات). هالقائمة مختلفة. كل إدخال أدناه خطأ واقعي — اقتباس غلط، مكان غلط، تاريخ غلط، خلط في إصدار المقتطف — يقدر المصحّح يتحقق منه من النص أمامه. اغلط في واحد منها والمصحّح ما يقدر يعطيك درجة AO2 أو AO3، مهما كان باقي التحليل قوياً.',
  },
  'revision.common_errors.why_different_body2': {
    en: 'Want the technique-and-craft mistakes (retelling, no terminology, vague effects)? See the 20 essay-writing mistakes guide.',
    ar: 'تبي أخطاء الأسلوب والحرفة (إعادة السرد، ما في مصطلحات، تأثيرات مبهمة)؟ شوف دليل 20 خطأ في كتابة المقال.',
  },
  'revision.common_errors.see_essay_mistakes': {
    en: 'See the 20 essay-writing mistakes guide',
    ar: 'شوف دليل 20 خطأ في كتابة المقال',
  },
  'revision.common_errors.categories_heading': {
    en: 'Jump to a category',
    ar: 'روح لفئة',
  },
  'revision.common_errors.item_count_one': {
    en: '{count} item',
    ar: '{count} عنصر',
  },
  'revision.common_errors.item_count_many': {
    en: '{count} items',
    ar: '{count} عناصر',
  },
  'revision.common_errors.common_error_label': {
    en: 'Common error',
    ar: 'الخطأ الشائع',
  },
  'revision.common_errors.correct_answer_label': {
    en: 'Correct answer',
    ar: 'الإجابة الصحيحة',
  },
  'revision.common_errors.why_label': {
    en: 'Why it matters / source',
    ar: 'ليش مهم / المصدر',
  },
  'revision.common_errors.verification_badge': {
    en: 'Verification standard',
    ar: 'معيار التوثيق',
  },
  'revision.common_errors.verification_heading': {
    en: 'Every flag is verified against a primary source',
    ar: 'كل تنبيه موثّق ضد مصدر أولي',
  },
  'revision.common_errors.verification_body': {
    en: "Where a board specifies a particular edition or version, we cite that edition. Where a writer's biography is in dispute, we use the writer's own statements. Spot something we got wrong?",
    ar: 'حيثما يحدّد البورد إصداراً أو نسخة معينة، نستشهد بذلك الإصدار. وحيثما تكون سيرة الكاتب موضع خلاف، نستخدم تصريحاته الخاصة. لاحظت خطأً عندنا؟',
  },
  'revision.common_errors.tell_us': {
    en: 'Tell us',
    ar: 'أخبرنا',
  },
  'revision.common_errors.keep_going_heading': {
    en: 'Keep going',
    ar: 'كمّل',
  },
  'revision.common_errors.crosslink.essay_mistakes.title': {
    en: '20 essay-writing mistakes',
    ar: '20 خطأ في كتابة المقال',
  },
  'revision.common_errors.crosslink.essay_mistakes.body': {
    en: 'Different list — the technique mistakes that cap your grade (retelling, feature-spotting, no terminology, etc.).',
    ar: 'قائمة مختلفة — أخطاء الأسلوب اللي تحدّ من درجتك (إعادة السرد، تتبع السمات، ما في مصطلحات، إلخ).',
  },
  'revision.common_errors.crosslink.essay_mistakes.cta': {
    en: 'Open guide',
    ar: 'افتح الدليل',
  },
  'revision.common_errors.crosslink.poetry.title': {
    en: 'Poetry hub',
    ar: 'مركز الشعر',
  },
  'revision.common_errors.crosslink.poetry.body': {
    en: 'Verified analysis of every anthology poem — including the misquoted lines and version flags listed above.',
    ar: 'تحليل موثّق لكل قصيدة في المقتطف — بما فيها الأسطر المقتبسة خطأً وتنبيهات الإصدار المذكورة أعلاه.',
  },
  'revision.common_errors.crosslink.poetry.cta': {
    en: 'Open hub',
    ar: 'افتح المركز',
  },
  'revision.common_errors.crosslink.flashcards.title': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
  },
  'revision.common_errors.crosslink.flashcards.body': {
    en: 'Drill the exact wording of key quotations until they stick — with spaced-repetition review.',
    ar: 'درّب على الصياغة الدقيقة للاقتباسات الأساسية حتى ترسخ — مع مراجعة التكرار المتباعد.',
  },
  'revision.common_errors.crosslink.flashcards.cta': {
    en: 'Start a session',
    ar: 'ابدأ جلسة',
  },
  'revision.common_errors.back_to_hub': {
    en: 'Back to your hub',
    ar: 'رجوع لـ Hub مالك',
  },
}
