/**
 * dictionary-school-1.ts - Bucket A Tier-2, school.* namespace (PART 1 of 2).
 *
 * Covers the FIRST alphabetical half of the authed school-dashboard i18n
 * namespace: `school.analytics.*` and `school.assignments.*`.
 * (Part 2 - `dictionary-school-2.ts` - picks up from `school.calendar.*`.)
 *
 * These keys previously resolved only via `dictionary-audit-fix.ts`, whose
 * entries are path-fragment placeholders ("Title", "Subtitle", "Heading",
 * "Lead") paired with broken machine Arabic. EN here is authored from the
 * actual rendering position in:
 *   - src/app/school/analytics/page.tsx
 *   - src/app/school/analytics/nrr/page.tsx
 *   - src/app/school/assignments/page.tsx
 *   - src/app/school/assignments/create/page.tsx
 *   - src/app/school/assignments/[assignmentId]/page.tsx
 *
 * Arabic is genuine Khaleeji (Gulf register) matching the teacher/admin SaaS
 * dashboard tone of src/lib/eal/curriculum.ts - not MSA, not machine output.
 * Education/exam terms (GCSE, mock, cohort, NRR) kept accurate.
 *
 * Screenshot-fixes keys whose AR is already a real translation
 * (school.analytics.nrr.back_to_dashboard, school.analytics.nrr.export_investors,
 *  school.assignments.action.cancel, school.assignments.back,
 *  school.assignments.create_cta, school.assignments.status.active,
 *  school.assignments.status.draft) are intentionally OMITTED - they are
 *  already correctly localised in dictionary-screenshot-fixes.ts.
 */

export const SCHOOL_1_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── school.analytics - overview page ────────────────────────────────────
  'school.analytics.title': { en: 'Analytics', ar: 'التحليلات' },
  'school.analytics.subtitle': {
    en: 'School-wide performance, engagement and attainment at a glance',
    ar: 'أداء المدرسة كامل والتفاعل والتحصيل بنظرة وحدة',
  },
  'school.analytics.revenue_nrr': { en: 'Revenue & NRR', ar: 'الإيرادات و NRR' },

  // KPI tiles
  'school.analytics.stat.active_students': { en: 'Active students', ar: 'الطلبة النشطين' },
  'school.analytics.stat.assignments_submitted': {
    en: 'Assignments submitted',
    ar: 'الواجبات المسلَّمة',
  },
  'school.analytics.stat.avg_working_grade': {
    en: 'Average working grade',
    ar: 'متوسط الدرجة الحالية',
  },
  'school.analytics.stat.at_risk_students': {
    en: 'At-risk students',
    ar: 'الطلبة المعرّضين للخطر',
  },
  'school.analytics.grade_prefix': { en: 'Grade', ar: 'الدرجة' },

  // Date range selector
  'school.analytics.range.week': { en: 'This week', ar: 'هذا الأسبوع' },
  'school.analytics.range.month': { en: 'This month', ar: 'هذا الشهر' },
  'school.analytics.range.term': { en: 'This term', ar: 'هذا الفصل' },
  'school.analytics.range.year': { en: 'This year', ar: 'هذه السنة' },

  // Year-group performance panel
  'school.analytics.year_group.title': { en: 'Year group performance', ar: 'أداء الصفوف الدراسية' },
  'school.analytics.year_group.subtitle': {
    en: 'Average progress and attainment by year group',
    ar: 'متوسط التقدّم والتحصيل حسب الصف الدراسي',
  },
  'school.analytics.col.year_group': { en: 'Year group', ar: 'الصف الدراسي' },
  'school.analytics.col.students': { en: 'Students', ar: 'الطلبة' },
  'school.analytics.col.avg_working_at': { en: 'Working at', ar: 'المستوى الحالي' },
  'school.analytics.col.avg_progress': { en: 'Average progress', ar: 'متوسط التقدّم' },
  'school.analytics.col.assignments': { en: 'Assignments', ar: 'الواجبات' },
  'school.analytics.col.at_risk': { en: 'At risk', ar: 'معرّضين للخطر' },

  // At-risk students panel
  'school.analytics.at_risk.title': { en: 'Students needing attention', ar: 'طلبة يحتاجون متابعة' },
  'school.analytics.at_risk.subtitle': {
    en: 'Students flagged for low engagement or attainment',
    ar: 'طلبة منبَّه عليهم بسبب ضعف التفاعل أو التحصيل',
  },
  'school.analytics.at_risk.none': {
    en: 'No students currently flagged - nice work.',
    ar: 'ما فيه طلبة منبَّه عليهم حاليًا - شغل زين.',
  },
  'school.analytics.col.name': { en: 'Name', ar: 'الاسم' },
  'school.analytics.col.year': { en: 'Year', ar: 'السنة' },
  'school.analytics.col.last_active': { en: 'Last active', ar: 'آخر نشاط' },
  'school.analytics.col.issue': { en: 'Issue', ar: 'الملاحظة' },
  'school.analytics.col.action': { en: 'Action', ar: 'الإجراء' },
  'school.analytics.email_teacher': { en: 'Email teacher', ar: 'راسل المعلّم' },

  // Top classes panel
  'school.analytics.top_classes.title': { en: 'Top performing classes', ar: 'أفضل الفصول أداءً' },
  'school.analytics.top_classes.subtitle': {
    en: 'Ranked by average score this period',
    ar: 'مرتّبة حسب متوسط الدرجة في هذه الفترة',
  },
  'school.analytics.students_suffix': { en: 'students', ar: 'طالب' },

  // Resource usage panel
  'school.analytics.resource_usage.title': { en: 'Resource usage', ar: 'استخدام الموارد' },
  'school.analytics.resource_usage.subtitle': {
    en: 'Most-used lessons and mock exams',
    ar: 'أكثر الدروس والاختبارات التجريبية استخدامًا',
  },
  'school.analytics.top_lessons': { en: 'Top lessons', ar: 'أكثر الدروس' },
  'school.analytics.top_mocks': { en: 'Top mock exams', ar: 'أكثر الاختبارات التجريبية' },

  // Assignment overview panel
  'school.analytics.assignment_overview.title': {
    en: 'Assignment overview',
    ar: 'نظرة عامة على الواجبات',
  },
  'school.analytics.assignment_overview.subtitle': {
    en: 'Completion and overdue work by class',
    ar: 'الإنجاز والواجبات المتأخّرة حسب الفصل',
  },
  'school.analytics.col.class': { en: 'Class', ar: 'الفصل' },
  'school.analytics.col.teacher': { en: 'Teacher', ar: 'المعلّم' },
  'school.analytics.col.completion_rate': { en: 'Completion rate', ar: 'نسبة الإنجاز' },
  'school.analytics.col.overdue': { en: 'Overdue', ar: 'متأخّر' },
  'school.analytics.overdue_suffix': { en: 'overdue', ar: 'متأخّر' },
  'school.analytics.none': { en: 'None', ar: 'ولا واحد' },

  // Export buttons
  'school.analytics.export_excel': { en: 'Export to Excel', ar: 'تصدير إلى Excel' },
  'school.analytics.export_pdf': { en: 'Export to PDF', ar: 'تصدير إلى PDF' },

  // ─── school.analytics.nrr - investor NRR dashboard ───────────────────────
  'school.analytics.back_to_analytics': { en: 'Back to analytics', ar: 'رجوع للتحليلات' },
  'school.analytics.nrr.title': { en: 'Net revenue retention', ar: 'صافي الاحتفاظ بالإيرادات' },
  'school.analytics.nrr.subtitle': {
    en: 'Expansion, contraction and churn over the trailing 24 months',
    ar: 'التوسّع والانكماش والفقد على مدى الـ 24 شهرًا الماضية',
  },
  'school.analytics.nrr.cohort_heatmap': { en: 'Cohort heatmap', ar: 'خريطة حرارية للمجموعات' },
  'school.analytics.nrr.movements': { en: 'Movements', ar: 'الحركات' },
  'school.analytics.nrr.trend_title': { en: 'NRR trend', ar: 'اتجاه NRR' },
  'school.analytics.nrr.trend_subtitle': {
    en: 'Monthly NRR vs. the 100% target line',
    ar: 'NRR الشهري مقارنة بخط الهدف 100%',
  },
  'school.analytics.nrr.expansion': { en: 'Expansion', ar: 'التوسّع' },
  'school.analytics.nrr.expansion_sub': {
    en: 'Upsell and seat growth',
    ar: 'الترقية وزيادة المقاعد',
  },
  'school.analytics.nrr.upgrades': { en: 'Upgrades', ar: 'الترقيات' },
  'school.analytics.nrr.contraction': { en: 'Contraction', ar: 'الانكماش' },
  'school.analytics.nrr.contraction_sub': {
    en: 'Downgrades and reduced seats',
    ar: 'التخفيضات وتقليل المقاعد',
  },
  'school.analytics.nrr.downgrades': { en: 'Downgrades', ar: 'التخفيضات' },
  'school.analytics.nrr.churn': { en: 'Churn', ar: 'الفقد' },
  'school.analytics.nrr.churn_sub': {
    en: 'Cancelled subscriptions',
    ar: 'الاشتراكات الملغاة',
  },
  'school.analytics.nrr.churned_mrr': { en: 'Churned MRR', ar: 'MRR المفقود' },
  'school.analytics.nrr.cohort_retention': {
    en: 'Cohort retention',
    ar: 'الاحتفاظ حسب المجموعة',
  },
  'school.analytics.nrr.cohort_retention_sub': {
    en: 'Revenue retained by signup cohort',
    ar: 'الإيراد المحتفَظ به حسب مجموعة الاشتراك',
  },
  'school.analytics.nrr.full_heatmap': { en: 'Full heatmap', ar: 'الخريطة الحرارية كاملة' },

  // ─── school.assignments - listing page ───────────────────────────────────
  'school.assignments.title': { en: 'Assignments', ar: 'الواجبات' },
  'school.assignments.active_singular': { en: 'active', ar: 'واجب نشط' },
  'school.assignments.active_plural': { en: 'active', ar: 'واجبات نشطة' },
  'school.assignments.overall_completion': { en: 'overall completion', ar: 'نسبة الإنجاز العامة' },
  'school.assignments.new': { en: 'New assignment', ar: 'واجب جديد' },
  'school.assignments.search_placeholder': {
    en: 'Search assignments…',
    ar: 'دوّر على الواجبات…',
  },
  'school.assignments.tab.active': { en: 'Active', ar: 'النشطة' },
  'school.assignments.tab.drafts': { en: 'Drafts', ar: 'المسودّات' },
  'school.assignments.tab.closed': { en: 'Closed', ar: 'المغلقة' },
  'school.assignments.tab.all': { en: 'All', ar: 'الكل' },
  'school.assignments.empty.no_match': {
    en: 'No matching assignments',
    ar: 'ما فيه واجبات مطابقة',
  },
  'school.assignments.empty.none_yet': { en: 'No assignments yet', ar: 'ما فيه واجبات بعد' },
  'school.assignments.empty.search_hint': {
    en: 'Try a different search term.',
    ar: 'جرّب كلمة بحث ثانية.',
  },
  'school.assignments.empty.create_hint': {
    en: 'Create your first assignment to get started.',
    ar: 'سوِّ أول واجب لك عشان تبدأ.',
  },

  // Create page
  'school.assignments.create.title': { en: 'Create assignment', ar: 'إنشاء واجب' },
  'school.assignments.create.subtitle': {
    en: 'Set work for a class and track submissions',
    ar: 'حدّد واجب لفصل وتابع التسليمات',
  },
  'school.assignments.create.form_title': { en: 'Assignment details', ar: 'تفاصيل الواجب' },
  'school.assignments.create.form_subtitle': {
    en: 'Fill in the details below to set this assignment',
    ar: 'عبّي التفاصيل تحت عشان تحدّد هذا الواجب',
  },
  'school.assignments.field.title': { en: 'Title', ar: 'العنوان' },
  'school.assignments.field.title_placeholder': {
    en: 'e.g. Macbeth essay - Act 1 analysis',
    ar: 'مثال: مقال ماكبث - تحليل الفصل الأول',
  },
  'school.assignments.field.instructions': { en: 'Instructions', ar: 'التعليمات' },
  'school.assignments.field.instructions_placeholder': {
    en: 'What should students do? Add any guidance or success criteria.',
    ar: 'وش المطلوب من الطلبة؟ ضيف أي إرشادات أو معايير نجاح.',
  },
  'school.assignments.field.class': { en: 'Class', ar: 'الفصل' },
  'school.assignments.field.class_placeholder': { en: 'Select a class', ar: 'اختر فصل' },
  'school.assignments.field.type': { en: 'Type', ar: 'النوع' },
  'school.assignments.field.type_placeholder': { en: 'Select a type', ar: 'اختر نوع' },
  'school.assignments.field.linked_resource': { en: 'Linked resource', ar: 'مورد مرتبط' },
  'school.assignments.field.linked_resource_placeholder': {
    en: 'Select a resource (optional)',
    ar: 'اختر مورد (اختياري)',
  },
  'school.assignments.field.linked_resource_hint': {
    en: 'Students will be taken straight to this resource.',
    ar: 'الطلبة بيوصلون مباشرة لهذا المورد.',
  },
  'school.assignments.field.due_date': { en: 'Due date', ar: 'تاريخ التسليم' },
  'school.assignments.field.status': { en: 'Status', ar: 'الحالة' },
  'school.assignments.field.status_hint': {
    en: 'Drafts are hidden from students until set to active.',
    ar: 'المسودّات مخفية عن الطلبة لين تصير نشطة.',
  },
  'school.assignments.action.creating': { en: 'Creating…', ar: 'يجري الإنشاء…' },

  // Detail page - not found / header
  'school.assignments.not_found.title': { en: 'Assignment not found', ar: 'الواجب غير موجود' },
  'school.assignments.not_found.body': {
    en: 'This assignment may have been deleted or the link is incorrect.',
    ar: 'يمكن هذا الواجب انحذف أو الرابط غلط.',
  },
  'school.assignments.badge.overdue': { en: 'Overdue', ar: 'متأخّر' },
  'school.assignments.resource_linked': { en: 'Resource linked', ar: 'مورد مرتبط' },

  // Detail page - stats
  'school.assignments.stat.students': { en: 'Students', ar: 'الطلبة' },
  'school.assignments.stat.submitted': { en: 'Submitted', ar: 'مُسلَّم' },
  'school.assignments.stat.avg_score': { en: 'Average score', ar: 'متوسط الدرجة' },
  'school.assignments.stat.due_date': { en: 'Due date', ar: 'تاريخ التسليم' },
  'school.assignments.range.highest': { en: 'Highest', ar: 'الأعلى' },
  'school.assignments.range.lowest': { en: 'Lowest', ar: 'الأدنى' },
  'school.assignments.range.graded': { en: 'Graded', ar: 'مُصحَّح' },

  // Detail page - submissions table
  'school.assignments.submissions.title': { en: 'Submissions', ar: 'التسليمات' },
  'school.assignments.submissions.pending': { en: 'pending', ar: 'قيد الانتظار' },
  'school.assignments.submissions.submitted': { en: 'submitted', ar: 'مُسلَّم' },
  'school.assignments.submissions.graded': { en: 'graded', ar: 'مُصحَّح' },
  'school.assignments.col.student': { en: 'Student', ar: 'الطالب' },
  'school.assignments.col.status': { en: 'Status', ar: 'الحالة' },
  'school.assignments.col.submitted': { en: 'Submitted', ar: 'تاريخ التسليم' },
  'school.assignments.col.score': { en: 'Score', ar: 'الدرجة' },
  'school.assignments.col.feedback': { en: 'Feedback', ar: 'الملاحظات' },
  'school.assignments.col.actions': { en: 'Actions', ar: 'الإجراءات' },
  'school.assignments.grade.placeholder': { en: '0-100', ar: '0-100' },
  'school.assignments.feedback.placeholder': {
    en: 'Add feedback for this student…',
    ar: 'ضيف ملاحظات لهذا الطالب…',
  },
  'school.assignments.action.save': { en: 'Save', ar: 'حفظ' },
  'school.assignments.action.mark_submitted': { en: 'Mark submitted', ar: 'علِّمه مُسلَّم' },
  'school.assignments.action.grade': { en: 'Grade', ar: 'صحِّح' },
  'school.assignments.action.edit_grade': { en: 'Edit grade', ar: 'تعديل الدرجة' },
  'school.assignments.no_students': {
    en: 'No students assigned to this class yet.',
    ar: 'ما فيه طلبة مسجَّلين في هذا الفصل بعد.',
  },
  'school.assignments.status.closed': { en: 'Closed', ar: 'مغلق' },
}
