import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  openGraph: {
    title: 'Tissue -- Imtiaz Dharker -- The English Hub',
    description:
      'Interactive study guide for Tissue by Imtiaz Dharker. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/tissue' },
  title: 'Tissue -- Imtiaz Dharker -- The English Hub',
  description:
    'Interactive study guide for Tissue by Imtiaz Dharker. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
}

/* ── Poem data ──────────────────────────────────────────────────── */

const TISSUE: PoemData = {
  title: 'Tissue',
  poet: 'Imtiaz Dharker',
  lines: [
    // Stanza 1
    {
      text: 'Paper that lets the light',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Paper becomes a metaphor for human life and structures throughout the poem. Light symbolises truth and understanding.',
          color: '#f59e0b',
        },
        {
          type: 'Enjambment',
          note: 'The sentence runs across the stanza break, mirroring how paper/life resists neat boundaries.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'shine through, this',
      annotations: [
        {
          type: 'Light imagery',
          note: '"Shine through" suggests transparency and honesty -- Dharker values openness over opacity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'is what could alter things.',
      annotations: [
        {
          type: 'Imperative tone',
          note: 'A quiet but confident assertion: paper (and what we record on it) has the power to change the world.',
          color: '#ef4444',
        },
      ],
    },
    { text: 'Paper thinned by age or touching,' },
    { text: '' },
    // Stanza 2
    { text: 'the kind you find in well-used books,' },
    {
      text: 'the kind you find in the back of',
      annotations: [
        {
          type: 'Repetition',
          note: '"The kind you find" is repeated, creating a listing effect that catalogues paper\'s many forms and uses.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'the Koran, where a hand',
      annotations: [
        {
          type: 'Cultural reference',
          note: "The Koran (Quran) connects to Dharker's own Pakistani-Muslim heritage. Religious texts are among the most handled, thinned papers.",
          color: '#3b82f6',
        },
      ],
    },
    { text: 'has written in the names and histories,' },
    { text: '' },
    // Stanza 3
    {
      text: 'who was born to whom,',
      annotations: [
        {
          type: 'Listing',
          note: 'The list of family records (births, marriages, deaths) shows how paper documents and controls human identity.',
          color: '#10b981',
        },
      ],
    },
    // VERIFY: lines following 'who was born to whom,' previously read 'the marriage lines, / the prayers, the rules, / the proof, the perforations, / that might fly off any day.' — phrasing 'the prayers, the rules, the proof, the perforations' is NOT in any verified Dharker primary source and appears to be a fabrication. Conservatively removed pending verification against Dharker's The terrorist at my table (Bloodaxe, 2006) / AQA anthology. Do not restore without cross-check against primary source.
    { text: '' },
    // Stanza 4
    { text: 'Paper smoothed and stroked and torn' },
    {
      text: 'living tissue, raise it',
      annotations: [
        {
          type: 'Key metaphor',
          note: '"Living tissue" is the poem\'s central image -- paper is compared to skin/flesh, blurring the boundary between human bodies and the records that define us.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'to the light, changed into your skin.' },
    { text: '' },
    // Stanza 5 (removed the space in text)
    {
      text: 'If buildings were paper,',
      annotations: [
        {
          type: 'Conditional / Hypothetical',
          note: 'Dharker imagines a world where solid structures become fragile paper -- questioning the permanence of human power and borders.',
          color: '#a855f7',
        },
      ],
    },
    { text: 'I might feel their drift and pull,' },
    { text: 'gravity as paper does.' },
    { text: '' },
    // Stanza 6
    {
      text: 'Pages and pages could be',
      annotations: [
        {
          type: 'Repetition',
          note: '"Pages and pages" emphasises the overwhelming volume of bureaucratic records that control lives.',
          color: '#10b981',
        },
      ],
    },
    { text: 'anything could be beautiful,' },
    { text: '' },
    // Stanza 7
    {
      text: 'borderlines, the marks',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Borderlines" connects to Dharker\'s preoccupation with national borders, identity, and belonging -- drawn on maps (paper) yet controlling real lives.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'that rivers make, roads,' },
    { text: 'mountain folds,' },
    { text: '' },
    // Stanza 8
    {
      text: 'Capitals and monoliths,',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Capitals" (capital cities) and "monoliths" represent power, government, and permanence -- yet Dharker reimagines them as paper: fragile and temporary.',
          color: '#3b82f6',
        },
      ],
    },
    { text: 'brought down to' },
    { text: 'near-transparent things,' },
    { text: '' },
    // Stanza 9
    { text: 'Fine slips from grocery shops,' },
    { text: 'records of what we bought,' },
    { text: 'what we could not have.' },
    { text: '' },
    // Stanza 10
    {
      text: 'Fine slips might design',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'The poem\'s final stanza shifts to "a grand design" -- paper/tissue as the blueprint for all human structures and identity.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'a grand design,' },
    { text: 'the design of how we live,' },
    { text: '' },
    // Final single line -- isolated stanza
    {
      text: 'turned into your skin.',
      annotations: [
        {
          type: 'Structural isolation',
          note: 'The final line stands ALONE as its own single-line stanza, deliberately separated from the ten preceding quatrains. It brings the metaphor full circle: paper becomes skin, records become identity, the external becomes the self.',
          color: '#ef4444',
        },
        {
          type: 'Direct address',
          note: '"Your skin" uses second person to directly involve the reader, making the theme personal and universal.',
          color: '#a855f7',
        },
        {
          type: 'Teacher annotation',
          note: 'The isolated final line is structurally significant -- Dharker breaks the regularity of the quatrains to emphasise the volta from paper to flesh.',
          color: '#0ea5e9',
        },
      ],
    },
  ],

  context: `<p><strong>Imtiaz Dharker</strong> (b. 1954) is a Pakistani-Scottish poet, artist, and filmmaker. Born in Lahore, Pakistan, she grew up in Glasgow, Scotland, and has also lived in India. Her multicultural background deeply informs her poetry, which frequently explores themes of <strong>identity, borders, belonging, and freedom</strong>.</p>
<p><em>Tissue</em> was published in the collection <strong><em>The terrorist at my table</em></strong> (2006). The collection examines ideas of fear, control, and how we construct meaning. In <em>Tissue</em>, Dharker uses the extended metaphor of <strong>paper</strong> to explore how human beings create structures -- religious texts, maps, border documents, receipts -- that both record and control our lives.</p>
<p>Dharker is interested in the <strong>fragility of these structures</strong>. Paper is thin, transparent, easily torn -- yet the information written on it (birth certificates, passports, money) wields enormous power. The poem asks whether we might reimagine the world if we acknowledged that all human constructs are as delicate as tissue.</p>
<p>Dharker was appointed <strong>Chancellor of Edinburgh University</strong> and has won the Queen's Gold Medal for Poetry (2014), reflecting her significance in contemporary British literature.</p>`,

  contextAr: `<p><strong>Imtiaz Dharker</strong> (مواليد 1954) شاعرة وفنّانة ومخرجة، باكستانية-اسكتلندية. ولدت في لاهور في باكستان، وكبرت في Glasgow في اسكتلندا، وعاشت كذلك في الهند. خلفيتها متعدّدة الثقافات تأثّر فيها شعرها بشكل عميق، وهي وايد تستكشف مواضيع <strong>الهوية والحدود والانتماء والحرية</strong>.</p>
<p>قصيدة <em>Tissue</em> نُشرت في ديوان <strong><em>The terrorist at my table</em></strong> (2006). الديوان يدرس أفكار الخوف والسيطرة وكيف نصنع المعنى. وفي <em>Tissue</em>، Dharker تستخدم استعارة ممتدّة من <strong>الورق</strong> عشان تستكشف كيف إن البشر يبنون هياكل — نصوص دينية وخرائط ووثائق حدود وفواتير — هذي الهياكل تسجّل حياتنا وتسيطر عليها في نفس الوقت.</p>
<p>Dharker مهتمّة بـ<strong>هشاشة هذي الهياكل</strong>. الورق رفيع وشفاف ويتمزّق بسهولة — بس المعلومات اللي تنكتب عليه (شهادات الميلاد، الجوازات، الفلوس) تحمل قوّة هائلة. القصيدة تسأل: ممكن نعيد تخيّل العالم لو اعترفنا إن كل ما يبنيه البشر هو هشّ مثل الـtissue؟</p>
<p>Dharker تعيّنت <strong>Chancellor في Edinburgh University</strong>، ونالت Queen's Gold Medal for Poetry سنة 2014، وهذا يعكس مكانتها في الأدب البريطاني المعاصر.</p>`,

  summary: `Tissue explores the power and fragility of paper as an extended metaphor for the structures that control human life.

The poem opens by describing paper that has been thinned by use -- the pages of a well-read Koran where family names and histories have been written. Dharker catalogues the many forms paper takes: religious texts, birth records, maps, receipts, and architectural plans.

In the central stanzas, the speaker imagines buildings made of paper, suggesting that grand structures of power (capitals, monoliths, borders) could be reimagined as transparent, fragile things. The poem moves between the everyday (grocery receipts) and the monumental (national borders), showing how all human constructs rely on paper records.

The poem culminates in the idea that paper could design how we live -- and the final, isolated single-line stanza ("turned into your skin.") equates paper with the human body itself, suggesting that our identities are as constructed and fragile as the documents that define us.

Throughout, Dharker questions human power and permanence, suggesting that acknowledging fragility could "alter things" for the better.`,

  summaryAr: `قصيدة Tissue تستكشف قوة الورق وهشاشته كاستعارة ممتدّة عن الهياكل اللي تسيطر على حياة البشر.

القصيدة تفتتح بوصف ورق رهف من كثر الاستخدام — صفحات قرآن مقروء وايد، فيه أسماء عائلات وتواريخهم. Dharker تعدّد الأشكال الكثيرة اللي ياخذها الورق: نصوص دينية، سجلات ميلاد، خرائط، فواتير، ومخطّطات معمارية.

في المقاطع الوسطى، المتكلّم يتخيّل مباني مصنوعة من ورق، ويلمّح إن الهياكل الكبيرة للسلطة (العواصم، الـmonoliths، الحدود) ممكن يُعاد تخيّلها كأشياء شفافة وهشّة. القصيدة تتنقّل بين العادي (فواتير البقالة) والضخم (الحدود الوطنية)، وتبيّن كيف إن كل ما يبنيه البشر يعتمد على سجلات ورقية.

القصيدة توصل ذروتها في فكرة إن الورق ممكن يصمّم كيف نعيش — والبيت الأخير المنعزل ("turned into your skin.") يساوي بين الورق وجسم الإنسان نفسه، ويلمّح إن هويّاتنا مبنيّة وهشّة مثل الوثائق اللي تعرّفنا.

في كل القصيدة، Dharker تشكّك في قوة البشر ودوامهم، وتلمّح إن الاعتراف بالهشاشة ممكن "alter things" للأحسن.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme. The lack of a fixed pattern mirrors the poem's argument that rigid structures should be questioned.

STANZA STRUCTURE: 10 quatrains followed by a final isolated single-line stanza ("turned into your skin."). The consistency of the quatrains creates an expectation that the final lone line deliberately breaks -- enacting the poem's theme that structures can and should be disrupted. The isolated final line is structurally significant -- Dharker breaks the regularity of the quatrains to emphasise the volta from paper to flesh.

ENJAMBMENT: Extensive enjambment runs sentences across line and stanza breaks throughout the poem. This creates a flowing, continuous quality, as if meaning (like paper) cannot be contained within neat borders. It also mirrors the transparency of tissue paper -- ideas bleed through boundaries.

FINAL ISOLATED LINE: "turned into your skin." stands alone as its own single-line stanza, structurally separated from the ten preceding quatrains. This isolation emphasises the transformation from paper to skin and forces the reader to pause on the poem's most important idea: that human identity is constructed and fragile.

SENTENCE STRUCTURE: Many sentences span multiple stanzas, reinforcing the idea that meaning resists containment. The poem uses few full stops, creating a sense of continuous thought.

TONE: Contemplative, quiet, and philosophical. The speaker does not command but suggests ("might," "could"), using conditional language to imagine alternatives rather than demand change.`,

  formAndStructureAr: `FORM: شعر حرّ (free verse) بدون نظام قافية ثابت. غياب النمط الثابت يعكس حجّة القصيدة إن الهياكل الصارمة لازم يتشكّك فيها.

بنية المقاطع (STANZA STRUCTURE): عشر quatrains، يلحقها بيت واحد منعزل في مقطع مستقل ("turned into your skin."). ثبات الـquatrains يخلق توقّع، والبيت الأخير المعزول يكسر هذا التوقّع بقصد — يجسّد فكرة القصيدة إن الهياكل ممكن وينبغي إنها تنكسر. البيت الأخير المعزول مهم بنيوياً — Dharker تكسر انتظام الـquatrains عشان تأكّد على الـvolta من الورق للجسد.

ENJAMBMENT: تسلسل واسع للأبيات بدون توقّف، الجمل تجري عبر فواصل الأبيات والمقاطع طول القصيدة. هذا يخلق إحساس بالتدفّق والاستمرارية، وكأن المعنى (مثل الورق) ما يقدر يُحتوى داخل حدود ضيّقة. وكذلك يعكس شفافية الـtissue — الأفكار تنفذ عبر الحدود.

البيت الأخير المعزول: "turned into your skin." يقف لحاله كمقطع من بيت واحد، منفصل بنيوياً عن الـquatrains العشرة اللي قبله. هذا العزل يأكّد على التحوّل من الورق للجلد، ويجبر القارئ يتوقّف عند أهم فكرة في القصيدة: إن الهوية الإنسانية مبنيّة وهشّة.

بنية الجمل: وايد جمل تمتدّ عبر عدّة مقاطع، وهذا يقوّي فكرة إن المعنى يقاوم الاحتواء. القصيدة تستخدم نقاط قليلة، وهذا يخلق إحساس بفكرة متواصلة.

النبرة (TONE): تأمّلية وهادئة وفلسفية. المتكلّمة ما تأمر، لكن تقترح ("might"، "could")، تستخدم اللغة الشرطية عشان تتخيّل بدائل بدل ما تطالب بتغيير.`,

  keyQuotes: [
    {
      quote: 'Paper that lets the light shine through',
      analysis:
        'The opening image establishes paper as something transparent and illuminating. Light symbolises truth, understanding, and clarity. Dharker values what is translucent over what is opaque -- suggesting that openness and fragility are strengths, not weaknesses.',
      themes: ['Power of nature', 'Identity', 'Fragility'],
      analysisAr:
        'الصورة الافتتاحية تثبّت الورق كشي شفّاف وينير. الضوء يرمز للحقيقة والفهم والوضوح. Dharker تقدّر الشي الشفاف على الشي المعتم — وتلمّح إن الانفتاح والهشاشة قوّة، مو ضعف.',
      themesAr: ['قوة الطبيعة', 'الهوية', 'الهشاشة'],
    },
    {
      quote: 'this is what could alter things',
      analysis:
        'A bold, quiet assertion of paper\'s transformative power. The modal verb "could" is deliberately tentative -- Dharker suggests possibility rather than certainty, reflecting her preference for openness over rigid authority.',
      themes: ['Power', 'Change', 'Human constructs'],
      analysisAr:
        'تأكيد جريء وهادئ على قدرة الورق التحويلية. الـmodal verb "could" متردّد بقصد — Dharker تلمّح بالإمكانية مو باليقين، وهذا يعكس تفضيلها للانفتاح على السلطة الصارمة.',
      themesAr: ['القوة', 'التغيير', 'هياكل البشر'],
    },
    {
      quote: 'the back of the Koran, where a hand has written in the names and histories',
      analysis:
        "Connects paper to religious and family records. The specificity of the Koran reflects Dharker's Pakistani-Muslim heritage. Family records inscribed in holy books show how paper documents identity -- birth, marriage, lineage -- binding personal history to sacred text.",
      themes: ['Identity', 'Religion', 'Heritage'],
      analysisAr:
        'يربط الورق بالسجلات الدينية والعائلية. خصوصية ذكر القرآن تعكس خلفية Dharker الباكستانية-المسلمة. سجلات العائلة اللي تتنكتب في الكتب المقدّسة تبيّن كيف إن الورق يوثّق الهوية — الميلاد، الزواج، النسب — ويربط التاريخ الشخصي بالنصّ المقدّس.',
      themesAr: ['الهوية', 'الدين', 'التراث'],
    },
    {
      quote: 'living tissue, raise it to the light',
      analysis:
        'The central metaphor of the poem. "Living tissue" conflates paper with human skin/flesh, suggesting our identities are as thin and fragile as the documents that define us. "Raise it to the light" echoes the opening and implies scrutiny -- if we examine our structures, we see through them.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
      analysisAr:
        'الاستعارة المحورية في القصيدة. "Living tissue" تخلط بين الورق وجلد الإنسان أو لحمه، وتلمّح إن هويّاتنا رفيعة وهشّة مثل الوثائق اللي تعرّفنا. وعبارة "raise it to the light" ترجع لصدى الافتتاحية، وتعني التدقيق — لو فحصنا هياكلنا، نشوف من خلالها.',
      themesAr: ['الهوية', 'الهشاشة', 'قوة الطبيعة'],
    },
    {
      quote: 'If buildings were paper, I might feel their drift and pull',
      analysis:
        'A hypothetical reimagining of solid architecture as fragile paper. "Drift and pull" gives buildings organic, almost living qualities. Dharker challenges the assumed permanence of human constructions, suggesting they should be as flexible and responsive as paper.',
      themes: ['Power', 'Human constructs', 'Fragility'],
      analysisAr:
        'إعادة تخيّل افتراضية للعمارة الصلبة كأنها ورق هشّ. عبارة "drift and pull" تعطي المباني صفات عضوية تكاد تكون حيّة. Dharker تتحدّى الدوام المفترض في بنايات البشر، وتلمّح إنها لازم تكون مرنة ومتجاوبة مثل الورق.',
      themesAr: ['القوة', 'هياكل البشر', 'الهشاشة'],
    },
    {
      quote: 'borderlines, the marks that rivers make, roads, mountain folds',
      analysis:
        'Borders are reimagined as paper creases ("folds"). Dharker conflates man-made borders (political, national) with natural features (rivers, mountains), questioning whether human-imposed divisions are any more permanent than lines on a page.',
      themes: ['Power', 'Conflict', 'Identity'],
      analysisAr:
        'الحدود تتعاد تخيّلها كثنيات في الورق ("folds"). Dharker تخلط بين حدود البشر (السياسية والوطنية) والمعالم الطبيعية (الأنهار والجبال)، وتشكّك: هل التقسيمات اللي يفرضها البشر أكثر دواماً من خطوط على ورقة؟',
      themesAr: ['القوة', 'الصراع', 'الهوية'],
    },
    {
      quote: 'Capitals and monoliths, brought down to near-transparent things',
      analysis:
        'Centres of political power ("capitals") and permanent structures ("monoliths") are reduced to transparency. Dharker subverts expectations of permanence and power, arguing that even the most imposing human structures are ultimately fragile.',
      themes: ['Power', 'Human constructs', 'Fragility'],
      analysisAr:
        'مراكز السلطة السياسية ("capitals") والهياكل الدائمة ("monoliths") تتنزّل لمستوى الشفافية. Dharker تقلب توقّعات الدوام والقوة، وتجادل إن حتى أكبر هياكل البشر هي في النهاية هشّة.',
      themesAr: ['القوة', 'هياكل البشر', 'الهشاشة'],
    },
    {
      quote: 'turned into your skin.',
      analysis:
        'The final isolated single-line stanza completes the transformation from paper to body. "Your skin" uses direct address to make the theme personal: our identities are constructed, layered, and fragile -- as thin as tissue. The line\'s structural isolation (a deliberate break from the ten preceding quatrains) enacts the volta from paper to flesh that it describes.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
      analysisAr:
        'البيت الأخير المعزول يكمّل التحوّل من الورق للجسد. عبارة "your skin" تستخدم المخاطبة المباشرة عشان تخلّي الفكرة شخصية: هويّاتنا مبنيّة وطبقات وهشّة — رفيعة مثل الـtissue. العزل البنيوي للبيت (كسرة مقصودة من الـquatrains العشرة اللي قبله) يجسّد الـvolta من الورق للحم اللي يصفه.',
      themesAr: ['الهوية', 'الهشاشة', 'قوة الطبيعة'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor (paper)',
      example: 'Paper that lets the light shine through',
      effect:
        'Paper functions as a sustained metaphor throughout the entire poem, representing all human structures -- religious texts, borders, buildings, receipts, skin. By filtering everything through this single image, Dharker argues that all human constructs are fundamentally fragile and interconnected.',
      lineRef: 0,
      effectAr:
        'الورق يشتغل كاستعارة ممتدّة عبر القصيدة كلها، ويمثّل كل هياكل البشر — النصوص الدينية، الحدود، المباني، الفواتير، الجلد. عبر تصفية كل شي من خلال هذي الصورة الواحدة، Dharker تجادل إن كل ما يبنيه البشر هو في الأساس هشّ ومترابط.',
    },
    {
      device: 'Light imagery',
      example: 'raise it to the light',
      effect:
        'Recurring light imagery ("shine through," "raise it to the light," "near-transparent") symbolises truth, clarity, and understanding. Dharker associates transparency with positive transformation, suggesting that seeing through structures of power is liberating.',
      lineRef: 16,
      effectAr:
        'صور الضوء المتكرّرة ("shine through"، "raise it to the light"، "near-transparent") ترمز للحقيقة والوضوح والفهم. Dharker تربط الشفافية بالتحوّل الإيجابي، وتلمّح إن النفاذ إلى ما وراء هياكل السلطة هو شي يحرّر.',
    },
    {
      device: 'Enjambment',
      example: 'the back of / the Koran, where a hand / has written',
      effect:
        "Pervasive enjambment runs sentences across lines and stanzas, preventing meaning from being contained within fixed boundaries. This mirrors the poem's central argument: that structures (borders, records, identities) should not confine us. The flowing form enacts the transparency of tissue.",
      lineRef: 7,
      effectAr:
        'الـenjambment الواسع يمدّ الجمل عبر الأبيات والمقاطع، ويمنع المعنى من إنه ينحبس داخل حدود ثابتة. هذا يعكس الحجّة المركزية للقصيدة: إن الهياكل (الحدود والسجلات والهويات) ما يصير تقيّدنا. الشكل المتدفّق يجسّد شفافية الـtissue.',
    },
    {
      device: 'Listing',
      example: 'who was born to whom, the inks, the runs and ruled lines',
      effect:
        "Dharker catalogues the many uses of paper (birth records, receipts, maps, architectural plans) through extensive listing. This accumulation shows the sheer scale of paper's influence on human life, building a sense of how thoroughly documents control and define us.",
      lineRef: 10,
      effectAr:
        'Dharker تعدّد الاستخدامات الكثيرة للورق (سجلات الميلاد، الفواتير، الخرائط، المخطّطات المعمارية) عبر سرد مطوّل. هذا التكدّس يبيّن حجم تأثير الورق على حياة البشر، ويبني إحساس بكم بعمق تتحكّم فينا الوثائق وتعرّفنا.',
    },
    {
      device: 'Imperative mood',
      example: 'raise it to the light',
      effect:
        'The imperative "raise it" is one of the poem\'s few direct commands, creating a moment of urgency amid the contemplative tone. Dharker instructs the reader to scrutinise the structures that define them, transforming passive observation into active enquiry.',
      lineRef: 16,
      effectAr:
        'صيغة الأمر "raise it" وحدة من الأوامر المباشرة القليلة في القصيدة، وتخلق لحظة إلحاح وسط النبرة التأمّلية. Dharker توجّه القارئ يدقّق في الهياكل اللي تعرّفه، وتحوّل المراقبة السلبية لتساؤل فعّال.',
    },
    {
      device: 'Symbolism (borders and maps)',
      example: 'borderlines, the marks that rivers make',
      effect:
        'Borders symbolise the arbitrary divisions humans impose on the world. By placing "borderlines" alongside natural features like rivers and mountains, Dharker questions whether political boundaries are any more real or permanent than creases in paper.',
      lineRef: 26,
      effectAr:
        'الحدود ترمز للتقسيمات الاعتباطية اللي يفرضها البشر على العالم. بحطّها كلمة "borderlines" جنب معالم طبيعية مثل الأنهار والجبال، Dharker تتساءل: هل الحدود السياسية أكثر واقعية أو دواماً من ثنيات في الورق؟',
    },
    {
      device: 'Conditional language',
      example: 'If buildings were paper, I might feel',
      effect:
        'Modal verbs ("could," "might") and conditional "if" create a tentative, speculative tone. Rather than demanding change, Dharker imagines alternatives -- reflecting a belief that questioning and possibility are more powerful than rigid certainty.',
      lineRef: 19,
      effectAr:
        'الـmodal verbs ("could"، "might") والشرطية "if" تخلق نبرة مترّددة وتأمّلية. بدل ما تطالب بتغيير، Dharker تتخيّل بدائل — وهذا يعكس قناعتها إن التساؤل والإمكانية أقوى من اليقين الصارم.',
    },
    {
      device: 'Semantic field of fragility',
      example: 'thinned, tissue, transparent, torn, slips, drift',
      effect:
        'Words associated with thinness and delicacy accumulate throughout, reinforcing the idea that all human structures -- from grand buildings to personal identity -- are fundamentally impermanent and vulnerable.',
      lineRef: 3,
      effectAr:
        'الكلمات اللي ترتبط بالرفعة والحساسية تتكدّس عبر القصيدة كلها، وتقوّي فكرة إن كل هياكل البشر — من المباني الكبيرة لين الهوية الشخصية — هي في الأساس عابرة وهشّة.',
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tis-1',
    question: 'What is the central metaphor of Tissue?',
    type: 'multiple-choice',
    options: [
      'Paper as a metaphor for human life, structures, and fragility',
      'Tissue as a metaphor for illness',
      'Paper as a symbol of wealth',
      'Tissue as decoration',
    ],
    correctIndex: 0,
    explanation:
      'Paper runs through the entire poem as a metaphor for the fragile structures humans create — from birth certificates to maps to buildings. Dharker argues these are all as temporary and delicate as tissue paper.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'tis-2',
    question: 'What does "Paper that lets the light shine through" suggest?',
    type: 'multiple-choice',
    options: [
      'Paper is useful for windows',
      'Transparency and truth are valued — light symbolises understanding and honesty',
      'The paper is damaged and torn',
      'It describes a lantern',
    ],
    correctIndex: 1,
    explanation:
      'Light symbolises truth, clarity, and understanding throughout the poem. Paper that "lets the light shine through" represents openness and transparency — the opposite of rigid, opaque power structures.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'tis-3',
    question: 'What does the reference to the Koran suggest about paper?',
    type: 'multiple-choice',
    options: [
      'Only religious books matter',
      'Paper records and preserves human identity, culture, and belief — it controls who we are',
      'Dharker only writes about religion',
      'The Koran is made of special paper',
    ],
    correctIndex: 1,
    explanation:
      "The Koran reference connects to Dharker's heritage and shows how paper records family histories, births, and identities. Paper documents define who we are — yet they are fragile and temporary.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'tis-4',
    question: 'What does "living tissue, raise it to the light" achieve?',
    type: 'multiple-choice',
    options: [
      'It describes a medical procedure',
      'It blurs the boundary between paper and human skin — paper becomes flesh and flesh becomes paper',
      'It describes reading in sunlight',
      'It is about recycling',
    ],
    correctIndex: 1,
    explanation:
      '"Living tissue" is the poem\'s most important image. Paper is compared to skin/flesh, blurring the boundary between human bodies and the documents that define us. Both are fragile; both can be torn.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'tis-5',
    question: 'What does the hypothetical "If buildings were paper" suggest?',
    type: 'multiple-choice',
    options: [
      'Dharker wants buildings to be demolished',
      'She imagines a world where solid structures become fragile, questioning the permanence of human power',
      'Paper buildings would be more eco-friendly',
      'She is describing origami',
    ],
    correctIndex: 1,
    explanation:
      'The conditional "If buildings were paper" imagines dismantling the solid, imposing structures that represent human power. Dharker suggests the world would be better if we acknowledged the fragility of our constructions.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'tis-6',
    question: 'What does the word "borderlines" connect to in Dharker\'s broader concerns?',
    type: 'multiple-choice',
    options: [
      'Garden fences',
      'National borders, identity, and belonging — drawn on paper (maps) yet controlling real lives',
      'Railway lines',
      'Lines in a poem',
    ],
    correctIndex: 1,
    explanation:
      'Dharker, who has lived in multiple countries, is preoccupied with borders, identity, and belonging. "Borderlines" are drawn on paper (maps) yet they control where people can go and who they can be.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tis-7',
    question: 'How does the final single-line stanza differ from the rest of the poem?',
    type: 'multiple-choice',
    options: [
      'It is a question',
      "It stands alone and shifts to the personal — connecting the poem's philosophical ideas to the human body",
      'It is the longest line',
      'It has no particular significance',
    ],
    correctIndex: 1,
    explanation:
      "The final single line stands alone, separate from the quatrain pattern. It brings the poem's abstract ideas about paper and power back to the intimate, personal level of the human body.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'tis-8',
    question: 'Who is Imtiaz Dharker and what themes does she explore?',
    type: 'multiple-choice',
    options: [
      'A British war poet',
      'A poet born in Pakistan, raised in Glasgow, living in India — she explores identity, borders, belonging, and the structures that control human life',
      'A Victorian novelist',
      'An American nature poet',
    ],
    correctIndex: 1,
    explanation:
      'Imtiaz Dharker was born in Lahore (Pakistan), raised in Glasgow, and has lived in India. Her cross-cultural identity deeply informs her poetry, which frequently explores borders, belonging, and the fragility of human constructs.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'tis-9',
    question:
      "How does the use of quatrains that break into shorter stanzas reflect the poem's themes?",
    type: 'multiple-choice',
    options: [
      'It makes the poem look neat',
      "The shifting stanza lengths enact the poem's argument — structures appear solid but are ultimately fragile and breakable",
      'It follows a traditional sonnet form',
      'It has no thematic connection',
    ],
    correctIndex: 1,
    explanation:
      "The poem mostly uses quatrains but these break into shorter units, culminating in a single-line final stanza. This structural disintegration mirrors the poem's argument that all structures — even poetic ones — are ultimately fragile.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'tis-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Tissue for exploring impermanence?',
    type: 'multiple-choice',
    options: [
      'Bayonet Charge by Hughes',
      'Ozymandias by Shelley',
      'Remains by Armitage',
      'Poppies by Weir',
    ],
    correctIndex: 1,
    explanation:
      'Both Tissue and Ozymandias explore the impermanence of human structures and power. Ozymandias uses a stone statue crumbling in the desert; Tissue uses paper as a symbol of fragility. Both argue that nothing humans build is permanent.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Tissue explores the fragility of human structures — identity, borders, buildings, power — using paper as a central metaphor for impermanence.',
    keyPoints: [
      'Fragility of power — human structures (buildings, borders, identities) are as fragile as paper',
      'Light and transparency — valued over opacity and rigidity',
      'Identity — paper records (birth certificates, religious texts) define who we are',
      'Nature vs human constructs — natural light outlasts all paper records',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Dharker uses an extended metaphor of paper, light imagery, conditional language, and listing to build a philosophical argument about impermanence.',
    keyPoints: [
      '"Paper that lets the light shine through" — light as truth and understanding',
      '"Living tissue" — blurs boundary between paper and human skin',
      '"Borderlines" — paper maps controlling real human lives',
      'Conditional language ("If buildings were paper") — imagining a fragile world',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Mostly quatrains that gradually fragment into shorter stanzas, culminating in a single-line final stanza — enacting the poem's theme of structural disintegration.",
    keyPoints: [
      'Quatrains that break apart — structure mirrors the fragility theme',
      'Enjambment across stanza breaks — ideas flow across boundaries like paper',
      'Single-line final stanza — isolation emphasises the personal, intimate conclusion',
      "No regular rhyme scheme — reflects the poem's questioning of fixed structures",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Dharker present the theme of power and fragility in Tissue?',
  'Compare how impermanence is presented in Tissue and one other poem from the anthology.',
  'How does Dharker use the extended metaphor of paper to explore human structures and identity?',
]

/* ── Comparison poems ───────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    slug: 'ozymandias',
    link: "Both poems explore the impermanence of human power. Ozymandias shows a once-mighty ruler's monument crumbled to nothing; Tissue argues that all human structures are as fragile as paper. However, Shelley focuses on a single historical example of fallen power, while Dharker takes a broader, more philosophical view, suggesting that all constructs -- borders, buildings, identities -- are temporary.",
    themes: ['Power', 'Human constructs', 'Fragility'],
  },
  {
    poem: 'The \u00c9migr\u00e9e',
    poet: 'Carol Rumens',
    slug: 'the-emigree',
    link: 'Both poets explore identity, borders, and belonging. The \u00c9migr\u00e9e presents a speaker who clings to an idealised memory of a homeland despite political change; Tissue questions whether borders and national identities are as fixed as they seem. Dharker imagines dismantling borders, while Rumens shows how they persist in memory and emotion.',
    themes: ['Identity', 'Conflict', 'Power'],
  },
  {
    poem: 'Checking Out Me History',
    poet: 'John Agard',
    slug: 'checking-out-me-history',
    link: 'Both poems examine how written records shape identity. Agard protests the way colonial education erased Black Caribbean history from the curriculum; Dharker considers more broadly how paper records (birth certificates, religious texts, maps) construct and control identity. Both poets question who controls the narrative, but Agard is explicitly political and angry, while Dharker is contemplative and philosophical.',
    themes: ['Identity', 'Power', 'Heritage'],
  },
]

/* ── Theme tokens ───────────────────────────────────────────────── */

const THEMES = [
  'Power',
  'Identity',
  'Fragility',
  'Human constructs',
  'Conflict',
  'Heritage',
  'Nature vs. civilisation',
]

/* ── Page component ─────────────────────────────────────────────── */

export default function TissuePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Tissue by Imtiaz Dharker — Analysis & Annotations"
        description="Line-by-line analysis of Tissue with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Tissue',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/tissue',
          },
        ]}
      />
      {/* Breadcrumb / back */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Tissue</h1>
            <p className="text-body-sm text-muted-foreground">
              Imtiaz Dharker &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* Theme tokens */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* Interactive poem viewer */}
      <StudyTools
        textName="Tissue"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Tissue"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={TISSUE} />

      {/* Comparisons */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with other poems</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div key={c.slug} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <p className="text-xs text-muted-foreground">{c.poet}</p>
              </div>
              <p className="text-sm text-card-foreground leading-relaxed">{c.link}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={`/revision/poetry/power-and-conflict/${c.slug}`} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        &ldquo;Tissue&rdquo; by Imtiaz Dharker, from <em>The terrorist at my table</em> (Bloodaxe
        Books, 2006). Rights held by Bloodaxe Books (bloodaxebooks.com). Short quotations are
        reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full
        text available in your AQA Power and Conflict anthology.
      </p>
    </div>
  )
}
