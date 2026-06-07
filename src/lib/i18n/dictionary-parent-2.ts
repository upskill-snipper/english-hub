/**
 * Parent-namespace dictionary - Bucket A, Tier-2, SECOND alphabetical half.
 *
 * Covers `parent.linked_child` → `parent.your_password_placeholder`
 * (the ~127 keys after the alphabetical median; the FIRST half lives in a
 * sibling dictionary-parent-1.ts authored by a parallel agent - split point
 * is between `parent.link_your_child_desc` and `parent.linked_child` so the
 * two files are exact complements with zero overlap).
 *
 * English authored fresh against the real consuming components under
 * src/app/parent/** and src/components/parent - the dictionary-audit-fix.ts
 * source for these keys is title-cased junk and was NOT copied. Arabic is
 * genuine warm Khaleeji (Gulf) register for parents, matching the voice of
 * src/lib/eal/curriculum.ts and the existing parent.weekly.* entries.
 *
 * Screenshot-fixes keys whose ar already differs from en (already correct
 * Khaleeji) are intentionally OMITTED here - they remain owned by
 * dictionary-screenshot-fixes.ts.
 *
 * Imported and chained into lookup() in ./dictionary.ts.
 */
export const PARENT_2_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── Settings: account / linked child ────────────────────────────
  // NOTE: 'parent.linked_child' lives in PARENT_1_DICTIONARY (wired
  // before PARENT_2 in the resolver chain). Deduped here to keep a
  // single source of truth.
  'parent.linked_to_prefix': { en: 'Linked to', ar: 'تم الربط مع', es: 'Vinculado a' },
  'parent.linking': { en: 'Linking…', ar: 'يتم الربط…', es: 'Vinculando…' },

  // ─── Loading states ──────────────────────────────────────────────
  'parent.loading_activity': {
    en: 'Loading activity…',
    ar: 'يتم تحميل النشاط…',
    es: 'Cargando actividad…',
  },
  'parent.loading_dashboard': {
    en: 'Loading your dashboard…',
    ar: 'يتم تحميل لوحتك…',
    es: 'Cargando tu panel…',
  },
  'parent.loading_progress': {
    en: 'Loading progress…',
    ar: 'يتم تحميل التقدّم…',
    es: 'Cargando progreso…',
  },

  // ─── Login / auth ────────────────────────────────────────────────
  'parent.log_in': { en: 'Log in', ar: 'تسجيل الدخول', es: 'Iniciar sesión' },
  'parent.manage_billing': {
    en: 'Manage billing',
    ar: 'إدارة الفوترة',
    es: 'Gestionar facturación',
  },
  'parent.network_error': {
    en: 'Network problem - please check your connection and try again.',
    ar: 'في مشكلة بالاتصال - تأكّد من الإنترنت وجرّب مرّة ثانية.',
    es: 'Problema de red: comprueba tu conexión e inténtalo de nuevo.',
  },
  'parent.new_password': { en: 'New password', ar: 'كلمة المرور الجديدة', es: 'Nueva contraseña' },
  'parent.no_account_prompt': {
    en: "Don't have an account yet?",
    ar: 'ما عندك حساب لين الحين؟',
    es: '¿Aún no tienes una cuenta?',
  },

  // ─── Empty states ────────────────────────────────────────────────
  'parent.no_activity_yet': {
    en: 'No activity yet - it will appear here as your child studies.',
    ar: 'ما في نشاط لين الحين - بيظهر هنا أول ما يبدأ طفلك يذاكر.',
    es: 'Aún no hay actividad: aparecerá aquí a medida que tu hijo estudie.',
  },
  'parent.no_games_yet': {
    en: 'No games played yet.',
    ar: 'ما في ألعاب انلعبت لين الحين.',
    es: 'Aún no se ha jugado a ningún juego.',
  },
  'parent.no_poems_yet': {
    en: 'No poems studied yet.',
    ar: 'ما في قصائد اندرست لين الحين.',
    es: 'Aún no se ha estudiado ningún poema.',
  },
  'parent.no_quiz_results_this_week': {
    en: 'No quiz results this week.',
    ar: 'ما في نتائج اختبارات هالأسبوع.',
    es: 'No hay resultados de cuestionarios esta semana.',
  },
  'parent.no_quizzes_yet': {
    en: 'No quizzes taken yet.',
    ar: 'ما في اختبارات انعطت لين الحين.',
    es: 'Aún no se ha realizado ningún cuestionario.',
  },

  // ─── Notification settings ───────────────────────────────────────
  'parent.notif_grade_desc': {
    en: 'Get an email when a quiz grade drops noticeably.',
    ar: 'يوصلك إيميل لمّا تنزل درجة اختبار بشكل ملحوظ.',
    es: 'Recibe un correo cuando la nota de un cuestionario baje de forma notable.',
  },
  'parent.notif_grade_label': { en: 'Grade alerts', ar: 'تنبيهات الدرجات', es: 'Alertas de notas' },
  'parent.notif_inactivity_desc': {
    en: "Get a nudge if your child hasn't studied in a while.",
    ar: 'يوصلك تذكير إذا طفلك ما ذاكر من فترة.',
    es: 'Recibe un aviso si tu hijo lleva un tiempo sin estudiar.',
  },
  'parent.notif_inactivity_label': {
    en: 'Inactivity reminders',
    ar: 'تذكيرات عدم النشاط',
    es: 'Recordatorios de inactividad',
  },
  'parent.notif_updates_desc': {
    en: 'Occasional news about new features and improvements.',
    ar: 'أخبار من وقت لوقت عن الميزات الجديدة والتحسينات.',
    es: 'Noticias ocasionales sobre nuevas funciones y mejoras.',
  },
  'parent.notif_updates_label': {
    en: 'Product updates',
    ar: 'تحديثات المنصّة',
    es: 'Novedades del producto',
  },
  'parent.notif_weekly_desc': {
    en: "A summary of your child's week, emailed every Sunday.",
    ar: 'ملخّص أسبوع طفلك، يوصلك بالإيميل كل يوم أحد.',
    es: 'Un resumen de la semana de tu hijo, enviado por correo cada domingo.',
  },
  'parent.notif_weekly_label': {
    en: 'Weekly report email',
    ar: 'إيميل التقرير الأسبوعي',
    es: 'Correo de informe semanal',
  },
  'parent.notification_settings': {
    en: 'Notification settings',
    ar: 'إعدادات الإشعارات',
    es: 'Ajustes de notificaciones',
  },
  'parent.notifications_desc': {
    en: 'Choose which emails you would like to receive.',
    ar: 'اختر الإيميلات اللي تحب توصلك.',
    es: 'Elige qué correos te gustaría recibir.',
  },
  'parent.notifications_title': { en: 'Notifications', ar: 'الإشعارات', es: 'Notificaciones' },

  // ─── Billing / add-on ────────────────────────────────────────────
  'parent.parent_addon': {
    en: 'Parent add-on',
    ar: 'إضافة ولي الأمر',
    es: 'Complemento para padres/madres',
  },
  'parent.parent_default_name': { en: 'Parent', ar: 'ولي الأمر', es: 'Padre/madre' },
  'parent.parent_login_subtitle': {
    en: "Sign in to follow your child's progress.",
    ar: 'سجّل دخولك عشان تتابع تقدّم طفلك.',
    es: 'Inicia sesión para seguir el progreso de tu hijo.',
  },
  'parent.parent_login_title': {
    en: 'Parent login',
    ar: 'دخول ولي الأمر',
    es: 'Acceso de padres/madres',
  },

  // ─── Password change ─────────────────────────────────────────────
  'parent.password_current_required': {
    en: 'Please enter your current password.',
    ar: 'دخّل كلمة المرور الحالية من فضلك.',
    es: 'Introduce tu contraseña actual.',
  },
  'parent.password_hint': {
    en: 'Use at least 8 characters for a strong password.',
    ar: 'استخدم 8 أحرف على الأقل عشان كلمة مرور قوية.',
    es: 'Usa al menos 8 caracteres para una contraseña segura.',
  },
  'parent.password_mismatch': {
    en: "The new passwords don't match.",
    ar: 'كلمتي المرور الجديدتين مو نفس الشي.',
    es: 'Las nuevas contraseñas no coinciden.',
  },
  'parent.password_placeholder': {
    en: 'Enter your password',
    ar: 'دخّل كلمة المرور',
    es: 'Introduce tu contraseña',
  },
  'parent.password_update_failed': {
    en: "We couldn't update your password. Please try again.",
    ar: 'ما قدرنا نحدّث كلمة المرور. جرّب مرّة ثانية.',
    es: 'No pudimos actualizar tu contraseña. Inténtalo de nuevo.',
  },
  'parent.password_updated': {
    en: 'Your password has been updated.',
    ar: 'تم تحديث كلمة المرور.',
    es: 'Tu contraseña se ha actualizado.',
  },

  // ─── Reports: week list ──────────────────────────────────────────
  'parent.past_4_weeks': { en: 'Past 4 weeks', ar: 'آخر 4 أسابيع', es: 'Últimas 4 semanas' },
  'parent.permanently_deleted_after': {
    en: 'Permanently deleted after',
    ar: 'يُحذف نهائياً بعد',
    es: 'Se elimina de forma permanente después de',
  },

  // ─── Recent activity rows ────────────────────────────────────────
  'parent.played_a_game': { en: 'Played a game', ar: 'لعب لعبة', es: 'Jugó a un juego' },
  'parent.played_count_suffix': { en: 'played', ar: 'انلعبت', es: 'jugados' },

  // ─── Progress: headline stats ────────────────────────────────────
  'parent.poems_label': { en: 'Poems', ar: 'القصائد', es: 'Poemas' },
  'parent.poems_studied_desc': {
    en: 'Poems your child has worked through.',
    ar: 'القصائد اللي خلّصها طفلك.',
    es: 'Poemas que tu hijo ha trabajado.',
  },
  'parent.poems_studied_title': {
    en: 'Poems studied',
    ar: 'القصائد المدروسة',
    es: 'Poemas estudiados',
  },
  'parent.poetry_revision': { en: 'Poetry revision', ar: 'مراجعة الشعر', es: 'Repaso de poesía' },

  // ─── Reports preview ─────────────────────────────────────────────
  'parent.preview_badge': { en: 'Preview', ar: 'معاينة', es: 'Vista previa' },
  'parent.preview_note_prefix': {
    en: 'This is a preview. The full report is emailed every',
    ar: 'هذي معاينة. التقرير الكامل يوصلك بالإيميل كل',
    es: 'Esto es una vista previa. El informe completo se envía por correo cada',
  },
  'parent.preview_note_sunday': { en: 'Sunday', ar: 'يوم أحد', es: 'domingo' },

  // ─── Activity labels ─────────────────────────────────────────────
  'parent.quiz_completed': {
    en: 'Completed a quiz',
    ar: 'خلّص اختبار',
    es: 'Completó un cuestionario',
  },
  'parent.quiz_default': { en: 'Quiz', ar: 'اختبار', es: 'Cuestionario' },
  'parent.quiz_prefix': { en: 'Quiz:', ar: 'اختبار:', es: 'Cuestionario:' },
  'parent.quizzes_label': { en: 'Quizzes', ar: 'الاختبارات', es: 'Cuestionarios' },
  'parent.quizzes_taken': {
    en: 'Quizzes taken',
    ar: 'الاختبارات المنجزة',
    es: 'Cuestionarios realizados',
  },

  // ─── Read-only notice ────────────────────────────────────────────
  'parent.read_only_note': {
    en: "This is a read-only view of your child's progress.",
    ar: 'هذا عرض للقراءة فقط لتقدّم طفلك.',
    es: 'Esta es una vista de solo lectura del progreso de tu hijo.',
  },
  'parent.reading_age': { en: 'Reading age', ar: 'العمر القرائي', es: 'Edad lectora' },
  'parent.recent_activity': {
    en: 'Recent activity',
    ar: 'النشاط الأخير',
    es: 'Actividad reciente',
  },
  'parent.recent_activity_prefix': {
    en: 'What',
    ar: 'وش سوّى',
    es: 'En qué ha estado trabajando',
  },
  'parent.recent_activity_suffix': {
    en: 'has been working on lately.',
    ar: 'في الفترة الأخيرة.',
    es: 'últimamente.',
  },
  'parent.recent_quiz_scores': {
    en: 'Recent quiz scores',
    ar: 'درجات الاختبارات الأخيرة',
    es: 'Puntuaciones recientes de cuestionarios',
  },
  'parent.redirecting_dashboard': {
    en: 'Taking you to your dashboard…',
    ar: 'نوصّلك للوحتك…',
    es: 'Te llevamos a tu panel…',
  },
  'parent.request_data_deletion': {
    en: 'Request data deletion',
    ar: 'طلب حذف البيانات',
    es: 'Solicitar eliminación de datos',
  },

  // ─── Data-retention rows (delete-data) ───────────────────────────
  'parent.ret_audit_desc': {
    en: 'Security and access logs are kept for audit purposes.',
    ar: 'سجلات الأمان والدخول تنحفظ لأغراض التدقيق.',
    es: 'Los registros de seguridad y acceso se conservan con fines de auditoría.',
  },
  'parent.ret_audit_label': { en: 'Audit logs', ar: 'سجلات التدقيق', es: 'Registros de auditoría' },
  'parent.ret_payment_desc': {
    en: 'Payment records are retained as required by law.',
    ar: 'سجلات الدفع تنحفظ حسب ما يطلب القانون.',
    es: 'Los registros de pago se conservan conforme exige la ley.',
  },
  'parent.ret_payment_label': { en: 'Payment records', ar: 'سجلات الدفع', es: 'Registros de pago' },
  'parent.ret_safeguarding_desc': {
    en: 'Safeguarding records are retained where legally required.',
    ar: 'سجلات حماية الأطفال تنحفظ حيث يلزم القانون.',
    es: 'Los registros de protección de menores se conservan cuando lo exige la ley.',
  },
  'parent.ret_safeguarding_label': {
    en: 'Safeguarding records',
    ar: 'سجلات حماية الأطفال',
    es: 'Registros de protección de menores',
  },

  // ─── Notification save ───────────────────────────────────────────
  'parent.save_preferences': {
    en: 'Save preferences',
    ar: 'حفظ التفضيلات',
    es: 'Guardar preferencias',
  },
  'parent.saved_dot': { en: 'Saved', ar: 'تم الحفظ', es: 'Guardado' },

  // ─── Delete-data scheduling ──────────────────────────────────────
  'parent.schedule_deletion_prefix': {
    en: 'Your data will be scheduled for deletion in',
    ar: 'بياناتك بتنجدول للحذف خلال',
    es: 'Tus datos se programarán para su eliminación en',
  },
  'parent.schedule_deletion_suffix': {
    en: 'days.',
    ar: 'أيام.',
    es: 'días.',
  },

  // ─── Activity meta ───────────────────────────────────────────────
  'parent.score_prefix': { en: 'Score:', ar: 'النتيجة:', es: 'Puntuación:' },
  'parent.scored_label': { en: 'Scored', ar: 'حصل على', es: 'Obtuvo' },
  'parent.sections_visited_desc': {
    en: 'How much of the revision hub your child has covered.',
    ar: 'كم غطّى طفلك من مركز المراجعة.',
    es: 'Cuánto del centro de repaso ha cubierto tu hijo.',
  },
  'parent.select_week_preview': {
    en: 'Select a week to preview its report.',
    ar: 'اختر أسبوع عشان تشوف تقريره.',
    es: 'Selecciona una semana para previsualizar su informe.',
  },
  'parent.settings_subtitle': {
    en: 'Manage your account, notifications and privacy.',
    ar: 'أدِر حسابك والإشعارات والخصوصية.',
    es: 'Gestiona tu cuenta, las notificaciones y la privacidad.',
  },

  // ─── Login buttons / states ──────────────────────────────────────
  'parent.sign_in': { en: 'Sign in', ar: 'تسجيل الدخول', es: 'Iniciar sesión' },
  'parent.sign_up': { en: 'Sign up', ar: 'إنشاء حساب', es: 'Registrarse' },
  'parent.signing_in': { en: 'Signing in…', ar: 'يتم تسجيل الدخول…', es: 'Iniciando sesión…' },

  // ─── Progress stat suffixes ──────────────────────────────────────
  'parent.studied_count_suffix': { en: 'studied', ar: 'اندرست', es: 'estudiados' },
  'parent.studied_prefix': { en: 'Studied', ar: 'درس', es: 'Estudió' },
  'parent.submitting_deletion': {
    en: 'Submitting request…',
    ar: 'يتم إرسال الطلب…',
    es: 'Enviando solicitud…',
  },
  'parent.suggested_focus': {
    en: 'Suggested focus',
    ar: 'التركيز المقترح',
    es: 'Enfoque sugerido',
  },

  // ─── Time / relative dates ───────────────────────────────────────
  'parent.today': { en: 'Today', ar: 'اليوم', es: 'Hoy' },
  'parent.top_quiz_result': {
    en: 'Top quiz result',
    ar: 'أفضل نتيجة اختبار',
    es: 'Mejor resultado de cuestionario',
  },
  'parent.try_again': { en: 'Try again', ar: 'حاول مرّة ثانية', es: 'Inténtalo de nuevo' },

  // ─── Delete-data confirm typing ──────────────────────────────────
  'parent.type_label_prefix': { en: 'Type', ar: 'اكتب', es: 'Escribe' },
  'parent.type_label_suffix': { en: 'to confirm', ar: 'للتأكيد', es: 'para confirmar' },
  'parent.type_to_confirm_prefix': {
    en: 'To confirm, type',
    ar: 'للتأكيد، اكتب',
    es: 'Para confirmar, escribe',
  },
  'parent.type_to_confirm_suffix': {
    en: 'in the box below.',
    ar: 'في الخانة تحت.',
    es: 'en el campo de abajo.',
  },

  // ─── Password update button ──────────────────────────────────────
  'parent.update_password': {
    en: 'Update password',
    ar: 'تحديث كلمة المرور',
    es: 'Actualizar contraseña',
  },
  'parent.updating': { en: 'Updating…', ar: 'يتم التحديث…', es: 'Actualizando…' },
  'parent.use_signup_email': {
    en: 'Use the email address you signed up with.',
    ar: 'استخدم الإيميل اللي سجّلت فيه.',
    es: 'Usa la dirección de correo con la que te registraste.',
  },

  // ─── Dashboard quick links ───────────────────────────────────────
  'parent.view_detailed_progress': {
    en: 'View detailed progress',
    ar: 'عرض التقدّم المفصّل',
    es: 'Ver progreso detallado',
  },
  'parent.view_detailed_progress_desc': {
    en: 'Quiz scores, poems and reading age.',
    ar: 'درجات الاختبارات والقصائد والعمر القرائي.',
    es: 'Puntuaciones de cuestionarios, poemas y edad lectora.',
  },

  // ─── Delete-data confirmation copy ───────────────────────────────
  'parent.want_to_delete_prefix': {
    en: 'Are you sure you want to delete the data for',
    ar: 'متأكّد إنك تبي تحذف بيانات',
    es: '¿Seguro que quieres eliminar los datos de',
  },
  'parent.want_to_delete_suffix': {
    en: '? This cannot be undone.',
    ar: '؟ هذا الإجراء ما يمكن التراجع عنه.',
    es: '? Esta acción no se puede deshacer.',
  },

  // ─── Reports: relative week labels ───────────────────────────────
  'parent.week_ago_plural': { en: 'weeks ago', ar: 'أسابيع مضت', es: 'hace semanas' },
  'parent.week_ago_singular': { en: 'week ago', ar: 'أسبوع مضى', es: 'hace una semana' },
  'parent.week_by_week_activity': {
    en: 'Week-by-week activity',
    ar: 'النشاط أسبوعاً بأسبوع',
    es: 'Actividad semana a semana',
  },

  // ─── Weekly email reports ────────────────────────────────────────
  'parent.weekly_email_reports': {
    en: 'Weekly email reports',
    ar: 'تقارير البريد الأسبوعية',
    es: 'Informes semanales por correo',
  },
  'parent.weekly_email_reports_desc': {
    en: "A summary of your child's week, sent every Sunday.",
    ar: 'ملخّص أسبوع طفلك، يوصلك كل يوم أحد.',
    es: 'Un resumen de la semana de tu hijo, enviado cada domingo.',
  },
  'parent.weekly_report_for': {
    en: 'weekly report for',
    ar: 'التقرير الأسبوعي لـ',
    es: 'informe semanal de',
  },
  'parent.weekly_reports_subtitle_prefix': {
    en: 'A preview of the report emailed to',
    ar: 'معاينة للتقرير اللي يوصل بالإيميل إلى',
    es: 'Una vista previa del informe enviado por correo a',
  },
  'parent.weekly_reports_title': {
    en: 'Weekly reports',
    ar: 'التقارير الأسبوعية',
    es: 'Informes semanales',
  },

  // ─── Login welcome ───────────────────────────────────────────────
  'parent.welcome_back': {
    en: 'Welcome back',
    ar: 'حيّاك الله من جديد',
    es: 'Bienvenido de nuevo',
  },
  'parent.what_you_get': { en: 'What you get', ar: 'وش تحصل عليه', es: 'Lo que obtienes' },

  // ─── Link-child: where to find the code ──────────────────────────
  'parent.where_get_code_q': {
    en: 'Where do I find the code?',
    ar: 'وين ألقى الرمز؟',
    es: '¿Dónde encuentro el código?',
  },
  'parent.where_get_code_step1': {
    en: 'Ask your child to log in to their student dashboard.',
    ar: 'خلّ طفلك يسجّل دخوله في لوحة الطالب.',
    es: 'Pídele a tu hijo que inicie sesión en su panel de estudiante.',
  },
  'parent.where_get_code_step2': {
    en: 'They will find a 6-character link code in their account.',
    ar: 'بيلقى رمز ربط من 6 أحرف في حسابه.',
    es: 'Encontrará un código de vinculación de 6 caracteres en su cuenta.',
  },
  'parent.where_get_code_step3': {
    en: 'Enter that code above to link your accounts.',
    ar: 'دخّل الرمز فوق عشان تربط حسابيكم.',
    es: 'Introduce ese código arriba para vincular vuestras cuentas.',
  },

  // ─── Progress: reading-age unit ──────────────────────────────────
  'parent.years_estimated': { en: 'years (estimated)', ar: 'سنة (تقديري)', es: 'años (estimado)' },
  'parent.yesterday': { en: 'Yesterday', ar: 'أمس', es: 'Ayer' },
  'parent.your_child_capitalized': { en: 'Your child', ar: 'طفلك', es: 'Tu hijo' },
  'parent.your_details': { en: 'Your details', ar: 'بياناتك', es: 'Tus datos' },
  'parent.your_email_default': {
    en: 'you@example.com',
    ar: 'you@example.com',
    es: 'you@example.com',
  },
  'parent.your_password_placeholder': {
    en: 'Enter your password',
    ar: 'دخّل كلمة المرور',
    es: 'Introduce tu contraseña',
  },
}
