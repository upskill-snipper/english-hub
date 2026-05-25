// ─── IELTS LEARN dictionary shard ───────────────────────────────────────────
// UI chrome for the IELTS self-study library surface that was built
// English-only and now needs Khaleeji Arabic so Gulf learners can read the
// interface:
//   • src/app/ielts/learn/page.tsx                  → the lesson library hub
//   • src/app/ielts/learn/[skill]/[slug]/page.tsx   → a single lesson page
//
// SCOPE: interface copy ONLY — the hub eyebrow/heading/intro, the level filter,
// the Continue-learning card, per-track progress, the lesson-page chrome
// (breadcrumb, Mark-complete block, prev/next, footer CTAs) and the
// "Lesson not found" panel. NO lesson CONTENT lives here: lesson titles,
// summaries and Markdown bodies come from the curriculum/lesson data files and
// stay exactly as authored. Curriculum-sourced strings (unit titles/blurbs,
// level labels/blurbs/band ranges, track blurbs) are rendered from data and are
// NOT in this shard either.
//
// This shard is intentionally NOT wired into the global lookup() chain in
// dictionary.ts — it is resolved locally by a useLearnT() hook in each page
// (modelled on usePlanT() in app/ielts/plan/page.tsx), falling back to the
// shared useT() for any cross-module ielts.* key.
//
// Khaleeji (Gulf) Arabic per the master dictionary header conventions
// (شنو/وايد/الحين/ببلاش/شوف/دوّر …; Levantine forms شو/كيفك/ليش banned). Brand +
// technical terms stay Latin: The English Hub, IELTS, Band, Academic, General
// Training, Task 1, Task 2, Listening, Reading, Writing, Speaking, AI, UCAS,
// CEFR. Band/level numbers stay digits. Skill labels stay Latin.
//
// {token} placeholders are interpolated by useLearnT() so phrases that wrap a
// dynamic value (counts, skill labels) stay translatable as a whole.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_LEARN_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  // ══════════════════════════════════════════════════════════════════════════
  // HUB  (src/app/ielts/learn/page.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Header ───────────────────────────────────────────────────────────────
  'ielts.learn.back': { en: 'Back to IELTS', ar: 'رجوع لـ IELTS' },
  'ielts.learn.hub.eyebrow': { en: 'Self-study library', ar: 'مكتبة التعلّم الذاتي' },
  'ielts.learn.hub.heading': {
    en: 'Learn IELTS, step by step',
    ar: 'تعلّم IELTS خطوة خطوة',
  },
  'ielts.learn.hub.intro': {
    en: 'Short, original lessons across every skill — from the very basics to a top band. Work through a track in order, or pick the topic you need. Your progress saves on this device.',
    ar: 'دروس قصيرة وأصلية في كل مهارة — من أبسط الأساسيات لين أعلى Band. اشتغل على مسار بالترتيب، أو اختر الموضوع اللي تحتاجه. تقدّمك ينحفظ على هالجهاز.',
  },

  // ─── Overall progress pill ── renders "{done} of {total} lessons done" ──────
  'ielts.learn.hub.progress_pill': {
    en: '{done} of {total} lessons done',
    ar: 'خلّصت {done} من {total} درس',
  },

  // ─── Level filter ─────────────────────────────────────────────────────────
  'ielts.learn.filter.sr_heading': {
    en: 'Filter lessons by level',
    ar: 'فلتر الدروس حسب المستوى',
  },
  'ielts.learn.filter.label': { en: 'Level', ar: 'المستوى' },
  'ielts.learn.filter.all_levels': { en: 'All levels', ar: 'كل المستويات' },

  // ─── Continue-learning card ───────────────────────────────────────────────
  'ielts.learn.continue.aria': { en: 'Continue learning', ar: 'كمّل التعلّم' },
  'ielts.learn.continue.eyebrow': { en: 'Continue learning', ar: 'كمّل التعلّم' },
  'ielts.learn.continue.start_eyebrow': { en: 'Start learning', ar: 'ابدأ التعلّم' },
  'ielts.learn.continue.btn_continue': { en: 'Continue', ar: 'كمّل' },
  'ielts.learn.continue.btn_begin': { en: 'Begin', ar: 'ابدأ' },
  'ielts.learn.continue.done_title': {
    en: 'You’ve completed everything here',
    ar: 'خلّصت كل شي هني',
  },
  'ielts.learn.continue.done_body': {
    en: 'Nice work. Put it into practice, or switch the level filter to find more.',
    ar: 'شغل زين. طبّقه بالتدريب، أو غيّر فلتر المستوى عشان تلاقي زيادة.',
  },

  // ─── Per-lesson meta (Continue card + lesson rows) ────────────────────────
  // Renders "{min} min" — minutes stay a digit, interpolated.
  'ielts.learn.meta.minutes': { en: '{min} min', ar: '{min} دقيقة' },
  // The short form on a lesson row: "{min}m".
  'ielts.learn.meta.minutes_short': { en: '{min}m', ar: '{min} د' },

  // ─── Track blurbs (the one-line description under each track heading) ──────
  // Interface copy describing each library track — NOT lesson content. Track
  // labels themselves stay Latin (Foundation + the four skill names).
  'ielts.learn.track.blurb.foundation': {
    en: 'New to IELTS? Start here — the format, the band scale, and the core English the test assumes.',
    ar: 'جديد على IELTS؟ ابدأ هني — الشكل ومقياس Band واللغة الأساسية اللي يفترضها الامتحان.',
  },
  'ielts.learn.track.blurb.listening': {
    en: 'Predict, follow the recording, and capture answers in the exact words within the word limit.',
    ar: 'توقّع، تابع التسجيل، والتقط الإجابات بالكلمات بالضبط ضمن حد الكلمات.',
  },
  'ielts.learn.track.blurb.reading': {
    en: 'Skim, scan and tackle every question type — including True / False / Not Given — to time.',
    ar: 'اقرأ بسرعة، دوّر، وعالج كل نوع سؤال — حتى True / False / Not Given — ضمن الوقت.',
  },
  'ielts.learn.track.blurb.writing': {
    en: 'Plan Task 1 and Task 2, then build coherence, range and accuracy the examiner rewards.',
    ar: 'خطّط Task 1 وTask 2، وبعدها ابنِ الترابط والتنوّع والدقّة اللي يكافئها المصحّح.',
  },
  'ielts.learn.track.blurb.speaking': {
    en: 'Give natural, extended answers across all three parts with fluency and clear pronunciation.',
    ar: 'اعطِ إجابات طبيعية وموسّعة في الأجزاء الثلاثة كلها بطلاقة ونطق واضح.',
  },

  // ─── Track section ────────────────────────────────────────────────────────
  // Renders "{done} / {total} done" under each track heading.
  'ielts.learn.track.progress': { en: '{done} / {total} done', ar: 'خلّصت {done} / {total}' },
  // Accessible name for the same ratio: "{done} of {total} lessons completed".
  'ielts.learn.track.progress_aria': {
    en: '{done} of {total} lessons completed',
    ar: 'خلّصت {done} من {total} درس',
  },
  'ielts.learn.track.practise': { en: 'Practise', ar: 'تدرّب' },
  // Empty states inside a track.
  'ielts.learn.track.empty_filtered': {
    en: 'No lessons at this level in this track — try another level.',
    ar: 'ما في دروس بهذا المستوى في هذا المسار — جرّب مستوى ثاني.',
  },
  'ielts.learn.track.empty_soon': { en: 'Lessons coming soon.', ar: 'الدروس قريباً.' },

  // ─── Lesson row ───────────────────────────────────────────────────────────
  'ielts.learn.lesson.completed_aria': { en: 'Completed', ar: 'مكتمل' },

  // ══════════════════════════════════════════════════════════════════════════
  // LESSON PAGE  (src/app/ielts/learn/[skill]/[slug]/page.tsx)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Not found panel ──────────────────────────────────────────────────────
  'ielts.learn.notfound.title': { en: 'Lesson not found', ar: 'الدرس ما تلاقى' },
  'ielts.learn.notfound.body': {
    en: 'We couldn’t find that lesson. It may have moved or the link may be incomplete. Head back to the library to find what you need.',
    ar: 'ما قدرنا نلاقي هالدرس. يمكن انتقل أو الرابط ناقص. ارجع للمكتبة عشان تلاقي اللي تحتاجه.',
  },
  'ielts.learn.notfound.back': {
    en: 'Back to the learning library',
    ar: 'رجوع لمكتبة التعلّم',
  },

  // ─── Breadcrumb ───────────────────────────────────────────────────────────
  'ielts.learn.crumb.library': { en: 'Library', ar: 'المكتبة' },

  // ─── Lesson header meta ── renders "{min} min read" ───────────────────────
  'ielts.learn.lesson.minutes_read': { en: '{min} min read', ar: 'قراءة {min} دقيقة' },
  'ielts.learn.lesson.completed': { en: 'Completed', ar: 'مكتمل' },

  // ─── Mark-complete block ──────────────────────────────────────────────────
  'ielts.learn.complete.done_title': { en: 'Lesson complete', ar: 'الدرس مكتمل' },
  'ielts.learn.complete.done_body_next': {
    en: 'Keep the momentum going with the next one.',
    ar: 'كمّل الزخم بالدرس اللي بعده.',
  },
  'ielts.learn.complete.done_body_end': {
    en: 'You’ve reached the end of this skill.',
    ar: 'وصلت لنهاية هالمهارة.',
  },
  'ielts.learn.complete.next_lesson': { en: 'Next lesson', ar: 'الدرس التالي' },
  // Renders "Practise {skill}" — skill label stays Latin, interpolated.
  'ielts.learn.complete.practise_skill': { en: 'Practise {skill}', ar: 'تدرّب على {skill}' },
  'ielts.learn.complete.cta_title': { en: 'Finished reading?', ar: 'خلّصت القراءة؟' },
  'ielts.learn.complete.cta_body': {
    en: 'Mark this lesson complete to track your progress and unlock your next step.',
    ar: 'علّم هالدرس مكتمل عشان تتابع تقدّمك وتفتح خطوتك التالية.',
  },
  'ielts.learn.complete.mark': { en: 'Mark complete', ar: 'علّم مكتمل' },

  // ─── Prev / next navigation ───────────────────────────────────────────────
  'ielts.learn.nav.aria': { en: 'Lesson navigation', ar: 'تنقّل الدروس' },
  'ielts.learn.nav.previous': { en: 'Previous', ar: 'السابق' },
  'ielts.learn.nav.next': { en: 'Next', ar: 'التالي' },

  // ─── Footer CTAs ──────────────────────────────────────────────────────────
  'ielts.learn.footer.all_lessons': { en: 'All lessons', ar: 'كل الدروس' },
}
