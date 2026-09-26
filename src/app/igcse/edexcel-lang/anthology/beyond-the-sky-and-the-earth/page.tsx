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
 */
const themes = [
  {
    label: 'Culture shock',
    labelAr: 'الصدمة الثقافيّة',
    detail:
      'Zeppa arrives in Bhutan as a stranger and the text registers the small disorientations of language, food, climate and custom that mark her early days.',
    detailAr:
      'تصل Zeppa إلى Bhutan غريبةً، ويرصد النصُّ التشوّشاتِ الصغيرة في اللغة والطعام والمناخ والعادات التي تَسِم أيّامها الأولى.',
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
      'Bhutan’s mountains are not ornament - they open the extract, shape Zeppa’s mood and make her feel how far from home she is. Landscape is presented as a force, not a backdrop.',
    detailAr:
      'جبالُ Bhutan ليست زينةً - هي تفتتح المقتطف، وتُشكّل مزاج Zeppa، وتُشعرها بمدى بُعدها عن الديار. ويُقدَّم المنظر بوصفه قوّةً لا خلفيّة.',
  },
  {
    label: 'Learning about Bhutan',
    labelAr: 'التعرّف إلى Bhutan',
    detail:
      'At a week-long orientation Zeppa has her first lessons in Bhutanese history, and the extract ends on her admiration for a small country that kept its independence while European powers overran the rest of Asia. The change the full memoir describes lies beyond the extract.',
    detailAr:
      'في دورةٍ تعريفيّة مدّتها أسبوع، تتلقّى Zeppa دروسها الأولى في تاريخ Bhutan، وينتهي المقتطف بإعجابها ببلدٍ صغير حافظ على استقلاله بينما اجتاحت القوى الأوروبيّة بقيّة آسيا. أمّا التحوّل الذي تصفه السيرة كاملةً فيقع خارج المقتطف.',
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
    'Zeppa opens with arrival - the disorientation, the unfamiliar sights, the gap between expectation and reality. The reader arrives with her.',
  openingAr:
    'تستهلّ Zeppa بالوصول - التشوّشُ، المشاهدُ غيرُ المألوفة، الفجوةُ بين التوقّع والواقع. ويصل القارئ معها.',
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
    'Zeppa wants to convey the slow, internal experience of culture shock and adjustment without exoticising the place or romanticising her own role.',
  achieveAr:
    'تريد Zeppa أن تنقل التجربةَ البطيئة الداخليّة للصدمة الثقافيّة والتأقلم، دون أن تستغرب المكان أو تُمَوّه دورها.',
  readerFeel:
    'She wants the reader to feel the texture of unfamiliarity - the exhaustion, cold and strangeness of a first night abroad - and then to share her growing fascination with the country and its history.',
  readerFeelAr:
    'تريد للقارئ أن يحسّ نسيجَ الغرابة - الإنهاكَ والبردَ وغرابةَ الليلة الأولى في بلدٍ أجنبيّ - ثمّ أن يشاركها افتتانها المتنامي بالبلد وتاريخه.',
  message:
    'A place changes the person who lives in it. Genuine encounter requires patience, humility and willingness to be changed.',
  messageAr:
    'المكانُ يُغيّر مَن يعيش فيه. واللقاءُ الحقّ يستوجب الصبرَ والتواضعَ والاستعدادَ للتغيّر.',
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

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both writers describe long-term relationships with remote places. Compare Herbert’s childhood-rooted connection with Zeppa’s adult-arrival adjustment.',
    reasonAr:
      'تصف الكاتبتان علاقاتٍ طويلة الأمد مع أماكنَ نائية. قارن صلةَ Herbert المُتجذّرة في الطفولة بتأقلم Zeppa الواصلةِ في سنّ الرشد.',
    themes: ['Place', 'Belonging', 'Memoir'],
    themesAr: ['المكان', 'الانتماء', 'السيرة'],
  },
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both texts feature outsiders observing unfamiliar cultures. Compare the day-trip spectator (Levine) with the long-stay resident (Zeppa).',
    reasonAr:
      'يُقدّم النصّان غريبتَين ترصدان ثقافاتٍ مجهولة. قارن المتفرّجةَ في زيارة يومٍ (Levine) بالمقيمة لفترةٍ طويلة (Zeppa).',
    themes: ['Travel', 'Culture', 'Outsider perspective'],
    themesAr: ['السفر', 'الثقافة', 'منظور الغريب'],
  },
  {
    title: 'Explorers or Boys Messing About?',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      'Both pieces concern travel into challenging environments. Compare Zeppa’s patient memoir with Morris’s sceptical journalism.',
    reasonAr:
      'يتناول النصّان السفرَ إلى بيئاتٍ عَسِرة. قارن سيرةَ Zeppa الصابرة بصحافة Morris المُرتابة.',
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
                Jamie Zeppa، كاتبةٌ كنديّة، سافرت إلى Bhutan عام 1988 لتدريس الإنجليزيّة في مدرسةٍ
                نائية ضمن برنامج معونةٍ كنديّ. وكتاب <em>Beyond the Sky and the Earth</em> هو سيرتها
                مع تلك التجربة - الوصول والتأقلّم وصلةٌ عميقة فيما بعد بالبلد وأهله.
              </p>
              <p>
                النصُّ المدروس هنا مقتطفٌ من الفصول المبكّرة، حين كانت Zeppa لا تزال تتعامل مع
                الصدمة الثقافيّة، ومع وعورة البُعد عن الديار في مكانٍ لم تستوعب عاداته بعد.
              </p>
            </>
          ) : (
            <>
              {/* Corrected 26 September 2026. This said "the late 1980s"; Kirkus
                  gives 1988 (the anthology's note gives only her age, 24). A
                  closing line said "Published by Penguin Canada", which the
                  anthology does not say: its acknowledgements (p.71) name
                  Riverhead Books, 2000, as the footer below now does, so the
                  line was removed in both languages. */}
              <p>
                Jamie Zeppa, a Canadian writer, travelled to Bhutan in 1988 to teach English at a
                remote school as part of a Canadian aid programme.{' '}
                <em>Beyond the Sky and the Earth</em> is her memoir of the experience - arrival,
                adjustment, and eventual deep connection to the country and its people.
              </p>
              <p>
                The text studied here is an extract from the early sections, when Zeppa is still
                navigating culture shock and the difficulty of being far from home in a place whose
                customs she does not yet understand.
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
