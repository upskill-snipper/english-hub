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
export const MARKER_DRIVE_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-drive - Paid Marker Drive  (admin.md.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.md.back_to_admin': { en: 'Back to admin', ar: 'رجوع للوحة الأدمن' },
  'admin.md.refresh': { en: 'Refresh', ar: 'تحديث' },
  'admin.md.title': { en: 'Paid Marker Drive', ar: 'حملة المصحّحين المدفوعين' },
  'admin.md.subtitle': {
    en: 'Ingest scripts, AI-draft them, manage paid markers and assign work.',
    ar: 'استورد الإجابات، سوّي لها مسودّة بالذكاء الاصطناعي، أدِر المصحّحين المدفوعين ووزّع الشغل.',
  },
  'admin.md.error_load': {
    en: 'Could not load the marker drive. Try again.',
    ar: 'ما قدرنا نحمّل حملة المصحّحين. جرّب مرة ثانية.',
  },
  'admin.md.network_error': {
    en: 'Network error. Please try again.',
    ar: 'خطأ في الشبكة. جرّب مرة ثانية لو سمحت.',
  },
  'admin.md.saving': { en: 'Saving…', ar: 'يحفظ…' },

  // Stat cards
  'admin.md.stat.batches': { en: 'Batches', ar: 'الدفعات' },
  'admin.md.stat.scripts': { en: 'Scripts', ar: 'الإجابات' },
  'admin.md.stat.drafted': { en: 'AI-drafted', ar: 'مسودّة بالذكاء' },
  'admin.md.stat.markers': { en: 'Markers', ar: 'المصحّحون' },

  // Create batch
  'admin.md.batch.new': { en: 'New batch', ar: 'دفعة جديدة' },
  'admin.md.batch.label': { en: 'Label', ar: 'الاسم' },
  'admin.md.batch.board': { en: 'Board', ar: 'البورد' },
  'admin.md.batch.paper': { en: 'Paper (optional)', ar: 'الورقة (اختياري)' },
  'admin.md.batch.target': { en: 'Target count', ar: 'العدد المستهدف' },
  'admin.md.batch.create': { en: 'Create batch', ar: 'إنشاء دفعة' },
  'admin.md.batch.list': { en: 'Batches', ar: 'الدفعات' },
  'admin.md.batch.none': { en: 'No batches yet.', ar: 'ما في دفعات للحين.' },
  'admin.md.batch.need_label_board': {
    en: 'Label and board are required.',
    ar: 'الاسم والبورد مطلوبين.',
  },
  'admin.md.batch.create_failed': {
    en: 'Failed to create batch.',
    ar: 'ما قدرنا ننشئ الدفعة.',
  },

  // Source-type options
  'admin.md.source.commissioned': { en: 'commissioned', ar: 'مُكلَّفة' },
  'admin.md.source.platform': { en: 'platform', ar: 'المنصّة' },
  'admin.md.source.specimen': { en: 'specimen', ar: 'نموذجية' },

  // Batches table columns
  'admin.md.col.label': { en: 'Label', ar: 'الاسم' },
  'admin.md.col.board': { en: 'Board', ar: 'البورد' },
  'admin.md.col.source': { en: 'Source', ar: 'المصدر' },
  'admin.md.col.total': { en: 'Total', ar: 'الإجمالي' },
  'admin.md.col.drafted': { en: 'Drafted', ar: 'مسودّة' },
  'admin.md.col.assigned': { en: 'Assigned', ar: 'موزّعة' },
  'admin.md.col.approved': { en: 'Approved', ar: 'معتمدة' },
  'admin.md.col.action': { en: 'Action', ar: 'إجراء' },

  // AI-draft action
  'admin.md.draft.next25': { en: 'AI-draft next 25', ar: 'سوّي مسودّة لـ 25 التالية' },
  'admin.md.draft.running': { en: 'Drafting…', ar: 'يسوّي المسودّة…' },
  'admin.md.draft.done': { en: 'Drafted', ar: 'تسوّت المسودّة' },
  'admin.md.draft.remaining': { en: 'remaining', ar: 'الباقي' },
  'admin.md.draft.failed': { en: 'AI drafting failed.', ar: 'ما نجحت مسودّة الذكاء.' },

  // Ingest
  'admin.md.ingest.title': { en: 'Ingest scripts', ar: 'استيراد الإجابات' },
  'admin.md.ingest.choose_batch': { en: 'Choose a batch…', ar: 'اختر دفعة…' },
  'admin.md.ingest.placeholder': {
    en: 'Paste JSON { "items": [...] } or CSV with a header row',
    ar: 'الصق JSON بصيغة { "items": [...] } أو CSV مع صف عناوين',
  },
  'admin.md.ingest.or_csv': { en: 'or upload a CSV:', ar: 'أو ارفع ملف CSV:' },
  'admin.md.ingest.go': { en: 'Ingest', ar: 'استيراد' },
  'admin.md.ingest.running': { en: 'Ingesting…', ar: 'يستورد…' },
  'admin.md.ingest.pick_batch': { en: 'Pick a batch first.', ar: 'اختر دفعة أول.' },
  'admin.md.ingest.empty': {
    en: 'Paste JSON or CSV to ingest.',
    ar: 'الصق JSON أو CSV عشان تستورد.',
  },
  'admin.md.ingest.failed': { en: 'Ingest failed.', ar: 'ما نجح الاستيراد.' },
  'admin.md.ingest.done': { en: 'Ingested', ar: 'تم الاستيراد' },
  'admin.md.ingest.skipped': { en: 'skipped', ar: 'متخطّاة' },
  'admin.md.ingest.bad_json': {
    en: 'Could not parse the pasted JSON.',
    ar: 'ما قدرنا نقرأ الـ JSON الملصوق.',
  },

  // Markers
  'admin.md.marker.title': { en: 'Markers', ar: 'المصحّحون' },
  'admin.md.marker.name': { en: 'Display name', ar: 'الاسم الظاهر' },
  'admin.md.marker.email': { en: 'Email', ar: 'الإيميل' },
  'admin.md.marker.boards': { en: 'Boards (comma-sep)', ar: 'البوردات (تفصلها فاصلة)' },
  'admin.md.marker.qual': { en: 'Qualification', ar: 'المؤهل' },
  'admin.md.marker.rate': { en: 'Pay rate (pence)', ar: 'سعر الدفع (بنس)' },
  'admin.md.marker.add': { en: 'Add / update marker', ar: 'إضافة / تحديث مصحّح' },
  'admin.md.marker.none': { en: 'No markers yet.', ar: 'ما في مصحّحين للحين.' },
  'admin.md.marker.need_name': {
    en: 'Marker display name is required.',
    ar: 'اسم المصحّح الظاهر مطلوب.',
  },
  'admin.md.marker.create_failed': {
    en: 'Failed to save marker.',
    ar: 'ما قدرنا نحفظ المصحّح.',
  },
  'admin.md.marker.contract_ok': { en: 'Contract ✓', ar: 'العقد ✓' },
  'admin.md.marker.contract_no': { en: 'No contract', ar: 'ما في عقد' },
  'admin.md.marker.nda_ok': { en: 'NDA ✓', ar: 'NDA ✓' },
  'admin.md.marker.nda_no': { en: 'No NDA', ar: 'ما في NDA' },

  // Markers table columns
  'admin.md.col.name': { en: 'Name', ar: 'الاسم' },
  'admin.md.col.email': { en: 'Email', ar: 'الإيميل' },
  'admin.md.col.boards': { en: 'Boards', ar: 'البوردات' },
  'admin.md.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.md.col.rate': { en: 'Rate (p)', ar: 'السعر (بنس)' },
  'admin.md.col.docs': { en: 'Docs', ar: 'المستندات' },

  // Marker status pills (admin.md.mstatus.<status>) - common values
  'admin.md.mstatus.active': { en: 'active', ar: 'فعّال' },
  'admin.md.mstatus.paused': { en: 'paused', ar: 'موقوف مؤقتاً' },
  'admin.md.mstatus.pending': { en: 'pending', ar: 'بانتظار' },
  'admin.md.mstatus.offboarded': { en: 'offboarded', ar: 'منتهي' },

  // Assign work
  'admin.md.assign.title': { en: 'Assign work', ar: 'توزيع الشغل' },
  'admin.md.assign.hint': {
    en: 'Assigns AI-drafted, unassigned scripts in the batch to the marker.',
    ar: 'يوزّع الإجابات المسوّاة بالذكاء وغير الموزّعة في الدفعة على المصحّح.',
  },
  'admin.md.assign.batch': { en: 'Batch', ar: 'الدفعة' },
  'admin.md.assign.marker': { en: 'Marker', ar: 'المصحّح' },
  'admin.md.assign.count': { en: 'Count', ar: 'العدد' },
  'admin.md.assign.pick': { en: 'Pick…', ar: 'اختر…' },
  'admin.md.assign.go': { en: 'Assign', ar: 'توزيع' },
  'admin.md.assign.running': { en: 'Assigning…', ar: 'يوزّع…' },
  'admin.md.assign.need_both': {
    en: 'Pick a batch and a marker.',
    ar: 'اختر دفعة ومصحّح.',
  },
  'admin.md.assign.failed': { en: 'Assignment failed.', ar: 'ما نجح التوزيع.' },
  'admin.md.assign.done': { en: 'Assigned', ar: 'تم التوزيع' },

  // ─────────────────────────────────────────────────────────────────────────
  // /marker - Paid Marker · Review Console  (marker.*)
  // ─────────────────────────────────────────────────────────────────────────
  'marker.gate.title': { en: 'Marker access only', ar: 'الدخول للمصحّحين فقط' },
  'marker.gate.body': {
    en: 'This console is for contracted markers. Your account is not an active marker. If you believe this is a mistake, please contact an administrator.',
    ar: 'هذه اللوحة للمصحّحين المتعاقدين. حسابك مو مصحّح فعّال. إذا تعتقد إن في غلط، تواصل مع الأدمن لو سمحت.',
  },
  'marker.console.title': { en: 'Marker Console', ar: 'لوحة المصحّح' },

  // Header stats
  'marker.stat.assigned': { en: 'Assigned', ar: 'موزّعة' },
  'marker.stat.session': { en: 'This session', ar: 'هالجلسة' },
  'marker.stat.today': { en: 'Done today', ar: 'خُلصت اليوم' },
  'marker.stat.total': { en: 'Total', ar: 'الإجمالي' },

  // Keyboard hint
  'marker.kbd.label': { en: 'Shortcuts', ar: 'الاختصارات' },
  'marker.kbd.approve': { en: 'Approve & next', ar: 'اعتمد والتالي' },
  'marker.kbd.correct': { en: 'Correct & next', ar: 'صحّح والتالي' },
  'marker.kbd.reject': { en: 'Reject', ar: 'ارفض' },
  'marker.kbd.skip': { en: 'Skip', ar: 'تخطَّ' },

  // Queue states
  'marker.queue.load_failed': {
    en: 'Could not load your queue.',
    ar: 'ما قدرنا نحمّل قائمتك.',
  },
  'marker.retry': { en: 'Retry', ar: 'أعد المحاولة' },
  'marker.refresh': { en: 'Refresh', ar: 'تحديث' },
  'marker.empty.title': { en: 'All caught up', ar: 'كل شي خلص' },
  'marker.empty.body': {
    en: 'You have no scripts waiting for review right now. New assignments will appear here automatically.',
    ar: 'ما عندك إجابات تنتظر المراجعة حالياً. التوزيعات الجديدة بتظهر هنا تلقائياً.',
  },

  // Current item - labels
  'marker.gold.badge': { en: 'Gold QA', ar: 'Gold QA' },
  'marker.question.label': { en: 'Question', ar: 'السؤال' },
  'marker.studied.label': { en: 'Set text / extract', ar: 'النص المقرّر / المقتطف' },
  'marker.answer.label': { en: 'Student answer', ar: 'إجابة الطالب' },
  'marker.answer.empty': { en: 'No answer text.', ar: 'ما في نص إجابة.' },

  // AI draft block
  'marker.ai.label': { en: 'AI draft (review & edit)', ar: 'مسودّة الذكاء (راجِع وعدّل)' },
  'marker.ai.mark': { en: 'AI mark', ar: 'درجة الذكاء' },
  'marker.ai.confidence': { en: 'confidence', ar: 'الثقة' },

  // Decision form fields
  'marker.field.final_mark': { en: 'Final mark', ar: 'الدرجة النهائية' },
  'marker.field.mark_ph': { en: 'Mark', ar: 'الدرجة' },
  'marker.field.ao': { en: 'Per-AO marks', ar: 'الدرجات حسب AO' },
  'marker.field.score': { en: 'score', ar: 'الدرجة' },
  'marker.field.comment': { en: 'comment', ar: 'الملاحظة' },
  'marker.field.ao_comment_ph': { en: 'Note (optional)', ar: 'ملاحظة (اختياري)' },
  'marker.field.feedback': { en: 'Final feedback', ar: 'الملاحظات النهائية' },
  'marker.field.feedback_ph': {
    en: 'The feedback the corpus will learn from…',
    ar: 'الملاحظات اللي بتتعلّم منها قاعدة البيانات…',
  },
  'marker.field.reason': { en: 'Adjustment reason', ar: 'سبب التعديل' },
  'marker.field.reason_ph': {
    en: 'Why did you change the AI mark/feedback? (training signal)',
    ar: 'ليش غيّرت درجة/ملاحظات الذكاء؟ (إشارة تدريب)',
  },
  'marker.field.reason_hint': {
    en: 'You changed the draft - a reason is required.',
    ar: 'عدّلت المسودّة - لازم تكتب سبب.',
  },

  // Validation
  'marker.review.reason_required': {
    en: 'Add an adjustment reason - this is the training signal whenever you change the mark or feedback.',
    ar: 'أضف سبب تعديل - هذي إشارة التدريب كل ما تغيّر الدرجة أو الملاحظات.',
  },
  'marker.review.grade_required': { en: 'Choose a final mark.', ar: 'اختر درجة نهائية.' },
  'marker.review.submit_failed': {
    en: 'Could not save your review.',
    ar: 'ما قدرنا نحفظ مراجعتك.',
  },

  // Action buttons
  'marker.action.approve': { en: 'Approve & next', ar: 'اعتمد والتالي' },
  'marker.action.correct': { en: 'Correct & next', ar: 'صحّح والتالي' },
  'marker.action.reject': { en: 'Reject', ar: 'ارفض' },
  'marker.action.skip': { en: 'Skip', ar: 'تخطَّ' },
  'marker.action.hint': {
    en: 'Approving makes this script corpus-eligible for training.',
    ar: 'الاعتماد يخلّي هالإجابة مؤهّلة للتدريب ضمن قاعدة البيانات.',
  },

  // Progress
  'marker.progress.remaining': { en: 'In this batch', ar: 'في هالدفعة' },

  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-pay - Marker Pay & Throughput  (admin.marker_pay.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.marker_pay.title': { en: 'Marker Pay & Throughput', ar: 'دفعات المصحّحين والإنتاجية' },
  'admin.marker_pay.subtitle': {
    en: 'Approved-script counts and pay due per paid marker for the selected period. An approved script is a distinct submission with an approving (approved/corrected) teacher moderation, attributed by reviewer or assignment.',
    ar: 'عدد الإجابات المعتمدة والمبلغ المستحق لكل مصحّح مدفوع للفترة المحدّدة. الإجابة المعتمدة هي تسليم مميّز عليه مراجعة معلّم باعتماد (معتمدة/مصحّحة)، منسوبة حسب المراجِع أو التوزيع.',
  },
  'admin.marker_pay.error_load': {
    en: 'Failed to load marker pay data.',
    ar: 'ما قدرنا نحمّل بيانات دفعات المصحّحين.',
  },
  'admin.marker_pay.note.unavailable': {
    en: 'Some data is currently unavailable:',
    ar: 'بعض البيانات مو متوفّرة حالياً:',
  },
  'admin.marker_pay.from': { en: 'From', ar: 'من' },
  'admin.marker_pay.to': { en: 'To', ar: 'إلى' },
  'admin.marker_pay.apply': { en: 'Apply', ar: 'تطبيق' },
  'admin.marker_pay.export_csv': { en: 'Export CSV', ar: 'تصدير CSV' },

  // Totals
  'admin.marker_pay.stat.markers': { en: 'Markers', ar: 'المصحّحون' },
  'admin.marker_pay.stat.scripts': { en: 'Approved scripts', ar: 'الإجابات المعتمدة' },
  'admin.marker_pay.stat.gold': { en: 'Gold scripts', ar: 'إجابات Gold' },
  'admin.marker_pay.stat.amount': { en: 'Total due', ar: 'الإجمالي المستحق' },

  // Table columns
  'admin.marker_pay.col.marker': { en: 'Marker', ar: 'المصحّح' },
  'admin.marker_pay.col.email': { en: 'Email', ar: 'الإيميل' },
  'admin.marker_pay.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.marker_pay.col.rate': { en: 'Rate (p/script)', ar: 'السعر (بنس/إجابة)' },
  'admin.marker_pay.col.scripts': { en: 'Approved', ar: 'معتمدة' },
  'admin.marker_pay.col.gold': { en: 'Gold', ar: 'Gold' },
  'admin.marker_pay.col.nongold': { en: 'Non-gold', ar: 'غير Gold' },
  'admin.marker_pay.col.amount': { en: 'Amount', ar: 'المبلغ' },

  'admin.marker_pay.rate_missing': {
    en: 'No pay rate set for this marker - amount is £0 until configured.',
    ar: 'ما في سعر دفع محدّد لهذا المصحّح - المبلغ £0 لين يتضبط.',
  },
  'admin.marker_pay.none': {
    en: 'No markers found for this period.',
    ar: 'ما في مصحّحين لهذي الفترة.',
  },
  'admin.marker_pay.totals': { en: 'Totals', ar: 'الإجماليات' },

  // ─────────────────────────────────────────────────────────────────────────
  // /admin/marker-qa - Marker QA scorecard  (admin.mqa.*)
  // ─────────────────────────────────────────────────────────────────────────
  'admin.mqa.title': {
    en: 'Marker QA - gold calibration & inter-marker agreement',
    ar: 'جودة المصحّحين - معايرة Gold والتوافق بين المصحّحين',
  },
  'admin.mqa.error_load': {
    en: 'Could not load the marker QA scorecard.',
    ar: 'ما قدرنا نحمّل بطاقة جودة المصحّحين.',
  },

  // Totals
  'admin.mqa.stat.markers': { en: 'Markers', ar: 'المصحّحون' },
  'admin.mqa.stat.gold': { en: 'Gold items', ar: 'عناصر Gold' },
  'admin.mqa.stat.approved_gold': { en: 'Approved gold', ar: 'Gold معتمدة' },
  'admin.mqa.stat.approved_total': { en: 'Approved total', ar: 'إجمالي المعتمدة' },
  'admin.mqa.stat.shared': { en: 'Shared scripts', ar: 'إجابات مشتركة' },

  // Thresholds line
  'admin.mqa.thresholds_label': { en: 'QA thresholds', ar: 'حدود الجودة' },
  'admin.mqa.th_exact': { en: 'gold exact ≥', ar: 'تطابق Gold تام ≥' },
  'admin.mqa.th_within1': { en: '±1 ≥', ar: '±1 ≥' },
  'admin.mqa.th_qwk': { en: 'grade QWK ≥', ar: 'QWK للدرجة ≥' },
  'admin.mqa.th_drift': { en: 'drift if last', ar: 'انحراف إذا آخر' },
  'admin.mqa.th_drift_tail': { en: 'gold drop ≥', ar: 'هبوط Gold ≥' },
  'admin.mqa.th_vs_baseline': { en: 'vs baseline', ar: 'مقارنة بالأساس' },

  // Per-marker gold accuracy
  'admin.mqa.per_marker': { en: 'Per-marker gold accuracy', ar: 'دقّة Gold لكل مصحّح' },
  'admin.mqa.no_gold': {
    en: 'No approved gold items yet.',
    ar: 'ما في عناصر Gold معتمدة للحين.',
  },
  'admin.mqa.col.marker': { en: 'Marker', ar: 'المصحّح' },
  'admin.mqa.col.scored': { en: 'Scored', ar: 'المُقيَّمة' },
  'admin.mqa.col.exact': { en: 'Exact', ar: 'تطابق تام' },
  'admin.mqa.col.within1': { en: '±1', ar: '±1' },
  'admin.mqa.col.mae': { en: 'MAE', ar: 'MAE' },
  'admin.mqa.col.qwk': { en: 'Grade QWK', ar: 'QWK للدرجة' },
  'admin.mqa.col.status': { en: 'Status', ar: 'الحالة' },
  'admin.mqa.badge.insufficient': { en: 'Insufficient data', ar: 'بيانات غير كافية' },
  'admin.mqa.badge.drift': { en: 'Drift', ar: 'انحراف' },
  'admin.mqa.badge.ok': { en: 'OK', ar: 'سليم' },

  // Inter-marker agreement
  'admin.mqa.inter': { en: 'Inter-marker agreement', ar: 'التوافق بين المصحّحين' },
  'admin.mqa.no_shared': {
    en: 'No scripts have been marked by two or more markers yet.',
    ar: 'ما في إجابات صحّحها مصحّحَين أو أكثر للحين.',
  },
  'admin.mqa.im.exact': { en: 'Pairwise exact', ar: 'تطابق تام للأزواج' },
  'admin.mqa.im.within1': { en: 'Pairwise ±1', ar: '±1 للأزواج' },
  'admin.mqa.im.mae': { en: 'Pairwise MAE', ar: 'MAE للأزواج' },
  'admin.mqa.im.qwk': { en: 'Pooled grade QWK', ar: 'QWK مجمّع للدرجة' },
  'admin.mqa.col.pair': { en: 'Marker pair', ar: 'زوج المصحّحين' },
  'admin.mqa.col.shared': { en: 'Shared', ar: 'مشتركة' },

  // Throughput
  'admin.mqa.throughput': {
    en: 'Throughput (approved per marker)',
    ar: 'الإنتاجية (المعتمدة لكل مصحّح)',
  },
  'admin.mqa.no_throughput': { en: 'No approved work yet.', ar: 'ما في شغل معتمد للحين.' },
  'admin.mqa.col.approved': { en: 'Approved', ar: 'معتمدة' },
  'admin.mqa.col.assigned': { en: 'Assigned', ar: 'موزّعة' },

  // Board / paper slices
  'admin.mqa.slices': {
    en: 'Gold accuracy by board / paper',
    ar: 'دقّة Gold حسب البورد / الورقة',
  },
  'admin.mqa.filter.all': { en: 'All boards', ar: 'كل البوردات' },
  'admin.mqa.by_board': { en: 'By board', ar: 'حسب البورد' },
  'admin.mqa.by_paper': { en: 'By paper', ar: 'حسب الورقة' },
  'admin.mqa.no_slice': { en: 'No data.', ar: 'ما في بيانات.' },
  'admin.mqa.col.slice': { en: 'Slice', ar: 'الشريحة' },
  'admin.mqa.col.n': { en: 'n', ar: 'العدد' },

  // Gold-item manager
  'admin.mqa.gold_mgr': { en: 'Mark a submission as gold', ar: 'علّم تسليم كـ Gold' },
  'admin.mqa.gold_help': {
    en: 'Sets the expert-true mark/grade on an existing queue item and inserts it blind into the assigned marker’s queue. The expected answer is never shown to markers.',
    ar: 'يحدّد الدرجة/التقدير الصحيح من الخبير على عنصر موجود بالقائمة ويدخله بشكل أعمى في قائمة المصحّح المعيَّن. الإجابة المتوقّعة ما تنعرض للمصحّحين أبداً.',
  },
  'admin.mqa.f.submission': { en: 'Submission ID', ar: 'معرّف التسليم' },
  'admin.mqa.f.mark': { en: 'Expert mark', ar: 'درجة الخبير' },
  'admin.mqa.f.grade': { en: 'Expert grade', ar: 'تقدير الخبير' },
  'admin.mqa.f.saving': { en: 'Saving…', ar: 'يحفظ…' },
  'admin.mqa.f.submit': { en: 'Mark as gold', ar: 'علّم كـ Gold' },
  'admin.mqa.gold_ok': { en: 'Marked as gold.', ar: 'تعلّم كـ Gold.' },
  'admin.mqa.gold_fail': {
    en: 'Could not mark this submission as gold.',
    ar: 'ما قدرنا نعلّم هذا التسليم كـ Gold.',
  },
}
