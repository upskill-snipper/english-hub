/**
 * dictionary-admin-ai-marking.ts - platform-admin AI-marking surfaces.
 *
 * Curated EN + Khaleeji (Gulf) AR for the four admin pages:
 *   /admin/ai-marking, /admin/model-performance,
 *   /admin/prompt-management, /admin/rubric-management.
 *
 * These are internal site-admin screens (not student/parent facing) so the
 * Arabic is a faithful, plain Gulf rendering of the operational terms;
 * technical tokens (AO, QWK, EU AI Act, Art. 15, prompt, rubric, hash,
 * exam-board names) stay in Latin script per the house convention.
 */
export const ADMIN_AI_MARKING_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── shared ───────────────────────────────────────────────────────────────
  'admin.aim.back_to_admin': { en: 'Back to admin', ar: 'رجوع للوحة الأدمن' },
  'admin.aim.refresh': { en: 'Refresh', ar: 'تحديث' },
  'admin.aim.loading': { en: 'Loading…', ar: 'لحظة…' },
  'admin.aim.error_load': { en: 'Could not load this data.', ar: 'ما قدرنا نحمّل البيانات.' },
  'admin.aim.empty_generic': { en: 'No data yet.', ar: 'ما في بيانات للحين.' },
  'admin.aim.store_unavailable': {
    en: 'The marking store is not available yet - showing an empty state.',
    ar: 'مخزن التصحيح مو متوفّر للحين - نعرض حالة فاضية.',
  },

  // ─── /admin/ai-marking (overview) ─────────────────────────────────────────
  'admin.aim.ov.title': { en: 'AI Marking', ar: 'تصحيح AI' },
  'admin.aim.ov.subtitle': {
    en: 'Teacher-in-the-loop marking - submissions, model performance and versioning.',
    ar: 'تصحيح بإشراف المعلّم - التسليمات وأداء النموذج وإدارة الإصدارات.',
  },
  'admin.aim.ov.stat.total': { en: 'Submissions', ar: 'التسليمات' },
  'admin.aim.ov.stat.reviewed': { en: 'Teacher-reviewed', ar: 'مراجَعة من المعلّم' },
  'admin.aim.ov.stat.awaiting': { en: 'Awaiting review', ar: 'بانتظار المراجعة' },
  'admin.aim.ov.stat.approved': { en: 'Approved', ar: 'معتمدة' },
  'admin.aim.ov.by_status': { en: 'By status', ar: 'حسب الحالة' },
  'admin.aim.ov.recent': { en: 'Recent submissions', ar: 'أحدث التسليمات' },
  'admin.aim.ov.col.id': { en: 'ID', ar: 'المعرّف' },
  'admin.aim.ov.col.board': { en: 'Board', ar: 'البورد' },
  'admin.aim.ov.col.type': { en: 'Question type', ar: 'نوع السؤال' },
  'admin.aim.ov.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.aim.ov.col.ai_score': { en: 'AI score', ar: 'درجة AI' },
  'admin.aim.ov.col.submitted': { en: 'Submitted', ar: 'تاريخ التسليم' },
  'admin.aim.ov.links': { en: 'Manage', ar: 'الإدارة' },
  'admin.aim.ov.link.performance': { en: 'Model performance', ar: 'أداء النموذج' },
  'admin.aim.ov.link.evals': { en: 'Eval scorecard', ar: 'بطاقة التقييم' },
  'admin.aim.ov.link.prompts': { en: 'Prompt management', ar: 'إدارة البرومبت' },
  'admin.aim.ov.link.rubrics': { en: 'Rubric versions', ar: 'إصدارات الروبرِك' },

  // ─── /admin/model-performance ─────────────────────────────────────────────
  'admin.aim.mp.title': { en: 'Model Performance', ar: 'أداء النموذج' },
  'admin.aim.mp.subtitle': {
    en: 'Live AI-vs-teacher agreement, computed from reviewed submissions.',
    ar: 'توافق AI مع المعلّم، محسوب من التسليمات المراجَعة.',
  },
  'admin.aim.mp.stat.submissions': { en: 'Submissions', ar: 'التسليمات' },
  'admin.aim.mp.stat.reviewed': { en: 'Reviewed', ar: 'مراجَعة' },
  'admin.aim.mp.stat.scored_pairs': { en: 'Scored pairs', ar: 'أزواج مُقيَّمة' },
  'admin.aim.mp.score_accuracy': { en: 'Score accuracy', ar: 'دقّة الدرجات' },
  'admin.aim.mp.mae': { en: 'Mean abs. error', ar: 'متوسط الخطأ المطلق' },
  'admin.aim.mp.exact': { en: 'Exact match', ar: 'تطابق تام' },
  'admin.aim.mp.within1': { en: 'Within 1 mark', ar: 'ضمن درجة وحدة' },
  'admin.aim.mp.within2': { en: 'Within 2 marks', ar: 'ضمن درجتين' },
  'admin.aim.mp.override_rate': { en: 'Teacher override rate', ar: 'نسبة تعديل المعلّم' },
  'admin.aim.mp.feedback_edit_rate': { en: 'Feedback edit rate', ar: 'نسبة تعديل الملاحظات' },
  'admin.aim.mp.by_board': { en: 'Accuracy by exam board', ar: 'الدقّة حسب البورد' },
  'admin.aim.mp.by_qtype': { en: 'Accuracy by question type', ar: 'الدقّة حسب نوع السؤال' },
  'admin.aim.mp.by_band': { en: 'Accuracy by grade band', ar: 'الدقّة حسب فئة الدرجة' },
  'admin.aim.mp.decisions': { en: 'Moderation decisions', ar: 'قرارات المراجعة' },
  'admin.aim.mp.top_reasons': { en: 'Top adjustment reasons', ar: 'أبرز أسباب التعديل' },
  'admin.aim.mp.confidence': { en: 'AI-confidence reliability', ar: 'موثوقية ثقة AI' },
  'admin.aim.mp.col.slice': { en: 'Slice', ar: 'الشريحة' },
  'admin.aim.mp.col.n': { en: 'n', ar: 'العدد' },
  'admin.aim.mp.col.bucket': { en: 'Confidence', ar: 'الثقة' },
  'admin.aim.mp.col.count': { en: 'Count', ar: 'العدد' },
  'admin.aim.mp.col.reason': { en: 'Reason', ar: 'السبب' },
  'admin.aim.mp.empty': {
    en: 'No reviewed submissions yet - metrics will populate once teachers moderate AI marks.',
    ar: 'ما في تسليمات مراجَعة للحين - المقاييس بتظهر أول ما يراجع المعلّمون درجات AI.',
  },

  // ─── /admin (eval scorecard, surfaced on model-performance) ───────────────
  'admin.aim.ev.title': { en: 'Eval Scorecard', ar: 'بطاقة التقييم' },
  'admin.aim.ev.subtitle': {
    en: 'Offline Art. 15 ratchet thresholds vs in-field deltas.',
    ar: 'حدود Art. 15 المرجعية مقابل فروقات الميدان.',
  },
  'admin.aim.ev.not_certified': {
    en: 'NOT a certified accuracy result',
    ar: 'مو نتيجة دقّة معتمَدة',
  },
  'admin.aim.ev.col.metric': { en: 'Threshold', ar: 'الحدّ' },
  'admin.aim.ev.col.bar': { en: 'Required', ar: 'المطلوب' },
  'admin.aim.ev.col.field': { en: 'In-field proxy', ar: 'مؤشّر الميدان' },
  'admin.aim.ev.col.value': { en: 'Current', ar: 'الحالي' },
  'admin.aim.ev.na': { en: 'n/a', ar: 'غير متاح' },
  'admin.aim.ev.thresholds': { en: 'Ratchet thresholds', ar: 'الحدود المرجعية' },
  'admin.aim.ev.source': { en: 'Source', ar: 'المصدر' },

  // ─── /admin/prompt-management ─────────────────────────────────────────────
  'admin.aim.pm.title': { en: 'Prompt Management', ar: 'إدارة البرومبت' },
  'admin.aim.pm.subtitle': {
    en: 'Versioned, stored marking prompts - improvable over time.',
    ar: 'برومبتات تصحيح مُؤرشَفة بإصدارات - قابلة للتحسين مع الوقت.',
  },
  'admin.aim.pm.new_version': { en: 'New prompt version', ar: 'إصدار برومبت جديد' },
  'admin.aim.pm.f.prompt_key': { en: 'Prompt key', ar: 'مفتاح البرومبت' },
  'admin.aim.pm.f.subject': { en: 'Subject (optional)', ar: 'المادة (اختياري)' },
  'admin.aim.pm.f.exam_board': { en: 'Exam board (optional)', ar: 'البورد (اختياري)' },
  'admin.aim.pm.f.question_type': { en: 'Question type (optional)', ar: 'نوع السؤال (اختياري)' },
  'admin.aim.pm.f.prompt_text': { en: 'Prompt text', ar: 'نص البرومبت' },
  'admin.aim.pm.f.activate': { en: 'Activate on save', ar: 'فعّله عند الحفظ' },
  'admin.aim.pm.save': { en: 'Create version', ar: 'إنشاء إصدار' },
  'admin.aim.pm.saving': { en: 'Saving…', ar: 'يحفظ…' },
  'admin.aim.pm.saved': { en: 'Prompt version created.', ar: 'تم إنشاء إصدار البرومبت.' },
  'admin.aim.pm.save_failed': {
    en: 'Could not save the prompt version.',
    ar: 'ما قدرنا نحفظ الإصدار.',
  },
  'admin.aim.pm.required': {
    en: 'Prompt key and text are required.',
    ar: 'مفتاح البرومبت والنص مطلوبين.',
  },
  'admin.aim.pm.list': { en: 'Prompt versions', ar: 'إصدارات البرومبت' },
  'admin.aim.pm.col.key': { en: 'Key', ar: 'المفتاح' },
  'admin.aim.pm.col.scope': { en: 'Scope', ar: 'النطاق' },
  'admin.aim.pm.col.hash': { en: 'Hash', ar: 'الهاش' },
  'admin.aim.pm.col.active': { en: 'Active', ar: 'فعّال' },
  'admin.aim.pm.col.created': { en: 'Created', ar: 'أُنشئ' },
  'admin.aim.pm.col.action': { en: 'Action', ar: 'إجراء' },
  'admin.aim.pm.set_active': { en: 'Set active', ar: 'فعّله' },
  'admin.aim.pm.is_active': { en: 'Active', ar: 'فعّال' },
  'admin.aim.pm.inactive': { en: 'Inactive', ar: 'غير فعّال' },
  'admin.aim.pm.empty': {
    en: 'No prompt versions yet. Create the first one above.',
    ar: 'ما في إصدارات برومبت. أنشئ أول واحد فوق.',
  },

  // ─── /admin/rubric-management ─────────────────────────────────────────────
  'admin.aim.rm.title': { en: 'Rubric Versions', ar: 'إصدارات الروبرِك' },
  'admin.aim.rm.subtitle': {
    en: 'Read-only - content-hash pointers to the in-code mark schemes.',
    ar: 'للقراءة فقط - مؤشّرات هاش لمخططات الدرجات داخل الكود.',
  },
  'admin.aim.rm.col.scheme': { en: 'Mark scheme', ar: 'مخطط الدرجات' },
  'admin.aim.rm.col.version': { en: 'Version', ar: 'الإصدار' },
  'admin.aim.rm.col.board': { en: 'Board', ar: 'البورد' },
  'admin.aim.rm.col.qual': { en: 'Qualification', ar: 'المؤهل' },
  'admin.aim.rm.col.hash': { en: 'Content hash', ar: 'هاش المحتوى' },
  'admin.aim.rm.col.active': { en: 'Active', ar: 'فعّال' },
  'admin.aim.rm.col.created': { en: 'Created', ar: 'أُنشئ' },
  'admin.aim.rm.empty': {
    en: 'No rubric versions yet.',
    ar: 'ما في إصدارات روبرِك للحين.',
  },

  // ─── /admin/training-data (WS-3) ───────────────────────────────────
  'admin.training.title': { en: 'Training data', ar: 'بيانات التدريب' },
  'admin.training.subtitle': {
    en: 'Approved, anonymised records ready for fine-tuning',
    ar: 'السجلات المعتمدة والمجهّلة الجاهزة للضبط الدقيق',
  },
  'admin.training.stat.total': { en: 'Total records', ar: 'إجمالي السجلات' },
  'admin.training.stat.eligible': { en: 'Eligible to prepare', ar: 'مؤهّلة للتحضير' },
  'admin.training.by_board': { en: 'By board', ar: 'حسب البورد' },
  'admin.training.actions.title': { en: 'Actions', ar: 'إجراءات' },
  'admin.training.actions.desc': {
    en: 'Prepare approved, eligible records not yet exported.',
    ar: 'حضّر السجلات المعتمدة والمؤهّلة اللي ما انحضّرت بعد.',
  },
  'admin.training.actions.prepare': { en: 'Prepare eligible', ar: 'حضّر المؤهّلة' },
  'admin.training.recent': { en: 'Recent records', ar: 'أحدث السجلات' },
  'admin.training.empty': { en: 'No training data yet.', ar: 'ما في بيانات تدريب للحين.' },
  'admin.training.col.anon_id': { en: 'Anon ID', ar: 'المعرّف المجهّل' },
  'admin.training.col.board': { en: 'Board', ar: 'البورد' },
  'admin.training.col.paper': { en: 'Paper', ar: 'الورقة' },
  'admin.training.col.qtype': { en: 'Question type', ar: 'نوع السؤال' },
  'admin.training.col.source': { en: 'Source', ar: 'المصدر' },
  'admin.training.col.ai': { en: 'AI mark', ar: 'درجة AI' },
  'admin.training.col.teacher': { en: 'Teacher mark', ar: 'درجة المعلّم' },
  'admin.training.col.delta': { en: 'Delta', ar: 'الفرق' },
  'admin.training.col.created': { en: 'Created', ar: 'أُنشئ' },
  'admin.training.export.jsonl': { en: 'Export JSONL', ar: 'تصدير JSONL' },
  'admin.training.export.csv': { en: 'Export CSV', ar: 'تصدير CSV' },
  'admin.training.export.eval': { en: 'Export eval set', ar: 'تصدير مجموعة التقييم' },
}
