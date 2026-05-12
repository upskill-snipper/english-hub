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
      weeks: [],
    },
    {
      id: '2.2',
      label: { en: 'Term 2.2 — Pre-1914 short stories', ar: 'الفصل 2.2 — قصص قصيرة قبل 1914' },
      assessment: {
        en: 'Analytical response on one pre-1914 short story — "How does Dickens/Wells build tension in [extract]?" — 60 minutes.',
      },
      weeks: [],
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
      weeks: [],
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
