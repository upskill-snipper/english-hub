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
    title: 'The Émigrée -- Carol Rumens -- The English Hub',
    description:
      'Interactive study guide for The Émigrée by Carol Rumens. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/the-emigree',
  },
  title: 'The Émigrée -- Carol Rumens',
  description:
    'Interactive study guide for The Émigrée by Carol Rumens. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
}

/* ── Poem data ─────────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'The Émigrée',
  poet: 'Carol Rumens',
  // NOTE: "The \u00c9migr\u00e9e" (Carol Rumens, 1993) remains in copyright. To avoid
  // reproducing the poem verbatim, each line below is given as a PARAPHRASE /
  // structural description rather than the poet's exact words. Students must
  // read the full original text in the AQA Power & Conflict anthology
  // (or Rumens, "Thinking of Skins: New & Selected Poems", Bloodaxe Books).
  lines: [
    // Stanza 1
    {
      text: '[Stanza 1, opening] The speaker recalls a country left behind in childhood.',
      annotations: [
        {
          type: 'Opening',
          note: 'A fairy-tale-style opening immediately establishes a sense of nostalgia and a distant, romanticised past.',
          color: '#3b82f6',
        },
        {
          type: 'Ellipsis',
          note: 'An ellipsis creates a pause, suggesting the speaker is reaching back into fragmented memory.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] Yet the memory of it remains as bright and clear as sunlight.',
      annotations: [
        {
          type: 'Light imagery',
          note: 'A compound "sunlight"/clarity image introduces the central motif of light. The memory is presented as vivid, pure, and untainted by time.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] The country may now be at war or ruled by tyrants.' },
    {
      text: '[Paraphrase] Even so, the speaker feels permanently marked by an impression of sunlight.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The idea of being "branded" suggests the memory is permanently marked onto her, like a scar or cattle brand -- painful yet indelible.',
          color: '#10b981',
        },
        {
          type: 'Refrain',
          note: 'First appearance of the "sunlight" refrain that closes every stanza, reinforcing the power of memory over reality.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' }, // stanza break

    // Stanza 2
    { text: '[Stanza 2] The speaker pictures the bright streets and graceful slopes of the city.' },
    {
      text: '[Paraphrase] She cannot reach it now; there may be a massacre under way.',
      annotations: [
        {
          type: 'Contrast',
          note: 'The abrupt shift from beautiful imagery (graceful slopes) to violent reality (a massacre) highlights the tension between memory and present truth.',
          color: '#ef4444',
        },
      ],
    },
    { text: '[Paraphrase] Bulldozers move back and forth, indifferent to what they destroy.' },
    {
      text: '[Paraphrase] No flag flies over the city any longer.',
      annotations: [
        {
          type: 'Political imagery',
          note: 'The absent flag suggests the country has lost its identity or sovereignty. The bulldozers may represent the destruction of the old homeland.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] She is told she cannot return; perhaps the city itself is gone.',
      annotations: [
        {
          type: 'Possessive language',
          note: 'The speaker claims the place as "my city" through memory, even though she is denied physical return.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] The city may have been erased, with frontiers rising between her and it.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Rising "frontiers" personify political borders as aggressive barriers. "Erased" suggests deliberate destruction of identity.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] Still, she remains branded by that impression of sunlight (stanza refrain).',
    },
    { text: '' }, // stanza break

    // Stanza 3
    {
      text: '[Stanza 3] The speaker calls her memory a passport that lets her return.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Memory as "passport" is powerful -- it grants access that politics denies. Memory becomes a document of identity and freedom.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] It carries her to every corner of the city; nothing can stop her.' },
    {
      text: '[Paraphrase] The personified city takes her dancing through its streets.',
      annotations: [
        {
          type: 'Personification',
          note: 'The city is personified as a dance partner or lover, suggesting an intimate, joyful relationship between speaker and homeland.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] This happens while she sleeps; in her present city she has no passport.',
    },
    {
      text: '[Paraphrase] She has no I.D., but the authorities cannot see past her eyes.',
      annotations: [
        {
          type: 'Defiance',
          note: 'The speaker is undocumented in the new country but defiant -- the authorities cannot get past her eyes, suggesting her inner vision of home is impenetrable to outside control.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase, final line] Each morning she describes deporting herself to sunlight.',
      annotations: [
        {
          type: 'Refrain / Irony',
          note: 'The reflexive idea of "deporting myself" subverts the language of forced removal. The speaker chooses to return to her sunlit memory, reclaiming agency over the act of exile.',
          color: '#f59e0b',
        },
        {
          type: 'Final refrain',
          note: 'The closing "sunlight" completes the pattern across all three stanzas, but here it is active and defiant rather than passive.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>Carol Rumens</strong> (born 1944) is a British poet, novelist, and critic. Although not an émigrée herself, Rumens has a deep interest in Eastern European politics and culture, particularly the experiences of those displaced by political conflict.</p>
<p><strong>The unnamed city:</strong> The city is intentionally <strong>unnamed</strong>, allowing the poem to speak to any displaced person. Rumens has confirmed the absence of specifics is deliberate. Avoid identifying it as Sarajevo, Beirut, or any specific place — the universality is the point.</p>
<p><strong>Emigration and exile:</strong> The poem explores the experience of being forced to leave one's homeland -- a reality for millions displaced by war, political oppression, and regime change. The speaker's country is deliberately left unnamed, making the poem universal rather than tied to one specific conflict.</p>
<p><strong>Cold War context:</strong> Written in 1993, the poem resonates with Cold War-era displacement, the fall of the Berlin Wall (1989), and the breakup of the Soviet Union and Yugoslavia. Many people were separated from homelands that were physically transformed or politically erased.</p>
<p><strong>Nostalgia vs. reality:</strong> A central tension in the poem is between the speaker's idealised, sunlit memory of their homeland and the brutal present reality of war, tyranny, and destruction. Memory becomes a form of resistance against political erasure.</p>
<p><strong>Political oppression:</strong> References to tyrants, massacres, bulldozers, and rising frontiers evoke authoritarian regimes that destroy cities, erase cultures, and prevent citizens from returning. The poem suggests that while physical places can be destroyed, memories cannot be controlled by those in power.</p>
<p><strong>Identity and belonging:</strong> The speaker exists between two worlds -- exiled from a homeland they remember with love, and undocumented in a new country where they lack formal identity. Memory becomes the true "passport" and source of selfhood.</p>`,

  contextAr: `<p><strong>Carol Rumens</strong> (مواليد 1944) شاعرة وروائية وناقدة بريطانية. مع إنها هي بنفسها مو émigrée، إلا إنها مهتمّة وايد بسياسة وثقافة شرق أوروبا، خصوصاً تجارب الناس اللي تشرّدوا بسبب الصراعات السياسية.</p>
<p><strong>المدينة المجهولة:</strong> المدينة في القصيدة <strong>ما لها اسم</strong> عن قصد، عشان القصيدة تخاطب كل شخص تشرّد. Rumens أكّدت إن غياب التفاصيل مقصود. لا تحدّدها على إنها سراييفو أو بيروت أو أي مكان بعينه — العمومية هي بيت القصيد.</p>
<p><strong>الهجرة والمنفى:</strong> القصيدة تستكشف تجربة الإجبار على ترك الوطن — واقع عاشه ملايين البشر بسبب الحرب والقمع السياسي وتغيّر الأنظمة. بلد المتكلّمة ما تتسمّى عن قصد، وهذا يخلّي القصيدة عالمية مو مرتبطة بصراع واحد بعينه.</p>
<p><strong>سياق الحرب الباردة:</strong> القصيدة كُتبت سنة 1993، وتتجاوب مع التشريد في حقبة الحرب الباردة، وسقوط جدار برلين (1989)، وتفكّك الاتحاد السوفيتي ويوغوسلافيا. وايد من الناس انفصلوا عن أوطانهم اللي تغيّرت مادياً أو مُحيت سياسياً.</p>
<p><strong>الحنين مقابل الواقع:</strong> التوتّر الأساسي في القصيدة بين ذاكرة المتكلّمة المثالية والمشمسة عن وطنها، وبين الواقع الحاضر القاسي من حرب وطغيان ودمار. الذاكرة تتحوّل لشكل من أشكال المقاومة ضد المحو السياسي.</p>
<p><strong>القمع السياسي:</strong> الإشارات للطغاة (tyrants) والمذابح (massacres) والجرّافات (bulldozers) والحدود اللي ترتفع (frontiers) تستحضر أنظمة استبدادية تدمّر المدن وتمحي الثقافات وتمنع المواطنين من الرجوع. القصيدة تلمّح إن الأماكن المادية ممكن تتدمّر، بس الذاكرة ما يقدر أصحاب السلطة يسيطرون عليها.</p>
<p><strong>الهوية والانتماء:</strong> المتكلّمة تعيش بين عالمين — منفية من وطن تتذكّره بحب، وبدون أوراق رسمية في بلد جديد ما تملك فيه هوية موثّقة. الذاكرة تصير "passport" الحقيقي ومصدر الذات.</p>`,

  summary: `The speaker reflects on a country they left as a child, describing memories bathed in an unchanging sunlight that no amount of political violence or personal distance can extinguish.

In the first stanza, the speaker introduces their homeland through the lens of childhood memory. Despite acknowledging that the country may now be at war or under tyrannical rule, their memory remains as clear as sunlight -- vivid, warm, and permanently imprinted.

The second stanza develops the contrast between the beautiful remembered city and its possible destruction. White streets and graceful slopes give way to massacres and bulldozers. The speaker is told they cannot return, and the city may have been erased, yet the refrain insists: the impression of sunlight endures.

The final stanza is the most defiant. Memory becomes a passport granting free access to every corner of the lost city. The personified city takes the speaker dancing. In the new country, the speaker has no official identity, but the authorities cannot penetrate their inner world. The poem closes with the speaker describing deporting herself to sunlight -- a powerful reclaiming of the language of exile, transforming forced removal into a daily, voluntary return to the light of memory.`,

  summaryAr: `المتكلّمة تتذكّر بلد تركتها وهي صغيرة، وتوصف ذكريات مغمورة بشمس ما تتغيّر، ما يقدر يطفيها لا عنف سياسي ولا بعد مكاني.

في المقطع الأول، المتكلّمة تعرّف وطنها من خلال عدسة ذكريات الطفولة. مع إنها تعترف إن البلد يمكن الآن في حرب أو تحت حكم طغيان، ذاكرتها تبقى صافية مثل ضوء الشمس — حيّة ودافية ومطبوعة بشكل دائم.

المقطع الثاني يطوّر التباين بين المدينة الجميلة المتذكَّرة وبين دمارها المحتمل. الشوارع البيضاء والمنحدرات الرشيقة تتحوّل إلى مذابح وجرّافات. المتكلّمة يقولون لها ما تقدر ترجع، ويمكن المدينة انمحت، بس اللازمة (refrain) تصرّ: انطباع الشمس يدوم.

المقطع الأخير هو الأكثر تحدّياً. الذاكرة تصير جواز سفر (passport) يمنحها حرية الوصول لكل ركن من المدينة المفقودة. المدينة، بالتشخيص، تأخذها ترقص. وفي البلد الجديد، المتكلّمة ما عندها هوية رسمية، بس السلطات ما تقدر تخترق عالمها الداخلي. القصيدة تختم بالمتكلّمة وهي تصف نفسها وكأنها تُبعِد نفسها نحو ضوء الشمس — استرجاع قوي للغة المنفى، يحوّل الإبعاد القسري إلى عودة يومية اختيارية لنور الذاكرة.`,

  formAndStructure: `Form: Free verse with no regular rhyme scheme or metre, reflecting the fragmented, displaced nature of the émigrée's experience.

Three stanzas: The poem is organised into three substantial stanzas of roughly equal length. Each stanza ends with a reference to "sunlight," creating a structural refrain that anchors the poem.

Refrain: A reference to sunlight closes every stanza, evolving from passive memory (being branded by an impression of sunlight) to active defiance (deporting oneself to sunlight). This progression mirrors the speaker's growing assertion of identity.

Enjambment: Lines frequently run on without punctuation, creating a flowing, stream-of-consciousness effect that mirrors the way memory works -- unpredictable, associative, and difficult to contain.

Caesura: Mid-line full stops (for example, where the speaker breaks off from being unable to reach the city to the possibility of a massacre) create abrupt tonal shifts, jolting the reader between beauty and violence.

First person: The consistent use of "I" and "my" throughout creates an intimate, personal tone. The possessive language ("my memory," "my city") emphasises the speaker's claim over their homeland.

Contrast: The structure consistently juxtaposes the bright, idealised past against the dark, violent present, but always returns to light -- suggesting memory's triumph over political destruction.`,

  formAndStructureAr: `الشكل: free verse بدون نظام قافية ولا وزن منتظم، يعكس الطبيعة المتشظّية والمشرّدة لتجربة الـémigrée.

ثلاث مقاطع (stanzas): القصيدة منظّمة في ثلاث مقاطع كبيرة بأطوال متقاربة. كل مقطع ينتهي بإشارة لـ"sunlight"، ويخلق refrain هيكلي يثبّت القصيدة.

اللازمة (Refrain): إشارة لضوء الشمس تختم كل مقطع، وتتطوّر من ذاكرة سلبية (الإحساس بأنها موسومة بانطباع من ضوء الشمس) لتحدٍّ فاعل (إبعاد النفس نحو ضوء الشمس). هذا التدرّج يعكس تأكيد المتكلّمة المتنامي لهويتها.

Enjambment: الأبيات وايد منها تتواصل بدون توقّف، ويخلق هذا تدفّق ذهني (stream-of-consciousness) يعكس طريقة عمل الذاكرة — غير متوقّعة، ترابطية، صعب تتحكّم فيها.

Caesura: التوقّفات في وسط البيت (مثلاً حين تنتقل المتكلّمة من عجزها عن الوصول للمدينة إلى احتمال وقوع مذبحة) تخلق تحوّلات نبرية مفاجئة، تنقل القارئ بصدمة من الجمال إلى العنف.

ضمير المتكلّم (First person): استخدام "I" و"my" بشكل مستمر يخلق نبرة حميمة وشخصية. ولغة التملّك ("my memory"، "my city") تأكّد على ملكية المتكلّمة لوطنها.

التباين (Contrast): البنية باستمرار تضع الماضي المضيء المثالي قبال الحاضر المظلم العنيف، بس دائماً ترجع للنور — يلمّح بانتصار الذاكرة على الدمار السياسي.`,

  // Quotation note: "The Émigrée" is in copyright. The references below
  // describe and paraphrase the poem's lines rather than reproducing them
  // verbatim. Confirm exact wording in the AQA Power & Conflict anthology
  // (or Bloodaxe's "Thinking of Skins: New & Selected Poems") before quoting
  // in an exam answer.
  keyQuotes: [
    {
      quote: 'The fairy-tale opening line (a country left in childhood) — paraphrase',
      analysis:
        'The fairy-tale-style opening creates a sense of nostalgia and distance, as if the homeland exists only in story. The ellipsis represents a gap in memory or a reluctance to fully confront the past. Leaving the country in childhood explains why the memory is so pure and uncomplicated.',
      themes: ['Memory', 'Loss', 'Identity'],
      analysisAr:
        'الافتتاحية بصيغة الحكاية ("There once was") تخلق إحساس بالحنين والبعد، وكأن الوطن موجود بس في القصص. والـellipsis تمثّل فجوة في الذاكرة أو تردّد في مواجهة الماضي بالكامل. ومغادرة البلد "as a child" تفسّر ليش الذاكرة طاهرة وبسيطة.',
      themesAr: ['الذاكرة', 'الخسارة', 'الهوية'],
    },
    {
      quote: 'The "sunlight"/clarity compound describing the memory — paraphrase',
      analysis:
        "A compound adjective fuses the poem's central motif of light with absolute clarity. The memory is presented as transparent and uncorrupted, contrasting with the murky political reality of the present.",
      themes: ['Memory', 'Light imagery', 'Nostalgia'],
      analysisAr:
        'الصفة المركّبة التي تربط ضوء الشمس بالوضوح تدمج بين موتيف النور المحوري في القصيدة وبين الوضوح المطلق. الذاكرة تُقدَّم شفّافة وما تشوبها شائبة، وتتناقض مع الواقع السياسي الضبابي في الحاضر.',
      themesAr: ['الذاكرة', 'صور النور', 'الحنين'],
    },
    {
      quote: 'The recurring "branded by an impression of sunlight" refrain — paraphrase',
      analysis:
        'The idea of being "branded" carries connotations of both ownership (as in cattle branding) and permanent marking (as in a burn). The memory is not gentle -- it is seared into the speaker, suggesting both pain and permanence. This refrain anchors each stanza.',
      themes: ['Memory', 'Identity', 'Power of the past'],
      analysisAr:
        'كلمة "branded" فيها إيحاء بالملكية (مثل وسم المواشي) وبالعلامة الدائمة (مثل حرق). الذاكرة مو هاديّة — هي مكويّة على المتكلّمة، وهذا يلمّح بالألم وبالدوام في نفس الوقت. وهذي اللازمة (refrain) تثبّت كل مقطع.',
      themesAr: ['الذاكرة', 'الهوية', 'قوة الماضي'],
    },
    {
      quote: 'The "sick with tyrants" image of the homeland — paraphrase',
      analysis:
        'Personifying the country as "sick" suggests tyranny is a disease infecting the nation. The tentative "may be" phrasing shows the speaker is cut off from current information, relying on speculation rather than knowledge.',
      themes: ['Political oppression', 'Conflict', 'Displacement'],
      analysisAr:
        'تشخيص البلد على إنها "sick" يلمّح بإن الطغيان مرض يصيب الأمة. وعبارة "may be" المتردّدة تبيّن إن المتكلّمة مقطوعة عن المعلومات الحالية، تعتمد على التخمين مو على المعرفة.',
      themesAr: ['القمع السياسي', 'الصراع', 'التشريد'],
    },
    {
      quote: 'The "frontiers rise between us" border image — paraphrase',
      analysis:
        'Personifying borders as actively "rising" presents political boundaries as aggressive, living barriers. The "between us" phrasing implies a personal, almost romantic separation between the speaker and their city.',
      themes: ['Conflict', 'Political oppression', 'Displacement'],
      analysisAr:
        'تشخيص الحدود على إنها "rise" بشكل فاعل يقدّم الحواجز السياسية كحواجز عدوانية وحيّة. وعبارة "between us" تلمّح بانفصال شخصي، شبه رومانسي، بين المتكلّمة ومدينتها.',
      themesAr: ['الصراع', 'القمع السياسي', 'التشريد'],
    },
    {
      quote: 'The "memory is a passport" metaphor — paraphrase',
      analysis:
        "This metaphor is the poem's most powerful image. A passport is a document of identity and freedom of movement -- things the émigrée has been denied. By making memory a passport, the speaker asserts that internal experience transcends political control.",
      themes: ['Memory', 'Identity', 'Power', 'Defiance'],
      analysisAr:
        'هذي الاستعارة هي أقوى صورة في القصيدة. الـpassport وثيقة هوية وحرية تنقّل — وهذي الأشياء الـémigrée محرومة منها. لمّا تخلّي المتكلّمة الذاكرة passport، فهي تأكّد إن التجربة الداخلية تتجاوز السيطرة السياسية.',
      themesAr: ['الذاكرة', 'الهوية', 'السلطة', 'التحدّي'],
    },
    {
      quote: 'The personified city "takes me dancing" image — paraphrase',
      analysis:
        'Personifying the city as a dance partner creates an image of joyful intimacy. The city actively welcomes and embraces the speaker, suggesting a reciprocal relationship of love. This happens in dreams, where political restrictions have no power.',
      themes: ['Memory', 'Belonging', 'Joy', 'Personification'],
      analysisAr:
        'تشخيص المدينة كشريك رقص يخلق صورة حميمة وفرحة. المدينة بشكل فاعل ترحّب بالمتكلّمة وتحضنها، وهذا يلمّح بعلاقة حب متبادلة. وهذا يصير في الأحلام، لين القيود السياسية ما لها سلطة.',
      themesAr: ['الذاكرة', 'الانتماء', 'الفرح', 'التشخيص'],
    },
    {
      quote:
        'The final line — the speaker "deporting" herself to sunlight each morning (paraphrase; flagged UNVERIFIED by audit)',
      analysis:
        'The final line subverts the violent language of "deportation" -- normally something done to a person against their will -- into a voluntary, daily act of self-determination. The speaker chooses to return to the light of memory, transforming exile from punishment into liberation.',
      themes: ['Defiance', 'Memory', 'Identity', 'Power'],
      analysisAr:
        'البيت الأخير يقلب لغة "deportation" العنيفة — اللي عادة شي يُفرض على الشخص رغماً عنه — إلى فعل اختياري يومي من تقرير المصير. المتكلّمة تختار ترجع لنور الذاكرة، وتحوّل المنفى من عقوبة إلى تحرّر.',
      themesAr: ['التحدّي', 'الذاكرة', 'الهوية', 'السلطة'],
    },
  ],

  // Language-device "example" fields paraphrase the poem rather than quoting
  // it verbatim (poem is in copyright). Verify wording in the AQA anthology.
  languageDevices: [
    {
      device: 'Personification',
      example: 'The personified city "takes the speaker dancing" through its streets',
      effect:
        "The city is given human qualities, acting as a lover or companion who actively embraces the speaker. This creates a sense of mutual belonging and intimacy that transcends physical distance, suggesting the homeland is alive within the speaker's imagination.",
      lineRef: 16,
    },
    {
      device: 'Light / dark imagery',
      example:
        'The recurring sunlight imagery and the "branded by an impression of sunlight" idea (paraphrase)',
      effect:
        "Sunlight represents the warmth, clarity, and permanence of the speaker's childhood memories. It contrasts with the implied darkness of war, tyranny, and destruction in the present-day homeland. Light becomes a symbol of hope and resistance against political erasure.",
      lineRef: 1,
    },
    {
      device: 'Refrain',
      example: 'The sunlight reference that closes each stanza (paraphrase)',
      effect:
        'The repetition of "sunlight" at the end of every stanza creates a structural anchor and a sense of inevitability -- no matter what darkness is described, the poem always returns to light. The refrain also mirrors the cyclical nature of memory, which keeps returning to the same bright images.',
      lineRef: 3,
    },
    {
      device: 'Metaphor',
      example: 'The "branded by an impression of sunlight" image (paraphrase)',
      effect:
        '"Branded" compares memory to a physical mark burned into the skin. This suggests the memory is both painful and permanent -- it cannot be removed or forgotten. The violence of the word "branded" contrasts with the gentle warmth of "sunlight," capturing the bittersweet nature of nostalgic exile.',
      lineRef: 3,
    },
    {
      device: 'Contrast',
      example: 'Beautiful streets and graceful slopes set against a possible massacre (paraphrase)',
      effect:
        "The juxtaposition of beauty and violence is a key structural technique. The speaker's idealised memory is placed directly against the brutal present reality, highlighting the gulf between personal experience and political truth. This makes the reader feel the emotional whiplash of exile.",
      lineRef: 6,
    },
    {
      device: 'Possessive language',
      example:
        'Repeated possessive phrasing such as "my memory", "my city" and "my eyes" (paraphrase)',
      effect:
        'The repeated possessive pronoun "my" asserts ownership and belonging. Despite being exiled and undocumented, the speaker claims the city as her own through memory. This language of possession is an act of defiance against the political forces that have separated her from her homeland.',
      lineRef: 9,
    },
    {
      device: 'Semantic field of politics / conflict',
      example:
        'Scattered political/conflict vocabulary (tyrants, massacre, bulldozers, frontiers, passport, deporting)',
      effect:
        "The vocabulary of political oppression runs throughout the poem, grounding the personal experience of memory in a wider context of conflict and displacement. These words remind the reader that the speaker's nostalgia is not mere sentimentality but a response to genuine political violence.",
      lineRef: 2,
    },
    {
      device: 'Subverted language',
      example: 'The reflexive "deporting myself to sunlight" idea in the final line (paraphrase)',
      effect:
        '"Deporting" is typically an act of state violence -- forced removal. By making it reflexive ("deporting myself"), the speaker reclaims agency over her displacement. The act of exile becomes voluntary and positive, a daily choice to return to the light of memory rather than submit to the darkness of her present situation.',
      lineRef: 19,
    },
  ],
}

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'emi-1',
    question: 'What is the central conflict in The Émigrée?',
    type: 'multiple-choice',
    options: [
      'A physical war between two countries',
      "The tension between the speaker's idealised childhood memory of her homeland and its present political reality",
      'A family argument about immigration',
      'A debate about language',
    ],
    correctIndex: 1,
    explanation:
      'The speaker left her country as a child and remembers it as bright and clear as sunlight. Despite knowing it may now be at war or under tyranny, her memory remains positive and she refuses to let reality destroy it.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'emi-2',
    question: 'What is the significance of the "sunlight" motif?',
    type: 'multiple-choice',
    options: [
      'The country has a warm climate',
      "Sunlight represents the speaker's pure, untainted childhood memory that cannot be darkened by political reality",
      'It describes the weather on the day she left',
      'It is a reference to sunrise',
    ],
    correctIndex: 1,
    explanation:
      "The sunlight motif runs through the poem as a refrain. Memory is always presented in light, while the present reality is dark. The speaker's personal memory resists political attempts to rewrite it.",
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'emi-3',
    question: 'What does the recurring "branded by an impression of sunlight" idea suggest?',
    type: 'multiple-choice',
    options: [
      'She has a sunburn',
      'The memory is permanently and painfully marked onto her — like a brand on skin, it cannot be removed',
      'She enjoys sunny weather',
      'She has a tattoo of the sun',
    ],
    correctIndex: 1,
    explanation:
      '"Branded" suggests the memory is seared onto her permanently, like a cattle brand. It is both painful (a burn) and indelible (it cannot be washed away). The memory defines her identity.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'emi-4',
    question: 'What does the "memory is a passport" metaphor mean?',
    type: 'multiple-choice',
    options: [
      'She carries a real passport from her old country',
      'Memory grants her access to a homeland that politics denies her — memory becomes a document of identity and freedom',
      'She needs a passport to travel',
      'Her memory is unreliable',
    ],
    correctIndex: 1,
    explanation:
      'This powerful metaphor shows that memory functions like an identity document — it allows the speaker to return to her homeland mentally even though she is denied physical return. Memory is freedom.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'emi-5',
    question: 'What do the rising frontiers separating speaker and city represent?',
    type: 'multiple-choice',
    options: [
      'Mountain ranges',
      'Political borders and barriers that aggressively separate the speaker from her homeland',
      'Rivers and oceans',
      'Airport security',
    ],
    correctIndex: 1,
    explanation:
      '"Frontiers rise" personifies political borders as aggressive barriers that actively prevent the speaker from returning. The verb "rise" makes them seem threatening and dynamic — they are growing, not static.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'emi-6',
    question: 'What is the effect of the refrain ending each stanza?',
    type: 'multiple-choice',
    options: [
      'It becomes repetitive and boring',
      "The sunlight refrain at each stanza's end reinforces that memory triumphs over political darkness every time",
      'It is a traditional poetic device with no specific meaning',
      'It shows the speaker is confused',
    ],
    correctIndex: 1,
    explanation:
      "Each stanza presents increasingly dark political realities (war, massacre, bulldozers) but ends with the sunlight refrain. The pattern structurally enacts the speaker's refusal to let darkness overcome her memory.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'emi-7',
    question: 'What does the metaphor of frontiers rising between speaker and homeland suggest?',
    type: 'multiple-choice',
    options: [
      'Mountains have grown taller',
      'Political borders are personified as actively rising barriers — separating the speaker from a homeland she cannot reach',
      'She has built a wall',
      'She is leaving the country',
    ],
    correctIndex: 1,
    explanation:
      '"Frontiers rise" personifies political boundaries as aggressive, growing barriers. The verb "rise" makes them feel dynamic and threatening — the gap between speaker and homeland is widening, not static.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'emi-8',
    question: 'What type of poem is The Émigrée, and who is Carol Rumens?',
    type: 'multiple-choice',
    options: [
      'A dramatic monologue by a Victorian poet',
      'A lyric poem by Carol Rumens (b. 1944), a British poet exploring themes of exile, identity, and political displacement',
      'An epic poem by a war correspondent',
      'A ballad by an Irish poet',
    ],
    correctIndex: 1,
    explanation:
      'Carol Rumens (b. 1944) is a British poet who has never been an émigrée herself. She writes in the voice of a displaced person to explore universal themes of exile, memory, identity, and the politics of belonging.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'emi-9',
    question:
      'How does the poem explore the idea that memory can be more powerful than political reality?',
    type: 'multiple-choice',
    options: [
      'It shows memory fading over time',
      "Despite war, massacres, and frontiers, the speaker's childhood memory stays as bright as sunlight — personal truth resists political propaganda",
      'Memory and reality are the same in the poem',
      'The speaker accepts that her memory is false',
    ],
    correctIndex: 1,
    explanation:
      "The poem's central argument is that personal memory can resist political attempts to rewrite or destroy it. No matter how much the homeland changes, the speaker's childhood impression remains intact and luminous.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'emi-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with The Émigrée for exploring identity and place?',
    type: 'multiple-choice',
    options: [
      'Bayonet Charge by Hughes',
      'Checking Out Me History by John Agard',
      'The Charge of the Light Brigade by Tennyson',
      'Exposure by Owen',
    ],
    correctIndex: 1,
    explanation:
      'Both The Émigrée and Checking Out Me History explore how identity is shaped by what you are told (or denied) about your history and homeland. Both speakers resist external forces that try to define or erase their identity.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'The Émigrée explores memory, exile, identity, and the power of personal truth to resist political darkness.',
    keyPoints: [
      'Memory as resistance — childhood memory defies political reality',
      'Identity — language, place, and memory define who the speaker is',
      'Exile and displacement — the speaker cannot return but refuses to forget',
      "Light vs darkness — the sunlight motif represents memory's triumph",
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Rumens uses light/dark imagery, metaphor, personification, and a consistent sunlight refrain to present memory as a powerful, defiant force.',
    keyPoints: [
      '"Sunlight-clear" — memory presented as luminous and pure',
      '"Branded" — memory is permanent, painful, and identity-defining',
      'The "memory is a passport" metaphor — memory as freedom and identity document',
      '"Frontiers rise between us" — borders personified as aggressive barriers',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Three stanzas of increasing political darkness, each ending with the sunlight refrain — structurally enacting the triumph of memory over reality.',
    keyPoints: [
      'Three stanzas — each introduces darker political reality',
      'Sunlight refrain at end of each stanza — memory always wins',
      'Enjambment — ideas flow across lines like unstoppable memory',
      'No regular rhyme — reflecting the displaced, unstructured nature of exile',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Rumens present the power of memory in The Émigrée?',
  'Compare how identity is presented in The Émigrée and one other poem from the anthology.',
  "How does Rumens use language and structure to convey the speaker's attachment to her homeland?",
]

/* ── Comparison poems ──────────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'London',
    poet: 'William Blake',
    link: '/revision/poetry/power-and-conflict/london',
    points: [
      "Both poems present cities shaped by political power -- Blake's London is oppressed from within; the émigrée's city is destroyed from without.",
      "Blake's speaker walks through a present-day city witnessing suffering; the émigrée's speaker can only access her city through memory.",
      "Both use imagery of confinement -- Blake's psychological manacles vs. the émigrée's rising frontiers that separate her from her city.",
      'Tone differs significantly: Blake is angry and despairing, while the émigrée is defiant and nostalgic.',
    ],
  },
  {
    poem: 'Checking Out Me History',
    poet: 'John Agard',
    link: '/revision/poetry/power-and-conflict/checking-out-me-history',
    points: [
      "Both poems explore identity shaped by forces beyond the speaker's control -- political exile vs. colonial education.",
      'Both speakers assert their identity against an oppressive system: the émigrée through memory, Agard through reclaiming suppressed history.',
      'Both use language as a tool of resistance -- the émigrée subverts "deporting"; Agard subverts Standard English with Caribbean dialect.',
      'Both poems end on a note of defiance and self-determination.',
    ],
  },
  {
    poem: 'Kamikaze',
    poet: 'Beatrice Garland',
    link: '/revision/poetry/power-and-conflict/kamikaze',
    points: [
      'Both poems explore the tension between personal memory and political/social pressure.',
      "In both, memory of a beautiful past (the émigrée's sunlit city; the pilot's childhood fishing trips) conflicts with a harsh present reality.",
      'Both speakers are caught between two worlds -- the émigrée between homeland and exile; the pilot between duty and family.',
      'Both suggest that the most powerful memories are rooted in childhood and sensory experience.',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────────── */

const THEMES = [
  'Memory',
  'Identity',
  'Political oppression',
  'Displacement & exile',
  'Nostalgia',
  'Power of the individual',
  'Defiance',
  'Belonging',
  'Loss',
  'Light vs. darkness',
]

/* ── Page component ────────────────────────────────────────────────── */

export default function TheEmigreePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Émigrée by Carol Rumens — Analysis & Annotations"
        description="Line-by-line analysis of The Émigrée with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'The Émigrée',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict/the-emigree',
          },
        ]}
      />
      {/* ── Back nav ───────────────────────────────────────────── */}
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
        <div>
          <h1 className="text-heading-lg font-heading text-foreground">The Émigrée</h1>
          <p className="text-body-sm text-muted-foreground mt-0.5">
            Carol Rumens &middot; Power and Conflict Anthology
          </p>
          <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
            AQA
          </Badge>
        </div>
      </div>

      {/* ── Theme badges ───────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ────────────────────────────── */}
      <StudyTools
        textName="The Émigrée"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="The Émigrée"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={POEM} />

      {/* ── Comparison poems ───────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with&hellip;</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div key={c.poem} className="rounded-xl border border-border bg-card p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-foreground mb-0.5">{c.poem}</h3>
              <p className="text-xs text-muted-foreground mb-3">{c.poet}</p>

              <ul className="space-y-2 flex-1">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm text-card-foreground leading-relaxed pl-3 border-l-2 border-border"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        &ldquo;The Émigrée&rdquo; by Carol Rumens (from{' '}
        <em>Thinking of Skins: New &amp; Selected Poems</em>, Bloodaxe Books, 1993) remains in
        copyright. To respect the rights holder, this study guide{' '}
        <strong>paraphrases and describes the poem rather than reproducing it verbatim</strong>. The
        wording of every paraphrase is approximate and has{' '}
        <strong>not been verified against a primary edition</strong>. Students and teachers must
        check all wording against the official AQA Power &amp; Conflict anthology or the named
        Bloodaxe edition before quoting in an exam answer. Flagged for human verification (audit
        item I5-extended / quote-risk-register).
      </p>
    </div>
  )
}
