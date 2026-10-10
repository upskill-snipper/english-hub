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
  // The title was cut off at the apostrophe ("The Explorer") in every field
  // below until 26 September 2026.
  openGraph: {
    title: "The Explorer's Daughter - Kari Herbert - IGCSE Anthology - The English Hub",
    description:
      "Study guide for The Explorer's Daughter by Kari Herbert. Structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.",
    images: [
      {
        url: '/api/og?title=The+Explorer%27s+Daughter+-+Kari+Herbert+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: "The Explorer's Daughter - Kari Herbert - IGCSE Anthology - The English Hub",
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

/**
 * CORRECTED 26 September 2026. The notes below, down to the comparison links,
 * were written before the verified study guide mounted under this page, and
 * described an imagined Arctic or the whole book rather than the extract. Each
 * claim was checked by script against the extract as the anthology prints it
 * (Issue 8, pages 6 and 7, 64 lines in seven paragraphs) and against the guide.
 * What was wrong, so that it is not written back in:
 *
 * - The extract never mentions cold or wind and does not personify the sea or
 *   the ice. The personification the guide analyses is of the light in the
 *   opening, which is playful, not dominant. Herbert names harshness once, in
 *   the last paragraph (the anthology's introduction also calls the
 *   environment harsh); the opening is wonder, not hostility.
 * - Its similes (the scene as a game on the water, the hunters as a net)
 *   describe the hunt, not the landscape. Its shortest sentences are plain
 *   statements and one question, not moments of realisation.
 * - The first sentence already names the hunters and the narwhal, so the
 *   opening is not landscape "before introducing any human characters".
 * - The evening is told in the past tense, not the present, and nothing in the
 *   extract looks back on Herbert's childhood: only the anthology's
 *   introduction mentions it, and it says she lived there as a small child,
 *   not that she grew up there.
 * - The two shortest paragraphs (lines 13 to 16 and 41 to 44) are
 *   informational; the reflective last paragraph is one of the three longest.
 * - At the climax her heart goes to hunter and narwhal both. The final
 *   paragraph settles the argument but not the feeling: she says the dilemma
 *   lasted her whole stay. She argues from necessity and never calls the hunt
 *   a tradition, ancient or sustainable; the extract dates the narwhal's uses
 *   to centuries, not millennia.
 *
 * Checked again on 10 October 2026. The personification note said the light
 * makes distances deceptive; the extract blames the Arctic for the distances
 * and gives the light only her doubt that the narwhal exist. (The q2 model
 * outline below still says so; it was not changed here.) Also corrected then:
 * a "second sighting" the extract never numbers, a net of hunters spread
 * across the water rather than around it, an argument for hunting said to
 * wait for the last paragraph (only the explicit one does), silence where the
 * extract says the hunters keep still, and two Arabic copies that said more
 * than the English.
 */
const languageFeatures = [
  {
    technique: 'Imagery (visual)',
    techniqueAr: 'الصورة البصريّة',
    guidance:
      'Look for visual imagery examples in the anthology extract - Herbert uses imagery of light and colour on the evening fjord to make the scene beautiful and slightly unreal: distances deceive, and at first she is unsure whether the narwhal are real.',
    guidanceAr:
      'ابحث عن أمثلة على الصورة البصريّة في مقتطف المختارات - تستعمل Herbert صورَ الضوء واللون على المضيق البحريّ في المساء لتجعل المشهدَ جميلاً وغيرَ حقيقيٍّ بعضَ الشيء: فالمسافات خادعة، وهي في البداية غيرُ واثقةٍ من أنّ الـ narwhal حقيقيّة.',
  },
  {
    technique: 'Personification',
    techniqueAr: 'التشخيص',
    guidance:
      'Look for personification examples in the anthology extract - Herbert personifies the light in the opening paragraph as a playful trickster: she wonders whether the narwhal are really there or only the light playing tricks on her, so the extract begins in wonder rather than threat.',
    guidanceAr:
      'ابحث عن أمثلة على التشخيص في مقتطف المختارات - تُشخّص Herbert الضوءَ في الفقرة الأولى مخادعاً لعوباً: فهي تتساءل إن كانت الـ narwhal موجودةً حقّاً أم أنّ الضوء يتلاعب بها، فيبدأ المقتطفُ بالدهشة لا بالتهديد.',
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
      'Look for emotive language examples in the anthology extract - Herbert uses emotive language at the climax to reveal her instinctive sympathy for both the hunter and the narwhal, and to draw the reader into her internal conflict.',
    guidanceAr:
      'ابحث عن أمثلة على اللغة الانفعاليّة في المقتطف - تستعمل Herbert اللغةَ الانفعاليّة عند الذروة لتكشف عن تعاطفها الغريزيّ مع الصيّاد والـ narwhal معاً، ولتُدخل القارئ في صراعها الداخليّ.',
  },
  {
    technique: 'Sensory language',
    techniqueAr: 'اللغة الحسّيّة',
    guidance:
      'Look for sensory language examples in the anthology extract - Herbert’s sensory language is mostly sight and sound: the evening light and colour on the water in the opening, and later how well the narwhal hear, which is why the hunters must keep so still. It places the reader beside her at the lookout, watching and waiting.',
    guidanceAr:
      'ابحث عن أمثلة على اللغة الحسّيّة في المقتطف - اللغة الحسّيّة عند Herbert بصريّةٌ وسمعيّةٌ في معظمها: ضوءُ المساء وألوانُه على الماء في الافتتاح، ثمّ حدّةُ سمع الـ narwhal، التي تفرض على الصيّادين أن يلزموا السكونَ التامّ. وتضع هذه اللغةُ القارئَ إلى جانبها في موضع المراقبة، يشاهد وينتظر.',
  },
  {
    technique: 'Simile',
    techniqueAr: 'التشبيه',
    guidance:
      'Look for simile examples in the anthology extract - Herbert’s similes describe the hunt, not the landscape: she compares the scene to a vast game played on water and the hunters to a net spread around it, which shows them working together and raises the tension before the climax.',
    guidanceAr:
      'ابحث عن أمثلة على التشبيه في المقتطف - تصف تشبيهاتُ Herbert مشهدَ الصيد لا المنظرَ الطبيعيّ: فهي تشبّه المشهدَ بلعبةٍ هائلةٍ تُلعب على الماء، وتشبّه الصيّادين بشبكةٍ منشورةٍ حوله، فتُظهر تعاونهم وتُصعّد التوتّر قبل الذروة.',
  },
  {
    technique: 'Semantic field',
    techniqueAr: 'الحقل الدلاليّ',
    guidance:
      'Look for semantic-field examples in the anthology extract - Herbert draws on coherent vocabulary sets: light and colour in the opening, food, vitamins and health in the information about the narwhal, and hunting throughout. The field of nourishment presents the narwhal as what keeps people alive, so the hunt reads as a need rather than a sport.',
    guidanceAr:
      'ابحث عن أمثلة على الحقل الدلاليّ في المقتطف - تستثمر Herbert مجموعاتٍ مفرداتيّةً متماسكة: الضوء واللون في الافتتاح، والطعام والفيتامينات والصحّة في المعلومات عن الـ narwhal، والصيد على امتداد النصّ. ويُقدّم حقلُ الغذاء الـ narwhal بوصفه ما يُبقي الناسَ أحياء، فيُقرأ الصيدُ حاجةً لا رياضة.',
  },
  {
    technique: 'Tone shift',
    techniqueAr: 'تبدّل النبرة',
    guidance:
      'Look for tone-shift examples in the anthology extract - Herbert’s tone moves from wonder in the opening, to the calm, factual voice of the information about the narwhal, to suspense as the women watch, to divided feeling at the climax and to firm argument at the end. The argument ends firmly, but she says the dilemma lasted her whole stay in Greenland.',
    guidanceAr:
      'ابحث عن أمثلة على تبدّل النبرة في المقتطف - تنتقل نبرة Herbert من الدهشة في الافتتاح، إلى الصوت الهادئ المعلوماتيّ في الحديث عن الـ narwhal، إلى الترقّب والنساءُ يراقبن، إلى المشاعر المنقسمة عند الذروة، ثمّ إلى الحُجّة الحازمة في الخاتمة. تنتهي الحُجّة بحزم، لكنّها تقول إنّ المعضلة لازمتها طوال إقامتها في غرينلاند.',
  },
  {
    technique: 'Short sentence for emphasis',
    techniqueAr: 'الجملة القصيرة للتوكيد',
    guidance:
      'Look for short-sentence examples in the anthology extract - Herbert’s shortest sentences are plain and direct. They say where the hunters are and that every one of them is out on the water; at the end they voice the critics’ question about eating seal and make her flat final statement that hunting is still a necessity in Thule. Against her long, detailed sentences they stand out and carry weight.',
    guidanceAr:
      'ابحث عن أمثلة على الجملة القصيرة في المقتطف - أقصرُ جمل Herbert بسيطةٌ مباشرة. فهي تحدّد مواقعَ الصيّادين وتقول إنّ كلّ واحدٍ منهم قد نزل إلى الماء؛ وفي الخاتمة تنقل سؤالَ المنتقدين عن أكل الفقمة وتُطلق عبارتَها الأخيرة الجازمة بأنّ الصيد لا يزال ضرورةً في Thule. وهي تبرز قبالةَ جملها الطويلة المفصّلة فتكتسب ثقلاً.',
  },
  {
    technique: 'Listing',
    techniqueAr: 'التَّعداد',
    guidance:
      'Look for listing examples in the anthology extract - Herbert’s lists of what the narwhal provides (lines 17 to 32) set out what a catch is worth before the climax, and the facts in the final paragraph, about how the Inughuit hunt and how imports can meet only part of their need, ground her conclusion in practical necessity. Not every list is rational: the tricolon at the climax is a plea for the whales.',
    guidanceAr:
      'ابحث عن أمثلة على التَّعداد في المقتطف - تعدّد Herbert ما يقدّمه الـ narwhal (الأسطر ١٧ إلى ٣٢) فتبيّن قيمةَ الصيدة قبل الذروة، ثمّ تُرسي الحقائقُ في الفقرة الأخيرة، عن طريقة صيد الـ Inughuit وعن أنّ الواردات لا تسدّ إلّا جزءاً من حاجتهم، خلاصتَها على ضرورةٍ عمليّة. وليس كلّ تعدادٍ عقلانيّاً: فالتعدادُ الثلاثيّ عند الذروة رجاءٌ من أجل الحيتان.',
  },
]

const structuralAnalysis = {
  opening:
    'The extract opens on the hunt, not on empty landscape: its first sentence names the hunters, who had come back two hours before, and the narwhal, sighted again. Herbert then climbs to the lookout and describes the fjord in golden evening light, where distances deceive and she is unsure whether the whales are real.',
  openingAr:
    'يفتتح المقتطفُ على مشهد الصيد لا على منظرٍ خالٍ: فجملته الأولى تذكر الصيّادين، الذين عادوا قبل ساعتين، والـ narwhal وقد شوهدت من جديد. ثمّ تصعد Herbert إلى موضع المراقبة وتصف المضيقَ البحريّ في ضوء المساء الذهبيّ، حيث المسافاتُ خادعة، وهي غيرُ واثقةٍ من أنّ الحيتان حقيقيّة.',
  development:
    'The narrative then pauses for two paragraphs of information (lines 13 to 32): where narwhal live, and what they have given the hunters, from vitamins, light and heat to meat and ivory for tools. It returns to the scene as the women on the lookout follow their husbands through binoculars and every hunter goes out on the water, then pauses once more (lines 41 to 44) to explain why the hunters must keep so still. The pauses delay the climax and tell the reader what a catch is worth.',
  developmentAr:
    'ثمّ يتوقّف السردُ عند فقرتين من المعلومات (الأسطر ١٣ إلى ٣٢): أين تعيش الـ narwhal، وماذا قدّمت للصيّادين، من الفيتامينات والضوء والدفء إلى اللحم والعاج للأدوات. ويعود إلى المشهد والنساءُ في موضع المراقبة يتابعن أزواجهنّ بالمناظير وقد نزل كلّ الصيّادين إلى الماء، ثمّ يتوقّف مرّةً أخرى (الأسطر ٤١ إلى ٤٤) ليشرح لماذا يجب أن يلزم الصيّادون السكونَ التامّ. وتؤخّر هذه الوقفاتُ الذروةَ وتُعرّف القارئَ بقيمة الصيدة.',
  climax:
    'The climax (lines 45 to 51) comes when one hunter, in a kayak with a harpoon and no rifle, takes aim at two huge narwhal. Herbert’s heart goes out to both: she urges the man on and admires his courage, since he could be overturned and drowned, then in the same breath wills the whales to escape. The conflict is between two lives at risk; her explicit argument that hunting is necessary comes only in the final paragraph.',
  climaxAr:
    'تأتي الذروة (الأسطر ٤٥ إلى ٥١) حين يُسدّد صيّادٌ في قارب kayak، بحربةٍ ومن دون بندقيّة، نحو اثنتين ضخمتين من الـ narwhal. فيخفق قلبُ Herbert للاثنين معاً: تحثّ الرجلَ على المضيّ وتُعجب بشجاعته، إذ قد ينقلب قاربُه فيغرق، ثمّ تتمنّى في اللحظة ذاتها أن تنجو الحيتان. فالصراعُ هنا بين حياتَين مُعرّضتَين للخطر؛ أمّا حُجّتها الصريحة بأنّ الصيد ضرورة فلا تأتي إلّا في الفقرة الأخيرة.',
  resolution:
    'The feeling is not resolved. The final paragraph (lines 52 to 64) names it a dilemma that lasted her whole stay in Greenland, then turns to argument: it answers the question critics ask about eating seal and ends on the flat statement that hunting is still a necessity in Thule. The argument is settled; the dilemma is not, and the extract never says whether the harpoon struck.',
  resolutionAr:
    'لا تُحسم المشاعر. فالفقرة الأخيرة (الأسطر ٥٢ إلى ٦٤) تُسمّيها معضلةً لازمتها طوال إقامتها في غرينلاند، ثمّ تنتقل إلى الحُجّة: تُجيب عن السؤال الذي يطرحه المنتقدون عن أكل الفقمة، وتنتهي بعبارةٍ جازمة بأنّ الصيد لا يزال ضرورةً في Thule. تُحسم الحُجّة ولا تُحسم المعضلة، ولا يقول المقتطف أبداً إن أصابت الحربة.',
  perspective:
    'First person, with Herbert placed between insider and outsider. The anthology’s introduction says she lived among the Inughuit as a small child, so she is no tourist; but she watches from the lookout with the women rather than from a kayak, and in the final paragraph she counts herself among the people who want sea mammals protected for their beauty, before answering them with facts about how the Inughuit live and hunt. This double position creates the text’s central tension.',
  perspectiveAr:
    'ضمير المتكلّم، مع تموضع Herbert بين ابنة البلاد والغريبة. تذكر مقدّمةُ المختارات أنّها عاشت بين الـ Inughuit طفلةً صغيرة، فليست سائحة؛ لكنّها تراقب من موضع المراقبة مع النساء لا من قاربٍ في الماء، وفي الفقرة الأخيرة تعدّ نفسها بين من يريدون حمايةَ الثدييات البحريّة لجمالها، قبل أن تردّ عليهم بحقائق عن حياة الـ Inughuit وطريقة صيدهم. وهذا الموقعُ المزدوج يُولّد التوتّرَ المركزيَّ في النصّ.',
  paragraphing:
    'Seven paragraphs of very different lengths. The three longest are the descriptive opening (lines 1 to 12), the information about what the narwhal provides (lines 17 to 32) and the final argument (lines 52 to 64). The two shortest (lines 13 to 16 and 41 to 44) are informational pauses, not reflections. The climax is a single paragraph, and the break after it moves straight to her dilemma without showing what the harpoon did.',
  paragraphingAr:
    'سبعُ فقراتٍ متفاوتةِ الطول تفاوتاً كبيراً. أطولُها ثلاث: الافتتاح الوصفيّ (الأسطر ١ إلى ١٢)، والمعلومات عمّا تقدّمه الـ narwhal (الأسطر ١٧ إلى ٣٢)، والحُجّة الختاميّة (الأسطر ٥٢ إلى ٦٤). وأقصرُها اثنتان (الأسطر ١٣ إلى ١٦ و٤١ إلى ٤٤)، وهما وقفتان معلوماتيّتان لا تأمّليّتان. والذروةُ فقرةٌ واحدة، والانتقالُ بعدها يمضي مباشرةً إلى معضلتها من دون أن يُبيّن ما فعلته الحربة.',
  time: 'The evening is narrated in the past tense, from the moment the whales are sighted again until the hunter takes aim. The information about the narwhal (lines 13 to 32 and 41 to 43) and the closing argument (lines 52 to 64) are mostly in the present, which makes them sound like permanent facts rather than one visitor’s impressions. The extract does not look back on Herbert’s childhood; only the anthology’s introduction mentions it.',
  timeAr:
    'يُروى المساءُ بصيغة الماضي، من رؤية الـ narwhal من جديد إلى تسديد الصيّاد. أمّا المعلومات عن الـ narwhal (الأسطر ١٣ إلى ٣٢ و٤١ إلى ٤٣) والحُجّة الختاميّة (الأسطر ٥٢ إلى ٦٤) فمعظمها بصيغة المضارع، فتبدو حقائقَ دائمةً لا انطباعاتِ زائرةٍ عابرة. ولا يعود المقتطفُ إلى طفولة Herbert؛ فمقدّمة المختارات وحدها تذكرها.',
  openingClosing:
    'The opening presents the Arctic as beautiful and hard to read: golden light, deceptive distances, whales that may not be real. Herbert names its harshness only in the final paragraph, which reframes the hunt as survival and ends on the claim that hunting is still a necessity in Thule. The arc moves from wonder to argument, from watching to explaining.',
  openingClosingAr:
    'يُقدّم الافتتاحُ القطبَ الشماليَّ جميلاً عصيّاً على القراءة: ضوءٌ ذهبيّ، ومسافاتٌ خادعة، وحيتانٌ قد لا تكون حقيقيّة. ولا تُسمّي Herbert قسوتَه إلّا في الفقرة الأخيرة، التي تُعيد تأطيرَ الصيد بوصفه نجاةً وتنتهي بأنّ الصيد لا يزال ضرورةً في Thule. وقوسُ النصّ ينتقل من الدهشة إلى الحُجّة، ومن المشاهدة إلى الشرح.',
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
    'Her central argument is that hunting is still a necessity in Thule, and must be judged in the context of Arctic life. She concedes that images of seals being beaten for their fur have not helped the case for polar hunting, then answers with facts: the Inughuit neither kill that way nor hunt for sport, they waste nothing of what they catch, and imports can meet only part of their need, since a single supply ship reaches Qaanaaq each year and a small plane comes twice a week from West Greenland.',
  messageAr:
    'حُجّتها المركزيّة أنّ الصيد لا يزال ضرورةً في Thule، وأنّه لا بدّ أن يُحكم عليه في سياق الحياة في القطب الشماليّ. فهي تُقرّ بأنّ صور الفقمات التي تُضرب من أجل فرائها لم تخدم قضيّةَ الصيد القطبيّ، ثمّ تردّ بالحقائق: فالـ Inughuit لا يقتلون بتلك الطريقة ولا للرياضة، ولا يُهدرون شيئاً ممّا يصطادون، والواردات لا تسدّ إلّا جزءاً من حاجتهم، إذ لا تبلغ Qaanaaq إلّا سفينةُ إمدادٍ واحدة في السنة، وتأتي طائرةٌ صغيرة مرّتين في الأسبوع من غرب غرينلاند.',
}

/**
 * Only words the extract uses. Until 26 September 2026 this list also held
 * pitiless, incomparable, poised, sustain, tradition, barren, intimate and
 * subsistence, none of which appears in the extract; "intimate" was defined as
 * it is used "here". Tradition and barren were worse than absent: Herbert
 * never calls the hunt a tradition, and never describes the land as barren.
 */
const keyVocabulary = [
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
    word: 'necessity',
    definition: 'The state of being required or unavoidable; something essential.',
    definitionAr: 'حالُ ما هو مطلوبٌ أو لا مفرّ منه؛ شيءٌ ضروريّ.',
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

/**
 * Reasons corrected 26 September 2026 against the four extracts. Herbert is
 * not a stranger to the Arctic (she lived there as a small child), does not
 * call the hunt a tradition and shows no culture shock; Zeppa's extract never
 * calls Bhutan harsh; and Macdonald's is her first meeting with the hawks,
 * before any bond or training.
 */
const comparisonLinks = [
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both writers watch a contest involving animals from the sidelines: Herbert from a lookout above the fjord, Levine from the open boot of a car at a donkey-cart race in Karachi. Compare how each writer balances observation with personal response, and how their attitudes to the events they witness shape their language.',
    reasonAr:
      'تشاهد الكاتبتان من خارج الحدث منافسةً تشارك فيها حيوانات: Herbert من موضع مراقبةٍ فوق المضيق البحريّ، وLevine من صندوق سيّارةٍ مفتوح في سباقٍ لعربات الحمير في كراتشي. قارن كيف توازن كلٌّ منهما بين المراقبة والاستجابة الشخصيّة، وكيف يُشكّل موقفهما من الحدث الذي تشهدانه لغتهما.',
    themes: ['Cultural observation', 'Watching from the sidelines', 'Animals'],
    themesAr: ['الرصد الثقافيّ', 'المشاهدة من خارج الحدث', 'الحيوانات'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      "Both texts describe remote, beautiful places and the writers' responses to them: Zeppa arriving in Bhutan for the first time, Herbert returning to the Arctic where she lived as a small child. Compare the use of sensory language and imagery in each text, and how far each writer sees the place as an outsider.",
    reasonAr:
      'يصف النصّان أماكنَ نائيةً جميلةً واستجابةَ الكاتبتَين لها: Zeppa تصل إلى بوتان أوّلَ مرّة، وHerbert تعود إلى القطب الشماليّ حيث عاشت طفلةً صغيرة. قارن استعمالَ اللغة الحسّيّة والصور في كلّ نصّ، وإلى أيّ حدٍّ ترى كلٌّ منهما المكانَ بعين الغريب.',
    themes: ['Landscape', 'Imagery', 'Outsider and insider'],
    themesAr: ['المنظر', 'الصور', 'الغريب وابن البلاد'],
  },
  {
    title: 'H is for Hawk',
    author: 'Helen Macdonald',
    href: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
    reason:
      "Both texts explore the relationship between humans and wild animals. Compare Herbert's divided feelings as she watches the hunt from the shore with Macdonald's overwhelmed response when she first meets the two hawks on the quayside, and how each writer describes a wild animal.",
    reasonAr:
      'يستكشف النصّان العلاقةَ بين الإنسان والحيوان البرّيّ. قارن مشاعرَ Herbert المنقسمة وهي تراقب الصيد من الشاطئ باستجابة Macdonald الجارفة حين تلتقي الصقرَين أوّلَ مرّة على رصيف الميناء، وكيف تصف كلٌّ منهما حيواناً برّيّاً.',
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
            {/* Until 26 September 2026 this said quotations were pending review and
                told students to cite their "licensed" anthology in the exam. The
                verified guide below now quotes the extract; the anthology is free;
                and the exam prints the extract in the Source Booklet, since the
                anthology may not be taken in. */}
            <p className="mt-1 text-muted-foreground">
              {ar
                ? 'لا تتضمّن ملاحظات هذه الصفحة اقتباسات. أمّا دليل الدراسة أدناه فيقتبس من المقتطف مع أرقام الأسطر كما في المختارات (الإصدار ٨، الصفحتان ٦ و٧). وفي الامتحان يُطبع المقتطف لك في كتيّب المصادر (Source Booklet): اقتبس منه.'
                : 'This page’s own notes carry no quotations. The study guide below quotes the extract, with line numbers from the anthology (Issue 8, pages 6 and 7). In the exam the extract is printed for you in the Source Booklet: quote from that.'}
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
          {/* Until 26 September 2026 this promised verified passages "once
              primary-source text is reviewed" and certified the commentary above
              as correct, while that commentary set the hunt in the present tense
              and gave Herbert childhood reflections the extract does not have. */}
          {ar ? (
            <p>
              <strong className="text-foreground">
                المقتطفات المفتاحيّة في دليل الدراسة أدناه.
              </strong>{' '}
              نُقلت اقتباساته المفتاحيّة ومقاطعه الثلاثة للقراءة المتأنّية من مختارات Pearson
              (الإصدار ٨، ISBN 978-1-446-93108-0)، الصفحتين ٦ و٧، وتتبع أرقامَ الأسطر في المختارات.
            </p>
          ) : (
            <p>
              <strong className="text-foreground">
                Key extracts are in the study guide below.
              </strong>{' '}
              Its key quotations and three passages for close reading were copied from the Pearson
              anthology (Issue 8, ISBN 978-1-446-93108-0), pages 6 and 7, and use the
              anthology&apos;s line numbers.
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
