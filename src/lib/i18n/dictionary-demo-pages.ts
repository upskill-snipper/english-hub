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
  },
  'demo_school.teachers.title': { en: 'Teachers', ar: 'المعلمون' },
  'demo_school.teachers.subtitle': {
    en: 'Manage your English department staff, view workload, and track teaching activity.',
    ar: 'دير طاقم قسم الإنجليزي، شوف عبء العمل، وتتبّع نشاط التدريس.',
  },
  'demo_school.teachers.stat.total': { en: 'Total Teachers', ar: 'إجمالي المعلمين' },
  'demo_school.teachers.stat.active': { en: 'Active This Week', ar: 'فعّالين هالأسبوع' },
  'demo_school.teachers.stat.covered': { en: 'Classes Covered', ar: 'الفصول المغطّاة' },
  'demo_school.teachers.col.name': { en: 'Name', ar: 'الاسم' },
  'demo_school.teachers.col.email': { en: 'Email', ar: 'الإيميل' },
  'demo_school.teachers.col.role': { en: 'Role', ar: 'الدور' },
  'demo_school.teachers.col.classes': { en: 'Classes', ar: 'الفصول' },
  'demo_school.teachers.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'demo_school.teachers.role.hod': { en: 'HOD', ar: 'رئيس قسم' },
  'demo_school.teachers.role.teacher': { en: 'Teacher', ar: 'معلم' },
  'demo_school.teachers.last.today': { en: 'Today', ar: 'اليوم' },
  'demo_school.teachers.last.yesterday': { en: 'Yesterday', ar: 'أمس' },
  'demo_school.teachers.last.days_2': { en: '2 days ago', ar: 'قبل يومين' },
  'demo_school.teachers.last.days_3': { en: '3 days ago', ar: 'قبل ٣ أيام' },
  'demo_school.teachers.last.week_1': { en: '1 week ago', ar: 'قبل أسبوع' },
  'demo_school.teachers.row.classes_mobile': { en: 'Classes:', ar: 'الفصول:' },
  'demo_school.teachers.row.active_mobile': { en: 'Active:', ar: 'النشاط:' },
  'demo_school.teachers.footer.demo_data': { en: 'Demo data', ar: 'بيانات ديمو' },
  'demo_school.teachers.footer.teachers_suffix': { en: 'teachers', ar: 'معلم' },
  'demo_school.teachers.footer.classes_suffix': { en: 'classes', ar: 'فصل' },

  // /demo/school/classes
  'demo_school.classes.title': { en: 'Classes', ar: 'الفصول' },
  'demo_school.classes.subtitle_suffix': {
    en: 'classes across all year groups',
    ar: 'فصل في كل السنوات الدراسية',
  },
  'demo_school.classes.create_btn': { en: 'Create Class', ar: 'سوّ فصل' },
  'demo_school.classes.create_toast_title': {
    en: 'Available with full account',
    ar: 'متوفّر مع الحساب الكامل',
  },
  'demo_school.classes.create_toast_desc': {
    en: 'Register your school to create and manage classes.',
    ar: 'سجّل مدرستك تسوّي وتدير الفصول.',
  },
  'demo_school.classes.search_placeholder': {
    en: 'Search classes by name, teacher, exam board...',
    ar: 'دوّر فصول بالاسم، المعلم، بورد الامتحان...',
  },
  'demo_school.classes.empty': {
    en: 'No classes match your search.',
    ar: 'ما في فصول تطابق بحثك.',
  },
  'demo_school.classes.col.students': { en: 'Students', ar: 'الطلاب' },
  'demo_school.classes.col.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة' },
  'demo_school.classes.col.reading_age': { en: 'Reading Age', ar: 'عمر القراءة' },
  'demo_school.classes.col.completion': { en: 'Completion', ar: 'الإنجاز' },

  // /demo/school/department
  'demo_school.dept.banner': {
    en: 'You are viewing a demo department dashboard with sample data.',
    ar: 'إنت تشوف ديمو لوحة القسم ببيانات تجريبية.',
  },
  'demo_school.dept.title': { en: 'Department Overview', ar: 'نظرة عامة على القسم' },
  'demo_school.dept.subtitle_dept': { en: 'English Department', ar: 'قسم الإنجليزي' },
  'demo_school.dept.subtitle_teachers_suffix': { en: 'Teachers', ar: 'معلم' },
  'demo_school.dept.download_btn': { en: 'Download Department Report', ar: 'حمّل تقرير القسم' },
  'demo_school.dept.kpi.total_teachers': {
    en: 'Total English Teachers',
    ar: 'إجمالي معلمي الإنجليزي',
  },
  'demo_school.dept.kpi.avg_score': { en: 'Average Student Score', ar: 'متوسط درجة الطالب' },
  'demo_school.dept.kpi.target': { en: 'Department Target', ar: 'هدف القسم' },
  'demo_school.dept.kpi.gap': { en: 'Gap to Target', ar: 'الفجوة عن الهدف' },
  'demo_school.dept.section.teacher_comparison': {
    en: 'Teacher Comparison',
    ar: 'مقارنة المعلمين',
  },
  'demo_school.dept.col.teacher': { en: 'Teacher', ar: 'المعلم' },
  'demo_school.dept.col.classes': { en: 'Classes', ar: 'الفصول' },
  'demo_school.dept.col.students': { en: 'Students', ar: 'الطلاب' },
  'demo_school.dept.col.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة' },
  'demo_school.dept.col.completion': { en: 'Completion', ar: 'الإنجاز' },
  'demo_school.dept.col.at_risk': { en: 'At-Risk', ar: 'في خطر' },
  'demo_school.dept.section.class_ranking': {
    en: 'Class Performance Ranking',
    ar: 'ترتيب أداء الفصول',
  },
  'demo_school.dept.section.year_trends': {
    en: 'Year Group Trends',
    ar: 'اتجاهات السنوات الدراسية',
  },
  'demo_school.dept.trend_suffix_month': { en: 'from last month', ar: 'من الشهر اللي طاف' },
  'demo_school.dept.section.workload': { en: 'Workload Distribution', ar: 'توزيع عبء العمل' },
  'demo_school.dept.workload.avg_pre': { en: 'Average:', ar: 'المتوسط:' },
  'demo_school.dept.workload.avg_students_suffix': {
    en: 'students per teacher. Flagged if above',
    ar: 'طالب لكل معلم. تنبيه لو فوق',
  },
  'demo_school.dept.workload.students_label': { en: 'students', ar: 'طالب' },
  'demo_school.dept.workload.classes_label': { en: 'classes', ar: 'فصل' },
  'demo_school.dept.workload.high_load': { en: 'High Load', ar: 'عبء عالي' },
  'demo_school.dept.section.cpd': { en: 'CPD Recommendations', ar: 'توصيات التطوير المهني' },

  // /demo/school/benchmarks
  'demo_school.bench.title': { en: 'Performance Benchmarks', ar: 'معايير الأداء' },
  'demo_school.bench.subtitle': {
    en: 'How Riverside Academy compares to national and platform averages',
    ar: 'شلون Riverside Academy تقارن بمتوسطات وطنية ومتوسطات المنصة',
  },
  'demo_school.bench.download_btn': { en: 'Download Benchmark Report', ar: 'حمّل تقرير المعايير' },
  'demo_school.bench.downloading': { en: 'Downloading...', ar: 'يحمّل...' },
  'demo_school.bench.toast_opened': {
    en: 'Benchmark report opened for download',
    ar: 'تقرير المعايير فتح للتحميل',
  },
  'demo_school.bench.metric.avg_score': { en: 'Average Score', ar: 'متوسط الدرجة' },
  'demo_school.bench.metric.completion': { en: 'Completion Rate', ar: 'معدّل الإنجاز' },
  'demo_school.bench.metric.at_risk': { en: 'At-Risk %', ar: 'نسبة في خطر' },
  'demo_school.bench.metric.active': { en: 'Active Rate', ar: 'معدّل النشاط' },
  'demo_school.bench.badge.better': { en: 'Better', ar: 'أحسن' },
  'demo_school.bench.badge.above_avg': { en: 'Above Avg', ar: 'فوق المتوسط' },
  'demo_school.bench.vs_national': { en: 'vs', ar: 'مقابل' },
  'demo_school.bench.national_suffix': { en: 'national', ar: 'وطني' },
  'demo_school.bench.delta.lower_than_avg': { en: 'lower than average', ar: 'أقل من المتوسط' },
  'demo_school.bench.delta.above_avg': { en: 'above average', ar: 'فوق المتوسط' },
  'demo_school.bench.section.year_group': {
    en: 'Year Group Benchmarks',
    ar: 'معايير السنوات الدراسية',
  },
  'demo_school.bench.section.year_group_desc': {
    en: 'Performance by year group compared to national averages',
    ar: 'الأداء حسب السنة الدراسية مقابل المتوسط الوطني',
  },
  'demo_school.bench.col.year_group': { en: 'Year Group', ar: 'السنة الدراسية' },
  'demo_school.bench.col.school_avg': { en: 'School Avg', ar: 'متوسط المدرسة' },
  'demo_school.bench.col.national_avg': { en: 'National Avg', ar: 'المتوسط الوطني' },
  'demo_school.bench.col.difference': { en: 'Difference', ar: 'الفرق' },
  'demo_school.bench.col.percentile': { en: 'Percentile', ar: 'الترتيب المئوي' },
  'demo_school.bench.section.subject': {
    en: 'Subject Area Comparison',
    ar: 'مقارنة مجالات المواد',
  },
  'demo_school.bench.section.subject_desc': {
    en: 'School performance vs platform-wide averages by subject',
    ar: 'أداء المدرسة مقابل متوسط المنصة حسب المادة',
  },
  'demo_school.bench.subject.platform_label': { en: 'Platform:', ar: 'المنصة:' },
  'demo_school.bench.subject.school_label': { en: 'School:', ar: 'المدرسة:' },
  'demo_school.bench.legend.school': { en: 'School', ar: 'المدرسة' },
  'demo_school.bench.legend.platform': { en: 'Platform', ar: 'المنصة' },
  'demo_school.bench.section.trend': { en: 'Trend Over Time', ar: 'الاتجاه عبر الزمن' },
  'demo_school.bench.section.trend_desc': {
    en: 'Four-term comparison showing improvement trajectory',
    ar: 'مقارنة أربع فصول تبيّن مسار التحسّن',
  },
  'demo_school.bench.trend.national_label': { en: 'National:', ar: 'وطني:' },
  'demo_school.bench.trend.school_label': { en: 'School:', ar: 'المدرسة:' },
  'demo_school.bench.legend.school_avg': { en: 'School Average', ar: 'متوسط المدرسة' },
  'demo_school.bench.legend.national_avg': { en: 'National Average', ar: 'المتوسط الوطني' },
  'demo_school.bench.trend.improvement_suffix': {
    en: 'improvement over 4 terms',
    ar: 'تحسّن عبر ٤ فصول',
  },
  'demo_school.bench.section.recommendations': { en: 'Recommendations', ar: 'التوصيات' },
  'demo_school.bench.section.recommendations_desc': {
    en: 'Actionable insights based on benchmark analysis',
    ar: 'رؤى قابلة للتطبيق بناء على تحليل المعايير',
  },

  // /demo/teacher/classes
  'demo_teacher.classes.banner_eyebrow': { en: 'Teacher Demo', ar: 'ديمو المعلم' },
  'demo_teacher.classes.banner_suffix': {
    en: 'Viewing sample class data for',
    ar: 'تشوف بيانات فصول تجريبية لـ',
  },
  'demo_teacher.classes.title': { en: 'My Classes', ar: 'فصولي' },
  'demo_teacher.classes.subtitle_classes_suffix': { en: 'classes', ar: 'فصل' },
  'demo_teacher.classes.subtitle_dept_suffix': { en: 'Department', ar: 'القسم' },
  'demo_teacher.classes.back_btn': { en: 'Back to Dashboard', ar: 'رجوع للوحة' },
  'demo_teacher.classes.kpi.total_students': { en: 'Total Students', ar: 'إجمالي الطلاب' },
  'demo_teacher.classes.kpi.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة' },
  'demo_teacher.classes.kpi.avg_completion': { en: 'Avg Completion', ar: 'متوسط الإنجاز' },
  'demo_teacher.classes.kpi.at_risk_students': { en: 'At-Risk Students', ar: 'طلاب في خطر' },
  'demo_teacher.classes.year_prefix': { en: 'Year', ar: 'السنة' },
  'demo_teacher.classes.card.students': { en: 'Students', ar: 'الطلاب' },
  'demo_teacher.classes.card.avg_score': { en: 'Avg Score', ar: 'متوسط الدرجة' },
  'demo_teacher.classes.card.trend': { en: 'Trend', ar: 'الاتجاه' },
  'demo_teacher.classes.card.completion': { en: 'Completion', ar: 'الإنجاز' },
  'demo_teacher.classes.at_risk_single': { en: 'student at risk', ar: 'طالب في خطر' },
  'demo_teacher.classes.at_risk_plural': { en: 'students at risk', ar: 'طلاب في خطر' },
  'demo_teacher.classes.all_on_track': { en: 'All students on track', ar: 'كل الطلاب على المسار' },
  'demo_teacher.classes.footer.demo_data': { en: 'Demo data', ar: 'بيانات ديمو' },
  'demo_teacher.classes.footer.classes_suffix': { en: 'classes', ar: 'فصل' },

  // /demo/teacher/students
  'demo_teacher.students.banner': {
    en: 'You are viewing an interactive demo with sample data. No real student data is used.',
    ar: 'إنت تشوف ديمو تفاعلي ببيانات تجريبية. ما نستخدم بيانات طلاب حقيقية.',
  },
  'demo_teacher.students.back_dashboard': { en: 'Teacher Dashboard', ar: 'لوحة المعلم' },
  'demo_teacher.students.title': { en: 'My Students', ar: 'طلابي' },
  'demo_teacher.students.subtitle': {
    en: 'Track progress, scores, and engagement across your classes.',
    ar: 'تتبّع التقدّم والدرجات والمشاركة في كل فصولك.',
  },
  'demo_teacher.students.at_risk_flagged_single': {
    en: 'student flagged as at risk',
    ar: 'طالب اتنبّه إنه في خطر',
  },
  'demo_teacher.students.at_risk_flagged_plural': {
    en: 'students flagged as at risk',
    ar: 'طلاب اتنبّه إنهم في خطر',
  },
  'demo_teacher.students.filter.all_classes': { en: 'All Classes', ar: 'كل الفصول' },
  'demo_teacher.students.report_btn_prefix': { en: 'View Class Report:', ar: 'شوف تقرير الفصل:' },
  'demo_teacher.students.report_toast': {
    en: 'Class reports available with full account',
    ar: 'تقارير الفصول متوفّرة مع الحساب الكامل',
  },
  'demo_teacher.students.grade.avg_working': {
    en: 'Avg Working At Grade',
    ar: 'متوسط الدرجة الحالية',
  },
  'demo_teacher.students.grade.avg_predicted': {
    en: 'Avg Predicted Grade',
    ar: 'متوسط الدرجة المتوقّعة',
  },
  'demo_teacher.students.grade.distribution': { en: 'Grade Distribution', ar: 'توزيع الدرجات' },
  'demo_teacher.students.grade_word': { en: 'Grade', ar: 'درجة' },
  'demo_teacher.students.col.name': { en: 'Name', ar: 'الاسم' },
  'demo_teacher.students.col.class': { en: 'Class', ar: 'الفصل' },
  'demo_teacher.students.col.working_at': { en: 'Working At', ar: 'الحالية' },
  'demo_teacher.students.col.predicted': { en: 'Predicted', ar: 'المتوقّعة' },
  'demo_teacher.students.col.target': { en: 'Target', ar: 'المستهدفة' },
  'demo_teacher.students.col.status': { en: 'Status', ar: 'الحالة' },
  'demo_teacher.students.col.last_active': { en: 'Last Active', ar: 'آخر نشاط' },
  'demo_teacher.students.status.at_risk': { en: 'At Risk', ar: 'في خطر' },
  'demo_teacher.students.status.on_track': { en: 'On Track', ar: 'على المسار' },
  'demo_teacher.students.row.year_prefix': { en: 'Year', ar: 'السنة' },
  'demo_teacher.students.footer.demo_data': { en: 'Demo data', ar: 'بيانات ديمو' },
  'demo_teacher.students.footer.students_suffix': { en: 'students', ar: 'طالب' },
  'demo_teacher.students.footer.classes_suffix': { en: 'classes', ar: 'فصل' },

  // /demo/teacher/essays
  'demo_teacher.essays.banner': {
    en: 'This is an interactive demo of AI essay marking. No real data is saved.',
    ar: 'هذا ديمو تفاعلي لتصحيح المقالات بـ AI. ما يتحفظ بيانات حقيقية.',
  },
  'demo_teacher.essays.title': { en: 'AI Essay Marking', ar: 'تصحيح المقالات بـ AI' },
  'demo_teacher.essays.subtitle': {
    en: 'AI-powered essay analysis with AO scoring, detailed feedback, and improvement suggestions.',
    ar: 'تحليل مقالات بـ AI مع تقييم AO وملاحظات تفصيلية واقتراحات تحسين.',
  },
  'demo_teacher.essays.sample_label_pre': { en: 'Sample', ar: 'عينة' },
  'demo_teacher.essays.sample_label_of': { en: 'of', ar: 'من' },
  'demo_teacher.essays.analyse_btn': { en: 'Analyse Essay', ar: 'حلّل المقال' },
  'demo_teacher.essays.analysing_btn': { en: 'Analysing...', ar: 'يحلّل...' },
  'demo_teacher.essays.try_another_btn': { en: 'Try Another Essay', ar: 'جرّب مقال ثاني' },
  'demo_teacher.essays.loading_main': {
    en: 'Analysing essay against GCSE assessment objectives...',
    ar: 'يحلّل المقال مقابل أهداف تقييم GCSE...',
  },
  'demo_teacher.essays.loading_sub': {
    en: 'Evaluating AO1, AO2, AO3, and AO4 criteria',
    ar: 'يقيّم معايير AO1 و AO2 و AO3 و AO4',
  },
  'demo_teacher.essays.predicted_grade': { en: 'Predicted Grade', ar: 'الدرجة المتوقّعة' },
  'demo_teacher.essays.grade_word': { en: 'Grade', ar: 'درجة' },
  'demo_teacher.essays.section.assessment': { en: 'Assessment Objectives', ar: 'أهداف التقييم' },
  'demo_teacher.essays.ao.ao1': { en: 'AO1 Reading', ar: 'AO1 قراءة' },
  'demo_teacher.essays.ao.ao2': { en: 'AO2 Analysis', ar: 'AO2 تحليل' },
  'demo_teacher.essays.ao.ao3': { en: 'AO3 Context', ar: 'AO3 سياق' },
  'demo_teacher.essays.ao.ao4': { en: 'AO4 SPaG', ar: 'AO4 SPaG' },
  'demo_teacher.essays.section.detailed_feedback': {
    en: 'Detailed Feedback',
    ar: 'ملاحظات تفصيلية',
  },
  'demo_teacher.essays.section.strengths': { en: 'Strengths', ar: 'نقاط القوة' },
  'demo_teacher.essays.section.improvements': {
    en: 'Areas for Improvement',
    ar: 'مجالات للتحسين',
  },
  'demo_teacher.essays.cta_title': {
    en: 'Use AI marking with your students',
    ar: 'استخدم تصحيح AI مع طلابك',
  },
  'demo_teacher.essays.cta_body': {
    en: 'Save hours of marking time with instant, detailed feedback on every essay.',
    ar: 'وفّر ساعات من وقت التصحيح بملاحظات لحظية وتفصيلية على كل مقال.',
  },
  'demo_teacher.essays.cta_btn': { en: 'Start free trial', ar: 'ابدأ التجربة المجانية' },

  // /demo/teacher/quizzes
  'demo_teacher.quizzes.banner_eyebrow': { en: 'Teacher Demo', ar: 'ديمو المعلم' },
  'demo_teacher.quizzes.banner_body': {
    en: 'Try the Quiz Builder with sample data. No account needed.',
    ar: 'جرّب بنّاء الاختبارات ببيانات تجريبية. ما يحتاج حساب.',
  },
  'demo_teacher.quizzes.title': { en: 'Quiz Builder', ar: 'بنّاء الاختبارات' },
  'demo_teacher.quizzes.subtitle': {
    en: 'Generate multiple-choice quizzes aligned to your exam board in seconds.',
    ar: 'سوّ اختبارات اختيار من متعدّد متوافقة مع بوردك خلال ثواني.',
  },
  'demo_teacher.quizzes.label.topic': { en: 'Topic / Text', ar: 'الموضوع / النص' },
  'demo_teacher.quizzes.placeholder.topic': {
    en: 'e.g. An Inspector Calls, Macbeth...',
    ar: 'مثلاً An Inspector Calls، Macbeth...',
  },
  'demo_teacher.quizzes.label.year_group': { en: 'Year Group', ar: 'السنة الدراسية' },
  'demo_teacher.quizzes.year_option_prefix': { en: 'Year', ar: 'السنة' },
  'demo_teacher.quizzes.label.difficulty': { en: 'Difficulty', ar: 'الصعوبة' },
  'demo_teacher.quizzes.difficulty.foundation': { en: 'Foundation', ar: 'أساسي' },
  'demo_teacher.quizzes.difficulty.higher': { en: 'Higher', ar: 'متقدّم' },
  'demo_teacher.quizzes.label.num_questions': { en: 'Number of Questions', ar: 'عدد الأسئلة' },
  'demo_teacher.quizzes.generate_btn': { en: 'Generate Quiz', ar: 'سوّ اختبار' },
  'demo_teacher.quizzes.generating_btn': { en: 'Generating Quiz...', ar: 'يسوّي الاختبار...' },
  'demo_teacher.quizzes.result.subtitle_year_prefix': { en: 'Year', ar: 'السنة' },
  'demo_teacher.quizzes.result.subtitle_questions_suffix': { en: 'questions', ar: 'سؤال' },
  'demo_teacher.quizzes.download_quiz_btn': { en: 'Download Quiz', ar: 'حمّل الاختبار' },
  'demo_teacher.quizzes.download_answers_btn': {
    en: 'Download Answer Sheet',
    ar: 'حمّل ورقة الإجابات',
  },
  'demo_teacher.quizzes.mark_scheme_prefix': { en: 'Mark scheme:', ar: 'جدول التصحيح:' },
  'demo_teacher.quizzes.assign_btn': { en: 'Assign to Class', ar: 'كلّف الفصل' },
  'demo_teacher.quizzes.toast_pre': {
    en: 'Available with full account -',
    ar: 'متوفّر مع الحساب الكامل -',
  },
  'demo_teacher.quizzes.toast_link': { en: 'Start free trial', ar: 'ابدأ التجربة المجانية' },

  // /demo/teacher/homework
  'demo_teacher.homework.banner': {
    en: 'This is an interactive demo of homework management. No real data is saved.',
    ar: 'هذا ديمو تفاعلي لإدارة الواجبات. ما يتحفظ بيانات حقيقية.',
  },
  'demo_teacher.homework.title': { en: 'Homework Dashboard', ar: 'لوحة الواجبات' },
  'demo_teacher.homework.subtitle': {
    en: 'Set, track, and mark homework assignments for your classes.',
    ar: 'سوّ، تتبّع، وصحّح واجبات لفصولك.',
  },
  'demo_teacher.homework.auto_gen_btn': { en: 'Auto-Generate Homework', ar: 'سوّ واجب تلقائياً' },
  'demo_teacher.homework.tab.set': { en: 'Set Homework', ar: 'سوّ واجب' },
  'demo_teacher.homework.tab.track': { en: 'Track Progress', ar: 'تتبّع التقدّم' },
  'demo_teacher.homework.tab.mark': { en: 'Mark Work', ar: 'صحّح الشغل' },
  'demo_teacher.homework.ai_card.title': {
    en: 'Auto-Generate Homework with AI',
    ar: 'سوّ واجب تلقائياً بـ AI',
  },
  'demo_teacher.homework.ai_card.body': {
    en: 'Select a topic, type, and grade level - get a complete homework assignment with mark scheme, success criteria, and extension tasks in seconds.',
    ar: 'اختر موضوع ونوع ومستوى - تأخذ واجب كامل مع جدول التصحيح ومعايير النجاح ومهام إضافية خلال ثواني.',
  },
  'demo_teacher.homework.create_heading': { en: 'Create New Assignment', ar: 'سوّ واجب جديد' },
  'demo_teacher.homework.field.class': { en: 'Class', ar: 'الفصل' },
  'demo_teacher.homework.field.class_placeholder': { en: 'Select class...', ar: 'اختر فصل...' },
  'demo_teacher.homework.field.type': { en: 'Assignment Type', ar: 'نوع الواجب' },
  'demo_teacher.homework.field.type_placeholder': { en: 'Select type...', ar: 'اختر نوع...' },
  'demo_teacher.homework.field.title': { en: 'Assignment Title', ar: 'عنوان الواجب' },
  'demo_teacher.homework.field.title_placeholder': {
    en: 'e.g. Macbeth Act 1 Analysis Essay',
    ar: 'مثلاً مقال تحليل Macbeth الفصل ١',
  },
  'demo_teacher.homework.field.due_date': { en: 'Due Date', ar: 'تاريخ التسليم' },
  'demo_teacher.homework.field.instructions': { en: 'Instructions', ar: 'التعليمات' },
  'demo_teacher.homework.field.instructions_placeholder': {
    en: 'Write detailed instructions for your students...',
    ar: 'اكتب تعليمات تفصيلية لطلابك...',
  },
  'demo_teacher.homework.set_btn': { en: 'Set Homework', ar: 'سوّ الواجب' },
  'demo_teacher.homework.toast_set': {
    en: 'Assignment set (demo mode)',
    ar: 'الواجب اتسوّى (وضع ديمو)',
  },
  'demo_teacher.homework.created.heading': { en: 'Assignment Created', ar: 'الواجب اتسوّى' },
  'demo_teacher.homework.created.class': { en: 'Class', ar: 'الفصل' },
  'demo_teacher.homework.created.title': { en: 'Title', ar: 'العنوان' },
  'demo_teacher.homework.created.type': { en: 'Type', ar: 'النوع' },
  'demo_teacher.homework.created.due': { en: 'Due', ar: 'التسليم' },
  'demo_teacher.homework.progress.submitted_suffix': { en: 'submitted', ar: 'سُلّم' },
  'demo_teacher.homework.progress.overdue_suffix': { en: 'overdue', ar: 'متأخّر' },
  'demo_teacher.homework.progress.complete': { en: 'Complete', ar: 'مكتمل' },
  'demo_teacher.homework.due_prefix': { en: 'Due:', ar: 'تسليم:' },
  'demo_teacher.homework.back_btn': { en: 'Back to assignments', ar: 'رجوع للواجبات' },
  'demo_teacher.homework.section.submissions': { en: 'Student Submissions', ar: 'تسليمات الطلاب' },
  'demo_teacher.homework.status.submitted': { en: 'Submitted', ar: 'سُلّم' },
  'demo_teacher.homework.status.overdue': { en: 'Overdue', ar: 'متأخّر' },
  'demo_teacher.homework.status.not_started': { en: 'Not Started', ar: 'ما بدأ' },
  'demo_teacher.homework.essay.submitted_prefix': {
    en: 'Macbeth Essay - Submitted',
    ar: 'مقال Macbeth - سُلّم',
  },
  'demo_teacher.homework.section.ai_feedback': { en: 'AI Feedback', ar: 'ملاحظات AI' },
  'demo_teacher.homework.predicted_grade': { en: 'Predicted Grade', ar: 'الدرجة المتوقّعة' },
  'demo_teacher.homework.grade_word': { en: 'Grade', ar: 'درجة' },
  'demo_teacher.homework.overall_label': { en: 'Overall', ar: 'الإجمالي' },
  'demo_teacher.homework.review_heading': { en: 'Teacher Review', ar: 'مراجعة المعلم' },
  'demo_teacher.homework.field.adjusted_grade': { en: 'Adjusted Grade', ar: 'الدرجة المعدّلة' },
  'demo_teacher.homework.option.agree': {
    en: 'Grade 6 (agree with AI)',
    ar: 'درجة ٦ (اتفق مع AI)',
  },
  'demo_teacher.homework.option.g7': { en: 'Grade 7', ar: 'درجة ٧' },
  'demo_teacher.homework.option.g5': { en: 'Grade 5', ar: 'درجة ٥' },
  'demo_teacher.homework.option.g4': { en: 'Grade 4', ar: 'درجة ٤' },
  'demo_teacher.homework.field.comments': { en: 'Additional Comments', ar: 'ملاحظات إضافية' },
  'demo_teacher.homework.field.comments_placeholder': {
    en: 'Add your own feedback for the student...',
    ar: 'ضيف ملاحظاتك للطالب...',
  },
  'demo_teacher.homework.return_btn': { en: 'Return to Student', ar: 'رجّع للطالب' },
  'demo_teacher.homework.toast_returned': {
    en: 'Feedback returned to student (demo mode)',
    ar: 'الملاحظات اترجّعت للطالب (وضع ديمو)',
  },

  // /demo/student/courses
  'demo_student.courses.back_dashboard': { en: 'Back to dashboard', ar: 'رجوع للوحة' },
  'demo_student.courses.title': { en: 'My Courses', ar: 'مقرراتي' },
  'demo_student.courses.modules_suffix': { en: 'modules', ar: 'وحدة' },
  'demo_student.courses.completed_badge': { en: 'Completed!', ar: 'اكتمل!' },
  'demo_student.courses.review_btn': { en: 'Review', ar: 'راجع' },
  'demo_student.courses.continue_btn': { en: 'Continue', ar: 'كمّل' },

  // /demo/student/flashcards
  'demo_student.flashcards.banner': {
    en: 'Flashcard demo - progress is not saved.',
    ar: 'ديمو بطاقات تعليمية - التقدّم ما يتحفظ.',
  },
  'demo_student.flashcards.title': { en: 'Flashcard Practice', ar: 'تدريب البطاقات التعليمية' },
  'demo_student.flashcards.subtitle': {
    en: 'Click a card to reveal the definition, then mark what you know',
    ar: 'دوس على البطاقة تبيّن لك التعريف، بعدين علّم وش تعرف',
  },
  'demo_student.flashcards.topic.literary': { en: 'Literary Terms', ar: 'مصطلحات أدبية' },
  'demo_student.flashcards.topic.inspector': { en: 'Inspector Calls', ar: 'Inspector Calls' },
  'demo_student.flashcards.topic.macbeth': { en: 'Macbeth', ar: 'Macbeth' },
  'demo_student.flashcards.topic.poetry': { en: 'Poetry Terms', ar: 'مصطلحات شعرية' },
  'demo_student.flashcards.topic.language': { en: 'Language Techniques', ar: 'تقنيات اللغة' },
  'demo_student.flashcards.card_count_pre': { en: 'Card', ar: 'بطاقة' },
  'demo_student.flashcards.card_count_of': { en: 'of', ar: 'من' },
  'demo_student.flashcards.face.term': { en: 'Term', ar: 'المصطلح' },
  'demo_student.flashcards.face.definition': { en: 'Definition', ar: 'التعريف' },
  'demo_student.flashcards.face.reveal_hint': {
    en: 'Click to reveal definition',
    ar: 'دوس تشوف التعريف',
  },
  'demo_student.flashcards.btn.shuffle': { en: 'Shuffle', ar: 'خلّط' },
  'demo_student.flashcards.btn.dont_know': { en: "Don't Know", ar: 'ما أعرف' },
  'demo_student.flashcards.btn.know': { en: 'Know', ar: 'أعرف' },
  'demo_student.flashcards.end.session_complete': { en: 'Session Complete', ar: 'الجلسة اكتملت' },
  'demo_student.flashcards.end.you_knew_pre': { en: 'You knew', ar: 'إنت عرفت' },
  'demo_student.flashcards.end.out_of': { en: 'out of', ar: 'من' },
  'demo_student.flashcards.end.cards_suffix': { en: 'cards', ar: 'بطاقة' },
  'demo_student.flashcards.end.known_label': { en: 'known', ar: 'معروف' },
  'demo_student.flashcards.end.to_review_label': { en: 'to review', ar: 'للمراجعة' },
  'demo_student.flashcards.end.keep_practicing': {
    en: 'Keep practicing the ones you missed!',
    ar: 'كمّل تدرّب على اللي فاتك!',
  },
  'demo_student.flashcards.end.perfect': {
    en: 'Perfect score - well done!',
    ar: 'علامة تامّة - أحسنت!',
  },
  'demo_student.flashcards.end.try_again': { en: 'Try Again', ar: 'جرّب مرة ثانية' },
  'demo_student.flashcards.end.shuffle_retry': { en: 'Shuffle & Retry', ar: 'خلّط وأعد' },
  'demo_student.flashcards.cta.body': {
    en: 'Access 2,000+ flashcards across all topics and exam boards.',
    ar: 'ادخل لأكثر من ٢٠٠٠ بطاقة في كل المواضيع وبوردات الامتحان.',
  },
  'demo_student.flashcards.cta.btn': { en: 'Start free trial', ar: 'ابدأ التجربة المجانية' },
}
