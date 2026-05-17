/** dictionary-b15-marking-school.ts — Bucket B Phase B1.5. Curated EN + Khaleeji (Gulf) AR for /marking + /school product UI. */
export const B15_MARKING_SCHOOL_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── /marking shared nav ──────────────────────────────────────────────────
  'marking.nav.marking': { en: 'Marking', ar: 'التصحيح' },
  'marking.nav.results': { en: 'Results', ar: 'النتائج' },
  'marking.nav.history': { en: 'History', ar: 'السجل' },
  'marking.nav.sample_essays': { en: 'Sample essays', ar: 'نماذج المقالات' },

  // ─── /marking/submit ──────────────────────────────────────────────────────
  'marking.submit.breadcrumb_new': { en: 'New submission', ar: 'تسليم جديد' },
  'marking.submit.title': { en: 'Submit an essay for marking', ar: 'سلّم مقالتك للتصحيح' },
  'marking.submit.subtitle': {
    en: "Paste your essay below. We'll return a predicted grade, AO breakdown and marker-style feedback.",
    ar: 'الصق مقالتك أدناه وإحنا نرجّع لك توقع الدرجة وتحليل AO وملاحظات المصحّح.',
  },
  'marking.submit.how_ai_works': {
    en: 'How does AI marking work?',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي؟',
  },
  'marking.submit.ai_off_heading': {
    en: 'AI marking is turned off',
    ar: 'تصحيح الذكاء الاصطناعي موقوف',
  },
  'marking.submit.ai_off_body': {
    en: 'A parent or guardian has turned off AI features for this account. You can still use all other parts of The English Hub.',
    ar: 'أحد الوالدين أو الوصي وقف ميزات الذكاء الاصطناعي لهذا الحساب. تقدر تستخدم باقي أجزاء The English Hub بشكل طبيعي.',
  },
  'marking.submit.ai_off_parent_link': { en: 'Parent Settings', ar: 'إعدادات الوالدين' },
  'marking.submit.ai_off_explainer_link': { en: 'how AI marking works', ar: 'شلون يشتغل التصحيح' },
  'marking.submit.card_title': { en: 'Essay details', ar: 'تفاصيل المقالة' },
  'marking.submit.card_desc': {
    en: 'Pick your exam board, paper and question so we can apply the right marking guide.',
    ar: 'اختر البورد والورقة والسؤال عشان نطبّق دليل التصحيح الصح.',
  },
  'marking.submit.label_board': { en: 'Exam board', ar: 'بورد الامتحان' },
  'marking.submit.select_board': { en: 'Select board', ar: 'اختر البورد' },
  'marking.submit.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'marking.submit.board_coming_soon_note': {
    en: 'Mark schemes for {board} are coming soon. Please pick another board for now.',
    ar: 'مخططات التصحيح لـ{board} قادمة قريباً. اختر بورد ثاني الحين.',
  },
  'marking.submit.label_paper': { en: 'Paper', ar: 'الورقة' },
  'marking.submit.select_paper': { en: 'Select paper', ar: 'اختر الورقة' },
  'marking.submit.choose_board_first': { en: 'Choose a board first', ar: 'اختر البورد أول' },
  'marking.submit.label_question': { en: 'Question', ar: 'السؤال' },
  'marking.submit.select_question': { en: 'Select question', ar: 'اختر السؤال' },
  'marking.submit.choose_paper_first': { en: 'Choose a paper first', ar: 'اختر الورقة أول' },
  'marking.submit.label_title': { en: 'Title', ar: 'العنوان' },
  'marking.submit.label_title_optional': { en: '(optional)', ar: '(اختياري)' },
  'marking.submit.title_placeholder': {
    en: 'e.g. Macbeth — ambition essay, draft 2',
    ar: 'مثلاً: Macbeth — مقالة الطموح، المسودة 2',
  },
  'marking.submit.label_essay': { en: 'Your essay', ar: 'مقالتك' },
  'marking.submit.essay_placeholder': {
    en: 'Paste or type your full essay here...',
    ar: 'الصق أو اكتب مقالتك الكاملة هنا...',
  },
  'marking.submit.word': { en: 'word', ar: 'كلمة' },
  'marking.submit.words': { en: 'words', ar: 'كلمة' },
  'marking.submit.min_50': { en: '(minimum 50 words)', ar: '(الحد الأدنى 50 كلمة)' },
  'marking.submit.no_upper_limit': { en: 'No upper limit', ar: 'بدون حد أعلى' },
  'marking.submit.btn_cancel': { en: 'Cancel', ar: 'إلغاء' },
  'marking.submit.btn_submit': { en: 'Submit for marking', ar: 'سلّم للتصحيح' },
  'marking.submit.btn_marking': { en: 'Marking your essay…', ar: 'يصحّح مقالتك…' },
  'marking.submit.wait_note': {
    en: "AI marking usually takes 5–15 seconds. Please don't close this page.",
    ar: 'التصحيح عادةً يأخذ 5–15 ثانية. لا تسكر الصفحة الحين.',
  },

  // ─── /marking/history ────────────────────────────────────────────────────
  'marking.history.breadcrumb': { en: 'History', ar: 'السجل' },
  'marking.history.title': { en: 'Marking history', ar: 'سجل التصحيح' },
  'marking.history.subtitle': {
    en: "Every essay you've submitted, with your grade trajectory.",
    ar: 'كل المقالات اللي سلّمتها مع مسار درجاتك.',
  },
  'marking.history.btn_new': { en: 'New submission', ar: 'تسليم جديد' },
  'marking.history.stat_essays': { en: 'Essays marked', ar: 'مقالات مصحّحة' },
  'marking.history.stat_avg': { en: 'Average grade', ar: 'متوسط الدرجة' },
  'marking.history.stat_best': { en: 'Best grade', ar: 'أفضل درجة' },
  'marking.history.section_past': { en: 'Past submissions', ar: 'التسليمات السابقة' },
  'marking.history.loading': { en: 'Loading…', ar: 'لحظة…' },
  'marking.history.empty': {
    en: "You haven't marked any essays yet.",
    ar: 'ما صحّحت أي مقالة لحد الحين.',
  },
  'marking.history.btn_first': { en: 'Mark your first essay', ar: 'صحّح أول مقالة لك' },

  // ─── /marking/results/[id] ────────────────────────────────────────────────
  'marking.results.breadcrumb': { en: 'Results', ar: 'النتائج' },
  'marking.results.loading': { en: 'Loading results…', ar: 'يحمّل النتائج…' },
  'marking.results.card_strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'marking.results.card_strengths_desc': { en: 'What you did well', ar: 'شنو سوّيت زين' },
  'marking.results.card_improve': { en: 'Areas to improve', ar: 'مجالات التحسين' },
  'marking.results.card_improve_desc': {
    en: 'Focus for your next draft',
    ar: 'ركّز عليها في مسودتك الجاية',
  },
  'marking.results.card_next_grade_prefix': { en: 'To reach grade', ar: 'عشان توصل درجة' },
  'marking.results.card_next_grade_desc': { en: 'Next-grade targets', ar: 'أهداف الدرجة الجاية' },
  'marking.results.card_summary': { en: 'Marker summary', ar: 'ملخص المصحّح' },
  'marking.results.btn_back': { en: 'Back to history', ar: 'ارجع للسجل' },
  'marking.results.btn_another': { en: 'Mark another essay', ar: 'صحّح مقالة ثانية' },

  // ─── /marking/ai-explainer ───────────────────────────────────────────────
  'marking.ai_explainer.breadcrumb': {
    en: 'How AI Marking Works',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي',
  },
  'marking.ai_explainer.title': {
    en: 'How AI Marking Works',
    ar: 'شلون يشتغل التصحيح بالذكاء الاصطناعي',
  },
  'marking.ai_explainer.subtitle': {
    en: 'Written in plain language so students, parents and teachers can understand exactly what happens when you submit an essay.',
    ar: 'مكتوب بلغة بسيطة عشان الطلاب وأولياء الأمور والمعلمين يفهمون بالضبط شنو يصير لما تسلّم مقالتك.',
  },
  'marking.ai_explainer.h2_what': {
    en: '1. What is AI marking?',
    ar: '1. شنو هو التصحيح بالذكاء الاصطناعي؟',
  },
  'marking.ai_explainer.h2_which': {
    en: '2. Which AI do we use?',
    ar: '2. شنو الذكاء الاصطناعي اللي نستخدمه؟',
  },
  'marking.ai_explainer.h2_data': {
    en: '3. What information is sent to the AI?',
    ar: '3. شنو المعلومات اللي ترسل للذكاء الاصطناعي؟',
  },
  'marking.ai_explainer.h2_official': {
    en: '4. Is the grade official?',
    ar: '4. هل الدرجة رسمية؟',
  },
  'marking.ai_explainer.h2_human': {
    en: '5. Can a human review my work instead?',
    ar: '5. أقدر إنسان يراجع شغلي بدل الذكاء الاصطناعي؟',
  },
  'marking.ai_explainer.h2_optout': {
    en: '6. How do I turn off AI marking?',
    ar: '6. شلون أوقف التصحيح بالذكاء الاصطناعي؟',
  },
  'marking.ai_explainer.h2_rights': { en: '7. Your rights', ar: '7. حقوقك' },
  'marking.ai_explainer.h2_questions': { en: '8. Questions?', ar: '8. أسئلة؟' },
  'marking.ai_explainer.optout_box_heading': {
    en: 'To turn off AI features:',
    ar: 'عشان توقف ميزات الذكاء الاصطناعي:',
  },

  // ─── /marking/sample/inspector-calls ────────────────────────────────────
  'marking.sample.inspector_calls.breadcrumb': {
    en: 'An Inspector Calls',
    ar: 'An Inspector Calls',
  },
  'marking.sample.inspector_calls.title': {
    en: 'An Inspector Calls — Model Essay Bank',
    ar: 'An Inspector Calls — بنك النماذج',
  },
  'marking.sample.inspector_calls.subtitle': {
    en: 'Five fully-annotated model responses across two popular exam questions at Grades 5, 7 and 9. Each essay includes paragraph-level annotations, AO breakdowns and marker commentary explaining why it achieves its grade.',
    ar: 'خمسة نماذج موضّحة بالكامل على سؤالين شائعين بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات على مستوى الفقرة وتحليل AO وتعليق المصحّح.',
  },
  'marking.sample.inspector_calls.exam_question': { en: 'Exam question', ar: 'سؤال الامتحان' },
  'marking.sample.inspector_calls.marker_commentary': {
    en: 'Marker commentary',
    ar: 'تعليق المصحّح',
  },
  'marking.sample.inspector_calls.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
  },
  'marking.sample.inspector_calls.grade_prefix': { en: 'Grade', ar: 'درجة' },
  'marking.sample.inspector_calls.fair_dealing_strong': {
    en: 'Fair dealing notice.',
    ar: 'إشعار الاستخدام العادل.',
  },
  'marking.sample.inspector_calls.btn_back': { en: 'Back to sample essays', ar: 'ارجع للنماذج' },
  'marking.sample.inspector_calls.btn_mark': {
    en: 'Mark your own essay',
    ar: 'صحّح مقالتك الخاصة',
  },

  // ─── /marking/sample/jekyll-hyde ────────────────────────────────────────
  'marking.sample.jekyll_hyde.breadcrumb': { en: 'Jekyll & Hyde', ar: 'Jekyll & Hyde' },
  'marking.sample.jekyll_hyde.title': {
    en: 'Jekyll & Hyde — Model Essay Bank',
    ar: 'Jekyll & Hyde — بنك النماذج',
  },
  'marking.sample.jekyll_hyde.subtitle': {
    en: 'Three original model essays answering "How does Stevenson present the theme of duality?" at Grade 5, 7 and 9. Each essay includes paragraph annotations, AO breakdown, grade justification, and targeted improvements.',
    ar: 'ثلاثة نماذج أصلية تجيب على سؤال "شلون يقدّم ستيفنسون موضوع الازدواجية؟" بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات الفقرة وتحليل AO ومبرّر الدرجة وتحسينات موجّهة.',
  },
  'marking.sample.jekyll_hyde.jump_nav_label': { en: 'Jump to grade', ar: 'انتقل للدرجة' },
  'marking.sample.jekyll_hyde.words_suffix': { en: 'words', ar: 'كلمة' },
  'marking.sample.jekyll_hyde.marker_commentary': { en: 'Marker commentary', ar: 'تعليق المصحّح' },
  'marking.sample.jekyll_hyde.ao_breakdown': { en: 'AO Breakdown', ar: 'تحليل AO' },
  'marking.sample.jekyll_hyde.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
  },
  'marking.sample.jekyll_hyde.what_would_improve': {
    en: 'What would improve this essay?',
    ar: 'شنو يحسّن هذه المقالة؟',
  },
  'marking.sample.jekyll_hyde.annotation_strength': { en: 'Strength', ar: 'نقطة قوة' },
  'marking.sample.jekyll_hyde.annotation_improve': { en: 'To improve', ar: 'للتحسين' },
  'marking.sample.jekyll_hyde.annotation_technique': {
    en: 'Technique / AO link',
    ar: 'الأسلوب / ربط AO',
  },
  'marking.sample.jekyll_hyde.btn_back': { en: 'Back to sample essays', ar: 'ارجع للنماذج' },
  'marking.sample.jekyll_hyde.btn_mark': { en: 'Mark your own essay', ar: 'صحّح مقالتك الخاصة' },
  'marking.sample.jekyll_hyde.grade_label': { en: 'Grade', ar: 'درجة' },
  'marking.sample.jekyll_hyde.ao_total_prefix': { en: 'Total:', ar: 'المجموع:' },

  // ─── /marking/sample/christmas-carol ────────────────────────────────────
  'marking.sample.christmas_carol.breadcrumb': { en: 'A Christmas Carol', ar: 'A Christmas Carol' },
  'marking.sample.christmas_carol.title': {
    en: 'A Christmas Carol — Model Essay Bank',
    ar: 'A Christmas Carol — بنك النماذج',
  },
  'marking.sample.christmas_carol.subtitle': {
    en: 'Three original model essays answering "How does Dickens present Scrooge\'s transformation?" at Grade 5, 7 and 9. Each essay includes paragraph annotations, AO breakdown, grade justification, and targeted improvements.',
    ar: 'ثلاثة نماذج أصلية تجيب على سؤال "شلون يقدّم ديكنز تحوّل سكروج؟" بالدرجات 5 و7 و9. كل مقالة تشمل تعليقات الفقرة وتحليل AO ومبرّر الدرجة وتحسينات موجّهة.',
  },
  'marking.sample.christmas_carol.jump_nav_label': { en: 'Jump to grade', ar: 'انتقل للدرجة' },
  'marking.sample.christmas_carol.grade_label': { en: 'Grade', ar: 'درجة' },
  'marking.sample.christmas_carol.words_suffix': { en: 'words', ar: 'كلمة' },
  'marking.sample.christmas_carol.marker_commentary': {
    en: 'Marker commentary',
    ar: 'تعليق المصحّح',
  },
  'marking.sample.christmas_carol.ao_breakdown': { en: 'AO Breakdown', ar: 'تحليل AO' },
  'marking.sample.christmas_carol.grade_justification': {
    en: 'Grade justification',
    ar: 'مبرّر الدرجة',
  },
  'marking.sample.christmas_carol.what_would_improve': {
    en: 'What would improve this essay?',
    ar: 'شنو يحسّن هذه المقالة؟',
  },
  'marking.sample.christmas_carol.annotation_strength': { en: 'Strength', ar: 'نقطة قوة' },
  'marking.sample.christmas_carol.annotation_improve': { en: 'To improve', ar: 'للتحسين' },
  'marking.sample.christmas_carol.annotation_technique': {
    en: 'Technique / AO link',
    ar: 'الأسلوب / ربط AO',
  },
  'marking.sample.christmas_carol.btn_back': { en: 'Back to sample essays', ar: 'ارجع للنماذج' },
  'marking.sample.christmas_carol.btn_mark': {
    en: 'Mark your own essay',
    ar: 'صحّح مقالتك الخاصة',
  },

  // ─── /school/users ───────────────────────────────────────────────────────
  'school.b15.users.title': { en: 'User Management', ar: 'إدارة المستخدمين' },
  'school.b15.users.subtitle': {
    en: 'Manage teachers, students, and admins across your school.',
    ar: 'تنظيم المعلمين والطلاب والمشرفين في مدرستك.',
  },
  'school.b15.users.btn_import': { en: 'Import Users', ar: 'استيراد مستخدمين' },
  'school.b15.users.btn_add': { en: 'Add User', ar: 'إضافة مستخدم' },
  'school.b15.users.tab_all': { en: 'All Users', ar: 'كل المستخدمين' },
  'school.b15.users.tab_teachers': { en: 'Teachers', ar: 'المعلمون' },
  'school.b15.users.tab_students': { en: 'Students', ar: 'الطلاب' },
  'school.b15.users.tab_admins': { en: 'Admins', ar: 'المشرفون' },
  'school.b15.users.search_placeholder': {
    en: 'Search name or email...',
    ar: 'دوّر اسم أو بريد إلكتروني...',
  },
  'school.b15.users.filter_all_roles': { en: 'All Roles', ar: 'كل الأدوار' },
  'school.b15.users.filter_all_years': { en: 'All Years', ar: 'كل السنوات' },
  'school.b15.users.filter_all_status': { en: 'All Status', ar: 'كل الحالات' },
  'school.b15.users.col_name': { en: 'Name', ar: 'الاسم' },
  'school.b15.users.col_email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'school.b15.users.col_role': { en: 'Role', ar: 'الدور' },
  'school.b15.users.col_year': { en: 'Year Group', ar: 'مجموعة السنة' },
  'school.b15.users.col_status': { en: 'Status', ar: 'الحالة' },
  'school.b15.users.col_last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'school.b15.users.col_actions': { en: 'Actions', ar: 'الإجراءات' },
  'school.b15.users.no_users': {
    en: 'No users match your filters.',
    ar: 'ما في مستخدمين يطابقون الفلاتر.',
  },
  'school.b15.users.showing': { en: 'Showing', ar: 'يعرض' },
  'school.b15.users.of': { en: 'of', ar: 'من' },
  'school.b15.users.users_suffix': { en: 'users', ar: 'مستخدم' },
  'school.b15.users.modal_add_title': { en: 'Add User', ar: 'إضافة مستخدم' },
  'school.b15.users.modal_edit_title': { en: 'Edit User', ar: 'تعديل المستخدم' },
  'school.b15.users.label_first_name': { en: 'First Name', ar: 'الاسم الأول' },
  'school.b15.users.label_last_name': { en: 'Last Name', ar: 'اسم العائلة' },
  'school.b15.users.label_email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'school.b15.users.label_role': { en: 'Role', ar: 'الدور' },
  'school.b15.users.label_year_group': { en: 'Year Group', ar: 'مجموعة السنة' },
  'school.b15.users.label_class': { en: 'Class (optional)', ar: 'الصف (اختياري)' },
  'school.b15.users.placeholder_first': { en: 'First name', ar: 'الاسم الأول' },
  'school.b15.users.placeholder_last': { en: 'Last name', ar: 'اسم العائلة' },
  'school.b15.users.placeholder_email': { en: 'user@school.edu', ar: 'user@school.edu' },
  'school.b15.users.placeholder_class': { en: 'e.g. 10B', ar: 'مثلاً 10B' },
  'school.b15.users.send_invite': { en: 'Send invite email', ar: 'أرسل دعوة بالبريد' },
  'school.b15.users.btn_cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.b15.users.btn_add_user': { en: 'Add User', ar: 'إضافة مستخدم' },
  'school.b15.users.btn_save': { en: 'Save Changes', ar: 'حفظ التغييرات' },
  'school.b15.users.action_edit': { en: 'Edit User', ar: 'تعديل المستخدم' },
  'school.b15.users.action_reset_pw': { en: 'Reset Password', ar: 'إعادة ضبط كلمة المرور' },
  'school.b15.users.action_remove': { en: 'Remove User', ar: 'حذف المستخدم' },
  'school.b15.users.bulk_selected': { en: 'selected', ar: 'محدد' },
  'school.b15.users.bulk_export': { en: 'Export', ar: 'تصدير' },
  'school.b15.users.bulk_reset_pw': { en: 'Reset Passwords', ar: 'إعادة ضبط كلمات المرور' },
  'school.b15.users.bulk_remove': { en: 'Remove Selected', ar: 'حذف المحدد' },
  'school.b15.users.never': { en: 'Never', ar: 'أبداً' },
  'school.b15.users.label_status': { en: 'Status', ar: 'الحالة' },
  'school.b15.users.role_admin': { en: 'Admin', ar: 'مشرف' },
  'school.b15.users.role_teacher': { en: 'Teacher', ar: 'معلم' },
  'school.b15.users.role_student': { en: 'Student', ar: 'طالب' },
  'school.b15.users.status_active': { en: 'Active', ar: 'نشط' },
  'school.b15.users.status_pending': { en: 'Pending invite', ar: 'دعوة معلّقة' },
  'school.b15.users.status_suspended': { en: 'Suspended', ar: 'موقوف' },
  'school.b15.users.select_year_group': { en: 'Select year group', ar: 'اختر مجموعة السنة' },
  'school.b15.users.select_role': { en: 'Select role', ar: 'اختر الدور' },
  'school.b15.users.perm_admin_label': { en: 'School Admin', ar: 'مشرف المدرسة' },
  'school.b15.users.perm_admin_desc': {
    en: 'Full access -- manage all users, view all analytics, edit school settings',
    ar: 'وصول كامل — تنظيم كل المستخدمين وعرض كل التحليلات وتعديل إعدادات المدرسة',
  },
  'school.b15.users.perm_teacher_label': { en: 'Teacher', ar: 'معلم' },
  'school.b15.users.perm_teacher_desc': {
    en: 'View their classes, mark work, see student progress, access all resources',
    ar: 'عرض صفوفه وتصحيح الشغل ومتابعة تقدم الطلاب والوصول لكل المصادر',
  },
  'school.b15.users.perm_student_label': { en: 'Student', ar: 'طالب' },
  'school.b15.users.perm_student_desc': {
    en: 'Access courses, submit work, view own progress, receive feedback',
    ar: 'الوصول للمقررات وتسليم الشغل وعرض تقدمه الخاص واستلام التغذية الراجعة',
  },

  // ─── /school/permissions ─────────────────────────────────────────────────
  'school.b15.permissions.title': {
    en: 'Permissions & Access Levels',
    ar: 'الصلاحيات ومستويات الوصول',
  },
  'school.b15.permissions.subtitle': {
    en: "Understanding who can do what in your school's English Hub",
    ar: 'افهم من يقدر يسوّي شنو في English Hub مالتك',
  },
  'school.b15.permissions.section_roles': { en: 'Roles at a Glance', ar: 'الأدوار في لمحة' },
  'school.b15.permissions.section_matrix': { en: 'Permission Matrix', ar: 'مصفوفة الصلاحيات' },
  'school.b15.permissions.section_changing': { en: 'Changing Roles', ar: 'تغيير الأدوار' },
  'school.b15.permissions.section_security': {
    en: 'Security & Data Notes',
    ar: 'ملاحظات الأمان والبيانات',
  },
  'school.b15.permissions.who_is': { en: 'Who is this?', ar: 'من هذا؟' },
  'school.b15.permissions.what_can': { en: 'What they can do', ar: 'شنو يقدرون يسوّون' },
  'school.b15.permissions.col_feature': { en: 'Feature', ar: 'الميزة' },
  'school.b15.permissions.col_admin': { en: 'Admin', ar: 'مشرف' },
  'school.b15.permissions.col_teacher': { en: 'Teacher', ar: 'معلم' },
  'school.b15.permissions.col_student': { en: 'Student', ar: 'طالب' },
  'school.b15.permissions.role_admin': { en: 'School Admin', ar: 'مشرف المدرسة' },
  'school.b15.permissions.role_admin_who': {
    en: 'School IT admin, Head of English, Principal / Vice-Principal',
    ar: 'مشرف تقنية المدرسة أو رئيس قسم الإنجليزي أو المدير',
  },
  'school.b15.permissions.badge_full_access': { en: 'Full Access', ar: 'وصول كامل' },
  'school.b15.permissions.role_teacher': { en: 'Teacher', ar: 'معلم' },
  'school.b15.permissions.role_teacher_who': {
    en: 'Subject teachers, supply teachers, teaching assistants',
    ar: 'معلمو المواد والمعلمون البدلاء والمساعدون',
  },
  'school.b15.permissions.badge_class_access': { en: 'Class Access', ar: 'وصول الصف' },
  'school.b15.permissions.role_student': { en: 'Student', ar: 'طالب' },
  'school.b15.permissions.role_student_who': {
    en: 'All enrolled students',
    ar: 'كل الطلاب المسجّلين',
  },
  'school.b15.permissions.badge_personal': { en: 'Personal Access', ar: 'وصول شخصي' },
  'school.b15.permissions.promote_title': {
    en: 'Promote a Teacher to Admin',
    ar: 'رقّ معلماً لمشرف',
  },
  'school.b15.permissions.promote_note': {
    en: 'Navigate through the following steps in the school portal:',
    ar: 'اتبع الخطوات التالية في بوابة المدرسة:',
  },
  'school.b15.permissions.promote_instant': {
    en: 'The teacher will gain full admin access immediately upon saving.',
    ar: 'يحصل المعلم على وصول مشرف كامل فور الحفظ.',
  },
  'school.b15.permissions.demote_title': {
    en: 'Demote an Admin to Teacher',
    ar: 'خفّض مشرفاً لمعلم',
  },
  'school.b15.permissions.demote_note': {
    en: 'Navigate through the following steps in the school portal:',
    ar: 'اتبع الخطوات التالية في بوابة المدرسة:',
  },
  'school.b15.permissions.demote_warning': {
    en: 'Note: you cannot demote your own account. Another admin must do this.',
    ar: 'ملاحظة: ما تقدر تخفّض حسابك بنفسك. لازم مشرف ثاني يسوّي هذا.',
  },
  'school.b15.permissions.class_access_title': {
    en: 'Class Access for Teachers',
    ar: 'وصول الصف للمعلمين',
  },
  'school.b15.permissions.class_access_desc': {
    en: "Teachers automatically receive access to the classes they are assigned to. They cannot see students or data from other teachers' classes.",
    ar: 'يحصل المعلمون تلقائياً على الوصول للصفوف المخصّصة لهم. ما يقدرون يشوفون طلاب أو بيانات صفوف المعلمين الثانيين.',
  },
  'school.b15.permissions.sec_data_isolation': {
    en: 'Student data isolation',
    ar: 'عزل بيانات الطلاب',
  },
  'school.b15.permissions.sec_data_isolation_desc': {
    en: "Students can only view their own work, scores, and progress. No student can see another student's data at any point.",
    ar: 'يشوف الطلاب فقط شغلهم ودرجاتهم وتقدّمهم. ما يقدر طالب يرى بيانات طالب آخر أبداً.',
  },
  'school.b15.permissions.sec_teacher_scope': {
    en: 'Teacher visibility scope',
    ar: 'نطاق رؤية المعلم',
  },
  'school.b15.permissions.sec_teacher_scope_desc': {
    en: "Teachers only have access to the students in their assigned classes. They cannot view progress data, essays, or submissions belonging to students in other teachers' classes.",
    ar: 'يصل المعلمون فقط لطلاب صفوفهم المخصّصة. ما يقدرون يشوفون بيانات التقدم أو المقالات أو التسليمات لطلاب صفوف المعلمين الثانيين.',
  },
  'school.b15.permissions.sec_audit': { en: 'Audit logging', ar: 'سجل المراجعة' },
  'school.b15.permissions.sec_audit_desc': {
    en: 'All administrative actions are recorded in an audit log — including user management, role changes, data exports, and login events. Logs are available to school admins on request.',
    ar: 'تُسجَّل كل الإجراءات الإدارية في سجل المراجعة، بما فيها إدارة المستخدمين وتغييرات الأدوار وتصدير البيانات وأحداث تسجيل الدخول. السجلات متاحة لمشرفي المدرسة عند الطلب.',
  },
  'school.b15.permissions.sec_gdpr': { en: 'GDPR alignment', ar: 'توافق GDPR' },
  'school.b15.permissions.sec_gdpr_desc': {
    en: "Data access is strictly aligned with your school's data processing agreement. English Hub acts as a data processor on behalf of your school. Role-based access controls ensure staff only see data they are authorised to process under your school's data protection policies.",
    ar: 'الوصول للبيانات منسجم بدقة مع اتفاقية معالجة البيانات المالتك. يعمل English Hub كمعالج بيانات نيابةً عن مدرستك. تضمن ضوابط الوصول المبنية على الأدوار أن الموظفين يرون فقط البيانات المرخّص لهم معالجتها حسب سياسات حماية البيانات المالتك.',
  },

  // ─── /school/guide ───────────────────────────────────────────────────────
  'school.b15.guide.title': { en: 'School Setup Guide', ar: 'دليل إعداد المدرسة' },
  'school.b15.guide.subtitle': {
    en: 'Everything you need to get your school up and running in under 30 minutes',
    ar: 'كل شي تحتاجه عشان تشغّل مدرستك في أقل من 30 دقيقة',
  },
  'school.b15.guide.btn_pdf': { en: 'Download as PDF', ar: 'حمّل PDF' },
  'school.b15.guide.btn_support': { en: 'Contact Support', ar: 'تواصل مع الدعم' },
  'school.b15.guide.checklist_title': { en: 'Quick Start Checklist', ar: 'قائمة البدء السريع' },
  'school.b15.guide.checklist_desc': {
    en: 'Tick off each step as you complete it',
    ar: 'علّم على كل خطوة لما تكمّلها',
  },
  'school.b15.guide.complete_suffix': { en: 'complete', ar: 'مكتمل' },
  'school.b15.guide.all_done': {
    en: 'All done! Your school is ready to go.',
    ar: 'خلّصت كل شي! مدرستك جاهزة الحين.',
  },
  'school.b15.guide.detailed_title': { en: 'Detailed Setup Guide', ar: 'دليل الإعداد التفصيلي' },
  'school.b15.guide.footer_help': {
    en: 'Need help getting set up?',
    ar: 'تحتاج مساعدة في الإعداد؟',
  },
  'school.b15.guide.footer_response': {
    en: 'Our school support team typically responds within one working day.',
    ar: 'فريق الدعم المالتنا يردّ عادةً خلال يوم عمل واحد.',
  },
  'school.b15.guide.btn_pdf_guide': { en: 'Download PDF guide', ar: 'حمّل دليل PDF' },
  'school.b15.guide.step1': { en: 'Create school account', ar: 'أنشئ حساب المدرسة' },
  'school.b15.guide.step2': { en: 'Import teachers', ar: 'استورد المعلمين' },
  'school.b15.guide.step3': { en: 'Import students', ar: 'استورد الطلاب' },
  'school.b15.guide.step4': {
    en: 'Create classes and assign students',
    ar: 'أنشئ الصفوف وخصّص الطلاب',
  },
  'school.b15.guide.step5': {
    en: 'Share login details with staff and students',
    ar: 'شارك تفاصيل الدخول مع الموظفين والطلاب',
  },
  'school.b15.guide.section_roles': {
    en: 'Understanding User Roles & Permissions',
    ar: 'فهم أدوار المستخدمين والصلاحيات',
  },
  'school.b15.guide.badge_start_here': { en: 'Start here', ar: 'ابدأ هنا' },
  'school.b15.guide.section_import_teachers': { en: 'Importing Teachers', ar: 'استيراد المعلمين' },
  'school.b15.guide.section_import_students': { en: 'Importing Students', ar: 'استيراد الطلاب' },
  'school.b15.guide.section_classes': { en: 'Creating Classes', ar: 'إنشاء الصفوف' },
  'school.b15.guide.section_logins': {
    en: 'Distributing Login Details',
    ar: 'توزيع تفاصيل الدخول',
  },
  'school.b15.guide.section_management': { en: 'Ongoing Management', ar: 'الإدارة المستمرة' },
  'school.b15.guide.section_faq': { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },

  // ─── /school/join-codes ──────────────────────────────────────────────────
  'school.b15.join_codes.title': { en: 'Join Codes', ar: 'رموز الانضمام' },
  'school.b15.join_codes.subtitle': {
    en: 'Share these codes with students or teachers so they can join your school. They go to theenglishhub.app/school/join and enter the code.',
    ar: 'شارك هذه الرموز مع الطلاب أو المعلمين عشان ينضمون لمدرستك. يروحون لـ theenglishhub.app/school/join ويدخلون الرمز.',
  },
  'school.b15.join_codes.spotlight_label': {
    en: 'Current School Join Code',
    ar: 'رمز انضمام المدرسة الحالي',
  },
  'school.b15.join_codes.qr_title': {
    en: 'QR Code Generation Coming Soon',
    ar: 'إنشاء رمز QR قادم قريباً',
  },
  'school.b15.join_codes.qr_desc': {
    en: 'Soon you will be able to generate a QR code for each join code. Students and teachers can scan it with their phone camera to be taken straight to the join page — no typing required.',
    ar: 'قريباً تقدر تولّد رمز QR لكل رمز انضمام. يقدر الطلاب والمعلمين يمسحونه بكاميرا الجوال وتاخذهم مباشرةً لصفحة الانضمام دون كتابة.',
  },
  'school.b15.join_codes.active_title': { en: 'Active Join Codes', ar: 'رموز الانضمام النشطة' },
  'school.b15.join_codes.no_codes': {
    en: 'No join codes yet. Create one to get started.',
    ar: 'ما في رموز انضمام بعد. أنشئ واحد للبدء.',
  },
  'school.b15.join_codes.col_code': { en: 'Code', ar: 'الرمز' },
  'school.b15.join_codes.col_type': { en: 'Type', ar: 'النوع' },
  'school.b15.join_codes.col_uses': { en: 'Uses', ar: 'الاستخدامات' },
  'school.b15.join_codes.col_expires': { en: 'Expires', ar: 'الانتهاء' },
  'school.b15.join_codes.col_class': { en: 'Class', ar: 'الصف' },
  'school.b15.join_codes.col_status': { en: 'Status', ar: 'الحالة' },
  'school.b15.join_codes.col_actions': { en: 'Actions', ar: 'الإجراءات' },
  'school.b15.join_codes.status_disabled': { en: 'Disabled', ar: 'معطّل' },
  'school.b15.join_codes.status_expired': { en: 'Expired', ar: 'منتهي الصلاحية' },
  'school.b15.join_codes.status_full': { en: 'Full', ar: 'ممتلئ' },
  'school.b15.join_codes.status_active': { en: 'Active', ar: 'نشط' },
  'school.b15.join_codes.create_title': { en: 'Create New Join Code', ar: 'أنشئ رمز انضمام جديد' },
  'school.b15.join_codes.label_code_type': { en: 'Code Type', ar: 'نوع الرمز' },
  'school.b15.join_codes.type_student': { en: 'Student', ar: 'طالب' },
  'school.b15.join_codes.type_teacher': { en: 'Teacher', ar: 'معلم' },
  'school.b15.join_codes.label_code': { en: 'Code', ar: 'الرمز' },
  'school.b15.join_codes.code_hint': {
    en: 'Auto-generated 6-character code. You can customise it (3-12 uppercase alphanumeric).',
    ar: 'رمز مُولَّد تلقائياً من 6 أحرف. تقدر تخصّصه (3-12 حرف كبير أو رقم).',
  },
  'school.b15.join_codes.label_max_uses': { en: 'Max Uses', ar: 'أقصى استخدامات' },
  'school.b15.join_codes.max_uses_hint': {
    en: 'Set to 0 for unlimited uses.',
    ar: 'اضبط على 0 لاستخدامات غير محدودة.',
  },
  'school.b15.join_codes.label_expires': { en: 'Expires', ar: 'تاريخ الانتهاء' },
  'school.b15.join_codes.expires_hint': {
    en: 'Leave blank for no expiry.',
    ar: 'اتركه فارغاً لعدم الانتهاء.',
  },
  'school.b15.join_codes.label_class': { en: 'Link to Class', ar: 'ربط بصف' },
  'school.b15.join_codes.no_class': { en: 'No class link', ar: 'بدون ربط بصف' },
  'school.b15.join_codes.class_hint': {
    en: 'If set, students who use this code will automatically be added to the selected class.',
    ar: 'إذا حُدِّد، يُضاف الطلاب اللي يستخدمون هذا الرمز تلقائياً للصف المختار.',
  },
  'school.b15.join_codes.btn_generate': { en: 'Generate Code', ar: 'ولّد رمزاً' },
  'school.b15.join_codes.btn_generating': { en: 'Generating...', ar: 'يولّد...' },
  'school.b15.join_codes.title_copy': { en: 'Copy code', ar: 'انسخ الرمز' },
  'school.b15.join_codes.title_disable': { en: 'Disable code', ar: 'عطّل الرمز' },
  'school.b15.join_codes.title_enable': { en: 'Enable code', ar: 'فعّل الرمز' },
  'school.b15.join_codes.title_delete': { en: 'Delete code', ar: 'احذف الرمز' },

  // ─── /school/tools ───────────────────────────────────────────────────────
  'school.b15.tools.tool_seating_name': { en: 'Seating Plan Generator', ar: 'مولّد خطط الجلوس' },
  'school.b15.tools.tool_seating_desc': {
    en: 'Automatically create optimised seating arrangements for any classroom layout.',
    ar: 'أنشئ تلقائياً ترتيبات جلوس محسّنة لأي تخطيط صفي.',
  },
  'school.b15.tools.tool_groups_name': { en: 'Group Generator', ar: 'مولّد المجموعات' },
  'school.b15.tools.tool_groups_desc': {
    en: 'Build balanced student groups based on ability, behaviour, or random selection.',
    ar: 'أنشئ مجموعات طلابية متوازنة حسب القدرة أو السلوك أو الاختيار العشوائي.',
  },
  'school.b15.tools.tool_quiz_name': { en: 'Quiz Builder', ar: 'منشئ الاختبارات' },
  'school.b15.tools.tool_quiz_desc': {
    en: 'Design interactive quizzes with multiple question types and instant marking.',
    ar: 'صمّم اختبارات تفاعلية بأنواع أسئلة متعددة وتصحيح فوري.',
  },
  'school.b15.tools.tool_starters_name': {
    en: 'Starter Activity Generator',
    ar: 'مولّد نشاط البداية',
  },
  'school.b15.tools.tool_starters_desc': {
    en: 'Generate engaging lesson starters tailored to your topic and year group.',
    ar: 'ولّد بدايات درس جذّابة مناسبة لموضوعك ومجموعتك.',
  },
  'school.b15.tools.tool_mark_scheme_name': { en: 'Mark Scheme Reference', ar: 'مرجع خطط التصحيح' },
  'school.b15.tools.tool_mark_scheme_desc': {
    en: 'Browse and search official mark schemes for quick assessment guidance.',
    ar: 'تصفّح وابحث في خطط التصحيح الرسمية للتوجيه السريع.',
  },
  'school.b15.tools.tool_diff_name': { en: 'Differentiation Builder', ar: 'منشئ التمييز' },
  'school.b15.tools.tool_diff_desc': {
    en: 'Create scaffolded resources with support, core, and extension tasks.',
    ar: 'أنشئ موارد متدرّجة بمهام دعم وأساسية وتوسيعية.',
  },
  'school.b15.tools.tool_worksheet_name': { en: 'Worksheet Generator', ar: 'مولّد أوراق العمل' },
  'school.b15.tools.tool_worksheet_desc': {
    en: 'Produce print-ready worksheets aligned to your scheme of work.',
    ar: 'أنتج أوراق عمل جاهزة للطباعة مرتبطة بخطتك التدريسية.',
  },
  'school.b15.tools.tool_timer_name': { en: 'Timer & Countdown', ar: 'المؤقّت والعدّاد' },
  'school.b15.tools.tool_timer_desc': {
    en: 'A projector-friendly countdown timer with presets and alarm.',
    ar: 'عدّاد تنازلي مناسب للشاشة مع إعدادات مسبقة وتنبيه.',
  },
  'school.b15.tools.title': { en: 'Teacher Tools', ar: 'أدوات المعلم' },
  'school.b15.tools.subtitle': {
    en: 'Everything you need to plan, teach, and assess',
    ar: 'كل شي تحتاجه للتخطيط والتدريس والتقييم',
  },
  'school.b15.tools.timer_inline': {
    en: 'Use the Quick Timer below',
    ar: 'استخدم المؤقّت السريع أدناه',
  },
  'school.b15.tools.open': { en: 'Open', ar: 'افتح' },
  'school.b15.tools.quick_timer_title': { en: 'Quick Timer', ar: 'المؤقّت السريع' },
  'school.b15.tools.quick_timer_desc': {
    en: 'Projector-friendly countdown with alarm',
    ar: 'عدّاد تنازلي مناسب للشاشة مع تنبيه',
  },
  'school.b15.tools.btn_full_screen': { en: 'Full Screen', ar: 'شاشة كاملة' },
  'school.b15.tools.dialog_title': { en: 'Countdown Timer', ar: 'العدّاد التنازلي' },
  'school.b15.tools.btn_start': { en: 'Start', ar: 'ابدأ' },
  'school.b15.tools.btn_pause': { en: 'Pause', ar: 'إيقاف مؤقت' },
  'school.b15.tools.btn_reset': { en: 'Reset', ar: 'إعادة تعيين' },
  'school.b15.tools.min_suffix': { en: 'min', ar: 'دقيقة' },

  // ─── /school/worksheets ──────────────────────────────────────────────────
  'school.b15.worksheets.title': { en: 'Worksheet Generator', ar: 'مولّد أوراق العمل' },
  'school.b15.worksheets.subtitle': {
    en: 'Create professional, print-ready worksheets for your English classes. Choose a type, configure options, and preview before printing.',
    ar: 'أنشئ أوراق عمل احترافية جاهزة للطباعة لصفوف الإنجليزي. اختر النوع وضبط الخيارات وراجع قبل الطباعة.',
  },
  'school.b15.worksheets.section_type': { en: 'Worksheet Type', ar: 'نوع ورقة العمل' },
  'school.b15.worksheets.section_content': { en: 'Content', ar: 'المحتوى' },
  'school.b15.worksheets.label_text': { en: 'Text / Source', ar: 'النص / المصدر' },
  'school.b15.worksheets.label_topic': {
    en: 'Topic / Theme / Character',
    ar: 'الموضوع / الفكرة / الشخصية',
  },
  'school.b15.worksheets.section_settings': { en: 'Settings', ar: 'الإعدادات' },
  'school.b15.worksheets.label_difficulty': { en: 'Difficulty', ar: 'المستوى' },
  'school.b15.worksheets.label_school': { en: 'School Name', ar: 'اسم المدرسة' },
  'school.b15.worksheets.label_class': { en: 'Class / Group', ar: 'الصف / المجموعة' },
  'school.b15.worksheets.label_date': { en: 'Date', ar: 'التاريخ' },
  'school.b15.worksheets.show_answers': { en: 'Show Answers', ar: 'إظهار الإجابات' },
  'school.b15.worksheets.hide_answers': { en: 'Hide Answers', ar: 'إخفاء الإجابات' },
  'school.b15.worksheets.btn_generate': { en: 'Generate Worksheet', ar: 'ولّد ورقة العمل' },
  'school.b15.worksheets.btn_refresh': { en: 'Refresh Preview', ar: 'حدّث المعاينة' },
  'school.b15.worksheets.btn_print': { en: 'Print', ar: 'طباعة' },
  'school.b15.worksheets.label_difficulty_level': { en: 'Difficulty Level', ar: 'مستوى الصعوبة' },
  'school.b15.worksheets.section_header_details': { en: 'Header Details', ar: 'تفاصيل الترويسة' },
  'school.b15.worksheets.select_none': { en: '-- None --', ar: '-- لا شيء --' },
  'school.b15.worksheets.preview_label': { en: 'Preview', ar: 'معاينة' },
  'school.b15.worksheets.preview_layout': {
    en: 'A4 layout · optimised for printing',
    ar: 'تخطيط A4 · محسّن للطباعة',
  },
  'school.b15.worksheets.no_worksheet_title': {
    en: 'No worksheet generated yet',
    ar: 'ما ولّدت ورقة عمل بعد',
  },
  'school.b15.worksheets.no_worksheet_desc': {
    en: 'Choose a worksheet type, select your text and topic, set the difficulty level, then click "Generate Worksheet" to see a preview.',
    ar: 'اختر نوع ورقة العمل وحدد النص والموضوع وعيّن مستوى الصعوبة ثم انقر "ولّد ورقة العمل" لترى المعاينة.',
  },
  'school.b15.worksheets.difficulty_foundation_label': { en: 'Foundation', ar: 'أساسي' },
  'school.b15.worksheets.difficulty_foundation_desc': {
    en: 'Scaffolded with sentence starters and guided prompts',
    ar: 'مدعوم ببدايات جمل وتوجيهات مرشدة',
  },
  'school.b15.worksheets.difficulty_core_label': { en: 'Core', ar: 'أساسي متوسط' },
  'school.b15.worksheets.difficulty_core_desc': {
    en: 'Standard difficulty with clear structure',
    ar: 'صعوبة عادية بهيكل واضح',
  },
  'school.b15.worksheets.difficulty_extension_label': { en: 'Extension', ar: 'متقدم' },
  'school.b15.worksheets.difficulty_extension_desc': {
    en: 'Challenging with open-ended, evaluative tasks',
    ar: 'تحديّ بمهام مفتوحة وتقييمية',
  },

  // ─── /school/import ──────────────────────────────────────────────────────
  'school.b15.import.title': { en: 'Import Users', ar: 'استيراد المستخدمين' },
  'school.b15.import.subtitle': {
    en: 'Upload a spreadsheet to create accounts for all your students or teachers instantly.',
    ar: 'ارفع جدول بيانات لإنشاء حسابات كل طلابك أو معلمّيك فوراً.',
  },
  'school.b15.import.tab_students': { en: 'Import Students', ar: 'استيراد الطلاب' },
  'school.b15.import.tab_teachers': { en: 'Import Teachers', ar: 'استيراد المعلمين' },
  'school.b15.import.step1_title': {
    en: 'Step 1 — Download the Template',
    ar: 'الخطوة 1 — حمّل القالب',
  },
  'school.b15.import.step1_desc_students': {
    en: 'Fill in the spreadsheet with your student data, then upload it below.',
    ar: 'أملأ الجدول ببيانات طلابك ثم ارفعه أدناه.',
  },
  'school.b15.import.step1_desc_teachers': {
    en: 'Fill in the spreadsheet with your teacher data, then upload it below.',
    ar: 'أملأ الجدول ببيانات معلّميك ثم ارفعه أدناه.',
  },
  'school.b15.import.btn_student_template': {
    en: 'Download Student Template',
    ar: 'حمّل قالب الطلاب',
  },
  'school.b15.import.btn_teacher_template': {
    en: 'Download Teacher Template',
    ar: 'حمّل قالب المعلمين',
  },
  'school.b15.import.required_cols': { en: 'Required columns', ar: 'الأعمدة المطلوبة' },
  'school.b15.import.step2_title': { en: 'Step 2 — Upload Your File', ar: 'الخطوة 2 — ارفع ملفك' },
  'school.b15.import.step2_desc': {
    en: 'Accepts .csv and .xlsx files.',
    ar: 'يقبل ملفات .csv و .xlsx.',
  },
  'school.b15.import.drop_heading': {
    en: 'Drag and drop your file here',
    ar: 'اسحب وأفلت ملفك هنا',
  },
  'school.b15.import.drop_active': { en: 'Drop file here', ar: 'أفلت الملف هنا' },
  'school.b15.import.drop_or': { en: 'or', ar: 'أو' },
  'school.b15.import.drop_browse': { en: 'click to browse', ar: 'انقر للتصفح' },
  'school.b15.import.drop_hint': { en: '.csv and .xlsx supported', ar: 'يدعم .csv و .xlsx' },
  'school.b15.import.preview_label': { en: 'Preview (first 5 rows)', ar: 'معاينة (أول 5 صفوف)' },
  'school.b15.import.creating': { en: 'Creating accounts...', ar: 'يُنشئ الحسابات...' },
  'school.b15.import.all_valid': {
    en: 'All {count} rows are valid and ready to import.',
    ar: 'كل الـ{count} صفوف صحيحة وجاهزة للاستيراد.',
  },
  'school.b15.import.preview_col_status': { en: 'Status', ar: 'الحالة' },
  'school.b15.import.cell_missing': { en: 'missing', ar: 'مفقود' },
  'school.b15.import.res_col_name': { en: 'Name', ar: 'الاسم' },
  'school.b15.import.res_col_email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'school.b15.import.res_col_role_class': { en: 'Role / Class', ar: 'الدور / الصف' },
  'school.b15.import.res_col_temp_pw': { en: 'Temp Password', ar: 'كلمة المرور المؤقتة' },
  'school.b15.import.rows_detected_one': { en: 'row detected', ar: 'صف تم اكتشافه' },
  'school.b15.import.rows_detected_many': { en: 'rows detected', ar: 'صفوف تم اكتشافها' },
  'school.b15.import.validation_error_bar': {
    en: '{count} row with errors',
    ar: '{count} صف به أخطاء',
  },
  'school.b15.import.validation_error_bar_plural': {
    en: '{count} rows with errors',
    ar: '{count} صفوف بها أخطاء',
  },
  'school.b15.import.rows_skipped': {
    en: '— rows with errors will be skipped during import.',
    ar: '— الصفوف التي بها أخطاء ستُتجاوز أثناء الاستيراد.',
  },
  'school.b15.import.more_rows': {
    en: '+ {count} more rows not shown',
    ar: '+ {count} صفوف إضافية غير معروضة',
  },
  'school.b15.import.btn_import_students': {
    en: 'Import {count} Student',
    ar: 'استيراد {count} طالب',
  },
  'school.b15.import.btn_import_students_plural': {
    en: 'Import {count} Students',
    ar: 'استيراد {count} طلاب',
  },
  'school.b15.import.btn_import_teachers': {
    en: 'Import {count} Teacher',
    ar: 'استيراد {count} معلم',
  },
  'school.b15.import.btn_import_teachers_plural': {
    en: 'Import {count} Teachers',
    ar: 'استيراد {count} معلمين',
  },
  'school.b15.import.skip_warning_one': {
    en: '{count} row will be skipped',
    ar: '{count} صف سيُتجاوز',
  },
  'school.b15.import.skip_warning_many': {
    en: '{count} rows will be skipped',
    ar: '{count} صفوف ستُتجاوز',
  },
  'school.b15.import.success_created_one': {
    en: '{count} account created successfully',
    ar: 'تم إنشاء {count} حساب بنجاح',
  },
  'school.b15.import.success_created_many': {
    en: '{count} accounts created successfully',
    ar: 'تم إنشاء {count} حسابات بنجاح',
  },
  'school.b15.import.error_rows_skipped_one': {
    en: '{count} row had errors and were skipped',
    ar: '{count} صف به أخطاء وتم تخطّيه',
  },
  'school.b15.import.error_rows_skipped_many': {
    en: '{count} rows had errors and were skipped',
    ar: '{count} صفوف بها أخطاء وتم تخطّيها',
  },
  'school.b15.import.errors_section_one': {
    en: '{count} row had errors',
    ar: '{count} صف به أخطاء',
  },
  'school.b15.import.errors_section_many': {
    en: '{count} rows had errors',
    ar: '{count} صفوف بها أخطاء',
  },
  'school.b15.import.download_login_title': {
    en: 'Download Login Details',
    ar: 'حمّل تفاصيل الدخول',
  },
  'school.b15.import.download_login_desc': {
    en: 'Share these with your {userType} so they can log in immediately.',
    ar: 'شارك هذه مع {userType} عشان يقدرون يدخلون فوراً.',
  },
  'school.b15.import.download_excel': {
    en: 'Download as Excel (.csv)',
    ar: 'حمّل كـ Excel (.csv)',
  },
  'school.b15.import.download_pdf': { en: 'Download as PDF', ar: 'حمّل كـ PDF' },
  'school.b15.import.download_btn': { en: 'Download Login Details', ar: 'حمّل تفاصيل الدخول' },
  'school.b15.import.created_accounts_title': { en: 'Created Accounts', ar: 'الحسابات المُنشأة' },
  'school.b15.import.created_accounts_desc': {
    en: 'Temporary passwords are shown below. They will be asked to change on first login.',
    ar: 'كلمات المرور المؤقتة معروضة أدناه. سيُطلب منهم تغييرها في أول دخول.',
  },
  'school.b15.import.showing_n_of': {
    en: 'Showing 10 of {count} accounts. Download the spreadsheet to see all.',
    ar: 'يعرض 10 من أصل {count} حساب. حمّل الجدول لترى الكل.',
  },
  'school.b15.import.important_title': { en: 'Important', ar: 'مهم' },
  'school.b15.import.important_pw_note': {
    en: 'Generated passwords are shown once. Download the login details spreadsheet now and distribute to {userType}.',
    ar: 'كلمات المرور المُنشأة تُعرض مرة واحدة. حمّل جدول تفاصيل الدخول الحين ووزّعه على {userType}.',
  },
  'school.b15.import.important_change_students': {
    en: 'Students will be prompted to change their password on first login.',
    ar: 'الطلاب سيُطلب منهم تغيير كلمة المرور في أول دخول.',
  },
  'school.b15.import.important_change_teachers': {
    en: 'Teachers will be prompted to change their password on first login.',
    ar: 'المعلمون سيُطلب منهم تغيير كلمة المرور في أول دخول.',
  },
  'school.b15.import.what_next_title': { en: 'What Happens Next?', ar: 'شنو يصير بعدين؟' },
  'school.b15.import.next_students_1': {
    en: 'Students can log in immediately using their email and temporary password.',
    ar: 'الطلاب يقدرون يدخلون فوراً باستخدام بريدهم وكلمة المرور المؤقتة.',
  },
  'school.b15.import.next_students_2': {
    en: 'They join the school automatically — no manual approval needed.',
    ar: 'ينضمون للمدرسة تلقائياً — ما يحتاج موافقة يدوية.',
  },
  'school.b15.import.next_students_3': {
    en: 'Students can access all assigned content and lessons right away.',
    ar: 'الطلاب يقدرون يوصلون لكل المحتوى والدروس المخصصة فوراً.',
  },
  'school.b15.import.next_students_4': {
    en: 'They will be prompted to set a new password on first login.',
    ar: 'سيُطلب منهم تعيين كلمة مرور جديدة في أول دخول.',
  },
  'school.b15.import.next_teachers_1': {
    en: 'Teachers can log in immediately using their email and temporary password.',
    ar: 'المعلمون يقدرون يدخلون فوراً باستخدام بريدهم وكلمة المرور المؤقتة.',
  },
  'school.b15.import.next_teachers_2': {
    en: 'They join the school automatically with their assigned role.',
    ar: 'ينضمون للمدرسة تلقائياً بدورهم المخصص.',
  },
  'school.b15.import.next_teachers_3': {
    en: 'Teachers will see their assigned classes and student rosters.',
    ar: 'المعلمون سيشوفون صفوفهم المخصصة وقوائم الطلاب.',
  },
  'school.b15.import.next_teachers_4': {
    en: 'They will be prompted to set a new password on first login.',
    ar: 'سيُطلب منهم تعيين كلمة مرور جديدة في أول دخول.',
  },

  // ─── /school/import/results/[jobId] ──────────────────────────────────────
  'school.b15.import_results.back': { en: 'Back to Import', ar: 'ارجع للاستيراد' },
  'school.b15.import_results.loading': {
    en: 'Loading import results...',
    ar: 'يحمّل نتائج الاستيراد...',
  },
  'school.b15.import_results.processing_title': { en: 'Processing...', ar: 'يعالج...' },
  'school.b15.import_results.processing_desc': {
    en: 'Your import is being processed. This page will update automatically.',
    ar: 'استيرادك يُعالَج الحين. الصفحة تتحدّث تلقائياً.',
  },
  'school.b15.import_results.error_title': {
    en: 'Could not load results',
    ar: 'ما قدر يحمّل النتائج',
  },
  'school.b15.import_results.error_fallback': {
    en: 'The import job could not be found. It may have expired.',
    ar: 'ما قدر يلاقي مهمة الاستيراد. ممكن تكون انتهت صلاحيتها.',
  },
  'school.b15.import_results.btn_back_error': { en: 'Go back to Import', ar: 'ارجع للاستيراد' },
  'school.b15.import_results.title_success': { en: 'Import Complete!', ar: 'اكتمل الاستيراد!' },
  'school.b15.import_results.title_failed': { en: 'Import Failed', ar: 'فشل الاستيراد' },
  'school.b15.import_results.completed_at': { en: 'Completed', ar: 'اكتمل' },
  'school.b15.import_results.stat_created': { en: 'Created', ar: 'أُنشئ' },
  'school.b15.import_results.stat_errors': { en: 'Errors', ar: 'أخطاء' },
  'school.b15.import_results.stat_duplicates': { en: 'Duplicates', ar: 'مكرّرات' },
  'school.b15.import_results.stat_import_type': { en: 'Import type', ar: 'نوع الاستيراد' },
  'school.b15.import_results.download_title': {
    en: 'Download Login Details',
    ar: 'حمّل تفاصيل الدخول',
  },
  'school.b15.import_results.download_desc': {
    en: "This file contains everyone's email and temporary password. Share it securely.",
    ar: 'يحتوي هذا الملف على بريد الجميع وكلمة المرور المؤقتة. شاركه بشكل آمن.',
  },
  'school.b15.import_results.download_warning': {
    en: 'Temporary passwords are shown once. Download now and store securely.',
    ar: 'تُعرض كلمات المرور المؤقتة مرة واحدة فقط. حمّلها الحين واحفظها بأمان.',
  },
  'school.b15.import_results.btn_download': {
    en: 'Download Login Details (Excel/CSV)',
    ar: 'حمّل تفاصيل الدخول (Excel/CSV)',
  },
  'school.b15.import_results.btn_preparing': {
    en: 'Preparing download...',
    ar: 'يجهّز التحميل...',
  },
  'school.b15.import_results.accounts_title': { en: 'Accounts', ar: 'الحسابات' },
  'school.b15.import_results.accounts_desc': {
    en: 'Full list of processed rows from this import.',
    ar: 'القائمة الكاملة للصفوف المعالجة من هذا الاستيراد.',
  },
  'school.b15.import_results.col_name': { en: 'Name', ar: 'الاسم' },
  'school.b15.import_results.col_email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'school.b15.import_results.col_role': { en: 'Role', ar: 'الدور' },
  'school.b15.import_results.col_year': { en: 'Year Group', ar: 'مجموعة السنة' },
  'school.b15.import_results.col_status': { en: 'Status', ar: 'الحالة' },
  'school.b15.import_results.status_created': { en: 'Created', ar: 'أُنشئ' },
  'school.b15.import_results.status_duplicate': { en: 'Already exists', ar: 'موجود مسبقاً' },
  'school.b15.import_results.status_error': { en: 'Error', ar: 'خطأ' },
  'school.b15.import_results.errors_title': { en: 'Error Details', ar: 'تفاصيل الأخطاء' },
  'school.b15.import_results.errors_desc': {
    en: 'These rows could not be imported. Fix the issues and re-import.',
    ar: 'هذه الصفوف ما قدر يستوردها. صلح المشاكل وأعد الاستيراد.',
  },
  'school.b15.import_results.btn_reimport': { en: 'Fix & Re-import', ar: 'صلّح وأعد الاستيراد' },
  'school.b15.import_results.row_prefix': { en: 'Row', ar: 'صف' },
  'school.b15.import_results.duplicates_title': {
    en: 'duplicate account skipped',
    ar: 'حساب مكرّر تم تخطّيه',
  },
  'school.b15.import_results.duplicates_title_plural': {
    en: 'duplicate accounts skipped',
    ar: 'حساب مكرّر تم تخطّيه',
  },
  'school.b15.import_results.duplicates_desc': {
    en: 'These email addresses already have accounts in the system and were not modified.',
    ar: 'هذه العناوين البريدية عندها حسابات بالنظام أصلاً وما تغيّرت.',
  },
  'school.b15.import_results.next_steps_title': { en: 'Next Steps', ar: 'الخطوات التالية' },
  'school.b15.import_results.next1': {
    en: 'Download the login details spreadsheet above and distribute it to your staff or students.',
    ar: 'حمّل جدول تفاصيل الدخول أعلاه ووزّعه على موظفيك أو طلابك.',
  },
  'school.b15.import_results.next2': {
    en: 'They log in at theenglishhub.app/auth/login using their email and temporary password.',
    ar: 'يدخلون من theenglishhub.app/auth/login باستخدام بريدهم وكلمة المرور المؤقتة.',
  },
  'school.b15.import_results.next3': {
    en: 'They will be prompted to change their password on first login.',
    ar: 'يُطلب منهم تغيير كلمة المرور في أول دخول.',
  },
  'school.b15.import_results.btn_classes': { en: 'Create Classes', ar: 'أنشئ الصفوف' },
  'school.b15.import_results.btn_classes_desc': {
    en: 'Set up classes to organise your students and assign teachers.',
    ar: 'أعدّ الصفوف لتنظيم طلابك وتخصيص المعلمين.',
  },
  'school.b15.import_results.import_type_students': { en: 'Students', ar: 'طلاب' },
  'school.b15.import_results.import_type_teachers': { en: 'Teachers', ar: 'معلمون' },
  'school.b15.import_results.import_type_mixed': { en: 'Students & Teachers', ar: 'طلاب ومعلمون' },

  // ─── /school/marking — WS-2 teacher decision / moderation block ───────────
  // Curated EN + Khaleeji (Gulf) AR. Teacher-facing operational register.
  // Exam tokens (AO, GCSE, "U") stay in Latin.
  'school_marking_review.section_title': { en: 'Teacher decision', ar: 'قرار المعلّم' },
  'school_marking_review.last_action': { en: 'Last action', ar: 'آخر إجراء' },
  'school_marking_review.final_grade_label': { en: 'Final grade', ar: 'الدرجة النهائية' },
  'school_marking_review.grade_placeholder': { en: 'Grade', ar: 'الدرجة' },
  'school_marking_review.training_toggle_label': {
    en: 'Suitable for training',
    ar: 'مناسبة للتدريب',
  },
  'school_marking_review.feedback_label': { en: 'Feedback to student', ar: 'ملاحظات للطالب' },
  'school_marking_review.feedback_placeholder': {
    en: 'Final feedback the student will see…',
    ar: 'الملاحظات النهائية اللي بيشوفها الطالب…',
  },
  'school_marking_review.adjustment_reason_label': {
    en: 'Adjustment reason',
    ar: 'سبب التعديل',
  },
  'school_marking_review.adjustment_reason_placeholder': {
    en: 'Why the AI mark was changed (internal)…',
    ar: 'ليش تغيّرت درجة الذكاء الاصطناعي (داخلي)…',
  },
  'school_marking_review.moderation_notes_label': {
    en: 'Moderation notes',
    ar: 'ملاحظات المراجعة',
  },
  'school_marking_review.moderation_notes_placeholder': {
    en: 'Internal moderation notes (not shown to student)…',
    ar: 'ملاحظات مراجعة داخلية (ما تظهر للطالب)…',
  },
  'school_marking_review.approve': { en: 'Approve', ar: 'اعتمد' },
  'school_marking_review.send_back': {
    en: 'Send back to student',
    ar: 'رجّعها للطالب',
  },
  'school_marking_review.reject': { en: 'Reject', ar: 'ارفض' },
  'school_marking_review.approving': { en: 'Approving…', ar: 'يعتمد…' },
  'school_marking_review.sending_back': { en: 'Sending back…', ar: 'يرجّعها…' },
  'school_marking_review.rejecting': { en: 'Rejecting…', ar: 'يرفض…' },
  'school_marking_review.draft_hint': {
    en: 'The AI mark is a draft. Approving records the final teacher mark and locks the submission.',
    ar: 'درجة الذكاء الاصطناعي مسودّة. الاعتماد يسجّل درجة المعلّم النهائية ويقفل التسليم.',
  },
  'school_marking_review.submit_failed': {
    en: 'Failed to submit decision',
    ar: 'ما قدرنا نرسل القرار',
  },
  'school_marking_review.submit_error': {
    en: 'Could not submit decision',
    ar: 'تعذّر إرسال القرار',
  },
  'school_marking_review.saved': { en: 'Decision saved', ar: 'تم حفظ القرار' },
  'school_marking_review.save_failed': {
    en: 'Could not save decision',
    ar: 'تعذّر حفظ القرار',
  },
}
