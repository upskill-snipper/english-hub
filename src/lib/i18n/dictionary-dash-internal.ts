/**
 * Dashboard-internal i18n entries (dashboard.classes.*, dashboard.grades.*,
 * dashboard.mock.*, dashboard.review.*, dashboard.tr.*).
 *
 * Covers the deep stat labels, table headers, tooltips, and form chrome
 * for the authenticated dashboard surface that previously had only the
 * top-of-page H1 wired. Kept separate from the master dictionary.ts to
 * avoid merge churn on a 13k-line file that lints/formatters keep touching.
 *
 * Khaleeji conventions (mirrored from dictionary.ts):
 *   أبغى, شوف, دوّر, الحين, ببلاش, لحظة, إحنا, سكّر, روح
 * BANNED (Levantine): شو, بحكي, كيفك, ليش
 *
 * Latin retention: brand names, exam codes (GCSE, IGCSE, AQA, OCR,
 * Edexcel, AO1–AO6, CAIE, WJEC, Eduqas, IAL, KS3, MCQ, PDF, AI) stay
 * in Latin script inside Arabic text per Gulf convention.
 *
 * GENDER POLICY: binary M/F. Male-second-person addressed by default
 * (matches the rest of the dictionary).
 */

import type { Dictionary } from './dictionary'

export const DASH_INTERNAL_DICTIONARY: Dictionary = {
  // ─── Dashboard / Classes (teacher) ─────────────────────────────────
  'dashboard.classes.h1': { en: 'My Classes', ar: 'صفوفي' },
  'dashboard.classes.intro': {
    en: 'Manage your classes and track student progress',
    ar: 'أدر صفوفك وتابع تقدّم طلابك',
  },
  'dashboard.classes.back': { en: '← Back to Dashboard', ar: '← رجوع للوحة' },
  'dashboard.classes.create': { en: '+ Create Class', ar: '+ سوِّ صف جديد' },
  'dashboard.classes.your_classes': { en: 'Your Classes', ar: 'صفوفك' },
  'dashboard.classes.students_count': { en: 'students', ar: 'طلاب' },
  'dashboard.classes.year_label': { en: 'Year', ar: 'سنة' },
  'dashboard.classes.avg': { en: 'Avg', ar: 'معدل' },
  'dashboard.classes.edit': { en: 'Edit Class', ar: 'عدّل الصف' },
  'dashboard.classes.add_student': { en: '+ Add Student', ar: '+ ضِف طالب' },
  'dashboard.classes.stat.students': { en: 'Students', ar: 'الطلاب' },
  'dashboard.classes.stat.class_avg': { en: 'Class Average', ar: 'معدّل الصف' },
  'dashboard.classes.stat.total_essays': { en: 'Total Essays', ar: 'مجموع المقالات' },
  'dashboard.classes.search': { en: 'Search students...', ar: 'دوّر على طالب...' },
  'dashboard.classes.col.student': { en: 'Student', ar: 'الطالب' },
  'dashboard.classes.col.avg_score': { en: 'Avg Score', ar: 'معدّل الدرجة' },
  'dashboard.classes.col.essays': { en: 'Essays', ar: 'مقالات' },
  'dashboard.classes.col.grade': { en: 'Grade', ar: 'الدرجة' },
  'dashboard.classes.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'dashboard.classes.empty.title': { en: 'Select a Class', ar: 'اختر صف' },
  'dashboard.classes.empty.body': {
    en: 'Choose a class from the sidebar to view student progress and manage your group.',
    ar: 'اختر صف من القائمة الجانبية عشان تشوف تقدّم الطلاب وتدير مجموعتك.',
  },
  'dashboard.classes.modal.title': { en: 'Create New Class', ar: 'سوِّ صف جديد' },
  'dashboard.classes.modal.name': { en: 'Class Name', ar: 'اسم الصف' },
  'dashboard.classes.modal.name_ph': {
    en: 'e.g. 10A English Literature',
    ar: 'مثلاً: 10A English Literature',
  },
  'dashboard.classes.modal.subject': { en: 'Subject', ar: 'المادة' },
  'dashboard.classes.modal.board': { en: 'Exam Board', ar: 'بورد الامتحان' },
  'dashboard.classes.modal.year': { en: 'Year Group', ar: 'السنة الدراسية' },
  'dashboard.classes.modal.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'dashboard.classes.modal.create': { en: 'Create Class', ar: 'سوِّ الصف' },

  // ─── Dashboard / Grades ────────────────────────────────────────────
  'dashboard.grades.h1': { en: 'Grade Dashboard', ar: 'لوحة الدرجات' },
  'dashboard.grades.intro_a': {
    en: 'Your predicted grades based on',
    ar: 'درجاتك المتوقعة بناءً على',
  },
  'dashboard.grades.assess_s': { en: 'assessment', ar: 'تقييم' },
  'dashboard.grades.assess_p': { en: 'assessments', ar: 'تقييمات' },
  'dashboard.grades.and': { en: 'and', ar: 'و' },
  'dashboard.grades.pract_s': { en: 'practice session', ar: 'جلسة تدريب' },
  'dashboard.grades.pract_p': { en: 'practice sessions', ar: 'جلسات تدريب' },
  'dashboard.grades.back': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'dashboard.grades.locked.h1': { en: 'Grade Dashboard Locked', ar: 'لوحة الدرجات مقفلة' },
  'dashboard.grades.locked.body': {
    en: 'Complete at least 5 practice tests or assessments to unlock your Grade Dashboard.',
    ar: 'خلّص ٥ تدريبات أو تقييمات على الأقل عشان تفتح لوحة الدرجات.',
  },
  'dashboard.grades.locked.progress': { en: 'Progress', ar: 'التقدم' },
  'dashboard.grades.locked.practice': { en: 'Practice Questions', ar: 'أسئلة تدريب' },
  'dashboard.grades.locked.browse': { en: 'Browse Courses', ar: 'شوف الكورسات' },
  'dashboard.grades.err.fallback': {
    en: 'Something went wrong loading your grades. Please try again.',
    ar: 'صار خطأ وإحنا نجيب درجاتك. حاول مرة ثانية.',
  },
  'dashboard.grades.retry': { en: 'Retry', ar: 'حاول مرة ثانية' },
  'dashboard.grades.overview': { en: 'Grade Overview', ar: 'نظرة عامة على الدرجة' },
  'dashboard.grades.working_at': { en: 'working at', ar: 'تشتغل على' },
  'dashboard.grades.predicted': { en: 'Predicted Grade', ar: 'الدرجة المتوقعة' },
  'dashboard.grades.target': { en: 'Target Grade', ar: 'الدرجة المستهدفة' },
  'dashboard.grades.potential': { en: 'Potential Grade', ar: 'الدرجة الممكنة' },
  'dashboard.grades.based_on': { en: 'Based on', ar: 'بناءً على' },
  'dashboard.grades.label.excellent': { en: 'Excellent', ar: 'ممتاز' },
  'dashboard.grades.label.good': { en: 'Good', ar: 'زين' },
  'dashboard.grades.label.needs_work': { en: 'Needs Work', ar: 'يبي شغل أكثر' },
  'dashboard.grades.progress_time': { en: 'Progress Over Time', ar: 'التقدم مع الوقت' },
  'dashboard.grades.no_data': { en: 'No assessment data yet.', ar: 'ما عندك تقييمات بعد.' },
  'dashboard.grades.sw': { en: 'Strengths & Weaknesses', ar: 'نقاط القوة والضعف' },
  'dashboard.grades.sw.empty': {
    en: 'Complete assessments in different courses to see your strengths and weaknesses.',
    ar: 'خلّص تقييمات في كورسات مختلفة عشان تشوف نقاط قوتك وضعفك.',
  },
  'dashboard.grades.sw.top_strengths': { en: 'Top Strengths', ar: 'أقوى نقاطك' },
  'dashboard.grades.sw.improvement': {
    en: 'Areas for Improvement',
    ar: 'الأشياء اللي تبي تحسّنها',
  },
  'dashboard.grades.sw.no_data': { en: 'No data yet.', ar: 'ما في بيانات بعد.' },
  'dashboard.grades.trajectory': { en: 'Grade Trajectory', ar: 'مسار درجاتك' },
  'dashboard.grades.trajectory.need_three': {
    en: 'Complete at least three assessments to see your trajectory.',
    ar: 'خلّص ثلاث تقييمات على الأقل عشان تشوف المسار.',
  },
  'dashboard.grades.trajectory.improving': {
    en: 'Your scores are improving!',
    ar: 'درجاتك بتحسّن!',
  },
  'dashboard.grades.trajectory.declining': {
    en: 'Your scores are declining.',
    ar: 'درجاتك بتنزل.',
  },
  'dashboard.grades.trajectory.stable': {
    en: 'Your scores are stable.',
    ar: 'درجاتك ثابتة.',
  },
  'dashboard.grades.trajectory.change_suffix': {
    en: 'change from your first three to last three assessments.',
    ar: 'تغيّر من أول ثلاث تقييمات لآخر ثلاث.',
  },
  'dashboard.grades.recs': { en: 'Recommended Next Steps', ar: 'الخطوات التالية المقترحة' },
  'dashboard.grades.recs.empty': {
    en: 'Keep practising to receive personalised recommendations!',
    ar: 'كمّل تدريب عشان تحصّل اقتراحات تخصّك!',
  },
  'dashboard.grades.recs.start': { en: 'Start This Course', ar: 'ابدأ هذا الكورس' },
  'dashboard.grades.tip.below50': {
    en: 'We recommend focusing on foundation courses to build a strong base before moving to GCSE-level content.',
    ar: 'ننصحك تركّز على الكورسات الأساسية عشان تبني قاعدة قوية قبل ما تنتقل لمستوى GCSE.',
  },
  'dashboard.grades.tip.mid': {
    en: 'Great progress! Focus on your weaker areas to push your predicted grade higher.',
    ar: 'تقدّم زين! ركّز على نقاط الضعف عشان ترفع درجتك المتوقعة.',
  },
  'dashboard.grades.tip.high': {
    en: 'Excellent work! Try extension and challenge content to aim for top grades.',
    ar: 'شغل ممتاز! جرّب محتوى صعب وامتد عشان توصل لأعلى الدرجات.',
  },

  // ─── Dashboard / Mock Exam ─────────────────────────────────────────
  'dashboard.mock.h1': { en: 'Mock Exam Mode', ar: 'وضع الامتحان التجريبي' },
  'dashboard.mock.intro': {
    en: 'Simulate real exam conditions with timed papers',
    ar: 'جرّب ظروف الامتحان الحقيقية بأوراق مؤقّتة',
  },
  'dashboard.mock.loading': { en: 'Loading...', ar: 'لحظة...' },
  'dashboard.mock.step1': { en: '1. Select Exam Board', ar: '١. اختر بورد الامتحان' },
  'dashboard.mock.paper_avail_s': { en: 'paper available', ar: 'ورقة متاحة' },
  'dashboard.mock.paper_avail_p': { en: 'papers available', ar: 'ورقة متاحة' },
  'dashboard.mock.step2': { en: '2. Select Paper', ar: '٢. اختر الورقة' },
  'dashboard.mock.paper_label': { en: 'Paper', ar: 'ورقة' },
  'dashboard.mock.marks': { en: 'marks', ar: 'علامة' },
  'dashboard.mock.total': { en: 'Total', ar: 'المجموع' },
  'dashboard.mock.step3': { en: '3. Ready to Begin', ar: '٣. جاهز تبدأ' },
  'dashboard.mock.time_allowed': { en: 'Time allowed', ar: 'الوقت المسموح' },
  'dashboard.mock.section_s': { en: 'section', ar: 'قسم' },
  'dashboard.mock.section_p': { en: 'sections', ar: 'أقسام' },
  'dashboard.mock.questions_total': { en: 'questions total', ar: 'سؤال إجمالاً' },
  'dashboard.mock.total_avail': { en: 'Total available', ar: 'المتاح كله' },
  'dashboard.mock.conditions_title': { en: 'Exam conditions:', ar: 'ظروف الامتحان:' },
  'dashboard.mock.conditions_body': {
    en: 'Once you start, a countdown timer will begin. The timer will warn you at 5 minutes and 1 minute remaining. You can pause for accessibility, but try to complete the exam in one sitting for the most realistic experience.',
    ar: 'أول ما تبدأ، يشتغل عدّاد. بينبهك عند بقاء ٥ دقائق ودقيقة وحدة. تقدر توقّف العدّاد لو محتاج، بس حاول تخلّص الامتحان بجلسة وحدة عشان التجربة أقرب للحقيقة.',
  },
  'dashboard.mock.back_dash': { en: 'Back to Dashboard', ar: 'رجوع للوحة' },
  'dashboard.mock.start': { en: 'Start Mock Exam', ar: 'ابدأ الامتحان التجريبي' },
  'dashboard.mock.prev_attempts': { en: 'Previous Attempts', ar: 'محاولاتك السابقة' },
  'dashboard.mock.min_used': { en: 'min used', ar: 'دقيقة استعملت' },
  'dashboard.mock.q_ans_s': { en: 'question answered', ar: 'سؤال انجاوب' },
  'dashboard.mock.q_ans_p': { en: 'questions answered', ar: 'سؤال انجاوب' },
  'dashboard.mock.section_word': { en: 'Section', ar: 'قسم' },
  'dashboard.mock.of': { en: 'of', ar: 'من' },
  'dashboard.mock.answered': { en: 'answered', ar: 'انجاوب' },
  'dashboard.mock.resume_timer': { en: 'Resume timer', ar: 'كمّل العدّاد' },
  'dashboard.mock.pause_timer': { en: 'Pause timer', ar: 'وقّف العدّاد' },
  'dashboard.mock.warn_5min': {
    en: '5 minutes remaining! Consider finishing your current answer.',
    ar: 'باقي ٥ دقائق! حاول تخلّص إجابتك الحالية.',
  },
  'dashboard.mock.warn_1min': {
    en: '1 minute remaining! Your exam will be submitted automatically.',
    ar: 'باقي دقيقة وحدة! بيتسلّم امتحانك تلقائياً.',
  },
  'dashboard.mock.warn_paused': {
    en: 'Timer paused. Click resume to continue.',
    ar: 'العدّاد موقَّف. اضغط كمّل عشان تتابع.',
  },
  'dashboard.mock.tab_prefix': { en: 'You have left this tab', ar: 'طلعت من الصفحة' },
  'dashboard.mock.tab_suffix_s': {
    en: 'time. In a real exam, this would be flagged.',
    ar: 'مرة. في امتحان حقيقي، هذا بيتسجّل.',
  },
  'dashboard.mock.tab_suffix_p': {
    en: 'times. In a real exam, this would be flagged.',
    ar: 'مرات. في امتحان حقيقي، هذا بيتسجّل.',
  },
  'dashboard.mock.sections_title': { en: 'Sections', ar: 'الأقسام' },
  'dashboard.mock.submit': { en: 'Submit Exam', ar: 'سلّم الامتحان' },
  'dashboard.mock.source_text': { en: 'Source Text', ar: 'النص الأصلي' },
  'dashboard.mock.mark_s': { en: 'mark', ar: 'علامة' },
  'dashboard.mock.mark_p': { en: 'marks', ar: 'علامة' },
  'dashboard.mock.q_ph_mcq': {
    en: 'Type your selected answers (e.g., A, C, F, H)...',
    ar: 'اكتب إجاباتك المختارة (مثلاً: A, C, F, H)...',
  },
  'dashboard.mock.q_ph_short': { en: 'Write your answer here...', ar: 'اكتب إجابتك هنا...' },
  'dashboard.mock.q_ph_long': { en: 'Write your response here...', ar: 'اكتب ردك هنا...' },
  'dashboard.mock.prev_section': { en: 'Previous Section', ar: 'القسم السابق' },
  'dashboard.mock.next_section': { en: 'Next Section', ar: 'القسم التالي' },
  'dashboard.mock.confirm.title': { en: 'Submit your exam?', ar: 'تسلّم امتحانك؟' },
  'dashboard.mock.confirm.body': {
    en: 'This action cannot be undone. Your answers will be submitted for review.',
    ar: 'هذي الخطوة ما تتراجع. إجاباتك بتنرسل للمراجعة.',
  },
  'dashboard.mock.confirm.answered': { en: 'Questions answered', ar: 'الأسئلة المنجاوبة' },
  'dashboard.mock.confirm.have': { en: 'You have', ar: 'عندك' },
  'dashboard.mock.confirm.unans_s': {
    en: 'unanswered question. Are you sure you want to submit?',
    ar: 'سؤال ما انجاوب. متأكد تبي تسلّم؟',
  },
  'dashboard.mock.confirm.unans_p': {
    en: 'unanswered questions. Are you sure you want to submit?',
    ar: 'أسئلة ما انجاوبت. متأكد تبي تسلّم؟',
  },
  'dashboard.mock.confirm.keep': { en: 'Keep Working', ar: 'كمّل شغل' },
  'dashboard.mock.results.h1': { en: 'Exam Complete', ar: 'الامتحان خلَّص' },
  'dashboard.mock.results.none': { en: 'No exam data found.', ar: 'ما لقينا بيانات الامتحان.' },
  'dashboard.mock.results.start_new': { en: 'Start New Exam', ar: 'ابدأ امتحان جديد' },
  'dashboard.mock.results.est_grade': { en: 'Estimated grade', ar: 'الدرجة التقريبية' },
  'dashboard.mock.results.min_alloc': { en: 'min allocated', ar: 'دقيقة مخصّصة' },
  'dashboard.mock.results.q_answered': { en: 'Questions answered', ar: 'الأسئلة المنجاوبة' },
  'dashboard.mock.results.completion': { en: 'Completion rate', ar: 'نسبة الإكمال' },
  'dashboard.mock.results.time_usage': { en: 'Time usage', ar: 'استخدام الوقت' },
  'dashboard.mock.results.spare_a': { en: 'You finished with', ar: 'خلّصت وعندك' },
  'dashboard.mock.results.spare_b': {
    en: 'minutes to spare. In the real exam, use spare time to review your answers.',
    ar: 'دقيقة زيادة. في الامتحان الحقيقي، استغل الوقت الزايد لمراجعة الإجابات.',
  },
  'dashboard.mock.results.all_used': {
    en: 'You used all the allocated time. Practise time management to leave a review buffer.',
    ar: 'استعملت كل الوقت المخصّص. تدرّب على إدارة الوقت عشان تخلّي وقت للمراجعة.',
  },
  'dashboard.mock.results.show_for': {
    en: 'Show model answers for:',
    ar: 'اعرض نموذج الإجابة لـ:',
  },
  'dashboard.mock.results.complete': { en: 'Complete', ar: 'مكتمل' },
  'dashboard.mock.results.not_ans': { en: 'Not answered', ar: 'ما انجاوب' },
  'dashboard.mock.results.your_answer': { en: 'Your Answer', ar: 'إجابتك' },
  'dashboard.mock.results.show_model': { en: 'Show', ar: 'اعرض' },
  'dashboard.mock.results.hide_model': { en: 'Hide', ar: 'إخفي' },
  'dashboard.mock.results.model_suffix': { en: 'model answer', ar: 'نموذج الإجابة' },
  'dashboard.mock.results.model_title': { en: 'Model Answer', ar: 'نموذج الإجابة' },
  'dashboard.mock.results.no_model': {
    en: 'Model answer not available for this grade band.',
    ar: 'نموذج الإجابة غير متاح لهذي الفئة من الدرجات.',
  },
  'dashboard.mock.results.marking_guide': { en: 'Marking Guide', ar: 'سلم العلامات' },
  'dashboard.mock.results.try_another': { en: 'Try Another Exam', ar: 'جرّب امتحان ثاني' },
  'dashboard.mock.results.ans': { en: 'answered', ar: 'انجاوب' },
  'dashboard.mock.results.marks_avail': { en: 'marks available', ar: 'علامة متاحة' },

  // ─── Dashboard / Review Status ─────────────────────────────────────
  'dashboard.review.h1': { en: 'Review Status', ar: 'حالة المراجعة' },
  'dashboard.review.back': { en: '← Back to Dashboard', ar: '← رجوع للوحة' },
  'dashboard.review.back_btn': { en: 'Back to Dashboard', ar: 'رجوع للوحة' },
  'dashboard.review.reference': { en: 'Reference', ar: 'المرجع' },
  'dashboard.review.progress': { en: 'Progress', ar: 'التقدم' },
  'dashboard.review.stage.submitted': { en: 'Submitted', ar: 'تم التسليم' },
  'dashboard.review.stage.under_review': { en: 'Under Review', ar: 'قيد المراجعة' },
  'dashboard.review.stage.completed': { en: 'Completed', ar: 'مخلَّص' },
  'dashboard.review.reviewer_response': { en: 'Reviewer Response', ar: 'رد المراجِع' },
  'dashboard.review.your_request': { en: 'Your Request', ar: 'طلبك' },
  'dashboard.review.essay': { en: 'Essay', ar: 'المقال' },
  'dashboard.review.reason': { en: 'Reason', ar: 'السبب' },
  'dashboard.review.details': { en: 'Details', ar: 'التفاصيل' },
  'dashboard.review.self_assess': { en: 'Your self-assessment', ar: 'تقييمك الذاتي' },
  'dashboard.review.submitted_at': { en: 'Submitted', ar: 'تاريخ التسليم' },
  'dashboard.review.timeline': { en: 'Timeline', ar: 'الجدول الزمني' },
  'dashboard.review.err.not_found': {
    en: 'Review request not found. Please check your reference number.',
    ar: 'ما لقينا طلب المراجعة. راجع رقم المرجع.',
  },
  'dashboard.review.err.load': {
    en: 'Unable to load review details. Please try again later.',
    ar: 'ما قدرنا نجيب تفاصيل المراجعة. حاول بعدين.',
  },
  'dashboard.review.err.conn': {
    en: 'Unable to connect. Please check your internet and try again.',
    ar: 'ما قدرنا نتصل. تأكد من الإنترنت وحاول مرة ثانية.',
  },
  'dashboard.review.err.fallback': { en: 'Review not found.', ar: 'ما لقينا المراجعة.' },

  // ─── Dashboard / Teacher Resources — shared ────────────────────────
  'dashboard.tr.back': { en: '← Back to Resources', ar: '← رجوع للموارد' },

  // ─── Teacher Resources / Creative Writing ──────────────────────────
  'dashboard.tr.cw.h1': { en: 'Creative Writing Masterclass', ar: 'دورة الكتابة الإبداعية' },
  'dashboard.tr.cw.intro': {
    en: 'Model texts, annotated examples, and structured tasks for teaching descriptive and narrative writing at GCSE level. Suitable for AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    ar: 'نصوص نموذجية، أمثلة مشروحة، ومهام منظّمة لتدريس الكتابة الوصفية والسردية على مستوى GCSE. مناسبة لـ AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
  },
  'dashboard.tr.cw.tech_ann': { en: 'Technique Annotations', ar: 'شرح التقنيات' },
  'dashboard.tr.cw.example': { en: 'Example', ar: 'مثال' },
  'dashboard.tr.cw.effect': { en: 'Effect', ar: 'الأثر' },
  'dashboard.tr.cw.toolkit': { en: 'Technique Toolkit for Students', ar: 'مجموعة تقنيات للطلاب' },
  'dashboard.tr.cw.use_when': { en: 'Use when:', ar: 'استعمله متى:' },
  'dashboard.tr.cw.tasks': { en: 'Structured Writing Tasks', ar: 'مهام كتابة منظّمة' },
  'dashboard.tr.cw.success': { en: 'Success Criteria', ar: 'معايير النجاح' },

  // ─── Teacher Resources / Differentiation ───────────────────────────
  'dashboard.tr.diff.h1': {
    en: 'Differentiation Guide for English',
    ar: 'دليل التمايز لمادة الإنجليزي',
  },
  'dashboard.tr.diff.intro': {
    en: 'Practical strategies for differentiating English lessons by ability, need, and learning style. Includes PP, SEND, and EAL guidance aligned to Ofsted expectations.',
    ar: 'استراتيجيات عملية لتمييز دروس الإنجليزي حسب القدرة والاحتياج وأسلوب التعلّم. تشمل إرشادات PP و SEND و EAL متماشية مع متطلبات Ofsted.',
  },
  'dashboard.tr.diff.by_ability': { en: 'Differentiation by Ability', ar: 'التمايز حسب القدرة' },
  'dashboard.tr.diff.lower': { en: 'Lower Ability', ar: 'قدرة أدنى' },
  'dashboard.tr.diff.middle': { en: 'Middle Ability', ar: 'قدرة متوسطة' },
  'dashboard.tr.diff.higher': { en: 'Higher Ability', ar: 'قدرة أعلى' },
  'dashboard.tr.diff.example_task': {
    en: 'Example: Differentiated Task',
    ar: 'مثال: مهمة متمايزة',
  },
  'dashboard.tr.diff.q_prefix': { en: 'Q:', ar: 'س:' },
  'dashboard.tr.diff.target': { en: 'Target:', ar: 'الهدف:' },
  'dashboard.tr.diff.strategies_h2': {
    en: 'PP, SEND & EAL Strategies',
    ar: 'استراتيجيات PP و SEND و EAL',
  },

  // ─── Teacher Resources / Lesson Plans ──────────────────────────────
  'dashboard.tr.lp.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'dashboard.tr.lp.objectives': { en: 'Learning Objectives', ar: 'أهداف التعلم' },
  'dashboard.tr.lp.starter': { en: 'Starter (5-10 mins)', ar: 'المقدمة (٥-١٠ دقائق)' },
  'dashboard.tr.lp.main': { en: 'Main Activities', ar: 'الأنشطة الرئيسية' },
  'dashboard.tr.lp.plenary': { en: 'Plenary (5-10 mins)', ar: 'الخاتمة (٥-١٠ دقائق)' },
  'dashboard.tr.lp.differentiation': { en: 'Differentiation', ar: 'التمايز' },
  'dashboard.tr.lp.resources': { en: 'Resources Needed', ar: 'الموارد المطلوبة' },
  'dashboard.tr.lp.assess_ops': { en: 'Assessment Opportunities', ar: 'فرص التقييم' },
  'dashboard.tr.lp.cross_curr': { en: 'Cross-Curricular Links', ar: 'روابط مع مواد ثانية' },

  // ─── Teacher Resources / Marking Guide ─────────────────────────────
  'dashboard.tr.ms.h1': {
    en: 'AQA English Literature Marking Guide',
    ar: 'سلم علامات AQA English Literature',
  },
  'dashboard.tr.ms.intro': {
    en: 'A teacher-friendly breakdown of the AQA GCSE English Literature 8702 marking guide with annotated student examples at each band level.',
    ar: 'شرح ميسّر للمعلم لسلم علامات AQA GCSE English Literature 8702 مع أمثلة طلابية مشروحة لكل مستوى.',
  },
  'dashboard.tr.ms.ao_glance': {
    en: 'Assessment Objectives at a Glance',
    ar: 'أهداف التقييم باختصار',
  },
  'dashboard.tr.ms.ao1_label': { en: 'AO1 (12 marks)', ar: 'AO1 (١٢ علامة)' },
  'dashboard.tr.ms.ao1_body': {
    en: 'Read, understand, respond. Use evidence and quotes.',
    ar: 'اقرأ، افهم، استجب. استعمل أدلة واقتباسات.',
  },
  'dashboard.tr.ms.ao2_label': { en: 'AO2 (12 marks)', ar: 'AO2 (١٢ علامة)' },
  'dashboard.tr.ms.ao2_body': {
    en: 'Analyse language, form, structure. Use terminology.',
    ar: 'حلّل اللغة والشكل والتركيب. استعمل المصطلحات.',
  },
  'dashboard.tr.ms.ao3_label': { en: 'AO3 (6 marks)', ar: 'AO3 (٦ علامات)' },
  'dashboard.tr.ms.ao3_body': {
    en: 'Context: social, historical, literary. Link to writer’s purpose.',
    ar: 'السياق: اجتماعي، تاريخي، أدبي. اربطه بغرض الكاتب.',
  },
  'dashboard.tr.ms.bands_h2': {
    en: 'Band Descriptors with Student Examples',
    ar: 'وصف المستويات مع أمثلة طلابية',
  },
  'dashboard.tr.ms.level': { en: 'Level', ar: 'مستوى' },
  'dashboard.tr.ms.marks_suffix': { en: 'marks', ar: 'علامة' },
  'dashboard.tr.ms.example_resp': {
    en: 'Example Student Response (An Inspector Calls)',
    ar: 'مثال إجابة طالب (An Inspector Calls)',
  },
  'dashboard.tr.ms.common_errs': {
    en: 'Common Student Errors & How to Fix Them',
    ar: 'أخطاء شائعة وكيف نصلحها',
  },
  'dashboard.tr.ms.fix': { en: 'Fix:', ar: 'الحل:' },
  'dashboard.tr.ms.tips': { en: 'Quick Marking Tips', ar: 'نصائح تصحيح سريعة' },
  'dashboard.tr.ms.copyright': {
    en: 'An Inspector Calls © The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.',
    ar: 'An Inspector Calls © The Estate of J.B. Priestley. اقتباسات قصيرة مأخوذة تحت بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لأغراض النقد والمراجعة.',
  },

  // ─── Teacher Resources / Worksheets ────────────────────────────────
  'dashboard.tr.ws.h1': {
    en: 'Quote Analysis Worksheet: An Inspector Calls',
    ar: 'ورقة تحليل اقتباسات: An Inspector Calls',
  },
  'dashboard.tr.ws.intro': {
    en: 'Pre-filled example worksheet with key quotes, techniques, and analysis. Use as a model answer or teacher reference. Print-friendly layout.',
    ar: 'ورقة عمل نموذجية معبّأة بالاقتباسات الرئيسية والتقنيات والتحليل. استعملها كنموذج إجابة أو مرجع للمعلم. مناسبة للطباعة.',
  },
  'dashboard.tr.ws.howto': { en: 'How to Use This Worksheet', ar: 'كيف تستعمل الورقة' },
  'dashboard.tr.ws.act': { en: 'Act', ar: 'الفصل' },
  'dashboard.tr.ws.technique': { en: 'Technique(s)', ar: 'التقنية' },
  'dashboard.tr.ws.effect': { en: 'Effect & Analysis', ar: 'الأثر والتحليل' },
  'dashboard.tr.ws.task': { en: 'Student Extension Task', ar: 'مهمة إضافية للطالب' },
  'dashboard.tr.ws.task_body': {
    en: 'Using the model analyses above, complete the same process for these additional quotes:',
    ar: 'استخدم نماذج التحليل اللي فوق وطبّق نفس الخطوات على هذي الاقتباسات الإضافية:',
  },
}
