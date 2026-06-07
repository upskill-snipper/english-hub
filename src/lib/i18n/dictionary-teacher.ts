/**
 * dictionary-teacher.ts - Bucket A Tier-2b, `teacher.*` namespace.
 *
 * Covers the authed TEACHER dashboard i18n namespace - the
 * `teacher.home.*`, `teacher.layout.*`, `teacher.nav.*`,
 * `teacher.analytics.*`, `teacher.assignments.*`, `teacher.students.*`
 * and `teacher.resources.*` keys consumed by:
 *   - src/app/dashboard/teacher/page.tsx                       (home)
 *   - src/app/dashboard/teacher/layout.tsx                     (shell + nav)
 *   - src/app/dashboard/teacher/analytics/AnalyticsPageClient.tsx
 *   - src/app/dashboard/teacher/assignments/page.tsx
 *   - src/app/dashboard/teacher/students/page.tsx
 *   - src/app/dashboard/teacher/resources/page.tsx
 *
 * Before this file every one of these keys resolved ONLY via the
 * auto-generated dictionary-audit-fix.ts, whose entries are lazy
 * path-fragment placeholders ("Title", "Subtitle", "Heading", "Lead")
 * paired with broken machine Arabic - so the AR-mode teacher dashboard
 * rendered English junk / mojibake. The `teacher.nav.*`,
 * `teacher.analytics.skill.*` and `teacher.analytics.concern.*` keys
 * (referenced via `labelKey` / `skillKey` / `concernKey` indirection)
 * existed in NO dictionary at all and rendered as [[…]] placeholders.
 *
 * EN here is authored from the actual rendering position in the
 * components above (teacher-SaaS dashboard register), NOT copied from
 * the audit-fix junk. Arabic is genuine Khaleeji (Gulf) matching the
 * teacher/admin tone of src/lib/eal/curriculum.ts - not MSA, not
 * machine output. Education/exam terms (GCSE, IGCSE, AO1-AO4, AQA,
 * OCR, Edexcel, CIE, AFOREST) and the brand "The English Hub" stay in
 * Latin script per Gulf convention.
 *
 * Distinct from the `school.*` namespace (dictionary-school-1/2) and
 * the curated `teacher.dash.*` / `teacher.resource.*` keys already in
 * dictionary.ts - those are NOT duplicated here.
 *
 * Merged into the master lookup() in ./dictionary.ts as a curated
 * override tier (BEFORE the placeholder/audit supplements).
 */

import type { Dictionary } from './dictionary'

export const TEACHER_DICTIONARY: Dictionary = {
  // ── Shell / layout (src/app/dashboard/teacher/layout.tsx) ──────────────
  'teacher.layout.loading': {
    en: `Loading your dashboard…`,
    ar: `نحمّل لوحتك… لحظة`,
    es: `Cargando tu panel…`,
  },
  'teacher.layout.access_denied': {
    en: `Teacher access only`,
    ar: `الدخول للمعلّمين بس`,
    es: `Acceso solo para profesores`,
  },
  'teacher.layout.access_denied_body': {
    en: `This area is reserved for teacher and school accounts.`,
    ar: `هذي المنطقة مخصّصة لحسابات المعلّمين والمدارس بس.`,
    es: `Esta área está reservada para cuentas de profesores y centros.`,
  },
  'teacher.layout.access_denied_note': {
    en: `If you teach with us, register a teacher account or switch back to your student dashboard.`,
    ar: `إذا تدرّس معانا، سجّل حساب معلّم أو ارجع للوحة الطالب حقّتك.`,
    es: `Si enseñas con nosotros, registra una cuenta de profesor o vuelve a tu panel de estudiante.`,
  },
  'teacher.layout.go_student_dash': {
    en: `Go to student dashboard`,
    ar: `روح للوحة الطالب`,
    es: `Ir al panel de estudiante`,
  },
  'teacher.layout.register_teacher': {
    en: `Register as a teacher`,
    ar: `سجّل كمعلّم`,
    es: `Registrarse como profesor`,
  },
  'teacher.layout.brand': { en: `Teacher Hub`, ar: `لوحة المعلّم`, es: `Teacher Hub` },
  'teacher.layout.close_sidebar': { en: `Close menu`, ar: `سكّر القائمة`, es: `Cerrar menú` },
  'teacher.layout.open_sidebar': { en: `Open menu`, ar: `افتح القائمة`, es: `Abrir menú` },
  'teacher.layout.back_student_view': {
    en: `Back to student view`,
    ar: `ارجع لعرض الطالب`,
    es: `Volver a la vista de estudiante`,
  },
  'teacher.layout.topbar_title': {
    en: `Teacher Dashboard`,
    ar: `لوحة المعلّم`,
    es: `Panel del profesor`,
  },
  'teacher.layout.preview_title': {
    en: `Teacher tools - preview`,
    ar: `أدوات المعلّم - نسخة تجريبية`,
    es: `Herramientas para profesores - vista previa`,
  },
  'teacher.layout.preview_body_before': {
    en: `You're previewing the teacher dashboard with sample data. For early access with your real classes, get in touch at `,
    ar: `أنت تشوف لوحة المعلّم ببيانات تجريبية. للوصول المبكّر مع صفوفك الحقيقية، تواصل معنا على `,
    es: `Estás viendo una vista previa del panel del profesor con datos de ejemplo. Para acceso anticipado con tus clases reales, escríbenos a `,
  },
  'teacher.layout.preview_body_after': {
    en: ` and we'll set you up.`,
    ar: ` وإحنا نجهّزك.`,
    es: ` y te lo configuramos.`,
  },

  // ── Sidebar nav (layout.tsx - referenced via item.labelKey) ────────────
  'teacher.nav.dashboard': { en: `Dashboard`, ar: `اللوحة`, es: `Panel` },
  'teacher.nav.students': { en: `Students`, ar: `الطلاب`, es: `Estudiantes` },
  'teacher.nav.assignments': { en: `Assignments`, ar: `الواجبات`, es: `Tareas` },
  'teacher.nav.analytics': { en: `Analytics`, ar: `التحليلات`, es: `Analíticas` },
  'teacher.nav.resources': { en: `Resources`, ar: `الموارد`, es: `Recursos` },

  // ── Home (src/app/dashboard/teacher/page.tsx) ──────────────────────────
  'teacher.home.welcome_prefix': {
    en: `Welcome back, `,
    ar: `حيّاك، `,
    es: `Bienvenido de nuevo, `,
  },
  'teacher.home.welcome_suffix': { en: ``, ar: ``, es: `` },
  'teacher.home.intro': {
    en: `Here's how your classes are doing this week.`,
    ar: `هذا وضع صفوفك هذا الأسبوع.`,
    es: `Así van tus clases esta semana.`,
  },
  'teacher.home.stat.total_students': {
    en: `Total students`,
    ar: `مجموع الطلاب`,
    es: `Total de estudiantes`,
  },
  'teacher.home.stat.active_week': {
    en: `Active this week`,
    ar: `نشطين هذا الأسبوع`,
    es: `Activos esta semana`,
  },
  'teacher.home.grade_prefix': { en: `Grade`, ar: `الدرجة`, es: `Nota` },
  'teacher.home.stat.avg_grade': {
    en: `Average class grade`,
    ar: `متوسّط درجة الصف`,
    es: `Nota media de la clase`,
  },
  'teacher.home.stat.submissions_week': {
    en: `Submissions this week`,
    ar: `التسليمات هذا الأسبوع`,
    es: `Entregas esta semana`,
  },
  'teacher.home.action.view_student_work': {
    en: `View student work`,
    ar: `شوف شغل الطلاب`,
    es: `Ver el trabajo de los estudiantes`,
  },
  'teacher.home.action.assign_tasks': { en: `Assign tasks`, ar: `وزّع مهام`, es: `Asignar tareas` },
  'teacher.home.action.create_assessment': {
    en: `Create assessment`,
    ar: `أنشئ تقييم`,
    es: `Crear evaluación`,
  },
  'teacher.home.action.view_analytics': {
    en: `View analytics`,
    ar: `شوف التحليلات`,
    es: `Ver analíticas`,
  },
  'teacher.home.recent_submissions': {
    en: `Recent submissions`,
    ar: `آخر التسليمات`,
    es: `Entregas recientes`,
  },
  'teacher.home.view_all': { en: `View all`, ar: `شوف الكل`, es: `Ver todo` },
  'teacher.home.status.graded': { en: `Graded`, ar: `مصحّح`, es: `Calificado` },
  'teacher.home.status.pending': { en: `Pending`, ar: `قيد التصحيح`, es: `Pendiente` },
  'teacher.home.student_activity': {
    en: `Student activity`,
    ar: `نشاط الطلاب`,
    es: `Actividad de los estudiantes`,
  },
  'teacher.home.col.student': { en: `Student`, ar: `الطالب`, es: `Estudiante` },
  'teacher.home.activity.none': { en: `No activity`, ar: `ما في نشاط`, es: `Sin actividad` },
  'teacher.home.activity.low': { en: `Low activity`, ar: `نشاط قليل`, es: `Actividad baja` },
  'teacher.home.activity.medium': {
    en: `Moderate activity`,
    ar: `نشاط متوسّط`,
    es: `Actividad moderada`,
  },
  'teacher.home.activity.high': { en: `High activity`, ar: `نشاط عالي`, es: `Actividad alta` },
  'teacher.home.legend.less': { en: `Less`, ar: `أقل`, es: `Menos` },
  'teacher.home.legend.more': { en: `More`, ar: `أكثر`, es: `Más` },

  // ── Analytics (analytics/AnalyticsPageClient.tsx) ──────────────────────
  'teacher.analytics.title': {
    en: `Class Analytics`,
    ar: `تحليلات الصف`,
    es: `Analíticas de la clase`,
  },
  'teacher.analytics.subtitle': {
    en: `Track progress, spot trends, and find students who need support.`,
    ar: `تابع التقدّم، اكتشف الاتجاهات، ولقّط الطلاب اللي يبغون دعم.`,
    es: `Sigue el progreso, detecta tendencias y encuentra a los estudiantes que necesitan apoyo.`,
  },
  'teacher.analytics.export_soon': {
    en: `Export is coming soon - analytics download isn't available yet.`,
    ar: `التصدير قريب - تنزيل التحليلات لسّا ما هو متاح.`,
    es: `La exportación llegará pronto: la descarga de analíticas aún no está disponible.`,
  },
  'teacher.analytics.export': { en: `Export`, ar: `تصدير`, es: `Exportar` },
  'teacher.analytics.scores_over_time': {
    en: `Scores over time`,
    ar: `الدرجات عبر الوقت`,
    es: `Puntuaciones a lo largo del tiempo`,
  },
  'teacher.analytics.scores_caption': {
    en: `Average class grade by week, last 8 weeks.`,
    ar: `متوسّط درجة الصف لكل أسبوع، آخر 8 أسابيع.`,
    es: `Nota media de la clase por semana, últimas 8 semanas.`,
  },
  'teacher.analytics.skill_breakdown': {
    en: `Skill breakdown`,
    ar: `تفصيل المهارات`,
    es: `Desglose de habilidades`,
  },
  'teacher.analytics.skill_caption': {
    en: `Average performance across key writing skills.`,
    ar: `متوسّط الأداء في مهارات الكتابة الأساسية.`,
    es: `Rendimiento medio en las habilidades clave de escritura.`,
  },
  'teacher.analytics.skill.structure': { en: `Structure`, ar: `البناء`, es: `Estructura` },
  'teacher.analytics.skill.language': { en: `Language`, ar: `اللغة`, es: `Lenguaje` },
  'teacher.analytics.skill.grammar': { en: `Grammar`, ar: `القواعد`, es: `Gramática` },
  'teacher.analytics.skill.analysis': { en: `Analysis`, ar: `التحليل`, es: `Análisis` },
  'teacher.analytics.skill.creative': {
    en: `Creative writing`,
    ar: `الكتابة الإبداعية`,
    es: `Escritura creativa`,
  },
  'teacher.analytics.skill.exam': {
    en: `Exam technique`,
    ar: `أسلوب الامتحان`,
    es: `Técnica de examen`,
  },
  'teacher.analytics.at_risk_title': {
    en: `Students needing support`,
    ar: `طلاب يحتاجون دعم`,
    es: `Estudiantes que necesitan apoyo`,
  },
  'teacher.analytics.all_ok': {
    en: `No students flagged - everyone's on track.`,
    ar: `ما في طلاب محتاجين انتباه - الكل ماشي زين.`,
    es: `Ningún estudiante señalado: todos van por buen camino.`,
  },
  'teacher.analytics.trend.declining': { en: `Declining`, ar: `ينزل`, es: `En descenso` },
  'teacher.analytics.trend.stagnant': { en: `Stalled`, ar: `واقف`, es: `Estancado` },
  'teacher.analytics.concern.drop': {
    en: `Grades have dropped over the last few assignments.`,
    ar: `الدرجات نزلت في آخر كم واجب.`,
    es: `Las notas han bajado en las últimas tareas.`,
  },
  'teacher.analytics.concern.below': {
    en: `Consistently working below target grade.`,
    ar: `يشتغل دايم تحت الدرجة المستهدفة.`,
    es: `Trabaja de forma constante por debajo de la nota objetivo.`,
  },
  'teacher.analytics.concern.missed': {
    en: `Missed several recent submissions.`,
    ar: `فاتته كم تسليم أخير.`,
    es: `Ha faltado a varias entregas recientes.`,
  },
  'teacher.analytics.grade_prefix': { en: `Grade`, ar: `الدرجة`, es: `Nota` },
  'teacher.analytics.working_at': { en: `Working at`, ar: `يشتغل على`, es: `Nivel actual` },
  'teacher.analytics.view_profile': { en: `View profile`, ar: `شوف الملف`, es: `Ver perfil` },
  'teacher.analytics.summary': {
    en: `Term summary`,
    ar: `ملخّص الفصل`,
    es: `Resumen del trimestre`,
  },
  'teacher.analytics.total_students': {
    en: `Total students`,
    ar: `مجموع الطلاب`,
    es: `Total de estudiantes`,
  },
  'teacher.analytics.score_improvement': {
    en: `Average improvement`,
    ar: `متوسّط التحسّن`,
    es: `Mejora media`,
  },
  'teacher.analytics.need_support': {
    en: `Need support`,
    ar: `يحتاجون دعم`,
    es: `Necesitan apoyo`,
  },

  // ── Assignments (assignments/page.tsx) ─────────────────────────────────
  'teacher.assignments.title': { en: `Assignments`, ar: `الواجبات`, es: `Tareas` },
  'teacher.assignments.subtitle': {
    en: `Set tasks, track submissions, and give feedback.`,
    ar: `حدّد المهام، تابع التسليمات، وأعطِ ملاحظات.`,
    es: `Asigna tareas, sigue las entregas y da comentarios.`,
  },
  'teacher.assignments.new': { en: `New assignment`, ar: `واجب جديد`, es: `Nueva tarea` },
  'teacher.assignments.filter.all': { en: `All`, ar: `الكل`, es: `Todas` },
  'teacher.assignments.status.active': { en: `Active`, ar: `نشط`, es: `Activa` },
  'teacher.assignments.status.closed': { en: `Closed`, ar: `مقفول`, es: `Cerrada` },
  'teacher.assignments.status.draft': { en: `Draft`, ar: `مسوّدة`, es: `Borrador` },
  'teacher.assignments.empty': {
    en: `No assignments here yet.`,
    ar: `ما في واجبات هني بعد.`,
    es: `Aún no hay tareas aquí.`,
  },
  'teacher.assignments.due': { en: `Due`, ar: `آخر موعد`, es: `Entrega` },
  'teacher.assignments.submitted': { en: `Submitted`, ar: `سلّموا`, es: `Entregadas` },
  'teacher.assignments.graded': { en: `Graded`, ar: `مصحّح`, es: `Calificadas` },
  'teacher.assignments.action.view_submissions': {
    en: `View submissions`,
    ar: `شوف التسليمات`,
    es: `Ver entregas`,
  },
  'teacher.assignments.action.bulk_feedback': {
    en: `Bulk feedback`,
    ar: `ملاحظات جماعية`,
    es: `Comentarios en lote`,
  },
  'teacher.assignments.action.publish': { en: `Publish`, ar: `انشر`, es: `Publicar` },
  'teacher.assignments.action.edit': { en: `Edit`, ar: `تعديل`, es: `Editar` },
  'teacher.assignments.create.title': { en: `New assignment`, ar: `واجب جديد`, es: `Nueva tarea` },
  'teacher.assignments.create.close': { en: `Close`, ar: `سكّر`, es: `Cerrar` },
  'teacher.assignments.create.label.title': { en: `Title`, ar: `العنوان`, es: `Título` },
  'teacher.assignments.create.placeholder.title': {
    en: `e.g. An Inspector Calls: Responsibility`,
    ar: `مثال: An Inspector Calls: المسؤولية`,
    es: `p. ej. An Inspector Calls: la responsabilidad`,
  },
  'teacher.assignments.create.label.prompt': {
    en: `Task prompt`,
    ar: `نص المهمة`,
    es: `Enunciado de la tarea`,
  },
  'teacher.assignments.create.placeholder.prompt': {
    en: `Write the essay question or task instructions for students…`,
    ar: `اكتب سؤال المقال أو تعليمات المهمة للطلاب…`,
    es: `Escribe la pregunta del ensayo o las instrucciones de la tarea para los estudiantes…`,
  },
  'teacher.assignments.create.label.subject': { en: `Subject`, ar: `المادة`, es: `Asignatura` },
  'teacher.assignments.create.label.group': {
    en: `Class group`,
    ar: `مجموعة الصف`,
    es: `Grupo de clase`,
  },
  'teacher.assignments.create.label.deadline': {
    en: `Deadline`,
    ar: `آخر موعد`,
    es: `Fecha límite`,
  },
  'teacher.assignments.create.cancel': { en: `Cancel`, ar: `إلغاء`, es: `Cancelar` },
  'teacher.assignments.create.submit': {
    en: `Create assignment`,
    ar: `أنشئ الواجب`,
    es: `Crear tarea`,
  },

  // ── Students (students/page.tsx) ───────────────────────────────────────
  'teacher.students.title': { en: `Students`, ar: `الطلاب`, es: `Estudiantes` },
  'teacher.students.subtitle': {
    en: `Track each student's progress and recent work.`,
    ar: `تابع تقدّم كل طالب وشغله الأخير.`,
    es: `Sigue el progreso y el trabajo reciente de cada estudiante.`,
  },
  'teacher.students.add_student': { en: `Add student`, ar: `أضف طالب`, es: `Añadir estudiante` },
  'teacher.students.search_placeholder': {
    en: `Search by name or email…`,
    ar: `دوّر بالاسم أو الإيميل…`,
    es: `Buscar por nombre o correo…`,
  },
  'teacher.students.empty': {
    en: `No students match your search.`,
    ar: `ما في طلاب يطابقون بحثك.`,
    es: `Ningún estudiante coincide con tu búsqueda.`,
  },
  'teacher.students.col.essays': { en: `Essays`, ar: `المقالات`, es: `Ensayos` },
  'teacher.students.grade_prefix': { en: `Grade`, ar: `الدرجة`, es: `Nota` },
  'teacher.students.col.working_at': { en: `Working at`, ar: `يشتغل على`, es: `Nivel actual` },
  'teacher.students.col.trend': { en: `Trend`, ar: `الاتجاه`, es: `Tendencia` },
  'teacher.students.last_active': { en: `Last active`, ar: `آخر نشاط`, es: `Última actividad` },
  'teacher.students.recent_essays': {
    en: `Recent essays`,
    ar: `آخر المقالات`,
    es: `Ensayos recientes`,
  },
  'teacher.students.view_profile': { en: `View profile`, ar: `شوف الملف`, es: `Ver perfil` },
  'teacher.students.send_message': { en: `Send message`, ar: `أرسل رسالة`, es: `Enviar mensaje` },
  'teacher.students.add_modal.title': {
    en: `Add a student`,
    ar: `أضف طالب`,
    es: `Añadir un estudiante`,
  },
  'teacher.students.add_modal.close': { en: `Close`, ar: `سكّر`, es: `Cerrar` },
  'teacher.students.add_modal.help': {
    en: `Enter the student's email and pick a class - we'll send them an invite.`,
    ar: `حُطّ إيميل الطالب واختر صف - وإحنا نرسل له دعوة.`,
    es: `Introduce el correo del estudiante y elige una clase: le enviaremos una invitación.`,
  },
  'teacher.students.add_modal.input_placeholder': {
    en: `Student email address`,
    ar: `إيميل الطالب`,
    es: `Correo del estudiante`,
  },
  'teacher.students.add_modal.cancel': { en: `Cancel`, ar: `إلغاء`, es: `Cancelar` },
  'teacher.students.add_modal.submit': {
    en: `Send invite`,
    ar: `أرسل الدعوة`,
    es: `Enviar invitación`,
  },

  // ── Resources (resources/page.tsx) ─────────────────────────────────────
  'teacher.resources.title': {
    en: `Teaching Resources`,
    ar: `موارد التدريس`,
    es: `Recursos didácticos`,
  },
  'teacher.resources.subtitle': {
    en: `Ready-to-use lesson plans, assessment guides, and printable worksheets.`,
    ar: `خطط دروس جاهزة، أدلّة تقييم، وأوراق عمل قابلة للطباعة.`,
    es: `Planes de clase listos para usar, guías de evaluación y fichas imprimibles.`,
  },
  'teacher.resources.section.lesson_plans': {
    en: `Lesson plans`,
    ar: `خطط الدروس`,
    es: `Planes de clase`,
  },
  'teacher.resources.section.assessment': {
    en: `Assessment guides`,
    ar: `أدلّة التقييم`,
    es: `Guías de evaluación`,
  },
  'teacher.resources.section.exam_board': {
    en: `Exam board resources`,
    ar: `موارد لجان الامتحانات`,
    es: `Recursos de las juntas examinadoras`,
  },
  'teacher.resources.section.worksheets': {
    en: `Worksheets`,
    ar: `أوراق العمل`,
    es: `Fichas de trabajo`,
  },
  'teacher.resources.download_pdf': { en: `Download PDF`, ar: `نزّل PDF`, es: `Descargar PDF` },
  'teacher.resources.view_details': { en: `View details`, ar: `شوف التفاصيل`, es: `Ver detalles` },
}
