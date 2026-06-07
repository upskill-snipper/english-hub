// ─── IELTS dictionary shard ────────────────────────────────────────────────
// Shared, cross-module IELTS copy (nav, skill names, band labels, the learning
// loop, common CTAs). Module-specific strings can stay inline in Wave 1 and be
// migrated here for translation in a follow-up i18n pass. Khaleeji (Gulf)
// Arabic conventions per the master dictionary; brand term "IELTS" stays Latin.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  'ielts.nav': { en: 'IELTS', ar: 'IELTS' },
  'ielts.hub.eyebrow': { en: 'IELTS Academic', ar: 'IELTS أكاديمي' },
  'ielts.hub.title': {
    en: 'IELTS Academic - from starter to exam-ready',
    ar: 'IELTS أكاديمي - من البداية للجاهزية للامتحان',
  },
  'ielts.hub.subtitle': {
    en: 'One learning loop: find your level, follow a personalised plan, practise all four skills, get instant AI band feedback, then prove it on a full mock test.',
    ar: 'مسار تعلّم واحد: حدّد مستواك، اتبع خطة مخصصة لك، تدرّب على المهارات الأربع، خذ تقييم Band فوري بالذكاء الاصطناعي، وبعدها أثبت جاهزيتك باختبار تجريبي كامل.',
  },

  // Skills
  'ielts.skill.listening': { en: 'Listening', ar: 'الاستماع' },
  'ielts.skill.reading': { en: 'Reading', ar: 'القراءة' },
  'ielts.skill.writing': { en: 'Writing', ar: 'الكتابة' },
  'ielts.skill.speaking': { en: 'Speaking', ar: 'المحادثة' },

  // Band vocabulary
  'ielts.band': { en: 'Band', ar: 'Band' },
  'ielts.band.overall': { en: 'Overall band', ar: 'Band الكلي' },
  'ielts.band.predicted': { en: 'Predicted band', ar: 'Band المتوقع' },
  'ielts.band.target': { en: 'Target band', ar: 'Band المستهدف' },

  // The loop
  'ielts.loop.diagnose': { en: 'Diagnose', ar: 'تشخيص' },
  'ielts.loop.plan': { en: 'Plan', ar: 'خطة' },
  'ielts.loop.learn': { en: 'Learn', ar: 'تعلّم' },
  'ielts.loop.practise': { en: 'Practise', ar: 'تدرّب' },
  'ielts.loop.feedback': { en: 'AI feedback', ar: 'تقييم بالذكاء الاصطناعي' },
  'ielts.loop.mock': { en: 'Mock test', ar: 'اختبار تجريبي' },
  'ielts.loop.predict': { en: 'Predict band', ar: 'توقّع الـ Band' },

  // CTAs
  'ielts.cta.start_diagnostic': { en: 'Take the placement test', ar: 'سوِّ اختبار تحديد المستوى' },
  'ielts.cta.view_plan': { en: 'View my plan', ar: 'شوف خطتي' },
  'ielts.cta.practise_now': { en: 'Practise now', ar: 'تدرّب الحين' },
  'ielts.cta.get_feedback': { en: 'Get AI feedback', ar: 'خذ تقييم AI' },

  // Common labels
  'ielts.estimate_note': {
    en: 'Predicted bands are practice estimates, not official results.',
    ar: 'الـ Band المتوقع تقديري للتدريب، مو نتيجة رسمية.',
  },
  'ielts.task1': { en: 'Writing Task 1', ar: 'الكتابة - Task 1' },
  'ielts.task2': { en: 'Writing Task 2', ar: 'الكتابة - Task 2' },
}
