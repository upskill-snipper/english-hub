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

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 12-13, and the verified guide. The themes and language notes were
 * written in the past tense and several claims were not in the article: that he
 * "left school early" (he was expelled from his last school at 13), that it
 * addresses the young reader throughout (sustained second-person address begins
 * only near the end), that it replaces a "language of disability" (the word is
 * not in it; what he rejects is thinking of dyslexia as a defect), that it piles
 * up achievements to overwhelm "stupid" (the list of his work is followed at
 * once by words he still has to stop and think over), and that his humour is
 * about his spelling (the joke is the retold question about an operation; the
 * spelling passage is candour). Race and prejudice, which the guide tags as a
 * theme and the article returns to repeatedly, was missing.
 *
 * RECHECKED 10 October 2026, by script against the same pages. Still wrong:
 * seeing the world differently was put among what he tells parents (it is the
 * opening's claim and his advice to the children at the end); the creativity
 * lines are about writing round a word you cannot find, which makes creativity
 * grow like a muscle, not about a word you cannot write; he tells his students a
 * good memory can earn the right grade but without passion there is no point,
 * not that memory is pointless; the parent is told plainly not to think of it
 * as a defect, not to try not to; the parent addressed is the parent of someone
 * dyslexic, and no child is mentioned there; he has to draw something, with no
 * "sometimes"; and the article never calls it a diagnosis. Nothing says he laughs
 * at the operation question, so the page now calls it comic as a reading. The
 * teacher who suggests football is not a football teacher. Quotation marks round stupid and
 * dyslexic added on 26 September were taken out again, so the page quotes no
 * more than it did before.
 */
const themes = [
  {
    label: 'Reframing dyslexia',
    labelAr: 'إعادة تأطير الـ dyslexia',
    detail:
      'Zephaniah challenges the idea that dyslexia is a defect. The article opens by claiming dyslexic people as the architects and designers, argues that being dyslexic is natural and that it is the way we read and write that is unnatural, and tells parents that dyslexia says nothing about intelligence. At the start and again at the end, he presents dyslexia as a way of seeing the world differently: a difference, not a deficiency.',
    detailAr:
      'يتحدّى Zephaniah فكرةَ أنّ الـ dyslexia عيب. يفتتح المقالُ بعَدّ ذوي الـ dyslexia هم المهندسين المعماريّين والمصمّمين، ويُحاجج بأنّ الـ dyslexia حالةٌ طبيعيّة وأنّ طريقتنا في القراءة والكتابة هي غير الطبيعيّة، ويقول للآباء إنّ الـ dyslexia لا تقول شيئاً عن الذكاء. وفي البداية ثمّ في النهاية يقدّم الـ dyslexia طريقةً لرؤية العالم على نحوٍ مختلف: اختلافٌ لا نقص.',
  },
  {
    label: 'School and the education system',
    labelAr: 'المدرسة ومنظومة التعليم',
    detail:
      'The article draws on his schooling at a time when teachers did not know what dyslexia was: a teacher who called him stupid for asking a question, one who talked about Africa in racist terms, one who answered a request for help with writing by suggesting football, and expulsion from his last school at 13. He blames a system that lacked compassion rather than the teachers themselves, some of whom, he says, wanted to treat pupils as individuals and were not allowed to.',
    detailAr:
      'يستند المقالُ إلى تجربته المدرسيّة في زمنٍ لم يكن المعلّمون يعرفون فيه ما الـ dyslexia: معلّمةٌ وصفته بالغباء لأنّه طرح سؤالاً، وأخرى تحدّثت عن إفريقيا بعباراتٍ عنصريّة، ومعلّمٌ ثالث ردّ على طلبه المساعدةَ في الكتابة باقتراح كرة القدم، ثمّ الطردُ من آخر مدارسه في الثالثة عشرة. ويلوم منظومةً افتقرت إلى الرحمة لا المعلّمين أنفسهم، إذ يقول إنّ بعضهم أراد أن يعامل التلاميذ أفراداً ولم يُسمح له بذلك.',
  },
  {
    label: 'Identity and self-worth',
    labelAr: 'الهويّة وقيمة الذات',
    detail:
      'Zephaniah refuses the verdicts of his childhood. He says he never thought he was stupid, turns the word back on someone who reads well but holds racist views, and says simply that he had self-belief. He is candid about what went wrong, from revenge on a teacher to borstal, which makes that self-belief easier to trust.',
    detailAr:
      'يرفض Zephaniah أحكامَ طفولته. يقول إنّه لم يظنّ قطّ أنّه غبيّ، ويردّ الكلمةَ على شخصٍ يُحسن القراءة لكنّه يحمل آراءً عنصريّة، ويقول ببساطة إنّه كان يؤمن بنفسه. وهو صريحٌ في ما ساء من أمره، من انتقامه من معلّمٍ إلى الإصلاحيّة (borstal)، وهذا ما يجعل إيمانه بنفسه أجدرَ بالتصديق.',
  },
  {
    label: 'Creativity and alternative ability',
    labelAr: 'الإبداع والقدرات البديلة',
    detail:
      'The article argues that dyslexia can make a person creative: having to work out how to write round a word that will not come, he tells the reader, makes creativity grow like a muscle. His own work is the evidence: poetry, novels for teenagers, plays and recorded music. As a professor he tells his students that a good memory can get them the grade they need, but that without passion, creativity and individuality there is no point.',
    detailAr:
      'يُحاجج المقالُ بأنّ الـ dyslexia قد تجعل صاحبها مبدعاً: فاضطرارُ المرء إلى أن يجد طريقةً يكتب بها متجاوزاً كلمةً لا تحضره، كما يقول للقارئ، يُنمّي الإبداع كما تنمو العضلة. وأعماله دليلٌ على ذلك: الشعر وروايات الناشئة والمسرحيّات والموسيقى المسجّلة. وبصفته أستاذاً جامعيّاً يقول لطلابه إنّ الذاكرة الجيّدة قد تمنحهم الدرجة التي يحتاجون إليها، لكن لا جدوى من ذلك من دون الشغف والإبداع والتفرّد.',
  },
  {
    label: 'Encouragement of young readers',
    labelAr: 'تشجيع القرّاء الشباب',
    detail:
      'Only in its last paragraphs does the article speak directly to dyslexic readers and their parents: a dyslexic reader who feels held back is told that it is not them, and parents are told not to see dyslexia as a defect. It ends with the children who come up to him to say they are dyslexic too, and his advice to them to use it to their advantage. His own life is the evidence that the labels of childhood need not become the verdict of adulthood.',
    detailAr:
      'لا يخاطب المقالُ القرّاءَ ذوي الـ dyslexia وآباءهم مباشرةً إلّا في فقراته الأخيرة: يُقال للقارئ ذي الـ dyslexia الذي يشعر بأنّ شيئاً يعوقه إنّ المشكلة ليست فيه، ويُقال للآباء ألّا يروا الـ dyslexia عيباً. ويُختتم بالأطفال الذين يأتون إليه ليقولوا إنّ لديهم dyslexia مثله، وبنصيحته لهم أن يجعلوها ميزةً لهم. وحياته نفسها دليلٌ على أنّ وسومَ الطفولة لا يلزم أن تصير حُكمَ سنّ الرشد.',
  },
  {
    label: 'Race and prejudice',
    labelAr: 'العِرق والتحيّز',
    detail:
      'Race runs through the article. He gets into trouble for challenging a teacher who talks about Africa in racist terms; the statistics he says predicted prison begin with his being a black man; he thinks that someone who reads well but calls black people savages is the stupid one; and he compares people who cannot understand dyslexia with those who oppress him because of his race. The comparison makes his argument about dyslexia an argument about prejudice too.',
    detailAr:
      'يسري العِرقُ في المقال كلّه. يقع في المتاعب لأنّه اعترض على معلّمةٍ تحدّثت عن إفريقيا بعباراتٍ عنصريّة؛ والإحصاءاتُ التي يقول إنّها تنبّأت له بالسجن تبدأ بكونه رجلاً أسود؛ ويرى أنّ مَن يُحسن القراءة لكنّه يصف السود بالمتوحّشين هو الغبيّ؛ ويُشبّه مَن لا يفهمون الـ dyslexia بمَن يضطهدونه بسبب عِرقه. وهكذا تصير حُجّتُه عن الـ dyslexia حُجّةً عن التحيّز أيضاً.',
  },
]

const languageFeatures = [
  {
    technique: 'Conversational tone',
    techniqueAr: 'النبرة الحوارية',
    explanation:
      'Zephaniah writes in an informal speaking voice rather than the neutral register of news reporting: he reports his own reactions as he might say them aloud, uses a sarcastic aside and closes with a joke that opens with a mild swear word. The effect is warmth and immediacy - the article reads as a message from someone who has been where a young dyslexic reader is now.',
    explanationAr:
      'يكتب Zephaniah بصوتٍ حواريّ غير رسميّ لا بالسجلّ المحايد للتقارير الإخباريّة: يروي ردودَ فعله كما قد ينطقها، ويستعمل تعليقاً ساخراً عابراً، ويختم بنكتةٍ تبدأ بشتيمةٍ خفيفة. والأثر دفءٌ وفوريّة - يُقرأ المقالُ رسالةً من إنسانٍ كان حيث القارئ الشابّ ذو الـ dyslexia الآن.',
  },
  {
    technique: 'Direct address',
    techniqueAr: 'الخطاب المباشر',
    explanation:
      'For most of the article the first person tells his own story; sustained second-person address arrives only in the last paragraphs, when he speaks to a dyslexic reader who feels held back and then to the parent of someone who is dyslexic. Because it comes after his story, the address carries the authority of experience, and each reader feels personally included in the argument.',
    explanationAr:
      'في معظم المقال يروي ضميرُ المتكلّم قصّته الخاصّة؛ ولا يأتي الخطابُ المتواصل بضمير المخاطَب إلّا في الفقرات الأخيرة، حين يخاطب قارئاً ذا dyslexia يشعر بأنّ شيئاً يعوقه، ثمّ والدَ شخصٍ ذي dyslexia. ولأنّه يأتي بعد قصّته، يحمل الخطابُ سلطةَ التجربة، ويشعر كلُّ قارئٍ بأنّه معنيٌّ بالحُجّة شخصيّاً.',
  },
  {
    technique: 'Personal anecdote',
    techniqueAr: 'الحكاية الشخصيّة',
    explanation:
      'Zephaniah grounds his case in his own life: a teacher who called him stupid, a racist lesson, expulsion at 13, borstal, the poems his girlfriend wrote down for his first book and being told at 21 that he was dyslexic. The authority of the piece comes from lived experience rather than from experts or figures.',
    explanationAr:
      'يُؤسّس Zephaniah قضيّتَه على حياته: معلّمةٌ وصفته بالغباء، ودرسٌ عنصريّ، والطردُ في الثالثة عشرة، والإصلاحيّة (borstal)، والقصائدُ التي دوّنتها صديقته لكتابه الأوّل، ومعرفتُه في الحادية والعشرين أنّ لديه dyslexia. وتنبع سلطةُ النصّ من التجربة المعيشة لا من الخبراء أو الأرقام.',
  },
  {
    technique: 'Contrast and reframing',
    techniqueAr: 'التضادّ وإعادة التأطير',
    explanation:
      'The central move is to turn a judgement round. Called stupid as a boy, he hands the word back to someone who reads well but holds racist views; the problem usually laid on the dyslexic person is handed to anyone who cannot understand dyslexia; and it is the way we read and write, not dyslexia, that he calls unnatural. Parents are asked to see not a defect but a child who may be a genius.',
    explanationAr:
      'الحركةُ المركزيّة قلبُ الحُكم. فقد وُصف صبيّاً بالغباء، فيردّ الوصفَ إلى شخصٍ يُحسن القراءة لكنّه يحمل آراءً عنصريّة؛ والمشكلةُ التي تُلقى عادةً على صاحب الـ dyslexia تُسلَّم إلى كلّ مَن لا يستطيع فهمها؛ وطريقتُنا في القراءة والكتابة، لا الـ dyslexia، هي ما يصفه بغير الطبيعيّ. ويُطلب من الآباء أن يروا لا عيباً بل طفلاً قد يكون عبقريّاً.',
  },
  {
    technique: 'Listing and accumulation',
    techniqueAr: 'التَّعداد والتراكم',
    explanation:
      'Two lists do opposite work. The first piles up everything that, he says, should have put him in prison, from his race and upbringing to having no qualifications, with dyslexia added last as the final weight. The second is what he has since done: poetry, novels for teenagers, plays, other books and recorded music. Yet the same paragraph admits that he still has to stop and think before writing some words, so achievement is set beside difficulty, not in place of it.',
    explanationAr:
      'تؤدّي قائمتان عملين متعاكسين. الأولى تُكدّس كلَّ ما يقول إنّه كان ينبغي أن يقوده إلى السجن، من عِرقه ونشأته إلى خلوّه من المؤهّلات، وتُضيف الـ dyslexia أخيراً عبئاً فوق الأعباء. والثانية ما أنجزه منذ ذلك الحين: الشعر وروايات الناشئة والمسرحيّات وكتبٌ أخرى والموسيقى المسجّلة. غير أنّ الفقرة نفسها تعترف بأنّه ما زال يتوقّف ليفكّر قبل كتابة بعض الكلمات، فيُوضع الإنجاز بجانب الصعوبة لا مكانها.',
  },
  {
    technique: 'Humour and irony',
    techniqueAr: 'الفكاهة والمفارقة',
    explanation:
      'The humour is at his own expense and at the majority’s. When he retells how he was told at 21 that he was dyslexic, his younger self’s question, whether he needed an operation, reads as gently comic, and the article ends with a joke that makes non-dyslexic people the odd ones out. There is irony too in his students being officially more educated than their professor. His admission that he still has to stop and think, and draw something, over a word like knot is told with candour, not as a joke. The lightness keeps the piece free of self-pity and makes the serious argument easier to accept.',
    explanationAr:
      'الفكاهةُ على حسابه وعلى حساب الأغلبيّة. فحين يروي معرفته في الحادية والعشرين أنّ لديه dyslexia، يبدو سؤالُه آنذاك، إن كان يحتاج إلى عمليّة جراحيّة، طريفاً طرافةً لطيفة، وينتهي المقال بنكتةٍ تجعل غيرَ ذوي الـ dyslexia هم الغرباء. وثمّة مفارقةٌ أيضاً في أنّ طلابه أكثرُ تعليماً منه رسميّاً وهو أستاذهم. أمّا اعترافه بأنّه ما زال يتوقّف ليفكّر، ويرسم شيئاً، أمام كلمةٍ مثل knot فيرويه بصراحةٍ لا على سبيل النكتة. والخفّةُ في النبرة تُبعد المقالَ عن الشفقة على الذات وتُسهّل قبولَ الحُجّة الجدّيّة.',
  },
  {
    technique: 'Imperative and encouragement',
    techniqueAr: 'الأمر والتشجيع',
    explanation:
      'In the closing paragraphs memoir turns into advice. The imperatives are gentle, closer to reassurance than command: a dyslexic reader who feels held back is told to remember that it is not them and not to be hard on themselves, and a parent is told not to think of dyslexia as a defect. The change of register turns a personal story into a public message.',
    explanationAr:
      'في الفقرات الختاميّة تتحوّل السيرةُ إلى نصيحة. وصيغُ الأمر رقيقة، أقربُ إلى الطمأنة منها إلى الأمر: يُقال للقارئ ذي الـ dyslexia الذي يشعر بأنّ شيئاً يعوقه أن يتذكّر أنّ المشكلة ليست فيه وألّا يقسو على نفسه، ويُقال لوالد مَن لديه dyslexia ألّا يرى فيها عيباً. وتُحوّل نقلةُ السجلّ قصّةً شخصيّة إلى رسالةٍ عامّة.',
  },
  {
    technique: 'Emotive vocabulary',
    techniqueAr: 'المفردات الانفعاليّة',
    explanation:
      'Zephaniah does not soften the words used to him and around him as a child. The teacher’s insult, the racist term used in a lesson and the polite dismissal from the teacher who suggests football are given in the adults’ own words, so the reader hears them as the boy did before the adult writer comments on them.',
    explanationAr:
      'لا يُلطّف Zephaniah الكلماتِ التي قيلت له ومن حوله طفلاً. فشتيمةُ المعلّمة، والوصفُ العنصريّ في أحد الدروس، والصرفُ المهذّب من المعلّم الذي اقترح كرة القدم، تُنقل كلّها بكلمات الكبار أنفسهم، فيسمعها القارئ كما سمعها الصبيّ قبل أن يعلّق عليها الكاتب الراشد.',
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
 *
 * Later the same day the rest was checked. The development note said early
 * failure becomes "the precondition" for achievement, and the climax called the
 * turn a "shift from disability to difference"; the article says neither, and
 * "disability" is not in it. The paragraphing note said the text "was written to
 * be spoken", which nothing supports: it was a book contribution adapted for a
 * newspaper. The notes were also in the past tense, now the present.
 *
 * RECHECKED 10 October 2026. The development said the chronology "breaks once",
 * but the present breaks in more than once (the realisation at line 23, the
 * reversal he thinks at 46-47), so the prison passage is now its clearest
 * break. The climax had the statistics answered by his never thinking he was
 * stupid; the very next sentence (lines 40-41) answers them first, with what
 * keeps a person out of prison. "The argument itself is stated outright only"
 * at line 70 contradicted the opening note; it is that one claim, about whose
 * problem it is, that waits. The paragraph count, twenty, was measured from
 * the gaps between lines in Pearson's PDF, not from pdftotext, whose blank
 * lines give twenty-six.
 */
const structuralAnalysis = {
  opening:
    'The piece opens with its conclusion rather than its problem: Zephaniah admits he suffered as a child but says he learned to turn dyslexia to his advantage, and claims dyslexic people as the architects and designers. The teachers’ verdicts that follow are read in the light of that confident start.',
  openingAr:
    'يفتتح المقالُ بخلاصته لا بمشكلته: يعترف Zephaniah بأنّه عانى طفلاً، لكنّه يقول إنّه تعلّم أن يحوّل الـ dyslexia إلى ميزة، ويَعُدّ ذوي الـ dyslexia هم المهندسين المعماريّين والمصمّمين. وتُقرأ أحكامُ المعلّمين التي تلي ذلك في ضوء هذه البداية الواثقة.',
  development:
    'After that opening, the middle moves broadly chronologically: school, expulsion at 13, borstal, the first book of poems, learning at 21 that he was dyslexic, then his working life in the present. The clearest break in the chronology comes when the statistics that predicted prison lead him to the prisons he now visits, so the adult’s view is never far from the child’s story.',
  developmentAr:
    'بعد هذا الافتتاح، يسير وسطُ النصّ زمنيّاً في الجملة: المدرسة، فالطرد في الثالثة عشرة، فالإصلاحيّة (borstal)، فكتابه الشعريّ الأوّل، فمعرفته في الحادية والعشرين أنّ لديه dyslexia، ثمّ حياته العمليّة في الحاضر. وأوضحُ انكسارٍ في التسلسل يأتي حين تقوده الإحصاءاتُ التي تنبّأت له بالسجن إلى السجون التي يزورها اليوم، فلا تبتعد نظرةُ الراشد عن قصّة الطفل.',
  climax:
    'There is no single dramatic climax. The low point is the expulsion and borstal; the turn comes when he answers the statistics that predicted prison: what keeps a person out, he says, is overcoming their fears and finding their own way, and he never thought he was stupid. His central claim, that anyone who cannot understand dyslexia is the one with the problem, is stated outright only when the story of his life gives way to argument.',
  climaxAr:
    'لا ذروةَ دراميّةً واحدة. أدنى نقطةٍ هي الطردُ والإصلاحيّة؛ ويأتي المنعطف حين يردّ على الإحصاءات التي تنبّأت له بالسجن: فما يُبقي المرءَ خارجه، كما يقول، أن يتغلّب على مخاوفه ويجد طريقه، وهو لم يظنّ قطّ أنّه غبيّ. أمّا فكرتُه المركزيّة، أنّ مَن لا يستطيع فهم الـ dyslexia هو صاحب المشكلة، فلا تُعلن صراحةً إلّا حين تُفسح قصّةُ حياته المجالَ للحُجّة.',
  resolution:
    'The ending faces outward: having told his own story, Zephaniah speaks to dyslexic readers and to parents, then ends with the children who come up to him to say they are dyslexic too. The article closes as advice handed on, with a joke, rather than as autobiography.',
  resolutionAr:
    'الخاتمةُ خارجيّةُ الوجهة: بعد أن روى Zephaniah قصّته الخاصّة، يخاطب القرّاءَ ذوي الـ dyslexia والآباءَ، ثمّ ينتهي بالأطفال الذين يأتون إليه ليقولوا إنّ لديهم dyslexia مثله. ويُختتم المقال نصيحةً تُسلَّم إلى الجيل التالي، مع نكتة، لا سيرةً ذاتيّة.',
  perspective:
    'First-person throughout. The authority of the piece rests almost entirely on lived experience: there are no expert voices, and although he appeals to the statistics on dyslexia in prison, he gives no figures, so Zephaniah’s own testimony carries the argument.',
  perspectiveAr:
    'ضمير المتكلّم في النصّ كلِّه. تتّكئ سلطةُ المقال كلّها تقريباً على التجربة المعيشة: لا أصواتَ من خبراء، ومع أنّه يحتكم إلى الإحصاءات عن الـ dyslexia في السجون، فإنّه لا يذكر أرقاماً، فتحمل شهادةُ Zephaniah الحُجّة.',
  paragraphing:
    'The paragraphs are short, twenty of them across 88 printed lines, and the sentences plain and direct, with blunt short statements set among longer anecdotes. The style suits a writer who, as he says, performs his poetry, and it lets each anecdote land as a discrete beat.',
  paragraphingAr:
    'الفقراتُ قصيرة - عشرون فقرةً في 88 سطراً مطبوعاً - والجملُ بسيطةٌ ومباشرة، تتخلّل الحكاياتِ الأطولَ جملٌ قصيرةٌ حاسمة. ويلائم هذا الأسلوبُ كاتباً يُلقي شعره، كما يقول هو نفسه، فتسقط كلُّ حكايةٍ نبضةً منفصلة.',
  time: 'Broadly chronological in the middle - past failure, present success, then a look ahead to the next generation - but framed by an opening and an ending that state the same confident conclusion. The movement is from the labels of childhood to the confidence of adulthood.',
  timeAr:
    'زمنيٌّ في الجملة في وسطه - إخفاق ماضٍ، ونجاح حاضر، ثمّ نظرةٌ إلى الجيل التالي - لكنّه مؤطَّرٌ بافتتاحٍ وخاتمةٍ يُعلنان الخلاصةَ الواثقة نفسها. وتسير الحركةُ من وسوم الطفولة إلى ثقة سنّ الرشد.',
  openingClosing:
    'The opening and the ending make the same claim: the article begins with Zephaniah’s confident statement that dyslexic people are the architects and designers, and ends with him saying it again to children who tell him they are dyslexic too. The circular structure is the embodiment of the article’s argument.',
  openingClosingAr:
    'يُعلن الافتتاحُ والخاتمة الفكرةَ نفسها: يبدأ المقال بقول Zephaniah الواثق إنّ ذوي الـ dyslexia هم المهندسون المعماريّون والمصمّمون، وينتهي به يكرّرها لأطفالٍ يخبرونه أنّ لديهم dyslexia مثله. وهذه البنيةُ الدائريّة تجسيدٌ لحُجّة المقال.',
}

/**
 * CORRECTED 26 September 2026. This said the article "reclaimed a label that had
 * been used to diminish him". His teachers did not know what dyslexia was
 * (line 3) and he learned the word only at 21; the word used on him was
 * "stupid", which is what the article hands back. It also said that schools
 * "fail dyslexic students" in the present tense, which he does not claim: he
 * places the lack of compassion in the system of his own childhood.
 *
 * RECHECKED 10 October 2026. The message said "the schools of his childhood"
 * took difficulty with writing for a lack of intelligence; in the article one
 * teacher does, the one asked for help with writing (lines 20-22). The
 * quotation marks round dyslexic, added that day, were removed; stupid stays
 * quoted once in each language, as on main before the pass.
 */
const writersPurpose = {
  achieve:
    'Zephaniah sets out to show that dyslexia says nothing about intelligence and that the problem lies with people who cannot understand it, and to reach dyslexic readers and the parents of dyslexic children. The label used to diminish him as a boy was not dyslexia, since his teachers did not know what dyslexia was, but “stupid”: the article hands that word back and makes being dyslexic something to be proud of.',
  achieveAr:
    'ينطلق Zephaniah ليُثبت أنّ الـ dyslexia لا تقول شيئاً عن الذكاء وأنّ المشكلة عند مَن لا يستطيع فهمها، وليصل إلى القرّاء ذوي الـ dyslexia وإلى آباء الأطفال من ذويها. ولم يكن الوسمُ الذي استُعمل لتحقيره صبيّاً هو الـ dyslexia، إذ لم يكن معلّموه يعرفون ما هي، بل "stupid": فيردّ المقالُ تلك الكلمة ويجعل الـ dyslexia أمراً يُفتخر به.',
  readerFeel:
    'He wants dyslexic readers to feel proud and hopeful rather than held back, parents to see possibility in a dyslexic child rather than a defect, and everyone else to question the assumption that reading and writing easily is a sign of intelligence.',
  readerFeelAr:
    'يريد للقرّاء ذوي الـ dyslexia أن يشعروا بالفخر والأمل لا بأنّ شيئاً يعوقهم، وللآباء أن يروا في الطفل ذي الـ dyslexia إمكاناً لا عيباً، ولسائر القرّاء أن يُساءلوا الافتراضَ القائل إنّ سهولة القراءة والكتابة علامةٌ على الذكاء.',
  message:
    'Dyslexia is a different way of seeing the world, not a defect or a verdict on intelligence. At school a teacher took his difficulty with writing for a lack of intelligence, but the same way of thinking can make a person creative: dyslexic people, he says, are the architects and designers.',
  messageAr:
    'الـ dyslexia طريقةٌ مختلفة في رؤية العالم، لا عيبٌ ولا حُكمٌ على الذكاء. لقد عدّ أحدُ معلّميه في المدرسة صعوبتَه في الكتابة نقصاً في الذكاء، غير أنّ طريقة التفكير نفسها قد تجعل صاحبها مبدعاً: فذوو الـ dyslexia، كما يقول، هم المهندسون المعماريّون والمصمّمون.',
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
 * the point now names both. The "Compare with" intro also said, until 10
 * October 2026, that the exam pairs this text with an unseen passage, because
 * the shared string then called these links pairings for comparison questions
 * in the exam; the shared string now says so itself, so that sentence went.
 *
 * ALSO 10 October 2026. q2's first point stopped calling the reframing a move
 * "from disability to difference" (the article has neither word; its words
 * are stupid and defect), and its third stopped calling the school years a
 * "catalogue of school-era failures": they are a run of teachers' verdicts on
 * him, which the list of later work answers. Its fourth point said he laughs
 * at his own confusion; nothing in the article says he laughs (see the note
 * above the themes), so it now offers the comedy of the retold operation
 * question as a reading.
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
      'Zephaniah’s reframing of dyslexia is the article’s central rhetorical move. As a boy he was called stupid, and he tells parents not to think of dyslexia as a defect, while from its first lines the article claims dyslexic people as the architects and designers: one vocabulary replaces another to change what the condition means.',
      'Personal anecdote and direct address combine to give the piece its authority: the reader is being spoken to by someone who has lived through what is being described, rather than being lectured at by an outside expert.',
      'The list of his later work, poetry, novels, plays and music, answers the earlier run of teachers’ verdicts on him, so that the structure of the prose itself argues against the labels of childhood.',
      'Humour and candour about his own struggles disarm the reader: in one reading, retelling his question about needing an operation turns his confusion when he was told he was dyslexic into comedy, and he admits without embarrassment the tricks he still uses to spell some words. Both challenge the assumption that surface accuracy equals intelligence - a serious argument carried by a light tone.',
      'The structure carries the challenge too: the article opens with its conclusion, claiming dyslexic people as the architects and designers before any story of school is told, so the teachers’ verdicts that follow read as already overturned. When he repeats that claim to children in the final paragraph, the challenge is handed on to the next generation.',
    ],
    modelOutlineAr: [
      'إعادةُ Zephaniah تأطيرَ الـ dyslexia هي الحركةُ البلاغيّة المركزيّة للمقال. فقد نُعت صبيّاً بالغباء، وهو يطلب من الآباء ألّا يروا في الـ dyslexia عيباً، بينما يَعُدّ المقالُ منذ سطريه الأوّلين ذوي الـ dyslexia هم المهندسين المعماريّين والمصمّمين: مفرداتٌ تحلّ محلّ أخرى لتُغيّر معنى الحالة.',
      'تتضافر الحكايةُ الشخصيّة والخطابُ المباشر لإكساب النصّ سلطته: يُكلَّم القارئ على لسان مَن عاش ما يُوصف، لا أن يُحاضَر فيه من خبيرٍ خارجيّ.',
      'قائمةُ أعماله اللاحقة، من الشعر والروايات والمسرحيّات والموسيقى، تُجيب عن سلسلة أحكام المعلّمين السابقة عليه، فتُحاجج بنيةُ النثر نفسها ضدّ وسوم الطفولة.',
      'الفكاهةُ والصراحةُ بشأن متاعبه تُذيبان تحفّظَ القارئ: ففي إحدى القراءات يحوّل سؤالُه المرويّ عمّا إذا كان يحتاج إلى عمليّة حيرتَه حين قيل له إنّ لديه dyslexia إلى فكاهة، ويعترف دون حرجٍ بالحيل التي ما زال يلجأ إليها لكتابة بعض الكلمات. وكلتاهما تتحدّى الافتراضَ القائل إنّ الدقّةَ السطحيّة تساوي الذكاء - حُجّةٌ جدّيّة تحملها نبرةٌ خفيفة.',
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

/**
 * CORRECTED 26 September 2026 against the three anthology extracts. The single
 * story told about Zephaniah was not that he was dyslexic (his teachers had no
 * word for it) but that he could not be intelligent. The Chinese Cinderella
 * extract has no "message of resilience": her father is proud of her prize,
 * scoffs at her wish to write, and she does not contradict him. The 127 Hours
 * extract covers the boulder crushing Ralston's right hand and his first
 * resolve to free himself, not his survival, and no one in it labels him.
 *
 * RECHECKED 10 October 2026: the 127 Hours reason said the boulder "traps his
 * arm" in "the seconds" of the extract. The extract spends most of its length
 * on his climb down the canyon before the boulder crushes his right hand and
 * leaves him stuck.
 */
const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Adichie describes the single story her American roommate had of Africa; Zephaniah’s teachers had one of him, the boy who could not be intelligent and should go and play football. Compare how each writer answers a stereotype with personal anecdote.',
    reasonAr:
      'تصف Adichie القصّةَ الواحدة التي كانت لدى زميلتها الأمريكيّة في السكن عن إفريقيا؛ وكانت لدى معلّمي Zephaniah قصّةٌ واحدة عنه: الصبيّ الذي لا يمكن أن يكون ذكيّاً وعليه أن يذهب ليلعب كرة القدم. قارن كيف يردّ كلٌّ من الكاتبَين على الصورة النمطيّة بالحكاية الشخصيّة.',
    themes: ['Identity', 'Stereotypes', 'Self-definition'],
    themesAr: ['الهويّة', 'الصور النمطيّة', 'تعريف الذات'],
  },
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason:
      'Both writers recall being judged by adults when young. Adeline Yen Mah’s father is proud of her writing prize but scoffs at her wish to be a writer and decides that she will study medicine, and she does not contradict him; Zephaniah’s ideas contradicted his teachers’. Compare the two responses to authority.',
    reasonAr:
      'يستعيد الكاتبان حُكمَ الكبار عليهما في الصغر. فوالدُ Adeline Yen Mah فخورٌ بجائزتها في الكتابة، لكنّه يسخر من رغبتها في أن تصير كاتبة ويقرّر أن تدرس الطبّ، فلا تعارضه؛ أمّا أفكار Zephaniah فكانت تناقض أفكار معلّميه. قارن بين الاستجابتين للسلطة.',
    themes: ['Childhood', 'Being judged', 'Response to authority'],
    themesAr: ['الطفولة', 'حُكم الكبار', 'الاستجابة للسلطة'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both are first-person accounts of adversity, told very differently. Ralston narrates in the present tense how a boulder crushes his right hand and leaves him stuck, and how he realises he must free himself; Zephaniah looks back across a lifetime. Compare how each writer’s distance from events shapes the reader’s response.',
    reasonAr:
      'كلاهما روايةٌ بضمير المتكلّم عن الشدّة، لكنّهما تُرويان بطريقتين مختلفتين جدّاً. يروي Ralston بالزمن الحاضر كيف يسحق صخرٌ يدَه اليمنى فيعلق، وكيف يدرك أنّ عليه أن يحرّر نفسه؛ أمّا Zephaniah فينظر إلى الوراء عبر عمرٍ كامل. قارن كيف يُشكّل بُعدُ كلّ كاتبٍ عن الأحداث استجابةَ القارئ.',
    themes: ['Adversity', 'Self-reliance', 'Perspective'],
    themesAr: ['الشدائد', 'الاعتماد على النفس', 'زاوية النظر'],
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
                  both give The Guardian, Friday 2 October 2015. Until 26 September
                  2026 this read "Opinion article ... adapted for the anthology". The
                  headnote says the Guardian article is itself adapted from his
                  contribution to a book, and nothing shows that Pearson altered it
                  further or where the Guardian filed it. */}
              {ar
                ? 'مقال (The Guardian على الإنترنت، 2015)'
                : 'Article (The Guardian online, 2015)'}
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
            {/* Until 26 September 2026 this box, and the footer, said the online
                Guardian original "differs in cuts, re-orderings, and minor word
                choice". Nothing checked supports that: the anthology's headnote says
                only that the Guardian article is adapted from his contribution to a
                book, and the one independent online copy the guide checked agreed
                with the anthology on all fourteen phrases compared. What is certain
                is that the exam prints the anthology text in its Source Booklet.
                Until 10 October 2026 both boxes also said copies found online "do
                not carry" the line numbers; Pearson's own PDF, which this page
                recommends, is online and carries them, so they now say other copies
                may not. */}
            <p className="mb-2">
              {ar ? (
                <>
                  <strong className="text-foreground">تحذير نسخة المختارات:</strong> هذا هو المقال
                  كما تطبعه مختارات Edexcel IGCSE (ISBN 978-1-446-93108-0) في الصفحتين 12-13: النصّ
                  الذي نشرته <em>The Guardian</em> على الإنترنت عام 2015، وهو نفسه مُكيَّف من إسهام
                  Zephaniah في كتاب. وقد لا تحمل النسخُ الأخرى المتاحة على الإنترنت أرقامَ أسطر
                  المختارات، وقد لا تطابق صياغتها. استعمل دائماً نسخةَ المختارات حين تجيب على أسئلة
                  Edexcel - يطبع الامتحانُ هذا النصّ في كتيّب المصادر، ويُصحّح الممتحنون قبالته.
                </>
              ) : (
                <>
                  <strong className="text-foreground">Anthology version warning:</strong> This is
                  the article as printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0),
                  pages 12-13: the piece <em>The Guardian</em> published online in 2015, itself
                  adapted from Zephaniah&apos;s contribution to a book. Other copies found online
                  may not carry the anthology&apos;s line numbers or match its wording. Always use
                  the anthology version when answering Edexcel exam questions - the exam prints that
                  text in its Source Booklet, and examiners mark against it.
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
        {/* CORRECTED 26 September 2026 against the anthology, Issue 8, pp. 12-13.
            This said he "left school at thirteen" (the article: expelled from his
            last school at 13), built a career on "oral storytelling" (nothing in
            the article), addressed young dyslexic readers directly (only its last
            paragraphs do), and that the anthology prints an adapted form of the
            Guardian article (the headnote says the Guardian article is itself the
            adaptation, of his contribution to a book). */}
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          {ar ? (
            <>
              <p>
                Benjamin Zephaniah (1958&ndash;2023) شاعرُ دَب بريطانيّ وروائيّ ومناضلٌ سياسيّ.
                يستعيد في هذا المقال نشأته في زمنٍ لم يكن المعلّمون يعرفون فيه ما الـ dyslexia: طُرد
                من آخر مدارسه في الثالثة عشرة، وقضى وقتاً في الإصلاحيّة (borstal)، ولم يُقل له إنّ
                لديه dyslexia إلّا في الحادية والعشرين، في صفٍّ لتعليم الكبار في لندن. دوّنت صديقتُه
                قصائدَ كتابه الأوّل وهو يرويها لها؛ وحين كتب المقال كان قد كتب أيضاً رواياتٍ للناشئة
                ومسرحيّات، وسجّل موسيقى، وصار أستاذاً للشعر والكتابة الإبداعيّة في Brunel
                University.
              </p>
              <p>
                نُشر المقال في <em>The Guardian</em> على الإنترنت في 2 أكتوبر 2015، مُكيَّفاً من
                إسهامه في كتاب <em>Creative, Successful, Dyslexic</em> (Jessica Kingsley Publishers،
                2015)، الذي يروي فيه ثلاثةٌ وعشرون من أصحاب الإنجازات قصصَهم، وتطبعه المختارات في
                الصفحتين 12-13. يتحدّث المقال عن حياته في معظمه، ولا يخاطب القرّاءَ ذوي الـ dyslexia
                وآباءهم مباشرةً إلّا في فقراته الأخيرة. توفّي Zephaniah في 7 ديسمبر 2023.
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
                campaigner. In this article he looks back on growing up at a time when teachers did
                not know what dyslexia was: he was expelled from his last school at 13, spent time
                in borstal, and was told he was dyslexic only at 21, at an adult education class in
                London. His girlfriend wrote down the poems for his first book as he told them to
                her; by the time of writing he had also written novels for teenagers and plays,
                recorded music, and become professor of poetry and creative writing at Brunel
                University.
              </p>
              <p>
                The article was published in <em>The Guardian</em> online on 2 October 2015, adapted
                from his contribution to <em>Creative, Successful, Dyslexic</em> (Jessica Kingsley
                Publishers, 2015), a book in which twenty-three high achievers tell their stories,
                and the anthology prints it on pages 12-13. It speaks about his own life for most of
                its length and turns to address dyslexic readers and their parents directly only in
                its last paragraphs. Zephaniah died on 7 December 2023.
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
        {/* Added 26 September 2026. Of these eleven words only dyslexia,
            accommodate and creativity appear in the article (checked against the
            anthology, Issue 8); the list read as if all of them were his. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {ar
            ? 'مفرداتٌ للكتابة عن المقال. ثلاثٌ منها فقط - dyslexia وaccommodate وcreativity - ترد فيه؛ أمّا البقيّة فمصطلحاتٌ لمناقشة حُجّته، لا كلماتٌ يستعملها Zephaniah.'
            : 'Words for writing about the article. Only three of them, dyslexia, accommodate and creativity, appear in it; the rest are terms for discussing its argument, not words Zephaniah uses.'}
        </p>
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
        {/* 10 October 2026: removed a second sentence, added on 26 September
            2026, that said again that the exam compares this text only with an
            unseen passage. The shared intro (anth_text.compare_with.intro) says so
            itself, so the page said it twice. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}
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
              {/* See the version warning at the top of the page for why the
                  "cuts and re-orderings" claim was removed on 26 September 2026. */}
              <strong className="text-foreground">تحذير نسخة المختارات:</strong> هذا هو المقال كما
              تطبعه مختارات Edexcel IGCSE (ISBN 978-1-446-93108-0)، وهو مُكيَّف من إسهام Zephaniah
              في كتاب. وقد لا تحمل النسخُ الأخرى المتاحة على الإنترنت أرقامَ أسطر المختارات، وقد لا
              تطابق صياغتها. استعمل دائماً نسخةَ المختارات حين تجيب على أسئلة Edexcel - يُصحّح
              الممتحنون قبالةَ نصّ المختارات.
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
              <strong className="text-foreground">Anthology version warning:</strong> This is the
              article as printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0), itself
              adapted from Zephaniah&apos;s contribution to a book. Other copies found online may
              not carry the anthology&apos;s line numbers or match its wording. Always use the
              anthology version when answering Edexcel exam questions - examiners mark against the
              anthology text.
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
