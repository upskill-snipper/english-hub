'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ────────────────────────────────────────────────────── */

const ozymandias: PoemData = {
  title: 'Ozymandias',
  poet: 'Percy Bysshe Shelley',
  lines: [
    {
      text: 'I met a traveller from an antique land,',
      annotations: [
        {
          type: 'Frame narrative',
          note: "Shelley distances himself from the story by using a second-hand account. The tale passes through multiple voices (traveller, sculptor, Ozymandias himself), undermining the permanence of the king's legacy.",
          color: '#3b82f6',
        },
        {
          type: 'Context',
          note: '"Antique land" refers to Egypt, evoking the ancient civilisations whose ruins fascinated Romantic-era Europeans. The word "antique" immediately signals age and decay.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Who said: Two vast and trunkless legs of stone',
      annotations: [
        {
          type: 'Imagery',
          note: '"Vast and trunkless legs" - only the legs remain standing. The body (trunk) is gone, symbolising how Ozymandias\'s power has been stripped away by time. "Vast" emphasises the original scale of his ambition.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Stand in the desert. Near them, on the sand,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The desert is a symbol of emptiness and erasure. The ellipsis creates a visual pause, mirroring the vast empty space around the ruins.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Half sunk, a shattered visage lies, whose frown,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Half sunk" and "shattered" - the face is broken and partially buried. This physical destruction mirrors the collapse of the ruler\'s authority.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And wrinkled lip, and sneer of cold command,',
      annotations: [
        {
          type: 'Characterisation',
          note: '"Sneer of cold command" reveals Ozymandias\'s cruel, authoritarian nature. Even in stone, his contempt for his subjects is visible.',
          color: '#ef4444',
        },
        {
          type: 'Alliteration',
          note: 'The hard "c" sounds in "cold command" create a harsh, forceful tone that mirrors the king\'s ruthless exercise of power.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Tell that its sculptor well those passions read',
      annotations: [
        {
          type: 'Irony',
          note: 'The sculptor - an artist, not a ruler - is the one whose work survives. Art outlasts political power.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Which yet survive, stamped on these lifeless things,',
      annotations: [
        {
          type: 'Juxtaposition',
          note: '"Survive" vs "lifeless" - the passions outlive the man, but only on dead stone. There is a paradox: life is preserved in death.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The hand that mocked them and the heart that fed:',
      annotations: [
        {
          type: 'Ambiguity',
          note: "\"The hand that mocked\" could refer to the sculptor's hand (which imitated/mocked the king's expressions) or the king's own hand (which mocked his people through tyranny).",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And on the pedestal these words appear:',
      annotations: [
        {
          type: 'Structure',
          note: 'The poem shifts from description to direct speech. Ironically, the boastful inscription is the only part fully legible while the works it references have vanished.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "'My name is Ozymandias, king of kings:",
      annotations: [
        {
          type: 'Hubris',
          note: '"King of Kings" is a superlative claiming absolute supremacy. The biblical echo (Revelation 19:16 uses the same phrase for God) suggests blasphemous arrogance.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: "Look on my Works, ye Mighty, and despair!'",
      annotations: [
        {
          type: 'Dramatic irony',
          note: 'Ozymandias intended "despair" to mean: despair because you cannot match my achievements. The reader understands it differently: despair because even the mightiest are destroyed by time.',
          color: '#f59e0b',
        },
        {
          type: 'Volta',
          note: 'This line marks the poem\'s turning point. After the grand declaration, the next line ("Nothing beside remains") delivers the devastating contrast.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Nothing beside remains. Round the decay',
      annotations: [
        {
          type: 'Contrast',
          note: '"Nothing beside remains" - the poem\'s most powerful moment. The short, blunt sentence directly contradicts the king\'s boastful inscription.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Of that colossal Wreck, boundless and bare',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Colossal Wreck" pairs grandeur with ruin. The statue was once imposing; now its very size emphasises the completeness of its fall.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The lone and level sands stretch far away.',
      annotations: [
        {
          type: 'Imagery',
          note: 'The final image is of endless, flat desert - nature has completely reclaimed the land. The sibilant "s" sounds create a whispering, wind-like effect.',
          color: '#10b981',
        },
      ],
    },
  ],

  context: `
    <h3>Percy Bysshe Shelley (1792--1822)</h3>
    <p>Shelley was one of the major English Romantic poets. He was a radical political thinker who opposed tyranny, monarchy, and institutional religion. He was expelled from Oxford for publishing a pamphlet on atheism and spent much of his adult life in exile in Italy, where he drowned at the age of 29.</p>

    <h3>The Romantic Movement</h3>
    <p>The Romantics valued <strong>nature, emotion, and individual freedom</strong> over the rationalism of the Enlightenment. They were deeply suspicious of unchecked power. Shelley believed poetry could be a force for political change.</p>

    <h3>Publication (1818)</h3>
    <p>"Ozymandias" was published on 11 January 1818 in <em>The Examiner</em>, a politically liberal weekly. It was written as part of a friendly <strong>sonnet-writing competition</strong> with Shelley's friend Horace Smith. Shelley's version became one of the most celebrated sonnets in English.</p>

    <h3>Historical Context: Ramesses II</h3>
    <p>Ozymandias is the Greek name for <strong>Ramesses II</strong> (c. 1303--1213 BC), one of ancient Egypt's most powerful pharaohs. The British Museum had recently acquired a fragment of a colossal statue of Ramesses, which likely inspired the poem.</p>

    <h3>Political Themes</h3>
    <p>Shelley uses the ruined statue to critique the <strong>arrogance of absolute power</strong>. Writing during a period of political upheaval, the poem carries a clear message: <strong>no tyrant's power lasts forever</strong>. This was a direct challenge to the monarchies and empires of Shelley's own time.</p>
  `,

  contextAr: `
    <h3>Percy Bysshe Shelley (1792-1822)</h3>
    <p>Shelley واحد من أكبر شعراء الرومانسية الإنجليزية. كان مفكّر سياسي راديكالي، يقف ضد الطغيان والملكية والمؤسسة الدينية. طردوه من جامعة Oxford لأنه نشر كتيّب يدافع عن الإلحاد، وقضى معظم حياته منفي في إيطاليا، لين غرق وعمره 29 سنة.</p>

    <h3>الحركة الرومانسية</h3>
    <p>الرومانسيون كانوا يقدّرون <strong>الطبيعة والعاطفة وحرية الفرد</strong> أكثر من العقلانية الجافة اللي جابها عصر التنوير. كانوا يشكّون وايد في السلطة المطلقة. Shelley كان يؤمن إن الشعر يقدر يكون قوة للتغيير السياسي.</p>

    <h3>النشر (1818)</h3>
    <p>"Ozymandias" انتشرت في 11 يناير 1818 في مجلة <em>The Examiner</em>، وهي مجلة أسبوعية ليبرالية. كتبها Shelley كجزء من <strong>منافسة ودّية في كتابة sonnet</strong> مع صديقه Horace Smith. نسخة Shelley صارت من أشهر الـsonnets في تاريخ الشعر الإنجليزي.</p>

    <h3>السياق التاريخي: Ramesses II</h3>
    <p>Ozymandias هو الاسم اليوناني لـ<strong>Ramesses II</strong> (تقريباً 1303-1213 ق.م)، واحد من أقوى فراعنة مصر القديمة. المتحف البريطاني (British Museum) كان لتوّه استلم قطعة من تمثال ضخم لـRamesses، وهالشي على الأغلب هو اللي ألهم القصيدة.</p>

    <h3>المواضيع السياسية</h3>
    <p>Shelley يستخدم التمثال المهدّم عشان ينتقد <strong>غطرسة السلطة المطلقة</strong>. وهو يكتب في فترة اضطراب سياسي، رسالة القصيدة واضحة: <strong>ما فيه طاغية تدوم سلطته للأبد</strong>. وهذا تحدّي مباشر للممالك والإمبراطوريات في زمن Shelley نفسه.</p>
  `,

  summary: `Lines 1-3: A frame narrative opens the poem. The speaker recalls meeting a traveller from "an antique land" (Egypt) who describes a ruined statue in the desert - two enormous legs of stone, without a body, standing alone.

Lines 3-5: Near the legs, the traveller describes the statue's face ("visage") lying half-buried in the sand, broken. The face still shows a frown and a "sneer of cold command" - the sculptor captured the pharaoh's arrogant expression.

Lines 6-8: These lines praise the sculptor's skill. He "read" the king's passions accurately and carved them so well that they "survive". There is an ambiguity in "the hand that mocked them, and the heart that fed".

Lines 9-11: The inscription delivers Ozymandias's boastful command: "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!"

Lines 12-14: The sestet delivers the poem's devastating irony. "Nothing beside remains" - all the "Works" have vanished completely. The "lone and level sands" have the final word, showing nature and time triumph over human power.

Overall meaning: The poem is a meditation on the transience of power. The only thing that survives is art (the sculptor's work) and, ironically, the king's own boastful words - which now serve as evidence of his foolishness rather than his greatness.`,

  summaryAr: `الأبيات 1-3: القصيدة تفتح بإطار سردي (frame narrative). المتكلّم يتذكّر إنه قابل مسافر من "أرض قديمة" (مصر)، وهالمسافر يوصف تمثال مهدّم في الصحراء - رجلين ضخمين من حجر، بدون جسم، واقفين لحالهم.

الأبيات 3-5: يم الرجلين، المسافر يوصف وجه التمثال (visage) وهو مدفون نص دفنه في الرمل ومكسّر. الوجه لين الحين يبيّن عبوس وابتسامة استهزاء باردة (sneer of cold command) - النحّات قدر يلتقط تعابير الفرعون المتعجرفة.

الأبيات 6-8: هذي الأبيات تمدح مهارة النحّات. هو "قرى" مشاعر الملك بدقة، وحفرها زين لدرجة إنها "نجت". وفيه غموض في عبارة "the hand that mocked them, and the heart that fed".

الأبيات 9-11: النقش ينقل أمر Ozymandias المتعجرف: "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!"

الأبيات 12-14: الـsestet يوصل المفارقة المدمّرة. "Nothing beside remains" - كل "الأعمال" انّمحت تماماً. الـ"lone and level sands" هي اللي تختم القصيدة، عشان تبيّن إن الطبيعة والوقت ينتصرون على القوة البشرية.

المعنى العام: القصيدة تأمّل في زوال السلطة. الشي الوحيد اللي نجى هو الفن (شغل النحّات)، والمفارقة إن كلمات الملك المتفاخرة نفسها هي اللي بقت - بس صارت دليل على حماقته مو على عظمته.`,

  formAndStructure: `Sonnet form: "Ozymandias" is a 14-line sonnet, but Shelley deliberately breaks from both the Petrarchan and Shakespearean forms. This unconventional structure mirrors the poem's theme of breaking from established power.

Rhyme scheme: Highly irregular - ababacdcedefef. The looseness of the rhyme reflects the decay and fragmentation described in the poem.

Metre: Broadly iambic pentameter, but Shelley frequently disrupts the metre. "Nothing beside remains" breaks the regular rhythm with a heavy, emphatic stress on "Nothing".

Volta: The traditional sonnet volta appears at line 12 - "Nothing beside remains." This is the devastating turn where the reader's expectation is shattered.

Enjambment: Shelley uses extensive enjambment, particularly in lines 2-8. This creates a flowing description that mirrors a traveller telling a story.

Caesura: The full stop mid-line in "Nothing beside remains." (line 12) creates a dramatic pause before the poem reveals the empty desert.

Frame narrative: The poem uses three layers of voice - the speaker, the traveller, and Ozymandias. This distancing effect emphasises how the king's power has been diminished.`,

  formAndStructureAr: `Sonnet form: "Ozymandias" قصيدة sonnet من 14 بيت، بس Shelley يكسر عن قصد القالب الإيطالي (Petrarchan) والإنجليزي (Shakespearean). هذي البنية غير التقليدية تعكس موضوع القصيدة نفسه: كسر السلطة المستقرّة.

Rhyme scheme: نظام القافية غير منتظم تماماً - ababacdcedefef. السيبان في القافية يعكس التحلّل والتفتّت اللي توصفه القصيدة.

Metre: القصيدة بشكل عام على iambic pentameter، بس Shelley يكسر الوزن في مواضع كثيرة. "Nothing beside remains" يكسر الإيقاع المنتظم بضغط ثقيل على "Nothing".

Volta: الـvolta التقليدي يطلع في البيت 12 - "Nothing beside remains." هذا هو التحوّل المدمّر اللي يحطّم توقّعات القارئ.

Enjambment: Shelley يستخدم enjambment بشكل كثيف، خصوصاً في الأبيات 2-8. هالشي يخلق وصف منساب، يشبه راوي يحكي قصة.

Caesura: النقطة في نص البيت "Nothing beside remains." في البيت 12 تخلق توقّف درامي قبل ما تنكشف الصحراء الخاوية.

الإطار السردي (Frame narrative): القصيدة تستخدم ثلاث طبقات من الأصوات - المتكلّم، المسافر، وOzymandias. هالتباعد يبرز كيف إن سلطة الملك تقلّصت.`,

  keyQuotes: [
    {
      quote: 'Two vast and trunkless legs of stone',
      analysis:
        'The statue is fragmented - only the legs remain standing. "Vast" emphasises the original ambition, while "trunkless" shows destruction. The image of disembodied legs is both absurd and powerful: the ruler who stood tall has literally been cut down.',
      themes: ['Power of nature', 'Transience of power', 'Pride'],
      analysisAr:
        'التمثال متفتّت - بس الرجلين باقيات واقفات. كلمة "vast" تأكّد على ضخامة الطموح الأصلي، بينما "trunkless" تبيّن حجم الدمار. صورة رجلين مقطوعين عن الجسم صورة عبثية وقوية في نفس الوقت: الحاكم اللي كان شامخ، حرفياً انقصّ ووقع.',
      themesAr: ['قوة الطبيعة', 'زوال السلطة', 'الكبرياء'],
    },
    {
      quote: 'Half sunk a shattered visage lies',
      analysis:
        'The face of the king is broken and half-buried. "Shattered" suggests violent destruction, while "half sunk" shows nature gradually swallowing the remnants. "Lies" carries a double meaning - physical position and falsehood.',
      themes: ['Power of nature', 'Decay', 'Irony'],
      analysisAr:
        'وجه الملك مكسّر ومدفون نص دفنه. كلمة "shattered" توحي بدمار عنيف، بينما "half sunk" تبيّن إن الطبيعة بشكل تدريجي تبلع ما بقى. وكلمة "lies" تحمل معنيين - الوجه يرقد فعلياً على الأرض، وفي نفس الوقت "يكذب" لأن تعابير القوة فيه صارت كذبة.',
      themesAr: ['قوة الطبيعة', 'التحلّل', 'المفارقة'],
    },
    {
      quote: 'sneer of cold command',
      analysis:
        'Three words that perfectly characterise a tyrant. "Sneer" shows contempt; "cold" shows lack of empathy; "command" shows absolute authority. Significantly, this cruelty outlives everything else - preserved in stone while the empire is gone.',
      themes: ['Power and control', 'Tyranny', 'Human nature'],
      analysisAr:
        'ثلاث كلمات توصف الطاغية أحسن وصف. "Sneer" تبيّن الاحتقار؛ "cold" تبيّن غياب التعاطف؛ "command" تبيّن السلطة المطلقة. والأهم: هالقسوة هي اللي بقت أطول من كل شي ثاني - محفورة في الحجر، بينما الإمبراطورية انتهت.',
      themesAr: ['السلطة والسيطرة', 'الاستبداد', 'الطبيعة البشرية'],
    },
    {
      quote: 'My name is Ozymandias, King of Kings',
      analysis:
        'The only time we hear the tyrant\'s own voice. "King of Kings" is a superlative that claims superiority. The phrase echoes biblical language used for God, suggesting blasphemous arrogance. The name now represents failure, not glory.',
      themes: ['Pride and hubris', 'Power', 'Legacy'],
      analysisAr:
        'المرّة الوحيدة اللي نسمع فيها صوت الطاغية نفسه. "King of Kings" صيغة تفضيل تدّعي التفوّق على كل الحكّام. العبارة تذكّر بلغة الكتاب المقدس اللي تستخدم لله، وهذا يوحي بغطرسة قريبة من الكفر. الاسم الحين صار يمثّل الفشل، مو المجد.',
      themesAr: ['الكبرياء والغطرسة', 'السلطة', 'الإرث'],
    },
    {
      quote: 'Look on my Works, ye Mighty, and despair!',
      analysis:
        'The most dramatically ironic line in the poem. Ozymandias intended this as a warning to rival kings. But the reader understands "despair" differently: despair because even the greatest works are destroyed by time.',
      themes: ['Dramatic irony', 'Hubris', 'Transience of power'],
      analysisAr:
        'أكثر بيت يحمل dramatic irony في القصيدة. Ozymandias يقصد فيه تحذير للملوك المنافسين. بس القارئ يفهم "despair" بمعنى مختلف: ييأسون لأن حتى أعظم الأعمال يدمّرها الوقت.',
      themesAr: ['Dramatic irony', 'الغطرسة', 'زوال السلطة'],
    },
    {
      quote: 'Nothing beside remains',
      analysis:
        "Three of the most powerful words in English poetry. After the grandiose inscription, this short, blunt sentence demolishes everything. The plain, monosyllabic language contrasts sharply with the king's elaborate boast.",
      themes: ['Transience of power', 'Irony', 'Time and decay'],
      analysisAr:
        'ثلاث كلمات من أقوى الكلمات في الشعر الإنجليزي. بعد النقش الفخم، هالجملة القصيرة الحادّة تهدم كل شي. اللغة البسيطة أحادية المقطع تتناقض بشكل صارخ مع تفاخر الملك المتكلّف.',
      themesAr: ['زوال السلطة', 'المفارقة', 'الوقت والتحلّل'],
    },
    {
      quote: 'colossal Wreck, boundless and bare',
      analysis:
        'The oxymoron "colossal Wreck" pairs grandeur with ruin. "Boundless and bare" uses alliteration to emphasise the vast emptiness. The statue\'s very size now highlights how completely it has fallen.',
      themes: ['Decay', 'Power of nature', 'Irony'],
      analysisAr:
        'الـoxymoron في "colossal Wreck" يجمع بين العظمة والخراب. و"boundless and bare" تستخدم alliteration عشان تأكّد على الفراغ الشاسع. حجم التمثال نفسه صار يبرز مدى السقوط.',
      themesAr: ['التحلّل', 'قوة الطبيعة', 'المفارقة'],
    },
    {
      quote: 'The lone and level sands stretch far away',
      analysis:
        'The poem\'s final image is of the desert - vast, flat, and empty. The alliterative "l" sounds create a melancholy tone, while sibilant "s" sounds evoke wind over sand. The desert has the last word, suggesting nature\'s indifference to human power.',
      themes: ['Power of nature', 'Insignificance of humanity', 'Time'],
      analysisAr:
        'الصورة الأخيرة هي الصحراء - شاسعة، مسطّحة، وفاضية. الـalliteration في حرف "l" يخلق نبرة كئيبة، أما الـsibilance في "s" فتستحضر صوت الريح فوق الرمل. الصحراء - مو الملك - هي اللي تختم الكلام، وهذا يوحي بلامبالاة الطبيعة بالسلطة البشرية.',
      themesAr: ['قوة الطبيعة', 'تفاهة الإنسان', 'الوقت'],
    },
  ],

  languageDevices: [
    {
      device: 'Dramatic irony',
      example: 'Look on my Works, ye Mighty, and despair!',
      effect:
        'Ozymandias intended "despair" as a threat to rival kings. The reader, however, sees the empty desert and understands the real cause for despair - that nothing survives. The king\'s own words become the strongest argument against his power.',
      lineRef: 10,
      effectAr:
        'Ozymandias قصد بكلمة "despair" تهديد للملوك المنافسين. بس القارئ، اللي يشوف الصحراء الفاضية، يفهم السبب الحقيقي لليأس - إنه ولا شي يدوم. كلمات الملك نفسها تصير أقوى دليل ضد سلطته.',
    },
    {
      device: 'Alliteration',
      example: 'boundless and bare / lone and level',
      effect:
        'The "b" alliteration emphasises the vast emptiness. The soft "l" sounds in "lone and level" create a gentle, expansive tone that contrasts with the harsh power Ozymandias once held.',
      lineRef: 12,
      effectAr:
        'الـalliteration في حرف "b" يأكّد على الفراغ الشاسع. وأصوات حرف "l" الناعمة في "lone and level" تخلق نبرة هادئة وممتدّة، تتناقض مع السلطة القاسية اللي كانت بيد Ozymandias.',
    },
    {
      device: 'Symbolism',
      example: 'the desert and the ruined statue',
      effect:
        'The desert symbolises the erasure of human achievement by time and nature. The broken statue symbolises the inevitable fall of all tyrannical power.',
      lineRef: 2,
      effectAr:
        'الصحراء ترمز لمحو إنجازات الإنسان عبر الوقت والطبيعة. والتمثال المكسّر يرمز للسقوط الحتمي لكل سلطة استبدادية.',
    },
    {
      device: 'Juxtaposition',
      example: '"King of Kings" vs "Nothing beside remains"',
      effect:
        "The poem places Ozymandias's grandiose self-description directly beside the reality of his total obscurity. The bigger the boast, the more devastating the reality.",
      lineRef: 11,
      effectAr:
        'القصيدة تحط وصف Ozymandias المتعالي لنفسه يم حقيقة إنه انّمحى تماماً. كل ما زاد التفاخر، صارت الحقيقة أكثر تدميراً.',
    },
    {
      device: 'Imagery (visual)',
      example: 'Two vast and trunkless legs of stone / Stand in the desert',
      effect:
        'Shelley creates a vivid, cinematic image: two enormous stone legs standing alone in an empty desert. The visual is deliberately strange and arresting, forcing the reader to imagine the desolation.',
      lineRef: 1,
      effectAr:
        'Shelley يخلق صورة بصرية حيّة سينمائية: رجلين ضخمين من حجر يقفون لحالهم في صحراء خاوية. الصورة غريبة وملفتة عن قصد - تجبر القارئ يتخيّل المشهد ويحسّ بالعزلة.',
    },
    {
      device: 'Sibilance',
      example: 'lone and level sands stretch',
      effect:
        'The repeated "s" sounds in the final line mimic the sound of wind blowing across sand, creating an aural image of the desert. Nature - quiet, persistent, indifferent - has the last word.',
      lineRef: 13,
      effectAr:
        'تكرار صوت "s" في البيت الأخير يحاكي صوت الريح وهي تمر فوق الرمل، ويخلق صورة سمعية للصحراء. الطبيعة - الهادئة، الصابرة، اللي ما تهتم - هي اللي لها الكلمة الأخيرة.',
    },
  ],
}

/* ── Comparison poems (Eduqas) ────────────────────────────────────── */

const comparisons = [
  {
    title: 'London',
    poet: 'William Blake',
    href: '/revision/poetry/eduqas/london',
    reason:
      'Both poems criticise those in power. Shelley attacks ancient tyranny; Blake attacks the institutions of his own time (the Church, the monarchy). Both suggest that power structures cause suffering.',
    themes: ['Abuse of power', 'Suffering', 'Political critique'],
  },
  {
    title: 'The Prelude: stealing the boat',
    poet: 'William Wordsworth',
    href: '/revision/poetry/eduqas/the-prelude',
    reason:
      'Both Romantic poems present nature as more powerful than human ambition. Where Wordsworth shows nature humbling a young boy, Shelley shows it erasing an empire.',
    themes: ['Power of nature', 'Human insignificance', 'Romantic poetry'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      "Both poems use bitter dramatic irony. Hardy's wife receives news after her husband has died, just as Ozymandias's boast survives after his power has crumbled. Both expose the gap between human hopes and reality.",
    themes: ['Dramatic irony', 'Loss', 'Time'],
  },
]

/* ── Page component ───────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'oz-1',
    question: 'What is the main theme of Ozymandias?',
    type: 'multiple-choice',
    options: [
      'The power of nature',
      'The transience of political power',
      'The beauty of art',
      'Travel',
    ],
    correctIndex: 1,
    explanation:
      'Shelley explores how even the mightiest rulers are eventually forgotten. The ruined statue symbolises the inevitable decline of all power.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'oz-2',
    question: 'What does "sneer of cold command" reveal?',
    type: 'multiple-choice',
    options: ['A kind ruler', 'A cruel and authoritarian tyrant', 'A frightened man', 'An artist'],
    correctIndex: 1,
    explanation:
      '"Sneer" shows contempt, "cold" shows lack of empathy, "command" shows authority. Together they characterise a tyrant.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'oz-3',
    question: 'What is the effect of "Nothing beside remains"?',
    type: 'multiple-choice',
    options: [
      'The statue is preserved',
      'It devastatingly undercuts the boastful inscription',
      'It describes the desert positively',
      'The traveller is lost',
    ],
    correctIndex: 1,
    explanation:
      'Three blunt words demolish the king\'s grand claims after his boast about his "Works."',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'oz-4',
    question: 'What form does it take?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'A sonnet with irregular rhyme scheme',
      'A ballad',
      'A dramatic monologue',
    ],
    correctIndex: 1,
    explanation:
      'A 14-line sonnet with deliberately irregular rhyme, mirroring the theme of broken power structures.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'oz-5',
    question: 'What is significant about the sculptor?',
    type: 'multiple-choice',
    options: [
      'He failed',
      'His art survives while the empire does not - art outlasts power',
      'He was punished',
      'He narrates',
    ],
    correctIndex: 1,
    explanation:
      "The sculptor's work endures while the king's achievements have vanished - art outlasts tyrannical power.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'oz-6',
    question: 'What type of irony is in "Look on my Works... and despair!"?',
    type: 'multiple-choice',
    options: ['Verbal irony', 'Dramatic irony', 'Cosmic irony', 'Socratic irony'],
    correctIndex: 1,
    explanation:
      'Dramatic irony - the reader knows what Ozymandias did not: his works have completely vanished.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'oz-7',
    question: 'Why use a frame narrative?',
    type: 'multiple-choice',
    options: [
      'To make it longer',
      'To distance the reader from Ozymandias, emphasising how his legacy has faded',
      'To show the traveller is unreliable',
      'For a happy ending',
    ],
    correctIndex: 1,
    explanation:
      "The layered retelling through multiple voices undermines the king's desire for a permanent, direct legacy.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'oz-8',
    question: 'Who is Ozymandias based on?',
    type: 'multiple-choice',
    options: ['Alexander the Great', 'Caesar', 'Ramesses II of Egypt', 'Genghis Khan'],
    correctIndex: 2,
    explanation:
      'Ozymandias is the Greek name for Ramesses II, inspired by a statue fragment acquired by the British Museum.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'oz-9',
    question: 'What does the final line contribute?',
    type: 'multiple-choice',
    options: [
      'Celebrates the desert',
      'Nature has completely erased the empire - giving nature the final word',
      'The traveller continues',
      'Describes where the statue was built',
    ],
    correctIndex: 1,
    explanation:
      'The endless desert has reclaimed everything. Nature, not the king, has the last word.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'oz-10',
    question: "What was Shelley's political stance?",
    type: 'multiple-choice',
    options: [
      'Conservative',
      'A radical Romantic who opposed tyranny and monarchy',
      'Apolitical',
      'Monarchist',
    ],
    correctIndex: 1,
    explanation:
      'Shelley was a radical who opposed all forms of tyranny. The poem was a challenge to the monarchies of his own time.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "Ozymandias explores the transience of power, hubris, the supremacy of nature and time, and art's endurance.",
    keyPoints: [
      'Power is temporary - even the mightiest rulers are forgotten',
      'Art outlasts political power',
      'Nature reclaims everything',
      'Hubris leads to downfall',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary: 'Shelley uses dramatic irony, alliteration, juxtaposition, and vivid desert imagery.',
    keyPoints: [
      '"Sneer of cold command" - hard consonants characterise the tyrant',
      '"Nothing beside remains" - blunt monosyllables',
      '"Boundless and bare" / "lone and level" - alliteration emphasises emptiness',
      'Dramatic irony in "Look on my Works"',
    ],
  },
  {
    topic: 'Structure & Form',
    summary: 'Irregular sonnet with frame narrative and volta at "Nothing beside remains."',
    keyPoints: [
      'Irregular rhyme scheme - reflects decay',
      'Volta at line 12 - devastating turn',
      'Frame narrative - three voices distance the reader',
      'Enjambment - flowing momentum toward decay',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shelley present the theme of power in Ozymandias?',
  'Compare how the transience of power is presented in Ozymandias and one other poem from the anthology.',
  'How does Shelley use language and structure to convey the insignificance of human ambition?',
]

export default function OzymandiasEduqasPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Ozymandias by Percy Bysshe Shelley - Analysis & Annotations"
        description="Line-by-line analysis of Ozymandias with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          {
            name: 'Ozymandias',
            url: 'https://theenglishhub.app/revision/poetry/eduqas/ozymandias',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm text-amber-100">
          <p className="font-semibold mb-1">Legacy anthology notice</p>
          <p className="text-amber-100/90 leading-relaxed">
            This page is from the legacy pre-2025 Eduqas anthology. The current Eduqas 2025 cluster
            does not include this poem. The content remains as a study reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Ozymandias</h1>
            <p className="text-body-sm text-muted-foreground">
              Percy Bysshe Shelley &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Ozymandias"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Ozymandias"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={ozymandias} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Eduqas exam asks you to compare two poems from the anthology. These are strong
          pairings with Ozymandias.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Ozymandias by Percy Bysshe Shelley (1818) is in the public domain. Source: Project Gutenberg
        / Wikisource &mdash; verified against the Verified Library. Reproduced freely for
        educational use.
      </footer>
    </div>
  )
}
