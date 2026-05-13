import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  GitCompare,
  GraduationCap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title:
    'A Game of Polo with a Headless Goat — Emma Levine — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for the anthology extract from A Game of Polo with a Headless Goat by Emma Levine. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
  },
}

const themes = [
  {
    label: 'Cultural spectacle',
    labelAr: 'المشهد الثقافيّ',
    detail:
      'Levine recounts witnessing buzkashi, a traditional Central Asian equestrian sport whose intensity both unsettles and fascinates an outsider observer.',
    detailAr:
      'تروي Levine مشاهدتها للـ buzkashi، وهي رياضة فروسيّة تقليديّة في وسط آسيا، تثير حدّتُها في المراقب الأجنبيّ القلقَ والافتتانَ في آنٍ معاً.',
  },
  {
    label: 'Outsider perspective',
    labelAr: 'منظور الغريب',
    detail:
      "A travel writer's gaze — at once curious, anxious and admiring — frames the entire piece. Levine is honest about her position as a visitor and does not pretend to insider authority.",
    detailAr:
      'تؤطّر العملَ كلَّه نظرةُ كاتبة الرحلات، وهي نظرةٌ فضوليّة قلقة معجبة في آنٍ معاً. وتكون Levine صريحةً بشأن موقعها زائرةً، ولا تدّعي سلطةَ ابن البلد.',
  },
  {
    label: 'Tradition and continuity',
    labelAr: 'التراث والاستمراريّة',
    detail:
      'The sport she witnesses connects modern players to centuries of regional practice. Tradition is presented as living, not preserved behind glass.',
    detailAr:
      'تربط الرياضةُ التي تشاهدها اللاعبين المعاصرين بقرونٍ من الممارسة الإقليميّة. ويُقدَّم التراث بوصفه حيّاً، لا محفوظاً خلف زجاج.',
  },
  {
    label: 'Sensory overload',
    labelAr: 'فيض الحواسّ',
    detail:
      "Levine's prose tracks the sensory press of the event — dust, noise, horses, crowds — building a pulse of controlled chaos that the reader has to absorb in real time.",
    detailAr:
      'يلاحق نثرُ Levine الكثافةَ الحسيّة للحدث — الغبارُ والضجيجُ والخيلُ والجموع — فيُولّد نبضاً من فوضى منضبطة يضطرّ القارئ إلى استيعابها لحظةً بلحظة.',
  },
  {
    label: 'Cross-cultural understanding',
    labelAr: 'التفاهم بين الثقافات',
    detail:
      'The text invites readers to suspend judgement of an unfamiliar custom and to attempt to see it on its own cultural terms rather than through a Western sporting lens.',
    detailAr:
      'يدعو النصُّ القرّاءَ إلى تعليق الحكم على عادةٍ مجهولة، وإلى محاولة رؤيتها بمصطلحاتها الثقافيّة الخاصّة، لا من خلال عدسةٍ رياضيّة غربيّة.',
  },
]

const extractFocuses = [
  {
    id: 1,
    label: 'Approach and arrival',
    labelAr: 'الاقتراب والوصول',
    focus: "Establishing the location and the writer's position within it",
    focusAr: 'تثبيت المكان وموقع الكاتبة داخله',
    context:
      'Levine sets the scene as a traveller arriving at an event she does not yet fully understand. The framing positions the reader alongside her as a fellow newcomer rather than as someone being given an authoritative explanation.',
    contextAr:
      'تُهيّئ Levine المشهد كمسافرةٍ تصل إلى حدثٍ لا تستوعبه بَعد كلَّ الاستيعاب. ويضع التأطيرُ القارئَ إلى جانبها وافداً جديداً مثلها، لا متلقّياً لشرحٍ موثوقٍ من خبير.',
  },
  {
    id: 2,
    label: 'Naming the sport',
    labelAr: 'تسمية الرياضة',
    focus: 'Introducing buzkashi and its literal meaning',
    focusAr: 'تقديم الـ buzkashi ومعناها الحرفيّ',
    context:
      'The text foregrounds the sport\'s name and its translation as "goat-grabbing". The choice to translate rather than soften the term is part of Levine\'s strategy of presenting the spectacle without sanitising it.',
    contextAr:
      'يُبرز النصُّ اسمَ الرياضة وترجمتَها بـ"goat-grabbing". ويأتي اختيارُ الترجمة الحرفيّة، لا التلطيف، جزءاً من استراتيجيّة Levine في عرض المشهد دون تنميقٍ يُذهب طبيعتَه.',
  },
  {
    id: 3,
    label: 'The action of the game',
    labelAr: 'حركة اللعبة',
    focus: 'Horses, riders and the press of the crowd',
    focusAr: 'الخيلُ والفرسانُ وضغطُ الجمهور',
    context:
      'Levine builds the description of play through movement, sound and shifting points of view. The prose becomes more kinetic at the centre of the extract, mirroring the physical intensity of what she is watching.',
    contextAr:
      'تبني Levine وصفَ اللعب من خلال الحركة والصوت وتبدُّل وجهات النظر. ويصير النثر أشدَّ ديناميّةً في وسط المقتطف، عاكساً الكثافةَ الجسديّة لما تشاهده.',
  },
  {
    id: 4,
    label: 'A near-miss with the crowd',
    labelAr: 'اقتراب الخطر من الجمهور',
    focus: 'The collision between spectators and the field of play',
    focusAr: 'تداخُل المتفرّجين وملعب اللعب',
    context:
      'A moment in which the boundary between audience and event collapses. The writer foregrounds her own physical presence and slight panic, which keeps the description honest about being an outsider in an unpredictable space.',
    contextAr:
      'لحظةٌ ينهار فيها الحدُّ بين الجمهور والحدث. تُبرز الكاتبة حضورَها الجسديَّ وانفعالَها الطفيف، فيظلّ الوصفُ صادقاً في كونها غريبةً وسط فضاءٍ لا يمكن التنبّؤ به.',
  },
  {
    id: 5,
    label: 'Reflection',
    labelAr: 'التأمّل',
    focus: 'Standing back from the spectacle',
    focusAr: 'الابتعاد عن المشهد',
    context:
      'The closing movement of the extract steps back from immediate description and considers what has been witnessed. Levine resists turning the experience into a tidy lesson, leaving the reader with awe rather than judgement.',
    contextAr:
      'تتراجع الحركةُ الختاميّة في المقتطف عن الوصف المباشر، وتُمعن النظر فيما شُوهد. وتُقاوم Levine إغراءَ تحويل التجربة إلى عِبرةٍ مرتّبة، فتترك القارئ مع رهبةٍ لا مع حكم.',
  },
]

const languageFeatures = [
  {
    technique: 'First-person travel narration',
    techniqueAr: 'السرد الرحليّ بضمير المتكلّم',
    explanation:
      'Levine writes from a clearly marked first-person "I", foregrounding her own perspective as a visitor. The reader is invited to share the position of an outsider trying to make sense of an unfamiliar event, rather than being given an authoritative third-person account.',
    explanationAr:
      'تكتب Levine بضمير المتكلّم "I" بصورةٍ واضحة، فتُبرز منظورَها زائرةً. ويُدعى القارئُ ليشاركها موقعَ الغريب الذي يحاول فهم حدثٍ مجهول، لا أن يتلقّى سرداً موثوقاً بضمير الغائب.',
  },
  {
    technique: 'Sensory description',
    techniqueAr: 'الوصف الحسيّ',
    explanation:
      'Sight, sound, smell and texture are layered through the extract: dust, hooves, voices, horses pressing close. The accumulation of sensory detail produces immersion and forces the reader to feel the event as physically present rather than safely distant.',
    explanationAr:
      'تتشابك حواسُّ البصر والسمع والشمّ واللمس في المقتطف: غبارٌ، حوافرُ، أصواتٌ، خيلٌ تقترب بشدّة. ويُنتج تراكمُ التفاصيل الحسيّة انغماساً يُجبر القارئ على عيش الحدث حضوراً جسديّاً، لا مراقبةً من بُعدٍ آمن.',
  },
  {
    technique: 'Cultural specificity',
    techniqueAr: 'الخصوصيّة الثقافيّة',
    explanation:
      'Levine names the sport in its original language and translates it precisely rather than substituting a Western analogue. The decision to keep the term "buzkashi" visible is itself a rhetorical choice: it asks the reader to accept the practice on its own terms.',
    explanationAr:
      'تُسمّي Levine الرياضةَ بلغتها الأصليّة وتترجمها بدقّة، بدل أن تُحلّ محلَّها مرادفاً غربيّاً. والإبقاءُ على لفظة "buzkashi" ظاهرةً اختيارٌ بلاغيّ بحدّ ذاته: يطلب من القارئ قبولَ الممارسة بمصطلحاتها الخاصّة.',
  },
  {
    technique: 'Pacing through sentence length',
    techniqueAr: 'ضبط الإيقاع بطول الجملة',
    explanation:
      'Sentences expand as the description widens out and contract as the action intensifies. The shifting rhythm tracks the changing tempo of the event and gives the prose a controlled sense of crowd, motion and pause.',
    explanationAr:
      'تتّسع الجملُ حين يتّسع الوصف، وتتقلّص حين يشتدّ الحدث. ويلاحق الإيقاعُ المتبدّل تَغيُّرَ نبض الحدث، ويُكسب النثرَ إحساساً مضبوطاً بالجمع والحركة والوقفة.',
  },
  {
    technique: 'Honest self-positioning',
    techniqueAr: 'تموضع الذات بصدق',
    explanation:
      'Levine does not pretend to expertise she does not have. She admits to confusion, anxiety and the limits of her viewpoint. The honesty is a rhetorical strategy: it earns trust and prevents the writing from sliding into condescension.',
    explanationAr:
      'لا تدّعي Levine خبرةً لا تملكها. تعترف بالحَيرة والقلق وحدود رؤيتها. والصدق هنا استراتيجيّةٌ بلاغيّة: يكسب الثقةَ ويمنع الكتابةَ من الانزلاق إلى الاستعلاء.',
  },
  {
    technique: 'Restraint from judgement',
    techniqueAr: 'الإمساك عن الحُكم',
    explanation:
      'The text resists the temptation to label the sport as either picturesque or barbaric. Levine describes; she does not editorialise. The restraint is itself the argument — meaning is left for the reader to construct rather than handed down.',
    explanationAr:
      'يقاوم النصُّ إغراءَ وَسْم الرياضة بأنّها خلّابة أو همجيّة. تصف Levine ولا تُعلّق. والإمساكُ نفسه هو الحُجّة — يُترك للقارئ بناءُ المعنى لا تَلقّيه جاهزاً.',
  },
  {
    technique: 'Embedded dialogue and voices',
    techniqueAr: 'الأصوات والحوار المتضمَّن',
    explanation:
      "Voices from the event — players, organisers, fellow spectators — surface through the description. Their presence reminds the reader that this is a living social occasion, not a tableau staged for tourists, and complicates Levine's outsider gaze.",
    explanationAr:
      'تَبرز أصواتٌ من الحدث — لاعبون ومنظّمون ومتفرّجون آخرون — خلال الوصف. وحضورُها يذكّر القارئ بأنّ هذه مناسبةٌ اجتماعيّة حيّة، لا مشهدٌ مُهيّأ للسيّاح، ويُعقّد نظرةَ Levine بصفتها غريبة.',
  },
  {
    technique: "Movement of the writer's body",
    techniqueAr: 'حركة جسد الكاتبة',
    explanation:
      'Levine repeatedly foregrounds where she is standing, what she can see from there, and when she has to move. Tracking her physical position keeps the writing accountable to a specific point of view rather than claiming an omniscient overview.',
    explanationAr:
      'تُبرز Levine مراراً موضعَ وقوفها، وما تراه من هناك، وحين تضطرّ إلى التحرّك. وتعقّبُ موقعها الجسديّ يجعل الكتابة مسؤولةً عن وجهة نظرٍ محدّدة، بدلاً من ادّعاء نظرةٍ كلّيّة عُلويّة.',
  },
]

const structuralAnalysis = {
  opening:
    "Levine opens by placing the reader in the location and signalling that something unusual is about to happen. The framing is a traveller's framing — the reader joins her as a fellow newcomer rather than receiving a finished explanation.",
  openingAr:
    'تستهلّ Levine بوضع القارئ في المكان، وبالإشارة إلى أنّ حدثاً غير اعتياديّ على وشك الوقوع. والتأطيرُ هنا تأطيرُ مسافر — ينضمّ القارئ إليها وافداً جديداً مثلها، لا متلقّياً لشرحٍ منجَز.',
  development:
    "The extract moves through arrival, anticipation, the spectacle itself and the reflection afterwards. The arc is from outside observation to felt experience, with the reader's sense of the event deepening as Levine's own does.",
  developmentAr:
    'يمرّ المقتطفُ بمراحلِ الوصول والترقّب والمشهدِ نفسه ثمّ التأمّل بعده. والقوس ينتقل من المراقبة الخارجيّة إلى التجربة المعيشة، ويتعمّق إدراكُ القارئ للحدث بالتوازي مع تعمّق إدراك Levine.',
  climax:
    "The climax is the chaotic peak of the game, where sound, motion and danger reach their highest intensity and Levine's prose becomes most kinetic. The boundary between observer and event briefly dissolves.",
  climaxAr:
    'الذروةُ هي الذروةُ الفوضويّة للعبة، حيث يبلغ الصوتُ والحركةُ والخطرُ أقصى كثافتهم، ويبلغ نثرُ Levine أقصى ديناميّته. وينحلّ الحدُّ بين المراقب والحدث للحظات قصيرة.',
  resolution:
    'The resolution leaves the reader with awe rather than verdict. Levine declines to editorialise; she lets the experience stand and trusts the reader to form a response.',
  resolutionAr:
    'تترك الخاتمةُ القارئَ مع رهبةٍ لا مع حُكم. تأبى Levine أن تُعلّق؛ تترك التجربة لذاتها وتثق بأنّ القارئ سيُكوّن استجابته بنفسه.',
  perspective:
    "First-person travel narration. Levine's narrating voice is honest about being out of her depth, which earns the reader's trust and keeps the writing free of false authority.",
  perspectiveAr:
    'سردٌ رحليّ بضمير المتكلّم. وصوتُ Levine الساردُ صريحٌ في كونها خارج حدود خبرتها، ممّا يكسب ثقةَ القارئ، ويُبقي الكتابةَ نقيّةً من سلطةٍ زائفة.',
}

const writersPurpose = {
  achieve:
    'Levine aims to convey the texture and intensity of a cultural event most Western readers will never witness, while resisting easy stereotypes and refusing to flatten the practice into either spectacle or shock.',
  achieveAr:
    'تهدف Levine إلى إيصال نسيج حدثٍ ثقافيّ وكثافته، ممّا لن يشهده معظمُ القرّاء الغربيين، مع مقاومة الصور النمطيّة السهلة، ورفض اختزال الممارسة إلى مجرّد فُرجةٍ أو صدمة.',
  readerFeel:
    'The reader is meant to feel both the excitement of the spectacle and the slight unease of being a stranger inside it — a productive discomfort that opens the mind rather than closing down judgement.',
  readerFeelAr:
    'يُراد للقارئ أن يشعر في آنٍ معاً بإثارة المشهد، وبشيءٍ من الضيق لكونه غريباً داخلَه — قلقٌ مُثمر يفتح العقلَ لا يُغلق بابَ التأمّل بالحكم.',
  message:
    'Cultural difference is presented not as a problem to be solved but as an experience to be entered. The reader is invited to suspend habitual judgement and to look before deciding.',
  messageAr:
    'يُقدَّم الاختلافُ الثقافيّ لا بوصفه مشكلةً تُحَلّ، بل تجربةً تُلَج. ويُدعى القارئُ إلى تعليق الحكم المعتاد، وإلى أن ينظر قبل أن يقرّر.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about the event Levine witnesses.',
    questionAr: 'اذكر أربعةَ أشياء تعرفها عن الحدث الذي تشاهده Levine.',
    type: 'Retrieval — 4 marks',
    typeAr: 'الاسترجاع — ٤ درجات',
  },
  q2: {
    question: 'How does Levine use language to convey the atmosphere of the spectacle?',
    questionAr: 'كيف تستخدم Levine اللغةَ لنقل أجواء المشهد؟',
    type: 'Language analysis — 12 marks',
    typeAr: 'تحليل اللغة — ١٢ درجة',
    modelOutline: [
      'First-person travel narration positions the reader alongside Levine as a fellow outsider, so the text reads as shared discovery rather than expert commentary.',
      'Layered sensory description — dust, sound, the press of horses and bodies — produces immersion and shifts the reader from observer to near-participant in the spectacle.',
      'Cultural specificity, including the use of the original name of the sport and its literal translation, signals respect for the practice and asks the reader to accept it on its own terms.',
      'Restraint from explicit judgement makes the writing trustworthy: Levine describes rather than editorialises, leaving meaning for the reader to construct.',
    ],
    modelOutlineAr: [
      'السردُ الرحليّ بضمير المتكلّم يضع القارئَ إلى جانب Levine بوصفه غريباً مثلها، فيُقرأ النصّ اكتشافاً مشتركاً لا تعليقاً من خبير.',
      'الوصفُ الحسيّ المتراكب — الغبار والصوت وضغط الخيل والأجساد — يُولّد انغماساً ويُحوّل القارئَ من مراقبٍ إلى مَن يكاد يكون مشاركاً في المشهد.',
      'الخصوصيّةُ الثقافيّة، بما فيها استعمالُ الاسم الأصليّ للرياضة وترجمتُه الحرفيّة، تُشير إلى احترام الممارسة وتطلب من القارئ قبولَها بمصطلحاتها الخاصّة.',
      'الإمساكُ عن الحكم الصريح يُكسب الكتابةَ المصداقيّة: تصف Levine ولا تُعلّق، وتترك للقارئ بناءَ المعنى.',
    ],
  },
  q3: {
    question: 'How does Levine structure the text to take the reader through the experience?',
    questionAr: 'كيف تبني Levine النصَّ لتأخذ القارئ عبر التجربة؟',
    type: 'Structural analysis — 12 marks',
    typeAr: 'التحليل البنائيّ — ١٢ درجة',
  },
}

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both writers observe a culturally embedded practice (Inuit hunting / buzkashi) and balance fascination with ethical unease. Compare the two outsider gazes.',
    reasonAr:
      'تشاهد الكاتبتان ممارسةً متجذّرة ثقافيّاً (صيد الإنويت / الـ buzkashi)، وتُوازنان بين الافتتان والقلق الأخلاقيّ. قارن نظرتَي الغريبتين.',
    themes: ['Outsider perspective', 'Tradition', 'Ethics'],
    themesAr: ['منظور الغريب', 'التراث', 'الأخلاق'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      'Two travel writers, two unfamiliar cultures, two different relationships to settling-in. Compare the day-trip spectator with the long-stay resident.',
    reasonAr:
      'كاتبتا رحلاتٍ، ثقافتان مجهولتان، علاقتان مختلفتان بالاستقرار. قارن المُتفرّجَ في زيارةٍ يومٍ بالمقيمة لفترةٍ طويلة.',
    themes: ['Travel', 'Culture', 'Belonging'],
    themesAr: ['السفر', 'الثقافة', 'الانتماء'],
  },
  {
    title: 'Explorers or Boys Messing About?',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      "Both texts are journalistic but adopt different stances. Compare Levine's observational openness with Morris's sceptical framing.",
    reasonAr:
      'كلا النصّين صحفيّ، لكنّهما يتبنّيان موقفَين مختلفَين. قارن انفتاحَ Levine الرَّصدِيَّ بتأطير Morris المرتاب.',
    themes: ['Journalism', 'Authorial stance', 'Spectacle'],
    themesAr: ['الصحافة', 'موقف الكاتب', 'المشهد'],
  },
]

export default async function AGameOfPoloPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])
  const locale = await getLocale()
  const ar = locale === 'ar'
  const momentPrefix = await t('anth_text.moment_prefix')

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
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              A Game of Polo with a Headless Goat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Emma Levine &middot; {ar ? 'كتابة رحلات' : 'Travel writing'}
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

      <section className="rounded-2xl border border-border/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-body-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">{await t('anth_text.rebuilt_label')}</strong>{' '}
          {await t('anth_text.rebuilt_body')}
        </p>
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
                يوثّق كتابُ Emma Levine{' '}
                <em>
                  A Game of Polo with a Headless Goat: An Erratic Search for Asia&apos;s Sporting
                  Soul
                </em>{' '}
                (2000) الرياضاتِ التقليديّةَ في أنحاء آسيا. ويروي المقتطفُ في المختارات تجربتَها مع
                الـ <em>buzkashi</em>، وهي رياضةُ فروسيّةٍ سريعة شاقّة جسديّاً تُلعب على ظهر الخيل،
                يترجم اسمُها حرفيّاً بـ &ldquo;goat-grabbing&rdquo;، ومُورست في أفغانستان ووسط آسيا
                منذ قرون.
              </p>
              <p>
                المقتطفُ دراسةٌ في{' '}
                <strong className="text-foreground">
                  كيف توازن كاتبةُ الرحلات بين الوصف الحيّ واحترام الخصوصيّة الثقافيّة
                </strong>
                ، فلا تُهوّل ولا تُلطّف ما تشاهده.
              </p>
              <p>صدر عن Little, Brown.</p>
            </>
          ) : (
            <>
              <p>
                Emma Levine&apos;s book{' '}
                <em>
                  A Game of Polo with a Headless Goat: An Erratic Search for Asia&apos;s Sporting
                  Soul
                </em>{' '}
                (2000) documents traditional sports across Asia. The anthology extract recounts her
                experience of <em>buzkashi</em>, a fast, physically demanding equestrian sport
                played on horseback whose name translates literally as &ldquo;goat-grabbing&rdquo;,
                and which has been practised across Afghanistan and Central Asia for centuries.
              </p>
              <p>
                The extract is a study in{' '}
                <strong className="text-foreground">
                  how a travel writer balances vivid description with respect for cultural
                  specificity
                </strong>
                , neither sensationalising nor sanitising what she witnesses.
              </p>
              <p>Published by Little, Brown.</p>
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
          <Quote className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.extract_focuses')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          {await t('anth_text.section.extract_focuses.intro')}
        </p>
        <div className="space-y-4">
          {extractFocuses.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                {momentPrefix} {extract.id} — {ar ? extract.labelAr : extract.label}
              </span>
              <p className="mt-2 text-body-sm font-semibold text-foreground">
                {ar ? extract.focusAr : extract.focus}
              </p>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {ar ? extract.contextAr : extract.context}
              </p>
            </div>
          ))}
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
            &copy; Little, Brown / Emma Levine، <em>A Game of Polo with a Headless Goat</em> (2000).
            لا تتضمّن هذه الصفحةُ أيَّ اقتباساتٍ حرفيّة من العمل؛ والتعليقاتُ مقدَّمةٌ بمقتضى
            الاستعمال العادل لأغراض النقد والمراجعة والاقتباس بحسب CDPA 1988 §30. للحصول على النصّ
            الحرفيّ للمقتطف، ينبغي للطلاب الرجوع إلى الطبعة المدرسيّة المرخّصة (Pearson Edexcel
            IGCSE anthology، ISBN 978-1-446-93108-0).
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            &copy; Little, Brown / Emma Levine, <em>A Game of Polo with a Headless Goat</em> (2000).
            This page contains no direct quotations from the work; commentary is provided under fair
            dealing for criticism, review and quotation under CDPA 1988 &sect;30. For the exact text
            of the extract, students should consult the licensed school edition (Pearson Edexcel
            IGCSE anthology, ISBN 978-1-446-93108-0).
          </p>
        )}
        <p className="mt-2">
          <strong className="text-foreground">{await t('anth_text.rebuilt_label')}</strong>{' '}
          {await t('anth_text.footer_align')}
        </p>
      </footer>
    </div>
  )
}
