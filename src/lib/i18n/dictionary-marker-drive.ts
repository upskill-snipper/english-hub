/**
 * dictionary-marker-drive.ts - paid-marker-drive UI surfaces.
 *
 * Curated EN + Khaleeji (Gulf) AR for the four paid-marker pages shipped in
 * commit 6f444c6f:
 *   /admin/marker-drive  (admin.md.*)
 *   /marker              (marker.*)
 *   /admin/marker-pay    (admin.marker_pay.*)
 *   /admin/marker-qa     (admin.mqa.*)
 *
 * These are internal staff / contracted-marker screens (not student or
 * parent facing), so the Arabic is a faithful, plain Gulf rendering of the
 * operational terms - matched to the register used in
 * dictionary-admin-ai-marking.ts. Technical tokens (AO, QWK, CSV, JSON,
 * GCSE, NDA, exam-board / paper codes, grade letters) stay in Latin script
 * per the house convention.
 *
 * EN strings are the EXACT in-file English fallbacks from each page's
 * tf()/tt() shim - once these keys resolve, the shim stops substituting and
 * the screens become bilingual like the rest of the product. No page code
 * was changed.
 */
export const MARKER_DRIVE_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-drive - Paid Marker Drive  (admin.md.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.md.back_to_admin': {
    en: 'Back to admin',
    ar: 'رجوع للوحة الأدمن',
    es: 'Volver a administración',
  },
  'admin.md.refresh': { en: 'Refresh', ar: 'تحديث', es: 'Actualizar' },
  'admin.md.title': {
    en: 'Paid Marker Drive',
    ar: 'حملة المصحّحين المدفوعين',
    es: 'Campaña de correctores remunerados',
  },
  'admin.md.subtitle': {
    en: 'Ingest scripts, AI-draft them, manage paid markers and assign work.',
    ar: 'استورد الإجابات، سوّي لها مسودّة بالذكاء الاصطناعي، أدِر المصحّحين المدفوعين ووزّع الشغل.',
    es: 'Importa respuestas, genera borradores con IA, gestiona a los correctores remunerados y asigna el trabajo.',
  },
  'admin.md.error_load': {
    en: 'Could not load the marker drive. Try again.',
    ar: 'ما قدرنا نحمّل حملة المصحّحين. جرّب مرة ثانية.',
    es: 'No se pudo cargar la campaña de correctores. Inténtalo de nuevo.',
  },
  'admin.md.network_error': {
    en: 'Network error. Please try again.',
    ar: 'خطأ في الشبكة. جرّب مرة ثانية لو سمحت.',
    es: 'Error de red. Inténtalo de nuevo, por favor.',
  },
  'admin.md.saving': { en: 'Saving…', ar: 'يحفظ…', es: 'Guardando…' },

  // Stat cards
  'admin.md.stat.batches': { en: 'Batches', ar: 'الدفعات', es: 'Lotes' },
  'admin.md.stat.scripts': { en: 'Scripts', ar: 'الإجابات', es: 'Respuestas' },
  'admin.md.stat.drafted': { en: 'AI-drafted', ar: 'مسودّة بالذكاء', es: 'Con borrador de IA' },
  'admin.md.stat.markers': { en: 'Markers', ar: 'المصحّحون', es: 'Correctores' },

  // Create batch
  'admin.md.batch.new': { en: 'New batch', ar: 'دفعة جديدة', es: 'Nuevo lote' },
  'admin.md.batch.label': { en: 'Label', ar: 'الاسم', es: 'Nombre' },
  'admin.md.batch.board': { en: 'Board', ar: 'البورد', es: 'Junta' },
  'admin.md.batch.paper': {
    en: 'Paper (optional)',
    ar: 'الورقة (اختياري)',
    es: 'Examen (opcional)',
  },
  'admin.md.batch.target': { en: 'Target count', ar: 'العدد المستهدف', es: 'Cantidad objetivo' },
  'admin.md.batch.create': { en: 'Create batch', ar: 'إنشاء دفعة', es: 'Crear lote' },
  'admin.md.batch.list': { en: 'Batches', ar: 'الدفعات', es: 'Lotes' },
  'admin.md.batch.none': {
    en: 'No batches yet.',
    ar: 'ما في دفعات للحين.',
    es: 'Aún no hay lotes.',
  },
  'admin.md.batch.need_label_board': {
    en: 'Label and board are required.',
    ar: 'الاسم والبورد مطلوبين.',
    es: 'El nombre y la junta son obligatorios.',
  },
  'admin.md.batch.create_failed': {
    en: 'Failed to create batch.',
    ar: 'ما قدرنا ننشئ الدفعة.',
    es: 'No se pudo crear el lote.',
  },

  // Source-type options
  'admin.md.source.commissioned': { en: 'commissioned', ar: 'مُكلَّفة', es: 'encargada' },
  'admin.md.source.platform': { en: 'platform', ar: 'المنصّة', es: 'plataforma' },
  'admin.md.source.specimen': { en: 'specimen', ar: 'نموذجية', es: 'de muestra' },

  // Batches table columns
  'admin.md.col.label': { en: 'Label', ar: 'الاسم', es: 'Nombre' },
  'admin.md.col.board': { en: 'Board', ar: 'البورد', es: 'Junta' },
  'admin.md.col.source': { en: 'Source', ar: 'المصدر', es: 'Origen' },
  'admin.md.col.total': { en: 'Total', ar: 'الإجمالي', es: 'Total' },
  'admin.md.col.drafted': { en: 'Drafted', ar: 'مسودّة', es: 'Con borrador' },
  'admin.md.col.assigned': { en: 'Assigned', ar: 'موزّعة', es: 'Asignadas' },
  'admin.md.col.approved': { en: 'Approved', ar: 'معتمدة', es: 'Aprobadas' },
  'admin.md.col.action': { en: 'Action', ar: 'إجراء', es: 'Acción' },

  // AI-draft action
  'admin.md.draft.next25': {
    en: 'AI-draft next 25',
    ar: 'سوّي مسودّة لـ 25 التالية',
    es: 'Generar borrador IA de las 25 siguientes',
  },
  'admin.md.draft.running': { en: 'Drafting…', ar: 'يسوّي المسودّة…', es: 'Generando borrador…' },
  'admin.md.draft.done': { en: 'Drafted', ar: 'تسوّت المسودّة', es: 'Borrador generado' },
  'admin.md.draft.remaining': { en: 'remaining', ar: 'الباقي', es: 'restantes' },
  'admin.md.draft.failed': {
    en: 'AI drafting failed.',
    ar: 'ما نجحت مسودّة الذكاء.',
    es: 'Falló el borrador con IA.',
  },

  // Ingest
  'admin.md.ingest.title': {
    en: 'Ingest scripts',
    ar: 'استيراد الإجابات',
    es: 'Importar respuestas',
  },
  'admin.md.ingest.choose_batch': { en: 'Choose a batch…', ar: 'اختر دفعة…', es: 'Elige un lote…' },
  'admin.md.ingest.placeholder': {
    en: 'Paste JSON { "items": [...] } or CSV with a header row',
    ar: 'الصق JSON بصيغة { "items": [...] } أو CSV مع صف عناوين',
    es: 'Pega JSON { "items": [...] } o CSV con una fila de encabezado',
  },
  'admin.md.ingest.or_csv': {
    en: 'or upload a CSV:',
    ar: 'أو ارفع ملف CSV:',
    es: 'o sube un CSV:',
  },
  'admin.md.ingest.go': { en: 'Ingest', ar: 'استيراد', es: 'Importar' },
  'admin.md.ingest.running': { en: 'Ingesting…', ar: 'يستورد…', es: 'Importando…' },
  'admin.md.ingest.pick_batch': {
    en: 'Pick a batch first.',
    ar: 'اختر دفعة أول.',
    es: 'Elige primero un lote.',
  },
  'admin.md.ingest.empty': {
    en: 'Paste JSON or CSV to ingest.',
    ar: 'الصق JSON أو CSV عشان تستورد.',
    es: 'Pega JSON o CSV para importar.',
  },
  'admin.md.ingest.failed': {
    en: 'Ingest failed.',
    ar: 'ما نجح الاستيراد.',
    es: 'Falló la importación.',
  },
  'admin.md.ingest.done': { en: 'Ingested', ar: 'تم الاستيراد', es: 'Importado' },
  'admin.md.ingest.skipped': { en: 'skipped', ar: 'متخطّاة', es: 'omitidas' },
  'admin.md.ingest.bad_json': {
    en: 'Could not parse the pasted JSON.',
    ar: 'ما قدرنا نقرأ الـ JSON الملصوق.',
    es: 'No se pudo analizar el JSON pegado.',
  },

  // Markers
  'admin.md.marker.title': { en: 'Markers', ar: 'المصحّحون', es: 'Correctores' },
  'admin.md.marker.name': { en: 'Display name', ar: 'الاسم الظاهر', es: 'Nombre visible' },
  'admin.md.marker.email': { en: 'Email', ar: 'الإيميل', es: 'Correo electrónico' },
  'admin.md.marker.boards': {
    en: 'Boards (comma-sep)',
    ar: 'البوردات (تفصلها فاصلة)',
    es: 'Juntas (separadas por comas)',
  },
  'admin.md.marker.qual': { en: 'Qualification', ar: 'المؤهل', es: 'Titulación' },
  'admin.md.marker.rate': {
    en: 'Pay rate (pence)',
    ar: 'سعر الدفع (بنس)',
    es: 'Tarifa de pago (peniques)',
  },
  'admin.md.marker.add': {
    en: 'Add / update marker',
    ar: 'إضافة / تحديث مصحّح',
    es: 'Añadir / actualizar corrector',
  },
  'admin.md.marker.none': {
    en: 'No markers yet.',
    ar: 'ما في مصحّحين للحين.',
    es: 'Aún no hay correctores.',
  },
  'admin.md.marker.need_name': {
    en: 'Marker display name is required.',
    ar: 'اسم المصحّح الظاهر مطلوب.',
    es: 'El nombre visible del corrector es obligatorio.',
  },
  'admin.md.marker.create_failed': {
    en: 'Failed to save marker.',
    ar: 'ما قدرنا نحفظ المصحّح.',
    es: 'No se pudo guardar el corrector.',
  },
  'admin.md.marker.contract_ok': { en: 'Contract ✓', ar: 'العقد ✓', es: 'Contrato ✓' },
  'admin.md.marker.contract_no': { en: 'No contract', ar: 'ما في عقد', es: 'Sin contrato' },
  'admin.md.marker.nda_ok': { en: 'NDA ✓', ar: 'NDA ✓', es: 'NDA ✓' },
  'admin.md.marker.nda_no': { en: 'No NDA', ar: 'ما في NDA', es: 'Sin NDA' },

  // Markers table columns
  'admin.md.col.name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'admin.md.col.email': { en: 'Email', ar: 'الإيميل', es: 'Correo electrónico' },
  'admin.md.col.boards': { en: 'Boards', ar: 'البوردات', es: 'Juntas' },
  'admin.md.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'admin.md.col.rate': { en: 'Rate (p)', ar: 'السعر (بنس)', es: 'Tarifa (p)' },
  'admin.md.col.docs': { en: 'Docs', ar: 'المستندات', es: 'Documentos' },

  // Marker status pills (admin.md.mstatus.<status>) - common values
  'admin.md.mstatus.active': { en: 'active', ar: 'فعّال', es: 'activo' },
  'admin.md.mstatus.paused': { en: 'paused', ar: 'موقوف مؤقتاً', es: 'en pausa' },
  'admin.md.mstatus.pending': { en: 'pending', ar: 'بانتظار', es: 'pendiente' },
  'admin.md.mstatus.offboarded': { en: 'offboarded', ar: 'منتهي', es: 'dado de baja' },

  // Assign work
  'admin.md.assign.title': { en: 'Assign work', ar: 'توزيع الشغل', es: 'Asignar trabajo' },
  'admin.md.assign.hint': {
    en: 'Assigns AI-drafted, unassigned scripts in the batch to the marker.',
    ar: 'يوزّع الإجابات المسوّاة بالذكاء وغير الموزّعة في الدفعة على المصحّح.',
    es: 'Asigna al corrector las respuestas del lote con borrador de IA y sin asignar.',
  },
  'admin.md.assign.batch': { en: 'Batch', ar: 'الدفعة', es: 'Lote' },
  'admin.md.assign.marker': { en: 'Marker', ar: 'المصحّح', es: 'Corrector' },
  'admin.md.assign.count': { en: 'Count', ar: 'العدد', es: 'Cantidad' },
  'admin.md.assign.pick': { en: 'Pick…', ar: 'اختر…', es: 'Elegir…' },
  'admin.md.assign.go': { en: 'Assign', ar: 'توزيع', es: 'Asignar' },
  'admin.md.assign.running': { en: 'Assigning…', ar: 'يوزّع…', es: 'Asignando…' },
  'admin.md.assign.need_both': {
    en: 'Pick a batch and a marker.',
    ar: 'اختر دفعة ومصحّح.',
    es: 'Elige un lote y un corrector.',
  },
  'admin.md.assign.failed': {
    en: 'Assignment failed.',
    ar: 'ما نجح التوزيع.',
    es: 'Falló la asignación.',
  },
  'admin.md.assign.done': { en: 'Assigned', ar: 'تم التوزيع', es: 'Asignado' },

  // ─────────────────────────────────────────────────────────────────────────
  // /marker - Paid Marker · Review Console  (marker.*)
  // ─────────────────────────────────────────────────────────────────────────
  'marker.gate.title': {
    en: 'Marker access only',
    ar: 'الدخول للمصحّحين فقط',
    es: 'Acceso solo para correctores',
  },
  'marker.gate.body': {
    en: 'This console is for contracted markers. Your account is not an active marker. If you believe this is a mistake, please contact an administrator.',
    ar: 'هذه اللوحة للمصحّحين المتعاقدين. حسابك مو مصحّح فعّال. إذا تعتقد إن في غلط، تواصل مع الأدمن لو سمحت.',
    es: 'Esta consola es para correctores contratados. Tu cuenta no es un corrector activo. Si crees que se trata de un error, ponte en contacto con un administrador.',
  },
  'marker.console.title': { en: 'Marker Console', ar: 'لوحة المصحّح', es: 'Consola del corrector' },

  // Header stats
  'marker.stat.assigned': { en: 'Assigned', ar: 'موزّعة', es: 'Asignadas' },
  'marker.stat.session': { en: 'This session', ar: 'هالجلسة', es: 'Esta sesión' },
  'marker.stat.today': { en: 'Done today', ar: 'خُلصت اليوم', es: 'Hechas hoy' },
  'marker.stat.total': { en: 'Total', ar: 'الإجمالي', es: 'Total' },

  // Keyboard hint
  'marker.kbd.label': { en: 'Shortcuts', ar: 'الاختصارات', es: 'Atajos' },
  'marker.kbd.approve': { en: 'Approve & next', ar: 'اعتمد والتالي', es: 'Aprobar y siguiente' },
  'marker.kbd.correct': { en: 'Correct & next', ar: 'صحّح والتالي', es: 'Corregir y siguiente' },
  'marker.kbd.reject': { en: 'Reject', ar: 'ارفض', es: 'Rechazar' },
  'marker.kbd.skip': { en: 'Skip', ar: 'تخطَّ', es: 'Omitir' },

  // Queue states
  'marker.queue.load_failed': {
    en: 'Could not load your queue.',
    ar: 'ما قدرنا نحمّل قائمتك.',
    es: 'No se pudo cargar tu cola.',
  },
  'marker.retry': { en: 'Retry', ar: 'أعد المحاولة', es: 'Reintentar' },
  'marker.refresh': { en: 'Refresh', ar: 'تحديث', es: 'Actualizar' },
  'marker.empty.title': { en: 'All caught up', ar: 'كل شي خلص', es: 'Todo al día' },
  'marker.empty.body': {
    en: 'You have no scripts waiting for review right now. New assignments will appear here automatically.',
    ar: 'ما عندك إجابات تنتظر المراجعة حالياً. التوزيعات الجديدة بتظهر هنا تلقائياً.',
    es: 'Ahora mismo no tienes respuestas pendientes de revisión. Las nuevas asignaciones aparecerán aquí automáticamente.',
  },

  // Current item - labels
  'marker.gold.badge': { en: 'Gold QA', ar: 'Gold QA', es: 'Gold QA' },
  'marker.question.label': { en: 'Question', ar: 'السؤال', es: 'Pregunta' },
  'marker.studied.label': {
    en: 'Set text / extract',
    ar: 'النص المقرّر / المقتطف',
    es: 'Texto prescrito / fragmento',
  },
  'marker.answer.label': {
    en: 'Student answer',
    ar: 'إجابة الطالب',
    es: 'Respuesta del estudiante',
  },
  'marker.answer.empty': {
    en: 'No answer text.',
    ar: 'ما في نص إجابة.',
    es: 'Sin texto de respuesta.',
  },

  // AI draft block
  'marker.ai.label': {
    en: 'AI draft (review & edit)',
    ar: 'مسودّة الذكاء (راجِع وعدّل)',
    es: 'Borrador de IA (revisar y editar)',
  },
  'marker.ai.mark': { en: 'AI mark', ar: 'درجة الذكاء', es: 'Nota de la IA' },
  'marker.ai.confidence': { en: 'confidence', ar: 'الثقة', es: 'confianza' },

  // Decision form fields
  'marker.field.final_mark': { en: 'Final mark', ar: 'الدرجة النهائية', es: 'Nota final' },
  'marker.field.mark_ph': { en: 'Mark', ar: 'الدرجة', es: 'Nota' },
  'marker.field.ao': { en: 'Per-AO marks', ar: 'الدرجات حسب AO', es: 'Notas por AO' },
  'marker.field.score': { en: 'score', ar: 'الدرجة', es: 'puntuación' },
  'marker.field.comment': { en: 'comment', ar: 'الملاحظة', es: 'comentario' },
  'marker.field.ao_comment_ph': {
    en: 'Note (optional)',
    ar: 'ملاحظة (اختياري)',
    es: 'Nota (opcional)',
  },
  'marker.field.feedback': {
    en: 'Final feedback',
    ar: 'الملاحظات النهائية',
    es: 'Comentarios finales',
  },
  'marker.field.feedback_ph': {
    en: 'The feedback the corpus will learn from…',
    ar: 'الملاحظات اللي بتتعلّم منها قاعدة البيانات…',
    es: 'Los comentarios de los que aprenderá el corpus…',
  },
  'marker.field.reason': { en: 'Adjustment reason', ar: 'سبب التعديل', es: 'Motivo del ajuste' },
  'marker.field.reason_ph': {
    en: 'Why did you change the AI mark/feedback? (training signal)',
    ar: 'ليش غيّرت درجة/ملاحظات الذكاء؟ (إشارة تدريب)',
    es: '¿Por qué cambiaste la nota o los comentarios de la IA? (señal de entrenamiento)',
  },
  'marker.field.reason_hint': {
    en: 'You changed the draft - a reason is required.',
    ar: 'عدّلت المسودّة - لازم تكتب سبب.',
    es: 'Modificaste el borrador: se requiere un motivo.',
  },

  // Validation
  'marker.review.reason_required': {
    en: 'Add an adjustment reason - this is the training signal whenever you change the mark or feedback.',
    ar: 'أضف سبب تعديل - هذي إشارة التدريب كل ما تغيّر الدرجة أو الملاحظات.',
    es: 'Añade un motivo del ajuste: es la señal de entrenamiento cada vez que cambias la nota o los comentarios.',
  },
  'marker.review.grade_required': {
    en: 'Choose a final mark.',
    ar: 'اختر درجة نهائية.',
    es: 'Elige una nota final.',
  },
  'marker.review.submit_failed': {
    en: 'Could not save your review.',
    ar: 'ما قدرنا نحفظ مراجعتك.',
    es: 'No se pudo guardar tu revisión.',
  },

  // Action buttons
  'marker.action.approve': { en: 'Approve & next', ar: 'اعتمد والتالي', es: 'Aprobar y siguiente' },
  'marker.action.correct': { en: 'Correct & next', ar: 'صحّح والتالي', es: 'Corregir y siguiente' },
  'marker.action.reject': { en: 'Reject', ar: 'ارفض', es: 'Rechazar' },
  'marker.action.skip': { en: 'Skip', ar: 'تخطَّ', es: 'Omitir' },
  'marker.action.hint': {
    en: 'Approving makes this script corpus-eligible for training.',
    ar: 'الاعتماد يخلّي هالإجابة مؤهّلة للتدريب ضمن قاعدة البيانات.',
    es: 'Aprobarla hace que esta respuesta sea apta para el corpus de entrenamiento.',
  },

  // Progress
  'marker.progress.remaining': { en: 'In this batch', ar: 'في هالدفعة', es: 'En este lote' },

  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-pay - Marker Pay & Throughput  (admin.marker_pay.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.marker_pay.title': {
    en: 'Marker Pay & Throughput',
    ar: 'دفعات المصحّحين والإنتاجية',
    es: 'Pago y productividad de correctores',
  },
  'admin.marker_pay.subtitle': {
    en: 'Approved-script counts and pay due per paid marker for the selected period. An approved script is a distinct submission with an approving (approved/corrected) teacher moderation, attributed by reviewer or assignment.',
    ar: 'عدد الإجابات المعتمدة والمبلغ المستحق لكل مصحّح مدفوع للفترة المحدّدة. الإجابة المعتمدة هي تسليم مميّز عليه مراجعة معلّم باعتماد (معتمدة/مصحّحة)، منسوبة حسب المراجِع أو التوزيع.',
    es: 'Número de respuestas aprobadas e importe adeudado por cada corrector remunerado en el periodo seleccionado. Una respuesta aprobada es un envío distinto con una moderación docente de aprobación (aprobada/corregida), atribuida según el revisor o la asignación.',
  },
  'admin.marker_pay.error_load': {
    en: 'Failed to load marker pay data.',
    ar: 'ما قدرنا نحمّل بيانات دفعات المصحّحين.',
    es: 'No se pudieron cargar los datos de pago de los correctores.',
  },
  'admin.marker_pay.note.unavailable': {
    en: 'Some data is currently unavailable:',
    ar: 'بعض البيانات مو متوفّرة حالياً:',
    es: 'Algunos datos no están disponibles en este momento:',
  },
  'admin.marker_pay.from': { en: 'From', ar: 'من', es: 'Desde' },
  'admin.marker_pay.to': { en: 'To', ar: 'إلى', es: 'Hasta' },
  'admin.marker_pay.apply': { en: 'Apply', ar: 'تطبيق', es: 'Aplicar' },
  'admin.marker_pay.export_csv': { en: 'Export CSV', ar: 'تصدير CSV', es: 'Exportar CSV' },

  // Totals
  'admin.marker_pay.stat.markers': { en: 'Markers', ar: 'المصحّحون', es: 'Correctores' },
  'admin.marker_pay.stat.scripts': {
    en: 'Approved scripts',
    ar: 'الإجابات المعتمدة',
    es: 'Respuestas aprobadas',
  },
  'admin.marker_pay.stat.gold': { en: 'Gold scripts', ar: 'إجابات Gold', es: 'Respuestas Gold' },
  'admin.marker_pay.stat.amount': { en: 'Total due', ar: 'الإجمالي المستحق', es: 'Total adeudado' },

  // Table columns
  'admin.marker_pay.col.marker': { en: 'Marker', ar: 'المصحّح', es: 'Corrector' },
  'admin.marker_pay.col.email': { en: 'Email', ar: 'الإيميل', es: 'Correo electrónico' },
  'admin.marker_pay.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'admin.marker_pay.col.rate': {
    en: 'Rate (p/script)',
    ar: 'السعر (بنس/إجابة)',
    es: 'Tarifa (p/respuesta)',
  },
  'admin.marker_pay.col.scripts': { en: 'Approved', ar: 'معتمدة', es: 'Aprobadas' },
  'admin.marker_pay.col.gold': { en: 'Gold', ar: 'Gold', es: 'Gold' },
  'admin.marker_pay.col.nongold': { en: 'Non-gold', ar: 'غير Gold', es: 'No Gold' },
  'admin.marker_pay.col.amount': { en: 'Amount', ar: 'المبلغ', es: 'Importe' },

  'admin.marker_pay.rate_missing': {
    en: 'No pay rate set for this marker - amount is £0 until configured.',
    ar: 'ما في سعر دفع محدّد لهذا المصحّح - المبلغ £0 لين يتضبط.',
    es: 'No hay tarifa de pago definida para este corrector: el importe es £0 hasta que se configure.',
  },
  'admin.marker_pay.none': {
    en: 'No markers found for this period.',
    ar: 'ما في مصحّحين لهذي الفترة.',
    es: 'No se encontraron correctores para este periodo.',
  },
  'admin.marker_pay.totals': { en: 'Totals', ar: 'الإجماليات', es: 'Totales' },

  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-qa - Marker QA scorecard  (admin.mqa.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.mqa.title': {
    en: 'Marker QA - gold calibration & inter-marker agreement',
    ar: 'جودة المصحّحين - معايرة Gold والتوافق بين المصحّحين',
    es: 'Control de calidad de correctores: calibración Gold y concordancia entre correctores',
  },
  'admin.mqa.error_load': {
    en: 'Could not load the marker QA scorecard.',
    ar: 'ما قدرنا نحمّل بطاقة جودة المصحّحين.',
    es: 'No se pudo cargar el cuadro de calidad de los correctores.',
  },

  // Totals
  'admin.mqa.stat.markers': { en: 'Markers', ar: 'المصحّحون', es: 'Correctores' },
  'admin.mqa.stat.gold': { en: 'Gold items', ar: 'عناصر Gold', es: 'Elementos Gold' },
  'admin.mqa.stat.approved_gold': { en: 'Approved gold', ar: 'Gold معتمدة', es: 'Gold aprobados' },
  'admin.mqa.stat.approved_total': {
    en: 'Approved total',
    ar: 'إجمالي المعتمدة',
    es: 'Total aprobadas',
  },
  'admin.mqa.stat.shared': {
    en: 'Shared scripts',
    ar: 'إجابات مشتركة',
    es: 'Respuestas compartidas',
  },

  // Thresholds line
  'admin.mqa.thresholds_label': {
    en: 'QA thresholds',
    ar: 'حدود الجودة',
    es: 'Umbrales de calidad',
  },
  'admin.mqa.th_exact': {
    en: 'gold exact ≥',
    ar: 'تطابق Gold تام ≥',
    es: 'coincidencia exacta Gold ≥',
  },
  'admin.mqa.th_within1': { en: '±1 ≥', ar: '±1 ≥', es: '±1 ≥' },
  'admin.mqa.th_qwk': { en: 'grade QWK ≥', ar: 'QWK للدرجة ≥', es: 'QWK de la nota ≥' },
  'admin.mqa.th_drift': {
    en: 'drift if last',
    ar: 'انحراف إذا آخر',
    es: 'desviación si las últimas',
  },
  'admin.mqa.th_drift_tail': { en: 'gold drop ≥', ar: 'هبوط Gold ≥', es: 'caída Gold ≥' },
  'admin.mqa.th_vs_baseline': {
    en: 'vs baseline',
    ar: 'مقارنة بالأساس',
    es: 'frente a la referencia',
  },

  // Per-marker gold accuracy
  'admin.mqa.per_marker': {
    en: 'Per-marker gold accuracy',
    ar: 'دقّة Gold لكل مصحّح',
    es: 'Precisión Gold por corrector',
  },
  'admin.mqa.no_gold': {
    en: 'No approved gold items yet.',
    ar: 'ما في عناصر Gold معتمدة للحين.',
    es: 'Aún no hay elementos Gold aprobados.',
  },
  'admin.mqa.col.marker': { en: 'Marker', ar: 'المصحّح', es: 'Corrector' },
  'admin.mqa.col.scored': { en: 'Scored', ar: 'المُقيَّمة', es: 'Calificadas' },
  'admin.mqa.col.exact': { en: 'Exact', ar: 'تطابق تام', es: 'Exactas' },
  'admin.mqa.col.within1': { en: '±1', ar: '±1', es: '±1' },
  'admin.mqa.col.mae': { en: 'MAE', ar: 'MAE', es: 'MAE' },
  'admin.mqa.col.qwk': { en: 'Grade QWK', ar: 'QWK للدرجة', es: 'QWK de la nota' },
  'admin.mqa.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'admin.mqa.badge.insufficient': {
    en: 'Insufficient data',
    ar: 'بيانات غير كافية',
    es: 'Datos insuficientes',
  },
  'admin.mqa.badge.drift': { en: 'Drift', ar: 'انحراف', es: 'Desviación' },
  'admin.mqa.badge.ok': { en: 'OK', ar: 'سليم', es: 'Correcto' },

  // Inter-marker agreement
  'admin.mqa.inter': {
    en: 'Inter-marker agreement',
    ar: 'التوافق بين المصحّحين',
    es: 'Concordancia entre correctores',
  },
  'admin.mqa.no_shared': {
    en: 'No scripts have been marked by two or more markers yet.',
    ar: 'ما في إجابات صحّحها مصحّحَين أو أكثر للحين.',
    es: 'Aún no hay respuestas corregidas por dos o más correctores.',
  },
  'admin.mqa.im.exact': {
    en: 'Pairwise exact',
    ar: 'تطابق تام للأزواج',
    es: 'Coincidencia exacta por pares',
  },
  'admin.mqa.im.within1': { en: 'Pairwise ±1', ar: '±1 للأزواج', es: '±1 por pares' },
  'admin.mqa.im.mae': { en: 'Pairwise MAE', ar: 'MAE للأزواج', es: 'MAE por pares' },
  'admin.mqa.im.qwk': {
    en: 'Pooled grade QWK',
    ar: 'QWK مجمّع للدرجة',
    es: 'QWK agrupado de la nota',
  },
  'admin.mqa.col.pair': { en: 'Marker pair', ar: 'زوج المصحّحين', es: 'Par de correctores' },
  'admin.mqa.col.shared': { en: 'Shared', ar: 'مشتركة', es: 'Compartidas' },

  // Throughput
  'admin.mqa.throughput': {
    en: 'Throughput (approved per marker)',
    ar: 'الإنتاجية (المعتمدة لكل مصحّح)',
    es: 'Productividad (aprobadas por corrector)',
  },
  'admin.mqa.no_throughput': {
    en: 'No approved work yet.',
    ar: 'ما في شغل معتمد للحين.',
    es: 'Aún no hay trabajo aprobado.',
  },
  'admin.mqa.col.approved': { en: 'Approved', ar: 'معتمدة', es: 'Aprobadas' },
  'admin.mqa.col.assigned': { en: 'Assigned', ar: 'موزّعة', es: 'Asignadas' },

  // Board / paper slices
  'admin.mqa.slices': {
    en: 'Gold accuracy by board / paper',
    ar: 'دقّة Gold حسب البورد / الورقة',
    es: 'Precisión Gold por junta / examen',
  },
  'admin.mqa.filter.all': { en: 'All boards', ar: 'كل البوردات', es: 'Todas las juntas' },
  'admin.mqa.by_board': { en: 'By board', ar: 'حسب البورد', es: 'Por junta' },
  'admin.mqa.by_paper': { en: 'By paper', ar: 'حسب الورقة', es: 'Por examen' },
  'admin.mqa.no_slice': { en: 'No data.', ar: 'ما في بيانات.', es: 'Sin datos.' },
  'admin.mqa.col.slice': { en: 'Slice', ar: 'الشريحة', es: 'Segmento' },
  'admin.mqa.col.n': { en: 'n', ar: 'العدد', es: 'n' },

  // Gold-item manager
  'admin.mqa.gold_mgr': {
    en: 'Mark a submission as gold',
    ar: 'علّم تسليم كـ Gold',
    es: 'Marcar un envío como Gold',
  },
  'admin.mqa.gold_help': {
    en: 'Sets the expert-true mark/grade on an existing queue item and inserts it blind into the assigned marker’s queue. The expected answer is never shown to markers.',
    ar: 'يحدّد الدرجة/التقدير الصحيح من الخبير على عنصر موجود بالقائمة ويدخله بشكل أعمى في قائمة المصحّح المعيَّن. الإجابة المتوقّعة ما تنعرض للمصحّحين أبداً.',
    es: 'Fija la nota/calificación verdadera del experto en un elemento existente de la cola y lo inserta de forma ciega en la cola del corrector asignado. La respuesta esperada nunca se muestra a los correctores.',
  },
  'admin.mqa.f.submission': { en: 'Submission ID', ar: 'معرّف التسليم', es: 'ID del envío' },
  'admin.mqa.f.mark': { en: 'Expert mark', ar: 'درجة الخبير', es: 'Nota del experto' },
  'admin.mqa.f.grade': { en: 'Expert grade', ar: 'تقدير الخبير', es: 'Calificación del experto' },
  'admin.mqa.f.saving': { en: 'Saving…', ar: 'يحفظ…', es: 'Guardando…' },
  'admin.mqa.f.submit': { en: 'Mark as gold', ar: 'علّم كـ Gold', es: 'Marcar como Gold' },
  'admin.mqa.gold_ok': { en: 'Marked as gold.', ar: 'تعلّم كـ Gold.', es: 'Marcado como Gold.' },
  'admin.mqa.gold_fail': {
    en: 'Could not mark this submission as gold.',
    ar: 'ما قدرنا نعلّم هذا التسليم كـ Gold.',
    es: 'No se pudo marcar este envío como Gold.',
  },
}
