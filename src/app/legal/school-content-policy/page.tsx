import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'School content policy',
  description:
    'How The English Hub selects, frames and gates set-text content for GCSE, IGCSE and KS3 English — including content-guidance practice for international and culturally-sensitive markets such as the GCC.',
  alternates: { canonical: 'https://theenglishhub.app/legal/school-content-policy' },
  openGraph: {
    title: 'School content policy — The English Hub',
    description:
      'How The English Hub selects, frames and gates set-text content. Cultural-review practice for international and GCC-region schools.',
  },
}

export default function SchoolContentPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Legal', url: 'https://theenglishhub.app/legal' },
          {
            name: 'School content policy',
            url: 'https://theenglishhub.app/legal/school-content-policy',
          },
        ]}
      />
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        School content policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 20 May 2026.</p>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          What this policy covers
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          The English Hub helps students prepare for the United Kingdom GCSE, IGCSE, KS3 and A-Level
          English examinations sat under{' '}
          <strong className="text-foreground">
            AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge International (CAIE), and Pearson
            Edexcel International
          </strong>
          . This policy explains how we select, frame and gate the set-text content for those
          examinations — including the practical steps we take for international markets where some
          published syllabus texts touch on themes that require cultural review.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Content is set by the published exam syllabus
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          The set texts we cover are{' '}
          <strong className="text-foreground">defined by the awarding bodies</strong>, not by The
          English Hub. Schools and students who sit an examination are required to study the
          syllabus prescribed for it. We support that examination by providing study guides, themes,
          character analysis, quotation maps and essay plans that map onto the published assessment
          objectives.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          We do not introduce content beyond what the syllabus requires. We frame every text
          academically — examiners reward critical analysis of theme, structure, language and
          context; not gratuitous content.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">Content guidance</h2>
        <p className="leading-relaxed text-muted-foreground">
          Every set-text page on The English Hub carries a short{' '}
          <strong className="text-foreground">content guidance</strong> block at the top, listing
          the major themes present in the published text. This mirrors standard educational practice
          in the exam-board teaching materials themselves and lets school leaders, parents and
          teachers see at a glance whether a given text is right for their cohort.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Where a text contains themes that require cultural review — for example violence,
          mortality, intimate-relationship content, supernatural elements, political allegory or
          religious imagery — the content guidance block lists those themes specifically.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          International and GCC schools
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          For international schools — including those in Qatar, Saudi Arabia, the United Arab
          Emirates, Kuwait, Bahrain, Oman and the wider region — we recommend{' '}
          <strong className="text-foreground">Cambridge IGCSE English Language</strong>{' '}
          (specifications 0500 and 0990) as the starting point. Cambridge IGCSE English Language is{' '}
          <strong className="text-foreground">
            a language-only qualification with no set-text literature requirement
          </strong>
          , which avoids the literature-driven content review entirely while still preparing
          students for the same university entry standards.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Visitors from those regions are automatically shown Cambridge IGCSE 0500 / 0990 as the
          recommended choice on our board-selection page. Schools remain free to choose any syllabus
          they wish.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          For schools sitting Cambridge IGCSE Literature (0475), Pearson Edexcel IGCSE Literature
          (4ET1) or any of the United Kingdom GCSE Literature specifications, the content guidance
          block on each set-text page is the primary signal for teachers and parents on whether to
          assign that text — exactly as the published exam-board materials advise.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">What we do not do</h2>
        <ul className="space-y-2 leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">
              We do not introduce content beyond the syllabus.
            </strong>{' '}
            Every page on the platform either maps to a published assessment objective or is a study
            tool (flashcards, quizzes, essay practice) that supports one.
          </li>
          <li>
            <strong className="text-foreground">We do not censor exam-required content.</strong>{' '}
            Hiding a syllabus text from a student who is going to be examined on it would harm their
            preparation. Where a published set text contains themes that require cultural review, we
            surface those themes in the content guidance block so the school can decide.
          </li>
          <li>
            <strong className="text-foreground">We do not use gratuitous illustration.</strong>{' '}
            Marketing pages, demo dashboards and worksheets are reviewed for cultural fit
            independently of the syllabus content.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">Questions</h2>
        <p className="leading-relaxed text-muted-foreground">
          Schools and teachers can review every text we cover before assigning content to students.
          If you have questions about how a particular text is framed, or want to discuss a tailored
          content review for your school, please get in touch at{' '}
          <a
            href="mailto:info@upskillenergy.com"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            info@upskillenergy.com
          </a>{' '}
          or via our{' '}
          <Link
            href="/contact"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </main>
  )
}
