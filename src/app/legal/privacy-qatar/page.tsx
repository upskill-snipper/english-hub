import { STRINGS } from './content'
import { Metadata } from 'next'

import { headers } from 'next/headers'
export const metadata: Metadata = {
  title: 'Qatar Privacy Notice',
  description:
    "Privacy Notice for The English Hub users in Qatar, compliant with Qatar's Personal Data Privacy Protection Law.",
}

export default async function QatarPrivacyNoticePage() {
  const _hdrs = await headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{tr(`Privacy Notice — State of Qatar`)}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Effective Date: 22 March 2026
        <br />
        Applicable Law: Qatar Personal Data Privacy Protection Law (Law No. 13 of 2016 — PDPPL)
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 text-sm">
        <p>
          This notice is provided in English. An Arabic translation shall be made available and, in
          the event of any discrepancy, the Arabic version shall prevail in accordance with Qatari
          legal requirements.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Identity of the Data Controller</h2>
        <p>
          <strong>{tr(`The English Hub`)}</strong> is a trading name of{' '}
          <strong>{tr(`Upskill Energy Limited`)}</strong>, a company incorporated in the United
          Kingdom. Upskill Energy Limited is the data controller responsible for the collection and
          processing of your personal data through The English Hub platform and services offered
          within the State of Qatar.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Qatar Data Protection Contact</h2>
        <p className="mb-3">
          For data protection enquiries related to Qatar operations, please contact us by email at{' '}
          <a href="mailto:dpo@theenglishhub.app" className="underline">
            dpo@theenglishhub.app
          </a>
          . General enquiries can be sent to{' '}
          <a href="mailto:info@Upskillenergy.com" className="underline">
            info@Upskillenergy.com
          </a>
          . Requests are handled by the Upskill Energy Limited privacy team; we will respond within
          the timeframes set out in section 13.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Types of Personal Data Collected</h2>

        <h3 className="text-lg font-semibold mb-2">Account and Identity Data</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{tr(`Full name, email address, telephone number`)}</li>
          <li>{tr(`Date of birth, nationality, and country of residence`)}</li>
          <li>{tr(`Qatar ID number (where required for service delivery)`)}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{tr(`Educational and Professional Data`)}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{tr(`English language proficiency level`)}</li>
          <li>{tr(`Learning history, course enrolments, and progress records`)}</li>
          <li>{tr(`Assessment scores and certification records`)}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{tr(`Technical and Usage Data`)}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{tr(`IP address, device identifiers, browser type`)}</li>
          <li>{tr(`Platform usage data (pages visited, session duration)`)}</li>
          <li>Cookies and similar technologies (subject to consent)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{tr(`AI Interaction Data`)}</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>{tr(`Inputs provided to AI-powered learning tools`)}</li>
          <li>{tr(`AI-generated feedback and assessment outputs`)}</li>
          <li>
            {tr(
              `Voice recordings (where speech assessment is enabled, with explicit consent only)`,
            )}
          </li>
        </ul>

        <p className="text-sm">
          We do not knowingly collect sensitive personal data (religious beliefs, political
          opinions, health conditions, biometric data) unless strictly necessary and with explicit
          consent.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
        <p className="mb-3">
          In accordance with Article 4 of the PDPPL, we process your personal data on the basis of
          your <strong>explicit, informed, and freely given consent</strong>. Before collection, we
          will clearly explain the purpose, inform you of the data types, and obtain consent through
          a clear affirmative action.
        </p>
        <p>
          Your consent is voluntary. You may withdraw at any time without affecting the lawfulness
          of prior processing.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Purpose of Data Processing</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">Purpose</th>
                <th className="text-left px-4 py-2 border-b font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b font-medium">{tr(`Service Delivery`)}</td>
                <td className="px-4 py-2 border-b">
                  Account management and educational content delivery
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">{tr(`Personalised Learning`)}</td>
                <td className="px-4 py-2 border-b">
                  Tailored content, recommendations, and assessments
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">{tr(`AI-Powered Tools`)}</td>
                <td className="px-4 py-2 border-b">
                  AI-driven feedback, pronunciation assessment, adaptive learning
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">
                  {tr(`Assessment & Certification`)}
                </td>
                <td className="px-4 py-2 border-b">
                  {tr(`Tests, certificates, and academic records`)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">{tr(`Payment Processing`)}</td>
                <td className="px-4 py-2 border-b">
                  {tr(`Payments, invoices, and billing management`)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">{tr(`Legal Compliance`)}</td>
                <td className="px-4 py-2 border-b">
                  Compliance with applicable laws in Qatar and the UK
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b font-medium">Marketing</td>
                <td className="px-4 py-2 border-b">
                  Promotional communications (only with separate explicit consent)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Cross-Border Data Transfers</h2>
        <p className="mb-3">
          Your personal data collected in Qatar{' '}
          <strong>will be transferred to and stored on servers in the United Kingdom</strong>. This
          is necessary for platform operation and service delivery.
        </p>
        <p className="mb-3">
          In accordance with the PDPPL, we require your <strong>explicit consent</strong> before
          transferring data outside Qatar.
        </p>
        <h3 className="text-lg font-semibold mb-2">{tr(`Safeguards in Place`)}</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>{tr(`UK International Data Transfer Agreement (IDTA)`)}</strong> providing a
            recognised legal framework
          </li>
          <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li>{tr(`Strict role-based access controls`)}</li>
          <li>{tr(`Binding contractual obligations with all sub-processors`)}</li>
          <li>{tr(`Periodic security and compliance audits`)}</li>
        </ul>
        <p className="mt-3 text-sm">
          You have the right to withhold or withdraw consent for cross-border transfer. This may
          limit our ability to provide certain services.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Data Retention Periods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  {tr(`Data Category`)}
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  {tr(`Retention Period`)}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Account and identity data</td>
                <td className="px-4 py-2 border-b">Account duration + 3 years</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Educational records and certificates`)}</td>
                <td className="px-4 py-2 border-b">7 years after issuance</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Payment and billing records`)}</td>
                <td className="px-4 py-2 border-b">7 years from transaction date</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Technical and usage data</td>
                <td className="px-4 py-2 border-b">12 months from collection</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">AI interaction data</td>
                <td className="px-4 py-2 border-b">12 months (anonymised thereafter)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Communication records`)}</td>
                <td className="px-4 py-2 border-b">3 years from last interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Your Rights Under the PDPPL</h2>
        <div className="space-y-3">
          {[
            {
              right: 'Right to Be Informed',
              desc: 'Be informed about the collection and processing of your data',
            },
            {
              right: 'Right of Access',
              desc: 'Request access to and a copy of the data we hold about you',
            },
            {
              right: 'Right to Rectification',
              desc: 'Request correction of inaccurate or incomplete data',
            },
            {
              right: 'Right to Erasure',
              desc: 'Request deletion of your data where no longer necessary or consent is withdrawn',
            },
            {
              right: 'Right to Restrict Processing',
              desc: 'Request restriction of processing in certain circumstances',
            },
            {
              right: 'Right to Withdraw Consent',
              desc: 'Withdraw consent at any time without affecting prior lawful processing',
            },
            {
              right: 'Right to Object',
              desc: 'Object to processing, including for direct marketing purposes',
            },
            {
              right: 'Right to Data Portability',
              desc: 'Receive your data in a structured, machine-readable format',
            },
            {
              right: 'Right to Lodge a Complaint',
              desc: 'Lodge a complaint with the NCGAA if your rights have been violated',
            },
          ].map((item) => (
            <div key={item.right} className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-sm">{item.right}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. Data Breach Notification</h2>
        <p className="mb-3">
          {tr(`In the event of a personal data breach likely to affect your rights:`)}
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>
            We will notify the <strong>NCGAA within 72 hours</strong>
          </li>
          <li>
            We will notify affected individuals <strong>within 72 hours</strong> where there is a
            high risk
          </li>
          <li>
            Notifications will include: the nature of the breach, approximate number affected,
            likely consequences, and measures taken
          </li>
        </ol>
      </section>

      {/* Section 14 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">10. Children&apos;s Data Protection</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{tr(`Users under 18 are considered minors under Qatari law`)}</li>
          <li>
            We do not knowingly collect data from children under 13 without verified parental
            consent
          </li>
          <li>{tr(`For users aged 13-17, we require explicit parental or guardian consent`)}</li>
          <li>
            Parents and guardians can access, review, and request deletion of their child&apos;s
            data at any time
          </li>
          <li>{tr(`No targeted advertising served to minors`)}</li>
          <li>
            AI features used by minors are subject to additional safeguards including human
            oversight
          </li>
          <li>{tr(`No behavioural profiles of minors for commercial purposes`)}</li>
        </ul>
      </section>

      {/* Section 15 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">11. AI Processing Transparency</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">{tr(`AI Feature`)}</th>
                <th className="text-left px-4 py-2 border-b font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Adaptive Learning Engine`)}</td>
                <td className="px-4 py-2 border-b">
                  Adjusts course difficulty based on performance
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Language Feedback Tools`)}</td>
                <td className="px-4 py-2 border-b">
                  Real-time grammar, vocabulary, and writing corrections
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Speech Assessment`)}</td>
                <td className="px-4 py-2 border-b">
                  Pronunciation and fluency evaluation (with consent)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Progress Analytics`)}</td>
                <td className="px-4 py-2 border-b">
                  Personalised learning reports and recommendations
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">{tr(`Chatbot Support`)}</td>
                <td className="px-4 py-2 border-b">
                  {tr(`Automated responses to common queries`)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-3">{tr(`Your rights regarding AI processing:`)}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Right to be informed when AI is processing your data</li>
          <li>{tr(`Right to request human review of any AI-generated assessment`)}</li>
          <li>{tr(`Right to opt out of specific AI features`)}</li>
          <li>Right to an explanation of AI-generated feedback</li>
          <li>{tr(`Your data is not used to train third-party AI models without consent`)}</li>
        </ul>
      </section>

      {/* Section 16 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">12. Cultural Considerations</h2>
        <p>
          The English Hub respects the cultural heritage, Islamic traditions, and social values of
          the State of Qatar. All learning content and AI-generated outputs are reviewed for
          cultural appropriateness and respect for Islamic values. We do not collect or infer data
          relating to religious beliefs unless strictly necessary and with explicit consent.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">13. How to Exercise Your Rights or Complain</h2>
        <div className="bg-muted rounded-lg p-4 text-sm mb-4">
          <p className="mb-2">
            To exercise your data protection rights, use the &quot;Privacy &amp; Data&quot; section
            within your account settings, or contact our Qatar Data Protection Representative.
          </p>
          <p>
            We will respond within <strong>30 days</strong>. Complex requests may be extended by a
            further 30 days with notice.
          </p>
        </div>
        <p className="mb-3">{tr(`If you are not satisfied, you may lodge a complaint with:`)}</p>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p className="font-semibold">
            {tr(`National Cyber Governance and Assurance Authority (NCGAA)`)}
          </p>
          <p>{tr(`State of Qatar`)}</p>
          <p>
            Website:{' '}
            <a href="https://www.ncsa.gov.qa" target="_blank" rel="noopener noreferrer">
              ncsa.gov.qa
            </a>
          </p>
          <p className="mt-2 text-xs">
            You also have the right to seek a judicial remedy through the competent courts of the
            State of Qatar.
          </p>
        </div>
      </section>

      {/* Section 18 */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
        <p>
          This privacy notice is governed by the laws of the State of Qatar, including the Personal
          Data Privacy Protection Law (Law No. 13 of 2016). Any disputes shall be subject to the
          exclusive jurisdiction of the competent courts of the State of Qatar.
        </p>
      </section>

      <p className="text-sm text-muted-foreground italic mt-8">
        This privacy notice is provided in English. An Arabic translation will be made available in
        accordance with Qatari legal requirements. In the event of any discrepancy, the Arabic
        version shall prevail.
        <br />
        &copy; 2026 Upskill Energy Limited. All rights reserved.
      </p>
    </>
  )
}
