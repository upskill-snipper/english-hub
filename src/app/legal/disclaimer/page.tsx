/* ─── Metadata ───────────────────────────────────────────────── */

import Link from 'next/link'

export const metadata = {
  openGraph: {
    title: 'Full Disclaimer',
    description:
      'Complete disclaimer for The English Hub, including exam board non-affiliation, AI feedback, and supplementary education disclaimers.',
  },
  alternates: { canonical: 'https://theenglishhub.app/legal/disclaimer' },
  title: 'Full Disclaimer',
  description:
    'Complete disclaimer for The English Hub, including exam board non-affiliation, AI feedback, and supplementary education disclaimers.',
}

/* ─── Exam board trademark data ──────────────────────────────── */

const EXAM_BOARDS = [
  {
    name: 'AQA',
    trademark:
      'AQA is a registered trademark of AQA Education (Assessment and Qualifications Alliance).',
  },
  {
    name: 'Pearson Edexcel',
    trademark: 'Edexcel and Pearson are registered trademarks of Pearson Education Limited.',
  },
  {
    name: 'Cambridge Assessment International Education (CAIE)',
    trademark:
      'Cambridge Assessment International Education, Cambridge IGCSE, and CAIE are trademarks of the University of Cambridge Local Examinations Syndicate (UCLES).',
  },
  {
    name: 'OCR',
    trademark:
      'OCR is a registered trademark of Oxford, Cambridge and RSA Examinations, a company limited by guarantee.',
  },
  {
    name: 'WJEC / Eduqas',
    trademark: 'WJEC and Eduqas are registered trademarks of WJEC CBAC Limited.',
  },
  {
    name: 'Ofqual',
    trademark:
      'GCSE is a registered trademark of the Office of Qualifications and Examinations Regulation (Ofqual).',
  },
  {
    name: 'UCLES',
    trademark:
      'IGCSE is a registered trademark of Cambridge Assessment International Education, part of the University of Cambridge.',
  },
] as const

/* ─── Page component ─────────────────────────────────────────── */

export default function DisclaimerPage() {
  return (
    <>
      <h1>Full Disclaimer</h1>
      <p className="text-sm text-muted-foreground">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 22 March 2026
      </p>

      {/* ── Exam board non-affiliation ─────────────────────────── */}
      <section className="mt-8">
        <h2>Exam Board Non-Affiliation Statement</h2>
        <p>
          The English Hub is an independent educational platform operated by Upskill Energy Limited.
          We are <strong>not</strong> affiliated with, endorsed by, authorised by, or in any way
          formally connected to any examination board, awarding organisation, or regulatory body.
        </p>
        <p>
          This includes, but is not limited to, AQA, Pearson Edexcel, Cambridge Assessment
          International Education (CAIE), OCR, WJEC/Eduqas, and Ofqual. References to these
          organisations and their qualifications (including GCSE and IGCSE) are made solely for
          identification and educational reference purposes.
        </p>
        <p>
          Any mark scheme criteria, grade descriptors, or assessment objectives referenced on this
          platform are our own interpretation of publicly available information and do not represent
          the official position or standards of any exam board.
        </p>
      </section>

      {/* ── AI feedback disclaimer ─────────────────────────────── */}
      <section className="mt-8">
        <h2>AI-Generated Feedback Disclaimer</h2>
        <p>
          The English Hub uses artificial intelligence to provide feedback on student essays and
          written work. This AI-generated feedback:
        </p>
        <ul>
          <li>
            Is provided for <strong>practice and learning purposes only</strong>
          </li>
          <li>
            Does <strong>not</strong> represent an official exam board assessment, grade, or mark
          </li>
          <li>
            May contain inaccuracies, errors, or omissions and should not be relied upon as the sole
            source of academic guidance
          </li>
          <li>
            Should be used alongside guidance from qualified teachers and official exam board
            resources
          </li>
          <li>
            May not fully reflect the marking standards or expectations of any specific examiner or
            exam session
          </li>
        </ul>
        <p>
          For transparency about how our AI works, please see our{' '}
          <Link href="/legal/ai-transparency">AI Transparency page</Link>.
        </p>
      </section>

      {/* ── Supplementary education disclaimer ─────────────────── */}
      <section className="mt-8">
        <h2>Supplementary Education Disclaimer</h2>
        <p>
          The English Hub is a <strong>supplementary revision tool</strong>. It is designed to
          support, not replace, classroom teaching, professional tutoring, or official exam
          preparation resources provided by schools and exam boards.
        </p>
        <p>We strongly encourage all students to:</p>
        <ul>
          <li>Follow the guidance of their teachers and school curriculum</li>
          <li>
            Use official exam board specifications, past papers, and mark schemes as their primary
            revision resources
          </li>
          <li>Seek additional support from qualified educators where needed</li>
        </ul>
      </section>

      {/* ── Results disclaimer ─────────────────────────────────── */}
      <section className="mt-8">
        <h2>Results Disclaimer</h2>
        <p>
          The English Hub does not guarantee any specific academic outcomes, exam results, or grade
          improvements. Individual results depend on many factors including:
        </p>
        <ul>
          <li>The student&apos;s starting ability and prior knowledge</li>
          <li>Time and effort invested in revision and practice</li>
          <li>The quality and breadth of other study resources used</li>
          <li>Exam conditions and the specific questions set</li>
          <li>The marking standards applied in any given exam session</li>
        </ul>
        <p>
          Any estimated grades, scores, or progress indicators provided on this platform are for
          guidance only and should not be taken as a prediction of actual exam results.
        </p>
      </section>

      {/* ── Trademark attributions ─────────────────────────────── */}
      <section className="mt-8">
        <h2>Trademark Attributions</h2>
        <p>
          The following trademarks are the property of their respective owners. Their use on this
          platform is for identification and reference purposes only and does not imply any
          affiliation or endorsement.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 pr-4 text-left font-semibold text-foreground">Organisation</th>
                <th className="pb-2 text-left font-semibold text-foreground">Trademark Notice</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_BOARDS.map((board) => (
                <tr key={board.name} className="border-b border-border">
                  <td className="py-2 pr-4 font-medium text-foreground align-top whitespace-nowrap">
                    {board.name}
                  </td>
                  <td className="py-2 text-muted-foreground">{board.trademark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section className="mt-8">
        <h2>Contact</h2>
        <p>
          If you have questions about any of these disclaimers, or if you believe any content on The
          English Hub infringes on your intellectual property, please contact us at{' '}
          <a href="mailto:info@Upskillenergy.com">info@Upskillenergy.com</a>.
        </p>
      </section>
    </>
  )
}
