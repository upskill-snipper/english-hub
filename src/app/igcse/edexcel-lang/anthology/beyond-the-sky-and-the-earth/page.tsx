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
    'Beyond the Sky and the Earth — Jamie Zeppa — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for "Beyond the Sky and the Earth: A Journey into Bhutan" by Jamie Zeppa. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
  },
}

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
    label: 'Isolation and adjustment',
    labelAr: 'العزلة والتأقلم',
    detail:
      'Far from home, Zeppa must build a sense of place and routine from scratch. The text traces the slow shift from outsider to inhabitant.',
    detailAr:
      'بعيدةً عن الديار، يلزم Zeppa أن تبني الشعور بالمكان والروتين من الصفر. ويتتبّع النصُّ الانتقال البطيء من غريبةٍ إلى مقيمة.',
  },
  {
    label: 'Beauty and landscape',
    labelAr: 'الجمال والمنظر',
    detail:
      'Bhutan’s mountains are not ornament — they shape Zeppa’s mood, her teaching, her sense of time. Landscape is presented as a force, not a backdrop.',
    detailAr:
      'جبالُ Bhutan ليست زينةً — هي تُشكّل مزاج Zeppa، وتدريسها، وإحساسها بالزمن. ويُقدَّم المنظر بوصفه قوّةً لا خلفيّة.',
  },
  {
    label: 'Transformation',
    labelAr: 'التحوّل',
    detail:
      'The journey is internal as much as geographic. Zeppa is changed by the place, and the text shows the change happening rather than reporting it.',
    detailAr:
      'الرحلةُ داخليّةٌ بقدر ما هي جغرافيّة. يُغيّر المكانُ Zeppa، ويُرينا النصُّ التغيّرَ يحدث لا يُبلَّغ عنه.',
  },
  {
    label: 'Reflection and memoir',
    labelAr: 'التأمّل والسيرة',
    detail:
      'Zeppa writes from the perspective of someone looking back — the older voice processing the younger self’s experience.',
    detailAr:
      'تكتب Zeppa من منظور النظر إلى الوراء — صوتُ الذات الأكبر يستوعب تجربةَ الذات الأصغر.',
  },
]

const structuralAnalysis = {
  opening:
    'Zeppa opens with arrival — the disorientation, the unfamiliar sights, the gap between expectation and reality. The reader arrives with her.',
  openingAr:
    'تستهلّ Zeppa بالوصول — التشوّشُ، المشاهدُ غيرُ المألوفة، الفجوةُ بين التوقّع والواقع. ويصل القارئ معها.',
  development:
    'The text develops through accumulating detail: small encounters, lessons in language, growing relationships with students and colleagues. The shift from outside to inside happens gradually.',
  developmentAr:
    'يتطوّر النصُّ عبر تراكم التفاصيل: لقاءاتٌ صغيرة، دروسٌ في اللغة، علاقاتٌ تنمو مع الطلاب والزملاء. ويحدث الانتقالُ من الخارج إلى الداخل تدريجاً.',
  climax:
    'There is no single dramatic climax; instead, the text reaches a quiet emotional peak when Zeppa realises she has begun to feel at home.',
  climaxAr:
    'لا توجد ذروةٌ دراميّةٌ واحدة؛ بل يبلغ النصّ ذروةً عاطفيّةً هادئة حين تُدرك Zeppa أنّها بدأت تشعر بأنّها في الديار.',
  resolution:
    'The resolution is reflective rather than tidy — Zeppa acknowledges that she has been changed but does not pretend to have understood Bhutan completely.',
  resolutionAr:
    'الخاتمة تأمّليّةٌ لا مرتّبة — تُقرّ Zeppa بأنّها قد تغيّرت، لكنّها لا تدّعي أنّها فهمت Bhutan بالكامل.',
  perspective:
    'First-person memoir, written with retrospective awareness. The older Zeppa understands what the younger Zeppa was experiencing.',
  perspectiveAr:
    'سيرةٌ بضمير المتكلّم، مكتوبةٌ بوعيٍ استرجاعيّ. تَفهم Zeppa الأكبرُ ما كانت تختبره Zeppa الأصغر.',
}

const writersPurpose = {
  achieve:
    'Zeppa wants to convey the slow, internal experience of culture shock and adjustment without exoticising the place or romanticising her own role.',
  achieveAr:
    'تريد Zeppa أن تنقل التجربةَ البطيئة الداخليّة للصدمة الثقافيّة والتأقلم، دون أن تستغرب المكان أو تُمَوّه دورها.',
  readerFeel:
    'She wants the reader to feel the texture of unfamiliarity becoming familiarity — the gradual softening of disorientation into belonging.',
  readerFeelAr:
    'تريد للقارئ أن يحسّ نسيجَ الغرابة وهي تصير ألفةً — الذوبانَ التدريجيّ للتشوّش في الانتماء.',
  message:
    'A place changes the person who lives in it. Genuine encounter requires patience, humility and willingness to be changed.',
  messageAr:
    'المكانُ يُغيّر مَن يعيش فيه. واللقاءُ الحقّ يستوجب الصبرَ والتواضعَ والاستعدادَ للتغيّر.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about Zeppa’s early experience in Bhutan.',
    questionAr: 'اذكر أربعةَ أشياء تعرفها عن تجربة Zeppa الأولى في Bhutan.',
    type: 'Retrieval — 4 marks',
    typeAr: 'الاسترجاع — ٤ درجات',
  },
  q2: {
    question:
      'How does Zeppa use language to convey her feelings of disorientation and adjustment?',
    questionAr: 'كيف تستعمل Zeppa اللغةَ لتنقل مشاعرها من التشوّش إلى التأقلم؟',
    type: 'Language analysis — 12 marks',
    typeAr: 'تحليل اللغة — ١٢ درجة',
  },
  q3: {
    question: 'How does Zeppa structure the text to chart her changing relationship with Bhutan?',
    questionAr: 'كيف تبني Zeppa النصَّ لرسم علاقتها المتبدّلة مع Bhutan؟',
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
                Jamie Zeppa، كاتبةٌ كنديّة، سافرت إلى Bhutan في أواخر الثمانينيّات لتدريس
                الإنجليزيّة في مدرسةٍ نائية ضمن برنامج معونةٍ كنديّ. وكتاب{' '}
                <em>Beyond the Sky and the Earth</em> هو سيرتها مع تلك التجربة — الوصول والتأقلّم
                وصلةٌ عميقة فيما بعد بالبلد وأهله.
              </p>
              <p>
                النصُّ المدروس هنا مقتطفٌ من الفصول المبكّرة، حين كانت Zeppa لا تزال تتعامل مع
                الصدمة الثقافيّة، ومع وعورة البُعد عن الديار في مكانٍ لم تستوعب عاداته بعد.
              </p>
              <p>صدر عن Penguin Canada.</p>
            </>
          ) : (
            <>
              <p>
                Jamie Zeppa, a Canadian writer, travelled to Bhutan in the late 1980s to teach
                English at a remote school as part of a Canadian aid programme.{' '}
                <em>Beyond the Sky and the Earth</em> is her memoir of the experience — arrival,
                adjustment, and eventual deep connection to the country and its people.
              </p>
              <p>
                The text studied here is an extract from the early sections, when Zeppa is still
                navigating culture shock and the difficulty of being far from home in a place whose
                customs she does not yet understand.
              </p>
              <p>Published by Penguin Canada.</p>
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
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q2.typeAr : examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q2.questionAr : examPractice.q2.question}
            </p>
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
            © Penguin Canada / Jamie Zeppa. الصياغات الموجزة في هذه الصفحة لأغراض النقد والمراجعة
            والاقتباس بمقتضى CDPA 1988 §30. للحصول على النصّ الكامل، يرجع الطلاب إلى الطبعة
            المدرسيّة المرخّصة (Pearson Edexcel IGCSE anthology، ISBN 978-1-446-93108-0).
          </p>
        ) : (
          <p>
            <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
            &copy; Penguin Canada / Jamie Zeppa. Brief paraphrases on this page are for criticism,
            review and quotation under CDPA 1988 &sect;30. For full text, students should consult
            the licensed school edition (Pearson Edexcel IGCSE anthology, ISBN 978-1-446-93108-0).
          </p>
        )}
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
