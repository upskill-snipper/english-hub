'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────── */

const poppiesData: PoemData = {
  title: 'Poppies',
  poet: 'Jane Weir',
  // NOTE: "Poppies" (Jane Weir, 2009) remains in copyright. To avoid reproducing
  // the poem, each line below is given as a PARAPHRASE in the site's own words,
  // and the annotations quote only short phrases. Students must read the full
  // original text in the AQA Power and Conflict anthology.
  //
  // Until 25 September 2026 this array printed a corrupted text as the poem. Of
  // its 24 lines, four were Weir's as she wrote them, 14 were garbled or spliced
  // versions of hers and six were invented, and 18 of her 35 lines were missing;
  // VERIFY comments marked some of the damage. It now follows the published
  // poem, 35 lines in four stanzas of 6, 11, 12 and 6, one entry per line in the
  // poem's order, checked line by line on 26 September 2026 against a printed
  // copy of the poem. The viewer numbers entries by position, stanza breaks
  // included, so after the first stanza its numbers run ahead of the
  // anthology's. Annotations that described invented lines or repetitions the
  // poem does not make were rewritten or trimmed.
  //
  // The summary, key quotes, devices, form notes and quiz were rebuilt on 26
  // September 2026. Until then they quoted lines that are not in the poem (a
  // bird simile where Weir has a wishbone, white crosses where she has war
  // graves, a stroke of the top of his head where she has the tip of his nose,
  // a breaking-off sentence, war-torn nerves, a line about taste and breath),
  // put a line break inside a line, and quoted 99 distinct words of a 35-line
  // poem against a fair-dealing share of 22. Every quotation left was checked
  // word for word that day against AQA's published anthology sample
  // (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF), which
  // prints the poem by permission of Templar Poetry. The page now quotes 22
  // distinct words; everything else is described in its own words, by line.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] Armistice Sunday was still three days off,',
      annotations: [
        {
          type: 'Context',
          note: 'Armistice Sunday commemorates the end of World War I on 11 November. Setting the poem three days before places us in the anticipatory grief of Remembrance.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] yet poppies were already laid out',
      annotations: [
        {
          type: 'Symbolism',
          note: 'Poppies are the universal symbol of remembrance for fallen soldiers, originating from the fields of Flanders in WWI.',
          color: '#f59e0b',
        },
      ],
    },
    { text: "[Paraphrase] on each soldier's grave. Before her son went away," },
    {
      text: '[Paraphrase] she fixed a poppy to his lapel, its petals crinkled,',
      annotations: [
        {
          type: 'Domestic imagery',
          note: 'The intimate, maternal act of pinning - typically associated with school uniforms - blurs the boundary between sending a child to school and sending a soldier to war.',
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] twitching flashes of red paper, breaking up a barrier',
      annotations: [
        {
          type: 'Tactile imagery',
          note: "The noun for the paper petals' movement (see Key Quotes) suggests involuntary, painful movement - the artificial poppy's crepe paper becomes a metaphor for the mother's convulsive grief.",
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] formed by the yellow edging tape that trims his blazer.' },
    { text: '' },
    // Stanza 2
    { text: '[Paraphrase] Her hand wrapped in sticky tape like a bandage,' },
    { text: "[Paraphrase] she gathered up as much of the cat's white fur" },
    { text: '[Paraphrase] as she was able, then flattened the collar of his shirt,' },
    { text: '[Paraphrase] which stood up, and made herself hold back the tenderness' },
    { text: '[Paraphrase] showing in her face. She longed to brush her nose' },
    {
      text: '[Paraphrase] against the end of his, and to play',
      annotations: [
        {
          type: 'Repetition',
          note: "Naming her own nose and then her son's in consecutive lines dwells on one small physical detail, giving the memory a cyclical, obsessive quality: the mother replays it.",
          color: '#f472b6',
        },
      ],
    },
    { text: '[Paraphrase] the nose-rubbing game they shared back when' },
    { text: '[Paraphrase] he was small. She fought back the urge' },
    { text: '[Paraphrase] to rake her fingers through his hair, stiff with gel' },
    { text: '[Paraphrase] and spiked like blackthorn. Every word she had' },
    {
      text: '[Paraphrase] was pressed flat and matted down like felt,',
      annotations: [
        {
          type: 'Enjambment',
          note: "The enjambment across the stanza break enacts the mother's loss of control - her words literally spill over the boundary.",
          color: '#34d399',
        },
      ],
    },
    { text: '' },
    // Stanza 3
    { text: '[Paraphrase] gradually dissolving. She kept her courage as she walked' },
    { text: '[Paraphrase] him to the entrance of the house, and flung' },
    {
      text: '[Paraphrase] it wide, the world beyond it brimming over',
      annotations: [
        {
          type: 'Sensory detail',
          note: 'The world brimming over as the door opens (see Key Quotes) conveys the overwhelming nature of grief - emotions flood beyond containment, mirroring the enjambment that runs throughout the poem.',
          color: '#34d399',
        },
      ],
    },
    { text: '[Paraphrase] like a chest full of treasure. In an instant' },
    { text: '[Paraphrase] he was gone, giddy with excitement.' },
    { text: '[Paraphrase] When he had left, she went into his room' },
    {
      text: '[Paraphrase] and set free a songbird that was kept in a cage.',
      annotations: [
        {
          type: 'Metaphor',
          note: "The songbird released from its cage symbolises the mother letting her child go - an act that is both liberating and painful. It may also represent the child's spirit or the mother's suppressed emotions finally finding release.",
          color: '#60a5fa',
        },
      ],
    },
    { text: '[Paraphrase] Next, a lone dove left a pear tree,' },
    { text: '[Paraphrase] and she has followed it to this place,' },
    { text: '[Paraphrase] edging round the walls of the churchyard, her stomach knotted' },
    { text: '[Paraphrase] as if folded and stitched like fabric; she had no hat,' },
    { text: '[Paraphrase] no warm coat, and no scarf or gloves for extra protection.' },
    { text: '' },
    // Stanza 4
    { text: '[Paraphrase] When she got to the hilltop, she ran her fingers over' },
    { text: '[Paraphrase] the words carved into the memorial for the war dead,' },
    { text: '[Paraphrase] and rested on it, her body in the shape of a wishbone.' },
    { text: '[Paraphrase] Overhead, the dove tugged its way freely across the sky,' },
    { text: '[Paraphrase] like a decorative stitch. She listened, hoping she might catch' },
    { text: '[Paraphrase] his voice from his playground days, carried faintly by the breeze.' },
  ],

  context: `<p><strong>Jane Weir</strong> is a British poet born in 1963 who grew up in Manchester and has also lived in Italy. She works as a textile designer, and the influence of textiles - stitching, weaving, fabric - runs throughout her poetry.</p>
<p><strong>"Poppies"</strong> was published in 2009 as part of a collection commissioned by Carol Ann Duffy (then Poet Laureate) to mark modern conflict. The poem is written from the perspective of a <strong>mother</strong> whose son has gone to war, though Weir has said it could apply to any mother sending a child away.</p>
<p>The poem is set around <strong>Remembrance Day</strong> (Armistice Sunday, 11 November) and draws on the symbolism of <strong>poppies</strong> - the flowers that grew on the battlefields of Flanders in World War I and have since become the universal emblem of remembrance.</p>
<p>Unlike many war poems written from a soldier's perspective, "Poppies" focuses on the <strong>domestic, emotional cost</strong> of conflict - the grief, anxiety, and loss experienced by those left behind. The poem deliberately blurs time periods: it could be set during WWI, WWII, or any modern conflict, making the mother's experience timeless and universal.</p>
<p>Key contextual threads include the tension between the <strong>domestic world</strong> (pinning lapels, school blazers, playground voices) and the <strong>military world</strong> (Armistice Sunday, war graves, poppies), and the way <strong>textile imagery</strong> - felt, bias binding, tucks, darts, pleats - weaves throughout as a metaphor for the mother stitching together fragments of memory and grief.</p>`,

  contextAr: `<p><strong>Jane Weir</strong> شاعرة بريطانية مواليد سنة 1963، تربّت في Manchester وعاشت كمان في إيطاليا. تشتغل مصمّمة منسوجات، وتأثير عالم النسيج - الخياطة والحياكة والقماش - يسري في شعرها كله.</p>
<p>قصيدة <strong>"Poppies"</strong> نُشرت سنة 2009 ضمن مجموعة كلّفتها فيها Carol Ann Duffy (اللي كانت وقتها Poet Laureate) عشان توثّق النزاعات الحديثة. القصيدة مكتوبة على لسان <strong>أم</strong> ابنها راح للحرب، رغم إن Weir قالت إنها تنطبق على أي أم تودّع عيالها.</p>
<p>الأحداث تدور حوالين <strong>Remembrance Day</strong> (Armistice Sunday، 11 نوفمبر) وتستثمر رمزية الـ<strong>poppies</strong> (شقائق النعمان) - الورد اللي طلع في ساحات معارك Flanders في الحرب العالمية الأولى، وصار من بعدها رمز عالمي للتذكّر وإحياء ذكرى الشهداء.</p>
<p>على عكس كثير من قصائد الحرب اللي تكتب من زاوية الجندي، "Poppies" تركّز على <strong>التكلفة المنزلية والعاطفية</strong> للصراع - الحزن والقلق والفقد اللي يعيشه أهل المقاتل في البيت. القصيدة عن قصد تطمس الفترات الزمنية: ممكن تكون في الحرب العالمية الأولى، أو الثانية، أو أي نزاع حديث، وهذا الشي يخلّي تجربة الأم خالدة وعالمية.</p>
<p>من أهم الخيوط السياقية: التوتّر بين <strong>عالم البيت</strong> (تثبيت الـlapels، البليزرات المدرسية، أصوات الملعب) و<strong>عالم العسكر</strong> (Armistice Sunday، قبور الجنود، الـpoppies)، وأسلوب <strong>صور المنسوجات</strong> - felt، bias binding، tucks، darts، pleats - اللي تحاك في القصيدة كاستعارة لمحاولة الأم إنها تخيّط مع بعض شظايا الذكرى والحزن.</p>`,

  summary: `"Poppies" traces a mother's experience of letting her son go to war, structured around the rituals of Remembrance. The poem is set just before Armistice Sunday, with the mother fixing a poppy to her son's lapel - an act that merges the domestic ritual of preparing a child for school with the formal act of military remembrance.

As the son departs, the mother is left with fragments of memory: childhood games, the texture of his hair, his playground voice. The poem moves between past and present, blurring the timeline so that the child leaving for school and the soldier leaving for war become indistinguishable.

After her son has gone, the mother goes into his bedroom and sets a caged bird free - a symbolic act of letting go. She follows a dove to the war memorial on the hill and leans against it, her body bent into the shape of a wishbone, listening for her son's voice on the wind. The poem ends with this image of desperate, fragile hope - the mother still searching for connection to her absent child.

Throughout, Weir uses textile imagery (felt, bias binding, tucks, darts, pleats) to convey the mother's attempt to hold things together, and sensory, tactile language to express grief that is physical and overwhelming rather than abstract.`,

  summaryAr: `قصيدة "Poppies" تتبع تجربة أم وهي تخلّي ابنها يروح للحرب، والقصيدة مبنية على طقوس Remembrance. أحداثها قبل Armistice Sunday بأيام قليلة، والأم تثبّت الـpoppy على lapel ابنها - فعل يدمج بين الطقس البيتي اللي تجهّز فيه طفلها للمدرسة وبين المراسم العسكرية الرسمية لإحياء ذكرى الشهداء.

ولمّا الابن يطلع، الأم تتبقّى مع شظايا الذكرى: ألعاب الطفولة، ملمس شعره، صوته في الملعب. القصيدة تتنقّل بين الماضي والحاضر، وتطمس الجدول الزمني، عشان الطفل اللي طالع للمدرسة والجندي اللي طالع للحرب يصيرون شي واحد ما تقدر تفرّق بينهم.

بعد ما يروح الابن، الأم تدخل غرفته وتطلق طير محبوس في قفص - فعل رمزي للتخلية والإفلات. وتلحق حمامة لين النصب التذكاري للحرب فوق التلّ، وتميل عليه وجسمها منحني على شكل wishbone (عظمة الأماني)، تنصت لصوت ابنها مع الهواء. القصيدة تنتهي بهالصورة من الأمل اليائس والهش - الأم لساتها تدوّر على وصل مع طفلها الغايب.

على طول القصيدة، Weir تستخدم صور المنسوجات (felt، bias binding، tucks، darts، pleats) عشان توصّل محاولة الأم إنها تمسك الأشياء مع بعض، ولغة حسّية وملموسة عشان تعبّر عن حزن جسدي طاغي مو مجرّد فكرة مجرّدة.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme or metre. The lack of formal structure mirrors the mother's emotional state - uncontained, unpredictable, and resistant to neat resolution. The poem is written in the first person, giving us direct access to the mother's interior world.

STRUCTURE: The poem moves associatively rather than chronologically, drifting between past memories and present grief. Long, flowing sentences run across line and stanza breaks through extensive enjambment, enacting the way memories and emotions spill uncontrollably from one moment to the next.

ENJAMBMENT: This is the poem's most important structural feature. Lines break mid-phrase (lines 5 to 6 split the military word from the school-uniform trim it describes; lines 10 to 11 split her steeling of her face), mid-clause, and even mid-word-group, creating a sense of breathlessness and emotional overflow. The enjambment across stanza breaks is particularly powerful - from stanza 2 into stanza 3 her flattened words run on without a pause, and thoughts refuse to be contained within neat boundaries.

SENTENCE LENGTH: Weir uses long, complex sentences that mirror the mother's stream of consciousness. Lists, such as the three sewing terms of line 28, accumulate details obsessively. Against them, short statements (her claim to have been brave, line 18) and full stops that fall mid-line in stanzas 2 and 3 interrupt the flow, showing what it costs her to stay composed.

STANZAS: The poem's four uneven stanzas, of 6, 11, 12 and 6 lines, reject regularity. There is no neat pattern - the poem's shape on the page is itself disrupted and asymmetric, reflecting the disruption of loss.

TENSE SHIFTS: The poem is told mostly in the past tense, but in stanza 3 it moves into the present perfect as she says where the dove has led her (line 26), bringing the reader into her present. This temporal instability suggests the mother is trapped between past happiness and present grief.`,

  formAndStructureAr: `FORM (الشكل): free verse بدون قافية ثابتة ولا وزن منتظم. غياب البناء الرسمي يعكس الحالة العاطفية للأم - منفلتة، غير متوقّعة، وترفض أي حلّ مرتّب. القصيدة مكتوبة بضمير المتكلّم، وهذا يعطينا منفذ مباشر لعالم الأم الداخلي.

STRUCTURE (البناء): القصيدة تتحرّك بالترابط الذهني مو بالترتيب الزمني، وتتنقّل بين ذكريات الماضي وحزن الحاضر. الجمل طويلة ومتدفّقة، تعبر فواصل الأبيات والمقاطع عن طريق enjambment مكثّف، وهذا يجسّد كيف الذكريات والمشاعر تطفح بدون سيطرة من لحظة لثانية.

ENJAMBMENT: هذا أهم ميزة بنيوية في القصيدة. الأبيات تنكسر في نص العبارة (البيتين 5 و6 يفصلون الكلمة العسكرية عن حاشية الزي المدرسي اللي توصفها؛ والبيتين 10 و11 يفصلون عبارة تماسك وجهها)، في نص الجملة، حتى في نص المجموعة اللفظية، وهذا يخلق إحساس بانقطاع النفس وفيضان عاطفي. الـenjambment عبر فواصل المقاطع له ثقل خاص - من المقطع 2 للمقطع 3 كلماتها المسطّحة تكمل بدون وقفة، والأفكار ترفض إنها تنحبس داخل حدود مرتّبة.

SENTENCE LENGTH (طول الجملة): Weir تستخدم جمل طويلة ومعقّدة تعكس تيّار وعي الأم. القوائم، مثل مصطلحات الخياطة الثلاثة في البيت 28، تتراكم تفاصيل بطريقة هوسية. وقبالها، الجمل القصيرة (لمّا تقول إنها كانت شجاعة، البيت 18) والنقاط اللي تطيح في نص البيت في المقطعين 2 و3 تقطع التدفّق، وتبيّن قدّيش يكلّفها إنها تتماسك.

STANZAS (المقاطع): مقاطع القصيدة الأربعة غير المنتظمة، 6 و11 و12 و6 أبيات، ترفض الانتظام. ولا نمط مرتّب - شكل القصيدة على الصفحة نفسه مضطرب وغير متناظر، وهذا يعكس اضطراب الفقد.

TENSE SHIFTS (تبدّل الأزمنة): أغلب القصيدة بالماضي، بس في المقطع 3 تنتقل للـpresent perfect لمّا تقول وين وصّلتها الحمامة (البيت 26)، وتجيب القارئ لحاضرها. هالاضطراب الزمني يلمّح إن الأم محبوسة بين سعادة الماضي وحزن الحاضر.`,

  keyQuotes: [
    {
      quote: 'spasms of paper red',
      analysis:
        'The noun "spasms" transforms the artificial poppy into something visceral and bodily - it suggests involuntary pain, convulsions, even death throes. "Paper red" is often read as a transferred epithet: the redness belongs to blood and poppies, but is applied to paper, collapsing the boundary between the symbolic poppy and real bloodshed.',
      themes: ['War and conflict', 'Grief', 'Symbolism'],
      analysisAr:
        'كلمة "spasms" تحوّل الـpoppy الاصطناعية إلى شي حسّي وجسدي - تلمّح بألم لا إرادي، تشنّجات، حتى نزع روح. وعبارة "paper red" وايد يقرونها كـtransferred epithet: الاحمرار في الأصل صفة للدم والـpoppies، بس تُنسب للورق، وهذا يطمس الحدود بين الـpoppy الرمزية وبين سفك دم حقيقي.',
      themesAr: ['الحرب والصراع', 'الحزن', 'الرمزية'],
    },
    {
      quote: 'bias binding',
      analysis:
        'A sewing term for the yellow trim on the edge of his school blazer. The line before calls it a "blockade", a military word, so war intrudes into the domestic scene even as the mother adjusts his uniform: the language of the home and the language of war are stitched together.',
      themes: ['Domestic vs military', 'Family', 'War and conflict'],
      analysisAr:
        'مصطلح خياطة للحاشية الصفرا على طرف blazer المدرسة. والبيت اللي قبله يسمّيها "blockade"، كلمة عسكرية، يعني الحرب تقتحم المشهد البيتي والأم تعدّل زيّه: لغة البيت ولغة الحرب تنخاط مع بعض.',
      themesAr: ['البيتي مقابل العسكري', 'الأسرة', 'الحرب والصراع'],
    },
    {
      quote: 'song bird',
      analysis:
        'A central metaphor for letting go. After he has gone she frees the caged bird in his bedroom (lines 23 to 24): the caged bird represents the child held safe at home, and releasing it symbolises the mother allowing her son to leave for war. A bird that sings implies beauty and fragility, while the cage suggests both protection and confinement. The act is both generous and devastating.',
      themes: ['Loss and absence', 'Freedom', 'Family'],
      analysisAr:
        'استعارة محورية للتخلية والإفلات. بعد ما يروح، تطلق الطير المحبوس في غرفته (البيتين 23 و24): الطير المحبوس يمثّل الطفل اللي تحفظه الأم في البيت؛ وإطلاقه يرمز للأم وهي تخلّي ابنها يطلع للحرب. طير يغنّي يلمّح بالجمال والهشاشة، والقفص يلمّح بالحماية وكمان بالحبس. الفعل سخي ومدمّر في نفس الوقت.',
      themesAr: ['الفقد والغياب', 'الحرية', 'الأسرة'],
    },
    {
      quote: 'overflowing',
      analysis:
        "As she flings the front door open, the world beyond is brimming over (line 20). The word captures the mother's sense of being overwhelmed - her grief is so vast that it cannot be contained - and it connects to the enjambment throughout the poem: emotions, like the verse itself, refuse to stay within boundaries. For her son, by contrast, the simile of line 21 makes the world outside a store of riches.",
      themes: ['Grief', 'Memory', 'Nature'],
      analysisAr:
        'لمّا تفتح باب البيت على وسعه، الدنيا برّا طافحة (البيت 20). الكلمة تلتقط إحساس الأم إنها مغمورة - حزنها واسع لدرجة إنها ما تقدر تحتويه - وتتربط بالـenjambment اللي يجري في كل القصيدة: المشاعر، مثل الأبيات نفسها، ترفض تنحبس داخل الحدود. وبالنسبة لابنها، على العكس، التشبيه في البيت 21 يخلّي الدنيا برّا كنز مليان.',
      themesAr: ['الحزن', 'الذكرى', 'الطبيعة'],
    },
    {
      quote: 'like a wishbone',
      analysis:
        'At the war memorial the mother leans her body against the stone in the shape of a wishbone (line 32). A wishbone is pulled apart to make a wish, so the simile suggests both longing - she wishes for her son to return - and a body close to breaking, pulled two ways between hope and loss.',
      themes: ['Loss and absence', 'Vulnerability', 'Memory'],
      analysisAr:
        'عند النصب التذكاري، الأم تسند جسمها على الحجر بشكل wishbone (عظمة الأماني) (البيت 32). الـwishbone تنكسر بين اثنين عشان يتمنّون أمنية، فالتشبيه يلمّح بالشوق - تتمنّى ابنها يرجع - وبجسم قريب من الانكسار، مشدود بين الأمل والفقد.',
      themesAr: ['الفقد والغياب', 'الهشاشة', 'الذكرى'],
    },
    {
      quote: 'playground voice',
      analysis:
        'The final image of the poem. The phrase collapses the son back into childhood - he is not a soldier but a playing child. She hopes to hear it carried on the wind (line 35), something barely audible, fleeting, almost lost. The mother strains to hear a voice that may no longer exist, an image of hope and despair in equal measure.',
      themes: ['Loss and absence', 'Memory', 'Childhood vs adulthood'],
    },
  ],

  languageDevices: [
    {
      device: 'Tactile / sensory imagery',
      example: 'crimped petals',
      effect:
        "Weir saturates the poem with physical sensation - touch and texture above all. Grief in this poem is not abstract but felt in the body. The crinkled paper petals are both the poppy and the mother's crumpled emotions; later her words are pressed flat like felt until they dissolve (lines 16 to 18).",
      lineRef: 3,
    },
    {
      device: 'Metaphor - textile imagery',
      example: 'tucks, darts, pleats',
      effect:
        "The sewing terminology reflects Weir's background as a textile designer and becomes a metaphor for the mother's attempt to hold herself together: as she walks, her stomach folds itself into them (lines 27 to 28). They are techniques for shaping fabric - the mother is trying to shape and contain her unravelling grief, but the list's accumulation suggests the effort is overwhelming.",
      lineRef: 29,
    },
    {
      device: 'Symbolism - poppies',
      example: '[Stanza 1: the poppies laid on soldiers’ graves before Remembrance has even come]',
      effect:
        "The poppy operates on multiple symbolic levels: it represents remembrance of the war dead, the blood of sacrifice, the fragility of life (petals fall easily), and the mother's own bleeding grief. Laying them on each soldier’s grave before Remembrance has even arrived reinforces the association with death and anticipates her loss.",
      lineRef: 1,
    },
    {
      device: 'Domestic language',
      example: 'pinned',
      effect:
        "She pins the poppy onto his lapel (line 4), and later smooths his shirt collar and picks cat hairs off him: this domestic vocabulary pulls the poem away from the battlefield and into the home, reinforcing that this is a mother's perspective. The verb suggests both attachment and the sharp pain of a pin - love and hurt are inseparable - while the military word in the next line shows how war infiltrates everyday life.",
      lineRef: 3,
    },
    {
      device: 'Enjambment',
      example:
        '[Stanzas 2 to 3: the sentence about her flattened words runs on across the stanza break]',
      effect:
        "The sentence refuses to stop where the stanza does, so the reader is carried over the gap - mimicking the mother's emotional overflow. Enjambment throughout the poem, as at lines 5 to 6 and 10 to 11, creates a breathless, flowing quality that mirrors the uncontrollable stream of memory and grief.",
      lineRef: 17,
    },
    {
      device: 'Sensory detail - touch',
      example: 'graze',
      effect:
        "The mother wants to graze her nose against the end of her son's, as in the nose-rubbing game they played when he was small (lines 11 to 14), and holds back, as she stops herself from ruffling his stiff, gelled hair (lines 14 to 16). The lightest possible touch, held back, conveys a mother's love more powerfully than any abstract statement could.",
      lineRef: 11,
    },
    {
      device: 'Metaphor - the dove',
      example:
        '[Stanza 4: the dove tugging its way across the sky, pictured as a decorative stitch]',
      effect:
        "The dove, a symbol of peace and of the spirit, is free where the mother is not. Picturing it as a stitch against the sky returns to the textile imagery: even her hope is sewn into the fabric of her grief, and the image may suggest the son's soul, or the fragile thread that still connects them.",
      lineRef: 35,
    },
    {
      device: 'Caesura',
      example: '[Stanzas 2 and 3: full stops fall mid-line, as when he is gone in an instant]',
      effect:
        "Sentences that end part-way through a line (lines 11, 14, 16, 18 and 21) break the flow of the long, run-on sentences around them. The abrupt stops enact the suddenness of the son's departure and the mother's effort to hold herself together.",
      lineRef: 22,
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pop-1',
    question: 'Who is the speaker in Poppies?',
    type: 'multiple-choice',
    options: [
      'A soldier going to war',
      'A mother whose son has left for military service',
      'A teacher on Armistice Sunday',
      'A war photographer',
    ],
    correctIndex: 1,
    explanation:
      'The poem is told from the perspective of a mother who is saying goodbye to her son before he leaves, possibly for military service. It explores the personal, domestic grief of conflict.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'pop-2',
    question: 'What do the poppies symbolise in the poem?',
    type: 'multiple-choice',
    options: [
      'A type of flower the mother grows in her garden',
      'Remembrance of fallen soldiers and the connection between domestic life and war',
      "The son's favourite colour",
      'A decoration for Armistice Sunday celebrations',
    ],
    correctIndex: 1,
    explanation:
      "Poppies are the universal symbol of remembrance for fallen soldiers, originating from the fields of Flanders in WWI. Weir uses them to connect the mother's private grief to the public act of remembrance.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'pop-3',
    question: 'What type of imagery dominates the poem?',
    type: 'multiple-choice',
    options: [
      'Military and violent imagery',
      'Domestic and textile imagery - sewing, pins, fabric',
      'Industrial and urban imagery',
      'Religious imagery',
    ],
    correctIndex: 1,
    explanation:
      "Weir uses a sustained semantic field of textiles and sewing: the trim on his blazer (line 6), words pressed into felt (line 17), the folds her stomach makes (line 28) and the dove as a stitch (line 34). This domestic language reflects the mother's world and how she processes grief through familiar, tangible activities.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'pop-4',
    question:
      "What does the description of the poppy in line 5 suggest about the mother's emotional state?",
    type: 'multiple-choice',
    options: [
      'She is calm and composed',
      'Its suggestion of involuntary, convulsive movement shows grief beyond her control',
      'She is angry at her son',
      'She is decorating the house',
    ],
    correctIndex: 1,
    explanation:
      "The paper petals are described as if they were convulsing: involuntary, painful physical reactions, so the mother's grief shows itself in the body. Placing the colour after the noun, rather than before it, makes the red stand out, as blood would (see Key Quotes).",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pop-5',
    question: 'What does the bird the mother sets free in stanza 3 represent?',
    type: 'multiple-choice',
    options: [
      "The mother's pet bird escaping",
      'The mother letting her child go - an act that is both liberating and painful',
      'The son singing a song',
      'A reference to a specific war poem',
    ],
    correctIndex: 1,
    explanation:
      'The released songbird symbolises the mother releasing her child into the world (and possibly to war). It represents both freedom and loss - she must let go, even though it causes her pain.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pop-6',
    question:
      'How does Weir blur the line between sending a child to school and sending a soldier to war?',
    type: 'multiple-choice',
    options: [
      'She describes school uniform and military uniform separately',
      'Through domestic details such as fixing a poppy to his school blazer - the same maternal gestures apply to both',
      'She explicitly compares school and war',
      'She does not blur this line at all',
    ],
    correctIndex: 1,
    explanation:
      "The intimate maternal acts of fixing a poppy to his lapel, picking hairs off him and smoothing down his shirt collar (stanzas 1 and 2) could belong to a school morning or a soldier's departure. This ambiguity powerfully blurs the boundary between childhood and warfare.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'pop-7',
    question: 'What perspective on conflict does Poppies offer that is unusual in the anthology?',
    type: 'multiple-choice',
    options: [
      "A soldier's perspective in the trenches",
      "A mother's personal, domestic perspective on the impact of war at home",
      "A politician's view of war strategy",
      "A journalist's objective report",
    ],
    correctIndex: 1,
    explanation:
      "Poppies is unusual in the anthology because it shows conflict from a civilian perspective - specifically a mother's. It explores how war affects those left behind, not the soldiers themselves.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'pop-8',
    question: 'How does enjambment function in Poppies?',
    type: 'multiple-choice',
    options: [
      'It creates neat, contained thoughts',
      "It enacts the mother's loss of emotional control - her feelings spill across line and stanza boundaries",
      'It makes the poem easier to read aloud',
      'It has no particular purpose',
    ],
    correctIndex: 1,
    explanation:
      "The extensive enjambment - including across stanza breaks - mirrors the mother's inability to contain her emotions. Grief overflows all boundaries, just as the lines overflow their margins.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'pop-9',
    question:
      "What is the effect of the mother's wish, in lines 11 to 14, to rub noses with her son as she did when he was little?",
    type: 'multiple-choice',
    options: [
      'It shows the mother is angry',
      'It creates an intensely physical, intimate memory - the mother craves the specific sensory experience of closeness',
      'It shows her son is injured',
      'It is a metaphor for time passing',
    ],
    correctIndex: 1,
    explanation:
      'This deeply intimate sensory detail conveys the visceral, physical nature of maternal love and loss. The mother does not miss her son abstractly - she longs for the specific touch of his presence, and holds back because he is no longer a small child.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'pop-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Poppies for exploring the personal impact of conflict?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'Kamikaze by Beatrice Garland',
      'Storm on the Island by Heaney',
      'The Charge of the Light Brigade by Tennyson',
    ],
    correctIndex: 1,
    explanation:
      "Both Poppies and Kamikaze explore the family's perspective on conflict - a mother in Poppies, a daughter in Kamikaze. Both show the personal, domestic costs of war through female voices and memory.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "Poppies explores a mother's grief, the personal cost of conflict, memory and loss, and the blurred boundary between childhood and war.",
    keyPoints: [
      "Maternal grief - the poem centres on the mother's experience, not the soldier's",
      'Memory and loss - the mother replays memories obsessively',
      'Domestic vs military - the boundary between sending a child to school and to war is blurred',
      'Letting go - the songbird metaphor represents painful release',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Weir uses a sustained semantic field of textiles and domestic imagery to process grief through familiar, tangible objects.',
    keyPoints: [
      'Textile imagery: the blazer trim (line 6), felt (line 17), the sewing folds of line 28',
      'The convulsing paper poppy (line 5) - involuntary, convulsive grief',
      'The caged bird set free (line 24) - metaphor for letting a child go',
      'Sensory detail: the nose-rubbing she longs for and resists (lines 11 to 14)',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Free verse with extensive enjambment across stanza breaks, enacting the mother's loss of emotional control as grief overflows all boundaries.",
    keyPoints: [
      'Free verse - no regular rhyme or metre, reflecting the unstructured nature of grief',
      'Enjambment across stanza breaks - emotions overflow all boundaries',
      'First person, addressing the absent son directly - creates intimacy between mother and son',
      'Non-linear time - the poem moves between past and present as memory intrudes',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Weir present the impact of conflict on those left behind in Poppies?',
  'Compare how loss is presented in Poppies and one other poem from the anthology.',
  "How does Weir use language and structure to convey a mother's grief?",
]

/* ── Comparison poems ──────────────────────────────────────────── */

interface ComparisonPoem {
  title: string
  poet: string
  href: string
  similarities: string[]
  differences: string[]
}

const comparisons: ComparisonPoem[] = [
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/revision/poetry/power-and-conflict/war-photographer',
    similarities: [
      'Both explore the emotional aftermath of war on those who are not soldiers',
      'Both use domestic settings (the darkroom, the home) as spaces where the impact of conflict is processed',
      'Both poems feature a central figure who is isolated in their grief or trauma',
    ],
    differences: [
      'War Photographer uses a detached, controlled form (regular stanzas, near-rhyme) whereas Poppies uses free verse that mirrors emotional overflow',
      'Duffy focuses on a professional observer; Weir focuses on a mother - the relationship to the conflict is fundamentally different',
      'War Photographer critiques public indifference; Poppies is entirely personal and private in its grief',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    href: '/revision/poetry/power-and-conflict/kamikaze',
    similarities: [
      'Both poems explore the impact of war on family relationships',
      'Both are told from the perspective of someone left behind - a mother in Poppies, a daughter in Kamikaze',
      'Both use nature imagery (birds, the sea) as a counterpoint to military violence',
    ],
    differences: [
      'Kamikaze explores shame and social rejection; Poppies explores grief and longing',
      'Kamikaze uses a third-person narrative frame; Poppies is entirely first-person, giving more direct emotional access',
      'In Kamikaze, the soldier returns and is punished; in Poppies, the son leaves and may not return at all',
    ],
  },
  {
    title: 'The Émigrée',
    poet: 'Carol Rumens',
    href: '/revision/poetry/power-and-conflict/the-emigree',
    similarities: [
      'Both poems are dominated by memory and longing for someone or something lost',
      'Both use sensory, tactile imagery to make the absent feel present',
      'Both feature a female speaker processing loss through personal, emotional language',
    ],
    differences: [
      'The Émigrée focuses on loss of a homeland; Poppies focuses on loss of a child to war',
      'The Émigrée maintains an idealised, sunlit memory; Poppies allows memory to fragment and collapse',
      'The Émigrée is more defiant and resistant; Poppies is more vulnerable and grief-stricken',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────── */

const themes = [
  { label: 'Loss and absence', color: 'bg-red-500/15 text-red-400 border-red-500/30' },
  { label: 'Memory', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { label: 'Family and motherhood', color: 'bg-pink-500/15 text-pink-400 border-pink-500/30' },
  { label: 'War and conflict', color: 'bg-orange-500/15 text-clay-600 border-orange-500/30' },
  { label: 'Grief', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { label: 'Domestic vs military', color: 'bg-amber-500/15 text-clay-600 border-amber-500/30' },
  {
    label: 'Nature and freedom',
    color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  { label: 'Identity and childhood', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
]

/* ── Page component ────────────────────────────────────────────── */

export default function PoppiesStudyPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <CourseJsonLd
        name="Poppies by Jane Weir - Analysis & Annotations"
        description="Line-by-line analysis of Poppies with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Back link ──────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Power &amp; Conflict Anthology
        </Button>
      </div>

      {/* ── Page header ───────────────────────────────────────── */}
      <header className="space-y-3">
        <h1 className="text-heading-lg text-foreground">Poppies</h1>
        <p className="text-lg text-muted-foreground">
          Jane Weir (2009) — AQA Power &amp; Conflict Anthology
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
          AQA
        </Badge>
      </header>

      {/* ── Theme tokens ──────────────────────────────────────── */}
      <section aria-labelledby="themes-heading">
        <h2 id="themes-heading" className="text-heading-sm text-foreground mb-3">
          Key Themes
        </h2>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Interactive poem viewer ───────────────────────────── */}
      <StudyTools
        textName="Poppies"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Poppies"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={poppiesData} />

      {/* ── Comparison poems ──────────────────────────────────── */}
      <section aria-labelledby="comparisons-heading" className="space-y-5">
        <h2 id="comparisons-heading" className="text-heading-sm text-foreground">
          Compare With
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-5 space-y-4">
              <div>
                <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.poet}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                  Similarities
                </h4>
                <ul className="space-y-1">
                  {c.similarities.map((s, i) => (
                    <li key={i} className="text-sm text-card-foreground flex gap-2">
                      <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-clay-600 mb-1.5">
                  Differences
                </h4>
                <ul className="space-y-1">
                  {c.differences.map((d, i) => (
                    <li key={i} className="text-sm text-card-foreground flex gap-2">
                      <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/60" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" size="sm" render={<Link href={c.href} />}>
                Study {c.title}
                <svg
                  className="size-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Back to anthology ─────────────────────────────────── */}
      <div className="border-t border-border pt-8">
        <Button variant="outline" render={<Link href="/revision/poetry/power-and-conflict" />}>
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Power &amp; Conflict Anthology
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> &copy; Templar Poetry on behalf of Jane Weir (b. 1963). The
        poem is paraphrased line by line here, not printed. Quotations from &ldquo;Poppies&rdquo;
        are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation). The
        full text is printed in the AQA Power &amp; Conflict anthology.
      </p>
    </div>
  )
}
