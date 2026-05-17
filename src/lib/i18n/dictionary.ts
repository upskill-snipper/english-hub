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

// Toolkit-namespaced supplement (tools.*, quiz_build.*, lesson_build.*,
// grade_predict.*, essay_check.*) — see ./dictionary-toolkit.ts for
// the full set. Consulted by lookup() as a fallback after DICTIONARY.
import { TOOLKIT_DICTIONARY } from './dictionary-toolkit'
import { SCHOOL_COMP_DICTIONARY } from './dictionary-school-comp'
import { LEGAL_LONG_DICTIONARY } from './dictionary-legal-long'
import { DASH_INTERNAL_DICTIONARY } from './dictionary-dash-internal'
import { DEMO_PAGES_DICTIONARY } from './dictionary-demo-pages'
import { POETRY_HUB_DICTIONARY } from './dictionary-poetry-hub'
import { AUDIT_FIX_DICTIONARY } from './dictionary-audit-fix'
import { SCREENSHOT_FIX_DICTIONARY } from './dictionary-screenshot-fixes'
import { PLACEHOLDER_FIX_MAY15 } from './dictionary-placeholder-fix-may15'
import { PLACEHOLDER_FIX_MAY16 } from './dictionary-placeholder-fix-may16'
import { REPORT_FIX_MAY16B } from './dictionary-report-fix-may16b'
import { PRESS_AND_VERIFIED_FIX } from './dictionary-press-verified'
import { HOMEPAGE_DICTIONARY } from './dictionary-homepage'
import { AFF_PUBLIC_DICTIONARY } from './dictionary-affiliates'
import { TRUST_DICTIONARY } from './dictionary-trust'
import { PUBLIC_A_DICTIONARY } from './dictionary-public-a'
import { CONVERT_DICTIONARY } from './dictionary-convert'
import { RESOURCES_A_DICTIONARY } from './dictionary-resources-a'
import { RESOURCES_B_DICTIONARY } from './dictionary-resources-b'
import { MISC_T1_DICTIONARY } from './dictionary-misc-t1'
import { SCHOOL_1_DICTIONARY } from './dictionary-school-1'
import { SCHOOL_2_DICTIONARY } from './dictionary-school-2'
import { PARENT_1_DICTIONARY } from './dictionary-parent-1'
import { PARENT_2_DICTIONARY } from './dictionary-parent-2'
import { AFF_PORTAL_DICTIONARY } from './dictionary-aff-portal'
import { AFF_COMP_DICTIONARY } from './dictionary-aff-comp'
import { TEACHER_DICTIONARY } from './dictionary-teacher'
import { AMG_DICTIONARY } from './dictionary-amg'
import { SCHOOL_3_DICTIONARY } from './dictionary-school-3'
import { B1_KS3_DICTIONARY } from './dictionary-b1-ks3'
import { B1_REVISION_DICTIONARY } from './dictionary-b1-revision'
import { B1_RESOURCES_DICTIONARY } from './dictionary-b1-resources'
import { B15_MARKING_SCHOOL_DICTIONARY } from './dictionary-b15-marking-school'
import { B15_DASHBOARD_DICTIONARY } from './dictionary-b15-dashboard'
import { B15_DEMO_DICTIONARY } from './dictionary-b15-demo'
import { AI_ACT_DICTIONARY } from './dictionary-ai-act'

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
  'header.nav.your_hub': { en: 'Your Hub', ar: 'Hub مالك' },
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
  'board.choose': { en: 'Choose your exam board', ar: 'اختر بورد الامتحان مالك' },
  'board.change': { en: 'Change board', ar: 'غيّر البورد' },
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
  'ks3.key_stage_3': { en: 'Key Stage 3', ar: 'المرحلة الرئيسية الثالثة KS3' },
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
  'form.try_different_search': { en: 'Try a different search', ar: 'جرّب بحث ثاني' },
  'form.filter': { en: 'Filter', ar: 'فلتر' },
  'form.sort_by': { en: 'Sort by', ar: 'ترتيب حسب' },
  'form.clear_filters': { en: 'Clear filters', ar: 'امسح الفلاتر' },

  // ─── Dashboard + AI marking ───────────────────────────────────────
  'dash.your_progress': { en: 'Your progress', ar: 'تقدمك' },
  'dash.continue': { en: 'Continue where you left off', ar: 'كمّل من وين وقفت' },
  'dash.recent_activity': { en: 'Recent activity', ar: 'آخر نشاطاتك' },
  'dash.achievements': { en: 'Achievements', ar: 'إنجازاتك' },
  'dash.streak': { en: 'Streak', ar: 'سلسلة الأيام المتتالية' },
  'dash.day_streak': { en: 'Day streak', ar: 'أيام متتالية' },
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
    ar: 'لا نبيع البيانات الشخصية، ولا نستخدمها لتدريب نماذج ذكاء اصطناعي تابعة لأطراف ثالثة.',
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
    ar: 'لا نستخدم بيانات الأطفال لتدريب نماذج الذكاء الاصطناعي.',
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
  'footer.link.faqs': { en: 'FAQs', ar: 'الأسئلة الشائعة' },
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
    ar: 'ساعد طفلك ينجح في GCSE أو',
  },
  'audience.parents.hero.title_emphasis': { en: 'IGCSE English', ar: 'IGCSE English' },
  'audience.parents.hero.sub': {
    en: "Get real-time insights into your child's revision progress, exam readiness, and areas for improvement. No more guessing — see exactly what they're learning and where they need help.",
    ar: 'احصل على رؤى لحظية لتقدّم طفلك في المراجعة وجاهزيته للامتحان والمجالات اللي يحتاج يحسّنها. بلا تخمين — شوف بالضبط شنو يتعلّم ووين يحتاج مساعدة.',
  },
  'audience.parents.cta.start_trial': {
    en: "Start Your Child's Free Trial",
    ar: 'ابدأ التجربة المجانية لطفلك',
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
  'pricing.faq.title': { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },

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

  // ── /account/billing ────────────────────────────────────────────────
  'account.back_to_account': { en: 'Back to account', ar: 'رجوع للحساب' },
  'account.billing.title': { en: 'Billing & Subscription', ar: 'الفواتير والاشتراك' },
  'account.billing.verify_email_title': {
    en: 'Verify your email before upgrading',
    ar: 'وثّق إيميلك قبل لا ترقّي',
  },
  'account.billing.verify_email_prefix': {
    en: 'We’ve sent a fresh link to',
    ar: 'أبغى أقولّك إنّا رسّلنا رابط جديد لـ',
  },
  'account.billing.verify_email_suffix': {
    en: 'Confirm it and come back to finish checkout.',
    ar: 'أكّده وارجع تكمّل عملية الدفع.',
  },
  'account.billing.verify_email_fallback': { en: 'your inbox', ar: 'بريدك' },
  'account.billing.resend_now': { en: 'Resend now', ar: 'رسّل من جديد الحين' },
  'account.billing.past_due_title': { en: 'Payment failed', ar: 'الدفعة ما مشت' },
  'account.billing.past_due_body': {
    en: 'We were unable to process your last payment. Please update your payment method to keep your Premium access.',
    ar: 'ما قدرنا نمشّي آخر دفعة. حدّث طريقة الدفع عشان تحتفظ بدخولك الپريميوم.',
  },
  'account.billing.update_payment_method': {
    en: 'Update payment method',
    ar: 'حدّث طريقة الدفع',
  },
  'account.billing.current_plan': { en: 'Current Plan', ar: 'خطتك الحالية' },
  'account.billing.plan_premium': { en: 'Premium', ar: 'پريميوم' },
  'account.billing.plan_premium_cancelled': {
    en: 'Premium (Cancelled)',
    ar: 'پريميوم (ملغية)',
  },
  'account.billing.plan_free': { en: 'Free', ar: 'مجاني' },
  'account.billing.renews': { en: 'Renews', ar: 'يتجدّد' },
  'account.billing.access_until': { en: 'Access until', ar: 'الدخول لين' },
  'account.billing.loading': { en: 'Loading...', ar: 'لحظة…' },
  'account.billing.manage_subscription': {
    en: 'Manage Subscription',
    ar: 'دير اشتراكك',
  },
  'account.billing.upgrade_blurb': {
    en: 'Upgrade to Premium for unlimited access to all courses, practice papers, and premium features.',
    ar: 'رقّي لپريميوم وادخل بلا حدود على كل الكورسات وأوراق التدريب ومزايا الپريميوم.',
  },
  'account.billing.early_access': { en: 'Early Access', ar: 'دخول مبكّر' },
  'account.billing.student': { en: 'Student', ar: 'طالب' },
  'account.billing.teacher': { en: 'Teacher', ar: 'معلم' },
  'account.billing.per_month': { en: '/month', ar: '/شهر' },
  'account.billing.or_per_year_prefix': { en: 'or', ar: 'أو' },
  'account.billing.per_year': { en: '/year', ar: '/سنة' },
  'account.billing.standard': { en: 'Standard', ar: 'السعر العادي' },
  'account.billing.from_date_prefix': { en: 'from', ar: 'من تاريخ' },
  'account.billing.feature_all_courses': {
    en: 'All courses included',
    ar: 'كل الكورسات داخلة',
  },
  'account.billing.feature_three_free_uses': {
    en: '3 free uses per feature',
    ar: '٣ استخدامات ببلاش لكل ميزة',
  },
  'account.billing.feature_cancel_anytime': {
    en: 'Cancel anytime',
    ar: 'تلغي وقت ما تبي',
  },
  'account.billing.feature_everything_in_student': {
    en: 'Everything in Student',
    ar: 'كل اللي بخطة الطالب',
  },
  'account.billing.feature_ai_lesson_builder': {
    en: 'AI Lesson Builder',
    ar: 'بناء الدروس بالذكاء الاصطناعي',
  },
  'account.billing.feature_student_analytics': {
    en: 'Student Analytics',
    ar: 'تحليلات الطلبة',
  },
  'account.billing.upgrade_student': { en: 'Upgrade Student', ar: 'رقّي خطة الطالب' },
  'account.billing.upgrade_teacher': { en: 'Upgrade Teacher', ar: 'رقّي خطة المعلم' },
  'account.billing.course_purchases': { en: 'Course Purchases', ar: 'مشتريات الكورسات' },
  'account.billing.no_purchases': {
    en: 'You have not purchased any individual courses yet.',
    ar: 'ما اشتريت أي كورس لحد الحين.',
  },
  'account.billing.enrolled': { en: 'Enrolled', ar: 'مسجّل' },
  'account.billing.payment_subscription': { en: 'Subscription', ar: 'اشتراك' },
  'account.billing.payment_one_time': { en: 'Purchased', ar: 'مشتراة' },
  'account.billing.payment_free': { en: 'Free', ar: 'ببلاش' },
  'account.billing.err_code_annual_only': {
    en: 'Your code only applies to annual plans — Student Annual or Teacher Annual. Head to the pricing page to upgrade onto an annual plan, or remove the code to continue with this plan at the standard price.',
    ar: 'كودك يشتغل بس مع الخطط السنوية — خطة الطالب السنوية أو خطة المعلم السنوية. روح صفحة الأسعار ورقّي على خطة سنوية، أو شيل الكود وكمّل بهذي الخطة بالسعر العادي.',
  },
  'account.billing.err_code_generic': {
    en: "We couldn't apply that code right now. Please try again.",
    ar: 'ما قدرنا نطبّق الكود الحين. جرّب مرة ثانية لو سمحت.',
  },
  'account.billing.err_code_apply_failed': {
    en: 'Something went wrong applying the code. Please try again.',
    ar: 'صار في خطأ وإحنا نطبّق الكود. جرّب مرة ثانية لو سمحت.',
  },
  'account.billing.err_checkout_failed': {
    en: 'Failed to create checkout session.',
    ar: 'ما قدرنا نفتح صفحة الدفع.',
  },
  'account.billing.err_generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية لو سمحت.',
  },
  'account.billing.err_portal_failed': {
    en: 'Failed to open billing portal.',
    ar: 'ما قدرنا نفتح بوّابة الفواتير.',
  },

  // ── /account/data-export ────────────────────────────────────────────
  'account.export.title': { en: 'Download my data', ar: 'نزّل بياناتي' },
  'account.export.subtitle': {
    en: 'Get a copy of everything we hold about you — yours to keep, share, or move somewhere else.',
    ar: 'احصل على نسخة من كل اللي عندنا عنك — لك إنت، تحتفظ فيها أو ترسلها أو تنقلها وين ما تبي.',
  },
  'account.export.what_in_file': { en: 'What’s in your file?', ar: 'شنو في ملفك؟' },
  'account.export.bundle_intro': {
    en: 'We’ll bundle everything into one JSON file so you can read it, save it, or send it to another service. It includes:',
    ar: 'بنحط كل شي في ملف JSON واحد عشان تقدر تقراه أو تحفظه أو ترسله لخدمة ثانية. فيه:',
  },
  'account.export.bullet_profile': {
    en: 'Your profile (name, email, year group, country)',
    ar: 'ملفك الشخصي (الاسم، الإيميل، السنة الدراسية، الدولة)',
  },
  'account.export.bullet_board': {
    en: 'The exam board you chose',
    ar: 'بورد الامتحان اللي اخترته',
  },
  'account.export.bullet_scores': {
    en: 'Quiz scores and game scores',
    ar: 'نتائج الكويزات والألعاب',
  },
  'account.export.bullet_marking': {
    en: 'Marking history (essays you submitted and the feedback)',
    ar: 'سجل التصحيح (المقالات اللي سلّمتها والملاحظات عليها)',
  },
  'account.export.bullet_consent': {
    en: 'Your consent choices (cookies, marketing, AI training)',
    ar: 'اختياراتك للموافقات (الكوكيز، الإعلانات، تدريب الذكاء الاصطناعي)',
  },
  'account.export.bullet_requests': {
    en: 'A record of past data requests',
    ar: 'سجل بطلبات البيانات السابقة',
  },
  'account.export.success': {
    en: 'Done — check your downloads folder for the JSON file.',
    ar: 'خلصت — شوف مجلّد التنزيلات وبتلقى ملف JSON.',
  },
  'account.export.button': { en: 'Download my data', ar: 'نزّل بياناتي' },
  'account.export.button_preparing': {
    en: 'Preparing your file…',
    ar: 'نجهّز ملفك… لحظة',
  },
  'account.export.rate_limit_note': {
    en: 'You can download your data once every hour.',
    ar: 'تقدر تنزّل بياناتك مرة وحدة كل ساعة.',
  },
  'account.export.legal_basis_heading': {
    en: 'Why we let you do this',
    ar: 'ليش نخلّيك تسوّي هذا',
  },
  'account.export.legal_basis_body': {
    en: 'UK GDPR gives you the right to a copy of your personal data (Article 15) and the right to take it with you in a portable format (Article 20). This page exists so you don’t have to email anyone — your data, your choice.',
    ar: 'نظام GDPR البريطاني يعطيك الحق إنك تاخذ نسخة من بياناتك الشخصية (المادة ١٥) والحق إنك تنقلها معك بصيغة قابلة للنقل (المادة ٢٠). الصفحة هذي موجودة عشان ما تحتاج ترسل إيميل لأحد — بياناتك، واختيارك.',
  },
  'account.export.under13_heading': {
    en: 'What about under-13 accounts?',
    ar: 'شلون مع حسابات اللي تحت ١٣ سنة؟',
  },
  'account.export.under13_body_prefix': {
    en: 'If you’re under 13, your parent or guardian downloads your data on your behalf from the',
    ar: 'لو إنت تحت ١٣، أهلك أو وليّك ينزّل بياناتك عنك من',
  },
  'account.export.under13_link_text': {
    en: 'parent data export page',
    ar: 'صفحة تنزيل بيانات الأهل',
  },
  'account.export.under13_body_suffix': {
    en: '. That’s a Children’s Code requirement — the grown-up holds the keys until you’re old enough to do it yourself.',
    ar: '. هذا شرط من قانون الأطفال — الكبير يمسك المفاتيح لين تكبر وتسوّيها بنفسك.',
  },
  'account.export.err_generic': {
    en: 'Something went wrong while preparing your data.',
    ar: 'صار في خطأ وإحنا نجهّز بياناتك.',
  },
  'account.export.err_rate_limit': {
    en: 'You can only download your data once an hour. Please try again later.',
    ar: 'تقدر تنزّل بياناتك مرة وحدة بالساعة. جرّب بعدين لو سمحت.',
  },
  'account.export.err_unauth': {
    en: 'Please sign in again to download your data.',
    ar: 'سجّل دخول من جديد عشان تنزّل بياناتك.',
  },
  'account.export.err_network': {
    en: 'We couldn’t reach the server. Check your connection and try again.',
    ar: 'ما قدرنا نوصل للسيرفر. شوف اتصالك وجرّب مرة ثانية.',
  },

  // ── /account/delete (full erasure page) ─────────────────────────────
  'account.delete.title': { en: 'Delete my account', ar: 'احذف حسابي' },
  'account.delete.subtitle': {
    en: 'You can ask us to remove your account and personal data at any time. This page walks you through what happens next.',
    ar: 'تقدر تطلب منّا نشيل حسابك وبياناتك الشخصية وقت ما تبي. الصفحة هذي بتشرح لك شنو يصير بعدين.',
  },
  'account.delete.what_gets_deleted': {
    en: 'What gets deleted',
    ar: 'شنو يتحذف',
  },
  'account.delete.bullet_profile_label': { en: 'Your profile', ar: 'ملفك الشخصي' },
  'account.delete.bullet_profile_body': {
    en: ' — name, email, school, year group, exam board, password.',
    ar: ' — الاسم، الإيميل، المدرسة، السنة الدراسية، بورد الامتحان، الرمز السري.',
  },
  'account.delete.bullet_scores_label': {
    en: 'Your scores and grades',
    ar: 'نتائجك ودرجاتك',
  },
  'account.delete.bullet_scores_body': {
    en: ' — every quiz attempt, predicted grade, and progress record tied to your account.',
    ar: ' — كل محاولات الكويزات والدرجات المتوقعة وسجل التقدّم المرتبط بحسابك.',
  },
  'account.delete.bullet_essays_label': {
    en: 'Your essay history',
    ar: 'سجل مقالاتك',
  },
  'account.delete.bullet_essays_body': {
    en: ' — essays you submitted, AI feedback, and saved drafts.',
    ar: ' — المقالات اللي سلّمتها، ملاحظات الذكاء الاصطناعي، والمسوّدات المحفوظة.',
  },
  'account.delete.aggregate_label': {
    en: 'Aggregate analytics',
    ar: 'التحليلات الإجمالية',
  },
  'account.delete.aggregate_body_prefix': {
    en: ' (e.g. “how many users completed Lesson 3 this month”) are kept in ',
    ar: ' (مثل: «كم مستخدم خلّص الدرس ٣ هذا الشهر») نحتفظ فيها بشكل ',
  },
  'account.delete.aggregate_anonymised': { en: 'anonymised', ar: 'مجهول الهوية' },
  'account.delete.aggregate_body_suffix': {
    en: ' form so we can keep improving the product. They cannot be linked back to you. Payment records are kept separately for 7 years where HMRC requires it.',
    ar: ' عشان نقدر نطوّر المنتج. ما تقدر ترجع لك. سجلات الدفع نحتفظ فيها لمدة ٧ سنوات لو طلبتها HMRC.',
  },
  'account.delete.grace_heading': {
    en: '30-day grace period',
    ar: 'فترة سماح ٣٠ يوم',
  },
  'account.delete.grace_body_prefix': {
    en: 'We hold your data for ',
    ar: 'إحنا نحتفظ ببياناتك ',
  },
  'account.delete.grace_30_days': { en: '30 days', ar: '٣٠ يوم' },
  'account.delete.grace_body_suffix': {
    en: ' before permanently deleting it. During that time you can email ',
    ar: ' قبل لا نحذفها بشكل نهائي. خلال هالفترة تقدر ترسل إيميل لـ ',
  },
  'account.delete.grace_restore_tail': {
    en: ' and we’ll restore your account.',
    ar: ' وبنرجّع حسابك.',
  },
  'account.delete.grace_after_note': {
    en: 'After 30 days, deletion is permanent and cannot be undone.',
    ar: 'بعد ٣٠ يوم، الحذف يصير نهائي وما تقدر ترجع عنه.',
  },
  'account.delete.confirm_heading': { en: 'Confirm deletion', ar: 'أكّد الحذف' },
  'account.delete.type_to_confirm': {
    en: 'Please type DELETE in the confirmation field to continue.',
    ar: 'اكتب DELETE في خانة التأكيد عشان تكمّل لو سمحت.',
  },
  'account.delete.help_text': {
    en: 'We require this so accidental clicks can’t delete your account.',
    ar: 'نطلب هذا عشان ضغطة بالغلط ما تحذف حسابك.',
  },
  'account.delete.submit': { en: 'Delete my account', ar: 'احذف حسابي' },
  'account.delete.submitting': { en: 'Submitting…', ar: 'يرسل… لحظة' },
  'account.delete.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'account.delete.err_generic': {
    en: 'We could not process your request. Please try again or email dpo@theenglishhub.app.',
    ar: 'ما قدرنا نعالج طلبك. جرّب مرة ثانية أو رسّل إيميل لـ dpo@theenglishhub.app.',
  },
  'account.delete.err_network': {
    en: 'Network error. Please check your connection and try again, or email dpo@theenglishhub.app.',
    ar: 'في خطأ بالشبكة. شوف اتصالك وجرّب مرة ثانية، أو رسّل إيميل لـ dpo@theenglishhub.app.',
  },
  'account.delete.success_heading': {
    en: 'Account scheduled for deletion',
    ar: 'حسابك مجدول للحذف',
  },
  'account.delete.success_prefix': {
    en: 'Your English Hub account will be permanently deleted on ',
    ar: 'حسابك في English Hub بينحذف بشكل نهائي يوم ',
  },
  'account.delete.success_suffix_prefix': {
    en: '. Until then, you can email ',
    ar: '. لين هالوقت، تقدر ترسل إيميل لـ ',
  },
  'account.delete.success_suffix_tail': {
    en: ' to restore your account.',
    ar: ' عشان ترجّع حسابك.',
  },
  'account.delete.success_signed_out': {
    en: 'You have been signed out. We’ll send a confirmation email shortly. Returning to the home page…',
    ar: 'تم تسجيل خروجك. بنرسّل لك إيميل تأكيد بعد لحظة. نرجّعك للصفحة الرئيسية…',
  },

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

  // Parent weekly activity chart (src/components/parent/WeeklyActivityChart.tsx)
  'parent.weekly.title': { en: 'Weekly Activity', ar: 'النشاط الأسبوعي' },
  'parent.weekly.description': {
    en: 'Time spent learning each week',
    ar: 'الوقت اللي ابنك أو بنتك يدرس فيه كل أسبوع',
  },
  'parent.weekly.avg_per_week': { en: 'Avg / week', ar: 'المعدّل الأسبوعي' },
  'parent.weekly.no_activity': {
    en: 'No activity recorded yet.',
    ar: 'ما في نشاط مسجّل لين الحين.',
  },
  'parent.weekly.total': { en: 'Total', ar: 'الإجمالي' },
  'parent.weekly.peak': { en: 'Peak', ar: 'الأعلى' },
  'parent.weekly.zero_minutes': { en: '0m', ar: '٠د' },
  'parent.weekly.minute_short': { en: 'm', ar: 'د' },
  'parent.weekly.hour_short': { en: 'h', ar: 'س' },

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
    ar: 'ممتاز — أصيل ومقنع',
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
  'marking.score_high': { en: 'High', ar: 'عالية' },
  'marking.score_moderate': { en: 'Moderate', ar: 'متوسطة' },
  'marking.score_developing': { en: 'Developing', ar: 'تتطور' },
  // Renders as "{High|Moderate|Developing} score (NN%)". This value is
  // totalMarks/maxMarks — a score percentage, NOT model confidence.
  // Mislabelling it "confidence" overstated AI certainty (EU AI Act
  // Art 13 transparency / over-reliance on minors). See evals/ + doc 06.
  'marking.score_label': { en: 'score', ar: 'الدرجة' },
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

  // ─── Mock exams ─────────────────────────────────────────────────
  'mock.mock_exams': { en: 'Mock Exams', ar: 'الامتحانات التجريبية' },
  'mock.gcse_mock_exams': { en: 'GCSE Mock Exams', ar: 'امتحانات GCSE التجريبية' },
  'mock.hero_headline': {
    en: '172 full mock papers across 6 boards.',
    ar: '١٧٢ ورقة امتحان تجريبية بكل تفاصيلها على ٦ هيئات.',
  },
  'mock.hero_subhead': {
    en: 'AI-marked in 60 seconds. Authentic exam format. Board-aligned markschemes.',
    ar: 'تصحيح بالذكاء الاصطناعي في ٦٠ ثانية. شكل الامتحان الأصلي. سلم علامات متطابق مع الهيئة.',
  },
  'mock.stat_papers': { en: '4 exam papers', ar: '٤ أوراق امتحان' },
  'mock.stat_timed': { en: 'Timed conditions', ar: 'ظروف بوقت محدد' },
  'mock.stat_grades': { en: 'Grades 1-9', ar: 'درجات ١-٩' },
  'mock.stat_ai_feedback': { en: 'AI feedback', ar: 'ملاحظات من الذكاء الاصطناعي' },
  'mock.view_papers': { en: 'View Exam Papers', ar: 'شوف أوراق الامتحان' },
  'mock.sample_coming_soon': { en: 'Sample paper — coming soon', ar: 'ورقة عيّنة — قريباً' },
  'mock.how_it_works': { en: 'How It Works', ar: 'شلون يشتغل' },
  'mock.how_mocks_help': {
    en: 'How Mock Exams Help You Succeed',
    ar: 'شلون الامتحانات التجريبية تساعدك تنجح',
  },
  'mock.how_mocks_help_desc': {
    en: 'Practising under real exam conditions is the single most effective way to improve your GCSE English grade. Our mocks replicate the exact format used by AQA, Edexcel, OCR, and WJEC.',
    ar: 'التدرب بظروف امتحان حقيقية هو أحسن طريقة ترفع فيها درجتك في إنجليزي GCSE. التجريبيات مالنا تطابق شكل امتحانات AQA و Edexcel و OCR و WJEC بالضبط.',
  },
  'mock.step_simulate_title': {
    en: 'Simulate real exam conditions',
    ar: 'حاكِ ظروف الامتحان الحقيقية',
  },
  'mock.step_simulate_desc': {
    en: 'Each mock mirrors the exact format, timing, and mark allocation of the real GCSE exam. You will face the same question types and time pressure.',
    ar: 'كل امتحان تجريبي يطابق شكل ووقت وتوزيع علامات امتحان GCSE الحقيقي. بتواجه نفس أنواع الأسئلة ونفس ضغط الوقت.',
  },
  'mock.step_time_title': { en: 'Build time management skills', ar: 'طوّر مهارات إدارة الوقت' },
  'mock.step_time_desc': {
    en: 'Learn to allocate your time effectively across sections. Language Paper 1 gives you 1 hour 45 minutes for 5 questions — knowing when to move on is crucial.',
    ar: 'تعلّم توزّع وقتك بشكل فعّال بين الأقسام. ورقة Language 1 تعطيك ساعة و٤٥ دقيقة لخمسة أسئلة — لازم تعرف متى تنتقل للسؤال اللي بعده.',
  },
  'mock.step_track_title': { en: 'Track your progress in grades 1-9', ar: 'تابع تقدمك بدرجات ١-٩' },
  'mock.step_track_desc': {
    en: 'After each attempt, see your estimated GCSE grade based on real exam board grade boundaries. Watch your grade improve with each attempt.',
    ar: 'بعد كل محاولة، شوف الدرجة المتوقعة بناءً على حدود درجات الهيئة الحقيقية. شوف درجتك تتحسن مع كل محاولة.',
  },
  'mock.step_model_title': { en: 'Learn from model answers', ar: 'تعلم من الإجابات النموذجية' },
  'mock.step_model_desc': {
    en: 'Every question includes model answers at Grade 4-5, Grade 6-7, and Grade 8-9 so you can see exactly what markers are looking for at each level.',
    ar: 'كل سؤال فيه إجابات نموذجية لدرجات ٤-٥ و٦-٧ و٨-٩، عشان تشوف بالضبط شنو يدوّر عليه المُصحِّح بكل مستوى.',
  },
  'mock.step_weak_title': { en: 'Identify your weak areas', ar: 'حدد نقاط ضعفك' },
  'mock.step_weak_desc': {
    en: 'Detailed mark breakdowns show whether you need to improve your reading analysis, creative writing, or essay technique.',
    ar: 'تفصيل العلامات يبيّن إذا تحتاج تحسّن تحليل القراءة أو الكتابة الإبداعية أو أسلوب المقالة.',
  },
  'mock.step_ai_title': { en: 'Get AI-powered feedback', ar: 'خذ ملاحظات من الذكاء الاصطناعي' },
  'mock.step_ai_desc': {
    en: 'Submit your written responses for instant AI feedback that grades your work and provides specific, actionable improvements.',
    ar: 'سلّم إجاباتك المكتوبة وخذ ملاحظات فورية من الذكاء الاصطناعي تعطيك درجة واقتراحات تحسين عملية.',
  },
  'mock.exam_papers': { en: 'Exam Papers', ar: 'أوراق الامتحان' },
  'mock.choose_paper_prefix': {
    en: 'Choose a paper to start. Each mock follows the exact',
    ar: 'اختر ورقة وابدأ. كل امتحان تجريبي يتبع منهج',
  },
  'mock.choose_paper_suffix': {
    en: 'specification with realistic questions, proper timing, and accurate grade boundaries.',
    ar: 'بالضبط، بأسئلة واقعية ووقت محدد وحدود درجات دقيقة.',
  },
  'mock.tab_all': { en: 'All Papers', ar: 'كل الأوراق' },
  'mock.language': { en: 'Language', ar: 'اللغة' },
  'mock.literature': { en: 'Literature', ar: 'الأدب' },
  'mock.coming_soon_title': { en: 'mock exams — coming soon', ar: 'الامتحانات التجريبية — قريباً' },
  'mock.your_board': { en: 'Your board', ar: 'هيئتك' },
  'mock.your_selected_board': { en: 'your selected board', ar: 'الهيئة اللي اخترتها' },
  'mock.coming_soon_prefix': {
    en: "We're building a full set of timed mock papers for",
    ar: 'نشتغل على مجموعة كاملة من الامتحانات التجريبية بوقت محدد لـ',
  },
  'mock.coming_soon_suffix': {
    en: 'In the meantime, you can still use our flashcards, model answers, and revision notes.',
    ar: 'بهالأثناء، تقدر تستخدم البطاقات والإجابات النموذجية والملاحظات الدراسية.',
  },
  'mock.go_to_revision': { en: 'Go to Revision Hub', ar: 'روح لمركز المراجعة' },
  'mock.more_papers_prefix': { en: 'We also have', ar: 'عندنا كمان' },
  'mock.more_papers_middle': { en: 'additional mock papers across', ar: 'ورقة امتحان إضافية على' },
  'mock.more_papers_suffix': {
    en: 'exam boards including Edexcel, OCR, WJEC, and CAIE.',
    ar: 'هيئات امتحان منها Edexcel و OCR و WJEC و CAIE.',
  },
  'mock.signup_full_access': { en: 'Sign Up for Full Access', ar: 'سجّل عشان تحصل على وصول كامل' },
  'mock.understanding_grades': {
    en: 'Understanding GCSE Grades 1-9',
    ar: 'تفهم درجات GCSE من ١ إلى ٩',
  },
  'mock.understanding_grades_desc': {
    en: 'GCSE English is graded on a 1-9 scale, where 9 is the highest grade. A grade 4 is a standard pass and a grade 5 is a strong pass. Here is how the grades map to the old letter system.',
    ar: 'إنجليزي GCSE يتدرَّج من ١ إلى ٩، و٩ أعلى درجة. درجة ٤ نجاح عادي و٥ نجاح قوي. هذي طريقة مقارنة الدرجات بنظام الحروف القديم.',
  },
  'mock.standard_pass': { en: 'Grade 4 = Standard pass', ar: 'درجة ٤ = نجاح عادي' },
  'mock.strong_pass': { en: 'Grade 5 = Strong pass', ar: 'درجة ٥ = نجاح قوي' },
  'mock.cta_headline': {
    en: 'Ready to Ace Your GCSE English?',
    ar: 'مستعد تفوز بامتحان GCSE إنجليزي؟',
  },
  'mock.cta_body': {
    en: 'Join thousands of students preparing for their GCSEs. Get access to all mock papers, AI essay feedback, model answers, and detailed grade tracking.',
    ar: 'انضم لآلاف الطلاب اللي يستعدون لامتحان GCSE. احصل على كل الامتحانات التجريبية وملاحظات الذكاء الاصطناعي والإجابات النموذجية ومتابعة الدرجات بالتفصيل.',
  },
  'mock.start_trial': { en: 'Start Free Trial', ar: 'ابدأ التجربة المجانية' },
  'mock.sign_in': { en: 'Sign In', ar: 'تسجيل الدخول' },
  'mock.trial_terms': {
    en: '7-day free trial (card required) · Cancel before day 7 · No lock-in',
    ar: 'تجربة مجانية ٧ أيام (يبغى بطاقة) · ألغِ قبل اليوم السابع · ما في التزام',
  },
  'mock.explorations_in': { en: 'Explorations in', ar: 'استكشافات في' },
  'mock.theme_creative_reading': {
    en: 'Creative Reading and Writing',
    ar: 'القراءة والكتابة الإبداعية',
  },
  'mock.theme_writers_views': {
    en: "Writers' Viewpoints and Perspectives",
    ar: 'وجهات نظر الكتّاب',
  },
  'mock.theme_shakespeare_19c': {
    en: 'Shakespeare and the 19th-Century Novel',
    ar: 'شكسبير ورواية القرن التاسع عشر',
  },
  'mock.theme_modern_poetry': { en: 'Modern Texts and Poetry', ar: 'النصوص الحديثة والشعر' },
  'mock.time': { en: 'Time', ar: 'الوقت' },
  'mock.marks': { en: 'Marks', ar: 'العلامات' },
  'mock.questions': { en: 'Questions', ar: 'الأسئلة' },
  'mock.questions_lc': { en: 'questions', ar: 'سؤال' },
  'mock.sections': { en: 'Sections', ar: 'الأقسام' },
  'mock.sections_reading_writing': { en: '2 (Reading + Writing)', ar: '٢ (قراءة + كتابة)' },
  'mock.no_attempts': { en: 'No attempts yet', ar: 'ما في محاولات بعد' },
  'mock.best_grade': { en: 'Best grade:', ar: 'أحسن درجة:' },
  'mock.hide_details': { en: 'Hide details', ar: 'إخفاء التفاصيل' },
  'mock.view_details': {
    en: 'View question breakdown & grade boundaries',
    ar: 'شوف تفصيل الأسئلة وحدود الدرجات',
  },
  'mock.question_breakdown': { en: 'Question Breakdown', ar: 'تفصيل الأسئلة' },
  'mock.grade_boundaries': { en: 'Grade Boundaries', ar: 'حدود الدرجات' },
  'mock.boundaries_note_prefix': { en: 'Based on recent', ar: 'بناءً على حدود درجات' },
  'mock.boundaries_note_suffix': {
    en: 'grade boundaries. Boundaries vary each year.',
    ar: 'الأخيرة. الحدود تتغير كل سنة.',
  },
  'mock.gcse_english': { en: 'GCSE English', ar: 'إنجليزي GCSE' },
  'mock.paper': { en: 'Paper', ar: 'الورقة' },
  'mock.start_exam': { en: 'Start Exam', ar: 'ابدأ الامتحان' },
  'mock.back_to_mocks': { en: 'Back to Mock Exams', ar: 'رجوع للامتحانات التجريبية' },
  'mock.duration': { en: 'Duration', ar: 'المدة' },
  'mock.total_marks': { en: 'Total Marks', ar: 'مجموع العلامات' },
  'mock.grade': { en: 'Grade', ar: 'الدرجة' },
  'mock.grade_scale_1_9': { en: '1-9 scale', ar: 'مقياس ١-٩' },
  'mock.question_overview': { en: 'Question Overview', ar: 'نظرة عامة على الأسئلة' },
  'mock.exam_conditions': { en: 'Exam Conditions', ar: 'ظروف الامتحان' },
  'mock.cond_timer_start': {
    en: 'The timer will start as soon as you click "Start Exam"',
    ar: 'المؤقّت بيشتغل أول ما تضغط "ابدأ الامتحان"',
  },
  'mock.cond_nav_questions': {
    en: 'You can navigate between questions at any time',
    ar: 'تقدر تتنقل بين الأسئلة بأي وقت',
  },
  'mock.cond_autosave': {
    en: 'Your answers are saved automatically as you type',
    ar: 'إجاباتك تنحفظ تلقائياً وأنت تكتب',
  },
  'mock.cond_pause': {
    en: 'You can pause the timer if needed (not allowed in real exams)',
    ar: 'تقدر توقّف المؤقّت إذا احتجت (مو مسموح بالامتحان الحقيقي)',
  },
  'mock.cond_submit_finish': {
    en: 'Click "Submit Exam" when finished to see your estimated grade',
    ar: 'اضغط "سلّم الامتحان" لما تخلّص عشان تشوف درجتك المتوقعة',
  },
  'mock.question': { en: 'Question', ar: 'سؤال' },
  'mock.of': { en: 'of', ar: 'من' },
  'mock.select_four_statements': {
    en: 'Select four statements (click to select/deselect)',
    ar: 'اختر أربع جمل (اضغط للاختيار/إلغاء الاختيار)',
  },
  'mock.selected': { en: 'selected', ar: 'محدد' },
  'mock.extended_writing_prefix': {
    en: 'This is an extended writing question worth',
    ar: 'هذا سؤال كتابة مطوّلة قيمته',
  },
  'mock.extended_writing_suffix': {
    en: 'marks. Aim for a detailed, well-structured response.',
    ar: 'علامة. اهدف لإجابة مفصّلة ومنظّمة.',
  },
  'mock.quit': { en: 'Quit', ar: 'اخرج' },
  'mock.exam_paused': { en: 'Exam Paused', ar: 'الامتحان متوقّف' },
  'mock.paused_body': {
    en: 'The timer has been paused. Note: pausing is not allowed in real exam conditions.',
    ar: 'المؤقّت متوقّف. ملاحظة: الإيقاف مو مسموح بظروف الامتحان الحقيقية.',
  },
  'mock.resume_exam': { en: 'Resume Exam', ar: 'كمّل الامتحان' },
  'mock.submit_exam_q': { en: 'Submit Exam?', ar: 'تسلّم الامتحان؟' },
  'mock.you_answered_prefix': { en: 'You have answered', ar: 'جاوبت' },
  'mock.time_remaining': { en: 'Time remaining', ar: 'الوقت الباقي' },
  'mock.unanswered_warning': {
    en: 'You have unanswered questions.',
    ar: 'في عندك أسئلة ما جاوبت عليها.',
  },
  'mock.continue_writing': { en: 'Continue Writing', ar: 'كمّل الكتابة' },
  'mock.submit_exam': { en: 'Submit Exam', ar: 'سلّم الامتحان' },
  'mock.previous': { en: 'Previous', ar: 'السابق' },
  'mock.answered': { en: 'answered', ar: 'مُجاب' },
  'mock.estimated_grade_for': { en: 'Estimated GCSE Grade for', ar: 'الدرجة المتوقعة لـ' },
  'mock.percentage': { en: 'Percentage', ar: 'النسبة المئوية' },
  'mock.gcse_grade': { en: 'GCSE Grade', ar: 'درجة GCSE' },
  'mock.your_responses': { en: 'Your Responses', ar: 'إجاباتك' },
  'mock.options_selected': { en: 'options selected', ar: 'خيار محدد' },
  'mock.words_written': { en: 'words written', ar: 'كلمة مكتوبة' },
  'mock.no_response': { en: 'No response', ar: 'ما في إجابة' },
  'mock.about_estimate': { en: 'About This Estimate', ar: 'عن هذا التقدير' },
  'mock.about_estimate_body': {
    en: 'This grade is an estimate based on response length and completion. For accurate grading of your written responses, AI-powered essay feedback will provide detailed marks against the marking guide with specific comments on how to improve. This feature is coming soon.',
    ar: 'هذي الدرجة تقدير بناءً على طول الإجابة وإكمالها. للحصول على تصحيح دقيق لإجاباتك المكتوبة، ملاحظات الذكاء الاصطناعي بتعطيك علامات تفصيلية حسب سلم العلامات مع اقتراحات تحسين محددة. هذي الميزة قريباً.',
  },
  'mock.marking_guide': { en: 'Marking Guide', ar: 'دليل التصحيح' },
  'mock.example_response_grade7': {
    en: 'Example response (Grade 7+):',
    ar: 'مثال إجابة (درجة ٧+):',
  },
  'mock.all_exams': { en: 'All Exams', ar: 'كل الامتحانات' },
  'mock.retry_paper': { en: 'Retry This Paper', ar: 'حاول هذي الورقة مرة ثانية' },
  'mock.paper_not_found': { en: 'Exam Paper Not Found', ar: 'ورقة الامتحان غير موجودة' },
  'mock.paper_not_found_body': {
    en: 'The exam paper you are looking for does not exist or is not yet available. Please check the URL or browse available papers.',
    ar: 'ورقة الامتحان اللي تدوّر عليها مو موجودة أو لسا غير متوفرة. تأكد من الرابط أو تصفح الأوراق المتوفرة.',
  },
  'mock.view_available_papers': { en: 'View Available Papers', ar: 'شوف الأوراق المتوفرة' },
  'mock.grade_label_excellent': { en: 'Excellent', ar: 'ممتاز' },
  'mock.grade_label_good_pass': { en: 'Good pass', ar: 'نجاح جيد' },
  'mock.grade_label_standard_pass': { en: 'Standard pass', ar: 'نجاح عادي' },
  'mock.grade_label_below_pass': { en: 'Below pass', ar: 'تحت النجاح' },
  'mock.grade_label_ungraded': { en: 'Ungraded', ar: 'بدون درجة' },

  // ─── Courses ─────────────────────────────────────────────────────
  'course.breadcrumb': { en: 'Courses', ar: 'الكورسات' },
  'course.seo_h1': {
    en: 'English Courses — KS3, GCSE, IGCSE',
    ar: 'كورسات إنجليزي — KS3 و GCSE و IGCSE',
  },
  'course.seo_description': {
    en: 'Structured English courses across Language, Literature, Poetry, Drama and Exam Skills for every major UK exam board.',
    ar: 'كورسات إنجليزي منظّمة في اللغة والأدب والشعر والدراما ومهارات الامتحان لكل هيئات الامتحان البريطانية الكبيرة.',
  },
  'course.seo_categories_heading': { en: 'Categories', ar: 'الفئات' },
  'course.seo_featured_heading': { en: 'Featured courses', ar: 'كورسات مميزة' },
  'course.catalogue_title': { en: 'Course Catalogue', ar: 'قائمة الكورسات' },
  'course.catalogue_subtitle': {
    en: 'Structured courses designed to take you from fundamentals to exam confidence. Pick your level, choose a course, and start learning today.',
    ar: 'كورسات منظّمة تنقلك من الأساسيات إلى الثقة بالامتحان. اختر مستواك وكورس وابدأ التعلّم الحين.',
  },
  'course.subscribe_unlock': {
    en: 'Subscribe to unlock all courses',
    ar: 'اشترك عشان تفتح كل الكورسات',
  },
  'course.then_just': { en: 'Then just', ar: 'وبعدين بس' },
  'course.rolling_monthly_cancel': {
    en: 'on a rolling monthly contract. Cancel anytime.',
    ar: 'باشتراك شهري متجدد. ألغِ أي وقت.',
  },
  'course.cat_all': { en: 'All Courses', ar: 'كل الكورسات' },
  'course.cat_language': { en: 'Language', ar: 'اللغة' },
  'course.cat_literature': { en: 'Literature', ar: 'الأدب' },
  'course.cat_poetry': { en: 'Poetry', ar: 'الشعر' },
  'course.cat_drama': { en: 'Drama', ar: 'الدراما' },
  'course.cat_exam_skills': { en: 'Exam Skills', ar: 'مهارات الامتحان' },
  'course.sort_recommended': { en: 'Recommended', ar: 'الموصى به' },
  'course.sort_az': { en: 'A–Z', ar: 'أ–ي' },
  'course.sort_za': { en: 'Z–A', ar: 'ي–أ' },
  'course.sort_modules': { en: 'Most Content', ar: 'الأكثر محتوى' },
  'course.sort_by': { en: 'Sort by', ar: 'ترتيب حسب' },
  'course.search_placeholder': { en: 'Search courses...', ar: 'دوّر كورس…' },
  'course.none_found': { en: 'No courses found', ar: 'ما في كورسات' },
  'course.none_found_hint': {
    en: 'There are no courses matching your current filters. Try adjusting your search or filters.',
    ar: 'ما في كورسات تطابق الفلاتر مالتك. جرّب تعدّل البحث أو الفلاتر.',
  },
  'course.clear_filters': { en: 'Clear All Filters', ar: 'صفّر كل الفلاتر' },
  'course.recommended_title': { en: 'Recommended for You', ar: 'موصى به لك' },
  'course.recommended_subtitle': {
    en: 'Based on your level and preferences',
    ar: 'بناءً على مستواك وتفضيلاتك',
  },
  'course.course_singular': { en: 'course', ar: 'كورس' },
  'course.course_plural': { en: 'courses', ar: 'كورس' },
  'course.show_less': { en: 'Show Less', ar: 'اعرض أقل' },
  'course.view_all_prefix': { en: 'View All', ar: 'شوف الكل' },
  'course.modules': { en: 'modules', ar: 'وحدة' },
  'course.quizzes': { en: 'quizzes', ar: 'اختبار' },
  'course.quiz_singular': { en: 'quiz', ar: 'اختبار' },
  'course.free_preview': { en: 'Free Preview', ar: 'معاينة ببلاش' },
  'course.start': { en: 'Start', ar: 'ابدأ' },
  'course.supplement_title': { en: 'Supplement Your Learning', ar: 'كمّل تعلّمك' },
  'course.supplement_desc': {
    en: 'Explore these complementary resources to deepen your understanding and boost your exam preparation.',
    ar: 'تصفح هذي المصادر المكملة عشان تعمّق فهمك وتقوّي استعدادك للامتحان.',
  },
  'course.res_study_guides_title': { en: 'Text Study Guides', ar: 'دلائل دراسة النصوص' },
  'course.res_study_guides_desc': {
    en: 'Detailed revision notes for every set text',
    ar: 'ملاحظات مراجعة تفصيلية لكل نص مقرر',
  },
  'course.res_writing_title': { en: 'Writing Masterclass', ar: 'ماستر كلاس الكتابة' },
  'course.res_writing_desc': {
    en: 'Creative, persuasive, and analytical writing guides',
    ar: 'دلائل الكتابة الإبداعية والإقناعية والتحليلية',
  },
  'course.res_poetry_title': { en: 'Poetry Hub', ar: 'مركز الشعر' },
  'course.res_poetry_desc': {
    en: 'Anthology analysis and poetry techniques',
    ar: 'تحليل المختارات الشعرية والتقنيات',
  },
  'course.res_literature_title': { en: 'Literature Guides', ar: 'دلائل الأدب' },
  'course.res_literature_desc': {
    en: 'Board-specific literature exam preparation',
    ar: 'استعداد لامتحان الأدب حسب الهيئة',
  },
  'course.start_learning': { en: 'Start Learning', ar: 'ابدأ التعلّم' },
  'course.try_free_preview': { en: 'Try Free Preview', ar: 'جرّب معاينة ببلاش' },
  'course.try_free_preview_no_signup': {
    en: 'Try Free Preview — No Sign-Up Needed',
    ar: 'جرّب معاينة ببلاش — بدون تسجيل',
  },
  'course.all_courses': { en: 'All courses', ar: 'كل الكورسات' },
  'course.about_course': { en: 'About This Course', ar: 'عن هذا الكورس' },
  'course.what_youll_learn': { en: "What You'll Learn", ar: 'شنو بتتعلم' },
  'course.ready_to_learn': { en: 'Ready to learn', ar: 'مستعد تتعلم' },
  'course.try_it_free': { en: 'Try it free', ar: 'جرّبه ببلاش' },
  'course.no_signup_needed': { en: 'No sign-up needed', ar: 'بدون تسجيل' },
  'course.want_full_access': {
    en: 'Want full access to all courses?',
    ar: 'تبغى وصول كامل لكل الكورسات؟',
  },
  'course.start_7day_trial': { en: 'Start 7-day free trial', ar: 'ابدأ تجربة ٧ أيام مجانية' },
  'course.per_month_after_trial': {
    en: '/mo after trial · Card required',
    ar: '/شهرياً بعد التجربة · يبغى بطاقة',
  },
  'course.includes_heading': { en: 'This course includes', ar: 'هذا الكورس فيه' },
  'course.structured_modules': { en: 'structured modules', ar: 'وحدة منظّمة' },
  'course.of_content': { en: 'of content', ar: 'من المحتوى' },
  'course.level_word': { en: 'level', ar: 'مستوى' },
  'course.quizzes_practice': { en: 'Quizzes & practice questions', ar: 'اختبارات وأسئلة تدريبية' },
  'course.cert_on_complete': { en: 'Certificate on completion', ar: 'شهادة عند الإكمال' },

  // ─── School admin / teacher hub chrome ──────────────────────────
  'school.sidebar.dashboard': { en: 'Dashboard', ar: 'لوحة المدرسة' },
  'school.sidebar.my_classes': { en: 'My Classes', ar: 'صفوفي' },
  'school.sidebar.classes': { en: 'Classes', ar: 'الصفوف' },
  'school.sidebar.lesson_plans': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'school.sidebar.worksheets': { en: 'Worksheets', ar: 'أوراق العمل' },
  'school.sidebar.assignments': { en: 'Assignments', ar: 'الواجبات' },
  'school.sidebar.resources': { en: 'Resources', ar: 'الموارد' },
  'school.sidebar.teaching_guides': { en: 'Teaching Guides', ar: 'أدلة التدريس' },
  'school.sidebar.calendar': { en: 'Calendar', ar: 'التقويم' },
  'school.sidebar.reports': { en: 'Reports', ar: 'التقارير' },
  'school.sidebar.tools': { en: 'Tools', ar: 'الأدوات' },
  'school.sidebar.tools.seating': { en: 'Seating Plans', ar: 'خطط الجلوس' },
  'school.sidebar.tools.groups': { en: 'Group Generator', ar: 'مولّد المجموعات' },
  'school.sidebar.notifications': { en: 'Notifications', ar: 'الإشعارات' },
  'school.sidebar.department': { en: 'Department', ar: 'القسم' },
  'school.sidebar.settings': { en: 'Settings', ar: 'الإعدادات' },
  'school.sidebar.users': { en: 'Users', ar: 'المستخدمين' },
  'school.sidebar.import_users': { en: 'Import Users', ar: 'استورد المستخدمين' },
  'school.sidebar.invite_teachers': { en: 'Invite Teachers', ar: 'ادعُ المعلمين' },
  'school.sidebar.analytics': { en: 'Analytics', ar: 'التحليلات' },
  'school.sidebar.billing': { en: 'Billing', ar: 'الفواتير' },
  'school.sidebar.permissions': { en: 'Permissions', ar: 'الصلاحيات' },
  'school.sidebar.setup_guide': { en: 'Setup Guide', ar: 'دليل الإعداد' },
  'school.sidebar.school_dashboard': { en: 'School Dashboard', ar: 'لوحة المدرسة' },
  'school.sidebar.plan_suffix': { en: 'plan', ar: 'باقة' },
  'school.sidebar.default_member_name': { en: 'Teacher', ar: 'المعلم' },
  'school.sidebar.create': { en: 'Create', ar: 'سوِّ جديد' },
  'school.sidebar.create_new': { en: 'Create new…', ar: 'سوِّ جديد…' },
  'school.sidebar.new_class': { en: 'New Class', ar: 'صف جديد' },
  'school.sidebar.new_assignment': { en: 'New Assignment', ar: 'واجب جديد' },
  'school.sidebar.new_lesson': { en: 'New Lesson', ar: 'درس جديد' },
  'school.sidebar.expand': { en: 'Expand sidebar', ar: 'وسّع القائمة الجانبية' },
  'school.sidebar.collapse': { en: 'Collapse sidebar', ar: 'صغّر القائمة الجانبية' },
  'school.sidebar.expand_section': { en: 'Expand', ar: 'وسّع' },
  'school.sidebar.collapse_section': { en: 'Collapse', ar: 'صغّر' },
  'school.sidebar.seats_used': { en: 'Seats Used', ar: 'المقاعد المستخدمة' },
  'school.sidebar.back_to_dashboard': { en: 'Back to Dashboard', ar: 'رجوع للوحة' },
  'school.sidebar.open': { en: 'Open sidebar', ar: 'افتح القائمة الجانبية' },
  'school.sidebar.close': { en: 'Close sidebar', ar: 'سكّر القائمة الجانبية' },
  'school.sidebar.open_nav': { en: 'Open navigation', ar: 'افتح القائمة' },
  'school.sidebar.close_nav': { en: 'Close navigation', ar: 'سكّر القائمة' },
  'school.sidebar.nav_label': { en: 'School admin navigation', ar: 'قائمة إدارة المدرسة' },
  'school.sidebar.admin_portal': { en: 'School Admin Portal', ar: 'بوابة إدارة المدرسة' },
  'school.sidebar.founder_active_until': { en: 'FOUNDER - Active until', ar: 'FOUNDER - نشط لين' },
  'school.sidebar.founder_default_until': { en: 'Aug 2026', ar: 'أغسطس ٢٠٢٦' },
  'school.sidebar.back_to_site': { en: 'Back to site', ar: 'رجوع للموقع' },
  'school.sidebar.logout': { en: 'Logout', ar: 'سجّل خروج' },
  'school.notif.title': { en: 'Notifications', ar: 'الإشعارات' },
  'school.notif.bell': { en: 'Notifications', ar: 'الإشعارات' },
  'school.notif.unread_short': { en: 'unread', ar: 'غير مقروء' },
  'school.notif.mark_all_read': { en: 'Mark all read', ar: 'علّم الكل كمقروء' },
  'school.notif.empty': { en: 'No notifications yet.', ar: 'ما عندك إشعارات بعد.' },
  'school.notif.view_all': { en: 'View all notifications', ar: 'شوف كل الإشعارات' },
  'school.stats.courses': { en: 'Courses', ar: 'الكورسات' },
  'school.stats.mock_papers': { en: 'Mock Papers', ar: 'امتحانات تجريبية' },
  'school.stats.coverage': { en: 'Coverage', ar: 'التغطية' },
  'school.stats.exam_boards': { en: 'Exam Boards', ar: 'هيئات الامتحان' },
  'school.stats.flashcards': { en: 'Flashcards', ar: 'بطاقات المراجعة' },
  'school.stats.setup': { en: 'Setup', ar: 'الإعداد' },
  'school.stats.aria_label': { en: 'Platform statistics', ar: 'إحصاءات المنصة' },
  'school.student_table.col.name': { en: 'Name', ar: 'الاسم' },
  'school.student_table.col.avg_score': { en: 'Avg Score', ar: 'معدّل العلامات' },
  'school.student_table.col.completion': { en: 'Completion', ar: 'الإنجاز' },
  'school.student_table.col.time_spent': { en: 'Time Spent', ar: 'الوقت المستهلك' },
  'school.student_table.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'school.student_table.col.trajectory': { en: 'Trajectory', ar: 'الاتجاه' },
  'school.student_table.col.grade': { en: 'Grade', ar: 'الدرجة' },
  'school.student_table.trajectory.improving': { en: 'Improving', ar: 'يتحسّن' },
  'school.student_table.trajectory.declining': { en: 'Declining', ar: 'يتراجع' },
  'school.student_table.trajectory.stable': { en: 'Stable', ar: 'ثابت' },
  'school.student_table.relative.never': { en: 'Never', ar: 'أبد' },
  'school.student_table.relative.today': { en: 'Today', ar: 'اليوم' },
  'school.student_table.relative.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'school.student_table.search_placeholder': { en: 'Search students…', ar: 'دوّر على طالب…' },
  'school.student_table.empty': { en: 'No students found.', ar: 'ما في طلاب.' },
  'school.student_table.empty_search': {
    en: 'No students match your search.',
    ar: 'ما في طالب يطابق بحثك.',
  },
  'school.student_table.showing_prefix': { en: 'Showing', ar: 'يعرض' },
  'school.student_table.showing_of': { en: 'of', ar: 'من' },
  'school.student_table.student_singular': { en: 'student', ar: 'طالب' },
  'school.student_table.student_plural': { en: 'students', ar: 'طالب' },
  'school.banner.founder_access': { en: 'FOUNDER access', ar: 'وصول FOUNDER' },
  'school.banner.active_until': { en: 'active until', ar: 'نشط لين' },
  'school.banner.days_remaining': { en: 'days remaining', ar: 'يوم باقي' },
  'school.banner.on_founder_access_renew': {
    en: 'on your FOUNDER access — renew to keep access',
    ar: 'على وصول FOUNDER مالك — جدِّد عشان تبقى مشترك',
  },
  'school.banner.renew_now': { en: 'Renew now', ar: 'جدِّد الحين' },
  'school.banner.last_day': { en: 'Last day', ar: 'آخر يوم' },
  'school.banner.day_left_singular': { en: 'day left', ar: 'يوم باقي' },
  'school.banner.day_left_plural': { en: 'days left', ar: 'يوم باقي' },
  'school.banner.urgent_body': {
    en: 'your FOUNDER access is about to expire. Renew now to avoid disruption.',
    ar: 'وصول FOUNDER مالك قارب ينتهي. جدِّد الحين عشان ما ينقطع.',
  },
  'school.banner.renew_urgently': { en: 'Renew urgently', ar: 'جدِّد بسرعة' },
  'school.banner.expired_title': { en: 'Access expired', ar: 'الوصول انتهى' },
  'school.banner.expired_body': {
    en: 'Your school no longer has active access. Contact us to renew and restore full access for all students and teachers.',
    ar: 'مدرستك ما عاد عندها وصول نشط. تواصل معانا عشان نجدِّد ونرجِّع الوصول الكامل لكل الطلاب والمعلمين.',
  },
  'school.banner.restore_access': { en: 'Restore access', ar: 'رجِّع الوصول' },
  'school.banner.school_access_is': { en: 'School access is', ar: 'وصول المدرسة' },
  'school.banner.active': { en: 'active', ar: 'نشط' },
  'school.banner.until': { en: 'until', ar: 'لين' },
  'school.banner.trial_access': { en: 'Trial access', ar: 'وصول تجريبي' },
  'school.banner.day_remaining_singular': { en: 'day remaining', ar: 'يوم باقي' },
  'school.banner.day_remaining_plural': { en: 'days remaining', ar: 'يوم باقي' },
  'school.banner.upgrade': { en: 'Upgrade to full access', ar: 'رقِّ للوصول الكامل' },
  'school.founder_banner.headline': {
    en: 'Founding Schools Programme — only 10 places for 2026.',
    ar: 'برنامج المدارس المؤسِّسة — بس ١٠ مقاعد لـ ٢٠٢٦.',
  },
  'school.founder_banner.highlight': {
    en: 'Heavily discounted pricing + locked rates.',
    ar: 'خصم كبير + معدّلات ثابتة.',
  },
  'school.founder_banner.cta': { en: 'Book a Call', ar: 'احجز مكالمة' },
  'school.founder_banner.dismiss': { en: 'Dismiss banner', ar: 'سكّر البانر' },
  'teacher.resource.kind.lesson_plan': { en: 'Lesson Plan', ar: 'خطة درس' },
  'teacher.resource.kind.worksheet': { en: 'Worksheet', ar: 'ورقة عمل' },
  'teacher.resource.kind.mark_scheme': { en: 'Mark Scheme', ar: 'سلم العلامات' },
  'teacher.resource.kind.revision_pack': { en: 'Revision Pack', ar: 'حزمة مراجعة' },
  'teacher.resource.kind.starter': { en: 'Starter', ar: 'نشاط افتتاحي' },
  'teacher.resource.kind.homework': { en: 'Homework', ar: 'واجب بيتي' },
  'teacher.resource.for_teachers': { en: 'For Teachers', ar: 'للمعلمين' },
  'teacher.resource.open': { en: 'Open resource', ar: 'افتح المورد' },
  'school.dash.title': { en: 'School Dashboard', ar: 'لوحة المدرسة' },
  'school.dash.founder.active_until_prefix': {
    en: 'Your Founding Schools access is active until',
    ar: 'وصولك لبرنامج المدارس المؤسِّسة نشط لين',
  },
  'school.dash.founder.rate_locked': {
    en: 'Your preferential rate is locked. Contact us to discuss renewal.',
    ar: 'سعرك التفضيلي مثبَّت. تواصل معانا عشان نتكلم عن التجديد.',
  },
  'school.dash.filter_label': { en: 'Filter:', ar: 'فلتر:' },
  'school.dash.filter.all_year_groups': { en: 'All Year Groups', ar: 'كل الصفوف الدراسية' },
  'school.dash.filter.all_classes': { en: 'All Classes', ar: 'كل الصفوف' },
  'school.dash.filter.clear': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'school.dash.stat.total_students': { en: 'Total Students', ar: 'إجمالي الطلاب' },
  'school.dash.stat.enrolled_students': { en: 'Enrolled students', ar: 'الطلاب المسجّلين' },
  'school.dash.stat.active_classes': { en: 'Active Classes', ar: 'الصفوف النشطة' },
  'school.dash.stat.manage_classes': { en: 'Manage classes', ar: 'دير الصفوف' },
  'school.dash.stat.teachers': { en: 'Teachers', ar: 'المعلمين' },
  'school.dash.stat.active_staff': { en: 'Active staff members', ar: 'الكادر النشط' },
  'school.dash.stat.assignments': { en: 'Assignments', ar: 'الواجبات' },
  'school.dash.stat.set_this_week': { en: 'Set this week', ar: 'اللي انعطت هالأسبوع' },
  'school.dash.overview.title': { en: 'Student Overview', ar: 'نظرة عامة على الطلاب' },
  'school.dash.overview.full_analytics': { en: 'Full analytics', ar: 'التحليلات الكاملة' },
  'school.dash.overview.body': {
    en: 'Student grade data (Working At Grade, Predicted Grade, Target Grade) is populated as students complete assessments on the platform. The more assessments completed, the richer the data becomes.',
    ar: 'بيانات درجات الطلاب (الدرجة الحالية، المتوقّعة، المستهدفة) تنبني الحين والطلاب يخلّصون التقييمات على المنصة. كل ما زادت التقييمات، صارت البيانات أغنى.',
  },
  'school.dash.overview.hint': {
    en: 'Grade distribution, on-track/off-track analysis, and at-risk student identification will appear here as assessment data is collected. Assign mock exams, quizzes, and essays to start building student profiles.',
    ar: 'توزيع الدرجات وتحليل الطلاب الماشين صح أو متأخرين وتحديد الطلاب اللي عندهم خطر يطلع هني لما تتجمّع بيانات التقييم. عيّن امتحانات تجريبية واختبارات قصيرة ومقالات عشان تبدأ تبني ملفات الطلاب.',
  },
  'school.dash.grade.working_at': { en: 'Working At Grade', ar: 'الدرجة الحالية' },
  'school.dash.grade.predicted': { en: 'Predicted Grade', ar: 'الدرجة المتوقّعة' },
  'school.dash.grade.target': { en: 'Target Grade', ar: 'الدرجة المستهدفة' },
  'school.dash.grade.on_track': { en: 'On Track', ar: 'ماشي صح' },
  'school.dash.grade.avg_across': { en: 'Avg across students', ar: 'المعدّل بين الطلاب' },
  'school.dash.grade.based_on_trajectory': { en: 'Based on trajectory', ar: 'بناءً على الاتجاه' },
  'school.dash.grade.meeting_target': { en: 'Meeting target grade', ar: 'يحقّق الدرجة المستهدفة' },
  'school.dash.quick_actions.title': { en: 'Quick Actions', ar: 'إجراءات سريعة' },
  'school.dash.quick_actions.import': {
    en: 'Import Students / Teachers',
    ar: 'استورد الطلاب / المعلمين',
  },
  'school.dash.quick_actions.import_sub': {
    en: 'Upload CSV to bulk-add users',
    ar: 'حمّل ملف CSV عشان تضيف المستخدمين دفعة وحدة',
  },
  'school.dash.quick_actions.manage_classes': { en: 'Manage Classes', ar: 'دير الصفوف' },
  'school.dash.quick_actions.manage_classes_sub': {
    en: 'Create and organise classes',
    ar: 'سوِّ الصفوف ورتّبها',
  },
  'school.dash.quick_actions.view_analytics': { en: 'View Analytics', ar: 'شوف التحليلات' },
  'school.dash.quick_actions.view_analytics_sub': {
    en: 'Track progress and performance',
    ar: 'تابع التقدّم والأداء',
  },
  'school.dash.quick_actions.download_logins': {
    en: 'Download Login Details',
    ar: 'حمّل بيانات الدخول',
  },
  'school.dash.quick_actions.download_logins_sub': {
    en: 'Export credentials for students',
    ar: 'صدِّر بيانات دخول الطلاب',
  },
  'school.dash.hardest.title': {
    en: 'Questions students struggle with most',
    ar: 'الأسئلة اللي يعاني منها الطلاب أكثر شي',
  },
  'school.dash.hardest.view_all': { en: 'View all', ar: 'شوف الكل' },
  'school.dash.hardest.loading': {
    en: 'Loading question data…',
    ar: 'لحظة، يحمّل بيانات الأسئلة…',
  },
  'school.dash.hardest.empty': {
    en: "No quiz data yet — your students' responses will appear here as they practise.",
    ar: 'ما في بيانات اختبارات بعد — إجابات طلابك بتطلع هني لما يبدون يتدرّبون.',
  },
  'school.dash.hardest.col.topic': { en: 'Topic', ar: 'الموضوع' },
  'school.dash.hardest.col.correct': { en: 'Correct', ar: 'صحيح' },
  'school.dash.hardest.col.attempts': { en: 'Attempts', ar: 'المحاولات' },
  'school.dash.hardest.col.avg_time': { en: 'Avg time', ar: 'متوسط الوقت' },
  'school.dash.hardest.col.difficulty': { en: 'Difficulty', ar: 'الصعوبة' },
  'school.dash.reading_age.title': { en: 'Reading Age Data', ar: 'بيانات العمر القرائي' },
  'school.dash.reading_age.body': {
    en: 'Reading age data is populated from the Reading Comprehension Assessment. Assign the assessment to your classes to generate reading age, decoding age, and fluency age data for each student.',
    ar: 'بيانات العمر القرائي تنبني من تقييم الفهم القرائي. عيّن التقييم لصفوفك عشان تطلع بيانات العمر القرائي وعمر الفك وعمر الطلاقة لكل طالب.',
  },
  'school.dash.reading_age.cta': { en: 'View Reading Assessment', ar: 'شوف تقييم القراءة' },
  'school.dash.activity.title': { en: 'Recent Activity', ar: 'النشاط الأخير' },
  'school.dash.activity.empty': {
    en: 'Activity will appear here as teachers and students use the platform.',
    ar: 'النشاط بيطلع هني لما المعلمين والطلاب يستخدمون المنصة.',
  },
  'school.dash.setup.progress_title': { en: 'Setup Progress', ar: 'تقدّم الإعداد' },
  'school.dash.setup.getting_started': { en: 'Getting started', ar: 'لسّا بادي' },
  'school.dash.setup.create_school': { en: 'Create school account', ar: 'سوِّ حساب المدرسة' },
  'school.dash.setup.import_teachers': { en: 'Import teachers', ar: 'استورد المعلمين' },
  'school.dash.setup.import_students': { en: 'Import students', ar: 'استورد الطلاب' },
  'school.dash.setup.create_classes': { en: 'Create classes', ar: 'سوِّ الصفوف' },
  'school.dash.setup.assign_students': {
    en: 'Assign students to classes',
    ar: 'وزّع الطلاب على الصفوف',
  },
  'school.dash.setup.view_guide': { en: 'View Setup Guide', ar: 'شوف دليل الإعداد' },
  'school.dash.setup.complete_title': { en: 'Setup Complete', ar: 'الإعداد خلَّص' },
  'school.dash.setup.complete_body': {
    en: 'Your school is set up and ready to go.',
    ar: 'مدرستك معدّة وجاهزة.',
  },
  'school.dash.grade_tracking.title': { en: 'Grade Tracking', ar: 'متابعة الدرجات' },
  'school.dash.grade_tracking.working_at_desc': {
    en: 'Based on the average of recent assessment scores.',
    ar: 'بناءً على معدّل علامات التقييمات الأخيرة.',
  },
  'school.dash.grade_tracking.predicted_desc': {
    en: "Projected grade based on the student's trajectory.",
    ar: 'الدرجة المتوقّعة بناءً على اتجاه الطالب.',
  },
  'school.dash.grade_tracking.target_desc': {
    en: 'Aspirational grade set 1-2 grades above working at grade.',
    ar: 'درجة طموحة فوق الدرجة الحالية بدرجة أو اثنتين.',
  },
  'school.dash.grade_tracking.on_track_desc': {
    en: 'A student is "on track" when their predicted grade meets or exceeds their target grade.',
    ar: 'الطالب يعتبر "ماشي صح" لما درجته المتوقّعة توصل أو تتجاوز الدرجة المستهدفة.',
  },
  'school.dash.demo.title': { en: 'See it in action', ar: 'شوفها وهي شغّالة' },
  'school.dash.demo.body': {
    en: 'View the interactive demo dashboard with sample student data to see grade distributions, on-track analysis, and student intervention lists.',
    ar: 'شوف لوحة الديمو التفاعلية مع بيانات طلاب نموذجية عشان تشوف توزيع الدرجات وتحليل الطلاب الماشين صح وقوائم الطلاب اللي محتاجين تدخّل.',
  },
  'school.dash.demo.cta': { en: 'View Demo Dashboard', ar: 'شوف لوحة الديمو' },

  // ─── School / Students list ─────────────────────────────────────
  'school.students.title': { en: 'Students', ar: 'الطلاب' },
  'school.students.import': { en: 'Import Students', ar: 'استورد الطلاب' },
  'school.students.add': { en: 'Add Student', ar: 'ضيف طالب' },
  'school.students.stats.total': { en: 'Total Students', ar: 'إجمالي الطلاب' },
  'school.students.stats.active_week': { en: 'Active This Week', ar: 'النشطين هالأسبوع' },
  'school.students.stats.not_active': { en: 'Not Yet Active', ar: 'ما اشتغلوا بعد' },
  'school.students.stats.suspended': { en: 'Suspended', ar: 'موقوفين' },
  'school.students.stats.of_total': { en: 'of total', ar: 'من الإجمالي' },
  'school.students.search_placeholder': {
    en: 'Search by name or email...',
    ar: 'دوّر بالاسم أو الإيميل…',
  },
  'school.students.filter.year_group': { en: 'Year Group', ar: 'الصف الدراسي' },
  'school.students.filter.all_years': { en: 'All Years', ar: 'كل الصفوف' },
  'school.students.filter.status': { en: 'Status', ar: 'الحالة' },
  'school.students.filter.all_status': { en: 'All Status', ar: 'كل الحالات' },
  'school.students.filter.class': { en: 'Class', ar: 'الصف' },
  'school.students.filter.all_classes': { en: 'All Classes', ar: 'كل الصفوف' },
  'school.students.filter.clear': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'school.students.status.active': { en: 'Active', ar: 'نشط' },
  'school.students.status.inactive': { en: 'Inactive', ar: 'غير نشط' },
  'school.students.status.suspended': { en: 'Suspended', ar: 'موقوف' },
  'school.students.col.name': { en: 'Name', ar: 'الاسم' },
  'school.students.col.email': { en: 'Email', ar: 'الإيميل' },
  'school.students.col.year': { en: 'Year', ar: 'الصف' },
  'school.students.col.class': { en: 'Class', ar: 'الصف' },
  'school.students.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'school.students.col.progress': { en: 'Progress', ar: 'التقدّم' },
  'school.students.col.working_at': { en: 'Working At', ar: 'الدرجة الحالية' },
  'school.students.col.status': { en: 'Status', ar: 'الحالة' },
  'school.students.col.actions': { en: 'Actions', ar: 'الإجراءات' },
  'school.students.col.grade_prefix': { en: 'Grade', ar: 'درجة' },
  'school.students.relative.never': { en: 'Never', ar: 'أبد' },
  'school.students.relative.just_now': { en: 'Just now', ar: 'الحين' },
  'school.students.relative.today': { en: 'Today', ar: 'اليوم' },
  'school.students.relative.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'school.students.relative.minutes_suffix': { en: 'minutes ago', ar: 'دقيقة' },
  'school.students.relative.days_suffix': { en: 'days ago', ar: 'يوم' },
  'school.students.relative.week_one': { en: '1 week ago', ar: 'أسبوع' },
  'school.students.relative.weeks_suffix': { en: 'weeks ago', ar: 'أسابيع' },
  'school.students.relative.month_one': { en: '1 month ago', ar: 'شهر' },
  'school.students.relative.months_suffix': { en: 'months ago', ar: 'شهر' },
  'school.students.unassigned': { en: 'Unassigned', ar: 'بدون صف' },
  'school.students.aria.select_all': { en: 'Select all on page', ar: 'حدّد الكل بالصفحة' },
  'school.students.aria.select_one': { en: 'Select student', ar: 'حدّد الطالب' },
  'school.students.aria.clear_search': { en: 'Clear search', ar: 'امسح البحث' },
  'school.students.aria.clear_selection': { en: 'Clear selection', ar: 'امسح التحديد' },
  'school.students.aria.prev_page': { en: 'Previous page', ar: 'الصفحة السابقة' },
  'school.students.aria.next_page': { en: 'Next page', ar: 'الصفحة التالية' },
  'school.students.aria.student_actions': { en: 'Student actions', ar: 'إجراءات الطالب' },
  'school.students.action.view_progress': { en: 'View Progress', ar: 'شوف التقدّم' },
  'school.students.action.move_to_class': { en: 'Move to Class', ar: 'نقل لصف' },
  'school.students.action.reset_password': { en: 'Reset Password', ar: 'صفّر كلمة السر' },
  'school.students.action.suspend': { en: 'Suspend', ar: 'وقّف' },
  'school.students.action.unsuspend': { en: 'Unsuspend', ar: 'فك الإيقاف' },
  'school.students.action.remove_school': { en: 'Remove from School', ar: 'احذف من المدرسة' },
  'school.students.action.reset_passwords': { en: 'Reset Passwords', ar: 'صفّر كلمات السر' },
  'school.students.action.export_selected': { en: 'Export Selected', ar: 'صدّر المحدّد' },
  'school.students.action.move_students': { en: 'Move Students', ar: 'نقل الطلاب' },
  'school.students.action.select_class': { en: 'Select a class', ar: 'اختر صف' },
  'school.students.selected_count': { en: 'selected', ar: 'محدّد' },
  'school.students.remove.title': { en: 'Remove Student', ar: 'احذف الطالب' },
  'school.students.remove.body_prefix': {
    en: 'Are you sure you want to remove',
    ar: 'متأكد إنك تبي تحذف',
  },
  'school.students.remove.body_suffix': {
    en: 'from your school? This action cannot be undone.',
    ar: 'من مدرستك؟ ما يمكن ترجع الإجراء.',
  },
  'school.students.action.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.students.empty.title': { en: 'No students yet', ar: 'ما عندك طلاب بعد' },
  'school.students.empty.body': {
    en: 'Import your students via Excel or share your school join code.',
    ar: 'استورد الطلاب من إكسل أو شارك كود الانضمام مال مدرستك.',
  },
  'school.students.empty.view_join_code': { en: 'View Join Code', ar: 'شوف كود الانضمام' },
  'school.students.no_filter_results': {
    en: 'No students match your filters.',
    ar: 'ما في طلاب يطابقون الفلاتر.',
  },
  'school.students.pagination.showing': { en: 'Showing', ar: 'يعرض' },
  'school.students.pagination.of': { en: 'of', ar: 'من' },
  'school.students.pagination.students': { en: 'students', ar: 'طالب' },
  'school.students.detail.back': { en: 'Students', ar: 'الطلاب' },
  'school.students.detail.module.complete': { en: 'Complete', ar: 'مكتمل' },
  'school.students.detail.module.in_progress': { en: 'In Progress', ar: 'شغّال عليه' },
  'school.students.detail.module.not_started': { en: 'Not Started', ar: 'ما بدا' },
  'school.students.detail.child_ref': { en: 'your child', ar: 'ابنك أو بنتك' },

  // ─── School / Teachers list ─────────────────────────────────────
  'school.teachers.title': { en: 'Teachers', ar: 'المعلمين' },
  'school.teachers.import': { en: 'Import Teachers', ar: 'استورد المعلمين' },
  'school.teachers.invite': { en: 'Invite Teachers', ar: 'ادعُ المعلمين' },
  'school.teachers.stats.total': { en: 'Total Teachers', ar: 'إجمالي المعلمين' },
  'school.teachers.stats.active_week': { en: 'Active This Week', ar: 'النشطين هالأسبوع' },
  'school.teachers.stats.classes_covered': { en: 'Classes Covered', ar: 'الصفوف المغطّاة' },
  'school.teachers.stats.suspended': { en: 'Suspended', ar: 'موقوفين' },
  'school.teachers.stats.of_total': { en: 'of total', ar: 'من الإجمالي' },
  'school.teachers.search_placeholder': {
    en: 'Search by name or email...',
    ar: 'دوّر بالاسم أو الإيميل…',
  },
  'school.teachers.filter.role': { en: 'Role', ar: 'الدور' },
  'school.teachers.filter.all_roles': { en: 'All Roles', ar: 'كل الأدوار' },
  'school.teachers.filter.status': { en: 'Status', ar: 'الحالة' },
  'school.teachers.filter.all_status': { en: 'All Status', ar: 'كل الحالات' },
  'school.teachers.filter.clear': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'school.teachers.role.teacher': { en: 'Teacher', ar: 'معلم' },
  'school.teachers.role.head_of_dept': { en: 'Head of Dept', ar: 'رئيس قسم' },
  'school.teachers.role.head_of_department': { en: 'Head of Department', ar: 'رئيس القسم' },
  'school.teachers.role.admin': { en: 'Admin', ar: 'إدارة' },
  'school.teachers.status.active': { en: 'Active', ar: 'نشط' },
  'school.teachers.status.inactive': { en: 'Inactive', ar: 'غير نشط' },
  'school.teachers.status.suspended': { en: 'Suspended', ar: 'موقوف' },
  'school.teachers.col.name': { en: 'Name', ar: 'الاسم' },
  'school.teachers.col.email': { en: 'Email', ar: 'الإيميل' },
  'school.teachers.col.role': { en: 'Role', ar: 'الدور' },
  'school.teachers.col.classes': { en: 'Classes', ar: 'الصفوف' },
  'school.teachers.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'school.teachers.col.status': { en: 'Status', ar: 'الحالة' },
  'school.teachers.col.actions': { en: 'Actions', ar: 'الإجراءات' },
  'school.teachers.class_singular': { en: 'class', ar: 'صف' },
  'school.teachers.class_plural': { en: 'classes', ar: 'صفوف' },
  'school.teachers.classes_none': { en: 'None', ar: 'ولا شي' },
  'school.teachers.aria.select_all': { en: 'Select all on page', ar: 'حدّد الكل بالصفحة' },
  'school.teachers.aria.select_one': { en: 'Select teacher', ar: 'حدّد المعلم' },
  'school.teachers.aria.clear_search': { en: 'Clear search', ar: 'امسح البحث' },
  'school.teachers.aria.clear_selection': { en: 'Clear selection', ar: 'امسح التحديد' },
  'school.teachers.aria.prev_page': { en: 'Previous page', ar: 'الصفحة السابقة' },
  'school.teachers.aria.next_page': { en: 'Next page', ar: 'الصفحة التالية' },
  'school.teachers.aria.teacher_actions': { en: 'Teacher actions', ar: 'إجراءات المعلم' },
  'school.teachers.action.edit': { en: 'Edit Teacher', ar: 'عدّل المعلم' },
  'school.teachers.action.reset_password': { en: 'Reset Password', ar: 'صفّر كلمة السر' },
  'school.teachers.action.suspend': { en: 'Suspend', ar: 'وقّف' },
  'school.teachers.action.unsuspend': { en: 'Unsuspend', ar: 'فك الإيقاف' },
  'school.teachers.action.remove_school': { en: 'Remove from School', ar: 'احذف من المدرسة' },
  'school.teachers.action.reset_passwords': { en: 'Reset Passwords', ar: 'صفّر كلمات السر' },
  'school.teachers.action.export_selected': { en: 'Export Selected', ar: 'صدّر المحدّد' },
  'school.teachers.selected_count': { en: 'selected', ar: 'محدّد' },
  'school.teachers.remove.title': { en: 'Remove Teacher', ar: 'احذف المعلم' },
  'school.teachers.remove.body_prefix': {
    en: 'Are you sure you want to remove',
    ar: 'متأكد إنك تبي تحذف',
  },
  'school.teachers.remove.body_suffix': {
    en: 'from your school? Their classes will become unassigned.',
    ar: 'من مدرستك؟ صفوفه بتنحرر من غير معلم.',
  },
  'school.teachers.edit.title': { en: 'Edit Teacher', ar: 'عدّل المعلم' },
  'school.teachers.edit.role_label': { en: 'Role', ar: 'الدور' },
  'school.teachers.edit.status_label': { en: 'Status', ar: 'الحالة' },
  'school.teachers.edit.save': { en: 'Save Changes', ar: 'احفظ التعديلات' },
  'school.teachers.action.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.teachers.empty.title': { en: 'No teachers yet', ar: 'ما عندك معلمين بعد' },
  'school.teachers.empty.body': {
    en: 'Invite your teachers via email or import them from a spreadsheet.',
    ar: 'ادعِ معلميك بالإيميل أو استوردهم من ملف.',
  },
  'school.teachers.no_filter_results': {
    en: 'No teachers match your filters.',
    ar: 'ما في معلمين يطابقون الفلاتر.',
  },
  'school.teachers.pagination.showing': { en: 'Showing', ar: 'يعرض' },
  'school.teachers.pagination.of': { en: 'of', ar: 'من' },
  'school.teachers.pagination.teachers': { en: 'teachers', ar: 'معلم' },

  // ─── School / Classes list ──────────────────────────────────────
  'school.classes.title': { en: 'Classes', ar: 'الصفوف' },
  'school.classes.subtitle': {
    en: 'Manage and monitor your English classes',
    ar: 'دير وراقب صفوف الإنجليزي مالتك.',
  },
  'school.classes.create': { en: 'Create Class', ar: 'سوِّ صف' },
  'school.classes.create_modal.title': { en: 'Create New Class', ar: 'سوِّ صف يديد' },
  'school.classes.create_modal.body': {
    en: 'Set up a new class for your students.',
    ar: 'جهّز صف يديد لطلابك.',
  },
  'school.classes.create_modal.submit': { en: 'Create Class', ar: 'سوِّ الصف' },
  'school.classes.edit_modal.title': { en: 'Edit Class', ar: 'عدّل الصف' },
  'school.classes.edit_modal.body': {
    en: 'Update the details for this class.',
    ar: 'حدّث تفاصيل الصف.',
  },
  'school.classes.edit_modal.submit': { en: 'Save Changes', ar: 'احفظ التعديلات' },
  'school.classes.delete_modal.title': { en: 'Delete Class', ar: 'احذف الصف' },
  'school.classes.delete_modal.body_prefix': {
    en: 'Are you sure you want to delete',
    ar: 'متأكد إنك تبي تحذف',
  },
  'school.classes.delete_modal.body_suffix': {
    en: '? This action cannot be undone and will remove all associated student enrollments.',
    ar: '؟ ما يمكن ترجع الإجراء وراح تنحذف كل تسجيلات الطلاب.',
  },
  'school.classes.delete_modal.deleting': { en: 'Deleting...', ar: 'يحذف…' },
  'school.classes.delete_modal.submit': { en: 'Delete Class', ar: 'احذف الصف' },
  'school.classes.form.name_label': { en: 'Class Name', ar: 'اسم الصف' },
  'school.classes.form.name_placeholder': {
    en: 'e.g. Year 10 English - Set 1',
    ar: 'مثلًا: صف ١٠ إنجليزي - المجموعة ١',
  },
  'school.classes.form.year_label': { en: 'Year Group', ar: 'الصف الدراسي' },
  'school.classes.form.year_placeholder': { en: 'Select year group', ar: 'اختر الصف الدراسي' },
  'school.classes.form.board_label': { en: 'Exam Board', ar: 'هيئة الامتحان' },
  'school.classes.form.board_placeholder': { en: 'Select exam board', ar: 'اختر هيئة الامتحان' },
  'school.classes.form.teacher_label': { en: 'Assign Teacher', ar: 'عيّن معلم' },
  'school.classes.form.teacher_placeholder': {
    en: 'Select teacher (optional)',
    ar: 'اختر المعلم (اختياري)',
  },
  'school.classes.form.teacher_loading': { en: 'Loading teachers...', ar: 'يحمّل المعلمين…' },
  'school.classes.form.year_academic_label': { en: 'Academic Year', ar: 'السنة الدراسية' },
  'school.classes.form.year_academic_placeholder': {
    en: 'Select academic year',
    ar: 'اختر السنة الدراسية',
  },
  'school.classes.form.admin_suffix': { en: '(Admin)', ar: '(إدارة)' },
  'school.classes.form.saving': { en: 'Saving...', ar: 'يحفظ…' },
  'school.classes.filter.year': { en: 'Year Group', ar: 'الصف الدراسي' },
  'school.classes.filter.all_years': { en: 'All Year Groups', ar: 'كل الصفوف الدراسية' },
  'school.classes.filter.board': { en: 'Exam Board', ar: 'هيئة الامتحان' },
  'school.classes.filter.all_boards': { en: 'All Boards', ar: 'كل الهيئات' },
  'school.classes.filter.clear': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'school.classes.card.students_label': { en: 'students', ar: 'طالب' },
  'school.classes.card.avg_score': { en: 'Avg Score', ar: 'معدّل العلامات' },
  'school.classes.card.view': { en: 'View', ar: 'افتح' },
  'school.classes.card.edit_title': { en: 'Edit class', ar: 'عدّل الصف' },
  'school.classes.card.delete_title': { en: 'Delete class', ar: 'احذف الصف' },
  'school.classes.card.last_active.none': { en: 'No activity yet', ar: 'ما في نشاط بعد' },
  'school.classes.card.last_active.today': { en: 'Active today', ar: 'نشط اليوم' },
  'school.classes.card.last_active.yesterday': { en: 'Active yesterday', ar: 'نشط أمس' },
  'school.classes.card.last_active.days_prefix': { en: 'Active', ar: 'نشط من' },
  'school.classes.card.last_active.days_suffix': { en: 'days ago', ar: 'يوم' },
  'school.classes.card.last_active.weeks_suffix': { en: 'weeks ago', ar: 'أسابيع' },
  'school.classes.card.last_active.months_suffix': { en: 'months ago', ar: 'شهر' },
  'school.classes.error.title': {
    en: 'Could not load classes. Please try again.',
    ar: 'ما قدرنا نحمّل الصفوف. حاول مرة ثانية.',
  },
  'school.classes.error.retry': { en: 'Try again', ar: 'حاول مرة ثانية' },
  'school.classes.empty.title': { en: 'No classes created yet', ar: 'ما في صفوف معمولة بعد' },
  'school.classes.empty.body': {
    en: 'Create your first class to get started.',
    ar: 'سوِّ أول صف عشان تبدي.',
  },
  'school.classes.empty.cta': { en: 'Create Your First Class', ar: 'سوِّ أول صف' },
  'school.classes.no_filter_results': {
    en: 'No classes match your filters.',
    ar: 'ما في صفوف يطابقون الفلاتر.',
  },
  'school.classes.action.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.classes.detail.back': { en: 'Classes', ar: 'الصفوف' },
  'school.classes.detail.students_suffix': { en: 'students', ar: 'طالب' },
  'school.classes.detail.assign_work': { en: 'Assign Work', ar: 'كلّف بشغل' },
  'school.classes.detail.set_homework': { en: 'Set Homework', ar: 'عطِ واجب بيت' },
  'school.classes.detail.create_assignment': { en: 'Create Assignment', ar: 'سوِّ واجب' },
  'school.classes.detail.coming_soon_homework': {
    en: 'Set Homework — coming soon!',
    ar: 'عطِ واجب بيت — يي قريب!',
  },
  'school.classes.detail.coming_soon_assignment': {
    en: 'Create Assignment — coming soon!',
    ar: 'سوِّ واجب — يي قريب!',
  },
  'school.classes.detail.tab.students': { en: 'Students', ar: 'الطلاب' },
  'school.classes.detail.tab.analytics': { en: 'Analytics', ar: 'التحليلات' },
  'school.classes.detail.search_placeholder': { en: 'Search students...', ar: 'دوّر على طالب…' },
  'school.classes.detail.add_students': { en: 'Add Students', ar: 'ضيف طلاب' },
  'school.classes.detail.export_csv': { en: 'Export CSV', ar: 'صدّر CSV' },
  'school.classes.detail.col.name': { en: 'Name', ar: 'الاسم' },
  'school.classes.detail.col.email': { en: 'Email', ar: 'الإيميل' },
  'school.classes.detail.col.year': { en: 'Year', ar: 'الصف' },
  'school.classes.detail.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'school.classes.detail.col.progress': { en: 'Progress', ar: 'التقدّم' },
  'school.classes.detail.col.done': { en: 'Done', ar: 'مكتمل' },
  'school.classes.detail.unknown': { en: 'Unknown', ar: 'مجهول' },
  'school.classes.detail.remove': { en: 'Remove', ar: 'احذف' },
  'school.classes.detail.remove_title': { en: 'Remove from class', ar: 'احذف من الصف' },
  'school.classes.detail.modules_suffix': { en: 'modules', ar: 'وحدة' },
  'school.classes.detail.no_in_class': {
    en: 'No students in this class yet',
    ar: 'ما في طلاب بالصف بعد',
  },
  'school.classes.detail.no_search_match': {
    en: 'No students match your search',
    ar: 'ما في طلاب يطابقون البحث',
  },
  'school.classes.detail.relative.never': { en: 'Never active', ar: 'أبد ما اشتغل' },
  'school.classes.detail.relative.today': { en: 'Today', ar: 'اليوم' },
  'school.classes.detail.relative.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'school.classes.detail.relative.days_suffix': { en: 'days ago', ar: 'يوم' },
  'school.classes.detail.relative.weeks_suffix': { en: 'w ago', ar: 'أسبوع' },
  'school.classes.detail.relative.months_suffix': { en: 'mo ago', ar: 'شهر' },
  'school.classes.detail.toast.removed': {
    en: 'Student removed from class',
    ar: 'الطالب انحذف من الصف',
  },
  'school.classes.detail.toast.remove_failed': {
    en: 'Failed to remove student',
    ar: 'ما قدرنا نحذف الطالب',
  },
  'school.classes.detail.add_modal.title': { en: 'Add Students to Class', ar: 'ضيف طلاب للصف' },
  'school.classes.detail.add_modal.empty_search': {
    en: 'No students match your search',
    ar: 'ما في طلاب يطابقون البحث',
  },
  'school.classes.detail.add_modal.empty_all': {
    en: 'All school students are already in this class',
    ar: 'كل طلاب المدرسة موجودين بالصف.',
  },
  'school.classes.detail.add_modal.footer_select': {
    en: 'Select students to add',
    ar: 'حدّد الطلاب اللي تبي تضيفهم',
  },
  'school.classes.detail.add_modal.footer_selected': { en: 'selected', ar: 'محدّد' },
  'school.classes.detail.add_modal.add_selected': { en: 'Add Selected', ar: 'ضيف المحدّد' },
  'school.classes.detail.add_modal.search_placeholder': {
    en: 'Search by name or email...',
    ar: 'دوّر بالاسم أو الإيميل…',
  },
  'school.classes.detail.add_modal.toast_added_prefix': { en: 'Added', ar: 'انضافوا' },
  'school.classes.detail.add_modal.toast_added_singular': {
    en: 'student to class',
    ar: 'طالب للصف',
  },
  'school.classes.detail.add_modal.toast_added_plural': {
    en: 'students to class',
    ar: 'طلاب للصف',
  },
  'school.classes.detail.add_modal.toast_failed_suffix': {
    en: 'student(s) could not be added',
    ar: 'طالب ما قدرنا نضيفهم',
  },
  'school.classes.detail.analytics.avg_score_title': {
    en: 'Class Average Score',
    ar: 'معدّل علامات الصف',
  },
  'school.classes.detail.analytics.avg_score_sub_one': {
    en: 'student with quiz data',
    ar: 'طالب عنده بيانات اختبار',
  },
  'school.classes.detail.analytics.avg_score_sub_many': {
    en: 'students with quiz data',
    ar: 'طلاب عندهم بيانات اختبار',
  },
  'school.classes.detail.analytics.completion_title': {
    en: 'Assignment Completion',
    ar: 'إنجاز الواجبات',
  },
  'school.classes.detail.analytics.at_risk_title': { en: 'Students at Risk', ar: 'طلاب بخطر' },
  'school.classes.detail.analytics.at_risk_sub': {
    en: 'Below 40% or inactive 7+ days',
    ar: 'أقل من ٤٠٪ أو ما اشتغلوا ٧ أيام+',
  },
  'school.classes.detail.analytics.top_performers': { en: 'Top Performers', ar: 'الأفضل أداءً' },
  'school.classes.detail.analytics.no_quiz_data': {
    en: 'No quiz data yet',
    ar: 'ما في بيانات اختبار بعد',
  },
  'school.classes.detail.analytics.weekly_activity': {
    en: 'Weekly Activity (last 4 weeks)',
    ar: 'النشاط الأسبوعي (آخر ٤ أسابيع)',
  },
  'school.classes.detail.analytics.weekly_activity_sub': {
    en: 'Active students per week (based on last activity)',
    ar: 'الطلاب النشطين بالأسبوع (حسب آخر نشاط)',
  },
  'school.classes.detail.analytics.week.three_ago': { en: '3w ago', ar: 'قبل ٣ أسابيع' },
  'school.classes.detail.analytics.week.two_ago': { en: '2w ago', ar: 'قبل أسبوعين' },
  'school.classes.detail.analytics.week.last': { en: 'Last week', ar: 'الأسبوع اللي طاف' },
  'school.classes.detail.analytics.week.this': { en: 'This week', ar: 'هالأسبوع' },
  'school.classes.detail.analytics.attention': {
    en: 'Students Needing Attention',
    ar: 'طلاب يبون متابعة',
  },
  'school.classes.detail.analytics.last_active_prefix': { en: 'Last active:', ar: 'آخر نشاط:' },
  'school.classes.detail.analytics.badge.low_score': { en: 'Low score', ar: 'علامة واطية' },
  'school.classes.detail.analytics.badge.inactive': { en: 'Inactive', ar: 'غير نشط' },

  // ─── Flashcards / study tools ───────────────────────────────────
  'flash.mode.study': { en: 'Study', ar: 'ادرس' },
  'flash.mode.match': { en: 'Match', ar: 'طابق' },
  'flash.mode.test': { en: 'Test', ar: 'اختبار' },
  'match.complete_title': { en: 'Match Complete!', ar: 'خلّصت الطابقة!' },
  'match.time': { en: 'Time', ar: 'الوقت' },
  'match.matches': { en: 'Matches', ar: 'الإجابات الصحيحة' },
  'match.mistakes': { en: 'Mistakes', ar: 'الأخطاء' },
  'match.new_best': { en: 'New best time!', ar: 'رقم قياسي جديد!' },
  'match.best_time': { en: 'Best time', ar: 'أفضل وقت' },
  'match.play_again': { en: 'Play Again', ar: 'العب مرة ثانية' },
  'match.matched_label': { en: 'matched', ar: 'مطابقة' },
  'match.mistake_singular': { en: 'mistake', ar: 'غلطة' },
  'match.mistake_plural': { en: 'mistakes', ar: 'غلطات' },
  'match.round_label': { en: 'Round', ar: 'الجولة' },
  'match.of': { en: 'of', ar: 'من' },
  'match.terms': { en: 'Terms', ar: 'الكلمات' },
  'match.definitions': { en: 'Definitions', ar: 'المعاني' },
  'test.back_to_results': { en: 'Back to results', ar: 'رجوع للنتائج' },
  'test.mistake_label': { en: 'Mistake', ar: 'الغلطة' },
  'test.of': { en: 'of', ar: 'من' },
  'test.question_label': { en: 'Question', ar: 'السؤال' },
  'test.previous': { en: 'Previous', ar: 'السابق' },
  'test.next': { en: 'Next', ar: 'التالي' },
  'test.complete_title': { en: 'Test Complete!', ar: 'خلّصت الاختبار!' },
  'test.correct': { en: 'Correct', ar: 'صحيح' },
  'test.incorrect': { en: 'Incorrect', ar: 'غلط' },
  'test.percent_correct': { en: 'correct', ar: 'صحيح' },
  'test.review_mistakes': { en: 'Review Mistakes', ar: 'راجع الأغلاط' },
  'test.retake': { en: 'Retake Test', ar: 'أعد الاختبار' },
  'test.correct_so_far': { en: 'correct so far', ar: 'صحيحة لين الحين' },
  'test.what_is': { en: 'What is...', ar: 'شنو هو…' },
  'test.next_question': { en: 'Next Question', ar: 'السؤال التالي' },
  'test.view_results': { en: 'View Results', ar: 'شوف النتيجة' },
  'notes.title': { en: 'My Notes', ar: 'ملاحظاتي' },
  'notes.word_singular': { en: 'word', ar: 'كلمة' },
  'notes.word_plural': { en: 'words', ar: 'كلمة' },
  'notes.placeholder': { en: 'Type your notes here...', ar: 'اكتب ملاحظاتك هنا…' },
  'notes.saved_at': { en: 'Saved', ar: 'انحفظت' },
  'notes.copied': { en: 'Copied!', ar: 'تم النسخ!' },
  'notes.copy_to_clipboard': { en: 'Copy to clipboard', ar: 'انسخ للحافظة' },
  'notes.confirm_clear': { en: 'Confirm clear?', ar: 'أكد المسح؟' },
  'notes.clear': { en: 'Clear notes', ar: 'امسح الملاحظات' },
  'quotebank.title': { en: 'My Quote Bank', ar: 'بنك الاقتباسات مالي' },
  'quotebank.quote_singular': { en: 'quote', ar: 'اقتباس' },
  'quotebank.quote_plural': { en: 'quotes', ar: 'اقتباسات' },
  'quotebank.save_a_quote': { en: 'Save a quote', ar: 'احفظ اقتباس' },
  'quotebank.quote_placeholder': { en: 'Enter the quote...', ar: 'اكتب الاقتباس…' },
  'quotebank.annotation_placeholder': { en: 'Your annotation (optional)', ar: 'تعليقك (اختياري)' },
  'quotebank.save_quote': { en: 'Save quote', ar: 'احفظ الاقتباس' },
  'quotebank.confirm_delete': { en: 'Confirm delete?', ar: 'أكد الحذف؟' },
  'quotebank.empty_state': {
    en: 'No quotes saved yet. Use the button above to save quotes from this text.',
    ar: 'ما عندك اقتباسات محفوظة. استخدم الزر فوق عشان تحفظ اقتباسات من النص.',
  },
  'quotebank.export_all': { en: 'Export all quotes', ar: 'صدّر كل الاقتباسات' },
  'quotebank.export_heading': { en: 'Saved Quotes', ar: 'الاقتباسات المحفوظة' },
  'quotebank.export_note_label': { en: 'Note', ar: 'ملاحظة' },
  'quotebank.export_saved_label': { en: 'Saved', ar: 'انحفظت' },
  'reading_progress.title': { en: 'Reading Progress', ar: 'تقدّم القراءة' },
  'reading_progress.complete': { en: 'complete', ar: 'مكتمل' },
  'reading_progress.sections': { en: 'sections', ar: 'أقسام' },
  'reading_progress.left': { en: 'left', ar: 'باقي' },
  'reading_progress.of': { en: 'of', ar: 'من' },
  'reading_progress.remaining': { en: 'remaining', ar: 'باقي' },
  'reading_progress.less_than_a_min': { en: '< 1 min', ar: 'أقل من دقيقة' },
  'reading_progress.min_unit': { en: 'min', ar: 'د' },
  'reading_progress.hour_unit': { en: 'h', ar: 'س' },
  'reading_progress.minute_short': { en: 'm', ar: 'د' },
  'study_tools.eyebrow': { en: 'AI Study Tools', ar: 'أدوات دراسة بالذكاء الاصطناعي' },
  'study_tools.heading_prefix': { en: 'Study', ar: 'ادرس' },
  'study_tools.heading_suffix': { en: 'with AI', ar: 'بالذكاء الاصطناعي' },
  'study_tools.subheading': {
    en: 'Generate personalised revision materials, quizzes, and essay plans for this text.',
    ar: 'سوِّ مواد مراجعة واختبارات وخطط مقالات مخصصة لك على هذا النص.',
  },
  'study_tools.template_note': {
    en: 'All outputs use The English Hub Anthology template',
    ar: 'كل النتايج تستخدم قالب The English Hub Anthology',
  },
  'study_tools.all_tools': { en: 'All tools', ar: 'كل الأدوات' },
  'study_tools.revision_notes_label': {
    en: 'AI Revision Notes',
    ar: 'ملاحظات مراجعة بالذكاء الاصطناعي',
  },
  'study_tools.revision_notes_desc': {
    en: 'Generate personalised revision notes tailored to your grade and weak areas',
    ar: 'سوِّ ملاحظات مراجعة مخصصة لدرجتك والمواضيع اللي تحتاج فيها تحسين',
  },
  'study_tools.practice_quiz_label': { en: 'Practice Quiz', ar: 'اختبار تدريب' },
  'study_tools.practice_quiz_desc': {
    en: 'Build a timed quiz on this text with instant marking and feedback',
    ar: 'سوِّ اختبار بوقت محدد على هذا النص مع تصحيح وملاحظات فورية',
  },
  'study_tools.essay_planner_label': { en: 'Essay Planner', ar: 'مخطط المقال' },
  'study_tools.essay_planner_desc': {
    en: 'Get a structured essay plan with thesis, paragraphs, and embedded quotes',
    ar: 'خذ خطة مقال منظَّمة بأطروحة وفقرات واقتباسات مدمجة',
  },
  'study_tools.quote_bank_label': { en: 'Quote Bank', ar: 'بنك الاقتباسات' },
  'study_tools.quote_bank_desc': {
    en: 'Curated key quotes with analysis, context, and exam technique tips',
    ar: 'اقتباسات منتقاة مع تحليل وسياق ونصايح لأسلوب الامتحان',
  },
  'study_tools.banner_prefix': { en: 'Revise', ar: 'راجع' },
  'study_tools.banner_suffix': { en: 'with AI', ar: 'بالذكاء الاصطناعي' },
  'study_tools.banner_blurb': {
    en: 'Revision notes, quizzes, essay plans — personalised to your grade',
    ar: 'ملاحظات مراجعة واختبارات وخطط مقالات — مخصصة لدرجتك',
  },
  'study_tools.generate_notes': { en: 'Generate Notes', ar: 'سوِّ الملاحظات' },
  'text_hub.who_says': { en: 'Who says', ar: 'مين قال' },
  'text_hub.quick_quote_quiz': { en: 'Quick Quote Quiz', ar: 'اختبار اقتباسات سريع' },
  'text_hub.quiz_meta': {
    en: '5 questions · Who said it? · 2 minutes',
    ar: '٥ أسئلة · مين قالها؟ · دقيقتين',
  },
  'text_hub.perfect': { en: 'Perfect!', ar: 'ممتاز!' },
  'text_hub.good_work': { en: 'Good work!', ar: 'شغل زين!' },
  'text_hub.keep_practising': { en: 'Keep practising!', ar: 'كمّل التدريب!' },
  'text_hub.try_again': { en: 'Try again', ar: 'حاول مرة ثانية' },
  'text_hub.question_label': { en: 'Question', ar: 'السؤال' },
  'text_hub.of': { en: 'of', ar: 'من' },
  'text_hub.score': { en: 'Score', ar: 'النتيجة' },
  'text_hub.see_results': { en: 'See Results', ar: 'شوف النتيجة' },
  'text_hub.next_question': { en: 'Next Question', ar: 'السؤال التالي' },
  'text_hub.essay_practice': { en: 'Essay Practice', ar: 'تدريب على المقال' },
  'text_hub.new_question': { en: 'New question', ar: 'سؤال جديد' },
  'text_hub.write_and_mark': { en: 'Write & mark essay', ar: 'اكتب المقال وصحّحه' },
  'text_hub.flashcard_label': { en: 'Flashcard', ar: 'بطاقة' },
  'text_hub.next': { en: 'Next', ar: 'التالي' },
  'text_hub.click_see_quote': { en: 'Click to see quote', ar: 'دوس عشان تشوف الاقتباس' },
  'text_hub.click_reveal_analysis': {
    en: 'Click to reveal analysis',
    ar: 'دوس عشان يورّيك التحليل',
  },
  'text_hub.study_heading_prefix': { en: 'Study', ar: 'ادرس' },
  'text_hub.study_subheading': {
    en: 'Everything you need in one place — read, revise, practise, and test yourself.',
    ar: 'كل اللي تحتاجه في مكان واحد — اقرا وراجع وتدرب واختبر نفسك.',
  },
  'text_hub.generate_personalised_notes': {
    en: 'Generate personalised notes',
    ar: 'سوِّ ملاحظات مخصصة',
  },
  'text_hub.ready_for_exam': { en: 'Ready for exam practice?', ar: 'جاهز للتدريب على الامتحان؟' },
  'text_hub.exam_blurb': {
    en: 'Write a timed essay and get instant AI feedback with AO breakdown',
    ar: 'اكتب مقال بوقت محدد وخذ ملاحظات فورية من الذكاء الاصطناعي مع تفصيل AO',
  },
  'text_hub.build_test': { en: 'Build a Test', ar: 'سوِّ اختبار' },
  'text_hub.write_mark_essay': { en: 'Write & Mark Essay', ar: 'اكتب المقال وصحّحه' },
  'poem_viewer.tab_context': { en: 'Context', ar: 'السياق' },
  'poem_viewer.tab_summary': { en: 'Summary', ar: 'الملخّص' },
  'poem_viewer.tab_form': { en: 'Form & Structure', ar: 'الشكل والبناء' },
  'poem_viewer.tab_quotes': { en: 'Key Quotes', ar: 'الاقتباسات الأساسية' },
  'poem_viewer.tab_language': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'poem_viewer.annotations': { en: 'Annotations', ar: 'التعليقات' },
  'poem_viewer.close_annotations': { en: 'Close annotations', ar: 'سكّر التعليقات' },
  'poem_viewer.by': { en: 'by', ar: 'لـ' },
  'poem_viewer.line': { en: 'Line', ar: 'سطر' },
  'poem_viewer.show': { en: 'show', ar: 'ورّي' },
  'poem_viewer.annotation_singular': { en: 'annotation', ar: 'تعليق' },
  'poem_viewer.annotation_plural': { en: 'annotations', ar: 'تعليقات' },
  'poem_viewer.note_singular': { en: 'note', ar: 'ملاحظة' },
  'poem_viewer.note_plural': { en: 'notes', ar: 'ملاحظات' },
  'text_viewer.overlay_context': { en: 'Context', ar: 'السياق' },
  'text_viewer.overlay_quotes': { en: 'Key Quotes', ar: 'الاقتباسات الأساسية' },
  'text_viewer.overlay_language': { en: 'Language', ar: 'اللغة' },
  'text_viewer.overlay_themes': { en: 'Themes', ar: 'الثيمات' },
  'text_viewer.overlay_characters': { en: 'Characters', ar: 'الشخصيات' },
  'text_viewer.mode_close': { en: 'Close Reading', ar: 'قراءة دقيقة' },
  'text_viewer.mode_close_desc': { en: 'All annotations visible', ar: 'كل التعليقات ظاهرة' },
  'text_viewer.mode_speed': { en: 'Speed Reading', ar: 'قراءة سريعة' },
  'text_viewer.mode_speed_desc': { en: 'Clean text only', ar: 'النص بس بدون أي شي' },
  'text_viewer.mode_analytical': { en: 'Analytical', ar: 'تحليلي' },
  'text_viewer.mode_analytical_desc': { en: 'Themes + quotes', ar: 'ثيمات واقتباسات' },
  'text_viewer.note_label': { en: 'note', ar: 'ملاحظة' },
  'text_viewer.section_nav_label': { en: 'Section navigation', ar: 'تنقل بين الأقسام' },
  'text_viewer.contents': { en: 'Contents', ar: 'المحتويات' },
  'text_viewer.select_section': { en: 'Select section', ar: 'اختر القسم' },
  'text_viewer.close_panel': { en: 'Close panel', ar: 'سكّر اللوحة' },
  'text_viewer.panel_characters': { en: 'Characters', ar: 'الشخصيات' },
  'text_viewer.panel_themes': { en: 'Themes', ar: 'الثيمات' },
  'text_viewer.panel_context': { en: 'Context', ar: 'السياق' },
  'text_viewer.key_quotes_label': { en: 'Key Quotes', ar: 'الاقتباسات الأساسية' },
  'text_viewer.evidence_label': { en: 'Evidence', ar: 'الأدلة' },
  'text_viewer.type_play': { en: 'play', ar: 'مسرحية' },
  'text_viewer.type_novel': { en: 'novel', ar: 'رواية' },
  'text_viewer.type_novella': { en: 'novella', ar: 'رواية قصيرة' },
  'text_viewer.scenes': { en: 'scenes', ar: 'مشاهد' },
  'text_viewer.chapters': { en: 'chapters', ar: 'فصول' },
  'text_viewer.words': { en: 'words', ar: 'كلمة' },
  'text_viewer.min_read': { en: 'min read', ar: 'د قراءة' },
  'text_viewer.end_of_play': { en: 'End of play', ar: 'نهاية المسرحية' },
  'text_viewer.end_of_text': { en: 'End of text', ar: 'نهاية النص' },
  'text_viewer.of': { en: 'of', ar: 'من' },
  'text_viewer.sections_completed': { en: 'sections completed', ar: 'قسم خلّصته' },
  'quiz.difficulty': { en: 'Difficulty', ar: 'الصعوبة' },
  'quiz.questions': { en: 'Questions', ar: 'الأسئلة' },
  'quiz.all_levels': { en: 'All levels', ar: 'كل المستويات' },
  'quiz.foundation': { en: 'Foundation (Grade 1-5)', ar: 'أساسي (درجة ١-٥)' },
  'quiz.higher': { en: 'Higher (Grade 5-7)', ar: 'متقدم (درجة ٥-٧)' },
  'quiz.grade_9': { en: 'Grade 9 stretch', ar: 'درجة ٩ تحدّي' },
  'quiz.questions_5': { en: '5 questions (quick)', ar: '٥ أسئلة (سريع)' },
  'quiz.questions_10': { en: '10 questions', ar: '١٠ أسئلة' },
  'quiz.questions_15': { en: '15 questions', ar: '١٥ سؤال' },
  'quiz.questions_20': { en: '20 questions (full test)', ar: '٢٠ سؤال (اختبار كامل)' },
  'quiz.available_at_level': {
    en: 'questions available at this level',
    ar: 'سؤال متوفر بهذا المستوى',
  },
  'quiz.start': { en: 'Start Quiz', ar: 'ابدأ الاختبار' },
  'quiz.working_at_grade': { en: 'Working at Grade', ar: 'مستواك درجة' },
  'quiz.excellent_understanding': { en: 'Excellent understanding!', ar: 'فهم ممتاز!' },
  'quiz.good_progress': {
    en: 'Good progress — review the topics below',
    ar: 'تقدّم زين — راجع المواضيع تحت',
  },
  'quiz.more_revision': {
    en: 'More revision needed — try the revision notes tab',
    ar: 'تحتاج مراجعة أكثر — جرّب تبويب ملاحظات المراجعة',
  },
  'quiz.topic_breakdown': { en: 'Topic Breakdown', ar: 'تفصيل المواضيع' },
  'quiz.take_another': { en: 'Take another quiz', ar: 'سوِّ اختبار ثاني' },
  'quiz.explanation': { en: 'Explanation', ar: 'الشرح' },
  'quiz.see_results': { en: 'See Results', ar: 'شوف النتيجة' },
  'quiz.next_question': { en: 'Next Question', ar: 'السؤال التالي' },
  'essay.exam_question': { en: 'Exam Question', ar: 'سؤال الامتحان' },
  'essay.get_different_question': { en: 'Get a different question', ar: 'خذ سؤال ثاني' },
  'essay.placeholder': {
    en: 'Write your response to this question here...\n\nAim for at least 200 words. Embed quotations, analyse language (AO2), and link to context (AO3).',
    ar: 'اكتب إجابتك على هذا السؤال هنا…\n\nاستهدف ٢٠٠ كلمة على الأقل. ضمّن اقتباسات وحلّل اللغة (AO2) واربط بالسياق (AO3).',
  },
  'essay.words': { en: 'words', ar: 'كلمة' },
  'essay.min_50_hint': { en: '(min 50 to submit)', ar: '(الحد الأدنى ٥٠ للتسليم)' },
  'essay.marking': { en: 'Marking...', ar: 'يصحّح…' },
  'essay.get_feedback': { en: 'Get Feedback', ar: 'خذ الملاحظات' },
  'essay.ai_feedback': { en: 'AI Feedback', ar: 'ملاحظات الذكاء الاصطناعي' },
  'essay.try_again': { en: 'Try again', ar: 'حاول مرة ثانية' },
  'study_progress.no_attempts': { en: 'No quiz attempts yet', ar: 'ما سوّيت أي اختبار بعد' },
  'study_progress.take_quiz_hint': {
    en: 'Take a quiz to start tracking your understanding',
    ar: 'سوِّ اختبار عشان نتابع فهمك',
  },
  'study_progress.quizzes_taken': { en: 'Quizzes taken', ar: 'اختبارات سويتها' },
  'study_progress.overall_score': { en: 'Overall score', ar: 'النتيجة الإجمالية' },
  'study_progress.best_score': { en: 'Best score', ar: 'أفضل نتيجة' },
  'study_progress.topic_mastery': { en: 'Topic Mastery', ar: 'إتقان المواضيع' },
  'study_progress.focus_areas': { en: 'Focus areas', ar: 'مناطق تحتاج تركيز' },
  'study_progress.keep_practising': {
    en: 'Keep practising all topics',
    ar: 'كمّل التدريب على كل المواضيع',
  },
  'study_engine.tab_quiz': { en: 'Quiz', ar: 'اختبار' },
  'study_engine.tab_revise': { en: 'Revise', ar: 'راجع' },
  'study_engine.tab_essay': { en: 'Essay', ar: 'مقال' },
  'study_engine.tab_progress': { en: 'Progress', ar: 'التقدّم' },
  'study_engine.heading': { en: 'Self-Study', ar: 'دراسة ذاتية' },

  // ─── Demo + error + 404 + about + contact + accessibility ────────
  'demo.banner.message': {
    en: 'You are viewing an interactive demo with sample data.',
    ar: 'تشوف الحين ديمو تفاعلي ببيانات تجريبية.',
  },
  'demo.banner.cta_book_call': { en: 'Book a Call', ar: 'احجز مكالمة' },
  'demo.banner.dismiss_aria': { en: 'Dismiss demo banner', ar: 'سكّر إشعار الديمو' },
  'demo.hero.no_signup': { en: 'No signup required', ar: 'ما يحتاج تسجيل' },
  'demo.hero.title_prefix': { en: 'Try The English Hub', ar: 'جرّب The English Hub' },
  'demo.hero.title_emphasis': { en: 'Free Interactive Demo', ar: 'ديمو تفاعلي ببلاش' },
  'demo.hero.sub': {
    en: 'Explore the full platform with sample data. No signup, no email required. Click any demo to start.',
    ar: 'شوف المنصة كاملة ببيانات تجريبية. بدون تسجيل ولا إيميل. اضغط أي ديمو وابدأ.',
  },
  'demo.tile.school.title': { en: 'School Admin Portal', ar: 'بوابة إدارة المدرسة' },
  'demo.tile.school.desc': {
    en: 'See how school leaders track 342 students, 18 teachers, and 24 classes. Drill down to any student.',
    ar: 'شوف كيف قادة المدرسة يتابعون ٣٤٢ طالب و١٨ معلم و٢٤ فصل. ادخل على أي طالب.',
  },
  'demo.tile.school.feat.dept_analytics': { en: 'Department Analytics', ar: 'تحليلات القسم' },
  'demo.tile.school.feat.drilldown': { en: 'Student Drill-down', ar: 'دخول على بيانات الطالب' },
  'demo.tile.school.feat.reports': { en: 'Progress Reports', ar: 'تقارير التقدم' },
  'demo.tile.school.feat.bulk': { en: 'Bulk User Management', ar: 'إدارة المستخدمين بالجملة' },
  'demo.tile.school.cta': { en: 'Launch School Demo', ar: 'افتح ديمو المدرسة' },
  'demo.tile.teacher.title': { en: 'Teacher Dashboard', ar: 'لوحة المعلم' },
  'demo.tile.teacher.desc': {
    en: 'See your class dashboard, build lessons, mark essays, and track student progress.',
    ar: 'شوف لوحة الفصل، سوِّ دروس، صحّح المقالات، وتابع تقدّم الطلاب.',
  },
  'demo.tile.teacher.feat.lesson_builder': { en: 'Lesson Builder', ar: 'باني الدروس' },
  'demo.tile.teacher.feat.ai_marking': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
  },
  'demo.tile.teacher.feat.class_analytics': { en: 'Class Analytics', ar: 'تحليلات الفصل' },
  'demo.tile.teacher.feat.progress': { en: 'Student Progress', ar: 'تقدّم الطالب' },
  'demo.tile.teacher.cta': { en: 'Launch Teacher Demo', ar: 'افتح ديمو المعلم' },
  'demo.tile.student.title': { en: 'Student Experience', ar: 'تجربة الطالب' },
  'demo.tile.student.desc': {
    en: 'Practice mock exams, use flashcards, track your progress, and get AI feedback.',
    ar: 'درّب على الامتحانات التجريبية، استخدم البطاقات التعليمية، تابع تقدّمك، وخذ ملاحظات بالذكاء الاصطناعي.',
  },
  'demo.tile.student.feat.mocks': { en: 'Mock Exams', ar: 'امتحانات تجريبية' },
  'demo.tile.student.feat.flashcards': { en: 'Flashcards', ar: 'بطاقات تعليمية' },
  'demo.tile.student.feat.ai_feedback': { en: 'AI Feedback', ar: 'ملاحظات بالذكاء الاصطناعي' },
  'demo.tile.student.feat.progress': { en: 'Progress Tracking', ar: 'تتبّع التقدّم' },
  'demo.tile.student.cta': { en: 'Launch Student Demo', ar: 'افتح ديمو الطالب' },
  'demo.free_resources.eyebrow': { en: 'Free Resources', ar: 'موارد ببلاش' },
  'demo.free_resources.title': {
    en: 'Free teaching materials pack for An Inspector Calls',
    ar: 'باكدج موارد تدريس ببلاش لرواية An Inspector Calls',
  },
  'demo.free_resources.desc': {
    en: 'Lesson plans, worksheets, and revision guides — ready to download.',
    ar: 'خطط دروس، أوراق عمل، وأدلة مراجعة — جاهزة للتحميل.',
  },
  'demo.free_resources.cta': { en: 'Download Free Pack', ar: 'حمّل الباكدج ببلاش' },
  'demo.bottom.title': { en: 'Ready to get started?', ar: 'جاهز تبدأ؟' },
  'demo.bottom.sub': {
    en: 'Choose the plan that fits your needs. Schools get full access with the FOUNDER plan — completely free.',
    ar: 'اختر الخطة اللي تناسبك. المدارس تحصل وصول كامل بخطة FOUNDER — ببلاش وايد.',
  },
  'demo.bottom.cta_school': { en: 'Register School', ar: 'سجّل المدرسة' },
  'demo.bottom.school_badge': { en: 'FREE WITH FOUNDER', ar: 'ببلاش مع FOUNDER' },
  'demo.bottom.cta_teacher': { en: 'Teacher Free Trial', ar: 'تجربة المعلم ببلاش' },
  'demo.bottom.cta_student': { en: 'Student Free Trial', ar: 'تجربة الطالب ببلاش' },
  'not_found.eyebrow': { en: '404 — page not found', ar: '٤٠٤ — الصفحة ما لقيناها' },
  'not_found.title': { en: 'Page not found', ar: 'شكلك ضعت' },
  'not_found.intro': {
    en: "That URL doesn't exist on The English Hub. Try one of the popular pages below, or get in touch and we'll point you in the right direction.",
    ar: 'هذا الرابط ما موجود في The English Hub. جرّب وحدة من الصفحات الشائعة تحت، أو تواصل معانا وإحنا ندلّك.',
  },
  'not_found.popular_heading': { en: 'Popular pages', ar: 'صفحات شائعة' },
  'not_found.visit_page': { en: 'Visit page', ar: 'روح للصفحة' },
  'not_found.need_help.lead': { en: 'Need help?', ar: 'تحتاج مساعدة؟' },
  'not_found.need_help.link': { en: 'Get in touch', ar: 'تواصل معانا' },
  'not_found.need_help.tail': {
    en: "and we'll point you in the right direction.",
    ar: 'وإحنا ندلّك.',
  },
  'not_found.tile.home.title': { en: 'Home', ar: 'الرئيسية' },
  'not_found.tile.home.desc': {
    en: 'Pick your exam board and start revising.',
    ar: 'اختر بورد الامتحان وابدأ المراجعة.',
  },
  'not_found.tile.pricing.title': { en: 'Pricing', ar: 'الأسعار' },
  'not_found.tile.pricing.desc': {
    en: 'Plans for students, parents, and schools.',
    ar: 'خطط للطلاب، أولياء الأمور، والمدارس.',
  },
  'not_found.tile.board.title': { en: 'Pick your exam board', ar: 'اختر بورد الامتحان' },
  'not_found.tile.board.desc': {
    en: 'Choose your level and specification.',
    ar: 'اختر مستواك والمنهج.',
  },
  'not_found.tile.hub.title': { en: 'Your study hub', ar: 'مركز الدراسة مالك' },
  'not_found.tile.hub.desc': {
    en: 'Set texts, mock papers, and progress.',
    ar: 'النصوص المقررة، أوراق تجريبية، والتقدم.',
  },
  'not_found.tile.resources.title': { en: 'Resources', ar: 'المصادر' },
  'not_found.tile.resources.desc': {
    en: 'Notes, model answers, and practice papers.',
    ar: 'ملاحظات، إجابات نموذجية، وأوراق تدريب.',
  },
  'not_found.tile.faqs.title': { en: 'FAQs', ar: 'الأسئلة الشائعة' },
  'not_found.tile.faqs.desc': {
    en: 'Answers to the questions students ask most.',
    ar: 'إجابات لأكثر الأسئلة اللي يسألها الطلاب.',
  },
  'error.title': { en: 'Something went wrong', ar: 'أوبس، صار في شي غلط' },
  'error.body': {
    en: 'We encountered an unexpected error. Please try again.',
    ar: 'صار في خطأ غير متوقّع. جرّب مرة ثانية لو سمحت.',
  },
  'error.global_body': {
    en: 'We encountered an unexpected error. Please try again or return to the homepage.',
    ar: 'صار في خطأ غير متوقّع. جرّب مرة ثانية أو روح للرئيسية.',
  },
  'error.try_again': { en: 'Try Again', ar: 'حاول مرة ثانية' },
  'error.go_home': { en: 'Go home', ar: 'روح للرئيسية' },
  'error.contact_support': { en: 'Contact Support', ar: 'كلّم الدعم' },

  // ─── error.<route>.* — per-route error boundaries ────────────────────
  // Section error boundaries (the ones that surface "Failed to load X"
  // with a Back-to-section link). Each route gets its own title + body
  // so the message matches the surface the user was on.
  'error.courses.title': { en: 'Failed to load courses', ar: 'ما قدرنا نحمّل الكورسات' },
  'error.courses.body': {
    en: 'We had trouble loading the course content. Please try again.',
    ar: 'صار في مشكلة وإحنا نحمّل محتوى الكورس. جرّب مرة ثانية.',
  },
  'error.courses.back': { en: 'Back to Courses', ar: 'رجوع للكورسات' },
  'error.dashboard.title': {
    en: 'Failed to load dashboard',
    ar: 'ما قدرنا نحمّل اللوحة',
  },
  'error.dashboard.body': {
    en: 'We had trouble loading your dashboard. Please try again.',
    ar: 'صار في مشكلة وإحنا نحمّل لوحتك. جرّب مرة ثانية.',
  },
  'error.dashboard.go_home': { en: 'Go Home', ar: 'روح للرئيسية' },
  'error.mock_exams.title': {
    en: 'Failed to load mock exams',
    ar: 'ما قدرنا نحمّل الامتحانات التجريبية',
  },
  'error.mock_exams.body': {
    en: 'We had trouble loading the exam content. Please try again.',
    ar: 'صار في مشكلة وإحنا نحمّل محتوى الامتحان. جرّب مرة ثانية.',
  },
  'error.mock_exams.back': {
    en: 'Back to Exams',
    ar: 'رجوع للامتحانات',
  },
  'error.school.title': { en: 'Failed to load school', ar: 'ما قدرنا نحمّل صفحة المدرسة' },
  'error.school.body': {
    en: 'We had trouble loading the school page. Please try again.',
    ar: 'صار في مشكلة وإحنا نحمّل صفحة المدرسة. جرّب مرة ثانية.',
  },
  'error.school.back': { en: 'Back to School', ar: 'رجوع للمدرسة' },

  // Generic per-route boundary — shared "Something went wrong / Try again
  // / Go home" template used across affiliate, assessment, board-select,
  // games, igcse, marking, parent, resources, revision, settings.
  'error.section.title': {
    en: 'Something went wrong',
    ar: 'أوبس، صار في شي غلط',
  },
  'error.section.body': {
    en: 'We hit an unexpected error loading this page. Try refreshing, or head back to the homepage.',
    ar: 'صار في خطأ غير متوقّع وإحنا نحمّل الصفحة. جرّب تعيد التحميل، أو رجوع للرئيسية.',
  },
  'error.section.try_again': { en: 'Try again', ar: 'حاول مرة ثانية' },
  'error.section.go_home': { en: 'Go home', ar: 'روح للرئيسية' },

  // ─── loading.<route>.* — fallback loading copy ───────────────────────
  // Only used by surfaces that show a literal "Loading…" string rather
  // than a skeleton (most loading.tsx files are skeleton-only and need
  // no translation).
  'loading.root.label': { en: 'Loading...', ar: 'لحظة…' },

  // ─── not_found.<route>.* — per-route 404s ────────────────────────────
  // Printable [slug] not-found
  'not_found.printable.title': {
    en: 'Printable not found',
    ar: 'ما لقينا المطبوعة',
  },
  'not_found.printable.body': {
    en: "The printable you are looking for is not available, or hasn't been published yet. Browse the full library to find another resource.",
    ar: 'المطبوعة اللي تدوّر عليها مو متوفّرة، أو لسا ما انعرضت. شوف المكتبة كاملة وتلقى مورد ثاني.',
  },
  'not_found.printable.back': { en: 'Back to printables', ar: 'رجوع للمطبوعات' },
  'not_found.printable.teaching': {
    en: 'Teaching resources',
    ar: 'مصادر التدريس',
  },

  // Lesson plan [slug] not-found
  'not_found.lesson_plan.eyebrow': {
    en: '404 — lesson plan not found',
    ar: '٤٠٤ — ما لقينا خطة الدرس',
  },
  'not_found.lesson_plan.title': {
    en: "We couldn't find that lesson plan",
    ar: 'ما لقينا خطة الدرس هذي',
  },
  'not_found.lesson_plan.body': {
    en: "The lesson plan you're looking for doesn't exist or may have moved. Browse the full library to find what you need.",
    ar: 'خطة الدرس اللي تدوّر عليها مو موجودة أو ممكن انتقلت. شوف المكتبة كاملة وتلقى اللي تحتاجه.',
  },
  'not_found.lesson_plan.where_next': { en: 'Where to next?', ar: 'وين تروح بعدها؟' },
  'not_found.lesson_plan.browse_all': {
    en: 'Browse all lesson plans',
    ar: 'شوف كل خطط الدروس',
  },
  'not_found.lesson_plan.teaching_hub': {
    en: 'Teaching resources hub',
    ar: 'مركز مصادر التدريس',
  },
  'not_found.lesson_plan.all_resources': { en: 'All resources', ar: 'كل المصادر' },
  'not_found.lesson_plan.back': {
    en: 'Back to lesson plans',
    ar: 'رجوع لخطط الدروس',
  },

  // Blog article [slug] not-found
  'not_found.blog.eyebrow': {
    en: '404 — article not found',
    ar: '٤٠٤ — ما لقينا المقال',
  },
  'not_found.blog.title': {
    en: "We couldn't find that article",
    ar: 'ما لقينا المقال هذا',
  },
  'not_found.blog.body': {
    en: "The article you're looking for doesn't exist or has been moved. Browse the blog index for the latest revision guides.",
    ar: 'المقال اللي تدوّر عليه مو موجود أو انتقل. شوف فهرس المدوّنة وتلقى آخر أدلّة المراجعة.',
  },
  'not_found.blog.back': { en: 'Back to the blog', ar: 'رجوع للمدوّنة' },
  'not_found.blog.browse_resources': {
    en: 'Browse the resources library',
    ar: 'شوف مكتبة المصادر',
  },

  'about.title': { en: 'About The English Hub', ar: 'عن The English Hub' },
  'about.mission.h2': { en: 'Our Mission', ar: 'مهمّتنا' },
  'about.mission.body': {
    en: 'The English Hub exists to make high-quality GCSE English education accessible to every student. We believe that no learner should be held back by a lack of resources, and that every student deserves structured, exam-focused content that helps them achieve their best possible grade. Our platform is built to close the attainment gap and give every student the tools they need to succeed.',
    ar: 'The English Hub موجود عشان نوصّل تعليم GCSE English بجودة عالية لكل طالب. إحنا نؤمن إنه ما طالب لازم ينقطع بسبب قلّة الموارد، وكل طالب يستاهل محتوى منظَّم وموجَّه للامتحان يساعده يحصّل أفضل درجة ممكنة. منصّتنا مبنية عشان نسكّر فجوة التحصيل ونعطي كل طالب الأدوات اللي يحتاجها عشان ينجح.',
  },
  'about.offer.h2': { en: 'What We Offer', ar: 'وش نقدّم' },
  'about.offer.body': {
    en: 'We provide 15+ structured courses covering KS3, GCSE, and IGCSE English Language and Literature. Our content is tailored to five major exam boards — AQA, Edexcel, OCR, WJEC Eduqas, and Cambridge IGCSE — so students always study material aligned to the exam board they are sitting. Each course is broken down into clear, manageable topics with lessons, practice activities, and revision resources designed to build confidence from the first lesson through to exam day.',
    ar: 'إحنا نقدّم أكثر من ١٥ كورس منظَّم تغطي KS3 وGCSE وIGCSE في English Language و Literature. محتوانا مفصَّل لخمس بوردات رئيسية — AQA, Edexcel, OCR, WJEC Eduqas, و Cambridge IGCSE — عشان الطالب يدرس مادة متطابقة دايماً مع البورد اللي بيمتحن فيه. كل كورس مقسَّم لمواضيع واضحة وسهلة، فيها دروس وأنشطة تدريب وموارد مراجعة تبني الثقة من أول درس لين يوم الامتحان.',
  },
  'about.approach.h2': { en: 'Our Approach', ar: 'منهجنا' },
  'about.approach.intro': {
    en: 'Every piece of content on The English Hub is built around four principles: exam board specificity, intelligent feedback, active learning, and comprehensive revision.',
    ar: 'كل محتوى في The English Hub مبني على أربع أساسيات: التخصيص حسب بورد الامتحان، ملاحظات ذكية، تعلّم نشط، ومراجعة شاملة.',
  },
  'about.approach.exam_board.name': {
    en: 'Exam board-specific content',
    ar: 'محتوى مخصَّص لكل بورد',
  },
  'about.approach.exam_board.desc': {
    en: 'lessons, mark schemes, and model answers mapped directly to AQA, Edexcel, OCR, WJEC Eduqas, and Cambridge IGCSE exam boards.',
    ar: 'دروس وأنظمة تصحيح وإجابات نموذجية متطابقة مباشرة مع بوردات AQA, Edexcel, OCR, WJEC Eduqas, و Cambridge IGCSE.',
  },
  'about.approach.ai.name': {
    en: 'AI-powered essay feedback',
    ar: 'ملاحظات على المقالات بالذكاء الاصطناعي',
  },
  'about.approach.ai.desc': {
    en: 'submit practice essays and receive detailed, criteria-referenced feedback in seconds, helping students understand how to improve before their real exam.',
    ar: 'سلّم مقالات تدريب وخذ ملاحظات مفصَّلة على معايير التصحيح في ثواني، تساعد الطالب يفهم كيف يتحسّن قبل الامتحان الحقيقي.',
  },
  'about.approach.mock.name': { en: 'Mock exam practice', ar: 'تدريب على الامتحانات التجريبية' },
  'about.approach.mock.desc': {
    en: 'timed, exam-style questions that mirror the format, wording, and mark allocation students will encounter on the day.',
    ar: 'أسئلة بتوقيت محدَّد وبأسلوب الامتحان نفسه، شكل وصياغة وتوزيع درجات مثل اللي بيشوفه الطالب يوم الامتحان.',
  },
  'about.approach.games.name': {
    en: 'Interactive games and revision tools',
    ar: 'ألعاب تفاعلية وأدوات مراجعة',
  },
  'about.approach.games.desc': {
    en: 'quizzes, key-term matching, and retrieval practice activities that make revision engaging and effective.',
    ar: 'اختبارات قصيرة، مطابقة المصطلحات، وأنشطة استرجاع تخلّي المراجعة ممتعة وفعّالة.',
  },
  'about.who.h2': { en: "Who It's For", ar: 'لمين' },
  'about.who.body': {
    en: 'The English Hub is designed for students aged 14 to 16 preparing for their English exams, but it supports the wider community around them too. Teachers use the platform to set homework, track progress, and supplement classroom teaching. Schools integrate our courses into their intervention and revision programmes. Parents gain visibility into what their child is studying and how they are progressing, giving them the confidence to support learning at home.',
    ar: 'The English Hub مصمَّم للطلاب من ١٤ إلى ١٦ سنة اللي يحضّرون لامتحانات English، بس يدعم كل المجتمع حولهم. المعلمين يستخدمون المنصة عشان يعطون واجبات، يتابعون التقدّم، ويكمّلون التدريس في الفصل. المدارس تدمج كورساتنا في برامج التدخّل والمراجعة. أولياء الأمور يشوفون وش يدرس طفلهم وكيف يتقدّم، عشان يكونون واثقين يدعمونه في البيت.',
  },
  'about.values.h2': { en: 'Our Values', ar: 'قيمنا' },
  'about.values.quality.name': { en: 'Quality content', ar: 'محتوى بجودة عالية' },
  'about.values.quality.desc': {
    en: 'every lesson is written and reviewed by experienced English educators to ensure accuracy and clarity.',
    ar: 'كل درس مكتوب ومراجَع من معلمين English ذوي خبرة عشان نضمن الدقّة والوضوح.',
  },
  'about.values.access.name': { en: 'Accessibility', ar: 'سهولة الوصول' },
  'about.values.access.desc': {
    en: 'we are committed to making our platform usable and affordable for all students, regardless of background.',
    ar: 'إحنا ملتزمين نخلّي المنصة سهلة وفي متناول كل طالب، مهما كانت خلفيته.',
  },
  'about.values.evidence.name': { en: 'Evidence-based learning', ar: 'تعلّم مبني على دليل' },
  'about.values.evidence.desc': {
    en: 'our tools are grounded in proven pedagogical strategies including retrieval practice, smart review, and formative feedback.',
    ar: 'أدواتنا مبنية على استراتيجيات تعليمية مثبتة مثل ممارسة الاسترجاع، المراجعة الذكية، والملاحظات التكوينية.',
  },
  'about.values.align.name': { en: 'Exam board alignment', ar: 'توافق مع بوردات الامتحان' },
  'about.values.align.desc': {
    en: 'students can trust that what they study on The English Hub maps directly to the exam they will sit.',
    ar: 'الطالب يثق إن اللي يدرسه على The English Hub متطابق مباشرة مع الامتحان اللي بيمتحنه.',
  },
  'about.glance.h2': { en: 'At a Glance', ar: 'نظرة سريعة' },
  'about.glance.courses_label': {
    en: 'Structured courses from KS3 to IGCSE',
    ar: 'كورسات منظَّمة من KS3 إلى IGCSE',
  },
  'about.glance.boards_label': { en: 'Exam boards supported', ar: 'بوردات امتحان مدعومة' },
  'about.glance.ai_label': { en: 'Essay feedback in seconds', ar: 'ملاحظات على المقال في ثواني' },
  'about.glance.mock_label': {
    en: 'Mock questions and timed practice',
    ar: 'أسئلة تجريبية وتدريب بوقت محدَّد',
  },
  'about.glance.ai_value': { en: 'AI-Powered', ar: 'بالذكاء الاصطناعي' },
  'about.glance.mock_value': { en: 'Exam-Style', ar: 'بأسلوب الامتحان' },
  'about.entity.h2': { en: 'Entity Details', ar: 'تفاصيل الجهة' },
  'about.entity.trading': {
    en: 'Upskill Energy Limited, trading as The English Hub',
    ar: 'Upskill Energy Limited، تتاجر باسم The English Hub',
  },
  'about.entity.company_no': {
    en: 'Company No. 16511479 (England & Wales)',
    ar: 'رقم الشركة 16511479 (England & Wales)',
  },
  'about.entity.ico': { en: 'ICO Registration: ZC016690', ar: 'تسجيل ICO: ZC016690' },
  'about.entity.office': {
    en: 'Registered office: available via Companies House (company no. 16511479)',
    ar: 'المكتب المسجَّل: متوفّر عبر Companies House (رقم الشركة 16511479)',
  },
  'about.compliance.h2': { en: 'Compliance', ar: 'الالتزام' },
  'about.compliance.dpia': {
    en: 'Data Protection Impact Assessment (PDF)',
    ar: 'تقييم أثر حماية البيانات (PDF)',
  },
  'about.compliance.safeguard': { en: 'Safeguarding Policy (PDF)', ar: 'سياسة الحماية (PDF)' },
  'about.compliance.vpat': {
    en: 'VPAT — Voluntary Product Accessibility Template (PDF)',
    ar: 'VPAT — نموذج إمكانية الوصول الطوعي للمنتج (PDF)',
  },
  'about.compliance.access_statement': {
    en: 'Accessibility Statement (WCAG 2.2 AA target)',
    ar: 'بيان إمكانية الوصول (هدف WCAG 2.2 AA)',
  },
  'about.compliance.cyber': {
    en: 'Cyber Essentials certificate (filing Q3 2026)',
    ar: 'شهادة Cyber Essentials (تقديم Q3 2026)',
  },
  'about.compliance.dpa': {
    en: 'Data Processing Agreement template (Word)',
    ar: 'قالب اتفاقية معالجة البيانات (Word)',
  },
  'about.compliance.coming_soon': { en: 'coming soon', ar: 'قريب' },
  'about.compliance.dpa_available': {
    en: 'available on request (legal@theenglishhub.app)',
    ar: 'متوفّر عند الطلب (legal@theenglishhub.app)',
  },
  'contact.title': { en: 'Contact Us', ar: 'تواصل معانا' },
  'contact.lead': {
    en: "Have a question, suggestion, or need help? We'd love to hear from you.",
    ar: 'عندك سؤال، اقتراح، أو تحتاج مساعدة؟ يسعدنا نسمع منك.',
  },
  'contact.email_us': { en: 'Email Us', ar: 'راسلنا إيميل' },
  'contact.response_time': { en: 'Response Time', ar: 'وقت الرد' },
  'contact.response_time_value': { en: 'Within 2 business days', ar: 'خلال يومين عمل' },
  'contact.quick_answers': { en: 'Quick Answers', ar: 'إجابات سريعة' },
  'contact.quick_answers_value': {
    en: 'Check our help resources or email us directly',
    ar: 'شوف موارد المساعدة أو راسلنا إيميل مباشرة',
  },
  'contact.sent_title': { en: 'Message Sent', ar: 'الرسالة وصلت' },
  'contact.sent_body': {
    en: "Thank you for reaching out. We'll respond within 2 business days.",
    ar: 'شكراً إنك تواصلت معانا. بنرد عليك خلال يومين عمل.',
  },
  'contact.field.name': { en: 'Name', ar: 'الاسم' },
  'contact.field.email': { en: 'Email', ar: 'الإيميل' },
  'contact.field.subject': { en: 'Subject', ar: 'الموضوع' },
  'contact.field.message': { en: 'Message', ar: 'الرسالة' },
  'contact.placeholder.name': { en: 'Your name', ar: 'اسمك' },
  'contact.placeholder.message': { en: 'How can we help?', ar: 'كيف نقدر نساعدك؟' },
  'contact.subject.placeholder': { en: 'Select a subject', ar: 'اختر موضوع' },
  'contact.subject.general': { en: 'General Enquiry', ar: 'استفسار عام' },
  'contact.subject.tech': { en: 'Technical Support', ar: 'دعم تقني' },
  'contact.subject.billing': { en: 'Billing', ar: 'الفواتير' },
  'contact.subject.school': { en: 'School/Institutional', ar: 'مدرسة / مؤسسة' },
  'contact.subject.partnership': { en: 'Partnership', ar: 'شراكة' },
  'contact.subject.feedback': { en: 'Feedback', ar: 'ملاحظات' },
  'contact.sending': { en: 'Sending...', ar: 'يرسل…' },
  'contact.send_message': { en: 'Send Message', ar: 'أرسل الرسالة' },
  'contact.toast.fill_fields': { en: 'Please fill in all fields.', ar: 'لو سمحت عبّي كل الخانات.' },
  'contact.toast.error_generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية لو سمحت.',
  },
  'contact.toast.sent': {
    en: "Message sent! We'll get back to you within 2 business days.",
    ar: 'الرسالة انرسلت! بنرد عليك خلال يومين عمل.',
  },
  'contact.toast.network': {
    en: 'Network error. Please check your connection and try again.',
    ar: 'خطأ في الشبكة. شيك على الاتصال وجرّب مرة ثانية.',
  },
  'accessibility.title': { en: 'Accessibility Statement', ar: 'بيان إمكانية الوصول' },
  'accessibility.operated_by': {
    en: 'Operated by Upskill Energy Limited, trading as The English Hub',
    ar: 'تشغّلها Upskill Energy Limited، تتاجر باسم The English Hub',
  },
  'accessibility.last_updated': { en: 'Last updated: March 2026', ar: 'آخر تحديث: مارس ٢٠٢٦' },
  'accessibility.commitment.h2': {
    en: 'Our Commitment to Accessibility',
    ar: 'التزامنا بإمكانية الوصول',
  },
  'accessibility.commitment.body1_lead': {
    en: 'The English Hub (theenglishhub.app) is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards. Our target conformance level is',
    ar: 'The English Hub (theenglishhub.app) ملتزم بضمان إمكانية الوصول الرقمي لذوي الإعاقة. إحنا نحسّن تجربة المستخدم للجميع بشكل مستمر ونطبّق معايير إمكانية الوصول المعنيّة. مستوى التطابق المستهدف عندنا هو',
  },
  'accessibility.commitment.target_level': { en: 'WCAG 2.2 Level AA', ar: 'WCAG 2.2 المستوى AA' },
  'accessibility.commitment.body2': {
    en: 'We believe that every learner, regardless of ability, should be able to access high-quality English language learning resources. This commitment extends across all areas of our platform, from course content and practice exercises to exam preparation tools and AI essay feedback.',
    ar: 'إحنا نؤمن إن كل متعلِّم، مهما كانت قدراته، لازم يقدر يوصل لموارد تعليم English بجودة عالية. هذا الالتزام يشمل كل أجزاء منصّتنا، من محتوى الكورسات وتمارين التدريب إلى أدوات تحضير الامتحان وملاحظات المقالات بالذكاء الاصطناعي.',
  },
  'accessibility.what.h2': { en: 'What We Do', ar: 'وش نسوّي' },
  'accessibility.what.lead': {
    en: 'We take the following measures to ensure accessibility on The English Hub:',
    ar: 'إحنا ناخذ الخطوات التالية عشان نضمن إمكانية الوصول في The English Hub:',
  },
  'accessibility.what.keyboard.name': { en: 'Keyboard navigation', ar: 'التنقّل بالكيبورد' },
  'accessibility.what.keyboard.desc': {
    en: 'All interactive elements can be reached and operated using a keyboard alone, with visible focus indicators throughout the interface.',
    ar: 'كل العناصر التفاعلية تقدر توصل لها وتشغّلها بالكيبورد بس، مع مؤشّرات تركيز واضحة في الواجهة كلها.',
  },
  'accessibility.feedback.h2': { en: 'Feedback and Contact', ar: 'الملاحظات والتواصل' },
  'accessibility.feedback.lead': {
    en: 'We welcome your feedback on the accessibility of The English Hub. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:',
    ar: 'إحنا نرحّب بملاحظاتك على إمكانية الوصول في The English Hub. إذا واجهت أي عائق وصول أو عندك اقتراح للتحسين، تواصل معانا لو سمحت:',
  },
  'accessibility.feedback.email_label': { en: 'Email:', ar: 'الإيميل:' },
  'accessibility.feedback.response_note': {
    en: 'We aim to respond to accessibility feedback within 5 working days and to resolve reported issues as quickly as practicable.',
    ar: 'هدفنا نرد على ملاحظات إمكانية الوصول خلال ٥ أيام عمل ونحل المشاكل المبلَّغ عنها بأسرع ما يمكن.',
  },
  'accessibility.date.h2': { en: 'Date of This Statement', ar: 'تاريخ هذا البيان' },
  'accessibility.date.body': {
    en: 'This accessibility statement was prepared on 22 March 2026. It will be reviewed and updated regularly as we continue to improve accessibility across The English Hub.',
    ar: 'هذا البيان حُضِّر بتاريخ ٢٢ مارس ٢٠٢٦. بيتم مراجعته وتحديثه بانتظام مع استمرارنا في تحسين إمكانية الوصول في كل The English Hub.',
  },

  // ─── Wave H additions: analysis / parent / teacher / demo_school / legal_banner ──
  'analysis.breadcrumb.home': { en: 'Home', ar: 'الرئيسية' },
  'analysis.breadcrumb.analysis': { en: 'Analysis', ar: 'التحليل' },
  'analysis.byline.markers': { en: 'Calibrated to GCSE markers', ar: 'معاير على معايير GCSE' },
  'analysis.byline.markers_short': { en: 'GCSE markers', ar: 'مصححي GCSE' },
  'analysis.byline.markers_updated': { en: 'Updated for 2026', ar: 'محدّث لـ ٢٠٢٦' },
  'analysis.byline.written_by': { en: 'Written by', ar: 'كتبه' },
  'analysis.byline.at_brand': { en: 'at The English Hub', ar: 'في The English Hub' },
  'analysis.eyebrow.lit': { en: 'GCSE English Literature', ar: 'GCSE English Literature' },
  'analysis.text.h1_suffix': { en: 'analysis & revision', ar: 'تحليل ومراجعة' },
  'analysis.text.h1_short': { en: 'analysis', ar: 'تحليل' },
  'analysis.how_to_use.h2': { en: 'How to use this guide', ar: 'شلون تستخدم الدليل' },
  'analysis.read_analysis': { en: 'Read analysis', ar: 'اقرا التحليل' },
  'analysis.cta.open_revision_hub': { en: 'Open Revision Hub', ar: 'افتح مركز المراجعة' },

  // ─── Analysis hub additions (wired by sub-pages) ─────────────────
  // Khaleeji: شنو / أبغى / الحين / وايد / دوّر / شوف / إحنا / ببلاش.
  // Exam codes (AQA, Edexcel, OCR, GCSE) and brand stay Latin.
  'analysis.hub.eyebrow': { en: 'Analysis library', ar: 'مكتبة التحليل' },
  'analysis.hub.h1': { en: 'GCSE English Analysis Hub', ar: 'مركز تحليل GCSE English' },
  'analysis.hub.for_board': { en: 'Filtered for', ar: 'مفلتر لـ' },
  'analysis.hub.intro': {
    en: 'In-depth analysis, themed essays and quote-by-quote breakdowns for every GCSE English Literature set text and the Language paper.',
    ar: 'تحليل عميق ومقالات حول الثيمات وتفكيك الاقتباسات وحدة وحدة لكل نص أدبي مقرر في GCSE English Literature وورقة Language.',
  },
  'analysis.hub.section.texts': { en: 'Texts', ar: 'النصوص' },
  'analysis.hub.section.poetry': { en: 'Poetry', ar: 'الشعر' },
  'analysis.hub.section.language': { en: 'Language Paper', ar: 'ورقة Language' },
  'analysis.hub.section.revision': {
    en: 'Revision and Grade Guides',
    ar: 'أدلة المراجعة والدرجات',
  },
  'analysis.hub.cta.open_analysis': { en: 'Open analysis', ar: 'افتح التحليل' },
  'analysis.hub.cross.h2': { en: 'Cross-text revision', ar: 'مراجعة شاملة بين النصوص' },
  'analysis.hub.cross.body': {
    en: 'Compare characters, themes and quotes across your set texts in one place.',
    ar: 'قارن الشخصيات والثيمات والاقتباسات بين النصوص المقررة عندك بمكان واحد.',
  },
  'analysis.hub.cross.cta': { en: 'Open Revision Hub', ar: 'افتح مركز المراجعة' },

  // ─── Macbeth analysis hub ─────────────────────────────────────────
  'analysis.macbeth.intro': {
    en: 'Grade-9 Macbeth analysis from GCSE markers — 15 famous quotations, every major theme and character, and a step-by-step Grade 9 essay guide.',
    ar: 'تحليل Macbeth بمستوى Grade 9 من مصححي GCSE — ١٥ اقتباس مشهور، كل ثيمة وشخصية رئيسية، ودليل خطوة بخطوة لمقال Grade 9.',
  },
  'analysis.macbeth.how_to_use_body': {
    en: "Start with a quote you'd like to analyse or jump straight to a theme. Each page works as a standalone revision card, and the whole set links back to the full Macbeth revision guide for context.",
    ar: 'ابدأ باقتباس تبغى تحلّله أو روح مباشرة لثيمة. كل صفحة تشتغل كبطاقة مراجعة مستقلة، وكل المجموعة ترجع لدليل مراجعة Macbeth الكامل عشان السياق.',
  },
  'analysis.macbeth.cta.notes': {
    en: 'Open full Macbeth revision notes',
    ar: 'افتح ملاحظات مراجعة Macbeth الكاملة',
  },
  'analysis.macbeth.quotes.h2': {
    en: 'Quote-by-quote analysis',
    ar: 'تحليل الاقتباسات وحدة وحدة',
  },
  'analysis.macbeth.quotes.body': {
    en: 'Fifteen of the most-quoted lines in Macbeth, each unpacked at Grade 9 with method, effect and context notes.',
    ar: 'خمسطعش من أكثر السطور اللي يتم اقتباسها في Macbeth، كل وحدة مفكَّكة بمستوى Grade 9 مع الأسلوب والأثر والسياق.',
  },
  'analysis.macbeth.themes.h2': { en: 'Themes & characters', ar: 'الثيمات والشخصيات' },
  'analysis.macbeth.themes.body': {
    en: "Every major theme in Macbeth — ambition, guilt, the supernatural, kingship and gender — plus character studies and Shakespeare's craft.",
    ar: 'كل ثيمة رئيسية في Macbeth — الطموح، الذنب، الخوارق، الملكية، والنوع — مع دراسات للشخصيات وأسلوب Shakespeare.',
  },
  'analysis.macbeth.foot.h2': { en: 'Revise Macbeth in full', ar: 'راجع Macbeth كامل' },
  'analysis.macbeth.foot.body': {
    en: 'Move from analysis to revision with the full Macbeth study guide — scene summaries, all key quotes and Grade 9 model answers for every board.',
    ar: 'انتقل من التحليل للمراجعة مع دليل دراسة Macbeth الكامل — ملخصات المشاهد، كل الاقتباسات المهمة، ونماذج إجابة Grade 9 لكل بورد.',
  },
  'analysis.macbeth.foot.cta': { en: 'Open Macbeth revision', ar: 'افتح مراجعة Macbeth' },

  // ─── Jekyll and Hyde analysis hub ─────────────────────────────────
  'analysis.jekyll.intro': {
    en: "Stevenson's Gothic novella unpacked — Victorian duality, atavism, repression and the Carew murder, with line-by-line quote analysis and four character studies.",
    ar: 'رواية Stevenson القوطية الصغيرة مفكَّكة — الازدواجية الفيكتورية، التراجع البدائي، الكبت، وجريمة Carew، مع تحليل سطر بسطر للاقتباسات وأربع دراسات للشخصيات.',
  },
  'analysis.jekyll.cta.full_revision': { en: 'Full revision guide', ar: 'دليل المراجعة الكامل' },
  'analysis.jekyll.cta.notes': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'analysis.jekyll.quote.h2': {
    en: 'Quote-by-quote analysis',
    ar: 'تحليل الاقتباسات وحدة وحدة',
  },
  'analysis.jekyll.quote.sub': {
    en: 'Line-by-line breakdowns of the most-cited passages, ranked by how markers reward them.',
    ar: 'تفكيك سطر بسطر لأكثر المقاطع استشهاداً، مرتّبة حسب كيف يكافئها المصححون.',
  },
  'analysis.jekyll.char.h2': {
    en: 'Characters, themes & context',
    ar: 'الشخصيات والثيمات والسياق',
  },
  'analysis.jekyll.char.sub': {
    en: 'Four character studies, four theme essays, Victorian context and a Grade 9 essay guide.',
    ar: 'أربع دراسات للشخصيات، أربع مقالات حول الثيمات، السياق الفيكتوري، ودليل مقال Grade 9.',
  },
  'analysis.jekyll.foot.h2': { en: 'Revise the whole novella', ar: 'راجع الرواية كاملة' },
  'analysis.jekyll.foot.body': {
    en: 'Pair this analysis with the full Jekyll and Hyde revision guide — chapter summaries, every key quote and exam-ready essay plans.',
    ar: 'اجمع هذا التحليل مع دليل مراجعة Jekyll and Hyde الكامل — ملخصات الفصول، كل الاقتباسات المهمة، وخطط مقال جاهزة للامتحان.',
  },
  'analysis.jekyll.foot.cta': {
    en: 'Open Jekyll and Hyde revision',
    ar: 'افتح مراجعة Jekyll and Hyde',
  },

  // ─── A Christmas Carol analysis hub ───────────────────────────────
  'analysis.carol.intro': {
    en: "Dickens's redemption story unpacked — Victorian poverty, Malthusian doctrine, allegorical ghosts, and the Cratchit family's moral weight.",
    ar: 'قصة الفداء عند Dickens مفكَّكة — الفقر الفيكتوري، نظرية Malthus، الأشباح الرمزية، والثقل الأخلاقي لعائلة Cratchit.',
  },
  'analysis.carol.quotes.h2': { en: 'Key quote analysis', ar: 'تحليل الاقتباسات المهمة' },
  'analysis.carol.char.h2': {
    en: 'Characters, themes & context',
    ar: 'الشخصيات والثيمات والسياق',
  },
  'analysis.carol.foot.h2': { en: 'Revise A Christmas Carol', ar: 'راجع A Christmas Carol' },
  'analysis.carol.foot.body': {
    en: 'Move from analysis to revision with the full A Christmas Carol revision hub — stave summaries, all key quotes and Grade 9 model answers.',
    ar: 'انتقل من التحليل للمراجعة مع مركز مراجعة A Christmas Carol الكامل — ملخصات المقاطع، كل الاقتباسات المهمة، ونماذج إجابة Grade 9.',
  },

  // ─── An Inspector Calls analysis hub ──────────────────────────────
  'analysis.inspector.h1': { en: 'analysis hub', ar: 'مركز التحليل' },
  'analysis.inspector.intro': {
    en: "Priestley's 1945 morality play unpacked for GCSE — collective responsibility, the Inspector's prophetic warning, class, gender and the Birling family's hypocrisy.",
    ar: 'مسرحية Priestley الأخلاقية مالت ١٩٤٥ مفكَّكة لـ GCSE — المسؤولية الجماعية، التحذير النبوي للمفتش، الطبقة، النوع، ونفاق عائلة Birling.',
  },
  'analysis.inspector.quote.h2': {
    en: 'Quote-by-quote analysis',
    ar: 'تحليل الاقتباسات وحدة وحدة',
  },
  'analysis.inspector.char.h2': {
    en: 'Characters, themes & context',
    ar: 'الشخصيات والثيمات والسياق',
  },
  'analysis.inspector.how.body': {
    en: "Each analysis is a standalone Grade 9 revision card. Aim to read three or four before your next mock — the Inspector's speeches reward density of analysis more than breadth of quotes.",
    ar: 'كل تحليل بطاقة مراجعة Grade 9 مستقلة. اقرا ثلاث أو أربع قبل الـ mock الجاي — خطابات المفتش تكافئ عمق التحليل أكثر من عدد الاقتباسات.',
  },
  'analysis.inspector.how.cta': { en: 'Open Grade 9 targets', ar: 'افتح أهداف Grade 9' },
  'analysis.inspector.rights_notice': {
    en: 'Quotations from An Inspector Calls © J. B. Priestley estate, used here for educational commentary under fair-dealing exceptions. No copyrighted past-paper content is reproduced.',
    ar: 'الاقتباسات من An Inspector Calls © تركة J. B. Priestley، مستخدمة هنا للشرح التعليمي تحت استثناءات الاستخدام العادل. ما يتم نسخ أي محتوى محمي من الأوراق السابقة.',
  },

  // ─── AQA Love and Relationships analysis hub ──────────────────────
  'analysis.love.intro': {
    en: 'Grade-9 AQA Love and Relationships analysis from GCSE markers — side-by-side poem comparisons, every major theme, and the unseen comparison technique decoded.',
    ar: 'تحليل AQA Love and Relationships بمستوى Grade 9 من مصححي GCSE — مقارنات بين القصائد جنباً إلى جنب، كل ثيمة رئيسية، وفكفكة لتقنية المقارنة على القصيدة المجهولة.',
  },
  'analysis.love.how.body': {
    en: 'Pick a comparison pairing to drill, then read the corresponding theme essay to widen your evidence. Each page links back to the full Love and Relationships revision guide.',
    ar: 'اختر مقارنة عشان تتمرّن عليها، وبعدين اقرا مقال الثيمة المرتبط فيها عشان توسّع الأدلة عندك. كل صفحة ترجع لدليل مراجعة Love and Relationships الكامل.',
  },
  'analysis.love.how.cta': {
    en: 'Open Love and Relationships revision',
    ar: 'افتح مراجعة Love and Relationships',
  },
  'analysis.love.compare.h2': { en: 'Poem comparison pairings', ar: 'مقارنات القصائد' },
  'analysis.love.compare.body': {
    en: 'Ten high-yield comparison pairings, ranked by how often the pairing earns Grade 9 in examiner reports.',
    ar: 'عشر مقارنات عالية المردود، مرتّبة حسب كم مرة المقارنة جابت Grade 9 في تقارير المصححين.',
  },
  'analysis.love.themes.h2': { en: 'Themes across the anthology', ar: 'الثيمات عبر الأنثولوجي' },
  'analysis.love.themes.body': {
    en: 'Eight cross-anthology theme essays — romantic love, family love, lost love, possessive love, memory, time, nature and distance.',
    ar: 'ثمانية مقالات ثيمات عبر الأنثولوجي — الحب الرومانسي، حب العائلة، الحب الضائع، الحب التملّكي، الذكرى، الوقت، الطبيعة، والمسافة.',
  },
  'analysis.love.technique.h2': { en: 'Exam technique', ar: 'تقنية الامتحان' },
  'analysis.love.technique.body': {
    en: 'How AQA examiners mark the comparison question, the poems worth memorising and the structural frames that hit Grade 9.',
    ar: 'كيف مصححي AQA يصححون سؤال المقارنة، القصائد اللي تستاهل الحفظ، وقوالب البناء اللي توصّل Grade 9.',
  },
  'analysis.love.foot.h2': { en: 'Revise the full anthology', ar: 'راجع الأنثولوجي الكامل' },
  'analysis.love.foot.body': {
    en: 'Move from analysis to revision with the full Love and Relationships revision hub — every poem, every key quote and Grade 9 model answers.',
    ar: 'انتقل من التحليل للمراجعة مع مركز مراجعة Love and Relationships الكامل — كل قصيدة، كل اقتباس مهم، ونماذج إجابة Grade 9.',
  },
  'analysis.love.foot.cta': {
    en: 'Open Love and Relationships revision',
    ar: 'افتح مراجعة Love and Relationships',
  },

  // ─── AQA Power and Conflict analysis hub ──────────────────────────
  'analysis.power.h1_suffix': { en: 'analysis & revision', ar: 'تحليل ومراجعة' },
  'analysis.power.intro': {
    en: 'Grade-9 AQA Power and Conflict analysis from GCSE markers — poem comparisons, every major theme, key quotes and the comparison technique that hits Level 6.',
    ar: 'تحليل AQA Power and Conflict بمستوى Grade 9 من مصححي GCSE — مقارنات بين القصائد، كل ثيمة رئيسية، الاقتباسات المهمة، وتقنية المقارنة اللي توصّل Level 6.',
  },
  'analysis.power.how.body': {
    en: 'Start with a comparison pairing, then back it up with a theme essay. Every page links to the full Power and Conflict revision guide.',
    ar: 'ابدأ بمقارنة، وبعدين اسندها بمقال ثيمة. كل صفحة ترجع لدليل مراجعة Power and Conflict الكامل.',
  },
  'analysis.power.how.cta': {
    en: 'Open Power and Conflict revision',
    ar: 'افتح مراجعة Power and Conflict',
  },
  'analysis.power.compare.h2': { en: 'Poem comparison pairings', ar: 'مقارنات القصائد' },
  'analysis.power.compare.body': {
    en: 'Ten high-yield Power and Conflict pairings, drawn from the most common AQA exam combinations.',
    ar: 'عشر مقارنات عالية المردود في Power and Conflict، مأخوذة من أكثر تركيبات امتحان AQA شيوعاً.',
  },
  'analysis.power.themes.h2': { en: 'Themes across the anthology', ar: 'الثيمات عبر الأنثولوجي' },
  'analysis.power.themes.body': {
    en: 'Eight cross-anthology theme essays — power of nature, power of humans, reality of conflict, memory, identity, loss, suffering and corruption.',
    ar: 'ثمانية مقالات ثيمات عبر الأنثولوجي — قوة الطبيعة، قوة البشر، حقيقة الصراع، الذكرى، الهوية، الفقد، المعاناة، والفساد.',
  },
  'analysis.power.technique.h2': { en: 'Exam technique', ar: 'تقنية الامتحان' },
  'analysis.power.technique.body': {
    en: 'How AQA examiners mark the comparison question, the poems worth memorising and the structural frames that hit Grade 9.',
    ar: 'كيف مصححي AQA يصححون سؤال المقارنة، القصائد اللي تستاهل الحفظ، وقوالب البناء اللي توصّل Grade 9.',
  },
  'analysis.power.foot.h2': { en: 'Revise the full anthology', ar: 'راجع الأنثولوجي الكامل' },
  'analysis.power.foot.body': {
    en: 'Move from analysis to revision with the full Power and Conflict revision hub — every poem, every key quote and Grade 9 model answers.',
    ar: 'انتقل من التحليل للمراجعة مع مركز مراجعة Power and Conflict الكامل — كل قصيدة، كل اقتباس مهم، ونماذج إجابة Grade 9.',
  },
  'analysis.power.foot.cta': {
    en: 'Open Power and Conflict revision',
    ar: 'افتح مراجعة Power and Conflict',
  },

  // ─── Language Paper analysis hub ──────────────────────────────────
  'analysis.lang.breadcrumb_current': { en: 'Language Paper', ar: 'ورقة Language' },
  'analysis.lang.h1': {
    en: 'AQA Language Paper 1 & 2 — question-by-question technique',
    ar: 'AQA Language Paper 1 و 2 — تقنية سؤال بسؤال',
  },
  'analysis.lang.intro': {
    en: 'Marker-written walkthroughs for every AQA English Language Paper 1 and Paper 2 question — Grade 9 model answers, timing strategy and the lexis examiners reward.',
    ar: 'شروحات من مصححين لكل سؤال في AQA English Language Paper 1 و Paper 2 — نماذج إجابة Grade 9، خطة الوقت، والمصطلحات اللي يكافئها المصححون.',
  },
  'analysis.lang.how.body': {
    en: 'Pick a question you struggle with, work through the walkthrough, then attempt the model answer cold. Aim for two questions per study session.',
    ar: 'اختر سؤال تعاني منه، اشتغل على الشرح، وبعدين جرّب نموذج الإجابة من راسك. هدفك سؤالين بكل جلسة دراسة.',
  },
  'analysis.lang.how.cta': { en: 'Open Language revision', ar: 'افتح مراجعة Language' },
  'analysis.lang.p1q.h2': { en: 'Paper 1 questions', ar: 'أسئلة Paper 1' },
  'analysis.lang.p1q.body': {
    en: 'Every Paper 1 question — list four things, language analysis, structure, evaluation and creative writing.',
    ar: 'كل سؤال في Paper 1 — عدّد أربع أشياء، تحليل اللغة، البناء، التقييم، والكتابة الإبداعية.',
  },
  'analysis.lang.p1t.h2': { en: 'Paper 1 writing technique', ar: 'تقنية الكتابة في Paper 1' },
  'analysis.lang.p1t.body': {
    en: 'Descriptive writing, narrative writing, timing strategy and the structural features that hit Grade 9 on Question 3.',
    ar: 'الكتابة الوصفية، الكتابة السردية، خطة الوقت، وعناصر البناء اللي توصّل Grade 9 في السؤال الثالث.',
  },
  'analysis.lang.p2q.h2': { en: 'Paper 2 questions', ar: 'أسئلة Paper 2' },
  'analysis.lang.p2q.body': {
    en: 'Every Paper 2 question — true/false, summary, language, comparison and transactional writing.',
    ar: 'كل سؤال في Paper 2 — صح/خطأ، التلخيص، اللغة، المقارنة، والكتابة المعاملاتية.',
  },
  'analysis.lang.p2t.h2': { en: 'Paper 2 writing technique', ar: 'تقنية الكتابة في Paper 2' },
  'analysis.lang.p2t.body': {
    en: 'Article writing, letter writing, speech writing, the summary question and the comparison sentence frames.',
    ar: 'كتابة المقال، كتابة الرسالة، كتابة الخطاب، سؤال التلخيص، وقوالب جمل المقارنة.',
  },
  'analysis.lang.gen.h2': { en: 'General technique', ar: 'تقنية عامة' },
  'analysis.lang.gen.body': {
    en: 'The 25 techniques every Language student must know, the AFOREST/DAFFOREST devices and a Grade 9 vocabulary bank.',
    ar: 'الخمسة وعشرين تقنية اللي لازم يعرفها كل طالب Language، أدوات AFOREST/DAFFOREST، وبنك مفردات Grade 9.',
  },
  'analysis.lang.foot.h2': { en: 'Revise the Language paper', ar: 'راجع ورقة Language' },
  'analysis.lang.foot.body': {
    en: 'Pair this technique work with the full Language revision hub — practice extracts, mark schemes and Grade 9 model answers.',
    ar: 'اجمع هذي التقنية مع مركز مراجعة Language الكامل — مقاطع للتدريب، schemes للتصحيح، ونماذج إجابة Grade 9.',
  },
  'analysis.lang.foot.cta': { en: 'Open Language revision', ar: 'افتح مراجعة Language' },

  // ─── Revision and grade guides hub (/analysis/revision) ──────────
  'analysis.revision.breadcrumb_current': {
    en: 'Revision and Grade Guides',
    ar: 'أدلة المراجعة والدرجات',
  },
  'analysis.revision.h1': {
    en: 'GCSE English Revision & Grade Guides',
    ar: 'أدلة مراجعة ودرجات GCSE English',
  },
  'analysis.revision.intro': {
    en: 'Twenty-five marker-written guides on hitting Grade 9, building a revision timetable, the night before the exam and how parents can help.',
    ar: 'خمسة وعشرين دليل من المصححين عن الوصول لـ Grade 9، بناء جدول مراجعة، الليلة اللي قبل الامتحان، وكيف الأهل يقدرون يساعدون.',
  },
  'analysis.revision.section.grade': { en: 'Grade targets', ar: 'أهداف الدرجات' },
  'analysis.revision.section.grade_body': {
    en: 'How to hit Grade 9, 7 and 5 — plus boundaries, resits and pass-rate statistics.',
    ar: 'كيف توصّل Grade 9 و 7 و 5 — مع الحدود، إعادة الامتحان، وإحصائيات النجاح.',
  },
  'analysis.revision.section.planning': { en: 'Revision planning', ar: 'تخطيط المراجعة' },
  'analysis.revision.section.planning_body': {
    en: 'Timetables, last-minute plans, spaced repetition, active recall and mind mapping.',
    ar: 'الجداول، خطط اللحظة الأخيرة، التكرار المتباعد، الاسترجاع النشط، ورسم الخرائط الذهنية.',
  },
  'analysis.revision.section.exam': { en: 'Exam day', ar: 'يوم الامتحان' },
  'analysis.revision.section.exam_body': {
    en: 'The night before, what to bring, dealing with anxiety and what happens if you fail.',
    ar: 'الليلة اللي قبل، شنو تجيب معاك، التعامل مع التوتر، وشنو يصير لو ما نجحت.',
  },
  'analysis.revision.section.parents': { en: 'For parents', ar: 'لأولياء الأمور' },
  'analysis.revision.section.parents_body': {
    en: 'GCSE English explained, how to help with revision and the difference between Language and Literature.',
    ar: 'GCSE English بشرح بسيط، كيف تساعد في المراجعة، والفرق بين Language و Literature.',
  },
  'analysis.revision.footer.h2': { en: 'Get personalised feedback', ar: 'احصل على ملاحظات شخصية' },
  'analysis.revision.footer.body': {
    en: 'Upload an essay and get marker-style feedback on your AOs in minutes — calibrated to your exam board.',
    ar: 'ارفع مقال واحصل على ملاحظات بأسلوب المصححين على الـ AOs خلال دقائق — معايرة على بورد امتحانك.',
  },
  'analysis.revision.footer.cta_primary': { en: 'Create a free account', ar: 'سوِّ حساب ببلاش' },
  'analysis.revision.footer.cta_secondary': {
    en: 'Open the Revision Hub',
    ar: 'افتح مركز المراجعة',
  },

  // ─── AI feedback head-to-head page ─────────────────────────────────
  'analysis.ai_feedback.breadcrumb_current': {
    en: 'AI Feedback: Head to Head',
    ar: 'ملاحظات الذكاء الاصطناعي: مقارنة مباشرة',
  },
  'analysis.ai_feedback.eyebrow': {
    en: 'Marker-built AI · Board-specific feedback',
    ar: 'ذكاء اصطناعي مبني للمصححين · ملاحظات خاصة بكل بورد',
  },
  'analysis.ai_feedback.cta.upload': { en: 'Upload an essay', ar: 'ارفع مقال' },
  'analysis.ai_feedback.cta.pricing': { en: 'See pricing', ar: 'شوف الأسعار' },
  'analysis.ai_feedback.cta.get_feedback': {
    en: 'Get marker feedback on your essay',
    ar: 'احصل على ملاحظات المصححين على مقالك',
  },
  'analysis.ai_feedback.cta.macbeth_revision': {
    en: 'Macbeth revision hub',
    ar: 'مركز مراجعة Macbeth',
  },
  'analysis.ai_feedback.foot.h2': { en: 'Get this on your essay', ar: 'احصل على هذا على مقالك' },
  'analysis.ai_feedback.foot.body': {
    en: "Upload your own essay and we'll mark it three ways — AQA, Edexcel and OCR — so you can see exactly what your board rewards.",
    ar: 'ارفع مقالك وإحنا بنصححه بثلاث طرق — AQA و Edexcel و OCR — عشان تشوف بالضبط شنو يكافئه بوردك.',
  },
  'analysis.ai_feedback.methodology': { en: 'Methodology', ar: 'المنهجية' },

  // ─── Catch-all sub-page (/analysis/[...slug]) chrome ──────────────
  'analysis.slug.byline_prefix': {
    en: 'Marker-written · GCSE English Literature',
    ar: 'مكتوب من المصححين · GCSE English Literature',
  },
  'analysis.slug.covers_all_boards': {
    en: 'Covers all major boards',
    ar: 'يغطي كل البوردات الرئيسية',
  },
  'analysis.slug.what_you_need': { en: 'What you need to know about', ar: 'شنو لازم تعرف عن' },
  'analysis.slug.about': { en: 'About', ar: 'عن' },
  'analysis.slug.how_assessed': { en: 'How this is assessed', ar: 'كيف يتم تقييم هذا' },
  'analysis.slug.marks_label': { en: 'marks', ar: 'درجة' },
  'analysis.slug.recommended_label': { en: 'recommended', ar: 'موصى به' },
  'analysis.slug.key_quotes_h2': { en: 'Key quotations', ar: 'الاقتباسات المهمة' },
  'analysis.slug.exam_tips_for': { en: 'Exam tips for', ar: 'نصائح الامتحان لـ' },
  'analysis.slug.grade9_h2': { en: 'What Grade 9 answers do', ar: 'شنو تسوي إجابات Grade 9' },
  'analysis.slug.applying_to': { en: 'Applying this to', ar: 'تطبيق هذا على' },
  'analysis.slug.applying_body': {
    en: 'Use the analysis above as a structural frame for your own response — pick two or three quotations, attach the methods analysis, and weave the assessment context into your conclusion.',
    ar: 'استخدم التحليل فوق كقالب بناء لإجابتك — اختر اقتباسين أو ثلاثة، الصق تحليل الأسلوب، وادمج سياق التقييم في خاتمتك.',
  },
  'analysis.slug.cta_block_prompt': {
    en: 'Ready to test it on your own writing? Upload an essay and get marker-style feedback in minutes.',
    ar: 'جاهز تجرّبه على كتابتك؟ ارفع مقال واحصل على ملاحظات بأسلوب المصححين خلال دقائق.',
  },
  'analysis.slug.cta_get_feedback': { en: 'Get marker feedback', ar: 'احصل على ملاحظات المصححين' },
  'analysis.slug.cta_see_pricing': { en: 'See pricing', ar: 'شوف الأسعار' },
  'analysis.slug.faqs_h2': { en: 'Frequently asked questions', ar: 'أسئلة شائعة' },
  'analysis.slug.related_prefix': { en: 'More from', ar: 'المزيد من' },
  'analysis.slug.back_to_all': { en: 'Back to all', ar: 'رجوع للكل' },

  // ─── Sub-page chrome (cleaner namespace for shared components) ─────
  // Used by the per-text _components helpers (jekyll-hyde/AnalysisPage,
  // inspector-calls/analysis-page) and any future analysis sub-page.
  'analysis.subpage.byline_team': {
    en: 'Written by GCSE markers · The English Hub editorial team',
    ar: 'كتبه مصححي GCSE · فريق تحرير The English Hub',
  },
  'analysis.subpage.related_h2': { en: 'Related analyses', ar: 'تحليلات ذات صلة' },
  'analysis.subpage.read_analysis': { en: 'Read analysis', ar: 'اقرا التحليل' },
  'analysis.subpage.revision_eyebrow': { en: 'Revision hub', ar: 'مركز المراجعة' },
  'analysis.subpage.revision_inspector_h3': {
    en: 'Revise An Inspector Calls for GCSE English Literature',
    ar: 'راجع An Inspector Calls لـ GCSE English Literature',
  },
  'analysis.subpage.revision_inspector_body': {
    en: 'Grade 5, 7 and 9 revision plans, model answers and exam technique from experienced GCSE markers.',
    ar: 'خطط مراجعة Grade 5 و 7 و 9، نماذج إجابات، وتقنية امتحان من مصححي GCSE ذوي خبرة.',
  },
  'analysis.subpage.revision_cta': { en: 'Go to revision', ar: 'روح للمراجعة' },
  'analysis.subpage.cat_chip_gcse': { en: 'GCSE Analysis', ar: 'تحليل GCSE' },
  'analysis.subpage.cta_full_revision': { en: 'Full revision guide', ar: 'دليل المراجعة الكامل' },
  'analysis.subpage.cta_revision_notes': { en: 'Revision notes', ar: 'ملاحظات المراجعة' },
  'analysis.subpage.ready_to_revise_h2': {
    en: 'Ready to revise the whole novella?',
    ar: 'جاهز تراجع الرواية كاملة؟',
  },
  'analysis.subpage.jekyll_blurb': {
    en: 'Get the complete Jekyll and Hyde study guide — chapter summaries, every key quotation, every theme, and exam-ready essay plans for AQA, Edexcel and OCR.',
    ar: 'احصل على دليل دراسة Jekyll and Hyde الكامل — ملخصات الفصول، كل اقتباس مهم، كل ثيمة، وخطط مقال جاهزة للامتحان لـ AQA و Edexcel و OCR.',
  },
  'analysis.subpage.jekyll_hub_link': { en: 'Jekyll & Hyde Analysis', ar: 'تحليل Jekyll & Hyde' },
  'analysis.subpage.jekyll_all_link': {
    en: 'All Jekyll & Hyde analyses',
    ar: 'كل تحليلات Jekyll & Hyde',
  },
  'analysis.subpage.jekyll_chip': { en: 'Jekyll & Hyde', ar: 'Jekyll & Hyde' },
  'analysis.subpage.home_breadcrumb': { en: 'Home', ar: 'الرئيسية' },
  'analysis.subpage.inspector_back_to_hub': {
    en: 'Back to Inspector Calls hub',
    ar: 'رجوع لمركز Inspector Calls',
  },
  'parent.your_child': { en: 'your child', ar: 'ابنك أو بنتك' },
  'parent.unlink': { en: 'Unlink', ar: 'فك الربط' },
  'parent.unlinking': { en: 'Unlinking…', ar: 'لحظة، يفك الربط…' },
  'parent.linked_badge': { en: 'Linked', ar: 'مربوط' },
  'parent.working_at_grade': { en: 'Working At Grade', ar: 'الدرجة الحالية' },
  'parent.predicted_grade': { en: 'Predicted Grade', ar: 'الدرجة المتوقعة' },
  'parent.page.title': { en: 'Parent Dashboard', ar: 'لوحة ولي الأمر' },
  'parent.page.subtitle': {
    en: "Track your child's learning progress",
    ar: 'تابع تقدّم ابنك أو بنتك في التعلّم',
  },
  'parent.no_linked.title': { en: 'No linked students yet', ar: 'ما عندك طلاب مربوطين بعد' },
  'parent.no_linked.body': {
    en: 'Ask your child to share their link code from their student dashboard.',
    ar: 'اطلب من ابنك أو بنتك يشاركك كود الربط من لوحة الطالب.',
  },
  'teacher.dash.nav.dashboard': { en: 'Dashboard', ar: 'اللوحة' },
  'teacher.dash.nav.students': { en: 'Students', ar: 'الطلاب' },
  'teacher.dash.nav.assignments': { en: 'Assignments', ar: 'الواجبات' },
  'teacher.dash.nav.analytics': { en: 'Analytics', ar: 'التحليلات' },
  'teacher.dash.nav.resources': { en: 'Resources', ar: 'الموارد' },
  'teacher.dash.layout.brand': { en: 'Teacher Hub', ar: 'Hub المعلم' },
  'teacher.dash.layout.loading': {
    en: 'Loading teacher dashboard...',
    ar: 'لحظة، لوحة المعلم تحمّل...',
  },
  'teacher.dash.layout.access_denied': { en: 'Access Denied', ar: 'ممنوع الدخول' },
  'teacher.dash.home.welcome_prefix': { en: 'Welcome back, ', ar: 'حيّاك، ' },
  'teacher.dash.home.welcome_suffix': { en: '!', ar: '!' },
  'teacher.dash.home.stat.total_students': { en: 'Total Students', ar: 'مجموع الطلاب' },
  'teacher.dash.home.stat.active_week': { en: 'Active This Week', ar: 'نشطون هذا الأسبوع' },
  'teacher.dash.home.stat.avg_grade': { en: 'Average Class Grade', ar: 'متوسّط درجة الفصل' },
  'teacher.dash.home.stat.submissions_week': {
    en: 'Submissions This Week',
    ar: 'التسليمات هذا الأسبوع',
  },
  'teacher.dash.home.recent_submissions': { en: 'Recent Submissions', ar: 'آخر التسليمات' },
  'teacher.dash.home.view_all': { en: 'View all', ar: 'شوف الكل' },
  'teacher.dash.home.status.graded': { en: 'Graded', ar: 'مصحّح' },
  'teacher.dash.home.status.pending': { en: 'Pending', ar: 'قيد الانتظار' },
  'demo_school.chrome.demo_mode': { en: 'Demo Mode', ar: 'وضع الديمو' },
  'demo_school.chrome.demo_short': { en: 'Demo', ar: 'ديمو' },
  'demo_school.chrome.school_name': { en: 'Riverside Academy', ar: 'أكاديمية ريفرسايد' },
  'demo_school.chrome.school_portal': { en: 'School Portal', ar: 'بوابة المدرسة' },
  'demo_school.chrome.register_school': { en: 'Register Your School', ar: 'سجّل مدرستك' },
  'demo_school.chrome.back_to_demos': { en: 'Back to Demos', ar: 'رجوع للديموهات' },
  'demo_school.chrome.contact_about_demo': {
    en: 'Contact us about the demo',
    ar: 'كلّمنا عن الديمو',
  },
  'legal_banner.ai_governance.title': {
    en: 'About this AI governance page',
    ar: 'عن صفحة حوكمة الذكاء الاصطناعي',
  },
  'legal_banner.ai_governance.body': {
    en: 'Long-form policy text is in formal Arabic. For questions, contact our DPO.',
    ar: 'نص السياسة المطوّل بالعربي الفصيح. لأي استفسار، كلّم مسؤول حماية البيانات.',
  },
  'legal_banner.ai_governance.cta': { en: 'Email DPO', ar: 'راسل DPO' },
  'legal_banner.ai_governance.cta_href': {
    en: 'mailto:privacy@theenglishhub.app',
    ar: 'mailto:privacy@theenglishhub.app',
  },
  'legal_banner.privacy_qatar_supp.title': {
    en: 'Qatar Privacy Supplement',
    ar: 'ملحق الخصوصية لقطر',
  },
  'legal_banner.privacy_qatar_supp.body': {
    en: 'PDPPL-specific rights for Qatar residents.',
    ar: 'حقوق PDPPL الخاصة بالمقيمين في قطر.',
  },
  'legal_banner.privacy_qatar_supp.cta': { en: 'Email DPO', ar: 'راسل DPO' },
  'legal_banner.privacy_qatar_supp.cta_href': {
    en: 'mailto:privacy@theenglishhub.app',
    ar: 'mailto:privacy@theenglishhub.app',
  },
  'legal_banner.safeguarding_legal.title': { en: 'Safeguarding policy', ar: 'سياسة حماية الأطفال' },
  'legal_banner.safeguarding_legal.body': {
    en: 'Full policy in formal Arabic. To report a concern about a child, use the safeguarding form.',
    ar: 'السياسة الكاملة بالعربي الفصيح. لتبليغ عن مخاوف على سلامة طفل، استخدم نموذج الحماية.',
  },
  'legal_banner.safeguarding_legal.cta': { en: 'Report a concern', ar: 'بلّغ عن مخاوف' },
  'legal_banner.safeguarding_legal.cta_href': {
    en: '/safeguarding/report',
    ar: '/safeguarding/report',
  },
  'legal_banner.safeguarding.title': {
    en: 'Safeguarding at The English Hub',
    ar: 'الحماية في The English Hub',
  },
  'legal_banner.safeguarding.body': {
    en: "If you're worried about a child, don't wait — report a concern now.",
    ar: 'إذا قلقان على سلامة طفل، لا تتأخر — بلّغ الحين.',
  },
  'legal_banner.safeguarding.cta': { en: 'Report a concern', ar: 'بلّغ عن مخاوف' },
  'legal_banner.safeguarding.cta_href': { en: '/safeguarding/report', ar: '/safeguarding/report' },
  'legal_banner.safeguarding_report.title': {
    en: 'Reporting a safeguarding concern',
    ar: 'تبليغ عن مخاوف على سلامة طفل',
  },
  'legal_banner.safeguarding_report.body': {
    en: 'Use this form to alert our safeguarding lead.',
    ar: 'استخدم هذا النموذج لتنبيه مسؤول الحماية مالنا.',
  },
  'legal_banner.safeguarding_report.cta': {
    en: 'Childline (UK): 0800 1111',
    ar: 'Childline (UK): 0800 1111',
  },
  'legal_banner.safeguarding_report.cta_href': { en: 'tel:08001111', ar: 'tel:08001111' },
  'safeguard.email_lead_cta': { en: 'Email Safeguarding Lead', ar: 'راسل مسؤول الحماية' },
  'safeguard.urgent_banner_title': {
    en: 'Need to report a concern right now?',
    ar: 'تبغى تبلّغ عن مخاوف الحين؟',
  },
  'safeguard.urgent_banner_body': {
    en: 'If you are worried about a child or young person, do not wait.',
    ar: 'إذا كنت قلقان على سلامة طفل أو شاب، لا تتأخر.',
  },
  'safeguard.send_report_cta': { en: 'Send Report', ar: 'أرسل البلاغ' },
  'safeguard.sending_report': { en: 'Sending your report...', ar: 'نرسل بلاغك… لحظة' },

  // ─── Settings page (top-level /settings) ─────────────────────────────
  // Gender policy: masculine-default Khaleeji addressing, consistent with
  // the rest of the dictionary. Required Khaleeji vocab applied:
  // الحين / دوّر / اختر / ابغى-style imperatives where natural; no Levantine.
  'settings.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'settings.title': { en: 'Settings', ar: 'الإعدادات' },
  'settings.board.heading': { en: 'Your exam board', ar: 'بورد الامتحان مالك' },
  'settings.board.currently_studying': {
    en: 'Currently studying',
    ar: 'تدرس الحين',
  },
  'settings.board.change_warning': {
    en: 'Changing your board will filter your content to the new board. Your progress is preserved.',
    ar: 'إذا غيّرت البورد، بنفلتر المحتوى للبورد الجديد. تقدمك يضل محفوظ.',
  },
  'settings.board.empty': {
    en: "You haven't picked an exam board yet. Choose one to personalise your revision content.",
    ar: 'لسا ما اخترت بورد امتحان. اختر واحد عشان نخصّص لك محتوى المراجعة.',
  },
  'settings.board.choose_cta': {
    en: 'Choose your exam board',
    ar: 'اختر بورد الامتحان مالك',
  },
  'settings.account.heading': { en: 'Account', ar: 'الحساب' },
  'settings.account.email_label': { en: 'Email', ar: 'الإيميل' },
  'settings.account.full_settings_prefix': {
    en: 'For full account settings (name, password, deletion) visit your',
    ar: 'لإعدادات الحساب الكاملة (الاسم، الباسوورد، الحذف) روح',
  },
  'settings.account.account_page_link': {
    en: 'account page',
    ar: 'صفحة الحساب مالك',
  },
  'settings.account.full_settings_suffix': { en: '.', ar: '.' },
  'settings.notifications.heading': { en: 'Notifications', ar: 'الإشعارات' },
  'settings.notifications.email_label': {
    en: 'Email reminders',
    ar: 'تذكيرات الإيميل',
  },
  'settings.notifications.email_description': {
    en: 'Weekly revision reminders and study streak nudges.',
    ar: 'تذكيرات مراجعة أسبوعية وتنبيهات للسلسلة مالتك.',
  },
  'settings.notifications.product_label': {
    en: 'Product updates',
    ar: 'تحديثات المنتج',
  },
  'settings.notifications.product_description': {
    en: 'Occasional announcements about new features.',
    ar: 'إعلانات بين فترة وفترة عن الميزات الجديدة.',
  },

  // ─── Admin (root + affiliates + email diagnostics + verify user) ──
  'admin.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'admin.back_to_admin': { en: 'Back to admin', ar: 'رجوع للأدمن' },
  'admin.refresh': { en: 'Refresh', ar: 'حدّث' },
  'admin.error_load_stats': {
    en: 'Failed to load admin stats.',
    ar: 'ما قدرنا نحمّل إحصائيات الأدمن.',
  },
  'admin.error_generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية لو سمحت.',
  },
  'admin.network_error': {
    en: 'Network error. Please try again.',
    ar: 'خطأ في الشبكة. جرّب مرة ثانية.',
  },
  'admin.action_failed': { en: 'Action failed', ar: 'العملية ما نجحت' },
  'admin.network_error_short': { en: 'Network error', ar: 'خطأ في الشبكة' },

  // Root /admin
  'admin.root.title': { en: 'Admin Panel', ar: 'لوحة الأدمن' },
  'admin.root.stat.total_users': { en: 'Total Users', ar: 'إجمالي المستخدمين' },
  'admin.root.stat.active_subscribers': { en: 'Active Subscribers', ar: 'المشتركين الفعّالين' },
  'admin.root.stat.total_enrolments': { en: 'Total Enrolments', ar: 'إجمالي التسجيلات' },
  'admin.root.stat.certificates_issued': { en: 'Certificates Issued', ar: 'الشهادات الصادرة' },
  'admin.root.recent_registrations': { en: 'Recent Registrations', ar: 'التسجيلات الأخيرة' },
  'admin.root.recent_enrolments': { en: 'Recent Enrolments', ar: 'التسجيلات الأخيرة في الدورات' },
  'admin.root.col.email': { en: 'Email', ar: 'الإيميل' },
  'admin.root.col.name': { en: 'Name', ar: 'الاسم' },
  'admin.root.col.year': { en: 'Year', ar: 'الصف' },
  'admin.root.col.plan': { en: 'Plan', ar: 'الباقة' },
  'admin.root.col.joined': { en: 'Joined', ar: 'تاريخ الانضمام' },
  'admin.root.col.user_id': { en: 'User ID', ar: 'معرّف المستخدم' },
  'admin.root.col.course': { en: 'Course', ar: 'الدورة' },
  'admin.root.col.type': { en: 'Type', ar: 'النوع' },
  'admin.root.col.date': { en: 'Date', ar: 'التاريخ' },
  'admin.root.empty_users': { en: 'No users yet.', ar: 'ما في مستخدمين الحين.' },
  'admin.root.empty_enrolments': { en: 'No enrolments yet.', ar: 'ما في تسجيلات الحين.' },

  // /admin/affiliates
  'admin.aff.title': { en: 'Affiliate Management', ar: 'إدارة الشراكات' },
  'admin.aff.error_load': { en: 'Failed to load affiliates', ar: 'ما قدرنا نحمّل الشركاء' },
  'admin.aff.stat.total': { en: 'Total Affiliates', ar: 'إجمالي الشركاء' },
  'admin.aff.stat.pending': { en: 'Pending', ar: 'قيد المراجعة' },
  'admin.aff.stat.active': { en: 'Active', ar: 'نشطين' },
  'admin.aff.stat.commission_paid': { en: 'Total Commission Paid', ar: 'إجمالي العمولات المدفوعة' },
  'admin.aff.filter.all': { en: 'All', ar: 'الكل' },
  'admin.aff.filter.pending': { en: 'pending', ar: 'قيد المراجعة' },
  'admin.aff.filter.active': { en: 'active', ar: 'نشطين' },
  'admin.aff.filter.suspended': { en: 'suspended', ar: 'موقوفين' },
  'admin.aff.filter.terminated': { en: 'terminated', ar: 'منهيين' },
  'admin.aff.pending_applications': { en: 'Pending Applications', ar: 'الطلبات قيد المراجعة' },
  'admin.aff.under_18': { en: 'Under 18', ar: 'تحت ١٨' },
  'admin.aff.tiktok_label': { en: 'TikTok:', ar: 'TikTok:' },
  'admin.aff.ig_label': { en: 'IG:', ar: 'IG:' },
  'admin.aff.followers_label': { en: 'Followers:', ar: 'المتابعين:' },
  'admin.aff.content_plan_label': { en: 'Content plan:', ar: 'خطة المحتوى:' },
  'admin.aff.view_best_post': { en: 'View best post', ar: 'شوف أفضل منشور' },
  'admin.aff.guardian_label': { en: 'Guardian:', ar: 'ولي الأمر:' },
  'admin.aff.approve': { en: 'Approve', ar: 'اعتمد' },
  'admin.aff.minor_badge': { en: 'Minor', ar: 'قاصر' },
  'admin.aff.all_affiliates': { en: 'All Affiliates', ar: 'كل الشركاء' },
  'admin.aff.none_found': { en: 'No affiliates found.', ar: 'ما في شركاء.' },
  'admin.aff.col.name': { en: 'Name', ar: 'الاسم' },
  'admin.aff.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.aff.col.tier': { en: 'Tier', ar: 'المستوى' },
  'admin.aff.col.referrals': { en: 'Referrals', ar: 'الإحالات' },
  'admin.aff.col.paid': { en: 'Paid', ar: 'مدفوع' },
  'admin.aff.col.pending': { en: 'Pending', ar: 'قيد المراجعة' },
  'admin.aff.col.joined': { en: 'Joined', ar: 'تاريخ الانضمام' },
  'admin.aff.suffix_affiliates': { en: 'Affiliates', ar: 'الشركاء' },
  'admin.aff.status.pending': { en: 'pending', ar: 'قيد المراجعة' },
  'admin.aff.status.agreement_sent': { en: 'agreement_sent', ar: 'الاتفاقية مرسلة' },
  'admin.aff.status.agreement_signed': { en: 'agreement_signed', ar: 'الاتفاقية موقّعة' },
  'admin.aff.status.active': { en: 'active', ar: 'نشط' },
  'admin.aff.status.suspended': { en: 'suspended', ar: 'موقوف' },
  'admin.aff.status.terminated': { en: 'terminated', ar: 'منهي' },
  'admin.aff.payout.title': { en: 'Monthly Payout Calculator', ar: 'حاسبة العمولات الشهرية' },
  'admin.aff.payout.year': { en: 'Year', ar: 'السنة' },
  'admin.aff.payout.month': { en: 'Month', ar: 'الشهر' },
  'admin.aff.payout.calc': { en: 'Calculate Payouts', ar: 'احسب العمولات' },
  'admin.aff.payout.calculating': { en: 'Calculating...', ar: 'لحظة، نحسب…' },
  'admin.aff.payout.fail_calc': { en: 'Failed to calculate payouts', ar: 'ما قدرنا نحسب العمولات' },
  'admin.aff.payout.fail_update': { en: 'Failed to update payout', ar: 'ما قدرنا نحدّث العمولة' },
  'admin.aff.payout.created_prefix': { en: 'payout(s) created:', ar: 'عمولة/عمولات تم إنشاؤها:' },
  'admin.aff.payout.affiliate_prefix': { en: 'Affiliate:', ar: 'الشريك:' },
  'admin.aff.payout.referral_suffix': { en: 'referral(s)', ar: 'إحالة' },
  'admin.aff.payout.mark_disclosure': { en: 'Mark Disclosure OK', ar: 'سجّل الإفصاح كصحيح' },

  // /admin/email-diagnostics
  'admin.email.title': { en: 'Email Diagnostics', ar: 'تشخيص الإيميلات' },
  'admin.email.domain_status': { en: 'Resend domain status', ar: 'حالة دومين Resend' },
  'admin.email.calling_api': { en: 'Calling Resend API...', ar: 'لحظة، نتصل بـ Resend API…' },
  'admin.email.dns_records': { en: 'DNS records', ar: 'سجلات DNS' },
  'admin.email.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.email.col.type': { en: 'Type', ar: 'النوع' },
  'admin.email.col.name': { en: 'Name', ar: 'الاسم' },
  'admin.email.col.value': { en: 'Value', ar: 'القيمة' },
  'admin.email.col.purpose': { en: 'Purpose', ar: 'الغرض' },
  'admin.email.col.num': { en: '#', ar: '#' },
  'admin.email.status_unknown': { en: 'unknown', ar: 'غير معروف' },
  'admin.email.send_test_title': { en: 'Send test email', ar: 'أرسل إيميل تجريبي' },
  'admin.email.send_test_body': {
    en: 'Sends a "Test from The English Hub" email via the same Resend wrapper used by the app. If the domain isn\'t verified yet, Resend will accept the call but most inboxes will reject delivery — try sending to the Resend account holder\'s address first.',
    ar: 'يرسل إيميل "Test from The English Hub" عبر نفس Resend اللي يستخدمه التطبيق. إذا الدومين ما تم التحقق منه، Resend راح يقبل الطلب بس أغلب الإيميلات راح ترفض الاستلام — جرّب ترسل لإيميل صاحب حساب Resend أولاً.',
  },
  'admin.email.recipient_label': { en: 'Recipient email', ar: 'إيميل المستلم' },
  'admin.email.recipient_placeholder': { en: 'you@example.com', ar: 'you@example.com' },
  'admin.email.token_label': {
    en: 'x-admin-token (optional — only if ADMIN_DIAGNOSTIC_TOKEN is set on the server)',
    ar: 'x-admin-token (اختياري — بس إذا ADMIN_DIAGNOSTIC_TOKEN معيّن على السيرفر)',
  },
  'admin.email.token_placeholder': {
    en: 'leave blank if not configured',
    ar: 'خلّه فاضي إذا ما هو معيّن',
  },
  'admin.email.send_test': { en: 'Send test', ar: 'أرسل التجريبي' },
  'admin.email.sent': { en: 'Sent.', ar: 'تم الإرسال.' },
  'admin.email.resend_msg_id': { en: 'Resend message ID:', ar: 'معرّف رسالة Resend:' },
  'admin.email.delivered_to': { en: 'Delivered to:', ar: 'وصل إلى:' },
  'admin.email.failed_prefix': { en: 'Failed:', ar: 'فشل:' },
  'admin.email.unknown_error': { en: 'Unknown error', ar: 'خطأ غير معروف' },
  'admin.email.runbook_title': {
    en: 'Runbook: sign-up email not arriving',
    ar: 'دليل العمل: إيميل التسجيل ما يوصل',
  },
  'admin.email.runbook.1_strong': {
    en: 'Verify the sending domain.',
    ar: 'تحقّق من دومين الإرسال.',
  },
  'admin.email.runbook.1_body': {
    en: 'Status above must read VERIFIED. If PENDING or FAILED, add the DNS records below at Cloudflare (the most likely root cause).',
    ar: 'الحالة فوق لازم تكون VERIFIED. إذا PENDING أو FAILED، ضِف سجلات DNS اللي تحت في Cloudflare (السبب الأرجح).',
  },
  'admin.email.runbook.2_strong': {
    en: 'Resend free-tier sandbox.',
    ar: 'وضع التجربة في Resend (الباقة المجانية).',
  },
  'admin.email.runbook.2_body_pre': {
    en: "Until the domain is verified, Resend only delivers to the Resend account holder's verified email. Sign in at",
    ar: 'لين الدومين يصير verified، Resend بس يوصّل لإيميل صاحب الحساب المتحقق منه. سجّل دخول من',
  },
  'admin.email.runbook.3_strong': { en: 'Send a test above', ar: 'أرسل تجريبي فوق' },
  'admin.email.runbook.3_body_pre': {
    en: "to the founder's own inbox. Inspect Resend dashboard",
    ar: 'لإيميل المؤسس. شوف لوحة Resend',
  },
  'admin.email.runbook.3_body_post': { en: 'for delivery status.', ar: 'عشان تشيّك حالة الإيصال.' },
  'admin.email.runbook.4_strong': {
    en: 'Check Supabase Auth logs.',
    ar: 'شيّك سجلات Supabase Auth.',
  },
  'admin.email.runbook.4_body': {
    en: 'Project → Logs → "auth" — search for the user\'s email; look for "smtp" / "send" entries. If empty, Supabase didn\'t even attempt a send and SMTP credentials probably weren\'t saved cleanly.',
    ar: 'Project → Logs → "auth" — دوّر على إيميل المستخدم؛ شوف إذا في "smtp" / "send". إذا فاضي، Supabase ما حاول يرسل أصلاً وغالباً بيانات SMTP ما انحفظت صح.',
  },
  'admin.email.runbook.5_strong': {
    en: 'Check Supabase SMTP settings.',
    ar: 'شيّك إعدادات SMTP في Supabase.',
  },
  'admin.email.runbook.5_body': { en: 'Auth → SMTP Settings:', ar: 'Auth → SMTP Settings:' },
  'admin.email.runbook.6_strong': {
    en: 'Confirm "Confirm email" is ON',
    ar: 'تأكّد إن "Confirm email" مفعّل',
  },
  'admin.email.runbook.6_body': {
    en: 'in Auth → Providers → Email. If disabled, no verification email is ever generated.',
    ar: 'في Auth → Providers → Email. إذا معطّل، ما يصير في إيميل تحقّق أصلاً.',
  },
  'admin.email.runbook.7_strong': { en: 'Last resort.', ar: 'آخر حل.' },
  'admin.email.runbook.7_body': {
    en: "Check the recipient's spam/junk folder. Until DKIM is verified, Gmail and Outlook aggressively junk anything from theenglishhub.app.",
    ar: 'شيّك مجلد الـ spam/junk عند المستلم. لين DKIM يصير verified، Gmail وOutlook راح يحطون أي شي من theenglishhub.app في الـ junk.',
  },
  'admin.email.dns_title': {
    en: 'Cloudflare DNS records for theenglishhub.app',
    ar: 'سجلات DNS في Cloudflare لـ theenglishhub.app',
  },
  'admin.email.dns_body_pre': {
    en: 'Add these in Cloudflare DNS. Resend itself is the source of truth for the two DKIM CNAMEs — copy them from',
    ar: 'ضِف هذي في Cloudflare DNS. Resend هو المرجع للـ DKIM CNAME الاثنين — انسخهم من',
  },
  'admin.email.dns_body_post': {
    en: 'after adding theenglishhub.app there.',
    ar: 'بعد ما تضيف theenglishhub.app هناك.',
  },
  'admin.email.dns_body_strong': {
    en: 'Set proxy status to DNS-only (grey cloud)',
    ar: 'خلّ الـ proxy على DNS-only (السحابة الرمادية)',
  },
  'admin.email.dns_body_for_every': { en: 'for every record.', ar: 'لكل سجل.' },
  'admin.email.dns.spf': { en: 'SPF', ar: 'SPF' },
  'admin.email.dns.dkim1': { en: 'DKIM #1', ar: 'DKIM #1' },
  'admin.email.dns.dkim2': { en: 'DKIM #2', ar: 'DKIM #2' },
  'admin.email.dns.dmarc': { en: 'DMARC', ar: 'DMARC' },
  'admin.email.dns.dkim_value_placeholder': {
    en: '(value shown in Resend dashboard — copy verbatim)',
    ar: '(القيمة معروضة في لوحة Resend — انسخها كما هي)',
  },
  'admin.email.dns_footer': {
    en: 'After adding the records, wait ~5 minutes and click "Verify DNS records" inside Resend. The Refresh button above will re-check live status.',
    ar: 'بعد ما تضيف السجلات، انتظر ٥ دقائق تقريباً وانقر "Verify DNS records" داخل Resend. زر "حدّث" فوق راح يعيد فحص الحالة.',
  },

  // /admin/verify-user
  'admin.verify.title': { en: 'Manual email verification', ar: 'تحقّق يدوي من الإيميل' },
  'admin.verify.body_pre': {
    en: "Emergency tool. Use when the verification-email pipeline is broken (e.g. Resend domain not yet verified, SMTP outage, reviewer email forwarding swallowing the link). Marks the user's email as confirmed in Supabase and ensures the matching Prisma",
    ar: 'أداة طوارئ. استخدمها لما خط إيميلات التحقّق يكون معطّل (مثلاً دومين Resend ما تم التحقق منه، أو SMTP واقف، أو forwarding يبلع الرابط). تعلّم إيميل المستخدم كمؤكَّد في Supabase وتتأكّد من وجود الـ',
  },
  'admin.verify.body_post': { en: 'row exists.', ar: 'المطابق في Prisma.' },
  'admin.verify.email_label': { en: 'User email address', ar: 'إيميل المستخدم' },
  'admin.verify.email_placeholder': { en: 'user@example.com', ar: 'user@example.com' },
  'admin.verify.invalid_email': {
    en: 'Please enter a valid email address.',
    ar: 'لطفاً ادخل إيميل صحيح.',
  },
  'admin.verify.request_failed': { en: 'Request failed', ar: 'الطلب فشل' },
  'admin.verify.unexpected_response': {
    en: 'Unexpected response from server.',
    ar: 'رد غير متوقع من السيرفر.',
  },
  'admin.verify.submitting': { en: 'Verifying...', ar: 'لحظة، نتحقّق…' },
  'admin.verify.submit': { en: 'Verify user manually', ar: 'تحقّق من المستخدم يدوياً' },
  'admin.verify.already_confirmed': {
    en: 'Already verified — no change needed.',
    ar: 'تم التحقق من قبل — ما في تغيير.',
  },
  'admin.verify.success': { en: 'User verified successfully.', ar: 'تم التحقق من المستخدم بنجاح.' },
  'admin.verify.dt.email': { en: 'Email', ar: 'الإيميل' },
  'admin.verify.dt.supabase_id': { en: 'Supabase user ID', ar: 'معرّف المستخدم في Supabase' },
  'admin.verify.dt.prisma_id': { en: 'Prisma user ID', ar: 'معرّف المستخدم في Prisma' },
  'admin.verify.user_can_signin_pre': {
    en: 'The user can now sign in at',
    ar: 'المستخدم يقدر يسجّل دخول الحين من',
  },
  'admin.verify.user_can_signin_post': { en: '.', ar: '.' },

  // ─── Anthology document preview ────────────────────────────────────
  'anth.preview.label': { en: 'Document Preview', ar: 'معاينة الوثيقة' },
  'anth.preview.download_word': { en: 'Download .doc', ar: 'نزّل .doc' },
  'anth.preview.print_pdf': { en: 'Print / PDF', ar: 'طبع / PDF' },
  'anth.preview.iframe_title': {
    en: 'Anthology document preview',
    ar: 'معاينة وثيقة الأنثولوجي',
  },

  // ─── Marketing — infographic banner ────────────────────────────────
  'marketing.infographic.region_label': {
    en: 'Marketing infographic',
    ar: 'إنفوغرافيك تسويقي',
  },

  // ─── Google OAuth sign-in button ───────────────────────────────────
  // Google brand stays Latin per Gulf convention.
  'auth.google.continue': { en: 'Continue with Google', ar: 'كمّل مع Google' },
  'auth.google.redirecting': { en: 'Redirecting…', ar: 'لحظة، نحوّلك…' },
  'auth.google.aria_signin': {
    en: 'Sign in with Google',
    ar: 'سجّل دخول بـ Google',
  },
  'auth.google.error.not_enabled': {
    en: 'Google sign-in is not available right now. Please sign in with your email and password instead.',
    ar: 'دخول Google مو متاح الحين. لطفاً سجّل دخول بالإيميل والرمز السري بدال.',
  },
  'auth.google.error.generic': {
    en: 'We could not start Google sign-in. Please try again, or sign in with your email and password instead.',
    ar: 'ما قدرنا نبدأ دخول Google. جرّب مرة ثانية، أو سجّل دخول بالإيميل والرمز السري بدال.',
  },

  // ─── Layout shell (root-layout-shell + ConsentGatedAnalytics) ────────
  'layout.main_content_label': { en: 'Main content', ar: 'المحتوى الرئيسي' },
  'layout.region.header': { en: 'Site header', ar: 'هيدر الموقع' },
  'layout.region.footer': { en: 'Site footer', ar: 'فوتر الموقع' },
  'layout.analytics.label': { en: 'Analytics', ar: 'الإحصائيات' },

  // ─── Disclaimer (ExamBoardDisclaimer + WithContext) ───────────────────
  'disclaimer.full': {
    en: 'The English Hub is an independent educational platform. GCSE is a registered trademark of Ofqual. IGCSE is a registered trademark of Cambridge Assessment International Education.',
    ar: 'The English Hub منصة تعليمية مستقلة. GCSE علامة تجارية مسجلة لـ Ofqual. وIGCSE علامة تجارية مسجلة لـ Cambridge Assessment International Education.',
  },
  'disclaimer.compact': {
    en: 'The English Hub is an independent educational platform.',
    ar: 'The English Hub منصة تعليمية مستقلة.',
  },
  'disclaimer.marketing': {
    en: 'The English Hub is an independent educational platform.',
    ar: 'The English Hub منصة تعليمية مستقلة.',
  },
  'disclaimer.ai_feedback': {
    en: 'This feedback is generated by AI and is for practice purposes only. It does not represent an official assessment. Actual exam results may differ.',
    ar: 'هذي الملاحظات صُنعت بالذكاء الاصطناعي وهي للتدريب بس. ما تعتبر تقييم رسمي. نتائج الامتحان الحقيقية ممكن تختلف.',
  },
  'disclaimer.full_link': { en: 'Full disclaimer', ar: 'الإفصاح الكامل' },
  'disclaimer.aria.exam_board': { en: 'Exam board disclaimer', ar: 'إفصاح بورد الامتحان' },
  'disclaimer.aria.ai_feedback': {
    en: 'AI feedback disclaimer',
    ar: 'إفصاح ملاحظات الذكاء الاصطناعي',
  },

  // ─── Feature gating (FeatureGate + FeatureLockout) ────────────────────
  'feature.usage.one_remaining': {
    en: '1 of {total} free use remaining',
    ar: 'باقي لك استخدام واحد من {total} ببلاش',
  },
  'feature.usage.n_remaining': {
    en: '{remaining} of {total} free uses remaining',
    ar: 'باقي لك {remaining} من {total} استخدامات ببلاش',
  },
  'feature.lockout.title_suffix': { en: 'is now locked', ar: 'صار مقفول الحين' },
  'feature.lockout.description': {
    en: "You've used all {total} free submissions. Upgrade to Premium for unlimited access.",
    ar: 'استخدمت كل {total} إرسالات ببلاش. رقّي لـ Premium عشان وصول بلا حدود.',
  },
  'feature.lockout.plan_title': { en: 'Premium Plan', ar: 'باقة Premium' },
  'feature.lockout.plan_pricing': {
    en: 'Students from {currency}{student}/month · teachers from {currency}{teacher}/month',
    ar: 'الطلاب من {currency}{student}/شهر · المعلمين من {currency}{teacher}/شهر',
  },
  'feature.lockout.cta_trial': { en: 'Start 7-day trial', ar: 'ابدأ التجربة ٧ أيام' },
  'feature.lockout.trial_note': {
    en: "Trial requires a valid card. Cancel before day 7 and you won't be charged.",
    ar: 'التجربة تحتاج بطاقة صالحة. سكّر قبل اليوم السابع وما راح ينخصم منك شي.',
  },
  'feature.benefit.ai_essay_marking': {
    en: 'Get detailed, exam-board-aligned feedback on every essay with AI-powered marking.',
    ar: 'احصل على ملاحظات تفصيلية لكل مقال على أساس متطلبات بورد الامتحان مع تصحيح بالذكاء الاصطناعي.',
  },
  'feature.benefit.mock_exam': {
    en: 'Practise with full-length mock exams that mirror real GCSE and A-Level papers.',
    ar: 'تدرّب على امتحانات تجريبية كاملة تشبه ورقات GCSE وA-Level الحقيقية.',
  },
  'feature.benefit.feedback_report': {
    en: 'Generate comprehensive feedback reports to share with students and parents.',
    ar: 'سوِّ تقارير ملاحظات شاملة عشان تشاركها مع الطلاب وأولياء الأمور.',
  },
  'feature.benefit.ai_study_recommendations': {
    en: "Receive personalised study plans tailored to each student's strengths and gaps.",
    ar: 'احصل على خطط دراسية شخصية تناسب نقاط القوة والثغرات لكل طالب.',
  },
  'feature.benefit.ai_lesson_plan': {
    en: 'Create curriculum-aligned lesson plans in minutes with AI assistance.',
    ar: 'سوِّ خطط دروس متوافقة مع المنهج بدقائق بمساعدة الذكاء الاصطناعي.',
  },
  'feature.benefit.worksheet_builder': {
    en: 'Build differentiated worksheets with auto-generated questions and mark schemes.',
    ar: 'سوِّ أوراق عمل متنوعة مع أسئلة وأنظمة تصحيح تتولّد تلقائياً.',
  },
  'feature.benefit.mark_scheme_generator': {
    en: 'Generate detailed mark schemes aligned to exam board criteria.',
    ar: 'سوِّ أنظمة تصحيح تفصيلية على أساس معايير بورد الامتحان.',
  },
  'feature.benefit.export_pptx_word': {
    en: 'Export lesson materials directly to PowerPoint and Word for easy classroom use.',
    ar: 'صدّر مواد الدروس مباشرة لـ PowerPoint وWord عشان استخدام سهل في الفصل.',
  },
  'feature.benefit.class_analytics': {
    en: 'Track class-wide progress with detailed performance analytics and insights.',
    ar: 'تابع تقدم الفصل كامل مع تحليلات أداء ومعلومات تفصيلية.',
  },
  'feature.benefit.student_reports': {
    en: 'Generate individual student progress reports with targeted improvement areas.',
    ar: 'سوِّ تقارير تقدم فردية للطلاب مع تحديد مجالات التحسين.',
  },
  'feature.name.ai_essay_marking': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
  },
  'feature.name.mock_exam': { en: 'Mock Exam Practice', ar: 'تدريب امتحانات تجريبية' },
  'feature.name.feedback_report': { en: 'Feedback Report', ar: 'تقرير الملاحظات' },
  'feature.name.ai_study_recommendations': {
    en: 'AI Study Recommendations',
    ar: 'توصيات دراسية بالذكاء الاصطناعي',
  },
  'feature.name.ai_lesson_plan': { en: 'AI Lesson Plan', ar: 'خطة درس بالذكاء الاصطناعي' },
  'feature.name.worksheet_builder': { en: 'Worksheet Builder', ar: 'منشئ أوراق العمل' },
  'feature.name.mark_scheme_generator': { en: 'Answer Guide Generator', ar: 'منشئ دليل الإجابات' },
  'feature.name.export_pptx_word': { en: 'PowerPoint/Word Export', ar: 'تصدير PowerPoint/Word' },
  'feature.name.class_analytics': { en: 'Class Analytics', ar: 'تحليلات الفصل' },
  'feature.name.student_reports': { en: 'Student Reports', ar: 'تقارير الطلاب' },

  // ─── Resource catalogue (ResourceCard + ResourceFilter) ───────────────
  'resource.type.study_guide': { en: 'Study Guide', ar: 'دليل المذاكرة' },
  'resource.type.practice': { en: 'Practice', ar: 'تدريب' },
  'resource.type.notes': { en: 'Notes', ar: 'ملاحظات' },
  'resource.subject.english_language': { en: 'English Language', ar: 'اللغة الإنجليزية' },
  'resource.subject.english_literature': { en: 'English Literature', ar: 'الأدب الإنجليزي' },
  'resource.cta.start_revising': { en: 'Start revising', ar: 'ابدأ المراجعة' },
  'resource.difficulty.beginner': { en: 'Beginner', ar: 'مبتدئ' },
  'resource.difficulty.easy': { en: 'Easy', ar: 'سهل' },
  'resource.difficulty.intermediate': { en: 'Intermediate', ar: 'متوسط' },
  'resource.difficulty.challenging': { en: 'Challenging', ar: 'صعب' },
  'resource.difficulty.advanced': { en: 'Advanced', ar: 'متقدّم' },
  'resource.difficulty.aria': {
    en: 'Difficulty: {label} ({level} of 5)',
    ar: 'الصعوبة: {label} ({level} من ٥)',
  },
  'resource.filter.search_placeholder': { en: 'Search resources...', ar: 'دوّر على المصادر…' },
  'resource.filter.label.subject': { en: 'Subject', ar: 'المادة' },
  'resource.filter.label.topic': { en: 'Topic', ar: 'الموضوع' },
  'resource.filter.label.resource_type': { en: 'Resource Type', ar: 'نوع المصدر' },
  'resource.filter.label.difficulty': { en: 'Difficulty', ar: 'الصعوبة' },
  'resource.filter.topic.all': { en: 'All Topics', ar: 'كل المواضيع' },
  'resource.filter.topic.button': { en: 'Topic', ar: 'الموضوع' },
  'resource.filter.type.all': { en: 'All Types', ar: 'كل الأنواع' },
  'resource.filter.type.study_guides': { en: 'Study Guides', ar: 'أدلة المذاكرة' },
  'resource.filter.type.practice': { en: 'Practice', ar: 'تدريب' },
  'resource.filter.type.notes': { en: 'Notes', ar: 'ملاحظات' },
  'resource.filter.difficulty.foundation': { en: 'Foundation', ar: 'أساسي' },
  'resource.filter.difficulty.higher': { en: 'Higher', ar: 'متقدّم' },
  'resource.filter.clear': { en: 'Clear filters', ar: 'امسح الفلاتر' },
  'resource.filter.clear_all': { en: 'Clear All', ar: 'امسح الكل' },
  'resource.filter.apply': { en: 'Apply Filters', ar: 'طبّق الفلاتر' },
  'resource.filter.button': { en: 'Filters', ar: 'الفلاتر' },
  'resource.filter.heading': { en: 'Filters', ar: 'الفلاتر' },
  'resource.filter.dialog_aria': { en: 'Filter options', ar: 'خيارات الفلترة' },
  'resource.filter.close_aria': { en: 'Close filters', ar: 'سكّر الفلاتر' },
  'resource.filter.topic.lang.reading_comprehension': {
    en: 'Reading Comprehension',
    ar: 'فهم المقروء',
  },
  'resource.filter.topic.lang.creative_writing': {
    en: 'Creative Writing',
    ar: 'الكتابة الإبداعية',
  },
  'resource.filter.topic.lang.transactional_writing': {
    en: 'Transactional Writing',
    ar: 'الكتابة الوظيفية',
  },
  'resource.filter.topic.lang.language_techniques': {
    en: 'Language Techniques',
    ar: 'أساليب اللغة',
  },
  'resource.filter.topic.lang.comparing_perspectives': {
    en: 'Comparing Perspectives',
    ar: 'مقارنة وجهات النظر',
  },
  'resource.filter.topic.lang.spoken_language': { en: 'Spoken Language', ar: 'اللغة المنطوقة' },
  'resource.filter.topic.lit.shakespeare': { en: 'Shakespeare', ar: 'شكسبير' },
  'resource.filter.topic.lit.poetry_anthology': { en: 'Poetry Anthology', ar: 'مجموعة الشعر' },
  'resource.filter.topic.lit.modern_prose': { en: 'Modern Prose', ar: 'النثر الحديث' },
  'resource.filter.topic.lit.nineteenth_century_novel': {
    en: '19th Century Novel',
    ar: 'روايات القرن التاسع عشر',
  },
  'resource.filter.topic.lit.unseen_poetry': { en: 'Unseen Poetry', ar: 'الشعر غير المرئي' },
  'resource.filter.topic.lit.drama': { en: 'Drama', ar: 'الدراما' },

  // ─── Flashcards hub page (revision/flashcards top-level) ─────────────
  'flashcards.hub.breadcrumb_revision': { en: 'Revision', ar: 'المراجعة' },
  'flashcards.hub.breadcrumb_flashcards': { en: 'Flashcards', ar: 'الكروت' },
  'flashcards.hub.heading': { en: 'Smart Review Flashcards', ar: 'كروت المراجعة الذكية' },
  'flashcards.hub.subheading': {
    en: 'Master GCSE English with spaced-repetition flashcards. Quotes, techniques, vocabulary and exam skills with progress tracking.',
    ar: 'احفظ مادة GCSE English بكروت المراجعة المتباعدة. اقتباسات وتقنيات وكلمات ومهارات امتحان مع متابعة تقدّمك.',
  },
  'flashcards.hub.cta_start': { en: 'Start studying', ar: 'ابدأ المذاكرة' },
  'flashcards.hub.cta_browse': { en: 'Browse decks', ar: 'تصفّح الباقات' },

  // ─── Games hub page (top-level /games) ───────────────────────────────
  'games_page.breadcrumb': { en: 'Games', ar: 'الألعاب' },
  'games_page.eyebrow_learn_through_play': { en: 'Learn through play', ar: 'تعلّم باللعب' },
  'games_page.eyebrow_for_board_prefix': { en: 'For', ar: 'لـ' },
  'games_page.title_english': { en: 'English', ar: 'الإنجليزي' },
  'games_page.title_games': { en: 'Games', ar: 'ألعاب' },
  'games_page.hero_with_board_prefix': {
    en: 'Sharpen your English skills with games tailored to',
    ar: 'طوّر مهاراتك في الإنجليزي مع ألعاب مفصّلة على',
  },
  'games_page.hero_with_board_suffix': { en: 'set texts and themes.', ar: 'نصوصها وتيمها.' },
  'games_page.hero_default': {
    en: 'Sharpen your English skills with fun, interactive games. Perfect for KS3 and GCSE revision.',
    ar: 'طوّر مهاراتك في الإنجليزي بألعاب ممتعة وتفاعلية. حلوة لمراجعة KS3 و GCSE.',
  },
  'games_page.badge_free_games': { en: '7 Free Games', ar: '٧ ألعاب ببلاش' },
  'games_page.badge_track_score': { en: 'Track Your Score', ar: 'تابع نتيجتك' },
  'games_page.badge_instant_feedback': { en: 'Instant Feedback', ar: 'ردّ فوري' },
  'games_page.back_to_all_games': { en: 'Back to all games', ar: 'رجوع لكل الألعاب' },
  'games_page.heading_other_games': { en: 'Other Games', ar: 'ألعاب ثانية' },
  'games_page.heading_choose_game': { en: 'Choose a Game', ar: 'اختر لعبة' },
  'games_page.card.play_now': { en: 'Play Now', ar: 'العب الحين' },
  'games_page.card.playing': { en: 'Playing...', ar: 'يلعب…' },
  'games_page.card.locked_signup': { en: 'Sign up to play', ar: 'سجّل عشان تلعب' },
  'games_page.card.locked_cta': { en: 'Get Started', ar: 'ابدأ' },

  // ─── Poetry hub page (revision/poetry top-level) ─────────────────────
  'poetry.breadcrumb_revision': { en: 'Revision', ar: 'المراجعة' },
  'poetry.breadcrumb_poetry': { en: 'Poetry', ar: 'الشِعر' },
  'poetry.boardless.title': { en: 'Choose your exam board', ar: 'اختر بورد الامتحان مالك' },
  'poetry.boardless.description': {
    en: 'Each exam board uses a different poetry anthology. Pick yours so we can show you only the poems you actually need to learn.',
    ar: 'كل بورد عنده مختارات شِعرية مختلفة. اختر بوردك عشان نوريك القصائد اللي تحتاج تذاكرها بس.',
  },
  'poetry.boardless.fallback_title': { en: 'Choose your exam board', ar: 'اختر بوردك' },
  'poetry.boardless.fallback_description': {
    en: 'Pick a board to see your poetry anthology.',
    ar: 'اختر بوردك عشان تشوف مختاراتك الشِعرية.',
  },
  'poetry.back_to_revision': { en: 'Back to Revision Hub', ar: 'رجوع لمركز المراجعة' },
  'poetry.change_board': { en: 'Change board', ar: 'غيّر البورد' },
  'poetry.badge_poetry_suffix': { en: 'Poetry', ar: 'شِعر' },
  'poetry.badge_poetry_revision': { en: 'Poetry Revision', ar: 'مراجعة الشِعر' },
  'poetry.choose_your_board_cta': { en: 'Choose your exam board', ar: 'اختر بورد الامتحان مالك' },
  'poetry.wrong_board_banner': {
    en: "That page belongs to a different exam board. Here's your anthology instead.",
    ar: 'هذي الصفحة لبورد ثاني. هذي مختاراتك إنت.',
  },
  'poetry.aqa.title': { en: 'AQA Poetry Anthology', ar: 'مختارات AQA الشِعرية' },
  'poetry.edexcel.title': { en: 'Edexcel Poetry Anthology', ar: 'مختارات Edexcel الشِعرية' },
  'poetry.edexcel.description': {
    en: "The Pearson Edexcel anthology is split into themed clusters. You'll study one cluster: Conflict or Time and Place.",
    ar: 'مختارات Pearson Edexcel مقسّمة على مجموعات بحسب التيم. بتذاكر مجموعة وحدة: Conflict أو Time and Place.',
  },
  'poetry.edexcel.cluster_conflict.title': { en: 'Conflict', ar: 'Conflict' },
  'poetry.edexcel.cluster_conflict.desc': {
    en: 'War, struggle, internal turmoil and the cost of conflict.',
    ar: 'الحرب والصراع والاضطراب الداخلي وتكلفة النزاع.',
  },
  'poetry.edexcel.cluster_time_place.title': { en: 'Time and Place', ar: 'Time and Place' },
  'poetry.edexcel.cluster_time_place.desc': {
    en: 'Memory, landscape, identity and a sense of belonging.',
    ar: 'الذكريات والمكان والهوية والإحساس بالانتماء.',
  },
  'poetry.edexcel.view_full': {
    en: 'View full Edexcel anthology hub',
    ar: 'شوف مركز مختارات Edexcel كامل',
  },
  'poetry.ocr.title': { en: 'Towards a World Unknown', ar: 'Towards a World Unknown' },
  'poetry.ocr.description': {
    en: "The OCR anthology has 4 thematic clusters of 15 poems each. You'll study one cluster prescribed by your teacher.",
    ar: 'مختارات OCR فيها ٤ مجموعات تيمية، كل وحدة ١٥ قصيدة. بتذاكر مجموعة وحدة بحسب اللي اختاره معلّمك.',
  },
  'poetry.ocr.cluster_lar.title': { en: 'Love and Relationships', ar: 'Love and Relationships' },
  'poetry.ocr.cluster_lar.desc': {
    en: 'Romantic, familial and complicated forms of love across centuries.',
    ar: 'الحب الرومانسي والعائلي والمعقّد عبر قرون.',
  },
  'poetry.ocr.cluster_conflict.title': { en: 'Conflict', ar: 'Conflict' },
  'poetry.ocr.cluster_conflict.desc': {
    en: 'Personal, political and global conflict in poetry.',
    ar: 'الصراع الشخصي والسياسي والعالمي في الشِعر.',
  },
  'poetry.ocr.cluster_youth_age.title': { en: 'Youth and Age', ar: 'Youth and Age' },
  'poetry.ocr.cluster_youth_age.desc': {
    en: 'Time, growing up, mortality and looking back.',
    ar: 'الوقت والكِبر والموت والنظر للماضي.',
  },
  'poetry.ocr.cluster_power_nature.title': {
    en: 'Power and the Natural World',
    ar: 'Power and the Natural World',
  },
  'poetry.ocr.cluster_power_nature.desc': {
    en: "Nature's force, human power and our relationship with the environment.",
    ar: 'قوة الطبيعة والقوة البشرية وعلاقتنا بالبيئة.',
  },
  'poetry.ocr.view_full': {
    en: 'View full OCR anthology hub',
    ar: 'شوف مركز مختارات OCR كامل',
  },
  'poetry.eduqas.title': { en: 'Eduqas Poetry Anthology', ar: 'مختارات Eduqas الشِعرية' },
  'poetry.eduqas.description': {
    en: "The Eduqas 2025 anthology has 12 poems that all students study. You'll be asked to compare two of them in the exam — strong pairings are essential. Six of the twelve remain in copyright; quotations are short fair-dealing extracts.",
    ar: 'مختارات Eduqas 2025 فيها ١٢ قصيدة كل الطلاب يذاكرونها. في الامتحان لازم تقارن بين قصيدتين — اختيار الزوج المناسب وايد مهم. ست قصايد من الـ١٢ لسّا تحت حقوق النشر؛ الاقتباسات قصيرة بحدود الاستخدام العادل.',
  },
  'poetry.eduqas.view': { en: 'View Eduqas anthology', ar: 'شوف مختارات Eduqas' },
  'poetry.edexcel_igcse.title': {
    en: 'Edexcel IGCSE Poetry Anthology',
    ar: 'مختارات Edexcel IGCSE الشِعرية',
  },
  'poetry.edexcel_igcse.description': {
    en: 'Pearson Edexcel IGCSE prescribes its own poetry anthology. Head to the IGCSE area for the poems you need.',
    ar: 'Pearson Edexcel IGCSE عنده مختاراته الخاصة. روح قسم IGCSE عشان القصايد اللي تحتاجها.',
  },
  'poetry.edexcel_igcse.view': { en: 'View Edexcel IGCSE poetry', ar: 'شوف شِعر Edexcel IGCSE' },
  'poetry.cambridge.title': {
    en: 'No poetry anthology for your board',
    ar: 'ما في مختارات شِعرية لبوردك',
  },
  'poetry.cambridge.description': {
    en: "Cambridge IGCSE First Language English doesn't include a poetry anthology. Focus on Paper 1 reading skills instead — that's where your time pays off.",
    ar: 'Cambridge IGCSE First Language English ما فيه مختارات شِعرية. ركّز على مهارات القراءة في Paper 1 — هذا اللي يستاهل وقتك.',
  },
  'poetry.cambridge.paper1_cta': { en: 'Go to Paper 1 reading', ar: 'روح لقراءة Paper 1' },
  'poetry.cambridge_lit.title': {
    en: 'Cambridge IGCSE Literature in English',
    ar: 'Cambridge IGCSE Literature in English',
  },
  'poetry.cambridge_lit.description': {
    en: 'The Cambridge Literature spec uses the Songs of Ourselves anthology. Detailed guides for each prescribed poem are on the Cambridge Lit hub.',
    ar: 'مواصفات Cambridge Literature تستخدم مختارات Songs of Ourselves. شروح كل قصيدة مقرّرة موجودة في مركز Cambridge Lit.',
  },
  'poetry.cambridge_lit.cta': {
    en: 'Open Cambridge Literature hub',
    ar: 'افتح مركز Cambridge Literature',
  },
  'poetry.edexcel_lang.title': {
    en: "Edexcel IGCSE Language A doesn't have a poetry anthology",
    ar: 'Edexcel IGCSE Language A ما فيه مختارات شِعرية',
  },
  'poetry.edexcel_lang.description': {
    en: 'The Language A spec (4EA1) focuses on non-fiction, transactional writing, and unseen prose — not a poetry anthology. Head to the Anthology section under Paper 1 for your prescribed texts.',
    ar: 'مواصفات Language A (4EA1) تركّز على نصوص غير قصصية والكتابة الوظيفية والنثر غير المرئي — مو مختارات شِعرية. روح قسم Anthology تحت Paper 1 عشان نصوصك المقرّرة.',
  },
  'poetry.edexcel_lang.cta': { en: 'Go to Language A anthology', ar: 'روح لمختارات Language A' },
  'poetry.a_level.title': {
    en: "A-Level poetry isn't an anthology cluster",
    ar: 'شِعر A-Level مو مجموعة مختارات',
  },
  'poetry.a_level.description': {
    en: 'At A-Level, poetry is studied as part of a wider literature paper, not as a separate cluster. Use the unified hub to access your A-Level-specific resources.',
    ar: 'في A-Level، الشِعر يتدرّس كجزء من ورقة أدب أوسع، مو كمجموعة مستقلّة. استخدم المركز الموحّد عشان مواد A-Level مالتك.',
  },
  'poetry.a_level.cta': { en: 'Open your A-Level hub', ar: 'افتح مركز A-Level' },
  'poetry.ial.title': {
    en: 'Edexcel IAL English Literature',
    ar: 'Edexcel IAL English Literature',
  },
  'poetry.ial.description': {
    en: "The IAL Literature paper draws on Edexcel's anthology. Open your IAL hub for spec-specific resources.",
    ar: 'ورقة IAL Literature تعتمد على مختارات Edexcel. افتح مركز IAL مالك عشان المواد المخصّصة للمواصفات.',
  },
  'poetry.ial.cta': { en: 'Open IAL hub', ar: 'افتح مركز IAL' },
  'poetry.ks3.title': {
    en: 'KS3 poetry is themed, not anthology-based',
    ar: 'شِعر KS3 بحسب التيمات، مو بحسب المختارات',
  },
  'poetry.ks3.description': {
    en: 'KS3 lessons cover a rotating set of poems by theme rather than a fixed anthology. Use the unified KS3 hub for your year-group resources.',
    ar: 'دروس KS3 تغطّي مجموعة قصايد متغيّرة بحسب التيم، مو مختارات ثابتة. استخدم مركز KS3 الموحّد عشان مواد مرحلتك.',
  },
  'poetry.ks3.cta': { en: 'Open KS3 hub', ar: 'افتح مركز KS3' },
  'poetry.seo.h2_marked': {
    en: 'How GCSE English poetry is marked',
    ar: 'كيف ينصحح شِعر GCSE English',
  },
  'poetry.seo.h2_aos': { en: 'AO1 vs AO2 vs AO3 in poetry', ar: 'AO1 و AO2 و AO3 في الشِعر' },
  'poetry.seo.h2_comparison': {
    en: 'Poetry comparison questions explained',
    ar: 'شرح أسئلة المقارنة في الشِعر',
  },
  'poetry.seo.about_h2': {
    en: 'About GCSE English poetry revision',
    ar: 'عن مراجعة شِعر GCSE English',
  },
  'poetry.anthology_links.heading_your': { en: 'Your anthology', ar: 'مختاراتك' },
  'poetry.anthology_links.heading_other': {
    en: 'Other anthologies on the platform',
    ar: 'مختارات ثانية في المنصّة',
  },
  'poetry.anthology_links.heading_generic': {
    en: 'Anthology-specific revision',
    ar: 'مراجعة بحسب المختارات',
  },
  'poetry.anthology_links.fallback_note': {
    en: 'Your selected board does not have a dedicated anthology in this section. Other boards are listed below for reference — each is labelled with the board it belongs to.',
    ar: 'بوردك ما عنده مختارات مخصّصة في هالقسم. تحت لك بقية البوردات للاسترشاد — كل وحدة مكتوب عليها البورد مالها.',
  },
  'poetry.cluster.open': { en: 'Open', ar: 'افتح' },

  // ─── Texts hub page (revision/texts top-level) ───────────────────────
  'texts.boardless.h2': {
    en: 'GCSE English Literature set texts — revision library',
    ar: 'النصوص المقرّرة لـ GCSE English Literature — مكتبة المراجعة',
  },
  'texts.boardless.intro': {
    en: 'Choose a text to see full revision notes, character maps, theme trackers, model paragraphs, and past-paper practice. Each entry below is tagged with the boards that prescribe it — pick your exam board to filter to just yours.',
    ar: 'اختر نص عشان تشوف ملاحظات المراجعة الكاملة وخرائط الشخصيات وتتبّع التيمات وفقرات نموذجية وتمارين من امتحانات سابقة. كل عنوان تحت مكتوب عليه البورد اللي يقرّره — اختر بوردك عشان نوريك مالك بس.',
  },
  'texts.section.shakespeare': { en: 'Shakespeare', ar: 'شكسبير' },
  'texts.section.c19_novel': { en: '19th-century novel', ar: 'روايات القرن التاسع عشر' },
  'texts.section.modern_prose_drama': { en: 'Modern prose + drama', ar: 'النثر والدراما الحديثة' },
  'texts.section.igcse_a_level': { en: 'IGCSE + A-Level texts', ar: 'نصوص IGCSE و A-Level' },
  'texts.section.pearson_anthology': {
    en: 'Pearson IGCSE Language A (4EA1) anthology',
    ar: 'مختارات Pearson IGCSE Language A (4EA1)',
  },
  'texts.section.pearson_anthology_note': {
    en: 'Section A non-fiction, Section B poetry and Section C prose for the Pearson Edexcel International GCSE English Language A specification.',
    ar: 'Section A نصوص غير قصصية، Section B شِعر، و Section C نثر — لمواصفات Pearson Edexcel International GCSE English Language A.',
  },
  'texts.label.non_fiction': { en: 'Non-fiction:', ar: 'نصوص غير قصصية:' },
  'texts.label.poetry': { en: 'Poetry:', ar: 'شِعر:' },
  'texts.label.prose': { en: 'Prose:', ar: 'نثر:' },
  'texts.coming_soon': { en: 'Coming soon', ar: 'قريب' },
  'texts.personalise.title': { en: 'Personalise your revision', ar: 'فصّل مراجعتك على بوردك' },
  'texts.personalise.body': {
    en: "Pick your exam board to filter the texts above to just the ones you're sitting, and to unlock progress tracking.",
    ar: 'اختر بوردك عشان نفلتر النصوص فوق على اللي بتدخل امتحانهم بس، وعشان تفتح متابعة التقدّم.',
  },
  'texts.personalise.cta': { en: 'Choose your exam board', ar: 'اختر بورد الامتحان مالك' },

  // ─── Anthology hub page (igcse/edexcel-lang/anthology) ───────────────
  'anth_page.back_to_lang_a': { en: 'Back to Language A', ar: 'رجوع لـ Language A' },
  'anth_page.badge_paper': { en: 'Paper 1 Section A', ar: 'Paper 1 Section A' },
  'anth_page.badge_texts_count': { en: '10 texts', ar: '١٠ نصوص' },
  'anth_page.hero_title': {
    en: 'Paper 1 Section A — Anthology Non-Fiction',
    ar: 'Paper 1 Section A — نصوص غير قصصية من المختارات',
  },
  'anth_page.hero_lead_pre': {
    en: 'Ten prescribed non-fiction texts for Edexcel IGCSE English Language A Paper 1. Each text has been analysed with',
    ar: 'عشر نصوص غير قصصية مقرّرة لـ Edexcel IGCSE English Language A Paper 1. كل نص متحلّل مع',
  },
  'anth_page.hero_lf': { en: 'language features', ar: 'الخصائص اللغوية' },
  'anth_page.hero_sa': { en: 'structural analysis', ar: 'التحليل البنائي' },
  'anth_page.hero_vocab': { en: 'key vocabulary', ar: 'الكلمات المفتاحية' },
  'anth_page.hero_practice': {
    en: 'exam-style practice questions',
    ar: 'أسئلة تمرينية على شكل امتحان',
  },
  'anth_page.hero_lead_and': { en: 'and', ar: 'و' },
  'anth_page.cta_start_studying': { en: 'Start studying', ar: 'ابدأ المذاكرة' },
  'anth_page.version_warning_label': {
    en: 'Anthology version warning:',
    ar: 'تنبيه نسخة المختارات:',
  },
  'anth_page.version_warning_body': {
    en: 'This site teaches the Edexcel IGCSE Anthology Issue 2 (ISBN 978-1-446-93108-0, Pearson Education). Two of the non-fiction texts in this Paper 1 Section A anthology are adapted versions that differ from their freely-available online originals.',
    ar: 'هذا الموقع يدرّس Edexcel IGCSE Anthology Issue 2 (ISBN 978-1-446-93108-0, Pearson Education). نصّين من النصوص غير القصصية في Paper 1 Section A نسخ معدّلة تختلف عن الأصول المتاحة أونلاين ببلاش.',
  },
  'anth_page.use_anthology_emph': {
    en: 'Always use the anthology version',
    ar: 'استخدم نسخة المختارات دايماً',
  },
  'anth_page.use_anthology_body': {
    en: 'when answering Edexcel exam questions — examiners will mark against the anthology text, not the Guardian originals you may find on revision websites.',
    ar: 'لما تجاوب أسئلة Edexcel — المصحّحون يصحّحون بناءً على نص المختارات، مو نسخ The Guardian اللي تلقاها في مواقع المراجعة.',
  },
  'anth_page.texts_heading': { en: 'All 10 Anthology Texts', ar: 'كل الـ١٠ نصوص من المختارات' },
  'anth_page.texts_intro': {
    en: "Each text page includes key extracts, language and structural analysis, writer's purpose, vocabulary, exam practice and comparison links. Select a text to begin your study.",
    ar: 'كل صفحة نص فيها مقاطع أساسية وتحليل لغوي وبنائي وأهداف الكاتب والمفردات وتمارين امتحان وروابط المقارنة. اختر نص عشان تبدأ.',
  },
  'anth_page.text_index_prefix': { en: 'Text', ar: 'نص' },
  'anth_page.study_this_text': { en: 'Study this text', ar: 'ذاكر هذا النص' },
  'anth_page.expect_heading': {
    en: 'Paper 1 Section A — What to Expect',
    ar: 'Paper 1 Section A — شنو تتوقّع',
  },
  'anth_page.expect_intro': {
    en: 'In Paper 1 Section A you will be given an extract from one of the ten anthology texts. You will answer three types of question:',
    ar: 'في Paper 1 Section A بيعطونك مقطع من أحد النصوص العشرة. بتجاوب على ثلاث أنواع أسئلة:',
  },
  'anth_page.expect_q1_label': { en: 'Retrieval (Q1):', ar: 'الاسترجاع (Q1):' },
  'anth_page.expect_q1_body': {
    en: '"List four things about..." — straightforward identification of information from the text. Worth 4 marks.',
    ar: '"اذكر أربعة أشياء عن…" — استخراج مباشر للمعلومات من النص. القيمة ٤ درجات.',
  },
  'anth_page.expect_q2_label': { en: 'Language analysis (Q2):', ar: 'تحليل اللغة (Q2):' },
  'anth_page.expect_q2_body': {
    en: '"How does the writer use language to..." — close analysis of specific techniques and their effects on the reader. Worth 12 marks.',
    ar: '"كيف يستخدم الكاتب اللغة عشان…" — تحليل دقيق لتقنيات معيّنة وأثرها على القارئ. القيمة ١٢ درجة.',
  },
  'anth_page.expect_q3_label': { en: 'Structural analysis (Q3):', ar: 'تحليل البنية (Q3):' },
  'anth_page.expect_q3_body': {
    en: '"How does the writer structure the text to..." — analysis of how the text is organised to engage and influence the reader. Worth 12 marks.',
    ar: '"كيف يبني الكاتب النص عشان…" — تحليل كيف ينظّم النص ليجذب القارئ ويؤثّر فيه. القيمة ١٢ درجة.',
  },
  'anth_page.study_all_note': {
    en: 'You should study all ten texts. You will not know which text will appear in the exam until you open the paper.',
    ar: 'لازم تذاكر كل النصوص العشرة. ما بتعرف أي نص بيجي في الامتحان لين تفتح الورقة.',
  },
  'anth_page.footer_align': {
    en: 'Aligned with Pearson Edexcel specification 4EA1 · Paper 1 Section A',
    ar: 'متوافق مع مواصفات Pearson Edexcel 4EA1 · Paper 1 Section A',
  },

  // ─── Anthology per-text sub-pages (shared scaffolding) ─────────────
  'anth_text.back_to_anthology': { en: 'Back to Anthology', ar: 'رجوع للمختارات' },
  'anth_text.badge_lang_a': {
    en: 'Edexcel IGCSE Language A',
    ar: 'Edexcel IGCSE Language A',
  },
  'anth_text.badge_paper_1a': { en: 'Paper 1 Section A', ar: 'Paper 1 Section A' },
  'anth_text.section.context': { en: 'Context', ar: 'السياق' },
  'anth_text.section.themes': { en: 'Themes', ar: 'الموضوعات' },
  'anth_text.section.extract_focuses': { en: 'Extract Focuses', ar: 'محاور المقتطف' },
  'anth_text.section.extract_focuses.intro': {
    en: 'Key moments in the extract and what each one is doing structurally and thematically. Refer to the licensed anthology for the exact wording.',
    ar: 'لحظات مفتاحيّة في المقتطف ووظيفة كلٍّ منها بنائيّاً وموضوعيّاً. ارجع إلى المختارات المرخّصة للنصّ الحرفيّ.',
  },
  'anth_text.section.language_analysis': { en: 'Language Analysis', ar: 'تحليل اللغة' },
  'anth_text.section.language_analysis.intro': {
    en: 'Key language features used by the writer and their effects on the reader. Discussed by technique rather than by quotation; bring exact wording from your anthology when you write up answers.',
    ar: 'الخصائص اللغويّة الرئيسة عند الكاتب وأثرها في القارئ. النقاش هنا بحسب الأسلوب لا بحسب الاقتباس؛ احضر النصّ الحرفيّ من مختاراتك حين تحرّر إجاباتك.',
  },
  'anth_text.section.structural_analysis': { en: 'Structural Analysis', ar: 'التحليل البنائيّ' },
  'anth_text.section.structural.opening': { en: 'Opening', ar: 'الافتتاح' },
  'anth_text.section.structural.development': { en: 'Development', ar: 'التطوّر' },
  'anth_text.section.structural.climax': { en: 'Climax', ar: 'الذروة' },
  'anth_text.section.structural.resolution': { en: 'Resolution', ar: 'الخاتمة' },
  'anth_text.section.structural.perspective': {
    en: 'Narrative perspective',
    ar: 'منظور السرد',
  },
  'anth_text.section.writers_purpose': { en: "Writer's Purpose", ar: 'مقصد الكاتب' },
  'anth_text.writers_purpose.achieve': {
    en: 'What is the writer trying to achieve?',
    ar: 'ما الذي يسعى الكاتب إلى تحقيقه؟',
  },
  'anth_text.writers_purpose.reader_feel': {
    en: 'How does the writer want the reader to feel?',
    ar: 'كيف يريد الكاتب أن يشعر القارئ؟',
  },
  'anth_text.writers_purpose.message': {
    en: 'Central message or argument',
    ar: 'الرسالة المركزيّة أو الحُجّة',
  },
  'anth_text.section.exam_practice': { en: 'Exam Practice', ar: 'تدريب الامتحان' },
  'anth_text.exam.model_outline': { en: 'Model answer outline', ar: 'مخطّط الإجابة النموذجيّة' },
  'anth_text.section.compare_with': { en: 'Compare With', ar: 'قارن مع' },
  'anth_text.compare_with.intro': {
    en: 'Strong pairings for comparison questions in the exam.',
    ar: 'مقارنات قويّة لأسئلة المقابلة في الامتحان.',
  },
  'anth_text.rebuilt_label': {
    en: 'Page rebuilt April 2026.',
    ar: 'أُعيد بناء الصفحة في أبريل 2026.',
  },
  'anth_text.rebuilt_body': {
    en: 'This page has been rewritten to remove unverifiable direct quotations. Analysis discusses structure, technique and effect without putting specific words into the writer’s mouth. For the exact text of the extract, students should use the licensed Pearson Edexcel anthology.',
    ar: 'أُعيدت كتابة هذه الصفحة لإزالة الاقتباسات الحرفيّة غير الموثّقة. يناقش التحليلُ البنية والأسلوب والأثر دون أن ينسب ألفاظاً بعينها إلى الكاتب. للحصول على النصّ الحرفيّ للمقتطف، ينبغي للطلاب الرجوع إلى مختارات Pearson Edexcel المرخّصة.',
  },
  'anth_text.rights_notice_label': { en: 'Rights notice:', ar: 'إشعار الحقوق:' },
  'anth_text.footer_align': {
    en: 'Aligned with Pearson Edexcel specification 4EA1.',
    ar: 'متوافق مع مواصفات Pearson Edexcel 4EA1.',
  },
  'anth_text.moment_prefix': { en: 'Moment', ar: 'لحظة' },
  'anth_text.section.key_moments': { en: 'Key Moments', ar: 'اللحظات المفتاحيّة' },
  'anth_text.use_with_anthology': {
    en: 'Use with your anthology',
    ar: 'استعمله مع مختاراتك',
  },
  'anth_text.key_moments.intro': {
    en: 'Map of the extract’s key moments. Look up the exact wording in your licensed anthology.',
    ar: 'خريطةُ اللحظات المفتاحيّة في المقتطف. ابحث عن النصّ الحرفيّ في مختاراتك المرخّصة.',
  },
  'anth_text.teacher_note': { en: 'Teacher note', ar: 'ملاحظة المعلّم' },
  'anth_text.section.key_vocabulary': { en: 'Key Vocabulary', ar: 'المفردات المفتاحيّة' },
  'anth_text.section.structural.paragraphing': {
    en: 'Paragraph structure',
    ar: 'بنية الفقرات',
  },
  'anth_text.section.structural.time': { en: 'Use of time', ar: 'توظيف الزمن' },
  'anth_text.section.structural.opening_closing': {
    en: 'Opening & closing techniques',
    ar: 'أساليب الافتتاح والختام',
  },
  'anth_text.section.structural.tone': { en: 'Tone', ar: 'النبرة' },
  'anth_text.section.structural.voice_shift': {
    en: 'Shifts in voice',
    ar: 'تبدّلات الصوت',
  },
  'anth_text.section.structural.repetition': {
    en: 'Repetition and motif',
    ar: 'التكرار والموتيف',
  },
  'anth_text.section.structural.imagery': { en: 'Imagery', ar: 'الصور البلاغيّة' },
  'anth_text.writers_purpose.achieve_past': {
    en: 'What was the writer trying to achieve?',
    ar: 'ما الذي كان الكاتب يسعى إلى تحقيقه؟',
  },
  'anth_text.writers_purpose.reader_feel_past': {
    en: 'How did the writer want the reader to feel?',
    ar: 'كيف أراد الكاتب أن يشعر القارئ؟',
  },
  'anth_text.section.key_extracts': { en: 'Key Extracts', ar: 'مقاطع مفتاحيّة' },
  'anth_text.section.language_analysis.guidance_intro': {
    en: 'Key language techniques to look for in the anthology extract. Specific quotations will be added after primary-source review — for now, locate examples in your licensed anthology and apply the guidance below.',
    ar: 'تقنيّات لغويّة رئيسة لرصدها في المقتطف من المختارات. ستُضاف الاقتباسات المحدّدة بعد مراجعة المصادر الأوليّة — لحينه، حدّد الأمثلة في مختاراتك المرخّصة وطبّق الإرشاد أدناه.',
  },

  // ─── Model answers (grade tabs + summary) ───────────────────────────
  'model_answers.grade.label.9': { en: 'Grade 9', ar: 'الدرجة ٩' },
  'model_answers.grade.label.7': { en: 'Grade 7', ar: 'الدرجة ٧' },
  'model_answers.grade.label.5': { en: 'Grade 5', ar: 'الدرجة ٥' },
  'model_answers.grade.label.3': { en: 'Grade 3', ar: 'الدرجة ٣' },
  'model_answers.grade.descriptor.exceptional': { en: 'Exceptional', ar: 'ممتاز وايد' },
  'model_answers.grade.descriptor.strong': { en: 'Strong', ar: 'قوي' },
  'model_answers.grade.descriptor.solid': { en: 'Solid', ar: 'زين' },
  'model_answers.grade.descriptor.developing': { en: 'Developing', ar: 'في تطوّر' },
  'model_answers.summary.heading_prefix': {
    en: 'What makes this a',
    ar: 'شنو اللي يخلّيها',
  },
  'model_answers.tabs.empty': {
    en: 'No model answer available for',
    ar: 'ما في إجابة نموذجية الحين لـ',
  },
  'model_answers.tabs.empty_suffix': { en: 'yet.', ar: '.' },

  // ─── Profile (DOB nudge banner) ─────────────────────────────────────
  'profile.dob.title': {
    en: 'Please confirm your date of birth',
    ar: 'لو سمحت، أكّد تاريخ ميلادك',
  },
  'profile.dob.body': {
    en: "We're missing this from your profile. It helps us give the right age-appropriate experience and meet our safeguarding obligations.",
    ar: 'الحين هذا ناقص من ملفك الشخصي. يساعدنا نعطيك تجربة مناسبة لعمرك ونلتزم بالتزامات الحماية مالنا.',
  },
  'profile.dob.input_label': { en: 'Date of birth', ar: 'تاريخ الميلاد' },
  'profile.dob.save': { en: 'Save', ar: 'احفظ' },
  'profile.dob.saving': { en: 'Saving…', ar: 'لحظة، نحفظ…' },
  'profile.dob.saved': { en: 'Saved', ar: 'انحفظ' },
  'profile.dob.dismiss_label': {
    en: 'Dismiss for 24 hours',
    ar: 'سكّر لمدة ٢٤ ساعة',
  },
  'profile.dob.error_generic': {
    en: 'Something went wrong',
    ar: 'صار في خطأ',
  },

  // ─── Recommendations (cards + section) ──────────────────────────────
  'recommend.section.title': {
    en: 'Recommended for you',
    ar: 'موصى به لك',
  },
  'recommend.priority.high': { en: 'High priority', ar: 'أولوية عالية' },
  'recommend.priority.medium': { en: 'Suggested', ar: 'نقترح عليك' },
  'recommend.priority.low': { en: 'Optional', ar: 'اختياري' },
  'recommend.card.dismiss_label_prefix': {
    en: 'Dismiss recommendation:',
    ar: 'سكّر التوصية:',
  },

  // ─── Teacher pages (public marketing + library + demo + school admin) ──
  // Used by:
  //   /resources/teacher-library    -> teacher_page.library.*
  //   /demo/teacher                  -> teacher_page.demo.*
  //   /school/teachers               -> teacher_page.school_admin.*
  // (Dashboard surfaces under /dashboard/teacher/* keep their own teacher.* keys.)
  'teacher_page.library.eyebrow': { en: 'For Teachers', ar: 'للمعلمين' },
  'teacher_page.library.eyebrow_board_prefix': { en: 'For', ar: 'لـ' },
  'teacher_page.library.title': { en: 'Teacher Resources Library', ar: 'مكتبة موارد المعلم' },
  'teacher_page.library.subtitle': {
    en: 'Free, classroom-ready teaching resources for GCSE English. Everything you need — planned, printable, and ready to use tomorrow. No sign-up required.',
    ar: 'موارد تدريس ببلاش وجاهزة للفصل لـ GCSE English. كل اللي تحتاجه — مخطّط، قابل للطباعة، وجاهز تستخدمه بكرة. ما يحتاج تسجيل.',
  },
  'teacher_page.library.badge.free': { en: '100% free', ar: 'ببلاش 100٪' },
  'teacher_page.library.badge.no_account': { en: 'No account needed', ar: 'ما يحتاج حساب' },
  'teacher_page.library.badge.boards': {
    en: 'AQA / Edexcel / OCR / Eduqas',
    ar: 'AQA / Edexcel / OCR / Eduqas',
  },
  'teacher_page.library.browse_heading': { en: 'Browse by category', ar: 'تصفّح حسب التصنيف' },
  'teacher_page.library.browse_cta': { en: 'Browse resources', ar: 'شوف الموارد' },
  'teacher_page.library.footer_title': {
    en: 'Looking for something specific?',
    ar: 'تدوّر شي معيّن؟',
  },
  'teacher_page.library.footer_body': {
    en: 'Browse our full teaching resources hub for assessment tools, exam specs, and printable classroom materials.',
    ar: 'تصفّح هب موارد التدريس الكامل لأدوات التقييم، مواصفات الامتحان، ومواد الفصل القابلة للطباعة.',
  },
  'teacher_page.library.footer_link': { en: 'Visit main teaching hub', ar: 'روح للهب الرئيسي' },

  // Library category cards
  'teacher_page.library.cat.lesson_plans.title': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'teacher_page.library.cat.lesson_plans.kind': { en: 'Lesson Plan', ar: 'خطة درس' },
  'teacher_page.library.cat.lesson_plans.count': { en: '20 plans', ar: '٢٠ خطة' },
  'teacher_page.library.cat.lesson_plans.desc': {
    en: 'Full 60-minute lesson plans with learning objectives, starters, main activities, plenaries, and differentiation notes.',
    ar: 'خطط دروس كاملة ٦٠ دقيقة مع أهداف التعلّم، أنشطة افتتاحية، أنشطة رئيسية، خاتمة، وملاحظات التمييز.',
  },
  'teacher_page.library.cat.worksheets.title': { en: 'Worksheets', ar: 'أوراق عمل' },
  'teacher_page.library.cat.worksheets.kind': { en: 'Worksheet', ar: 'ورقة عمل' },
  'teacher_page.library.cat.worksheets.count': { en: '25 worksheets', ar: '٢٥ ورقة عمل' },
  'teacher_page.library.cat.worksheets.desc': {
    en: 'Print-ready student worksheets for comprehension, analysis, writing scaffolds, and exam skills practice.',
    ar: 'أوراق عمل جاهزة للطباعة للفهم، التحليل، دعم الكتابة، وتدريب مهارات الامتحان.',
  },
  'teacher_page.library.cat.mark_schemes.title': { en: 'Mark Schemes', ar: 'جداول التصحيح' },
  'teacher_page.library.cat.mark_schemes.kind': { en: 'Mark Scheme', ar: 'جدول تصحيح' },
  'teacher_page.library.cat.mark_schemes.count': {
    en: 'All major boards',
    ar: 'كل البوردات الرئيسية',
  },
  'teacher_page.library.cat.mark_schemes.desc': {
    en: 'AQA, Edexcel, OCR, and Eduqas mark scheme references with grade descriptors and assessment objectives.',
    ar: 'مراجع جداول تصحيح لـ AQA, Edexcel, OCR, Eduqas مع واصفات الدرجات وأهداف التقييم.',
  },
  'teacher_page.library.cat.revision_packs.title': { en: 'Revision Packs', ar: 'حزم مراجعة' },
  'teacher_page.library.cat.revision_packs.kind': { en: 'Revision Pack', ar: 'حزمة مراجعة' },
  'teacher_page.library.cat.revision_packs.count': {
    en: 'Set text packs',
    ar: 'حزم النصوص المقررة',
  },
  'teacher_page.library.cat.revision_packs.desc': {
    en: 'Ready-made revision booklets by set text — quote banks, theme notes, character analysis, and essay plans.',
    ar: 'كتيّبات مراجعة جاهزة لكل نص مقرر — بنوك اقتباسات، ملاحظات مواضيع، تحليل شخصيات، وخطط مقالات.',
  },
  'teacher_page.library.cat.starters.title': { en: 'Starter Activities', ar: 'أنشطة افتتاحية' },
  'teacher_page.library.cat.starters.kind': { en: 'Starter', ar: 'افتتاحية' },
  'teacher_page.library.cat.starters.count': { en: '20 starters', ar: '٢٠ نشاط افتتاحي' },
  'teacher_page.library.cat.starters.desc': {
    en: '20 quick 5-minute starters to hook your class — vocabulary, retrieval practice, analysis warm-ups.',
    ar: '٢٠ نشاط افتتاحي سريع ٥ دقائق يشد فصلك — مفردات، تدريب استرجاع، تسخين تحليل.',
  },
  'teacher_page.library.cat.homework.title': { en: 'Homework Tasks', ar: 'مهام منزلية' },
  'teacher_page.library.cat.homework.kind': { en: 'Homework', ar: 'واجب' },
  'teacher_page.library.cat.homework.count': { en: 'Task library', ar: 'مكتبة المهام' },
  'teacher_page.library.cat.homework.desc': {
    en: 'Meaningful homework tasks that extend classroom learning without creating a marking mountain.',
    ar: 'مهام منزلية ذات معنى تمد التعلّم الصفي بدون ما تكدّس جبل تصحيح.',
  },

  // /demo/teacher dashboard chrome
  'teacher_page.demo.banner_eyebrow': { en: 'Teacher Demo', ar: 'ديمو المعلم' },
  'teacher_page.demo.banner_body': {
    en: 'See what your dashboard looks like',
    ar: 'شوف شكل لوحتك',
  },
  'teacher_page.demo.welcome_prefix': { en: 'Welcome back,', ar: 'حياك الله،' },
  'teacher_page.demo.department_suffix': {
    en: 'Department — Riverside Academy',
    ar: 'القسم — Riverside Academy',
  },
  'teacher_page.demo.stat.classes': { en: 'Classes', ar: 'الفصول' },
  'teacher_page.demo.stat.classes_sub': { en: 'Across Years 10-13', ar: 'في السنوات ١٠–١٣' },
  'teacher_page.demo.stat.students': { en: 'Students', ar: 'الطلاب' },
  'teacher_page.demo.stat.students_sub': { en: 'need attention', ar: 'يحتاجون انتباه' },
  'teacher_page.demo.stat.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجات' },
  'teacher_page.demo.stat.grade_prefix': { en: 'Grade', ar: 'درجة' },
  'teacher_page.demo.stat.term_change': { en: '+2% this term', ar: '+٢٪ هذا الترم' },
  'teacher_page.demo.stat.due_soon': { en: 'Due Soon', ar: 'قريب التسليم' },
  'teacher_page.demo.stat.awaiting_marking': { en: 'awaiting marking', ar: 'بانتظار التصحيح' },
  'teacher_page.demo.at_risk_heading_suffix': { en: 'Students At Risk', ar: 'طالب في خطر' },
  'teacher_page.demo.classes_heading': { en: 'My Classes', ar: 'فصولي' },
  'teacher_page.demo.year_prefix': { en: 'Year', ar: 'السنة' },
  'teacher_page.demo.avg_score_label': { en: 'avg score', ar: 'متوسط الدرجة' },
  'teacher_page.demo.students_label': { en: 'students', ar: 'طلاب' },
  'teacher_page.demo.at_risk_short': { en: 'at risk', ar: 'في خطر' },
  'teacher_page.demo.todays_lessons': { en: "Today's Lessons", ar: 'دروس اليوم' },
  'teacher_page.demo.assignments_due': { en: 'Assignments Due', ar: 'الواجبات المستحقة' },
  'teacher_page.demo.marking_queue': { en: 'Marking Queue', ar: 'قائمة التصحيح' },
  'teacher_page.demo.marked_prefix': { en: 'marked', ar: 'تم تصحيح' },
  'teacher_page.demo.total_prefix': { en: 'total', ar: 'الإجمالي' },
  'teacher_page.demo.needs_marking': { en: 'Needs Marking', ar: 'يحتاج تصحيح' },
  'teacher_page.demo.submitted_label': { en: 'submitted', ar: 'تم التسليم' },
  'teacher_page.demo.view_btn': { en: 'View', ar: 'شوف' },
  'teacher_page.demo.all_caught_up': { en: 'All caught up!', ar: 'كل شي تمام!' },
  'teacher_page.demo.class_performance': { en: 'Class Performance', ar: 'أداء الفصول' },
  'teacher_page.demo.quick_actions': { en: 'Quick Actions', ar: 'إجراءات سريعة' },
  'teacher_page.demo.qa.lesson_builder_label': { en: 'Lesson Builder', ar: 'بنّاء الدروس' },
  'teacher_page.demo.qa.lesson_builder_desc': {
    en: 'Plan and create lessons',
    ar: 'خطّط وأنشئ دروس',
  },
  'teacher_page.demo.qa.my_students_label': { en: 'My Students', ar: 'طلابي' },
  'teacher_page.demo.qa.my_students_desc': {
    en: 'View student profiles',
    ar: 'شوف ملفات الطلاب',
  },
  'teacher_page.demo.qa.resources_label': { en: 'Resources', ar: 'الموارد' },
  'teacher_page.demo.qa.resources_desc': { en: 'Teaching materials', ar: 'مواد التدريس' },
  'teacher_page.demo.qa.markbook_label': { en: 'Mark Book', ar: 'دفتر الدرجات' },
  'teacher_page.demo.qa.markbook_desc': { en: 'Grades and records', ar: 'درجات وسجلات' },
  'teacher_page.demo.cta_title': {
    en: 'Ready to use this with your own classes?',
    ar: 'جاهز تستخدمها مع فصولك؟',
  },
  'teacher_page.demo.cta_body': {
    en: 'Get real-time student analytics, AI-powered essay marking, and lesson planning tools — all in one place.',
    ar: 'احصل على تحليلات طلاب لحظية، تصحيح مقالات بـ AI، وأدوات تخطيط دروس — كلها في مكان واحد.',
  },
  'teacher_page.demo.cta_btn': { en: 'Start Your Free Trial', ar: 'ابدأ التجربة المجانية' },

  // /school/teachers admin chrome
  'teacher_page.school_admin.role.teacher': { en: 'Teacher', ar: 'معلم' },
  'teacher_page.school_admin.role.head_of_dept': { en: 'Head of Dept', ar: 'رئيس القسم' },
  'teacher_page.school_admin.role.admin': { en: 'Admin', ar: 'أدمن' },
  'teacher_page.school_admin.status.active': { en: 'Active', ar: 'فعّال' },
  'teacher_page.school_admin.status.inactive': { en: 'Inactive', ar: 'غير فعّال' },
  'teacher_page.school_admin.status.suspended': { en: 'Suspended', ar: 'موقوف' },
  'teacher_page.school_admin.never': { en: 'Never', ar: 'أبداً' },
  'teacher_page.school_admin.just_now': { en: 'Just now', ar: 'الحين' },
  'teacher_page.school_admin.minutes_ago_suffix': { en: 'minutes ago', ar: 'دقيقة' },
  'teacher_page.school_admin.today': { en: 'Today', ar: 'اليوم' },
  'teacher_page.school_admin.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'teacher_page.school_admin.days_ago_suffix': { en: 'days ago', ar: 'يوم' },
  'teacher_page.school_admin.one_week_ago': { en: '1 week ago', ar: 'قبل أسبوع' },
  'teacher_page.school_admin.weeks_ago_suffix': { en: 'weeks ago', ar: 'أسابيع' },
  'teacher_page.school_admin.one_month_ago': { en: '1 month ago', ar: 'قبل شهر' },
  'teacher_page.school_admin.months_ago_suffix': { en: 'months ago', ar: 'شهر' },
  'teacher_page.school_admin.actions_aria': { en: 'Teacher actions', ar: 'إجراءات المعلم' },
  'teacher_page.school_admin.action.edit': { en: 'Edit Teacher', ar: 'عدّل المعلم' },
  'teacher_page.school_admin.action.reset_password': {
    en: 'Reset Password',
    ar: 'إعادة تعيين كلمة المرور',
  },
  'teacher_page.school_admin.action.suspend': { en: 'Suspend', ar: 'أوقف' },
  'teacher_page.school_admin.action.unsuspend': { en: 'Unsuspend', ar: 'فعّل' },
  'teacher_page.school_admin.action.remove': { en: 'Remove from School', ar: 'احذف من المدرسة' },
  'teacher_page.school_admin.dialog.remove_title': { en: 'Remove Teacher', ar: 'حذف معلم' },
  'teacher_page.school_admin.dialog.remove_body_pre': {
    en: 'Are you sure you want to remove',
    ar: 'متأكد تبغى تحذف',
  },
  'teacher_page.school_admin.dialog.remove_body_post': {
    en: 'from your school? Their classes will become unassigned.',
    ar: 'من مدرستك؟ فصوله راح تصير بدون تعيين.',
  },
  'teacher_page.school_admin.dialog.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'teacher_page.school_admin.dialog.confirm_remove': { en: 'Remove Teacher', ar: 'احذف المعلم' },

  // ─── Onboarding (/school/onboarding 5-step wizard) ────────────────────
  // Brief asks for `onboarding.*` namespace; this is the only onboarding
  // surface that exists in the app. School-admin-only — addresses the
  // founder/admin (M default per binary gender policy).
  'onboarding.brand_suffix': { en: 'Setup', ar: 'الإعداد' },
  'onboarding.skip_to_dashboard': {
    en: 'Skip setup, go to dashboard',
    ar: 'تخطّ الإعداد، روح للوحة',
  },
  'onboarding.step_label_prefix': { en: 'Step', ar: 'الخطوة' },
  'onboarding.step_of': { en: 'of', ar: 'من' },
  'onboarding.percent_complete_suffix': { en: '% complete', ar: '٪ مكتمل' },
  'onboarding.step.welcome': { en: 'Welcome', ar: 'حياك الله' },
  'onboarding.step.teachers': { en: 'Teachers', ar: 'المعلمون' },
  'onboarding.step.students': { en: 'Students', ar: 'الطلاب' },
  'onboarding.step.classes': { en: 'Classes', ar: 'الفصول' },
  'onboarding.step.complete': { en: 'Complete', ar: 'تمام' },

  // Step 1 — Welcome screen
  'onboarding.s1.founder_badge': { en: 'FOUNDER ACCESS', ar: 'وصول FOUNDER' },
  'onboarding.s1.welcome_prefix': {
    en: 'Welcome to The English Hub,',
    ar: 'حياك الله في The English Hub،',
  },
  'onboarding.s1.intro': {
    en: 'Your school account is ready. This short wizard will help you configure teachers, students, and your first class in just a few minutes.',
    ar: 'حساب مدرستك جاهز. هذا المساعد القصير راح يساعدك تعدّ المعلمين والطلاب وأول فصل خلال دقائق.',
  },
  'onboarding.s1.access_heading': {
    en: 'What you have access to',
    ar: 'وش عندك صلاحية له',
  },
  'onboarding.s1.access.0': {
    en: 'FOUNDER access active until August 2026',
    ar: 'صلاحية FOUNDER فعّالة لحد أغسطس ٢٠٢٦',
  },
  'onboarding.s1.access.1': {
    en: 'Unlimited teachers and students',
    ar: 'معلمين وطلاب بلا حدود',
  },
  'onboarding.s1.access.2': {
    en: 'All resources, lessons, and worksheets',
    ar: 'كل الموارد والدروس وأوراق العمل',
  },
  'onboarding.s1.access.3': {
    en: 'Assignments, progress tracking, and analytics',
    ar: 'واجبات وتتبّع تقدّم وتحليلات',
  },
  'onboarding.s1.access.4': {
    en: 'Priority support and early feature access',
    ar: 'دعم أولوية ووصول مبكّر للميزات',
  },
  'onboarding.s1.cta': { en: 'Get Started', ar: 'يلا نبدأ' },

  // Step 2 — Add teachers
  'onboarding.s2.title': { en: 'Add Your Teachers', ar: 'ضيف معلميك' },
  'onboarding.s2.subtitle': {
    en: 'Choose how you would like to bring your teaching staff on board.',
    ar: 'اختر كيف تبغى تضيف طاقمك التدريسي.',
  },
  'onboarding.s2.teachers_count_suffix': { en: 'teachers added', ar: 'معلم مضاف' },
  'onboarding.s2.teacher_added_singular': { en: 'teacher added', ar: 'معلم مضاف' },
  'onboarding.s2.option_a_title': {
    en: 'Option A — Upload Excel / CSV',
    ar: 'الخيار A — حمّل Excel / CSV',
  },
  'onboarding.s2.option_a_body': {
    en: 'Import many teachers at once from a spreadsheet.',
    ar: 'استورد عدد معلمين دفعة وحدة من جدول بيانات.',
  },
  'onboarding.s2.go_to_import': { en: 'Go to Import Tool', ar: 'روح لأداة الاستيراد' },
  'onboarding.s2.option_b_title': {
    en: 'Option B — Invite individually',
    ar: 'الخيار B — ادعُ كل واحد على حدة',
  },
  'onboarding.s2.option_b_body': {
    en: 'Send email invitations to teachers one by one.',
    ar: 'أرسل دعوات إيميل للمعلمين واحد واحد.',
  },
  'onboarding.s2.email_placeholder': {
    en: 'teacher@school.ac.uk',
    ar: 'teacher@school.ac.uk',
  },
  'onboarding.s2.add_btn': { en: 'Add', ar: 'ضيف' },
  'onboarding.s2.remove_btn': { en: 'Remove', ar: 'احذف' },
  'onboarding.s2.send_invites_prefix': { en: 'Send', ar: 'أرسل' },
  'onboarding.s2.send_invites_singular': { en: 'Invite', ar: 'دعوة' },
  'onboarding.s2.send_invites_plural': { en: 'Invites', ar: 'دعوات' },
  'onboarding.s2.sending': { en: 'Sending...', ar: 'يرسل… لحظة' },
  'onboarding.s2.success': {
    en: 'Invites sent. Teachers will receive an email to join.',
    ar: 'تم إرسال الدعوات. المعلمون بيوصلهم إيميل للانضمام.',
  },
  'onboarding.s2.option_c': {
    en: 'Option C — skip for now and continue below.',
    ar: 'الخيار C — تخطّ الحين وكمّل تحت.',
  },
  'onboarding.s2.invite_failed': { en: 'Failed to send invites', ar: 'فشل إرسال الدعوات' },
  'onboarding.s2.generic_error': { en: 'Something went wrong', ar: 'صار في خطأ' },

  // Step 3 — Add students
  'onboarding.s3.title': { en: 'Add Your Students', ar: 'ضيف طلابك' },
  'onboarding.s3.subtitle': {
    en: 'Import a class list or share your school join code.',
    ar: 'استورد قائمة فصل أو شارك كود انضمام المدرسة.',
  },
  'onboarding.s3.students_count_suffix': { en: 'students added', ar: 'طالب مضاف' },
  'onboarding.s3.student_added_singular': { en: 'student added', ar: 'طالب مضاف' },
  'onboarding.s3.option_a_title': {
    en: 'Option A — Upload Excel / CSV',
    ar: 'الخيار A — حمّل Excel / CSV',
  },
  'onboarding.s3.option_a_body': {
    en: 'Import a full year group or class list from a spreadsheet.',
    ar: 'استورد سنة كاملة أو قائمة فصل من جدول بيانات.',
  },
  'onboarding.s3.option_b_title': {
    en: 'Option B — Share your school join code',
    ar: 'الخيار B — شارك كود انضمام المدرسة',
  },
  'onboarding.s3.option_b_body': {
    en: 'Students enter this code to join your school instantly.',
    ar: 'الطلاب يدخلون هذا الكود ليلتحقون بمدرستك على طول.',
  },
  'onboarding.s3.copy_btn': { en: 'Copy', ar: 'انسخ' },
  'onboarding.s3.copied': { en: 'Copied!', ar: 'تم النسخ!' },
  'onboarding.s3.no_code_pre': {
    en: 'No active join code found.',
    ar: 'ما في كود انضمام فعّال.',
  },
  'onboarding.s3.generate_in_settings': {
    en: 'Generate one in Settings.',
    ar: 'أنشئ واحد من الإعدادات.',
  },
  'onboarding.s3.students_visit_pre': { en: 'Students visit', ar: 'الطلاب يروحون' },
  'onboarding.s3.students_visit_post': {
    en: 'and enter the code above.',
    ar: 'ويدخلون الكود فوق.',
  },

  // Step 4 — Create first class
  'onboarding.s4.title': { en: 'Create Your First Class', ar: 'أنشئ أول فصل لك' },
  'onboarding.s4.subtitle': {
    en: 'Set up a class so you can assign resources and track progress.',
    ar: 'سوِّ فصل عشان تقدر تعيّن موارد وتتبّع التقدّم.',
  },
  'onboarding.s4.success_title': {
    en: 'Class created successfully!',
    ar: 'تم إنشاء الفصل بنجاح!',
  },
  'onboarding.s4.success_body': {
    en: 'You can create more classes later from the Classes page.',
    ar: 'تقدر تنشئ فصول ثانية لاحقاً من صفحة الفصول.',
  },
  'onboarding.s4.class_name_label': { en: 'Class Name', ar: 'اسم الفصل' },
  'onboarding.s4.class_name_required': {
    en: 'Class name is required.',
    ar: 'اسم الفصل لازم.',
  },
  'onboarding.s4.class_name_placeholder': {
    en: 'e.g. 10B English Language',
    ar: 'مثلاً 10B English Language',
  },
  'onboarding.s4.year_group_label': { en: 'Year Group', ar: 'السنة الدراسية' },
  'onboarding.s4.exam_board_label': { en: 'Exam Board', ar: 'بورد الامتحان' },
  'onboarding.s4.assign_teacher_label': { en: 'Assign Teacher', ar: 'عيّن معلم' },
  'onboarding.s4.create_btn': { en: 'Create Class', ar: 'أنشئ الفصل' },
  'onboarding.s4.creating': { en: 'Creating...', ar: 'ينشئ… لحظة' },
  'onboarding.s4.create_failed': { en: 'Failed to create class', ar: 'فشل إنشاء الفصل' },
  'onboarding.s4.skip_later': {
    en: "Skip - I'll do this later",
    ar: 'تخطّ — راح أسوّيها لاحقاً',
  },

  // Step 5 — Done
  'onboarding.s5.title': { en: "You're All Set!", ar: 'كل شي جاهز!' },
  'onboarding.s5.subtitle': {
    en: 'Your school is configured and ready to go.',
    ar: 'مدرستك معدّة وجاهزة.',
  },
  'onboarding.s5.stat.teachers': { en: 'Teachers', ar: 'المعلمون' },
  'onboarding.s5.stat.students': { en: 'Students', ar: 'الطلاب' },
  'onboarding.s5.stat.classes': { en: 'Classes', ar: 'الفصول' },
  'onboarding.s5.download_logins': { en: 'Download Login Details', ar: 'حمّل بيانات الدخول' },
  'onboarding.s5.go_dashboard': { en: 'Go to Dashboard', ar: 'روح للوحة' },
  'onboarding.s5.view_guide': { en: 'View Setup Guide', ar: 'شوف دليل الإعداد' },

  // Shared wizard nav
  'onboarding.nav.back': { en: 'Back', ar: 'رجوع' },
  'onboarding.nav.continue': { en: 'Continue', ar: 'كمّل' },
  'onboarding.nav.skip_for_now': { en: 'Skip for now', ar: 'تخطّ الحين' },
  'onboarding.default_school_name': { en: 'Your School', ar: 'مدرستك' },

  // ─── School lessons listing surface (server-side recommendation reasons) ───
  // Used by src/app/school/lessons/page.tsx to translate the "reasons"
  // strings baked into the recommendation map BEFORE crossing into the
  // client island. Placeholders are filled with `.replace('{key}', value)`.
  'school.lessons.reason.generic': {
    en: 'Matches identified weak areas across your classes',
    ar: 'يطابق نقاط الضعف اللي طلعت في صفوفك',
  },
  'school.lessons.reason.weak_area': {
    en: '{count} students below target in {area} (avg {avg}%)',
    ar: '{count} طالب تحت الهدف في {area} (المعدل {avg}٪)',
  },

  // ─── Reading assessment surface (overview + test + results) ─────────
  'assessment.reading.breadcrumb.dashboard': { en: 'Dashboard', ar: 'لوحتك' },
  'assessment.reading.breadcrumb.this_page': { en: 'Reading Assessment', ar: 'تقييم القراءة' },
  'assessment.reading.page_title': {
    en: 'Reading Comprehension Assessment',
    ar: 'تقييم القراءة والفهم',
  },
  'assessment.reading.page_subtitle': {
    en: 'Measure your reading age, decoding skills, and fluency',
    ar: 'قِس عمر القراءة مالك ومهارات فك الكلمات والطلاقة',
  },
  'assessment.reading.profile_heading': { en: 'Your Reading Profile', ar: 'ملف القراءة مالك' },
  'assessment.reading.label.reading_age': { en: 'Reading Age', ar: 'عمر القراءة' },
  'assessment.reading.label.decoding_age': { en: 'Decoding Age', ar: 'عمر فك الكلمات' },
  'assessment.reading.label.fluency_age': { en: 'Fluency Age', ar: 'عمر الطلاقة' },
  'assessment.reading.comparison.above': { en: 'Above expected', ar: 'أعلى من المتوقع' },
  'assessment.reading.comparison.at': { en: 'At expected level', ar: 'بالمستوى المتوقع' },
  'assessment.reading.comparison.below': { en: 'Below expected', ar: 'أقل من المتوقع' },
  'assessment.reading.gcse_equivalent': { en: 'GCSE Equivalent', ar: 'المعادل لدرجة GCSE' },
  'assessment.reading.grade_prefix': { en: 'Grade', ar: 'درجة' },
  'assessment.reading.score_breakdown': { en: 'Score Breakdown', ar: 'تفصيل النتيجة' },
  'assessment.reading.comprehension': { en: 'Comprehension', ar: 'الفهم' },
  'assessment.reading.decoding': { en: 'Decoding', ar: 'فك الكلمات' },
  'assessment.reading.fluency': { en: 'Fluency', ar: 'الطلاقة' },
  'assessment.reading.wpm_short': { en: 'WPM', ar: 'كلمة/دقيقة' },
  'assessment.reading.accuracy_label': { en: 'accuracy', ar: 'دقّة' },
  'assessment.reading.strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'assessment.reading.areas_for_development': {
    en: 'Areas for Development',
    ar: 'مجالات للتطوير',
  },
  'assessment.reading.recommended_next_steps': {
    en: 'Recommended Next Steps',
    ar: 'الخطوات الجاية المقترحة',
  },
  'assessment.reading.next_step.read_widely': { en: 'Read widely', ar: 'اقرا وايد ومن كل اتجاه' },
  'assessment.reading.next_step.read_widely_body': {
    en: 'Aim for 15-20 minutes of reading daily across fiction and non-fiction at your reading level.',
    ar: 'حاول تقرا 15-20 دقيقة كل يوم بين روايات وكتب معلومات على مستواك في القراءة.',
  },
  'assessment.reading.next_step.practise_comprehension': {
    en: 'Practise comprehension',
    ar: 'تمرّن على الفهم',
  },
  'assessment.reading.next_step.practise_comprehension_body': {
    en: 'Work through reading comprehension exercises, focusing on inference and evaluation questions.',
    ar: 'اشتغل على تمارين الفهم القرائي، وركّز على أسئلة الاستنتاج والتقييم.',
  },
  'assessment.reading.next_step.build_vocab': { en: 'Build vocabulary', ar: 'وسّع مفرداتك' },
  'assessment.reading.next_step.build_vocab_body': {
    en: 'Learn new words in context. Keep a vocabulary journal and review unfamiliar words regularly.',
    ar: 'تعلّم كلمات جديدة من السياق. سوِّ دفتر مفردات وراجع الكلمات الغريبة بشكل مستمر.',
  },
  'assessment.reading.retake': { en: 'Retake Assessment', ar: 'أعد التقييم' },
  'assessment.reading.download_results': { en: 'Download Results', ar: 'حمّل النتائج' },
  'assessment.reading.download.title': {
    en: 'Reading Assessment Results',
    ar: 'نتائج تقييم القراءة',
  },
  'assessment.reading.download.note': {
    en: 'Note: This is a screening tool, not a diagnostic assessment.',
    ar: 'ملاحظة: هذي أداة فحص أولي، مو تشخيص رسمي.',
  },
  'assessment.reading.download.date_label': { en: 'Date', ar: 'التاريخ' },
  'assessment.reading.download.strengths_label': { en: 'Strengths:', ar: 'نقاط القوة:' },
  'assessment.reading.download.areas_label': {
    en: 'Areas for Development:',
    ar: 'مجالات للتطوير:',
  },
  'assessment.reading.methodology.title': { en: 'Methodology', ar: 'المنهجية' },
  'assessment.reading.methodology.how_it_works': {
    en: 'How the test works',
    ar: 'كيف يشتغل الاختبار',
  },
  'assessment.reading.methodology.how_it_works_body': {
    en: 'This assessment uses graded passages of increasing difficulty (Year 3 to Year 13 level) to measure reading ability across three dimensions: comprehension, decoding, and fluency.',
    ar: 'هذا التقييم يستخدم نصوص متدرّجة في الصعوبة (من السنة الثالثة لين السنة الثالثة عشرة) عشان يقيس القدرة على القراءة في ثلاث محاور: الفهم وفك الكلمات والطلاقة.',
  },
  'assessment.reading.methodology.comprehension_body': {
    en: 'Measured through a combination of literal (retrieval), inferential (reading between the lines), and evaluative (analysis and judgment) questions on each passage. Both multiple-choice and short-answer formats are used.',
    ar: 'نقيسه بمزيج من الأسئلة الحرفية (استرجاع) والاستنتاجية (قراءة ما بين السطور) والتقييمية (تحليل وحكم) على كل نص. ونستخدم اختيار من متعدد وإجابات قصيرة.',
  },
  'assessment.reading.methodology.decoding_body': {
    en: 'Measured through word recognition accuracy, including both real words and pseudo-words (nonsense words that follow English phonetic patterns, similar to the Year 1 phonics screening check). This isolates decoding ability from vocabulary knowledge.',
    ar: 'نقيسه بدقّة التعرّف على الكلمات، تشمل كلمات حقيقية وكلمات وهمية (كلمات بلا معنى تتبع أنماط الأصوات الإنجليزية، شبيه باختبار الصوتيات في السنة الأولى). هذا يفصل قدرة فك الكلمات عن معرفة المفردات.',
  },
  'assessment.reading.methodology.fluency_body': {
    en: 'Measured through words-per-minute reading speed, adjusted for accuracy. The adjusted WPM (words read correctly per minute) is compared against age-related norms.',
    ar: 'نقيسها بسرعة القراءة بالكلمة في الدقيقة، معدَّلة على أساس الدقّة. والكلمات الصحيحة بالدقيقة تنقارن بمعايير الفئة العمرية.',
  },
  'assessment.reading.methodology.standardisation': { en: 'Standardisation', ar: 'المعايرة' },
  'assessment.reading.methodology.standardisation_body': {
    en: 'Results are standardised against UK national curriculum reading expectations. The reading age is calculated as a weighted composite: comprehension (50%), decoding (25%), and fluency (25%). This weighting reflects the primacy of comprehension in reading ability while acknowledging the foundational importance of decoding and fluency.',
    ar: 'النتائج تنعاير على أساس توقعات منهج القراءة الوطني البريطاني. ويحسب عمر القراءة كمتوسط مرجَّح: الفهم (50%) وفك الكلمات (25%) والطلاقة (25%). هذا الوزن يعكس أهمية الفهم في القدرة على القراءة مع الاعتراف بأن فك الكلمات والطلاقة أساس مهم.',
  },
  'assessment.reading.methodology.basis': { en: 'Methodology basis', ar: 'مرجعيّة المنهجية' },
  'assessment.reading.methodology.basis_body': {
    en: 'The assessment draws on methodology from established standardised reading tests including the NFER Group Reading Test, the Salford Sentence Reading Test, the Suffolk Reading Scale, and the York Assessment of Reading for Comprehension (YARC). Grade boundaries are mapped to chronological reading age norms used in these assessments.',
    ar: 'التقييم يستند على منهجية اختبارات قراءة معتمدة، منها NFER Group Reading Test وSalford Sentence Reading Test وSuffolk Reading Scale وYork Assessment of Reading for Comprehension (YARC). وحدود الدرجات تنطابق مع معايير عمر القراءة المستخدمة في هذي الاختبارات.',
  },
  'assessment.reading.methodology.limitations': { en: 'Limitations', ar: 'حدود الأداة' },
  'assessment.reading.methodology.limitations_body': {
    en: 'This is a screening tool, not a diagnostic assessment. It provides an indicative reading age that can help identify strengths and areas for development. For a formal diagnosis of reading difficulties such as dyslexia, a qualified educational psychologist or specialist teacher assessment is required. Results should be interpreted alongside teacher judgment and other evidence of reading ability.',
    ar: 'هذي أداة فحص أولي، مو تشخيص رسمي. تعطي عمر قراءة استرشادي يساعد في تحديد نقاط القوة ومجالات التطوير. للتشخيص الرسمي لصعوبات القراءة مثل عسر القراءة، لازم اختصاصي نفسي تربوي مؤهَّل أو معلّم متخصِّص. والنتائج تنفسَّر مع حكم المعلم ودلائل ثانية على القدرة في القراءة.',
  },

  // ─── Reading assessment — landing page (what we measure + how) ──────
  'assessment.reading.landing.what_title': {
    en: 'What this test measures',
    ar: 'شنو يقيس هذا الاختبار',
  },
  'assessment.reading.landing.what_subtitle': {
    en: 'A comprehensive assessment of reading ability across three dimensions',
    ar: 'تقييم شامل للقدرة على القراءة في ثلاث محاور',
  },
  'assessment.reading.landing.reading_age_body': {
    en: 'Your overall reading comprehension level, expressed as an age equivalent. Measures understanding of both fiction and non-fiction texts.',
    ar: 'مستوى الفهم القرائي العام مالك، معبَّر عنه بعمر مكافئ. يقيس فهمك للنصوص الأدبية ونصوص المعلومات.',
  },
  'assessment.reading.landing.decoding_age_body': {
    en: 'Your ability to recognise and decode words accurately, including real words and pseudo-words that test phonics knowledge.',
    ar: 'قدرتك على التعرّف على الكلمات وفكّها بدقّة، تشمل كلمات حقيقية وكلمات وهمية تختبر معرفتك بالصوتيات.',
  },
  'assessment.reading.landing.fluency_age_body': {
    en: 'Your reading speed combined with accuracy. Fluent readers read smoothly and quickly while maintaining comprehension.',
    ar: 'سرعتك في القراءة مع الدقّة. القارئ الطليق يقرا بسلاسة وبسرعة وفي نفس الوقت يفهم.',
  },
  'assessment.reading.landing.how_title': { en: 'How it works', ar: 'كيف يشتغل' },
  'assessment.reading.landing.step1_title': { en: 'Enter your age', ar: 'دخّل عمرك' },
  'assessment.reading.landing.step1_body': {
    en: 'So we can compare your reading level to age-related expectations.',
    ar: 'عشان نقارن مستوى القراءة مالك بالتوقعات حسب العمر.',
  },
  'assessment.reading.landing.step2_title': {
    en: 'Read graded passages',
    ar: 'اقرا نصوص متدرّجة',
  },
  'assessment.reading.landing.step2_body': {
    en: 'Starting from simpler texts and progressing to more challenging ones. Your reading is timed.',
    ar: 'نبدأ من نصوص بسيطة ونرتفع لنصوص أصعب. وقراءتك بتنحسب بالوقت.',
  },
  'assessment.reading.landing.step3_title': {
    en: 'Answer comprehension questions',
    ar: 'جاوب أسئلة الفهم',
  },
  'assessment.reading.landing.step3_body': {
    en: 'A mix of multiple-choice and short-answer questions test your understanding at each level.',
    ar: 'مزيج من أسئلة اختيار من متعدد وإجابات قصيرة تختبر فهمك في كل مستوى.',
  },
  'assessment.reading.landing.step4_title': {
    en: 'Complete word recognition exercises',
    ar: 'خلّص تمارين التعرّف على الكلمات',
  },
  'assessment.reading.landing.step4_body': {
    en: 'Identify real words and pseudo-words to assess your decoding skills.',
    ar: 'ميّز الكلمات الحقيقية من الكلمات الوهمية عشان نقيس مهارة فك الكلمات.',
  },
  'assessment.reading.landing.step5_title': { en: 'Get your results', ar: 'احصل على نتائجك' },
  'assessment.reading.landing.step5_body': {
    en: 'Receive your reading age, decoding age, and fluency age with detailed feedback.',
    ar: 'بتحصل على عمر القراءة وعمر فك الكلمات وعمر الطلاقة مع ملاحظات تفصيلية.',
  },
  'assessment.reading.landing.duration': {
    en: 'Approximately 20-30 minutes',
    ar: 'يستغرق تقريباً 20-30 دقيقة',
  },
  'assessment.reading.landing.scope': {
    en: '10 passages, 40 questions',
    ar: '10 نصوص، 40 سؤال',
  },
  'assessment.reading.landing.levels': {
    en: 'Year 3 to Year 13 levels',
    ar: 'مستويات من السنة الثالثة لين السنة الثالثة عشرة',
  },
  'assessment.reading.landing.start_cta': { en: 'Start Assessment', ar: 'ابدأ التقييم' },

  // ─── Reading assessment — test phases ──────────────────────────────
  'assessment.reading.test.breadcrumb.parent': { en: 'Reading Assessment', ar: 'تقييم القراءة' },
  'assessment.reading.test.breadcrumb.this': { en: 'Test', ar: 'الاختبار' },
  'assessment.reading.test.age.title': { en: 'Before we begin', ar: 'قبل لا نبدأ' },
  'assessment.reading.test.age.subtitle': {
    en: 'Enter your age so we can compare your reading level to age-related expectations.',
    ar: 'دخّل عمرك عشان نقارن مستوى القراءة مالك بالتوقعات حسب العمر.',
  },
  'assessment.reading.test.age.years_label': { en: 'Age (years)', ar: 'العمر (سنوات)' },
  'assessment.reading.test.age.months_label': { en: 'Months', ar: 'الأشهر' },
  'assessment.reading.test.age.years_suffix': { en: 'years', ar: 'سنة' },
  'assessment.reading.test.age.months_suffix': { en: 'months', ar: 'شهر' },
  'assessment.reading.test.age.note': {
    en: 'Your age is used only to compare your reading level against expected norms. It does not affect your raw scores.',
    ar: 'عمرك يستخدم بس لمقارنة مستوى القراءة بالمعايير المتوقعة. ما يأثّر على درجاتك الخام.',
  },
  'assessment.reading.test.age.begin_cta': { en: 'Begin Assessment', ar: 'ابدأ التقييم' },
  'assessment.reading.test.progress.passage_count_prefix': {
    en: 'Passage',
    ar: 'النص',
  },
  'assessment.reading.test.progress.of_word': { en: 'of', ar: 'من' },
  'assessment.reading.test.passage.level_suffix': { en: 'Level', ar: 'المستوى' },
  'assessment.reading.test.passage.years_suffix': { en: 'years', ar: 'سنوات' },
  'assessment.reading.test.passage.fiction': { en: 'Fiction', ar: 'أدبي' },
  'assessment.reading.test.passage.nonfiction': { en: 'Non-fiction', ar: 'معلوماتي' },
  'assessment.reading.test.passage.words': { en: 'words', ar: 'كلمة' },
  'assessment.reading.test.passage.finished_cta': {
    en: 'I have finished reading',
    ar: 'خلّصت القراءة',
  },
  'assessment.reading.test.passage.read_carefully': {
    en: 'Read carefully — you cannot return once you start the questions.',
    ar: 'اقرا بتركيز — ما تقدر ترجع للنص لمّا تبدأ الأسئلة.',
  },
  'assessment.reading.test.passage.unlock_prefix': {
    en: 'Take your time to read properly. Button unlocks in',
    ar: 'خذ وقتك واقرا زين. الزر بينفتح بعد',
  },
  'assessment.reading.test.passage.unlock_suffix': { en: 's.', ar: ' ثانية.' },
  'assessment.reading.test.question.question_word': { en: 'Question', ar: 'السؤال' },
  'assessment.reading.test.question.of_word': { en: 'of', ar: 'من' },
  'assessment.reading.test.question.skill.literal': { en: 'literal', ar: 'حرفي' },
  'assessment.reading.test.question.skill.inferential': { en: 'inferential', ar: 'استنتاجي' },
  'assessment.reading.test.question.skill.evaluative': { en: 'evaluative', ar: 'تقييمي' },
  'assessment.reading.test.question.skill.other': { en: 'skill', ar: 'مهارة' },
  'assessment.reading.test.question.mark_singular': { en: 'mark', ar: 'درجة' },
  'assessment.reading.test.question.mark_plural': { en: 'marks', ar: 'درجات' },
  'assessment.reading.test.question.placeholder': {
    en: 'Type your answer here...',
    ar: 'اكتب جوابك هني…',
  },
  'assessment.reading.test.question.answer_aria': { en: 'Your answer', ar: 'جوابك' },
  'assessment.reading.test.question.from_memory_note': {
    en: 'Answer from memory — you cannot return to the passage.',
    ar: 'جاوب من ذاكرتك — ما تقدر ترجع للنص.',
  },
  'assessment.reading.test.question.next_section': { en: 'Next Section', ar: 'القسم التالي' },
  'assessment.reading.test.question.next_question': { en: 'Next Question', ar: 'السؤال التالي' },
  'assessment.reading.test.decoding.heading': { en: 'Word Recognition', ar: 'التعرّف على الكلمات' },
  'assessment.reading.test.decoding.instruction': {
    en: 'Read the word below. Do you recognise it? Is it a real English word?',
    ar: 'اقرا الكلمة اللي تحت. تعرفها؟ هل هي كلمة إنجليزية حقيقية؟',
  },
  'assessment.reading.test.decoding.progress_label': {
    en: 'Decoding Progress',
    ar: 'تقدّم فك الكلمات',
  },
  'assessment.reading.test.decoding.level_prefix': { en: 'Level', ar: 'المستوى' },
  'assessment.reading.test.decoding.real_word': { en: 'Real Word', ar: 'كلمة حقيقية' },
  'assessment.reading.test.decoding.not_real_word': { en: 'Not a Real Word', ar: 'مو كلمة حقيقية' },
  'assessment.reading.test.complete.calculating': {
    en: 'Calculating your results...',
    ar: 'لحظة، نحسب نتائجك…',
  },
  'assessment.reading.test.ceiling.heading': { en: 'Assessment complete', ar: 'خلّصنا التقييم' },
  'assessment.reading.test.ceiling.body': {
    en: 'We have enough data to calculate your reading age. You do not need to continue with the remaining passages.',
    ar: 'صار عندنا بيانات كافية لحساب عمر القراءة مالك. ما تحتاج تكمّل النصوص الباقية.',
  },
  'assessment.reading.test.ceiling.note': {
    en: 'Your score is based on the passages you completed. Passages you did not attempt do not affect your result.',
    ar: 'نتيجتك على أساس النصوص اللي خلّصتها. والنصوص اللي ما حلّيتها ما تأثّر على النتيجة.',
  },
  'assessment.reading.test.ceiling.continue_cta': {
    en: 'Continue to Word Recognition',
    ar: 'كمّل لقسم التعرّف على الكلمات',
  },

  // ─── Certificate of Achievement page ───────────────────────────────
  'certificate.page_title': {
    en: 'Certificate of Achievement | The English Hub',
    ar: 'شهادة إنجاز | The English Hub',
  },
  'certificate.page_description': {
    en: 'View and verify this Certificate of Achievement from The English Hub. Awarded for successful completion of a GCSE English course.',
    ar: 'شوف وتحقّق من شهادة الإنجاز هذي من The English Hub. ممنوحة على إكمال دورة GCSE في اللغة الإنجليزية بنجاح.',
  },
  'certificate.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'certificate.share': { en: 'Share', ar: 'شارك' },
  'certificate.copied': { en: 'Copied!', ar: 'تم النسخ!' },
  'certificate.download_pdf': { en: 'Download PDF', ar: 'حمّل PDF' },
  'certificate.brand_caption': { en: 'The English Hub', ar: 'The English Hub' },
  'certificate.title': { en: 'Certificate of Achievement', ar: 'شهادة إنجاز' },
  'certificate.recipient_lead': { en: 'This is to certify that', ar: 'نشهد بأنّ' },
  'certificate.course_lead': {
    en: 'has successfully completed',
    ar: 'أكمل بنجاح',
  },
  'certificate.fallback_student': { en: 'Student', ar: 'الطالب' },
  'certificate.field.grade': { en: 'Grade', ar: 'الدرجة' },
  'certificate.field.score': { en: 'Score', ar: 'النتيجة' },
  'certificate.field.date': { en: 'Date', ar: 'التاريخ' },
  'certificate.id_prefix': { en: 'Certificate ID:', ar: 'رقم الشهادة:' },
  'certificate.verify_prefix': { en: 'Verify at', ar: 'تحقّق على' },
  'certificate.whats_next': { en: "What's Next?", ar: 'شنو بعدها؟' },
  'certificate.next.browse_courses_title': {
    en: 'Browse More Courses',
    ar: 'تصفّح دورات أكثر',
  },
  'certificate.next.browse_courses_body': {
    en: 'Continue your learning journey',
    ar: 'كمّل مسيرتك في التعلّم',
  },
  'certificate.next.practice_title': { en: 'Practice Questions', ar: 'أسئلة تدريبية' },
  'certificate.next.practice_body': {
    en: 'Test your knowledge further',
    ar: 'اختبر معرفتك أكثر',
  },
  'certificate.next.dashboard_title': { en: 'Return to Dashboard', ar: 'رجوع للوحة' },
  'certificate.next.dashboard_body': {
    en: 'View your progress and stats',
    ar: 'شوف تقدّمك وإحصائياتك',
  },
  'certificate.share.title': {
    en: 'The English Hub Certificate',
    ar: 'شهادة من The English Hub',
  },
  'certificate.share.text_lead': { en: 'Certificate of', ar: 'شهادة' },
  'certificate.share.text_awarded': { en: 'awarded to', ar: 'ممنوحة إلى' },
  'certificate.not_found': { en: 'Certificate not found.', ar: 'ما لقينا الشهادة.' },

  // ─── Safeguarding policy page (MSA — formal body) ──────────────────
  'safeguard.page.meta_title': {
    en: 'Safeguarding Policy',
    ar: 'سياسة حماية الأطفال',
  },
  'safeguard.page.meta_description': {
    en: 'Our safeguarding policy sets out how The English Hub protects children and young people aged 14-18 using our online education platform. UK-compliant and reviewed annually.',
    ar: 'تُحدِّد سياسة حماية الأطفال لدينا الكيفية التي يحمي بها The English Hub الأطفال والشباب من سنّ 14 إلى 18 المستخدمين لمنصّة التعليم الإلكتروني. متوافقة مع الأنظمة البريطانية ومُراجَعة سنويًا.',
  },
  'safeguard.back_home': { en: 'Back to Home', ar: 'رجوع للرئيسية' },
  'safeguard.h1': { en: 'Safeguarding Policy', ar: 'سياسة حماية الأطفال' },
  'safeguard.trading_as_pre': {
    en: 'Upskill Energy Limited, trading as',
    ar: 'شركة Upskill Energy Limited، تُتاجر باسم',
  },
  'safeguard.last_updated_line': {
    en: 'Last updated: March 2026 · Next review: March 2027',
    ar: 'آخر تحديث: مارس 2026 · المراجعة القادمة: مارس 2027',
  },
  'safeguard.report_concern_now_cta': {
    en: 'Report a Concern',
    ar: 'بلّغ عن مخاوف الحين',
  },
  'safeguard.contents': { en: 'Contents', ar: 'الفهرس' },
  'safeguard.toc.commitment': { en: 'Commitment Statement', ar: 'بيان الالتزام' },
  'safeguard.toc.scope': { en: 'Scope', ar: 'نطاق التطبيق' },
  'safeguard.toc.dsl': {
    en: 'Designated Safeguarding Lead',
    ar: 'مسؤول الحماية المُعيَّن',
  },
  'safeguard.toc.principles': { en: 'Key Principles', ar: 'المبادئ الرئيسية' },
  'safeguard.toc.online_safety': {
    en: 'Online Safety Measures',
    ar: 'تدابير السلامة الإلكترونية',
  },
  'safeguard.toc.reporting': { en: 'Reporting Procedures', ar: 'إجراءات الإبلاغ' },
  'safeguard.toc.data_protection': {
    en: 'Data Protection in Safeguarding',
    ar: 'حماية البيانات في سياق حماية الأطفال',
  },
  'safeguard.toc.training': {
    en: 'Staff and Contractor Training',
    ar: 'تدريب الموظفين والمتعاقدين',
  },
  'safeguard.toc.review': { en: 'Review Schedule', ar: 'جدول المراجعة' },
  'safeguard.toc.external_contacts': {
    en: 'External Contacts',
    ar: 'جهات الاتصال الخارجية',
  },
  // §1 Commitment
  'safeguard.s1.title': { en: 'Commitment Statement', ar: 'بيان الالتزام' },
  'safeguard.s1.p1': {
    en: 'The English Hub is committed to safeguarding and promoting the welfare of all children and young people who use our platform. We recognise that everyone has a responsibility to safeguard children, and we take this responsibility seriously.',
    ar: 'يلتزم The English Hub بحماية جميع الأطفال والشباب الذين يستخدمون منصّتنا وتعزيز رفاههم. ونُدرك أنّ على كلّ فردٍ مسؤوليّةً في حماية الأطفال، ونتعامل مع هذه المسؤوليّة بجدّيّةٍ تامّة.',
  },
  'safeguard.s1.p2': {
    en: 'We are committed to creating a safe online learning environment where young people aged 14–18 can develop their English language skills without risk of harm, abuse, or exploitation. We will always act in the best interests of the child and take all reasonable steps to ensure their safety and wellbeing.',
    ar: 'نلتزم بإنشاء بيئة تعلُّمٍ إلكترونيّة آمنة يستطيع فيها الشباب من سنّ 14 إلى 18 تطوير مهاراتهم في اللغة الإنجليزيّة دون أيّ خطر إيذاءٍ أو إساءةٍ أو استغلال. وسنتصرّف دائمًا بما يحقِّق المصلحة الفُضلى للطفل، ونتّخذ كلّ الخطوات المعقولة لضمان سلامته ورفاهه.',
  },
  'safeguard.s1.p3': {
    en: 'This policy is underpinned by the principles set out in the Children Act 1989, the Children Act 2004, Working Together to Safeguard Children (2023), and the Keeping Children Safe in Education (2024) statutory guidance.',
    ar: 'تستند هذه السياسة إلى المبادئ المنصوص عليها في قانون الأطفال لسنة 1989، وقانون الأطفال لسنة 2004، ووثيقة "العمل معًا لحماية الأطفال" لسنة 2023، والتوجيه القانوني "إبقاء الأطفال آمنين في التعليم" لسنة 2024.',
  },
  // §2 Scope
  'safeguard.s2.title': { en: 'Scope', ar: 'نطاق التطبيق' },
  'safeguard.s2.intro': { en: 'This policy applies to:', ar: 'تنطبق هذه السياسة على:' },
  'safeguard.s2.item1': {
    en: 'All users under the age of 18 who access The English Hub platform',
    ar: 'جميع المستخدمين دون سنّ 18 الذين يدخلون منصّة The English Hub',
  },
  'safeguard.s2.item2': {
    en: 'All staff, contractors, freelancers, and volunteers engaged by Upskill Energy Limited in connection with the platform',
    ar: 'جميع الموظفين والمتعاقدين والمستقلّين والمتطوّعين العاملين لدى Upskill Energy Limited فيما يتّصل بالمنصّة',
  },
  'safeguard.s2.item3': {
    en: 'All AI-generated content, learning materials, and interactive features provided through the platform',
    ar: 'جميع المحتوى الذي يُولِّده الذكاء الاصطناعي والمواد التعليميّة والميزات التفاعلية المُقدَّمة عبر المنصّة',
  },
  'safeguard.s2.item4': {
    en: 'Parents, guardians, and carers of young people using the platform',
    ar: 'أولياء الأمور والأوصياء ومُقدِّمي الرعاية للشباب المستخدمين للمنصّة',
  },
  'safeguard.s2.outro': {
    en: 'The English Hub is an online education platform designed for learners aged 14–18. As such, safeguarding considerations are embedded into every aspect of our product design, content creation, and operational processes.',
    ar: 'The English Hub منصّة تعليمٍ إلكترونيّة مُصمَّمة للمتعلِّمين من سنّ 14 إلى 18. ولذا فإنّ اعتبارات الحماية مُدمجةٌ في كلّ جانبٍ من جوانب تصميم المنتج وإعداد المحتوى والعمليات التشغيليّة.',
  },
  // §3 DSL
  'safeguard.s3.title': {
    en: 'Designated Safeguarding Lead',
    ar: 'مسؤول الحماية المُعيَّن',
  },
  'safeguard.s3.p1': {
    en: 'Upskill Energy Limited has appointed a Designated Safeguarding Lead (DSL) who holds overall responsibility for safeguarding and child protection across the platform. The DSL is trained to the appropriate level and undertakes refresher training at least every two years.',
    ar: 'عيَّنت Upskill Energy Limited مسؤول حمايةٍ مُعيَّنًا (DSL) يتحمّل المسؤوليّة الشاملة عن حماية الأطفال على المنصّة. وقد تلقّى مسؤول الحماية تدريبًا بالمستوى المناسب، ويخضع لتدريبٍ تنشيطيٍّ كلّ سنتَين على الأقلّ.',
  },
  'safeguard.s3.card.heading': {
    en: 'Designated Safeguarding Lead',
    ar: 'مسؤول الحماية المُعيَّن',
  },
  'safeguard.s3.card.name_label': { en: 'Name:', ar: 'الاسم:' },
  'safeguard.s3.card.email_label': { en: 'Email:', ar: 'البريد الإلكتروني:' },
  'safeguard.s3.card.phone_label': { en: 'Telephone:', ar: 'الهاتف:' },
  'safeguard.s3.card.note': {
    en: 'The DSL will acknowledge all safeguarding concerns within 24 hours and ensure appropriate action is taken without delay.',
    ar: 'سيُقِرّ مسؤول الحماية بتلقّي كلّ بلاغٍ خلال 24 ساعة، ويضمن اتّخاذ الإجراء المناسب دون تأخير.',
  },
  'safeguard.s3.how_title': { en: 'How to Report a Concern', ar: 'كيفيّة الإبلاغ عن مخاوف' },
  'safeguard.s3.how_body_pre': {
    en: "If you have concerns about a child's safety, contact our Designated Safeguarding Lead at",
    ar: 'إذا كانت لديك مخاوف بشأن سلامة طفل، تواصل مع مسؤول الحماية المُعيَّن عبر',
  },
  'safeguard.s3.how_body_or_call': { en: 'or call', ar: 'أو اتّصل بـ' },
  'safeguard.s3.how_body_emergency': {
    en: '. In an emergency, call',
    ar: '. في حالات الطوارئ، اتّصل بـ',
  },
  'safeguard.s3.how_body_999': { en: '999', ar: '999' },
  'safeguard.s3.how_body_ceop_pre': {
    en: '. You can also report concerns to CEOP at',
    ar: '. يمكنك أيضًا الإبلاغ إلى CEOP عبر',
  },
  'safeguard.s3.how_body_childline': {
    en: 'or contact Childline on',
    ar: 'أو التواصل مع Childline على',
  },
  'safeguard.s3.p_outro': {
    en: "The DSL is responsible for referring cases of suspected abuse or allegations to the relevant local authority children's social care team, liaising with the police and other agencies where appropriate, and maintaining accurate and secure safeguarding records.",
    ar: 'يتولّى مسؤول الحماية إحالة حالات الاشتباه في الإساءة أو الادّعاءات إلى فريق رعاية الأطفال الاجتماعيّة في السلطة المحليّة المختصّة، والتنسيق مع الشرطة والجهات الأخرى عند الاقتضاء، وحفظ سجلّات الحماية بدقّةٍ وأمان.',
  },
  // §4 Principles
  'safeguard.s4.title': { en: 'Key Principles', ar: 'المبادئ الرئيسية' },
  'safeguard.s4.intro': {
    en: 'Our approach to safeguarding is guided by the following core principles:',
    ar: 'يستند نهجنا في حماية الأطفال إلى المبادئ الجوهريّة التالية:',
  },
  'safeguard.s4.bestint_term': { en: 'Best interests of the child:', ar: 'المصلحة الفُضلى للطفل:' },
  'safeguard.s4.bestint_body': {
    en: 'The welfare of the child is paramount. All decisions and actions will prioritise the safety and wellbeing of the young person above all other considerations.',
    ar: 'رفاه الطفل هو الأولويّة العليا. جميع القرارات والإجراءات ستضع سلامة الشاب ورفاهه فوق أيّ اعتبارٍ آخر.',
  },
  'safeguard.s4.prop_term': { en: 'Proportionate responses:', ar: 'استجابات متناسبة:' },
  'safeguard.s4.prop_body': {
    en: 'We will respond to safeguarding concerns proportionately, taking into account the nature and severity of the concern, the age and vulnerability of the child, and relevant context.',
    ar: 'سنستجيب للبلاغات بشكلٍ متناسبٍ مع طبيعة المخاوف وخطورتها، وسنّ الطفل ومستوى هشاشته، والسياق ذي الصلة.',
  },
  'safeguard.s4.parents_term': {
    en: 'Working with parents and guardians:',
    ar: 'العمل مع أولياء الأمور والأوصياء:',
  },
  'safeguard.s4.parents_body': {
    en: 'We will work in partnership with parents, guardians, and carers to support the safety and wellbeing of young people, unless doing so would place the child at further risk of harm.',
    ar: 'سنعمل بالشراكة مع أولياء الأمور والأوصياء ومُقدِّمي الرعاية لدعم سلامة الشباب ورفاههم، ما لم يكن ذلك سيُعرِّض الطفل لمزيدٍ من خطر الإيذاء.',
  },
  'safeguard.s4.listen_term': {
    en: 'Listening to children and young people:',
    ar: 'الإصغاء للأطفال والشباب:',
  },
  'safeguard.s4.listen_body': {
    en: 'We will take the views, wishes, and feelings of young people seriously, and ensure they are listened to and involved in decisions that affect them.',
    ar: 'سنأخذ آراء الشباب ورغباتهم ومشاعرهم على محمل الجدّ، ونضمن إصغاءنا لهم وإشراكهم في القرارات التي تخصّهم.',
  },
  'safeguard.s4.zero_term': { en: 'Zero tolerance of abuse:', ar: 'لا تسامح مع الإساءة:' },
  'safeguard.s4.zero_body': {
    en: 'We operate a zero-tolerance approach to any form of abuse, exploitation, or harmful behaviour directed at children and young people.',
    ar: 'نتبنّى سياسة لا تسامحٍ مع أيّ شكلٍ من أشكال الإساءة أو الاستغلال أو السلوك المُؤذي الموجَّه نحو الأطفال والشباب.',
  },
  'safeguard.s4.trans_term': {
    en: 'Transparency and accountability:',
    ar: 'الشفافية والمساءلة:',
  },
  'safeguard.s4.trans_body': {
    en: 'We are open about our safeguarding practices and will hold ourselves accountable for maintaining the highest standards of child protection.',
    ar: 'نعمل بشفافيّةٍ بشأن ممارساتنا في حماية الأطفال، ونُخضِع أنفسنا للمساءلة في الحفاظ على أعلى معايير الحماية.',
  },
  // §5 Online safety
  'safeguard.s5.title': { en: 'Online Safety Measures', ar: 'تدابير السلامة الإلكترونية' },
  'safeguard.s5.intro': {
    en: 'As a digital education platform serving young people, we implement robust online safety measures across every layer of the product:',
    ar: 'بوصفنا منصّةَ تعليمٍ رقميّةً تخدم الشباب، نُطبِّق تدابير سلامةٍ إلكترونيّة قويّة على كلّ مستوى من مستويات المنتج:',
  },
  'safeguard.s5.h1': { en: '5.1 AI Content Filtering', ar: '5.1 تصفية محتوى الذكاء الاصطناعي' },
  'safeguard.s5.h1_body': {
    en: 'All AI-generated content on the platform is subject to automated filtering designed to detect and prevent the presentation of harmful, inappropriate, or age-inappropriate material. Our filtering systems are regularly reviewed and updated to address emerging risks.',
    ar: 'يخضع كلّ المحتوى المُولَّد بالذكاء الاصطناعي على المنصّة لتصفيةٍ آليّةٍ مُصمَّمة لاكتشاف ومنع عرض أيّ موادّ ضارّة أو غير لائقة أو غير ملائمة للعمر. وتُراجَع أنظمة التصفية وتُحدَّث بانتظامٍ للتعامل مع المخاطر المستجدّة.',
  },
  'safeguard.s5.h2': { en: '5.2 No Direct Messaging', ar: '5.2 لا توجد مراسلات مباشرة' },
  'safeguard.s5.h2_body': {
    en: 'The English Hub does not provide any direct messaging, chat, or private communication features between users. This design decision eliminates the risk of grooming, bullying, or other harmful interactions between users on the platform.',
    ar: 'لا يُتيح The English Hub أيّ مراسلاتٍ مباشرة أو دردشةٍ أو وسائل تواصلٍ خاصّ بين المستخدمين. ويُلغي هذا القرار التصميميّ مخاطر الاستدراج والتنمّر وغيرها من التفاعلات الضارّة بين المستخدمين على المنصّة.',
  },
  'safeguard.s5.h3': {
    en: '5.3 No Sharing of Personal Information',
    ar: '5.3 منع مشاركة المعلومات الشخصيّة',
  },
  'safeguard.s5.h3_body': {
    en: 'The platform does not permit users to share personal information (such as full names, addresses, phone numbers, photographs, or social media handles) with other users. User profiles are not publicly visible.',
    ar: 'لا تسمح المنصّة للمستخدمين بمشاركة المعلومات الشخصيّة (مثل الأسماء الكاملة، والعناوين، وأرقام الهواتف، والصور، أو حسابات التواصل الاجتماعي) مع غيرهم. ولا تظهر ملفّات المستخدمين للجمهور.',
  },
  'safeguard.s5.h4': {
    en: '5.4 Parental Consent for Under-16s',
    ar: '5.4 موافقة وليّ الأمر لمَن هم دون 16',
  },
  'safeguard.s5.h4_body': {
    en: 'In compliance with the UK General Data Protection Regulation (UK GDPR) and the Age Appropriate Design Code, we require verifiable parental or guardian consent before processing the personal data of any user under the age of 16. Consent mechanisms are built into our registration process.',
    ar: 'امتثالًا للائحة العامّة لحماية البيانات في المملكة المتّحدة (UK GDPR) ومدوّنة التصميم المناسب للعمر، نشترط الحصول على موافقةٍ موثوقة من وليّ الأمر أو الوصيّ قبل معالجة البيانات الشخصيّة لأيّ مستخدمٍ دون سنّ 16. وآليّات الموافقة مُدمجةٌ في عمليّة التسجيل.',
  },
  'safeguard.s5.h5': {
    en: '5.5 Age-Appropriate Design (ICO Code Compliance)',
    ar: '5.5 التصميم المناسب للعمر (الامتثال لمدوّنة ICO)',
  },
  'safeguard.s5.h5_body': {
    en: "The English Hub is designed in accordance with the ICO's Age Appropriate Design Code (Children's Code). This includes:",
    ar: 'صُمِّم The English Hub وفقًا لمدوّنة التصميم المناسب للعمر الصادرة عن ICO (مدوّنة الأطفال). ويشمل ذلك:',
  },
  'safeguard.s5.h5_li1': {
    en: 'Privacy settings configured to the highest level by default',
    ar: 'ضبط إعدادات الخصوصيّة على أعلى مستوى افتراضيًّا',
  },
  'safeguard.s5.h5_li2': {
    en: 'Data collection minimised to only what is necessary for the educational service',
    ar: 'حصر جمع البيانات على ما هو ضروريّ للخدمة التعليميّة فقط',
  },
  'safeguard.s5.h5_li3': {
    en: 'No profiling of children for marketing or commercial purposes',
    ar: 'عدم تكوين ملفّات تعريفيّة للأطفال لأغراضٍ تسويقيّة أو تجاريّة',
  },
  'safeguard.s5.h5_li4': {
    en: 'No nudge techniques or design patterns that encourage users to weaken their privacy protections',
    ar: 'عدم استخدام أساليب التحفيز أو الأنماط التصميميّة التي تدفع المستخدمين إلى إضعاف حماية خصوصيّتهم',
  },
  'safeguard.s5.h5_li5': {
    en: 'Clear, age-appropriate privacy information provided to young users',
    ar: 'تقديم معلومات خصوصيّةٍ واضحة وملائمة لعمر المستخدمين الصغار',
  },
  'safeguard.s5.h5_li6': {
    en: 'Data Protection Impact Assessments (DPIAs) conducted for all features and services likely to be accessed by children',
    ar: 'إجراء تقييمات أثر حماية البيانات (DPIAs) لكلّ الميزات والخدمات التي يُحتمل وصول الأطفال إليها',
  },
  // §6 Reporting
  'safeguard.s6.title': { en: 'Reporting Procedures', ar: 'إجراءات الإبلاغ' },
  'safeguard.s6.intro': {
    en: 'If you have a safeguarding concern about a child or young person using The English Hub, you should report it immediately using one of the following methods:',
    ar: 'إذا كانت لديك مخاوف تتعلّق بحماية طفلٍ أو شابّ يستخدم The English Hub، فعليك الإبلاغ فورًا بإحدى الطرق التالية:',
  },
  'safeguard.s6.li1_term': { en: 'Online reporting form:', ar: 'نموذج الإبلاغ الإلكتروني:' },
  'safeguard.s6.li1_link': { en: 'Submit a report', ar: 'أرسل بلاغًا' },
  'safeguard.s6.li1_post': {
    en: '— available 24/7, anonymous reporting accepted',
    ar: '— متاح على مدار الساعة طوال أيّام الأسبوع، ويُقبل البلاغ المجهول الهويّة',
  },
  'safeguard.s6.li2_term': { en: 'Email the DSL:', ar: 'البريد الإلكتروني لمسؤول الحماية:' },
  'safeguard.s6.provide': {
    en: 'When reporting a concern, please provide:',
    ar: 'عند الإبلاغ، يُرجى تقديم:',
  },
  'safeguard.s6.provide_li1': {
    en: 'A description of the concern, including what you have seen, heard, or been told',
    ar: 'وصف المخاوف، بما في ذلك ما رأيتَه أو سمعتَه أو ما قيل لك',
  },
  'safeguard.s6.provide_li2': {
    en: 'The date and time of the incident (if applicable)',
    ar: 'تاريخ ووقت الواقعة (إن وُجد)',
  },
  'safeguard.s6.provide_li3': {
    en: 'Any relevant usernames or identifying information (if known)',
    ar: 'أيّ أسماء مستخدمين ذات صلة أو معلومات تعريفيّة (إن عُرفت)',
  },
  'safeguard.s6.provide_li4': {
    en: 'Your contact details (optional but helpful for follow-up)',
    ar: 'بيانات الاتّصال الخاصّة بك (اختياريّة، لكنّها مفيدة للمتابعة)',
  },
  'safeguard.s6.flow_title': {
    en: 'What happens when you report?',
    ar: 'ماذا يحدث عند الإبلاغ؟',
  },
  'safeguard.s6.flow_li1': {
    en: 'Your report is received securely and assigned a reference number',
    ar: 'يُستلَم بلاغك بطريقةٍ آمنة ويُمنح رقمًا مرجعيًّا',
  },
  'safeguard.s6.flow_li2': {
    en: 'The DSL reviews the report within 24 hours',
    ar: 'يُراجع مسؤول الحماية البلاغ خلال 24 ساعة',
  },
  'safeguard.s6.flow_li3': {
    en: 'The DSL determines the appropriate course of action, which may include contacting the young person, their parent/guardian, or external agencies',
    ar: 'يُحدِّد مسؤول الحماية مسار الإجراء المناسب، الذي قد يشمل التواصل مع الشاب أو وليّ أمره أو الجهات الخارجيّة',
  },
  'safeguard.s6.flow_li4': {
    en: "Where there is an immediate risk of significant harm, the DSL will contact the police and/or local authority children's services without delay",
    ar: 'حيث يوجد خطرٌ فوريٌّ بإيذاءٍ كبير، يتواصل مسؤول الحماية مع الشرطة و/أو خدمات الأطفال في السلطة المحليّة دون تأخير',
  },
  'safeguard.s6.flow_li5': {
    en: 'A record of the concern and actions taken is securely stored',
    ar: 'يُحفظ سجلّ المخاوف والإجراءات المتّخذة بطريقةٍ آمنة',
  },
  'safeguard.s6.outro_pre': {
    en: 'If a child is in immediate danger,',
    ar: 'إذا كان الطفل في خطرٍ مُحدِق،',
  },
  'safeguard.s6.outro_call': { en: 'call', ar: 'فاتّصل بـ' },
  'safeguard.s6.outro_999': { en: '999', ar: '999' },
  'safeguard.s6.outro_post': {
    en: 'without delay. Do not wait to submit a report through the platform.',
    ar: 'دون تأخير. ولا تنتظر تقديم بلاغٍ عبر المنصّة.',
  },
  // §7 Data protection
  'safeguard.s7.title': {
    en: 'Data Protection in Safeguarding',
    ar: 'حماية البيانات في سياق حماية الأطفال',
  },
  'safeguard.s7.intro': {
    en: 'Safeguarding data is handled with the highest level of care and in compliance with the UK GDPR and Data Protection Act 2018:',
    ar: 'تُعالَج بيانات الحماية بأعلى مستوى من العناية، وبما يتوافق مع UK GDPR وقانون حماية البيانات لسنة 2018:',
  },
  'safeguard.s7.lawful_term': { en: 'Lawful basis:', ar: 'الأساس القانوني:' },
  'safeguard.s7.lawful_body': {
    en: 'Safeguarding data is processed under Article 6(1)(d) (vital interests) and Article 6(1)(e) (public task) of the UK GDPR, and Article 9(2)(c) (vital interests) for special category data.',
    ar: 'تُعالَج بيانات الحماية وفقًا للمادّة 6(1)(د) (المصالح الحيوية) والمادّة 6(1)(هـ) (المهمّة العامّة) من UK GDPR، والمادّة 9(2)(ج) (المصالح الحيوية) للبيانات من الفئات الخاصّة.',
  },
  'safeguard.s7.access_term': { en: 'Access controls:', ar: 'ضوابط الوصول:' },
  'safeguard.s7.access_body': {
    en: 'Only the DSL and authorised personnel with a legitimate need have access to safeguarding records. Access is strictly limited on a need-to-know basis.',
    ar: 'يقتصر الوصول إلى سجلّات الحماية على مسؤول الحماية والموظفين المخوَّلين ممَّن لديهم حاجةٌ مشروعة. والوصول مُقيَّدٌ بشكلٍ صارمٍ وفق مبدأ الحاجة إلى المعرفة.',
  },
  'safeguard.s7.storage_term': { en: 'Secure storage:', ar: 'التخزين الآمن:' },
  'safeguard.s7.storage_body': {
    en: 'Safeguarding records are stored securely with encryption at rest and in transit. Records are kept separately from general user data.',
    ar: 'تُحفظ سجلّات الحماية بشكلٍ آمنٍ مع التشفير أثناء التخزين والنقل. وتُحفظ السجلّات منفصلةً عن بيانات المستخدمين العامّة.',
  },
  'safeguard.s7.ret_term': { en: 'Retention:', ar: 'مدّة الاحتفاظ:' },
  'safeguard.s7.ret_body': {
    en: "Safeguarding records are retained in accordance with statutory guidance and relevant retention schedules. Records relating to child protection concerns are retained until the individual's 25th birthday, or for 6 years from the date of the last entry (whichever is longer).",
    ar: 'تُحفظ سجلّات الحماية وفقًا للتوجيهات القانونيّة وجداول الاحتفاظ ذات الصلة. وتُحفظ السجلّات المتعلّقة بمخاوف حماية الأطفال حتى عيد ميلاد الفرد الخامس والعشرين، أو لمدّة 6 سنواتٍ من تاريخ آخر إدخال (أيّهما أطول).',
  },
  'safeguard.s7.share_term': { en: 'Information sharing:', ar: 'مشاركة المعلومات:' },
  'safeguard.s7.share_body': {
    en: "Safeguarding information will be shared with external agencies (such as local authority children's services, the police, or the NSPCC) where necessary to protect a child. Data protection legislation is not a barrier to sharing information where failure to do so would place a child at risk.",
    ar: 'ستُشارَك معلومات الحماية مع الجهات الخارجيّة (مثل خدمات الأطفال في السلطة المحليّة أو الشرطة أو NSPCC) عند الضرورة لحماية الطفل. وتشريعات حماية البيانات ليست عائقًا أمام مشاركة المعلومات إذا كان عدم المشاركة سيُعرِّض الطفل للخطر.',
  },
  // §8 Training
  'safeguard.s8.title': {
    en: 'Staff and Contractor Training',
    ar: 'تدريب الموظفين والمتعاقدين',
  },
  'safeguard.s8.intro': {
    en: 'All individuals working on behalf of Upskill Energy Limited who may come into contact with safeguarding matters are required to:',
    ar: 'يُطلب من جميع الأفراد العاملين نيابةً عن Upskill Energy Limited والذين قد يتعاملون مع أمور الحماية:',
  },
  'safeguard.s8.li1': {
    en: 'Complete safeguarding awareness training upon commencement of their role',
    ar: 'إتمام تدريب التوعية بحماية الأطفال عند بدء العمل',
  },
  'safeguard.s8.li2': {
    en: 'Undertake refresher training at least annually, or more frequently where required',
    ar: 'الخضوع لتدريبٍ تنشيطيٍّ مرّةً واحدة سنويًّا على الأقلّ، أو أكثر عند الحاجة',
  },
  'safeguard.s8.li3': {
    en: 'Read and confirm understanding of this safeguarding policy',
    ar: 'قراءة هذه السياسة وتأكيد فهمها',
  },
  'safeguard.s8.li4': {
    en: 'Understand how to recognise signs of abuse, neglect, and exploitation',
    ar: 'فهم كيفيّة التعرّف على علامات الإساءة والإهمال والاستغلال',
  },
  'safeguard.s8.li5': {
    en: 'Know how to report safeguarding concerns through the correct channels',
    ar: 'معرفة كيفيّة الإبلاغ عن مخاوف الحماية عبر القنوات الصحيحة',
  },
  'safeguard.s8.dsl_para': {
    en: 'The DSL receives enhanced safeguarding training, including inter-agency working, in line with Working Together to Safeguard Children and Keeping Children Safe in Education requirements.',
    ar: 'يتلقّى مسؤول الحماية تدريبًا مُعزَّزًا في حماية الأطفال، يشمل العمل المُشترَك بين الجهات، تماشيًا مع متطلّبات "العمل معًا لحماية الأطفال" و"إبقاء الأطفال آمنين في التعليم".',
  },
  'safeguard.s8.records': {
    en: 'Records of all safeguarding training are maintained centrally and reviewed regularly to ensure compliance.',
    ar: 'تُحفظ سجلّات كلّ تدريبات الحماية مركزيًّا وتُراجَع بانتظامٍ لضمان الامتثال.',
  },
  // §9 Review
  'safeguard.s9.title': { en: 'Review Schedule', ar: 'جدول المراجعة' },
  'safeguard.s9.intro': {
    en: 'This safeguarding policy is reviewed and updated at least annually by the Designated Safeguarding Lead, or sooner if:',
    ar: 'تُراجَع هذه السياسة وتُحدَّث مرّةً واحدة سنويًّا على الأقلّ من قِبل مسؤول الحماية المُعيَّن، أو في وقتٍ أقرب إذا:',
  },
  'safeguard.s9.li1': {
    en: 'There are changes to relevant legislation or statutory guidance',
    ar: 'طرأت تغييرات على التشريعات أو التوجيهات القانونيّة ذات الصلة',
  },
  'safeguard.s9.li2': {
    en: 'A safeguarding incident identifies areas for improvement',
    ar: 'كشفت إحدى الحوادث عن جوانب تحتاج إلى تحسين',
  },
  'safeguard.s9.li3': {
    en: 'New features or services are introduced that affect the safety of young users',
    ar: 'استُحدِثت ميزاتٌ أو خدماتٌ جديدة تُؤثِّر على سلامة المستخدمين الصغار',
  },
  'safeguard.s9.li4': {
    en: 'Feedback from users, parents, or external agencies indicates a need for change',
    ar: 'أشارت ملاحظات المستخدمين أو أولياء الأمور أو الجهات الخارجيّة إلى الحاجة إلى تغيير',
  },
  'safeguard.s9.outro': {
    en: 'Each review is documented, and the updated policy is published on the platform and communicated to all staff and contractors.',
    ar: 'تُوثَّق كلّ مراجعة، وتُنشر السياسة المُحدَّثة على المنصّة، ويُبلَّغ بها جميع الموظفين والمتعاقدين.',
  },
  'safeguard.s9.version_label': { en: 'Current version:', ar: 'الإصدار الحالي:' },
  'safeguard.s9.next_review_label': { en: 'Next review due:', ar: 'موعد المراجعة القادمة:' },
  'safeguard.s9.version_value': { en: 'March 2026', ar: 'مارس 2026' },
  'safeguard.s9.next_review_value': { en: 'March 2027', ar: 'مارس 2027' },
  // §10 External contacts
  'safeguard.s10.title': { en: 'External Contacts', ar: 'جهات الاتصال الخارجية' },
  'safeguard.s10.intro': {
    en: 'If you need immediate help or wish to report a concern to an external organisation, the following services are available:',
    ar: 'إذا كنت بحاجةٍ إلى مساعدةٍ فوريّة أو ترغب في الإبلاغ إلى منظّمةٍ خارجيّة، فإنّ الخدمات التالية متاحة:',
  },
  'safeguard.s10.childline.title': { en: 'Childline', ar: 'Childline' },
  'safeguard.s10.childline.body': {
    en: 'Free, confidential helpline for children and young people under 19.',
    ar: 'خطّ مساعدةٍ مجّاني وسرّي للأطفال والشباب دون سنّ 19.',
  },
  'safeguard.s10.nspcc.title': { en: 'NSPCC Helpline', ar: 'خطّ مساعدة NSPCC' },
  'safeguard.s10.nspcc.body': {
    en: 'For adults concerned about the welfare of a child.',
    ar: 'للبالغين الذين يقلقون على رفاه طفل.',
  },
  'safeguard.s10.ceop.title': {
    en: 'CEOP (Child Exploitation and Online Protection)',
    ar: 'CEOP (لمكافحة استغلال الأطفال والحماية الإلكترونية)',
  },
  'safeguard.s10.ceop.body': {
    en: 'Report online sexual abuse or exploitation of children.',
    ar: 'الإبلاغ عن الإساءة الجنسيّة الإلكترونيّة أو استغلال الأطفال.',
  },
  'safeguard.s10.ceop.cta': { en: 'Report to CEOP online', ar: 'أبلِغ CEOP إلكترونيًّا' },
  'safeguard.s10.la.title': {
    en: "Local Authority Children's Services",
    ar: 'خدمات الأطفال في السلطة المحليّة',
  },
  'safeguard.s10.la.body_pre': {
    en: "Contact your local council's children's services team to report concerns about a child in your area. You can find your local authority via",
    ar: 'تواصل مع فريق خدمات الأطفال في مجلسك المحليّ للإبلاغ عن مخاوف بشأن طفل في منطقتك. ويمكنك العثور على السلطة المحليّة عبر',
  },
  'safeguard.s10.la.gov_link': { en: 'GOV.UK', ar: 'GOV.UK' },
  'safeguard.s10.emerg.title': { en: 'Emergency Services', ar: 'خدمات الطوارئ' },
  'safeguard.s10.emerg.body_pre': {
    en: 'If a child is in immediate danger, call',
    ar: 'إذا كان الطفل في خطرٍ مُحدِق، فاتّصل بـ',
  },
  'safeguard.s10.emerg.body_post': { en: 'without delay.', ar: 'دون تأخير.' },
  // Footer
  'safeguard.footer_disclaimer': {
    en: 'This policy is owned and maintained by Upskill Energy Limited, trading as The English Hub. Registered in England and Wales.',
    ar: 'هذه السياسة مملوكة ويُديرها Upskill Energy Limited، التي تُتاجر باسم The English Hub. مُسجَّلة في إنجلترا وويلز.',
  },
  'safeguard.footer.return_home': { en: 'Return to Home', ar: 'رجوع للرئيسية' },

  // ─── Safeguarding report form (Khaleeji — supportive CTAs) ─────────
  'safeguard.report.support_title': {
    en: 'If you need to talk to someone right now',
    ar: 'إذا تبغى تكلّم أحد الحين',
  },
  'safeguard.report.support_subtitle': {
    en: 'These services are free, confidential, and available 24/7.',
    ar: 'الخدمات هذي ببلاش وسرّية ومتاحة على مدار الساعة.',
  },
  'safeguard.report.childline_label': { en: 'Childline', ar: 'Childline' },
  'safeguard.report.childline_note': {
    en: 'Free, confidential helpline for under 19s',
    ar: 'خط مساعدة ببلاش وسرّي لمن هم دون 19',
  },
  'safeguard.report.nspcc_label': { en: 'NSPCC Helpline', ar: 'خط مساعدة NSPCC' },
  'safeguard.report.nspcc_note': {
    en: 'For adults worried about a child',
    ar: 'للكبار اللي قلقانين على طفل',
  },
  'safeguard.report.ceop_label': { en: 'CEOP', ar: 'CEOP' },
  'safeguard.report.ceop_link': { en: 'Report online', ar: 'بلّغ عبر النت' },
  'safeguard.report.ceop_note': {
    en: 'Report online abuse or exploitation',
    ar: 'بلّغ عن إساءة أو استغلال عبر النت',
  },
  'safeguard.report.confirm_heading': {
    en: "You've done the right thing by speaking up",
    ar: 'أحسنت لمّا تكلّمت',
  },
  'safeguard.report.confirm_body': {
    en: 'Thank you for telling us. Your report has been received and our safeguarding team will look at it carefully.',
    ar: 'شكراً إنك خبّرتنا. بلاغك وصل وفريق الحماية مالنا بيشوفه بتركيز.',
  },
  'safeguard.report.ref_label': { en: 'Your reference number', ar: 'رقم البلاغ مالك' },
  'safeguard.report.ref_note': {
    en: 'Keep this safe in case you need to follow up.',
    ar: 'احفظه عندك زين عسى تحتاج تتابع.',
  },
  'safeguard.report.next.title': { en: 'What happens next?', ar: 'شنو بيصير بعدين؟' },
  'safeguard.report.next.body': {
    en: 'A member of our safeguarding team will review your report. If you left contact details, we may get in touch to follow up. If this is urgent, please contact one of the services below directly.',
    ar: 'فيه شخص من فريق الحماية بيراجع بلاغك. إذا تركت بياناتك، ممكن نتواصل وياك للمتابعة. وإذا الموضوع عاجل، تواصل مباشرة مع إحدى الجهات اللي تحت.',
  },
  'safeguard.report.return_home': { en: 'Return to Home', ar: 'رجوع للرئيسية' },
  'safeguard.report.page_heading': {
    en: 'Need help or worried about something?',
    ar: 'تحتاج مساعدة أو في شي يقلقك؟',
  },
  'safeguard.report.page_subhead': {
    en: "Whether it's about you or someone else, we're here to help. You can tell us as much or as little as you feel comfortable with. You don't have to give your name.",
    ar: 'سواء عنك أو عن شخص ثاني، إحنا هني لنساعدك. تقدر تكتب اللي يريحك — قليل أو وايد. وما يلزم تعطي اسمك.',
  },
  'safeguard.report.reassure_title': { en: 'Speaking up takes courage', ar: 'الكلام شجاعة' },
  'safeguard.report.reassure_body': {
    en: "Whatever you're going through, you deserve support. Everything you share here will be treated seriously and confidentially by our safeguarding team.",
    ar: 'مهما اللي تعيشه، تستاهل دعم. وكل شي تكتبه هني بيتعامل وياه فريق الحماية بجدّ وسرّية.',
  },
  'safeguard.report.field.type_legend': {
    en: 'What best describes your concern?',
    ar: 'شنو يصف اللي يقلقك أكثر؟',
  },
  'safeguard.report.field.type.worried_self': {
    en: "I'm worried about myself",
    ar: 'أنا قلقان على نفسي',
  },
  'safeguard.report.field.type.worried_other': {
    en: "I'm worried about someone else",
    ar: 'أنا قلقان على شخص ثاني',
  },
  'safeguard.report.field.type.platform': {
    en: "I want to report something I've seen on the platform",
    ar: 'أبغى أبلّغ عن شي شفته على المنصة',
  },
  'safeguard.report.field.type.other': { en: 'Other concern', ar: 'شي ثاني' },
  'safeguard.report.field.description_label': {
    en: "Tell us what happened or what you're worried about",
    ar: 'خبّرنا شنو صار أو شنو اللي يقلقك',
  },
  'safeguard.report.field.description_help': {
    en: 'Take your time. Share as much or as little as you feel comfortable with.',
    ar: 'خذ وقتك. اكتب اللي يريحك — قليل أو وايد.',
  },
  'safeguard.report.field.description_placeholder': {
    en: 'You can write freely here...',
    ar: 'تقدر تكتب بحرية هني…',
  },
  'safeguard.report.your_details': { en: 'Your details', ar: 'بياناتك' },
  'safeguard.report.optional': { en: '(optional)', ar: '(اختياري)' },
  'safeguard.report.your_details_help': {
    en: 'You can report anonymously. If you leave your details, we can follow up with you.',
    ar: 'تقدر تبلّغ بدون اسم. وإذا تركت بياناتك، نقدر نتابع وياك.',
  },
  'safeguard.report.field.name_label': { en: 'Your name', ar: 'اسمك' },
  'safeguard.report.field.name_placeholder': { en: 'Optional', ar: 'اختياري' },
  'safeguard.report.field.contact_label': {
    en: 'Email or phone number',
    ar: 'الإيميل أو رقم الموبايل',
  },
  'safeguard.report.field.contact_placeholder': { en: 'Optional', ar: 'اختياري' },
  'safeguard.report.err.select_type': {
    en: 'Please select what your concern is about.',
    ar: 'يا ليت تختار شنو موضوع البلاغ.',
  },
  'safeguard.report.err.description_required': {
    en: "Please tell us what happened or what you're worried about.",
    ar: 'يا ليت تخبّرنا شنو صار أو شنو اللي يقلقك.',
  },
  'safeguard.report.err.generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية لو سمحت.',
  },
  'safeguard.report.confidential_footer': {
    en: 'Your report will be handled confidentially by our designated safeguarding lead.',
    ar: 'بلاغك بيتعامل وياه مسؤول الحماية بسرّية تامّة.',
  },

  // ─── /revision (revision_page.*) ───────────────────────────────────
  'revision_page.hero.badge_default': { en: 'GCSE English Revision', ar: 'مراجعة GCSE English' },
  'revision_page.hero.heading_suffix': { en: 'Hub', ar: 'Hub' },
  'revision_page.hero.heading_prefix_generic': { en: 'Your', ar: 'مالك' },
  'revision_page.hero.heading_prefix_board': { en: 'Your', ar: 'مالك' },
  'revision_page.hero.blurb_default': {
    en: 'Your unified home for {board} English. Revision guides, AI study tools, progress tracking, and exam technique — all built around your specification.',
    ar: 'بيتك الموحَّد لـ{board} English. أدلة مراجعة، أدوات دراسة بالذكاء الاصطناعي، تتبّع التقدّم، وتقنيات الامتحان — كله مبني على المنهج مالك.',
  },
  'revision_page.hero.blurb_cambridge': {
    en: 'Your unified home for {board} First Language English. Revision, study tools, progress tracking, and exam technique — all built around your specification.',
    ar: 'بيتك الموحَّد لـ{board} First Language English. مراجعة، أدوات دراسة، تتبّع التقدّم، وتقنيات الامتحان — كله مبني على المنهج مالك.',
  },
  'revision_page.stats.subjects': { en: 'Subjects', ar: 'المواد' },
  'revision_page.stats.resources': { en: 'Resources', ar: 'المصادر' },
  'revision_page.stats.flashcards': { en: 'Flashcards', ar: 'بطاقات تعليمية' },
  'revision_page.stats.quizzes': { en: 'Quizzes', ar: 'اختبارات' },
  'revision_page.snapshot.aria': { en: 'Your progress snapshot', ar: 'لمحة عن التقدّم مالك' },
  'revision_page.snapshot.streak.label': { en: 'Streak', ar: 'سلسلة الدراسة' },
  'revision_page.snapshot.streak.title': { en: 'Your study streak', ar: 'سلسلة الدراسة مالك' },
  'revision_page.snapshot.streak.body': {
    en: 'Keep going daily — every session you complete on a quiz, set text, or mock exam builds your streak.',
    ar: 'كمّل يومي — كل جلسة تخلّصها على اختبار، نص مقرَّر، أو امتحان تجريبي تبني السلسلة مالك.',
  },
  'revision_page.snapshot.streak.cta': { en: 'View full analytics', ar: 'شوف التحليلات الكاملة' },
  'revision_page.snapshot.progress.label': { en: 'Progress', ar: 'التقدّم' },
  'revision_page.snapshot.progress.title': { en: '{board} coverage', ar: 'تغطية {board}' },
  'revision_page.snapshot.progress.body': {
    en: "Track how much of the {board} syllabus you've covered and where you still have gaps.",
    ar: 'تتبّع كم غطّيت من منهج {board} ووين باقي عندك ثغرات.',
  },
  'revision_page.snapshot.progress.cta': { en: "See what's next", ar: 'شوف شنو الجاي' },
  'revision_page.snapshot.ai.label': { en: 'AI feedback', ar: 'ملاحظات الذكاء الاصطناعي' },
  'revision_page.snapshot.ai.title': { en: 'Latest marked work', ar: 'آخر شغل مصحَّح' },
  'revision_page.snapshot.ai.body': {
    en: 'AI grades on your recent essays, with the top three improvements to take forward.',
    ar: 'درجات الذكاء الاصطناعي على آخر مقالاتك، مع أهم ثلاث نقاط تحسين تاخذها معك.',
  },
  'revision_page.snapshot.ai.cta': { en: 'Open feedback', ar: 'افتح الملاحظات' },
  'revision_page.study_plan.badge': { en: 'Personalised for {board}', ar: 'مفصّل لـ{board}' },
  'revision_page.study_plan.title': { en: 'Build your study plan', ar: 'سوِّ خطة الدراسة مالك' },
  'revision_page.study_plan.body': {
    en: 'Answer a few quick questions and get a week-by-week revision plan tailored to your exam date, target grade, and weakest area — using {board} texts and papers.',
    ar: 'جاوب على كم سؤال سريع وتاخذ خطة مراجعة أسبوع بأسبوع مفصّلة على تاريخ امتحانك، الدرجة المستهدفة، وأضعف مجال — باستخدام نصوص وأوراق {board}.',
  },
  'revision_page.study_plan.cta': { en: 'Start diagnostic', ar: 'ابدأ التشخيص' },
  'revision_page.sections.heading': { en: 'Explore Sections', ar: 'استكشف الأقسام' },
  'revision_page.sections.for_board_badge': { en: 'For {board}', ar: 'لـ{board}' },
  'revision_page.sections.start_revising': { en: 'Start revising', ar: 'ابدأ المراجعة' },
  'revision_page.sections.prepares_for': { en: 'Prepares for {paper}', ar: 'يحضّر لـ{paper}' },
  'revision_page.paper.lit_lang': { en: 'Lit + Lang', ar: 'Lit + Lang' },
  'revision_page.paper.lit': { en: 'Literature', ar: 'Literature' },
  'revision_page.paper.lang': { en: 'Language', ar: 'Language' },
  'revision_page.igcse.title': { en: 'IGCSE Resources', ar: 'مصادر IGCSE' },
  'revision_page.igcse.body': {
    en: 'We have dedicated guides, exam papers, and walkthroughs for {board}.',
    ar: 'عندنا أدلة مخصّصة، أوراق امتحانات، وشروحات لـ{board}.',
  },
  'revision_page.igcse.body_fallback': { en: 'your IGCSE specification', ar: 'منهج IGCSE مالك' },
  'revision_page.igcse.cta': { en: 'Open IGCSE hub', ar: 'افتح هاب IGCSE' },
  'revision_page.toolkit.heading': { en: 'Your Toolkit', ar: 'الأدوات مالك' },
  'revision_page.toolkit.open_tool': { en: 'Open tool', ar: 'افتح الأداة' },
  'revision_page.analytics.badge_new': { en: 'New', ar: 'جديد' },
  'revision_page.analytics.title': { en: 'Your Analytics', ar: 'التحليلات مالك' },
  'revision_page.analytics.body': {
    en: 'Deep-dive dashboards showing time studied, accuracy by topic, predicted grade trajectory, and where to focus next.',
    ar: 'لوحات تفصيلية تبيّن وقت الدراسة، الدقّة حسب الموضوع، مسار الدرجة المتوقَّعة، ووين تركّز الجاي.',
  },
  'revision_page.analytics.cta': { en: 'Open analytics', ar: 'افتح التحليلات' },
  'revision_page.featured.badge': { en: 'Featured for {board}', ar: 'مميَّز لـ{board}' },
  'revision_page.featured.by': {
    en: 'by {author}. One of the most-studied texts on your specification.',
    ar: 'بقلم {author}. من أكثر النصوص اللي يدرسونها في المنهج مالك.',
  },
  'revision_page.featured.cta': { en: 'Open study guide', ar: 'افتح دليل الدراسة' },
  'revision_page.motivation.title': {
    en: 'Consistent revision beats cramming every time',
    ar: 'المراجعة المنتظمة تتغلّب على الحشو دايماً',
  },
  'revision_page.motivation.body': {
    en: 'Students who revise for 20 minutes a day outperform those who cram for hours before the exam. Start with one section above and build the habit.',
    ar: 'الطلاب اللي يراجعون ٢٠ دقيقة باليوم يتفوّقون على اللي يحشّون ساعات قبل الامتحان. ابدأ بقسم وحد فوق وابني العادة.',
  },
  'revision_page.motivation.cta': { en: 'Start a quick session', ar: 'ابدأ جلسة سريعة' },
  'revision_page.section.poetry.title': { en: 'Poetry', ar: 'الشعر' },
  'revision_page.section.poetry.desc': {
    en: 'Interactive analysis of every anthology poem. Annotations, comparisons, and practice questions.',
    ar: 'تحليل تفاعلي لكل قصيدة من المجموعة الشعرية. شروحات، مقارنات، وأسئلة تطبيقية.',
  },
  'revision_page.section.poetry.stats': { en: '30+ poems', ar: '٣٠+ قصيدة' },
  'revision_page.section.poetry.tag': { en: 'Popular', ar: 'الأكثر شعبية' },
  'revision_page.section.texts.title': { en: 'Set Texts', ar: 'النصوص المقرَّرة' },
  'revision_page.section.texts.desc': {
    en: 'In-depth study guides for Shakespeare, 19th-century novels, and modern texts with reading tracker.',
    ar: 'أدلة دراسة مفصّلة لـShakespeare وروايات القرن التاسع عشر والنصوص الحديثة مع متتبّع القراءة.',
  },
  'revision_page.section.texts.stats': { en: '20+ texts', ar: '٢٠+ نص' },
  'revision_page.section.language.title': { en: 'Language Skills', ar: 'مهارات اللغة' },
  'revision_page.section.language.desc': {
    en: 'Reading comprehension, creative writing, transactional writing, and SPaG mastery.',
    ar: 'القراءة والاستيعاب، الكتابة الإبداعية، الكتابة الوظيفية، وإتقان SPaG.',
  },
  'revision_page.section.language.stats': { en: '4 skill areas', ar: '٤ مجالات مهارية' },
  'revision_page.section.flashcards.title': { en: 'Flashcards', ar: 'بطاقات تعليمية' },
  'revision_page.section.flashcards.desc': {
    en: 'Smart review flashcards for quotes, terminology, and key concepts. Study smarter, not harder.',
    ar: 'بطاقات مراجعة ذكية للاقتباسات والمصطلحات والمفاهيم الأساسية. ادرس بذكاء، مو بتعب.',
  },
  'revision_page.section.flashcards.stats': { en: '500+ cards', ar: '٥٠٠+ بطاقة' },
  'revision_page.section.flashcards.tag': { en: 'New', ar: 'جديد' },
  'revision_page.section.exam_technique.title': { en: 'Exam Technique', ar: 'تقنيات الامتحان' },
  'revision_page.section.exam_technique.desc': {
    en: 'Essay structures, timing strategies, question types, and marking guide breakdowns for every paper.',
    ar: 'هيكل المقالات، استراتيجيات الوقت، أنواع الأسئلة، وتحليل دليل التصحيح لكل ورقة.',
  },
  'revision_page.section.exam_technique.stats': { en: '12 guides', ar: '١٢ دليل' },
  'revision_page.section.grade_targets.title': { en: 'Grade Targets', ar: 'الدرجات المستهدفة' },
  'revision_page.section.grade_targets.desc': {
    en: 'Personalised revision plans based on your target grade. Know exactly what to focus on.',
    ar: 'خطط مراجعة مفصّلة على الدرجة المستهدفة مالك. تعرف بالضبط شنو تركّز عليه.',
  },
  'revision_page.section.grade_targets.stats': { en: 'Grades 1-9', ar: 'الدرجات ١-٩' },
  'revision_page.section.quiz.title': { en: 'Quick Quizzes', ar: 'اختبارات سريعة' },
  'revision_page.section.quiz.desc': {
    en: 'Test yourself with timed quizzes on any topic. Instant feedback and progress tracking.',
    ar: 'اختبر نفسك بكويزات مؤقَّتة على أي موضوع. ملاحظات فورية وتتبّع للتقدّم.',
  },
  'revision_page.section.quiz.stats': { en: '100+ quizzes', ar: '١٠٠+ اختبار' },
  'revision_page.section.reading_assessment.title': {
    en: 'Reading Assessment',
    ar: 'تقييم القراءة',
  },
  'revision_page.section.reading_assessment.desc': {
    en: 'Timed reading tests with extracts and mark schemes. Benchmark your comprehension against GCSE/IGCSE standards.',
    ar: 'اختبارات قراءة مؤقَّتة مع مقتطفات ومخططات تصحيح. قارن استيعابك مع معايير GCSE/IGCSE.',
  },
  'revision_page.section.reading_assessment.stats': { en: 'Diagnostic', ar: 'تشخيصي' },
  'revision_page.section.mock_exams.title': { en: 'Mock Exams', ar: 'امتحانات تجريبية' },
  'revision_page.section.mock_exams.desc': {
    en: 'Full timed mock papers for every board with examiner-grade feedback. Build exam stamina before the real thing.',
    ar: 'أوراق امتحان كاملة مؤقَّتة لكل بورد مع ملاحظات بمستوى الممتحن. ابني قدرة التحمّل قبل الامتحان الحقيقي.',
  },
  'revision_page.section.mock_exams.stats': { en: 'Full papers', ar: 'أوراق كاملة' },
  'revision_page.section.practice.title': { en: 'Practice', ar: 'تطبيق' },
  'revision_page.section.practice.desc': {
    en: 'Bite-sized practice tasks for every skill — analysis paragraphs, comparisons, creative writing prompts.',
    ar: 'مهام تطبيقية صغيرة لكل مهارة — فقرات تحليل، مقارنات، ومواضيع كتابة إبداعية.',
  },
  'revision_page.section.practice.stats': { en: 'Daily drills', ar: 'تمارين يومية' },
  'revision_page.section.games.title': { en: 'Games', ar: 'ألعاب' },
  'revision_page.section.games.desc': {
    en: 'Vocabulary, quote-match and terminology games — learn faster by playing.',
    ar: 'ألعاب مفردات ومطابقة اقتباسات ومصطلحات — تعلّم أسرع باللعب.',
  },
  'revision_page.section.games.stats': { en: 'Play to learn', ar: 'العب وتعلّم' },
  'revision_page.section.resources.title': { en: 'Resources Hub', ar: 'هاب المصادر' },
  'revision_page.section.resources.desc': {
    en: 'The full library: poetry guides, set-text packs, exam papers, themes, context, glossary and more.',
    ar: 'المكتبة الكاملة: أدلة شعر، حزم نصوص مقرَّرة، أوراق امتحانات، مواضيع، سياق، قاموس، وأكثر.',
  },
  'revision_page.section.resources.stats': { en: '300+ guides', ar: '٣٠٠+ دليل' },
  'revision_page.section.revision_notes.title': { en: 'Revision Notes', ar: 'ملخّصات المراجعة' },
  'revision_page.section.revision_notes.desc': {
    en: 'Concise per-text revision notes you can skim before an exam — every set text, every key topic.',
    ar: 'ملخّصات مراجعة مختصرة لكل نص تقدر تقراها بسرعة قبل الامتحان — كل نص مقرَّر، كل موضوع أساسي.',
  },
  'revision_page.section.revision_notes.stats': { en: '20+ texts', ar: '٢٠+ نص' },
  'revision_page.section.model_answers.title': { en: 'Model Answers', ar: 'الإجابات النموذجية' },
  'revision_page.section.model_answers.desc': {
    en: 'Top-grade exemplar answers for literature essays, language analysis and creative writing tasks.',
    ar: 'إجابات نموذجية بأعلى الدرجات لمقالات Literature وتحليل Language ومهام الكتابة الإبداعية.',
  },
  'revision_page.section.model_answers.stats': { en: 'Grade 7-9', ar: 'الدرجات ٧-٩' },
  'revision_page.section.comparison.title': {
    en: 'Comparison Essay Guide',
    ar: 'دليل مقالة المقارنة',
  },
  'revision_page.section.comparison.desc': {
    en: 'Step-by-step structure, sentence stems and worked examples for poetry and unseen comparison questions.',
    ar: 'هيكل خطوة بخطوة، جمل افتتاحية، وأمثلة محلولة لأسئلة مقارنة الشعر والنصوص غير المرئية.',
  },
  'revision_page.section.comparison.stats': { en: 'Structure + stems', ar: 'هيكل + جمل افتتاحية' },
  'revision_page.section.vocabulary.title': { en: 'Vocabulary', ar: 'المفردات' },
  'revision_page.section.vocabulary.desc': {
    en: 'Academic, analytical and descriptive word banks to upgrade your essays and creative writing.',
    ar: 'بنوك مفردات أكاديمية وتحليلية ووصفية تطوّر مقالاتك والكتابة الإبداعية مالك.',
  },
  'revision_page.section.vocabulary.stats': { en: '1000+ words', ar: '١٠٠٠+ كلمة' },
  'revision_page.section.writing_skills.title': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'revision_page.section.writing_skills.desc': {
    en: 'Creative, analytical, persuasive and grammar guides — the craft skills behind every paper.',
    ar: 'أدلة الكتابة الإبداعية والتحليلية والإقناعية والقواعد — المهارات الحرفية وراء كل ورقة.',
  },
  'revision_page.section.writing_skills.stats': { en: '4 skill areas', ar: '٤ مجالات مهارية' },
  'revision_page.section.common_errors.title': { en: 'Common Errors', ar: 'الأخطاء الشائعة' },
  'revision_page.section.common_errors.desc': {
    en: '30 mistakes that cost marks — misquotations, wrong contexts, anthology version mix-ups. Verified against board specs.',
    ar: '٣٠ غلطة تكلّفك درجات — اقتباسات غلط، سياقات خطأ، خلط بين نسخ المجموعات. مدقَّقة مع مواصفات البورد.',
  },
  'revision_page.section.common_errors.stats': { en: '30 verified flags', ar: '٣٠ تنبيه مدقَّق' },
  'revision_page.section.common_errors.tag': { en: 'New', ar: 'جديد' },
  'revision_page.toolkit.revision_builder.title': { en: 'Revision Builder', ar: 'منشئ المراجعة' },
  'revision_page.toolkit.revision_builder.desc': {
    en: 'Generate AI revision notes tailored to your weak areas, target grade, and study history.',
    ar: 'سوِّ ملخّصات مراجعة بالذكاء الاصطناعي مفصّلة على نقاط ضعفك، الدرجة المستهدفة، وتاريخ الدراسة.',
  },
  'revision_page.toolkit.revision_builder.stats': { en: 'AI-powered', ar: 'بالذكاء الاصطناعي' },
  'revision_page.toolkit.revision_builder.tag': { en: 'AI', ar: 'AI' },
  'revision_page.toolkit.test_builder.title': { en: 'Test Builder', ar: 'منشئ الاختبارات' },
  'revision_page.toolkit.test_builder.desc': {
    en: "Create custom tests from your board's texts and topics, auto-scored with grade equivalents.",
    ar: 'سوِّ اختبارات مخصّصة من نصوص ومواضيع البورد مالك، مصحَّحة تلقائياً مع ما يعادلها من درجات.',
  },
  'revision_page.toolkit.test_builder.stats': { en: 'Custom tests', ar: 'اختبارات مخصّصة' },
  'revision_page.toolkit.test_builder.tag': { en: 'AI', ar: 'AI' },
  'revision_page.toolkit.personalised.title': { en: 'Personalised Revision', ar: 'مراجعة مخصّصة' },
  'revision_page.toolkit.personalised.desc': {
    en: 'A revision guide built from your data — targets weakest areas, then stretches you higher.',
    ar: 'دليل مراجعة مبني من بياناتك — يستهدف نقاط الضعف، ثم يرفعك أعلى.',
  },
  'revision_page.toolkit.personalised.stats': { en: 'Data-driven', ar: 'مبني على البيانات' },
  'revision_page.toolkit.personalised.tag': { en: 'New', ar: 'جديد' },
  'revision_page.toolkit.my_materials.title': { en: 'My Materials', ar: 'الموادّ مالي' },
  'revision_page.toolkit.my_materials.desc': {
    en: 'Every custom test, revision note, and quote bank you have saved, in one searchable place.',
    ar: 'كل اختبار مخصّص وملخّص مراجعة وبنك اقتباسات حفظته، في مكان وحد تقدر تدوّر فيه.',
  },
  'revision_page.toolkit.my_materials.stats': { en: 'Your library', ar: 'المكتبة مالك' },
  'revision_page.toolkit.progress.title': { en: 'Progress', ar: 'التقدّم' },
  'revision_page.toolkit.progress.desc': {
    en: 'Track scores, study streaks, and predicted grades based on everything you have done.',
    ar: 'تتبّع الدرجات، سلاسل الدراسة، والدرجات المتوقَّعة بناءً على كل اللي سوّيته.',
  },
  'revision_page.toolkit.progress.stats': { en: 'Grade predictor', ar: 'متنبّئ الدرجة' },

  // ─── /resources/vocabulary (vocab.*) ───────────────────────────────
  'vocab.hero.eyebrow': { en: 'Resources', ar: 'المصادر' },
  'vocab.hero.title': { en: 'Vocabulary Builder', ar: 'منشئ المفردات' },
  'vocab.hero.subtitle': {
    en: 'Upgrade your vocabulary for every type of GCSE English writing. Academic essays, creative pieces, literary analysis, and persuasive texts — find the right word every time.',
    ar: 'طوّر المفردات مالك لكل نوع كتابة GCSE English. مقالات أكاديمية، نصوص إبداعية، تحليل أدبي، ونصوص إقناعية — لقّ الكلمة الصح كل مرة.',
  },
  'vocab.cta.academic': { en: 'Academic Words', ar: 'كلمات أكاديمية' },
  'vocab.cta.descriptive': { en: 'Descriptive Words', ar: 'كلمات وصفية' },
  'vocab.cta.analytical': { en: 'Analytical Words', ar: 'كلمات تحليلية' },
  'vocab.category.academic.title': { en: 'Academic Vocabulary', ar: 'المفردات الأكاديمية' },
  'vocab.category.academic.desc': {
    en: "50+ tier 2 and tier 3 words for essay writing. Organised by function — analysis, evaluation, comparison, and description. Replace overused words like 'good', 'bad', and 'shows' with sophisticated alternatives.",
    ar: '٥٠+ كلمة من tier 2 وtier 3 للمقالات. مرتَّبة حسب الوظيفة — تحليل، تقييم، مقارنة، ووصف. غيّر الكلمات المتكرّرة مثل good وbad وshows ببدائل أرقى.',
  },
  'vocab.category.academic.count': { en: '50+', ar: '٥٠+' },
  'vocab.category.academic.topic.analysis': { en: 'Analysis words', ar: 'كلمات التحليل' },
  'vocab.category.academic.topic.evaluation': { en: 'Evaluation words', ar: 'كلمات التقييم' },
  'vocab.category.academic.topic.comparison': { en: 'Comparison words', ar: 'كلمات المقارنة' },
  'vocab.category.academic.topic.description': { en: 'Description words', ar: 'كلمات الوصف' },
  'vocab.category.academic.topic.replace': { en: 'Words to replace', ar: 'كلمات تستبدلها' },
  'vocab.category.descriptive.title': { en: 'Descriptive Vocabulary', ar: 'المفردات الوصفية' },
  'vocab.category.descriptive.desc': {
    en: 'Build a rich bank of sensory, emotional, and atmospheric vocabulary for creative writing. 200+ words organised by category — senses, emotions, weather, character, and setting.',
    ar: 'ابني بنك غني من المفردات الحسّية والعاطفية والجوّية للكتابة الإبداعية. ٢٠٠+ كلمة مرتَّبة حسب الفئة — الحواس، المشاعر، الجو، الشخصية، والمكان.',
  },
  'vocab.category.descriptive.count': { en: '200+', ar: '٢٠٠+' },
  'vocab.category.descriptive.topic.sensory': { en: 'Sensory vocabulary', ar: 'مفردات حسّية' },
  'vocab.category.descriptive.topic.emotion': { en: 'Emotion vocabulary', ar: 'مفردات المشاعر' },
  'vocab.category.descriptive.topic.weather': { en: 'Weather & atmosphere', ar: 'الجو والأجواء' },
  'vocab.category.descriptive.topic.character': { en: 'Character description', ar: 'وصف الشخصية' },
  'vocab.category.descriptive.topic.setting': { en: 'Setting description', ar: 'وصف المكان' },
  'vocab.category.analytical.title': { en: 'Analytical Vocabulary', ar: 'المفردات التحليلية' },
  'vocab.category.analytical.desc': {
    en: "Master the language of literary and linguistic analysis. Evaluative adverbs, tentative phrasing, comparative connectives, and precise vocabulary for discussing writer's methods.",
    ar: 'أتقن لغة التحليل الأدبي واللغوي. ظروف تقييم، صياغة احترازية، روابط مقارنة، ومفردات دقيقة لمناقشة أساليب الكاتب.',
  },
  'vocab.category.analytical.count': { en: '80+', ar: '٨٠+' },
  'vocab.category.analytical.topic.evaluative': { en: 'Evaluative adverbs', ar: 'ظروف التقييم' },
  'vocab.category.analytical.topic.tentative': { en: 'Tentative language', ar: 'اللغة الاحترازية' },
  'vocab.category.analytical.topic.comparative': {
    en: 'Comparative connectives',
    ar: 'روابط المقارنة',
  },
  'vocab.category.analytical.topic.methods': {
    en: "Writer's methods vocabulary",
    ar: 'مفردات أساليب الكاتب',
  },
  'vocab.category.persuasive.title': { en: 'Persuasive Vocabulary', ar: 'المفردات الإقناعية' },
  'vocab.category.persuasive.desc': {
    en: 'Powerful language for argumentative and persuasive writing. Emotive vocabulary, rhetorical intensifiers, and authoritative phrasing to make your writing convincing.',
    ar: 'لغة قوية للكتابة الجدلية والإقناعية. مفردات عاطفية، مكثّفات بلاغية، وصياغة مرجعية تخلّي كتابتك مقنعة.',
  },
  'vocab.category.persuasive.count': { en: '40+', ar: '٤٠+' },
  'vocab.category.persuasive.topic.emotive': { en: 'Emotive language', ar: 'اللغة العاطفية' },
  'vocab.category.persuasive.topic.intensifiers': {
    en: 'Rhetorical intensifiers',
    ar: 'المكثّفات البلاغية',
  },
  'vocab.category.persuasive.topic.authoritative': {
    en: 'Authoritative phrasing',
    ar: 'الصياغة المرجعية',
  },
  'vocab.category.persuasive.topic.connectives': {
    en: 'Connectives for argument',
    ar: 'روابط الحجاج',
  },
  'vocab.card.count_suffix': { en: 'words', ar: 'كلمة' },
  'vocab.card.explore_cta': { en: 'Explore vocabulary', ar: 'استكشف المفردات' },
  'vocab.upgrade.title': { en: 'Upgrade Your Vocabulary', ar: 'طوِّر المفردات مالك' },
  'vocab.upgrade.subtitle': {
    en: 'Stop using overused words. Search below or browse the table to find more sophisticated alternatives that will impress examiners.',
    ar: 'بطّل تستخدم الكلمات المتكرّرة. دوّر تحت أو تصفّح الجدول وألقَ بدائل أرقى تعجب الممتحنين.',
  },
  'vocab.upgrade.search_placeholder': {
    en: 'Search for a word to upgrade...',
    ar: 'دوّر كلمة تبغى تطوّرها…',
  },
  'vocab.upgrade.no_matches': {
    en: 'No matches found. Try searching for a different word.',
    ar: 'ما لقينا نتائج. جرّب كلمة ثانية.',
  },
  'vocab.continue.heading': { en: 'Continue exploring', ar: 'كمّل الاستكشاف' },
  'vocab.continue.writing_skills.title': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'vocab.continue.writing_skills.desc': {
    en: 'Master creative, persuasive, and analytical writing.',
    ar: 'أتقن الكتابة الإبداعية والإقناعية والتحليلية.',
  },
  'vocab.continue.techniques.title': { en: 'Techniques Reference', ar: 'مرجع التقنيات' },
  'vocab.continue.techniques.desc': {
    en: '60+ language and structural devices explained.',
    ar: '٦٠+ أداة لغوية وبنائية مع شرحها.',
  },
  'vocab.continue.all.title': { en: 'All Resources', ar: 'كل المصادر' },
  'vocab.continue.all.desc': {
    en: 'Browse all revision resources.',
    ar: 'تصفّح كل مصادر المراجعة.',
  },

  // ─── /revision/study-plan (study_page.*) ───────────────────────────
  'study_page.loading': { en: 'Loading your study plan…', ar: 'نحمّل خطة الدراسة مالك… لحظة' },
  'study_page.title': { en: 'Build your GCSE study plan', ar: 'سوِّ خطة دراسة GCSE مالك' },

  // ─── /dashboard ("Your Hub") (your_hub.*) ─────────────────────────
  'your_hub.greeting.morning': { en: 'Good morning', ar: 'صباح الخير' },
  'your_hub.greeting.afternoon': { en: 'Good afternoon', ar: 'مساء الخير' },
  'your_hub.greeting.evening': { en: 'Good evening', ar: 'مساء الخير' },
  'your_hub.cta.title': { en: 'Your Hub', ar: 'Hub مالك' },
  'your_hub.cta.badge': { en: 'Revision · Toolkit · Analytics', ar: 'مراجعة · أدوات · تحليلات' },
  'your_hub.cta.blurb': {
    en: 'Your unified revision home — guides, AI tools, progress, and exam technique.',
    ar: 'بيت المراجعة الموحَّد مالك — أدلة، أدوات ذكاء اصطناعي، تقدّم، وتقنيات الامتحان.',
  },

  // ─── /for-students (student.*) ─────────────────────────────────────
  'student.badge': { en: 'For students', ar: 'للطلاب' },
  'student.hero.title_pre': {
    en: 'Your GCSE or IGCSE English revision,',
    ar: 'مراجعة GCSE أو IGCSE English مالك،',
  },
  'student.hero.title_emph': { en: 'in one place', ar: 'في مكان وحد' },
  'student.hero.subtitle': {
    en: 'Personalised revision built around your exam board. AI-marked essays, anthology guides, mock papers and grade tracking.',
    ar: 'مراجعة مخصّصة على بورد الامتحان مالك. مقالات مصحَّحة بالذكاء الاصطناعي، أدلة المجموعات الشعرية، أوراق تجريبية، وتتبّع الدرجات.',
  },
  'student.cta.start_free': { en: 'Start free — no card', ar: 'ابدأ ببلاش — بدون كرت' },
  'student.cta.see_pricing': { en: 'See pricing', ar: 'شوف الأسعار' },
  'student.feature.all_in_one.title': { en: 'All-in-one learning', ar: 'تعلّم متكامل' },
  'student.feature.all_in_one.desc': {
    en: 'Lessons, practice, mock exams, and revision notes for every skill — reading, writing, listening, speaking.',
    ar: 'دروس، تطبيق، امتحانات تجريبية، وملخّصات مراجعة لكل مهارة — قراءة، كتابة، استماع، تحدّث.',
  },
  'student.feature.personalised.title': { en: 'Personalised learning', ar: 'تعلّم مخصّص' },
  'student.feature.personalised.desc': {
    en: 'Smart recommendations that adapt to where you are and push toward the grade you want.',
    ar: 'توصيات ذكية تتكيّف مع وين انت ودافعتك للدرجة اللي تبغاها.',
  },
  'student.feature.track.title': { en: 'Track & achieve', ar: 'تتبّع وحقِّق' },
  'student.feature.track.desc': {
    en: 'See your progress week-by-week. Set goals. Celebrate every win with predicted-grade tracking.',
    ar: 'شوف تقدّمك أسبوع بأسبوع. حدّد أهدافك. احتفل بكل إنجاز مع تتبّع الدرجة المتوقَّعة.',
  },
  'student.feature.real_world.title': { en: 'Real world, real you', ar: 'عالم حقيقي، انت الحقيقي' },
  'student.feature.real_world.desc': {
    en: "Build the English confidence you'll actually use at school, university, work, and everywhere after.",
    ar: 'ابني الثقة في الإنجليزي اللي بتستخدمها فعلاً في المدرسة والجامعة والشغل وكل مكان بعدها.',
  },
  'student.outcome.better_grades': { en: 'Better grades', ar: 'درجات أحسن' },
  'student.outcome.confidence': { en: 'More confidence', ar: 'ثقة أكثر' },
  'student.outcome.global': { en: 'Global opportunities', ar: 'فرص عالمية' },
  'student.outcome.future': { en: 'Your future. Your choice.', ar: 'مستقبلك. اختيارك.' },
  'student.usp.title': {
    en: 'A complete, personalised learning hub',
    ar: 'هاب تعلّم متكامل ومخصّص',
  },
  'student.usp.body': {
    en: 'GCSE and IGCSE English revision, AI marked against the AO rubric.',
    ar: 'مراجعة GCSE وIGCSE English، مصحَّحة بالذكاء الاصطناعي على معايير AO.',
  },
  'student.faq.heading': { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
  'student.faq.boards.q': { en: 'What exam boards do you cover?', ar: 'أي بوردات امتحان تغطّون؟' },
  'student.faq.boards.a': {
    en: 'We cover AQA, Edexcel, OCR and WJEC Eduqas for GCSE English Language and Literature, plus Cambridge IGCSE and Edexcel IGCSE Literature and Language A.',
    ar: 'نغطّي AQA وEdexcel وOCR وWJEC Eduqas لـGCSE English Language وLiterature، بالإضافة لـCambridge IGCSE وEdexcel IGCSE Literature وLanguage A.',
  },
  'student.faq.trial.q': { en: 'Is there a free trial?', ar: 'في تجربة ببلاش؟' },
  'student.faq.trial.a': {
    en: 'Yes. You can start a 7-day free trial with a card on file, and even without a trial you get three free uses of every premium feature.',
    ar: 'إيه. تقدر تبدأ تجربة ٧ أيام ببلاش مع كرت محفوظ، وحتى بدون التجربة عندك ثلاث استخدامات ببلاش لكل ميزة بريميوم.',
  },
  'student.faq.ai.q': {
    en: 'Do you mark my essays with AI?',
    ar: 'تصحّحون مقالاتي بالذكاء الاصطناعي؟',
  },
  'student.faq.ai.a': {
    en: 'Yes. Submitted essays are marked by AI against the assessment objective rubric of the exam board you have selected.',
    ar: 'إيه. المقالات المرسلة مصحَّحة بالذكاء الاصطناعي حسب معايير assessment objective لبورد الامتحان اللي اخترته.',
  },
  'student.faq.switch.q': {
    en: 'Can I switch exam boards later?',
    ar: 'أقدر أغيّر بورد الامتحان بعدين؟',
  },
  'student.faq.switch.a': {
    en: 'Yes. You can switch exam boards at any time from Settings, or directly from the BoardSwitcher in the top navigation.',
    ar: 'إيه. تقدر تغيّر بورد الامتحان أي وقت من الإعدادات، أو مباشرة من BoardSwitcher في القائمة العلوية.',
  },
  'student.faq.cost.q': { en: 'How much does it cost?', ar: 'كم السعر؟' },
  'student.faq.cost.a': {
    en: 'Student plans start at £3.49 per month, or £29.99 if you pay annually.',
    ar: 'باقات الطلاب تبدأ من £3.49 بالشهر، أو £29.99 لو دفعت سنوي.',
  },
  'student.bottom.title': {
    en: 'Ready to level up your English?',
    ar: 'جاهز ترفّع مستوى الإنجليزي مالك؟',
  },
  'student.bottom.body': {
    en: 'Free trial, no card. Cancel any time. Unlimited courses, flashcards, and revision notes — 3 free uses of every AI tool before you decide.',
    ar: 'تجربة ببلاش، بدون كرت. ألغ في أي وقت. دورات وبطاقات وملخّصات مراجعة بلا حدود — ٣ استخدامات ببلاش لكل أداة ذكاء اصطناعي قبل ما تقرّر.',
  },
  'student.bottom.cta_create': { en: 'Create free account', ar: 'سوِّ حساب ببلاش' },
  'student.bottom.cta_compare': { en: 'Compare plans', ar: 'قارن الباقات' },

  // ─── Help Centre (/help) — Khaleeji UI strings ───────────────────────
  'help.title': { en: 'Help Centre', ar: 'مركز المساعدة' },
  'help.intro_lead': {
    en: "Find answers to your questions about The English Hub. Can't find what you're looking for?",
    ar: 'لقا الإجابات عن أسئلتك حول The English Hub. ما لقيت اللي تبغاه؟',
  },
  'help.intro_check_faqs': { en: 'Check our FAQs', ar: 'شوف الأسئلة الشائعة' },
  'help.intro_or': { en: 'or', ar: 'أو' },
  'help.intro_get_in_touch': { en: 'get in touch', ar: 'تواصل معانا' },
  'help.search_placeholder': {
    en: "Search for help — e.g. 'mock exam', 'cancel subscription', 'exam board'...",
    ar: "دوّر على مساعدة — مثلاً 'امتحان تجريبي'، 'إلغاء الاشتراك'، 'بورد الامتحان'...",
  },
  'help.no_results_pre': { en: 'No results found for', ar: 'ما في نتايج لـ' },
  'help.no_results_tail': { en: '. Try a different search term or', ar: '. جرّب كلمة ثانية أو' },
  'help.contact_support_link': { en: 'contact our support team', ar: 'تواصل مع فريق الدعم' },
  'help.response_times_h2': { en: 'Response times', ar: 'أوقات الرد' },
  'help.rt.student_label': { en: 'Student / parent:', ar: 'طالب / ولي أمر:' },
  'help.rt.student_value': { en: 'within 1 working day', ar: 'خلال يوم عمل واحد' },
  'help.rt.teacher_label': { en: 'Teacher:', ar: 'معلم:' },
  'help.rt.teacher_value': {
    en: 'within 4 working hours (UK school hours, Mon-Fri)',
    ar: 'خلال ٤ ساعات عمل (ساعات المدارس البريطانية، الاثنين-الجمعة)',
  },
  'help.rt.school_label': { en: 'School admin:', ar: 'إدارة المدرسة:' },
  'help.rt.school_value': {
    en: 'within 2 hours during UK school hours (priority queue)',
    ar: 'خلال ساعتين في أوقات الدراسة البريطانية (طابور أولوية)',
  },
  'help.rt.security_label': {
    en: 'Security / vulnerability disclosures:',
    ar: 'الإبلاغ عن ثغرات أمنية:',
  },
  'help.rt.security_value': {
    en: 'acknowledgement within 24 hours, full triage within 5 working days —',
    ar: 'تأكيد الاستلام خلال ٢٤ ساعة، فحص كامل خلال ٥ أيام عمل —',
  },
  'help.still_need_help_h2': { en: 'Still need help?', ar: 'لسا تحتاج مساعدة؟' },
  'help.still_need_help_body': {
    en: 'Our support team is here to help. Response targets are listed above.',
    ar: 'فريق الدعم موجود لمساعدتك. الأوقات المتوقعة للرد فوق.',
  },
  'help.contact_support_cta': { en: 'Contact Support', ar: 'تواصل مع الدعم' },
  'help.cat.getting_started.title': { en: 'Getting Started', ar: 'البداية' },
  'help.cat.getting_started.desc': {
    en: 'New to The English Hub? Start here.',
    ar: 'جديد على The English Hub؟ ابدأ من هنا.',
  },
  'help.cat.courses.title': { en: 'Courses & Learning', ar: 'الدورات والتعلم' },
  'help.cat.courses.desc': {
    en: 'Understanding our course content and structure.',
    ar: 'فهم محتوى الدورات وهيكلها.',
  },
  'help.cat.mocks.title': { en: 'Mock Exams', ar: 'الامتحانات التجريبية' },
  'help.cat.mocks.desc': { en: 'Practise under exam conditions.', ar: 'تدرّب تحت ظروف الامتحان.' },
  'help.cat.practice.title': { en: 'Practice & Revision', ar: 'التدريب والمراجعة' },
  'help.cat.practice.desc': {
    en: 'Sharpen your skills with targeted practice.',
    ar: 'طوّر مهاراتك بتدريب مركّز.',
  },
  'help.cat.billing.title': { en: 'Account & Billing', ar: 'الحساب والفواتير' },
  'help.cat.billing.desc': {
    en: 'Manage your subscription and account.',
    ar: 'إدارة الاشتراك والحساب.',
  },
  'help.cat.schools.title': { en: 'Schools & Teachers', ar: 'المدارس والمعلمين' },
  'help.cat.schools.desc': {
    en: 'Information for schools and teaching staff.',
    ar: 'معلومات للمدارس وكادر التدريس.',
  },
  'help.cat.parents.title': { en: 'Parents', ar: 'أولياء الأمور' },
  'help.cat.parents.desc': { en: "Supporting your child's learning.", ar: 'دعم تعلّم ولدك.' },
  'help.cat.technical.title': { en: 'Technical Issues', ar: 'المشاكل التقنية' },
  'help.cat.technical.desc': {
    en: 'Troubleshooting and technical support.',
    ar: 'حل المشاكل والدعم التقني.',
  },
  'help.gs.q1.q': { en: 'How do I create an account?', ar: 'كيف أسوّي حساب؟' },
  'help.gs.q1.a': {
    en: 'Visit theenglishhub.app and click "Get Started" or "Sign Up". You can register with your email address or sign in with Google. Your 30-day free trial starts automatically — no payment details required upfront.',
    ar: "ادخل theenglishhub.app واضغط 'ابدأ' أو 'سوِّ حساب'. تقدر تسجّل بإيميلك أو تدخل بحساب Google. تجربة الـ ٣٠ يوم المجانية تبدأ تلقائياً — ما تحتاج بيانات دفع من البداية.",
  },
  'help.gs.q2.q': {
    en: 'What exam boards do you support?',
    ar: 'وش بوردات الامتحان اللي تدعمونها؟',
  },
  'help.gs.q2.a': {
    en: "We support all major English exam boards: AQA, Edexcel, OCR, WJEC/Eduqas, and Cambridge IGCSE. When you set up your profile, select your exam board and we'll tailor all content, revision materials, and mock exams to match your specification.",
    ar: 'إحنا ندعم كل بوردات الإنجليزي الرئيسية: AQA, Edexcel, OCR, WJEC/Eduqas, و Cambridge IGCSE. لمّا تسوي ملفك، اختر البورد ونخصّص لك كل المحتوى والمراجعة والامتحانات التجريبية حسب المنهج مالك.',
  },
  'help.gs.q3.q': {
    en: 'How do I choose my exam board and course?',
    ar: 'كيف أختار البورد والكورس؟',
  },
  'help.gs.q3.a': {
    en: "During registration, you'll be asked to select your exam board and whether you're studying English Language, English Literature, or both. You can change these at any time from your account settings.",
    ar: 'وقت التسجيل، بنسألك تختار البورد، وهل تدرس English Language أو English Literature أو الاثنين. تقدر تغيّر هذي الاختيارات أي وقت من إعدادات الحساب.',
  },
  'help.gs.q4.q': {
    en: 'Is there a free trial? Do I need a card?',
    ar: 'في تجربة مجانية؟ أحتاج بطاقة؟',
  },
  'help.gs.q4.a': {
    en: "Two things. Every paid plan starts with a 7-day free trial — that requires full sign-up with a valid card. Cancel before day 7 and you won't be charged. Separately, every registered account gets 3 free uses of most premium features (AI marking, mock exams, lesson plans, etc.) with no card required, so you can demo the product first.",
    ar: 'شيئين. كل خطة مدفوعة تبدأ بتجربة مجانية ٧ أيام — تتطلب تسجيل كامل ببطاقة. ألغِ قبل اليوم السابع وما تنحاسب. وبشكل منفصل، كل حساب مسجل ياخذ ٣ استخدامات مجانية لأغلب المميزات (التصحيح بالـ AI، الامتحانات التجريبية، خطط الدروس...) بدون بطاقة، عشان تجرّب الأول.',
  },
  'help.co.q1.q': { en: 'What courses are available?', ar: 'وش الكورسات المتوفرة؟' },
  'help.co.q1.a': {
    en: 'We offer comprehensive courses for GCSE English Language and English Literature across all major exam boards. Each course is broken down into topics that match your specification, with lessons, examples, and practice activities.',
    ar: 'نقدّم كورسات شاملة لـ GCSE English Language و English Literature لكل البوردات الرئيسية. كل كورس مقسم لمواضيع تطابق المنهج مالك، فيها دروس وأمثلة وأنشطة تدريب.',
  },
  'help.co.q2.q': {
    en: 'Are the courses aligned to my exam specification?',
    ar: 'الكورسات مطابقة لمواصفات الامتحان مالي؟',
  },
  'help.co.q2.a': {
    en: "Absolutely. Every course is mapped directly to the exam board specification you've selected. Our content covers all the skills, texts, and question types you'll encounter in your actual exams.",
    ar: 'أكيد. كل كورس متطابق مباشرة مع مواصفات البورد اللي اخترته. المحتوى يغطي كل المهارات والنصوص وأنواع الأسئلة اللي بتقابلها في الامتحان الفعلي.',
  },
  'help.co.q3.q': {
    en: 'Can I study both English Language and Literature?',
    ar: 'أقدر أدرس English Language و Literature مع بعض؟',
  },
  'help.co.q3.a': {
    en: 'Yes. Your subscription gives you full access to both English Language and English Literature courses for your chosen exam board. You can switch between them freely.',
    ar: 'إيه. الاشتراك يعطيك وصول كامل لكورسات English Language و English Literature للبورد اللي اخترته. تقدر تتنقل بينهم براحتك.',
  },
  'help.co.q4.q': {
    en: 'How do I track my progress through a course?',
    ar: 'كيف أتابع تقدمي في الكورس؟',
  },
  'help.co.q4.a': {
    en: 'Your dashboard shows your progress through each course topic. Completed lessons are marked with a tick, and you can see your overall completion percentage. The dashboard also highlights areas where you might need more practice.',
    ar: 'لوحتك تبيّن تقدمك في كل موضوع. الدروس المنجزة عليها علامة صح، وتشوف نسبة الإنجاز الكلية. اللوحة كمان تبرز المواضيع اللي تحتاج تدريب أكثر.',
  },
  'help.me.q1.q': { en: 'How do mock exams work?', ar: 'كيف تشتغل الامتحانات التجريبية؟' },
  'help.me.q1.a': {
    en: "Our mock exams simulate the real exam experience. You'll answer questions in timed conditions that match your exam board's format. After completing a mock, you receive detailed feedback, a grade estimate, and suggestions for improvement.",
    ar: 'الامتحانات التجريبية تحاكي تجربة الامتحان الحقيقي. تجاوب الأسئلة بوقت محدد يطابق صيغة البورد مالك. بعد ما تخلّص، تستلم ملاحظات تفصيلية وتقدير درجة واقتراحات للتحسين.',
  },
  'help.me.q2.q': { en: 'Are mock exams timed?', ar: 'الامتحانات التجريبية بوقت محدد؟' },
  'help.me.q2.a': {
    en: 'Yes. Each mock exam uses the same time allocation as the real exam so you can practise your time management. You can see a countdown timer during the exam. If you prefer, you can also attempt mocks in untimed "practice mode".',
    ar: "إيه. كل امتحان تجريبي يستخدم نفس الوقت المخصص للامتحان الحقيقي عشان تتدرّب على إدارة الوقت. تشوف عداد تنازلي وقت الامتحان. وإذا تبغى، تقدر تحلّ بـ 'وضع التدريب' بدون توقيت.",
  },
  'help.me.q3.q': {
    en: 'How are my mock exams marked?',
    ar: 'كيف تتصحّح الامتحانات التجريبية مالي؟',
  },
  'help.me.q3.a': {
    en: 'Mock exams are marked using AI that has been trained on real examiner mark schemes and grade boundaries. You receive a mark, a grade estimate, and detailed feedback on each answer explaining what you did well and how to improve.',
    ar: 'الامتحانات التجريبية تتصحح بواسطة AI مدرّب على مخططات تصحيح حقيقية وحدود الدرجات. تستلم درجة وتقدير وملاحظات تفصيلية على كل إجابة تشرح وش سويته زين وكيف تحسّن.',
  },
  'help.me.q4.q': { en: 'Can I retake a mock exam?', ar: 'أقدر أعيد الامتحان التجريبي؟' },
  'help.me.q4.a': {
    en: 'Yes, you can retake any mock exam as many times as you like. Each attempt is saved so you can track your improvement over time. We recommend reviewing the feedback from each attempt before retrying.',
    ar: 'إيه، تقدر تعيد أي امتحان تجريبي بقدر ما تبغى. كل محاولة محفوظة عشان تتابع تطورك مع الوقت. ننصح تراجع ملاحظات كل محاولة قبل تعيد.',
  },
  'help.pr.q1.q': {
    en: 'What types of practice questions are available?',
    ar: 'وش أنواع أسئلة التدريب المتوفرة؟',
  },
  'help.pr.q1.a': {
    en: 'We offer practice questions for every question type on your exam: reading comprehension, language analysis, creative writing, essay responses, and more. Each question comes with a model answer so you can see what a top-grade response looks like.',
    ar: 'نقدّم أسئلة تدريب لكل نوع سؤال في امتحانك: استيعاب القراءة، تحليل اللغة، الكتابة الإبداعية، إجابات المقال، وأكثر. كل سؤال معاه إجابة نموذجية عشان تشوف شكل الإجابة الممتازة.',
  },
  'help.pr.q2.q': { en: 'What are revision materials?', ar: 'وش هي مواد المراجعة؟' },
  'help.pr.q2.a': {
    en: 'Our revision section includes concise notes, key quotes, character summaries, theme overviews, and technique guides for all set texts and skills. Everything is organised by topic and exam board so you can find exactly what you need.',
    ar: 'قسم المراجعة فيه ملاحظات مختصرة، اقتباسات أساسية، ملخصات شخصيات، نظرة عامة على الأفكار، وأدلة الأساليب لكل النصوص والمهارات المقررة. كل شي مرتب حسب الموضوع والبورد عشان تلقا اللي تبغى.',
  },
  'help.pr.q3.q': {
    en: 'Can I focus on specific topics I find difficult?',
    ar: 'أقدر أركّز على مواضيع معينة صعبة عليّ؟',
  },
  'help.pr.q3.a': {
    en: 'Yes. You can filter practice questions and revision materials by topic, question type, or difficulty level. Your dashboard also highlights weak areas based on your mock exam and practice results, so you know where to focus.',
    ar: 'إيه. تقدر تفلتر أسئلة التدريب والمراجعة حسب الموضوع أو نوع السؤال أو الصعوبة. لوحتك تبرز كمان النقاط الضعيفة بناءً على نتايج الامتحانات والتدريب، عشان تعرف وين تركّز.',
  },
  'help.pr.q4.q': {
    en: 'Where can I see the most common mistakes that cost marks?',
    ar: 'وين أشوف الأخطاء الشائعة اللي تخسّر درجات؟',
  },
  'help.pr.q4.a': {
    en: 'We have two guides. Visit /revision/common-errors for the 30 most common factual errors — misquotations, wrong contexts, anthology version mix-ups — verified against board specifications and primary sources. For technique and craft mistakes (retelling the story, no terminology, vague effects), see /revision/exam-technique/common-mistakes.',
    ar: 'عندنا دليلين. روح لـ /revision/common-errors عشان ٣٠ خطأ معلوماتي شائع — اقتباسات غلط، سياقات خاطئة، خلط نسخ الأنطولوجيا — متحقق منها مقابل مواصفات البوردات والمصادر الأساسية. لأخطاء الأسلوب والصنعة (إعادة سرد القصة، بدون مصطلحات، تأثيرات غامضة)، شوف /revision/exam-technique/common-mistakes.',
  },
  'help.ab.q1.q': { en: 'How much does The English Hub cost?', ar: 'كم سعر The English Hub؟' },
  'help.ab.q1.a': {
    en: 'Early Access / Founding pricing (locked until August 2026): Students £3.99/month or £29.99/year — and £20/year with any affiliate code or the public code 2026ENGLISH (save £9.99). Teachers £6.99/month or £67.99/year. Standard pricing from August 2026: Students £7.99/month or £69.99/year. Teachers £11.99/month or £99/year. Every paid plan starts with a 7-day free trial (card required). You also get 3 free uses of most premium features before the paywall, no card required. Cancel anytime. Prices shown in GBP.',
    ar: 'أسعار Early Access / Founding (مثبتة حتى أغسطس ٢٠٢٦): الطلاب £3.99/شهر أو £29.99/سنة — و£20/سنة مع أي كود شريك أو الكود العام 2026ENGLISH (وفّر £9.99). المعلمين £6.99/شهر أو £67.99/سنة. الأسعار العادية من أغسطس ٢٠٢٦: الطلاب £7.99/شهر أو £69.99/سنة. المعلمين £11.99/شهر أو £99/سنة. كل خطة مدفوعة تبدأ بتجربة مجانية ٧ أيام (بطاقة مطلوبة). كمان تاخذ ٣ استخدامات مجانية لأغلب المميزات قبل جدار الدفع، بدون بطاقة. ألغِ متى ما تبغى. الأسعار بـ GBP.',
  },
  'help.ab.q2.q': { en: 'Can I cancel my subscription?', ar: 'أقدر ألغي الاشتراك مالي؟' },
  'help.ab.q2.a': {
    en: "Yes, you can cancel anytime from your account settings. If you cancel, you'll retain access until the end of your current billing period. There are no cancellation fees or penalties.",
    ar: 'إيه، تقدر تلغي أي وقت من إعدادات الحساب. لو ألغيت، يضل لك وصول حتى نهاية فترة الفوترة الحالية. ما في رسوم إلغاء ولا غرامات.',
  },
  'help.ab.q3.q': { en: 'How do I update my payment method?', ar: 'كيف أحدّث طريقة الدفع؟' },
  'help.ab.q3.a': {
    en: 'Go to Account Settings > Billing to update your payment card. All payments are processed securely through Stripe.',
    ar: 'روح Account Settings > Billing عشان تحدّث بطاقة الدفع. كل المدفوعات تتم بأمان عبر Stripe.',
  },
  'help.ab.q4.q': {
    en: 'What happens when my 7-day trial ends?',
    ar: 'وش يصير لمّا تخلص تجربة الـ ٧ أيام؟',
  },
  'help.ab.q4.a': {
    en: "We send a reminder email a couple of days before the trial ends. If you do nothing, your chosen subscription activates and your card is charged the plan price. Cancel any time before day 7 from your account settings and you won't be charged at all.",
    ar: 'نرسل لك إيميل تذكير قبل انتهاء التجربة بيومين. إذا ما سويت شي، يتفعّل اشتراكك المختار وتنحاسب بطاقتك بسعر الخطة. ألغِ في أي وقت قبل اليوم ٧ من إعدادات الحساب، وما تنحاسب أبد.',
  },
  'help.st.q1.q': { en: 'Do you offer school plans?', ar: 'تقدّمون خطط للمدارس؟' },
  'help.st.q1.a': {
    en: 'Yes! Our Founding Schools Programme is a strategic partnership limited to the first 10 schools. Founding rate: £4,000/year — anchored against projected Standard Pricing of £8,000/year from August 2026. Schools that joined in wave 1 at £3,000 are grandfathered at that rate. Founding schools receive full platform access, priority onboarding, early features, and locked preferential pricing. Visit our For Schools page or contact info@Upskillenergy.com to learn more.',
    ar: 'إيه! برنامج المدارس المؤسسة Founding Schools Programme شراكة استراتيجية محدودة لأول ١٠ مدارس. سعر التأسيس: £4,000/سنة — مرتبط بالأسعار العادية المتوقعة £8,000/سنة من أغسطس ٢٠٢٦. المدارس اللي انضمت في الموجة ١ بـ£3,000 محتفظة بسعرها. مدارس التأسيس تستلم وصول كامل، تأهيل بالأولوية، مميزات مبكرة، وأسعار تفضيلية مثبتة. شوف صفحة For Schools أو راسلنا على info@Upskillenergy.com.',
  },
  'help.st.q2.q': { en: 'Is there a teacher dashboard?', ar: 'في لوحة للمعلم؟' },
  'help.st.q2.a': {
    en: 'School licenses include a teacher dashboard where you can view individual and class-wide progress, assign specific practice tasks, monitor mock exam results, and identify students who may need additional support.',
    ar: 'تراخيص المدارس فيها لوحة معلم تقدر تشوف فيها تقدم الطلاب فردياً وللصف كامل، تكلّف مهام تدريب معينة، تتابع نتايج الامتحانات التجريبية، وتعرف الطلاب اللي يحتاجون دعم إضافي.',
  },
  'help.st.q3.q': { en: 'Can I set assignments for my students?', ar: 'أقدر أكلّف الطلاب مهام؟' },
  'help.st.q3.a': {
    en: 'Yes. With a school license, teachers can assign specific practice questions, revision topics, or mock exams to individual students or entire classes, with due dates and progress tracking.',
    ar: 'إيه. مع ترخيص المدرسة، المعلمين يقدرون يكلّفون أسئلة تدريب معينة أو مواضيع مراجعة أو امتحانات تجريبية لطلاب فرديين أو صفوف كاملة، مع تواريخ تسليم ومتابعة التقدم.',
  },
  'help.pa.q1.q': { en: "How can I track my child's progress?", ar: 'كيف أتابع تقدم ولدي؟' },
  'help.pa.q1.a': {
    en: "Parents can link to their child's account to receive weekly progress reports via email. These reports cover time spent studying, topics completed, mock exam grades, and areas that need attention. Visit our For Parents page to learn more.",
    ar: 'أولياء الأمور يقدرون يربطون حسابهم بحساب ولدهم عشان يستلمون تقارير تقدم أسبوعية بالإيميل. التقارير تغطي الوقت المستثمر في الدراسة، المواضيع المنجزة، درجات الامتحانات التجريبية، والنقاط اللي تحتاج اهتمام. شوف صفحة For Parents لمزيد من المعلومات.',
  },
  'help.pa.q2.q': { en: 'Is the content safe and appropriate?', ar: 'المحتوى آمن ومناسب؟' },
  'help.pa.q2.a': {
    en: 'All content on The English Hub is educational and aligned with the national curriculum. Set texts are those prescribed by exam boards. Our platform contains no advertising, social features, or inappropriate content.',
    ar: 'كل المحتوى في The English Hub تعليمي ومتوافق مع المنهج الوطني. النصوص المقررة هي اللي تحددها بوردات الامتحان. المنصة ما فيها إعلانات ولا ميزات اجتماعية ولا محتوى غير مناسب.',
  },
  'help.pa.q3.q': {
    en: 'Can I purchase a subscription for my child?',
    ar: 'أقدر أشتري اشتراك لولدي؟',
  },
  'help.pa.q3.a': {
    en: 'Yes. You can create an account and manage the subscription on behalf of your child. Students under 16 should have a parent or guardian manage their account. You retain full control over billing from your account settings.',
    ar: 'إيه. تقدر تسوي حساب وتدير الاشتراك نيابة عن ولدك. الطلاب تحت ١٦ سنة يفترض ولي الأمر أو الوصي يدير حسابهم. تحتفظ بالتحكم الكامل بالفوترة من إعدادات الحساب.',
  },
  'help.te.q1.q': {
    en: 'What devices can I use The English Hub on?',
    ar: 'وش الأجهزة اللي أقدر أستخدم عليها The English Hub؟',
  },
  'help.te.q1.a': {
    en: 'The English Hub works on any device with a modern web browser — laptops, desktops, tablets, and smartphones. No app download is required. We recommend Chrome, Safari, Firefox, or Edge for the best experience.',
    ar: 'The English Hub يشتغل على أي جهاز فيه متصفح حديث — لابتوب، ديسكتوب، تابلت، موبايل. ما تحتاج تنزّل تطبيق. ننصح بـ Chrome أو Safari أو Firefox أو Edge للأفضل تجربة.',
  },
  'help.te.q2.q': {
    en: "The site isn't loading properly. What should I do?",
    ar: 'الموقع ما يفتح كويس. وش أسوّي؟',
  },
  'help.te.q2.a': {
    en: 'Try clearing your browser cache and cookies, then refresh the page. Make sure your browser is up to date. If the issue persists, try a different browser or device. You can also check our status page or contact support.',
    ar: 'جرّب امسح cache و cookies من المتصفح، وحدّث الصفحة. تأكد إن المتصفح محدث. إذا المشكلة استمرت، جرّب متصفح أو جهاز ثاني. تقدر كمان تشوف صفحة الحالة أو تتواصل مع الدعم.',
  },
  'help.te.q3.q': {
    en: "I've forgotten my password. How do I reset it?",
    ar: 'نسيت الباسوورد. كيف أعيد تعيينه؟',
  },
  'help.te.q3.a': {
    en: 'Click "Log In" then "Forgot Password". Enter your email address and we\'ll send you a password reset link. The link expires after 24 hours. If you signed up with Google, use the "Sign in with Google" option instead.',
    ar: "اضغط 'Log In' بعدين 'Forgot Password'. ادخل إيميلك ونرسل لك رابط إعادة تعيين الباسوورد. الرابط ينتهي بعد ٢٤ ساعة. إذا سجّلت بـ Google، استخدم 'Sign in with Google' بدل.",
  },
  'help.te.q4.q': {
    en: "My mock exam feedback isn't showing. What should I do?",
    ar: 'ملاحظات الامتحان التجريبي ما تبيّن. وش أسوّي؟',
  },
  'help.te.q4.a': {
    en: "Feedback is usually generated within a few seconds of submitting your exam. If it hasn't appeared after a minute, try refreshing the page. If the problem continues, contact our support team with the exam name and the time you submitted it.",
    ar: 'الملاحظات عادة تطلع خلال ثواني من تسليم الامتحان. إذا ما طلعت بعد دقيقة، حدّث الصفحة. إذا المشكلة استمرت، تواصل مع الدعم واذكر اسم الامتحان ووقت التسليم.',
  },

  // ─── Help / Contact (/help/contact) ───────────────────────────────────
  'help.contact.title': { en: 'Get in Touch', ar: 'تواصل معانا' },
  'help.contact.lead': {
    en: 'Whether you have a question, a problem, or just want to say hi -- pick the right channel below and we will get back to you as quickly as we can.',
    ar: 'لو عندك سؤال أو مشكلة أو بس تبغى تسلّم -- اختر القناة المناسبة تحت، ونرد عليك بأسرع ما يمكن.',
  },
  'help.contact.channels_heading': { en: 'Contact channels', ar: 'قنوات التواصل' },
  'help.contact.ch.general.label': { en: 'General Support', ar: 'الدعم العام' },
  'help.contact.ch.general.desc': {
    en: 'Questions about your account, essays, feedback, or anything else? This is the best place to start.',
    ar: 'أسئلة عن حسابك، المقالات، الملاحظات أو أي شي ثاني؟ هذي أفضل نقطة بداية.',
  },
  'help.contact.ch.dpo.label': { en: 'Data Protection Officer', ar: 'مسؤول حماية البيانات' },
  'help.contact.ch.dpo.desc': {
    en: 'Want to download, correct, or delete your personal data? Our DPO handles all data rights requests.',
    ar: 'تبغى تنزّل أو تصحّح أو تمسح بياناتك الشخصية؟ مسؤول البيانات يتولّى طلبات الحقوق.',
  },
  'help.contact.ch.safeguarding.label': { en: 'Safeguarding', ar: 'الحماية' },
  'help.contact.ch.safeguarding.desc': {
    en: 'If you feel unsafe, or if you are worried about yourself or another young person, please reach out here. We take this seriously.',
    ar: 'لو تحس إنك مو بأمان، أو قلقان على نفسك أو على شاب ثاني، تواصل هنا. إحنا ناخذها بجدية.',
  },
  'help.contact.ch.complaints.label': { en: 'Complaints', ar: 'الشكاوى' },
  'help.contact.ch.complaints.desc': {
    en: 'Not happy with how something was handled? We want to hear about it so we can put it right.',
    ar: 'مو راضي عن طريقة تعاملنا مع شي؟ نبغى نسمع عشان نصلحه.',
  },
  'help.contact.company_heading': { en: 'About the Company', ar: 'عن الشركة' },
  'help.contact.company.name_label': { en: 'Company Name', ar: 'اسم الشركة' },
  'help.contact.company.name_value': { en: 'Upskill Energy Limited', ar: 'Upskill Energy Limited' },
  'help.contact.company.registered_label': { en: 'Registered In', ar: 'مسجلة في' },
  'help.contact.company.registered_value': { en: 'England and Wales', ar: 'إنجلترا وويلز' },
  'help.contact.company.general_label': { en: 'General Support', ar: 'الدعم العام' },
  'help.contact.company.dpo_label': { en: 'Data Protection', ar: 'حماية البيانات' },
  'help.contact.rt_heading': { en: 'When will I hear back?', ar: 'متى يردون عليّ؟' },
  'help.contact.rt.general_label': { en: 'General support:', ar: 'الدعم العام:' },
  'help.contact.rt.general_value': { en: 'within 1 working day', ar: 'خلال يوم عمل واحد' },
  'help.contact.rt.data_label': { en: 'Data requests:', ar: 'طلبات البيانات:' },
  'help.contact.rt.data_value': {
    en: 'within 30 days (usually much sooner)',
    ar: 'خلال ٣٠ يوم (عادة أسرع بكثير)',
  },
  'help.contact.rt.safeguarding_label': { en: 'Safeguarding:', ar: 'الحماية:' },
  'help.contact.rt.safeguarding_value': {
    en: 'prioritised -- we aim to respond within 24 hours',
    ar: 'بالأولوية -- نهدف للرد خلال ٢٤ ساعة',
  },
  'help.contact.rt.complaints_label': { en: 'Complaints:', ar: 'الشكاوى:' },
  'help.contact.rt.complaints_value': {
    en: 'acknowledged within 2 working days, resolved within 20',
    ar: 'تأكيد الاستلام خلال يومي عمل، حلها خلال ٢٠',
  },
  'help.contact.ico_heading': { en: 'Not satisfied with our response?', ar: 'مو راضي عن ردنا؟' },
  'help.contact.ico_body': {
    en: "If you have raised a concern about your data and you are not happy with how we have handled it, you have the right to complain to the UK's data protection regulator, the Information Commissioner's Office (ICO).",
    ar: "لو رفعت شكوى عن بياناتك وما رضيت عن طريقة تعاملنا، لك الحق تشتكي للجهة الرقابية البريطانية لحماية البيانات، Information Commissioner's Office (ICO).",
  },
  'help.contact.ico_cta': { en: 'Make a complaint to the ICO', ar: 'قدّم شكوى لـ ICO' },
  'help.contact.back_to_help': { en: 'Back to Help Centre', ar: 'رجوع لمركز المساعدة' },

  // ─── Help / Report (/help/report) ─────────────────────────────────────
  'help.report.back_to_help': { en: '← Back to Help Centre', ar: '← رجوع لمركز المساعدة' },
  'help.report.title': { en: 'Report an Issue', ar: 'بلّغ عن مشكلة' },
  'help.report.lead': {
    en: "Found something that isn't working? Let us know and we'll fix it as soon as possible.",
    ar: 'لقيت شي ما يشتغل؟ خبّرنا ونصلحه بأسرع وقت.',
  },
  'help.report.type_label': {
    en: 'What type of issue are you reporting?',
    ar: 'وش نوع المشكلة اللي تبلّغ عنها؟',
  },
  'help.report.type.bug.label': { en: 'Bug / Something broken', ar: 'مشكلة برمجية / شي خربان' },
  'help.report.type.bug.desc': {
    en: "A feature isn't working as expected",
    ar: 'ميزة ما تشتغل زي ما هي مفروض',
  },
  'help.report.type.content.label': { en: 'Content error', ar: 'خطأ في المحتوى' },
  'help.report.type.content.desc': {
    en: 'Incorrect information, typo, or missing content',
    ar: 'معلومة غلط، خطأ كتابي، أو محتوى ناقص',
  },
  'help.report.type.a11y.label': { en: 'Accessibility issue', ar: 'مشكلة وصول' },
  'help.report.type.a11y.desc': {
    en: 'Difficulty using the site with assistive technology',
    ar: 'صعوبة في استخدام الموقع مع تقنيات مساعدة',
  },
  'help.report.type.perf.label': { en: 'Performance issue', ar: 'مشكلة أداء' },
  'help.report.type.perf.desc': {
    en: 'Slow loading, freezing, or crashing',
    ar: 'تحميل بطيء، تجمّد، أو انهيار',
  },
  'help.report.type.security.label': { en: 'Security concern', ar: 'مخاوف أمنية' },
  'help.report.type.security.desc': {
    en: 'Privacy or security vulnerability',
    ar: 'ثغرة خصوصية أو أمنية',
  },
  'help.report.type.other.label': { en: 'Other', ar: 'غير ذلك' },
  'help.report.type.other.desc': {
    en: 'Something else not listed above',
    ar: 'شي ثاني مو موجود فوق',
  },
  'help.report.desc_label': { en: 'Describe the issue', ar: 'اشرح المشكلة' },
  'help.report.desc_hint': {
    en: 'Please include steps to reproduce the issue if possible.',
    ar: 'لطفاً اكتب خطوات إعادة المشكلة إذا تقدر.',
  },
  'help.report.desc_placeholder': {
    en: 'When I click on... I expected... but instead...',
    ar: 'لمّا ضغطت على... كنت أتوقع... لكن بدل ذلك...',
  },
  'help.report.url_label': { en: 'Page URL', ar: 'رابط الصفحة' },
  'help.report.optional': { en: '(optional)', ar: '(اختياري)' },
  'help.report.browser_label': { en: 'Browser', ar: 'المتصفح' },
  'help.report.browser_placeholder': { en: 'Select browser', ar: 'اختر متصفح' },
  'help.report.email_label': { en: 'Your email', ar: 'إيميلك' },
  'help.report.email_optional': { en: '(optional — for follow-up)', ar: '(اختياري — للمتابعة)' },
  'help.report.submit': { en: 'Submit Report', ar: 'أرسل البلاغ' },
  'help.report.submitted_title': { en: 'Report Submitted', ar: 'تم إرسال البلاغ' },
  'help.report.submitted_body': {
    en: 'Thank you for reporting this issue. Our team will investigate and get back to you if needed.',
    ar: 'شكراً على البلاغ. فريقنا بيحقّق ويرد عليك إذا احتاج.',
  },
  'help.report.back_to_help_cta': { en: 'Back to Help Centre', ar: 'رجوع لمركز المساعدة' },
  'help.report.another': { en: 'Report Another', ar: 'بلّغ عن مشكلة ثانية' },

  // ─── Help / Suggestions (/help/suggestions) ───────────────────────────
  'help.sug.title': { en: 'Suggestions', ar: 'اقتراحات' },
  'help.sug.lead': {
    en: "Have an idea to improve The English Hub? We'd love to hear it. Every suggestion is read by our team.",
    ar: 'عندك فكرة لتطوير The English Hub؟ نبغى نسمعها. فريقنا يقرأ كل اقتراح.',
  },
  'help.sug.cat_label': { en: 'What area is your suggestion about?', ar: 'اقتراحك في أي مجال؟' },
  'help.sug.cat.feature': { en: 'New Feature', ar: 'ميزة جديدة' },
  'help.sug.cat.content': { en: 'Content Request', ar: 'طلب محتوى' },
  'help.sug.cat.ui': { en: 'Design / UI', ar: 'تصميم / واجهة' },
  'help.sug.cat.board': { en: 'Exam Board Coverage', ar: 'تغطية بوردات الامتحان' },
  'help.sug.cat.tools': { en: 'Study Tools', ar: 'أدوات الدراسة' },
  'help.sug.cat.other': { en: 'Other', ar: 'غير ذلك' },
  'help.sug.title_label': { en: 'Suggestion title', ar: 'عنوان الاقتراح' },
  'help.sug.title_placeholder': { en: 'A short summary of your idea', ar: 'ملخص قصير لفكرتك' },
  'help.sug.desc_label': { en: 'Tell us more', ar: 'وضّح أكثر' },
  'help.sug.desc_hint': {
    en: 'Describe your suggestion in detail. How would it help you or other students?',
    ar: 'اشرح اقتراحك بالتفصيل. كيف بيساعدك أو يساعد طلاب ثانيين؟',
  },
  'help.sug.desc_placeholder': {
    en: 'I think it would be great if...',
    ar: 'أعتقد إنه راح يكون رائع لو...',
  },
  'help.sug.email_label': { en: 'Your email', ar: 'إيميلك' },
  'help.sug.email_optional': {
    en: '(optional — we may follow up)',
    ar: '(اختياري — ممكن نتابع معاك)',
  },
  'help.sug.submit': { en: 'Submit Suggestion', ar: 'أرسل الاقتراح' },
  'help.sug.thanks_title': { en: 'Thank You!', ar: 'شكراً!' },
  'help.sug.thanks_body': {
    en: 'Your suggestion has been received. We review every idea and use them to make The English Hub better for everyone.',
    ar: 'وصلنا اقتراحك. نراجع كل فكرة ونستخدمها لتحسين The English Hub للجميع.',
  },
  'help.sug.another': { en: 'Submit Another', ar: 'أرسل اقتراح ثاني' },
  'help.sug.popular_h2': { en: 'Popular Requests', ar: 'الطلبات الشائعة' },
  'help.sug.req.past_papers': {
    en: 'Past paper question bank',
    ar: 'بنك أسئلة من الأوراق السابقة',
  },
  'help.sug.req.audio_poems': { en: 'Audio recordings of poems', ar: 'تسجيلات صوتية للقصائد' },
  'help.sug.req.dark_mode': { en: 'Dark mode', ar: 'الوضع الداكن' },
  'help.sug.req.wjec_guides': { en: 'WJEC full text guides', ar: 'أدلة WJEC الكاملة للنصوص' },
  'help.sug.req.mobile_app': { en: 'Mobile app', ar: 'تطبيق موبايل' },
  'help.sug.status.planned': { en: 'Planned', ar: 'مخطط' },
  'help.sug.status.under_review': { en: 'Under Review', ar: 'قيد المراجعة' },
  'help.sug.status.in_progress': { en: 'In Progress', ar: 'قيد التنفيذ' },

  // ─── FAQs (/faqs) ─────────────────────────────────────────────────────
  'faqs.title': { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
  'faqs.intro_lead': {
    en: 'Everything you need to know about The English Hub — GCSE and IGCSE English, AI marking, school licences, safeguarding, and more. For anything not covered here, visit our',
    ar: 'كل اللي تحتاج تعرفه عن The English Hub — GCSE و IGCSE English، التصحيح بالـ AI، تراخيص المدارس، الحماية، وأكثر. لأي شي ما هو هنا، روح لـ',
  },
  'faqs.intro_help_link': { en: 'Help Centre', ar: 'مركز المساعدة' },
  'faqs.sections_aria': { en: 'FAQ sections', ar: 'أقسام الأسئلة الشائعة' },
  'faqs.cant_find_h2': { en: "Can't find what you're looking for?", ar: 'ما لقيت اللي تبغاه؟' },
  'faqs.cant_find_body': {
    en: 'Our team is happy to help with any questions not covered here.',
    ar: 'فريقنا جاهز يساعدك في أي سؤال مو موجود هنا.',
  },
  'faqs.visit_help_cta': { en: 'Visit Help Centre', ar: 'روح لمركز المساعدة' },
  'faqs.contact_support_cta': { en: 'Contact Support', ar: 'تواصل مع الدعم' },
  'faqs.sec.general.title': { en: 'General', ar: 'عام' },
  'faqs.sec.pricing.title': { en: 'Pricing & Billing', ar: 'الأسعار والفوترة' },
  'faqs.sec.courses.title': { en: 'Courses & Content', ar: 'الدورات والمحتوى' },
  'faqs.sec.ai.title': { en: 'AI Marking & Feedback', ar: 'التصحيح والملاحظات بالـ AI' },
  'faqs.sec.technical.title': { en: 'Technical', ar: 'تقني' },
  'faqs.sec.privacy.title': { en: 'Privacy & Safety', ar: 'الخصوصية والأمان' },
  'faqs.sec.schools.title': { en: 'Schools & Teachers', ar: 'المدارس والمعلمين' },
  'faqs.g1.q': { en: 'What is The English Hub?', ar: 'وش هو The English Hub؟' },
  'faqs.g1.a': {
    en: 'The English Hub is an online learning platform designed specifically for GCSE and IGCSE English students. We provide board-specific courses, mock exams with AI-powered feedback, practice questions with model answers, and comprehensive revision materials for English Language and English Literature.',
    ar: 'The English Hub منصة تعلّم أونلاين مصممة خصيصاً لطلاب GCSE و IGCSE English. نقدّم كورسات خاصة بكل بورد، امتحانات تجريبية مع ملاحظات بالـ AI، أسئلة تدريب مع إجابات نموذجية، ومواد مراجعة شاملة لـ English Language و English Literature.',
  },
  'faqs.g2.q': { en: 'Who is The English Hub for?', ar: 'لمين The English Hub؟' },
  'faqs.g2.a': {
    en: "The English Hub is built for GCSE and IGCSE English students (typically aged 14–16), but is also used by KS3 students who want to get ahead. Teachers use our school licences to set assignments and track class progress, and parents can link to their child's account for weekly progress reports.",
    ar: 'The English Hub معمول لطلاب GCSE و IGCSE English (عادة ١٤-١٦ سنة)، لكن يستخدمه كمان طلاب KS3 اللي يبغون يتقدمون. المعلمين يستخدمون تراخيص المدارس عشان يكلّفون المهام ويتابعون تقدم الصف، وأولياء الأمور يقدرون يربطون حسابهم بحساب الولد للحصول على تقارير أسبوعية.',
  },
  'faqs.g3.q': { en: 'Which exam boards are supported?', ar: 'وش بوردات الامتحان المدعومة؟' },
  'faqs.g3.a': {
    en: 'AQA, Edexcel (GCSE + International), OCR, WJEC / Eduqas, Cambridge IGCSE (0500 + 0475), and Pearson Edexcel International. Built around how examiners actually mark, so every course, mock exam, practice question, and revision note is tailored to your specific board and specification.',
    ar: 'AQA, Edexcel (GCSE + International), OCR, WJEC / Eduqas, Cambridge IGCSE (0500 + 0475), و Pearson Edexcel International. مبني على طريقة المصححين الفعلية، فكل كورس وامتحان تجريبي وسؤال تدريب وملاحظة مراجعة مخصص للبورد ومواصفاتك بالتحديد.',
  },
  'faqs.g4.q': {
    en: 'Is The English Hub suitable for IGCSE Cambridge 0500 and 0475?',
    ar: 'The English Hub مناسب لـ IGCSE Cambridge 0500 و 0475؟',
  },
  'faqs.g4.a': {
    en: 'Yes. We cover Cambridge First Language English 0500 and Literature in English 0475 alongside UK GCSE (AQA, Edexcel, Eduqas, OCR) and International A-Level — with board-specific mark schemes, assessment objectives, and set-text coverage.',
    ar: 'إيه. نغطي Cambridge First Language English 0500 و Literature in English 0475 جنباً إلى جنب مع UK GCSE (AQA, Edexcel, Eduqas, OCR) و International A-Level — بمخططات تصحيح وأهداف تقييم ونصوص مقررة خاصة بكل بورد.',
  },
  'faqs.g5.q': {
    en: 'Does The English Hub cover AQA Power and Conflict?',
    ar: 'The English Hub يغطي AQA Power and Conflict؟',
  },
  'faqs.g5.a': {
    en: 'Yes — full revision notes, annotated model paragraphs, and past-paper practice for all 15 poems in the AQA Power and Conflict anthology, aligned to AO1 / AO2 / AO3 mark distribution.',
    ar: 'إيه — ملاحظات مراجعة كاملة، فقرات نموذجية مع شروحات، وتدريب على الأوراق السابقة لكل الـ ١٥ قصيدة في أنطولوجيا AQA Power and Conflict، مع توزيع علامات AO1 / AO2 / AO3.',
  },
  'faqs.g6.q': { en: 'Do I need to download an app?', ar: 'محتاج أنزّل تطبيق؟' },
  'faqs.g6.a': {
    en: 'No. The English Hub is a web application that works in any modern browser on laptops, desktops, tablets, and smartphones. Just visit theenglishhub.app and log in — no downloads or installations required.',
    ar: 'لا. The English Hub تطبيق ويب يشتغل على أي متصفح حديث على لابتوب، ديسكتوب، تابلت، وموبايل. بس روح theenglishhub.app وسجّل دخول — بدون تنزيل أو تثبيت.',
  },
  'faqs.g7.q': {
    en: 'How is The English Hub different from other revision sites?',
    ar: 'وش يميّز The English Hub عن مواقع المراجعة الثانية؟',
  },
  'faqs.g7.a': {
    en: 'Unlike generic revision platforms, every piece of content on The English Hub is written specifically for your exam board. Our mock exams use AI trained on real mark schemes to give you detailed, criteria-referenced feedback. We focus exclusively on English, so the depth and quality of our content is unmatched.',
    ar: 'مو زي منصات المراجعة العامة، كل محتوى في The English Hub مكتوب خصيصاً للبورد مالك. الامتحانات التجريبية تستخدم AI مدرّب على مخططات تصحيح حقيقية لتعطيك ملاحظات تفصيلية مرتبطة بالمعايير. نركّز حصرياً على الإنجليزي، فعمق وجودة محتوانا ما لها مثيل.',
  },
  'faqs.p1.q': { en: 'How much does The English Hub cost?', ar: 'كم سعر The English Hub؟' },
  'faqs.p2.q': {
    en: 'Is there a free trial? Do I need a card?',
    ar: 'في تجربة مجانية؟ أحتاج بطاقة؟',
  },
  'faqs.p2.a': {
    en: 'Yes. Every paid plan starts with a 7-day free trial. The trial requires full sign-up with a valid payment method — so the subscription can convert automatically if you do not cancel before day 7. Separately, you can demo most premium features for 3 free uses without a card.',
    ar: 'إيه. كل خطة مدفوعة تبدأ بتجربة مجانية ٧ أيام. التجربة تتطلب تسجيل كامل بطريقة دفع صالحة — عشان الاشتراك يتحوّل تلقائياً إذا ما ألغيت قبل اليوم ٧. وبشكل منفصل، تقدر تجرّب أغلب المميزات ٣ مرات مجاناً بدون بطاقة.',
  },
  'faqs.p3.q': {
    en: 'What happens after my 7-day trial ends?',
    ar: 'وش يصير بعد ما تخلص تجربة الـ ٧ أيام؟',
  },
  'faqs.p3.a': {
    en: 'We send you a reminder email a couple of days before the trial ends. If you do nothing, your chosen subscription activates and your card is charged the plan price. Cancel any time before day 7 from your account settings and you will not be charged at all.',
    ar: 'نرسل لك إيميل تذكير قبل انتهاء التجربة بيومين. إذا ما سويت شي، يتفعّل اشتراكك وتنحاسب بطاقتك بسعر الخطة. ألغِ أي وقت قبل اليوم ٧ من إعدادات الحساب، وما تنحاسب أبد.',
  },
  'faqs.p4.q': { en: 'Can I cancel my subscription?', ar: 'أقدر ألغي الاشتراك؟' },
  'faqs.p4.a': {
    en: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. When you cancel, you keep access to all features until the end of your current billing period.',
    ar: 'إيه، تقدر تلغي الاشتراك أي وقت من إعدادات الحساب. ما في رسوم إلغاء. لمّا تلغي، تحتفظ بالوصول لكل المميزات حتى نهاية فترة الفوترة الحالية.',
  },
  'faqs.p5.q': { en: 'What payment methods do you accept?', ar: 'وش طرق الدفع المقبولة؟' },
  'faqs.p5.a': {
    en: 'We accept all major debit and credit cards (Visa, Mastercard, American Express) processed securely through Stripe. We do not store your card details on our servers.',
    ar: 'نقبل كل بطاقات الخصم والائتمان الرئيسية (Visa, Mastercard, American Express) عبر Stripe بأمان. ما نحفظ بيانات بطاقتك في سيرفراتنا.',
  },
  'faqs.p6.q': { en: 'Can I get a refund?', ar: 'أقدر أسترجع فلوسي؟' },
  'faqs.p6.a': {
    en: "If you're not satisfied within the first 14 days of a paid subscription, contact our support team and we'll arrange a full refund. After 14 days, you can cancel to prevent future charges, but we don't offer partial refunds for the current billing period.",
    ar: 'لو ما رضيت في أول ١٤ يوم من اشتراك مدفوع، تواصل مع فريق الدعم ونرتّب لك استرجاع كامل. بعد ١٤ يوم، تقدر تلغي عشان توقف الرسوم المستقبلية، لكن ما نقدّم استرجاع جزئي لفترة الفوترة الحالية.',
  },
  'faqs.c1.q': {
    en: 'What subjects and courses are available?',
    ar: 'وش المواد والكورسات المتوفرة؟',
  },
  'faqs.c1.a': {
    en: 'We offer courses for GCSE English Language and GCSE English Literature across all major exam boards. Each course covers every topic required by your exam board with structured lessons, worked examples, and practice activities.',
    ar: 'نقدّم كورسات لـ GCSE English Language و GCSE English Literature لكل البوردات الرئيسية. كل كورس يغطي كل موضوع يتطلبه البورد مع دروس منظمة وأمثلة مشروحة وأنشطة تدريب.',
  },
  'faqs.c2.q': { en: 'How do mock exams work?', ar: 'كيف تشتغل الامتحانات التجريبية؟' },
  'faqs.c2.a': {
    en: 'Our mock exams replicate the format, timing, and question styles of real exams for your specific exam board. After you submit your responses, our AI (trained on official mark schemes) provides a mark, grade estimate, and detailed feedback on each answer — highlighting strengths and areas for improvement.',
    ar: 'الامتحانات التجريبية مالنا تحاكي صيغة وتوقيت وأنماط أسئلة الامتحانات الحقيقية للبورد مالك. بعد ما تسلّم، الـ AI (المدرّب على مخططات تصحيح رسمية) يعطيك درجة وتقدير وملاحظات تفصيلية على كل إجابة — يبرز نقاط القوة والمواضع اللي تحتاج تحسين.',
  },
  'faqs.c3.q': { en: 'What are practice questions?', ar: 'وش هي أسئلة التدريب؟' },
  'faqs.c3.a': {
    en: 'Practice questions let you focus on individual question types (e.g. language analysis, creative writing, essay responses). Each question comes with a model answer so you can compare your response against a top-grade example and understand what earns top marks.',
    ar: 'أسئلة التدريب تخلّيك تركّز على أنواع أسئلة فردية (مثلاً تحليل اللغة، الكتابة الإبداعية، إجابات المقال). كل سؤال معاه إجابة نموذجية عشان تقارن إجابتك بمثال درجة ممتازة وتفهم وش يجيب الدرجات العليا.',
  },
  'faqs.c4.q': {
    en: 'Are set texts covered for English Literature?',
    ar: 'النصوص المقررة لـ English Literature مغطاة؟',
  },
  'faqs.c4.a': {
    en: 'Yes. We cover all the set texts for each exam board, including character guides, theme analyses, key quote banks, and essay planning resources. Popular texts include Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, Power and Conflict poetry, and many more.',
    ar: 'إيه. نغطي كل النصوص المقررة لكل بورد، تشمل أدلة الشخصيات، تحليلات الأفكار، بنوك الاقتباسات الأساسية، وموارد تخطيط المقالات. النصوص الشائعة تشمل Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, شعر Power and Conflict، وأكثر.',
  },
  'faqs.c5.q': { en: 'How often is content updated?', ar: 'كل قد إيش يتحدّث المحتوى؟' },
  'faqs.c5.a': {
    en: "We continuously update our content to reflect the latest exam board requirements, mark schemes, and published guidance. When exam boards make changes, we update our materials promptly so you're always revising the right content.",
    ar: 'إحنا نحدّث المحتوى باستمرار عشان يعكس آخر متطلبات البوردات ومخططات التصحيح والإرشادات المنشورة. لمّا البوردات تغيّر شي، نحدّث موادنا فوراً عشان دايماً تراجع المحتوى الصحيح.',
  },
  'faqs.a1.q': { en: 'How does the AI mark my essay?', ar: 'كيف الـ AI يصحّح مقالي؟' },
  'faqs.a1.a': {
    en: 'Claude (Anthropic) reads the essay, compares it against the published AO descriptors for your board, and returns scores plus specific improvement feedback in 20–40 seconds. Every response is flagged with its confidence level and can be human-reviewed on request.',
    ar: 'Claude (من Anthropic) يقرأ المقال، يقارنه بأوصاف الـ AO المنشورة للبورد مالك، ويعطيك درجات مع ملاحظات تحسين محددة في ٢٠-٤٠ ثانية. كل رد عليه مستوى ثقة وممكن يراجعه إنسان عند الطلب.',
  },
  'faqs.a2.q': { en: 'What if the AI gets the mark wrong?', ar: 'وش لو الـ AI صحّح غلط؟' },
  'faqs.a2.a': {
    en: "Every AI-marked essay has a one-click 'request human review' option. A human examiner re-marks within 48 hours. We're transparent that AI marking is indicative, not authoritative — the mark scheme remains the examiner's.",
    ar: "كل مقال صحّحه AI فيه خيار 'طلب مراجعة بشرية' بضغطة واحدة. مصحّح بشري يعيد التصحيح خلال ٤٨ ساعة. إحنا شفّافين إن تصحيح الـ AI استرشادي مو نهائي — مخطط التصحيح يضل ملك المصحّح.",
  },
  'faqs.a3.q': {
    en: 'Do you mark essays in real time in class?',
    ar: 'تصحّحون المقالات في الفصل بشكل فوري؟',
  },
  'faqs.a3.a': {
    en: 'Yes. Teachers can bulk-submit 30 essays and receive AO-aligned feedback per student in under 10 minutes — usually while the lesson is still running.',
    ar: 'إيه. المعلمين يقدرون يسلّمون ٣٠ مقال دفعة واحدة ويستلمون ملاحظات حسب الـ AO لكل طالب في أقل من ١٠ دقايق — عادة وقت ما الدرس لسا شغّال.',
  },
  'faqs.t1.q': {
    en: 'What browsers and devices are supported?',
    ar: 'وش المتصفحات والأجهزة المدعومة؟',
  },
  'faqs.t1.a': {
    en: 'The English Hub works on any device with a modern web browser. We support the latest versions of Chrome, Safari, Firefox, and Microsoft Edge on Windows, macOS, iOS, Android, and ChromeOS.',
    ar: 'The English Hub يشتغل على أي جهاز فيه متصفح حديث. ندعم آخر إصدارات Chrome, Safari, Firefox, و Microsoft Edge على Windows, macOS, iOS, Android, و ChromeOS.',
  },
  'faqs.t2.q': {
    en: "I can't log in to my account. What should I do?",
    ar: 'ما أقدر أسجّل دخول. وش أسوّي؟',
  },
  'faqs.t2.a': {
    en: 'First, check that you\'re using the correct email address. If you\'ve forgotten your password, click "Forgot Password" on the login page to receive a reset link. If you signed up with Google, use the "Sign in with Google" button. If you\'re still having trouble, contact our support team.',
    ar: "الأول، تأكد إنك تستخدم الإيميل الصحيح. لو نسيت الباسوورد، اضغط 'Forgot Password' في صفحة الدخول وبيوصلك رابط إعادة تعيين. لو سجّلت بـ Google، استخدم زر 'Sign in with Google'. لو لسا في مشكلة، تواصل مع فريق الدعم.",
  },
  'faqs.t3.q': {
    en: "The page isn't loading or looks broken. How do I fix it?",
    ar: 'الصفحة ما تفتح أو شكلها خربان. كيف أصلحها؟',
  },
  'faqs.t3.a': {
    en: 'Try these steps: (1) clear your browser cache and cookies, (2) refresh the page, (3) try a different browser, (4) check your internet connection. If the problem persists, it may be a temporary issue on our end — try again in a few minutes or contact support.',
    ar: 'جرّب الخطوات: (١) امسح cache و cookies من المتصفح، (٢) حدّث الصفحة، (٣) جرّب متصفح ثاني، (٤) شيك على الإنترنت. لو المشكلة استمرت، ممكن تكون مشكلة مؤقتة عندنا — جرّب بعد دقايق أو تواصل مع الدعم.',
  },
  'faqs.t4.q': { en: 'How do I reset my password?', ar: 'كيف أعيد تعيين الباسوورد؟' },
  'faqs.t4.a': {
    en: "Click 'Forgot password?' on the login page. Enter your email address and we'll send you a reset link. If you don't receive the email within a few minutes, check your spam folder or contact info@upskillenergy.com.",
    ar: "اضغط 'Forgot password?' في صفحة الدخول. ادخل إيميلك ونرسل لك رابط إعادة تعيين. لو ما وصلك الإيميل خلال دقايق، شيك على spam أو راسلنا على info@upskillenergy.com.",
  },
  'faqs.t5.q': {
    en: 'Can I use The English Hub offline?',
    ar: 'أقدر أستخدم The English Hub بدون إنترنت؟',
  },
  'faqs.t5.a': {
    en: 'The English Hub requires an internet connection to access courses, submit mock exams, and receive feedback. We recommend a stable broadband or mobile data connection for the best experience.',
    ar: 'The English Hub يحتاج اتصال إنترنت للوصول للكورسات وتسليم الامتحانات التجريبية واستلام الملاحظات. ننصح باتصال broadband أو بيانات موبايل مستقر للأفضل تجربة.',
  },
  'faqs.pr1.q': { en: 'How is my data protected?', ar: 'كيف تتم حماية بياناتي؟' },
  'faqs.pr1.a': {
    en: "We're UK GDPR compliant, registered with the ICO (registration ZC016690), host all data in EU regions (Supabase + Vercel), and treat every under-18 user under the ICO Children's Code 15 standards. A full DPIA is available at /compliance.",
    ar: "نمتثل لقانون UK GDPR، ومسجّلون لدى ICO (رقم التسجيل ZC016690)، ونستضيف جميع البيانات في مناطق الاتحاد الأوروبي (Supabase + Vercel)، ونعامل كل مستخدم دون ١٨ سنة وفقاً لمعايير ICO Children's Code الـ١٥. تقييم تأثير حماية البيانات (DPIA) الكامل متاح على /compliance.",
  },
  'faqs.pr2.q': { en: 'Is my data safe and private?', ar: 'هل بياناتي آمنة وخاصة؟' },
  'faqs.pr2.a': {
    en: 'Yes. All data is encrypted in transit and at rest. We comply with UK GDPR and never sell your personal information. For full details, read our Privacy Policy. Students under 16 should have a parent or guardian manage their account.',
    ar: 'نعم. جميع البيانات مشفّرة أثناء النقل والتخزين. نمتثل لقانون UK GDPR ولا نبيع معلوماتك الشخصية مطلقاً. للتفاصيل الكاملة، يُرجى الاطلاع على سياسة الخصوصية. يجب على الطلاب دون ١٦ سنة أن يديرَ ولي الأمر أو الوصي حسابهم.',
  },
  'faqs.pr3.q': {
    en: 'What parental controls are available?',
    ar: 'وش أدوات الرقابة الأبوية المتاحة؟',
  },
  'faqs.pr3.a': {
    en: "Parents can link to their child's account to receive weekly progress reports. For students under 16, we require parental consent during registration. Parents can view their child's learning activity, and request data access or deletion at any time. See our Privacy Policy for full details on how we protect children's data.",
    ar: 'يستطيع أولياء الأمور ربط حسابهم بحساب الطفل لاستلام تقارير تقدم أسبوعية. للطلاب دون ١٦ سنة، نشترط موافقة ولي الأمر عند التسجيل. يمكن لولي الأمر الاطلاع على نشاط التعلّم، وطلب الوصول إلى البيانات أو حذفها في أي وقت. راجع سياسة الخصوصية للتفاصيل الكاملة حول كيفية حماية بيانات الأطفال.',
  },
  'faqs.pr4.q': {
    en: "Can parents track their child's progress?",
    ar: 'أولياء الأمور يقدرون يتابعون تقدم الولد؟',
  },
  'faqs.pr4.a': {
    en: "Yes — parents get a weekly report and a child-linked dashboard. Parental controls and ICO Children's Code defaults apply throughout.",
    ar: "إيه — أولياء الأمور يستلمون تقرير أسبوعي ولوحة مرتبطة بالولد. تنطبق إعدادات الرقابة الأبوية ومعايير ICO Children's Code الافتراضية في كل مكان.",
  },
  'faqs.pr5.q': {
    en: "How do I link my parent account to my child's?",
    ar: 'كيف أربط حسابي كولي أمر بحساب ولدي؟',
  },
  'faqs.pr5.a': {
    en: "Your child can send you a linking invitation from their account settings, or you can contact info@upskillenergy.com with your child's registered email. Once linked, you'll receive weekly progress reports and can manage consent preferences.",
    ar: 'ولدك يقدر يرسل لك دعوة ربط من إعدادات حسابه، أو تقدر تتواصل معانا على info@upskillenergy.com وتعطينا الإيميل المسجل لولدك. بعد الربط، بتستلم تقارير أسبوعية وتدير تفضيلات الموافقات.',
  },
  'faqs.s1.q': { en: 'Can my school buy a licence?', ar: 'مدرستي تقدر تشتري ترخيص؟' },
  'faqs.s2.q': {
    en: 'Do you offer a free trial for schools?',
    ar: 'تقدّمون تجربة مجانية للمدارس؟',
  },
  'faqs.s2.a': {
    en: 'Yes — schools get a 7-day free pilot with up to 60 students. Book a 20-minute call at /demo/school to set it up.',
    ar: 'إيه — المدارس تاخذ تجربة مجانية ٧ أيام لـ ٦٠ طالب. احجز مكالمة ٢٠ دقيقة على /demo/school عشان نرتّبها.',
  },
  'faqs.s3.q': {
    en: 'How does the Founding Schools Programme work?',
    ar: 'كيف يشتغل برنامج المدارس المؤسسة؟',
  },
  'faqs.s4.q': { en: 'What does the teacher dashboard include?', ar: 'وش تشمل لوحة المعلم؟' },
  'faqs.s4.a': {
    en: 'The teacher dashboard lets you view individual student progress and class-wide analytics, assign specific practice tasks and mock exams, set deadlines, and identify students who may need additional support. You can also see which topics your class is strongest and weakest on.',
    ar: 'لوحة المعلم تخلّيك تشوف تقدم كل طالب وتحليلات الصف الكامل، تكلّف مهام تدريب وامتحانات تجريبية معينة، تحدّد مواعيد التسليم، وتعرف الطلاب اللي يحتاجون دعم إضافي. كمان تشوف وش المواضيع اللي صفك أقوى أو أضعف فيها.',
  },
  'faqs.s5.q': { en: 'How do I onboard my students?', ar: 'كيف أضيف طلابي؟' },
  'faqs.s5.a': {
    en: 'Once your school licence is set up, you can invite students via email or share a class join code. Students create their own accounts and are automatically linked to your school. Bulk onboarding via CSV upload is also available.',
    ar: 'بعد ما يتفعّل ترخيص المدرسة، تقدر تدعو الطلاب بالإيميل أو تشارك كود انضمام للصف. الطلاب يسوّون حساباتهم وتنربط تلقائياً بمدرستك. الإضافة الجماعية عبر رفع CSV متاحة كمان.',
  },
  'faqs.s6.q': { en: 'Do you offer training for teachers?', ar: 'تقدّمون تدريب للمعلمين؟' },
  'faqs.s6.a': {
    en: 'Yes. All school licences include a free onboarding session where we walk your department through the platform, teacher dashboard, and assignment features. We also provide ongoing support and can arrange additional training if needed.',
    ar: 'إيه. كل تراخيص المدارس فيها جلسة تأهيل مجانية نمشي فيها قسمك على المنصة ولوحة المعلم وميزات التكليفات. نقدّم كمان دعم مستمر ونقدر نرتّب تدريب إضافي عند الحاجة.',
  },

  // ─── Cookie Policy (/cookie-policy) — formal MSA legal body ──────────
  'cookie_policy.last_updated_value': { en: 'March 2026', ar: 'مارس ٢٠٢٦' },
  'cookie_policy.s1.h2': {
    en: '1. What are cookies?',
    ar: '١. ما هي ملفات تعريف الارتباط (الكوكيز)؟',
  },
  'cookie_policy.s1.p1': {
    en: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the owners of the site. Cookies allow a website to recognise your device and remember certain information about your session, such as your login status or preferences.',
    ar: 'ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة تُوضع على جهازك (الحاسوب أو الجهاز اللوحي أو الهاتف المحمول) عند زيارتك لموقع إلكتروني. وتُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أعلى، وتوفير تجربة استخدام أفضل، وإمداد مالكي الموقع بالمعلومات. وتُمكِّن الكوكيز الموقع من التعرّف على جهازك وتذكّر معلومات معيّنة عن جلستك، كحالة تسجيل الدخول أو تفضيلاتك.',
  },
  'cookie_policy.s1.p2': {
    en: 'Some cookies are deleted when you close your browser (session cookies), while others remain on your device for a set period or until you delete them (persistent cookies).',
    ar: 'تُحذَف بعض الكوكيز عند إغلاق المتصفح (كوكيز الجلسة)، بينما تبقى أخرى على جهازك لفترة محدّدة أو إلى أن تقوم بحذفها (الكوكيز الدائمة).',
  },
  'cookie_policy.s2.h2': { en: '2. How we use cookies', ar: '٢. كيف نستخدم الكوكيز' },
  'cookie_policy.s2.p1': {
    en: 'The English Hub (theenglishhub.app) uses cookies and similar technologies for a variety of purposes, including authenticating users, remembering user preferences, processing payments, tracking affiliate referrals, and monitoring errors to improve site reliability. We describe each category in detail below.',
    ar: 'يستخدم The English Hub (theenglishhub.app) ملفات تعريف الارتباط والتقنيات المماثلة لأغراض متعددة، تشمل مصادقة المستخدمين، وتذكّر تفضيلاتهم، ومعالجة المدفوعات، وتتبّع إحالات الشركاء، ومراقبة الأخطاء لتحسين موثوقية الموقع. ونصف كل فئة بالتفصيل أدناه.',
  },
  'cookie_policy.s3.h2': { en: '3. Types of cookies we use', ar: '٣. أنواع الكوكيز التي نستخدمها' },
  'cookie_policy.s3.essential.h3': { en: '3.1 Essential cookies', ar: '٣.١ الكوكيز الضرورية' },
  'cookie_policy.s3.essential.p': {
    en: 'These cookies are strictly necessary for the website to function. They enable core features such as user authentication, session management, and security. Without these cookies you would not be able to log in, access your courses, or complete a purchase. Because they are essential, they do not require consent under UK PECR.',
    ar: 'هذه الكوكيز ضرورية تماماً لعمل الموقع. وتُتيح ميزات أساسية كمصادقة المستخدم وإدارة الجلسات والأمان. وبدونها لن تتمكّن من تسجيل الدخول أو الوصول إلى دوراتك أو إتمام عملية شراء. ولأنها ضرورية، فإنها لا تستلزم الحصول على موافقة بموجب لائحة PECR في المملكة المتحدة.',
  },
  'cookie_policy.s3.essential.li1_strong': {
    en: 'Supabase authentication session',
    ar: 'جلسة مصادقة Supabase',
  },
  'cookie_policy.s3.essential.li1_text': {
    en: ' — maintains your signed-in state so you do not need to log in on every page.',
    ar: ' — يحافظ على حالة تسجيل دخولك حتى لا تحتاج إلى تسجيل الدخول في كل صفحة.',
  },
  'cookie_policy.s3.essential.li2_strong': {
    en: 'CSRF protection token',
    ar: 'رمز الحماية من CSRF',
  },
  'cookie_policy.s3.essential.li2_text': {
    en: ' — guards against cross-site request forgery attacks by validating that form submissions originate from our site.',
    ar: ' — يحمي من هجمات تزوير الطلبات عبر المواقع، من خلال التحقق من أن طلبات النماذج صادرة من موقعنا.',
  },
  'cookie_policy.s3.functional.h3': { en: '3.2 Functional cookies', ar: '٣.٢ الكوكيز الوظيفية' },
  'cookie_policy.s3.functional.p': {
    en: 'Functional cookies remember choices you make to improve your experience. They are not strictly necessary but help us provide enhanced functionality and personalisation.',
    ar: 'تتذكّر الكوكيز الوظيفية الخيارات التي تُحدّدها لتحسين تجربتك. وهي ليست ضرورية تماماً، لكنها تساعدنا على تقديم وظائف معزّزة وتخصيص أفضل.',
  },
  'cookie_policy.s3.functional.li1_strong': {
    en: 'Board selection preference',
    ar: 'تفضيل اختيار البورد',
  },
  'cookie_policy.s3.functional.li1_text': {
    en: ' — remembers your chosen exam board (e.g. AQA, Edexcel, OCR, WJEC Eduqas) so content is filtered appropriately across sessions.',
    ar: ' — يتذكّر البورد الذي اخترته (مثل AQA أو Edexcel أو OCR أو WJEC Eduqas) لتصفية المحتوى بشكل ملائم عبر الجلسات.',
  },
  'cookie_policy.s3.functional.li2_strong': { en: 'Theme preference', ar: 'تفضيل المظهر' },
  'cookie_policy.s3.functional.li2_text': {
    en: ' — stores whether you prefer light or dark mode so the interface matches your choice on return visits.',
    ar: ' — يخزّن ما إذا كنت تُفضّل الوضع الفاتح أم الداكن ليتطابق المظهر مع اختيارك عند الزيارات اللاحقة.',
  },
  'cookie_policy.s3.analytics.h3': {
    en: '3.3 Analytics and error-tracking cookies',
    ar: '٣.٣ كوكيز التحليلات وتتبّع الأخطاء',
  },
  'cookie_policy.s3.analytics.p': {
    en: 'We use Google Analytics 4 (GA4) to understand how visitors use the site, such as which pages are most popular and how users navigate between them. GA4 cookies are only set after you give consent. We use Sentry to monitor application errors and performance. Sentry may set cookies or use similar technologies to collect diagnostic data such as error stack traces, browser type, and page URL. This data helps us identify and fix bugs quickly. Neither Google Analytics nor Sentry uses this information for advertising purposes.',
    ar: 'نستخدم Google Analytics 4 (GA4) لفهم كيفية استخدام الزوار للموقع، كأكثر الصفحات شعبية وكيفية تنقّل المستخدمين بينها. ولا تُضبط كوكيز GA4 إلا بعد الحصول على موافقتك. ونستخدم Sentry لمراقبة أخطاء التطبيق وأدائه. وقد يضبط Sentry كوكيز أو يستخدم تقنيات مماثلة لجمع بيانات تشخيصية، كآثار الأخطاء ونوع المتصفح ورابط الصفحة. وتساعدنا هذه البيانات على تحديد الأخطاء وإصلاحها بسرعة. ولا يستخدم Google Analytics ولا Sentry هذه المعلومات لأغراض إعلانية.',
  },
  'cookie_policy.s3.third_party.h3': {
    en: '3.4 Third-party cookies',
    ar: '٣.٤ كوكيز الأطراف الثالثة',
  },
  'cookie_policy.s3.third_party.p': {
    en: "Certain third-party services we integrate with may set their own cookies on your device. We do not control these cookies; they are governed by the respective third party's privacy and cookie policies.",
    ar: 'قد تَضبط بعض خدمات الأطراف الثالثة التي نتكامل معها كوكيز خاصة بها على جهازك. ونحن لا نتحكّم في هذه الكوكيز؛ بل تخضع لسياسات الخصوصية والكوكيز الخاصة بكل طرف ثالث.',
  },
  'cookie_policy.s3.third_party.li1_strong': { en: 'Stripe', ar: 'Stripe' },
  'cookie_policy.s3.third_party.li1_text_before': {
    en: ' — our payment processor sets cookies to enable secure payment transactions, detect fraud, and remember payment session information. See ',
    ar: ' — معالج المدفوعات لدينا يَضبط كوكيز لتمكين المعاملات الآمنة، واكتشاف الاحتيال، وتذكّر معلومات جلسة الدفع. راجع ',
  },
  'cookie_policy.s3.third_party.li1_link': {
    en: "Stripe's Privacy Policy",
    ar: 'سياسة الخصوصية الخاصة بـ Stripe',
  },
  'cookie_policy.s3.third_party.li2_strong': { en: 'Rewardful', ar: 'Rewardful' },
  'cookie_policy.s3.third_party.li2_text_before': {
    en: ' — our affiliate tracking service sets cookies to attribute referrals to the correct affiliate partner. These cookies record a referral identifier when you arrive via an affiliate link. See ',
    ar: ' — خدمة تتبّع الشركاء التي نستخدمها تَضبط كوكيز لنسب الإحالات إلى الشريك الصحيح. وتسجّل هذه الكوكيز معرّف إحالة عند وصولك عبر رابط شريك. راجع ',
  },
  'cookie_policy.s3.third_party.li2_link': {
    en: "Rewardful's Privacy Policy",
    ar: 'سياسة الخصوصية الخاصة بـ Rewardful',
  },
  'cookie_policy.s4.h2': { en: '4. Cookies in detail', ar: '٤. تفاصيل الكوكيز' },
  'cookie_policy.s4.p': {
    en: 'The table below lists the specific cookies set by The English Hub and its third-party partners.',
    ar: 'يَسرد الجدول أدناه الكوكيز المحدّدة التي يَضبطها The English Hub وشركاؤه من الأطراف الثالثة.',
  },
  'cookie_policy.s4.th_name': { en: 'Name', ar: 'الاسم' },
  'cookie_policy.s4.th_provider': { en: 'Provider', ar: 'المزوّد' },
  'cookie_policy.s4.th_purpose': { en: 'Purpose', ar: 'الغرض' },
  'cookie_policy.s4.th_duration': { en: 'Duration', ar: 'المدة' },
  'cookie_policy.s4.th_type': { en: 'Type', ar: 'النوع' },
  'cookie_policy.s4.type.essential': { en: 'Essential', ar: 'ضروري' },
  'cookie_policy.s4.type.functional': { en: 'Functional', ar: 'وظيفي' },
  'cookie_policy.s4.type.analytics': { en: 'Analytics', ar: 'تحليلي' },
  'cookie_policy.s4.type.third_party': { en: 'Third-party', ar: 'طرف ثالث' },
  'cookie_policy.s4.dur_session': { en: 'Session', ar: 'الجلسة' },
  'cookie_policy.s4.dur_1y': { en: '1 year', ar: 'سنة واحدة' },
  'cookie_policy.s4.dur_2y': { en: '2 years', ar: 'سنتان' },
  'cookie_policy.s4.dur_up_1y': { en: 'Up to 1 year', ar: 'حتى سنة واحدة' },
  'cookie_policy.s4.dur_30m': { en: '30 minutes', ar: '٣٠ دقيقة' },
  'cookie_policy.s4.dur_60d': { en: '60 days', ar: '٦٠ يوماً' },
  'cookie_policy.s4.purp_sb_auth': {
    en: 'Stores the authenticated user session (access and refresh tokens)',
    ar: 'يخزّن جلسة المستخدم المُصادَق عليه (رموز الوصول والتحديث)',
  },
  'cookie_policy.s4.purp_sb_pkce': {
    en: 'PKCE code verifier for secure OAuth authentication flow',
    ar: 'مُحقِّق رمز PKCE لتدفّق مصادقة OAuth الآمن',
  },
  'cookie_policy.s4.purp_csrf': {
    en: 'Protects against cross-site request forgery attacks',
    ar: 'يحمي من هجمات تزوير الطلبات عبر المواقع',
  },
  'cookie_policy.s4.purp_board': {
    en: 'Remembers your selected exam board (e.g. AQA, Edexcel)',
    ar: 'يتذكّر بورد الامتحان الذي اخترته (مثل AQA أو Edexcel)',
  },
  'cookie_policy.s4.purp_theme': {
    en: 'Stores your light/dark mode preference',
    ar: 'يخزّن تفضيلك للوضع الفاتح/الداكن',
  },
  'cookie_policy.s4.purp_sentry': {
    en: 'Tracks error replay session for debugging and performance monitoring',
    ar: 'يتتبّع جلسة إعادة تشغيل الأخطاء لأغراض التشخيص ومراقبة الأداء',
  },
  'cookie_policy.s4.purp_ga': {
    en: 'Distinguishes unique visitors by assigning a randomly generated identifier',
    ar: 'يميّز الزوار الفرديين من خلال تعيين معرّف عشوائي',
  },
  'cookie_policy.s4.purp_ga_session': {
    en: 'Maintains session state for Google Analytics 4',
    ar: 'يحافظ على حالة الجلسة لـ Google Analytics 4',
  },
  'cookie_policy.s4.purp_stripe_mid': {
    en: 'Fraud prevention — unique identifier for the device',
    ar: 'الوقاية من الاحتيال — معرّف فريد للجهاز',
  },
  'cookie_policy.s4.purp_stripe_sid': {
    en: 'Fraud prevention — unique identifier for the browsing session',
    ar: 'الوقاية من الاحتيال — معرّف فريد لجلسة التصفّح',
  },
  'cookie_policy.s4.purp_rewardful': {
    en: 'Stores the affiliate referral identifier to attribute sign-ups',
    ar: 'يخزّن معرّف إحالة الشريك لنسب التسجيلات',
  },
  'cookie_policy.s4.note_wildcard': {
    en: 'Cookie names containing an asterisk (*) indicate a wildcard — the actual name includes your project reference and may vary.',
    ar: 'تُشير أسماء الكوكيز التي تحتوي على علامة نجمية (*) إلى نمط متغيّر — الاسم الفعلي يتضمّن مرجع مشروعك وقد يختلف.',
  },
  'cookie_policy.s5.h2': {
    en: '5. Cookie duration and retention',
    ar: '٥. مدة الكوكيز والاحتفاظ بها',
  },
  'cookie_policy.s5.p_session_strong': { en: 'Session cookies', ar: 'كوكيز الجلسة' },
  'cookie_policy.s5.p_session_text': {
    en: ' are temporary and are deleted automatically when you close your browser.',
    ar: ' هي كوكيز مؤقتة تُحذَف تلقائياً عند إغلاق المتصفح.',
  },
  'cookie_policy.s5.p_persistent_strong': { en: 'Persistent cookies', ar: 'الكوكيز الدائمة' },
  'cookie_policy.s5.p_persistent_text': {
    en: ' remain on your device for the duration specified in the table above, or until you manually delete them. We review cookie retention periods regularly to ensure data is not kept longer than necessary.',
    ar: ' تبقى على جهازك للمدة المحدّدة في الجدول أعلاه، أو إلى أن تقوم بحذفها يدوياً. ونراجع فترات الاحتفاظ بالكوكيز بصفة منتظمة لضمان عدم الاحتفاظ بالبيانات لفترة أطول مما هو ضروري.',
  },
  'cookie_policy.s6.h2': {
    en: '6. How to manage and disable cookies',
    ar: '٦. كيفية إدارة الكوكيز وتعطيلها',
  },
  'cookie_policy.s6.p_intro': {
    en: 'Most web browsers allow you to control cookies through their settings. You can typically find these options in the "Settings", "Preferences", or "Privacy" section of your browser. Common actions include:',
    ar: 'تُتيح معظم المتصفحات لك التحكّم في الكوكيز من خلال إعداداتها. وتوجد هذه الخيارات عادةً ضمن قسم "الإعدادات" أو "التفضيلات" أو "الخصوصية" في متصفحك. وتشمل الإجراءات الشائعة:',
  },
  'cookie_policy.s6.li1': {
    en: 'Viewing which cookies are currently stored and deleting individual cookies',
    ar: 'عرض الكوكيز المخزّنة حالياً وحذف كل منها على حدة',
  },
  'cookie_policy.s6.li2': {
    en: 'Blocking all cookies or only third-party cookies',
    ar: 'حظر جميع الكوكيز أو حظر كوكيز الأطراف الثالثة فقط',
  },
  'cookie_policy.s6.li3': {
    en: 'Configuring your browser to notify you before a cookie is set',
    ar: 'تكوين المتصفح لإخطارك قبل ضبط كوكيز',
  },
  'cookie_policy.s6.li4': {
    en: 'Clearing all cookies when you close the browser',
    ar: 'مسح جميع الكوكيز عند إغلاق المتصفح',
  },
  'cookie_policy.s6.p_outro': {
    en: "For step-by-step instructions, refer to your browser's help documentation:",
    ar: 'للحصول على إرشادات تفصيلية، راجع وثائق المساعدة الخاصة بمتصفحك:',
  },
  'cookie_policy.s6.browser_chrome': { en: 'Google Chrome', ar: 'Google Chrome' },
  'cookie_policy.s6.browser_firefox': { en: 'Mozilla Firefox', ar: 'Mozilla Firefox' },
  'cookie_policy.s6.browser_safari': { en: 'Apple Safari', ar: 'Apple Safari' },
  'cookie_policy.s6.browser_edge': { en: 'Microsoft Edge', ar: 'Microsoft Edge' },
  'cookie_policy.s7.h2': { en: '7. Impact of disabling cookies', ar: '٧. أثر تعطيل الكوكيز' },
  'cookie_policy.s7.p_intro': {
    en: 'If you choose to disable or block cookies, please be aware that some parts of The English Hub may not function correctly. In particular:',
    ar: 'إذا اخترت تعطيل الكوكيز أو حظرها، فيُرجى ملاحظة أن بعض أجزاء The English Hub قد لا تعمل بشكل صحيح. وعلى وجه الخصوص:',
  },
  'cookie_policy.s7.li1_strong': { en: 'Blocking essential cookies', ar: 'حظر الكوكيز الضرورية' },
  'cookie_policy.s7.li1_text': {
    en: ' will prevent you from signing in, accessing purchased courses, and completing payment transactions.',
    ar: ' سيمنعك من تسجيل الدخول، والوصول إلى الدورات المشتراة، وإتمام معاملات الدفع.',
  },
  'cookie_policy.s7.li2_strong': { en: 'Blocking functional cookies', ar: 'حظر الكوكيز الوظيفية' },
  'cookie_policy.s7.li2_text': {
    en: ' means your exam board and theme preferences will not be saved between visits, and you will need to select them each time.',
    ar: ' يعني أن تفضيلات بورد الامتحان والمظهر لن تُحفظ بين الزيارات، وستحتاج إلى اختيارها في كل مرة.',
  },
  'cookie_policy.s7.li3_strong': { en: 'Blocking analytics cookies', ar: 'حظر كوكيز التحليلات' },
  'cookie_policy.s7.li3_text': {
    en: ' will not affect your use of the site but may reduce our ability to detect and resolve technical issues promptly.',
    ar: ' لن يؤثر على استخدامك للموقع، لكنه قد يُقلّل من قدرتنا على اكتشاف المشكلات التقنية ومعالجتها بسرعة.',
  },
  'cookie_policy.s7.li4_strong': {
    en: 'Blocking third-party cookies',
    ar: 'حظر كوكيز الأطراف الثالثة',
  },
  'cookie_policy.s7.li4_text': {
    en: ' may prevent payment processing through Stripe and may mean affiliate referrals are not tracked correctly.',
    ar: ' قد يمنع معالجة الدفع عبر Stripe، وقد يعني أن إحالات الشركاء لن تُتتبَّع بصورة صحيحة.',
  },
  'cookie_policy.s8.h2': {
    en: '8. UK PECR compliance',
    ar: '٨. الامتثال للائحة PECR في المملكة المتحدة',
  },
  'cookie_policy.s8.p1': {
    en: 'The English Hub complies with the UK Privacy and Electronic Communications Regulations 2003 (PECR), as amended, alongside the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
    ar: 'يمتثل The English Hub للائحة الخصوصية والاتصالات الإلكترونية في المملكة المتحدة لعام ٢٠٠٣ (PECR) بصيغتها المُعدَّلة، إلى جانب اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR) وقانون حماية البيانات لعام ٢٠١٨.',
  },
  'cookie_policy.s8.p2_pre': {
    en: 'Under PECR, we are permitted to set ',
    ar: 'بموجب لائحة PECR، يُسمح لنا بضبط ',
  },
  'cookie_policy.s8.p2_strong': { en: 'strictly necessary cookies', ar: 'الكوكيز الضرورية تماماً' },
  'cookie_policy.s8.p2_post': {
    en: ' (essential cookies) without prior consent, as they are required for the service you have requested. For all other cookies — including functional, analytics, and third-party cookies — we obtain your consent before placing them on your device. You may withdraw your consent at any time by adjusting your browser settings or contacting us.',
    ar: ' (الكوكيز الأساسية) دون موافقة مسبقة، لأنها مطلوبة لتقديم الخدمة التي طلبتها. أما بالنسبة لجميع الكوكيز الأخرى — بما فيها الوظيفية والتحليلية وكوكيز الأطراف الثالثة — فإننا نحصل على موافقتك قبل وضعها على جهازك. ويمكنك سحب موافقتك في أي وقت عن طريق ضبط إعدادات المتصفح أو الاتصال بنا.',
  },
  'cookie_policy.s8.p3_pre': {
    en: 'We regularly review and update our cookie practices to ensure continued compliance with applicable regulations. If you have questions about our use of cookies or wish to exercise your data rights, please contact us at ',
    ar: 'نراجع ممارساتنا المتعلّقة بالكوكيز ونُحدّثها بصفة دورية لضمان استمرار الامتثال للأنظمة المعمول بها. وإذا كانت لديك أي استفسارات بشأن استخدامنا للكوكيز أو رغبت في ممارسة حقوقك المتعلّقة بالبيانات، فيُرجى التواصل معنا على ',
  },
  'cookie_policy.s9.h2': {
    en: '9. Changes to this Cookie Policy',
    ar: '٩. التعديلات على سياسة الكوكيز هذه',
  },
  'cookie_policy.s9.p': {
    en: 'We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how we use cookies.',
    ar: 'قد نُحدّث سياسة الكوكيز هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب قانونية أو تنظيمية أو تشغيلية. وعند إجراء تغييرات جوهرية، سنُحدِّث تاريخ "آخر تحديث" في أعلى هذه الصفحة. ونحثّك على مراجعة هذه الصفحة دورياً للاطلاع على كيفية استخدامنا للكوكيز.',
  },
  'cookie_policy.s10.h2': { en: '10. Privacy Policy', ar: '١٠. سياسة الخصوصية' },
  'cookie_policy.s10.p_pre': {
    en: 'For more information about how we collect, use, and protect your personal data, please read our ',
    ar: 'لمزيد من المعلومات حول كيفية جمعنا لبياناتك الشخصية واستخدامها وحمايتها، يُرجى الاطلاع على ',
  },
  'cookie_policy.s10.p_link': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },

  // ─── Refund Policy (/refund-policy) — formal MSA legal body ──────────
  'refund.title': { en: 'Refund Policy', ar: 'سياسة استرداد الأموال' },
  'refund.operated_by': {
    en: 'Operated by Upskill Energy Limited, trading as The English Hub',
    ar: 'تُشغَّل من قِبَل Upskill Energy Limited، تحت الاسم التجاري The English Hub',
  },
  'refund.last_updated_value': { en: 'March 2026', ar: 'مارس ٢٠٢٦' },
  'refund.s1.h2': { en: '1. Overview', ar: '١. نظرة عامة' },
  'refund.s1.p1_pre': {
    en: 'At The English Hub ("we", "us", "our"), we want you to be completely satisfied with your purchase. This refund policy explains your rights when you buy a subscription or course through ',
    ar: 'في The English Hub ("نحن"، "لنا"، "خاصتنا")، نحرص على رضاك التامّ عن مشترياتك. وتوضّح سياسة الاسترداد هذه حقوقك عند شراء اشتراك أو دورة عبر ',
  },
  'refund.s1.p1_link': { en: 'theenglishhub.app', ar: 'theenglishhub.app' },
  'refund.s1.p1_post': {
    en: '. It applies to all customers, including those based in the United Kingdom, and reflects your rights under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.',
    ar: '. وتنطبق هذه السياسة على جميع العملاء، بمن فيهم المقيمون في المملكة المتحدة، وتعكس حقوقك بموجب لائحة عقود المستهلكين (المعلومات والإلغاء والرسوم الإضافية) لعام ٢٠١٣.',
  },
  'refund.s1.p2': {
    en: 'All payments are processed securely through Stripe. We do not store your card details on our servers.',
    ar: 'تُعالَج جميع المدفوعات بأمان من خلال Stripe. ولا نقوم بتخزين بيانات بطاقتك على خوادمنا.',
  },
  'refund.s2.h2': {
    en: '2. Your 14-day cooling-off period',
    ar: '٢. فترة التروّي البالغة ١٤ يوماً',
  },
  'refund.s2.p1': {
    en: 'Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, when you purchase digital content or a subscription online you have the right to cancel within 14 days of your purchase without giving any reason. This is sometimes called the "cooling-off period".',
    ar: 'بموجب لائحة عقود المستهلكين (المعلومات والإلغاء والرسوم الإضافية) لعام ٢٠١٣، فإنه عند شرائك محتوى رقمي أو اشتراك عبر الإنترنت، يحقّ لك الإلغاء خلال ١٤ يوماً من تاريخ الشراء دون إبداء أي سبب. وتُسمّى هذه الفترة أحياناً "فترة التروّي".',
  },
  'refund.s2.p2': {
    en: 'However, please note that once you begin accessing or downloading digital content (for example, starting a course lesson or downloading course materials), you may lose this right if you gave your explicit consent to begin receiving the content before the end of the cooling-off period. We will always ask for your consent before delivering digital content during the cooling-off period and inform you that doing so will affect your cancellation rights.',
    ar: 'غير أنه يُرجى ملاحظة أنه بمجرد بدء وصولك إلى المحتوى الرقمي أو تنزيله (مثل بدء درس في دورة أو تنزيل موادّ دراسية)، فقد تفقد هذا الحق إذا كنت قد منحت موافقتك الصريحة على البدء في تلقّي المحتوى قبل انتهاء فترة التروّي. وسنطلب موافقتك دائماً قبل تقديم محتوى رقمي خلال فترة التروّي، وسنُعلمك بأن منحك هذه الموافقة سيؤثر على حقك في الإلغاء.',
  },
  'refund.s3.h2': { en: '3. Subscription cancellations', ar: '٣. إلغاءات الاشتراك' },
  'refund.s3.p_intro': {
    en: 'You can cancel your subscription at any time from your account settings or through the Stripe billing portal. When you cancel:',
    ar: 'يمكنك إلغاء اشتراكك في أي وقت من خلال إعدادات حسابك أو عبر بوابة الفوترة في Stripe. وعند الإلغاء:',
  },
  'refund.s3.li1': {
    en: 'Your subscription will remain active until the end of your current billing period. You will continue to have full access to all subscription features until that date.',
    ar: 'يظل اشتراكك ساري المفعول حتى نهاية فترة الفوترة الحالية. وستظل لديك صلاحية وصول كاملة إلى جميع ميزات الاشتراك حتى ذلك التاريخ.',
  },
  'refund.s3.li2': {
    en: 'You will not be charged again after cancellation. No further payments will be taken once the current period ends.',
    ar: 'لن تتم محاسبتك مرة أخرى بعد الإلغاء. ولن تُسحب أي مدفوعات إضافية بعد انتهاء الفترة الحالية.',
  },
  'refund.s3.li3': {
    en: 'If you cancel within 14 days of your first subscription payment and have not substantially used the platform (for example, you have not completed any course modules), you are entitled to a full refund of that payment under your cooling-off rights.',
    ar: 'إذا ألغيت الاشتراك خلال ١٤ يوماً من أول دفعة، ولم تستخدم المنصة استخداماً جوهرياً (كأن لا تكون قد أكملت أيّ وحدات من الدورات)، فيحق لك استرداد كامل تلك الدفعة بموجب حقوق التروّي.',
  },
  'refund.s3.p_outro': {
    en: 'We do not offer partial refunds for unused portions of a billing period outside the 14-day cooling-off window, because you retain access to the service for the remainder of the period you have already paid for.',
    ar: 'لا نُقدّم استرداداً جزئياً عن الأجزاء غير المستخدَمة من فترة الفوترة خارج نافذة التروّي البالغة ١٤ يوماً، نظراً لاحتفاظك بحق الوصول إلى الخدمة لما تبقّى من الفترة التي دفعت ثمنها بالفعل.',
  },
  'refund.s4.h2': { en: '4. Free trial', ar: '٤. التجربة المجانية' },
  'refund.s4.p_intro': {
    en: 'We offer a 30-day free trial so you can explore The English Hub before committing to a paid plan. During the trial:',
    ar: 'نُقدّم تجربة مجانية لمدة ٣٠ يوماً حتى تتمكّن من استكشاف The English Hub قبل الالتزام بخطة مدفوعة. وخلال هذه التجربة:',
  },
  'refund.s4.li1': {
    en: 'You will not be charged anything for the first 30 days.',
    ar: 'لن تتم محاسبتك بأي مبلغ خلال أول ٣٠ يوماً.',
  },
  'refund.s4.li2': {
    en: 'If you cancel at any point during the 30-day trial, your account will simply revert to a free account and you will never be billed.',
    ar: 'إذا ألغيت الاشتراك في أي وقت خلال فترة التجربة، فسيعود حسابك ببساطة إلى حساب مجاني ولن تُحاسَب أبداً.',
  },
  'refund.s4.li3': {
    en: 'If you do not cancel before the trial ends, your chosen subscription plan will begin and your payment method will be charged automatically.',
    ar: 'إذا لم تُلغِ قبل انتهاء التجربة، فستبدأ خطة الاشتراك التي اخترتها، وستتم محاسبة طريقة الدفع تلقائياً.',
  },
  'refund.s4.p_outro': {
    en: 'We recommend setting a reminder if you are unsure whether you want to continue. You can check your trial end date at any time in your account settings.',
    ar: 'نوصي بضبط تذكير إذا كنت غير متأكد من رغبتك في الاستمرار. ويمكنك مراجعة تاريخ انتهاء التجربة في أي وقت من إعدادات حسابك.',
  },
  'refund.s5.h2': { en: '5. One-time course purchases', ar: '٥. عمليات الشراء لمرة واحدة للدورات' },
  'refund.s5.p_intro': {
    en: 'If you purchase an individual course as a one-time payment (outside of a subscription), the following refund terms apply:',
    ar: 'إذا اشتريت دورة فردية بدفعة واحدة (خارج نطاق الاشتراك)، فإن شروط الاسترداد التالية تنطبق:',
  },
  'refund.s5.li1_strong': { en: 'Course not started:', ar: 'الدورة لم تبدأ بعد:' },
  'refund.s5.li1_text': {
    en: ' You may request a full refund within 14 days of purchase if you have not started the course (i.e., you have not opened or accessed any lesson content). This is in line with your statutory cooling-off rights.',
    ar: ' يمكنك طلب استرداد كامل خلال ١٤ يوماً من تاريخ الشراء إذا لم تبدأ الدورة (أي لم تَفتح أو تَصل إلى أي محتوى للدروس). ويتوافق ذلك مع حقوق التروّي القانونية الخاصة بك.',
  },
  'refund.s5.li2_strong': { en: 'Course started:', ar: 'الدورة بدأت:' },
  'refund.s5.li2_text': {
    en: ' If you have begun the course by accessing lesson content, you will have given your explicit consent to receive digital content during the cooling-off period. In that case, a refund may not be available. However, if you experience a genuine issue with the course (for example, the content is materially different from what was described), please contact us and we will review your case.',
    ar: ' إذا بدأت الدورة عن طريق الوصول إلى محتوى الدروس، فإنك تكون قد منحت موافقتك الصريحة على تلقّي المحتوى الرقمي خلال فترة التروّي. وفي هذه الحالة، قد لا يكون الاسترداد متاحاً. ومع ذلك، إذا واجهت مشكلة حقيقية في الدورة (مثل اختلاف المحتوى اختلافاً جوهرياً عمّا تم وصفه)، فيُرجى التواصل معنا وسنُراجع حالتك.',
  },
  'refund.s6.h2': { en: '6. How to request a refund', ar: '٦. كيفية طلب الاسترداد' },
  'refund.s6.p_intro': {
    en: 'To request a refund, you can either:',
    ar: 'لطلب الاسترداد، يمكنك القيام بأحد الأمور التالية:',
  },
  'refund.s6.li1_strong': { en: 'Email us', ar: 'راسلنا عبر البريد الإلكتروني' },
  'refund.s6.li1_text_pre': { en: ' at ', ar: ' على ' },
  'refund.s6.li1_text_post': {
    en: ' with your account email address and a brief description of why you would like a refund. We aim to respond to all refund requests within two business days.',
    ar: ' مرفقاً بريد حسابك الإلكتروني ووصفاً مختصراً لسبب رغبتك في الاسترداد. ونسعى للرد على جميع طلبات الاسترداد خلال يومَي عمل.',
  },
  'refund.s6.li2_strong': {
    en: 'Use the Stripe billing portal',
    ar: 'استخدم بوابة الفوترة في Stripe',
  },
  'refund.s6.li2_text': {
    en: ' accessible from your account settings. The portal allows you to manage your subscription and payment details directly, including cancellation.',
    ar: ' وهي متاحة من إعدادات حسابك. وتُمكّنك البوابة من إدارة اشتراكك وتفاصيل الدفع مباشرةً، بما في ذلك الإلغاء.',
  },
  'refund.s6.p_outro': {
    en: 'Please include the email address associated with your account so we can locate your purchase quickly. If you are a parent or guardian requesting a refund on behalf of a student, please mention this in your email so we can verify the account.',
    ar: 'يُرجى تضمين البريد الإلكتروني المرتبط بحسابك حتى نتمكّن من تحديد عملية الشراء بسرعة. وإذا كنت ولي أمر أو وصياً تطلب الاسترداد نيابةً عن طالب، فيُرجى الإشارة إلى ذلك في بريدك ليتسنّى لنا التحقق من الحساب.',
  },
  'refund.s7.h2': { en: '7. Refund processing time', ar: '٧. مدة معالجة الاسترداد' },
  'refund.s7.p1': {
    en: 'Once a refund has been approved, it will be processed within 5 to 10 business days. The exact time it takes for the refund to appear in your account depends on your bank or card provider. In most cases, refunds are completed within five business days, but some providers may take up to ten.',
    ar: 'بعد الموافقة على الاسترداد، تتم معالجته خلال ٥ إلى ١٠ أيام عمل. وتتوقّف المدة الفعلية لظهور المبلغ المُستردّ في حسابك على البنك أو مزوّد البطاقة الخاصة بك. وفي معظم الحالات، تكتمل عمليات الاسترداد خلال خمسة أيام عمل، غير أن بعض المزوّدين قد يستغرقون حتى عشرة أيام.',
  },
  'refund.s7.p2_pre': {
    en: 'If you have not received your refund after ten business days, please check with your bank or card provider first. If the issue persists, contact us at ',
    ar: 'إذا لم تستلم المبلغ المُستردّ بعد عشرة أيام عمل، فيُرجى التواصل مع البنك أو مزوّد البطاقة أولاً. وفي حال استمرار المشكلة، تواصل معنا على ',
  },
  'refund.s7.p2_post': { en: ' and we will investigate.', ar: ' وسنُجري التحقيق اللازم.' },
  'refund.s8.h2': { en: '8. Method of refund', ar: '٨. طريقة الاسترداد' },
  'refund.s8.p': {
    en: 'All refunds are returned to the original payment method used at the time of purchase. Refunds are processed through Stripe, our payment provider. We are unable to issue refunds to a different card, bank account, or payment method. If the original payment method is no longer active (for example, an expired card), the refund will typically still be routed to your account by your bank. If you have any difficulty receiving your refund, please contact your bank or card provider.',
    ar: 'تُعاد جميع المبالغ المُستردّة إلى طريقة الدفع الأصلية المستخدمة وقت الشراء. وتتم معالجة المبالغ المُستردّة عبر Stripe، مزوّد المدفوعات لدينا. ولا نستطيع إصدار استرداد إلى بطاقة أو حساب بنكي أو طريقة دفع مختلفة. وإذا كانت طريقة الدفع الأصلية لم تعد نشطة (كانتهاء صلاحية البطاقة)، فعادةً ما يُعيد البنك توجيه المبلغ المُستردّ إلى حسابك. وإذا واجهت أي صعوبة في استلام المبلغ المُستردّ، فيُرجى التواصل مع البنك أو مزوّد البطاقة.',
  },
  'refund.s9.h2': { en: '9. Exceptions', ar: '٩. الاستثناءات' },
  'refund.s9.p_intro': {
    en: 'Refunds are not available in the following circumstances:',
    ar: 'لا يُتاح الاسترداد في الحالات التالية:',
  },
  'refund.s9.li1_strong': { en: 'Completed courses:', ar: 'الدورات المكتملة:' },
  'refund.s9.li1_text': {
    en: ' If you have completed a course in full (i.e., accessed all lessons and received a completion certificate), a refund cannot be issued for that course.',
    ar: ' إذا أكملت الدورة بالكامل (أي وصلت إلى جميع الدروس واستلمت شهادة الإكمال)، فلا يمكن إصدار استرداد عن تلك الدورة.',
  },
  'refund.s9.li2_strong': {
    en: 'Digital content consumed with explicit consent:',
    ar: 'المحتوى الرقمي المُستهلَك بموافقة صريحة:',
  },
  'refund.s9.li2_text': {
    en: ' Where you have given your explicit consent to begin receiving digital content before the end of the 14-day cooling-off period and acknowledged that doing so means you lose your right to cancel, we are not obliged to offer a refund. This is consistent with Regulation 37 of the Consumer Contracts Regulations 2013.',
    ar: ' في الحالات التي تكون فيها قد منحت موافقتك الصريحة على البدء في تلقّي المحتوى الرقمي قبل نهاية فترة التروّي البالغة ١٤ يوماً، وأقررت بأن ذلك يعني فقدان حقك في الإلغاء، فلسنا ملزمين بتقديم استرداد. ويتماشى هذا مع المادة ٣٧ من لائحة عقود المستهلكين لعام ٢٠١٣.',
  },
  'refund.s9.li3_strong': { en: 'Abuse of refund policy:', ar: 'إساءة استخدام سياسة الاسترداد:' },
  'refund.s9.li3_text': {
    en: ' We reserve the right to refuse a refund if we have reasonable grounds to believe the refund system is being misused, for example by repeatedly purchasing and refunding the same content.',
    ar: ' نحتفظ بالحق في رفض الاسترداد إذا كانت لدينا أسباب معقولة للاعتقاد بأن نظام الاسترداد يُساء استخدامه، مثل شراء المحتوى نفسه واستردادِه مراراً وتكراراً.',
  },
  'refund.s9.p_outro': {
    en: 'These exceptions do not affect your statutory rights. If you believe you have been treated unfairly, you are welcome to contact us and we will do our best to resolve the matter.',
    ar: 'لا تؤثر هذه الاستثناءات على حقوقك القانونية. وإذا كنت تعتقد أنه قد تمت معاملتك بصورة غير عادلة، فيُسعدنا تواصلك معنا، وسنبذل قصارى جهدنا لحلّ الأمر.',
  },
  'refund.s10.h2': { en: '10. Your statutory rights', ar: '١٠. حقوقك القانونية' },
  'refund.s10.p': {
    en: 'Nothing in this policy affects your statutory rights under UK consumer law, including the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. If digital content is faulty or not as described, you have additional rights to a repair, replacement, or refund regardless of the exceptions listed above.',
    ar: 'لا يؤثر أي بند في هذه السياسة على حقوقك القانونية بموجب قوانين المستهلك في المملكة المتحدة، بما في ذلك قانون حقوق المستهلك لعام ٢٠١٥ ولائحة عقود المستهلكين (المعلومات والإلغاء والرسوم الإضافية) لعام ٢٠١٣. وإذا كان المحتوى الرقمي معيباً أو غير مطابق للوصف، فإنك تتمتّع بحقوق إضافية في الإصلاح أو الاستبدال أو الاسترداد بصرف النظر عن الاستثناءات المذكورة أعلاه.',
  },
  'refund.s11.h2': { en: '11. Contact us', ar: '١١. تواصل معنا' },
  'refund.s11.p_intro': {
    en: 'If you have any questions about this refund policy or need help with a refund request, please get in touch:',
    ar: 'إذا كانت لديك أي استفسارات بشأن سياسة الاسترداد هذه، أو احتجت إلى مساعدة بشأن طلب استرداد، فيُرجى التواصل معنا:',
  },
  'refund.s11.email_label': { en: 'Email:', ar: 'البريد الإلكتروني:' },
  'refund.s11.contact_form_label': { en: 'Contact form:', ar: 'نموذج التواصل:' },

  // ─── Terms of Service (/terms) — formal MSA legal body ────────────────
  'terms.title': { en: 'Terms of Service', ar: 'شروط الخدمة' },
  'terms.last_updated_value': { en: 'March 2026', ar: 'مارس ٢٠٢٦' },
  'terms.s1.h2': { en: '1. Introduction', ar: '١. مقدّمة' },
  'terms.s1.p1': {
    en: 'These Terms of Service ("Terms") govern your access to and use of The English Hub (accessible at theenglishhub.app), operated by Upskill Energy Limited (Company No. 16511479), trading as The English Hub, a company registered in England and Wales ("we", "us", "our"). By creating an account or using any part of our platform, you agree to be bound by these Terms. If you do not agree, you must not use the Service.',
    ar: 'تَحكُم شروط الخدمة هذه ("الشروط") وصولك إلى The English Hub (المتاح على theenglishhub.app) واستخدامك له، وهو يُشغَّل من قِبَل Upskill Energy Limited (رقم الشركة 16511479)، تحت الاسم التجاري The English Hub، وهي شركة مسجّلة في إنجلترا وويلز ("نحن"، "لنا"، "خاصتنا"). وبإنشائك حساباً أو استخدامك أي جزء من منصّتنا، فإنك توافق على الالتزام بهذه الشروط. وإذا لم توافق عليها، فيجب عليك عدم استخدام الخدمة.',
  },
  'terms.s1.p2': {
    en: 'The English Hub is an online learning platform designed to support students studying GCSE English Language and English Literature. Our Service includes structured courses, interactive practice exercises, timed mock examinations, AI-powered essay feedback, and revision resources. The platform is intended as a supplementary educational tool and does not replace formal schooling or professional tutoring.',
    ar: 'The English Hub هي منصة تعلّم إلكتروني مُصمَّمة لدعم الطلاب الذين يدرسون GCSE English Language و English Literature. وتشمل خدمتنا دورات مُهيكلة، وتمارين تدريب تفاعلية، وامتحانات تجريبية مُحدّدة الوقت، وملاحظات على المقالات بواسطة الذكاء الاصطناعي، وموارد للمراجعة. والمنصة مُخصَّصة لتكون أداةً تعليمية تكميلية، ولا تَحلّ محلّ التعليم النظامي أو الدروس الخصوصية المهنية.',
  },
  'terms.s2.h2': { en: '2. Eligibility', ar: '٢. الأهلية' },
  'terms.s2.p1': {
    en: "You must be at least 13 years of age (the age of digital consent in the UK under the Data Protection Act 2018) to create an account on The English Hub. If you are under 16 years of age, you must have the consent of a parent or legal guardian before registering. By creating an account for a user under 16, the parent or guardian agrees to these Terms on the minor's behalf and accepts responsibility for the minor's use of the Service.",
    ar: 'يجب ألا يقلّ عمرك عن ١٣ عاماً (سنّ الموافقة الرقمية في المملكة المتحدة بموجب قانون حماية البيانات لعام ٢٠١٨) لإنشاء حساب على The English Hub. وإذا كان عمرك أقلّ من ١٦ عاماً، فيجب الحصول على موافقة ولي الأمر أو الوصي القانوني قبل التسجيل. وبإنشاء حساب لمستخدم دون السادسة عشرة، يوافق ولي الأمر أو الوصي على هذه الشروط نيابةً عن القاصر، ويتحمّل مسؤولية استخدام القاصر للخدمة.',
  },
  'terms.s2.p2': {
    en: 'School and institutional accounts are provisioned and managed by the subscribing educational institution. Where a school creates accounts on behalf of its students, the school is responsible for obtaining any necessary parental consents and for ensuring compliance with applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Individual students using school-provisioned accounts are also bound by these Terms.',
    ar: 'تُنشأ حسابات المدارس والمؤسسات وتُدار من قِبَل المؤسسة التعليمية المُشترِكة. وعندما تُنشئ المدرسة حسابات نيابةً عن طلابها، تكون المدرسة مسؤولة عن الحصول على أي موافقات أبوية لازمة، وعن ضمان الامتثال لتشريعات حماية البيانات المعمول بها، بما في ذلك اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR) وقانون حماية البيانات لعام ٢٠١٨. ويلتزم الطلاب الأفراد الذين يستخدمون حسابات مُقدَّمة من المدرسة بهذه الشروط أيضاً.',
  },
  'terms.s3.h2': { en: '3. Account Responsibilities', ar: '٣. مسؤوليات الحساب' },
  'terms.s3.p1': {
    en: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate and complete information when registering and keep your details up to date. You agree to notify us immediately at info@Upskillenergy.com if you become aware of any unauthorised use of your account.',
    ar: 'تتحمّل المسؤولية عن الحفاظ على سرّية بيانات اعتماد حسابك، وعن جميع الأنشطة التي تجري تحت حسابك. ويجب عليك تقديم معلومات دقيقة وكاملة عند التسجيل، والحفاظ على تحديث بياناتك. وتوافق على إخطارنا فوراً على info@Upskillenergy.com إذا علمت بأي استخدام غير مُصرَّح به لحسابك.',
  },
  'terms.s3.p2': {
    en: 'Each account is for a single individual user. You may not share your login credentials with any other person or allow multiple individuals to use a single account. We reserve the right to suspend or terminate accounts where we reasonably believe sharing is taking place.',
    ar: 'يُخصَّص كل حساب لمستخدم فردي واحد. ولا يجوز لك مشاركة بيانات تسجيل دخولك مع أي شخص آخر، أو السماح لعدّة أفراد باستخدام حساب واحد. ونحتفظ بالحق في تعليق الحسابات أو إنهائها متى ما كان لدينا اعتقاد معقول بحدوث مشاركة.',
  },
  'terms.s4.h2': { en: '4. Subscription Plans', ar: '٤. خطط الاشتراك' },
  'terms.s4.p_intro': {
    en: 'The English Hub offers the following subscription plans for individual users (as of 21 April 2026). All plans renew automatically until cancelled. The prices listed below are "Early Access / Founding" rates and apply to all new sign-ups until 31 July 2026. From August 2026 the Standard rates shown in parentheses become the advertised price; existing subscribers who joined on an Early Access rate keep their rate until the subscription is cancelled or lapses.',
    ar: 'يُقدّم The English Hub خطط الاشتراك التالية للمستخدمين الأفراد (اعتباراً من ٢١ أبريل ٢٠٢٦). وتتجدّد جميع الخطط تلقائياً حتى إلغائها. والأسعار المُدرَجة أدناه هي أسعار "Early Access / Founding" وتنطبق على جميع المُسجَّلين الجدد حتى ٣١ يوليو ٢٠٢٦. واعتباراً من أغسطس ٢٠٢٦، تُصبح الأسعار العادية المُدرَجة بين قوسين هي السعر المُعلَن؛ ويحتفظ المشتركون الحاليون الذين انضمّوا بسعر Early Access بسعرهم حتى إلغاء الاشتراك أو انقضائه.',
  },
  'terms.s4.li_sm_strong': { en: 'Student Plan — Monthly:', ar: 'خطة الطالب — شهرية:' },
  'terms.s4.li_sm_text': {
    en: ' £3.99 per month, billed monthly on a recurring basis (Standard from August 2026: £7.99 per month). Full access to every feature on the platform.',
    ar: ' £3.99 شهرياً، تُحتسَب شهرياً على أساس متكرر (السعر العادي من أغسطس ٢٠٢٦: £7.99 شهرياً). صلاحية وصول كاملة لكل ميزة على المنصة.',
  },
  'terms.s4.li_sa_strong': { en: 'Student Plan — Annual:', ar: 'خطة الطالب — سنوية:' },
  'terms.s4.li_sa_text': {
    en: ' £29.99 per year, billed annually on a recurring basis (Standard from August 2026: £69.99 per year). Full access to every feature on the platform.',
    ar: ' £29.99 سنوياً، تُحتسَب سنوياً على أساس متكرر (السعر العادي من أغسطس ٢٠٢٦: £69.99 سنوياً). صلاحية وصول كاملة لكل ميزة على المنصة.',
  },
  'terms.s4.li_sa_promo_strong': {
    en: 'Student Plan — Annual with affiliate or promo code:',
    ar: 'خطة الطالب — سنوية بكود شريك أو كود ترويجي:',
  },
  'terms.s4.li_sa_promo_text_pre': {
    en: ' £20 per year when the checkout includes a valid affiliate code, or the public promotional code ',
    ar: ' £20 سنوياً عندما تتضمّن عملية الدفع كود شريك صالح، أو الكود الترويجي العام ',
  },
  'terms.s4.li_sa_promo_text_post': {
    en: '. Feature access is identical to the standard annual plan.',
    ar: '. صلاحية الوصول إلى الميزات مطابقة للخطة السنوية القياسية.',
  },
  'terms.s4.li_tm_strong': { en: 'Teacher Plan — Monthly:', ar: 'خطة المعلم — شهرية:' },
  'terms.s4.li_tm_text': {
    en: ' £6.99 per month, billed monthly on a recurring basis (Standard from August 2026: £11.99 per month). Includes AI lesson planning, worksheet builder, bulk essay marking, and class analytics in addition to all student features.',
    ar: ' £6.99 شهرياً، تُحتسَب شهرياً على أساس متكرر (السعر العادي من أغسطس ٢٠٢٦: £11.99 شهرياً). تشمل تخطيط الدروس بالذكاء الاصطناعي، وبناء أوراق العمل، وتصحيح المقالات بالجملة، وتحليلات الفصل، إضافةً إلى جميع ميزات الطالب.',
  },
  'terms.s4.li_ta_strong': { en: 'Teacher Plan — Annual:', ar: 'خطة المعلم — سنوية:' },
  'terms.s4.li_ta_text': {
    en: ' £67.99 per year, billed annually on a recurring basis (Standard from August 2026: £99 per year). Same feature set as the Teacher Monthly plan.',
    ar: ' £67.99 سنوياً، تُحتسَب سنوياً على أساس متكرر (السعر العادي من أغسطس ٢٠٢٦: £99 سنوياً). نفس مجموعة الميزات الموجودة في خطة المعلم الشهرية.',
  },
  'terms.s4.li_fs_strong': { en: 'Founding Schools Programme:', ar: 'برنامج المدارس المؤسِّسة:' },
  'terms.s4.li_fs_text': {
    en: ' £4,000 per year (Standard from August 2026: £8,000 per year). Strictly limited to the first 10 schools. Includes whole-school licence, bulk onboarding, teacher dashboards, and locked preferential pricing for 2–3 years. Schools who joined the programme in wave 1 at £3,000 per year are grandfathered at that rate.',
    ar: ' £4,000 سنوياً (السعر العادي من أغسطس ٢٠٢٦: £8,000 سنوياً). يقتصر بشكل صارم على أول ١٠ مدارس. ويشمل ترخيصاً للمدرسة بأكملها، وتأهيلاً جماعياً، ولوحات للمعلمين، وأسعاراً تفضيلية مثبتة لمدة ٢-٣ سنوات. وتحتفظ المدارس التي انضمّت إلى البرنامج في الموجة الأولى بسعر £3,000 سنوياً بذلك السعر.',
  },
  'terms.s4.p_vat_strong': { en: 'VAT.', ar: 'ضريبة القيمة المضافة.' },
  'terms.s4.p_vat_text': {
    en: ' Prices shown in GBP. Where VAT applies at the point of sale, it is included in the displayed price.',
    ar: ' الأسعار مُدرَجة بالجنيه الإسترليني. وعندما تنطبق ضريبة القيمة المضافة عند نقطة البيع، فإنها تكون مُدرَجة ضمن السعر المعروض.',
  },
  'terms.s4.p_trial_strong': { en: '7-day free trial.', ar: 'تجربة مجانية لمدة ٧ أيام.' },
  'terms.s4.p_trial_text': {
    en: ' New subscribers are eligible for a single 7-day free trial on their first paid plan. The trial requires full sign-up with a valid payment method. During the trial period you will have full access to the platform. If you do not cancel before the trial ends, your chosen subscription plan activates automatically and your payment method is charged the applicable plan price. You will receive a reminder email at least two days before the trial expires. Cancel any time before the end of day seven from your account settings and you will not be charged.',
    ar: ' يحقّ للمشتركين الجدد الاستفادة من تجربة مجانية واحدة لمدة ٧ أيام عند أول خطة مدفوعة. وتتطلّب التجربة تسجيلاً كاملاً بطريقة دفع صالحة. وستحظى خلال فترة التجربة بصلاحية وصول كاملة إلى المنصة. وإذا لم تُلغِ قبل انتهاء التجربة، فستُفعَّل خطة الاشتراك التي اخترتها تلقائياً، وتُحتسَب على طريقة الدفع لديك قيمة الخطة المعمول بها. وستستلم بريداً إلكترونياً للتذكير قبل انقضاء التجربة بيومَين على الأقل. ويمكنك الإلغاء في أي وقت قبل نهاية اليوم السابع من إعدادات حسابك، ولن تتم محاسبتك.',
  },
  'terms.s4.p_demo_strong': { en: 'Pre-paywall demo.', ar: 'تجربة ما قبل جدار الدفع.' },
  'terms.s4.p_demo_text': {
    en: ' Separately from the trial, every registered account may use most premium features up to three times without providing payment details so you can evaluate the product before committing.',
    ar: ' بشكل مستقلّ عن التجربة، يُتاح لكل حساب مُسجَّل استخدام معظم الميزات المُتميّزة حتى ثلاث مرّات دون تقديم بيانات دفع، لتتمكّن من تقييم المنتج قبل الالتزام.',
  },
  'terms.s4.p_codes_strong': {
    en: 'Promotional and affiliate codes.',
    ar: 'الأكواد الترويجية وأكواد الشركاء.',
  },
  'terms.s4.p_codes_text_pre': {
    en: ' Affiliate codes and the public code',
    ar: ' تنطبق أكواد الشركاء والكود العام',
  },
  'terms.s4.p_codes_text_post': {
    en: " apply only to the Student Annual plan and reduce the first year's price to £20. Subsequent renewals are charged at the then-current standard annual rate (currently £29.99) unless a further valid code is applied at renewal. Affiliate codes cannot be combined, and cannot be applied retroactively to existing subscriptions.",
    ar: ' فقط على خطة الطالب السنوية، وتُخفِّض سعر السنة الأولى إلى £20. وتُحتسَب التجديدات اللاحقة بالسعر السنوي القياسي المعمول به آنذاك (£29.99 حالياً)، ما لم يتم تطبيق كود صالح آخر عند التجديد. ولا يمكن دمج أكواد الشركاء، ولا يمكن تطبيقها بأثر رجعي على الاشتراكات القائمة.',
  },
  'terms.s4.p_renewals': {
    en: "Subscriptions renew automatically at the end of each billing cycle unless cancelled. The renewal price will be the price in effect at the time of renewal. We will give you at least 14 days' notice of any price increase, and the new price will apply from your next renewal date after that notice period.",
    ar: 'تتجدّد الاشتراكات تلقائياً في نهاية كل دورة فوترة ما لم يتم إلغاؤها. وسيكون سعر التجديد هو السعر المعمول به وقت التجديد. وسنُخطرك قبل أيّ زيادة في السعر بمدة لا تقلّ عن ١٤ يوماً، ويُطبَّق السعر الجديد اعتباراً من تاريخ تجديدك التالي بعد فترة الإشعار تلك.',
  },
  'terms.s5.h2': { en: '5. One-Time Course Purchases', ar: '٥. عمليات الشراء لمرة واحدة للدورات' },
  'terms.s5.p1': {
    en: 'In addition to subscription plans, The English Hub may offer individual courses or resource packs available for one-time purchase. Once purchased, you will have ongoing access to the course content for as long as the course remains available on the platform. One-time purchases are separate from your subscription and are not affected by subscription cancellation.',
    ar: 'بالإضافة إلى خطط الاشتراك، قد يُقدّم The English Hub دورات فردية أو حزم موارد متاحة للشراء لمرة واحدة. وبعد الشراء، ستحظى بصلاحية وصول مستمر إلى محتوى الدورة طالما ظلّت الدورة متاحة على المنصة. وعمليات الشراء لمرة واحدة منفصلة عن اشتراكك، ولا تتأثر بإلغاء الاشتراك.',
  },
  'terms.s5.p2': {
    en: "We reserve the right to retire or substantially update course content. Where a purchased course is retired, we will provide at least 90 days' notice and ensure you can download any associated materials before removal.",
    ar: 'نحتفظ بالحق في إيقاف محتوى الدورات أو تحديثه تحديثاً جوهرياً. وعند إيقاف دورة مُشتراة، سنُخطرك بذلك قبل مدة لا تقلّ عن ٩٠ يوماً، ونضمن إمكانية تنزيلك لأي موادّ مُرتبطة بها قبل إزالتها.',
  },
  'terms.s6.h2': { en: '6. Payment Terms', ar: '٦. شروط الدفع' },
  'terms.s6.p1': {
    en: 'All payments are processed securely by Stripe, our third-party payment processor. We do not store your full payment card details on our servers. By providing your payment information, you authorise us to charge the applicable fees to your chosen payment method. All prices are quoted in British Pounds Sterling (GBP). Where VAT applies, it is included in the displayed price.',
    ar: 'تُعالَج جميع المدفوعات بأمان عبر Stripe، معالج المدفوعات التابع لطرف ثالث لدينا. ولا نُخزّن بيانات بطاقة الدفع الكاملة على خوادمنا. وبتقديمك معلومات الدفع، فإنك تُفوّضنا بتحصيل الرسوم المعمول بها من طريقة الدفع التي اخترتها. وجميع الأسعار مذكورة بالجنيه الإسترليني (GBP). وعندما تنطبق ضريبة القيمة المضافة، فإنها تكون مُدرَجة ضمن السعر المعروض.',
  },
  'terms.s6.p2': {
    en: 'If a payment fails, we will attempt to process it again and notify you by email. If payment remains unsuccessful after 7 days, we may suspend your access until the outstanding amount is resolved. You are responsible for ensuring your payment information is current and valid.',
    ar: 'إذا فشلت عملية الدفع، فسنُحاول معالجتها مرة أخرى وسنُخطرك بذلك عبر البريد الإلكتروني. وإذا ظلّ الدفع غير ناجح بعد ٧ أيام، فقد نُعلّق وصولك حتى تتم تسوية المبلغ المُستحقّ. وتقع عليك مسؤولية الحفاظ على معلومات دفعك مُحدّثة وصالحة.',
  },
  'terms.s7.h2': {
    en: '7. AI-Generated Content Disclaimer',
    ar: '٧. إخلاء المسؤولية عن المحتوى المُولَّد بالذكاء الاصطناعي',
  },
  'terms.s7.p1': {
    en: 'The English Hub uses artificial intelligence to provide automated feedback on essays, written responses, and other submissions. This AI-generated feedback is intended as a supplementary learning aid to help you identify areas for improvement and practise your writing skills. It does not constitute a professional academic assessment, a guaranteed prediction of exam performance, or a substitute for feedback from a qualified teacher.',
    ar: 'يستخدم The English Hub الذكاء الاصطناعي لتقديم ملاحظات آلية على المقالات والإجابات المكتوبة والتقديمات الأخرى. والملاحظات المُولَّدة بالذكاء الاصطناعي مُخصَّصة لتكون أداةً تعليمية تكميلية تُساعدك على تحديد مجالات التحسين والتدرّب على مهارات الكتابة. ولا تُشكّل تقييماً أكاديمياً مهنياً، ولا تنبؤاً مضموناً بأداء الامتحان، ولا بديلاً عن ملاحظات معلّم مؤهَّل.',
  },
  'terms.s7.p2': {
    en: 'While we work to ensure our AI tools are accurate and educationally valuable, automated feedback may occasionally contain errors, omissions, or suggestions that do not align with the marking criteria of a specific exam board. You should always use AI feedback in conjunction with guidance from your teachers and official exam board resources. We accept no liability for any reliance placed solely on AI-generated feedback.',
    ar: 'في حين نعمل على ضمان أن تكون أدوات الذكاء الاصطناعي لدينا دقيقةً وذات قيمة تعليمية، فإن الملاحظات الآلية قد تتضمّن أحياناً أخطاءً أو إغفالاتٍ أو اقتراحاتٍ لا تتماشى مع معايير التصحيح لبورد امتحان مُحدّد. ويجب عليك دائماً استخدام ملاحظات الذكاء الاصطناعي جنباً إلى جنب مع توجيهات معلّميك والموارد الرسمية لبورد الامتحان. ولا نتحمّل أي مسؤولية عن أي اعتماد يقتصر على الملاحظات المُولَّدة بالذكاء الاصطناعي وحدها.',
  },
  'terms.s8.h2': { en: '8. Acceptable Use', ar: '٨. الاستخدام المقبول' },
  'terms.s8.p_intro': {
    en: 'You agree to use The English Hub only for its intended educational purposes and in compliance with all applicable laws. You must not:',
    ar: 'توافق على استخدام The English Hub فقط للأغراض التعليمية المُخصّصة له، وبما يتوافق مع جميع القوانين المعمول بها. ولا يجوز لك:',
  },
  'terms.s8.li1': {
    en: 'Share your account credentials with others or allow another person to access the platform using your account.',
    ar: 'مشاركة بيانات اعتماد حسابك مع الآخرين، أو السماح لشخص آخر بالوصول إلى المنصة باستخدام حسابك.',
  },
  'terms.s8.li2': {
    en: 'Copy, reproduce, distribute, or publicly display any content from the platform without our prior written consent.',
    ar: 'نسخ أيّ محتوى من المنصة أو إعادة إنتاجه أو توزيعه أو عرضه علنياً دون موافقتنا الكتابية المُسبَقة.',
  },
  'terms.s8.li3': {
    en: 'Use the platform to engage in cheating, academic dishonesty, or any activity that undermines the integrity of educational assessments.',
    ar: 'استخدام المنصة للانخراط في الغشّ أو عدم النزاهة الأكاديمية أو أيّ نشاط يُقوّض نزاهة التقييمات التعليمية.',
  },
  'terms.s8.li4': {
    en: 'Submit content that is abusive, obscene, defamatory, discriminatory, or otherwise objectionable.',
    ar: 'تقديم محتوى مُسيء أو فاحش أو تشهيري أو تمييزي أو غير لائق بأيّ شكل آخر.',
  },
  'terms.s8.li5': {
    en: "Attempt to gain unauthorised access to any part of the platform, other users' accounts, or our systems and infrastructure.",
    ar: 'محاولة الوصول دون تصريح إلى أيّ جزء من المنصة أو إلى حسابات المستخدمين الآخرين أو إلى أنظمتنا وبنيتنا التحتية.',
  },
  'terms.s8.li6': {
    en: 'Use automated scripts, bots, or other tools to scrape content or interact with the platform in a manner not expressly permitted.',
    ar: 'استخدام نصوص برمجية آلية أو روبوتات أو أدوات أخرى لاستخراج المحتوى أو التفاعل مع المنصة بطريقة غير مُصرَّح بها صراحةً.',
  },
  'terms.s8.li7': {
    en: 'Interfere with or disrupt the operation of the platform, including through the introduction of viruses or malicious code.',
    ar: 'التدخّل في تشغيل المنصة أو تعطيله، بما في ذلك من خلال إدخال فيروسات أو شيفرات خبيثة.',
  },
  'terms.s8.p_outro': {
    en: 'We reserve the right to suspend or permanently terminate any account that breaches these acceptable use rules, without refund and without prior notice where the breach is serious.',
    ar: 'نحتفظ بالحق في تعليق أو إنهاء أيّ حساب يُخالف قواعد الاستخدام المقبول هذه نهائياً، دون استرداد وبدون إشعار مُسبَق متى ما كانت المخالفة جسيمة.',
  },
  'terms.s9.h2': { en: '9. Intellectual Property', ar: '٩. الملكية الفكرية' },
  'terms.s9.p1': {
    en: 'All content on The English Hub, including but not limited to courses, lessons, practice questions, mock exam papers, videos, graphics, software, and the design and layout of the platform, is owned by Upskill Energy Limited or its licensors and is protected by copyright, trademark, and other intellectual property laws of England and Wales and international treaties. You may not reproduce, modify, distribute, or create derivative works from any platform content without our express written permission.',
    ar: 'جميع المحتويات على The English Hub، بما في ذلك على سبيل المثال لا الحصر الدورات والدروس وأسئلة التدريب وأوراق الامتحانات التجريبية ومقاطع الفيديو والرسومات والبرامج وتصميم المنصة وتخطيطها، مملوكة لـ Upskill Energy Limited أو لمُرخّصيها، وهي محمية بموجب قوانين حقوق المؤلف والعلامات التجارية وغيرها من قوانين الملكية الفكرية في إنجلترا وويلز والمعاهدات الدولية. ولا يجوز لك إعادة إنتاج أيّ محتوى للمنصة أو تعديله أو توزيعه أو إنشاء أعمال مُشتَقّة منه دون إذن كتابي صريح منا.',
  },
  'terms.s9.p2': {
    en: 'You retain all intellectual property rights in the essays, written responses, and other original content you submit through the platform ("User Content"). By submitting User Content, you grant us a non-exclusive, royalty-free, worldwide licence to use, store, and process your submissions solely for the purposes of providing the Service, including generating AI feedback and improving our educational tools. We will not publish or share your User Content with third parties without your consent, except in anonymised and aggregated form for research and platform improvement purposes.',
    ar: 'تحتفظ بجميع حقوق الملكية الفكرية في المقالات والإجابات المكتوبة وغيرها من المحتوى الأصلي الذي تُقدّمه عبر المنصة ("محتوى المستخدم"). وبتقديم محتوى المستخدم، فإنك تَمنحنا ترخيصاً غير حصري وخالياً من الإتاوات على نطاق عالمي لاستخدام تقديماتك وتخزينها ومعالجتها، فقط لأغراض تقديم الخدمة، بما في ذلك توليد ملاحظات الذكاء الاصطناعي وتحسين أدواتنا التعليمية. ولن ننشر محتوى المستخدم الخاصّ بك أو نُشاركه مع أطراف ثالثة دون موافقتك، باستثناء الصيغة المُجهَّلة والمُجمَّعة لأغراض البحث وتحسين المنصة.',
  },
  'terms.s10.h2': { en: '10. Cancellation and Refunds', ar: '١٠. الإلغاء واسترداد الأموال' },
  'terms.s10.p1': {
    en: 'You may cancel your subscription at any time through your account settings or by contacting us at info@Upskillenergy.com. Upon cancellation, you will retain access to the platform until the end of your current billing period. No further charges will be made after cancellation takes effect.',
    ar: 'يمكنك إلغاء اشتراكك في أي وقت من خلال إعدادات حسابك أو بالتواصل معنا على info@Upskillenergy.com. وعند الإلغاء، ستحتفظ بصلاحية الوصول إلى المنصة حتى نهاية فترة الفوترة الحالية. ولن تُسحب أي رسوم إضافية بعد سَريان مفعول الإلغاء.',
  },
  'terms.s10.p2': {
    en: 'In accordance with the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have the right to cancel a new subscription or one-time purchase within 14 days of the date of purchase for a full refund, provided you have not substantially used the Service during that period. Where you have used the Service during the 14-day cancellation period, we may deduct a proportionate amount reflecting the services already provided.',
    ar: 'وفقاً للائحة عقود المستهلكين (المعلومات والإلغاء والرسوم الإضافية) لعام ٢٠١٣، يحقّ لك إلغاء اشتراك جديد أو شراء لمرة واحدة خلال ١٤ يوماً من تاريخ الشراء واسترداد المبلغ كاملاً، بشرط ألّا تكون قد استخدمت الخدمة استخداماً جوهرياً خلال تلك الفترة. وعند استخدامك الخدمة خلال فترة الإلغاء البالغة ١٤ يوماً، قد نَخصم مبلغاً تناسبياً يعكس الخدمات المُقدَّمة بالفعل.',
  },
  'terms.s10.p3': {
    en: 'For subscriptions cancelled after the 14-day statutory cancellation period, we offer a pro-rated refund for the unused portion of the current billing cycle if you request a refund within 14 days of your most recent renewal date. Refund requests made more than 14 days after the renewal date will not be eligible for a refund, though your access will continue until the end of the billing period.',
    ar: 'بالنسبة للاشتراكات المُلغاة بعد فترة الإلغاء القانونية البالغة ١٤ يوماً، نُقدّم استرداداً تناسبياً عن الجزء غير المُستخدَم من دورة الفوترة الحالية إذا طلبت الاسترداد خلال ١٤ يوماً من أحدث تاريخ تجديد. ولن تكون طلبات الاسترداد المُقدَّمة بعد مرور أكثر من ١٤ يوماً على تاريخ التجديد مُؤهَّلة للاسترداد، إلا أن صلاحية وصولك ستستمرّ حتى نهاية فترة الفوترة.',
  },
  'terms.s10.p4': {
    en: 'If your free trial converts to a paid subscription and you did not intend to continue, please contact us within 14 days of the first charge and we will issue a full refund. Refunds are processed to the original payment method and typically take 5 to 10 business days to appear.',
    ar: 'إذا تحوّلت تجربتك المجانية إلى اشتراك مدفوع ولم تكن تعتزم الاستمرار، فيُرجى التواصل معنا خلال ١٤ يوماً من أول دفعة، وسنُصدر استرداداً كاملاً. وتتم معالجة المبالغ المُستردَّة إلى طريقة الدفع الأصلية، وعادةً ما يستغرق ظهورها من ٥ إلى ١٠ أيام عمل.',
  },
  'terms.s11.h2': { en: '11. Limitation of Liability', ar: '١١. تحديد المسؤولية' },
  'terms.s11.p1': {
    en: 'To the fullest extent permitted by law, Upskill Energy Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service, including but not limited to loss of data, loss of academic opportunity, or reliance on AI-generated feedback.',
    ar: 'إلى أقصى حدّ يسمح به القانون، لا تتحمّل Upskill Energy Limited المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تَبَعية أو عقابية تنشأ عن أو فيما يتعلّق باستخدامك للخدمة، بما في ذلك على سبيل المثال لا الحصر فقدان البيانات، أو فوات فرصة أكاديمية، أو الاعتماد على الملاحظات المُولَّدة بالذكاء الاصطناعي.',
  },
  'terms.s11.p2': {
    en: 'Our total aggregate liability to you for any claims arising under or in connection with these Terms shall not exceed the total amount you have paid to us in the 12 months immediately preceding the event giving rise to the claim.',
    ar: 'لا تتجاوز مسؤوليتنا الإجمالية الكلية تجاهك عن أي مطالبات تنشأ بموجب هذه الشروط أو فيما يتعلّق بها مجموع المبلغ الذي دفعته لنا خلال الـ١٢ شهراً السابقة مباشرةً للحدث الذي أدّى إلى المطالبة.',
  },
  'terms.s11.p3': {
    en: 'Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under the laws of England and Wales. Your statutory rights as a consumer are not affected by these Terms.',
    ar: 'لا يستثني أيّ بند في هذه الشروط أو يَحدّ من مسؤوليتنا عن الوفاة أو الإصابة الشخصية الناجمة عن إهمالنا، أو عن الاحتيال أو التحريف الاحتيالي، أو عن أيّ مسؤولية أخرى لا يمكن استثناؤها أو الحدّ منها بموجب قوانين إنجلترا وويلز. ولا تتأثّر حقوقك القانونية كمستهلك بهذه الشروط.',
  },
  'terms.s11.p4': {
    en: 'We provide the Service on an "as is" and "as available" basis. While we endeavour to ensure the platform is reliable and available, we do not guarantee uninterrupted or error-free access. We may carry out scheduled maintenance from time to time and will aim to provide reasonable notice of any planned downtime.',
    ar: 'نُقدّم الخدمة على أساس "كما هي" و"كما تتوفّر". وفي حين نسعى لضمان أن تكون المنصة موثوقة ومُتاحة، فإننا لا نضمن وصولاً متواصلاً أو خالياً من الأخطاء. وقد نُجري عمليات صيانة مُجدوَلة من وقت لآخر، وسنحرص على تقديم إشعار معقول بشأن أيّ توقّفات مُخطّط لها.',
  },
  'terms.s12.h2': { en: '12. Governing Law', ar: '١٢. القانون المنظِّم' },
  'terms.s12.p': {
    en: 'These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, without prejudice to your right as a consumer to bring proceedings in the courts of your country of residence within the United Kingdom.',
    ar: 'تَخضع هذه الشروط لقوانين إنجلترا وويلز وتُفسَّر وفقاً لها. وتخضع أيّ نزاعات تنشأ بموجب هذه الشروط أو فيما يتعلّق بها للاختصاص القضائي الحصري لمحاكم إنجلترا وويلز، دون المساس بحقك كمستهلك في إقامة الدعاوى أمام محاكم بلد إقامتك داخل المملكة المتحدة.',
  },
  'terms.s13.h2': { en: '13. Dispute Resolution', ar: '١٣. تسوية المنازعات' },
  'terms.s13.p1': {
    en: 'If you have a complaint or dispute regarding the Service, we encourage you to contact us first at info@Upskillenergy.com so that we can attempt to resolve the matter informally. We will acknowledge your complaint within 5 business days and aim to provide a substantive response within 14 business days.',
    ar: 'إذا كان لديك شكوى أو نزاع بشأن الخدمة، فنُشجّعك على التواصل معنا أولاً على info@Upskillenergy.com حتى نتمكّن من محاولة تسوية الأمر ودياً. وسنُقرّ باستلام شكواك خلال ٥ أيام عمل، ونسعى لتقديم ردّ موضوعي خلال ١٤ يوم عمل.',
  },
  'terms.s13.p2': {
    en: 'If we are unable to resolve your complaint to your satisfaction, you may refer the dispute to an alternative dispute resolution (ADR) provider. For UK consumers, you may also use the Online Dispute Resolution (ODR) platform provided by the European Commission (where applicable) or contact Citizens Advice for guidance on your consumer rights.',
    ar: 'إذا تعذّر علينا تسوية شكواك بما يُرضيك، فيمكنك إحالة النزاع إلى جهة لتسوية المنازعات بالطرق البديلة (ADR). وبالنسبة للمستهلكين في المملكة المتحدة، يمكنك أيضاً استخدام منصة تسوية المنازعات عبر الإنترنت (ODR) التي تُوفّرها المفوضية الأوروبية (حيثما ينطبق ذلك)، أو الاتصال بهيئة Citizens Advice للحصول على إرشادات بشأن حقوقك كمستهلك.',
  },
  'terms.s14.h2': { en: '14. Changes to These Terms', ar: '١٤. التعديلات على هذه الشروط' },
  'terms.s14.p1': {
    en: 'We may update these Terms from time to time to reflect changes to our Service, legal requirements, or business practices. Where we make material changes, we will notify you by email and/or by displaying a prominent notice on the platform at least 30 days before the changes take effect. The "Last updated" date at the top of this page will be revised accordingly.',
    ar: 'قد نُحدّث هذه الشروط من وقت لآخر لتعكس التغييرات في خدمتنا أو في المتطلبات القانونية أو في الممارسات التجارية. وعند إجراء تغييرات جوهرية، سنُخطرك عبر البريد الإلكتروني و/أو بعرض إشعار بارز على المنصة قبل ما لا يقلّ عن ٣٠ يوماً من سَريان مفعول التغييرات. وسيتم تحديث تاريخ "آخر تحديث" في أعلى هذه الصفحة وفقاً لذلك.',
  },
  'terms.s14.p2': {
    en: 'Your continued use of the Service after the updated Terms come into effect constitutes your acceptance of the revised Terms. If you do not agree with any changes, you should stop using the Service and cancel your subscription before the new Terms take effect.',
    ar: 'يُشكّل استمرار استخدامك للخدمة بعد سَريان مفعول الشروط المُحدَّثة قبولَك للشروط المُعدَّلة. وإذا لم توافق على أي تغييرات، فينبغي عليك التوقّف عن استخدام الخدمة وإلغاء اشتراكك قبل سَريان مفعول الشروط الجديدة.',
  },
  'terms.s15.h2': { en: '15. Contact Us', ar: '١٥. تواصل معنا' },
  'terms.s15.p1': {
    en: 'If you have any questions about these Terms of Service, please contact us at:',
    ar: 'إذا كانت لديك أي أسئلة بشأن شروط الخدمة هذه، فيُرجى التواصل معنا على:',
  },
  'terms.s15.p2_l1': {
    en: 'Upskill Energy Limited, trading as The English Hub',
    ar: 'Upskill Energy Limited، تحت الاسم التجاري The English Hub',
  },
  'terms.s15.p2_l2': {
    en: 'Email: info@Upskillenergy.com',
    ar: 'البريد الإلكتروني: info@Upskillenergy.com',
  },

  // ─── Trustpilot widget chrome ───────────────────────────────────────
  // Brand name "Trustpilot" stays Latin even within Arabic copy — it is
  // a trademarked product label, not translatable content. See ARIA in
  // TrustBox.tsx and TrustpilotReviewLink.tsx.
  'trustpilot.read_reviews': {
    en: 'Read our reviews on Trustpilot',
    ar: 'اقرا تقييماتنا على Trustpilot',
  },
  'trustpilot.brand': { en: 'Trustpilot', ar: 'Trustpilot' },

  // ─── UI: error banner ───────────────────────────────────────────────
  'ui.error.retry': { en: 'Retry', ar: 'جرّب مرة ثانية' },
  'ui.error.dismiss': { en: 'Dismiss error', ar: 'سكّر الخطأ' },

  // ─── UI: learning tip categories + a11y ────────────────────────────
  'ui.learning_tip.label.study': { en: 'Study Tip', ar: 'نصيحة مذاكرة' },
  'ui.learning_tip.label.exam': { en: 'Exam Tip', ar: 'نصيحة امتحان' },
  'ui.learning_tip.label.grade': { en: 'Grade Insight', ar: 'ملاحظة على الدرجة' },
  'ui.learning_tip.label.motivation': { en: 'Motivation', ar: 'تحفيز' },
  'ui.learning_tip.label.resource': { en: 'Resource Tip', ar: 'نصيحة موارد' },
  'ui.learning_tip.label.progress': { en: 'Progress Insight', ar: 'ملاحظة على التقدم' },
  'ui.learning_tip.label.course': { en: 'Course Tip', ar: 'نصيحة كورس' },
  'ui.learning_tip.label.practice': { en: 'Practice Tip', ar: 'نصيحة تدريب' },
  'ui.learning_tip.label.fallback': { en: 'Tip', ar: 'نصيحة' },
  'ui.learning_tip.aria_label': {
    en: 'hover for a helpful tip',
    ar: 'حُط الماوس فوقها عشان تشوف نصيحة مفيدة',
  },

  // ─── UI: modal chrome ──────────────────────────────────────────────
  'ui.modal.close': { en: 'Close', ar: 'سكّر' },

  // ─── UI: toast chrome ──────────────────────────────────────────────
  'ui.toast.dismiss': { en: 'Dismiss notification', ar: 'سكّر الإشعار' },
  'ui.toast.region_label': { en: 'Notifications', ar: 'الإشعارات' },

  // ─── UI: toggle a11y ───────────────────────────────────────────────
  // Toggle.tsx takes label + description as props — these keys cover
  // future internal a11y additions and anchor the namespace.
  'ui.toggle.on': { en: 'On', ar: 'مفعّل' },
  'ui.toggle.off': { en: 'Off', ar: 'مغلق' },

  // ─── UI: presentation style selector ───────────────────────────────
  'ui.style.aria_label': { en: 'Presentation style', ar: 'ستايل العرض' },
  'ui.style.cream': { en: 'Cream', ar: 'كريمي' },
  'ui.style.dark': { en: 'Dark', ar: 'غامق' },
  'ui.style.whiteboard': { en: 'Whiteboard', ar: 'سبّورة بيضاء' },
  'ui.style.option_aria_label.cream': { en: 'Cream style', ar: 'ستايل كريمي' },
  'ui.style.option_aria_label.dark': { en: 'Dark style', ar: 'ستايل غامق' },
  'ui.style.option_aria_label.whiteboard': {
    en: 'Whiteboard style',
    ar: 'ستايل سبّورة بيضاء',
  },

  // ─── SEO: WebsiteJsonLd offers + description ───────────────────────
  // These keys feed into the schema.org JSON-LD that search engines
  // ingest. Brand + technical terms (GCSE, IGCSE, KS3, The English Hub)
  // stay Latin even inside Arabic, per dictionary policy.
  'seo.site.description': {
    en: 'Professional KS3, GCSE, and IGCSE English tutoring platform with structured courses, exam-style practice, and AI-powered feedback.',
    ar: 'منصّة تدريس اللغة الإنجليزية المحترفة لمستويات KS3 وGCSE وIGCSE، فيها كورسات مرتّبة وتدريب على أسلوب الامتحان وتغذية راجعة بالذكاء الاصطناعي.',
  },
  'seo.offer.student_monthly': {
    en: 'Student Monthly Plan',
    ar: 'باقة الطالب الشهرية',
  },
  'seo.offer.student_annual': {
    en: 'Student Annual Plan',
    ar: 'باقة الطالب السنوية',
  },
  'seo.offer.teacher_monthly': {
    en: 'Teacher Monthly Plan',
    ar: 'باقة المعلم الشهرية',
  },
  'seo.offer.teacher_annual': {
    en: 'Teacher Annual Plan',
    ar: 'باقة المعلم السنوية',
  },

  // ─── Learn flow — course player + assessment ────────────────────────
  // Used by src/app/learn/[courseId]/[moduleId]/client-page.tsx and
  // src/app/learn/[courseId]/assessment/client-page.tsx.
  //
  // GENDER POLICY: binary M/F. The student is addressed as either M or F
  // depending on context; default voice is M (most common case). F
  // variants live under `*.f` keys for the small set of strings where
  // the addressee verb genuinely differs (e.g. حصّلت / حصّلتي). Neutral
  // imperatives use Gulf verb forms that read naturally for both
  // genders (شوف, دوّر, روح, خلّص).

  // Course shell — sidebar, header, breadcrumb
  'learn.sidebar.modules_count': {
    en: '{completed} / {total} modules',
    ar: '{completed} / {total} وحدات',
  },
  'learn.sidebar.percent_complete': { en: '{percent}% complete', ar: '{percent}% خَلَصت' },
  'learn.sidebar.final_assessment': { en: 'Final Assessment', ar: 'الاختبار النهائي' },
  'learn.sidebar.open_nav': { en: 'Open navigation', ar: 'افتح القائمة' },
  'learn.sidebar.close_nav': { en: 'Close navigation', ar: 'سكّر القائمة' },
  'learn.breadcrumb.module_n': { en: 'Module {n}', ar: 'الوحدة {n}' },
  'learn.header.modules_progress': {
    en: '{completed}/{total} complete',
    ar: '{completed}/{total} خَلَصت',
  },

  // Module body
  'learn.module.label': { en: 'Module {current} of {total}', ar: 'الوحدة {current} من {total}' },
  'learn.module.completed_badge': { en: 'Completed', ar: 'خَلَصت' },
  'learn.module.completed_card.title': { en: 'Module Completed', ar: 'خَلَصت الوحدة' },
  'learn.module.completed_card.body': {
    en: 'Your progress has been saved.',
    ar: 'انحفظ تقدّمك.',
  },
  'learn.module.btn.complete': { en: 'Complete Module', ar: 'سكّر الوحدة' },
  'learn.module.btn.saving': { en: 'Saving progress…', ar: 'لحظة، يحفظ تقدّمك…' },
  'learn.module.btn.signin_required': {
    en: 'Sign in to save progress',
    ar: 'ادخل حسابك عشان نحفظ لك تقدّمك',
  },
  'learn.module.btn.quiz_required': {
    en: 'Complete the quiz to finish this module',
    ar: 'خلّص الكويز عشان تسكّر الوحدة',
  },
  'learn.module.nav.prev_label': { en: 'Previous:', ar: 'السابق:' },
  'learn.module.nav.next_label': { en: 'Next:', ar: 'التالي:' },
  'learn.module.nav.take_assessment': {
    en: 'Take Final Assessment',
    ar: 'سوِّ الاختبار النهائي',
  },

  // Preview CTA shown on free module to non-pro users
  'learn.preview.cta.title': {
    en: 'Enjoying this? Start a 7-day free trial for full access.',
    ar: 'عاجبك المحتوى؟ ابدأ تجربة ٧ أيام ببلاش ووصول كامل.',
  },
  'learn.preview.cta.body': {
    en: 'Unlock all {count} modules in this course, plus every course on the platform.',
    ar: 'فُك كل {count} وحدات في هذه الدورة، وكل دورة على المنصّة.',
  },
  'learn.preview.cta.start_trial': { en: 'Start Free Trial', ar: 'ابدأ التجربة ببلاش' },
  'learn.preview.cta.view_course': { en: 'View Full Course', ar: 'شوف الدورة كاملة' },

  // Access gate — locked module
  'learn.gate.locked.title': { en: 'Upgrade to Continue', ar: 'رقِّ اشتراكك عشان تكمّل' },
  'learn.gate.locked.body': {
    en: 'This module requires a subscription. Try the free preview first, or subscribe to unlock all content.',
    ar: 'هذه الوحدة تحتاج اشتراك. جرّب الديمو ببلاش الأول، أو اشترك عشان تفك كل المحتوى.',
  },
  'learn.gate.locked.view_course': { en: 'View Course', ar: 'شوف الدورة' },
  'learn.gate.locked.subscribe': { en: 'Subscribe', ar: 'اشترك' },

  // Wrong-board fallback (shared shape with other learn pages)
  'learn.board.unavailable.title': { en: 'Course not available', ar: 'الدورة مو متوفّرة' },
  'learn.board.unavailable.body': {
    en: 'This course is for the {board} exam board.',
    ar: 'هذه الدورة لبورد الامتحان {board}.',
  },
  'learn.board.unavailable.browse': { en: 'Browse your courses', ar: 'شوف دوراتك' },

  // ─── Quiz (knowledge check inside a module) ─────────────────────────
  'learn.quiz.section.title': { en: 'Knowledge Check', ar: 'اختبار المعرفة' },
  'learn.quiz.section.body': {
    en: 'Test your understanding of this module.',
    ar: 'اختبر فهمك للوحدة.',
  },
  'learn.quiz.question_label': {
    en: 'Question {current} of {total}',
    ar: 'السؤال {current} من {total}',
  },
  'learn.quiz.result.correct': { en: 'Correct!', ar: 'صحّ!' },
  'learn.quiz.result.incorrect': { en: 'Incorrect', ar: 'غلط' },
  'learn.quiz.btn.check': { en: 'Check Answer', ar: 'تأكّد من الجواب' },
  'learn.quiz.explanation_prefix': { en: 'Explanation: ', ar: 'الشرح: ' },
  'learn.quiz.score.summary': { en: '{score}/{total}', ar: '{score}/{total}' },
  'learn.quiz.score.perfect': {
    en: 'Perfect score! Excellent work.',
    ar: 'علامة كاملة! شغل ممتاز.',
  },
  'learn.quiz.score.great': {
    en: 'Great job! You have a solid understanding.',
    ar: 'برافو عليك! فهمك قوي.',
  },
  'learn.quiz.score.review': {
    en: 'Review the material and try again to strengthen your understanding.',
    ar: 'راجع المادة وجرّب مرة ثانية عشان تقوّي فهمك.',
  },

  // ─── Lesson surface (reserved for future lesson-level views) ────────
  // Today the module body IS the lesson; these keys are reserved so a
  // dedicated lesson view (e.g. /learn/.../lesson/[n]) can share copy.
  'learn.lesson.label': { en: 'Lesson {current} of {total}', ar: 'الدرس {current} من {total}' },
  'learn.lesson.duration_aria': { en: 'Lesson duration', ar: 'مدة الدرس' },
  'learn.lesson.continue': { en: 'Continue lesson', ar: 'كمّل الدرس' },
  'learn.lesson.restart': { en: 'Restart lesson', ar: 'ابدأ الدرس من جديد' },
  'learn.lesson.mark_complete': { en: 'Mark lesson complete', ar: 'علِّم الدرس كمكتمل' },
  'learn.lesson.next': { en: 'Next lesson', ar: 'الدرس التالي' },
  'learn.lesson.prev': { en: 'Previous lesson', ar: 'الدرس السابق' },

  // ─── Final assessment ───────────────────────────────────────────────
  'learn.assessment.access.title': { en: 'Course Access Required', ar: 'تحتاج وصول للدورة' },
  'learn.assessment.access.body': {
    en: 'You need to purchase this course or subscribe to Premium to access this content.',
    ar: 'لازم تشتري الدورة أو تشترك في Premium عشان توصل لهذا المحتوى.',
  },
  'learn.assessment.access.view_course': { en: 'View Course', ar: 'شوف الدورة' },
  'learn.assessment.access.subscribe': { en: 'Subscribe', ar: 'اشترك' },

  'learn.assessment.intro.title': { en: 'Final Assessment', ar: 'الاختبار النهائي' },
  'learn.assessment.intro.questions': { en: 'Questions', ar: 'الأسئلة' },
  'learn.assessment.intro.time_limit': { en: 'Time Limit', ar: 'الوقت' },
  'learn.assessment.intro.time_value': { en: '30 minutes', ar: '٣٠ دقيقة' },
  'learn.assessment.intro.pass_mark': { en: 'Pass Mark', ar: 'علامة النجاح' },
  'learn.assessment.intro.pass_value': { en: '50%', ar: '٥٠٪' },
  'learn.assessment.intro.grading_label': { en: 'Grading (GCSE 1-9)', ar: 'التقدير (GCSE ١-٩)' },
  'learn.assessment.intro.grade_band.low': {
    en: 'Grade 4-5: 40-59%',
    ar: 'Grade 4-5: ٤٠-٥٩٪',
  },
  'learn.assessment.intro.grade_band.mid': {
    en: 'Grade 6-7: 60-79%',
    ar: 'Grade 6-7: ٦٠-٧٩٪',
  },
  'learn.assessment.intro.grade_band.high': {
    en: 'Grade 8-9: 80%+',
    ar: 'Grade 8-9: ٨٠٪+',
  },
  'learn.assessment.intro.no_questions': {
    en: 'No quiz questions available for this course.',
    ar: 'ما في أسئلة كويز متوفّرة لهذه الدورة.',
  },
  'learn.assessment.intro.start': { en: 'Start Assessment', ar: 'ابدأ الاختبار' },
  'learn.assessment.intro.signin_required': {
    en: 'Sign in to take assessment',
    ar: 'ادخل حسابك عشان تسوّي الاختبار',
  },
  'learn.assessment.intro.back': { en: 'Back to Course', ar: 'رجوع للدورة' },

  // Active phase
  'learn.assessment.active.question_label': {
    en: 'Question {current} of {total}',
    ar: 'السؤال {current} من {total}',
  },
  'learn.assessment.active.from': { en: 'From: {moduleTitle}', ar: 'من: {moduleTitle}' },
  'learn.assessment.active.prev': { en: 'Previous', ar: 'السابق' },
  'learn.assessment.active.next': { en: 'Next', ar: 'التالي' },
  'learn.assessment.active.submit': { en: 'Submit Assessment', ar: 'أرسل الاختبار' },
  'learn.assessment.active.submitting': { en: 'Submitting…', ar: 'لحظة، يرسل…' },
  'learn.assessment.active.answered_count': {
    en: '{answered} of {total} answered',
    ar: 'جاوبت {answered} من {total}',
  },
  'learn.assessment.active.confirm_unanswered': {
    en: 'You have {n} unanswered question(s). Submit anyway?',
    ar: 'باقي عندك {n} أسئلة ما جاوبت عليها. ترسل برضو؟',
  },

  // Results — generic
  'learn.assessment.result.passed_title': { en: 'Congratulations!', ar: 'مبروك!' },
  'learn.assessment.result.failed_title': { en: 'Assessment Complete', ar: 'الاختبار خَلَص' },
  'learn.assessment.result.passed_body': {
    en: 'You achieved {grade}! Well done.',
    ar: 'حصّلت {grade}! برافو عليك.',
  },
  // Gendered variant — F. Used when profile.gender === 'f'.
  'learn.assessment.result.passed_body.f': {
    en: 'You achieved {grade}! Well done.',
    ar: 'حصّلتي {grade}! برافو عليكِ.',
  },
  'learn.assessment.result.failed_body': {
    en: 'You did not meet the pass mark. Review the modules and try again.',
    ar: 'ما وصلت لعلامة النجاح. راجع الوحدات وجرّب مرة ثانية.',
  },
  'learn.assessment.result.failed_body.f': {
    en: 'You did not meet the pass mark. Review the modules and try again.',
    ar: 'ما وصلتي لعلامة النجاح. راجعي الوحدات وجرّبي مرة ثانية.',
  },
  'learn.assessment.result.grade_n': { en: 'Grade {n}', ar: 'Grade {n}' },
  'learn.assessment.result.grade_label': { en: 'Grade', ar: 'التقدير' },
  'learn.assessment.result.score_line': {
    en: '{score} correct out of {total} questions',
    ar: '{score} صحيحة من أصل {total} سؤال',
  },
  'learn.assessment.result.save_error': {
    en: 'Your results were calculated but could not be saved. Please try again.',
    ar: 'انحسبت نتائجك بس ما قدرنا نحفظها. جرّب مرة ثانية لو سمحت.',
  },

  // Results — breakdown
  'learn.assessment.breakdown.title': { en: 'Question Breakdown', ar: 'تفصيل الأسئلة' },
  'learn.assessment.breakdown.your_answer': { en: 'Your answer: ', ar: 'جوابك: ' },
  'learn.assessment.breakdown.correct_answer': { en: 'Correct: ', ar: 'الصحّ: ' },
  'learn.assessment.breakdown.not_answered': { en: 'Not answered', ar: 'ما جاوبت' },

  // Results — actions
  'learn.assessment.actions.view_cert': { en: 'View Certificate', ar: 'شوف الشهادة' },
  'learn.assessment.actions.try_again': { en: 'Try Again', ar: 'جرّب مرة ثانية' },
  'learn.assessment.actions.back_to_course': { en: 'Back to Course', ar: 'رجوع للدورة' },

  // ─── IGCSE shared chrome (igcse.*) ──────────────────────────────────
  // Board names, paper codes, AO codes stay in Latin script even inside
  // the Arabic strings (Khaleeji + UK exam-board convention).
  'igcse.label': { en: 'IGCSE', ar: 'IGCSE' },
  'igcse.intl_gcse': { en: 'International GCSE', ar: 'International GCSE' },
  'igcse.choose_course': { en: 'Choose your course', ar: 'اختر المسار مالك' },
  // Alias used by /igcse hub page (matches the existing tMany batch).
  'igcse.choose_course_h2': { en: 'Choose your course', ar: 'اختر المسار مالك' },
  'igcse.start_studying': { en: 'Start studying', ar: 'ابدأ المذاكرة' },
  'igcse.start_studying_cta': { en: 'Start studying', ar: 'ابدأ المذاكرة' },
  'igcse.back_to_igcse': { en: 'Back to IGCSE', ar: 'رجوع لـ IGCSE' },
  'igcse.back_to_all_boards': { en: 'All exam boards', ar: 'كل البوردات' },
  // Breadcrumb labels for the IGCSE hub.
  'igcse.crumb.home': { en: 'Home', ar: 'الرئيسية' },
  'igcse.crumb.self': { en: 'IGCSE', ar: 'IGCSE' },
  // Hero badges and headline used on /igcse hub.
  'igcse.badge.international': { en: 'International GCSE', ar: 'International GCSE' },
  'igcse.badge.lit_lang': { en: 'Literature & Language', ar: 'الأدب واللغة' },
  'igcse.h1': {
    en: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
    ar: 'مراجعة IGCSE English — مناهج Pearson Edexcel وCambridge كلها معانا',
  },
  'igcse.lead': {
    en: 'Choose your course to access full study guides, text analysis, exam technique and past paper resources.',
    ar: 'اختر مسارك عشان توصل لدليل مذاكرة كامل، وتحليل النصوص، وأسلوب الامتحان، وأوراق امتحانات سابقة.',
  },
  'igcse.footnote': {
    en: 'Content aligned with Pearson Edexcel and Cambridge Assessment syllabuses',
    ar: 'المحتوى متوافق مع مناهج Pearson Edexcel وCambridge Assessment.',
  },
  'igcse.hub_title': {
    en: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
    ar: 'مراجعة IGCSE English — مناهج Pearson Edexcel وCambridge كلها معانا',
  },
  'igcse.hub_lead': {
    en: 'Choose your course to access full study guides, text analysis, exam technique and past paper resources.',
    ar: 'اختر مسارك عشان توصل لدليل مذاكرة كامل، وتحليل النصوص، وأسلوب الامتحان، وأوراق امتحانات سابقة.',
  },
  'igcse.lit_literature': { en: 'Literature & Language', ar: 'الأدب واللغة' },
  'igcse.course.literature.name': { en: 'IGCSE Literature', ar: 'IGCSE Literature' },
  'igcse.course.literature.desc': {
    en: 'Poetry, prose, drama & Shakespeare',
    ar: 'الشعر، النثر، الدراما، وشكسبير',
  },
  'igcse.course.language_a.name': { en: 'IGCSE Language A', ar: 'IGCSE Language A' },
  'igcse.course.language_a.desc': {
    en: 'Reading, writing & comprehension (First Language English)',
    ar: 'القراءة والكتابة والاستيعاب (English أول لغة)',
  },
  'igcse.course.language_b.name': { en: 'IGCSE Language B', ar: 'IGCSE Language B' },
  'igcse.course.language_b.desc': {
    en: 'Reading & writing for all English learners (9-1 grading)',
    ar: 'القراءة والكتابة لكل طلاب الإنجليزي (تقييم 9-1)',
  },
  'igcse.footnote_align': {
    en: 'Content aligned with Pearson Edexcel and Cambridge Assessment syllabuses',
    ar: 'المحتوى متوافق مع مناهج Pearson Edexcel وCambridge Assessment.',
  },

  // Shared section / badge labels reused across board hubs.
  'igcse.section.set_texts': { en: 'Set Texts', ar: 'النصوص المقرَّرة' },
  'igcse.section.shared_skills': { en: 'Skills & Practice', ar: 'المهارات والتدريب' },
  'igcse.section.study_tools': { en: 'Study Tools', ar: 'أدوات المذاكرة' },
  'igcse.section.quick_links': { en: 'Quick Links', ar: 'روابط سريعة' },
  'igcse.section.exam_resources': { en: 'Exam Resources', ar: 'موارد الامتحان' },
  'igcse.badge.available_now': { en: 'Available now', ar: 'متاح الحين' },
  'igcse.papers.count_2': { en: '2 papers', ar: 'ورقتين امتحان' },

  // Study-tool tiles (shared across Cambridge / Edexcel hubs).
  'igcse.tool.ai_marking.title': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقال بالذكاء الاصطناعي',
  },
  'igcse.tool.ai_marking.desc': {
    en: 'Submit an essay for AI feedback',
    ar: 'أرسل مقالك وخذ ملاحظات من الذكاء الاصطناعي',
  },
  'igcse.tool.quiz.title': { en: 'Quiz', ar: 'كويز' },
  'igcse.tool.quiz.desc': {
    en: 'Test yourself with IGCSE questions',
    ar: 'اختبر نفسك بأسئلة IGCSE',
  },
  'igcse.tool.flashcards.title': { en: 'Flashcards', ar: 'بطاقات مراجعة' },
  'igcse.tool.flashcards.desc': {
    en: 'Spaced repetition revision',
    ar: 'مراجعة بالتكرار المتباعد',
  },
  'igcse.tool.games.title': { en: 'Games', ar: 'ألعاب' },
  'igcse.tool.games.desc': { en: '7 GCSE-grade games', ar: '٧ ألعاب بمستوى GCSE' },
  'igcse.tool.toolkit.title': { en: 'AI Toolkit', ar: 'صندوق أدوات AI' },
  'igcse.tool.toolkit.desc': {
    en: 'AI test builder and revision notes',
    ar: 'باني اختبارات بالذكاء الاصطناعي وملاحظات مراجعة',
  },

  // ─── Cambridge IGCSE hub (igcse.cambridge.*) ────────────────────────
  'igcse.cambridge.hero_badge_intl': {
    en: 'Cambridge International',
    ar: 'Cambridge International',
  },
  'igcse.cambridge.hero_badge_fle': {
    en: 'First Language English',
    ar: 'First Language English',
  },
  'igcse.cambridge.hero_title': {
    en: 'Cambridge IGCSE English',
    ar: 'Cambridge IGCSE English',
  },
  'igcse.cambridge.hero_lead': {
    en: "Cambridge First Language English is the world's largest international English qualification. Pick your course below to access full study guides, paper walkthroughs and past paper practice.",
    ar: 'Cambridge First Language English هو أكبر مؤهّل دولي للإنجليزي في العالم. اختر مسارك من تحت عشان توصل لدليل مذاكرة كامل، وشرح الأوراق، وتدريب على الامتحانات السابقة.',
  },
  'igcse.cambridge.open_course': { en: 'Open', ar: 'افتح' },
  'igcse.cambridge.about.title': {
    en: 'About Cambridge First Language English',
    ar: 'عن Cambridge First Language English',
  },
  'igcse.cambridge.about.body': {
    en: 'Cambridge First Language English is designed for students whose first language is English. It develops the ability to communicate clearly, accurately and effectively in both speech and writing, and to use a wide range of vocabulary, correct grammar, spelling and punctuation. Students also learn to read a wide range of texts fluently and with good understanding.',
    ar: 'منهج Cambridge First Language English مصمَّم للطلاب اللي لغتهم الأولى إنجليزي. ويطوّر القدرة على التواصل بوضوح ودقّة وفعالية في الكلام والكتابة، واستخدام مفردات واسعة وقواعد وإملاء وتشكيل صحيح. ويتعلّم الطلاب بعد كذا قراءة نصوص متنوّعة بطلاقة وفهم زين.',
  },
  'igcse.cambridge.about.reading.title': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'igcse.cambridge.about.reading.body': {
    en: 'Demonstrate understanding of explicit and implicit meanings.',
    ar: 'إظهار فهم المعاني الصريحة والضمنية في النص.',
  },
  'igcse.cambridge.about.writing.title': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'igcse.cambridge.about.writing.body': {
    en: 'Communicate clearly, accurately and effectively for different purposes.',
    ar: 'التواصل بوضوح ودقّة وفعالية لأغراض مختلفة.',
  },
  // Cambridge 0500 / 0990 syllabus card copy (paper codes stay Latin).
  'igcse.cambridge.0500.name': { en: 'IGCSE Language A', ar: 'IGCSE Language A' },
  'igcse.cambridge.0500.tagline': {
    en: 'For students whose first language is English — graded A* to G',
    ar: 'للطلاب اللي لغتهم الأولى إنجليزي — تقييم A* إلى G',
  },
  'igcse.cambridge.0500.description': {
    en: 'Two-paper qualification testing reading comprehension, summary writing, directed writing and extended composition. Graded A*-G and sat by thousands of students in international schools every year.',
    ar: 'مؤهّل بورقتين امتحان يختبر استيعاب القراءة، وكتابة الملخّص، والكتابة الموجَّهة، والإنشاء الموسّع. تقييمه A*-G ويأخذه آلاف الطلاب في المدارس الدولية كل سنة.',
  },
  'igcse.cambridge.0500.grading': { en: 'A* – G', ar: 'A* – G' },
  'igcse.cambridge.0990.name': { en: 'IGCSE Language B', ar: 'IGCSE Language B' },
  'igcse.cambridge.0990.tagline': {
    en: 'For students whose first language is English — graded 9 to 1',
    ar: 'للطلاب اللي لغتهم الأولى إنجليزي — تقييم 9 إلى 1',
  },
  'igcse.cambridge.0990.description': {
    en: 'The 9-1 graded version of Cambridge First Language English. Identical content and assessment structure to Language A but reported on the numerical 9-1 scale.',
    ar: 'نسخة Cambridge First Language English بتقييم 9-1. نفس المحتوى ونفس بنية التقييم مثل Language A، بس النتيجة بمقياس رقمي من 9 إلى 1.',
  },
  'igcse.cambridge.0990.grading': { en: '9 – 1', ar: '9 – 1' },
  'igcse.cambridge.duration_4h': { en: '4h total', ar: '٤ ساعات إجمالاً' },
  'igcse.cambridge.open_prefix': { en: 'Open', ar: 'افتح' },
  'igcse.cambridge.shared.h2': { en: 'Skills & Practice', ar: 'المهارات والتدريب' },
  'igcse.cambridge.shared.reading_label': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'igcse.cambridge.shared.reading_desc': {
    en: 'Comprehension, language analysis and summary techniques',
    ar: 'الاستيعاب، تحليل اللغة، وأساليب التلخيص',
  },
  'igcse.cambridge.shared.composition_label': {
    en: 'Composition skills',
    ar: 'مهارات الإنشاء',
  },
  'igcse.cambridge.shared.composition_desc': {
    en: 'Narrative, descriptive writing and mark-scheme strategies',
    ar: 'الكتابة السردية والوصفية واستراتيجيات نظام التصحيح',
  },

  // ─── Cambridge IGCSE — nested study pages (igcse.cambridge.*) ────────
  // Per-paper exam-technique, model answers, mark scheme breakdowns.
  // English model answers and extracts stay English by design; surrounding
  // pedagogical commentary and headings flip to Khaleeji Arabic when AR
  // is active. MSA register for syllabus-formal headings; Khaleeji for
  // student-facing narrative explanation.
  'igcse.cambridge.back_paper_1': { en: 'Paper 1 hub', ar: 'صفحة Paper 1' },
  'igcse.cambridge.back_paper_2': { en: 'Paper 2 hub', ar: 'صفحة Paper 2' },
  'igcse.cambridge.back_composition': {
    en: 'Back to composition',
    ar: 'رجوع لـ Composition',
  },
  'igcse.cambridge.back_narrative': {
    en: 'Back to narrative',
    ar: 'رجوع للـ Narrative',
  },
  'igcse.cambridge.badge.language_a': { en: 'IGCSE Language A', ar: 'IGCSE Language A' },
  'igcse.cambridge.badge.language_b': { en: 'IGCSE Language B', ar: 'IGCSE Language B' },
  'igcse.cambridge.badge.cambridge_0500': {
    en: 'Cambridge IGCSE 0500',
    ar: 'Cambridge IGCSE 0500',
  },
  'igcse.cambridge.badge.cambridge_0990': {
    en: 'Cambridge IGCSE 0990',
    ar: 'Cambridge IGCSE 0990',
  },
  'igcse.cambridge.badge.cambridge_lang_b': {
    en: 'Cambridge IGCSE Language B',
    ar: 'Cambridge IGCSE Language B',
  },
  'igcse.cambridge.badge.cambridge_igcse': {
    en: 'Cambridge IGCSE',
    ar: 'Cambridge IGCSE',
  },
  'igcse.cambridge.badge.igcse_language': {
    en: 'IGCSE Language',
    ar: 'IGCSE Language',
  },
  'igcse.cambridge.badge.paper_1_models': { en: 'Paper 1 models', ar: 'نماذج Paper 1' },
  'igcse.cambridge.badge.paper_2_models': { en: 'Paper 2 models', ar: 'نماذج Paper 2' },
  'igcse.cambridge.badge.paper_2_section_b': {
    en: 'Paper 2 Section B',
    ar: 'Paper 2 — Section B',
  },
  'igcse.cambridge.badge.paper_1': { en: 'Paper 1', ar: 'Paper 1' },
  'igcse.cambridge.badge.question_types': {
    en: 'Question types',
    ar: 'أنواع الأسئلة',
  },
  'igcse.cambridge.examiner_note': { en: 'Examiner note', ar: 'ملاحظة المصحّح' },
  'igcse.cambridge.point': { en: 'Point', ar: 'نقطة' },
  'igcse.cambridge.paragraph': { en: 'Paragraph', ar: 'فقرة' },
  'igcse.cambridge.opening': { en: 'Opening', ar: 'المقدمة' },
  'igcse.cambridge.closing': { en: 'Closing', ar: 'الخاتمة' },
  'igcse.cambridge.question': { en: 'Question', ar: 'السؤال' },
  'igcse.cambridge.task': { en: 'Task', ar: 'المهمة' },
  'igcse.cambridge.source_passage': { en: 'Source passage', ar: 'النص المصدر' },
  'igcse.cambridge.model_summary': { en: 'Model summary', ar: 'نموذج الملخّص' },
  'igcse.cambridge.aligns_paper_1_reading': {
    en: 'Aligns with Cambridge syllabus 0500 — Paper 1 Reading',
    ar: 'يتوافق مع منهج Cambridge 0500 — Paper 1 Reading',
  },
  'igcse.cambridge.aligns_paper_2_writing': {
    en: 'Aligns with Cambridge syllabus 0500 — Paper 2 Writing',
    ar: 'يتوافق مع منهج Cambridge 0500 — Paper 2 Writing',
  },

  // ─── Paper 1 / Q3 — Summary writing ───────────────────────────────────
  'igcse.cambridge.summary.hero_title': {
    en: 'Summary writing (Q3)',
    ar: 'كتابة الملخّص (Q3)',
  },
  'igcse.cambridge.summary.hero_lead': {
    en: 'Question 3 is worth 25 marks — the biggest single mark chunk in Paper 1. Fifteen marks are for reading (the points you find) and ten are for writing (how concisely and clearly you express them).',
    ar: 'السؤال الثالث يساوي 25 درجة — أكبر مجموعة درجات في Paper 1. خمستعشر درجة لـ Reading (النقاط اللي تلقاها) وعشر درجات لـ Writing (مدى وضوحها واختصارها لمّا تعبّر عنها).',
  },
  'igcse.cambridge.summary.split_h2': {
    en: 'How the 25 marks split',
    ar: 'كيف توزّع الـ 25 درجة',
  },
  'igcse.cambridge.summary.reading_badge': {
    en: 'Reading skills — 15 marks',
    ar: 'مهارات القراءة — 15 درجة',
  },
  'igcse.cambridge.summary.reading_h3': { en: 'Content points', ar: 'النقاط المحتوية' },
  'igcse.cambridge.summary.reading_body': {
    en: 'One mark per relevant idea identified from Texts A and C. Top candidates identify around 15 distinct points.',
    ar: 'درجة لكل فكرة ذات صلة تلقاها في Texts A و C. أعلى الطلاب يلقّون حوالي 15 نقطة مختلفة.',
  },
  'igcse.cambridge.summary.writing_badge': {
    en: 'Writing skills — 10 marks',
    ar: 'مهارات الكتابة — 10 درجات',
  },
  'igcse.cambridge.summary.writing_h3': {
    en: 'Style, structure, own words',
    ar: 'الأسلوب، البناء، وكلامك الخاص',
  },
  'igcse.cambridge.summary.writing_body': {
    en: 'Level 5 (9–10 marks): concise, fluent, cohesive, consistently in your own words. No lifting.',
    ar: 'Level 5 (9–10 درجات): مختصر، سلس، مترابط، وبكلامك أنت طول الوقت. بدون نسخ من النص.',
  },
  'igcse.cambridge.summary.method_h2': {
    en: 'Five-step method',
    ar: 'طريقة من خمس خطوات',
  },
  'igcse.cambridge.summary.dos_h2': { en: "Do and don't", ar: 'سوّ وما تسوّي' },
  'igcse.cambridge.summary.dos_h3': { en: 'Do', ar: 'سوّ' },
  'igcse.cambridge.summary.dos_desc': {
    en: 'These habits push you to Level 5.',
    ar: 'هالعادات تطلّعك Level 5.',
  },
  'igcse.cambridge.summary.donts_h3': { en: "Don't", ar: 'لا تسوّي' },
  'igcse.cambridge.summary.donts_desc': {
    en: 'These habits cap you in Level 2–3.',
    ar: 'هالعادات تحبسك في Level 2–3.',
  },
  'igcse.cambridge.summary.worked_h2': {
    en: 'Worked opening — dangers of urban cycling',
    ar: 'مقدمة مشروحة — أخطار ركوب الدراجة في المدينة',
  },
  'igcse.cambridge.summary.worked_intro': {
    en: 'Imagine the question asks for the dangers faced by city cyclists. Here is an opening that covers six points in about 70 words:',
    ar: 'تخيّل إن السؤال يطلب أخطار راكبي الدراجة في المدينة. هذي مقدمة تغطّي ست نقاط في حوالي 70 كلمة:',
  },
  'igcse.cambridge.summary.worked_note': {
    en: "Notice: no quotation, no opinion, every sentence a new point, and the phrasing is the student's own.",
    ar: 'لاحظ: بدون اقتباس، بدون رأي شخصي، كل جملة فيها نقطة جديدة، والصياغة من الطالب نفسه.',
  },

  // ─── Paper 1 / Q2 — Language analysis ─────────────────────────────────
  'igcse.cambridge.lang.hero_title': {
    en: 'Language analysis (Q2)',
    ar: 'تحليل اللغة (Q2)',
  },
  'igcse.cambridge.lang.hero_lead': {
    en: 'Question 2 asks how the writer uses language to convey meaning and create effect. Fifteen marks. Around 25 minutes. Choose eight powerful words or phrases and analyse them in layered detail.',
    ar: 'السؤال الثاني يسأل عن كيف يستخدم الكاتب اللغة لإيصال المعنى وخلق التأثير. خمستعشر درجة. حوالي 25 دقيقة. اختر ثمان كلمات أو عبارات قوية وحللهن بطبقات.',
  },
  'igcse.cambridge.lang.examiners_h2': {
    en: 'What the examiners want',
    ar: 'شنو يبغى المصحّحون',
  },
  'igcse.cambridge.lang.l5_badge': {
    en: 'Level 5 (13–15)',
    ar: 'Level 5 (13–15)',
  },
  'igcse.cambridge.lang.l5_body': {
    en: 'Judicious and wide-ranging choices; precise explanation of connotations and effects across the whole response.',
    ar: 'اختيارات مدروسة وواسعة المدى؛ شرح دقيق للدلالات والتأثيرات في كل أجزاء الإجابة.',
  },
  'igcse.cambridge.lang.l2_badge': { en: 'Level 2 (4–6)', ar: 'Level 2 (4–6)' },
  'igcse.cambridge.lang.l2_body': {
    en: 'Limited range of choices; mostly paraphrase of meaning with little or no explanation of effect.',
    ar: 'اختيارات محدودة المدى؛ غالباً إعادة صياغة للمعنى مع شرح بسيط أو معدوم للتأثير.',
  },
  'igcse.cambridge.lang.framework_h2': {
    en: 'A five-step framework for every paragraph',
    ar: 'إطار من خمس خطوات لكل فقرة',
  },
  'igcse.cambridge.lang.vocab_h2': {
    en: 'Useful analytical vocabulary',
    ar: 'مفردات تحليلية مفيدة',
  },
  'igcse.cambridge.lang.worked_h2': { en: 'Worked paragraph', ar: 'فقرة مشروحة' },
  'igcse.cambridge.lang.worked_intro': {
    en: 'Writer describes a cityscape at dusk: "Skyscrapers loomed like sleeping giants, their mirrored faces bleeding orange fire."',
    ar: 'الكاتب يصف المدينة عند المغيب: "Skyscrapers loomed like sleeping giants, their mirrored faces bleeding orange fire."',
  },
  'igcse.cambridge.lang.mistakes_h2': { en: 'Common mistakes', ar: 'أخطاء شائعة' },

  // ─── Paper 1 — Reading techniques ─────────────────────────────────────
  'igcse.cambridge.reading_tech.hero_title': {
    en: 'Reading techniques',
    ar: 'تقنيات القراءة',
  },
  'igcse.cambridge.reading_tech.hero_lead': {
    en: 'You have 2 hours and around 2,000 words of unseen text to read. Use the right technique for the right job — never read every passage at the same speed.',
    ar: 'عندك ساعتين وحوالي 2000 كلمة من نصوص ما شفتها قبل. استخدم التقنية الصح للمهمة الصح — لا تقرأ كل النصوص بنفس السرعة.',
  },
  'igcse.cambridge.reading_tech.purpose_label': { en: 'Purpose:', ar: 'الهدف:' },
  'igcse.cambridge.reading_tech.how_label': { en: 'How to do it', ar: 'كيف تسوّيها' },
  'igcse.cambridge.reading_tech.pitfall_label': {
    en: 'Common pitfall:',
    ar: 'فخّ شائع:',
  },
  'igcse.cambridge.reading_tech.workflow_h2': {
    en: 'Putting it all together in the exam',
    ar: 'كيف تجمعها كلها في الامتحان',
  },
  'igcse.cambridge.reading_tech.step1_bold': {
    en: 'Skim all three passages',
    ar: 'اقرأ النصوص الثلاثة قراءة سريعة (Skim)',
  },
  'igcse.cambridge.reading_tech.step1_rest': {
    en: ' quickly at the start. Do not try to remember details — just get the tone and topic.',
    ar: ' بسرعة في البداية. لا تحاول تتذكّر التفاصيل — بس امسك النبرة والموضوع.',
  },
  'igcse.cambridge.reading_tech.step2_bold': {
    en: 'Read Q1 questions first',
    ar: 'اقرأ أسئلة Q1 الأول',
  },
  'igcse.cambridge.reading_tech.step2_rest': {
    en: ', then scan Text A for each answer in order.',
    ar: '، بعدها سوّ Scan لـ Text A عشان كل إجابة بالترتيب.',
  },
  'igcse.cambridge.reading_tech.step3_bold': {
    en: 'Close read Text B',
    ar: 'اقرأ Text B قراءة دقيقة',
  },
  'igcse.cambridge.reading_tech.step3_rest': {
    en: ' for Q2. Annotate powerful words and link each to an effect.',
    ar: ' عشان Q2. علّم على الكلمات القوية واربط كل وحدة بالتأثير.',
  },
  'igcse.cambridge.reading_tech.step4_bold': {
    en: 'Point-spot Texts A and C',
    ar: 'دوّر النقاط في Texts A و C',
  },
  'igcse.cambridge.reading_tech.step4_rest': {
    en: ' for Q3 summary. Underline every discrete piece of information.',
    ar: ' عشان ملخّص Q3. سطّر تحت كل معلومة منفصلة.',
  },

  // ─── Paper 1 — Model answers ──────────────────────────────────────────
  'igcse.cambridge.p1_models.hero_title': {
    en: 'Paper 1 model answers',
    ar: 'نماذج إجابات Paper 1',
  },
  'igcse.cambridge.p1_models.hero_lead': {
    en: 'Five model answers across all three Paper 1 question types: retrieval (Q1), language analysis (Q2 at Grade C and A* compared side by side), and summary writing (Q3). Every answer includes examiner-style annotations explaining exactly what earns marks.',
    ar: 'خمسة نماذج إجابات تغطّي أنواع أسئلة Paper 1 الثلاثة: الاستخراج (Q1)، تحليل اللغة (Q2 بمقارنة Grade C مع A* جنب بعض)، وكتابة الملخّص (Q3). كل إجابة فيها ملاحظات على طريقة المصحّح تشرح بالضبط شنو يجيب الدرجات.',
  },
  'igcse.cambridge.p1_models.q1_h2': {
    en: 'Question 1 — Retrieval',
    ar: 'السؤال الأول — الاستخراج',
  },
  'igcse.cambridge.p1_models.q1_intro': {
    en: 'Question 1 tests your ability to locate and rephrase information from the passage. You are given a specific focus (e.g. "dangers" or "benefits") and must list relevant points in your own words. Short notes are acceptable. Aim for 12–15 points to be safe — the mark scheme rewards breadth of reading.',
    ar: 'السؤال الأول يختبر قدرتك على إيجاد المعلومات في النص وإعادة صياغتها. يعطونك تركيز محدد (مثلاً "dangers" أو "benefits") ولازم تسرد النقاط ذات الصلة بكلامك. النقاط القصيرة مقبولة. صوّب على 12–15 نقطة عشان تأمّن نفسك — الـ Mark Scheme يكافئ سعة القراءة.',
  },
  'igcse.cambridge.p1_models.q2_h2': {
    en: 'Question 2 — Language analysis: Grade C vs A*',
    ar: 'السؤال الثاني — تحليل اللغة: Grade C مقابل A*',
  },
  'igcse.cambridge.p1_models.q2_intro': {
    en: 'Question 2 asks how the writer uses language to create meaning and effect. Below is the same passage analysed at Grade C and then at Grade A*, so you can see precisely what separates an average response from a top-band one.',
    ar: 'السؤال الثاني يسأل عن كيف يستخدم الكاتب اللغة لخلق المعنى والتأثير. تحت تلقى نفس النص محلَّل على Grade C وبعدها على Grade A*، عشان تشوف بالضبط شنو يفرق إجابة عادية عن إجابة من أعلى Band.',
  },
  'igcse.cambridge.p1_models.q2_response_label': {
    en: 'response',
    ar: 'إجابة',
  },
  'igcse.cambridge.p1_models.q2_diff_title': {
    en: 'What separates Grade C from A*?',
    ar: 'شنو يفرق Grade C عن A*؟',
  },
  'igcse.cambridge.p1_models.q2_c_label': {
    en: 'Grade C tends to...',
    ar: 'Grade C يميل لـ...',
  },
  'igcse.cambridge.p1_models.q2_a_label': {
    en: 'Grade A* tends to...',
    ar: 'Grade A* يميل لـ...',
  },
  'igcse.cambridge.p1_models.q3_h2': {
    en: 'Question 3 — Summary',
    ar: 'السؤال الثالث — الملخّص',
  },
  'igcse.cambridge.p1_models.q3_intro': {
    en: 'Question 3 asks you to summarise information from two passages into a single continuous paragraph of about 250 words. You are marked on content (how many relevant points you include) and language (how effectively you use your own words). No quotation, no opinion, no bullet points.',
    ar: 'السؤال الثالث يطلب منك تلخّص معلومات من نصّين في فقرة وحدة متّصلة حوالي 250 كلمة. تتقيّم على المحتوى (كم نقطة ذات صلة تذكر) واللغة (مدى فعالية استخدام كلامك). بدون اقتباس، بدون رأي، بدون نقاط منفصلة.',
  },

  // ─── Paper 2 — Directed writing ───────────────────────────────────────
  'igcse.cambridge.dw.hero_title': { en: 'Directed writing', ar: 'الكتابة الموجَّهة' },
  'igcse.cambridge.dw.hero_lead': {
    en: 'Section A is worth 40 marks. Fifteen for how well you read the stimulus, twenty-five for how well you adapt tone and style to the required form. Getting the form wrong costs you half your writing marks, so the first thing to get right is the shape.',
    ar: 'Section A يساوي 40 درجة. خمستعشر على مدى فهمك للنص المحفّز، وخمس وعشرين على مدى تكييفك للنبرة والأسلوب حسب الـ Form المطلوب. لو غلطت في الـ Form تخسر نص درجات الكتابة، فأهم شي تضبط الشكل من البداية.',
  },
  'igcse.cambridge.dw.split_h2': {
    en: 'How the 40 marks split',
    ar: 'كيف توزّع الـ 40 درجة',
  },
  'igcse.cambridge.dw.reading_badge': {
    en: 'Reading — 15 marks',
    ar: 'Reading — 15 درجة',
  },
  'igcse.cambridge.dw.reading_body': {
    en: 'Select and develop relevant ideas from the stimulus text. Show that you understand implicit as well as explicit meanings.',
    ar: 'اختار وطوّر الأفكار ذات الصلة من النص المحفّز. بيّن إنك فاهم المعاني الصريحة والضمنية.',
  },
  'igcse.cambridge.dw.writing_badge': {
    en: 'Writing — 25 marks',
    ar: 'Writing — 25 درجة',
  },
  'igcse.cambridge.dw.writing_body': {
    en: 'Content and structure, style and accuracy. Register, form, tone, organisation, vocabulary, grammar, spelling and punctuation all count.',
    ar: 'المحتوى والبناء، الأسلوب والدقة. الـ Register والـ Form والنبرة والتنظيم والمفردات والقواعد والإملاء والترقيم كلها تنحسب.',
  },
  'igcse.cambridge.dw.forms_h2': {
    en: 'The four main forms',
    ar: 'الـ Forms الأربعة الرئيسية',
  },
  'igcse.cambridge.dw.opening_closing_label': {
    en: 'Opening and closing',
    ar: 'المقدمة والخاتمة',
  },
  'igcse.cambridge.dw.register_label': { en: 'Register', ar: 'الـ Register' },
  'igcse.cambridge.dw.features_label': { en: 'Key features', ar: 'السمات الرئيسية' },
  'igcse.cambridge.dw.process_h2': {
    en: 'Seven-step process in the exam',
    ar: 'سبع خطوات في الامتحان',
  },

  // ─── Paper 2 — Descriptive writing ────────────────────────────────────
  'igcse.cambridge.desc.hero_title': {
    en: 'Descriptive writing',
    ar: 'الكتابة الوصفية',
  },
  'igcse.cambridge.desc.hero_lead': {
    en: 'Descriptive writing is not about lots of adjectives — it is about selecting the right details and layering them so the reader can step into the scene. Worth 40 marks in Section B.',
    ar: 'الكتابة الوصفية مو عن كثرة الصفات — هي عن اختيار التفاصيل الصح وترتيبها بطبقات عشان القارئ يقدر يدخل المشهد. تساوي 40 درجة في Section B.',
  },
  'igcse.cambridge.desc.split_h2': {
    en: 'How the 40 marks split',
    ar: 'كيف توزّع الـ 40 درجة',
  },
  'igcse.cambridge.desc.cs_badge': {
    en: 'Content & structure — 16',
    ar: 'المحتوى والبناء — 16',
  },
  'igcse.cambridge.desc.cs_body': {
    en: 'Originality of content, progression of ideas, sense of atmosphere and shape of the composition as a whole.',
    ar: 'أصالة المحتوى، تقدّم الأفكار، الإحساس بالأجواء، وشكل الإنشاء ككل.',
  },
  'igcse.cambridge.desc.sa_badge': {
    en: 'Style & accuracy — 24',
    ar: 'الأسلوب والدقة — 24',
  },
  'igcse.cambridge.desc.sa_body': {
    en: 'Range of vocabulary, precision of word choice, varied sentence structure, grammar, spelling and punctuation.',
    ar: 'مدى المفردات، دقة اختيار الكلمات، تنوّع تركيب الجمل، القواعد، الإملاء، والترقيم.',
  },
  'igcse.cambridge.desc.senses_h2': {
    en: 'Using sensory detail',
    ar: 'استخدام التفاصيل الحسية',
  },
  'igcse.cambridge.desc.structure_h2': {
    en: 'Five-stage structure',
    ar: 'بناء من خمس مراحل',
  },
  'igcse.cambridge.desc.worked_h2': {
    en: 'Worked opening — "Describe a busy marketplace"',
    ar: 'مقدمة مشروحة — "Describe a busy marketplace"',
  },
  'igcse.cambridge.desc.worked_note': {
    en: 'Notice: wide opening, then zoom to the woman, then shift to sound, then another sense. Five lines, five moves.',
    ar: 'لاحظ: مقدمة واسعة، بعدها زووم على المرأة، بعدها انتقال للصوت، بعدها حاسّة ثانية. خمس سطور، خمس حركات.',
  },
  'igcse.cambridge.desc.mistakes_h2': { en: 'Common mistakes', ar: 'أخطاء شائعة' },

  // ─── Paper 2 — Narrative writing ──────────────────────────────────────
  'igcse.cambridge.narr.hero_title': {
    en: 'Narrative writing',
    ar: 'الكتابة السردية',
  },
  'igcse.cambridge.narr.hero_lead': {
    en: 'A narrative composition is a short story — not a summary of a life. In 450 words you need one clear event, one developed character and one controlled shift in mood. Restraint is worth more than spectacle.',
    ar: 'الإنشاء السردي قصة قصيرة — مو ملخّص حياة كاملة. في 450 كلمة تحتاج حدث وحد واضح، شخصية وحدة مطوَّرة، وتحوّل وحد منضبط في المزاج. الانضباط أفضل من الاستعراض.',
  },
  'igcse.cambridge.narr.split_h2': {
    en: 'How the 40 marks split',
    ar: 'كيف توزّع الـ 40 درجة',
  },
  'igcse.cambridge.narr.cs_badge': {
    en: 'Content & structure — 16',
    ar: 'المحتوى والبناء — 16',
  },
  'igcse.cambridge.narr.cs_body': {
    en: 'Originality, pacing, character development, sense of direction, satisfying shape.',
    ar: 'الأصالة، الإيقاع، تطوير الشخصية، الإحساس بالاتجاه، والشكل المُرضي.',
  },
  'igcse.cambridge.narr.sa_badge': {
    en: 'Style & accuracy — 24',
    ar: 'الأسلوب والدقة — 24',
  },
  'igcse.cambridge.narr.sa_body': {
    en: 'Precise vocabulary, varied sentence structure, tense consistency, dialogue punctuation, spelling, grammar.',
    ar: 'مفردات دقيقة، تنوّع في تركيب الجمل، انسجام الأزمنة، علامات ترقيم الحوار، الإملاء، والقواعد.',
  },
  'igcse.cambridge.narr.structure_h2': {
    en: 'Five-stage story structure',
    ar: 'بناء القصة من خمس مراحل',
  },
  'igcse.cambridge.narr.tip_label': { en: 'Tip:', ar: 'نصيحة:' },
  'igcse.cambridge.narr.char_h2': {
    en: 'Building a believable character',
    ar: 'بناء شخصية مقنعة',
  },
  'igcse.cambridge.narr.dialogue_h2': {
    en: 'Writing dialogue cleanly',
    ar: 'كتابة الحوار بنظافة',
  },
  'igcse.cambridge.narr.rules_label': { en: 'Rules', ar: 'القواعد' },
  'igcse.cambridge.narr.rules_desc': {
    en: 'Dialogue is where candidates most often lose accuracy marks.',
    ar: 'الحوار أكثر مكان يخسر فيه الطلاب درجات الدقة.',
  },
  'igcse.cambridge.narr.worked_h2': {
    en: 'Worked opening — "Write a story that begins with a phone call."',
    ar: 'مقدمة مشروحة — "Write a story that begins with a phone call."',
  },
  'igcse.cambridge.narr.worked_note': {
    en: 'Notice: opens mid-action, one distinguishing habit (waiting), small specific detail (mattress, rain), dialogue doing double duty (revealing past and present).',
    ar: 'لاحظ: تبدأ في وسط الحركة، عادة مميزة وحدة (الانتظار)، تفصيل صغير محدد (المرتبة، المطر)، والحوار يسوّي شغلين (يكشف الماضي والحاضر).',
  },

  // ─── Paper 2 — Model answers ──────────────────────────────────────────
  'igcse.cambridge.p2_models.hero_title': {
    en: 'Paper 2 model answers',
    ar: 'نماذج إجابات Paper 2',
  },
  'igcse.cambridge.p2_models.hero_lead': {
    en: 'Five model compositions for Paper 2: three directed writing responses (letter, article, speech) and two Section B compositions (descriptive and narrative). Every paragraph includes examiner annotations explaining what earns top marks.',
    ar: 'خمسة نماذج إنشاء لـ Paper 2: ثلاث إجابات Directed Writing (رسالة، مقال، خطاب) واثنين إنشاء Section B (وصفي وسردي). كل فقرة فيها ملاحظات المصحّح تشرح شنو يجيب الدرجات العليا.',
  },
  'igcse.cambridge.p2_models.dw_h2': {
    en: 'Section A — Directed writing',
    ar: 'Section A — الكتابة الموجَّهة',
  },
  'igcse.cambridge.p2_models.dw_intro': {
    en: 'Directed writing asks you to respond to a reading passage in a specific form (letter, article, speech, report). You are marked on how well you use ideas from the passage, how effectively you write in the required form, and the quality of your language. The best answers adapt and extend the source material rather than simply copying it.',
    ar: 'الـ Directed Writing يطلب منك ترد على نص قراءة بشكل محدد (رسالة، مقال، خطاب، تقرير). تتقيّم على مدى استخدامك للأفكار من النص، ومدى فعاليّة كتابتك بالشكل المطلوب، وجودة لغتك. أفضل الإجابات تكيّف المادة الأصلية وتطوّرها بدل ما تنسخها.',
  },
  'igcse.cambridge.p2_models.desc_h2': {
    en: 'Section B — Descriptive writing',
    ar: 'Section B — الكتابة الوصفية',
  },
  'igcse.cambridge.p2_models.desc_intro': {
    en: 'Section B offers a choice between descriptive and narrative writing. Descriptive compositions are marked on the quality of your imagery, vocabulary, sentence variety, and structural control. The best descriptive writing creates atmosphere through precise, original sensory detail -- not through plot.',
    ar: 'Section B يعطيك خيار بين الكتابة الوصفية والسردية. الإنشاء الوصفي يتقيّم على جودة الصور، المفردات، تنوّع الجمل، والسيطرة على البناء. أفضل كتابة وصفية تخلق الأجواء عن طريق تفاصيل حسية دقيقة وأصيلة — مو عن طريق الحبكة.',
  },
  'igcse.cambridge.p2_models.narr_h2': {
    en: 'Section B — Narrative writing',
    ar: 'Section B — الكتابة السردية',
  },
  'igcse.cambridge.p2_models.narr_intro': {
    en: 'Narrative compositions are marked on plot structure, characterisation, dialogue, tension, and language quality. The best narratives are small in scale (one scene, one turning point) with precise physical detail and restrained emotion. Avoid car chases, dream endings, and plots that try to cover years in 500 words.',
    ar: 'الإنشاء السردي يتقيّم على بنية الحبكة، رسم الشخصيات، الحوار، التوتر، وجودة اللغة. أفضل القصص صغيرة في حجمها (مشهد وحد، نقطة تحوّل وحدة) مع تفاصيل جسدية دقيقة وانفعال منضبط. تجنّب مطاردات السيارات، نهايات الحلم، والحبكات اللي تحاول تغطي سنين في 500 كلمة.',
  },

  // ─── Composition — Mark scheme ────────────────────────────────────────
  'igcse.cambridge.ms.hero_title': {
    en: 'Composition mark scheme',
    ar: 'نظام تصحيح الإنشاء',
  },
  'igcse.cambridge.ms.hero_lead_pre': {
    en: 'Cambridge IGCSE Language Paper 2 Section B is marked out of 40, in two parts: ',
    ar: 'Cambridge IGCSE Language Paper 2 Section B يتقيّم من 40، وينقسم لقسمين: ',
  },
  'igcse.cambridge.ms.hero_lead_cs': {
    en: '16 for content and structure',
    ar: '16 درجة للمحتوى والبناء',
  },
  'igcse.cambridge.ms.hero_lead_and': { en: ' and ', ar: ' و' },
  'igcse.cambridge.ms.hero_lead_sa': {
    en: '24 for style and accuracy',
    ar: '24 درجة للأسلوب والدقة',
  },
  'igcse.cambridge.ms.hero_lead_post': {
    en: '. Understanding the split is the fastest way to stop losing marks on the wrong things.',
    ar: '. فهم هالتقسيم أسرع طريقة عشان توقف تخسر درجات على أشياء ما تستاهل.',
  },
  'igcse.cambridge.ms.cs_title': {
    en: 'Content and structure',
    ar: 'المحتوى والبناء',
  },
  'igcse.cambridge.ms.cs_share': {
    en: '40% of the composition mark',
    ar: '40٪ من درجة الإنشاء',
  },
  'igcse.cambridge.ms.cs_marks_strong': { en: '16 marks.', ar: '16 درجة.' },
  'igcse.cambridge.ms.cs_marks_body': {
    en: ' Is your composition well-shaped? Does it develop an idea? Does it engage the reader from opening to closing?',
    ar: ' هل إنشاؤك مبنيّ زين؟ هل يطوّر فكرة؟ هل يشدّ القارئ من المقدمة للخاتمة؟',
  },
  'igcse.cambridge.ms.cs_questions_intro': {
    en: 'Key questions examiners ask:',
    ar: 'الأسئلة الرئيسية اللي يسألها المصحّحون:',
  },
  'igcse.cambridge.ms.cs_q1': {
    en: 'Does the piece have a clear shape — beginning, middle, end?',
    ar: 'هل القطعة لها شكل واضح — بداية، وسط، نهاية؟',
  },
  'igcse.cambridge.ms.cs_q2': {
    en: 'Are paragraphs sequenced with purpose?',
    ar: 'هل الفقرات مرتّبة بهدف؟',
  },
  'igcse.cambridge.ms.cs_q3': {
    en: 'Is there originality in the ideas or the angle?',
    ar: 'هل في أصالة في الأفكار أو الزاوية؟',
  },
  'igcse.cambridge.ms.cs_q4': {
    en: 'Does the ending feel earned, not tacked on?',
    ar: 'هل النهاية تحسّ إنها مستحقة، مو ملصوقة في الآخر؟',
  },
  'igcse.cambridge.ms.sa_title': {
    en: 'Style and accuracy',
    ar: 'الأسلوب والدقة',
  },
  'igcse.cambridge.ms.sa_share': {
    en: '60% of the composition mark',
    ar: '60٪ من درجة الإنشاء',
  },
  'igcse.cambridge.ms.sa_marks_strong': { en: '24 marks.', ar: '24 درجة.' },
  'igcse.cambridge.ms.sa_marks_body': {
    en: ' This is the bigger pillar. It rewards vocabulary range, sentence variety, technical accuracy, and a confident register.',
    ar: ' هذا الركن الأكبر. يكافئ سعة المفردات، تنوّع الجمل، الدقة الفنية، والـ Register الواثق.',
  },
  'igcse.cambridge.ms.sa_questions_intro': {
    en: 'Key questions examiners ask:',
    ar: 'الأسئلة الرئيسية اللي يسألها المصحّحون:',
  },
  'igcse.cambridge.ms.sa_q1': {
    en: 'Is the vocabulary precise and sometimes ambitious?',
    ar: 'هل المفردات دقيقة وأحياناً طموحة؟',
  },
  'igcse.cambridge.ms.sa_q2': {
    en: 'Are sentence structures varied and controlled?',
    ar: 'هل تراكيب الجمل متنوّعة ومنضبطة؟',
  },
  'igcse.cambridge.ms.sa_q3': {
    en: 'Are spelling, punctuation and grammar secure?',
    ar: 'هل الإملاء والترقيم والقواعد مضبوطة؟',
  },
  'igcse.cambridge.ms.sa_q4': {
    en: 'Is the register (formal, informal, narrative) consistent?',
    ar: 'هل الـ Register (رسمي، غير رسمي، سردي) متّسق؟',
  },
  'igcse.cambridge.ms.cs_bands_h2': {
    en: 'Content and structure — band descriptors',
    ar: 'المحتوى والبناء — وصف الـ Bands',
  },
  'igcse.cambridge.ms.sa_bands_h2': {
    en: 'Style and accuracy — band descriptors',
    ar: 'الأسلوب والدقة — وصف الـ Bands',
  },
  'igcse.cambridge.ms.marks_label': { en: 'marks', ar: 'درجة' },
  'igcse.cambridge.ms.push_h2': {
    en: 'How to push up a band',
    ar: 'كيف تطلع Band فوق',
  },
  'igcse.cambridge.ms.push_4to5_c_title': {
    en: 'From Band 4 to Band 5 (content)',
    ar: 'من Band 4 لـ Band 5 (المحتوى)',
  },
  'igcse.cambridge.ms.push_4to5_c_body': {
    en: 'Make the opening and closing echo. Cut any paragraph that does not move the shape forward. Add one unexpected detail per paragraph.',
    ar: 'خلّ المقدمة والخاتمة يتجاوبون. اقطع أي فقرة ما تخدم الشكل. ضيف تفصيل غير متوقّع في كل فقرة.',
  },
  'igcse.cambridge.ms.push_4to5_s_title': {
    en: 'From Band 4 to Band 5 (style)',
    ar: 'من Band 4 لـ Band 5 (الأسلوب)',
  },
  'igcse.cambridge.ms.push_4to5_s_body': {
    en: 'Replace five vague words with precise ones. Break one long sentence into two or three. Add one short sentence per paragraph.',
    ar: 'بدّل خمس كلمات مبهمة بكلمات دقيقة. قسّم جملة طويلة لاثنتين أو ثلاث. ضيف جملة قصيرة في كل فقرة.',
  },
  'igcse.cambridge.ms.push_5to6_c_title': {
    en: 'From Band 5 to Band 6 (content)',
    ar: 'من Band 5 لـ Band 6 (المحتوى)',
  },
  'igcse.cambridge.ms.push_5to6_c_body': {
    en: 'Build and sustain an extended metaphor across the whole piece. Invert the opening image in the closing line.',
    ar: 'ابنِ Extended Metaphor واحدة وحافظ عليها على طول القطعة. اقلب صورة المقدمة في السطر الأخير.',
  },
  'igcse.cambridge.ms.push_5to6_s_title': {
    en: 'From Band 5 to Band 6 (style)',
    ar: 'من Band 5 لـ Band 6 (الأسلوب)',
  },
  'igcse.cambridge.ms.push_5to6_s_body': {
    en: 'Use one rhetorical device per piece — tricolon, anaphora or asyndeton — and hold register steady from first line to last.',
    ar: 'استخدم Rhetorical Device وحدة بالقطعة — Tricolon أو Anaphora أو Asyndeton — وثبّت الـ Register من أول سطر لآخر سطر.',
  },
  'igcse.cambridge.ms.disclaimer': {
    en: 'Band descriptors are paraphrased for clarity and are not the official Cambridge mark scheme wording. Always refer to the current Cambridge IGCSE Language specification and published mark schemes for authoritative criteria.',
    ar: 'وصف الـ Bands معاد صياغته للتوضيح، وما هو الصياغة الرسمية لـ Cambridge Mark Scheme. ارجع دائماً للمواصفات الحالية لـ Cambridge IGCSE Language ولجداول التصحيح المنشورة لأخذ المعايير المعتمدة.',
  },

  // ─── Narrative structure (composition) ────────────────────────────────
  'igcse.cambridge.narr_struct.tech_badge': {
    en: 'Technique 1 of 4',
    ar: 'تقنية 1 من 4',
  },
  'igcse.cambridge.narr_struct.hero_title': {
    en: 'Story structure',
    ar: 'بناء القصة',
  },
  'igcse.cambridge.narr_struct.hero_lead_pre': {
    en: 'A 450-word short story has no time for a full novel arc. Use a compressed five-part structure, drop in using ',
    ar: 'قصة قصيرة من 450 كلمة ما عندها وقت لقوس رواية كامل. استخدم بناء مضغوط من خمس أجزاء، وادخل عن طريق ',
  },
  'igcse.cambridge.narr_struct.hero_lead_em': {
    en: 'in medias res',
    ar: 'in medias res',
  },
  'igcse.cambridge.narr_struct.hero_lead_post': {
    en: ', and make every paragraph earn its place.',
    ar: '، وخلّ كل فقرة تستحق مكانها.',
  },
  'igcse.cambridge.narr_struct.freytag_title': {
    en: "Freytag's triangle, simplified",
    ar: 'مثلث Freytag، مبسَّط',
  },
  'igcse.cambridge.narr_struct.freytag_body_pre': {
    en: "Gustav Freytag's triangle was designed for five-act plays but it adapts perfectly to short stories if you compress it. Exposition becomes ",
    ar: 'مثلث Gustav Freytag صُمِّم لمسرحيات الخمس فصول، بس يتكيّف بشكل ممتاز للقصص القصيرة إذا ضغطته. الـ Exposition تصير ',
  },
  'igcse.cambridge.narr_struct.freytag_one_setting': {
    en: 'one line of setting',
    ar: 'سطر وحد لتحديد المكان',
  },
  'igcse.cambridge.narr_struct.freytag_rising_becomes': {
    en: '. Rising action becomes ',
    ar: '. الـ Rising Action تصير ',
  },
  'igcse.cambridge.narr_struct.freytag_one_obstacle': {
    en: 'one obstacle',
    ar: 'عقبة وحدة',
  },
  'igcse.cambridge.narr_struct.freytag_climax_is': {
    en: '. Climax is ',
    ar: '. الـ Climax هو ',
  },
  'igcse.cambridge.narr_struct.freytag_one_moment': {
    en: 'one moment',
    ar: 'لحظة وحدة',
  },
  'igcse.cambridge.narr_struct.freytag_falling_is': {
    en: '. Falling action is ',
    ar: '. الـ Falling Action هي ',
  },
  'igcse.cambridge.narr_struct.freytag_one_consequence': {
    en: 'one consequence',
    ar: 'نتيجة وحدة',
  },
  'igcse.cambridge.narr_struct.freytag_resolution_is': {
    en: '. Resolution is ',
    ar: '. الـ Resolution هي ',
  },
  'igcse.cambridge.narr_struct.freytag_one_image': {
    en: 'one quiet closing image',
    ar: 'صورة ختامية هادية',
  },
  'igcse.cambridge.narr_struct.freytag_body_post': {
    en: '. Five beats, each tiny, each essential.',
    ar: '. خمس نبضات، كل وحدة صغيرة، كل وحدة أساسية.',
  },
  'igcse.cambridge.narr_struct.arc_h2': {
    en: 'The five-part arc (450 words)',
    ar: 'القوس الخماسي (450 كلمة)',
  },
  'igcse.cambridge.narr_struct.openings_h2': {
    en: 'Four opening techniques',
    ar: 'أربع تقنيات للمقدمة',
  },
  'igcse.cambridge.narr_struct.end_h2': { en: 'How to end', ar: 'كيف تختم' },
  'igcse.cambridge.narr_struct.end1_bold': {
    en: 'Echo the opening image.',
    ar: 'كرّر صورة المقدمة.',
  },
  'igcse.cambridge.narr_struct.end1_body': {
    en: ' Not the same sentence. The same object or place, now different.',
    ar: ' مو نفس الجملة. نفس الشي أو المكان، بس متغيّر.',
  },
  'igcse.cambridge.narr_struct.end2_bold': {
    en: 'End on an action, not a reflection.',
    ar: 'اختم بحركة، مو بتأمل.',
  },
  'igcse.cambridge.narr_struct.end2_body': {
    en: ' Let the reader feel the meaning instead of being told it.',
    ar: ' خلّ القارئ يحسّ بالمعنى بدل ما تخبره فيه.',
  },
  'igcse.cambridge.narr_struct.end3_bold': {
    en: 'Avoid "and then I woke up".',
    ar: 'تجنّب "and then I woke up".',
  },
  'igcse.cambridge.narr_struct.end3_body': {
    en: ' Examiners have read ten thousand of them. Same for "it was all a dream" and "then the teacher walked in".',
    ar: ' المصحّحون قرأوا عشرة آلاف منها. نفس الشي لـ "it was all a dream" و "then the teacher walked in".',
  },
  'igcse.cambridge.narr_struct.end4_bold': {
    en: 'Cut the last sentence.',
    ar: 'احذف الجملة الأخيرة.',
  },
  'igcse.cambridge.narr_struct.end4_body': {
    en: ' Write your ending, then delete the final sentence. Nine times out of ten, the story is stronger without it.',
    ar: ' اكتب نهايتك، بعدها احذف الجملة الأخيرة. تسع مرات من عشر، القصة تكون أقوى بدونها.',
  },

  // ─── Pearson Edexcel IGCSE Literature hub (edexcel.lit.*) ────────────
  'edexcel.lit.hero_badge': {
    en: 'International GCSE English Literature',
    ar: 'International GCSE English Literature',
  },
  'edexcel.lit.hero_title': {
    en: 'Pearson Edexcel IGCSE Literature',
    ar: 'Pearson Edexcel IGCSE Literature',
  },
  'edexcel.lit.hero_lead_pre': {
    en: 'The Pearson Edexcel International GCSE in English Literature is a two-paper qualification studied in over 85 countries. It covers ',
    ar: 'مؤهّل Pearson Edexcel International GCSE in English Literature بورقتين امتحان، ويذاكره الطلاب في أكثر من ٨٥ دولة. ويغطّي ',
  },
  'edexcel.lit.hero_lead_poetry': {
    en: 'poetry, modern prose, modern drama',
    ar: 'الشعر، النثر الحديث، الدراما الحديثة',
  },
  'edexcel.lit.hero_lead_and': { en: ' and a ', ar: ' بالإضافة لـ ' },
  'edexcel.lit.hero_lead_shakes': {
    en: 'literary heritage Shakespeare play',
    ar: 'مسرحية شكسبير من التراث الأدبي',
  },
  'edexcel.lit.hero_lead_post': {
    en: ', all assessed closed book.',
    ar: '، وكلها بتنقيَّم بنظام الكتاب المغلق.',
  },
  'edexcel.lit.duration_3h30': { en: '3h 30m total', ar: '٣ ساعات و٣٠ دقيقة إجمالاً' },
  'edexcel.lit.set_texts_count': {
    en: '11 set texts + anthology',
    ar: '١١ نص مقرَّر + الـ Anthology',
  },
  'edexcel.lit.paper1.title': {
    en: 'Paper 1: Poetry and Modern Prose',
    ar: 'Paper 1: الشعر والنثر الحديث',
  },
  'edexcel.lit.paper1.meta': {
    en: '2 hours · 60 marks · 60% of total',
    ar: 'ساعتين · ٦٠ درجة · ٦٠٪ من المجموع',
  },
  'edexcel.lit.paper2.title': {
    en: 'Paper 2: Modern Drama and Literary Heritage',
    ar: 'Paper 2: الدراما الحديثة والتراث الأدبي',
  },
  'edexcel.lit.paper2.meta': {
    en: '1 hour 30 minutes · 40 marks · 40% of total',
    ar: 'ساعة و٣٠ دقيقة · ٤٠ درجة · ٤٠٪ من المجموع',
  },
  'edexcel.lit.set_texts.subtitle': {
    en: 'Every Pearson Edexcel IGCSE Literature text on one page',
    ar: 'كل نصوص Pearson Edexcel IGCSE Literature في صفحة وحدة',
  },
  'edexcel.lit.set_texts.intro': {
    en: 'Full study guides for each prescribed text — characters, themes, key quotations, context and essay plans. Pick a text to open its complete revision guide.',
    ar: 'أدلّة مذاكرة كاملة لكل نص مقرَّر — الشخصيات، الثيمات، الاقتباسات الأساسية، السياق، وخطط المقالات. اختر النص عشان تفتح دليله الكامل.',
  },
  'edexcel.lit.footer_align': {
    en: 'Aligned with Pearson Edexcel specification 4ET1 · Audited April 2026',
    ar: 'متوافق مع مواصفة Pearson Edexcel رقم 4ET1 · تم التدقيق في إبريل ٢٠٢٦',
  },

  // Set-text category tags (Edexcel Literature hub).
  'edexcel.lit.cat.shakespeare': { en: 'Shakespeare', ar: 'Shakespeare' },
  'edexcel.lit.cat.19c': { en: '19th-century novel', ar: 'رواية القرن التاسع عشر' },
  'edexcel.lit.cat.modern': { en: 'Modern prose & drama', ar: 'النثر والدراما الحديثة' },
  'edexcel.lit.cat.poetry': { en: 'Poetry anthology', ar: 'Anthology الشعر' },
  'edexcel.lit.cat.nonfiction': { en: 'Non-fiction', ar: 'نصوص غير أدبية' },
  'edexcel.lit.cat.prose': { en: 'Prose', ar: 'النثر' },

  // Exam-resources tiles on the Edexcel Literature hub.
  'edexcel.lit.exam.past_papers.title': { en: 'Past Papers', ar: 'الامتحانات السابقة' },
  'edexcel.lit.exam.past_papers.desc': {
    en: 'Where to find official Edexcel past papers plus study tips for using them.',
    ar: 'وين تلقى امتحانات Edexcel السابقة الرسمية، مع نصايح للمذاكرة منها.',
  },
  'edexcel.lit.exam.technique.title': { en: 'Exam Technique', ar: 'أسلوب الامتحان' },
  'edexcel.lit.exam.technique.desc': {
    en: 'IGCSE-specific strategies for comparison, extract and essay questions.',
    ar: 'استراتيجيات لـ IGCSE لأسئلة المقارنة والمقطع والمقال.',
  },
  'edexcel.lit.exam.essay.title': { en: 'Essay Technique', ar: 'أسلوب كتابة المقال' },
  'edexcel.lit.exam.essay.desc': {
    en: 'How to structure and develop Literature essays across all papers.',
    ar: 'طريقة هيكلة وتطوير مقالات Literature في كل الأوراق.',
  },
  'edexcel.lit.exam.grade.title': { en: 'Grade Targets', ar: 'مستويات الدرجات' },
  'edexcel.lit.exam.grade.desc': {
    en: 'Grade 5, 7, 9 specific guides',
    ar: 'أدلّة مخصّصة للدرجات 5 و7 و9',
  },
  'edexcel.lit.exam.syllabus.title': { en: 'Syllabus', ar: 'المنهج' },
  'edexcel.lit.exam.syllabus.desc': {
    en: 'Full 4ET1 specification breakdown',
    ar: 'تفصيل كامل لمواصفة 4ET1',
  },

  // ─── Pearson Edexcel IGCSE Language A hub (edexcel.lang.*) ───────────
  'edexcel.lang.hero_badge': {
    en: 'International GCSE English Language',
    ar: 'International GCSE English Language',
  },
  'edexcel.lang.hero_title': {
    en: 'Pearson Edexcel IGCSE Language A',
    ar: 'Pearson Edexcel IGCSE Language A',
  },
  'edexcel.lang.hero_lead_pre': {
    en: 'The Pearson Edexcel International GCSE in English Language (Specification A) is a two-paper qualification covering ',
    ar: 'مؤهّل Pearson Edexcel International GCSE in English Language (Specification A) بورقتين امتحان، ويغطّي ',
  },
  'edexcel.lang.hero_lead_nf': {
    en: 'non-fiction reading',
    ar: 'قراءة النصوص غير الأدبية',
  },
  'edexcel.lang.hero_lead_trans': {
    en: 'transactional writing',
    ar: 'الكتابة الإجرائية (transactional)',
  },
  'edexcel.lang.hero_lead_anth': {
    en: 'prescribed anthology',
    ar: 'الـ Anthology المقرَّرة',
  },
  'edexcel.lang.hero_lead_and': { en: ' and a ', ar: ' و' },
  'edexcel.lang.hero_lead_post': {
    en: ' of ten non-fiction texts studied for Paper 1 Section A.',
    ar: ' فيها عشرة نصوص غير أدبية للمذاكرة في Paper 1 Section A.',
  },
  'edexcel.lang.duration_3h15': {
    en: '3h 15m total',
    ar: '٣ ساعات و١٥ دقيقة إجمالاً',
  },
  'edexcel.lang.anth_texts_count': {
    en: '10 anthology texts',
    ar: '١٠ نصوص في الـ Anthology',
  },
  'edexcel.lang.studying_lit_title': {
    en: 'Studying Literature too?',
    ar: 'تذاكر Literature بعد؟',
  },
  'edexcel.lang.studying_lit_body': {
    en: 'See your Pearson Edexcel IGCSE Literature set texts — full study guides for Macbeth, An Inspector Calls, Of Mice and Men and more.',
    ar: 'شوف نصوص Pearson Edexcel IGCSE Literature المقرَّرة — أدلّة مذاكرة كاملة لـ Macbeth، An Inspector Calls، Of Mice and Men، وأكثر.',
  },
  'edexcel.lang.paper1.title': {
    en: 'Paper 1: Non-Fiction Texts and Transactional Writing',
    ar: 'Paper 1: النصوص غير الأدبية والكتابة الإجرائية',
  },
  'edexcel.lang.paper1.meta': {
    en: '1 hour 45 minutes · 60 marks · 60% of total',
    ar: 'ساعة و٤٥ دقيقة · ٦٠ درجة · ٦٠٪ من المجموع',
  },
  'edexcel.lang.paper2.title': {
    en: 'Paper 2: Reading and Writing (Non-Fiction)',
    ar: 'Paper 2: القراءة والكتابة (نصوص غير أدبية)',
  },
  'edexcel.lang.paper2.meta': {
    en: '1 hour 30 minutes · 40 marks · 40% of total',
    ar: 'ساعة و٣٠ دقيقة · ٤٠ درجة · ٤٠٪ من المجموع',
  },
  'edexcel.lang.footer_align': {
    en: 'Aligned with Pearson Edexcel specification 4EA1',
    ar: 'متوافق مع مواصفة Pearson Edexcel رقم 4EA1',
  },
  'edexcel.lang.tool.anthology.title': {
    en: 'Anthology Study',
    ar: 'مذاكرة الـ Anthology',
  },
  'edexcel.lang.tool.anthology.desc': {
    en: 'All 10 non-fiction texts with full analysis',
    ar: 'كل الـ ١٠ نصوص غير الأدبية بتحليل كامل',
  },
  'edexcel.lang.tool.quiz.desc': {
    en: 'Test yourself with language questions',
    ar: 'اختبر نفسك بأسئلة Language',
  },

  // ─── AQA GCSE (canonical labels — no top-level route yet) ────────────
  // No /aqa route exists today, but the AR toggle still needs canonical
  // Khaleeji labels in dictionary form so future AQA hub pages can wire
  // in without re-translating board names. Board codes stay Latin.
  'aqa.board_name': { en: 'AQA', ar: 'AQA' },
  'aqa.gcse_english': { en: 'AQA GCSE English', ar: 'AQA GCSE English' },
  'aqa.gcse_lang_code': { en: '8700', ar: '8700' },
  'aqa.gcse_lit_code': { en: '8702', ar: '8702' },
  'aqa.lang.label': {
    en: 'AQA GCSE English Language (8700)',
    ar: 'AQA GCSE English Language (8700)',
  },
  'aqa.lit.label': {
    en: 'AQA GCSE English Literature (8702)',
    ar: 'AQA GCSE English Literature (8702)',
  },
  'aqa.paper1': { en: 'Paper 1', ar: 'Paper 1' },
  'aqa.paper2': { en: 'Paper 2', ar: 'Paper 2' },
  'aqa.ao1': { en: 'AO1', ar: 'AO1' },
  'aqa.ao2': { en: 'AO2', ar: 'AO2' },
  'aqa.ao3': { en: 'AO3', ar: 'AO3' },
  'aqa.ao4': { en: 'AO4', ar: 'AO4' },
  'aqa.ao5': { en: 'AO5', ar: 'AO5' },
  'aqa.ao6': { en: 'AO6', ar: 'AO6' },

  // ─── Poetry Hub (AQA client + shared poetry hub chrome) ──────────────
  //
  // Poem titles, poet names and anthology cluster names ("Power and
  // Conflict", "Love and Relationships", "Macbeth", "Ozymandias") stay
  // in their original English forms — translating them would mislead
  // a student studying for an English Literature exam. Only UI chrome,
  // headings, CTAs and descriptive copy localise here.
  //
  // AR column follows Khaleeji conventions: شنو, أبغى, وايد, الحين,
  // إحنا, روح, شوف, دوّر, سكّر, ببلاش, لحظة. Levantine forms (شو,
  // كيفك, ليش, بحكي) are banned.

  'poetry_hub.back_to_revision': {
    en: 'Back to Revision Hub',
    ar: 'رجوع لمركز المراجعة',
  },
  'poetry_hub.badge_aqa_anthology': {
    en: 'AQA Poetry Anthology',
    ar: 'مختارات AQA الشِعرية',
  },
  'poetry_hub.change_board': {
    en: 'Change board',
    ar: 'غيّر البورد',
  },
  'poetry_hub.hero_title': {
    en: 'Poetry Revision',
    ar: 'مراجعة الشِعر',
  },
  'poetry_hub.hero_lead': {
    en: 'Master all 30 AQA anthology poems across both clusters. Interactive study pages, key quotations, technique analysis, and comparison practice — everything you need for the poetry exam.',
    ar: 'أتقن الـ٣٠ قصيدة كلهم من مختارات AQA في المجموعتين. صفحات مذاكرة تفاعلية واقتباسات أساسية وتحليل للأساليب وتدريب على المقارنة — كل شي تحتاجه لامتحان الشِعر.',
  },
  'poetry_hub.progress_label': {
    en: 'Poems studied',
    ar: 'القصائد اللي ذاكرتها',
  },
  'poetry_hub.progress_all_done': {
    en: 'All poems studied — amazing work!',
    ar: 'خلصت كل القصائد — شغل وايد عدل!',
  },
  'poetry_hub.progress_keep_going': {
    en: '{percent}% complete — keep going!',
    ar: 'خلصت {percent}٪ — كمّل!',
  },
  'poetry_hub.progress_start': {
    en: 'Start studying poems to track your progress',
    ar: 'ابدأ تذاكر القصائد عشان نتابع تقدّمك',
  },
  'poetry_hub.clusters_heading': {
    en: 'AQA Anthology Clusters',
    ar: 'مجموعات مختارات AQA',
  },
  'poetry_hub.fifteen_poems': {
    en: '15 poems',
    ar: '١٥ قصيدة',
  },
  'poetry_hub.cta_study_pc': {
    en: 'Study Power & Conflict',
    ar: 'ذاكر Power & Conflict',
  },
  'poetry_hub.cta_study_lr': {
    en: 'Study Love & Relationships',
    ar: 'ذاكر Love & Relationships',
  },
  'poetry_hub.all_30_heading': {
    en: 'All 30 AQA Poems',
    ar: 'كل الـ٣٠ قصيدة من AQA',
  },
  'poetry_hub.unseen_heading': {
    en: 'Unseen Poetry',
    ar: 'الشِعر غير المرئي مسبقاً',
  },
  'poetry_hub.unseen_title': {
    en: 'Tackling Unseen Poetry',
    ar: 'كيف تتعامل مع الشِعر غير المرئي',
  },
  'poetry_hub.unseen_intro': {
    en: 'Section C of the poetry paper tests your ability to analyse a poem you have never seen before. Here are the key strategies:',
    ar: 'Section C من ورقة الشِعر يختبر قدرتك على تحليل قصيدة ما شفتها من قبل. هذي أهم الاستراتيجيات:',
  },
  'poetry_hub.unseen_tip_1': {
    en: 'Read the poem twice — once for meaning, once for technique',
    ar: 'اقرا القصيدة مرتين — مرة للمعنى ومرة للأسلوب',
  },
  'poetry_hub.unseen_tip_2': {
    en: 'Annotate as you read: circle key words, underline imagery',
    ar: 'علِّم وانت تقرا: حوّط الكلمات المفتاحية وسطّر الصور البلاغية',
  },
  'poetry_hub.unseen_tip_3': {
    en: 'Identify the speaker, audience, and situation',
    ar: 'حدّد المتكلم والمستمع والموقف',
  },
  'poetry_hub.unseen_tip_4': {
    en: 'Comment on structure: form, stanzas, line length, enjambment',
    ar: 'علّق على البنية: الشكل والمقاطع وطول السطر و enjambment',
  },
  'poetry_hub.unseen_tip_5': {
    en: 'Analyse language: imagery, word choice, sound devices',
    ar: 'حلِّل اللغة: الصور البلاغية واختيار الكلمات والأساليب الصوتية',
  },
  'poetry_hub.unseen_tip_6': {
    en: 'Always explain the effect on the reader, not just name devices',
    ar: 'فسِّر دايماً تأثير الأسلوب على القارئ، مو بس تذكر اسم الأسلوب',
  },
  'poetry_hub.unseen_cta': {
    en: 'Practise unseen poetry',
    ar: 'تدرّب على الشِعر غير المرئي',
  },
  'poetry_hub.techniques_heading': {
    en: 'Poetry Techniques',
    ar: 'أساليب الشِعر',
  },
  'poetry_hub.techniques_intro': {
    en: "Key poetic devices you need to know for the exam. Learn to identify them, explain their effect, and link them to the poem's themes.",
    ar: 'أهم الأساليب الشعرية اللي لازم تعرفها للامتحان. اتعلّم كيف تحدّدها وتفسّر تأثيرها وتربطها بمواضيع القصيدة.',
  },
  'poetry_hub.techniques_cta': {
    en: 'Full techniques guide',
    ar: 'دليل الأساليب الكامل',
  },
  'poetry_hub.comparison_heading': {
    en: 'Comparison Practice',
    ar: 'تدريب على المقارنة',
  },
  'poetry_hub.comparison_intro': {
    en: 'The exam will ask you to compare a named poem with one of your choice. Practise these popular pairings to build confidence in weaving both poems together.',
    ar: 'الامتحان بيطلب منك تقارن قصيدة محدّدة مع قصيدة ثانية من اختيارك. تدرّب على هذي الأزواج المشهورة عشان تبني ثقتك في ربط القصيدتين مع بعض.',
  },
  'poetry_hub.sharpen_heading': {
    en: 'Sharpen Your Poetry Marks',
    ar: 'طوّر درجاتك في الشِعر',
  },
  'poetry_hub.motivational_heading': {
    en: 'Start with one poem a day',
    ar: 'ابدأ بقصيدة وحدة في اليوم',
  },
  'poetry_hub.motivational_body': {
    en: 'Studying just one poem per day means you will cover the entire anthology in a month. Pick the poem you find hardest and start there — progress beats perfection.',
    ar: 'إذا ذاكرت قصيدة وحدة بس كل يوم، بتغطي المختارات كاملة في شهر. اختر القصيدة اللي تشوفها أصعب وابدأ منها — التقدّم أهم من الكمال.',
  },
  'poetry_hub.motivational_cta': {
    en: 'Start with Ozymandias',
    ar: 'ابدأ بـ Ozymandias',
  },

  // Poetry techniques (names in EN stay, descriptions localise)
  'poetry_hub.technique.metaphor.name': { en: 'Metaphor', ar: 'الاستعارة' },
  'poetry_hub.technique.metaphor.desc': {
    en: 'A direct comparison without using "like" or "as"',
    ar: 'مقارنة مباشرة بدون استخدام "مثل" أو "كأن"',
  },
  'poetry_hub.technique.simile.name': { en: 'Simile', ar: 'التشبيه' },
  'poetry_hub.technique.simile.desc': {
    en: 'A comparison using "like" or "as"',
    ar: 'مقارنة باستخدام "مثل" أو "كأن"',
  },
  'poetry_hub.technique.enjambment.name': { en: 'Enjambment', ar: 'Enjambment (تجاوز السطر)' },
  'poetry_hub.technique.enjambment.desc': {
    en: 'A sentence or phrase running over the end of a line',
    ar: 'جملة أو عبارة تستمر بعد نهاية السطر',
  },
  'poetry_hub.technique.caesura.name': { en: 'Caesura', ar: 'Caesura (الوقفة)' },
  'poetry_hub.technique.caesura.desc': {
    en: 'A pause in the middle of a line, often using punctuation',
    ar: 'وقفة في وسط السطر، عادةً باستخدام علامات الترقيم',
  },
  'poetry_hub.technique.volta.name': { en: 'Volta', ar: 'Volta (التحوّل)' },
  'poetry_hub.technique.volta.desc': {
    en: 'A turn or shift in argument or tone within a poem',
    ar: 'تحوّل في الفكرة أو النبرة داخل القصيدة',
  },
  'poetry_hub.technique.sibilance.name': { en: 'Sibilance', ar: 'Sibilance (تكرار الصفير)' },
  'poetry_hub.technique.sibilance.desc': {
    en: 'Repetition of "s" and "sh" sounds',
    ar: 'تكرار صوتي الـ"س" والـ"ش"',
  },
  'poetry_hub.technique.dramatic_monologue.name': {
    en: 'Dramatic monologue',
    ar: 'المونولوغ الدرامي',
  },
  'poetry_hub.technique.dramatic_monologue.desc': {
    en: 'A poem written as a speech by a single character',
    ar: 'قصيدة مكتوبة على شكل خطاب من شخصية وحدة',
  },
  'poetry_hub.technique.personification.name': { en: 'Personification', ar: 'التشخيص' },
  'poetry_hub.technique.personification.desc': {
    en: 'Giving human qualities to non-human things',
    ar: 'إعطاء صفات بشرية لأشياء غير بشرية',
  },
  'poetry_hub.technique.juxtaposition.name': { en: 'Juxtaposition', ar: 'المقابلة' },
  'poetry_hub.technique.juxtaposition.desc': {
    en: 'Placing contrasting ideas side by side for effect',
    ar: 'وضع أفكار متناقضة جنب بعض عشان التأثير',
  },
  'poetry_hub.technique.pathetic_fallacy.name': {
    en: 'Pathetic fallacy',
    ar: 'Pathetic Fallacy (المغالطة العاطفية)',
  },
  'poetry_hub.technique.pathetic_fallacy.desc': {
    en: 'Using weather or nature to reflect mood or emotion',
    ar: 'استخدام الطقس أو الطبيعة لعكس المزاج أو العاطفة',
  },
  'poetry_hub.technique.oxymoron.name': { en: 'Oxymoron', ar: 'الطباق' },
  'poetry_hub.technique.oxymoron.desc': {
    en: 'Two contradictory words placed together',
    ar: 'كلمتين متناقضتين موضوعتين مع بعض',
  },
  'poetry_hub.technique.semantic_field.name': { en: 'Semantic field', ar: 'الحقل الدلالي' },
  'poetry_hub.technique.semantic_field.desc': {
    en: 'A group of words related to a particular theme or subject',
    ar: 'مجموعة كلمات مرتبطة بموضوع أو فكرة معيّنة',
  },

  // Comparison pairings — theme labels + tips
  'poetry_hub.pair.power_of_nature.theme': { en: 'Power of Nature', ar: 'قوة الطبيعة' },
  'poetry_hub.pair.power_of_nature.tip': {
    en: 'Compare how both poets present nature as a threatening, uncontrollable force.',
    ar: 'قارن كيف الشاعرين يقدّمون الطبيعة كقوة مهدِّدة ما تنحكم.',
  },
  'poetry_hub.pair.effects_of_conflict.theme': { en: 'Effects of Conflict', ar: 'آثار الصراع' },
  'poetry_hub.pair.effects_of_conflict.tip': {
    en: 'Explore psychological trauma and how memories of conflict haunt both speakers.',
    ar: 'استكشف الصدمة النفسية وكيف ذكريات الصراع تطارد المتكلمين في القصيدتين.',
  },
  'poetry_hub.pair.loss_of_power.theme': { en: 'Loss of Power', ar: 'فقدان السلطة' },
  'poetry_hub.pair.loss_of_power.tip': {
    en: 'Examine how both poems present rulers who try to control but ultimately fail.',
    ar: 'ادرس كيف القصيدتين يقدّمون حكاماً يحاولون السيطرة لكن يفشلون في النهاية.',
  },
  'poetry_hub.pair.identity_and_place.theme': { en: 'Identity and Place', ar: 'الهوية والمكان' },
  'poetry_hub.pair.identity_and_place.tip': {
    en: 'Compare how both speakers assert their identity against dominant powers.',
    ar: 'قارن كيف المتكلمين يثبّتون هويتهم في وجه القوى المسيطرة.',
  },
  'poetry_hub.pair.parental_love.theme': { en: 'Parental Love', ar: 'حب الوالدين' },
  'poetry_hub.pair.parental_love.tip': {
    en: 'Explore the shifting dynamic between parent and child over time.',
    ar: 'استكشف العلاقة المتغيّرة بين الوالد والطفل على مرّ الوقت.',
  },
  'poetry_hub.pair.desire_obsession.theme': { en: 'Desire and Obsession', ar: 'الرغبة والهَوَس' },
  'poetry_hub.pair.desire_obsession.tip': {
    en: 'Compare passionate desire — one healthy, one dangerously possessive.',
    ar: 'قارن الرغبة العاطفية — وحدة صحيّة، والثانية تملّكية وخطيرة.',
  },
  'poetry_hub.pair.memory_and_loss.theme': { en: 'Memory and Loss', ar: 'الذكرى والفقد' },
  'poetry_hub.pair.memory_and_loss.tip': {
    en: 'Both poems use nature imagery to convey the pain of a relationship ending.',
    ar: 'القصيدتين يستخدمون صور الطبيعة عشان ينقلون ألم نهاية العلاقة.',
  },
  'poetry_hub.pair.distance.theme': { en: 'Distance in Relationships', ar: 'البُعد في العلاقات' },
  'poetry_hub.pair.distance.tip': {
    en: 'Explore how physical distance reveals emotional connection or growing independence.',
    ar: 'استكشف كيف البُعد الجسدي يكشف الترابط العاطفي أو الاستقلالية المتزايدة.',
  },

  // Related-revision cards (Sharpen Your Poetry Marks)
  'poetry_hub.related.essay_structure.title': { en: 'Essay Structure', ar: 'بنية المقال' },
  'poetry_hub.related.essay_structure.desc': {
    en: 'Build sustained poetry comparisons.',
    ar: 'ابني مقارنات شِعر متماسكة.',
  },
  'poetry_hub.related.compare_command.title': {
    en: 'Compare Command Words',
    ar: 'كلمات أوامر المقارنة',
  },
  'poetry_hub.related.compare_command.desc': {
    en: 'Decode the comparison question.',
    ar: 'افهم سؤال المقارنة.',
  },
  'poetry_hub.related.grade_9.title': { en: 'Grade 9 Poetry', ar: 'شِعر Grade 9' },
  'poetry_hub.related.grade_9.desc': {
    en: 'Conceptualised, top-band readings.',
    ar: 'قراءات مفاهيمية من الفئة العليا.',
  },
  'poetry_hub.related.quizzes.title': { en: 'Poetry Quizzes', ar: 'اختبارات الشِعر' },
  'poetry_hub.related.quizzes.desc': {
    en: 'Test your quote and context recall.',
    ar: 'اختبر قدرتك على تذكّر الاقتباسات والسياق.',
  },

  // ─── Anthology Hub (Edexcel IGCSE Language A 4EA1 — and shared
  //     anthology-hub chrome). Text titles + author names stay in
  //     original English.

  'anthology_hub.back_to_lang_a': {
    en: 'Back to Language A',
    ar: 'رجوع لـ Language A',
  },
  'anthology_hub.badge_paper': {
    en: 'Paper 1 Section A',
    ar: 'Paper 1 Section A',
  },
  'anthology_hub.badge_texts_count': {
    en: '10 texts',
    ar: '١٠ نصوص',
  },
  'anthology_hub.hero_title': {
    en: 'Paper 1 Section A — Anthology Non-Fiction',
    ar: 'Paper 1 Section A — نصوص غير قصصية من المختارات',
  },
  'anthology_hub.hero_lead': {
    en: 'Ten prescribed non-fiction texts for Edexcel IGCSE English Language A Paper 1. Each text has been analysed with language features, structural analysis, key vocabulary and exam-style practice questions.',
    ar: 'عشر نصوص غير قصصية مقرّرة لـ Edexcel IGCSE English Language A Paper 1. كل نص متحلّل مع الخصائص اللغوية والتحليل البنائي والمفردات الأساسية وأسئلة على شكل امتحان.',
  },
  'anthology_hub.cta_start_studying': {
    en: 'Start studying',
    ar: 'ابدأ المذاكرة',
  },
  'anthology_hub.version_warning_label': {
    en: 'Anthology version warning:',
    ar: 'تنبيه نسخة المختارات:',
  },
  'anthology_hub.version_warning_body': {
    en: 'This site teaches the Edexcel IGCSE Anthology Issue 2. Two of the non-fiction texts are adapted versions that differ from their freely-available online originals.',
    ar: 'هذا الموقع يدرّس Edexcel IGCSE Anthology Issue 2. نصّين من النصوص غير القصصية نسخ معدّلة تختلف عن الأصول المتاحة أونلاين ببلاش.',
  },
  'anthology_hub.use_anthology_emph': {
    en: 'Always use the anthology version',
    ar: 'استخدم نسخة المختارات دايماً',
  },
  'anthology_hub.use_anthology_body': {
    en: 'when answering Edexcel exam questions — examiners will mark against the anthology text, not the online originals.',
    ar: 'لما تجاوب أسئلة Edexcel — المصحّحون يصحّحون بناءً على نص المختارات، مو النسخ الأصلية اللي أونلاين.',
  },
  'anthology_hub.texts_heading': {
    en: 'All 10 Anthology Texts',
    ar: 'كل الـ١٠ نصوص من المختارات',
  },
  'anthology_hub.texts_intro': {
    en: "Each text page includes key extracts, language and structural analysis, writer's purpose, vocabulary, exam practice and comparison links. Select a text to begin your study.",
    ar: 'كل صفحة نص فيها مقاطع أساسية وتحليل لغوي وبنائي وأهداف الكاتب والمفردات وتمارين امتحان وروابط المقارنة. اختر نص عشان تبدأ.',
  },
  'anthology_hub.text_index_prefix': {
    en: 'Text',
    ar: 'نص',
  },
  'anthology_hub.study_this_text': {
    en: 'Study this text',
    ar: 'ذاكر هذا النص',
  },
  'anthology_hub.expect_heading': {
    en: 'Paper 1 Section A — What to Expect',
    ar: 'Paper 1 Section A — شنو تتوقّع',
  },
  'anthology_hub.expect_intro': {
    en: 'In Paper 1 Section A you will be given an extract from one of the ten anthology texts. You will answer three types of question:',
    ar: 'في Paper 1 Section A بيعطونك مقطع من أحد النصوص العشرة. بتجاوب على ثلاث أنواع أسئلة:',
  },
  'anthology_hub.expect_q1_label': {
    en: 'Retrieval (Q1):',
    ar: 'الاسترجاع (Q1):',
  },
  'anthology_hub.expect_q1_body': {
    en: '"List four things about..." — straightforward identification of information from the text.',
    ar: '"اذكر أربعة أشياء عن…" — استخراج مباشر للمعلومات من النص.',
  },
  'anthology_hub.expect_q2_label': {
    en: 'Language analysis (Q2):',
    ar: 'تحليل اللغة (Q2):',
  },
  'anthology_hub.expect_q2_body': {
    en: '"How does the writer use language to..." — close analysis of techniques and their effects on the reader.',
    ar: '"كيف يستخدم الكاتب اللغة لـ…" — تحليل دقيق للأساليب وتأثيرها على القارئ.',
  },
  'anthology_hub.expect_q3_label': {
    en: 'Comparison (Q3):',
    ar: 'المقارنة (Q3):',
  },
  'anthology_hub.expect_q3_body': {
    en: 'A comparison question linking the named extract to a second text from the anthology.',
    ar: 'سؤال مقارنة يربط المقطع المحدّد بنص ثاني من المختارات.',
  },
  'anthology_hub.study_all_note': {
    en: 'You should study all ten anthology texts. Examiners can set Q1 and Q2 on any one of them.',
    ar: 'لازم تذاكر كل النصوص العشرة. المصحّحون يقدرون يحطّون Q1 و Q2 على أي نص منها.',
  },
  'anthology_hub.footer_align': {
    en: 'Aligned to the Edexcel IGCSE English Language A 4EA1 specification.',
    ar: 'مُتوافق مع مواصفات Edexcel IGCSE English Language A 4EA1.',
  },

  // ─── Deep analysis sub-pages (per-text [slug] routes) ──────────────
  // Chrome strings only — literary body content (essay paragraphs,
  // marker annotations, historical-context paragraphs) stays in source
  // language. Khaleeji conventions: شنو / شلون / شوف / دوّر / روح /
  // ببلاش / أبغى / وايد / الحين / إحنا. NO Levantine (شو / كيفك / ليش).
  // Brand + GCSE / IGCSE / AQA / Edexcel / OCR / Pearson stay Latin.
  // Gender policy: binary M/F. Student-facing copy uses neutral
  // imperatives ("شوف", "راجع", "ادرس") so it reads naturally either way.

  // ── Model-essay deep page (revision/model-essays/[text]/[slug]) ──
  'analysis.deep.model_essay.back_to_essays': {
    en: 'Back to model essays',
    ar: 'رجوع للمقالات النموذجية',
  },
  'analysis.deep.model_essay.grade_prefix': { en: 'Grade', ar: 'Grade' },
  'analysis.deep.model_essay.words_suffix': { en: 'words', ar: 'كلمة' },
  'analysis.deep.model_essay.key_techniques': {
    en: 'Key techniques',
    ar: 'التقنيات المهمة',
  },
  'analysis.deep.model_essay.paragraph_label': { en: 'Paragraph', ar: 'فقرة' },
  'analysis.deep.model_essay.annotation_for': {
    en: 'Annotation for paragraph',
    ar: 'شرح الفقرة',
  },
  'analysis.deep.model_essay.markers_notes': {
    en: "Marker's notes",
    ar: 'ملاحظات المصحّح',
  },
  'analysis.deep.model_essay.footer_h2': {
    en: 'Use this essay well',
    ar: 'استفد من المقال صح',
  },
  'analysis.deep.model_essay.footer_body': {
    en: "Don't copy the words — copy the moves. Notice how each paragraph opens with a committed argument, embeds a short quotation inside a sentence about method, and only then reaches for context. Try writing your own answer to a comparable question and self-mark against the annotations.",
    ar: 'ما تنسخ الكلمات — انسخ الحركات. شوف شلون كل فقرة تفتح بحجّة واضحة، وتدمج اقتباس قصير داخل جملة عن الأسلوب، وبعدين توصل للسياق. جرّب اكتب إجابتك على سؤال شبيه وصحّح بنفسك بالاستعانة بالشرح.',
  },
  'analysis.deep.model_essay.cta_revision_hub': {
    en: 'Revision hub',
    ar: 'مركز المراجعة',
  },
  'analysis.deep.model_essay.fair_dealing_prefix': {
    en: 'Fair-dealing notice: this essay is original revision material written by The English Hub. Any quotations from',
    ar: 'تنبيه حقوق الاقتباس: هذا المقال مادة مراجعة أصلية كتبها The English Hub. أي اقتباسات من',
  },
  'analysis.deep.model_essay.fair_dealing_suffix': {
    en: 'are reproduced as short fair-dealing extracts for the purpose of criticism and review under section 30 of the Copyright, Designs and Patents Act 1988. All rights in the underlying primary text remain with the original rightsholders.',
    ar: 'منشورة كمقتطفات قصيرة لغرض النقد والمراجعة تحت قسم ٣٠ من قانون Copyright, Designs and Patents Act 1988. وكل الحقوق في النص الأصلي تبقى لأصحابها.',
  },
  'analysis.deep.model_essay.fallback_title': {
    en: 'Model essay — The English Hub',
    ar: 'مقال نموذجي — The English Hub',
  },

  // ── Model-essays index page (revision/model-essays) ──
  // Chrome only — exam-text labels (Macbeth, Jekyll, etc.) stay literary
  // content. Author/work descriptions stay literary so students see the
  // canonical phrasing examiners use. EVERYTHING else routes through t().
  'revision.model_essays.index.meta_title': {
    en: 'Grade-9 Model Essays — Annotated Paragraph-by-Paragraph | The English Hub',
    ar: 'مقالات نموذجية Grade-9 — شرح فقرة بفقرة | The English Hub',
  },
  'revision.model_essays.index.meta_description': {
    en: 'Annotated Grade-9 model essays for Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, and Romeo and Juliet. Paragraph-by-paragraph commentary so you can see exactly how a top-band response is built.',
    ar: 'مقالات نموذجية مشروحة Grade-9 على Macbeth و An Inspector Calls و A Christmas Carol و Jekyll and Hyde و Romeo and Juliet. شرح فقرة بفقرة عشان تشوف بالضبط شلون تتبني الإجابة من عيار Grade-9.',
  },
  'revision.model_essays.index.og_title': {
    en: 'Grade-9 Model Essays — Annotated Paragraph-by-Paragraph',
    ar: 'مقالات نموذجية Grade-9 — شرح فقرة بفقرة',
  },
  'revision.model_essays.index.og_description': {
    en: 'Top-band annotated model essays for the most-taught GCSE Literature texts. Each essay is broken down paragraph-by-paragraph with technique commentary.',
    ar: 'مقالات نموذجية مشروحة من أعلى فئة على أكثر نصوص GCSE Literature تدريساً. كل مقال متفصّل فقرة بفقرة مع تعليق على الأسلوب.',
  },
  'revision.model_essays.index.back_to_revision_hub': {
    en: 'Back to Revision Hub',
    ar: 'رجوع لمركز المراجعة',
  },
  'revision.model_essays.index.badge_model_essays': {
    en: 'Model essays',
    ar: 'مقالات نموذجية',
  },
  'revision.model_essays.index.annotated_essays_singular': {
    en: 'annotated essay',
    ar: 'مقال مشروح',
  },
  'revision.model_essays.index.annotated_essays_plural': {
    en: 'annotated essays',
    ar: 'مقالات مشروحة',
  },
  'revision.model_essays.index.h1': {
    en: 'Grade-9 model essays — annotated paragraph-by-paragraph',
    ar: 'مقالات نموذجية Grade-9 — شرح فقرة بفقرة',
  },
  'revision.model_essays.index.hero_body': {
    en: 'Read a top-band response, then read the marker’s thinking next to every paragraph. Each essay is broken into the moves a Grade-9 candidate makes — thesis, embedded quotation, methodical AO2, deft AO3 — so you can copy the structure, not the words.',
    ar: 'اقرأ إجابة من أعلى فئة، وبعدين شوف تفكير المصحّح جنب كل فقرة. كل مقال متقسّم على الحركات اللي يسوّيها طالب Grade-9 — الحجّة، الاقتباس المدمج، تحليل AO2 منهجي، AO3 ذكي — عشان تنسخ الشكل، مو الكلمات.',
  },
  'revision.model_essays.index.tagline_macbeth': {
    en: 'Ambition, guilt and the supernatural in Shakespeare’s shortest tragedy.',
    ar: 'الطموح والذنب والخوارق في أقصر تراجيديا كتبها Shakespeare.',
  },
  'revision.model_essays.index.tagline_inspector_calls': {
    en: 'Priestley’s morality play on collective responsibility and class.',
    ar: 'مسرحية أخلاقية لـ Priestley عن المسؤولية الجماعية والطبقة الاجتماعية.',
  },
  'revision.model_essays.index.tagline_christmas_carol': {
    en: 'Dickens’s allegorical novella on transformation, charity, and want.',
    ar: 'رواية رمزية قصيرة لـ Dickens عن التحوّل والإحسان والحاجة.',
  },
  'revision.model_essays.index.tagline_jekyll_hyde': {
    en: 'Stevenson’s Gothic study of duality and the Victorian self.',
    ar: 'دراسة قوطية لـ Stevenson عن الازدواجية والذات الفيكتورية.',
  },
  'revision.model_essays.index.tagline_romeo_juliet': {
    en: 'Shakespeare’s tragedy of love, fate, and feud.',
    ar: 'تراجيديا Shakespeare عن الحب والقدر والثأر.',
  },
  'revision.model_essays.index.count_essay_singular': { en: 'essay', ar: 'مقال' },
  'revision.model_essays.index.count_essay_plural': { en: 'essays', ar: 'مقالات' },
  'revision.model_essays.index.empty_state_prefix': {
    en: 'Model essays for',
    ar: 'المقالات النموذجية لـ',
  },
  'revision.model_essays.index.empty_state_suffix': {
    en: 'are being written and will appear here shortly.',
    ar: 'قيد الكتابة الحين وبتظهر هنا قريب.',
  },
  'revision.model_essays.index.card_grade_prefix': { en: 'Grade', ar: 'Grade' },
  'revision.model_essays.index.card_words_suffix': { en: 'words', ar: 'كلمة' },
  'revision.model_essays.index.card_more_suffix': { en: 'more', ar: 'إضافية' },
  'revision.model_essays.index.card_view_essay': {
    en: 'View annotated essay',
    ar: 'شوف المقال المشروح',
  },
  'revision.model_essays.index.footer_h2': {
    en: 'About these model essays',
    ar: 'عن المقالات النموذجية',
  },
  'revision.model_essays.index.footer_body': {
    en: 'All essays are written by The English Hub for revision use. Any quoted text from the primary works is reproduced as a short fair-dealing extract for the purpose of criticism and review under section 30 of the Copyright, Designs and Patents Act 1988.',
    ar: 'كل المقالات مكتوبة من The English Hub لغرض المراجعة. أي نص مقتبس من الأعمال الأصلية منشور كمقتطف قصير لغرض النقد والمراجعة تحت قسم ٣٠ من قانون Copyright, Designs and Patents Act 1988.',
  },

  // ── Set-text deep page (revision/texts/[slug]) ─────────────────────
  'analysis.deep.set_text.back_to_texts': {
    en: 'Back to set texts',
    ar: 'رجوع للنصوص المقررة',
  },
  'analysis.deep.set_text.back_to_all_texts': {
    en: 'Back to all set texts',
    ar: 'رجوع لكل النصوص المقررة',
  },
  'analysis.deep.set_text.by_author': { en: 'by', ar: 'تأليف' },
  'analysis.deep.set_text.boards_one': { en: '1 exam board', ar: 'بورد امتحان واحد' },
  'analysis.deep.set_text.boards_many_suffix': {
    en: 'exam boards',
    ar: 'بوردات امتحان',
  },
  'analysis.deep.set_text.cat.shakespeare': { en: 'Shakespeare', ar: 'Shakespeare' },
  'analysis.deep.set_text.cat.nineteenth': {
    en: '19th-Century Novel',
    ar: 'رواية القرن التاسع عشر',
  },
  'analysis.deep.set_text.cat.modern': { en: 'Modern Text', ar: 'نص حديث' },
  'analysis.deep.set_text.cat.poetry_anthology': {
    en: 'Poetry Anthology',
    ar: 'أنثولوجي الشعر',
  },
  'analysis.deep.set_text.cat.non_fiction': {
    en: 'Non-Fiction Anthology',
    ar: 'أنثولوجي غير الخيال',
  },
  'analysis.deep.set_text.cat.prose': {
    en: 'Anthology Prose',
    ar: 'نثر الأنثولوجي',
  },
  'analysis.deep.set_text.resources_h2': {
    en: 'Study Resources',
    ar: 'موارد الدراسة',
  },
  'analysis.deep.set_text.resources_intro_prefix': {
    en: 'Everything we have on',
    ar: 'كل اللي عندنا عن',
  },
  'analysis.deep.set_text.resources_intro_suffix': {
    en: 'in one place.',
    ar: 'في مكان واحد.',
  },
  'analysis.deep.set_text.notes_title': {
    en: 'Revision notes',
    ar: 'ملاحظات المراجعة',
  },
  'analysis.deep.set_text.notes_desc': {
    en: 'Concise revision notes covering plot, characters, context and themes.',
    ar: 'ملاحظات مراجعة مختصرة تغطي الحبكة، الشخصيات، السياق، والثيمات.',
  },
  'analysis.deep.set_text.notes_cta': {
    en: 'Open revision notes',
    ar: 'افتح ملاحظات المراجعة',
  },
  'analysis.deep.set_text.analysis_title': {
    en: 'In-depth analysis',
    ar: 'تحليل معمّق',
  },
  'analysis.deep.set_text.analysis_desc': {
    en: 'Long-form essays and quote-by-quote analysis written for top grades.',
    ar: 'مقالات طويلة وتحليل اقتباس باقتباس مكتوبة لدرجات عالية.',
  },
  'analysis.deep.set_text.analysis_cta': { en: 'Read analysis', ar: 'اقرا التحليل' },
  'analysis.deep.set_text.igcse_title': {
    en: 'Edexcel IGCSE guide',
    ar: 'دليل Edexcel IGCSE',
  },
  'analysis.deep.set_text.igcse_desc': {
    en: 'Plot beats, characters, themes and key quotations for the IGCSE prose paper.',
    ar: 'لحظات الحبكة، الشخصيات، الثيمات، والاقتباسات المهمة لورقة IGCSE prose.',
  },
  'analysis.deep.set_text.igcse_cta': {
    en: 'Open IGCSE guide',
    ar: 'افتح دليل IGCSE',
  },
  'analysis.deep.set_text.quiz_title': {
    en: 'Active recall quiz',
    ar: 'اختبار التذكّر النشط',
  },
  'analysis.deep.set_text.quiz_desc': {
    en: 'Test your knowledge with quote-completion and theme-matching questions.',
    ar: 'اختبر معلوماتك بأسئلة إكمال الاقتباسات ومطابقة الثيمات.',
  },
  'analysis.deep.set_text.quiz_cta': {
    en: 'Open the quiz hub',
    ar: 'افتح مركز الاختبارات',
  },
  'analysis.deep.set_text.how_to_revise_prefix': {
    en: 'How to revise',
    ar: 'شلون تراجع',
  },
  'analysis.deep.set_text.how_to_revise_intro': {
    en: 'Follow these steps for high-impact revision. The best students do not just re-read the text — they actively engage with quotation, structure and writer’s intentions.',
    ar: 'اتبع الخطوات للمراجعة المؤثرة. أحسن الطلاب ما يكتفون بإعادة القراءة — يشتغلون بنشاط على الاقتباسات والبنية ومقاصد الكاتب.',
  },
  'analysis.deep.set_text.tip1_h3': {
    en: 'Memorise short quotations',
    ar: 'احفظ اقتباسات قصيرة',
  },
  'analysis.deep.set_text.tip1_body': {
    en: 'Aim for 10–15 short, versatile quotations. Choose ones that link to multiple themes and contain analysable language techniques.',
    ar: 'استهدف ١٠ إلى ١٥ اقتباس قصير ومرن. اختر اللي يربط بثيمات متعددة ويحتوي على تقنيات لغوية قابلة للتحليل.',
  },
  'analysis.deep.set_text.tip2_h3': {
    en: 'Track character development',
    ar: 'تابع تطور الشخصيات',
  },
  'analysis.deep.set_text.tip2_body': {
    en: 'Note how each major character changes from start to finish, and what those changes reveal about the writer’s message.',
    ar: 'دوّن شلون كل شخصية رئيسية تتغير من البداية للنهاية، وشنو يكشف هذا التغير عن رسالة الكاتب.',
  },
  'analysis.deep.set_text.tip3_h3': {
    en: 'Connect themes to context',
    ar: 'اربط الثيمات بالسياق',
  },
  'analysis.deep.set_text.tip3_body': {
    en: 'Always explain why the writer made specific choices. Link themes to the historical, social or biographical context of the text.',
    ar: 'دايماً فسّر ليش الكاتب اختار خيارات محددة. اربط الثيمات بالسياق التاريخي أو الاجتماعي أو الذاتي للنص.',
  },
  'analysis.deep.set_text.tip4_h3': {
    en: 'Plan timed essays',
    ar: 'خطّط مقالات بوقت محدد',
  },
  'analysis.deep.set_text.tip4_body': {
    en: 'Practise plans under timed conditions. Aim for three clear paragraphs, each with a quotation, analysis and contextual link.',
    ar: 'تدرّب على التخطيط بوقت محدد. استهدف ثلاث فقرات واضحة، كل وحدة فيها اقتباس وتحليل ورابط سياقي.',
  },
  'analysis.deep.set_text.not_found_title': {
    en: 'Set Text Not Found | The English Hub',
    ar: 'النص المقرر غير موجود | The English Hub',
  },
  'analysis.deep.set_text.not_found_desc': {
    en: 'The set text you are looking for could not be found.',
    ar: 'النص المقرر اللي تدوّر عليه ما لقيناه.',
  },

  // ── Pearson IGCSE poetry deep page ─────────────────────────────────
  'analysis.deep.pearson_poetry.back_to_pearson': {
    en: 'Back to Pearson IGCSE Poetry',
    ar: 'رجوع لشعر Pearson IGCSE',
  },
  'analysis.deep.pearson_poetry.poetry_anthology': {
    en: 'Poetry Anthology',
    ar: 'أنثولوجي الشعر',
  },
  'analysis.deep.pearson_poetry.lang_a_badge': {
    en: 'Edexcel IGCSE Language A (4EA1)',
    ar: 'Edexcel IGCSE Language A (4EA1)',
  },
  'analysis.deep.pearson_poetry.issue_2_badge': {
    en: 'Anthology Issue 2',
    ar: 'الإصدار الثاني من الأنثولوجي',
  },
  'analysis.deep.pearson_poetry.by_author': { en: 'by', ar: 'تأليف' },
  'analysis.deep.pearson_poetry.not_found_title': {
    en: 'Poem Not Found | The English Hub',
    ar: 'القصيدة غير موجودة | The English Hub',
  },
  'analysis.deep.pearson_poetry.not_found_desc': {
    en: 'The poem you are looking for could not be found.',
    ar: 'القصيدة اللي تدوّر عليها ما لقيناها.',
  },

  // ── Shared stub-study-guide component (poetry / text placeholders) ──
  'analysis.deep.stub.lang_a_badge': {
    en: 'Pearson IGCSE Language A (4EA1)',
    ar: 'Pearson IGCSE Language A (4EA1)',
  },
  'analysis.deep.stub.by_author': { en: 'by', ar: 'تأليف' },
  'analysis.deep.stub.uk_rights_h3': {
    en: 'UK rights notice',
    ar: 'تنبيه الحقوق في المملكة المتحدة',
  },
  'analysis.deep.stub.in_production_h3': {
    en: 'Study guide in production',
    ar: 'دليل الدراسة قيد الإعداد',
  },
  'analysis.deep.stub.in_production_p1_prefix': {
    en: 'We are currently writing a full study guide for',
    ar: 'إحنا الحين نكتب دليل دراسة كامل لـ',
  },
  'analysis.deep.stub.in_production_p1_suffix': {
    en: ': line-by-line analysis, language and structure features, key vocabulary and exam-style practice questions aligned with the Pearson Edexcel International GCSE English Language A (4EA1) mark scheme.',
    ar: ': تحليل سطر بسطر، خصائص اللغة والبنية، المفردات المهمة، وأسئلة تدريب بأسلوب الامتحان متوافقة مع مخطط تصحيح Pearson Edexcel International GCSE English Language A (4EA1).',
  },
  'analysis.deep.stub.in_production_p2': {
    en: 'In the meantime you can revise other anthology texts, work through writing-skills sessions, or use the unseen-poetry and unseen-prose practice in the IGCSE hub.',
    ar: 'في هذي الفترة تقدر تراجع نصوص الأنثولوجي الثانية، تشتغل على جلسات مهارات الكتابة، أو تستخدم تدريب الشعر غير المرئي والنثر غير المرئي في مركز IGCSE.',
  },
  'analysis.deep.stub.cta_browse_texts': {
    en: 'Browse other set texts',
    ar: 'تصفح نصوص مقررة ثانية',
  },
  'analysis.deep.stub.cta_lang_a_hub': {
    en: 'IGCSE Language A hub',
    ar: 'مركز IGCSE Language A',
  },
  'analysis.deep.stub.default_back_label': {
    en: 'Back to set texts',
    ar: 'رجوع للنصوص المقررة',
  },

  // ─── Pricing page: deep wave 2 — feature tables, FAQ, steps ─────────
  // Wires the still-hardcoded "deeper" surfaces on /pricing — competitor
  // comparison table cells, the "Always free / Premium" feature lists,
  // step labels under "How free access works", and the full FAQ body.
  'pricing.feat.student_free.exam_aligned': {
    en: 'Exam-board aligned courses',
    ar: 'كورسات متوافقة مع بورد الامتحان',
  },
  'pricing.feat.student_free.revision_notes': {
    en: 'Revision notes',
    ar: 'ملخصات المراجعة',
  },
  'pricing.feat.student_free.flashcards': { en: 'Flashcards', ar: 'بطاقات تعليمية' },
  'pricing.feat.student_premium.essay_marking': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
  },
  'pricing.feat.student_premium.revision_notes': {
    en: 'AI Revision Notes',
    ar: 'ملخصات بالذكاء الاصطناعي',
  },
  'pricing.feat.student_premium.custom_tests': {
    en: 'Custom Test Generation',
    ar: 'توليد اختبارات مخصّصة',
  },
  'pricing.feat.student_premium.mock_exams': { en: 'Mock Exams', ar: 'امتحانات تجريبية' },
  'pricing.feat.student_premium.feedback_reports': {
    en: 'Feedback Reports',
    ar: 'تقارير ملاحظات',
  },
  'pricing.feat.student_premium.study_recs': {
    en: 'AI Study Recommendations',
    ar: 'توصيات مذاكرة بالذكاء الاصطناعي',
  },
  'pricing.feat.student_premium.progress_analytics': {
    en: 'Full Progress Analytics',
    ar: 'تحليلات تقدّم كاملة',
  },
  'pricing.feat.student_premium.exam_technique': {
    en: 'Exam Technique Guides',
    ar: 'أدلّة أسلوب الامتحان',
  },
  'pricing.feat.teacher_free.browse_resources': {
    en: 'Browse resources',
    ar: 'تصفّح الموارد',
  },
  'pricing.feat.teacher_free.view_student_list': {
    en: 'View student list',
    ar: 'شوف قائمة الطلاب',
  },
  'pricing.feat.teacher_premium.lesson_plans': {
    en: 'AI Lesson Plans',
    ar: 'خطط دروس بالذكاء الاصطناعي',
  },
  'pricing.feat.teacher_premium.essay_marking': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
  },
  'pricing.feat.teacher_premium.worksheet_builder': {
    en: 'Worksheet Builder',
    ar: 'منشئ أوراق العمل',
  },
  'pricing.feat.teacher_premium.mark_scheme_gen': {
    en: 'Mark Scheme Generator',
    ar: 'منشئ سلم العلامات',
  },
  'pricing.feat.teacher_premium.ppt_word_export': {
    en: 'PowerPoint/Word Export',
    ar: 'تصدير PowerPoint و Word',
  },
  'pricing.feat.teacher_premium.class_analytics': {
    en: 'Class Analytics',
    ar: 'تحليلات الصف',
  },
  'pricing.feat.teacher_premium.student_reports': {
    en: 'Student Reports',
    ar: 'تقارير الطلاب',
  },
  'pricing.feat.teacher_premium.dept_benchmarking': {
    en: 'Department Benchmarking',
    ar: 'مقارنة أداء القسم',
  },
  'pricing.feat.badge_free': { en: 'Free', ar: 'ببلاش' },
  'pricing.feat.badge_n_free': { en: '{n} free', ar: '{n} ببلاش' },
  'pricing.always_free_label': { en: 'Always free', ar: 'ببلاش دايماً' },
  'pricing.premium_label': { en: 'Premium', ar: 'بريميوم' },
  'pricing.premium_then_unlimited_prefix': {
    en: '— {n} free, then unlimited',
    ar: '— {n} ببلاش، وبعدين بلا حدود',
  },
  'pricing.school_receives.heading': {
    en: 'What your school receives',
    ar: 'شنو بتحصل عليه مدرستك',
  },
  'pricing.school_receives.1': {
    en: 'Full platform access for every teacher and student',
    ar: 'صلاحية وصول كاملة للمنصة لكل معلم وطالب',
  },
  'pricing.school_receives.2': {
    en: 'Early access to new features before public release',
    ar: 'وصول مبكر للميزات الجديدة قبل الإطلاق العام',
  },
  'pricing.school_receives.3': {
    en: 'Direct product input — your feedback shapes the roadmap',
    ar: 'مدخلات مباشرة على المنتج — ملاحظاتك تشكّل خارطة الطريق',
  },
  'pricing.school_receives.4': {
    en: 'Priority onboarding with dedicated support',
    ar: 'تأهيل بأولوية مع دعم مخصّص',
  },
  'pricing.school_receives.5': {
    en: 'Locked preferential pricing for 2–3 years',
    ar: 'أسعار تفضيلية مثبتة لمدة ٢-٣ سنوات',
  },
  'pricing.school_receives.6': {
    en: 'Founding partner recognition on the platform',
    ar: 'تكريم كشريك مؤسِّس على المنصة',
  },
  'pricing.founding_pricing_label': { en: 'Founding Pricing', ar: 'تسعير المؤسسين' },
  'pricing.standard_pricing_label': { en: 'Standard Pricing', ar: 'التسعير القياسي' },
  'pricing.places_remaining': {
    en: '6 places remaining · cohort closes 31 Dec 2026',
    ar: 'فيه ٦ أماكن باقية · الدفعة تسكّر ٣١ ديسمبر ٢٠٢٦',
  },
  'pricing.mat_pricing_blurb': {
    en: 'MAT pricing from {currency}{amount}/yr — bundled 3+ schools',
    ar: 'تسعير MAT يبدأ من {currency}{amount} سنوياً — حزمة ٣ مدارس أو أكثر',
  },
  'pricing.founders_lock_rate': {
    en: 'Founding partners lock in this rate for 2–3 years and shape the platform roadmap.',
    ar: 'الشركاء المؤسسون يثبّتون السعر لمدة ٢-٣ سنوات ويشكّلون خارطة طريق المنصة.',
  },
  'pricing.estimated_std_rate': {
    en: 'Estimated standard annual rate once Founders cohort closes. Exact figure set closer to launch.',
    ar: 'السعر السنوي القياسي المتوقّع لمّا تسكّر دفعة المؤسسين. الرقم النهائي بينحدّد قرب الإطلاق.',
  },
  'pricing.urgency_first_come': {
    en: 'Founding places fill on a first-come basis',
    ar: 'أماكن المؤسسين تنحجز حسب الأسبق',
  },
  'pricing.programme_closes_strong': {
    en: 'This programme closes when 10 schools are onboarded.',
    ar: 'البرنامج يسكّر لمّا تنضم ١٠ مدارس.',
  },
  'pricing.programme_closes_after': {
    en: 'Once all places are filled, entry will not reopen at this pricing.',
    ar: 'لمّا تنحجز كل الأماكن، ما رح يفتح الدخول بهالسعر مرة ثانية.',
  },
  'pricing.cohort_2_note': {
    en: 'After the 10 founding places: Cohort 2 pricing opens September 2026 at £6,000–£12,000/yr. Founding price is locked for the life of your contract.',
    ar: 'بعد أماكن المؤسسين الـ١٠: تسعير الدفعة ٢ يفتح في سبتمبر ٢٠٢٦ بـ £6,000–£12,000 سنوياً. سعر المؤسسين مثبّت طول مدة عقدك.',
  },
  'pricing.standard_from_prefix': { en: 'From', ar: 'من' },
  'pricing.per_year_short': { en: '/yr', ar: '/سنة' },
  'pricing.per_year_long': { en: '/year', ar: '/سنة' },
  'pricing.per_month': { en: '/month', ar: '/شهر' },
  'pricing.limited_time': { en: 'limited time', ar: 'وقت محدود' },
  'pricing.was_strikethrough_prefix': { en: 'was', ar: 'كان' },
  'pricing.save_vs_monthly_prefix': { en: 'save', ar: 'وفّر' },
  'pricing.save_vs_monthly_suffix': { en: 'vs monthly', ar: 'مقارنة بالشهري' },
  'pricing.trial_line_card_required': {
    en: 'card required · cancel before day 7',
    ar: 'يلزم كارت · ألغِ قبل اليوم السابع',
  },
  'pricing.with_any_code_prefix': { en: 'With any affiliate code or', ar: 'مع أي كود شراكة أو' },
  'pricing.with_any_code_per_year_save': {
    en: '{currency}{annual}/year — save {currency}{saving}.',
    ar: '{currency}{annual} سنوياً — وفّر {currency}{saving}.',
  },
  'pricing.starting_checkout': { en: 'Starting checkout…', ar: 'لحظة، بنبدأ الدفع…' },
  'pricing.start_7day_trial': { en: 'Start 7-day free trial', ar: 'ابدأ تجربة ٧ أيام مجانية' },
  'pricing.prefer_monthly_prefix': {
    en: 'Prefer monthly? Start with',
    ar: 'تفضّل شهري؟ ابدأ بـ',
  },
  'pricing.prefer_monthly_suffix': { en: '/mo trial instead', ar: '/شهر تجربة بدالها' },
  'pricing.or_prefix': { en: 'or', ar: 'أو' },
  'pricing.compare.col.feature': { en: 'Feature', ar: 'الميزة' },
  'pricing.compare.row.price_per_student': {
    en: 'Price per student / month',
    ar: 'السعر للطالب / الشهر',
  },
  'pricing.compare.seneca_price': {
    en: 'Free / £6.99 Premium',
    ar: 'ببلاش / £6.99 بريميوم',
  },
  'pricing.compare.gcsepod_price': {
    en: '£12–£18/yr (school only)',
    ar: '£12–£18 سنوياً (مدارس بس)',
  },
  'pricing.compare.row.ai_marking': {
    en: 'AI essay marking (AO-aligned)',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي (موافق لـ AO)',
  },
  'pricing.compare.row.igcse_coverage': { en: 'IGCSE coverage', ar: 'تغطية IGCSE' },
  'pricing.compare.row.mock_exam_bank': {
    en: 'Mock-exam bank (full papers)',
    ar: 'بنك امتحانات تجريبية (أوراق كاملة)',
  },
  'pricing.compare.row.calibrated_ms': {
    en: 'Calibrated to exam-board mark schemes',
    ar: 'مُعايَر مع سلالم علامات بورد الامتحان',
  },
  'pricing.compare.row.trial_length': { en: 'Free trial length', ar: 'مدة التجربة المجانية' },
  'pricing.compare.value.partial': { en: 'Partial', ar: 'جزئي' },
  'pricing.compare.value.no_trial': { en: 'No trial', ar: 'ما في تجربة' },
  'pricing.compare.value.na': { en: 'n/a', ar: 'ما ينطبق' },
  'pricing.compare.value.7_days': { en: '7 days', ar: '٧ أيام' },
  'pricing.compare.value.5_boards': { en: '5 boards', ar: '٥ بوردات' },
  'pricing.compare.value.aqa_cambridge': { en: 'AQA · Cambridge', ar: 'AQA · Cambridge' },
  'pricing.compare.footnote': {
    en: 'Pricing and features as of April 2026 — may be out of date; contact competitors for latest.',
    ar: 'الأسعار والميزات بحسب أبريل ٢٠٢٦ — ممكن تكون قديمة؛ اتواصل مع المنافسين للأحدث.',
  },
  'pricing.step.label': { en: 'Step', ar: 'الخطوة' },
  'pricing.step.1.title': { en: 'Register', ar: 'سجّل' },
  'pricing.step.1.desc': {
    en: 'Create your free account in under a minute. Choose your exam board and role.',
    ar: 'سوّي حسابك المجاني بأقل من دقيقة. اختر بورد الامتحان والدور.',
  },
  'pricing.step.2.title': { en: 'Explore', ar: 'استكشف' },
  'pricing.step.2.desc': {
    en: 'Every premium feature includes {n} free uses. Try AI marking, mock exams, lesson plans, and more.',
    ar: 'كل ميزة بريميوم تتضمن {n} استخدامات مجانية. جرّب التصحيح الذكي والامتحانات التجريبية وخطط الدروس وأكثر.',
  },
  'pricing.step.3.title': { en: 'Upgrade', ar: 'رقّي' },
  'pricing.step.3.desc': {
    en: 'When you’re ready, start a 7-day free trial. Card required — cancel before day 7 at no cost, or it converts automatically.',
    ar: 'لمّا تكون جاهز، ابدأ تجربة ٧ أيام مجانية. يلزم كارت — ألغِ قبل اليوم السابع بدون تكلفة، أو تنتقل تلقائياً.',
  },
  'pricing.faq.q1': {
    en: 'What do I get for free before I subscribe?',
    ar: 'شنو اللي أحصل عليه ببلاش قبل ما أشترك؟',
  },
  'pricing.faq.a1': {
    en: 'Every visitor and registered user gets {n} free uses of most premium features (AI essay marking, mock exams, lesson plans, etc.) before the paywall. Exam-board aligned courses, revision notes, and flashcards remain free with a registered account.',
    ar: 'كل زائر ومستخدم مسجّل يحصل على {n} استخدامات مجانية لأغلب ميزات البريميوم (التصحيح الذكي، الامتحانات التجريبية، خطط الدروس، وغيرها) قبل جدار الدفع. وكورسات بورد الامتحان وملخصات المراجعة والبطاقات تبقى ببلاش مع حساب مسجّل.',
  },
  'pricing.faq.q2': {
    en: 'Do I need a credit card to start the 7-day trial?',
    ar: 'هل لازم كارت ائتمان عشان أبدأ تجربة الـ٧ أيام؟',
  },
  'pricing.faq.a2': {
    en: 'Yes. The 7-day free trial requires full sign-up with a valid payment method. Cancel any time before day 7 and you will not be charged. If you do nothing, the subscription activates automatically and your card is charged.',
    ar: 'إي. التجربة المجانية ٧ أيام تتطلب تسجيل كامل بطريقة دفع صالحة. ألغِ بأي وقت قبل اليوم السابع وما رح تتحاسب. إذا ما سويت شي، الاشتراك يتفعّل تلقائياً وكارتك يتحاسب.',
  },
  'pricing.faq.q3': { en: 'What does the Student plan cost?', ar: 'شنو سعر خطة الطالب؟' },
  'pricing.faq.a3': {
    en: '£{monthly} per month, or £{annual} per year. With any valid affiliate code — or the house code {code} — the annual plan drops to £{withCode} (a £{savings} saving).',
    ar: '£{monthly} شهرياً، أو £{annual} سنوياً. ومع أي كود شراكة صالح — أو الكود العام {code} — الخطة السنوية تنزل لـ £{withCode} (توفير £{savings}).',
  },
  'pricing.faq.q4': { en: 'What does the Teacher plan cost?', ar: 'شنو سعر خطة المعلم؟' },
  'pricing.faq.a4': {
    en: '£{monthly} per month, or £{annual} per year. Teacher plans include everything in Student plus AI lesson planning, marking, analytics, and resource export.',
    ar: '£{monthly} شهرياً، أو £{annual} سنوياً. خطط المعلم تشمل كل اللي في خطة الطالب بالإضافة للتخطيط الذكي للدروس والتصحيح والتحليلات وتصدير الموارد.',
  },
  'pricing.faq.q5': {
    en: 'How does the affiliate code discount work?',
    ar: 'شلون يشتغل خصم كود الشراكة؟',
  },
  'pricing.faq.a5': {
    en: 'Enter any valid affiliate code at checkout to unlock the £{withCode}/year student rate. Or use the public code {code} — this works for everyone and applies the same discount. Only applies to annual student billing.',
    ar: 'ادخل أي كود شراكة صالح عند الدفع عشان تفتح سعر الطالب £{withCode} سنوياً. أو استخدم الكود العام {code} — يشتغل للكل ويطبّق نفس الخصم. ينطبق فقط على فوترة الطالب السنوية.',
  },
  'pricing.faq.q6': {
    en: 'Can I switch between monthly and annual billing?',
    ar: 'أقدر أبدّل بين الفوترة الشهرية والسنوية؟',
  },
  'pricing.faq.a6': {
    en: 'Yes. You can change your billing cycle at any time from your account settings. When switching to annual, the remaining balance on your monthly plan is pro-rated.',
    ar: 'إي. تقدر تغيّر دورة الفوترة بأي وقت من إعدادات حسابك. ولمّا تبدّل للسنوي، الرصيد المتبقي من خطتك الشهرية ينقسم بالنسبة.',
  },
  'pricing.faq.q7': { en: 'What exam boards do you support?', ar: 'أي بوردات امتحان تدعمونها؟' },
  'pricing.faq.a7': {
    en: 'We support AQA, Edexcel, OCR, WJEC Eduqas, and Cambridge IGCSE/CAIE. All content is specifically aligned to your chosen board.',
    ar: 'ندعم AQA و Edexcel و OCR و WJEC Eduqas و Cambridge IGCSE/CAIE. كل المحتوى متوافق تحديداً مع البورد اللي اخترته.',
  },
  'pricing.faq.q8': {
    en: 'Is the Founding Schools Programme a free trial?',
    ar: 'هل برنامج المدارس المؤسِّسة هو تجربة مجانية؟',
  },
  'pricing.faq.a8': {
    en: 'No. It is a strategic partnership limited to {limit} schools. Pricing starts at £{min} per year and scales with department size. Founding schools receive locked preferential pricing, early feature access, and direct product input.',
    ar: 'لا. هي شراكة استراتيجية محدودة بـ {limit} مدرسة. التسعير يبدأ من £{min} سنوياً ويتزايد حسب حجم القسم. والمدارس المؤسِّسة تحصل على تسعير تفضيلي مثبّت ووصول مبكر للميزات ومدخلات مباشرة على المنتج.',
  },
  'pricing.faq.q9': { en: 'Can I cancel anytime?', ar: 'أقدر ألغي بأي وقت؟' },
  'pricing.faq.a9': {
    en: 'Yes. Both monthly and annual plans can be cancelled from your account settings. No contracts, no cancellation fees. Cancel during the 7-day trial and you pay nothing.',
    ar: 'إي. الخطتين الشهرية والسنوية تقدر تلغيهم من إعدادات حسابك. ما في عقود، ما في رسوم إلغاء. ألغِ خلال تجربة الـ٧ أيام وما تدفع شي.',
  },
  'pricing.faq.still_questions': { en: 'Still have questions?', ar: 'عندك أسئلة ثانية؟' },
  'pricing.faq.get_in_touch': { en: 'Get in touch', ar: 'تواصل معنا' },
  'pricing.faq.we_get_back': {
    en: 'and we will get back to you within 24 hours.',
    ar: 'ورح نرد عليك خلال ٢٤ ساعة.',
  },
  'pricing.err.code_annual_only': {
    en: 'Your code “{code}” only applies to annual plans — Student Annual (£{studentAnnual}/year) or Teacher Annual (£{teacherAnnual}/year). Pick an annual plan to use the discount, or remove the code to continue with this plan at the standard price.',
    ar: 'الكود "{code}" ينطبق فقط على الخطط السنوية — الطالب السنوي (£{studentAnnual}/سنة) أو المعلم السنوي (£{teacherAnnual}/سنة). اختر خطة سنوية عشان تستخدم الخصم، أو احذف الكود عشان تكمل بالسعر القياسي.',
  },
  'pricing.err.code_apply_failed': {
    en: "We couldn't apply that code right now. Please try again, or remove the code to continue at the standard price.",
    ar: 'ما قدرنا نطبّق الكود الحين. جرّب مرة ثانية، أو احذف الكود عشان تكمل بالسعر القياسي.',
  },
  'pricing.err.code_generic': {
    en: 'Something went wrong applying the code. Please try again.',
    ar: 'صار في خطأ وقت تطبيق الكود. جرّب مرة ثانية.',
  },
  'pricing.err.missing_priceids': {
    en: "We couldn't start checkout because the live Stripe price IDs aren't yet wired up in Vercel. The site team needs to add STRIPE_PRICE_STUDENT_MONTHLY / STUDENT_ANNUAL / TEACHER_MONTHLY / TEACHER_ANNUAL to Vercel Production env vars and redeploy.",
    ar: 'ما قدرنا نبدأ الدفع لأن معرّفات أسعار Stripe الحيّة ما هي موصولة في Vercel. فريق الموقع يحتاج يضيف STRIPE_PRICE_STUDENT_MONTHLY / STUDENT_ANNUAL / TEACHER_MONTHLY / TEACHER_ANNUAL لمتغيرات بيئة الإنتاج في Vercel ويعيد النشر.',
  },
  'pricing.err.invalid_priceid': {
    en: "We couldn't start checkout — the configured Stripe price ID isn't valid in this Stripe account. Check the env vars match LIVE-mode price IDs and redeploy.",
    ar: 'ما قدرنا نبدأ الدفع — معرّف سعر Stripe المُهيَّأ مو صالح في حساب Stripe هذا. تحقّق إن متغيرات البيئة تطابق معرّفات أسعار وضع LIVE وأعد النشر.',
  },
  'pricing.err.stripe_rejected_prefix': {
    en: 'Stripe rejected the request:',
    ar: 'Stripe رفض الطلب:',
  },
  'pricing.err.stripe_rejected_generic': {
    en: "Stripe rejected the checkout request. This usually means the live Stripe API keys aren't set in Vercel yet, or the keys are from a different account than the price IDs. See business-docs/STRIPE-GO-LIVE-CHECKLIST.md.",
    ar: 'Stripe رفض طلب الدفع. عادة هذا يعني إن مفاتيح Stripe API الحيّة لسا ما هي مضبوطة في Vercel، أو المفاتيح من حساب ثاني غير معرّفات الأسعار. شوف business-docs/STRIPE-GO-LIVE-CHECKLIST.md.',
  },
  'pricing.err.start_checkout_failed': {
    en: 'Failed to start checkout. Please try again.',
    ar: 'ما قدرنا نبدأ الدفع. جرّب مرة ثانية.',
  },
  'pricing.err.generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار في خطأ. جرّب مرة ثانية.',
  },
  'marking.grade_tab_4_5': { en: 'Grade 4-5', ar: 'الدرجة ٤-٥' },
  'marking.grade_tab_6_7': { en: 'Grade 6-7', ar: 'الدرجة ٦-٧' },
  'marking.grade_tab_8_9': { en: 'Grade 8-9', ar: 'الدرجة ٨-٩' },
  'marking.rate_aria': { en: 'Rate {n} out of 5', ar: 'قيّم {n} من ٥' },

  // ─── School admin · Compare classes (school.comparison.*) ───────────────
  'school.comparison.page_title': { en: 'Compare Classes', ar: 'قارن الصفوف' },
  'school.comparison.page_subtitle': {
    en: 'Side-by-side analysis of 2-4 classes',
    ar: 'قارن من صفّين لأربعة صفوف جنب بعض',
  },
  'school.comparison.loading': { en: 'Loading comparison…', ar: 'لحظة، نجيب المقارنة…' },

  // ─── School admin · Seating plans (school.seating.*) ────────────────────
  // GENDER POLICY: binary M/F.
  'school.seating.title': { en: 'Seating Plan', ar: 'خطة الجلوس' },
  'school.seating.subtitle': {
    en: 'Drag and drop students to arrange your classroom',
    ar: 'اسحب الطلاب وحطّهم عشان ترتّب فصلك',
  },
  'school.seating.print': { en: 'Print', ar: 'اطبع' },
  'school.seating.save': { en: 'Save', ar: 'احفظ' },
  'school.seating.load': { en: 'Load', ar: 'حمّل' },
  'school.seating.class_label': { en: 'Class', ar: 'الصف' },
  'school.seating.class_placeholder': { en: 'Select a class…', ar: 'اختر صف…' },
  'school.seating.grid_size': { en: 'Grid Size', ar: 'حجم الشبكة' },
  'school.seating.seats_suffix': { en: 'seats', ar: 'مقعد' },
  'school.seating.auto_arrange': { en: 'Auto-Arrange', ar: 'رتّب أوتوماتيكي' },
  'school.seating.color_code_by': { en: 'Color Code By', ar: 'لوّن حسب' },
  'school.seating.reshuffle': { en: 'Re-shuffle', ar: 'رتّب من جديد' },
  'school.seating.students_count_suffix': { en: 'students', ar: 'طالب' },
  'school.seating.empty_select_class': {
    en: 'Select a class to build a seating plan',
    ar: 'اختر صف عشان نسوّي خطة جلوس',
  },
  'school.seating.empty_no_students': {
    en: 'No students found in this class',
    ar: 'ما في طلاب في الصف هذا',
  },
  'school.seating.print_heading_class_fallback': { en: 'Class', ar: 'الصف' },
  'school.seating.print_heading_prefix': { en: 'Seating Plan — ', ar: 'خطة الجلوس — ' },
  'school.seating.arrange.mixed.label': { en: 'Mixed Ability', ar: 'قدرات متنوّعة' },
  'school.seating.arrange.mixed.desc': {
    en: 'Spread grades evenly across the room',
    ar: 'وزّع الدرجات على كل الفصل',
  },
  'school.seating.arrange.friendship.label': {
    en: 'Friendship Groups',
    ar: 'مجموعات الأصحاب',
  },
  'school.seating.arrange.friendship.desc': {
    en: 'Group similar-performing students together',
    ar: 'جمّع الطلاب اللي مستواهم قريب من بعض',
  },
  'school.seating.arrange.target.label': { en: 'By Target Grade', ar: 'حسب الدرجة المستهدفة' },
  'school.seating.arrange.target.desc': {
    en: 'Arrange seats by target grade',
    ar: 'رتّب المقاعد حسب الدرجة المستهدفة',
  },
  'school.seating.arrange.random.label': { en: 'Random', ar: 'عشوائي' },
  'school.seating.arrange.random.desc': { en: 'Randomly assign seats', ar: 'وزّع المقاعد عشوائي' },
  'school.seating.color.grade': { en: 'Current Grade', ar: 'الدرجة الحالية' },
  'school.seating.color.trajectory': { en: 'Trajectory', ar: 'الاتجاه' },
  'school.seating.color.target': { en: 'Target Grade', ar: 'الدرجة المستهدفة' },
  'school.seating.color.gender': { en: 'Gender', ar: 'الجنس' },
  'school.seating.gender.male': { en: 'Male', ar: 'ذكر' },
  'school.seating.gender.female': { en: 'Female', ar: 'أنثى' },
  'school.seating.legend.label': { en: 'Legend:', ar: 'الدليل:' },
  'school.seating.legend.improving': { en: 'Improving', ar: 'يتحسّن' },
  'school.seating.legend.stable': { en: 'Stable', ar: 'ثابت' },
  'school.seating.legend.declining': { en: 'Declining', ar: 'يتراجع' },
  'school.seating.legend.all_students': { en: 'All students', ar: 'كل الطلاب' },
  'school.seating.save_title': { en: 'Save Seating Plan', ar: 'احفظ خطة الجلوس' },
  'school.seating.save_desc': {
    en: 'Save this layout to load it later',
    ar: 'احفظ الترتيب هذا عشان تحمّله بعدين',
  },
  'school.seating.plan_name_label': { en: 'Plan Name', ar: 'اسم الخطة' },
  'school.seating.plan_name_placeholder': {
    en: 'e.g. 10A Spring Term',
    ar: 'مثلاً: 10A فصل الربيع',
  },
  'school.seating.save_btn': { en: 'Save Plan', ar: 'احفظ الخطة' },
  'school.seating.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.seating.load_title': { en: 'Load Seating Plan', ar: 'حمّل خطة جلوس' },
  'school.seating.load_desc': {
    en: 'Choose a previously saved plan',
    ar: 'اختر خطة محفوظة من قبل',
  },
  'school.seating.no_saved_plans': {
    en: 'No saved plans yet',
    ar: 'ما عندك خطط محفوظة لحدّ الحين',
  },
  'school.seating.unknown_class': { en: 'Unknown class', ar: 'صف غير معروف' },
  'school.seating.load_btn': { en: 'Load', ar: 'حمّل' },
  'school.seating.close': { en: 'Close', ar: 'سكّر' },

  // ─── School admin · Group generator (school.group_gen.*) ────────────────
  'school.group_gen.title': { en: 'Group Generator', ar: 'مولّد المجموعات' },
  'school.group_gen.subtitle': {
    en: 'Create balanced groups for classroom activities',
    ar: 'سوِّ مجموعات متوازنة لأنشطة الفصل',
  },
  'school.group_gen.print': { en: 'Print', ar: 'اطبع' },
  'school.group_gen.export': { en: 'Export', ar: 'صدّر' },
  'school.group_gen.class_label': { en: 'Class', ar: 'الصف' },
  'school.group_gen.class_placeholder': { en: 'Select a class…', ar: 'اختر صف…' },
  'school.group_gen.num_groups': { en: 'Number of Groups', ar: 'عدد المجموعات' },
  'school.group_gen.strategy': { en: 'Grouping Strategy', ar: 'طريقة التجميع' },
  'school.group_gen.regenerate': { en: 'Regenerate', ar: 'سوّي من جديد' },
  'school.group_gen.students_suffix': { en: 'students', ar: 'طالب' },
  'school.group_gen.drag_hint': {
    en: '— Drag students between groups to rearrange',
    ar: '— اسحب الطلاب بين المجموعات عشان ترتّبهم',
  },
  'school.group_gen.empty_select_class': {
    en: 'Select a class to generate groups',
    ar: 'اختر صف عشان نسوّي المجموعات',
  },
  'school.group_gen.empty_no_students': {
    en: 'No students found in this class',
    ar: 'ما في طلاب في الصف هذا',
  },
  'school.group_gen.print_heading_prefix': {
    en: 'Group Compositions — ',
    ar: 'تركيبة المجموعات — ',
  },
  'school.group_gen.print_strategy_prefix': { en: 'Strategy: ', ar: 'الطريقة: ' },
  'school.group_gen.print_class_fallback': { en: 'Class', ar: 'الصف' },
  'school.group_gen.strategy.mixed.label': { en: 'Mixed Ability', ar: 'قدرات متنوّعة' },
  'school.group_gen.strategy.mixed.desc': {
    en: 'Each group has a range of ability levels',
    ar: 'كل مجموعة فيها مستويات مختلفة',
  },
  'school.group_gen.strategy.similar.label': { en: 'Similar Ability', ar: 'قدرات متقاربة' },
  'school.group_gen.strategy.similar.desc': {
    en: 'Groups of students at the same level for targeted work',
    ar: 'مجموعات طلاب بنفس المستوى للشغل المستهدف',
  },
  'school.group_gen.strategy.random.label': { en: 'Random', ar: 'عشوائي' },
  'school.group_gen.strategy.random.desc': {
    en: 'Randomly shuffled groups',
    ar: 'مجموعات مرتّبة عشوائي',
  },
  'school.group_gen.strategy.custom.label': { en: 'Custom', ar: 'مخصّص' },
  'school.group_gen.strategy.custom.desc': {
    en: 'Drag students between groups manually',
    ar: 'اسحب الطلاب بين المجموعات يدوي',
  },
  'school.group_gen.group_prefix': { en: 'Group', ar: 'مجموعة' },
  'school.group_gen.ability.high': { en: 'high', ar: 'عالي' },
  'school.group_gen.ability.mid': { en: 'mid', ar: 'متوسط' },
  'school.group_gen.ability.low': { en: 'low', ar: 'منخفض' },
  'school.group_gen.ability.high_suffix': { en: 'high', ar: 'عالي' },
  'school.group_gen.ability.mid_suffix': { en: 'mid', ar: 'متوسط' },
  'school.group_gen.ability.low_suffix': { en: 'low', ar: 'منخفض' },
  'school.group_gen.drop_here': { en: 'Drop students here', ar: 'حطّ الطلاب هنا' },
  'school.group_gen.no_students_in_group': { en: 'No students', ar: 'ما في طلاب' },
  'school.group_gen.export.heading': {
    en: 'Group Compositions',
    ar: 'تركيبة المجموعات',
  },
  'school.group_gen.export.strategy_label': { en: 'Strategy', ar: 'الطريقة' },
  'school.group_gen.export.generated_label': { en: 'Generated', ar: 'سُوِّيت بتاريخ' },
  'school.group_gen.export.students_suffix': { en: 'students', ar: 'طالب' },
  'school.group_gen.export.grade_label': { en: 'Grade', ar: 'الدرجة' },
  'school.group_gen.export.ability_label': { en: 'Ability', ar: 'القدرة' },
  'school.group_gen.export.na': { en: 'N/A', ar: 'غير متاح' },
  'school.group_gen.timer.title': { en: 'Activity Timer', ar: 'مؤقّت النشاط' },
  'school.group_gen.timer.desc': {
    en: 'Set a countdown timer for group activities',
    ar: 'حدّد مؤقّت تنازلي لأنشطة المجموعات',
  },
  'school.group_gen.timer.minutes': { en: 'Minutes', ar: 'دقائق' },
  'school.group_gen.timer.seconds': { en: 'Seconds', ar: 'ثوان' },
  'school.group_gen.timer.start': { en: 'Start', ar: 'ابدأ' },
  'school.group_gen.timer.pause': { en: 'Pause', ar: 'وقف' },

  // ─── School admin · Notifications (school.notifications.*) ──────────────
  'school.notifications.unread_singular': { en: 'unread', ar: 'غير مقروء' },
  'school.notifications.unread_plural': { en: 'unread', ar: 'غير مقروءة' },
  'school.notifications.all_caught_up': { en: "You're all caught up", ar: 'كل شي ملحّق' },
  'school.notifications.filters_label': { en: 'Filters', ar: 'الفلاتر' },
  'school.notifications.all_types': { en: 'All types', ar: 'كل الأنواع' },
  'school.notifications.all_time': { en: 'All time', ar: 'كل الوقت' },
  'school.notifications.all_classes': { en: 'All classes', ar: 'كل الصفوف' },
  'school.notifications.all': { en: 'All', ar: 'الكل' },
  'school.notifications.unread': { en: 'Unread', ar: 'غير مقروء' },
  'school.notifications.read': { en: 'Read', ar: 'مقروء' },
  'school.notifications.empty_match': {
    en: 'No notifications match these filters',
    ar: 'ما في إشعارات تطابق الفلاتر',
  },
  'school.notifications.empty_match_hint': {
    en: 'Try changing the filters or date range',
    ar: 'جرّب تغيّر الفلاتر أو الفترة الزمنية',
  },
  'school.notifications.view_details': { en: 'View details', ar: 'شوف التفاصيل' },
  'school.notifications.mark_as_read': { en: 'Mark as read', ar: 'علّمه مقروء' },
  'school.notifications.range.today': { en: 'Today', ar: 'اليوم' },
  'school.notifications.range.7d': { en: 'Last 7 days', ar: 'آخر ٧ أيام' },
  'school.notifications.range.30d': { en: 'Last 30 days', ar: 'آخر ٣٠ يوم' },
  'school.notifications.priority.high': { en: 'High', ar: 'عالي' },
  'school.notifications.priority.medium': { en: 'Medium', ar: 'متوسط' },
  'school.notifications.priority.low': { en: 'Low', ar: 'منخفض' },
  'school.notifications.time.just_now': { en: 'Just now', ar: 'لحظة' },
  'school.notifications.time.min_singular': { en: 'min ago', ar: 'دقيقة' },
  'school.notifications.time.min_plural': { en: 'mins ago', ar: 'دقيقة' },
  'school.notifications.time.hour_singular': { en: 'hour ago', ar: 'ساعة' },
  'school.notifications.time.hour_plural': { en: 'hours ago', ar: 'ساعة' },
  'school.notifications.time.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'school.notifications.time.days_ago_suffix': { en: 'days ago', ar: 'يوم' },
  'school.notifications.footer.showing': { en: 'Showing', ar: 'يعرض' },
  'school.notifications.footer.of': { en: 'of', ar: 'من' },
  'school.notifications.footer.notification_singular': { en: 'notification', ar: 'إشعار' },
  'school.notifications.footer.notification_plural': { en: 'notifications', ar: 'إشعار' },

  // ─── School admin · Billing (school.billing.*) ──────────────────────────
  'school.billing.page_title': { en: 'Billing & Subscription', ar: 'الفواتير والاشتراك' },
  'school.billing.current_plan': { en: 'Current Plan', ar: 'الباقة الحالية' },
  'school.billing.founder_badge': { en: 'FOUNDER', ar: 'FOUNDER' },
  'school.billing.founder_access_heading': { en: 'Founder Access', ar: 'صلاحية المؤسّس' },
  'school.billing.active': { en: 'Active', ar: 'نشط' },
  'school.billing.free_until': { en: 'Free until 31 Aug 2026', ar: 'ببلاش لين ٣١ أغسطس ٢٠٢٦' },
  'school.billing.after_expiry_pre': {
    en: 'After this, founder pricing of',
    ar: 'بعد كذا، سعر المؤسّس',
  },
  'school.billing.after_expiry_founder_suffix': {
    en: 'applies (vs. standard',
    ar: 'يطبّق (مقارنة بالسعر العادي',
  },
  'school.billing.after_expiry_standard_suffix': { en: ').', ar: ').' },
  'school.billing.day_singular': { en: 'day', ar: 'يوم' },
  'school.billing.day_plural': { en: 'days', ar: 'يوم' },
  'school.billing.remaining': { en: 'remaining', ar: 'باقي' },
  'school.billing.warning_pre': {
    en: 'Your FOUNDER access expires in',
    ar: 'صلاحية المؤسّس مالتك تنتهي خلال',
  },
  'school.billing.warning_post': {
    en: 'Renew now to maintain uninterrupted access.',
    ar: 'جدّد الحين عشان ما ينقطع الوصول.',
  },
  'school.billing.contact_renew': { en: 'Contact us to renew', ar: 'تواصل وياّنا للتجديد' },
  'school.billing.renew_early': { en: 'Renew early', ar: 'جدّد بدري' },
  'school.billing.subscription_heading': { en: 'Subscription', ar: 'الاشتراك' },
  'school.billing.per_pupil_pricing': { en: 'Per-pupil pricing', ar: 'تسعير حسب الطالب' },
  'school.billing.renews_label': { en: 'Renews', ar: 'يتجدّد' },
  'school.billing.days_until_renewal': { en: 'days until renewal', ar: 'يوم باقي على التجديد' },
  'school.billing.cancel_subscription': { en: 'Cancel subscription', ar: 'ألغِ الاشتراك' },
  'school.billing.cancel_sure': {
    en: 'Are you sure you want to cancel?',
    ar: 'متأكد تبغى تلغي؟',
  },
  'school.billing.cancel_note': {
    en: "We'll email you to confirm and stop future renewals.",
    ar: 'بنرسل لك إيميل تأكيد ونوقف التجديدات الجاية.',
  },
  'school.billing.email_cancel': { en: 'Email to cancel', ar: 'إيميل للإلغاء' },
  'school.billing.keep_subscription': { en: 'Keep subscription', ar: 'خلّيه شغّال' },
  'school.billing.pricing_title': { en: 'Pricing', ar: 'الأسعار' },
  'school.billing.pricing_desc': {
    en: 'Per-pupil annual pricing across key stages',
    ar: 'تسعير سنوي حسب الطالب لكل مرحلة',
  },
  'school.billing.founding_50_title': { en: 'Founding 50 Schools', ar: 'أوّل ٥٠ مدرسة مؤسّسة' },
  'school.billing.founding_50_pre': { en: 'Limited to the first', ar: 'محدود لأوّل' },
  'school.billing.founding_50_post_isfounder': {
    en: 'schools — your school is in!',
    ar: 'مدرسة — مدرستك ضمن القائمة!',
  },
  'school.billing.founding_50_post_standard': {
    en: 'schools — half-price founder pricing.',
    ar: 'مدرسة — سعر المؤسّس بنصف القيمة.',
  },
  'school.billing.example_label': { en: 'Example', ar: 'مثال' },
  'school.billing.example_pre': { en: 'A school with', ar: 'مدرسة فيها' },
  'school.billing.example_pupils': { en: '800 pupils', ar: '٨٠٠ طالب' },
  'school.billing.example_would_pay': { en: 'would pay', ar: 'تدفع' },
  'school.billing.example_year': { en: '/year', ar: '/السنة' },
  'school.billing.example_standard_or': { en: 'standard, or', ar: 'بالسعر العادي، أو' },
  'school.billing.example_founding_suffix': {
    en: 'as a founding school.',
    ar: 'كمدرسة مؤسّسة.',
  },
  'school.billing.feat.per_pupil': {
    en: 'Per-pupil pricing — only pay for active students',
    ar: 'تسعير حسب الطالب — تدفع فقط على الطلاب النشطين',
  },
  'school.billing.feat.all_teachers': {
    en: 'Unlimited teacher accounts included',
    ar: 'حسابات معلمين بلا حدود',
  },
  'school.billing.feat.full_library': {
    en: 'Full KS3, GCSE, and IGCSE resource library',
    ar: 'مكتبة موارد كاملة KS3 وGCSE وIGCSE',
  },
  'school.billing.feat.admin_portal': { en: 'Admin portal access', ar: 'وصول لبوّابة الإدارة' },
  'school.billing.feat.analytics': {
    en: 'School-wide analytics dashboard',
    ar: 'لوحة تحليلات على مستوى المدرسة',
  },
  'school.billing.feat.priority_support': {
    en: 'Priority email support',
    ar: 'دعم بالإيميل بالأولوية',
  },
  'school.billing.get_quote': { en: 'Get a Quote', ar: 'اطلب عرض سعر' },
  'school.billing.ask_question': { en: 'Ask a question', ar: 'اسأل سؤال' },
  'school.billing.usage_title': { en: 'Usage', ar: 'الاستخدام' },
  'school.billing.usage.students_enrolled': { en: 'Students enrolled', ar: 'الطلاب المسجّلين' },
  'school.billing.usage.teachers': { en: 'Teachers', ar: 'المعلمين' },
  'school.billing.usage.resources': { en: 'Resources', ar: 'الموارد' },
  'school.billing.usage.dash': { en: '—', ar: '—' },
  'school.billing.usage.of': { en: 'of', ar: 'من' },
  'school.billing.usage.billed_per_pupil': { en: 'billed per pupil', ar: 'فوترة حسب الطالب' },
  'school.billing.usage.teachers_included': { en: 'unlimited included', ar: 'بلا حدود ضمن الباقة' },
  'school.billing.usage.resources_full': { en: 'Full library', ar: 'المكتبة كاملة' },
  'school.billing.usage.all_included': { en: 'all included', ar: 'الكل ضمن الباقة' },
  'school.billing.invoice_title': { en: 'Invoice history', ar: 'سجلّ الفواتير' },
  'school.billing.invoice_empty_founder': {
    en: 'No invoices yet — you are on FOUNDER access.',
    ar: 'ما في فواتير لحدّ الحين — أنت على صلاحية المؤسّس.',
  },
  'school.billing.invoice_empty_standard': {
    en: 'No invoices yet.',
    ar: 'ما في فواتير لحدّ الحين.',
  },
  'school.billing.invoice_appear_when': {
    en: 'Invoices appear here once your paid plan starts.',
    ar: 'تطلع الفواتير هنا أوّل ما تبدأ باقتك المدفوعة.',
  },
  'school.billing.renewal_cta.pre': {
    en: 'Your FOUNDER access expires in',
    ar: 'صلاحية المؤسّس تنتهي خلال',
  },
  'school.billing.renewal_cta.post': {
    en: '. Renew now to maintain uninterrupted access for all students and teachers.',
    ar: '. جدّد الحين عشان ما ينقطع الوصول للطلاب والمعلمين.',
  },
  'school.billing.renewal_cta.button': { en: 'Contact us to renew', ar: 'تواصل وياّنا للتجديد' },
  'school.billing.contact.prefix': { en: 'For billing questions:', ar: 'لأسئلة الفواتير:' },
  'school.billing.error_load': {
    en: 'Failed to load billing information.',
    ar: 'ما قدرنا نجيب بيانات الفواتير.',
  },
  'school.billing.error_load_refresh': {
    en: 'Failed to load billing information. Please refresh the page.',
    ar: 'ما قدرنا نجيب بيانات الفواتير. حدّث الصفحة لو سمحت.',
  },

  // ─── A-Level board hubs (OCR, Eduqas) ──────────────────────────────
  // Board names and paper/spec codes (OCR, H472, H470, J351, J352, C700QS,
  // WJEC Eduqas, Cambridge, IGCSE, GCSE, A-Level) stay in Latin script even
  // inside Arabic — standard Gulf convention for technical/brand terms.
  'alevel.back': { en: 'Back to A-Level', ar: 'رجوع إلى A-Level' },
  'alevel.badge': { en: 'UK A-Level English', ar: 'A-Level English في المملكة المتحدة' },
  'alevel.tools.heading': { en: 'Cross-board revision tools', ar: 'أدوات مراجعة لكل البوردات' },
  'alevel.roadmap.h2': {
    en: 'Full A-Level content is on our roadmap',
    ar: 'محتوى A-Level الكامل ضمن خطتنا الجاية',
  },
  'alevel.roadmap.body_pre': {
    en: "We're building board-specific A-Level guides for ",
    ar: 'إحنا نبني أدلة A-Level خاصة بكل بورد لـ ',
  },
  'alevel.roadmap.body_post': {
    en: ' — set texts, comparative essays, anthology breakdowns and past-paper walkthroughs. In the meantime, use the cross-board revision tools below; each one already covers the core A-Level skills.',
    ar: ' — النصوص المقررة، المقالات المقارنة، تحليل الأنطولوجي، وشرح الأوراق السابقة. لين ما يخلص هذا، استخدم أدوات المراجعة لكل البوردات تحت؛ كل وحدة تغطي مهارات A-Level الأساسية.',
  },
  'alevel.footer.aligned_pre': { en: 'Aligned with ', ar: 'متوافق مع منهج ' },
  'alevel.footer.aligned_mid': { en: ' specification (', ar: ' (' },
  'alevel.footer.aligned_post': { en: ')', ar: ')' },
  'alevel.tool.set_texts.title': { en: 'Set Texts', ar: 'النصوص المقررة' },
  'alevel.tool.set_texts.desc': {
    en: 'Shared analysis for A-Level set texts: Shakespeare tragedies, modernist poetry, modern drama and prose.',
    ar: 'تحليل مشترك للنصوص المقررة في A-Level: تراجيديات Shakespeare، الشعر الحداثي، الدراما والنثر الحديث.',
  },
  'alevel.tool.exam_technique.title': { en: 'Exam Technique', ar: 'مهارات الامتحان' },
  'alevel.tool.exam_technique.desc': {
    en: 'Essay planning, AO coverage, comparative essays and timing strategies.',
    ar: 'تخطيط المقال، تغطية معايير AO، المقالات المقارنة، وطرق إدارة الوقت.',
  },
  'alevel.tool.language.title': { en: 'Language Study', ar: 'دراسة اللغة' },
  'alevel.tool.language.desc': {
    en: 'Language study for A-Level English Language — frameworks, analysis, and written transformation.',
    ar: 'دراسة اللغة لـ A-Level English Language — الأُطُر، التحليل، والتحويل الكتابي.',
  },

  // ─── OCR namespace ───────────────────────────────────────────────────
  'ocr.board_name': { en: 'OCR', ar: 'OCR' },
  'ocr.board_full': { en: 'OCR Cambridge Assessment', ar: 'OCR Cambridge Assessment' },

  'alevel.ocr.board_name': { en: 'OCR A-Level English', ar: 'OCR A-Level English' },
  'alevel.ocr.summary': {
    en: 'OCR A-Level English Literature (H472) and Language (H470) revision hub. Cross-board set text analysis, essay technique and language study while full OCR A-Level content is on our roadmap.',
    ar: 'مركز مراجعة OCR A-Level English Literature (H472) و Language (H470). تحليل النصوص المقررة المشترك بين البوردات، مهارات المقال، ودراسة اللغة لين ما يخلص محتوى OCR A-Level الكامل ضمن خطتنا.',
  },

  // OCR GCSE English Language landing
  'ocr.lang.spec_label': { en: 'OCR GCSE (J351)', ar: 'OCR GCSE (J351)' },
  'ocr.lang.hero.h1': { en: 'English Language', ar: 'اللغة الإنجليزية' },
  'ocr.lang.hero.intro': {
    en: 'Everything you need to revise for OCR GCSE English Language. Two examined components plus a spoken language endorsement.',
    ar: 'كل اللي تحتاجه عشان تذاكر لـ OCR GCSE English Language. مكوّنين ممتحَنين زائد اعتماد التحدث.',
  },
  'ocr.lang.overview.h2': { en: 'Specification Overview', ar: 'نظرة عامة على المنهج' },
  'ocr.lang.overview.p': {
    en: 'The OCR GCSE English Language specification (J351) is designed to inspire and engage students through a wide range of texts and writing tasks. The qualification is assessed through two examined components, each worth 50% of the GCSE, plus a separately endorsed spoken language component.',
    ar: 'منهج OCR GCSE English Language (J351) مصمَّم لإلهام الطلاب وإشراكهم عبر تشكيلة واسعة من النصوص ومهام الكتابة. التقييم يتم عبر مكوّنين ممتحَنين، كل واحد يساوي ٥٠٪ من الـ GCSE، زائد مكوّن للتحدث يُعتمد بشكل منفصل.',
  },
  'ocr.lang.table.component': { en: 'Component', ar: 'المكوّن' },
  'ocr.lang.table.title': { en: 'Title', ar: 'العنوان' },
  'ocr.lang.table.weight': { en: 'Weighting', ar: 'الوزن' },
  'ocr.lang.table.duration': { en: 'Duration', ar: 'المدة' },
  'ocr.lang.paper1.title': {
    en: 'Communicating Information and Ideas',
    ar: 'إيصال المعلومات والأفكار',
  },
  'ocr.lang.paper2.title': { en: 'Exploring Effects and Impact', ar: 'استكشاف التأثيرات والأثر' },
  'ocr.lang.spoken.title': { en: 'Spoken Language Endorsement', ar: 'اعتماد التحدث' },
  'ocr.lang.spoken.weight': { en: 'Separate', ar: 'منفصل' },
  'ocr.lang.resources.h2': { en: 'Study Resources', ar: 'مصادر المذاكرة' },
  'ocr.lang.skills.h2': { en: 'Key Skills Assessed', ar: 'المهارات الأساسية المُقيَّمة' },
  'ocr.lang.skills.intro': {
    en: 'Understanding the key skills assessed is essential for knowing what the marker is looking for. OCR English Language tests the following skills:',
    ar: 'فهم المهارات الأساسية المُقيَّمة ضروري عشان تعرف شنو يدوّر المصحح. OCR English Language يختبر هذه المهارات:',
  },
  'ocr.lang.section.paper1.title': {
    en: 'Paper 1: Communicating Information and Ideas',
    ar: 'Paper 1: إيصال المعلومات والأفكار',
  },
  'ocr.lang.section.paper1.desc': {
    en: 'Non-fiction and literary non-fiction reading, plus writing to present information and ideas. Worth 50% of the GCSE.',
    ar: 'قراءة نصوص واقعية وأدبية غير روائية، مع الكتابة لعرض المعلومات والأفكار. يساوي ٥٠٪ من الـ GCSE.',
  },
  'ocr.lang.section.paper2.title': {
    en: 'Paper 2: Exploring Effects and Impact',
    ar: 'Paper 2: استكشاف التأثيرات والأثر',
  },
  'ocr.lang.section.paper2.desc': {
    en: 'Fiction and literary text reading, plus imaginative and creative writing. Worth 50% of the GCSE.',
    ar: 'قراءة نصوص روائية وأدبية، مع الكتابة الإبداعية والتخيّلية. يساوي ٥٠٪ من الـ GCSE.',
  },
  'ocr.lang.section.spoken.title': { en: 'Spoken Language Endorsement', ar: 'اعتماد التحدث' },
  'ocr.lang.section.spoken.desc': {
    en: 'Separately reported endorsement for presenting, listening, and responding. Graded Pass, Merit, or Distinction.',
    ar: 'اعتماد يُسجَّل بشكل منفصل للعرض والاستماع والرد. يُقيَّم Pass أو Merit أو Distinction.',
  },
  'ocr.lang.section.techniques.title': { en: 'Techniques Guide', ar: 'دليل الأساليب' },
  'ocr.lang.section.techniques.desc': {
    en: 'Comprehensive guide to language and structural techniques you need for OCR English Language analysis.',
    ar: 'دليل شامل للأساليب اللغوية والبنائية اللي تحتاجها لتحليل OCR English Language.',
  },
  'ocr.lang.section.writing.title': { en: 'Writing Skills', ar: 'مهارات الكتابة' },
  'ocr.lang.section.writing.desc': {
    en: 'OCR-specific writing guidance covering writing for real purposes, creative writing, and how to hit the top band.',
    ar: 'إرشادات كتابة خاصة بـ OCR تغطي الكتابة لأغراض واقعية والكتابة الإبداعية وكيف توصل أعلى مستوى.',
  },
  'ocr.lang.section.grades.title': { en: 'Grade Boundaries', ar: 'حدود الدرجات' },
  'ocr.lang.section.grades.desc': {
    en: 'Historical grade boundaries for OCR GCSE English Language. See the marks needed for each grade across past series.',
    ar: 'حدود الدرجات السابقة لـ OCR GCSE English Language. شوف العلامات المطلوبة لكل درجة عبر السنوات السابقة.',
  },

  // OCR GCSE English Literature landing
  'ocr.lit.spec_label': { en: 'OCR GCSE (J352)', ar: 'OCR GCSE (J352)' },
  'ocr.lit.hero.h1': { en: 'English Literature', ar: 'الأدب الإنجليزي' },
  'ocr.lit.hero.intro': {
    en: 'Everything you need to revise for OCR GCSE English Literature. Two examined papers covering modern texts, literary heritage, poetry, and Shakespeare.',
    ar: 'كل اللي تحتاجه عشان تذاكر لـ OCR GCSE English Literature. ورقتين ممتحَنتين تغطي النصوص الحديثة والتراث الأدبي والشعر و Shakespeare.',
  },
  'ocr.lit.overview.h2': { en: 'Exam Overview', ar: 'نظرة عامة على الامتحان' },
  'ocr.lit.overview.intro': {
    en: 'The OCR GCSE English Literature specification (J352) is assessed through two examined papers, each worth 50% of the final grade. There is no coursework or controlled assessment.',
    ar: 'منهج OCR GCSE English Literature (J352) يُقيَّم عبر ورقتين ممتحَنتين، كل وحدة تساوي ٥٠٪ من الدرجة النهائية. ما في تكليف دراسي ولا تقييم مُراقَب.',
  },
  'ocr.lit.papers.h2': { en: 'Exam Papers', ar: 'أوراق الامتحان' },
  'ocr.lit.papers.intro': {
    en: 'Detailed breakdowns of each paper, including question types, mark allocations, and timing advice.',
    ar: 'تفصيل لكل ورقة، يشمل أنواع الأسئلة وتوزيع الدرجات ونصائح إدارة الوقت.',
  },
  'ocr.lit.paper1.h3': {
    en: 'Exploring Modern & Literary Heritage Texts',
    ar: 'استكشاف النصوص الحديثة والتراث الأدبي',
  },
  'ocr.lit.paper2.h3': { en: 'Exploring Poetry & Shakespeare', ar: 'استكشاف الشعر و Shakespeare' },
  'ocr.lit.guides.h2': { en: 'Text Study Guides', ar: 'أدلة دراسة النصوص' },
  'ocr.lit.guides.intro': {
    en: 'In-depth revision guides for each set text, covering characters, themes, key quotations, context, and essay planning.',
    ar: 'أدلة مراجعة معمَّقة لكل نص مقرَّر، تغطي الشخصيات والمواضيع والاقتباسات الأساسية والسياق وتخطيط المقال.',
  },
  'ocr.lit.ao.h2': { en: 'Assessment Objectives', ar: 'أهداف التقييم' },
  'ocr.lit.ao.intro': {
    en: 'All questions are marked against these four assessment objectives. Understanding them will help you target your revision effectively.',
    ar: 'جميع الأسئلة تُصحَّح بناءً على أهداف التقييم الأربعة AO. فهمهم بيساعدك تذاكر بفعالية.',
  },
  'ocr.lit.skills.h2': {
    en: 'Key Skills for English Literature',
    ar: 'المهارات الأساسية للأدب الإنجليزي',
  },
  'ocr.lit.grades.h2': { en: 'Grade Boundaries', ar: 'حدود الدرجات' },
  'ocr.lit.grades.intro': {
    en: 'Check the latest OCR GCSE English Literature grade boundaries, see what each grade looks like, and plan how to push your marks higher.',
    ar: 'شوف آخر حدود درجات OCR GCSE English Literature، وشكل كل درجة، وكيف تقدر ترفع علاماتك.',
  },
  'ocr.lit.grades.cta': { en: 'View Grade Boundaries', ar: 'شوف حدود الدرجات' },
  'ocr.lit.paper.label.01': { en: 'Paper 01', ar: 'Paper 01' },
  'ocr.lit.paper.label.02': { en: 'Paper 02', ar: 'Paper 02' },
  'ocr.lit.duration.2h': { en: '2 hours', ar: 'ساعتين' },
  'ocr.lit.weight.50': { en: '50% of GCSE', ar: '٥٠٪ من الـ GCSE' },

  // ─── WJEC / Eduqas namespace ─────────────────────────────────────────
  'wjec.board_name': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },
  'eduqas.board_name': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },

  'alevel.eduqas.board_name': {
    en: 'WJEC Eduqas A-Level English',
    ar: 'WJEC Eduqas A-Level English',
  },
  'alevel.eduqas.summary': {
    en: 'WJEC Eduqas A-Level English Literature and Language revision hub. Cross-board set text analysis, essay technique and language study while full Eduqas A-Level content is on our roadmap.',
    ar: 'مركز مراجعة WJEC Eduqas A-Level English Literature و Language. تحليل النصوص المقررة المشترك بين البوردات، مهارات المقال، ودراسة اللغة لين ما يخلص محتوى Eduqas A-Level الكامل ضمن خطتنا.',
  },

  // WJEC GCSE English Language landing
  'wjec.lang.spec_label': { en: 'WJEC Eduqas GCSE (C700QS)', ar: 'WJEC Eduqas GCSE (C700QS)' },
  'wjec.lang.hero.h1': { en: 'English Language Revision Hub', ar: 'مركز مراجعة اللغة الإنجليزية' },
  'wjec.lang.hero.intro': {
    en: 'Everything you need for your WJEC Eduqas English Language GCSE. Two components covering 20th-century literature reading, creative prose writing, non-fiction reading, and writing for real purposes — fully broken down with exam technique and marking-guide guidance.',
    ar: 'كل اللي تحتاجه لـ WJEC Eduqas English Language GCSE. مكوّنين يغطون قراءة أدب القرن العشرين، والكتابة النثرية الإبداعية، وقراءة النصوص الواقعية، والكتابة لأغراض حقيقية — مع شرح مفصّل لمهارات الامتحان وإرشادات التصحيح.',
  },
  'wjec.lang.glance.h2': { en: 'Exam at a Glance', ar: 'الامتحان بنظرة سريعة' },
  'wjec.lang.glance.board': { en: 'Exam Board', ar: 'البورد' },
  'wjec.lang.glance.board_value': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },
  'wjec.lang.glance.spec': { en: 'Specification', ar: 'كود المنهج' },
  'wjec.lang.glance.time': { en: 'Total Exam Time', ar: 'إجمالي مدة الامتحان' },
  'wjec.lang.glance.time_value': { en: '3 hrs 45 mins', ar: '٣ ساعات و٤٥ دقيقة' },
  'wjec.lang.glance.marks': { en: 'Total Marks', ar: 'إجمالي الدرجات' },
  'wjec.lang.glance.marks_value': { en: '160 (+ Spoken Language)', ar: '١٦٠ (+ التحدث)' },
  'wjec.lang.table.component': { en: 'Component', ar: 'المكوّن' },
  'wjec.lang.table.duration': { en: 'Duration', ar: 'المدة' },
  'wjec.lang.table.marks': { en: 'Marks', ar: 'الدرجات' },
  'wjec.lang.table.percent': { en: '% of GCSE', ar: '٪ من الـ GCSE' },
  'wjec.lang.paper1.long': {
    en: 'Paper 1 — 20th Century Literature Reading & Creative Prose Writing',
    ar: 'Paper 1 — قراءة أدب القرن العشرين والكتابة النثرية الإبداعية',
  },
  'wjec.lang.paper2.long': {
    en: 'Paper 2 — 19th & 21st Century Non-Fiction Reading & Writing for Real Purposes',
    ar: 'Paper 2 — قراءة النصوص الواقعية للقرن التاسع عشر والحادي والعشرين والكتابة لأغراض حقيقية',
  },
  'wjec.lang.spoken.long': { en: 'Spoken Language Endorsement', ar: 'اعتماد التحدث' },
  'wjec.lang.spoken.reported': { en: 'Reported separately', ar: 'يُسجَّل بشكل منفصل' },
  'wjec.lang.spoken.separate': { en: 'Separate', ar: 'منفصل' },
  'wjec.lang.spoken.na': { en: 'N/A', ar: 'لا ينطبق' },
  'wjec.lang.breakdown.h2': { en: 'Component Breakdown', ar: 'تفصيل المكوّنات' },
  'wjec.lang.breakdown.intro': {
    en: 'Understand exactly what each component covers, how it is structured, and what the marker is looking for.',
    ar: 'افهم بالضبط شنو يغطي كل مكوّن، وكيف هو منظَّم، وشنو يدوّر المصحح.',
  },
  'wjec.lang.paper1.h3': {
    en: 'Paper 1: 20th Century Literature Reading & Creative Prose Writing',
    ar: 'Paper 1: قراءة أدب القرن العشرين والكتابة النثرية الإبداعية',
  },
  'wjec.lang.paper1.meta': {
    en: '1 hour 45 minutes • 80 marks • 40% of GCSE',
    ar: 'ساعة و٤٥ دقيقة • ٨٠ درجة • ٤٠٪ من الـ GCSE',
  },
  'wjec.lang.paper2.h3': {
    en: 'Paper 2: 19th & 21st Century Non-Fiction Reading & Writing for Real Purposes',
    ar: 'Paper 2: قراءة النصوص الواقعية للقرن التاسع عشر والحادي والعشرين والكتابة لأغراض حقيقية',
  },
  'wjec.lang.paper2.meta': {
    en: '2 hours • 80 marks • 60% of GCSE',
    ar: 'ساعتين • ٨٠ درجة • ٦٠٪ من الـ GCSE',
  },
  'wjec.lang.skills.h2': { en: 'Key Skills Assessed', ar: 'المهارات الأساسية المُقيَّمة' },
  'wjec.lang.skills.intro': {
    en: 'Every question targets specific skills. Understanding them helps you know exactly what markers want.',
    ar: 'كل سؤال يستهدف مهارات محددة. فهمهم بيخلّيك تعرف بالضبط شنو يبغى المصحح.',
  },
  'wjec.lang.explore.h2': { en: 'Explore Revision Resources', ar: 'استكشف مصادر المراجعة' },
  'wjec.lang.explore.intro': {
    en: 'Dive deeper into specific areas of the WJEC Eduqas English Language GCSE.',
    ar: 'تعمّق في مجالات محددة من WJEC Eduqas English Language GCSE.',
  },
  'wjec.lang.diff.h2': {
    en: 'How WJEC Eduqas Differs from AQA & Edexcel',
    ar: 'كيف WJEC Eduqas يختلف عن AQA و Edexcel',
  },
  'wjec.lang.grades.h3': { en: 'Grade Boundaries', ar: 'حدود الدرجات' },
  'wjec.lang.grades.desc': {
    en: 'Recent WJEC Eduqas English Language grade boundaries, what each grade looks like in practice, and how to push your marks higher.',
    ar: 'حدود الدرجات الأخيرة لـ WJEC Eduqas English Language، شكل كل درجة على أرض الواقع، وكيف ترفع علاماتك.',
  },
  'wjec.lang.grades.badge': { en: '2023–2025 data', ar: 'بيانات ٢٠٢٣–٢٠٢٥' },

  // WJEC GCSE English Literature landing
  'wjec.lit.spec_label': { en: 'WJEC Eduqas GCSE', ar: 'WJEC Eduqas GCSE' },
  'wjec.lit.hero.h1': { en: 'English Literature Revision', ar: 'مراجعة الأدب الإنجليزي' },
  'wjec.lit.hero.intro': {
    en: 'Everything you need to revise for WJEC Eduqas GCSE English Literature. Paper overviews, set text guides, poetry anthology analysis, and exam technique — all in one place.',
    ar: 'كل اللي تحتاجه عشان تذاكر لـ WJEC Eduqas GCSE English Literature. نظرة عامة على الأوراق، أدلة النصوص المقررة، تحليل أنطولوجي الشعر، ومهارات الامتحان — كله في مكان واحد.',
  },
  'wjec.lit.overview.h2': { en: 'Exam Overview', ar: 'نظرة عامة على الامتحان' },
  'wjec.lit.overview.intro': {
    en: 'The WJEC Eduqas GCSE English Literature qualification is assessed through two externally examined papers. Paper 1 is worth 40% and Paper 2 is worth 60% of the final grade. Both papers are closed-book — no texts are allowed in the exam room.',
    ar: 'مؤهل WJEC Eduqas GCSE English Literature يُقيَّم عبر ورقتين ممتحَنتين خارجياً. Paper 1 يساوي ٤٠٪ و Paper 2 يساوي ٦٠٪ من الدرجة النهائية. الورقتين بدون كتاب مفتوح — ما يُسمح بأي نصوص داخل قاعة الامتحان.',
  },
  'wjec.lit.paper1.title': {
    en: 'Paper 1: Shakespeare and Poetry',
    ar: 'Paper 1: Shakespeare والشعر',
  },
  'wjec.lit.paper1.desc': {
    en: 'Section A: Shakespeare — one play studied in depth with an extract-based essay question. Section B: Poetry — two poems from the WJEC anthology compared in a single essay.',
    ar: 'القسم A: Shakespeare — مسرحية وحدة تُدرَس بعمق مع سؤال مقال يعتمد على مقطع. القسم B: الشعر — قصيدتين من أنطولوجي WJEC تُقارَن في مقال واحد.',
  },
  'wjec.lit.paper1.marks': { en: '80 marks — 40% of GCSE', ar: '٨٠ درجة — ٤٠٪ من الـ GCSE' },
  'wjec.lit.paper1.duration': { en: '2 hours', ar: 'ساعتين' },
  'wjec.lit.paper2.title': {
    en: 'Paper 2: Post-1914 Prose/Drama, 19th Century Prose & Unseen Poetry',
    ar: 'Paper 2: نثر ودراما ما بعد ١٩١٤، نثر القرن التاسع عشر، والشعر غير المرئي',
  },
  'wjec.lit.paper2.desc': {
    en: 'Section A: Post-1914 prose or drama (extract-based and essay). Section B: 19th-century prose (extract-based and essay). Section C: Unseen poetry — one analysis and one comparison.',
    ar: 'القسم A: نثر أو دراما ما بعد ١٩١٤ (مقطع ومقال). القسم B: نثر القرن التاسع عشر (مقطع ومقال). القسم C: شعر غير مرئي — تحليل واحد ومقارنة واحدة.',
  },
  'wjec.lit.paper2.marks': { en: '80 marks — 60% of GCSE', ar: '٨٠ درجة — ٦٠٪ من الـ GCSE' },
  'wjec.lit.paper2.duration': { en: '2 hours 30 minutes', ar: 'ساعتين و٣٠ دقيقة' },
  'wjec.lit.paper1.meta': {
    en: '2 hours • 80 marks • 40% of GCSE',
    ar: 'ساعتين • ٨٠ درجة • ٤٠٪ من الـ GCSE',
  },
  'wjec.lit.paper2.meta': {
    en: '2 hours 30 minutes • 80 marks • 60% of GCSE',
    ar: 'ساعتين و٣٠ دقيقة • ٨٠ درجة • ٦٠٪ من الـ GCSE',
  },
  'wjec.lit.settexts.h2': { en: 'Set Texts List', ar: 'قائمة النصوص المقررة' },
  'wjec.lit.settexts.intro': {
    en: 'Your school will choose one text from each category below. Check with your teacher which texts you are studying.',
    ar: 'مدرستك بتختار نص واحد من كل قسم. اسأل معلمك أي نصوص تدرسها.',
  },
  'wjec.lit.settexts.shakespeare': { en: 'Shakespeare (Paper 1)', ar: 'Shakespeare (Paper 1)' },
  'wjec.lit.settexts.post1914': {
    en: 'Post-1914 Prose/Drama (Paper 2)',
    ar: 'نثر ودراما ما بعد ١٩١٤ (Paper 2)',
  },
  'wjec.lit.settexts.nineteenth': {
    en: '19th Century Prose (Paper 2)',
    ar: 'نثر القرن التاسع عشر (Paper 2)',
  },
  'wjec.lit.ao.h2': { en: 'Assessment Objectives', ar: 'أهداف التقييم' },
  'wjec.lit.ao.intro': {
    en: 'All responses are marked against these four AOs. Knowing how marks are weighted for each question helps you structure your answer.',
    ar: 'جميع الإجابات تُصحَّح بناءً على أهداف التقييم الأربعة AO. معرفة توزيع الدرجات تساعدك في تنظيم إجابتك.',
  },
  'wjec.lit.features.h2': {
    en: 'Key features of the WJEC Eduqas exam',
    ar: 'مميزات امتحان WJEC Eduqas الأساسية',
  },

  // ─── Cambridge namespace ─────────────────────────────────────────────
  'cambridge.board_name': { en: 'Cambridge International', ar: 'Cambridge International' },
  'cambridge.hub.back': { en: 'All exam boards', ar: 'كل البوردات' },
  'cambridge.hub.badge': { en: 'Cambridge International', ar: 'Cambridge International' },
  'cambridge.hub.tag': { en: 'First Language English', ar: 'First Language English' },
  'cambridge.hub.h1': { en: 'Cambridge IGCSE English', ar: 'Cambridge IGCSE English' },
  'cambridge.hub.intro': {
    en: "Cambridge First Language English is the world's largest international English qualification. Pick your course below to access full study guides, paper walkthroughs and past paper practice.",
    ar: 'Cambridge First Language English هو أكبر مؤهل دولي للغة الإنجليزية بالعالم. اختر دورتك تحت عشان توصل لأدلة الدراسة الكاملة وشرح الأوراق وتدريب على الأوراق السابقة.',
  },
  'cambridge.hub.choose': { en: 'Choose your course', ar: 'اختر دورتك' },
  'cambridge.hub.available': { en: 'Available now', ar: 'متوفر الحين' },
  'cambridge.hub.open_prefix': { en: 'Open ', ar: 'افتح ' },
  'cambridge.hub.skills.h2': { en: 'Skills & Practice', ar: 'المهارات والتدريب' },
  'cambridge.hub.tools.h2': { en: 'Study Tools', ar: 'أدوات المذاكرة' },
  'cambridge.hub.about.h2': {
    en: 'About Cambridge First Language English',
    ar: 'حول Cambridge First Language English',
  },
  'cambridge.hub.about.body': {
    en: 'Cambridge First Language English is designed for students whose first language is English. It develops the ability to communicate clearly, accurately and effectively in both speech and writing, and to use a wide range of vocabulary, correct grammar, spelling and punctuation. Students also learn to read a wide range of texts fluently and with good understanding.',
    ar: 'Cambridge First Language English مصمَّم للطلاب اللي لغتهم الأم إنجليزي. يطوّر القدرة على التواصل بوضوح ودقة وفعالية، تحدثاً وكتابةً، واستخدام مفردات واسعة مع قواعد وإملاء وعلامات ترقيم صحيحة. الطلاب يتعلمون كذلك قراءة تشكيلة واسعة من النصوص بطلاقة وفهم عميق.',
  },
  'cambridge.hub.about.reading.h3': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'cambridge.hub.about.reading.body': {
    en: 'Demonstrate understanding of explicit and implicit meanings.',
    ar: 'إظهار فهم المعاني الصريحة والضمنية.',
  },
  'cambridge.hub.about.writing.h3': { en: 'Writing skills', ar: 'مهارات الكتابة' },
  'cambridge.hub.about.writing.body': {
    en: 'Communicate clearly, accurately and effectively for different purposes.',
    ar: 'التواصل بوضوح ودقة وفعالية لأغراض مختلفة.',
  },
  'cambridge.hub.0500.name': { en: 'IGCSE Language A', ar: 'IGCSE Language A' },
  'cambridge.hub.0500.tagline': {
    en: 'For students whose first language is English — graded A* to G',
    ar: 'للطلاب اللي لغتهم الأم إنجليزي — التقييم من A* إلى G',
  },
  'cambridge.hub.0500.desc': {
    en: 'Two-paper qualification testing reading comprehension, summary writing, directed writing and extended composition. Graded A*-G and sat by thousands of students in international schools every year.',
    ar: 'مؤهل من ورقتين يختبر فهم القراءة والكتابة الموجزة والكتابة الموجَّهة والإنشاء المُطوَّل. التقييم A*-G، يجلس له آلاف الطلاب بالمدارس الدولية كل سنة.',
  },
  'cambridge.hub.0500.highlight.reading': {
    en: 'Reading Paper — comprehension, summary and directed writing',
    ar: 'ورقة القراءة — الفهم والتلخيص والكتابة الموجَّهة',
  },
  'cambridge.hub.0500.highlight.writing': {
    en: 'Writing Paper — directed writing and composition',
    ar: 'ورقة الكتابة — الكتابة الموجَّهة والإنشاء',
  },
  'cambridge.hub.0500.highlight.grades': { en: 'Grade boundaries A*-G', ar: 'حدود الدرجات A*-G' },
  'cambridge.hub.0500.highlight.syllabus': {
    en: 'Full syllabus breakdown',
    ar: 'تفصيل المنهج الكامل',
  },
  'cambridge.hub.0990.name': { en: 'IGCSE Language B', ar: 'IGCSE Language B' },
  'cambridge.hub.0990.tagline': {
    en: 'For students whose first language is English — graded 9 to 1',
    ar: 'للطلاب اللي لغتهم الأم إنجليزي — التقييم من ٩ إلى ١',
  },
  'cambridge.hub.0990.desc': {
    en: 'The 9-1 graded version of Cambridge First Language English. Identical content and assessment structure to Language A but reported on the numerical 9-1 scale.',
    ar: 'نسخة Cambridge First Language English المُقيَّمة ٩-١. نفس المحتوى وهيكل التقييم لـ Language A لكن النتائج تُسجَّل على مقياس ٩-١.',
  },
  'cambridge.hub.0990.highlight.reading': {
    en: 'Reading Paper — comprehension, summary and language analysis',
    ar: 'ورقة القراءة — الفهم والتلخيص وتحليل اللغة',
  },
  'cambridge.hub.0990.highlight.writing': {
    en: 'Writing Paper — directed writing and composition',
    ar: 'ورقة الكتابة — الكتابة الموجَّهة والإنشاء',
  },
  'cambridge.hub.0990.highlight.conversion': {
    en: '9-1 vs A*-G grade conversion',
    ar: 'تحويل الدرجات ٩-١ مقابل A*-G',
  },
  'cambridge.hub.0990.highlight.diff': {
    en: 'How Language B differs from Language A',
    ar: 'كيف Language B يختلف عن Language A',
  },
  'cambridge.hub.papers_n': { en: '2 papers', ar: 'ورقتين' },
  'cambridge.hub.time_total': { en: '4h total', ar: '٤ ساعات إجمالاً' },
  'cambridge.hub.grading.0500': { en: 'A* – G', ar: 'A* – G' },
  'cambridge.hub.grading.0990': { en: '9 – 1', ar: '٩ – ١' },
  'cambridge.hub.skills.reading.label': { en: 'Reading skills', ar: 'مهارات القراءة' },
  'cambridge.hub.skills.reading.desc': {
    en: 'Comprehension, language analysis and summary techniques',
    ar: 'الفهم وتحليل اللغة وأساليب التلخيص',
  },
  'cambridge.hub.skills.composition.label': { en: 'Composition skills', ar: 'مهارات الإنشاء' },
  'cambridge.hub.skills.composition.desc': {
    en: 'Narrative, descriptive writing and mark-scheme strategies',
    ar: 'الكتابة السردية والوصفية وطرق التعامل مع معايير التصحيح',
  },
  'cambridge.hub.tools.marking.title': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بالذكاء الاصطناعي',
  },
  'cambridge.hub.tools.marking.desc': {
    en: 'Submit an essay for AI feedback',
    ar: 'أرسل مقالك للحصول على ملاحظات بالذكاء الاصطناعي',
  },
  'cambridge.hub.tools.quiz.title': { en: 'Quiz', ar: 'اختبار' },
  'cambridge.hub.tools.quiz.desc': {
    en: 'Test yourself with IGCSE questions',
    ar: 'اختبر نفسك بأسئلة IGCSE',
  },
  'cambridge.hub.tools.flashcards.title': { en: 'Flashcards', ar: 'بطاقات المراجعة' },
  'cambridge.hub.tools.flashcards.desc': {
    en: 'Spaced repetition revision',
    ar: 'مراجعة بالتكرار المُتباعد',
  },
  'cambridge.hub.tools.games.title': { en: 'Games', ar: 'ألعاب' },
  'cambridge.hub.tools.games.desc': { en: '7 GCSE-grade games', ar: '٧ ألعاب بمستوى GCSE' },
  'cambridge.hub.tools.toolkit.title': { en: 'AI Toolkit', ar: 'أدوات الذكاء الاصطناعي' },
  'cambridge.hub.tools.toolkit.desc': {
    en: 'AI test builder and revision notes',
    ar: 'منشئ الاختبارات وملخصات المراجعة بالذكاء الاصطناعي',
  },

  // ─── Qatar IGCSE landing page ───────────────────────────────────────
  'qatar.breadcrumb_home': { en: 'Home', ar: 'الرئيسية' },
  'qatar.breadcrumb_current': { en: 'Qatar IGCSE English', ar: 'IGCSE إنجليزي قطر' },
  'qatar.badge': {
    en: 'For students at international schools in Qatar',
    ar: 'لطلاب المدارس العالمية في قطر',
  },
  'qatar.h1': {
    en: 'IGCSE English revision for students in Qatar',
    ar: 'مراجعة IGCSE إنجليزي لطلاب قطر',
  },
  'qatar.intro': {
    en: 'Structured revision for the two IGCSE English specifications used in most British international schools in Doha — Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge (0500 First Language, 0990 redesigned). Calibrated to mark schemes, paced for the Qatar academic year, and accessible from school WiFi.',
    ar: 'مراجعة مرتّبة للسبيسز اللي تستخدمها أغلب المدارس البريطانية العالمية بالدوحة — Pearson Edexcel (4ET1 الأدب، 4EA1 اللغة A) و Cambridge (0500 اللغة الأولى، 0990 المُحدّث). معايرة على مخططات التصحيح، ومضبوطة على السنة الدراسية القطرية، وتفتح من واي فاي المدرسة.',
  },
  'qatar.cta.get_started': { en: 'Get started', ar: 'ابدأ الحين' },
  'qatar.cta.see_specs': { en: 'See spec coverage', ar: 'شوف تغطية السبيسز' },
  'qatar.specs.h2': {
    en: 'Which IGCSE English specs are sat in Qatar?',
    ar: 'يا هي سبيسز IGCSE إنجليزي اللي تنذاكر بقطر؟',
  },
  'qatar.specs.intro': {
    en: 'Most international schools in Doha follow a British curriculum and enter their Year 11 cohort for International GCSE English. The two boards you will see most often on timetables are Pearson Edexcel and Cambridge International — different awarding organisations with different paper structures, different anthologies, and different assessment objectives. Knowing which one your school enters you for matters, because preparing for the wrong paper wastes revision time.',
    ar: 'أغلب المدارس العالمية بالدوحة تمشي على المنهج البريطاني وتسجل طلاب Year 11 لـ International GCSE English. اثنين بوردز بتشوفهم وايد بالجدول: Pearson Edexcel و Cambridge International — منظمتين تصدير شهادات مختلفتين، بأوراق امتحان وكتب أدبية وأهداف تقييم مختلفة. لازم تعرف يا بورد يحطّك مدرستك فيه، لأن المذاكرة للورقة الغلط وقت ضايع.',
  },
  'qatar.specs.edexcel.title': {
    en: 'Pearson Edexcel International GCSE',
    ar: 'Pearson Edexcel International GCSE',
  },
  'qatar.specs.edexcel.4et1': {
    en: '4ET1 — Literature. Two-paper exam covering an anthology of poetry and prose, an unseen poetry question, and your studied drama and prose texts. Edexcel publishes its own anthology and a fixed list of set drama and prose options.',
    ar: '4ET1 — الأدب. امتحان من ورقتين يغطي مختارات شعر ونثر، سؤال شعر ما تشوفه قبل، ودراما ونثر مدروسة. Edexcel تنشر مختاراتها الخاصة وقائمة ثابتة لاختيارات الدراما والنثر.',
  },
  'qatar.specs.edexcel.4ea1': {
    en: '4EA1 — English Language A. Reading and writing assessed across two papers, with an anthology of non-fiction passages used as the reading stimulus. Imaginative and transactional writing both appear.',
    ar: '4EA1 — لغة إنجليزية A. قراءة وكتابة على ورقتين، مع مختارات قطع غير قصصية مستخدمة كمحفّز قراءة. كتابة إبداعية ومعاملاتية كلهم يطلعون.',
  },
  'qatar.specs.cambridge.title': { en: 'Cambridge IGCSE', ar: 'Cambridge IGCSE' },
  'qatar.specs.cambridge.0500': {
    en: '0500 — English as a First Language. The long-running Cambridge spec: reading skills assessed through unseen non-fiction passages, plus directed and composition writing. No published anthology — the passages are unseen on the day.',
    ar: '0500 — الإنجليزية كلغة أولى. سبيس Cambridge القديم: مهارات القراءة تنقاس على قطع غير قصصية ما تشوفها قبل، مع كتابة موجّهة وإنشاء. ما في مختارات منشورة — القطع تطلع يوم الامتحان.',
  },
  'qatar.specs.cambridge.0990': {
    en: '0990 — redesigned variant. Aligned to the Cambridge 9-1 grading scale used internationally. Question design has been refreshed compared with 0500, and grade boundaries report on the 9-1 scale. Schools choose 0500 or 0990 depending on which grading scale their leavers need on transcripts.',
    ar: '0990 — النسخة المُحدّثة. مرتبطة بسلّم تقييم Cambridge 9-1 المستخدم عالمياً. تصميم الأسئلة تجدّد عن 0500، والحدود تطلع على سلّم 9-1. المدارس تختار 0500 أو 0990 على حسب يا سلّم تقييم يبغونه الخريجين بالشهادة.',
  },
  'qatar.specs.note': {
    en: 'If you are unsure which spec your school uses, your English teacher or head of year is the quickest source of truth — the spec code usually appears on your mock paper, your timetable, and your end-of-year report.',
    ar: 'لو ما تدري يا سبيس مدرستك تستخدم، معلم الإنجليزي مالك أو رئيس الصف أسرع مصدر — كود السبيس عادةً يطلع على ورقة الموك مالك، والجدول، وتقرير آخر السنة.',
  },
  'qatar.help.h2': {
    en: 'How The English Hub helps Qatar IGCSE students',
    ar: 'شلون The English Hub يساعد طلاب IGCSE بقطر',
  },
  'qatar.help.intro': {
    en: 'The platform is built around board-specific revision paths, so the work you put in lines up with the paper you sit in May or June. There are four core surfaces a Qatar-based IGCSE student will use day to day.',
    ar: 'المنصة مبنية على مسارات مراجعة لكل بورد، عشان الشغل اللي تسوّيه يطابق الورقة اللي بتذاكرها بمايو ولا يونيو. في أربع واجهات أساسية الطالب القطري ل IGCSE بيستخدمها كل يوم.',
  },
  'qatar.help.edexcel.title': {
    en: 'Full anthology coverage for Pearson Edexcel',
    ar: 'تغطية كاملة للمختارات Pearson Edexcel',
  },
  'qatar.help.edexcel.body': {
    en: 'Every poem in the Edexcel poetry anthology has its own analysis page — language, form, structure, context, and a comparison route into the rest of the cluster. Drama, Shakespeare and prose set texts each have a chapters / scenes breakdown, themes, key quotations, and essay-plan templates.',
    ar: 'كل قصيدة بمختارات Edexcel الشعرية عندها صفحة تحليل خاصة فيها — لغة، شكل، تركيب، سياق، ومسار مقارنة لباقي المجموعة. الدراما و Shakespeare والنثر المقرّر كل واحد عنده تقسيم فصول / مشاهد، ثيمات، اقتباسات أساسية، وقوالب خطط مقالات.',
  },
  'qatar.help.edexcel.4et1_link': { en: 'Open the Edexcel 4ET1 hub', ar: 'افتح صفحة Edexcel 4ET1' },
  'qatar.help.edexcel.4ea1_link': {
    en: 'Open the Edexcel 4EA1 Language A hub',
    ar: 'افتح صفحة Edexcel 4EA1 لغة A',
  },
  'qatar.help.cambridge.title': {
    en: 'Cambridge unseen-poetry and unseen-prose walkthroughs',
    ar: 'شرح Cambridge للشعر والنثر اللي ما تشوفه قبل',
  },
  'qatar.help.cambridge.body': {
    en: 'Cambridge 0500 and 0990 lean heavily on unseen reading. The platform has a library of worked walkthroughs across descriptive nature writing, classic novel openings, modernist fiction, travel writing and dialogue analysis — modelling the exact thinking process the mark scheme rewards. Use them as a daily 20-minute warm-up.',
    ar: 'Cambridge 0500 و 0990 يعتمدون وايد على القراءة الغير مرئية. المنصة فيها مكتبة شروحات تشمل كتابة وصف طبيعة، بدايات روايات كلاسيكية، أدب حداثي، أدب رحلات، وتحليل حوار — تنمذج التفكير اللي بالضبط يطلب مخطط التصحيح. استخدمها كتسخين يومي ٢٠ دقيقة.',
  },
  'qatar.help.cambridge.0500_link': {
    en: 'Open the Cambridge 0500 hub',
    ar: 'افتح صفحة Cambridge 0500',
  },
  'qatar.help.cambridge.0990_link': {
    en: 'Open the Cambridge 0990 hub',
    ar: 'افتح صفحة Cambridge 0990',
  },
  'qatar.help.ai.title': {
    en: 'AI-marked essay practice',
    ar: 'تدريب مقالات بتصحيح الذكاء الاصطناعي',
  },
  'qatar.help.ai.body': {
    en: 'Submit a full essay and the platform returns paragraph-level feedback against the assessment objectives for your spec — AO1 evidence, AO2 language and structure, AO3 context where it applies, AO4 comparison for Edexcel anthology questions. The feedback is calibrated to mark schemes, not a generic English checker, so the notes you get back match what your teacher would write in the margin.',
    ar: 'أرسل مقال كامل والمنصة ترجع لك ملاحظات على مستوى الفقرات مقابل أهداف التقييم لسبيسك — AO1 الأدلة، AO2 اللغة والتركيب، AO3 السياق حيث ينطبق، AO4 المقارنة لأسئلة مختارات Edexcel. الملاحظات معايرة على مخططات التصحيح مو فاحص إنجليزي عام، فالنوتات اللي تجيك تطابق اللي معلمك بيكتبه بالهامش.',
  },
  'qatar.help.paths.title': { en: 'Board-specific revision paths', ar: 'مسارات مراجعة لكل بورد' },
  'qatar.help.paths.body': {
    en: 'Pick your board on the first visit and the dashboard re-orders itself: only your papers, only your set texts, only your assessment objectives. Less scrolling through irrelevant content, more time on the tasks that move your grade.',
    ar: 'اختر بوردك أول زيارة واللوحة ترتّب نفسها: بس أوراقك، بس نصوصك المقرّرة، بس أهداف تقييمك. ما تمرّر بين محتوى ما يخصّك، ووقت أكثر على المهام اللي ترفع درجتك.',
  },
  'qatar.timezone.h2': {
    en: 'Time-zone-friendly revision: Qatar is GMT+3',
    ar: 'مراجعة مناسبة للتوقيت: قطر GMT+3',
  },
  'qatar.timezone.body1': {
    en: 'Qatar runs on Arabia Standard Time, which is three hours ahead of UK time. For IGCSE revision that small offset is genuinely useful. Most UK students are still in lessons when Doha schools have already finished for the day, which means a Qatar-based student sitting down at four in the afternoon is opening the platform before the UK evening peak — pages load fast and AI essay feedback comes back without a queue.',
    ar: 'قطر تمشي على توقيت السعودية، ثلاث ساعات قدّام توقيت بريطانيا. لمراجعة IGCSE هالفرق الصغير مفيد فعلاً. أغلب طلاب بريطانيا لسا بالحصص لمن مدارس الدوحة خلصت يومها، يعني الطالب القطري اللي يجلس الساعة أربع العصر يفتح المنصة قبل ذروة المساء البريطاني — الصفحات تفتح بسرعة وملاحظات الذكاء الاصطناعي ترجع بدون طابور.',
  },
  'qatar.timezone.body2': {
    en: 'The same offset matters in May and June. Most IGCSE exam papers are written under a common international timetable, but the support and clarification windows around them tend to follow UK working hours. Revising in the Doha afternoon means you finish your session and bank your progress before UK email queues even open.',
    ar: 'نفس الفرق مهم بمايو ويونيو. أغلب أوراق امتحانات IGCSE تتكتب على جدول دولي مشترك، بس نوافذ الدعم والتوضيح حولها تمشي على ساعات العمل البريطانية. مذاكرة بعصر الدوحة يعني تخلّص جلستك وتحفظ تقدّمك قبل ما طوابير إيميل بريطانيا تفتح.',
  },
  'qatar.timezone.tip_title': {
    en: 'A practical scheduling tip for Qatar students',
    ar: 'نصيحة جدولة عملية لطلاب قطر',
  },
  'qatar.timezone.tip_body': {
    en: 'The most productive single block of the week for many Qatar-based students is a weekend morning. Friday and Saturday mornings are quiet, the heat is manageable, and the family afternoon — visits, meals, errands — has not yet started. A two-hour block from around eight to ten in the morning, two days a week, is enough to keep an entire IGCSE Literature anthology in active recall. Use weekday afternoons for shorter twenty-minute drills and save the weekend mornings for full essay writing.',
    ar: 'أكثر فترة منتجة بالأسبوع لوايد طلاب قطر هي صباح ويك اند. صباح الجمعة والسبت هادي، الحر محتمل، وعصر العايلة — زيارات وأكل ومشاوير — ما بدا بعد. ساعتين تقريباً من الثمانية للعشرة الصباح، يومين بالأسبوع، يكفون عشان تخلّي كل مختارات أدب IGCSE بذاكرتك النشطة. استخدم عصر أيام الدراسة لتدريبات قصيرة ٢٠ دقيقة، وخلّ صباح الويك اند لكتابة المقالات الكاملة.',
  },
  'qatar.anthology.h2': {
    en: 'Edexcel IGCSE 4ET1 anthology in detail',
    ar: 'مختارات Edexcel IGCSE 4ET1 بالتفصيل',
  },
  'qatar.anthology.body1': {
    en: 'The Edexcel International GCSE English Literature anthology is a fixed collection of poems and prose extracts that you will be expected to know in detail by the time you sit Paper 1. The 4ET1 hub on the platform mirrors the anthology one-to-one — every poem has a dedicated page covering speaker, structure, language techniques, context, and the most common essay angles examiners reward.',
    ar: 'مختارات Edexcel International GCSE Literature مجموعة ثابتة من القصائد ومقتطفات النثر المفروض تعرفها بالتفصيل لمن تذاكر Paper 1. صفحة 4ET1 على المنصة تطابق المختارات واحد لواحد — كل قصيدة عندها صفحة فيها المتكلم، التركيب، تقنيات اللغة، السياق، وأكثر زوايا مقالات يكافئها الفاحصون.',
  },
  'qatar.anthology.body2': {
    en: 'For 4EA1 Language A students, the non-fiction anthology serves a different purpose: you analyse the passages for writers’ methods rather than memorising them. The anthology hub for the Language A spec walks through each prose passage with the techniques and structural moves you can quote in your reading-skills answer.',
    ar: 'لطلاب 4EA1 لغة A، مختارات النثر الغير قصصي تخدم غرض مختلف: تحلّل القطع لطرق الكاتب مو تحفظها. صفحة المختارات لسبيس Language A تشرح كل قطعة نثرية مع التقنيات والتحرّكات التركيبية اللي تقدر تستشهد فيها بإجابة مهارات القراءة.',
  },
  'qatar.anthology.4et1_link': {
    en: 'Edexcel 4ET1 Literature hub →',
    ar: 'صفحة Edexcel 4ET1 الأدب ←',
  },
  'qatar.anthology.4ea1_link': { en: 'Edexcel 4EA1 anthology →', ar: 'مختارات Edexcel 4EA1 ←' },
  'qatar.compare.h2': {
    en: 'Cambridge 0500 vs 0990 — which one is your school?',
    ar: 'Cambridge 0500 ولا 0990 — يا واحد مدرستك؟',
  },
  'qatar.compare.body1': {
    en: 'Cambridge International offers two parallel English as a First Language qualifications. 0500 reports grades on the long-standing A*–G scale and is the one many British international schools have used for years. 0990 is the redesigned variant that reports on the 9-1 scale, which lines up neatly with the grading scheme used inside England. Schools whose leavers continue into UK sixth forms or universities sometimes prefer 0990 for that reason, while schools with a more international destination pattern often stay on 0500.',
    ar: 'Cambridge International تقدّم اثنين شهادات للإنجليزية كلغة أولى. 0500 تطلع الدرجات على سلّم A*–G القديم وهي اللي وايد مدارس بريطانية عالمية تستخدمها من زمان. 0990 النسخة المُحدّثة اللي تطلع على سلّم 9-1، اللي يتطابق مع نظام التقييم المستخدم داخل إنجلترا. المدارس اللي خريجيها بيكملون بسكستث فورم أو جامعات بريطانيا أحياناً يفضّلون 0990، والمدارس اللي وجهات خريجيها أكثر دولية عادةً يستمرون على 0500.',
  },
  'qatar.compare.body2': {
    en: 'From a content standpoint, the skills tested overlap heavily — both papers reward close reading, accurate inference, and controlled writing. The platform has separate hubs for each spec so you only revise against the question types and grade boundaries that apply to you.',
    ar: 'من ناحية المحتوى، المهارات اللي تنقاس متشابهة وايد — كلا الورقتين تكافئ القراءة الدقيقة، الاستنتاج الصحيح، والكتابة المنضبطة. المنصة عندها صفحات منفصلة لكل سبيس عشان تذاكر بس أنواع الأسئلة وحدود الدرجات اللي تخصّك.',
  },
  'qatar.compare.0500_link': { en: 'Cambridge 0500 hub →', ar: 'صفحة Cambridge 0500 ←' },
  'qatar.compare.0990_link': { en: 'Cambridge 0990 hub →', ar: 'صفحة Cambridge 0990 ←' },
  'qatar.faq.h2': { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
  'qatar.faq.q1': {
    en: 'Is The English Hub aligned to Pearson Edexcel and Cambridge?',
    ar: 'هل The English Hub متطابق مع Pearson Edexcel و Cambridge؟',
  },
  'qatar.faq.a1': {
    en: 'Yes. The platform has dedicated revision paths for Pearson Edexcel International GCSE English Literature (4ET1) and English Language A (4EA1), as well as Cambridge IGCSE 0500 and the redesigned 0990 variant. Course material, model answers and AI feedback are calibrated to the published assessment objectives and mark schemes for each spec.',
    ar: 'إي. المنصة عندها مسارات مراجعة مخصّصة لـ Pearson Edexcel International GCSE Literature (4ET1) وLanguage A (4EA1)، بالإضافة لـ Cambridge IGCSE 0500 والنسخة المحدّثة 0990. مواد المنهج، الإجابات النموذجية، وملاحظات الذكاء الاصطناعي معايرة على أهداف التقييم المنشورة ومخططات التصحيح لكل سبيس.',
  },
  'qatar.faq.q2': {
    en: 'Can students in Qatar pay in QAR?',
    ar: 'يقدرون طلاب قطر يدفعون بالريال القطري؟',
  },
  'qatar.faq.a2': {
    en: 'Subscriptions are billed in GBP through our payment processor. Most international cards issued in Qatar will work and the bank handles the QAR-to-GBP conversion at the time of purchase — the rate shown on your statement comes from your card issuer, not from us. We do not currently offer a QAR-denominated checkout.',
    ar: 'الاشتراكات تنحاسب بالجنيه الإسترليني عبر معالج الدفع مالنا. أغلب الكروت العالمية المُصدرة بقطر بتشتغل والبنك يسوّي تحويل ريال قطري لجنيه إسترليني وقت الشراء — السعر اللي يطلع بالكشف من مصدر الكارت مالك، مو منا. ما عندنا حالياً دفع بالريال القطري.',
  },
  'qatar.faq.q3': {
    en: 'Does the platform work on the school WiFi (filtered networks)?',
    ar: 'هل المنصة تشتغل على واي فاي المدرسة (الشبكات المُفلترة)؟',
  },
  'qatar.faq.a3': {
    en: 'The site is hosted on theenglishhub.app over HTTPS with no third-party video host or ad network, which means it usually passes through standard school content filters. If your school uses a strict allowlist, ask your IT department to whitelist theenglishhub.app and any subdomain we use for media. We can supply a written list of domains on request.',
    ar: 'الموقع مستضاف على theenglishhub.app عبر HTTPS بدون مستضيف فيديو خارجي ولا شبكة إعلانات، يعني عادةً يمر من فلاتر المحتوى المدرسية. لو مدرستك تستخدم قائمة سماح صارمة، اطلب من قسم تكنولوجيا المعلومات يضيف theenglishhub.app وأي subdomain نستخدمه للوسائط. نقدر نوفّر قائمة domains مكتوبة بناءً على الطلب.',
  },
  'qatar.faq.q4': {
    en: 'Is there a teacher-licence for British international schools?',
    ar: 'هل في ترخيص معلمين للمدارس البريطانية العالمية؟',
  },
  'qatar.faq.a4': {
    en: 'Yes. Teachers at British international schools can register for a teacher account and request a school licence covering their department. Bulk student onboarding by spreadsheet is supported. Contact us through the for-schools page to discuss a quote — pricing is set in GBP and we can invoice schools directly.',
    ar: 'إي. المعلمون بالمدارس البريطانية العالمية يقدرون يسجلون حساب معلم ويطلبون ترخيص مدرسة يغطي قسمهم. تسجيل الطلاب الجماعي بشيت Excel مدعوم. تواصلوا معانا عبر صفحة for-schools للحديث عن العرض السعري — التسعير بالجنيه الإسترليني ونقدر نصدر فاتورة للمدارس مباشرة.',
  },
  'qatar.faq.q5': {
    en: 'Are revision schedules adapted for the Qatar academic calendar (Sept–June)?',
    ar: 'هل جداول المراجعة مكيّفة على التقويم الدراسي القطري (سبتمبر–يونيو)؟',
  },
  'qatar.faq.a5': {
    en: 'The default revision pathways are built around the May–June IGCSE exam series, which is the series most Qatar-based students sit, and the academic year runs from September. You can pace any path manually, and the AI study planner lets you input your own term dates and exam dates so the schedule fits the calendar your school actually uses.',
    ar: 'مسارات المراجعة الافتراضية مبنية حول سلسلة امتحانات IGCSE مايو-يونيو، اللي أغلب طلاب قطر يذاكرونها، والسنة الدراسية تمشي من سبتمبر. تقدر تظبط سرعة أي مسار يدوياً، ومخطط الدراسة بالذكاء الاصطناعي يخليك تدخّل تواريخ الترم والامتحانات مالك عشان الجدول يناسب التقويم اللي مدرستك تستخدمه فعلاً.',
  },
  'qatar.cta_final.h2': { en: 'Ready to start?', ar: 'مستعد تبدأ؟' },
  'qatar.cta_final.body': {
    en: 'Pick your board and the dashboard tailors itself to your spec — Edexcel 4ET1, Edexcel 4EA1, Cambridge 0500 or Cambridge 0990.',
    ar: 'اختر بوردك واللوحة بتترتب لسبيسك — Edexcel 4ET1, Edexcel 4EA1, Cambridge 0500 ولا Cambridge 0990.',
  },

  // ─── GCC IGCSE landing page ─────────────────────────────────────────
  'gcc.breadcrumb_current': { en: 'GCC IGCSE English', ar: 'IGCSE إنجليزي الخليج' },
  'gcc.eyebrow': { en: 'Local guide', ar: 'دليل محلي' },
  'gcc.h1': {
    en: 'IGCSE English revision for students in the GCC',
    ar: 'مراجعة IGCSE إنجليزي لطلاب الخليج',
  },
  'gcc.intro': {
    en: 'British curriculum students across the Gulf typically sit either Pearson Edexcel or Cambridge IGCSE English. This page maps the two pathways, points you at the right revision hub for your specification, and answers the questions parents and teachers here actually ask us.',
    ar: 'طلاب المنهج البريطاني بالخليج عادةً يذاكرون Pearson Edexcel ولا Cambridge IGCSE English. هالصفحة ترسم المسارين، تدلّك على صفحة المراجعة الصحيحة لسبيسك، وتجاوب على الأسئلة اللي يسألونها أولياء الأمور والمعلمين هني فعلاً.',
  },
  'gcc.cta.board_select': { en: 'Pick your exam board', ar: 'اختر بورد الامتحان مالك' },
  'gcc.cta.edexcel_hub': { en: 'Edexcel hub', ar: 'صفحة Edexcel' },
  'gcc.cta.cambridge_hub': { en: 'Cambridge 0500', ar: 'Cambridge 0500' },
  'gcc.curriculum.h2': {
    en: 'British curriculum schools in the GCC',
    ar: 'مدارس المنهج البريطاني بالخليج',
  },
  'gcc.curriculum.body1': {
    en: 'Most British and international schools across the GCC sit students for either the Pearson Edexcel or Cambridge International IGCSE in English. Both qualifications are recognised by UK universities and by the regional regulators that audit English-medium schools in the Gulf — the choice between them is usually a school-level decision tied to teacher training and historic preference, rather than a difference in academic value.',
    ar: 'أغلب المدارس البريطانية والعالمية بالخليج تنزّل طلابها لإما Pearson Edexcel ولا Cambridge International IGCSE بالإنجليزي. كلتا الشهادتين معترف فيهم من جامعات بريطانيا والجهات التنظيمية الإقليمية اللي تدقق على مدارس الإنجليزي بالخليج — الاختيار بينهم عادةً قرار على مستوى المدرسة مرتبط بتدريب المعلمين والتفضيل التاريخي، مو فرق بالقيمة الأكاديمية.',
  },
  'gcc.curriculum.body2': {
    en: 'In practice, schools in Dubai and Abu Dhabi tend to lean towards Pearson Edexcel, while the picture in Saudi Arabia and Qatar is more evenly split between the two boards. Kuwait, Bahrain, and Oman show a similar mix. If you are not sure which board your school enters, the simplest check is the specification code printed on your most recent mock paper or the front of your set-text edition: 4ET1 or 4EA1 means Edexcel, 0500 or 0990 means Cambridge.',
    ar: 'بالواقع، مدارس دبي وأبوظبي تميل لـ Pearson Edexcel، بينما الصورة بالسعودية وقطر أكثر تساوي بين البوردين. الكويت والبحرين وعُمان نفس الخلطة. لو ما تدري يا بورد مدرستك تنزّل، أسهل فحص هو كود السبيس المطبوع على آخر ورقة موك مالك أو غلاف الكتاب المقرّر: 4ET1 ولا 4EA1 تعني Edexcel، و 0500 ولا 0990 تعني Cambridge.',
  },
  'gcc.specs.h2': { en: 'Which IGCSE English specs?', ar: 'يا سبيسز IGCSE إنجليزي؟' },
  'gcc.specs.intro': {
    en: 'There are four specifications you are realistically going to meet in a GCC classroom. Each has its own paper structure, mark scheme, and set-text list, so the first job of any revision programme is making sure you are practising against the right one.',
    ar: 'في أربع سبيسز بتقابلهم فعلياً بفصول الخليج. كل واحد عنده تركيب أوراق، مخطط تصحيح، وقائمة نصوص مقرّرة خاصة فيه، فأول مهمة لأي برنامج مراجعة هي التأكد إنك تتدرب على السبيس الصح.',
  },
  'gcc.specs.4et1.title': {
    en: 'Pearson Edexcel IGCSE 4ET1 — English Literature',
    ar: 'Pearson Edexcel IGCSE 4ET1 — أدب إنجليزي',
  },
  'gcc.specs.4et1.body': {
    en: 'A two-paper closed-book Literature qualification covering modern prose, modern drama, a Shakespeare play, and the Pearson Edexcel Poetry Anthology, plus an unseen-poetry section. The anthology contains 35 prescribed poems from across the English-speaking world.',
    ar: 'شهادة أدب من ورقتين بدون كتاب مفتوح تغطي النثر الحديث، الدراما الحديثة، مسرحية Shakespeare، ومختارات Pearson Edexcel الشعرية، بالإضافة لجزء شعر غير مرئي. المختارات فيها ٣٥ قصيدة مقرّرة من كل أنحاء العالم الإنجليزي.',
  },
  'gcc.specs.4et1_link': { en: 'Open the 4ET1 hub', ar: 'افتح صفحة 4ET1' },
  'gcc.specs.4ea1.title': {
    en: 'Pearson Edexcel IGCSE 4EA1 — English Language A',
    ar: 'Pearson Edexcel IGCSE 4EA1 — لغة إنجليزية A',
  },
  'gcc.specs.4ea1.body': {
    en: 'The Edexcel Language A specification, assessed by exam (with a coursework route available at some centres). Reading is tested on non-fiction extracts; writing covers transactional and imaginative tasks.',
    ar: 'سبيس Edexcel Language A، يُقيَّم بالامتحان (مع مسار مشروع متاح ببعض المراكز). القراءة تنقاس على مقتطفات غير قصصية؛ الكتابة تغطي مهام معاملاتية وإبداعية.',
  },
  'gcc.specs.4ea1_link': { en: 'Open the 4EA1 hub', ar: 'افتح صفحة 4EA1' },
  'gcc.specs.0500.title': {
    en: 'Cambridge IGCSE 0500 — English as a First Language',
    ar: 'Cambridge IGCSE 0500 — الإنجليزية كلغة أولى',
  },
  'gcc.specs.0500.body': {
    en: 'The long-established Cambridge First Language paper. Two written exams test reading comprehension, summary, and directed and composition writing. Many GCC schools that have run Cambridge for years still enter cohorts on 0500.',
    ar: 'ورقة Cambridge للغة الأولى المعروفة من زمان. امتحانين كتابيين يفحصون الفهم القرائي، التلخيص، والكتابة الموجّهة والإنشاء. وايد مدارس بالخليج تشتغل على Cambridge من سنين لسا تنزّل دفعاتها على 0500.',
  },
  'gcc.specs.0500_link': { en: 'Open the 0500 hub', ar: 'افتح صفحة 0500' },
  'gcc.specs.0990.title': {
    en: 'Cambridge IGCSE 0990 — English First Language (redesigned)',
    ar: 'Cambridge IGCSE 0990 — اللغة الإنجليزية الأولى (محدّثة)',
  },
  'gcc.specs.0990.body': {
    en: 'The redesigned Cambridge First Language qualification, with an updated assessment model and 9–1 reporting. Skills overlap heavily with 0500, but the question weightings and rubric wording differ enough that practising against the right paper matters.',
    ar: 'شهادة Cambridge للغة الأولى المُحدّثة، بنموذج تقييم محدّث وتقارير 9-1. المهارات تتداخل وايد مع 0500، بس أوزان الأسئلة وصياغة المخططات تختلف بدرجة كافية تخلّي التدريب على الورقة الصح مهم.',
  },
  'gcc.specs.0990_link': { en: 'Open the 0990 hub', ar: 'افتح صفحة 0990' },
  'gcc.help.h2': {
    en: 'How The English Hub helps GCC IGCSE students',
    ar: 'شلون The English Hub يساعد طلاب IGCSE بالخليج',
  },
  'gcc.help.intro': {
    en: 'Every revision path on the site is calibrated to a specific specification’s mark scheme rather than a generic IGCSE template. That matters for Gulf students because cohorts in the same year group at the same school are often split across boards, and shared revision packs can quietly point you at the wrong rubric.',
    ar: 'كل مسار مراجعة بالموقع معاير على مخطط تصحيح سبيس معيّن مو قالب IGCSE عام. هذا مهم لطلاب الخليج لأن الدفعات بنفس الصف ونفس المدرسة عادةً منقسمة بين بوردز، وحزم المراجعة المشتركة ممكن توجّهك بهدوء للمخطط الغلط.',
  },
  'gcc.help.li1': {
    en: '**Anthology coverage for 4ET1.** The Pearson Edexcel Poetry Anthology contains 35 prescribed texts. The Edexcel hub walks through each one with form, structure, language notes, and pairings for the Section B comparison.',
    ar: '**تغطية المختارات لـ 4ET1.** مختارات Pearson Edexcel الشعرية فيها ٣٥ نص مقرّر. صفحة Edexcel تشرح كل واحد بالشكل والتركيب وملاحظات اللغة والاقترانات لمقارنة Section B.',
  },
  'gcc.help.li2': {
    en: '**Unseen-poetry walkthroughs for Cambridge.** Annotated unseen-poetry workings show how to move from first-read to a structured response under exam conditions, mapped to 0500 and 0990 question types.',
    ar: '**شروحات الشعر الغير مرئي لـ Cambridge.** أعمال شعر غير مرئي مع تعليقات تبيّن شلون تنتقل من القراءة الأولى لإجابة منظّمة بظروف الامتحان، مربوطة بأنواع أسئلة 0500 و 0990.',
  },
  'gcc.help.li3': {
    en: '**AI-marked practice essays.** Submit a response and get feedback against the assessment objectives for your specific board — calibrated to mark schemes rather than a one-size-fits-all rubric.',
    ar: '**مقالات تدريب بتصحيح ذكاء اصطناعي.** أرسل إجابة وخذ ملاحظات مقابل أهداف التقييم لبوردك المحدّد — معايرة على مخططات التصحيح مو مخطط واحد يناسب الكل.',
  },
  'gcc.help.li4': {
    en: '**Board-aligned revision paths.** The dashboard groups your work by paper, section, and assessment objective, so Edexcel and Cambridge students see different recommended next steps even when they sit in the same classroom.',
    ar: '**مسارات مراجعة متطابقة مع البورد.** اللوحة تجمّع شغلك بالورقة، القسم، وهدف التقييم، فطلاب Edexcel و Cambridge يشوفون خطوات تالية موصاية مختلفة حتى لو كانوا بنفس الفصل.',
  },
  'gcc.help.jump_in': {
    en: 'You can jump straight into a board now:',
    ar: 'تقدر تدخل بورد مباشرة الحين:',
  },
  'gcc.timezone.h2': {
    en: 'Time-zones across the GCC: GMT+3 to GMT+4',
    ar: 'التوقيت بالخليج: GMT+3 إلى GMT+4',
  },
  'gcc.timezone.body1': {
    en: 'Saudi Arabia, Qatar, Bahrain, and Kuwait sit at GMT+3. The UAE and Oman sit one hour ahead at GMT+4. None of the six observe daylight saving, so the offset to the UK is constant in winter and shrinks by an hour in British Summer Time.',
    ar: 'السعودية وقطر والبحرين والكويت على GMT+3. الإمارات وعُمان ساعة قدّامهم على GMT+4. ولا واحدة من الست تستخدم التوقيت الصيفي، فالفرق مع بريطانيا ثابت بالشتا ويصغر بساعة بالتوقيت الصيفي البريطاني.',
  },
  'gcc.timezone.body2': {
    en: 'For revision scheduling the practical effect is that the productive window after school finishes lands well before the UK’s evening peak. A 4pm-to-7pm session in Riyadh or Doha is a 2pm-to-5pm session in London — early enough that the AI marker and the wider site tend to be quiet, which means faster response times on submitted essays. It is also worth front-loading mock practice: a Sunday evening mock in Dubai finishes long before most UK boarding-school cohorts have started.',
    ar: 'لجدولة المراجعة الأثر العملي هو إن نافذة الإنتاجية بعد المدرسة تجي قبل ذروة المساء البريطاني بكثير. جلسة من ٤ لـ ٧ مساءً بالرياض ولا الدوحة هي جلسة ٢ لـ ٥ بلندن — مبكر بحيث المصحح الذكي والموقع عموماً يكونون هادين، يعني أوقات استجابة أسرع على المقالات المُرسلة. كمان مفيد تقدّم تدريب الموك: موك الأحد المسا بدبي يخلّص قبل وايد مدارس البوردنغ ببريطانيا حتى تبدأ.',
  },
  'gcc.timezone.tip_title': { en: 'Practical scheduling tip', ar: 'نصيحة جدولة عملية' },
  'gcc.timezone.tip_body': {
    en: 'Block 90 minutes immediately after school for active revision (essay planning, AI-marked practice, anthology comparisons), and leave the second half of the evening for low-energy review work — flashcards, reading set texts, watching walkthrough notes. The pattern works well across both GMT+3 and GMT+4 schools.',
    ar: 'احجز ٩٠ دقيقة فوراً بعد المدرسة لمراجعة نشطة (تخطيط مقالات، تدريب بتصحيح ذكاء اصطناعي، مقارنات مختارات)، وخلّ النصف الثاني من المسا لشغل مراجعة طاقة منخفضة — بطاقات مراجعة، قراءة النصوص المقرّرة، متابعة ملاحظات الشروحات. النمط يشتغل زين بمدارس GMT+3 و GMT+4.',
  },
  'gcc.week.h2': { en: 'Sunday–Thursday school week', ar: 'أسبوع مدرسة الأحد-الخميس' },
  'gcc.week.body1': {
    en: 'Most British curriculum schools across the GCC follow a Sunday-to-Thursday teaching week, with Friday and Saturday as the weekend. The UAE’s public sector moved to a Monday-to-Friday week in 2022, and a small number of UAE schools have followed, but the majority of British and international schools across the region still operate on the Sunday start. That gives revision two clear advantages over the UK rhythm.',
    ar: 'أغلب مدارس المنهج البريطاني بالخليج تمشي على أسبوع تدريس من الأحد للخميس، والجمعة والسبت ويك اند. القطاع الحكومي بالإمارات تحوّل لأسبوع الاثنين-الجمعة بـ٢٠٢٢، وعدد قليل من مدارس الإمارات تبعهم، بس الأغلبية من المدارس البريطانية والعالمية بالمنطقة لسا على بداية الأحد. هذا يعطي المراجعة ميزتين واضحتين عن إيقاع بريطانيا.',
  },
  'gcc.week.body2': {
    en: 'First, your weekend genuinely is two consecutive days off-timetable, which makes long-form revision blocks (a full past paper under timed conditions, a Shakespeare re-read, an extended essay rewrite) much easier to slot in than they would be for a UK student trying to fit revision around Saturday sport or Sunday family commitments that are already routine. Second, Thursday afternoons effectively function as a Friday — energy drops, prep volume eases, and it is a good moment to review the week’s feedback rather than start anything new.',
    ar: 'أولاً، ويك اندك فعلاً يومين متتاليين بدون جدول، وهذا يخلّي بلوكات مراجعة طويلة (ورقة سابقة كاملة بظروف وقت، إعادة قراءة Shakespeare، إعادة كتابة مقال موسّع) أسهل وايد عن الطالب البريطاني اللي يحاول يدخّل المراجعة بين رياضة السبت أو التزامات الأحد العائلية الروتينية. ثانياً، عصاري الخميس فعلياً تشتغل كجمعة — الطاقة تنزل، التحضير يخفّ، ووقت زين تراجع ملاحظات الأسبوع مو تبدأ شي جديد.',
  },
  'gcc.week.tip_title': { en: 'Adapted study cadence', ar: 'إيقاع دراسة مكيّف' },
  'gcc.week.tip_body': {
    en: 'A workable weekly rhythm: heavy lifting on Sunday and Monday (when the term week is fresh), targeted technique work on Tuesday and Wednesday, light review on Thursday, then one timed practice paper plus one rewrite across the weekend. Rotate which paper or section you focus on each week so no element of the specification goes more than a fortnight without practice.',
    ar: 'إيقاع أسبوعي عملي: شغل ثقيل الأحد والاثنين (لمن أسبوع الترم طازج)، شغل تقنية موجّه الثلاثاء والأربعاء، مراجعة خفيفة الخميس، بعدها ورقة تدريب موقّتة مع إعادة كتابة على الويك اند. غيّر يا ورقة ولا قسم تركّز عليه كل أسبوع عشان ولا عنصر بالسبيس يفوت أكثر من أسبوعين بدون تدريب.',
  },
  'gcc.cta.h2': { en: 'Start with your board', ar: 'ابدأ ببوردك' },
  'gcc.cta.body': {
    en: 'The fastest way in is to pick your specification and let the dashboard line up the right revision sequence. If you are not sure whether your school enters Edexcel or Cambridge, the board-select page will walk you through it.',
    ar: 'أسرع طريقة هي تختار سبيسك وتخلي اللوحة ترتّب تسلسل المراجعة الصح. لو ما تدري يا بورد مدرستك تنزّل، صفحة اختيار البورد بتشرحها لك.',
  },
  'gcc.cta.button': { en: 'Pick your exam board →', ar: 'اختر بورد الامتحان مالك ←' },
  'gcc.launch.eyebrow': { en: 'Launch list', ar: 'قائمة الإطلاق' },
  'gcc.launch.h2': {
    en: 'Gulf-region resources, in your inbox',
    ar: 'موارد منطقة الخليج، بإيميلك',
  },
  'gcc.launch.body': {
    en: 'We’re building a small set of GCC-specific revision packs alongside the main board hubs. Drop your email and we’ll send one note when each lands.',
    ar: 'إحنا نبني مجموعة صغيرة من حزم المراجعة الخاصة بالخليج جنب صفحات البوردز الرئيسية. اكتب إيميلك وبنرسل لك ملاحظة لمن كل واحدة تنزل.',
  },
  'gcc.faq.q1': {
    en: 'Is the platform available across the GCC?',
    ar: 'هل المنصة متوفرة بكل دول الخليج؟',
  },
  'gcc.faq.a1': {
    en: 'Yes. The English Hub is a public web app served from a global CDN, so students in the UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, and Oman can access it the same way they would from the UK. There is no regional licence to buy and no separate Gulf-only build — the same revision content, AI marker, and account features work over standard residential and school connections.',
    ar: 'إي. The English Hub تطبيق ويب عام يُقدَّم من CDN عالمي، فطلاب الإمارات وقطر والسعودية والكويت والبحرين وعُمان يقدرون يدخلون نفس طريقة دخول طلاب بريطانيا. ما في ترخيص إقليمي تشتريه ولا نسخة منفصلة للخليج بس — نفس محتوى المراجعة، المصحح الذكي، وخصائص الحساب تشتغل على اتصالات المنازل والمدارس العادية.',
  },
  'gcc.faq.q2': {
    en: 'Can we pay in AED, SAR, or QAR?',
    ar: 'نقدر ندفع بدرهم إماراتي أو ريال سعودي أو ريال قطري؟',
  },
  'gcc.faq.a2': {
    en: 'Subscription pricing is set in GBP, but card payments are processed by Stripe, which converts from your card’s home currency at the time of charge. Most UAE, Saudi, and Qatari debit and credit cards work without setup, and your bank statement will show the converted amount in AED, SAR, or QAR alongside the GBP charge.',
    ar: 'أسعار الاشتراك بالجنيه الإسترليني، بس دفعات الكارت تتعالج عن طريق Stripe، اللي يحوّل من عملة كارتك وقت السحب. أغلب كروت الديبت والكريدت الإماراتية والسعودية والقطرية تشتغل بدون إعداد، وكشف بنكك بيبيّن المبلغ المحوّل بالدرهم أو الريال السعودي أو الريال القطري جنب رسم الجنيه الإسترليني.',
  },
  'gcc.faq.q3': {
    en: 'Does The English Hub work on school networks (filtered/proxied)?',
    ar: 'هل The English Hub يشتغل على شبكات المدارس (المُفلترة/البروكسي)؟',
  },
  'gcc.faq.a3': {
    en: 'The site loads over standard HTTPS on a single domain with no peer-to-peer or video-conferencing requirements, so it usually passes through school filters and proxies without special configuration. If your IT team needs to allowlist anything, the only required hostname is theenglishhub.app and its subdomains. We recommend testing one student account on the school network before rolling out wider.',
    ar: 'الموقع يفتح عبر HTTPS عادي على domain واحد بدون متطلبات peer-to-peer ولا مكالمات فيديو، فعادةً يمر من فلاتر المدارس والبروكسيز بدون إعداد خاص. لو فريق IT يحتاج يضيف شي للقائمة، الـ hostname الوحيد المطلوب هو theenglishhub.app والـ subdomains مالته. نوصي تجرّب حساب طالب واحد على شبكة المدرسة قبل التوسع.',
  },
  'gcc.faq.q4': {
    en: 'Are there resources for Cambridge AS/A-Level English (KS5)?',
    ar: 'هل في موارد لـ Cambridge AS/A-Level إنجليزي (KS5)؟',
  },
  'gcc.faq.a4': {
    en: 'Not yet. The current scope is KS3, GCSE, and IGCSE English Language and Literature, including Pearson Edexcel and Cambridge IGCSE specifications. AS/A-Level coverage is on the roadmap but is not live. If A-Level support matters to you, the launch list at the bottom of this page is the right place to be notified when it lands.',
    ar: 'مو بعد. النطاق الحالي هو KS3 و GCSE و IGCSE لغة وأدب إنجليزي، شامل Pearson Edexcel و Cambridge IGCSE. تغطية AS/A-Level بالخريطة بس مو شغّالة. لو دعم A-Level مهم لك، قائمة الإطلاق بأسفل الصفحة هي المكان الصح تنبهك لمن تنزل.',
  },
  'gcc.faq.q5': {
    en: 'How does the AI marker handle British vs International English spelling?',
    ar: 'شلون يتعامل المصحح الذكي مع الإملاء البريطاني مقابل الدولي؟',
  },
  'gcc.faq.a5': {
    en: 'The marker is calibrated to UK exam-board mark schemes, which accept both British and International English spellings as long as a candidate is consistent within a response. It will not penalise a student for writing "colour" or "color" provided one form is used throughout. Spelling is only flagged as a technical-accuracy issue when it falls outside accepted variants for the specification.',
    ar: 'المصحح معاير على مخططات تصحيح بوردز الامتحانات البريطانية، اللي تقبل الإملاء البريطاني والدولي بشرط الطالب يكون متّسق بإجابته. ما يخصم على الطالب اللي يكتب "colour" ولا "color" بشرط استخدام نسخة واحدة طول الإجابة. الإملاء يتأشر بس كمشكلة دقة فنية لمن يطلع برّا النسخ المقبولة للسبيس.',
  },

  // ─── International school IGCSE landing ─────────────────────────────
  'intl.breadcrumb_current': { en: 'International schools', ar: 'المدارس العالمية' },
  'intl.eyebrow_hero': {
    en: 'For British international schools',
    ar: 'للمدارس البريطانية العالمية',
  },
  'intl.h1': {
    en: 'IGCSE English revision for British international schools',
    ar: 'مراجعة IGCSE إنجليزي للمدارس البريطانية العالمية',
  },
  'intl.intro': {
    en: 'One platform that covers Pearson Edexcel and Cambridge IGCSE English side by side — calibrated to mark schemes, exam-zone-agnostic, and built so a head of department can roll the same workflow across mixed-board cohorts.',
    ar: 'منصة واحدة تغطي Pearson Edexcel و Cambridge IGCSE English جنب لجنب — معايرة على مخططات التصحيح، مستقلة عن منطقة الامتحان، ومبنية بحيث رئيس القسم يقدر يطبّق نفس سير العمل على دفعات بوردز مختلطة.',
  },
  'intl.cta.licence': { en: 'Department licence options', ar: 'خيارات ترخيص القسم' },
  'intl.cta.teachers': { en: 'For individual teachers', ar: 'للمعلمين الأفراد' },
  'intl.why.eyebrow': { en: 'Why us', ar: 'ليش إحنا' },
  'intl.why.h2': {
    en: 'Why The English Hub for international schools',
    ar: 'ليش The English Hub للمدارس العالمية',
  },
  'intl.why.body1': {
    en: 'International English departments sit at an awkward intersection. The texts and specifications are British, the students often aren’t, and the resources you can actually buy from UK publishers tend to assume a UK timetable, a UK calendar, and a UK-centric reference frame. The English Hub is built for the way British international schools actually run — not the way UK schools do.',
    ar: 'أقسام الإنجليزي العالمية تجلس بمفترق محرج. النصوص والسبيسز بريطانية، الطلاب عادةً مو بريطانيين، والموارد اللي تقدر فعلاً تشتريها من ناشري بريطانيا تفترض جدول بريطاني وتقويم بريطاني ومرجعية بريطانية. The English Hub مبني للطريقة اللي المدارس البريطانية العالمية تشتغل فيها فعلاً — مو طريقة مدارس بريطانيا.',
  },
  'intl.why.body2_intro': { en: 'What that means in practice:', ar: 'يعني هذا بالواقع:' },
  'intl.why.li1_strong': { en: 'Spec-aligned revision.', ar: 'مراجعة متطابقة مع السبيس.' },
  'intl.why.li1': {
    en: 'Every revision page is keyed to one exam board and one paper. Cambridge 0500 students never see Pearson 4ET1 mark schemes by accident, and vice versa.',
    ar: 'كل صفحة مراجعة مربوطة ببورد امتحان واحد وورقة واحدة. طلاب Cambridge 0500 ولا مرة بيشوفون مخططات Pearson 4ET1 بالغلط، والعكس صحيح.',
  },
  'intl.why.li2_strong': { en: 'AI-marked practice.', ar: 'تدريب بتصحيح ذكاء اصطناعي.' },
  'intl.why.li2': {
    en: 'Students submit essays, the AI marks against the correct board’s assessment objectives, and the teacher reviews before the student sees the feedback. Removes the bottleneck of marking 60 mock essays in a week.',
    ar: 'الطلاب يرسلون مقالات، الذكاء الاصطناعي يصحح مقابل أهداف تقييم البورد الصح، والمعلم يراجع قبل الطالب يشوف الملاحظات. يشيل عنق الزجاجة لتصحيح ٦٠ مقال موك بأسبوع.',
  },
  'intl.why.li3_strong': {
    en: 'Multi-board coverage in one product.',
    ar: 'تغطية بوردز متعددة بمنتج واحد.',
  },
  'intl.why.li3': {
    en: 'Pearson Edexcel 4ET1, 4EA1, and Cambridge 0500, 0990 — covered in the same library, accessible from the same department licence.',
    ar: 'Pearson Edexcel 4ET1 و 4EA1 و Cambridge 0500 و 0990 — كلهم بنفس المكتبة، تتفتح من نفس ترخيص القسم.',
  },
  'intl.why.li4_strong': {
    en: 'Exam-zone-agnostic content.',
    ar: 'محتوى مستقل عن منطقة الامتحان.',
  },
  'intl.why.li4': {
    en: 'Pages don’t assume a UK-shaped academic year. Whether your students sit in May/June or November, the revision library works the same way.',
    ar: 'الصفحات ما تفترض سنة دراسية بشكل بريطاني. سواء طلابك يذاكرون بمايو/يونيو ولا نوفمبر، مكتبة المراجعة تشتغل نفس الطريقة.',
  },
  'intl.why.li5_strong': { en: 'Calibrated to mark schemes.', ar: 'معايرة على مخططات التصحيح.' },
  'intl.why.li5': {
    en: 'Model answers, AO weightings, and feedback rubrics are built from each board’s published mark scheme — not from one teacher’s house style.',
    ar: 'الإجابات النموذجية وأوزان AO ومخططات الملاحظات مبنية من مخطط التصحيح المنشور لكل بورد — مو من أسلوب معلم واحد.',
  },
  'intl.specs.eyebrow': { en: 'Specifications', ar: 'السبيسز' },
  'intl.specs.h2': { en: 'IGCSE English specs we cover', ar: 'سبيسز IGCSE إنجليزي اللي نغطيها' },
  'intl.specs.intro': {
    en: 'Four IGCSE English specifications are the backbone of most British international school English departments. Every page on The English Hub is keyed to one of them — pick the spec your students sit and the rest follows.',
    ar: 'أربع سبيسز IGCSE إنجليزي هم العمود الفقري لأغلب أقسام الإنجليزي بالمدارس البريطانية العالمية. كل صفحة على The English Hub مربوطة بواحد منهم — اختر السبيس اللي طلابك يذاكرونه والباقي يجي وراه.',
  },
  'intl.specs.open_hub': { en: 'Open hub →', ar: 'افتح الصفحة ←' },
  'intl.spec.4et1.name': {
    en: 'Pearson Edexcel IGCSE English Literature',
    ar: 'Pearson Edexcel IGCSE أدب إنجليزي',
  },
  'intl.spec.4et1.blurb': {
    en: 'Closed-book examination covering an anthology, a modern drama or prose text, and a Shakespeare play. Two papers, with an optional coursework route.',
    ar: 'امتحان بدون كتاب مفتوح يغطي مختارات، نص دراما أو نثر حديث، ومسرحية Shakespeare. ورقتين، مع مسار مشروع اختياري.',
  },
  'intl.spec.4ea1.name': {
    en: 'Pearson Edexcel IGCSE English Language A',
    ar: 'Pearson Edexcel IGCSE لغة إنجليزية A',
  },
  'intl.spec.4ea1.blurb': {
    en: 'Anthology-based reading and writing exam with a transactional and imaginative writing component. Widely sat by international centres.',
    ar: 'امتحان قراءة وكتابة على مختارات مع مكوّن كتابة معاملاتية وإبداعية. وايد مراكز عالمية يذاكرونه.',
  },
  'intl.spec.0500.name': {
    en: 'Cambridge IGCSE First Language English',
    ar: 'Cambridge IGCSE اللغة الإنجليزية الأولى',
  },
  'intl.spec.0500.blurb': {
    en: 'Reading, directed writing, and composition across two papers. The default Cambridge route for first-language English speakers in international schools.',
    ar: 'قراءة وكتابة موجّهة وإنشاء على ورقتين. مسار Cambridge الافتراضي للناطقين بالإنجليزية كلغة أولى بالمدارس العالمية.',
  },
  'intl.spec.0990.name': {
    en: 'Cambridge IGCSE English Language (9–1)',
    ar: 'Cambridge IGCSE لغة إنجليزية (9-1)',
  },
  'intl.spec.0990.blurb': {
    en: 'The 9–1 graded sibling of 0500, with the same paper structure but reformed grade boundaries aligned to the UK reformed scale.',
    ar: 'النسخة المُقيَّمة بسلّم 9-1 من 0500، بنفس تركيب الأوراق بس حدود درجات مُحدّثة متطابقة مع سلّم بريطانيا المُحدّث.',
  },
  'intl.coverage.eyebrow': { en: 'Curriculum coverage', ar: 'تغطية المنهج' },
  'intl.coverage.h2': {
    en: 'Coverage across the British international school curriculum',
    ar: 'التغطية عبر منهج المدرسة البريطانية العالمية',
  },
  'intl.coverage.intro': {
    en: 'Most British international schools follow a recognisable shape — Key Stage 3 in the lower years, then either GCSE or IGCSE for the 14–16 cohort, depending on which exam zone the school enters. The English Hub is built around the same shape:',
    ar: 'أغلب المدارس البريطانية العالمية تتبع شكل معروف — Key Stage 3 بالسنوات الأولى، بعدها GCSE ولا IGCSE لفئة ١٤-١٦ سنة، على حسب منطقة الامتحان اللي المدرسة تنزّل فيها. The English Hub مبني بنفس الشكل:',
  },
  'intl.coverage.ks3_strong': { en: 'Key Stage 3 (Years 7–9).', ar: 'Key Stage 3 (السنوات ٧-٩).' },
  'intl.coverage.ks3_body': {
    en: 'Foundational reading, analysis, and writing skills. Schools running a UK-curriculum lower school can use these as the on-ramp to IGCSE. KS3-specific landing pages are still being added — for now, browse the full revision library for KS3 material.',
    ar: 'مهارات قراءة وتحليل وكتابة أساسية. المدارس اللي تشتغل بمنهج بريطاني للمرحلة الأولى تقدر تستخدمها كبداية نحو IGCSE. صفحات KS3 المخصصة لسا قاعدين نضيفها — للحين، تصفّح مكتبة المراجعة كاملة لمواد KS3.',
  },
  'intl.coverage.gcse_strong': {
    en: 'GCSE (for UK-curriculum branches).',
    ar: 'GCSE (لفروع المنهج البريطاني).',
  },
  'intl.coverage.gcse_body': {
    en: 'Schools whose 14–16 cohort sits UK GCSE rather than IGCSE — for example a campus aligned with a UK partner school — can use the AQA, Pearson Edexcel, OCR, and WJEC Eduqas hubs.',
    ar: 'المدارس اللي فئة ١٤-١٦ سنة عندها تذاكر GCSE بريطاني بدل IGCSE — مثلاً فرع متطابق مع مدرسة شريكة ببريطانيا — تقدر تستخدم صفحات AQA و Pearson Edexcel و OCR و WJEC Eduqas.',
  },
  'intl.coverage.igcse_strong': {
    en: 'IGCSE (the international standard).',
    ar: 'IGCSE (المعيار الدولي).',
  },
  'intl.coverage.igcse_body': {
    en: 'Pearson Edexcel and Cambridge International, the two specifications most British international schools enter. Linked above.',
    ar: 'Pearson Edexcel و Cambridge International، السبيسين اللي أغلب المدارس البريطانية العالمية تنزّل فيهم. الروابط فوق.',
  },
  'intl.coverage.note': {
    en: 'Not sure which board your school enters?',
    ar: 'مو متأكد يا بورد مدرستك تنزّل فيه؟',
  },
  'intl.coverage.note_link1': { en: 'board-select page', ar: 'صفحة اختيار البورد' },
  'intl.coverage.note_mid': {
    en: ' walks through the options by level, or jump straight to the ',
    ar: ' تشرح الخيارات بحسب المستوى، أو روح مباشرة لـ ',
  },
  'intl.coverage.note_link2': { en: 'IGCSE hub', ar: 'صفحة IGCSE' },
  'intl.coverage.note_end': { en: ' if you already know it’s IGCSE.', ar: ' لو تدري إنه IGCSE.' },
  'intl.start.eyebrow': { en: 'For heads of department', ar: 'لرؤساء الأقسام' },
  'intl.start.h2': { en: 'How department leads get started', ar: 'شلون يبدأ رؤساء القسم' },
  'intl.start.intro': {
    en: 'Rolling a new platform across an English department is rarely a same-day decision. We recommend a three-step plan that lets you trial the product on a single class before committing the whole faculty.',
    ar: 'تطبيق منصة جديدة على قسم إنجليزي نادراً قرار يوم واحد. ننصح بخطة ثلاث خطوات تخليك تجرّب المنتج على فصل واحد قبل ما تلتزم بكل الكادر.',
  },
  'intl.start.step1.title': { en: 'Pick your dominant board', ar: 'اختر البورد المهيمن' },
  'intl.start.step1.body': {
    en: 'Identify the IGCSE specification that the largest share of your cohort sits — usually Cambridge 0500/0990 or Pearson Edexcel 4ET1/4EA1. Start there. The other boards remain available within the same licence.',
    ar: 'حدّد سبيس IGCSE اللي أكبر نسبة من دفعتك تذاكره — عادةً Cambridge 0500/0990 ولا Pearson Edexcel 4ET1/4EA1. ابدأ هناك. باقي البوردز تبقى متوفرة بنفس الترخيص.',
  },
  'intl.start.step2.title': { en: 'Trial with a single class', ar: 'جرّب مع فصل واحد' },
  'intl.start.step2.body': {
    en: 'Run one Year 10 or Year 11 group through the platform for a half-term — set practice papers, use AI marking on a mock essay, and review the analytics. No fabricated success stories — judge it on your own students.',
    ar: 'مرّر مجموعة Year 10 ولا Year 11 على المنصة لنصف ترم — حدّد أوراق تدريب، استخدم تصحيح الذكاء الاصطناعي على مقال موك، وراجع التحليلات. ما في قصص نجاح ملفّقة — احكم عليه ببقية طلابك.',
  },
  'intl.start.step3.title': { en: 'Roll across the department', ar: 'طبّق على القسم كله' },
  'intl.start.step3.body': {
    en: 'Once the trial class has proof points your colleagues recognise, expand to the rest of the faculty under one department licence. Onboarding shifts from per-teacher to whole-team.',
    ar: 'لمن الفصل التجريبي يطلع نقاط إثبات يعرفها زملاؤك، توسّع لباقي الكادر تحت ترخيص قسم واحد. الإعداد يتحوّل من لكل معلم لفريق كامل.',
  },
  'intl.start.step_label': { en: 'Step', ar: 'الخطوة' },
  'intl.start.cta1': {
    en: 'See department licence options',
    ar: 'شوف خيارات ترخيص القسم',
  },
  'intl.start.cta2': { en: 'Individual teacher plans', ar: 'باقات المعلم الفردي' },
  'intl.multi.eyebrow': { en: 'Mixed cohorts', ar: 'دفعات مختلطة' },
  'intl.multi.h2': {
    en: 'Multi-board international department workflow',
    ar: 'سير عمل قسم عالمي متعدد البوردز',
  },
  'intl.multi.body1': {
    en: 'Plenty of British international schools don’t enter every student for the same board. A school might run Cambridge 0500 as the default, but enter a small EAL cohort for Pearson 4EA1 because the anthology suits them better. Or it might be the opposite — Pearson dominant, with a Cambridge sub-group for legacy reasons.',
    ar: 'وايد مدارس بريطانية عالمية ما تنزّل كل الطلاب بنفس البورد. ممكن مدرسة تشتغل Cambridge 0500 كافتراضي، بس تنزّل دفعة EAL صغيرة على Pearson 4EA1 لأن المختارات تناسبهم أحسن. ولا العكس — Pearson مهيمن، مع مجموعة Cambridge فرعية لأسباب تاريخية.',
  },
  'intl.multi.body2': {
    en: 'One department licence on The English Hub covers every IGCSE board we publish. There are no per-board upgrades and no second account to manage. Each student sees revision pages keyed to their own specification; each teacher can flip between boards from the same dashboard. The workflow looks the same whether you run one board or four.',
    ar: 'ترخيص قسم واحد على The English Hub يغطي كل بورد IGCSE ننشره. ما في ترقيات لكل بورد ولا حساب ثاني تديره. كل طالب يشوف صفحات مراجعة مربوطة بسبيسه؛ كل معلم يقدر يتنقل بين البوردز من نفس اللوحة. سير العمل يطلع نفس الشكل سواء تشتغل ببورد واحد ولا أربعة.',
  },
  'intl.multi.body3_pre': {
    en: 'Pricing for a department licence depends on faculty size rather than board count — see the ',
    ar: 'تسعير ترخيص القسم يعتمد على حجم الكادر مو عدد البوردز — شوف ',
  },
  'intl.multi.body3_link1': { en: 'pricing page', ar: 'صفحة الأسعار' },
  'intl.multi.body3_mid': {
    en: ' for the current rate, and ',
    ar: ' للسعر الحالي، و ',
  },
  'intl.multi.body3_link2': { en: 'the schools page', ar: 'صفحة المدارس' },
  'intl.multi.body3_end': {
    en: ' for the founding-schools programme if you’re joining early.',
    ar: ' لبرنامج المدارس المؤسسة لو بتنضم بدري.',
  },
  'intl.faqs.eyebrow': { en: 'FAQs', ar: 'الأسئلة الشائعة' },
  'intl.faqs.h2': { en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
  'intl.cta_final.eyebrow': { en: 'Next step', ar: 'الخطوة التالية' },
  'intl.cta_final.h2': {
    en: 'Bring The English Hub into your department',
    ar: 'جيب The English Hub لقسمك',
  },
  'intl.cta_final.body_pre': {
    en: 'If you’re a head of English or a department lead, the fastest route is the ',
    ar: 'لو إنت رئيس قسم إنجليزي ولا قائد قسم، أسرع طريق هو ',
  },
  'intl.cta_final.body_link1': { en: 'schools page', ar: 'صفحة المدارس' },
  'intl.cta_final.body_mid': {
    en: ' — it covers licence shape, onboarding, and pricing. If you’re a single teacher trialling for your own classes, ',
    ar: ' — تغطي شكل الترخيص والإعداد والتسعير. لو إنت معلم واحد تجرّب لفصولك، ',
  },
  'intl.cta_final.body_link2': {
    en: 'start on the teacher plan',
    ar: 'ابدأ على باقة المعلم',
  },
  'intl.faq.q1': {
    en: 'Does the platform support multiple boards within one school licence?',
    ar: 'هل المنصة تدعم بوردز متعددة بترخيص مدرسة واحد؟',
  },
  'intl.faq.a1': {
    en: 'Yes. A single department licence covers every board we publish. If half your cohort sits Cambridge 0500 and the other half sits Pearson Edexcel 4EA1, both groups work from the same licence — each student sees revision pages keyed to their own specification, and teachers can move between boards without switching account.',
    ar: 'إي. ترخيص قسم واحد يغطي كل بورد ننشره. لو نصف دفعتك تذاكر Cambridge 0500 والنصف الثاني Pearson Edexcel 4EA1، كلا المجموعتين تشتغلون من نفس الترخيص — كل طالب يشوف صفحات مراجعة مربوطة بسبيسه، والمعلمين يقدرون يتنقلون بين البوردز بدون تغيير حساب.',
  },
  'intl.faq.q2': {
    en: 'How does AI marking handle international students whose first language isn’t English?',
    ar: 'شلون يتعامل تصحيح الذكاء الاصطناعي مع الطلاب اللي إنجليزي مو لغتهم الأولى؟',
  },
  'intl.faq.a2': {
    en: 'The AI marks against the same mark scheme criteria the board uses, so feedback focuses on assessment objectives — reading, analysis, structure, vocabulary, and accuracy — rather than on whether English is a first language. EAL students often benefit because the feedback is specific (which sentence, which AO) rather than general. Teachers always review and can adjust marks before the student sees them.',
    ar: 'الذكاء الاصطناعي يصحح مقابل نفس معايير مخطط التصحيح اللي البورد يستخدمه، فالملاحظات تركّز على أهداف التقييم — قراءة، تحليل، تركيب، مفردات، ودقة — مو على هل الإنجليزية لغة أولى ولا لا. طلاب EAL عادةً يستفيدون لأن الملاحظات محدّدة (يا جملة، يا AO) مو عامة. المعلمون دايماً يراجعون ويقدرون يعدّلون الدرجات قبل الطالب يشوفها.',
  },
  'intl.faq.q3': {
    en: 'Can we customise revision schedules for a longer or shorter academic year?',
    ar: 'نقدر نخصّص جداول المراجعة لسنة دراسية أطول ولا أقصر؟',
  },
  'intl.faq.a3': {
    en: 'Revision content is on-demand rather than tied to a fixed UK academic calendar. Department leads pick which papers, set texts, and skills to prioritise; students work through them at their own pace. Schools running a Northern Hemisphere August–June year, a Southern Hemisphere January–November year, or a split-semester model all use the same library.',
    ar: 'محتوى المراجعة عند الطلب مو مربوط بتقويم دراسي بريطاني ثابت. رؤساء الأقسام يختارون يا أوراق ونصوص مقرّرة ومهارات يقدّمونها بالأولوية؛ الطلاب يمشون فيها بسرعتهم. المدارس اللي تشتغل بسنة نصف الكرة الشمالي أغسطس-يونيو، ولا سنة نصف الكرة الجنوبي يناير-نوفمبر، ولا نموذج ترمين مقسّمين، كلهم يستخدمون نفس المكتبة.',
  },
  'intl.faq.q4': {
    en: 'Is content available offline for schools with limited connectivity?',
    ar: 'هل المحتوى متوفر بدون نت للمدارس اللي اتصالها محدود؟',
  },
  'intl.faq.a4': {
    en: 'The platform is web-delivered and requires a connection to load pages, submit essays for AI marking, and sync teacher dashboards. Printable resources — model answers, mark-scheme breakdowns, practice papers — can be downloaded as PDFs in advance for use in classrooms with intermittent connectivity. We do not currently ship a fully offline app.',
    ar: 'المنصة على الويب وتحتاج اتصال عشان تفتح الصفحات وترسل المقالات لتصحيح الذكاء الاصطناعي وتزامن لوحات المعلمين. الموارد القابلة للطباعة — إجابات نموذجية، شروحات مخطط التصحيح، أوراق تدريب — تقدر تنزّلها كـ PDFs مسبقاً للاستخدام بالفصول اللي اتصالها متقطّع. ما عندنا حالياً تطبيق يشتغل بدون نت كلياً.',
  },
  'intl.faq.q5': {
    en: 'How do you handle GDPR and non-EU/UK data residency?',
    ar: 'شلون تتعاملون مع GDPR وإقامة البيانات خارج الاتحاد الأوروبي/بريطانيا؟',
  },
  'intl.faq.a5': {
    en: 'The English Hub is operated from the UK and applies UK GDPR standards to all accounts globally, regardless of where the school is based. Schools in jurisdictions with their own data-protection regimes (for example UAE, Singapore, or Hong Kong) can request a data-processing addendum before signing. Specific residency requirements should be raised during onboarding so we can confirm compatibility before contracts are issued.',
    ar: 'The English Hub تُدار من بريطانيا وتطبّق معايير UK GDPR على كل الحسابات عالمياً، بغض النظر عن مكان المدرسة. المدارس بالولايات اللي عندها أنظمة حماية بيانات خاصة (مثلاً الإمارات وسنغافورة وهونغ كونغ) تقدر تطلب ملحق معالجة بيانات قبل التوقيع. متطلبات الإقامة المحدّدة لازم تتطرح وقت الإعداد عشان نأكد التوافق قبل ما تصدر العقود.',
  },

  // ─── Creators landing ───────────────────────────────────────────────
  'creators.badge': { en: 'Creator Partners', ar: 'شركاء صنّاع المحتوى' },
  'creators.h1': { en: 'Earn Money Sharing Education', ar: 'اكسب فلوس وأنت تنشر التعليم' },
  'creators.subtitle': {
    en: 'Join The English Hub’s affiliate program. Earn 20% recurring commission on every student you refer.',
    ar: 'انضم لبرنامج الشراكة مالنا. اكسب ٢٠٪ عمولة متكرّرة على كل طالب توصّله.',
  },
  'creators.cta.apply': { en: 'Apply to Become a Partner', ar: 'قدّم لتصير شريك' },
  'creators.cta.contact': {
    en: 'Already an affiliate? Contact us',
    ar: 'إنت أصلاً شريك؟ تواصل معانا',
  },
  'creators.how.h2': { en: 'How It Works', ar: 'شلون يشتغل' },
  'creators.how.step1.title': { en: 'Apply to become a partner', ar: 'قدّم لتصير شريك' },
  'creators.how.step1.desc': {
    en: 'Fill out the form below. We review applications within 48 hours.',
    ar: 'عبّي النموذج تحت. نراجع الطلبات خلال ٤٨ ساعة.',
  },
  'creators.how.step2.title': {
    en: 'Get your unique referral link',
    ar: 'خذ رابط الإحالة الخاص فيك',
  },
  'creators.how.step2.desc': {
    en: 'Once approved, you get a personal link and tracking dashboard.',
    ar: 'لمن يوافقون، تأخذ رابط شخصي ولوحة متابعة.',
  },
  'creators.how.step3.title': { en: 'Share with your audience', ar: 'شاركه مع جمهورك' },
  'creators.how.step3.desc': {
    en: 'Post on TikTok, YouTube, Instagram, or any platform you use.',
    ar: 'انشر على TikTok ولا YouTube ولا Instagram ولا أي منصة تستخدمها.',
  },
  'creators.how.step4.title': { en: 'Earn 20% recurring monthly', ar: 'اكسب ٢٠٪ متكرّر شهرياً' },
  'creators.how.step4.desc': {
    en: 'Earn 20% of every subscription — paid every month they stay subscribed.',
    ar: 'اكسب ٢٠٪ من كل اشتراك — يتدفع كل شهر مادام مشترك.',
  },
  'creators.how.step_label': { en: 'Step', ar: 'الخطوة' },
  'creators.calc.h2': { en: 'Earning Calculator', ar: 'حاسبة الأرباح' },
  'creators.calc.intro': {
    en: 'See how much you could earn with our 20% recurring commission on the',
    ar: 'شوف كم تقدر تكسب مع عمولة ٢٠٪ المتكرّرة على',
  },
  'creators.calc.plan_suffix': { en: '/mo plan.', ar: 'باقة شهرية.' },
  'creators.calc.footnote_prefix': { en: 'Based on', ar: 'بناءً على' },
  'creators.calc.footnote_suffix': {
    en: '/mo subscription price. Commission is recurring for as long as the student remains subscribed.',
    ar: 'سعر اشتراك شهري. العمولة متكرّرة طول ما الطالب مشترك.',
  },
  'creators.calc.students_referred': { en: 'students referred', ar: 'طالب موصّل' },
  'creators.calc.per_month': { en: 'per month, recurring', ar: 'بالشهر، متكرّر' },
  'creators.ideas.h2': { en: 'Content Ideas That Convert', ar: 'أفكار محتوى تجيب نتيجة' },
  'creators.ideas.hacks.title': { en: '"English exam hacks"', ar: '"حيل امتحان الإنجليزي"' },
  'creators.ideas.hacks.desc': {
    en: '15-30 second TikToks or YouTube Shorts showing quick tips from the platform.',
    ar: 'تيك توك ولا يوتيوب شورتس ١٥-٣٠ ثانية تبيّن نصائح سريعة من المنصة.',
  },
  'creators.ideas.hacks.platform': { en: 'TikTok / Shorts', ar: 'TikTok / Shorts' },
  'creators.ideas.grade9.title': { en: '"How I got a Grade 9"', ar: '"شلون حصلت Grade 9"' },
  'creators.ideas.grade9.desc': {
    en: 'Study vlogs showing your revision routine using The English Hub.',
    ar: 'فلوغ دراسة يبيّن روتين مراجعتك باستخدام The English Hub.',
  },
  'creators.ideas.grade9.platform': { en: 'YouTube / TikTok', ar: 'YouTube / TikTok' },
  'creators.ideas.best.title': {
    en: '"Best GCSE revision resources"',
    ar: '"أحسن موارد مراجعة GCSE"',
  },
  'creators.ideas.best.desc': {
    en: 'Review and comparison videos — include The English Hub in your "top 5" list.',
    ar: 'فيديوهات تقييم ومقارنة — حط The English Hub بقائمة "الخمسة الأوائل".',
  },
  'creators.ideas.best.platform': { en: 'YouTube / Instagram', ar: 'YouTube / Instagram' },
  'creators.ideas.swm.title': { en: '"Study with me" sessions', ar: 'جلسات "ادرس معاي"' },
  'creators.ideas.swm.desc': {
    en: 'Film yourself revising with The English Hub open on screen. Great for long-form content.',
    ar: 'سجّل نفسك تراجع و The English Hub مفتوح على الشاشة. زين للمحتوى الطويل.',
  },
  'creators.ideas.swm.platform': { en: 'YouTube / TikTok LIVE', ar: 'YouTube / TikTok LIVE' },
  'creators.benefits.h2': { en: 'Partner Benefits', ar: 'مزايا الشريك' },
  'creators.benefits.recurring.title': { en: '20% recurring commission', ar: '٢٠٪ عمولة متكرّرة' },
  'creators.benefits.recurring.desc': {
    en: 'Earn on every payment, not just the first. As long as they subscribe, you earn.',
    ar: 'اكسب على كل دفعة، مو بس الأولى. طول ما هو مشترك، إنت تكسب.',
  },
  'creators.benefits.cookie.title': { en: '30-day cookie window', ar: 'نافذة كوكي ٣٠ يوم' },
  'creators.benefits.cookie.desc': {
    en: 'If someone clicks your link, you get credit for 30 days — even if they don’t sign up immediately.',
    ar: 'لو واحد ضغط على رابطك، تأخذ كريديت ٣٠ يوم — حتى لو ما سجّل فوراً.',
  },
  'creators.benefits.dashboard.title': { en: 'Real-time dashboard', ar: 'لوحة لحظية' },
  'creators.benefits.dashboard.desc': {
    en: 'Track clicks, signups, and earnings in real time from your affiliate dashboard.',
    ar: 'تابع الضغطات والتسجيلات والأرباح لحظياً من لوحة الشراكة مالك.',
  },
  'creators.benefits.codes.title': { en: 'Custom discount codes', ar: 'أكواد خصم مخصصة' },
  'creators.benefits.codes.desc': {
    en: 'Give your audience exclusive discount codes to boost conversions.',
    ar: 'اعطي جمهورك أكواد خصم حصرية ترفع التحويلات.',
  },
  'creators.benefits.payout.title': { en: 'Monthly payouts', ar: 'دفعات شهرية' },
  'creators.benefits.payout.desc': {
    en: 'Confirmed commissions are paid on the 1st of each month via PayPal or bank transfer.',
    ar: 'العمولات المؤكّدة تتدفع أول كل شهر عبر PayPal ولا تحويل بنكي.',
  },
  'creators.benefits.support.title': { en: 'Dedicated support', ar: 'دعم مخصّص' },
  'creators.benefits.support.desc': {
    en: 'Get direct access to our team for content ideas, assets, and promotional support.',
    ar: 'تأخذ وصول مباشر لفريقنا لأفكار محتوى وأصول ودعم ترويجي.',
  },
  'creators.apply.h2': {
    en: 'Apply to Become a Creator Partner',
    ar: 'قدّم لتصير شريك صانع محتوى',
  },
  'creators.apply.intro': {
    en: 'We review all applications within 48 hours.',
    ar: 'نراجع كل الطلبات خلال ٤٨ ساعة.',
  },
  'creators.form.name': { en: 'Full Name *', ar: 'الاسم الكامل *' },
  'creators.form.email': { en: 'Email Address *', ar: 'الإيميل *' },
  'creators.form.platform': { en: 'Primary Platform *', ar: 'المنصة الأساسية *' },
  'creators.form.platform_placeholder': {
    en: 'Select your main platform...',
    ar: 'اختر منصتك الأساسية...',
  },
  'creators.form.platform.tiktok': { en: 'TikTok', ar: 'TikTok' },
  'creators.form.platform.youtube': { en: 'YouTube', ar: 'YouTube' },
  'creators.form.platform.instagram': { en: 'Instagram', ar: 'Instagram' },
  'creators.form.platform.twitter': { en: 'Twitter / X', ar: 'Twitter / X' },
  'creators.form.platform.blog': { en: 'Blog / Website', ar: 'مدونة / موقع' },
  'creators.form.platform.other': { en: 'Other', ar: 'غير ذلك' },
  'creators.form.handle': { en: 'Social Handle / URL', ar: 'الحساب / الرابط' },
  'creators.form.handle_placeholder': {
    en: '@yourhandle or https://...',
    ar: '@حسابك أو https://...',
  },
  'creators.form.followers': { en: 'Approximate Follower Count *', ar: 'عدد المتابعين التقريبي *' },
  'creators.form.followers_placeholder': { en: 'Select...', ar: 'اختر...' },
  'creators.form.content': {
    en: 'Describe the content you’d create to promote The English Hub *',
    ar: 'وصف المحتوى اللي بتسوّيه للترويج لـ The English Hub *',
  },
  'creators.form.content_placeholder': {
    en: 'e.g. I’d make TikTok videos showing English exam hacks and revision tips...',
    ar: 'مثلاً: بسوّي فيديوهات TikTok تبيّن حيل امتحان الإنجليزي ونصائح مراجعة...',
  },
  'creators.form.submit': { en: 'Submit Application', ar: 'أرسل الطلب' },
  'creators.form.submitting': { en: 'Submitting...', ar: 'يتم الإرسال...' },
  'creators.form.error_generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار خلل. حاول مرة ثانية رجاءً.',
  },
  'creators.form.error_network': {
    en: 'Network error. Please try again.',
    ar: 'خلل بالشبكة. حاول مرة ثانية رجاءً.',
  },
  'creators.success.title': { en: 'Application Submitted!', ar: 'الطلب أُرسل!' },
  'creators.success.body_pre': {
    en: 'We’ll review your application within 48 hours and email you with next steps. If you have any questions, contact us at',
    ar: 'بنراجع طلبك خلال ٤٨ ساعة ونرسل إيميل بالخطوات التالية. لو عندك أسئلة، تواصل معانا على',
  },
  'creators.faq.h2': { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
  'creators.faq.q1': { en: 'What platforms can I promote on?', ar: 'يا منصات أقدر أروّج عليها؟' },
  'creators.faq.a1': {
    en: 'TikTok, YouTube, Instagram, Twitter/X, blogs, WhatsApp groups — anywhere you have an audience interested in English revision.',
    ar: 'TikTok و YouTube و Instagram و Twitter/X والمدونات وقروبات WhatsApp — أي مكان عندك جمهور مهتم بمراجعة الإنجليزي.',
  },
  'creators.faq.q2': { en: 'How does tracking work?', ar: 'شلون يشتغل التتبع؟' },
  'creators.faq.a2': {
    en: 'You get a unique referral link (e.g. theenglishhub.app?via=yourcode). When someone clicks it, a 30-day cookie tracks them. If they subscribe within 30 days, you earn the commission.',
    ar: 'تأخذ رابط إحالة خاص (مثلاً theenglishhub.app?via=yourcode). لمن واحد يضغطه، كوكي ٣٠ يوم يتتبّعه. لو اشترك خلال ٣٠ يوم، تأخذ العمولة.',
  },
  'creators.faq.q3': { en: 'When do I get paid?', ar: 'متى أنادفع؟' },
  'creators.faq.a3': {
    en: 'Commissions are confirmed 30 days after each signup (to allow for refunds). Confirmed commissions are paid on the 1st of each month via PayPal or bank transfer.',
    ar: 'العمولات تتأكد بعد ٣٠ يوم من كل تسجيل (للسماح بالاسترجاعات). العمولات المؤكّدة تتدفع أول كل شهر عبر PayPal ولا تحويل بنكي.',
  },
  'creators.faq.q4': { en: 'Can I apply if I’m under 18?', ar: 'أقدر أقدّم لو عمري أقل من ١٨؟' },
  'creators.faq.a4': {
    en: 'Yes! We welcome student creators. If you’re under 18, we’ll just need parental consent.',
    ar: 'إي! نرحّب بصنّاع المحتوى الطلاب. لو عمرك أقل من ١٨، بس بنحتاج موافقة الأهل.',
  },
  'creators.faq.q5': {
    en: 'Do I need a minimum number of followers?',
    ar: 'محتاج حد أدنى من المتابعين؟',
  },
  'creators.faq.a5': {
    en: 'No strict minimum, but we look for engaged audiences interested in GCSE/IGCSE English. Quality matters more than quantity.',
    ar: 'ما في حد أدنى صارم، بس ندوّر على جمهور متفاعل ومهتم بإنجليزي GCSE/IGCSE. الجودة أهم من الكمية.',
  },
  'creators.faq.q6': { en: 'Do I need to disclose that it’s an ad?', ar: 'لازم أوضّح إنه إعلان؟' },
  'creators.faq.a6': {
    en: 'Yes. UK advertising rules (ASA/CAP) require you to include #ad in every promotional post. This must be clearly visible.',
    ar: 'إي. قواعد الإعلانات البريطانية (ASA/CAP) تطلب تحط #ad بكل بوست ترويجي. لازم يكون واضح.',
  },
  'creators.faq.q7': {
    en: 'Is there a limit to how much I can earn?',
    ar: 'في سقف لكم أقدر أكسب؟',
  },
  'creators.faq.a7': {
    en: 'No cap. The more students you refer, the more you earn. Commission is recurring for as long as each student stays subscribed.',
    ar: 'ما في سقف. كل ما توصّل طلاب أكثر، تكسب أكثر. العمولة متكرّرة طول ما كل طالب مشترك.',
  },

  // ─── School landing (B2B) ───────────────────────────────────────────
  'school.landing.h1': {
    en: 'The English Hub for schools and trusts',
    ar: 'The English Hub للمدارس والمؤسسات',
  },
  'school.landing.intro': {
    en: 'Department-wide GCSE and IGCSE English revision with AI marking, mark-scheme calibrated content, and teacher dashboards. Built for English departments, multi-academy trusts, and British international schools.',
    ar: 'مراجعة GCSE و IGCSE إنجليزي على مستوى القسم مع تصحيح ذكاء اصطناعي، محتوى معاير على مخطط التصحيح، ولوحات معلمين. مبني لأقسام الإنجليزي وشبكات الأكاديميات والمدارس البريطانية العالمية.',
  },
  'school.landing.cta.primary': { en: 'See licence options', ar: 'شوف خيارات الترخيص' },
  'school.landing.cta.secondary': { en: 'Talk to us', ar: 'تواصل معانا' },

  // ─── Data processing (B2B legal) — top section keys only ────────────
  'data_processing.h1': { en: 'Data Processing Information', ar: 'معلومات معالجة البيانات' },
  'data_processing.updated': { en: 'Last updated: March 2026', ar: 'آخر تحديث: مارس ٢٠٢٦' },
  'data_processing.intro_h2': { en: '1. Introduction', ar: '١. مقدمة' },
  'data_processing.contact_h2': { en: '12. Contact Us', ar: '١٢. تواصل معانا' },
  'data_processing.contact_body': {
    en: 'If you have any questions about how we process data on behalf of your School, or if you need further information to complete a Data Protection Impact Assessment (DPIA) or vendor security review, please get in touch:',
    ar: 'لو عندك أسئلة عن شلون نعالج البيانات نيابة عن مدرستك، أو محتاج معلومات إضافية لإكمال تقييم أثر حماية البيانات (DPIA) أو مراجعة أمن المورّد، تواصل معانا:',
  },

  // ─── For-schools/contact page ───────────────────────────────────────
  'for_schools_contact.h1': {
    en: 'Book a Call with Our Schools Team',
    ar: 'احجز مكالمة مع فريق المدارس',
  },
  'for_schools_contact.intro': {
    en: 'A 20-minute conversation about whether The English Hub fits your department.',
    ar: 'مكالمة ٢٠ دقيقة عن هل The English Hub يناسب قسمك ولا لا.',
  },
  'for_schools_contact.back_to_schools': { en: 'Back to Schools', ar: 'رجوع للمدارس' },
  'for_schools_contact.field.school_name': { en: 'School Name', ar: 'اسم المدرسة' },
  'for_schools_contact.placeholder.school_name': {
    en: 'e.g. Oakfield Academy',
    ar: 'مثلاً Oakfield Academy',
  },
  'for_schools_contact.field.contact_name': { en: 'Your Name', ar: 'اسمك' },
  'for_schools_contact.placeholder.contact_name': {
    en: 'e.g. Jane Smith',
    ar: 'مثلاً Jane Smith',
  },
  'for_schools_contact.field.email': { en: 'Email', ar: 'الإيميل' },
  'for_schools_contact.placeholder.email': {
    en: 'jane.smith@school.ac.uk',
    ar: 'jane.smith@school.ac.uk',
  },
  'for_schools_contact.field.phone': { en: 'Phone (optional)', ar: 'رقم التلفون (اختياري)' },
  'for_schools_contact.placeholder.phone': { en: '7700 000000', ar: '٧٧٠٠ ٠٠٠٠٠٠' },
  'for_schools_contact.field.preferred_contact': {
    en: 'Preferred Contact Method',
    ar: 'الوسيلة المفضّلة للتواصل',
  },
  'for_schools_contact.preferred.email': { en: 'Email', ar: 'إيميل' },
  'for_schools_contact.preferred.phone': { en: 'Phone', ar: 'تلفون' },
  'for_schools_contact.preferred.either': { en: 'Either', ar: 'الاثنين' },
  'for_schools_contact.field.role': { en: 'Role', ar: 'المنصب' },
  'for_schools_contact.placeholder.role': { en: 'Select your role...', ar: 'اختر منصبك...' },
  'for_schools_contact.role.head_of_department': { en: 'Head of Department', ar: 'رئيس قسم' },
  'for_schools_contact.role.head_of_english': {
    en: 'Head of English',
    ar: 'رئيس قسم اللغة الإنجليزية',
  },
  'for_schools_contact.role.deputy_head': { en: 'Deputy Head', ar: 'نائب المدير' },
  'for_schools_contact.role.headteacher': { en: 'Headteacher', ar: 'مدير المدرسة' },
  'for_schools_contact.role.mat_lead': { en: 'MAT Lead', ar: 'قائد المجموعة المدرسية (MAT)' },
  'for_schools_contact.role.other': { en: 'Other', ar: 'غير ذلك' },
  'for_schools_contact.field.student_count': {
    en: 'Number of Students in English Department',
    ar: 'عدد الطلاب في قسم اللغة الإنجليزية',
  },
  'for_schools_contact.placeholder.student_count': {
    en: 'Select student count...',
    ar: 'اختر عدد الطلاب...',
  },
  'for_schools_contact.student_count.under_100': { en: 'Under 100', ar: 'أقل من ١٠٠' },
  'for_schools_contact.student_count.100_300': { en: '100-300', ar: '١٠٠-٣٠٠' },
  'for_schools_contact.student_count.300_500': { en: '300-500', ar: '٣٠٠-٥٠٠' },
  'for_schools_contact.student_count.500_1000': { en: '500-1000', ar: '٥٠٠-١٠٠٠' },
  'for_schools_contact.student_count.1000_plus': { en: '1000+', ar: '+١٠٠٠' },
  'for_schools_contact.field.exam_board': { en: 'Exam Board', ar: 'بورد الامتحان' },
  'for_schools_contact.placeholder.exam_board': {
    en: 'Select exam board...',
    ar: 'اختر بورد الامتحان...',
  },
  'for_schools_contact.field.message': { en: 'Message (optional)', ar: 'الرسالة (اختياري)' },
  'for_schools_contact.placeholder.message': {
    en: "Anything else you'd like us to know ahead of the call?",
    ar: 'في شي ثاني تبغانا نعرفه قبل المكالمة؟',
  },
  'for_schools_contact.error.school_name_required': {
    en: 'School name is required.',
    ar: 'اسم المدرسة مطلوب.',
  },
  'for_schools_contact.error.contact_name_required': {
    en: 'Your name is required.',
    ar: 'اسمك مطلوب.',
  },
  'for_schools_contact.error.email_required': { en: 'Email is required.', ar: 'الإيميل مطلوب.' },
  'for_schools_contact.error.email_invalid': {
    en: 'Please enter a valid email address.',
    ar: 'لو سمحت اكتب إيميل صحيح.',
  },
  'for_schools_contact.error.role_required': {
    en: 'Please select your role.',
    ar: 'لو سمحت اختر منصبك.',
  },
  'for_schools_contact.error.student_count_required': {
    en: 'Please select student count.',
    ar: 'لو سمحت اختر عدد الطلاب.',
  },
  'for_schools_contact.error.exam_board_required': {
    en: 'Please select your exam board.',
    ar: 'لو سمحت اختر بورد الامتحان.',
  },
  'for_schools_contact.error.generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار خلل. لو سمحت جرّب مرة ثانية.',
  },
  'for_schools_contact.error.network': {
    en: 'Could not send your request. Please check your connection and try again.',
    ar: 'ما قدرنا نرسل طلبك. شيك على اتصال الإنترنت وجرّب مرة ثانية.',
  },
  'for_schools_contact.submit': { en: 'Book My Call', ar: 'احجز مكالمتي' },
  'for_schools_contact.sending': { en: 'Sending...', ar: 'يرسل...' },
  'for_schools_contact.success.title': {
    en: "Thanks! We'll be in touch within 24 hours.",
    ar: 'مشكور! بنتواصل معاك خلال ٢٤ ساعة.',
  },
  'for_schools_contact.success.body': {
    en: 'One of our schools team will reach out to schedule your 20-minute call. Check your inbox (and spam folder) for a confirmation.',
    ar: 'حد من فريق المدارس راح يتواصل معاك عشان يحدد موعد مكالمة ٢٠ دقيقة. شيك على الإيميل (وفولدر السبام) للتأكيد.',
  },
  'for_schools_contact.prefer_register_prefix': {
    en: 'Prefer to register directly?',
    ar: 'تفضّل تسجّل مباشرة؟',
  },
  'for_schools_contact.prefer_register_link': {
    en: 'Self-serve registration',
    ar: 'التسجيل الذاتي',
  },

  // ─── Country codes (used in phone fields) ──────────────────────────
  'country_code.uk': { en: 'UK (+44)', ar: 'بريطانيا (٤٤+)' },
  'country_code.us_ca': { en: 'US/CA (+1)', ar: 'أمريكا/كندا (١+)' },
  'country_code.uae': { en: 'UAE (+971)', ar: 'الإمارات (٩٧١+)' },
  'country_code.qatar': { en: 'Qatar (+974)', ar: 'قطر (٩٧٤+)' },
  'country_code.singapore': { en: 'Singapore (+65)', ar: 'سنغافورة (٦٥+)' },
  'country_code.hk': { en: 'HK (+852)', ar: 'هونغ كونغ (٨٥٢+)' },
  'country_code.australia': { en: 'Australia (+61)', ar: 'أستراليا (٦١+)' },

  // ─── Exam board labels (whitelist values keep their canonical strings) ──
  'exam_board.aqa': { en: 'AQA', ar: 'AQA' },
  'exam_board.edexcel': { en: 'Edexcel', ar: 'Edexcel' },
  'exam_board.ocr': { en: 'OCR', ar: 'OCR' },
  'exam_board.wjec': { en: 'WJEC', ar: 'WJEC' },
  'exam_board.igcse_caie': { en: 'IGCSE/CAIE', ar: 'IGCSE/CAIE' },
  'exam_board.other': { en: 'Other', ar: 'غير ذلك' },

  // ─── Year group labels (English keystage names stay Latin) ─────────
  'year_group.year_7': { en: 'Year 7', ar: 'Year 7' },
  'year_group.year_8': { en: 'Year 8', ar: 'Year 8' },
  'year_group.year_9': { en: 'Year 9', ar: 'Year 9' },
  'year_group.year_10': { en: 'Year 10', ar: 'Year 10' },
  'year_group.year_11': { en: 'Year 11', ar: 'Year 11' },
  'year_group.year_12': { en: 'Year 12', ar: 'Year 12' },
  'year_group.year_13': { en: 'Year 13', ar: 'Year 13' },
  'year_group.adult': { en: 'Adult', ar: 'بالغ' },
  'year_group.other': { en: 'Other', ar: 'غير ذلك' },

  // ─── BookCallForm (for-schools page client island) ──────────────────
  'book_call.field.school_name': { en: 'School Name', ar: 'اسم المدرسة' },
  'book_call.placeholder.school_name': {
    en: 'e.g. Riverside Academy',
    ar: 'مثلاً Riverside Academy',
  },
  'book_call.field.contact_name': { en: 'Your Name', ar: 'اسمك' },
  'book_call.placeholder.contact_name': { en: 'e.g. Mrs J. Smith', ar: 'مثلاً Mrs J. Smith' },
  'book_call.field.email': { en: 'School Email', ar: 'إيميل المدرسة' },
  'book_call.placeholder.email': { en: 'j.smith@school.ac.uk', ar: 'j.smith@school.ac.uk' },
  'book_call.field.role': { en: 'Your Role', ar: 'منصبك' },
  'book_call.placeholder.role': { en: 'Select your role', ar: 'اختر منصبك' },
  'book_call.role.head_of_english': { en: 'Head of English', ar: 'رئيس قسم اللغة الإنجليزية' },
  'book_call.role.english_teacher': { en: 'English Teacher', ar: 'معلم/معلمة لغة إنجليزية' },
  'book_call.role.head_of_department': { en: 'Head of Department', ar: 'رئيس قسم' },
  'book_call.role.assistant_head': { en: 'Assistant Headteacher', ar: 'مساعد مدير المدرسة' },
  'book_call.role.deputy_head': { en: 'Deputy Headteacher', ar: 'نائب مدير المدرسة' },
  'book_call.role.headteacher': { en: 'Headteacher', ar: 'مدير المدرسة' },
  'book_call.role.mat_leader': { en: 'MAT Leader', ar: 'قائد المجموعة المدرسية (MAT)' },
  'book_call.role.other': { en: 'Other', ar: 'غير ذلك' },
  'book_call.field.student_count': {
    en: 'Approx. Number of Students',
    ar: 'العدد التقريبي للطلاب',
  },
  'book_call.placeholder.student_count': {
    en: 'Select a range (optional)',
    ar: 'اختر نطاق (اختياري)',
  },
  'book_call.student_count.under_100': { en: 'Under 100 students', ar: 'أقل من ١٠٠ طالب' },
  'book_call.student_count.100_300': { en: '100 - 300 students', ar: '١٠٠ - ٣٠٠ طالب' },
  'book_call.student_count.300_600': { en: '300 - 600 students', ar: '٣٠٠ - ٦٠٠ طالب' },
  'book_call.student_count.600_1000': { en: '600 - 1,000 students', ar: '٦٠٠ - ١٬٠٠٠ طالب' },
  'book_call.student_count.over_1000': { en: 'Over 1,000 students', ar: 'أكثر من ١٬٠٠٠ طالب' },
  'book_call.student_count.mat': { en: 'Multi-Academy Trust', ar: 'مجموعة مدارس (MAT)' },
  'book_call.field.message': {
    en: 'Anything else we should know? (optional)',
    ar: 'في شي ثاني تبغانا نعرفه؟ (اختياري)',
  },
  'book_call.placeholder.message': {
    en: 'Tell us about your department, any specific needs, or your preferred call time...',
    ar: 'احكِ لنا عن قسمك، أي احتياجات معيّنة، أو الوقت المفضّل للمكالمة...',
  },
  'book_call.submit': { en: 'Book a 20-Minute Call', ar: 'احجز مكالمة ٢٠ دقيقة' },
  'book_call.sending': { en: 'Sending...', ar: 'يرسل...' },
  'book_call.success.title': { en: 'Thank you!', ar: 'مشكور!' },
  'book_call.success.body': {
    en: 'We have received your request and will be in touch within one working day to arrange your call. Check your inbox for a confirmation email.',
    ar: 'استلمنا طلبك وبنتواصل معاك خلال يوم عمل لترتيب المكالمة. شيك على إيميلك للتأكيد.',
  },
  'book_call.error.generic': {
    en: 'Something went wrong. Please try again.',
    ar: 'صار خلل. لو سمحت جرّب مرة ثانية.',
  },
  'book_call.reply_note': {
    en: 'We reply within one working day. No obligation, no hard sell.',
    ar: 'نرد خلال يوم عمل. بدون التزام، بدون ضغط.',
  },
  'book_call.or_email_us_at': { en: 'Or email us at', ar: 'أو راسلنا على' },

  // ─── Dashboard pages ────────────────────────────────────────────────
  'dashboard.parent.h1': { en: 'Parent Dashboard', ar: 'لوحة ولي الأمر' },
  'dashboard.parent.intro': {
    en: 'Track your child’s progress, view reports, and manage account settings.',
    ar: 'تابع تقدّم ابنك، شوف التقارير، وأدر إعدادات الحساب.',
  },
  'dashboard.settings.h1': { en: 'Account Settings', ar: 'إعدادات الحساب' },
  'dashboard.settings.intro': {
    en: 'Manage your profile, security, and preferences.',
    ar: 'أدر ملفك الشخصي والأمان والتفضيلات.',
  },

  // ─── For-teachers/free-resources ────────────────────────────────────
  'for_teachers_free.h1': {
    en: 'Free Teaching Resources',
    ar: 'موارد تدريس ببلاش',
  },
  'for_teachers_free.intro': {
    en: 'Download a complete lesson, worksheet, and teaching guide for AQA GCSE English Literature — free, no signup required. See exactly what you get with a subscription.',
    ar: 'نزّل درس كامل وورقة عمل ودليل تدريس لـ AQA GCSE Literature — ببلاش، بدون تسجيل. شوف بالضبط شنو تأخذ مع الاشتراك.',
  },

  // ─── Loading labels (meaningful AR) ────────────────────────────────
  // (loading.root.label already defined above — keep single source.)
  'loading.courses.label': { en: 'Loading courses…', ar: 'لحظة، نجيب المقررات…' },
  'loading.course_detail.label': { en: 'Loading course…', ar: 'لحظة، نفتح المقرر…' },
  'loading.dashboard.label': { en: 'Loading your dashboard…', ar: 'لحظة، نجهّز لوحتك…' },
  'loading.games.label': { en: 'Loading games…', ar: 'لحظة، نجيب الألعاب…' },
  'loading.mock_exams.label': { en: 'Loading mock exams…', ar: 'لحظة، نجيب الموكات…' },
  'loading.practice.label': { en: 'Loading practice…', ar: 'لحظة، نجيب التدريبات…' },
  'loading.revision.label': { en: 'Loading revision…', ar: 'لحظة، نجيب المراجعة…' },
  'loading.poetry.label': { en: 'Loading poetry…', ar: 'لحظة، نجيب الشعر…' },
  'loading.quiz.label': { en: 'Loading quiz…', ar: 'لحظة، نجيب الاختبار…' },
  'loading.texts.label': { en: 'Loading texts…', ar: 'لحظة، نجيب النصوص…' },
  'loading.school.label': { en: 'Loading school dashboard…', ar: 'لحظة، نجهّز لوحة المدرسة…' },

  // ─── Resources / Teaching hub (B2B teacher-facing) ─────────────────
  // Brand + technical terms (GCSE, IGCSE, AQA, Edexcel, OCR, Cambridge,
  // AO1-AO6, KS3, PEE) stay in Latin script. Body Arabic = MSA
  // (technical content for teachers); navigation chrome = Khaleeji.
  'resources.teaching.access.title_only': { en: 'Teacher Access Only', ar: 'دخول للمعلمين فقط' },
  'resources.teaching.access.body': {
    en: 'Teaching resources are only available to verified teacher accounts. Please log in with a teacher account or contact support if you believe this is an error.',
    ar: 'موارد التدريس متاحة لحسابات المعلمين الموثّقة فقط. سجّل دخولك بحساب معلم أو تواصل مع الدعم لو تعتقد أنّ هذا خطأ.',
  },
  'resources.teaching.access.back': { en: 'Back to Resources', ar: 'رجوع للموارد' },
  'resources.teaching.hero.eyebrow': { en: 'Teacher Resources', ar: 'موارد المعلمين' },
  'resources.teaching.hero.title': { en: 'Teaching Resources Hub', ar: 'مركز موارد التدريس' },
  'resources.teaching.hero.subtitle': {
    en: 'Ready-made lesson plans, assessment tools, and printable resources designed for GCSE and IGCSE English teachers.',
    ar: 'خطط دروس جاهزة وأدوات تقييم وموارد قابلة للطباعة، مصمّمة لمعلّمي اللغة الإنجليزية في GCSE و IGCSE.',
  },
  'resources.teaching.stats.lesson_plans': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'resources.teaching.stats.assessment': { en: 'Assessment Tools', ar: 'أدوات التقييم' },
  'resources.teaching.stats.boards': { en: 'Exam Boards', ar: 'هيئات الامتحان' },
  'resources.teaching.stats.topics': { en: 'Topics Covered', ar: 'المواضيع المغطّاة' },
  'resources.teaching.browse.title': { en: 'Browse Resources', ar: 'تصفّح الموارد' },
  'resources.teaching.browse.subtitle': {
    en: 'Everything you need to plan, teach, and assess GCSE English.',
    ar: 'كل اللي تحتاجه عشان تخطّط وتدرّس وتقيّم GCSE English.',
  },
  'resources.teaching.cards.lp.title': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'resources.teaching.cards.lp.desc': {
    en: 'Ready-made lesson plans for GCSE English Language and Literature. Covering every major text, topic, and exam skill with differentiated activities.',
    ar: 'خطط دروس جاهزة لـ GCSE English Language و Literature. تغطّي كل النصوص والمواضيع ومهارات الامتحان الرئيسية، مع أنشطة متمايزة.',
  },
  'resources.teaching.cards.assess.title': { en: 'Assessment Tools', ar: 'أدوات التقييم' },
  'resources.teaching.cards.assess.desc': {
    en: 'Quick quiz generators, essay question banks, mark scheme templates, and progress tracker downloads for formative and summative assessment.',
    ar: 'مولّدات اختبارات سريعة، وبنوك أسئلة مقالية، وقوالب أنظمة درجات، وملفات تتبّع التقدّم، للتقييم التكويني والختامي.',
  },
  'resources.teaching.cards.print.title': { en: 'Printable Resources', ar: 'موارد قابلة للطباعة' },
  'resources.teaching.cards.print.desc': {
    en: 'Downloadable worksheets, revision mats, knowledge organisers, and display materials you can print for classroom use.',
    ar: 'أوراق عمل قابلة للتنزيل، ومخطّطات مراجعة، ومنظّمات معرفة، ومواد عرض للطباعة للاستخدام داخل الصف.',
  },
  'resources.teaching.cards.specs.title': {
    en: 'Exam Board Specifications',
    ar: 'مواصفات هيئات الامتحان',
  },
  'resources.teaching.cards.specs.desc': {
    en: 'Direct links to the official AQA, Edexcel, OCR, and Cambridge IGCSE specifications, sample papers, and examiner reports.',
    ar: 'روابط مباشرة لمواصفات AQA و Edexcel و OCR و Cambridge IGCSE الرسمية، وعيّنات الأوراق، وتقارير المراجع.',
  },
  'resources.teaching.cards.coming': { en: 'Coming Soon', ar: 'قريباً' },
  'resources.teaching.cards.explore': { en: 'Explore', ar: 'استكشف' },
  'resources.teaching.specs.title': {
    en: 'Exam Board Specifications',
    ar: 'مواصفات هيئات الامتحان',
  },
  'resources.teaching.specs.subtitle': {
    en: 'Quick access to official specifications, sample papers, and examiner reports.',
    ar: 'وصول سريع للمواصفات الرسمية وعيّنات الأوراق وتقارير المراجع.',
  },

  // ─── Resources / Teaching / Lesson plans (index) ────────────────────
  'resources.teaching.lp.idx.bc.resources': { en: 'Resources', ar: 'الموارد' },
  'resources.teaching.lp.idx.bc.teaching': { en: 'Teaching', ar: 'التدريس' },
  'resources.teaching.lp.idx.bc.lesson_plans': { en: 'Lesson plans', ar: 'خطط الدروس' },
  'resources.teaching.lp.idx.h1': {
    en: 'Free lesson plans for GCSE & IGCSE English',
    ar: 'خطط دروس مجانية لـ GCSE و IGCSE English',
  },
  'resources.teaching.lp.idx.intro': {
    en: 'Classroom-ready plans with learning objectives, activities, and timings. Pick a plan, tweak it for your class, teach it tomorrow.',
    ar: 'خطط جاهزة للصف، فيها أهداف التعلّم والأنشطة والتوقيتات. اختر خطة وعدّلها لصفّك ودرّسها باكر.',
  },
  'resources.teaching.lp.idx.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'resources.teaching.lp.idx.empty.title': {
    en: 'Lesson plans are on the way',
    ar: 'خطط الدروس في الطريق',
  },
  'resources.teaching.lp.idx.empty.body': {
    en: "We're publishing free, classroom-ready plans for GCSE and IGCSE English. Check back soon.",
    ar: 'إحنا ننشر خطط مجانية وجاهزة للصف لـ GCSE و IGCSE English. ارجع لنا بعد فترة.',
  },

  // ─── Resources / Teaching / Lesson plan (detail) ────────────────────
  'resources.teaching.lp.detail.bc.lesson_plans': { en: 'Lesson plans', ar: 'خطط الدروس' },
  'resources.teaching.lp.detail.coming_soon_pill': {
    en: 'Full plan coming soon',
    ar: 'الخطة الكاملة قريباً',
  },
  'resources.teaching.lp.detail.objectives_h2': { en: 'Learning objectives', ar: 'أهداف التعلّم' },
  'resources.teaching.lp.detail.tba.body': {
    en: 'Detailed activities and resources are being finalised. Join the list below to be notified when this plan is published.',
    ar: 'الأنشطة والموارد التفصيلية يتم تجهيزها. سجّل في القائمة أسفل ليصلك إشعار حين تُنشر هذه الخطة.',
  },

  // ─── Resources / Teaching / Printables ──────────────────────────────
  'resources.teaching.print.idx.eyebrow': {
    en: 'Free teaching resources',
    ar: 'موارد تدريس مجانية',
  },
  'resources.teaching.print.idx.h1': {
    en: 'Free printables for GCSE & IGCSE English',
    ar: 'مواد قابلة للطباعة مجاناً لـ GCSE و IGCSE English',
  },
  'resources.teaching.print.idx.intro': {
    en: 'Classroom-ready PDFs covering set texts, exam technique, and writing skills. Each printable maps to a specific exam board where it applies, and is free for teachers and students to download. New sheets are released regularly — drop your email on any page below to be notified when it goes live.',
    ar: 'ملفات PDF جاهزة للصف، تغطّي النصوص المقرّرة وتقنيات الامتحان ومهارات الكتابة. كل مادة قابلة للطباعة مرتبطة بهيئة امتحان معيّنة عند الانطباق، ومجانية للمعلّمين والطلاب. أوراق جديدة تُنشر بانتظام — حطّ إيميلك في أيّ صفحة أسفل ليصلك إشعار عند النشر.',
  },
  'resources.teaching.print.idx.coming': {
    en: 'Coming soon — get notified',
    ar: 'قريباً — استلم إشعاراً',
  },
  'resources.teaching.print.idx.available': { en: 'Available now', ar: 'متاح الحين' },
  'resources.teaching.print.idx.view_details': { en: 'View details', ar: 'عرض التفاصيل' },
  'resources.teaching.print.idx.empty.title': {
    en: 'Printables landing soon',
    ar: 'المواد القابلة للطباعة قريباً',
  },
  'resources.teaching.print.idx.empty.body': {
    en: "We're finalising the first batch of printables. Check back shortly, or browse our other free resources in the meantime.",
    ar: 'إحنا نجهّز الدفعة الأولى من المواد القابلة للطباعة. ارجع لنا بعد قليل، ولا تصفّح موارد ببلاش الثانية لين ذيك.',
  },
  'resources.teaching.print.detail.bc.home': { en: 'Home', ar: 'الرئيسية' },
  'resources.teaching.print.detail.bc.printables': {
    en: 'Printables',
    ar: 'المواد القابلة للطباعة',
  },

  // ─── Teacher Library lesson plans ───────────────────────────────────
  'resources.tl.lp.bc.teacher_library': { en: 'Teacher Library', ar: 'مكتبة المعلّم' },
  'resources.tl.lp.bc.lesson_plans': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'resources.tl.lp.idx.for_teachers': { en: 'For Teachers', ar: 'للمعلمين' },
  'resources.tl.lp.idx.for_board': { en: 'For', ar: 'لـ' },
  'resources.tl.lp.idx.h1': { en: 'Lesson Plans', ar: 'خطط الدروس' },
  'resources.tl.lp.idx.intro_a': {
    en: 'ready-to-teach GCSE English lesson plans. Each plan includes learning objectives, a starter, main activity, plenary, differentiation notes, and a homework task.',
    ar: 'خطة درس جاهزة للتدريس في GCSE English. كل خطة تتضمّن أهداف التعلّم ونشاطاً افتتاحياً ونشاطاً رئيسياً وخلاصة وملاحظات تمييز ومهمّة منزلية.',
  },
  'resources.tl.lp.detail.kind': { en: 'Lesson Plan', ar: 'خطة درس' },
  'resources.tl.lp.detail.kind.comparison': { en: 'Comparison Lesson', ar: 'درس مقارنة' },
  'resources.tl.lp.detail.meta.year': { en: 'Year Group', ar: 'الصف الدراسي' },
  'resources.tl.lp.detail.meta.duration': { en: 'Duration', ar: 'المدّة' },
  'resources.tl.lp.detail.meta.board': { en: 'Exam Board', ar: 'هيئة الامتحان' },
  'resources.tl.lp.detail.meta.subject': { en: 'Subject', ar: 'المادّة' },
  'resources.tl.lp.detail.subject.literature': { en: 'Literature', ar: 'Literature' },
  'resources.tl.lp.detail.pdf.cta': { en: 'Download as PDF', ar: 'حمّل PDF' },
  'resources.tl.lp.detail.pdf.note': { en: 'PDF export coming soon', ar: 'تصدير PDF قريباً' },
  'resources.tl.lp.detail.h2.objectives': { en: 'Learning Objectives', ar: 'أهداف التعلّم' },
  'resources.tl.lp.detail.objectives.intro': {
    en: 'By the end of this lesson, students will be able to:',
    ar: 'بنهاية هذا الدرس، سيكون الطلاب قادرين على:',
  },
  // Macbeth-Ambition specific
  'resources.tl.lp.macbeth.title': {
    en: 'Macbeth: Ambition & the Supernatural',
    ar: 'Macbeth: الطموح والخارق للطبيعة',
  },
  'resources.tl.lp.macbeth.bc.last': { en: 'Macbeth: Ambition', ar: 'Macbeth: الطموح' },
  'resources.tl.lp.macbeth.intro': {
    en: "A full 60-minute lesson exploring how Shakespeare presents ambition as a destructive force through Macbeth's soliloquies and his encounters with the witches.",
    ar: 'درس كامل مدّته ٦٠ دقيقة يستكشف كيف يقدّم Shakespeare الطموح بوصفه قوّة مدمّرة من خلال مناجاة Macbeth الذاتية ولقاءاته مع الساحرات.',
  },
  // Inspector-Calls specific
  'resources.tl.lp.ic.title': {
    en: 'An Inspector Calls: Social Responsibility (Act 1)',
    ar: 'An Inspector Calls: المسؤولية الاجتماعية (الفصل الأول)',
  },
  'resources.tl.lp.ic.bc.last': {
    en: 'Inspector Calls: Responsibility',
    ar: 'Inspector Calls: المسؤولية',
  },
  'resources.tl.lp.ic.intro': {
    en: "A 60-minute lesson examining how Priestley introduces the theme of responsibility through Mr Birling's birthday speech and the Inspector's arrival. Includes a guided close reading and a structured essay paragraph.",
    ar: 'درس مدّته ٦٠ دقيقة يبحث في كيفية تقديم Priestley لموضوع المسؤولية من خلال خطاب عيد ميلاد السيد Birling ووصول المفتّش. يتضمّن قراءة موجّهة عن قرب وفقرة مقالية منظّمة.',
  },
  // Power-conflict comparison specific
  'resources.tl.lp.pcc.title': {
    en: 'Ozymandias vs My Last Duchess: Power Comparison',
    ar: 'Ozymandias مقابل My Last Duchess: مقارنة السلطة',
  },
  'resources.tl.lp.pcc.bc.last': {
    en: 'Ozymandias vs My Last Duchess',
    ar: 'Ozymandias مقابل My Last Duchess',
  },
  'resources.tl.lp.pcc.intro': {
    en: 'A structured comparison lesson for the AQA Power & Conflict anthology. Students build a side-by-side analysis of two poems that present dangerous, possessive power — and draft their opening comparative paragraph.',
    ar: 'درس مقارنة منظّم لأنطولوجيا AQA Power & Conflict. يبني الطلاب تحليلاً جنباً إلى جنب لقصيدتين تقدّمان السلطة الخطيرة والاستحواذية، ويصوغون فقرتهم المقارنة الافتتاحية.',
  },

  // ─── English Literature / AQA hub & Poetry hero ────────────────────
  'resources.lit.aqa.h1': { en: 'AQA GCSE English Literature', ar: 'AQA GCSE English Literature' },
  'resources.lit.aqa.intro': {
    en: 'AQA GCSE English Literature set-text guides for Macbeth, Romeo and Juliet, Power and Conflict poetry, exam technique and Grade 9 essay plans.',
    ar: 'أدلّة النصوص المقرّرة في AQA GCSE English Literature: Macbeth و Romeo and Juliet وشعر Power and Conflict، إلى جانب تقنيات الامتحان وخطط مقالات Grade 9.',
  },
  'resources.lit.aqa.poetry.h1': { en: 'AQA Poetry Anthology', ar: 'أنطولوجيا الشعر — AQA' },
  'resources.lit.aqa.poetry.intro': {
    en: 'Full analysis of all 30 poems in the AQA GCSE English Literature poetry anthology — Power and Conflict & Love and Relationships clusters with themes, language analysis, structure, and comparison ideas.',
    ar: 'تحليل كامل لجميع القصائد الـ٣٠ في أنطولوجيا AQA GCSE English Literature: عنقودا Power and Conflict و Love and Relationships، مع الموضوعات وتحليل اللغة والبنية وأفكار المقارنة.',
  },

  // ─── Marketing sections (mock-exam adjacent home blocks) ───────────
  // MockExamsSection
  'home.mock.badge_new': { en: 'New Feature', ar: 'ميزة جديدة' },
  'home.mock.h2': {
    en: 'Full Mock Exams & AI Feedback',
    ar: 'موكات كاملة + تغذية راجعة بالذكاء الاصطناعي',
  },
  'home.mock.lead_default': {
    en: 'The most comprehensive exam preparation tools available. Practice under real exam conditions and get instant AI-powered feedback on your writing.',
    ar: 'أشمل أدوات تحضير للامتحان. تمرّن بظروف الامتحان الحقيقية واحصل على تغذية راجعة فورية بالذكاء الاصطناعي على كتابتك.',
  },
  'home.mock.card.exams_title_default': { en: 'Full Mock Exam Papers', ar: 'موكات امتحانات كاملة' },
  'home.mock.card.exams_desc_default': {
    en: 'Full-length timed exams matching the real GCSE format. Every paper includes detailed model answers at multiple grade bands and official mark schemes.',
    ar: 'موكات كاملة بتوقيت حقيقي مطابقة لشكل GCSE. كل ورقة فيها إجابات نموذجية بمستويات درجات مختلفة ومخططات تصحيح رسمية.',
  },
  'home.mock.card.exams_cta_default': { en: 'Try a Free Mock Exam →', ar: 'جرّب موك ببلاش ←' },
  'home.mock.card.feedback_title': {
    en: 'AI Essay Feedback',
    ar: 'تغذية راجعة على المقالات بالذكاء الاصطناعي',
  },
  'home.mock.card.feedback_desc_default': {
    en: 'Submit your essay and get instant, expert-level feedback. Our AI analyses your work against real GCSE mark schemes and shows you exactly how to improve.',
    ar: 'أرسل مقالك واحصل على تغذية راجعة فورية بمستوى الخبراء. الذكاء الاصطناعي يحلّل عملك على أساس مخططات تصحيح GCSE الحقيقية ويبيّن لك بالضبط كيف تتحسّن.',
  },
  'home.mock.card.feedback_cta': {
    en: 'Start Free Trial for AI Feedback →',
    ar: 'ابدأ التجربة المجانية للتغذية الراجعة ←',
  },
  'home.mock.feedback.bullet.grade': {
    en: 'Estimated grade band (4-5, 6-7, or 8-9)',
    ar: 'تقدير مستوى الدرجة (4-5 أو 6-7 أو 8-9)',
  },
  'home.mock.feedback.bullet.ao': {
    en: 'Assessment objective scores with comments',
    ar: 'درجات أهداف التقييم AO مع تعليقات',
  },
  'home.mock.feedback.bullet.strengths': {
    en: 'Specific strengths with direct quotes',
    ar: 'نقاط قوة محدّدة مع اقتباسات مباشرة',
  },
  'home.mock.feedback.bullet.improvements': {
    en: 'Actionable improvement suggestions',
    ar: 'اقتراحات تحسين قابلة للتطبيق',
  },
  'home.mock.feedback.bullet.annotation': {
    en: 'Paragraph-by-paragraph annotation',
    ar: 'شرح فقرة بفقرة',
  },
  // Per-board paper-count labels (board codes stay Latin)
  'home.mock.papers.aqa': { en: 'AQA Papers', ar: 'موكات AQA' },
  'home.mock.papers.edexcel': { en: 'Edexcel Papers', ar: 'موكات Edexcel' },
  'home.mock.papers.ocr': { en: 'OCR Papers', ar: 'موكات OCR' },
  'home.mock.papers.eduqas': { en: 'WJEC Eduqas Papers', ar: 'موكات WJEC Eduqas' },
  'home.mock.papers.edexcel_igcse': { en: 'Edexcel IGCSE Papers', ar: 'موكات Edexcel IGCSE' },
  'home.mock.papers.cambridge_0500': {
    en: 'Cambridge First Language Papers',
    ar: 'موكات Cambridge First Language',
  },
  'home.mock.papers.cambridge_0990': {
    en: 'Cambridge First Language (9-1) Papers',
    ar: 'موكات Cambridge First Language (9-1)',
  },

  // ExamGuideSection
  'home.guide.h2': { en: "Your Board's Exam Guide", ar: 'دليل الامتحان مال بوردك' },
  'home.guide.lead': {
    en: 'Paper structure, mark schemes, and expert tips — tailored to your board.',
    ar: 'تركيب الورقة ومخططات التصحيح ونصائح الخبراء — على مقاس بوردك.',
  },
  'home.guide.your_board': { en: 'Your board', ar: 'بوردك' },
  'home.guide.cta_full': { en: 'View Full Guide →', ar: 'شوف الدليل الكامل ←' },
  'home.guide.card_desc': {
    en: 'Paper structure, mark schemes, and expert tips.',
    ar: 'تركيب الورقة ومخططات التصحيح ونصائح الخبراء.',
  },

  // PoemOfTheDay
  'home.poem.kicker': { en: 'Poem of the Day', ar: 'قصيدة اليوم' },
  'home.poem.title': { en: '"I Wandered Lonely as a Cloud"', ar: '"I Wandered Lonely as a Cloud"' },
  'home.poem.author': { en: '— William Wordsworth', ar: '— William Wordsworth' },
  'home.poem.summary': {
    en: 'Wordsworth\'s most iconic Romantic lyric. Explore how natural imagery, personification, and the "inward eye" motif create a meditation on memory and solitude — a staple of GCSE and iGCSE English Literature.',
    ar: 'أشهر قصيدة رومانسية لـ Wordsworth. شوف شلون الصور الطبيعية والتشخيص ودافع "العين الباطنة" يصنعون تأملاً في الذاكرة والوحدة — أساسي في GCSE و iGCSE Literature.',
  },
  'home.poem.tag.romanticism': { en: 'Romanticism', ar: 'الرومانسية' },
  'home.poem.tag.nature': { en: 'Nature', ar: 'الطبيعة' },
  'home.poem.tag.personification': { en: 'Personification', ar: 'التشخيص' },
  'home.poem.cta_library': { en: 'Explore the poetry library →', ar: 'استكشف مكتبة الشعر ←' },

  // MarqueeStrip
  'home.marquee.phrase.1': { en: 'Master the sonnet', ar: 'أتقن السوناتة' },
  'home.marquee.phrase.2': { en: 'Plan before you write', ar: 'خطّط قبل لا تكتب' },
  'home.marquee.phrase.3': { en: 'Annotate everything', ar: 'علّق على كل شي' },
  'home.marquee.phrase.4': { en: 'Know your AOs', ar: 'اعرف الـ AOs مالك' },
  'home.marquee.phrase.5': { en: 'Model answer libraries', ar: 'مكتبات إجابات نموذجية' },
  'home.marquee.phrase.6': { en: 'Read twice, write once', ar: 'اقرا مرتين، اكتب مرة' },
  'home.marquee.phrase.7': { en: 'Timed, not rushed', ar: 'بتوقيت، مو على عجل' },

  // PathwayCardsSection
  'home.path.h2': { en: 'Choose Your Path', ar: 'اختر مسارك' },
  'home.path.lead': {
    en: 'Structured learning pathways designed for every stage of your English journey.',
    ar: 'مسارات تعلّم منظّمة لكل مرحلة من رحلتك بالإنجليزي.',
  },
  'home.path.card.ks3_title': { en: 'KS3 Reading & Writing', ar: 'قراءة وكتابة KS3' },
  'home.path.card.ks3_subtitle': { en: 'Years 7–9', ar: 'السنوات ٧–٩' },
  'home.path.card.ks3_desc': {
    en: 'Build your foundation with core reading comprehension, analysis, and writing skills.',
    ar: 'ابني أساسك بمهارات الفهم والتحليل والكتابة.',
  },
  'home.path.card.lang_title': { en: 'GCSE Language', ar: 'GCSE Language' },
  'home.path.card.all_boards': { en: 'All Boards', ar: 'كل البوردات' },
  'home.path.card.lang_desc': {
    en: 'Master reading analysis and writing techniques for your Language papers.',
    ar: 'أتقن تحليل القراءة وتقنيات الكتابة لأوراق Language مالتك.',
  },
  'home.path.card.lit_title': { en: 'GCSE Literature', ar: 'GCSE Literature' },
  'home.path.card.lit_desc': {
    en: 'Poetry, prose, and drama — essay technique and textual analysis for top grades.',
    ar: 'شعر ونثر ومسرح — تقنية المقال والتحليل النصّي للدرجات العليا.',
  },
  'home.path.card.revision_title': { en: 'Revision & Exam Prep', ar: 'مراجعة وتحضير امتحان' },
  'home.path.card.revision_subtitle': { en: 'Exam-Ready', ar: 'جاهز للامتحان' },
  'home.path.card.revision_desc': {
    en: 'Intensive revision courses to boost your grade in weeks, not months.',
    ar: 'كورسات مراجعة مكثّفة ترفع درجتك بأسابيع، مو بشهور.',
  },

  // FeatureHighlightsSection
  'home.features.h2': { en: 'Why Students Love Us', ar: 'ليش الطلاب يحبّوننا' },
  'home.features.lead': {
    en: 'Everything you need to go from uncertain to unstoppable.',
    ar: 'كل اللي تحتاجه لتنتقل من متردّد لمتفوّق.',
  },
  'home.features.expert_title': { en: 'Expert-Written Content', ar: 'محتوى من خبراء' },
  'home.features.expert_desc': {
    en: 'Written by English teachers and markers who know exactly what gets top marks.',
    ar: 'مكتوب من معلمين ومصحّحين يعرفون بالضبط شنو يجيب درجات عالية.',
  },
  'home.features.cert_title': { en: 'Certificate on Completion', ar: 'شهادة عند الإكمال' },
  'home.features.cert_desc': {
    en: 'Earn a verifiable digital certificate for every course you complete. Share it with pride.',
    ar: 'احصل على شهادة رقمية موثّقة لكل كورس تكمله. شاركها بفخر.',
  },
  'home.features.top_title': { en: 'Built for Top Grades', ar: 'مصمّم للدرجات العليا' },
  'home.features.top_desc': {
    en: 'Clear explanations, a structured approach, and exam-focused content aligned to the AO rubric.',
    ar: 'شروحات واضحة ومنهج منظّم ومحتوى يركّز على الامتحان ومحاذي لمعيار AO.',
  },
  'home.features.library_title': { en: 'Full Course Library', ar: 'مكتبة كورسات كاملة' },
  'home.features.library_desc': {
    en: 'From KS3 Reading to GCSE and IGCSE Literature — courses for every stage of your English journey, with new content added regularly.',
    ar: 'من قراءة KS3 إلى GCSE و IGCSE Literature — كورسات لكل مرحلة من رحلتك بالإنجليزي، مع محتوى جديد بانتظام.',
  },
  'home.features.ai_title': { en: 'AI-Powered Feedback', ar: 'تغذية راجعة بالذكاء الاصطناعي' },
  'home.features.ai_desc': {
    en: 'Submit essays and get instant, expert-level feedback with grade estimates, strengths, and improvements.',
    ar: 'أرسل مقالاتك واحصل على تغذية راجعة فورية بمستوى الخبراء مع تقدير درجة ونقاط قوة وتحسينات.',
  },
  'home.features.pace_title': { en: 'Study at Your Own Pace', ar: 'ادرس على راحتك' },
  'home.features.pace_desc': {
    en: 'All content is available 24/7. Study at your own pace, on your own schedule, with no deadlines.',
    ar: 'كل المحتوى متاح ٢٤/٧. ادرس على راحتك وجدولك من غير مواعيد نهائية.',
  },
  'home.features.device_title': { en: 'Works on Any Device', ar: 'يشتغل على أي جهاز' },
  'home.features.device_desc': {
    en: 'Desktop, tablet, or mobile — your courses sync seamlessly so you can study anywhere.',
    ar: 'كمبيوتر أو تابلت أو موبايل — كورساتك تتزامن بسلاسة عشان تدرس من أي مكان.',
  },
  'home.features.cancel_title': { en: 'Cancel Anytime', ar: 'الغ في أي وقت' },
  'home.features.cancel_desc': {
    en: 'No lock-in contracts. Start with a 7-day free trial (card required) and cancel anytime — no questions asked.',
    ar: 'ما في عقود مقفّلة. ابدأ بتجربة ٧ أيام ببلاش (مع بطاقة) وألغ في أي وقت — من غير ما نسألك.',
  },

  // BentoFeatures
  'home.bento.eyebrow': { en: '01 — Contents', ar: '٠١ — المحتويات' },
  'home.bento.h2.before': { en: 'A ', ar: 'قسم إنجليزي ' },
  'home.bento.h2.emph': { en: 'complete', ar: 'كامل' },
  'home.bento.h2.after': { en: ' English department, re-shelved.', ar: '، مرتّب من جديد.' },
  'home.bento.ai_title': { en: 'AI Essay Feedback', ar: 'تغذية راجعة بالذكاء الاصطناعي' },
  'home.bento.ai_desc': {
    en: 'Submit any essay. Get grade, AO breakdown, and next-step targets in seconds.',
    ar: 'أرسل أي مقال. خذ درجة وتفصيل AO وأهداف الخطوة الجاية بثواني.',
  },
  'home.bento.ai_demo.compelling': {
    en: '"compelling" — precise vocabulary choice elevates register',
    ar: '"compelling" — اختيار مفردات دقيق يرفع المستوى',
  },
  'home.bento.ai_demo.cyclical': {
    en: '"cyclical" — structural technique impresses markers',
    ar: '"cyclical" — تقنية بنيوية تعجب المصحّحين',
  },
  'home.bento.ai_demo.grade8': { en: 'Grade 8', ar: 'Grade 8' },
  'home.bento.ladder_title': { en: 'Grade Ladder', ar: 'سلّم الدرجات' },
  'home.bento.ladder_desc': {
    en: 'Visual 1–9 progression. See exactly what separates each grade boundary.',
    ar: 'تدرّج مرئي ١–٩. شوف بالضبط شنو يفرق كل حد درجة.',
  },
  'home.bento.mocks_title': { en: 'Mock Exams', ar: 'موكات' },
  'home.bento.mocks_desc': {
    en: 'Timed papers with real grade boundaries. Auto-marked where possible.',
    ar: 'موكات بتوقيت وحدود درجات حقيقية. مصحّحة تلقائياً قدر الإمكان.',
  },
  'home.bento.mocks_count_label': { en: 'Papers available', ar: 'موكات متاحة' },
  'home.bento.annotation_title': { en: 'Annotation Studio', ar: 'استوديو التعليقات' },
  'home.bento.annotation_desc': {
    en: 'Highlight, tag, and analyse key quotes from set texts and unseen extracts.',
    ar: 'علّم وحدّد وحلّل الاقتباسات المهمة من النصوص المقرّرة والمقاطع غير المرئية.',
  },
  'home.bento.annotation_attribution': {
    en: '— Mary Shelley, Frankenstein',
    ar: '— Mary Shelley, Frankenstein',
  },
  'home.bento.games_title': { en: 'Grade Games', ar: 'ألعاب الدرجات' },
  'home.bento.games_desc': {
    en: '7 revision games that make practice feel like play. From spelling bees to quote battles.',
    ar: '٧ ألعاب مراجعة تخلّي التمرين كأنه لعب. من ألعاب الإملاء إلى معارك الاقتباسات.',
  },
  'home.bento.games.spelling_bee': { en: 'Spelling Bee', ar: 'لعبة الإملاء' },
  'home.bento.games.quote_battle': { en: 'Quote Battle', ar: 'معركة الاقتباسات' },
  'home.bento.games.word_ladder': { en: 'Word Ladder', ar: 'سلّم الكلمات' },
  'home.bento.games.vocab_sprint': { en: 'Vocab Sprint', ar: 'سباق المفردات' },
  'home.bento.games.grammar_rush': { en: 'Grammar Rush', ar: 'سرعة القواعد' },
  'home.bento.games.ao_snap': { en: 'AO Snap', ar: 'AO Snap' },
  'home.bento.games.lit_bingo': { en: 'Lit Bingo', ar: 'بنغو الأدب' },
  'home.bento.boards_title': { en: 'Exam Board Hub', ar: 'مركز البوردات' },
  'home.bento.boards_desc': {
    en: 'Every spec, every AO, every grade descriptor — organised by your board.',
    ar: 'كل مواصفة وكل AO وكل وصف درجة — منظّمة حسب بوردك.',
  },

  // AnthologyHero
  'home.anth_hero.meta_brand': {
    en: 'The English Hub · Anthology Edition',
    ar: 'The English Hub · إصدار المختارات',
  },
  'home.anth_hero.meta_vol': { en: 'Vol. I — Spring MMXXVI', ar: 'المجلد الأول — ربيع MMXXVI' },
  'home.anth_hero.meta_stats': { en: '15 pathways · 470 lessons', ar: '١٥ مسار · ٤٧٠ درس' },
  'home.anth_hero.eyebrow': {
    en: 'An anthology for English · 2026',
    ar: 'مختارات للإنجليزي · ٢٠٢٦',
  },
  'home.anth_hero.h1.read': { en: 'Read close.', ar: 'اقرا بدقة.' },
  'home.anth_hero.h1.write': { en: 'Write', ar: 'اكتب' },
  'home.anth_hero.h1.bold': { en: 'bold.', ar: 'بجرأة.' },
  'home.anth_hero.h1.land': { en: 'Land the', ar: 'احصل على' },
  'home.anth_hero.dek': {
    en: 'Structured courses, AI essay feedback, mock exams, and revision tools — all mapped to your exam board. One platform, every grade.',
    ar: 'كورسات منظّمة وتغذية راجعة بالذكاء الاصطناعي وموكات وأدوات مراجعة — كلها معايرة على بوردك. منصة واحدة لكل درجة.',
  },
  'home.anth_hero.cta_start': { en: 'Start free — no card →', ar: 'ابدأ ببلاش — من غير بطاقة ←' },
  'home.anth_hero.cta_demo': { en: 'Try the demo', ar: 'جرّب الديمو' },
  'home.anth_hero.chip.ai_label': {
    en: 'AI Essay Feedback',
    ar: 'تغذية راجعة بالذكاء الاصطناعي',
  },
  'home.anth_hero.chip.ai_detail': { en: 'Instant grade + targets', ar: 'درجة + أهداف فورية' },
  'home.anth_hero.chip.poems_label': { en: '30 Poems Deep-Dived', ar: '٣٠ قصيدة بتحليل عميق' },
  'home.anth_hero.chip.poems_detail': { en: 'Annotation & analysis', ar: 'تعليق وتحليل' },
  'home.anth_hero.chip.mocks_label': { en: '130+ Mock Exams', ar: 'أكثر من ١٣٠ موك' },
  'home.anth_hero.chip.mocks_detail': { en: 'Timed & auto-marked', ar: 'بتوقيت وتصحيح تلقائي' },
  'home.anth_hero.chip.ladder_label': { en: 'Grade Ladder', ar: 'سلّم الدرجات' },
  'home.anth_hero.chip.ladder_detail': { en: '1–9 revision paths', ar: 'مسارات مراجعة ١–٩' },
  'home.anth_hero.chip.games_label': { en: '7 GCSE Games', ar: '٧ ألعاب GCSE' },
  'home.anth_hero.chip.games_detail': { en: 'Learn through play', ar: 'تعلّم باللعب' },

  // AnthologyTestimonials + TestimonialsSection
  'home.anth_testimonials.h2': { en: "What they're saying.", ar: 'شنو يقولون.' },
  'home.testimonials.h2': { en: 'What Our Students Say', ar: 'شنو يقولون طلابنا' },
  'home.testimonials.sophie.quote': {
    en: 'I went from a Grade 4 to a 7 in six months. The structured courses and model answers made everything click.',
    ar: 'انتقلت من Grade 4 إلى 7 خلال ست شهور. الكورسات المنظّمة والإجابات النموذجية خلّت كل شي يتضح.',
  },
  'home.testimonials.sophie.name': { en: 'Sophie T.', ar: 'Sophie T.' },
  'home.testimonials.sophie.role': { en: 'Year 11 — AQA', ar: 'السنة ١١ — AQA' },
  'home.testimonials.mark.quote': {
    en: "My daughter's confidence has completely changed. She actually wants to revise now and her mock results have gone up two grades.",
    ar: 'ثقة بنتي تغيّرت تماماً. صارت تبغى تراجع، وموكاتها ارتفعت درجتين.',
  },
  'home.testimonials.mark.name': { en: 'Mark H.', ar: 'Mark H.' },
  'home.testimonials.mark.role': { en: 'Parent', ar: 'ولي أمر' },
  'home.testimonials.james.quote': {
    en: 'The AI essay feedback is like having a tutor available 24/7. It spotted weaknesses my teacher missed.',
    ar: 'التغذية الراجعة بالذكاء الاصطناعي كأنها مدرّس متاح ٢٤/٧. اكتشفت نقاط ضعف فاتت معلّمي.',
  },
  'home.testimonials.james.name': { en: 'James R.', ar: 'James R.' },
  'home.testimonials.james.role': { en: 'Year 11 — Edexcel', ar: 'السنة ١١ — Edexcel' },
  'home.testimonials.patterson.quote': {
    en: 'As a Head of English, the analytics dashboard alone saves me hours each week. We can track every student across all year groups.',
    ar: 'كرئيسة قسم إنجليزي، لوحة التحليلات وحدها توفّر علي ساعات كل أسبوع. نقدر نتابع كل طالب في كل سنة.',
  },
  'home.testimonials.patterson.name': { en: 'Mrs Patterson', ar: 'Mrs Patterson' },
  'home.testimonials.patterson.role': { en: 'Head of English', ar: 'رئيسة قسم إنجليزي' },
  'home.testimonials.priya.quote': {
    en: 'The mock exams with grade boundaries are exactly like the real thing. I felt so prepared walking into my actual exam.',
    ar: 'الموكات بحدود الدرجات مطابقة للحقيقي. حسّيت بجاهزية كاملة قبل امتحاني الفعلي.',
  },
  'home.testimonials.priya.name': { en: 'Priya K.', ar: 'Priya K.' },
  'home.testimonials.priya.role': { en: 'Year 11 — OCR', ar: 'السنة ١١ — OCR' },
  'home.testimonials.davies.quote': {
    en: 'Finally an English resource that covers all the boards properly. The lesson builder has halved my planning time.',
    ar: 'أخيراً مصدر إنجليزي يغطي كل البوردات صح. باني الدروس قلّل وقت التخطيط للنص.',
  },
  'home.testimonials.davies.name': { en: 'Mr Davies', ar: 'Mr Davies' },
  'home.testimonials.davies.role': { en: 'English Teacher', ar: 'معلّم إنجليزي' },
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
  // Master dictionary first; fall through to the toolkit-namespaced
  // supplement (./dictionary-toolkit.ts) so /toolkit/* tool-page keys
  // resolve without bloating the main dictionary surface. Master wins
  // on collision — by convention toolkit keys live under the
  // tools.*, quiz_build.*, lesson_build.*, grade_predict.*, essay_check.*
  // namespaces so collisions shouldn't arise.
  // CRITICAL ORDERING (fixed 2026-05-16): ALL hand-written override
  // dictionaries MUST resolve BEFORE the auto-generated
  // AUDIT_FIX_DICTIONARY. That file holds ~1,554 lazy placeholder values
  // (Title-cased path segments like "Heading", "Name", "Desc", "Lead").
  // Previously PLACEHOLDER_FIX_MAY15 and SCREENSHOT_FIX_DICTIONARY were
  // listed AFTER AUDIT_FIX_DICTIONARY, so their real copy for ~80
  // affiliate keys + 94 screenshot keys was permanently SHADOWED by
  // junk — that is why /affiliate and /affiliates rendered placeholder
  // text. Override precedence among the curated files is kept stable;
  // only their position relative to AUDIT_FIX changed.
  const entry =
    DICTIONARY[key] ??
    TOOLKIT_DICTIONARY[key] ??
    SCHOOL_COMP_DICTIONARY[key] ??
    LEGAL_LONG_DICTIONARY[key] ??
    DASH_INTERNAL_DICTIONARY[key] ??
    DEMO_PAGES_DICTIONARY[key] ??
    POETRY_HUB_DICTIONARY[key] ??
    HOMEPAGE_DICTIONARY[key] ??
    // Curated bilingual /affiliates copy. Same tier as HOMEPAGE_DICTIONARY
    // (curated overrides), placed BEFORE every placeholder/audit supplement
    // so its genuine Khaleeji Arabic wins over the English-mirror
    // REPORT_FIX_MAY16B / PLACEHOLDER_FIX_* and the junk AUDIT_FIX values.
    AFF_PUBLIC_DICTIONARY[key] ??
    // Bucket-A curated Khaleeji — Tier-1 public surfaces (press, about,
    // accessibility, footer, exam-boards, free-resources, sitemap,
    // redeem, join-school, brand, billing, resources, a-level,
    // affiliate portal). Same curated-override tier — BEFORE every
    // placeholder/audit supplement so genuine Arabic wins over the
    // EN-mirror / junk-Ollama values these keys had.
    TRUST_DICTIONARY[key] ??
    PUBLIC_A_DICTIONARY[key] ??
    CONVERT_DICTIONARY[key] ??
    RESOURCES_A_DICTIONARY[key] ??
    RESOURCES_B_DICTIONARY[key] ??
    MISC_T1_DICTIONARY[key] ??
    // Bucket-A Tier-2a curated Khaleeji — authed school + parent
    // dashboards. PARENT_1 before PARENT_2 so the one shared key
    // (parent.linked_child) resolves deterministically to PARENT_1.
    SCHOOL_1_DICTIONARY[key] ??
    SCHOOL_2_DICTIONARY[key] ??
    PARENT_1_DICTIONARY[key] ??
    PARENT_2_DICTIONARY[key] ??
    // Bucket A Tier-2b — curated EN+AR for affiliate portal/components,
    // teacher dashboard, analytics/marking/games, and the residual
    // school.* gap. Curated tier: precedes all placeholder/junk fixes.
    SCHOOL_3_DICTIONARY[key] ??
    AFF_PORTAL_DICTIONARY[key] ??
    AFF_COMP_DICTIONARY[key] ??
    TEACHER_DICTIONARY[key] ??
    AMG_DICTIONARY[key] ??
    // Bucket B Phase B1 — instrumented shell + hub/index pages for the
    // /ks3, /revision and /resources content families (curated EN +
    // Khaleeji AR). Precedes all placeholder/audit supplements so the
    // genuine Arabic wins over any junk/placeholder entry.
    B1_KS3_DICTIONARY[key] ??
    B1_REVISION_DICTIONARY[key] ??
    B1_RESOURCES_DICTIONARY[key] ??
    // Bucket B Phase B1.5 — curated EN + Khaleeji AR for app-surface
    // product-UI pages: /marking + /school, /dashboard + /toolkit, and
    // /demo. Curated tier: precedes all placeholder/audit supplements so
    // genuine Arabic wins over any junk entry.
    B15_MARKING_SCHOOL_DICTIONARY[key] ??
    B15_DASHBOARD_DICTIONARY[key] ??
    B15_DEMO_DICTIONARY[key] ??
    // EU AI Act user-facing copy (Art 13/14/50) — curated tier.
    AI_ACT_DICTIONARY[key] ??
    PRESS_AND_VERIFIED_FIX[key] ??
    PLACEHOLDER_FIX_MAY16[key] ??
    PLACEHOLDER_FIX_MAY15[key] ??
    SCREENSHOT_FIX_DICTIONARY[key] ??
    REPORT_FIX_MAY16B[key] ??
    AUDIT_FIX_DICTIONARY[key]
  if (!entry) return `[[${key}]]`
  if (locale === 'ar' && entry.ar) return entry.ar
  return entry.en
}
