/**
 * Bucket A · wave 2 — genuine Khaleeji for public-page namespaces
 * ────────────────────────────────────────────────────────────────
 * Real human EN was hand-written into dictionary-placeholder-fix-may15.ts
 * (exam_boards, free_res, sitemap) with `ar` left mirroring `en` as a
 * graceful fallback. This file replaces those EN-mirror AR values with
 * natural Gulf-register Arabic (the voice of src/lib/eal/curriculum.ts —
 * conversational Khaleeji, not MSA, not literal).
 *
 * Scope: ONLY the three namespaces whose AR was still English. The
 * `header.*` keys enumerated for this wave already carry genuine
 * Khaleeji in dictionary-screenshot-fixes.ts (ar ≠ en for all of them),
 * so they are intentionally NOT duplicated here.
 *
 * EN values are byte-identical to dictionary-placeholder-fix-may15.ts.
 * Brand names, exam-board names, spec codes and assessment-objective
 * labels (AQA, Edexcel, OCR, Eduqas, Cambridge, Pearson, GCSE, IGCSE,
 * 8702, 1ET0, 4ET1, 0500, AO2, A3, The English Hub …) are kept verbatim
 * inside the Arabic, exactly as Gulf bilingual readers expect them.
 *
 * Wired centrally from dictionary.ts by the orchestrator — do NOT edit
 * dictionary.ts from here.
 */

export const PUBLIC_A_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Exam-boards hub (/exam-boards) ──────────────────────────────
  'exam_boards.crumb.home': { en: 'Home', ar: 'الرئيسية' },
  'exam_boards.crumb.self': { en: 'Exam boards', ar: 'بوردات الامتحان' },
  'exam_boards.eyebrow': { en: 'Pick your exam board', ar: 'اختر بورد امتحانك' },
  'exam_boards.h1': {
    en: 'Every UK GCSE and IGCSE board, covered',
    ar: 'كل بوردات GCSE و IGCSE البريطانية، مغطّاة',
  },
  'exam_boards.lead': {
    en: 'Specification-aligned revision for AQA, Edexcel, OCR, Eduqas, Cambridge International and Pearson Edexcel International — pick yours below.',
    ar: 'مراجعة متوافقة مع مواصفات AQA و Edexcel و OCR و Eduqas و Cambridge International و Pearson Edexcel International — اختر مالك من تحت.',
  },
  'exam_boards.level.gcse': { en: 'GCSE (UK)', ar: 'GCSE (بريطانيا)' },
  'exam_boards.level.igcse': { en: 'IGCSE (international)', ar: 'IGCSE (دولي)' },
  'exam_boards.gcse.heading': { en: 'GCSE boards', ar: 'بوردات GCSE' },
  'exam_boards.gcse.subheading': {
    en: 'For students sitting exams in UK schools',
    ar: 'للطلاب اللي يقدّمون امتحاناتهم في مدارس بريطانيا',
  },
  'exam_boards.igcse.heading': { en: 'IGCSE boards', ar: 'بوردات IGCSE' },
  'exam_boards.igcse.subheading': {
    en: 'For students in international schools',
    ar: 'للطلاب اللي في المدارس الدولية',
  },
  'exam_boards.aqa.name': { en: 'AQA', ar: 'AQA' },
  'exam_boards.aqa.blurb': {
    en: 'The most-taken English Literature and Language GCSE specs (8702 and 8700).',
    ar: 'أكثر مواصفات GCSE مأخوذة في أدب ولغة الإنجليزي (8702 و 8700).',
  },
  'exam_boards.edexcel.name': { en: 'Pearson Edexcel', ar: 'Pearson Edexcel' },
  'exam_boards.edexcel.blurb': {
    en: 'Edexcel GCSE English Literature (1ET0) and English Language (1EN0).',
    ar: 'Edexcel GCSE في أدب الإنجليزي (1ET0) ولغة الإنجليزي (1EN0).',
  },
  'exam_boards.ocr.name': { en: 'OCR', ar: 'OCR' },
  'exam_boards.ocr.blurb': {
    en: 'OCR GCSE English Literature (J352) and English Language (J351).',
    ar: 'OCR GCSE في أدب الإنجليزي (J352) ولغة الإنجليزي (J351).',
  },
  'exam_boards.eduqas.name': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },
  'exam_boards.eduqas.blurb': {
    en: 'Eduqas GCSE English Literature (C720U) and English Language (C700U).',
    ar: 'Eduqas GCSE في أدب الإنجليزي (C720U) ولغة الإنجليزي (C700U).',
  },
  'exam_boards.cambridge.name': {
    en: 'Cambridge International (CIE)',
    ar: 'Cambridge International (CIE)',
  },
  'exam_boards.cambridge.blurb': {
    en: 'Cambridge IGCSE First Language English (0500) and Literature in English (0475/0992).',
    ar: 'Cambridge IGCSE في الإنجليزي كلغة أولى (0500) والأدب بالإنجليزي (0475/0992).',
  },
  'exam_boards.edexcel_igcse.name': {
    en: 'Pearson Edexcel IGCSE Literature',
    ar: 'Pearson Edexcel IGCSE أدب',
  },
  'exam_boards.edexcel_igcse.blurb': {
    en: 'Edexcel IGCSE English Literature (4ET1) — set texts and unseen poetry.',
    ar: 'Edexcel IGCSE في أدب الإنجليزي (4ET1) — النصوص المقرّرة والشعر غير المرئي.',
  },
  'exam_boards.edexcel_igcse_lang.name': {
    en: 'Pearson Edexcel IGCSE Language',
    ar: 'Pearson Edexcel IGCSE لغة',
  },
  'exam_boards.edexcel_igcse_lang.blurb': {
    en: 'Edexcel IGCSE English Language A (4EA1) — non-fiction reading and transactional writing.',
    ar: 'Edexcel IGCSE في لغة الإنجليزي A (4EA1) — قراءة النصوص الواقعية والكتابة الوظيفية.',
  },
  'exam_boards.cta.open_board': { en: 'Open board hub', ar: 'افتح صفحة البورد' },
  'exam_boards.why.h2': {
    en: 'Why your exam board matters',
    ar: 'ليش بورد امتحانك يفرق',
  },
  'exam_boards.why.p1': {
    en: 'Each board sets its own assessment objectives, prescribes its own anthology and set texts, and weights the marks differently between context, language analysis and structure.',
    ar: 'كل بورد يحدّد أهداف التقييم مالته، ويقرّر المختارات الشعرية والنصوص المقرّرة الخاصة فيه، ويوزّع الدرجات بشكل مختلف بين السياق وتحليل اللغة والبنية.',
  },
  'exam_boards.why.p2': {
    en: 'A model answer that scores Grade 9 on AQA might lose marks on Edexcel — the rubric is different even when the texts overlap.',
    ar: 'الإجابة النموذجية اللي تاخذ درجة 9 في AQA ممكن تخسر درجات في Edexcel — معايير التصحيح تختلف حتى لو النصوص نفسها.',
  },
  'exam_boards.why.p3_pre': {
    en: 'Every revision page on The English Hub is board-aware. Pick yours once and the whole site re-skins to your spec — or read our ',
    ar: 'كل صفحة مراجعة في The English Hub تعرف البورد مالك. اختره مرة وحدة والموقع كله يتغيّر على مواصفاتك — أو اقرا ',
  },
  'exam_boards.why.p3_link': {
    en: 'side-by-side comparison of every board',
    ar: 'مقارنة جنب بعض لكل بورد',
  },
  'exam_boards.why.p3_post': { en: ' first.', ar: ' أول.' },

  // ─── Free resources hub (/free-resources) ────────────────────────
  'free_res.crumb.home': { en: 'Home', ar: 'الرئيسية' },
  'free_res.crumb.self': { en: 'Free resources', ar: 'مصادر مجانية' },
  'free_res.eyebrow': {
    en: 'Free, no signup required',
    ar: 'مجاني، بدون تسجيل',
  },
  'free_res.h1': {
    en: 'Free GCSE & IGCSE English revision resources',
    ar: 'مصادر مراجعة إنجليزي GCSE و IGCSE مجانية',
  },
  'free_res.lead': {
    en: 'Pick up the printable revision packs we use with our own students. No email signup, no paywall — just open and download.',
    ar: 'خذ حزم المراجعة القابلة للطباعة اللي نستخدمها مع طلابنا. بدون تسجيل إيميل، بدون اشتراك مدفوع — بس افتح ونزّل.',
  },
  'free_res.grid_sr': { en: 'Free resources grid', ar: 'شبكة المصادر المجانية' },
  'free_res.coming_soon': { en: 'Coming soon', ar: 'قريباً' },
  'free_res.notify_when': {
    en: 'Notify me when it lands',
    ar: 'بلّغني لمّا ينزل',
  },
  'free_res.launch_eyebrow': { en: 'Launch updates', ar: 'تحديثات الإطلاق' },
  'free_res.notify_h2': {
    en: 'Get told when new free packs drop',
    ar: 'خلّنا نبلّغك لمّا تنزل حزم مجانية جديدة',
  },
  'free_res.notify_lead': {
    en: 'One email per pack. Unsubscribe anytime — no follow-up marketing.',
    ar: 'إيميل واحد لكل حزمة. تقدر تلغي الاشتراك أي وقت — ما في تسويق ورا.',
  },
  'free_res.scope.aqa': { en: 'AQA', ar: 'AQA' },
  'free_res.scope.aqa_edx_ocr_eduqas': {
    en: 'AQA · Edexcel · OCR · Eduqas',
    ar: 'AQA · Edexcel · OCR · Eduqas',
  },
  'free_res.scope.multi': { en: 'All boards', ar: 'كل البوردات' },
  'free_res.scope.pearson_edexcel': {
    en: 'Pearson Edexcel IGCSE',
    ar: 'Pearson Edexcel IGCSE',
  },
  'free_res.scope.cambridge': { en: 'Cambridge IGCSE', ar: 'Cambridge IGCSE' },
  'free_res.macbeth_qb.title': {
    en: 'Macbeth quote bank',
    ar: 'بنك اقتباسات Macbeth',
  },
  'free_res.macbeth_qb.desc': {
    en: '60 essential Macbeth quotations sorted by theme, character and act — with one-line analysis hooks for every quote.',
    ar: '60 اقتباس أساسي من Macbeth مرتّبة حسب الثيمة والشخصية والفصل — مع مدخل تحليل بسطر واحد لكل اقتباس.',
  },
  'free_res.pc_grid.title': {
    en: 'Power and Conflict cluster grid',
    ar: 'شبكة مجموعة Power and Conflict',
  },
  'free_res.pc_grid.desc': {
    en: 'All 15 AQA Power and Conflict poems in a single landscape grid — themes, form, key images and one comparison hook per poem.',
    ar: 'كل قصائد AQA Power and Conflict الـ15 في شبكة أفقية وحدة — الثيمات والشكل والصور الرئيسية ومدخل مقارنة واحد لكل قصيدة.',
  },
  'free_res.aic_map.title': {
    en: 'An Inspector Calls character map',
    ar: 'خريطة شخصيات An Inspector Calls',
  },
  'free_res.aic_map.desc': {
    en: "Every character and their arc on one A3 sheet — social class, generation and the Inspector's effect on each.",
    ar: 'كل شخصية ومسارها على ورقة A3 وحدة — الطبقة الاجتماعية والجيل وتأثير المفتّش على كل وحدة.',
  },
  'free_res.ao2.title': {
    en: 'AO2 language analysis cheatsheet',
    ar: 'ورقة مختصرة لتحليل اللغة AO2',
  },
  'free_res.ao2.desc': {
    en: 'Forty named techniques with definitions, examples and the effect-language examiners want to see.',
    ar: 'أربعين تقنية مسمّاة مع تعريفات وأمثلة ولغة الأثر اللي يبيها المصحّحين.',
  },
  'free_res.edx_4et1.title': {
    en: 'Edexcel IGCSE 4ET1 set-text checklist',
    ar: 'قائمة تحقّق نصوص Edexcel IGCSE 4ET1 المقرّرة',
  },
  'free_res.edx_4et1.desc': {
    en: 'Tick-off revision checklist for every prescribed text on the 4ET1 anthology and set-text papers.',
    ar: 'قائمة مراجعة تأشّر عليها لكل نص مقرّر في مختارات 4ET1 وأوراق النصوص المقرّرة.',
  },
  'free_res.cie_diff.title': {
    en: 'CIE 0500 vs 0475 differentiator',
    ar: 'مقارنة فروقات CIE 0500 و 0475',
  },
  'free_res.cie_diff.desc': {
    en: 'Side-by-side breakdown of the two Cambridge syllabuses — assessment objectives, papers, weightings and what to revise first.',
    ar: 'تفصيل جنب بعض لمنهجي Cambridge — أهداف التقييم والأوراق وتوزيع الدرجات وشنو تراجع أول.',
  },

  // ─── Sitemap HTML (/sitemap-html) ────────────────────────────────
  'sitemap.h1': { en: 'Sitemap', ar: 'خريطة الموقع' },
  'sitemap.lead': {
    en: 'Every public page on The English Hub, grouped by section.',
    ar: 'كل صفحة عامة في The English Hub، مجمّعة حسب القسم.',
  },
  'sitemap.section.home_and_key': {
    en: 'Home and key pages',
    ar: 'الرئيسية والصفحات المهمة',
  },
  'sitemap.section.for_audiences': {
    en: 'For students, parents, teachers and schools',
    ar: 'للطلاب والأهالي والمعلمين والمدارس',
  },
  'sitemap.section.revision_hubs': {
    en: 'GCSE board revision hubs',
    ar: 'صفحات مراجعة بوردات GCSE',
  },
  'sitemap.section.set_texts': { en: 'GCSE set texts', ar: 'نصوص GCSE المقرّرة' },
  'sitemap.section.anthology_poems': {
    en: 'Anthology poems',
    ar: 'قصائد المختارات الشعرية',
  },
  'sitemap.section.igcse': { en: 'IGCSE — board hubs', ar: 'IGCSE — صفحات البوردات' },
  'sitemap.section.igcse_cambridge': {
    en: 'IGCSE — Cambridge',
    ar: 'IGCSE — Cambridge',
  },
  'sitemap.section.igcse_edexcel': {
    en: 'IGCSE — Pearson Edexcel Literature',
    ar: 'IGCSE — Pearson Edexcel أدب',
  },
  'sitemap.section.igcse_edexcel_lang': {
    en: 'IGCSE — Pearson Edexcel Language',
    ar: 'IGCSE — Pearson Edexcel لغة',
  },
  'sitemap.section.courses': { en: 'Courses and units', ar: 'الكورسات والوحدات' },
  'sitemap.section.resources': {
    en: 'Resources and study tools',
    ar: 'المصادر وأدوات الدراسة',
  },
  'sitemap.section.analysis_assessment': {
    en: 'Analysis and assessment',
    ar: 'التحليل والتقييم',
  },
  'sitemap.section.toolkit': { en: 'Toolkit and apps', ar: 'مجموعة الأدوات والتطبيقات' },
  'sitemap.section.help_faqs': { en: 'Help and FAQs', ar: 'المساعدة والأسئلة الشائعة' },
  'sitemap.section.legal': { en: 'Legal and policies', ar: 'القانونية والسياسات' },
  'sitemap.section.other': { en: 'Other', ar: 'أخرى' },
}
