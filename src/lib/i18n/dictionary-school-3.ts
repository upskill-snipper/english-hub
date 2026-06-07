/**
 * dictionary-school-3.ts - Bucket-A Tier-2b, school.* RESIDUAL gap-fill.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * `dictionary-school-1.ts` curated the FIRST alphabetical half of the
 * school.* namespace (… through `school.assignments.status.closed`) and
 * `dictionary-school-2.ts` curated the SECOND half (from
 * `school.calendar.class` onward). The two agents chose slightly
 * different alphabetical split points, leaving a ~25-key band of
 * `school.analytics.*` (the NRR cohorts + movements sub-pages) and four
 * early `school.calendar.*` keys with NO curated owner - they still
 * resolved only against AUDIT_FIX_DICTIONARY, whose EN is an auto-
 * generated Title-cased path fragment ("Title", "Subtitle", "Heatmap
 * Title", "Add Lesson", "Net", "Month") and whose AR is broken machine
 * output (mojibake / Latin shards / mixed scripts). In Arabic mode this
 * band rendered English or garbage.
 *
 * SCOPE - RESIDUAL ONLY (20 keys), provably exclusive of every curated
 * dictionary (school-1, school-2, dictionary.ts, school-comp,
 * screenshot-fixes) and of the other parallel agents' namespaces:
 *   - school.analytics.cohorts.*   → /school/analytics/nrr/cohorts
 *   - school.analytics.movements.* → /school/analytics/nrr/movements
 *   - school.calendar.{add_lesson,all_boards,all_classes,cancel}
 *
 * USED filter applied: every key below is referenced by literal `t()`
 * in src/app/school/**. Five audit-fix keys in the same alphabetical
 * band (school.analytics.avg_score_suffix, .based_on_prefix,
 * .stat.active_students_sub, .stat.at_risk_sub, .stat.during_prefix)
 * are DEAD - referenced nowhere in src/app/school/** or src/components
 * (literal or key-constant indirection) - so they are deliberately
 * EXCLUDED. All 7 school.* keys in dictionary-screenshot-fixes.ts have
 * ar !== en (already translated) and are likewise out of scope.
 *
 * EN: no real-EN source exists for any of these (audit-fix junk only),
 * so every value is authored fresh from the exact rendering position in:
 *   - src/app/school/analytics/nrr/cohorts/page.tsx
 *   - src/app/school/analytics/nrr/movements/page.tsx
 *   - src/app/school/calendar/page.tsx
 * The NRR cohorts/movements pages are the investor-facing revenue
 * dashboard; the calendar keys are the teacher revision-planner dialog
 * and exam-board/class filter dropdowns.
 *
 * AR: genuine Khaleeji (Gulf SaaS-dashboard register), voice of
 * src/lib/eal/curriculum.ts and the curated school-1/school-2 dicts -
 * not MSA boilerplate, not machine output. Finance/exam terms kept
 * accurate (NRR, MRR, cohort = مجموعة, retention = الاحتفاظ, churn,
 * waterfall = الشلال). Brand/product/exam nouns stay Latin per Gulf
 * convention (The English Hub, NRR, MRR, GCSE, CSV). Masculine 2nd
 * person, matching the action.* and tools.* style in dictionary.ts.
 *
 * Data-only: merged by dictionary.ts → lookup() in the curated-override
 * tier BEFORE AUDIT_FIX. Wiring lives in dictionary.ts (not edited here).
 */

export const SCHOOL_3_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── School · Analytics · NRR · Cohort retention ────────────────────
  // /school/analytics/nrr/cohorts - investor cohort-retention page:
  // page title/subtitle, a 4-tile "Month N retention" summary row
  // (month_prefix + age + retention_suffix, then avg_all_cohorts as the
  // sub-line), the full cohort heatmap card, and a "how to read it"
  // explainer card.
  'school.analytics.cohorts.title': {
    en: 'Cohort retention',
    ar: 'الاحتفاظ حسب المجموعة',
    es: 'Retención por cohorte',
  },
  'school.analytics.cohorts.subtitle': {
    en: 'How much revenue each signup cohort keeps as it ages',
    ar: 'كم إيراد تحتفظ فيه كل مجموعة اشتراك مع مرور الوقت',
    es: 'Cuántos ingresos conserva cada cohorte de alta a medida que pasa el tiempo',
  },
  'school.analytics.cohorts.month_prefix': {
    en: 'Month',
    ar: 'الشهر',
    es: 'Mes',
  },
  'school.analytics.cohorts.retention_suffix': {
    en: 'retention',
    ar: 'احتفاظ',
    es: 'retención',
  },
  'school.analytics.cohorts.avg_all_cohorts': {
    en: 'Average across all cohorts',
    ar: 'المتوسّط على كل المجموعات',
    es: 'Media de todas las cohortes',
  },
  'school.analytics.cohorts.heatmap_title': {
    en: 'Retention heatmap',
    ar: 'الخريطة الحرارية للاحتفاظ',
    es: 'Mapa de calor de retención',
  },
  'school.analytics.cohorts.heatmap_subtitle': {
    en: 'Each row is a signup cohort; each column is its revenue retained that many months on.',
    ar: 'كل صف مجموعة اشتراك، وكل عمود يبيّن الإيراد المحتفَظ فيه بعد ذاك العدد من الشهور.',
    es: 'Cada fila es una cohorte de alta; cada columna muestra los ingresos retenidos tantos meses después.',
  },
  'school.analytics.cohorts.how_to_read': {
    en: 'How to read this',
    ar: 'كيف تقرأ هذا',
    es: 'Cómo leer esto',
  },

  // ─── School · Analytics · NRR · Revenue movements ───────────────────
  // /school/analytics/nrr/movements - investor MRR-movements page:
  // page title/subtitle, an MRR waterfall card (waterfall_title +
  // subtitle, with a month picker), and a month-by-month movement
  // tracker table (tracker_title + subtitle; columns: Month … Net).
  'school.analytics.movements.title': {
    en: 'Revenue movements',
    ar: 'حركات الإيراد',
    es: 'Movimientos de ingresos',
  },
  'school.analytics.movements.subtitle': {
    en: 'New, expansion, contraction and churn that drive monthly MRR',
    ar: 'الجديد والتوسّع والانكماش والفقد اللي تحرّك الـ MRR الشهري',
    es: 'Altas, expansión, contracción y bajas que impulsan el MRR mensual',
  },
  'school.analytics.movements.waterfall_title': {
    en: 'MRR waterfall',
    ar: 'شلال الـ MRR',
    es: 'Cascada de MRR',
  },
  'school.analytics.movements.waterfall_subtitle': {
    en: 'How the selected month moved from opening to closing MRR',
    ar: 'كيف تحرّك الشهر المحدّد من MRR البداية لـ MRR النهاية',
    es: 'Cómo evolucionó el mes seleccionado del MRR inicial al MRR final',
  },
  'school.analytics.movements.tracker_title': {
    en: 'Movement tracker',
    ar: 'متتبّع الحركات',
    es: 'Seguimiento de movimientos',
  },
  'school.analytics.movements.tracker_subtitle': {
    en: 'Every revenue movement, month by month - click a row to see its waterfall.',
    ar: 'كل حركة إيراد، شهر بشهر - اضغط على أي صف عشان تشوف الشلال مالته.',
    es: 'Cada movimiento de ingresos, mes a mes: haz clic en una fila para ver su cascada.',
  },
  'school.analytics.movements.col.month': {
    en: 'Month',
    ar: 'الشهر',
    es: 'Mes',
  },
  'school.analytics.movements.col.net': {
    en: 'Net',
    ar: 'الصافي',
    es: 'Neto',
  },

  // ─── School · Revision Calendar (/school/calendar) ──────────────────
  // Early school.calendar.* keys not owned by school-2 (which starts at
  // school.calendar.class): the exam-board / class filter "All …"
  // options, and the add-lesson dialog (title + submit button reuse the
  // same key; plus its Cancel button).
  'school.calendar.all_boards': {
    en: 'All boards',
    ar: 'كل اللجان',
    es: 'Todas las juntas',
  },
  'school.calendar.all_classes': {
    en: 'All classes',
    ar: 'كل الصفوف',
    es: 'Todas las clases',
  },
  'school.calendar.add_lesson': {
    en: 'Add lesson',
    ar: 'إضافة درس',
    es: 'Añadir clase',
  },
  'school.calendar.cancel': {
    en: 'Cancel',
    ar: 'إلغاء',
    es: 'Cancelar',
  },
}
