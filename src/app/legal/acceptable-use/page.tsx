import { Metadata } from 'next'
import Link from 'next/link'

import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
export const metadata: Metadata = {
  openGraph: {
    title: 'Acceptable Use Policy',
    description:
      'Acceptable Use Policy for The English Hub, explaining what you can and cannot do on the platform.',
  },
  alternates: { canonical: 'https://theenglishhub.app/legal/acceptable-use' },
  title: 'Acceptable Use Policy',
  description:
    'Acceptable Use Policy for The English Hub, explaining what you can and cannot do on the platform.',
}

export default async function AcceptableUsePolicyPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{_tr(`Acceptable Use Policy`)}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{_tr(`The English Hub`)}</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 22 March 2026
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Purpose and Scope</h2>
        <p>
          This Acceptable Use Policy explains what you can and cannot do when using The English Hub.
          It exists to keep the platform safe, fair, and useful for everyone. It applies to all
          features — including essay submission, AI feedback, learning resources, and any
          communication features — every time you use the platform.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Who This Applies To</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>{_tr(`All registered users (students, typically aged 14-18)`)}</li>
          <li>{_tr(`Parents or guardians managing accounts on behalf of a user`)}</li>
          <li>Teachers or school staff accessing through institutional licences</li>
          <li>{_tr(`Anyone else who visits or uses the platform`)}</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Acceptable Use</h2>
        <p className="mb-3">
          You <strong>are</strong> welcome to use The English Hub for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{_tr(`Learning and revision`)}</strong> — studying for your GCSE or IGCSE
            English exams
          </li>
          <li>
            <strong>{_tr(`Submitting your own original essays`)}</strong> for AI feedback
          </li>
          <li>
            <strong>{_tr(`Using AI feedback to improve your writing`)}</strong> — reading
            suggestions and applying what you learn
          </li>
          <li>
            <strong>{_tr(`Accessing study resources`)}</strong> — guides, exemplars, and learning
            materials for personal education
          </li>
          <li>
            <strong>{_tr(`Collaborating appropriately`)}</strong> — working with other students
            respectfully where social features are available
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Prohibited Use</h2>
        <p className="mb-4">
          You must <strong>not</strong> do any of the following:
        </p>

        <h3 className="text-lg font-semibold mb-2">4.1 Academic Dishonesty</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>{_tr(`Submitting someone else&apos;s work as your own.`)}</strong> Every essay
            you submit must be written by you.
          </li>
          <li>
            <strong>Using AI feedback to produce essays for school submission.</strong> The feedback
            is designed to help you learn, not to write your essays for you.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">4.2 Misuse of the AI System</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Attempting to manipulate or exploit the AI, including prompt injection or feeding
            nonsense inputs
          </li>
          <li>Using automated tools, bots, scrapers, or any automated software</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">4.3 Account and Security Violations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>{_tr(`Sharing your account credentials with others`)}</li>
          <li>{_tr(`Attempting to access other users&apos; data`)}</li>
          <li>Circumventing age verification or providing false identity information</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">4.4 Harmful Content and Behaviour</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Uploading harmful, offensive, illegal, or sexually explicit content</li>
          <li>Bullying, intimidating, harassing, or threatening other users</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">4.5 Unauthorised Commercial Use</h3>
        <p>
          Do not use the platform for advertising, selling products, or any business activity
          without explicit written permission from Upskill Energy Limited.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Academic Integrity Statement</h2>
        <div className="bg-warn/5 border border-warn/20 rounded-lg p-4 text-sm">
          <ul className="space-y-2">
            <li>
              <strong>{_tr(`The AI feedback is a tutor, not a ghostwriter.`)}</strong> Think of it
              like getting comments from a teacher on a practice essay.
            </li>
            <li>
              <strong>{_tr(`Use the feedback to improve YOUR writing.`)}</strong> Read the
              suggestions, think about why they were made, and apply those lessons.
            </li>
            <li>
              <strong>
                Do not submit AI-generated or AI-assisted content as your own independent work at
                school.
              </strong>{' '}
              Many schools have strict academic integrity policies.
            </li>
            <li>
              <strong>{_tr(`When in doubt, ask your teacher.`)}</strong>
            </li>
          </ul>
          <p className="mt-3 font-semibold">
            We built this platform to help you learn, not to help you cheat. Using it honestly will
            make you a better writer.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Content Standards for Essay Submissions</h2>
        <p className="mb-3">When you submit an essay for AI feedback, your submission must:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>{_tr(`Be written in English`)}</li>
          <li>{_tr(`Be your own original work`)}</li>
          <li>{_tr(`Be relevant to English language or literature study`)}</li>
          <li>
            Not contain personal information about real, identifiable people (other than public
            figures in analytical context)
          </li>
          <li>{_tr(`Not contain offensive, discriminatory, or violent content`)}</li>
          <li>{_tr(`Not contain any illegal content`)}</li>
        </ul>
        <p className="mt-3 text-sm">
          We understand some GCSE/IGCSE set texts deal with mature themes. Discussing them
          thoughtfully in your studies is perfectly acceptable. Gratuitous content beyond genuine
          academic discussion is not.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Consequences of Violation</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">Step</th>
                <th className="text-left px-4 py-2 border-b font-semibold">Action</th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  When it typically applies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b font-medium">Warning</td>
                <td className="px-4 py-2 border-b">First-time or minor violations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b font-medium">Temporary suspension</td>
                <td className="px-4 py-2 border-b">
                  Repeated violations or a single serious breach
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b font-medium">Permanent termination</td>
                <td className="px-4 py-2 border-b">Serious or persistent violations</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          We may also remove content, notify your parent/guardian/school, or report illegal activity
          to authorities. We will always try to be fair and proportionate.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Reporting Mechanism</h2>
        <p className="mb-3">
          If you see something that violates this Policy, or if you experience behaviour that makes
          you uncomfortable:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>
            <strong>In-platform:</strong> Use the &quot;Report&quot; button where available
          </li>
          <li>
            <strong>Email:</strong> Contact us at the support email address
          </li>
          <li>
            <strong>{_tr(`Through your school:`)}</strong> Speak to your teacher or administrator
          </li>
        </ul>
        <p className="text-sm">
          All reports are treated confidentially. You will not be penalised for making a report in
          good faith.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. Monitoring and Enforcement</h2>
        <p>
          To keep the platform safe, we may monitor content submissions using automated systems,
          review flagged content manually, and log platform activity for security purposes. All
          monitoring is in line with our Privacy Policy and applicable data protection laws,
          including the UK GDPR and the Children&apos;s Code.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">10. Modifications to This Policy</h2>
        <p>
          We may update this Policy to reflect changes in our platform, legal requirements, or best
          practices. We will update the date at the top and notify you of significant changes
          through the platform.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">{_tr(`Contact Us`)}</h2>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="font-semibold">{_tr(`Upskill Energy Limited`)}</p>
          <p>
            Email: <a href="mailto:info@Upskillenergy.com">info@Upskillenergy.com</a>
          </p>
          <p>
            Website:{' '}
            <a href="/" target="_blank" rel="noopener noreferrer">
              theenglishhub.app
            </a>
          </p>
        </div>
      </section>

      <p className="text-sm text-muted-foreground italic">
        This Acceptable Use Policy should be read alongside our{' '}
        <Link href="/privacy-policy">{_tr(`Privacy Policy`)}</Link>,{' '}
        <Link href="/terms">{_tr(`Terms and Conditions`)}</Link>, and{' '}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
    </>
  )
}
