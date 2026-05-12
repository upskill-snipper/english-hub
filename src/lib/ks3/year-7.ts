/**
 * Year 7 — Foundations.
 *
 * Set text in T1: *The Fox Girl and the White Gazelle* by Victoria
 * Williamson (contemporary novel — empathy, identity, refugee
 * experience). Weeks 2-13 carry the full lesson-by-lesson detail
 * the head of department provided.
 *
 * T2 and T3 ship with term-level overviews + week scaffolding; the
 * lesson-by-lesson detail is produced by the `lesson_planner` agent
 * over the next iterations.
 */

import type { Year, Lesson, LessonFocus } from './types'

// Compact lesson builder — Y7 T1 was authored before this helper landed
// and uses the full {focus, skillCodes, whatStudentsDo, task, successCriteria}
// form directly. T2 and T3 use this helper for readability.
type Quick = { focus: LessonFocus; skills: string[]; do: string; task: string; success: string }
const lesson = (q: Quick): Lesson => ({
  focus: q.focus,
  skillCodes: q.skills,
  whatStudentsDo: { en: q.do },
  task: { en: q.task },
  successCriteria: { en: q.success },
})

const Y7_T1: Year['terms'][number] = {
  number: 1,
  label: { en: 'Term 1 — Autumn', ar: 'الفصل الدراسي الأول — الخريف' },
  overview: {
    en: 'Year 7 opens with a contemporary dual-narrative novel — *The Fox Girl and the White Gazelle* by Victoria Williamson. Two girls (Caylin, a Glasgow native presented as tough and defensive; Reema, a Syrian refugee carrying memories of Aleppo and her brother Jamal) cross paths in a story that asks how first impressions form, how loneliness hides itself, and how empathy can be earned. The term anchors KS3 reading habits — echo reading, sentence stems, WHAT/HOW/WHY paragraphs — and writes our shared analytical vocabulary.',
    ar: 'تبدأ السنة السابعة برواية معاصرة ذات منظورين سرديين هما رواية *The Fox Girl and the White Gazelle* للكاتبة فيكتوريا ويليامسون. فتاتان تلتقي طريقاهما، إحداهما (كيلين) من غلاسكو تظهر متمرّدة ومنغلقة، والأخرى (ريما) لاجئة سورية تحمل ذكريات حلب وأخيها جمال. تطرح الرواية أسئلة عن كيفية تكوّن الانطباعات الأولى وكيف تختبئ الوحدة وكيف يُكتسب التعاطف. يُرسّخ هذا الفصل عادات القراءة في المرحلة الأساسية الثالثة.',
  },
  setText: {
    en: 'The Fox Girl and the White Gazelle by Victoria Williamson',
    ar: 'رواية The Fox Girl and the White Gazelle للكاتبة فيكتوريا ويليامسون',
  },
  vocabularyThemes: [
    {
      en: 'first impressions, hidden struggles, loneliness',
      ar: 'الانطباعات الأولى، المعاناة الخفية، الوحدة',
    },
    { en: 'identity, belonging, empathy, change', ar: 'الهوية، الانتماء، التعاطف، التغيير' },
  ],
  bigSkillJump: {
    en: 'Students arrive identifying surface meaning; by end of term they can independently write one analytical paragraph anchored in a self-selected quotation using WHAT / HOW / WHY and "This shows…".',
    ar: 'يصل الطلاب وهم يحدّدون المعنى السطحي فقط، وبنهاية الفصل يستطيعون كتابة فقرة تحليلية مستقلّة مرتكزة على اقتباس اختاروه بأنفسهم باستخدام صيغة "ماذا/كيف/لماذا" وعبارة "يُظهر هذا أنّ…".',
  },
  halfTerms: [
    {
      id: '1.1',
      label: { en: 'Term 1.1 — First half', ar: 'الفصل 1.1 — النصف الأول' },
      assessment: {
        en: 'Google-Form reading quiz (Chapters 1–5) + 20-minute mini analytical paragraph: "Who do we feel more sympathy for so far — Caylin or Reema?"',
        ar: 'اختبار قراءة عبر Google Form (الفصول 1–5) + فقرة تحليلية قصيرة لمدة 20 دقيقة: "مَن يستحقّ التعاطف أكثر حتى الآن — كيلين أم ريما؟"',
      },
      weeks: [
        {
          number: 2,
          pages: 'Chapter 1, pp. 1–4',
          keyVocabulary: [
            { en: 'inference' },
            { en: 'lonely' },
            { en: 'defensive' },
            { en: 'isolated' },
            { en: 'vulnerable' },
          ],
          contextNote: {
            en: 'Caylin is introduced — first impressions vs hidden struggle.',
            ar: 'تُقدَّم شخصية كيلين — الانطباع الأول مقابل المعاناة الخفية.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: "Teacher reads aloud pp. 1–4 using echo strategy. Students track Caylin's behaviour, speech and actions.",
              },
              task: {
                en: 'What is Caylin trying to do? How does she behave to others? Which words make her seem tough? What do we learn of her home life? What might this suggest?',
              },
              successCriteria: {
                en: 'Can recall key events from the opening. Can identify that Caylin is presented as tough on the outside but may have hidden struggles.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables analyse 4 quotations from pp. 1–4 using sentence stems; whole-class feedback; present one inference about Caylin.',
              },
              task: {
                en: 'Quote bank: "But not because I\'m her friend." / "Talk about an open invitation." / "I haven\'t had one of those special pink envelopes filled with glitter from anyone for years." / "I don\'t need friends." Stems: "I think Caylin is… because…" / "This suggests…" / "A word/phrase that stands out is…"',
              },
              successCriteria: {
                en: 'Can infer that Caylin is defensive, isolated and emotionally guarded. Can use one quotation to support an idea.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.2', '7R.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher introduces WHAT / HOW / WHY. Live-models one paragraph answering "How is Caylin presented in the opening?" using a direct quote from pp. 1–4. Students copy and label in different colours.',
              },
              task: {
                en: 'Modelled paragraph: WHAT = Caylin is presented as aggressive/tough; HOW = quotation/word choice/action; WHY = she pushes people away and seems used to surviving alone.',
              },
              successCriteria: {
                en: 'Understands paragraph structure. Can identify WHAT/HOW/WHY using a real example from the novel.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Students complete a scaffolded paragraph with gaps using a second quotation from the opening pages; WHAT/HOW/WHY already structured; then label which sentence is which.',
              },
              task: {
                en: 'Fill in the blanks using a quote (e.g. "I haven\'t had one of those special pink envelopes…"): Caylin is presented as… / This is shown through… / This shows…',
              },
              successCriteria: {
                en: 'Completes paragraph logically. Uses key terms correctly. Correctly identifies WHAT/HOW/WHY sections.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval (spell, define, use in sentence — 2 current week + 2 prior + 1 analytical word). Then students write their own paragraph choosing from 3 quotations from pp. 1–4; heavily scaffolded frame.',
              },
              task: {
                en: 'What do we learn about Caylin in the opening of the novel? Support level: HIGH. Sentence starters and quotes provided. Write one clear WHAT, use one quotation, explain using "This shows…".',
              },
              successCriteria: {
                en: 'Can independently produce one analytical paragraph rooted in the text.',
              },
            },
          ],
        },
        {
          number: 3,
          pages: 'Chapter 2, pp. 5–9',
          keyVocabulary: [
            { en: 'refugee' },
            { en: 'displaced' },
            { en: 'resilience' },
            { en: 'memory' },
            { en: 'determined' },
          ],
          contextNote: {
            en: 'Reema introduced through a race — physical struggle interlaced with memories of Aleppo and her brother Jamal.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Teacher reads pp. 5–9 with echo strategy. Teacher frames Reema running while remembering home; students track physical action vs emotional memory.',
              },
              task: {
                en: 'What is Reema doing? Which words show the race is difficult? Who does she think about? What memories surface? What does this suggest about what she has lost?',
              },
              successCriteria: {
                en: "Can recall key events from Reema's opening chapter. Can identify her as determined yet carrying memories of home.",
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables analyse 4 quotations using stems; whole-class feedback; present one inference about Reema.',
              },
              task: {
                en: 'Quotes: "My lungs are burning…" / "I suck the air down despite the pain." / "It was Jamal who first raced with me…" / "Without the courage to keep going…" Stems: "I think Reema is… because…" / "This suggests…" / "A word that stands out is…"',
              },
              successCriteria: {
                en: "Can explain what Reema's actions reveal. Can support an idea using evidence.",
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher revisits WHAT/HOW/WHY. Live-models "How is Reema presented in the opening of Chapter 2?" using one quote and thinking aloud the inference. Students copy and label.',
              },
              task: {
                en: 'Model uses: "I suck the air down despite the pain." WHAT = Reema is determined; HOW = quotation, physical struggle, word choice; WHY = keeps going even when painful or difficult.',
              },
              successCriteria: {
                en: 'Understands paragraph structure. Can identify WHAT/HOW/WHY in a real example.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Scaffolded fill-in-the-blanks paragraph using a second quote; highlight WHAT/HOW/WHY; peer assess against a checklist.',
              },
              task: {
                en: 'Using "Without the courage to keep going…": Reema is presented as… / This is shown when… / This shows…',
              },
              successCriteria: {
                en: 'Completes paragraph logically. Uses key terms correctly. Identifies WHAT/HOW/WHY.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval drill. Students write their own paragraph using a scaffolded frame; choose from a quote list rather than a fixed quote.',
              },
              task: {
                en: 'What do we learn about Reema in the opening of her chapter? Support level: MEDIUM–HIGH. Sentence starters provided; quotes list provided; no full paragraph model beside them.',
              },
              successCriteria: {
                en: 'Can independently build a simple analytical paragraph using action-based evidence.',
              },
            },
          ],
        },
        {
          number: 4,
          pages: 'Chapter 3, pp. 10–14',
          keyVocabulary: [
            { en: 'poverty' },
            { en: 'responsibility' },
            { en: 'ashamed' },
            { en: 'frustration' },
            { en: 'sympathy' },
          ],
          contextNote: {
            en: "Caylin's home life surfaces — money worries, sibling responsibility. Readers begin to feel sympathy.",
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Teacher reads pp. 10–14 with echo. Pauses to surface what problems Caylin faces and what this reveals.',
              },
              task: {
                en: "What do we learn about Caylin's home life? What responsibilities does she carry? How do others around her behave? Which moments suggest she is less confident than she appears?",
              },
              successCriteria: {
                en: "Can recall events from this section. Can identify that Caylin's life is harder than it first seemed.",
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: "Tables analyse 4 quotations focused on Caylin's difficulties; present one inference about why readers may begin to feel differently about her.",
              },
              task: {
                en: 'Stems: "When Caylin…, it shows…" / "This suggests…" / "The writer wants us to realise…"',
              },
              successCriteria: {
                en: 'Can infer that Caylin is struggling, not simply badly behaved. Can support with evidence.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher revisits WHAT/HOW/WHY. Live-models "How does the writer make readers feel sympathy for Caylin in Chapter 3?" using one quote and thinking aloud the inference.',
              },
              task: {
                en: "Modelled: WHAT = Caylin's life is difficult; HOW = quotation/action/home-life detail; WHY = readers begin to understand why she is angry.",
              },
              successCriteria: {
                en: 'Understands how writers shift our opinion of a character. Can identify WHAT/HOW/WHY.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Scaffolded fill-in-the-blanks paragraph; highlight WHAT/HOW/WHY; peer assess.',
              },
              task: { en: 'Caylin is presented as… / This is shown when… / This shows…' },
              successCriteria: {
                en: 'Completes paragraph logically; uses key terms; identifies WHAT/HOW/WHY.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval drill. Students write their own paragraph with reduced scaffolding.',
              },
              task: {
                en: 'How does Chapter 3 change our opinion of Caylin? Support: HIGH–MEDIUM. Sentence starters and quote bank; no full paragraph model alongside.',
              },
              successCriteria: {
                en: 'Can independently produce one analytical paragraph showing developing inference.',
              },
            },
          ],
        },
        {
          number: 5,
          pages: 'Chapter 4, pp. 15–19',
          keyVocabulary: [
            { en: 'grief' },
            { en: 'loss' },
            { en: 'identity' },
            { en: 'belonging' },
            { en: 'courage' },
          ],
          contextNote: {
            en: "Reema's memories surface — Jamal, Aleppo. Physical running, emotional return.",
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: "Teacher reads pp. 15–19 with echo. Pauses to explore Reema's thoughts, memories of Jamal, references to Aleppo.",
              },
              task: {
                en: 'What is Reema thinking about during the race? What memories of Jamal are mentioned? Which words show she is still emotionally affected? What does this suggest about what she has lost?',
              },
              successCriteria: {
                en: "Can identify how Reema's memories shape our understanding of her.",
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables discuss one quote linked to memory/Jamal/courage; record one group inference; whole-class feedback.',
              },
              task: {
                en: 'Stems: "This suggests Reema feels…" / "When Reema remembers…, it shows…" / "The writer presents her as…"',
              },
              successCriteria: {
                en: "Can infer emotional pressure from Reema's memories and thoughts.",
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models embedding a quotation INSIDE the WHAT/HOW/WHY paragraph rather than dropping it separately.',
              },
              task: {
                en: "Model paragraph: How do Reema's memories influence the way we see her?",
              },
              successCriteria: { en: 'Can see how quotations can be blended into writing.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Students complete a partially-scaffolded paragraph (scaffold reduced to sentence openings only); peer assess.',
              },
              task: {
                en: 'Sentence-opening task with embedded-quotation practice using a Jamal / memory quotation.',
              },
              successCriteria: { en: 'Can embed one quotation and explain it.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7W.9', '7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students choose from a quotation bank and write more independently.',
              },
              task: {
                en: "How do Reema's memories affect the way the reader sees her? Support: MEDIUM–LOW.",
              },
              successCriteria: { en: 'Paragraph shows clearer independence and evidence choice.' },
            },
          ],
        },
        {
          number: 6,
          pages: 'Chapter 5, pp. 21–26',
          keyVocabulary: [
            { en: 'judgement' },
            { en: 'stereotype' },
            { en: 'misunderstood' },
            { en: 'pressure' },
            { en: 'outsider' },
            { en: 'loneliness' },
          ],
          contextNote: { en: 'Caylin becomes more sympathetic — struggle, loneliness, pressure.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.1', '7R.2', '7R.4'],
              whatStudentsDo: {
                en: "Teacher reads pp. 21–26 with echo. Pauses to discuss Caylin's difficult home life, emotions and responsibilities; introduces thematic words struggle / loneliness / pressure.",
              },
              task: {
                en: 'What problems does Caylin face? Which moments make us feel sympathy? What words suggest she is under pressure?',
              },
              successCriteria: {
                en: 'Can identify that Caylin is becoming a more sympathetic character.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Students annotate quotations in groups with less teacher prompting; choose which quotations best show struggle or loneliness.',
              },
              task: {
                en: 'Stems: "This shows Caylin feels…" / "This could suggest…" / "The writer wants us to understand…"',
              },
              successCriteria: {
                en: "Can independently discuss Caylin's hidden difficulties using evidence.",
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models a paragraph beginning "The writer presents Caylin as…". Students notice this is more analytical than "Caylin is…".',
              },
              task: { en: 'Character-sympathy paragraph model.' },
              successCriteria: { en: 'Understands writer-focused analytical opening.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Reduced-scaffold paragraph with quotation bank only; students choose the best quotation.',
              },
              task: { en: 'Guided analytical writing.' },
              successCriteria: { en: 'Can make a quotation choice independently.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students write one independent paragraph with low scaffold.',
              },
              task: {
                en: 'How does the writer make readers feel sympathy for Caylin in this chapter?',
              },
              successCriteria: { en: 'Can independently write one secure analytical paragraph.' },
            },
          ],
        },
        {
          number: 7,
          pages: 'Chapters 1–5 (consolidation + T1.1 assessment)',
          keyVocabulary: [
            { en: 'isolation' },
            { en: 'belonging' },
            { en: 'outsider' },
            { en: 'excluded' },
            { en: 'connection' },
          ],
          contextNote: { en: 'Consolidation + Term 1.1 assessment week.' },
          homework: { en: 'Read Chapters 6–7 over October half-term break.' },
          lessons: [
            {
              focus: 'consolidation-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Teacher revisits key extracts. Retrieval activities recap major events. Explicitly revisits ideas: first impressions, hidden struggles, loneliness, loss, sympathy.',
              },
              task: {
                en: 'Retrieval carousel: Which chapter is this from? Which girl is this about? What does this quotation suggest? Did our opinion change?',
              },
              successCriteria: {
                en: 'Can confidently recall main events and quotations from both protagonists.',
              },
            },
            {
              focus: 'consolidation-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Groups sort quotations under headings: Caylin / Reema / Similar / Different; whole-class verbal feedback.',
              },
              task: {
                en: 'Quote sort + verbal justification. Stems: "This quote shows…" / "Both girls…" / "Unlike Caylin, Reema…"',
              },
              successCriteria: { en: 'Can verbally compare the two girls using evidence.' },
            },
            {
              focus: 'paragraph-rehearsal',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models one final comparison paragraph quickly, explicitly narrating planning. Students complete a guided plan for a similar question.',
              },
              task: {
                en: 'Model question: How are Caylin and Reema presented as different but similar?',
              },
              successCriteria: { en: 'Understands how to organise evidence before assessment.' },
            },
            {
              focus: 'assessment',
              skillCodes: ['7R.1', '7R.2', '7R.4', '7W.1', '7W.2'],
              whatStudentsDo: {
                en: 'Google-Form reading quiz (20–25 mins). Multiple choice, quote recognition, simple inference; auto-marked. Covers Chapters 1–5.',
              },
              task: { en: 'T1.1 Reading Quiz — auto-marked Google Form.' },
              successCriteria: { en: 'Reading understanding assessed independently.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students write one timed analytical paragraph (20 mins).',
              },
              task: {
                en: 'Assessment task: Who do we feel more sympathy for so far — Caylin or Reema?',
              },
              successCriteria: {
                en: 'Can independently select one quotation and explain it in one paragraph.',
              },
            },
          ],
        },
      ],
    },
    {
      id: '1.2',
      label: { en: 'Term 1.2 — Second half', ar: 'الفصل 1.2 — النصف الثاني' },
      assessment: {
        en: 'Term 1.2 formal assessment — analytical response: "How does Victoria Williamson show that understanding others can change the way we see them?"',
        ar: 'تقييم نهاية الفصل 1.2: مقالة تحليلية حول كيف تُظهر فيكتوريا ويليامسون أنّ فهم الآخرين يمكن أن يُغيّر نظرتنا إليهم.',
      },
      weeks: [
        {
          number: 8,
          pages: 'Chapters 8–9 + read Chapters 10–11 for homework',
          keyVocabulary: [
            { en: 'prejudice' },
            { en: 'assumption' },
            { en: 'stereotype' },
            { en: 'bias' },
            { en: 'discrimination' },
          ],
          contextNote: {
            en: 'Both girls experience prejudice and loneliness differently — first comparative writing.',
          },
          homework: { en: 'Read Chapters 10–11.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Teacher models first extract; pairs echo-read key paragraphs alternating readers. Track how characters experience prejudice, misunderstanding, isolation.',
              },
              task: {
                en: 'Where does Reema feel uncomfortable? What pressures does Caylin face? How are both girls isolated in different ways?',
              },
              successCriteria: {
                en: 'Can explain one way Caylin and Reema both experience loneliness using one quotation from each character.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.1', '7R.5', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Groups compare quotations from Chapters 6–9; create comparison notes on loneliness and belonging.',
              },
              task: {
                en: 'Stems: "Both girls experience…" / "This suggests…" / "A difference between them is…"',
              },
              successCriteria: {
                en: 'Can verbally compare Caylin and Reema using "Both girls…" and at least one quotation.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Teacher models a writer-focused WHAT/HOW/WHY paragraph exploring how Williamson presents unfair judgement through character language and reactions. Students identify comparison language and embedded evidence.',
              },
              task: { en: 'Model question: How are Caylin and Reema shown to feel lonely?' },
              successCriteria: { en: 'Understands how to compare two characters using evidence.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Partially-scaffolded comparative paragraph with sentence starters and quotation bank.',
              },
              task: { en: 'Guided comparative paragraph task.' },
              successCriteria: { en: 'Can compare both girls using quotations and explanation.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students independently write one comparative analytical paragraph (Support level: MEDIUM).',
              },
              task: { en: 'How are Caylin and Reema presented as lonely in Chapters 6–9?' },
              successCriteria: {
                en: 'Uses quotations from both characters and explains ideas clearly.',
              },
            },
          ],
        },
        {
          number: 9,
          pages: 'Chapters 12–13 + read Chapters 14–15 for homework',
          keyVocabulary: [
            { en: 'empathy' },
            { en: 'similarity' },
            { en: 'relationship' },
            { en: 'trust' },
            { en: 'understanding' },
          ],
          homework: { en: 'Read Chapters 14–15.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Paired reading + retrieval stops. Students alternate reading aloud; teacher pauses for retrieval and vocabulary; circulates and probes understanding.',
              },
              task: {
                en: 'Who is judged unfairly? What assumptions do characters make? What evidence suggests misunderstanding?',
              },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why it is unfair.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Students analyse quotations linked to judgement and stereotypes; group discussion + whole-class feedback.',
              },
              task: {
                en: 'Stems: "The writer presents…" / "This could suggest…" / "The character assumes…"',
              },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models analytical paragraph with writer-focused opening. Students identify how evidence is integrated into explanation.',
              },
              task: { en: 'Model question: How does the writer show unfair judgement?' },
              successCriteria: { en: 'Understands writer-focused analytical opening.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2'],
              whatStudentsDo: {
                en: 'Reduced-scaffold analytical paragraph using independently selected quotations.',
              },
              task: { en: 'Guided analytical writing.' },
              successCriteria: { en: 'Can independently select supporting evidence.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Independent paragraph with low scaffold.',
              },
              task: { en: 'How does the writer show that characters are judged unfairly?' },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why it is unfair.',
              },
            },
          ],
        },
        {
          number: 10,
          pages: 'Chapters 16–17 + read Chapters 18–19 for homework',
          keyVocabulary: [
            { en: 'symbolism' },
            { en: 'metaphor' },
            { en: 'represent' },
            { en: 'vulnerability' },
            { en: 'survival' },
          ],
          homework: { en: 'Read Chapters 18–19.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Choral reading + group discussion. Whole class reads extracts together; pause to discuss meaning and identify similarities between the girls. Teacher facilitates rather than leads.',
              },
              task: {
                en: 'What do the girls have in common? What moments show understanding developing?',
              },
              successCriteria: {
                en: 'Can explain one similarity between Caylin and Reema that was not clear earlier in the novel.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: { en: 'Compare quotations showing emotional similarities.' },
              task: {
                en: 'Stems: "Both characters…" / "This suggests they…" / "The writer begins to show…"',
              },
              successCriteria: {
                en: 'Can explain one similarity that emerges later in the novel.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models comparative paragraph with embedded quotations and comparative connectives.',
              },
              task: { en: 'Comparative WHAT/HOW/WHY paragraph.' },
              successCriteria: { en: 'Can embed quotations from two chapters.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2'],
              whatStudentsDo: { en: 'Guided comparative writing with minimal scaffold.' },
              task: { en: 'Comparative paragraph completion.' },
              successCriteria: {
                en: 'Can write one comparative paragraph using evidence from both characters and a comparative connective.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: { en: 'Independent writing. Support: LOW–MEDIUM.' },
              task: { en: 'How does the writer begin to connect Caylin and Reema?' },
              successCriteria: { en: 'Sustained comparison using evidence.' },
            },
          ],
        },
        {
          number: 11,
          pages: 'Chapters 20–22 + read Chapters 23–29 for homework',
          keyVocabulary: [
            { en: 'acceptance' },
            { en: 'friendship' },
            { en: 'loyalty' },
            { en: 'compassion' },
            { en: 'support' },
          ],
          homework: { en: 'Read Chapters 23–29.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.1', '7R.5'],
              whatStudentsDo: {
                en: 'Reciprocal reading. Students take roles (summariser, predictor, clarifier, questioner). Teacher models roles briefly before students lead discussion.',
              },
              task: {
                en: 'What does the fox represent? Why might the writer use animals symbolically?',
              },
              successCriteria: { en: 'Can explain what the fox symbolises using one quotation.' },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Discuss symbolism quotations in groups; feed back interpretations.',
              },
              task: { en: 'Stems: "The fox could represent…" / "This symbol suggests…"' },
              successCriteria: {
                en: 'Can use evidence to explain how the fox represents vulnerability or survival.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models paragraph analysing symbolism using embedded quotations.',
              },
              task: { en: 'Model question: What does the fox symbolise?' },
              successCriteria: { en: 'Understands basic symbolism analysis.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.2', '7W.4'],
              whatStudentsDo: { en: 'Guided symbolism paragraph with reduced scaffold.' },
              task: { en: 'Guided analytical response.' },
              successCriteria: { en: 'Can explain symbolic meaning clearly.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: { en: 'Vocabulary retrieval. Independent symbolism analysis.' },
              task: { en: 'How does the writer use the fox symbolically?' },
              successCriteria: { en: 'Explains symbolism using evidence.' },
            },
          ],
        },
        {
          number: 12,
          pages: 'Chapters 29–31 + read Chapters 32–33 for homework',
          keyVocabulary: [
            { en: 'identity' },
            { en: 'empathy' },
            { en: 'community' },
            { en: 'belonging' },
            { en: 'change' },
          ],
          homework: { en: 'Read Chapters 32–33.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Independent reading + student-led discussion. Students prepare ideas before leading table discussion. Teacher intervenes strategically.',
              },
              task: { en: 'Guided comprehension on belonging and empathy.' },
              successCriteria: {
                en: 'Can independently identify emotional turning points and support ideas with evidence.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Compare earlier and later attitudes between characters via discussion carousel activities.',
              },
              task: { en: 'Discussion carousel task.' },
              successCriteria: { en: 'Can explain how characters have changed across the novel.' },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models comparative paragraph showing character development across the novel.',
              },
              task: { en: 'Comparative analytical writing.' },
              successCriteria: { en: 'Can compare beginning vs later presentation.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: { en: 'Guided comparative response with minimal teacher support.' },
              task: { en: 'Character change paragraph.' },
              successCriteria: { en: 'Uses evidence from across chapters.' },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Independent evaluation of character development.',
              },
              task: { en: 'How have Caylin and Reema changed during the novel?' },
              successCriteria: { en: 'Sustained explanation with multiple quotations.' },
            },
          ],
        },
        {
          number: 13,
          pages: 'Chapters 34–36 + revision',
          keyVocabulary: [
            { en: 'resolution' },
            { en: 'transformation' },
            { en: 'perspective' },
            { en: 'understanding' },
            { en: 'reconciliation' },
          ],
          contextNote: {
            en: 'Final week — independent analytical reading + Term 1.2 formal assessment.',
          },
          homework: { en: 'Revision.' },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Independent annotation of final extracts. Teacher supports targeted students. Focus on resolution, symbolism, change.',
              },
              task: { en: 'Final retrieval + recap questions.' },
              successCriteria: {
                en: 'Can explain how the ending links to themes of belonging and understanding.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Whole-class thematic revision discussion led increasingly by students.',
              },
              task: { en: 'Quote sorting / theme matching.' },
              successCriteria: { en: 'Can link quotations to themes independently.' },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models assessment planning only; students plan largely independently.',
              },
              task: { en: 'Assessment preparation.' },
              successCriteria: { en: 'Can independently plan an analytical response.' },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: { en: 'Timed practice paragraph independently.' },
              task: { en: 'Timed paragraph task.' },
              successCriteria: {
                en: 'Can independently plan and write an analytical paragraph using evidence from across the novel.',
              },
            },
            {
              focus: 'assessment',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: { en: 'Formal Term 1.2 assessment.' },
              task: {
                en: 'How does Victoria Williamson show that understanding others can change the way we see them?',
              },
              successCriteria: {
                en: 'Produces an independent analytical response using evidence.',
              },
            },
          ],
        },
      ],
    },
  ],
}

// Term 2 + 3 ship with overview-only scaffolding for now. Lesson-by-lesson
// detail is produced by the lesson_planner agent over the coming weeks.
const Y7_T2: Year['terms'][number] = {
  number: 2,
  label: { en: 'Term 2 — Voices Across Time', ar: 'الفصل الدراسي الثاني — أصوات عبر الزمن' },
  overview: {
    en: 'Poetry anthology (HT1) + Pre-1914 short stories (HT2). Students meet older syntax in bite-sized form before tackling Shakespeare in T3. Poetry compresses meaning; Victorian short stories build stamina with archaic register. Both feed the National Curriculum requirement for pre-1914 reading.',
    ar: 'مختارات شعرية في النصف الأول + قصص قصيرة قبل عام 1914 في النصف الثاني. يلتقي الطلاب بالتراكيب اللغوية الأقدم بجرعات صغيرة قبل دراسة شكسبير في الفصل الثالث.',
  },
  setText: {
    en: 'Curated poetry anthology + "The Signalman" (Dickens), "The Red Room" (H.G. Wells), "The Necklace" (Maupassant, translation)',
    ar: 'مختارات شعرية + قصص ديكنز وويلز وموباسان',
  },
  vocabularyThemes: [
    { en: 'voice, identity, longing, displacement', ar: 'الصوت، الهوية، الشوق، التشرد' },
    {
      en: 'atmosphere, supernatural, foreboding, decay, Victorian social class',
      ar: 'الجو العام، الغيبيات، النذير، الانحلال، الطبقات الفيكتورية',
    },
  ],
  bigSkillJump: {
    en: "Students exit Term 2 able to decode an unseen pre-1914 extract, identify a writer's method, and write a coherent analytical paragraph linking method to effect.",
    ar: 'بنهاية الفصل، يستطيع الطلاب فكّ النصوص ما قبل 1914 وتحديد أساليب الكاتب وكتابة فقرة تحليلية متماسكة.',
  },
  halfTerms: [
    {
      id: '2.1',
      label: { en: 'Term 2.1 — Poetry anthology', ar: 'الفصل 2.1 — مختارات شعرية' },
      assessment: {
        en: 'Analytical essay comparing two anthology poems on a shared theme (e.g. outsiders, longing) — 45 minutes.',
      },
      weeks: [
        {
          number: 2,
          pages: 'Half-caste — John Agard',
          keyVocabulary: [
            { en: 'dialect' },
            { en: 'identity' },
            { en: 'phonetic' },
            { en: 'challenge' },
            { en: 'voice' },
          ],
          contextNote: {
            en: 'Agard writes in Guyanese Creole to confront the term "half-caste". The poem questions why mixed identity is treated as incomplete.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read poem aloud twice; gloss "half-caste", "Picasso", "tchaikovsky".',
              task: 'Underline three lines where Agard directly addresses the reader ("Explain yuself…").',
              success: 'Can quote one line where the speaker challenges the reader.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7SL.1', '7SL.3'],
              do: 'Discuss why Agard mixes Creole and standard English; teacher models "The dialect shows…".',
              task: 'Pair-talk: how does the missing punctuation change the pace?',
              success: 'Names one effect of the Creole voice.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Live-model a WHAT/HOW/WHY paragraph using a Creole quote.',
              task: 'Copy modelled paragraph; label WHAT/HOW/WHY.',
              success: 'Understands the analytical paragraph shape for poetry.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5', '7W.1'],
              do: 'Scaffolded paragraph using "yu mean when light an shadow / mix in de sky".',
              task: 'Fill-in-the-blanks paragraph using "This shows…".',
              success: 'Inference goes beyond literal meaning.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.3', '7W.1', '7W.4', '7W.9'],
              do: 'Independent paragraph with reduced scaffold.',
              task: 'How does Agard challenge the reader?',
              success: 'One paragraph with embedded quote + "This shows…" inference.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Refugee Blues — W. H. Auden',
          keyVocabulary: [
            { en: 'refrain' },
            { en: 'displacement' },
            { en: 'persecution' },
            { en: 'stanza' },
            { en: 'lament' },
          ],
          contextNote: {
            en: "Auden's 1939 ballad for Jewish refugees fleeing Nazi Germany. The blues form gives the poem a slow, sorrowful rhythm.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read all 12 stanzas; note the "my dear" refrain.',
              task: 'List three places refugees are rejected (consul, committee, public meeting).',
              success: 'Can list three rejections with line references.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7SL.2'],
              do: 'Discuss the blues form: three-line stanzas, repeated phrase, sad mood.',
              task: 'Pair-share: what effect does "my dear" repeated 12 times have?',
              success: 'Explains one effect of the refrain to a partner.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.2', '7W.3'],
              do: "Model varied sentences: simple + compound + complex about the poem's mood.",
              task: "Write three sentences of different lengths about the poem's mood.",
              success: 'Three sentences with full stops, capitals, varied length.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5'],
              do: 'Model inference on "Saw a door opened and a cat let in: / But they weren\'t German Jews, my dear".',
              task: 'Use "This shows…" to explain the comparison of refugees and the cat.',
              success: "Inference connects the cat image to the refugees' treatment.",
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan a paragraph using a quotation bank from the lesson.',
              task: 'How does Auden present rejection?',
              success: 'Paragraph names a feature (refrain/contrast), quotes, explains.',
            }),
          ],
        },
        {
          number: 4,
          pages: 'The Highwayman — Alfred Noyes',
          keyVocabulary: [
            { en: 'narrative' },
            { en: 'imagery' },
            { en: 'metaphor' },
            { en: 'rhythm' },
            { en: 'tragedy' },
          ],
          contextNote: {
            en: 'A 1906 narrative ballad set on a moonlit moor. Bess sacrifices herself to warn the highwayman of the redcoats waiting in ambush.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read Part 1; track the story like a film: who, where, when.',
              task: 'Select three quotations that build the moonlit setting ("ghostly galleon", "ribbon of moonlight").',
              success: 'Can quote three setting details accurately.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.5'],
              do: 'Read Part 2; model the extended metaphor of moon as "ghostly galleon".',
              task: 'Discuss why Noyes uses ship imagery on land.',
              success: 'Explains one effect of the moon-as-ship image.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.5'],
              do: 'Model how to "zoom in" on a single word (e.g. "torrent" in "torrent of darkness").',
              task: 'Zoom in on one word: meaning, feeling, picture.',
              success: 'Gives meaning, feeling and picture for one word.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5'],
              do: 'Model analysis of Bess\'s death: "her musket shattered the moonlight".',
              task: "Write a paragraph on how Noyes makes Bess's death dramatic.",
              success: 'Paragraph zooms in on at least one word.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Recap zoom-in technique.',
              task: 'How does Noyes build a tragic mood?',
              success: 'Two paragraphs, two quotations, one zoom-in each.',
            }),
          ],
        },
        {
          number: 5,
          pages: 'My Last Duchess — Robert Browning (extract)',
          keyVocabulary: [
            { en: 'monologue' },
            { en: 'duke' },
            { en: 'jealousy' },
            { en: 'control' },
            { en: 'speaker' },
          ],
          contextNote: {
            en: 'A dramatic monologue set in Renaissance Italy. The Duke shows a visitor a painting of his late wife and reveals — without meaning to — that he had her killed.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.4'],
              do: 'Read lines 1-24; gloss "Frà Pandolf", "countenance".',
              task: 'Answer five literal questions: who speaks, to whom, about whom, when, where.',
              success: 'Identifies speaker, listener, subject.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Read "I gave commands; / Then all smiles stopped together". Model the implied meaning.',
              task: 'Pair-talk: what does the Duke mean? Use "This suggests…".',
              success: "Voices an inference about the Duke's commands.",
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model a paragraph on jealousy using "She had / A heart… too soon made glad".',
              task: 'Annotate teacher model: highlight point, quotation, explanation.',
              success: 'Labels the three parts of a PEE paragraph.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.5', '7W.1'],
              do: 'Model how the Duke\'s power shows in "Notice Neptune… / Taming a sea-horse".',
              task: 'Write a paragraph on how Browning presents the Duke as controlling.',
              success: 'Paragraph names a feature and explains character.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan: one paragraph on jealousy, one on power.',
              task: 'How does Browning present the Duke?',
              success: 'Both paragraphs use quotations and clear explanations.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Caged Bird — Maya Angelou',
          keyVocabulary: [
            { en: 'symbolism' },
            { en: 'contrast' },
            { en: 'freedom' },
            { en: 'oppression' },
            { en: 'extended metaphor' },
          ],
          contextNote: {
            en: 'Angelou contrasts a free bird and a caged bird as an extended metaphor for freedom and racial oppression in 20th-century America.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.3'],
              do: 'Read poem; mark stanzas as "free bird" or "caged bird".',
              task: 'Make a two-column table: three quotations for each bird.',
              success: 'Table has six accurate quotations.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.5'],
              do: 'Define "extended metaphor"; discuss what each bird represents.',
              task: 'Pair-talk: why does Angelou repeat the caged bird stanza?',
              success: 'Explains one reason for the repetition.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.9'],
              do: 'Model contrastive connectives: "whereas", "in contrast", "however".',
              task: 'Write three contrast sentences comparing the two birds.',
              success: 'Three sentences each use a different contrastive connective.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.5', '7W.1'],
              do: 'Model a paragraph on the caged bird using "his wings are clipped and his feet are tied".',
              task: 'Write a PEE paragraph on how Angelou presents the caged bird.',
              success: 'Paragraph zooms in on "clipped" or "tied".',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: 'Plan a comparative paragraph: free bird vs caged bird.',
              task: 'Write one comparative paragraph using "whereas" or "however".',
              success: 'Paragraph quotes both birds and uses a contrast connective.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'The Listeners — Walter de la Mare + HT1 assessment',
          keyVocabulary: [
            { en: 'atmosphere' },
            { en: 'mystery' },
            { en: 'phantom' },
            { en: 'silence' },
            { en: 'compare' },
          ],
          contextNote: {
            en: 'Assessment week. A 1912 narrative poem of unexplained mystery. Pairs naturally with The Highwayman for the comparative assessment.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read aloud; identify how de la Mare builds an eerie atmosphere.',
              task: 'List four quotations that create mystery ("moonlit door", "phantom listeners").',
              success: 'Quotes four atmosphere-building details.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Compare this poem to The Highwayman: both moonlit, both mysterious.',
              task: 'Pair-talk: which poem feels more frightening, and why?',
              success: 'Shares a comparative point with a quotation.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7R.6', '7W.1'],
              do: 'Model comparative sentence stems: "Both poems…", "However, de la Mare…", "Unlike Noyes…".',
              task: 'Write three comparative sentences using the stems.',
              success: 'Each sentence makes a clear comparison.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.6', '7W.4'],
              do: 'Model a 45-minute comparative paragraph: "Both poets use moonlight to create mood".',
              task: 'Draft one comparative paragraph on mood in two anthology poems.',
              success: 'Paragraph uses one quotation from each poem.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.3', '7R.6', '7W.1', '7W.4', '7W.9'],
              do: 'HT1 assessment: 45-minute comparative paragraph under timed conditions.',
              task: 'How do two poets create atmosphere?',
              success: 'Paragraph quotes both poems and compares effects.',
            }),
          ],
        },
      ],
    },
    {
      id: '2.2',
      label: { en: 'Term 2.2 — Pre-1914 short stories', ar: 'الفصل 2.2 — قصص قصيرة قبل 1914' },
      assessment: {
        en: 'Analytical response on one pre-1914 short story — "How does Dickens/Wells build tension in [extract]?" — 60 minutes.',
      },
      weeks: [
        {
          number: 8,
          pages: 'The Signalman — Charles Dickens (opening)',
          keyVocabulary: [
            { en: 'gothic' },
            { en: 'foreboding' },
            { en: 'isolation' },
            { en: 'spectre' },
            { en: 'cutting' },
          ],
          contextNote: {
            en: 'Dickens (1866) wrote this after surviving the Staplehurst rail crash. The narrator visits a lonely signalman haunted by a warning ghost.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the opening to "Halloa! Below there!". Gloss "cutting", "saturnine".',
              task: 'Select three quotations describing the setting as gloomy.',
              success: 'Quotes three accurate setting details.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.4'],
              do: 'Discuss "depressing and forbidding air"; introduce the gothic genre.',
              task: 'Pair-talk: list three features that make this setting feel gothic.',
              success: 'Names three gothic features verbally.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model PEE on the setting: point + "great dungeon" + explanation.',
              task: "Write one PEE paragraph on Dickens's description of the cutting.",
              success: 'Paragraph quotes one image and explains its effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: "Model a structural feature: the narrator's slow descent into the cutting.",
              task: 'Annotate the descent paragraph; label two structural choices.',
              success: 'Labels two structural choices accurately.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan a paragraph on the opening atmosphere.',
              task: 'How does Dickens make the opening feel threatening?',
              success: 'Two paragraphs use quotations and explain effects.',
            }),
          ],
        },
        {
          number: 9,
          pages: 'The Signalman — middle and ending',
          keyVocabulary: [
            { en: 'tension' },
            { en: 'supernatural' },
            { en: 'omen' },
            { en: 'climax' },
            { en: 'narrator' },
          ],
          contextNote: {
            en: 'Three visitations from a spectre, each before a disaster. Dickens leaves the cause of the final death ambiguous.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the three visitations; track the order.',
              task: 'List the three warnings and the events that follow each.',
              success: 'Sequences all three warnings correctly.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Discuss the final twist: did the driver shout the same words as the ghost?',
              task: "Pair-talk: is the ghost real, or in the signalman's mind?",
              success: 'Gives a reasoned answer with one quotation.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.3', '7W.4'],
              do: 'Model how Dickens builds tension through short sentences ("For God\'s sake clear the way!").',
              task: 'Write four sentences that build tension, including one short, sharp sentence.',
              success: 'Sentences vary in length; one is deliberately short.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how Dickens uses repetition ("Halloa! Below there!") to build tension.',
              task: 'Write a PEE paragraph on tension in one of the three warnings.',
              success: 'Paragraph names technique and explains.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan two paragraphs: one on language, one on structure.',
              task: 'How does Dickens build tension at the ending?',
              success: 'Two paragraphs cover one language and one structural feature.',
            }),
          ],
        },
        {
          number: 10,
          pages: 'The Red Room — H. G. Wells',
          keyVocabulary: [
            { en: 'fear' },
            { en: 'rationalism' },
            { en: 'first person' },
            { en: 'shadow' },
            { en: 'darkness' },
          ],
          contextNote: {
            en: 'Wells (1896) wrote a ghost story where the real horror is fear itself. A confident young man dares to spend the night in a haunted room.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the opening; identify the narrator\'s confident tone ("I can assure you").',
              task: "List three quotations showing the narrator's confidence.",
              success: 'Quotes three confident statements.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Compare the old custodians to the young narrator: who is more believable?',
              task: 'Pair-talk: how does Wells make us trust the narrator at first?',
              success: 'Gives one reason we trust the narrator.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.3', '7W.9'],
              do: 'Model how sentence length shortens as fear grows ("My candle flared… It was gone").',
              task: 'Rewrite a short passage making sentences gradually shorter.',
              success: 'Sentences clearly shorten across the passage.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how Wells personifies the shadows.',
              task: "Write a PEE paragraph on Wells's presentation of fear.",
              success: 'Paragraph identifies a language feature and explains.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: "Plan a paragraph on the narrator's change from confident to fearful.",
              task: 'How does Wells present fear in The Red Room?',
              success: 'Two paragraphs track the change in the narrator.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'The Necklace — Guy de Maupassant',
          keyVocabulary: [
            { en: 'irony' },
            { en: 'twist' },
            { en: 'pride' },
            { en: 'social class' },
            { en: 'protagonist' },
          ],
          contextNote: {
            en: 'Maupassant (1884): Mathilde borrows a necklace, loses it, and works ten years to replace it — only to learn the original was fake.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.4'],
              do: 'Read the story in two halves; summarise the plot in six sentences.',
              task: 'Write a six-sentence plot summary.',
              success: 'Summary covers borrowing, loss, debt and twist.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Define dramatic irony; discuss the final reveal: "my necklace was paste".',
              task: "Pair-talk: who is to blame for Mathilde's ten lost years?",
              success: 'Reasoned answer naming Mathilde or society.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.9'],
              do: 'Model Maupassant\'s lists of longing ("the silent antechambers… the perfumed little rooms").',
              task: "Write a list of three describing a character's longing.",
              success: 'List of three is grammatically parallel.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how the twist makes us rethink Mathilde.',
              task: "Write a PEE paragraph on Maupassant's use of irony.",
              success: 'Paragraph quotes the reveal and explains the irony.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: "Plan two paragraphs: one on Mathilde's pride, one on the twist.",
              task: 'How does Maupassant present Mathilde?',
              success: 'Two paragraphs use quotations and track her change.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Comparison: tension in three pre-1914 stories',
          keyVocabulary: [
            { en: 'compare' },
            { en: 'method' },
            { en: 'effect' },
            { en: 'similarity' },
            { en: 'difference' },
          ],
          contextNote: {
            en: 'All three writers build tension differently: Dickens through setting/repetition, Wells through sentence length, Maupassant through dramatic irony.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.6', '7R.3'],
              do: 'Recap one tension quotation from each story.',
              task: 'Fill a grid: writer / quotation / method / effect for all three stories.',
              success: 'Grid has three accurate quotations and three named methods.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Discuss which writer builds tension best, and why.',
              task: 'Pair-talk: rank the three stories for tension with reasons.',
              success: 'Ranking uses one quotation as evidence.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7R.6', '7W.1'],
              do: 'Model comparative paragraph: "Both Dickens and Wells… However, Dickens uses…".',
              task: 'Write one comparative paragraph using the modelled stems.',
              success: 'Paragraph quotes two stories and uses a contrast connective.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.6', '7W.4'],
              do: 'Model a second paragraph comparing Dickens and Maupassant on endings.',
              task: 'Write a comparative paragraph on the endings of two stories.',
              success: 'Paragraph quotes both endings and names one similarity or difference.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: 'Plan a full comparative essay on tension across three stories.',
              task: 'Draft three comparative paragraphs: one per story pairing.',
              success: 'Three paragraphs, each with two quotations and a clear comparison.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'The Signalman revisited — HT2 assessment',
          keyVocabulary: [
            { en: 'analyse' },
            { en: 'tension' },
            { en: 'evidence' },
            { en: 'method' },
            { en: 'response' },
          ],
          contextNote: {
            en: 'Assessment week: 60-minute analytical response on how Dickens builds tension in The Signalman.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['7R.1', '7R.3'],
              do: 'Re-read three key Signalman passages: descent, second warning, final scene.',
              task: 'Build a quotation bank of six tension-building details.',
              success: 'Six quotations covering setting, language and structure.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['7R.5', '7SL.1'],
              do: "Discuss Dickens's three main tension methods: setting, repetition, ambiguity.",
              task: 'Pair-talk: match each quotation to one of the three methods.',
              success: 'Matches all six quotations to a method.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['7W.1', '7W.4'],
              do: 'Model an introduction: "Dickens builds tension through setting, language and structure".',
              task: 'Write an introduction and one body paragraph on setting.',
              success: 'Introduction names three methods; paragraph quotes the cutting.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.1', '7W.4'],
              do: 'Model a body paragraph on language ("For God\'s sake clear the way!").',
              task: "Write a second body paragraph on Dickens's use of language.",
              success: 'Paragraph quotes a line and names a language feature.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              do: 'HT2 assessment: 60-minute analytical response under timed conditions.',
              task: 'How does Dickens build tension in The Signalman?',
              success:
                'Three paragraphs each quote and explain one method (setting, language, structure).',
            }),
          ],
        },
      ],
    },
  ],
}

const Y7_T3: Year['terms'][number] = {
  number: 3,
  label: { en: 'Term 3 — Stories That Endure', ar: 'الفصل الدراسي الثالث — قصص باقية' },
  overview: {
    en: "Shakespeare (A Midsummer Night's Dream — Acts 1.1, 2.1, 3.1, 5.1) in HT1 + extended narrative writing in HT2. Students study three forms (novel, poem/story, play) then USE the storytelling craft they have studied to make their own narrative.",
    ar: 'شكسبير (حلم ليلة منتصف الصيف) في النصف الأول + الكتابة السردية الموسّعة في النصف الثاني.',
  },
  setText: {
    en: "A Midsummer Night's Dream (Shakespeare) — key extracts; model narrative openings",
    ar: 'حلم ليلة منتصف الصيف لشكسبير + نماذج بداية سردية',
  },
  vocabularyThemes: [
    {
      en: 'love, magic, transformation, mischief, hierarchy',
      ar: 'الحب، السحر، التحوّل، الشيطنة، التسلسل الهرمي',
    },
    {
      en: 'protagonist, structure, foreshadowing, pacing, voice',
      ar: 'الشخصية الرئيسية، البنية، التمهيد، الإيقاع، الصوت',
    },
  ],
  bigSkillJump: {
    en: 'Students exit Year 7 reading Shakespearean English aloud with meaning AND producing a structured, redrafted extended narrative.',
    ar: 'يخرج طلاب السنة السابعة قادرين على قراءة شكسبير بمعنى وإنتاج سرد موسّع مُنقّح.',
  },
  halfTerms: [
    {
      id: '3.1',
      label: { en: 'Term 3.1 — Shakespeare', ar: 'الفصل 3.1 — شكسبير' },
      assessment: { en: 'Shakespeare performance + 30-minute analytical paragraph on a scene.' },
      weeks: [
        {
          number: 2,
          pages: 'Act 1.1 — Court of Theseus',
          keyVocabulary: [
            { en: 'court' },
            { en: 'decree' },
            { en: 'forbidden' },
            { en: 'defiance' },
            { en: 'obedience' },
          ],
          contextNote: {
            en: "Athens court. Egeus drags Hermia before Theseus because she refuses Demetrius. Athenian law gives the father power over his daughter's match.",
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read Theseus\'s opening + Egeus\'s complaint aloud. Annotate "Full of vexation come I, with complaint / Against my child".',
              task: 'Highlight every word in 1.1 lines 1–45 that signals law, ownership or hierarchy.',
              success: 'Lists 6+ legal/hierarchical words.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7SL.1', '7SL.2'],
              do: 'Hot-seat Hermia. Model: "I would my father look\'d but with my eyes" — what does she risk?',
              task: "Pair-debate: is Hermia's defiance brave or foolish?",
              success: 'Contributes a point supported by a short quotation.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "Shakespeare presents the Athenian court as ___ through ___, which suggests ___".',
              task: 'Write one paragraph on how Theseus\'s "die the death, or to abjure / For ever the society of men" establishes authority.',
              success: 'Paragraph has claim, embedded quote, one inference about power.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.1', '7W.3'],
              do: 'Zoom in on "decree" — connotations of permanence, law, public record.',
              task: 'Write a paragraph zooming in on "obedience" or "decree".',
              success: 'Explores at least two layers of meaning.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap paragraph structure.',
              task: "How does Shakespeare present Hermia's predicament in Act 1.1?",
              success: 'Clear argument, two embedded quotations, three Tier-2 words.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Act 2.1 — Fairy realm',
          keyVocabulary: [
            { en: 'enchantment' },
            { en: 'supernatural' },
            { en: 'mischief' },
            { en: 'jealousy' },
            { en: 'hierarchy' },
          ],
          contextNote: {
            en: 'The wood: Puck boasts of mischief; Oberon and Titania quarrel over a changeling boy. The supernatural quarrel disorders nature itself.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.5'],
              do: 'Read Titania\'s "forgeries of jealousy" speech. Map the disorders (winds, fogs, rivers, corn, sheep).',
              task: 'Underline every image of disorder in lines 81–117.',
              success: 'Lists 5+ disorder images linked to the fairy quarrel.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7R.6', '7SL.1'],
              do: "Compare Theseus's court (Week 2) with the fairy realm. In court, law silences women; in the wood, Titania matches Oberon line for line.",
              task: 'In threes, list three differences between court and wood.',
              success:
                'Identifies differences in power, language, setting; supports with quotation.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: "Model: \"Shakespeare presents Titania as defiant because she refuses Oberon's demand: 'Set your heart at rest: / The fairy land buys not the child of me.'\"",
              task: 'Write a paragraph on how Shakespeare presents the supernatural in 2.1.',
              success:
                'Paragraph names a method (imagery, blank verse, repetition), embeds a quote, infers an effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.2', '7W.3'],
              do: 'Demonstrate connecting two quotations with "Furthermore".',
              task: "Add a second paragraph to yesterday's work on Oberon's plotting.",
              success: 'Pupils link two paragraphs cohesively; one Tier-2 word used.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap "whereas" and "by contrast" for comparison.',
              task: 'How does Shakespeare present the quarrel between Oberon and Titania?',
              success: 'Comparative language, two quotations, explains effect on natural world.',
            }),
          ],
        },
        {
          number: 4,
          pages: "Act 3.1 — Bottom's transformation",
          keyVocabulary: [
            { en: 'transformation' },
            { en: 'absurdity' },
            { en: 'dramatic-irony' },
            { en: 'comedy' },
            { en: 'oblivious' },
          ],
          contextNote: {
            en: 'The Mechanicals rehearse "Pyramus and Thisbe". Puck conjures an ass\'s head onto Bottom; Titania (drugged) falls in love. Prose vs verse marks the comic gulf.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read Titania\'s "What angel wakes me from my flowery bed?" alongside Bottom\'s "let them play it in blank verse".',
              task: 'Mark the prose/verse switch on the scene.',
              success:
                'Identifies the switch and explains it signals status / comedy / supernatural.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7SL.2', '7SL.3'],
              do: "Define dramatic irony: audience knows Bottom has an ass's head; Bottom does not.",
              task: 'Perform a 90-second extract in pairs. Discuss what makes it funny.',
              success: 'Names dramatic irony, absurdity or transformation as a source of comedy.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: "Model: \"Shakespeare creates comedy through dramatic irony when Titania declares 'I love thee' to a man wearing an ass's head.\"",
              task: 'Write a paragraph on how Shakespeare creates comedy in Act 3.1.',
              success: 'Uses "dramatic irony", embeds a quote, infers audience effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: 'Analyse Bottom\'s obliviousness: "I see their knavery: this is to make an ass of me".',
              task: 'Write a paragraph zooming in on "oblivious" or "absurdity".',
              success: "Explains how Bottom's lack of awareness deepens comedy.",
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap: name method, embed quote, explain effect.',
              task: 'How does Shakespeare make Act 3.1 entertaining?',
              success:
                'Two distinct methods (e.g. dramatic irony, prose/verse contrast), each with quotation.',
            }),
          ],
        },
        {
          number: 5,
          pages: 'Act 5.1 — Play-within-a-play',
          keyVocabulary: [
            { en: 'meta-theatre' },
            { en: 'framing' },
            { en: 'audience' },
            { en: 'performance' },
            { en: 'resolution' },
          ],
          contextNote: {
            en: 'Lovers reconciled and married. Mechanicals perform Pyramus and Thisbe at court. We watch them watching a play — meta-theatre. Puck closes by breaking the frame.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.5'],
              do: 'Read Theseus: "The best in this kind are but shadows; and the worst are no worse, if imagination amend them." Gloss "shadows" = actors.',
              task: 'Label nested layers of audience: real / court / Mechanicals / characters.',
              success: 'Identifies three nested levels; links to meta-theatre.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7R.6', '7SL.1'],
              do: 'Why does Shakespeare end with Puck\'s speech to us? "If we shadows have offended, / Think but this…"',
              task: 'Pair-discuss: does the play offer real resolution, or does Puck unsettle it?',
              success: 'Articulates a view on resolution with reference to Puck or Theseus.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "Shakespeare frames the Mechanicals\' play within the court\'s wedding, drawing attention to performance itself."',
              task: 'Write a paragraph on the play-within-a-play as a comment on theatre.',
              success: 'Uses "framing" or "meta-theatre", embeds a quote, explains an effect.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: 'Analyse Puck\'s direct address "Give me your hands, if we be friends."',
              task: "Write a paragraph on Puck's closing speech and its effect on the audience.",
              success: 'Explains how direct address creates intimacy or reflection on illusion.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap: resolution = marriages, harmony, return from disorder.',
              task: 'How does Shakespeare resolve the play in Act 5.1?',
              success: "Addresses both marriages and Puck's unsettling final speech.",
            }),
          ],
        },
        {
          number: 6,
          pages: 'Cross-act comparison: love and power',
          keyVocabulary: [
            { en: 'parallel' },
            { en: 'motif' },
            { en: 'comic-resolution' },
            { en: 'harmony' },
            { en: 'contrast' },
          ],
          contextNote: {
            en: 'Court (1.1) imposes order through law; the wood (2.1, 3.1) suspends it; final court (5.1) re-imposes a transformed order. Love and power are the twin motifs.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['7R.5', '7R.6'],
              do: 'Build a comparison grid: Theseus/Hippolyta, Oberon/Titania, four lovers, Bottom/Titania. Love and power columns.',
              task: 'Complete the grid in books with one quotation per pairing.',
              success: 'Grid contains four pairings with at least one quotation each.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['7R.6', '7SL.1', '7SL.3'],
              do: 'Model: "Whereas the court silences Hermia, the wood gives Titania a voice. Both, however, end in marriage."',
              task: 'Class debate: does the play celebrate love or expose it as absurd?',
              success: 'Uses "whereas" or "by contrast"; references at least two scenes.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "In Act 1.1, Theseus warns Hermia she must \'die the death\'; by Act 5.1, the same Duke presides over her marriage to Lysander."',
              task: 'Write a comparative paragraph on authority across the play.',
              success:
                'Compares two scenes, embeds two quotations, identifies a shift or parallel.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: "Use \"motif\" — transformation runs from Hermia's defiance to Bottom's ass-head to the lovers' shifting affections.",
              task: 'Write a paragraph tracing the motif of transformation across two scenes.',
              success: 'Names the motif, gives two examples, explains how it builds.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.6', '7W.1', '7W.4', '7W.9'],
              do: 'Plan a 30-minute essay on the board.',
              task: "How does Shakespeare present love and power across A Midsummer Night's Dream?",
              success:
                'References three of four scenes, three embedded quotations, clear conclusion.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'Assessment week — performance + analytical paragraph',
          keyVocabulary: [
            { en: 'rehearsal' },
            { en: 'projection' },
            { en: 'intonation' },
            { en: 'analytical' },
            { en: 'evidence' },
          ],
          contextNote: {
            en: 'Assessment week. Group Shakespeare performance + 30-minute analytical paragraph on a scene of choice.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Issue extract choices (12–16 lines from 1.1, 2.1, 3.1, 5.1). Model annotation: stresses, pauses, tone shifts.',
              task: 'Annotate your extract for performance: stresses, pauses, tone.',
              success: 'Extract fully annotated with at least six marks.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7SL.1', '7SL.2', '7SL.3'],
              do: 'Rehearsal workshop. Demonstrate projection, eye-contact, consonants on "Out of this wood do not desire to go."',
              task: 'Rehearse in groups of 3–4; peer-feedback on projection and intonation.',
              success: 'Each pupil acts on at least one piece of feedback.',
            }),
            lesson({
              focus: 'application',
              skills: ['7SL.1', '7SL.2', '7SL.3'],
              do: 'Remind of success criteria: clear voice, sustained character, accurate text.',
              task: 'Perform extracts to the class. Audience completes feedback slips.',
              success: 'Performance is audible, sustained, textually accurate.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['7W.1', '7W.4'],
              do: 'Plan the 30-minute paragraph: choose scene, pick two quotations, draft topic sentence.',
              task: 'Plan an analytical paragraph on a chosen scene.',
              success: 'Plan has clear claim, two quotations, one-paragraph structure.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Brief recap of success criteria. No further modelling.',
              task: '30-minute analytical paragraph on a chosen scene from the play.',
              success:
                'Precise claim, two accurate embedded quotations, method-and-effect analysis, Tier-2 vocab.',
            }),
          ],
        },
      ],
    },
    {
      id: '3.2',
      label: {
        en: 'Term 3.2 — Extended narrative writing',
        ar: 'الفصل 3.2 — الكتابة السردية الموسّعة',
      },
      assessment: {
        en: 'Extended narrative writing (1,000–1,500 words) drafted, peer-reviewed, redrafted — final piece assessed.',
      },
      weeks: [],
    },
  ],
}

export const YEAR_7: Year = {
  number: 7,
  name: { en: 'Year 7 — Foundations', ar: 'السنة السابعة — الأسس' },
  overview: {
    en: 'Year 7 builds the foundations of KS3 English — explicit reading via teacher-led aloud + echo strategies, the WHAT/HOW/WHY analytical paragraph, sentence stems ("This shows…", "I think… because…"), and a steady move from heavy scaffolding to one independent analytical paragraph by end of term. The arc moves through a contemporary novel of empathy and identity (T1), poetry and pre-1914 short stories (T2), and Shakespeare + extended narrative writing (T3).',
    ar: 'تبني السنة السابعة أسس اللغة الإنجليزية في المرحلة الأساسية الثالثة من خلال القراءة الموجَّهة وفقرات "ماذا/كيف/لماذا" والانتقال التدريجي من الدعم المُكثّف إلى الكتابة المستقلّة.',
  },
  yearlyExpectations: {
    reading: [
      { en: '7R.1 — Identify language and structural features.' },
      { en: '7R.2 — Understand explicit and implicit meaning.' },
      { en: '7R.3 — Select relevant quotations.' },
      { en: '7R.4 — Make simple inferences.' },
      { en: '7R.5 — Comment on effects using "This shows…".' },
      { en: '7R.6 — Make connections between texts (themes, ideas, methods).' },
    ],
    writing: [
      { en: '7W.1 — Organise ideas into clear paragraphs.' },
      { en: '7W.2 — Use basic punctuation mostly accurately.' },
      { en: '7W.3 — Use simple and some varied sentence structures.' },
      { en: '7W.4 — Develop ideas with some detail.' },
      { en: '7W.5 — Write simple narratives with structure, description, voice.' },
      { en: '7W.6 — Write for different purposes (describe, narrate, explain).' },
    ],
    language: [
      { en: '7W.7 — Recognise differences between spoken and written language.' },
      { en: '7W.8 — Make simple edits to improve clarity, vocabulary and punctuation.' },
      { en: '7W.9 — Begin to adapt vocabulary and sentence structures for purpose and audience.' },
    ],
    speaking: [
      { en: '7SL.1 — Listen and respond appropriately.' },
      { en: '7SL.2 — Share ideas with some confidence.' },
      { en: '7SL.3 — Speak clearly in discussions.' },
    ],
  },
  rubric: [], // populated by curriculum.ts via filter on shared RUBRICS
  terms: [Y7_T1, Y7_T2, Y7_T3],
}
