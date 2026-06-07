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
export const ADMIN_AI_MARKING_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> =
  {
    // ─── shared ───────────────────────────────────────────────────────────────
    'admin.aim.back_to_admin': {
      en: 'Back to admin',
      ar: 'رجوع للوحة الأدمن',
      es: 'Volver a administración',
    },
    'admin.aim.refresh': { en: 'Refresh', ar: 'تحديث', es: 'Actualizar' },
    'admin.aim.loading': { en: 'Loading…', ar: 'لحظة…', es: 'Cargando…' },
    'admin.aim.error_load': {
      en: 'Could not load this data.',
      ar: 'ما قدرنا نحمّل البيانات.',
      es: 'No se pudieron cargar estos datos.',
    },
    'admin.aim.empty_generic': {
      en: 'No data yet.',
      ar: 'ما في بيانات للحين.',
      es: 'Aún no hay datos.',
    },
    'admin.aim.store_unavailable': {
      en: 'The marking store is not available yet - showing an empty state.',
      ar: 'مخزن التصحيح مو متوفّر للحين - نعرض حالة فاضية.',
      es: 'El almacén de correcciones aún no está disponible: se muestra un estado vacío.',
    },

    // ─── /admin/ai-marking (overview) ─────────────────────────────────────────
    'admin.aim.ov.title': { en: 'AI Marking', ar: 'تصحيح AI', es: 'Corrección con IA' },
    'admin.aim.ov.subtitle': {
      en: 'Teacher-in-the-loop marking - submissions, model performance and versioning.',
      ar: 'تصحيح بإشراف المعلّم - التسليمات وأداء النموذج وإدارة الإصدارات.',
      es: 'Corrección con supervisión del profesor: entregas, rendimiento del modelo y control de versiones.',
    },
    'admin.aim.ov.stat.total': { en: 'Submissions', ar: 'التسليمات', es: 'Entregas' },
    'admin.aim.ov.stat.reviewed': {
      en: 'Teacher-reviewed',
      ar: 'مراجَعة من المعلّم',
      es: 'Revisadas por el profesor',
    },
    'admin.aim.ov.stat.awaiting': {
      en: 'Awaiting review',
      ar: 'بانتظار المراجعة',
      es: 'Pendientes de revisión',
    },
    'admin.aim.ov.stat.approved': { en: 'Approved', ar: 'معتمدة', es: 'Aprobadas' },
    'admin.aim.ov.by_status': { en: 'By status', ar: 'حسب الحالة', es: 'Por estado' },
    'admin.aim.ov.recent': {
      en: 'Recent submissions',
      ar: 'أحدث التسليمات',
      es: 'Entregas recientes',
    },
    'admin.aim.ov.col.id': { en: 'ID', ar: 'المعرّف', es: 'ID' },
    'admin.aim.ov.col.board': { en: 'Board', ar: 'البورد', es: 'Junta' },
    'admin.aim.ov.col.type': { en: 'Question type', ar: 'نوع السؤال', es: 'Tipo de pregunta' },
    'admin.aim.ov.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
    'admin.aim.ov.col.ai_score': { en: 'AI score', ar: 'درجة AI', es: 'Puntuación de IA' },
    'admin.aim.ov.col.submitted': { en: 'Submitted', ar: 'تاريخ التسليم', es: 'Entregada' },
    'admin.aim.ov.links': { en: 'Manage', ar: 'الإدارة', es: 'Gestionar' },
    'admin.aim.ov.link.performance': {
      en: 'Model performance',
      ar: 'أداء النموذج',
      es: 'Rendimiento del modelo',
    },
    'admin.aim.ov.link.evals': {
      en: 'Eval scorecard',
      ar: 'بطاقة التقييم',
      es: 'Tarjeta de evaluación',
    },
    'admin.aim.ov.link.prompts': {
      en: 'Prompt management',
      ar: 'إدارة البرومبت',
      es: 'Gestión de prompts',
    },
    'admin.aim.ov.link.rubrics': {
      en: 'Rubric versions',
      ar: 'إصدارات الروبرِك',
      es: 'Versiones de rúbrica',
    },

    // ─── /admin/model-performance ─────────────────────────────────────────────
    'admin.aim.mp.title': {
      en: 'Model Performance',
      ar: 'أداء النموذج',
      es: 'Rendimiento del modelo',
    },
    'admin.aim.mp.subtitle': {
      en: 'Live AI-vs-teacher agreement, computed from reviewed submissions.',
      ar: 'توافق AI مع المعلّم، محسوب من التسليمات المراجَعة.',
      es: 'Concordancia en vivo entre la IA y el profesor, calculada a partir de las entregas revisadas.',
    },
    'admin.aim.mp.stat.submissions': { en: 'Submissions', ar: 'التسليمات', es: 'Entregas' },
    'admin.aim.mp.stat.reviewed': { en: 'Reviewed', ar: 'مراجَعة', es: 'Revisadas' },
    'admin.aim.mp.stat.scored_pairs': {
      en: 'Scored pairs',
      ar: 'أزواج مُقيَّمة',
      es: 'Pares puntuados',
    },
    'admin.aim.mp.score_accuracy': {
      en: 'Score accuracy',
      ar: 'دقّة الدرجات',
      es: 'Precisión de la puntuación',
    },
    'admin.aim.mp.mae': { en: 'Mean abs. error', ar: 'متوسط الخطأ المطلق', es: 'Error abs. medio' },
    'admin.aim.mp.exact': { en: 'Exact match', ar: 'تطابق تام', es: 'Coincidencia exacta' },
    'admin.aim.mp.within1': { en: 'Within 1 mark', ar: 'ضمن درجة وحدة', es: 'Dentro de 1 punto' },
    'admin.aim.mp.within2': { en: 'Within 2 marks', ar: 'ضمن درجتين', es: 'Dentro de 2 puntos' },
    'admin.aim.mp.override_rate': {
      en: 'Teacher override rate',
      ar: 'نسبة تعديل المعلّم',
      es: 'Tasa de anulación del profesor',
    },
    'admin.aim.mp.feedback_edit_rate': {
      en: 'Feedback edit rate',
      ar: 'نسبة تعديل الملاحظات',
      es: 'Tasa de edición de comentarios',
    },
    'admin.aim.mp.by_board': {
      en: 'Accuracy by exam board',
      ar: 'الدقّة حسب البورد',
      es: 'Precisión por junta examinadora',
    },
    'admin.aim.mp.by_qtype': {
      en: 'Accuracy by question type',
      ar: 'الدقّة حسب نوع السؤال',
      es: 'Precisión por tipo de pregunta',
    },
    'admin.aim.mp.by_band': {
      en: 'Accuracy by grade band',
      ar: 'الدقّة حسب فئة الدرجة',
      es: 'Precisión por banda de calificación',
    },
    'admin.aim.mp.decisions': {
      en: 'Moderation decisions',
      ar: 'قرارات المراجعة',
      es: 'Decisiones de moderación',
    },
    'admin.aim.mp.top_reasons': {
      en: 'Top adjustment reasons',
      ar: 'أبرز أسباب التعديل',
      es: 'Principales motivos de ajuste',
    },
    'admin.aim.mp.confidence': {
      en: 'AI-confidence reliability',
      ar: 'موثوقية ثقة AI',
      es: 'Fiabilidad de la confianza de la IA',
    },
    'admin.aim.mp.col.slice': { en: 'Slice', ar: 'الشريحة', es: 'Segmento' },
    'admin.aim.mp.col.n': { en: 'n', ar: 'العدد', es: 'n' },
    'admin.aim.mp.col.bucket': { en: 'Confidence', ar: 'الثقة', es: 'Confianza' },
    'admin.aim.mp.col.count': { en: 'Count', ar: 'العدد', es: 'Recuento' },
    'admin.aim.mp.col.reason': { en: 'Reason', ar: 'السبب', es: 'Motivo' },
    'admin.aim.mp.empty': {
      en: 'No reviewed submissions yet - metrics will populate once teachers moderate AI marks.',
      ar: 'ما في تسليمات مراجَعة للحين - المقاييس بتظهر أول ما يراجع المعلّمون درجات AI.',
      es: 'Aún no hay entregas revisadas: las métricas se completarán cuando los profesores moderen las calificaciones de la IA.',
    },

    // ─── /admin (eval scorecard, surfaced on model-performance) ───────────────
    'admin.aim.ev.title': {
      en: 'Eval Scorecard',
      ar: 'بطاقة التقييم',
      es: 'Tarjeta de evaluación',
    },
    'admin.aim.ev.subtitle': {
      en: 'Offline Art. 15 ratchet thresholds vs in-field deltas.',
      ar: 'حدود Art. 15 المرجعية مقابل فروقات الميدان.',
      es: 'Umbrales de referencia del Art. 15 sin conexión frente a las diferencias en campo.',
    },
    'admin.aim.ev.not_certified': {
      en: 'NOT a certified accuracy result',
      ar: 'مو نتيجة دقّة معتمَدة',
      es: 'NO es un resultado de precisión certificado',
    },
    'admin.aim.ev.col.metric': { en: 'Threshold', ar: 'الحدّ', es: 'Umbral' },
    'admin.aim.ev.col.bar': { en: 'Required', ar: 'المطلوب', es: 'Requerido' },
    'admin.aim.ev.col.field': {
      en: 'In-field proxy',
      ar: 'مؤشّر الميدان',
      es: 'Indicador en campo',
    },
    'admin.aim.ev.col.value': { en: 'Current', ar: 'الحالي', es: 'Actual' },
    'admin.aim.ev.na': { en: 'n/a', ar: 'غير متاح', es: 'n/d' },
    'admin.aim.ev.thresholds': {
      en: 'Ratchet thresholds',
      ar: 'الحدود المرجعية',
      es: 'Umbrales de referencia',
    },
    'admin.aim.ev.source': { en: 'Source', ar: 'المصدر', es: 'Fuente' },

    // ─── /admin/prompt-management ─────────────────────────────────────────────
    'admin.aim.pm.title': {
      en: 'Prompt Management',
      ar: 'إدارة البرومبت',
      es: 'Gestión de prompts',
    },
    'admin.aim.pm.subtitle': {
      en: 'Versioned, stored marking prompts - improvable over time.',
      ar: 'برومبتات تصحيح مُؤرشَفة بإصدارات - قابلة للتحسين مع الوقت.',
      es: 'Prompts de corrección almacenados y versionados, mejorables con el tiempo.',
    },
    'admin.aim.pm.new_version': {
      en: 'New prompt version',
      ar: 'إصدار برومبت جديد',
      es: 'Nueva versión del prompt',
    },
    'admin.aim.pm.f.prompt_key': { en: 'Prompt key', ar: 'مفتاح البرومبت', es: 'Clave del prompt' },
    'admin.aim.pm.f.subject': {
      en: 'Subject (optional)',
      ar: 'المادة (اختياري)',
      es: 'Asignatura (opcional)',
    },
    'admin.aim.pm.f.exam_board': {
      en: 'Exam board (optional)',
      ar: 'البورد (اختياري)',
      es: 'Junta examinadora (opcional)',
    },
    'admin.aim.pm.f.question_type': {
      en: 'Question type (optional)',
      ar: 'نوع السؤال (اختياري)',
      es: 'Tipo de pregunta (opcional)',
    },
    'admin.aim.pm.f.prompt_text': { en: 'Prompt text', ar: 'نص البرومبت', es: 'Texto del prompt' },
    'admin.aim.pm.f.activate': {
      en: 'Activate on save',
      ar: 'فعّله عند الحفظ',
      es: 'Activar al guardar',
    },
    'admin.aim.pm.save': { en: 'Create version', ar: 'إنشاء إصدار', es: 'Crear versión' },
    'admin.aim.pm.saving': { en: 'Saving…', ar: 'يحفظ…', es: 'Guardando…' },
    'admin.aim.pm.saved': {
      en: 'Prompt version created.',
      ar: 'تم إنشاء إصدار البرومبت.',
      es: 'Versión del prompt creada.',
    },
    'admin.aim.pm.save_failed': {
      en: 'Could not save the prompt version.',
      ar: 'ما قدرنا نحفظ الإصدار.',
      es: 'No se pudo guardar la versión del prompt.',
    },
    'admin.aim.pm.required': {
      en: 'Prompt key and text are required.',
      ar: 'مفتاح البرومبت والنص مطلوبين.',
      es: 'La clave del prompt y el texto son obligatorios.',
    },
    'admin.aim.pm.list': {
      en: 'Prompt versions',
      ar: 'إصدارات البرومبت',
      es: 'Versiones del prompt',
    },
    'admin.aim.pm.col.key': { en: 'Key', ar: 'المفتاح', es: 'Clave' },
    'admin.aim.pm.col.scope': { en: 'Scope', ar: 'النطاق', es: 'Ámbito' },
    'admin.aim.pm.col.hash': { en: 'Hash', ar: 'الهاش', es: 'Hash' },
    'admin.aim.pm.col.active': { en: 'Active', ar: 'فعّال', es: 'Activo' },
    'admin.aim.pm.col.created': { en: 'Created', ar: 'أُنشئ', es: 'Creado' },
    'admin.aim.pm.col.action': { en: 'Action', ar: 'إجراء', es: 'Acción' },
    'admin.aim.pm.set_active': { en: 'Set active', ar: 'فعّله', es: 'Activar' },
    'admin.aim.pm.is_active': { en: 'Active', ar: 'فعّال', es: 'Activo' },
    'admin.aim.pm.inactive': { en: 'Inactive', ar: 'غير فعّال', es: 'Inactivo' },
    'admin.aim.pm.empty': {
      en: 'No prompt versions yet. Create the first one above.',
      ar: 'ما في إصدارات برومبت. أنشئ أول واحد فوق.',
      es: 'Aún no hay versiones del prompt. Crea la primera arriba.',
    },

    // ─── /admin/rubric-management ─────────────────────────────────────────────
    'admin.aim.rm.title': {
      en: 'Rubric Versions',
      ar: 'إصدارات الروبرِك',
      es: 'Versiones de rúbrica',
    },
    'admin.aim.rm.subtitle': {
      en: 'Read-only - content-hash pointers to the in-code mark schemes.',
      ar: 'للقراءة فقط - مؤشّرات هاش لمخططات الدرجات داخل الكود.',
      es: 'Solo lectura: punteros de hash de contenido a los esquemas de corrección en el código.',
    },
    'admin.aim.rm.col.scheme': {
      en: 'Mark scheme',
      ar: 'مخطط الدرجات',
      es: 'Esquema de corrección',
    },
    'admin.aim.rm.col.version': { en: 'Version', ar: 'الإصدار', es: 'Versión' },
    'admin.aim.rm.col.board': { en: 'Board', ar: 'البورد', es: 'Junta' },
    'admin.aim.rm.col.qual': { en: 'Qualification', ar: 'المؤهل', es: 'Titulación' },
    'admin.aim.rm.col.hash': { en: 'Content hash', ar: 'هاش المحتوى', es: 'Hash de contenido' },
    'admin.aim.rm.col.active': { en: 'Active', ar: 'فعّال', es: 'Activo' },
    'admin.aim.rm.col.created': { en: 'Created', ar: 'أُنشئ', es: 'Creado' },
    'admin.aim.rm.empty': {
      en: 'No rubric versions yet.',
      ar: 'ما في إصدارات روبرِك للحين.',
      es: 'Aún no hay versiones de rúbrica.',
    },

    // ─── /admin/training-data (WS-3) ───────────────────────────────────
    'admin.training.title': {
      en: 'Training data',
      ar: 'بيانات التدريب',
      es: 'Datos de entrenamiento',
    },
    'admin.training.subtitle': {
      en: 'Approved, anonymised records ready for fine-tuning',
      ar: 'السجلات المعتمدة والمجهّلة الجاهزة للضبط الدقيق',
      es: 'Registros aprobados y anonimizados listos para el ajuste fino',
    },
    'admin.training.stat.total': {
      en: 'Total records',
      ar: 'إجمالي السجلات',
      es: 'Total de registros',
    },
    'admin.training.stat.eligible': {
      en: 'Eligible to prepare',
      ar: 'مؤهّلة للتحضير',
      es: 'Aptos para preparar',
    },
    'admin.training.by_board': { en: 'By board', ar: 'حسب البورد', es: 'Por junta' },
    'admin.training.actions.title': { en: 'Actions', ar: 'إجراءات', es: 'Acciones' },
    'admin.training.actions.desc': {
      en: 'Prepare approved, eligible records not yet exported.',
      ar: 'حضّر السجلات المعتمدة والمؤهّلة اللي ما انحضّرت بعد.',
      es: 'Prepara los registros aprobados y aptos que aún no se han exportado.',
    },
    'admin.training.actions.prepare': {
      en: 'Prepare eligible',
      ar: 'حضّر المؤهّلة',
      es: 'Preparar aptos',
    },
    'admin.training.recent': {
      en: 'Recent records',
      ar: 'أحدث السجلات',
      es: 'Registros recientes',
    },
    'admin.training.empty': {
      en: 'No training data yet.',
      ar: 'ما في بيانات تدريب للحين.',
      es: 'Aún no hay datos de entrenamiento.',
    },
    'admin.training.col.anon_id': { en: 'Anon ID', ar: 'المعرّف المجهّل', es: 'ID anónimo' },
    'admin.training.col.board': { en: 'Board', ar: 'البورد', es: 'Junta' },
    'admin.training.col.paper': { en: 'Paper', ar: 'الورقة', es: 'Examen' },
    'admin.training.col.qtype': { en: 'Question type', ar: 'نوع السؤال', es: 'Tipo de pregunta' },
    'admin.training.col.source': { en: 'Source', ar: 'المصدر', es: 'Fuente' },
    'admin.training.col.ai': { en: 'AI mark', ar: 'درجة AI', es: 'Calificación de IA' },
    'admin.training.col.teacher': {
      en: 'Teacher mark',
      ar: 'درجة المعلّم',
      es: 'Calificación del profesor',
    },
    'admin.training.col.delta': { en: 'Delta', ar: 'الفرق', es: 'Diferencia' },
    'admin.training.col.created': { en: 'Created', ar: 'أُنشئ', es: 'Creado' },
    'admin.training.export.jsonl': { en: 'Export JSONL', ar: 'تصدير JSONL', es: 'Exportar JSONL' },
    'admin.training.export.csv': { en: 'Export CSV', ar: 'تصدير CSV', es: 'Exportar CSV' },
    'admin.training.export.eval': {
      en: 'Export eval set',
      ar: 'تصدير مجموعة التقييم',
      es: 'Exportar conjunto de evaluación',
    },
  }
