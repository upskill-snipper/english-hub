import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUALIFICATION, SECTIONS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/about'

export const metadata: Metadata = {
  title: 'About the qualification',
  description:
    `Plain-English facts about the ${QUALIFICATION.title} ` +
    `(${QUALIFICATION.subjectCode}): what it is, how it is assessed and ` +
    'graded, when it is sat, and what it leads to.',
  alternates: { canonical: PAGE_URL },
}

export default async function AboutPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'About', url: PAGE_URL },
  ]

  const facts: { k: string; v: string }[] = [
    { k: 'Full title', v: QUALIFICATION.title },
    { k: 'Subject code', v: QUALIFICATION.subjectCode },
    { k: 'Paper code', v: QUALIFICATION.paperCode },
    { k: 'Assessment', v: QUALIFICATION.assessment },
    {
      k: 'Length',
      v: `${QUALIFICATION.durationLabel} · ${QUALIFICATION.totalMarks} marks`,
    },
    { k: 'When it is sat', v: QUALIFICATION.availability.join(' and ') },
    { k: 'First teaching', v: QUALIFICATION.firstTeaching },
    { k: 'First assessment', v: QUALIFICATION.firstAssessment },
    { k: 'Current specification', v: QUALIFICATION.specIssue },
    {
      k: 'Dictionaries',
      v: QUALIFICATION.dictionariesAllowed ? 'Allowed' : 'Not allowed',
    },
    { k: 'Grading', v: QUALIFICATION.grades.join(' · ') + ' (U if below S1)' },
    { k: 'Prior learning', v: QUALIFICATION.priorLearning },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>About</span>
      </p>

      <h1>About the qualification</h1>
      <p className="lead">
        Everything you need to know about the {QUALIFICATION.title}, in plain English. It assesses
        Key Stage 3 / Year 9 English skills through a single externally-set paper.
      </p>

      <h2>The facts</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {facts.map((f) => (
              <tr key={f.k} className="border-b border-border/50 align-top">
                <td className="w-44 py-2 pr-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  {f.k}
                </td>
                <td className="py-2 text-foreground">{f.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How the paper is built</h2>
      <p>
        There is one paper, sat in a single {QUALIFICATION.durationLabel} session, worth{' '}
        {QUALIFICATION.totalMarks} marks in total, split into two sections:
      </p>
      <ul>
        <li>
          <strong>{SECTIONS.A.name}</strong> - {SECTIONS.A.marks} marks. {SECTIONS.A.description}{' '}
          Recommended time: {SECTIONS.A.recommendedLabel}.
        </li>
        <li>
          <strong>{SECTIONS.B.name}</strong> - {SECTIONS.B.marks} marks. {SECTIONS.B.description}{' '}
          Recommended time: {SECTIONS.B.recommendedLabel}.
        </li>
      </ul>

      <h2>How it is graded</h2>
      <p>{QUALIFICATION.gradeNote}</p>
      <p>
        See exactly what each grade looks like, and how to move up a level, on the{' '}
        <Link href="/ks3/ilowersecondary/grade-targets">grade targets page</Link>.
      </p>

      <h2>Who it is for and where it leads</h2>
      <p>{QUALIFICATION.priorLearning} It is designed to lead to:</p>
      <ul>
        {QUALIFICATION.progression.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p>
        See the full picture on the{' '}
        <Link href="/ks3/ilowersecondary/progression">progression page</Link>, and a guide written
        for adults on the{' '}
        <Link href="/ks3/ilowersecondary/for-parents-teachers">parents &amp; teachers page</Link>.
      </p>

      <h2>Start studying</h2>
      <p>
        Head to the <Link href="/ks3/ilowersecondary">iLowerSecondary English hub</Link> for the
        full set of skill masterclasses, question-type guides and practice papers, or jump straight
        to the <Link href="/ks3/ilowersecondary/study-plan">study plan</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
