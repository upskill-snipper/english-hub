/**
 * dictionary-b1-revision.ts - Bucket B Phase B1.
 * Curated EN + Khaleeji (Gulf) Arabic for the /revision shell + hub pages.
 *
 * Khaleeji conventions (matches dictionary.ts):
 *   شنو / وايد / الحين / إحنا / روح / شوف / دوّر / سكّر / ببلاش
 * Brand + technical terms stay Latin: The English Hub, GCSE, IGCSE, IAL,
 *   AQA, OCR, Edexcel, Eduqas, Cambridge, AO1-AO5.
 * Western digits used throughout.
 */
export const B1_REVISION_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── revision/layout.tsx ────────────────────────────────────────────────

  'revision.layout.geo_faq_heading': {
    en: 'English revision: common questions',
    ar: 'مراجعة الإنجليزي: أسئلة شائعة',
    es: 'Repaso de English: preguntas frecuentes',
  },

  // ─── revision/_components/revision-shell.tsx (client) ──────────────────

  'revision.shell.nav_aria': {
    en: 'Revision sections',
    ar: 'أقسام المراجعة',
    es: 'Secciones de repaso',
  },
  'revision.shell.hub_title': {
    en: 'Your Hub',
    ar: 'Hub مالك',
    es: 'Tu Hub',
  },
  'revision.shell.open_menu_sr': {
    en: 'Open revision menu',
    ar: 'افتح قائمة المراجعة',
    es: 'Abrir el menú de repaso',
  },
  'revision.shell.exam_board_label': {
    en: 'Exam board',
    ar: 'بورد الامتحان',
    es: 'Junta examinadora',
  },
  // Collapsible sidebar group sections (revision-shell GROUPS).
  'revision.shell.group.content': {
    en: 'Content & texts',
    ar: 'المحتوى والنصوص',
    es: 'Contenido y textos',
  },
  'revision.shell.group.practice': {
    en: 'Practice & assess',
    ar: 'تمرّن وقيّم',
    es: 'Practica y evalúa',
  },
  'revision.shell.group.skills': {
    en: 'Skills & technique',
    ar: 'المهارات والأسلوب',
    es: 'Destrezas y técnica',
  },
  'revision.shell.group.resources': { en: 'Resources', ar: 'المصادر', es: 'Recursos' },
  'revision.shell.group.board': { en: 'Your board', ar: 'البورد مالك', es: 'Tu junta' },
  // IGCSE hub FAQ heading (igcse/layout.tsx).
  'revision.igcse.faq_heading': {
    en: 'IGCSE English: common questions',
    ar: 'IGCSE English: أسئلة شائعة',
    es: 'IGCSE English: preguntas frecuentes',
  },
  'revision.shell.target_grade_label': {
    en: 'Target grade',
    ar: 'الدرجة المستهدفة',
    es: 'Nota objetivo',
  },
  'revision.shell.progress_hint': {
    en: 'Sit quizzes and submit essays to see your real-data progress.',
    ar: 'حلّ الكويزات وأرسل مقالاتك عشان تشوف تقدّمك الحقيقي.',
    es: 'Haz cuestionarios y envía ensayos para ver tu progreso con datos reales.',
  },

  // Nav item labels
  'revision.shell.nav.your_hub': {
    en: 'Your Hub',
    ar: 'Hub مالك',
    es: 'Tu Hub',
  },
  'revision.shell.nav.analytics': {
    en: 'Your Analytics',
    ar: 'تحليلاتك',
    es: 'Tu analítica',
  },
  'revision.shell.nav.my_papers': {
    en: 'My Papers',
    ar: 'أوراقي',
    es: 'Mis exámenes',
  },
  'revision.shell.nav.study_tools': {
    en: 'Study Tools',
    ar: 'أدوات الدراسة',
    es: 'Herramientas de estudio',
  },
  'revision.shell.nav.study_plan': {
    en: 'Study Plan',
    ar: 'خطة الدراسة',
    es: 'Plan de estudio',
  },
  'revision.shell.nav.reading_assessment': {
    en: 'Reading Assessment',
    ar: 'تقييم القراءة',
    es: 'Evaluación de lectura',
  },
  'revision.shell.nav.mock_exams': {
    en: 'Mock Exams',
    ar: 'امتحانات تجريبية',
    es: 'Exámenes de prueba',
  },
  'revision.shell.nav.practice': {
    en: 'Practice',
    ar: 'تمارين',
    es: 'Práctica',
  },
  'revision.shell.nav.games': {
    en: 'Games',
    ar: 'ألعاب',
    es: 'Juegos',
  },
  'revision.shell.nav.poetry': {
    en: 'Poetry',
    ar: 'الشعر',
    es: 'Poesía',
  },
  'revision.shell.nav.set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقرّرة',
    es: 'Textos prescritos',
  },
  'revision.shell.nav.language_skills': {
    en: 'Language Skills',
    ar: 'مهارات اللغة',
    es: 'Destrezas lingüísticas',
  },
  'revision.shell.nav.flashcards': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
    es: 'Tarjetas de memoria',
  },
  'revision.shell.nav.exam_technique': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'revision.shell.nav.grade_targets': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
    es: 'Notas objetivo',
  },
  'revision.shell.nav.quick_quizzes': {
    en: 'Quick Quizzes',
    ar: 'كويزات سريعة',
    es: 'Cuestionarios rápidos',
  },
  'revision.shell.nav.resources_hub': {
    en: 'Resources Hub',
    ar: 'مركز الموارد',
    es: 'Centro de recursos',
  },
  'revision.shell.nav.revision_notes': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
    es: 'Apuntes de repaso',
  },
  'revision.shell.nav.model_answers': {
    en: 'Model Answers',
    ar: 'نماذج الإجابات',
    es: 'Respuestas modelo',
  },
  'revision.shell.nav.comparison_essays': {
    en: 'Comparison Essays',
    ar: 'مقالات المقارنة',
    es: 'Ensayos de comparación',
  },
  'revision.shell.nav.vocabulary': {
    en: 'Vocabulary',
    ar: 'المفردات',
    es: 'Vocabulario',
  },
  'revision.shell.nav.writing_skills': {
    en: 'Writing Skills',
    ar: 'مهارات الكتابة',
    es: 'Destrezas de escritura',
  },
  'revision.shell.nav.toolkit': {
    en: 'Toolkit',
    ar: 'صندوق الأدوات',
    es: 'Caja de herramientas',
  },
  'revision.shell.nav.ial_guide': {
    en: 'IAL Specification Guide',
    ar: 'دليل مواصفات IAL',
    es: 'Guía de especificación de IAL',
  },
  'revision.shell.nav.edexcel_igcse_hub': {
    en: 'Edexcel IGCSE Hub',
    ar: 'Edexcel IGCSE Hub',
    es: 'Edexcel IGCSE Hub',
  },
  'revision.shell.nav.cambridge_hub': {
    en: 'Cambridge Hub',
    ar: 'Cambridge Hub',
    es: 'Cambridge Hub',
  },
  'revision.shell.nav.cambridge_91_hub': {
    en: 'Cambridge (9-1) Hub',
    ar: 'Cambridge (9-1) Hub',
    es: 'Cambridge (9-1) Hub',
  },

  // ─── revision/grade-targets/page.tsx (server) ───────────────────────────

  'revision.grade_targets.breadcrumb_label': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
    es: 'Notas objetivo',
  },
  'revision.grade_targets.back_to_hub': {
    en: 'Back to Revision Hub',
    ar: 'رجوع للـ Hub',
    es: 'Volver al centro de repaso',
  },
  'revision.grade_targets.page_title': {
    en: 'Grade Targets',
    ar: 'الدرجات المستهدفة',
    es: 'Notas objetivo',
  },
  'revision.grade_targets.subtitle_board': {
    en: 'Understand your {board} grade, set your target, and know exactly how to get there ({system} grading)',
    ar: 'افهم درجتك في {board}، حدّد هدفك، واعرف بالضبط كيف توصل (نظام تقييم {system})',
    es: 'Entiende tu nota de {board}, fija tu objetivo y descubre exactamente cómo llegar a él (sistema de calificación {system})',
  },
  'revision.grade_targets.subtitle_generic': {
    en: 'Understand your grade, set your target, and know exactly how to get there',
    ar: 'افهم درجتك، حدّد هدفك، واعرف بالضبط كيف توصل',
    es: 'Entiende tu nota, fija tu objetivo y descubre exactamente cómo llegar a él',
  },
  'revision.grade_targets.board_context_board_label': {
    en: 'Showing {board} guidance.',
    ar: 'نعرض إرشادات {board}.',
    es: 'Mostrando orientación de {board}.',
  },
  'revision.grade_targets.letter_grade_note': {
    en: 'Cambridge IGCSE uses the traditional A*-G grading system, not the 9-1 system used by most GCSE boards. Throughout these guides you will also see 9-1 conversions so you can compare with other students.',
    ar: 'Cambridge IGCSE يستخدم نظام التقييم التقليدي A*-G، مو نظام 9-1 اللي تستخدمه معظم بوردات GCSE. في هالأدلة بتشوف كمان تحويلات 9-1 عشان تقدر تقارن مع الطلاب الثانيين.',
    es: 'Cambridge IGCSE usa el sistema de calificación tradicional A*-G, no el sistema 9-1 que usan la mayoría de las juntas GCSE. A lo largo de estas guías verás también las conversiones a 9-1 para que puedas compararte con otros estudiantes.',
  },
  'revision.grade_targets.nine_one_note': {
    en: '{board} uses the 9-1 grading system. Mark boundaries and paper references below are specific to your board.',
    ar: '{board} يستخدم نظام التقييم 9-1. حدود الدرجات ومراجع الأوراق أدناه خاصة ببورد مالك.',
    es: '{board} usa el sistema de calificación 9-1. Las fronteras de notas y las referencias de exámenes que aparecen abajo son específicas de tu junta.',
  },
  'revision.grade_targets.understanding_heading': {
    en: 'Understanding Your Grades',
    ar: 'فهم درجاتك',
    es: 'Entender tus notas',
  },
  'revision.grade_targets.understanding_intro_board': {
    en: 'In {board}, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.',
    ar: 'في {board}، بتشوف ثلاث درجات مختلفة على تقاريرك. فهم شنو تعني كل درجة يساعدك تحدد أهداف واقعية وتركز مراجعتك.',
    es: 'En {board} verás tres notas distintas en tus informes. Entender qué significa cada una te ayuda a fijar objetivos realistas y a centrar tu repaso.',
  },
  'revision.grade_targets.understanding_intro_generic': {
    en: 'In GCSE English, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.',
    ar: 'في GCSE English، بتشوف ثلاث درجات مختلفة على تقاريرك. فهم شنو تعني كل درجة يساعدك تحدد أهداف واقعية وتركز مراجعتك.',
    es: 'En GCSE English verás tres notas distintas en tus informes. Entender qué significa cada una te ayuda a fijar objetivos realistas y a centrar tu repaso.',
  },
  'revision.grade_targets.working_at_title': {
    en: 'Working At Grade',
    ar: 'الدرجة الحالية',
    es: 'Nota actual',
  },
  'revision.grade_targets.working_at_body': {
    en: 'This is the grade your current work is at right now. It is based on your classwork, homework, and assessments so far. Think of it as a snapshot of where you are today. This grade can change with effort and targeted practice.',
    ar: 'هذي درجة شغلك الحالي. تعتمد على أعمالك الصفية والواجبات والتقييمات اللي سوّيتها لحد الحين. فكّر فيها كصورة للحظتك الراهنة. هالدرجة تقدر تتغير بالمجهود والتدريب المركّز.',
    es: 'Esta es la nota en la que está tu trabajo en este momento. Se basa en tus tareas de clase, deberes y evaluaciones hasta ahora. Considérala una instantánea de dónde estás hoy. Esta nota puede cambiar con esfuerzo y práctica enfocada.',
  },
  'revision.grade_targets.predicted_title': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقعة',
    es: 'Nota prevista',
  },
  'revision.grade_targets.predicted_body': {
    en: 'This is the grade your teacher thinks you will get in the actual exam, based on your trajectory. It factors in your current level plus how much progress is expected. If your predicted grade is lower than your target, it means you need to change something.',
    ar: 'هذي الدرجة اللي معلمك يتوقع تحصل عليها في الامتحان الفعلي، بناءً على مسارك. تأخذ بعين الاعتبار مستواك الحالي وكمية التقدم المتوقع. إذا كانت أقل من هدفك، يعني لازم تغيّر شي.',
    es: 'Esta es la nota que tu profesor cree que sacarás en el examen real, según tu trayectoria. Tiene en cuenta tu nivel actual más el progreso que se espera. Si tu nota prevista es inferior a tu objetivo, significa que necesitas cambiar algo.',
  },
  'revision.grade_targets.target_title': {
    en: 'Target Grade',
    ar: 'الدرجة المستهدفة',
    es: 'Nota objetivo',
  },
  'revision.grade_targets.target_body': {
    en: 'This is the grade your school expects you to achieve, usually based on your KS2 SATs results or baseline tests. It is the minimum you should be aiming for. Many students exceed their target grade with consistent revision and exam practice.',
    ar: 'هذي الدرجة اللي مدرستك تتوقع تحقّقها، عادةً بناءً على نتائج SATs في KS2 أو اختبارات خط الأساس. هي الحد الأدنى اللي المفروض تهدف له. وايد طلاب يتجاوزون درجتهم المستهدفة بالمراجعة المنتظمة وتمارين الامتحان.',
    es: 'Esta es la nota que tu colegio espera que alcances, normalmente basada en tus resultados de los KS2 SATs o en pruebas de referencia. Es el mínimo al que deberías aspirar. Muchos estudiantes superan su nota objetivo con un repaso constante y práctica de examen.',
  },
  'revision.grade_targets.boundaries_heading': {
    en: '{board} Mark Boundaries (approximate, % of total)',
    ar: 'حدود درجات {board} (تقريبية، % من المجموع)',
    es: 'Fronteras de notas de {board} (aproximadas, % del total)',
  },
  'revision.grade_targets.boundaries_note': {
    en: 'Boundaries shift slightly year to year. Always check the latest official grade boundaries from {board}.',
    ar: 'الحدود تتغير قليلاً من سنة لثانية. دايماً راجع آخر الحدود الرسمية من {board}.',
    es: 'Las fronteras varían ligeramente de un año a otro. Consulta siempre las fronteras de notas oficiales más recientes de {board}.',
  },
  'revision.grade_targets.boundaries_grade_label': {
    en: 'Grade',
    ar: 'الدرجة',
    es: 'Nota',
  },
  'revision.grade_targets.key_insight_label': {
    en: 'Key insight:',
    ar: 'نقطة مهمة:',
    es: 'Idea clave:',
  },
  'revision.grade_targets.key_insight_body': {
    en: 'Your working at grade is not fixed. Students regularly jump one or two grades between mocks and the real exam. The difference is almost always revision quality and exam technique, not natural ability.',
    ar: 'درجتك الحالية مو ثابتة. الطلاب كثيراً يرتفعون درجة أو درجتين بين الامتحانات التجريبية والفعلية. الفرق دايماً تقريباً جودة المراجعة وأسلوب الامتحان، مو الموهبة الطبيعية.',
    es: 'Tu nota actual no es fija. Los estudiantes suben con frecuencia una o dos notas entre los simulacros y el examen real. La diferencia es casi siempre la calidad del repaso y la técnica de examen, no la capacidad natural.',
  },
  'revision.grade_targets.grade_guides_heading_91': {
    en: 'Grade-Specific Guides (9-1)',
    ar: 'أدلة خاصة بكل درجة (9-1)',
    es: 'Guías específicas por nota (9-1)',
  },
  'revision.grade_targets.grade_guides_heading_letter': {
    en: 'Grade-Specific Guides (A*-G)',
    ar: 'أدلة خاصة بكل درجة (A*-G)',
    es: 'Guías específicas por nota (A*-G)',
  },
  'revision.grade_targets.grade_guides_intro_letter': {
    en: 'Each guide is written for 9-1 grades, but we also show the equivalent A*-G grade for Cambridge IGCSE. Examples use texts you study.',
    ar: 'كل دليل مكتوب لدرجات 9-1، بس بنبيّن كمان الدرجة المعادلة بنظام A*-G لـ Cambridge IGCSE. الأمثلة من النصوص اللي تدرسها.',
    es: 'Cada guía está escrita para las notas 9-1, pero también mostramos la nota equivalente en A*-G para Cambridge IGCSE. Los ejemplos usan textos que estudias.',
  },
  'revision.grade_targets.grade_guides_intro_91': {
    en: 'Each guide tells you exactly what markers want at that grade, what skills to practise, and how to level up from where you are now.',
    ar: 'كل دليل يخبرك بالضبط شنو يبي المصحّحون في تلك الدرجة، وشنو المهارات اللي تدرّبها، وكيف ترتقي من مستواك الحين.',
    es: 'Cada guía te dice exactamente qué quieren los correctores en esa nota, qué destrezas practicar y cómo subir de nivel desde donde estás ahora.',
  },
  'revision.grade_targets.read_the_guide': {
    en: 'Read the guide',
    ar: 'اقرا الدليل',
    es: 'Leer la guía',
  },

  // Grade card titles & subtitles (9-1)
  'revision.grade_targets.grade5.title': {
    en: 'How to Get a Grade 5',
    ar: 'كيف تحصل على الدرجة 5',
    es: 'Cómo sacar un Grade 5',
  },
  'revision.grade_targets.grade5.subtitle': {
    en: 'The "strong pass" - what you need to secure it',
    ar: 'الاجتياز القوي - شنو تحتاج تضمنه',
    es: 'El "aprobado sólido": lo que necesitas para asegurarlo',
  },
  'revision.grade_targets.grade7.title': {
    en: 'How to Get a Grade 7',
    ar: 'كيف تحصل على الدرجة 7',
    es: 'Cómo sacar un Grade 7',
  },
  'revision.grade_targets.grade7.subtitle': {
    en: 'Moving into the top band - what separates good from great',
    ar: 'الدخول للمستوى الأعلى - شنو يفرّق الجيد عن المتميّز',
    es: 'Entrar en la franja superior: lo que separa lo bueno de lo excelente',
  },
  'revision.grade_targets.grade9.title': {
    en: 'How to Get a Grade 9',
    ar: 'كيف تحصل على الدرجة 9',
    es: 'Cómo sacar un Grade 9',
  },
  'revision.grade_targets.grade9.subtitle': {
    en: 'The very top - what markers look for in exceptional work',
    ar: 'القمة - شنو يبحث عنه المصحّحون في العمل الاستثنائي',
    es: 'La cima: lo que buscan los correctores en un trabajo excepcional',
  },

  // Grade card titles & subtitles (A*-G)
  'revision.grade_targets.gradeC.title': {
    en: 'How to Get a Grade C',
    ar: 'كيف تحصل على الدرجة C',
    es: 'Cómo sacar un Grade C',
  },
  'revision.grade_targets.gradeC.subtitle': {
    en: 'The pass mark - what you need to secure it',
    ar: 'درجة الاجتياز - شنو تحتاج تضمنها',
    es: 'La nota de aprobado: lo que necesitas para asegurarla',
  },
  'revision.grade_targets.gradeC.equivalent': {
    en: 'equivalent to 9-1 Grade 4-5',
    ar: 'يعادل الدرجة 4-5 في نظام 9-1',
    es: 'equivale a Grade 4-5 en 9-1',
  },
  'revision.grade_targets.gradeA.title': {
    en: 'How to Get an A',
    ar: 'كيف تحصل على الدرجة A',
    es: 'Cómo sacar una A',
  },
  'revision.grade_targets.gradeA.subtitle': {
    en: 'Strong analytical work - thoughtful and developed',
    ar: 'عمل تحليلي قوي - متأنٍّ ومتطوّر',
    es: 'Trabajo analítico sólido: reflexivo y desarrollado',
  },
  'revision.grade_targets.gradeA.equivalent': {
    en: 'equivalent to 9-1 Grade 7',
    ar: 'يعادل الدرجة 7 في نظام 9-1',
    es: 'equivale a Grade 7 en 9-1',
  },
  'revision.grade_targets.gradeAstar.title': {
    en: 'How to Get an A*',
    ar: 'كيف تحصل على الدرجة A*',
    es: 'Cómo sacar una A*',
  },
  'revision.grade_targets.gradeAstar.subtitle': {
    en: 'The very top - sophisticated, conceptualised responses',
    ar: 'القمة - إجابات متطوّرة وتصوّرية',
    es: 'La cima: respuestas sofisticadas y conceptualizadas',
  },
  'revision.grade_targets.gradeAstar.equivalent': {
    en: 'equivalent to 9-1 Grade 8-9',
    ar: 'يعادل الدرجة 8-9 في نظام 9-1',
    es: 'equivale a Grade 8-9 en 9-1',
  },

  // Grade card skills (shared)
  'revision.grade_targets.skill.clear_explanations': {
    en: 'Clear explanations with evidence',
    ar: 'شروحات واضحة مع أدلة',
    es: 'Explicaciones claras con pruebas',
  },
  'revision.grade_targets.skill.subject_terminology': {
    en: 'Relevant use of subject terminology',
    ar: 'استخدام مناسب لمصطلحات المادة',
    es: 'Uso pertinente de la terminología de la materia',
  },
  'revision.grade_targets.skill.writer_methods': {
    en: "Understanding of writer's methods",
    ar: 'فهم أساليب الكاتب',
    es: 'Comprensión de los métodos del escritor',
  },
  'revision.grade_targets.skill.developed_analysis': {
    en: 'Thoughtful, developed analysis',
    ar: 'تحليل متأنٍّ ومتطوّر',
    es: 'Análisis reflexivo y desarrollado',
  },
  'revision.grade_targets.skill.judicious_quotes': {
    en: 'Judicious use of quotes',
    ar: 'استخدام حكيم للاقتباسات',
    es: 'Uso juicioso de las citas',
  },
  'revision.grade_targets.skill.meanings_shaped': {
    en: 'Understanding of how meanings are shaped',
    ar: 'فهم كيف تُصاغ المعاني',
    es: 'Comprensión de cómo se construyen los significados',
  },
  'revision.grade_targets.skill.conceptualised': {
    en: 'Conceptualised, critical responses',
    ar: 'إجابات نقدية تصوّرية',
    es: 'Respuestas conceptualizadas y críticas',
  },
  'revision.grade_targets.skill.alt_interpretations': {
    en: 'Alternative interpretations',
    ar: 'تفسيرات بديلة',
    es: 'Interpretaciones alternativas',
  },
  'revision.grade_targets.skill.sophisticated_expression': {
    en: 'Sophisticated, assured expression',
    ar: 'تعبير راقٍ وواثق',
    es: 'Expresión sofisticada y segura',
  },

  // ─── revision/exam-technique/exam-technique-hub-view.tsx (client) ───────

  'revision.exam_technique.breadcrumb_label': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'revision.exam_technique.back_to_hub': {
    en: 'Back to Revision Hub',
    ar: 'رجوع للـ Hub',
    es: 'Volver al centro de repaso',
  },
  'revision.exam_technique.page_title': {
    en: '{board} Exam Technique',
    ar: 'أسلوب امتحان {board}',
    es: 'Técnica de examen de {board}',
  },
  'revision.exam_technique.page_subtitle': {
    en: 'Essay structure, timing and marking guide mastery for {board}',
    ar: 'إتقان بنية المقال والتوقيت ودليل التصحيح لـ {board}',
    es: 'Dominio de la estructura del ensayo, la gestión del tiempo y la guía de corrección para {board}',
  },
  'revision.exam_technique.why_matters_badge': {
    en: 'Why This Matters',
    ar: 'ليش هذا مهم',
    es: 'Por qué importa',
  },
  'revision.exam_technique.why_matters_heading': {
    en: 'Technique can be the difference between Grade 5 and Grade 9',
    ar: 'الأسلوب يقدر يكون الفرق بين الدرجة 5 والدرجة 9',
    es: 'La técnica puede ser la diferencia entre un Grade 5 y un Grade 9',
  },
  'revision.exam_technique.why_matters_body': {
    en: 'You can know every quote and every context point, but without strong exam technique your knowledge stays in your head instead of on the page. These guides are tailored specifically to the {board} specification - paper structures, question types and what each grade looks like - so every tip maps to the marks you can actually earn.',
    ar: 'تقدر تحفظ كل اقتباس وكل نقطة سياق، بس بدون أسلوب امتحان قوي تبقى معلوماتك في رأسك بدل ما تنزل على الورقة. هالأدلة مصمّمة خصيصاً لمواصفات {board} - بنية الأوراق، أنواع الأسئلة، وشكل كل درجة - بحيث كل نصيحة ترتبط بدرجات تقدر فعلاً تكسبها.',
    es: 'Puedes conocer cada cita y cada punto de contexto, pero sin una buena técnica de examen tu conocimiento se queda en tu cabeza en lugar de en el papel. Estas guías están adaptadas específicamente a la especificación de {board} (estructura de los exámenes, tipos de pregunta y el aspecto de cada nota), de modo que cada consejo se corresponde con los puntos que de verdad puedes conseguir.',
  },
  'revision.exam_technique.guides_heading': {
    en: '{board} Technique Guides',
    ar: 'أدلة أسلوب {board}',
    es: 'Guías de técnica de {board}',
  },
  'revision.exam_technique.read_guide': {
    en: 'Read guide',
    ar: 'اقرا الدليل',
    es: 'Leer la guía',
  },
  'revision.exam_technique.quick_tips_heading': {
    en: 'Quick Tips',
    ar: 'نصائح سريعة',
    es: 'Consejos rápidos',
  },
  'revision.exam_technique.markers_heading': {
    en: 'Know What Your {board} Markers Look For',
    ar: 'اعرف شنو يبحث عنه مصحّحو {board}',
    es: 'Conoce qué buscan los correctores de {board}',
  },
  'revision.exam_technique.markers_body': {
    en: 'Every mark in GCSE English is tied to what markers look for. AOs differ between Literature and Language papers - Literature uses AO1-AO4, while Language uses AO1-AO4 (reading) and AO5-AO6 (writing). Note that AO4 means different things in each.',
    ar: 'كل درجة في GCSE English مرتبطة بما يبحث عنه المصحّحون. معايير AO تختلف بين أوراق Literature وLanguage - Literature تستخدم AO1-AO4، بينما Language تستخدم AO1-AO4 (قراءة) وAO5-AO6 (كتابة). لاحظ إن AO4 يعني أشياء مختلفة في كل منهم.',
    es: 'Cada punto en GCSE English está ligado a lo que buscan los correctores. Los AO difieren entre los exámenes de Literature y de Language: Literature usa AO1-AO4, mientras que Language usa AO1-AO4 (lectura) y AO5-AO6 (escritura). Ten en cuenta que AO4 significa cosas distintas en cada uno.',
  },

  // Guide card titles & descriptions
  'revision.exam_technique.guide.essay_structure.title': {
    en: 'Essay Structure',
    ar: 'بنية المقال',
    es: 'Estructura del ensayo',
  },
  'revision.exam_technique.guide.essay_structure.desc': {
    en: 'PEEL paragraphs, thesis statements, introductions, conclusions and model answers aligned to what each {board} grade looks like.',
    ar: 'فقرات PEEL، الأطروحات، المقدمات، الخواتيم ونماذج الإجابات المتوافقة مع شكل كل درجة في {board}.',
    es: 'Párrafos PEEL, tesis, introducciones, conclusiones y respuestas modelo alineadas con el aspecto de cada nota de {board}.',
  },
  'revision.exam_technique.guide.essay_structure.tag': {
    en: 'Essential',
    ar: 'أساسي',
    es: 'Esencial',
  },
  'revision.exam_technique.guide.time_management.title': {
    en: 'Time Management',
    ar: 'إدارة الوقت',
    es: 'Gestión del tiempo',
  },
  'revision.exam_technique.guide.time_management.desc': {
    en: 'Minute-by-minute plans for every {board} paper, marks-to-time conversion and rapid planning techniques.',
    ar: 'خطط دقيقة بدقيقة لكل ورقة في {board}، تحويل الدرجات للوقت وتقنيات التخطيط السريع.',
    es: 'Planes minuto a minuto para cada examen de {board}, conversión de puntos a tiempo y técnicas de planificación rápida.',
  },
  'revision.exam_technique.guide.question_types.title': {
    en: 'Question Types',
    ar: 'أنواع الأسئلة',
    es: 'Tipos de pregunta',
  },
  'revision.exam_technique.guide.question_types.desc': {
    en: 'Every {board} question type decoded - how to approach extract, comparison, creative and evaluation questions.',
    ar: 'كل أنواع أسئلة {board} مشروحة - كيف تتعامل مع أسئلة المقتطف والمقارنة والإبداعية والتقييمية.',
    es: 'Cada tipo de pregunta de {board} descifrado: cómo abordar las preguntas de extracto, comparación, creativas y de evaluación.',
  },

  // Quick tip titles & bodies
  'revision.exam_technique.tip.read_question.title': {
    en: 'Read the question twice',
    ar: 'اقرا السؤال مرتين',
    es: 'Lee la pregunta dos veces',
  },
  'revision.exam_technique.tip.read_question.body': {
    en: 'Underline key command words and circle the focus of the question before you start writing. Most marks are lost through misreading, not poor knowledge.',
    ar: 'حطّ خط تحت كلمات الأمر الأساسية وحوّط محور السؤال قبل ما تبدأ الكتابة. أكثر الدرجات تروح بسبب سوء الفهم، مو ضعف المعلومات.',
    es: 'Subraya las palabras de instrucción clave y rodea el foco de la pregunta antes de empezar a escribir. La mayoría de los puntos se pierden por una mala lectura, no por falta de conocimiento.',
  },
  'revision.exam_technique.tip.plan.title': {
    en: 'Plan for 5 minutes',
    ar: 'خطّط لمدة 5 دقائق',
    es: 'Planifica durante 5 minutos',
  },
  'revision.exam_technique.tip.plan.body': {
    en: 'A rough plan prevents waffle and keeps your argument focused. Jot down 3 points, the quotes you will use, and your thesis before writing.',
    ar: 'الخطة السريعة تمنع الكلام الفارغ وتخلي حجّتك مركّزة. دوّن 3 نقاط والاقتباسات اللي بتستخدمها وأطروحتك قبل الكتابة.',
    es: 'Un esquema rápido evita la palabrería y mantiene tu argumento enfocado. Apunta 3 puntos, las citas que vas a usar y tu tesis antes de escribir.',
  },
  'revision.exam_technique.tip.embed_quotes.title': {
    en: 'Embed your quotes',
    ar: 'ادمج اقتباساتك',
    es: 'Integra tus citas',
  },
  'revision.exam_technique.tip.embed_quotes.body': {
    en: 'Never drop a quote into a sentence on its own. Weave it into your analysis: "Shelley uses the adjective \'vast\' to convey..." is far stronger than a standalone quote.',
    ar: 'لا تحطّ اقتباس في جملة لحاله. ادمجه في تحليلك: "يستخدم شيلي الصفة \'vast\' للتعبير عن..." أقوى بكثير من اقتباس منفصل.',
    es: 'Nunca sueltes una cita en una oración por sí sola. Intégrala en tu análisis: "Shelley usa el adjetivo \'vast\' para transmitir..." es mucho más fuerte que una cita aislada.',
  },
  'revision.exam_technique.tip.link_ideas.title': {
    en: 'Link to the big ideas',
    ar: 'اربط بالأفكار الكبيرة',
    es: 'Conecta con las grandes ideas',
  },
  'revision.exam_technique.tip.link_ideas.body': {
    en: 'Markers reward responses that connect to context, authorial intent, and wider themes. Always ask yourself: why did the writer make this choice?',
    ar: 'المصحّحون يكافئون الإجابات اللي تتصل بالسياق وقصد الكاتب والموضوعات الأشمل. دايماً اسأل نفسك: ليش الكاتب اختار هذا؟',
    es: 'Los correctores premian las respuestas que conectan con el contexto, la intención del autor y los temas más amplios. Pregúntate siempre: ¿por qué tomó el escritor esta decisión?',
  },
  'revision.exam_technique.tip.watch_clock.title': {
    en: 'Watch the clock',
    ar: 'راقب الوقت',
    es: 'Vigila el reloj',
  },
  'revision.exam_technique.tip.watch_clock.body': {
    en: 'If you cannot finish a paragraph, write your key point in a single sentence and move on. A complete paper with short answers beats an incomplete paper with perfect ones.',
    ar: 'إذا ما قدرت تكمّل الفقرة، اكتب نقطتك الأساسية في جملة واحدة وانتقل. ورقة مكتملة بإجابات قصيرة أفضل من ورقة ناقصة بإجابات مثالية.',
    es: 'Si no puedes terminar un párrafo, escribe tu idea clave en una sola oración y sigue adelante. Un examen completo con respuestas cortas vale más que un examen incompleto con respuestas perfectas.',
  },
  'revision.exam_technique.tip.terminology.title': {
    en: 'Use subject terminology',
    ar: 'استخدم مصطلحات المادة',
    es: 'Usa la terminología de la materia',
  },
  'revision.exam_technique.tip.terminology.body': {
    en: 'Words like "metaphor", "sibilance", "iambic pentameter", and "semantic field" show the marker you understand craft. Use them precisely, not just to drop them in.',
    ar: 'كلمات مثل "استعارة" و"صفير" و"iambic pentameter" و"حقل دلالي" تُظهر للمصحّح إنك تفهم الحِرفة. استخدمها بدقة، مو بس عشان تحشرها حشر.',
    es: 'Palabras como "metáfora", "sibilancia", "iambic pentameter" y "campo semántico" demuestran al corrector que entiendes el oficio. Úsalas con precisión, no solo por meterlas.',
  },

  // Assessment objectives table
  'revision.exam_technique.ao.response_quotation.label': {
    en: 'Response & quotation',
    ar: 'الإجابة والاقتباس',
    es: 'Respuesta y citación',
  },
  'revision.exam_technique.ao.response_quotation.detail': {
    en: 'Lit & Lang: read, understand, and respond using textual references (including quotations) to support your interpretation.',
    ar: 'Lit وLang: اقرأ وافهم واستجب باستخدام مراجع نصية (بما فيها الاقتباسات) لتدعيم تفسيرك.',
    es: 'Lit y Lang: lee, comprende y responde usando referencias textuales (incluidas citas) para respaldar tu interpretación.',
  },
  'revision.exam_technique.ao.language_structure.label': {
    en: 'Language & structure',
    ar: 'اللغة والبنية',
    es: 'Lenguaje y estructura',
  },
  'revision.exam_technique.ao.language_structure.detail': {
    en: 'Lit & Lang: analyse how writers use language, form, and structure to create meanings and effects. Use relevant subject terminology.',
    ar: 'Lit وLang: حلّل كيف يستخدم الكتّاب اللغة والشكل والبنية لخلق المعاني والتأثيرات. استخدم المصطلحات المناسبة.',
    es: 'Lit y Lang: analiza cómo usan los escritores el lenguaje, la forma y la estructura para crear significados y efectos. Usa la terminología pertinente de la materia.',
  },
  'revision.exam_technique.ao.context_synthesis.label': {
    en: 'Context (Lit) / Synthesis (Lang)',
    ar: 'السياق (Lit) / التوليف (Lang)',
    es: 'Contexto (Lit) / Síntesis (Lang)',
  },
  'revision.exam_technique.ao.context_synthesis.detail': {
    en: "Lit: show understanding of texts and the contexts they were written in. Lang: compare writers' ideas and perspectives across two or more texts.",
    ar: 'Lit: أظهر فهمك للنصوص وسياقاتها. Lang: قارن أفكار ووجهات نظر الكتّاب عبر نصّين أو أكثر.',
    es: 'Lit: muestra comprensión de los textos y de los contextos en que se escribieron. Lang: compara las ideas y perspectivas de los escritores en dos o más textos.',
  },
  'revision.exam_technique.ao.ao4_lit.label': {
    en: 'Technical accuracy',
    ar: 'الدقة التقنية',
    es: 'Precisión técnica',
  },
  'revision.exam_technique.ao.ao4_lit.detail': {
    en: 'Literature only: use a range of vocabulary and sentence structures for clarity, purpose and effect with accurate spelling and punctuation. Worth ~5% of Lit marks and assessed on specific essays only (e.g. AQA Shakespeare + modern text).',
    ar: 'Literature فقط: استخدم طيفاً من المفردات وبنى الجمل للوضوح والغرض والتأثير مع هجاء وترقيم دقيقين. تساوي ~5% من درجات Lit وتُقيَّم على مقالات محددة فقط.',
    es: 'Solo Literature: usa una variedad de vocabulario y estructuras oracionales para lograr claridad, propósito y efecto, con ortografía y puntuación correctas. Vale ~5% de los puntos de Lit y se evalúa solo en ensayos concretos (p. ej. AQA Shakespeare + texto moderno).',
  },
  'revision.exam_technique.ao.ao4_lang.label': {
    en: 'Evaluation',
    ar: 'التقييم',
    es: 'Evaluación',
  },
  'revision.exam_technique.ao.ao4_lang.detail': {
    en: 'Language reading only: evaluate texts critically, supporting this with appropriate textual references.',
    ar: 'قراءة Language فقط: قيّم النصوص بشكل نقدي، مدعومًا بمراجع نصية مناسبة.',
    es: 'Solo lectura de Language: evalúa los textos de forma crítica, respaldándolo con referencias textuales apropiadas.',
  },
  'revision.exam_technique.ao.ao5.label': {
    en: 'Writing: content & organisation',
    ar: 'الكتابة: المحتوى والتنظيم',
    es: 'Escritura: contenido y organización',
  },
  'revision.exam_technique.ao.ao5.detail': {
    en: 'Language writing only: communicate clearly, effectively, and imaginatively, selecting and adapting tone, style, and register. Usually 24 of the 40 writing marks.',
    ar: 'كتابة Language فقط: تواصل بوضوح وفاعلية وإبداع، مع اختيار النبرة والأسلوب والمستوى اللغوي وتكييفها. عادةً 24 من أصل 40 درجة كتابة.',
    es: 'Solo escritura de Language: comunica con claridad, eficacia e imaginación, seleccionando y adaptando el tono, el estilo y el registro. Normalmente 24 de los 40 puntos de escritura.',
  },
  'revision.exam_technique.ao.ao6.label': {
    en: 'Writing: technical accuracy',
    ar: 'الكتابة: الدقة التقنية',
    es: 'Escritura: precisión técnica',
  },
  'revision.exam_technique.ao.ao6.detail': {
    en: 'Language writing only: use a range of vocabulary and sentence structures for clarity, purpose, and effect with accurate spelling and punctuation. Usually 16 of the 40 writing marks.',
    ar: 'كتابة Language فقط: استخدم طيفاً من المفردات وبنى الجمل للوضوح والغرض والتأثير مع هجاء وترقيم دقيقين. عادةً 16 من أصل 40 درجة كتابة.',
    es: 'Solo escritura de Language: usa una variedad de vocabulario y estructuras oracionales para lograr claridad, propósito y efecto, con ortografía y puntuación correctas. Normalmente 16 de los 40 puntos de escritura.',
  },
  'revision.exam_technique.cta_heading': {
    en: 'Start with {board} essay structure',
    ar: 'ابدأ ببنية مقال {board}',
    es: 'Empieza por la estructura del ensayo de {board}',
  },
  'revision.exam_technique.cta_body': {
    en: 'Learning how to structure a paragraph properly is the single fastest way to improve your grade. Start with PEEL and work through our {board}-specific model answers.',
    ar: 'تعلّم كيف تبني الفقرة بشكل صحيح هو أسرع طريقة لتحسين درجتك. ابدأ بـ PEEL واشتغل على نماذج الإجابات الخاصة بـ {board}.',
    es: 'Aprender a estructurar bien un párrafo es la forma más rápida de mejorar tu nota. Empieza por PEEL y trabaja con nuestras respuestas modelo específicas de {board}.',
  },
  'revision.exam_technique.cta_button': {
    en: 'Essay Structure Guide',
    ar: 'دليل بنية المقال',
    es: 'Guía de estructura del ensayo',
  },

  // ─── revision/ial/page.tsx (server) ─────────────────────────────────────

  'revision.ial.back_to_hub': {
    en: 'Back to Your Hub',
    ar: 'رجوع لـ Hub مالك',
    es: 'Volver a tu Hub',
  },
  'revision.ial.hero_badge': {
    en: 'Pearson Edexcel International A-Level',
    ar: 'Pearson Edexcel International A-Level',
    es: 'Pearson Edexcel International A-Level',
  },
  'revision.ial.hero_title': {
    en: 'Your IAL Hub',
    ar: 'IAL Hub مالك',
    es: 'Tu Hub de IAL',
  },
  'revision.ial.hero_body': {
    en: 'Unit-by-unit guidance, mock exam packs, AI-marked essays, and set-text study for Pearson Edexcel International A-Level English Literature (YLE0) and Language. Every section below is built around the IAL specification - not borrowed from UK A-Level.',
    ar: 'إرشادات وحدة بوحدة، حزم امتحانات تجريبية، مقالات مصحَّحة بالذكاء الاصطناعي، ودراسة النصوص المقرّرة لـ Pearson Edexcel International A-Level English Literature (YLE0) واللغة. كل قسم أدناه مبني على مواصفات IAL - مو مستعار من UK A-Level.',
    es: 'Orientación unidad por unidad, paquetes de exámenes de prueba, ensayos corregidos con IA y estudio de textos prescritos para Pearson Edexcel International A-Level English Literature (YLE0) y Language. Cada sección de abajo está construida en torno a la especificación de IAL, no tomada prestada del UK A-Level.',
  },
  'revision.ial.cta_units': {
    en: 'Jump to units',
    ar: 'روح للوحدات',
    es: 'Ir a las unidades',
  },
  'revision.ial.cta_mocks': {
    en: 'Mock exam pack',
    ar: 'حزمة الامتحانات التجريبية',
    es: 'Paquete de exámenes de prueba',
  },
  'revision.ial.cta_ai': {
    en: 'AI self-learning',
    ar: 'التعلّم الذاتي بالذكاء الاصطناعي',
    es: 'Autoaprendizaje con IA',
  },
  'revision.ial.units_heading': {
    en: 'Unit structure',
    ar: 'بنية الوحدات',
    es: 'Estructura de las unidades',
  },
  'revision.ial.units_subheading': {
    en: 'Four modular exams - two at AS, two at A2. Each carries its own weighting and demands a different revision approach.',
    ar: 'أربعة امتحانات معيارية - اثنان في AS واثنان في A2. كل منها له وزنه الخاص ويحتاج أسلوب مراجعة مختلف.',
    es: 'Cuatro exámenes modulares: dos en AS y dos en A2. Cada uno tiene su propia ponderación y exige un enfoque de repaso distinto.',
  },
  'revision.ial.mocks_heading': {
    en: 'Mock exam pack',
    ar: 'حزمة الامتحانات التجريبية',
    es: 'Paquete de exámenes de prueba',
  },
  'revision.ial.mocks_subheading': {
    en: 'Timed practice papers aligned to each IAL unit.',
    ar: 'أوراق تدريب موقّتة متوافقة مع كل وحدة IAL.',
    es: 'Exámenes de práctica cronometrados alineados con cada unidad de IAL.',
  },
  'revision.ial.ai_heading': {
    en: 'AI self-learning tools',
    ar: 'أدوات التعلّم الذاتي بالذكاء الاصطناعي',
    es: 'Herramientas de autoaprendizaje con IA',
  },
  'revision.ial.ai_subheading': {
    en: 'Submit, get feedback, and iterate faster than any textbook allows.',
    ar: 'أرسل، احصل على تغذية راجعة، وحسّن بسرعة أكثر من أي كتاب مدرسي.',
    es: 'Envía, recibe comentarios e itera más rápido de lo que permite cualquier libro de texto.',
  },
  'revision.ial.pitfalls_heading': {
    en: 'Common IAL pitfalls',
    ar: 'الأخطاء الشائعة في IAL',
    es: 'Errores comunes en IAL',
  },
  'revision.ial.pitfalls_subheading': {
    en: 'IAL-specific traps that catch students used to the UK A-Level system.',
    ar: 'فخاخ خاصة بـ IAL تقع فيها الطلاب اللي اعتادوا نظام UK A-Level.',
    es: 'Trampas específicas de IAL que pillan a los estudiantes acostumbrados al sistema UK A-Level.',
  },
  'revision.ial.set_texts_heading': {
    en: 'Set texts',
    ar: 'النصوص المقرّرة',
    es: 'Textos prescritos',
  },
  'revision.ial.set_texts_subheading': {
    en: 'IAL English Literature set texts - analysis and context guides.',
    ar: 'نصوص IAL English Literature المقرّرة - أدلة التحليل والسياق.',
    es: 'Textos prescritos de IAL English Literature: guías de análisis y contexto.',
  },
  'revision.ial.open_text': {
    en: 'Open text guide',
    ar: 'افتح دليل النص',
    es: 'Abrir la guía del texto',
  },
  'revision.ial.open_tool': {
    en: 'Open tool',
    ar: 'افتح الأداة',
    es: 'Abrir herramienta',
  },
  'revision.ial.start_mock': {
    en: 'Start mock',
    ar: 'ابدأ الامتحان التجريبي',
    es: 'Empezar examen de prueba',
  },
  'revision.ial.difficulty.practice': {
    en: 'Practice',
    ar: 'تدريب',
    es: 'Práctica',
  },
  'revision.ial.difficulty.mock': {
    en: 'Mock',
    ar: 'تجريبي',
    es: 'Prueba',
  },
  'revision.ial.difficulty.real_time': {
    en: 'Real-Time',
    ar: 'وقت فعلي',
    es: 'Tiempo real',
  },
  'revision.ial.ao_heading': {
    en: 'Assessment Objectives (AOs)',
    ar: 'معايير التقييم (AOs)',
    es: 'Objetivos de evaluación (AOs)',
  },
  'revision.ial.ao_subheading': {
    en: 'Every IAL essay is marked against these five AOs. Your writing needs to serve all of them - missing one is the difference between an A and an A*.',
    ar: 'كل مقال IAL يُصحَّح وفق هذه المعايير الخمسة. كتابتك لازم تخدم كلها - التغاضي عن معيار واحد يفرّق بين A وA*.',
    es: 'Cada ensayo de IAL se corrige según estos cinco AO. Tu escritura tiene que atenderlos todos: dejar fuera uno es la diferencia entre una A y una A*.',
  },
  'revision.ial.keep_going_heading': {
    en: 'Keep going',
    ar: 'كمّل',
    es: 'Sigue adelante',
  },
  'revision.ial.link.analytics.title': {
    en: 'Your Analytics',
    ar: 'تحليلاتك',
    es: 'Tu analítica',
  },
  'revision.ial.link.analytics.body': {
    en: 'Progress + weak AOs',
    ar: 'التقدم + AOs الضعيفة',
    es: 'Progreso + AOs débiles',
  },
  'revision.ial.link.study_plan.title': {
    en: 'Study Plan',
    ar: 'خطة الدراسة',
    es: 'Plan de estudio',
  },
  'revision.ial.link.study_plan.body': {
    en: 'Week-by-week diagnostic',
    ar: 'تشخيص أسبوعاً بأسبوع',
    es: 'Diagnóstico semana a semana',
  },
  'revision.ial.link.flashcards.title': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
    es: 'Tarjetas de memoria',
  },
  'revision.ial.link.flashcards.body': {
    en: 'Quote + terminology drill',
    ar: 'تدريب الاقتباسات والمصطلحات',
    es: 'Práctica de citas y terminología',
  },
  'revision.ial.link.exam_technique.title': {
    en: 'Exam Technique',
    ar: 'أسلوب الامتحان',
    es: 'Técnica de examen',
  },
  'revision.ial.link.exam_technique.body': {
    en: 'Essay structures + timing',
    ar: 'بنى المقالات والتوقيت',
    es: 'Estructuras de ensayo + tiempo',
  },
  'revision.ial.footnote': {
    en: 'Aligned with the Pearson Edexcel International A-Level English Literature (YLE0) and English Language (WEN0) specifications. Always cross-check with the current live specification before exam entry. New content and mock packs are added regularly.',
    ar: 'متوافق مع مواصفات Pearson Edexcel International A-Level English Literature (YLE0) وEnglish Language (WEN0). دايماً راجع المواصفة الحية الحالية قبل التسجيل في الامتحان. يُضاف محتوى جديد وحزم تجريبية بانتظام.',
    es: 'Alineado con las especificaciones de Pearson Edexcel International A-Level English Literature (YLE0) y English Language (WEN0). Coteja siempre con la especificación vigente actual antes de inscribirte en el examen. Se añaden contenido nuevo y paquetes de prueba con regularidad.',
  },

  // ─── revision/common-errors/page.tsx (server) ────────────────────────────

  'revision.common_errors.breadcrumb_label': {
    en: 'Common Errors',
    ar: 'الأخطاء الشائعة',
    es: 'Errores comunes',
  },
  'revision.common_errors.hero_badge': {
    en: 'Verified library',
    ar: 'مكتبة موثّقة',
    es: 'Biblioteca verificada',
  },
  'revision.common_errors.hero_title': {
    en: '{count} Mistakes That Cost Marks',
    ar: '{count} خطأ يكلّفك درجات',
    es: '{count} errores que cuestan puntos',
  },
  'revision.common_errors.hero_body': {
    en: 'Verified against board specifications and primary sources. These are the misquotations, wrong contexts, and version mix-ups examiners see most often in GCSE and IGCSE English Literature.',
    ar: 'موثّقة ضد مواصفات البورد والمصادر الأولية. هذي أكثر الاقتباسات الخاطئة والسياقات الغلط والخلط في الإصدارات اللي يشوفها المصحّحون في GCSE وIGCSE English Literature.',
    es: 'Verificados frente a las especificaciones de las juntas y a fuentes primarias. Estas son las citas erróneas, los contextos equivocados y las confusiones de versiones que los examinadores ven con más frecuencia en GCSE e IGCSE English Literature.',
  },
  'revision.common_errors.cta_worst': {
    en: 'Start with the worst offenders',
    ar: 'ابدأ بالأخطر',
    es: 'Empieza por los peores',
  },
  'revision.common_errors.cta_essay_mistakes': {
    en: 'Essay-writing mistakes (different page)',
    ar: 'أخطاء كتابة المقال (صفحة ثانية)',
    es: 'Errores de redacción de ensayos (otra página)',
  },
  'revision.common_errors.badge_primary_sources': {
    en: 'Verified against primary sources',
    ar: 'موثّق ضد المصادر الأولية',
    es: 'Verificado frente a fuentes primarias',
  },
  'revision.common_errors.badge_board_specs': {
    en: 'Cross-checked with board specs',
    ar: 'مراجَع مع مواصفات البورد',
    es: 'Cotejado con las especificaciones de las juntas',
  },
  'revision.common_errors.badge_examples': {
    en: 'Wrong vs right examples',
    ar: 'أمثلة غلط مقابل صح',
    es: 'Ejemplos de incorrecto vs correcto',
  },
  'revision.common_errors.badge_updated': {
    en: 'Updated for current anthologies',
    ar: 'محدَّث لأحدث المختارات الشعرية',
    es: 'Actualizado para las antologías actuales',
  },
  'revision.common_errors.why_different_heading': {
    en: 'Why these errors are different',
    ar: 'ليش هالأخطاء مختلفة',
    es: 'Por qué estos errores son diferentes',
  },
  'revision.common_errors.why_different_body1': {
    en: 'Most "common mistakes" lists are about essay-writing technique (retelling, no quotation, no terminology). This list is different. Every entry below is a factual error - a misquotation, a wrong setting, a wrong date, an anthology version mix-up - that examiners can verify against the text in front of them. Get one of these wrong and the marker can\'t give you the AO2 or AO3 mark, no matter how strong the rest of the analysis is.',
    ar: 'معظم قوائم "الأخطاء الشائعة" عن أسلوب كتابة المقال (إعادة السرد، ما في اقتباس، ما في مصطلحات). هالقائمة مختلفة. كل إدخال أدناه خطأ واقعي - اقتباس غلط، مكان غلط، تاريخ غلط، خلط في إصدار المقتطف - يقدر المصحّح يتحقق منه من النص أمامه. اغلط في واحد منها والمصحّح ما يقدر يعطيك درجة AO2 أو AO3، مهما كان باقي التحليل قوياً.',
    es: 'La mayoría de las listas de "errores comunes" tratan sobre la técnica de redacción de ensayos (recontar la historia, no citar, no usar terminología). Esta lista es distinta. Cada entrada de abajo es un error factual (una cita incorrecta, un escenario equivocado, una fecha equivocada, una confusión de versión de antología) que los examinadores pueden verificar contra el texto que tienen delante. Falla en uno de estos y el corrector no puede darte el punto de AO2 o AO3, por muy sólido que sea el resto del análisis.',
  },
  'revision.common_errors.why_different_body2': {
    en: 'Want the technique-and-craft mistakes (retelling, no terminology, vague effects)? See the 20 essay-writing mistakes guide.',
    ar: 'تبي أخطاء الأسلوب والحرفة (إعادة السرد، ما في مصطلحات، تأثيرات مبهمة)؟ شوف دليل 20 خطأ في كتابة المقال.',
    es: '¿Quieres los errores de técnica y oficio (recontar, no usar terminología, efectos vagos)? Consulta la guía de 20 errores de redacción de ensayos.',
  },
  'revision.common_errors.see_essay_mistakes': {
    en: 'See the 20 essay-writing mistakes guide',
    ar: 'شوف دليل 20 خطأ في كتابة المقال',
    es: 'Ver la guía de 20 errores de redacción de ensayos',
  },
  'revision.common_errors.categories_heading': {
    en: 'Jump to a category',
    ar: 'روح لفئة',
    es: 'Ir a una categoría',
  },
  'revision.common_errors.item_count_one': {
    en: '{count} item',
    ar: '{count} عنصر',
    es: '{count} elemento',
  },
  'revision.common_errors.item_count_many': {
    en: '{count} items',
    ar: '{count} عناصر',
    es: '{count} elementos',
  },
  'revision.common_errors.common_error_label': {
    en: 'Common error',
    ar: 'الخطأ الشائع',
    es: 'Error común',
  },
  'revision.common_errors.correct_answer_label': {
    en: 'Correct answer',
    ar: 'الإجابة الصحيحة',
    es: 'Respuesta correcta',
  },
  'revision.common_errors.why_label': {
    en: 'Why it matters / source',
    ar: 'ليش مهم / المصدر',
    es: 'Por qué importa / fuente',
  },
  'revision.common_errors.verification_badge': {
    en: 'Verification standard',
    ar: 'معيار التوثيق',
    es: 'Estándar de verificación',
  },
  'revision.common_errors.verification_heading': {
    en: 'Every flag is verified against a primary source',
    ar: 'كل تنبيه موثّق ضد مصدر أولي',
    es: 'Cada aviso está verificado frente a una fuente primaria',
  },
  'revision.common_errors.verification_body': {
    en: "Where a board specifies a particular edition or version, we cite that edition. Where a writer's biography is in dispute, we use the writer's own statements. Spot something we got wrong?",
    ar: 'حيثما يحدّد البورد إصداراً أو نسخة معينة، نستشهد بذلك الإصدار. وحيثما تكون سيرة الكاتب موضع خلاف، نستخدم تصريحاته الخاصة. لاحظت خطأً عندنا؟',
    es: 'Cuando una junta especifica una edición o versión concreta, citamos esa edición. Cuando la biografía de un escritor está en disputa, usamos las propias declaraciones del escritor. ¿Detectas algo que hayamos puesto mal?',
  },
  'revision.common_errors.tell_us': {
    en: 'Tell us',
    ar: 'أخبرنا',
    es: 'Avísanos',
  },
  'revision.common_errors.keep_going_heading': {
    en: 'Keep going',
    ar: 'كمّل',
    es: 'Sigue adelante',
  },
  'revision.common_errors.crosslink.essay_mistakes.title': {
    en: '20 essay-writing mistakes',
    ar: '20 خطأ في كتابة المقال',
    es: '20 errores de redacción de ensayos',
  },
  'revision.common_errors.crosslink.essay_mistakes.body': {
    en: 'Different list - the technique mistakes that cap your grade (retelling, feature-spotting, no terminology, etc.).',
    ar: 'قائمة مختلفة - أخطاء الأسلوب اللي تحدّ من درجتك (إعادة السرد، تتبع السمات، ما في مصطلحات، إلخ).',
    es: 'Una lista distinta: los errores de técnica que limitan tu nota (recontar, identificar recursos sin más, no usar terminología, etc.).',
  },
  'revision.common_errors.crosslink.essay_mistakes.cta': {
    en: 'Open guide',
    ar: 'افتح الدليل',
    es: 'Abrir la guía',
  },
  'revision.common_errors.crosslink.poetry.title': {
    en: 'Poetry hub',
    ar: 'مركز الشعر',
    es: 'Centro de poesía',
  },
  'revision.common_errors.crosslink.poetry.body': {
    en: 'Verified analysis of every anthology poem - including the misquoted lines and version flags listed above.',
    ar: 'تحليل موثّق لكل قصيدة في المختارات الشعرية - بما فيها الأسطر المقتبسة خطأً وتنبيهات الإصدار المذكورة أعلاه.',
    es: 'Análisis verificado de cada poema de la antología, incluidos los versos mal citados y los avisos de versión enumerados arriba.',
  },
  'revision.common_errors.crosslink.poetry.cta': {
    en: 'Open hub',
    ar: 'افتح المركز',
    es: 'Abrir el centro',
  },
  'revision.common_errors.crosslink.flashcards.title': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
    es: 'Tarjetas de memoria',
  },
  'revision.common_errors.crosslink.flashcards.body': {
    en: 'Drill the exact wording of key quotations until they stick - with spaced-repetition review.',
    ar: 'درّب على الصياغة الدقيقة للاقتباسات الأساسية حتى ترسخ - مع مراجعة التكرار المتباعد.',
    es: 'Practica la redacción exacta de las citas clave hasta que se te queden, con repaso de repetición espaciada.',
  },
  'revision.common_errors.crosslink.flashcards.cta': {
    en: 'Start a session',
    ar: 'ابدأ جلسة',
    es: 'Empezar una sesión',
  },
  'revision.common_errors.back_to_hub': {
    en: 'Back to your hub',
    ar: 'رجوع لـ Hub مالك',
    es: 'Volver a tu Hub',
  },
}
