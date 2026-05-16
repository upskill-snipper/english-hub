import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import type { Metadata } from 'next'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
/* ── SEO ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Bayonet Charge — AQA Power and Conflict | The English Hub',
    description:
      'Analysis of Bayonet Charge for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.',
  },
  title: 'Bayonet Charge — AQA Power and Conflict',
  description:
    'Analysis of Bayonet Charge for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/bayonet-charge',
  },
}

/* ── Poem data ───────────────────────────────────────────────────── */

const BAYONET_CHARGE: PoemData = {
  title: 'Bayonet Charge',
  poet: 'Ted Hughes',
  lines: [
    // ── Stanza 1 ──
    {
      text: 'Suddenly he awoke and was running - raw',
      annotations: [
        {
          type: 'In medias res',
          note: 'The poem begins mid-action with "Suddenly", plunging the reader into chaos without context or preparation — mirroring the soldier\'s disorientation.',
          color: '#f59e0b',
        },
        {
          type: 'Enjambment',
          note: '"raw" carries over to the next line, creating breathlessness and momentum that mirrors the soldier\'s desperate sprint.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'In raw-seamed hot khaki, his sweat heavy,',
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Raw-seamed hot khaki" — the rough, chafing uniform emphasises physical discomfort and the reality of war, far from any romantic ideal.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'Stumbling across a field of clods towards a green hedge',
      annotations: [
        {
          type: 'Verbs',
          note: '"Stumbling" conveys clumsiness and lack of control — the soldier is not heroic but desperate and uncoordinated.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'That dazzled with rifle fire, he lugged a rifle numb',
      annotations: [
        {
          type: 'Contrast',
          note: '"Dazzled" creates a jarring beauty amid violence. "Numb" shows emotional and physical shutdown.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'As blind as a smashed arm, and he sweat and he sweat –',
    },
    {
      text: 'Almost stopped –',
    },
    { text: '' },
    // ── Stanza 2 ──
    {
      text: 'The patriotic tear that had brimmed in his eye',
      annotations: [
        {
          type: 'Irony',
          note: '"The patriotic tear" is presented as something that once motivated him, but is now meaningless in the face of real combat.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Sweating like molten iron from the centre of his chest, –',
      annotations: [
        {
          type: 'Simile',
          note: '"Like molten iron" — an industrial, painful image suggesting patriotism has become a burning, destructive force inside him.',
          color: '#22c55e',
        },
      ],
    },
    { text: '' },
    {
      text: 'In bewilderment then he almost stopped –',
      annotations: [
        {
          type: 'Caesura',
          note: "The dash creates a pause, mirroring the soldier's hesitation as he questions why he is fighting.",
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'In what cold clockwork of the stars and the nations',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Cold clockwork" suggests the war machine is impersonal and mechanical — soldiers are just cogs.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'Was he the hand pointing that second? He was running',
      annotations: [
        {
          type: 'Rhetorical question',
          note: 'The soldier questions his place in a vast, indifferent system — a moment of existential doubt.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Like a man who has jumped up in the dark and runs',
    },
    {
      text: 'Listening between his footfalls for the reason',
      annotations: [
        {
          type: 'Simile',
          note: 'Comparing himself to a man waking in darkness — he acts instinctively but searches desperately for meaning or reason.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'Of his still running, and his foot hung like',
    },
    {
      text: 'Statuary in mid-stride. Then the shot-slashed furrows',
      annotations: [
        {
          type: 'Imagery',
          note: '"Statuary in mid-stride" freezes the soldier like a monument — a powerful image of paralysis between thought and action.',
          color: '#22c55e',
        },
      ],
    },
    { text: '' },
    // ── Stanza 3 ──
    {
      text: 'Threw up a yellow hare that rolled like a flame',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The hare represents innocent nature caught in human conflict — its suffering is vivid and purposeless.',
          color: '#f59e0b',
        },
        {
          type: 'Simile',
          note: '"Rolled like a flame" — the hare\'s agony is compared to fire, linking it to the destruction of war.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'And crawled in a threshing circle, his mouth wide',
    },
    {
      text: 'Open silent, its eyes standing out.',
    },
    {
      text: 'He plunged past with his bayonet toward the green hedge,',
    },
    {
      text: 'King, honour, human dignity, etcetera',
      annotations: [
        {
          type: 'Listing / Bathos',
          note: 'Abstract patriotic ideals are listed dismissively. Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don\'t double the word. The trailing single word reduces the noble concepts to throwaway filler, a devastating anti-war gesture.',
          color: '#f59e0b',
        },
        {
          type: 'Teacher note',
          note: 'Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don\'t double the word.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Dropped like luxuries in a yelling alarm',
      annotations: [
        {
          type: 'Simile',
          note: 'Patriotic ideals are compared to luxuries — unnecessary extras abandoned when survival is at stake.',
          color: '#22c55e',
        },
      ],
    },
    {
      text: 'To get out of that blue crackling air',
      annotations: [
        {
          type: 'Synaesthesia / Onomatopoeia',
          note: '"Blue crackling air" blends colour and sound to evoke the terrifying sensory overload of a battlefield under fire.',
          color: '#22c55e',
        },
      ],
    },
    // VERIFY: previously contained fabricated lines using the word 'survey' three times ("His terror's survey, he ran, and his survey / As a survey of heat – to get out – / Of the survey of pain."). The actual Hughes ending is 'His terror's touchy dynamite.' but until full closing verified against The Hawk in the Rain, lines removed conservatively.
    { text: "His terror's touchy dynamite." },
  ],

  /* ── Context ──────────────────────────────────────────────────── */

  context: `<p><strong>Ted Hughes</strong> (1930–1998) was one of Britain's most celebrated poets and served as UK Poet Laureate from 1984 until his death (succeeding John Betjeman, followed by Andrew Motion). Yorkshire-born, he was the husband of Sylvia Plath and father of Frieda and Nicholas Hughes. He is renowned for his visceral depictions of nature and violence; major collections include <em>The Hawk in the Rain</em> (1957), <em>Crow</em> (1970), and <em>Birthday Letters</em> (1998).</p>
<p><strong>Bayonet Charge</strong> was published in Hughes's debut collection, <em>The Hawk in the Rain</em> (1957) by Faber &amp; Faber. Hughes was born in 1930 and never fought in any war. He drew on his father William's WWI accounts — William survived Gallipoli as one of only seventeen survivors of his Lancashire Fusiliers regiment — to imagine the soldier's terror in this poem. William rarely spoke of his experiences, and that silence shaped Hughes's lifelong WWI imagination.</p>
<p>The soldier in the poem is deliberately <strong>unnamed and universal</strong> — referred to only as "he". This makes him an everyman figure, representing any soldier in any conflict. Hughes strips away the glory and romance traditionally associated with warfare to present <strong>raw, terrifying reality</strong>.</p>
<p>The poem is fundamentally <strong>anti-war</strong>. It challenges patriotic propaganda by showing how abstract ideals like "King, honour, human dignity, etcetera" become meaningless when a soldier faces death. (Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don't double the word.) Hughes was influenced by the <strong>First World War poets</strong> (Owen, Sassoon) and the existentialist idea that war reduces humans to mere bodies acting on survival instinct.</p>
<p>Published in <strong>1957</strong>, twelve years after WWII and during the early Cold War, the poem reflects a society still reckoning with the cost of conflict and suspicious of the rhetoric used to justify it.</p>`,

  contextAr: `<p><strong>Ted Hughes</strong> (1930–1998) واحد من أعرق شعراء بريطانيا، وشغل منصب UK Poet Laureate (شاعر البلاط في المملكة المتحدة) من 1984 إلى وفاته (خلف John Betjeman، وخلفه Andrew Motion). هو من مواليد Yorkshire، وكان زوج Sylvia Plath، وأبو Frieda وNicholas Hughes. اشتهر بتصوير الطبيعة والعنف بشكل عميق ومادي؛ ومن أبرز مجموعاته <em>The Hawk in the Rain</em> (1957)، و<em>Crow</em> (1970)، و<em>Birthday Letters</em> (1998).</p>
<p><strong>Bayonet Charge</strong> نُشرت في أول مجموعة لـHughes، <em>The Hawk in the Rain</em> (1957)، عن دار Faber &amp; Faber. Hughes انولد سنة 1930 وما خاض أي حرب بنفسه. اعتمد على روايات أبوه William عن الحرب العالمية الأولى — William نجا من معركة Gallipoli، وكان واحد من سبعة عشر ناجي بس من فرقته في Lancashire Fusiliers — عشان يتخيّل رعب الجندي في القصيدة. William ما كان يحكي عن تجاربه إلا نادراً، وهذا الصمت بنفسه شكّل خيال Hughes عن الحرب العالمية الأولى طول عمره.</p>
<p>الجندي في القصيدة <strong>بلا اسم وعام</strong> بشكل مقصود — يُشار له بضمير "he" بس. هذا الشي يخلّيه شخصية إنسان عادي، يمثّل أي جندي في أي نزاع. Hughes ينزع المجد والرومانسية اللي كانت تُلصق تقليدياً بالحرب، ويعرض <strong>الواقع الخام المرعب</strong> بدلها.</p>
<p>القصيدة في جوهرها <strong>ضد الحرب</strong>. تتحدّى الدعاية الوطنية وتبيّن كيف المثُل المجرّدة مثل "King, honour, human dignity, etcetera" تنهار وتصير بلا معنى لمّا يواجه الجندي الموت. (Hughes يكتب "etcetera" مرة وحدة — انقل النص حرفياً مثل ما طُبع؛ لا تختصرها إلى "etc."، ولا تكرّر الكلمة.) Hughes تأثّر بـ<strong>شعراء الحرب العالمية الأولى</strong> (Owen، Sassoon)، وبالفكرة الوجودية اللي تشوف إن الحرب ترجع الإنسان إلى مجرد جسد يتحرّك بغريزة البقاء.</p>
<p>القصيدة نُشرت سنة <strong>1957</strong>، يعني اثني عشر سنة بعد نهاية الحرب العالمية الثانية، في بداية الحرب الباردة. وهي تعكس مجتمع لسّا يحاسب نفسه على ثمن النزاع، ومرتاب من الخطاب اللي يبرّره.</p>`,

  /* ── Summary ──────────────────────────────────────────────────── */

  summary: `The poem follows an unnamed soldier during a bayonet charge across a battlefield. It captures a single, intense moment of combat.

Stanza 1: The poem opens in medias res — the soldier is already running across a field under fire. Hughes focuses on raw physical sensations: the heat, the sweat, the weight of the rifle. The soldier is not heroic but clumsy and overwhelmed.

Stanza 2: The action slows as the soldier's thoughts take over. He questions why he is fighting and what patriotism really means when faced with the reality of death. He is caught between instinct and reason, nearly stopping as he searches for meaning. The stanza captures a frozen moment of existential crisis.

Stanza 3: A yellow hare, injured and writhing in the crossfire, jolts the soldier back to action. Confronted by this image of innocent suffering, he abandons all abstract ideals — "King, honour, human dignity, etcetera" — and charges forward driven purely by terror and the survival instinct to escape the "blue crackling air" of the battlefield. (Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don't double the word.)

The poem's arc moves from action to thought and back to action, but the final action is fundamentally different: it is no longer motivated by patriotism but by primal fear.`,

  summaryAr: `القصيدة تتبع جندي بلا اسم وهو في هجوم بالحربة (bayonet charge) عبر ميدان معركة. تلتقط لحظة وحدة مكثّفة من القتال.

المقطع الأول: القصيدة تفتح in medias res — الجندي أصلاً يركض في الميدان وهو تحت النار. Hughes يركّز على الإحساسات الجسديّة الخام: الحر، العرق، ثقل البندقية. الجندي مو بطل، هو أخرق ومنهار.

المقطع الثاني: الحركة تبطّئ، وأفكار الجندي تستولي على المشهد. يسأل نفسه ليش يقاتل، وشو معنى الوطنية بصدق لمّا يواجه الموت. هو محاصر بين الغريزة والعقل، يكاد يوقف وهو يدوّر معنى. المقطع يلتقط لحظة مجمّدة من أزمة وجودية.

المقطع الثالث: أرنب بري أصفر، مصاب ويتلوّى في تبادل إطلاق النار، يهز الجندي ويرجعه للحركة. مواجهة هالمشهد من المعاناة البريئة تخلّيه يتخلّى عن كل المثُل المجرّدة — "King, honour, human dignity, etcetera" — ويهجم قدّام، مدفوع بالرعب الصافي وغريزة البقاء عشان يطلع من "blue crackling air" حق ميدان المعركة. (Hughes يكتب "etcetera" مرة وحدة — انقل النص حرفياً مثل ما طُبع؛ لا تختصرها إلى "etc."، ولا تكرّر الكلمة.)

قوس القصيدة يتحرّك من فعل إلى فكر ويرجع لفعل، بس الفعل الأخير مختلف اختلاف جذري: ما عاد دافعه الوطنية، صار دافعه الخوف البدائي.`,

  /* ── Form & Structure ─────────────────────────────────────────── */

  formAndStructure: `Form: Free verse — three stanzas with no regular metre and no fixed rhyme scheme. The poem is NOT iambic; it has no consistent metrical foot. Hughes uses sudden rhythmic shifts and a third-person omniscient voice that zooms tightly into a single soldier's perspective.

Structure: Three stanzas of roughly equal length, following a clear arc:
• Stanza 1 (action) — the physical reality of the charge
• Stanza 2 (thought) — the soldier's internal questioning
• Stanza 3 (action) — return to action, but now driven by terror, not patriotism

Opening: The poem begins in medias res with "Suddenly he awoke and was running", throwing the reader straight into the chaos without introduction or context.

No regular rhyme scheme or metre: The lack of a fixed pattern (free verse, not iambic) reflects the chaos and disorder of battle. Lines vary in length, mirroring the soldier's erratic movements and thoughts.

Enjambment: Used extensively throughout (e.g. "raw / In raw-seamed hot khaki"), creating a breathless, urgent pace that mirrors the soldier running. The reader is pulled forward just as the soldier is.

Caesura: Dashes and mid-line pauses (e.g. "Almost stopped –", "In bewilderment then he almost stopped –") create moments of hesitation, reflecting the soldier's doubt and near-paralysis.

Dramatic monologue perspective: Written in third person but with intimate access to the soldier's thoughts. This creates both closeness and universality — we feel his terror but he could be any soldier.

Cyclical movement: The poem ends with the same desperate running it began with, but the motivation has shifted from patriotic duty to raw survival — showing war strips away idealism.`,

  formAndStructureAr: `الشكل (FORM): free verse (شعر حر) — ثلاث مقاطع بدون وزن منتظم وبدون قافية ثابتة. القصيدة ليست iambic، وما فيها تفعيلة عَروضيّة موحّدة. Hughes يستخدم تحولات إيقاعيّة مفاجئة وصوت سارد بضمير الغائب omniscient، يقرّب الكاميرا بشكل ضيّق على منظور جندي واحد.

البنية (STRUCTURE): ثلاث مقاطع بأطوال متقاربة، تتبع قوس واضح:
• المقطع الأول (فعل) — الواقع الجسدي لهجوم الحربة
• المقطع الثاني (فكر) — التساؤل الداخلي للجندي
• المقطع الثالث (فعل) — الرجوع للحركة، بس هالمرة بدافع الرعب، مو الوطنية

الافتتاح (OPENING): القصيدة تبدأ in medias res بسطر "Suddenly he awoke and was running"، ترمي القارئ على طول في الفوضى بدون مقدّمة أو سياق.

غياب نظام القافية والوزن: غياب النمط الثابت (free verse، مو iambic) يعكس فوضى المعركة واضطرابها. أطوال الأبيات تتفاوت، تحاكي حركة الجندي وأفكاره غير المنتظمة.

Enjambment: مستخدم بشكل مكثّف عبر القصيدة (مثلاً "raw / In raw-seamed hot khaki")، يخلق إيقاع لاهث ومُلِحّ يحاكي ركض الجندي. القارئ ينجرّ قدّام مثل ما الجندي ينجرّ قدّام.

Caesura: شَرَطات ووقفات في وسط الأبيات (مثلاً "Almost stopped –"، "In bewilderment then he almost stopped –") تخلق لحظات تردّد، تعكس شك الجندي وقربه من الشلل.

منظور المونولوج الدرامي (DRAMATIC MONOLOGUE): مكتوبة بضمير الغائب، بس مع وصول حميم لأفكار الجندي. هالشي يحقّق القرب والشمولية بنفس الوقت — نحس برعبه، بس يقدر يكون أي جندي.

الحركة الدائرية (CYCLICAL MOVEMENT): القصيدة تنتهي بنفس الركض اليائس اللي بدأت فيه، بس الدافع تحوّل من الواجب الوطني إلى البقاء الخام — يبيّن إن الحرب تنزع المثاليّة.`,

  /* ── Key Quotes ────────────────────────────────────────────────── */

  keyQuotes: [
    {
      quote: 'Suddenly he awoke and was running',
      analysis:
        'The in medias res opening plunges the reader into action. "Suddenly" creates shock and disorientation. "Awoke" suggests the soldier has been jolted from the dream of patriotic idealism into the nightmare of reality.',
      themes: ['Reality of conflict', 'Fear', 'Loss of innocence'],
      analysisAr:
        'الافتتاح in medias res يرمي القارئ على طول داخل الفعل. كلمة "Suddenly" تخلق صدمة وتيه. وفعل "Awoke" يلمّح إن الجندي اهتزّ وانتشل من حلم المثاليّة الوطنية إلى كابوس الواقع.',
      themesAr: ['واقع النزاع', 'الخوف', 'فقدان البراءة'],
    },
    {
      quote: 'raw-seamed hot khaki, his sweat heavy',
      analysis:
        'Visceral tactile imagery emphasises physical suffering. "Raw-seamed" suggests chafing and pain; the uniform that represents duty is literally hurting him. The accumulation of uncomfortable detail strips war of romance.',
      themes: ['Reality of conflict', 'Suffering', 'Power of nature'],
      analysisAr:
        'تصوير لمسي (tactile imagery) عميق ومادي يأكّد على المعاناة الجسديّة. كلمة "Raw-seamed" توحي بالاحتكاك والألم؛ البدلة اللي ترمز للواجب فعلياً تأذيه. وتراكم التفاصيل غير المريحة ينزع كل رومانسية عن الحرب.',
      themesAr: ['واقع النزاع', 'المعاناة', 'قوة الطبيعة'],
    },
    {
      quote: 'The patriotic tear that had brimmed in his eye',
      analysis:
        'Ironic reference to the emotional patriotism that once motivated enlistment. The past tense "had brimmed" shows this feeling is already gone — replaced by terror. Patriotism is presented as naive and manipulative.',
      themes: ['Patriotism vs reality', 'Loss of innocence', 'Power'],
      analysisAr:
        'إشارة ساخرة (irony) للوطنية العاطفية اللي دفعت الجندي يتطوّع في الأصل. صيغة الماضي "had brimmed" تبيّن إن هذا الإحساس راح بالفعل — بدّله الرعب. والوطنية تتقدّم هنا على إنها ساذجة وأداة استغلال.',
      themesAr: ['الوطنية مقابل الواقع', 'فقدان البراءة', 'السلطة'],
    },
    {
      quote: 'In what cold clockwork of the stars and the nations',
      analysis:
        'A metaphor for the impersonal machinery of war and politics. "Cold clockwork" reduces human conflict to a mechanical, predetermined process. The soldier is merely a cog — his individual suffering is irrelevant to those in power.',
      themes: ['Power', 'Individual vs state', 'Helplessness'],
      analysisAr:
        'metaphor تصوّر آلة الحرب والسياسة الباردة وغير الإنسانية. "Cold clockwork" ترجع النزاع البشري إلى عملية آليّة محكومة سلفاً. والجندي مجرّد ترس صغير — معاناته الشخصية ما لها أي وزن عند أصحاب السلطة.',
      themesAr: ['السلطة', 'الفرد مقابل الدولة', 'العجز'],
    },
    {
      quote: 'King, honour, human dignity, etcetera',
      analysis:
        'The dismissive listing of patriotic abstractions, punctuated by Hughes\'s trailing "etcetera", is his most devastating anti-war line. Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don\'t double the word. These grand ideals are reduced to throwaway filler — luxuries the soldier cannot afford in the face of death.',
      themes: ['Patriotism vs reality', 'Loss of innocence', 'Anti-war'],
      analysisAr:
        'سرد المجرّدات الوطنية بأسلوب رافض (listing)، يتبعه "etcetera" زي ذيل ساقط من Hughes، هو أقوى سطر مضاد للحرب في القصيدة. Hughes يكتب "etcetera" مرة وحدة — انقل النص حرفياً مثل ما طُبع؛ لا تختصرها إلى "etc."، ولا تكرّر الكلمة. هذي المثُل العظيمة تنزل إلى مرتبة الحشو اللي يُرمى — كماليات (luxuries) ما يقدر الجندي يتحمّلها وهو في وجه الموت.',
      themesAr: ['الوطنية مقابل الواقع', 'فقدان البراءة', 'مضاد للحرب'],
    },
    {
      quote: 'a yellow hare that rolled like a flame',
      analysis:
        'The hare symbolises innocent nature destroyed by human conflict. "Rolled like a flame" creates a vivid, agonised image. The hare\'s pointless suffering mirrors the soldier\'s own — both are victims of forces beyond their control.',
      themes: ['Power of nature', 'Suffering', 'Innocence'],
      analysisAr:
        'الأرنب البري symbol للطبيعة البريئة اللي يدمّرها النزاع البشري. "Rolled like a flame" يخلق صورة حيّة معذّبة. ومعاناة الأرنب اللي بلا هدف تعكس معاناة الجندي نفسه — كلاهما ضحايا لقوى أكبر من قدرتهم على السيطرة.',
      themesAr: ['قوة الطبيعة', 'المعاناة', 'البراءة'],
    },
    {
      quote: 'blue crackling air',
      analysis:
        'Synaesthesia blending colour and sound creates a surreal, nightmarish battlefield atmosphere. "Crackling" is onomatopoeic, evoking gunfire. The sensory overload reflects the soldier\'s overwhelmed state.',
      themes: ['Reality of conflict', 'Fear', 'Sensory experience'],
      analysisAr:
        'synaesthesia تخلط بين اللون والصوت لتولّد جو ميدان معركة سُريالي كأنه كابوس. وكلمة "Crackling" onomatopoeic، تستدعي صوت الرصاص. وفيض الإحساسات الحسي يعكس حالة الانهيار اللي يعيشها الجندي.',
      themesAr: ['واقع النزاع', 'الخوف', 'التجربة الحسيّة'],
    },
    {
      quote: 'Dropped like luxuries in a yelling alarm',
      analysis:
        'A simile comparing patriotic ideals to luxuries — nice to have in peacetime but instantly abandoned in crisis. "Yelling alarm" suggests panic and urgency. Ideals cannot survive the reality of combat.',
      themes: ['Patriotism vs reality', 'Fear', 'Anti-war'],
      analysisAr:
        'simile يقارن المثُل الوطنية بـ"luxuries" — حلوة في وقت السلم بس يتم التخلّي عنها فوراً وقت الأزمة. "Yelling alarm" يوحي بالذعر والاستعجال. والمثُل ما تقدر تنجو في وجه واقع القتال.',
      themesAr: ['الوطنية مقابل الواقع', 'الخوف', 'مضاد للحرب'],
    },
  ],

  /* ── Language Devices ──────────────────────────────────────────── */

  languageDevices: [
    {
      device: 'In medias res',
      example: 'Suddenly he awoke and was running',
      effect:
        "The poem begins mid-action, immersing the reader in chaos without warning. This mirrors the soldier's own disorientation — there is no preparation, no context, just the raw terror of combat.",
      lineRef: 0,
      effectAr:
        'القصيدة تبدأ وسط الفعل، تغمر القارئ في الفوضى بدون أي تنبيه. هالشي يحاكي تيه الجندي نفسه — ما فيه تحضير، ما فيه سياق، فيه بس الرعب الخام للقتال.',
    },
    {
      device: 'Simile',
      example: 'Sweating like molten iron from the centre of his chest',
      effect:
        'Compares patriotic feeling to molten iron — something once forged with purpose is now a burning, destructive weight. The industrial imagery dehumanises the soldier, making him part of the war machine.',
      lineRef: 8,
      effectAr:
        'simile يقارن الإحساس الوطني بالحديد المنصهر — شي كان مصكوك بهدف، صار الحين ثقل محرق ومدمّر. والتصوير الصناعي ينزع الصفة الإنسانية عن الجندي، ويخلّيه جزء من ماكينة الحرب.',
    },
    {
      device: 'Listing / Bathos',
      example: 'King, honour, human dignity, etcetera',
      effect:
        'Three grand abstract nouns are listed then brutally dismissed with a trailing "etcetera". Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don\'t double the word. The listing initially builds gravitas, but the single dismissive "etcetera" collapses it, showing how meaningless these ideals are in combat.',
      lineRef: 22,
      effectAr:
        'ثلاث أسماء مجرّدة كبيرة تُسرد ثم تُرفض بقسوة بكلمة "etcetera" تترك ذيلها بعدهن. Hughes يكتب "etcetera" مرة وحدة — انقل النص حرفياً مثل ما طُبع؛ لا تختصرها إلى "etc."، ولا تكرّر الكلمة. الـlisting في البداية يبني هيبة وثقل، بس "etcetera" الواحدة الرافضة تنهي كل هالثقل، وتبيّن كيف هالمثُل صارت بلا أي معنى داخل القتال. هذي تقنية bathos.',
    },
    {
      device: 'Caesura',
      example: 'Almost stopped –',
      effect:
        "The abrupt dash and short line create a physical pause, mirroring the soldier's hesitation on the battlefield. It dramatises the tension between the instinct to flee and the impulse to stop and think.",
      lineRef: 5,
      effectAr:
        'الشَرْطَة المفاجئة والسطر القصير يخلقون وقفة ماديّة، تحاكي تردّد الجندي في الميدان. وتجسّد التوتر بين غريزة الهروب ودافع التوقّف والتفكير.',
    },
    {
      device: 'Violent imagery',
      example: 'shot-slashed furrows',
      effect:
        'The compound adjective "shot-slashed" combines the violence of bullets with the agricultural image of ploughed furrows, showing how war destroys the natural landscape. The harsh consonants create an aggressive sonic quality.',
      lineRef: 17,
      effectAr:
        'الصفة المركّبة "shot-slashed" تجمع عنف الرصاص مع الصورة الزراعية للأخاديد المحروثة، وتبيّن كيف الحرب تدمّر المنظر الطبيعي. والحروف الساكنة القاسية فيها تولّد جودة صوتيّة عدوانية.',
    },
    {
      device: 'Onomatopoeia / Synaesthesia',
      example: 'blue crackling air',
      effect:
        '"Crackling" mimics the sound of gunfire while "blue" adds a visual dimension, creating synaesthesia. This sensory overload conveys the overwhelming, nightmarish quality of the battlefield.',
      lineRef: 25,
      effectAr:
        '"Crackling" تحاكي صوت الرصاص (onomatopoeia)، و"blue" تضيف بُعد بصري، فينتج synaesthesia. وهذا الفيض الحسي يوصل جودة الميدان الكابوسيّة اللي تطغى على الجندي وتطمسه.',
    },
    {
      device: 'Symbolism',
      example: 'a yellow hare that rolled like a flame',
      effect:
        "The hare symbolises nature and innocence caught in human violence. Its suffering — silent, wide-eyed, purposeless — mirrors the soldier's own. It becomes the catalyst that strips away his last patriotic illusions.",
      lineRef: 19,
      effectAr:
        'الأرنب symbol للطبيعة والبراءة اللي علقت في العنف البشري. ومعاناته — صامتة، بعيون مفتوحة بسعة، وبلا هدف — تعكس معاناة الجندي. ويصير هو المحفّز اللي يجرّد الجندي من آخر أوهامه الوطنية.',
    },
    {
      device: 'Metaphor',
      example: 'cold clockwork of the stars and the nations',
      effect:
        'War is presented as a vast, impersonal mechanism. "Cold" removes any human warmth; "clockwork" implies predetermined, mechanical forces. The soldier is reduced to a component in a machine he cannot understand or control.',
      lineRef: 11,
      effectAr:
        'الحرب تتقدّم على إنها آلة هائلة بلا روح إنسانية. كلمة "Cold" تنزع أي دفء بشري؛ و"clockwork" توحي بقوى آليّة مقرّرة سلفاً. والجندي ينقص لمجرد قطعة داخل ماكينة ما يقدر يفهمها ولا يسيطر عليها.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bc-1',
    question: 'What does the opening word "Suddenly" achieve?',
    type: 'multiple-choice',
    options: [
      'It creates a calm, reflective opening',
      "It plunges the reader into chaos mid-action (in medias res), mirroring the soldier's disorientation",
      'It introduces a flashback',
      'It signals the end of the battle',
    ],
    correctIndex: 1,
    explanation:
      'The poem begins in medias res — mid-action. "Suddenly" throws both soldier and reader into the chaos of a charge without preparation or context, creating immediate disorientation.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bc-2',
    question: 'What does "raw-seamed hot khaki" describe?',
    type: 'multiple-choice',
    options: [
      'A comfortable, well-fitted uniform',
      "The rough, chafing reality of a soldier's uniform — far from heroic",
      'A type of camouflage',
      'The colour of the battlefield',
    ],
    correctIndex: 1,
    explanation:
      'The tactile imagery of "raw-seamed hot khaki" emphasises physical discomfort and the unglamorous reality of war. The uniform chafes and burns — war is bodily suffering, not heroic romance.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bc-3',
    question: "What happens to the soldier's patriotic motivation during the poem?",
    type: 'multiple-choice',
    options: [
      'It grows stronger throughout',
      'It disintegrates — patriotism becomes meaningless in the reality of combat',
      'It helps him complete the charge successfully',
      'It is replaced by religious faith',
    ],
    correctIndex: 1,
    explanation:
      '"The patriotic tear that had brimmed in his eye" is now meaningless. Patriotism, which once motivated him, dissolves under the reality of bullets, terror, and confusion. Ideology cannot survive contact with real violence.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'bc-4',
    question: 'What does the metaphor "cold clockwork of the stars and the nations" suggest?',
    type: 'multiple-choice',
    options: [
      'The soldier admires the night sky',
      'War is presented as an impersonal, mechanical system — soldiers are just cogs',
      'The soldier is reading a compass',
      'The stars are guiding him to safety',
    ],
    correctIndex: 1,
    explanation:
      '"Cold clockwork" suggests war is a vast, impersonal machine. The individual soldier is just a cog in the mechanism of nations and their political machinery — his humanity is irrelevant.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bc-5',
    question: 'What does the image of the hare symbolise in stanza 3?',
    type: 'multiple-choice',
    options: [
      'A lucky omen for the soldier',
      "An innocent creature caught in human violence — mirroring the soldier's own helplessness",
      'A target for hunting practice',
      'The speed of the charge',
    ],
    correctIndex: 1,
    explanation:
      'The hare "rolled like a flame" becomes a powerful symbol of innocent nature destroyed by human conflict. Its helpless suffering mirrors the soldier\'s own — both are caught in something beyond their control.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bc-6',
    question: 'How does Hughes use enjambment in the poem?',
    type: 'multiple-choice',
    options: [
      'To create neat, contained sentences',
      "To create breathless momentum that mirrors the soldier's desperate sprint across the battlefield",
      'To slow the poem down',
      'To separate the stanzas clearly',
    ],
    correctIndex: 1,
    explanation:
      'Extensive enjambment carries lines forward without pause, creating the breathless, headlong momentum of the charge. The reader is swept forward just as the soldier is swept across the battlefield.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'bc-7',
    question: 'Who was Ted Hughes and what influenced this poem?',
    type: 'multiple-choice',
    options: [
      'A WWI soldier who experienced bayonet charges firsthand',
      "Poet Laureate who drew on his father's WWI experiences to write about the reality of combat",
      'A war correspondent during WWII',
      'A pacifist who never discussed war',
    ],
    correctIndex: 1,
    explanation:
      "Hughes was born in 1930 and never fought in any war. He drew on his father William's WWI accounts — William survived Gallipoli as one of only seventeen survivors of his Lancashire Fusiliers regiment — to imagine the soldier's terror in this poem. Hughes was UK Poet Laureate from 1984 until his death in 1998 (succeeding John Betjeman; followed by Andrew Motion).",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'bc-8',
    question: 'What form does the poem take?',
    type: 'multiple-choice',
    options: [
      'Regular quatrains with a clear rhyme scheme',
      'Three stanzas in free verse with no consistent rhyme or metre — reflecting the chaos of battle',
      'A sonnet in iambic pentameter',
      'Rhyming couplets throughout',
    ],
    correctIndex: 1,
    explanation:
      'The poem is in free verse — three stanzas of unequal length with no regular rhyme scheme and no iambic metre. This irregular structure mirrors the chaos and unpredictability of a bayonet charge.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'bc-9',
    question: 'How does the simile "sweating like molten iron" transform the idea of patriotism?',
    type: 'multiple-choice',
    options: [
      'It shows patriotism makes the soldier strong',
      'It presents patriotism as a burning, painful, industrial force inside the soldier — destructive rather than noble',
      'It describes the temperature of the battlefield',
      'It compares the soldier to a blacksmith',
    ],
    correctIndex: 1,
    explanation:
      'Patriotism is no longer a noble ideal but a painful, burning substance like molten metal. The industrial imagery suggests the soldier has been forged by the machinery of war — his idealism has become a source of agony.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'bc-10',
    question:
      'Which poem from the Power and Conflict anthology provides the best comparison with Bayonet Charge on the reality of combat?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'Exposure by Wilfred Owen',
      'Tissue by Dharker',
      'The Émigrée by Rumens',
    ],
    correctIndex: 1,
    explanation:
      'Both Bayonet Charge and Exposure present the horror of war, but while Exposure shows soldiers enduring passive suffering from the elements, Bayonet Charge captures the terrifying momentum of active combat.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Bayonet Charge explores the terror of combat, the collapse of patriotic ideals under fire, and the dehumanising effect of war on the individual soldier.',
    keyPoints: [
      'Terror and chaos — the soldier is disoriented, stumbling, barely in control',
      'Collapse of patriotism — ideology crumbles under the reality of violence',
      'Dehumanisation — the soldier becomes a body in motion, not a person',
      'Nature as victim — the hare symbolises innocent destruction by human conflict',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Hughes uses visceral tactile imagery, violent similes, and industrial metaphor to create an intensely physical experience of combat.',
    keyPoints: [
      '"Raw-seamed hot khaki" — tactile imagery emphasising bodily discomfort',
      '"Cold clockwork of the stars and the nations" — war as impersonal machinery',
      '"Sweating like molten iron" — patriotism transformed into painful industrial imagery',
      'The hare "rolled like a flame" — innocent nature consumed by violence',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Three irregular stanzas with no consistent rhyme, using enjambment and caesura to create breathless momentum interrupted by moments of frozen terror.',
    keyPoints: [
      'In medias res opening — "Suddenly" drops reader into mid-action chaos',
      'Enjambment creates breathless, headlong momentum',
      'Caesura and dashes — moments of frozen hesitation mid-charge',
      'Stanza 2 is the moment of questioning; stanzas 1 and 3 are pure physical action',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Hughes present the reality of conflict in Bayonet Charge?',
  'Compare how the experience of a soldier is presented in Bayonet Charge and one other poem from the anthology.',
  'How does Hughes use language and structure to convey the terror and chaos of battle?',
]

/* ── Comparisons ─────────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Exposure',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/power-and-conflict/exposure',
    points: [
      'Both present the brutal physical reality of war, stripping away romantic ideals.',
      'Owen focuses on the slow, grinding suffering of waiting; Hughes captures the explosive terror of a charge.',
      'Both use nature as a hostile force — Owen\'s freezing cold vs Hughes\'s "shot-slashed furrows".',
      'Both poems question why soldiers fight: Owen asks "What are we doing here?" while Hughes\'s soldier searches for "the reason".',
    ],
  },
  {
    poem: 'Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    href: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
    points: [
      'Both depict a military charge, but with completely opposing perspectives on war.',
      "Tennyson glorifies the soldiers' obedience and sacrifice; Hughes shows a terrified individual driven by survival instinct.",
      'Tennyson uses a regular, galloping rhythm to celebrate the charge; Hughes uses irregular lines and enjambment to convey chaos.',
      'Tennyson\'s soldiers are noble ("Theirs not to reason why"); Hughes\'s soldier desperately searches for reason and finds none.',
    ],
  },
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    href: '/revision/poetry/power-and-conflict/remains',
    points: [
      'Both explore the psychological impact of combat on individual soldiers.',
      'Hughes captures terror in the moment of action; Armitage shows the lasting trauma afterwards (PTSD).',
      'Both use a single, unnamed/everyman soldier to universalise the experience of war.',
      'Both challenge the idea that soldiers are heroic — instead presenting them as vulnerable, frightened humans.',
    ],
  },
]

/* ── Theme tokens ────────────────────────────────────────────────── */

const THEMES = [
  'Power of nature',
  'Reality of conflict',
  'Loss of innocence',
  'Fear',
  'Individual vs state',
  'Anti-war',
  'Patriotism vs reality',
  'Suffering',
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function BayonetChargePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Bayonet Charge by Ted Hughes — Analysis & Annotations"
        description="Line-by-line analysis of Bayonet Charge with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          {
            name: 'Bayonet Charge',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/bayonet-charge',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="Bayonet Charge (AQA Power and Conflict)"
        description="Analysis of Bayonet Charge for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="AQA Power and Conflict anthology cluster"
        url="https://theenglishhub.app/revision/poetry/power-and-conflict/bayonet-charge"
      />
      {/* ── Back nav ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power &amp; Conflict
        </Button>

        <h1 className="text-heading-lg font-heading text-foreground">Bayonet Charge</h1>
        <p className="text-body-sm text-muted-foreground">
          Ted Hughes &middot; <em>The Hawk in the Rain</em> (1957)
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
          AQA
        </Badge>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {theme}
          </span>
        ))}
      </div>

      {/* ── Interactive viewer ────────────────────────────────────── */}
      <StudyTools
        textName="Bayonet Charge"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Bayonet Charge"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={BAYONET_CHARGE} />

      {/* ── Comparisons ──────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with other poems</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div key={c.poem} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <p className="text-xs text-muted-foreground">{c.poet}</p>
              </div>

              <ul className="space-y-1.5">
                {c.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed text-card-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                render={<Link href={c.href} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        &ldquo;Bayonet Charge&rdquo; by Ted Hughes is published by Faber &amp; Faber in{' '}
        <em>The Hawk in the Rain</em> (1957). Short quotations are reproduced here under the fair
        dealing provision of the CDPA 1988 for the purposes of criticism and review. Full text
        available in your AQA Power &amp; Conflict anthology.
      </p>
    </div>
  )
}
