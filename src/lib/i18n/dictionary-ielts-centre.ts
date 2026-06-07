// ─── IELTS Centre / Tutor dashboard dictionary shard ───────────────────────
// Copy for the B2B centre/tutor/school dashboard (src/app/ielts/centre/page.tsx)
// that monitors linked learners' latest bands. Khaleeji (Gulf) Arabic per the
// master dictionary conventions (شنو / أبغى / وايد / الحين / شوف …); brand and
// technical terms stay Latin even inside Arabic: IELTS, Band. The four skill
// names + generic band labels reuse the shared keys in dictionary-ielts.ts
// (ielts.skill.*, ielts.band.*) and are NOT duplicated here.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_CENTRE_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // Header
  'ielts.centre.back': { en: 'Back to IELTS', ar: 'رجوع إلى IELTS', es: 'Volver a IELTS' },
  'ielts.centre.title': {
    en: 'IELTS Centre Dashboard',
    ar: 'لوحة مركز IELTS',
    es: 'Panel del centro de IELTS',
  },
  'ielts.centre.subtitle': {
    en: 'Latest bands for the learners linked to your account.',
    ar: 'آخر درجات Band للطلاب المرتبطين بحسابك.',
    es: 'Las últimas Band de los estudiantes vinculados a tu cuenta.',
  },

  // "What this is" explainer
  'ielts.centre.about.title': {
    en: 'Monitor your IELTS learners',
    ar: 'تابع طلابك في IELTS',
    es: 'Supervisa a tus estudiantes de IELTS',
  },
  'ielts.centre.about.body': {
    en: 'This private dashboard is for IELTS centres, tutors and schools. It shows the latest band each of your linked students has reached in Listening, Reading, Writing and Speaking, plus their overall band. Bands are estimates from practice and update as students complete more attempts.',
    ar: 'هذي لوحة خاصة لمراكز IELTS والمدرّسين والمدارس. تورّيك آخر درجة Band وصل لها كل طالب مرتبط فيك في الاستماع والقراءة والكتابة والمحادثة، مع درجة Band الكلية. درجات Band تقديرية من التدريب وتتحدّث كل ما يخلّص الطلاب محاولات أكثر.',
    es: 'Este panel privado es para centros, profesores y escuelas de IELTS. Muestra la última Band que cada uno de tus estudiantes vinculados ha alcanzado en Listening, Reading, Writing y Speaking, además de su Band global. Las Band son estimaciones de la práctica y se actualizan a medida que los estudiantes completan más intentos.',
  },

  // Roster
  'ielts.centre.roster.heading': {
    en: 'Linked students',
    ar: 'الطلاب المرتبطون',
    es: 'Estudiantes vinculados',
  },
  'ielts.centre.roster.no_data': {
    en: 'No data yet - bands appear here once your students practise.',
    ar: 'ما في بيانات بعد - درجات Band بتظهر هني أول ما يتدرّب طلابك.',
    es: 'Aún no hay datos: las Band aparecen aquí en cuanto tus estudiantes practiquen.',
  },
  'ielts.centre.roster.unavailable': {
    en: 'Band data is temporarily unavailable. Your students are listed below; their bands will appear once the connection is restored.',
    ar: 'بيانات Band مو متوفرة مؤقتاً. طلابك مبيّنين تحت، ودرجاتهم بتظهر أول ما يرجع الاتصال.',
    es: 'Los datos de Band no están disponibles temporalmente. Tus estudiantes aparecen a continuación; sus Band se mostrarán en cuanto se restablezca la conexión.',
  },

  // Table / card column headers
  'ielts.centre.col.student': { en: 'Student', ar: 'الطالب', es: 'Estudiante' },
  'ielts.centre.col.overall': { en: 'Overall', ar: 'الكلي', es: 'Global' },
  'ielts.centre.col.last_active': { en: 'Last active', ar: 'آخر نشاط', es: 'Última actividad' },
  'ielts.centre.card.last_active': { en: 'Last active', ar: 'آخر نشاط', es: 'Última actividad' },

  // Empty: no linked students
  'ielts.centre.empty.title': {
    en: 'No students linked yet',
    ar: 'ما في طلاب مرتبطين بعد',
    es: 'Aún no hay estudiantes vinculados',
  },
  'ielts.centre.empty.body': {
    en: 'Once learners are linked to your account, their latest IELTS bands across all four skills will appear here. No data yet - bands appear once students practise.',
    ar: 'أول ما يترابط الطلاب بحسابك، بتظهر هني آخر درجات IELTS Band لهم في المهارات الأربع كلها. ما في بيانات بعد - درجات Band بتظهر أول ما يتدرّب الطلاب.',
    es: 'Cuando los estudiantes estén vinculados a tu cuenta, sus últimas Band de IELTS en las cuatro destrezas aparecerán aquí. Aún no hay datos: las Band aparecen en cuanto los estudiantes practican.',
  },
}
