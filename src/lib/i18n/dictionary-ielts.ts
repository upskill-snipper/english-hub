// ─── IELTS dictionary shard ────────────────────────────────────────────────
// Shared, cross-module IELTS copy (nav, skill names, band labels, the learning
// loop, common CTAs). Module-specific strings can stay inline in Wave 1 and be
// migrated here for translation in a follow-up i18n pass. Khaleeji (Gulf)
// Arabic conventions per the master dictionary; brand term "IELTS" stays Latin.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  'ielts.nav': { en: 'IELTS', ar: 'IELTS', es: 'IELTS' },
  'ielts.hub.eyebrow': { en: 'IELTS Academic', ar: 'IELTS أكاديمي', es: 'IELTS Academic' },
  'ielts.hub.title': {
    en: 'IELTS Academic - from starter to exam-ready',
    ar: 'IELTS أكاديمي - من البداية للجاهزية للامتحان',
    es: 'IELTS Academic: de principiante a listo para el examen',
  },
  'ielts.hub.subtitle': {
    en: 'One learning loop: find your level, follow a personalised plan, practise all four skills, get instant AI band feedback, then prove it on a full mock test.',
    ar: 'مسار تعلّم واحد: حدّد مستواك، اتبع خطة مخصصة لك، تدرّب على المهارات الأربع، خذ تقييم Band فوري بالذكاء الاصطناعي، وبعدها أثبت جاهزيتك باختبار تجريبي كامل.',
    es: 'Un único ciclo de aprendizaje: descubre tu nivel, sigue un plan personalizado, practica las cuatro destrezas, recibe feedback de Band instantáneo con IA y luego demuéstralo en un examen de prueba completo.',
  },

  // Skills
  'ielts.skill.listening': { en: 'Listening', ar: 'الاستماع', es: 'Listening' },
  'ielts.skill.reading': { en: 'Reading', ar: 'القراءة', es: 'Reading' },
  'ielts.skill.writing': { en: 'Writing', ar: 'الكتابة', es: 'Writing' },
  'ielts.skill.speaking': { en: 'Speaking', ar: 'المحادثة', es: 'Speaking' },

  // Band vocabulary
  'ielts.band': { en: 'Band', ar: 'Band', es: 'Band' },
  'ielts.band.overall': { en: 'Overall band', ar: 'Band الكلي', es: 'Band global' },
  'ielts.band.predicted': { en: 'Predicted band', ar: 'Band المتوقع', es: 'Band prevista' },
  'ielts.band.target': { en: 'Target band', ar: 'Band المستهدف', es: 'Band objetivo' },

  // The loop
  'ielts.loop.diagnose': { en: 'Diagnose', ar: 'تشخيص', es: 'Diagnosticar' },
  'ielts.loop.plan': { en: 'Plan', ar: 'خطة', es: 'Planificar' },
  'ielts.loop.learn': { en: 'Learn', ar: 'تعلّم', es: 'Aprender' },
  'ielts.loop.practise': { en: 'Practise', ar: 'تدرّب', es: 'Practicar' },
  'ielts.loop.feedback': {
    en: 'AI feedback',
    ar: 'تقييم بالذكاء الاصطناعي',
    es: 'Feedback con IA',
  },
  'ielts.loop.mock': { en: 'Mock test', ar: 'اختبار تجريبي', es: 'Examen de prueba' },
  'ielts.loop.predict': { en: 'Predict band', ar: 'توقّع الـ Band', es: 'Predecir la Band' },

  // CTAs
  'ielts.cta.start_diagnostic': {
    en: 'Take the placement test',
    ar: 'سوِّ اختبار تحديد المستوى',
    es: 'Haz la prueba de nivel',
  },
  'ielts.cta.view_plan': { en: 'View my plan', ar: 'شوف خطتي', es: 'Ver mi plan' },
  'ielts.cta.practise_now': { en: 'Practise now', ar: 'تدرّب الحين', es: 'Practica ahora' },
  'ielts.cta.get_feedback': {
    en: 'Get AI feedback',
    ar: 'خذ تقييم AI',
    es: 'Obtén feedback con IA',
  },

  // Common labels
  'ielts.estimate_note': {
    en: 'Predicted bands are practice estimates, not official results.',
    ar: 'الـ Band المتوقع تقديري للتدريب، مو نتيجة رسمية.',
    es: 'Las Band previstas son estimaciones de práctica, no resultados oficiales.',
  },
  'ielts.task1': { en: 'Writing Task 1', ar: 'الكتابة - Task 1', es: 'Writing Task 1' },
  'ielts.task2': { en: 'Writing Task 2', ar: 'الكتابة - Task 2', es: 'Writing Task 2' },
}
