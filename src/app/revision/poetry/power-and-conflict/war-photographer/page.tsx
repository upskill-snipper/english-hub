import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompareArrows } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Metadata ──────────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'War Photographer -- Carol Ann Duffy | The English Hub',
    description:
      'Interactive GCSE study guide for War Photographer by Carol Ann Duffy. Annotations, key quotes, language analysis, form & structure, and comparison poems.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/war-photographer',
  },
  title: 'War Photographer -- Carol Ann Duffy | The English Hub',
  description:
    'Interactive GCSE study guide for War Photographer by Carol Ann Duffy. Annotations, key quotes, language analysis, form & structure, and comparison poems.',
}

/* ── Poem data ─────────────────────────────────────────────────── */

const WAR_PHOTOGRAPHER: PoemData = {
  title: 'War Photographer',
  poet: 'Carol Ann Duffy',

  lines: [
    // Stanza 1
    {
      text: 'In his darkroom he is finally alone',
      annotations: [
        {
          type: 'Imagery',
          note: '"Darkroom" has a dual meaning: the literal photographic developing room and the darkness/horror of what he has witnessed.',
          color: '#3b82f6',
        },
        {
          type: 'Tone',
          note: '"Finally alone" suggests relief — he is away from the war zones at last, yet isolation also implies emotional distance.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'with spools of suffering set out in ordered rows.',
      annotations: [
        {
          type: 'Sibilance',
          note: 'The repeated "s" sounds in "spools of suffering set" create a soft, solemn tone, almost like a whispered prayer.',
          color: '#10b981',
        },
        {
          type: 'Metaphor',
          note: '"Spools of suffering" — the film rolls contain images of real human pain; the suffering is literally wound up inside them.',
          color: '#f59e0b',
        },
        {
          type: 'Contrast',
          note: '"Ordered rows" contrasts with the chaos of war — the photographer imposes order on something inherently disordered.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The only light is red and softly glows,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'Red light suggests danger, blood, and war — the developing room mirrors the battlefield.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'as though this were a church and he',
      annotations: [
        {
          type: 'Simile / Religious imagery',
          note: 'Comparing the darkroom to a church elevates the act of developing photographs to something sacred and reverential.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'a priest preparing to intone a Mass.',
      annotations: [
        {
          type: 'Religious imagery',
          note: 'The photographer becomes a priest-figure, performing a ritual. "Intone" means to chant — suggesting solemnity and repetition.',
          color: '#3b82f6',
        },
        {
          type: 'Semantic field',
          note: 'Part of a sustained semantic field of religion: church, priest, Mass — implying the work has a moral, almost holy duty.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Belfast. Beirut. Phnom Penh. All flesh is grass.',
      annotations: [
        {
          type: 'Listing of war zones',
          note: 'Three asyndetic place-names locate the photographer\'s assignments. The Biblical allusion "All flesh is grass" (Isaiah 40:6) reduces all human life to something fragile and short-lived.',
          color: '#ef4444',
        },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 2
    {
      text: 'He has a job to do. Solutions slop in trays',
      annotations: [
        {
          type: 'Double meaning',
          note: '"Solutions" means both the photographic chemicals and, ironically, answers — answers that do not exist for what he has witnessed.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'beneath his hands, which did not tremble then',
    },
    {
      text: 'though seem to now. Rural England. Home again',
      annotations: [
        {
          type: 'Contrast',
          note: '"Rural England" is capitalised like a proper noun, emphasising the vast gap between the peaceful English countryside and the war zones he photographs.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'to ordinary pain which simple weather can dispel,',
    },
    {
      text: "to fields which don't explode beneath the feet",
      annotations: [
        {
          type: 'Contrast',
          note: 'English fields vs. minefields — the mundane safety of home is juxtaposed against the lethal reality of conflict zones.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'of running children in a nightmare heat.',
      annotations: [
        {
          type: 'Emotive language',
          note: '"Running children" and "nightmare heat" evoke the iconic images of children fleeing napalm attacks, referencing real war photography.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "Something is happening. A stranger's features",
      annotations: [
        {
          type: 'Short sentence',
          note: '"Something is happening" is deliberately vague and understated, building suspense as the photograph develops.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'faintly start to twist before his eyes,',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Twist" suggests pain and distortion — the image forming on the paper echoes the suffering of the subject.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'a half-formed ghost. He remembers the cries',
      annotations: [
        {
          type: 'Metaphor',
          note: '"Half-formed ghost" — the developing image is spectral, suggesting the subject may already be dead. The photograph is a haunting.',
          color: '#f59e0b',
        },
        {
          type: 'Caesura',
          note: "The full stop mid-line creates a pause that mirrors the photographer's sudden, involuntary memory of the cries he heard.",
          color: '#8b5cf6',
        },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 3
    {
      text: "of this man's wife, and how he sought approval",
    },
    {
      text: 'without words to do what someone must',
      annotations: [
        {
          type: 'Tone',
          note: '"Without words" highlights the language barrier, but also the inadequacy of language in the face of such suffering.',
          color: '#8b5cf6',
        },
        {
          type: 'Moral duty',
          note: '"Someone must" — a sense of obligation and moral responsibility; if not him, then who will document this suffering?',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'and how the blood stained into foreign dust.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Blood stained into foreign dust" — a visceral, permanent image. The blood becomes part of the landscape, absorbed and forgotten by the wider world.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'A hundred agonies in black-and-white',
      annotations: [
        {
          type: 'Hyperbole / Metonymy',
          note: '"A hundred agonies" reduces immense human suffering to a number. "Black-and-white" refers to newspaper photographs — stripping colour strips away humanity.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'from which his editor will pick out five or six',
      annotations: [
        {
          type: 'Contrast / Criticism',
          note: 'Of a hundred images of suffering, only five or six will be published — Duffy criticises how the media reduces and filters human pain.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: "for Sunday's supplement. The reader's eyeballs prick",
      annotations: [
        {
          type: 'Contrast',
          note: '"Sunday\'s supplement" is casual, leisurely reading — trivialising the suffering depicted. The alliterative "reader\'s" and "prick" is dismissive.',
          color: '#ef4444',
        },
        {
          type: 'Verb choice',
          note: '"Prick" suggests only a momentary, superficial emotional response — tears that barely form before they are forgotten.',
          color: '#f59e0b',
        },
      ],
    },

    // Blank line (stanza break)
    { text: '' },

    // Stanza 4
    {
      text: 'with tears between the bath and pre-lunch beers.',
      annotations: [
        {
          type: 'Bathos / Contrast',
          note: 'The juxtaposition of tears with "bath and pre-lunch beers" highlights the comfortable, indifferent lifestyle of the reader. Their sadness is fleeting and shallow.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'From the aeroplane he stares impassively at where',
    },
    {
      text: 'he earns his living and they do not care.',
      annotations: [
        {
          type: 'Final couplet',
          note: 'The closing rhyme ("where" / "care") delivers a blunt, bitter conclusion. "They" is ambiguous — it could mean the public, the editors, or both.',
          color: '#f59e0b',
        },
        {
          type: 'Tone',
          note: '"Do not care" is stark and accusatory — Duffy indicts society for its apathy towards the suffering the photographer documents.',
          color: '#8b5cf6',
        },
      ],
    },
    // VERIFY: stanza ordering in this file was scrambled — 'Solutions slop in trays beneath his hands, / which did not tremble then though seem to now. / Rural England. Home again' originally appears in STANZA 2, not stanza 4. Lines moved to their correct location. The actual stanza 4 ends after 'where / he earns his living and they do not care.'
  ],

  context: `<p><strong>Carol Ann Duffy</strong> (born 1955) served as the UK Poet Laureate from 2009 to 2019. She is known for giving voice to those on the margins and for exploring how language shapes power and identity.</p>
<p><strong>War Photographer</strong> was inspired by Duffy's friendship with war photographers, particularly <strong>Don McCullin</strong>, who documented conflicts in Vietnam, Biafra, and Northern Ireland. McCullin spoke about the moral dilemma of photographing suffering without being able to help.</p>
<p>The poem explores the <strong>tension between documenting suffering and the public's indifference</strong> to it. The photographer feels a moral duty to bear witness, yet knows his images will be consumed casually alongside Sunday supplements and quickly forgotten.</p>
<p>Duffy raises questions about <strong>voyeurism and guilt</strong>: are we complicit in suffering when we look at images of war without taking action? The poem criticises the comfortable distance between <strong>Rural England</strong> and the war zones from which the photographs come.</p>
<p>Written in the context of late twentieth-century media culture, the poem remains powerfully relevant in the age of social media, where images of conflict are even more ubiquitous — and even more quickly scrolled past.</p>`,

  contextAr: `<p><strong>Carol Ann Duffy</strong> (مواليد 1955) شغلت منصب Poet Laureate في المملكة المتحدة من 2009 إلى 2019. معروفة إنها تعطي صوت لأهل الهامش، وتستكشف كيف اللغة تشكّل السلطة والهوية.</p>
<p>قصيدة <strong>"War Photographer"</strong> استلهمتها Duffy من صداقتها مع مصوّرين حربيين، خصوصاً <strong>Don McCullin</strong>، اللي وثّق الصراعات في Vietnam وBiafra وأيرلندا الشمالية. McCullin تكلّم عن المعضلة الأخلاقية في تصوير المعاناة وهو ما يقدر يقدّم أي مساعدة.</p>
<p>القصيدة تستكشف <strong>التوتّر بين توثيق المعاناة ولا مبالاة الجمهور</strong> تجاهها. المصوّر يحسّ بواجب أخلاقي إنه يشهد على اللي يصير، بس يدري إن صوره راح تُستهلك بشكل عابر مع ملاحق يوم الأحد وتُنسى بسرعة.</p>
<p>Duffy تطرح أسئلة عن <strong>التلصّص والذنب</strong>: هل إحنا شركاء في المعاناة لمّا نشوف صور الحرب وما ناخذ أي موقف؟ القصيدة تنتقد المسافة المريحة بين <strong>Rural England</strong> ومناطق الحرب اللي تجي منها الصور.</p>
<p>كُتبت القصيدة في سياق ثقافة الإعلام في أواخر القرن العشرين، بس تظلّ ذات صلة قوية في زمن الـsocial media، حيث صور الصراع صارت أكثر انتشار — وأسرع في إنها تُتجاوز بحركة scroll.</p>`,

  summary: `The poem follows a war photographer as he develops his film in his darkroom after returning to England from a conflict zone. The opening stanza establishes a reverential, church-like atmosphere as he processes the "spools of suffering."

In stanza two, the contrast between safe English fields and deadly minefields abroad is drawn sharply. As a photograph develops, a face emerges — a "half-formed ghost" — triggering memories of the man's wife and the sounds of grief.

Stanza three reveals the editorial process: a hundred photographs of agony will be reduced to five or six for a newspaper supplement. Readers will feel a brief prick of emotion before returning to their comfortable lives.

The final stanza completes the cycle. The photographer boards a plane, heading back to another war zone, staring down "impassively" at the country whose people "do not care." The poem ends with bitter resignation — his work is a loop of witnessing, recording, and being ignored.`,

  summaryAr: `القصيدة تتابع مصوّر حربي وهو يحمّض أفلامه في غرفته المظلمة (darkroom) بعد ما رجع لإنجلترا من منطقة صراع. المقطع الافتتاحي يثبّت جو مقدّس يشبه جو الكنيسة، وهو يعالج "spools of suffering".

في المقطع الثاني، التضاد بين حقول إنجلترا الآمنة وحقول الألغام القاتلة في الخارج يصير حاد وواضح. وبينما تظهر صورة، يبان وجه — "half-formed ghost" — وهالشي يفجّر ذكريات زوجة الرجل وأصوات الحزن.

المقطع الثالث يكشف العملية التحريرية: من مئة صورة معاناة، راح يطلع منها خمس أو ست بس لملحق الصحيفة. القرّاء راح يحسّون بنخزة عاطفية بسيطة قبل ما يرجعون لحياتهم المريحة.

المقطع الأخير يكمّل الدائرة. المصوّر يصعد الطائرة، راجع لمنطقة حرب ثانية، ينظر للأسفل "impassively" على البلد اللي شعبه "do not care". القصيدة تنتهي بتسليم مرير — شغله حلقة متواصلة من الشهادة والتسجيل والتجاهل.`,

  formAndStructure: `FORM: Four regular sestets (six-line stanzas). The regularity of the form mirrors the photographer's attempt to impose order on the chaos of war — just as he arranges his "spools of suffering" in "ordered rows."

RHYME SCHEME: Roughly ABBCDD with some half-rhymes (e.g. "rows"/"glows", "cries"/"eyes"). The near-rhymes suggest things are not quite right — an undercurrent of unease beneath the surface control.

METRE: The poem uses a loose iambic pentameter, giving it a measured, controlled rhythm that reflects the photographer's professional composure — even as the content is deeply emotional.

TENSE: The poem moves between present tense (the darkroom) and past tense (memories of the war zone), blurring the boundary between the two worlds the photographer inhabits.

ENJAMBMENT: Used throughout to create a flowing, continuous movement — mirroring the developing process and the photographer's stream of consciousness.

CYCLICAL STRUCTURE: "Rural England" appears in stanza one and is echoed in the final stanza, creating a sense of entrapment. The photographer is caught in a never-ending cycle of travel, witness, develop, and be ignored.`,

  formAndStructureAr: `الشكل (FORM): أربع sestets منتظمة (مقاطع من ستة أبيات). انتظام الشكل يعكس محاولة المصوّر إنه يفرض نظام على فوضى الحرب — تماماً مثل ما يرتّب "spools of suffering" في "ordered rows".

نظام القافية (RHYME SCHEME): تقريباً ABBCDD مع بعض half-rhymes (مثل "rows"/"glows" و"cries"/"eyes"). القوافي اللي تكاد تتطابق بس ما تتطابق توحي إن في شي مو على ما يرام — تيار قلق خفي تحت السيطرة الظاهرية.

الوزن (METRE): القصيدة تستخدم iambic pentameter مرن، يعطيها إيقاع مدروس ومنضبط يعكس رباطة جأش المصوّر المهنية — رغم إن المحتوى عاطفي جداً.

الزمن (TENSE): القصيدة تتنقّل بين زمن المضارع (الـdarkroom) والماضي (ذكريات منطقة الحرب)، وتشوّش الحد الفاصل بين العالمين اللي يعيش بينهم المصوّر.

الـENJAMBMENT: مستخدم عبر القصيدة كلها عشان يخلق حركة انسيابية متواصلة — تعكس عملية التحميض وتيّار الوعي عند المصوّر.

البنية الدائرية (CYCLICAL STRUCTURE): عبارة "Rural England" تطلع في المقطع الأول، ويتردّد صداها في المقطع الأخير، وهالشي يخلق إحساس بالحصار. المصوّر عالق في دورة ما تنتهي من السفر والشهادة والتحميض والتجاهل.`,

  keyQuotes: [
    {
      quote: 'In his darkroom he is finally alone',
      analysis:
        'The opening line establishes isolation and relief. "Finally" implies he has been surrounded by chaos and suffering — the darkroom offers solitude but also forces him to confront what he has seen.',
      themes: ['Isolation', 'Guilt and responsibility', 'Reality of conflict'],
      analysisAr:
        'البيت الافتتاحي يثبّت العزلة والراحة في نفس الوقت. كلمة "Finally" توحي إنه كان محاط بالفوضى والمعاناة — والـdarkroom تعطيه خلوة، بس بنفس الوقت تجبره إنه يواجه اللي شافه.',
      themesAr: ['العزلة', 'الذنب والمسؤولية', 'واقع الصراع'],
    },
    {
      quote: 'spools of suffering set out in ordered rows',
      analysis:
        'Sibilance creates a solemn, hushed tone. The metaphor of "spools of suffering" compresses immense human pain into a small, manageable object. "Ordered rows" contrasts with the disorder of war — the photographer imposes structure on chaos.',
      themes: ['Reality of conflict', 'Power of art', 'Control vs chaos'],
      analysisAr:
        'الـsibilance تخلق نبرة مهيبة ومكتومة. والاستعارة في "spools of suffering" تختصر ألم بشري هائل في غرض صغير يمكن التحكّم فيه. عبارة "ordered rows" تتناقض مع فوضى الحرب — المصوّر يفرض بنية على الفوضى.',
      themesAr: ['واقع الصراع', 'قوة الفن', 'النظام مقابل الفوضى'],
    },
    {
      quote: 'a half-formed ghost',
      analysis:
        'The developing photograph is compared to a ghost — spectral, haunting, and suggesting death. "Half-formed" implies the subject is between life and death, between visibility and invisibility, just as the public half-sees and half-ignores these images.',
      themes: ['Memory and reflection', 'Reality of conflict', 'Death'],
      analysisAr:
        'الصورة وهي تتحمّض تُشبّه بشبح — طيفي، يلاحق صاحبه، ويوحي بالموت. عبارة "half-formed" تلمّح إن الشخص في حالة بين الحياة والموت، بين الظهور والاختفاء، تماماً مثل ما الجمهور يشوف هالصور نص شوفة ويتجاهلها نص تجاهلة.',
      themesAr: ['الذاكرة والتأمّل', 'واقع الصراع', 'الموت'],
    },
    {
      quote: 'running children in a nightmare heat',
      analysis:
        'An allusion to iconic war photographs such as Nick Ut\'s "Napalm Girl." The image of running children is universally emotive, and "nightmare heat" blends the literal heat of conflict with the surreal horror of a bad dream.',
      themes: ['Reality of conflict', 'Suffering and oppression', 'Innocence'],
      analysisAr:
        'إشارة لصور حربية أيقونية مثل "Napalm Girl" لـNick Ut. صورة الأطفال وهم يركضون مؤثرة بشكل عالمي، و"nightmare heat" تمزج بين الحرارة الحرفية في منطقة الصراع والرعب السوريالي اللي يجي في كابوس.',
      themesAr: ['واقع الصراع', 'المعاناة والقهر', 'البراءة'],
    },
    {
      quote: 'A hundred agonies in black-and-white',
      analysis:
        'Each photograph represents an individual\'s suffering, yet they are reduced to a mass — "a hundred agonies." "Black-and-white" refers to newspaper print but also to the binary simplification of complex human experiences. The media strips away nuance.',
      themes: ['Media and indifference', 'Suffering and oppression', 'Guilt and responsibility'],
      analysisAr:
        'كل صورة تمثّل معاناة فرد واحد، بس كلها تتلخّص في كتلة واحدة — "a hundred agonies". عبارة "black-and-white" تشير لطباعة الصحف، وكذلك للتبسيط الثنائي لتجارب إنسانية معقّدة. الإعلام يجرّد المعاناة من تفاصيلها.',
      themesAr: ['الإعلام واللامبالاة', 'المعاناة والقهر', 'الذنب والمسؤولية'],
    },
    {
      quote: 'from which his editor will pick out five or six',
      analysis:
        'Of a hundred images of agony, only a handful will be published. Duffy critiques the editorial process that filters and reduces human suffering to what will sell newspapers. The casual tone of "pick out" is deliberately dismissive.',
      themes: ['Media and indifference', 'Power of art', 'Guilt and responsibility'],
      analysisAr:
        'من بين مئة صورة معاناة، خمس أو ست بس راح ينشرونها. Duffy تنتقد العملية التحريرية اللي تفلتر المعاناة البشرية وتختزلها إلى اللي يبيع الصحف. النبرة العابرة في "pick out" مقصودة، وفيها استخفاف.',
      themesAr: ['الإعلام واللامبالاة', 'قوة الفن', 'الذنب والمسؤولية'],
    },
    {
      quote: "The reader's eyeballs prick / with tears between the bath and pre-lunch beers",
      analysis:
        'The enjambment across the stanza break emphasises the fleeting nature of the reader\'s emotional response. "Prick" suggests tears that barely form. The bathos of "bath and pre-lunch beers" highlights the comfortable indifference of the British public.',
      themes: ['Media and indifference', 'Guilt and responsibility', 'Contrast'],
      analysisAr:
        'الـenjambment عبر فاصل المقطع يأكّد على إن استجابة القارئ العاطفية عابرة. كلمة "prick" توحي بدموع تكاد تتشكّل بس ما تكتمل. والـbathos في "bath and pre-lunch beers" تبرز اللامبالاة المريحة عند الجمهور البريطاني.',
      themesAr: ['الإعلام واللامبالاة', 'الذنب والمسؤولية', 'التضاد'],
    },
    {
      quote: 'he earns his living and they do not care',
      analysis:
        'The blunt, monosyllabic final clause is devastating in its simplicity. "They" is deliberately ambiguous — it could refer to the public, the editors, or society at large. The photographer is trapped: he profits from suffering, yet his audience is apathetic.',
      themes: ['Guilt and responsibility', 'Media and indifference', 'Isolation'],
      analysisAr:
        'الجملة الختامية الفجّة، أحادية المقطع، مدمّرة في بساطتها. كلمة "they" غامضة بشكل مقصود — يمكن تشير للجمهور، أو للمحرّرين، أو للمجتمع كله. المصوّر عالق: هو يكسب رزقه من المعاناة، بس جمهوره غير مبالي.',
      themesAr: ['الذنب والمسؤولية', 'الإعلام واللامبالاة', 'العزلة'],
    },
  ],

  languageDevices: [
    {
      device: 'Religious imagery (semantic field)',
      example: 'as though this were a church and he / a priest preparing to intone a Mass',
      effect:
        'The sustained religious imagery elevates the photographer\'s work to something sacred. Developing photographs becomes a solemn ritual — a "Mass" for the dead. This sanctifies his role as a witness while highlighting the moral weight of his task.',
      lineRef: 3,
      effectAr:
        'الحقل الدلالي الديني المتواصل يرفع شغل المصوّر إلى مستوى المقدّس. تحميض الصور يصير طقس مهيب — "Mass" للموتى. هالشي يقدّس دوره كشاهد، ويبرز في نفس الوقت الثقل الأخلاقي اللي يحمله.',
    },
    {
      device: 'Sibilance',
      example: 'spools of suffering set out',
      effect:
        'The soft, repeated "s" sounds create a hushed, reverent tone — as though the photographer is whispering in his darkroom-church. It contrasts with the violence of the content, creating an uneasy tension between form and meaning.',
      lineRef: 1,
      effectAr:
        'صوت "s" الناعم المتكرّر يخلق نبرة مكتومة وموقّرة — كأن المصوّر يهمس في كنيسته الـdarkroom. هالشي يتناقض مع عنف المحتوى، ويخلق توتّر مقلق بين الشكل والمعنى.',
    },
    {
      device: 'Contrast / Juxtaposition',
      example:
        "fields which don't explode beneath the feet / of running children in a nightmare heat",
      effect:
        'Duffy sharply contrasts the safety of English fields with the minefields of war zones. The juxtaposition forces the reader to confront the vast gap between their comfortable existence and the reality of conflict.',
      lineRef: 8,
      effectAr:
        'Duffy تقابل بشكل حاد بين أمان الحقول الإنجليزية وحقول الألغام في مناطق الحرب. الـjuxtaposition تجبر القارئ إنه يواجه الهوّة الواسعة بين وجوده المريح وواقع الصراع.',
    },
    {
      device: 'Metaphor',
      example: 'a half-formed ghost',
      effect:
        'The developing photograph becomes a ghostly apparition — blurring the line between image and person, life and death. It suggests the subjects of war photography are spectral presences who haunt the photographer.',
      lineRef: 12,
      effectAr:
        'الصورة وهي تتحمّض تتحوّل لطيف شبحي — وتطمس الحد بين الصورة والشخص، بين الحياة والموت. هالشي يوحي إن أشخاص الصور الحربية حضور طيفي يلاحق المصوّر.',
    },
    {
      device: 'Emotive language',
      example: 'blood stained into foreign dust',
      effect:
        'The visceral image of blood seeping into soil makes the violence tangible and permanent. "Foreign" reminds us of the distance — both geographical and emotional — between the reader and the suffering.',
      lineRef: 16,
      effectAr:
        'صورة الدم وهو يتسرّب في التراب صورة جسدية تخلّي العنف ملموس ودائم. وكلمة "foreign" تذكّرنا بالمسافة — الجغرافية والعاطفية — بين القارئ والمعاناة.',
    },
    {
      device: 'Double meaning / Ambiguity',
      example: 'Solutions slop in trays beneath his hands',
      effect:
        '"Solutions" refers literally to the photographic chemicals but also ironically to answers or remedies for the suffering he documents — remedies that do not exist. The word carries a bitter dual weight.',
      lineRef: 22,
      effectAr:
        'كلمة "solutions" تشير حرفياً للمواد الكيميائية اللي يستخدمها في التحميض، بس بسخرية تشير كذلك لـ"حلول" أو علاجات للمعاناة اللي يوثّقها — علاجات ما لها وجود. الكلمة تحمل ثقل مزدوج مرير.',
    },
    {
      device: 'Bathos',
      example: 'tears between the bath and pre-lunch beers',
      effect:
        'The deflation from genuine tears to "bath and pre-lunch beers" is deliberately jarring. It mocks the superficial emotional engagement of the public, who consume images of suffering alongside everyday leisure.',
      lineRef: 20,
      effectAr:
        'الهبوط من دموع حقيقية إلى "bath and pre-lunch beers" مقصود ومزعج. وهو يسخر من التفاعل العاطفي السطحي عند الجمهور، اللي يستهلك صور المعاناة جنب أنشطة الترفيه اليومية.',
    },
    {
      device: 'Cyclical structure / Repetition',
      example: 'Rural England (stanza 1 and stanza 4)',
      effect:
        'The repetition of "Rural England" bookends the poem, creating a circular structure. The photographer is trapped in an endless cycle of witnessing horror, returning to indifference, and leaving again. There is no resolution.',
      lineRef: 24,
      effectAr:
        'تكرار "Rural England" يحيط القصيدة من طرفيها، ويخلق بنية دائرية. المصوّر محصور في دورة ما تنتهي: يشهد الرعب، يرجع للامبالاة، ويرحل مرة ثانية. ما في حل ولا خاتمة.',
    },
  ],
}

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Reality of conflict', color: 'bg-red-500/15 text-red-400' },
  { label: 'Guilt and responsibility', color: 'bg-amber-500/15 text-clay-600' },
  { label: 'Media and indifference', color: 'bg-blue-500/15 text-blue-400' },
  { label: 'Suffering and oppression', color: 'bg-rose-500/15 text-rose-400' },
  { label: 'Memory and reflection', color: 'bg-purple-500/15 text-purple-400' },
  { label: 'Isolation', color: 'bg-slate-500/15 text-slate-400' },
  { label: 'Power of art', color: 'bg-emerald-500/15 text-emerald-400' },
]

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'wp-1',
    question: 'Where is the war photographer at the start of the poem?',
    type: 'multiple-choice',
    options: [
      'In a warzone taking photos',
      'In his darkroom in England, developing photographs',
      'At a newspaper office',
      'In a hospital',
    ],
    correctIndex: 1,
    explanation:
      'The poem opens with the photographer "finally alone" in his darkroom, developing film from his latest assignment. The darkroom becomes a metaphorical space between the worlds of war and peace.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'wp-2',
    question: 'What does Duffy compare the darkroom to?',
    type: 'multiple-choice',
    options: [
      'A prison cell',
      'A church — with the photographer as a priest performing a sacred duty',
      'A battlefield',
      'A classroom',
    ],
    correctIndex: 1,
    explanation:
      'The darkroom is compared to a church, with the photographer as "a priest preparing to intone a Mass." This elevates his work to something sacred and reverential — bearing witness to suffering is a moral duty.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'wp-3',
    question: 'What does "spools of suffering set out in ordered rows" suggest?',
    type: 'multiple-choice',
    options: [
      'The photographer enjoys organising his equipment',
      'Real human suffering has been captured on film and can be ordered and filed — a disturbing contrast',
      'The film is damaged and needs repair',
      'The darkroom is messy',
    ],
    correctIndex: 1,
    explanation:
      '"Spools of suffering" shows that real pain has been wound onto film. The contrast between the "ordered rows" and the chaos of war highlights the tension between documenting suffering and containing it.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'wp-4',
    question: 'What is the main theme of War Photographer?',
    type: 'multiple-choice',
    options: [
      'The excitement of photojournalism',
      "The moral dilemma of witnessing suffering and the public's indifference to war",
      'The beauty of black and white photography',
      "The photographer's love of travel",
    ],
    correctIndex: 1,
    explanation:
      "The poem explores the photographer's moral burden: he witnesses terrible suffering, but the public in \"Rural England\" barely engages with his images. Duffy critiques society's comfortable indifference to others' pain.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'wp-5',
    question: 'What does "fields which don\'t explode beneath the feet" highlight?',
    type: 'multiple-choice',
    options: [
      'England has good farmland',
      'The jarring contrast between the safety of England and the lethal danger of war zones',
      'The photographer enjoys walking in fields',
      'English fields are better maintained',
    ],
    correctIndex: 1,
    explanation:
      'This line juxtaposes the safety of English countryside with the horror of minefields. The simple, understated comparison makes the reader confront the vast gap between their comfortable life and the reality of conflict zones.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'wp-6',
    question: "What happens to the photograph's emotional impact in the final stanza?",
    type: 'multiple-choice',
    options: [
      'It inspires the public to take action',
      'The editor selects only the images that will sell, and the public\'s sympathy is fleeting — "they do not care"',
      'The photographs are exhibited in a gallery',
      'The photographer destroys them',
    ],
    correctIndex: 1,
    explanation:
      'In the final stanza, the editor picks a few images to publish. Readers may feel a "prick" of emotion over their Sunday supplement, but their sympathy is brief and surface-level — they return to their comfortable lives.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'wp-7',
    question:
      'What is the effect of the regular form — four six-line stanzas with a consistent rhyme scheme?',
    type: 'multiple-choice',
    options: [
      'It makes the poem boring',
      "The controlled, ordered form mirrors the photographer's attempt to impose order on the chaos of war",
      'It reflects the randomness of war',
      "It was Duffy's only available form",
    ],
    correctIndex: 1,
    explanation:
      'The neat, ordered stanzas mirror the photographer\'s methodical process of developing images. Just as he organises suffering into "ordered rows", the form imposes structure on emotional chaos.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'wp-8',
    question: 'Who is Carol Ann Duffy, and what inspired this poem?',
    type: 'multiple-choice',
    options: [
      'A war reporter who served in Iraq',
      'A Poet Laureate inspired by the work of photojournalists like Don McCullin who documented conflict',
      'A photographer who wrote poetry as a hobby',
      'A war historian',
    ],
    correctIndex: 1,
    explanation:
      'Carol Ann Duffy (b. 1955) became the UK Poet Laureate in 2009. The poem was inspired by the work of photojournalists like Don McCullin, who documented the horrors of conflict in Vietnam, Biafra, and Northern Ireland.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'wp-9',
    question:
      'How does the sibilance in "spools of suffering set out in ordered rows" contribute to the poem\'s tone?',
    type: 'multiple-choice',
    options: [
      'It creates an aggressive, angry tone',
      'The soft, repeated "s" sounds create a hushed, reverential tone — like a whispered prayer, reinforcing the church simile',
      'It imitates the sound of camera clicks',
      'It makes the line difficult to read',
    ],
    correctIndex: 1,
    explanation:
      'The sibilant "s" sounds create a soft, solemn, almost sacred atmosphere — consistent with the comparison of the darkroom to a church. The photographer approaches his work with the quiet reverence of a priest.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'wp-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with War Photographer for comparing responses to suffering?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'Remains by Simon Armitage',
      'The Prelude by Wordsworth',
      'Storm on the Island by Heaney',
    ],
    correctIndex: 1,
    explanation:
      'Both War Photographer and Remains explore the lasting psychological impact of witnessing violence. The photographer observes suffering; the soldier in Remains directly causes death. Both are haunted by what they have experienced.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      "War Photographer explores the moral burden of witnessing suffering, the contrast between war zones and comfortable England, and society's indifference to distant conflict.",
    keyPoints: [
      'Moral duty vs public indifference — the photographer bears witness, but the public does not care',
      'Contrast between England and war zones — "fields which don\'t explode beneath the feet"',
      'The inadequacy of images — photographs cannot fully convey the horror',
      'Emotional numbness — the photographer must suppress his feelings to do his job',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Duffy uses religious imagery, sibilance, contrast, and carefully controlled language to convey the tension between professional duty and emotional devastation.',
    keyPoints: [
      'Religious imagery: darkroom as "church", photographer as "priest" — sacred duty',
      '"Spools of suffering set out in ordered rows" — sibilance and metaphor',
      '"Rural England" vs war zones — vast contrast in safety and comfort',
      '"A hundred agonies in black-and-white" — suffering reduced to newspaper images',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Four regular six-line stanzas with a controlled rhyme scheme — the ordered form mirrors the photographer's attempt to impose structure on chaos.",
    keyPoints: [
      'Regular stanzas — orderly form contrasts with chaotic subject matter',
      'Progression: darkroom (1) --> memories intrude (2-3) --> public indifference (4)',
      'Enjambment at key moments creates urgency and emotional overflow',
      'Final stanza shifts focus from photographer to apathetic public',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Duffy present the impact of conflict on the war photographer?',
  'Compare how the effects of conflict are presented in War Photographer and one other poem from the anthology.',
  'How does Duffy use language and structure to convey the contrast between war and everyday life?',
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    link: '/revision/poetry/power-and-conflict/remains',
    shared:
      'Both explore the psychological aftermath of witnessing death and violence. The soldier in Remains is haunted by guilt over a killing; the photographer is haunted by the suffering he has documented. Both use a first/third-person perspective to show how traumatic memories persist long after the event.',
    themes: ['Guilt and responsibility', 'Reality of conflict', 'Memory and reflection'],
  },
  {
    poem: 'Poppies',
    poet: 'Jane Weir',
    link: '/revision/poetry/power-and-conflict/poppies',
    shared:
      'Both poems present civilian perspectives on conflict rather than the battlefield itself. The mother in Poppies experiences war through loss and memory; the photographer experiences it through his lens. Both explore the emotional distance between those at home in England and those affected by war.',
    themes: ['Loss and grief', 'Memory and reflection', 'Media and indifference'],
  },
  {
    poem: 'Tissue',
    poet: 'Imtiaz Dharker',
    link: '/revision/poetry/power-and-conflict/tissue',
    shared:
      'Both poems consider how recording and documentation shape our understanding of human experience. In Tissue, paper records control lives; in War Photographer, photographs attempt to capture and communicate suffering. Both question whether such records can truly convey the reality they represent.',
    themes: ['Power of art', 'Reality of conflict', 'Identity and belonging'],
  },
]

/* ── Page ───────────────────────────────────────────────────────── */

export default function WarPhotographerPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="War Photographer by Carol Ann Duffy — Analysis & Annotations"
        description="Line-by-line analysis of War Photographer with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'War Photographer',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/war-photographer',
          },
        ]}
      />
      {/* ── Navigation ────────────────────────────────────────── */}
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">War Photographer</h1>
            <p className="text-body-sm text-muted-foreground">
              Carol Ann Duffy &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Interactive poem viewer ───────────────────────────── */}
      <StudyTools
        textName="War Photographer"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="War Photographer"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={WAR_PHOTOGRAPHER} />

      {/* ── Theme tokens ──────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground mb-3">Key Themes</h2>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((t) => (
            <span
              key={t.label}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Comparison poems ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompareArrows className="size-5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare With</h2>
        </div>

        <div className="space-y-4">
          {COMPARISONS.map((c) => (
            <div key={c.poem} className="rounded-lg border border-border/60 bg-muted/30 p-4">
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">{c.poem}</span>
                  <span className="text-sm text-muted-foreground ml-1.5">by {c.poet}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary text-xs"
                  render={<Link href={c.link} />}
                >
                  Study poem
                </Button>
              </div>

              <p className="text-sm text-card-foreground leading-relaxed mb-3">{c.shared}</p>

              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> &copy; Picador / Pan Macmillan and Rogers Coleridge &amp;
        White on behalf of Carol Ann Duffy (b. 1955). Quotations from &ldquo;War Photographer&rdquo;
        are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation). For
        full text, students should consult the board-licensed AQA Power &amp; Conflict anthology or
        Duffy&rsquo;s collection <em>Standing Female Nude</em> (1985).
      </p>
    </div>
  )
}
