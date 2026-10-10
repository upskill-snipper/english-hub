import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  BookMarked,
  GitCompare,
  GraduationCap,
  Info,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'A Passage to Africa - George Alagiah - IGCSE Anthology - The English Hub',
    description:
      'Study guide for A Passage to Africa by George Alagiah. Thematic and structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
    images: [
      {
        url: '/api/og?title=A+Passage+to+Africa+-+George+Alagiah+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'A Passage to Africa - George Alagiah - IGCSE Anthology - The English Hub',
      },
    ],
  },
  title: 'A Passage to Africa - George Alagiah - IGCSE Anthology',
  description:
    'Study guide for A Passage to Africa by George Alagiah. Thematic and structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-passage-to-africa',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 4-5. This page taught words the extract does not contain. The
 * teacher note gave "smile of embarrassment" as Alagiah's phrase (the
 * translator says the man was embarrassed; Alagiah's own words are "the feeble
 * smile that goes with apology"), the irony note quoted the dead as "not
 * enough" to be news, and a "metaphor of arithmetic" was taught as the central
 * metaphor. Ten of the twelve vocabulary words, including ghastly, warring and
 * emaciated, were not in the extract either. The encounter is in a hamlet just
 * outside Gufgaduud, and the extract ends with his resolve to write the story
 * and a debt to a man whose name he never learned, not with the smile as an
 * "assertion of humanity". Check any new wording against the anthology first.
 *
 * SECOND PASS, 26 September 2026, same PDF. The moments ran out of order: the
 * smile came second and the search for the shocking third, although the
 * extract reaches the smile only at line 48 (the face appears at line 46; this
 * said 46 until 10 October 2026). The "most-quoted line" claim had
 * no source. The smile was said to be re-read "not as a greeting", but Alagiah
 * rules out a greeting before he asks the translator; what the answer changes is
 * that he understands it as an apology. The closing was said to recover an
 * individual "the opening submerged in the mass", but the opening sentence
 * already singles out the one face. Amina, the old woman and the confession of
 * revulsion, a third of the extract, were missing, and moments told as the
 * writer's technique were in the past tense.
 */
const keyMoments = [
  {
    id: 1,
    label: 'Opening - a thousand faces, and one',
    labelAr: 'الافتتاح - ألفُ وجهٍ، ووجهٌ واحد',
    context:
      'Alagiah opens with a single sentence. He saw a thousand starving faces between the end of 1991 and December 1992, as he criss-crossed Somalia, but one of them he will never forget. The wide view of the famine and the promise of one face arrive together, and the rest of the extract delays that face. The next paragraph takes the reader to a little hamlet outside Gufgaduud, which aid agencies had not yet reached, with directions copied from his notebook.',
    contextAr:
      'يستهلّ Alagiah بجملةٍ واحدة: رأى ألفَ وجهٍ جائع وهو يجوب الصومال بين أواخر 1991 وديسمبر 1992، لكنّ وجهاً واحداً منها لن ينساه أبداً. فتأتي النظرةُ الواسعة إلى المجاعة والوعدُ بوجهٍ واحد معاً، ويؤجّل بقيّةُ المقتطف ذلك الوجه. وتنقل الفقرةُ التالية القارئَ إلى نجعٍ صغيرٍ على مشارف Gufgaduud لم تبلغه وكالاتُ الإغاثة بعد، مع إرشاداتٍ منقولةٍ من دفتر ملاحظاته.',
  },
  {
    id: 2,
    label: 'The search for the shocking, hut by hut',
    labelAr: 'البحث عن الصادم، كوخاً كوخاً',
    context:
      'Alagiah and his cameraman go from hut to hut after the most striking pictures, and he admits that sights which would have appalled them when the trip began, only days before, no longer impress them much. He compares the search for shocking images to a craving for a drug that needs ever heavier doses, notes that pictures which stun editors one day are dismissed as routine the next, and admits this sounds callous before calling it a fact of life. What they find is set down flatly: Amina Abdirahman comes back from searching for wild roots to find that her daughter Habiba, aged ten, has died, and an old woman, left in her hut by relatives too weak to take her with them, lies with a rotting gunshot wound in her leg.',
    contextAr:
      'يتنقّل Alagiah ومصوّرُه من كوخٍ إلى كوخ بحثاً عن أشدّ الصور وقعاً، ويعترف بأنّ مشاهدَ كانت ستُفزعهما حين بدأت الرحلة، قبل أيّامٍ قليلة فقط، لم تعد تؤثّر فيهما كثيراً. ويشبّه البحثَ عن الصور الصادمة بالتعطّش إلى مخدّرٍ يحتاج جرعاتٍ أثقل فأثقل، ويذكر أنّ الصور التي تُذهل المحرّرين يوماً تُعدّ مكرّرةً في اليوم التالي، ويُقرّ بأنّ ذلك يبدو قاسياً قبل أن يعدّه أمراً واقعاً. أمّا ما يجدانه فيرويه بنبرةٍ مسطّحة: تعود Amina Abdirahman من البحث عن جذورٍ برّيّة لتجد أنّ ابنتها Habiba، ذات السنوات العشر، قد ماتت؛ وترقد امرأةٌ عجوز في كوخها، تركها أقاربُ أضعفُ من أن يأخذوها معهم، وفي ساقها جرحٌ متعفّن من رصاصة.',
  },
  {
    id: 3,
    label: 'The encounter outside Gufgaduud',
    labelAr: 'لقاءٌ على مشارف Gufgaduud',
    context:
      'A one-line paragraph announces the face he will never forget, but Alagiah holds it back. First he confesses that his reaction to everyone else he met that day was pity and revulsion, a feeling he says TV reports never admit. Then a man meets his eyes for only a few seconds and smiles before retreating into another hut. The smile is neither a greeting nor a sign of joy, yet it moves Alagiah beyond pity or revulsion. This single human gesture, made amid devastation, becomes the emotional centre of the extract.',
    contextAr:
      'تُعلن فقرةٌ من سطرٍ واحد الوجهَ الذي لن ينساه أبداً، لكنّ Alagiah يؤجّله. فهو يعترف أوّلاً بأنّ ردّ فعله تجاه كلّ مَن سواه ممّن التقاهم ذلك اليوم كان الشفقةَ والاشمئزاز، وهو شعورٌ يقول إنّ تقارير التلفزيون لا تعترف به أبداً. ثمّ يلتقي رجلٌ عينَي Alagiah ثوانيَ معدودة، فيبتسم قبل أن ينسحب إلى كوخٍ آخر. ليست الابتسامة تحيّةً ولا علامةَ فرح، لكنّها تحرّك Alagiah على نحوٍ يتجاوز الشفقة والاشمئزاز. هذه الإيماءةُ الإنسانيّة الوحيدة، الصادرةُ وسط الدمار، تصير المركزَ العاطفيَّ للمقتطف.',
  },
  {
    id: 4,
    label: 'The meaning of the smile',
    labelAr: 'معنى الابتسامة',
    context:
      'Alagiah cannot explain the smile, so he has his translator ask the man about it. The answer, that the man was embarrassed to be seen in that state, makes everything click: the smile was an apology, the kind given by someone who feels he is in the wrong. The starving man apologises to the well-fed visitor. The teacher note below gives Alagiah’s exact words.',
    contextAr:
      'لا يستطيع Alagiah أن يفسّر الابتسامة، فيطلب من مترجمه أن يسأل الرجل عنها. والجواب، أنّ الرجل كان محرَجاً لأن يُرى على تلك الحال، يجعل كلّ شيءٍ يتّضح: كانت الابتسامة اعتذاراً، من النوع الذي يبديه مَن يشعر بأنّه المخطئ. فالرجل الجائع يعتذر إلى الزائر الشبعان. وتورد ملاحظةُ المعلّم أدناه كلماتِ Alagiah بنصّها.',
  },
  {
    id: 5,
    label: 'Closing reflection',
    labelAr: 'التأمّل الختاميّ',
    context:
      'Alagiah ends by turning the smile back on himself: if the man was embarrassed to be found weakened by hunger, how should he feel, standing there strong and confident? He resolves to write the story of Gufgaduud, admits that he never found out the man’s name, and closes by telling his nameless friend that, if he is still alive, he owes him one. The extract has narrowed from a thousand faces to one, yet it cannot give that one a name.',
    contextAr:
      'يختم Alagiah بأن يُدير الابتسامةَ نحو نفسه: إن كان الرجل محرَجاً لأنّ الجوع أنهكه، فبماذا ينبغي أن يشعر هو، الواقفُ هناك قويّاً واثقاً؟ فيعزم على كتابة قصّة Gufgaduud، ويعترف بأنّه لم يعرف اسمَ الرجل قطّ، ويختم بمخاطبة صديقه المجهول الاسم مُقرّاً بأنّه، إن كان لا يزال حيّاً، مدينٌ له. لقد ضاق المقتطف من ألف وجهٍ إلى وجهٍ واحد، لكنّه لا يستطيع أن يمنح ذلك الوجه اسماً.',
  },
]

const languageFeatures = [
  {
    technique: 'Listing / accumulation',
    techniqueAr: 'التَّعداد / التَّراكُم',
    explanation:
      'Alagiah accumulates adjectives across physical, emotional and political registers in his opening sentence, overwhelming the reader with the multidimensional nature of the famine. The list does the work of a wide camera shot, and the same sentence then narrows to one face.',
    explanationAr:
      'يُكدّس Alagiah الصفاتِ في جملته الافتتاحيّة عبر مستوياتٍ جسديّة وعاطفيّة وسياسيّة، فيُغرق القارئَ بأبعاد المجاعة المتعدّدة. ويؤدّي التَّعدادُ وظيفةَ لقطةٍ سينمائيّة واسعة، ثمّ تضيق الجملةُ نفسها إلى وجهٍ واحد.',
  },
  {
    technique: 'Simile of addiction',
    techniqueAr: 'تشبيه الإدمان',
    explanation:
      "Alagiah compares the media's search for shocking images to the craving for a drug: the longer a reporter is at it, the heavier and more frequent the doses must be. Pictures that stun editors one day are dismissed as routine the next. He admits this sounds callous, so the reader feels Alagiah's discomfort with his own profession.",
    explanationAr:
      'يشبّه Alagiah بحثَ الإعلام عن الصور الصادمة بالتعطّش إلى مخدّر: كلّما طال عمل المراسل احتاج جرعاتٍ أثقل وأكثر تواتراً. والصور التي تُذهل المحرّرين يوماً تُعدّ مكرّرةً في اليوم التالي. ويُقرّ بأنّ ذلك يبدو قاسياً، فيشعر القارئ بضيق Alagiah من مهنته ذاتها.',
  },
  {
    technique: 'Contrast',
    techniqueAr: 'التَّضادّ',
    explanation:
      'The contrast between physical devastation and a small human gesture (the smile) is the emotional engine of the piece. It forces the reader to see the individual within the mass of suffering.',
    explanationAr:
      'التضادُّ بين الدمار الجسديّ وإيماءةٍ إنسانيّة صغيرة (الابتسامة) هو المحرّكُ العاطفيّ للعمل. ويُجبر القارئَ على رؤية الفرد داخل ركام المعاناة.',
  },
  {
    technique: 'Emotive and visceral diction',
    techniqueAr: 'المعجم الانفعاليّ الحسّيّ',
    explanation:
      'Alagiah chooses words that connote violent destruction and bodily decay, making abstract suffering concrete. The reader cannot maintain emotional distance from the language he selects.',
    explanationAr:
      'يختار Alagiah ألفاظاً توحي بالدمار العنيف والتحلّل الجسديّ، فيُحوّل المعاناة المجرّدة إلى محسوس. ولا يستطيع القارئ أن يحفظ مسافةً عاطفيّةً عن اللغة التي ينتقيها.',
  },
  {
    technique: 'Sensory language',
    techniqueAr: 'اللغة الحسّيّة',
    explanation:
      'He layers in sensory detail - particularly smell, the most unavoidable sense - to immerse the reader in the reality of the famine. You can look away from a photograph, but not a smell.',
    explanationAr:
      'يُكدّس التفاصيلَ الحسيّة - لا سيّما الشمّ، أكثر الحواسّ استعصاءً على التجنّب - كي يغمر القارئ في واقع المجاعة. يمكنك أن تُعرض عن صورة، لكنّك لا تستطيع أن تُعرض عن رائحة.',
  },
  {
    technique: 'Sentence variety',
    techniqueAr: 'تنوّع الجمل',
    explanation:
      "Long descriptive sentences are punctuated by short, declarative ones at moments of revelation. The shorter sentences function as emphasis and create rhythmic shifts that reflect the journalist's shifting emotional state.",
    explanationAr:
      'تتخلّل الجملَ الوصفيّةَ الطويلةَ جملٌ خبريّةٌ قصيرة في لحظات الكشف. وتؤدّي الجمل القصيرة دورَ التأكيد، وتُحدث تبدّلاتٍ إيقاعيّةً تعكس تبدّلَ الحالة العاطفيّة للصحفيّ.',
  },
  {
    technique: 'Irony',
    techniqueAr: 'المفارقة',
    explanation:
      'The text turns bitterly ironic when Alagiah admits that pictures which stun editors one day are dismissed as routine the next, and that such images are gathered to move viewers sitting comfortably at home. He uses irony to expose the moral failings of the media industry he was part of.',
    explanationAr:
      'يتّخذ النصُّ مفارقةً مُرّةً حين يُقرّ Alagiah بأنّ الصور التي تُذهل المحرّرين يوماً تُعدّ مكرّرةً في اليوم التالي، وأنّ هذه الصور تُجمع لتحريك مشاعر مشاهدين جالسين في راحة بيوتهم. ويستعمل المفارقةَ ليفضح الإخفاقاتِ الأخلاقيّة في صناعة الإعلام التي كان جزءاً منها.',
  },
  {
    technique: 'Repetition',
    techniqueAr: 'التكرار',
    explanation:
      "The motif of the smile recurs through the three paragraphs that begin when the face finally appears, and is redefined each time: first by what it is not (neither a greeting nor joy), then, once the translator explains the man's embarrassment, as the feeble smile that goes with apology, and finally as the gesture that has turned the tables on the unwritten code between journalist and subject. The repetition tracks Alagiah's changing understanding of a single gesture.",
    explanationAr:
      'يتكرّر موتيفُ الابتسامة في الفقرات الثلاث التي تبدأ حين يظهر الوجه أخيراً، ويُعاد تعريفُه في كلّ مرّة: أوّلاً بما ليس هو (لا تحيّة ولا فرح)، ثمّ، بعد أن يشرح المترجم حرجَ الرجل، بوصفه ابتسامةَ اعتذارٍ واهنة، وأخيراً بوصفه الإيماءةَ التي قلبت الموازين على العُرف غير المكتوب بين الصحفيّ وموضوعه. ويلاحق التكرار تطوُّرَ فهم Alagiah لإيماءةٍ واحدة.',
  },
  {
    // Until 26 September 2026 this said the text "shifts from reportage to
    // memoir". The whole extract is memoir, and it asks no question at all
    // before the smile (lines 49, 52 and 63-65 hold its only three).
    technique: 'Rhetorical questioning',
    techniqueAr: 'السؤال البلاغيّ',
    explanation:
      'Alagiah uses questions to draw the reader into his moral investigation, and he asks none until the smile appears. Then he breaks off to ask how it could have been a smile of joy, asks what it was about the smile, and ends the paragraph on the unwritten code by asking how he himself should feel. He never says how he should feel: his only answer is an action, to write the story, so the feeling is left to the reader, who becomes a fellow investigator of conscience.',
    explanationAr:
      'يستعمل Alagiah الأسئلة ليُدخل القارئَ في تحقيقه الأخلاقيّ، ولا يطرح أيّاً منها قبل ظهور الابتسامة. ثمّ يقطع كلامه ليسأل كيف يمكن أن تكون ابتسامةَ فرح، ويسأل ما الذي كان في تلك الابتسامة، ويختم الفقرةَ التي تتناول العُرف غير المكتوب بسؤاله كيف ينبغي أن يشعر هو نفسه. ولا يقول أبداً كيف ينبغي أن يشعر: جوابه الوحيد فعلٌ، هو أن يكتب القصّة، فيُترك الشعورُ للقارئ الذي يصير شريكاً في تحقيق الضمير.',
  },
  {
    technique: 'First-person reflective voice',
    techniqueAr: 'صوت المتكلّم المتأمّل',
    explanation:
      'The narrator is both observer and participant. The tension between Alagiah-the-journalist and Alagiah-the-human-being drives the piece - the professional who must record suffering and the person who feels it.',
    explanationAr:
      'الراوي مُراقبٌ ومُشاركٌ في آنٍ معاً. ويحرّك التوتّرُ بين Alagiah-الصحفيِّ وAlagiah-الإنسانِ العملَ - المحترفُ الذي يلزمه تسجيل المعاناة، والإنسانُ الذي يشعر بها.',
  },
]

/**
 * CORRECTED 26 September 2026 against the anthology's 13 paragraphs and 74
 * lines. Four claims were false. "Covering Somalia over weeks": the extract
 * gives the end of 1991 to December 1992. "Deadlines": the extract never
 * mentions one. Short paragraphs "for emotional moments": Habiba's death, the
 * old woman's wound and the confession of revulsion each fill an eight-line
 * paragraph; only the opening (2 lines), the face announced (1) and the
 * resolution (3) are short. And "the opening presents suffering as a mass": its
 * one sentence already picks out the face he will never forget. The climax was
 * also said to re-read the smile "not as a greeting", which Alagiah had ruled
 * out before he asked, and the resolution named a "guilt" the text never does
 * (it names a regret and a debt). The news-broadcast analogy had no source.
 */
const structuralAnalysis = {
  opening:
    'Alagiah opens with a single sentence that holds both scales at once: a thousand faces seen across Somalia, and the one face he will never forget. The wide shot comes first, but the close-up is promised in the same sentence, and the rest of the extract delays it.',
  openingAr:
    'يستهلّ Alagiah بجملةٍ واحدة تجمع المقياسَين معاً: ألفُ وجهٍ رآها في أنحاء الصومال، والوجهُ الواحد الذي لن ينساه أبداً. تأتي اللقطةُ الواسعة أوّلاً، لكنّ اللقطة القريبة يُوعَد بها في الجملة نفسها، ويؤجّلها بقيّةُ المقتطف.',
  development:
    'The text narrows its focus step by step: from a country and a thousand faces, to a hamlet outside Gufgaduud, then hut by hut to named people (Amina Abdirahman and her daughters Habiba and Ayaan) and an old woman, and finally to one man and one smile. Three paragraphs in a row open with the same construction, the third announcing the face; Alagiah then delays once more, confessing his feelings about everyone else before he describes it. This movement from wide shot to close-up is the text’s central structural device.',
  developmentAr:
    'يضيّق النصّ مدى تركيزه خطوةً خطوة: من بلدٍ وألف وجه، إلى نجعٍ على مشارف Gufgaduud، ثمّ كوخاً كوخاً إلى أناسٍ بأسمائهم (Amina Abdirahman وابنتَيها Habiba وAyaan) وامرأةٍ عجوز، وأخيراً إلى رجلٍ واحد وابتسامةٍ واحدة. وتبدأ ثلاثُ فقراتٍ متتالية بالتركيب نفسه، وتُعلن الثالثةُ منها الوجه؛ ثمّ يؤجّل Alagiah مرّةً أخرى، فيعترف بمشاعره تجاه كلّ مَن سواه قبل أن يصفه. وهذا الانتقال من اللقطة الواسعة إلى اللقطة القريبة هو الأداةُ البنائيّة المحوريّة في النصّ.',
  climax:
    'The emotional climax is the moment the translator’s answer makes the smile’s meaning click: it was an apology. The moral climax follows at once, as Alagiah sees that the smile has turned the tables on the unwritten code in which the journalist watches and the subject is watched.',
  climaxAr:
    'الذروةُ العاطفيّة هي اللحظة التي يجعل فيها جوابُ المترجم معنى الابتسامة يتّضح: كانت اعتذاراً. وتليها مباشرةً الذروةُ الأخلاقيّة، إذ يرى Alagiah أنّ الابتسامة قلبت الموازين على العُرف غير المكتوب الذي يُراقِب فيه الصحفيُّ ويُراقَب فيه موضوعُه.',
  resolution:
    'Alagiah turns the smile into a question about himself and about the rich and poor worlds, resolves to write the story of Gufgaduud, and closes by addressing the man whose name he never learned. The resolution is not neat: the regret and the debt remain. But he calls the meeting a formative moment in the slow gathering of experience that gives facts their meaning.',
  resolutionAr:
    'يُحوّل Alagiah الابتسامةَ إلى سؤالٍ عن نفسه وعن العالمَين الغنيّ والفقير، ويعزم على كتابة قصّة Gufgaduud، ثمّ يختم بمخاطبة الرجل الذي لم يعرف اسمه قطّ. والخاتمةُ ليست مرتّبة: يبقى الندمُ ويبقى الدَّين. لكنّه يصف اللقاء بأنّه لحظةٌ مُكوِّنة في التراكم البطيء للتجربة الذي يمنح الحقائقَ معناها.',
  perspective:
    'First person throughout. Alagiah writes as both journalist (observer) and human being (participant). The tension between these two roles drives the text: the professional who must record suffering and the person who feels it.',
  perspectiveAr:
    'ضمير المتكلّم في النصّ كلّه. يكتب Alagiah بوصفه صحفيّاً (مُراقباً) وإنساناً (مُشاركاً). ويحرّك التوتّرُ بين هذين الدورَين النصَّ: المحترفُ الذي يلزمه تسجيل المعاناة، والإنسانُ الذي يشعر بها.',
  paragraphing:
    'Most of the thirteen paragraphs run to between five and nine lines. Three stand out for their brevity: the one-sentence opening, the one-line paragraph that announces the face he will never forget, and the three-line paragraph in which he resolves to write the story. The most harrowing material (Habiba’s death, the old woman’s wound, the confession of revulsion) sits in full-length paragraphs, where the impact comes from short sentences inside them rather than from short paragraphs.',
  paragraphingAr:
    'تتراوح معظمُ الفقرات الثلاث عشرة بين خمسة أسطر وتسعة. وتبرز ثلاثٌ منها بقِصَرها: الافتتاحُ المكوَّن من جملةٍ واحدة، والفقرةُ ذات السطر الواحد التي تُعلن الوجهَ الذي لن ينساه أبداً، والفقرةُ ذات الأسطر الثلاثة التي يعزم فيها على كتابة القصّة. أمّا أقسى المادّة (موتُ Habiba، وجرحُ المرأة العجوز، والاعترافُ بالاشمئزاز) فتقع في فقراتٍ كاملة الطول، يأتي أثرُها من الجمل القصيرة داخلها لا من قِصَر الفقرات.',
  time: 'The extract moves between the months he spent criss-crossing Somalia, from the end of 1991 to December 1992, and one day in a hamlet outside Gufgaduud. It also keeps two times in view: the reporter then, whose notebook directions and broadcast dispatch Alagiah quotes, and the writer looking back, who says his resolution still seems as right as it did then, and who has searched his notes and the BBC’s broadcast only to find that he never learned the man’s name.',
  timeAr:
    'يتنقّل المقتطف بين الأشهر التي قضاها يجوب الصومال، من أواخر 1991 إلى ديسمبر 1992، ويومٍ واحد في نجعٍ على مشارف Gufgaduud. ويُبقي كذلك زمنَين في الأفق: المراسلَ آنذاك، الذي يقتبس Alagiah إرشاداتِ دفتره وتقريرَه المُذاع، والكاتبَ الذي ينظر إلى الوراء، فيقول إنّ عزمه ما زال يبدو صائباً كما بدا حينها، وقد بحث في ملاحظاته وفي ما بثّته BBC ليجد أنّه لم يعرف اسمَ الرجل قطّ.',
  openingClosing:
    'The opening sentence moves from a thousand faces to the one he will never forget; the closing sentence speaks to that one man directly, as a friend whose name he never learned. The arc from crowd to individual is complete, but the man is recovered as a presence rather than as a person, and Alagiah is honest enough to let the reader see it.',
  openingClosingAr:
    'تنتقل جملةُ الافتتاح من ألف وجهٍ إلى الوجه الواحد الذي لن ينساه أبداً؛ وتخاطب جملةُ الختام ذلك الرجلَ نفسه مباشرةً، صديقاً لم يعرف اسمه قطّ. يكتمل القوسُ من الجموع إلى الفرد، لكنّ الرجل يُستعاد حضوراً لا شخصاً، وAlagiah صادقٌ بما يكفي ليدع القارئ يرى ذلك.',
}

// Two claims here were not in the extract until 26 September 2026: that
// Alagiah asks whether the media dehumanises people "it claims to help" (the
// extract never says the media claims to help anyone), and that the central
// argument is a human being "behind every news report". The last paragraph's
// argument is about facts and where they sit, which it calls context.
const writersPurpose = {
  achieve:
    'Alagiah wanted to explore the moral complexity of being a journalist in a crisis zone, and to do it from inside his own trade. In the extract he is frank about the hunt for shocking pictures, admits that he and his cameraman were hardened within days, and shows how one man’s embarrassment at being seen made him ask how he himself should feel.',
  achieveAr:
    'أراد Alagiah أن يستكشف التعقيدَ الأخلاقيَّ في كون المرء صحفيّاً داخل منطقة أزمة، وأن يفعل ذلك من داخل مهنته. ففي المقتطف يتحدّث بصراحة عن البحث عن الصور الصادمة، ويعترف بأنّه ومصوّرَه تبلّدا خلال أيّام، ويُبيّن كيف دفعه حرجُ رجلٍ واحد من أن يُرى على حاله إلى أن يسأل كيف ينبغي أن يشعر هو نفسه.',
  readerFeel:
    'He wanted the reader to feel the uncomfortable tension between compassion and voyeurism - the same tension he felt as a correspondent. He also wanted to restore humanity to the people he reported on.',
  readerFeelAr:
    'أراد للقارئ أن يشعر بالتوتّر المُربك بين الشفقة والفُرجة - التوتّر نفسه الذي شعر به مراسلاً. كما أراد أن يستعيد إنسانيّةَ من غطّى أحوالَهم.',
  message:
    "His central argument, stated in the last paragraph, is that facts and figures are the easy part of journalism, and that the hard part is seeing where they fit in the wider scheme; meeting the man was a formative moment in learning it. The man's apologetic smile makes Alagiah ask how he himself should feel, standing there strong and confident. The extract notes that even people in utter despair aspire to dignity, and the smile can be read in that light.",
  messageAr:
    'حُجّتُه المركزيّة، كما يصرّح بها في الفقرة الأخيرة، أنّ الحقائق والأرقام هي الجزء السهل من الصحافة، وأنّ الجزء الصعب هو إدراك موقعها من الصورة الأوسع؛ وكان لقاؤه بالرجل لحظةً مُكوِّنة في تعلّم ذلك. وابتسامةُ الرجل الاعتذاريّة تدفع Alagiah إلى أن يسأل كيف ينبغي أن يشعر هو، وهو واقفٌ هناك قويّاً واثقاً. ويذكر المقتطف أنّ مَن بلغوا أقصى اليأس يطمحون مع ذلك إلى الكرامة، ويمكن قراءة الابتسامة في ضوء ذلك.',
}

// Every word below is in the anthology extract; revulsion, surreptitiously and
// inured are the three it footnotes. Until 26 September 2026 ten of these
// twelve were words the extract does not use.
const keyVocabulary = [
  {
    word: 'criss-crossed',
    definition: 'To move back and forth across an area repeatedly.',
    definitionAr: 'التنقّل ذهاباً وإياباً عبر منطقةٍ مراراً وتكراراً.',
  },
  {
    word: 'revulsion',
    definition:
      'Strong disgust; the anthology glosses it simply as disgust. Alagiah admits his reaction to everyone else he met that day, apart from the man who smiled, was a mixture of pity and revulsion.',
    definitionAr:
      'اشمئزازٌ شديد؛ وتشرحها المختارات بكلمةٍ واحدة: الاشمئزاز. يعترف Alagiah بأنّ ردّ فعله تجاه كلّ مَن التقاهم ذلك اليوم، ما عدا صاحبَ الابتسامة، كان مزيجاً من الشفقة والاشمئزاز.',
  },
  {
    // The anthology's three glosses are single words (disgust, secretly,
    // hardened). Until 26 September 2026 the fuller definitions below were
    // labelled as the anthology's own.
    word: 'surreptitiously',
    definition:
      'Secretly (the anthology’s gloss), so as not to be noticed. Used of wiping your hands on your trousers in a feeding centre.',
    definitionAr:
      'خِفيةً (وهو شرح المختارات)، دون أن يلاحظ أحد. تُستعمل لوصف مسح اليدين بالسروال خِلسةً في مركز التغذية.',
  },
  {
    word: 'degeneration',
    definition:
      'Decline into a worse physical state; here, the human body wasted by hunger and disease.',
    definitionAr: 'التدهور إلى حالٍ جسديّةٍ أسوأ؛ وهنا جسدُ الإنسان الذي أنهكه الجوع والمرض.',
  },
  {
    word: 'inured',
    definition:
      'Hardened (the anthology’s gloss), so that something unpleasant no longer has much effect. Alagiah was normally inured to stories of suffering, yet one smile unsettled him.',
    definitionAr:
      'متبلّدُ الحسّ (وهو شرح المختارات)، فلا يعود الأمرُ المؤلم يؤثّر فيه كثيراً. كان Alagiah عادةً متبلّداً تجاه قصص المعاناة، لكنّ ابتسامةً واحدة أقلقته.',
  },
  {
    word: 'callous',
    definition:
      'Unkind and insensitive to other people’s suffering. Alagiah admits the media’s appetite for shocking pictures sounds callous.',
    definitionAr:
      'قاسٍ لا يبالي بمعاناة الآخرين. يُقرّ Alagiah بأنّ نَهَم الإعلام إلى الصور الصادمة يبدو قاسياً.',
  },
  {
    word: 'famine',
    definition: 'Extreme scarcity of food affecting a population, often causing widespread death.',
    definitionAr: 'شُحٌّ شديد للطعام يصيب جمهرةً، ويُفضي غالباً إلى موتٍ واسع.',
  },
  {
    word: 'putrid',
    definition: 'Rotting and foul-smelling.',
    definitionAr: 'متعفّنٌ كريه الرائحة.',
  },
  {
    word: 'feeble',
    definition: 'Weak, lacking strength; Alagiah uses it of the man’s apologetic smile.',
    definitionAr: 'واهنٌ ضعيف؛ يصف به Alagiah ابتسامةَ الرجل الاعتذاريّة.',
  },
  {
    word: 'dispatch',
    definition: 'A report sent back by a correspondent; here, Alagiah’s BBC reports from Somalia.',
    definitionAr: 'تقريرٌ يُرسله المراسل؛ وهنا تقارير Alagiah من الصومال إلى BBC.',
  },
  {
    // Until 10 October 2026 the Arabic called it a pivotal moment (مفصليّة),
    // which reads as a turning point. The extract makes it one moment in a
    // gradual collection of experiences, so it is formative, as elsewhere here.
    word: 'seminal',
    definition:
      'Strongly influencing what comes later; Alagiah calls meeting the man a seminal moment.',
    definitionAr: 'بالغُ الأثر فيما يليه؛ يصف Alagiah لقاءه بالرجل بأنّه لحظةٌ مُكوِّنة.',
  },
  {
    word: 'shrivelled',
    definition: 'Wrinkled and shrunken, especially through lack of food or water.',
    definitionAr: 'متغضّنٌ منكمش، لا سيّما بسبب نقص الطعام أو الماء.',
  },
]

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'A Passage to Africa'

/**
 * CORRECTED 26 September 2026 to match what Pearson's 4EA1 Paper 1 actually
 * sets on the anthology text. This section used to ask a "List four things"
 * question about conditions in Somalia (Retrieval, 4 marks), a language-only
 * question and a structure-only question (12 marks each). None of those exists.
 * On every Pearson paper, mark scheme and examiners' report checked (the 2016
 * sample assessment S52496A, the 2017 extra assessment S58056A, the June 2019
 * report, the 2021 papers P65890A and P65891RA, the June 2023 4EA1/01R paper,
 * the November 2023 paper and mark scheme, the May and November 2024 papers
 * and the June 2025 mark scheme and report), Q1-Q3 are short answers on Text
 * One, the unseen extract. The only question on the anthology text alone is
 * Q4: one 12-mark AO2 question on language AND structure across the whole
 * extract, marked on one grid. Q5 (22 marks, AO3) compares it with the unseen
 * extract, never with another anthology text. The retrieval answer was also
 * sent to Q2, a question on Text One, so it was always marked as the wrong
 * question.
 *
 * The English `type` labels are what questionIdForPracticeType maps: "12
 * marks" gives Q4 and "22 marks" gives nothing, which is why q3 has no marking
 * button. Pass the button `type`, never `typeAr`. Until 26 September 2026 the
 * mapping read only Western digits followed by "marks", so passing the Arabic
 * label removed every button on the Arabic page without an error. The English
 * label keeps the mapping independent of any translation.
 */
const examPractice = {
  q1: {
    question:
      'How does the writer, George Alagiah, use language and structure to move from a wide view of suffering to one individual? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، George Alagiah، اللغةَ والبنيةَ ليتنقّل من نظرةٍ واسعة على المعاناة إلى فردٍ واحد؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ قصيرة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, George Alagiah, use language and structure to convey the impact of suffering on the victims and on himself as a journalist? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، George Alagiah، اللغةَ والبنيةَ لنقل أثر المعاناة في الضحايا وفيه شخصيّاً بوصفه صحفيّاً؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ قصيرة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
    // The fourth point first called the smile "the turning point" (26 September
    // 2026). The extract says the smile moved him beyond pity or revulsion, and
    // calls the meeting a seminal moment in a gradual process, not a sudden turn.
    modelOutline: [
      'Identify the simile Alagiah uses for the media’s search for shocking images and explain how it, with his admission that this sounds callous, reveals his own moral discomfort with the profession.',
      'Track the listing of adjectives in the opening: how the cumulative effect moves the reader through the physical, emotional and political dimensions of suffering in a single sentence.',
      'Analyse the sensory language - particularly references to smell - and explain why this sense is harder to ignore than visual description.',
      'Explain the delay at the centre of the extract: a single-sentence paragraph announces the face he will never forget, but Alagiah first confesses the pity and revulsion he felt for everyone else he met, so when the man’s smile comes it is measured against those two feelings, and it moves him beyond both.',
      'Examine the central contrast between devastation and the human gesture of the smile. Why does this contrast force both Alagiah and the reader to reconsider how they see victims of crisis?',
    ],
    modelOutlineAr: [
      'حدّد التشبيه الذي يستعمله Alagiah لبحث الإعلام عن الصور الصادمة، واشرح كيف يكشف هذا التشبيه، مع اعترافه بأنّ ذلك يبدو قاسياً، ضيقَه الأخلاقيَّ من مهنته.',
      'تتبّع تَعدادَ الصفات في الافتتاح: كيف ينقل الأثرُ التراكميُّ القارئَ عبر الأبعاد الجسديّة والعاطفيّة والسياسيّة للمعاناة في جملةٍ واحدة.',
      'حلِّل اللغةَ الحسيّة - لا سيّما إشارات الشمّ - واشرح لماذا تستعصي هذه الحاسّة على التجاهل أكثر من الوصف البصريّ.',
      'اشرح التأجيلَ في وسط المقتطف: فقرةٌ من جملةٍ واحدة تُعلن الوجهَ الذي لن ينساه أبداً، لكنّ Alagiah يعترف أوّلاً بالشفقة والاشمئزاز اللذين شعر بهما تجاه كلّ مَن التقاهم غيره، فحين تأتي ابتسامةُ الرجل تُقاس بهذين الشعورَين، وتحرّكه على نحوٍ يتجاوزهما كليهما.',
      'افحص التضادَّ المحوريَّ بين الدمار وإيماءة الابتسامة الإنسانيّة. لماذا يُجبر هذا التضادُّ Alagiah والقارئَ معاً على إعادة النظر في كيفيّة رؤية ضحايا الأزمات؟',
    ],
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about witnessing suffering.',
    questionAr:
      'في الامتحان، يطلب منك السؤال 5 أن تقارن هذا المقتطف بنصٍّ غير مرئيّ. تدرّب بأيّ نصٍّ في موضوعٍ مشابه: قارن كيف يقدّم الكاتبان أفكارَهما ووجهاتِ نظرهما عن مشاهدة المعاناة.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
  },
}

// Reasons checked 26 September 2026 against the anthology's Adichie, Zeppa and
// Ralston extracts. The Adichie card said Alagiah's media "creates" the single
// story, which neither extract says (Adichie blames popular images; Alagiah
// admits the media's appetite for shocking pictures). The Zeppa card called his
// extract an encounter with "unfamiliar cultures" and "guilt-laden", and hers a
// "travel memoir": his is about a famine and names a regret, not guilt, and hers
// is a memoir of her early days teaching in Bhutan.
const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Adichie warns against a single story of Africa as a place of catastrophe, one that popular images feed; Alagiah, a BBC correspondent, admits the media’s appetite for shocking pictures. Compare how each writer handles the ethics of representing Africa and the tension between individual stories and collective narratives.',
    reasonAr:
      'تحذّر Adichie من قصّةٍ واحدة عن إفريقيا بوصفها مكاناً للكوارث، قصّةٍ تغذّيها الصورُ الشائعة؛ ويعترف Alagiah، مراسلُ BBC، بنَهَم الإعلام إلى الصور الصادمة. قارن كيف يتعامل كلّ كاتب مع أخلاقيّات تمثيل إفريقيا، ومع التوتّر بين القصص الفرديّة والروايات الجماعيّة.',
    themes: ['Africa', 'Representation', 'Media'],
    themesAr: ['إفريقيا', 'التمثيل', 'الإعلام'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      'Both writers are outsiders far from home: Alagiah a television reporter in a famine, Zeppa a young Canadian newly arrived to teach in Bhutan. Compare Alagiah’s self-questioning account of a crisis with Zeppa’s wonder-filled memoir of her first days in the country: two very different ways of writing about the unfamiliar.',
    reasonAr:
      'كلا الكاتبَين غريبٌ بعيدٌ عن وطنه: Alagiah مراسلٌ تلفزيونيّ في مجاعة، وZeppa كنديّةٌ شابّة وصلت لتوّها لتُدرّس في بوتان. قارن رواية Alagiah التي يُسائل فيها نفسه عن أزمة، بسيرة Zeppa المُفعمة بالدهشة عن أيّامها الأولى في البلد: طريقتان مختلفتان جدّاً في الكتابة عن المجهول.',
    themes: ['Outsider perspective', 'Cultural encounter', 'Personal growth'],
    themesAr: ['منظور الغريب', 'اللقاء الثقافيّ', 'النموّ الشخصيّ'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      "Both texts deal with extreme physical suffering. Compare Ralston's first-person survival narrative with Alagiah's journalistic witness account - one is the sufferer, the other is the observer.",
    reasonAr:
      'يتناول النصّان معاناةً جسديّةً قصوى. قارن سردَ Ralston الناجي بضمير المتكلّم بشهادة Alagiah الصحفيّة - أحدهما المُعاني، والآخر المُراقب.',
    themes: ['Suffering', 'Survival', 'Human resilience'],
    themesAr: ['المعاناة', 'النجاة', 'صمود الإنسان'],
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function APassageToAfricaPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])
  const locale = await getLocale()
  const ar = locale === 'ar'
  const momentPrefix = await t('anth_text.moment_prefix')
  const teacherNote = await t('anth_text.teacher_note')

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('anth_text.back_to_anthology')}
        </Button>

        <div className="mb-4 rounded-md border border-blue-500/30 bg-blue-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-blue-950/20">
          <strong className="text-foreground">{await t('anth_text.rebuilt_label')}</strong>{' '}
          {/* Until 26 September 2026 this said quotations awaited a "licensed"
              copy. Pearson publishes the anthology free, and the page was
              checked against it. */}
          {ar
            ? 'رُوجعت الاقتباساتُ القصيرة في هذه الصفحة مقابل مختارات Pearson (الإصدار 8، فبراير 2026)، التي تنشرها Pearson مجّاناً بصيغة PDF. ارجع إلى المختارات للنصّ الكامل للمقتطف.'
            : 'Short quotations on this page have been checked against Pearson’s anthology (Issue 8, February 2026), which Pearson publishes free as a PDF. Use the anthology for the full text of the extract.'}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              A Passage to Africa
            </h1>
            <p className="text-body-sm text-muted-foreground">
              George Alagiah (1955&ndash;2023) &middot;{' '}
              {ar ? 'سيرة / صحافة' : 'Memoir / journalism'}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                {await t('anth_text.badge_lang_a')}
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                {await t('anth_text.badge_paper_1a')}
              </Badge>
            </div>
            <p className="mt-3 max-w-3xl text-body-sm text-muted-foreground leading-relaxed">
              {ar ? (
                <>
                  <strong className="text-foreground">George Alagiah (1955&ndash;2023)</strong>{' '}
                  صحفيٌّ ومذيعٌ بريطانيّ مولودٌ في سريلانكا، عمل في BBC. والمقتطفُ في المختارات
                  مأخوذٌ من سيرته بالعنوان نفسه (2001)، ويروي تغطيتَه لمجاعة الصومال 1992، ولقاءً
                  قصيراً مع رجلٍ في نجعٍ صغيرٍ على مشارف قرية Gufgaduud.
                </>
              ) : (
                <>
                  <strong className="text-foreground">George Alagiah (1955&ndash;2023)</strong> was
                  a Sri Lankan-born British BBC journalist and broadcaster. The anthology extract,
                  drawn from his 2001 memoir of the same name, recounts his reporting on the 1992
                  Somalia famine and a brief encounter with a man in a small hamlet just outside the
                  village of Gufgaduud.
                </>
              )}
            </p>
            <p className="mt-3 max-w-3xl rounded-md border border-amber-500/30 bg-amber-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-amber-950/20">
              <strong className="text-foreground">
                {await t('anth_text.rights_notice_label')}
              </strong>{' '}
              {/* The holder is as the anthology's acknowledgements give it. This
                  said "Alagiah estate via Pearson Education" until 26 September 2026. */}
              {ar
                ? '© George Alagiah 2001. يُعاد نشر المقتطف (Abacus، 2007، ص 87-90) في المختارات بإذنٍ من Little, Brown Book Group Limited والمؤلّف عبر The Hanbury Agency Ltd. وتنشر Pearson المختاراتِ كاملةً مجّاناً (ISBN 978-1-446-93108-0).'
                : '© George Alagiah 2001. The extract (Abacus, 2007, pp. 87-90) is reproduced in the anthology by permission of Little, Brown Book Group Limited and the author c/o The Hanbury Agency Ltd. Pearson publishes the full anthology free (ISBN 978-1-446-93108-0).'}
            </p>
          </div>
        </div>
      </div>

      {/* Key Moments */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.key_moments')}
          </h2>
          <span className="font-mono text-body-xs text-muted-foreground ms-auto">
            {await t('anth_text.use_with_anthology')}
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          {await t('anth_text.key_moments.intro')}
        </p>
        <div className="space-y-4">
          {keyMoments.map((moment) => (
            <div key={moment.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                {momentPrefix} {moment.id} - {ar ? moment.labelAr : moment.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {ar ? moment.contextAr : moment.context}
              </p>
              {moment.id === 4 && (
                <div className="mt-3 rounded-md border border-blue-500/30 bg-blue-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-blue-950/20">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                    <Info className="size-3.5" /> {teacherNote}
                  </span>
                  <p className="mt-1">
                    {/* "Smile of embarrassment" stood here as Alagiah's phrase until
                        26 September 2026. It is not in the extract. */}
                    {ar
                      ? 'يشرح المترجمُ أنّ الرجل كان محرَجاً لأنّه وُجد على تلك الحال. أمّا عبارةُ Alagiah نفسه فهي "the feeble smile that goes with apology"، أي الابتسامةُ الواهنة التي تصاحب الاعتذار. تحقّق من الصياغة في مختاراتك قبل الاقتباس.'
                      : 'The translator explains that the man was embarrassed to be found in that condition. Alagiah’s own words for it are “the feeble smile that goes with apology”. Check the wording in your anthology before quoting.'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Language Analysis */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.language_analysis')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.section.language_analysis.intro')}
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {ar ? f.techniqueAr : f.technique}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {ar ? f.explanationAr : f.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Structural Analysis */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.structural_analysis')}
          </h2>
        </div>
        <div className="space-y-4">
          {[
            {
              label: await t('anth_text.section.structural.opening'),
              content: ar ? structuralAnalysis.openingAr : structuralAnalysis.opening,
            },
            {
              label: await t('anth_text.section.structural.development'),
              content: ar ? structuralAnalysis.developmentAr : structuralAnalysis.development,
            },
            {
              label: await t('anth_text.section.structural.climax'),
              content: ar ? structuralAnalysis.climaxAr : structuralAnalysis.climax,
            },
            {
              label: await t('anth_text.section.structural.resolution'),
              content: ar ? structuralAnalysis.resolutionAr : structuralAnalysis.resolution,
            },
            {
              label: await t('anth_text.section.structural.perspective'),
              content: ar ? structuralAnalysis.perspectiveAr : structuralAnalysis.perspective,
            },
            {
              label: await t('anth_text.section.structural.paragraphing'),
              content: ar ? structuralAnalysis.paragraphingAr : structuralAnalysis.paragraphing,
            },
            {
              label: await t('anth_text.section.structural.time'),
              content: ar ? structuralAnalysis.timeAr : structuralAnalysis.time,
            },
            {
              label: await t('anth_text.section.structural.opening_closing'),
              content: ar ? structuralAnalysis.openingClosingAr : structuralAnalysis.openingClosing,
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Writer's Purpose */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.writers_purpose')}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.achieve_past')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {ar ? writersPurpose.achieveAr : writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.reader_feel_past')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {ar ? writersPurpose.readerFeelAr : writersPurpose.readerFeel}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.message')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {ar ? writersPurpose.messageAr : writersPurpose.message}
            </p>
          </div>
        </div>
      </section>

      {/* Key Vocabulary */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.key_vocabulary')}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyVocabulary.map((v) => (
            <div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3">
              <span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span>
              <p className="mt-1 text-body-xs text-muted-foreground">
                {ar ? v.definitionAr : v.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Practice */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.exam_practice')}
          </h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q1.typeAr : examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q1.questionAr : examPractice.q1.question}
            </p>
            {await PracticeMarkingButton({
              type: examPractice.q1.type,
              question: ar ? examPractice.q1.questionAr : examPractice.q1.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q2.typeAr : examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q2.questionAr : examPractice.q2.question}
            </p>
            {await PracticeMarkingButton({
              type: examPractice.q2.type,
              question: ar ? examPractice.q2.questionAr : examPractice.q2.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-clay-600 uppercase tracking-wider font-semibold">
                {await t('anth_text.exam.model_outline')}
              </span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {(ar ? examPractice.q2.modelOutlineAr : examPractice.q2.modelOutline).map(
                  (point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="shrink-0 text-amber-600 dark:text-clay-600">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q3.typeAr : examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q3.questionAr : examPractice.q3.question}
            </p>
            {/* No marking button here: the 22-mark label maps to nothing, and a
                call that renders nothing would still count as a button in the
                source (26 September 2026). */}
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {ar
                ? 'لا يمكن تصحيح هذا السؤال هنا: فهو يحتاج إلى النصّ غير المرئيّ الذي يقرنه الامتحان بهذا النصّ.'
                : "This question can't be marked here: it needs the unseen passage that the exam pairs with this text."}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Links */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}{' '}
          {/* Added 26 September 2026: the shared intro reads as if the exam
              pairs two anthology texts. 4EA1 Q5 never does. */}
          {ar
            ? 'في الامتحان نفسه، يقرن السؤالُ 5 هذا النصَّ بنصٍّ غير مرئيّ، لا بنصٍّ آخر من المختارات؛ وهذه المقارنات للمراجعة.'
            : 'In the exam itself, Question 5 pairs this text with an unseen passage, never with another anthology text: these comparisons are for revision.'}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {ar ? c.reasonAr : c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(ar ? c.themesAr : c.themes).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        {ar ? (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            © George Alagiah 2001، بإذنٍ من Little, Brown Book Group Limited والمؤلّف عبر The
            Hanbury Agency Ltd. وتنشر Pearson المختاراتِ كاملةً مجّاناً (ISBN 978-1-446-93108-0).{' '}
            <em>A Passage to Africa</em> لـ George Alagiah (1955-2023) ضمن سيرته{' '}
            <em>A Passage to Africa</em> (2001).
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            &copy; George Alagiah 2001, reproduced in the anthology by permission of Little, Brown
            Book Group Limited and the author c/o The Hanbury Agency Ltd. Pearson publishes the full
            anthology free (ISBN 978-1-446-93108-0). <em>A Passage to Africa</em> by George Alagiah
            (1955&ndash;2023) appears in his memoir <em>A Passage to Africa</em> (2001).
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
