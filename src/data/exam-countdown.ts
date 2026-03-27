// @ts-nocheck
export interface RevisionPlanner {
  id: string;
  title: string;
  board: string;
  weeksOut: number;
  dailyPlan: DailyRevision[];
  weeklyFocus: string[];
  tips: string[];
}

export interface DailyRevision {
  day: number;
  morning: string;
  afternoon: string;
  evening: string;
  focusSkill: string;
}

// AQA 12-Week Planner
const aqa12Week: RevisionPlanner = {
  id: "aqa-12-week",
  title: "AQA 12-Week Countdown Revision Planner",
  board: "AQA",
  weeksOut: 12,
  weeklyFocus: [
    "Week 12: Foundation Review - Text Analysis & Key Concepts. Revisit the assessment objectives for your specific module. Identify areas where you need the most support. Create a glossary of key literary terms and concepts specific to your texts. Start with unseen texts to build confidence in approaching unfamiliar material.",
    "Week 11: Close Reading & Textual Evidence. Develop your ability to zoom in on specific words, phrases, and techniques. Practice finding relevant quotations for each major theme in your studied texts. Work on integrating quotations smoothly into your writing.",
    "Week 10: Thematic Development & Comparative Study. Map out the major themes across your texts. Identify patterns and contrasts between different writers' treatments of similar ideas. Practice writing comparative points linking two or three texts.",
    "Week 9: Exam Technique & Time Management. Complete full practice papers under timed conditions. Work on structuring responses to meet time windows for each section. Practice managing time between planning and writing.",
    "Week 8: Language Analysis Deep Dive. Focus on phonetic devices, grammatical structures, and semantic fields. Practice identifying and analyzing effects of specific language choices with sophistication.",
    "Week 7: Historical Context & Critical Perspectives. Research the period in which your texts were written. Explore different critical interpretations of your key texts. Practice integrating contextual references naturally.",
    "Week 6: Poetry Analysis & Form. If studying poetry, focus on understanding poetic form, meter, and rhyme schemes. Practice analyzing how form contributes to meaning. Study poets you're comparing.",
    "Week 5: Drama-Specific Skills. Focus on stagecraft, dramatic techniques, and audience role. Practice analyzing how playwrights use stage directions and setting.",
    "Week 4: Writing Quality & Expression. Focus on syntax, vocabulary, and writing craft. Practice using sophisticated sentence structures to convey complex ideas.",
    "Week 3: Question-Specific Revision. Work through each question type individually. Section A: unseen text. Section B: studied texts.",
    "Week 2: Final Two-Week Daily Revision Plan begins below",
    "Week 1: Final Two-Week Daily Revision Plan begins below",
  ],
  dailyPlan: [
    { day: 1, morning: "Complete a full unseen text analysis (30 min timed). Focus on identifying multiple techniques and their effects. Review and identify improvement areas.", afternoon: "Practice writing structured paragraphs analyzing a key theme. Include topic sentence, evidence, analysis, and link. Complete this task three times.", evening: "Review one past paper question on your weakest topic. Plan (20 min), write response (25 min). Mark using official scheme.", focusSkill: "Unseen text and technique identification" },
    { day: 2, morning: "Analyze a studied poem focusing on one device. Trace how it appears throughout and explain cumulative effect.", afternoon: "Complete Section B of practice paper in 45 min. Plan 10 min, write 35 min. Focus on time management.", evening: "Contextual research session on one text. Find 3-4 key facts and write how each influences interpretation.", focusSkill: "Poetic devices and context" },
    { day: 3, morning: "Comparative writing: paragraph comparing two texts on same theme. Aim for 20-25 min. Complete for two themes.", afternoon: "Targeted language analysis on a passage. Identify every technique. Analyze effects of 8-10 features.", evening: "Review critical perspectives. Incorporate alternative interpretation into key scene analysis.", focusSkill: "Comparative analysis" },
    { day: 4, morning: "Timed unseen text (20 min). Identify techniques, consider effects, explain choices. Then review against model.", afternoon: "Full practice paper Section A and B (90 min total). 5 min planning each, 40 min Section A, 40 min Section B.", evening: "Self-assessment using mark scheme. Identify recurring errors.", focusSkill: "Full exam simulation" },
    { day: 5, morning: "Quotation accuracy test: write 10-15 quotations from memory. Check accuracy. Note significance.", afternoon: "Character analysis on major character. Development, key scenes, thematic significance.", evening: "Practice response to previously difficult past paper question. Plan 10 min, write 30 min, compare to model.", focusSkill: "Quotation accuracy" },
    { day: 6, morning: "Technique identification challenge on unfamiliar extracts. Identify techniques (15 min), then analyze effects (20 min).", afternoon: "Thematic mapping across all studied texts. Visual representation with scenes, characters, quotes.", evening: "Essay planning practice on 3-4 past questions. 5 min per plan. Focus on detailed, structured plans.", focusSkill: "Technique analysis" },
    { day: 7, morning: "Full timed unseen paper (45 min). Plan 5 min, write 40 min. Review and identify improvements.", afternoon: "Review week's notes. Consolidate key points. Create summary cards for quick review.", evening: "Light revision. Read glossary, key quotations, thematic maps. Reflect on progress.", focusSkill: "Weekly consolidation" },
    { day: 8, morning: "Unseen text analysis on challenging extract. Identify ambiguities and multiple interpretations.", afternoon: "Comparative paragraph on language techniques. How two writers achieve similar effects, then different effects.", evening: "Complete past paper Section B (45 min: 10 plan, 35 write). Mark carefully.", focusSkill: "Ambiguity and comparison" },
    { day: 9, morning: "Poetry deep-dive on three poems. Identify poet's distinctive style. Write about consistent technique use.", afternoon: "Context research session. Investigate specific historical event relevant to one text. Research 30 min, write connection 15 min.", evening: "Full timed practice paper (90 min) under realistic conditions. Mark and identify patterns.", focusSkill: "Poetry and full exam" },
    { day: 10, morning: "Technique application challenge on new extract. Identify three techniques, explain effects and purpose.", afternoon: "Response discussing multiple interpretations or viewpoints. Incorporate different critical perspectives.", evening: "Self-assessment and targeting. Review practice papers. Identify weak areas. Create focused plan.", focusSkill: "Interpretations" },
    { day: 11, morning: "Timed unseen text (25 min). Focus on precision. Spend 15 min comparing to model answer.", afternoon: "Form and structure analysis. How writer's formal choices contribute to meaning.", evening: "Consolidation review. 45 min reviewing week's notes. Add to revision guide. Create flashcards.", focusSkill: "Form and structure" },
    { day: 12, morning: "Confidence check unseen text. Should feel more confident than starting point.", afternoon: "Section A and B practice paper (80 min: 5 plan A, 35 write A, 5 plan B, 35 write B).", evening: "End-of-week reflection. Mark paper. Celebrate progress. Identify remaining work.", focusSkill: "Final consolidation" },
    { day: 13, morning: "Targeted weakness work. 45 min on your identified weakest skill. Multiple focused practices.", afternoon: "Quotation mastery. Write quotations from memory. One-sentence explanation for each. 15-20 quotations across texts.", evening: "Light revision. Read revision guide. 10 min per text reviewing themes and characters.", focusSkill: "Targeted work" },
    { day: 14, morning: "Final full paper (90 min). Last timed practice before real exam.", afternoon: "Final review of guides and flashcards. Brief and confidence-focused (40 min).", evening: "Gather equipment. Check exam details. Light confidence-building reading. Early night.", focusSkill: "Final preparation" },
  ],
  tips: [
    "Active revision is far more effective than passive reading. Practice writing responses constantly.",
    "Always use the mark scheme when marking practice papers. Understand what examiners want.",
    "Focus on command words in questions. 'Analyze' requires different responses than 'discuss' or 'compare'.",
    "Time management is a skill you can improve through practice. Do regular timed practices.",
    "Create a quotation bank early and keep it updated. Write key quotations from memory by exam day.",
    "Understand the mark allocation for each question. Spend more time on higher-tariff questions.",
    "Practice identifying techniques in unseen texts regularly. This skill can be dramatically improved.",
    "Focus on understanding texts and explaining your interpretations rather than memorizing.",
    "Contextual knowledge is important, but must be integrated naturally. Support your interpretation, don't replace it.",
    "Read exam questions carefully and underline key command words. Many mistakes come from not addressing what's asked.",
    "If stuck on a question, move on and return to it. Use saved time to perfect other responses.",
    "Practice explaining your ideas out loud. If you can't explain verbally, you won't write effectively.",
    "Keep your quotations accurate. One wrong word changes meaning and weakens analysis.",
    "Develop a consistent response structure. Helps you organize thoughts and meet examiner expectations.",
    "Don't leave revision until final week. Distributed practice over weeks is more effective than cramming.",
  ]
};

// AQA 4-Week Planner
const aqa4Week: RevisionPlanner = {
  id: "aqa-4-week",
  title: "AQA 4-Week Intensive Revision Planner",
  board: "AQA",
  weeksOut: 4,
  weeklyFocus: [
    "Week 4: Rapid Foundation Reset. Focus ruthlessly on essentials. Review assessment objectives. Complete 2 full practice papers to establish baseline. Identify three greatest weaknesses. Create summary notes on key themes. Time is your limiting resource.",
    "Week 3: Technique Mastery & Practice. Work daily on identifying and analyzing techniques. Complete 4-5 full practice papers. Focus on time management and consistent structure. Create and refine quotation bank. Practice comparative writing repeatedly.",
    "Week 2: Final Two-Week Daily Revision Plan begins below",
    "Week 1: Final Two-Week Daily Revision Plan begins below",
  ],
  dailyPlan: [
    { day: 1, morning: "Full unseen text analysis (20 min timed). Review against model answer. Identify weaker areas (20 min total).", afternoon: "Section B practice paper (45 min: 10 plan, 35 write). Choose strongest text for confidence. Mark carefully.", evening: "Create quotation summary: 15-20 quotations with one-line significance notes (40 min). This becomes primary reference.", focusSkill: "Baseline and quotation bank" },
    { day: 2, morning: "Comparative paragraph without planning (10 min), then with planning (15 min). Compare versions. Note improvement planning provides.", afternoon: "Technique identification on three unfamiliar extracts. Every technique. Analysis of effects for 5+ techniques per extract (45 min).", evening: "Review assessment objectives. Ensure full understanding. Create objective checklist for marking practice papers.", focusSkill: "Comparative writing" },
    { day: 3, morning: "Full unseen text section (20 min timed). Then continue without time (15 min). Compare versions. What would you add?", afternoon: "Full practice paper Section A and B (75 min total). 5 min planning each section. Strict time discipline. Mark immediately.", evening: "Update revision notes based on paper feedback (40 min). Focus on loss areas. Create targeted cards for three weaknesses.", focusSkill: "Full paper" },
    { day: 4, morning: "Targeted weakness work #1: 4 timed practices (20 min each) if unseen text struggle, or 4 paragraph exercises (15 min each) if studied texts struggle.", afternoon: "Quotation mastery. Write from memory. One-sentence significance explanation. 15-20 quotations (40 min).", evening: "Section B practice paper (45 min). Choose weakest text. Mark and identify difficulties.", focusSkill: "Targeted work" },
    { day: 5, morning: "Language analysis deep-dive on one extract. 45 min analyzing in extreme detail. 15+ language features with sophisticated effects.", afternoon: "Timed unseen text (25 min). Review focusing on analysis sophistication. Beyond identification to effects and purpose.", evening: "End-of-week consolidation (35 min). Review learning. Update guides. Plan next week's intensification.", focusSkill: "Language analysis" },
    { day: 6, morning: "Full practice paper (90 min). Most confident yet. Work methodically and carefully. Careful mark after.", afternoon: "Targeted weakness work #2 (40 min). Second most significant weakness. Multiple focused practices.", evening: "Light revision. Review quotation bank and guides. Summary notes for each text. Confidence-building reflection (30 min).", focusSkill: "Second full paper" },
    { day: 7, morning: "Unseen text analysis: two timed practices (20 min each). Noticeably more confident than first week.", afternoon: "Comparative writing: 3 focused exercises (15 min each). Shorter, sharper than full essays.", evening: "Self-assessment. Mark practices. Identify patterns in what you do well. Celebrate progress.", focusSkill: "Week 1 consolidation" },
    { day: 8, morning: "Section A and B practice paper (75 min). Smooth, practiced approach by now. Confidence with precision.", afternoon: "Targeted weakness work #3 (40+ min). Third identified weakness. Multiple practices. Should see improvement in all three areas.", evening: "Review and update materials (40 min). Quotation bank becoming automatic. Refresh memory of themes and characters.", focusSkill: "Continued development" },
    { day: 9, morning: "Full timed unseen analysis (25 min). Sophistication and speed improved significantly. Review with satisfaction.", afternoon: "Full practice paper (85 min). 6-7 full papers done now. Developing real exam technique expertise.", evening: "Final review of materials (35 min). Update summary notes. Create final checklist. Everything should feel familiar.", focusSkill: "Advanced practice" },
    { day: 10, morning: "Final full-length unseen practice (25 min). Significant improvement since start. Spend 10 min reflecting on progress.", afternoon: "Section A and B practice paper (75 min). Careful and confident. Well-prepared feeling.", evening: "Final consolidation (30 min). Mark today's papers. Celebrate progress. Review quotation bank. Create 'things I do well' list.", focusSkill: "Final practice" },
    { day: 11, morning: "Revision recap (45 min). Review guides and summary notes. Revisit uncertain concepts. Automatic and confident feeling.", afternoon: "Quotation final check. Can you write them accurately from memory? Revise any uncertain ones.", evening: "Light confidence-building review (30 min). Read favorite text excerpts. Reflect on learning. Relaxed session.", focusSkill: "Final consolidation" },
    { day: 12, morning: "Final full practice paper (85 min) under realistic exam conditions. Last full paper before real exam. Care and attention.", afternoon: "Final mark. Celebrate success. Identify final small concerns.", evening: "Final preparation. Check location, time, format. Gather equipment. Light reading. Early night (20 min).", focusSkill: "Final preparation" },
    { day: 13, morning: "Final review session (40 min). Quotation bank and key concepts. Automatic and confident now. Focus on always-tricky areas.", afternoon: "Just 2 timed unseen texts (20 min total). Keep hand in without exhaustion. Confident feeling.", evening: "Rest and prepare. Gather equipment. Check transport. Light pleasure reading. Focus on sleep and wellbeing.", focusSkill: "Light final prep" },
    { day: 14, morning: "Final exam day preparation (15 min). Review key quotations. Confidence and positivity. Remind yourself of strengths.", afternoon: "Final practical checks. All equipment ready. Route planned. Exam time known.", evening: "Rest. No revision. Sleep and wellbeing.", focusSkill: "Exam readiness" },
  ],
  tips: [
    "With only 4 weeks, every day counts. Be consistent and disciplined.",
    "Focus ruthlessly on essentials. Don't learn new things in week 4; consolidate what you know.",
    "One full practice paper every 2-3 days. Exam technique develops through practice under time pressure.",
    "Your quotation bank is essential. Keep it with you constantly.",
    "Time management is critical. You need to practice precisely allocating time.",
    "Mark immediately and carefully. Use mark scheme to understand what examiners want.",
    "Don't panic if not as prepared as you'd like. Four focused weeks can yield strong results.",
    "Identify three main weaknesses early. Focus revision on these.",
    "Multiple full papers needed. Practice working under time pressure consistently.",
    "Keep revision organized. Flashcards, summary notes, quotation banks make it efficient.",
    "Practice explaining ideas clearly and precisely. Clarity counts toward marks.",
    "Sleep and wellbeing matter more in intensive revision. Don't sacrifice these.",
    "Brain needs variety. Mix unseen text work with studied text work throughout each day.",
    "Celebrate small improvements. Every paper should be slightly better.",
    "Trust your revision on exam day and do your best.",
  ]
};

// OCR/WJEC 8-Week Planner
const ocrwjec8Week: RevisionPlanner = {
  id: "ocr-wjec-8-week",
  title: "OCR/WJEC Combined 8-Week Revision Planner",
  board: "OCR/WJEC",
  weeksOut: 8,
  weeklyFocus: [
    "Week 8: Foundation & Board-Specific Understanding. Understand specific assessment criteria for your board. Both emphasize close textual analysis and independent interpretations. Create detailed revision guides for texts. Build quotation bank organized by theme and technique. Review past papers and mark schemes.",
    "Week 7: Close Reading & Textual Analysis. Both boards value sophisticated close reading. Analyze language, form, structure with precision. Practice detailed analytical paragraphs on specific extracts. Create detailed annotations of key scenes.",
    "Week 6: Comparative Analysis & Thematic Study. Develop strong comparative skills. Write about how different texts approach similar themes. Create thematic maps. Practice synthesizing ideas from multiple texts.",
    "Week 5: Written Response Skills. Focus on specific written response format. Responses that are clear, well-organized, meeting specific requirements. Both value clear expression and logical argument.",
    "Week 4: Unseen Text & Interpretation. Develop expertise in analyzing unfamiliar texts. Support interpretations with textual evidence. Develop multiple interpretations.",
    "Week 3: Question-Type Mastery & Time Management. Work through each question type. Practice different command words. Full timed papers regularly. Develop pacing strategy.",
    "Week 2: Final Two-Week Daily Revision Plan begins below",
    "Week 1: Final Two-Week Daily Revision Plan begins below",
  ],
  dailyPlan: [
    { day: 1, morning: "Close reading analysis of key passage from studied text (35 min). Identify multiple techniques, analyze effects with sophistication. Focus on precision.", afternoon: "Section B essay from recent OCR/WJEC paper (45 min: 10 plan, 35 write). Meet board's specific criteria. Mark using board's scheme.", evening: "Create detailed textual analysis guide for one text. Themes, techniques, key quotations, potential interpretations (40 min).", focusSkill: "Close reading" },
    { day: 2, morning: "Comparative paragraph comparing two texts same theme/techniques (25 min). Make sophisticated connections.", afternoon: "Full OCR/WJEC paper under timed conditions (80 min). Allocate time by board format. Mark using official scheme.", evening: "Self-assessment (35 min). Where did you lose marks? Create targeted notes on areas needing improvement.", focusSkill: "Comparative writing" },
    { day: 3, morning: "Interpretation practice on key scene/character. Detailed interpretation with textual evidence (30 min). Explain reasoning.", afternoon: "Focused essay on strongest text (40 min: 10 plan, 30 write). Feel confident on this text.", evening: "Quotation mastery (35 min). Write 18-20 key quotations from memory. Check accuracy. Note significance and uses.", focusSkill: "Interpretation" },
    { day: 4, morning: "Language and technique analysis on passage (40 min). Every technique identified. Multiple layers of effect. Beyond surface-level analysis.", afternoon: "Full OCR/WJEC paper (80 min). Second full practice paper. Work with focus and precision.", evening: "Consolidation review (35 min). Review work so far. Update revision materials.", focusSkill: "Technique analysis" },
    { day: 5, morning: "Form and structure analysis (35 min). How writer's formal choices contribute to meaning and effect. Sophisticated discussion of structure.", afternoon: "Section responses from practice paper (70 min). Meet board's specific criteria.", evening: "Light review (30 min). Go through revision materials. Reflect on progress. Confidence-building.", focusSkill: "Form and structure" },
    { day: 6, morning: "Full OCR/WJEC paper (80 min). Third full practice paper.", afternoon: "Focused improvement work (40 min). Your greatest weakness. Multiple targeted practices.", evening: "Weekly consolidation. Review progress. Update materials. Plan next week. Keep positive (35 min).", focusSkill: "Third full paper" },
    { day: 7, morning: "Close reading analysis in extreme detail (35 min). 12-15+ techniques. Explain effects.", afternoon: "Full essay response (40 min: 10 plan, 30 write). Work smoothly and confidently.", evening: "Weekly reflection. Mark work. Celebrate progress. Identify remaining areas. Prepare for final week (35 min).", focusSkill: "Week 1 consolidation" },
    { day: 8, morning: "Full OCR/WJEC paper (80 min). Final two weeks begin. Papers should show increasing confidence.", afternoon: "Interpretation and analysis practice (40 min). Different possible interpretations of text. Support each with evidence.", evening: "Review quotation bank (30 min). Accuracy check. Write from memory confidently.", focusSkill: "Interpretations" },
    { day: 9, morning: "Detailed close reading on complex passage (35 min). Sophisticated and precise analysis.", afternoon: "Full OCR/WJEC paper (80 min). Among final full papers. Care and attention to detail.", evening: "Detailed self-assessment. Mark carefully. Celebrate successes. Identify remaining areas needing work (35 min).", focusSkill: "Advanced reading" },
    { day: 10, morning: "Review all revision materials (40 min). Everything should feel familiar now.", afternoon: "Two focused essay responses (20 min each different texts). Quality and meeting board criteria.", evening: "Consolidation (30 min). Review quotations and key concepts.", focusSkill: "Consolidation" },
    { day: 11, morning: "Final full OCR/WJEC paper (80 min) under realistic exam conditions. Demonstrate all developed skills.", afternoon: "Final self-assessment. Mark carefully. Celebrate. Identify final work areas.", evening: "Final material review (25 min). Quotations and concepts. Brief and confident.", focusSkill: "Final full paper" },
    { day: 12, morning: "Final review (35 min). All revision materials. Challenging areas focused.", afternoon: "One final close reading analysis (30 min). Smooth and confident.", evening: "Practical exam prep. Check location, time, format. Gather equipment. Light reading. Early night.", focusSkill: "Final prep" },
    { day: 13, morning: "Light final review (30 min). Quotation bank and concepts. Confidence focus.", afternoon: "One final close reading analysis (20 min). Keep hand in without exhaustion.", evening: "Rest. No revision. Sleep and self-care focus.", focusSkill: "Light prep" },
    { day: 14, morning: "Final exam day preparation (10 min). Key quotations. Confidence and reminder of strengths.", afternoon: "Final practical checks. Equipment ready. Route planned. Exam time known.", evening: "Rest. No revision. Sleep and wellbeing.", focusSkill: "Exam readiness" },
  ],
  tips: [
    "Both OCR and WJEC value close, precise textual analysis. Develop this throughout revision.",
    "Quotations must be accurate and integrated smoothly. Practice constantly.",
    "Your interpretation of texts matters. Explain what things mean, not just what's there.",
    "Multiple full practice papers needed. Develop confidence working under time pressure.",
    "Use board's mark scheme actively. Understanding their criteria is crucial.",
    "Form and structure are important. Practice analyzing how these contribute to meaning.",
    "Close reading is foundation of strong responses. Zoom in on details and analyze thoroughly.",
    "Time management matters. Practice allocating time across sections precisely.",
    "Mark carefully using official mark scheme.",
    "Revision materials should include detailed annotations of key scenes.",
    "Practice writing clear, well-organized responses with strong topic sentences.",
    "Thematic connections matter. Practice linking texts through shared themes.",
    "Context matters, but close reading takes priority. Start with the text.",
    "Sleep and wellbeing important. Don't sacrifice these for revision.",
    "Trust your revision on exam day and do your best.",
  ]
};

// IGCSE 8-Week Planner
const igcse8Week: RevisionPlanner = {
  id: "igcse-8-week",
  title: "IGCSE 8-Week Countdown Revision Planner",
  board: "IGCSE",
  weeksOut: 8,
  weeklyFocus: [
    "Week 8: Foundation & Assessment Understanding. Understand specific IGCSE assessment format and criteria. Review examination papers and what each section tests. Build foundation knowledge of studied texts. Create detailed revision guides. Start quotation database organized by text and theme.",
    "Week 7: Text Knowledge & Context. Develop comprehensive knowledge of studied texts. Major themes, characters, important events. Research text contexts (historical, social, biographical). Integrate context naturally. Create thematic maps.",
    "Week 6: Analytical Skills Development. Focus on IGCSE-specific analytical skills. Analytical paragraphs with clear topic sentences and textual evidence. Close reading and identifying writer's effects.",
    "Week 5: Unseen Text & Literature Skills. Develop expertise in unseen texts or specific literature skills. Analyze unfamiliar texts with precision. Make interpretations supported by evidence.",
    "Week 4: Essay Structure & Written Expression. Focus on clear structure and precise expression. Extended analytical responses with clear progression. Meet IGCSE expectations for expression and organization.",
    "Week 3: Question-Type Practice & Time Management. Work through each question type. Practice different command words. Full timed papers. Develop time management.",
    "Week 2: Final Two-Week Daily Revision Plan begins below",
    "Week 1: Final Two-Week Daily Revision Plan begins below",
  ],
  dailyPlan: [
    { day: 1, morning: "Analytical response to IGCSE-style question on studied text (35 min). Meet IGCSE criteria. Mark using IGCSE scheme.", afternoon: "Full IGCSE paper under timed conditions (90 min). Allocate time by IGCSE format. Work methodically.", evening: "Create comprehensive IGCSE revision guide for one text. Themes, characters, key quotations, analysis (40 min).", focusSkill: "IGCSE understanding" },
    { day: 2, morning: "Quotation accuracy and integration (40 min). Write 15-20 key quotations from memory. Check accuracy. Brief significance notes.", afternoon: "Focused analytical response on theme in multiple texts (35 min). Practice linking evidence from different texts.", evening: "Character analysis. Major character. Development, significance, theme relationship (35 min).", focusSkill: "Quotation mastery" },
    { day: 3, morning: "Language and technique analysis on passage (40 min). Identify techniques, explain effects. Sophistication in analysis.", afternoon: "Full IGCSE paper (85 min). Second full practice paper. Increasing confidence.", evening: "Self-assessment using IGCSE scheme. Mark paper. Identify improvement areas. Create targeted notes (35 min).", focusSkill: "Technique analysis" },
    { day: 4, morning: "Thematic analysis (35 min). Major theme across studied texts. How different texts approach it.", afternoon: "Focused responses on two weakest texts (20 min each). Build confidence on these.", evening: "Light consolidation (30 min). Organize notes. Quotation bank review.", focusSkill: "Thematic analysis" },
    { day: 5, morning: "Full IGCSE paper (85 min). Third full practice paper. Increasing confidence.", afternoon: "Context and meaning (30 min). How understanding text's context illuminates interpretation.", evening: "Weekly consolidation. Review progress. Update materials. Plan next week. Keep positive (30 min).", focusSkill: "Full paper" },
    { day: 6, morning: "Analytical response on strongest text (30 min). Feel confident on this text.", afternoon: "Unseen text or literature skills practice (45 min). Any unseen text element or specific literature skill.", evening: "Weekly reflection. Mark work. Celebrate progress. Identify remaining work.", focusSkill: "Week 1 consolidation" },
    { day: 7, morning: "Full IGCSE paper (85 min). Final two weeks. Work with care and attention.", afternoon: "Language analysis practice (40 min). How writers use language for specific effects in new passage.", evening: "Quotation review (30 min). Accuracy check. Write from memory. Confidence.", focusSkill: "Language analysis" },
    { day: 8, morning: "Analytical responses on two different texts (20 min each). Quality and meeting IGCSE criteria.", afternoon: "Full IGCSE paper (85 min). Among final full papers. Care and precision.", evening: "Detailed self-assessment. Mark carefully. Celebrate success. Identify remaining work (35 min).", focusSkill: "Advanced responses" },
    { day: 9, morning: "Analytical response on weakest text (35 min). More confident on this text now.", afternoon: "Review all revision materials (45 min). Everything should feel familiar.", evening: "Consolidation (30 min). Review quotations and concepts.", focusSkill: "Consolidation" },
    { day: 10, morning: "Final full IGCSE paper (85 min) under realistic exam conditions. Demonstrate all developed skills.", afternoon: "Final self-assessment. Mark. Celebrate successes. Identify final work (35 min).", evening: "Final material review (25 min). Quotations and concepts. Brief and confident.", focusSkill: "Final full paper" },
    { day: 11, morning: "Final review (40 min). All revision materials. Challenging areas focus.", afternoon: "One final analytical response (30 min). Smooth and confident.", evening: "Practical exam prep. Check location, time, format. Gather equipment. Light reading. Early night.", focusSkill: "Final prep" },
    { day: 12, morning: "Light final review (30 min). Quotation bank and concepts. Confidence focus.", afternoon: "One final analytical response (20 min). Hand in without exhaustion.", evening: "Rest. No revision. Sleep and self-care.", focusSkill: "Light prep" },
    { day: 13, morning: "Final exam day preparation (10 min). Key quotations. Confidence and strengths reminder.", afternoon: "Final practical checks. Equipment ready. Route planned. Exam time known.", evening: "Rest. No revision. Sleep and wellbeing.", focusSkill: "Exam readiness" },
    { day: 14, morning: "Deep breath. You've done the work. Remind yourself of strengths. Confidence focus.", afternoon: "Trust your revision. You're well-prepared.", evening: "Sleep well. You've got this.", focusSkill: "Final day" },
  ],
  tips: [
    "IGCSE values clear, well-organized analytical responses. Structure matters as much as content.",
    "Quotations must be accurate and integrated smoothly. Practice this constantly.",
    "Multiple full practice papers needed. Exam technique develops through practice.",
    "Use IGCSE mark scheme actively. Understand what examiners reward.",
    "Revision materials should include detailed analysis of key scenes.",
    "Thematic connections matter. Practice linking texts through shared themes and approaches.",
    "Time management important. Practice allocating time across sections precisely.",
    "Mark using official mark scheme.",
    "Context important, but close reading takes priority. Analyze what's on the page.",
    "Practice writing clear, well-structured responses with strong topic sentences.",
    "Character analysis important. Understand major characters' roles and significance.",
    "Language and structural choices matter. Practice analyzing how these create reader effects.",
    "Focus on understanding fewer points deeply rather than many points superficially.",
    "Sleep and wellbeing matter. Don't sacrifice for revision time.",
    "Trust your revision on exam day and do your best.",
  ]
};

export const revisionPlanners: RevisionPlanner[] = [
  aqa12Week,
  aqa4Week,
  ocrwjec8Week,
  igcse8Week,
];
