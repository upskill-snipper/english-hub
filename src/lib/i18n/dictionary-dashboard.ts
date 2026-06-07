/**
 * Dashboard chrome i18n entries for the logged-in learner/parent/teacher
 * dashboard surface (src/app/dashboard/**).
 *
 * Covers pages whose UI chrome was previously hard-coded English and so
 * leaked English in Arabic mode: consent management, all-essays list,
 * essay feedback view, papers navigation, human-review request + status,
 * subscription management, class analytics, learning profile, and the
 * printable worksheets reference.
 *
 * Namespaced under `dash.*` with distinct sub-namespaces to avoid
 * collision with the existing `dash.*` keys (main dashboard page) and the
 * `dashboard.*` keys in dictionary-dash-internal.ts / dictionary.ts.
 *
 * Khaleeji (Gulf) Arabic conventions (mirrored from dictionary.ts):
 *   شنو, شلونك, أبغى, وايد, الحين, إحنا, روح, شوف, دوّر, سكّر, ببلاش, لحظة
 * BANNED (Levantine): شو, بحكي, كيفك, ليش
 *
 * Latin retention inside Arabic: brand names (The English Hub), exam codes
 * (GCSE, IGCSE, AQA, OCR, Edexcel, CAIE, WJEC, AO1-AO6, KS3), £ amounts,
 * numbers, email addresses, technical terms (AI, CSV, JSON, GDPR, ICO).
 *
 * STUDY CONTENT (essay prose, quotes, model answers, mark-scheme
 * descriptors) is NOT translated and is not present here - only chrome.
 *
 * Annotated as Record (NOT `as const`) so the orchestrator can merge it.
 */

export const DASHBOARD_CHROME_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    /* ─── Consent management (dashboard/consent) ─────────────────── */
    'dash.consent.back': { en: '← Back to Dashboard', ar: '← ارجع للوحة' },
    'dash.consent.title': { en: 'Manage Your Consents', ar: 'دير موافقاتك' },
    'dash.consent.intro': {
      en: 'View and manage the consents you have given. Under UK GDPR, you have the right to withdraw optional consents at any time. Essential consents are required for the service to function.',
      ar: 'شوف ودير الموافقات اللي عطيتها. حسب UK GDPR، عندك الحق تسحب الموافقات الاختيارية في أي وقت. الموافقات الأساسية لازمة عشان الخدمة تشتغل.',
    },
    'dash.consent.loading': {
      en: 'Loading your consent records...',
      ar: 'لحظة، نجيب سجلات موافقاتك...',
    },
    'dash.consent.err.load': {
      en: 'Could not load your consent records. Please try again.',
      ar: 'ما قدرنا نجيب سجلات موافقاتك. حاول مرة ثانية.',
    },
    'dash.consent.err.history': {
      en: 'Could not load consent history.',
      ar: 'ما قدرنا نجيب سجل الموافقات.',
    },
    'dash.consent.err.withdraw': {
      en: 'Failed to withdraw consent.',
      ar: 'ما قدرنا نسحب الموافقة.',
    },
    'dash.consent.confirm_withdraw': {
      en: 'Are you sure you want to withdraw your "{label}" consent? This action will be recorded.',
      ar: 'متأكد تبغى تسحب موافقة "{label}"؟ بنسجّل هالإجراء.',
    },
    'dash.consent.withdrawn_success': {
      en: '"{label}" consent has been withdrawn.',
      ar: 'تم سحب موافقة "{label}".',
    },
    'dash.consent.active_title': { en: 'Active Consents', ar: 'الموافقات الفعّالة' },
    'dash.consent.none_active': { en: 'No active consents found.', ar: 'ما فيه موافقات فعّالة.' },
    'dash.consent.badge_essential': { en: 'Essential', ar: 'أساسية' },
    'dash.consent.badge_optional': { en: 'Optional', ar: 'اختيارية' },
    'dash.consent.granted': { en: 'Granted:', ar: 'تمت الموافقة:' },
    'dash.consent.policy_version': { en: 'Policy version:', ar: 'إصدار السياسة:' },
    'dash.consent.method': { en: 'Method:', ar: 'الطريقة:' },
    'dash.consent.withdraw': { en: 'Withdraw', ar: 'اسحب' },
    'dash.consent.withdrawing': { en: 'Withdrawing...', ar: 'لحظة، نسحب...' },
    'dash.consent.essential_note_a': {
      en: 'This consent is required for the service to function. To withdraw it, you must',
      ar: 'هالموافقة لازمة عشان الخدمة تشتغل. عشان تسحبها، لازم',
    },
    'dash.consent.essential_note_link': {
      en: 'request account deletion',
      ar: 'تطلب حذف الحساب',
    },
    'dash.consent.hide_history': { en: 'Hide Full History', ar: 'خفِّ السجل الكامل' },
    'dash.consent.view_history': { en: 'View Full History', ar: 'شوف السجل الكامل' },
    'dash.consent.download_record': {
      en: 'Download Consent Record (JSON)',
      ar: 'نزّل سجل الموافقات (JSON)',
    },
    'dash.consent.history_title': { en: 'Full Consent History', ar: 'سجل الموافقات الكامل' },
    'dash.consent.history_intro': {
      en: 'Complete audit trail of all consent changes, in chronological order.',
      ar: 'سجل كامل لكل تغييرات الموافقات، بالترتيب الزمني.',
    },
    'dash.consent.no_history': { en: 'No history found.', ar: 'ما فيه سجل.' },
    'dash.consent.col_type': { en: 'Type', ar: 'النوع' },
    'dash.consent.col_action': { en: 'Action', ar: 'الإجراء' },
    'dash.consent.col_version': { en: 'Version', ar: 'الإصدار' },
    'dash.consent.col_date': { en: 'Date', ar: 'التاريخ' },
    'dash.consent.col_method': { en: 'Method', ar: 'الطريقة' },
    'dash.consent.action_granted': { en: 'Granted', ar: 'موافَق' },
    'dash.consent.action_withdrawn': { en: 'Withdrawn', ar: 'مسحوبة' },
    'dash.consent.rights_title': { en: 'Your data rights', ar: 'حقوقك في بياناتك' },
    'dash.consent.rights_body': {
      en: 'Under UK GDPR, you can withdraw optional consents at any time without affecting the lawfulness of processing carried out before withdrawal. Essential consents (Terms, Privacy Policy, AI Processing) are required for the service to operate. If you wish to withdraw these, you can request account deletion from your privacy settings.',
      ar: 'حسب UK GDPR، تقدر تسحب الموافقات الاختيارية في أي وقت بدون ما يأثر على قانونية المعالجة اللي صارت قبل السحب. الموافقات الأساسية (الشروط، سياسة الخصوصية، معالجة AI) لازمة عشان الخدمة تشتغل. لو تبغى تسحبها، تقدر تطلب حذف الحساب من إعدادات الخصوصية.',
    },
    // Consent type labels + descriptions
    'dash.consent.type.terms.label': { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    'dash.consent.type.terms.desc': {
      en: 'Agreement to the platform terms of service.',
      ar: 'الموافقة على شروط استخدام المنصّة.',
    },
    'dash.consent.type.privacy.label': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    'dash.consent.type.privacy.desc': {
      en: 'Acknowledgement of how your personal data is processed.',
      ar: 'إقرار بكيفية معالجة بياناتك الشخصية.',
    },
    'dash.consent.type.ai.label': { en: 'AI Essay Analysis', ar: 'تحليل المقالات بالـ AI' },
    'dash.consent.type.ai.desc': {
      en: 'Consent for AI-powered analysis of your essays to provide feedback.',
      ar: 'موافقة على تحليل مقالاتك بالـ AI عشان نعطيك ملاحظات.',
    },
    'dash.consent.type.transfer.label': {
      en: 'International Data Transfer',
      ar: 'نقل البيانات الدولي',
    },
    'dash.consent.type.transfer.desc': {
      en: 'Consent for transfer of data outside the UK (required for Qatar-based users).',
      ar: 'موافقة على نقل البيانات خارج UK (لازمة للمستخدمين في قطر).',
    },
    'dash.consent.type.marketing.label': {
      en: 'Marketing Communications',
      ar: 'الرسائل التسويقية',
    },
    'dash.consent.type.marketing.desc': {
      en: 'Receive promotional emails and product updates.',
      ar: 'استقبال إيميلات ترويجية وتحديثات المنتج.',
    },
    'dash.consent.type.cooling.label': {
      en: 'Cooling-Off Period Waiver',
      ar: 'التنازل عن فترة الإلغاء',
    },
    'dash.consent.type.cooling.desc': {
      en: 'Waiver of the 14-day cooling-off period for immediate service access.',
      ar: 'تنازل عن فترة الإلغاء (14 يوم) عشان توصل للخدمة على طول.',
    },
    'dash.consent.type.cookie_analytics.label': {
      en: 'Analytics Cookies',
      ar: 'كوكيز التحليلات',
    },
    'dash.consent.type.cookie_analytics.desc': {
      en: 'Allow analytics cookies to help us understand how you use the site.',
      ar: 'اسمح بكوكيز التحليلات عشان نفهم كيف تستخدم الموقع.',
    },
    'dash.consent.type.cookie_marketing.label': {
      en: 'Marketing Cookies',
      ar: 'كوكيز التسويق',
    },
    'dash.consent.type.cookie_marketing.desc': {
      en: 'Allow marketing cookies for personalised advertising.',
      ar: 'اسمح بكوكيز التسويق عشان إعلانات مخصّصة لك.',
    },

    /* ─── Learning profile (dashboard/learning) ──────────────────── */
    'dash.learning.back': { en: 'Back to dashboard', ar: 'ارجع للوحة' },
    'dash.learning.eyebrow': { en: 'Learning profile', ar: 'ملف التعلّم' },
    'dash.learning.title': {
      en: 'Your strengths & what to focus on next',
      ar: 'نقاط قوّتك وعلى شنو تركّز بعدها',
    },
    'dash.learning.intro': {
      en: 'Built from the time you spend and the accuracy you reach in every game. We weight your most recent rounds most heavily, track whether each skill is improving or slipping, and recommend the next best practice - so revision goes where it counts.',
      ar: 'مبني على الوقت اللي تقضيه والدقّة اللي توصلها في كل لعبة. نعطي جولاتك الأخيرة وزن أكبر، نتابع إذا كل مهارة تتحسّن ولا تتراجع، ونرشّح لك أفضل تمرين جاي - عشان المراجعة تروح للمكان المهم.',
    },
    'dash.learning.footer': {
      en: 'This profile is built on your device from every game you play and syncs to your account when you’re signed in. Strengths are skills you score 80%+ on consistently; focus areas are below 60% or slipping.',
      ar: 'هالملف ينبني على جهازك من كل لعبة تلعبها ويتزامن مع حسابك لما تسجّل دخول. نقاط القوّة هي المهارات اللي تجيب فيها +80% باستمرار؛ ومناطق التركيز تحت 60% ولا تتراجع.',
    },

    /* ─── All essays list (dashboard/essays) ─────────────────────── */
    'dash.essays.bc_dashboard': { en: 'Dashboard', ar: 'اللوحة' },
    'dash.essays.bc_current': { en: 'All Essays', ar: 'كل المقالات' },
    'dash.essays.title': { en: 'Your Essays', ar: 'مقالاتك' },
    'dash.essays.count_one': { en: 'essay submitted', ar: 'مقالة مرسلة' },
    'dash.essays.count_many': { en: 'essays submitted', ar: 'مقالة مرسلة' },
    'dash.essays.new': { en: 'New Essay', ar: 'مقالة جديدة' },
    'dash.essays.sort_by': { en: 'Sort by:', ar: 'رتّب حسب:' },
    'dash.essays.sort_date': { en: 'Date', ar: 'التاريخ' },
    'dash.essays.sort_score': { en: 'Score', ar: 'الدرجة' },
    'dash.essays.empty': {
      en: 'You haven’t submitted any essays yet.',
      ar: 'ما أرسلت أي مقالة لين الحين.',
    },
    'dash.essays.empty_cta': { en: 'Write Your First Essay', ar: 'اكتب أول مقالة لك' },
    'dash.essays.col_title': { en: 'Title', ar: 'العنوان' },
    'dash.essays.col_subject': { en: 'Subject', ar: 'المادة' },
    'dash.essays.col_board': { en: 'Board', ar: 'البورد' },
    'dash.essays.col_score': { en: 'Score', ar: 'الدرجة' },
    'dash.essays.col_date': { en: 'Date', ar: 'التاريخ' },
    'dash.essays.col_actions': { en: 'Actions', ar: 'الإجراءات' },
    'dash.essays.confirm': { en: 'Confirm', ar: 'أكّد' },
    'dash.essays.cancel': { en: 'Cancel', ar: 'إلغاء' },
    'dash.essays.view': { en: 'View', ar: 'شوف' },
    'dash.essays.delete': { en: 'Delete', ar: 'احذف' },
    'dash.essays.view_feedback': { en: 'View Feedback', ar: 'شوف الملاحظات' },
    'dash.essays.confirm_delete': { en: 'Confirm Delete', ar: 'أكّد الحذف' },

    /* ─── Essay feedback view (dashboard/essay/[id]) ─────────────── */
    'dash.essay_view.bc_dashboard': { en: 'Dashboard', ar: 'اللوحة' },
    'dash.essay_view.bc_essays': { en: 'Essays', ar: 'المقالات' },
    'dash.essay_view.prompt': { en: 'Prompt:', ar: 'السؤال:' },
    'dash.essay_view.edit': { en: 'Edit', ar: 'عدّل' },
    'dash.essay_view.delete': { en: 'Delete', ar: 'احذف' },
    'dash.essay_view.confirm_delete': { en: 'Confirm Delete', ar: 'أكّد الحذف' },
    'dash.essay_view.cancel': { en: 'Cancel', ar: 'إلغاء' },
    'dash.essay_view.content_notice': { en: 'Content Notice', ar: 'تنبيه محتوى' },
    'dash.essay_view.your_essay': { en: 'Your Essay', ar: 'مقالتك' },
    'dash.essay_view.words': { en: 'words', ar: 'كلمة' },
    'dash.essay_view.overall_score': { en: 'Overall Score', ar: 'الدرجة الكلّية' },
    'dash.essay_view.grade_prefix': { en: 'Grade', ar: 'Grade' },
    'dash.essay_view.category_scores': { en: 'Category Scores', ar: 'درجات الفئات' },
    'dash.essay_view.detailed_feedback': { en: 'Detailed Feedback', ar: 'ملاحظات تفصيلية' },
    'dash.essay_view.improvement_suggestions': {
      en: 'Improvement Suggestions',
      ar: 'اقتراحات للتحسين',
    },

    /* ─── Papers navigation (dashboard/papers) ───────────────────── */
    'dash.papers.meta_title': { en: 'Your Papers', ar: 'أوراقك الامتحانية' },
    'dash.papers.meta_og_title': {
      en: 'Your Papers | The English Hub',
      ar: 'أوراقك الامتحانية | The English Hub',
    },
    'dash.papers.meta_desc': {
      en: 'Navigate all your exam papers, sections, and revision content in one place.',
      ar: 'تنقّل بين كل أوراقك الامتحانية وأقسامها ومحتوى المراجعة في مكان واحد.',
    },
    'dash.papers.empty_title': { en: 'Paper structure coming soon', ar: 'هيكل الأوراق قريب' },
    'dash.papers.empty_body': {
      en: 'We are building out the paper-by-paper navigation for {board}. In the meantime, explore the revision toolkit.',
      ar: 'نجهّز التنقّل ورقة ورقة لـ {board}. لين ذاك الوقت، استكشف أدوات المراجعة.',
    },
    'dash.papers.go_revision': { en: 'Go to Revision Hub', ar: 'روح لمركز المراجعة' },
    'dash.papers.back': { en: 'Dashboard', ar: 'اللوحة' },
    'dash.papers.title': { en: 'Your exam papers', ar: 'أوراقك الامتحانية' },
    'dash.papers.intro': {
      en: 'Everything you need for {board} is organised by paper. Open a paper to find study guides, exam technique, poetry, and practice questions.',
      ar: 'كل اللي تحتاجه لـ {board} مرتّب حسب الورقة. افتح أي ورقة وتلقى أدلّة دراسة، تقنيات امتحان، شعر، وأسئلة تدريب.',
    },
    'dash.papers.collapse': { en: 'Collapse sections', ar: 'طوّ الأقسام' },
    'dash.papers.expand': { en: 'Expand all sections', ar: 'افتح كل الأقسام' },
    'dash.papers.marks_suffix': { en: 'marks', ar: 'درجة' },
    'dash.papers.section_one': { en: 'section', ar: 'قسم' },
    'dash.papers.section_many': { en: 'sections', ar: 'أقسام' },
    'dash.papers.resource_one': { en: 'resource', ar: 'مصدر' },
    'dash.papers.resource_many': { en: 'resources', ar: 'مصادر' },
    'dash.papers.all_mocks': { en: 'All mock exams', ar: 'كل الامتحانات التجريبية' },
    'dash.papers.full_revision': { en: 'Full revision hub', ar: 'مركز المراجعة الكامل' },
    'dash.papers.flashcards': { en: 'Flashcards', ar: 'البطاقات التعليمية' },
    // Link type labels
    'dash.papers.type.text': { en: 'Study Guide', ar: 'دليل دراسة' },
    'dash.papers.type.poetry': { en: 'Poetry', ar: 'شعر' },
    'dash.papers.type.technique': { en: 'Technique', ar: 'تقنية' },
    'dash.papers.type.practice': { en: 'Practice', ar: 'تدريب' },
    'dash.papers.type.mock': { en: 'Mock Exam', ar: 'امتحان تجريبي' },

    /* ─── Human review request (dashboard/review/request) ────────── */
    'dash.review_req.back': { en: '← Back to Dashboard', ar: '← ارجع للوحة' },
    'dash.review_req.title': { en: 'Request a Human Review', ar: 'اطلب مراجعة بشرية' },
    'dash.review_req.intro': {
      en: 'If you’re unsure about the AI’s feedback on your essay, you can ask a real person to take a look. This is completely normal and it’s your right - not a complaint.',
      ar: 'لو مو متأكد من ملاحظات الـ AI على مقالتك، تقدر تطلب شخص حقيقي يشوفها. هذا شي عادي تماماً وحقّك - مو شكوى.',
    },
    'dash.review_req.rights_title': { en: 'Your rights', ar: 'حقوقك' },
    'dash.review_req.rights_body': {
      en: 'Under UK data protection law (UK GDPR & the Data Use and Access Act 2025), you have the right to request human intervention when decisions are made by automated systems. This is that right in action - it’s not a complaint, and there’s no wrong reason to use it.',
      ar: 'حسب قانون حماية البيانات في UK (UK GDPR وقانون استخدام البيانات والوصول 2025)، عندك الحق تطلب تدخّل بشري لما القرارات تنصنع بأنظمة آلية. هذا الحق على أرض الواقع - مو شكوى، وما فيه سبب غلط تستخدمه.',
    },
    'dash.review_req.which_essay': { en: 'Which essay?', ar: 'أي مقالة؟' },
    'dash.review_req.select_essay': { en: 'Select an essay...', ar: 'اختر مقالة...' },
    'dash.review_req.essay_fallback': { en: 'Essay {id}', ar: 'مقالة {id}' },
    'dash.review_req.why': {
      en: 'Why are you requesting a review?',
      ar: 'ليش تطلب مراجعة؟',
    },
    'dash.review_req.tell_more': { en: 'Tell us more', ar: 'عطنا تفاصيل أكثر' },
    'dash.review_req.tell_more_hint': {
      en: 'What specifically would you like a human to look at?',
      ar: 'شنو بالضبط تبغى الشخص يشوفه؟',
    },
    'dash.review_req.detail_ph': {
      en: 'e.g. The AI said my conclusion was weak, but I think I addressed the question clearly...',
      ar: 'مثلاً: الـ AI قال خاتمتي ضعيفة، بس أنا أحس إني جاوبت على السؤال بوضوح...',
    },
    'dash.review_req.self_label': {
      en: 'Your own thoughts on your essay',
      ar: 'رأيك أنت في مقالتك',
    },
    'dash.review_req.optional': { en: '(optional)', ar: '(اختياري)' },
    'dash.review_req.self_hint': {
      en: 'If you’d like, share what you think you did well or what you were trying to achieve. This helps the reviewer understand your perspective.',
      ar: 'لو تبغى، اكتب شنو تحس إنك سوّيته زين ولا شنو كنت تبغى توصله. هذا يساعد المراجع يفهم وجهة نظرك.',
    },
    'dash.review_req.self_ph': {
      en: 'e.g. I was trying to argue that Lady Macbeth is more ambitious than Macbeth...',
      ar: 'مثلاً: كنت أبغى أبيّن إن Lady Macbeth أكثر طموحاً من Macbeth...',
    },
    'dash.review_req.submit': { en: 'Submit Review Request', ar: 'أرسل طلب المراجعة' },
    'dash.review_req.submitting': { en: 'Submitting...', ar: 'لحظة، نرسل...' },
    'dash.review_req.err.essay': {
      en: 'Please select an essay to review.',
      ar: 'اختر مقالة للمراجعة.',
    },
    'dash.review_req.err.reason': {
      en: 'Please select a reason for your review request.',
      ar: 'اختر سبب لطلب المراجعة.',
    },
    'dash.review_req.err.detail': {
      en: 'Please provide some detail about your request.',
      ar: 'عطنا شوية تفاصيل عن طلبك.',
    },
    'dash.review_req.err.generic': {
      en: 'Something went wrong.',
      ar: 'صار شي غلط.',
    },
    'dash.review_req.err.try_again': {
      en: 'Something went wrong. Please try again.',
      ar: 'صار شي غلط. حاول مرة ثانية.',
    },
    // Reason options
    'dash.review_req.reason.default': { en: 'Select a reason...', ar: 'اختر سبب...' },
    'dash.review_req.reason.inaccurate': {
      en: 'Feedback seems inaccurate',
      ar: 'الملاحظات تبيّن غير دقيقة',
    },
    'dash.review_req.reason.unclear': {
      en: "I don't understand the feedback",
      ar: 'ما فهمت الملاحظات',
    },
    'dash.review_req.reason.unfair_score': {
      en: 'Score seems unfair',
      ar: 'الدرجة تبيّن غير عادلة',
    },
    'dash.review_req.reason.missed_points': {
      en: 'AI missed important points',
      ar: 'الـ AI فوّت نقاط مهمة',
    },
    'dash.review_req.reason.other': { en: 'Other', ar: 'شي ثاني' },
    // Confirmation screen
    'dash.review_req.done_title': {
      en: 'Review Request Submitted',
      ar: 'تم إرسال طلب المراجعة',
    },
    'dash.review_req.done_body': {
      en: 'Your request has been received. A qualified reviewer will look at your essay and the AI feedback.',
      ar: 'استلمنا طلبك. مراجع مؤهّل بيشوف مقالتك وملاحظات الـ AI.',
    },
    'dash.review_req.ref_label': { en: 'Your reference number', ar: 'رقمك المرجعي' },
    'dash.review_req.est_response': { en: 'Estimated response time:', ar: 'الوقت المتوقّع للرد:' },
    'dash.review_req.email_notify': {
      en: 'We’ll notify you by email when the review is complete.',
      ar: 'بنبلّغك بالإيميل لما تخلص المراجعة.',
    },
    'dash.review_req.back_dash': { en: 'Back to Dashboard', ar: 'ارجع للوحة' },
    'dash.review_req.track': { en: 'Track This Request', ar: 'تابع هالطلب' },

    /* ─── Review status (dashboard/review/[id]) ──────────────────── */
    'dash.review_status.err.not_found': {
      en: 'Review request not found. Please check your reference number.',
      ar: 'ما لقينا طلب المراجعة. تأكّد من رقمك المرجعي.',
    },
    'dash.review_status.err.load': {
      en: 'Unable to load review details. Please try again later.',
      ar: 'ما قدرنا نجيب تفاصيل المراجعة. حاول بعدين.',
    },
    'dash.review_status.err.connect': {
      en: 'Unable to connect. Please check your internet and try again.',
      ar: 'ما قدرنا نتّصل. تأكّد من النت وحاول مرة ثانية.',
    },
    'dash.review_status.not_found': { en: 'Review not found.', ar: 'ما لقينا المراجعة.' },
    'dash.review_status.back_dash': { en: 'Back to Dashboard', ar: 'ارجع للوحة' },
    'dash.review_status.back_dash_arrow': { en: '← Back to Dashboard', ar: '← ارجع للوحة' },
    'dash.review_status.title': { en: 'Review Status', ar: 'حالة المراجعة' },
    'dash.review_status.reference': { en: 'Reference:', ar: 'المرجع:' },
    'dash.review_status.progress': { en: 'Progress', ar: 'التقدّم' },
    'dash.review_status.stage.submitted': { en: 'Submitted', ar: 'مُرسَل' },
    'dash.review_status.stage.under_review': { en: 'Under Review', ar: 'تحت المراجعة' },
    'dash.review_status.stage.completed': { en: 'Completed', ar: 'مكتمل' },
    'dash.review_status.reviewer_response': { en: 'Reviewer Response', ar: 'رد المراجع' },
    'dash.review_status.your_request': { en: 'Your Request', ar: 'طلبك' },
    'dash.review_status.essay': { en: 'Essay', ar: 'المقالة' },
    'dash.review_status.reason': { en: 'Reason', ar: 'السبب' },
    'dash.review_status.details': { en: 'Details', ar: 'التفاصيل' },
    'dash.review_status.self_assessment': {
      en: 'Your self-assessment',
      ar: 'تقييمك الذاتي',
    },
    'dash.review_status.submitted_label': { en: 'Submitted', ar: 'تاريخ الإرسال' },
    'dash.review_status.timeline': { en: 'Timeline', ar: 'الخط الزمني' },

    /* ─── Subscription management (dashboard/subscription) ───────── */
    'dash.subscription.loading': {
      en: 'Loading subscription details...',
      ar: 'لحظة، نجيب تفاصيل اشتراكك...',
    },
    'dash.subscription.err.load': {
      en: 'Failed to load subscription',
      ar: 'ما قدرنا نجيب الاشتراك',
    },
    'dash.subscription.none_title': { en: 'No Active Subscription', ar: 'ما فيه اشتراك فعّال' },
    'dash.subscription.none_body': {
      en: 'You don’t currently have an active subscription. Subscribe to get access to AI-powered essay feedback and exam preparation tools.',
      ar: 'ما عندك اشتراك فعّال الحين. اشترك عشان توصل لملاحظات المقالات بالـ AI وأدوات التحضير للامتحان.',
    },
    'dash.subscription.view_plans': { en: 'View Plans', ar: 'شوف الباقات' },
    'dash.subscription.title': { en: 'Subscription Management', ar: 'إدارة الاشتراك' },
    'dash.subscription.past_due_banner': {
      en: 'Your last payment failed. Please update your payment method to avoid losing access.',
      ar: 'آخر دفعة فشلت. حدّث طريقة الدفع عشان ما تخسر الوصول.',
    },
    'dash.subscription.cancelled_banner_a': {
      en: 'Your subscription has been cancelled. You will retain access until',
      ar: 'تم إلغاء اشتراكك. بيظل عندك وصول لين',
    },
    'dash.subscription.trial_banner_a': {
      en: 'You are currently on a free trial. Your trial ends on',
      ar: 'أنت الحين على تجربة مجانية. تجربتك تنتهي في',
    },
    'dash.subscription.trial_banner_b': {
      en: 'After that, you will be charged',
      ar: 'بعدها بنخصم منك',
    },
    'dash.subscription.monthly_plan': { en: 'Monthly Plan', ar: 'الباقة الشهرية' },
    'dash.subscription.status.free_trial': { en: 'Free trial', ar: 'تجربة مجانية' },
    'dash.subscription.status.cancelled': { en: 'Cancelled', ar: 'ملغي' },
    'dash.subscription.status.active': { en: 'Active', ar: 'فعّال' },
    'dash.subscription.badge.past_due': { en: 'Past Due', ar: 'متأخر' },
    'dash.subscription.badge.cancelled': { en: 'Cancelled', ar: 'ملغي' },
    'dash.subscription.badge.trial': { en: 'Trial', ar: 'تجربة' },
    'dash.subscription.badge.active': { en: 'Active', ar: 'فعّال' },
    'dash.subscription.access_ends': { en: 'Access ends', ar: 'ينتهي الوصول' },
    'dash.subscription.next_billing': { en: 'Next billing date', ar: 'تاريخ الفوترة الجاية' },
    'dash.subscription.amount_after_trial': {
      en: 'Amount after trial',
      ar: 'المبلغ بعد التجربة',
    },
    'dash.subscription.billing_amount': { en: 'Billing amount', ar: 'مبلغ الفوترة' },
    'dash.subscription.month': { en: 'month', ar: 'شهر' },
    'dash.subscription.payments_made': { en: 'Payments made', ar: 'الدفعات المسددة' },
    'dash.subscription.cancel_title': { en: 'Cancel Subscription', ar: 'إلغاء الاشتراك' },
    'dash.subscription.cancel_body': {
      en: 'You can cancel your subscription at any time. You will retain access until the end of your current billing period.',
      ar: 'تقدر تلغي اشتراكك في أي وقت. بيظل عندك وصول لين نهاية فترة الفوترة الحالية.',
    },
    'dash.subscription.resub_title': { en: 'Want to come back?', ar: 'تبغى ترجع؟' },
    'dash.subscription.resub_body': {
      en: 'You can resubscribe at any time to regain full access.',
      ar: 'تقدر تعيد الاشتراك في أي وقت عشان ترجع لك كل المزايا.',
    },

    /* ─── Class analytics (dashboard/analytics/class) ────────────── */
    'dash.class_analytics.back': { en: 'Analytics', ar: 'التحليلات' },
    'dash.class_analytics.title': { en: 'Class Overview', ar: 'نظرة عامة على الصف' },
    'dash.class_analytics.subtitle': {
      en: 'Student progress summaries and class performance',
      ar: 'ملخّصات تقدّم الطلاب وأداء الصف',
    },
    'dash.class_analytics.export_csv': { en: 'Export CSV', ar: 'صدّر CSV' },
    'dash.class_analytics.err.load': {
      en: 'Failed to load class data. You may not have permission to view this page.',
      ar: 'ما قدرنا نجيب بيانات الصف. يمكن ما عندك صلاحية تشوف هالصفحة.',
    },
    'dash.class_analytics.stat.students': { en: 'Students', ar: 'الطلاب' },
    'dash.class_analytics.stat.avg_modules': { en: 'Avg Modules', ar: 'متوسط الوحدات' },
    'dash.class_analytics.stat.completed_per': {
      en: 'completed per student',
      ar: 'مكتملة لكل طالب',
    },
    'dash.class_analytics.stat.class_avg_score': {
      en: 'Class Avg Score',
      ar: 'متوسط درجات الصف',
    },
    'dash.class_analytics.stat.avg_study': { en: 'Avg Study Time', ar: 'متوسط وقت الدراسة' },
    'dash.class_analytics.stat.per_student': { en: 'per student', ar: 'لكل طالب' },
    'dash.class_analytics.list_title': { en: 'Student Progress', ar: 'تقدّم الطلاب' },
    'dash.class_analytics.student_one': { en: 'student', ar: 'طالب' },
    'dash.class_analytics.student_many': { en: 'students', ar: 'طالب' },
    'dash.class_analytics.matching': { en: 'matching', ar: 'مطابق لـ' },
    'dash.class_analytics.search_ph': { en: 'Search students...', ar: 'دوّر على الطلاب...' },
    'dash.class_analytics.no_match': {
      en: 'No students match your search.',
      ar: 'ما فيه طلاب يطابقون بحثك.',
    },
    'dash.class_analytics.no_data': {
      en: 'No student data available.',
      ar: 'ما فيه بيانات طلاب.',
    },
    'dash.class_analytics.col.student': { en: 'Student', ar: 'الطالب' },
    'dash.class_analytics.col.progress': { en: 'Progress', ar: 'التقدّم' },
    'dash.class_analytics.col.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة' },
    'dash.class_analytics.col.study_time': { en: 'Study Time', ar: 'وقت الدراسة' },
    'dash.class_analytics.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
    'dash.class_analytics.modules_suffix': { en: 'modules', ar: 'وحدة' },
    'dash.class_analytics.never': { en: 'Never', ar: 'أبداً' },
    'dash.class_analytics.class_average': { en: 'Class Average', ar: 'متوسط الصف' },
    'dash.class_analytics.students_count_suffix': { en: 'students', ar: 'طالب' },

    /* ─── Printable worksheets (dashboard/teacher/resources/worksheets) ─── */
    'dash.worksheets.meta_title': {
      en: 'Printable Worksheets - Teacher Resources',
      ar: 'أوراق عمل قابلة للطباعة - مصادر المعلّم',
    },
    'dash.worksheets.back': { en: '← Back to Resources', ar: '← ارجع للمصادر' },
    'dash.worksheets.title': {
      en: 'Quote Analysis Worksheet: An Inspector Calls',
      ar: 'ورقة تحليل الاقتباسات: An Inspector Calls',
    },
    'dash.worksheets.intro': {
      en: 'Pre-filled example worksheet with key quotes, techniques, and analysis. Use as a model answer or teacher reference. Print-friendly layout.',
      ar: 'ورقة عمل نموذجية جاهزة فيها اقتباسات أساسية وتقنيات وتحليل. استخدمها كإجابة نموذجية أو مرجع للمعلّم. تنسيق مناسب للطباعة.',
    },
    'dash.worksheets.how_title': { en: 'How to Use This Worksheet', ar: 'كيف تستخدم هالورقة' },
    'dash.worksheets.how_model_label': { en: 'As a model:', ar: 'كنموذج:' },
    'dash.worksheets.how_model_body': {
      en: 'Show students what detailed quote analysis looks like at Level 5-6.',
      ar: 'ورّي الطلاب كيف يكون تحليل الاقتباسات المفصّل على مستوى Level 5-6.',
    },
    'dash.worksheets.how_scaffold_label': { en: 'As a scaffold:', ar: 'كدعم تدريجي:' },
    'dash.worksheets.how_scaffold_body': {
      en: 'Give students the quotes and techniques columns, ask them to complete the effect and theme columns.',
      ar: 'عط الطلاب عمود الاقتباسات والتقنيات، واطلب منهم يكمّلون عمود الأثر والموضوع.',
    },
    'dash.worksheets.how_revision_label': { en: 'As revision:', ar: 'كمراجعة:' },
    'dash.worksheets.how_revision_body': {
      en: 'Students can use this as a reference when planning exam responses.',
      ar: 'يقدر الطلاب يستخدمونها كمرجع وهم يخططون لإجابات الامتحان.',
    },
    'dash.worksheets.how_diff_label': { en: 'Differentiated:', ar: 'مع التمايز:' },
    'dash.worksheets.how_diff_body': {
      en: 'Lower-ability students complete character + quote only; higher-ability attempt all columns independently before comparing.',
      ar: 'الطلاب الأقل قدرة يكمّلون الشخصية + الاقتباس بس؛ والأعلى قدرة يحاولون كل الأعمدة بنفسهم قبل المقارنة.',
    },
    'dash.worksheets.act_prefix': { en: 'Act', ar: 'Act' },
    'dash.worksheets.technique_col': { en: 'Technique(s)', ar: 'التقنية/التقنيات' },
    'dash.worksheets.effect_col': { en: 'Effect & Analysis', ar: 'الأثر والتحليل' },
    'dash.worksheets.ext_title': { en: 'Student Extension Task', ar: 'مهمة إثرائية للطالب' },
    'dash.worksheets.ext_intro': {
      en: 'Using the model analyses above, complete the same process for these additional quotes:',
      ar: 'باستخدام التحليلات النموذجية فوق، سوّ نفس العملية لهالاقتباسات الإضافية:',
    },
    'dash.worksheets.copyright': {
      en: 'An Inspector Calls © The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.',
      ar: 'An Inspector Calls © The Estate of J.B. Priestley. الاقتباسات القصيرة منشورة بموجب بند الاستخدام العادل في قانون حقوق التأليف والتصاميم وبراءات الاختراع 1988 لغرض النقد والمراجعة.',
    },
  }
