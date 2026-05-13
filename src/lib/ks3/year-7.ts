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
type Quick = {
  focus: LessonFocus
  skills: string[]
  do: string
  task: string
  success: string
  doAr?: string
  taskAr?: string
  successAr?: string
}
const lesson = (q: Quick): Lesson => ({
  focus: q.focus,
  skillCodes: q.skills,
  whatStudentsDo: q.doAr ? { en: q.do, ar: q.doAr } : { en: q.do },
  task: q.taskAr ? { en: q.task, ar: q.taskAr } : { en: q.task },
  successCriteria: q.successAr ? { en: q.success, ar: q.successAr } : { en: q.success },
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
            { en: 'inference', ar: 'الاستنتاج' },
            { en: 'lonely', ar: 'وحيد' },
            { en: 'defensive', ar: 'متحفّظ / دفاعي' },
            { en: 'isolated', ar: 'منعزل' },
            { en: 'vulnerable', ar: 'هشّ / سريع التأثّر' },
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
                ar: 'يقرأ المعلّم الصفحات 1–4 بصوتٍ عالٍ بأسلوب الترديد (echo)، والطلاب يتتبّعون تصرّفات كيلين وكلامها وأفعالها.',
              },
              task: {
                en: 'What is Caylin trying to do? How does she behave to others? Which words make her seem tough? What do we learn of her home life? What might this suggest?',
                ar: 'ماذا تحاول كيلين أن تفعل؟ كيف تتعامل مع من حولها؟ ما الكلمات التي تُظهرها قويّة وصلبة؟ ماذا نعرف عن حياتها في البيت؟ ما الذي يُلمَح من ذلك؟',
              },
              successCriteria: {
                en: 'Can recall key events from the opening. Can identify that Caylin is presented as tough on the outside but may have hidden struggles.',
                ar: 'يستطيع الطالب استرجاع أهمّ أحداث الافتتاحية. ويستطيع أن يُحدّد أنّ كيلين تظهر صلبة من الخارج، لكنّها قد تُخفي معاناةً داخلية.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables analyse 4 quotations from pp. 1–4 using sentence stems; whole-class feedback; present one inference about Caylin.',
                ar: 'تُحلّل المجموعات على الطاولات أربعة اقتباسات من الصفحات 1–4 باستخدام صيغ بداية الجمل، ثم يتشارك الصفّ في النقاش، ويُقدّم كلّ فريق استنتاجاً واحداً عن كيلين.',
              },
              task: {
                en: 'Quote bank: "But not because I\'m her friend." / "Talk about an open invitation." / "I haven\'t had one of those special pink envelopes filled with glitter from anyone for years." / "I don\'t need friends." Stems: "I think Caylin is… because…" / "This suggests…" / "A word/phrase that stands out is…"',
                ar: 'بنك الاقتباسات: "But not because I\'m her friend." / "Talk about an open invitation." / "I haven\'t had one of those special pink envelopes filled with glitter from anyone for years." / "I don\'t need friends." بدايات الجمل: "أرى أنّ كيلين… لأنّ…" / "هذا يُلمِح إلى…" / "الكلمة أو العبارة اللافتة هي…"',
              },
              successCriteria: {
                en: 'Can infer that Caylin is defensive, isolated and emotionally guarded. Can use one quotation to support an idea.',
                ar: 'يستنتج الطالب أنّ كيلين دفاعية ومنعزلة ومتحفّظة عاطفياً، ويستخدم اقتباساً واحداً لدعم فكرته.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.2', '7R.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher introduces WHAT / HOW / WHY. Live-models one paragraph answering "How is Caylin presented in the opening?" using a direct quote from pp. 1–4. Students copy and label in different colours.',
                ar: 'يُقدِّم المعلّم صيغة "ماذا / كيف / لماذا" (WHAT / HOW / WHY)، ويكتب أمام الطلاب فقرة نموذجية تُجيب عن سؤال "كيف تُقدَّم كيلين في الافتتاحية؟" باستخدام اقتباس مباشر من الصفحات 1–4. ينسخ الطلاب الفقرة ويُلوّنون كلّ جزء بلون مختلف.',
              },
              task: {
                en: 'Modelled paragraph: WHAT = Caylin is presented as aggressive/tough; HOW = quotation/word choice/action; WHY = she pushes people away and seems used to surviving alone.',
                ar: 'الفقرة النموذجية: ماذا = تُقدَّم كيلين شخصيّةً عدوانيّة وصلبة. كيف = اقتباس / اختيار المفردات / فعل ملموس. لماذا = تُبعد الناس عنها وتبدو معتادة على الصمود بمفردها.',
              },
              successCriteria: {
                en: 'Understands paragraph structure. Can identify WHAT/HOW/WHY using a real example from the novel.',
                ar: 'يفهم الطالب بنية الفقرة، ويستطيع تحديد أجزاء "ماذا/كيف/لماذا" في مثال حقيقي من الرواية.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Students complete a scaffolded paragraph with gaps using a second quotation from the opening pages; WHAT/HOW/WHY already structured; then label which sentence is which.',
                ar: 'يُكمل الطلاب فقرة فيها فراغات معتمدةً على اقتباس آخر من صفحات الافتتاحية. يكون هيكل "ماذا/كيف/لماذا" جاهزاً، ثم يُحدّدون أيّ جملة تنتمي إلى أيّ قسم.',
              },
              task: {
                en: 'Fill in the blanks using a quote (e.g. "I haven\'t had one of those special pink envelopes…"): Caylin is presented as… / This is shown through… / This shows…',
                ar: 'املأ الفراغات مستعيناً باقتباس (مثل: "I haven\'t had one of those special pink envelopes…"): تُقدَّم كيلين شخصيّةً… / يظهر ذلك من خلال… / يُظهر هذا أنّ…',
              },
              successCriteria: {
                en: 'Completes paragraph logically. Uses key terms correctly. Correctly identifies WHAT/HOW/WHY sections.',
                ar: 'يُكمل الطالب الفقرة بشكلٍ منطقي، ويُوظّف المصطلحات الأساسية بدقّة، ويُحدّد أقسام "ماذا/كيف/لماذا" تحديداً صحيحاً.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval (spell, define, use in sentence — 2 current week + 2 prior + 1 analytical word). Then students write their own paragraph choosing from 3 quotations from pp. 1–4; heavily scaffolded frame.',
                ar: 'استرجاع المفردات (تهجئة، تعريف، توظيف في جملة — مفردتان من الأسبوع الحالي + مفردتان من أسبوعٍ سابق + مفردة تحليلية واحدة). بعد ذلك يكتب الطلاب فقرتهم الخاصة مختارين من بين ثلاثة اقتباسات من الصفحات 1–4 ضمن قالبٍ موجَّه بدعمٍ مرتفع.',
              },
              task: {
                en: 'What do we learn about Caylin in the opening of the novel? Support level: HIGH. Sentence starters and quotes provided. Write one clear WHAT, use one quotation, explain using "This shows…".',
                ar: 'ماذا نتعلّم عن كيلين في افتتاحية الرواية؟ مستوى الدعم: مرتفع. تتوفّر بدايات جمل ومجموعة اقتباسات. اكتب جزء "ماذا" واضحاً، ووظّف اقتباساً واحداً، وفسّر باستخدام عبارة "يُظهر هذا أنّ…".',
              },
              successCriteria: {
                en: 'Can independently produce one analytical paragraph rooted in the text.',
                ar: 'يستطيع الطالب إنتاج فقرة تحليلية واحدة بشكلٍ مستقل، مرتكزة على النصّ.',
              },
            },
          ],
        },
        {
          number: 3,
          pages: 'Chapter 2, pp. 5–9',
          keyVocabulary: [
            { en: 'refugee', ar: 'لاجئ' },
            { en: 'displaced', ar: 'نازح' },
            { en: 'resilience', ar: 'الصمود / المرونة النفسية' },
            { en: 'memory', ar: 'الذاكرة' },
            { en: 'determined', ar: 'مُصمِّم / عازم' },
          ],
          contextNote: {
            en: 'Reema introduced through a race — physical struggle interlaced with memories of Aleppo and her brother Jamal.',
            ar: 'تُقدَّم شخصية ريما من خلال سباق — جهد جسدي يتشابك مع ذكرياتها عن حلب وأخيها جمال.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Teacher reads pp. 5–9 with echo strategy. Teacher frames Reema running while remembering home; students track physical action vs emotional memory.',
                ar: 'يقرأ المعلّم الصفحات 5–9 بأسلوب الترديد، ويُؤطّر مشهد ريما وهي تركض وتسترجع وطنها، والطلاب يتتبّعون الفعل الجسدي مقابل الذاكرة العاطفية.',
              },
              task: {
                en: 'What is Reema doing? Which words show the race is difficult? Who does she think about? What memories surface? What does this suggest about what she has lost?',
                ar: 'ماذا تفعل ريما؟ ما الكلمات التي تُظهر أنّ السباق شاقّ؟ بمن تُفكِّر؟ ما الذكريات التي تطفو إلى السطح؟ وماذا يُلمَح من ذلك عن الذي فقدته؟',
              },
              successCriteria: {
                en: "Can recall key events from Reema's opening chapter. Can identify her as determined yet carrying memories of home.",
                ar: 'يستطيع الطالب استرجاع أهمّ أحداث الفصل الافتتاحي لريما، ويُحدِّدها شخصيّةً مُصمِّمة لكنّها تحمل ذكريات الوطن.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables analyse 4 quotations using stems; whole-class feedback; present one inference about Reema.',
                ar: 'تُحلّل المجموعات على الطاولات أربعة اقتباسات بالاستعانة ببدايات الجمل، ثم يتشارك الصفّ في النقاش، ويُقدّم كلّ فريق استنتاجاً واحداً عن ريما.',
              },
              task: {
                en: 'Quotes: "My lungs are burning…" / "I suck the air down despite the pain." / "It was Jamal who first raced with me…" / "Without the courage to keep going…" Stems: "I think Reema is… because…" / "This suggests…" / "A word that stands out is…"',
                ar: 'الاقتباسات: "My lungs are burning…" / "I suck the air down despite the pain." / "It was Jamal who first raced with me…" / "Without the courage to keep going…" بدايات الجمل: "أرى أنّ ريما… لأنّ…" / "هذا يُلمِح إلى…" / "الكلمة اللافتة هي…"',
              },
              successCriteria: {
                en: "Can explain what Reema's actions reveal. Can support an idea using evidence.",
                ar: 'يستطيع الطالب أن يشرح ما تكشفه أفعال ريما، وأن يدعم فكرته بدليلٍ من النصّ.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher revisits WHAT/HOW/WHY. Live-models "How is Reema presented in the opening of Chapter 2?" using one quote and thinking aloud the inference. Students copy and label.',
                ar: 'يُراجع المعلّم صيغة "ماذا/كيف/لماذا"، ويكتب أمام الطلاب فقرة نموذجية تُجيب عن "كيف تُقدَّم ريما في افتتاحية الفصل الثاني؟" مستعيناً باقتباسٍ واحد، ويُفكّر بصوتٍ مرتفع وهو يستنتج. ينسخ الطلاب الفقرة ويُسمّون أجزاءها.',
              },
              task: {
                en: 'Model uses: "I suck the air down despite the pain." WHAT = Reema is determined; HOW = quotation, physical struggle, word choice; WHY = keeps going even when painful or difficult.',
                ar: 'يستعمل النموذج: "I suck the air down despite the pain." ماذا = ريما مُصمِّمة. كيف = اقتباس / جهد جسدي / اختيار المفردات. لماذا = تُواصل المضيّ حتى حين يكون الأمر مؤلماً أو شاقّاً.',
              },
              successCriteria: {
                en: 'Understands paragraph structure. Can identify WHAT/HOW/WHY in a real example.',
                ar: 'يفهم الطالب بنية الفقرة، ويُحدّد أجزاء "ماذا/كيف/لماذا" في مثالٍ حقيقي.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Scaffolded fill-in-the-blanks paragraph using a second quote; highlight WHAT/HOW/WHY; peer assess against a checklist.',
                ar: 'فقرة بفراغات وقالبٍ موجَّه باستخدام اقتباس آخر؛ يُبرز الطالب أجزاء "ماذا/كيف/لماذا" بالتلوين، ثم يُقيّم زميله بالاعتماد على قائمةٍ تدقيقية.',
              },
              task: {
                en: 'Using "Without the courage to keep going…": Reema is presented as… / This is shown when… / This shows…',
                ar: 'بالاستعانة باقتباس "Without the courage to keep going…": تُقدَّم ريما شخصيّةً… / يظهر ذلك حين… / يُظهر هذا أنّ…',
              },
              successCriteria: {
                en: 'Completes paragraph logically. Uses key terms correctly. Identifies WHAT/HOW/WHY.',
                ar: 'يُكمل الطالب الفقرة بشكلٍ منطقي، ويُوظّف المصطلحات الأساسية بدقّة، ويُحدّد أقسام "ماذا/كيف/لماذا".',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval drill. Students write their own paragraph using a scaffolded frame; choose from a quote list rather than a fixed quote.',
                ar: 'تدريب على استرجاع المفردات، ثم يكتب الطلاب فقرتهم الخاصة ضمن قالبٍ موجَّه، ويختارون اقتباساً من قائمة بدل اقتباسٍ ثابت.',
              },
              task: {
                en: 'What do we learn about Reema in the opening of her chapter? Support level: MEDIUM–HIGH. Sentence starters provided; quotes list provided; no full paragraph model beside them.',
                ar: 'ماذا نتعلّم عن ريما في افتتاحية فصلها؟ مستوى الدعم: متوسّط إلى مرتفع. تتوفّر بدايات جمل وقائمة اقتباسات، دون نموذج فقرة كاملة مرافق.',
              },
              successCriteria: {
                en: 'Can independently build a simple analytical paragraph using action-based evidence.',
                ar: 'يستطيع الطالب أن يبني فقرة تحليلية بسيطة بشكلٍ مستقل، مستنداً إلى أدلّة مأخوذة من تصرّفات الشخصية.',
              },
            },
          ],
        },
        {
          number: 4,
          pages: 'Chapter 3, pp. 10–14',
          keyVocabulary: [
            { en: 'poverty', ar: 'الفقر' },
            { en: 'responsibility', ar: 'المسؤولية' },
            { en: 'ashamed', ar: 'خَجِل' },
            { en: 'frustration', ar: 'الإحباط' },
            { en: 'sympathy', ar: 'التعاطف' },
          ],
          contextNote: {
            en: "Caylin's home life surfaces — money worries, sibling responsibility. Readers begin to feel sympathy.",
            ar: 'تتكشّف حياة كيلين في البيت — هموم المال ومسؤولية الإخوة، ويبدأ القارئ في التعاطف معها.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Teacher reads pp. 10–14 with echo. Pauses to surface what problems Caylin faces and what this reveals.',
                ar: 'يقرأ المعلّم الصفحات 10–14 بأسلوب الترديد، ويتوقّف ليُظهر المشاكل التي تواجهها كيلين وما تكشفه عن وضعها.',
              },
              task: {
                en: "What do we learn about Caylin's home life? What responsibilities does she carry? How do others around her behave? Which moments suggest she is less confident than she appears?",
                ar: 'ماذا نتعلّم عن حياة كيلين في البيت؟ ما المسؤوليات التي تحملها؟ كيف يتصرّف من حولها؟ ما اللحظات التي تُلمِح إلى أنّها أقلّ ثقة ممّا تبدو عليه؟',
              },
              successCriteria: {
                en: "Can recall events from this section. Can identify that Caylin's life is harder than it first seemed.",
                ar: 'يستطيع الطالب استرجاع أحداث هذا القسم، ويُحدّد أنّ حياة كيلين أصعب ممّا بدت في البداية.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: "Tables analyse 4 quotations focused on Caylin's difficulties; present one inference about why readers may begin to feel differently about her.",
                ar: 'تُحلّل المجموعات على الطاولات أربعة اقتباسات تتمحور حول صعوبات كيلين، ثم يُقدّم كلّ فريق استنتاجاً واحداً يُفسّر لماذا قد يبدأ القرّاء في تغيير شعورهم نحوها.',
              },
              task: {
                en: 'Stems: "When Caylin…, it shows…" / "This suggests…" / "The writer wants us to realise…"',
                ar: 'بدايات الجمل: "حين تفعل كيلين…، فإنّ ذلك يُظهر…" / "هذا يُلمِح إلى…" / "تريدنا الكاتبة أن ندرك…"',
              },
              successCriteria: {
                en: 'Can infer that Caylin is struggling, not simply badly behaved. Can support with evidence.',
                ar: 'يستنتج الطالب أنّ كيلين تُعاني، لا أنّها مجرّد فتاة سيّئة السلوك، ويدعم ذلك بدليل من النصّ.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher revisits WHAT/HOW/WHY. Live-models "How does the writer make readers feel sympathy for Caylin in Chapter 3?" using one quote and thinking aloud the inference.',
                ar: 'يُراجع المعلّم صيغة "ماذا/كيف/لماذا"، ويكتب أمام الطلاب فقرة نموذجية تُجيب عن "كيف تجعلنا الكاتبة نتعاطف مع كيلين في الفصل الثالث؟" مستعيناً باقتباسٍ واحد، ويُفكِّر بصوتٍ مرتفع وهو يستنتج.',
              },
              task: {
                en: "Modelled: WHAT = Caylin's life is difficult; HOW = quotation/action/home-life detail; WHY = readers begin to understand why she is angry.",
                ar: 'الفقرة النموذجية: ماذا = حياة كيلين صعبة. كيف = اقتباس / فعل ملموس / تفصيل من حياة البيت. لماذا = يبدأ القرّاء في فهم سبب غضبها.',
              },
              successCriteria: {
                en: 'Understands how writers shift our opinion of a character. Can identify WHAT/HOW/WHY.',
                ar: 'يفهم الطالب كيف يُحوِّل الكتّاب رأينا في الشخصية، ويُحدّد أجزاء "ماذا/كيف/لماذا".',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Scaffolded fill-in-the-blanks paragraph; highlight WHAT/HOW/WHY; peer assess.',
                ar: 'فقرة بفراغات وقالبٍ موجَّه؛ يُبرز الطالب أجزاء "ماذا/كيف/لماذا" بالتلوين، ثم يُجري تقييماً متبادلاً مع زميله.',
              },
              task: {
                en: 'Caylin is presented as… / This is shown when… / This shows…',
                ar: 'تُقدَّم كيلين شخصيّةً… / يظهر ذلك حين… / يُظهر هذا أنّ…',
              },
              successCriteria: {
                en: 'Completes paragraph logically; uses key terms; identifies WHAT/HOW/WHY.',
                ar: 'يُكمل الطالب الفقرة بشكلٍ منطقي، ويُوظّف المصطلحات الأساسية، ويُحدّد أقسام "ماذا/كيف/لماذا".',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval drill. Students write their own paragraph with reduced scaffolding.',
                ar: 'تدريب على استرجاع المفردات، ثم يكتب الطلاب فقرتهم الخاصة بدعمٍ مُخفَّف.',
              },
              task: {
                en: 'How does Chapter 3 change our opinion of Caylin? Support: HIGH–MEDIUM. Sentence starters and quote bank; no full paragraph model alongside.',
                ar: 'كيف يُغيِّر الفصل الثالث رأينا في كيلين؟ مستوى الدعم: مرتفع إلى متوسّط. تتوفّر بدايات جمل وبنك اقتباسات، دون نموذج فقرة كاملة مرافق.',
              },
              successCriteria: {
                en: 'Can independently produce one analytical paragraph showing developing inference.',
                ar: 'يستطيع الطالب إنتاج فقرة تحليلية واحدة بشكلٍ مستقل تُظهر استنتاجاً مُتطوِّراً.',
              },
            },
          ],
        },
        {
          number: 5,
          pages: 'Chapter 4, pp. 15–19',
          keyVocabulary: [
            { en: 'grief', ar: 'الحزن' },
            { en: 'loss', ar: 'الفقد' },
            { en: 'identity', ar: 'الهوية' },
            { en: 'belonging', ar: 'الانتماء' },
            { en: 'courage', ar: 'الشجاعة' },
          ],
          contextNote: {
            en: "Reema's memories surface — Jamal, Aleppo. Physical running, emotional return.",
            ar: 'تطفو ذكريات ريما إلى السطح — جمال وحلب. ركضٌ جسدي وعودة عاطفية إلى ما كان.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: "Teacher reads pp. 15–19 with echo. Pauses to explore Reema's thoughts, memories of Jamal, references to Aleppo.",
                ar: 'يقرأ المعلّم الصفحات 15–19 بأسلوب الترديد، ويتوقّف ليستكشف أفكار ريما وذكرياتها عن جمال والإشارات إلى حلب.',
              },
              task: {
                en: 'What is Reema thinking about during the race? What memories of Jamal are mentioned? Which words show she is still emotionally affected? What does this suggest about what she has lost?',
                ar: 'بماذا تُفكِّر ريما خلال السباق؟ ما الذكريات التي تُذكَر عن جمال؟ ما الكلمات التي تُظهر أنّها لا تزال متأثّرة عاطفياً؟ وماذا يُلمَح من ذلك عمّا فقدته؟',
              },
              successCriteria: {
                en: "Can identify how Reema's memories shape our understanding of her.",
                ar: 'يستطيع الطالب أن يُحدِّد كيف تُشكِّل ذكريات ريما فهمنا لشخصيّتها.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Tables discuss one quote linked to memory/Jamal/courage; record one group inference; whole-class feedback.',
                ar: 'تُناقش المجموعات على الطاولات اقتباساً واحداً مرتبطاً بالذاكرة أو بجمال أو بالشجاعة، وتُسجِّل استنتاجاً جماعياً واحداً، ثم يتشارك الصفّ في النقاش.',
              },
              task: {
                en: 'Stems: "This suggests Reema feels…" / "When Reema remembers…, it shows…" / "The writer presents her as…"',
                ar: 'بدايات الجمل: "هذا يُلمِح إلى أنّ ريما تشعر بـ…" / "حين تتذكّر ريما…، فإنّ ذلك يُظهر…" / "تُقدِّمها الكاتبة شخصيّةً…"',
              },
              successCriteria: {
                en: "Can infer emotional pressure from Reema's memories and thoughts.",
                ar: 'يستنتج الطالب الضغط العاطفي من ذكريات ريما وأفكارها.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models embedding a quotation INSIDE the WHAT/HOW/WHY paragraph rather than dropping it separately.',
                ar: 'يُقدّم المعلّم نموذجاً لدمج الاقتباس داخل فقرة "ماذا/كيف/لماذا" بدلاً من إقحامه منفصلاً.',
              },
              task: {
                en: "Model paragraph: How do Reema's memories influence the way we see her?",
                ar: 'الفقرة النموذجية: كيف تُؤثِّر ذكريات ريما في نظرتنا إليها؟',
              },
              successCriteria: {
                en: 'Can see how quotations can be blended into writing.',
                ar: 'يستوعب الطالب كيف يمكن مزج الاقتباسات داخل الكتابة بسلاسة.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Students complete a partially-scaffolded paragraph (scaffold reduced to sentence openings only); peer assess.',
                ar: 'يُكمل الطلاب فقرة بدعمٍ جزئي مُختصَر إلى بدايات الجمل فقط، ثم يُجرون تقييماً متبادلاً.',
              },
              task: {
                en: 'Sentence-opening task with embedded-quotation practice using a Jamal / memory quotation.',
                ar: 'مهمّة قائمة على بدايات الجمل مع التدرّب على دمج اقتباس مرتبط بجمال أو بالذاكرة.',
              },
              successCriteria: {
                en: 'Can embed one quotation and explain it.',
                ar: 'يستطيع الطالب دمج اقتباس واحد داخل الفقرة وشرحه.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7W.9', '7R.3', '7R.5', '7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students choose from a quotation bank and write more independently.',
                ar: 'استرجاع المفردات، ثم يختار الطلاب من بنك الاقتباسات ويكتبون باستقلاليّة أكبر.',
              },
              task: {
                en: "How do Reema's memories affect the way the reader sees her? Support: MEDIUM–LOW.",
                ar: 'كيف تُؤثِّر ذكريات ريما في نظرة القارئ إليها؟ مستوى الدعم: متوسّط إلى منخفض.',
              },
              successCriteria: {
                en: 'Paragraph shows clearer independence and evidence choice.',
                ar: 'تُظهر الفقرة استقلالاً أوضح وقدرة أدقّ على اختيار الدليل.',
              },
            },
          ],
        },
        {
          number: 6,
          pages: 'Chapter 5, pp. 21–26',
          keyVocabulary: [
            { en: 'judgement', ar: 'الحكم على الآخرين' },
            { en: 'stereotype', ar: 'صورة نمطية' },
            { en: 'misunderstood', ar: 'يُساء فهمه' },
            { en: 'pressure', ar: 'الضغط' },
            { en: 'outsider', ar: 'الغريب / المُستبعَد' },
            { en: 'loneliness', ar: 'الوحدة' },
          ],
          contextNote: {
            en: 'Caylin becomes more sympathetic — struggle, loneliness, pressure.',
            ar: 'تكتسب كيلين تعاطف القارئ أكثر — معاناة ووحدة وضغط.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.1', '7R.2', '7R.4'],
              whatStudentsDo: {
                en: "Teacher reads pp. 21–26 with echo. Pauses to discuss Caylin's difficult home life, emotions and responsibilities; introduces thematic words struggle / loneliness / pressure.",
                ar: 'يقرأ المعلّم الصفحات 21–26 بأسلوب الترديد، ويتوقّف ليُناقش حياة كيلين الصعبة في البيت ومشاعرها ومسؤوليّاتها، ويُقدّم المفردات الموضوعيّة: المعاناة / الوحدة / الضغط.',
              },
              task: {
                en: 'What problems does Caylin face? Which moments make us feel sympathy? What words suggest she is under pressure?',
                ar: 'ما المشكلات التي تواجهها كيلين؟ ما اللحظات التي تجعلنا نتعاطف معها؟ ما الكلمات التي تُلمِح إلى أنّها تحت ضغط؟',
              },
              successCriteria: {
                en: 'Can identify that Caylin is becoming a more sympathetic character.',
                ar: 'يستطيع الطالب أن يُحدِّد أنّ كيلين أصبحت شخصيّة أكثر استحقاقاً للتعاطف.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Students annotate quotations in groups with less teacher prompting; choose which quotations best show struggle or loneliness.',
                ar: 'يُعلِّق الطلاب على الاقتباسات ضمن مجموعات بإرشادٍ أقلّ من المعلّم، ويختارون أيّ الاقتباسات يُظهر المعاناة أو الوحدة على أفضل وجه.',
              },
              task: {
                en: 'Stems: "This shows Caylin feels…" / "This could suggest…" / "The writer wants us to understand…"',
                ar: 'بدايات الجمل: "يُظهر هذا أنّ كيلين تشعر بـ…" / "قد يُلمِح هذا إلى…" / "تريدنا الكاتبة أن نفهم…"',
              },
              successCriteria: {
                en: "Can independently discuss Caylin's hidden difficulties using evidence.",
                ar: 'يستطيع الطالب أن يُناقش معاناة كيلين الخفيّة بشكلٍ مستقل مستعيناً بالأدلّة.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models a paragraph beginning "The writer presents Caylin as…". Students notice this is more analytical than "Caylin is…".',
                ar: 'يُقدّم المعلّم نموذج فقرة تبدأ بعبارة "تُقدِّم الكاتبة كيلين شخصيّةً…"، وينتبه الطلاب إلى أنّ هذه الصياغة أكثر تحليليّة من "كيلين هي…".',
              },
              task: {
                en: 'Character-sympathy paragraph model.',
                ar: 'فقرة نموذجية لتحليل تعاطف القارئ مع الشخصية.',
              },
              successCriteria: {
                en: 'Understands writer-focused analytical opening.',
                ar: 'يفهم الطالب صياغة الافتتاحية التحليلية المُركِّزة على الكاتب.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Reduced-scaffold paragraph with quotation bank only; students choose the best quotation.',
                ar: 'فقرة بدعمٍ مُخفَّف مع بنك اقتباسات فقط، ويختار الطلاب الاقتباس الأنسب بأنفسهم.',
              },
              task: {
                en: 'Guided analytical writing.',
                ar: 'كتابة تحليلية موجَّهة.',
              },
              successCriteria: {
                en: 'Can make a quotation choice independently.',
                ar: 'يستطيع الطالب اختيار الاقتباس المناسب بشكلٍ مستقل.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students write one independent paragraph with low scaffold.',
                ar: 'استرجاع المفردات، ثم يكتب الطلاب فقرة مستقلّة واحدة بدعمٍ منخفض.',
              },
              task: {
                en: 'How does the writer make readers feel sympathy for Caylin in this chapter?',
                ar: 'كيف تجعلنا الكاتبة نتعاطف مع كيلين في هذا الفصل؟',
              },
              successCriteria: {
                en: 'Can independently write one secure analytical paragraph.',
                ar: 'يستطيع الطالب كتابة فقرة تحليلية واحدة متماسكة بشكلٍ مستقل.',
              },
            },
          ],
        },
        {
          number: 7,
          pages: 'Chapters 1–5 (consolidation + T1.1 assessment)',
          keyVocabulary: [
            { en: 'isolation', ar: 'العزلة' },
            { en: 'belonging', ar: 'الانتماء' },
            { en: 'outsider', ar: 'الغريب / المُستبعَد' },
            { en: 'excluded', ar: 'مُستبعَد / مُقصَى' },
            { en: 'connection', ar: 'الترابط / الصلة' },
          ],
          contextNote: {
            en: 'Consolidation + Term 1.1 assessment week.',
            ar: 'أسبوع تثبيت للمعرفة + التقييم الخاص بنصف الفصل 1.1.',
          },
          homework: {
            en: 'Read Chapters 6–7 over October half-term break.',
            ar: 'اقرأ الفصلين 6–7 خلال إجازة منتصف الفصل في أكتوبر.',
          },
          lessons: [
            {
              focus: 'consolidation-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Teacher revisits key extracts. Retrieval activities recap major events. Explicitly revisits ideas: first impressions, hidden struggles, loneliness, loss, sympathy.',
                ar: 'يُعيد المعلّم النظر في المقاطع المحورية. تُلخِّص أنشطة الاسترجاع أبرز الأحداث، وتُراجَع الأفكار صراحةً: الانطباع الأول، المعاناة الخفية، الوحدة، الفقد، التعاطف.',
              },
              task: {
                en: 'Retrieval carousel: Which chapter is this from? Which girl is this about? What does this quotation suggest? Did our opinion change?',
                ar: 'محطّات استرجاع متنقّلة: من أيّ فصل هذا المقطع؟ عن أيّ الفتاتين يدور؟ إلامَ يُلمِح هذا الاقتباس؟ هل تغيّر رأينا؟',
              },
              successCriteria: {
                en: 'Can confidently recall main events and quotations from both protagonists.',
                ar: 'يستطيع الطالب أن يسترجع بثقة الأحداث الأساسية والاقتباسات الخاصّة بكلتا البطلتين.',
              },
            },
            {
              focus: 'consolidation-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Groups sort quotations under headings: Caylin / Reema / Similar / Different; whole-class verbal feedback.',
                ar: 'تُصنِّف المجموعات الاقتباسات تحت العناوين: كيلين / ريما / تشابُه / اختلاف، ثم يتشارك الصفّ النقاش الشفهي.',
              },
              task: {
                en: 'Quote sort + verbal justification. Stems: "This quote shows…" / "Both girls…" / "Unlike Caylin, Reema…"',
                ar: 'تصنيف الاقتباسات + تبرير شفهي. بدايات الجمل: "يُظهر هذا الاقتباس…" / "كلتا الفتاتين…" / "بخلاف كيلين، فإنّ ريما…"',
              },
              successCriteria: {
                en: 'Can verbally compare the two girls using evidence.',
                ar: 'يستطيع الطالب أن يُقارن الفتاتين شفهياً مستعيناً بالأدلّة.',
              },
            },
            {
              focus: 'paragraph-rehearsal',
              skillCodes: ['7W.1', '7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models one final comparison paragraph quickly, explicitly narrating planning. Students complete a guided plan for a similar question.',
                ar: 'يكتب المعلّم بسرعة فقرة مقارنة نموذجية أخيرة، شارحاً عمليّة التخطيط بصوتٍ مرتفع، ثم يُكمل الطلاب خطّةً موجَّهة لسؤالٍ مشابه.',
              },
              task: {
                en: 'Model question: How are Caylin and Reema presented as different but similar?',
                ar: 'السؤال النموذجي: كيف تُقدَّم كيلين وريما مختلفتين ومتشابهتين في الوقت ذاته؟',
              },
              successCriteria: {
                en: 'Understands how to organise evidence before assessment.',
                ar: 'يفهم الطالب كيف يُنظِّم الأدلّة قبل التقييم.',
              },
            },
            {
              focus: 'assessment',
              skillCodes: ['7R.1', '7R.2', '7R.4', '7W.1', '7W.2'],
              whatStudentsDo: {
                en: 'Google-Form reading quiz (20–25 mins). Multiple choice, quote recognition, simple inference; auto-marked. Covers Chapters 1–5.',
                ar: 'اختبار قراءة عبر Google Form لمدّة 20–25 دقيقة. اختيار من متعدّد، وتمييز اقتباسات، واستنتاج بسيط، يُصحَّح آلياً، ويُغطّي الفصول 1–5.',
              },
              task: {
                en: 'T1.1 Reading Quiz — auto-marked Google Form.',
                ar: 'اختبار قراءة T1.1 — نموذج Google Form يُصحَّح تلقائياً.',
              },
              successCriteria: {
                en: 'Reading understanding assessed independently.',
                ar: 'يُقيَّم فهم القراءة لدى الطالب بشكلٍ مستقل.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students write one timed analytical paragraph (20 mins).',
                ar: 'استرجاع المفردات، ثم يكتب الطلاب فقرة تحليلية واحدة محسوبة الوقت (20 دقيقة).',
              },
              task: {
                en: 'Assessment task: Who do we feel more sympathy for so far — Caylin or Reema?',
                ar: 'مهمّة التقييم: مَن يستحقّ تعاطفنا أكثر حتى الآن — كيلين أم ريما؟',
              },
              successCriteria: {
                en: 'Can independently select one quotation and explain it in one paragraph.',
                ar: 'يستطيع الطالب أن يختار اقتباساً واحداً ويُحلِّله في فقرة واحدة بشكلٍ مستقل.',
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
            { en: 'prejudice', ar: 'التحامل / التعصّب' },
            { en: 'assumption', ar: 'افتراض مُسبَق' },
            { en: 'stereotype', ar: 'صورة نمطية' },
            { en: 'bias', ar: 'انحياز' },
            { en: 'discrimination', ar: 'التمييز' },
          ],
          contextNote: {
            en: 'Both girls experience prejudice and loneliness differently — first comparative writing.',
            ar: 'تعيش الفتاتان تجربتي التحامل والوحدة بطريقتين مختلفتين — أوّل تجربة كتابة مقارنة.',
          },
          homework: {
            en: 'Read Chapters 10–11.',
            ar: 'اقرأ الفصلين 10–11.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Teacher models first extract; pairs echo-read key paragraphs alternating readers. Track how characters experience prejudice, misunderstanding, isolation.',
                ar: 'يُقدِّم المعلّم نموذجاً للمقطع الأول، ثم يقرأ الطلاب بالأزواج المقاطع المحورية بأسلوب الترديد مع تبادل القراءة، ويتتبّعون كيف تعيش الشخصيات التحامل وسوء الفهم والعزلة.',
              },
              task: {
                en: 'Where does Reema feel uncomfortable? What pressures does Caylin face? How are both girls isolated in different ways?',
                ar: 'أين تشعر ريما بعدم الراحة؟ ما الضغوط التي تواجه كيلين؟ وكيف تُعاني الفتاتان من العزلة بطريقتين مختلفتين؟',
              },
              successCriteria: {
                en: 'Can explain one way Caylin and Reema both experience loneliness using one quotation from each character.',
                ar: 'يستطيع الطالب أن يشرح وجهاً واحداً تتشارك فيه كيلين وريما تجربة الوحدة، مستعيناً باقتباس واحد من كلّ شخصية.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.1', '7R.5', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Groups compare quotations from Chapters 6–9; create comparison notes on loneliness and belonging.',
                ar: 'تُقارن المجموعات بين الاقتباسات من الفصول 6–9، وتُجهِّز ملاحظات مقارنة حول الوحدة والانتماء.',
              },
              task: {
                en: 'Stems: "Both girls experience…" / "This suggests…" / "A difference between them is…"',
                ar: 'بدايات الجمل: "كلتا الفتاتين تعيش…" / "هذا يُلمِح إلى…" / "ومن أوجه الاختلاف بينهما أنّ…"',
              },
              successCriteria: {
                en: 'Can verbally compare Caylin and Reema using "Both girls…" and at least one quotation.',
                ar: 'يستطيع الطالب أن يُقارن كيلين وريما شفهياً بصيغة "كلتا الفتاتين…" مدعومةً باقتباسٍ واحد على الأقل.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Teacher models a writer-focused WHAT/HOW/WHY paragraph exploring how Williamson presents unfair judgement through character language and reactions. Students identify comparison language and embedded evidence.',
                ar: 'يكتب المعلّم نموذجاً لفقرة "ماذا/كيف/لماذا" مُركِّزة على الكاتبة، تستكشف كيف تُقدّم ويليامسون الحكم الجائر من خلال لغة الشخصيات وردود فعلها. يُحدّد الطلاب لغة المقارنة والأدلّة المدمجة.',
              },
              task: {
                en: 'Model question: How are Caylin and Reema shown to feel lonely?',
                ar: 'السؤال النموذجي: كيف تُصوَّر كيلين وريما وهما تشعران بالوحدة؟',
              },
              successCriteria: {
                en: 'Understands how to compare two characters using evidence.',
                ar: 'يفهم الطالب كيف يُقارن بين شخصيّتين بالاستناد إلى الأدلّة.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Partially-scaffolded comparative paragraph with sentence starters and quotation bank.',
                ar: 'فقرة مقارنة بدعمٍ جزئي تتضمّن بدايات جمل وبنك اقتباسات.',
              },
              task: {
                en: 'Guided comparative paragraph task.',
                ar: 'مهمّة كتابة فقرة مقارنة موجَّهة.',
              },
              successCriteria: {
                en: 'Can compare both girls using quotations and explanation.',
                ar: 'يستطيع الطالب أن يُقارن الفتاتين مستعيناً بالاقتباسات والشرح.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Students independently write one comparative analytical paragraph (Support level: MEDIUM).',
                ar: 'استرجاع المفردات، ثم يكتب الطلاب فقرة تحليلية مقارنة واحدة بشكلٍ مستقل (مستوى الدعم: متوسّط).',
              },
              task: {
                en: 'How are Caylin and Reema presented as lonely in Chapters 6–9?',
                ar: 'كيف تُقدَّم كيلين وريما شخصيّتين تعيشان الوحدة في الفصول 6–9؟',
              },
              successCriteria: {
                en: 'Uses quotations from both characters and explains ideas clearly.',
                ar: 'يُوظّف اقتباسات من كلتا الشخصيّتين، ويشرح أفكاره بوضوح.',
              },
            },
          ],
        },
        {
          number: 9,
          pages: 'Chapters 12–13 + read Chapters 14–15 for homework',
          keyVocabulary: [
            { en: 'empathy', ar: 'التعاطف' },
            { en: 'similarity', ar: 'التشابه' },
            { en: 'relationship', ar: 'العلاقة' },
            { en: 'trust', ar: 'الثقة' },
            { en: 'understanding', ar: 'الفهم' },
          ],
          homework: {
            en: 'Read Chapters 14–15.',
            ar: 'اقرأ الفصلين 14–15.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4'],
              whatStudentsDo: {
                en: 'Paired reading + retrieval stops. Students alternate reading aloud; teacher pauses for retrieval and vocabulary; circulates and probes understanding.',
                ar: 'قراءة ثنائية مع محطّات استرجاع. يتبادل الطلاب القراءة بصوتٍ مرتفع، ويتوقّف المعلّم بين الحين والآخر للاسترجاع والمفردات، ويتجوّل في الصفّ ليتفقّد الفهم بأسئلة استقصائية.',
              },
              task: {
                en: 'Who is judged unfairly? What assumptions do characters make? What evidence suggests misunderstanding?',
                ar: 'مَن الذي يُحكَم عليه ظلماً؟ ما الافتراضات المُسبَقة التي تتبنّاها الشخصيات؟ وما الأدلّة التي تُلمِح إلى وجود سوء فهم؟',
              },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why it is unfair.',
                ar: 'يستطيع الطالب أن يُحدِّد مثالاً واحداً على حكمٍ جائر، وأن يُبيِّن سبب جوره.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Students analyse quotations linked to judgement and stereotypes; group discussion + whole-class feedback.',
                ar: 'يُحلّل الطلاب اقتباسات مرتبطة بإصدار الأحكام والصور النمطية ضمن نقاشٍ جماعي، ثم يتشارك الصفّ كاملاً في النقاش.',
              },
              task: {
                en: 'Stems: "The writer presents…" / "This could suggest…" / "The character assumes…"',
                ar: 'بدايات الجمل: "تُقدِّم الكاتبة…" / "قد يُلمِح هذا إلى…" / "تفترض الشخصية أنّ…"',
              },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why.',
                ar: 'يستطيع الطالب أن يُحدِّد مثالاً واحداً على حكمٍ جائر ويُفسِّر سببه.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.3', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models analytical paragraph with writer-focused opening. Students identify how evidence is integrated into explanation.',
                ar: 'يكتب المعلّم نموذجاً لفقرة تحليلية تبدأ بافتتاحية مُركِّزة على الكاتبة. يُحدِّد الطلاب كيف اندمج الدليل داخل الشرح.',
              },
              task: {
                en: 'Model question: How does the writer show unfair judgement?',
                ar: 'السؤال النموذجي: كيف تُصوِّر الكاتبة الحكم الجائر؟',
              },
              successCriteria: {
                en: 'Understands writer-focused analytical opening.',
                ar: 'يفهم الطالب صياغة الافتتاحية التحليلية المُركِّزة على الكاتب.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2'],
              whatStudentsDo: {
                en: 'Reduced-scaffold analytical paragraph using independently selected quotations.',
                ar: 'فقرة تحليلية بدعمٍ مُخفَّف، يختار فيها الطالب الاقتباسات بنفسه.',
              },
              task: {
                en: 'Guided analytical writing.',
                ar: 'كتابة تحليلية موجَّهة.',
              },
              successCriteria: {
                en: 'Can independently select supporting evidence.',
                ar: 'يستطيع الطالب اختيار الأدلّة الداعمة بشكلٍ مستقل.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Independent paragraph with low scaffold.',
                ar: 'استرجاع المفردات، ثم كتابة فقرة مستقلّة بدعمٍ منخفض.',
              },
              task: {
                en: 'How does the writer show that characters are judged unfairly?',
                ar: 'كيف تُظهر الكاتبة أنّ الشخصيات يُحكَم عليها ظلماً؟',
              },
              successCriteria: {
                en: 'Can identify one example of unfair judgement and explain why it is unfair.',
                ar: 'يستطيع الطالب أن يُحدِّد مثالاً واحداً على حكمٍ جائر، وأن يُبيِّن سبب جوره.',
              },
            },
          ],
        },
        {
          number: 10,
          pages: 'Chapters 16–17 + read Chapters 18–19 for homework',
          keyVocabulary: [
            { en: 'symbolism', ar: 'الرمزية' },
            { en: 'metaphor', ar: 'استعارة' },
            { en: 'represent', ar: 'يُمثِّل' },
            { en: 'vulnerability', ar: 'الهشاشة' },
            { en: 'survival', ar: 'البقاء / النجاة' },
          ],
          homework: {
            en: 'Read Chapters 18–19.',
            ar: 'اقرأ الفصلين 18–19.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.2', '7R.4', '7R.6'],
              whatStudentsDo: {
                en: 'Choral reading + group discussion. Whole class reads extracts together; pause to discuss meaning and identify similarities between the girls. Teacher facilitates rather than leads.',
                ar: 'قراءة جماعية مُتزامِنة + نقاش مجموعات. يقرأ الصفّ المقاطع معاً، مع توقّفات للنقاش وتحديد أوجه التشابه بين الفتاتين. يكتفي المعلّم بدور المُيسِّر بدل القيادة.',
              },
              task: {
                en: 'What do the girls have in common? What moments show understanding developing?',
                ar: 'ما الذي تتشاركه الفتاتان؟ ما اللحظات التي تُظهر تنامي الفهم بينهما؟',
              },
              successCriteria: {
                en: 'Can explain one similarity between Caylin and Reema that was not clear earlier in the novel.',
                ar: 'يستطيع الطالب أن يشرح وجهاً واحداً للتشابه بين كيلين وريما لم يكن واضحاً في وقتٍ سابق من الرواية.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.3'],
              whatStudentsDo: {
                en: 'Compare quotations showing emotional similarities.',
                ar: 'قارن بين اقتباسات تُظهر أوجه تشابُه عاطفي بين الشخصيّتين.',
              },
              task: {
                en: 'Stems: "Both characters…" / "This suggests they…" / "The writer begins to show…"',
                ar: 'بدايات الجمل: "كلتا الشخصيّتين…" / "هذا يُلمِح إلى أنّهما…" / "تبدأ الكاتبة في إظهار…"',
              },
              successCriteria: {
                en: 'Can explain one similarity that emerges later in the novel.',
                ar: 'يستطيع الطالب أن يشرح وجهاً واحداً للتشابه يظهر في مراحل لاحقة من الرواية.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models comparative paragraph with embedded quotations and comparative connectives.',
                ar: 'يكتب المعلّم نموذجاً لفقرة مقارنة باقتباسات مدمجة وأدوات ربط مقارنة.',
              },
              task: {
                en: 'Comparative WHAT/HOW/WHY paragraph.',
                ar: 'فقرة مقارنة وفق صيغة "ماذا/كيف/لماذا".',
              },
              successCriteria: {
                en: 'Can embed quotations from two chapters.',
                ar: 'يستطيع الطالب دمج اقتباسات من فصلَين داخل الفقرة.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.1', '7W.2'],
              whatStudentsDo: {
                en: 'Guided comparative writing with minimal scaffold.',
                ar: 'كتابة مقارنة موجَّهة بدعمٍ مُخفَّف.',
              },
              task: {
                en: 'Comparative paragraph completion.',
                ar: 'إكمال فقرة مقارنة.',
              },
              successCriteria: {
                en: 'Can write one comparative paragraph using evidence from both characters and a comparative connective.',
                ar: 'يستطيع الطالب كتابة فقرة مقارنة واحدة مستعيناً بأدلّة من كلتا الشخصيّتين وبأداة ربط مقارنة.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Independent writing. Support: LOW–MEDIUM.',
                ar: 'كتابة مستقلّة. مستوى الدعم: منخفض إلى متوسّط.',
              },
              task: {
                en: 'How does the writer begin to connect Caylin and Reema?',
                ar: 'كيف تبدأ الكاتبة في الربط بين كيلين وريما؟',
              },
              successCriteria: {
                en: 'Sustained comparison using evidence.',
                ar: 'مقارنة مستمرّة ومُتماسِكة قائمة على الأدلّة.',
              },
            },
          ],
        },
        {
          number: 11,
          pages: 'Chapters 20–22 + read Chapters 23–29 for homework',
          keyVocabulary: [
            { en: 'acceptance', ar: 'القبول' },
            { en: 'friendship', ar: 'الصداقة' },
            { en: 'loyalty', ar: 'الولاء' },
            { en: 'compassion', ar: 'الرحمة / الشفقة' },
            { en: 'support', ar: 'الدعم' },
          ],
          homework: {
            en: 'Read Chapters 23–29.',
            ar: 'اقرأ الفصول 23–29.',
          },
          lessons: [
            {
              focus: 'explicit-reading',
              skillCodes: ['7R.1', '7R.5'],
              whatStudentsDo: {
                en: 'Reciprocal reading. Students take roles (summariser, predictor, clarifier, questioner). Teacher models roles briefly before students lead discussion.',
                ar: 'قراءة تبادليّة. يتقاسم الطلاب الأدوار (المُلخِّص، المُتوقِّع، المُوضِّح، المُتسائِل). يُقدِّم المعلّم نموذجاً سريعاً لكلّ دور، ثم يقود الطلاب النقاش بأنفسهم.',
              },
              task: {
                en: 'What does the fox represent? Why might the writer use animals symbolically?',
                ar: 'ماذا يُمثِّل الثعلب؟ ولماذا قد توظِّف الكاتبة الحيوانات بوصفها رموزاً؟',
              },
              successCriteria: {
                en: 'Can explain what the fox symbolises using one quotation.',
                ar: 'يستطيع الطالب أن يشرح ما يرمز إليه الثعلب مستعيناً باقتباسٍ واحد.',
              },
            },
            {
              focus: 'reading-discussion',
              skillCodes: ['7R.5', '7SL.1', '7SL.2', '7SL.3'],
              whatStudentsDo: {
                en: 'Discuss symbolism quotations in groups; feed back interpretations.',
                ar: 'تُناقش المجموعات الاقتباسات الرمزيّة، ثم يُشارك كلّ فريق تأويلاته مع الصفّ.',
              },
              task: {
                en: 'Stems: "The fox could represent…" / "This symbol suggests…"',
                ar: 'بدايات الجمل: "قد يُمثِّل الثعلب…" / "يُلمِح هذا الرمز إلى…"',
              },
              successCriteria: {
                en: 'Can use evidence to explain how the fox represents vulnerability or survival.',
                ar: 'يستطيع الطالب أن يستعمل الدليل ليشرح كيف يُمثِّل الثعلب الهشاشة أو النجاة.',
              },
            },
            {
              focus: 'explicit-writing',
              skillCodes: ['7W.1', '7W.4'],
              whatStudentsDo: {
                en: 'Teacher models paragraph analysing symbolism using embedded quotations.',
                ar: 'يكتب المعلّم نموذجاً لفقرة تُحلِّل الرمزية باستخدام اقتباسات مدمجة.',
              },
              task: {
                en: 'Model question: What does the fox symbolise?',
                ar: 'السؤال النموذجي: إلامَ يرمز الثعلب؟',
              },
              successCriteria: {
                en: 'Understands basic symbolism analysis.',
                ar: 'يفهم الطالب الأساسيّات في تحليل الرمزية.',
              },
            },
            {
              focus: 'application',
              skillCodes: ['7W.2', '7W.4'],
              whatStudentsDo: {
                en: 'Guided symbolism paragraph with reduced scaffold.',
                ar: 'فقرة موجَّهة لتحليل الرمزية بدعمٍ مُخفَّف.',
              },
              task: {
                en: 'Guided analytical response.',
                ar: 'استجابة تحليلية موجَّهة.',
              },
              successCriteria: {
                en: 'Can explain symbolic meaning clearly.',
                ar: 'يستطيع الطالب أن يشرح المعنى الرمزي بوضوح.',
              },
            },
            {
              focus: 'independent-outcome',
              skillCodes: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              whatStudentsDo: {
                en: 'Vocabulary retrieval. Independent symbolism analysis.',
                ar: 'استرجاع المفردات، ثم تحليل مستقلّ للرمزية.',
              },
              task: {
                en: 'How does the writer use the fox symbolically?',
                ar: 'كيف توظِّف الكاتبة الثعلب توظيفاً رمزيّاً؟',
              },
              successCriteria: {
                en: 'Explains symbolism using evidence.',
                ar: 'يشرح الطالب الرمزية بالاستناد إلى الأدلّة.',
              },
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
        ar: 'مقالة تحليلية تقارن بين قصيدتين من المختارات تشتركان في موضوع واحد (مثل المهمَّشين أو الشوق) — 45 دقيقة.',
      },
      weeks: [
        {
          number: 2,
          pages: 'Half-caste — John Agard',
          keyVocabulary: [
            { en: 'dialect', ar: 'لهجة' },
            { en: 'identity', ar: 'هوية' },
            { en: 'phonetic', ar: 'صوتي' },
            { en: 'challenge', ar: 'تحدٍّ' },
            { en: 'voice', ar: 'صوت' },
          ],
          contextNote: {
            en: 'Agard writes in Guyanese Creole to confront the term "half-caste". The poem questions why mixed identity is treated as incomplete.',
            ar: 'يكتب أغارد بلهجة الكريول الغيانية لمواجهة مصطلح "half-caste". تتساءل القصيدة لماذا تُعامَل الهوية المختلطة كأنها ناقصة.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read poem aloud twice; gloss "half-caste", "Picasso", "tchaikovsky".',
              task: 'Underline three lines where Agard directly addresses the reader ("Explain yuself…").',
              success: 'Can quote one line where the speaker challenges the reader.',
              doAr: 'اقرأ القصيدة بصوت عالٍ مرّتين، واشرح كلمات "half-caste" و"Picasso" و"tchaikovsky".',
              taskAr:
                'ضع خطًّا تحت ثلاثة أسطر يخاطب فيها أغارد القارئ مباشرةً (مثل "Explain yuself…").',
              successAr: 'يقدر الطالب على اقتباس سطر واحد يتحدّى فيه المتكلّم القارئ.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7SL.1', '7SL.3'],
              do: 'Discuss why Agard mixes Creole and standard English; teacher models "The dialect shows…".',
              task: 'Pair-talk: how does the missing punctuation change the pace?',
              success: 'Names one effect of the Creole voice.',
              doAr: 'ناقش لماذا يمزج أغارد بين الكريول والإنجليزية الفصحى، ويعرض المعلّم نموذج "The dialect shows…".',
              taskAr: 'حوار ثنائي: كيف يؤثّر غياب علامات الترقيم على إيقاع القصيدة؟',
              successAr: 'يذكر الطالب أثرًا واحدًا لاستخدام صوت الكريول.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Live-model a WHAT/HOW/WHY paragraph using a Creole quote.',
              task: 'Copy modelled paragraph; label WHAT/HOW/WHY.',
              success: 'Understands the analytical paragraph shape for poetry.',
              doAr: 'يعرض المعلّم نموذجًا مباشرًا لفقرة WHAT/HOW/WHY مع اقتباس من الكريول.',
              taskAr: 'انسخ الفقرة النموذجية وضع علامات WHAT/HOW/WHY على أجزائها.',
              successAr: 'يستوعب الطالب شكل الفقرة التحليلية الخاصّة بالشعر.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5', '7W.1'],
              do: 'Scaffolded paragraph using "yu mean when light an shadow / mix in de sky".',
              task: 'Fill-in-the-blanks paragraph using "This shows…".',
              success: 'Inference goes beyond literal meaning.',
              doAr: 'فقرة مدعومة بالسقالات باستخدام السطر "yu mean when light an shadow / mix in de sky".',
              taskAr: 'أكمل فراغات الفقرة مستخدمًا عبارة "This shows…".',
              successAr: 'يتجاوز الاستنتاج المعنى الحرفي.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.3', '7W.1', '7W.4', '7W.9'],
              do: 'Independent paragraph with reduced scaffold.',
              task: 'How does Agard challenge the reader?',
              success: 'One paragraph with embedded quote + "This shows…" inference.',
              doAr: 'اكتب فقرة مستقلّة بدعم أقل من السقالات.',
              taskAr: 'كيف يتحدّى أغارد القارئ؟',
              successAr: 'فقرة واحدة فيها اقتباس مدمج واستنتاج بصيغة "This shows…".',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Refugee Blues — W. H. Auden',
          keyVocabulary: [
            { en: 'refrain', ar: 'لازمة' },
            { en: 'displacement', ar: 'تشريد' },
            { en: 'persecution', ar: 'اضطهاد' },
            { en: 'stanza', ar: 'مقطع شعري' },
            { en: 'lament', ar: 'رثاء' },
          ],
          contextNote: {
            en: "Auden's 1939 ballad for Jewish refugees fleeing Nazi Germany. The blues form gives the poem a slow, sorrowful rhythm.",
            ar: 'قصيدة كتبها أودن سنة 1939 عن اللاجئين اليهود الفارّين من ألمانيا النازية. يمنح قالب البلوز القصيدة إيقاعًا بطيئًا حزينًا.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read all 12 stanzas; note the "my dear" refrain.',
              task: 'List three places refugees are rejected (consul, committee, public meeting).',
              success: 'Can list three rejections with line references.',
              doAr: 'اقرأ المقاطع الإثني عشر كاملةً وانتبه إلى لازمة "my dear".',
              taskAr: 'اذكر ثلاثة مواقف يُرفض فيها اللاجئون (القنصل، اللجنة، اجتماع عام).',
              successAr: 'يقدر الطالب على إدراج ثلاثة مواقف رفض مع الإشارة إلى الأسطر.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7SL.2'],
              do: 'Discuss the blues form: three-line stanzas, repeated phrase, sad mood.',
              task: 'Pair-share: what effect does "my dear" repeated 12 times have?',
              success: 'Explains one effect of the refrain to a partner.',
              doAr: 'ناقش قالب البلوز: المقاطع الثلاثية الأسطر، العبارة المتكرّرة، الحال الحزينة.',
              taskAr: 'حوار ثنائي: ما الأثر الذي تتركه عبارة "my dear" المكرّرة اثنتي عشرة مرّة؟',
              successAr: 'يشرح الطالب لزميله أثرًا واحدًا من آثار اللازمة.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.2', '7W.3'],
              do: "Model varied sentences: simple + compound + complex about the poem's mood.",
              task: "Write three sentences of different lengths about the poem's mood.",
              success: 'Three sentences with full stops, capitals, varied length.',
              doAr: 'يعرض المعلّم نموذجًا لجمل متنوّعة: بسيطة ومركّبة ومركّبة معقّدة عن مزاج القصيدة.',
              taskAr: 'اكتب ثلاث جمل مختلفة الأطوال عن مزاج القصيدة.',
              successAr: 'ثلاث جمل بنقاط وحروف كبيرة في بداياتها وأطوال متباينة.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5'],
              do: 'Model inference on "Saw a door opened and a cat let in: / But they weren\'t German Jews, my dear".',
              task: 'Use "This shows…" to explain the comparison of refugees and the cat.',
              success: "Inference connects the cat image to the refugees' treatment.",
              doAr: 'يعرض المعلّم نموذج استنتاج على السطر "Saw a door opened and a cat let in: / But they weren\'t German Jews, my dear".',
              taskAr: 'استخدم عبارة "This shows…" لشرح المقارنة بين اللاجئين والقطّة.',
              successAr: 'يربط الاستنتاج بين صورة القطّة ومعاملة اللاجئين.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan a paragraph using a quotation bank from the lesson.',
              task: 'How does Auden present rejection?',
              success: 'Paragraph names a feature (refrain/contrast), quotes, explains.',
              doAr: 'خطّط لفقرة باستخدام بنك الاقتباسات الذي بُني في الحصّة.',
              taskAr: 'كيف يقدّم أودن صورة الرفض؟',
              successAr: 'فقرة تسمّي خاصّيّة (لازمة أو تضاد) وتقتبس وتشرح.',
            }),
          ],
        },
        {
          number: 4,
          pages: 'The Highwayman — Alfred Noyes',
          keyVocabulary: [
            { en: 'narrative', ar: 'سرد' },
            { en: 'imagery', ar: 'صور أدبية' },
            { en: 'metaphor', ar: 'استعارة' },
            { en: 'rhythm', ar: 'إيقاع' },
            { en: 'tragedy', ar: 'مأساة' },
          ],
          contextNote: {
            en: 'A 1906 narrative ballad set on a moonlit moor. Bess sacrifices herself to warn the highwayman of the redcoats waiting in ambush.',
            ar: 'قصيدة سردية من عام 1906 تدور في مستنقعات مقمرة. تضحّي بِس بنفسها لتحذير قاطع الطريق من الجنود ذوي المعاطف الحمراء المتربّصين به.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read Part 1; track the story like a film: who, where, when.',
              task: 'Select three quotations that build the moonlit setting ("ghostly galleon", "ribbon of moonlight").',
              success: 'Can quote three setting details accurately.',
              doAr: 'اقرأ الجزء الأوّل، وتتبّع القصّة كأنها فيلم: من، أين، متى.',
              taskAr:
                'اختر ثلاثة اقتباسات تبني الأجواء المقمرة (مثل "ghostly galleon" و"ribbon of moonlight").',
              successAr: 'يقدر الطالب على اقتباس ثلاث تفاصيل دقيقة عن المكان.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.5'],
              do: 'Read Part 2; model the extended metaphor of moon as "ghostly galleon".',
              task: 'Discuss why Noyes uses ship imagery on land.',
              success: 'Explains one effect of the moon-as-ship image.',
              doAr: 'اقرأ الجزء الثاني، ويعرض المعلّم نموذجًا للاستعارة الممتدّة "moon as ghostly galleon".',
              taskAr: 'ناقش لماذا يستعمل نويز صور السفن في مشهد برّي.',
              successAr: 'يشرح الطالب أثرًا واحدًا لصورة القمر كسفينة.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.5'],
              do: 'Model how to "zoom in" on a single word (e.g. "torrent" in "torrent of darkness").',
              task: 'Zoom in on one word: meaning, feeling, picture.',
              success: 'Gives meaning, feeling and picture for one word.',
              doAr: 'يعرض المعلّم نموذجًا للتركيز "zoom-in" على كلمة واحدة (مثل "torrent" في "torrent of darkness").',
              taskAr: 'ركّز على كلمة واحدة: المعنى، الإحساس، الصورة.',
              successAr: 'يقدّم الطالب المعنى والإحساس والصورة لكلمة واحدة.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.4', '7R.5'],
              do: 'Model analysis of Bess\'s death: "her musket shattered the moonlight".',
              task: "Write a paragraph on how Noyes makes Bess's death dramatic.",
              success: 'Paragraph zooms in on at least one word.',
              doAr: 'يعرض المعلّم تحليلًا نموذجيًا لموت بِس عند السطر "her musket shattered the moonlight".',
              taskAr: 'اكتب فقرة عن كيف يجعل نويز موت بِس مشهدًا دراميًا.',
              successAr: 'تركّز الفقرة "zoom-in" على كلمة واحدة على الأقل.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Recap zoom-in technique.',
              task: 'How does Noyes build a tragic mood?',
              success: 'Two paragraphs, two quotations, one zoom-in each.',
              doAr: 'راجع تقنية التركيز "zoom-in".',
              taskAr: 'كيف يبني نويز الحال المأساوية في القصيدة؟',
              successAr: 'فقرتان واقتباسان وتركيز واحد على كلمة في كلّ فقرة.',
            }),
          ],
        },
        {
          number: 5,
          pages: 'My Last Duchess — Robert Browning (extract)',
          keyVocabulary: [
            { en: 'monologue', ar: 'مونولوج' },
            { en: 'duke', ar: 'دوق' },
            { en: 'jealousy', ar: 'غيرة' },
            { en: 'control', ar: 'سيطرة' },
            { en: 'speaker', ar: 'متكلّم' },
          ],
          contextNote: {
            en: 'A dramatic monologue set in Renaissance Italy. The Duke shows a visitor a painting of his late wife and reveals — without meaning to — that he had her killed.',
            ar: 'مونولوج درامي تدور أحداثه في إيطاليا عصر النهضة. يُري الدوق ضيفه لوحة لزوجته الراحلة ويكشف من حيث لا يقصد أنه أمر بقتلها.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.4'],
              do: 'Read lines 1-24; gloss "Frà Pandolf", "countenance".',
              task: 'Answer five literal questions: who speaks, to whom, about whom, when, where.',
              success: 'Identifies speaker, listener, subject.',
              doAr: 'اقرأ الأسطر من 1 إلى 24، واشرح "Frà Pandolf" و"countenance".',
              taskAr: 'أجب عن خمسة أسئلة حرفية: من يتكلّم، إلى من، عن من، متى، أين.',
              successAr: 'يحدّد الطالب المتكلّم والمستمع وموضوع الحديث.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Read "I gave commands; / Then all smiles stopped together". Model the implied meaning.',
              task: 'Pair-talk: what does the Duke mean? Use "This suggests…".',
              success: "Voices an inference about the Duke's commands.",
              doAr: 'اقرأ السطرين "I gave commands; / Then all smiles stopped together"، ويعرض المعلّم نموذج المعنى الضمني.',
              taskAr: 'حوار ثنائي: ماذا يقصد الدوق؟ استخدم عبارة "This suggests…".',
              successAr: 'ينطق الطالب باستنتاج حول أوامر الدوق.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model a paragraph on jealousy using "She had / A heart… too soon made glad".',
              task: 'Annotate teacher model: highlight point, quotation, explanation.',
              success: 'Labels the three parts of a PEE paragraph.',
              doAr: 'يعرض المعلّم نموذج فقرة عن الغيرة باستخدام السطر "She had / A heart… too soon made glad".',
              taskAr: 'علِّق على نموذج المعلّم: أبرز النقطة والاقتباس والشرح.',
              successAr: 'يضع الطالب علامات على الأجزاء الثلاثة لفقرة PEE.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.5', '7W.1'],
              do: 'Model how the Duke\'s power shows in "Notice Neptune… / Taming a sea-horse".',
              task: 'Write a paragraph on how Browning presents the Duke as controlling.',
              success: 'Paragraph names a feature and explains character.',
              doAr: 'يعرض المعلّم نموذجًا لتجلّي قوّة الدوق في السطرين "Notice Neptune… / Taming a sea-horse".',
              taskAr: 'اكتب فقرة عن كيف يصوّر براوننغ الدوق بأنه شخصيّة مسيطرة.',
              successAr: 'تسمّي الفقرة سمة لغوية وتشرح الشخصية.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan: one paragraph on jealousy, one on power.',
              task: 'How does Browning present the Duke?',
              success: 'Both paragraphs use quotations and clear explanations.',
              doAr: 'خطّط: فقرة عن الغيرة وأخرى عن القوّة.',
              taskAr: 'كيف يقدّم براوننغ شخصية الدوق؟',
              successAr: 'فقرتان تستخدمان اقتباسات وشروحًا واضحة.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Caged Bird — Maya Angelou',
          keyVocabulary: [
            { en: 'symbolism', ar: 'رمزية' },
            { en: 'contrast', ar: 'تضاد' },
            { en: 'freedom', ar: 'حرّية' },
            { en: 'oppression', ar: 'اضطهاد' },
            { en: 'extended metaphor', ar: 'استعارة ممتدّة' },
          ],
          contextNote: {
            en: 'Angelou contrasts a free bird and a caged bird as an extended metaphor for freedom and racial oppression in 20th-century America.',
            ar: 'تضع أنجيلو طائرًا حرًّا في مقابل طائر محبوس في قفص بوصفها استعارة ممتدّة للحرّية والاضطهاد العرقي في أمريكا القرن العشرين.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.3'],
              do: 'Read poem; mark stanzas as "free bird" or "caged bird".',
              task: 'Make a two-column table: three quotations for each bird.',
              success: 'Table has six accurate quotations.',
              doAr: 'اقرأ القصيدة وضع علامة على كلّ مقطع: "free bird" أو "caged bird".',
              taskAr: 'اصنع جدولًا من عمودين فيه ثلاثة اقتباسات لكلّ طائر.',
              successAr: 'يحتوي الجدول على ستّة اقتباسات دقيقة.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.5'],
              do: 'Define "extended metaphor"; discuss what each bird represents.',
              task: 'Pair-talk: why does Angelou repeat the caged bird stanza?',
              success: 'Explains one reason for the repetition.',
              doAr: 'عرّف "extended metaphor"، وناقش ما يرمز إليه كلّ طائر.',
              taskAr: 'حوار ثنائي: لماذا تكرّر أنجيلو مقطع الطائر المحبوس؟',
              successAr: 'يشرح الطالب سببًا واحدًا للتكرار.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.9'],
              do: 'Model contrastive connectives: "whereas", "in contrast", "however".',
              task: 'Write three contrast sentences comparing the two birds.',
              success: 'Three sentences each use a different contrastive connective.',
              doAr: 'يعرض المعلّم نماذج لروابط التضاد: "whereas" و"in contrast" و"however".',
              taskAr: 'اكتب ثلاث جمل تضاد تقارن بين الطائرين.',
              successAr: 'تستعمل كلّ جملة من الجمل الثلاث رابط تضاد مختلفًا.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.5', '7W.1'],
              do: 'Model a paragraph on the caged bird using "his wings are clipped and his feet are tied".',
              task: 'Write a PEE paragraph on how Angelou presents the caged bird.',
              success: 'Paragraph zooms in on "clipped" or "tied".',
              doAr: 'يعرض المعلّم نموذج فقرة عن الطائر المحبوس باستخدام السطر "his wings are clipped and his feet are tied".',
              taskAr: 'اكتب فقرة PEE عن كيف تقدّم أنجيلو صورة الطائر المحبوس.',
              successAr: 'تركّز الفقرة على كلمة "clipped" أو "tied".',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: 'Plan a comparative paragraph: free bird vs caged bird.',
              task: 'Write one comparative paragraph using "whereas" or "however".',
              success: 'Paragraph quotes both birds and uses a contrast connective.',
              doAr: 'خطّط لفقرة مقارنة: الطائر الحرّ مقابل الطائر المحبوس.',
              taskAr: 'اكتب فقرة مقارنة واحدة باستخدام "whereas" أو "however".',
              successAr: 'تقتبس الفقرة من كلا الطائرين وتستخدم رابط تضاد.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'The Listeners — Walter de la Mare + HT1 assessment',
          keyVocabulary: [
            { en: 'atmosphere', ar: 'الجو العام' },
            { en: 'mystery', ar: 'غموض' },
            { en: 'phantom', ar: 'طيف' },
            { en: 'silence', ar: 'صمت' },
            { en: 'compare', ar: 'قارن' },
          ],
          contextNote: {
            en: 'Assessment week. A 1912 narrative poem of unexplained mystery. Pairs naturally with The Highwayman for the comparative assessment.',
            ar: 'أسبوع التقييم. قصيدة سردية من عام 1912 يكتنفها غموض لا تفسير له، وتقترن طبيعيًا مع The Highwayman في تقييم المقارنة.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read aloud; identify how de la Mare builds an eerie atmosphere.',
              task: 'List four quotations that create mystery ("moonlit door", "phantom listeners").',
              success: 'Quotes four atmosphere-building details.',
              doAr: 'اقرأ القصيدة بصوت عالٍ، وحدّد كيف يبني دو لا مير الأجواء المثيرة للريبة.',
              taskAr: 'اذكر أربعة اقتباسات تصنع الغموض (مثل "moonlit door" و"phantom listeners").',
              successAr: 'يقتبس الطالب أربعة تفاصيل تبني الجوّ العام.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Compare this poem to The Highwayman: both moonlit, both mysterious.',
              task: 'Pair-talk: which poem feels more frightening, and why?',
              success: 'Shares a comparative point with a quotation.',
              doAr: 'قارن هذه القصيدة بقصيدة The Highwayman: كلتاهما مقمرة وغامضة.',
              taskAr: 'حوار ثنائي: أيّ القصيدتين أكثر إثارةً للخوف، ولماذا؟',
              successAr: 'يشارك الطالب نقطة مقارنة مع اقتباس.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7R.6', '7W.1'],
              do: 'Model comparative sentence stems: "Both poems…", "However, de la Mare…", "Unlike Noyes…".',
              task: 'Write three comparative sentences using the stems.',
              success: 'Each sentence makes a clear comparison.',
              doAr: 'يعرض المعلّم بدايات جمل المقارنة: "Both poems…" و"However, de la Mare…" و"Unlike Noyes…".',
              taskAr: 'اكتب ثلاث جمل مقارنة باستخدام بدايات الجمل المعروضة.',
              successAr: 'تقدّم كلّ جملة مقارنة واضحة.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.6', '7W.4'],
              do: 'Model a 45-minute comparative paragraph: "Both poets use moonlight to create mood".',
              task: 'Draft one comparative paragraph on mood in two anthology poems.',
              success: 'Paragraph uses one quotation from each poem.',
              doAr: 'يعرض المعلّم نموذج فقرة مقارنة مدّتها 45 دقيقة: "Both poets use moonlight to create mood".',
              taskAr: 'اكتب مسوّدة فقرة مقارنة واحدة عن المزاج في قصيدتين من المختارات.',
              successAr: 'تستخدم الفقرة اقتباسًا واحدًا من كلّ قصيدة.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.3', '7R.6', '7W.1', '7W.4', '7W.9'],
              do: 'HT1 assessment: 45-minute comparative paragraph under timed conditions.',
              task: 'How do two poets create atmosphere?',
              success: 'Paragraph quotes both poems and compares effects.',
              doAr: 'تقييم النصف الأوّل: فقرة مقارنة مدّتها 45 دقيقة في ظروف زمنية محدّدة.',
              taskAr: 'كيف يصنع شاعران الأجواء العامّة؟',
              successAr: 'تقتبس الفقرة من كلتا القصيدتين وتقارن الآثار.',
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
        ar: 'إجابة تحليلية على قصّة قصيرة واحدة من قبل عام 1914 — "كيف يبني ديكنز/ويلز التوتّر في [المقتطف]؟" — 60 دقيقة.',
      },
      weeks: [
        {
          number: 8,
          pages: 'The Signalman — Charles Dickens (opening)',
          keyVocabulary: [
            { en: 'gothic', ar: 'قوطي' },
            { en: 'foreboding', ar: 'نذير' },
            { en: 'isolation', ar: 'عزلة' },
            { en: 'spectre', ar: 'شبح' },
            { en: 'cutting', ar: 'ممرّ محفور (cutting)' },
          ],
          contextNote: {
            en: 'Dickens (1866) wrote this after surviving the Staplehurst rail crash. The narrator visits a lonely signalman haunted by a warning ghost.',
            ar: 'كتب ديكنز هذه القصّة سنة 1866 بعد نجاته من حادث قطار Staplehurst. يزور الراوي عامل إشارات وحيدًا يطارده شبح يحمل التحذيرات.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the opening to "Halloa! Below there!". Gloss "cutting", "saturnine".',
              task: 'Select three quotations describing the setting as gloomy.',
              success: 'Quotes three accurate setting details.',
              doAr: 'اقرأ المقطع الافتتاحي حتى عبارة "Halloa! Below there!"، واشرح كلمتي "cutting" و"saturnine".',
              taskAr: 'اختر ثلاثة اقتباسات تصف المكان بأنه كئيب.',
              successAr: 'يقتبس الطالب ثلاث تفاصيل دقيقة عن المكان.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.1', '7R.4'],
              do: 'Discuss "depressing and forbidding air"; introduce the gothic genre.',
              task: 'Pair-talk: list three features that make this setting feel gothic.',
              success: 'Names three gothic features verbally.',
              doAr: 'ناقش عبارة "depressing and forbidding air"، وقدّم النوع الأدبي القوطي.',
              taskAr: 'حوار ثنائي: عدّد ثلاث ملامح تجعل المكان قوطيًّا.',
              successAr: 'يذكر الطالب شفهيًا ثلاث ملامح قوطيّة.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model PEE on the setting: point + "great dungeon" + explanation.',
              task: "Write one PEE paragraph on Dickens's description of the cutting.",
              success: 'Paragraph quotes one image and explains its effect.',
              doAr: 'يعرض المعلّم نموذج فقرة PEE عن المكان: نقطة + "great dungeon" + شرح.',
              taskAr: 'اكتب فقرة PEE واحدة عن وصف ديكنز للممرّ المحفور.',
              successAr: 'تقتبس الفقرة صورة واحدة وتشرح أثرها.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: "Model a structural feature: the narrator's slow descent into the cutting.",
              task: 'Annotate the descent paragraph; label two structural choices.',
              success: 'Labels two structural choices accurately.',
              doAr: 'يعرض المعلّم نموذجًا لخاصّية بنائية: نزول الراوي البطيء إلى الممرّ.',
              taskAr: 'علِّق على فقرة النزول وضع علامات على اختيارَيْن بنائيَّيْن.',
              successAr: 'يضع الطالب علامات دقيقة على اختيارَيْن بنائيَّيْن.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan a paragraph on the opening atmosphere.',
              task: 'How does Dickens make the opening feel threatening?',
              success: 'Two paragraphs use quotations and explain effects.',
              doAr: 'خطّط لفقرة عن الجو العام في الافتتاح.',
              taskAr: 'كيف يجعل ديكنز الافتتاح مهدّدًا؟',
              successAr: 'فقرتان تستخدمان اقتباسات وتشرحان الآثار.',
            }),
          ],
        },
        {
          number: 9,
          pages: 'The Signalman — middle and ending',
          keyVocabulary: [
            { en: 'tension', ar: 'توتّر' },
            { en: 'supernatural', ar: 'ما وراء الطبيعة' },
            { en: 'omen', ar: 'نذير' },
            { en: 'climax', ar: 'ذروة' },
            { en: 'narrator', ar: 'راوٍ' },
          ],
          contextNote: {
            en: 'Three visitations from a spectre, each before a disaster. Dickens leaves the cause of the final death ambiguous.',
            ar: 'يظهر الشبح ثلاث مرّات، كلّ مرّة قبل وقوع كارثة. يترك ديكنز سبب الموت في الخاتمة غامضًا.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the three visitations; track the order.',
              task: 'List the three warnings and the events that follow each.',
              success: 'Sequences all three warnings correctly.',
              doAr: 'اقرأ ظهورات الشبح الثلاثة وتتبّع ترتيبها.',
              taskAr: 'اذكر التحذيرات الثلاثة والأحداث التي تلت كلّ تحذير.',
              successAr: 'يرتّب الطالب التحذيرات الثلاثة ترتيبًا صحيحًا.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Discuss the final twist: did the driver shout the same words as the ghost?',
              task: "Pair-talk: is the ghost real, or in the signalman's mind?",
              success: 'Gives a reasoned answer with one quotation.',
              doAr: 'ناقش المفاجأة الختامية: هل صاح السائق بنفس كلمات الشبح؟',
              taskAr: 'حوار ثنائي: هل الشبح حقيقي أم هو من نسج خيال عامل الإشارات؟',
              successAr: 'يقدّم الطالب إجابة مدعومة باقتباس واحد.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.3', '7W.4'],
              do: 'Model how Dickens builds tension through short sentences ("For God\'s sake clear the way!").',
              task: 'Write four sentences that build tension, including one short, sharp sentence.',
              success: 'Sentences vary in length; one is deliberately short.',
              doAr: 'يعرض المعلّم نموذجًا لكيفية بناء ديكنز التوتّر بجمل قصيرة (مثل "For God\'s sake clear the way!").',
              taskAr: 'اكتب أربع جمل تبني التوتّر، على أن تكون إحداها قصيرة وحادّة.',
              successAr: 'تتفاوت الجمل في الطول، وإحداها قصيرة عن قصد.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how Dickens uses repetition ("Halloa! Below there!") to build tension.',
              task: 'Write a PEE paragraph on tension in one of the three warnings.',
              success: 'Paragraph names technique and explains.',
              doAr: 'يعرض المعلّم نموذج فقرة عن كيف يستعمل ديكنز التكرار (مثل "Halloa! Below there!") لبناء التوتّر.',
              taskAr: 'اكتب فقرة PEE عن التوتّر في تحذير واحد من التحذيرات الثلاثة.',
              successAr: 'تسمّي الفقرة التقنية وتشرحها.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: 'Plan two paragraphs: one on language, one on structure.',
              task: 'How does Dickens build tension at the ending?',
              success: 'Two paragraphs cover one language and one structural feature.',
              doAr: 'خطّط لفقرتين: واحدة عن اللغة وأخرى عن البنية.',
              taskAr: 'كيف يبني ديكنز التوتّر في الخاتمة؟',
              successAr: 'فقرتان تغطّيان خاصّية لغوية وخاصّية بنائية.',
            }),
          ],
        },
        {
          number: 10,
          pages: 'The Red Room — H. G. Wells',
          keyVocabulary: [
            { en: 'fear', ar: 'خوف' },
            { en: 'rationalism', ar: 'عقلانية' },
            { en: 'first person', ar: 'ضمير المتكلّم' },
            { en: 'shadow', ar: 'ظلّ' },
            { en: 'darkness', ar: 'ظلام' },
          ],
          contextNote: {
            en: 'Wells (1896) wrote a ghost story where the real horror is fear itself. A confident young man dares to spend the night in a haunted room.',
            ar: 'كتب ويلز عام 1896 قصّة أشباح يكون الرعب الحقيقي فيها هو الخوف نفسه. شابّ واثق من نفسه يجرؤ على قضاء ليلة في غرفة مسكونة.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.3'],
              do: 'Read the opening; identify the narrator\'s confident tone ("I can assure you").',
              task: "List three quotations showing the narrator's confidence.",
              success: 'Quotes three confident statements.',
              doAr: 'اقرأ المقطع الافتتاحي وحدّد نبرة الثقة عند الراوي (مثل "I can assure you").',
              taskAr: 'اذكر ثلاثة اقتباسات تظهر ثقة الراوي بنفسه.',
              successAr: 'يقتبس الطالب ثلاث تصريحات واثقة.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Compare the old custodians to the young narrator: who is more believable?',
              task: 'Pair-talk: how does Wells make us trust the narrator at first?',
              success: 'Gives one reason we trust the narrator.',
              doAr: 'قارن الحرّاس المسنّين بالراوي الشاب: من الأكثر مصداقية؟',
              taskAr: 'حوار ثنائي: كيف يجعلنا ويلز نثق بالراوي في البداية؟',
              successAr: 'يقدّم الطالب سببًا واحدًا للثقة بالراوي.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.3', '7W.9'],
              do: 'Model how sentence length shortens as fear grows ("My candle flared… It was gone").',
              task: 'Rewrite a short passage making sentences gradually shorter.',
              success: 'Sentences clearly shorten across the passage.',
              doAr: 'يعرض المعلّم نموذجًا لتقصّر الجمل كلّما اشتدّ الخوف (مثل "My candle flared… It was gone").',
              taskAr: 'أعد كتابة مقطع قصير بحيث تصير جمله أقصر تدريجيًا.',
              successAr: 'تتقاصر الجمل بوضوح على امتداد المقطع.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how Wells personifies the shadows.',
              task: "Write a PEE paragraph on Wells's presentation of fear.",
              success: 'Paragraph identifies a language feature and explains.',
              doAr: 'يعرض المعلّم نموذج فقرة عن كيف يجسّد ويلز الظلال (تشخيص).',
              taskAr: 'اكتب فقرة PEE عن تقديم ويلز لمشاعر الخوف.',
              successAr: 'تحدّد الفقرة سمة لغوية وتشرحها.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: "Plan a paragraph on the narrator's change from confident to fearful.",
              task: 'How does Wells present fear in The Red Room?',
              success: 'Two paragraphs track the change in the narrator.',
              doAr: 'خطّط لفقرة عن تحوّل الراوي من واثق إلى خائف.',
              taskAr: 'كيف يقدّم ويلز مشاعر الخوف في The Red Room؟',
              successAr: 'فقرتان تتتبّعان التحوّل في شخصيّة الراوي.',
            }),
          ],
        },
        {
          number: 11,
          pages: 'The Necklace — Guy de Maupassant',
          keyVocabulary: [
            { en: 'irony', ar: 'مفارقة' },
            { en: 'twist', ar: 'مفاجأة' },
            { en: 'pride', ar: 'كبرياء' },
            { en: 'social class', ar: 'الطبقة الاجتماعية' },
            { en: 'protagonist', ar: 'بطل' },
          ],
          contextNote: {
            en: 'Maupassant (1884): Mathilde borrows a necklace, loses it, and works ten years to replace it — only to learn the original was fake.',
            ar: 'كتبها موباسان عام 1884: تستعير ماتيلد عقدًا وتفقده، ثم تعمل عشر سنوات لتعويضه، لتكتشف في النهاية أن الأصل كان مزيّفًا.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.2', '7R.4'],
              do: 'Read the story in two halves; summarise the plot in six sentences.',
              task: 'Write a six-sentence plot summary.',
              success: 'Summary covers borrowing, loss, debt and twist.',
              doAr: 'اقرأ القصّة على جزأين، ولخّص الحبكة في ستّ جمل.',
              taskAr: 'اكتب ملخّصًا للحبكة في ستّ جمل.',
              successAr: 'يغطّي الملخّص الاستعارة والفقدان والدين والمفاجأة.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.4', '7SL.1'],
              do: 'Define dramatic irony; discuss the final reveal: "my necklace was paste".',
              task: "Pair-talk: who is to blame for Mathilde's ten lost years?",
              success: 'Reasoned answer naming Mathilde or society.',
              doAr: 'عرّف "dramatic irony"، وناقش الكشف الأخير: "my necklace was paste".',
              taskAr: 'حوار ثنائي: من المسؤول عن السنوات العشر الضائعة من حياة ماتيلد؟',
              successAr: 'إجابة مدعومة بالأسباب تحمّل المسؤولية لماتيلد أو للمجتمع.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.4', '7W.9'],
              do: 'Model Maupassant\'s lists of longing ("the silent antechambers… the perfumed little rooms").',
              task: "Write a list of three describing a character's longing.",
              success: 'List of three is grammatically parallel.',
              doAr: 'يعرض المعلّم نموذجًا لقوائم الشوق عند موباسان (مثل "the silent antechambers… the perfumed little rooms").',
              taskAr: 'اكتب قائمة من ثلاثة عناصر تصف شوق شخصية ما.',
              successAr: 'القائمة الثلاثيّة متوازية نحويًا.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.1', '7R.5'],
              do: 'Model a paragraph on how the twist makes us rethink Mathilde.',
              task: "Write a PEE paragraph on Maupassant's use of irony.",
              success: 'Paragraph quotes the reveal and explains the irony.',
              doAr: 'يعرض المعلّم نموذج فقرة عن كيف تدفعنا المفاجأة إلى إعادة التفكير في شخصية ماتيلد.',
              taskAr: 'اكتب فقرة PEE عن استخدام موباسان للمفارقة.',
              successAr: 'تقتبس الفقرة لحظة الكشف وتشرح المفارقة.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7W.4', '7W.9'],
              do: "Plan two paragraphs: one on Mathilde's pride, one on the twist.",
              task: 'How does Maupassant present Mathilde?',
              success: 'Two paragraphs use quotations and track her change.',
              doAr: 'خطّط لفقرتين: واحدة عن كبرياء ماتيلد وأخرى عن المفاجأة.',
              taskAr: 'كيف يقدّم موباسان شخصية ماتيلد؟',
              successAr: 'فقرتان تستخدمان اقتباسات وتتتبّعان تحوّلها.',
            }),
          ],
        },
        {
          number: 12,
          pages: 'Comparison: tension in three pre-1914 stories',
          keyVocabulary: [
            { en: 'compare', ar: 'قارن' },
            { en: 'method', ar: 'أسلوب' },
            { en: 'effect', ar: 'أثر' },
            { en: 'similarity', ar: 'تشابه' },
            { en: 'difference', ar: 'اختلاف' },
          ],
          contextNote: {
            en: 'All three writers build tension differently: Dickens through setting/repetition, Wells through sentence length, Maupassant through dramatic irony.',
            ar: 'يبني الكُتّاب الثلاثة التوتّر بطرق مختلفة: ديكنز عبر المكان والتكرار، وويلز عبر طول الجمل، وموباسان عبر المفارقة الدرامية.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.6', '7R.3'],
              do: 'Recap one tension quotation from each story.',
              task: 'Fill a grid: writer / quotation / method / effect for all three stories.',
              success: 'Grid has three accurate quotations and three named methods.',
              doAr: 'راجع اقتباسًا واحدًا يبني التوتّر من كلّ قصّة.',
              taskAr: 'املأ جدولًا: الكاتب / الاقتباس / الأسلوب / الأثر للقصص الثلاث.',
              successAr: 'يحتوي الجدول على ثلاثة اقتباسات دقيقة وثلاثة أساليب مسمّاة.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.6', '7SL.2'],
              do: 'Discuss which writer builds tension best, and why.',
              task: 'Pair-talk: rank the three stories for tension with reasons.',
              success: 'Ranking uses one quotation as evidence.',
              doAr: 'ناقش أيّ الكُتّاب أفضل في بناء التوتّر، ولماذا.',
              taskAr: 'حوار ثنائي: رتّب القصص الثلاث بحسب التوتّر مع ذكر الأسباب.',
              successAr: 'يستعمل الترتيب اقتباسًا واحدًا دليلًا.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7R.6', '7W.1'],
              do: 'Model comparative paragraph: "Both Dickens and Wells… However, Dickens uses…".',
              task: 'Write one comparative paragraph using the modelled stems.',
              success: 'Paragraph quotes two stories and uses a contrast connective.',
              doAr: 'يعرض المعلّم نموذج فقرة مقارنة: "Both Dickens and Wells… However, Dickens uses…".',
              taskAr: 'اكتب فقرة مقارنة واحدة باستخدام بدايات الجمل المعروضة.',
              successAr: 'تقتبس الفقرة من قصّتين وتستخدم رابط تضاد.',
            }),
            lesson({
              focus: 'application',
              skills: ['7R.6', '7W.4'],
              do: 'Model a second paragraph comparing Dickens and Maupassant on endings.',
              task: 'Write a comparative paragraph on the endings of two stories.',
              success: 'Paragraph quotes both endings and names one similarity or difference.',
              doAr: 'يعرض المعلّم نموذج فقرة ثانية تقارن بين خاتمتي ديكنز وموباسان.',
              taskAr: 'اكتب فقرة مقارنة عن خاتمتي قصّتين.',
              successAr: 'تقتبس الفقرة من كلتا الخاتمتين وتسمّي تشابهًا أو اختلافًا واحدًا.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7W.1', '7R.6', '7W.9'],
              do: 'Plan a full comparative essay on tension across three stories.',
              task: 'Draft three comparative paragraphs: one per story pairing.',
              success: 'Three paragraphs, each with two quotations and a clear comparison.',
              doAr: 'خطّط لمقالة مقارنة كاملة عن التوتّر في القصص الثلاث.',
              taskAr: 'اكتب مسوّدة ثلاث فقرات مقارنة: فقرة لكلّ اقتران بين قصّتين.',
              successAr: 'ثلاث فقرات في كلّ منها اقتباسان ومقارنة واضحة.',
            }),
          ],
        },
        {
          number: 13,
          pages: 'The Signalman revisited — HT2 assessment',
          keyVocabulary: [
            { en: 'analyse', ar: 'حلِّل' },
            { en: 'tension', ar: 'توتّر' },
            { en: 'evidence', ar: 'دليل' },
            { en: 'method', ar: 'أسلوب' },
            { en: 'response', ar: 'إجابة' },
          ],
          contextNote: {
            en: 'Assessment week: 60-minute analytical response on how Dickens builds tension in The Signalman.',
            ar: 'أسبوع التقييم: إجابة تحليلية مدّتها 60 دقيقة عن كيف يبني ديكنز التوتّر في قصّة The Signalman.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['7R.1', '7R.3'],
              do: 'Re-read three key Signalman passages: descent, second warning, final scene.',
              task: 'Build a quotation bank of six tension-building details.',
              success: 'Six quotations covering setting, language and structure.',
              doAr: 'أعد قراءة ثلاثة مقاطع رئيسية من The Signalman: النزول، التحذير الثاني، المشهد الأخير.',
              taskAr: 'ابنِ بنكًا من ستّة اقتباسات تُسهم في بناء التوتّر.',
              successAr: 'ستّة اقتباسات تغطّي المكان واللغة والبنية.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['7R.5', '7SL.1'],
              do: "Discuss Dickens's three main tension methods: setting, repetition, ambiguity.",
              task: 'Pair-talk: match each quotation to one of the three methods.',
              success: 'Matches all six quotations to a method.',
              doAr: 'ناقش أساليب ديكنز الثلاثة الرئيسة لبناء التوتّر: المكان، التكرار، الغموض.',
              taskAr: 'حوار ثنائي: طابق كلّ اقتباس مع أحد الأساليب الثلاثة.',
              successAr: 'يطابق الطالب الاقتباسات الستّة كلّها مع الأساليب.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['7W.1', '7W.4'],
              do: 'Model an introduction: "Dickens builds tension through setting, language and structure".',
              task: 'Write an introduction and one body paragraph on setting.',
              success: 'Introduction names three methods; paragraph quotes the cutting.',
              doAr: 'يعرض المعلّم نموذج مقدّمة: "Dickens builds tension through setting, language and structure".',
              taskAr: 'اكتب مقدّمة وفقرة جسمية واحدة عن المكان.',
              successAr: 'المقدّمة تسمّي ثلاثة أساليب، والفقرة تقتبس وصف الممرّ المحفور.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.1', '7W.4'],
              do: 'Model a body paragraph on language ("For God\'s sake clear the way!").',
              task: "Write a second body paragraph on Dickens's use of language.",
              success: 'Paragraph quotes a line and names a language feature.',
              doAr: 'يعرض المعلّم نموذج فقرة جسمية عن اللغة (مثل "For God\'s sake clear the way!").',
              taskAr: 'اكتب فقرة جسمية ثانية عن استخدام ديكنز للّغة.',
              successAr: 'تقتبس الفقرة سطرًا وتسمّي خاصّية لغوية.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.3', '7R.5', '7W.1', '7W.4', '7W.9'],
              do: 'HT2 assessment: 60-minute analytical response under timed conditions.',
              task: 'How does Dickens build tension in The Signalman?',
              success:
                'Three paragraphs each quote and explain one method (setting, language, structure).',
              doAr: 'تقييم النصف الثاني: إجابة تحليلية مدّتها 60 دقيقة في ظروف زمنية محدّدة.',
              taskAr: 'كيف يبني ديكنز التوتّر في قصّة The Signalman؟',
              successAr: 'ثلاث فقرات تقتبس وتشرح كلّ منها أسلوبًا واحدًا (المكان، اللغة، البنية).',
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
      assessment: {
        en: 'Shakespeare performance + 30-minute analytical paragraph on a scene.',
        ar: 'أداء مَشهد شكسبيري + فقرة تحليلية مدّتها 30 دقيقة حول أحد المشاهد.',
      },
      weeks: [
        {
          number: 2,
          pages: 'Act 1.1 — Court of Theseus',
          keyVocabulary: [
            { en: 'court', ar: 'البلاط الملكي' },
            { en: 'decree', ar: 'مرسوم' },
            { en: 'forbidden', ar: 'محظور' },
            { en: 'defiance', ar: 'تحدٍّ / عصيان' },
            { en: 'obedience', ar: 'طاعة' },
          ],
          contextNote: {
            en: "Athens court. Egeus drags Hermia before Theseus because she refuses Demetrius. Athenian law gives the father power over his daughter's match.",
            ar: 'بلاط أثينا. يجرّ إيجيوس ابنته هيرميا أمام ثيسيوس لأنّها ترفض الزواج من ديميتريوس. يمنح القانون الأثيني الأبَ سلطةَ اختيار زوج ابنته.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read Theseus\'s opening + Egeus\'s complaint aloud. Annotate "Full of vexation come I, with complaint / Against my child".',
              doAr: 'اقرؤوا بصوتٍ عالٍ مَطلع كلام ثيسيوس وشكوى إيجيوس، ثمّ علّقوا على عبارة "Full of vexation come I, with complaint / Against my child".',
              task: 'Highlight every word in 1.1 lines 1–45 that signals law, ownership or hierarchy.',
              taskAr:
                'ظلّلوا كلّ كلمة في الأسطر 1–45 من المشهد 1.1 تدلّ على القانون أو التملّك أو التراتُب الهرَمي.',
              success: 'Lists 6+ legal/hierarchical words.',
              successAr: 'يُدرج الطالب ستّ كلمات أو أكثر من معجم القانون أو التراتُب الهرَمي.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7SL.1', '7SL.2'],
              do: 'Hot-seat Hermia. Model: "I would my father look\'d but with my eyes" — what does she risk?',
              doAr: 'مَقعَد الاستجواب لشخصية هيرميا. النموذج: "I would my father look\'d but with my eyes" — ماذا تخاطر هيرميا بفقدانه؟',
              task: "Pair-debate: is Hermia's defiance brave or foolish?",
              taskAr: 'نقاشٌ ثنائي: هل تحدّي هيرميا شجاعةٌ أم تهوّر؟',
              success: 'Contributes a point supported by a short quotation.',
              successAr: 'يُقدّم الطالب نقطةً مدعومةً باقتباس قصير.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "Shakespeare presents the Athenian court as ___ through ___, which suggests ___".',
              doAr: 'النموذج: "يُقدّم شكسبير البلاط الأثيني على أنّه ___ من خلال ___، ممّا يُلمِح إلى ___".',
              task: 'Write one paragraph on how Theseus\'s "die the death, or to abjure / For ever the society of men" establishes authority.',
              taskAr:
                'اكتبوا فقرةً واحدة تبيّنون فيها كيف يُرسّخ قول ثيسيوس "die the death, or to abjure / For ever the society of men" سلطتَه.',
              success: 'Paragraph has claim, embedded quote, one inference about power.',
              successAr: 'تشتمل الفقرة على دعوى واضحة واقتباسٍ مُضمّن واستنتاجٍ واحد عن السلطة.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.1', '7W.3'],
              do: 'Zoom in on "decree" — connotations of permanence, law, public record.',
              doAr: 'ركّزوا على كلمة "decree" وما تحمله من إيحاءات الديمومة والقانون والتسجيل الرسمي.',
              task: 'Write a paragraph zooming in on "obedience" or "decree".',
              taskAr: 'اكتبوا فقرةً تُحلّلون فيها بدقّة كلمة "obedience" أو "decree".',
              success: 'Explores at least two layers of meaning.',
              successAr: 'يستكشف الطالب طبقتَين على الأقلّ من المعنى.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap paragraph structure.',
              doAr: 'مراجعةٌ سريعة لبنية الفقرة التحليلية.',
              task: "How does Shakespeare present Hermia's predicament in Act 1.1?",
              taskAr: 'كيف يُقدّم شكسبير ورطة هيرميا في المشهد 1.1؟',
              success: 'Clear argument, two embedded quotations, three Tier-2 words.',
              successAr:
                'يبني الطالب حجّةً واضحة، ويُضمّن اقتباسَين، ويوظّف ثلاث كلمات من المستوى الثاني.',
            }),
          ],
        },
        {
          number: 3,
          pages: 'Act 2.1 — Fairy realm',
          keyVocabulary: [
            { en: 'enchantment', ar: 'سحرٌ آسر' },
            { en: 'supernatural', ar: 'خارقٌ للطبيعة' },
            { en: 'mischief', ar: 'شيطنة / عبث' },
            { en: 'jealousy', ar: 'غَيرة' },
            { en: 'hierarchy', ar: 'تراتُب هرَمي' },
          ],
          contextNote: {
            en: 'The wood: Puck boasts of mischief; Oberon and Titania quarrel over a changeling boy. The supernatural quarrel disorders nature itself.',
            ar: 'في الغابة: يتفاخر باك بشيطنته، ويتشاجر أوبيرون وتيتانيا على صبيٍّ مُتبدَّل. ويُخلّ خلافهما الخارق بنظام الطبيعة نفسها.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.5'],
              do: 'Read Titania\'s "forgeries of jealousy" speech. Map the disorders (winds, fogs, rivers, corn, sheep).',
              doAr: 'اقرؤوا خطاب تيتانيا "forgeries of jealousy"، ثمّ ارسموا خريطةً لمظاهر الخلل (الرياح، الضباب، الأنهار، الحبوب، الأغنام).',
              task: 'Underline every image of disorder in lines 81–117.',
              taskAr: 'ضعوا خطّاً تحت كلّ صورة من صور الخلل في الأسطر 81–117.',
              success: 'Lists 5+ disorder images linked to the fairy quarrel.',
              successAr: 'يُدرج الطالب خمس صور للخلل أو أكثر، مربوطةً بشِجار الجنّ.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7R.6', '7SL.1'],
              do: "Compare Theseus's court (Week 2) with the fairy realm. In court, law silences women; in the wood, Titania matches Oberon line for line.",
              doAr: 'قارنوا بين بلاط ثيسيوس (الأسبوع الثاني) وعالم الجنّ. ففي البلاط، يُسكِت القانون النساء، أمّا في الغابة فتُسايِر تيتانيا أوبيرون سطراً بسطر.',
              task: 'In threes, list three differences between court and wood.',
              taskAr: 'في مجموعاتٍ ثلاثية، أحصُوا ثلاثة فروق بين البلاط والغابة.',
              success:
                'Identifies differences in power, language, setting; supports with quotation.',
              successAr: 'يُحدّد الطالب فروقاً في السلطة واللغة والمكان، ويدعمها باقتباس.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: "Model: \"Shakespeare presents Titania as defiant because she refuses Oberon's demand: 'Set your heart at rest: / The fairy land buys not the child of me.'\"",
              doAr: 'النموذج: "يُقدّم شكسبير تيتانيا متمرّدةً لأنّها ترفض مطلب أوبيرون: \'Set your heart at rest: / The fairy land buys not the child of me.\'"',
              task: 'Write a paragraph on how Shakespeare presents the supernatural in 2.1.',
              taskAr:
                'اكتبوا فقرةً تبيّنون فيها كيف يُقدّم شكسبير العنصر الخارق للطبيعة في المشهد 2.1.',
              success:
                'Paragraph names a method (imagery, blank verse, repetition), embeds a quote, infers an effect.',
              successAr:
                'تذكر الفقرة وسيلةً أدبية (الصور، الشعر المُرسَل، التكرار)، وتُضمّن اقتباساً، وتستنتج أثَراً.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.2', '7W.3'],
              do: 'Demonstrate connecting two quotations with "Furthermore".',
              doAr: 'اعرضوا كيفية الرَّبط بين اقتباسَين باستخدام أداة "Furthermore".',
              task: "Add a second paragraph to yesterday's work on Oberon's plotting.",
              taskAr: 'أضيفوا فقرةً ثانية إلى عمل الأمس عن مكائد أوبيرون.',
              success: 'Pupils link two paragraphs cohesively; one Tier-2 word used.',
              successAr:
                'يربط الطالب بين فقرتَين برباطٍ سلس، ويوظّف كلمةً واحدة من المستوى الثاني.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap "whereas" and "by contrast" for comparison.',
              doAr: 'مراجعةُ أدوات المقارنة "whereas" و"by contrast".',
              task: 'How does Shakespeare present the quarrel between Oberon and Titania?',
              taskAr: 'كيف يُقدّم شكسبير الشِّجار بين أوبيرون وتيتانيا؟',
              success: 'Comparative language, two quotations, explains effect on natural world.',
              successAr: 'يوظّف الطالب لغةَ المقارنة واقتباسَين، ويشرح الأثر على عالم الطبيعة.',
            }),
          ],
        },
        {
          number: 4,
          pages: "Act 3.1 — Bottom's transformation",
          keyVocabulary: [
            { en: 'transformation', ar: 'تحوّل' },
            { en: 'absurdity', ar: 'عبثيّة' },
            { en: 'dramatic-irony', ar: 'مفارقة درامية' },
            { en: 'comedy', ar: 'كوميديا' },
            { en: 'oblivious', ar: 'غافل' },
          ],
          contextNote: {
            en: 'The Mechanicals rehearse "Pyramus and Thisbe". Puck conjures an ass\'s head onto Bottom; Titania (drugged) falls in love. Prose vs verse marks the comic gulf.',
            ar: 'يتدرّب الحرفيّون على مسرحية "Pyramus and Thisbe". يُلبس باك رأس حمار لبوتُم، فتقع تيتانيا في غرامه (وهي تحت تأثير سحرٍ مُخدِّر). التبايُن بين النثر والشعر يَكشف عن الهوّة الكوميدية.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Read Titania\'s "What angel wakes me from my flowery bed?" alongside Bottom\'s "let them play it in blank verse".',
              doAr: 'اقرؤوا بيت تيتانيا "What angel wakes me from my flowery bed?" بمحاذاة كلام بوتُم "let them play it in blank verse".',
              task: 'Mark the prose/verse switch on the scene.',
              taskAr: 'ضعوا علامةً على موضع الانتقال من النثر إلى الشعر في المشهد.',
              success:
                'Identifies the switch and explains it signals status / comedy / supernatural.',
              successAr:
                'يُحدّد الطالب موضع الانتقال ويشرح أنّه دالٌّ على المكانة الاجتماعية أو الكوميديا أو الخارق.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7SL.2', '7SL.3'],
              do: "Define dramatic irony: audience knows Bottom has an ass's head; Bottom does not.",
              doAr: 'عرِّفوا المفارقة الدرامية: الجمهور يعلم أنّ بوتُم يحمل رأس حمار، أمّا هو فلا يعلم.',
              task: 'Perform a 90-second extract in pairs. Discuss what makes it funny.',
              taskAr: 'أدّوا مقطعاً مدّته تسعون ثانية في ثنائيّات، ثمّ ناقشوا ما يجعله مُضحكاً.',
              success: 'Names dramatic irony, absurdity or transformation as a source of comedy.',
              successAr:
                'يُسمّي الطالب المفارقة الدرامية أو العبثية أو التحوّل بوصفها مصدراً للكوميديا.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: "Model: \"Shakespeare creates comedy through dramatic irony when Titania declares 'I love thee' to a man wearing an ass's head.\"",
              doAr: 'النموذج: "يصنع شكسبير الكوميديا عبر المفارقة الدرامية حين تُعلن تيتانيا \'I love thee\' لرجلٍ يحمل رأس حمار."',
              task: 'Write a paragraph on how Shakespeare creates comedy in Act 3.1.',
              taskAr: 'اكتبوا فقرةً تبيّنون فيها كيف يصنع شكسبير الكوميديا في المشهد 3.1.',
              success: 'Uses "dramatic irony", embeds a quote, infers audience effect.',
              successAr:
                'يستخدم الطالب مصطلح "المفارقة الدرامية"، ويُضمّن اقتباساً، ويستنتج الأثر في الجمهور.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: 'Analyse Bottom\'s obliviousness: "I see their knavery: this is to make an ass of me".',
              doAr: 'حلِّلوا غفلة بوتُم في عبارة "I see their knavery: this is to make an ass of me".',
              task: 'Write a paragraph zooming in on "oblivious" or "absurdity".',
              taskAr: 'اكتبوا فقرةً تُحلّلون فيها بدقّة كلمة "oblivious" أو "absurdity".',
              success: "Explains how Bottom's lack of awareness deepens comedy.",
              successAr: 'يشرح الطالب كيف تُعمِّق غفلةُ بوتُم البُعدَ الكوميدي.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap: name method, embed quote, explain effect.',
              doAr: 'مراجعة: سمِّ الوسيلة، وضمِّن الاقتباس، واشرح الأثر.',
              task: 'How does Shakespeare make Act 3.1 entertaining?',
              taskAr: 'كيف يجعل شكسبير المشهد 3.1 مُمتعاً؟',
              success:
                'Two distinct methods (e.g. dramatic irony, prose/verse contrast), each with quotation.',
              successAr:
                'يوظّف الطالب وسيلتَين متمايزتَين (كالمفارقة الدرامية والتباين بين النثر والشعر)، مع اقتباسٍ لكلٍّ منهما.',
            }),
          ],
        },
        {
          number: 5,
          pages: 'Act 5.1 — Play-within-a-play',
          keyVocabulary: [
            { en: 'meta-theatre', ar: 'مسرحٌ موازٍ / مسرحٌ داخل المسرح' },
            { en: 'framing', ar: 'تأطير' },
            { en: 'audience', ar: 'الجمهور' },
            { en: 'performance', ar: 'أداء' },
            { en: 'resolution', ar: 'حلّ / خاتمة' },
          ],
          contextNote: {
            en: 'Lovers reconciled and married. Mechanicals perform Pyramus and Thisbe at court. We watch them watching a play — meta-theatre. Puck closes by breaking the frame.',
            ar: 'يصطلح العشّاق ويتزوّجون. ويُؤدّي الحرفيّون مسرحية "Pyramus and Thisbe" في البلاط، فنُشاهدهم وهم يُشاهدون مسرحيّة — وهذا هو المسرح الموازي. ويختم باك بكسر الإطار الدرامي.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.5'],
              do: 'Read Theseus: "The best in this kind are but shadows; and the worst are no worse, if imagination amend them." Gloss "shadows" = actors.',
              doAr: 'اقرؤوا قول ثيسيوس: "The best in this kind are but shadows; and the worst are no worse, if imagination amend them." واشرحوا أنّ "shadows" تعني الممثّلين.',
              task: 'Label nested layers of audience: real / court / Mechanicals / characters.',
              taskAr:
                'ضعوا تسمياتٍ لطبقات الجمهور المتداخلة: الجمهور الواقعي / البلاط / الحرفيّون / الشخصيات.',
              success: 'Identifies three nested levels; links to meta-theatre.',
              successAr: 'يُحدّد الطالب ثلاث طبقات متداخلة، ويربطها بمفهوم المسرح الموازي.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7R.3', '7R.6', '7SL.1'],
              do: 'Why does Shakespeare end with Puck\'s speech to us? "If we shadows have offended, / Think but this…"',
              doAr: 'لماذا يختم شكسبير المسرحية بخطاب باك إلينا؟ "If we shadows have offended, / Think but this…"',
              task: 'Pair-discuss: does the play offer real resolution, or does Puck unsettle it?',
              taskAr: 'نقاشٌ ثنائي: هل تُقدّم المسرحية حلًّا فِعليًّا، أم أنّ باك يُربك ذلك الحلّ؟',
              success: 'Articulates a view on resolution with reference to Puck or Theseus.',
              successAr: 'يُعبّر الطالب عن رأيٍ في الخاتمة مُستنداً إلى باك أو ثيسيوس.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "Shakespeare frames the Mechanicals\' play within the court\'s wedding, drawing attention to performance itself."',
              doAr: 'النموذج: "يُؤطّر شكسبير مسرحيّة الحرفيّين داخل عُرس البلاط، فيلفت الانتباه إلى فعل الأداء نفسه."',
              task: 'Write a paragraph on the play-within-a-play as a comment on theatre.',
              taskAr: 'اكتبوا فقرةً عن المسرحية داخل المسرحية باعتبارها تعليقاً على فنّ المسرح.',
              success: 'Uses "framing" or "meta-theatre", embeds a quote, explains an effect.',
              successAr:
                'يستخدم الطالب مصطلحَي "framing" أو "meta-theatre"، ويُضمّن اقتباساً، ويشرح الأثر.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: 'Analyse Puck\'s direct address "Give me your hands, if we be friends."',
              doAr: 'حلِّلوا الخطاب المباشر من باك إلى الجمهور: "Give me your hands, if we be friends."',
              task: "Write a paragraph on Puck's closing speech and its effect on the audience.",
              taskAr: 'اكتبوا فقرةً عن خاتمة باك وأثرها في الجمهور.',
              success: 'Explains how direct address creates intimacy or reflection on illusion.',
              successAr:
                'يشرح الطالب كيف يُولّد الخطاب المباشر شعوراً بالحميمية أو تأمّلاً في الوهم المسرحي.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Recap: resolution = marriages, harmony, return from disorder.',
              doAr: 'مراجعة: الحلّ = الزيجات والوئام والعودة من الفوضى.',
              task: 'How does Shakespeare resolve the play in Act 5.1?',
              taskAr: 'كيف يحلّ شكسبير عُقدة المسرحية في المشهد 5.1؟',
              success: "Addresses both marriages and Puck's unsettling final speech.",
              successAr: 'يتناول الطالب الزيجات وخاتمة باك المُربِكة على حدٍّ سواء.',
            }),
          ],
        },
        {
          number: 6,
          pages: 'Cross-act comparison: love and power',
          keyVocabulary: [
            { en: 'parallel', ar: 'تَوازٍ' },
            { en: 'motif', ar: 'موتيف / فكرةٌ متكرّرة' },
            { en: 'comic-resolution', ar: 'حلٌّ كوميدي' },
            { en: 'harmony', ar: 'وئام' },
            { en: 'contrast', ar: 'تباين' },
          ],
          contextNote: {
            en: 'Court (1.1) imposes order through law; the wood (2.1, 3.1) suspends it; final court (5.1) re-imposes a transformed order. Love and power are the twin motifs.',
            ar: 'البلاط (1.1) يفرض النظام عبر القانون، والغابة (2.1 و3.1) تُعطّله، ثمّ يعود البلاط في المشهد الختامي (5.1) ليفرض نظاماً مُتحوّلاً. الحبّ والسلطة هما الموتيفان التوأمان.',
          },
          lessons: [
            lesson({
              focus: 'consolidation-reading',
              skills: ['7R.5', '7R.6'],
              do: 'Build a comparison grid: Theseus/Hippolyta, Oberon/Titania, four lovers, Bottom/Titania. Love and power columns.',
              doAr: 'ابنوا شبكة مقارنة: ثيسيوس/هيبوليتا، أوبيرون/تيتانيا، العشّاق الأربعة، بوتُم/تيتانيا. مع عمودَين للحبّ والسلطة.',
              task: 'Complete the grid in books with one quotation per pairing.',
              taskAr: 'أكملوا الشبكة في الدفاتر، مع اقتباسٍ واحد لكلّ ثنائي.',
              success: 'Grid contains four pairings with at least one quotation each.',
              successAr: 'تشمل الشبكة أربعة أزواج، مع اقتباسٍ واحد لكلّ زوج على الأقلّ.',
            }),
            lesson({
              focus: 'consolidation-discussion',
              skills: ['7R.6', '7SL.1', '7SL.3'],
              do: 'Model: "Whereas the court silences Hermia, the wood gives Titania a voice. Both, however, end in marriage."',
              doAr: 'النموذج: "في حين يُسكِت البلاط هيرميا، تمنح الغابة تيتانيا صوتاً؛ غير أنّ المسارَين ينتهيان معاً بالزواج."',
              task: 'Class debate: does the play celebrate love or expose it as absurd?',
              taskAr: 'نقاشٌ صَفّي: هل تحتفي المسرحية بالحبّ، أم تكشف عبثيّته؟',
              success: 'Uses "whereas" or "by contrast"; references at least two scenes.',
              successAr: 'يستخدم الطالب "whereas" أو "by contrast"، ويستشهد بمشهدَين على الأقلّ.',
            }),
            lesson({
              focus: 'explicit-writing',
              skills: ['7W.1', '7W.4'],
              do: 'Model: "In Act 1.1, Theseus warns Hermia she must \'die the death\'; by Act 5.1, the same Duke presides over her marriage to Lysander."',
              doAr: 'النموذج: "في المشهد 1.1، يُنذِر ثيسيوس هيرميا بأنّها لا بدّ أن \'die the death\'؛ ثمّ في المشهد 5.1، يُشرف الدوق نفسه على زواجها من ليساندر."',
              task: 'Write a comparative paragraph on authority across the play.',
              taskAr: 'اكتبوا فقرةً مقارنة عن السلطة عبر المسرحية.',
              success:
                'Compares two scenes, embeds two quotations, identifies a shift or parallel.',
              successAr:
                'يقارن الطالب بين مشهدَين، ويُضمّن اقتباسَين، ويُحدّد تحوّلاً أو تَوازياً.',
            }),
            lesson({
              focus: 'application',
              skills: ['7W.3', '7W.4'],
              do: "Use \"motif\" — transformation runs from Hermia's defiance to Bottom's ass-head to the lovers' shifting affections.",
              doAr: 'استخدموا مصطلح "motif" — يسري التحوّل من تحدّي هيرميا، إلى رأس حمار بوتُم، إلى عواطف العشّاق المتقلّبة.',
              task: 'Write a paragraph tracing the motif of transformation across two scenes.',
              taskAr: 'اكتبوا فقرةً تتبّعون فيها موتيف التحوّل عبر مشهدَين.',
              success: 'Names the motif, gives two examples, explains how it builds.',
              successAr: 'يُسمّي الطالب الموتيف، ويُقدّم مثالَين، ويشرح كيف يتنامى.',
            }),
            lesson({
              focus: 'independent-outcome',
              skills: ['7R.6', '7W.1', '7W.4', '7W.9'],
              do: 'Plan a 30-minute essay on the board.',
              doAr: 'خطِّطوا مقالةً مدّتها 30 دقيقة على السبّورة.',
              task: "How does Shakespeare present love and power across A Midsummer Night's Dream?",
              taskAr: "كيف يُقدّم شكسبير الحبّ والسلطة في مسرحية A Midsummer Night's Dream؟",
              success:
                'References three of four scenes, three embedded quotations, clear conclusion.',
              successAr:
                'يُشير الطالب إلى ثلاثة مشاهد من الأربعة، ويُضمّن ثلاثة اقتباسات، ويصوغ خاتمةً واضحة.',
            }),
          ],
        },
        {
          number: 7,
          pages: 'Assessment week — performance + analytical paragraph',
          keyVocabulary: [
            { en: 'rehearsal', ar: 'بروفة' },
            { en: 'projection', ar: 'إيصال الصوت' },
            { en: 'intonation', ar: 'تنغيم' },
            { en: 'analytical', ar: 'تحليلي' },
            { en: 'evidence', ar: 'دليل / شاهد' },
          ],
          contextNote: {
            en: 'Assessment week. Group Shakespeare performance + 30-minute analytical paragraph on a scene of choice.',
            ar: 'أسبوع التقييم: أداء شكسبيري جماعي + فقرة تحليلية مدّتها 30 دقيقة على مشهدٍ يختاره الطالب.',
          },
          lessons: [
            lesson({
              focus: 'explicit-reading',
              skills: ['7R.1', '7R.2'],
              do: 'Issue extract choices (12–16 lines from 1.1, 2.1, 3.1, 5.1). Model annotation: stresses, pauses, tone shifts.',
              doAr: 'وزّعوا خيارات المقاطع (12–16 سطراً من المشاهد 1.1 و2.1 و3.1 و5.1). اعرضوا نموذج تعليق: مواضع التشديد والوقَفات وتحوّلات النبرة.',
              task: 'Annotate your extract for performance: stresses, pauses, tone.',
              taskAr: 'علِّقوا على مقطعكم استعداداً للأداء: مواضع التشديد والوقَفات والنبرة.',
              success: 'Extract fully annotated with at least six marks.',
              successAr: 'يكون المقطع مُعلَّقاً عليه بالكامل بستّ علاماتٍ على الأقلّ.',
            }),
            lesson({
              focus: 'reading-discussion',
              skills: ['7SL.1', '7SL.2', '7SL.3'],
              do: 'Rehearsal workshop. Demonstrate projection, eye-contact, consonants on "Out of this wood do not desire to go."',
              doAr: 'ورشة بروفة. اعرضوا إيصال الصوت والتواصل البصري ونُطق الصوامت في عبارة "Out of this wood do not desire to go."',
              task: 'Rehearse in groups of 3–4; peer-feedback on projection and intonation.',
              taskAr:
                'تدرّبوا في مجموعاتٍ من 3–4، مع تغذية راجعة من الأقران على إيصال الصوت والتنغيم.',
              success: 'Each pupil acts on at least one piece of feedback.',
              successAr: 'يعمل كلّ طالبٍ بملاحظةٍ واحدة على الأقلّ من التغذية الراجعة.',
            }),
            lesson({
              focus: 'application',
              skills: ['7SL.1', '7SL.2', '7SL.3'],
              do: 'Remind of success criteria: clear voice, sustained character, accurate text.',
              doAr: 'ذكِّروا بمعايير النجاح: وضوح الصوت، وثبات الشخصية، ودقّة النصّ.',
              task: 'Perform extracts to the class. Audience completes feedback slips.',
              taskAr: 'أدّوا المقاطع أمام الصفّ، ويملأ الجمهور بطاقات التغذية الراجعة.',
              success: 'Performance is audible, sustained, textually accurate.',
              successAr: 'الأداء مسموع وثابت ومُطابق للنصّ.',
            }),
            lesson({
              focus: 'paragraph-rehearsal',
              skills: ['7W.1', '7W.4'],
              do: 'Plan the 30-minute paragraph: choose scene, pick two quotations, draft topic sentence.',
              doAr: 'خطِّطوا للفقرة ذات الثلاثين دقيقة: اختاروا المشهد، وانتقوا اقتباسَين، وصُغوا الجملة الافتتاحية.',
              task: 'Plan an analytical paragraph on a chosen scene.',
              taskAr: 'خطِّطوا فقرةً تحليلية على مشهدٍ مختار.',
              success: 'Plan has clear claim, two quotations, one-paragraph structure.',
              successAr: 'تشتمل الخطّة على دعوى واضحة واقتباسَين وبنيةِ فقرةٍ واحدة.',
            }),
            lesson({
              focus: 'assessment',
              skills: ['7R.4', '7W.1', '7W.4', '7W.9'],
              do: 'Brief recap of success criteria. No further modelling.',
              doAr: 'مراجعةٌ موجزة لمعايير النجاح، دون نمذجةٍ إضافية.',
              task: '30-minute analytical paragraph on a chosen scene from the play.',
              taskAr: 'فقرة تحليلية مدّتها 30 دقيقة على مشهدٍ مختار من المسرحية.',
              success:
                'Precise claim, two accurate embedded quotations, method-and-effect analysis, Tier-2 vocab.',
              successAr:
                'دعوى دقيقة، واقتباسان مُضمَّنان بدقّة، وتحليلٌ للوسيلة والأثر، ومفردات من المستوى الثاني.',
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
        ar: 'كتابة سردية موسّعة (1,000–1,500 كلمة): مسودّة أولى، ثمّ مراجعة الأقران، ثمّ إعادة صياغة — يُقيَّم العمل النهائي.',
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
