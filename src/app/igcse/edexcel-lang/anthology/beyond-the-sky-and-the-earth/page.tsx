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
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Beyond the Sky and the Earth - IGCSE Language A Anthology - The English Hub',
    description:
      'Jamie Zeppa in Bhutan, for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A exam practice.',
    images: [
      {
        url: '/api/og?title=Beyond+the+Sky+and+the+Earth+-+IGCSE+Language+A+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Beyond the Sky and the Earth - IGCSE Language A Anthology - The English Hub',
      },
    ],
  },
  title: 'Beyond the Sky and the Earth - IGCSE Language A Anthology',
  description:
    'Jamie Zeppa in Bhutan, for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A exam practice.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
  },
}

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 16-18. Several notes here described the whole memoir, not the
 * extract: growing relationships with students, a climax where she feels at
 * home, a resolution where she has been changed. The extract covers only her
 * first night and first week in Thimphu, at an orientation for new teachers.
 * It has no students in it, is told largely in the present tense, and ends on
 * her admiration for Bhutan's independence. Two theme notes survived that pass
 * and were fixed the same day: one had the mountains shaping her teaching, which
 * the extract never reaches, and one said she writes looking back as an older
 * self, when the extract is written without hindsight.
 *
 * A second pass the same day checked every remaining section against the
 * extract. Culture shock listed a disorientation of language the extract does
 * not have (the news is in English and the young man at the hotel speaks it
 * perfectly). The structure note had her open on arrival and on a gap between
 * expectation and reality; she opens on the mountains, before she mentions
 * herself. The purpose notes gave the whole memoir's message (a place changes
 * whoever lives in it) and credited her with not exoticising Bhutan, which the
 * study guide's sharper reading questions. The context had her going to teach
 * English at a remote school in an aid programme. The anthology says none of
 * that, and her posting and her teaching both lie after the week the extract
 * covers, so the context now keeps to the guide's biography: 1988, WUSC, two
 * years. A third check that day found the landscape note calling the mountains
 * larger than her understanding. She says she knows the geology and cannot
 * imagine it, the reading the guide's own fact-check corrected, so the note now
 * says what she cannot picture. Keep every note to the first week the anthology
 * prints.
 *
 * Checked again 10 October 2026. The landscape note still said the landscape
 * was larger than she can picture, but she watches the mountains; what she
 * cannot imagine is how they were made, so it now gives the guide's reading:
 * something she can explain but not picture. The orientation note credited
 * "the full memoir" with a change that neither the anthology nor the guide
 * describes; it now says only that what she learns after that week lies beyond
 * the extract. This comment had also said the guide's sources give English
 * (Wikipedia); the guide records no subject, so that clause was dropped rather
 * than guessed at.
 */
const themes = [
  {
    label: 'Culture shock',
    labelAr: 'الصدمة الثقافيّة',
    detail:
      'Zeppa arrives in Bhutan as a stranger, and the extract registers the small discomforts and surprises of her first days: a sleepless night after four days of travel, thin, cold winter air, a disappointing hotel breakfast, traffic policemen whose hand signals she cannot follow, and signs of Western pop culture that stand out in the town.',
    detailAr:
      'تصل Zeppa إلى Bhutan غريبةً، ويرصد المقتطفُ المنغّصاتِ والمفاجآتِ الصغيرة في أيّامها الأولى: ليلةً بلا نوم بعد أربعة أيّامٍ من السفر، وهواءَ الشتاء الخفيفَ البارد، وفطوراً مخيّباً في الفندق، وشرطةَ مرورٍ لا تفهم إشاراتِ أيديهم، وعلاماتٍ من الثقافة الشعبيّة الغربيّة تبرز في المدينة.',
  },
  {
    label: 'First impressions',
    labelAr: 'الانطباعات الأولى',
    detail:
      'Far from home and exhausted after four days of travel, Zeppa records her first night and first week in Thimphu. The extract captures a newcomer’s first impressions of the town and its people; settling in lies beyond it.',
    detailAr:
      'بعيدةً عن الديار ومُنهَكةً بعد أربعة أيّامٍ من السفر، تُسجّل Zeppa ليلتها الأولى وأسبوعها الأوّل في Thimphu. ويلتقط المقتطف انطباعاتِ القادمة الجديدة الأولى عن المدينة وأهلها؛ أمّا الاستقرار فيقع خارجه.',
  },
  {
    label: 'Beauty and landscape',
    labelAr: 'الجمال والمنظر',
    detail:
      'Bhutan’s mountains are not ornament - the extract opens on them before it mentions Zeppa herself, and on her first night she watches them from her hotel room and remembers flying in past Everest that morning. She knows the geology but says she cannot imagine it, so the landscape is presented as something she can explain but not picture, not as a backdrop.',
    detailAr:
      'جبالُ Bhutan ليست زينةً - فالمقتطف يفتتح بها قبل أن يذكر Zeppa نفسها، وفي ليلتها الأولى تراقبها من غرفتها في الفندق وتتذكّر رحلتها الجوّيّة ذلك الصباح مروراً بـ Everest. وهي تعرف التفسيرَ الجيولوجيّ لكنّها تقول إنّها لا تستطيع تخيّله، فيُقدَّم المنظر بوصفه شيئاً تستطيع تفسيره ولا تستطيع تصوّره، لا خلفيّةً.',
  },
  {
    label: 'Learning about Bhutan',
    labelAr: 'التعرّف إلى Bhutan',
    detail:
      'At a week-long orientation Zeppa has her first lessons in Bhutanese history, and the extract ends on her admiration for a small country that kept its independence while European powers overran the rest of Asia. What she learns after that week lies beyond the extract.',
    detailAr:
      'في دورةٍ تعريفيّة مدّتها أسبوع، تتلقّى Zeppa دروسها الأولى في تاريخ Bhutan، وينتهي المقتطف بإعجابها ببلدٍ صغير حافظ على استقلاله بينما اجتاحت القوى الأوروبيّة بقيّة آسيا. أمّا ما تتعلّمه بعد ذلك الأسبوع فيقع خارج المقتطف.',
  },
  {
    label: 'Reflection and memoir',
    labelAr: 'التأمّل والسيرة',
    detail:
      'Zeppa reflects as she goes. Written in the first person and largely in the present tense, the extract records her first week as it happens rather than looking back with hindsight, and her honesty about her doubts makes her later admiration convincing.',
    detailAr:
      'تتأمّل Zeppa وهي تمضي. فالمقتطف، المكتوب بضمير المتكلّم وفي معظمه بصيغة المضارع، يُسجّل أسبوعها الأوّل كما يحدث لا بنظرةٍ استرجاعيّة، وصراحتُها بشأن شكوكها تجعل إعجابها اللاحق مُقنِعاً.',
  },
]

const structuralAnalysis = {
  opening:
    'Zeppa opens not with herself but with the landscape: mountains in every direction, whose geology she knows but cannot imagine. Only then does she fix the time and place, her first sleepless night in Thimphu after four days of flights, so the reader meets Bhutan before meeting her.',
  openingAr:
    'لا تستهلّ Zeppa بنفسها بل بالمنظر: جبالٌ في كلّ اتّجاه، تعرف تفسيرها الجيولوجيّ لكنّها لا تستطيع تخيّله. ثمّ تُحدّد الزمان والمكان، ليلتها الأولى بلا نوم في Thimphu بعد أربعة أيّامٍ من الرحلات الجوّيّة، فيلتقي القارئ Bhutan قبل أن يلتقيها.',
  development:
    'The text develops through accumulating detail: breakfast with two other Canadian teachers, a walk along the main road, descriptions of the town and its people. The focus then widens from her own impressions to the country’s history, taught at the week-long orientation.',
  developmentAr:
    'يتطوّر النصُّ عبر تراكم التفاصيل: الفطور مع معلّمَين كنديَّين آخرَين، ونزهةٌ على امتداد الشارع الرئيس، ووصفُ المدينة وأهلها. ثمّ يتّسع التركيز من انطباعاتها الخاصّة إلى تاريخ البلد، كما تتلقّاه في الدورة التعريفيّة التي تدوم أسبوعاً.',
  climax:
    'There is no single dramatic climax; the extract builds towards its final paragraph, where a history lesson turns into Zeppa’s own admiration for Bhutan.',
  climaxAr:
    'لا توجد ذروةٌ دراميّةٌ واحدة؛ بل يتصاعد المقتطف نحو فقرته الأخيرة، حيث يتحوّل درسٌ في التاريخ إلى إعجاب Zeppa الشخصيّ بـ Bhutan.',
  resolution:
    'The extract ends while she is still at orientation in Thimphu, on her admiration for how this small country kept its independence and has looked after itself so well. Nothing is resolved about her own life there; that lies beyond the extract.',
  resolutionAr:
    'ينتهي المقتطف وهي ما تزال في الدورة التعريفيّة في Thimphu، على إعجابها بكيف حافظ هذا البلد الصغير على استقلاله وأحسن رعاية نفسه. ولا يُحسم فيه شيءٌ من حياتها هناك؛ فذلك يقع خارج المقتطف.',
  perspective:
    'First-person memoir, told largely in the present tense, so the reader discovers Thimphu alongside her on her first night and first week.',
  perspectiveAr:
    'سيرةٌ بضمير المتكلّم، تُروى في معظمها بصيغة المضارع، فيكتشف القارئ Thimphu معها في ليلتها الأولى وأسبوعها الأوّل.',
}

const writersPurpose = {
  achieve:
    'Zeppa wants to record her first week in Bhutan honestly, exhaustion and doubts included, and to introduce the reader to the country’s landscape, people and history, so that the admiration she reaches by the end feels earned.',
  achieveAr:
    'تريد Zeppa أن تُسجّل أسبوعها الأوّل في Bhutan بصدق، بما فيه من إنهاكٍ وشكوك، وأن تُعرّف القارئ بمنظر البلد وأهله وتاريخه، حتّى يبدو الإعجاب الذي تبلغه في النهاية مُستحَقّاً.',
  readerFeel:
    'She wants the reader to feel the texture of unfamiliarity - the exhaustion, cold and strangeness of a first night abroad - and then to share her growing fascination with the country and its history.',
  readerFeelAr:
    'تريد للقارئ أن يحسّ نسيجَ الغرابة - الإنهاكَ والبردَ وغرابةَ الليلة الأولى في بلدٍ أجنبيّ - ثمّ أن يشاركها افتتانها المتنامي بالبلد وتاريخه.',
  message:
    'Bhutan deserves respect for having kept its own character, in its traditions and in its independence. The extract also suggests that understanding a place begins with admitting what you cannot yet imagine or put into words.',
  messageAr:
    'يستحقّ Bhutan الاحترام لأنّه حافظ على طابعه الخاصّ، في تقاليده وفي استقلاله. ويوحي المقتطف كذلك بأنّ فهم المكان يبدأ بالاعتراف بما لا نستطيع بعدُ تخيّله أو التعبير عنه بالكلمات.',
}

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'Beyond the Sky and the Earth: A Journey into Bhutan'

// Until 26 September 2026 this set a "List four things" retrieval question
// for 4 marks, a language-only question and a structure-only question, each
// for 12. No 4EA1 paper asks any of those. On every Pearson 4EA1/01 paper,
// mark scheme and examiners' report checked (the SAMs, the 2017 extra
// assessment material, the June 2019 report, the 2021 papers, June 2023,
// November 2023, May 2024, November 2024 and the June 2025 mark scheme and
// report) Questions 1-3 are on the unseen Text One, Question 4 (12 marks, AO2)
// is the only question on the anthology text alone and always asks about
// language AND structure together on one grid, and Question 5 (22 marks, AO3)
// compares the anthology text with the unseen one; the exam never pairs two
// anthology texts. This text was itself Text Two on paper P65890A (2021), with
// that single Q4 on it. The retrieval question was also sent to Q2, a Text One
// question, so it was marked as the wrong question. The labels are what
// questionIdForPracticeType in PracticeMarkingButton reads: "12 marks" maps to
// Q4, and "22 marks" maps to nothing, which is why q3 renders no button. Keep
// the space before "marks", and pass the English `type` to the button even in
// Arabic: until 26 September 2026 the mapping could not read Arabic numerals,
// so passing typeAr removed every button on the Arabic page, and the English
// label is still the form the mapping is written for.
const examPractice = {
  q1: {
    question:
      'How does the writer, Jamie Zeppa, use language and structure to show how her understanding of Bhutan changes? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستعمل الكاتبة، Jamie Zeppa، اللغةَ والبنيةَ لتُظهر كيف يتغيّر فهمها لـ Bhutan؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, Jamie Zeppa, use language and structure to convey her first impressions of Bhutan? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستعمل الكاتبة، Jamie Zeppa، اللغةَ والبنيةَ لتنقل انطباعاتها الأولى عن Bhutan؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about arriving in an unfamiliar place.',
    questionAr:
      'في الامتحان، يطلب منك السؤال الخامس أن تقارن هذا المقتطف بنصٍّ غير مرئيّ. تدرّب بأيّ نصٍّ في موضوعٍ مشابه: قارن كيف يعرض الكاتبان أفكارهما ووجهات نظرهما عن الوصول إلى مكانٍ غير مألوف.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
  },
}

// Checked 26 September 2026 against both texts in the anthology. These gave
// both writers "long-term relationships" with remote places and called Zeppa
// a "long-stay resident", which her extract, her first week, never shows; and
// called Levine a "day-trip spectator", which her extract does not say. Each
// reason must be true of both extracts as printed, not of the books. Herbert
// is described as torn rather than as left with a dilemma, because her
// extract ends by explaining why the hunters must hunt.
const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both writers are outsiders watching a traditional community in a remote landscape. Herbert, revisiting the Arctic where she lived as a small child, is torn between sympathy for the narwhal and the hunters’ need to hunt; Zeppa, in her first week in Bhutan, ends in wholehearted admiration.',
    reasonAr:
      'الكاتبتان غريبتان ترصدان مجتمعاً تقليديّاً في منظرٍ طبيعيّ نائٍ. تعود Herbert إلى القطب الشماليّ حيث عاشت طفلةً صغيرة، فتتنازعها الشفقةُ على الناروال وحاجةُ الصيّادين إلى الصيد؛ أمّا Zeppa، في أسبوعها الأوّل في Bhutan، فتنتهي إلى إعجابٍ خالص.',
    themes: ['Place', 'Tradition', 'Memoir'],
    themesAr: ['المكان', 'التقاليد', 'السيرة'],
  },
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both writers are outsiders describing an unfamiliar culture. Compare Levine, a visitor following a single donkey-cart race in Karachi, with Zeppa, a newcomer in her first week in Bhutan who has signed on to teach there for two years.',
    reasonAr:
      'الكاتبتان غريبتان تصفان ثقافةً غير مألوفة. قارن Levine، الزائرةَ التي تتابع سباقاً واحداً لعربات الحمير في Karachi، بـ Zeppa، القادمةِ الجديدة في أسبوعها الأوّل في Bhutan، وقد تعاقدت على التدريس فيه سنتين.',
    themes: ['Travel', 'Culture', 'Outsider perspective'],
    themesAr: ['السفر', 'الثقافة', 'منظور الغريب'],
  },
  {
    title: 'Explorers or Boys Messing About?',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      'Both concern Western travellers in remote places, in very different forms. Compare Zeppa’s first-person memoir, told largely in the present tense, with Morris’s newspaper report, which records doubts about the wisdom of two explorers’ Antarctic adventure and resentment at what their rescue cost taxpayers.',
    reasonAr:
      'يتناول النصّان مسافرين غربيّين في أماكن نائية، بشكلين مختلفين جدّاً. قارن سيرةَ Zeppa المكتوبة بضمير المتكلّم وفي معظمها بصيغة المضارع، بتقرير Morris الصحفيّ الذي ينقل الشكوكَ في حكمة مغامرة مستكشفَين في القارّة القطبيّة الجنوبيّة والاستياءَ ممّا كلّفه إنقاذهما دافعي الضرائب.',
    themes: ['Travel', 'Genre contrast', 'Tone'],
    themesAr: ['السفر', 'تباين الأجناس الأدبيّة', 'النبرة'],
  },
]

export default async function BeyondTheSkyAndTheEarthPage() {
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
              Beyond the Sky and the Earth: A Journey into Bhutan
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Jamie Zeppa &middot; {ar ? 'سيرة رحليّة' : 'Travel memoir'}
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
                Jamie Zeppa، كاتبةٌ كنديّة، غادرت كندا عام 1988 لتُدرّس في Bhutan بعقدٍ مدّته سنتان
                مع World University Service of Canada (WUSC)، وهي منظّمةٌ كنديّة غير ربحيّة؛ وتذكر
                ملاحظةُ المختارات أنّ عمرها كان 24 عاماً. وكتاب{' '}
                <em>Beyond the Sky and the Earth</em> (1999) هو سيرتها عن مدّة إقامتها هناك، وتوضّح
                الملاحظة أنّ الكتاب بدأ مقالةً عن أيّامها الأولى في Bhutan.
              </p>
              <p>
                النصُّ المدروس هنا من بدايات السيرة. وهو لا يتناول إلّا ليلتها الأولى وأسبوعها
                الأوّل في Thimphu، العاصمة، بما في ذلك دورةٌ تعريفيّة للمعلّمين الجدد مدّتها أسبوع،
                قبل أن تتوجّه شرقاً إلى مقرّ عملها. أمّا تدريسها وحياتها في Bhutan بعد ذلك الأسبوع
                فيقعان خارج المقتطف.
              </p>
            </>
          ) : (
            <>
              {/* Corrected 26 September 2026. This said "the late 1980s"; Kirkus
                  gives 1988 (the anthology's note gives only her age, 24). A
                  closing line said "Published by Penguin Canada", which the
                  anthology does not say: its acknowledgements (p.71) name
                  Riverhead Books, 2000, as the footer below now does, so the
                  line was removed in both languages. Later the same day "to
                  teach English at a remote school as part of a Canadian aid
                  programme" became the two-year WUSC contract the guide's
                  sources confirm, and the book-length arc (adjustment, a deep
                  connection) became what the extract covers. */}
              <p>
                Jamie Zeppa, a Canadian writer, left Canada in 1988 to teach in Bhutan on a two-year
                contract with the World University Service of Canada (WUSC), a Canadian non-profit
                organisation; the anthology’s note gives her age as 24.{' '}
                <em>Beyond the Sky and the Earth</em> (1999) is her memoir of her time there, and
                the note explains that the book started as an essay on her early days in Bhutan.
              </p>
              <p>
                The text studied here comes from early in the memoir. It covers only her first night
                and first week in Thimphu, the capital, including a week-long orientation course for
                new teachers, before she travels east to her posting. Her teaching, and her life in
                Bhutan after that week, lie beyond the extract.
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
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            © Jamie Zeppa 1999 (Riverhead Books، 2000، كما تذكره المختارات في قسم الشكر). الصياغات
            الموجزة في هذه الصفحة لأغراض النقد والمراجعة والاقتباس بمقتضى CDPA 1988 §30. للحصول على
            النصّ الكامل، ارجع إلى Pearson Edexcel IGCSE anthology (ISBN 978-1-446-93108-0)، التي
            تنشرها Pearson مجّاناً.
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            {/* As the anthology's acknowledgements give it. Until 26 September 2026
                this read "Penguin Canada / Jamie Zeppa". */}
            &copy; Jamie Zeppa 1999 (Riverhead Books, 2000, as acknowledged in the anthology). Brief
            paraphrases on this page are for criticism, review and quotation under CDPA 1988
            &sect;30. For the full text, use the Pearson Edexcel IGCSE anthology (ISBN
            978-1-446-93108-0), which Pearson publishes free.
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
