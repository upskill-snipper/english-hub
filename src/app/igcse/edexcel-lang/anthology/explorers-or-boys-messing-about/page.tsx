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
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Explorers or Boys Messing About? - IGCSE Anthology - The English Hub',
    description:
      'The Steven Morris newspaper article for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
    images: [
      {
        url: '/api/og?title=Explorers+or+Boys+Messing+About%3F+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Explorers or Boys Messing About? - IGCSE Anthology - The English Hub',
      },
    ],
  },
  title: 'Explorers or Boys Messing About? - IGCSE Anthology',
  description:
    'The Steven Morris newspaper article for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
  },
}

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 8-9. The context section said the men "attempted a journey across
 * Antarctica", quoted "the Frozen Continent" and named an "Iridium" phone; the
 * article says none of that. They ditched a helicopter in the sea about 100
 * miles off Antarctica, and Brooks called his wife on a satellite phone. The
 * Guardian date was given as 24 January in places; the anthology's note and
 * acknowledgements both give 28 January 2003. The structure notes said expert
 * criticism clusters mid-article and that Morris quotes the men less than their
 * critics: the only named expert (Endres) comes near the end, the one explorer
 * quoted calls their survival a miracle, and neither man is quoted directly.
 *
 * Checked again the same day against the anthology and the study guide. The
 * article calls both men experienced adventurers, so "amateur" went. It never
 * says the men endangered their rescuers, reports no human cost (nobody was
 * hurt) and no celebration by the media, and gives nothing in the men's own
 * words, since neither speaks. Its one rhetorical question is the headline.
 * Endres is its one named expert, not its one named critic, since Brooks's
 * wife supplies the headline's picture of boys; nor is she an outsider. Levine
 * joins the cars chasing the donkey race, in a book about her travels, not a
 * news report; the Ralston extract is the accident, not the whole survival
 * story. The anthology says only that the text is adapted, not by whom or how,
 * so the header no longer says "adapted for the anthology" and the warning no
 * longer lists "cuts, re-orderings" that nobody here has compared.
 *
 * A third check the same day: the experts doubt the helicopter in a hostile
 * environment, not in dangerous conditions, because the article calls the
 * weather clear and the flying conditions excellent. And the Zeppa card now
 * describes the extract, her first days in Bhutan, not her whole memoir, which
 * the anthology says only grew out of an essay about those days.
 *
 * Checked again 10 October 2026. The message said the article never states
 * its argument outright, but the headline and the Ministry of Defence state
 * the bill plainly; what Morris leaves to other voices is the doubt about the
 * men's judgement. The Zeppa card was tagged Risk, which nothing in her
 * extract or its guide supports, so the tag is now Remote places.
 */
const themes = [
  {
    label: 'Risk and recklessness',
    labelAr: 'المخاطرة والاستهتار',
    detail:
      'Morris foregrounds the question of whether the explorers’ flight was bold adventure or recklessness. Experts doubt the sense of taking a small, single-engined helicopter into so harsh an environment, and the one named expert suspects the men were pushing things too far.',
    detailAr:
      'يُبرز Morris سؤالاً عمّا إذا كانت رحلة المستكشفَين مغامرةً جريئة أم استهتاراً. فالخبراء يشكّكون في حكمة اصطحاب مروحيّةٍ صغيرة بمحرّكٍ واحد إلى بيئةٍ بهذه القسوة، والخبير الوحيد المُسمّى يظنّ أنّ الرجلَين تجاوزا الحدّ.',
  },
  {
    label: 'Experience and judgement',
    labelAr: 'الخبرة وحُسن التقدير',
    detail:
      'The article sets the men’s long record of adventure against experts’ doubts about their choice of helicopter, inviting readers to ask whether experience is the same as good judgement.',
    detailAr:
      'يضع المقالُ سجلَّ الرجلَين الطويلَ في المغامرة في كفّة، وشكوكَ الخبراء في اختيارهما للمروحيّة في كفّةٍ أخرى، ويدعو القرّاء إلى التساؤل: هل الخبرةُ هي حُسنُ التقدير نفسه؟',
  },
  {
    label: 'Media framing',
    labelAr: 'تأطير الإعلام',
    detail:
      'A newspaper report that shapes readers’ views while appearing only to relay facts: through loaded vocabulary, its choice of whom to quote, and the rhetorical question in its headline.',
    detailAr:
      'تقريرٌ صحفيّ يُشكّل آراءَ القرّاء وهو يبدو ناقلاً للوقائع فحسب: عبر مفرداتٍ مُحمَّلة، واختيارِ مَن يقتبس كلامهم، والسؤالِ البلاغيّ في عنوانه.',
  },
  {
    label: 'Exploration vs. recreation',
    labelAr: 'الاستكشاف في مقابل التسلية',
    detail:
      'Morris draws a contested line between serious exploration and boys at play. The headline itself poses the dilemma, and its second option is borrowed from Brooks’s own wife.',
    detailAr:
      'يرسم Morris خطّاً متنازَعاً عليه بين الاستكشاف الجادّ ولهو الصبية. والعنوانُ نفسه يطرح المعضلة، وخيارُه الثاني مستعارٌ من كلام زوجة Brooks نفسها.',
  },
  {
    label: 'Cost and responsibility',
    labelAr: 'الكلفة والمسؤوليّة',
    detail:
      'The cost of the rescue frames the piece. The headline says the taxpayer pays either way, an early paragraph reports resentment at a five-figure bill for British and Chilean taxpayers, and near the end the Ministry of Defence confirms the public will pay, while calling that normal for rescues.',
    detailAr:
      'تُؤطِّر كلفةُ الإنقاذ المقالَ كلَّه. فالعنوان يقول إنّ دافع الضرائب يدفع في كلّ الأحوال، وفقرةٌ مبكّرة تنقل استياءً من فاتورةٍ بعشرات الآلاف من الجنيهات على دافعي الضرائب في بريطانيا وتشيلي، وقُرب النهاية تؤكّد وزارة الدفاع أنّ المال العامّ سيتحمّل الكلفة، مع أنّها تَعُدّ ذلك معتاداً في عمليّات الإنقاذ.',
  },
]

const structuralAnalysis = {
  opening:
    'The headline poses a binary question - “Explorers or boys messing about?” - that immediately frames the article as a judgement rather than a neutral report. The reader is invited to take a side from the first line.',
  openingAr:
    'يطرح العنوانُ سؤالاً ثنائيّاً - “Explorers or boys messing about?” - يؤطّر المقالَ فوراً بوصفه حُكماً لا تقريراً محايداً. ويُدعى القارئ إلى اختيار موقفٍ من السطر الأوّل.',
  development:
    'Morris alternates the bare facts of the incident (the crash, the satellite phone call, the rescue) with critical voices, building an evidence-based case that leans toward the “messing about” verdict. The longest passage of praise, the men’s record of adventure, is followed at once by an earlier embarrassment in the Bering Strait.',
  developmentAr:
    'يتناوب Morris بين الحقائق الجرداء للحادثة (التحطّم، مكالمة الهاتف الفضائيّ، الإنقاذ) وبين أصواتٍ ناقدة، فيبني قضيّةً قائمةً على الدليل تميل إلى حُكم “messing about”. ويتلو أطولَ مقطعٍ في مدح الرجلَين، أي سجلَّهما في المغامرة، مباشرةً إحراجٌ سابق في مضيق Bering.',
  climax:
    'There is no single climax of criticism. Experts’ doubts about the small helicopter are reported early; the one Antarctic explorer quoted calls their survival a miracle, which credits it to luck without criticising them outright; and the only named expert, Günter Endres, is held back until near the end, shortly before the Ministry of Defence confirms the taxpayer will pay.',
  climaxAr:
    'لا توجد ذروةٌ واحدة للنقد. تُنقل شكوكُ الخبراء في المروحيّة الصغيرة في وقتٍ مبكّر؛ والمستكشف القطبيّ الوحيد المُقتبَس يَعُدّ نجاتهما معجزةً، فينسبها إلى الحظّ دون أن ينتقدهما صراحةً؛ أمّا الخبير الوحيد المُسمّى، Günter Endres، فيُؤجَّل إلى قرب النهاية، قُبيل تأكيد وزارة الدفاع أنّ دافع الضرائب سيتحمّل الكلفة.',
  resolution:
    'The piece closes not on a verdict but on Ms Vestey’s joke about the punishment waiting for the men, so the question is never resolved outright. By then, though, the cumulative framing has nudged readers toward scepticism of the men’s judgement, and the joke returns to the headline’s picture of boys.',
  resolutionAr:
    'يُختم المقالُ لا بحُكمٍ بل بمزحة Ms Vestey عن العقاب الذي ينتظر الرجلَين، فلا يُحسَم السؤال صراحةً. غير أنّ التأطيرَ التراكميَّ يكون قد دفع القرّاء سلفاً نحو الارتياب من حُكم الرجلَين، والمزحةُ تعود إلى صورة الصبية في العنوان.',
  perspective:
    'Third-person reportage with an embedded editorial slant. Neither man is quoted directly: Brooks is heard only through his wife’s account of his phone call and through a spokesman. Other voices (Ms Vestey, an Antarctic explorer, Endres, the Ministry of Defence) fill the article, so other people, not the two men, shape the moral verdict, and its most damaging phrase comes from Brooks’s own wife.',
  perspectiveAr:
    'تقريرٌ بضمير الغائب مع ميلٍ تحريريٍّ مُضمَّن. لا يُقتبس أيٌّ من الرجلَين مباشرةً: لا نسمع Brooks إلّا عبر رواية زوجته لمكالمته الهاتفيّة، وعبر متحدّثٍ باسمهما. وتملأ المقالَ أصواتٌ أخرى (Ms Vestey، ومستكشفٌ قطبيّ، وEndres، ووزارة الدفاع)، فيصوغ الآخرون، لا الرجلان، الحُكمَ الأخلاقيّ، وتأتي أشدُّ عباراته ضرراً من زوجة Brooks نفسها.',
}

const writersPurpose = {
  achieve:
    'Morris reports the rescue while simultaneously interrogating its meaning: was this bold exploration that went wrong, or the result of poor judgement, such as taking a small, single-engined helicopter on such a long sea crossing?',
  achieveAr:
    'يُغطّي Morris عمليّةَ الإنقاذ مُستجوِباً معناها في الوقت نفسه: هل كانت استكشافاً جريئاً انتهى بتعثّر، أم نتيجةً لسوء التقدير، كاصطحاب مروحيّةٍ صغيرة بمحرّكٍ واحد في رحلةٍ طويلة فوق البحر؟',
  readerFeel:
    'He wants the reader to doubt the men’s judgement and to question why the public should pay to rescue private adventurers, while letting other people’s words, rather than his own voice, do most of the judging.',
  readerFeelAr:
    'يريد للقارئ أن يشكّ في حُسن تقدير الرجلَين، وأن يتساءل لماذا يدفع الجمهور كلفةَ إنقاذ مغامرَين يخوضان مغامراتٍ خاصّة، تاركاً لكلام الآخرين، لا لصوته هو، معظمَ إصدار الأحكام.',
  message:
    'The implicit argument is that long experience of adventure is not the same as good judgement, and that it is the public, not the adventurers, who pays when that judgement fails. The bill is stated outright, in the headline and by the Ministry of Defence, but Morris never says in his own voice that the men misjudged: the voices he quotes, and the order he puts them in, make that case.',
  messageAr:
    'الحُجّة الضمنيّة أنّ الخبرة الطويلة في المغامرة ليست هي حُسنَ التقدير، وأنّ الجمهور، لا المغامرين، هو مَن يدفع الكلفة حين يخطئ تقديرُهم. أمّا الفاتورة فمُصرَّحٌ بها، في العنوان وعلى لسان وزارة الدفاع، غير أنّ Morris لا يقول أبداً بصوته هو إنّ الرجلَين أساءا التقدير: فالأصواتُ التي يقتبسها، والترتيبُ الذي يضعها فيه، هي التي تصنع هذه الحُجّة.',
}

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'Explorers or Boys Messing About?'

/**
 * CHANGED 26 September 2026. This set used to ask a "Retrieval - 4 marks"
 * question (list four things about the expedition), a language-only question
 * and a structure-only question, each "12 marks". None of the three is a 4EA1
 * question. On every Paper 1 checked (the 2016 SAMs, the 2017 extra assessment
 * material, P65890A and P65891RA from 2021, June and November 2023, May and
 * November 2024, and the mark schemes for November 2023, June 2024 and June
 * 2025), Q1-3 are short answers on Text One, the unseen extract. The anthology
 * text is Text Two and is examined alone only at Q4: one 12-mark AO2 question
 * on language AND structure across the whole extract. Q5 (22 marks) compares it
 * with the unseen text, never with another anthology text. This article was
 * Text Two in June 2019 (examiners' report) and in P65891RA.
 *
 * The English `type` labels are what questionIdForPracticeType maps: "12 marks"
 * goes to Q4 and "22 marks" to nothing, so q3 has no marking button (it needs
 * the unseen passage). The button is always given the English label. The
 * Arabic render used to pass typeAr, and while the mapping read only ASCII
 * digits and the word "marks" that silently removed every button on the Arabic
 * page. The mapping now reads Arabic labels too, but passing the English one
 * keeps the button independent of that. The "Compare with" intro also said,
 * until 10 October 2026, that the exam pairs this text with an unseen passage,
 * because the shared string then called these links pairings for comparison
 * questions in the exam; the shared string now says so itself, so that
 * sentence went.
 */
const examPractice = {
  q1: {
    question:
      'How does the writer, Steven Morris, use language and structure to lead the reader towards a judgement of the explorers? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، Steven Morris، اللغةَ والبنيةَ ليقود القارئ نحو حُكمٍ على المستكشفَين؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, Steven Morris, use language and structure to convey attitudes to the explorers and their rescue? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف يستعمل الكاتب، Steven Morris، اللغةَ والبنيةَ لينقل المواقفَ من المستكشفَين ومن عمليّة إنقاذهما؟ ادعم إجابتك بإحالاتٍ دقيقة إلى المقتطف، مع اقتباساتٍ موجزة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about risk and responsibility.',
    questionAr:
      'في الامتحان، يطلب منك السؤال الخامس مقارنةَ هذا المقتطف بنصٍّ غير مرئيّ. تدرّب بأيّ نصٍّ في موضوعٍ مشابه: قارن كيف يعرض الكاتبان أفكارهما ووجهات نظرهما حول المخاطرة والمسؤوليّة.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
  },
}

const comparisonLinks = [
  {
    title: '127 Hours: Between a Rock and a Hard Place',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts concern adventurers in serious danger. Compare Morris’s critical outsider report with Ralston’s first-hand account of a boulder trapping his hand: judgement from outside vs. determination from within.',
    reasonAr:
      'يتناول النصّان مغامرين في خطرٍ جسيم. قارن تقريرَ Morris الناقدَ من الخارج بسرد Ralston المباشر لصخرةٍ حبست يده: حُكمٌ من الخارج في مقابل عزيمةٍ من الداخل.',
    themes: ['Adventure', 'Risk', 'Different perspectives'],
    themesAr: ['المغامرة', 'المخاطرة', 'منظورات مختلفة'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      'Both texts deal with travel into challenging environments. Compare Morris’s critical reporting with Zeppa’s reflective account, from her memoir, of her first days in Bhutan, where she had come to teach: the same idea of going somewhere remote, treated very differently.',
    reasonAr:
      'يتناول النصّان السفرَ إلى بيئاتٍ عَسِرة. قارن تقريرَ Morris الناقدَ بسرد Zeppa المتأمّل، من مذكّراتها، لأيّامها الأولى في بوتان، التي جاءتها لتُدرِّس: فكرةُ الذهاب إلى مكانٍ ناءٍ نفسُها تُعالَج بطريقتَين مختلفتَين تماماً.',
    themes: ['Travel', 'Remote places', 'Genre contrast'],
    themesAr: ['السفر', 'الأماكن النائية', 'تباين الأجناس الأدبيّة'],
  },
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both texts show people taking risks for excitement, but the writers stand in different places. Compare Morris’s sceptical outsider’s framing with Levine’s first-person account of a donkey race in Karachi, which she follows by joining the cars chasing it.',
    reasonAr:
      'يُظهر النصّان أناساً يخاطرون طلباً للإثارة، غير أنّ الكاتبَين يقفان في موقعَين مختلفَين. قارن تأطير Morris المرتاب من الخارج بسرد Levine بضمير المتكلّم لسباق حميرٍ في كراتشي، تتابعه بالانضمام إلى السيّارات التي تلاحقه.',
    themes: ['Risk', 'Spectacle', 'Authorial stance'],
    themesAr: ['المخاطرة', 'المشهد', 'موقف الكاتب'],
  },
]

export default async function ExplorersOrBoysMessingAboutPage() {
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
              Explorers or Boys Messing About?
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Steven Morris &middot;{' '}
              {ar ? (
                <>
                  مقال صحفيّ (<em>The Guardian</em>، 28 يناير 2003، بصيغةٍ مُكيَّفة في المختارات)
                </>
              ) : (
                <>
                  Newspaper article (<em>The Guardian</em>, 28 January 2003, in adapted form in the
                  anthology)
                </>
              )}
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
                  Edexcel IGCSE Issue 8 (ISBN 978-1-446-93108-0). ومقالُ <em>Guardian</em> الأصليّ،
                  المتاح على الإنترنت، يختلف عنها في الصياغة. استعمل دائماً نسخةَ المختارات حين تجيب
                  على أسئلة Edexcel - يُصحّح الممتحنون قبالةَ نصّ المختارات، لا قبالةَ النسخ
                  المنشورة على الإنترنت.
                </>
              ) : (
                <>
                  <strong className="text-foreground">Anthology version warning:</strong> This text
                  is the <strong className="text-foreground">adapted</strong> version printed in the
                  Edexcel IGCSE Anthology Issue 8 (ISBN 978-1-446-93108-0). The original{' '}
                  <em>Guardian</em> article, which can be read online, differs from it in wording.
                  Always use the anthology version when answering Edexcel questions - examiners mark
                  against the anthology text, not online reproductions.
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
                في يناير 2003، سقطت مروحيّةُ المغامرَين البريطانيَّين Steve Brooks وQuentin Smith في
                البحر على بُعد نحو 100 ميل من أنتاركتيكا، فلجآ إلى طوّافة نجاة، واتّصل Brooks بزوجته
                في لندن من هاتفه الفضائيّ. وتلت ذلك عمليّةُ إنقاذ شاركت فيها البحريّة الملكيّة وسلاح
                الجوّ الملكيّ وخفر السواحل البريطانيّ، وانتهت بعد نحو تسع ساعات حين انتشلتهما سفينةٌ
                بحريّة تشيليّة.
              </p>
              <p>
                مقالُ Steven Morris، المنشورُ أصلاً في <em>The Guardian</em> في 28 يناير 2003، غطّى
                الحادثةَ لكنّه أطّرها بسؤال عنوانه: هل هذان مستكشفان، أم صبيّان يعبثان؟ ثمّ يُنحّي
                النصفُ الثاني من العنوان السؤالَ جانباً: أيّاً كان الجواب، فدافعُ الضرائب هو مَن
                يدفع فاتورة الإنقاذ.
              </p>
              <p>
                النصّ دراسةٌ نافعة في{' '}
                <strong className="text-foreground">كيف يُشكّل المقالُ الصحفيّ الرأيَ</strong> بينما
                يبدو وكأنّه ينقل وقائع محايدة - عبر اختيار الاقتباسات، وترتيب الأدلّة، ومفرداتٍ
                مُحمَّلة.
              </p>
            </>
          ) : (
            <>
              <p>
                In January 2003, two British adventurers, Steve Brooks and Quentin Smith, came down
                in the sea in their helicopter about 100 miles off Antarctica and climbed into their
                liferaft. Brooks rang his wife in London by satellite phone. British coastguards,
                the RAF and the Royal Navy all took part in the rescue that followed, which ended
                about nine hours later, when a Chilean naval vessel picked the men up.
              </p>
              <p>
                Steven Morris&apos;s article, originally published in <em>The Guardian</em> on 28
                January 2003, reported the incident but framed it through its headline&apos;s
                question: were these men explorers, or boys messing about? The headline&apos;s
                second half then sets the question aside: whichever the answer, the taxpayer pays
                for the rescue.
              </p>
              <p>
                The text is a useful study of{' '}
                <strong className="text-foreground">how a newspaper article shapes opinion</strong>{' '}
                while appearing to report neutral facts - through choice of quotations, ordering of
                evidence, and loaded vocabulary.
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
            © Guardian News &amp; Media Ltd 2016 (كما تذكره المختارات في قسم الشكر). النسخةُ
            المدروسة هنا هي النصّ المُكيَّف المطبوع في مختارات Pearson Edexcel IGCSE Issue 8 (ISBN
            978-1-446-93108-0). الشروحاتُ والصياغاتُ القصيرة في هذه الصفحة لأغراض النقد والمراجعة
            والاقتباس بمقتضى CDPA 1988 §30. وتنشر Pearson المختاراتِ كاملةً مجّاناً، فارجع إليها
            للنصّ الكامل.
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            {/* Holder and year as the anthology's acknowledgements give them;
                until 26 September 2026 this read "2003 / Steven Morris" and "Issue 2". */}
            &copy; Guardian News &amp; Media Ltd 2016 (as acknowledged in the anthology). The
            version studied here is the adapted text printed in the Pearson Edexcel IGCSE Anthology
            Issue 8 (ISBN 978-1-446-93108-0). Brief paraphrases on this page are for criticism,
            review and quotation under CDPA 1988 &sect;30. Pearson publishes the full anthology
            free; use it for the full text.
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
