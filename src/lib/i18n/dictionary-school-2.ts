/**
 * Bucket-A Tier-2 curated bilingual dictionary - SECOND alphabetical half
 * of the `school.*` namespace, plus the full `growth.*` and `toolkit.*`
 * namespaces.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * These keys previously resolved against AUDIT_FIX_DICTIONARY, whose
 * values are auto-generated junk: the EN is a Title-cased path fragment
 * ("Subtitle", "Title Placeholder", "Desc") and the AR is broken
 * machine output (Latin shards, mojibake, mixed scripts). On the authed
 * school dashboard and the public /growth + /toolkit surfaces this meant
 * English/garbage rendered even in Arabic mode. Each entry below was
 * authored fresh by reading the consuming component and writing the
 * correct on-brand English for that exact UI slot, then a genuine
 * Khaleeji Arabic rendering.
 *
 * SCOPE (no overlap with dictionary-school-1.ts):
 *   The full sorted `school.*` Bucket-A list is split at its alphabetical
 *   median. Part-1 owns the FIRST half (… up to and including
 *   `school.calendar.cancel`). THIS file owns the SECOND half, which
 *   begins at `school.calendar.class` and runs through
 *   `school.settings.title` - i.e. the calendar grid/dialog, the lessons
 *   library + lesson-plan detail, and the entire School Settings page
 *   (profile, subscription, admins, notifications, security, GDPR, join
 *   code). Plus every `growth.*` (public traction dashboard) and every
 *   `toolkit.*` (student Toolkit hub + progress preview) key.
 *
 * Khaleeji conventions (mirrored from dictionary.ts / dictionary-toolkit.ts):
 *   أبغى, شوف, دوّر, الحين, ببلاش, لحظة, إحنا, سكّر, روح, على مقاسك
 *   BANNED (Levantine): شو, بحكي, كيفك, ليش
 *   Register: clean Gulf SaaS-dashboard MSA for labels/buttons; natural
 *   Gulf colloquial for body/help/toast copy (voice of
 *   src/lib/eal/curriculum.ts).
 *   Latin retention per Gulf convention: brand names (The English Hub),
 *   exam codes (GCSE, IGCSE, A-Level, AQA, OCR, Edexcel, WJEC, Eduqas,
 *   CAIE), product nouns (Toolkit, PPTX, PDF, AI, GDPR, 2FA), join-code
 *   literals and DELETE confirmation token stay in Latin script.
 *   GENDER POLICY: binary M/F, masculine second person by default
 *   (matches action.* / tools.* in dictionary.ts).
 *
 * Merged into the master lookup by dictionary.ts → lookup(); placed in
 * the curated-override tier BEFORE AUDIT_FIX so genuine copy wins over
 * the junk it replaces. This file only defines data - wiring lives in
 * dictionary.ts and is owned by the integrating change.
 */

export const SCHOOL_2_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ─── School · Revision Calendar (/school/calendar) ──────────────────
  // Exam-aware planning calendar: month/week grid, board+class filters,
  // drag-drop lesson slots, an add-lesson dialog, and a revision
  // countdown mode. Filter dropdown labels double as <SelectValue>
  // placeholders.
  'school.calendar.class': { en: 'Class', ar: 'الصف', es: 'Clase' },
  'school.calendar.exam_board': { en: 'Exam board', ar: 'لجنة الامتحان', es: 'Junta examinadora' },
  'school.calendar.lesson.date_label': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
  'school.calendar.lesson.period': { en: 'Period', ar: 'الحصة', es: 'Hora lectiva' },
  'school.calendar.lesson.period_placeholder': {
    en: 'e.g. Period 3',
    ar: 'مثال: الحصة 3',
    es: 'p. ej. Hora 3',
  },
  'school.calendar.lesson.subject': { en: 'Subject', ar: 'المادة', es: 'Asignatura' },
  'school.calendar.lesson.subject_placeholder': {
    en: 'e.g. English Literature',
    ar: 'مثال: English Literature',
    es: 'p. ej. English Literature',
  },
  'school.calendar.lesson.title': {
    en: 'Lesson title',
    ar: 'عنوان الدرس',
    es: 'Título de la clase',
  },
  'school.calendar.lesson.title_placeholder': {
    en: 'e.g. Macbeth - Act 1 analysis',
    ar: 'مثال: Macbeth - تحليل الفصل الأول',
    es: 'p. ej. Macbeth - análisis del Acto 1',
  },
  'school.calendar.month': { en: 'Month', ar: 'شهر', es: 'Mes' },
  'school.calendar.print': { en: 'Print', ar: 'اطبع', es: 'Imprimir' },
  'school.calendar.revision_countdown.subtitle': {
    en: 'A week-by-week revision plan running up to each exam.',
    ar: 'خطة مراجعة أسبوع بأسبوع توصلك لكل امتحان.',
    es: 'Un plan de repaso semana a semana hasta cada examen.',
  },
  'school.calendar.revision_countdown.title': {
    en: 'Revision countdown',
    ar: 'العد التنازلي للمراجعة',
    es: 'Cuenta atrás para el repaso',
  },
  'school.calendar.revision_mode': {
    en: 'Revision mode',
    ar: 'وضع المراجعة',
    es: 'Modo repaso',
  },
  'school.calendar.subtitle': {
    en: 'Track exam dates, schedule lessons, and plan revision for every class.',
    ar: 'تابع تواريخ الامتحانات، رتّب الدروس، وخطّط المراجعة لكل صف.',
    es: 'Sigue las fechas de examen, programa clases y planifica el repaso de cada clase.',
  },
  'school.calendar.title': { en: 'Calendar', ar: 'التقويم', es: 'Calendario' },
  'school.calendar.today': { en: 'Today', ar: 'اليوم', es: 'Hoy' },
  'school.calendar.week': { en: 'Week', ar: 'أسبوع', es: 'Semana' },

  // ─── School · Lessons (/school/lessons + /[lessonId]) ───────────────
  // Lesson-plan library list, analytics-driven recommendations, and the
  // printable lesson-plan detail page (objectives, success criteria,
  // prior knowledge, resources, lesson structure).
  'school.lessons.assign_to_class': {
    en: 'Assign to class',
    ar: 'إسناد لصف',
    es: 'Asignar a una clase',
  },
  'school.lessons.back': {
    en: 'Back to lessons',
    ar: 'الرجوع للدروس',
    es: 'Volver a las lecciones',
  },
  'school.lessons.collapse_all': { en: 'Collapse all', ar: 'طيّ الكل', es: 'Contraer todo' },
  'school.lessons.expand_all': { en: 'Expand all', ar: 'توسيع الكل', es: 'Expandir todo' },
  'school.lessons.library.all_boards': {
    en: 'All boards',
    ar: 'كل اللجان',
    es: 'Todas las juntas',
  },
  'school.lessons.library.all_years': {
    en: 'All year groups',
    ar: 'كل المراحل',
    es: 'Todos los cursos',
  },
  'school.lessons.library.board': { en: 'Board', ar: 'اللجنة', es: 'Junta' },
  'school.lessons.library.clear_filters': {
    en: 'Clear filters',
    ar: 'مسح الفلاتر',
    es: 'Borrar filtros',
  },
  'school.lessons.library.presentations_suffix': {
    en: 'presentations',
    ar: 'عرض تقديمي',
    es: 'presentaciones',
  },
  'school.lessons.library.search_placeholder': {
    en: 'Search presentations…',
    ar: 'دوّر في العروض…',
    es: 'Buscar presentaciones…',
  },
  'school.lessons.library.subtitle': {
    en: 'Ready-made slide decks for every year group - preview and download as PowerPoint.',
    ar: 'عروض شرائح جاهزة لكل مرحلة - عاينها ونزّلها كملف PowerPoint.',
    es: 'Presentaciones listas para cada curso: previsualízalas y descárgalas como PowerPoint.',
  },
  'school.lessons.library.title': {
    en: 'Presentation library',
    ar: 'مكتبة العروض التقديمية',
    es: 'Biblioteca de presentaciones',
  },
  'school.lessons.library.total_slides_suffix': {
    en: 'total slides',
    ar: 'إجمالي الشرائح',
    es: 'diapositivas en total',
  },
  'school.lessons.library.year_group': {
    en: 'Year group',
    ar: 'المرحلة الدراسية',
    es: 'Curso',
  },
  'school.lessons.library.year_groups_suffix': {
    en: 'year groups',
    ar: 'مراحل دراسية',
    es: 'cursos',
  },
  'school.lessons.minutes': { en: 'minutes', ar: 'دقيقة', es: 'minutos' },
  'school.lessons.print_plan': {
    en: 'Print plan',
    ar: 'اطبع الخطة',
    es: 'Imprimir plan',
  },
  'school.lessons.section.learning_objectives': {
    en: 'Learning objectives',
    ar: 'أهداف التعلّم',
    es: 'Objetivos de aprendizaje',
  },
  'school.lessons.section.lesson_structure': {
    en: 'Lesson structure',
    ar: 'هيكل الدرس',
    es: 'Estructura de la clase',
  },
  'school.lessons.section.prior_knowledge': {
    en: 'Prior knowledge',
    ar: 'المعرفة السابقة',
    es: 'Conocimientos previos',
  },
  'school.lessons.section.resources_needed': {
    en: 'Resources needed',
    ar: 'الموارد المطلوبة',
    es: 'Recursos necesarios',
  },
  'school.lessons.section.success_criteria': {
    en: 'Success criteria',
    ar: 'معايير النجاح',
    es: 'Criterios de éxito',
  },
  'school.lessons.suggested_by_analytics': {
    en: 'Suggested by analytics',
    ar: 'مقترح من التحليلات',
    es: 'Sugerido por las analíticas',
  },
  'school.lessons.text_label': { en: 'Set text', ar: 'النص المقرر', es: 'Texto prescrito' },

  // ─── School · Settings (/school/settings) ───────────────────────────
  // School-admin settings page. Sections: School Profile, Subscription &
  // Access, Admin Accounts, Notifications, Security, GDPR & Data, Join
  // Code. Save buttons toggle to a "saving" state; toasts confirm/err.

  // Admin accounts - promote/demote teachers ↔ admins.
  'school.settings.admins.add': { en: 'Add member', ar: 'إضافة عضو', es: 'Añadir miembro' },
  'school.settings.admins.demote': {
    en: 'Demote to teacher',
    ar: 'تخفيض إلى معلّم',
    es: 'Degradar a profesor',
  },
  'school.settings.admins.demoted_suffix': {
    en: 'is now a teacher',
    ar: 'صار الحين معلّم',
    es: 'ahora es profesor',
  },
  'school.settings.admins.desc': {
    en: 'Manage who can administer your school account and who has teacher access.',
    ar: 'تحكّم في مين يقدر يدير حساب مدرستك ومين عنده صلاحية معلّم.',
    es: 'Gestiona quién puede administrar la cuenta de tu centro y quién tiene acceso de profesor.',
  },
  'school.settings.admins.promote': {
    en: 'Promote to admin',
    ar: 'ترقية إلى مشرف',
    es: 'Ascender a administrador',
  },
  'school.settings.admins.promoted_suffix': {
    en: 'is now an admin',
    ar: 'صار الحين مشرف',
    es: 'ahora es administrador',
  },
  'school.settings.admins.role.admin': { en: 'Admin', ar: 'مشرف', es: 'Administrador' },
  'school.settings.admins.role.teacher': { en: 'Teacher', ar: 'معلّم', es: 'Profesor' },
  'school.settings.admins.saving': { en: 'Saving…', ar: 'جاري الحفظ…', es: 'Guardando…' },
  'school.settings.admins.title': {
    en: 'Admin accounts',
    ar: 'حسابات المشرفين',
    es: 'Cuentas de administrador',
  },
  'school.settings.admins.update_fail': {
    en: 'Could not update the role. Please try again.',
    ar: 'ما قدرنا نحدّث الصلاحية. حاول مرة ثانية.',
    es: 'No se pudo actualizar el rol. Inténtalo de nuevo.',
  },

  // GDPR & Data - export request + destructive school deletion.
  'school.settings.gdpr.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'school.settings.gdpr.confirm_delete': {
    en: 'Permanently delete school',
    ar: 'حذف المدرسة نهائيًا',
    es: 'Eliminar el centro de forma permanente',
  },
  'school.settings.gdpr.danger_body': {
    en: 'Deleting your school removes every student account, all submissions, and all analytics. This cannot be undone.',
    ar: 'حذف مدرستك يشيل كل حسابات الطلاب، وكل التسليمات، وكل التحليلات. ما يمكن التراجع عن هالخطوة.',
    es: 'Eliminar tu centro borra todas las cuentas de estudiantes, todas las entregas y todas las analíticas. Esta acción no se puede deshacer.',
  },
  'school.settings.gdpr.danger_zone': {
    en: 'Danger zone',
    ar: 'منطقة الخطر',
    es: 'Zona de peligro',
  },
  'school.settings.gdpr.delete_btn': {
    en: 'Delete school',
    ar: 'حذف المدرسة',
    es: 'Eliminar centro',
  },
  'school.settings.gdpr.delete_fail': {
    en: 'Deletion failed. Please contact support.',
    ar: 'فشل الحذف. تواصل مع الدعم.',
    es: 'No se pudo eliminar. Ponte en contacto con soporte.',
  },
  'school.settings.gdpr.delete_success': {
    en: 'School deletion has been scheduled.',
    ar: 'تمت جدولة حذف المدرسة.',
    es: 'Se ha programado la eliminación del centro.',
  },
  'school.settings.gdpr.deleting': {
    en: 'Deleting…',
    ar: 'جاري الحذف…',
    es: 'Eliminando…',
  },
  'school.settings.gdpr.desc': {
    en: 'Export your school data or request permanent deletion under GDPR.',
    ar: 'صدّر بيانات مدرستك أو اطلب الحذف النهائي بموجب GDPR.',
    es: 'Exporta los datos de tu centro o solicita su eliminación permanente conforme al GDPR.',
  },
  'school.settings.gdpr.export_btn': {
    en: 'Export school data',
    ar: 'تصدير بيانات المدرسة',
    es: 'Exportar datos del centro',
  },
  'school.settings.gdpr.export_fail': {
    en: 'Export request failed. Please try again.',
    ar: 'فشل طلب التصدير. حاول مرة ثانية.',
    es: 'La solicitud de exportación ha fallado. Inténtalo de nuevo.',
  },
  'school.settings.gdpr.export_success': {
    en: 'Export requested - we will email you a download link.',
    ar: 'تم طلب التصدير - بنرسل لك رابط التنزيل على الإيميل.',
    es: 'Exportación solicitada: te enviaremos por correo un enlace de descarga.',
  },
  'school.settings.gdpr.requesting': {
    en: 'Requesting…',
    ar: 'جاري الطلب…',
    es: 'Solicitando…',
  },
  'school.settings.gdpr.retention_body': {
    en: 'Student records are retained while your school is active and deleted within 30 days of account closure.',
    ar: 'سجلات الطلاب تنحفظ ما دامت مدرستك فعّالة، وتنحذف خلال 30 يوم من إغلاق الحساب.',
    es: 'Los registros de los estudiantes se conservan mientras tu centro esté activo y se eliminan en un plazo de 30 días tras el cierre de la cuenta.',
  },
  'school.settings.gdpr.retention_label': {
    en: 'Data retention',
    ar: 'الاحتفاظ بالبيانات',
    es: 'Conservación de datos',
  },
  'school.settings.gdpr.title': {
    en: 'GDPR & data',
    ar: 'GDPR والبيانات',
    es: 'GDPR y datos',
  },
  'school.settings.gdpr.type_delete_post': {
    en: 'to confirm.',
    ar: 'للتأكيد.',
    es: 'para confirmar.',
  },
  'school.settings.gdpr.type_delete_pre': {
    en: 'Type',
    ar: 'اكتب',
    es: 'Escribe',
  },

  // Join code - share with students to enrol them.
  'school.settings.joincode.body': {
    en: 'Students enter this code when signing up to join your school automatically.',
    ar: 'الطلاب يدخّلون هالكود وقت التسجيل عشان ينضمّون لمدرستك تلقائيًا.',
    es: 'Los estudiantes introducen este código al registrarse para unirse a tu centro automáticamente.',
  },
  'school.settings.joincode.copied': { en: 'Copied', ar: 'تم النسخ', es: 'Copiado' },
  'school.settings.joincode.copy': { en: 'Copy', ar: 'نسخ', es: 'Copiar' },
  'school.settings.joincode.copy_fail': {
    en: 'Could not copy the code.',
    ar: 'ما قدرنا ننسخ الكود.',
    es: 'No se pudo copiar el código.',
  },
  'school.settings.joincode.copy_success': {
    en: 'Join code copied to clipboard.',
    ar: 'تم نسخ كود الانضمام للحافظة.',
    es: 'Código de acceso copiado al portapapeles.',
  },
  'school.settings.joincode.desc': {
    en: 'Share this code so students can join your school.',
    ar: 'شارك هالكود عشان الطلاب يقدرون ينضمّون لمدرستك.',
    es: 'Comparte este código para que los estudiantes puedan unirse a tu centro.',
  },
  'school.settings.joincode.regen_fail': {
    en: 'Could not regenerate the code. Please try again.',
    ar: 'ما قدرنا نولّد كود جديد. حاول مرة ثانية.',
    es: 'No se pudo regenerar el código. Inténtalo de nuevo.',
  },
  'school.settings.joincode.regen_success': {
    en: 'A new join code has been generated.',
    ar: 'تم توليد كود انضمام جديد.',
    es: 'Se ha generado un nuevo código de acceso.',
  },
  'school.settings.joincode.regenerate': {
    en: 'Regenerate code',
    ar: 'توليد كود جديد',
    es: 'Regenerar código',
  },
  'school.settings.joincode.regenerating': {
    en: 'Regenerating…',
    ar: 'جاري التوليد…',
    es: 'Regenerando…',
  },
  'school.settings.joincode.title': {
    en: 'Join code',
    ar: 'كود الانضمام',
    es: 'Código de acceso',
  },

  // Notifications - email alerts for the school admin.
  'school.settings.notif.at_risk_desc': {
    en: 'Be alerted when a student is flagged as at risk of underperforming.',
    ar: 'يوصلك تنبيه لما طالب ينحدّد إنه معرّض لخطر ضعف الأداء.',
    es: 'Recibe un aviso cuando se señale a un estudiante en riesgo de bajo rendimiento.',
  },
  'school.settings.notif.at_risk_label': {
    en: 'At-risk student alerts',
    ar: 'تنبيهات الطلاب المعرّضين للخطر',
    es: 'Alertas de estudiantes en riesgo',
  },
  'school.settings.notif.desc': {
    en: 'Choose which email updates your school admins receive.',
    ar: 'اختر أي تحديثات إيميل بيستقبلها مشرفو مدرستك.',
    es: 'Elige qué novedades por correo reciben los administradores de tu centro.',
  },
  'school.settings.notif.new_student_desc': {
    en: 'Get an email each time a new student joins with your school code.',
    ar: 'يوصلك إيميل كل ما طالب جديد ينضم بكود مدرستك.',
    es: 'Recibe un correo cada vez que un nuevo estudiante se une con el código de tu centro.',
  },
  'school.settings.notif.new_student_label': {
    en: 'New student joins',
    ar: 'انضمام طالب جديد',
    es: 'Nuevas incorporaciones de estudiantes',
  },
  'school.settings.notif.save_btn': {
    en: 'Save preferences',
    ar: 'حفظ التفضيلات',
    es: 'Guardar preferencias',
  },
  'school.settings.notif.save_fail': {
    en: 'Could not save your preferences. Please try again.',
    ar: 'ما قدرنا نحفظ تفضيلاتك. حاول مرة ثانية.',
    es: 'No se pudieron guardar tus preferencias. Inténtalo de nuevo.',
  },
  'school.settings.notif.save_success': {
    en: 'Notification preferences saved.',
    ar: 'تم حفظ تفضيلات الإشعارات.',
    es: 'Preferencias de notificación guardadas.',
  },
  'school.settings.notif.saving': { en: 'Saving…', ar: 'جاري الحفظ…', es: 'Guardando…' },
  'school.settings.notif.title': {
    en: 'Notifications',
    ar: 'الإشعارات',
    es: 'Notificaciones',
  },
  'school.settings.notif.weekly_desc': {
    en: 'A weekly summary of student activity and progress across your school.',
    ar: 'ملخّص أسبوعي لنشاط الطلاب وتقدّمهم في مدرستك كلها.',
    es: 'Un resumen semanal de la actividad y el progreso de los estudiantes de todo tu centro.',
  },
  'school.settings.notif.weekly_label': {
    en: 'Weekly digest',
    ar: 'الملخّص الأسبوعي',
    es: 'Resumen semanal',
  },

  // School profile - name, type, board, curriculum, contact, logo.
  'school.settings.profile.address': { en: 'Address', ar: 'العنوان', es: 'Dirección' },
  'school.settings.profile.address_placeholder': {
    en: 'Street address',
    ar: 'عنوان الشارع',
    es: 'Dirección postal',
  },
  'school.settings.profile.city': { en: 'City', ar: 'المدينة', es: 'Ciudad' },
  'school.settings.profile.city_placeholder': {
    en: 'City',
    ar: 'المدينة',
    es: 'Ciudad',
  },
  'school.settings.profile.contact_email': {
    en: 'Contact email',
    ar: 'إيميل التواصل',
    es: 'Correo de contacto',
  },
  'school.settings.profile.contact_email_placeholder': {
    en: 'admin@yourschool.ac.uk',
    ar: 'admin@yourschool.ac.uk',
    es: 'admin@yourschool.ac.uk',
  },
  'school.settings.profile.curriculum_help': {
    en: 'Select every curriculum your school teaches.',
    ar: 'اختر كل منهج تدرّسه مدرستك.',
    es: 'Selecciona todos los planes de estudio que imparte tu centro.',
  },
  'school.settings.profile.curriculum_label': {
    en: 'Curriculum',
    ar: 'المنهج',
    es: 'Plan de estudios',
  },
  'school.settings.profile.desc': {
    en: "Your school's details and the curriculum you teach.",
    ar: 'تفاصيل مدرستك والمنهج اللي تدرّسه.',
    es: 'Los datos de tu centro y el plan de estudios que impartes.',
  },
  'school.settings.profile.exam_board': {
    en: 'Primary exam board',
    ar: 'لجنة الامتحان الرئيسية',
    es: 'Junta examinadora principal',
  },
  'school.settings.profile.exam_board_help': {
    en: 'Used to tailor exam dates and resources across the platform.',
    ar: 'تُستخدم لتخصيص تواريخ الامتحانات والموارد في المنصة كلها.',
    es: 'Se utiliza para adaptar las fechas de examen y los recursos en toda la plataforma.',
  },
  'school.settings.profile.exam_board_placeholder': {
    en: 'Select an exam board',
    ar: 'اختر لجنة امتحان',
    es: 'Selecciona una junta examinadora',
  },
  'school.settings.profile.logo_help': {
    en: 'PNG or SVG, up to 2 MB. Appears on printed resources.',
    ar: 'PNG أو SVG، لين 2 ميجابايت. يطلع على الموارد المطبوعة.',
    es: 'PNG o SVG, hasta 2 MB. Aparece en los recursos impresos.',
  },
  'school.settings.profile.logo_label': {
    en: 'School logo',
    ar: 'شعار المدرسة',
    es: 'Logotipo del centro',
  },
  'school.settings.profile.logo_text': { en: 'No logo', ar: 'بلا شعار', es: 'Sin logotipo' },
  'school.settings.profile.phone': { en: 'Phone', ar: 'الهاتف', es: 'Teléfono' },
  'school.settings.profile.phone_placeholder': {
    en: 'Phone number',
    ar: 'رقم الهاتف',
    es: 'Número de teléfono',
  },
  'school.settings.profile.postcode': {
    en: 'Postcode',
    ar: 'الرمز البريدي',
    es: 'Código postal',
  },
  'school.settings.profile.postcode_placeholder': {
    en: 'Postcode',
    ar: 'الرمز البريدي',
    es: 'Código postal',
  },
  'school.settings.profile.save_btn': {
    en: 'Save profile',
    ar: 'حفظ الملف',
    es: 'Guardar perfil',
  },
  'school.settings.profile.save_fail': {
    en: 'Could not save your profile. Please try again.',
    ar: 'ما قدرنا نحفظ ملفك. حاول مرة ثانية.',
    es: 'No se pudo guardar tu perfil. Inténtalo de nuevo.',
  },
  'school.settings.profile.save_success': {
    en: 'School profile saved.',
    ar: 'تم حفظ ملف المدرسة.',
    es: 'Perfil del centro guardado.',
  },
  'school.settings.profile.saving': { en: 'Saving…', ar: 'جاري الحفظ…', es: 'Guardando…' },
  'school.settings.profile.school_name': {
    en: 'School name',
    ar: 'اسم المدرسة',
    es: 'Nombre del centro',
  },
  'school.settings.profile.school_name_placeholder': {
    en: 'e.g. Westfield Academy',
    ar: 'مثال: Westfield Academy',
    es: 'p. ej. Westfield Academy',
  },
  'school.settings.profile.school_type': {
    en: 'School type',
    ar: 'نوع المدرسة',
    es: 'Tipo de centro',
  },
  'school.settings.profile.school_type_placeholder': {
    en: 'e.g. Secondary',
    ar: 'مثال: ثانوية',
    es: 'p. ej. Secundaria',
  },
  'school.settings.profile.title': {
    en: 'School profile',
    ar: 'ملف المدرسة',
    es: 'Perfil del centro',
  },
  'school.settings.profile.upload_logo': {
    en: 'Upload logo',
    ar: 'رفع الشعار',
    es: 'Subir logotipo',
  },

  // Security - password policy, session timeout, 2FA (coming soon).
  'school.settings.security.coming_soon': {
    en: 'Coming soon',
    ar: 'قريبًا',
    es: 'Próximamente',
  },
  'school.settings.security.desc': {
    en: 'Control password rules and session security for your school.',
    ar: 'تحكّم في قواعد كلمة المرور وأمان الجلسة لمدرستك.',
    es: 'Controla las reglas de contraseña y la seguridad de sesión de tu centro.',
  },
  'school.settings.security.password_policy': {
    en: 'Password policy',
    ar: 'سياسة كلمة المرور',
    es: 'Política de contraseñas',
  },
  'school.settings.security.policy.basic': {
    en: 'Basic - minimum 8 characters',
    ar: 'أساسية - 8 أحرف كحد أدنى',
    es: 'Básica - mínimo 8 caracteres',
  },
  'school.settings.security.policy.strong': {
    en: 'Strong - letters, numbers & symbols',
    ar: 'قوية - حروف وأرقام ورموز',
    es: 'Fuerte - letras, números y símbolos',
  },
  'school.settings.security.policy.very_strong': {
    en: 'Very strong - 12+ characters with symbols',
    ar: 'قوية جدًا - 12 حرف فأكثر مع رموز',
    es: 'Muy fuerte - 12 caracteres o más con símbolos',
  },
  'school.settings.security.policy_help': {
    en: 'Applies to every account in your school.',
    ar: 'تنطبق على كل حساب في مدرستك.',
    es: 'Se aplica a todas las cuentas de tu centro.',
  },
  'school.settings.security.save_btn': {
    en: 'Save security settings',
    ar: 'حفظ إعدادات الأمان',
    es: 'Guardar ajustes de seguridad',
  },
  'school.settings.security.save_fail': {
    en: 'Could not save security settings. Please try again.',
    ar: 'ما قدرنا نحفظ إعدادات الأمان. حاول مرة ثانية.',
    es: 'No se pudieron guardar los ajustes de seguridad. Inténtalo de nuevo.',
  },
  'school.settings.security.save_success': {
    en: 'Security settings saved.',
    ar: 'تم حفظ إعدادات الأمان.',
    es: 'Ajustes de seguridad guardados.',
  },
  'school.settings.security.saving': {
    en: 'Saving…',
    ar: 'جاري الحفظ…',
    es: 'Guardando…',
  },
  'school.settings.security.session_help': {
    en: 'Users are signed out automatically after this many minutes of inactivity.',
    ar: 'يتم تسجيل خروج المستخدمين تلقائيًا بعد هالعدد من الدقائق بلا نشاط.',
    es: 'La sesión de los usuarios se cierra automáticamente tras este número de minutos de inactividad.',
  },
  'school.settings.security.session_timeout': {
    en: 'Session timeout (minutes)',
    ar: 'مهلة الجلسة (دقائق)',
    es: 'Tiempo de espera de sesión (minutos)',
  },
  'school.settings.security.tfa_desc': {
    en: 'Require a second verification step when admins sign in.',
    ar: 'اطلب خطوة تحقّق ثانية وقت تسجيل دخول المشرفين.',
    es: 'Exige un segundo paso de verificación cuando los administradores inician sesión.',
  },
  'school.settings.security.tfa_label': {
    en: 'Two-factor authentication',
    ar: 'المصادقة الثنائية',
    es: 'Autenticación de dos factores',
  },
  'school.settings.security.title': { en: 'Security', ar: 'الأمان', es: 'Seguridad' },

  // Subscription & access - plan status, founder tier, billing contact.
  'school.settings.subscription.active': { en: 'Active', ar: 'فعّال', es: 'Activo' },
  'school.settings.subscription.billing_pre': {
    en: 'For billing questions or to change your plan, contact',
    ar: 'لأسئلة الفوترة أو لتغيير باقتك، تواصل مع',
    es: 'Para consultas de facturación o para cambiar de plan, ponte en contacto con',
  },
  'school.settings.subscription.contact_note': {
    en: 'Plans are managed by our team - no changes are made automatically.',
    ar: 'الباقات يديرها فريقنا - ما يصير أي تغيير تلقائي.',
    es: 'Los planes los gestiona nuestro equipo: no se realiza ningún cambio automáticamente.',
  },
  'school.settings.subscription.current_plan': {
    en: 'Current plan',
    ar: 'الباقة الحالية',
    es: 'Plan actual',
  },
  'school.settings.subscription.desc': {
    en: "Your school's plan and access level.",
    ar: 'باقة مدرستك ومستوى الوصول.',
    es: 'El plan de tu centro y su nivel de acceso.',
  },
  'school.settings.subscription.founder_note': {
    en: 'Full platform access with founding-school benefits.',
    ar: 'وصول كامل للمنصة مع مزايا المدارس المؤسِّسة.',
    es: 'Acceso completo a la plataforma con las ventajas de centro fundador.',
  },
  'school.settings.subscription.founder_plan': {
    en: 'Founding School',
    ar: 'مدرسة مؤسِّسة',
    es: 'Centro fundador',
  },
  'school.settings.subscription.founding_badge': {
    en: 'Founding member',
    ar: 'عضو مؤسِّس',
    es: 'Miembro fundador',
  },
  'school.settings.subscription.renew_btn': {
    en: 'Renew plan',
    ar: 'تجديد الباقة',
    es: 'Renovar plan',
  },
  'school.settings.subscription.standard_note': {
    en: 'Full access to all teaching and analytics tools.',
    ar: 'وصول كامل لكل أدوات التدريس والتحليلات.',
    es: 'Acceso completo a todas las herramientas de enseñanza y analíticas.',
  },
  'school.settings.subscription.standard_plan': {
    en: 'School Plan',
    ar: 'باقة المدرسة',
    es: 'Plan de centro',
  },
  'school.settings.subscription.title': {
    en: 'Subscription & access',
    ar: 'الاشتراك والوصول',
    es: 'Suscripción y acceso',
  },
  'school.settings.subscription.upgrade_btn': {
    en: 'Upgrade plan',
    ar: 'ترقية الباقة',
    es: 'Mejorar plan',
  },

  // Settings page header.
  'school.settings.subtitle': {
    en: 'Manage your school profile, team, security, and data.',
    ar: 'أدِر ملف مدرستك، الفريق، الأمان، والبيانات.',
    es: 'Gestiona el perfil de tu centro, el equipo, la seguridad y los datos.',
  },
  'school.settings.title': {
    en: 'School settings',
    ar: 'إعدادات المدرسة',
    es: 'Ajustes del centro',
  },

  // ─── Growth · Public traction dashboard (/growth) ───────────────────
  // A public trust artefact: live MAU, paying students, and essays-marked
  // counts, published for investors / partners / school buyers.
  'growth.as_of_pre': { en: 'As of', ar: 'حتى تاريخ', es: 'A fecha de' },
  'growth.footer.post': {
    en: ' for diligence access and a live data walkthrough.',
    ar: ' لوصول التدقيق وجولة على البيانات الحيّة.',
    es: ' para acceso de due diligence y un recorrido por los datos en vivo.',
  },
  'growth.footer.pre': {
    en: 'Investors and partners:',
    ar: 'المستثمرون والشركاء:',
    es: 'Inversores y socios:',
  },
  'growth.h1': {
    en: 'Our traction - in the open',
    ar: 'نموّنا - بشفافية',
    es: 'Nuestra tracción - a la vista de todos',
  },
  'growth.lead': {
    en: 'Live metrics for The English Hub, published straight from production. No vanity figures - these are the numbers we run the business on.',
    ar: 'مؤشرات حيّة لـ The English Hub، منشورة مباشرة من بيئة التشغيل. ما فيه أرقام للمظهر - هاي الأرقام اللي ندير فيها الشغل.',
    es: 'Métricas en vivo de The English Hub, publicadas directamente desde producción. Sin cifras de vanidad: estos son los números con los que gestionamos el negocio.',
  },
  'growth.stat.essays_hint': {
    en: 'Total essays marked by our AI to date',
    ar: 'إجمالي المقالات اللي صحّحها الـ AI لين الحين',
    es: 'Total de ensayos corregidos por nuestra IA hasta la fecha',
  },
  'growth.stat.essays_label': {
    en: 'Essays marked',
    ar: 'مقالات مُصحَّحة',
    es: 'Ensayos corregidos',
  },
  'growth.stat.mau_hint': {
    en: 'Unique users active in the last 30 days',
    ar: 'مستخدمون فريدون نشطوا في آخر 30 يوم',
    es: 'Usuarios únicos activos en los últimos 30 días',
  },
  'growth.stat.mau_label': {
    en: 'Monthly active users',
    ar: 'المستخدمون النشطون شهريًا',
    es: 'Usuarios activos mensuales',
  },
  'growth.stat.paying_hint': {
    en: 'Students on an active paid subscription',
    ar: 'طلاب على اشتراك مدفوع فعّال',
    es: 'Estudiantes con una suscripción de pago activa',
  },
  'growth.stat.paying_label': {
    en: 'Paying students',
    ar: 'طلاب مشتركون',
    es: 'Estudiantes de pago',
  },
  'growth.unavailable': {
    en: 'Live metrics are temporarily unavailable. Please check back shortly.',
    ar: 'المؤشرات الحيّة غير متاحة مؤقتًا. ارجع بعد شوي.',
    es: 'Las métricas en vivo no están disponibles temporalmente. Vuelve a comprobarlo en breve.',
  },

  // ─── Toolkit · Student hub (/toolkit) + progress preview ────────────
  // The student's personal learning command centre: AI study tools, a
  // progress preview row, dashboard sections, and a grade-predictor CTA.
  'toolkit.ai_heading': {
    en: 'AI study tools',
    ar: 'أدوات الدراسة بالذكاء الاصطناعي',
    es: 'Herramientas de estudio con IA',
  },
  'toolkit.crumb.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'toolkit.crumb.self': { en: 'Toolkit', ar: 'Toolkit', es: 'Toolkit' },
  'toolkit.dashboard_heading': {
    en: 'Dashboard & materials',
    ar: 'لوحة التحكم والمواد',
    es: 'Panel y materiales',
  },
  'toolkit.grade_predictor.body': {
    en: 'See your predicted GCSE grade based on your quiz and practice results.',
    ar: 'شوف درجة GCSE المتوقّعة لك بناءً على نتائج اختباراتك وتمارينك.',
    es: 'Consulta tu nota prevista de GCSE según los resultados de tus cuestionarios y prácticas.',
  },
  'toolkit.grade_predictor.h2': {
    en: 'Predict your GCSE grade',
    ar: 'توقّع درجة GCSE مالتك',
    es: 'Predice tu nota de GCSE',
  },
  'toolkit.h1': { en: 'Student Toolkit', ar: 'Toolkit الطالب', es: 'Toolkit del estudiante' },
  'toolkit.lead': {
    en: 'Your personal learning command centre. Build custom tests, generate revision notes, track progress, and predict your GCSE grade.',
    ar: 'مركز التعلّم الشخصي مالك. سوِّ اختبارات على مقاسك، ولّد ملاحظات مراجعة، تابع تقدّمك، وتوقّع درجة GCSE مالتك.',
    es: 'Tu centro de control de aprendizaje personal. Crea pruebas personalizadas, genera apuntes de repaso, sigue tu progreso y predice tu nota de GCSE.',
  },
  'toolkit.open_tool': { en: 'Open tool', ar: 'افتح الأداة', es: 'Abrir herramienta' },
  'toolkit.progress.avg_suffix': { en: 'avg', ar: 'معدّل', es: 'media' },
  'toolkit.progress.day': { en: 'day', ar: 'يوم', es: 'día' },
  'toolkit.progress.days': { en: 'days', ar: 'يوم', es: 'días' },
  'toolkit.progress.grade_prefix': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'toolkit.progress.poems_studied': {
    en: 'Poems studied',
    ar: 'قصائد مدروسة',
    es: 'Poemas estudiados',
  },
  'toolkit.progress.predicted_grade': {
    en: 'Predicted grade',
    ar: 'الدرجة المتوقّعة',
    es: 'Nota prevista',
  },
  'toolkit.progress.quizzes_taken': {
    en: 'Quizzes taken',
    ar: 'اختبارات مُنجَزة',
    es: 'Cuestionarios realizados',
  },
  'toolkit.progress.study_streak': {
    en: 'Study streak',
    ar: 'سلسلة المذاكرة',
    es: 'Racha de estudio',
  },
  'toolkit.progress.take_quizzes_hint': {
    en: 'Take a quiz to start',
    ar: 'سوِّ اختبار عشان تبدأ',
    es: 'Haz un cuestionario para empezar',
  },
}
