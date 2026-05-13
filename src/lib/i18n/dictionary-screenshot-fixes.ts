/**
 * Quick fix-up dictionary for the highest-visibility missing-key placeholders
 * surfaced by the user's /demo/school/dashboard screenshot. Lands ahead of
 * the full Ollama batch (fix_missing_keys.py) so AR-mode visitors see proper
 * Khaleeji immediately instead of [[key]] tokens.
 *
 * Imported and chained into lookup() in ./dictionary.ts.
 */

import type { Dictionary } from './dictionary'

export const SCREENSHOT_FIX_DICTIONARY: Dictionary = {
  // ─── Demo school sidebar nav ─────────────────────────────────────
  'demo_school.nav.students': { en: 'Students', ar: 'الطلاب' },
  'demo_school.nav.teachers': { en: 'Teachers', ar: 'المعلمين' },
  'demo_school.nav.classes': { en: 'Classes', ar: 'الصفوف' },
  'demo_school.nav.analytics': { en: 'Analytics', ar: 'التحليلات' },
  'demo_school.nav.reports': { en: 'Reports', ar: 'التقارير' },
  'demo_school.nav.progress': { en: 'Progress', ar: 'التقدّم' },
  'demo_school.nav.import': { en: 'Import', ar: 'الاستيراد' },
  'demo_school.nav.settings': { en: 'Settings', ar: 'الإعدادات' },
  'demo_school.nav.dashboard': { en: 'Dashboard', ar: 'اللوحة' },
  'demo_school.nav.users': { en: 'Users', ar: 'المستخدمين' },

  // ─── Analytics grade bands + units (visible in chart legend) ────
  'analytics.grade.label': { en: 'Grade', ar: 'الدرجة' },
  'analytics.grade.range_1_3': { en: 'Grade 1-3', ar: 'درجة 1-3' },
  'analytics.grade.range_4_6': { en: 'Grade 4-6', ar: 'درجة 4-6' },
  'analytics.grade.range_7_9': { en: 'Grade 7-9', ar: 'درجة 7-9' },
  'analytics.grade.achieving_7_9': { en: 'achieving Grade 7-9', ar: 'وصلوا درجة 7-9' },
  'analytics.grade.bottom': { en: 'Bottom · 1', ar: 'الأدنى · 1' },
  'analytics.grade.top_of_pass': { en: 'Top of pass · 9', ar: 'أعلى نجاح · 9' },
  'analytics.unit.students': { en: 'students', ar: 'طلاب' },
  'analytics.unit.students_total': { en: 'students total', ar: 'طالب إجمالاً' },
  'analytics.unit.attempts': { en: 'attempts', ar: 'محاولات' },
  'analytics.metric.correct': { en: 'correct', ar: 'صح' },

  // ─── /demo/school/dashboard stat cards (still hardcoded EN in page) ──
  // These render via direct JSX in src/app/demo/school/page.tsx so they
  // appear as English even in AR mode. The audit_top_n.py pipeline will
  // patch the page to consume content.ts which will then look these up.
  'demo_school.dash.avg_target': { en: 'AVG TARGET', ar: 'متوسط الهدف' },
  'demo_school.dash.aspirational_target': { en: 'Aspirational target', ar: 'الهدف الطموح' },
  'demo_school.dash.on_track': { en: 'ON TRACK', ar: 'ماشي صح' },
  'demo_school.dash.of_students': { en: 'of {n} students', ar: 'من {n} طالب' },
  'demo_school.dash.avg_predicted': { en: 'AVG PREDICTED', ar: 'متوسط المتوقع' },
  'demo_school.dash.positive_trajectory': { en: 'Positive trajectory', ar: 'اتجاه إيجابي' },
  'demo_school.dash.avg_working_at': { en: 'AVG WORKING AT', ar: 'متوسط الدرجة الحالية' },
  'demo_school.dash.current_attainment': {
    en: 'Current attainment level',
    ar: 'مستوى التحصيل الحالي',
  },
  'demo_school.dash.students_count_label': { en: 'STUDENTS', ar: 'الطلاب' },
  'demo_school.dash.across_year_groups': {
    en: 'Across {n} year groups',
    ar: 'موزّعين على {n} صفوف',
  },
  'demo_school.dash.quick_actions': { en: 'Quick Actions', ar: 'إجراءات سريعة' },
  'demo_school.dash.working_at_distribution': {
    en: 'Working At Grade Distribution',
    ar: 'توزيع الدرجة الحالية',
  },
  'demo_school.dash.top_improving_students': {
    en: 'Top Improving Students',
    ar: 'الطلاب الأكثر تحسّناً',
  },
  'demo_school.dash.classes_action': { en: 'Classes', ar: 'الصفوف' },
  'demo_school.dash.import_action': { en: 'Import', ar: 'استيراد' },
  'demo_school.dash.export_action': { en: 'Export', ar: 'تصدير' },
  'demo_school.dash.analytics_action': { en: 'Analytics', ar: 'تحليلات' },

  // ─── Parent dashboard heavily-called keys (12 from audit) ────────
  'parent.read_only_view': { en: 'Read-only view', ar: 'عرض للقراءة فقط' },
  'parent.this_week': { en: 'This week', ar: 'هذا الأسبوع' },
  'parent.time_spent': { en: 'Time spent', ar: 'الوقت المستهلك' },
  'parent.poems_studied': { en: 'Poems studied', ar: 'القصائد المدروسة' },
  'parent.avg_quiz_score': { en: 'Average quiz score', ar: 'متوسط درجة الاختبار' },
  'parent.games_played': { en: 'Games played', ar: 'الألعاب اللي لعبها' },
  'parent.something_went_wrong': { en: 'Something went wrong', ar: 'صار في خطأ' },
  'parent.email_required': { en: 'Email is required', ar: 'الإيميل مطلوب' },
  'parent.password_required': { en: 'Password is required', ar: 'الرمز السري مطلوب' },
  'parent.email_address': { en: 'Email address', ar: 'الإيميل' },
  'parent.password_label': { en: 'Password', ar: 'الرمز السري' },
  'parent.hide_password': { en: 'Hide password', ar: 'خبّي الرمز السري' },
  'parent.show_password': { en: 'Show password', ar: 'ورّي الرمز السري' },
  'parent.loading_short': { en: 'Loading…', ar: 'لحظة…' },
  'parent.password_min_length': {
    en: 'Password must be at least 8 characters',
    ar: 'الرمز السري لازم 8 أحرف على الأقل',
  },
  'parent.full_name': { en: 'Full name', ar: 'الاسم الكامل' },

  // ─── School assignments (6 from audit) ──────────────────────────
  'school.assignments.create_cta': { en: 'Create assignment', ar: 'سوِّ واجب جديد' },
  'school.assignments.back': { en: 'Back', ar: 'رجوع' },
  'school.assignments.status.draft': { en: 'Draft', ar: 'مسودة' },
  'school.assignments.status.active': { en: 'Active', ar: 'نشط' },
  'school.assignments.action.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'school.analytics.nrr.export_investors': { en: 'Export for investors', ar: 'صدِّر للمستثمرين' },
  'school.analytics.nrr.back_to_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },

  // ─── Affiliate components (3 from audit) ────────────────────────
  'aff_comp.copy': { en: 'Copy', ar: 'انسخ' },
  'aff_comp.copied': { en: 'Copied', ar: 'تم النسخ' },
  'aff_comp.calc.signups_dot': { en: 'signups', ar: 'اشتراك' },

  // ─── Download menu (from earlier wave) ──────────────────────────
  'download.menu.label': { en: 'Download', ar: 'تحميل' },
  'download.toast.started': { en: 'started', ar: 'بدا' },
  'download.toast.failed': { en: 'failed', ar: 'فشل' },
  'download.toast.dismiss': { en: 'Dismiss', ar: 'إخفاء' },
  'download.style.label': { en: 'Style', ar: 'الستايل' },
  'download.style.cream': { en: 'cream', ar: 'كريمي' },
  'download.style.dark': { en: 'dark', ar: 'داكن' },
  'download.style.whiteboard': { en: 'whiteboard', ar: 'سبورة بيضاء' },
  'download.format.label': { en: 'Format', ar: 'الصيغة' },
  'empty.default.title': { en: 'Nothing here yet', ar: 'ما في شي هني بعد' },
  'empty.default.action': { en: 'Get started', ar: 'ابدأ' },

  // ─── A-Level hub keys (7 from audit) ────────────────────────────
  'alevel.hub.badge.uk_a_level': { en: 'UK A-Level', ar: 'UK A-Level' },
  'alevel.hub.badge.lit_and_lang': { en: 'Literature & Language', ar: 'أدب ولغة' },
  'alevel.hub.h1': { en: 'A-Level English Hub', ar: 'Hub إنجليزي A-Level' },
  'alevel.hub.lead': {
    en: 'Pick your UK A-Level board below. Full board-specific guides are on our roadmap.',
    ar: 'اختر بورد A-Level مالك من تحت. الأدلة الخاصة بكل بورد بعدها على خريطة الطريق مالنا.',
  },
  'alevel.hub.choose_board_h2': { en: 'Choose your exam board', ar: 'اختر بورد امتحانك' },
  'alevel.hub.footnote': {
    en: 'Aligned with AQA, Pearson Edexcel, OCR and WJEC Eduqas A-Level specifications',
    ar: 'متوافق مع مواصفات A-Level مال AQA و Pearson Edexcel و OCR و WJEC Eduqas',
  },
  'alevel.hub.open_hub_prefix': { en: 'Open', ar: 'افتح' },
}
