import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  title: 'Report texts - reading and writing guide (KS3 iLowerSecondary English)',
  description:
    'How to read and write report texts for Pearson Edexcel iLowerSecondary English (LEH11): conventions, impersonal language, structure analysis, two annotated original report extracts, practice questions with model answers and a writing task.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/text-types/reports',
  },
  openGraph: {
    title: 'Report texts - reading and writing guide - The English Hub',
    description:
      'Conventions of report writing, distinguishing reports from recounts and articles, annotated original extracts, and exam-style practice for KS3 iLowerSecondary English.',
  },
}

// All extracts, data and figures below are ORIGINAL works invented by The
// English Hub purely as teaching examples. No statistic is real.

type Annotation = { feature: string; note: string }

const INFORMATION_REPORT: { lines: string[]; annotations: Annotation[] } = {
  lines: [
    'The Glasswing Marmot',
    'Habitat',
    'The glasswing marmot is a small burrowing mammal. It is found only on the high meadows of the invented Sela Plateau. It lives in deep tunnel systems below the frost line.',
    'Diet and behaviour',
    'The marmot feeds on mountain grasses and roots. It is active during daylight and shelters underground at night. Colonies are organised around a single breeding pair.',
  ],
  annotations: [
    {
      feature: 'Title and sub-headings ("Habitat", "Diet and behaviour")',
      note: 'The information is classified into topics rather than told as a story. Sub-headings let a reader find a section quickly - a structural choice you can comment on for RAO3.',
    },
    {
      feature: 'Third person, no named writer ("It is found", "The marmot feeds")',
      note: 'There is no "I" or "you". The impersonal voice keeps the focus on the subject, not the writer, which signals an objective, factual purpose.',
    },
    {
      feature: 'Present tense for general truths ("It lives", "Colonies are organised")',
      note: 'A report describes how something generally is, not a single past event. This timeless present tense is a key marker that separates a report from a recount.',
    },
    {
      feature: 'Formal, precise vocabulary ("burrowing mammal", "tunnel systems", "colonies")',
      note: 'Word choices are technical and neutral, with no emotive or persuasive language. (Note: the Sela Plateau and this animal are invented for this example.)',
    },
  ],
}

const FINDINGS_REPORT: { lines: string[]; annotations: Annotation[] } = {
  lines: [
    'Report on the Year 9 Reading Survey',
    'Introduction',
    'This report presents the findings of a survey carried out in our (imaginary) school to investigate reading habits in Year 9. A questionnaire was completed by every student in the year group.',
    'Findings',
    'The survey shows that most students read on a screen rather than on paper. In the invented sample, 68% of students reported reading mainly online. Fiction remained the most popular type of text.',
    'Conclusion and recommendations',
    'The findings suggest that pupils read regularly but increasingly on screens. It is therefore recommended that the library expands its range of digital texts.',
  ],
  annotations: [
    {
      feature: 'Clearly invented data ("the invented sample, 68%")',
      note: 'Real reports use evidence and figures. Here the figure is openly labelled as invented so it is never mistaken for genuine research - but it shows how a finding is supported by data.',
    },
    {
      feature:
        'Impersonal, passive constructions ("A questionnaire was completed", "It is recommended")',
      note: 'The passive voice removes the writer from the sentence and makes the report sound objective. This is rich material for an RAO4 comment on grammatical choices.',
    },
    {
      feature: 'Logical organisation: Introduction → Findings → Conclusion/recommendations',
      note: 'The structure moves from method, to evidence, to a judgement based on the evidence. A recount would be ordered by time; this report is ordered by function.',
    },
    {
      feature: 'Conclusion drawn from the evidence ("The findings suggest…")',
      note: 'The recommendation is tied back to the data, not to personal opinion. Reports reason from evidence to a measured conclusion.',
    },
  ],
}

type Practice = { q: string; ao: string; model: string }

const PRACTICE: Practice[] = [
  {
    q: 'Identify two language features that show the first extract is a report rather than a recount.',
    ao: 'RAO3 / RAO4',
    model:
      'It uses the present tense for general truths ("The marmot feeds on mountain grasses"), describing what usually happens rather than one past event, and it is written impersonally in the third person with no "I", so it informs about a subject rather than retelling a personal experience in time order.',
  },
  {
    q: 'How does the writer of the survey report organise the information? (Comment on structure.)',
    ao: 'RAO3',
    model:
      'The report is organised by function under sub-headings. The "Introduction" explains how the data was gathered, the "Findings" section presents the evidence, and the "Conclusion and recommendations" section draws a measured judgement from that evidence. This logical, classified order - rather than a time order - helps the reader locate information and shows the writer reasoning from evidence to a recommendation.',
  },
  {
    q: 'Explain the effect of the passive construction "It is therefore recommended that the library expands its range of digital texts."',
    ao: 'RAO4',
    model:
      'The passive voice removes any named person from the sentence, so the recommendation appears to come from the evidence itself rather than from one writer’s opinion. This creates an objective, impersonal tone that makes the conclusion sound reliable and authoritative to the reader.',
  },
  {
    q: 'Give one difference between a report and a newspaper or magazine article.',
    ao: 'RAO5',
    model:
      'A report aims to inform objectively, using a neutral, impersonal tone and evidence to classify factual information. An article often also aims to interest or persuade its readership, so it may use a livelier voice, opinion, the writer’s viewpoint and emotive language that a report deliberately avoids.',
  },
]

const NON_FICTION_PROMPTS = GUIDED_READING_PROMPTS.nonFiction

export default function ReportsTextTypePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Text types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types',
          },
          {
            name: 'Reports',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types/reports',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="Report texts - reading and writing guide"
        description="A KS3 iLowerSecondary English guide to report texts: conventions, impersonal language, structure analysis, annotated original extracts and exam-style practice for LEH11."
        educationalLevel="KS3"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/ks3/ilowersecondary/text-types/reports"
        about="Report texts"
        audienceRole="student"
        isAccessibleForFree={true}
      />

      <main className="mx-auto my-12 max-w-3xl px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                KS3
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3/ilowersecondary/text-types" className="hover:text-primary">
                Text types
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              Reports
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Text types &middot; Non-fiction
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold text-foreground">
            Report texts: reading and writing
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            The report is one of the non-fiction text types you study for the Pearson Edexcel
            iLowerSecondary English achievement test. This guide shows you how to recognise a report
            when you read one, how to comment on its structure and impersonal language in Section A,
            and how to write a clear, well-organised report in Section B. Every example text on this
            page is an original work; any data is invented and clearly labelled so it is never
            mistaken for real research.
          </p>
        </header>

        <section
          aria-labelledby="conventions"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="conventions" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Conventions of a report
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            A report sets out factual information about a subject in an organised, objective way.
            Its purpose is usually to <em>{NON_FICTION_PURPOSES[3]}</em> &mdash; to give the reader
            accurate knowledge rather than to entertain or persuade. Look for these features:
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Objective, impersonal tone.</span> The
              writer stays out of the text. There is little or no opinion, and emotive or persuasive
              language is avoided.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Third person.</span> The subject is
              described using &ldquo;it&rdquo;, &ldquo;they&rdquo; or noun phrases, not
              &ldquo;I&rdquo; or &ldquo;you&rdquo;. The passive voice is common (&ldquo;a survey was
              carried out&rdquo;).
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">
                Present tense for general truths.
              </span>{' '}
              A report describes how things generally are (&ldquo;water boils at 100&deg;C&rdquo;),
              not a single past event.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Headings and sub-headings.</span>{' '}
              Information is broken into labelled sections so a reader can find what they need.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">
                Classification and factual organisation.
              </span>{' '}
              Content is grouped by topic (habitat, diet, findings) rather than ordered by time.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Formal vocabulary.</span> Precise,
              often technical words are chosen for clarity, not for effect.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Evidence and figures.</span> Claims
              are supported with data, examples or measurements.
            </li>
            <li className="border-l-4 border-primary/40 pl-4">
              <span className="font-semibold text-foreground">Conclusion or recommendations.</span>{' '}
              Many reports end by drawing a measured conclusion from the evidence, sometimes
              recommending action.
            </li>
          </ul>
        </section>

        <section aria-labelledby="distinguish" className="mb-12">
          <h2 id="distinguish" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Telling a report apart from a recount and an article
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            In the reading section you may need to identify a text type and justify your choice. A
            report sits alongside the other non-fiction types you study, including the{' '}
            <em>{NON_FICTION_TEXT_TYPES[6]}</em> and <em>{NON_FICTION_TEXT_TYPES[4]}</em>. These
            three are easy to confuse, so compare them directly:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-left text-foreground">
                  <th className="border border-border/60 p-3 font-semibold">Feature</th>
                  <th className="border border-border/60 p-3 font-semibold">Report</th>
                  <th className="border border-border/60 p-3 font-semibold">Recount</th>
                  <th className="border border-border/60 p-3 font-semibold">Article</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="border border-border/60 p-3 font-medium">Main purpose</td>
                  <td className="border border-border/60 p-3">Inform objectively</td>
                  <td className="border border-border/60 p-3">Retell what happened</td>
                  <td className="border border-border/60 p-3">
                    Inform and interest, often with a viewpoint
                  </td>
                </tr>
                <tr className="bg-card">
                  <td className="border border-border/60 p-3 font-medium">Tense</td>
                  <td className="border border-border/60 p-3">Present (general truths)</td>
                  <td className="border border-border/60 p-3">Past (a finished event)</td>
                  <td className="border border-border/60 p-3">Mixed, depending on the story</td>
                </tr>
                <tr>
                  <td className="border border-border/60 p-3 font-medium">Voice</td>
                  <td className="border border-border/60 p-3">Impersonal third person</td>
                  <td className="border border-border/60 p-3">
                    Often first person (&ldquo;I&rdquo;, &ldquo;we&rdquo;)
                  </td>
                  <td className="border border-border/60 p-3">
                    Can be personal; uses the writer&rsquo;s voice
                  </td>
                </tr>
                <tr className="bg-card">
                  <td className="border border-border/60 p-3 font-medium">Organisation</td>
                  <td className="border border-border/60 p-3">
                    Classified by topic, with sub-headings
                  </td>
                  <td className="border border-border/60 p-3">Chronological (time order)</td>
                  <td className="border border-border/60 p-3">
                    Headline, hook, then developed points
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/60 p-3 font-medium">Language</td>
                  <td className="border border-border/60 p-3">Formal, neutral, evidence-based</td>
                  <td className="border border-border/60 p-3">
                    Descriptive, often personal feelings
                  </td>
                  <td className="border border-border/60 p-3">May be emotive or persuasive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          aria-labelledby="extract-1"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="extract-1" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Annotated extract 1: an information report
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            An original example. The place and animal below are invented for teaching.
          </p>
          <div className="mb-6 space-y-2 rounded bg-card p-5 font-heading text-foreground border border-border/60">
            {INFORMATION_REPORT.lines.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg font-semibold'
                    : i === 1 || i === 3
                      ? 'font-semibold text-primary'
                      : 'leading-relaxed'
                }
              >
                {line}
              </p>
            ))}
          </div>
          <ol className="space-y-4">
            {INFORMATION_REPORT.annotations.map((a) => (
              <li key={a.feature} className="border-l-4 border-primary/40 pl-4">
                <p className="text-sm font-semibold text-foreground">{a.feature}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="extract-2"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="extract-2" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Annotated extract 2: a findings report
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            An original example. The school and every figure below are invented for teaching and are
            not real research.
          </p>
          <div className="mb-6 space-y-2 rounded bg-card p-5 font-heading text-foreground border border-border/60">
            {FINDINGS_REPORT.lines.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg font-semibold'
                    : i === 1 || i === 3 || i === 5
                      ? 'font-semibold text-primary'
                      : 'leading-relaxed'
                }
              >
                {line}
              </p>
            ))}
          </div>
          <ol className="space-y-4">
            {FINDINGS_REPORT.annotations.map((a) => (
              <li key={a.feature} className="border-l-4 border-primary/40 pl-4">
                <p className="text-sm font-semibold text-foreground">{a.feature}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="reading" className="mb-12">
          <h2 id="reading" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Reading a report in Section A
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            When a report appears as an unseen text, questions often test how you analyse its{' '}
            <strong>structure and organisation</strong> and the writer&rsquo;s{' '}
            <strong>impersonal language at word and sentence level</strong>. Use these prompts,
            drawn from the iLowerSecondary guided-reading approach, to interrogate a report as you
            read:
          </p>
          <div className="space-y-5">
            {Object.entries(NON_FICTION_PROMPTS).map(([heading, prompts]) => (
              <div key={heading} className="rounded-lg bg-muted p-5 border border-border/60">
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {heading}
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {prompts.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            For a structure question, name the organisational choice (e.g. sub-headings,
            classification by topic, an introduction followed by findings then a conclusion) and
            explain its effect on the reader. For a language question, point to a specific
            impersonal feature &mdash; the passive voice, third person, present tense, or a piece of
            formal vocabulary &mdash; quote it, and explain how it creates an objective, factual
            effect.
          </p>
        </section>

        <section aria-labelledby="practice" className="mb-12">
          <h2 id="practice" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Practice questions with model answers
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            These questions refer to the two annotated extracts above. Try each one before you read
            the model answer.
          </p>
          <ol className="space-y-6">
            {PRACTICE.map((item, i) => (
              <li key={i} className="rounded-lg bg-muted p-5 border border-border/60">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-primary">
                    Q{i + 1} &middot; {item.ao}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-foreground">{item.q}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Model answer: </span>
                  {item.model}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="writing-task"
          className="mb-12 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="writing-task"
            className="mb-4 font-heading text-2xl font-semibold text-foreground"
          >
            Writing a report for Section B
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            If the writing task asks for a report, plan a clear set of sections before you start.
            Open with a short introduction stating the subject, group your information under
            sub-headings, support points with examples or figures, keep the tone impersonal
            throughout, and finish with a conclusion or recommendation drawn from what you have
            said.
          </p>
          <div className="mb-6 rounded bg-card p-5 border border-border/60">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Original task
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              Your school is opening a new student garden. Write a report for the head teacher about
              how the garden could be used. Set out your ideas clearly under sub-headings and end
              with a recommendation.
            </p>
          </div>
          <div className="rounded bg-card p-5 border border-border/60">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
              Model opening (original)
            </p>
            <div className="space-y-2 font-heading text-sm leading-relaxed text-foreground">
              <p className="font-semibold">Report on the Use of the New Student Garden</p>
              <p className="font-semibold text-primary">Introduction</p>
              <p>
                This report sets out how the new student garden could be used across the school
                year. The information is presented under three sub-headings: lessons, well-being and
                growing food. A recommendation is given at the end.
              </p>
              <p className="font-semibold text-primary">Lessons</p>
              <p>
                The garden can support several subjects. Science classes can study plant growth on
                site, and geography lessons can use it to examine soil and weather.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Notice how the opening establishes the form at once: a title, an introduction that
            previews the structure, the impersonal third person (&ldquo;This report sets
            out&rdquo;), the present tense, and sub-headings that classify the content. Carry these
            conventions through every section and close with a conclusion that recommends a clear
            course of action.
          </p>
        </section>

        <footer className="mt-16 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2">
            This page is study guidance for the Pearson Edexcel International Award in Lower
            Secondary English (LEH11). It is used for the purpose of criticism, review and
            instruction. All example report extracts, tasks and data on this page are original works
            written by The English Hub; any figures are invented for teaching and are not real
            research.
          </p>
          <p>{SPEC_ATTRIBUTION}</p>
        </footer>
      </main>
    </>
  )
}
