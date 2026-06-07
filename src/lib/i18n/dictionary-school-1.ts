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

export const SCHOOL_1_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── school.analytics - overview page ────────────────────────────────────
  'school.analytics.title': { en: 'Analytics', ar: 'التحليلات', es: 'Analíticas' },
  'school.analytics.subtitle': {
    en: 'School-wide performance, engagement and attainment at a glance',
    ar: 'أداء المدرسة كامل والتفاعل والتحصيل بنظرة وحدة',
    es: 'Rendimiento, participación y resultados de todo el centro de un vistazo',
  },
  'school.analytics.revenue_nrr': {
    en: 'Revenue & NRR',
    ar: 'الإيرادات و NRR',
    es: 'Ingresos y NRR',
  },

  // KPI tiles
  'school.analytics.stat.active_students': {
    en: 'Active students',
    ar: 'الطلبة النشطين',
    es: 'Estudiantes activos',
  },
  'school.analytics.stat.assignments_submitted': {
    en: 'Assignments submitted',
    ar: 'الواجبات المسلَّمة',
    es: 'Tareas entregadas',
  },
  'school.analytics.stat.avg_working_grade': {
    en: 'Average working grade',
    ar: 'متوسط الدرجة الحالية',
    es: 'Nota media actual',
  },
  'school.analytics.stat.at_risk_students': {
    en: 'At-risk students',
    ar: 'الطلبة المعرّضين للخطر',
    es: 'Estudiantes en riesgo',
  },
  'school.analytics.grade_prefix': { en: 'Grade', ar: 'الدرجة', es: 'Nota' },

  // Date range selector
  'school.analytics.range.week': { en: 'This week', ar: 'هذا الأسبوع', es: 'Esta semana' },
  'school.analytics.range.month': { en: 'This month', ar: 'هذا الشهر', es: 'Este mes' },
  'school.analytics.range.term': { en: 'This term', ar: 'هذا الفصل', es: 'Este trimestre' },
  'school.analytics.range.year': { en: 'This year', ar: 'هذه السنة', es: 'Este año' },

  // Year-group performance panel
  'school.analytics.year_group.title': {
    en: 'Year group performance',
    ar: 'أداء الصفوف الدراسية',
    es: 'Rendimiento por curso',
  },
  'school.analytics.year_group.subtitle': {
    en: 'Average progress and attainment by year group',
    ar: 'متوسط التقدّم والتحصيل حسب الصف الدراسي',
    es: 'Progreso y resultados medios por curso',
  },
  'school.analytics.col.year_group': { en: 'Year group', ar: 'الصف الدراسي', es: 'Curso' },
  'school.analytics.col.students': { en: 'Students', ar: 'الطلبة', es: 'Estudiantes' },
  'school.analytics.col.avg_working_at': {
    en: 'Working at',
    ar: 'المستوى الحالي',
    es: 'Nivel actual',
  },
  'school.analytics.col.avg_progress': {
    en: 'Average progress',
    ar: 'متوسط التقدّم',
    es: 'Progreso medio',
  },
  'school.analytics.col.assignments': { en: 'Assignments', ar: 'الواجبات', es: 'Tareas' },
  'school.analytics.col.at_risk': { en: 'At risk', ar: 'معرّضين للخطر', es: 'En riesgo' },

  // At-risk students panel
  'school.analytics.at_risk.title': {
    en: 'Students needing attention',
    ar: 'طلبة يحتاجون متابعة',
    es: 'Estudiantes que necesitan atención',
  },
  'school.analytics.at_risk.subtitle': {
    en: 'Students flagged for low engagement or attainment',
    ar: 'طلبة منبَّه عليهم بسبب ضعف التفاعل أو التحصيل',
    es: 'Estudiantes señalados por baja participación o resultados',
  },
  'school.analytics.at_risk.none': {
    en: 'No students currently flagged - nice work.',
    ar: 'ما فيه طلبة منبَّه عليهم حاليًا - شغل زين.',
    es: 'Ningún estudiante señalado por ahora: buen trabajo.',
  },
  'school.analytics.col.name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'school.analytics.col.year': { en: 'Year', ar: 'السنة', es: 'Curso' },
  'school.analytics.col.last_active': { en: 'Last active', ar: 'آخر نشاط', es: 'Última actividad' },
  'school.analytics.col.issue': { en: 'Issue', ar: 'الملاحظة', es: 'Incidencia' },
  'school.analytics.col.action': { en: 'Action', ar: 'الإجراء', es: 'Acción' },
  'school.analytics.email_teacher': {
    en: 'Email teacher',
    ar: 'راسل المعلّم',
    es: 'Escribir al profesor',
  },

  // Top classes panel
  'school.analytics.top_classes.title': {
    en: 'Top performing classes',
    ar: 'أفضل الفصول أداءً',
    es: 'Clases con mejor rendimiento',
  },
  'school.analytics.top_classes.subtitle': {
    en: 'Ranked by average score this period',
    ar: 'مرتّبة حسب متوسط الدرجة في هذه الفترة',
    es: 'Ordenadas por puntuación media en este periodo',
  },
  'school.analytics.students_suffix': { en: 'students', ar: 'طالب', es: 'estudiantes' },

  // Resource usage panel
  'school.analytics.resource_usage.title': {
    en: 'Resource usage',
    ar: 'استخدام الموارد',
    es: 'Uso de recursos',
  },
  'school.analytics.resource_usage.subtitle': {
    en: 'Most-used lessons and mock exams',
    ar: 'أكثر الدروس والاختبارات التجريبية استخدامًا',
    es: 'Lecciones y exámenes de prueba más utilizados',
  },
  'school.analytics.top_lessons': {
    en: 'Top lessons',
    ar: 'أكثر الدروس',
    es: 'Lecciones principales',
  },
  'school.analytics.top_mocks': {
    en: 'Top mock exams',
    ar: 'أكثر الاختبارات التجريبية',
    es: 'Exámenes de prueba principales',
  },

  // Assignment overview panel
  'school.analytics.assignment_overview.title': {
    en: 'Assignment overview',
    ar: 'نظرة عامة على الواجبات',
    es: 'Resumen de tareas',
  },
  'school.analytics.assignment_overview.subtitle': {
    en: 'Completion and overdue work by class',
    ar: 'الإنجاز والواجبات المتأخّرة حسب الفصل',
    es: 'Finalización y trabajo atrasado por clase',
  },
  'school.analytics.col.class': { en: 'Class', ar: 'الفصل', es: 'Clase' },
  'school.analytics.col.teacher': { en: 'Teacher', ar: 'المعلّم', es: 'Profesor' },
  'school.analytics.col.completion_rate': {
    en: 'Completion rate',
    ar: 'نسبة الإنجاز',
    es: 'Tasa de finalización',
  },
  'school.analytics.col.overdue': { en: 'Overdue', ar: 'متأخّر', es: 'Atrasado' },
  'school.analytics.overdue_suffix': { en: 'overdue', ar: 'متأخّر', es: 'atrasado' },
  'school.analytics.none': { en: 'None', ar: 'ولا واحد', es: 'Ninguno' },

  // Export buttons
  'school.analytics.export_excel': {
    en: 'Export to Excel',
    ar: 'تصدير إلى Excel',
    es: 'Exportar a Excel',
  },
  'school.analytics.export_pdf': { en: 'Export to PDF', ar: 'تصدير إلى PDF', es: 'Exportar a PDF' },

  // ─── school.analytics.nrr - investor NRR dashboard ───────────────────────
  'school.analytics.back_to_analytics': {
    en: 'Back to analytics',
    ar: 'رجوع للتحليلات',
    es: 'Volver a analíticas',
  },
  'school.analytics.nrr.title': {
    en: 'Net revenue retention',
    ar: 'صافي الاحتفاظ بالإيرادات',
    es: 'Retención neta de ingresos',
  },
  'school.analytics.nrr.subtitle': {
    en: 'Expansion, contraction and churn over the trailing 24 months',
    ar: 'التوسّع والانكماش والفقد على مدى الـ 24 شهرًا الماضية',
    es: 'Expansión, contracción y bajas durante los últimos 24 meses',
  },
  'school.analytics.nrr.cohort_heatmap': {
    en: 'Cohort heatmap',
    ar: 'خريطة حرارية للمجموعات',
    es: 'Mapa de calor de cohortes',
  },
  'school.analytics.nrr.movements': { en: 'Movements', ar: 'الحركات', es: 'Movimientos' },
  'school.analytics.nrr.trend_title': { en: 'NRR trend', ar: 'اتجاه NRR', es: 'Tendencia de NRR' },
  'school.analytics.nrr.trend_subtitle': {
    en: 'Monthly NRR vs. the 100% target line',
    ar: 'NRR الشهري مقارنة بخط الهدف 100%',
    es: 'NRR mensual frente a la línea objetivo del 100%',
  },
  'school.analytics.nrr.expansion': { en: 'Expansion', ar: 'التوسّع', es: 'Expansión' },
  'school.analytics.nrr.expansion_sub': {
    en: 'Upsell and seat growth',
    ar: 'الترقية وزيادة المقاعد',
    es: 'Ventas adicionales y crecimiento de licencias',
  },
  'school.analytics.nrr.upgrades': { en: 'Upgrades', ar: 'الترقيات', es: 'Mejoras de plan' },
  'school.analytics.nrr.contraction': { en: 'Contraction', ar: 'الانكماش', es: 'Contracción' },
  'school.analytics.nrr.contraction_sub': {
    en: 'Downgrades and reduced seats',
    ar: 'التخفيضات وتقليل المقاعد',
    es: 'Bajadas de plan y reducción de licencias',
  },
  'school.analytics.nrr.downgrades': { en: 'Downgrades', ar: 'التخفيضات', es: 'Bajadas de plan' },
  'school.analytics.nrr.churn': { en: 'Churn', ar: 'الفقد', es: 'Bajas' },
  'school.analytics.nrr.churn_sub': {
    en: 'Cancelled subscriptions',
    ar: 'الاشتراكات الملغاة',
    es: 'Suscripciones canceladas',
  },
  'school.analytics.nrr.churned_mrr': { en: 'Churned MRR', ar: 'MRR المفقود', es: 'MRR perdido' },
  'school.analytics.nrr.cohort_retention': {
    en: 'Cohort retention',
    ar: 'الاحتفاظ حسب المجموعة',
    es: 'Retención por cohorte',
  },
  'school.analytics.nrr.cohort_retention_sub': {
    en: 'Revenue retained by signup cohort',
    ar: 'الإيراد المحتفَظ به حسب مجموعة الاشتراك',
    es: 'Ingresos retenidos por cohorte de alta',
  },
  'school.analytics.nrr.full_heatmap': {
    en: 'Full heatmap',
    ar: 'الخريطة الحرارية كاملة',
    es: 'Mapa de calor completo',
  },

  // ─── school.assignments - listing page ───────────────────────────────────
  'school.assignments.title': { en: 'Assignments', ar: 'الواجبات', es: 'Tareas' },
  'school.assignments.active_singular': { en: 'active', ar: 'واجب نشط', es: 'activa' },
  'school.assignments.active_plural': { en: 'active', ar: 'واجبات نشطة', es: 'activas' },
  'school.assignments.overall_completion': {
    en: 'overall completion',
    ar: 'نسبة الإنجاز العامة',
    es: 'finalización general',
  },
  'school.assignments.new': { en: 'New assignment', ar: 'واجب جديد', es: 'Nueva tarea' },
  'school.assignments.search_placeholder': {
    en: 'Search assignments…',
    ar: 'دوّر على الواجبات…',
    es: 'Buscar tareas…',
  },
  'school.assignments.tab.active': { en: 'Active', ar: 'النشطة', es: 'Activas' },
  'school.assignments.tab.drafts': { en: 'Drafts', ar: 'المسودّات', es: 'Borradores' },
  'school.assignments.tab.closed': { en: 'Closed', ar: 'المغلقة', es: 'Cerradas' },
  'school.assignments.tab.all': { en: 'All', ar: 'الكل', es: 'Todas' },
  'school.assignments.empty.no_match': {
    en: 'No matching assignments',
    ar: 'ما فيه واجبات مطابقة',
    es: 'No hay tareas que coincidan',
  },
  'school.assignments.empty.none_yet': {
    en: 'No assignments yet',
    ar: 'ما فيه واجبات بعد',
    es: 'Aún no hay tareas',
  },
  'school.assignments.empty.search_hint': {
    en: 'Try a different search term.',
    ar: 'جرّب كلمة بحث ثانية.',
    es: 'Prueba con otro término de búsqueda.',
  },
  'school.assignments.empty.create_hint': {
    en: 'Create your first assignment to get started.',
    ar: 'سوِّ أول واجب لك عشان تبدأ.',
    es: 'Crea tu primera tarea para empezar.',
  },

  // Create page
  'school.assignments.create.title': {
    en: 'Create assignment',
    ar: 'إنشاء واجب',
    es: 'Crear tarea',
  },
  'school.assignments.create.subtitle': {
    en: 'Set work for a class and track submissions',
    ar: 'حدّد واجب لفصل وتابع التسليمات',
    es: 'Asigna trabajo a una clase y haz seguimiento de las entregas',
  },
  'school.assignments.create.form_title': {
    en: 'Assignment details',
    ar: 'تفاصيل الواجب',
    es: 'Detalles de la tarea',
  },
  'school.assignments.create.form_subtitle': {
    en: 'Fill in the details below to set this assignment',
    ar: 'عبّي التفاصيل تحت عشان تحدّد هذا الواجب',
    es: 'Rellena los datos a continuación para asignar esta tarea',
  },
  'school.assignments.field.title': { en: 'Title', ar: 'العنوان', es: 'Título' },
  'school.assignments.field.title_placeholder': {
    en: 'e.g. Macbeth essay - Act 1 analysis',
    ar: 'مثال: مقال ماكبث - تحليل الفصل الأول',
    es: 'p. ej. Ensayo de Macbeth - análisis del Acto 1',
  },
  'school.assignments.field.instructions': {
    en: 'Instructions',
    ar: 'التعليمات',
    es: 'Instrucciones',
  },
  'school.assignments.field.instructions_placeholder': {
    en: 'What should students do? Add any guidance or success criteria.',
    ar: 'وش المطلوب من الطلبة؟ ضيف أي إرشادات أو معايير نجاح.',
    es: '¿Qué deben hacer los estudiantes? Añade orientaciones o criterios de éxito.',
  },
  'school.assignments.field.class': { en: 'Class', ar: 'الفصل', es: 'Clase' },
  'school.assignments.field.class_placeholder': {
    en: 'Select a class',
    ar: 'اختر فصل',
    es: 'Selecciona una clase',
  },
  'school.assignments.field.type': { en: 'Type', ar: 'النوع', es: 'Tipo' },
  'school.assignments.field.type_placeholder': {
    en: 'Select a type',
    ar: 'اختر نوع',
    es: 'Selecciona un tipo',
  },
  'school.assignments.field.linked_resource': {
    en: 'Linked resource',
    ar: 'مورد مرتبط',
    es: 'Recurso vinculado',
  },
  'school.assignments.field.linked_resource_placeholder': {
    en: 'Select a resource (optional)',
    ar: 'اختر مورد (اختياري)',
    es: 'Selecciona un recurso (opcional)',
  },
  'school.assignments.field.linked_resource_hint': {
    en: 'Students will be taken straight to this resource.',
    ar: 'الطلبة بيوصلون مباشرة لهذا المورد.',
    es: 'Los estudiantes irán directamente a este recurso.',
  },
  'school.assignments.field.due_date': {
    en: 'Due date',
    ar: 'تاريخ التسليم',
    es: 'Fecha de entrega',
  },
  'school.assignments.field.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.assignments.field.status_hint': {
    en: 'Drafts are hidden from students until set to active.',
    ar: 'المسودّات مخفية عن الطلبة لين تصير نشطة.',
    es: 'Los borradores permanecen ocultos a los estudiantes hasta que se activan.',
  },
  'school.assignments.action.creating': { en: 'Creating…', ar: 'يجري الإنشاء…', es: 'Creando…' },

  // Detail page - not found / header
  'school.assignments.not_found.title': {
    en: 'Assignment not found',
    ar: 'الواجب غير موجود',
    es: 'Tarea no encontrada',
  },
  'school.assignments.not_found.body': {
    en: 'This assignment may have been deleted or the link is incorrect.',
    ar: 'يمكن هذا الواجب انحذف أو الرابط غلط.',
    es: 'Es posible que esta tarea se haya eliminado o que el enlace sea incorrecto.',
  },
  'school.assignments.badge.overdue': { en: 'Overdue', ar: 'متأخّر', es: 'Atrasada' },
  'school.assignments.resource_linked': {
    en: 'Resource linked',
    ar: 'مورد مرتبط',
    es: 'Recurso vinculado',
  },

  // Detail page - stats
  'school.assignments.stat.students': { en: 'Students', ar: 'الطلبة', es: 'Estudiantes' },
  'school.assignments.stat.submitted': { en: 'Submitted', ar: 'مُسلَّم', es: 'Entregadas' },
  'school.assignments.stat.avg_score': {
    en: 'Average score',
    ar: 'متوسط الدرجة',
    es: 'Puntuación media',
  },
  'school.assignments.stat.due_date': {
    en: 'Due date',
    ar: 'تاريخ التسليم',
    es: 'Fecha de entrega',
  },
  'school.assignments.range.highest': { en: 'Highest', ar: 'الأعلى', es: 'Más alta' },
  'school.assignments.range.lowest': { en: 'Lowest', ar: 'الأدنى', es: 'Más baja' },
  'school.assignments.range.graded': { en: 'Graded', ar: 'مُصحَّح', es: 'Calificadas' },

  // Detail page - submissions table
  'school.assignments.submissions.title': { en: 'Submissions', ar: 'التسليمات', es: 'Entregas' },
  'school.assignments.submissions.pending': { en: 'pending', ar: 'قيد الانتظار', es: 'pendiente' },
  'school.assignments.submissions.submitted': { en: 'submitted', ar: 'مُسلَّم', es: 'entregada' },
  'school.assignments.submissions.graded': { en: 'graded', ar: 'مُصحَّح', es: 'calificada' },
  'school.assignments.col.student': { en: 'Student', ar: 'الطالب', es: 'Estudiante' },
  'school.assignments.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'school.assignments.col.submitted': { en: 'Submitted', ar: 'تاريخ التسليم', es: 'Entregada' },
  'school.assignments.col.score': { en: 'Score', ar: 'الدرجة', es: 'Puntuación' },
  'school.assignments.col.feedback': { en: 'Feedback', ar: 'الملاحظات', es: 'Comentarios' },
  'school.assignments.col.actions': { en: 'Actions', ar: 'الإجراءات', es: 'Acciones' },
  'school.assignments.grade.placeholder': { en: '0-100', ar: '0-100', es: '0-100' },
  'school.assignments.feedback.placeholder': {
    en: 'Add feedback for this student…',
    ar: 'ضيف ملاحظات لهذا الطالب…',
    es: 'Añade comentarios para este estudiante…',
  },
  'school.assignments.action.save': { en: 'Save', ar: 'حفظ', es: 'Guardar' },
  'school.assignments.action.mark_submitted': {
    en: 'Mark submitted',
    ar: 'علِّمه مُسلَّم',
    es: 'Marcar como entregada',
  },
  'school.assignments.action.grade': { en: 'Grade', ar: 'صحِّح', es: 'Calificar' },
  'school.assignments.action.edit_grade': {
    en: 'Edit grade',
    ar: 'تعديل الدرجة',
    es: 'Editar calificación',
  },
  'school.assignments.no_students': {
    en: 'No students assigned to this class yet.',
    ar: 'ما فيه طلبة مسجَّلين في هذا الفصل بعد.',
    es: 'Aún no hay estudiantes asignados a esta clase.',
  },
  'school.assignments.status.closed': { en: 'Closed', ar: 'مغلق', es: 'Cerrada' },
}
