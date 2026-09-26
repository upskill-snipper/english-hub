import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Storm on the Island - Seamus Heaney | AQA Power & Conflict',
    description:
      'Interactive GCSE English study guide for Storm on the Island by Seamus Heaney. Annotations, key quotes, language analysis, context and comparisons.',
    images: [
      {
        url: '/api/og?title=Storm+on+the+Island+-+Seamus+Heaney+%7C+AQA+Power+%26+Conflict',
        width: 1200,
        height: 630,
        alt: 'Storm on the Island - Seamus Heaney | AQA Power & Conflict',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/storm-on-the-island',
  },
  title: 'Storm on the Island - Seamus Heaney | AQA Power & Conflict',
  description:
    'Interactive GCSE English study guide for Storm on the Island by Seamus Heaney. Annotations, key quotes, language analysis, context and comparisons.',
}

/* ── Poem data ─────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Storm on the Island',
  poet: 'Seamus Heaney',
  // NOTE: "Storm on the Island" (Seamus Heaney, from Death of a Naturalist,
  // Faber & Faber, 1966) remains in copyright. To avoid reproducing the poem
  // verbatim, each line below is given as a PARAPHRASE in the site's own
  // words rather than the poet's exact text. Students must read the full
  // original in the AQA Power & Conflict anthology.
  //
  // Until 25 September 2026 this array printed the whole poem. On 26
  // September 2026 the page as a whole still quoted 97 distinct words of the
  // poem's 158 (the fair-dealing cap is 23), across the key quotes, device
  // examples, form notes, quiz and revision cards, and two of its quotations
  // were wrong: "as you can see" (the poem has no "can") and "bombards" (the
  // poem's verb is passive). Every quotation left on this page was then
  // checked word for word against the text Poetry By Heart publishes by
  // permission of Faber, and cut to the short phrases the analysis discusses.
  // Anything else is described in the site's own words or cited by line.
  // Lines are cited from 1; a language device's lineRef is 0-based.
  lines: [
    {
      text: '[Paraphrase] We islanders are ready for it: our homes are built low and solid,',
      annotations: [
        {
          type: 'Tone',
          note: 'The confident, collective opening ("We") establishes a communal voice. The colon introduces an explanation of their preparedness.',
          color: '#60a5fa',
        },
        {
          type: 'Form',
          note: 'Opening line of the single-stanza blank verse poem. Iambic pentameter establishes a steady, measured rhythm.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] with foundations set into the rock and sound slate roofs.',
      annotations: [
        {
          type: 'Imagery',
          note: "Monosyllabic, practical words for building and materials convey the solidity and resilience of the islanders' homes.",
          color: '#34d399',
        },
      ],
    },
    {
      text: '[Paraphrase] The shrivelled, barren soil here has never given us trouble',
      annotations: [
        {
          type: 'Personification',
          note: '"Wizened" personifies the earth as old and weathered, suggesting the landscape itself is hardened by exposure.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] by producing a hay crop, which is plainly why you will find no haystacks',
      annotations: [
        {
          type: 'Conversational',
          note: 'The aside to the reader in the middle of the line is a direct address, creating an intimate, conversational tone as if giving a tour of the island.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] or bundles of sheaves that could be blown away. We have no trees either',
      annotations: [
        {
          type: 'Enjambment',
          note: 'The sentence runs across the line break, mirroring the relentless, unstoppable force of the storm itself.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] that could be companions to us when the wind reaches its full',
      annotations: [
        {
          type: 'Personification',
          note: 'Trees described as "company" personifies them as companions, and their absence heightens the islanders\' isolation and vulnerability.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] force (you understand me): foliage and boughs',
      annotations: [
        {
          type: 'Direct address',
          note: 'The colloquial aside to the listener reinforces the conversational tone and assumes shared experience between speaker and reader.',
          color: '#60a5fa',
        },
        {
          type: 'Caesura',
          note: "The colon creates a caesura, a deliberate pause that mimics the momentary lull before the storm's full force.",
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] can set up a mournful, dramatic wailing in high winds,',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Tragic chorus" is a literary allusion to Greek tragedy - the trees become performers in a drama of destruction, elevating the storm to theatrical significance.',
          color: '#34d399',
        },
      ],
    },
    {
      text: '[Paraphrase] which makes you attend to the very sound that scares you,',
      annotations: [
        {
          type: 'Theme',
          note: 'Introduces the psychological dimension - fear is not just about physical danger but about the anticipation and the listening.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] and overlook the fact that it is battering your own home as well.',
      annotations: [
        {
          type: 'Violence',
          note: 'The verb for what the gale does to your own house is violent, suggesting repeated, aggressive blows - the storm is personified as an attacker.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] Here, though, we have not a single tree, and nothing in nature to protect us.',
      annotations: [
        {
          type: 'Repetition',
          note: "The absence of trees is repeated from line 5, reinforcing the barren, exposed landscape and the community's vulnerability.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] You could suppose the sea keeps us company,',
      annotations: [
        {
          type: 'Irony',
          note: 'The sea is introduced as potential "company" but will be revealed as another threatening force - false comfort.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] crashing cosily against the cliffs below,',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Exploding comfortably" is a striking oxymoron - a violent verb paired with a cosy adverb captures how the islanders have normalised danger.',
          color: '#34d399',
        },
        {
          type: 'Military imagery',
          note: 'The explosive verb introduces military language, linking to the Troubles allegory - violence has become routine and almost domestic.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] Not so: once the storm starts, hurled seawater strikes',
      annotations: [
        {
          type: 'Volta',
          note: '"But no" signals a turn in the poem - the speaker corrects the assumption that the sea is safe. The storm\'s assault begins.',
          color: '#a78bfa',
        },
        {
          type: 'Violence',
          note: 'The verbs for the spray are aggressive and violent, showing nature attacking the islanders.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] even the glass of the windows, spitting like a pet cat',
      annotations: [
        {
          type: 'Simile',
          note: 'Comparing the sea spray to a "tame cat" gone savage shows a domesticated animal turning on its owners - what seemed safe becomes dangerous. Links to the Troubles: familiar neighbours becoming enemies.',
          color: '#34d399',
        },
      ],
    },
    {
      text: '[Paraphrase] that has gone wild. We simply stay put as the wind swoops',
      annotations: [
        {
          type: 'Enjambment',
          note: 'The word that completes the simile arrives after the line break, the enjambment enacting the sudden, shocking transformation.',
          color: '#a78bfa',
        },
        {
          type: 'Military imagery',
          note: '"Dives" suggests a dive-bombing aircraft - the wind becomes an aerial attacker, extending the military metaphor.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] and fires on us unseen. The emptiness itself is a volley of shots;',
      annotations: [
        {
          type: 'Military metaphor',
          note: '"Strafes" means to attack repeatedly with gunfire from low-flying aircraft. "Salvo" is a simultaneous discharge of artillery. Both are explicit military terms linking the storm to warfare and the Troubles.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] we are under heavy fire from air that holds nothing.',
      annotations: [
        {
          type: 'Paradox',
          note: 'Being bombarded by the air itself means they are attacked by nothing. The greatest threat is invisible and intangible, reflecting how fear itself is the true enemy.',
          color: '#f59e0b',
        },
        {
          type: 'Military imagery',
          note: '"Bombarded" continues the sustained military metaphor through to the poem\'s conclusion.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] Oddly, what we are afraid of is a vast emptiness.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Huge nothing" is an oxymoron - something vast yet empty. The poem concludes with the idea that the greatest source of fear is absence, the unknown, the invisible.',
          color: '#34d399',
        },
        {
          type: 'Conclusion',
          note: 'The final line circles back to the theme of fear from line 9. Despite all their preparation, the community fears something they cannot see, touch, or fight - a powerful metaphor for the psychological terror of the Troubles.',
          color: '#60a5fa',
        },
      ],
    },
  ],

  context: `<p><strong>Seamus Heaney</strong> (1939-2013) was a Northern Irish poet and Nobel Prize laureate (1995). He grew up in rural County Derry during the political tensions known as <strong>the Troubles</strong> - a period of sectarian conflict between Unionists and Nationalists in Northern Ireland.</p>
<p><strong>Stormont in the title:</strong> The first eight letters of "Storm on the Island" spell <em>Stormont</em>, the seat of the Northern Irish parliament. This hidden word transforms the poem from a simple nature piece into a political allegory about the instability and fear experienced by communities during the Troubles.</p>
<p><strong>Rural community:</strong> The poem is set on an exposed island off the Irish coast, where a close-knit community faces brutal Atlantic storms. The collective "we" voice reflects the shared experience of enduring hardship together.</p>
<p><strong>Nature's power:</strong> Heaney uses the storm as an extended metaphor for political violence. Just as the islanders prepare for storms they cannot control, communities in Northern Ireland lived under the constant threat of violence - an invisible, overwhelming force.</p>
<p><strong>Publication:</strong> The poem was published in Heaney's debut collection <em>Death of a Naturalist</em> (1966), at the beginning of the Troubles. Heaney often explored the relationship between the Irish landscape and political identity.</p>`,

  contextAr: `<p><strong>Seamus Heaney</strong> (1939-2013) شاعر من أيرلندا الشمالية، نال جائزة نوبل سنة 1995. كبر في الريف في County Derry في فترة التوتّر السياسي اللي تعرف بـ<strong>the Troubles</strong> - فترة صراع طائفي بين الـUnionists والـNationalists في أيرلندا الشمالية.</p>
<p><strong>كلمة Stormont في العنوان:</strong> أول ثمان حروف من "Storm on the Island" تتهجّى كلمة <em>Stormont</em>، اللي هي مقر برلمان أيرلندا الشمالية. هذي الكلمة المخفية تحوّل القصيدة من مجرّد وصف طبيعة إلى رمزية سياسية عن عدم الاستقرار والخوف اللي عاشته المجتمعات في أيام الـTroubles.</p>
<p><strong>المجتمع الريفي:</strong> الأحداث في جزيرة مكشوفة قبالة الساحل الأيرلندي، فيها مجتمع متماسك يواجه عواصف الأطلسي العنيفة. صيغة "we" الجماعية تعكس التجربة المشتركة في تحمّل المحن.</p>
<p><strong>قوة الطبيعة:</strong> Heaney يستخدم العاصفة كاستعارة ممتدّة للعنف السياسي. مثل ما سكّان الجزيرة يستعدّون لعواصف ما يقدرون يسيطرون عليها، المجتمعات في أيرلندا الشمالية كانت تعيش تحت تهديد عنف مستمر - قوّة خفيّة وكاسحة.</p>
<p><strong>النشر:</strong> القصيدة طلعت في ديوان Heaney الأول <em>Death of a Naturalist</em> (1966)، في بداية الـTroubles. Heaney كان وايد يستكشف العلاقة بين المنظر الطبيعي الأيرلندي والهوية السياسية.</p>`,

  summary: `The speaker, using a collective "we", describes how an island community prepares for violent storms. They build strong, squat houses from rock and slate, and the barren landscape offers no shelter - no hay, no trees. The speaker reflects on how trees might provide company during a gale, but they are absent.

The poem shifts when the speaker considers the sea: it seems like a companion, "exploding comfortably" on the cliffs, but when the storm truly begins, the sea turns hostile, flinging water at the windows like a pet cat gone wild. The wind attacks with military force: it "dives" and "strafes", and the community is "bombarded".

The poem ends with a paradox: despite all their physical preparation, the community fears something invisible and intangible, a "huge nothing". The real threat is not a physical object but the terrifying power of empty space and air.

On a deeper level, the poem is an allegory for life during the Northern Irish Troubles, where communities lived in constant fear of unpredictable violence from familiar sources.`,

  summaryAr: `المتكلّم، بصيغة الجمع "we"، يوصف كيف إن مجتمع جزيرة يستعد لعواصف عنيفة. يبنون بيوت قوية ومنخفضة (squat) من حجر وحجر السلت (slate)، والأرض القاحلة ما تعطيهم أي ملجأ - ما فيه قش ولا أشجار. المتكلّم يفكّر إن الأشجار ممكن تعطي رفقة وقت العاصفة، بس الأشجار غايبة.

القصيدة تتحوّل لمّا المتكلّم يفكّر في البحر: يبدو وكأنه رفيق، "exploding comfortably" على المنحدرات، بس لمّا تبدأ العاصفة فعلاً، البحر ينقلب عدو - يرشّ ويبصق مثل قط أليف انقلب وحشي. والريح تهاجم بقوة عسكرية: تـ"dives"، وتـ"strafes"، والمجتمع "bombarded".

القصيدة تنتهي بمفارقة: رغم كل استعدادهم المادي، المجتمع يخاف من شي مو موجود مادياً ومو محسوس - "huge nothing". التهديد الحقيقي مو شي ملموس، بل قوة مرعبة في الفراغ وفي الهواء.

على مستوى أعمق، القصيدة رمزية للحياة في أيام الـTroubles في أيرلندا الشمالية، لين المجتمعات كانت تعيش بخوف دائم من عنف ما يقدر يتوقّع، ييي من مصادر مألوفة.`,

  formAndStructure: `BLANK VERSE: Written in unrhymed iambic pentameter (ten syllables per line), giving the poem a steady, measured rhythm that reflects the islanders' stoic determination.

SINGLE STANZA: The entire poem is one continuous stanza of 19 lines, mirroring the relentless, unbroken assault of the storm. There is no visual shelter or pause in the form.

ENJAMBMENT: Frequent run-on lines (lines 4 to 5, 6 to 7, and 16 to 17, where the wind "dives" at the end of one line and "strafes" at the start of the next) create momentum and mirror the unstoppable force of the storm, refusing to let the reader rest.

CONVERSATIONAL OPENING: "We are prepared" begins with quiet confidence. The asides to the reader in lines 4 and 7 are direct address: they create intimacy, as if the speaker is guiding us through their experience.

VOLTA / TURNING POINT: "But no:" (line 14) marks a dramatic shift. The speaker corrects the assumption that the sea is safe. From here, the poem escalates into violent military imagery.

CAESURA: Strategic pauses (the colon after the first word of line 7, and "But no:" in line 14) create moments of tension and disruption within the steady rhythm, like the lulls and surges of a storm.

CYCLICAL STRUCTURE: The poem begins with "We are prepared" (confidence) and ends with the "huge nothing" the islanders fear (vulnerability), showing that preparation cannot eliminate fear.`,

  formAndStructureAr: `BLANK VERSE: مكتوبة في iambic pentameter بدون قافية (عشر مقاطع في كل بيت)، يعطي القصيدة إيقاع ثابت ومتزن، يعكس عزيمة سكّان الجزيرة الصبورة.

مقطع واحد (SINGLE STANZA): القصيدة كلها مقطع متواصل من 19 بيت، يعكس هجوم العاصفة المتواصل بلا توقّف. ما فيه ملجأ بصري ولا توقّف في الشكل.

ENJAMBMENT: تسلسل الأبيات بدون توقّف (من البيت 4 للبيت 5، ومن 6 لـ7، ومن 16 لـ17، لين الريح "dives" في آخر بيت و"strafes" في أول البيت اللي بعده) يخلق زخم، ويعكس قوة العاصفة اللي ما تتوقّف، ويرفض إنه يعطي القارئ راحة.

افتتاحية حوارية: عبارة "We are prepared" تبدأ بثقة هادئة. والكلام الجانبي الموجّه للقارئ في البيتين 4 و7 مخاطبة مباشرة، تخلق ألفة، وكأن المتكلّم يقود القارئ في تجربته.

VOLTA / نقطة التحوّل: "But no:" (البيت 14) يأشّر لتحوّل درامي. المتكلّم يصحّح الافتراض إن البحر آمن. ومن هنا، تتصاعد القصيدة لصور عسكرية عنيفة.

CAESURA: توقّفات استراتيجية (النقطتين بعد أول كلمة في البيت 7، و"But no:" في البيت 14) تخلق لحظات توتّر واضطراب داخل الإيقاع الثابت، مثل لحظات السكون والاندفاع في العاصفة نفسها.

البنية الدائرية (CYCLICAL STRUCTURE): القصيدة تبدأ بـ"We are prepared" (ثقة) وتنتهي بالـ"huge nothing" اللي يخافون منه (هشاشة)، وتبيّن إن الاستعداد ما يقدر يلغي الخوف.`,

  keyQuotes: [
    {
      quote: 'We are prepared',
      analysis:
        'The confident, declarative opening establishes communal resilience. The houses are built "squat": low, sturdy buildings designed to withstand force - practical and defensive. The collective "we" creates solidarity.',
      themes: ['Power of nature', 'Community', 'Conflict'],
      analysisAr:
        'الافتتاحية الواثقة والتقريرية تثبّت فكرة الصمود الجماعي. البيوت مبنية "squat"، يعني منخفضة وقوية، مصمّمة عشان تتحمّل الضربات - عملية ودفاعية. والصيغة الجماعية "we" تخلق إحساس بالتضامن.',
      themesAr: ['قوة الطبيعة', 'المجتمع', 'الصراع'],
    },
    {
      quote: 'tragic chorus',
      analysis:
        'An allusion to Greek tragedy where the chorus comments on unfolding disaster. The foliage of trees, if the island had any, would become performers in a drama of destruction, elevating the storm to something theatrical and fatalistic. The next line (line 9) turns this into psychological fear: the noise makes you listen to what frightens you.',
      themes: ['Power of nature', 'Fear', 'Psychological conflict'],
      analysisAr:
        'إشارة (allusion) إلى التراجيديا اليونانية، اللي فيها الـchorus يعلّق على الكارثة وهي تنكشف. أوراق وأغصان الأشجار، لو كان في الجزيرة أشجار، بتتحوّل لمؤدّين في مسرحية دمار، وهذا يرفع العاصفة لمستوى مسرحي وقدري. والبيت اللي بعده (البيت 9) يحوّلها لخوف نفسي: الصوت يخلّيك تصغي للشي اللي يخوّفك.',
      themesAr: ['قوة الطبيعة', 'الخوف', 'الصراع النفسي'],
    },
    {
      quote: 'Exploding comfortably',
      analysis:
        "A powerful oxymoron showing how violence has been normalised. The islanders have grown so accustomed to the sea's violence that it feels comfortable - a disturbing commentary on living with constant threat.",
      themes: ['Power of nature', 'Conflict', 'Normalisation of violence'],
      analysisAr:
        'oxymoron قوي يبيّن كيف إن العنف صار طبيعي. سكّان الجزيرة تعوّدوا على عنف البحر لدرجة إنه صار مريح لهم - تعليق مزعج عن العيش تحت تهديد دائم.',
      themesAr: ['قوة الطبيعة', 'الصراع', 'تطبيع العنف'],
    },
    {
      quote: 'tame cat / Turned savage',
      analysis:
        'The simile in lines 15 to 16 compares the spray to a domesticated animal becoming feral. The enjambment places "Turned savage" at the start of a new line for maximum shock. Allegorically, it reflects how neighbours turned on each other during the Troubles.',
      themes: ['Power of nature', 'Conflict', 'Betrayal'],
      analysisAr:
        'التشبيه (simile) في البيتين 15 و16 يقارن رذاذ البحر بحيوان أليف انقلب وحشي. والـenjambment يحط "Turned savage" في بداية بيت جديد لأقصى صدمة. ورمزياً، يعكس كيف إن الجيران انقلبوا على بعضهم في أيام الـTroubles.',
      themesAr: ['قوة الطبيعة', 'الصراع', 'الخيانة'],
    },
    {
      quote: 'salvo',
      analysis:
        'In line 17 space itself is called a "salvo", a volley of gunfire. The military term makes the abstract physical - even emptiness becomes weaponised. The sibilance of the line creates a hissing, threatening sound.',
      themes: ['Conflict', 'Fear', 'Power of nature'],
      analysisAr:
        'في البيت 17 الفراغ نفسه يتسمّى "salvo"، يعني رشقة نار. المصطلح العسكري يحوّل المجرّد إلى ملموس - حتى الفراغ يصير سلاح. والـsibilance في البيت تخلق صوت يهسّ ومهدّد.',
      themesAr: ['الصراع', 'الخوف', 'قوة الطبيعة'],
    },
    {
      quote: 'huge nothing',
      analysis:
        "The poem's closing oxymoron, in its last line, captures the paradox of fearing something invisible and intangible. Despite all preparation, the real enemy cannot be seen, fought, or resisted - a powerful metaphor for the Troubles.",
      themes: ['Fear', 'Psychological conflict', 'Power of nature'],
      analysisAr:
        'oxymoron ختامي للقصيدة. "Huge nothing" يلتقط مفارقة الخوف من شي ما يُرى ولا يُلمَس. رغم كل الاستعداد، العدو الحقيقي ما يُشاف، ما يُحارب، ما يُقاوم - استعارة قوية عن الـTroubles.',
      themesAr: ['الخوف', 'الصراع النفسي', 'قوة الطبيعة'],
    },
  ],

  languageDevices: [
    {
      device: 'Military metaphor (sustained)',
      example: 'dives ... strafes ... salvo ... bombarded',
      effect:
        'The sustained military language of lines 16 to 18, prepared for by the sea "exploding" in line 13, transforms the storm into a military assault. This links the natural event to the political violence of the Troubles and suggests the community is under siege.',
      lineRef: 16,
      effectAr:
        'اللغة العسكرية المتواصلة في الأبيات 16 لين 18، واللي يمهّد لها البحر "exploding" في البيت 13، تحوّل العاصفة لهجوم عسكري. هذا يربط الحدث الطبيعي بالعنف السياسي في الـTroubles، ويلمّح إن المجتمع تحت حصار.',
    },
    {
      device: 'Personification',
      example: 'wizened',
      effect:
        '"Wizened" gives the earth human qualities of age and experience, while the verb for what the earth has never done to the islanders in line 3 echoes the name of the Troubles and subtly links the landscape to political conflict.',
      lineRef: 2,
      effectAr:
        'كلمة "wizened" تعطي الأرض صفات بشرية من ناحية العمر والخبرة، بينما الفعل اللي يقول إن الأرض ما سبّبت لهم مشاكل في البيت 3 فيه صدى لاسم الـTroubles، ويربط المنظر الطبيعي بالصراع السياسي بشكل خفي.',
    },
    {
      device: 'Simile',
      example: 'tame cat / Turned savage',
      effect:
        "The sea spray is compared to a pet that has gone wild. The domestic-to-wild transformation captures the shock of something familiar becoming dangerous. The simile works on two levels: literally (the sea's violence) and allegorically (communities turning against each other).",
      lineRef: 14,
      effectAr:
        'رذاذ البحر يتشبّه بحيوان أليف توحّش. التحوّل من الأليف للوحشي يلتقط صدمة الشي المألوف لمّا يصير خطر. الـsimile يشتغل على مستويين: حرفياً (عنف البحر) ورمزياً (المجتمعات اللي ينقلب بعضها على بعض).',
    },
    {
      device: 'Oxymoron',
      example: 'Exploding comfortably',
      effect:
        'The violent "exploding" paired with the gentle "comfortably" shows the normalisation of danger. The community has lived with violence so long it feels routine - a chilling commentary on life during the Troubles.',
      lineRef: 12,
      effectAr:
        'الكلمة العنيفة "exploding" مع الكلمة الهادئة "comfortably" تبيّن تطبيع الخطر. المجتمع عاش مع العنف فترة طويلة لدرجة إنه صار روتين - تعليق مرعب على الحياة في أيام الـTroubles.',
    },
    {
      device: 'Oxymoron',
      example: 'huge nothing',
      effect:
        "The final oxymoron encapsulates the poem's central paradox: the greatest fear is caused by something that is simultaneously vast and empty. Fear itself - shapeless and invisible - is the true antagonist.",
      lineRef: 18,
      effectAr:
        'الـoxymoron الختامي يلخّص المفارقة الجوهرية في القصيدة: أعظم خوف يسبّبه شي شاسع وفاضي في نفس الوقت. الخوف نفسه - اللي ما له شكل ولا يُرى - هو الخصم الحقيقي.',
    },
    {
      device: 'Volta and caesura',
      example: 'But no',
      effect:
        "The blunt contradiction in line 14 is the poem's turning point: the speaker overturns the idea that the sea keeps them company, and the colon after it makes a caesura, a sharp pause before the attack. From here the language becomes violent and military. Earlier asides to the reader (lines 4 and 7) had used direct address to draw us into the community's calm; this line breaks that calm.",
      lineRef: 13,
      effectAr:
        'التناقض الصريح في البيت 14 هو نقطة التحوّل (volta) في القصيدة: المتكلّم ينقض فكرة إن البحر رفيق، والنقطتين بعده تخلق caesura، يعني وقفة حادّة قبل الهجوم. ومن هنا تصير اللغة عنيفة وعسكرية. قبلها، الكلام الجانبي الموجّه للقارئ (البيتين 4 و7) كان مخاطبة مباشرة تجرّنا لهدوء المجتمع، وهذا البيت يكسر هالهدوء.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'soti-1',
    question: 'What is the poem Storm on the Island about on a literal level?',
    type: 'multiple-choice',
    options: [
      'A volcanic eruption on an island',
      'An island community preparing for and enduring a powerful storm',
      'A shipwreck during a hurricane',
      'A peaceful day at the seaside',
    ],
    correctIndex: 1,
    explanation:
      "On a literal level, the poem describes an island community that has prepared for a violent storm. Despite their preparations, the storm's ferocity still terrifies them.",
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'soti-2',
    question: 'What tone does the speaker have at the beginning of the poem?',
    type: 'multiple-choice',
    options: [
      'Fearful and anxious',
      'Confident and well-prepared',
      'Angry and frustrated',
      'Sad and melancholy',
    ],
    correctIndex: 1,
    explanation:
      'The poem opens with "We are prepared" - a confident, collective statement. The islanders have built solid homes and feel ready to face the storm, but this confidence is gradually undermined.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'soti-3',
    question: 'What does "Exploding comfortably" suggest about the sea?',
    type: 'multiple-choice',
    options: [
      'The sea is calm and gentle',
      'The islanders are so used to violent seas that they find comfort in them - until the real storm hits',
      'The sea is warm and inviting',
      'The explosion refers to fireworks',
    ],
    correctIndex: 1,
    explanation:
      'The oxymoron "exploding comfortably" shows the islanders are accustomed to rough seas. The word "exploding" is violent, but "comfortably" domesticates it - they are normalised to danger, until the real storm overwhelms them.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'soti-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets in regular stanzas',
      'A single stanza of blank verse (unrhymed iambic pentameter)',
      'Free verse with no regular metre',
      'A sonnet with a volta',
    ],
    correctIndex: 1,
    explanation:
      "The poem is written as a single block of blank verse (unrhymed iambic pentameter), reflecting the relentless, unbroken force of the storm and the community's attempt to hold firm.",
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'soti-5',
    question: 'What is the hidden political allegory in Storm on the Island?',
    type: 'multiple-choice',
    options: [
      'It is about climate change',
      'The word Stormont is hidden in the title, linking to the political turmoil of Northern Ireland',
      'It describes a real hurricane',
      'It is about the Scottish independence movement',
    ],
    correctIndex: 1,
    explanation:
      "The title contains the word Stormont - the seat of Northern Ireland's government. Heaney wrote during the Troubles, and the poem can be read as an allegory for living under the constant threat of political violence.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'soti-6',
    question: 'What is the effect of the "huge nothing" in the final line?',
    type: 'multiple-choice',
    options: [
      'The storm is not actually dangerous',
      'The paradox reveals that the most terrifying thing is the invisible, intangible force - fear of something you cannot see or fight',
      'The islanders are being irrational',
      'The storm has already passed',
    ],
    correctIndex: 1,
    explanation:
      'This paradox is the poem\'s crucial conclusion. The storm is invisible - wind, air, "nothing" - yet it is more terrifying than any tangible enemy. Fear of the unseen and uncontrollable is the poem\'s deepest theme.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'soti-7',
    question: 'How does Heaney use military language in the poem?',
    type: 'multiple-choice',
    options: [
      'He describes an actual military battle',
      'Words like "bombarded", "strafes", and "salvo" present nature as an attacking army',
      'He praises the soldiers who defend the island',
      'He uses military language sarcastically',
    ],
    correctIndex: 1,
    explanation:
      'Heaney uses a sustained semantic field of warfare - "bombarded", "strafes", "salvo" - to present the storm as a military attack. This reinforces the political allegory of the Troubles.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'soti-8',
    question: 'Who is Seamus Heaney and what is his background?',
    type: 'multiple-choice',
    options: [
      'An English war poet from World War II',
      'A Nobel Prize-winning Northern Irish poet who grew up during the Troubles',
      'A Scottish Romantic poet',
      'An American nature poet',
    ],
    correctIndex: 1,
    explanation:
      'Seamus Heaney (1939-2013) was a Northern Irish poet who won the Nobel Prize for Literature in 1995. He grew up in rural Northern Ireland and wrote extensively about the landscape, community, and political tensions of the Troubles.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'soti-9',
    question:
      'How does the shift from "We are prepared" in line 1 to the "huge nothing" feared in line 19 chart the poem\'s emotional journey?',
    type: 'multiple-choice',
    options: [
      'The community becomes more confident',
      "The poem moves from collective confidence to existential fear - human preparation proves inadequate against nature's intangible power",
      'The storm turns out to be harmless',
      'The islanders decide to leave',
    ],
    correctIndex: 1,
    explanation:
      "The poem's arc moves from confident preparation to humbling fear. Despite their solid homes and experience, the islanders cannot defend against something invisible. This mirrors how human structures - political or physical - cannot fully protect against overwhelming forces.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'soti-10',
    question:
      'Which poem from the Power and Conflict anthology pairs best with Storm on the Island for comparing the power of nature?',
    type: 'multiple-choice',
    options: [
      'My Last Duchess by Browning',
      'The Prelude by Wordsworth',
      'Checking Out Me History by Agard',
      'London by Blake',
    ],
    correctIndex: 1,
    explanation:
      "Both Storm on the Island and The Prelude explore the terrifying power of nature and humanity's vulnerability. Both feature speakers who shift from confidence to fear. Heaney's storm is literal and present; Wordsworth's mountain is remembered.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Storm on the Island explores the power of nature, the limits of human preparation, fear of the invisible, and (allegorically) the political turmoil of Northern Ireland.',
    keyPoints: [
      'Power of nature - the storm overwhelms despite human preparation',
      'Fear of the intangible - the "huge nothing" of the final line',
      'Community and resilience - "We" shows collective experience',
      "Political allegory - Stormont hidden in the title links to Northern Ireland's Troubles",
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Heaney uses military language, personification, oxymoron, and a conversational tone that gradually gives way to fear.',
    keyPoints: [
      '"Exploding comfortably" - oxymoron showing normalised danger',
      'Military semantic field: "bombarded", "strafes", "salvo"',
      '"Huge nothing" - paradox at the poem\'s climax',
      'Conversational asides to the reader (lines 4 and 7) shift to terror',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "A single stanza of blank verse - the unbroken block mirrors both the relentless storm and the community's attempt to stand firm.",
    keyPoints: [
      "Single stanza - no breaks, reflecting the storm's unrelenting force",
      "Blank verse (iambic pentameter) - steady rhythm like the islanders' resilience",
      'Enjambment - lines spill forward like the wind itself',
      'Final line creates a quiet, devastating conclusion after the building intensity',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Heaney present the power of nature in Storm on the Island?',
  'Compare how fear is presented in Storm on the Island and one other poem from the anthology.',
  'How does Heaney use language and structure to show the shift from confidence to fear?',
]

/* ── Comparison poems ──────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    link: '/revision/poetry/power-and-conflict/exposure',
    reason:
      "Both poems depict people enduring the relentless assault of nature. Owen's soldiers and Heaney's islanders share a passive, helpless stance against elemental forces that mirror human conflict.",
  },
  {
    title: 'The Prelude (extract)',
    poet: 'William Wordsworth',
    link: '/revision/poetry/power-and-conflict/the-prelude',
    reason:
      'Both explore the sublime power of nature and human vulnerability. While Wordsworth\'s speaker is alone, Heaney uses a communal "we" - contrasting individual and collective experiences of nature\'s overwhelming force.',
  },
  {
    title: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    reason:
      'Both use vivid, violent imagery and explore the psychology of fear. Hughes depicts the visceral terror of warfare explicitly, while Heaney embeds it in nature - but both show people confronting forces beyond their control.',
  },
]

/* ── Theme tokens ──────────────────────────────────────────────────── */

const themes = [
  'Power of nature',
  'Conflict',
  'Fear',
  'Community',
  'Vulnerability',
  'Psychological conflict',
  'Normalisation of violence',
]

/* ── Page component ────────────────────────────────────────────────── */

export default function StormOnTheIslandPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <CourseJsonLd
        name="Storm on the Island by Seamus Heaney - Analysis & Annotations"
        description="Line-by-line analysis of Storm on the Island with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        className="gap-1.5 text-muted-foreground"
        render={<Link href="/revision/poetry/power-and-conflict" />}
      >
        <ArrowLeft className="h-4 w-4" />
        Power &amp; Conflict Anthology
      </Button>

      {/* Intro */}
      <header className="space-y-3">
        <h1 className="text-heading-lg text-foreground">Storm on the Island</h1>
        <p className="text-lg text-muted-foreground">
          Seamus Heaney &middot; <em>Death of a Naturalist</em> (1966)
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
          AQA
        </Badge>
      </header>

      {/* Theme tokens */}
      <section aria-label="Themes" className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {theme}
          </span>
        ))}
      </section>

      {/* Interactive poem viewer */}
      <StudyTools
        textName="Storm on the Island"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Storm on the Island"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={poem} />

      {/* Comparison poems */}
      <section className="space-y-4">
        <h2 className="text-heading-md text-foreground">Compare with&hellip;</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comp) => (
            <div
              key={comp.title}
              className="rounded-xl border border-border bg-card p-5 space-y-3 flex flex-col"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">{comp.title}</h3>
                <p className="text-xs text-muted-foreground">{comp.poet}</p>
              </div>
              <p className="text-sm text-card-foreground flex-1">{comp.reason}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={comp.link} />}
              >
                Study this poem
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Back to anthology CTA */}
      <div className="flex justify-center pt-4">
        <Button
          variant="outline"
          size="lg"
          className="gap-2"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Power &amp; Conflict Anthology
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> &copy; Faber &amp; Faber on behalf of Seamus Heaney
        (1939–2013). The poem is paraphrased here rather than printed. Quotations from &ldquo;Storm
        on the Island&rdquo; are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism,
        review, quotation). The full text is printed in the board-licensed AQA Power &amp; Conflict
        anthology and in Heaney&rsquo;s collection <em>Death of a Naturalist</em> (1966).
      </p>
    </div>
  )
}
