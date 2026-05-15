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
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'A Passage to Africa — George Alagiah — IGCSE Language A Anthology — The English Hub',
    description:
      'Study guide for A Passage to Africa by George Alagiah. Thematic and structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  },
  title: 'A Passage to Africa — George Alagiah — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for A Passage to Africa by George Alagiah. Thematic and structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-passage-to-africa',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const keyMoments = [
  {
    id: 1,
    label: 'Opening — the catalogue of suffering',
    labelAr: 'الافتتاح — تَعدادُ المعاناة',
    context:
      'Alagiah opened with a panoramic view of starvation across Somalia, criss-crossing the country between warring clans. The accumulation of suffering establishes the scale of the 1992 famine and his role as a journalist witnessing it.',
    contextAr:
      'يستهلّ Alagiah بنظرةٍ بانوراميّة على المجاعة في أنحاء الصومال، متنقّلاً بين عشائر متناحرة. ويُرسّخ تراكمُ المعاناة حجمَ مجاعة 1992، ودورَه صحفيّاً يشهدها.',
  },
  {
    id: 2,
    label: 'The encounter at Gufgaduud',
    labelAr: 'لقاءُ Gufgaduud',
    context:
      'In the village of Gufgaduud, Alagiah met an emaciated man who turned and smiled at him. This single human gesture, made amid devastation, becomes the emotional centre of the extract and the moment Alagiah cannot forget.',
    contextAr:
      'في قرية Gufgaduud، التقى Alagiah رجلاً نحيلَ الجسد التفت إليه وابتسم. هذه الإيماءةُ الإنسانيّة الوحيدة، الصادرةُ وسط الدمار، تصير المركزَ العاطفيَّ للمقتطف، واللحظةَ التي لا يستطيع Alagiah نسيانها.',
  },
  {
    id: 3,
    label: "The journalist's calculus",
    labelAr: 'حسابات الصحفيّ',
    context:
      'Alagiah reflected on the disturbing logic of news reporting: that suffering must reach a certain scale before editors deem it newsworthy. He was openly self-critical about the moral compromises of foreign correspondence.',
    contextAr:
      'يتأمّل Alagiah في منطق التغطية الإخباريّة المزعج: أنّ المعاناة لا بدّ أن تبلغ حجماً معيّناً قبل أن يعدّها المحرّرون جديرةً بالنشر. ويوجّه نقداً ذاتيّاً صريحاً للتنازلات الأخلاقيّة في مهنة المراسلة الخارجيّة.',
  },
  {
    id: 4,
    label: 'The meaning of the smile',
    labelAr: 'معنى الابتسامة',
    context:
      'The teacher note below explains why this is the most-quoted line of the piece. Alagiah re-read the smile not as a greeting but as something more painful — a recognition of being witnessed in degradation.',
    contextAr:
      'تشرح ملاحظةُ المعلّم أدناه لماذا هذا أكثرُ سطرٍ يُقتبس من العمل. يُعيد Alagiah قراءةَ الابتسامة، لا تحيّةً، بل شيئاً أوجع — اعترافاً بأنّ المرء يُرى وهو في إذلاله.',
  },
  {
    id: 5,
    label: 'Closing reflection',
    labelAr: 'التأمّل الختاميّ',
    context:
      'Alagiah ended by reframing the smile as an assertion of humanity — a refusal to be reduced to a victim or a statistic. The closing recovers the individual that the opening submerged in the mass.',
    contextAr:
      'يختم Alagiah بإعادة تأطير الابتسامة بوصفها تأكيداً للإنسانيّة — رفضاً للاختزال إلى ضحيّةٍ أو إحصاء. وتستردّ الخاتمةُ الفردَ الذي أغرقه الافتتاحُ في الجموع.',
  },
]

const languageFeatures = [
  {
    technique: 'Listing / accumulation',
    techniqueAr: 'التَّعداد / التَّراكُم',
    explanation:
      'Alagiah accumulated adjectives across physical, emotional and political registers in his opening, overwhelming the reader with the multidimensional nature of the famine. The list does the work of a wide camera shot.',
    explanationAr:
      'يُكدّس Alagiah الصفاتِ في افتتاحه عبر مستوياتٍ جسديّة وعاطفيّة وسياسيّة، فيُغرق القارئَ بأبعاد المجاعة المتعدّدة. ويؤدّي التَّعدادُ وظيفةَ لقطةٍ سينمائيّة واسعة.',
  },
  {
    technique: 'Metaphor of arithmetic',
    techniqueAr: 'استعارة الحساب',
    explanation:
      "A central metaphor in the extract reduced human lives to numbers, exposing the cold calculation of newsroom decision-making. The metaphor is paired with a strongly negative adjective so the reader feels Alagiah's discomfort with his own profession.",
    explanationAr:
      'تختزل استعارةٌ محوريّة في المقتطف حياةَ البشر إلى أرقام، فاضحةً الحسابَ البارد في غرف الأخبار. وتقترن الاستعارة بصفةٍ سلبيّة قويّة كي يشعر القارئ بضيق Alagiah من مهنته ذاتها.',
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
      'Alagiah chose words that connote violent destruction and bodily decay, making abstract suffering concrete. The reader cannot maintain emotional distance from the language he selected.',
    explanationAr:
      'يختار Alagiah ألفاظاً توحي بالدمار العنيف والتحلّل الجسديّ، فيُحوّل المعاناة المجرّدة إلى محسوس. ولا يستطيع القارئ أن يحفظ مسافةً عاطفيّةً عن اللغة التي انتقاها.',
  },
  {
    technique: 'Sensory language',
    techniqueAr: 'اللغة الحسّيّة',
    explanation:
      'He layered in sensory detail — particularly smell, the most unavoidable sense — to immerse the reader in the reality of the famine. You can look away from a photograph, but not a smell.',
    explanationAr:
      'يُكدّس التفاصيلَ الحسيّة — لا سيّما الشمّ، أكثر الحواسّ استعصاءً على التجنّب — كي يغمر القارئ في واقع المجاعة. يمكنك أن تُعرض عن صورة، لكنّك لا تستطيع أن تُعرض عن رائحة.',
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
      'The text turns bitterly ironic when Alagiah explains that hundreds of dead are sometimes "not enough" to be news. He uses irony to expose the moral failings of the media industry he was part of.',
    explanationAr:
      'يتّخذ النصُّ مفارقةً مُرّةً حين يُبيّن Alagiah أنّ مئات القتلى ليسوا أحياناً "كافين" ليصيروا خبراً. ويستعمل المفارقةَ ليفضح الإخفاقاتِ الأخلاقيّة في صناعة الإعلام التي كان جزءاً منها.',
  },
  {
    technique: 'Repetition',
    techniqueAr: 'التكرار',
    explanation:
      "The motif of the smile recurs through the extract, reinterpreted each time — as greeting, as embarrassment, as humanity. The repetition tracks Alagiah's changing understanding of a single gesture.",
    explanationAr:
      'يتكرّر موتيفُ الابتسامة عبر المقتطف، ويُعاد تأويلُه في كلّ مرّة — تحيّةً، فإحراجاً، فإنسانيّةً. ويلاحق التكرار تطوُّرَ فهم Alagiah لإيماءةٍ واحدة.',
  },
  {
    technique: 'Rhetorical questioning',
    techniqueAr: 'السؤال البلاغيّ',
    explanation:
      'Alagiah used rhetorical questions to invite the reader into his moral investigation. The text shifts from reportage to memoir as the reader becomes a fellow investigator of conscience.',
    explanationAr:
      'يستعمل Alagiah الأسئلة البلاغيّة ليُدخل القارئَ في تحقيقه الأخلاقيّ. وينتقل النصّ من التقرير إلى السيرة، إذ يصير القارئ شريكاً في تحقيق الضمير.',
  },
  {
    technique: 'First-person reflective voice',
    techniqueAr: 'صوت المتكلّم المتأمّل',
    explanation:
      'The narrator is both observer and participant. The tension between Alagiah-the-journalist and Alagiah-the-human-being drives the piece — the professional who must record suffering and the person who feels it.',
    explanationAr:
      'الراوي مُراقبٌ ومُشاركٌ في آنٍ معاً. ويحرّك التوتّرُ بين Alagiah-الصحفيِّ وAlagiah-الإنسانِ العملَ — المحترفُ الذي يلزمه تسجيل المعاناة، والإنسانُ الذي يشعر بها.',
  },
]

const structuralAnalysis = {
  opening:
    'Alagiah opened with a panoramic view of suffering across Somalia — a wide shot establishing the overwhelming scale. This mirrors the technique of a news broadcast, starting with the big picture before zooming in.',
  openingAr:
    'يستهلّ Alagiah بنظرةٍ بانوراميّة على المعاناة في أنحاء الصومال — لقطةٌ واسعة تُرسّخ الحجمَ الطاغي. ويعكس هذا أسلوبَ النشرة الإخباريّة، الذي يبدأ من الصورة الكبرى قبل أن يقرّب التركيز.',
  development:
    "The text gradually narrows its focus from the general (a country, a famine, many faces) to the particular (one village, one man, one smile). This structural movement from wide to close-up is the text's most powerful device.",
  developmentAr:
    'يضيّق النصّ تدريجيّاً مدى تركيزه من العامّ (بلدٌ، مجاعةٌ، وجوهٌ كثيرة) إلى الخاصّ (قريةٌ واحدة، رجلٌ واحد، ابتسامةٌ واحدة). وهذا الانتقال البنائيّ من الواسع إلى القريب هو أقوى أدوات النصّ.',
  climax:
    'The climax is the moment of realisation about the smile — when Alagiah reinterpreted it not as a greeting but as something more troubling. This is both an emotional and intellectual climax.',
  climaxAr:
    'الذروةُ هي لحظةُ إدراك معنى الابتسامة — حين أعاد Alagiah تأويلَها لا تحيّةً بل شيئاً أكثر إقلاقاً. وهذه ذروةٌ عاطفيّة وفكريّة في آنٍ معاً.',
  resolution:
    'Alagiah reframed the smile a final time as an assertion of humanity. The resolution is not neat — the guilt remains — but the writer reaches a deeper understanding of what the encounter meant.',
  resolutionAr:
    'يُعيد Alagiah تأطيرَ الابتسامة في النهاية بوصفها تأكيداً للإنسانيّة. والخاتمةُ ليست مرتّبة — يبقى الشعور بالذنب — لكنّ الكاتب يبلغ فهماً أعمق لما يعنيه ذلك اللقاء.',
  perspective:
    'First person throughout. Alagiah wrote as both journalist (observer) and human being (participant). The tension between these two roles drives the text: the professional who must record suffering and the person who feels it.',
  perspectiveAr:
    'ضمير المتكلّم في النصّ كلّه. يكتب Alagiah بوصفه صحفيّاً (مُراقباً) وإنساناً (مُشاركاً). ويحرّك التوتّرُ بين هذين الدورَين النصَّ: المحترفُ الذي يلزمه تسجيل المعاناة، والإنسانُ الذي يشعر بها.',
  paragraphing:
    'Short paragraphs create pace and impact, particularly around the key revelation. Longer paragraphs are used for description and context, shorter ones for emotional moments.',
  paragraphingAr:
    'تُولّد الفقرات القصيرة إيقاعاً وأثراً، ولا سيّما حول الكشفِ المفتاحيّ. وتُستعمل الفقرات الأطول للوصف والسياق، والفقرات الأقصر للّحظات العاطفيّة.',
  time: 'The text moves between the general past (covering Somalia over weeks) and one specific moment (the man who smiled in Gufgaduud). There is a shift from professional time (deadlines, filing reports) to personal time (the moment that haunts you).',
  timeAr:
    'يتنقّل النصّ بين الزمن الماضي العامّ (تغطية الصومال على مدى أسابيع) ولحظةٍ واحدة محدّدة (الرجل الذي ابتسم في Gufgaduud). وثمّة انتقالٌ من الزمن المهنيّ (المواعيد النهائيّة، تقديم التقارير) إلى الزمن الشخصيّ (اللحظة التي تطاردك).',
  openingClosing:
    "The opening presents suffering as a mass; the closing recovers the individual. This structural arc — from dehumanisation to re-humanisation — embodies the text's central message about the importance of seeing individuals.",
  openingClosingAr:
    'يقدّم الافتتاحُ المعاناةَ جموعاً؛ وتستردّ الخاتمةُ الفردَ. وهذا القوسُ البنائيّ — من نزع الإنسانيّة إلى استعادتها — يجسّد رسالةَ النصّ المركزيّة عن أهمّيّة رؤية الأفراد.',
}

const writersPurpose = {
  achieve:
    'Alagiah wanted to explore the moral complexity of being a journalist in a crisis zone. He questioned whether the media dehumanises the people it claims to help, and whether his own presence as a reporter contributed to the indignity of those he witnessed.',
  achieveAr:
    'أراد Alagiah أن يستكشف التعقيدَ الأخلاقيَّ في كون المرء صحفيّاً داخل منطقة أزمة. وتساءل: هل ينزع الإعلامُ إنسانيّةَ من يدّعي مساعدتهم؟ وهل ساهم حضورُه مراسلاً في إذلال من شَهِدَهم؟',
  readerFeel:
    'He wanted the reader to feel the uncomfortable tension between compassion and voyeurism — the same tension he felt as a correspondent. He also wanted to restore humanity to the people he reported on.',
  readerFeelAr:
    'أراد للقارئ أن يشعر بالتوتّر المُربك بين الشفقة والفُرجة — التوتّر نفسه الذي شعر به مراسلاً. كما أراد أن يستعيد إنسانيّةَ من غطّى أحوالَهم.',
  message:
    "His central argument is that behind every news statistic is a human being who deserves to be seen as an individual. The man's smile in Gufgaduud is a refusal to be reduced to a victim — it is an assertion of dignity and humanity.",
  messageAr:
    'حُجّتُه المركزيّة أنّ وراء كلّ إحصاءٍ إخباريّ إنساناً يستحقّ أن يُرى فرداً. وابتسامةُ الرجل في Gufgaduud رفضٌ للاختزال إلى ضحيّة — هي تأكيدٌ للكرامة والإنسانيّة.',
}

const keyVocabulary = [
  {
    word: 'criss-crossed',
    definition: 'To move back and forth across an area repeatedly.',
    definitionAr: 'التنقّل ذهاباً وإياباً عبر منطقةٍ مراراً وتكراراً.',
  },
  {
    word: 'ghastly',
    definition: 'Causing great horror or fear; frightful or macabre.',
    definitionAr: 'مُسبّبٌ رعباً أو خوفاً شديداً؛ مُفزع أو مروّع.',
  },
  {
    word: 'arithmetic',
    definition:
      'The branch of mathematics dealing with numbers; here used metaphorically to describe the cold calculation of suffering.',
    definitionAr:
      'فرعُ الرياضيّات المعنيُّ بالأعداد؛ يُستعمل هنا استعارةً لوصف الحساب البارد للمعاناة.',
  },
  {
    word: 'degradation',
    definition:
      'The condition of being treated with shame or disrespect; being reduced to a lower state.',
    definitionAr: 'حالُ مَن يُعامَل بإهانةٍ أو احتقار؛ الاختزال إلى مرتبةٍ أدنى.',
  },
  {
    word: 'warring',
    definition: 'Engaged in conflict or fighting against each other.',
    definitionAr: 'مُنخرطون في نزاعٍ أو قتالٍ متبادل.',
  },
  {
    word: 'emaciated',
    definition: 'Abnormally thin or weak, especially because of illness or lack of food.',
    definitionAr: 'نحيلٌ أو ضعيفٌ بشدّةٍ غير مألوفة، خاصّةً بسبب المرض أو نقص الطعام.',
  },
  {
    word: 'famine',
    definition: 'Extreme scarcity of food affecting a population, often causing widespread death.',
    definitionAr: 'شُحٌّ شديد للطعام يصيب جمهرةً، ويُفضي غالباً إلى موتٍ واسع.',
  },
  {
    word: 'resilience',
    definition: 'The capacity to recover quickly from difficulties; toughness.',
    definitionAr: 'القدرة على التعافي السريع من الشدائد؛ الصلابة.',
  },
  {
    word: 'humanity',
    definition: 'The quality of being humane; benevolence. Also: human beings collectively.',
    definitionAr: 'صفةُ كون المرء إنسانيّاً؛ الإحسان. وأيضاً: البشرُ مجموعين.',
  },
  {
    word: 'mortality',
    definition: 'The state of being subject to death; the death rate in a population.',
    definitionAr: 'حالُ كون المرء عُرضةً للموت؛ معدّل الوفيات في جمهرة.',
  },
  {
    word: 'compassion',
    definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.',
    definitionAr: 'شفقةٌ متعاطفة واهتمامٌ بمعاناة الآخرين أو محنهم.',
  },
  {
    word: 'voyeurism',
    definition:
      "The practice of gaining pleasure from watching others' suffering or private moments; here applied to media consumption.",
    definitionAr:
      'ممارسةُ التلذُّذ بمشاهدة معاناة الآخرين أو لحظاتهم الخاصّة؛ وتُطبَّق هنا على استهلاك الإعلام.',
  },
]

const examPractice = {
  q1: {
    question:
      'List four things you learn about the conditions in Somalia from the opening paragraphs.',
    questionAr: 'اذكر أربعةَ أشياء تعرفها عن الأوضاع في الصومال من فقرات الافتتاح.',
    type: 'Retrieval — 4 marks',
    typeAr: 'الاسترجاع — ٤ درجات',
  },
  q2: {
    question:
      'How does Alagiah use language to convey the impact of suffering on both the victims and himself as a journalist?',
    questionAr:
      'كيف يستعمل Alagiah اللغةَ لنقل أثر المعاناة في الضحايا وفيه شخصيّاً بوصفه صحفيّاً؟',
    type: 'Language analysis — 12 marks',
    typeAr: 'تحليل اللغة — ١٢ درجة',
    modelOutline: [
      'Identify the metaphor Alagiah uses for newsroom decision-making and explain how its negative modifier reveals his own moral discomfort with the profession.',
      'Track the listing of adjectives in the opening: how the cumulative effect moves the reader through the physical, emotional and political dimensions of suffering in a single sentence.',
      'Analyse the sensory language — particularly references to smell — and explain why this sense is harder to ignore than visual description.',
      'Examine the central contrast between devastation and the human gesture of the smile. Why does this contrast force both Alagiah and the reader to reconsider how they see victims of crisis?',
    ],
    modelOutlineAr: [
      'حدّد الاستعارة التي يستعملها Alagiah لاتّخاذ القرارات في غرفة الأخبار، واشرح كيف يكشف وصفُها السلبيّ ضيقَه الأخلاقيَّ من مهنته.',
      'تتبّع تَعدادَ الصفات في الافتتاح: كيف ينقل الأثرُ التراكميُّ القارئَ عبر الأبعاد الجسديّة والعاطفيّة والسياسيّة للمعاناة في جملةٍ واحدة.',
      'حلِّل اللغةَ الحسيّة — لا سيّما إشارات الشمّ — واشرح لماذا تستعصي هذه الحاسّة على التجاهل أكثر من الوصف البصريّ.',
      'افحص التضادَّ المحوريَّ بين الدمار وإيماءة الابتسامة الإنسانيّة. لماذا يُجبر هذا التضادُّ Alagiah والقارئَ معاً على إعادة النظر في كيفيّة رؤية ضحايا الأزمات؟',
    ],
  },
  q3: {
    question:
      'How does Alagiah structure the text to move from a wide view of suffering to a focus on one individual?',
    questionAr:
      'كيف يبني Alagiah النصَّ ليتنقّل من نظرةٍ واسعة على المعاناة إلى تركيزٍ على فردٍ واحد؟',
    type: 'Structural analysis — 12 marks',
    typeAr: 'التحليل البنائيّ — ١٢ درجة',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Adichie warns about the single-story portrayal of Africa; Alagiah, as a BBC correspondent, was part of the media that creates it. Compare how each writer handles the ethics of representing Africa and the tension between individual stories and collective narratives.',
    reasonAr:
      'تحذّر Adichie من تصوير إفريقيا بقصّةٍ واحدة؛ وكان Alagiah مراسلاً للـ BBC جزءاً من الإعلام الذي يصنع تلك القصّة. قارن كيف يتعامل كلّ كاتب مع أخلاقيّات تمثيل إفريقيا، ومع التوتّر بين القصص الفرديّة والروايات الجماعيّة.',
    themes: ['Africa', 'Representation', 'Media'],
    themesAr: ['إفريقيا', 'التمثيل', 'الإعلام'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      "Both writers are outsiders encountering unfamiliar cultures. Compare Alagiah's guilt-laden journalism in a crisis zone with Zeppa's wonder-filled travel memoir — two very different ways of writing about the unfamiliar.",
    reasonAr:
      'كلا الكاتبَين غريبٌ يلتقي ثقافاتٍ مجهولة. قارن صحافةَ Alagiah المُثقَلة بالشعور بالذنب في منطقة أزمة، بسيرة Zeppa الرحليّة المُفعمة بالدهشة — طريقتان مختلفتان وايد في الكتابة عن المجهول.',
    themes: ['Outsider perspective', 'Cultural encounter', 'Personal growth'],
    themesAr: ['منظور الغريب', 'اللقاء الثقافيّ', 'النموّ الشخصيّ'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      "Both texts deal with extreme physical suffering. Compare Ralston's first-person survival narrative with Alagiah's journalistic witness account — one is the sufferer, the other is the observer.",
    reasonAr:
      'يتناول النصّان معاناةً جسديّةً قصوى. قارن سردَ Ralston الناجي بضمير المتكلّم بشهادة Alagiah الصحفيّة — أحدهما المُعاني، والآخر المُراقب.',
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
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('anth_text.back_to_anthology')}
        </Button>

        <div className="mb-4 rounded-md border border-blue-500/30 bg-blue-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-blue-950/20">
          <strong className="text-foreground">{await t('anth_text.rebuilt_label')}</strong>{' '}
          {ar
            ? 'أُزيلت الاقتباسات الحرفيّة بانتظار التحقّق منها مقابل نسخةٍ مرخّصة من مختارات Edexcel. استعمل التعليقَ البنائيَّ والموضوعيَّ في هذه الصفحة مع مختاراتك الخاصّة لتحديد النصّ الحرفيّ.'
            : 'Direct quotations have been removed pending verification against a licensed Edexcel anthology copy. Use the structural and thematic commentary on this page alongside your own anthology to source exact wording.'}
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
                  قصيراً مع رجلٍ في قرية Gufgaduud. وحقوقُ أعماله بحوزة ورثته الآن.
                </>
              ) : (
                <>
                  <strong className="text-foreground">George Alagiah (1955&ndash;2023)</strong> was
                  a Sri Lankan-born British BBC journalist and broadcaster. The anthology extract,
                  drawn from his 2001 memoir of the same name, recounts his reporting on the 1992
                  Somalia famine and a brief encounter with a man in the village of Gufgaduud.
                  Rights to his work are now held by his estate.
                </>
              )}
            </p>
            <p className="mt-3 max-w-3xl rounded-md border border-amber-500/30 bg-amber-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-amber-950/20">
              <strong className="text-foreground">
                {await t('anth_text.rights_notice_label')}
              </strong>{' '}
              {ar
                ? '© ورثة Alagiah عبر Pearson Education. تتطلّب اختياراتُ المختارات الكاملة طبعةً مدرسيّة مرخّصة من Edexcel (ISBN 978-1-446-93108-0).'
                : '© Alagiah estate via Pearson Education. Full anthology selections require an Edexcel-licensed school edition (ISBN 978-1-446-93108-0).'}
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
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">
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
                {momentPrefix} {moment.id} — {ar ? moment.labelAr : moment.label}
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
                    {ar
                      ? 'يصوغها Alagiah بشهرةٍ بأنّها "smile of embarrassment" — تحقّق من الصياغة الحرفيّة في مختاراتك قبل الاقتباس.'
                      : 'Alagiah famously frames this as a “smile of embarrassment” — verify exact phrasing against your anthology before quoting.'}
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
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q2.typeAr : examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q2.questionAr : examPractice.q2.question}
            </p>
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
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            © ورثة Alagiah عبر Pearson Education. تتطلّب اختياراتُ المختارات الكاملة طبعةً مدرسيّة
            مرخّصة من Edexcel (ISBN 978-1-446-93108-0). <em>A Passage to Africa</em> لـ George
            Alagiah (1955–2023) ضمن سيرته <em>A Passage to Africa</em> (2001).
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            &copy; Alagiah estate via Pearson Education. Full anthology selections require an
            Edexcel-licensed school edition (ISBN 978-1-446-93108-0). <em>A Passage to Africa</em>{' '}
            by George Alagiah (1955&ndash;2023) appears in his memoir <em>A Passage to Africa</em>{' '}
            (2001).
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
