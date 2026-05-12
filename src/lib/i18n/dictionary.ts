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
