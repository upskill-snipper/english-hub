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
  'demo_school.nav.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'demo_school.nav.teachers': { en: 'Teachers', ar: 'المعلمين', es: 'Profesores' },
  'demo_school.nav.classes': { en: 'Classes', ar: 'الصفوف', es: 'Clases' },
  'demo_school.nav.analytics': { en: 'Analytics', ar: 'التحليلات', es: 'Analíticas' },
  'demo_school.nav.reports': { en: 'Reports', ar: 'التقارير', es: 'Informes' },
  'demo_school.nav.progress': { en: 'Progress', ar: 'التقدّم', es: 'Progreso' },
  'demo_school.nav.import': { en: 'Import', ar: 'الاستيراد', es: 'Importar' },
  'demo_school.nav.settings': { en: 'Settings', ar: 'الإعدادات', es: 'Configuración' },
  'demo_school.nav.dashboard': { en: 'Dashboard', ar: 'اللوحة', es: 'Panel' },
  'demo_school.nav.users': { en: 'Users', ar: 'المستخدمين', es: 'Usuarios' },

  // ─── Analytics grade bands + units (visible in chart legend) ────
  'analytics.grade.label': { en: 'Grade', ar: 'الدرجة', es: 'Grado' },
  'analytics.grade.range_1_3': { en: 'Grade 1-3', ar: 'درجة 1-3', es: 'Grado 1-3' },
  'analytics.grade.range_4_6': { en: 'Grade 4-6', ar: 'درجة 4-6', es: 'Grado 4-6' },
  'analytics.grade.range_7_9': { en: 'Grade 7-9', ar: 'درجة 7-9', es: 'Grado 7-9' },
  'analytics.grade.achieving_7_9': {
    en: 'achieving Grade 7-9',
    ar: 'وصلوا درجة 7-9',
    es: 'que alcanzan el Grado 7-9',
  },
  'analytics.grade.bottom': { en: 'Bottom · 1', ar: 'الأدنى · 1', es: 'Mínimo · 1' },
  'analytics.grade.top_of_pass': {
    en: 'Top of pass · 9',
    ar: 'أعلى نجاح · 9',
    es: 'Máximo de aprobado · 9',
  },
  'analytics.unit.students': { en: 'students', ar: 'طلاب', es: 'estudiantes' },
  'analytics.unit.students_total': {
    en: 'students total',
    ar: 'طالب إجمالاً',
    es: 'estudiantes en total',
  },
  'analytics.unit.attempts': { en: 'attempts', ar: 'محاولات', es: 'intentos' },
  'analytics.metric.correct': { en: 'correct', ar: 'صح', es: 'correcto' },

  // ─── /demo/school/dashboard stat cards (still hardcoded EN in page) ──
  // These render via direct JSX in src/app/demo/school/page.tsx so they
  // appear as English even in AR mode. The audit_top_n.py pipeline will
  // patch the page to consume content.ts which will then look these up.
  'demo_school.dash.avg_target': { en: 'AVG TARGET', ar: 'متوسط الهدف', es: 'OBJETIVO MEDIO' },
  'demo_school.dash.aspirational_target': {
    en: 'Aspirational target',
    ar: 'الهدف الطموح',
    es: 'Objetivo aspiracional',
  },
  'demo_school.dash.on_track': { en: 'ON TRACK', ar: 'ماشي صح', es: 'EN CAMINO' },
  'demo_school.dash.of_students': {
    en: 'of {n} students',
    ar: 'من {n} طالب',
    es: 'de {n} estudiantes',
  },
  'demo_school.dash.avg_predicted': {
    en: 'AVG PREDICTED',
    ar: 'متوسط المتوقع',
    es: 'PREVISTO MEDIO',
  },
  'demo_school.dash.positive_trajectory': {
    en: 'Positive trajectory',
    ar: 'اتجاه إيجابي',
    es: 'Trayectoria positiva',
  },
  'demo_school.dash.declining_trajectory': {
    en: 'Declining trajectory',
    ar: 'اتجاه متراجع',
    es: 'Trayectoria descendente',
  },
  'demo_school.dash.avg_working_at': {
    en: 'AVG WORKING AT',
    ar: 'متوسط الدرجة الحالية',
    es: 'NIVEL ACTUAL MEDIO',
  },
  'demo_school.dash.current_attainment': {
    en: 'Current attainment level',
    ar: 'مستوى التحصيل الحالي',
    es: 'Nivel de rendimiento actual',
  },
  'demo_school.dash.students_count_label': { en: 'STUDENTS', ar: 'الطلاب', es: 'ESTUDIANTES' },
  'demo_school.dash.across_year_groups': {
    en: 'Across {n} year groups',
    ar: 'موزّعين على {n} صفوف',
    es: 'En {n} grupos de curso',
  },
  'demo_school.dash.quick_actions': {
    en: 'Quick Actions',
    ar: 'إجراءات سريعة',
    es: 'Acciones rápidas',
  },
  'demo_school.dash.working_at_distribution': {
    en: 'Working At Grade Distribution',
    ar: 'توزيع الدرجة الحالية',
    es: 'Distribución del nivel actual',
  },
  'demo_school.dash.top_improving_students': {
    en: 'Top Improving Students',
    ar: 'الطلاب الأكثر تحسّناً',
    es: 'Estudiantes con mayor mejora',
  },
  'demo_school.dash.classes_action': { en: 'Classes', ar: 'الصفوف', es: 'Clases' },
  'demo_school.dash.import_action': { en: 'Import', ar: 'استيراد', es: 'Importar' },
  'demo_school.dash.export_action': { en: 'Export', ar: 'تصدير', es: 'Exportar' },
  'demo_school.dash.analytics_action': { en: 'Analytics', ar: 'تحليلات', es: 'Analíticas' },

  // ─── Parent dashboard heavily-called keys (12 from audit) ────────
  'parent.read_only_view': {
    en: 'Read-only view',
    ar: 'عرض للقراءة فقط',
    es: 'Vista de solo lectura',
  },
  'parent.this_week': { en: 'This week', ar: 'هالأسبوع', es: 'Esta semana' },
  'parent.time_spent': { en: 'Time spent', ar: 'الوقت المستهلك', es: 'Tiempo dedicado' },
  'parent.poems_studied': { en: 'Poems studied', ar: 'القصائد المدروسة', es: 'Poemas estudiados' },
  'parent.avg_quiz_score': {
    en: 'Average quiz score',
    ar: 'متوسط درجة الاختبار',
    es: 'Puntuación media del cuestionario',
  },
  'parent.games_played': { en: 'Games played', ar: 'الألعاب اللي لعبها', es: 'Juegos jugados' },
  'parent.something_went_wrong': {
    en: 'Something went wrong',
    ar: 'صار في خطأ',
    es: 'Algo salió mal',
  },
  'parent.email_required': {
    en: 'Email is required',
    ar: 'الإيميل مطلوب',
    es: 'El correo electrónico es obligatorio',
  },
  'parent.password_required': {
    en: 'Password is required',
    ar: 'الرمز السري مطلوب',
    es: 'La contraseña es obligatoria',
  },
  'parent.email_address': { en: 'Email address', ar: 'الإيميل', es: 'Correo electrónico' },
  'parent.password_label': { en: 'Password', ar: 'الرمز السري', es: 'Contraseña' },
  'parent.hide_password': { en: 'Hide password', ar: 'خبّي الرمز السري', es: 'Ocultar contraseña' },
  'parent.show_password': { en: 'Show password', ar: 'ورّي الرمز السري', es: 'Mostrar contraseña' },
  'parent.loading_short': { en: 'Loading…', ar: 'لحظة…', es: 'Cargando…' },
  'parent.password_min_length': {
    en: 'Password must be at least 8 characters',
    ar: 'الرمز السري لازم 8 أحرف على الأقل',
    es: 'La contraseña debe tener al menos 8 caracteres',
  },
  'parent.full_name': { en: 'Full name', ar: 'الاسم الكامل', es: 'Nombre completo' },

  // ─── School assignments (6 from audit) ──────────────────────────
  'school.assignments.create_cta': {
    en: 'Create assignment',
    ar: 'سوِّ واجب جديد',
    es: 'Crear tarea',
  },
  'school.assignments.back': { en: 'Back', ar: 'رجوع', es: 'Atrás' },
  'school.assignments.status.draft': { en: 'Draft', ar: 'مسودة', es: 'Borrador' },
  'school.assignments.status.active': { en: 'Active', ar: 'نشط', es: 'Activa' },
  'school.assignments.action.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
  'school.analytics.nrr.export_investors': {
    en: 'Export for investors',
    ar: 'صدِّر للمستثمرين',
    es: 'Exportar para inversores',
  },
  'school.analytics.nrr.back_to_dashboard': {
    en: 'Back to dashboard',
    ar: 'رجوع للوحة',
    es: 'Volver al panel',
  },

  // ─── Affiliate components (3 from audit) ────────────────────────
  'aff_comp.copy': { en: 'Copy', ar: 'انسخ', es: 'Copiar' },
  'aff_comp.copied': { en: 'Copied', ar: 'تم النسخ', es: 'Copiado' },
  'aff_comp.calc.signups_dot': { en: 'signups', ar: 'اشتراك', es: 'registros' },

  // ─── Download menu (from earlier wave) ──────────────────────────
  'download.menu.label': { en: 'Download', ar: 'تحميل', es: 'Descargar' },
  'download.toast.started': { en: 'started', ar: 'بدا', es: 'iniciado' },
  'download.toast.failed': { en: 'failed', ar: 'فشل', es: 'fallido' },
  'download.toast.dismiss': { en: 'Dismiss', ar: 'إخفاء', es: 'Descartar' },
  'download.style.label': { en: 'Style', ar: 'الستايل', es: 'Estilo' },
  'download.style.cream': { en: 'cream', ar: 'كريمي', es: 'crema' },
  'download.style.dark': { en: 'dark', ar: 'داكن', es: 'oscuro' },
  'download.style.whiteboard': { en: 'whiteboard', ar: 'سبورة بيضاء', es: 'pizarra blanca' },
  'download.format.label': { en: 'Format', ar: 'الصيغة', es: 'Formato' },
  'empty.default.title': {
    en: 'Nothing here yet',
    ar: 'ما في شي هني بعد',
    es: 'Aún no hay nada aquí',
  },
  'empty.default.action': { en: 'Get started', ar: 'ابدأ', es: 'Empezar' },

  // ─── A-Level hub keys (7 from audit) ────────────────────────────
  'alevel.hub.badge.uk_a_level': { en: 'UK A-Level', ar: 'UK A-Level', es: 'UK A-Level' },
  'alevel.hub.badge.lit_and_lang': {
    en: 'Literature & Language',
    ar: 'أدب ولغة',
    es: 'Literatura y Lengua',
  },
  'alevel.hub.h1': {
    en: 'A-Level English Hub',
    ar: 'Hub إنجليزي A-Level',
    es: 'A-Level English Hub',
  },
  'alevel.hub.lead': {
    en: 'Pick your UK A-Level board below. Full board-specific guides are on our roadmap.',
    ar: 'اختر بورد A-Level مالك من تحت. الأدلة الخاصة بكل بورد بعدها على خريطة الطريق مالنا.',
    es: 'Elige tu junta examinadora de A-Level del Reino Unido a continuación. Las guías completas específicas de cada junta están en nuestra hoja de ruta.',
  },
  'alevel.hub.choose_board_h2': {
    en: 'Choose your exam board',
    ar: 'اختر بورد امتحانك',
    es: 'Elige tu junta examinadora',
  },
  'alevel.hub.footnote': {
    en: 'Aligned with AQA, Pearson Edexcel, OCR and WJEC Eduqas A-Level specifications',
    ar: 'متوافق مع مواصفات A-Level مال AQA و Pearson Edexcel و OCR و WJEC Eduqas',
    es: 'Alineado con las especificaciones de A-Level de AQA, Pearson Edexcel, OCR y WJEC Eduqas',
  },
  'alevel.hub.open_hub_prefix': { en: 'Open', ar: 'افتح', es: 'Abrir' },

  // ─── EAL nav (added in EAL launch wave) ──────────────────────────
  'header.nav.eal': { en: 'EAL', ar: 'EAL', es: 'EAL' },

  // ─── Mobile-sheet labels (added in mobile-RTL audit wave) ────────
  // The mobile menu sheet previously hardcoded EN - Arabic users got
  // an EN sheet behind an AR site. Keys map every visible label.
  'header.nav.account': { en: 'Account', ar: 'الحساب', es: 'Cuenta' },
  'header.nav.school_dashboard': {
    en: 'School Dashboard',
    ar: 'لوحة المدرسة',
    es: 'Panel del colegio',
  },
  'header.cta.upgrade': { en: 'Upgrade', ar: 'ترقية', es: 'Mejorar plan' },
  'header.action.sign_out': { en: 'Sign out', ar: 'تسجيل خروج', es: 'Cerrar sesión' },
  'header.board.studying': { en: 'Studying', ar: 'يدرس', es: 'Estudiando' },
  'header.board.change': { en: 'Change board', ar: 'غيّر البورد', es: 'Cambiar de junta' },
  'header.board.reset': {
    en: 'Reset exam board',
    ar: 'إعادة تعيين البورد',
    es: 'Restablecer junta examinadora',
  },
  'header.board.select_short': { en: 'Select board', ar: 'اختر البورد', es: 'Seleccionar junta' },
  'header.board.select_button': {
    en: 'Select your exam board',
    ar: 'اختر بورد الامتحان مالك',
    es: 'Selecciona tu junta examinadora',
  },
  'header.action.open_menu': { en: 'Open menu', ar: 'افتح القائمة', es: 'Abrir menú' },
}
