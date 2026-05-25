// ─── IELTS Centre / Tutor dashboard dictionary shard ───────────────────────
// Copy for the B2B centre/tutor/school dashboard (src/app/ielts/centre/page.tsx)
// that monitors linked learners' latest bands. Khaleeji (Gulf) Arabic per the
// master dictionary conventions (شنو / أبغى / وايد / الحين / شوف …); brand and
// technical terms stay Latin even inside Arabic: IELTS, Band. The four skill
// names + generic band labels reuse the shared keys in dictionary-ielts.ts
// (ielts.skill.*, ielts.band.*) and are NOT duplicated here.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_CENTRE_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // Header
  'ielts.centre.back': { en: 'Back to IELTS', ar: 'رجوع إلى IELTS' },
  'ielts.centre.title': { en: 'IELTS Centre Dashboard', ar: 'لوحة مركز IELTS' },
  'ielts.centre.subtitle': {
    en: 'Latest bands for the learners linked to your account.',
    ar: 'آخر درجات Band للطلاب المرتبطين بحسابك.',
  },

  // "What this is" explainer
  'ielts.centre.about.title': {
    en: 'Monitor your IELTS learners',
    ar: 'تابع طلابك في IELTS',
  },
  'ielts.centre.about.body': {
    en: 'This private dashboard is for IELTS centres, tutors and schools. It shows the latest band each of your linked students has reached in Listening, Reading, Writing and Speaking, plus their overall band. Bands are estimates from practice and update as students complete more attempts.',
    ar: 'هذي لوحة خاصة لمراكز IELTS والمدرّسين والمدارس. تورّيك آخر درجة Band وصل لها كل طالب مرتبط فيك في الاستماع والقراءة والكتابة والمحادثة، مع درجة Band الكلية. درجات Band تقديرية من التدريب وتتحدّث كل ما يخلّص الطلاب محاولات أكثر.',
  },

  // Roster
  'ielts.centre.roster.heading': { en: 'Linked students', ar: 'الطلاب المرتبطون' },
  'ielts.centre.roster.no_data': {
    en: 'No data yet - bands appear here once your students practise.',
    ar: 'ما في بيانات بعد - درجات Band بتظهر هني أول ما يتدرّب طلابك.',
  },
  'ielts.centre.roster.unavailable': {
    en: 'Band data is temporarily unavailable. Your students are listed below; their bands will appear once the connection is restored.',
    ar: 'بيانات Band مو متوفرة مؤقتاً. طلابك مبيّنين تحت، ودرجاتهم بتظهر أول ما يرجع الاتصال.',
  },

  // Table / card column headers
  'ielts.centre.col.student': { en: 'Student', ar: 'الطالب' },
  'ielts.centre.col.overall': { en: 'Overall', ar: 'الكلي' },
  'ielts.centre.col.last_active': { en: 'Last active', ar: 'آخر نشاط' },
  'ielts.centre.card.last_active': { en: 'Last active', ar: 'آخر نشاط' },

  // Empty: no linked students
  'ielts.centre.empty.title': { en: 'No students linked yet', ar: 'ما في طلاب مرتبطين بعد' },
  'ielts.centre.empty.body': {
    en: 'Once learners are linked to your account, their latest IELTS bands across all four skills will appear here. No data yet - bands appear once students practise.',
    ar: 'أول ما يترابط الطلاب بحسابك، بتظهر هني آخر درجات IELTS Band لهم في المهارات الأربع كلها. ما في بيانات بعد - درجات Band بتظهر أول ما يتدرّب الطلاب.',
  },
}
