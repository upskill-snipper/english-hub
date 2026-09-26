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
  openGraph: {
    title: 'The Explorer',
    description: 'Study guide for The Explorer',
    images: [
      {
        url: '/api/og?title=The+Explorer',
        width: 1200,
        height: 630,
        alt: 'The Explorer',
      },
    ],
  },
  title: "The Explorer's Daughter - Kari Herbert - IGCSE Anthology",
  description:
    "Study guide for The Explorer's Daughter by Kari Herbert. Structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.",
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/the-explorers-daughter',
  },
}

const languageFeatures = [
  {
    technique: 'Imagery (visual)',
    techniqueAr: 'الصورة البصريّة',
    guidance:
      'Look for visual imagery examples in the anthology extract - Herbert uses imagery to render the Arctic landscape as both beautiful and forbidding, conveying scale and atmosphere.',
    guidanceAr:
      'ابحث عن أمثلة على الصورة البصريّة في مقتطف المختارات - تستعمل Herbert الصورةَ لتقدّم منظر القطب الشماليّ جميلاً منيعاً في آنٍ معاً، فتنقل الحجم والمناخ.',
  },
  {
    technique: 'Personification',
    techniqueAr: 'التشخيص',
    guidance:
      "Look for personification examples in the anthology extract - Herbert uses personification to give the natural world (sea, ice, wind) agency, reinforcing nature's dominance over human life.",
    guidanceAr:
      'ابحث عن أمثلة على التشخيص في مقتطف المختارات - تستعمل Herbert التشخيصَ لتمنح الطبيعةَ (البحرَ والجليدَ والريحَ) إرادةً، فيتعزّز تسلّطُها على حياة الإنسان.',
  },
  {
    technique: 'Contrast',
    techniqueAr: 'التضادّ',
    guidance:
      'Look for contrast examples in the anthology extract - Herbert uses contrast to juxtapose beauty and danger, admiration and unease, mirroring her own conflicted response to the hunt.',
    guidanceAr:
      'ابحث عن أمثلة على التضادّ في المقتطف - تستعمل Herbert التضادَّ لتضع الجمال إلى جانب الخطر، والإعجاب إلى جانب القلق، عاكسةً استجابتها المتناقضة هي ذاتها لمشهد الصيد.',
  },
  {
    technique: 'Emotive language',
    techniqueAr: 'اللغة الانفعاليّة',
    guidance:
      'Look for emotive language examples in the anthology extract - Herbert uses emotive language to reveal her instinctive sympathy for the narwhal and to draw the reader into her internal conflict.',
    guidanceAr:
      'ابحث عن أمثلة على اللغة الانفعاليّة في المقتطف - تستعمل Herbert اللغةَ الانفعاليّة لتكشف عن تعاطفها الغريزيّ مع الـ narwhal، ولتُدخل القارئ في صراعها الداخليّ.',
  },
  {
    technique: 'Sensory language',
    techniqueAr: 'اللغة الحسّيّة',
    guidance:
      'Look for sensory language examples in the anthology extract - Herbert uses sensory language to immerse the reader in the physical reality of the Arctic, making the scene feel immediate and lived.',
    guidanceAr:
      'ابحث عن أمثلة على اللغة الحسّيّة في المقتطف - تستعمل Herbert اللغةَ الحسّيّة لتغمر القارئ في الواقع الجسديّ للقطب الشماليّ، فيغدو المشهدُ حاضراً معيشاً.',
  },
  {
    technique: 'Simile',
    techniqueAr: 'التشبيه',
    guidance:
      'Look for simile examples in the anthology extract - Herbert uses similes to convey the alien, extreme quality of the Arctic landscape and to translate unfamiliar scenes into images the reader can picture.',
    guidanceAr:
      'ابحث عن أمثلة على التشبيه في المقتطف - تستعمل Herbert التشبيهَ لتنقل الطابعَ الغريبَ المتطرّفَ لمنظر القطب الشماليّ، ولتترجم مشاهدَ مجهولةً إلى صورٍ يستطيع القارئ تخيُّلها.',
  },
  {
    technique: 'Semantic field',
    techniqueAr: 'الحقل الدلاليّ',
    guidance:
      'Look for semantic-field examples in the anthology extract - Herbert draws on a coherent vocabulary set (cold, hunt, survival) to build the world of the text and dignify the practice she observes.',
    guidanceAr:
      'ابحث عن أمثلة على الحقل الدلاليّ في المقتطف - تستثمر Herbert مجموعةً مفرداتيّةً متماسكة (البرد، الصيد، النجاة) لتبني عالم النصّ ولتُكرم الممارسةَ التي تشاهدها.',
  },
  {
    technique: 'Tone shift',
    techniqueAr: 'تبدّل النبرة',
    guidance:
      'Look for tone-shift examples in the anthology extract - Herbert uses tone shifts to track her movement from observation to admiration to moral conflict to acceptance.',
    guidanceAr:
      'ابحث عن أمثلة على تبدّل النبرة في المقتطف - تستعمل Herbert تبدّلَ النبرة لتتبّع انتقالها من المراقبة إلى الإعجاب إلى الصراع الأخلاقيّ إلى القبول.',
  },
  {
    technique: 'Short sentence for emphasis',
    techniqueAr: 'الجملة القصيرة للتوكيد',
    guidance:
      'Look for short-sentence examples in the anthology extract - Herbert uses short sentences to mark moments of realisation, standing out against longer descriptive passages.',
    guidanceAr:
      'ابحث عن أمثلة على الجملة القصيرة في المقتطف - تستعمل Herbert الجملةَ القصيرة لتسِم لحظات الإدراك، فتبرز قبالةَ المقاطع الوصفيّة الأطول.',
  },
  {
    technique: 'Listing',
    techniqueAr: 'التَّعداد',
    guidance:
      'Look for listing examples in the anthology extract - Herbert uses lists to ground the argument in practical necessity, shifting from emotional response to rational acceptance of the hunt.',
    guidanceAr:
      'ابحث عن أمثلة على التَّعداد في المقتطف - تستعمل Herbert التَّعدادَ لتُرسي الحُجّة على ضرورةٍ عمليّة، منتقلةً من الاستجابة العاطفيّة إلى القبول العقلانيّ بالصيد.',
  },
]

const structuralAnalysis = {
  opening:
    'Herbert opens with a panoramic description of the Arctic landscape, establishing setting and atmosphere before introducing any human characters. This positions nature as the dominant force in the text.',
  openingAr:
    'تستهلّ Herbert بوصفٍ بانوراميٍّ لمنظر القطب الشماليّ، فتُرسّخ المكان والمناخ قبل أن تقدّم أيَّ شخصيّةٍ بشريّة. ويضع هذا الطبيعةَ في موقع القوّة المهيمنة في النصّ.',
  development:
    'The text develops by introducing the narwhal hunt, building tension as the hunters wait. Herbert gradually reveals her own emotional response, moving from observation to personal reflection.',
  developmentAr:
    'يتطوّر النصُّ بتقديم مشهد صيد الـ narwhal، وبتصاعد التوتّر مع انتظار الصيّادين. وتكشف Herbert تدريجيّاً استجابتها العاطفيّة، منتقلةً من المراقبة إلى التأمّل الشخصيّ.',
  climax:
    "The climax is the moment of internal conflict, where Herbert's instinctive sympathy for the narwhal collides with her understanding of the Inughuit's need to hunt. This dual pull is the moral centre of the text.",
  climaxAr:
    'الذروةُ هي لحظةُ الصراع الداخليّ، حيث يصطدم تعاطفُ Herbert الغريزيُّ مع الـ narwhal بإدراكها لحاجة الـ Inughuit إلى الصيد. وهذا التجاذبُ الثنائيُّ هو القلب الأخلاقيّ للنصّ.',
  resolution:
    "Herbert resolves her conflict by accepting the hunt as a necessary and ancient tradition. The resolution is earned through the argument she builds about the narwhal's importance to Inuit survival.",
  resolutionAr:
    'تَفُكّ Herbert صراعَها بقبول الصيد بوصفه تراثاً قديماً ضروريّاً. والخاتمةُ مُكتسبةٌ عبر الحُجّة التي تبنيها حول أهمّيّة الـ narwhal لنجاة الإنويت.',
  perspective:
    "First person, with Herbert positioned as both insider (she grew up in the Arctic) and outsider (she has Western sensibilities about animal welfare). This dual perspective creates the text's central tension.",
  perspectiveAr:
    'ضمير المتكلّم، مع تموضع Herbert ابنةَ البلاد (نشأت في القطب الشماليّ) وغريبةً (تحمل حساسيّةً غربيّة تجاه رفق الحيوان). وهذا المنظورُ الثنائيّ يُولّد التوتّرَ المركزيَّ في النصّ.',
  paragraphing:
    "Descriptive paragraphs are long and immersive, creating the sensation of being in the Arctic. Reflective paragraphs are shorter, marking shifts in Herbert's thinking.",
  paragraphingAr:
    'الفقرات الوصفيّة طويلةٌ غامرة، تُولّد إحساساً بالحضور في القطب الشماليّ. أمّا الفقرات التأمّليّة فأقصرُ، وتسِم تبدّلاتِ تفكير Herbert.',
  time: "The text uses present-tense description for the hunt, creating immediacy, interspersed with past-tense reflections on Herbert's childhood in the Arctic. This blending of timeframes enriches the perspective.",
  timeAr:
    'يستعمل النصُّ الوصفَ بصيغة المضارع لمشهد الصيد، فيُولّد فوريّةً، تتخلّلُها تأمّلاتٌ بصيغة الماضي عن طفولة Herbert في القطب الشماليّ. ويُثري هذا المزجُ بين الأزمنة المنظورَ.',
  openingClosing:
    "The opening frames the Arctic as harsh and indifferent; the closing reframes the hunt as purposeful survival. The text's arc moves from hostility to meaning, from outsider gaze to earned understanding.",
  openingClosingAr:
    'يُؤطّر الافتتاحُ القطبَ الشماليَّ قاسياً غيرَ آبهٍ؛ وتُعيد الخاتمةُ تأطيرَ الصيد بوصفه نجاةً ذاتَ غاية. وقوسُ النصّ ينتقل من العداء إلى المعنى، ومن نظرة الغريب إلى فهمٍ مُكتسَب.',
}

const writersPurpose = {
  achieve:
    'Herbert wants to present the narwhal hunt as a complex moral issue rather than a simple case of right and wrong. She respects both the animal and the hunters, refusing to take a simplistic position.',
  achieveAr:
    'تريد Herbert أن تُقدّم صيدَ الـ narwhal قضيّةً أخلاقيّةً مُركّبة، لا مسألةَ حقٍّ وباطلٍ ساذجة. وهي تحترم الحيوانَ والصيّادين معاً، رافضةً تبنّي موقفٍ مُبسَّط.',
  readerFeel:
    'She wants the reader to share her conflicted feelings - to feel the pull of both compassion for the narwhal and respect for the Inuit way of life. She does not want the reader to judge too quickly.',
  readerFeelAr:
    'تريد للقارئ أن يشاركها مشاعرها المتنازعة - أن يشعر بجاذبيّة الشفقة على الـ narwhal، وباحترام نمط حياة الإنويت في الوقت نفسه. ولا تريد أن يتسرّع القارئُ في الحكم.',
  message:
    'Her central argument is that cultural practices must be understood in context. The narwhal hunt, which might seem cruel to Western eyes, is a vital, sustainable tradition that has sustained a people for millennia.',
  messageAr:
    'حُجّتها المركزيّة أنّ الممارسات الثقافيّة لا بدّ أن تُفهم في سياقها. وصيدُ الـ narwhal، الذي قد يبدو قسوةً في العيون الغربيّة، تراثٌ حيويٌّ مستدامٌ سَنَدَ شعباً منذ آلاف السنين.',
}

const keyVocabulary = [
  {
    word: 'pitiless',
    definition: 'Showing no pity; merciless. Often used of harsh environments.',
    definitionAr: 'لا يُظهر شفقةً؛ بلا رحمة. كثيراً ما يُستعمل للبيئات القاسية.',
  },
  {
    word: 'harpoon',
    definition: 'A barbed spear-like weapon used for hunting large sea creatures.',
    definitionAr: 'سلاحٌ شبيهٌ بالرمح مُسنَّن، يُستعمل لصيد المخلوقات البحريّة الكبيرة.',
  },
  {
    word: 'narwhal',
    definition:
      'An Arctic whale with a long spiral tusk, hunted by Inuit peoples for food and materials.',
    definitionAr:
      'حوتٌ من القطب الشماليّ بنابٍ حلزونيٍّ طويل، يصطاده الإنويت طلباً للطعام والمواد.',
  },
  {
    word: 'incomparable',
    definition: 'Without an equal; matchless. Beyond comparison.',
    definitionAr: 'لا نظيرَ له؛ لا يُجارى. فوق المقارنة.',
  },
  {
    word: 'poised',
    definition: 'Ready and prepared for action; balanced and composed.',
    definitionAr: 'مستعدٌّ مهيَّأٌ للفعل؛ متوازنٌ رابطُ الجأش.',
  },
  {
    word: 'sustain',
    definition: 'To provide what is needed for survival or to continue over time.',
    definitionAr: 'أن يُقدّم ما يلزم للنجاة أو للاستمرار عبر الزمن.',
  },
  {
    word: 'tradition',
    definition: 'A custom or belief passed from generation to generation.',
    definitionAr: 'عادةٌ أو معتقدٌ يُتوارث جيلاً بعد جيل.',
  },
  {
    word: 'necessity',
    definition: 'The state of being required or unavoidable; something essential.',
    definitionAr: 'حالُ ما هو مطلوبٌ أو لا مفرّ منه؛ شيءٌ ضروريّ.',
  },
  {
    word: 'barren',
    definition: 'Too poor to produce vegetation; unproductive and desolate.',
    definitionAr: 'فقيرٌ إلى الحدّ الذي لا يُنبت معه نبات؛ غيرُ مُنتجٍ وموحش.',
  },
  {
    word: 'intimate',
    definition:
      'Close and personal; here describing a deep knowledge of the land and its creatures.',
    definitionAr: 'قريبٌ شخصيّ؛ ويُوصف به هنا فهمٌ عميق للأرض ومخلوقاتها.',
  },
  {
    word: 'subsistence',
    definition:
      'The action of maintaining oneself at a minimum level; living off what you can hunt or grow.',
    definitionAr:
      'فعلُ الإبقاء على الذات في حدٍّ أدنى؛ العيشُ ممّا يستطيع المرءُ صيدَه أو زراعتَه.',
  },
]

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = "The Explorer's Daughter"

/**
 * CHANGED 26 September 2026 to match the paper. This page used to set a
 * "Retrieval - 4 marks" question ("List four things you learn about the narwhal
 * hunt"), a language-only question and a structure-only question, each "12
 * marks". 4EA1 Paper 1 asks none of them. In every Pearson document checked (the
 * 2016 SAMs, the 2017 extra assessment materials, papers P65890A and P65891RA of
 * 2021, the June 2023, November 2023, May 2024 and November 2024 papers, the
 * November 2023, June 2024, June 2025 and Summer 2026 mark schemes, and the June
 * 2019 and June 2025 examiners' reports), Q1 to Q3 are short answers on Text
 * One, the unseen extract. The anthology text is Text Two, and the only question
 * on it alone is Q4: language and structure together, on the whole extract, one
 * 12-mark AO2 grid. Q5 (22 marks) compares it with the unseen text, never with
 * another anthology text. The retrieval question was also sent to Q2, a Text One
 * question, so it was marked as the wrong question.
 *
 * The labels are what questionIdForPracticeType maps: "12 marks" goes to Q4 and
 * "22 marks" to nothing, so q3 carries no marking button and says why. Pass the
 * English `type` to the button even in Arabic: until this change the page passed
 * typeAr, whose Arabic numerals the button could not then read, and every button
 * vanished on the Arabic page.
 *
 * Checked against the extract the same day. q3's subject is survival, not
 * tradition: Herbert argues from necessity and never calls the hunt a tradition.
 * Two outline points were also wrong. The first gave her sympathy to the narwhal
 * alone and cited first-person interjections the extract does not have; her
 * sympathy goes to hunter and narwhal both. The third made nature a powerful
 * agent; the personification the verified study guide finds is of the light in
 * the opening, which is playful and deceptive, not powerful.
 */
const examPractice = {
  q1: {
    question:
      'How does the writer, Kari Herbert, use language and structure to move from observation to reflection? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستعمل الكاتبة، Kari Herbert، اللغةَ والبنيةَ للانتقال من المراقبة إلى التأمّل؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, Kari Herbert, use language and structure to present her conflicted feelings about the hunt? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستعمل الكاتبة، Kari Herbert، اللغةَ والبنيةَ لتُقدّم مشاعرها المتنازعة تجاه الصيد؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
    modelOutline: [
      "Identify Herbert's emotive verbs and first-person voice at the climax, which reveal her instinctive sympathy for the man and the whales alike, and explain how these draw the reader into her internal conflict.",
      "Analyse contrasting pairs (beauty / danger, admiration / unease) that mirror Herbert's own dual response to the Arctic and the hunt.",
      'Examine the personification of the light in the opening paragraph, a playful trickster that makes distances deceptive and leaves Herbert unsure whether the narwhal are real, so the extract begins in wonder and uncertainty before the hunt comes into focus.',
      'Track the shift to practical, list-based language towards the end of the extract, which reframes the hunt in terms of survival rather than sentiment and complicates any easy moral judgement.',
      'Comment on structure at the climax: the extract stops the action as the hunter raises his harpoon, turns to her divided response and then to a new paragraph in which she names her dilemma, and never shows whether the hunt succeeds, so her feelings are left unresolved even as the final paragraph argues that hunting is necessary.',
    ],
    modelOutlineAr: [
      'حدّد استعمال Herbert للأفعال الانفعاليّة ولصوت المتكلّم عند الذروة، التي تكشف عن تعاطفها الغريزيّ مع الصيّاد والـ narwhal معاً، واشرح كيف تُدخل القارئَ في صراعها الداخليّ.',
      'حلِّل الأزواج المتضادّة (الجمال / الخطر، الإعجاب / القلق) التي تعكس استجابةَ Herbert الثنائيّةَ للقطب الشماليّ ولمشهد الصيد.',
      'افحص تشخيصَ الضوء في الفقرة الأولى بوصفه مخادعاً لعوباً يُضلّل العينَ في تقدير المسافات، ويترك Herbert غيرَ واثقةٍ من أنّ الـ narwhal حقيقيّة، فيبدأ المقتطفُ بالدهشة والشكّ قبل أن يتّضح مشهدُ الصيد.',
      'تتبّع الانتقال إلى لغةٍ عمليّة قائمة على التَّعداد قرب نهاية المقتطف، التي تُعيد تأطير الصيد بمنطق النجاة لا العاطفة، وتُعقّد أيَّ حُكمٍ أخلاقيّ سهل.',
      'علّق على البنية عند الذروة: يوقف المقتطفُ الحدثَ لحظةَ يرفع الصيّادُ حربتَه، فينتقل إلى استجابتها المنقسمة ثمّ إلى فقرةٍ جديدة تُسمّي فيها معضلتَها، ولا يكشف أبداً إن نجح الصيد، فتبقى مشاعرها بلا حسم حتّى وهي تُحاجّ في الفقرة الأخيرة بأنّ الصيد ضرورة.',
    ],
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about hunting and survival.',
    questionAr:
      'في الامتحان، يطلب منك السؤال الخامس أن تقارن هذا المقتطف بنصٍّ غير مرئيّ. تدرّب بأيّ نصٍّ في موضوعٍ مشابه: قارن كيف يعرض الكاتبان أفكارهما ووجهات نظرهما عن الصيد والنجاة.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
  },
}

const comparisonLinks = [
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both writers observe unfamiliar cultural traditions as outsiders. Compare how each writer balances observation with personal response, and how their attitudes to the events they witness shape their language.',
    reasonAr:
      'تشاهد الكاتبتان تراثاً ثقافيّاً مجهولاً بوصفهما غريبتَين. قارن كيف توازن كلٌّ منهما بين المراقبة والاستجابة الشخصيّة، وكيف يُشكّل موقفهما من الحدث الذي تشهدانه لغتهما.',
    themes: ['Cultural observation', 'Outsider perspective', 'Tradition'],
    themesAr: ['الرصد الثقافيّ', 'منظور الغريب', 'التراث'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      "Both texts describe remote, beautiful landscapes and the writers' emotional responses to unfamiliar environments. Compare the use of sensory language and imagery in each text.",
    reasonAr:
      'يصف النصّان مناظرَ نائيةً جميلةً واستجابةَ الكاتبتَين العاطفيّة لبيئاتٍ مجهولة. قارن استعمالَ اللغة الحسّيّة والصور في كلّ نصّ.',
    themes: ['Landscape', 'Culture shock', 'Beauty in harshness'],
    themesAr: ['المنظر', 'الصدمة الثقافيّة', 'الجمال في القسوة'],
  },
  {
    title: 'H is for Hawk',
    author: 'Helen Macdonald',
    href: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
    reason:
      "Both texts explore the relationship between humans and wild animals. Compare Herbert's conflicted view of hunting with Macdonald's intimate bond with her goshawk, and how each writer uses nature writing.",
    reasonAr:
      'يستكشف النصّان العلاقةَ بين الإنسان والحيوان البرّيّ. قارن رؤيةَ Herbert المتنازعة للصيد بصلة Macdonald الحميمة مع صقرها، وكيف توظّف كلٌّ منهما كتابةَ الطبيعة.',
    themes: ['Nature', 'Animals', 'Human-animal relationships'],
    themesAr: ['الطبيعة', 'الحيوانات', 'العلاقات بين الإنسان والحيوان'],
  },
]

export default async function TheExplorersDaughterPage() {
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
              The Explorer&apos;s Daughter
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Kari Herbert &middot; {ar ? 'سيرة رحليّة' : 'Travel memoir'}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                {await t('anth_text.badge_lang_a')}
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                {await t('anth_text.badge_paper_1a')}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-500/40 bg-amber-50/60 p-4 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-5 shrink-0 text-amber-700 dark:text-clay-600 mt-0.5" />
          <div className="text-body-sm text-foreground leading-relaxed">
            <p className="font-semibold">{await t('anth_text.rebuilt_label')}</p>
            <p className="mt-1 text-muted-foreground">
              {ar
                ? 'أُزيلت الاقتباسات الحرفيّة بانتظار مراجعةٍ موثّقة للمصادر الأوليّة. اقتبس دائماً من مختاراتك المرخّصة من Edexcel في إجابات الامتحان.'
                : 'Direct quotations have been removed pending verified primary-source review. Always cite from your licensed Edexcel anthology in exam answers.'}
            </p>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.key_extracts')}
          </h2>
        </div>
        <div className="rounded-xl border border-border/40 bg-card p-4 text-body-sm text-muted-foreground leading-relaxed">
          {ar ? (
            <p>
              <strong className="text-foreground">المقتطفات الموثَّقة قيد المراجعة.</strong> لا بدّ
              من اقتباس المقتطفات الخمسة في المختارات من نسخة Pearson المرخّصة (ISBN
              978-1-446-93108-0). تعليقاتنا البنائيّة والموضوعيّة صحيحة؛ وستُضاف المقاطع الموثّقة
              المحدّدة بمجرّد مراجعة النصّ الأوليّ.
            </p>
          ) : (
            <p>
              <strong className="text-foreground">Verified extracts pending content review.</strong>{' '}
              The 5 anthology extracts must be quoted from the licensed Pearson anthology (ISBN
              978-1-446-93108-0). Our structural and thematic commentary is correct; the specific
              verified passages will be added once primary-source text is reviewed.
            </p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.language_analysis')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.section.language_analysis.guidance_intro')}
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {ar ? f.techniqueAr : f.technique}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {ar ? f.guidanceAr : f.guidance}
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
        {/* Second sentence added 26 September 2026: the shared intro calls these
            pairings for the exam, but 4EA1 never pairs two anthology texts. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}{' '}
          {ar
            ? 'في الامتحان يُقارَن هذا النصّ دائماً بنصٍّ غير مرئيّ، لا بنصٍّ آخر من المختارات، لذا فهذه المقارنات للمراجعة.'
            : 'In the exam this text is always compared with an unseen passage, never another anthology text, so these pairings are for revision.'}
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
            Kari Herbert (مواليد 1970). © Kari Herbert 2004، يُعاد نشره في المختارات بإذنٍ من Aitken
            Alexander Associates Ltd. للحصول على النصّ الكامل، ارجع إلى Pearson Edexcel IGCSE
            anthology (ISBN 978-1-446-93108-0)، التي تنشرها Pearson مجّاناً.
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            {/* As the anthology's acknowledgements give it. Penguin (2006) is the
                edition, not the holder; until 26 September 2026 this read "Penguin on
                behalf of Kari Herbert". */}
            Kari Herbert (b. 1970). &copy; Kari Herbert 2004, reproduced in the anthology by
            permission of Aitken Alexander Associates Ltd. For the full text, use the Pearson
            Edexcel IGCSE anthology (ISBN 978-1-446-93108-0), which Pearson publishes free.
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
