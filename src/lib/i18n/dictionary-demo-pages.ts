/**
 * Demo deep sub-page i18n dictionary entries.
 *
 * UI chrome only. Demo fixture data (school names like "Riverside
 * Academy", student names, sample grades, exam-board codes) stays in
 * its original Latin form per spec.
 *
 * Kept in a separate module to avoid merge churn on the main
 * dictionary.ts. Imported and merged into the lookup chain via
 * lookup() in dictionary.ts.
 *
 * Namespaces:
 *   demo_school.teachers.*    -> /demo/school/teachers
 *   demo_school.classes.*     -> /demo/school/classes
 *   demo_school.dept.*        -> /demo/school/department
 *   demo_school.bench.*       -> /demo/school/benchmarks
 *   demo_teacher.classes.*    -> /demo/teacher/classes
 *   demo_teacher.students.*   -> /demo/teacher/students
 *   demo_teacher.essays.*     -> /demo/teacher/essays
 *   demo_teacher.quizzes.*    -> /demo/teacher/quizzes
 *   demo_teacher.homework.*   -> /demo/teacher/homework
 *   demo_student.courses.*    -> /demo/student/courses
 *   demo_student.flashcards.* -> /demo/student/flashcards
 */

import type { Dictionary } from './dictionary'

export const DEMO_PAGES_DICTIONARY: Dictionary = {
  // /demo/school/teachers
  'demo_school.teachers.banner': {
    en: 'You are viewing an interactive demo with sample data. No real teacher data is used.',
    ar: 'إنت تشوف ديمو تفاعلي ببيانات تجريبية. ما نستخدم بيانات معلمين حقيقية.',
    es: 'Estás viendo una demo interactiva con datos de muestra. No se utilizan datos reales de profesores.',
  },
  'demo_school.teachers.title': { en: 'Teachers', ar: 'المعلمون', es: 'Profesores' },
  'demo_school.teachers.subtitle': {
    en: 'Manage your English department staff, view workload, and track teaching activity.',
    ar: 'دير طاقم قسم الإنجليزي، شوف عبء العمل، وتتبّع نشاط التدريس.',
    es: 'Gestiona el personal de tu departamento de inglés, consulta la carga de trabajo y haz seguimiento de la actividad docente.',
  },
  'demo_school.teachers.stat.total': {
    en: 'Total Teachers',
    ar: 'إجمالي المعلمين',
    es: 'Total de profesores',
  },
  'demo_school.teachers.stat.active': {
    en: 'Active This Week',
    ar: 'فعّالين هالأسبوع',
    es: 'Activos esta semana',
  },
  'demo_school.teachers.stat.covered': {
    en: 'Classes Covered',
    ar: 'الفصول المغطّاة',
    es: 'Clases cubiertas',
  },
  'demo_school.teachers.col.name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'demo_school.teachers.col.email': { en: 'Email', ar: 'الإيميل', es: 'Correo electrónico' },
  'demo_school.teachers.col.role': { en: 'Role', ar: 'الدور', es: 'Función' },
  'demo_school.teachers.col.classes': { en: 'Classes', ar: 'الفصول', es: 'Clases' },
  'demo_school.teachers.col.last_active': {
    en: 'Last Active',
    ar: 'آخر نشاط',
    es: 'Última actividad',
  },
  'demo_school.teachers.role.hod': { en: 'HOD', ar: 'رئيس قسم', es: 'Jefe de departamento' },
  'demo_school.teachers.role.teacher': { en: 'Teacher', ar: 'معلم', es: 'Profesor' },
  'demo_school.teachers.last.today': { en: 'Today', ar: 'اليوم', es: 'Hoy' },
  'demo_school.teachers.last.yesterday': { en: 'Yesterday', ar: 'أمس', es: 'Ayer' },
  'demo_school.teachers.last.days_2': { en: '2 days ago', ar: 'قبل يومين', es: 'Hace 2 días' },
  'demo_school.teachers.last.days_3': { en: '3 days ago', ar: 'قبل ٣ أيام', es: 'Hace 3 días' },
  'demo_school.teachers.last.week_1': { en: '1 week ago', ar: 'قبل أسبوع', es: 'Hace 1 semana' },
  'demo_school.teachers.row.classes_mobile': { en: 'Classes:', ar: 'الفصول:', es: 'Clases:' },
  'demo_school.teachers.row.active_mobile': { en: 'Active:', ar: 'النشاط:', es: 'Actividad:' },
  'demo_school.teachers.footer.demo_data': {
    en: 'Demo data',
    ar: 'بيانات ديمو',
    es: 'Datos de demostración',
  },
  'demo_school.teachers.footer.teachers_suffix': { en: 'teachers', ar: 'معلم', es: 'profesores' },
  'demo_school.teachers.footer.classes_suffix': { en: 'classes', ar: 'فصل', es: 'clases' },

  // /demo/school/classes
  'demo_school.classes.title': { en: 'Classes', ar: 'الفصول', es: 'Clases' },
  'demo_school.classes.subtitle_suffix': {
    en: 'classes across all year groups',
    ar: 'فصل في كل السنوات الدراسية',
    es: 'clases en todos los cursos',
  },
  'demo_school.classes.create_btn': { en: 'Create Class', ar: 'سوّ فصل', es: 'Crear clase' },
  'demo_school.classes.create_toast_title': {
    en: 'Available with full account',
    ar: 'متوفّر مع الحساب الكامل',
    es: 'Disponible con la cuenta completa',
  },
  'demo_school.classes.create_toast_desc': {
    en: 'Register your school to create and manage classes.',
    ar: 'سجّل مدرستك تسوّي وتدير الفصول.',
    es: 'Registra tu centro para crear y gestionar clases.',
  },
  'demo_school.classes.search_placeholder': {
    en: 'Search classes by name, teacher, exam board...',
    ar: 'دوّر فصول بالاسم، المعلم، بورد الامتحان...',
    es: 'Buscar clases por nombre, profesor o exam board...',
  },
  'demo_school.classes.empty': {
    en: 'No classes match your search.',
    ar: 'ما في فصول تطابق بحثك.',
    es: 'Ninguna clase coincide con tu búsqueda.',
  },
  'demo_school.classes.col.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'demo_school.classes.col.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة', es: 'Nota media' },
  'demo_school.classes.col.reading_age': {
    en: 'Reading Age',
    ar: 'عمر القراءة',
    es: 'Edad lectora',
  },
  'demo_school.classes.col.completion': { en: 'Completion', ar: 'الإنجاز', es: 'Finalización' },

  // /demo/school/department
  'demo_school.dept.banner': {
    en: 'You are viewing a demo department dashboard with sample data.',
    ar: 'إنت تشوف ديمو لوحة القسم ببيانات تجريبية.',
    es: 'Estás viendo un panel de departamento de demostración con datos de muestra.',
  },
  'demo_school.dept.title': {
    en: 'Department Overview',
    ar: 'نظرة عامة على القسم',
    es: 'Resumen del departamento',
  },
  'demo_school.dept.subtitle_dept': {
    en: 'English Department',
    ar: 'قسم الإنجليزي',
    es: 'Departamento de inglés',
  },
  'demo_school.dept.subtitle_teachers_suffix': { en: 'Teachers', ar: 'معلم', es: 'profesores' },
  'demo_school.dept.download_btn': {
    en: 'Download Department Report',
    ar: 'حمّل تقرير القسم',
    es: 'Descargar informe del departamento',
  },
  'demo_school.dept.kpi.total_teachers': {
    en: 'Total English Teachers',
    ar: 'إجمالي معلمي الإنجليزي',
    es: 'Total de profesores de inglés',
  },
  'demo_school.dept.kpi.avg_score': {
    en: 'Average Student Score',
    ar: 'متوسط درجة الطالب',
    es: 'Nota media del estudiante',
  },
  'demo_school.dept.kpi.target': {
    en: 'Department Target',
    ar: 'هدف القسم',
    es: 'Objetivo del departamento',
  },
  'demo_school.dept.kpi.gap': {
    en: 'Gap to Target',
    ar: 'الفجوة عن الهدف',
    es: 'Diferencia con el objetivo',
  },
  'demo_school.dept.section.teacher_comparison': {
    en: 'Teacher Comparison',
    ar: 'مقارنة المعلمين',
    es: 'Comparación de profesores',
  },
  'demo_school.dept.col.teacher': { en: 'Teacher', ar: 'المعلم', es: 'Profesor' },
  'demo_school.dept.col.classes': { en: 'Classes', ar: 'الفصول', es: 'Clases' },
  'demo_school.dept.col.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'demo_school.dept.col.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة', es: 'Nota media' },
  'demo_school.dept.col.completion': { en: 'Completion', ar: 'الإنجاز', es: 'Finalización' },
  'demo_school.dept.col.at_risk': { en: 'At-Risk', ar: 'في خطر', es: 'En riesgo' },
  'demo_school.dept.section.class_ranking': {
    en: 'Class Performance Ranking',
    ar: 'ترتيب أداء الفصول',
    es: 'Ranking de rendimiento de las clases',
  },
  'demo_school.dept.section.year_trends': {
    en: 'Year Group Trends',
    ar: 'اتجاهات السنوات الدراسية',
    es: 'Tendencias por curso',
  },
  'demo_school.dept.trend_suffix_month': {
    en: 'from last month',
    ar: 'من الشهر اللي طاف',
    es: 'respecto al mes pasado',
  },
  'demo_school.dept.section.workload': {
    en: 'Workload Distribution',
    ar: 'توزيع عبء العمل',
    es: 'Distribución de la carga de trabajo',
  },
  'demo_school.dept.workload.avg_pre': { en: 'Average:', ar: 'المتوسط:', es: 'Media:' },
  'demo_school.dept.workload.avg_students_suffix': {
    en: 'students per teacher. Flagged if above',
    ar: 'طالب لكل معلم. تنبيه لو فوق',
    es: 'estudiantes por profesor. Se marca si supera',
  },
  'demo_school.dept.workload.students_label': { en: 'students', ar: 'طالب', es: 'estudiantes' },
  'demo_school.dept.workload.classes_label': { en: 'classes', ar: 'فصل', es: 'clases' },
  'demo_school.dept.workload.high_load': { en: 'High Load', ar: 'عبء عالي', es: 'Carga alta' },
  'demo_school.dept.section.cpd': {
    en: 'CPD Recommendations',
    ar: 'توصيات التطوير المهني',
    es: 'Recomendaciones de formación continua',
  },

  // /demo/school/benchmarks
  'demo_school.bench.title': {
    en: 'Performance Benchmarks',
    ar: 'معايير الأداء',
    es: 'Indicadores de referencia de rendimiento',
  },
  'demo_school.bench.subtitle': {
    en: 'How Riverside Academy compares to national and platform averages',
    ar: 'شلون Riverside Academy تقارن بمتوسطات وطنية ومتوسطات المنصة',
    es: 'Cómo se compara Riverside Academy con las medias nacionales y de la plataforma',
  },
  'demo_school.bench.download_btn': {
    en: 'Download Benchmark Report',
    ar: 'حمّل تقرير المعايير',
    es: 'Descargar informe de referencia',
  },
  'demo_school.bench.downloading': { en: 'Downloading...', ar: 'يحمّل...', es: 'Descargando...' },
  'demo_school.bench.toast_opened': {
    en: 'Benchmark report opened for download',
    ar: 'تقرير المعايير فتح للتحميل',
    es: 'Informe de referencia abierto para su descarga',
  },
  'demo_school.bench.metric.avg_score': {
    en: 'Average Score',
    ar: 'متوسط الدرجة',
    es: 'Nota media',
  },
  'demo_school.bench.metric.completion': {
    en: 'Completion Rate',
    ar: 'معدّل الإنجاز',
    es: 'Tasa de finalización',
  },
  'demo_school.bench.metric.at_risk': { en: 'At-Risk %', ar: 'نسبة في خطر', es: '% en riesgo' },
  'demo_school.bench.metric.active': {
    en: 'Active Rate',
    ar: 'معدّل النشاط',
    es: 'Tasa de actividad',
  },
  'demo_school.bench.badge.better': { en: 'Better', ar: 'أحسن', es: 'Mejor' },
  'demo_school.bench.badge.above_avg': {
    en: 'Above Avg',
    ar: 'فوق المتوسط',
    es: 'Por encima de la media',
  },
  'demo_school.bench.vs_national': { en: 'vs', ar: 'مقابل', es: 'frente a' },
  'demo_school.bench.national_suffix': { en: 'national', ar: 'وطني', es: 'nacional' },
  'demo_school.bench.delta.lower_than_avg': {
    en: 'lower than average',
    ar: 'أقل من المتوسط',
    es: 'por debajo de la media',
  },
  'demo_school.bench.delta.above_avg': {
    en: 'above average',
    ar: 'فوق المتوسط',
    es: 'por encima de la media',
  },
  'demo_school.bench.section.year_group': {
    en: 'Year Group Benchmarks',
    ar: 'معايير السنوات الدراسية',
    es: 'Indicadores de referencia por curso',
  },
  'demo_school.bench.section.year_group_desc': {
    en: 'Performance by year group compared to national averages',
    ar: 'الأداء حسب السنة الدراسية مقابل المتوسط الوطني',
    es: 'Rendimiento por curso comparado con las medias nacionales',
  },
  'demo_school.bench.col.year_group': { en: 'Year Group', ar: 'السنة الدراسية', es: 'Curso' },
  'demo_school.bench.col.school_avg': {
    en: 'School Avg',
    ar: 'متوسط المدرسة',
    es: 'Media del centro',
  },
  'demo_school.bench.col.national_avg': {
    en: 'National Avg',
    ar: 'المتوسط الوطني',
    es: 'Media nacional',
  },
  'demo_school.bench.col.difference': { en: 'Difference', ar: 'الفرق', es: 'Diferencia' },
  'demo_school.bench.col.percentile': { en: 'Percentile', ar: 'الترتيب المئوي', es: 'Percentil' },
  'demo_school.bench.section.subject': {
    en: 'Subject Area Comparison',
    ar: 'مقارنة مجالات المواد',
    es: 'Comparación por área de la asignatura',
  },
  'demo_school.bench.section.subject_desc': {
    en: 'School performance vs platform-wide averages by subject',
    ar: 'أداء المدرسة مقابل متوسط المنصة حسب المادة',
    es: 'Rendimiento del centro frente a las medias de la plataforma por asignatura',
  },
  'demo_school.bench.subject.platform_label': { en: 'Platform:', ar: 'المنصة:', es: 'Plataforma:' },
  'demo_school.bench.subject.school_label': { en: 'School:', ar: 'المدرسة:', es: 'Centro:' },
  'demo_school.bench.legend.school': { en: 'School', ar: 'المدرسة', es: 'Centro' },
  'demo_school.bench.legend.platform': { en: 'Platform', ar: 'المنصة', es: 'Plataforma' },
  'demo_school.bench.section.trend': {
    en: 'Trend Over Time',
    ar: 'الاتجاه عبر الزمن',
    es: 'Tendencia a lo largo del tiempo',
  },
  'demo_school.bench.section.trend_desc': {
    en: 'Four-term comparison showing improvement trajectory',
    ar: 'مقارنة أربع فصول تبيّن مسار التحسّن',
    es: 'Comparación de cuatro trimestres que muestra la trayectoria de mejora',
  },
  'demo_school.bench.trend.national_label': { en: 'National:', ar: 'وطني:', es: 'Nacional:' },
  'demo_school.bench.trend.school_label': { en: 'School:', ar: 'المدرسة:', es: 'Centro:' },
  'demo_school.bench.legend.school_avg': {
    en: 'School Average',
    ar: 'متوسط المدرسة',
    es: 'Media del centro',
  },
  'demo_school.bench.legend.national_avg': {
    en: 'National Average',
    ar: 'المتوسط الوطني',
    es: 'Media nacional',
  },
  'demo_school.bench.trend.improvement_suffix': {
    en: 'improvement over 4 terms',
    ar: 'تحسّن عبر ٤ فصول',
    es: 'de mejora en 4 trimestres',
  },
  'demo_school.bench.section.recommendations': {
    en: 'Recommendations',
    ar: 'التوصيات',
    es: 'Recomendaciones',
  },
  'demo_school.bench.section.recommendations_desc': {
    en: 'Actionable insights based on benchmark analysis',
    ar: 'رؤى قابلة للتطبيق بناء على تحليل المعايير',
    es: 'Conclusiones prácticas basadas en el análisis de los indicadores de referencia',
  },

  // /demo/teacher/classes
  'demo_teacher.classes.banner_eyebrow': {
    en: 'Teacher Demo',
    ar: 'ديمو المعلم',
    es: 'Demo del profesor',
  },
  'demo_teacher.classes.banner_suffix': {
    en: 'Viewing sample class data for',
    ar: 'تشوف بيانات فصول تجريبية لـ',
    es: 'Viendo datos de clase de muestra de',
  },
  'demo_teacher.classes.title': { en: 'My Classes', ar: 'فصولي', es: 'Mis clases' },
  'demo_teacher.classes.subtitle_classes_suffix': { en: 'classes', ar: 'فصل', es: 'clases' },
  'demo_teacher.classes.subtitle_dept_suffix': {
    en: 'Department',
    ar: 'القسم',
    es: 'Departamento',
  },
  'demo_teacher.classes.back_btn': {
    en: 'Back to Dashboard',
    ar: 'رجوع للوحة',
    es: 'Volver al panel',
  },
  'demo_teacher.classes.kpi.total_students': {
    en: 'Total Students',
    ar: 'إجمالي الطلاب',
    es: 'Total de estudiantes',
  },
  'demo_teacher.classes.kpi.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة', es: 'Nota media' },
  'demo_teacher.classes.kpi.avg_completion': {
    en: 'Avg Completion',
    ar: 'متوسط الإنجاز',
    es: 'Finalización media',
  },
  'demo_teacher.classes.kpi.at_risk_students': {
    en: 'At-Risk Students',
    ar: 'طلاب في خطر',
    es: 'Estudiantes en riesgo',
  },
  'demo_teacher.classes.year_prefix': { en: 'Year', ar: 'السنة', es: 'Año' },
  'demo_teacher.classes.card.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'demo_teacher.classes.card.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة', es: 'Nota media' },
  'demo_teacher.classes.card.trend': { en: 'Trend', ar: 'الاتجاه', es: 'Tendencia' },
  'demo_teacher.classes.card.completion': { en: 'Completion', ar: 'الإنجاز', es: 'Finalización' },
  'demo_teacher.classes.at_risk_single': {
    en: 'student at risk',
    ar: 'طالب في خطر',
    es: 'estudiante en riesgo',
  },
  'demo_teacher.classes.at_risk_plural': {
    en: 'students at risk',
    ar: 'طلاب في خطر',
    es: 'estudiantes en riesgo',
  },
  'demo_teacher.classes.all_on_track': {
    en: 'All students on track',
    ar: 'كل الطلاب على المسار',
    es: 'Todos los estudiantes van bien',
  },
  'demo_teacher.classes.footer.demo_data': {
    en: 'Demo data',
    ar: 'بيانات ديمو',
    es: 'Datos de demostración',
  },
  'demo_teacher.classes.footer.classes_suffix': { en: 'classes', ar: 'فصل', es: 'clases' },

  // /demo/teacher/students
  'demo_teacher.students.banner': {
    en: 'You are viewing an interactive demo with sample data. No real student data is used.',
    ar: 'إنت تشوف ديمو تفاعلي ببيانات تجريبية. ما نستخدم بيانات طلاب حقيقية.',
    es: 'Estás viendo una demo interactiva con datos de muestra. No se utilizan datos reales de estudiantes.',
  },
  'demo_teacher.students.back_dashboard': {
    en: 'Teacher Dashboard',
    ar: 'لوحة المعلم',
    es: 'Panel del profesor',
  },
  'demo_teacher.students.title': { en: 'My Students', ar: 'طلابي', es: 'Mis estudiantes' },
  'demo_teacher.students.subtitle': {
    en: 'Track progress, scores, and engagement across your classes.',
    ar: 'تتبّع التقدّم والدرجات والمشاركة في كل فصولك.',
    es: 'Haz seguimiento del progreso, las notas y la participación en todas tus clases.',
  },
  'demo_teacher.students.at_risk_flagged_single': {
    en: 'student flagged as at risk',
    ar: 'طالب متأشّر عليه إنه في خطر',
    es: 'estudiante marcado como en riesgo',
  },
  'demo_teacher.students.at_risk_flagged_plural': {
    en: 'students flagged as at risk',
    ar: 'طلاب متأشّر عليهم إنهم في خطر',
    es: 'estudiantes marcados como en riesgo',
  },
  'demo_teacher.students.filter.all_classes': {
    en: 'All Classes',
    ar: 'كل الفصول',
    es: 'Todas las clases',
  },
  'demo_teacher.students.report_btn_prefix': {
    en: 'View Class Report:',
    ar: 'شوف تقرير الفصل:',
    es: 'Ver informe de la clase:',
  },
  'demo_teacher.students.report_toast': {
    en: 'Class reports available with full account',
    ar: 'تقارير الفصول متوفّرة مع الحساب الكامل',
    es: 'Los informes de clase están disponibles con la cuenta completa',
  },
  'demo_teacher.students.grade.avg_working': {
    en: 'Avg Working At Grade',
    ar: 'متوسط الدرجة الحالية',
    es: 'Nota media actual',
  },
  'demo_teacher.students.grade.avg_predicted': {
    en: 'Avg Predicted Grade',
    ar: 'متوسط الدرجة المتوقّعة',
    es: 'Nota media prevista',
  },
  'demo_teacher.students.grade.distribution': {
    en: 'Grade Distribution',
    ar: 'توزيع الدرجات',
    es: 'Distribución de notas',
  },
  'demo_teacher.students.grade_word': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'demo_teacher.students.col.name': { en: 'Name', ar: 'الاسم', es: 'Nombre' },
  'demo_teacher.students.col.class': { en: 'Class', ar: 'الفصل', es: 'Clase' },
  'demo_teacher.students.col.working_at': { en: 'Working At', ar: 'الحالية', es: 'Nivel actual' },
  'demo_teacher.students.col.predicted': { en: 'Predicted', ar: 'المتوقّعة', es: 'Prevista' },
  'demo_teacher.students.col.target': { en: 'Target', ar: 'المستهدفة', es: 'Objetivo' },
  'demo_teacher.students.col.status': { en: 'Status', ar: 'الحالة', es: 'Estado' },
  'demo_teacher.students.col.last_active': {
    en: 'Last Active',
    ar: 'آخر نشاط',
    es: 'Última actividad',
  },
  'demo_teacher.students.status.at_risk': { en: 'At Risk', ar: 'في خطر', es: 'En riesgo' },
  'demo_teacher.students.status.on_track': { en: 'On Track', ar: 'على المسار', es: 'Va bien' },
  'demo_teacher.students.row.year_prefix': { en: 'Year', ar: 'السنة', es: 'Año' },
  'demo_teacher.students.footer.demo_data': {
    en: 'Demo data',
    ar: 'بيانات ديمو',
    es: 'Datos de demostración',
  },
  'demo_teacher.students.footer.students_suffix': { en: 'students', ar: 'طالب', es: 'estudiantes' },
  'demo_teacher.students.footer.classes_suffix': { en: 'classes', ar: 'فصل', es: 'clases' },

  // /demo/teacher/essays
  'demo_teacher.essays.banner': {
    en: 'This is an interactive demo of AI essay marking. No real data is saved.',
    ar: 'هذا ديمو تفاعلي لتصحيح المقالات بـ AI. ما يتحفظ بيانات حقيقية.',
    es: 'Esta es una demo interactiva de la corrección de redacciones con IA. No se guardan datos reales.',
  },
  'demo_teacher.essays.title': {
    en: 'AI Essay Marking',
    ar: 'تصحيح المقالات بـ AI',
    es: 'Corrección de redacciones con IA',
  },
  'demo_teacher.essays.subtitle': {
    en: 'AI-powered essay analysis with AO scoring, detailed feedback, and improvement suggestions.',
    ar: 'تحليل مقالات بـ AI مع تقييم AO وملاحظات تفصيلية واقتراحات تحسين.',
    es: 'Análisis de redacciones con IA, con puntuación por AO, comentarios detallados y sugerencias de mejora.',
  },
  'demo_teacher.essays.sample_label_pre': { en: 'Sample', ar: 'عينة', es: 'Muestra' },
  'demo_teacher.essays.sample_label_of': { en: 'of', ar: 'من', es: 'de' },
  'demo_teacher.essays.analyse_btn': {
    en: 'Analyse Essay',
    ar: 'حلّل المقال',
    es: 'Analizar redacción',
  },
  'demo_teacher.essays.analysing_btn': { en: 'Analysing...', ar: 'يحلّل...', es: 'Analizando...' },
  'demo_teacher.essays.try_another_btn': {
    en: 'Try Another Essay',
    ar: 'جرّب مقال ثاني',
    es: 'Probar otra redacción',
  },
  'demo_teacher.essays.loading_main': {
    en: 'Analysing essay against GCSE assessment objectives...',
    ar: 'يحلّل المقال مقابل أهداف تقييم GCSE...',
    es: 'Analizando la redacción según los objetivos de evaluación de GCSE...',
  },
  'demo_teacher.essays.loading_sub': {
    en: 'Evaluating AO1, AO2, AO3, and AO4 criteria',
    ar: 'يقيّم معايير AO1 و AO2 و AO3 و AO4',
    es: 'Evaluando los criterios AO1, AO2, AO3 y AO4',
  },
  'demo_teacher.essays.predicted_grade': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقّعة',
    es: 'Nota prevista',
  },
  'demo_teacher.essays.grade_word': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'demo_teacher.essays.section.assessment': {
    en: 'Assessment Objectives',
    ar: 'أهداف التقييم',
    es: 'Objetivos de evaluación',
  },
  'demo_teacher.essays.ao.ao1': { en: 'AO1 Reading', ar: 'AO1 قراءة', es: 'AO1 Lectura' },
  'demo_teacher.essays.ao.ao2': { en: 'AO2 Analysis', ar: 'AO2 تحليل', es: 'AO2 Análisis' },
  'demo_teacher.essays.ao.ao3': { en: 'AO3 Context', ar: 'AO3 سياق', es: 'AO3 Contexto' },
  'demo_teacher.essays.ao.ao4': { en: 'AO4 SPaG', ar: 'AO4 SPaG', es: 'AO4 SPaG' },
  'demo_teacher.essays.section.detailed_feedback': {
    en: 'Detailed Feedback',
    ar: 'ملاحظات تفصيلية',
    es: 'Comentarios detallados',
  },
  'demo_teacher.essays.section.strengths': {
    en: 'Strengths',
    ar: 'نقاط القوة',
    es: 'Puntos fuertes',
  },
  'demo_teacher.essays.section.improvements': {
    en: 'Areas for Improvement',
    ar: 'مجالات للتحسين',
    es: 'Áreas de mejora',
  },
  'demo_teacher.essays.cta_title': {
    en: 'Use AI marking with your students',
    ar: 'استخدم تصحيح AI مع طلابك',
    es: 'Usa la corrección con IA con tus estudiantes',
  },
  'demo_teacher.essays.cta_body': {
    en: 'Save hours of marking time with instant, detailed feedback on every essay.',
    ar: 'وفّر ساعات من وقت التصحيح بملاحظات لحظية وتفصيلية على كل مقال.',
    es: 'Ahorra horas de corrección con comentarios instantáneos y detallados en cada redacción.',
  },
  'demo_teacher.essays.cta_btn': {
    en: 'Start free trial',
    ar: 'ابدأ التجربة المجانية',
    es: 'Empezar prueba gratuita',
  },

  // /demo/teacher/quizzes
  'demo_teacher.quizzes.banner_eyebrow': {
    en: 'Teacher Demo',
    ar: 'ديمو المعلم',
    es: 'Demo del profesor',
  },
  'demo_teacher.quizzes.banner_body': {
    en: 'Try the Quiz Builder with sample data. No account needed.',
    ar: 'جرّب بنّاء الاختبارات ببيانات تجريبية. ما يحتاج حساب.',
    es: 'Prueba el creador de cuestionarios con datos de muestra. No necesitas cuenta.',
  },
  'demo_teacher.quizzes.title': {
    en: 'Quiz Builder',
    ar: 'بنّاء الاختبارات',
    es: 'Creador de cuestionarios',
  },
  'demo_teacher.quizzes.subtitle': {
    en: 'Generate multiple-choice quizzes aligned to your exam board in seconds.',
    ar: 'سوّ اختبارات اختيار من متعدّد متوافقة مع بوردك خلال ثواني.',
    es: 'Genera cuestionarios de opción múltiple alineados con tu exam board en segundos.',
  },
  'demo_teacher.quizzes.label.topic': {
    en: 'Topic / Text',
    ar: 'الموضوع / النص',
    es: 'Tema / Texto',
  },
  'demo_teacher.quizzes.placeholder.topic': {
    en: 'e.g. An Inspector Calls, Macbeth...',
    ar: 'مثلاً An Inspector Calls، Macbeth...',
    es: 'p. ej. An Inspector Calls, Macbeth...',
  },
  'demo_teacher.quizzes.label.year_group': { en: 'Year Group', ar: 'السنة الدراسية', es: 'Curso' },
  'demo_teacher.quizzes.year_option_prefix': { en: 'Year', ar: 'السنة', es: 'Año' },
  'demo_teacher.quizzes.label.difficulty': { en: 'Difficulty', ar: 'الصعوبة', es: 'Dificultad' },
  'demo_teacher.quizzes.difficulty.foundation': { en: 'Foundation', ar: 'أساسي', es: 'Básico' },
  'demo_teacher.quizzes.difficulty.higher': { en: 'Higher', ar: 'متقدّم', es: 'Avanzado' },
  'demo_teacher.quizzes.label.num_questions': {
    en: 'Number of Questions',
    ar: 'عدد الأسئلة',
    es: 'Número de preguntas',
  },
  'demo_teacher.quizzes.generate_btn': {
    en: 'Generate Quiz',
    ar: 'سوّ اختبار',
    es: 'Generar cuestionario',
  },
  'demo_teacher.quizzes.generating_btn': {
    en: 'Generating Quiz...',
    ar: 'يسوّي الاختبار...',
    es: 'Generando cuestionario...',
  },
  'demo_teacher.quizzes.result.subtitle_year_prefix': { en: 'Year', ar: 'السنة', es: 'Año' },
  'demo_teacher.quizzes.result.subtitle_questions_suffix': {
    en: 'questions',
    ar: 'سؤال',
    es: 'preguntas',
  },
  'demo_teacher.quizzes.download_quiz_btn': {
    en: 'Download Quiz',
    ar: 'حمّل الاختبار',
    es: 'Descargar cuestionario',
  },
  'demo_teacher.quizzes.download_answers_btn': {
    en: 'Download Answer Sheet',
    ar: 'حمّل ورقة الإجابات',
    es: 'Descargar hoja de respuestas',
  },
  'demo_teacher.quizzes.mark_scheme_prefix': {
    en: 'Mark scheme:',
    ar: 'جدول التصحيح:',
    es: 'Criterios de corrección:',
  },
  'demo_teacher.quizzes.assign_btn': {
    en: 'Assign to Class',
    ar: 'كلّف الفصل',
    es: 'Asignar a la clase',
  },
  'demo_teacher.quizzes.toast_pre': {
    en: 'Available with full account -',
    ar: 'متوفّر مع الحساب الكامل -',
    es: 'Disponible con la cuenta completa -',
  },
  'demo_teacher.quizzes.toast_link': {
    en: 'Start free trial',
    ar: 'ابدأ التجربة المجانية',
    es: 'Empezar prueba gratuita',
  },

  // /demo/teacher/homework
  'demo_teacher.homework.banner': {
    en: 'This is an interactive demo of homework management. No real data is saved.',
    ar: 'هذا ديمو تفاعلي لإدارة الواجبات. ما يتحفظ بيانات حقيقية.',
    es: 'Esta es una demo interactiva de la gestión de tareas. No se guardan datos reales.',
  },
  'demo_teacher.homework.title': {
    en: 'Homework Dashboard',
    ar: 'لوحة الواجبات',
    es: 'Panel de tareas',
  },
  'demo_teacher.homework.subtitle': {
    en: 'Set, track, and mark homework assignments for your classes.',
    ar: 'سوّ، تتبّع، وصحّح واجبات لفصولك.',
    es: 'Asigna, sigue y corrige las tareas de tus clases.',
  },
  'demo_teacher.homework.auto_gen_btn': {
    en: 'Auto-Generate Homework',
    ar: 'سوّ واجب تلقائياً',
    es: 'Generar tarea automáticamente',
  },
  'demo_teacher.homework.tab.set': { en: 'Set Homework', ar: 'سوّ واجب', es: 'Asignar tarea' },
  'demo_teacher.homework.tab.track': {
    en: 'Track Progress',
    ar: 'تتبّع التقدّم',
    es: 'Seguir el progreso',
  },
  'demo_teacher.homework.tab.mark': { en: 'Mark Work', ar: 'صحّح الشغل', es: 'Corregir trabajos' },
  'demo_teacher.homework.ai_card.title': {
    en: 'Auto-Generate Homework with AI',
    ar: 'سوّ واجب تلقائياً بـ AI',
    es: 'Genera tareas automáticamente con IA',
  },
  'demo_teacher.homework.ai_card.body': {
    en: 'Select a topic, type, and grade level - get a complete homework assignment with mark scheme, success criteria, and extension tasks in seconds.',
    ar: 'اختر موضوع ونوع ومستوى - تأخذ واجب كامل مع جدول التصحيح ومعايير النجاح ومهام إضافية خلال ثواني.',
    es: 'Selecciona un tema, un tipo y un nivel: obtén una tarea completa con criterios de corrección, criterios de éxito y actividades de ampliación en segundos.',
  },
  'demo_teacher.homework.create_heading': {
    en: 'Create New Assignment',
    ar: 'سوّ واجب جديد',
    es: 'Crear nueva tarea',
  },
  'demo_teacher.homework.field.class': { en: 'Class', ar: 'الفصل', es: 'Clase' },
  'demo_teacher.homework.field.class_placeholder': {
    en: 'Select class...',
    ar: 'اختر فصل...',
    es: 'Selecciona una clase...',
  },
  'demo_teacher.homework.field.type': {
    en: 'Assignment Type',
    ar: 'نوع الواجب',
    es: 'Tipo de tarea',
  },
  'demo_teacher.homework.field.type_placeholder': {
    en: 'Select type...',
    ar: 'اختر نوع...',
    es: 'Selecciona un tipo...',
  },
  'demo_teacher.homework.field.title': {
    en: 'Assignment Title',
    ar: 'عنوان الواجب',
    es: 'Título de la tarea',
  },
  'demo_teacher.homework.field.title_placeholder': {
    en: 'e.g. Macbeth Act 1 Analysis Essay',
    ar: 'مثلاً مقال تحليل Macbeth الفصل ١',
    es: 'p. ej. Redacción de análisis de Macbeth, Acto 1',
  },
  'demo_teacher.homework.field.due_date': {
    en: 'Due Date',
    ar: 'تاريخ التسليم',
    es: 'Fecha de entrega',
  },
  'demo_teacher.homework.field.instructions': {
    en: 'Instructions',
    ar: 'التعليمات',
    es: 'Instrucciones',
  },
  'demo_teacher.homework.field.instructions_placeholder': {
    en: 'Write detailed instructions for your students...',
    ar: 'اكتب تعليمات تفصيلية لطلابك...',
    es: 'Escribe instrucciones detalladas para tus estudiantes...',
  },
  'demo_teacher.homework.set_btn': { en: 'Set Homework', ar: 'سوّ الواجب', es: 'Asignar tarea' },
  'demo_teacher.homework.toast_set': {
    en: 'Assignment set (demo mode)',
    ar: 'الواجب اتسوّى (وضع ديمو)',
    es: 'Tarea asignada (modo demostración)',
  },
  'demo_teacher.homework.created.heading': {
    en: 'Assignment Created',
    ar: 'الواجب اتسوّى',
    es: 'Tarea creada',
  },
  'demo_teacher.homework.created.class': { en: 'Class', ar: 'الفصل', es: 'Clase' },
  'demo_teacher.homework.created.title': { en: 'Title', ar: 'العنوان', es: 'Título' },
  'demo_teacher.homework.created.type': { en: 'Type', ar: 'النوع', es: 'Tipo' },
  'demo_teacher.homework.created.due': { en: 'Due', ar: 'التسليم', es: 'Entrega' },
  'demo_teacher.homework.progress.submitted_suffix': {
    en: 'submitted',
    ar: 'سُلّم',
    es: 'entregado',
  },
  'demo_teacher.homework.progress.overdue_suffix': { en: 'overdue', ar: 'متأخّر', es: 'atrasado' },
  'demo_teacher.homework.progress.complete': { en: 'Complete', ar: 'مكتمل', es: 'Completado' },
  'demo_teacher.homework.due_prefix': { en: 'Due:', ar: 'تسليم:', es: 'Entrega:' },
  'demo_teacher.homework.back_btn': {
    en: 'Back to assignments',
    ar: 'رجوع للواجبات',
    es: 'Volver a las tareas',
  },
  'demo_teacher.homework.section.submissions': {
    en: 'Student Submissions',
    ar: 'تسليمات الطلاب',
    es: 'Entregas de los estudiantes',
  },
  'demo_teacher.homework.status.submitted': { en: 'Submitted', ar: 'سُلّم', es: 'Entregado' },
  'demo_teacher.homework.status.overdue': { en: 'Overdue', ar: 'متأخّر', es: 'Atrasado' },
  'demo_teacher.homework.status.not_started': {
    en: 'Not Started',
    ar: 'ما بدأ',
    es: 'Sin empezar',
  },
  'demo_teacher.homework.essay.submitted_prefix': {
    en: 'Macbeth Essay - Submitted',
    ar: 'مقال Macbeth - سُلّم',
    es: 'Redacción de Macbeth - Entregada',
  },
  'demo_teacher.homework.section.ai_feedback': {
    en: 'AI Feedback',
    ar: 'ملاحظات AI',
    es: 'Comentarios de la IA',
  },
  'demo_teacher.homework.predicted_grade': {
    en: 'Predicted Grade',
    ar: 'الدرجة المتوقّعة',
    es: 'Nota prevista',
  },
  'demo_teacher.homework.grade_word': { en: 'Grade', ar: 'درجة', es: 'Nota' },
  'demo_teacher.homework.overall_label': { en: 'Overall', ar: 'الإجمالي', es: 'Global' },
  'demo_teacher.homework.review_heading': {
    en: 'Teacher Review',
    ar: 'مراجعة المعلم',
    es: 'Revisión del profesor',
  },
  'demo_teacher.homework.field.adjusted_grade': {
    en: 'Adjusted Grade',
    ar: 'الدرجة المعدّلة',
    es: 'Nota ajustada',
  },
  'demo_teacher.homework.option.agree': {
    en: 'Grade 6 (agree with AI)',
    ar: 'درجة ٦ (متّفق مع AI)',
    es: 'Nota 6 (de acuerdo con la IA)',
  },
  'demo_teacher.homework.option.g7': { en: 'Grade 7', ar: 'درجة ٧', es: 'Nota 7' },
  'demo_teacher.homework.option.g5': { en: 'Grade 5', ar: 'درجة ٥', es: 'Nota 5' },
  'demo_teacher.homework.option.g4': { en: 'Grade 4', ar: 'درجة ٤', es: 'Nota 4' },
  'demo_teacher.homework.field.comments': {
    en: 'Additional Comments',
    ar: 'ملاحظات إضافية',
    es: 'Comentarios adicionales',
  },
  'demo_teacher.homework.field.comments_placeholder': {
    en: 'Add your own feedback for the student...',
    ar: 'ضيف ملاحظاتك للطالب...',
    es: 'Añade tus propios comentarios para el estudiante...',
  },
  'demo_teacher.homework.return_btn': {
    en: 'Return to Student',
    ar: 'رجّع للطالب',
    es: 'Devolver al estudiante',
  },
  'demo_teacher.homework.toast_returned': {
    en: 'Feedback returned to student (demo mode)',
    ar: 'الملاحظات اترجّعت للطالب (وضع ديمو)',
    es: 'Comentarios devueltos al estudiante (modo demostración)',
  },

  // /demo/student/courses
  'demo_student.courses.back_dashboard': {
    en: 'Back to dashboard',
    ar: 'رجوع للوحة',
    es: 'Volver al panel',
  },
  'demo_student.courses.title': { en: 'My Courses', ar: 'مقرراتي', es: 'Mis cursos' },
  'demo_student.courses.modules_suffix': { en: 'modules', ar: 'وحدة', es: 'módulos' },
  'demo_student.courses.completed_badge': { en: 'Completed!', ar: 'اكتمل!', es: '¡Completado!' },
  'demo_student.courses.review_btn': { en: 'Review', ar: 'راجع', es: 'Repasar' },
  'demo_student.courses.continue_btn': { en: 'Continue', ar: 'كمّل', es: 'Continuar' },

  // /demo/student/flashcards
  'demo_student.flashcards.banner': {
    en: 'Flashcard demo - progress is not saved.',
    ar: 'ديمو بطاقات تعليمية - التقدّم ما يتحفظ.',
    es: 'Demo de tarjetas - el progreso no se guarda.',
  },
  'demo_student.flashcards.title': {
    en: 'Flashcard Practice',
    ar: 'تدريب البطاقات التعليمية',
    es: 'Práctica con tarjetas',
  },
  'demo_student.flashcards.subtitle': {
    en: 'Click a card to reveal the definition, then mark what you know',
    ar: 'دوس على البطاقة تبيّن لك التعريف، بعدين علّم وش تعرف',
    es: 'Haz clic en una tarjeta para ver la definición y luego marca lo que sabes',
  },
  'demo_student.flashcards.topic.literary': {
    en: 'Literary Terms',
    ar: 'مصطلحات أدبية',
    es: 'Términos literarios',
  },
  'demo_student.flashcards.topic.inspector': {
    en: 'Inspector Calls',
    ar: 'Inspector Calls',
    es: 'Inspector Calls',
  },
  'demo_student.flashcards.topic.macbeth': { en: 'Macbeth', ar: 'Macbeth', es: 'Macbeth' },
  'demo_student.flashcards.topic.poetry': {
    en: 'Poetry Terms',
    ar: 'مصطلحات شعرية',
    es: 'Términos poéticos',
  },
  'demo_student.flashcards.topic.language': {
    en: 'Language Techniques',
    ar: 'تقنيات اللغة',
    es: 'Recursos lingüísticos',
  },
  'demo_student.flashcards.card_count_pre': { en: 'Card', ar: 'بطاقة', es: 'Tarjeta' },
  'demo_student.flashcards.card_count_of': { en: 'of', ar: 'من', es: 'de' },
  'demo_student.flashcards.face.term': { en: 'Term', ar: 'المصطلح', es: 'Término' },
  'demo_student.flashcards.face.definition': { en: 'Definition', ar: 'التعريف', es: 'Definición' },
  'demo_student.flashcards.face.reveal_hint': {
    en: 'Click to reveal definition',
    ar: 'دوس تشوف التعريف',
    es: 'Haz clic para ver la definición',
  },
  'demo_student.flashcards.btn.shuffle': { en: 'Shuffle', ar: 'خلّط', es: 'Barajar' },
  'demo_student.flashcards.btn.dont_know': { en: "Don't Know", ar: 'ما أعرف', es: 'No lo sé' },
  'demo_student.flashcards.btn.know': { en: 'Know', ar: 'أعرف', es: 'Lo sé' },
  'demo_student.flashcards.end.session_complete': {
    en: 'Session Complete',
    ar: 'الجلسة اكتملت',
    es: 'Sesión completada',
  },
  'demo_student.flashcards.end.you_knew_pre': { en: 'You knew', ar: 'إنت عرفت', es: 'Sabías' },
  'demo_student.flashcards.end.out_of': { en: 'out of', ar: 'من', es: 'de' },
  'demo_student.flashcards.end.cards_suffix': { en: 'cards', ar: 'بطاقة', es: 'tarjetas' },
  'demo_student.flashcards.end.known_label': { en: 'known', ar: 'معروف', es: 'sabidas' },
  'demo_student.flashcards.end.to_review_label': {
    en: 'to review',
    ar: 'للمراجعة',
    es: 'por repasar',
  },
  'demo_student.flashcards.end.keep_practicing': {
    en: 'Keep practicing the ones you missed!',
    ar: 'كمّل تدرّب على اللي فاتك!',
    es: '¡Sigue practicando las que fallaste!',
  },
  'demo_student.flashcards.end.perfect': {
    en: 'Perfect score - well done!',
    ar: 'علامة تامّة - أحسنت!',
    es: 'Puntuación perfecta - ¡bien hecho!',
  },
  'demo_student.flashcards.end.try_again': {
    en: 'Try Again',
    ar: 'جرّب مرة ثانية',
    es: 'Intentar de nuevo',
  },
  'demo_student.flashcards.end.shuffle_retry': {
    en: 'Shuffle & Retry',
    ar: 'خلّط وأعد',
    es: 'Barajar y reintentar',
  },
  'demo_student.flashcards.cta.body': {
    en: 'Access 2,000+ flashcards across all topics and exam boards.',
    ar: 'ادخل لأكثر من ٢٠٠٠ بطاقة في كل المواضيع وبوردات الامتحان.',
    es: 'Accede a más de 2000 tarjetas de todos los temas y exam boards.',
  },
  'demo_student.flashcards.cta.btn': {
    en: 'Start free trial',
    ar: 'ابدأ التجربة المجانية',
    es: 'Empezar prueba gratuita',
  },
}
