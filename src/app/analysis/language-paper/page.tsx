import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'AQA English Language Paper 1 & Paper 2 Technique Guides',
  description:
    'Question-by-question AQA English Language Paper 1 and Paper 2 technique guides for GCSE. Grade 9 model answers, marking guides explained, timing and marker tips. Written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/language-paper' },
  openGraph: {
    title: 'AQA Language Paper 1 & 2 Technique Guides - The English Hub',
    description:
      'Grade 9 walkthroughs for every AQA English Language Paper 1 and Paper 2 question, written by GCSE markers.',
  },
}

const paper1Questions = [
  {
    slug: 'aqa-language-paper-1-question-1-guide',
    title: 'Paper 1 Question 1 - List 4 things (4 marks)',
  },
  {
    slug: 'aqa-language-paper-1-question-2-language-analysis',
    title: 'Paper 1 Question 2 - Language analysis (8 marks)',
  },
  {
    slug: 'aqa-language-paper-1-question-3-structure',
    title: 'Paper 1 Question 3 - Structure (8 marks)',
  },
  {
    slug: 'aqa-language-paper-1-question-4-evaluation',
    title: 'Paper 1 Question 4 - Evaluation (20 marks)',
  },
  {
    slug: 'aqa-language-paper-1-question-5-creative-writing',
    title: 'Paper 1 Question 5 - Creative writing (40 marks)',
  },
]

const paper1Technique = [
  {
    slug: 'paper-1-descriptive-writing-grade-9-guide',
    title: 'Paper 1 descriptive writing - Grade 9 guide',
  },
  {
    slug: 'paper-1-narrative-writing-grade-9-guide',
    title: 'Paper 1 narrative writing - Grade 9 guide',
  },
  { slug: 'paper-1-time-management-60-minutes', title: 'Paper 1 time management in 60 minutes' },
  {
    slug: 'paper-1-how-to-identify-language-techniques',
    title: 'How to identify language techniques (Paper 1)',
  },
  {
    slug: 'paper-1-structural-features-explained',
    title: 'Structural features explained (Paper 1 Q3)',
  },
]

const paper2Questions = [
  {
    slug: 'aqa-language-paper-2-question-1-true-false',
    title: 'Paper 2 Question 1 - True/false (4 marks)',
  },
  {
    slug: 'aqa-language-paper-2-question-2-summary',
    title: 'Paper 2 Question 2 - Summary (8 marks)',
  },
  {
    slug: 'aqa-language-paper-2-question-3-language',
    title: 'Paper 2 Question 3 - Language (12 marks)',
  },
  {
    slug: 'aqa-language-paper-2-question-4-comparison',
    title: 'Paper 2 Question 4 - Comparison (16 marks)',
  },
  {
    slug: 'aqa-language-paper-2-question-5-transactional',
    title: 'Paper 2 Question 5 - Transactional writing (40 marks)',
  },
]

const paper2Technique = [
  {
    slug: 'paper-2-article-writing-grade-9-guide',
    title: 'Paper 2 article writing - Grade 9 guide',
  },
  { slug: 'paper-2-letter-writing-grade-9-guide', title: 'Paper 2 letter writing - Grade 9 guide' },
  { slug: 'paper-2-speech-writing-grade-9-guide', title: 'Paper 2 speech writing - Grade 9 guide' },
  { slug: 'paper-2-summary-question-step-by-step', title: 'Paper 2 summary question step-by-step' },
  {
    slug: 'paper-2-comparison-question-phrases-to-use',
    title: 'Paper 2 comparison question - phrases to use',
  },
]

const generalTechnique = [
  {
    slug: '25-language-techniques-every-student-must-know',
    title: '25 language techniques every student must know',
  },
  {
    slug: 'persuasive-techniques-aforest-dafforest-explained',
    title: 'AFOREST and DAFFOREST persuasive techniques explained',
  },
  {
    slug: 'language-paper-grade-9-vocabulary-bank',
    title: 'Language Paper Grade 9 vocabulary bank',
  },
  {
    slug: 'common-mistakes-aqa-language-paper-1',
    title: 'Common mistakes in AQA Language Paper 1',
  },
  {
    slug: 'common-mistakes-aqa-language-paper-2',
    title: 'Common mistakes in AQA Language Paper 2',
  },
]

export default async function LanguagePaperAnalysisHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const tBreadHome = await t('analysis.breadcrumb.home')
  const tBreadAnalysis = await t('analysis.breadcrumb.analysis')
  const tBreadLang = await t('analysis.lang.breadcrumb_current')
  const tH1 = await t('analysis.lang.h1')
  const tByline = await t('analysis.byline.markers')
  const tIntro = await t('analysis.lang.intro')
  const tHowH2 = await t('analysis.how_to_use.h2')
  const tHowBody = await t('analysis.lang.how.body')
  const tHowCta = await t('analysis.lang.how.cta')
  const tP1QH2 = await t('analysis.lang.p1q.h2')
  const tP1QBody = await t('analysis.lang.p1q.body')
  const tP1TH2 = await t('analysis.lang.p1t.h2')
  const tP1TBody = await t('analysis.lang.p1t.body')
  const tP2QH2 = await t('analysis.lang.p2q.h2')
  const tP2QBody = await t('analysis.lang.p2q.body')
  const tP2TH2 = await t('analysis.lang.p2t.h2')
  const tP2TBody = await t('analysis.lang.p2t.body')
  const tGenH2 = await t('analysis.lang.gen.h2')
  const tGenBody = await t('analysis.lang.gen.body')
  const tFootH2 = await t('analysis.lang.foot.h2')
  const tFootBody = await t('analysis.lang.foot.body')
  const tFootCta = await t('analysis.lang.foot.cta')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AQA English Language Paper 1 & 2 Technique Hub',
    description:
      'A collection of AQA English Language Paper 1 and Paper 2 technique guides, covering every question and the writing tasks, for GCSE students.',
    url: 'https://theenglishhub.app/analysis/language-paper',
    author: { '@type': 'Organization', name: 'The English Hub' },
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LearningResourceJsonLd
        name="AQA English Language Paper 1 & Paper 2 Technique Guides"
        description="Question-by-question AQA English Language Paper 1 and Paper 2 technique guides for GCSE. Grade 9 model answers, marking guides explained, timing and marker tips. Written by GCSE markers."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="AQA English Language Paper 1 and Paper 2"
        url="https://theenglishhub.app/analysis/language-paper"
        nonce={nonce}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
          {
            name: 'AQA English Language Paper 1 & Paper 2 Technique Guides',
            url: 'https://theenglishhub.app/analysis/language-paper',
          },
        ]}
        nonce={nonce}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {tBreadHome}
        </Link>
        <span className="mx-2">/</span>
        <span>{tBreadAnalysis}</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">{tBreadLang}</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{tH1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{tByline}</p>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{tIntro}</p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">{tHowH2}</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">{tHowBody}</p>
        <div className="mt-4">
          <Link
            href="/revision/language"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            {tHowCta}
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{tP1QH2}</h2>
        <p className="mt-2 text-muted-foreground">{tP1QBody}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper1Questions.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{tP1TH2}</h2>
        <p className="mt-2 text-muted-foreground">{tP1TBody}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper1Technique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{tP2QH2}</h2>
        <p className="mt-2 text-muted-foreground">{tP2QBody}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper2Questions.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{tP2TH2}</h2>
        <p className="mt-2 text-muted-foreground">{tP2TBody}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper2Technique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">{tGenH2}</h2>
        <p className="mt-2 text-muted-foreground">{tGenBody}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {generalTechnique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">{tFootH2}</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">{tFootBody}</p>
        <div className="mt-4">
          <Link
            href="/revision/language"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            {tFootCta}
          </Link>
        </div>
      </section>
    </main>
  )
}
