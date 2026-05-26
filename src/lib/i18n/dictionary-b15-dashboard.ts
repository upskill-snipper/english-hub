/** dictionary-b15-dashboard.ts - Bucket B Phase B1.5. Curated EN + Khaleeji (Gulf) AR for /dashboard + /toolkit product UI. */
export const B15_DASHBOARD_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ── dashboard/analytics ────────────────────────────────────────────────────
  'dashboard.analytics.back': { en: 'Dashboard', ar: 'لوحة التحكم' },
  'dashboard.analytics.title': { en: 'Progress Analytics', ar: 'تحليلات التقدم' },
  'dashboard.analytics.subtitle': {
    en: 'Track your learning journey and exam preparation',
    ar: 'تابع رحلتك التعليمية واستعدادك للامتحان',
  },
  'dashboard.analytics.class_view': { en: 'Class View', ar: 'عرض الصف' },
  'dashboard.analytics.stat_study_time': { en: 'Study Time', ar: 'وقت الدراسة' },
  'dashboard.analytics.stat_study_this_week': { en: 'this week', ar: 'هذا الأسبوع' },
  'dashboard.analytics.stat_modules': { en: 'Modules', ar: 'الوحدات' },
  'dashboard.analytics.stat_completed': { en: 'completed', ar: 'مكتملة' },
  'dashboard.analytics.stat_working_at_grade': { en: 'Working At Grade', ar: 'الدرجة الحالية' },
  'dashboard.analytics.stat_avg_score': { en: 'based on avg score', ar: 'بناءً على متوسط الدرجة' },
  'dashboard.analytics.stat_streak': { en: 'Streak', ar: 'الاستمرارية' },
  'dashboard.analytics.stat_streak_day': { en: 'day', ar: 'يوم' },
  'dashboard.analytics.stat_streak_days': { en: 'days', ar: 'أيام' },
  'dashboard.analytics.stat_streak_in_a_row': { en: 'in a row', ar: 'متتالية' },
  'dashboard.analytics.stat_exam_ready': { en: 'Exam Ready', ar: 'جاهز للامتحان' },
  'dashboard.analytics.stat_readiness_score': { en: 'readiness score', ar: 'درجة الجاهزية' },
  'dashboard.analytics.tooltip_study_time': {
    en: 'Total time spent studying across modules, practice and assessments',
    ar: 'إجمالي وقت الدراسة في الوحدات والتدريب والتقييمات',
  },
  'dashboard.analytics.tooltip_modules': {
    en: 'Modules completed out of total enrolled',
    ar: 'الوحدات المكتملة من إجمالي المسجّلة',
  },
  'dashboard.analytics.tooltip_avg_score': {
    en: 'Average score from quizzes, assessments, and practice ratings',
    ar: 'متوسط الدرجة من الاختبارات والتقييمات والتدريبات',
  },
  'dashboard.analytics.tooltip_streak': {
    en: 'Consecutive days with at least one study activity',
    ar: 'الأيام المتتالية التي يوجد فيها نشاط دراسي واحد على الأقل',
  },
  'dashboard.analytics.tooltip_exam_ready': {
    en: 'Calculated from course completion (40%), practice scores (30%), and skill coverage (30%)',
    ar: 'يُحسب من إتمام الدورة (40%) ودرجات التدريب (30%) وتغطية المهارات (30%)',
  },
  'dashboard.analytics.course_progress_title': { en: 'Course Progress', ar: 'تقدم الدورة' },
  'dashboard.analytics.enrolled_courses': { en: 'enrolled course', ar: 'دورة مسجّلة' },
  'dashboard.analytics.enrolled_courses_plural': { en: 'enrolled courses', ar: 'دورات مسجّلة' },
  'dashboard.analytics.no_courses': {
    en: 'Enrol in courses to track progress',
    ar: 'سجّل في دورات لمتابعة تقدمك',
  },
  'dashboard.analytics.no_courses_empty': {
    en: 'No enrolled courses yet.',
    ar: 'ما فيه دورات مسجّلة بعد.',
  },
  'dashboard.analytics.browse_courses': { en: 'Browse Courses', ar: 'تصفّح الدورات' },
  'dashboard.analytics.last_activity': { en: 'Last activity:', ar: 'آخر نشاط:' },
  'dashboard.analytics.exam_readiness_title': { en: 'Exam Readiness', ar: 'جاهزية الامتحان' },
  'dashboard.analytics.exam_readiness_desc': {
    en: 'Overall preparation level',
    ar: 'مستوى الاستعداد الكلي',
  },
  'dashboard.analytics.exam_readiness_note': {
    en: 'Based on course completion, practice scores, and skill coverage.',
    ar: 'بناءً على إتمام الدورة ودرجات التدريب وتغطية المهارات.',
  },
  'dashboard.analytics.exam_readiness_low': {
    en: 'Keep studying and practising to improve your readiness score.',
    ar: 'واصل الدراسة والتدريب لتحسين درجة جاهزيتك.',
  },
  'dashboard.analytics.skills_title': {
    en: 'Performance by Skill Area',
    ar: 'الأداء حسب مجال المهارة',
  },
  'dashboard.analytics.skills_desc': {
    en: 'Based on practice questions and assessments',
    ar: 'بناءً على أسئلة التدريب والتقييمات',
  },
  'dashboard.analytics.weekly_activity_title': { en: 'Weekly Activity', ar: 'النشاط الأسبوعي' },
  'dashboard.analytics.weekly_activity_desc': {
    en: 'Study time and questions answered (last 7 days)',
    ar: 'وقت الدراسة والأسئلة المجاب عليها (آخر 7 أيام)',
  },
  'dashboard.analytics.recommendations_title': { en: 'Recommendations', ar: 'التوصيات' },
  'dashboard.analytics.recommendations_desc': {
    en: 'Areas to focus on for improvement',
    ar: 'المجالات التي تحتاج إلى تركيز وتحسين',
  },
  'dashboard.analytics.recommendations_empty': {
    en: 'Complete more activities to receive personalised recommendations.',
    ar: 'أكمل المزيد من الأنشطة لتحصل على توصيات مخصصة.',
  },
  'dashboard.analytics.recent_activity_title': { en: 'Recent Activity', ar: 'النشاط الأخير' },
  'dashboard.analytics.recent_activity_desc': {
    en: 'Your latest learning activities',
    ar: 'أحدث أنشطتك التعليمية',
  },
  'dashboard.analytics.recent_activity_empty': {
    en: 'No activity yet. Start a course or try a practice question.',
    ar: 'ما فيه نشاط بعد. ابدأ دورة أو جرّب سؤال تدريبي.',
  },
  'dashboard.analytics.rec_go': { en: 'Go', ar: 'انتقل' },

  // ── dashboard/essay-feedback ──────────────────────────────────────────────
  'dashboard.essay_feedback.back': { en: 'Dashboard', ar: 'لوحة التحكم' },
  'dashboard.essay_feedback.title': {
    en: 'AI Essay Feedback',
    ar: 'تقييم المقال بالذكاء الاصطناعي',
  },
  'dashboard.essay_feedback.subtitle': {
    en: "Get GCSE marker-level feedback on your writing, aligned to your exam board's marking guide.",
    ar: 'احصل على تقييم بمستوى مصحّح GCSE لكتابتك، مبني على دليل التصحيح الخاص بلجنة الامتحان.',
  },
  'dashboard.essay_feedback.remaining': { en: 'review', ar: 'مراجعة' },
  'dashboard.essay_feedback.remaining_plural': { en: 'reviews', ar: 'مراجعات' },
  'dashboard.essay_feedback.remaining_today': { en: 'remaining today', ar: 'متبقية اليوم' },
  'dashboard.essay_feedback.label_board': { en: 'Exam Board', ar: 'لجنة الامتحان' },
  'dashboard.essay_feedback.placeholder_board': { en: 'Select board', ar: 'اختر اللجنة' },
  'dashboard.essay_feedback.label_paper': { en: 'Paper', ar: 'الورقة' },
  'dashboard.essay_feedback.placeholder_paper': { en: 'Select paper', ar: 'اختر الورقة' },
  'dashboard.essay_feedback.placeholder_paper_first': {
    en: 'Select board first',
    ar: 'اختر اللجنة أولاً',
  },
  'dashboard.essay_feedback.label_question_type': { en: 'Question Type', ar: 'نوع السؤال' },
  'dashboard.essay_feedback.placeholder_question_type': { en: 'Select type', ar: 'اختر النوع' },
  'dashboard.essay_feedback.placeholder_question_type_first': {
    en: 'Select paper first',
    ar: 'اختر الورقة أولاً',
  },
  'dashboard.essay_feedback.label_question': { en: 'Question', ar: 'السؤال' },
  'dashboard.essay_feedback.placeholder_question': { en: 'Select a question', ar: 'اختر سؤالاً' },
  'dashboard.essay_feedback.placeholder_question_first': {
    en: 'Select question type first',
    ar: 'اختر نوع السؤال أولاً',
  },
  'dashboard.essay_feedback.placeholder_question_custom': {
    en: 'Type or paste the question you are answering...',
    ar: 'اكتب أو الصق السؤال الذي تجيب عنه...',
  },
  'dashboard.essay_feedback.question_hint': {
    en: 'Choose a question from your exam board, or select "I\'ll type my own question" to enter a custom one.',
    ar: 'اختر سؤالاً من لجنة امتحانك، أو اختر "سأكتب سؤالي الخاص" لإدخال سؤال مخصص.',
  },
  'dashboard.essay_feedback.label_essay': { en: 'Your Essay', ar: 'مقالك' },
  'dashboard.essay_feedback.placeholder_essay': {
    en: 'Paste or type your essay here...',
    ar: 'الصق مقالك هنا أو اكتبه...',
  },
  'dashboard.essay_feedback.word': { en: 'word', ar: 'كلمة' },
  'dashboard.essay_feedback.words': { en: 'words', ar: 'كلمات' },
  'dashboard.essay_feedback.word_min': { en: '(min 100)', ar: '(الحد الأدنى 100)' },
  'dashboard.essay_feedback.disclaimer_ai': {
    en: 'Feedback is AI-generated and should be used as a guide, not a definitive grade.',
    ar: 'التقييم مُنتَج بالذكاء الاصطناعي ويُستخدم كمرشد وليس درجة نهائية.',
  },
  'dashboard.essay_feedback.btn_analysing': { en: 'Analysing...', ar: 'جاري التحليل...' },
  'dashboard.essay_feedback.btn_get_feedback': { en: 'Get Feedback', ar: 'احصل على التقييم' },
  'dashboard.essay_feedback.result_disclaimer_title': {
    en: 'Important Disclaimer',
    ar: 'تنبيه مهم',
  },
  'dashboard.essay_feedback.result_disclaimer_body': {
    en: "This is an AI-generated estimate based on the marking guide criteria. It is not an official grade and should be used alongside your teacher's guidance. Actual exam grades may differ.",
    ar: 'هذا تقدير مُنتَج بالذكاء الاصطناعي بناءً على معايير دليل التصحيح. وهو ليس درجة رسمية ويُستخدم جنباً إلى جنب مع توجيهات معلمك. قد تختلف درجات الامتحان الفعلية.',
  },
  'dashboard.essay_feedback.marking_breakdown_title': {
    en: 'Marking Guide Breakdown',
    ar: 'تفصيل دليل التصحيح',
  },
  'dashboard.essay_feedback.marking_breakdown_desc': {
    en: 'How your essay scored against each Assessment Objective',
    ar: 'كيف سجّل مقالك مقابل كل هدف تقييمي',
  },
  'dashboard.essay_feedback.strengths_title': { en: 'Strengths', ar: 'نقاط القوة' },
  'dashboard.essay_feedback.strengths_desc': { en: 'What you did well', ar: 'ما الذي أتقنته' },
  'dashboard.essay_feedback.improvements_title': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
  },
  'dashboard.essay_feedback.improvements_desc': {
    en: 'How to push your grade higher',
    ar: 'كيف ترفع درجتك أعلى',
  },
  'dashboard.essay_feedback.detailed_feedback_title': {
    en: 'Detailed Feedback',
    ar: 'تقييم مفصّل',
  },
  'dashboard.essay_feedback.detailed_feedback_desc': {
    en: 'Paragraph-by-paragraph marker commentary',
    ar: 'تعليق المصحّح فقرة بفقرة',
  },
  'dashboard.essay_feedback.ai_approximate': {
    en: 'AI-generated feedback is approximate and should not replace teacher assessment.',
    ar: 'التقييم المُنتَج بالذكاء الاصطناعي تقريبي ولا يُغني عن تقييم المعلم.',
  },
  'dashboard.essay_feedback.btn_try_again': { en: 'Try Again', ar: 'حاول مجدداً' },

  // ── dashboard/parent/reports ───────────────────────────────────────────────
  'dashboard.parent_reports.title': { en: 'Weekly Reports', ar: 'التقارير الأسبوعية' },
  'dashboard.parent_reports.subtitle': {
    en: 'View detailed weekly progress reports for your child.',
    ar: 'اعرض تقارير التقدم الأسبوعية المفصّلة لطفلك.',
  },
  'dashboard.parent_reports.no_reports': {
    en: 'No reports available yet.',
    ar: 'ما فيه تقارير متاحة بعد.',
  },
  'dashboard.parent_reports.auto_generated': {
    en: 'Weekly reports are generated automatically every week.',
    ar: 'تُولَّد التقارير الأسبوعية تلقائياً كل أسبوع.',
  },
  'dashboard.parent_reports.week_of': { en: 'Week of', ar: 'أسبوع' },
  'dashboard.parent_reports.essays_completed': { en: 'Essays Completed', ar: 'المقالات المكتملة' },
  'dashboard.parent_reports.time_on_platform': { en: 'Time on Platform', ar: 'الوقت على المنصة' },
  'dashboard.parent_reports.average_score': { en: 'Average Score', ar: 'متوسط الدرجة' },
  'dashboard.parent_reports.grades_title': {
    en: 'Working At & Predicted Grades',
    ar: 'الدرجة الحالية والمتوقعة',
  },
  'dashboard.parent_reports.working_at': { en: 'Working At:', ar: 'الدرجة الحالية:' },
  'dashboard.parent_reports.predicted': { en: 'Predicted:', ar: 'المتوقعة:' },
  'dashboard.parent_reports.top_strengths': { en: 'Top Strengths', ar: 'أبرز نقاط القوة' },
  'dashboard.parent_reports.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
  },
  'dashboard.parent_reports.recommended_steps': {
    en: 'Recommended Next Steps',
    ar: 'الخطوات التالية الموصى بها',
  },
  'dashboard.parent_reports.download_pdf': { en: 'Download as PDF', ar: 'تحميل كـ PDF' },
  'dashboard.parent_reports.generating': { en: 'Generating...', ar: 'جاري الإنشاء...' },

  // ── dashboard/privacy ─────────────────────────────────────────────────────
  'dashboard.privacy.title': { en: 'Privacy & Data', ar: 'الخصوصية والبيانات' },
  'dashboard.privacy.subtitle': {
    en: "You're in control. Manage how your data is used, download it, or delete it anytime.",
    ar: 'الأمر بيدك. تحكّم في طريقة استخدام بياناتك، وحمّلها أو احذفها في أي وقت.',
  },
  'dashboard.privacy.loading': {
    en: 'Loading your privacy settings...',
    ar: 'جاري تحميل إعدادات الخصوصية...',
  },
  'dashboard.privacy.settings_title': { en: 'Privacy Settings', ar: 'إعدادات الخصوصية' },
  'dashboard.privacy.settings_desc': {
    en: 'Everything is off by default to keep your data private. Turn things on only if you want to.',
    ar: 'كل شيء مُوقَف افتراضياً للحفاظ على خصوصية بياناتك. فعّل ما تريده فقط.',
  },
  'dashboard.privacy.save_changes': { en: 'Save Changes', ar: 'حفظ التغييرات' },
  'dashboard.privacy.saving': { en: 'Saving...', ar: 'جاري الحفظ...' },
  'dashboard.privacy.profile_visibility': { en: 'Profile Visibility', ar: 'ظهور الملف الشخصي' },
  'dashboard.privacy.profile_visibility_desc': {
    en: 'Control who can see your profile information',
    ar: 'تحكم في من يستطيع رؤية بيانات ملفك الشخصي',
  },
  'dashboard.privacy.data_title': { en: 'Your Data at a Glance', ar: 'بياناتك في لمحة' },
  'dashboard.privacy.data_desc': {
    en: "Here's a summary of what we hold about you. No surprises.",
    ar: 'ملخّص لما نحتفظ به عنك. لا مفاجآت.',
  },
  'dashboard.privacy.data_no_summary': {
    en: 'Unable to load your data summary.',
    ar: 'تعذّر تحميل ملخّص بياناتك.',
  },
  'dashboard.privacy.download_title': { en: 'Download Your Data', ar: 'تحميل بياناتك' },
  'dashboard.privacy.download_desc': {
    en: "You have the right to take your data with you. Request a copy and we'll email it to you.",
    ar: 'من حقك أخذ بياناتك معك. اطلب نسخة وسنرسلها إليك عبر البريد الإلكتروني.',
  },
  'dashboard.privacy.download_included': {
    en: "What's included in your export",
    ar: 'ما يتضمّنه التصدير',
  },
  'dashboard.privacy.download_format': { en: 'Choose format', ar: 'اختر الصيغة' },
  'dashboard.privacy.download_delivery': {
    en: 'Estimated delivery: within 48 hours',
    ar: 'الوقت المتوقع للتسليم: خلال 48 ساعة',
  },
  'dashboard.privacy.download_delivery_desc': {
    en: "We'll email a secure download link to your registered email address.",
    ar: 'سنرسل رابط تحميل آمن إلى بريدك الإلكتروني المسجّل.',
  },
  'dashboard.privacy.btn_export_requested': { en: 'Export Requested', ar: 'تم طلب التصدير' },
  'dashboard.privacy.btn_requesting': { en: 'Requesting...', ar: 'جاري الطلب...' },
  'dashboard.privacy.delete_title': { en: 'Delete Your Data', ar: 'حذف بياناتك' },
  'dashboard.privacy.delete_desc': {
    en: "You can delete individual essays or your entire account. Take your time - there's no pressure.",
    ar: 'يمكنك حذف مقالات فردية أو حسابك بالكامل. خذ وقتك - لا ضغط.',
  },
  'dashboard.privacy.delete_essays_title': {
    en: 'Delete Individual Essays',
    ar: 'حذف مقالات فردية',
  },
  'dashboard.privacy.delete_no_essays': { en: 'No essays to show.', ar: 'ما فيه مقالات لعرضها.' },
  'dashboard.privacy.delete_account_title': { en: 'Delete Your Account', ar: 'حذف حسابك' },
  'dashboard.privacy.delete_account_desc': {
    en: "This will schedule your account for deletion. You'll have a 30-day grace period to change your mind. After that, all your data will be permanently erased.",
    ar: 'سيُجدول حذف حسابك. سيكون لديك 30 يوماً لتغيير رأيك. بعدها تُحذف جميع بياناتك نهائياً.',
  },
  'dashboard.privacy.delete_deleting': { en: 'Deleting...', ar: 'جاري الحذف...' },
  'dashboard.privacy.delete_processing': { en: 'Processing...', ar: 'جاري المعالجة...' },
  'dashboard.privacy.rights_title': { en: 'Your Data Rights', ar: 'حقوقك في البيانات' },
  'dashboard.privacy.rights_desc': {
    en: "Under UK GDPR and the ICO Children's Code, you have powerful rights over your data. Here's what they mean in plain English.",
    ar: 'بموجب اللائحة البريطانية GDPR وقانون ICO للأطفال، لديك حقوق قوية على بياناتك. إليك ما تعنيه بلغة بسيطة.',
  },
  'dashboard.privacy.rights_need_help': { en: 'Need help?', ar: 'تحتاج مساعدة؟' },

  // ── dashboard/data-requests ────────────────────────────────────────────────
  'dashboard.data_requests.back': { en: '← Back to Dashboard', ar: '← رجوع للوحة التحكم' },
  'dashboard.data_requests.title': { en: 'Your Data Rights', ar: 'حقوقك في البيانات' },
  'dashboard.data_requests.subtitle': {
    en: 'Under UK GDPR, you have rights over your personal data. Use the options below to exercise these rights. All requests are processed within one calendar month.',
    ar: 'بموجب اللائحة البريطانية GDPR، لديك حقوق على بياناتك الشخصية. استخدم الخيارات أدناه لممارسة هذه الحقوق. تُعالَج جميع الطلبات خلال شهر تقويمي واحد.',
  },
  'dashboard.data_requests.rights_notice_title': {
    en: 'Your data protection rights',
    ar: 'حقوق حماية بياناتك',
  },
  'dashboard.data_requests.card_access_title': { en: 'Request My Data', ar: 'طلب بياناتي' },
  'dashboard.data_requests.card_access_desc': {
    en: 'Article 15 - Get a full copy of all personal data we hold about you.',
    ar: 'المادة 15 - احصل على نسخة كاملة من جميع البيانات الشخصية التي نحتفظ بها عنك.',
  },
  'dashboard.data_requests.btn_access': { en: 'Request My Data', ar: 'طلب بياناتي' },
  'dashboard.data_requests.btn_access_submitting': { en: 'Submitting...', ar: 'جاري الإرسال...' },
  'dashboard.data_requests.card_download_title': { en: 'Download My Data', ar: 'تحميل بياناتي' },
  'dashboard.data_requests.card_download_desc': {
    en: 'Article 20 - Download your data in a machine-readable format (JSON).',
    ar: 'المادة 20 - حمّل بياناتك بصيغة قابلة للقراءة آلياً (JSON).',
  },
  'dashboard.data_requests.btn_download': { en: 'Download My Data', ar: 'تحميل بياناتي' },
  'dashboard.data_requests.btn_download_preparing': { en: 'Preparing...', ar: 'جاري التحضير...' },
  'dashboard.data_requests.card_correct_title': { en: 'Correct My Data', ar: 'تصحيح بياناتي' },
  'dashboard.data_requests.card_correct_desc': {
    en: 'Article 16 - Update or correct any inaccurate personal information.',
    ar: 'المادة 16 - حدّث أو صحّح أي معلومات شخصية غير دقيقة.',
  },
  'dashboard.data_requests.btn_edit_profile': { en: 'Edit My Profile', ar: 'تعديل ملفي الشخصي' },
  'dashboard.data_requests.card_delete_title': { en: 'Delete My Data', ar: 'حذف بياناتي' },
  'dashboard.data_requests.card_delete_desc': {
    en: 'Article 17 - Request erasure of your personal data. This action cannot be undone.',
    ar: 'المادة 17 - اطلب مسح بياناتك الشخصية. هذا الإجراء لا يمكن التراجع عنه.',
  },
  'dashboard.data_requests.btn_delete': { en: 'Delete My Data', ar: 'حذف بياناتي' },
  'dashboard.data_requests.confirm_delete_title': { en: 'Are you sure?', ar: 'هل أنت متأكد؟' },
  'dashboard.data_requests.confirm_delete_desc': {
    en: 'This will anonymise your account and remove your essays, feedback, and personal data. Your subscription will be cancelled. This cannot be undone.',
    ar: 'سيؤدي هذا إلى إخفاء هوية حسابك وإزالة مقالاتك وتقييماتك وبياناتك الشخصية. سيُلغى اشتراكك. لا يمكن التراجع عن هذا.',
  },
  'dashboard.data_requests.confirm_type_delete': {
    en: 'Type DELETE to confirm:',
    ar: 'اكتب DELETE للتأكيد:',
  },
  'dashboard.data_requests.btn_cancel': { en: 'Cancel', ar: 'إلغاء' },
  'dashboard.data_requests.btn_confirm_deletion': { en: 'Confirm Deletion', ar: 'تأكيد الحذف' },
  'dashboard.data_requests.btn_erasure_submitting': { en: 'Submitting...', ar: 'جاري الإرسال...' },
  'dashboard.data_requests.request_submitted_title': {
    en: 'Request Submitted',
    ar: 'تم تقديم الطلب',
  },
  'dashboard.data_requests.your_reference': { en: 'Your reference number', ar: 'رقم مرجعك' },
  'dashboard.data_requests.estimated_completion': {
    en: 'Estimated completion:',
    ar: 'الإتمام المتوقع:',
  },
  'dashboard.data_requests.gdpr_respond': {
    en: 'Under UK GDPR, we must respond within one calendar month of your request.',
    ar: 'بموجب اللائحة البريطانية GDPR، يجب أن نستجيب خلال شهر تقويمي واحد من طلبك.',
  },
  'dashboard.data_requests.btn_back': { en: 'Back to Data Requests', ar: 'رجوع لطلبات البيانات' },
  'dashboard.data_requests.btn_dashboard': { en: 'Dashboard', ar: 'لوحة التحكم' },
  'dashboard.data_requests.history_title': { en: 'Request History', ar: 'سجل الطلبات' },
  'dashboard.data_requests.history_desc': {
    en: 'Track the status of your data requests below.',
    ar: 'تابع حالة طلبات بياناتك أدناه.',
  },
  'dashboard.data_requests.history_loading': {
    en: 'Loading your requests...',
    ar: 'جاري تحميل طلباتك...',
  },
  'dashboard.data_requests.history_empty': {
    en: 'You have not made any data requests yet.',
    ar: 'لم تُقدّم أي طلبات بيانات بعد.',
  },
  'dashboard.data_requests.overdue': { en: 'Overdue', ar: 'متأخر' },
  'dashboard.data_requests.deadline': { en: 'Deadline:', ar: 'الموعد النهائي:' },
  'dashboard.data_requests.processing_title': { en: 'Processing times', ar: 'أوقات المعالجة' },
  'dashboard.data_requests.processing_desc': {
    en: 'Under UK GDPR, we are required to respond to your request within one calendar month. In exceptional cases (complex or numerous requests), this may be extended by a further two months, but we will inform you within the first month if this is necessary.',
    ar: 'بموجب اللائحة البريطانية GDPR، يجب أن نستجيب لطلبك خلال شهر تقويمي واحد. في حالات استثنائية (طلبات معقدة أو كثيرة)، قد يُمدَّد بشهرين إضافيين، لكننا سنُعلمك خلال الشهر الأول إذا كان ذلك ضرورياً.',
  },
  'dashboard.data_requests.ico_complaint': {
    en: 'If you are not satisfied with our response, you have the right to lodge a complaint with the',
    ar: 'إذا لم تكن راضياً عن ردّنا، يحق لك تقديم شكوى إلى',
  },
  'dashboard.data_requests.ico_name': {
    en: "Information Commissioner's Office (ICO)",
    ar: 'مكتب مفوّض المعلومات (ICO)',
  },

  // ── dashboard/progress (parent/progress page) ─────────────────────────────
  'dashboard.parent_progress.back': { en: '← Back to Dashboard', ar: '← رجوع للوحة التحكم' },
  'dashboard.parent_progress.title': { en: 'Student Progress', ar: 'تقدم الطالب' },
  'dashboard.parent_progress.subtitle': {
    en: "Track your child's learning journey and achievements",
    ar: 'تابع رحلة طفلك التعليمية وإنجازاته',
  },
  'dashboard.parent_progress.working_at': { en: 'Working At Grade', ar: 'الدرجة الحالية' },
  'dashboard.parent_progress.predicted_grade': { en: 'Predicted Grade', ar: 'الدرجة المتوقعة' },
  'dashboard.parent_progress.target_grade': { en: 'Target Grade', ar: 'الدرجة المستهدفة' },
  'dashboard.parent_progress.essays_written': { en: 'Essays Written', ar: 'المقالات المكتوبة' },
  'dashboard.parent_progress.activities_this_week': {
    en: 'Activities This Week',
    ar: 'الأنشطة هذا الأسبوع',
  },
  'dashboard.parent_progress.weekly_activity': { en: 'Weekly Activity', ar: 'النشاط الأسبوعي' },
  'dashboard.parent_progress.recent_work': { en: 'Recent Work', ar: 'الأعمال الأخيرة' },
  'dashboard.parent_progress.student_info': { en: 'Student Info', ar: 'معلومات الطالب' },
  'dashboard.parent_progress.school': { en: 'School', ar: 'المدرسة' },
  'dashboard.parent_progress.year_group': { en: 'Year Group', ar: 'السنة الدراسية' },
  'dashboard.parent_progress.exam_board': { en: 'Exam Board', ar: 'لجنة الامتحان' },
  'dashboard.parent_progress.strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'dashboard.parent_progress.areas_to_improve': { en: 'Areas to Improve', ar: 'مجالات التحسين' },
  'dashboard.parent_progress.actions': { en: 'Actions', ar: 'الإجراءات' },
  'dashboard.parent_progress.manage_reports': {
    en: 'Manage Weekly Reports',
    ar: 'إدارة التقارير الأسبوعية',
  },
  'dashboard.parent_progress.contact_teacher': { en: 'Contact Teacher', ar: 'التواصل مع المعلم' },

  // ── dashboard/parent/settings ──────────────────────────────────────────────
  'dashboard.parent_settings.title': { en: 'Parent Settings', ar: 'إعدادات ولي الأمر' },
  'dashboard.parent_settings.subtitle': {
    en: 'Manage your notifications, report preferences, and linked students.',
    ar: 'أدِر إشعاراتك وتفضيلات التقارير والطلاب المرتبطين.',
  },
  'dashboard.parent_settings.free_access_title': {
    en: 'Free Parent Access',
    ar: 'وصول ولي الأمر المجاني',
  },
  'dashboard.parent_settings.free_access_desc': {
    en: "Your parent dashboard is completely free and comes included with your child's paid subscription. You can monitor progress, receive weekly reports, and set target grades at no additional cost.",
    ar: 'لوحة تحكم ولي الأمر مجانية تماماً وتأتي مع اشتراك طفلك المدفوع. يمكنك متابعة التقدم وتلقي التقارير الأسبوعية وتحديد الدرجات المستهدفة بدون تكلفة إضافية.',
  },
  'dashboard.parent_settings.notifications_title': {
    en: 'Email Notifications',
    ar: 'إشعارات البريد الإلكتروني',
  },
  'dashboard.parent_settings.notifications_desc': {
    en: 'Choose which email notifications you would like to receive.',
    ar: 'اختر إشعارات البريد الإلكتروني التي تريد استلامها.',
  },
  'dashboard.parent_settings.notif_weekly_label': {
    en: 'Weekly progress report',
    ar: 'تقرير التقدم الأسبوعي',
  },
  'dashboard.parent_settings.notif_weekly_desc': {
    en: "Receive a summary of your child's weekly activity, scores, and recommendations.",
    ar: 'استلم ملخصاً لنشاط طفلك الأسبوعي ودرجاته وتوصياته.',
  },
  'dashboard.parent_settings.notif_low_score_label': {
    en: 'Low score alerts',
    ar: 'تنبيهات الدرجات المنخفضة',
  },
  'dashboard.parent_settings.notif_low_score_desc': {
    en: 'Get notified when your child scores below 50% on an essay.',
    ar: 'احصل على إشعار عندما تكون درجة طفلك في مقال أقل من 50%.',
  },
  'dashboard.parent_settings.notif_inactivity_label': {
    en: 'Inactivity alerts',
    ar: 'تنبيهات الخمول',
  },
  'dashboard.parent_settings.notif_inactivity_desc': {
    en: "Get notified if your child hasn't used the platform for 5+ days.",
    ar: 'احصل على إشعار إذا لم يستخدم طفلك المنصة لأكثر من 5 أيام.',
  },
  'dashboard.parent_settings.notif_milestone_label': {
    en: 'Milestone celebrations',
    ar: 'الاحتفالات بالإنجازات',
  },
  'dashboard.parent_settings.notif_milestone_desc': {
    en: 'Receive emails when your child reaches score milestones or completes achievements.',
    ar: 'استلم رسائل عندما يصل طفلك لمعالم الدرجات أو يُكمل الإنجازات.',
  },
  'dashboard.parent_settings.btn_save_notifications': {
    en: 'Save notification preferences',
    ar: 'حفظ تفضيلات الإشعارات',
  },
  'dashboard.parent_settings.btn_saving': { en: 'Saving...', ar: 'جاري الحفظ...' },
  'dashboard.parent_settings.schedule_title': {
    en: 'Weekly Report Schedule',
    ar: 'جدول التقرير الأسبوعي',
  },
  'dashboard.parent_settings.schedule_desc': {
    en: "Choose when you'd like to receive your weekly progress report.",
    ar: 'اختر متى تريد استلام تقرير تقدمك الأسبوعي.',
  },
  'dashboard.parent_settings.day_of_week': { en: 'Day of week', ar: 'يوم الأسبوع' },
  'dashboard.parent_settings.time': { en: 'Time', ar: 'الوقت' },
  'dashboard.parent_settings.btn_save_schedule': {
    en: 'Save report schedule',
    ar: 'حفظ جدول التقرير',
  },
  'dashboard.parent_settings.students_title': { en: 'Linked Students', ar: 'الطلاب المرتبطون' },
  'dashboard.parent_settings.students_desc': {
    en: 'Manage the students linked to your parent account.',
    ar: 'أدِر الطلاب المرتبطين بحساب ولي الأمر.',
  },
  'dashboard.parent_settings.btn_add_student': { en: 'Add Student', ar: 'إضافة طالب' },
  'dashboard.parent_settings.link_new_student': { en: 'Link a new student', ar: 'ربط طالب جديد' },
  'dashboard.parent_settings.link_new_student_desc': {
    en: "Enter the email address associated with the student's account. They must have an active paid subscription.",
    ar: 'أدخل عنوان البريد الإلكتروني المرتبط بحساب الطالب. يجب أن يكون لديهم اشتراك مدفوع نشط.',
  },
  'dashboard.parent_settings.btn_send_invitation': { en: 'Send invitation', ar: 'إرسال الدعوة' },
  'dashboard.parent_settings.btn_sending': { en: 'Sending...', ar: 'جاري الإرسال...' },
  'dashboard.parent_settings.btn_cancel': { en: 'Cancel', ar: 'إلغاء' },
  'dashboard.parent_settings.target_grades': { en: 'Target Grades', ar: 'الدرجات المستهدفة' },
  'dashboard.parent_settings.btn_edit_targets': { en: 'Edit targets', ar: 'تعديل الأهداف' },
  'dashboard.parent_settings.btn_save': { en: 'Save', ar: 'حفظ' },
  'dashboard.parent_settings.no_students': {
    en: 'No students linked yet.',
    ar: 'لا يوجد طلاب مرتبطون بعد.',
  },
  'dashboard.parent_settings.no_students_hint': {
    en: 'Click "Add Student" to link your child\'s account.',
    ar: 'اضغط "إضافة طالب" لربط حساب طفلك.',
  },
  'dashboard.parent_settings.unlink_title': { en: 'Unlink student', ar: 'إلغاء ربط الطالب' },

  // ── dashboard/subscription/cancel ─────────────────────────────────────────
  'dashboard.cancel.step1_title': { en: 'Cancel Your Subscription', ar: 'إلغاء اشتراكك' },
  'dashboard.cancel.step1_desc': {
    en: 'Here is what will change if you cancel:',
    ar: 'إليك ما سيتغير إذا ألغيت الاشتراك:',
  },
  'dashboard.cancel.feature1': {
    en: 'AI-powered essay feedback on unlimited submissions',
    ar: 'تقييم المقالات بالذكاء الاصطناعي بعدد غير محدود من التسليمات',
  },
  'dashboard.cancel.feature2': {
    en: 'Detailed grammar, structure, and vocabulary analysis',
    ar: 'تحليل مفصّل للقواعد والبنية والمفردات',
  },
  'dashboard.cancel.feature3': {
    en: 'Progress tracking and revision insights',
    ar: 'تتبع التقدم وإحصاءات المراجعة',
  },
  'dashboard.cancel.feature4': {
    en: 'Human review request access',
    ar: 'إمكانية طلب مراجعة بشرية',
  },
  'dashboard.cancel.feature5': {
    en: 'Exam preparation resources and tools',
    ar: 'موارد وأدوات التحضير للامتحان',
  },
  'dashboard.cancel.access_note': {
    en: 'Your access will continue until the end of your current billing period. Your essays and data will be retained in accordance with our data retention policy.',
    ar: 'سيستمر وصولك حتى نهاية دورة الفوترة الحالية. ستُحتفظ بمقالاتك وبياناتك وفق سياسة الاحتفاظ بالبيانات.',
  },
  'dashboard.cancel.btn_keep': { en: 'Keep Subscription', ar: 'الإبقاء على الاشتراك' },
  'dashboard.cancel.btn_continue': { en: 'Continue Cancellation', ar: 'متابعة الإلغاء' },
  'dashboard.cancel.step2_title': {
    en: 'Quick Feedback (Optional)',
    ar: 'ملاحظات سريعة (اختياري)',
  },
  'dashboard.cancel.step2_desc': {
    en: 'This step is entirely optional. Your feedback helps us improve.',
    ar: 'هذه الخطوة اختيارية تماماً. ملاحظاتك تساعدنا على التحسين.',
  },
  'dashboard.cancel.feedback_label': {
    en: "Anything else you'd like to share? (Optional)",
    ar: 'هل هناك ما تريد إضافته؟ (اختياري)',
  },
  'dashboard.cancel.feedback_placeholder': { en: 'Your thoughts...', ar: 'أفكارك...' },
  'dashboard.cancel.btn_back': { en: 'Back', ar: 'رجوع' },
  'dashboard.cancel.btn_skip': { en: 'Skip & Continue', ar: 'تخطّ وتابع' },
  'dashboard.cancel.btn_submit_continue': { en: 'Submit & Continue', ar: 'أرسل وتابع' },
  'dashboard.cancel.step3_title': { en: 'Confirm Cancellation', ar: 'تأكيد الإلغاء' },
  'dashboard.cancel.step3_desc': {
    en: 'Please review the details below before confirming.',
    ar: 'راجع التفاصيل أدناه قبل التأكيد.',
  },
  'dashboard.cancel.what_happens_next': { en: 'What happens next', ar: 'ما سيحدث بعد ذلك' },
  'dashboard.cancel.access_continues': {
    en: 'Access continues until period end',
    ar: 'الوصول مستمر حتى نهاية الفترة',
  },
  'dashboard.cancel.future_charges': { en: 'Future charges', ar: 'الرسوم المستقبلية' },
  'dashboard.cancel.no_charges': { en: 'No further charges', ar: 'لا رسوم إضافية' },
  'dashboard.cancel.your_data': { en: 'Your data', ar: 'بياناتك' },
  'dashboard.cancel.retained': {
    en: 'Retained per privacy policy',
    ar: 'محتفظ بها وفق سياسة الخصوصية',
  },
  'dashboard.cancel.cooling_off': { en: 'Cooling-off information:', ar: 'معلومات فترة التفكير:' },
  'dashboard.cancel.btn_go_back': { en: 'Go Back', ar: 'رجوع' },
  'dashboard.cancel.btn_cancelling': { en: 'Cancelling...', ar: 'جاري الإلغاء...' },
  'dashboard.cancel.btn_confirm': { en: 'Confirm Cancellation', ar: 'تأكيد الإلغاء' },
  'dashboard.cancel.step4_title': { en: 'Subscription Cancelled', ar: 'تم إلغاء الاشتراك' },
  'dashboard.cancel.step4_desc': {
    en: 'Your subscription has been cancelled successfully.',
    ar: 'تم إلغاء اشتراكك بنجاح.',
  },
  'dashboard.cancel.access_until': { en: 'Access until', ar: 'الوصول حتى' },
  'dashboard.cancel.access_end_fallback': {
    en: 'End of current billing period',
    ar: 'نهاية دورة الفوترة الحالية',
  },
  'dashboard.cancel.your_essays': { en: 'Your essays', ar: 'مقالاتك' },
  'dashboard.cancel.essays_saved': { en: 'Saved and accessible', ar: 'محفوظة ومتاحة' },
  'dashboard.cancel.data_note': {
    en: 'You can request a copy or deletion of your data at any time from your',
    ar: 'يمكنك طلب نسخة أو حذف بياناتك في أي وقت من',
  },
  'dashboard.cancel.account_settings': { en: 'account settings', ar: 'إعدادات الحساب' },
  'dashboard.cancel.btn_return': { en: 'Return to Dashboard', ar: 'رجوع للوحة التحكم' },
  'dashboard.cancel.btn_resubscribe': { en: 'Resubscribe', ar: 'الاشتراك مجدداً' },

  // ── dashboard/teacher/resources/differentiation ────────────────────────────
  'dashboard.differentiation.back': { en: '← Back to Resources', ar: '← رجوع للموارد' },
  'dashboard.differentiation.title': {
    en: 'Differentiation Guide for English',
    ar: 'دليل التمايز في اللغة الإنجليزية',
  },
  'dashboard.differentiation.subtitle': {
    en: 'Practical strategies for differentiating English lessons by ability, need, and learning style. Includes PP, SEND, and EAL guidance aligned to Ofsted expectations.',
    ar: 'استراتيجيات عملية لتمايز دروس اللغة الإنجليزية حسب القدرة والاحتياج وأسلوب التعلم. يشمل التوجيه الخاص بـ PP وSEND وEAL وفق توقعات Ofsted.',
  },
  'dashboard.differentiation.by_ability': {
    en: 'Differentiation by Ability',
    ar: 'التمايز حسب القدرة',
  },
  'dashboard.differentiation.lower_ability': { en: 'Lower Ability', ar: 'المستوى الأدنى' },
  'dashboard.differentiation.middle_ability': { en: 'Middle Ability', ar: 'المستوى المتوسط' },
  'dashboard.differentiation.higher_ability': { en: 'Higher Ability', ar: 'المستوى المتقدم' },
  'dashboard.differentiation.example_task': {
    en: 'Example: Differentiated Task',
    ar: 'مثال: مهمة متمايزة',
  },
  'dashboard.differentiation.task_question_prefix': { en: 'Q:', ar: 'س:' },
  'dashboard.differentiation.target_prefix': { en: 'Target:', ar: 'الهدف:' },
  'dashboard.differentiation.pp_send_eal': {
    en: 'PP, SEND & EAL Strategies',
    ar: 'استراتيجيات PP وSEND وEAL',
  },

  // ── dashboard/teacher/resources/creative-writing ───────────────────────────
  'dashboard.creative_writing.back': { en: '← Back to Resources', ar: '← رجوع للموارد' },
  'dashboard.creative_writing.title': {
    en: 'Creative Writing Masterclass',
    ar: 'درس الكتابة الإبداعية الاحترافي',
  },
  'dashboard.creative_writing.subtitle': {
    en: 'Model texts, annotated examples, and structured tasks for teaching descriptive and narrative writing at GCSE level. Suitable for AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
    ar: 'نصوص نموذجية وأمثلة مشروحة ومهام منظّمة لتعليم الكتابة الوصفية والسردية على مستوى GCSE. مناسبة لـ AQA Paper 1 Q5 / Edexcel Paper 1 Section B.',
  },
  'dashboard.creative_writing.technique_annotations': {
    en: 'Technique Annotations',
    ar: 'شروحات الأساليب',
  },
  'dashboard.creative_writing.technique_toolkit': {
    en: 'Technique Toolkit for Students',
    ar: 'أدوات الأسلوب للطلاب',
  },
  'dashboard.creative_writing.effect_prefix': { en: 'Effect:', ar: 'التأثير:' },
  'dashboard.creative_writing.use_when': { en: 'Use when:', ar: 'استخدمه عندما:' },
  'dashboard.creative_writing.structured_tasks': {
    en: 'Structured Writing Tasks',
    ar: 'مهام كتابية منظّمة',
  },
  'dashboard.creative_writing.success_criteria': { en: 'Success Criteria', ar: 'معايير النجاح' },

  // ── dashboard/settings/parent-link ────────────────────────────────────────
  'dashboard.parent_link.settings_breadcrumb': { en: 'Settings', ar: 'الإعدادات' },
  'dashboard.parent_link.parent_linking_breadcrumb': { en: 'Parent Linking', ar: 'ربط ولي الأمر' },
  'dashboard.parent_link.title_student': { en: 'Invite a Parent', ar: 'دعوة ولي الأمر' },
  'dashboard.parent_link.title_parent': { en: 'Link to Student', ar: 'الربط بطالب' },
  'dashboard.parent_link.title_generic': { en: 'Parent Linking', ar: 'ربط ولي الأمر' },
  'dashboard.parent_link.subtitle_student': {
    en: 'Connect your parent or guardian so they can track your progress.',
    ar: 'اربط والديك أو وليّ أمرك لمتابعة تقدمك.',
  },
  'dashboard.parent_link.subtitle_parent': {
    en: "Link to your child's account to monitor their study progress.",
    ar: 'اربط بحساب طفلك لمتابعة تقدمه الدراسي.',
  },
  'dashboard.parent_link.subtitle_generic': {
    en: 'Manage parent-student connections.',
    ar: 'أدِر روابط ولي الأمر والطالب.',
  },
  'dashboard.parent_link.invite_title': { en: 'Invite a Parent', ar: 'دعوة ولي الأمر' },
  'dashboard.parent_link.invite_desc': {
    en: 'Generate an invite link and share it with your parent or guardian. They will be able to view your progress reports and scores for free.',
    ar: 'أنشئ رابط دعوة وشاركه مع والديك أو وليّ أمرك. سيتمكنون من عرض تقارير تقدمك ودرجاتك مجاناً.',
  },
  'dashboard.parent_link.invite_alert': {
    en: 'Your parent will not be able to read your essays. They can only see scores, progress, and weekly summaries.',
    ar: 'لن يتمكن ولي أمرك من قراءة مقالاتك. يمكنه فقط رؤية الدرجات والتقدم والملخصات الأسبوعية.',
  },
  'dashboard.parent_link.your_invite_code': { en: 'Your invite code', ar: 'رمز الدعوة الخاص بك' },
  'dashboard.parent_link.expires': { en: 'Expires:', ar: 'ينتهي:' },
  'dashboard.parent_link.btn_copy_code': { en: 'Copy code', ar: 'نسخ الرمز' },
  'dashboard.parent_link.btn_copied': { en: 'Copied', ar: 'تم النسخ' },
  'dashboard.parent_link.btn_copy_link': { en: 'Copy invite link', ar: 'نسخ رابط الدعوة' },
  'dashboard.parent_link.btn_generate_new': { en: 'Generate new code', ar: 'إنشاء رمز جديد' },
  'dashboard.parent_link.btn_generating': { en: 'Generating...', ar: 'جاري الإنشاء...' },
  'dashboard.parent_link.btn_generate': { en: 'Generate invite link', ar: 'إنشاء رابط دعوة' },
  'dashboard.parent_link.new_code_note': {
    en: 'Generating a new code will invalidate the current one.',
    ar: 'إنشاء رمز جديد سيُبطل الرمز الحالي.',
  },
  'dashboard.parent_link.linked_parents_title': {
    en: 'Linked Parents',
    ar: 'أولياء الأمور المرتبطون',
  },
  'dashboard.parent_link.no_parents': {
    en: 'No parent is currently linked to your account. Generate an invite above to get started.',
    ar: 'لا يوجد ولي أمر مرتبط بحسابك حالياً. أنشئ دعوة أعلاه للبدء.',
  },
  'dashboard.parent_link.linked_label': { en: 'Linked', ar: 'مرتبط منذ' },
  'dashboard.parent_link.btn_remove': { en: 'Remove', ar: 'إزالة' },
  'dashboard.parent_link.btn_removing': { en: 'Removing...', ar: 'جاري الإزالة...' },
  'dashboard.parent_link.link_student_title': { en: 'Link to Student', ar: 'الربط بطالب' },
  'dashboard.parent_link.link_student_desc': {
    en: 'Enter the invite code your child shared with you to link your accounts. This gives you free access to their progress reports.',
    ar: 'أدخل رمز الدعوة الذي شاركه طفلك معك لربط الحسابين. هذا يمنحك وصولاً مجانياً لتقارير تقدمه.',
  },
  'dashboard.parent_link.invite_code_label': { en: 'Invite code', ar: 'رمز الدعوة' },
  'dashboard.parent_link.btn_link': { en: 'Link to student', ar: 'الربط بالطالب' },
  'dashboard.parent_link.btn_linking': { en: 'Linking...', ar: 'جاري الربط...' },
  'dashboard.parent_link.no_code_hint': {
    en: "Don't have a code? Ask your child to generate one from their account settings.",
    ar: 'ما عندك رمز؟ اطلب من طفلك إنشاء واحد من إعدادات حسابه.',
  },
  'dashboard.parent_link.linked_students_title': { en: 'Linked Students', ar: 'الطلاب المرتبطون' },
  'dashboard.parent_link.no_students': {
    en: 'You are not linked to any students yet. Use an invite code above to get started.',
    ar: 'أنت غير مرتبط بأي طلاب بعد. استخدم رمز دعوة أعلاه للبدء.',
  },
  'dashboard.parent_link.active_badge': { en: 'Active', ar: 'نشط' },
  'dashboard.parent_link.no_subscription': { en: 'No subscription', ar: 'لا يوجد اشتراك' },
  'dashboard.parent_link.unsupported_role': {
    en: 'Parent linking is only available for student and parent accounts.',
    ar: 'ربط ولي الأمر متاح فقط لحسابات الطلاب وأولياء الأمور.',
  },

  // ── dashboard/teacher/resources/lesson-plans ──────────────────────────────
  'dashboard.lesson_plans.back': { en: '← Back to Resources', ar: '← رجوع للموارد' },
  'dashboard.lesson_plans.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'dashboard.lesson_plans.objectives': { en: 'Learning Objectives', ar: 'أهداف التعلم' },
  'dashboard.lesson_plans.starter_label': {
    en: 'Starter (5-10 mins)',
    ar: 'نشاط البداية (5-10 دقائق)',
  },
  'dashboard.lesson_plans.main_activities': { en: 'Main Activities', ar: 'الأنشطة الرئيسية' },
  'dashboard.lesson_plans.plenary_label': { en: 'Plenary (5-10 mins)', ar: 'الختام (5-10 دقائق)' },
  'dashboard.lesson_plans.differentiation_label': { en: 'Differentiation', ar: 'التمايز' },
  'dashboard.lesson_plans.resources_needed': { en: 'Resources Needed', ar: 'الموارد المطلوبة' },
  'dashboard.lesson_plans.assessment_title': { en: 'Assessment Opportunities', ar: 'فرص التقييم' },
  'dashboard.lesson_plans.cross_curricular': {
    en: 'Cross-Curricular Links',
    ar: 'الروابط عبر المناهج',
  },

  // ── dashboard/parent/progress (full) ──────────────────────────────────────
  'dashboard.parent_progress_detailed.title': { en: 'Detailed Progress', ar: 'التقدم المفصّل' },
  'dashboard.parent_progress_detailed.subtitle_template': {
    en: "Track {name}'s learning journey over time.",
    ar: 'تابع رحلة {name} التعليمية عبر الزمن.',
  },
  'dashboard.parent_progress_detailed.avg_score_trend': {
    en: 'Average Score Trend',
    ar: 'مسار متوسط الدرجة',
  },
  'dashboard.parent_progress_detailed.essays_per_week': {
    en: 'Essays Completed Per Week',
    ar: 'المقالات المكتملة في الأسبوع',
  },
  'dashboard.parent_progress_detailed.time_studying': {
    en: 'Time Spent Studying (minutes)',
    ar: 'وقت الدراسة (بالدقائق)',
  },
  'dashboard.parent_progress_detailed.strengths_radar': {
    en: 'Strengths Radar',
    ar: 'رادار نقاط القوة',
  },
  'dashboard.parent_progress_detailed.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
  },
  'dashboard.parent_progress_detailed.recommended_path': {
    en: 'Recommended Learning Path',
    ar: 'مسار التعلم الموصى به',
  },
  'dashboard.parent_progress_detailed.grades_comparison': {
    en: 'Working At Grade, Predicted Grade & Target',
    ar: 'الدرجة الحالية والمتوقعة والمستهدفة',
  },
  'dashboard.parent_progress_detailed.col_subject': { en: 'Subject', ar: 'المادة' },
  'dashboard.parent_progress_detailed.col_working_at': { en: 'Working At', ar: 'الدرجة الحالية' },
  'dashboard.parent_progress_detailed.col_predicted': { en: 'Predicted', ar: 'المتوقعة' },
  'dashboard.parent_progress_detailed.col_target': { en: 'Target', ar: 'المستهدفة' },
  'dashboard.parent_progress_detailed.col_status': { en: 'Status', ar: 'الحالة' },
  'dashboard.parent_progress_detailed.on_track': { en: 'On track', ar: 'على المسار' },
  'dashboard.parent_progress_detailed.above_target': { en: 'Above target', ar: 'فوق الهدف' },

  // ── dashboard/teacher/resources/mark-scheme ───────────────────────────────
  'dashboard.mark_scheme.back': { en: '← Back to Resources', ar: '← رجوع للموارد' },
  'dashboard.mark_scheme.title': {
    en: 'AQA English Literature Marking Guide',
    ar: 'دليل تصحيح AQA للأدب الإنجليزي',
  },
  'dashboard.mark_scheme.subtitle': {
    en: 'A teacher-friendly breakdown of the AQA GCSE English Literature 8702 marking guide with annotated student examples at each band level.',
    ar: 'تفصيل مخصص للمعلمين لدليل تصحيح GCSE الأدب الإنجليزي AQA 8702 مع أمثلة مشروحة لطلاب في كل مستوى.',
  },
  'dashboard.mark_scheme.ao_glance_title': {
    en: 'Assessment Objectives at a Glance',
    ar: 'الأهداف التقييمية في لمحة',
  },
  'dashboard.mark_scheme.bands_title': {
    en: 'Band Descriptors with Student Examples',
    ar: 'واصفات المستويات مع أمثلة طلابية',
  },
  'dashboard.mark_scheme.student_example': {
    en: 'Example Student Response (An Inspector Calls)',
    ar: 'مثال استجابة طالب (An Inspector Calls)',
  },
  'dashboard.mark_scheme.errors_title': {
    en: 'Common Student Errors & How to Fix Them',
    ar: 'الأخطاء الشائعة لدى الطلاب وكيفية تصحيحها',
  },
  'dashboard.mark_scheme.fix_prefix': { en: 'Fix:', ar: 'الحل:' },
  'dashboard.mark_scheme.tips_title': { en: 'Quick Marking Tips', ar: 'نصائح تصحيح سريعة' },

  // ── toolkit/test-builder ──────────────────────────────────────────────────
  'toolkit.test_builder.back': { en: 'Back to Toolkit', ar: 'رجوع للأدوات' },
  'toolkit.test_builder.title': { en: 'AI Test Builder', ar: 'منشئ الاختبارات بالذكاء الاصطناعي' },
  'toolkit.test_builder.subtitle': {
    en: 'Generate custom tests and score them with GCSE grade equivalents',
    ar: 'أنشئ اختبارات مخصصة وقيّمها بدرجات GCSE المعادلة',
  },
  'toolkit.test_builder.label_topic': { en: 'Topic / Text', ar: 'الموضوع / النص' },
  'toolkit.test_builder.option_select_topic': { en: 'Select a topic...', ar: 'اختر موضوعاً...' },
  'toolkit.test_builder.group_set_texts': { en: 'Set Texts', ar: 'النصوص المقررة' },
  'toolkit.test_builder.group_general': { en: 'General Topics', ar: 'المواضيع العامة' },
  'toolkit.test_builder.topic_language_analysis': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'toolkit.test_builder.topic_creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
  },
  'toolkit.test_builder.topic_literary_techniques': {
    en: 'Literary Techniques',
    ar: 'الأساليب الأدبية',
  },
  'toolkit.test_builder.topic_exam_technique': { en: 'Exam Technique', ar: 'تقنية الامتحان' },
  'toolkit.test_builder.label_question_count': { en: 'Number of Questions', ar: 'عدد الأسئلة' },
  'toolkit.test_builder.questions_suffix': { en: 'questions', ar: 'أسئلة' },
  'toolkit.test_builder.btn_generate': { en: 'Generate Test', ar: 'إنشاء الاختبار' },
  'toolkit.test_builder.loading': {
    en: 'Generating your custom test...',
    ar: 'جاري إنشاء اختبارك المخصص...',
  },
  'toolkit.test_builder.label_mcq': { en: 'MCQ', ar: 'خيارات متعددة' },
  'toolkit.test_builder.label_short_answer': { en: 'Short Answer', ar: 'إجابة قصيرة' },
  'toolkit.test_builder.placeholder_short_answer': {
    en: 'Type your answer here...',
    ar: 'اكتب إجابتك هنا...',
  },
  'toolkit.test_builder.btn_previous': { en: 'Previous', ar: 'السابق' },
  'toolkit.test_builder.btn_next': { en: 'Next', ar: 'التالي' },
  'toolkit.test_builder.btn_submit': { en: 'Submit Test', ar: 'تسليم الاختبار' },
  'toolkit.test_builder.your_result': { en: 'Your Result', ar: 'نتيجتك' },
  'toolkit.test_builder.correct_of': { en: 'correct', ar: 'صحيحة' },
  'toolkit.test_builder.btn_download_pdf': { en: 'Download as PDF', ar: 'تحميل كـ PDF' },
  'toolkit.test_builder.btn_save_materials': { en: 'Save to My Materials', ar: 'حفظ في موادي' },
  'toolkit.test_builder.btn_new_test': { en: 'New Test', ar: 'اختبار جديد' },
  'toolkit.test_builder.review_answers': { en: 'Review Answers', ar: 'مراجعة الإجابات' },
  'toolkit.test_builder.your_answer': { en: 'Your answer:', ar: 'إجابتك:' },
  'toolkit.test_builder.not_answered': { en: 'Not answered', ar: 'لم تُجَب' },
  'toolkit.test_builder.correct_answer': { en: 'Correct answer:', ar: 'الإجابة الصحيحة:' },

  // ── toolkit/progress ──────────────────────────────────────────────────────
  'toolkit.progress.back': { en: 'Back to Toolkit', ar: 'رجوع للأدوات' },
  'toolkit.progress.title': { en: 'My Progress', ar: 'تقدمي' },
  'toolkit.progress.subtitle': {
    en: 'Track your learning journey and see where to focus next',
    ar: 'تابع رحلتك التعليمية وتعرّف على ما تحتاج التركيز عليه',
  },
  'toolkit.progress.overall_stats': { en: 'Overall Stats', ar: 'الإحصاءات الكلية' },
  'toolkit.progress.label_poems': { en: 'Poems Studied', ar: 'القصائد المدروسة' },
  'toolkit.progress.label_quizzes': { en: 'Quizzes Taken', ar: 'الاختبارات المنجزة' },
  'toolkit.progress.label_games': { en: 'Games Played', ar: 'الألعاب التي لعبتها' },
  'toolkit.progress.label_essays': { en: 'Essays Marked', ar: 'المقالات المصحَّحة' },
  'toolkit.progress.label_streak': { en: 'Day Streak', ar: 'أيام الاستمرارية' },
  'toolkit.progress.grade_predictor': { en: 'Grade Predictor', ar: 'متنبئ الدرجة' },
  'toolkit.progress.predicted_gcse': { en: 'Predicted GCSE Grade', ar: 'درجة GCSE المتوقعة' },
  'toolkit.progress.based_on_scores': { en: 'scores with an average of', ar: 'درجات بمتوسط' },
  'toolkit.progress.take_more_quizzes': {
    en: 'take more quizzes for a more accurate prediction',
    ar: 'خذ المزيد من الاختبارات للحصول على توقع أدق',
  },
  'toolkit.progress.no_scores': {
    en: 'No score data yet. Take quizzes and play games to see your predicted grade.',
    ar: 'لا توجد بيانات درجات بعد. خذ اختبارات والعب ألعاباً لترى درجتك المتوقعة.',
  },
  'toolkit.progress.btn_take_quiz': { en: 'Take a Quiz', ar: 'خذ اختباراً' },
  'toolkit.progress.streak_tracker': { en: 'Streak Tracker', ar: 'متتبع الاستمرارية' },
  'toolkit.progress.streak_day': { en: 'day', ar: 'يوم' },
  'toolkit.progress.streak_days': { en: 'days', ar: 'أيام' },
  'toolkit.progress.streak_amazing': {
    en: 'Amazing streak! Keep it going!',
    ar: 'سلسلة مذهلة! واصل عليها!',
  },
  'toolkit.progress.streak_good': {
    en: 'Good consistency! Push for a week!',
    ar: 'انتظام جيد! اهدف لأسبوع كامل!',
  },
  'toolkit.progress.streak_building': {
    en: 'You are building a habit. Come back tomorrow!',
    ar: 'أنت تبني عادة. ارجع غداً!',
  },
  'toolkit.progress.streak_start': {
    en: 'Start studying today to begin your streak.',
    ar: 'ابدأ الدراسة اليوم لتبدأ سلسلتك.',
  },
  'toolkit.progress.topic_breakdown': { en: 'Topic Breakdown', ar: 'تفصيل الموضوعات' },
  'toolkit.progress.strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'toolkit.progress.strengths_empty': {
    en: 'Score 80%+ on a topic to see it here.',
    ar: 'سجّل 80% أو أكثر في موضوع لتراه هنا.',
  },
  'toolkit.progress.areas_improve': { en: 'Areas to Improve', ar: 'مجالات التحسين' },
  'toolkit.progress.areas_empty': {
    en: 'Topics scoring below 60% will appear here with improvement links.',
    ar: 'ستظهر هنا الموضوعات التي تقل درجتها عن 60% مع روابط تحسين.',
  },
  'toolkit.progress.improve_this': { en: 'Improve this', ar: 'حسّن هذا' },
  'toolkit.progress.study_history': { en: 'Study History', ar: 'سجل الدراسة' },
  'toolkit.progress.study_history_empty': {
    en: 'Your study activity will appear here as you use the platform.',
    ar: 'سيظهر هنا نشاطك الدراسي عند استخدامك للمنصة.',
  },
  'toolkit.progress.suggested_focus': { en: 'Suggested Focus', ar: 'التركيز المقترح' },

  // ─── dashboard.cancel (subscription cancellation flow) ────────────────
  'dashboard.cancel.back_btn': { en: 'Back', ar: 'رجوع' },
  'dashboard.cancel.cancelling': { en: 'Cancelling…', ar: 'جاري الإلغاء…' },
  'dashboard.cancel.confirm_btn': { en: 'Confirm Cancellation', ar: 'تأكيد الإلغاء' },
  'dashboard.cancel.continue_btn': { en: 'Continue', ar: 'تابع' },
  'dashboard.cancel.keep_btn': { en: 'Keep My Subscription', ar: 'احتفظ باشتراكي' },
  'dashboard.cancel.resubscribe_btn': { en: 'Resubscribe', ar: 'اشترك مجدداً' },
  'dashboard.cancel.return_btn': { en: 'Return to Dashboard', ar: 'ارجع للوحة التحكم' },
  'dashboard.cancel.skip_btn': { en: 'Skip', ar: 'تخطَّ' },
  'dashboard.cancel.submit_btn': { en: 'Submit Feedback', ar: 'أرسل ملاحظاتك' },

  // ─── dashboard.creative_writing (teacher resource) ────────────────────
  'dashboard.creative_writing.annotations_title': {
    en: 'Technique Annotations',
    ar: 'شرح الأساليب',
  },
  'dashboard.creative_writing.technique_toolkit_title': {
    en: 'Technique Toolkit',
    ar: 'صندوق الأساليب الكتابية',
  },
  'dashboard.creative_writing.writing_tasks_title': { en: 'Writing Tasks', ar: 'مهام الكتابة' },

  // ─── dashboard.data_requests (DSAR / GDPR) ────────────────────────────
  'dashboard.data_requests.access_btn': { en: 'Request Access Report', ar: 'اطلب تقرير الوصول' },
  'dashboard.data_requests.access_desc': {
    en: 'Receive a copy of all personal data we hold about you.',
    ar: 'احصل على نسخة من جميع بياناتك الشخصية المحفوظة لدينا.',
  },
  'dashboard.data_requests.access_title': {
    en: 'Subject Access Request',
    ar: 'طلب الوصول إلى البيانات',
  },
  'dashboard.data_requests.back_btn': { en: 'Back to Requests', ar: 'ارجع إلى الطلبات' },
  'dashboard.data_requests.back_dashboard': { en: 'Back to Dashboard', ar: 'ارجع للوحة التحكم' },
  'dashboard.data_requests.cancel_btn': { en: 'Cancel', ar: 'إلغاء' },
  'dashboard.data_requests.dashboard_btn': { en: 'Go to Dashboard', ar: 'اذهب للوحة التحكم' },
  'dashboard.data_requests.erase_confirm_body': {
    en: 'This will permanently delete all your personal data, essays, and feedback. This action cannot be undone.',
    ar: 'سيُحذف جميع بياناتك الشخصية ومقالاتك وتقييماتك نهائياً. لا يمكن التراجع عن هذا الإجراء.',
  },
  'dashboard.data_requests.erase_confirm_btn': { en: 'Confirm Erasure', ar: 'تأكيد الحذف' },
  'dashboard.data_requests.erase_confirm_heading': { en: 'Are you sure?', ar: 'هل أنت متأكد؟' },
  'dashboard.data_requests.erase_confirm_instruction': {
    en: 'Type DELETE to confirm.',
    ar: 'اكتب DELETE للتأكيد.',
  },
  'dashboard.data_requests.erasure_btn': { en: 'Request Erasure', ar: 'اطلب الحذف' },
  'dashboard.data_requests.erasure_desc': {
    en: 'Request permanent deletion of all your personal data ("right to be forgotten").',
    ar: 'اطلب حذف جميع بياناتك الشخصية نهائياً ("الحق في النسيان").',
  },
  'dashboard.data_requests.erasure_title': { en: 'Right to Erasure', ar: 'الحق في الحذف' },
  'dashboard.data_requests.gdpr_note': {
    en: 'Under UK GDPR, we must complete your request within one calendar month.',
    ar: 'بموجب UK GDPR، يجب أن نُنجز طلبك خلال شهر تقويمي واحد.',
  },
  'dashboard.data_requests.history_subtitle': {
    en: 'A record of all data requests you have submitted.',
    ar: 'سجل بجميع طلبات البيانات التي قدَّمتها.',
  },
  'dashboard.data_requests.portability_btn': { en: 'Download My Data', ar: 'حمّل بياناتي' },
  'dashboard.data_requests.portability_desc': {
    en: 'Receive your data in a machine-readable format (JSON).',
    ar: 'احصل على بياناتك بصيغة قابلة للقراءة آلياً (JSON).',
  },
  'dashboard.data_requests.portability_title': {
    en: 'Data Portability',
    ar: 'قابلية نقل البيانات',
  },
  'dashboard.data_requests.preparing': { en: 'Preparing download…', ar: 'جاري تحضير التحميل…' },
  'dashboard.data_requests.rectification_btn': {
    en: 'Go to Privacy Settings',
    ar: 'اذهب لإعدادات الخصوصية',
  },
  'dashboard.data_requests.rectification_desc': {
    en: 'Correct any inaccurate personal data we hold about you.',
    ar: 'صحِّح أي بيانات شخصية غير دقيقة لدينا.',
  },
  'dashboard.data_requests.rectification_title': {
    en: 'Right to Rectification',
    ar: 'الحق في التصحيح',
  },
  'dashboard.data_requests.reference_label': { en: 'Your reference number', ar: 'رقم مرجعك' },
  'dashboard.data_requests.submitting': { en: 'Submitting…', ar: 'جاري الإرسال…' },
  'dashboard.data_requests.success_desc': {
    en: 'Your request has been received and will be processed within one calendar month.',
    ar: 'تم استلام طلبك وسيُعالَج خلال شهر تقويمي واحد.',
  },
  'dashboard.data_requests.success_title': { en: 'Request Submitted', ar: 'تم إرسال الطلب' },

  // ─── dashboard.differentiation (teacher resource) ─────────────────────
  'dashboard.differentiation.diff_by_ability': {
    en: 'Differentiation by Ability',
    ar: 'التمييز حسب المستوى',
  },
  'dashboard.differentiation.example_task_title': {
    en: 'Example Differentiated Task',
    ar: 'مثال على مهمة متدرجة المستوى',
  },
  'dashboard.differentiation.pp_send_title': {
    en: 'PP / SEND / EAL Strategies',
    ar: 'استراتيجيات PP / SEND / EAL',
  },

  // ─── dashboard.lesson_plans (teacher resource) ────────────────────────
  'dashboard.lesson_plans.cross_curricular_title': {
    en: 'Cross-Curricular Links',
    ar: 'الروابط بين المواد',
  },
  'dashboard.lesson_plans.main_activities_label': { en: 'Main Activities', ar: 'الأنشطة الرئيسية' },
  'dashboard.lesson_plans.objectives_title': { en: 'Learning Objectives', ar: 'أهداف التعلم' },
  'dashboard.lesson_plans.overview_title': { en: 'Overview', ar: 'نظرة عامة' },
  'dashboard.lesson_plans.resources_label': { en: 'Resources', ar: 'الموارد' },

  // ─── dashboard.mark_scheme (teacher resource) ─────────────────────────
  'dashboard.mark_scheme.band_descriptors_title': {
    en: 'Band Descriptors with Student Examples',
    ar: 'واصفات المستويات مع أمثلة الطلاب',
  },
  'dashboard.mark_scheme.common_errors_title': {
    en: 'Common Errors & How to Fix Them',
    ar: 'الأخطاء الشائعة وكيفية تصحيحها',
  },
  'dashboard.mark_scheme.marking_tips_title': { en: 'Marking Tips', ar: 'نصائح التصحيح' },

  // ─── dashboard.parent_link (parent/student link settings) ─────────────
  'dashboard.parent_link.breadcrumb_current': { en: 'Parent Linking', ar: 'ربط ولي الأمر' },
  'dashboard.parent_link.breadcrumb_settings': { en: 'Settings', ar: 'الإعدادات' },
  'dashboard.parent_link.copied': { en: 'Copied!', ar: 'تم النسخ!' },
  'dashboard.parent_link.copy_code': { en: 'Copy Code', ar: 'انسخ الكود' },
  'dashboard.parent_link.copy_invite_link': { en: 'Copy Invite Link', ar: 'انسخ رابط الدعوة' },
  'dashboard.parent_link.default_subtitle': {
    en: 'Manage your parent or student connections.',
    ar: 'أدِر روابطك مع ولي الأمر أو الطالب.',
  },
  'dashboard.parent_link.generate_invite_btn': {
    en: 'Generate Invite Code',
    ar: 'أنشئ كود الدعوة',
  },
  'dashboard.parent_link.generate_new_code': { en: 'Generate New Code', ar: 'أنشئ كوداً جديداً' },
  'dashboard.parent_link.generate_warning': {
    en: 'Generating a new code will invalidate the current one.',
    ar: 'إنشاء كود جديد سيُلغي الكود الحالي.',
  },
  'dashboard.parent_link.generating': { en: 'Generating…', ar: 'جاري الإنشاء…' },
  'dashboard.parent_link.link_btn': { en: 'Link to Student', ar: 'اربط بالطالب' },
  'dashboard.parent_link.linking': { en: 'Linking…', ar: 'جاري الربط…' },
  'dashboard.parent_link.parent_link_desc': {
    en: 'Enter the invite code your student shared with you to link your accounts.',
    ar: 'أدخل كود الدعوة الذي شاركه معك الطالب لربط الحسابين.',
  },
  'dashboard.parent_link.parent_link_title': {
    en: 'Link to Student Account',
    ar: 'ربط بحساب الطالب',
  },
  'dashboard.parent_link.parent_page_subtitle': {
    en: "Enter your student's invite code to view their progress.",
    ar: 'أدخل كود دعوة طالبك لمتابعة تقدمه.',
  },
  'dashboard.parent_link.remove_btn': { en: 'Remove', ar: 'إزالة' },
  'dashboard.parent_link.removing': { en: 'Removing…', ar: 'جاري الإزالة…' },
  'dashboard.parent_link.student_invite_desc': {
    en: 'Generate an invite code and share it with your parent or guardian so they can view your progress.',
    ar: 'أنشئ كود دعوة وشاركه مع ولي أمرك حتى يتمكن من متابعة تقدمك.',
  },
  'dashboard.parent_link.student_invite_title': { en: 'Invite a Parent', ar: 'ادعُ ولي الأمر' },
  'dashboard.parent_link.student_page_subtitle': {
    en: 'Share an invite code with your parent or guardian.',
    ar: 'شارك كود الدعوة مع ولي أمرك.',
  },

  // ─── dashboard.parent_progress (parent overview page) ─────────────────
  'dashboard.parent_progress.activities_week': {
    en: 'Activities This Week',
    ar: 'الأنشطة هذا الأسبوع',
  },
  'dashboard.parent_progress.working_at_grade': { en: 'Working at Grade', ar: 'الدرجة الحالية' },

  // ─── dashboard.parent_progress_detail (detailed progress view) ────────
  'dashboard.parent_progress_detail.areas_improvement': {
    en: 'Areas for Improvement',
    ar: 'مجالات التحسين',
  },
  'dashboard.parent_progress_detail.col_predicted': { en: 'Predicted', ar: 'المتوقع' },
  'dashboard.parent_progress_detail.col_status': { en: 'Status', ar: 'الحالة' },
  'dashboard.parent_progress_detail.col_subject': { en: 'Subject', ar: 'المادة' },
  'dashboard.parent_progress_detail.col_target': { en: 'Target', ar: 'الهدف' },
  'dashboard.parent_progress_detail.col_working_at': { en: 'Working At', ar: 'الدرجة الحالية' },
  'dashboard.parent_progress_detail.essays_per_week_label': {
    en: 'Essays Per Week',
    ar: 'المقالات في الأسبوع',
  },
  'dashboard.parent_progress_detail.grades_heading': {
    en: 'Projected vs Target Grades',
    ar: 'الدرجات المتوقعة مقارنةً بالأهداف',
  },
  'dashboard.parent_progress_detail.recommended_path': {
    en: 'Recommended Learning Path',
    ar: 'المسار التعليمي المقترح',
  },
  'dashboard.parent_progress_detail.score_trend_label': { en: 'Score Trend', ar: 'اتجاه الدرجات' },
  'dashboard.parent_progress_detail.status_above_target': { en: 'Above target', ar: 'فوق الهدف' },
  'dashboard.parent_progress_detail.status_on_track': { en: 'On track', ar: 'في المسار الصحيح' },
  'dashboard.parent_progress_detail.strengths_radar': {
    en: 'Skills Breakdown',
    ar: 'تفصيل المهارات',
  },
  'dashboard.parent_progress_detail.subtitle': {
    en: 'Detailed progress report for',
    ar: 'تقرير التقدم التفصيلي لـ',
  },
  'dashboard.parent_progress_detail.time_spent_label': {
    en: 'Time Spent Studying',
    ar: 'وقت الدراسة',
  },
  'dashboard.parent_progress_detail.title': { en: 'Progress Report', ar: 'تقرير التقدم' },

  // ─── dashboard.parent_settings (parent account settings) ──────────────
  'dashboard.parent_settings.add_student_btn': { en: 'Add Student', ar: 'أضف طالباً' },
  'dashboard.parent_settings.cancel_btn': { en: 'Cancel', ar: 'إلغاء' },
  'dashboard.parent_settings.edit_targets': { en: 'Edit Targets', ar: 'عدِّل الأهداف' },
  'dashboard.parent_settings.link_student_desc': {
    en: 'Enter the email address of the student you want to link to your account.',
    ar: 'أدخل البريد الإلكتروني للطالب الذي تريد ربطه بحسابك.',
  },
  'dashboard.parent_settings.link_student_title': { en: 'Link a Student', ar: 'اربط طالباً' },
  'dashboard.parent_settings.save_btn': { en: 'Save', ar: 'احفظ' },
  'dashboard.parent_settings.save_notifications': { en: 'Save Preferences', ar: 'احفظ التفضيلات' },
  'dashboard.parent_settings.save_schedule': { en: 'Save Schedule', ar: 'احفظ الجدول' },
  'dashboard.parent_settings.saving': { en: 'Saving…', ar: 'جاري الحفظ…' },
  'dashboard.parent_settings.schedule_day_label': { en: 'Day', ar: 'اليوم' },
  'dashboard.parent_settings.schedule_time_label': { en: 'Time', ar: 'الوقت' },
  'dashboard.parent_settings.send_invite_btn': { en: 'Send Invite', ar: 'أرسل الدعوة' },
  'dashboard.parent_settings.sending': { en: 'Sending…', ar: 'جاري الإرسال…' },

  // ─── dashboard.privacy (privacy dashboard) ────────────────────────────
  'dashboard.privacy.data_load_error': {
    en: 'Could not load your data. Please refresh the page.',
    ar: 'تعذَّر تحميل بياناتك. يرجى تحديث الصفحة.',
  },
  'dashboard.privacy.data_subtitle': {
    en: 'A summary of all personal data we hold about you.',
    ar: 'ملخص لجميع بياناتك الشخصية المحفوظة لدينا.',
  },
  'dashboard.privacy.delete_account_btn': { en: 'Request Account Deletion', ar: 'اطلب حذف الحساب' },
  'dashboard.privacy.delete_account_warning': {
    en: 'This action is irreversible. Once confirmed, your account and all associated data will be permanently deleted after a 30-day grace period.',
    ar: 'هذا الإجراء لا يمكن التراجع عنه. بعد التأكيد، سيُحذف حسابك وجميع بياناته نهائياً بعد فترة سماح مدتها 30 يوماً.',
  },
  'dashboard.privacy.delete_essay_btn': { en: 'Delete', ar: 'حذف' },
  'dashboard.privacy.delete_subtitle': {
    en: 'Delete individual essays or request full account deletion.',
    ar: 'احذف مقالات بعينها أو اطلب حذف الحساب بالكامل.',
  },
  'dashboard.privacy.deleting': { en: 'Deleting…', ar: 'جاري الحذف…' },
  'dashboard.privacy.download_format_label': { en: 'Choose format', ar: 'اختر الصيغة' },
  'dashboard.privacy.download_included_heading': {
    en: "What's included",
    ar: 'ما الذي يتضمنه التحميل',
  },
  'dashboard.privacy.download_request_btn': { en: 'Request Download', ar: 'اطلب التحميل' },
  'dashboard.privacy.download_requested': {
    en: 'Request sent! Check your email.',
    ar: 'تم الإرسال! تحقق من بريدك الإلكتروني.',
  },
  'dashboard.privacy.download_requesting': { en: 'Requesting…', ar: 'جاري الطلب…' },
  'dashboard.privacy.download_subtitle': {
    en: 'Download a copy of all your data in your chosen format.',
    ar: 'حمِّل نسخة من جميع بياناتك بالصيغة التي تختارها.',
  },
  'dashboard.privacy.profile_visibility_label': {
    en: 'Profile Visibility',
    ar: 'ظهور الملف الشخصي',
  },
  'dashboard.privacy.rights_subtitle': {
    en: 'Under UK GDPR you have the following rights regarding your personal data.',
    ar: 'بموجب UK GDPR، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية.',
  },

  // ─── toolkit.test_builder ─────────────────────────────────────────────
  'toolkit.test_builder.go_to_question': { en: 'Go to question', ar: 'اذهب إلى السؤال' },
}
