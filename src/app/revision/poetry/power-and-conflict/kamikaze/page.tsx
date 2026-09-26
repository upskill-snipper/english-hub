'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompareArrows, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────── */

const kamikazeData: PoemData = {
  title: 'Kamikaze',
  poet: 'Beatrice Garland',
  // NOTE: "Kamikaze" (Beatrice Garland) is in copyright. To avoid reproducing
  // the poem, each line below is given as a PARAPHRASE in the site's own words,
  // one entry per line of the poem, and the notes quote only short phrases.
  // Students must read the full text in the AQA Power and Conflict anthology.
  // Until 25 September 2026 this array printed the poem verbatim, and only its
  // first stanza correctly: most of the rest had been replaced by lines that are
  // not in the poem, and the stanza breaks fell in the wrong places. The viewer
  // numbers entries by position, so the entries below follow the poem's own
  // shape: seven stanzas of six lines.
  //
  // Until 26 September 2026 the key quotes, devices, summary and quiz below
  // still quoted lines that are not in the poem (about fish, rain, pigeons, a
  // flight into the sun and the ocean's selvedges), misdescribed its stanzas
  // and voices, and quoted 127 distinct words of it against a fair-dealing
  // share of 33. Every quotation left on this page was checked word for word
  // that day against AQA's published anthology sample
  // (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF), which
  // prints the poem by permission of Templar Poetry. What the page no longer
  // quotes it describes in its own words, by stanza.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] The daughter’s father set off as the sun came up',
      annotations: [
        {
          type: 'Narrative voice',
          note: "Third-person narration -- an outside voice retells the daughter's account of her father, distancing the reader from the events.",
          color: '#60a5fa',
        },
        {
          type: 'Imagery',
          note: 'Setting out at sunrise suggests hope and a new beginning, which is ironic when the mission is one of death.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] carrying water in a flask and a samurai blade',
      annotations: [
        {
          type: 'Juxtaposition',
          note: 'An everyday water flask is listed beside a ceremonial samurai sword, blending the domestic with the militaristic.',
          color: '#a78bfa',
        },
      ],
    },
    { text: '[Paraphrase] in the plane’s cabin; his head was shaved' },
    {
      text: '[Paraphrase] and filled with strong ritual chants',
      annotations: [
        {
          type: 'Religious imagery',
          note: 'The chants that fill his shaved head (see Key Quotes) suggest ritualistic, almost religious preparation: the pilot is sealed inside cultural and ceremonial language.',
          color: '#34d399',
        },
      ],
    },
    { text: '[Paraphrase] with only enough fuel to fly there and not back,' },
    {
      text: '[Paraphrase] a trip that would make him part of history.',
      annotations: [
        {
          type: 'Euphemism',
          note: 'The trip into history, begun on the line before, is a chilling euphemism for the suicide mission: death reframed as historical immortality (see Key Quotes).',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },

    // Stanza 2
    {
      text: '[Paraphrase] But midway, the daughter imagined,',
      annotations: [
        {
          type: 'Turning point',
          note: 'The opening conjunction marks the turn: halfway to his target, the natural beauty far below -- boats, sea, fish -- begins to pull the pilot away from his mission. Nature represents life over death.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] telling the story years afterwards to her own children,',
      annotations: [
        {
          type: 'Structure',
          note: 'This framing clause is oral storytelling: the daughter is retelling the story to her own children, years later, and imagining what her father saw.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] he surely gazed a long way below',
      annotations: [
        {
          type: 'Perspective',
          note: 'Looking a long way down, the pilot gains literal and figurative perspective: he sees the world from above and begins to reconsider his mission.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] at the tiny boats out fishing',
      annotations: [
        {
          type: 'Diminutive',
          note: 'Calling the fishing boats small makes them seem vulnerable and precious from the air, in contrast with the enormity of the suicide mission.',
          color: '#34d399',
        },
      ],
    },
    {
      text: '[Paraphrase] spread in a line like festive flags',
      annotations: [
        {
          type: 'Simile',
          note: 'The boats are compared to the strings of small flags hung up for celebrations (see Language Devices): from the air the scene looks festive and full of life, the opposite of his mission.',
          color: '#34d399',
        },
      ],
    },
    {
      text: '[Paraphrase] on a clear, see-through sea of blue and green',
      annotations: [
        {
          type: 'Colour imagery',
          note: 'The colours of the sea (see Key Quotes) are vivid and beautiful, evoking the sensory richness of life that the pilot would sacrifice.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },

    // Stanza 3
    { text: '[Paraphrase] and under the boats, curving in broad bands,' },
    { text: '[Paraphrase] like an enormous banner swung to one side' },
    { text: '[Paraphrase] and then back again, tracing a looping figure-eight pattern,' },
    {
      text: '[Paraphrase] swam vast, shadowy schools of fish,',
      annotations: [
        {
          type: 'Double meaning',
          note: '"shoals" means both groups of fish and shallow, dangerous waters -- reflecting the pilot\'s dangerous situation.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] which gleamed silver whenever their undersides',
      annotations: [
        {
          type: 'Colour imagery',
          note: 'The fish flash "silver" as they turn, catching the light and creating a motif of natural beauty that opposes the darkness of war.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] twisted round to face the sunlight.',
      annotations: [
        {
          type: 'Nature imagery',
          note: 'The repeated s-sounds across this line and the one before create a flowing, mesmerising sound that mirrors the beauty of the natural world.',
          color: '#34d399',
        },
        {
          type: 'Contrast',
          note: 'The fish turning towards the sun echoes the sunrise at which the pilot set out -- but the fish turn towards life and light, not death.',
          color: '#34d399',
        },
      ],
    },
    { text: '' },

    // Stanza 4
    {
      text: '[Paraphrase] and he would have recalled how he',
      annotations: [
        {
          type: 'Memory',
          note: "The shift to memory -- the pilot recalls waiting by the sea with his brothers for his father's fishing boat to come in, connecting past and present.",
          color: '#60a5fa',
        },
      ],
    },
    { text: '[Paraphrase] together with his brothers, as they waited by the sea,' },
    { text: '[Paraphrase] piled up little towers of pale grey stones' },
    { text: '[Paraphrase] to find out whose would survive the longest' },
    { text: '[Paraphrase] against the rough rush of incoming waves' },
    { text: '[Paraphrase] as the waves carried the boys’ father’s boat back unharmed' },
    { text: '' },

    // Stanza 5
    {
      text: '[Paraphrase] (the daughter interrupts to say it was her grandfather’s boat) coming unharmed',
    },
    { text: '[Paraphrase] to land, soaked with seawater and overflowing' },
    { text: '[Paraphrase] with mackerel patterned like clouds,' },
    { text: '[Paraphrase] dark crabs and delicate, frond-like prawns,' },
    {
      text: '[Paraphrase] scattered silvery whitebait, and on one occasion',
      annotations: [
        {
          type: 'Colour imagery',
          note: '"silver" recurs -- linking the fish the pilot sees from the air with the fish of his childhood memory, connecting the natural world with home.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] a tuna, like a sinister royal, powerful and threatening.' },
    { text: '' },

    // Stanza 6 -- the daughter now speaks in her own voice
    { text: '[Paraphrase] Even though he returned home alive,' },
    {
      text: '[Paraphrase] his wife, the daughter’s mother, stopped speaking',
      annotations: [
        {
          type: 'Perspective shift',
          note: "The voice changes: the daughter now speaks in her own words about her mother, and the poem turns from the father's flight to the response of his wife and neighbours, who punish him with silence.",
          color: '#a78bfa',
        },
      ],
    },
    { text: '[Paraphrase] when he was there, and she would not look at him' },
    { text: '[Paraphrase] The neighbours also behaved towards him' },
    {
      text: '[Paraphrase] as if he had ceased to exist;',
      annotations: [
        {
          type: 'Social death',
          note: 'His wife and neighbours enact a living death -- he is physically present but socially erased, which may be worse than the kamikaze death.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] only the children, the daughter among them, went on chatting and laughing',
    },
    { text: '' },

    // Stanza 7 -- the outside narrator returns in the last two lines
    { text: '[Paraphrase] until, little by little, the children learned it too:' },
    { text: '[Paraphrase] to keep quiet and to behave as if' },
    { text: '[Paraphrase] he had not come back, as if this man' },
    { text: '[Paraphrase] had stopped being the dad they once loved.' },
    {
      text: '[Paraphrase] At times, the daughter said, her father surely asked himself',
      annotations: [
        {
          type: 'Shift',
          note: 'The speculative "must have" reminds us this is the daughter\'s reconstruction -- she can never truly know her father\'s thoughts.',
          color: '#a78bfa',
        },
        {
          type: 'Cyclical ending',
          note: 'The closing lines return to the outside narrator of the opening ("she said"), closing the frame around the daughter\'s story. The poem offers no answer to its question -- the ambiguity is the point.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] which of the two kinds of death was the better one.',
      annotations: [
        {
          type: 'Irony',
          note: 'The question is not whether to die, but how -- yet by turning back, the father chooses a kind of social death instead of a physical one.',
          color: '#60a5fa',
        },
        {
          type: 'Irony',
          note: 'By choosing life, the pilot condemned himself to a different kind of death: social erasure by his own family.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>Beatrice Garland</strong> is a contemporary British poet and NHS researcher. <em>Kamikaze</em> was published in her 2013 collection <em>The Invention of Fireworks</em>.</p>
<p>The poem is inspired by the <strong>Japanese kamikaze pilots</strong> of World War II -- young men who flew suicide missions, deliberately crashing their planes into Allied warships. The word <em>kamikaze</em> translates as <strong><em>divine wind</em></strong>, referencing a typhoon that saved Japan from Mongol invasion in 1281.</p>
<p>In Japanese culture, the kamikaze missions were bound up with <strong>honour, duty, and sacrifice</strong>. Pilots were celebrated as heroes; their deaths were seen as the ultimate act of loyalty to the Emperor. To refuse or fail in a mission brought profound <strong>shame</strong> (<em>haji</em>) -- not just on the individual, but on the entire family.</p>
<p>Garland has said she was fascinated by accounts of the very few pilots who <strong>turned back</strong> from their missions. These men were shunned by their families and communities, treated as if they were already dead. The poem explores the impossible choice between <strong>duty to country</strong> and the <strong>instinct to live</strong>, and asks whether survival can be worse than death.</p>
<p>The poem connects to broader themes of <strong>conflict, identity, and the power of nature</strong> to remind us of what matters most.</p>`,

  contextAr: `<p><strong>Beatrice Garland</strong> شاعرة بريطانية معاصرة، وباحثة في الـNHS. قصيدة <em>Kamikaze</em> نُشرت في مجموعتها سنة 2013 <em>The Invention of Fireworks</em>.</p>
<p>القصيدة مستوحاة من طيّاري الـ<strong>kamikaze</strong> اليابانيّين في الحرب العالمية الثانية - شباب طاروا في مهمّات انتحارية، يضربون طائراتهم عمداً في السفن الحربية للحلفاء. وكلمة <em>kamikaze</em> تترجم "الريح الإلهية" (divine wind)، نسبةً إلى عاصفة typhoon اللي أنقذت Japan من غزو المغول سنة 1281.</p>
<p>في الثقافة اليابانية، مهمّات الـkamikaze كانت مرتبطة بالـ<strong>شرف، الواجب، والتضحية</strong>. الطيّارون كانوا يحتفى فيهم كأبطال؛ وموتهم كان يُشاف كأقصى فعل ولاء للإمبراطور. ورفض المهمّة أو الفشل فيها كان يجيب <strong>عار</strong> عميق (<em>haji</em>) - مو بس على الشخص نفسه، بل على العائلة كلها.</p>
<p>Garland قالت إنها انبهرت بقصص الطيّارين القلائل اللي <strong>رجعوا</strong> من مهمّاتهم. هؤلاء الرجال نبذتهم عوائلهم ومجتمعاتهم، وتعاملوا معاهم كأنهم ميّتين أصلاً. القصيدة تستكشف الخيار المستحيل بين <strong>الواجب تجاه الوطن</strong> و<strong>غريزة البقاء</strong>، وتسأل: هل ممكن إن العيش يكون أسوأ من الموت؟</p>
<p>القصيدة تتّصل بمواضيع أوسع: <strong>الصراع، الهويّة، وقوة الطبيعة</strong> اللي تذكّرنا بشنو اللي يهمّ فعلاً.</p>`,

  summary: `The poem tells the story of a Japanese kamikaze pilot during World War II who sets out on his suicide mission at sunrise but turns back before reaching his target. An outside narrator retells, in the third person, the account his daughter later gave her own children.

Halfway there, the daughter imagines, he looked down at the natural beauty below: the small fishing boats, the clear sea, and great masses of fish flashing as they turned in the light. The view takes him back to his childhood, waiting by the sea with his brothers for their father's boat to come home safe with its catch.

The beauty of the natural world and the pull of memory overwhelm his sense of military duty. He turns back and returns home.

However, his survival brings no relief. His family, bound by the culture of honour and shame, treat him as if he had ceased to exist: his wife will not speak to him or look at him, and the neighbours shun him too. At first the children still chatter and laugh, but gradually they learn silence as well. He becomes a ghost in his own home, physically alive but socially dead.

The poem ends with a devastating, unanswered question in its last line: which death would have been better, the quick death of the kamikaze mission, or the slow, living death of being erased by his own family?`,

  summaryAr: `القصيدة تحكي قصة طيّار kamikaze ياباني في الحرب العالمية الثانية، يطلع في مهمّته الانتحارية مع شروق الشمس، بس يرجع قبل ما يوصل هدفه. راوٍ من برّا يعيد بصيغة الغائب الحكاية اللي حكتها بنته لعيالها بعد سنين.

في نص الطريق، على حسب تخيّل البنت، طالع الطيّار تحت وشاف جمال الطبيعة: قوارب الصيد الصغيرة، والبحر الصافي، وأسراب السمك الداكنة تلمع وهي تلفّ في الضوء. هالمنظر يرجّعه لطفولته، لمّا كان ينتظر مع إخوانه على الشاطئ رجوع قارب أبوهم سالم ومعاه صيده.

جمال الطبيعة وقوة الذاكرة يطغون على إحساسه بالواجب العسكري. فيرجع بطيّارته للبيت.

بس بقاؤه على قيد الحياة ما يجيب أي راحة. عائلته، اللي مكبّلة بثقافة الشرف والعار، تتعامل معاه كأنه ما عاد موجود: زوجته ما تكلّمه ولا تطالع في عيونه، والجيران نفس الشي. العيال في البداية يسولفون ويضحكون، بس بالتدريج يتعلّمون السكوت هم بعد. ويصير شبح في بيته - حيّ جسدياً، بس ميّت اجتماعياً.

القصيدة تنتهي في بيتها الأخير بسؤال مدمّر بلا إجابة: أيّ الموتتين كان أفضل، موت سريع في مهمّة الـkamikaze، ولا موت بطيء وحيّ تحت محو عائلته؟`,

  formAndStructure: `FORM:
- Free verse with no regular rhyme scheme, reflecting the fragmented, retold nature of the story
- A framed narrative: an outside narrator retells the daughter's account, and in stanzas 6 and 7 the daughter speaks in her own first-person voice
- Enjambment is used extensively throughout, creating a flowing, continuous movement that mirrors the pilot's flight and the unstoppable pull of memory

STRUCTURE:
- 7 stanzas of six lines each, moving from the mission to memories to consequences
- The poem begins in the third person, introducing the pilot only as her father, and shifts perspective later
- Stanzas 1 to 5 describe the pilot's flight, the natural imagery below him and the childhood memory it stirs, all in one long sentence
- Stanzas 6 and 7 turn to the family's response and the consequences of his return
- In the anthology the daughter's own words, from the start of stanza 6 to the fourth line of stanza 7, are printed in italics, marking a shift to a more intimate, internal voice
- Cyclical structure: the last two lines return to the outside narrator of the opening, and the poem ends on its unanswered question about which death was better

KEY STRUCTURAL FEATURES:
- Enjambment across stanza breaks (stanza 1 into stanza 2, and stanza 4 into stanza 5) creates continuous motion and mirrors the pilot's unbroken thought process
- Caesura is used sparingly but effectively: in the fifth line of the last stanza the inserted reporting clause reminds us this is a secondhand account
- The shift from narrative to direct reflection in the final lines creates emotional impact
- No speech marks are used, blurring the boundary between the daughter's voice and the father's experience`,

  formAndStructureAr: `الشكل (FORM):
- شعر حرّ (free verse) بلا نظام قافية ثابت، يعكس طبيعة القصة المجزّأة المروية من فم لفم.
- سرد قصصي بإطار: راوٍ من برّا يعيد حكاية البنت، وفي المقطعين 6 و7 البنت تتكلّم بصوتها هي، بضمير المتكلّم.
- الـenjambment مستخدم بكثرة عبر القصيدة كلها، يخلق حركة سايلة متواصلة تحاكي طيران الطيّار وقوّة جذب الذاكرة اللي ما توقف.

البنية (STRUCTURE):
- 7 مقاطع، كل مقطع ستّة أبيات، تنقّل القارئ من المهمّة، للذكريات، للعواقب.
- القصيدة تبدأ بصيغة الغائب، وتقدّم الطيّار بس على إنه أبوها، وبعدين وجهة النظر تتبدّل.
- المقاطع 1-5 توصف رحلة الطيّار، والطبيعة اللي تحته، وذكرى الطفولة اللي تصحى فيه، وكلها جملة وحدة طويلة.
- المقطعان 6 و7 ينتقلون لرد فعل العائلة وعواقب رجوعه.
- في الـanthology، كلام البنت نفسها، من بداية المقطع 6 لين البيت الرابع من المقطع 7، مكتوب italic، ويأشّر على انتقال لصوت داخلي وأكثر حميمية.
- بنية دائرية (cyclical): آخر بيتين يرجعون للراوي اللي من برّا مثل البداية، والقصيدة تنتهي بسؤالها اللي بلا جواب: أيّ موت كان أفضل.

أبرز السمات البنيوية:
- الـenjambment اللي يعبر فواصل المقاطع (من المقطع 1 للمقطع 2، ومن المقطع 4 للمقطع 5) يخلق حركة متواصلة، يحاكي تيّار فكر الطيّار اللي ما ينقطع.
- الـcaesura مستخدمة بقلّة، بس بفعالية: في البيت الخامس من المقطع الأخير، جملة الإسناد المقحومة تذكّرنا إن الحكاية يد ثانية (secondhand).
- التحوّل من السرد للتأمّل المباشر في الأبيات الأخيرة يخلق أثر عاطفي قوي.
- ما فيه علامات اقتباس (speech marks)، فتختلط حدود صوت البنت وتجربة الأب.`,

  keyQuotes: [
    {
      quote: 'one-way / journey into history',
      analysis:
        'A chilling euphemism for the suicide mission: death is recast as an entry into history, as if the pilot were already a monument. The line break falls inside the phrase, so the reader, like the pilot, is carried past the point of no return.',
      themes: ['Duty', 'Conflict', 'Death'],
      analysisAr:
        'euphemism مخيفة لمهمّة الانتحار: الموت يتقدّم على إنه دخول للتاريخ، كأن الطيّار صار من الحين نصب تذكاري. وفاصل البيت يطيح في نص العبارة، فالقارئ، مثل الطيّار، ينسحب لورا نقطة اللاعودة.',
      themesAr: ['الواجب', 'الصراع', 'الموت'],
    },
    {
      quote: 'powerful incantations',
      analysis:
        'The pilot’s shaved head is filled with ritual chants, evoking religious and military preparation. He is wrapped in ceremonial language that has readied him for sacrifice: culture, not personal will, drives the mission.',
      themes: ['Duty', 'Conflict', 'Identity'],
      analysisAr:
        'راس الطيّار الحليق مليان تلاوات طقسية، تستحضر تحضير ديني وعسكري. الطيّار ملفوف بلغة طقوسية حضّرته للتضحية: الثقافة، مو الإرادة الشخصية، هي اللي تسيّر المهمّة.',
      themesAr: ['الواجب', 'الصراع', 'الهويّة'],
    },
    {
      quote: 'green-blue translucent sea',
      analysis:
        'Rich colour imagery evoking the vivid beauty of the Japanese coastline. "Translucent" suggests clarity and openness, the opposite of the murky moral situation the pilot faces.',
      themes: ['Nature', 'Memory', 'Beauty vs Death'],
      analysisAr:
        'صور لونية غنية تستحضر جمال الساحل الياباني الزاهي. كلمة "translucent" توحي بالصفاء والانفتاح - عكس الموقف الأخلاقي الضبابي اللي يواجهه الطيّار.',
      themesAr: ['الطبيعة', 'الذاكرة', 'الجمال مقابل الموت'],
    },
    {
      quote: 'cloud-marked mackerel',
      analysis:
        'A precise, tender detail from the catch his father’s boat brought home (stanza 5). The compound adjective shows the pilot truly seeing, and remembering, the world around him, reconnecting with life rather than death.',
      themes: ['Nature', 'Memory', 'Identity'],
      analysisAr:
        'تفصيل دقيق وحنون من صيد قارب أبوه لمّا رجع للشاطئ (المقطع 5). الصفة المركّبة تبيّن إن الطيّار صار فعلاً يشوف، ويتذكّر، العالم اللي حوله، ويعيد ربط نفسه بالحياة، مو بالموت.',
      themesAr: ['الطبيعة', 'الذاكرة', 'الهويّة'],
    },
    {
      quote: 'no longer existed',
      analysis:
        'His wife and the neighbours enact a social death: the pilot is physically present but treated as if he were gone. The comparison (stanza 6) presents this as a deliberate, chosen act of erasure, and in stanza 7 the children are taught it too, so the silence is learned, not natural.',
      themes: ['Shame', 'Family', 'Identity'],
      analysisAr:
        'زوجته والجيران ينفّذون موت اجتماعي: الطيّار حاضر جسدياً، بس يتعاملون معاه كأنه راح. والتشبيه (المقطع 6) يقدّم هالشي كفعل محو متعمّد ومختار، وفي المقطع 7 العيال يتعلّمونه هم بعد، يعني الصمت شي يتعلّمونه، مو شي طبيعي.',
      themesAr: ['العار', 'العائلة', 'الهويّة'],
    },
    {
      quote: 'the better way to die',
      analysis:
        'The last words of the poem leave its question unanswered. The word "better" is bitterly ironic: neither option offers a good outcome. The pilot must choose between physical death and social death.',
      themes: ['Conflict', 'Identity', 'Shame'],
      analysisAr:
        'آخر كلمات القصيدة تخلّي سؤالها بلا إجابة. كلمة "better" مفعمة بسخرية مرّة - ولا خيار من الاثنين يقدّم نتيجة طيّبة. الطيّار مضطر يختار بين الموت الجسدي والموت الاجتماعي.',
      themesAr: ['الصراع', 'الهويّة', 'العار'],
    },
  ],

  languageDevices: [
    {
      device: 'Nature imagery',
      example:
        '[Stanzas 2 to 5: the fishing boats, the sea and the shoals below him, then the catch his father’s boat brought home]',
      effect:
        'The natural world is presented as beautiful, free and alive, a direct contrast to the death mission. What the pilot sees from the air stirs a memory of home, and together they pull him back to life, representing everything he would lose.',
      lineRef: 17,
      effectAr:
        'العالم الطبيعي يُقدَّم جميل، حر، وفيه حياة - تناقض مباشر لمهمّة الموت. اللي يشوفه الطيّار من الجو يصحّي فيه ذكرى البيت، والاثنين مع بعض يسحبونه يرجع للحياة، ويمثّلون كل شي راح يخسره.',
    },
    {
      device: 'Colour imagery',
      example: 'silver ... dark',
      effect:
        'Garland uses a palette of colours to contrast life and death. The flashes of "silver" (stanzas 3 and 5) and the green-blue sea of stanza 2 evoke beauty and vitality, while "dark" (the shoals, and the tuna at the end of stanza 5) introduces threat. The recurring silver creates a motif linking nature to hope.',
      lineRef: 18,
      effectAr:
        'Garland تستخدم لوحة ألوان عشان تقابل بين الحياة والموت. لمعات "silver" (المقطعين 3 و5) والبحر الأخضر المزرق في المقطع 2 يستحضرون الجمال والحيوية، بينما "dark" (أسراب السمك، وسمكة التونة في آخر المقطع 5) يدخل التهديد. وتكرار الفضّي يخلق motif يربط الطبيعة بالأمل.',
    },
    {
      device: 'Simile',
      example: 'like bunting',
      effect:
        'Seen from the air, the fishing boats are compared to strings of festive flags: the scene below looks like a celebration of life, the opposite of his mission. In stanza 3 a second simile likens the moving shoals to an enormous flag swinging from side to side, which may recall the national flag he flies for.',
      lineRef: 11,
      effectAr:
        'من الجو، قوارب الصيد تتشبّه بحبال الأعلام الصغيرة اللي تتعلّق في الاحتفالات: المنظر تحت يبان مثل احتفال بالحياة، عكس مهمّته. وفي المقطع 3 فيه simile ثاني يشبّه أسراب السمك المتحرّكة بعلم ضخم يتمايل يمين ويسار، وممكن يذكّر بعلم الوطن اللي يطير عشانه.',
    },
    {
      device: 'Shift in perspective',
      example:
        '[Stanzas 1, 6 and 7: the outside narrator, then the daughter’s own voice, then the narrator again]',
      effect:
        "The poem moves from an outside narrator's retelling, through the daughter's imagining as she tells the story to her children (stanza 2), to her own first-person voice (stanzas 6 and 7), and back to the narrator for the last two lines. This layering of perspectives shows how the story has been passed down, fragmented and incomplete.",
      lineRef: 36,
      effectAr:
        'القصيدة تتنقّل من سرد راوٍ من برّا، لتخيّل البنت وهي تحكي القصة لعيالها (المقطع 2)، لصوتها هي بضمير المتكلّم (المقطعين 6 و7)، وترجع للراوي في آخر بيتين. هالتطبيق الطبقي لوجهات النظر يبيّن كيف انتقلت الحكاية من جيل لجيل، مجزّأة وغير مكتملة.',
    },
    {
      device: 'Contrast',
      example:
        '[Whole poem: the mission begun at sunrise against the social death at home; the beauty of nature against the duty to die]',
      effect:
        'The poem is structured around contrasts: life vs death, duty vs instinct, honour vs shame. These oppositions create the moral tension at the heart of the poem and resist simple resolution.',
      lineRef: 0,
      effectAr:
        'القصيدة مبنية على تناقضات: الحياة مقابل الموت، الواجب مقابل الغريزة، الشرف مقابل العار. هالثنائيات تخلق التوتّر الأخلاقي في قلب القصيدة، وتقاوم أي حل سهل.',
    },
    {
      device: 'Enjambment',
      example:
        '[Stanzas 1 to 5: one sentence runs on across all four stanza breaks, as from stanza 4 into stanza 5]',
      effect:
        "Lines run into each other without pause, creating a flowing, continuous movement: the first five stanzas are a single sentence. This mirrors the pilot's unbroken train of thought and the relentless pull of memory and nature.",
      lineRef: 4,
      effectAr:
        'الأبيات تنساب بدون توقّف، وتخلق حركة متواصلة سايلة: أول خمس مقاطع جملة وحدة. هالشي يحاكي تيّار فكر الطيّار المتواصل، وقوّة جذب الذاكرة والطبيعة اللي ما تنقطع.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'kam-1',
    question: 'What decision does the pilot make in Kamikaze?',
    type: 'multiple-choice',
    options: [
      'He completes his suicide mission',
      'He turns back from his kamikaze mission and returns home',
      'He crashes into an enemy ship',
      'He lands on a different island',
    ],
    correctIndex: 1,
    explanation:
      'The pilot turns back from his kamikaze mission, choosing life over death. However, his family and community treat him as if he were dead - his survival brings shame rather than relief.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'kam-2',
    question: 'Who narrates the poem?',
    type: 'multiple-choice',
    options: [
      'The pilot himself',
      "The pilot's daughter, retelling the story she was told",
      'A military commander',
      'A journalist',
    ],
    correctIndex: 1,
    explanation:
      "The story is the daughter's: an outside narrator reports how she retold it to her own children, piecing it together from what she was told, and in stanzas 6 and 7 she speaks in her own first-person voice about the consequences.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'kam-3',
    question: 'What causes the pilot to turn back?',
    type: 'multiple-choice',
    options: [
      'Engine failure',
      'The beauty of nature - the boats, the sea and the fish - reminds him of life and his childhood',
      'A radio message from his family',
      'Fear of the enemy',
    ],
    correctIndex: 1,
    explanation:
      "The pilot is pulled back by the beauty of the natural world: the fishing boats, the sea and the shoals below him (stanzas 2 and 3), and the memory they stir of waiting by the sea for his father's boat to come home (stanzas 4 and 5). Nature and childhood memory represent life over death.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'kam-4',
    question: "How does the pilot's family treat him after his return?",
    type: 'multiple-choice',
    options: [
      'They celebrate his survival',
      'They treat him as if he were dead - refusing to speak to him or acknowledge his existence',
      'They send him back to the military',
      'They move to another country',
    ],
    correctIndex: 1,
    explanation:
      'The family treats the pilot as if he had ceased to exist. In Japanese culture, a kamikaze pilot who turned back brought profound shame. His wife never speaks to him again and the children learn to be silent too - he becomes socially dead.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'kam-5',
    question: 'What does the nature imagery (boats, fish, sea) represent in the poem?',
    type: 'multiple-choice',
    options: [
      'The dangers of the ocean',
      'The beauty of life and the power of nature to override duty and ideology',
      "The pilot's diet",
      'The Japanese fishing industry',
    ],
    correctIndex: 1,
    explanation:
      'Nature represents life itself - vivid, beautiful, and precious. The boats, the fish and the clear sea offer a sensory counterweight to the abstract concept of duty. Life is tangible; honour is not.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'kam-6',
    question:
      'What is the effect of the daughter speaking in her own first-person voice in stanzas 6 and 7?',
    type: 'multiple-choice',
    options: [
      'It distances the reader from the story',
      'It shifts from retelling to personal testimony, showing the lasting impact on the family, before the last two lines return to the outside narrator',
      'It introduces a new character',
      'It resolves the conflict happily',
    ],
    correctIndex: 1,
    explanation:
      'The shift to first person makes these stanzas deeply personal: the daughter took part in the silence herself. In the closing lines, reported again by the narrator, she imagines her father wondering whether social death (being shunned) was worse than the physical death he avoided.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'kam-7',
    question: 'What is the significance of the samurai sword in the opening?',
    type: 'multiple-choice',
    options: [
      'It shows the pilot is dangerous',
      'It represents the weight of Japanese warrior tradition and honour culture that demands his sacrifice',
      'It is a cooking implement',
      'It shows the pilot is wealthy',
    ],
    correctIndex: 1,
    explanation:
      "The samurai sword connects to Japan's warrior tradition and the bushido code of honour. Its ceremonial presence in the cockpit represents the cultural expectation of sacrifice and the weight of duty.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'kam-8',
    // Until 26 September 2026 this question asked about a line, repeated, of the
    // pilot flying into the sun. The poem has no such line. It now asks about the
    // two places the sun does appear: the departure at sunrise (stanza 1) and the
    // fish turning towards the sun (stanza 3).
    question: 'Why might it matter that the fish in stanza 3 turn towards the sun?',
    type: 'multiple-choice',
    options: [
      'It simply tells us the time of day',
      'It echoes the sunrise at which he set out, but now the fish turn towards life and light, pulling him away from the mission',
      'It shows the fish are frightened of the plane',
      'It explains why the pilot could not see his target',
    ],
    correctIndex: 1,
    explanation:
      'The sun is a symbol of Japan itself (the Rising Sun), and the pilot set out at sunrise on a mission of death. In stanza 3 the fish turn towards the sun and flash in its light, an image of life that begins to pull him back. The same symbol now points away from duty.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'kam-9',
    question: 'How does the poem question the concept of honour?',
    type: 'multiple-choice',
    options: [
      'It celebrates honour above all else',
      'It shows that the honourable choice (death) and the dishonourable choice (life) both lead to a form of death - raising the question of which is truly worse',
      'It ignores honour entirely',
      'It defines honour clearly',
    ],
    correctIndex: 1,
    explanation:
      'The poem creates a devastating paradox: dying would have brought honour; living brought social death. The question the poem ends on, in its last line, suggests both paths led to a form of death, questioning whether honour is worth the cost.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'kam-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Kamikaze for exploring the personal impact of conflict?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'Poppies by Jane Weir',
      'Storm on the Island by Heaney',
      'The Charge of the Light Brigade by Tennyson',
    ],
    correctIndex: 1,
    explanation:
      "Both Kamikaze and Poppies explore the family's perspective on conflict - a daughter in Kamikaze, a mother in Poppies. Both show the personal, domestic costs of war through female voices and the pain of absence.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Kamikaze explores honour, shame, the personal cost of conflict, the power of nature, and the devastating consequences of choosing life over duty.',
    keyPoints: [
      'Honour vs survival - the pilot chooses life but suffers social death',
      'Power of nature - natural beauty overrides military duty',
      'Family and shame - the family treats him as if he were dead',
      'The question of identity - is he a coward or a brave man who chose life?',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Garland uses vivid nature imagery, symbolism of the sun and samurai sword, and a narrative voice that shifts from third person to intimate first person.',
    keyPoints: [
      "Nature imagery: the boats, sea and fish of stanzas 2 and 3 - life's beauty",
      'Sun symbolism - the sunrise departure stands for Japan and duty; the fish turning to the sun stand for life',
      'The samurai sword - the weight of warrior tradition and honour culture',
      'Colour imagery: silver and green-blue set against dark - vivid life contrasting with the death mission',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Seven six-line stanzas narrated mostly in the third person, with a crucial shift to the daughter's own first person in stanzas 6 and 7 as she speaks personally about the consequences.",
    keyPoints: [
      'Third-person narration - an outside voice retells what the daughter told, creating distance',
      'Stanzas 6 and 7 shift to first person - intimate, personal testimony - before the narrator returns in the last two lines',
      'Enjambment across stanzas - the story flows without neat resolution',
      "No regular rhyme - reflecting the unresolved nature of the family's pain",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Garland present the conflict between duty and personal choice in Kamikaze?',
  'Compare how the effects of conflict on families are presented in Kamikaze and one other poem from the anthology.',
  'How does Garland use language and structure to explore the concept of honour?',
]

/* ── Comparison poems ──────────────────────────────────────────── */

const comparisons = [
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    link: '/revision/poetry/power-and-conflict/remains',
    points: [
      'Both explore the psychological aftermath of conflict and the lasting impact on individuals',
      'Both use a narrative, storytelling structure with a first/third-person speaker recounting events',
      'Remains shows a soldier haunted by killing; Kamikaze shows a pilot haunted by not dying',
      'Both poems question whether survival is truly better than death',
    ],
  },
  {
    poem: 'Poppies',
    poet: 'Jane Weir',
    link: '/revision/poetry/power-and-conflict/poppies',
    points: [
      'Both explore the impact of conflict on family relationships',
      'Both are told from a domestic, personal perspective rather than the battlefield',
      "Poppies focuses on a mother's grief; Kamikaze on a family's shame and rejection",
      'Both use sensory imagery to convey emotional pain',
    ],
  },
  {
    poem: 'The Émigrée',
    poet: 'Carol Rumens',
    link: '/revision/poetry/power-and-conflict/the-emigree',
    points: [
      'Both explore the tension between personal identity and external pressures',
      'Both use light imagery (the sunlit city of The Émigrée, the sun the fish turn towards in Kamikaze) as symbols of hope and belonging',
      "The Émigrée's speaker clings to memory of a homeland; the kamikaze pilot's memories pull him away from duty",
      'Both poems show how individuals can be caught between two worlds with no easy resolution',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────── */

const themes = [
  { label: 'Conflict', color: 'bg-red-500/15 text-red-400 border-red-500/25' },
  { label: 'Power', color: 'bg-orange-500/15 text-clay-600 border-orange-500/25' },
  { label: 'Identity', color: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
  { label: 'Nature', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  { label: 'Family', color: 'bg-pink-500/15 text-pink-400 border-pink-500/25' },
  { label: 'Shame & Honour', color: 'bg-amber-500/15 text-clay-600 border-amber-500/25' },
  { label: 'Memory', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
  { label: 'Death', color: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/25' },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function KamikazePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Kamikaze by Beatrice Garland - Analysis & Annotations"
        description="Line-by-line analysis of Kamikaze with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* Back nav */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Power and Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Kamikaze</h1>
            <p className="text-body-sm text-muted-foreground">
              Beatrice Garland &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* Theme tokens */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Tag className="size-3.5" />
          <span className="font-medium">Key Themes</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <span
              key={t.label}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive poem viewer */}
      <StudyTools
        textName="Kamikaze"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Kamikaze"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={kamikazeData} />

      {/* Comparisons */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <GitCompareArrows className="size-4 text-muted-foreground" />
          <h2 className="text-heading-md font-heading text-foreground">Compare with Other Poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div key={c.poem} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <p className="text-xs text-muted-foreground">by {c.poet}</p>
              </div>
              <ul className="space-y-1.5">
                {c.points.map((p, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-snug flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {/* Until 26 September 2026 this credited Enitharmon Press. The AQA anthology
            prints the poem from The Invention of Fireworks by permission of Templar
            Poetry, its publisher. */}
        <strong>Rights notice:</strong> &copy; Beatrice Garland (b. 1938), from{' '}
        <em>The Invention of Fireworks</em> (Templar Poetry, 2013). The poem is paraphrased line by
        line here, not printed. Quotations from &ldquo;Kamikaze&rdquo; are short fair-dealing
        extracts under CDPA 1988 &sect;30 (criticism, review, quotation). For full text, students
        should consult the board-licensed AQA Power &amp; Conflict anthology or Garland&rsquo;s
        collection.
      </p>
    </div>
  )
}
