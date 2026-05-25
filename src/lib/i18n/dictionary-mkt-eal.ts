/**
 * dictionary-mkt-eal.ts - /eal marketing page completion.
 *
 * Bilingual EN + Khaleeji (Gulf) Arabic supplement for the EAL landing
 * hub at `src/app/eal/page.tsx`. The page was partially bilingual via
 * inline `isAr ? AR : EN` ternaries and a local `loc()` shape-resolver;
 * this shard externalises every remaining hardcoded English literal
 * (institutional hero, benefit cards, "what teachers see" block) and
 * folds the existing inline bilingual ternaries onto stable keys so
 * future copy edits don't have to chase JSX.
 *
 * Namespace `mkt.eal.*` - deliberately disjoint from any existing
 * `eal.*` keys (curriculum / category labels resolved through
 * `src/lib/eal/types.ts`) so this shard is purely additive and cannot
 * collide with the partial wiring already on the page.
 *
 * The shard is consumed in-file by the EAL hub page (imported directly
 * and resolved through a tiny page-local lookup that wraps `useT()`),
 * so `dictionary.ts` is not modified. Once any future master dictionary
 * pass wires this in, the page lookup degrades gracefully - entries
 * here would just be hit twice with identical results.
 *
 * Khaleeji conventions match `dictionary-homepage.ts` and the existing
 * EAL curriculum copy in `src/lib/eal/curriculum.ts`: formal-but-warm,
 * direct address, Gulf lexis (وايد, هذي, مو, ما، يجي…). Western digits
 * throughout. Technical tokens kept in Latin: GCSE / IGCSE / AQA /
 * Edexcel / OCR / AO / CEFR / AI / IELTS / SPaG / GCC / SVO / VSO /
 * A2 / B1 / B2 / C1.
 *
 * Templated keys use the literal placeholder `{level}` for the CEFR
 * band letter - the page replaces it at render time so a single key
 * covers all four bands (A2/B1/B2/C1).
 */

export const MKT_EAL_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Institutional hero (top of page - schools framing) ─────────────
  'mkt.eal.inst.badge': {
    en: 'For schools',
    ar: 'للمدارس',
  },
  'mkt.eal.inst.heading': {
    en: 'Structured English support for EAL learners',
    ar: 'دعم إنجليزي منظّم لطلاب الـ EAL',
  },
  'mkt.eal.inst.lead': {
    en: 'Designed to help international and GCC schools support EAL learners across vocabulary, reading fluency, comprehension, grammar and writing confidence - with teacher visibility and progress reporting.',
    ar: 'مصمّم عشان يساعد المدارس الدولية ومدارس الـ GCC على دعم طلاب الـ EAL في المفردات، طلاقة القراءة، الفهم، القواعد، والثقة في الكتابة - مع رؤية واضحة للمعلّم وتقارير تتبّع التقدّم.',
  },
  'mkt.eal.inst.cta_schools': {
    en: 'For schools',
    ar: 'للمدارس',
  },
  'mkt.eal.inst.cta_test': {
    en: 'Take the CEFR placement test',
    ar: 'سوّ اختبار تحديد المستوى CEFR',
  },

  // ─── 3 benefit cards row ────────────────────────────────────────────
  'mkt.eal.benefit.curriculum.title': {
    en: 'Vocabulary, reading and writing - structured',
    ar: 'المفردات والقراءة والكتابة - بشكل منظّم',
  },
  'mkt.eal.benefit.curriculum.desc': {
    en: 'A coherent progression across vocabulary breadth, reading fluency, comprehension, grammar accuracy and writing confidence - graded across CEFR levels so learners always know the next step.',
    ar: 'تدرّج متماسك يشمل اتساع المفردات، طلاقة القراءة، الفهم، دقة القواعد، والثقة في الكتابة - مرتّب على مستويات CEFR عشان الطالب يعرف الخطوة الجاية على طول.',
  },
  'mkt.eal.benefit.intl.title': {
    en: 'Designed for international schools',
    ar: 'مصمّم للمدارس الدولية',
  },
  'mkt.eal.benefit.intl.desc': {
    en: 'Built with Qatar, the wider GCC and IGCSE/GCSE classrooms in mind - content addresses the specific language gaps Arabic-L1 learners face when working through a UK-aligned curriculum.',
    ar: 'مبني وقطر ودول الـ GCC وصفوف الـ IGCSE/GCSE في البال - المحتوى يعالج بالضبط الفجوات اللغوية اللي يواجهها متحدّث العربي وقت يدرس منهج بريطاني.',
  },
  'mkt.eal.benefit.teacher.title': {
    en: 'Teacher visibility and progress reporting',
    ar: 'رؤية المعلّم وتقارير التقدّم',
  },
  'mkt.eal.benefit.teacher.desc': {
    en: "Leadership and EAL coordinators get the oversight they need: where learners are, where they're stuck, and where targeted support will move the needle the most.",
    ar: 'الإدارة ومنسّقو الـ EAL يحصلون الرؤية اللي يحتاجونها: وين وصل الطالب، ووين متعثّر، ووين الدعم المركّز يسوّي فرق فعلي.',
  },

  // ─── "What teachers see" card ───────────────────────────────────────
  'mkt.eal.teacher_view.title': {
    en: 'What teachers see',
    ar: 'شنو يشوف المعلّم',
  },
  'mkt.eal.teacher_view.desc': {
    en: 'Teacher view: progress by learner, by skill, and by year group, so departments can plan targeted EAL support.',
    ar: 'صفحة المعلّم: تقدّم لكل طالب، وحسب المهارة، وحسب الصف الدراسي - عشان الأقسام تقدر تخطّط دعم EAL مركّز.',
  },

  // ─── Learner hero (second hero, was inline ternaries) ───────────────
  'mkt.eal.hero.badge': {
    en: 'English for Arabic Speakers',
    ar: 'الإنجليزية للناطقين بالعربية',
  },
  'mkt.eal.hero.heading': {
    en: 'English Skills for Arabic Speakers',
    ar: 'تعلّم الإنجليزية: المهارات الأساسية للناطقين بالعربية',
  },
  'mkt.eal.hero.lead': {
    en: 'Bilingual lessons targeting exactly where Arabic L1 students stumble when studying English for UK GCSE/IGCSE: first-language transfer errors (word order, tenses, articles, prepositions), graded across CEFR levels A2 to C1. Start with the free placement test to find your level.',
    ar: 'دروس ثنائية اللغة مركّزة على النقاط اللي يتعثّر فيها متحدّث العربي وقت دراسة الإنجليزي لامتحانات GCSE / IGCSE البريطانية: أخطاء النقل من العربي (ترتيب الكلمات، الأزمنة، أدوات التعريف، حروف الجر)، ومدرّجة على مستويات CEFR من A2 إلى C1. ابدأ باختبار تحديد المستوى المجاني عشان تعرف من وين تبدأ.',
  },

  // Hero stat box labels (value chips are numeric / band letters / "Free")
  'mkt.eal.hero_stat.lessons': {
    en: 'lessons',
    ar: 'دروس',
  },
  'mkt.eal.hero_stat.cefr_levels': {
    en: 'CEFR levels',
    ar: 'مستويات CEFR',
  },
  'mkt.eal.hero_stat.exercises': {
    en: 'exercises',
    ar: 'تمارين',
  },
  'mkt.eal.hero_stat.free_value': {
    en: 'Free',
    ar: 'مجاني',
  },
  'mkt.eal.hero_stat.placement_test_label': {
    en: 'placement test',
    ar: 'اختبار تحديد المستوى',
  },

  // ─── Primary CTA: CEFR placement test ──────────────────────────────
  'mkt.eal.cta.start_here_badge': {
    en: 'Start here',
    ar: 'ابدأ من هنا',
  },
  'mkt.eal.cta.heading': {
    en: 'CEFR Placement Test',
    ar: 'اختبار تحديد المستوى (CEFR)',
  },
  'mkt.eal.cta.lead': {
    en: 'A short, free test that pinpoints your level from A2 to C1 and routes you straight to the lessons you most need - built around the weak points common to Arabic speakers.',
    ar: 'اختبار قصير ومجاني يحدّد مستواك من A2 إلى C1، ويوجّهك مباشرة للدروس اللي تحتاجها أكثر - مصمّم على نقاط الضعف الشائعة عند متحدّث العربي.',
  },
  'mkt.eal.cta.button': {
    en: 'Start the test',
    ar: 'ابدأ الاختبار',
  },

  // ─── Topic section heading + per-card overlays ─────────────────────
  'mkt.eal.topics.heading': {
    en: 'Lessons by skill',
    ar: 'الدروس حسب المهارة',
  },
  // Per-card counters (singular/plural rendering is left as the original
  // file shipped - EN uses plural noun, AR uses generic noun - verbatim).
  'mkt.eal.topics.examples_label': {
    en: 'examples',
    ar: 'مثال',
  },
  'mkt.eal.topics.exercises_label': {
    en: 'exercises',
    ar: 'تمرين',
  },
  'mkt.eal.topics.open_lesson': {
    en: 'Open lesson',
    ar: 'افتح الدرس',
  },

  // ─── Practice & assessment ──────────────────────────────────────────
  'mkt.eal.practice.heading': {
    en: 'Practice & assessment',
    ar: 'التدريب والتقييم',
  },
  // Banded mock-exam cards. `{level}` placeholder is replaced at render
  // time with the band letter (A2 / B1 / B2 / C1).
  'mkt.eal.practice.mock_exam_title': {
    en: '{level} Mock Exam',
    ar: 'امتحان تجريبي {level}',
  },
  'mkt.eal.practice.mock_exam_subtitle': {
    en: '{level} band · CEFR',
    ar: 'مستوى {level} · CEFR',
  },
  'mkt.eal.practice.mock_exam_body': {
    en: 'A full {level}-level practice exam with exam-style questions and instant marking.',
    ar: 'امتحان تدريبي كامل بمستوى {level} بأسئلة بأسلوب الامتحان وتصحيح فوري.',
  },
  'mkt.eal.practice.start_practice': {
    en: 'Start practice',
    ar: 'ابدأ التدريب',
  },

  // AI writing & speaking card
  'mkt.eal.practice.ai_badge': {
    en: 'AI',
    ar: 'ذكاء اصطناعي',
  },
  'mkt.eal.practice.ai_title': {
    en: 'AI writing & speaking',
    ar: 'تقييم الكتابة والمحادثة بالذكاء الاصطناعي',
  },
  'mkt.eal.practice.ai_subtitle': {
    en: 'inside every lesson',
    ar: 'داخل كل درس',
  },
  'mkt.eal.practice.ai_body': {
    en: 'Every lesson includes reading, listening, writing and speaking practice - writing and speaking are AI-assessed with feedback tailored to Arabic speakers.',
    ar: 'كل درس فيه تدريب على القراءة والاستماع والكتابة والمحادثة - والكتابة والمحادثة يصحّحها الذكاء الاصطناعي مع ملاحظات مخصّصة لمتحدّث العربي.',
  },
  'mkt.eal.practice.skill_reading': {
    en: 'Reading',
    ar: 'قراءة',
  },
  'mkt.eal.practice.skill_listening': {
    en: 'Listening',
    ar: 'استماع',
  },
  'mkt.eal.practice.skill_writing': {
    en: 'Writing',
    ar: 'كتابة',
  },
  'mkt.eal.practice.skill_speaking': {
    en: 'Speaking',
    ar: 'محادثة',
  },
  'mkt.eal.practice.try_it_now': {
    en: 'Try it now',
    ar: 'جرّب الآن',
  },

  // ─── Games CTA card ─────────────────────────────────────────────────
  'mkt.eal.games.badge': {
    en: 'Learn through play',
    ar: 'تعلّم باللعب',
  },
  'mkt.eal.games.heading': {
    en: 'English games for beginners',
    ar: 'العاب الإنجليزية للمبتدئين',
  },
  'mkt.eal.games.lead': {
    en: '18+ friendly games: picture-word match, articles, the verb “to be”, tenses, prepositions, numbers & time, phrasal verbs and more - with instant feedback and scores.',
    ar: 'أكثر من ١٨ لعبة سهلة وممتعة: مطابقة الصور بالكلمات، أدوات التعريف، فعل to be، الأزمنة، حروف الجر، الأرقام والوقت، والمزيد - مع تصحيح فوري ونقاط.',
  },
  'mkt.eal.games.play_now': {
    en: 'Play now',
    ar: 'العب الآن',
  },

  // ─── "How to use this section" ──────────────────────────────────────
  'mkt.eal.howto.heading': {
    en: 'How to use this section',
    ar: 'كيف تستخدم هذا القسم',
  },
  // Step 1 - placement test
  'mkt.eal.howto.step1.bold': {
    en: 'Start with the placement test',
    ar: 'ابدأ باختبار تحديد المستوى',
  },
  'mkt.eal.howto.step1.body': {
    en: 'so you know your A2-C1 level and go straight to the right lessons.',
    ar: 'عشان تعرف مستواك من A2 إلى C1 وتروح للدروس المناسبة لك مباشرة.',
  },
  // Step 2 - sentence structure
  'mkt.eal.howto.step2.bold': {
    en: 'Then move to “Sentence Structure”',
    ar: 'ثم انتقل إلى «بناء الجملة»',
  },
  'mkt.eal.howto.step2.body': {
    en: 'the biggest gap between Arabic and English. Fix word order first.',
    ar: 'أكبر فرق بين العربي والإنجليزي. أصلح ترتيب الكلمات أولاً.',
  },
  // Step 3 - grammar
  'mkt.eal.howto.step3.bold': {
    en: 'Next, “Grammar”',
    ar: 'بعدها «القواعد»',
  },
  'mkt.eal.howto.step3.body': {
    en: 'articles, tenses, subject-verb agreement - these decide a big chunk of the SPaG grade.',
    ar: 'أدوات التعريف، الأزمنة، مطابقة الفاعل للفعل - تحدّد جزء كبير من درجة SPaG.',
  },
  // Step 4 - common errors
  'mkt.eal.howto.step4.bold': {
    en: 'Use “Common Errors” as a checklist',
    ar: 'استخدم «الأخطاء الشائعة» كقائمة فحص',
  },
  'mkt.eal.howto.step4.body': {
    en: 'run through it before submitting any essay, and do the exercises and AI assessment in each lesson.',
    ar: 'راجعها قبل تسليم أي مقالة، وسوّ التمارين والتقييم بالذكاء الاصطناعي في كل درس.',
  },
}
