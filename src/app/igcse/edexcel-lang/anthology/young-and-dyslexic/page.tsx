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
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  // The title was cut off at the apostrophe ("Young and Dyslexic? You") in
  // every field below until 26 September 2026.
  openGraph: {
    title: "Young and Dyslexic? You've Got It Going On - IGCSE Anthology - The English Hub",
    description:
      'Benjamin Zephaniah on dyslexia, for Edexcel IGCSE Language A: themes, language features, key vocabulary and Paper 1 Section A practice.',
    images: [
      {
        url: '/api/og?title=Young+and+Dyslexic%3F+You%27ve+Got+It+Going+On+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: "Young and Dyslexic? You've Got It Going On - IGCSE Anthology - The English Hub",
      },
    ],
  },
  title: "Young and Dyslexic? You've Got It Going On - IGCSE Anthology",
  description:
    'Benjamin Zephaniah on dyslexia, for Edexcel IGCSE Language A: themes, language features, key vocabulary and Paper 1 Section A practice.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/young-and-dyslexic',
  },
}

const themes = [
  {
    label: 'Reframing dyslexia',
    labelAr: 'إعادة تأطير الـ dyslexia',
    detail:
      'Zephaniah challenged the deficit view of dyslexia. The text repositioned the condition as a different way of thinking rather than a failing - a difference, not a deficiency.',
    detailAr:
      'يتحدّى Zephaniah النظرةَ القاصرة إلى الـ dyslexia. ويُعيد النصُّ تقديم هذه الحالة بوصفها طريقةً مختلفة في التفكير، لا قصوراً - اختلافاً لا عجزاً.',
  },
  {
    label: 'School and the education system',
    labelAr: 'المدرسة ومنظومة التعليم',
    detail:
      'The article drew on Zephaniah’s own experience of leaving school early and being labelled by teachers. It indicted a system that mistook one narrow definition of intelligence for the whole.',
    detailAr:
      'يستند المقالُ إلى تجربة Zephaniah في ترك المدرسة مبكّراً وإلصاق المعلّمين به الوسومَ. ويُدين منظومةً خلطت بين تعريفٍ ضيّق للذكاء وبين الذكاء كلِّه.',
  },
  {
    label: 'Identity and self-worth',
    labelAr: 'الهويّة وقيمة الذات',
    detail:
      'Zephaniah refused the labels imposed on him as a child. The text traced how he built an authorial identity that did not depend on the institutional approval he had been denied.',
    detailAr:
      'رفض Zephaniah الوسومَ المفروضة عليه طفلاً. ويتتبّع النصُّ كيف بنى هويّةً أدبيّةً لا تتّكئ على القبول المؤسّسيّ الذي حُرم منه.',
  },
  {
    label: 'Creativity and alternative ability',
    labelAr: 'الإبداع والقدرات البديلة',
    detail:
      'The piece argued that dyslexic thinking can underwrite creative achievement - in poetry, performance, problem-solving - and that conventional schooling often misses what such minds can do.',
    detailAr:
      'يُحاجج النصّ بأنّ تفكيرَ صاحب الـ dyslexia يمكن أن يُغذّي إنجازاً إبداعيّاً - في الشعر والأداء وحلّ المشكلات - وأنّ المدرسةَ التقليديّة كثيراً ما تُفوّت ما تستطيع مثلُ هذه العقول صنعَه.',
  },
  {
    label: 'Encouragement of young readers',
    labelAr: 'تشجيع القرّاء الشباب',
    detail:
      'The closing of the piece addressed young dyslexic readers directly. Zephaniah used his own life as evidence that the labels of childhood need not become the verdict of adulthood.',
    detailAr:
      'تخاطب خاتمةُ المقال القرّاءَ الشباب من ذوي الـ dyslexia مباشرةً. ويتّخذ Zephaniah من حياته دليلاً على أنّ وسومَ الطفولة لا تستوجب أن تصير حُكمَ سنّ الرشد.',
  },
]

const languageFeatures = [
  {
    technique: 'Conversational tone',
    techniqueAr: 'النبرة الحوارية',
    explanation:
      'Zephaniah wrote in an informal, addressing-you register that resembled spoken speech rather than journalistic prose. The effect was warmth and immediacy - the article reads as a message from someone who has been where the young reader is now.',
    explanationAr:
      'كتب Zephaniah بسجلٍّ غير رسميّ يخاطب القارئ مباشرةً، أقربَ إلى الكلام المنطوق منه إلى النثر الصحفيّ. والأثر دفءٌ وفوريّة - يُقرأ المقالُ رسالةً من إنسانٍ كان حيث القارئ الشابّ الآن.',
  },
  {
    technique: 'Direct address',
    techniqueAr: 'الخطاب المباشر',
    explanation:
      'The text spoke straight to the reader, with the young dyslexic person clearly imagined as the audience. Second-person address built solidarity and made each reader feel personally invited into the argument.',
    explanationAr:
      'يخاطب النصُّ القارئَ مباشرةً، والشابّ ذو الـ dyslexia جمهورُه الواضح في خياله. وضمير المخاطَب يبني تضامناً ويجعل كلَّ قارئٍ يحسّ أنّه مدعوٌّ شخصيّاً إلى الحجّة.',
  },
  {
    technique: 'Personal anecdote',
    techniqueAr: 'الحكاية الشخصيّة',
    explanation:
      'Zephaniah grounded his case in autobiographical detail - leaving school early, being labelled, finding alternative routes into work and writing. The authority of the piece came from lived experience rather than abstract advocacy.',
    explanationAr:
      'يُؤسّس Zephaniah قضيّتَه على تفاصيلَ من سيرته - ترك المدرسة مبكّراً، إلصاق الوسوم، وإيجاد مساراتٍ بديلةٍ إلى العمل والكتابة. وتنبع سلطةُ النصّ من التجربة المعيشة لا من الدعوة المجرّدة.',
  },
  {
    technique: 'Contrast and reframing',
    techniqueAr: 'التضادّ وإعادة التأطير',
    explanation:
      'A central rhetorical move was the substitution of one frame for another - reading dyslexia not as a deficit but as a different ability. The piece worked by replacing the language of disability with the language of difference.',
    explanationAr:
      'من أبرز الحركات البلاغيّة استبدالُ إطارٍ بآخر - قراءةُ الـ dyslexia لا قصوراً بل قدرةً مختلفة. ويعمل النصُّ باستبدال لغة الإعاقة بلغة الاختلاف.',
  },
  {
    technique: 'Listing and accumulation',
    techniqueAr: 'التَّعداد والتراكم',
    explanation:
      'The article piled up examples of achievement against the earlier catalogue of failure, using lists to overwhelm the reductive label of “stupid” with evidence of capability.',
    explanationAr:
      'يُكدّس المقالُ نماذجَ الإنجاز قبالةَ التعداد السابق للإخفاق، مستعملاً القوائمَ ليُغرق وسمَ "stupid" المختزِل بدليلٍ على القدرة.',
  },
  {
    technique: 'Humour and irony',
    techniqueAr: 'الفكاهة والمفارقة',
    explanation:
      'Zephaniah used self-deprecating humour about his own struggles with spelling, which disarmed the reader and made the more serious argument easier to accept. The lightness of tone made the seriousness of the message more, not less, persuasive.',
    explanationAr:
      'يستعمل Zephaniah فكاهةً ساخرةً من نفسه بشأن متاعبه مع الإملاء، فيُذيب تحفّظَ القارئ ويُسهّل قبولَ الحُجّة الأجدّ. والخفّةُ في النبرة تجعل جِديّةَ الرسالة أبلغَ إقناعاً لا أضعف.',
  },
  {
    technique: 'Imperative and encouragement',
    techniqueAr: 'الأمر والتشجيع',
    explanation:
      'The closing movement of the article shifted from memoir into instruction, urging the young dyslexic reader directly to reject the verdicts they had been handed. The change of register turned a personal story into a public message.',
    explanationAr:
      'تنتقل حركةُ الختام في المقال من السيرة إلى التوجيه، حاثّةً القارئَ الشابّ ذا الـ dyslexia على رفض الأحكام التي سُلّمت إليه. وتُحوّل نقلةُ السجلّ قصّةً شخصيّة إلى رسالةٍ عامّة.',
  },
  {
    technique: 'Emotive vocabulary',
    techniqueAr: 'المفردات الانفعاليّة',
    explanation:
      'Zephaniah did not soften the language used about him as a child. The blunt vocabulary of school-era judgement was reproduced precisely so the reader could feel the cruelty of those labels.',
    explanationAr:
      'لا يُلطّف Zephaniah اللغةَ التي استُعملت عنه طفلاً. تُستعاد المفرداتُ الجارحةُ من حُكم زمن المدرسة بدقّةٍ كي يشعر القارئ بقسوة تلك الوسوم.',
  },
]

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 12-13. The structure notes said the piece opens on school-era
 * failure and moves in a straight line to success. It does not: its first two
 * lines state the confident conclusion (he learned to turn dyslexia to his
 * advantage; dyslexic people are the architects and designers) and its ending
 * repeats it, so the shape is circular. The perspective note said there were no
 * statistics; he appeals to them explicitly, though he gives no figures.
 */
const structuralAnalysis = {
  opening:
    'The piece opens with its conclusion rather than its problem: Zephaniah admits he suffered as a child but says he learned to turn dyslexia to his advantage, and claims dyslexic people as the architects and designers. The school-era failures that follow are read in the light of that confident start.',
  openingAr:
    'يفتتح المقالُ بخلاصته لا بمشكلته: يعترف Zephaniah بأنّه عانى طفلاً، لكنّه يقول إنّه تعلّم أن يحوّل الـ dyslexia إلى ميزة، ويَعُدّ ذوي الـ dyslexia هم المهندسين المعماريّين والمصمّمين. وتُقرأ إخفاقاتُ زمن المدرسة التي تلي ذلك في ضوء هذه البداية الواثقة.',
  development:
    'After that opening, the middle moves broadly chronologically: school, expulsion at 13, learning at 21 that he was dyslexic, then his writing career and the present. Each section reframed the previous one, so that early failure became the precondition for later achievement rather than evidence of inadequacy.',
  developmentAr:
    'بعد هذا الافتتاح، يسير وسطُ النصّ زمنيّاً في الجملة: المدرسة، فالطرد في الثالثة عشرة، فمعرفته في الحادية والعشرين أنّ لديه dyslexia، ثمّ مسيرته في الكتابة والحاضر. ويُعيد كلُّ قسمٍ تأطيرَ سابقه، فيصير الإخفاقُ المبكّر شرطاً لإنجازٍ لاحق لا دليلاً على قصور.',
  climax:
    'The structural climax was the moment of reframing - the shift from disability to difference - which transformed the article from personal memoir into general argument.',
  climaxAr:
    'الذروةُ البنائيّة هي لحظةُ إعادة التأطير - الانتقالُ من الإعاقة إلى الاختلاف - التي تُحوّل المقالَ من سيرةٍ شخصيّة إلى حُجّةٍ عامّة.',
  resolution:
    'The resolution was outward-facing: having told his own story, Zephaniah turned to the young dyslexic reader and applied the lesson directly. The article ended as a message rather than as autobiography.',
  resolutionAr:
    'الخاتمةُ خارجيّةُ الوجهة: بعد أن روى Zephaniah قصّته الخاصّة، التفت إلى القارئ الشابّ ذي الـ dyslexia وطبّق الدرسَ عليه مباشرةً. وينتهي المقال رسالةً لا سيرةً.',
  perspective:
    'First-person throughout. The authority of the piece rests almost entirely on lived experience: there are no expert voices, and although he appeals to the statistics on dyslexia in prison, he gives no figures, so Zephaniah’s own testimony carries the argument.',
  perspectiveAr:
    'ضمير المتكلّم في النصّ كلِّه. تتّكئ سلطةُ المقال كلّها تقريباً على التجربة المعيشة: لا أصواتَ من خبراء، ومع أنّه يحتكم إلى الإحصاءات عن الـ dyslexia في السجون، فإنّه لا يذكر أرقاماً، فتحمل شهادةُ Zephaniah الحُجّة.',
  paragraphing:
    'Short paragraphs and direct sentences reflected Zephaniah’s background as a performance poet. The text was written to be spoken as much as read, with each unit landing as a discrete beat.',
  paragraphingAr:
    'الفقرات القصيرة والجمل المباشرة تعكس خلفيّة Zephaniah شاعرَ أداء. كُتب النصُّ ليُلقى بقدر ما يُقرأ، فتسقط كلُّ وحدةٍ نبضةً منفصلة.',
  time: 'Broadly chronological in the middle - past failure, present success, future hope - but framed by an opening and an ending that state the same confident conclusion. The temporal structure mirrored a redemption arc, from the labels of childhood to the agency of adulthood.',
  timeAr:
    'زمنيٌّ في الجملة في وسطه - إخفاق ماضٍ، ونجاح حاضر، وأملٌ مستقبليّ - لكنّه مؤطَّرٌ بافتتاحٍ وخاتمةٍ يُعلنان الخلاصةَ الواثقة نفسها. وتعكس البنيةُ الزمنيّة قوسَ خلاصٍ ينتقل من وسوم الطفولة إلى فاعليّة سنّ الرشد.',
  openingClosing:
    'The opening and the ending make the same claim: the article begins with Zephaniah’s confident statement that dyslexic people are the architects and designers, and ends with him saying it again to children who tell him they are dyslexic too. The circular structure is the embodiment of the article’s argument.',
  openingClosingAr:
    'يُعلن الافتتاحُ والخاتمة الفكرةَ نفسها: يبدأ المقال بقول Zephaniah الواثق إنّ ذوي الـ dyslexia هم المهندسون المعماريّون والمصمّمون، وينتهي به يكرّرها لأطفالٍ يخبرونه أنّ لديهم dyslexia مثله. وهذه البنيةُ الدائريّة تجسيدٌ لحُجّة المقال.',
}

const writersPurpose = {
  achieve:
    'Zephaniah set out to challenge a reductive definition of dyslexia and to reach young dyslexic readers who had been made to feel inadequate by their schooling. The article reclaimed a label that had been used to diminish him.',
  achieveAr:
    'انطلق Zephaniah ليتحدّى تعريفاً مُختزِلاً للـ dyslexia، وليصل إلى قرّاءٍ شبابٍ ذوي dyslexia جعلتهم المدرسةُ يشعرون بالقصور. ويستردّ المقالُ وسماً استُعمل لتقليل شأنه.',
  readerFeel:
    'He wanted young dyslexic readers to feel proud, hopeful and validated, and non-dyslexic readers to question their assumptions about what intelligence looks like.',
  readerFeelAr:
    'يريد للقرّاء الشباب من ذوي الـ dyslexia أن يشعروا بالفخر والأمل والاعتراف، وللقرّاء من غير ذوي الـ dyslexia أن يُساءلوا افتراضاتهم عن شكل الذكاء.',
  message:
    'Dyslexia is a difference, not a deficit. The narrow definitions of intelligence used by schools fail dyslexic students, but the same different thinking is often a strength in creative and practical fields.',
  messageAr:
    'الـ dyslexia اختلافٌ لا قصور. تعريفاتُ الذكاء الضيّقة التي تعتمدها المدارس تُجحف الطلابَ ذوي الـ dyslexia، غير أنّ التفكيرَ المختلفَ نفسَه كثيراً ما يكون قوّةً في الميادين الإبداعيّة والعمليّة.',
}

const keyVocabulary = [
  {
    word: 'dyslexia',
    definition:
      'A learning difference that primarily affects reading, writing and spelling skills. It is neurological and unrelated to intelligence.',
    definitionAr:
      'اختلافٌ تعلّميٌّ يؤثّر أساساً في مهارات القراءة والكتابة والإملاء. هو عصبيٌّ ولا علاقة له بالذكاء.',
  },
  {
    word: 'stigma',
    definition: 'A mark of disgrace associated with a particular circumstance, quality or person.',
    definitionAr: 'وَسمُ عارٍ يُربط بظرفٍ أو صفةٍ أو شخصٍ بعينه.',
  },
  {
    word: 'accommodate',
    definition: 'To adjust or adapt for someone’s needs; to make room for a difference.',
    definitionAr: 'أن يُكيِّف المرءُ أو يُهيّئ لاحتياجات الآخر؛ أن يُفسح للاختلاف موضعاً.',
  },
  {
    word: 'deficit',
    definition:
      'A deficiency or shortage; in education, a "deficit model" focuses on what someone cannot do rather than what they can.',
    definitionAr:
      'قصورٌ أو نقص؛ وفي التعليم، يركّز "deficit model" على ما لا يستطيع المرءُ فعلَه لا على ما يستطيعه.',
  },
  {
    word: 'neurodiversity',
    definition:
      'The idea that neurological differences (such as dyslexia, ADHD, autism) are normal variations in the human brain rather than disorders.',
    definitionAr:
      'فكرةُ أنّ الاختلافات العصبيّة (مثل dyslexia وADHD والتوحّد) تنوّعاتٌ طبيعيّةٌ في الدماغ البشريّ لا اضطراباتٌ.',
  },
  {
    word: 'empowerment',
    definition:
      'The process of becoming stronger and more confident, especially in controlling one’s life and claiming one’s rights.',
    definitionAr: 'مسار التقوّي وزيادة الثقة، لا سيّما في التحكّم بمسار الحياة والمطالبة بالحقوق.',
  },
  {
    word: 'resilience',
    definition: 'The ability to recover from setbacks and keep going.',
    definitionAr: 'القدرة على التعافي من الانتكاسات والمضيّ قُدُماً.',
  },
  {
    word: 'manifesto',
    definition: 'A public declaration of aims, motives or views; a statement of principles.',
    definitionAr: 'إعلانٌ علنيٌّ بالأهداف أو الدوافع أو الآراء؛ بيانُ مبادئ.',
  },
  {
    word: 'advocate',
    definition: 'A person who publicly supports or recommends a particular cause or policy.',
    definitionAr: 'مَن يُؤيّد علناً قضيّةً أو سياسةً بعينها أو يوصي بها.',
  },
  {
    word: 'alternative',
    definition: 'Available as another possibility or choice; different from the usual.',
    definitionAr: 'مُتاحٌ خياراً آخر أو احتمالاً ثانياً؛ مختلفٌ عن المعتاد.',
  },
  {
    word: 'creativity',
    definition: 'The use of imagination or original ideas to create something; inventiveness.',
    definitionAr: 'توظيفُ الخيال أو الأفكار الأصيلة لصنع شيءٍ؛ ابتكار.',
  },
]

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = "Young and Dyslexic? You've Got It Going On"

/**
 * CHANGED 26 September 2026. This set used to ask a "Retrieval - 4 marks"
 * question (list four things about his experience of school), a language-only
 * question and a structure-only question, each "12 marks". None of the three is
 * a 4EA1 question. On every Paper 1 checked (the 2016 SAMs, the 2017 extra
 * assessment material, P65890A and P65891RA from 2021, June and November 2023,
 * May and November 2024, and the mark schemes for November 2023, June 2024 and
 * June 2025), Q1-3 are short answers on Text One, the unseen extract. The
 * anthology text is Text Two and is examined alone only at Q4: one 12-mark AO2
 * question on language AND structure across the whole extract. Q5 (22 marks)
 * compares it with the unseen text, never with another anthology text. This
 * article was Text Two in the 2017 extra assessment material (S58056A), in June
 * 2023 (4EA1/01R) and in June 2025 (mark scheme and examiners' report).
 *
 * The English `type` labels are what questionIdForPracticeType maps: "12 marks"
 * goes to Q4 and "22 marks" to nothing, so q3 has no marking button (it needs
 * the unseen passage). The button is always given the English label: passing
 * typeAr, whose Arabic numerals the mapping could not read until that same day,
 * silently removed every button on the Arabic page. q2's model outline gained
 * one structural point, the circular opening and ending, so that it answers a
 * language-and-structure question. Its fourth point used to place his humour in
 * his spelling; the article's joke about himself is the retold question about
 * needing an operation, and the spelling passage (lines 55-59) is candour, so
 * the point now names both. The "Compare with" intro now also says the
 * exam pairs this text with an unseen passage, since its shared string calls
 * these links pairings for comparison questions in the exam.
 */
const examPractice = {
  q1: {
    question:
      'How does the writer, Benjamin Zephaniah, use language and structure to move from personal experience to a message for young readers? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، Benjamin Zephaniah، اللغةَ والبنيةَ لينتقل من التجربة الشخصيّة إلى رسالةٍ موجَّهة إلى القرّاء الشباب؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, Benjamin Zephaniah, use language and structure to challenge negative attitudes to dyslexia? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، Benjamin Zephaniah، اللغةَ والبنيةَ ليتحدّى المواقفَ السلبيّة من الـ dyslexia؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
    modelOutline: [
      'Zephaniah’s reframing of dyslexia - from disability to difference - is the article’s central rhetorical move, replacing one vocabulary with another to transform the meaning of the condition.',
      'Personal anecdote and direct address combine to give the piece its authority: the reader is being spoken to by someone who has lived through what is being described, rather than being lectured at by an outside expert.',
      'The piling-up of later achievements answers the earlier catalogue of school-era failures, so that the structure of the prose itself argues against the labels of childhood.',
      'Humour and candour about his own struggles disarm the reader: he laughs at his own confusion when he was told he was dyslexic, and admits without embarrassment the tricks he still uses to spell some words. Both challenge the assumption that surface accuracy equals intelligence - a serious argument carried by a light tone.',
      'The structure carries the challenge too: the article opens with its conclusion, claiming dyslexic people as the architects and designers before any story of school is told, so the teachers’ verdicts that follow read as already overturned. When he repeats that claim to children in the final paragraph, the challenge is handed on to the next generation.',
    ],
    modelOutlineAr: [
      'إعادةُ Zephaniah تأطيرَ الـ dyslexia - من إعاقةٍ إلى اختلافٍ - هي الحركةُ البلاغيّة المركزيّة للمقال، إذ تستبدل مفرداتٍ بأخرى لتُحوّل معنى الحالة.',
      'تتضافر الحكايةُ الشخصيّة والخطابُ المباشر لإكساب النصّ سلطته: يُكلَّم القارئ على لسان مَن عاش ما يُوصف، لا أن يُحاضَر فيه من خبيرٍ خارجيّ.',
      'تكديسُ الإنجازات اللاحقة يُجيب عن تَعداد إخفاقات زمن المدرسة السابق، فتُحاجج بنيةُ النثر نفسها ضدّ وسوم الطفولة.',
      'الفكاهةُ والصراحةُ بشأن متاعبه تُذيبان تحفّظَ القارئ: فهو يضحك من حيرته حين قيل له إنّ لديه dyslexia، ويعترف دون حرجٍ بالحيل التي ما زال يلجأ إليها لكتابة بعض الكلمات. وكلتاهما تتحدّى الافتراضَ القائل إنّ الدقّةَ السطحيّة تساوي الذكاء - حُجّةٌ جدّيّة تحملها نبرةٌ خفيفة.',
      'والبنيةُ تحمل التحدّي أيضاً: يفتتح المقالُ بخلاصته، فيَعُدّ ذوي الـ dyslexia هم المهندسين المعماريّين والمصمّمين قبل أن يروي أيّ حكايةٍ عن المدرسة، فتُقرأ أحكامُ المعلّمين التي تلي ذلك كأنّها نُقضت سلفاً. وحين يكرّر هذه الفكرةَ لأطفالٍ في الفقرة الأخيرة، يُسلّم التحدّي إلى الجيل التالي.',
    ],
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about learning and being labelled at school.',
    questionAr:
      'في الامتحان، يطلب منك السؤال الخامس مقارنةَ هذا المقتطف بنصٍّ غير مرئيّ. تدرّب بأيّ نصٍّ في موضوعٍ مشابه: قارن كيف يعرض الكاتبان أفكارهما ووجهات نظرهما حول التعلّم وإلصاق الوسوم بالتلاميذ في المدرسة.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Both writers challenge the reductive single story others have created about them - Adichie as an African woman, Zephaniah as a dyslexic person. Compare how each uses personal experience to dismantle stereotypes.',
    reasonAr:
      'كلا الكاتبَين يتحدّى القصّةَ الواحدة المُختزِلة التي صنعها عنه الآخرون - Adichie امرأةً إفريقيّة، وZephaniah شخصاً ذا dyslexia. قارن كيف يوظّف كلٌّ منهما التجربةَ الشخصيّة لتفكيك الصور النمطيّة.',
    themes: ['Identity', 'Stereotypes', 'Self-definition'],
    themesAr: ['الهويّة', 'الصور النمطيّة', 'تعريف الذات'],
  },
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason:
      'Both texts describe childhood experiences of being made to feel worthless by authority figures. Compare how each writer uses early pain as the foundation for a message of resilience.',
    reasonAr:
      'يصف النصّان تجارب طفولةٍ جعلت فيها سلطاتٌ مَن حولها يشعر بانعدام القيمة. قارن كيف يستعمل كلُّ كاتبٍ ألمَ البدايات أساساً لرسالة صمود.',
    themes: ['Childhood', 'Rejection', 'Resilience'],
    themesAr: ['الطفولة', 'الرفض', 'الصمود'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts celebrate the power of human will. Compare Ralston’s physical survival with Zephaniah’s intellectual and emotional survival - both refuse the labels others place on them.',
    reasonAr:
      'يحتفي النصّان بقوّة الإرادة الإنسانيّة. قارن نجاةَ Ralston الجسديّة بنجاة Zephaniah الفكريّة والعاطفيّة - كلاهما يرفض الوسومَ التي يفرضها عليه الآخرون.',
    themes: ['Resilience', 'Self-belief', 'Overcoming adversity'],
    themesAr: ['الصمود', 'الثقة بالنفس', 'تجاوز الشدائد'],
  },
]

export default async function YoungAndDyslexicPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])
  const locale = await getLocale()
  const ar = locale === 'ar'

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
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              Young and Dyslexic? You&apos;ve Got It Going On
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Benjamin Zephaniah (1958&ndash;2023) &middot;{' '}
              {/* 2015, not 2017: the anthology's headnote and acknowledgements
                  both give The Guardian, Friday 2 October 2015. */}
              {ar
                ? 'مقال رأي (Guardian، 2015 - مُكيَّف للمختارات)'
                : 'Opinion article (Guardian, 2015 - adapted for the anthology)'}
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
              {/* He died on 7 December 2023 (his family's statement that day). Until
                  26 September 2026 this page said January 2023. */}
              {ar ? (
                <>
                  <strong className="text-foreground">Benjamin Zephaniah (1958&ndash;2023)</strong>{' '}
                  شاعرُ دَب بريطانيّ وروائيّ ومناضلٌ في الحقوق. توفّي في 7 ديسمبر 2023.
                </>
              ) : (
                <>
                  <strong className="text-foreground">Benjamin Zephaniah (1958&ndash;2023)</strong>{' '}
                  was a British dub poet, novelist and rights campaigner. He died on 7 December
                  2023.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <section
        aria-label="Page rebuilt notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p>
              <strong className="text-foreground">{await t('anth_text.rebuilt_label')}</strong>{' '}
              {/* Until 26 September 2026 this called it the "licensed" anthology, as
                  if students needed a licensed copy. Pearson publishes it free as a
                  PDF, and for this text it prints no copyright line, only
                  "Reproduced by permission of Jessica Kingsley Publishers". */}
              {ar
                ? 'أُعيد بناء هذه الصفحة لإزالة الاقتباسات الحرفيّة التي تعذّر التأكّد منها قبالةَ مصدرٍ أوّليّ. والنقاش الآن موضوعيّ. للحصول على الصياغة المدروسة، يلزم الطلابَ دائماً الرجوعُ إلى مختارات Pearson Edexcel IGCSE (ISBN 978-1-446-93108-0)، التي تنشرها Pearson مجّاناً بصيغة PDF - يُصحّح الممتحنون قبالةَ نصّ المختارات.'
                : 'This page was rebuilt to remove direct quotations that could not be confidently verified against a primary source. Discussion is now thematic. For the studied wording, students should always consult the Pearson Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0), which Pearson publishes free as a PDF - examiners mark against the anthology text.'}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Anthology version warning"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p className="mb-2">
              {ar ? (
                <>
                  <strong className="text-foreground">تحذير نسخة المختارات:</strong> هذا النصّ هو
                  النسخة <strong className="text-foreground">المُكيَّفة</strong> المطبوعة في مختارات
                  Edexcel IGCSE (ISBN 978-1-446-93108-0). نسخةُ <em>Guardian</em> الأصليّة المتاحة
                  مجّاناً (المنشورة من كثيرٍ من مواقع المراجعة) تختلف في الحذف والترتيب وتفاصيل
                  المفردات. استعمل دائماً نسخةَ المختارات حين تجيب على أسئلة Edexcel - يُصحّح
                  الممتحنون قبالةَ نصّ المختارات.
                </>
              ) : (
                <>
                  <strong className="text-foreground">Anthology version warning:</strong> This text
                  is the <strong className="text-foreground">adapted</strong> version printed in the
                  Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available{' '}
                  <em>Guardian</em> original (linked from many revision sites) differs in cuts,
                  re-orderings, and minor word choice. Always use the anthology version when
                  answering Edexcel exam questions - examiners will mark against the anthology text.
                </>
              )}
            </p>
            <p>
              <strong className="text-foreground">
                {await t('anth_text.rights_notice_label')}
              </strong>{' '}
              {ar ? (
                <>
                  Benjamin Zephaniah (1958&ndash;2023). يُعاد نشر النصّ في المختارات بإذنٍ من
                  Jessica Kingsley Publishers. الصياغاتُ الموجزة في هذه الصفحة إشاراتٌ قصيرة بمقتضى
                  الاستعمال العادل لأغراض النقد والمراجعة والتعليم.
                </>
              ) : (
                <>
                  {/* The anthology prints no copyright line for this text, only
                      permission from the publisher. Until 26 September 2026 this said
                      "estate via Pearson Education", which nothing in the anthology
                      supports. */}
                  Benjamin Zephaniah (1958&ndash;2023). The anthology reproduces the text by
                  permission of Jessica Kingsley Publishers. Brief paraphrases on this page are
                  short fair-dealing references for the purposes of criticism, review and education.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.context')}
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          {ar ? (
            <>
              <p>
                Benjamin Zephaniah (1958&ndash;2023) شاعرُ دَب بريطانيّ وروائيّ ومناضلٌ سياسيّ. ترك
                المدرسة في الثالثة عشرة، وكافح مع الـ dyslexia، وبنى مسيرةً أدبيّة على الأداء والسرد
                الشفهيّ، وعلى رفضٍ أن تُحدّده أحكامُ المؤسّسات. نشر هذا المقال في{' '}
                <em>The Guardian</em> في 2 أكتوبر 2015، مخاطباً القرّاءَ الشباب من ذوي الـ dyslexia
                مباشرةً.
              </p>
              <p>
                نسخةُ المختارات المدروسة هنا صيغةٌ{' '}
                <strong className="text-foreground">مُكيَّفة</strong> من مقال 2015. توفّي Zephaniah
                في 7 ديسمبر 2023.
              </p>
              <p>
                يعمل المقال سيرةً وبيانَ مبادئ في آنٍ معاً - تجربةٌ شخصيّة تُستعمل محرّكاً لحُجّةٍ
                عامّة حول كيف ينبغي أن تُفهم الـ dyslexia، وكيف يُخاطَب الشبابُ من ذويها.
              </p>
            </>
          ) : (
            <>
              <p>
                Benjamin Zephaniah (1958&ndash;2023) was a British dub poet, novelist and political
                campaigner. He left school at thirteen, struggled with dyslexia, and built a
                literary career on performance, oral storytelling and a refusal to let institutional
                verdicts define him. He published this article in <em>The Guardian</em> on 2 October
                2015, addressing young dyslexic readers directly.
              </p>
              <p>
                The anthology version studied here is an{' '}
                <strong className="text-foreground">adapted</strong> form of that 2015 article.
                Zephaniah died on 7 December 2023.
              </p>
              <p>
                The piece functions as both memoir and manifesto - personal experience used as the
                engine of a public argument about how dyslexia should be understood and how dyslexic
                young people should be addressed.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.themes')}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((th) => (
            <div key={th.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {ar ? th.labelAr : th.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {ar ? th.detailAr : th.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {ar ? 'الخصائص اللغويّة' : 'Language Features'}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          {ar
            ? 'الخصائصُ اللغويّة الرئيسة عند Zephaniah وأثرها في القارئ. النقاشُ موضوعيّ - وعلى الطلاب أن يستقوا الصياغة المدروسة من المختارات، التي تنشرها Pearson مجّاناً.'
            : 'Key language features used by Zephaniah and their effects on the reader. Discussion is thematic - students should source the studied wording from the anthology, which Pearson publishes free.'}
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
              {await t('anth_text.writers_purpose.achieve')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {ar ? writersPurpose.achieveAr : writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.reader_feel')}
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
            <p className="mt-2 text-body-sm text-muted-foreground">
              {ar
                ? 'لا يمكن تصحيح هذا السؤال هنا: فهو يحتاج إلى النصّ غير المرئيّ الذي يقرنه الامتحان بهذا النصّ.'
                : "This question can't be marked here: it needs the unseen passage that the exam pairs with this text."}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}{' '}
          {ar
            ? 'في الامتحان يُقارَن هذا النصّ بنصٍّ غير مرئيّ، لا بنصٍّ آخر من المختارات، فهذه المقارنات للمراجعة.'
            : 'In the exam this text is compared with an unseen passage, never another anthology text, so these pairings are for revision.'}
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
          <>
            <p>
              <strong className="text-foreground">تحذير نسخة المختارات:</strong> هذا النصّ هو النسخة{' '}
              <strong>المُكيَّفة</strong> المطبوعة في مختارات Edexcel IGCSE (ISBN
              978-1-446-93108-0). نسخةُ <em>Guardian</em> الأصليّة المتاحة مجّاناً تختلف في الحذف
              والترتيب وتفاصيل المفردات. استعمل دائماً نسخةَ المختارات حين تجيب على أسئلة Edexcel -
              يُصحّح الممتحنون قبالةَ نصّ المختارات.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">إشعار الحقوق:</strong> Benjamin Zephaniah
              (1958&ndash;2023). يُعاد نشر النصّ في المختارات بإذنٍ من Jessica Kingsley Publishers.
              الصياغاتُ الموجزة في هذه الصفحة إشاراتٌ قصيرة بمقتضى الاستعمال العادل لأغراض النقد
              والمراجعة والتعليم؛ وتنشر Pearson المختاراتِ كاملةً مجّاناً.
            </p>
            <p className="mt-2">
              متوافق مع مواصفات Pearson Edexcel 4EA1 · Paper 1 Section A - مختارات النثر غير
              الروائيّ
            </p>
          </>
        ) : (
          <>
            <p>
              <strong className="text-foreground">Anthology version warning:</strong> This text is
              the <strong>adapted</strong> version printed in the Edexcel IGCSE Anthology (ISBN
              978-1-446-93108-0). The freely-available <em>Guardian</em> original differs in cuts,
              re-orderings, and minor word choice. Always use the anthology version when answering
              Edexcel exam questions - examiners will mark against the anthology text.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Rights notice:</strong> Benjamin Zephaniah
              (1958&ndash;2023). The anthology reproduces the text by permission of Jessica Kingsley
              Publishers. Brief paraphrases on this page are short fair-dealing references used for
              the purposes of criticism, review and education; Pearson publishes the full anthology
              free.
            </p>
            <p className="mt-2">
              Aligned with Pearson Edexcel specification 4EA1 &middot; Paper 1 Section A - Anthology
              Non-Fiction
            </p>
          </>
        )}
      </footer>
    </div>
  )
}
