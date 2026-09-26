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
    title: 'The Émigrée -- Carol Rumens -- The English Hub',
    description:
      'The Émigrée by Carol Rumens for AQA Power and Conflict: stanza-by-stanza notes, themes, context, quiz questions and comparison poems.',
    images: [
      {
        url: '/api/og?title=The+%C3%89migr%C3%A9e+--+Carol+Rumens+--+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Émigrée -- Carol Rumens -- The English Hub',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/the-emigree',
  },
  title: 'The Émigrée -- Carol Rumens',
  description:
    'The Émigrée by Carol Rumens for AQA Power and Conflict: stanza-by-stanza notes, themes, context, quiz questions and comparison poems.',
}

/* ── Poem data ─────────────────────────────────────────────────────── */

const POEM: PoemData = {
  title: 'The Émigrée',
  poet: 'Carol Rumens',
  // NOTE: "The Émigrée" (Carol Rumens, 1993) remains in copyright. To avoid
  // reproducing the poem verbatim, each line below is given as a PARAPHRASE in
  // the site's own words rather than the poet's exact text. Students must
  // read the full original text in the AQA Power & Conflict anthology
  // (or Rumens, "Thinking of Skins: New & Selected Poems", Bloodaxe Books).
  //
  // Until 26 September 2026 these paraphrases, the summary, the key quotes and
  // the quiz described a different poem: a massacre, bulldozers, a missing
  // flag, an erased city, memory as a passport and a final line about
  // deporting herself to sunlight. None of that is in the poem, which has no
  // passport at all and ends on her shadow. The page also quoted 63 distinct
  // words against a fair-dealing cap of 34. Everything below was rewritten
  // from the text Poetry By Heart publishes by kind permission of Bloodaxe
  // Books, checked word for word, one entry per line of the poem (25 lines in
  // stanzas of 8, 8 and 9) with no blank spacer entries, so the viewer's line
  // numbers are the poem's. A language device's lineRef is 0-based.
  lines: [
    {
      text: '[Paraphrase] (Stanza 1) Once upon a time there was a homeland, which the speaker left when she was small,',
      annotations: [
        {
          type: 'Opening',
          note: 'The fairy-tale formula "There once was" immediately establishes a sense of nostalgia and a distant, romanticised past.',
          color: '#3b82f6',
        },
        {
          type: 'Ellipsis',
          note: 'An ellipsis interrupts the fairy tale in the middle of the line, suggesting the speaker is reaching back into fragmented memory.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] yet she remembers it with the brightness and clarity of the sun,',
      annotations: [
        {
          type: 'Light imagery',
          note: 'The compound adjective "sunlight-clear" introduces the central motif of light. The memory is presented as vivid, pure, and untainted by time.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] because she seems never to have seen it in the dull late autumn',
      annotations: [
        {
          type: 'Selective memory',
          note: "She admits her picture leaves out the grey season. The memory is idealised because it is a child's.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] that, she has heard, arrives even in the gentlest of cities.',
      annotations: [
        {
          type: 'Hearsay',
          note: 'The aside that she has only been told this shows how much of her knowledge of the present city is second-hand.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '[Paraphrase] However bad the reports she gets about it, they cannot shatter' },
    {
      text: '[Paraphrase] her first picture of it, sealed and shining like a glass paperweight.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'Her original view is a paperweight: sealed, bright and unchanging, like a snow globe. Glass is also fragile, but she insists bad news cannot break it.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] It might be fighting a war, or be diseased with dictators,',
      annotations: [
        {
          type: 'Personification',
          note: 'The country is "sick with tyrants": tyranny is a disease infecting the nation. The repeated modal verb shows she can only guess at the present.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] but the sun has left its mark on her, burned in like a brand.',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The idea of being "branded" suggests the memory is permanently marked onto her, like a scar or cattle brand -- painful yet indelible.',
          color: '#10b981',
        },
        {
          type: 'Refrain',
          note: 'First appearance of the sunlight that closes every stanza, reinforcing the power of memory over reality.',
          color: '#f59e0b',
        },
      ],
    },

    // Stanza 2
    {
      text: '[Paraphrase] (Stanza 2) The pale streets and elegant hillsides of the city she remembers',
    },
    {
      text: '[Paraphrase] shine more brightly still, even as the years drive armoured vehicles on,',
      annotations: [
        {
          type: 'Contrast',
          note: 'The abrupt shift from beautiful imagery to "time rolls its tanks" highlights the tension between memory and present truth. Time is personified as an invading army, yet the memory glows brighter.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] and borders climb up between them, closing in like the sea.',
      annotations: [
        {
          type: 'Personification',
          note: 'In "frontiers rise between us", political borders become aggressive, living barriers. The simile of closing waves suggests she could be cut off, or drowned.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] The language she spoke as a child, which she brought with her,',
      annotations: [
        {
          type: 'Language and identity',
          note: 'Her childhood vocabulary is the one part of the country she could carry into exile.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] opens like an empty toy and pours out its rules.',
      annotations: [
        {
          type: 'Simile',
          note: 'Language as a "hollow doll", perhaps a nesting doll: it opens to reveal more inside, as if the lost country were stored in its grammar.',
          color: '#10b981',
        },
      ],
    },
    { text: '[Paraphrase] Before long she will possess every tiny bright particle of it.' },
    {
      text: '[Paraphrase] By now it may be untrue, even forbidden by the government,',
      annotations: [
        {
          type: 'Political imagery',
          note: 'The state may have banned the language: censorship reaches even the words she speaks.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] but it stays on her tongue, and it has the taste of the sun.',
      annotations: [
        {
          type: 'Refrain',
          note: 'The second stanza also ends on sunlight, now a taste rather than a sight. A full stop in the middle of the line creates a caesura before it.',
          color: '#f59e0b',
        },
      ],
    },

    // Stanza 3
    {
      text: '[Paraphrase] (Stanza 3) She has no papers to travel on, and no route home at all,',
      annotations: [
        {
          type: 'Exile',
          note: 'Having "no passport" states the political fact bluntly: her exile is permanent.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] yet her city flies to her in a white aeroplane of its own.',
      annotations: [
        {
          type: 'Reversal',
          note: 'If she cannot go to the city, the city comes to her. Memory and imagination undo what politics has done.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] It lays itself before her, gentle and obedient as a sheet of paper;',
      annotations: [
        {
          type: 'Simile',
          note: 'The city is tame and pliable, like paper she can write on. It is also fragile, and it depends on her.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] she brushes its hair and adores its bright eyes.',
      annotations: [
        {
          type: 'Personification',
          note: 'The city becomes a child or loved one she cares for, reversing the usual relationship of a person to a homeland.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] Her city leads her in a dance through the other city,',
      annotations: [
        {
          type: 'Personification',
          note: 'The city "takes me dancing": a dance partner or lover, suggesting an intimate, joyful relationship between speaker and homeland.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] the walled one. People there charge her with being absent, and surround her.',
      annotations: [
        {
          type: 'Enjambment and caesura',
          note: 'The line break delays the discovery that the city she dances through is a walled one. A full stop then lets the unnamed accusers break in.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] They charge her with being dark, in a city they call free.',
      annotations: [
        {
          type: 'Irony',
          note: 'A city that calls itself free is the one that accuses and circles her. Being called dark sets their suspicion against her sunlight.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] Her city shelters behind her. They whisper threats of death,',
      annotations: [
        {
          type: 'Threat',
          note: 'She now protects the city, which hides behind her, while the threats against her grow more serious.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] (final line) and the shadow she casts proves the sunlight is there.',
      annotations: [
        {
          type: 'Final refrain',
          note: 'The closing "evidence of sunlight" completes the pattern across all three stanzas, but here it is active and defiant rather than passive: a shadow can only be cast by light.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `<p><strong>Carol Rumens</strong> (born 1944) is a British poet, novelist, and critic. Although not an émigrée herself, Rumens has a deep interest in Eastern European politics and culture, particularly the experiences of those displaced by political conflict.</p>
<p><strong>The unnamed city:</strong> The city is intentionally <strong>unnamed</strong>, allowing the poem to speak to any displaced person. Rumens has confirmed the absence of specifics is deliberate. Avoid identifying it as Sarajevo, Beirut, or any specific place - the universality is the point.</p>
<p><strong>Emigration and exile:</strong> The poem explores the experience of being forced to leave one's homeland -- a reality for millions displaced by war, political oppression, and regime change. The speaker's country is deliberately left unnamed, making the poem universal rather than tied to one specific conflict.</p>
<p><strong>Cold War context:</strong> Written in 1993, the poem resonates with Cold War-era displacement, the fall of the Berlin Wall (1989), and the breakup of the Soviet Union and Yugoslavia. Many people were separated from homelands that were physically transformed or politically erased.</p>
<p><strong>Nostalgia vs. reality:</strong> A central tension in the poem is between the speaker's idealised, sunlit memory of their homeland and the brutal present reality of war, tyranny, and destruction. Memory becomes a form of resistance against political erasure.</p>
<p><strong>Political oppression:</strong> References to tyrants, tanks, rising frontiers, a childhood language that the state may have banned, and a hostile walled city evoke authoritarian regimes that invade cities, censor language, and prevent exiles from returning. The poem suggests that while physical places can be taken, memories cannot be controlled by those in power.</p>
<p><strong>Identity and belonging:</strong> The speaker exists between two worlds -- exiled from a homeland she remembers with love, with "no passport" and no way back, and treated with suspicion in the city where she now lives, whose people accuse her and circle her. Memory, and the language she still carries, become her source of selfhood.</p>`,

  contextAr: `<p><strong>Carol Rumens</strong> (مواليد 1944) شاعرة وروائية وناقدة بريطانية. مع إنها هي بنفسها مو émigrée، إلا إنها مهتمّة وايد بسياسة وثقافة شرق أوروبا، خصوصاً تجارب الناس اللي تشرّدوا بسبب الصراعات السياسية.</p>
<p><strong>المدينة المجهولة:</strong> المدينة في القصيدة <strong>ما لها اسم</strong> عن قصد، عشان القصيدة تخاطب كل شخص تشرّد. Rumens أكّدت إن غياب التفاصيل مقصود. لا تحدّدها على إنها سراييفو أو بيروت أو أي مكان بعينه - العمومية هي بيت القصيد.</p>
<p><strong>الهجرة والمنفى:</strong> القصيدة تستكشف تجربة الإجبار على ترك الوطن - واقع عاشه ملايين البشر بسبب الحرب والقمع السياسي وتغيّر الأنظمة. بلد المتكلّمة ما تتسمّى عن قصد، وهذا يخلّي القصيدة عالمية مو مرتبطة بصراع واحد بعينه.</p>
<p><strong>سياق الحرب الباردة:</strong> القصيدة كُتبت سنة 1993، وتتجاوب مع التشريد في حقبة الحرب الباردة، وسقوط جدار برلين (1989)، وتفكّك الاتحاد السوفيتي ويوغوسلافيا. وايد من الناس انفصلوا عن أوطانهم اللي تغيّرت مادياً أو مُحيت سياسياً.</p>
<p><strong>الحنين مقابل الواقع:</strong> التوتّر الأساسي في القصيدة بين ذاكرة المتكلّمة المثالية والمشمسة عن وطنها، وبين الواقع الحاضر القاسي من حرب وطغيان ودمار. الذاكرة تتحوّل لشكل من أشكال المقاومة ضد المحو السياسي.</p>
<p><strong>القمع السياسي:</strong> الإشارات للطغاة (tyrants) والدبابات (tanks) والحدود اللي ترتفع (frontiers)، ولغة الطفولة اللي يمكن الدولة منعتها، والمدينة المسوّرة المعادية، كلها تستحضر أنظمة استبدادية تغزو المدن وتراقب اللغة وتمنع المنفيين من الرجوع. القصيدة تلمّح إن الأماكن المادية ممكن تنأخذ، بس الذاكرة ما يقدر أصحاب السلطة يسيطرون عليها.</p>
<p><strong>الهوية والانتماء:</strong> المتكلّمة تعيش بين عالمين - منفية من وطن تتذكّره بحب، ما عندها جواز سفر ("no passport") ولا طريق للرجوع، وفي المدينة اللي تعيش فيها الحين الناس يشكّون فيها، يتّهمونها ويحاوطونها. الذاكرة، واللغة اللي للحين تحملها، تصير مصدر ذاتها.</p>`,

  summary: `The speaker reflects on a country she left as a child. Her memory of it is bathed in a sunlight that no political violence or distance can put out.

In the first stanza she introduces the homeland in the manner of a fairy tale. She admits it may now be at war or "sick with tyrants", but bad news cannot break her first view of it, which she pictures as a glass paperweight, sealed and shining, and she remains "branded by an impression of sunlight".

The second stanza sets the remembered city against what is happening to it. Its pale streets and hillsides glow brighter even as "time rolls its tanks", and "frontiers rise between us". The childhood language she brought with her opens like a "hollow doll"; the state may now have banned it, but it stays on her tongue, and it has the taste of sunlight.

In the final stanza she has "no passport" and no way back, so the city comes to her instead. She treats it tenderly, and it "takes me dancing" through the hostile, walled city where she now lives, whose people accuse her, circle her and threaten her. The poem ends in defiance: even her shadow is "evidence of sunlight".`,

  summaryAr: `المتكلّمة تتذكّر بلد تركتها وهي صغيرة. ذاكرتها عنها مغمورة بضوء شمس ما يقدر يطفيه لا عنف سياسي ولا بعد مكاني.

في المقطع الأول، تعرّف وطنها بأسلوب الحكاية الخرافية. تعترف إن البلد يمكن الحين في حرب أو "sick with tyrants"، بس الأخبار السيئة ما تقدر تكسر صورتها الأولى عنه، اللي تتخيّلها مثل ثقالة ورق زجاجية، مقفولة ولامعة، وتظل "branded by an impression of sunlight".

المقطع الثاني يحط المدينة المتذكَّرة قبال اللي قاعد يصير لها. شوارعها الفاتحة ومنحدراتها تلمع أكثر، حتى مع إن "time rolls its tanks"، و"frontiers rise between us". ولغة الطفولة اللي جابتها معها تنفتح مثل "hollow doll"؛ يمكن الدولة منعتها الحين، بس اللغة تظل على لسانها، وطعمها طعم الشمس.

في المقطع الأخير، ما عندها جواز سفر ("no passport") ولا طريق للرجوع، فالمدينة هي اللي تجيها. تعاملها بحنان، والمدينة "takes me dancing" في المدينة المسوّرة المعادية اللي تعيش فيها الحين، اللي أهلها يتّهمونها ويحاوطونها ويهدّدونها. والقصيدة تختم بتحدّي: حتى ظلّها "evidence of sunlight".`,

  formAndStructure: `Form: Free verse with no regular rhyme scheme or metre, reflecting the fragmented, displaced nature of the émigrée's experience. The long, loose lines sound like speech and memory rather than song.

Three stanzas: The poem is organised into three stanzas of eight, eight and nine lines. Each stanza ends with the word "sunlight", creating a structural refrain that anchors the poem.

Refrain: The sunlight that closes every stanza evolves: in line 8 she is passively "branded" by it; in line 16 it is a taste on her tongue; in line 25 her own shadow is "evidence of sunlight". This progression mirrors the speaker's growing assertion of identity against those who accuse her.

Enjambment: Lines frequently run on (lines 1 to 2, 3 to 4, and 21 to 22, where the line break delays the discovery that the city she dances through is a walled one), creating a flowing, stream-of-consciousness effect that mirrors the way memory works -- unpredictable, associative, and difficult to contain.

Caesura: Mid-line breaks create abrupt shifts: the ellipsis in line 1 that interrupts the fairy tale, the full stop in line 16 before the taste of sunlight, and the full stops in lines 22 and 24, after which the hostile voices of the new city break in.

First person: The consistent first person creates an intimate, personal tone. In the final stanza she calls the place her own city three times (lines 18, 21 and 24), claiming it against the city that rejects her.

Contrast: The structure consistently juxtaposes the bright, idealised past against the dark, violent present, but always returns to light -- suggesting memory's triumph over political destruction.`,

  formAndStructureAr: `الشكل: free verse بدون نظام قافية ولا وزن منتظم، يعكس الطبيعة المتشظّية والمشرّدة لتجربة الـémigrée. والأبيات الطويلة الحرّة تشبه الكلام والذاكرة أكثر من الأغنية.

ثلاث مقاطع (stanzas): القصيدة منظّمة في ثلاث مقاطع، ثمان أبيات وثمان أبيات وتسع أبيات. كل مقطع ينتهي بكلمة "sunlight"، ويخلق refrain هيكلي يثبّت القصيدة.

اللازمة (Refrain): ضوء الشمس اللي يختم كل مقطع يتطوّر: في البيت 8 هي "branded" فيه بشكل سلبي؛ في البيت 16 يصير طعم على لسانها؛ وفي البيت 25 ظلّها نفسه يصير "evidence of sunlight". هذا التدرّج يعكس تأكيد المتكلّمة المتنامي لهويتها قبال اللي يتّهمونها.

Enjambment: الأبيات وايد منها تتواصل بدون توقّف (من البيت 1 للبيت 2، ومن 3 لـ4، ومن 21 لـ22، لين نهاية البيت تأخّر اكتشاف إن المدينة اللي ترقص فيها مدينة مسوّرة)، ويخلق هذا تدفّق ذهني (stream-of-consciousness) يعكس طريقة عمل الذاكرة - غير متوقّعة، ترابطية، صعب تتحكّم فيها.

Caesura: التوقّفات في وسط البيت تخلق تحوّلات مفاجئة: الـellipsis في البيت 1 اللي تقطع الحكاية، والنقطة في البيت 16 قبل طعم الشمس، والنقطتين في البيتين 22 و24، اللي بعدها تدخل أصوات المدينة الجديدة المعادية.

ضمير المتكلّم (First person): ضمير المتكلّم المستمر يخلق نبرة حميمة وشخصية. وفي المقطع الأخير تسمّي المكان مدينتها ثلاث مرات (الأبيات 18 و21 و24)، وتأكّد ملكيتها له قبال المدينة اللي ترفضها.

التباين (Contrast): البنية باستمرار تضع الماضي المضيء المثالي قبال الحاضر المظلم العنيف، بس دائماً ترجع للنور - يلمّح بانتصار الذاكرة على الدمار السياسي.`,

  // Quotation note: "The Émigrée" is in copyright. Each quotation below is
  // a short phrase checked word for word, on 26 September 2026, against the
  // text Poetry By Heart publishes by kind permission of Bloodaxe Books. The
  // page's distinct quoted words are held under the fair-dealing cap by
  // no-poem-quoted-beyond-fair-dealing.test.ts; cite a line rather than add
  // a quotation.
  keyQuotes: [
    {
      quote: 'There once was',
      analysis:
        'The fairy-tale formula opens the poem and introduces the homeland, creating nostalgia and distance, as if it exists only in story. The ellipsis later in line 1 is a gap in memory, or a reluctance to confront the past. She left as a child, which explains why the memory is so pure and uncomplicated.',
      themes: ['Memory', 'Loss', 'Identity'],
      analysisAr:
        'الافتتاحية بصيغة الحكاية الخرافية تخلق إحساس بالحنين والبعد، وكأن الوطن موجود بس في القصص. والـellipsis اللي بعدها فجوة في الذاكرة أو تردّد في مواجهة الماضي. وهي تركت البلد وهي طفلة، وهذا يفسّر ليش الذاكرة صافية وبسيطة.',
      themesAr: ['الذاكرة', 'الخسارة', 'الهوية'],
    },
    {
      quote: 'sunlight-clear',
      analysis:
        "A compound adjective (line 2) fuses the poem's central motif of light with absolute clarity. The memory is presented as bright and uncorrupted, contrasting with the murky political reality of the present.",
      themes: ['Memory', 'Light imagery', 'Nostalgia'],
      analysisAr:
        'الصفة المركّبة (البيت 2) تربط ضوء الشمس بالوضوح، وتدمج بين موتيف النور المحوري في القصيدة وبين الوضوح المطلق. الذاكرة تُقدَّم مضيئة وما تشوبها شائبة، وتتناقض مع الواقع السياسي الضبابي في الحاضر.',
      themesAr: ['الذاكرة', 'صور النور', 'الحنين'],
    },
    {
      quote: 'sick with tyrants',
      analysis:
        'Personifying the country as sick (line 7) suggests tyranny is a disease infecting the nation. The repeated modal verb in the line shows the speaker is cut off from current information, relying on speculation rather than knowledge. Even so, line 8 turns straight back to sunlight.',
      themes: ['Political oppression', 'Conflict', 'Displacement'],
      analysisAr:
        'تشخيص البلد على إنها مريضة (البيت 7) يلمّح بإن الطغيان مرض يصيب الأمة. والفعل الناقص المتكرّر في البيت يبيّن إن المتكلّمة مقطوعة عن المعلومات الحالية، تعتمد على التخمين مو على المعرفة. ومع ذلك، البيت 8 يرجع على طول لضوء الشمس.',
      themesAr: ['القمع السياسي', 'الصراع', 'التشريد'],
    },
    {
      quote: 'branded by an impression of sunlight',
      analysis:
        'The idea of being "branded" carries connotations of both ownership (as in cattle branding) and permanent marking (as in a burn). The memory is not gentle -- it is seared into the speaker, suggesting both pain and permanence. This line closes the first stanza and begins the sunlight refrain that ends every stanza.',
      themes: ['Memory', 'Identity', 'Power of the past'],
      analysisAr:
        'كلمة "branded" فيها إيحاء بالملكية (مثل وسم المواشي) وبالعلامة الدائمة (مثل حرق). الذاكرة مو هاديّة - هي مكويّة على المتكلّمة، وهذا يلمّح بالألم وبالدوام في نفس الوقت. وهذا البيت يختم المقطع الأول ويبدأ لازمة الشمس اللي تختم كل مقطع.',
      themesAr: ['الذاكرة', 'الهوية', 'قوة الماضي'],
    },
    {
      quote: 'time rolls its tanks',
      analysis:
        'Time is personified as an invading army (line 10). The image of tanks brings war into the remembered city, yet its streets shine brighter as it happens: the harder reality presses, the brighter memory shines.',
      themes: ['Conflict', 'Memory', 'Political oppression'],
      analysisAr:
        'الزمن يتشخّص كجيش غازي (البيت 10). صورة الدبابات تدخّل الحرب في المدينة المتذكَّرة، ومع ذلك شوارعها تلمع أكثر وأكثر: كل ما ضغط الواقع أكثر، كل ما لمعت الذاكرة أكثر.',
      themesAr: ['الصراع', 'الذاكرة', 'القمع السياسي'],
    },
    {
      quote: 'frontiers rise between us',
      analysis:
        'Personifying borders as actively rising (line 11) presents political boundaries as aggressive, living barriers. The "between us" phrasing implies a personal, almost romantic separation between the speaker and her city, and the line ends by comparing the borders to closing waves.',
      themes: ['Conflict', 'Political oppression', 'Displacement'],
      analysisAr:
        'تشخيص الحدود على إنها "rise" بشكل فاعل (البيت 11) يقدّم الحواجز السياسية كحواجز عدوانية وحيّة. وعبارة "between us" تلمّح بانفصال شخصي، شبه رومانسي، بين المتكلّمة ومدينتها، والبيت ينتهي بتشبيه الحدود بموج يطبق عليها.',
      themesAr: ['الصراع', 'القمع السياسي', 'التشريد'],
    },
    {
      quote: 'hollow doll',
      analysis:
        'The childhood language she carried into exile is compared to a doll (line 13), perhaps a nesting doll, that opens to pour out its grammar. Language holds her identity inside it, layer within layer, and keeps giving up more of the lost country. The next lines admit the state may have banned it, but it stays on her tongue.',
      themes: ['Identity', 'Memory', 'Language'],
      analysisAr:
        'لغة الطفولة اللي حملتها معها للمنفى تتشبّه بدمية مجوّفة (البيت 13)، يمكن مثل الدمى الروسية المتداخلة، تنفتح وتطلع منها قواعدها. اللغة تحمل هويتها في داخلها، طبقة ورا طبقة، وتظل تطلّع أكثر وأكثر من البلد الضايع. والأبيات اللي بعدها تعترف إن الدولة يمكن منعتها، بس اللغة تظل على لسانها.',
      themesAr: ['الهوية', 'الذاكرة', 'اللغة'],
    },
    {
      quote: 'no passport',
      analysis:
        'The final stanza opens with the political fact stated bluntly (line 17): she cannot return. But the next line reverses it, as the city travels to her instead. Where politics has closed the border, memory and imagination open it.',
      themes: ['Displacement', 'Power', 'Defiance'],
      analysisAr:
        'المقطع الأخير يبدأ بالحقيقة السياسية بشكل صريح (البيت 17): ما تقدر ترجع. بس البيت اللي بعده يقلبها، والمدينة هي اللي تسافر لها. لمّا السياسة تسكّر الحدود، الذاكرة والخيال يفتحونها.',
      themesAr: ['التشريد', 'السلطة', 'التحدّي'],
    },
    {
      quote: 'takes me dancing',
      analysis:
        'Personifying the city as a dance partner creates an image of joyful intimacy (line 21). The city actively welcomes and embraces the speaker, and just before it she brushes its hair like a parent with a child. But the dance goes through a walled city in which she is accused and circled: her joy is an act of defiance.',
      themes: ['Memory', 'Belonging', 'Joy', 'Personification'],
      analysisAr:
        'تشخيص المدينة كشريكة رقص يخلق صورة حميمة وفرحة (البيت 21). المدينة ترحّب بالمتكلّمة وتحضنها، وقبلها بشوي هي تمشّط شعرها مثل أم مع طفلها. بس الرقصة تمر في مدينة مسوّرة، يتّهمونها فيها ويحاوطونها: فرحتها فعل تحدّي.',
      themesAr: ['الذاكرة', 'الانتماء', 'الفرح', 'التشخيص'],
    },
    {
      quote: 'evidence of sunlight',
      analysis:
        'The final line answers the accusers. They call her dark (line 23), and her shadow seems to be the proof they want, but a shadow can only be cast by light: the darkness they point to is itself evidence of the sun. The refrain ends as defiance, not passive memory.',
      themes: ['Defiance', 'Identity', 'Light vs. darkness'],
      analysisAr:
        'البيت الأخير يرد على اللي يتّهمونها. يتّهمونها بالظلمة (البيت 23)، وظلّها يبان وكأنه الدليل اللي يبونه، بس الظل ما يطلع إلا من النور: الظلمة اللي يأشّرون عليها هي نفسها دليل على الشمس. اللازمة تنتهي كتحدّي، مو كذاكرة سلبية.',
      themesAr: ['التحدّي', 'الهوية', 'النور مقابل الظلمة'],
    },
  ],

  // Each language device's example is a phrase checked against the same
  // permitted text; the viewer prints it between quotation marks.
  languageDevices: [
    {
      device: 'Personification',
      example: 'takes me dancing',
      effect:
        "The city is given human qualities, acting as a lover or companion who actively embraces the speaker. Just before, it lays itself before her and she brushes its hair, as if it were a child. This creates a sense of mutual belonging and intimacy that transcends physical distance, suggesting the homeland is alive within the speaker's imagination.",
      lineRef: 20,
    },
    {
      device: 'Light / dark imagery',
      example: 'sunlight-clear',
      effect:
        "Sunlight represents the warmth, clarity, and permanence of the speaker's childhood memories. It contrasts with the war, tyranny, and tanks of the present-day homeland, and with the darkness she is accused of in line 23. Light becomes a symbol of hope and resistance against political erasure.",
      lineRef: 1,
    },
    {
      device: 'Refrain',
      example: 'sunlight',
      effect:
        'The word "sunlight" ends every stanza (lines 8, 16 and 25), creating a structural anchor and a sense of inevitability -- no matter what darkness is described, the poem always returns to light. The refrain also mirrors the cyclical nature of memory, which keeps returning to the same bright images.',
      lineRef: 7,
    },
    {
      device: 'Metaphor',
      example: 'branded',
      effect:
        '"Branded" compares memory to a physical mark burned into the skin. This suggests the memory is both painful and permanent -- it cannot be removed or forgotten. The violence of the word "branded" contrasts with the gentle warmth of "sunlight", capturing the bittersweet nature of nostalgic exile.',
      lineRef: 7,
    },
    {
      device: 'Metaphor and contrast',
      example: 'time rolls its tanks',
      effect:
        "Time is personified as an invading army, and the image of war is set directly against the pale streets and hillsides of the remembered city, which shine all the brighter. The juxtaposition of beauty and violence is a key structural technique: the speaker's idealised memory is placed directly against the brutal present reality, and the reader feels the emotional whiplash of exile.",
      lineRef: 9,
    },
    {
      device: 'Simile',
      example: 'hollow doll',
      effect:
        'Her childhood language is compared to a doll that opens to pour out its grammar, perhaps a nesting doll with more inside each layer. Identity is stored in language, and language keeps giving back the lost country, even if the state has banned it.',
      lineRef: 12,
    },
    {
      device: 'Semantic field of politics / conflict',
      example: 'tyrants ... tanks ... frontiers',
      effect:
        "The vocabulary of political oppression runs through the poem: tyrants, tanks and frontiers, then a language the state may have forbidden (line 15), the missing passport (line 17) and accusers who circle her and threaten death (lines 22 to 24). It grounds the personal experience of memory in a wider context of conflict and displacement, reminding the reader that the speaker's nostalgia is not mere sentimentality but a response to genuine political violence.",
      lineRef: 6,
    },
    {
      device: 'Reversal',
      example: 'evidence of sunlight',
      effect:
        'The accusation of being dark (line 23) is turned around: her shadow, the darkness they point to, can only exist because of light. The speaker reclaims the language used against her, and the poem ends in defiance rather than loss.',
      lineRef: 24,
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
    question: 'What does being "branded by an impression of sunlight" suggest?',
    type: 'multiple-choice',
    options: [
      'She has a sunburn',
      'The memory is permanently and painfully marked onto her - like a brand on skin, it cannot be removed',
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
    question:
      'The speaker has "no passport" and no way back. How does the final stanza respond to this?',
    type: 'multiple-choice',
    options: [
      'She gives up hope of seeing the city again',
      'The city comes to her instead, flying in on its own plane - memory and imagination bring back what politics has taken away',
      'She applies for a passport in her new country',
      'She decides her memory is unreliable',
    ],
    correctIndex: 1,
    explanation:
      'Line 17 states the political fact bluntly: she cannot return. Line 18 reverses it, as her city travels to her. The personified city becomes something she can care for and dance with, and no border can stop that.',
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
      '"Frontiers rise" personifies political borders as aggressive barriers that actively prevent the speaker from returning. The verb "rise" makes them seem threatening and dynamic - they are growing, not static.',
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
      "Each stanza presents increasingly dark political realities (war and tyrants; tanks, frontiers and a banned language; a hostile city that accuses and threatens her) but ends with the sunlight refrain. The pattern structurally enacts the speaker's refusal to let darkness overcome her memory.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'emi-7',
    question: 'How is the speaker treated in the city where she now lives?',
    type: 'multiple-choice',
    options: [
      'She is welcomed and given a new passport',
      'She is circled, accused of absence and of being dark, and threatened, in a city that calls itself free',
      'She is ignored by everyone',
      'She is elected to the city council',
    ],
    correctIndex: 1,
    explanation:
      'Lines 22 to 24 describe unnamed accusers who circle her and whisper threats of death. The irony is that this hostile, walled place is called free. Her answer, in the final line, is that her shadow is "evidence of sunlight".',
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
      "Despite war, tyrants, tanks, and frontiers, the speaker's childhood memory stays as bright as sunlight - personal truth resists political propaganda",
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
      'Memory as resistance - childhood memory defies political reality',
      'Identity - language, place, and memory define who the speaker is',
      'Exile and displacement - the speaker cannot return but refuses to forget',
      "Light vs darkness - the sunlight motif represents memory's triumph",
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Rumens uses light/dark imagery, metaphor, personification, and a consistent sunlight refrain to present memory as a powerful, defiant force.',
    keyPoints: [
      '"Sunlight-clear" - memory presented as luminous and pure',
      '"Branded" - memory is permanent, painful, and identity-defining',
      'Having "no passport" - exile is permanent, so the city must come to her',
      '"Frontiers rise between us" - borders personified as aggressive barriers',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Three stanzas of increasing political darkness, each ending with the sunlight refrain - structurally enacting the triumph of memory over reality.',
    keyPoints: [
      'Three stanzas - each introduces darker political reality',
      'Sunlight refrain at end of each stanza - memory always wins',
      'Enjambment - ideas flow across lines like unstoppable memory',
      'No regular rhyme - reflecting the displaced, unstructured nature of exile',
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
      'Both use language as a tool of resistance -- the émigrée keeps a childhood language the state may have banned, and turns the charge of being dark into proof of sunlight; Agard subverts Standard English with Caribbean dialect.',
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
        name="The Émigrée by Carol Rumens - Analysis & Annotations"
        description="Line-by-line analysis of The Émigrée with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Back nav ───────────────────────────────────────────── */}
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
                    className="text-sm text-card-foreground leading-relaxed ps-3 border-s-2 border-border"
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
        <strong>paraphrases and describes the poem rather than reproducing it verbatim</strong>.
        Quotations are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review,
        quotation), checked against the text Poetry By Heart publishes by kind permission of
        Bloodaxe Books. The paraphrases are the site&rsquo;s own words, not the poet&rsquo;s. Read
        the full poem in the AQA Power &amp; Conflict anthology or the named Bloodaxe edition.
      </p>
    </div>
  )
}
