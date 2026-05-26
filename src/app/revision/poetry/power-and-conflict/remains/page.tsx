import { ArrowLeft, BookOpen, Swords, Brain, Skull, HeartCrack, Eye } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  openGraph: {
    title: 'Remains -- Simon Armitage -- The English Hub',
    description: 'Interactive study of ',
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/remains' },
  title: 'Remains -- Simon Armitage',
  description:
    'Interactive study of "Remains" by Simon Armitage. Annotations, key quotes, language analysis, form & structure, and comparison poems for GCSE English Literature.',
}

/* ── Poem data ─────────────────────────────────────────────────── */

const REMAINS: PoemData = {
  title: 'Remains',
  poet: 'Simon Armitage',

  lines: [
    // Stanza 1
    {
      text: 'On another occasion, we got sent out',
      annotations: [
        {
          type: 'Colloquialism',
          note: '"On another occasion" -- casual, anecdotal opening as if recounting just one of many similar incidents. The passive voice ("got sent out") distances the speaker from responsibility.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'to tackle looters raiding a bank.' },
    {
      text: 'And one of them legs it up the road,',
      annotations: [
        {
          type: 'Colloquialism',
          note: '"legs it" is informal slang, making the account feel like a real soldier talking rather than a polished literary voice.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: 'probably armed, possibly not.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The uncertainty over whether the looter was armed introduces moral doubt. "Probably" shifts to the weaker "possibly" -- the soldier cannot justify the killing with certainty.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },

    // VERIFY: previous lines 'Another one dies in the doorway / of some bank, his arms outstretched inside.' do NOT appear in Armitage's Remains and have been removed as fabrication. The actual stanza 2 continues directly from 'probably armed, possibly not' into 'Well myself and somebody else and somebody else / are all of the same mind, / so all three of us open fire.'

    // Stanza 2
    {
      text: 'Well myself and somebody else and somebody else',
      annotations: [
        {
          type: 'Shared responsibility',
          note: '"somebody else and somebody else" distributes the blame through deliberately vague repetition. The speaker tries to share the guilt across the group rather than shoulder it alone.',
          color: '#60a5fa',
        },
      ],
    },
    { text: 'are all of the same mind,' },
    {
      text: 'so all three of us open fire.',
      annotations: [
        {
          type: 'Repetition',
          note: 'The insistent repetition of "all three" and "all of the same mind" reveals the speaker desperately trying to dilute personal guilt through collective action.',
          color: '#34d399',
        },
      ],
    },
    { text: 'Three of a kind all letting fly, and I swear' },
    {
      text: 'I see every round as it rips through his life --',
      annotations: [
        {
          type: 'Graphic imagery',
          note: '"rips through his life" makes the bullets feel like they tear not just flesh but the entirety of the man\'s existence. The dash creates a sudden pause before the visual detail that follows.',
          color: '#f87171',
        },
      ],
    },
    { text: 'I see broad daylight on the other side.' },
    { text: '' },

    // Stanza 3
    { text: "So we've hit this looter a dozen times" },
    {
      text: "and he's there on the ground, sort of inside out,",
      annotations: [
        {
          type: 'Visceral imagery',
          note: '"sort of inside out" is colloquial and understated, yet describes a horrifying physical reality - the soldier\'s casual phrasing reveals desensitisation.',
          color: '#f87171',
        },
      ],
    },
    { text: 'pain itself, the image of agony.' },
    { text: 'One of my mates goes by' },
    {
      text: 'and tosses his guts back into his body.',
      annotations: [
        {
          type: 'Graphic imagery',
          note: 'Shockingly visceral description. The casual verb "tosses" contrasts with the horrific action, reflecting how war desensitises soldiers to violence.',
          color: '#f87171',
        },
      ],
    },
    { text: 'Then he’s carted off in the back of a lorry.' },
    { text: '' },

    // Stanza 4
    {
      text: 'End of story, except not really.',
      annotations: [
        {
          type: 'Volta / Turning point',
          note: "This caesura marks the poem's structural and emotional pivot. The speaker tries to dismiss the event but cannot -- the trauma persists.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'His blood-shadow stays on the street, and out on patrol',
      annotations: [
        {
          type: 'Metaphor',
          note: '"blood-shadow" -- the stain left behind becomes a permanent shadow, symbolising how the memory of the killing is imprinted on the speaker\'s conscience.',
          color: '#a78bfa',
        },
      ],
    },
    { text: 'I walk right over it week after week.' },
    { text: 'Then I’m home on leave. But I blink' },
    { text: '' },

    // Stanza 5
    {
      text: "drink and the drugs won't flush him out --",
      annotations: [
        {
          type: 'PTSD',
          note: 'Reference to substance abuse as a coping mechanism reveals the depth of the speaker\'s psychological trauma. "Flush him out" uses military language ironically -- the enemy is now inside his mind.',
          color: '#f87171',
        },
      ],
    },
    {
      text: "he's here in my head when I close my eyes,",
      annotations: [
        {
          type: 'Shift to present tense',
          note: 'The move to present tense shows the memory is inescapable and ongoing. "Here in my head" makes the dead man a permanent, haunting presence.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'dug in behind enemy lines,',
      annotations: [
        {
          type: 'Military metaphor',
          note: '"dug in behind enemy lines" -- the dead man has invaded the speaker\'s mind like a soldier entrenched in hostile territory. The speaker\'s own mind has become a battlefield.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'not left for dead in some distant, sun-stunned, sand-smothered',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The sibilant sounds ("sun-stunned, sand-smothered") create a hissing, suffocating quality that mirrors the oppressive desert environment and the speaker\'s mental anguish.',
          color: '#34d399',
        },
      ],
    },
    { text: '' },

    // Stanza 6 (isolated couplet)
    {
      text: 'land of dust and sand.',
      annotations: [
        {
          type: 'Isolation',
          note: "The final couplet is isolated from the rest of the poem, mirroring the speaker's emotional isolation and the way the memory cannot be contained within a neat structure.",
          color: '#a78bfa',
        },
      ],
    },
    {
      text: 'His bloody life in my bloody hands.',
      annotations: [
        {
          type: 'Pun',
          note: '"bloody" works as both a swear word (colloquial, angry) and a literal description (covered in blood). This dual meaning captures the soldier\'s guilt and frustration simultaneously.',
          color: '#f59e0b',
        },
        {
          type: 'Final line',
          note: 'The end-stopped final line is definitive -- the speaker accepts inescapable guilt. "His life in my hands" echoes the idiom about responsibility, made literal and devastating.',
          color: '#f87171',
        },
      ],
    },
  ],

  context: `<p><strong>Simon Armitage</strong> (born 1963) is a contemporary English poet from Marsden, West Yorkshire. He has been UK Poet Laureate since May 2019, succeeding Carol Ann Duffy (who held the post 2009-2019). He originally trained as a probation officer, is now a professor at Leeds University, and served as Oxford Professor of Poetry from 2015 to 2019. He is known for writing in an accessible, conversational style that draws on everyday Northern English speech.</p>

<p><strong>Important biographical note:</strong> Armitage never served in any military or combat role. <em>"Remains"</em> (2007) was written for Channel 4's documentary <em>The Not Dead</em> and is based on interviews with Iraq War veterans - not on personal experience. The poem draws on the testimony of a soldier (often identified as Guardsman Tromans, who served in Basra and later suffered severe PTSD); Armitage's role was to act as a poetic translator of these accounts.</p>

<p>The poem explores the <strong>psychological aftermath of killing</strong> in modern warfare. Unlike older war poetry that focused on trenches and patriotism, "Remains" confronts the reality that soldiers carry the trauma of combat long after they return home.</p>

<p><strong>Key contextual points:</strong></p>
<ul>
  <li>Armitage himself never served in any war - the poem is based on documentary interviews, not personal experience</li>
  <li>Based on a real soldier's account -- Armitage acts as a mouthpiece for veterans who struggle to articulate their experiences</li>
  <li>Set during the Iraq War (2003 onwards) -- a controversial conflict where the justification for war was questioned</li>
  <li>The ambiguity over whether the looter was armed reflects the moral complexity of modern urban warfare, where combatants and civilians are hard to distinguish</li>
  <li>The poem was written to raise awareness of PTSD among returning soldiers, many of whom received inadequate mental health support</li>
  <li>Part of the broader AQA Power and Conflict anthology, exploring how power (military authority) creates lasting psychological conflict within individuals</li>
</ul>`,

  contextAr: `<p><strong>Simon Armitage</strong> (مواليد 1963) شاعر إنجليزي معاصر من Marsden في West Yorkshire. صار UK Poet Laureate من مايو 2019، وخلف Carol Ann Duffy (اللي كانت في هالمنصب من 2009 إلى 2019). في الأصل تدرّب يكون probation officer، وحالياً هو بروفيسور في جامعة Leeds، وشغل منصب Oxford Professor of Poetry من 2015 إلى 2019. معروف بأسلوبه السلس والمحكي، اللي يستلهم من اللهجة الإنجليزية الشمالية في الحياة اليومية.</p>

<p><strong>ملاحظة سيرة مهمّة:</strong> Armitage ما خدم أبد في أي دور عسكري أو قتالي. قصيدة <em>"Remains"</em> (2007) كُتبت لصالح وثائقي قناة Channel 4 <em>The Not Dead</em>، وهي مبنية على مقابلات مع قدامى محاربي حرب Iraq War - مو على تجربة شخصية. القصيدة تعتمد على شهادة جندي (غالباً يُعرّف باسم Guardsman Tromans، اللي خدم في Basra وعانى لاحقاً من PTSD حاد)؛ دور Armitage كان إنه يترجم شعرياً هالشهادات.</p>

<p>القصيدة تستكشف <strong>الأثر النفسي بعد فعل القتل</strong> في الحرب الحديثة. على عكس شعر الحرب القديم اللي ركّز على الخنادق والوطنية، قصيدة "Remains" تواجه الحقيقة إن الجنود يحملون صدمة المعركة معاهم لفترة طويلة بعد ما يرجعون لبيوتهم.</p>

<p><strong>نقاط سياقية مهمّة:</strong></p>
<ul>
  <li>Armitage نفسه ما خدم في أي حرب - القصيدة مبنية على مقابلات وثائقية، مو على تجربة شخصية</li>
  <li>مبنية على شهادة جندي حقيقي - Armitage يصير صوت ينطق بلسان قدامى المحاربين اللي يصعب عليهم يعبّرون عن تجاربهم</li>
  <li>الأحداث صارت أيام حرب Iraq War (من 2003 وما بعدها) - صراع مثير للجدل، انتقد فيه وايد ناس مبرّرات الحرب</li>
  <li>الغموض حول كون الـlooter مسلّح ولا لا يعكس التعقيد الأخلاقي للحرب الحضرية الحديثة، اللي يصير فيها صعب التفريق بين المقاتلين والمدنيين</li>
  <li>القصيدة كُتبت عشان ترفع الوعي بمرض PTSD عند الجنود الراجعين من الحرب، وكثير منهم ما حصلوا دعم نفسي كافي</li>
  <li>تنتمي لمجموعة AQA Power and Conflict الأوسع، اللي تستكشف كيف السلطة (السلطة العسكرية) تخلق صراع نفسي طويل المدى داخل الأفراد</li>
</ul>`,

  summary: `The speaker recounts a seemingly routine military incident: he and two fellow soldiers are sent to deal with looters at a bank. One looter runs and the three soldiers open fire, killing him. The speaker is uncertain whether the man was armed.

After the shooting, the soldiers casually handle the body -- tossing his insides back in and carting him away. The speaker initially tries to dismiss it: "End of story, except not really."

The second half of the poem reveals the true cost. The memory of the dead man haunts the speaker relentlessly. Neither drink nor drugs can erase the image. The dead man is "dug in behind enemy lines" -- entrenched in the speaker's mind like an occupying force.

The poem ends with a devastating final couplet: "His bloody life in my bloody hands." The speaker is trapped in an endless cycle of guilt, unable to escape responsibility for a death that may or may not have been justified. The poem moves from casual narration to raw psychological torment, mirroring the way trauma can surface long after the event itself.`,

  summaryAr: `المتحدث يروي حادثة عسكرية تبدو روتينية: هو واثنين من رفاقه الجنود يتم إرسالهم عشان يتعاملون مع looters في بنك. واحد من اللصوص يركض، والجنود الثلاثة يفتحون النار ويقتلونه. المتحدث ما متأكّد إذا الرجال كان مسلّح ولا لا.

بعد إطلاق النار، الجنود يتعاملون مع الجثة بشكل عابر - يدفعون أحشاءه داخل جسمه ويحملونها بعيد. المتحدث في البداية يحاول يطنّش الموضوع: "End of story, except not really."

النصف الثاني من القصيدة يكشف الكلفة الحقيقية. ذكرى الرجال الميت تطارد المتحدث بلا هوادة. لا الشرب ولا المخدّرات تقدر تمحي الصورة. الرجال الميت "dug in behind enemy lines" - متمركز داخل عقل المتحدث مثل قوة احتلال.

القصيدة تنتهي بـcouplet ختامي مدمّر: "His bloody life in my bloody hands." المتحدث محاصر في دورة ذنب ما لها نهاية، عاجز عن الهروب من مسؤوليته عن موت ممكن يكون مبرّر وممكن لا. القصيدة تنتقل من سرد عابر إلى عذاب نفسي خام، تعكس كيف الصدمة تقدر تطلع للسطح بعد فترة طويلة من الحدث نفسه.`,

  formAndStructure: `FORM:
-- Free verse with no regular rhyme scheme, reflecting the chaotic and unstructured nature of both the combat incident and the speaker's fragmented mental state
-- Written as a dramatic monologue -- the speaker addresses the reader directly, creating an intimate, confessional tone
-- The poem is based on real testimony, giving it documentary authenticity

STRUCTURE:
-- 8 stanzas of irregular length, moving from longer narrative stanzas to a short, isolated final couplet
-- The poem has a clear turning point (volta) at "End of story, except not really" -- everything before is the event; everything after is the psychological aftermath
-- Enjambment runs throughout, particularly across stanza breaks ("the / blood-shadow"), creating a sense of thoughts spilling over uncontrollably
-- The final couplet is deliberately isolated, mirroring the speaker's emotional isolation and the way the memory refuses to fit neatly into the past

VOICE & TENSE:
-- Opens in past tense (narrating the event) but shifts to present tense ("he's here in my head") to show the memory is ongoing and inescapable
-- Colloquial, conversational language ("legs it", "all chip in", "End of story") contrasts with moments of intense, graphic imagery -- the everyday voice makes the horror more shocking
-- The anecdotal "On another occasion" opening suggests this is just one of many such incidents, normalising the violence

KEY STRUCTURAL EFFECTS:
-- Caesura at "End of story, except not really" forces a pause that mirrors the speaker's failed attempt to move on
-- Repetition of "all three" in the shooting stanzas shows the speaker trying to share the guilt
-- The shift from communal "we" to isolated "I" and "my" tracks the journey from shared action to solitary guilt`,

  formAndStructureAr: `الشكل (FORM):
-- free verse بلا نظام قافية منتظم، يعكس الطبيعة الفوضوية وغير المنظّمة لحادثة المعركة والحالة الذهنية المتشظّية للمتحدث.
-- مكتوبة بأسلوب dramatic monologue - المتحدث يخاطب القارئ مباشرة، ويخلق نبرة حميمة واعترافية.
-- القصيدة مبنية على شهادة حقيقية، وهالشي يعطيها مصداقية وثائقية.

البنية (STRUCTURE):
-- 8 مقاطع بأطوال غير منتظمة، تتدرّج من مقاطع سردية أطول إلى couplet ختامي قصير ومعزول.
-- القصيدة فيها volta واضحة عند "End of story, except not really" - كل شي قبل هذي اللحظة هو الحدث، وكل شي بعدها هو الأثر النفسي.
-- enjambment يمشي عبر القصيدة كلها، خصوصاً عبر فواصل المقاطع ("the / blood-shadow")، يخلق إحساس بأفكار تنسكب بلا ضابط.
-- الـcouplet الختامي معزول عمداً، يعكس العزلة العاطفية للمتحدث وكيف الذكرى ترفض إنها تتركّز بشكل مرتّب في الماضي.

الصوت والزمن (VOICE & TENSE):
-- تبدأ بـpast tense (يسرد الحدث)، بس تنتقل إلى present tense ("he's here in my head") عشان توضّح إن الذكرى مستمرّة وما تنترك.
-- لغة محكية وعفوية ("legs it"، "all chip in"، "End of story") تتناقض مع لحظات صور مكثّفة ومفصّلة - الصوت اليومي يخلّي الرعب أصدم.
-- الافتتاحية القصصية "On another occasion" توحي إن هذي حادثة من ضمن وايد حوادث مشابهة، وهالشي يطبّع العنف.

التأثيرات البنيوية المهمّة:
-- caesura عند "End of story, except not really" تفرض وقفة، تعكس محاولة المتحدث الفاشلة إنه يتجاوز.
-- تكرار "all three" في مقاطع إطلاق النار يبيّن المتحدث وهو يحاول يوزّع الذنب.
-- الانتقال من "we" الجماعية إلى "I" و"my" المعزولتين يرصد الرحلة من فعل مشترك إلى ذنب فردي.`,

  keyQuotes: [
    {
      quote: 'On another occasion',
      analysis:
        'The casual, anecdotal opening suggests this killing is just one of many routine incidents. "Another" implies repetition and desensitisation -- the speaker has experienced so much violence it has become mundane.',
      themes: ['Conflict', 'Power of memory'],
      analysisAr:
        'الافتتاحية القصصية والعابرة توحي إن هذا الفعل القتلي هو مجرّد واحد من ضمن وايد حوادث روتينية. كلمة "Another" تلمّح للتكرار وفقدان الحس - المتحدث شاف عنف وايد لدرجة إن العنف صار شي عادي.',
      themesAr: ['الصراع', 'قوة الذاكرة'],
    },
    {
      quote: 'probably armed, possibly not',
      analysis:
        'The descending certainty (from "probably" to "possibly") reveals the speaker\'s moral doubt. He cannot be sure the killing was justified, and this uncertainty is the seed of his later guilt and PTSD.',
      themes: ['Guilt', 'Moral ambiguity', 'Conflict'],
      analysisAr:
        'اليقين النازل (من "probably" إلى "possibly" الأضعف) يكشف الشك الأخلاقي عند المتحدث. ما يقدر يتأكّد إن القتل كان مبرّر، وهالغموض هو بذرة الذنب والـPTSD اللي يحسّون بهم لاحقاً.',
      themesAr: ['الذنب', 'الغموض الأخلاقي', 'الصراع'],
    },
    {
      quote: 'tosses his guts back into his body',
      analysis:
        'Shockingly graphic and casual. The verb "tosses" implies a throwaway gesture, as if the man\'s insides are rubbish. This reveals how war desensitises soldiers to extreme violence -- at the time, they felt nothing.',
      themes: ['Reality of conflict', 'Desensitisation'],
      analysisAr:
        'وصف مفصّل وعابر بشكل صادم. الفعل "tosses" يلمّح لحركة عابرة وعفوية، كأن أحشاء الرجال زبالة. هالشي يكشف كيف الحرب تفقّد الجنود إحساسهم تجاه العنف المتطرّف - وقتها، ما حسّوا بأي شي.',
      themesAr: ['واقع الصراع', 'فقدان الحس'],
    },
    {
      quote: 'End of story, except not really',
      analysis:
        'The volta of the poem. The caesura creates a pause that mirrors the speaker\'s failed attempt to close the chapter. "Except not really" is devastatingly understated -- this one line signals the shift from narrative to psychological torment.',
      themes: ['Power of memory', 'PTSD', 'Guilt'],
      analysisAr:
        'هذي الـvolta في القصيدة. الـcaesura تخلق وقفة، تعكس محاولة المتحدث الفاشلة إنه يغلق الفصل. وعبارة "Except not really" مكتومة بشكل مدمّر - هذا البيت الواحد يشير لانتقال من السرد إلى العذاب النفسي.',
      themesAr: ['قوة الذاكرة', 'PTSD', 'الذنب'],
    },
    {
      quote: 'dug in behind enemy lines',
      analysis:
        "Extended military metaphor. The dead man has invaded the speaker's mind like a soldier entrenched in hostile territory. Ironically, the speaker's own psyche has become the battlefield -- the war has followed him home.",
      themes: ['Power of memory', 'PTSD', 'Conflict'],
      analysisAr:
        'metaphor عسكرية ممتدّة. الرجال الميت غزى عقل المتحدث مثل جندي متمركز في أرض معادية. السخرية هنا إن نفس المتحدث نفسها صارت ساحة المعركة - الحرب لحقت ورّاه وجت معاه للبيت.',
      themesAr: ['قوة الذاكرة', 'PTSD', 'الصراع'],
    },
    {
      quote: 'blood-shadow stays on the street',
      analysis:
        'A compound metaphor fusing blood stain and shadow. The verb "stays" insists the trace will not leave; the "shadow" suggests the man\'s death has left a permanent, dark imprint - both on the street and on the speaker\'s conscience.',
      themes: ['Guilt', 'Power of memory'],
      analysisAr:
        'metaphor مركّبة تدمج بقعة الدم والظل. الفعل "stays" يصرّ إن الأثر ما بيروح؛ و"shadow" يلمّح إن موت الرجال خلّا بصمة دائمة ومظلمة - على الشارع وعلى ضمير المتحدث.',
      themesAr: ['الذنب', 'قوة الذاكرة'],
    },
    {
      quote: "he's here in my head when I close my eyes",
      analysis:
        'The shift to present tense makes the haunting immediate and ongoing. "Here in my head" shows the dead man has become an inescapable mental presence -- the speaker cannot find peace even in sleep.',
      themes: ['PTSD', 'Power of memory', 'Individual vs. authority'],
      analysisAr:
        'الانتقال إلى present tense يخلّي المطاردة فورية ومستمرّة. وعبارة "Here in my head" تبيّن إن الرجال الميت صار حضور ذهني ما يمكن الهروب منه - المتحدث ما يقدر يلقى راحة حتى وهو نايم.',
      themesAr: ['PTSD', 'قوة الذاكرة', 'الفرد ضد السلطة'],
    },
    {
      quote: 'His bloody life in my bloody hands',
      analysis:
        'A devastating pun: "bloody" works as a colloquial intensifier (swearing) and literal description (blood-stained). The idiom "blood on your hands" (meaning guilt for a death) is made horrifyingly literal. The end-stopped final line is inescapable and definitive.',
      themes: ['Guilt', 'Reality of conflict', 'PTSD'],
      analysisAr:
        'pun مدمّرة: كلمة "bloody" تشتغل كمكثّف عامّي (شتيمة بريطانية) وكوصف حرفي (ملطّخ بالدم). والـidiom "blood on your hands" (يعني تحمّل ذنب موت أحد) يتحوّل إلى شي حرفي ومرعب. والبيت الختامي المنتهي بنقطة (end-stopped) ما فيه مهرب وحاسم.',
      themesAr: ['الذنب', 'واقع الصراع', 'PTSD'],
    },
    // VERIFY: previously contained fabricated key quote 'near to the knuckle' - this idiom does NOT appear in Armitage's Remains. Removed.
  ],

  languageDevices: [
    {
      device: 'Colloquialism',
      example: 'legs it up the road',
      effect:
        'The informal, everyday language creates a sense of authenticity -- this sounds like a real soldier speaking, not a polished literary voice. It also normalises the violence, making the later horror more shocking by contrast.',
      lineRef: 2,
      effectAr:
        'اللغة غير الرسمية واليومية تخلق إحساس بالمصداقية - تسمع كأن جندي حقيقي يتكلم، مو صوت أدبي مصقول. وعلاوة على ذلك، تطبّع العنف، وبالمقارنة تخلّي الرعب اللي يجي بعدها أصدم.',
    },
    {
      device: 'Euphemism',
      example: 'End of story',
      effect:
        'The speaker tries to dismiss the killing as a closed chapter using a casual, dismissive phrase. The euphemism reveals his coping mechanism -- trying to minimise the significance of taking a life. Its immediate contradiction ("except not really") exposes the failure of this strategy.',
      lineRef: 18,
      effectAr:
        'المتحدث يحاول يطنّش فعل القتل كأنه فصل مغلق، باستخدام عبارة عابرة وتطنيشية. الـeuphemism تكشف آلية تأقلمه - يحاول يقلّل من أهمية إنه أخذ حياة. والتناقض الفوري ("except not really") يفضح فشل هالاستراتيجية.',
    },
    {
      device: 'Repetition',
      example: 'all three of us',
      effect:
        'Repeated emphasis on the collective action ("all three", "all of the same mind") reveals the speaker\'s desperation to distribute guilt. By insisting others were equally responsible, he tries -- and fails -- to lessen his personal burden.',
      lineRef: 14,
      effectAr:
        'التأكيد المتكرّر على الفعل الجماعي ("all three"، "all of the same mind") يكشف يأس المتحدث في توزيع الذنب. لمّا يصرّ إن غيره كان مسؤول بالتساوي، يحاول - ويفشل - إنه يخفّف عبئه الشخصي.',
    },
    {
      device: 'Graphic imagery',
      example: 'tosses his guts back into his body',
      effect:
        'The visceral, almost unbearable detail forces the reader to confront the physical reality of violence. The casual verb "tosses" paired with such horrific content creates a jarring dissonance that reflects the soldier\'s desensitisation.',
      lineRef: 15,
      effectAr:
        'التفصيل المؤلم اللي يكاد ما يتحمّل يجبر القارئ إنه يواجه الواقع الجسدي للعنف. الفعل العابر "tosses" مع محتوى مرعب بهالقد يخلق تنافر صادم، يعكس فقدان الحس عند الجندي.',
    },
    {
      device: 'Pun ("bloody")',
      example: 'His bloody life in my bloody hands',
      effect:
        "The word operates on two levels simultaneously: as a common British swear word expressing frustration, and as a literal description of blood-stained hands. This dual meaning captures both the speaker's emotional anguish and physical guilt in a single devastating line.",
      lineRef: 29,
    },
    {
      device: 'Enjambment',
      example: 'the / blood-shadow on the street',
      effect:
        "Lines spill over stanza breaks, mirroring how the speaker's thoughts and memories overflow beyond his control. The fractured line structure reflects a fractured mind -- he cannot contain the memory within neat boundaries.",
      lineRef: 19,
    },
    {
      device: 'Military metaphor',
      example: 'dug in behind enemy lines',
      effect:
        'The dead man is described using the language of military strategy -- he has "dug in" (entrenched) in the speaker\'s mind. This ironic inversion shows that the war has followed the soldier home; his own psyche is now occupied territory.',
      lineRef: 24,
    },
    {
      device: 'Sibilance',
      example: 'sun-stunned, sand-smothered',
      effect:
        'The repeated "s" sounds create a hissing, suffocating quality that mirrors the oppressive desert heat and the speaker\'s sense of being smothered by memory. The alliterative compound adjectives also slow the reader down, forcing them to dwell in the discomfort.',
      lineRef: 25,
    },
  ],
}

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Guilt', icon: HeartCrack, color: 'text-red-400 bg-red-500/10' },
  { label: 'PTSD / Trauma', icon: Brain, color: 'text-purple-400 bg-purple-500/10' },
  { label: 'Reality of conflict', icon: Swords, color: 'text-clay-600 bg-orange-500/10' },
  { label: 'Power of memory', icon: Eye, color: 'text-blue-400 bg-blue-500/10' },
  { label: 'Moral ambiguity', icon: Skull, color: 'text-clay-600 bg-amber-500/10' },
]

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'rem-1',
    question: 'What event does the speaker describe in Remains?',
    type: 'multiple-choice',
    options: [
      'A training exercise',
      'Shooting a looter during a deployment, then being haunted by the memory',
      'Rescuing a civilian from a warzone',
      "Returning home from war to a hero's welcome",
    ],
    correctIndex: 1,
    explanation:
      'The speaker describes shooting a looter who was raiding a bank. The uncertainty about whether the man was armed, and the graphic aftermath, haunt the soldier long after the event.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'rem-2',
    question: 'What does "probably armed, possibly not" reveal?',
    type: 'multiple-choice',
    options: [
      'The soldier was certain the looter had a weapon',
      'The moral ambiguity and guilt - the soldier cannot be sure the killing was justified',
      'The soldier did not care about the situation',
      'The looter was definitely unarmed',
    ],
    correctIndex: 1,
    explanation:
      'The shift from "probably" to the weaker "possibly" shows the soldier\'s uncertainty. He cannot justify the killing with confidence, and this moral doubt becomes the source of his guilt and PTSD.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'rem-3',
    question: 'Why does Armitage use colloquial language like "legs it" and "tosses his guts"?',
    type: 'multiple-choice',
    options: [
      'He is a careless writer',
      'It makes the poem feel like a real soldier talking, not a polished literary voice',
      'It is meant to be humorous',
      'It shows the soldier is uneducated',
    ],
    correctIndex: 1,
    explanation:
      'The informal, colloquial language mimics the way a real soldier would recount the incident. It creates authenticity and makes the sudden shift to haunting imagery more shocking.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'rem-4',
    question: 'What does the poem explore about the psychological effects of war?',
    type: 'multiple-choice',
    options: [
      'War makes soldiers stronger',
      'The trauma of killing someone stays with you forever - PTSD and guilt',
      'Soldiers forget about war quickly',
      'War has no lasting psychological effects',
    ],
    correctIndex: 1,
    explanation:
      'Remains is fundamentally about PTSD (Post-Traumatic Stress Disorder). The dead man is "dug in behind enemy lines" inside the soldier\'s head - he cannot escape the memory, even through drink or drugs.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'rem-5',
    question: 'What is the effect of "blood-shadow stays on the street"?',
    type: 'multiple-choice',
    options: [
      'It describes a clean crime scene',
      'The bloodstain becomes a permanent mark - literally and metaphorically, the killing leaves a stain that cannot be removed',
      'It shows the street is dangerous',
      'It describes sunset',
    ],
    correctIndex: 1,
    explanation:
      "The bloodstain becomes a permanent shadow - a stain on both the street and the soldier's conscience. It cannot be washed away, symbolising how guilt persists long after the physical event.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'rem-6',
    question: 'How does the poem shift between its two halves?',
    type: 'multiple-choice',
    options: [
      'It shifts from casual anecdote to haunting, inescapable guilt',
      'It shifts from sadness to happiness',
      'It stays in the same tone throughout',
      'It shifts from a warzone to a hospital',
    ],
    correctIndex: 0,
    explanation:
      "The first half uses casual, anecdotal language as if telling a story in a pub. The second half shifts dramatically as the dead man's image invades the soldier's waking life and dreams, and guilt takes over.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'rem-7',
    question: 'What is the significance of the final line "his bloody life in my bloody hands"?',
    type: 'multiple-choice',
    options: [
      'It is a swear word with no deeper meaning',
      'The double meaning of "bloody" - both literal blood and the colloquial intensifier - captures the soldier\'s guilt and casual horror simultaneously',
      'It describes the soldier washing his hands',
      'It refers to a different incident',
    ],
    correctIndex: 1,
    explanation:
      '"Bloody" works as both a swear word (casual, colloquial) and a literal description (covered in blood). This duality mirrors the poem\'s central tension between the soldier\'s casual surface and his deep psychological trauma.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'rem-8',
    question: 'Where does Remains come from and what is its context?',
    type: 'multiple-choice',
    options: [
      'It was written during World War I',
      "It is based on a real soldier's testimony from the documentary The Not Dead, about British soldiers in Iraq",
      'It is entirely fictional',
      'It is based on the Falklands War',
    ],
    correctIndex: 1,
    explanation:
      "Remains is based on the real testimony of a soldier named Guardsman Tromans, featured in the Channel 4 documentary The Not Dead (2007). Armitage wrote the poem as part of a collection giving voice to modern soldiers' experiences.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'rem-9',
    question: 'How does Armitage use the present tense to convey the experience of PTSD?',
    type: 'multiple-choice',
    options: [
      'The present tense makes the poem feel outdated',
      'The shift to present tense in the second half shows the memory is not past - it is permanently happening now, refusing to become a memory',
      'The present tense is used throughout without change',
      'It creates a light, cheerful tone',
    ],
    correctIndex: 1,
    explanation:
      'The poem begins in past tense ("we got sent out") but shifts to present ("he\'s here in my head"). This tense shift is crucial: PTSD means the traumatic event never becomes "past" - it remains present, inescapable.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'rem-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Remains for exploring guilt and the psychological effects of conflict?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'War Photographer by Carol Ann Duffy',
      'Tissue by Dharker',
      'Storm on the Island by Heaney',
    ],
    correctIndex: 1,
    explanation:
      'Both Remains and War Photographer explore the lasting psychological impact of witnessing violence. The photographer and the soldier are both haunted by what they have seen - but while the photographer observes, the soldier has directly caused death.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Remains explores the psychological aftermath of killing in war - guilt, PTSD, moral ambiguity, and the impossibility of escaping traumatic memory.',
    keyPoints: [
      'Guilt and moral ambiguity - "probably armed, possibly not"',
      'PTSD - the dead man is "dug in behind enemy lines" inside the speaker\'s head',
      'The gap between the casual telling and the devastating psychological reality',
      'Individual responsibility vs shared guilt - "all three of us open fire"',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Armitage uses colloquial voice, graphic imagery, and dual-meaning words to create a tension between casual storytelling and deep psychological trauma.',
    keyPoints: [
      'Colloquial language ("legs it", "tosses his guts") - authentic soldier\'s voice',
      '"Dug in behind enemy lines" - military metaphor for inescapable memory',
      '"Bloody life in my bloody hands" - double meaning captures guilt',
      'Graphic imagery of the shooting creates visceral, unforgettable scenes',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Free verse with irregular stanza lengths, shifting from anecdotal past tense to haunting present tense as PTSD takes hold.',
    keyPoints: [
      "Free verse - no regular rhyme or metre, mirroring the soldier's fractured state",
      'Tense shift from past to present - the trauma refuses to become memory',
      'First half is narrative; second half is psychological torment',
      'Conversational tone gradually breaks down as guilt overwhelms',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Armitage present the psychological effects of conflict in Remains?',
  'Compare how guilt is presented in Remains and one other poem from the anthology.',
  'How does Armitage use language and structure to show the lasting impact of a single violent act?',
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    title: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    points: [
      'Both explore the psychological impact of combat on individual soldiers',
      'Both use graphic, visceral imagery to convey the horror of violence',
      'Hughes focuses on the moment of action; Armitage on the aftermath and lasting trauma',
      'Bayonet Charge uses third person, creating distance; Remains uses first person, creating intimacy',
    ],
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/power-and-conflict/war-photographer',
    points: [
      'Both deal with memories of conflict that haunt the speaker after returning to safety',
      'Both explore the gap between those who experience war and those who observe it from afar',
      'War Photographer has a controlled, regular structure; Remains uses irregular free verse, reflecting different coping mechanisms',
      'Both speakers are unable to escape the images of death they have witnessed',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    link: '/revision/poetry/power-and-conflict/kamikaze',
    points: [
      'Both explore the conflict between duty (military orders) and personal conscience',
      'Both question whether following orders is morally justified',
      "Kamikaze's pilot chooses not to kill and is punished by society; Armitage's soldier follows orders and is punished by his own mind",
      'Both poems examine how war destroys individuals -- whether through action or inaction',
    ],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function RemainsPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Remains by Simon Armitage - Analysis & Annotations"
        description="Line-by-line analysis of Remains with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Remains',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/remains',
          },
        ]}
      />
      {/* ── Breadcrumb / back ── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power and Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Remains</h1>
            <p className="text-body-sm text-muted-foreground">
              Simon Armitage &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Theme tokens ── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <span
            key={t.label}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${t.color}`}
          >
            <t.icon className="size-3.5" />
            {t.label}
          </span>
        ))}
      </div>

      {/* ── Interactive poem viewer ── */}
      <StudyTools
        textName="Remains"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Remains"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={REMAINS} />

      {/* ── Comparison poems ── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Comparison Poems</h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl">
          For the AQA exam, you must compare two poems from the anthology. These are the strongest
          pairings with "Remains" and the key points of comparison.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border/60 bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">by {c.poet}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {c.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-card-foreground leading-relaxed">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-400/60" />
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
                Study {c.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> &copy; Faber &amp; Faber on behalf of Simon Armitage (b.
        1963). Quotations from &ldquo;Remains&rdquo; are short fair-dealing extracts under CDPA 1988
        &sect;30 (criticism, review, quotation). For full text, students should consult the
        board-licensed AQA Power &amp; Conflict anthology or Armitage&rsquo;s collection{' '}
        <em>The Not Dead</em> (2008).
      </p>
    </div>
  )
}
