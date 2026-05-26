/**
 * dictionary-teacher.ts - Bucket A Tier-2b, `teacher.*` namespace.
 *
 * Covers the authed TEACHER dashboard i18n namespace - the
 * `teacher.home.*`, `teacher.layout.*`, `teacher.nav.*`,
 * `teacher.analytics.*`, `teacher.assignments.*`, `teacher.students.*`
 * and `teacher.resources.*` keys consumed by:
 *   - src/app/dashboard/teacher/page.tsx                       (home)
 *   - src/app/dashboard/teacher/layout.tsx                     (shell + nav)
 *   - src/app/dashboard/teacher/analytics/AnalyticsPageClient.tsx
 *   - src/app/dashboard/teacher/assignments/page.tsx
 *   - src/app/dashboard/teacher/students/page.tsx
 *   - src/app/dashboard/teacher/resources/page.tsx
 *
 * Before this file every one of these keys resolved ONLY via the
 * auto-generated dictionary-audit-fix.ts, whose entries are lazy
 * path-fragment placeholders ("Title", "Subtitle", "Heading", "Lead")
 * paired with broken machine Arabic - so the AR-mode teacher dashboard
 * rendered English junk / mojibake. The `teacher.nav.*`,
 * `teacher.analytics.skill.*` and `teacher.analytics.concern.*` keys
 * (referenced via `labelKey` / `skillKey` / `concernKey` indirection)
 * existed in NO dictionary at all and rendered as [[…]] placeholders.
 *
 * EN here is authored from the actual rendering position in the
 * components above (teacher-SaaS dashboard register), NOT copied from
 * the audit-fix junk. Arabic is genuine Khaleeji (Gulf) matching the
 * teacher/admin tone of src/lib/eal/curriculum.ts - not MSA, not
 * machine output. Education/exam terms (GCSE, IGCSE, AO1-AO4, AQA,
 * OCR, Edexcel, CIE, AFOREST) and the brand "The English Hub" stay in
 * Latin script per Gulf convention.
 *
 * Distinct from the `school.*` namespace (dictionary-school-1/2) and
 * the curated `teacher.dash.*` / `teacher.resource.*` keys already in
 * dictionary.ts - those are NOT duplicated here.
 *
 * Merged into the master lookup() in ./dictionary.ts as a curated
 * override tier (BEFORE the placeholder/audit supplements).
 */

import type { Dictionary } from './dictionary'

export const TEACHER_DICTIONARY: Dictionary = {
  // ── Shell / layout (src/app/dashboard/teacher/layout.tsx) ──────────────
  'teacher.layout.loading': { en: `Loading your dashboard…`, ar: `نحمّل لوحتك… لحظة` },
  'teacher.layout.access_denied': { en: `Teacher access only`, ar: `الدخول للمعلّمين بس` },
  'teacher.layout.access_denied_body': {
    en: `This area is reserved for teacher and school accounts.`,
    ar: `هذي المنطقة مخصّصة لحسابات المعلّمين والمدارس بس.`,
  },
  'teacher.layout.access_denied_note': {
    en: `If you teach with us, register a teacher account or switch back to your student dashboard.`,
    ar: `إذا تدرّس معانا، سجّل حساب معلّم أو ارجع للوحة الطالب حقّتك.`,
  },
  'teacher.layout.go_student_dash': { en: `Go to student dashboard`, ar: `روح للوحة الطالب` },
  'teacher.layout.register_teacher': { en: `Register as a teacher`, ar: `سجّل كمعلّم` },
  'teacher.layout.brand': { en: `Teacher Hub`, ar: `لوحة المعلّم` },
  'teacher.layout.close_sidebar': { en: `Close menu`, ar: `سكّر القائمة` },
  'teacher.layout.open_sidebar': { en: `Open menu`, ar: `افتح القائمة` },
  'teacher.layout.back_student_view': {
    en: `Back to student view`,
    ar: `ارجع لعرض الطالب`,
  },
  'teacher.layout.topbar_title': { en: `Teacher Dashboard`, ar: `لوحة المعلّم` },
  'teacher.layout.preview_title': {
    en: `Teacher tools - preview`,
    ar: `أدوات المعلّم - نسخة تجريبية`,
  },
  'teacher.layout.preview_body_before': {
    en: `You're previewing the teacher dashboard with sample data. For early access with your real classes, get in touch at `,
    ar: `أنت تشوف لوحة المعلّم ببيانات تجريبية. للوصول المبكّر مع صفوفك الحقيقية، تواصل معنا على `,
  },
  'teacher.layout.preview_body_after': {
    en: ` and we'll set you up.`,
    ar: ` وإحنا نجهّزك.`,
  },

  // ── Sidebar nav (layout.tsx - referenced via item.labelKey) ────────────
  'teacher.nav.dashboard': { en: `Dashboard`, ar: `اللوحة` },
  'teacher.nav.students': { en: `Students`, ar: `الطلاب` },
  'teacher.nav.assignments': { en: `Assignments`, ar: `الواجبات` },
  'teacher.nav.analytics': { en: `Analytics`, ar: `التحليلات` },
  'teacher.nav.resources': { en: `Resources`, ar: `الموارد` },

  // ── Home (src/app/dashboard/teacher/page.tsx) ──────────────────────────
  'teacher.home.welcome_prefix': { en: `Welcome back, `, ar: `حيّاك، ` },
  'teacher.home.welcome_suffix': { en: ``, ar: `` },
  'teacher.home.intro': {
    en: `Here's how your classes are doing this week.`,
    ar: `هذا وضع صفوفك هذا الأسبوع.`,
  },
  'teacher.home.stat.total_students': { en: `Total students`, ar: `مجموع الطلاب` },
  'teacher.home.stat.active_week': { en: `Active this week`, ar: `نشطين هذا الأسبوع` },
  'teacher.home.grade_prefix': { en: `Grade`, ar: `الدرجة` },
  'teacher.home.stat.avg_grade': { en: `Average class grade`, ar: `متوسّط درجة الصف` },
  'teacher.home.stat.submissions_week': {
    en: `Submissions this week`,
    ar: `التسليمات هذا الأسبوع`,
  },
  'teacher.home.action.view_student_work': { en: `View student work`, ar: `شوف شغل الطلاب` },
  'teacher.home.action.assign_tasks': { en: `Assign tasks`, ar: `وزّع مهام` },
  'teacher.home.action.create_assessment': { en: `Create assessment`, ar: `أنشئ تقييم` },
  'teacher.home.action.view_analytics': { en: `View analytics`, ar: `شوف التحليلات` },
  'teacher.home.recent_submissions': { en: `Recent submissions`, ar: `آخر التسليمات` },
  'teacher.home.view_all': { en: `View all`, ar: `شوف الكل` },
  'teacher.home.status.graded': { en: `Graded`, ar: `مصحّح` },
  'teacher.home.status.pending': { en: `Pending`, ar: `قيد التصحيح` },
  'teacher.home.student_activity': { en: `Student activity`, ar: `نشاط الطلاب` },
  'teacher.home.col.student': { en: `Student`, ar: `الطالب` },
  'teacher.home.activity.none': { en: `No activity`, ar: `ما في نشاط` },
  'teacher.home.activity.low': { en: `Low activity`, ar: `نشاط قليل` },
  'teacher.home.activity.medium': { en: `Moderate activity`, ar: `نشاط متوسّط` },
  'teacher.home.activity.high': { en: `High activity`, ar: `نشاط عالي` },
  'teacher.home.legend.less': { en: `Less`, ar: `أقل` },
  'teacher.home.legend.more': { en: `More`, ar: `أكثر` },

  // ── Analytics (analytics/AnalyticsPageClient.tsx) ──────────────────────
  'teacher.analytics.title': { en: `Class Analytics`, ar: `تحليلات الصف` },
  'teacher.analytics.subtitle': {
    en: `Track progress, spot trends, and find students who need support.`,
    ar: `تابع التقدّم، اكتشف الاتجاهات، ولقّط الطلاب اللي يبغون دعم.`,
  },
  'teacher.analytics.export_soon': {
    en: `Export is coming soon - analytics download isn't available yet.`,
    ar: `التصدير قريب - تنزيل التحليلات لسّا ما هو متاح.`,
  },
  'teacher.analytics.export': { en: `Export`, ar: `تصدير` },
  'teacher.analytics.scores_over_time': { en: `Scores over time`, ar: `الدرجات عبر الوقت` },
  'teacher.analytics.scores_caption': {
    en: `Average class grade by week, last 8 weeks.`,
    ar: `متوسّط درجة الصف لكل أسبوع، آخر 8 أسابيع.`,
  },
  'teacher.analytics.skill_breakdown': { en: `Skill breakdown`, ar: `تفصيل المهارات` },
  'teacher.analytics.skill_caption': {
    en: `Average performance across key writing skills.`,
    ar: `متوسّط الأداء في مهارات الكتابة الأساسية.`,
  },
  'teacher.analytics.skill.structure': { en: `Structure`, ar: `البناء` },
  'teacher.analytics.skill.language': { en: `Language`, ar: `اللغة` },
  'teacher.analytics.skill.grammar': { en: `Grammar`, ar: `القواعد` },
  'teacher.analytics.skill.analysis': { en: `Analysis`, ar: `التحليل` },
  'teacher.analytics.skill.creative': { en: `Creative writing`, ar: `الكتابة الإبداعية` },
  'teacher.analytics.skill.exam': { en: `Exam technique`, ar: `أسلوب الامتحان` },
  'teacher.analytics.at_risk_title': { en: `Students needing support`, ar: `طلاب يحتاجون دعم` },
  'teacher.analytics.all_ok': {
    en: `No students flagged - everyone's on track.`,
    ar: `ما في طلاب محتاجين انتباه - الكل ماشي زين.`,
  },
  'teacher.analytics.trend.declining': { en: `Declining`, ar: `ينزل` },
  'teacher.analytics.trend.stagnant': { en: `Stalled`, ar: `واقف` },
  'teacher.analytics.concern.drop': {
    en: `Grades have dropped over the last few assignments.`,
    ar: `الدرجات نزلت في آخر كم واجب.`,
  },
  'teacher.analytics.concern.below': {
    en: `Consistently working below target grade.`,
    ar: `يشتغل دايم تحت الدرجة المستهدفة.`,
  },
  'teacher.analytics.concern.missed': {
    en: `Missed several recent submissions.`,
    ar: `فاتته كم تسليم أخير.`,
  },
  'teacher.analytics.grade_prefix': { en: `Grade`, ar: `الدرجة` },
  'teacher.analytics.working_at': { en: `Working at`, ar: `يشتغل على` },
  'teacher.analytics.view_profile': { en: `View profile`, ar: `شوف الملف` },
  'teacher.analytics.summary': { en: `Term summary`, ar: `ملخّص الفصل` },
  'teacher.analytics.total_students': { en: `Total students`, ar: `مجموع الطلاب` },
  'teacher.analytics.score_improvement': { en: `Average improvement`, ar: `متوسّط التحسّن` },
  'teacher.analytics.need_support': { en: `Need support`, ar: `يحتاجون دعم` },

  // ── Assignments (assignments/page.tsx) ─────────────────────────────────
  'teacher.assignments.title': { en: `Assignments`, ar: `الواجبات` },
  'teacher.assignments.subtitle': {
    en: `Set tasks, track submissions, and give feedback.`,
    ar: `حدّد المهام، تابع التسليمات، وأعطِ ملاحظات.`,
  },
  'teacher.assignments.new': { en: `New assignment`, ar: `واجب جديد` },
  'teacher.assignments.filter.all': { en: `All`, ar: `الكل` },
  'teacher.assignments.status.active': { en: `Active`, ar: `نشط` },
  'teacher.assignments.status.closed': { en: `Closed`, ar: `مقفول` },
  'teacher.assignments.status.draft': { en: `Draft`, ar: `مسوّدة` },
  'teacher.assignments.empty': {
    en: `No assignments here yet.`,
    ar: `ما في واجبات هني بعد.`,
  },
  'teacher.assignments.due': { en: `Due`, ar: `آخر موعد` },
  'teacher.assignments.submitted': { en: `Submitted`, ar: `سلّموا` },
  'teacher.assignments.graded': { en: `Graded`, ar: `مصحّح` },
  'teacher.assignments.action.view_submissions': { en: `View submissions`, ar: `شوف التسليمات` },
  'teacher.assignments.action.bulk_feedback': { en: `Bulk feedback`, ar: `ملاحظات جماعية` },
  'teacher.assignments.action.publish': { en: `Publish`, ar: `انشر` },
  'teacher.assignments.action.edit': { en: `Edit`, ar: `تعديل` },
  'teacher.assignments.create.title': { en: `New assignment`, ar: `واجب جديد` },
  'teacher.assignments.create.close': { en: `Close`, ar: `سكّر` },
  'teacher.assignments.create.label.title': { en: `Title`, ar: `العنوان` },
  'teacher.assignments.create.placeholder.title': {
    en: `e.g. An Inspector Calls: Responsibility`,
    ar: `مثال: An Inspector Calls: المسؤولية`,
  },
  'teacher.assignments.create.label.prompt': { en: `Task prompt`, ar: `نص المهمة` },
  'teacher.assignments.create.placeholder.prompt': {
    en: `Write the essay question or task instructions for students…`,
    ar: `اكتب سؤال المقال أو تعليمات المهمة للطلاب…`,
  },
  'teacher.assignments.create.label.subject': { en: `Subject`, ar: `المادة` },
  'teacher.assignments.create.label.group': { en: `Class group`, ar: `مجموعة الصف` },
  'teacher.assignments.create.label.deadline': { en: `Deadline`, ar: `آخر موعد` },
  'teacher.assignments.create.cancel': { en: `Cancel`, ar: `إلغاء` },
  'teacher.assignments.create.submit': { en: `Create assignment`, ar: `أنشئ الواجب` },

  // ── Students (students/page.tsx) ───────────────────────────────────────
  'teacher.students.title': { en: `Students`, ar: `الطلاب` },
  'teacher.students.subtitle': {
    en: `Track each student's progress and recent work.`,
    ar: `تابع تقدّم كل طالب وشغله الأخير.`,
  },
  'teacher.students.add_student': { en: `Add student`, ar: `أضف طالب` },
  'teacher.students.search_placeholder': {
    en: `Search by name or email…`,
    ar: `دوّر بالاسم أو الإيميل…`,
  },
  'teacher.students.empty': {
    en: `No students match your search.`,
    ar: `ما في طلاب يطابقون بحثك.`,
  },
  'teacher.students.col.essays': { en: `Essays`, ar: `المقالات` },
  'teacher.students.grade_prefix': { en: `Grade`, ar: `الدرجة` },
  'teacher.students.col.working_at': { en: `Working at`, ar: `يشتغل على` },
  'teacher.students.col.trend': { en: `Trend`, ar: `الاتجاه` },
  'teacher.students.last_active': { en: `Last active`, ar: `آخر نشاط` },
  'teacher.students.recent_essays': { en: `Recent essays`, ar: `آخر المقالات` },
  'teacher.students.view_profile': { en: `View profile`, ar: `شوف الملف` },
  'teacher.students.send_message': { en: `Send message`, ar: `أرسل رسالة` },
  'teacher.students.add_modal.title': { en: `Add a student`, ar: `أضف طالب` },
  'teacher.students.add_modal.close': { en: `Close`, ar: `سكّر` },
  'teacher.students.add_modal.help': {
    en: `Enter the student's email and pick a class - we'll send them an invite.`,
    ar: `حُطّ إيميل الطالب واختر صف - وإحنا نرسل له دعوة.`,
  },
  'teacher.students.add_modal.input_placeholder': {
    en: `Student email address`,
    ar: `إيميل الطالب`,
  },
  'teacher.students.add_modal.cancel': { en: `Cancel`, ar: `إلغاء` },
  'teacher.students.add_modal.submit': { en: `Send invite`, ar: `أرسل الدعوة` },

  // ── Resources (resources/page.tsx) ─────────────────────────────────────
  'teacher.resources.title': { en: `Teaching Resources`, ar: `موارد التدريس` },
  'teacher.resources.subtitle': {
    en: `Ready-to-use lesson plans, assessment guides, and printable worksheets.`,
    ar: `خطط دروس جاهزة، أدلّة تقييم، وأوراق عمل قابلة للطباعة.`,
  },
  'teacher.resources.section.lesson_plans': { en: `Lesson plans`, ar: `خطط الدروس` },
  'teacher.resources.section.assessment': { en: `Assessment guides`, ar: `أدلّة التقييم` },
  'teacher.resources.section.exam_board': {
    en: `Exam board resources`,
    ar: `موارد لجان الامتحانات`,
  },
  'teacher.resources.section.worksheets': { en: `Worksheets`, ar: `أوراق العمل` },
  'teacher.resources.download_pdf': { en: `Download PDF`, ar: `نزّل PDF` },
  'teacher.resources.view_details': { en: `View details`, ar: `شوف التفاصيل` },
}
