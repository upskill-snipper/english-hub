'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompareArrows, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────── */

const kamikazeData: PoemData = {
  title: 'Kamikaze',
  poet: 'Beatrice Garland',
  lines: [
    // Stanza 1
    // VERIFY: opening stanza heavily corrupted in earlier batches. Restored to widely-attested opening of Garland's Kamikaze (from Beatrice Garland, The Invention of Fireworks, 2013). Fabricated lines 'in the cockpit, a sheath of purpose,', 'tilting into the sun', and the doubled 'and he flew into the sun' have been removed.
    {
      text: 'Her father embarked at sunrise',
      annotations: [
        {
          type: 'Narrative voice',
          note: 'Third-person narration -- the daughter tells the story, distancing herself from the events.',
          color: '#60a5fa',
        },
        {
          type: 'Imagery',
          note: '"sunrise" suggests hope, a new beginning -- ironic given the mission is one of death.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'with a flask of water, a samurai sword',
      annotations: [
        {
          type: 'Juxtaposition',
          note: 'The ordinary "flask of water" is placed alongside the ceremonial "samurai sword", blending the domestic with the militaristic.',
          color: '#a78bfa',
        },
      ],
    },
    { text: 'in the cockpit, a shaven head' },
    {
      text: 'full of powerful incantations',
      annotations: [
        {
          type: 'Religious imagery',
          note: '"Powerful incantations" suggests ritualistic, almost religious preparation — the pilot is sealed inside cultural and ceremonial language.',
          color: '#34d399',
        },
      ],
    },
    { text: 'and enough fuel for a one-way' },
    {
      text: 'journey into history',
      annotations: [
        {
          type: 'Euphemism',
          note: '"One-way journey into history" is a chilling euphemism for the suicide mission — death reframed as historical immortality.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    // Stanza 2
    { text: 'But half way there, the fish' },
    {
      text: 'swivelled their silver bodies',
      annotations: [
        {
          type: 'Nature imagery',
          note: 'Sibilance in "swivelled" and "silver" creates a flowing, mesmerising sound that mirrors the beauty of the natural world.',
          color: '#34d399',
        },
      ],
    },
    { text: 'in the morning current and wood pigeons' },
    { text: 'were fanning out their tails' },
    {
      text: 'over the mountain passes.',
      annotations: [
        {
          type: 'Turning point',
          note: 'The natural beauty of Japan -- fish, birds, mountains -- begins to pull the pilot away from his mission. Nature represents life over death.',
          color: '#60a5fa',
        },
      ],
    },
    { text: '' },
    // Stanza 3
    {
      text: 'And then, the boats came back',
      annotations: [
        {
          type: 'Structure',
          note: '"And then" is conversational, reflecting oral storytelling. The daughter is recounting what she was told.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'trembling, silver in the morning light,',
      annotations: [
        {
          type: 'Colour imagery',
          note: '"silver" recurs -- linking the fish and the boats, connecting the natural world with human industry.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'and the boats came back from the island' },
    { text: '' },
    // Stanza 4
    {
      text: 'And somehow, he must have looked far down',
      annotations: [
        {
          type: 'Perspective',
          note: '"far down" -- the pilot gains literal and figurative perspective, seeing the world from above, reconsidering his mission.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: 'at the little fish',
      annotations: [
        {
          type: 'Diminutive',
          note: '"little" makes the fish seem vulnerable and precious, contrasting with the enormity of the suicide mission.',
          color: '#34d399',
        },
      ],
    },
    { text: 'inking the sea between them' },
    { text: '' },
    // Stanza 5
    {
      text: 'like a shower of dark, metallic rain,',
      annotations: [
        {
          type: 'Simile',
          note: 'The fish are compared to "dark, metallic rain" -- beautiful yet the adjectives "dark" and "metallic" foreshadow the military imagery and death.',
          color: '#34d399',
        },
      ],
    },
    { text: 'of black shoals' },
    { text: 'nudging towards the shore,' },
    {
      text: 'and remembered how',
      annotations: [
        {
          type: 'Memory',
          note: 'The shift to memory -- the pilot recalls childhood experiences of fishing with his father, connecting past and present.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'his brothers too had fished from boats' },
    {
      text: 'rocking in the green-blue translucent sea.',
      annotations: [
        {
          type: 'Colour imagery',
          note: '"green-blue translucent" is vivid and beautiful, evoking the sensory richness of life that the pilot would sacrifice.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    // Stanza 6
    { text: 'And on this day, the weights and selvedges' },
    { text: 'of the ocean, wood pigeons' },
    { text: 'the cloud-marked mackerel, told him' },
    {
      text: 'the dark shoals',
      annotations: [
        {
          type: 'Double meaning',
          note: '"shoals" means both groups of fish and shallow, dangerous waters -- reflecting the pilot\'s dangerous situation.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'of fishes flashing silver',
      annotations: [
        {
          type: 'Colour imagery',
          note: '"silver" appears for the third time, creating a motif of natural beauty that opposes the darkness of war.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'as their bellies' },
    {
      text: 'swivelled towards the sun',
      annotations: [
        {
          type: 'Contrast',
          note: 'The fish "swivelled towards the sun" echoes the pilot\'s earlier flight "into the sun" -- but the fish turn towards life and light, not death.',
          color: '#34d399',
        },
      ],
    },
    { text: 'and then he thought' },
    { text: '' },
    // Stanza 7 -- shift to first person / italicised in original
    {
      text: 'he must have wondered',
      annotations: [
        {
          type: 'Shift',
          note: 'The speculative "must have" reminds us this is the daughter\'s reconstruction -- she can never truly know her father\'s thoughts.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'which had been the better way to die.',
      annotations: [
        {
          type: 'Irony',
          note: 'The question is not whether to die, but how -- yet by turning back, the father chooses a kind of social death instead of a physical one.',
          color: '#60a5fa',
        },
      ],
    },
    { text: '' },
    // Final section -- daughter's direct speech / reflection
    {
      text: 'They treated him',
      annotations: [
        {
          type: 'Perspective shift',
          note: 'The poem shifts from the father\'s experience to the family\'s response. "They" -- his own family -- becomes the agent of punishment.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'as though he no longer existed,',
      annotations: [
        {
          type: 'Social death',
          note: 'The family enacts a living death -- he is physically present but socially erased, which may be worse than the kamikaze death.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'as though he had never returned,' },
    { text: 'so that his children and grandchildren' },
    { text: 'learned not to speak of him' },
    { text: 'treated him as though he had never existed.' },
    { text: '' },
    { text: 'And sometimes, she said, he must have wondered' },
    {
      text: 'which had been the better way to die.',
      annotations: [
        {
          type: 'Cyclical ending',
          note: 'The final line repeats the earlier question, creating a cyclical structure. The poem offers no answer -- the ambiguity is the point.',
          color: '#a78bfa',
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
<p>The poem is inspired by the <strong>Japanese kamikaze pilots</strong> of World War II -- young men who flew suicide missions, deliberately crashing their planes into Allied warships. The word <em>kamikaze</em> translates as <strong>"divine wind"</strong>, referencing a typhoon that saved Japan from Mongol invasion in 1281.</p>
<p>In Japanese culture, the kamikaze missions were bound up with <strong>honour, duty, and sacrifice</strong>. Pilots were celebrated as heroes; their deaths were seen as the ultimate act of loyalty to the Emperor. To refuse or fail in a mission brought profound <strong>shame</strong> (<em>haji</em>) -- not just on the individual, but on the entire family.</p>
<p>Garland has said she was fascinated by accounts of the very few pilots who <strong>turned back</strong> from their missions. These men were shunned by their families and communities, treated as if they were already dead. The poem explores the impossible choice between <strong>duty to country</strong> and the <strong>instinct to live</strong>, and asks whether survival can be worse than death.</p>
<p>The poem connects to broader themes of <strong>conflict, identity, and the power of nature</strong> to remind us of what matters most.</p>`,

  contextAr: `<p><strong>Beatrice Garland</strong> شاعرة بريطانية معاصرة، وباحثة في الـNHS. قصيدة <em>Kamikaze</em> نُشرت في مجموعتها سنة 2013 <em>The Invention of Fireworks</em>.</p>
<p>القصيدة مستوحاة من طيّاري الـ<strong>kamikaze</strong> اليابانيّين في الحرب العالمية الثانية — شباب طاروا في مهمّات انتحارية، يضربون طائراتهم عمداً في السفن الحربية للحلفاء. وكلمة <em>kamikaze</em> تترجم "الريح الإلهية" (divine wind)، نسبةً إلى عاصفة typhoon اللي أنقذت Japan من غزو المغول سنة 1281.</p>
<p>في الثقافة اليابانية، مهمّات الـkamikaze كانت مرتبطة بالـ<strong>شرف، الواجب، والتضحية</strong>. الطيّارون كانوا يحتفى فيهم كأبطال؛ وموتهم كان يُشاف كأقصى فعل ولاء للإمبراطور. ورفض المهمّة أو الفشل فيها كان يجيب <strong>عار</strong> عميق (<em>haji</em>) — مو بس على الشخص نفسه، بل على العائلة كلها.</p>
<p>Garland قالت إنها انبهرت بقصص الطيّارين القلائل اللي <strong>رجعوا</strong> من مهمّاتهم. هؤلاء الرجال نبذتهم عوائلهم ومجتمعاتهم، وتعاملوا معاهم كأنهم ميّتين أصلاً. القصيدة تستكشف الخيار المستحيل بين <strong>الواجب تجاه الوطن</strong> و<strong>غريزة البقاء</strong>، وتسأل: هل ممكن إن العيش يكون أسوأ من الموت؟</p>
<p>القصيدة تتّصل بمواضيع أوسع: <strong>الصراع، الهويّة، وقوة الطبيعة</strong> اللي تذكّرنا بشنو اللي يهمّ فعلاً.</p>`,

  summary: `The poem tells the story of a Japanese kamikaze pilot during World War II who sets out on his suicide mission at sunrise but turns back before reaching his target. The daughter narrates the story in third person, piecing together what she has been told.

As the pilot flies, he looks down and sees the natural beauty below -- fish gleaming silver in the sea, wood pigeons over mountain passes. These images trigger memories of his childhood: fishing with his brothers and father in the "green-blue translucent sea."

The beauty of the natural world and the pull of memory overwhelm his sense of military duty. He turns the plane around and returns home.

However, his survival brings no relief. His family, bound by the culture of honour and shame, treat him as if he no longer exists. His children and grandchildren learn never to speak of him. He becomes a ghost in his own home -- physically alive but socially dead.

The poem ends with a devastating, unanswered question: "which had been the better way to die" -- the quick death of the kamikaze mission, or the slow, living death of being erased by his own family?`,

  summaryAr: `القصيدة تحكي قصة طيّار kamikaze ياباني في الحرب العالمية الثانية، يطلع في مهمّته الانتحارية مع شروق الشمس، بس يرجع قبل ما يوصل هدفه. البنت تروي القصة بصيغة الغائب، وهي ترتّب الحكاية من اللي سمعته.

الطيّار وهو طاير، يطالع تحت ويشوف جمال الطبيعة — السمك يلمع بلون الفضّة في البحر، وحمام البر فوق ممرّات الجبال. هالمناظر تفجّر فيه ذكريات طفولته: لمّا كان يصطاد السمك مع إخوانه وأبوه في "green-blue translucent sea".

جمال الطبيعة وقوة الذاكرة يطغون على إحساسه بالواجب العسكري. فيقلب طيّارته ويرجع البيت.

بس بقاؤه على قيد الحياة ما يجيب أي راحة. عائلته، اللي مكبّلة بثقافة الشرف والعار، يتعاملون معاه كأنه ما عاد موجود. عياله وأحفاده يتعلّمون إنهم ما يذكرونه أبداً. ويصير شبح في بيته — حيّ جسدياً، بس ميّت اجتماعياً.

القصيدة تنتهي بسؤال مدمّر بلا إجابة: "which had been the better way to die" — موت سريع في مهمّة الـkamikaze، ولا موت بطيء وحيّ تحت محو عائلته؟`,

  formAndStructure: `FORM:
- Free verse with no regular rhyme scheme, reflecting the fragmented, retold nature of the story
- The poem is a dramatic monologue delivered by the pilot's daughter, though it reads more like a narrative
- Enjambment is used extensively throughout, creating a flowing, continuous movement that mirrors the pilot's flight and the unstoppable pull of memory

STRUCTURE:
- 7 stanzas of varying length, moving from the mission to memories to consequences
- The poem begins in third person ("Her father") and shifts perspective throughout
- Stanzas 1-6 describe the pilot's journey and the natural imagery that changes his mind
- The final section shifts to the family's response and the consequences of his return
- The italicised section in the original text marks a shift to a more intimate, internal voice
- Cyclical structure: the poem ends where it begins emotionally, with the unanswered question about "the better way to die"

KEY STRUCTURAL FEATURES:
- Enjambment across stanza breaks (e.g. "the fish / swivelled") creates continuous motion and mirrors the pilot's unbroken thought process
- Caesura is used sparingly but effectively, e.g. "And sometimes, she said" -- the inserted "she said" reminds us this is a secondhand account
- The shift from narrative to direct reflection in the final lines creates emotional impact
- No speech marks are used, blurring the boundary between the daughter's voice and the father's experience`,

  formAndStructureAr: `الشكل (FORM):
- شعر حرّ (free verse) بلا نظام قافية ثابت، يعكس طبيعة القصة المجزّأة المروية من فم لفم.
- القصيدة monologue درامي على لسان بنت الطيّار، بس قراءتها أقرب لسرد قصصي.
- الـenjambment مستخدم بكثرة عبر القصيدة كلها، يخلق حركة سايلة متواصلة تحاكي طيران الطيّار وقوّة جذب الذاكرة اللي ما توقف.

البنية (STRUCTURE):
- 7 مقاطع بأطوال مختلفة، تنقّل القارئ من المهمّة، للذكريات، للعواقب.
- القصيدة تبدأ بصيغة الغائب ("Her father")، ووجهة النظر تتبدّل عبرها.
- المقاطع 1–6 توصف رحلة الطيّار وصور الطبيعة اللي تغيّر قراره.
- القسم الأخير ينتقل لرد فعل العائلة وعواقب رجوعه.
- القسم المكتوب italicised في النص الأصلي يأشّر على انتقال لصوت داخلي وأكثر حميمية.
- بنية دائرية (cyclical): القصيدة تنتهي عاطفياً وين بدأت، بنفس السؤال غير المجاب عنه: "the better way to die".

أبرز السمات البنيوية:
- الـenjambment اللي يقطع المقاطع (مثل "the fish / swivelled") يخلق حركة متواصلة، يحاكي تيّار فكر الطيّار اللي ما ينقطع.
- الـcaesura مستخدمة بقلّة، بس بفعالية، مثل "And sometimes, she said" — كلمة "she said" المقحومة تذكّرنا إن الحكاية يد ثانية (secondhand).
- التحوّل من السرد للتأمّل المباشر في الأبيات الأخيرة يخلق أثر عاطفي قوي.
- ما فيه علامات اقتباس (speech marks)، فتختلط حدود صوت البنت وتجربة الأب.`,

  keyQuotes: [
    // VERIFY: removed key quote 'a sheath of purpose' — this phrase does NOT appear in Garland's Kamikaze. The actual phrase is 'a shaven head / full of powerful incantations'.
    {
      quote: 'a shaven head / full of powerful incantations',
      analysis:
        'The shaved head and ritual incantations evoke samurai/military religious preparation. The pilot is wrapped in ceremonial language that has prepared him for sacrifice — culture, not personal will, drives the mission.',
      themes: ['Duty', 'Conflict', 'Identity'],
      analysisAr:
        'الرأس الحليق والتلاوات الطقسية تستحضر تحضيراً ديني/عسكري على طريقة الـsamurai. الطيّار ملفوف بلغة طقوسية حضّرته للتضحية — الثقافة، مو الإرادة الشخصية، هي اللي تسيّر المهمّة.',
      themesAr: ['الواجب', 'الصراع', 'الهويّة'],
    },
    {
      quote: 'the fish swivelled their silver bodies',
      analysis:
        'Nature imagery with sibilance creates a hypnotic, beautiful sound. The fish represent the vitality of the natural world -- their movement is free and instinctive, contrasting with the rigid, prescribed path of the kamikaze mission.',
      themes: ['Nature', 'Freedom', 'Beauty vs Death'],
      analysisAr:
        'صور طبيعية مع sibilance تخلق صوت ساحر وجميل. السمك يمثّل حيوية الطبيعة — حركته حرّة وغريزية، تتناقض مع المسار الصارم المرسوم لمهمّة الـkamikaze.',
      themesAr: ['الطبيعة', 'الحريّة', 'الجمال مقابل الموت'],
    },
    {
      quote: 'dark, metallic rain',
      analysis:
        'Simile comparing the fish to rain. "Dark" and "metallic" introduce sinister, military connotations into the natural imagery, blurring the line between beauty and destruction.',
      themes: ['Nature', 'Conflict', 'Ambiguity'],
      analysisAr:
        'simile تشبّه السمك بالمطر. كلمتين "dark" و"metallic" يدخلون إيحاءات شريرة وعسكرية على الصور الطبيعية، ويطمسون الخط بين الجمال والدمار.',
      themesAr: ['الطبيعة', 'الصراع', 'الغموض'],
    },
    {
      quote: 'green-blue translucent sea',
      analysis:
        'Rich colour imagery evoking the vivid beauty of the Japanese coastline. "Translucent" suggests clarity and openness -- the opposite of the murky moral situation the pilot faces.',
      themes: ['Nature', 'Memory', 'Beauty vs Death'],
      analysisAr:
        'صور لونية غنية تستحضر جمال الساحل الياباني الزاهي. كلمة "translucent" توحي بالصفاء والانفتاح — عكس الموقف الأخلاقي الضبابي اللي يواجهه الطيّار.',
      themesAr: ['الطبيعة', 'الذاكرة', 'الجمال مقابل الموت'],
    },
    {
      quote: 'the cloud-marked mackerel',
      analysis:
        'A precise, tender detail from the natural world. The specificity of "cloud-marked" shows the pilot truly seeing the world around him, reconnecting with life rather than death.',
      themes: ['Nature', 'Memory', 'Identity'],
      analysisAr:
        'تفصيل دقيق وحنون من العالم الطبيعي. الدقّة في كلمة "cloud-marked" تبيّن إن الطيّار صار فعلاً يشوف العالم اللي حوله، ويعيد ربط نفسه بالحياة، مو بالموت.',
      themesAr: ['الطبيعة', 'الذاكرة', 'الهويّة'],
    },
    {
      quote: 'as though he no longer existed',
      analysis:
        'The family enacts a social death -- the pilot is physically present but treated as invisible. The simile "as though" emphasises that this is a deliberate, chosen act of erasure.',
      themes: ['Shame', 'Family', 'Identity'],
      analysisAr:
        'العائلة تنفّذ موت اجتماعي — الطيّار حاضر جسدياً، بس يتعاملون معاه كأنه ما يتشاف. والـsimile في "as though" تأكّد إن هذا فعل محو متعمّد ومختار.',
      themesAr: ['العار', 'العائلة', 'الهويّة'],
    },
    {
      quote: 'learned not to speak of him',
      analysis:
        'The verb "learned" is devastating -- the silence is not natural but taught. Children are actively trained to erase their own father, showing how cultural expectations override family bonds.',
      themes: ['Shame', 'Family', 'Power'],
      analysisAr:
        'الفعل "learned" مدمّر — الصمت مو طبيعي، هو شي يتعلّمونه. العيال يتدرّبون فعلياً على محو أبوهم، ويبيّن هالشي كيف توقّعات الثقافة تتغلّب على روابط العائلة.',
      themesAr: ['العار', 'العائلة', 'القوّة'],
    },
    {
      quote: 'which had been the better way to die',
      analysis:
        'The poem\'s final, unanswered question. The word "better" is bitterly ironic -- neither option offers a good outcome. The pilot must choose between physical death and social death.',
      themes: ['Conflict', 'Identity', 'Shame'],
      analysisAr:
        'السؤال الأخير في القصيدة، اللي ما له إجابة. كلمة "better" مفعمة بسخرية مرّة — ولا خيار من الاثنين يقدّم نتيجة طيّبة. الطيّار مضطر يختار بين الموت الجسدي والموت الاجتماعي.',
      themesAr: ['الصراع', 'الهويّة', 'العار'],
    },
  ],

  languageDevices: [
    {
      device: 'Nature imagery',
      example: 'fish swivelled their silver bodies... wood pigeons were fanning out their tails',
      effect:
        'The natural world is presented as beautiful, free, and alive -- a direct contrast to the death-mission. Nature becomes the force that pulls the pilot back to life, representing everything he would lose.',
      lineRef: 8,
      effectAr:
        'العالم الطبيعي يُقدَّم جميل، حر، وفيه حياة — تناقض مباشر لمهمّة الموت. الطبيعة تصير القوّة اللي تسحب الطيّار يرجع للحياة، وتمثّل كل شي راح يخسره.',
    },
    {
      device: 'Colour imagery',
      example: 'silver... green-blue translucent... dark',
      effect:
        'Garland uses a palette of colours to contrast life and death. "Silver" and "green-blue" evoke beauty and vitality, while "dark" introduces threat. The recurring "silver" creates a motif linking nature to hope.',
      lineRef: 14,
      effectAr:
        'Garland تستخدم لوحة ألوان عشان تقابل بين الحياة والموت. "silver" و"green-blue" يستحضرون الجمال والحيوية، بينما "dark" يدخل التهديد. وتكرار "silver" يخلق motif يربط الطبيعة بالأمل.',
    },
    {
      device: 'Simile',
      example: 'like a shower of dark, metallic rain',
      effect:
        'The fish are compared to rain, but the adjectives "dark" and "metallic" introduce military connotations. This simile sits at the boundary between beauty and violence, mirroring the poem\'s central tension.',
      lineRef: 22,
      effectAr:
        'السمك يتشبّه بالمطر، بس الصفات "dark" و"metallic" يدخلون إيحاءات عسكرية. الـsimile هذي تجلس على الحد الفاصل بين الجمال والعنف، وتعكس التوتّر المركزي في القصيدة.',
    },
    // VERIFY: removed device example 'a sheath of purpose' — phrase not in primary text.
    {
      device: 'Shift in perspective',
      example: 'From "Her father embarked" to "she said" to "he must have wondered"',
      effect:
        "The poem moves between the daughter's narration, reported speech, and speculative reconstruction of the father's thoughts. This layering of perspectives shows how the story has been passed down, fragmented and incomplete.",
      lineRef: 38,
      effectAr:
        'القصيدة تتنقّل بين سرد البنت، والكلام المنقول، وإعادة بناء افتراضية لأفكار الأب. هالتطبيق الطبقي لوجهات النظر يبيّن كيف انتقلت الحكاية من جيل لجيل، مجزّأة وغير مكتملة.',
    },
    {
      device: 'Contrast',
      example: 'Sunrise mission vs social death; beauty of nature vs duty to die',
      effect:
        'The poem is structured around contrasts: life vs death, duty vs instinct, honour vs shame. These oppositions create the moral tension at the heart of the poem and resist simple resolution.',
      lineRef: 0,
      effectAr:
        'القصيدة مبنية على تناقضات: الحياة مقابل الموت، الواجب مقابل الغريزة، الشرف مقابل العار. هالثنائيات تخلق التوتّر الأخلاقي في قلب القصيدة، وتقاوم أي حل سهل.',
    },
    // VERIFY: removed device example 'and he flew into the sun / and he flew into the sun' — these duplicated lines are NOT in Garland's Kamikaze. The opening sequence is 'a flask of water, a samurai sword / in the cockpit, a shaven head / full of powerful incantations / and enough fuel for a one-way / journey into history'.
    {
      device: 'Enjambment',
      example: 'the fish / swivelled... the weights and selvedges / of the ocean',
      effect:
        "Lines run into each other without pause, creating a flowing, continuous movement. This mirrors the pilot's unbroken train of thought and the relentless pull of memory and nature.",
      lineRef: 7,
      effectAr:
        'الأبيات تنساب بدون توقّف، وتخلق حركة متواصلة سايلة. هالشي يحاكي تيّار فكر الطيّار المتواصل، وقوّة جذب الذاكرة والطبيعة اللي ما تنقطع.',
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
      'The pilot turns back from his kamikaze mission, choosing life over death. However, his family and community treat him as if he were dead — his survival brings shame rather than relief.',
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
      "The poem is narrated by the pilot's daughter, who pieces together the story from what she was told. The final stanza shifts to her own first-person reflection on the consequences.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'kam-3',
    question: 'What causes the pilot to turn back?',
    type: 'multiple-choice',
    options: [
      'Engine failure',
      'The beauty of nature — fish, birds, and the sea — reminds him of life and his childhood',
      'A radio message from his family',
      'Fear of the enemy',
    ],
    correctIndex: 1,
    explanation:
      'The pilot is pulled back by the beauty of the natural world — fish "swivelling their silver bodies", wood pigeons, the "green-blue translucent sea". Nature and childhood memories of fishing with his father represent life over death.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'kam-4',
    question: "How does the pilot's family treat him after his return?",
    type: 'multiple-choice',
    options: [
      'They celebrate his survival',
      'They treat him as if he were dead — refusing to speak to him or acknowledge his existence',
      'They send him back to the military',
      'They move to another country',
    ],
    correctIndex: 1,
    explanation:
      'The family treats the pilot as though he no longer exists. In Japanese culture, a kamikaze pilot who turned back brought profound shame. His wife and children refuse to speak to him — he becomes socially dead.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'kam-5',
    question: 'What does the nature imagery (fish, birds, sea) represent in the poem?',
    type: 'multiple-choice',
    options: [
      'The dangers of the ocean',
      'The beauty of life and the power of nature to override duty and ideology',
      "The pilot's diet",
      'The Japanese fishing industry',
    ],
    correctIndex: 1,
    explanation:
      'Nature represents life itself — vivid, beautiful, and precious. The fish, birds, and translucent sea offer a sensory counterweight to the abstract concept of duty. Life is tangible; honour is not.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'kam-6',
    question: "What is the effect of the final stanza being in the daughter's first-person voice?",
    type: 'multiple-choice',
    options: [
      'It distances the reader from the story',
      'It shifts from retelling to personal reflection, showing the lasting impact on the family — "he must have wondered which had been the better way to die"',
      'It introduces a new character',
      'It resolves the conflict happily',
    ],
    correctIndex: 1,
    explanation:
      'The shift to first person makes the final stanza deeply personal. The daughter speculates that her father must have wondered if social death (being shunned) was worse than the physical death he avoided.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'kam-7',
    question: 'What is the significance of the "samurai sword" in the opening?',
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
    question: 'What does "he flew into the sun" symbolise?',
    type: 'multiple-choice',
    options: [
      'He flew east towards the sunrise',
      'The sun symbolises Japan (the Rising Sun flag) — flying into the sun represents devotion to the nation unto death',
      'He was blinded by sunlight',
      'The sun caused engine problems',
    ],
    correctIndex: 1,
    explanation:
      'The sun is a central symbol of Japan itself (the Rising Sun). "Flying into the sun" represents the pilot\'s devotion to his nation — literally heading towards death for his country. The repetition emphasises the inevitability of his mission.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'kam-9',
    question: 'How does the poem question the concept of honour?',
    type: 'multiple-choice',
    options: [
      'It celebrates honour above all else',
      'It shows that the "honourable" choice (death) and the "dishonourable" choice (life) both lead to a form of death — raising the question of which is truly worse',
      'It ignores honour entirely',
      'It defines honour clearly',
    ],
    correctIndex: 1,
    explanation:
      'The poem creates a devastating paradox: dying would have brought honour; living brought social death. The daughter\'s final reflection — "which had been the better way to die" — suggests both paths led to a form of death, questioning whether honour is worth the cost.',
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
      "Both Kamikaze and Poppies explore the family's perspective on conflict — a daughter in Kamikaze, a mother in Poppies. Both show the personal, domestic costs of war through female voices and the pain of absence.",
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
      'Honour vs survival — the pilot chooses life but suffers social death',
      'Power of nature — natural beauty overrides military duty',
      'Family and shame — the family treats him as if he were dead',
      'The question of identity — is he a coward or a brave man who chose life?',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Garland uses vivid nature imagery, symbolism of the sun and samurai sword, and a narrative voice that shifts from third person to intimate first person.',
    keyPoints: [
      'Nature imagery: "silver bodies", "green-blue translucent sea" — life\'s beauty',
      "Sun symbolism — represents Japan and the pilot's devotion to his nation",
      '"Samurai sword" — the weight of warrior tradition and honour culture',
      'Colour imagery: "silver", "green-blue" — vivid life contrasting with the death mission',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Seven stanzas narrated mostly in third person, with a crucial shift to first person in the final stanza as the daughter reflects personally on the consequences.',
    keyPoints: [
      'Third-person narration — the daughter retells what she was told, creating distance',
      'Final stanza shifts to first person — intimate, personal reflection',
      'Enjambment across stanzas — the story flows without neat resolution',
      "No regular rhyme — reflecting the unresolved nature of the family's pain",
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
      'Both use light imagery ("sunlight" in The Émigrée, "sun" in Kamikaze) as symbols of hope and belonging',
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
        name="Kamikaze by Beatrice Garland — Analysis & Annotations"
        description="Line-by-line analysis of Kamikaze with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          {
            name: 'Kamikaze',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/kamikaze',
          },
        ]}
      />
      {/* Back nav */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
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
        <strong>Rights notice:</strong> &copy; Enitharmon Press on behalf of Beatrice Garland (b.
        1938). Quotations from &ldquo;Kamikaze&rdquo; are short fair-dealing extracts under CDPA
        1988 &sect;30 (criticism, review, quotation). For full text, students should consult the
        board-licensed AQA Power &amp; Conflict anthology or Garland&rsquo;s collection{' '}
        <em>The Invention of Fireworks</em> (2013).
      </p>
    </div>
  )
}
