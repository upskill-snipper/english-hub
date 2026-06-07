/** dictionary-b15-marking-school.ts - Bucket B Phase B1.5. Curated EN + Khaleeji (Gulf) AR for /marking + /school product UI. */
export const B15_MARKING_SCHOOL_DICTIONARY: Record<
  string,
  { en: string; ar: string; es?: string }
> = {
  // ─── /marking shared nav ──────────────────────────────────────────────────
  'marking.nav.marking': { en: 'Marking', ar: 'التصحيح', es: 'Corrección' },
  'marking.nav.results': { en: 'Results', ar: 'النتائج', es: 'Resultados' },
  'marking.nav.history': { en: 'History', ar: 'السجل', es: 'Historial' },
  'marking.nav.sample_essays': {
    en: 'Sample essays',
    ar: 'نماذج المقالات',
    es: 'Redacciones de muestra',
  },

  // ─── /marking/submit ──────────────────────────────────────────────────────
  'marking.submit.breadcrumb_new': { en: 'New submission', ar: 'تسليم جديد', es: 'Nueva entrega' },
  'marking.submit.title': {
    en: 'Submit an essay for marking',
    ar: 'سلّم مقالتك للتصحيح',
    es: 'Envía una redacción para corregir',
  },
  'marking.submit.subtitle': {
    en: "Paste your essay below. We'll return a predicted grade, AO breakdown and marker-style feedback.",
    ar: 'الصق مقالتك أدناه وإحنا نرجّع لك توقع الدرجة وتحليل AO وملاحظات المصحّح.',
    es: 'Pega tu redacción abajo. Te devolveremos una nota prevista, el desglose por AO y comentarios al estilo de un corrector.',
  },
  'marking.submit.how_ai_works': {
    en: 'How does AI marking work?',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي؟',
    es: '¿Cómo funciona la corrección con IA?',
  },
  'marking.submit.ai_off_heading': {
    en: 'AI marking is turned off',
    ar: 'تصحيح الذكاء الاصطناعي موقوف',
    es: 'La corrección con IA está desactivada',
  },
  'marking.submit.ai_off_body': {
    en: 'A parent or guardian has turned off AI features for this account. You can still use all other parts of The English Hub.',
    ar: 'أحد الوالدين أو الوصي وقف ميزات الذكاء الاصطناعي لهذا الحساب. تقدر تستخدم باقي أجزاء The English Hub بشكل طبيعي.',
    es: 'Un padre, madre o tutor ha desactivado las funciones de IA para esta cuenta. Aún puedes usar todas las demás partes de The English Hub.',
  },
  'marking.submit.ai_off_parent_link': {
    en: 'Parent Settings',
    ar: 'إعدادات الوالدين',
    es: 'Ajustes para padres',
  },
  'marking.submit.ai_off_explainer_link': {
    en: 'how AI marking works',
    ar: 'شلون يشتغل التصحيح',
    es: 'cómo funciona la corrección con IA',
  },
  'marking.submit.card_title': {
    en: 'Essay details',
    ar: 'تفاصيل المقالة',
    es: 'Detalles de la redacción',
  },
  'marking.submit.card_desc': {
    en: 'Pick your exam board, paper and question so we can apply the right marking guide.',
    ar: 'اختر البورد والورقة والسؤال عشان نطبّق دليل التصحيح الصح.',
    es: 'Elige tu exam board, prueba y pregunta para que podamos aplicar la guía de corrección adecuada.',
  },
  'marking.submit.label_board': { en: 'Exam board', ar: 'بورد الامتحان', es: 'Exam board' },
  'marking.submit.select_board': {
    en: 'Select board',
    ar: 'اختر البورد',
    es: 'Selecciona un exam board',
  },
  'marking.submit.coming_soon': { en: 'Coming soon', ar: 'قريباً', es: 'Próximamente' },
  'marking.submit.board_coming_soon_note': {
    en: 'Mark schemes for {board} are coming soon. Please pick another board for now.',
    ar: 'مخططات التصحيح لـ{board} قادمة قريباً. اختر بورد ثاني الحين.',
    es: 'Los criterios de corrección de {board} estarán disponibles pronto. Elige otro exam board por ahora.',
  },
  'marking.submit.label_paper': { en: 'Paper', ar: 'الورقة', es: 'Prueba' },
  'marking.submit.select_paper': {
    en: 'Select paper',
    ar: 'اختر الورقة',
    es: 'Selecciona una prueba',
  },
  'marking.submit.choose_board_first': {
    en: 'Choose a board first',
    ar: 'اختر البورد أول',
    es: 'Elige primero un exam board',
  },
  'marking.submit.label_question': { en: 'Question', ar: 'السؤال', es: 'Pregunta' },
  'marking.submit.select_question': {
    en: 'Select question',
    ar: 'اختر السؤال',
    es: 'Selecciona una pregunta',
  },
  'marking.submit.choose_paper_first': {
    en: 'Choose a paper first',
    ar: 'اختر الورقة أول',
    es: 'Elige primero una prueba',
  },
  'marking.submit.label_title': { en: 'Title', ar: 'العنوان', es: 'Título' },
  'marking.submit.label_title_optional': { en: '(optional)', ar: '(اختياري)', es: '(opcional)' },
  'marking.submit.title_placeholder': {
    en: 'e.g. Macbeth - ambition essay, draft 2',
    ar: 'مثلاً: Macbeth - مقالة الطموح، المسودة 2',
    es: 'p. ej. Macbeth - redacción sobre la ambición, borrador 2',
  },
  'marking.submit.label_essay': { en: 'Your essay', ar: 'مقالتك', es: 'Tu redacción' },
  'marking.submit.essay_placeholder': {
    en: 'Paste or type your full essay here...',
    ar: 'الصق أو اكتب مقالتك الكاملة هنا...',
    es: 'Pega o escribe aquí tu redacción completa...',
  },
  'marking.submit.word': { en: 'word', ar: 'كلمة', es: 'palabra' },
  'marking.submit.words': { en: 'words', ar: 'كلمة', es: 'palabras' },
  'marking.submit.min_50': {
    en: '(minimum 50 words)',
    ar: '(الحد الأدنى 50 كلمة)',
    es: '(mínimo 50 palabras)',
  },
  'marking.submit.no_upper_limit': {
    en: 'No upper limit',
    ar: 'بدون حد أعلى',
    es: 'Sin límite máximo',
  },
  'marking.submit.btn_cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'marking.submit.btn_submit': {
    en: 'Submit for marking',
    ar: 'سلّم للتصحيح',
    es: 'Enviar para corregir',
  },
  'marking.submit.btn_marking': {
    en: 'Marking your essay…',
    ar: 'يصحّح مقالتك…',
    es: 'Corrigiendo tu redacción…',
  },
  'marking.submit.wait_note': {
    en: "AI marking usually takes 5-15 seconds. Please don't close this page.",
    ar: 'التصحيح عادةً يأخذ 5-15 ثانية. لا تسكر الصفحة الحين.',
    es: 'La corrección con IA suele tardar entre 5 y 15 segundos. Por favor, no cierres esta página.',
  },

  // ─── /marking/history ────────────────────────────────────────────────────
  'marking.history.breadcrumb': { en: 'History', ar: 'السجل', es: 'Historial' },
  'marking.history.title': {
    en: 'Marking history',
    ar: 'سجل التصحيح',
    es: 'Historial de correcciones',
  },
  'marking.history.subtitle': {
    en: "Every essay you've submitted, with your grade trajectory.",
    ar: 'كل المقالات اللي سلّمتها مع مسار درجاتك.',
    es: 'Todas las redacciones que has enviado, con la trayectoria de tus notas.',
  },
  'marking.history.btn_new': { en: 'New submission', ar: 'تسليم جديد', es: 'Nueva entrega' },
  'marking.history.stat_essays': {
    en: 'Essays marked',
    ar: 'مقالات مصحّحة',
    es: 'Redacciones corregidas',
  },
  'marking.history.stat_avg': { en: 'Average grade', ar: 'متوسط الدرجة', es: 'Nota media' },
  'marking.history.stat_best': { en: 'Best grade', ar: 'أفضل درجة', es: 'Mejor nota' },
  'marking.history.section_past': {
    en: 'Past submissions',
    ar: 'التسليمات السابقة',
    es: 'Entregas anteriores',
  },
  'marking.history.loading': { en: 'Loading…', ar: 'لحظة…', es: 'Cargando…' },
  'marking.history.empty': {
    en: "You haven't marked any essays yet.",
    ar: 'ما صحّحت أي مقالة لحد الحين.',
    es: 'Aún no has corregido ninguna redacción.',
  },
  'marking.history.btn_first': {
    en: 'Mark your first essay',
    ar: 'صحّح أول مقالة لك',
    es: 'Corrige tu primera redacción',
  },

  // ─── /marking/results/[id] ────────────────────────────────────────────────
  'marking.results.breadcrumb': { en: 'Results', ar: 'النتائج', es: 'Resultados' },
  'marking.results.loading': {
    en: 'Loading results…',
    ar: 'يحمّل النتائج…',
    es: 'Cargando resultados…',
  },
  'marking.results.card_strengths': { en: 'Strengths', ar: 'نقاط القوة', es: 'Puntos fuertes' },
  'marking.results.card_strengths_desc': {
    en: 'What you did well',
    ar: 'شنو سوّيت زين',
    es: 'Lo que hiciste bien',
  },
  'marking.results.card_improve': {
    en: 'Areas to improve',
    ar: 'مجالات التحسين',
    es: 'Áreas de mejora',
  },
  'marking.results.card_improve_desc': {
    en: 'Focus for your next draft',
    ar: 'ركّز عليها في مسودتك الجاية',
    es: 'En qué centrarte en tu próximo borrador',
  },
  'marking.results.card_next_grade_prefix': {
    en: 'To reach grade',
    ar: 'عشان توصل درجة',
    es: 'Para alcanzar la nota',
  },
  'marking.results.card_next_grade_desc': {
    en: 'Next-grade targets',
    ar: 'أهداف الدرجة الجاية',
    es: 'Objetivos para la siguiente nota',
  },
  'marking.results.card_summary': {
    en: 'Marker summary',
    ar: 'ملخص المصحّح',
    es: 'Resumen del corrector',
  },
  'marking.results.btn_back': {
    en: 'Back to history',
    ar: 'ارجع للسجل',
    es: 'Volver al historial',
  },
  'marking.results.btn_another': {
    en: 'Mark another essay',
    ar: 'صحّح مقالة ثانية',
    es: 'Corregir otra redacción',
  },

  // ─── /marking/ai-explainer ───────────────────────────────────────────────
  'marking.ai_explainer.breadcrumb': {
    en: 'How AI Marking Works',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي',
    es: 'Cómo funciona la corrección con IA',
  },
  'marking.ai_explainer.title': {
    en: 'How AI Marking Works',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي',
    es: 'Cómo funciona la corrección con IA',
  },
  'marking.ai_explainer.subtitle': {
    en: 'Written in plain language so students, parents and teachers can understand exactly what happens when you submit an essay.',
    ar: 'مكتوب بلغة بسيطة عشان الطلاب وأولياء الأمور والمعلمين يفهمون بالضبط شنو يصير لما تسلّم مقالتك.',
    es: 'Redactado en lenguaje sencillo para que estudiantes, familias y profesores entiendan exactamente qué ocurre cuando envías una redacción.',
  },
  'marking.ai_explainer.h2_what': {
    en: '1. What is AI marking?',
    ar: '1. شنو هو التصحيح بالذكاء الاصطناعي؟',
    es: '1. ¿Qué es la corrección con IA?',
  },
  'marking.ai_explainer.h2_which': {
    en: '2. Which AI do we use?',
    ar: '2. شنو الذكاء الاصطناعي اللي نستخدمه؟',
    es: '2. ¿Qué IA utilizamos?',
  },
  'marking.ai_explainer.h2_data': {
    en: '3. What information is sent to the AI?',
    ar: '3. شنو المعلومات اللي ترسل للذكاء الاصطناعي؟',
    es: '3. ¿Qué información se envía a la IA?',
  },
  'marking.ai_explainer.h2_official': {
    en: '4. Is the grade official?',
    ar: '4. هل الدرجة رسمية؟',
    es: '4. ¿Es oficial la nota?',
  },
  'marking.ai_explainer.h2_human': {
    en: '5. Can a human review my work instead?',
    ar: '5. أقدر إنسان يراجع شغلي بدل الذكاء الاصطناعي؟',
    es: '5. ¿Puede una persona revisar mi trabajo en su lugar?',
  },
  'marking.ai_explainer.h2_optout': {
    en: '6. How do I turn off AI marking?',
    ar: '6. شلون أوقف التصحيح بالذكاء الاصطناعي؟',
    es: '6. ¿Cómo desactivo la corrección con IA?',
  },
  'marking.ai_explainer.h2_rights': { en: '7. Your rights', ar: '7. حقوقك', es: '7. Tus derechos' },
  'marking.ai_explainer.h2_questions': {
    en: '8. Questions?',
    ar: '8. أسئلة؟',
    es: '8. ¿Preguntas?',
  },
  'marking.ai_explainer.optout_box_heading': {
    en: 'To turn off AI features:',
    ar: 'عشان توقف ميزات الذكاء الاصطناعي:',
    es: 'Para desactivar las funciones de IA:',
  },

  // ─── /marking/sample/inspector-calls ────────────────────────────────────
  'marking.sample.inspector_calls.breadcrumb': {
    en: 'An Inspector Calls',
    ar: 'An Inspector Calls',
    es: 'An Inspector Calls',
  },
  'marking.sample.inspector_calls.title': {
    en: 'An Inspector Calls - Model Essay Bank',
    ar: 'An Inspector Calls - بنك النماذج',
    es: 'An Inspector Calls - Banco de redacciones modelo',
  },
  'marking.sample.inspector_calls.subtitle': {
    en: 'Five fully-annotated model responses across two popular exam questions at Grades 5, 7 and 9. Each essay includes paragraph-level annotations, AO breakdowns and marker commentary explaining why it achieves its grade.',
    ar: 'خمسة نماذج موضّحة بالكامل على سؤالين شائعين بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات على مستوى الفقرة وتحليل AO وتعليق المصحّح.',
    es: 'Cinco respuestas modelo totalmente anotadas sobre dos preguntas de examen populares, con las notas 5, 7 y 9. Cada redacción incluye anotaciones a nivel de párrafo, desgloses por AO y comentarios del corrector que explican por qué obtiene su nota.',
  },
  'marking.sample.inspector_calls.exam_question': {
    en: 'Exam question',
    ar: 'سؤال الامتحان',
    es: 'Pregunta de examen',
  },
  'marking.sample.inspector_calls.marker_commentary': {
    en: 'Marker commentary',
    ar: 'تعليق المصحّح',
    es: 'Comentario del corrector',
  },
  'marking.sample.inspector_calls.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
    es: 'Justificación de la nota',
  },
  'marking.sample.inspector_calls.grade_prefix': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'marking.sample.inspector_calls.fair_dealing_strong': {
    en: 'Fair dealing notice.',
    ar: 'إشعار الاستخدام العادل.',
    es: 'Aviso de uso legítimo.',
  },
  'marking.sample.inspector_calls.btn_back': {
    en: 'Back to sample essays',
    ar: 'ارجع للنماذج',
    es: 'Volver a las redacciones de muestra',
  },
  'marking.sample.inspector_calls.btn_mark': {
    en: 'Mark your own essay',
    ar: 'صحّح مقالتك الخاصة',
    es: 'Corrige tu propia redacción',
  },

  // ─── /marking/sample/jekyll-hyde ────────────────────────────────────────
  'marking.sample.jekyll_hyde.breadcrumb': {
    en: 'Jekyll & Hyde',
    ar: 'Jekyll & Hyde',
    es: 'Jekyll & Hyde',
  },
  'marking.sample.jekyll_hyde.title': {
    en: 'Jekyll & Hyde - Model Essay Bank',
    ar: 'Jekyll & Hyde - بنك النماذج',
    es: 'Jekyll & Hyde - Banco de redacciones modelo',
  },
  'marking.sample.jekyll_hyde.subtitle': {
    en: 'Three original model essays answering "How does Stevenson present the theme of duality?" at Grade 5, 7 and 9. Each essay includes paragraph annotations, AO breakdown, grade justification, and targeted improvements.',
    ar: 'ثلاثة نماذج أصلية تجيب على سؤال "شلون يقدّم ستيفنسون موضوع الازدواجية؟" بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات الفقرة وتحليل AO ومبرّر الدرجة وتحسينات موجّهة.',
    es: 'Tres redacciones modelo originales que responden a "¿Cómo presenta Stevenson el tema de la dualidad?" con las notas 5, 7 y 9. Cada redacción incluye anotaciones por párrafo, desglose por AO, justificación de la nota y mejoras concretas.',
  },
  'marking.sample.jekyll_hyde.jump_nav_label': {
    en: 'Jump to grade',
    ar: 'انتقل للدرجة',
    es: 'Ir a la nota',
  },
  'marking.sample.jekyll_hyde.words_suffix': { en: 'words', ar: 'كلمة', es: 'palabras' },
  'marking.sample.jekyll_hyde.marker_commentary': {
    en: 'Marker commentary',
    ar: 'تعليق المصحّح',
    es: 'Comentario del corrector',
  },
  'marking.sample.jekyll_hyde.ao_breakdown': {
    en: 'AO Breakdown',
    ar: 'تحليل AO',
    es: 'Desglose por AO',
  },
  'marking.sample.jekyll_hyde.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
    es: 'Justificación de la nota',
  },
  'marking.sample.jekyll_hyde.what_would_improve': {
    en: 'What would improve this essay?',
    ar: 'شنو يحسّن هذه المقالة؟',
    es: '¿Qué mejoraría esta redacción?',
  },
  'marking.sample.jekyll_hyde.annotation_strength': {
    en: 'Strength',
    ar: 'نقطة قوة',
    es: 'Punto fuerte',
  },
  'marking.sample.jekyll_hyde.annotation_improve': {
    en: 'To improve',
    ar: 'للتحسين',
    es: 'A mejorar',
  },
  'marking.sample.jekyll_hyde.annotation_technique': {
    en: 'Technique / AO link',
    ar: 'الأسلوب / ربط AO',
    es: 'Técnica / vínculo con AO',
  },
  'marking.sample.jekyll_hyde.btn_back': {
    en: 'Back to sample essays',
    ar: 'ارجع للنماذج',
    es: 'Volver a las redacciones de muestra',
  },
  'marking.sample.jekyll_hyde.btn_mark': {
    en: 'Mark your own essay',
    ar: 'صحّح مقالتك الخاصة',
    es: 'Corrige tu propia redacción',
  },
  'marking.sample.jekyll_hyde.grade_label': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'marking.sample.jekyll_hyde.ao_total_prefix': { en: 'Total:', ar: 'المجموع:', es: 'Total:' },

  // ─── /marking/sample/christmas-carol ────────────────────────────────────
  'marking.sample.christmas_carol.breadcrumb': {
    en: 'A Christmas Carol',
    ar: 'A Christmas Carol',
    es: 'A Christmas Carol',
  },
  'marking.sample.christmas_carol.title': {
    en: 'A Christmas Carol - Model Essay Bank',
    ar: 'A Christmas Carol - بنك النماذج',
    es: 'A Christmas Carol - Banco de redacciones modelo',
  },
  'marking.sample.christmas_carol.subtitle': {
    en: 'Three original model essays answering "How does Dickens present Scrooge\'s transformation?" at Grade 5, 7 and 9. Each essay includes paragraph annotations, AO breakdown, grade justification, and targeted improvements.',
    ar: 'ثلاثة نماذج أصلية تجيب على سؤال "شلون يقدّم ديكنز تحوّل سكروج؟" بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات الفقرة وتحليل AO ومبرّر الدرجة وتحسينات موجّهة.',
    es: 'Tres redacciones modelo originales que responden a "¿Cómo presenta Dickens la transformación de Scrooge?" con las notas 5, 7 y 9. Cada redacción incluye anotaciones por párrafo, desglose por AO, justificación de la nota y mejoras concretas.',
  },
  'marking.sample.christmas_carol.jump_nav_label': {
    en: 'Jump to grade',
    ar: 'انتقل للدرجة',
    es: 'Ir a la nota',
  },
  'marking.sample.christmas_carol.grade_label': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'marking.sample.christmas_carol.words_suffix': { en: 'words', ar: 'كلمة', es: 'palabras' },
  'marking.sample.christmas_carol.marker_commentary': {
    en: 'Marker commentary',
    ar: 'تعليق المصحّح',
    es: 'Comentario del corrector',
  },
  'marking.sample.christmas_carol.ao_breakdown': {
    en: 'AO Breakdown',
    ar: 'تحليل AO',
    es: 'Desglose por AO',
  },
  'marking.sample.christmas_carol.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
    es: 'Justificación de la nota',
  },
  'marking.sample.christmas_carol.what_would_improve': {
    en: 'What would improve this essay?',
    ar: 'شنو يحسّن هذه المقالة؟',
    es: '¿Qué mejoraría esta redacción?',
  },
  'marking.sample.christmas_carol.annotation_strength': {
    en: 'Strength',
    ar: 'نقطة قوة',
    es: 'Punto fuerte',
  },
  'marking.sample.christmas_carol.annotation_improve': {
    en: 'To improve',
    ar: 'للتحسين',
    es: 'A mejorar',
  },
  'marking.sample.christmas_carol.annotation_technique': {
    en: 'Technique / AO link',
    ar: 'الأسلوب / ربط AO',
    es: 'Técnica / vínculo con AO',
  },
  'marking.sample.christmas_carol.btn_back': {
    en: 'Back to sample essays',
    ar: 'ارجع للنماذج',
    es: 'Volver a las redacciones de muestra',
  },
  'marking.sample.christmas_carol.btn_mark': {
    en: 'Mark your own essay',
    ar: 'صحّح مقالتك الخاصة',
    es: 'Corrige tu propia redacción',
  },

  // ─── /school/users ───────────────────────────────────────────────────────
  'school.b15.users.title': {
    en: 'User Management',
    ar: 'إدارة المستخدمين',
    es: 'Gestión de usuarios',
  },
  'school.b15.users.subtitle': {
    en: 'Manage teachers, students, and admins across your school.',
    ar: 'تنظيم المعلمين والطلاب والمشرفين في مدرستك.',
    es: 'Gestiona los profesores, estudiantes y administradores de tu centro.',
  },
  'school.b15.users.btn_import': {
    en: 'Import Users',
    ar: 'استيراد مستخدمين',
    es: 'Importar usuarios',
  },
  'school.b15.users.btn_add': { en: 'Add User', ar: 'إضافة مستخدم', es: 'Añadir usuario' },
  'school.b15.users.tab_all': { en: 'All Users', ar: 'كل المستخدمين', es: 'Todos los usuarios' },
  'school.b15.users.tab_teachers': { en: 'Teachers', ar: 'المعلمون', es: 'Profesores' },
  'school.b15.users.tab_students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'school.b15.users.tab_admins': { en: 'Admins', ar: 'المشرفون', es: 'Administradores' },
  'school.b15.users.search_placeholder': {
    en: 'Search name or email...',
    ar: 'دوّر اسم أو بريد إلكتروني...',
    es: 'Buscar por nombre o correo...',
  },
  'school.b15.users.filter_all_roles': {
    en: 'All Roles',
    ar: 'كل الأدوار',
    es: 'Todas las funciones',
  },
  'school.b15.users.filter_all_years': {
    en: 'All Years',
    ar: 'كل السنوات',
    es: 'Todos los cursos',
  },
  'school.b15.users.filter_all_status': {
    en: 'All Status',
    ar: 'كل الحالات',
    es: 'Todos los estados',
  },
  'school.b15.users.col_name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'school.b15.users.col_email': { en: 'Email', ar: 'البريد الإلكتروني', es: 'Correo electrónico' },
  'school.b15.users.col_role': { en: 'Role', ar: 'الدور', es: 'Función' },
  'school.b15.users.col_year': { en: 'Year Group', ar: 'مجموعة السنة', es: 'Curso' },
  'school.b15.users.col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.b15.users.col_last_active': { en: 'Last Active', ar: 'آخر نشاط', es: 'Última actividad' },
  'school.b15.users.col_actions': { en: 'Actions', ar: 'الإجراءات', es: 'Acciones' },
  'school.b15.users.no_users': {
    en: 'No users match your filters.',
    ar: 'ما في مستخدمين يطابقون الفلاتر.',
    es: 'Ningún usuario coincide con tus filtros.',
  },
  'school.b15.users.showing': { en: 'Showing', ar: 'يعرض', es: 'Mostrando' },
  'school.b15.users.of': { en: 'of', ar: 'من', es: 'de' },
  'school.b15.users.users_suffix': { en: 'users', ar: 'مستخدم', es: 'usuarios' },
  'school.b15.users.modal_add_title': { en: 'Add User', ar: 'إضافة مستخدم', es: 'Añadir usuario' },
  'school.b15.users.modal_edit_title': {
    en: 'Edit User',
    ar: 'تعديل المستخدم',
    es: 'Editar usuario',
  },
  'school.b15.users.label_first_name': { en: 'First Name', ar: 'الاسم الأول', es: 'Nombre' },
  'school.b15.users.label_last_name': { en: 'Last Name', ar: 'اسم العائلة', es: 'Apellidos' },
  'school.b15.users.label_email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    es: 'Correo electrónico',
  },
  'school.b15.users.label_role': { en: 'Role', ar: 'الدور', es: 'Función' },
  'school.b15.users.label_year_group': { en: 'Year Group', ar: 'مجموعة السنة', es: 'Curso' },
  'school.b15.users.label_class': {
    en: 'Class (optional)',
    ar: 'الصف (اختياري)',
    es: 'Clase (opcional)',
  },
  'school.b15.users.placeholder_first': { en: 'First name', ar: 'الاسم الأول', es: 'Nombre' },
  'school.b15.users.placeholder_last': { en: 'Last name', ar: 'اسم العائلة', es: 'Apellidos' },
  'school.b15.users.placeholder_email': {
    en: 'user@school.edu',
    ar: 'user@school.edu',
    es: 'user@school.edu',
  },
  'school.b15.users.placeholder_class': { en: 'e.g. 10B', ar: 'مثلاً 10B', es: 'p. ej. 10B' },
  'school.b15.users.send_invite': {
    en: 'Send invite email',
    ar: 'أرسل دعوة بالبريد',
    es: 'Enviar invitación por correo',
  },
  'school.b15.users.btn_cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'school.b15.users.btn_add_user': { en: 'Add User', ar: 'إضافة مستخدم', es: 'Añadir usuario' },
  'school.b15.users.btn_save': { en: 'Save Changes', ar: 'حفظ التغييرات', es: 'Guardar cambios' },
  'school.b15.users.action_edit': { en: 'Edit User', ar: 'تعديل المستخدم', es: 'Editar usuario' },
  'school.b15.users.action_reset_pw': {
    en: 'Reset Password',
    ar: 'إعادة ضبط كلمة المرور',
    es: 'Restablecer contraseña',
  },
  'school.b15.users.action_remove': {
    en: 'Remove User',
    ar: 'حذف المستخدم',
    es: 'Eliminar usuario',
  },
  'school.b15.users.bulk_selected': { en: 'selected', ar: 'محدد', es: 'seleccionados' },
  'school.b15.users.bulk_export': { en: 'Export', ar: 'تصدير', es: 'Exportar' },
  'school.b15.users.bulk_reset_pw': {
    en: 'Reset Passwords',
    ar: 'إعادة ضبط كلمات المرور',
    es: 'Restablecer contraseñas',
  },
  'school.b15.users.bulk_remove': {
    en: 'Remove Selected',
    ar: 'حذف المحدد',
    es: 'Eliminar seleccionados',
  },
  'school.b15.users.never': { en: 'Never', ar: 'أبداً', es: 'Nunca' },
  'school.b15.users.label_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.b15.users.role_admin': { en: 'Admin', ar: 'مشرف', es: 'Administrador' },
  'school.b15.users.role_teacher': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'school.b15.users.role_student': { en: 'Student', ar: 'طالب', es: 'Estudiante' },
  'school.b15.users.status_active': { en: 'Active', ar: 'نشط', es: 'Activo' },
  'school.b15.users.status_pending': {
    en: 'Pending invite',
    ar: 'دعوة معلّقة',
    es: 'Invitación pendiente',
  },
  'school.b15.users.status_suspended': { en: 'Suspended', ar: 'موقوف', es: 'Suspendido' },
  'school.b15.users.select_year_group': {
    en: 'Select year group',
    ar: 'اختر مجموعة السنة',
    es: 'Selecciona un curso',
  },
  'school.b15.users.select_role': {
    en: 'Select role',
    ar: 'اختر الدور',
    es: 'Selecciona una función',
  },
  'school.b15.users.perm_admin_label': {
    en: 'School Admin',
    ar: 'مشرف المدرسة',
    es: 'Administrador del centro',
  },
  'school.b15.users.perm_admin_desc': {
    en: 'Full access -- manage all users, view all analytics, edit school settings',
    ar: 'وصول كامل - تنظيم كل المستخدمين وعرض كل التحليلات وتعديل إعدادات المدرسة',
    es: 'Acceso completo: gestionar todos los usuarios, ver todas las analíticas y editar los ajustes del centro',
  },
  'school.b15.users.perm_teacher_label': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'school.b15.users.perm_teacher_desc': {
    en: 'View their classes, mark work, see student progress, access all resources',
    ar: 'عرض صفوفه وتصحيح الشغل ومتابعة تقدم الطلاب والوصول لكل المصادر',
    es: 'Ver sus clases, corregir trabajos, consultar el progreso de los estudiantes y acceder a todos los recursos',
  },
  'school.b15.users.perm_student_label': { en: 'Student', ar: 'طالب', es: 'Estudiante' },
  'school.b15.users.perm_student_desc': {
    en: 'Access courses, submit work, view own progress, receive feedback',
    ar: 'الوصول للمقررات وتسليم الشغل وعرض تقدمه الخاص واستلام التغذية الراجعة',
    es: 'Acceder a los cursos, entregar trabajos, ver su propio progreso y recibir comentarios',
  },

  // ─── /school/permissions ─────────────────────────────────────────────────
  'school.b15.permissions.title': {
    en: 'Permissions & Access Levels',
    ar: 'الصلاحيات ومستويات الوصول',
    es: 'Permisos y niveles de acceso',
  },
  'school.b15.permissions.subtitle': {
    en: "Understanding who can do what in your school's English Hub",
    ar: 'افهم من يقدر يسوّي شنو في English Hub مالتك',
    es: 'Entiende quién puede hacer qué en el English Hub de tu centro',
  },
  'school.b15.permissions.section_roles': {
    en: 'Roles at a Glance',
    ar: 'الأدوار في لمحة',
    es: 'Las funciones de un vistazo',
  },
  'school.b15.permissions.section_matrix': {
    en: 'Permission Matrix',
    ar: 'مصفوفة الصلاحيات',
    es: 'Matriz de permisos',
  },
  'school.b15.permissions.section_changing': {
    en: 'Changing Roles',
    ar: 'تغيير الأدوار',
    es: 'Cambio de funciones',
  },
  'school.b15.permissions.section_security': {
    en: 'Security & Data Notes',
    ar: 'ملاحظات الأمان والبيانات',
    es: 'Notas sobre seguridad y datos',
  },
  'school.b15.permissions.who_is': { en: 'Who is this?', ar: 'من هذا؟', es: '¿Quién es?' },
  'school.b15.permissions.what_can': {
    en: 'What they can do',
    ar: 'شنو يقدرون يسوّون',
    es: 'Qué pueden hacer',
  },
  'school.b15.permissions.col_feature': { en: 'Feature', ar: 'الميزة', es: 'Función' },
  'school.b15.permissions.col_admin': { en: 'Admin', ar: 'مشرف', es: 'Administrador' },
  'school.b15.permissions.col_teacher': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'school.b15.permissions.col_student': { en: 'Student', ar: 'طالب', es: 'Estudiante' },
  'school.b15.permissions.role_admin': {
    en: 'School Admin',
    ar: 'مشرف المدرسة',
    es: 'Administrador del centro',
  },
  'school.b15.permissions.role_admin_who': {
    en: 'School IT admin, Head of English, Principal / Vice-Principal',
    ar: 'مشرف تقنية المدرسة أو رئيس قسم الإنجليزي أو المدير',
    es: 'Administrador de TI del centro, jefe de departamento de inglés, director / subdirector',
  },
  'school.b15.permissions.badge_full_access': {
    en: 'Full Access',
    ar: 'وصول كامل',
    es: 'Acceso completo',
  },
  'school.b15.permissions.role_teacher': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'school.b15.permissions.role_teacher_who': {
    en: 'Subject teachers, supply teachers, teaching assistants',
    ar: 'معلمو المواد والمعلمون البدلاء والمساعدون',
    es: 'Profesores de asignatura, profesores sustitutos, auxiliares docentes',
  },
  'school.b15.permissions.badge_class_access': {
    en: 'Class Access',
    ar: 'وصول الصف',
    es: 'Acceso a la clase',
  },
  'school.b15.permissions.role_student': { en: 'Student', ar: 'طالب', es: 'Estudiante' },
  'school.b15.permissions.role_student_who': {
    en: 'All enrolled students',
    ar: 'كل الطلاب المسجّلين',
    es: 'Todos los estudiantes matriculados',
  },
  'school.b15.permissions.badge_personal': {
    en: 'Personal Access',
    ar: 'وصول شخصي',
    es: 'Acceso personal',
  },
  'school.b15.permissions.promote_title': {
    en: 'Promote a Teacher to Admin',
    ar: 'رقّ معلماً لمشرف',
    es: 'Ascender un profesor a administrador',
  },
  'school.b15.permissions.promote_note': {
    en: 'Navigate through the following steps in the school portal:',
    ar: 'اتبع الخطوات التالية في بوابة المدرسة:',
    es: 'Sigue estos pasos en el portal del centro:',
  },
  'school.b15.permissions.promote_instant': {
    en: 'The teacher will gain full admin access immediately upon saving.',
    ar: 'يحصل المعلم على وصول مشرف كامل فور الحفظ.',
    es: 'El profesor obtendrá acceso completo de administrador en cuanto guardes los cambios.',
  },
  'school.b15.permissions.demote_title': {
    en: 'Demote an Admin to Teacher',
    ar: 'خفّض مشرفاً لمعلم',
    es: 'Degradar un administrador a profesor',
  },
  'school.b15.permissions.demote_note': {
    en: 'Navigate through the following steps in the school portal:',
    ar: 'اتبع الخطوات التالية في بوابة المدرسة:',
    es: 'Sigue estos pasos en el portal del centro:',
  },
  'school.b15.permissions.demote_warning': {
    en: 'Note: you cannot demote your own account. Another admin must do this.',
    ar: 'ملاحظة: ما تقدر تخفّض حسابك بنفسك. لازم مشرف ثاني يسوّي هذا.',
    es: 'Nota: no puedes degradar tu propia cuenta. Lo debe hacer otro administrador.',
  },
  'school.b15.permissions.class_access_title': {
    en: 'Class Access for Teachers',
    ar: 'وصول الصف للمعلمين',
    es: 'Acceso a las clases para los profesores',
  },
  'school.b15.permissions.class_access_desc': {
    en: "Teachers automatically receive access to the classes they are assigned to. They cannot see students or data from other teachers' classes.",
    ar: 'يحصل المعلمون تلقائياً على الوصول للصفوف المخصّصة لهم. ما يقدرون يشوفون طلاب أو بيانات صفوف المعلمين الثانيين.',
    es: 'Los profesores reciben acceso automáticamente a las clases que tienen asignadas. No pueden ver estudiantes ni datos de las clases de otros profesores.',
  },
  'school.b15.permissions.sec_data_isolation': {
    en: 'Student data isolation',
    ar: 'عزل بيانات الطلاب',
    es: 'Aislamiento de los datos de los estudiantes',
  },
  'school.b15.permissions.sec_data_isolation_desc': {
    en: "Students can only view their own work, scores, and progress. No student can see another student's data at any point.",
    ar: 'يشوف الطلاب فقط شغلهم ودرجاتهم وتقدّمهم. ما يقدر طالب يرى بيانات طالب آخر أبداً.',
    es: 'Los estudiantes solo pueden ver su propio trabajo, sus notas y su progreso. Ningún estudiante puede ver en ningún momento los datos de otro estudiante.',
  },
  'school.b15.permissions.sec_teacher_scope': {
    en: 'Teacher visibility scope',
    ar: 'نطاق رؤية المعلم',
    es: 'Ámbito de visibilidad del profesor',
  },
  'school.b15.permissions.sec_teacher_scope_desc': {
    en: "Teachers only have access to the students in their assigned classes. They cannot view progress data, essays, or submissions belonging to students in other teachers' classes.",
    ar: 'يصل المعلمون فقط لطلاب صفوفهم المخصّصة. ما يقدرون يشوفون بيانات التقدم أو المقالات أو التسليمات لطلاب صفوف المعلمين الثانيين.',
    es: 'Los profesores solo tienen acceso a los estudiantes de sus clases asignadas. No pueden ver los datos de progreso, las redacciones ni las entregas de los estudiantes de las clases de otros profesores.',
  },
  'school.b15.permissions.sec_audit': {
    en: 'Audit logging',
    ar: 'سجل المراجعة',
    es: 'Registro de auditoría',
  },
  'school.b15.permissions.sec_audit_desc': {
    en: 'All administrative actions are recorded in an audit log - including user management, role changes, data exports, and login events. Logs are available to school admins on request.',
    ar: 'تُسجَّل كل الإجراءات الإدارية في سجل المراجعة، بما فيها إدارة المستخدمين وتغييرات الأدوار وتصدير البيانات وأحداث تسجيل الدخول. السجلات متاحة لمشرفي المدرسة عند الطلب.',
    es: 'Todas las acciones administrativas se registran en un registro de auditoría, incluidas la gestión de usuarios, los cambios de función, las exportaciones de datos y los inicios de sesión. Los registros están disponibles para los administradores del centro cuando lo soliciten.',
  },
  'school.b15.permissions.sec_gdpr': {
    en: 'GDPR alignment',
    ar: 'توافق GDPR',
    es: 'Cumplimiento del GDPR',
  },
  'school.b15.permissions.sec_gdpr_desc': {
    en: "Data access is strictly aligned with your school's data processing agreement. English Hub acts as a data processor on behalf of your school. Role-based access controls ensure staff only see data they are authorised to process under your school's data protection policies.",
    ar: 'الوصول للبيانات منسجم بدقة مع اتفاقية معالجة البيانات المالتك. يعمل English Hub كمعالج بيانات نيابةً عن مدرستك. تضمن ضوابط الوصول المبنية على الأدوار أن الموظفين يرون فقط البيانات المرخّص لهم معالجتها حسب سياسات حماية البيانات المالتك.',
    es: 'El acceso a los datos se ajusta estrictamente al acuerdo de tratamiento de datos de tu centro. English Hub actúa como encargado del tratamiento en nombre de tu centro. Los controles de acceso basados en funciones garantizan que el personal solo vea los datos que está autorizado a tratar según las políticas de protección de datos de tu centro.',
  },

  // ─── /school/guide ───────────────────────────────────────────────────────
  'school.b15.guide.title': {
    en: 'School Setup Guide',
    ar: 'دليل إعداد المدرسة',
    es: 'Guía de configuración del centro',
  },
  'school.b15.guide.subtitle': {
    en: 'Everything you need to get your school up and running in under 30 minutes',
    ar: 'كل شي تحتاجه عشان تشغّل مدرستك في أقل من 30 دقيقة',
    es: 'Todo lo que necesitas para poner en marcha tu centro en menos de 30 minutos',
  },
  'school.b15.guide.btn_pdf': { en: 'Download as PDF', ar: 'حمّل PDF', es: 'Descargar en PDF' },
  'school.b15.guide.btn_support': {
    en: 'Contact Support',
    ar: 'تواصل مع الدعم',
    es: 'Contactar con soporte',
  },
  'school.b15.guide.checklist_title': {
    en: 'Quick Start Checklist',
    ar: 'قائمة البدء السريع',
    es: 'Lista de inicio rápido',
  },
  'school.b15.guide.checklist_desc': {
    en: 'Tick off each step as you complete it',
    ar: 'علّم على كل خطوة لما تكمّلها',
    es: 'Marca cada paso a medida que lo completes',
  },
  'school.b15.guide.complete_suffix': { en: 'complete', ar: 'مكتمل', es: 'completado' },
  'school.b15.guide.all_done': {
    en: 'All done! Your school is ready to go.',
    ar: 'خلّصت كل شي! مدرستك جاهزة الحين.',
    es: '¡Todo listo! Tu centro ya está preparado.',
  },
  'school.b15.guide.detailed_title': {
    en: 'Detailed Setup Guide',
    ar: 'دليل الإعداد التفصيلي',
    es: 'Guía de configuración detallada',
  },
  'school.b15.guide.footer_help': {
    en: 'Need help getting set up?',
    ar: 'تحتاج مساعدة في الإعداد؟',
    es: '¿Necesitas ayuda con la configuración?',
  },
  'school.b15.guide.footer_response': {
    en: 'Our school support team typically responds within one working day.',
    ar: 'فريق الدعم المالتنا يردّ عادةً خلال يوم عمل واحد.',
    es: 'Nuestro equipo de soporte para centros suele responder en un día laborable.',
  },
  'school.b15.guide.btn_pdf_guide': {
    en: 'Download PDF guide',
    ar: 'حمّل دليل PDF',
    es: 'Descargar guía en PDF',
  },
  'school.b15.guide.step1': {
    en: 'Create school account',
    ar: 'أنشئ حساب المدرسة',
    es: 'Crear la cuenta del centro',
  },
  'school.b15.guide.step2': {
    en: 'Import teachers',
    ar: 'استورد المعلمين',
    es: 'Importar profesores',
  },
  'school.b15.guide.step3': {
    en: 'Import students',
    ar: 'استورد الطلاب',
    es: 'Importar estudiantes',
  },
  'school.b15.guide.step4': {
    en: 'Create classes and assign students',
    ar: 'أنشئ الصفوف وخصّص الطلاب',
    es: 'Crear clases y asignar estudiantes',
  },
  'school.b15.guide.step5': {
    en: 'Share login details with staff and students',
    ar: 'شارك تفاصيل الدخول مع الموظفين والطلاب',
    es: 'Compartir los datos de acceso con el personal y los estudiantes',
  },
  'school.b15.guide.section_roles': {
    en: 'Understanding User Roles & Permissions',
    ar: 'فهم أدوار المستخدمين والصلاحيات',
    es: 'Entender las funciones de usuario y los permisos',
  },
  'school.b15.guide.badge_start_here': { en: 'Start here', ar: 'ابدأ هنا', es: 'Empieza aquí' },
  'school.b15.guide.section_import_teachers': {
    en: 'Importing Teachers',
    ar: 'استيراد المعلمين',
    es: 'Importar profesores',
  },
  'school.b15.guide.section_import_students': {
    en: 'Importing Students',
    ar: 'استيراد الطلاب',
    es: 'Importar estudiantes',
  },
  'school.b15.guide.section_classes': {
    en: 'Creating Classes',
    ar: 'إنشاء الصفوف',
    es: 'Crear clases',
  },
  'school.b15.guide.section_logins': {
    en: 'Distributing Login Details',
    ar: 'توزيع تفاصيل الدخول',
    es: 'Distribuir los datos de acceso',
  },
  'school.b15.guide.section_management': {
    en: 'Ongoing Management',
    ar: 'الإدارة المستمرة',
    es: 'Gestión continua',
  },
  'school.b15.guide.section_faq': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },

  // ─── /school/join-codes ──────────────────────────────────────────────────
  'school.b15.join_codes.title': { en: 'Join Codes', ar: 'رموز الانضمام', es: 'Códigos de acceso' },
  'school.b15.join_codes.subtitle': {
    en: 'Share these codes with students or teachers so they can join your school. They go to theenglishhub.app/school/join and enter the code.',
    ar: 'شارك هذه الرموز مع الطلاب أو المعلمين عشان ينضمون لمدرستك. يروحون لـ theenglishhub.app/school/join ويدخلون الرمز.',
    es: 'Comparte estos códigos con estudiantes o profesores para que se unan a tu centro. Acceden a theenglishhub.app/school/join e introducen el código.',
  },
  'school.b15.join_codes.spotlight_label': {
    en: 'Current School Join Code',
    ar: 'رمز انضمام المدرسة الحالي',
    es: 'Código de acceso actual del centro',
  },
  'school.b15.join_codes.qr_title': {
    en: 'QR Code Generation Coming Soon',
    ar: 'إنشاء رمز QR قادم قريباً',
    es: 'Generación de códigos QR próximamente',
  },
  'school.b15.join_codes.qr_desc': {
    en: 'Soon you will be able to generate a QR code for each join code. Students and teachers can scan it with their phone camera to be taken straight to the join page - no typing required.',
    ar: 'قريباً تقدر تولّد رمز QR لكل رمز انضمام. يقدر الطلاب والمعلمين يمسحونه بكاميرا الجوال وتاخذهم مباشرةً لصفحة الانضمام دون كتابة.',
    es: 'Pronto podrás generar un código QR para cada código de acceso. Los estudiantes y profesores podrán escanearlo con la cámara del móvil para ir directamente a la página de acceso, sin necesidad de escribir nada.',
  },
  'school.b15.join_codes.active_title': {
    en: 'Active Join Codes',
    ar: 'رموز الانضمام النشطة',
    es: 'Códigos de acceso activos',
  },
  'school.b15.join_codes.no_codes': {
    en: 'No join codes yet. Create one to get started.',
    ar: 'ما في رموز انضمام بعد. أنشئ واحد للبدء.',
    es: 'Aún no hay códigos de acceso. Crea uno para empezar.',
  },
  'school.b15.join_codes.col_code': { en: 'Code', ar: 'الرمز', es: 'Código' },
  'school.b15.join_codes.col_type': { en: 'Type', ar: 'النوع', es: 'Tipo' },
  'school.b15.join_codes.col_uses': { en: 'Uses', ar: 'الاستخدامات', es: 'Usos' },
  'school.b15.join_codes.col_expires': { en: 'Expires', ar: 'الانتهاء', es: 'Caduca' },
  'school.b15.join_codes.col_class': { en: 'Class', ar: 'الصف', es: 'Clase' },
  'school.b15.join_codes.col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.b15.join_codes.col_actions': { en: 'Actions', ar: 'الإجراءات', es: 'Acciones' },
  'school.b15.join_codes.status_disabled': { en: 'Disabled', ar: 'معطّل', es: 'Desactivado' },
  'school.b15.join_codes.status_expired': { en: 'Expired', ar: 'منتهي الصلاحية', es: 'Caducado' },
  'school.b15.join_codes.status_full': { en: 'Full', ar: 'ممتلئ', es: 'Completo' },
  'school.b15.join_codes.status_active': { en: 'Active', ar: 'نشط', es: 'Activo' },
  'school.b15.join_codes.create_title': {
    en: 'Create New Join Code',
    ar: 'أنشئ رمز انضمام جديد',
    es: 'Crear nuevo código de acceso',
  },
  'school.b15.join_codes.label_code_type': {
    en: 'Code Type',
    ar: 'نوع الرمز',
    es: 'Tipo de código',
  },
  'school.b15.join_codes.type_student': { en: 'Student', ar: 'طالب', es: 'Estudiante' },
  'school.b15.join_codes.type_teacher': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'school.b15.join_codes.label_code': { en: 'Code', ar: 'الرمز', es: 'Código' },
  'school.b15.join_codes.code_hint': {
    en: 'Auto-generated 6-character code. You can customise it (3-12 uppercase alphanumeric).',
    ar: 'رمز مُولَّد تلقائياً من 6 أحرف. تقدر تخصّصه (3-12 حرف كبير أو رقم).',
    es: 'Código de 6 caracteres generado automáticamente. Puedes personalizarlo (3-12 caracteres alfanuméricos en mayúscula).',
  },
  'school.b15.join_codes.label_max_uses': {
    en: 'Max Uses',
    ar: 'أقصى استخدامات',
    es: 'Usos máximos',
  },
  'school.b15.join_codes.max_uses_hint': {
    en: 'Set to 0 for unlimited uses.',
    ar: 'اضبط على 0 لاستخدامات غير محدودة.',
    es: 'Pon 0 para usos ilimitados.',
  },
  'school.b15.join_codes.label_expires': { en: 'Expires', ar: 'تاريخ الانتهاء', es: 'Caduca' },
  'school.b15.join_codes.expires_hint': {
    en: 'Leave blank for no expiry.',
    ar: 'اتركه فارغاً لعدم الانتهاء.',
    es: 'Déjalo en blanco para que no caduque.',
  },
  'school.b15.join_codes.label_class': {
    en: 'Link to Class',
    ar: 'ربط بصف',
    es: 'Vincular a una clase',
  },
  'school.b15.join_codes.no_class': {
    en: 'No class link',
    ar: 'بدون ربط بصف',
    es: 'Sin vínculo a clase',
  },
  'school.b15.join_codes.class_hint': {
    en: 'If set, students who use this code will automatically be added to the selected class.',
    ar: 'إذا حُدِّد، يُضاف الطلاب اللي يستخدمون هذا الرمز تلقائياً للصف المختار.',
    es: 'Si se establece, los estudiantes que usen este código se añadirán automáticamente a la clase seleccionada.',
  },
  'school.b15.join_codes.btn_generate': {
    en: 'Generate Code',
    ar: 'ولّد رمزاً',
    es: 'Generar código',
  },
  'school.b15.join_codes.btn_generating': {
    en: 'Generating...',
    ar: 'يولّد...',
    es: 'Generando...',
  },
  'school.b15.join_codes.title_copy': { en: 'Copy code', ar: 'انسخ الرمز', es: 'Copiar código' },
  'school.b15.join_codes.title_disable': {
    en: 'Disable code',
    ar: 'عطّل الرمز',
    es: 'Desactivar código',
  },
  'school.b15.join_codes.title_enable': {
    en: 'Enable code',
    ar: 'فعّل الرمز',
    es: 'Activar código',
  },
  'school.b15.join_codes.title_delete': {
    en: 'Delete code',
    ar: 'احذف الرمز',
    es: 'Eliminar código',
  },

  // ─── /school/tools ───────────────────────────────────────────────────────
  'school.b15.tools.tool_seating_name': {
    en: 'Seating Plan Generator',
    ar: 'مولّد خطط الجلوس',
    es: 'Generador de planos de asientos',
  },
  'school.b15.tools.tool_seating_desc': {
    en: 'Automatically create optimised seating arrangements for any classroom layout.',
    ar: 'أنشئ تلقائياً ترتيبات جلوس محسّنة لأي تخطيط صفي.',
    es: 'Crea automáticamente distribuciones de asientos optimizadas para cualquier disposición del aula.',
  },
  'school.b15.tools.tool_groups_name': {
    en: 'Group Generator',
    ar: 'مولّد المجموعات',
    es: 'Generador de grupos',
  },
  'school.b15.tools.tool_groups_desc': {
    en: 'Build balanced student groups based on ability, behaviour, or random selection.',
    ar: 'أنشئ مجموعات طلابية متوازنة حسب القدرة أو السلوك أو الاختيار العشوائي.',
    es: 'Crea grupos de estudiantes equilibrados según el nivel, el comportamiento o de forma aleatoria.',
  },
  'school.b15.tools.tool_quiz_name': {
    en: 'Quiz Builder',
    ar: 'منشئ الاختبارات',
    es: 'Creador de cuestionarios',
  },
  'school.b15.tools.tool_quiz_desc': {
    en: 'Design interactive quizzes with multiple question types and instant marking.',
    ar: 'صمّم اختبارات تفاعلية بأنواع أسئلة متعددة وتصحيح فوري.',
    es: 'Diseña cuestionarios interactivos con varios tipos de preguntas y corrección instantánea.',
  },
  'school.b15.tools.tool_starters_name': {
    en: 'Starter Activity Generator',
    ar: 'مولّد نشاط البداية',
    es: 'Generador de actividades de inicio',
  },
  'school.b15.tools.tool_starters_desc': {
    en: 'Generate engaging lesson starters tailored to your topic and year group.',
    ar: 'ولّد بدايات درس جذّابة مناسبة لموضوعك ومجموعتك.',
    es: 'Genera actividades de inicio atractivas adaptadas a tu tema y curso.',
  },
  'school.b15.tools.tool_mark_scheme_name': {
    en: 'Mark Scheme Reference',
    ar: 'مرجع خطط التصحيح',
    es: 'Referencia de criterios de corrección',
  },
  'school.b15.tools.tool_mark_scheme_desc': {
    en: 'Browse and search official mark schemes for quick assessment guidance.',
    ar: 'تصفّح وابحث في خطط التصحيح الرسمية للتوجيه السريع.',
    es: 'Consulta y busca en los criterios de corrección oficiales para una orientación de evaluación rápida.',
  },
  'school.b15.tools.tool_diff_name': {
    en: 'Differentiation Builder',
    ar: 'منشئ التمييز',
    es: 'Creador de actividades diferenciadas',
  },
  'school.b15.tools.tool_diff_desc': {
    en: 'Create scaffolded resources with support, core, and extension tasks.',
    ar: 'أنشئ موارد متدرّجة بمهام دعم وأساسية وتوسيعية.',
    es: 'Crea recursos graduados con actividades de apoyo, estándar y de ampliación.',
  },
  'school.b15.tools.tool_worksheet_name': {
    en: 'Worksheet Generator',
    ar: 'مولّد أوراق العمل',
    es: 'Generador de fichas de trabajo',
  },
  'school.b15.tools.tool_worksheet_desc': {
    en: 'Produce print-ready worksheets aligned to your scheme of work.',
    ar: 'أنتج أوراق عمل جاهزة للطباعة مرتبطة بخطتك التدريسية.',
    es: 'Genera fichas de trabajo listas para imprimir y alineadas con tu programación didáctica.',
  },
  'school.b15.tools.tool_timer_name': {
    en: 'Timer & Countdown',
    ar: 'المؤقّت والعدّاد',
    es: 'Temporizador y cuenta atrás',
  },
  'school.b15.tools.tool_timer_desc': {
    en: 'A projector-friendly countdown timer with presets and alarm.',
    ar: 'عدّاد تنازلي مناسب للشاشة مع إعدادات مسبقة وتنبيه.',
    es: 'Un temporizador de cuenta atrás apto para proyector, con ajustes predefinidos y alarma.',
  },
  'school.b15.tools.title': {
    en: 'Teacher Tools',
    ar: 'أدوات المعلم',
    es: 'Herramientas del profesor',
  },
  'school.b15.tools.subtitle': {
    en: 'Everything you need to plan, teach, and assess',
    ar: 'كل شي تحتاجه للتخطيط والتدريس والتقييم',
    es: 'Todo lo que necesitas para planificar, enseñar y evaluar',
  },
  'school.b15.tools.timer_inline': {
    en: 'Use the Quick Timer below',
    ar: 'استخدم المؤقّت السريع أدناه',
    es: 'Usa el temporizador rápido de abajo',
  },
  'school.b15.tools.open': { en: 'Open', ar: 'افتح', es: 'Abrir' },
  'school.b15.tools.quick_timer_title': {
    en: 'Quick Timer',
    ar: 'المؤقّت السريع',
    es: 'Temporizador rápido',
  },
  'school.b15.tools.quick_timer_desc': {
    en: 'Projector-friendly countdown with alarm',
    ar: 'عدّاد تنازلي مناسب للشاشة مع تنبيه',
    es: 'Cuenta atrás apta para proyector, con alarma',
  },
  'school.b15.tools.btn_full_screen': {
    en: 'Full Screen',
    ar: 'شاشة كاملة',
    es: 'Pantalla completa',
  },
  'school.b15.tools.dialog_title': {
    en: 'Countdown Timer',
    ar: 'العدّاد التنازلي',
    es: 'Temporizador de cuenta atrás',
  },
  'school.b15.tools.btn_start': { en: 'Start', ar: 'ابدأ', es: 'Iniciar' },
  'school.b15.tools.btn_pause': { en: 'Pause', ar: 'إيقاف مؤقت', es: 'Pausar' },
  'school.b15.tools.btn_reset': { en: 'Reset', ar: 'إعادة تعيين', es: 'Reiniciar' },
  'school.b15.tools.min_suffix': { en: 'min', ar: 'دقيقة', es: 'min' },

  // ─── /school/worksheets ──────────────────────────────────────────────────
  'school.b15.worksheets.title': {
    en: 'Worksheet Generator',
    ar: 'مولّد أوراق العمل',
    es: 'Generador de fichas de trabajo',
  },
  'school.b15.worksheets.subtitle': {
    en: 'Create professional, print-ready worksheets for your English classes. Choose a type, configure options, and preview before printing.',
    ar: 'أنشئ أوراق عمل احترافية جاهزة للطباعة لصفوف الإنجليزي. اختر النوع وضبط الخيارات وراجع قبل الطباعة.',
    es: 'Crea fichas de trabajo profesionales y listas para imprimir para tus clases de inglés. Elige un tipo, configura las opciones y previsualiza antes de imprimir.',
  },
  'school.b15.worksheets.section_type': {
    en: 'Worksheet Type',
    ar: 'نوع ورقة العمل',
    es: 'Tipo de ficha',
  },
  'school.b15.worksheets.section_content': { en: 'Content', ar: 'المحتوى', es: 'Contenido' },
  'school.b15.worksheets.label_text': {
    en: 'Text / Source',
    ar: 'النص / المصدر',
    es: 'Texto / Fuente',
  },
  'school.b15.worksheets.label_topic': {
    en: 'Topic / Theme / Character',
    ar: 'الموضوع / الفكرة / الشخصية',
    es: 'Tema / Idea / Personaje',
  },
  'school.b15.worksheets.section_settings': { en: 'Settings', ar: 'الإعدادات', es: 'Ajustes' },
  'school.b15.worksheets.label_difficulty': { en: 'Difficulty', ar: 'المستوى', es: 'Dificultad' },
  'school.b15.worksheets.label_school': {
    en: 'School Name',
    ar: 'اسم المدرسة',
    es: 'Nombre del centro',
  },
  'school.b15.worksheets.label_class': {
    en: 'Class / Group',
    ar: 'الصف / المجموعة',
    es: 'Clase / Grupo',
  },
  'school.b15.worksheets.label_date': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
  'school.b15.worksheets.show_answers': {
    en: 'Show Answers',
    ar: 'إظهار الإجابات',
    es: 'Mostrar respuestas',
  },
  'school.b15.worksheets.hide_answers': {
    en: 'Hide Answers',
    ar: 'إخفاء الإجابات',
    es: 'Ocultar respuestas',
  },
  'school.b15.worksheets.btn_generate': {
    en: 'Generate Worksheet',
    ar: 'ولّد ورقة العمل',
    es: 'Generar ficha',
  },
  'school.b15.worksheets.btn_refresh': {
    en: 'Refresh Preview',
    ar: 'حدّث المعاينة',
    es: 'Actualizar vista previa',
  },
  'school.b15.worksheets.btn_print': { en: 'Print', ar: 'طباعة', es: 'Imprimir' },
  'school.b15.worksheets.label_difficulty_level': {
    en: 'Difficulty Level',
    ar: 'مستوى الصعوبة',
    es: 'Nivel de dificultad',
  },
  'school.b15.worksheets.section_header_details': {
    en: 'Header Details',
    ar: 'تفاصيل الترويسة',
    es: 'Datos del encabezado',
  },
  'school.b15.worksheets.select_none': {
    en: '-- None --',
    ar: '-- لا شيء --',
    es: '-- Ninguno --',
  },
  'school.b15.worksheets.preview_label': { en: 'Preview', ar: 'معاينة', es: 'Vista previa' },
  'school.b15.worksheets.preview_layout': {
    en: 'A4 layout · optimised for printing',
    ar: 'تخطيط A4 · محسّن للطباعة',
    es: 'Formato A4 · optimizado para imprimir',
  },
  'school.b15.worksheets.no_worksheet_title': {
    en: 'No worksheet generated yet',
    ar: 'ما ولّدت ورقة عمل بعد',
    es: 'Aún no se ha generado ninguna ficha',
  },
  'school.b15.worksheets.no_worksheet_desc': {
    en: 'Choose a worksheet type, select your text and topic, set the difficulty level, then click "Generate Worksheet" to see a preview.',
    ar: 'اختر نوع ورقة العمل وحدد النص والموضوع وعيّن مستوى الصعوبة ثم انقر "ولّد ورقة العمل" لترى المعاينة.',
    es: 'Elige un tipo de ficha, selecciona el texto y el tema, establece el nivel de dificultad y haz clic en "Generar ficha" para ver una vista previa.',
  },
  'school.b15.worksheets.difficulty_foundation_label': {
    en: 'Foundation',
    ar: 'أساسي',
    es: 'Básico',
  },
  'school.b15.worksheets.difficulty_foundation_desc': {
    en: 'Scaffolded with sentence starters and guided prompts',
    ar: 'مدعوم ببدايات جمل وتوجيهات مرشدة',
    es: 'Con apoyo mediante comienzos de frase e indicaciones guiadas',
  },
  'school.b15.worksheets.difficulty_core_label': { en: 'Core', ar: 'أساسي متوسط', es: 'Estándar' },
  'school.b15.worksheets.difficulty_core_desc': {
    en: 'Standard difficulty with clear structure',
    ar: 'صعوبة عادية بهيكل واضح',
    es: 'Dificultad estándar con una estructura clara',
  },
  'school.b15.worksheets.difficulty_extension_label': {
    en: 'Extension',
    ar: 'متقدم',
    es: 'Ampliación',
  },
  'school.b15.worksheets.difficulty_extension_desc': {
    en: 'Challenging with open-ended, evaluative tasks',
    ar: 'تحديّ بمهام مفتوحة وتقييمية',
    es: 'Exigente, con actividades abiertas y de evaluación',
  },

  // ─── /school/import ──────────────────────────────────────────────────────
  'school.b15.import.title': {
    en: 'Import Users',
    ar: 'استيراد المستخدمين',
    es: 'Importar usuarios',
  },
  'school.b15.import.subtitle': {
    en: 'Upload a spreadsheet to create accounts for all your students or teachers instantly.',
    ar: 'ارفع جدول بيانات لإنشاء حسابات كل طلابك أو معلّميك فوراً.',
    es: 'Sube una hoja de cálculo para crear al instante las cuentas de todos tus estudiantes o profesores.',
  },
  'school.b15.import.tab_students': {
    en: 'Import Students',
    ar: 'استيراد الطلاب',
    es: 'Importar estudiantes',
  },
  'school.b15.import.tab_teachers': {
    en: 'Import Teachers',
    ar: 'استيراد المعلمين',
    es: 'Importar profesores',
  },
  'school.b15.import.step1_title': {
    en: 'Step 1 - Download the Template',
    ar: 'الخطوة 1 - حمّل القالب',
    es: 'Paso 1 - Descarga la plantilla',
  },
  'school.b15.import.step1_desc_students': {
    en: 'Fill in the spreadsheet with your student data, then upload it below.',
    ar: 'املأ الجدول ببيانات طلابك ثم ارفعه أدناه.',
    es: 'Rellena la hoja de cálculo con los datos de tus estudiantes y luego súbela abajo.',
  },
  'school.b15.import.step1_desc_teachers': {
    en: 'Fill in the spreadsheet with your teacher data, then upload it below.',
    ar: 'املأ الجدول ببيانات معلّميك ثم ارفعه أدناه.',
    es: 'Rellena la hoja de cálculo con los datos de tus profesores y luego súbela abajo.',
  },
  'school.b15.import.btn_student_template': {
    en: 'Download Student Template',
    ar: 'حمّل قالب الطلاب',
    es: 'Descargar plantilla de estudiantes',
  },
  'school.b15.import.btn_teacher_template': {
    en: 'Download Teacher Template',
    ar: 'حمّل قالب المعلمين',
    es: 'Descargar plantilla de profesores',
  },
  'school.b15.import.required_cols': {
    en: 'Required columns',
    ar: 'الأعمدة المطلوبة',
    es: 'Columnas obligatorias',
  },
  'school.b15.import.step2_title': {
    en: 'Step 2 - Upload Your File',
    ar: 'الخطوة 2 - ارفع ملفك',
    es: 'Paso 2 - Sube tu archivo',
  },
  'school.b15.import.step2_desc': {
    en: 'Accepts .csv and .xlsx files.',
    ar: 'يقبل ملفات .csv و .xlsx.',
    es: 'Admite archivos .csv y .xlsx.',
  },
  'school.b15.import.drop_heading': {
    en: 'Drag and drop your file here',
    ar: 'اسحب وأفلت ملفك هنا',
    es: 'Arrastra y suelta tu archivo aquí',
  },
  'school.b15.import.drop_active': {
    en: 'Drop file here',
    ar: 'أفلت الملف هنا',
    es: 'Suelta el archivo aquí',
  },
  'school.b15.import.drop_or': { en: 'or', ar: 'أو', es: 'o' },
  'school.b15.import.drop_browse': {
    en: 'click to browse',
    ar: 'انقر للتصفح',
    es: 'haz clic para buscar',
  },
  'school.b15.import.drop_hint': {
    en: '.csv and .xlsx supported',
    ar: 'يدعم .csv و .xlsx',
    es: 'se admiten .csv y .xlsx',
  },
  'school.b15.import.preview_label': {
    en: 'Preview (first 5 rows)',
    ar: 'معاينة (أول 5 صفوف)',
    es: 'Vista previa (primeras 5 filas)',
  },
  'school.b15.import.creating': {
    en: 'Creating accounts...',
    ar: 'يُنشئ الحسابات...',
    es: 'Creando cuentas...',
  },
  'school.b15.import.all_valid': {
    en: 'All {count} rows are valid and ready to import.',
    ar: 'كل الـ{count} صفوف صحيحة وجاهزة للاستيراد.',
    es: 'Las {count} filas son válidas y están listas para importar.',
  },
  'school.b15.import.preview_col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.b15.import.cell_missing': { en: 'missing', ar: 'مفقود', es: 'falta' },
  'school.b15.import.res_col_name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'school.b15.import.res_col_email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    es: 'Correo electrónico',
  },
  'school.b15.import.res_col_role_class': {
    en: 'Role / Class',
    ar: 'الدور / الصف',
    es: 'Función / Clase',
  },
  'school.b15.import.res_col_temp_pw': {
    en: 'Temp Password',
    ar: 'كلمة المرور المؤقتة',
    es: 'Contraseña temporal',
  },
  'school.b15.import.rows_detected_one': {
    en: 'row detected',
    ar: 'صف تم اكتشافه',
    es: 'fila detectada',
  },
  'school.b15.import.rows_detected_many': {
    en: 'rows detected',
    ar: 'صفوف تم اكتشافها',
    es: 'filas detectadas',
  },
  'school.b15.import.validation_error_bar': {
    en: '{count} row with errors',
    ar: '{count} صف به أخطاء',
    es: '{count} fila con errores',
  },
  'school.b15.import.validation_error_bar_plural': {
    en: '{count} rows with errors',
    ar: '{count} صفوف بها أخطاء',
    es: '{count} filas con errores',
  },
  'school.b15.import.rows_skipped': {
    en: '- rows with errors will be skipped during import.',
    ar: '- الصفوف التي بها أخطاء ستُتجاوز أثناء الاستيراد.',
    es: '- las filas con errores se omitirán durante la importación.',
  },
  'school.b15.import.more_rows': {
    en: '+ {count} more rows not shown',
    ar: '+ {count} صفوف إضافية غير معروضة',
    es: '+ {count} filas más sin mostrar',
  },
  'school.b15.import.btn_import_students': {
    en: 'Import {count} Student',
    ar: 'استيراد {count} طالب',
    es: 'Importar {count} estudiante',
  },
  'school.b15.import.btn_import_students_plural': {
    en: 'Import {count} Students',
    ar: 'استيراد {count} طلاب',
    es: 'Importar {count} estudiantes',
  },
  'school.b15.import.btn_import_teachers': {
    en: 'Import {count} Teacher',
    ar: 'استيراد {count} معلم',
    es: 'Importar {count} profesor',
  },
  'school.b15.import.btn_import_teachers_plural': {
    en: 'Import {count} Teachers',
    ar: 'استيراد {count} معلمين',
    es: 'Importar {count} profesores',
  },
  'school.b15.import.skip_warning_one': {
    en: '{count} row will be skipped',
    ar: '{count} صف سيُتجاوز',
    es: 'Se omitirá {count} fila',
  },
  'school.b15.import.skip_warning_many': {
    en: '{count} rows will be skipped',
    ar: '{count} صفوف ستُتجاوز',
    es: 'Se omitirán {count} filas',
  },
  'school.b15.import.success_created_one': {
    en: '{count} account created successfully',
    ar: 'تم إنشاء {count} حساب بنجاح',
    es: 'Se creó {count} cuenta correctamente',
  },
  'school.b15.import.success_created_many': {
    en: '{count} accounts created successfully',
    ar: 'تم إنشاء {count} حسابات بنجاح',
    es: 'Se crearon {count} cuentas correctamente',
  },
  'school.b15.import.error_rows_skipped_one': {
    en: '{count} row had errors and were skipped',
    ar: '{count} صف به أخطاء وتم تخطّيه',
    es: '{count} fila tenía errores y se omitió',
  },
  'school.b15.import.error_rows_skipped_many': {
    en: '{count} rows had errors and were skipped',
    ar: '{count} صفوف بها أخطاء وتم تخطّيها',
    es: '{count} filas tenían errores y se omitieron',
  },
  'school.b15.import.errors_section_one': {
    en: '{count} row had errors',
    ar: '{count} صف به أخطاء',
    es: '{count} fila tenía errores',
  },
  'school.b15.import.errors_section_many': {
    en: '{count} rows had errors',
    ar: '{count} صفوف بها أخطاء',
    es: '{count} filas tenían errores',
  },
  'school.b15.import.download_login_title': {
    en: 'Download Login Details',
    ar: 'حمّل تفاصيل الدخول',
    es: 'Descargar datos de acceso',
  },
  'school.b15.import.download_login_desc': {
    en: 'Share these with your {userType} so they can log in immediately.',
    ar: 'شارك هذه مع {userType} عشان يقدرون يدخلون فوراً.',
    es: 'Compártelos con tus {userType} para que puedan iniciar sesión de inmediato.',
  },
  'school.b15.import.download_excel': {
    en: 'Download as Excel (.csv)',
    ar: 'حمّل كـ Excel (.csv)',
    es: 'Descargar como Excel (.csv)',
  },
  'school.b15.import.download_pdf': {
    en: 'Download as PDF',
    ar: 'حمّل كـ PDF',
    es: 'Descargar en PDF',
  },
  'school.b15.import.download_btn': {
    en: 'Download Login Details',
    ar: 'حمّل تفاصيل الدخول',
    es: 'Descargar datos de acceso',
  },
  'school.b15.import.created_accounts_title': {
    en: 'Created Accounts',
    ar: 'الحسابات المُنشأة',
    es: 'Cuentas creadas',
  },
  'school.b15.import.created_accounts_desc': {
    en: 'Temporary passwords are shown below. They will be asked to change on first login.',
    ar: 'كلمات المرور المؤقتة معروضة أدناه. سيُطلب منهم تغييرها في أول دخول.',
    es: 'Las contraseñas temporales se muestran abajo. Se les pedirá que las cambien en el primer inicio de sesión.',
  },
  'school.b15.import.showing_n_of': {
    en: 'Showing 10 of {count} accounts. Download the spreadsheet to see all.',
    ar: 'يعرض 10 من أصل {count} حساب. حمّل الجدول لترى الكل.',
    es: 'Mostrando 10 de {count} cuentas. Descarga la hoja de cálculo para verlas todas.',
  },
  'school.b15.import.important_title': { en: 'Important', ar: 'مهم', es: 'Importante' },
  'school.b15.import.important_pw_note': {
    en: 'Generated passwords are shown once. Download the login details spreadsheet now and distribute to {userType}.',
    ar: 'كلمات المرور المُنشأة تُعرض مرة واحدة. حمّل جدول تفاصيل الدخول الحين ووزّعه على {userType}.',
    es: 'Las contraseñas generadas se muestran una sola vez. Descarga ahora la hoja de cálculo con los datos de acceso y distribúyela a tus {userType}.',
  },
  'school.b15.import.important_change_students': {
    en: 'Students will be prompted to change their password on first login.',
    ar: 'الطلاب سيُطلب منهم تغيير كلمة المرور في أول دخول.',
    es: 'A los estudiantes se les pedirá que cambien su contraseña en el primer inicio de sesión.',
  },
  'school.b15.import.important_change_teachers': {
    en: 'Teachers will be prompted to change their password on first login.',
    ar: 'المعلمون سيُطلب منهم تغيير كلمة المرور في أول دخول.',
    es: 'A los profesores se les pedirá que cambien su contraseña en el primer inicio de sesión.',
  },
  'school.b15.import.what_next_title': {
    en: 'What Happens Next?',
    ar: 'شنو يصير بعدين؟',
    es: '¿Qué ocurre ahora?',
  },
  'school.b15.import.next_students_1': {
    en: 'Students can log in immediately using their email and temporary password.',
    ar: 'الطلاب يقدرون يدخلون فوراً باستخدام بريدهم وكلمة المرور المؤقتة.',
    es: 'Los estudiantes pueden iniciar sesión de inmediato con su correo y su contraseña temporal.',
  },
  'school.b15.import.next_students_2': {
    en: 'They join the school automatically - no manual approval needed.',
    ar: 'ينضمون للمدرسة تلقائياً - ما يحتاج موافقة يدوية.',
    es: 'Se unen al centro automáticamente, sin necesidad de aprobación manual.',
  },
  'school.b15.import.next_students_3': {
    en: 'Students can access all assigned content and lessons right away.',
    ar: 'الطلاب يقدرون يوصلون لكل المحتوى والدروس المخصصة فوراً.',
    es: 'Los estudiantes pueden acceder de inmediato a todo el contenido y las clases asignadas.',
  },
  'school.b15.import.next_students_4': {
    en: 'They will be prompted to set a new password on first login.',
    ar: 'سيُطلب منهم تعيين كلمة مرور جديدة في أول دخول.',
    es: 'Se les pedirá que establezcan una nueva contraseña en el primer inicio de sesión.',
  },
  'school.b15.import.next_teachers_1': {
    en: 'Teachers can log in immediately using their email and temporary password.',
    ar: 'المعلمون يقدرون يدخلون فوراً باستخدام بريدهم وكلمة المرور المؤقتة.',
    es: 'Los profesores pueden iniciar sesión de inmediato con su correo y su contraseña temporal.',
  },
  'school.b15.import.next_teachers_2': {
    en: 'They join the school automatically with their assigned role.',
    ar: 'ينضمون للمدرسة تلقائياً بدورهم المخصص.',
    es: 'Se unen al centro automáticamente con la función que tengan asignada.',
  },
  'school.b15.import.next_teachers_3': {
    en: 'Teachers will see their assigned classes and student rosters.',
    ar: 'المعلمون سيشوفون صفوفهم المخصصة وقوائم الطلاب.',
    es: 'Los profesores verán las clases que tengan asignadas y las listas de estudiantes.',
  },
  'school.b15.import.next_teachers_4': {
    en: 'They will be prompted to set a new password on first login.',
    ar: 'سيُطلب منهم تعيين كلمة مرور جديدة في أول دخول.',
    es: 'Se les pedirá que establezcan una nueva contraseña en el primer inicio de sesión.',
  },

  // ─── /school/import/results/[jobId] ──────────────────────────────────────
  'school.b15.import_results.back': {
    en: 'Back to Import',
    ar: 'ارجع للاستيراد',
    es: 'Volver a la importación',
  },
  'school.b15.import_results.loading': {
    en: 'Loading import results...',
    ar: 'يحمّل نتائج الاستيراد...',
    es: 'Cargando los resultados de la importación...',
  },
  'school.b15.import_results.processing_title': {
    en: 'Processing...',
    ar: 'يعالج...',
    es: 'Procesando...',
  },
  'school.b15.import_results.processing_desc': {
    en: 'Your import is being processed. This page will update automatically.',
    ar: 'استيرادك يُعالَج الحين. الصفحة تتحدّث تلقائياً.',
    es: 'Tu importación se está procesando. Esta página se actualizará automáticamente.',
  },
  'school.b15.import_results.error_title': {
    en: 'Could not load results',
    ar: 'ما قدر يحمّل النتائج',
    es: 'No se pudieron cargar los resultados',
  },
  'school.b15.import_results.error_fallback': {
    en: 'The import job could not be found. It may have expired.',
    ar: 'ما قدر يلاقي مهمة الاستيراد. ممكن تكون انتهت صلاحيتها.',
    es: 'No se encontró el trabajo de importación. Puede que haya caducado.',
  },
  'school.b15.import_results.btn_back_error': {
    en: 'Go back to Import',
    ar: 'ارجع للاستيراد',
    es: 'Volver a la importación',
  },
  'school.b15.import_results.title_success': {
    en: 'Import Complete!',
    ar: 'اكتمل الاستيراد!',
    es: '¡Importación completada!',
  },
  'school.b15.import_results.title_failed': {
    en: 'Import Failed',
    ar: 'فشل الاستيراد',
    es: 'La importación ha fallado',
  },
  'school.b15.import_results.completed_at': { en: 'Completed', ar: 'اكتمل', es: 'Completada' },
  'school.b15.import_results.stat_created': { en: 'Created', ar: 'أُنشئ', es: 'Creadas' },
  'school.b15.import_results.stat_errors': { en: 'Errors', ar: 'أخطاء', es: 'Errores' },
  'school.b15.import_results.stat_duplicates': {
    en: 'Duplicates',
    ar: 'مكرّرات',
    es: 'Duplicados',
  },
  'school.b15.import_results.stat_import_type': {
    en: 'Import type',
    ar: 'نوع الاستيراد',
    es: 'Tipo de importación',
  },
  'school.b15.import_results.download_title': {
    en: 'Download Login Details',
    ar: 'حمّل تفاصيل الدخول',
    es: 'Descargar datos de acceso',
  },
  'school.b15.import_results.download_desc': {
    en: "This file contains everyone's email and temporary password. Share it securely.",
    ar: 'يحتوي هذا الملف على بريد الجميع وكلمة المرور المؤقتة. شاركه بشكل آمن.',
    es: 'Este archivo contiene el correo y la contraseña temporal de cada persona. Compártelo de forma segura.',
  },
  'school.b15.import_results.download_warning': {
    en: 'Temporary passwords are shown once. Download now and store securely.',
    ar: 'تُعرض كلمات المرور المؤقتة مرة واحدة فقط. حمّلها الحين واحفظها بأمان.',
    es: 'Las contraseñas temporales se muestran una sola vez. Descárgalas ahora y guárdalas de forma segura.',
  },
  'school.b15.import_results.btn_download': {
    en: 'Download Login Details (Excel/CSV)',
    ar: 'حمّل تفاصيل الدخول (Excel/CSV)',
    es: 'Descargar datos de acceso (Excel/CSV)',
  },
  'school.b15.import_results.btn_preparing': {
    en: 'Preparing download...',
    ar: 'يجهّز التحميل...',
    es: 'Preparando la descarga...',
  },
  'school.b15.import_results.accounts_title': { en: 'Accounts', ar: 'الحسابات', es: 'Cuentas' },
  'school.b15.import_results.accounts_desc': {
    en: 'Full list of processed rows from this import.',
    ar: 'القائمة الكاملة للصفوف المعالجة من هذا الاستيراد.',
    es: 'Lista completa de las filas procesadas en esta importación.',
  },
  'school.b15.import_results.col_name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'school.b15.import_results.col_email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    es: 'Correo electrónico',
  },
  'school.b15.import_results.col_role': { en: 'Role', ar: 'الدور', es: 'Función' },
  'school.b15.import_results.col_year': { en: 'Year Group', ar: 'مجموعة السنة', es: 'Curso' },
  'school.b15.import_results.col_status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.b15.import_results.status_created': { en: 'Created', ar: 'أُنشئ', es: 'Creada' },
  'school.b15.import_results.status_duplicate': {
    en: 'Already exists',
    ar: 'موجود مسبقاً',
    es: 'Ya existe',
  },
  'school.b15.import_results.status_error': { en: 'Error', ar: 'خطأ', es: 'Error' },
  'school.b15.import_results.errors_title': {
    en: 'Error Details',
    ar: 'تفاصيل الأخطاء',
    es: 'Detalles de los errores',
  },
  'school.b15.import_results.errors_desc': {
    en: 'These rows could not be imported. Fix the issues and re-import.',
    ar: 'هذه الصفوف ما قدر يستوردها. صلح المشاكل وأعد الاستيراد.',
    es: 'No se pudieron importar estas filas. Corrige los problemas y vuelve a importar.',
  },
  'school.b15.import_results.btn_reimport': {
    en: 'Fix & Re-import',
    ar: 'صلّح وأعد الاستيراد',
    es: 'Corregir y reimportar',
  },
  'school.b15.import_results.row_prefix': { en: 'Row', ar: 'صف', es: 'Fila' },
  'school.b15.import_results.duplicates_title': {
    en: 'duplicate account skipped',
    ar: 'حساب مكرّر تم تخطّيه',
    es: 'cuenta duplicada omitida',
  },
  'school.b15.import_results.duplicates_title_plural': {
    en: 'duplicate accounts skipped',
    ar: 'حساب مكرّر تم تخطّيه',
    es: 'cuentas duplicadas omitidas',
  },
  'school.b15.import_results.duplicates_desc': {
    en: 'These email addresses already have accounts in the system and were not modified.',
    ar: 'هذه العناوين البريدية عندها حسابات بالنظام أصلاً وما تغيّرت.',
    es: 'Estas direcciones de correo ya tienen cuentas en el sistema y no se modificaron.',
  },
  'school.b15.import_results.next_steps_title': {
    en: 'Next Steps',
    ar: 'الخطوات التالية',
    es: 'Próximos pasos',
  },
  'school.b15.import_results.next1': {
    en: 'Download the login details spreadsheet above and distribute it to your staff or students.',
    ar: 'حمّل جدول تفاصيل الدخول أعلاه ووزّعه على موظفيك أو طلابك.',
    es: 'Descarga la hoja de cálculo con los datos de acceso de arriba y distribúyela a tu personal o estudiantes.',
  },
  'school.b15.import_results.next2': {
    en: 'They log in at theenglishhub.app/auth/login using their email and temporary password.',
    ar: 'يدخلون من theenglishhub.app/auth/login باستخدام بريدهم وكلمة المرور المؤقتة.',
    es: 'Inician sesión en theenglishhub.app/auth/login con su correo y su contraseña temporal.',
  },
  'school.b15.import_results.next3': {
    en: 'They will be prompted to change their password on first login.',
    ar: 'يُطلب منهم تغيير كلمة المرور في أول دخول.',
    es: 'Se les pedirá que cambien su contraseña en el primer inicio de sesión.',
  },
  'school.b15.import_results.btn_classes': {
    en: 'Create Classes',
    ar: 'أنشئ الصفوف',
    es: 'Crear clases',
  },
  'school.b15.import_results.btn_classes_desc': {
    en: 'Set up classes to organise your students and assign teachers.',
    ar: 'أعدّ الصفوف لتنظيم طلابك وتخصيص المعلمين.',
    es: 'Configura clases para organizar a tus estudiantes y asignar profesores.',
  },
  'school.b15.import_results.import_type_students': {
    en: 'Students',
    ar: 'طلاب',
    es: 'Estudiantes',
  },
  'school.b15.import_results.import_type_teachers': {
    en: 'Teachers',
    ar: 'معلمون',
    es: 'Profesores',
  },
  'school.b15.import_results.import_type_mixed': {
    en: 'Students & Teachers',
    ar: 'طلاب ومعلمون',
    es: 'Estudiantes y profesores',
  },

  // ─── /school/marking - WS-2 teacher decision / moderation block ───────────
  // Curated EN + Khaleeji (Gulf) AR. Teacher-facing operational register.
  // Exam tokens (AO, GCSE, "U") stay in Latin.
  'school_marking_review.section_title': {
    en: 'Teacher decision',
    ar: 'قرار المعلّم',
    es: 'Decisión del profesor',
  },
  'school_marking_review.last_action': { en: 'Last action', ar: 'آخر إجراء', es: 'Última acción' },
  'school_marking_review.final_grade_label': {
    en: 'Final grade',
    ar: 'الدرجة النهائية',
    es: 'Nota final',
  },
  'school_marking_review.grade_placeholder': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },
  'school_marking_review.training_toggle_label': {
    en: 'Suitable for training',
    ar: 'مناسبة للتدريب',
    es: 'Apta para entrenamiento',
  },
  'school_marking_review.feedback_label': {
    en: 'Feedback to student',
    ar: 'ملاحظات للطالب',
    es: 'Comentarios para el estudiante',
  },
  'school_marking_review.feedback_placeholder': {
    en: 'Final feedback the student will see…',
    ar: 'الملاحظات النهائية اللي بيشوفها الطالب…',
    es: 'Comentarios finales que verá el estudiante…',
  },
  'school_marking_review.adjustment_reason_label': {
    en: 'Adjustment reason',
    ar: 'سبب التعديل',
    es: 'Motivo del ajuste',
  },
  'school_marking_review.adjustment_reason_placeholder': {
    en: 'Why the AI mark was changed (internal)…',
    ar: 'ليش تغيّرت درجة الذكاء الاصطناعي (داخلي)…',
    es: 'Por qué se cambió la nota de la IA (interno)…',
  },
  'school_marking_review.moderation_notes_label': {
    en: 'Moderation notes',
    ar: 'ملاحظات المراجعة',
    es: 'Notas de moderación',
  },
  'school_marking_review.moderation_notes_placeholder': {
    en: 'Internal moderation notes (not shown to student)…',
    ar: 'ملاحظات مراجعة داخلية (ما تظهر للطالب)…',
    es: 'Notas de moderación internas (no se muestran al estudiante)…',
  },
  'school_marking_review.approve': { en: 'Approve', ar: 'اعتمد', es: 'Aprobar' },
  'school_marking_review.send_back': {
    en: 'Send back to student',
    ar: 'رجّعها للطالب',
    es: 'Devolver al estudiante',
  },
  'school_marking_review.reject': { en: 'Reject', ar: 'ارفض', es: 'Rechazar' },
  'school_marking_review.approving': { en: 'Approving…', ar: 'يعتمد…', es: 'Aprobando…' },
  'school_marking_review.sending_back': { en: 'Sending back…', ar: 'يرجّعها…', es: 'Devolviendo…' },
  'school_marking_review.rejecting': { en: 'Rejecting…', ar: 'يرفض…', es: 'Rechazando…' },
  'school_marking_review.draft_hint': {
    en: 'The AI mark is a draft. Approving records the final teacher mark and locks the submission.',
    ar: 'درجة الذكاء الاصطناعي مسودّة. الاعتماد يسجّل درجة المعلّم النهائية ويقفل التسليم.',
    es: 'La nota de la IA es un borrador. Al aprobar se registra la nota final del profesor y se bloquea la entrega.',
  },
  'school_marking_review.submit_failed': {
    en: 'Failed to submit decision',
    ar: 'ما قدرنا نرسل القرار',
    es: 'No se pudo enviar la decisión',
  },
  'school_marking_review.submit_error': {
    en: 'Could not submit decision',
    ar: 'تعذّر إرسال القرار',
    es: 'No se pudo enviar la decisión',
  },
  'school_marking_review.saved': {
    en: 'Decision saved',
    ar: 'تم حفظ القرار',
    es: 'Decisión guardada',
  },
  'school_marking_review.save_failed': {
    en: 'Could not save decision',
    ar: 'تعذّر حفظ القرار',
    es: 'No se pudo guardar la decisión',
  },
}
