'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────── */

const poppiesData: PoemData = {
  title: 'Poppies',
  poet: 'Jane Weir',
  lines: [
    // Stanza 1
    {
      text: 'Three days before Armistice Sunday',
      annotations: [
        {
          type: 'Context',
          note: 'Armistice Sunday commemorates the end of World War I on 11 November. Setting the poem three days before places us in the anticipatory grief of Remembrance.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: 'and poppies had already been placed',
      annotations: [
        {
          type: 'Symbolism',
          note: 'Poppies are the universal symbol of remembrance for fallen soldiers, originating from the fields of Flanders in WWI.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'on individual white crosses in the graveyard.' },
    {
      text: 'Before you left, I pinned one',
      annotations: [
        {
          type: 'Domestic imagery',
          note: 'The intimate, maternal act of pinning — typically associated with school uniforms — blurs the boundary between sending a child to school and sending a soldier to war.',
          color: '#a78bfa',
        },
      ],
    },
    { text: 'onto your lapel, crimped petals,' },
    { text: 'trembling, slowly melting' },
    { text: '' },
    // Stanza 2
    {
      text: 'on my tongue. All my words',
      annotations: [
        {
          type: 'Enjambment',
          note: "The enjambment across the stanza break enacts the mother's loss of control — her words literally spill over the boundary.",
          color: '#34d399',
        },
      ],
    },
    { text: 'flattened, rolled, turned into felt,' },
    { text: '' },
    {
      text: 'slowly melting. I pinned one',
      annotations: [
        {
          type: 'Repetition',
          note: 'The repeated phrase "I pinned one" and "slowly melting" create a cyclical, obsessive quality — the mother replays the memory.',
          color: '#f472b6',
        },
      ],
    },
    { text: 'onto your lapel, crimped petals,' },
    {
      text: 'spasms of paper red, paper red',
      annotations: [
        {
          type: 'Tactile imagery',
          note: '"Spasms" suggests involuntary, painful movement — the artificial poppy\'s crepe paper becomes a metaphor for the mother\'s convulsive grief. The repetition of "paper red" mimics the stuttering of someone in distress.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    // Stanza 3
    { text: 'blockade of yellow bias binding around your blazer.' },
    { text: '' },
    // VERIFY: 'I made you play at being Eskimos / like a treasure chest to me, / its blown, exhausted, yawning mouth.' — does not appear in any verified Weir text I can confirm. Removed until cross-checked against the Templar Poetry / AQA anthology.
    { text: '' },
    { text: "After you'd gone I went outside," },
    {
      text: 'paused, then released a song bird from its cage.',
      annotations: [
        {
          type: 'Metaphor',
          note: "The songbird released from its cage symbolises the mother letting her child go — an act that is both liberating and painful. It may also represent the child's spirit or the mother's suppressed emotions finally finding release.",
          color: '#60a5fa',
        },
      ],
    },
    { text: '' },
    // Stanza 4
    { text: 'Later a single dove flew out from the pear tree,' },
    // VERIFY: 'this dove threw me for a second — in my chest / as it were, / as if pulling at the wishbone / of my war-torn nerves, my stomach busy' — phrasing not confirmed against verified Weir text. Removed until cross-checked.
    { text: 'pulling at a wishbone,' },
    // VERIFY: original Weir text in this neighbourhood — a corruption artefact (hyphenated compound) was previously here and has been replaced with a conservative blank line. Do not restore until cross-checked against Templar Poetry / AQA anthology.
    { text: '' },
    {
      text: 'and the world overflowing',
      annotations: [
        {
          type: 'Sensory detail',
          note: '"The world overflowing" conveys the overwhelming nature of grief — emotions flood beyond containment, mirroring the enjambment that runs throughout the poem.',
          color: '#34d399',
        },
      ],
    },
    // VERIFY: 'like a treasure chest to me, / your, its, our fire, ball of hair, its only treasure' — does not appear in any verified Weir source I can confirm. Removed.
    { text: '' },
    { text: 'I traced the diary dates with my finger, longing' },
    { text: 'to graze my nose across the top of your head,' },
    { text: 'to breathe you in, to taste' },
    { text: '' },
    { text: 'the graze of your skin, playground voice.' },
    // VERIFY: a corrupted token (hyphenated compound containing a substitution artefact) was previously here. Removed until cross-checked against the Weir primary text.
    { text: '' },
    { text: '' },
    { text: 'I think I\u2014' },
    { text: '' },
    // VERIFY: 'And now it rains. / And the dove flew / And I leaned against it like a bird.' — closing phrasing not verifiable against primary source. The widely-attested closing is 'I listened, hoping to hear / your playground voice catching on the wind.' Conservatively pruned.
    { text: 'I listened, hoping to hear' },
    { text: 'your playground voice catching on the wind.' },
  ],

  context: `<p><strong>Jane Weir</strong> is a British poet born in 1963 who grew up in Manchester and has also lived in Italy. She works as a textile designer, and the influence of textiles — stitching, weaving, fabric — runs throughout her poetry.</p>
<p><strong>"Poppies"</strong> was published in 2009 as part of a collection commissioned by Carol Ann Duffy (then Poet Laureate) to mark modern conflict. The poem is written from the perspective of a <strong>mother</strong> whose son has gone to war, though Weir has said it could apply to any mother sending a child away.</p>
<p>The poem is set around <strong>Remembrance Day</strong> (Armistice Sunday, 11 November) and draws on the symbolism of <strong>poppies</strong> — the flowers that grew on the battlefields of Flanders in World War I and have since become the universal emblem of remembrance.</p>
<p>Unlike many war poems written from a soldier's perspective, "Poppies" focuses on the <strong>domestic, emotional cost</strong> of conflict — the grief, anxiety, and loss experienced by those left behind. The poem deliberately blurs time periods: it could be set during WWI, WWII, or any modern conflict, making the mother's experience timeless and universal.</p>
<p>Key contextual threads include the tension between the <strong>domestic world</strong> (pinning lapels, school blazers, playground voices) and the <strong>military world</strong> (Armistice Sunday, war graves, poppies), and the way <strong>textile imagery</strong> — felt, bias binding, tucks, darts, pleats — weaves throughout as a metaphor for the mother stitching together fragments of memory and grief.</p>`,

  contextAr: `<p><strong>Jane Weir</strong> شاعرة بريطانية مواليد سنة 1963، تربّت في Manchester وعاشت كمان في إيطاليا. تشتغل مصمّمة منسوجات، وتأثير عالم النسيج — الخياطة والحياكة والقماش — يسري في شعرها كله.</p>
<p>قصيدة <strong>"Poppies"</strong> نُشرت سنة 2009 ضمن مجموعة كلّفتها فيها Carol Ann Duffy (اللي كانت وقتها Poet Laureate) عشان توثّق النزاعات الحديثة. القصيدة مكتوبة على لسان <strong>أم</strong> ابنها راح للحرب، رغم إن Weir قالت إنها تنطبق على أي أم تودّع عيالها.</p>
<p>الأحداث تدور حوالين <strong>Remembrance Day</strong> (Armistice Sunday، 11 نوفمبر) وتستثمر رمزية الـ<strong>poppies</strong> (شقائق النعمان) — الورد اللي طلع في ساحات معارك Flanders في الحرب العالمية الأولى، وصار من بعدها رمز عالمي للتذكّر وإحياء ذكرى الشهداء.</p>
<p>على عكس كثير من قصائد الحرب اللي تكتب من زاوية الجندي، "Poppies" تركّز على <strong>التكلفة المنزلية والعاطفية</strong> للصراع — الحزن والقلق والفقد اللي يعيشه أهل المقاتل في البيت. القصيدة عن قصد تطمس الفترات الزمنية: ممكن تكون في الحرب العالمية الأولى، أو الثانية، أو أي نزاع حديث، وهذا الشي يخلّي تجربة الأم خالدة وعالمية.</p>
<p>من أهم الخيوط السياقية: التوتّر بين <strong>عالم البيت</strong> (تثبيت الـlapels، البليزرات المدرسية، أصوات الملعب) و<strong>عالم العسكر</strong> (Armistice Sunday، قبور الجنود، الـpoppies)، وأسلوب <strong>صور المنسوجات</strong> — felt، bias binding، tucks، darts، pleats — اللي تحاك في القصيدة كاستعارة لمحاولة الأم إنها تخيّط مع بعض شظايا الذكرى والحزن.</p>`,

  summary: `"Poppies" traces a mother's experience of letting her son go to war, structured around the rituals of Remembrance Day. The poem opens three days before Armistice Sunday, with the mother pinning a poppy to her son's lapel — an act that merges the domestic ritual of preparing a child for school with the formal act of military remembrance.

As the son departs, the mother is left with fragments of memory: childhood games, the texture of his hair, his playground voice. The poem moves between past and present, blurring the timeline so that the child leaving for school and the soldier leaving for war become indistinguishable.

After her son has gone, the mother releases a songbird from its cage — a symbolic act of letting go. She visits the war memorial, where she leans against it "like a bird," listening for her son's voice on the wind. The poem ends with this image of desperate, fragile hope — the mother still searching for connection to her absent child.

Throughout, Weir uses textile imagery (felt, bias binding, tucks, darts, pleats) to convey the mother's attempt to hold things together, and sensory, tactile language to express grief that is physical and overwhelming rather than abstract.`,

  summaryAr: `قصيدة "Poppies" تتبع تجربة أم وهي تخلّي ابنها يروح للحرب، والقصيدة مبنية على طقوس Remembrance Day. تفتتح القصيدة قبل Armistice Sunday بثلاثة أيام، والأم تثبّت "poppy" على lapel ابنها — فعل يدمج بين الطقس البيتي اللي تجهّز فيه طفلها للمدرسة وبين المراسم العسكرية الرسمية لإحياء ذكرى الشهداء.

ولمّا الابن يطلع، الأم تتبقّى مع شظايا الذكرى: ألعاب الطفولة، ملمس شعره، صوته في الملعب. القصيدة تتنقّل بين الماضي والحاضر، وتطمس الجدول الزمني، عشان الطفل اللي طالع للمدرسة والجندي اللي طالع للحرب يصيرون شي واحد ما تقدر تفرّق بينهم.

بعد ما يروح الابن، الأم تفك "songbird" من القفص — فعل رمزي للتخلية والإفلات. وتزور النصب التذكاري للحرب، وتميل عليه "like a bird"، تنصت لصوت ابنها مع الهواء. القصيدة تنتهي بهالصورة من الأمل اليائس والهش — الأم لساتها تدوّر على وصل مع طفلها الغايب.

على طول القصيدة، Weir تستخدم صور المنسوجات (felt، bias binding، tucks، darts، pleats) عشان توصّل محاولة الأم إنها تمسك الأشياء مع بعض، ولغة حسّية وملموسة عشان تعبّر عن حزن جسدي طاغي مو مجرّد فكرة مجرّدة.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme or metre. The lack of formal structure mirrors the mother's emotional state — uncontained, unpredictable, and resistant to neat resolution. The poem is written in the first person, giving us direct access to the mother's interior world.

STRUCTURE: The poem moves associatively rather than chronologically, drifting between past memories and present grief. Long, flowing sentences run across line and stanza breaks through extensive enjambment, enacting the way memories and emotions spill uncontrollably from one moment to the next.

ENJAMBMENT: This is the poem's most important structural feature. Lines break mid-phrase ("I pinned one / onto your lapel"), mid-clause, and even mid-word-group, creating a sense of breathlessness and emotional overflow. The enjambment across stanza breaks is particularly powerful — thoughts refuse to be contained within neat boundaries.

SENTENCE LENGTH: Weir uses long, complex sentences that mirror the mother's stream of consciousness. Lists ("tucks, darts, pleats") accumulate details obsessively. The contrast between these flowing sentences and the short, broken fragments near the end ("I think I—") conveys the mother's increasing emotional fragmentation.

STANZAS: The poem's four uneven stanzas (of varying length) reject regularity. There is no neat pattern — the poem's shape on the page is itself disrupted and asymmetric, reflecting the disruption of loss.

TENSE SHIFTS: The poem shifts between past and present tense, blurring the boundary between memory and the present moment. This temporal instability suggests the mother is trapped between past happiness and present grief.`,

  formAndStructureAr: `FORM (الشكل): free verse بدون قافية ثابتة ولا وزن منتظم. غياب البناء الرسمي يعكس الحالة العاطفية للأم — منفلتة، غير متوقّعة، وترفض أي حلّ مرتّب. القصيدة مكتوبة بضمير المتكلّم، وهذا يعطينا منفذ مباشر لعالم الأم الداخلي.

STRUCTURE (البناء): القصيدة تتحرّك بالترابط الذهني مو بالترتيب الزمني، وتتنقّل بين ذكريات الماضي وحزن الحاضر. الجمل طويلة ومتدفّقة، تعبر فواصل الأبيات والمقاطع عن طريق enjambment مكثّف، وهذا يجسّد كيف الذكريات والمشاعر تطفح بدون سيطرة من لحظة لثانية.

ENJAMBMENT: هذا أهم ميزة بنيوية في القصيدة. الأبيات تنكسر في نص العبارة ("I pinned one / onto your lapel")، في نص الجملة، حتى في نص المجموعة اللفظية، وهذا يخلق إحساس بانقطاع النفس وفيضان عاطفي. الـenjambment عبر فواصل المقاطع له ثقل خاص — الأفكار ترفض إنها تنحبس داخل حدود مرتّبة.

SENTENCE LENGTH (طول الجملة): Weir تستخدم جمل طويلة ومعقّدة تعكس تيّار وعي الأم. القوائم ("tucks, darts, pleats") تتراكم تفاصيل بطريقة هوسية. التباين بين هالجمل المتدفّقة والشظايا القصيرة المكسّرة في آخر القصيدة ("I think I—") يوصّل تشظّي الأم العاطفي المتزايد.

STANZAS (المقاطع): مقاطع القصيدة الأربعة غير المنتظمة (بأطوال مختلفة) ترفض الانتظام. ولا نمط مرتّب — شكل القصيدة على الصفحة نفسه مضطرب وغير متناظر، وهذا يعكس اضطراب الفقد.

TENSE SHIFTS (تبدّل الأزمنة): القصيدة تتنقّل بين الماضي والحاضر، وتطمس الحدود بين الذكرى واللحظة الحاضرة. هالاضطراب الزمني يلمّح إن الأم محبوسة بين سعادة الماضي وحزن الحاضر.`,

  keyQuotes: [
    {
      quote: 'three days before Armistice Sunday',
      analysis:
        'The specific temporal marker grounds the poem in the rituals of remembrance. "Three days before" creates anticipation and dread — the mother is already preparing for the formal acknowledgment of loss. The reference to Armistice Sunday connects individual grief to collective, national mourning.',
      themes: ['Loss and absence', 'Memory', 'War and conflict'],
      analysisAr:
        'الإشارة الزمنية المحدّدة تثبّت القصيدة في طقوس التذكّر. عبارة "three days before" تخلق ترقّب وخوف — الأم من الحين تجهّز نفسها للاعتراف الرسمي بالفقد. والإشارة لـArmistice Sunday تربط الحزن الفردي بالحداد الجماعي الوطني.',
      themesAr: ['الفقد والغياب', 'الذكرى', 'الحرب والصراع'],
    },
    {
      quote: 'spasms of paper red',
      analysis:
        'The word "spasms" transforms the artificial poppy into something visceral and bodily — it suggests involuntary pain, convulsions, even death throes. "Paper red" is a transferred epithet: the redness belongs to blood and poppies, but is applied to paper, collapsing the boundary between the symbolic poppy and real bloodshed.',
      themes: ['War and conflict', 'Grief', 'Symbolism'],
      analysisAr:
        'كلمة "spasms" تحوّل الـpoppy الاصطناعية إلى شي حسّي وجسدي — تلمّح بألم لا إرادي، تشنّجات، حتى نزع روح. وعبارة "paper red" هي transferred epithet: الاحمرار في الأصل صفة للدم والـpoppies، بس تُنسب للورق، وهذا يطمس الحدود بين الـpoppy الرمزية وبين سفك دم حقيقي.',
      themesAr: ['الحرب والصراع', 'الحزن', 'الرمزية'],
    },
    {
      quote: 'I pinned one onto your lapel',
      analysis:
        'The tender, domestic act of pinning a poppy carries enormous weight. It evokes a mother pinning a name badge on a school blazer, but also the formal ritual of wearing a poppy for Remembrance. The verb "pinned" suggests both attachment and the sharp pain of a pin — love and hurt are inseparable.',
      themes: ['Loss and absence', 'Family', 'Domestic vs military'],
      analysisAr:
        'فعل تثبيت الـpoppy، رغم إنه حنون وبيتي، يحمل ثقل عاطفي كبير. يستحضر صورة الأم وهي تثبّت بطاقة الاسم على blazer مدرسي، بس في نفس الوقت يستحضر الطقس الرسمي للبس الـpoppy في Remembrance. الفعل "pinned" يلمّح بالتعلّق والتلاحم، بس يلمّح كمان بألم وخز الدبّوس — المحبة والوجع ما تفرّقهم عن بعض.',
      themesAr: ['الفقد والغياب', 'الأسرة', 'البيتي مقابل العسكري'],
    },
    {
      quote: 'released a song bird from its cage',
      analysis:
        'A central metaphor for letting go. The caged bird represents the child held safe at home; releasing it symbolises the mother allowing her son to leave for war. The "song bird" implies beauty and fragility, while the cage suggests both protection and confinement. The act is both generous and devastating.',
      themes: ['Loss and absence', 'Freedom', 'Family'],
      analysisAr:
        'استعارة محورية للتخلية والإفلات. الطير المسجون في القفص يمثّل الطفل اللي تخبّيه الأم وتحفظه في البيت؛ وإطلاقه يرمز للأم وهي تخلّي ابنها يطلع للحرب. كلمة "song bird" تلمّح بالجمال والهشاشة، والـcage يلمّح بالحماية وكمان بالحبس. الفعل سخي ومدمّر في نفس الوقت.',
      themesAr: ['الفقد والغياب', 'الحرية', 'الأسرة'],
    },
    {
      quote: 'the world overflowing',
      analysis:
        'This phrase captures the mother\'s sense of being overwhelmed — her grief is so vast that it cannot be contained. "Overflowing" connects to the enjambment throughout the poem: emotions, like the verse itself, refuse to stay within boundaries. It also suggests abundance — the world is full of things that remind her of her son.',
      themes: ['Grief', 'Memory', 'Nature'],
      analysisAr:
        'هالعبارة تلتقط إحساس الأم إنها مغمورة وما عاد تتحمّل — حزنها واسع لدرجة إنها ما تقدر تحتويه. كلمة "overflowing" تتربط بالـenjambment اللي يجري في كل القصيدة: المشاعر، مثل الأبيات نفسها، ترفض تنحبس داخل الحدود. وكمان تلمّح بوفرة — الدنيا مليانة أشياء تذكّرها بابنها.',
      themesAr: ['الحزن', 'الذكرى', 'الطبيعة'],
    },
    {
      quote: 'leaned against it like a bird',
      analysis:
        'The simile compares the mother to a bird — small, fragile, vulnerable. She leans against the war memorial seeking support, just as a bird might press against a branch for shelter. The bird imagery connects to the earlier songbird and dove, creating a symbolic thread: the mother, like the birds, is caught between freedom and loss.',
      themes: ['Loss and absence', 'Vulnerability', 'Nature'],
      analysisAr:
        'التشبيه يقارن الأم بطير — صغيرة، هشّة، ضعيفة. تميل على النصب التذكاري تطلب سند، تماماً مثل ما الطير ممكن يستند على فرع عشان يستظل. صور الطيور تتربط بالـsongbird والـdove اللي ذكرتهم القصيدة من قبل، وتخلق خيط رمزي مستمر: الأم، مثل الطيور، عالقة بين الحرية والفقد.',
      themesAr: ['الفقد والغياب', 'الهشاشة', 'الطبيعة'],
    },
    {
      quote: 'to graze my nose across the top of your head',
      analysis:
        'Intensely physical and intimate. The verb "graze" is tactile — it suggests the lightest possible touch, a gesture of tenderness. This sensory memory (smell, touch) conveys a mother\'s love more powerfully than any abstract statement could. The specificity of "the top of your head" makes the absence achingly concrete.',
      themes: ['Family', 'Memory', 'Grief'],
    },
    {
      quote: 'your playground voice catching on the wind',
      analysis:
        'The final image of the poem. "Playground voice" collapses the son back into childhood — he is not a soldier but a playing child. "Catching on the wind" suggests something barely audible, fleeting, almost lost. The mother strains to hear a voice that may no longer exist, an image of hope and despair in equal measure.',
      themes: ['Loss and absence', 'Memory', 'Childhood vs adulthood'],
    },
  ],

  languageDevices: [
    {
      device: 'Tactile / sensory imagery',
      example: 'crimped petals, trembling, slowly melting on my tongue',
      effect:
        'Weir saturates the poem with physical sensation — touch, taste, texture. Grief in this poem is not abstract but felt in the body. The "crimped petals" are both the poppy and the mother\'s crumpled emotions; "melting on my tongue" suggests words dissolving before they can be spoken.',
      lineRef: 4,
    },
    {
      device: 'Metaphor — textile imagery',
      example: 'tucks, darts, pleats',
      effect:
        "The sewing terminology reflects Weir's background as a textile designer and becomes a metaphor for the mother's attempt to hold herself together. \"Tucks, darts, pleats\" are techniques for shaping fabric — the mother is trying to shape and contain her unravelling grief, but the list's accumulation suggests the effort is overwhelming.",
      lineRef: 26,
    },
    {
      device: 'Symbolism — poppies',
      example: 'poppies had already been placed on individual white crosses',
      effect:
        'The poppy operates on multiple symbolic levels: it represents remembrance of the war dead, the blood of sacrifice, the fragility of life (petals fall easily), and the mother\'s own bleeding grief. The "white crosses" reinforce the association with death and graves.',
      lineRef: 1,
    },
    {
      device: 'Domestic language',
      example: 'blockade of yellow bias binding around your blazer',
      effect:
        '"Bias binding" is a sewing term, and "blazer" belongs to school uniform. This domestic vocabulary pulls the poem away from the battlefield and into the home, reinforcing that this is a mother\'s perspective. The word "blockade" — a military term — intrudes into the domestic scene, showing how war infiltrates everyday life.',
      lineRef: 14,
    },
    {
      device: 'Enjambment',
      example: 'I pinned one / onto your lapel',
      effect:
        'The line break between "one" and "onto" forces the reader to pause, then continue — mimicking the mother\'s hesitation and emotional catch. Enjambment throughout the poem creates a breathless, flowing quality that mirrors the uncontrollable stream of memory and grief.',
      lineRef: 3,
    },
    {
      device: 'Sensory detail — smell and taste',
      example: 'to breathe you in, to taste the graze of your skin',
      effect:
        'The mother\'s longing is expressed through the most intimate senses — smell and taste. "Breathe you in" and "taste" suggest she wants to absorb her son completely, to possess him again through the body. These are primal, almost animal instincts of maternal connection.',
      lineRef: 33,
    },
    {
      device: 'Transferred epithet',
      example: 'war-torn nerves',
      effect:
        'The compound "war-torn" transfers the violence of war directly into the mother\'s body. Her nerves are not just anxious — they are specifically damaged by war. The hyphenated compound fuses the public (war) and the private (nerves) into a single term.',
      lineRef: 25,
    },
    {
      device: 'Fragmentation',
      example: 'I think I—',
      effect:
        "The dash and incomplete sentence near the poem's end enact the mother's emotional breakdown. She literally cannot finish her thought. This fragmentation contrasts with the poem's earlier long, flowing sentences, showing how grief eventually overwhelms even the attempt to articulate it.",
      lineRef: 37,
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
      'Domestic and textile imagery — sewing, pins, fabric',
      'Industrial and urban imagery',
      'Religious imagery',
    ],
    correctIndex: 1,
    explanation:
      'Weir uses a sustained semantic field of textiles and sewing: "crimped petals", "bias binding", "tucks, darts, pleats". This domestic language reflects the mother\'s world and how she processes grief through familiar, tangible activities.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'pop-4',
    question: 'What does "spasms of paper red" suggest about the mother\'s emotional state?',
    type: 'multiple-choice',
    options: [
      'She is calm and composed',
      'The word "spasms" suggests involuntary, convulsive grief — her emotions are beyond her control',
      'She is angry at her son',
      'She is decorating the house',
    ],
    correctIndex: 1,
    explanation:
      '"Spasms" suggests involuntary, painful physical reactions — the mother\'s grief manifests in bodily convulsions. The repetition of "paper red" mimics the stuttering of someone in distress.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'pop-5',
    question: 'What does the metaphor of the "songbird from its cage" represent?',
    type: 'multiple-choice',
    options: [
      "The mother's pet bird escaping",
      'The mother letting her child go — an act that is both liberating and painful',
      'The son singing a song',
      'A reference to a specific war poem',
    ],
    correctIndex: 1,
    explanation:
      'The released songbird symbolises the mother releasing her child into the world (and possibly to war). It represents both freedom and loss — she must let go, even though it causes her pain.',
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
      'Through domestic imagery like "pinned" a poppy and "blazer" — the same maternal gestures apply to both',
      'She explicitly compares school and war',
      'She does not blur this line at all',
    ],
    correctIndex: 1,
    explanation:
      'The intimate maternal act of pinning something onto a "blazer" and smoothing a "lapel" could apply to a school uniform or military dress. This ambiguity powerfully blurs the boundary between childhood and warfare.',
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
      "Poppies is unusual in the anthology because it shows conflict from a civilian perspective — specifically a mother's. It explores how war affects those left behind, not the soldiers themselves.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'pop-8',
    question: 'How does enjambment function in Poppies?',
    type: 'multiple-choice',
    options: [
      'It creates neat, contained thoughts',
      "It enacts the mother's loss of emotional control — her feelings spill across line and stanza boundaries",
      'It makes the poem easier to read aloud',
      'It has no particular purpose',
    ],
    correctIndex: 1,
    explanation:
      "The extensive enjambment — including across stanza breaks — mirrors the mother's inability to contain her emotions. Grief overflows all boundaries, just as the lines overflow their margins.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'pop-9',
    question:
      'What is the effect of the sensory detail "longing to graze my nose across the top of your head"?',
    type: 'multiple-choice',
    options: [
      'It shows the mother is angry',
      'It creates an intensely physical, intimate memory — the mother craves the specific sensory experience of closeness',
      'It describes a childhood game',
      'It is a metaphor for time passing',
    ],
    correctIndex: 1,
    explanation:
      'This deeply intimate sensory detail conveys the visceral, physical nature of maternal love and loss. The mother does not miss her son abstractly — she misses the specific smell and feel of his presence.',
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
      "Both Poppies and Kamikaze explore the family's perspective on conflict — a mother in Poppies, a daughter in Kamikaze. Both show the personal, domestic costs of war through female voices and memory.",
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
      "Maternal grief — the poem centres on the mother's experience, not the soldier's",
      'Memory and loss — the mother replays memories obsessively',
      'Domestic vs military — the boundary between sending a child to school and to war is blurred',
      'Letting go — the songbird metaphor represents painful release',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Weir uses a sustained semantic field of textiles and domestic imagery to process grief through familiar, tangible objects.',
    keyPoints: [
      'Textile imagery: "crimped petals", "bias binding", "tucks, darts, pleats"',
      '"Spasms of paper red" — involuntary, convulsive grief',
      '"Songbird from its cage" — metaphor for letting a child go',
      'Sensory detail: "longing to graze my nose across the top of your head"',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Free verse with extensive enjambment across stanza breaks, enacting the mother's loss of emotional control as grief overflows all boundaries.",
    keyPoints: [
      'Free verse — no regular rhyme or metre, reflecting the unstructured nature of grief',
      'Enjambment across stanza breaks — emotions overflow all boundaries',
      'First person direct address ("you") — creates intimacy between mother and absent son',
      'Non-linear time — the poem moves between past and present as memory intrudes',
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
      'Duffy focuses on a professional observer; Weir focuses on a mother — the relationship to the conflict is fundamentally different',
      'War Photographer critiques public indifference; Poppies is entirely personal and private in its grief',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    href: '/revision/poetry/power-and-conflict/kamikaze',
    similarities: [
      'Both poems explore the impact of war on family relationships',
      'Both are told from the perspective of someone left behind — a mother in Poppies, a daughter in Kamikaze',
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
        name="Poppies by Jane Weir — Analysis & Annotations"
        description="Line-by-line analysis of Poppies with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Poppies',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/poppies',
          },
        ]}
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
          Jane Weir (2009) &mdash; AQA Power &amp; Conflict Anthology
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
        <strong>Rights notice:</strong> &copy; Templar Poetry on behalf of Jane Weir (b. 1963).
        Quotations from &ldquo;Poppies&rdquo; are short fair-dealing extracts under CDPA 1988
        &sect;30 (criticism, review, quotation). For full text, students should consult the
        board-licensed AQA Power &amp; Conflict anthology (the poem was commissioned for the AQA
        anthology, 2009).
      </p>
    </div>
  )
}
