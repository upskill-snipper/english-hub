'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
/* ── Poem data ─────────────────────────────────────────────────────── */

const motherAnyDistancePoem: PoemData = {
  title: 'Mother, any distance',
  poet: 'Simon Armitage',
  // NOTE: "Mother, any distance" (Simon Armitage, 1993) remains in copyright. To
  // avoid reproducing the poem verbatim, each line below is given as a
  // PARAPHRASE in the site's own words, and the notes quote only short
  // phrases. Students must read the full original text in the AQA Love and
  // Relationships anthology (or Armitage, "Book of Matches", Faber and Faber).
  //
  // Until 25 September 2026 this array printed the whole poem, and two of its
  // third-stanza entries were not Armitage's lines at all: they stood where
  // lines 9 to 11 of the published poem belong, so the stanza had six entries
  // and the poem fourteen. Those three lines are now paraphrased from the
  // published text, one entry each, giving the fifteen lines the form notes
  // describe.
  //
  // THE REST OF THE PAGE, 26 September 2026. Until then the key quotes,
  // devices, form notes, quiz and revision notes quoted 84 distinct words of a
  // poem of about 111, including its whole first line, the whole of line 4 and
  // most of lines 12 and 13. They also kept four errors from the invented
  // lines or from nowhere: a "Neologism" device quoting a compound and a
  // landing the poem does not have, a window at the top of the house where the
  // poem has a hatch, a third stanza said to run to line 12 (it runs from 9 to
  // 15, so the stanzas are 4, 4 and 7 lines, not about 4, 8 and 3), and two
  // full rhymes (lines 3 and 4, 14 and 15) called half-rhymes. Six of the
  // eight device lineRefs pointed at the wrong entry, one at a stanza break. The
  // page now quotes ten short phrases, 16 words counted once, the cap of 15
  // per cent: prairies (4), zero-end (5), base and leaving (6), feeding (7),
  // Anchor. Kite. (8), space-walk (9), pinch (12), endless sky (14), fall or
  // fly (15). Each was checked word for word against the poem as AQA prints
  // it, by permission of Faber and Faber, in its published anthology
  // (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF). Anything
  // else is cited by line number or put in the site's own words. lineRef is a
  // lines-array index, stanza breaks included: line n of the poem is entry
  // n - 1 in stanza 1, n in stanza 2 and n + 1 in stanza 3. Adding a quotation
  // takes the page over the cap: no-poem-quoted-beyond-fair-dealing.test.ts
  // fails it.
  lines: [
    {
      text: '[Paraphrase] The speaker tells his mother that measuring anything longer than one person can stretch across',
      annotations: [
        {
          type: 'Direct address',
          note: 'Opening with a direct address to his mother makes this intimate and personal, as though the speaker is calling out to her.',
          color: '#3b82f6',
        },
        {
          type: 'Metaphor',
          note: 'The opening measurement is the distance one person can stretch across alone, but it also suggests the small distances of childhood, when mother and child were always close.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] needs another person to help, one holding each end of the tape.',
      annotations: [
        {
          type: 'Dependence',
          note: "The speaker still needs his mother's help. The practical task of measuring a house becomes a metaphor for the emotional transition of leaving home.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] She has come round to assist him in measuring up the windows, doors and curtain fittings.',
      annotations: [
        {
          type: 'Domestic imagery',
          note: 'The list of household features grounds the poem in a real, specific moment (moving into a new home) while the measuring tape becomes an extended metaphor.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '[Paraphrase] The walls and floors seem as vast as fields and open plains.',
      annotations: [
        {
          type: 'Hyperbole',
          note: 'Measuring the walls like farmland and calling the floors "prairies" exaggerates the size of the new home, reflecting the speaker\'s sense of the vastness and daunting nature of independence.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: 'The rooms become wide open landscapes: exciting but intimidating. The new space represents the adult world the speaker is entering.',
          color: '#ef4444',
        },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: '[Paraphrase] She holds the start of the tape while he takes the reel and notes down',
      annotations: [
        {
          type: 'Symbolism',
          note: "Holding the very start of the tape places the mother at the origin, the starting point: she is where the speaker's life began. He moves away while she stays anchored.",
          color: '#ef4444',
        },
        {
          type: 'Extended metaphor',
          note: 'The measuring tape represents the umbilical cord connecting mother and child, a lifeline that stretches but has not yet been cut.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] each length, calling the figures to her, his home base, before setting off',
      annotations: [
        {
          type: 'Military language',
          note: 'Calling out the figures to "base" sounds like a military or mission report, suggesting the mother is a safe headquarters and the speaker is venturing into unknown territory.',
          color: '#3b82f6',
        },
        {
          type: 'Enjambment',
          note: 'The line ends on "leaving", which runs on into the next line, physically enacting the movement away from the mother. The line break mirrors the separation.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] upstairs, the tape still running out behind him and unwinding',
      annotations: [
        {
          type: 'Vertical movement',
          note: 'Climbing the stairs suggests aspiration and growth. The speaker is rising, progressing, climbing towards independence.',
          color: '#10b981',
        },
        {
          type: 'Umbilical imagery',
          note: 'The verb "feeding" echoes an umbilical cord delivering nourishment. The connection sustains the speaker even as he moves away.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] across the years that lie between them. Then come two one-word images: an anchor, and a kite.',
      annotations: [
        {
          type: 'Caesura',
          note: 'The full stops create dramatic pauses, slowing the poem to a halt for two powerful single-word sentences.',
          color: '#8b5cf6',
        },
        {
          type: 'Metaphor',
          note: '"Anchor" and "Kite" are contrasting images. The mother is the anchor (stable, grounding, holding fast). The speaker is the kite (wanting to fly, to be free, but still attached by a string).',
          color: '#ef4444',
        },
        {
          type: 'Tension',
          note: "These two words encapsulate the poem's central tension: security vs freedom, dependence vs independence, staying vs leaving.",
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: '[Paraphrase] He moves through the bare bedrooms like an astronaut floating in space, then climbs',
      annotations: [
        {
          type: 'Verb choice',
          note: 'The hyphenated verb "space-walk" casts the speaker as an astronaut drifting round the bare house, with the tape as the cable tethering him to his mother. He is creating space between himself and her, and forging his own identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '[Paraphrase] the attic ladder, stretching the tape to its very limit, the point at which something',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'Stretching the tape to its limit works on two levels: the tape can go no further, and perhaps neither can the bond between mother and son. What will yield (the tape, her grip or the tie between them) is left open, and the line break makes the reader wait to find out.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '[Paraphrase] is bound to yield or snap.' },
    {
      text: '[Paraphrase] Two storeys beneath him, the tips of her fingers are still gripping',
      annotations: [
        {
          type: 'Precision',
          note: 'The growing physical distance is stressed here: the mother is now far below, anchoring the tape. "Pinch" suggests careful holding and reluctance: she is unwilling to let the tape slip out of her grip.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: '[Paraphrase] the barest sliver at the very end of the tape. After a pause, he stretches out',
      annotations: [
        {
          type: 'Reluctance to release',
          note: 'The tiny measurement she still holds shows how little connection remains, yet the mother keeps hold. The image captures the painful, tender reluctance of letting go.',
          color: '#ef4444',
        },
        {
          type: 'Ellipsis',
          note: 'The three dots create a pause, a held breath, before the speaker stretches further. The ellipsis embodies the suspended moment between holding on and letting go.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: '[Paraphrase] for a trapdoor in the roof that gives onto a boundless sky',
      annotations: [
        {
          type: 'Imagery',
          note: 'The loft hatch opens onto a sky without limits: a thrilling image of infinite possibility but also of danger. There is nothing to hold onto in a sky that never ends.',
          color: '#10b981',
        },
        {
          type: 'Symbolism',
          note: 'The sky represents the limitless potential of adulthood and independence. The hatch is the threshold between childhood security and the unknown.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '[Paraphrase] where he may either plunge or soar.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The final line offers two outcomes: falling (failure, danger) or flying (freedom, success). The poem ends on this unresolved tension: independence is both exhilarating and terrifying.',
          color: '#f59e0b',
        },
        {
          type: 'Rhyme',
          note: '"Fly" rhymes fully with "sky" in the line above, so the poem closes on a firm sound even though the choice it names is left open, mirroring the speaker\'s uncertain future.',
          color: '#8b5cf6',
        },
      ],
    },
  ],

  context:
    '<p><strong>Simon Armitage (b. 1963)</strong> is a contemporary British poet from Marsden, West Yorkshire. He has been UK Poet Laureate since May 2019, succeeding Carol Ann Duffy (2009-2019). He originally trained as a probation officer, is now a professor at Leeds University, and served as Oxford Professor of Poetry from 2015 to 2019. His poetry is known for its colloquial language, dry humour, and exploration of everyday life. (Note: although his anthology poems include war pieces such as <em>Remains</em> and <em>The Manhunt</em>, Armitage never served in any military or combat role - those poems are based on interviews with veterans.)</p>' +
    '<p><strong>"Mother, any distance"</strong> was published in <em>Book of Matches</em> (1993), a collection where each poem was designed to last the time it takes a match to burn. The poem draws on Armitage\'s own experience of leaving home.</p>' +
    '<p><strong>The extended metaphor</strong> of a measuring tape connects to the <strong>umbilical cord</strong>, the physical link between mother and child. As the speaker moves through his new house, the tape stretches and eventually must be released, just as a child must eventually separate from their parent.</p>' +
    '<p>The poem explores the <strong>emotional complexity of growing up</strong>: the desire for independence battling against the security of parental love. It captures a universal moment, leaving home, with tenderness and honesty.</p>' +
    '<p>The poem is often read as being about <strong>the point at which you have to let go</strong>, and it acknowledges that both parent and child find this difficult.</p>',

  contextAr:
    '<p><strong>Simon Armitage (مواليد 1963)</strong> شاعر بريطاني معاصر من Marsden في West Yorkshire. هو UK Poet Laureate من مايو 2019، خلف Carol Ann Duffy (2009-2019). أصلاً تدرّب كموظف مراقبة المفرج عنهم، والحين أستاذ في جامعة Leeds، وخدم كأستاذ الشعر في Oxford من 2015 إلى 2019. شعره معروف بلغته العاميّة، وحسّ الفكاهة الجاف، واستكشاف الحياة اليوميّة. (ملاحظة: على الرغم إن قصائده في الـanthology تشمل قطع حرب مثل <em>Remains</em> و<em>The Manhunt</em>، Armitage أبد ما خدم في أي دور عسكري أو قتالي - هذي القصائد مبنيّة على مقابلات مع جنود سابقين.)</p>' +
    '<p>قصيدة <strong>"Mother, any distance"</strong> انتشرت في ديوان <em>Book of Matches</em> (1993)، مجموعة كل قصيدة فيها مصمّمة عشان تطول قد ما يطول اشتعال عود ثقاب. القصيدة مستوحاة من تجربة Armitage الشخصيّة في مغادرة بيت الأهل.</p>' +
    '<p><strong>الاستعارة الممتدّة</strong> (extended metaphor) عن شريط القياس تربطه بـ<strong>الحبل السرّي</strong> - الرابط الجسدي بين الأم والابن. مع تنقّل المتكلّم (ذكر) في بيته الجديد، الشريط يتمدّد، ولازم في النهاية ينحرّر، تماماً مثل الابن لازم في النهاية ينفصل عن والديه.</p>' +
    '<p>القصيدة تستكشف <strong>التعقيد العاطفي للنضوج</strong>: الرغبة في الاستقلال تتصارع مع أمان الحب الأبوي. تلتقط لحظة عامّة كل واحد فينا يمرّ فيها - مغادرة بيت الأهل - بحنان وصدق.</p>' +
    '<p>القصيدة تنقرأ كثير على إنها عن <strong>اللحظة اللي لازم تخلّي يدك تنفلت فيها</strong>، وتعترف إن الأم والابن كلاهما يلقى هالشي صعب.</p>',

  summary:
    'Stanza 1 (lines 1-4): The speaker asks his mother to help him measure his new home: anything longer than his own reach needs a second person. The domestic task is grounded in reality, but the exaggerated language (the walls measured like farmland, the floors like "prairies") hints at the daunting scale of adult independence.\n\n' +
    'Stanza 2 (lines 5-8): The mother holds the "zero-end" of the tape while the speaker moves away, calling the measurements back to "base". The tape becomes an umbilical cord, stretching through the house. The stanza ends with "Anchor. Kite.", two metaphors for the mother’s stability and the speaker’s desire for freedom.\n\n' +
    'Stanza 3 (lines 9-15): The speaker climbs to the loft, stretching the tape as far as it will go, while two floors below his mother still holds its very end. He reaches towards a trapdoor that opens on an "endless sky". The poem ends with the unresolved choice to "fall or fly": independence could bring triumph or disaster, and the speaker stands on the threshold between the two.',

  summaryAr:
    'المقطع 1 (الأبيات 1-4): المتكلّم (ذكر) يطلب من والدته إنها تساعده يقيس بيته الجديد: أي مسافة أطول من مدّ يده تحتاج شخص ثاني. المهمّة العاديّة البيتيّة ترسي القصيدة في الواقع، بس اللغة المبالغ فيها (الجدران تنقاس كأنها أراضي زراعية، والأرضيات كأنها "prairies") تلمّح لحجم الاستقلال البالغ المرعب.\n\n' +
    'المقطع 2 (الأبيات 5-8): الوالدة (أنثى) تمسك "zero-end" من الشريط، والمتكلّم (ذكر) يبتعد ويبلّغ القياسات للـ"base". الشريط يتحوّل إلى حبل سرّي، يتمدّد عبر البيت. المقطع يختم بـ"Anchor. Kite."، استعارتين قويّتين لثبات الوالدة (أنثى) ورغبة المتكلّم (ذكر) في الحريّة.\n\n' +
    'المقطع 3 (الأبيات 9-15): المتكلّم (ذكر) يطلع للعلّية ويمدّ الشريط لآخر حدّ، والوالدة تحت بطابقين للحين ماسكة آخر طرف منه. يمدّ يده لفتحة في السقف تطلّ على "endless sky". القصيدة تختم بالخيار المعلّق "fall or fly": الاستقلال يمكن يجيب نصر أو كارثة، والمتكلّم (ذكر) يقف على عتبة بين الاثنين.',

  formAndStructure:
    'Form: A loose, extended sonnet: the poem has 15 lines (one more than the traditional 14-line sonnet), echoing the love-sonnet tradition while exceeding it. Its irregular line lengths and lack of a strict rhyme scheme reflect the messy, imperfect reality of this parent-child relationship.\n\n' +
    'Stanza structure: Two quatrains followed by a longer final stanza of seven lines. The last stanza stretches out as the tape does, and the poem ends on a short line that stands out for emphasis.\n\n' +
    'Enjambment: Used extensively throughout, especially across lines 5 to 7, where line 6 ends on "leaving" before the stairs arrive. Lines run into each other just as the tape runs through the house, creating a sense of continuous movement away from the mother.\n\n' +
    'Caesura: "Anchor. Kite." uses dramatic full stops mid-line to create two punchy, contrasting images that encapsulate the poem\'s central tension.\n\n' +
    'Rhyme: There is no regular scheme, but full rhymes surface at lines 3 and 4 and in the last two lines, like moments of connection in a bond that is stretching but not yet broken.\n\n' +
    'End-stopped final line: "fall or fly" ends the poem with a stark choice, leaving the outcome unresolved: the speaker is suspended between two possibilities.\n\n' +
    'Extended metaphor: The measuring tape/umbilical cord metaphor is sustained throughout the entire poem, giving it structural and thematic coherence.',

  formAndStructureAr:
    'Form: sonnet ممتدّ ومرخّى: القصيدة 15 بيت (بيت زيادة عن الـsonnet التقليدي اللي هو 14 بيت)، فيها صدى لتقليد love-sonnet بس تتعدّاه. أطوال الأبيات غير المنتظمة وغياب نظام قافية صارم يعكسان الواقع الفوضوي وغير المثالي لهالعلاقة بين الأم والابن.\n\n' +
    'بنية المقاطع: مقطعين من أربع أبيات (quatrains)، وبعدهم مقطع أخير أطول من سبع أبيات. المقطع الأخير يتمدّد مثل ما يتمدّد الشريط، والقصيدة تختم ببيت قصير يبرز عشان التأكيد.\n\n' +
    'Enjambment: مستخدم بكثافة طول القصيدة، خصوصاً في الأبيات 5 إلى 7، وين البيت 6 ينتهي بـ"leaving" قبل ما توصل الدرج. الأبيات تنساب لبعضها، تماماً مثل ما ينساب الشريط عبر البيت، فتخلق إحساس بحركة متواصلة بعيداً عن الوالدة (أنثى).\n\n' +
    'Caesura: "Anchor. Kite." يستخدم نقاط دراماتيكيّة في نص البيت عشان يخلق صورتين قويّتين متضادّتين، تختصران التوتر المركزي في القصيدة.\n\n' +
    'Rhyme: ما فيه نظام قافية منتظم، بس تطلع قوافي كاملة في البيتين 3 و4 وفي آخر بيتين، مثل لحظات اتّصال في رابط يتمدّد بس ما انقطع.\n\n' +
    'البيت الأخير المنغلق: "fall or fly" يختم القصيدة بخيار حادّ، يترك النتيجة معلّقة بدون حلّ: المتكلّم (ذكر) معلّق بين احتمالين.\n\n' +
    'الاستعارة الممتدّة (extended metaphor): استعارة شريط القياس / الحبل السرّي تستمر طول القصيدة، فتعطيها تماسك بنيوي وموضوعي.',

  keyQuotes: [
    {
      quote: 'prairies',
      analysis:
        "The poem opens by saying that anything longer than one person's reach needs two people to measure it, so from the first lines the speaker admits he still needs his mother. Line 4 then measures the walls like farmland and the floors like prairies: hyperbolic metaphors that turn a domestic interior into a vast landscape, reflecting the speaker's anxiety about the scale of adult responsibility.",
      themes: ['Independence', 'Fear', 'Growing Up'],
      analysisAr:
        'القصيدة تبدأ بإن أي مسافة أطول من مدّ يد شخص واحد تحتاج شخصين عشان تنقاس، فمن أول الأبيات المتكلّم (ذكر) يعترف إنه للحين يحتاج أمّه. وبعدين البيت 4 يقيس الجدران كأنها أراضي زراعية والأرضيات كأنها prairies: استعارات مبالغ فيها تحوّل الفضاء البيتي الداخلي إلى مشهد طبيعي شاسع، وتعكس قلق المتكلّم (ذكر) من حجم مسؤوليّة البالغين.',
      themesAr: ['الاستقلال', 'الخوف', 'النضوج'],
    },
    {
      quote: 'zero-end',
      analysis:
        'In line 5 the mother holds the start of the tape, the origin point where everything begins. She is the foundation of the speaker\'s entire life, and he measures his distance from her. As he moves away he reports the figures back to "base" (line 6), military language that casts him as an explorer venturing into unknown territory and her as the safe point to return to.',
      themes: ['Family', 'Dependence', 'Origins'],
      analysisAr:
        'في البيت 5 الوالدة (أنثى) تمسك بداية الشريط، نقطة الأصل اللي يبدأ منها كل شي. هي الأساس لحياة المتكلّم (ذكر) كلّها، وهو يقيس بُعده عنها. ولما يبتعد يبلّغ الأرقام للـ"base" (البيت 6)، لغة عسكريّة الطابع تصوّره كمستكشف يخوض في أرض مجهولة، وتصوّرها هي كالنقطة الآمنة اللي يرجع لها.',
      themesAr: ['العائلة', 'الاعتماد', 'الأصول'],
    },
    {
      quote: 'feeding',
      analysis:
        'In line 7 the tape, like an umbilical cord, keeps unspooling behind him. "Feeding" echoes a mother nourishing her child: the connection sustains the speaker even at a distance, but it is thinning.',
      themes: ['Family', 'Connection', 'Separation'],
      analysisAr:
        'في البيت 7 الشريط، مثل الحبل السرّي، يستمر بالانفكاك وراه. كلمة "feeding" تستحضر صورة الأم (أنثى) وهي تغذّي ابنها. الاتصال يديم وجود المتكلّم (ذكر) حتى عن بُعد، بس يصير أرقّ وأرقّ.',
      themesAr: ['العائلة', 'الاتصال', 'الانفصال'],
    },
    {
      quote: 'Anchor. Kite.',
      analysis:
        "Two single-word sentences in line 8 that crystallise the poem's central conflict. The mother is an anchor (grounding, stable, heavy) and the speaker is a kite (airborne, free, but dependent on the string). The tension between these is never resolved.",
      themes: ['Family', 'Independence', 'Tension'],
      analysisAr:
        'جملتين كل وحدة كلمة واحدة في البيت 8، تختصران الصراع المركزي في القصيدة. الوالدة (أنثى) هي مرساة (تثبّت، تستقر، ثقيلة)، والمتكلّم (ذكر) طيّارة ورق (محلّق، حر، بس معتمد على الخيط). التوتر بين الاثنين ما ينحلّ أبداً.',
      themesAr: ['العائلة', 'الاستقلال', 'التوتّر'],
    },
    {
      quote: 'space-walk',
      analysis:
        "In line 9 the speaker turns an astronaut's weightless drift into his own verb as he moves through the empty bedrooms. The tape becomes the cable tethering him to his mother: he is floating free, but only because she holds the other end.",
      themes: ['Independence', 'Connection'],
      analysisAr:
        'في البيت 9 المتكلّم (ذكر) يحوّل سبح رائد الفضاء بلا وزن إلى فعل خاص فيه وهو يتنقّل في غرف النوم الفاضية. الشريط يصير الكابل اللي يربطه بأمّه: هو يطفو بحرّية، بس لأنها هي ماسكة الطرف الثاني.',
      themesAr: ['الاستقلال', 'الاتصال'],
    },
    {
      quote: 'pinch',
      analysis:
        'Two floors below him in line 12, the mother is still holding on. "Pinch" suggests a careful, precarious grip on the tiniest fraction of the tape: she is reluctant to let go, and the tape is almost at its end.',
      themes: ['Family', 'Letting go'],
      analysisAr:
        'تحت بطابقين في البيت 12، الوالدة (أنثى) للحين ماسكة. كلمة "pinch" توحي بمسكة حذرة ومهزوزة لأصغر جزء من الشريط: هي ما تبي تفلت، والشريط تقريباً وصل لآخره.',
      themesAr: ['العائلة', 'التخلّي'],
    },
    {
      quote: 'endless sky',
      analysis:
        'The sky beyond the loft hatch in line 14 represents limitless possibility and freedom, but "endless" also implies a void, without boundaries or safety. Independence is exciting but terrifying.',
      themes: ['Independence', 'Fear', 'Freedom'],
      analysisAr:
        'السماء ورا فتحة العلّية في البيت 14 ترمز للإمكانيّات اللي ما لها حدود وللحريّة، بس كلمة "endless" توحي كمان بفراغ: بدون حدود ولا أمان. الاستقلال مثير ومرعب في نفس الوقت.',
      themesAr: ['الاستقلال', 'الخوف', 'الحريّة'],
    },
    {
      quote: 'fall or fly',
      analysis:
        "The poem's final line presents two outcomes with equal weight. There is no reassurance: the speaker genuinely does not know whether independence will bring success or failure. The ambiguity is deliberate and powerful.",
      themes: ['Independence', 'Growing Up', 'Uncertainty'],
      analysisAr:
        'البيت الأخير في القصيدة يقدّم احتمالين بوزن متساوي. ما فيه طمأنينة: المتكلّم (ذكر) صادقاً ما يدري إذا الاستقلال راح يجيب له نجاح أو فشل. الغموض مقصود وقوي.',
      themesAr: ['الاستقلال', 'النضوج', 'عدم اليقين'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'zero-end ... feeding',
      effect:
        'The measuring tape represents the umbilical cord connecting mother and child, from the end she holds in line 5 to the tape still unspooling in line 7. As the speaker moves through the house, the tape stretches, just as the emotional bond stretches when a child leaves home. This metaphor unifies the entire poem.',
      lineRef: 5,
      effectAr:
        'شريط القياس يمثّل الحبل السرّي اللي يربط الأم بالابن، من الطرف اللي تمسكه في البيت 5 إلى الشريط اللي للحين ينفكّ في البيت 7. مع تنقّل المتكلّم (ذكر) في البيت، الشريط يتمدّد، تماماً مثل ما يتمدّد الرابط العاطفي لما الابن يغادر بيت الأهل. هالاستعارة توحّد القصيدة كاملة.',
    },
    {
      device: 'Hyperbole',
      example: 'prairies',
      effect:
        "Measuring the walls like farmland and the floors like prairies makes the new home feel overwhelmingly vast, reflecting the speaker's anxiety. The prairies evoke the American frontier: uncharted, wild territory.",
      lineRef: 3,
      effectAr:
        'قياس الجدران كأنها أراضي زراعية والأرضيات كأنها prairies يخلّي البيت الجديد يبيّن شاسع بشكل ساحق، ويعكس قلق المتكلّم (ذكر). والـprairies تستحضر سهول الحدود الأمريكية: أرض غير مكتشفة وبرّية.',
    },
    {
      device: 'Metaphor and caesura',
      example: 'Anchor. Kite.',
      effect:
        'Two contrasting metaphors compressed into two words. The anchor grounds and restricts; the kite soars but needs a string. The full stops create dramatic pauses, so each word lands with impact as a separate, weighty idea. Together they capture the push-and-pull of the parent-child relationship during separation.',
      lineRef: 8,
      effectAr:
        'استعارتين متضادّتين مكثّفتين في كلمتين. المرساة تثبّت وتقيّد؛ والطيّارة الورق تحلّق بس تحتاج خيط. والنقاط تخلق توقّفات دراماتيكيّة، فكل كلمة تنزل بأثر كفكرة منفصلة ثقيلة الوزن. مع بعض يلتقطان شد وجذب العلاقة بين الأم والابن وقت الانفصال.',
    },
    {
      device: 'Enjambment',
      example: 'leaving',
      effect:
        'Line 6 ends on "leaving", and the break physically enacts the separation. The word hangs at the end of the line before the reader discovers, in line 7, that he is only going upstairs: momentarily, it feels like leaving for good.',
      lineRef: 6,
      effectAr:
        'البيت 6 ينتهي بكلمة "leaving"، وانكسار البيت يجسّد الانفصال جسدياً. الكلمة تتعلّق في آخر البيت قبل ما يكتشف القارئ في البيت 7 إنه بس طالع الدرج: للحظة، يحسّ كأنه مغادرة نهائية.',
    },
    {
      device: 'Verb coinage',
      example: 'space-walk',
      effect:
        "An astronaut's space-walk becomes something the speaker does, weightless and tethered, as he drifts through the empty bedrooms. The coinage shows him actively making space between himself and his mother, while the tape, like an astronaut's cable, still keeps him attached.",
      lineRef: 10,
      effectAr:
        'السبح في الفضاء حق رائد الفضاء يصير فعل يسوّيه المتكلّم (ذكر)، بلا وزن ومربوط، وهو يطفو في غرف النوم الفاضية. هالكلمة المبتكرة تبيّن إنه يصنع مسافة بينه وبين أمّه بشكل نشط، والشريط، مثل كابل رائد الفضاء، للحين يربطه.',
    },
    {
      device: 'Symbolism',
      example: 'endless sky',
      effect:
        'The loft hatch in line 14 is a threshold between childhood (the house, the mother) and adulthood (the open sky). Stepping through it means leaving safety behind. The endless sky symbolises infinite possibility and vulnerability.',
      lineRef: 15,
      effectAr:
        'فتحة العلّية في البيت 14 عتبة بين الطفولة (البيت، الوالدة (أنثى)) والبلوغ (السماء المفتوحة). الخطوة من خلالها تعني ترك الأمان وراء الظهر. والسماء اللي ما لها نهاية ترمز للإمكانيّات اللا نهائية وللانكشاف.',
    },
    {
      device: 'Ambiguity',
      example: 'fall or fly',
      effect:
        'The final line refuses to resolve the poem\'s tension. "Fall" and "fly" are given equal weight, reflecting the genuine uncertainty of growing up. The reader is left suspended, just like the speaker.',
      lineRef: 16,
      effectAr:
        'البيت الأخير يرفض إنه يحلّ التوتر في القصيدة. "fall" و"fly" تعطى لكل وحدة وزن متساوي، فيعكسان عدم اليقين الصادق في النضوج. القارئ يبقى معلّق، تماماً مثل المتكلّم (ذكر).',
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mad-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'Buying furniture',
      'A son measuring his new home with his mother, using the tape measure as a metaphor for their bond',
      'A mother redecorating',
      'Moving house literally',
    ],
    correctIndex: 1,
    explanation:
      'The speaker measures rooms in a new home with his mother holding one end of the tape measure. The extending tape becomes a metaphor for the umbilical cord - the bond that stretches as the child gains independence.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'mad-2',
    question: 'What does the tape measure symbolise?',
    type: 'multiple-choice',
    options: [
      'A DIY tool only',
      'The umbilical cord - the bond between mother and child that stretches but never quite breaks',
      'A ruler',
      'A telephone wire',
    ],
    correctIndex: 1,
    explanation:
      'The tape measure is an extended metaphor for the umbilical cord. The mother holds one end (the anchor) while the son moves further away. It stretches but maintains connection.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'mad-3',
    question: 'What does "Anchor. Kite." suggest about the mother and son?',
    type: 'multiple-choice',
    options: [
      'They enjoy sailing and flying kites',
      'The mother is the anchor (stability, security) while the son is the kite (freedom, flight, independence)',
      'They are both stuck',
      'It describes the weather',
    ],
    correctIndex: 1,
    explanation:
      'The one-word sentences encapsulate the relationship perfectly. The mother anchors; the son soars. Both are necessary - a kite needs an anchor, and an anchor needs something to hold.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'mad-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Almost a sonnet - 15 lines that fall just outside the 14-line sonnet form',
      'A ballad',
      'Rhyming couplets',
    ],
    correctIndex: 1,
    explanation:
      "The poem has 15 lines - almost but not quite a sonnet. This near-miss mirrors the poem's theme of almost-but-not-quite letting go, of boundaries being tested.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'mad-5',
    question: 'Who is Simon Armitage?',
    type: 'multiple-choice',
    options: [
      'A Victorian poet',
      'The current Poet Laureate, known for accessible, conversational poetry rooted in Northern English experience',
      'A war correspondent',
      'A Romantic poet',
    ],
    correctIndex: 1,
    explanation:
      'Simon Armitage (b. 1963) became Poet Laureate in 2019. He is known for accessible, witty poetry that uses everyday language and imagery to explore universal themes.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'mad-6',
    question: 'What does "fall or fly" (line 15) suggest about independence?',
    type: 'multiple-choice',
    options: [
      'The speaker is afraid of heights',
      'Independence is presented as both thrilling and terrifying - freedom carries the risk of failure',
      'The speaker is a pilot',
      'It describes a bird',
    ],
    correctIndex: 1,
    explanation:
      'The final image presents independence as a leap into the unknown. "Fly" suggests exciting freedom; "fall" suggests the risk of failure. Growing up means accepting both possibilities.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'mad-7',
    question: 'What is the effect of the spatial imagery (floors, stairs, loft)?',
    type: 'multiple-choice',
    options: [
      'It describes a house tour',
      "The upward movement through the house mirrors the son's growing independence - higher means further from the mother",
      'It shows the house is large',
      'It is random description',
    ],
    correctIndex: 1,
    explanation:
      'The speaker moves upward through the house - from ground floor to loft. Each level takes him further from his mother at the base, physically enacting the growing distance of independence.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-8',
    question: 'What does the verb "pinch" (line 12) suggest about the mother?',
    type: 'multiple-choice',
    options: [
      'The mother has strong hands',
      'The mother clings to the very last possible point of connection - she is reluctant to let go completely',
      'The tape measure is stuck',
      'The measurement is exact',
    ],
    correctIndex: 1,
    explanation:
      'She is gripping only the tiniest fraction of the tape, measured precisely in line 13, which shows how little connection remains - and yet the mother still holds on. The image captures the painful reluctance of letting go.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-9',
    question: 'How does the poem move from security to risk?',
    type: 'multiple-choice',
    options: [
      "It doesn't change",
      'It progresses from the safe, shared measuring to the speaker alone at the top, contemplating whether to fly or fall',
      'It moves from risk to security',
      'It stays at the same level',
    ],
    correctIndex: 1,
    explanation:
      'The poem charts a progression from the shared, secure activity of measuring together to the speaker alone at the hatch in the loft, facing the terrifying choice of independence.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-10',
    question: 'Which poem pairs best with Mother, any distance?',
    type: 'multiple-choice',
    options: [
      'Neutral Tones',
      'Before You Were Mine by Carol Ann Duffy',
      "Porphyria's Lover",
      'When We Two Parted',
    ],
    correctIndex: 1,
    explanation:
      "Both explore the mother-child bond. Before You Were Mine looks back at the mother's past; Mother, any distance captures the present moment of separation and independence.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Mother, any distance explores the mother-child bond, the tension between security and independence, and the frightening thrill of growing up.',
    keyPoints: [
      'The umbilical cord metaphor - the bond stretches but persists',
      'Independence - thrilling but terrifying ("fall or fly")',
      'The mother as anchor - stability and reluctance to let go',
      'Growing up means accepting risk',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Armitage uses the extended tape measure metaphor, spatial imagery, and the anchor/kite contrast to explore separation.',
    keyPoints: [
      'Tape measure as umbilical cord - physical bond stretching',
      '"Anchor. Kite." - one-word sentences encapsulate the dynamic',
      '"Fall or fly" - independence as both risk and freedom',
      '"Pinch" (line 12) - the mother\'s reluctance to release',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Almost a sonnet (15 lines) - the near-miss form mirrors the theme of almost-but-not-quite separating.',
    keyPoints: [
      '15 lines - almost but not quite a sonnet',
      'Upward movement through the house mirrors growing independence',
      'Occasional full rhymes - moments of connection in a stretching bond',
      'Final image of the hatch onto an "endless sky" (line 14) - freedom and danger',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Armitage present the relationship between mother and son in Mother, any distance?',
  'Compare how parent-child separation is presented in Mother, any distance and one other poem from the anthology.',
  'How does Armitage use the extended metaphor of the tape measure to explore growing up?',
]

const comparePoems = [
  {
    title: 'Before You Were Mine',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/love-and-relationships/before-you-were-mine',
    reason:
      "Both explore the mother-child bond. Armitage focuses on separation; Duffy looks back possessively at her mother's life before motherhood.",
    themes: ['Family', 'Love', 'Independence'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both explore a child's evolving relationship with a parent. Heaney's roles reverse as the father ages; Armitage focuses on the moment of physical separation.",
    themes: ['Family', 'Growing Up'],
  },
  {
    title: 'Climbing My Grandfather',
    poet: 'Andrew Waterhouse',
    link: '/revision/poetry/love-and-relationships/climbing-my-grandfather',
    reason:
      'Both use extended metaphors to explore family bonds. Armitage uses a measuring tape; Waterhouse uses mountain climbing. Both convey love through physical imagery.',
    themes: ['Family', 'Love', 'Extended Metaphor'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function MotherAnyDistancePage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Mother, Any Distance by Simon Armitage - Analysis & Annotations"
        description="Line-by-line analysis of Mother, Any Distance with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('rev.poetry.shared.back_label_love_and_relationships')}
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Mother, any distance</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Simon Armitage &middot; <em>Book of Matches</em> (1993)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Family', 'Independence', 'Growing Up', 'Love', 'Separation', 'Fear'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Mother, any distance"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Mother, any distance"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={motherAnyDistancePoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          {t('rev.poetry.shared.compare_with')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cp.reason}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        The poem is paraphrased here, not reproduced; it is printed in full in the AQA Love and
        Relationships anthology. Short quotations are used for criticism and review under UK
        fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
