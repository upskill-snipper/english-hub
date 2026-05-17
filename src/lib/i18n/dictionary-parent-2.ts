/**
 * Parent-namespace dictionary — Bucket A, Tier-2, SECOND alphabetical half.
 *
 * Covers `parent.linked_child` → `parent.your_password_placeholder`
 * (the ~127 keys after the alphabetical median; the FIRST half lives in a
 * sibling dictionary-parent-1.ts authored by a parallel agent — split point
 * is between `parent.link_your_child_desc` and `parent.linked_child` so the
 * two files are exact complements with zero overlap).
 *
 * English authored fresh against the real consuming components under
 * src/app/parent/** and src/components/parent — the dictionary-audit-fix.ts
 * source for these keys is title-cased junk and was NOT copied. Arabic is
 * genuine warm Khaleeji (Gulf) register for parents, matching the voice of
 * src/lib/eal/curriculum.ts and the existing parent.weekly.* entries.
 *
 * Screenshot-fixes keys whose ar already differs from en (already correct
 * Khaleeji) are intentionally OMITTED here — they remain owned by
 * dictionary-screenshot-fixes.ts.
 *
 * Imported and chained into lookup() in ./dictionary.ts.
 */
export const PARENT_2_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Settings: account / linked child ────────────────────────────
  'parent.linked_child': { en: 'Linked child', ar: 'الطفل المرتبط' },
  'parent.linked_to_prefix': { en: 'Linked to', ar: 'تم الربط مع' },
  'parent.linking': { en: 'Linking…', ar: 'يتم الربط…' },

  // ─── Loading states ──────────────────────────────────────────────
  'parent.loading_activity': { en: 'Loading activity…', ar: 'يتم تحميل النشاط…' },
  'parent.loading_dashboard': {
    en: 'Loading your dashboard…',
    ar: 'يتم تحميل لوحتك…',
  },
  'parent.loading_progress': {
    en: 'Loading progress…',
    ar: 'يتم تحميل التقدّم…',
  },

  // ─── Login / auth ────────────────────────────────────────────────
  'parent.log_in': { en: 'Log in', ar: 'تسجيل الدخول' },
  'parent.manage_billing': { en: 'Manage billing', ar: 'إدارة الفوترة' },
  'parent.network_error': {
    en: 'Network problem — please check your connection and try again.',
    ar: 'في مشكلة بالاتصال — تأكّد من الإنترنت وجرّب مرّة ثانية.',
  },
  'parent.new_password': { en: 'New password', ar: 'كلمة المرور الجديدة' },
  'parent.no_account_prompt': {
    en: "Don't have an account yet?",
    ar: 'ما عندك حساب لين الحين؟',
  },

  // ─── Empty states ────────────────────────────────────────────────
  'parent.no_activity_yet': {
    en: 'No activity yet — it will appear here as your child studies.',
    ar: 'ما في نشاط لين الحين — بيظهر هنا أول ما يبدأ طفلك يذاكر.',
  },
  'parent.no_games_yet': {
    en: 'No games played yet.',
    ar: 'ما في ألعاب انلعبت لين الحين.',
  },
  'parent.no_poems_yet': {
    en: 'No poems studied yet.',
    ar: 'ما في قصائد اندرست لين الحين.',
  },
  'parent.no_quiz_results_this_week': {
    en: 'No quiz results this week.',
    ar: 'ما في نتائج اختبارات هالأسبوع.',
  },
  'parent.no_quizzes_yet': {
    en: 'No quizzes taken yet.',
    ar: 'ما في اختبارات انعطت لين الحين.',
  },

  // ─── Notification settings ───────────────────────────────────────
  'parent.notif_grade_desc': {
    en: 'Get an email when a quiz grade drops noticeably.',
    ar: 'يوصلك إيميل لمّا تنزل درجة اختبار بشكل ملحوظ.',
  },
  'parent.notif_grade_label': { en: 'Grade alerts', ar: 'تنبيهات الدرجات' },
  'parent.notif_inactivity_desc': {
    en: "Get a nudge if your child hasn't studied in a while.",
    ar: 'يوصلك تذكير إذا طفلك ما ذاكر من فترة.',
  },
  'parent.notif_inactivity_label': {
    en: 'Inactivity reminders',
    ar: 'تذكيرات عدم النشاط',
  },
  'parent.notif_updates_desc': {
    en: 'Occasional news about new features and improvements.',
    ar: 'أخبار من وقت لوقت عن الميزات الجديدة والتحسينات.',
  },
  'parent.notif_updates_label': { en: 'Product updates', ar: 'تحديثات المنصّة' },
  'parent.notif_weekly_desc': {
    en: "A summary of your child's week, emailed every Sunday.",
    ar: 'ملخّص أسبوع طفلك، يوصلك بالإيميل كل يوم أحد.',
  },
  'parent.notif_weekly_label': {
    en: 'Weekly report email',
    ar: 'إيميل التقرير الأسبوعي',
  },
  'parent.notification_settings': {
    en: 'Notification settings',
    ar: 'إعدادات الإشعارات',
  },
  'parent.notifications_desc': {
    en: 'Choose which emails you would like to receive.',
    ar: 'اختر الإيميلات اللي تحب توصلك.',
  },
  'parent.notifications_title': { en: 'Notifications', ar: 'الإشعارات' },

  // ─── Billing / add-on ────────────────────────────────────────────
  'parent.parent_addon': { en: 'Parent add-on', ar: 'إضافة ولي الأمر' },
  'parent.parent_default_name': { en: 'Parent', ar: 'ولي الأمر' },
  'parent.parent_login_subtitle': {
    en: "Sign in to follow your child's progress.",
    ar: 'سجّل دخولك عشان تتابع تقدّم طفلك.',
  },
  'parent.parent_login_title': { en: 'Parent login', ar: 'دخول ولي الأمر' },

  // ─── Password change ─────────────────────────────────────────────
  'parent.password_current_required': {
    en: 'Please enter your current password.',
    ar: 'الرجاء إدخال كلمة المرور الحالية.',
  },
  'parent.password_hint': {
    en: 'Use at least 8 characters for a strong password.',
    ar: 'استخدم 8 أحرف على الأقل عشان كلمة مرور قوية.',
  },
  'parent.password_mismatch': {
    en: "The new passwords don't match.",
    ar: 'كلمتا المرور الجديدتان ما تتطابقان.',
  },
  'parent.password_placeholder': {
    en: 'Enter your password',
    ar: 'أدخل كلمة المرور',
  },
  'parent.password_update_failed': {
    en: "We couldn't update your password. Please try again.",
    ar: 'ما قدرنا نحدّث كلمة المرور. جرّب مرّة ثانية.',
  },
  'parent.password_updated': {
    en: 'Your password has been updated.',
    ar: 'تم تحديث كلمة المرور.',
  },

  // ─── Reports: week list ──────────────────────────────────────────
  'parent.past_4_weeks': { en: 'Past 4 weeks', ar: 'آخر 4 أسابيع' },
  'parent.permanently_deleted_after': {
    en: 'Permanently deleted after',
    ar: 'يُحذف نهائياً بعد',
  },

  // ─── Recent activity rows ────────────────────────────────────────
  'parent.played_a_game': { en: 'Played a game', ar: 'لعب لعبة' },
  'parent.played_count_suffix': { en: 'played', ar: 'انلعبت' },

  // ─── Progress: headline stats ────────────────────────────────────
  'parent.poems_label': { en: 'Poems', ar: 'القصائد' },
  'parent.poems_studied_desc': {
    en: 'Poems your child has worked through.',
    ar: 'القصائد اللي خلّصها طفلك.',
  },
  'parent.poems_studied_title': { en: 'Poems studied', ar: 'القصائد المدروسة' },
  'parent.poetry_revision': { en: 'Poetry revision', ar: 'مراجعة الشعر' },

  // ─── Reports preview ─────────────────────────────────────────────
  'parent.preview_badge': { en: 'Preview', ar: 'معاينة' },
  'parent.preview_note_prefix': {
    en: 'This is a preview. The full report is emailed every',
    ar: 'هذي معاينة. التقرير الكامل يوصلك بالإيميل كل',
  },
  'parent.preview_note_sunday': { en: 'Sunday', ar: 'يوم أحد' },

  // ─── Activity labels ─────────────────────────────────────────────
  'parent.quiz_completed': { en: 'Completed a quiz', ar: 'خلّص اختبار' },
  'parent.quiz_default': { en: 'Quiz', ar: 'اختبار' },
  'parent.quiz_prefix': { en: 'Quiz:', ar: 'اختبار:' },
  'parent.quizzes_label': { en: 'Quizzes', ar: 'الاختبارات' },
  'parent.quizzes_taken': { en: 'Quizzes taken', ar: 'الاختبارات المنجزة' },

  // ─── Read-only notice ────────────────────────────────────────────
  'parent.read_only_note': {
    en: "This is a read-only view of your child's progress.",
    ar: 'هذا عرض للقراءة فقط لتقدّم طفلك.',
  },
  'parent.reading_age': { en: 'Reading age', ar: 'العمر القرائي' },
  'parent.recent_activity': { en: 'Recent activity', ar: 'النشاط الأخير' },
  'parent.recent_activity_prefix': {
    en: 'What',
    ar: 'وش سوّى',
  },
  'parent.recent_activity_suffix': {
    en: 'has been working on lately.',
    ar: 'في الفترة الأخيرة.',
  },
  'parent.recent_quiz_scores': {
    en: 'Recent quiz scores',
    ar: 'درجات الاختبارات الأخيرة',
  },
  'parent.redirecting_dashboard': {
    en: 'Taking you to your dashboard…',
    ar: 'نوصّلك للوحتك…',
  },
  'parent.request_data_deletion': {
    en: 'Request data deletion',
    ar: 'طلب حذف البيانات',
  },

  // ─── Data-retention rows (delete-data) ───────────────────────────
  'parent.ret_audit_desc': {
    en: 'Security and access logs are kept for audit purposes.',
    ar: 'سجلات الأمان والدخول تنحفظ لأغراض التدقيق.',
  },
  'parent.ret_audit_label': { en: 'Audit logs', ar: 'سجلات التدقيق' },
  'parent.ret_payment_desc': {
    en: 'Payment records are retained as required by law.',
    ar: 'سجلات الدفع تنحفظ حسب ما يطلب القانون.',
  },
  'parent.ret_payment_label': { en: 'Payment records', ar: 'سجلات الدفع' },
  'parent.ret_safeguarding_desc': {
    en: 'Safeguarding records are retained where legally required.',
    ar: 'سجلات حماية الأطفال تنحفظ حيث يلزم القانون.',
  },
  'parent.ret_safeguarding_label': {
    en: 'Safeguarding records',
    ar: 'سجلات حماية الأطفال',
  },

  // ─── Notification save ───────────────────────────────────────────
  'parent.save_preferences': { en: 'Save preferences', ar: 'حفظ التفضيلات' },
  'parent.saved_dot': { en: 'Saved', ar: 'تم الحفظ' },

  // ─── Delete-data scheduling ──────────────────────────────────────
  'parent.schedule_deletion_prefix': {
    en: 'Your data will be scheduled for deletion in',
    ar: 'بياناتك بتنجدول للحذف خلال',
  },
  'parent.schedule_deletion_suffix': {
    en: 'days.',
    ar: 'أيام.',
  },

  // ─── Activity meta ───────────────────────────────────────────────
  'parent.score_prefix': { en: 'Score:', ar: 'النتيجة:' },
  'parent.scored_label': { en: 'Scored', ar: 'حصل على' },
  'parent.sections_visited_desc': {
    en: 'How much of the revision hub your child has covered.',
    ar: 'كم غطّى طفلك من مركز المراجعة.',
  },
  'parent.select_week_preview': {
    en: 'Select a week to preview its report.',
    ar: 'اختر أسبوع عشان تشوف تقريره.',
  },
  'parent.settings_subtitle': {
    en: 'Manage your account, notifications and privacy.',
    ar: 'أدِر حسابك والإشعارات والخصوصية.',
  },

  // ─── Login buttons / states ──────────────────────────────────────
  'parent.sign_in': { en: 'Sign in', ar: 'تسجيل الدخول' },
  'parent.sign_up': { en: 'Sign up', ar: 'إنشاء حساب' },
  'parent.signing_in': { en: 'Signing in…', ar: 'يتم تسجيل الدخول…' },

  // ─── Progress stat suffixes ──────────────────────────────────────
  'parent.studied_count_suffix': { en: 'studied', ar: 'اندرست' },
  'parent.studied_prefix': { en: 'Studied', ar: 'درس' },
  'parent.submitting_deletion': {
    en: 'Submitting request…',
    ar: 'يتم إرسال الطلب…',
  },
  'parent.suggested_focus': { en: 'Suggested focus', ar: 'التركيز المقترح' },

  // ─── Time / relative dates ───────────────────────────────────────
  'parent.today': { en: 'Today', ar: 'اليوم' },
  'parent.top_quiz_result': { en: 'Top quiz result', ar: 'أفضل نتيجة اختبار' },
  'parent.try_again': { en: 'Try again', ar: 'حاول مرّة ثانية' },

  // ─── Delete-data confirm typing ──────────────────────────────────
  'parent.type_label_prefix': { en: 'Type', ar: 'اكتب' },
  'parent.type_label_suffix': { en: 'to confirm', ar: 'للتأكيد' },
  'parent.type_to_confirm_prefix': {
    en: 'To confirm, type',
    ar: 'للتأكيد، اكتب',
  },
  'parent.type_to_confirm_suffix': {
    en: 'in the box below.',
    ar: 'في الخانة تحت.',
  },

  // ─── Password update button ──────────────────────────────────────
  'parent.update_password': { en: 'Update password', ar: 'تحديث كلمة المرور' },
  'parent.updating': { en: 'Updating…', ar: 'يتم التحديث…' },
  'parent.use_signup_email': {
    en: 'Use the email address you signed up with.',
    ar: 'استخدم الإيميل اللي سجّلت فيه.',
  },

  // ─── Dashboard quick links ───────────────────────────────────────
  'parent.view_detailed_progress': {
    en: 'View detailed progress',
    ar: 'عرض التقدّم المفصّل',
  },
  'parent.view_detailed_progress_desc': {
    en: 'Quiz scores, poems and reading age.',
    ar: 'درجات الاختبارات والقصائد والعمر القرائي.',
  },

  // ─── Delete-data confirmation copy ───────────────────────────────
  'parent.want_to_delete_prefix': {
    en: 'Are you sure you want to delete the data for',
    ar: 'متأكّد إنك تبي تحذف بيانات',
  },
  'parent.want_to_delete_suffix': {
    en: '? This cannot be undone.',
    ar: '؟ هذا الإجراء ما يمكن التراجع عنه.',
  },

  // ─── Reports: relative week labels ───────────────────────────────
  'parent.week_ago_plural': { en: 'weeks ago', ar: 'أسابيع مضت' },
  'parent.week_ago_singular': { en: 'week ago', ar: 'أسبوع مضى' },
  'parent.week_by_week_activity': {
    en: 'Week-by-week activity',
    ar: 'النشاط أسبوعاً بأسبوع',
  },

  // ─── Weekly email reports ────────────────────────────────────────
  'parent.weekly_email_reports': {
    en: 'Weekly email reports',
    ar: 'تقارير البريد الأسبوعية',
  },
  'parent.weekly_email_reports_desc': {
    en: "A summary of your child's week, sent every Sunday.",
    ar: 'ملخّص أسبوع طفلك، يوصلك كل يوم أحد.',
  },
  'parent.weekly_report_for': {
    en: 'weekly report for',
    ar: 'التقرير الأسبوعي لـ',
  },
  'parent.weekly_reports_subtitle_prefix': {
    en: 'A preview of the report emailed to',
    ar: 'معاينة للتقرير اللي يوصل بالإيميل إلى',
  },
  'parent.weekly_reports_title': {
    en: 'Weekly reports',
    ar: 'التقارير الأسبوعية',
  },

  // ─── Login welcome ───────────────────────────────────────────────
  'parent.welcome_back': { en: 'Welcome back', ar: 'حيّاك الله من جديد' },
  'parent.what_you_get': { en: 'What you get', ar: 'وش تحصل عليه' },

  // ─── Link-child: where to find the code ──────────────────────────
  'parent.where_get_code_q': {
    en: 'Where do I find the code?',
    ar: 'وين ألقى الرمز؟',
  },
  'parent.where_get_code_step1': {
    en: 'Ask your child to log in to their student dashboard.',
    ar: 'خلّ طفلك يسجّل دخوله في لوحة الطالب.',
  },
  'parent.where_get_code_step2': {
    en: 'They will find a 6-character link code in their account.',
    ar: 'بيلقى رمز ربط من 6 أحرف في حسابه.',
  },
  'parent.where_get_code_step3': {
    en: 'Enter that code above to link your accounts.',
    ar: 'أدخل الرمز فوق عشان تربط حسابيكم.',
  },

  // ─── Progress: reading-age unit ──────────────────────────────────
  'parent.years_estimated': { en: 'years (estimated)', ar: 'سنة (تقديري)' },
  'parent.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'parent.your_child_capitalized': { en: 'Your child', ar: 'طفلك' },
  'parent.your_details': { en: 'Your details', ar: 'بياناتك' },
  'parent.your_email_default': {
    en: 'you@example.com',
    ar: 'you@example.com',
  },
  'parent.your_password_placeholder': {
    en: 'Enter your password',
    ar: 'أدخل كلمة المرور',
  },
}
