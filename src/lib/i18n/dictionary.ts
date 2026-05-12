/**
 * Master i18n dictionary — English + Khaleeji (Gulf) Arabic.
 *
 * EVERY user-facing string on the site should ultimately route through
 * this dictionary. The `t()` helper (server) and `useT()` hook (client)
 * both look up by key and fall back to English when an Arabic entry
 * is missing — graceful degradation while the dictionary fills in.
 *
 * Khaleeji conventions enforced across the AR column:
 *   شنو       not   ماذا
 *   شلونك     not   كيف حالك
 *   أبغى      not   أريد
 *   وايد      not   كثيراً
 *   الحين     not   الآن
 *   إحنا      not   نحن
 *   روح       not   اذهب
 *   شوف       not   انظر
 *   دوّر       not   ابحث
 *   سكّر       not   أغلق
 *   ببلاش     not   مجاناً
 *   لحظة      not   جاري التحميل
 *
 * BANNED (Levantine — do not introduce):
 *   شو, بحكي, كيفك, ليش
 *
 * Brand + technical terms stay in Latin script even within Arabic
 * text (standard Gulf convention): The English Hub, GCSE, IGCSE,
 * KS3, AO1-AO6, AQA, OCR, Edexcel, Cambridge, WJEC, GDPR, PDPPL.
 *
 * Keys are dotted-namespace strings — header.nav.students, ks3.lesson.task,
 * etc. — so new translators can add a section without reading the whole
 * file.
 */

export type Locale = 'en' | 'ar'

export type Dictionary = Record<string, { en: string; ar?: string }>

export const DICTIONARY: Dictionary = {
  // ─── Header / nav / CTAs ────────────────────────────────────────────
  'brand.name': { en: 'The English Hub', ar: 'The English Hub' },
  'header.nav.students': { en: 'For Students', ar: 'للطلاب' },
  'header.nav.parents': { en: 'For Parents', ar: 'لأولياء الأمور' },
  'header.nav.teachers': { en: 'For Teachers', ar: 'للمعلمين' },
  'header.nav.schools': { en: 'For Schools', ar: 'للمدارس' },
  'header.nav.pricing': { en: 'Pricing', ar: 'الأسعار' },
  'header.nav.ks3': { en: 'KS3', ar: 'KS3' },
  'header.nav.your_hub': { en: 'Your Hub', ar: 'الهب مالك' },
  'header.nav.dashboard': { en: 'Dashboard', ar: 'لوحتك' },
  'header.nav.affiliates': { en: 'Affiliates', ar: 'الشراكات' },
  'header.nav.try_demo': { en: 'Try Demo', ar: 'جرّب الديمو' },
  'header.cta.login': { en: 'Log in', ar: 'سجّل دخول' },
  'header.cta.start_free': { en: 'Start free', ar: 'ابدأ ببلاش' },
  'auth.sign_in': { en: 'Sign in', ar: 'ادخل حسابك' },
  'auth.sign_up': { en: 'Sign up', ar: 'سوِّ حساب' },
  'auth.get_started_free': { en: 'Get started for free', ar: 'ابدأ معانا ببلاش' },
  'a11y.skip_to_content': { en: 'Skip to main content', ar: 'روح للمحتوى الرئيسي' },
  'a11y.skip_short': { en: 'Skip to content', ar: 'روح للمحتوى' },
  'board.choose': { en: 'Choose your exam board', ar: 'اختر هيئة الامتحان مالتك' },
  'board.change': { en: 'Change board', ar: 'غيّر الهيئة' },
  'lang.switch': { en: 'Switch language', ar: 'غيّر اللغة' },
  'lang.en': { en: 'English mode', ar: 'إنجليزي بس' },
  'lang.bi': { en: 'Bilingual mode', ar: 'إنجليزي وعربي' },
  'lang.ar': { en: 'Arabic mode', ar: 'عربي بس' },
  'lang.en.tooltip': {
    en: 'English mode — content in English',
    ar: 'الوضع الإنجليزي — المحتوى بالإنجليزي بس',
  },
  'lang.bi.tooltip': {
    en: 'Bilingual mode — English + Arabic together',
    ar: 'الوضع ثنائي اللغة — إنجليزي وعربي مع بعض',
  },
  'lang.ar.tooltip': {
    en: 'Arabic mode — content in Arabic (Gulf Khaleeji)',
    ar: 'الوضع العربي — المحتوى بالعربي (خليجي)',
  },
  'nav.main': { en: 'Main navigation', ar: 'القائمة الرئيسية' },
  'nav.mobile': { en: 'Mobile navigation', ar: 'قائمة الموبايل' },
  'nav.open': { en: 'Open menu', ar: 'افتح القائمة' },
  'nav.close': { en: 'Close menu', ar: 'سكّر القائمة' },

  // ─── Generic UI verbs / buttons ─────────────────────────────────────
  'action.search': { en: 'Search', ar: 'دوّر' },
  'action.search_placeholder': { en: 'Search…', ar: 'دوّر…' },
  'action.view_all': { en: 'View all', ar: 'شوف الكل' },
  'action.continue': { en: 'Continue', ar: 'كمّل' },
  'action.back': { en: 'Back', ar: 'رجوع' },
  'action.next': { en: 'Next', ar: 'التالي' },
  'action.save': { en: 'Save', ar: 'احفظ' },
  'action.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'action.submit': { en: 'Submit', ar: 'أرسل' },
  'action.edit': { en: 'Edit', ar: 'عدّل' },
  'action.delete': { en: 'Delete', ar: 'احذف' },
  'action.loading': { en: 'Loading…', ar: 'لحظة…' },
  'action.error_generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية لو سمحت.',
  },

  // ─── KS3 curriculum surface ─────────────────────────────────────────
  'ks3.key_stage_3': { en: 'Key Stage 3', ar: 'المرحلة الأساسية الثالثة KS3' },
  'ks3.year_7': { en: 'Year 7', ar: 'السنة السابعة' },
  'ks3.year_8': { en: 'Year 8', ar: 'السنة الثامنة' },
  'ks3.year_9': { en: 'Year 9', ar: 'السنة التاسعة' },
  'ks3.term_1': { en: 'Term 1', ar: 'الفصل الأول' },
  'ks3.term_2': { en: 'Term 2', ar: 'الفصل الثاني' },
  'ks3.term_3': { en: 'Term 3', ar: 'الفصل الثالث' },
  'ks3.curriculum': { en: 'Curriculum', ar: 'المنهج' },
  'ks3.yearly_expectations': { en: 'Yearly expectations', ar: 'التوقعات السنوية' },
  'ks3.termly_plan': { en: 'Termly plan', ar: 'خطة الفصل الدراسي' },
  'ks3.weekly_plan': { en: 'Weekly plan', ar: 'الخطة الأسبوعية' },
  'ks3.five_lessons': { en: 'The five lessons', ar: 'الدروس الخمسة' },
  'ks3.lesson.explicit_reading': {
    en: 'Lesson 1: Explicit Reading',
    ar: 'الدرس الأول: القراءة الموجَّهة',
  },
  'ks3.lesson.reading_discussion': {
    en: 'Lesson 2: Reading and Discussion',
    ar: 'الدرس الثاني: القراءة والنقاش',
  },
  'ks3.lesson.explicit_writing': {
    en: 'Lesson 3: Explicit Writing',
    ar: 'الدرس الثالث: الكتابة الموجَّهة',
  },
  'ks3.lesson.application': { en: 'Lesson 4: Application', ar: 'الدرس الرابع: التطبيق' },
  'ks3.lesson.independent': {
    en: 'Lesson 5: Independent Outcome',
    ar: 'الدرس الخامس: الإنتاج المستقل',
  },
  'ks3.strand.reading': { en: 'Reading', ar: 'القراءة' },
  'ks3.strand.writing': { en: 'Writing', ar: 'الكتابة' },
  'ks3.strand.language': { en: 'Language, grammar and control', ar: 'اللغة والقواعد والإتقان' },
  'ks3.strand.speaking': { en: 'Speaking and Listening', ar: 'التحدث والاستماع' },
  'ks3.skill_focus': { en: 'Curriculum skill focus', ar: 'مهارات المنهج الأساسية' },
  'ks3.success_criteria': { en: 'Success criteria', ar: 'معايير النجاح' },
  'ks3.what_students_do': { en: 'What students do', ar: 'شنو يسوّون الطلاب' },
  'ks3.task': { en: 'Task', ar: 'المهمة' },
  'ks3.key_vocabulary': { en: 'Key vocabulary', ar: 'المفردات الأساسية' },
  'ks3.homework': { en: 'Homework', ar: 'الواجب المنزلي' },
  'ks3.set_text': { en: 'Set text', ar: 'النص المقرَّر' },
  'ks3.big_skill_jump': { en: 'Big skill jump', ar: 'قفزة كبيرة في المهارة' },
  'ks3.assessment': { en: 'End-of-half-term assessment', ar: 'تقييم نهاية نصف الفصل' },
  'ks3.rubric.below': { en: 'Below target', ar: 'دون المستوى المطلوب' },
  'ks3.rubric.working': { en: 'Working towards', ar: 'قيد التقدّم نحو الهدف' },
  'ks3.rubric.expected': { en: 'Expected', ar: 'المستوى المتوقع' },
  'ks3.rubric.depth': { en: 'Greater depth', ar: 'مستوى متقدّم' },
  'ks3.year_7_name': { en: 'Foundations', ar: 'الأساسيات' },
  'ks3.year_8_name': { en: 'Development', ar: 'التطوير' },
  'ks3.year_9_name': { en: 'Mastery', ar: 'الإتقان' },
  'ks3.marking_rubrics': { en: 'Marking rubrics', ar: 'معايير التصحيح' },
  'ks3.skill_codes': { en: 'Skill codes', ar: 'رموز المهارات' },
  'ks3.end_of_ks3': { en: 'End of KS3 standard', ar: 'المعيار النهائي لمرحلة KS3' },
  'ks3.year_overview': { en: 'Year overview', ar: 'نظرة عامة على السنة' },
  'ks3.pages': { en: 'Pages', ar: 'الصفحات' },
  'ks3.ai_marking_panel.title': {
    en: 'AI marking — try this with the English Hub feedback engine',
    ar: 'تصحيح بالذكاء الاصطناعي — جرّب محرّك التغذية الراجعة من The English Hub',
  },
  'ks3.ai_marking_panel.body': {
    en: 'Students can submit their independent paragraph to the AI feedback engine for AO-aligned commentary. Their teacher sees the same feedback alongside their own marking. The task is auto-loaded into the practice surface — students just write and submit.',
    ar: 'يقدر الطلاب يرسلون فقرتهم المستقلة لمحرّك التغذية الراجعة بالذكاء الاصطناعي عشان يحصلون على ملاحظات على أساس معايير AO. والمعلم بيشوف نفس الملاحظات مع تصحيحه. المهمة بتنحمل تلقائياً في صفحة التدريب — الطالب بس يكتب ويرسل.',
  },
  'ks3.ai_marking_panel.cta': {
    en: 'Open the marking surface with this task pre-loaded →',
    ar: 'افتح صفحة التصحيح والمهمة جاهزة →',
  },

  // ─── AI content label (PDPPL Remediation 6) ──────────────────────────
  'ai_label.short': {
    en: 'Made with AI · Reviewed by humans',
    ar: 'صُنع بالذكاء الاصطناعي · راجعه البشر',
  },
  'ai_label.link': { en: 'AI Governance & Ethics', ar: 'حوكمة الذكاء الاصطناعي وأخلاقياته' },
  'ai_label.panel_title': {
    en: 'About this AI-assisted content',
    ar: 'حول هذا المحتوى المُعَدّ بمساعدة الذكاء الاصطناعي',
  },
  'ai_label.panel_body': {
    en: 'The English Hub uses AI to draft and update study materials. A human editor reviews every published piece against our curriculum and brand-voice rules before it ships. You can read the full disclosure, model provenance, and your rights on our AI Governance & Ethics page.',
    ar: 'إحنا في The English Hub نستخدم الذكاء الاصطناعي لصياغة وتحديث المواد الدراسية. ومحرر بشري يراجع كل قطعة منشورة على أساس قواعد المنهج وصوت العلامة قبل ما تنشر. تقدر تقرا الإفصاح الكامل ومصدر النموذج وحقوقك على صفحة حوكمة الذكاء الاصطناعي.',
  },

  // ─── Common page chrome ─────────────────────────────────────────────
  'page.last_updated': { en: 'Last updated', ar: 'آخر تحديث' },
  'page.last_reviewed': { en: 'Last reviewed', ar: 'آخر مراجعة' },
  'page.next_review': { en: 'Next scheduled review', ar: 'المراجعة الجاية' },
  'page.version': { en: 'Version', ar: 'النسخة' },
  'page.read_more': { en: 'Read more', ar: 'اقرا المزيد' },
  'page.show_less': { en: 'Show less', ar: 'عرض أقل' },

  // ─── Yes/no/confirm ─────────────────────────────────────────────────
  'confirm.yes': { en: 'Yes', ar: 'إي' },
  'confirm.no': { en: 'No', ar: 'لا' },
  'confirm.ok': { en: 'OK', ar: 'تمام' },
  'confirm.got_it': { en: 'Got it', ar: 'فهمت' },
  'confirm.done': { en: 'Done', ar: 'خلصت' },
  'confirm.are_you_sure': { en: 'Are you sure?', ar: 'متأكد؟' },
  'confirm.acknowledge': { en: 'Acknowledge', ar: 'أُقِرّ' },
  'confirm.approve': { en: 'Approve', ar: 'موافقة' },
  'confirm.decline': { en: 'Decline', ar: 'رفض' },

  // ─── Marketing / homepage hero ─────────────────────────────────────
  'home.tagline_short': { en: 'GCSE & IGCSE English revision', ar: 'مراجعة إنجليزي GCSE و IGCSE' },
  'home.tagline_full': {
    en: 'AI-marked. Built for British exams.',
    ar: 'تصحيح بالذكاء الاصطناعي. مصمَّم لامتحانات بريطانيا.',
  },
  'home.cta.pick_board': { en: 'Pick your exam board', ar: 'اختر بورد الامتحان مالك' },
  'home.feature.practice': { en: 'Practice with model answers', ar: 'تمرّن على إجابات نموذجية' },
  'home.feature.feedback': {
    en: 'Get AI feedback in minutes',
    ar: 'احصل على ملاحظات الذكاء الاصطناعي في دقايق',
  },
  'home.feature.improve': {
    en: 'See exactly what to improve',
    ar: 'شوف بالضبط شنو تحتاج تحسّنه',
  },
  'home.cta.try_free': { en: 'Try it free', ar: 'جرّبه ببلاش' },
  'home.cta.no_card': { en: 'No card needed', ar: 'من غير بطاقة' },
  'home.trust_line': {
    en: 'Trusted by students, parents and teachers across the UK and the Gulf',
    ar: 'محل ثقة الطلاب والأهالي والمعلمين في بريطانيا والخليج',
  },
  'home.boards_supported': {
    en: 'Built for AQA, Edexcel, OCR, Cambridge, WJEC',
    ar: 'مصمَّم لـ AQA و Edexcel و OCR و Cambridge و WJEC',
  },
  'home.mock_exams': {
    en: 'Mock exams that mirror the real thing',
    ar: 'امتحانات تجريبية تشبه الامتحان الحقيقي وايد',
  },
  'home.revision_notes': {
    en: 'Revision notes for every set text',
    ar: 'ملخصات مراجعة لكل نص مقرر',
  },
  'home.pricing_short': {
    en: 'Pay-as-you-go or unlimited',
    ar: 'ادفع باللي تستخدمه أو اشترك بلا حدود',
  },
  'home.price_monthly': { en: '£6 a month', ar: '٦ جنيهات بالشهر' },
  'home.cancel_anytime': { en: 'Cancel anytime', ar: 'ألغِ الاشتراك أي وقت تبغى' },
  'home.grade_gains': {
    en: 'Students see grade gains in weeks',
    ar: 'الطلاب يشوفون درجاتهم ترتفع خلال أسابيع',
  },
  'home.why_us': { en: 'Why The English Hub', ar: 'ليش The English Hub' },
  'home.how_it_works': { en: 'How it works', ar: 'شلون يشتغل' },
  'home.step1': { en: 'Step 1 — Pick your exam board', ar: 'الخطوة ١ — اختر بورد الامتحان مالك' },
  'home.step2': {
    en: 'Step 2 — Practice with real past-paper questions',
    ar: 'الخطوة ٢ — تمرّن على أسئلة من امتحانات سابقة حقيقية',
  },
  'home.step3': {
    en: 'Step 3 — Get AI marking against the actual mark scheme',
    ar: 'الخطوة ٣ — احصل على تصحيح بالذكاء الاصطناعي حسب نموذج التصحيح الرسمي',
  },
  'home.faq.title': { en: 'Frequently asked questions', ar: 'الأسئلة اللي يسألونها وايد' },
  'home.faq.q1': { en: 'Is the AI marking accurate?', ar: 'تصحيح الذكاء الاصطناعي دقيق؟' },
  'home.faq.a1': {
    en: 'Yes — trained on AQA, Edexcel, OCR mark schemes.',
    ar: 'إي — مدرَّب على نماذج التصحيح مال AQA و Edexcel و OCR.',
  },
  'home.faq.q2': { en: 'Can my child use this safely?', ar: 'عيالي يقدرون يستخدمونه بأمان؟' },
  'home.faq.a2': {
    en: "Yes. We are PDPPL-compliant and follow UK Children's Code.",
    ar: "إي. إحنا ملتزمين بقانون PDPPL ونتبع UK Children's Code.",
  },
  'home.faq.q3': { en: 'Do I need to be in the UK?', ar: 'لازم أكون في بريطانيا؟' },
  'home.faq.a3': {
    en: 'No — students in the Gulf use The English Hub for British exams every day.',
    ar: 'لا — طلاب وايد بالخليج يستخدمون The English Hub لامتحانات بريطانيا كل يوم.',
  },
  'home.trusted_by_count': {
    en: 'Trusted by over 10,000 families',
    ar: 'أكثر من ١٠٬٠٠٠ عائلة يثقون فينا',
  },
  'home.reviews_cta': { en: 'Read our reviews', ar: 'اقرأ آراء المستخدمين' },
  'home.start_trial': { en: 'Start your free trial', ar: 'ابدأ تجربتك المجانية الحين' },
  'home.schools_team': { en: 'Speak to our schools team', ar: 'كلّم فريق المدارس مالنا' },
  'home.book_demo': { en: 'Book a demo', ar: 'احجز عرض توضيحي' },

  // ─── Form labels + auth + errors ───────────────────────────────────
  'form.email': { en: 'Email address', ar: 'الإيميل' },
  'form.password': { en: 'Password', ar: 'الرمز السري' },
  'form.confirm_password': { en: 'Confirm password', ar: 'أكد الرمز السري' },
  'form.show_password': { en: 'Show password', ar: 'ورّي الرمز' },
  'form.hide_password': { en: 'Hide password', ar: 'خبّي الرمز' },
  'form.first_name': { en: 'First name', ar: 'الاسم الأول' },
  'form.last_name': { en: 'Last name', ar: 'اسم العائلة' },
  'form.full_name': { en: 'Full name', ar: 'الاسم الكامل' },
  'form.dob': { en: 'Date of birth', ar: 'تاريخ الميلاد' },
  'form.day': { en: 'Day', ar: 'اليوم' },
  'form.month': { en: 'Month', ar: 'الشهر' },
  'form.year': { en: 'Year', ar: 'السنة' },
  'form.phone': { en: 'Phone number', ar: 'رقم التلفون' },
  'form.address': { en: 'Address', ar: 'العنوان' },
  'form.city': { en: 'City', ar: 'المدينة' },
  'form.country': { en: 'Country', ar: 'الدولة' },
  'form.postcode': { en: 'Postcode', ar: 'الرمز البريدي' },
  'form.guardian_email': { en: 'Parent or guardian email', ar: 'إيميل ولي الأمر' },
  'form.guardian_relationship': {
    en: 'Your relationship to the student',
    ar: 'شنو علاقتك بالطالب؟',
  },
  'form.relationship.parent': { en: 'Parent', ar: 'والد / والدة' },
  'form.relationship.guardian': { en: 'Guardian', ar: 'ولي أمر' },
  'form.relationship.carer': { en: 'Carer', ar: 'مسؤول عن الطالب' },
  'form.relationship.other': { en: 'Other', ar: 'غير ذلك' },
  'form.agree_terms': {
    en: 'I agree to the Terms and Conditions',
    ar: 'أوافق على الشروط والأحكام',
  },
  'form.read_privacy': { en: 'I have read the Privacy Policy', ar: 'قريت سياسة الخصوصية' },
  'form.over_18': { en: 'I confirm I am over 18', ar: 'أأكد إن عمري فوق ١٨ سنة' },
  'form.signing_for_child': {
    en: 'I am signing up on behalf of my child',
    ar: 'أنا أسجّل بالنيابة عن ولدي',
  },
  'form.create_account': { en: 'Create account', ar: 'سوّي حساب' },
  'form.forgot_password': { en: 'I forgot my password', ar: 'نسيت الرمز السري' },
  'form.send_reset': { en: 'Send reset link', ar: 'ارسل رابط التغيير' },
  'form.new_password': { en: 'New password', ar: 'رمز سري جديد' },
  'form.save_changes': { en: 'Save changes', ar: 'احفظ التغييرات' },
  'form.required': { en: 'Required field', ar: 'هذي الخانة مطلوبة' },
  'form.invalid_email': { en: 'Please enter a valid email address', ar: 'لو سمحت اكتب إيميل صحيح' },
  'form.password_short': { en: 'Password is too short', ar: 'الرمز السري قصير وايد' },
  'form.password_mismatch': { en: "Passwords don't match", ar: 'الرمزين ما يتطابقون' },
  'form.email_in_use': { en: 'This email is already in use', ar: 'هذا الإيميل مستخدم من قبل' },
  'form.email_not_found': {
    en: "We couldn't find an account with that email",
    ar: 'ما حصّلنا حساب بهالإيميل',
  },
  'form.wrong_password': { en: 'Wrong password', ar: 'الرمز السري غلط' },
  'form.too_many_attempts': {
    en: 'Too many attempts. Please try again in a few minutes.',
    ar: 'حاولت وايد مرات. جرّب مرة ثانية بعد شوي.',
  },
  'form.check_inbox': { en: 'Please check your inbox', ar: 'شيك على الإيميل' },
  'form.verification_sent': {
    en: "We've sent you a verification email",
    ar: 'رسّلنا لك إيميل تأكيد',
  },
  'form.didnt_get_email': { en: "Didn't get the email?", ar: 'ما وصلك الإيميل؟' },
  'form.resend': { en: 'Resend', ar: 'ارسل مرة ثانية' },
  'form.session_expired': {
    en: 'Your session has expired. Please sign in again.',
    ar: 'انتهت الجلسة. سجّل دخول مرة ثانية.',
  },
  'form.signed_in': { en: "You're now signed in", ar: 'تم تسجيل دخولك' },
  'form.welcome_back': { en: 'Welcome back', ar: 'حياك الله مرة ثانية' },
  'form.sign_out': { en: 'Sign out', ar: 'تسجيل خروج' },
  'form.no_results': { en: 'No results found', ar: 'ما في نتائج' },
  'form.try_different_search': { en: 'Try a different search', ar: 'جرّب كلمة ثانية' },
  'form.filter': { en: 'Filter', ar: 'فلتر' },
  'form.sort_by': { en: 'Sort by', ar: 'ترتيب حسب' },
  'form.clear_filters': { en: 'Clear filters', ar: 'امسح الفلاتر' },

  // ─── Dashboard + AI marking ───────────────────────────────────────
  'dash.your_progress': { en: 'Your progress', ar: 'تقدمك' },
  'dash.continue': { en: 'Continue where you left off', ar: 'كمّل من وين وقفت' },
  'dash.recent_activity': { en: 'Recent activity', ar: 'آخر نشاطاتك' },
  'dash.achievements': { en: 'Achievements', ar: 'إنجازاتك' },
  'dash.streak': { en: 'Streak', ar: 'سلسلة الأيام المتتالية' },
  'dash.day_streak': { en: 'Day streak', ar: 'يوم متتالي' },
  'dash.best_streak': { en: 'Best streak', ar: 'أطول سلسلة وصلت لها' },
  'dash.points_earned': { en: 'Points earned', ar: 'النقاط اللي جمعتها' },
  'dash.level': { en: 'Level', ar: 'المستوى' },
  'dash.practice_now': { en: 'Practice now', ar: 'تدرب الحين' },
  'dash.start_mock': { en: 'Start a mock exam', ar: 'ابدأ امتحان تجريبي' },
  'dash.past_papers': { en: 'View past papers', ar: 'شوف الامتحانات السابقة' },
  'dash.submit_essay': { en: 'Submit your essay', ar: 'سلّم مقالتك' },
  'dash.get_feedback': { en: 'Get AI feedback', ar: 'خذ ملاحظات من المدرس الذكي' },
  'dash.your_mark': { en: 'Your mark', ar: 'علامتك' },
  'dash.grade': { en: 'Grade', ar: 'الدرجة' },
  'dash.reading_marks': { en: 'Reading marks', ar: 'علامات القراءة' },
  'dash.writing_marks': { en: 'Writing marks', ar: 'علامات الكتابة' },
  'dash.total_marks': { en: 'Total marks', ar: 'المجموع الكلي' },
  'dash.out_of': { en: 'Out of', ar: 'من' },
  'dash.feedback_title': { en: 'Feedback from your AI tutor', ar: 'ملاحظات من مدرسك الذكي' },
  'dash.what_well': { en: 'What you did well', ar: 'شنو سويته زين' },
  'dash.what_improve': { en: 'What to improve', ar: 'شنو تقدر تحسّنه' },
  'dash.try_next': { en: 'Try this next', ar: 'جرّب هذا بعدين' },
  'dash.practice_skill': { en: 'Practice this skill', ar: 'تدرب على هذي المهارة' },
  'dash.view_example': { en: 'View example answer', ar: 'شوف نموذج الإجابة' },
  'dash.time_spent': { en: 'Time spent', ar: 'الوقت اللي قضيته' },
  'dash.average_mark': { en: 'Average mark', ar: 'معدّل علاماتك' },
  'dash.time_to_exam': { en: 'Time to next exam', ar: 'الوقت الباقي للامتحان الجاي' },
  'dash.days_remaining': { en: 'Days remaining', ar: 'الأيام الباقية' },
  'dash.weekly_target': { en: 'Weekly target', ar: 'هدفك الأسبوعي' },
  'dash.set_target': { en: 'Set a new target', ar: 'حدد هدف جديد' },
  'dash.on_track': { en: "You're on track", ar: 'أنت ماشي صح' },
  'dash.behind_target': {
    en: "You're behind your target",
    ar: 'أنت متأخر شوي عن هدفك',
  },
  'dash.catch_up': { en: 'Catch up plan', ar: 'خطة تلحق فيها' },
  'dash.class_avg': { en: 'Class average', ar: 'معدّل الصف' },
  'dash.your_rank': { en: 'Your rank', ar: 'ترتيبك' },
  'dash.top_class': { en: 'Top of your class', ar: 'الأول على صفك' },
  'dash.leaderboard': { en: 'View leaderboard', ar: 'شوف قائمة المتصدرين' },
  'dash.improvements_suggested': { en: 'Improvements suggested', ar: 'اقتراحات للتحسين' },
  'dash.mark_scheme': { en: 'Mark scheme view', ar: 'سلم العلامات' },
  'dash.compare_examiner': {
    en: 'Compare with examiner answer',
    ar: 'قارن مع إجابة المصحح',
  },
  'dash.save_flashcards': { en: 'Save to flashcards', ar: 'احفظها بالبطاقات' },
  'dash.add_revision': { en: 'Add to revision list', ar: 'ضفها لقائمة المراجعة' },

  // ─── Governance + legal ──────────────────────────────────────────
  'legal.privacy_policy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'legal.cookie_policy': { en: 'Cookie Policy', ar: 'سياسة الكوكيز' },
  'legal.terms': { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
  'legal.qatar_notice': { en: 'Qatar Privacy Notice', ar: 'إشعار الخصوصية لدولة قطر' },
  'legal.qatar_supplement': { en: 'Qatar Privacy Supplement', ar: 'ملحق الخصوصية الخاص بقطر' },
  'legal.ai_governance': {
    en: 'AI Governance & Ethics',
    ar: 'حوكمة وأخلاقيات الذكاء الاصطناعي',
  },
  'legal.what_applies': {
    en: "What applies to us, and what doesn't",
    ar: 'شنو ينطبق علينا، وشنو ما ينطبق',
  },
  'legal.where_comply': {
    en: 'Where we currently comply',
    ar: 'المجالات اللي إحنا ملتزمين فيها الحين',
  },
  'legal.gaps_ack': {
    en: 'Where there are gaps we acknowledge',
    ar: 'الثغرات اللي إحنا نعترف فيها',
  },
  'legal.gaps_roadmap': {
    en: 'Honest gaps + remediation roadmap',
    ar: 'ثغرات صريحة + خارطة طريق للمعالجة',
  },
  'legal.children_data': {
    en: "Children's data — special call-out",
    ar: 'بيانات الأطفال — تنبيه خاص',
  },
  'legal.ai_disclosure': { en: 'AI use disclosure', ar: 'الإفصاح عن استخدام الذكاء الاصطناعي' },
  'legal.contact_dsr': {
    en: 'Contact for data subject requests',
    ar: 'جهة الاتصال لطلبات أصحاب البيانات',
  },
  'legal.audit_findings': { en: 'Internal audit findings', ar: 'نتائج التدقيق الداخلي' },
  'legal.data_flow': {
    en: 'Actual data flow — by activity and jurisdiction',
    ar: 'التدفق الفعلي للبيانات — حسب النشاط والاختصاص القضائي',
  },
  'legal.cross_border': {
    en: 'Cross-border transfer mechanisms',
    ar: 'آليات نقل البيانات عبر الحدود',
  },
  'legal.pdppl_rights': {
    en: 'PDPPL rights specific to Qatar residents',
    ar: 'حقوق PDPPL الخاصة بالمقيمين في قطر',
  },
  'legal.lawful_basis': {
    en: 'Lawful basis for processing data of Qatar residents',
    ar: 'الأساس القانوني لمعالجة بيانات المقيمين في قطر',
  },
  'legal.controller': { en: 'Who is the controller', ar: 'مَن هي الجهة المتحكمة' },
  'legal.right_access': { en: 'Right of access', ar: 'حق الوصول' },
  'legal.right_correct': { en: 'Right to correction', ar: 'حق التصحيح' },
  'legal.right_delete': { en: 'Right to deletion', ar: 'حق الحذف' },
  'legal.right_withdraw': { en: 'Right to withdraw consent', ar: 'حق سحب الموافقة' },
  'legal.right_object': { en: 'Right to object', ar: 'حق الاعتراض' },
  'legal.right_complain': {
    en: 'Right to lodge a complaint with the supervisory authority',
    ar: 'حق تقديم شكوى للجهة الرقابية',
  },
  'legal.exercise_right': {
    en: 'To exercise any right, write to privacy@theenglishhub.app',
    ar: 'لممارسة أي حق، راسلنا على privacy@theenglishhub.app',
  },
  'legal.acknowledge_sla': {
    en: 'We will acknowledge within 5 working days and respond substantively within 30 days.',
    ar: 'بنأكد استلام طلبك خلال ٥ أيام عمل، وبنرد عليك رد موضوعي خلال ٣٠ يوم.',
  },
  'legal.no_sell_data': {
    en: 'We do not sell personal data and do not use it to train third-party AI models.',
    ar: 'إحنا ما نبيع البيانات الشخصية، وما نستخدمها لتدريب نماذج ذكاء اصطناعي تابعة لأطراف ثالثة.',
  },
  'legal.under_18_no_payment': {
    en: 'Under-18 accounts cannot enter payment details.',
    ar: 'حسابات اللي عمرهم أقل من ١٨ ما تقدر تدخل بيانات الدفع.',
  },
  'legal.adult_payer': {
    en: 'The paying party is always an adult.',
    ar: 'الطرف اللي يدفع دايماً يكون بالغ.',
  },
  'legal.no_train_kids': {
    en: "We do not use children's data to train AI models.",
    ar: 'إحنا ما نستخدم بيانات الأطفال لتدريب نماذج الذكاء الاصطناعي.',
  },
  'legal.review_cadence': {
    en: 'This page is reviewed at least every six months.',
    ar: 'هذي الصفحة تتم مراجعتها كل ستة أشهر على الأقل.',
  },
  'legal.awaiting_guardian': {
    en: "Awaiting your guardian's approval",
    ar: 'بانتظار موافقة ولي أمرك',
  },
  'legal.guardian_approved': {
    en: 'Your guardian has approved your account',
    ar: 'ولي أمرك وافق على حسابك',
  },
  'legal.waiting_confirmation': { en: 'Waiting for confirmation', ar: 'بانتظار التأكيد' },
  'legal.terms_of_service': { en: 'Terms of Service', ar: 'شروط الخدمة' },
  'legal.operated_by': {
    en: 'Operated by Upskill Energy Limited, trading as The English Hub',
    ar: 'تُدار من قِبَل Upskill Energy Limited، تعمل تحت اسم The English Hub',
  },

  // ─── A11y + navigation extras ────────────────────────────────────
  'a11y.breadcrumb': { en: 'Breadcrumb', ar: 'مسار التنقّل' },
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'action.retry': { en: 'Retry', ar: 'حاول مرة ثانية' },
  'error.boundary_default': { en: "Something didn't load", ar: 'في شي ما انحمل' },

  // ─── Footer ─────────────────────────────────────────────────────
  'footer.section.product': { en: 'Product', ar: 'المنتج' },
  'footer.section.revision': { en: 'Revision', ar: 'المراجعة' },
  'footer.section.igcse': { en: 'IGCSE', ar: 'IGCSE' },
  'footer.section.resources': { en: 'Resources', ar: 'المصادر' },
  'footer.section.company': { en: 'Company', ar: 'عن الشركة' },
  'footer.section.legal': { en: 'Legal', ar: 'الشؤون القانونية' },
  'footer.section.support': { en: 'Support', ar: 'الدعم' },
  'footer.link.courses': { en: 'Courses', ar: 'الكورسات' },
  'footer.link.games': { en: 'Games', ar: 'الألعاب' },
  'footer.link.reading_assessment': { en: 'Reading Assessment', ar: 'تقييم القراءة' },
  'footer.link.mock_exams': { en: 'Mock Exams', ar: 'امتحانات تجريبية' },
  'footer.link.practice': { en: 'Practice', ar: 'التدريب' },
  'footer.link.resources': { en: 'Resources', ar: 'المصادر' },
  'footer.link.revision_hub': { en: 'Revision Hub', ar: 'مركز المراجعة' },
  'footer.link.power_and_conflict': { en: 'Power & Conflict', ar: 'القوة والصراع' },
  'footer.link.love_and_relationships': { en: 'Love & Relationships', ar: 'الحب والعلاقات' },
  'footer.link.edexcel_anthology': { en: 'Edexcel Anthology', ar: 'مختارات Edexcel' },
  'footer.link.ocr_anthology': { en: 'OCR Anthology', ar: 'مختارات OCR' },
  'footer.link.eduqas_anthology': { en: 'Eduqas Anthology', ar: 'مختارات Eduqas' },
  'footer.link.poetry': { en: 'Poetry', ar: 'الشعر' },
  'footer.link.texts': { en: 'Texts', ar: 'النصوص' },
  'footer.link.flashcards': { en: 'Flashcards', ar: 'البطاقات التعليمية' },
  'footer.link.exam_technique': { en: 'Exam Technique', ar: 'أساليب الامتحان' },
  'footer.link.language': { en: 'Language', ar: 'اللغة' },
  'footer.link.grade_targets': { en: 'Grade Targets', ar: 'أهداف الدرجات' },
  'footer.link.quiz': { en: 'Quiz', ar: 'الاختبار القصير' },
  'footer.link.edexcel_igcse': { en: 'Edexcel IGCSE', ar: 'Edexcel IGCSE' },
  'footer.link.cambridge_0500': { en: 'Cambridge 0500', ar: 'Cambridge 0500' },
  'footer.link.cambridge_0990': { en: 'Cambridge 0990', ar: 'Cambridge 0990' },
  'footer.link.igcse_hub': { en: 'IGCSE Hub', ar: 'مركز IGCSE' },
  'footer.link.resources_hub': { en: 'Resources Hub', ar: 'مركز المصادر' },
  'footer.link.study_guides': { en: 'Study Guides', ar: 'أدلة الدراسة' },
  'footer.link.writing_skills': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'footer.link.techniques': { en: 'Techniques', ar: 'أساليب وتقنيات' },
  'footer.link.model_answers': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  'footer.link.vocabulary': { en: 'Vocabulary', ar: 'المفردات' },
  'footer.link.study_tools': { en: 'Study Tools', ar: 'أدوات الدراسة' },
  'footer.link.about': { en: 'About', ar: 'عنّا' },
  'footer.link.verified_content': { en: 'Verified content', ar: 'محتوى موثَّق' },
  'footer.link.contact': { en: 'Contact', ar: 'تواصل معانا' },
  'footer.link.press': { en: 'Press', ar: 'الصحافة' },
  'footer.link.affiliate_programme': { en: 'Affiliate Programme', ar: 'برنامج الشراكة' },
  'footer.link.terms_of_service': { en: 'Terms of Service', ar: 'شروط الخدمة' },
  'footer.link.refund_policy': { en: 'Refund Policy', ar: 'سياسة الاسترجاع' },
  'footer.link.accessibility': { en: 'Accessibility', ar: 'إمكانية الوصول' },
  'footer.link.help_centre': { en: 'Help Centre', ar: 'مركز المساعدة' },
  'footer.link.faqs': { en: 'FAQs', ar: 'الأسئلة اللي يسألونها وايد' },
  'footer.board_badge.studying': { en: 'Studying', ar: 'تدرس' },
  'footer.brand_tagline': {
    en: 'GCSE & IGCSE English revision, courses, and exam prep — built for students, teachers, and schools.',
    ar: 'مراجعة وكورسات وتحضير امتحانات إنجليزي GCSE و IGCSE — مصمَّمة للطلاب والمعلمين والمدارس.',
  },
  'footer.edtech_impact_note': {
    en: 'Reviewed on EdTech Impact (4.x ★ — listing live Q3 2026)',
    ar: 'مراجَع على EdTech Impact (٤.x ★ — القائمة بتنزل Q3 ٢٠٢٦)',
  },
  'footer.manage_cookies': { en: 'Manage Cookies', ar: 'إدارة الكوكيز' },
  'footer.copyright_suffix': {
    en: 'The English Hub. All rights reserved.',
    ar: 'The English Hub. جميع الحقوق محفوظة.',
  },
  'footer.company_registration': {
    en: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690 · Registered in England & Wales · Registered office on request',
    ar: 'Upskill Energy Limited · رقم الشركة 16511479 · ICO ZC016690 · مسجَّلة في إنجلترا وويلز · العنوان المسجَّل عند الطلب',
  },
  'footer.bottom.privacy': { en: 'Privacy', ar: 'الخصوصية' },
  'footer.bottom.terms': { en: 'Terms', ar: 'الشروط' },
  'footer.bottom.contact': { en: 'Contact', ar: 'تواصل' },

  // ─── Homepage hero / marketing additions ─────────────────────────
  'home.hero.badge': {
    en: 'First Month Free — No Card Required',
    ar: 'أول شهر ببلاش — من غير بطاقة',
  },
  'home.hero.title_line1': { en: 'Master English.', ar: 'أتقن الإنجليزي.' },
  'home.hero.title_line2': { en: 'Ace Your Exams.', ar: 'وانجح في امتحاناتك.' },
  'home.hero.subtitle': {
    en: 'The all-in-one GCSE English platform. Structured courses, AI essay feedback, mock exams, and revision tools — all mapped to your exam board. AQA, Edexcel, OCR, WJEC, IGCSE & KS3.',
    ar: 'منصة GCSE للإنجليزي شاملة. كورسات مرتّبة وملاحظات ذكاء اصطناعي على مقالاتك وامتحانات تجريبية وأدوات مراجعة — كلها على أساس بورد الامتحان مالك. AQA و Edexcel و OCR و WJEC و IGCSE و KS3.',
  },
  'home.hero.trust.teachers': {
    en: 'Written by expert teachers',
    ar: 'مكتوب على إيد معلمين خبراء',
  },
  'home.hero.trust.grading': { en: 'GCSE 1–9 grading', ar: 'تقييم GCSE من ١ إلى ٩' },
  'home.hero.cta_start_free': {
    en: 'Start Free — No Card Needed',
    ar: 'ابدأ ببلاش — من غير بطاقة',
  },
  'home.hero.cta_browse': { en: 'Browse Courses', ar: 'تصفّح الكورسات' },
  'home.hero.cta_demo': { en: 'Try Interactive Demo', ar: 'جرّب الديمو التفاعلي' },
  'home.social_proof.heading': {
    en: 'Trusted by students, teachers, and schools across the UK',
    ar: 'محل ثقة الطلاب والمعلمين والمدارس في كل بريطانيا',
  },
  'home.stat.lessons': { en: 'Structured Lessons', ar: 'دروس مرتّبة' },
  'home.stat.mocks': { en: 'Mock Papers', ar: 'أوراق تجريبية' },
  'home.stat.poems': { en: 'Poem Studies', ar: 'دراسات شعرية' },
  'home.stat.games': { en: 'GCSE-Grade Games', ar: 'ألعاب على أساس درجات GCSE' },
  'home.stat.flashcards': { en: 'Flashcards', ar: 'بطاقات مراجعة' },
  'home.stat.grading': { en: 'Grade Tracking', ar: 'متابعة الدرجات' },
  'home.tip.label': { en: 'Top Tip:', ar: 'نصيحة مهمة:' },
  'home.tip.plan': {
    en: 'Always plan before you write — even 3 minutes of planning can boost your grade by a full band.',
    ar: 'دايماً خطّط قبل ما تكتب — حتى ٣ دقايق تخطيط يقدرون يرفعون درجتك بمستوى كامل.',
  },
  'home.tip.vocab': {
    en: 'Top marks reward precise vocabulary — swap "good" for "compelling", "bad" for "detrimental".',
    ar: 'أعلى الدرجات تنعطى للمفردات الدقيقة — بدّل "good" بـ "compelling"، و "bad" بـ "detrimental".',
  },
  'home.tip.reread': {
    en: 'Re-read the question after every paragraph to make sure you’re still answering it.',
    ar: 'اقرا السؤال مرة ثانية بعد كل فقرة عشان تتأكد إنك لازلت تجاوب عليه.',
  },
  'home.tip.context': {
    en: 'Embed context naturally — don’t bolt it on as a separate paragraph. Weave it into your analysis.',
    ar: 'دمج السياق طبيعي — لا تحطه كفقرة منفصلة. ادمجه داخل تحليلك.',
  },
  'home.tip.quotes': {
    en: 'Use short, punchy quotes and analyse individual word choices for top marks in any exam board.',
    ar: 'استخدم اقتباسات قصيرة وقوية، وحلّل اختيار الكلمات وحدة وحدة عشان تحصل على أعلى الدرجات بأي بورد امتحان.',
  },
  'home.tip.cyclical': {
    en: 'For creative writing, a cyclical structure (ending where you began) impresses markers.',
    ar: 'في الكتابة الإبداعية، الهيكل الدائري (تختم من وين بديت) يعجب المصححين وايد.',
  },
  'home.cin.auto_advance': {
    en: 'Auto-advance · hover to pause',
    ar: 'تقدّم تلقائي · مرّر فوق عشان توقف',
  },
  'home.cin.tab.for': { en: 'For', ar: 'لـ' },
  'home.cin.schools.label': { en: 'Schools', ar: 'مدارس' },
  'home.cin.schools.subtitle': { en: 'Whole-school licence', ar: 'ترخيص لكل المدرسة' },
  'home.cin.schools.kicker': {
    en: 'One licence · every student · every teacher',
    ar: 'ترخيص واحد · لكل طالب · لكل معلم',
  },
  'home.cin.schools.title': {
    en: 'From trends, to cohort, to the one student.',
    ar: 'من الاتجاهات للدفعة، إلى الطالب الواحد.',
  },
  'home.cin.schools.desc': {
    en: 'Department analytics that drill from year-level trends to a flagged student in four clicks — with every essay, mock and AO score attached, plus the intervention that closed the gap.',
    ar: 'تحليلات قسم تنزل من اتجاهات السنة لطالب محدَّد بأربع نقرات — مع كل مقال وامتحان تجريبي ودرجة AO، والتدخّل اللي سكّر الفجوة.',
  },
  'home.cin.schools.cta_call': { en: 'Book a call', ar: 'احجز مكالمة' },
  'home.cin.schools.cta_demo': { en: 'See the demo', ar: 'شوف الديمو' },
  'home.cin.teachers.label': { en: 'Teachers', ar: 'معلمين' },
  'home.cin.teachers.subtitle': {
    en: 'AI marker · 300 resources',
    ar: 'مصحّح ذكاء اصطناعي · ٣٠٠ مورد',
  },
  'home.cin.teachers.kicker': {
    en: 'Plan · teach · mark — in one hour, not ten',
    ar: 'خطّط · علِّم · صحِّح — في ساعة، مو عشرة',
  },
  'home.cin.teachers.title': {
    en: 'An AI marker that reads like you do.',
    ar: 'مصحّح ذكاء اصطناعي يقرا مثلك بالضبط.',
  },
  'home.cin.teachers.desc': {
    en: 'Generate differentiated lesson plans in seconds. Mark a whole class in minutes, with paragraph-by-paragraph feedback aligned to your exam board.',
    ar: 'سوِّ خطط دروس متنوّعة في ثواني. صحّح صف كامل في دقايق، مع ملاحظات فقرة فقرة على أساس بورد الامتحان مالك.',
  },
  'home.cin.teachers.cta_demo': { en: 'Try the teacher demo', ar: 'جرّب ديمو المعلم' },
  'home.cin.teachers.cta_pricing': { en: 'Plans & pricing', ar: 'الباقات والأسعار' },
  'home.cin.students.label': { en: 'Students', ar: 'طلاب' },
  'home.cin.students.subtitle': {
    en: '470 lessons · 130 mocks',
    ar: '٤٧٠ درس · ١٣٠ امتحان تجريبي',
  },
  'home.cin.students.kicker': {
    en: 'Learn · practise · get feedback · improve',
    ar: 'تعلّم · تمرّن · خذ ملاحظات · تحسّن',
  },
  'home.cin.students.title': {
    en: 'Everything you need to land the grade you want.',
    ar: 'كل اللي تحتاجه عشان تطلّع الدرجة اللي تبغاها.',
  },
  'home.cin.students.desc': {
    en: 'Structured courses you can actually follow. AI feedback that reads like a teacher’s. Flashcards, mocks and grade-predicting games — all mapped to your exam board.',
    ar: 'كورسات مرتّبة تقدر فعلاً تتابعها. ملاحظات ذكاء اصطناعي تقرا مثل ملاحظات المعلم. بطاقات مراجعة وامتحانات تجريبية وألعاب تتوقّع درجتك — كلها على أساس بورد الامتحان مالك.',
  },
  'home.cin.students.cta_start': { en: 'Start free — no card', ar: 'ابدأ ببلاش — من غير بطاقة' },
  'home.cin.students.cta_browse': { en: 'Browse courses', ar: 'تصفّح الكورسات' },
  'home.cin.parents.label': { en: 'Parents', ar: 'أهل' },
  'home.cin.parents.subtitle': { en: 'Progress · plain English', ar: 'تقدّم · بلغة واضحة' },
  'home.cin.parents.kicker': {
    en: 'See the progress · without the pressure',
    ar: 'شوف التقدّم · من غير ضغط',
  },
  'home.cin.parents.title': {
    en: 'Their confidence, on a dashboard you can read.',
    ar: 'ثقتهم في نفسهم، على لوحة تقدر تقراها بسهولة.',
  },
  'home.cin.parents.desc': {
    en: 'Weekly progress summaries. Streaks, focus areas and predicted grades in plain English. 7-day free trial on any paid plan — card required, cancel before day 7.',
    ar: 'ملخصات أسبوعية للتقدّم. سلاسل الأيام ومجالات التركيز والدرجات المتوقّعة بلغة واضحة. تجربة ٧ أيام ببلاش على أي باقة مدفوعة — البطاقة مطلوبة، ألغِ قبل اليوم السابع.',
  },
  'home.cin.parents.cta_trial': { en: 'Start 7-day trial', ar: 'ابدأ تجربة ٧ أيام' },
  'home.cin.parents.cta_guide': { en: 'Read the parent guide', ar: 'اقرا دليل الأهل' },
  'home.hiw.subtitle': {
    en: 'Six simple steps from sign-up to exam success.',
    ar: 'ست خطوات بسيطة من التسجيل إلى نجاحك في الامتحان.',
  },
  'home.hiw.step1.title': { en: 'Choose your exam board', ar: 'اختر بورد الامتحان مالك' },
  'home.hiw.step1.desc': {
    en: 'Select AQA, Edexcel, OCR, or WJEC and we tailor everything to your exam board.',
    ar: 'اختر AQA أو Edexcel أو OCR أو WJEC وإحنا نفصّل كل شي على أساس بوردك.',
  },
  'home.hiw.step2.title': { en: 'Follow structured courses', ar: 'اتبع كورسات مرتّبة' },
  'home.hiw.step2.desc': {
    en: 'Work through expert-written lessons in a logical sequence — no guessing what to study next.',
    ar: 'تابع دروس مكتوبة على إيد خبراء بترتيب منطقي — من غير ما تخمّن شنو الدرس الجاي.',
  },
  'home.hiw.step3.title': {
    en: 'Practice with real exam questions',
    ar: 'تمرّن على أسئلة امتحانات حقيقية',
  },
  'home.hiw.step3.desc': {
    en: 'Tackle exam-style questions with detailed mark schemes and model answers.',
    ar: 'جاوب على أسئلة على نمط الامتحان مع نماذج تصحيح مفصّلة وإجابات نموذجية.',
  },
  'home.hiw.step4.title': {
    en: 'Get AI feedback on your essays',
    ar: 'احصل على ملاحظات ذكاء اصطناعي على مقالاتك',
  },
  'home.hiw.step4.desc': {
    en: 'Submit your writing and receive instant, detailed feedback with grade estimates from our AI marker.',
    ar: 'سلّم كتابتك واحصل على ملاحظات مفصّلة فورية مع تقدير للدرجة من المصحّح الذكي مالنا.',
  },
  'home.hiw.step5.title': { en: 'Revise with flashcards & guides', ar: 'راجع بالبطاقات والأدلة' },
  'home.hiw.step5.desc': {
    en: 'Lock in your knowledge with 2,000+ flashcards, terminology glossaries, and board-specific exam guides.',
    ar: 'ثبّت معلوماتك بأكثر من ٢٬٠٠٠ بطاقة وقواميس مصطلحات وأدلة امتحان خاصة بكل بورد.',
  },
  'home.hiw.step6.title': { en: 'Ace your exams', ar: 'انجح في امتحاناتك' },
  'home.hiw.step6.desc': {
    en: 'Walk into your exam with confidence, backed by structured preparation and proven techniques.',
    ar: 'روح للامتحان بثقة، مدعوم بتحضير مرتّب وتقنيات مثبتة.',
  },
  'home.faq_full.q_trial': {
    en: 'Is there a free trial? Do I need a card?',
    ar: 'في تجربة ببلاش؟ ولازم بطاقة؟',
  },
  'home.faq_full.a_trial': {
    en: 'Two things. Every paid plan starts with a 7-day free trial — that requires full sign-up with a valid card. Cancel before day 7 from your account settings and you won’t be charged. Separately, every registered account gets 3 free uses of most premium features (AI marking, mock exams, lesson plans, etc.) so you can demo the product before putting a card down.',
    ar: 'شيئين. كل باقة مدفوعة تبدأ بتجربة ٧ أيام ببلاش — وهذي تحتاج تسجيل كامل ببطاقة شغّالة. ألغِ قبل اليوم السابع من إعدادات حسابك وما بنخصم شي. ومنفصل عن ذلك، كل حساب مسجَّل ياخذ ٣ استخدامات ببلاش لمعظم الميزات المميزة (تصحيح بالذكاء الاصطناعي، امتحانات تجريبية، خطط دروس، إلخ) عشان تجرّب المنتج قبل ما تدخل بطاقة.',
  },
  'home.faq_full.q_boards': {
    en: 'What exam boards do you cover?',
    ar: 'شنو البوردات اللي تغطّونها؟',
  },
  'home.faq_full.a_boards': {
    en: 'We cover AQA GCSE, Edexcel GCSE, Edexcel International GCSE (IGCSE), OCR, and WJEC/Eduqas. Each course is mapped to exactly what your exam board requires so you only study what you need. We also cover KS3 for Years 7-9.',
    ar: 'إحنا نغطّي AQA GCSE و Edexcel GCSE و Edexcel International GCSE (IGCSE) و OCR و WJEC/Eduqas. كل كورس مربوط بالضبط مع اللي يطلبه بوردك عشان تدرس بس اللي تحتاجه. كذلك نغطّي KS3 للسنوات ٧-٩.',
  },
  'home.faq_full.q_ai_feedback': {
    en: 'How does the AI essay feedback work?',
    ar: 'شلون تشتغل ملاحظات الذكاء الاصطناعي على المقالات؟',
  },
  'home.faq_full.a_ai_feedback': {
    en: 'Submit any essay and receive instant, detailed feedback scored against real GCSE mark schemes. You get an estimated grade band, assessment objective scores, specific strengths with direct quotes, and actionable suggestions to improve — like having a tutor available 24/7.',
    ar: 'سلّم أي مقال واحصل على ملاحظات مفصّلة فورية مقيَّمة على أساس نماذج تصحيح GCSE الحقيقية. تاخذ تقدير للدرجة ودرجات الأهداف التقييمية ونقاط القوة باقتباسات مباشرة، واقتراحات عملية للتحسين — مثل ما عندك مدرّس خاص متوفر ٢٤/٧.',
  },
  'home.faq_full.q_youtube': {
    en: 'How is this different from YouTube?',
    ar: 'شلون هذا يختلف عن يوتيوب؟',
  },
  'home.faq_full.a_youtube': {
    en: 'YouTube offers scattered videos with no structure, no feedback, and no progress tracking. The English Hub provides sequenced lessons written by experienced English teachers, exam-style practice with model answers, AI feedback, GCSE 1-9 grade tracking, and certificates.',
    ar: 'يوتيوب يعطيك فيديوهات متفرّقة من غير ترتيب ولا ملاحظات ولا متابعة تقدّم. The English Hub يوفّر دروس مرتّبة مكتوبة على إيد معلمين إنجليزي خبراء، وتدريب على نمط الامتحان مع إجابات نموذجية، وملاحظات ذكاء اصطناعي، ومتابعة درجات GCSE من ١-٩، وشهادات.',
  },
  'home.faq_full.q_cancel': { en: 'Can I cancel my subscription?', ar: 'أقدر ألغي اشتراكي؟' },
  'home.faq_full.a_cancel': {
    en: "Yes — cancel anytime from your account settings. There are no contracts or hidden fees. You'll keep access until the end of your billing period.",
    ar: 'إي — ألغِ أي وقت من إعدادات حسابك. ما في عقود ولا رسوم مخفية. بتظل عندك الخدمة لين نهاية فترة الفوترة.',
  },
  'home.faq_full.q_teachers': {
    en: 'Is there a version for teachers and schools?',
    ar: 'في نسخة للمعلمين والمدارس؟',
  },
  'home.faq_full.a_teachers': {
    en: 'Yes! Teachers get an AI lesson builder, student analytics dashboards, AI essay marking, and class management tools. Schools get a whole-school licence with department analytics, bulk user management, and dedicated support. We also have a Founding Schools Programme with preferential pricing for early adopters.',
    ar: 'إي! المعلمين يحصلون على باني دروس بالذكاء الاصطناعي، ولوحات تحليلات الطلاب، وتصحيح مقالات بالذكاء الاصطناعي، وأدوات إدارة الصف. والمدارس تحصل على ترخيص لكل المدرسة مع تحليلات القسم وإدارة مستخدمين بالجملة ودعم مخصّص. كذلك عندنا برنامج المدارس المؤسِّسة بأسعار مميّزة للمدارس اللي تنضم بدري.',
  },
  'home.faq_full.q_phone': { en: 'Can I access on my phone?', ar: 'أقدر أستخدمه على الموبايل؟' },
  'home.faq_full.a_phone': {
    en: 'Absolutely. The English Hub is fully responsive and works perfectly on smartphones, tablets, and desktops. Study wherever suits you best.',
    ar: 'أكيد. The English Hub يشتغل على كل الأجهزة، يشتغل تمام على الموبايل والتابلت والكمبيوتر. ادرس من وين ما تبغى.',
  },
  'home.faq_full.q_grades': {
    en: 'What grades does this cover?',
    ar: 'شنو الدرجات اللي تغطّونها؟',
  },
  'home.faq_full.a_grades': {
    en: 'All content uses the GCSE 1–9 grading system. Every student gets a Working At Grade, Predicted Grade, and Target Grade so you always know where you stand and what to work on next. For KS3 students, we adapt the tracking to match your year group.',
    ar: 'كل المحتوى يستخدم نظام تقييم GCSE من ١ إلى ٩. كل طالب يحصل على درجة الأداء الحالي ودرجة متوقّعة ودرجة هدف، عشان تعرف الحين وين أنت وشنو لازم تشتغل عليه. لطلاب KS3، نعدّل المتابعة على أساس سنتك.',
  },
  'home.final_cta.heading': { en: 'Start your anthology.', ar: 'ابدأ أنطولوجيتك.' },
  'home.final_cta.body': {
    en: 'Join thousands of students raising their grade with The English Hub. Demo free without a card — then a 7-day trial when you’re ready.',
    ar: 'انضم لآلاف الطلاب اللي يرفعون درجاتهم مع The English Hub. جرّب ببلاش من غير بطاقة — وبعدين تجربة ٧ أيام لمّا تكون جاهز.',
  },
  'home.final_cta.button': { en: 'Start for free', ar: 'ابدأ ببلاش' },
  'home.cta_banner.heading': { en: 'Ready to Raise Your Grade?', ar: 'جاهز ترفع درجتك؟' },
  'home.cta_banner.body': {
    en: 'GCSE and IGCSE English revision, AI marked against the AO rubric.',
    ar: 'مراجعة إنجليزي GCSE و IGCSE، مصحَّحة بالذكاء الاصطناعي على أساس معايير AO.',
  },
  'home.cta_banner.view_all_courses': { en: 'View all courses', ar: 'شوف كل الكورسات' },

  // ─── Audience / role pages (students/teachers/schools/parents) ───
  'audience.role.student': { en: 'Student', ar: 'طالب' },
  'audience.role.teacher': { en: 'Teacher', ar: 'معلم' },
  'audience.role.school': { en: 'School', ar: 'مدرسة' },
  'audience.built_for_three.prefix': { en: 'Built for three', ar: 'مصمَّم لثلاث' },
  'audience.built_for_three.emphasis': { en: 'audiences', ar: 'فئات' },
  'audience.built_for_everyone': { en: 'Built for Everyone', ar: 'مصمَّم للكل' },
  'audience.built_for_everyone.sub': {
    en: "Whether you're revising for exams or running a classroom, we've got you covered.",
    ar: 'سواء كنت تراجع للامتحان أو تدير صف، إحنا معاك.',
  },
  'audience.tab.students': { en: 'For Students', ar: 'للطلاب' },
  'audience.tab.teachers': { en: 'For Teachers', ar: 'للمعلمين' },
  'audience.cta.start_free': { en: 'Start free', ar: 'ابدأ ببلاش' },
  'audience.cta.start_trial': { en: 'Start Free Trial', ar: 'ابدأ التجربة المجانية' },
  'audience.cta.start_teaching': { en: 'Start Teaching', ar: 'ابدأ التدريس' },
  'audience.cta.teacher_plans': { en: 'Teacher plans', ar: 'خطط المعلمين' },
  'audience.cta.book_call': { en: 'Book a call', ar: 'احجز مكالمة' },
  'audience.student.headline': { en: 'Ace every paper.', ar: 'تفوّق في كل امتحان.' },
  'audience.student.feat.lessons': {
    en: '470+ structured lessons mapped to your board',
    ar: 'أكثر من ٤٧٠ درس مرتّب على بورد امتحانك',
  },
  'audience.student.feat.ai_feedback': {
    en: 'AI essay feedback with grade + targets',
    ar: 'ملاحظات الذكاء الاصطناعي على المقال مع الدرجة والأهداف',
  },
  'audience.student.feat.mocks': {
    en: '130+ mock exams with real boundaries',
    ar: 'أكثر من ١٣٠ امتحان تجريبي بحدود درجات حقيقية',
  },
  'audience.student.feat.games': {
    en: '7 revision games to learn through play',
    ar: '٧ ألعاب مراجعة عشان تتعلم وانت تلعب',
  },
  'audience.student.feat.grade_ladder': {
    en: 'Grade ladder tracking from 1 to 9',
    ar: 'تتبّع سلم الدرجات من ١ إلى ٩',
  },
  'audience.student.feat.flashcards': {
    en: '2,000+ flashcards & terminology drills',
    ar: 'أكثر من ٢٬٠٠٠ بطاقة وتدريبات مصطلحات',
  },
  'audience.teacher.headline': { en: 'Plan less. Teach more.', ar: 'خطّط أقل. درّس أكثر.' },
  'audience.teacher.feat.lesson_builder': {
    en: 'AI lesson builder — board-aligned in seconds',
    ar: 'منشئ الدروس بالذكاء الاصطناعي — متوافق مع البورد في ثواني',
  },
  'audience.teacher.feat.analytics': {
    en: 'Student analytics dashboard',
    ar: 'لوحة تحليلات الطلاب',
  },
  'audience.teacher.feat.resources': {
    en: '300+ ready-to-use resources & worksheets',
    ar: 'أكثر من ٣٠٠ مورد وورقة عمل جاهزة للاستخدام',
  },
  'audience.teacher.feat.assignments': {
    en: 'Set & track assignments per class',
    ar: 'حدّد وتابع الواجبات لكل صف',
  },
  'audience.teacher.feat.reports': {
    en: "Export reports for parents' evenings",
    ar: 'صدّر تقارير لليالي أولياء الأمور',
  },
  'audience.teacher.feat.priority_support': {
    en: 'Priority support from a real human',
    ar: 'دعم بأولوية من شخص حقيقي',
  },
  'audience.school.headline': { en: 'Whole-department access.', ar: 'وصول لكل القسم.' },
  'audience.school.feat.unlimited': {
    en: 'Unlimited students & teachers',
    ar: 'طلاب ومعلمين بلا حدود',
  },
  'audience.school.feat.dept_analytics': {
    en: 'Department analytics & progress reports',
    ar: 'تحليلات القسم وتقارير التقدّم',
  },
  'audience.school.feat.bulk_onboard': {
    en: 'Bulk onboarding via CSV or SSO',
    ar: 'تسجيل جماعي عن طريق CSV أو SSO',
  },
  'audience.school.feat.admin_portal': { en: 'Teacher admin portal', ar: 'بوابة إدارة المعلمين' },
  'audience.school.feat.cpd': { en: 'CPD resources included', ar: 'موارد التطوير المهني مشمولة' },
  'audience.school.feat.founding_locked': {
    en: 'Founding programme — locked rates for 2-3 yrs',
    ar: 'برنامج المؤسسين — أسعار مثبّتة لمدة ٢-٣ سنوات',
  },
  'audience.student.benefit.ai_feedback.title': {
    en: 'AI-Powered Essay Feedback',
    ar: 'ملاحظات على المقال بالذكاء الاصطناعي',
  },
  'audience.student.benefit.ai_feedback.desc': {
    en: 'Submit your essay and get instant, detailed feedback with grade estimates, strengths, and paragraph-by-paragraph annotation.',
    ar: 'ارسل مقالتك وخذ ملاحظات فورية ومفصّلة مع تقدير الدرجة ونقاط القوة وتعليق على كل فقرة.',
  },
  'audience.student.benefit.board_specific.title': {
    en: 'Board-Specific Revision Materials',
    ar: 'مواد مراجعة حسب بورد امتحانك',
  },
  'audience.student.benefit.board_specific.desc': {
    en: 'Tailored content for AQA, Edexcel, OCR, and WJEC — study only what your exam board requires.',
    ar: 'محتوى مفصّل لـ AQA و Edexcel و OCR و WJEC — ادرس بس اللي يطلبه بورد امتحانك.',
  },
  'audience.student.benefit.practice.title': {
    en: 'Practice Questions with Model Answers',
    ar: 'أسئلة تدريب مع إجابات نموذجية',
  },
  'audience.student.benefit.practice.desc': {
    en: 'Exam-style questions modelled on real papers, complete with mark schemes and model answers at every grade band.',
    ar: 'أسئلة بأسلوب الامتحان مبنية على ورقات حقيقية مع نماذج التصحيح وإجابات نموذجية لكل مستوى درجات.',
  },
  'audience.student.benefit.mocks.title': {
    en: 'Mock Exams with Timing',
    ar: 'امتحانات تجريبية بتوقيت حقيقي',
  },
  'audience.student.benefit.mocks.desc': {
    en: '130+ full-length timed mock exams in real exam format. Practise under pressure and build exam stamina.',
    ar: 'أكثر من ١٣٠ امتحان تجريبي كامل بتوقيت حقيقي وبنفس صيغة الامتحان. تدرّب تحت ضغط وبنّي قدرة تحمّل للامتحان.',
  },
  'audience.student.benefit.progress.title': { en: 'Progress Tracking', ar: 'تتبّع التقدّم' },
  'audience.student.benefit.progress.desc': {
    en: 'Track your progress through every course with visual dashboards, completion badges, and revision streaks.',
    ar: 'تابع تقدّمك في كل دورة بلوحات مرئية وشارات إنجاز وسلاسل مراجعة متتالية.',
  },
  'audience.teacher.benefit.lesson_builder.title': {
    en: 'Lesson Builder with 300+ Templates',
    ar: 'منشئ الدروس بأكثر من ٣٠٠ قالب',
  },
  'audience.teacher.benefit.lesson_builder.desc': {
    en: 'Create polished lessons in minutes with ready-made templates covering every GCSE English topic.',
    ar: 'سوِّ دروس متقنة في دقايق بقوالب جاهزة تغطي كل مواضيع GCSE English.',
  },
  'audience.teacher.benefit.analytics.title': {
    en: 'Student Analytics Dashboard',
    ar: 'لوحة تحليلات الطلاب',
  },
  'audience.teacher.benefit.analytics.desc': {
    en: 'See how every student is progressing at a glance — completion rates, grades, strengths, and gaps.',
    ar: 'شوف تقدّم كل طالب بنظرة واحدة — نسب الإنجاز والدرجات ونقاط القوة والثغرات.',
  },
  'audience.teacher.benefit.ai_marking.title': {
    en: 'AI Essay Marking for Whole Classes',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي لصفوف كاملة',
  },
  'audience.teacher.benefit.ai_marking.desc': {
    en: 'Mark an entire class set of essays in seconds. AI-powered feedback aligned to GCSE mark schemes.',
    ar: 'صحّح مقالات صف كامل في ثواني. ملاحظات بالذكاء الاصطناعي متوافقة مع نماذج تصحيح GCSE.',
  },
  'audience.teacher.benefit.predicted.title': {
    en: 'Predicted Grades & Targeted Recommendations',
    ar: 'درجات متوقّعة وتوصيات موجَّهة',
  },
  'audience.teacher.benefit.predicted.desc': {
    en: 'Data-driven grade predictions and personalised recommendations to help every student reach their target.',
    ar: 'توقّعات درجات مبنية على البيانات وتوصيات شخصية تساعد كل طالب يوصل لهدفه.',
  },
  'audience.teacher.benefit.classes.title': {
    en: 'Class Management & Homework Setting',
    ar: 'إدارة الصفوف وتحديد الواجبات',
  },
  'audience.teacher.benefit.classes.desc': {
    en: 'Create classes, set assignments, track submissions, and manage homework — all in one place.',
    ar: 'سوِّ صفوف وحدّد واجبات وتابع التسليم وأدِر الواجب البيتي — كله في مكان واحد.',
  },
  'audience.teacher.benefit.printables.title': {
    en: 'Printable Worksheets & Resources',
    ar: 'ورقات عمل وموارد قابلة للطباعة',
  },
  'audience.teacher.benefit.printables.desc': {
    en: 'Download and print worksheets, model answers, and revision materials for use in lessons.',
    ar: 'نزّل واطبع ورقات العمل والإجابات النموذجية ومواد المراجعة عشان تستخدمها في الدروس.',
  },
  'audience.schools.hero.badge': {
    en: 'For Schools & Multi-Academy Trusts',
    ar: 'للمدارس والمجموعات التعليمية',
  },
  'audience.schools.hero.title': {
    en: 'Whole-department English platform for UK schools',
    ar: 'منصة English لكامل القسم للمدارس البريطانية',
  },
  'audience.schools.hero.sub': {
    en: "Bulk onboarding, teacher dashboards, AI essay marking, and Head's Reports — see what every department gets when they join.",
    ar: 'تسجيل جماعي، لوحات معلمين، تصحيح المقال بالذكاء الاصطناعي، وتقارير لرئيس القسم — شوف شنو يحصل عليه كل قسم لما ينضم.',
  },
  'audience.schools.cta.see_pricing': { en: 'See pricing', ar: 'شوف الأسعار' },
  'audience.schools.banner.badge': {
    en: 'FIRST 10 SCHOOLS — FOUNDING PARTNER PRICING',
    ar: 'أول ١٠ مدارس — أسعار الشريك المؤسس',
  },
  'audience.schools.banner.desc': {
    en: 'We are partnering with the first 10 schools to sign as founding partners to shape the future of English teaching. This is not a free trial — it is a strategic partnership. Founding schools receive heavily discounted pricing, early features, direct product input, and locked preferential rates for 2-3 years. Schools joining after the founding cohort are welcome at our standard rates.',
    ar: 'إحنا نتشارك مع أول ١٠ مدارس تنضم كشركاء مؤسسين عشان نشكّل مستقبل تدريس English. هذي مو تجربة مجانية — هذي شراكة استراتيجية. المدارس المؤسِّسة تحصل على أسعار مخفّضة وايد وميزات مبكرة ورأي مباشر في المنتج وأسعار تفضيلية مثبّتة لمدة ٢-٣ سنوات. المدارس اللي تنضم بعد فوج المؤسسين حياها الله بالأسعار القياسية.',
  },
  'audience.schools.what_receive': {
    en: 'What founding schools receive',
    ar: 'شنو تحصل عليه المدارس المؤسِّسة',
  },
  'audience.schools.features.title': { en: 'Platform Features', ar: 'ميزات المنصة' },
  'audience.schools.features.sub': {
    en: 'Everything Your Department Needs',
    ar: 'كل اللي يحتاجه قسمك',
  },
  'audience.schools.demo.title': {
    en: 'Explore the Full Platform -- No Signup Required',
    ar: 'استكشف المنصة كاملة — بلا تسجيل',
  },
  'audience.schools.demo.sub': {
    en: 'Navigate a complete school dashboard with sample data. Click through students, classes, analytics, and reports. See exactly what your school gets.',
    ar: 'تنقّل في لوحة مدرسة كاملة ببيانات تجريبية. اضغط على الطلاب والصفوف والتحليلات والتقارير. شوف بالضبط شنو تحصل عليه مدرستك.',
  },
  'audience.schools.final.badge': { en: 'ONLY 10 FOUNDING SCHOOLS', ar: 'بس ١٠ مدارس مؤسِّسة' },
  'audience.schools.final.title': {
    en: 'Join the Founding Schools Programme',
    ar: 'انضم لبرنامج المدارس المؤسِّسة',
  },
  'audience.schools.final.title_emphasis': { en: 'Before It Closes', ar: 'قبل ما يسكّر' },
  'audience.schools.final.desc': {
    en: 'First 10 schools get founding-partner pricing, locked for 2-3 years. Early features. Direct product input. Additional schools welcome at standard rates after the cohort closes.',
    ar: 'أول ١٠ مدارس تحصل على أسعار الشريك المؤسس، مثبّتة لمدة ٢-٣ سنوات. ميزات مبكرة. رأي مباشر في المنتج. المدارس الإضافية حياها الله بالأسعار القياسية بعد ما يسكّر الفوج.',
  },
  'audience.schools.final.no_obligation': {
    en: 'No obligation. No hard sell. Just a conversation about whether the programme is right for your school.',
    ar: 'بلا التزام. بلا ضغط بيع. بس حوار عشان نشوف إذا البرنامج مناسب لمدرستك.',
  },
  'audience.schools.final.email_direct': {
    en: 'Or email us directly at',
    ar: 'أو راسلنا مباشرة على',
  },
  'audience.teachers.hero.badge': { en: 'For English Teachers', ar: 'لمعلمي English' },
  'audience.teachers.hero.title': {
    en: 'English department tools for AQA, Edexcel, OCR and WJEC teachers',
    ar: 'أدوات قسم English لمعلمي AQA و Edexcel و OCR و WJEC',
  },
  'audience.teachers.hero.sub': {
    en: 'Premium academic infrastructure, not a cheap app. AI-powered lesson building, instant essay marking, and real-time progress analytics -- built specifically for English teachers.',
    ar: 'بنية تحتية أكاديمية متقدّمة، مو تطبيق رخيص. بناء دروس بالذكاء الاصطناعي، تصحيح فوري للمقال، وتحليلات تقدّم لحظية — مصمَّم خصيصاً لمعلمي English.',
  },
  'audience.teachers.hero.demo_note': {
    en: 'Every feature available to try -- 3 free uses per tool. No credit card required.',
    ar: 'كل ميزة متاحة للتجربة — ٣ استخدامات ببلاش لكل أداة. ما تحتاج بطاقة ائتمان.',
  },
  'audience.teachers.cta.start_free': { en: 'Start Free', ar: 'ابدأ ببلاش' },
  'audience.teachers.cta.try_demo': { en: 'Try the Demo', ar: 'جرّب الديمو' },
  'audience.parents.hero.badge': { en: 'For Parents & Guardians', ar: 'لأولياء الأمور والأوصياء' },
  'audience.parents.hero.title': {
    en: 'Help your child pass GCSE or',
    ar: 'ساعد ولدك ينجح في GCSE أو',
  },
  'audience.parents.hero.title_emphasis': { en: 'IGCSE English', ar: 'IGCSE English' },
  'audience.parents.hero.sub': {
    en: "Get real-time insights into your child's revision progress, exam readiness, and areas for improvement. No more guessing — see exactly what they're learning and where they need help.",
    ar: 'احصل على رؤى لحظية لتقدّم ولدك في المراجعة وجاهزيته للامتحان والمجالات اللي يحتاج يحسّنها. بلا تخمين — شوف بالضبط شنو يتعلّم ووين يحتاج مساعدة.',
  },
  'audience.parents.cta.start_trial': {
    en: "Start Your Child's Free Trial",
    ar: 'ابدأ التجربة المجانية لولدك',
  },
  'audience.parents.cta.reading_check': {
    en: 'Run a 20-minute reading-age check (free, no card)',
    ar: 'سوِّ فحص عمر القراءة في ٢٠ دقيقة (ببلاش، بلا بطاقة)',
  },
  'audience.parents.cta.see_how': { en: 'See How It Works', ar: 'شوف كيف يشتغل' },
  'audience.parents.pricing.title': {
    en: 'Simple, Transparent Pricing',
    ar: 'أسعار بسيطة وشفّافة',
  },
  'audience.parents.pricing.sub': {
    en: 'Same price as an individual plan. Parent pays, child learns.',
    ar: 'نفس سعر الخطة الفردية. ولي الأمر يدفع، الولد يتعلّم.',
  },
  'audience.parents.pricing.plan_name': { en: 'Family Plan', ar: 'خطة العائلة' },
  'audience.parents.pricing.plan_desc': {
    en: 'Full access for your child + parent dashboard',
    ar: 'وصول كامل لولدك + لوحة ولي الأمر',
  },
  'audience.parents.final.title': { en: 'Ready to Support Their Success?', ar: 'جاهز تدعم نجاحه؟' },
  'audience.parents.final.sub': {
    en: 'Start with a free trial and see what real progress tracking looks like for GCSE and IGCSE English revision.',
    ar: 'ابدأ بتجربة مجانية وشوف شلون يكون تتبّع التقدّم الحقيقي لمراجعة GCSE و IGCSE English.',
  },
  'audience.parents.final.dashboard': { en: 'Go to Parent Dashboard', ar: 'روح للوحة ولي الأمر' },
  'audience.parents.contact.title': { en: 'Have a Question?', ar: 'عندك سؤال؟' },
  'audience.parents.contact.body': {
    en: "We're here to help. If you have any questions about how the platform works, pricing, or your child's progress, please get in touch.",
    ar: 'إحنا هنا نساعدك. إذا عندك أي سؤال عن شلون تشتغل المنصة أو عن الأسعار أو عن تقدّم ولدك، لو سمحت تواصل معانا.',
  },

  // ─── Auth flow ───────────────────────────────────────────────────
  'auth.back_to_home': { en: 'Back to home', ar: 'رجوع للرئيسية' },
  'auth.back_to_login': { en: 'Back to login', ar: 'رجوع لتسجيل الدخول' },
  'auth.back_to_sign_in': { en: 'Back to sign in', ar: 'رجوع لتسجيل الدخول' },
  'auth.go_to_login': { en: 'Go to login', ar: 'روح لتسجيل الدخول' },
  'auth.signing_in': { en: 'Signing in...', ar: 'لحظة، نسجّل دخولك...' },
  'auth.or_sign_in_with_email': { en: 'or sign in with email', ar: 'أو سجّل دخول بالإيميل' },
  'auth.or_sign_up_with_email': { en: 'or sign up with email', ar: 'أو سوِّ حساب بالإيميل' },
  'auth.resend_verification_email': {
    en: 'Resend verification email',
    ar: 'ارسل إيميل التأكيد مرة ثانية',
  },
  'auth.didnt_get_verification': {
    en: "Didn't get the verification email?",
    ar: 'ما وصلك إيميل التأكيد؟',
  },
  'auth.no_account_q': { en: "Don't have an account?", ar: 'ما عندك حساب؟' },
  'auth.start_free_trial': { en: 'Start Free Trial', ar: 'ابدأ تجربتك المجانية' },
  'auth.login.subtitle': {
    en: 'Sign in to your English Hub account. New here? Sign up below — it takes 30 seconds.',
    ar: 'سجّل دخولك لحسابك في The English Hub. أول مرة هنا؟ سوّ حساب تحت — يستغرق ٣٠ ثانية بس.',
  },
  'auth.login.email_not_confirmed_prompt': {
    en: 'Email not confirmed yet?',
    ar: 'الإيميل ما تأكد لحد الحين؟',
  },
  'auth.error.callback_failed': {
    en: 'Something went wrong verifying your account. Please try again or request a new link.',
    ar: 'صار خطأ في تأكيد حسابك. جرّب مرة ثانية أو اطلب رابط جديد.',
  },
  'auth.error.signin_failed': {
    en: "We couldn't sign you in. Double-check your email and password — or if you've just signed up, the verification link in your inbox might still be needed.",
    ar: 'ما قدرنا نسجّل دخولك. تأكد من الإيميل والرمز السري — وإذا للتو سوّيت حساب، يمكن لازم تضغط رابط التأكيد في الإيميل أول.',
  },
  'auth.legacy_account_help_before': {
    en: "If your account was created before 28 April 2026 and you can't sign in, contact",
    ar: 'إذا حسابك صار قبل ٢٨ أبريل ٢٠٢٦ وما تقدر تدخل، راسلنا على',
  },
  'auth.legacy_account_help_after': {
    en: "— we'll sort it manually.",
    ar: '— بنحل المسألة يدوياً.',
  },
  'auth.forgot.title': { en: 'Reset your password', ar: 'غيّر الرمز السري' },
  'auth.forgot.subtitle': {
    en: "Enter your email and we'll send you a reset link.",
    ar: 'اكتب إيميلك وبنرسل لك رابط التغيير.',
  },
  'auth.forgot.sending': { en: 'Sending reset link...', ar: 'لحظة، نرسل الرابط...' },
  'auth.forgot.sent_prefix': { en: 'If an account exists for', ar: 'إذا في حساب على' },
  'auth.forgot.sent_suffix': {
    en: ", we've sent a password reset link. Please check your inbox.",
    ar: '، رسّلنا لك رابط تغيير الرمز السري. شيك على الإيميل لو سمحت.',
  },
  'auth.forgot.spam_help_before': {
    en: "Didn't receive an email? Check your spam folder or contact",
    ar: 'ما وصلك إيميل؟ شوف الـ spam أو راسلنا على',
  },
  'auth.forgot.remembered': { en: 'Remember your password?', ar: 'تذكرت الرمز السري؟' },
  'auth.forgot.still_need_help': {
    en: 'Still need help? Contact us at',
    ar: 'لسا تحتاج مساعدة؟ راسلنا على',
  },
  'auth.reset.link_invalid': {
    en: 'Link expired or invalid. Please request a new reset link.',
    ar: 'الرابط انتهى أو مو صحيح. اطلب رابط تغيير جديد لو سمحت.',
  },
  'auth.reset.verifying': { en: 'Verifying reset link…', ar: 'لحظة، نتأكد من الرابط…' },
  'auth.reset.verifying_help_before': { en: 'If nothing happens,', ar: 'إذا ما صار شي،' },
  'auth.reset.request_new_link': { en: 'request a new link', ar: 'اطلب رابط جديد' },
  'auth.reset.unavailable_title': { en: 'Reset link unavailable', ar: 'رابط التغيير مو متاح' },
  'auth.reset.request_new_reset_link': {
    en: 'Request a new reset link',
    ar: 'اطلب رابط تغيير جديد',
  },
  'auth.reset.set_title': { en: 'Set new password', ar: 'حدد رمز سري جديد' },
  'auth.reset.set_subtitle': {
    en: 'Choose a strong password for your account.',
    ar: 'اختر رمز سري قوي لحسابك.',
  },
  'auth.reset.updating': { en: 'Updating password…', ar: 'لحظة، نحدّث الرمز السري…' },
  'auth.reset.update_password': { en: 'Update password', ar: 'حدّث الرمز السري' },
  'auth.reset.success_title': { en: 'Password updated', ar: 'تم تحديث الرمز السري' },
  'auth.reset.success_body': {
    en: 'Your password has been changed successfully. Redirecting you to login…',
    ar: 'تم تغيير رمزك السري بنجاح. لحظة، بنحوّلك لصفحة تسجيل الدخول…',
  },
  'auth.resend.title': { en: 'Resend your verification email', ar: 'ارسل إيميل التأكيد مرة ثانية' },
  'auth.resend.subtitle': {
    en: "Pop your email in below. We'll send a fresh link to your inbox — check spam too.",
    ar: 'اكتب إيميلك تحت. بنرسل لك رابط جديد — شيك على الـ spam بعد.',
  },
  'auth.resend.sending': { en: 'Sending fresh link...', ar: 'لحظة، نرسل رابط جديد...' },
  'auth.resend.cta': { en: 'Send me a fresh link', ar: 'ارسل لي رابط جديد' },
  'auth.resend.sent_title': { en: 'Sent', ar: 'تم الإرسال' },
  'auth.resend.sent_body': {
    en: 'Check your inbox — including spam — for an email from The English Hub.',
    ar: 'شيك على الإيميل — بما فيه الـ spam — على إيميل من The English Hub.',
  },
  'auth.resend.still_no_email': {
    en: 'Still no email? Contact',
    ar: 'لسا ما وصل الإيميل؟ راسلنا على',
  },
  'auth.resend.manual_confirm': {
    en: "— we'll confirm you manually.",
    ar: '— بنأكد حسابك يدوياً.',
  },
  'auth.resend.troubleshoot_title': {
    en: 'Tried twice and still no email?',
    ar: 'جرّبت مرتين ولسا ما وصل الإيميل؟',
  },
  'auth.resend.use_google': { en: 'Sign in with Google instead', ar: 'سجّل دخول بـ Google بدال' },
  'auth.resend.use_google_help': {
    en: "— Google verifies your email for us, so you don't need our link.",
    ar: '— Google يأكد إيميلك بدالنا، فما تحتاج رابطنا.',
  },
  'auth.resend.verified_other_tab': {
    en: 'Already verified your link in another tab?',
    ar: 'تأكدت من الرابط في تبويب ثاني؟',
  },
  'auth.resend.just_sign_in': { en: 'Just sign in', ar: 'سجّل دخول مباشرة' },
  'auth.resend.contact_before': { en: 'Contact us at', ar: 'راسلنا على' },
  'auth.resend.contact_after': {
    en: "— we'll confirm your email manually within a few hours.",
    ar: '— بنأكد إيميلك يدوياً خلال ساعات.',
  },
  'auth.resend.already_verified_q': { en: 'Already verified?', ar: 'تأكد الإيميل؟' },
  'auth.resend.already_verified': {
    en: 'This email is already verified — sign in or reset your password.',
    ar: 'هذا الإيميل متأكد من قبل — سجّل دخول أو غيّر الرمز السري.',
  },
  'auth.register.teacher_banner_q': { en: 'Are you a teacher?', ar: 'أنت معلم؟' },
  'auth.register.teacher_banner_body': {
    en: 'Get lesson plans, AI marking, and analytics built for educators.',
    ar: 'خذ خطط دروس وتصحيح بالذكاء الاصطناعي وتحليلات مصممة للمعلمين.',
  },
  'auth.register.teacher_signup_cta': { en: 'Teacher sign-up', ar: 'تسجيل المعلمين' },
  'auth.register.signup_takes_30s': {
    en: 'Sign-up takes 30 seconds. No card required.',
    ar: 'التسجيل يستغرق ٣٠ ثانية. من غير بطاقة.',
  },
  'auth.register.student_title': { en: 'Create your free account', ar: 'سوّ حسابك المجاني' },
  'auth.register.teacher_title': {
    en: 'Start your free teacher account',
    ar: 'ابدأ حساب المعلم المجاني',
  },
  'auth.register.student_subtitle': {
    en: 'No credit card required. Try every premium feature 3 times, free.',
    ar: 'من غير بطاقة. جرّب كل ميزة بريميوم ٣ مرات ببلاش.',
  },
  'auth.register.teacher_subtitle': {
    en: 'Save 5+ hours per week with AI lesson planning and marking.',
    ar: 'وفّر ٥ ساعات أو أكثر في الأسبوع مع تخطيط الدروس والتصحيح بالذكاء الاصطناعي.',
  },
  'auth.register.whats_included': { en: "What's included free", ar: 'شنو يدخل ببلاش' },
  'auth.register.included_courses': {
    en: 'Courses, revision notes, flashcards (unlimited)',
    ar: 'كورسات وملخصات مراجعة وبطاقات (بلا حدود)',
  },
  'auth.register.included_ai': {
    en: '3 free uses of every AI tool (marking, lesson plans, and more)',
    ar: '٣ استخدامات مجانية لكل أداة ذكاء اصطناعي (التصحيح وخطط الدروس وأكثر)',
  },
  'auth.register.included_upgrade': {
    en: "Upgrade when you're ready — 7-day free trial (card required)",
    ar: 'اشترك لما تكون جاهز — تجربة مجانية ٧ أيام (تحتاج بطاقة)',
  },
  'auth.register.i_am_a': { en: 'I am a', ar: 'أنا' },
  'auth.register.student': { en: 'Student', ar: 'طالب' },
  'auth.register.teacher': { en: 'Teacher', ar: 'معلم' },
  'auth.register.neutral_signup_response': {
    en: 'If this email address is valid and not already registered, we have sent a verification link to it. Please check your inbox (including spam) and follow the link to activate your account.',
    ar: 'إذا الإيميل صحيح وما هو مسجّل من قبل، رسّلنا له رابط تأكيد. شيك على الإيميل (والـ spam) واضغط الرابط عشان تفعّل حسابك.',
  },
  'auth.register.welcome_prefix': {
    en: "Welcome to The English Hub. We've sent a quick verification link to",
    ar: 'حياك الله في The English Hub. رسّلنا رابط تأكيد سريع على',
  },
  'auth.register.welcome_suffix': {
    en: 'so we can keep your account safe — but you can keep exploring while you wait. The link will let you log back in next time.',
    ar: 'عشان نحافظ على أمان حسابك — بس تقدر تكمّل تتصفح وأنت تنتظر. الرابط بيخليك تدخل المرة الجاية.',
  },
  'auth.register.trial_ready_lead': {
    en: 'Your free trial is ready.',
    ar: 'تجربتك المجانية جاهزة.',
  },
  'auth.register.trial_ready_body': {
    en: 'You have 3 free uses of every premium feature — AI marking, lesson plans, and more.',
    ar: 'عندك ٣ استخدامات مجانية لكل ميزة بريميوم — التصحيح بالذكاء الاصطناعي وخطط الدروس وأكثر.',
  },
  'auth.register.teacher_after_verify': {
    en: "Once verified, you'll have access to the Teacher Dashboard with lesson planning, student analytics, and assessment tools.",
    ar: 'بعد ما تأكد الإيميل، بتدخل لوحة المعلم اللي فيها تخطيط الدروس وتحليلات الطلاب وأدوات التقييم.',
  },
  'auth.register.start_exploring': { en: 'Start exploring', ar: 'ابدأ تتصفح' },
  'auth.register.terms_agreement_before': {
    en: 'By creating an account, you agree to our',
    ar: 'بإنشاء الحساب، أنت توافق على',
  },
  'auth.register.terms_and': { en: 'and', ar: 'و' },
  'auth.register.creating': { en: 'Creating account...', ar: 'لحظة، نسوّي حسابك...' },
  'auth.register.create_free_account': { en: 'Create free account', ar: 'سوّ حساب مجاني' },
  'auth.register.create_teacher_account': {
    en: 'Create free teacher account',
    ar: 'سوّ حساب معلم مجاني',
  },
  'auth.register.already_have_account': { en: 'Already have an account?', ar: 'عندك حساب من قبل؟' },
  'auth.teacher.badge': { en: 'Teachers', ar: 'المعلمين' },
  'auth.teacher.title': { en: 'Start your free teacher account', ar: 'ابدأ حساب المعلم المجاني' },
  'auth.teacher.subtitle': {
    en: 'Save 5+ hours per week with AI lesson planning and marking. 3 free uses of every AI tool. Upgrade for unlimited.',
    ar: 'وفّر ٥ ساعات أو أكثر بالأسبوع مع تخطيط الدروس والتصحيح بالذكاء الاصطناعي. ٣ استخدامات مجانية لكل أداة. اشترك للوصول بلا حدود.',
  },
  'auth.teacher.pricing_line': {
    en: 'From £7.99/month — 7-day free trial, card required, cancel before day 7',
    ar: 'من ٧٫٩٩ جنيه بالشهر — تجربة مجانية ٧ أيام، تحتاج بطاقة، ألغِ قبل اليوم السابع',
  },
  'auth.teacher.signup_takes': {
    en: 'Sign-up takes under a minute. No card required.',
    ar: 'التسجيل يستغرق أقل من دقيقة. من غير بطاقة.',
  },
  'auth.teacher.your_details': { en: 'Your details', ar: 'بياناتك' },
  'auth.teacher.required_note': {
    en: 'All fields marked * are required.',
    ar: 'كل الخانات اللي عليها * مطلوبة.',
  },
  'auth.teacher.school_wide_before': {
    en: 'For school-wide access, ask your school admin or',
    ar: 'للوصول على مستوى المدرسة، كلّم مدير مدرستك أو',
  },
  'auth.teacher.register_school_link': {
    en: 'register your school at /for-schools/register',
    ar: 'سجّل مدرستك على /for-schools/register',
  },
  'auth.teacher.primary_board': {
    en: 'Exam board you primarily teach',
    ar: 'البورد اللي تدرّس له بالأساس',
  },
  'auth.teacher.adults_only': {
    en: 'Teacher accounts are for adults (18+). If you are a student, please use the student sign-up.',
    ar: 'حسابات المعلمين للبالغين (١٨ سنة فأكثر). إذا أنت طالب، استخدم تسجيل الطلاب لو سمحت.',
  },
  'auth.teacher.i_am_teacher': { en: 'I am a teacher (not a student)', ar: 'أنا معلم (مو طالب)' },
  'auth.teacher.confirm_teacher_required': {
    en: 'Please confirm you are a teacher.',
    ar: 'أكد إنك معلم لو سمحت.',
  },
  'auth.teacher.welcome_title': {
    en: 'Welcome to The English Hub',
    ar: 'حياك الله في The English Hub',
  },
  'auth.teacher.welcome_prefix': {
    en: "We've sent a quick verification link to",
    ar: 'رسّلنا رابط تأكيد سريع على',
  },
  'auth.teacher.welcome_suffix': {
    en: 'so we can keep your account safe — but you can keep exploring while you wait.',
    ar: 'عشان نحافظ على أمان حسابك — بس تقدر تكمّل تتصفح وأنت تنتظر.',
  },
  'auth.teacher.demo_ready_lead': { en: 'Demo access ready.', ar: 'الوصول للديمو جاهز.' },
  'auth.teacher.demo_ready_body': {
    en: "You have 3 free uses of every premium feature — AI marking, lesson plans, and more. When you're ready, start a 7-day free trial from £7.99/month (card required, cancel before day 7).",
    ar: 'عندك ٣ استخدامات مجانية لكل ميزة بريميوم — التصحيح بالذكاء الاصطناعي وخطط الدروس وأكثر. لما تكون جاهز، ابدأ تجربة مجانية ٧ أيام من ٧٫٩٩ جنيه بالشهر (تحتاج بطاقة، ألغِ قبل اليوم السابع).',
  },
  'auth.teacher.open_preview': {
    en: 'Open the teacher dashboard preview',
    ar: 'افتح معاينة لوحة المعلم',
  },
  'auth.teacher.school_interested_before': {
    en: 'Is your school interested? Ask your Head of Department to',
    ar: 'مدرستك مهتمة؟ كلّم رئيس القسم عندك عشان',
  },
  'auth.teacher.founding_schools_link': {
    en: 'learn about the Founding Schools Programme',
    ar: 'يعرف عن برنامج المدارس المؤسِّسة',
  },
  'auth.teacher.school_interested_after': {
    en: 'for full department access.',
    ar: 'للوصول الكامل للقسم.',
  },
  'auth.teacher.no_card_required': { en: 'No credit card required', ar: 'من غير بطاقة' },
  'auth.teacher.need_school_wide': {
    en: 'Need school-wide access?',
    ar: 'تحتاج وصول على مستوى المدرسة؟',
  },
  'auth.teacher.school_wide_body': {
    en: 'Register your school for a single subscription that covers all staff.',
    ar: 'سجّل مدرستك باشتراك واحد يغطي كل الموظفين.',
  },
  'auth.teacher.learn_more': { en: 'Learn more', ar: 'اعرف أكثر' },
  'auth.teacher.benefit.lesson_plans': {
    en: '300+ ready-made lesson plans',
    ar: 'أكثر من ٣٠٠ خطة درس جاهزة',
  },
  'auth.teacher.benefit.ai_marking': {
    en: 'AI essay marking and feedback',
    ar: 'تصحيح مقالات وملاحظات بالذكاء الاصطناعي',
  },
  'auth.teacher.benefit.analytics': {
    en: 'Real-time student analytics',
    ar: 'تحليلات الطلاب في الوقت الفعلي',
  },
  'auth.teacher.benefit.homework': { en: 'Homework management', ar: 'إدارة الواجبات' },
  'auth.teacher.benefit.mock_papers': {
    en: 'Mock exam papers for all boards',
    ar: 'امتحانات تجريبية لكل البوردات',
  },
  'auth.teacher.benefit.free_ai_uses': {
    en: '3 free uses of every AI tool',
    ar: '٣ استخدامات مجانية لكل أداة ذكاء اصطناعي',
  },

  // ─── Form additions (validation, placeholders, months) ───────────
  'form.fill_all_fields': { en: 'Please fill in all fields.', ar: 'لو سمحت عبّي كل الخانات.' },
  'form.email_required': { en: 'Email address is required.', ar: 'الإيميل مطلوب.' },
  'form.full_name_required': { en: 'Full name is required.', ar: 'الاسم الكامل مطلوب.' },
  'form.first_name_required': { en: 'First name is required.', ar: 'الاسم الأول مطلوب.' },
  'form.last_name_required': { en: 'Last name is required.', ar: 'اسم العائلة مطلوب.' },
  'form.password_required': { en: 'Password is required.', ar: 'الرمز السري مطلوب.' },
  'form.password_min_8': {
    en: 'Password must be at least 8 characters.',
    ar: 'الرمز السري لازم ٨ أحرف على الأقل.',
  },
  'form.confirm_password_required': {
    en: 'Please confirm your password.',
    ar: 'أكد رمزك السري لو سمحت.',
  },
  'form.new_password_required': {
    en: 'Please enter a new password.',
    ar: 'اكتب رمز سري جديد لو سمحت.',
  },
  'form.dob_required': { en: 'Date of birth is required.', ar: 'تاريخ الميلاد مطلوب.' },
  'form.under_13_blocked': {
    en: "You're not yet old enough to create your own account. Ask a parent or carer to set up a parent-linked account from /parent.",
    ar: 'لسا ما عندك العمر الكافي تسوّي حساب بنفسك. اطلب من والدك أو ولي أمرك يسوّي حساب مربوط فيك من /parent.',
  },
  'form.guardian_email_required': {
    en: 'Parent/Guardian email is required for users under 16.',
    ar: 'إيميل ولي الأمر مطلوب للمستخدمين تحت ١٦ سنة.',
  },
  'form.guardian_email_placeholder': { en: 'parent@example.com', ar: 'parent@example.com' },
  'form.fix_errors_below': {
    en: 'Please fix the errors below.',
    ar: 'صحّح الأخطاء اللي تحت لو سمحت.',
  },
  'form.age_validation_failed': { en: 'Age validation failed.', ar: 'فشل التحقق من العمر.' },
  'form.age_verify_error': {
    en: 'Unable to verify age. Please try again.',
    ar: 'ما قدرنا نتحقق من العمر. جرّب مرة ثانية لو سمحت.',
  },
  'form.network_error': {
    en: 'Network error. Please try again in a moment.',
    ar: 'خطأ في الشبكة. جرّب بعد لحظة لو سمحت.',
  },
  'form.email_placeholder': { en: 'you@example.com', ar: 'you@example.com' },
  'form.password_placeholder': { en: 'Your password', ar: 'رمزك السري' },
  'form.your_full_name': { en: 'Your full name', ar: 'اسمك الكامل' },
  'form.first_name_placeholder': { en: 'Jane', ar: 'Jane' },
  'form.last_name_placeholder': { en: 'Smith', ar: 'Smith' },
  'form.teacher_email_placeholder': {
    en: 'jane.smith@school.ac.uk',
    ar: 'jane.smith@school.ac.uk',
  },
  'form.school_name': { en: 'School name', ar: 'اسم المدرسة' },
  'form.school_placeholder': { en: 'e.g. Oakwood Academy', ar: 'مثلاً Oakwood Academy' },
  'form.optional': { en: '(optional)', ar: '(اختياري)' },
  'form.at_least_8_chars': { en: 'At least 8 characters', ar: '٨ أحرف على الأقل' },
  'form.min_8_chars': { en: 'Min. 8 characters', ar: '٨ أحرف على الأقل' },
  'form.repeat_password': { en: 'Repeat your password', ar: 'أعد كتابة الرمز السري' },
  'form.confirm_new_password': { en: 'Confirm new password', ar: 'أكد الرمز السري الجديد' },
  'form.year_group': { en: 'Year group', ar: 'السنة الدراسية' },
  'form.select_year_group': { en: 'Select year group', ar: 'اختر السنة الدراسية' },
  'form.exam_board': { en: 'Exam board', ar: 'بورد الامتحان' },
  'form.select_exam_board': { en: 'Select exam board', ar: 'اختر بورد الامتحان' },
  'form.under_16_guardian_consent_help': {
    en: 'As you are under 16, a parent or guardian must provide consent. We will email them a consent form.',
    ar: 'لأنك تحت ١٦ سنة، لازم والدك أو ولي أمرك يوافق. بنرسل له نموذج موافقة على الإيميل.',
  },
  'form.forgot_password_q': { en: 'Forgot password?', ar: 'نسيت الرمز؟' },
  'form.agree_to_the': { en: 'I agree to the', ar: 'أوافق على' },
  'form.read_and_accept_the': { en: 'I have read and accept the', ar: 'قريت وأوافق على' },
  'form.accept_terms_required': {
    en: 'You must accept the Terms of Service.',
    ar: 'لازم توافق على شروط الخدمة.',
  },
  'form.accept_privacy_required': {
    en: 'You must accept the Privacy Policy.',
    ar: 'لازم توافق على سياسة الخصوصية.',
  },
  'form.month.january': { en: 'January', ar: 'يناير' },
  'form.month.february': { en: 'February', ar: 'فبراير' },
  'form.month.march': { en: 'March', ar: 'مارس' },
  'form.month.april': { en: 'April', ar: 'أبريل' },
  'form.month.may': { en: 'May', ar: 'مايو' },
  'form.month.june': { en: 'June', ar: 'يونيو' },
  'form.month.july': { en: 'July', ar: 'يوليو' },
  'form.month.august': { en: 'August', ar: 'أغسطس' },
  'form.month.september': { en: 'September', ar: 'سبتمبر' },
  'form.month.october': { en: 'October', ar: 'أكتوبر' },
  'form.month.november': { en: 'November', ar: 'نوفمبر' },
  'form.month.december': { en: 'December', ar: 'ديسمبر' },

  // ─── KS3 landing / chrome / overview pages ───────────────────────
  'ks3.english_header': { en: 'KS3 English', ar: 'إنجليزي KS3' },
  'ks3.nav.aria': { en: 'KS3 navigation', ar: 'قائمة KS3' },
  'ks3.nav.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'ks3.landing.eyebrow': {
    en: 'Key Stage 3 · Years 7, 8 & 9',
    ar: 'KS3 · السنوات السابعة والثامنة والتاسعة',
  },
  'ks3.landing.title': { en: 'The full KS3 English curriculum', ar: 'منهج إنجليزي KS3 الكامل' },
  'ks3.landing.lead': {
    en: 'Years 7, 8 and 9 of secondary English mapped end-to-end. Yearly expectations, termly plans, weekly lesson frameworks, marking rubrics, skill progression and the British National Curriculum end-of-KS3 standard — all wired to The English Hub’s reading diagnostics, AI marking, and bilingual (English / Arabic) content layer.',
    ar: 'السنوات السابعة والثامنة والتاسعة من الإنجليزي الثانوي محدّدة من الألف للياء. التوقعات السنوية، خطط الفصول، إطار الدروس الأسبوعية، معايير التصحيح، تدرّج المهارات، ومعيار نهاية KS3 من المنهج الوطني البريطاني — كلها موصولة بأدوات تشخيص القراءة والتصحيح بالذكاء الاصطناعي وطبقة المحتوى ثنائي اللغة في The English Hub.',
  },
  'ks3.landing.arc_heading': {
    en: 'The KS3 arc — Foundations → Development → Mastery',
    ar: 'مسار KS3 — الأساسيات ← التطوير ← الإتقان',
  },
  'ks3.landing.reading_progression_intro': {
    en: 'Reading progression at a glance:',
    ar: 'تدرّج القراءة بنظرة سريعة:',
  },
  'ks3.landing.year_7_arc': {
    en: '"This shows…" (identify + simple inference).',
    ar: '«هذا يبيّن…» (التعرّف + استنتاج بسيط).',
  },
  'ks3.landing.year_8_arc': {
    en: '"This suggests… because…" (explain + multiple inferences + comparison).',
    ar: '«هذا يشير إلى… لأنّ…» (شرح + استنتاجات متعددة + مقارنة).',
  },
  'ks3.landing.year_9_arc': {
    en: '"This suggests… which reflects…" (analyse methods across texts, conceptual interpretations, evaluation).',
    ar: '«هذا يشير إلى… وهذا يعكس…» (تحليل الأساليب بين النصوص، تفسيرات مفاهيمية، تقييم).',
  },
  'ks3.landing.writing_progression': {
    en: 'Writing progression: Y7 control + basic structure → Y8 deliberate choices + clearer development → Y9 craft + conceptual depth.',
    ar: 'تدرّج الكتابة: السنة 7 تحكّم + بنية أساسية ← السنة 8 خيارات مقصودة + تطوير أوضح ← السنة 9 صياغة + عمق مفاهيمي.',
  },
  'ks3.landing.three_years_heading': { en: 'The three years', ar: 'السنوات الثلاث' },
  'ks3.landing.view_year': { en: 'View Year', ar: 'شوف السنة' },
  'ks3.landing.weekly_framework_heading': {
    en: 'Weekly framework — the same 5 lessons every week',
    ar: 'الإطار الأسبوعي — نفس الـ٥ دروس كل أسبوع',
  },
  'ks3.landing.weekly_framework_intro': {
    en: 'Every week in KS3 follows the same shape so students build reflexes, not anxiety. Teachers adapt the text, the focus and the scaffolding; the framework holds steady.',
    ar: 'كل أسبوع في KS3 يتبع نفس الشكل عشان الطلاب يبنون عادات، مو قلق. المعلم يكيّف النص والتركيز والدعم؛ والإطار يضل ثابت.',
  },
  'ks3.landing.lesson1_label': { en: 'Explicit Reading.', ar: 'القراءة الموجَّهة.' },
  'ks3.landing.lesson1_desc': {
    en: 'Teacher reads aloud, models pronunciation, assesses reading ability, teaches an analysis skill (R-focus).',
    ar: 'المعلم يقرا بصوت عالي، يوضّح النطق، يقيّم مستوى القراءة، ويعلّم مهارة تحليل (تركيز على القراءة R).',
  },
  'ks3.landing.lesson2_label': { en: 'Reading and Discussion.', ar: 'القراءة والنقاش.' },
  'ks3.landing.lesson2_desc': {
    en: 'Deepen understanding via sentence stems and structured talk (R + SL).',
    ar: 'تعميق الفهم عبر بدايات جمل ونقاش منظَّم (R + SL).',
  },
  'ks3.landing.lesson3_label': { en: 'Explicit Writing.', ar: 'الكتابة الموجَّهة.' },
  'ks3.landing.lesson3_desc': {
    en: 'Live-model a paragraph with explicit SPAG attention (W-focus).',
    ar: 'نمذجة فقرة على المباشر مع تركيز واضح على SPAG (تركيز على الكتابة W).',
  },
  'ks3.landing.lesson4_label': { en: 'Application.', ar: 'التطبيق.' },
  'ks3.landing.lesson4_desc': {
    en: 'Guided practice — reading → writing transfer with a heavy scaffold.',
    ar: 'تدريب موجَّه — نقل من القراءة للكتابة مع دعم قوي.',
  },
  'ks3.landing.lesson5_label': { en: 'Independent Outcome.', ar: 'الإنتاج المستقل.' },
  'ks3.landing.lesson5_desc': {
    en: 'Independent assessable piece — written under the scaffolds removed.',
    ar: 'قطعة مستقلة قابلة للتقييم — تُكتب بعد إزالة الدعم.',
  },
  'ks3.landing.non_negotiables_heading': {
    en: 'Non-negotiables across KS3',
    ar: 'الأساسيات اللي ما تتغيّر في KS3',
  },
  'ks3.landing.non_negotiables_intro': {
    en: 'Every lesson in this curriculum:',
    ar: 'كل درس في هذا المنهج:',
  },
  'ks3.landing.non_negotiables_1': {
    en: 'follows a clear learning cycle (input → modelling → guided practice → independence);',
    ar: 'يتبع دورة تعلّم واضحة (مدخلات ← نمذجة ← تدريب موجَّه ← استقلالية)؛',
  },
  'ks3.landing.non_negotiables_2': {
    en: 'includes explicit modelling before independent work;',
    ar: 'يتضمّن نمذجة صريحة قبل الشغل المستقل؛',
  },
  'ks3.landing.non_negotiables_3': {
    en: 'ensures reading or stimulus material informs writing outcomes;',
    ar: 'يضمن إن مادة القراءة أو المحفّز توجّه مخرجات الكتابة؛',
  },
  'ks3.landing.non_negotiables_4': {
    en: 'builds in structured talk opportunities to develop ideas;',
    ar: 'يبني فرص نقاش منظَّم لتطوير الأفكار؛',
  },
  'ks3.landing.non_negotiables_5': {
    en: 'teaches vocabulary explicitly and in context (key vocabulary lists every week);',
    ar: 'يعلّم المفردات بشكل صريح وضمن السياق (قائمة مفردات أساسية كل أسبوع)؛',
  },
  'ks3.landing.non_negotiables_6': {
    en: 'provides regular opportunities for independent reading.',
    ar: 'يوفّر فرص منتظمة للقراءة المستقلة.',
  },
  'ks3.landing.how_to_use_heading': { en: 'How to use this site', ar: 'شلون تستخدم الموقع' },
  'ks3.landing.how_to_use_yearly': {
    en: 'Yearly expectations live on the year page (e.g.',
    ar: 'التوقعات السنوية موجودة في صفحة السنة (مثلاً',
  },
  'ks3.landing.how_to_use_termly': {
    en: 'Termly plans live on the term page (e.g.',
    ar: 'خطط الفصل موجودة في صفحة الفصل (مثلاً',
  },
  'ks3.landing.how_to_use_weekly': {
    en: 'Weekly lesson plans live on the week page (e.g.',
    ar: 'خطط الدروس الأسبوعية موجودة في صفحة الأسبوع (مثلاً',
  },
  'ks3.landing.how_to_use_rubrics': { en: 'Marking rubrics at', ar: 'معايير التصحيح في' },
  'ks3.landing.how_to_use_skills': { en: 'Skill codes at', ar: 'رموز المهارات في' },
  'ks3.landing.how_to_use_end_of_ks3': { en: 'End of KS3 standard at', ar: 'معيار نهاية KS3 في' },
  'ks3.landing.bilingual_heading': {
    en: 'Bilingual — English / Arabic',
    ar: 'ثنائي اللغة — إنجليزي / عربي',
  },
  'ks3.landing.bilingual_body': {
    en: "Every page here can render in three modes via the language toggle in the site header: English only, English + Arabic stacked, or Arabic only. Curriculum copy is translated to Khaleeji (Gulf) Arabic — the register that reads naturally to parents and students across the Gulf. Translation coverage is being progressively filled by the round-trip QA pipeline; English-only sections fall back gracefully where Arabic isn't yet ready.",
    ar: 'كل صفحة هنا تقدر تعرض بثلاث أوضاع عبر زر تغيير اللغة في رأس الموقع: إنجليزي بس، إنجليزي وعربي مع بعض، أو عربي بس. نصوص المنهج مترجمة بالعربي الخليجي — اللهجة اللي يقراها الأهالي والطلاب في الخليج بشكل طبيعي. تغطية الترجمة تتعبّى بالتدريج عبر سلسلة المراجعة، والأقسام الإنجليزية تظهر بأمان لما الترجمة العربية ما تكون جاهزة بعد.',
  },
  'ks3.landing.hooked_heading': {
    en: 'Hooked into the rest of the site',
    ar: 'مربوط مع باقي الموقع',
  },
  'ks3.landing.hooked_ai_marking': {
    en: 'AI marking — the Independent Outcome lesson on every week page links to the existing essay-feedback system. A student writes their independent paragraph, submits, and gets AO-aligned AI feedback within minutes.',
    ar: 'تصحيح بالذكاء الاصطناعي — درس الإنتاج المستقل في كل صفحة أسبوع موصول بنظام ملاحظات المقالات الموجود. الطالب يكتب فقرته المستقلة، يرسلها، ويحصل على ملاحظات بالذكاء الاصطناعي على أساس معايير AO خلال دقايق.',
  },
  'ks3.landing.hooked_reading': {
    en: 'Reading-for-pleasure picks for each term link to the wider site library.',
    ar: 'اختيارات القراءة للمتعة في كل فصل موصولة بمكتبة الموقع الأوسع.',
  },
  'ks3.landing.hooked_vocab': {
    en: 'Vocabulary drills integrate with the existing flashcards engine — every week’s key vocabulary is loadable as a deck.',
    ar: 'تمارين المفردات مدمجة مع محرّك البطاقات الموجود — مفردات كل أسبوع تنحمل كمجموعة بطاقات.',
  },
  'ks3.landing.hooked_mocks': {
    en: 'Mock exams — KS3 mock-exam content (already on the site) is referenced from Year 9 Term 3 as the bridge to GCSE.',
    ar: 'الامتحانات التجريبية — محتوى امتحانات KS3 التجريبية (موجود في الموقع) يُشار إليه من الفصل الثالث للسنة التاسعة كجسر لـ GCSE.',
  },
  'ks3.year.expected_intro': {
    en: 'Students working at the expected standard by the end of',
    ar: 'الطلاب اللي عند المستوى المتوقع بنهاية',
  },
  'ks3.year.three_terms': { en: 'Three terms', ar: 'ثلاثة فصول' },
  'ks3.year.view_term': { en: 'View', ar: 'شوف' },
  'ks3.year.marking_rubric': { en: 'Marking rubric', ar: 'معايير التصحيح' },
  'ks3.year.rubric_intro': {
    en: 'Four strands × four levels. Each cell is the descriptor a marker reads when awarding the level, with the skill codes it draws on.',
    ar: 'أربع محاور × أربع مستويات. كل خانة هي الوصف اللي المصحّح يقراه عشان يعطي المستوى، مع رموز المهارات اللي يبني عليها.',
  },
  'ks3.year.strand_col': { en: 'Strand', ar: 'المحور' },
  'ks3.year.changes_heading': {
    en: 'What changes by the end of the year',
    ar: 'شنو يتغيّر بنهاية السنة',
  },
  'ks3.term.vocab_themes_heading': { en: 'Vocabulary themes', ar: 'محاور المفردات' },
  'ks3.term.in_production': {
    en: 'Weekly lesson plans for this half-term are in production — the KS3 lesson-planner agent is drafting them now. Yearly expectations and rubrics still apply.',
    ar: 'خطط الدروس الأسبوعية لنصف الفصل هذا قيد الإعداد — وكيل تخطيط دروس KS3 يصيغها الحين. التوقعات السنوية ومعايير التصحيح لسا تنطبق.',
  },
  'ks3.term.week_label': { en: 'Week', ar: 'الأسبوع' },
  'ks3.rubrics.lead': {
    en: 'Three years × four strands × four levels. Each cell is the descriptor a marker reads when awarding the level. Skill-code chips link back to the master skills list.',
    ar: 'ثلاث سنوات × أربع محاور × أربع مستويات. كل خانة هي الوصف اللي المصحّح يقراه عشان يعطي المستوى. شارات رموز المهارات ترجعك لقائمة المهارات الرئيسية.',
  },
  'ks3.rubrics.www_ebi': {
    en: 'As per school policy students should receive What Went Well (WWW) and Even Better If (EBI) feedback every 8 lessons — in English that means once every two weeks. Feedback is constructive and based on outcomes recently covered in class.',
    ar: 'حسب سياسة المدرسة، الطلاب لازم يحصلون على ملاحظات What Went Well (WWW) و Even Better If (EBI) كل ٨ دروس — في الإنجليزي هذا يعني مرة كل أسبوعين. الملاحظات بنّاءة ومبنيّة على مخرجات الفصل اللي اتغطّت قريب.',
  },
  'ks3.skills.heading': {
    en: 'KS3 skill codes — progression Y7 → Y8 → Y9',
    ar: 'رموز مهارات KS3 — تدرّج السنة 7 ← السنة 8 ← السنة 9',
  },
  'ks3.skills.lead': {
    en: 'Every weekly lesson plan, every rubric cell, every AI marking comment maps to one of these codes. Reading the progression column reveals how a skill grows from foundation to mastery across the three years.',
    ar: 'كل خطة درس أسبوعية، وكل خانة في معايير التصحيح، وكل تعليق من تصحيح الذكاء الاصطناعي، يرجع لواحد من هذي الرموز. لما تقرا عمود التدرّج بتشوف شلون المهارة تكبر من الأساس للإتقان عبر السنوات الثلاث.',
  },
  'ks3.endks3.heading': { en: 'End of KS3 expectations', ar: 'توقعات نهاية KS3' },
  'ks3.endks3.by_strand_heading': {
    en: 'By strand (British National Curriculum)',
    ar: 'حسب المحور (المنهج الوطني البريطاني)',
  },
  'ks3.endks3.expected_heading': {
    en: 'What "expected at end of KS3" looks like',
    ar: 'شنو يعني «مستوى متوقع بنهاية KS3»',
  },
  'ks3.endks3.expected_body': {
    en: 'A student working at the expected standard at the end of Year 9 can do all of the following. This is the bridge to GCSE — students who hit these markers walk into Year 10 with the analytical, compositional and oracy reflexes their GCSE specifications already assume.',
    ar: 'الطالب اللي يشتغل بالمستوى المتوقع بنهاية السنة التاسعة يقدر يسوّي كل اللي تحت. هذا هو الجسر لـ GCSE — الطلاب اللي يوصلون لهذي العلامات يدخلون السنة العاشرة وعندهم عادات التحليل والكتابة والتحدّث اللي مواصفات GCSE تفترضها أصلاً.',
  },
  'ks3.endks3.reading_formula_heading': {
    en: 'Reading-progression formula',
    ar: 'صيغة تدرّج القراءة',
  },
  'ks3.endks3.writing_formula_heading': {
    en: 'Writing-progression formula',
    ar: 'صيغة تدرّج الكتابة',
  },
  'ks3.endks3.reading_y7': {
    en: '"This shows…" and can identify similarities.',
    ar: '«هذا يبيّن…» ويقدر يحدّد أوجه التشابه.',
  },
  'ks3.endks3.reading_y8': {
    en: '"This suggests… because…" and can explain similarities AND differences.',
    ar: '«هذا يشير إلى… لأنّ…» ويقدر يشرح أوجه التشابه والاختلاف.',
  },
  'ks3.endks3.reading_y9': {
    en: '"This suggests… which reflects…" and analyse methods across texts.',
    ar: '«هذا يشير إلى… وهذا يعكس…» ويحلّل الأساليب بين النصوص.',
  },
  'ks3.endks3.writing_y7': { en: 'control + basic structure.', ar: 'تحكّم + بنية أساسية.' },
  'ks3.endks3.writing_y8': {
    en: 'deliberate choices + clearer development.',
    ar: 'خيارات مقصودة + تطوير أوضح.',
  },
  'ks3.endks3.writing_y9': { en: 'craft + conceptual depth.', ar: 'صياغة + عمق مفاهيمي.' },

  // ─── Board selection flow ───────────────────────────────────────
  'board.select.eyebrow': { en: 'Choose by level', ar: 'اختر حسب المرحلة' },
  'board.select.intro': {
    en: 'Pick the level your school sits, then the board. You can change this later in Settings.',
    ar: 'اختر المرحلة اللي مدرستك تدرّسها، بعدين اختر الهيئة. تقدر تغيّرها بعدين من الإعدادات.',
  },
  'board.select.gcse_subtitle': {
    en: 'Years 10–11, UK GCSE 9–1',
    ar: 'السنة العاشرة والحادية عشرة — UK GCSE 9–1',
  },
  'board.select.igcse_subtitle': {
    en: 'International — Cambridge & Pearson Edexcel specifications',
    ar: 'دولي — مواصفات Cambridge و Pearson Edexcel',
  },
  'board.select.back_home': { en: 'Back to the homepage', ar: 'روح للصفحة الرئيسية' },
  'board.select.open_board': { en: 'Open board', ar: 'افتح الهيئة' },
  'board.select_cta': { en: 'Select board', ar: 'اختر الهيئة' },
  'board.choose_short': { en: 'Choose exam board', ar: 'اختر هيئة الامتحان' },
  'board.change_aria': { en: 'Change exam board', ar: 'غيّر هيئة الامتحان' },
  'board.change_exam_board': { en: 'Change exam board', ar: 'غيّر هيئة الامتحان' },
  'board.change_verb': { en: 'Change', ar: 'غيّر' },
  'board.studying': { en: 'Studying', ar: 'تدرس' },
  'board.welcome': { en: 'Welcome to The English Hub', ar: 'حياك الله في The English Hub' },
  'board.currently_selected': { en: 'Currently selected', ar: 'مختار الحين' },
  'board.what_you_get': { en: 'What you get for', ar: 'شنو بتحصل في' },
  'board.selection_progress': { en: 'Selection progress', ar: 'تقدم الاختيار' },
  'board.step_of': { en: 'Step {current} of {total}', ar: 'الخطوة {current} من {total}' },
  'board.desc.aqa': {
    en: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
    ar: 'القوة والصراع، الحب والعلاقات، عوالم وحيوات.',
  },
  'board.desc.edexcel_gcse': {
    en: 'Time & Place, Conflict, Relationships anthology.',
    ar: 'الزمان والمكان، الصراع، مختارات العلاقات.',
  },
  'board.desc.ocr': {
    en: 'Love, Conflict, Power & Natural World, Youth & Age.',
    ar: 'الحب، الصراع، القوة والعالم الطبيعي، الشباب والشيخوخة.',
  },
  'board.desc.eduqas': {
    en: 'Eduqas Anthology poems with annotated walkthroughs.',
    ar: 'قصائد مختارات Eduqas مع شروحات تفصيلية.',
  },
  'board.desc.cambridge_igcse': {
    en: '0500 and 0990 — Reading, Composition, model answers.',
    ar: '0500 و 0990 — قراءة، إنشاء، إجابات نموذجية.',
  },
  'board.desc.edexcel_igcse_lit': {
    en: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    ar: 'الدراما، النثر، Shakespeare، الشعر غير المرئي.',
  },
  'board.desc.edexcel_igcse_lang': {
    en: 'Non-fiction anthology, reading and transactional writing.',
    ar: 'مختارات أدب غير قصصي، قراءة وكتابة وظيفية.',
  },
  'board.level.title': { en: 'What level are you studying?', ar: 'شنو المرحلة اللي تدرسها؟' },
  'board.level.subtitle': {
    en: "Tell us your level and we'll tailor every page to your exact course.",
    ar: 'قل لنا مرحلتك وإحنا بنفصّل كل صفحة على مقاس منهجك بالضبط.',
  },
  'board.level.ks3.years': { en: 'Years 7-9', ar: 'السنة السابعة - التاسعة' },
  'board.level.ks3.desc': {
    en: 'Building your English foundations',
    ar: 'تبني أساسيات الإنجليزي مالك',
  },
  'board.level.gcse.years': { en: 'Years 10-11, UK', ar: 'السنة العاشرة والحادية عشرة — UK' },
  'board.level.gcse.desc': { en: 'UK GCSE English 9-1', ar: 'UK GCSE English 9-1' },
  'board.level.igcse.years': { en: 'International', ar: 'دولي' },
  'board.level.igcse.desc': { en: 'Studying outside the UK', ar: 'تدرس خارج بريطانيا' },
  'board.level.a_level.years': {
    en: 'Years 12-13, UK',
    ar: 'السنة الثانية عشرة والثالثة عشرة — UK',
  },
  'board.level.a_level.desc': {
    en: 'UK A-Level English Literature & Language',
    ar: 'UK A-Level أدب ولغة إنجليزية',
  },
  'board.level.ial.years': { en: 'International', ar: 'دولي' },
  'board.level.ial.desc': {
    en: 'International Advanced Level',
    ar: 'International Advanced Level',
  },
  'board.level.footer_hint': {
    en: 'You can change this later from the board badge in the header or your settings page.',
    ar: 'تقدر تغيّرها بعدين من شارة الهيئة بالأعلى أو من صفحة الإعدادات مالتك.',
  },
  'board.body.heading.gcse': { en: 'Which UK GCSE board?', ar: 'أي هيئة UK GCSE؟' },
  'board.body.heading.igcse': { en: 'Which awarding body?', ar: 'أي هيئة منح؟' },
  'board.body.heading.a_level': { en: 'Which UK A-Level board?', ar: 'أي هيئة UK A-Level؟' },
  'board.body.heading.ial': { en: 'Which awarding body?', ar: 'أي هيئة منح؟' },
  'board.body.subheading.gcse': {
    en: "Pick your board — we'll show you only the poems, set texts, and papers you actually study.",
    ar: 'اختر الهيئة مالتك — بنورّيك بس القصايد والنصوص والامتحانات اللي تدرسها فعلاً.',
  },
  'board.body.subheading.igcse': {
    en: 'Choose your awarding body below — each one has different set texts and assessment.',
    ar: 'اختر هيئة المنح من تحت — كل وحدة عندها نصوص مقررة وتقييم مختلف.',
  },
  'board.body.subheading.a_level': {
    en: "Pick your UK A-Level board — full A-Level content is on our roadmap; in the meantime we'll unlock the cross-board revision tools.",
    ar: 'اختر هيئة UK A-Level مالتك — محتوى A-Level الكامل بخريطة الطريق مالنا؛ والحين بنفتح لك أدوات المراجعة المشتركة بين الهيئات.',
  },
  'board.body.subheading.ial': {
    en: 'Select your awarding body to get started.',
    ar: 'اختر هيئة المنح عشان نبدأ.',
  },
  'board.body.not_sure_hint': {
    en: 'Not sure which board you study? Check your exam timetable, ask your teacher, or pick the closest match — you can change it later from your settings.',
    ar: 'مو متأكد أي هيئة تدرس؟ شوف جدول الامتحانات مالك، اسأل المدرس، أو اختر الأقرب — تقدر تغيّرها بعدين من الإعدادات.',
  },
  'board.body_subtitle.aqa_gcse': {
    en: 'Power & Conflict, Love & Relationships, AIC, Macbeth',
    ar: 'القوة والصراع، الحب والعلاقات، AIC، Macbeth',
  },
  'board.body_subtitle.edexcel_gcse': {
    en: 'Time & Place, Conflict anthology, AIC, Macbeth',
    ar: 'الزمان والمكان، مختارات الصراع، AIC، Macbeth',
  },
  'board.body_subtitle.ocr_gcse': {
    en: 'Towards a World Unknown, Shakespeare & set texts',
    ar: 'نحو عالم مجهول، Shakespeare والنصوص المقرَّرة',
  },
  'board.body_subtitle.eduqas_gcse': {
    en: 'Single anthology, unseen poetry, Component 1 & 2',
    ar: 'مختارات واحدة، شعر غير مرئي، Component 1 و 2',
  },
  'board.body_subtitle.edexcel_igcse': {
    en: 'IGCSE Literature & Language papers',
    ar: 'امتحانات IGCSE في الأدب واللغة',
  },
  'board.body_subtitle.cambridge_igcse': {
    en: 'First Language English & Literature in English',
    ar: 'اللغة الإنجليزية الأم والأدب الإنجليزي',
  },
  'board.body_subtitle.edexcel_ial': {
    en: 'International A-Level English',
    ar: 'International A-Level إنجليزي',
  },
  'board.body_subtitle.aqa_a_level': {
    en: 'A-Level English Literature (7712) & Language (7702)',
    ar: 'A-Level أدب إنجليزي (7712) ولغة (7702)',
  },
  'board.body_subtitle.edexcel_a_level': {
    en: 'A-Level English Literature (9ET0) & Language (9EN0)',
    ar: 'A-Level أدب إنجليزي (9ET0) ولغة (9EN0)',
  },
  'board.body_subtitle.ocr_a_level': {
    en: 'A-Level English Literature (H472) & Language (H470)',
    ar: 'A-Level أدب إنجليزي (H472) ولغة (H470)',
  },
  'board.body_subtitle.eduqas_a_level': {
    en: 'A-Level English Literature & Language',
    ar: 'A-Level أدب ولغة إنجليزية',
  },
  'board.paper.heading_before': { en: 'Which', ar: 'أي ورقة' },
  'board.paper.heading_after': { en: 'paper?', ar: 'تدرس؟' },
  'board.paper.subheading': {
    en: 'Each specification covers different skills and texts. Pick the one that matches your timetable.',
    ar: 'كل مواصفة تغطي مهارات ونصوص مختلفة. اختر اللي يطابق جدولك.',
  },
  'board.paper.not_sure_hint': {
    en: 'Not sure which paper? Check your exam timetable or ask your teacher — you can always change it later.',
    ar: 'مو متأكد أي ورقة؟ شوف جدول الامتحانات أو اسأل المدرس — تقدر تغيّرها أي وقت تبغى.',
  },
  'board.paper.literature': { en: 'Literature', ar: 'الأدب' },
  'board.paper.language': { en: 'Language', ar: 'اللغة' },
  'board.paper.language_a': { en: 'Language A', ar: 'اللغة A' },
  'board.paper.language_b': { en: 'Language B', ar: 'اللغة B' },
  'board.paper_subtitle.edexcel_igcse_lit': {
    en: 'Poetry, prose, drama & Shakespeare',
    ar: 'شعر، نثر، دراما و Shakespeare',
  },
  'board.paper_subtitle.edexcel_igcse_lang': {
    en: 'Reading comprehension & transactional writing',
    ar: 'فهم القراءة والكتابة الوظيفية',
  },
  'board.paper_subtitle.cambridge_0500': {
    en: 'First Language English — A*-G grading',
    ar: 'اللغة الإنجليزية الأم — تقدير A*-G',
  },
  'board.paper_subtitle.cambridge_0990': {
    en: 'First Language English — 9-1 grading',
    ar: 'اللغة الإنجليزية الأم — تقدير 9-1',
  },
  'board.paper_subtitle.cambridge_0475': {
    en: 'Literature in English — prose, poetry & drama',
    ar: 'الأدب الإنجليزي — نثر وشعر ودراما',
  },
  'board.option.your_current': { en: 'Your current board', ar: 'الهيئة مالتك الحين' },
  'board.option.choose_papers': { en: 'Choose papers', ar: 'اختر الأوراق' },
  'board.option.choose_this': { en: 'Choose this board', ar: 'اختر هذي الهيئة' },
  'board.tagline.ks3': {
    en: 'Years 7-9 foundation English skills',
    ar: 'مهارات أساسية للإنجليزي — السنة السابعة للتاسعة',
  },
  'board.tagline.aqa': {
    en: 'Power & Conflict, AIC, and Macbeth',
    ar: 'القوة والصراع، AIC، و Macbeth',
  },
  'board.tagline.edexcel': {
    en: 'Time & Place, AIC, and Macbeth',
    ar: 'الزمان والمكان، AIC، و Macbeth',
  },
  'board.tagline.ocr': {
    en: 'Conflict cluster and Romeo & Juliet',
    ar: 'مجموعة الصراع و Romeo & Juliet',
  },
  'board.tagline.eduqas': {
    en: 'Single anthology and unseen poetry',
    ar: 'مختارات واحدة وشعر غير مرئي',
  },
  'board.tagline.edexcel_igcse': {
    en: 'Poetry, prose, drama & Shakespeare',
    ar: 'شعر، نثر، دراما و Shakespeare',
  },
  'board.tagline.edexcel_igcse_lang': {
    en: 'Reading comprehension & transactional writing',
    ar: 'فهم القراءة والكتابة الوظيفية',
  },
  'board.tagline.cambridge_0500': {
    en: 'First Language English (A*-G)',
    ar: 'اللغة الإنجليزية الأم (A*-G)',
  },
  'board.tagline.cambridge_0990': {
    en: 'First Language English (9-1)',
    ar: 'اللغة الإنجليزية الأم (9-1)',
  },
  'board.tagline.cambridge_0475': {
    en: 'Literature in English — prose, poetry & drama',
    ar: 'الأدب الإنجليزي — نثر وشعر ودراما',
  },
  'board.tagline.ial_edexcel': {
    en: 'International A-Level English',
    ar: 'International A-Level إنجليزي',
  },
  'board.tagline.aqa_a_level': {
    en: 'A-Level English Literature (7712) & Language (7702)',
    ar: 'A-Level أدب إنجليزي (7712) ولغة (7702)',
  },
  'board.tagline.edexcel_a_level': {
    en: 'A-Level English Literature (9ET0) & Language (9EN0)',
    ar: 'A-Level أدب إنجليزي (9ET0) ولغة (9EN0)',
  },
  'board.tagline.ocr_a_level': {
    en: 'A-Level English Literature (H472) & Language (H470)',
    ar: 'A-Level أدب إنجليزي (H472) ولغة (H470)',
  },
  'board.tagline.eduqas_a_level': {
    en: 'A-Level English Literature & Language',
    ar: 'A-Level أدب ولغة إنجليزية',
  },
  'board.benefit.reading_comp': { en: 'Reading comprehension', ar: 'فهم القراءة' },
  'board.benefit.creative_writing': { en: 'Creative writing', ar: 'الكتابة الإبداعية' },
  'board.benefit.grammar_vocab': { en: 'Grammar & vocabulary', ar: 'القواعد والمفردات' },
  'board.benefit.poetry_anthology': { en: 'Poetry anthology', ar: 'مختارات شعرية' },
  'board.benefit.set_text_guides': { en: 'Set text guides', ar: 'شروحات النصوص المقرَّرة' },
  'board.benefit.past_paper_walkthroughs': {
    en: 'Past paper walkthroughs',
    ar: 'شرح امتحانات سابقة',
  },
  'board.benefit.anthology_analysis': { en: 'Anthology analysis', ar: 'تحليل المختارات' },
  'board.benefit.exam_style_tasks': { en: 'Exam-style tasks', ar: 'مهام على نمط الامتحان' },
  'board.benefit.conflict_poetry': { en: 'Conflict poetry', ar: 'شعر الصراع' },
  'board.benefit.shakespeare_support': { en: 'Shakespeare support', ar: 'دعم Shakespeare' },
  'board.benefit.past_paper_practice': { en: 'Past paper practice', ar: 'تدريب امتحانات سابقة' },
  'board.benefit.anthology_mastery': { en: 'Anthology mastery', ar: 'إتقان المختارات' },
  'board.benefit.unseen_poetry_drills': {
    en: 'Unseen poetry drills',
    ar: 'تدريبات الشعر غير المرئي',
  },
  'board.benefit.component_1_2_prep': { en: 'Component 1 & 2 prep', ar: 'تحضير Component 1 و 2' },
  'board.benefit.anthology_coverage': { en: 'Anthology coverage', ar: 'تغطية المختارات' },
  'board.benefit.shakespeare_essays': { en: 'Shakespeare essays', ar: 'مقالات Shakespeare' },
  'board.benefit.unseen_prose_poetry': { en: 'Unseen prose & poetry', ar: 'نثر وشعر غير مرئي' },
  'board.benefit.reading_passages': { en: 'Reading passages', ar: 'مقاطع للقراءة' },
  'board.benefit.transactional_writing': { en: 'Transactional writing', ar: 'الكتابة الوظيفية' },
  'board.benefit.summary_skills': { en: 'Summary skills', ar: 'مهارات التلخيص' },
  'board.benefit.directed_writing': { en: 'Directed writing', ar: 'الكتابة الموجَّهة' },
  'board.benefit.composition_practice': { en: 'Composition practice', ar: 'تدريب الإنشاء' },
  'board.benefit.poetry_analysis': { en: 'Poetry analysis', ar: 'تحليل الشعر' },
  'board.benefit.prose_drama_texts': { en: 'Prose & drama texts', ar: 'نصوص نثر ودراما' },
  'board.benefit.unseen_criticism': { en: 'Unseen criticism', ar: 'نقد نصوص غير مرئية' },
  'board.benefit.advanced_essay': { en: 'Advanced essay writing', ar: 'كتابة مقالات متقدمة' },
  'board.benefit.critical_analysis': { en: 'Critical analysis', ar: 'تحليل نقدي' },
  'board.benefit.comparative_study': { en: 'Comparative study', ar: 'دراسة مقارنة' },
  'board.benefit.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'board.benefit.cross_board_tools': {
    en: 'Cross-board revision tools',
    ar: 'أدوات مراجعة مشتركة بين الهيئات',
  },
  'board.benefit.text_library': { en: 'Text library', ar: 'مكتبة نصوص' },
  'board.gate.eyebrow': { en: 'One quick question', ar: 'سؤال واحد بسيط' },
  'board.gate.title': {
    en: 'Which exam board do you study?',
    ar: 'شنو هيئة الامتحان اللي تدرسها؟',
  },
  'board.gate.body': {
    en: 'Pick your board so we can show you the right set texts, poems, and past papers. You can change it any time from settings.',
    ar: 'اختر الهيئة عشان نورّيك النصوص والقصايد والامتحانات الصح. تقدر تغيّرها أي وقت من الإعدادات.',
  },
  'board.mismatch.body_before': { en: "You're viewing", ar: 'الحين أنت تشوف محتوى' },
  'board.mismatch.body_middle': {
    en: 'content. Your saved board is',
    ar: '. الهيئة المحفوظة مالك هي',
  },
  'board.mismatch.body_after': { en: '.', ar: '.' },
  'board.mismatch.switch_to': { en: 'Switch to', ar: 'حوّل لـ' },
  'board.mismatch.stay_on': { en: 'Stay on', ar: 'ابقَ على' },
  'board.wrong.aria_label': { en: 'Wrong exam board', ar: 'هيئة امتحان غلط' },
  'board.wrong.title': { en: 'Not part of your course', ar: 'مو جزء من منهجك' },
  'board.wrong.body_before': { en: 'This page covers', ar: 'هذي الصفحة تغطي' },
  'board.wrong.body_middle': { en: ', which is not studied on', ar: '، اللي ما تُدرس على' },
  'board.wrong.body_after': {
    en: ". You're only shown content that matches your exam board.",
    ar: '. إحنا نورّيك بس المحتوى اللي يطابق هيئة الامتحان مالتك.',
  },
  'board.wrong.back_to': { en: 'Back to your', ar: 'رجوع لمحتوى' },
  'board.wrong.back_content': { en: 'content', ar: 'مالك' },
  'board.wrong.your_board_fallback': { en: 'your board', ar: 'الهيئة مالك' },
  'board.change_dialog.title': { en: 'Change your exam board?', ar: 'تبغى تغيّر هيئة الامتحان؟' },
  'board.change_dialog.body_before': { en: "You're currently studying", ar: 'الحين أنت تدرس' },
  'board.change_dialog.body_after': {
    en: 'Changing your board will filter all of your content to the new board, but your progress will be preserved.',
    ar: 'لمّا تغيّر الهيئة بنفلتر كل المحتوى للهيئة الجديدة، بس تقدمك بيتحفظ.',
  },

  // ─── Safeguarding + consent (cookies + parental) ────────────────
  'safeguard.worried_prompt': {
    en: 'Need help or worried about something?',
    ar: 'تحتاج مساعدة أو في شي يقلقك؟',
  },
  'safeguard.childline_prefix': { en: 'Childline:', ar: 'Childline:' },
  'safeguard.report_concern_cta': { en: 'Report a concern', ar: 'بلّغ عن مخاوف على سلامة الطفل' },
  'consent.cookies.dialog_label': { en: 'Cookie consent', ar: 'الموافقة على الكوكيز' },
  'consent.cookies.close_label': {
    en: 'Close cookie banner without accepting non-essential cookies',
    ar: 'سكّر الإشعار بدون الموافقة على الكوكيز غير الأساسية',
  },
  'consent.cookies.banner_title': { en: 'Cookie settings', ar: 'إعدادات الكوكيز' },
  'consent.cookies.banner_body': {
    en: 'We use essential cookies to make the site work. With your consent we also use analytics cookies to understand how the site is used. You can accept, reject, or manage your preferences. Read our',
    ar: 'إحنا نستخدم كوكيز أساسية عشان الموقع يشتغل. وبموافقتك نستخدم كذلك كوكيز تحليلية لفهم طريقة استخدام الموقع. تقدر توافق أو ترفض أو تدير تفضيلاتك. اقرا',
  },
  'consent.cookies.manage_preferences': { en: 'Manage Preferences', ar: 'إدارة التفضيلات' },
  'consent.cookies.reject_all': { en: 'Reject All', ar: 'رفض الكل' },
  'consent.cookies.accept_all': { en: 'Accept All', ar: 'موافقة على الكل' },
  'consent.cookies.prefs_title': { en: 'Cookie Preferences', ar: 'تفضيلات الكوكيز' },
  'consent.cookies.prefs_body': {
    en: 'Choose which cookies you allow. All non-essential cookies are off by default.',
    ar: 'اختر شنو الكوكيز اللي تسمح فيها. كل الكوكيز غير الأساسية مقفّلة افتراضياً.',
  },
  'consent.cookies.essential_title': { en: 'Essential Cookies', ar: 'الكوكيز الأساسية' },
  'consent.cookies.essential_body': {
    en: 'Required for the site to function. Cannot be disabled.',
    ar: 'لازمة عشان الموقع يشتغل. ما تقدر تعطّلها.',
  },
  'consent.cookies.always_on': { en: 'Always on', ar: 'شغّالة دايماً' },
  'consent.cookies.analytics_title': { en: 'Analytics Cookies', ar: 'كوكيز التحليلات' },
  'consent.cookies.analytics_body': {
    en: 'Help us understand how visitors interact with the site.',
    ar: 'تساعدنا نفهم كيف الزوار يتفاعلون مع الموقع.',
  },
  'consent.cookies.analytics_toggle_label': {
    en: 'Toggle analytics cookies',
    ar: 'تشغيل/إيقاف كوكيز التحليلات',
  },
  'consent.cookies.save_preferences': { en: 'Save Preferences', ar: 'احفظ التفضيلات' },
  'consent.guardian.required_title': {
    en: 'Parental Consent Required',
    ar: 'موافقة ولي الأمر مطلوبة',
  },
  'consent.guardian.email_required': {
    en: "Please enter your parent/guardian's email address.",
    ar: 'لو سمحت اكتب إيميل ولي الأمر.',
  },
  'consent.guardian.send_failed': {
    en: 'Failed to send consent request.',
    ar: 'تعذّر إرسال طلب الموافقة.',
  },
  'consent.guardian.pending_sent_prefix': {
    en: 'A consent request has been sent to',
    ar: 'تم إرسال طلب الموافقة إلى',
  },
  'consent.guardian.pending_sent_suffix': {
    en: '. Please ask your parent/guardian to check their email and complete the consent form.',
    ar: '. اطلب من ولي أمرك يشيك على إيميله ويكمّل نموذج الموافقة.',
  },
  'consent.guardian.awaiting_response': {
    en: 'Awaiting parent response',
    ar: 'بانتظار رد ولي الأمر',
  },
  'consent.guardian.resend_or_change': {
    en: 'Resend / Change email',
    ar: 'إعادة الإرسال / تغيير الإيميل',
  },
  'consent.guardian.denied_body': {
    en: 'Your parent/guardian has denied consent. Some school features may be restricted. If this was a mistake, you can send a new consent request.',
    ar: 'ولي أمرك رفض الموافقة. بعض ميزات المدرسة ممكن تكون مقيّدة. إذا كان هذا غلط، تقدر ترسل طلب موافقة جديد.',
  },
  'consent.guardian.denied_badge': { en: 'Consent denied', ar: 'الموافقة مرفوضة' },
  'consent.guardian.send_new': { en: 'Send new request', ar: 'إرسال طلب جديد' },
  'consent.guardian.intro_body': {
    en: 'Your school requires parental consent for students under 16 to use The English Hub. Please ask your parent or guardian to complete the consent form. This is required under UK GDPR data protection regulations.',
    ar: 'مدرستك تطلب موافقة ولي الأمر للطلاب اللي عمرهم أقل من ١٦ سنة عشان يستخدمون The English Hub. اطلب من والدك أو ولي أمرك يكمّل نموذج الموافقة. هذا مطلوب بموجب لوائح UK GDPR لحماية البيانات.',
  },
  'consent.guardian.send_request': {
    en: 'Send consent request to parent',
    ar: 'إرسال طلب الموافقة لولي الأمر',
  },
  'consent.guardian.form_hint': {
    en: 'Your parent/guardian will receive an email with a link to review and approve the consent form.',
    ar: 'بيوصل لولي أمرك إيميل فيه رابط لمراجعة نموذج الموافقة والمصادقة عليه.',
  },
  'consent.guardian.sending': { en: 'Sending…', ar: 'جاري الإرسال…' },
  'consent.guardian.send_request_short': { en: 'Send consent request', ar: 'إرسال طلب الموافقة' },
  'consent.form.no_token': {
    en: 'No consent token provided. Please use the link from the email you received.',
    ar: 'ما في رمز موافقة. لو سمحت استخدم الرابط من الإيميل اللي وصلك.',
  },
  'consent.form.invalid_or_expired': {
    en: 'This consent link is invalid or has expired.',
    ar: 'رابط الموافقة هذا غير صالح أو انتهت صلاحيته.',
  },
  'consent.form.load_failed': {
    en: 'Failed to load consent details. Please try again later.',
    ar: 'تعذّر تحميل تفاصيل الموافقة. جرّب مرة ثانية بعدين.',
  },
  'consent.form.process_failed': {
    en: 'Failed to process your response.',
    ar: 'تعذّر معالجة ردّك.',
  },
  'consent.form.result_granted': { en: 'Consent Granted', ar: 'تمت الموافقة' },
  'consent.form.result_denied': { en: 'Consent Denied', ar: 'تم رفض الموافقة' },
  'consent.form.loading': { en: 'Loading consent details…', ar: 'لحظة، نحمّل تفاصيل الموافقة…' },
  'consent.form.unable_to_load': {
    en: 'Unable to Load Consent Form',
    ar: 'تعذّر تحميل نموذج الموافقة',
  },
  'consent.form.page_title': { en: 'Parental Consent Form', ar: 'نموذج موافقة ولي الأمر' },
  'consent.form.subtitle': {
    en: 'Educational Data Processing Consent',
    ar: 'الموافقة على معالجة البيانات التعليمية',
  },
  'consent.form.student_label': { en: 'Student', ar: 'الطالب' },
  'consent.form.school_label': { en: 'School', ar: 'المدرسة' },
  'consent.form.what_collected_title': {
    en: 'What data is collected',
    ar: 'البيانات اللي يتم جمعها',
  },
  'consent.form.collected_item_identity': {
    en: 'Full name and email address (for account identification)',
    ar: 'الاسم الكامل والإيميل (لتحديد هوية الحساب)',
  },
  'consent.form.collected_item_academic': {
    en: 'Year group and exam board (to personalise learning content)',
    ar: 'السنة الدراسية وهيئة الامتحان (لتخصيص محتوى التعلّم)',
  },
  'consent.form.collected_item_progress': {
    en: 'Quiz scores, progress, and completion data (to track learning outcomes)',
    ar: 'درجات الاختبارات والتقدّم وبيانات الإنجاز (لمتابعة نتائج التعلّم)',
  },
  'consent.form.collected_item_activity': {
    en: 'Activity timestamps (to monitor engagement)',
    ar: 'الطوابع الزمنية للنشاط (لمتابعة مستوى المشاركة)',
  },
  'consent.form.how_used_title': { en: 'How the data is used', ar: 'كيف تُستخدم البيانات' },
  'consent.form.use_item_personalise': {
    en: 'To provide personalised English language learning',
    ar: 'لتقديم تعلّم مخصَّص للغة الإنجليزية',
  },
  'consent.form.use_item_teacher_monitor': {
    en: 'To allow teachers and school administrators to monitor student progress',
    ar: 'لتمكين المعلمين وإداريي المدرسة من متابعة تقدّم الطلاب',
  },
  'consent.form.use_item_anon_analytics': {
    en: 'To generate anonymised class-level analytics and insights',
    ar: 'لإنتاج تحليلات ورؤى مجهَّلة الهوية على مستوى الصف',
  },
  'consent.form.rights_title': { en: 'Your rights under UK GDPR', ar: 'حقوقك بموجب UK GDPR' },
  'consent.form.right_access_desc': {
    en: "request a copy of your child's data at any time",
    ar: 'طلب نسخة من بيانات طفلك في أي وقت',
  },
  'consent.form.right_correct_desc': {
    en: 'correct any inaccurate data',
    ar: 'تصحيح أي بيانات غير دقيقة',
  },
  'consent.form.right_delete_desc': {
    en: "request deletion of your child's data",
    ar: 'طلب حذف بيانات طفلك',
  },
  'consent.form.right_withdraw_desc': {
    en: 'you can withdraw consent at any time by contacting the school or emailing us',
    ar: 'يمكنك سحب الموافقة في أي وقت بالتواصل مع المدرسة أو مراسلتنا بالإيميل',
  },
  'consent.form.right_portability': { en: 'Right to data portability', ar: 'حق نقل البيانات' },
  'consent.form.right_portability_desc': {
    en: 'receive data in a machine-readable format',
    ar: 'استلام البيانات بصيغة قابلة للقراءة آلياً',
  },
  'consent.form.right_complain_desc': {
    en: "you may complain to the Information Commissioner's Office (ICO) if you believe your rights have been breached",
    ar: 'يمكنك تقديم شكوى لمكتب مفوّض المعلومات (ICO) إذا اعتقدت إن حقوقك انتُهكت',
  },
  'consent.form.retention_note': {
    en: 'Data is stored securely and retained only while your child is enrolled at the school. Upon leaving, all personal data will be deleted within 30 days unless otherwise required by law. For questions, contact your school administrator or email',
    ar: 'تُحفظ البيانات بشكل آمن ولا تُحتفظ بها إلا أثناء التحاق طفلك بالمدرسة. عند المغادرة، تُحذف جميع البيانات الشخصية خلال ٣٠ يوماً ما لم يستلزم القانون خلاف ذلك. للاستفسارات، تواصل مع إداري المدرسة أو راسلنا على الإيميل',
  },
  'consent.form.consent_cta': { en: 'I Consent', ar: 'أوافق' },
  'consent.form.deny_cta': { en: 'I Do Not Consent', ar: 'لا أوافق' },
  'consent.form.footer_disclaimer': {
    en: 'By clicking "I Consent", you agree to the processing of your child\'s data as described above for educational purposes at their school.',
    ar: 'بنقرك على "أوافق"، فإنك توافق على معالجة بيانات طفلك على النحو الموضّح أعلاه للأغراض التعليمية في مدرسته.',
  },

  // ─── Pricing ─────────────────────────────────────────────────────
  'pricing.section_eyebrow': { en: 'Pricing', ar: 'الأسعار' },
  'pricing.trial_badge': { en: '7-day free trial', ar: 'تجربة مجانية ٧ أيام' },
  'pricing.title_simple_honest': { en: 'Simple, Honest Pricing', ar: 'أسعار بسيطة وصريحة' },
  'pricing.subtitle_demo_uses': {
    en: 'Demo 3 free uses per feature (no card) before you commit. Every paid plan starts with a 7-day free trial — card required, cancel before day 7.',
    ar: 'جرّب ٣ استخدامات ببلاش لكل ميزة (من غير بطاقة) قبل ما تلتزم. كل خطة مدفوعة تبدأ بتجربة مجانية ٧ أيام — البطاقة مطلوبة، ألغِ قبل اليوم ٧.',
  },
  'pricing.badge.most_popular': { en: 'Most Popular', ar: 'الأكثر طلباً' },
  'pricing.badge.for_educators': { en: 'For Educators', ar: 'للمعلمين' },
  'pricing.badge.whole_school': { en: 'Whole-School', ar: 'لكامل المدرسة' },
  'pricing.badge.early_access': { en: 'Early Access', ar: 'وصول مبكر' },
  'pricing.badge.founding_10_only': { en: 'Founding · 10 only', ar: 'مؤسس · ١٠ بس' },
  'pricing.badge.popular': { en: 'Popular', ar: 'شائع' },
  'pricing.save_label': { en: 'Save', ar: 'وفّر' },
  'pricing.save_label_lower': { en: 'save', ar: 'وفّر' },
  'pricing.card_cancel': {
    en: 'card required · cancel before day 7',
    ar: 'البطاقة مطلوبة · ألغِ قبل اليوم ٧',
  },
  'pricing.use_code_prefix': { en: 'Use code', ar: 'استخدم الكود' },
  'pricing.use_code_or_affiliate': { en: 'or any affiliate code', ar: 'أو أي كود شراكة' },
  'pricing.cta.view_pricing': { en: 'View Pricing', ar: 'شوف الأسعار' },
  'pricing.cta.start_trial': { en: 'Start Free Trial', ar: 'ابدأ التجربة المجانية' },
  'pricing.cta.start_trial_7day': { en: 'Start 7-day trial', ar: 'ابدأ تجربة ٧ أيام' },
  'pricing.cta.book_call': { en: 'Book a Call', ar: 'احجز مكالمة' },
  'pricing.cta.book_founding_call': { en: 'Book a founding call', ar: 'احجز مكالمة المؤسسين' },
  'pricing.cta.book_20min_call': { en: 'Book a 20-Minute Call', ar: 'احجز مكالمة ٢٠ دقيقة' },
  'pricing.cta.view_demo': { en: 'View the Demo', ar: 'شوف العرض التوضيحي' },
  'pricing.cta.learn_more': { en: 'Learn More', ar: 'اعرف أكثر' },
  'pricing.cta.create_free_account': { en: 'Create Free Account', ar: 'سوّي حساب ببلاش' },
  'pricing.plan.student': { en: 'Student Plan', ar: 'خطة الطلاب' },
  'pricing.plan.teacher': { en: 'Teacher Plan', ar: 'خطة المعلمين' },
  'pricing.for_students': { en: 'For Students', ar: 'للطلاب' },
  'pricing.for_teachers': { en: 'For Teachers', ar: 'للمعلمين' },
  'pricing.student.tagline': {
    en: 'Full access for learners — cancel anytime.',
    ar: 'وصول كامل للطلاب — ألغِ أي وقت تبغى.',
  },
  'pricing.student.tagline_exams': {
    en: 'Everything you need to ace your exams.',
    ar: 'كل اللي تحتاجه عشان تتفوّق في امتحاناتك.',
  },
  'pricing.teacher.tagline': {
    en: 'Plan, teach & track — all in one place.',
    ar: 'خطّط ودرّس وتابع — كله في مكان واحد.',
  },
  'pricing.teacher.tagline_hours': {
    en: 'AI-powered tools to save hours every week.',
    ar: 'أدوات ذكاء اصطناعي توفّر لك ساعات كل أسبوع.',
  },
  'pricing.school.tagline_unlimited': {
    en: 'Unlimited students + teachers',
    ar: 'طلاب ومعلمين بلا حدود',
  },
  'pricing.school.custom_pricing': { en: 'Custom Pricing', ar: 'تسعير مخصّص' },
  'pricing.school.tailored': { en: 'Tailored to your school size', ar: 'مفصّل حسب حجم مدرستك' },
  'pricing.founding_schools_2026': {
    en: 'Founding Schools Programme — 2026',
    ar: 'برنامج المدارس المؤسِّسة — ٢٠٢٦',
  },
  'pricing.founding_schools.desc': {
    en: 'Limited to 10 schools. Heavily discounted pricing with locked preferential rates for 2-3 years.',
    ar: 'محدود بـ ١٠ مدارس. أسعار مخفّضة وايد مع تثبيت الأسعار التفضيلية لمدة ٢-٣ سنوات.',
  },
  'pricing.founding_banner.title': {
    en: 'Founding Schools Programme — 2026. Limited to 10 schools.',
    ar: 'برنامج المدارس المؤسِّسة — ٢٠٢٦. محدود بـ ١٠ مدارس.',
  },
  'pricing.founding_banner.desc': {
    en: 'Be one of the first 10 schools to join. Heavily discounted pricing, early features, direct product input, and locked preferential rates.',
    ar: 'كن من أول ١٠ مدارس تنضم. أسعار مخفّضة وايد، ميزات مبكرة، رأي مباشر في المنتج، وأسعار تفضيلية مثبّتة.',
  },
  'pricing.footer_demo_note': {
    en: "Every feature includes 3 free uses — no card required for the demo. Every paid plan starts with a 7-day free trial (card required). Cancel before day 7 and you won't be charged.",
    ar: 'كل ميزة فيها ٣ استخدامات ببلاش — ما تحتاج بطاقة للتجربة. كل خطة مدفوعة تبدأ بتجربة مجانية ٧ أيام (البطاقة مطلوبة). ألغِ قبل اليوم ٧ وما بنخصم شي.',
  },
  'pricing.student.feat.trial': {
    en: '7-day free trial on any paid plan (card required)',
    ar: 'تجربة مجانية ٧ أيام على أي خطة مدفوعة (البطاقة مطلوبة)',
  },
  'pricing.student.feat.demo_uses': {
    en: '3 free uses per feature — demo without a card',
    ar: '٣ استخدامات ببلاش لكل ميزة — جرّب من غير بطاقة',
  },
  'pricing.student.feat.courses': {
    en: 'All 470+ courses included',
    ar: 'كل الدورات (أكثر من ٤٧٠) مشمولة',
  },
  'pricing.student.feat.mocks': {
    en: 'All 130+ mock exam papers',
    ar: 'كل ورقات الامتحانات التجريبية (أكثر من ١٣٠)',
  },
  'pricing.student.feat.ai_feedback': {
    en: 'AI essay feedback (10/day)',
    ar: 'ملاحظات الذكاء الاصطناعي على المقال (١٠ كل يوم)',
  },
  'pricing.student.feat.flashcards': {
    en: '2,000+ flashcards & 52 terminology entries',
    ar: 'أكثر من ٢٬٠٠٠ بطاقة و٥٢ مدخل مصطلحات',
  },
  'pricing.student.feat.board_content': {
    en: 'Board-specific content for AQA, Edexcel, OCR, WJEC & IGCSE',
    ar: 'محتوى مخصّص لـ AQA و Edexcel و OCR و WJEC و IGCSE',
  },
  'pricing.student.feat.certificates': {
    en: 'Certificates on completion',
    ar: 'شهادات عند الإنجاز',
  },
  'pricing.student.feat.tracking': {
    en: 'Progress tracking & analytics',
    ar: 'تتبّع التقدّم والتحليلات',
  },
  'pricing.student.feat.cancel': {
    en: 'Cancel anytime — no contracts',
    ar: 'ألغِ أي وقت — بلا عقود',
  },
  'pricing.teacher.feat.trial': {
    en: '7-day free trial on any paid plan (card required)',
    ar: 'تجربة مجانية ٧ أيام على أي خطة مدفوعة (البطاقة مطلوبة)',
  },
  'pricing.teacher.feat.demo_uses': {
    en: '3 free uses per feature — demo without a card',
    ar: '٣ استخدامات ببلاش لكل ميزة — جرّب من غير بطاقة',
  },
  'pricing.teacher.feat.everything_student': {
    en: 'Everything in Student, plus:',
    ar: 'كل شي في خطة الطلاب، وزيادة:',
  },
  'pricing.teacher.feat.lesson_builder': {
    en: 'AI Lesson Builder',
    ar: 'منشئ الدروس بالذكاء الاصطناعي',
  },
  'pricing.teacher.feat.analytics': {
    en: 'Student Analytics dashboard',
    ar: 'لوحة تحليلات الطلاب',
  },
  'pricing.teacher.feat.resources': {
    en: '300+ ready-to-use resources',
    ar: 'أكثر من ٣٠٠ مورد جاهز للاستخدام',
  },
  'pricing.teacher.feat.assignments': { en: 'Set & track assignments', ar: 'حدّد وتابع الواجبات' },
  'pricing.teacher.feat.reports': {
    en: "Export reports for parents' evenings",
    ar: 'صدّر تقارير لليالي أولياء الأمور',
  },
  'pricing.teacher.feat.support': { en: 'Priority support', ar: 'دعم بأولوية' },
  'pricing.school.feat.all': {
    en: 'All Student & Teacher features',
    ar: 'كل ميزات الطلاب والمعلمين',
  },
  'pricing.school.feat.dept_analytics': {
    en: 'Department Analytics dashboard',
    ar: 'لوحة تحليلات القسم',
  },
  'pricing.school.feat.admin_portal': { en: 'Teacher Admin Portal', ar: 'بوابة إدارة المعلمين' },
  'pricing.school.feat.bulk_upload': {
    en: 'Bulk User Upload (CSV / SSO)',
    ar: 'تحميل جماعي للمستخدمين (CSV / SSO)',
  },
  'pricing.school.feat.progress_reports': { en: 'Progress Reports', ar: 'تقارير التقدّم' },
  'pricing.school.feat.cpd': { en: 'CPD Resources', ar: 'موارد التطوير المهني' },
  'pricing.school.feat.unlimited': {
    en: 'Unlimited students + teachers',
    ar: 'طلاب ومعلمين بلا حدود',
  },
  'pricing.school.feat.dedicated_support': {
    en: 'Dedicated school support',
    ar: 'دعم مخصّص للمدارس',
  },
  'pricing.anth.headline_prefix': { en: 'Simple,', ar: 'أسعار' },
  'pricing.anth.headline_emphasis': { en: 'honest', ar: 'صريحة' },
  'pricing.anth.headline_suffix': { en: 'pricing', ar: 'وبسيطة' },
  'pricing.anth.trial_blurb_prefix': {
    en: '7-day free trial on every plan — card required, cancel before day 7. Students save £',
    ar: 'تجربة مجانية ٧ أيام على كل خطة — البطاقة مطلوبة، ألغِ قبل اليوم ٧. الطلاب يوفّرون £',
  },
  'pricing.anth.trial_blurb_suffix': {
    en: 'on annual with any affiliate code or',
    ar: 'على الاشتراك السنوي مع أي كود شراكة أو',
  },
  'pricing.anth.lock_in_early': {
    en: 'lock in Early Access today',
    ar: 'ثبّت سعر الوصول المبكر الحين',
  },
  'pricing.anth.with_code': { en: 'with code', ar: 'مع الكود' },
  'pricing.anth.standard_prefix': { en: 'Standard', ar: 'القياسي' },
  'pricing.anth.from_date_prefix': { en: 'from', ar: 'من' },
  'pricing.anth.save42': { en: 'save 42%', ar: 'وفّر ٤٢٪' },
  'pricing.anth.student.annual_prefix': { en: 'or', ar: 'أو' },
  'pricing.anth.student.desc': {
    en: 'Full access for students. Monthly or annual — cancel any time.',
    ar: 'وصول كامل للطلاب. شهري أو سنوي — ألغِ أي وقت تبغى.',
  },
  'pricing.anth.student.feat.lessons': {
    en: 'All 470+ structured lessons',
    ar: 'كل الدروس المرتّبة (أكثر من ٤٧٠)',
  },
  'pricing.anth.student.feat.mocks': {
    en: 'All 130+ mock exams',
    ar: 'كل الامتحانات التجريبية (أكثر من ١٣٠)',
  },
  'pricing.anth.student.feat.ai_feedback': {
    en: 'AI essay feedback (10/day)',
    ar: 'ملاحظات المقال بالذكاء الاصطناعي (١٠ يومياً)',
  },
  'pricing.anth.student.feat.poems': {
    en: '30+ poem deep-dives with annotations',
    ar: 'أكثر من ٣٠ تحليل قصيدة معمّق مع تعليقات',
  },
  'pricing.anth.student.feat.games': { en: '7 GCSE revision games', ar: '٧ ألعاب مراجعة GCSE' },
  'pricing.anth.student.feat.quizzes': { en: '500+ quiz questions', ar: 'أكثر من ٥٠٠ سؤال اختبار' },
  'pricing.anth.student.feat.grade_track': {
    en: 'Grade 1-9 tracking & prediction',
    ar: 'تتبّع وتوقّع الدرجات من ١ إلى ٩',
  },
  'pricing.anth.student.feat.all_boards': {
    en: 'All exam boards included',
    ar: 'كل بوردات الامتحان مشمولة',
  },
  'pricing.anth.teacher.annual_prefix': { en: 'or', ar: 'أو' },
  'pricing.anth.teacher.desc': {
    en: 'Everything in Student plus teacher tools.',
    ar: 'كل شي في خطة الطلاب مع أدوات المعلمين.',
  },
  'pricing.anth.teacher.feat.everything_student': {
    en: 'Everything in Student',
    ar: 'كل شي في خطة الطلاب',
  },
  'pricing.anth.teacher.feat.lesson_plan_ai': {
    en: 'AI lesson plan generator',
    ar: 'منشئ خطط الدروس بالذكاء الاصطناعي',
  },
  'pricing.anth.teacher.feat.ppt': {
    en: 'PowerPoint builder (Anthology-styled)',
    ar: 'منشئ PowerPoint (بأسلوب Anthology)',
  },
  'pricing.anth.teacher.feat.assignment_tracker': {
    en: 'Assignment tracker & marking',
    ar: 'متابع الواجبات والتصحيح',
  },
  'pricing.anth.teacher.feat.ai_essay_ao': {
    en: 'AI essay marking with AO breakdown',
    ar: 'تصحيح المقال بالذكاء الاصطناعي مع تفصيل AO',
  },
  'pricing.anth.teacher.feat.class_analytics': {
    en: 'Class progress analytics',
    ar: 'تحليلات تقدّم الصف',
  },
  'pricing.anth.teacher.feat.downloadable_plans': {
    en: '40+ downloadable lesson plans',
    ar: 'أكثر من ٤٠ خطة درس قابلة للتنزيل',
  },
  'pricing.anth.teacher.feat.homework_gen': { en: 'Homework generator', ar: 'منشئ الواجب البيتي' },
  'pricing.anth.teacher.feat.resource_library': {
    en: 'Teacher resource library',
    ar: 'مكتبة موارد المعلمين',
  },
  'pricing.anth.founding.only_prefix': { en: 'Only', ar: 'بس' },
  'pricing.anth.founding.places_locked': {
    en: 'founding places — locked-in rate',
    ar: 'مكان مؤسس — سعر مثبّت',
  },
  'pricing.anth.founding.desc': {
    en: 'Whole-school licence at the founding rate — first 10 schools only.',
    ar: 'رخصة لكامل المدرسة بسعر المؤسسين — أول ١٠ مدارس بس.',
  },
  'pricing.anth.founding.feat.everything_teacher': {
    en: 'Everything in Teacher',
    ar: 'كل شي في خطة المعلمين',
  },
  'pricing.anth.founding.feat.unlimited': {
    en: 'Unlimited students & teachers',
    ar: 'طلاب ومعلمين بلا حدود',
  },
  'pricing.anth.founding.feat.dept_analytics': {
    en: 'Whole-department analytics dashboard',
    ar: 'لوحة تحليلات لكامل القسم',
  },
  'pricing.anth.founding.feat.student_tracking': {
    en: 'Student-level progress tracking',
    ar: 'تتبّع التقدّم على مستوى كل طالب',
  },
  'pricing.anth.founding.feat.bulk_csv': {
    en: 'Bulk student upload (CSV)',
    ar: 'تحميل جماعي للطلاب (CSV)',
  },
  'pricing.anth.founding.feat.safeguarding': {
    en: 'Safeguarding & GDPR compliant',
    ar: 'متوافق مع حماية الأطفال و GDPR',
  },
  'pricing.anth.founding.feat.onboarding': {
    en: 'Dedicated onboarding support',
    ar: 'دعم تأهيل مخصّص',
  },
  'pricing.anth.founding.feat.feature_priority': {
    en: 'Feature requests prioritised',
    ar: 'طلبات الميزات بأولوية',
  },
  'pricing.anth.founding.feat.price_locked': {
    en: 'Price locked at founding rate forever',
    ar: 'السعر مثبّت على سعر المؤسسين للأبد',
  },
  'pricing.anth.founding.feat.only_prefix': { en: 'Only', ar: 'بس' },
  'pricing.anth.founding.feat.places_avail': {
    en: 'founding places available',
    ar: 'مكان مؤسس متاح',
  },
  'pricing.hero.badge': { en: 'Pricing', ar: 'الأسعار' },
  'pricing.hero.title': {
    en: 'The AI English platform trusted by schools, teachers, and students.',
    ar: 'منصة English بالذكاء الاصطناعي اللي تثق فيها المدارس والمعلمين والطلاب.',
  },
  'pricing.hero.subtitle': {
    en: 'Exam-board aligned revision, AI marking, lesson planning, and analytics — built for results.',
    ar: 'مراجعة متوافقة مع بورد الامتحان، تصحيح بالذكاء الاصطناعي، تخطيط دروس، وتحليلات — مصمَّمة للنتايج.',
  },
  'pricing.compare.title': { en: 'Compare to competitors', ar: 'قارن مع المنافسين' },
  'pricing.compare.subtitle': {
    en: 'See how The English Hub stacks up against Seneca, GCSEPod, and Tassomai.',
    ar: 'شوف كيف The English Hub يقارن مع Seneca و GCSEPod و Tassomai.',
  },
  'pricing.start_free_eyebrow': { en: 'Start free', ar: 'ابدأ ببلاش' },
  'pricing.try_before_subscribe': {
    en: 'Try before you subscribe. No card needed to demo.',
    ar: 'جرّب قبل ما تشترك. ما تحتاج بطاقة عشان تجرّب.',
  },
  'pricing.free_uses_blurb_prefix': {
    en: 'Every registered account gets',
    ar: 'كل حساب مسجَّل يحصل على',
  },
  'pricing.free_uses_blurb_suffix': {
    en: 'free uses of most premium features before the paywall. A card is only required when you start the',
    ar: 'استخدامات مجانية لمعظم الميزات المدفوعة قبل الجدار. البطاقة مطلوبة بس لما تبدأ',
  },
  'pricing.limited_10_schools': { en: 'Limited to 10 Schools', ar: 'محدود بـ ١٠ مدارس' },
  'pricing.founding_strategic_partnership': {
    en: 'This is not a free trial. It is a strategic partnership with a limited number of schools who will shape the future of the platform.',
    ar: 'هذي مو تجربة مجانية. هذي شراكة استراتيجية مع عدد محدود من المدارس راح يشكّلون مستقبل المنصة.',
  },
  'pricing.how_free_works.title': { en: 'How free access works', ar: 'كيف يشتغل الوصول المجاني' },
  'pricing.how_free_works.subtitle': {
    en: 'Get started in three simple steps. No commitment, no card.',
    ar: 'ابدأ بثلاث خطوات بسيطة. بلا التزام، بلا بطاقة.',
  },
  'pricing.faq.title': { en: 'Frequently asked questions', ar: 'الأسئلة اللي يسألونها وايد' },

  // ─── Blog chrome ─────────────────────────────────────────────────
  'blog.index.eyebrow': { en: 'The English Hub Blog', ar: 'مدوّنة The English Hub' },
  'blog.index.heading': {
    en: 'Revision guides and exam technique',
    ar: 'أدلّة مراجعة وطرق الامتحان',
  },
  'blog.index.lead': {
    en: 'GCSE and IGCSE English revision tips, exam-technique guides, and study advice. Calibrated to mark schemes.',
    ar: 'نصايح مراجعة لإنجليزي GCSE و IGCSE، وأدلّة لطريقة الامتحان، ونصايح للمذاكرة. كلها معايرة على نماذج التصحيح الرسمية.',
  },
  'blog.empty.title': { en: 'Posts coming soon', ar: 'المقالات بتنزل قريب' },
  'blog.empty.body_lead': {
    en: "New articles land here as soon as they're ready.",
    ar: 'المقالات الجديدة بتنزل هني أول ما تكون جاهزة.',
  },
  'blog.empty.browse_resources': { en: 'Browse the resources library', ar: 'شوف مكتبة الموارد' },
  'blog.empty.in_meantime': { en: 'in the meantime.', ar: 'لين هالوقت.' },
  'blog.breadcrumb_label': { en: 'Blog', ar: 'المدوّنة' },
  'blog.reading_time': { en: '{n} min read', ar: 'قراءة {n} دقايق' },
  'blog.share': { en: 'Share', ar: 'شارك' },
  'blog.share_label': { en: 'Share:', ar: 'شارك:' },
  'blog.share_on_x': { en: 'Share on Twitter / X', ar: 'شارك على Twitter / X' },
  'blog.share_twitter': { en: 'Twitter', ar: 'Twitter' },
  'blog.share_on_whatsapp': { en: 'Share on WhatsApp', ar: 'شارك على WhatsApp' },
  'blog.share_whatsapp': { en: 'WhatsApp', ar: 'WhatsApp' },
  'blog.share_tiktok_copy': { en: 'Copy link for TikTok', ar: 'انسخ الرابط لـ TikTok' },
  'blog.share_tiktok': { en: 'TikTok', ar: 'TikTok' },
  'blog.copy_link': { en: 'Copy link', ar: 'انسخ الرابط' },
  'blog.copy_link_button': { en: 'Copy Link', ar: 'انسخ الرابط' },
  'blog.copied': { en: 'Copied!', ar: 'تم النسخ!' },

  // ─── Dashboard / account / grade widgets / upgrade / parent ─────
  'dash.your_stats': { en: 'Your Stats', ar: 'إحصاءاتك' },
  'dash.your_hub.badge': { en: 'Revision · Toolkit · Analytics', ar: 'مراجعة · أدوات · تحليلات' },
  'dash.your_hub.blurb': {
    en: 'Your unified home for revision, study tools, progress tracking, and exam technique.',
    ar: 'هذي صفحتك الموحَّدة للمراجعة وأدوات الدراسة ومتابعة تقدّمك وأسلوب الامتحان.',
  },
  'dash.student': { en: 'Student', ar: 'طالب' },
  'dash.greeting.morning': { en: 'Good morning', ar: 'صباح الخير' },
  'dash.greeting.afternoon': { en: 'Good afternoon', ar: 'مساء الخير' },
  'dash.greeting.evening': { en: 'Good evening', ar: 'مساء الخير' },
  'dash.time.just_now': { en: 'Just now', ar: 'الحين' },
  'dash.time.m_ago': { en: 'm ago', ar: 'د' },
  'dash.time.h_ago': { en: 'h ago', ar: 'س' },
  'dash.time.d_ago': { en: 'd ago', ar: 'ي' },
  'dash.error_loading': {
    en: 'Something went wrong loading your dashboard. Please try again.',
    ar: 'صار في خطأ وإحنا نحمّل لوحتك. جرّب مرة ثانية لو سمحت.',
  },
  'dash.error_title': { en: 'Error', ar: 'خطأ' },
  'dash.retry': { en: 'Retry', ar: 'حاول مرة ثانية' },
  'dash.welcome.title': { en: 'Welcome to English Hub!', ar: 'حياك الله في The English Hub!' },
  'dash.welcome.body': {
    en: "You have 3 free uses of every premium feature. Try AI marking, lesson plans, and more. When you're ready, start a 7-day free trial — card required, cancel before day 7.",
    ar: 'عندك ٣ استخدامات ببلاش لكل ميزة بريميوم. جرّب التصحيح بالذكاء الاصطناعي وخطط الدروس وأكثر. لمّن تكون جاهز، ابدأ تجربة ٧ أيام ببلاش — تحتاج بطاقة، وألغِ قبل اليوم السابع.',
  },
  'dash.welcome.dismiss': { en: 'Dismiss welcome banner', ar: 'سكّر بانر الترحيب' },
  'dash.teacher.account': { en: 'Teacher Account', ar: 'حساب معلم' },
  'dash.teacher.blurb': {
    en: 'Access your teaching tools, student analytics, and lesson resources.',
    ar: 'افتح أدوات التدريس وتحليلات الطلاب وموارد الدروس.',
  },
  'dash.teacher.open_hub': { en: 'Open Teacher Hub', ar: 'افتح هب المعلم' },
  'dash.continue_learning': { en: 'Continue Learning', ar: 'كمّل التعلّم' },
  'dash.completed': { en: 'Completed', ar: 'مخلَّص' },
  'dash.empty.no_progress_title': { en: 'No courses in progress', ar: 'ما عندك كورسات شغّالة' },
  'dash.empty.no_progress_desc': {
    en: 'Browse our catalogue to get started.',
    ar: 'شوف قائمة الكورسات وابدأ.',
  },
  'dash.empty.no_completed_title': { en: 'No completed courses yet', ar: 'ما خلّصت أي كورس بعد' },
  'dash.empty.no_completed_desc': {
    en: 'Keep learning to complete your first course.',
    ar: 'كمّل في التعلّم عشان تخلّص أول كورس.',
  },
  'dash.recent_activity_desc': {
    en: 'Your latest completed modules',
    ar: 'آخر الوحدات اللي خلّصتها',
  },
  'dash.no_activity': {
    en: 'No activity yet. Start a course to track your progress.',
    ar: 'ما في نشاط بعد. ابدأ كورس عشان تتابع تقدمك.',
  },
  'dash.unknown_module': { en: 'Unknown module', ar: 'وحدة غير معروفة' },
  'dash.unknown_course': { en: 'Unknown course', ar: 'كورس غير معروف' },
  'dash.your_certificates': { en: 'Your Certificates', ar: 'شهاداتك' },
  'dash.cert_singular': { en: 'certificate', ar: 'شهادة' },
  'dash.cert_plural': { en: 'certificates', ar: 'شهادات' },
  'dash.complete_to_earn': {
    en: 'Complete courses to earn certificates',
    ar: 'خلّص الكورسات عشان تحصل شهادات',
  },
  'dash.complete_first_cert': {
    en: 'Complete a course to earn your first certificate.',
    ar: 'خلّص كورس عشان تحصل على أول شهادة لك.',
  },
  'dash.view_certificate': { en: 'View Certificate', ar: 'شوف الشهادة' },
  'dash.stat.enrolled': { en: 'Enrolled', ar: 'مسجَّل فيها' },
  'dash.stat.completed': { en: 'Completed', ar: 'مخلَّصة' },
  'dash.stat.certificates': { en: 'Certificates', ar: 'الشهادات' },
  'dash.stat.plan': { en: 'Plan', ar: 'الخطة' },
  'dash.stat.course': { en: 'course', ar: 'كورس' },
  'dash.stat.courses': { en: 'courses', ar: 'كورسات' },
  'dash.stat.module': { en: 'module', ar: 'وحدة' },
  'dash.stat.modules': { en: 'modules', ar: 'وحدات' },
  'dash.stat.earned': { en: 'earned', ar: 'حصّلتها' },
  'dash.stat.current_plan': { en: 'current plan', ar: 'خطتك الحالية' },
  'dash.stat.enrolled_tooltip': {
    en: 'Total number of courses you have enrolled in',
    ar: 'عدد الكورسات اللي مسجَّل فيها',
  },
  'dash.stat.completed_tooltip': {
    en: 'Total modules you have completed across all courses',
    ar: 'عدد الوحدات اللي خلّصتها بكل الكورسات',
  },
  'dash.stat.certs_tooltip': {
    en: 'Certificates earned by passing final assessments',
    ar: 'الشهادات اللي حصّلتها بنجاحك في التقييم النهائي',
  },
  'dash.stat.plan_tooltip': { en: 'Your current subscription plan', ar: 'خطة اشتراكك الحالية' },
  'dash.qa.browse_courses': { en: 'Browse Courses', ar: 'شوف الكورسات' },
  'dash.qa.practice_questions': { en: 'Practice Questions', ar: 'أسئلة تدريب' },
  'dash.qa.essay_feedback': { en: 'Essay Feedback', ar: 'ملاحظات على المقال' },
  'dash.qa.mock_exams': { en: 'Mock Exams', ar: 'امتحانات تجريبية' },
  'dash.qa.grade_dashboard': { en: 'Grade Dashboard', ar: 'لوحة الدرجات' },
  'dash.qa.reading_assessment': { en: 'Reading Assessment', ar: 'تقييم القراءة' },
  'dash.qa.analytics': { en: 'Analytics', ar: 'التحليلات' },
  'dash.qa.school_dashboard': { en: 'School Dashboard', ar: 'لوحة المدرسة' },
  'dash.qa.join_school': { en: 'Join School', ar: 'انضم لمدرسة' },
  'sub.free': { en: 'Free', ar: 'ببلاش' },
  'sub.premium': { en: 'Premium', ar: 'بريميوم' },
  'sub.cancelled': { en: 'Cancelled', ar: 'ملغى' },
  'sub.past_due': { en: 'Past Due', ar: 'متأخرة الدفع' },
  'sub.unpaid': { en: 'Unpaid', ar: 'غير مدفوعة' },
  'sub.incomplete': { en: 'Incomplete', ar: 'غير مكتملة' },
  'sub.paused': { en: 'Paused', ar: 'متوقفة' },
  'account.title': { en: 'Account Settings', ar: 'إعدادات الحساب' },
  'account.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'account.studying': { en: 'Studying', ar: 'تدرس' },
  'account.no_board': {
    en: "You haven't picked an exam board yet.",
    ar: 'ما اخترت بورد امتحان بعد.',
  },
  'account.profile': { en: 'Profile', ar: 'الملف الشخصي' },
  'account.profile_saved': { en: 'Profile updated successfully.', ar: 'تم تحديث ملفك الشخصي.' },
  'account.email_locked': { en: 'Email cannot be changed.', ar: 'الإيميل ما يقدر يتغيّر.' },
  'account.fullname_placeholder': { en: 'Your full name', ar: 'اسمك الكامل' },
  'account.year_group': { en: 'Year Group', ar: 'السنة الدراسية' },
  'account.select_year_group': { en: 'Select year group', ar: 'اختر السنة الدراسية' },
  'account.exam_board': { en: 'Exam Board', ar: 'بورد الامتحان' },
  'account.select_exam_board': { en: 'Select exam board', ar: 'اختر بورد الامتحان' },
  'account.saving': { en: 'Saving...', ar: 'يحفظ…' },
  'account.billing_subscription': { en: 'Billing & Subscription', ar: 'الفواتير والاشتراك' },
  'account.billing_blurb': {
    en: 'Manage your plan, view purchases, and update payment details',
    ar: 'دير خطتك، شوف مشترياتك، وعدّل بيانات الدفع',
  },
  'account.change_password': { en: 'Change Password', ar: 'غيّر الرمز السري' },
  'account.current_password': { en: 'Current Password', ar: 'الرمز السري الحالي' },
  'account.current_password_placeholder': {
    en: 'Enter current password',
    ar: 'اكتب الرمز السري الحالي',
  },
  'account.min_8_chars': { en: 'Minimum 8 characters', ar: 'الحد الأدنى ٨ رموز' },
  'account.confirm_new_password': { en: 'Confirm New Password', ar: 'أكد الرمز السري الجديد' },
  'account.repeat_new_password': { en: 'Repeat new password', ar: 'كرر الرمز السري الجديد' },
  'account.update_password': { en: 'Update Password', ar: 'حدّث الرمز السري' },
  'account.updating': { en: 'Updating...', ar: 'يحدّث…' },
  'account.pw_min_length': {
    en: 'New password must be at least 8 characters.',
    ar: 'الرمز السري الجديد لازم يكون ٨ رموز على الأقل.',
  },
  'account.pw_no_match': { en: 'New passwords do not match.', ar: 'الرمزين الجديدين ما يتطابقون.' },
  'account.pw_current_wrong': {
    en: 'Current password is incorrect.',
    ar: 'الرمز السري الحالي غلط.',
  },
  'account.pw_saved': { en: 'Password updated successfully.', ar: 'تم تحديث الرمز السري.' },
  'account.danger_zone': { en: 'Danger Zone', ar: 'منطقة خطر' },
  'account.delete_blurb': {
    en: 'Permanently delete your account and all associated data. This action cannot be undone.',
    ar: 'حذف حسابك وكل بياناتك بشكل نهائي. ما تقدر ترجع عن هذا الإجراء.',
  },
  'account.type_delete_prefix': { en: 'Type', ar: 'اكتب' },
  'account.type_delete_suffix': { en: 'to confirm', ar: 'عشان تأكد' },
  'account.type_delete_to_confirm': {
    en: 'Please type DELETE to confirm.',
    ar: 'اكتب DELETE عشان تأكد لو سمحت.',
  },
  'account.delete_failed': {
    en: 'Failed to delete account. Please contact support.',
    ar: 'ما قدرنا نحذف الحساب. كلّم الدعم لو سمحت.',
  },
  'account.delete_error': {
    en: 'Something went wrong. Please try again or contact support.',
    ar: 'صار في خطأ. جرّب مرة ثانية أو كلّم الدعم.',
  },
  'account.delete_account': { en: 'Delete My Account', ar: 'احذف حسابي' },
  'account.deleting': { en: 'Deleting...', ar: 'يحذف…' },
  'grade.now': { en: 'Now', ar: 'الحين' },
  'grade.predicted': { en: 'Predicted', ar: 'المتوقعة' },
  'grade.target': { en: 'Target', ar: 'الهدف' },
  'grade.current': { en: 'Current', ar: 'الحالية' },
  'grade.working_at': { en: 'Working At', ar: 'الدرجة الحالية' },
  'grade.trend.improving': { en: 'Improving', ar: 'تتحسّن' },
  'grade.trend.declining': { en: 'Declining', ar: 'تنزل' },
  'grade.trend.stable': { en: 'Stable', ar: 'ثابتة' },
  'grade.gap.on_or_above': { en: 'On or above target', ar: 'على الهدف أو فوقه' },
  'grade.gap.one_below': { en: '1 grade below target', ar: 'درجة وحدة دون الهدف' },
  'grade.gap.n_below': { en: 'grades below target', ar: 'درجات دون الهدف' },
  'grade.at_top': {
    en: 'Working at Grade 9 — the highest level. Focus on maintaining excellence and supporting others.',
    ar: 'أنت بدرجة ٩ — أعلى مستوى. ركّز على الحفاظ على التميّز ومساعدة غيرك.',
  },
  'grade.next_target': { en: 'Next Grade Target', ar: 'هدف الدرجة الجاية' },
  'grade.key_focus_areas': { en: 'Key Focus Areas', ar: 'مجالات التركيز الأساسية' },
  'grade.action_items': { en: 'Action Items', ar: 'خطوات تسوّيها' },
  'grade.priority_actions': {
    en: 'Priority Actions (by weak areas)',
    ar: 'أولويات (حسب نقاط الضعف)',
  },
  'grade.suggested_resources': { en: 'Suggested Resources', ar: 'مصادر مقترحة' },
  'grade.focus': { en: 'Focus', ar: 'ركّز' },
  'reading.profile_title': { en: 'Reading Profile', ar: 'ملف القراءة' },
  'reading.no_data': {
    en: 'No reading assessment data available.',
    ar: 'ما عندنا بيانات تقييم قراءة.',
  },
  'reading.take_assessment': { en: 'Take Assessment', ar: 'سوِّ التقييم' },
  'reading.reassess': { en: 'Reassess', ar: 'أعد التقييم' },
  'reading.reading_age': { en: 'Reading Age', ar: 'عمر القراءة' },
  'reading.decoding_age': { en: 'Decoding Age', ar: 'عمر فك الترميز' },
  'reading.fluency_age': { en: 'Fluency Age', ar: 'عمر الطلاقة' },
  'reading.above_expected': { en: 'Above expected', ar: 'فوق المتوقع' },
  'reading.below_expected': { en: 'Below expected', ar: 'دون المتوقع' },
  'reading.at_expected': { en: 'At expected', ar: 'بالمستوى المتوقع' },
  'reading.chronological_age': { en: 'Chronological age', ar: 'العمر الزمني' },
  'reading.last_assessed': { en: 'Last assessed', ar: 'آخر تقييم' },
  'reading.not_assessed': { en: 'Not assessed', ar: 'ما تم التقييم' },
  'upgrade.title.last_free': {
    en: 'This is your last free use of',
    ar: 'هذا آخر استخدام ببلاش لـ',
  },
  'upgrade.title.enjoying': { en: "You're enjoying", ar: 'تستمتع بـ' },
  'upgrade.you_have': { en: 'You have', ar: 'عندك' },
  'upgrade.free_uses_left': {
    en: "free uses remaining. After this, you'll need a Premium subscription to continue using",
    ar: 'استخدامات ببلاش متبقية. بعدها بتحتاج اشتراك بريميوم عشان تكمل استخدام',
  },
  'upgrade.youve_used': { en: "You've used", ar: 'استخدمت' },
  'upgrade.time': { en: 'time', ar: 'مرة' },
  'upgrade.times': { en: 'times', ar: 'مرات' },
  'upgrade.upgrade_for_unlimited': {
    en: 'Upgrade to Premium for unlimited access to all features.',
    ar: 'ارفع لبريميوم عشان تستخدم كل الميزات بلا حدود.',
  },
  'upgrade.premium_plan': { en: 'Premium Plan', ar: 'خطة بريميوم' },
  'upgrade.unlimited_access': {
    en: 'Unlimited access to all features',
    ar: 'استخدام بلا حدود لكل الميزات',
  },
  'upgrade.seven_day_trial': { en: '7-day free trial', ar: 'تجربة ٧ أيام ببلاش' },
  'upgrade.benefit.ai_marking': {
    en: 'Unlimited AI marking and feedback',
    ar: 'تصحيح وملاحظات بالذكاء الاصطناعي بلا حدود',
  },
  'upgrade.benefit.mock_exams': {
    en: 'Full mock exams and analytics',
    ar: 'امتحانات تجريبية كاملة وتحليلات',
  },
  'upgrade.benefit.export': {
    en: 'Export to PowerPoint and Word',
    ar: 'تصدير إلى PowerPoint و Word',
  },
  'upgrade.benefit.priority_support': { en: 'Priority support', ar: 'دعم بأولوية' },
  'upgrade.upgrade_now': { en: 'Upgrade Now', ar: 'ارفع الحين' },
  'upgrade.use_last_free_try': { en: 'Use my last free try', ar: 'استخدم آخر تجربة ببلاش' },
  'upgrade.continue_free': { en: 'Continue Free', ar: 'كمّل ببلاش' },
  'upgrade.after_locked_prefix': { en: 'After this,', ar: 'بعد كذا،' },
  'upgrade.after_locked_suffix': {
    en: 'will be locked until you upgrade to Premium.',
    ar: 'بتقفل لين ترفع لبريميوم.',
  },
  'upgrade.premium_includes': { en: 'Premium includes:', ar: 'بريميوم تشمل:' },
  'upgrade.use_last_free': { en: 'Use Last Free', ar: 'استخدم آخر' },
  'upgrade.now_locked': { en: 'is now locked', ar: 'الحين مقفولة' },
  'upgrade.used_all_lead': { en: "You've used all", ar: 'استخدمت كل الـ' },
  'upgrade.used_all_tail': { en: 'of your free submissions.', ar: 'تسليمات ببلاش.' },
  'upgrade.trial_card_required': {
    en: '7-day free trial · card required',
    ar: 'تجربة ٧ أيام ببلاش · تحتاج بطاقة',
  },
  'upgrade.start_trial': { en: 'Start 7-day trial', ar: 'ابدأ تجربة ٧ أيام' },
  'upgrade.cancel_before_day7': {
    en: "Cancel before day 7 and you won't be charged.",
    ar: 'ألغِ قبل اليوم السابع وما بنخصم منك.',
  },
  'upgrade.free_remaining': { en: 'free remaining', ar: 'باقية ببلاش' },
  'upgrade.dismiss': { en: 'Dismiss', ar: 'سكّر' },
  'upgrade.dismiss_banner': { en: 'Dismiss banner', ar: 'سكّر البانر' },
  'upgrade.learn_more': { en: 'Learn more', ar: 'اعرف أكثر' },
  'parent.portal': { en: 'Parent Portal', ar: 'بوابة ولي الأمر' },
  'parent.viewing_for': { en: 'Viewing progress for', ar: 'تشوف تقدّم' },
  'parent.back_home': { en: 'Back to home', ar: 'رجوع للرئيسية' },
  'parent.nav.dashboard': { en: 'Dashboard', ar: 'اللوحة' },
  'parent.nav.progress': { en: 'Progress', ar: 'التقدّم' },
  'parent.nav.reports': { en: 'Reports', ar: 'التقارير' },
  'parent.nav.settings': { en: 'Settings', ar: 'الإعدادات' },
  'parent.nav.delete_data': { en: 'Delete Data', ar: 'احذف البيانات' },
  'parent.overall_progress': { en: 'Overall revision progress', ar: 'تقدّم المراجعة الإجمالي' },
  'parent.modules': { en: 'Modules', ar: 'الوحدات' },
  'parent.avg_score': { en: 'Avg score', ar: 'متوسط الدرجة' },
  'parent.trend': { en: 'Trend', ar: 'الاتجاه' },
  'parent.trend.up': { en: 'Up', ar: 'صاعد' },
  'parent.trend.steady': { en: 'Steady', ar: 'ثابت' },
  'parent.grade_singular': { en: 'grade', ar: 'درجة' },
  'parent.grade_plural': { en: 'grades', ar: 'درجات' },
  'parent.below_target_lead': { en: 'is', ar: 'متأخر' },
  'parent.below_target_tail': {
    en: 'below target — see the Progress page for suggested focus areas.',
    ar: 'دون الهدف — شوف صفحة التقدّم للمجالات اللي يحتاج يركّز عليها.',
  },

  // ─── AI marking surface ─────────────────────────────────────────
  'marking.practice_mode': { en: 'Practice Mode', ar: 'وضع التدريب' },
  'marking.practice_mode_subtitle': {
    en: 'Sharpen your skills with exam-style questions and model answers.',
    ar: 'طوّر مهاراتك بأسئلة تشبه الامتحان وإجابات نموذجية.',
  },
  'marking.unlock_cta_heading': {
    en: 'Unlock 40+ exam-style practice questions with detailed model answers and examiner tips',
    ar: 'افتح أكثر من ٤٠ سؤال تدريبي بأسلوب الامتحان مع إجابات نموذجية مفصّلة ونصائح المُصحِّح',
  },
  'marking.then_label': { en: 'Then', ar: 'بعدين' },
  'marking.rolling_monthly': { en: 'on a rolling monthly contract.', ar: 'باشتراك شهري متجدد.' },
  'marking.start_free_trial': { en: 'Start Free Trial', ar: 'ابدأ التجربة المجانية' },
  'marking.filters': { en: 'Filters', ar: 'الفلاتر' },
  'marking.question_type': { en: 'Question Type', ar: 'نوع السؤال' },
  'marking.select_type': { en: 'Select type', ar: 'اختر النوع' },
  'marking.questions_available_singular': { en: 'question available', ar: 'سؤال متوفر' },
  'marking.questions_available_plural': { en: 'questions available', ar: 'سؤال متوفر' },
  'marking.timed': { en: 'Timed', ar: 'بوقت' },
  'marking.untimed': { en: 'Untimed', ar: 'بلا وقت' },
  'marking.random_question': { en: 'Random Question', ar: 'سؤال عشوائي' },
  'marking.paper': { en: 'Paper', ar: 'الورقة' },
  'marking.source_text': { en: 'Source Text', ar: 'النص المصدر' },
  'marking.examiner_tip': { en: 'Examiner Tip', ar: 'نصيحة المُصحِّح' },
  'marking.examiner_tips': { en: 'Examiner Tips', ar: 'نصائح المُصحِّح' },
  'marking.your_answer': { en: 'Your Answer', ar: 'إجابتك' },
  'marking.placeholder': { en: 'Write your answer here...', ar: 'اكتب إجابتك هنا…' },
  'marking.essay_placeholder': {
    en: 'Paste or type your essay here...',
    ar: 'الصق أو اكتب مقالتك هنا…',
  },
  'marking.min_words_hint': {
    en: 'Write at least 100 words to submit your response',
    ar: 'اكتب ١٠٠ كلمة على الأقل عشان تقدر ترسل إجابتك',
  },
  'marking.submit_essay': { en: 'Submit Answer', ar: 'سلّم الإجابة' },
  'marking.model_answers': { en: 'Model Answers', ar: 'إجابات نموذجية' },
  'marking.model_answer_singular': { en: 'Model Answer', ar: 'إجابة نموذجية' },
  'marking.no_model_answer': {
    en: 'No model answer available for this grade.',
    ar: 'ما في إجابة نموذجية متوفرة لهذي الدرجة.',
  },
  'marking.mark_scheme_points': { en: 'Mark Scheme Points', ar: 'نقاط سلم العلامات' },
  'marking.rate_yourself_prompt': {
    en: 'How did you do? Rate yourself:',
    ar: 'شلون كانت إجابتك؟ قيّم نفسك:',
  },
  'marking.save_session': { en: 'Save Session', ar: 'احفظ الجلسة' },
  'marking.saving': { en: 'Saving...', ar: 'يحفظ…' },
  'marking.saved': { en: 'Saved', ar: 'انحفظت' },
  'marking.save_session_failed': {
    en: 'Failed to save your session. Please try again.',
    ar: 'ما قدرنا نحفظ جلستك. جرّب مرة ثانية لو سمحت.',
  },
  'marking.try_another_question': { en: 'Try Another Question', ar: 'جرّب سؤال ثاني' },
  'marking.no_questions_found': { en: 'No questions found', ar: 'ما في أسئلة' },
  'marking.no_questions_hint': {
    en: 'Try adjusting your filters to see available questions.',
    ar: 'غيّر الفلاتر عشان تشوف الأسئلة المتوفرة.',
  },
  'marking.reset_filters': { en: 'Reset Filters', ar: 'صفّر الفلاتر' },
  'marking.ai_feedback_title': { en: 'AI Feedback', ar: 'ملاحظات الذكاء الاصطناعي' },
  'marking.essay_feedback_title': {
    en: 'AI Essay Feedback',
    ar: 'ملاحظات الذكاء الاصطناعي على المقالة',
  },
  'marking.reviews_remaining_singular': { en: 'review remaining today', ar: 'مراجعة باقية اليوم' },
  'marking.reviews_remaining_plural': { en: 'reviews remaining today', ar: 'مراجعات باقية اليوم' },
  'marking.marking_in_progress': { en: 'Analysing your answer...', ar: 'يحلّل إجابتك…' },
  'marking.marking_takes_seconds': {
    en: 'This usually takes a few seconds.',
    ar: 'عادةً ياخذ ثواني بس.',
  },
  'marking.retry': { en: 'Retry', ar: 'حاول مرة ثانية' },
  'marking.min_words_error': {
    en: 'Your answer must be at least 100 words to get AI feedback.',
    ar: 'لازم تكتب ١٠٠ كلمة على الأقل عشان تحصل على ملاحظات الذكاء الاصطناعي.',
  },
  'marking.network_error': {
    en: 'Network error. Please check your connection and try again.',
    ar: 'خطأ في الشبكة. شيك على الاتصال وحاول مرة ثانية.',
  },
  'marking.words_singular': { en: 'word', ar: 'كلمة' },
  'marking.words_plural': { en: 'words', ar: 'كلمة' },
  'marking.min_100': { en: 'min 100', ar: 'الحد الأدنى ١٠٠' },
  'marking.min_100_required': { en: 'Min 100 words required', ar: 'لازم ١٠٠ كلمة على الأقل' },
  'marking.min_label': { en: 'min', ar: 'الحد الأدنى' },
  'marking.will_be_analysed': {
    en: 'Your answer above will be analysed',
    ar: 'إجابتك فوق بنحللها',
  },
  'marking.ai_guide_disclaimer': {
    en: "AI-generated feedback — use as a guide alongside your teacher's assessment.",
    ar: 'ملاحظات بالذكاء الاصطناعي — استخدمها كدليل مع تقييم معلمك.',
  },
  'marking.ai_approximate_disclaimer': {
    en: 'AI feedback is approximate and should not replace teacher assessment.',
    ar: 'ملاحظات الذكاء الاصطناعي تقريبية وما تعوّض تقييم المعلم.',
  },
  'marking.ai_generated_estimate': { en: 'AI-Generated Estimate', ar: 'تقدير من الذكاء الاصطناعي' },
  'marking.not_official_grade': {
    en: "Not an official grade — use alongside your teacher's guidance.",
    ar: 'هذي مو درجة رسمية — استخدمها مع إرشاد معلمك.',
  },
  'marking.ao_breakdown_title': { en: 'Marking Guide Breakdown', ar: 'تفصيل دليل التصحيح' },
  'marking.strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'marking.improvements': { en: 'Improvements', ar: 'نقاط التحسين' },
  'marking.detailed_feedback': { en: 'Detailed Feedback', ar: 'ملاحظات تفصيلية' },
  'marking.try_again': { en: 'Try Again', ar: 'حاول مرة ثانية' },
  'marking.analysing': { en: 'Analysing...', ar: 'يحلّل…' },
  'marking.get_ai_feedback': { en: 'Get AI Feedback', ar: 'خذ ملاحظات الذكاء الاصطناعي' },
  'marking.get_ai_feedback_aria': {
    en: 'Get AI feedback on your answer',
    ar: 'خذ ملاحظات الذكاء الاصطناعي على إجابتك',
  },
  'marking.ai_powered_badge': {
    en: 'AI-powered feedback built in',
    ar: 'ملاحظات بالذكاء الاصطناعي مدمجة',
  },
  'marking.clear': { en: 'Clear', ar: 'امسح' },
  'marking.could_not_get_feedback': { en: 'Could not get feedback', ar: 'ما قدرنا نجيب الملاحظات' },
  'marking.feedback_failed': {
    en: 'Failed to get feedback. Please try again.',
    ar: 'ما قدرنا نجيب الملاحظات. جرّب مرة ثانية.',
  },
  'marking.based_on_board_marking': {
    en: 'Based on marking criteria for',
    ar: 'حسب معايير التصحيح مال',
  },
  'marking.key_strengths': { en: 'Key Strengths', ar: 'أبرز نقاط القوة' },
  'marking.areas_to_improve': { en: 'Areas to Improve', ar: 'مجالات تحتاج تحسين' },
  'marking.see_detailed_feedback': { en: 'See detailed feedback', ar: 'شوف الملاحظات بالتفصيل' },
  'marking.long_disclaimer': {
    en: 'AI feedback is for practice only. It does not replace teacher assessment or official marking. Always check with your teacher for exam preparation guidance.',
    ar: 'ملاحظات الذكاء الاصطناعي للتدريب بس. ما تعوّض تقييم المعلم ولا التصحيح الرسمي. ارجع لمعلمك دايماً للاستعداد للامتحان.',
  },
  'marking.fallback_strength': {
    en: 'Your response addresses the question prompt',
    ar: 'إجابتك تجاوب على السؤال',
  },
  'marking.fallback_improvement': {
    en: 'Review the detailed feedback below for specific suggestions',
    ar: 'شوف الملاحظات التفصيلية تحت عشان اقتراحات محددة',
  },
  'marking.mark_singular': { en: 'mark', ar: 'علامة' },
  'marking.mark_plural': { en: 'marks', ar: 'علامة' },
  'marking.remaining': { en: 'remaining', ar: 'باقي' },
  'marking.timed_practice': { en: 'Timed Practice', ar: 'تدريب بوقت محدد' },
  'marking.timed_intro_prefix': { en: 'You will have', ar: 'بيكون عندك' },
  'marking.timed_intro_suffix': {
    en: 'minutes to complete your answer.',
    ar: 'دقيقة عشان تكمّل إجابتك.',
  },
  'marking.start_timer': { en: 'Start Timer', ar: 'شغّل المؤقّت' },
  'marking.time_up': { en: 'Time is up!', ar: 'انتهى الوقت!' },
  'marking.time_up_hint': {
    en: 'You can still submit your answer or get AI feedback on what you have written.',
    ar: 'تقدر تسلّم إجابتك الحين أو تاخذ ملاحظات الذكاء الاصطناعي على اللي كتبته.',
  },
  'marking.view_model_answer': { en: 'View Model Answer', ar: 'شوف الإجابة النموذجية' },
  'marking.what_markers_look_for': { en: 'What markers look for', ar: 'شنو يدوّر عليه المُصحِّح' },
  'marking.band_excellent': {
    en: 'Excellent — original and convincing',
    ar: 'ممتاز — أصيل ومقنع وايد',
  },
  'marking.band_strong': { en: 'Strong — detailed and well-developed', ar: 'قوي — مفصّل ومتطور' },
  'marking.band_good': { en: 'Good — clear and on-topic', ar: 'جيد — واضح وفي صلب الموضوع' },
  'marking.band_getting_there': {
    en: 'Getting there — some good ideas',
    ar: 'تتقدّم — في أفكار زينة',
  },
  'marking.band_early': { en: 'Early stages — keep building', ar: 'بداية الطريق — كمّل وطوّر' },
  'marking.marked_essay_title': { en: 'Your Marked Essay', ar: 'مقالتك المُصحَّحة' },
  'marking.click_highlight_hint': {
    en: 'Click a highlight to read the feedback.',
    ar: 'دوس على التظليل عشان تقرا الملاحظة.',
  },
  'marking.marker_comments': { en: 'Marker Comments', ar: 'ملاحظات المُصحِّح' },
  'marking.kind_strength': { en: 'Strength', ar: 'قوة' },
  'marking.kind_improve': { en: 'Improve', ar: 'حسّن' },
  'marking.kind_technique': { en: 'Technique', ar: 'أسلوب' },
  'marking.predicted_grade': { en: 'Predicted Grade', ar: 'الدرجة المتوقعة' },
  'marking.based_on_aqa_style': {
    en: 'Based on AQA-style marking guide',
    ar: 'حسب دليل تصحيح على نمط AQA',
  },
  'marking.confidence_high': { en: 'High', ar: 'عالية' },
  'marking.confidence_moderate': { en: 'Moderate', ar: 'متوسطة' },
  'marking.confidence_developing': { en: 'Developing', ar: 'تتطور' },
  'marking.confidence_label': { en: 'confidence', ar: 'ثقة' },
  'marking.improvement_trend': { en: 'Improvement Trend', ar: 'تطور أدائك' },
  'marking.trend_empty_state': {
    en: 'Submit a few essays to start seeing your trend.',
    ar: 'سلّم كم مقالة عشان تبدأ تشوف تطورك.',
  },
  'marking.essay_singular_marked': { en: 'essay marked', ar: 'مقالة مُصحَّحة' },
  'marking.essay_plural_marked': { en: 'essays marked', ar: 'مقالة مُصحَّحة' },
  'marking.grade_singular': { en: 'grade', ar: 'درجة' },
  'marking.grade_plural': { en: 'grades', ar: 'درجة' },
  'marking.trend_chart_aria': {
    en: 'Line chart of grades over time',
    ar: 'مخطط خطي للدرجات على مدى الوقت',
  },
  'marking.human_review_aria': { en: 'Request human review', ar: 'اطلب مراجعة بشرية' },
  'marking.human_review_prompt': {
    en: 'Not sure about the AI feedback? You can ask a real person to review it.',
    ar: 'مو متأكد من ملاحظات الذكاء الاصطناعي؟ تقدر تطلب من شخص حقيقي يراجعها.',
  },
  'marking.human_review_privacy': {
    en: "This is your right under UK data protection law — it's not a complaint, and there's no wrong reason to ask.",
    ar: 'هذا حقّك حسب قانون حماية البيانات البريطاني — مو شكوى، وما في سبب غلط عشان تطلب.',
  },
  'marking.request_human_review': { en: 'Request Human Review', ar: 'اطلب مراجعة بشرية' },
  'marking.dismiss': { en: 'Dismiss', ar: 'إخفاء' },
  'marking.feedback_open_aria': {
    en: 'Send feedback or report an issue',
    ar: 'ارسل ملاحظات أو بلّغ عن مشكلة',
  },
  'marking.feedback_close_aria': { en: 'Close feedback form', ar: 'سكّر نموذج الملاحظات' },
  'marking.feedback_form_aria': { en: 'Feedback form', ar: 'نموذج الملاحظات' },
  'marking.feedback_type_aria': { en: 'Feedback type', ar: 'نوع الملاحظة' },
  'marking.feedback_thanks_title': {
    en: 'Thank you for your feedback!',
    ar: 'مشكور على ملاحظاتك!',
  },
  'marking.feedback_thanks_body': {
    en: 'We appreciate you taking the time to help us improve.',
    ar: 'نقدّر وقتك اللي ساعدتنا فيه نتطور.',
  },
  'marking.close': { en: 'Close', ar: 'سكّر' },
  'marking.share_your_feedback': { en: 'Share Your Feedback', ar: 'شاركنا ملاحظاتك' },
  'marking.tab_suggestion': { en: 'Suggestion', ar: 'اقتراح' },
  'marking.tab_report_issue': { en: 'Report Issue', ar: 'بلّغ عن مشكلة' },
  'marking.feedback_subject': { en: 'Subject', ar: 'الموضوع' },
  'marking.feedback_subject_placeholder': {
    en: 'Brief title for your suggestion',
    ar: 'عنوان مختصر لاقتراحك',
  },
  'marking.feedback_message': { en: 'Message', ar: 'الرسالة' },
  'marking.feedback_message_placeholder': {
    en: 'Describe your suggestion in detail...',
    ar: 'وضّح اقتراحك بالتفصيل…',
  },
  'marking.feedback_category': { en: 'Category', ar: 'الفئة' },
  'marking.feedback_email': { en: 'Email', ar: 'الإيميل' },
  'marking.optional_label': { en: '(optional)', ar: '(اختياري)' },
  'marking.submit_suggestion': { en: 'Submit Suggestion', ar: 'أرسل الاقتراح' },
  'marking.submitting': { en: 'Submitting...', ar: 'يرسل…' },
  'marking.issue_type': { en: 'Issue Type', ar: 'نوع المشكلة' },
  'marking.feedback_description': { en: 'Description', ar: 'الوصف' },
  'marking.issue_description_placeholder': {
    en: 'Describe the issue you encountered...',
    ar: 'وضّح المشكلة اللي صادفتك…',
  },
  'marking.feedback_severity': { en: 'Severity', ar: 'الخطورة' },
  'marking.feedback_screenshot': { en: 'Screenshot', ar: 'لقطة شاشة' },
  'marking.page_url_auto': {
    en: 'Current page URL will be included automatically.',
    ar: 'رابط الصفحة الحالية بينضاف تلقائياً.',
  },
  'marking.report_issue': { en: 'Report Issue', ar: 'بلّغ عن المشكلة' },
}

/**
 * Resolve a key with a locale.
 *
 * Behaviour:
 *   - If `locale === 'ar'` AND the entry has an `ar`, return `ar`.
 *   - In all other cases (including missing `ar`), fall back to `en`.
 *   - If the key is missing entirely, return the key itself surrounded
 *     by `[[…]]` so the missing string is obvious in dev but doesn't
 *     break the layout. Production builds should grep for `[[` to
 *     surface gaps before deploy.
 */
export function lookup(key: string, locale: Locale): string {
  const entry = DICTIONARY[key]
  if (!entry) return `[[${key}]]`
  if (locale === 'ar' && entry.ar) return entry.ar
  return entry.en
}
