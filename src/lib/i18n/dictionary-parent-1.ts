/**
 * Parent dictionary - part 1 of 2 (Bucket A, Tier-2).
 *
 * Covers the FIRST alphabetical half of the `parent.*` namespace
 * (`parent.account` … `parent.linked_child`). Part 2 picks up from
 * `parent.linked_to_prefix`.
 *
 * EN authored fresh against the consuming parent pages/components
 * (the prior `dictionary-audit-fix.ts` values for these keys were
 * placeholder junk and were NOT copied). Tone: plain, warm and
 * reassuring - these screens are for parents tracking a child's
 * GCSE/IGCSE English revision.
 *
 * Khaleeji AR uses a natural Gulf register consistent with
 * `src/lib/eal/curriculum.ts` (e.g. وايد، اللي، تقدر، خلّ، نبّهك)
 * - not MSA, not literal, not clinical.
 *
 * Screenshot-fixes keys that already carry genuine Khaleeji
 * (`ar !== en`) are intentionally omitted: avg_quiz_score,
 * email_address, email_required, full_name, games_played,
 * hide_password.
 */

export const PARENT_1_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ── Settings: account card ────────────────────────────────────────────────
  'parent.account': { en: 'Account', ar: 'الحساب' },
  'parent.account_desc': {
    en: 'Your account details. To change these, contact our support team.',
    ar: 'تفاصيل حسابك. لو تبي تعدّل شي منها، تواصل مع فريق الدعم.',
  },
  'parent.account_linked': {
    en: "You're now linked to your child's account.",
    ar: 'تم ربطك بحساب طفلك.',
  },
  'parent.addon_renewal': {
    en: 'Renews automatically with your subscription.',
    ar: 'يتجدّد تلقائيًا مع اشتراكك.',
  },

  // ── Settings: AI features (Children's Code) ───────────────────────────────
  'parent.ai_a_provider': {
    en: 'Marking is powered by a trusted AI provider under a strict data agreement. Your child’s work is never used to train AI models.',
    ar: 'التصحيح يشتغل عبر مزوّد ذكاء اصطناعي موثوق وضمن اتفاقية بيانات صارمة. شغل طفلك ما يُستخدم أبدًا لتدريب نماذج الذكاء الاصطناعي.',
  },
  'parent.ai_a_what_sees': {
    en: 'Only the essay or answer your child submits for feedback - never their name, email or any account details.',
    ar: 'بس المقال أو الإجابة اللي يرسلها طفلك عشان ياخذ ملاحظات - أبدًا ما يشوف اسمه ولا إيميله ولا أي تفاصيل حساب.',
  },
  'parent.ai_explainer_link': {
    en: 'Read how AI marking works',
    ar: 'اقرأ كيف يشتغل التصحيح بالذكاء الاصطناعي',
  },
  'parent.ai_features_desc': {
    en: 'Control whether your child can use AI-assisted feedback on their written work.',
    ar: 'تحكّم في إذا كان طفلك يقدر يستخدم الملاحظات المدعومة بالذكاء الاصطناعي على كتاباته.',
  },
  'parent.ai_features_title': { en: 'AI features', ar: 'مزايا الذكاء الاصطناعي' },
  'parent.ai_q_provider': { en: 'Who provides the AI?', ar: 'مين يوفّر الذكاء الاصطناعي؟' },
  'parent.ai_q_what_sees': { en: 'What does the AI see?', ar: 'شنو يشوف الذكاء الاصطناعي؟' },
  'parent.ai_toggle_desc': {
    en: 'When off, your child gets teacher-style model answers instead of AI feedback.',
    ar: 'لمّا يكون مطفّأ، طفلك ياخذ نماذج إجابات على طريقة المعلّم بدل ملاحظات الذكاء الاصطناعي.',
  },
  'parent.ai_toggle_label': { en: 'Allow AI feedback', ar: 'اسمح بملاحظات الذكاء الاصطناعي' },

  // ── Auth: shared ──────────────────────────────────────────────────────────
  'parent.already_have_account': { en: 'Already have an account?', ar: 'عندك حساب من قبل؟' },

  // ── Reports / dashboard: grades summary ───────────────────────────────────
  'parent.average_label': { en: 'Average', ar: 'المعدّل' },
  'parent.average_score': { en: 'Average score', ar: 'المعدّل العام للدرجات' },

  // ── Link-child ────────────────────────────────────────────────────────────
  'parent.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة المتابعة' },

  // ── Settings: billing ─────────────────────────────────────────────────────
  'parent.badge_active': { en: 'Active', ar: 'فعّال' },

  // ── Signup: benefits ──────────────────────────────────────────────────────
  'parent.benefit_detailed_breakdown': {
    en: 'A detailed breakdown of quizzes, poems and progress',
    ar: 'تفصيل واضح للاختبارات والقصائد والتقدّم',
  },
  'parent.benefit_read_only': {
    en: "A safe, read-only view - you can't change your child's work",
    ar: 'عرض آمن للقراءة فقط - ما تقدر تعدّل شغل طفلك',
  },
  'parent.benefit_weekly_reports': {
    en: 'A weekly progress email straight to your inbox',
    ar: 'تقرير تقدّم أسبوعي يوصلك على إيميلك مباشرة',
  },

  // ── Settings: billing card ────────────────────────────────────────────────
  'parent.billing_desc': {
    en: 'Manage your parent add-on and subscription.',
    ar: 'أدِر إضافة وليّ الأمر واشتراكك.',
  },
  'parent.billing_note': {
    en: 'Your billing is handled securely. We never store your card details.',
    ar: 'الدفع يتم بشكل آمن. ما نخزّن أبدًا تفاصيل بطاقتك.',
  },
  'parent.billing_title': { en: 'Billing', ar: 'الفوترة' },

  // ── Delete-data: confirm bullets ──────────────────────────────────────────
  'parent.bullet_grace_period': {
    en: 'There is a 30-day grace period before anything is permanently removed',
    ar: 'في فترة سماح 30 يوم قبل ما ينحذف أي شي نهائيًا',
  },
  'parent.bullet_what_deleted': {
    en: "Your child's essays, progress and AI feedback will be deleted",
    ar: 'مقالات طفلك وتقدّمه وملاحظات الذكاء الاصطناعي بتنحذف',
  },
  'parent.bullet_what_retained': {
    en: 'A small amount of data is kept where the law requires it',
    ar: 'يتم الاحتفاظ بكمية بسيطة من البيانات لمّا يلزم القانون',
  },

  // ── Common actions ────────────────────────────────────────────────────────
  'parent.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'parent.cancel_via_dpo_prefix': {
    en: 'To cancel this request, email',
    ar: 'لإلغاء هذا الطلب، راسل',
  },
  'parent.cancel_via_dpo_suffix': {
    en: 'before the grace period ends.',
    ar: 'قبل ما تنتهي فترة السماح.',
  },
  'parent.cannot_be_undone': {
    en: 'This action cannot be undone.',
    ar: 'هذا الإجراء ما يمكن التراجع عنه.',
  },

  // ── Settings: password ────────────────────────────────────────────────────
  'parent.change_password': { en: 'Change password', ar: 'تغيير الرمز السري' },
  'parent.changes_saved_locally': {
    en: 'Changes are saved when you click Save.',
    ar: 'التغييرات تنحفظ لمّا تضغط حفظ.',
  },

  // ── Signup: link code field ───────────────────────────────────────────────
  'parent.child_link_code': { en: "Child's link code", ar: 'رمز ربط الطفل' },
  'parent.clear_code': { en: 'Clear code', ar: 'مسح الرمز' },
  'parent.code_validity_note': {
    en: 'Codes expire after a short time. If yours has expired, ask your child to generate a new one.',
    ar: 'الرموز تنتهي صلاحيتها بعد وقت قصير. لو رمزك انتهى، خلّ طفلك يطلّع رمز جديد.',
  },

  // ── Dashboard: recent activity ────────────────────────────────────────────
  'parent.completed': { en: 'Completed', ar: 'مكتمل' },
  'parent.completed_count_suffix': { en: 'completed', ar: 'مكتمل' },

  // ── Delete-data: confirmation ─────────────────────────────────────────────
  'parent.confirm_deletion_btn': { en: 'Confirm deletion request', ar: 'تأكيد طلب الحذف' },
  'parent.confirm_deletion_request': {
    en: 'Confirm deletion request',
    ar: 'تأكيد طلب الحذف',
  },
  'parent.confirm_new_password': { en: 'Confirm new password', ar: 'أكّد الرمز السري الجديد' },

  // ── Settings: account support line ────────────────────────────────────────
  'parent.contact_support_prefix': {
    en: 'Need to update these details? Contact us at',
    ar: 'تبي تعدّل هالتفاصيل؟ تواصل معنا على',
  },

  // ── Signup: header ────────────────────────────────────────────────────────
  'parent.create_account_subtitle': {
    en: "Track your child's English progress with weekly reports and a clear view of how they're doing.",
    ar: 'تابع تقدّم طفلك في الإنجليزي مع تقارير أسبوعية وعرض واضح لمستواه.',
  },
  'parent.create_account_title': { en: 'Create a parent account', ar: 'أنشئ حساب وليّ أمر' },
  'parent.create_parent_account': { en: 'Create parent account', ar: 'إنشاء حساب وليّ الأمر' },
  'parent.creating_account': { en: 'Creating account…', ar: 'جارٍ إنشاء الحساب…' },
  'parent.current_password': { en: 'Current password', ar: 'الرمز السري الحالي' },

  // ── Dashboard: header ─────────────────────────────────────────────────────
  'parent.dashboard_subtitle_prefix': { en: "Here's how", ar: 'هذي نظرة على وضع' },
  'parent.dashboard_subtitle_suffix': {
    en: 'is getting on with their revision.',
    ar: 'مع مراجعته.',
  },
  'parent.dashboard_title': { en: 'Dashboard', ar: 'لوحة المتابعة' },

  // ── Delete-data: retained data ────────────────────────────────────────────
  'parent.data_retained_legal': {
    en: 'Data we keep for legal reasons',
    ar: 'بيانات نحتفظ فيها لأسباب قانونية',
  },
  'parent.data_retained_legal_desc': {
    en: 'A limited amount of data must be kept to meet our legal obligations.',
    ar: 'لازم نحتفظ بكمية محدودة من البيانات عشان نوفّي بالتزاماتنا القانونية.',
  },
  'parent.data_to_be_deleted': { en: 'What will be deleted', ar: 'شنو بينحذف' },
  'parent.data_to_be_deleted_desc': {
    en: 'Everything below will be permanently removed after the grace period.',
    ar: 'كل اللي تحت بينحذف نهائيًا بعد فترة السماح.',
  },

  // ── Dashboard: relative dates ─────────────────────────────────────────────
  'parent.days_ago': { en: 'days ago', ar: 'قبل أيام' },

  // ── Delete-data: deleted categories ───────────────────────────────────────
  'parent.del_account_desc': {
    en: 'Your parent account and login details.',
    ar: 'حساب وليّ الأمر وبيانات دخولك.',
  },
  'parent.del_account_label': { en: 'Parent account', ar: 'حساب وليّ الأمر' },
  'parent.del_ai_feedback_desc': {
    en: 'All AI marking and feedback generated for your child.',
    ar: 'كل التصحيح والملاحظات اللي طلّعها الذكاء الاصطناعي لطفلك.',
  },
  'parent.del_ai_feedback_label': { en: 'AI feedback', ar: 'ملاحظات الذكاء الاصطناعي' },
  'parent.del_essays_desc': {
    en: 'Every essay and written answer your child has submitted.',
    ar: 'كل مقال وإجابة مكتوبة رسلها طفلك.',
  },
  'parent.del_essays_label': { en: 'Essays & written work', ar: 'المقالات والكتابات' },
  'parent.del_privacy_desc': {
    en: 'Saved preferences and privacy settings.',
    ar: 'التفضيلات المحفوظة وإعدادات الخصوصية.',
  },
  'parent.del_privacy_label': { en: 'Privacy settings', ar: 'إعدادات الخصوصية' },
  'parent.del_progress_desc': {
    en: 'Quiz scores, studied poems and revision progress.',
    ar: 'درجات الاختبارات والقصائد المدروسة وتقدّم المراجعة.',
  },
  'parent.del_progress_label': { en: 'Progress & scores', ar: 'التقدّم والدرجات' },

  // ── Delete-data: header / flow ────────────────────────────────────────────
  'parent.delete_data_subtitle': {
    en: "Request permanent deletion of your child's data.",
    ar: 'اطلب حذف بيانات طفلك نهائيًا.',
  },
  'parent.delete_data_title': { en: 'Delete data', ar: 'حذف البيانات' },
  'parent.delete_request_prefix': { en: 'Request deletion of', ar: 'اطلب حذف بيانات' },
  'parent.delete_request_suffix': {
    en: "'s data from The English Hub.",
    ar: 'من The English Hub.',
  },
  'parent.deletion_received_prefix': {
    en: "We've received your request to delete",
    ar: 'استلمنا طلبك لحذف بيانات',
  },
  'parent.deletion_received_suffix': {
    en: "'s data. A confirmation has been sent to",
    ar: '. أرسلنا تأكيد على',
  },
  'parent.deletion_request_failed': {
    en: "We couldn't process your deletion request",
    ar: 'ما قدرنا نعالج طلب الحذف',
  },
  'parent.deletion_submit_failed': {
    en: 'Failed to submit the deletion request. Please try again.',
    ar: 'ما تم إرسال طلب الحذف. حاول مرّة ثانية.',
  },
  'parent.deletion_submitted': { en: 'Deletion request submitted', ar: 'تم إرسال طلب الحذف' },

  // ── Progress page: header ─────────────────────────────────────────────────
  'parent.detailed_progress_subtitle_prefix': {
    en: 'A closer look at how',
    ar: 'نظرة أعمق على وضع',
  },
  'parent.detailed_progress_subtitle_suffix': {
    en: 'is progressing across English skills.',
    ar: 'في مهارات الإنجليزي.',
  },
  'parent.detailed_progress_title': { en: 'Detailed progress', ar: 'التقدّم بالتفصيل' },

  // ── Settings: account fields ──────────────────────────────────────────────
  'parent.email': { en: 'Email', ar: 'الإيميل' },

  // ── Reports: email preview body ───────────────────────────────────────────
  'parent.email_body_during': { en: 'has been up to during', ar: 'سوّاه خلال' },
  'parent.email_body_on_hub': {
    en: 'on The English Hub.',
    ar: 'على The English Hub.',
  },
  'parent.email_body_prefix': { en: "Here's a quick summary of what", ar: 'هذي خلاصة سريعة لشنو' },
  'parent.email_from': { en: 'From:', ar: 'من:' },
  'parent.email_greeting': { en: 'Hi', ar: 'مرحبًا' },
  'parent.email_preview': { en: 'Email preview', ar: 'معاينة الإيميل' },
  'parent.email_subject': { en: 'Subject:', ar: 'الموضوع:' },
  'parent.email_to': { en: 'To:', ar: 'إلى:' },

  // ── Signup: link code hint ────────────────────────────────────────────────
  'parent.find_link_code_hint': {
    en: 'Enter your details and the link code from your child to get started.',
    ar: 'دخّل بياناتك ورمز الربط اللي عند طفلك عشان تبدأ.',
  },
  'parent.fix_errors_below': {
    en: 'Please fix the errors below.',
    ar: 'صحّح الأخطاء اللي تحت من فضلك.',
  },

  // ── Reports: suggested focus ──────────────────────────────────────────────
  'parent.focus_poem': {
    en: 'Revisit one set poem together and talk through its key themes',
    ar: 'راجعوا قصيدة مقرّرة مع بعض وتكلّموا عن أفكارها الأساسية',
  },
  'parent.focus_quiz': {
    en: 'Try a short practice quiz to keep skills sharp',
    ar: 'جرّبوا اختبار تدريبي قصير عشان تبقى المهارات حاضرة',
  },
  'parent.focus_reading': {
    en: 'Read for 15 minutes a day to build vocabulary and confidence',
    ar: 'اقرؤوا 15 دقيقة باليوم عشان تكبر الحصيلة والثقة',
  },

  // ── Login: forgot password ────────────────────────────────────────────────
  'parent.forgot_password': { en: 'Forgot password?', ar: 'نسيت الرمز السري؟' },

  // ── Signup: validation ────────────────────────────────────────────────────
  'parent.full_name_required': { en: 'Full name is required', ar: 'الاسم الكامل مطلوب' },

  // ── Dashboard: recent activity (game) ─────────────────────────────────────
  'parent.game_prefix': { en: 'Played', ar: 'لعب' },
  'parent.games_label': { en: 'Games', ar: 'الألعاب' },
  'parent.games_played_desc': {
    en: 'Learning games your child has played.',
    ar: 'ألعاب التعلّم اللي لعبها طفلك.',
  },
  'parent.games_played_title': { en: 'Games played', ar: 'الألعاب اللي لعبها' },

  // ── Delete-data: grace period ─────────────────────────────────────────────
  'parent.grace_period_30day': { en: '30-day grace period', ar: 'فترة سماح 30 يوم' },
  'parent.grace_period_explanation': {
    en: 'You can change your mind during this time and nothing will be lost.',
    ar: 'تقدر تغيّر رأيك خلال هالمدة وما بيضيع شي.',
  },

  // ── Dashboard: grades summary ─────────────────────────────────────────────
  'parent.grades_summary': { en: 'Grades summary', ar: 'ملخّص الدرجات' },
  'parent.grades_summary_desc': {
    en: 'A quick snapshot of quizzes and scores so far.',
    ar: 'لمحة سريعة عن الاختبارات والدرجات لحدّ الحين.',
  },

  // ── Reports / progress: stats labels ──────────────────────────────────────
  'parent.highest_label': { en: 'Highest', ar: 'الأعلى' },
  'parent.highlight_of_week': { en: 'Highlight of the week', ar: 'أبرز إنجاز هالأسبوع' },
  'parent.hub_coverage': { en: 'Hub coverage', ar: 'تغطية المنصّة' },
  'parent.hub_coverage_explainer': {
    en: 'How much of the syllabus your child has covered on The English Hub.',
    ar: 'كم غطّى طفلك من المنهج على The English Hub.',
  },

  // ── Signup: benefits panel ────────────────────────────────────────────────
  'parent.included_with_premium': {
    en: 'Included with your premium subscription',
    ar: 'مشمول في اشتراكك المميّز',
  },

  // ── Login: error ──────────────────────────────────────────────────────────
  'parent.invalid_credentials': {
    en: "That email or password doesn't look right. Please try again.",
    ar: 'الإيميل أو الرمز السري مو صحيح. حاول مرّة ثانية.',
  },

  // ── Dashboard: weekly chart ───────────────────────────────────────────────
  'parent.last_8_weeks': { en: 'Last 8 weeks', ar: 'آخر 8 أسابيع' },
  'parent.last_8_weeks_desc': {
    en: 'Estimated learning time each week.',
    ar: 'وقت التعلّم التقريبي كل أسبوع.',
  },
  'parent.learning_game_default': { en: 'Learning game', ar: 'لعبة تعليمية' },
  'parent.learning_time_8_weeks': {
    en: 'Learning time over 8 weeks',
    ar: 'وقت التعلّم خلال 8 أسابيع',
  },

  // ── Delete-data: footnote ─────────────────────────────────────────────────
  'parent.legal_footnote_prefix': {
    en: 'For any questions about your data, contact our Data Protection Officer at',
    ar: 'لأي استفسار عن بياناتك، تواصل مع مسؤول حماية البيانات على',
  },

  // ── Link-child ────────────────────────────────────────────────────────────
  'parent.link_account': { en: 'Link account', ar: 'ربط الحساب' },
  'parent.link_code': { en: 'Link code', ar: 'رمز الربط' },
  'parent.link_code_char_aria': { en: 'Link code character', ar: 'حرف رمز الربط' },
  'parent.link_code_help': {
    en: 'Ask your child for the code shown on their dashboard.',
    ar: 'اطلب من طفلك الرمز اللي يظهر على لوحته.',
  },
  'parent.link_code_required': { en: 'Link code is required', ar: 'رمز الربط مطلوب' },
  'parent.link_could_not': {
    en: "We couldn't link that code. Please check it and try again.",
    ar: 'ما قدرنا نربط هالرمز. تأكّد منه وحاول مرّة ثانية.',
  },
  'parent.link_your_child': { en: 'Link your child', ar: 'اربط طفلك' },
  'parent.link_your_child_desc': {
    en: "Enter the code from your child's dashboard to connect your accounts.",
    ar: 'دخّل الرمز اللي بلوحة طفلك عشان تربط حسابيكم.',
  },
  'parent.linked_child': { en: 'Linked child', ar: 'الطفل المربوط' },
}
