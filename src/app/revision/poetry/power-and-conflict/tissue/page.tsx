import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  openGraph: {
    title: 'Tissue -- Imtiaz Dharker -- The English Hub',
    description:
      'Interactive study guide for Tissue by Imtiaz Dharker. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
    images: [
      {
        url: '/api/og?title=Tissue+--+Imtiaz+Dharker+--+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Tissue -- Imtiaz Dharker -- The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/tissue' },
  title: 'Tissue -- Imtiaz Dharker',
  description:
    'Interactive study guide for Tissue by Imtiaz Dharker. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
}

/* ── Poem data ──────────────────────────────────────────────────── */

const TISSUE: PoemData = {
  title: 'Tissue',
  poet: 'Imtiaz Dharker',
  // NOTE: "Tissue" (Imtiaz Dharker, 2006) remains in copyright. To avoid
  // reproducing the poem, each line below is given as a PARAPHRASE in the site's
  // own words, and the annotations quote only short phrases. Students must read
  // the full original text in the AQA Power and Conflict anthology.
  //
  // Until 25 September 2026 this array printed a corrupted text as the poem. Of
  // its 30 lines, ten were Dharker's as she wrote them, ten were garbled or
  // spliced versions of hers and ten were invented, and 18 of her 37 lines were
  // missing. It now follows the published poem, nine quatrains and a final
  // single line, 37 lines in all, one entry per line in the poem's order,
  // checked line by line on 26 September 2026 against a printed copy of the
  // poem. Annotations that described invented lines were rewritten or
  // corrected.
  //
  // Later the same day the rest of the page was rebuilt. It still quoted
  // invented lines ("raise it to the light", a "drift and pull", capitals
  // "brought down" to transparency, inks and ruled lines, the word "torn"),
  // misquoted two more, called a phrase an imperative that is not one,
  // counted ten quatrains and said the stanzas fragment, when there are nine
  // regular quatrains and one line. In all it quoted 89 distinct words of the
  // poem against a fair-dealing cap of 21. Every quotation left was checked
  // word for word against the text BBC Bitesize printed by permission of
  // Bloodaxe Books (its poem page, as the Wayback Machine holds it from May
  // 2021; the live link from the Bitesize guide now returns 404), and cut to
  // the short phrases the analysis discusses. The
  // blank stanza-break entries were removed, and each stanza's first line is
  // labelled instead, because the viewer numbers entries by position: with
  // the spacers its numbers ran up to nine ahead of the poem's. Now entry N is
  // line N, and a language device's lineRef is the line number less one.
  lines: [
    {
      text: '[Paraphrase] (Stanza 1) Paper so thin that light can',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Paper becomes a metaphor for human life and structures throughout the poem. Light symbolises truth and understanding.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] pass through it: this,',
      annotations: [
        {
          type: 'Light imagery',
          note: 'Light passing through the paper suggests transparency and honesty -- Dharker values openness over opacity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] is something with the power to change things.',
      annotations: [
        {
          type: 'Assertion',
          note: 'A quiet but confident statement, softened by a modal verb: paper (and what we record on it) has the power to change the world.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] Paper worn thin by the years or by handling,',
      annotations: [
        {
          type: 'Enjambment',
          note: 'The sentence runs across the stanza break, mirroring how paper/life resists neat boundaries.',
          color: '#a855f7',
        },
        {
          type: 'Repetition',
          note: 'Repeating "Paper" to open a new sentence begins a listing effect that catalogues paper\'s many forms and uses.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] (Stanza 2) like the pages of books read again and again,' },
    {
      text: '[Paraphrase] or the last pages inside a Koran, where someone',
      annotations: [
        {
          type: 'Cultural reference',
          note: "The Koran (Quran) connects to Dharker's own Pakistani-Muslim heritage. Religious texts are among the most handled, thinned papers.",
          color: '#3b82f6',
        },
      ],
    },
    { text: "[Paraphrase] has noted down people's names and life stories:" },
    {
      text: '[Paraphrase] who the parents of each child were,',
      annotations: [
        {
          type: 'Listing',
          note: 'The list of family records (births, heights and weights, deaths) shows how paper documents and controls human identity.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] (Stanza 3) how tall and heavy each was, and who' },
    { text: '[Paraphrase] died, in what place and by what cause, on which faded date,' },
    { text: '[Paraphrase] pages flattened and stroked so often they have become' },
    { text: '[Paraphrase] see-through from so much careful attention.' },
    {
      text: '[Paraphrase] (Stanza 4) Were buildings made of paper, the speaker might',
      annotations: [
        {
          type: 'Conditional / Hypothetical',
          note: 'Dharker imagines a world where solid structures become fragile paper -- questioning the permanence of human power and borders.',
          color: '#a855f7',
        },
      ],
    },
    { text: '[Paraphrase] sense them shifting, and notice how readily' },
    { text: '[Paraphrase] they collapse with a breath, a small change' },
    { text: '[Paraphrase] in which way the wind is blowing.' },
    { text: '[Paraphrase] (Stanza 5) Maps as well: sunlight passes through' },
    {
      text: '[Paraphrase] the borders drawn on them, the lines',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Borderlines" connects to Dharker\'s preoccupation with national borders, identity, and belonging -- drawn on maps (paper) yet controlling real lives.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '[Paraphrase] made by rivers, and roads,' },
    { text: '[Paraphrase] railway lines, the creases of mountains,' },
    { text: "[Paraphrase] (Stanza 6) Thin receipts from the grocer's" },
    { text: '[Paraphrase] recording the amount sold' },
    { text: '[Paraphrase] and the sum charged to a credit card' },
    { text: '[Paraphrase] might set our lives flying, like kites made of paper.' },
    { text: '[Paraphrase] (Stanza 7) An architect might take all of this,' },
    { text: '[Paraphrase] lay one sheet upon another, glowing' },
    { text: '[Paraphrase] writing, figures and lines, each laid over the next,' },
    { text: '[Paraphrase] and never again want to construct things out of brick' },
    { text: '[Paraphrase] (Stanza 8) or building blocks, but allow the sunlight to burst' },
    {
      text: '[Paraphrase] through the capitals, and through huge single blocks of stone,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The capital cities and monoliths of this line represent power, government, and permanence -- yet Dharker imagines daylight breaking through them: they become as fragile and temporary as paper.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '[Paraphrase] through the forms that human pride creates,' },
    {
      text: '[Paraphrase] and discover how to sketch out a great plan',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'Near the close the poem turns to tracing a great design: paper and tissue as the blueprint for all human structures and identity.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] (Stanza 9) using living tissue, and build something',
      annotations: [
        {
          type: 'Key metaphor',
          note: '"Living tissue" is the poem\'s central image -- paper is compared to skin/flesh, blurring the boundary between human bodies and the records that define us.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] that was never designed to endure,' },
    {
      text: '[Paraphrase] made from paper flattened and stroked',
      annotations: [
        {
          type: 'Repetition',
          note: 'Words from the third stanza return here, tying the imagined structure back to the much-handled family pages.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] and worn so fine that light shows through it,' },
    {
      text: '[Paraphrase] (Stanza 10) becoming your own skin.',
      annotations: [
        {
          type: 'Structural isolation',
          note: 'The final line stands ALONE as its own single-line stanza, deliberately separated from the nine preceding quatrains. It brings the metaphor full circle: paper becomes skin, records become identity, the external becomes the self.',
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
<p>Dharker was appointed <strong>Chancellor of Newcastle University</strong> in 2020 and has won the Queen's Gold Medal for Poetry (2014), reflecting her significance in contemporary British literature.</p>`,

  contextAr: `<p><strong>Imtiaz Dharker</strong> (مواليد 1954) شاعرة وفنّانة ومخرجة، باكستانية-اسكتلندية. ولدت في لاهور في باكستان، وكبرت في Glasgow في اسكتلندا، وعاشت كذلك في الهند. خلفيتها متعدّدة الثقافات تأثّر فيها شعرها بشكل عميق، وهي وايد تستكشف مواضيع <strong>الهوية والحدود والانتماء والحرية</strong>.</p>
<p>قصيدة <em>Tissue</em> نُشرت في ديوان <strong><em>The terrorist at my table</em></strong> (2006). الديوان يدرس أفكار الخوف والسيطرة وكيف نصنع المعنى. وفي <em>Tissue</em>، Dharker تستخدم استعارة ممتدّة من <strong>الورق</strong> عشان تستكشف كيف إن البشر يبنون هياكل - نصوص دينية وخرائط ووثائق حدود وفواتير - هذي الهياكل تسجّل حياتنا وتسيطر عليها في نفس الوقت.</p>
<p>Dharker مهتمّة بـ<strong>هشاشة هذي الهياكل</strong>. الورق رفيع وشفاف ويتمزّق بسهولة - بس المعلومات اللي تنكتب عليه (شهادات الميلاد، الجوازات، الفلوس) تحمل قوّة هائلة. القصيدة تسأل: ممكن نعيد تخيّل العالم لو اعترفنا إن كل ما يبنيه البشر هو هشّ مثل الـtissue؟</p>
<p>Dharker تعيّنت <strong>Chancellor في Newcastle University</strong> سنة 2020، ونالت Queen's Gold Medal for Poetry سنة 2014، وهذا يعكس مكانتها في الأدب البريطاني المعاصر.</p>`,

  summary: `Tissue explores the power and fragility of paper as an extended metaphor for the structures that control human life.

The poem opens by describing paper that has been thinned by use -- the back pages of a well-read Koran where a family's births, measurements and deaths have been recorded. Dharker catalogues the many forms paper takes: religious texts, birth records, maps, receipts, and architectural plans.

In the central stanzas, the speaker imagines buildings made of paper, suggesting that grand structures of power (capitals, monoliths, borders) could be reimagined as transparent, fragile things. The poem moves between the everyday (grocery receipts) and the monumental (national borders), showing how all human constructs rely on paper records.

The poem culminates in an architect who might give up brick and build instead with paper and "living tissue", a structure not designed to endure -- and the final, isolated single-line stanza ("turned into your skin.") equates paper with the human body itself, suggesting that our identities are as constructed and fragile as the documents that define us.

Throughout, Dharker questions human power and permanence, suggesting that acknowledging fragility could "alter things" for the better.`,

  summaryAr: `قصيدة Tissue تستكشف قوة الورق وهشاشته كاستعارة ممتدّة عن الهياكل اللي تسيطر على حياة البشر.

القصيدة تفتتح بوصف ورق رهف من كثر الاستخدام - الصفحات الأخيرة من قرآن مقروء وايد، مسجّل فيها مواليد عائلة وأطوالهم وأوزانهم ووفياتهم. Dharker تعدّد الأشكال الكثيرة اللي ياخذها الورق: نصوص دينية، سجلات ميلاد، خرائط، فواتير، ومخطّطات معمارية.

في المقاطع الوسطى، المتكلّم يتخيّل مباني مصنوعة من ورق، ويلمّح إن الهياكل الكبيرة للسلطة (العواصم، الـmonoliths، الحدود) ممكن يُعاد تخيّلها كأشياء شفافة وهشّة. القصيدة تتنقّل بين العادي (فواتير البقالة) والضخم (الحدود الوطنية)، وتبيّن كيف إن كل ما يبنيه البشر يعتمد على سجلات ورقية.

القصيدة توصل ذروتها في مهندس معماري ممكن يترك الطوب ويبني بالورق وبالـ"living tissue"، بناء ما انصمّم عشان يدوم - والبيت الأخير المنعزل ("turned into your skin.") يساوي بين الورق وجسم الإنسان نفسه، ويلمّح إن هويّاتنا مبنيّة وهشّة مثل الوثائق اللي تعرّفنا.

في كل القصيدة، Dharker تشكّك في قوة البشر ودوامهم، وتلمّح إن الاعتراف بالهشاشة ممكن "alter things" للأحسن.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme. The lack of a fixed pattern mirrors the poem's argument that rigid structures should be questioned.

STANZA STRUCTURE: Nine quatrains followed by a final isolated single-line stanza ("turned into your skin."), 37 lines in all. The consistency of the quatrains creates an expectation that the final lone line deliberately breaks -- enacting the poem's theme that structures can and should be disrupted. The isolated final line is structurally significant -- Dharker breaks the regularity of the quatrains to emphasise the volta from paper to flesh.

ENJAMBMENT: Extensive enjambment runs sentences across line and stanza breaks throughout the poem. This creates a flowing, continuous quality, as if meaning (like paper) cannot be contained within neat borders. It also mirrors the transparency of tissue paper -- ideas bleed through boundaries.

FINAL ISOLATED LINE: "turned into your skin." stands alone as its own single-line stanza, structurally separated from the nine preceding quatrains. This isolation emphasises the transformation from paper to skin and forces the reader to pause on the poem's most important idea: that human identity is constructed and fragile.

SENTENCE STRUCTURE: Many sentences span multiple stanzas, reinforcing the idea that meaning resists containment. The poem uses few full stops, creating a sense of continuous thought.

TONE: Contemplative, quiet, and philosophical. The speaker does not command but suggests, with modal verbs in lines 3, 13, 24 and 25, using conditional language to imagine alternatives rather than demand change.`,

  formAndStructureAr: `FORM: شعر حرّ (free verse) بدون نظام قافية ثابت. غياب النمط الثابت يعكس حجّة القصيدة إن الهياكل الصارمة لازم يتشكّك فيها.

بنية المقاطع (STANZA STRUCTURE): تسع quatrains، يلحقها بيت واحد منعزل في مقطع مستقل ("turned into your skin.")، يعني 37 بيت كلها. ثبات الـquatrains يخلق توقّع، والبيت الأخير المعزول يكسر هذا التوقّع بقصد - يجسّد فكرة القصيدة إن الهياكل ممكن وينبغي إنها تنكسر. البيت الأخير المعزول مهم بنيوياً - Dharker تكسر انتظام الـquatrains عشان تأكّد على الـvolta من الورق للجسد.

ENJAMBMENT: تسلسل واسع للأبيات بدون توقّف، الجمل تجري عبر فواصل الأبيات والمقاطع طول القصيدة. هذا يخلق إحساس بالتدفّق والاستمرارية، وكأن المعنى (مثل الورق) ما يقدر يُحتوى داخل حدود ضيّقة. وكذلك يعكس شفافية الـtissue - الأفكار تنفذ عبر الحدود.

البيت الأخير المعزول: "turned into your skin." يقف لحاله كمقطع من بيت واحد، منفصل بنيوياً عن الـquatrains التسعة اللي قبله. هذا العزل يأكّد على التحوّل من الورق للجلد، ويجبر القارئ يتوقّف عند أهم فكرة في القصيدة: إن الهوية الإنسانية مبنيّة وهشّة.

بنية الجمل: وايد جمل تمتدّ عبر عدّة مقاطع، وهذا يقوّي فكرة إن المعنى يقاوم الاحتواء. القصيدة تستخدم نقاط قليلة، وهذا يخلق إحساس بفكرة متواصلة.

النبرة (TONE): تأمّلية وهادئة وفلسفية. المتكلّمة ما تأمر، لكن تقترح، بأفعال ناقصة (modal verbs) في الأبيات 3 و13 و24 و25، وتستخدم اللغة الشرطية عشان تتخيّل بدائل بدل ما تطالب بتغيير.`,

  keyQuotes: [
    {
      quote: 'Paper that lets the light',
      analysis:
        'The opening line establishes paper as something transparent and illuminating: the light shines through it (line 2). Light symbolises truth, understanding, and clarity. Dharker values what is translucent over what is opaque -- suggesting that openness and fragility are strengths, not weaknesses.',
      themes: ['Power of nature', 'Identity', 'Fragility'],
      analysisAr:
        'البيت الافتتاحي يثبّت الورق كشي شفّاف وينير: الضوء ينفذ من خلاله (البيت 2). الضوء يرمز للحقيقة والفهم والوضوح. Dharker تقدّر الشي الشفاف على الشي المعتم - وتلمّح إن الانفتاح والهشاشة قوّة، مو ضعف.',
      themesAr: ['قوة الطبيعة', 'الهوية', 'الهشاشة'],
    },
    {
      quote: 'alter things',
      analysis:
        "A bold, quiet assertion of paper's transformative power (line 3). The modal verb just before it is deliberately tentative -- Dharker suggests possibility rather than certainty, reflecting her preference for openness over rigid authority.",
      themes: ['Power', 'Change', 'Human constructs'],
      analysisAr:
        'تأكيد جريء وهادئ على قدرة الورق التحويلية (البيت 3). الـmodal verb اللي قبلها على طول متردّد بقصد - Dharker تلمّح بالإمكانية مو باليقين، وهذا يعكس تفضيلها للانفتاح على السلطة الصارمة.',
      themesAr: ['القوة', 'التغيير', 'هياكل البشر'],
    },
    {
      quote: 'If buildings were paper',
      analysis:
        'A hypothetical reimagining of solid architecture as fragile paper (line 13). The speaker imagines sensing buildings shift, and watching them collapse at a breath or a change in the wind. Dharker challenges the assumed permanence of human constructions, suggesting they are as vulnerable as paper.',
      themes: ['Power', 'Human constructs', 'Fragility'],
      analysisAr:
        'إعادة تخيّل افتراضية للعمارة الصلبة كأنها ورق هشّ (البيت 13). المتكلّمة تتخيّل إنها تحسّ بالمباني تتحرّك، وتشوفها تطيح مع نفَس أو مع تغيّر اتجاه الريح. Dharker تتحدّى الدوام المفترض في بنايات البشر، وتلمّح إنها هشّة مثل الورق.',
      themesAr: ['القوة', 'هياكل البشر', 'الهشاشة'],
    },
    {
      quote: 'borderlines',
      analysis:
        'On a map, sunlight passes through political borders (lines 17 to 18). Dharker lists them alongside the marks of rivers, roads, railways and mountains, questioning whether human-imposed divisions are any more permanent than natural features, or than lines on a page.',
      themes: ['Power', 'Conflict', 'Identity'],
      analysisAr:
        'في الخريطة، الشمس تنفذ من خلال الحدود السياسية (البيتين 17 و18). Dharker تعدّدها جنب آثار الأنهار والطرق وسكك الحديد والجبال، وتشكّك: هل التقسيمات اللي يفرضها البشر أكثر دواماً من المعالم الطبيعية، أو من خطوط على ورقة؟',
      themesAr: ['القوة', 'الصراع', 'الهوية'],
    },
    {
      quote: 'paper kites',
      analysis:
        'Flimsy shop receipts, recording purchases and card payments, could send our lives flying like kites (line 24). The simile shows how everyday documents and money can control us: our lives are carried by forces we do not steer, like kites in the wind.',
      themes: ['Power', 'Fragility', 'Human constructs'],
      analysisAr:
        'فواتير البقالة الرفيعة، اللي تسجّل كم انباع وكم اندفع بالبطاقة، ممكن تطيّر حياتنا مثل الطيّارات الورقية (البيت 24). الـsimile يبيّن كيف إن الوثائق اليومية والفلوس ممكن تتحكّم فينا: حياتنا تشيلها قوى ما نتحكّم فيها، مثل الطيّارات الورقية في الريح.',
      themesAr: ['القوة', 'الهشاشة', 'هياكل البشر'],
    },
    {
      quote: 'living tissue',
      analysis:
        'The central metaphor of the poem (line 33). An architect sketches a great plan in this living material and builds something not intended to endure. The phrase conflates paper with human skin and flesh, suggesting our identities are as thin and fragile as the documents that define us.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
      analysisAr:
        'الاستعارة المحورية في القصيدة (البيت 33). المهندس المعماري يرسم تصميم عظيم بالـ"living tissue" ويرفع بناء ما انصمّم عشان يدوم. العبارة تخلط بين الورق وجلد الإنسان أو لحمه، وتلمّح إن هويّاتنا رفيعة وهشّة مثل الوثائق اللي تعرّفنا.',
      themesAr: ['الهوية', 'الهشاشة', 'قوة الطبيعة'],
    },
    {
      quote: 'turned into your skin.',
      analysis:
        'The final isolated single-line stanza completes the transformation from paper to body. "Your skin" uses direct address to make the theme personal: our identities are constructed, layered, and fragile -- as thin as tissue. The line\'s structural isolation (a deliberate break from the nine preceding quatrains) enacts the volta from paper to flesh that it describes.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
      analysisAr:
        'البيت الأخير المعزول يكمّل التحوّل من الورق للجسد. عبارة "your skin" تستخدم المخاطبة المباشرة عشان تخلّي الفكرة شخصية: هويّاتنا مبنيّة وطبقات وهشّة - رفيعة مثل الـtissue. العزل البنيوي للبيت (كسرة مقصودة من الـquatrains التسعة اللي قبله) يجسّد الـvolta من الورق للحم اللي يصفه.',
      themesAr: ['الهوية', 'الهشاشة', 'قوة الطبيعة'],
    },
  ],

  // Each example is a phrase checked against the Bloodaxe-permitted text on
  // BBC Bitesize; the viewer prints it between quotation marks.
  languageDevices: [
    {
      device: 'Extended metaphor (paper)',
      example: 'Paper that lets the light',
      effect:
        'Paper functions as a sustained metaphor throughout the entire poem, representing all human structures -- religious texts, borders, buildings, receipts, skin. By filtering everything through this single image, Dharker argues that all human constructs are fundamentally fragile and interconnected.',
      lineRef: 0,
      effectAr:
        'الورق يشتغل كاستعارة ممتدّة عبر القصيدة كلها، ويمثّل كل هياكل البشر - النصوص الدينية، الحدود، المباني، الفواتير، الجلد. عبر تصفية كل شي من خلال هذي الصورة الواحدة، Dharker تجادل إن كل ما يبنيه البشر هو في الأساس هشّ ومترابط.',
    },
    {
      device: 'Light imagery',
      example: 'lets the light',
      effect:
        'Light recurs through the poem: it passes through paper in the opening, sunlight passes through maps (line 17), the architect layers glowing writing (lines 26 to 27) and lets light burst through capital cities and great stones (lines 29 to 30). Light symbolises truth, clarity, and understanding, and Dharker associates transparency with positive transformation: seeing through structures of power is liberating.',
      lineRef: 0,
      effectAr:
        'الضوء يتكرّر في القصيدة: ينفذ من الورق في البداية، والشمس تنفذ من الخرائط (البيت 17)، والمهندس يرصّ كتابة مضيئة (البيتين 26 و27) ويخلّي ضوء النهار يخترق العواصم والـmonoliths (البيتين 29 و30). الضوء يرمز للحقيقة والوضوح والفهم، وDharker تربط الشفافية بالتحوّل الإيجابي: النفاذ إلى ما وراء هياكل السلطة شي يحرّر.',
    },
    {
      device: 'Conditional language',
      example: 'If buildings were paper',
      effect:
        'The conditional "if" and the modal verbs of the poem (lines 3, 13, 24 and 25) create a tentative, speculative tone. Rather than demanding change, Dharker imagines alternatives -- reflecting a belief that questioning and possibility are more powerful than rigid certainty.',
      lineRef: 12,
      effectAr:
        'الشرطية "if" والأفعال الناقصة في القصيدة (الأبيات 3 و13 و24 و25) تخلق نبرة مترّددة وتأمّلية. بدل ما تطالب بتغيير، Dharker تتخيّل بدائل - وهذا يعكس قناعتها إن التساؤل والإمكانية أقوى من اليقين الصارم.',
    },
    {
      device: 'Symbolism and listing (maps)',
      example: 'borderlines',
      effect:
        'Borders symbolise the arbitrary divisions humans impose on the world. By listing borderlines alongside rivers, roads, railways and the folds of mountains (lines 18 to 20), Dharker questions whether political boundaries are any more real or permanent than creases in paper. The listing, like the family records of lines 8 to 10, shows how much of life paper holds.',
      lineRef: 17,
      effectAr:
        'الحدود ترمز للتقسيمات الاعتباطية اللي يفرضها البشر على العالم. لمّا تعدّد "borderlines" جنب الأنهار والطرق وسكك الحديد وثنيات الجبال (الأبيات 18 لين 20)، Dharker تتساءل: هل الحدود السياسية أكثر واقعية أو دواماً من ثنيات في الورق؟ والتعداد، مثل سجلات العائلة في الأبيات 8 لين 10، يبيّن قد إيش الورق يحمل من الحياة.',
    },
    {
      device: 'Simile',
      example: 'paper kites',
      effect:
        'Receipts that record what we buy might send our lives flying like kites. The simile makes money and paperwork a force that carries us, as the wind carries a kite: our lives are not always in our control.',
      lineRef: 23,
      effectAr:
        'الفواتير اللي تسجّل مشترياتنا ممكن تطيّر حياتنا مثل الطيّارات الورقية. الـsimile يخلّي الفلوس والأوراق قوّة تشيلنا، مثل ما الريح تشيل الطيّارة الورقية: حياتنا مو دايماً تحت سيطرتنا.',
    },
    {
      device: 'Metaphor (paper as flesh)',
      example: 'living tissue',
      effect:
        'The architect of the final stanzas builds with this living material a structure not intended to endure. The metaphor blurs paper and body: the same fragility that makes paper powerful belongs to people. Words from line 11, the smoothing and stroking, return in line 35 to tie the structure back to the much-handled family pages.',
      lineRef: 32,
      effectAr:
        'المهندس المعماري في المقاطع الأخيرة يبني بالـ"living tissue"، بناء ما انصمّم عشان يدوم. الاستعارة تخلط بين الورق والجسد: نفس الهشاشة اللي تعطي الورق قوّته موجودة في البشر. وكلمات البيت 11، التمليس والمسح، ترجع في البيت 35 وتربط البناء بصفحات العائلة اللي انلمست وايد.',
    },
    {
      device: 'Structural isolation and direct address',
      example: 'turned into your skin.',
      effect:
        "After nine regular quatrains, the last line stands alone. The break in the pattern forces a pause on the final transformation, and the second person makes it the reader's own: the paper we are made of is our skin.",
      lineRef: 36,
      effectAr:
        'بعد تسع quatrains منتظمة، البيت الأخير يوقف لحاله. كسر النمط يجبر القارئ يتوقّف عند التحوّل الأخير، وضمير المخاطب يخلّيه تحوّل القارئ نفسه: الورق اللي إحنا مصنوعين منه هو جلدنا.',
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
      'Paper runs through the entire poem as a metaphor for the fragile structures humans create - from birth certificates to maps to buildings. Dharker argues these are all as temporary and delicate as tissue paper.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'tis-2',
    question: 'What does the opening, "Paper that lets the light", suggest?',
    type: 'multiple-choice',
    options: [
      'Paper is useful for windows',
      'Transparency and truth are valued - light symbolises understanding and honesty',
      'The paper is damaged and torn',
      'It describes a lantern',
    ],
    correctIndex: 1,
    explanation:
      'Light symbolises truth, clarity, and understanding throughout the poem. Paper that lets light pass through it represents openness and transparency - the opposite of rigid, opaque power structures.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'tis-3',
    question: 'What does the reference to the Koran suggest about paper?',
    type: 'multiple-choice',
    options: [
      'Only religious books matter',
      'Paper records and preserves human identity, culture, and belief - it controls who we are',
      'Dharker only writes about religion',
      'The Koran is made of special paper',
    ],
    correctIndex: 1,
    explanation:
      "The Koran reference connects to Dharker's heritage and shows how paper records family histories, births, and identities. Paper documents define who we are - yet they are fragile and temporary.",
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'tis-4',
    question: 'What does the phrase "living tissue" in line 33 achieve?',
    type: 'multiple-choice',
    options: [
      'It describes a medical procedure',
      'It blurs the boundary between paper and human skin - paper becomes flesh and flesh becomes paper',
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
      'National borders, identity, and belonging - drawn on paper (maps) yet controlling real lives',
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
      "It stands alone and shifts to the personal - connecting the poem's philosophical ideas to the human body",
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
      'A poet born in Pakistan, raised in Glasgow, living in India - she explores identity, borders, belonging, and the structures that control human life',
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
      'Why might Dharker end nine regular quatrains with a single line standing on its own?',
    type: 'multiple-choice',
    options: [
      'To make the poem look neat',
      "The broken pattern enacts the poem's argument - structures appear solid but are ultimately fragile and breakable",
      'It follows a traditional sonnet form',
      'It has no thematic connection',
    ],
    correctIndex: 1,
    explanation:
      "The poem keeps a steady pattern of nine four-line stanzas, then breaks it with one line. The broken structure mirrors the poem's argument that all structures - even poetic ones - are ultimately fragile, and the isolated line makes the reader pause on the final transformation into skin.",
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
      'Tissue explores the fragility of human structures - identity, borders, buildings, power - using paper as a central metaphor for impermanence.',
    keyPoints: [
      'Fragility of power - human structures (buildings, borders, identities) are as fragile as paper',
      'Light and transparency - valued over opacity and rigidity',
      'Identity - paper records (birth certificates, religious texts) define who we are',
      'Nature vs human constructs - natural light outlasts all paper records',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Dharker uses an extended metaphor of paper, light imagery, conditional language, and listing to build a philosophical argument about impermanence.',
    keyPoints: [
      '"Paper that lets the light" - light as truth and understanding',
      '"Living tissue" - blurs boundary between paper and human skin',
      '"Borderlines" - paper maps controlling real human lives',
      'Conditional language ("If buildings were paper") - imagining a fragile world',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Nine regular quatrains followed by a single-line final stanza - the broken pattern enacts the poem's theme that structures are fragile.",
    keyPoints: [
      'Nine quatrains, then one line alone - the pattern breaks, mirroring the fragility theme',
      'Enjambment across stanza breaks - ideas flow across boundaries like paper',
      'Single-line final stanza - isolation emphasises the personal, intimate conclusion',
      "No regular rhyme scheme - reflects the poem's questioning of fixed structures",
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
        name="Tissue by Imtiaz Dharker - Analysis & Annotations"
        description="Line-by-line analysis of Tissue with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* Breadcrumb / back */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
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
        Books, 2006). Rights held by Bloodaxe Books (bloodaxebooks.com). The poem is paraphrased
        line by line here, not printed. Short quotations are reproduced under the fair dealing
        provision of the CDPA 1988 for criticism and review. The full text is printed in your AQA
        Power and Conflict anthology.
      </p>
    </div>
  )
}
