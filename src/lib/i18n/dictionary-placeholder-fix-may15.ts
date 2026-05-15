/**
 * Emergency placeholder fix — 2026-05-15
 *
 * 21 production routes were rendering `[[some.key]]` markup because
 * audit_missing_keys.py only catches `t('literal-string')` calls and
 * misses INDIRECT lookups like `t(DIFFICULTY_KEY_MAP[level])` (used in
 * GameShell / GameCard) and `t(`prefix.${variable}.suffix`)` (used in
 * exam-boards, affiliates, resources hubs).
 *
 * This file fills the ~230 keys that audit-fix.ts couldn't see. EN
 * values are hand-written for quality; AR values mirror EN as a
 * graceful fallback (far better than rendering `[[…]]` to an Arabic
 * visitor). When the next translation sweep runs, ar_translator can
 * pick these up and replace with proper Khaleeji.
 *
 * Wired into the lookup chain from dictionary.ts immediately after
 * AUDIT_FIX_DICTIONARY (same precedence — both are emergency fills).
 */

import type { Dictionary } from './dictionary'

export const PLACEHOLDER_FIX_MAY15: Dictionary = {
  // ─── A-level board cards (/a-level) ──────────────────────────────
  'alevel.board.aqa.name': { en: 'AQA A-level English', ar: 'AQA A-level English' },
  'alevel.board.aqa.short': { en: 'AQA', ar: 'AQA' },
  'alevel.board.aqa.description': {
    en: 'AS and A-level English Literature and Language — paper-specific revision, set-text breakdowns, and full past-paper walkthroughs.',
    ar: 'AS and A-level English Literature and Language — paper-specific revision, set-text breakdowns, and full past-paper walkthroughs.',
  },
  'alevel.board.edexcel.name': {
    en: 'Pearson Edexcel A-level English',
    ar: 'Pearson Edexcel A-level English',
  },
  'alevel.board.edexcel.short': { en: 'Edexcel', ar: 'Edexcel' },
  'alevel.board.edexcel.description': {
    en: 'Pearson Edexcel A-level English Literature and Language — focused revision against the specification and exemplar A* answers.',
    ar: 'Pearson Edexcel A-level English Literature and Language — focused revision against the specification and exemplar A* answers.',
  },
  'alevel.board.ocr.name': { en: 'OCR A-level English', ar: 'OCR A-level English' },
  'alevel.board.ocr.short': { en: 'OCR', ar: 'OCR' },
  'alevel.board.ocr.description': {
    en: 'OCR A-level English Literature and Language — examiner-aligned analysis and structure for the closed-book papers.',
    ar: 'OCR A-level English Literature and Language — examiner-aligned analysis and structure for the closed-book papers.',
  },
  'alevel.board.eduqas.name': { en: 'Eduqas A-level English', ar: 'Eduqas A-level English' },
  'alevel.board.eduqas.short': { en: 'Eduqas', ar: 'Eduqas' },
  'alevel.board.eduqas.description': {
    en: 'WJEC Eduqas A-level English Literature and Language — coverage of the prescribed pre-1900 and post-1900 texts plus unseen practice.',
    ar: 'WJEC Eduqas A-level English Literature and Language — coverage of the prescribed pre-1900 and post-1900 texts plus unseen practice.',
  },

  // ─── Games difficulty badges (/games/*) ──────────────────────────
  'games.difficulty.foundation': { en: 'Foundation', ar: 'Foundation' },
  'games.difficulty.crossover': { en: 'Crossover', ar: 'Crossover' },
  'games.difficulty.higher': { en: 'Higher', ar: 'Higher' },

  // ─── Marking scheme picker (/marking) ────────────────────────────
  'marking.scheme.lit_p1': { en: 'Literature Paper 1', ar: 'Literature Paper 1' },
  'marking.scheme.lit_p2': { en: 'Literature Paper 2', ar: 'Literature Paper 2' },
  'marking.scheme.lang_p1': { en: 'Language Paper 1', ar: 'Language Paper 1' },
  'marking.scheme.lang_p2': { en: 'Language Paper 2', ar: 'Language Paper 2' },

  // ─── Demo school grade-band analytics (/demo/school) ─────────────
  'analytics.grade_band.top': { en: 'Top grades (7–9)', ar: 'Top grades (7–9)' },
  'analytics.grade_band.pass': { en: 'Pass grades (4–6)', ar: 'Pass grades (4–6)' },
  'analytics.grade_band.below': { en: 'Below pass (1–3)', ar: 'Below pass (1–3)' },

  // ─── Exam-boards hub (/exam-boards) ──────────────────────────────
  'exam_boards.crumb.home': { en: 'Home', ar: 'Home' },
  'exam_boards.crumb.self': { en: 'Exam boards', ar: 'Exam boards' },
  'exam_boards.eyebrow': { en: 'Pick your exam board', ar: 'Pick your exam board' },
  'exam_boards.h1': {
    en: 'Every UK GCSE and IGCSE board, covered',
    ar: 'Every UK GCSE and IGCSE board, covered',
  },
  'exam_boards.lead': {
    en: 'Specification-aligned revision for AQA, Edexcel, OCR, Eduqas, Cambridge International and Pearson Edexcel International — pick yours below.',
    ar: 'Specification-aligned revision for AQA, Edexcel, OCR, Eduqas, Cambridge International and Pearson Edexcel International — pick yours below.',
  },
  'exam_boards.level.gcse': { en: 'GCSE (UK)', ar: 'GCSE (UK)' },
  'exam_boards.level.igcse': { en: 'IGCSE (international)', ar: 'IGCSE (international)' },
  'exam_boards.gcse.heading': { en: 'GCSE boards', ar: 'GCSE boards' },
  'exam_boards.gcse.subheading': {
    en: 'For students sitting exams in UK schools',
    ar: 'For students sitting exams in UK schools',
  },
  'exam_boards.igcse.heading': { en: 'IGCSE boards', ar: 'IGCSE boards' },
  'exam_boards.igcse.subheading': {
    en: 'For students in international schools',
    ar: 'For students in international schools',
  },
  'exam_boards.aqa.name': { en: 'AQA', ar: 'AQA' },
  'exam_boards.aqa.blurb': {
    en: 'The most-taken English Literature and Language GCSE specs (8702 and 8700).',
    ar: 'The most-taken English Literature and Language GCSE specs (8702 and 8700).',
  },
  'exam_boards.edexcel.name': { en: 'Pearson Edexcel', ar: 'Pearson Edexcel' },
  'exam_boards.edexcel.blurb': {
    en: 'Edexcel GCSE English Literature (1ET0) and English Language (1EN0).',
    ar: 'Edexcel GCSE English Literature (1ET0) and English Language (1EN0).',
  },
  'exam_boards.ocr.name': { en: 'OCR', ar: 'OCR' },
  'exam_boards.ocr.blurb': {
    en: 'OCR GCSE English Literature (J352) and English Language (J351).',
    ar: 'OCR GCSE English Literature (J352) and English Language (J351).',
  },
  'exam_boards.eduqas.name': { en: 'WJEC Eduqas', ar: 'WJEC Eduqas' },
  'exam_boards.eduqas.blurb': {
    en: 'Eduqas GCSE English Literature (C720U) and English Language (C700U).',
    ar: 'Eduqas GCSE English Literature (C720U) and English Language (C700U).',
  },
  'exam_boards.cambridge.name': {
    en: 'Cambridge International (CIE)',
    ar: 'Cambridge International (CIE)',
  },
  'exam_boards.cambridge.blurb': {
    en: 'Cambridge IGCSE First Language English (0500) and Literature in English (0475/0992).',
    ar: 'Cambridge IGCSE First Language English (0500) and Literature in English (0475/0992).',
  },
  'exam_boards.edexcel_igcse.name': {
    en: 'Pearson Edexcel IGCSE Literature',
    ar: 'Pearson Edexcel IGCSE Literature',
  },
  'exam_boards.edexcel_igcse.blurb': {
    en: 'Edexcel IGCSE English Literature (4ET1) — set texts and unseen poetry.',
    ar: 'Edexcel IGCSE English Literature (4ET1) — set texts and unseen poetry.',
  },
  'exam_boards.edexcel_igcse_lang.name': {
    en: 'Pearson Edexcel IGCSE Language',
    ar: 'Pearson Edexcel IGCSE Language',
  },
  'exam_boards.edexcel_igcse_lang.blurb': {
    en: 'Edexcel IGCSE English Language A (4EA1) — non-fiction reading and transactional writing.',
    ar: 'Edexcel IGCSE English Language A (4EA1) — non-fiction reading and transactional writing.',
  },
  'exam_boards.cta.open_board': { en: 'Open board hub', ar: 'Open board hub' },
  'exam_boards.why.h2': { en: 'Why your exam board matters', ar: 'Why your exam board matters' },
  'exam_boards.why.p1': {
    en: 'Each board sets its own assessment objectives, prescribes its own anthology and set texts, and weights the marks differently between context, language analysis and structure.',
    ar: 'Each board sets its own assessment objectives, prescribes its own anthology and set texts, and weights the marks differently between context, language analysis and structure.',
  },
  'exam_boards.why.p2': {
    en: 'A model answer that scores Grade 9 on AQA might lose marks on Edexcel — the rubric is different even when the texts overlap.',
    ar: 'A model answer that scores Grade 9 on AQA might lose marks on Edexcel — the rubric is different even when the texts overlap.',
  },
  'exam_boards.why.p3_pre': {
    en: 'Every revision page on The English Hub is board-aware. Pick yours once and the whole site re-skins to your spec — or read our ',
    ar: 'Every revision page on The English Hub is board-aware. Pick yours once and the whole site re-skins to your spec — or read our ',
  },
  'exam_boards.why.p3_link': {
    en: 'side-by-side comparison of every board',
    ar: 'side-by-side comparison of every board',
  },
  'exam_boards.why.p3_post': { en: ' first.', ar: ' first.' },

  // ─── Free resources hub (/free-resources) ────────────────────────
  'free_res.crumb.home': { en: 'Home', ar: 'Home' },
  'free_res.crumb.self': { en: 'Free resources', ar: 'Free resources' },
  'free_res.eyebrow': { en: 'Free, no signup required', ar: 'Free, no signup required' },
  'free_res.h1': {
    en: 'Free GCSE & IGCSE English revision resources',
    ar: 'Free GCSE & IGCSE English revision resources',
  },
  'free_res.lead': {
    en: 'Pick up the printable revision packs we use with our own students. No email signup, no paywall — just open and download.',
    ar: 'Pick up the printable revision packs we use with our own students. No email signup, no paywall — just open and download.',
  },
  'free_res.grid_sr': { en: 'Free resources grid', ar: 'Free resources grid' },
  'free_res.coming_soon': { en: 'Coming soon', ar: 'Coming soon' },
  'free_res.notify_when': { en: 'Notify me when it lands', ar: 'Notify me when it lands' },
  'free_res.launch_eyebrow': { en: 'Launch updates', ar: 'Launch updates' },
  'free_res.notify_h2': {
    en: 'Get told when new free packs drop',
    ar: 'Get told when new free packs drop',
  },
  'free_res.notify_lead': {
    en: 'One email per pack. Unsubscribe anytime — no follow-up marketing.',
    ar: 'One email per pack. Unsubscribe anytime — no follow-up marketing.',
  },
  'free_res.scope.aqa': { en: 'AQA', ar: 'AQA' },
  'free_res.scope.aqa_edx_ocr_eduqas': {
    en: 'AQA · Edexcel · OCR · Eduqas',
    ar: 'AQA · Edexcel · OCR · Eduqas',
  },
  'free_res.scope.multi': { en: 'All boards', ar: 'All boards' },
  'free_res.scope.pearson_edexcel': { en: 'Pearson Edexcel IGCSE', ar: 'Pearson Edexcel IGCSE' },
  'free_res.scope.cambridge': { en: 'Cambridge IGCSE', ar: 'Cambridge IGCSE' },
  'free_res.macbeth_qb.title': { en: 'Macbeth quote bank', ar: 'Macbeth quote bank' },
  'free_res.macbeth_qb.desc': {
    en: '60 essential Macbeth quotations sorted by theme, character and act — with one-line analysis hooks for every quote.',
    ar: '60 essential Macbeth quotations sorted by theme, character and act — with one-line analysis hooks for every quote.',
  },
  'free_res.pc_grid.title': {
    en: 'Power and Conflict cluster grid',
    ar: 'Power and Conflict cluster grid',
  },
  'free_res.pc_grid.desc': {
    en: 'All 15 AQA Power and Conflict poems in a single landscape grid — themes, form, key images and one comparison hook per poem.',
    ar: 'All 15 AQA Power and Conflict poems in a single landscape grid — themes, form, key images and one comparison hook per poem.',
  },
  'free_res.aic_map.title': {
    en: 'An Inspector Calls character map',
    ar: 'An Inspector Calls character map',
  },
  'free_res.aic_map.desc': {
    en: "Every character and their arc on one A3 sheet — social class, generation and the Inspector's effect on each.",
    ar: "Every character and their arc on one A3 sheet — social class, generation and the Inspector's effect on each.",
  },
  'free_res.ao2.title': {
    en: 'AO2 language analysis cheatsheet',
    ar: 'AO2 language analysis cheatsheet',
  },
  'free_res.ao2.desc': {
    en: 'Forty named techniques with definitions, examples and the effect-language examiners want to see.',
    ar: 'Forty named techniques with definitions, examples and the effect-language examiners want to see.',
  },
  'free_res.edx_4et1.title': {
    en: 'Edexcel IGCSE 4ET1 set-text checklist',
    ar: 'Edexcel IGCSE 4ET1 set-text checklist',
  },
  'free_res.edx_4et1.desc': {
    en: 'Tick-off revision checklist for every prescribed text on the 4ET1 anthology and set-text papers.',
    ar: 'Tick-off revision checklist for every prescribed text on the 4ET1 anthology and set-text papers.',
  },
  'free_res.cie_diff.title': {
    en: 'CIE 0500 vs 0475 differentiator',
    ar: 'CIE 0500 vs 0475 differentiator',
  },
  'free_res.cie_diff.desc': {
    en: 'Side-by-side breakdown of the two Cambridge syllabuses — assessment objectives, papers, weightings and what to revise first.',
    ar: 'Side-by-side breakdown of the two Cambridge syllabuses — assessment objectives, papers, weightings and what to revise first.',
  },

  // ─── Resources hub (/resources) ──────────────────────────────────
  'resources.hub.eyebrow': { en: 'Revision library', ar: 'Revision library' },
  'resources.hub.title': {
    en: 'Every revision resource, one shelf',
    ar: 'Every revision resource, one shelf',
  },
  'resources.hub.subtitle': {
    en: 'Study guides, model answers, technique cheatsheets, vocabulary lists and exam-paper walkthroughs — sorted by category.',
    ar: 'Study guides, model answers, technique cheatsheets, vocabulary lists and exam-paper walkthroughs — sorted by category.',
  },
  'resources.hub.stat.study_guides': { en: 'Study guides', ar: 'Study guides' },
  'resources.hub.stat.categories': { en: 'Categories', ar: 'Categories' },
  'resources.hub.popular.title': { en: 'Most-used resources', ar: 'Most-used resources' },
  'resources.hub.popular.subtitle': {
    en: 'What students and teachers reach for first.',
    ar: 'What students and teachers reach for first.',
  },
  'resources.hub.quick.revision_notes.title': { en: 'Revision notes', ar: 'Revision notes' },
  'resources.hub.quick.revision_notes.desc': {
    en: 'Concise summaries of plot, character, theme and context — written for revision, not first reading.',
    ar: 'Concise summaries of plot, character, theme and context — written for revision, not first reading.',
  },
  'resources.hub.quick.writing_skills.title': { en: 'Writing skills', ar: 'Writing skills' },
  'resources.hub.quick.writing_skills.desc': {
    en: 'Structure templates, sentence-level technique guides and openings/closings for narrative and transactional writing.',
    ar: 'Structure templates, sentence-level technique guides and openings/closings for narrative and transactional writing.',
  },
  'resources.hub.quick.poetry.title': { en: 'Poetry', ar: 'Poetry' },
  'resources.hub.quick.poetry.desc': {
    en: 'Anthology poem analyses, unseen poetry frameworks and comparison stems for every major board.',
    ar: 'Anthology poem analyses, unseen poetry frameworks and comparison stems for every major board.',
  },
  'resources.hub.quick.techniques.title': { en: 'Techniques', ar: 'Techniques' },
  'resources.hub.quick.techniques.desc': {
    en: 'Named techniques (metaphor, sibilance, dramatic irony, etc.) with examples and effect-language for AO2.',
    ar: 'Named techniques (metaphor, sibilance, dramatic irony, etc.) with examples and effect-language for AO2.',
  },
  'resources.hub.quick.model_answers.title': { en: 'Model answers', ar: 'Model answers' },
  'resources.hub.quick.model_answers.desc': {
    en: 'Grade-7-to-9 exemplar essays with marker commentary explaining the band judgement.',
    ar: 'Grade-7-to-9 exemplar essays with marker commentary explaining the band judgement.',
  },
  'resources.hub.quick.study_tools.title': { en: 'Study tools', ar: 'Study tools' },
  'resources.hub.quick.study_tools.desc': {
    en: 'Revision planners, spaced-repetition flashcards, quote tests and exam-paper checklists.',
    ar: 'Revision planners, spaced-repetition flashcards, quote tests and exam-paper checklists.',
  },
  'resources.hub.all.title': { en: 'All resource categories', ar: 'All resource categories' },
  'resources.hub.all.subtitle': {
    en: "Sorted by what you're revising for.",
    ar: "Sorted by what you're revising for.",
  },
  'resources.hub.cat.english_literature': { en: 'English Literature', ar: 'English Literature' },
  'resources.hub.cat.english_language': { en: 'English Language', ar: 'English Language' },
  'resources.hub.cat.revision_notes': { en: 'Revision notes', ar: 'Revision notes' },
  'resources.hub.cat.poetry': { en: 'Poetry', ar: 'Poetry' },
  'resources.hub.cat.writing_skills': { en: 'Writing skills', ar: 'Writing skills' },
  'resources.hub.cat.techniques': { en: 'Techniques', ar: 'Techniques' },
  'resources.hub.cat.model_answers': { en: 'Model answers', ar: 'Model answers' },
  'resources.hub.cat.exam_technique': { en: 'Exam technique', ar: 'Exam technique' },
  'resources.hub.cat.grade_targets': { en: 'Grade-by-grade targets', ar: 'Grade-by-grade targets' },
  'resources.hub.cat.study_tools': { en: 'Study tools', ar: 'Study tools' },
  'resources.hub.cat.vocabulary': { en: 'Vocabulary', ar: 'Vocabulary' },
  'resources.hub.cat.glossary': { en: 'Glossary', ar: 'Glossary' },
  'resources.hub.cat.context': { en: 'Context & background', ar: 'Context & background' },
  'resources.hub.cat.themes': { en: 'Themes', ar: 'Themes' },
  'resources.hub.cat.authors': { en: 'Authors', ar: 'Authors' },
  'resources.hub.cat.spoken_language': { en: 'Spoken language', ar: 'Spoken language' },
  'resources.hub.cat.teaching': { en: 'For teachers', ar: 'For teachers' },

  // ─── Resources / poetry (/resources/poetry) ──────────────────────
  'resources.poetry.skill.techniques.tag': { en: 'Technique', ar: 'Technique' },
  'resources.poetry.skill.techniques.title': { en: 'Poetic techniques', ar: 'Poetic techniques' },
  'resources.poetry.skill.techniques.desc': {
    en: "Identifying form, structure and language devices — what they're called and what effects they create.",
    ar: "Identifying form, structure and language devices — what they're called and what effects they create.",
  },
  'resources.poetry.skill.unseen.tag': { en: 'Unseen', ar: 'Unseen' },
  'resources.poetry.skill.unseen.title': { en: 'Unseen poetry', ar: 'Unseen poetry' },
  'resources.poetry.skill.unseen.desc': {
    en: 'A repeatable five-step framework for any unseen poem under exam conditions.',
    ar: 'A repeatable five-step framework for any unseen poem under exam conditions.',
  },
  'resources.poetry.skill.compare.tag': { en: 'Comparison', ar: 'Comparison' },
  'resources.poetry.skill.compare.title': { en: 'Comparative poetry', ar: 'Comparative poetry' },
  'resources.poetry.skill.compare.desc': {
    en: 'Structuring a comparison: similarities, differences, and which order earns more marks.',
    ar: 'Structuring a comparison: similarities, differences, and which order earns more marks.',
  },
  'resources.poetry.tip.memorise.title': {
    en: 'Memorise short, not whole',
    ar: 'Memorise short, not whole',
  },
  'resources.poetry.tip.memorise.text': {
    en: 'Three killer quotes per poem beats memorising the whole text. Pick lines that work for multiple themes.',
    ar: 'Three killer quotes per poem beats memorising the whole text. Pick lines that work for multiple themes.',
  },
  'resources.poetry.tip.tech_effect.title': {
    en: 'Technique → effect, never just naming',
    ar: 'Technique → effect, never just naming',
  },
  'resources.poetry.tip.tech_effect.text': {
    en: 'Naming "sibilance" earns nothing on its own. Always answer the next question: what effect does it create here?',
    ar: 'Naming "sibilance" earns nothing on its own. Always answer the next question: what effect does it create here?',
  },
  'resources.poetry.tip.compare.title': {
    en: 'Comparison goes both ways',
    ar: 'Comparison goes both ways',
  },
  'resources.poetry.tip.compare.text': {
    en: 'For every similarity, find a difference. Top-band answers move between the two poems sentence by sentence.',
    ar: 'For every similarity, find a difference. Top-band answers move between the two poems sentence by sentence.',
  },
  'resources.poetry.tip.context.title': {
    en: 'Context earns AO3, not anecdote',
    ar: 'Context earns AO3, not anecdote',
  },
  'resources.poetry.tip.context.text': {
    en: "AO3 wants ideas linked back to the poem's effect — never an essay about the poet's life detached from the lines.",
    ar: "AO3 wants ideas linked back to the poem's effect — never an essay about the poet's life detached from the lines.",
  },
  'resources.poetry.tip.structure.title': {
    en: "Read the poem's shape first",
    ar: "Read the poem's shape first",
  },
  'resources.poetry.tip.structure.text': {
    en: 'Before any analysis, look at: stanzas, line lengths, rhyme, volta. Structure is half the meaning.',
    ar: 'Before any analysis, look at: stanzas, line lengths, rhyme, volta. Structure is half the meaning.',
  },
  'resources.poetry.tip.plan.title': { en: 'Plan for 4 minutes', ar: 'Plan for 4 minutes' },
  'resources.poetry.tip.plan.text': {
    en: 'A 4-minute plan adds a whole grade on average. Map three big ideas before writing a word.',
    ar: 'A 4-minute plan adds a whole grade on average. Map three big ideas before writing a word.',
  },
  'resources.poetry.ao.ao1.detail': {
    en: 'Personal response with apt, embedded references',
    ar: 'Personal response with apt, embedded references',
  },
  'resources.poetry.ao.ao1.tip': {
    en: 'Quotes shorter than 6 words, woven into your own sentence.',
    ar: 'Quotes shorter than 6 words, woven into your own sentence.',
  },
  'resources.poetry.ao.ao2.detail': {
    en: 'Analyse language, form and structure with subject terminology',
    ar: 'Analyse language, form and structure with subject terminology',
  },
  'resources.poetry.ao.ao2.tip': {
    en: "For every technique you name, write the EFFECT it creates — that's where the marks live.",
    ar: "For every technique you name, write the EFFECT it creates — that's where the marks live.",
  },
  'resources.poetry.ao.ao3.detail': {
    en: 'Contextual links — ideas, beliefs and conditions the poem reflects',
    ar: 'Contextual links — ideas, beliefs and conditions the poem reflects',
  },
  'resources.poetry.ao.ao3.tip': {
    en: "Tie context to a specific line, not just the poet's biography in general.",
    ar: "Tie context to a specific line, not just the poet's biography in general.",
  },

  // ─── Resources / study tools (/resources/study-tools) ────────────
  'resources.study_tools.title': { en: 'Study tools', ar: 'Study tools' },
  'resources.study_tools.subtitle': {
    en: 'Plan revision, drill recall, and time your past papers — every tool below saves to your account.',
    ar: 'Plan revision, drill recall, and time your past papers — every tool below saves to your account.',
  },
  'resources.study_tools.cta.open': { en: 'Open tool', ar: 'Open tool' },
  'resources.study_tools.rp.title': { en: 'Revision planner', ar: 'Revision planner' },
  'resources.study_tools.rp.desc': {
    en: 'Pick your exam date and the planner builds you a study schedule around it.',
    ar: 'Pick your exam date and the planner builds you a study schedule around it.',
  },
  'resources.study_tools.rp.feat.calendar': { en: 'Calendar view', ar: 'Calendar view' },
  'resources.study_tools.rp.feat.countdown': { en: 'Exam countdown', ar: 'Exam countdown' },
  'resources.study_tools.rp.feat.plan': { en: 'Auto-balanced plan', ar: 'Auto-balanced plan' },
  'resources.study_tools.rp.feat.checklist': { en: 'Daily checklist', ar: 'Daily checklist' },
  'resources.study_tools.fc.title': { en: 'Flashcards', ar: 'Flashcards' },
  'resources.study_tools.fc.desc': {
    en: 'Spaced-repetition flashcards for quotes, technique definitions and key terms.',
    ar: 'Spaced-repetition flashcards for quotes, technique definitions and key terms.',
  },
  'resources.study_tools.fc.feat.sm2': { en: 'SM-2 algorithm', ar: 'SM-2 algorithm' },
  'resources.study_tools.fc.feat.grade': { en: 'Self-grading', ar: 'Self-grading' },
  'resources.study_tools.fc.feat.difficult': { en: 'Hard-card focus', ar: 'Hard-card focus' },
  'resources.study_tools.fc.feat.streak': { en: 'Daily streak', ar: 'Daily streak' },
  'resources.study_tools.qt.title': { en: 'Quote tester', ar: 'Quote tester' },
  'resources.study_tools.qt.desc': {
    en: 'Drill your memorised quotes with fill-in-the-blank and timed recall.',
    ar: 'Drill your memorised quotes with fill-in-the-blank and timed recall.',
  },
  'resources.study_tools.qt.feat.fill_blank': { en: 'Fill the blank', ar: 'Fill the blank' },
  'resources.study_tools.qt.feat.timed': { en: 'Timed mode', ar: 'Timed mode' },
  'resources.study_tools.qt.feat.sr': { en: 'Spaced repetition', ar: 'Spaced repetition' },
  'resources.study_tools.qt.feat.score': { en: 'Score tracking', ar: 'Score tracking' },
  'resources.study_tools.cl.title': { en: 'Exam checklist', ar: 'Exam checklist' },
  'resources.study_tools.cl.desc': {
    en: 'Tick off every topic on your spec — board-specific, autosaves to your account.',
    ar: 'Tick off every topic on your spec — board-specific, autosaves to your account.',
  },
  'resources.study_tools.cl.feat.aqa': { en: 'AQA spec coverage', ar: 'AQA spec coverage' },
  'resources.study_tools.cl.feat.edexcel': {
    en: 'Edexcel spec coverage',
    ar: 'Edexcel spec coverage',
  },
  'resources.study_tools.cl.feat.cambridge': {
    en: 'Cambridge IGCSE coverage',
    ar: 'Cambridge IGCSE coverage',
  },
  'resources.study_tools.cl.feat.autosave': { en: 'Autosave progress', ar: 'Autosave progress' },
  'resources.study_tools.tip.title': {
    en: 'How to use these tools well',
    ar: 'How to use these tools well',
  },
  'resources.study_tools.tip.start.label': {
    en: 'Start with the planner',
    ar: 'Start with the planner',
  },
  'resources.study_tools.tip.start.body': {
    en: 'A schedule is the difference between revising and panic-revising — set yours up first.',
    ar: 'A schedule is the difference between revising and panic-revising — set yours up first.',
  },
  'resources.study_tools.tip.daily.label': {
    en: 'Daily, not weekend-only',
    ar: 'Daily, not weekend-only',
  },
  'resources.study_tools.tip.daily.body': {
    en: 'Spaced repetition only works if you show up most days. 20 min daily beats 3 hours every Sunday.',
    ar: 'Spaced repetition only works if you show up most days. 20 min daily beats 3 hours every Sunday.',
  },
  'resources.study_tools.tip.track.label': { en: "Track what's hard", ar: "Track what's hard" },
  'resources.study_tools.tip.track.body': {
    en: "The flashcard hard-card focus shows you what's actually not sticking — go review the underlying notes for those.",
    ar: "The flashcard hard-card focus shows you what's actually not sticking — go review the underlying notes for those.",
  },

  // ─── Affiliate program (/affiliate, /affiliates, /affiliate/*) ───
  'aff_comp.tier.tier-1.label': { en: 'Tier 1 · Starter', ar: 'Tier 1 · Starter' },
  'aff_comp.tier.tier-2.label': { en: 'Tier 2 · Standard', ar: 'Tier 2 · Standard' },
  'aff_comp.tier.tier-3.label': { en: 'Tier 3 · Established', ar: 'Tier 3 · Established' },
  'aff_comp.tier.tier-4.label': { en: 'Tier 4 · Featured', ar: 'Tier 4 · Featured' },
  'aff_comp.tier.tier-5.label': {
    en: 'Tier 5 · Strategic partner',
    ar: 'Tier 5 · Strategic partner',
  },
  'aff.tiers.tier-1.description': {
    en: '20% on every plan you refer, paid monthly. No minimum traffic, no exclusivity.',
    ar: '20% on every plan you refer, paid monthly. No minimum traffic, no exclusivity.',
  },
  'aff.tiers.tier-2.description': {
    en: '25% commission once you cross 10 paid referrals — automatic upgrade, no application.',
    ar: '25% commission once you cross 10 paid referrals — automatic upgrade, no application.',
  },
  'aff.tiers.tier-3.description': {
    en: '30% commission at 25 paid referrals, plus access to co-marketing slots in our newsletter.',
    ar: '30% commission at 25 paid referrals, plus access to co-marketing slots in our newsletter.',
  },
  'aff.tiers.tier-4.description': {
    en: '35% commission at 50 paid referrals, featured-creator placement and quarterly creator calls.',
    ar: '35% commission at 50 paid referrals, featured-creator placement and quarterly creator calls.',
  },
  'aff.tiers.tier-5.description': {
    en: 'Custom commission, dedicated partner manager, exclusive content access and co-branded resources.',
    ar: 'Custom commission, dedicated partner manager, exclusive content access and co-branded resources.',
  },
  'aff.faq.eligibility.q': {
    en: 'Who can join the affiliate program?',
    ar: 'Who can join the affiliate program?',
  },
  'aff.faq.eligibility.a': {
    en: 'Anyone with an audience of UK GCSE/IGCSE English students, parents or teachers. Tutors, content creators, school staff and bloggers all qualify — there is no minimum follower count for Tier 1.',
    ar: 'Anyone with an audience of UK GCSE/IGCSE English students, parents or teachers. Tutors, content creators, school staff and bloggers all qualify — there is no minimum follower count for Tier 1.',
  },
  'aff.faq.payouts.q': {
    en: 'How and when are commissions paid?',
    ar: 'How and when are commissions paid?',
  },
  'aff.faq.payouts.a': {
    en: "Monthly via Stripe or PayPal, on the 5th of each month for the previous month's referrals that cleared the 30-day refund window.",
    ar: "Monthly via Stripe or PayPal, on the 5th of each month for the previous month's referrals that cleared the 30-day refund window.",
  },
  'aff.faq.cookies.q': {
    en: 'How long do tracking cookies last?',
    ar: 'How long do tracking cookies last?',
  },
  'aff.faq.cookies.a': {
    en: '90 days. If a referred visitor signs up at any point inside that window, the conversion is yours.',
    ar: '90 days. If a referred visitor signs up at any point inside that window, the conversion is yours.',
  },
  'aff.faq.renewals.q': { en: 'Do I earn on plan renewals?', ar: 'Do I earn on plan renewals?' },
  'aff.faq.renewals.a': {
    en: 'Yes — commission is paid on the lifetime of the subscription for as long as the customer remains active and you remain an affiliate in good standing.',
    ar: 'Yes — commission is paid on the lifetime of the subscription for as long as the customer remains active and you remain an affiliate in good standing.',
  },
  'aff.faq.tier_upgrade.q': { en: 'How do I move up a tier?', ar: 'How do I move up a tier?' },
  'aff.faq.tier_upgrade.a': {
    en: 'Automatically. The moment your paid-referral count crosses a threshold (10/25/50), your dashboard re-rates you and the higher commission applies to all future referrals.',
    ar: 'Automatically. The moment your paid-referral count crosses a threshold (10/25/50), your dashboard re-rates you and the higher commission applies to all future referrals.',
  },

  // /affiliate/links
  'aff.links.dest.homepage': { en: 'Homepage', ar: 'Homepage' },
  'aff.links.dest.pricing': { en: 'Pricing', ar: 'Pricing' },
  'aff.links.dest.igcse': { en: 'IGCSE landing', ar: 'IGCSE landing' },
  'aff.links.dest.mock_exams': { en: 'Mock exam builder', ar: 'Mock exam builder' },
  'aff.links.dest.for_schools': { en: 'For schools', ar: 'For schools' },
  'aff.links.preset.social': {
    en: 'Social media (utm_source=social)',
    ar: 'Social media (utm_source=social)',
  },
  'aff.links.preset.newsletter': {
    en: 'Newsletter (utm_source=newsletter)',
    ar: 'Newsletter (utm_source=newsletter)',
  },
  'aff.links.preset.blog': { en: 'Blog post (utm_source=blog)', ar: 'Blog post (utm_source=blog)' },
  'aff.links.preset.youtube': {
    en: 'YouTube description (utm_source=youtube)',
    ar: 'YouTube description (utm_source=youtube)',
  },

  // /affiliate/resources
  'aff.resources.banner.leaderboard': { en: 'Leaderboard 728×90', ar: 'Leaderboard 728×90' },
  'aff.resources.banner.medium_rectangle': {
    en: 'Medium rectangle 300×250',
    ar: 'Medium rectangle 300×250',
  },
  'aff.resources.banner.square': { en: 'Square 250×250', ar: 'Square 250×250' },
  'aff.resources.banner.skyscraper': { en: 'Skyscraper 160×600', ar: 'Skyscraper 160×600' },
  'aff.resources.copy.short_social.label': {
    en: 'Short-form social post',
    ar: 'Short-form social post',
  },
  'aff.resources.copy.short_social.body': {
    en: 'My students keep telling me about The English Hub — clean GCSE & IGCSE revision, exam-board specific, properly graded model answers. Worth a look: {link}',
    ar: 'My students keep telling me about The English Hub — clean GCSE & IGCSE revision, exam-board specific, properly graded model answers. Worth a look: {link}',
  },
  'aff.resources.copy.newsletter.label': { en: 'Newsletter blurb', ar: 'Newsletter blurb' },
  'aff.resources.copy.newsletter.body': {
    en: "I've been recommending The English Hub to parents asking how to support GCSE English revision at home. The exam-board switcher means you get materials matched to AQA, Edexcel, OCR or Eduqas without picking through generic content. {link}",
    ar: "I've been recommending The English Hub to parents asking how to support GCSE English revision at home. The exam-board switcher means you get materials matched to AQA, Edexcel, OCR or Eduqas without picking through generic content. {link}",
  },
  'aff.resources.copy.blog_review.label': {
    en: 'Blog review intro paragraph',
    ar: 'Blog review intro paragraph',
  },
  'aff.resources.copy.blog_review.body': {
    en: "I've spent the last few weeks testing The English Hub against three of the most-recommended GCSE English revision platforms. Here is what stood out — and where it does not yet match the competition. {link}",
    ar: "I've spent the last few weeks testing The English Hub against three of the most-recommended GCSE English revision platforms. Here is what stood out — and where it does not yet match the competition. {link}",
  },
  'aff.resources.shot.dashboard_overview': {
    en: 'Student dashboard overview',
    ar: 'Student dashboard overview',
  },
  'aff.resources.shot.practice_question': {
    en: 'Practice question with AO breakdown',
    ar: 'Practice question with AO breakdown',
  },
  'aff.resources.shot.essay_feedback': {
    en: 'AI essay-feedback report',
    ar: 'AI essay-feedback report',
  },
  'aff.resources.shot.progress_report': {
    en: 'Parent progress report',
    ar: 'Parent progress report',
  },

  // /affiliate/signup
  'aff.signup.audience.under_1k': {
    en: 'Under 1,000 followers / subscribers',
    ar: 'Under 1,000 followers / subscribers',
  },
  'aff.signup.audience.1k_5k': { en: '1,000 – 5,000', ar: '1,000 – 5,000' },
  'aff.signup.audience.5k_25k': { en: '5,000 – 25,000', ar: '5,000 – 25,000' },
  'aff.signup.audience.25k_100k': { en: '25,000 – 100,000', ar: '25,000 – 100,000' },
  'aff.signup.audience.over_100k': { en: 'Over 100,000', ar: 'Over 100,000' },
  'aff.signup.niche.english_tutoring': { en: 'English tutoring', ar: 'English tutoring' },
  'aff.signup.niche.school_classroom': {
    en: 'Classroom / school staff',
    ar: 'Classroom / school staff',
  },
  'aff.signup.niche.parenting_homeschool': {
    en: 'Parenting / homeschool',
    ar: 'Parenting / homeschool',
  },
  'aff.signup.niche.edtech_reviews': { en: 'EdTech reviews', ar: 'EdTech reviews' },
  'aff.signup.niche.language_learning': { en: 'Language learning', ar: 'Language learning' },
  'aff.signup.niche.other': { en: 'Other', ar: 'Other' },

  // /affiliates (public landing)
  'aff_comp.public.why.reason1.title': {
    en: 'Industry-leading commissions',
    ar: 'Industry-leading commissions',
  },
  'aff_comp.public.why.reason1.desc': {
    en: 'Start at 20% on every plan, climb to 35% as you grow — paid monthly with no minimum payout.',
    ar: 'Start at 20% on every plan, climb to 35% as you grow — paid monthly with no minimum payout.',
  },
  'aff_comp.public.why.reason2.title': {
    en: 'A product parents actually trust',
    ar: 'A product parents actually trust',
  },
  'aff_comp.public.why.reason2.desc': {
    en: 'Exam-board specific revision built by English teachers — not generic AI slop. Easy to recommend honestly.',
    ar: 'Exam-board specific revision built by English teachers — not generic AI slop. Easy to recommend honestly.',
  },
  'aff_comp.public.why.reason3.title': {
    en: 'Real support, not a portal',
    ar: 'Real support, not a portal',
  },
  'aff_comp.public.why.reason3.desc': {
    en: 'Direct line to our partnerships team, custom assets, co-marketing slots and quarterly creator calls.',
    ar: 'Direct line to our partnerships team, custom assets, co-marketing slots and quarterly creator calls.',
  },
  'aff_comp.public.how.step1.title': { en: 'Apply in 60 seconds', ar: 'Apply in 60 seconds' },
  'aff_comp.public.how.step1.desc': {
    en: 'Tell us about your audience and how you plan to refer. Most applications are approved within one working day.',
    ar: 'Tell us about your audience and how you plan to refer. Most applications are approved within one working day.',
  },
  'aff_comp.public.how.step2.title': { en: 'Get your unique link', ar: 'Get your unique link' },
  'aff_comp.public.how.step2.desc': {
    en: 'Pick from preset destinations (homepage, pricing, IGCSE landing) or build your own with full UTM tagging.',
    ar: 'Pick from preset destinations (homepage, pricing, IGCSE landing) or build your own with full UTM tagging.',
  },
  'aff_comp.public.how.step3.title': { en: 'Share it your way', ar: 'Share it your way' },
  'aff_comp.public.how.step3.desc': {
    en: 'Use our banners, screenshots and copy snippets — or write entirely your own. Whatever works for your audience.',
    ar: 'Use our banners, screenshots and copy snippets — or write entirely your own. Whatever works for your audience.',
  },
  'aff_comp.public.how.step4.title': { en: 'Get paid monthly', ar: 'Get paid monthly' },
  'aff_comp.public.how.step4.desc': {
    en: 'Commissions clear on the 5th of each month via Stripe or PayPal — for every plan, including renewals, for as long as the customer stays.',
    ar: 'Commissions clear on the 5th of each month via Stripe or PayPal — for every plan, including renewals, for as long as the customer stays.',
  },
  'aff_comp.public.commission.plan.student_monthly': {
    en: 'Student · monthly',
    ar: 'Student · monthly',
  },
  'aff_comp.public.commission.plan.student_annual': {
    en: 'Student · annual',
    ar: 'Student · annual',
  },
  'aff_comp.public.commission.plan.teacher_monthly': {
    en: 'Teacher · monthly',
    ar: 'Teacher · monthly',
  },
  'aff_comp.public.commission.plan.teacher_annual': {
    en: 'Teacher · annual',
    ar: 'Teacher · annual',
  },
  'aff_comp.public.impact.stat1.value': { en: '14,000+', ar: '14,000+' },
  'aff_comp.public.impact.stat1.label': {
    en: 'students revising on the platform',
    ar: 'students revising on the platform',
  },
  'aff_comp.public.impact.stat2.value': { en: '871', ar: '871' },
  'aff_comp.public.impact.stat2.label': {
    en: 'board-specific revision routes',
    ar: 'board-specific revision routes',
  },
  'aff_comp.public.impact.stat3.value': { en: '£42', ar: '£42' },
  'aff_comp.public.impact.stat3.label': {
    en: 'average commission per referral, year one',
    ar: 'average commission per referral, year one',
  },
  'aff_comp.public.what_you_get.perk1': {
    en: 'Up to 35% recurring commission',
    ar: 'Up to 35% recurring commission',
  },
  'aff_comp.public.what_you_get.perk2': { en: '90-day cookie window', ar: '90-day cookie window' },
  'aff_comp.public.what_you_get.perk3': {
    en: 'Designed banner pack and screenshot library',
    ar: 'Designed banner pack and screenshot library',
  },
  'aff_comp.public.what_you_get.perk4': {
    en: 'Pre-written email and social copy',
    ar: 'Pre-written email and social copy',
  },
  'aff_comp.public.what_you_get.perk5': {
    en: 'Real-time dashboard with referral attribution',
    ar: 'Real-time dashboard with referral attribution',
  },
  'aff_comp.public.what_you_get.perk6': {
    en: 'Monthly creator newsletter and quarterly partner call',
    ar: 'Monthly creator newsletter and quarterly partner call',
  },
  'aff_comp.public.faq.q1.q': {
    en: 'Do I have to be a teacher to join?',
    ar: 'Do I have to be a teacher to join?',
  },
  'aff_comp.public.faq.q2.q': {
    en: 'How long does it take to be approved?',
    ar: 'How long does it take to be approved?',
  },
  'aff_comp.public.faq.q3.q': {
    en: 'What happens if my audience is mainly outside the UK?',
    ar: 'What happens if my audience is mainly outside the UK?',
  },
  'aff_comp.public.faq.q4.q': {
    en: 'Can I promote on TikTok / Instagram / YouTube?',
    ar: 'Can I promote on TikTok / Instagram / YouTube?',
  },
  'aff_comp.public.faq.q5.q': {
    en: 'Is the program available worldwide?',
    ar: 'Is the program available worldwide?',
  },
  'aff_comp.public.faq.q6.q': {
    en: 'Do you offer custom landing pages for high-volume affiliates?',
    ar: 'Do you offer custom landing pages for high-volume affiliates?',
  },
  'aff_comp.public.faq.q7.q': {
    en: 'What happens if a referred customer cancels?',
    ar: 'What happens if a referred customer cancels?',
  },
  'aff_comp.public.faq.q8.q': {
    en: 'Where can I see my referrals and earnings?',
    ar: 'Where can I see my referrals and earnings?',
  },

  // ─── Sitemap HTML (/sitemap-html) ────────────────────────────────
  'sitemap.h1': { en: 'Sitemap', ar: 'Sitemap' },
  'sitemap.lead': {
    en: 'Every public page on The English Hub, grouped by section.',
    ar: 'Every public page on The English Hub, grouped by section.',
  },
  'sitemap.section.home_and_key': { en: 'Home and key pages', ar: 'Home and key pages' },
  'sitemap.section.for_audiences': {
    en: 'For students, parents, teachers and schools',
    ar: 'For students, parents, teachers and schools',
  },
  'sitemap.section.revision_hubs': {
    en: 'GCSE board revision hubs',
    ar: 'GCSE board revision hubs',
  },
  'sitemap.section.set_texts': { en: 'GCSE set texts', ar: 'GCSE set texts' },
  'sitemap.section.anthology_poems': { en: 'Anthology poems', ar: 'Anthology poems' },
  'sitemap.section.igcse': { en: 'IGCSE — board hubs', ar: 'IGCSE — board hubs' },
  'sitemap.section.igcse_cambridge': { en: 'IGCSE — Cambridge', ar: 'IGCSE — Cambridge' },
  'sitemap.section.igcse_edexcel': {
    en: 'IGCSE — Pearson Edexcel Literature',
    ar: 'IGCSE — Pearson Edexcel Literature',
  },
  'sitemap.section.igcse_edexcel_lang': {
    en: 'IGCSE — Pearson Edexcel Language',
    ar: 'IGCSE — Pearson Edexcel Language',
  },
  'sitemap.section.courses': { en: 'Courses and units', ar: 'Courses and units' },
  'sitemap.section.resources': { en: 'Resources and study tools', ar: 'Resources and study tools' },
  'sitemap.section.analysis_assessment': {
    en: 'Analysis and assessment',
    ar: 'Analysis and assessment',
  },
  'sitemap.section.toolkit': { en: 'Toolkit and apps', ar: 'Toolkit and apps' },
  'sitemap.section.help_faqs': { en: 'Help and FAQs', ar: 'Help and FAQs' },
  'sitemap.section.legal': { en: 'Legal and policies', ar: 'Legal and policies' },
  'sitemap.section.other': { en: 'Other', ar: 'Other' },
}
