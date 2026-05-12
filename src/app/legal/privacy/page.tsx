import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How The English Hub collects, uses, and protects your personal data under UK GDPR. Includes Data Controller, DPO and Designated Safeguarding Lead contacts, Children’s Code commitments, and how to exercise your data rights.',
  alternates: { canonical: 'https://theenglishhub.app/legal/privacy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> &mdash; a trading name of Upskill Energy Limited
        <br />
        Last updated: 12 May 2026
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 text-sm">
        <p>
          This policy explains who is responsible for your personal data, how to contact our Data
          Protection Officer (DPO) and Designated Safeguarding Lead (DSL), how to make a complaint
          to the ICO, and how to exercise your rights to access, export, or delete your data.
        </p>
      </div>

      {/* Section 1: Contacts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Contacts</h2>

        <h3 className="text-lg font-semibold mb-2">Data Controller</h3>
        <p className="mb-3">
          <strong>Upskill Energy Limited</strong>, trading as <strong>The English Hub</strong>, is
          the data controller responsible for the personal data processed through theenglishhub.app
          and its associated services. We are registered with the UK Information Commissioner&apos;s
          Office (ICO) under registration number <strong>ZC016690</strong>.
        </p>
        <p className="mb-3">
          <strong>Registered office:</strong> [Address &mdash; to be confirmed], United Kingdom.
        </p>

        <h3 className="text-lg font-semibold mb-2">Data Protection Officer (DPO)</h3>
        <p className="mb-3">
          <strong>Calum Johnston</strong> &mdash;{' '}
          <a href="mailto:dpo@theenglishhub.app" className="underline">
            dpo@theenglishhub.app
          </a>
        </p>

        <h3 className="text-lg font-semibold mb-2">Designated Safeguarding Lead (DSL)</h3>
        <p className="mb-3">
          Because our users include children, we maintain a named Designated Safeguarding Lead
          responsible for child-protection matters arising from use of the platform.
          <br />
          <strong>Calum Johnston</strong> &mdash;{' '}
          <a href="mailto:safeguarding@theenglishhub.app" className="underline">
            safeguarding@theenglishhub.app
          </a>
        </p>

        <h3 className="text-lg font-semibold mb-2">Complaints to the ICO</h3>
        <p>
          If you are not satisfied with how we have handled your personal data, you have the right
          to lodge a complaint with the UK Information Commissioner&apos;s Office at{' '}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ico.org.uk/make-a-complaint
          </a>
          . We would, however, appreciate the chance to address your concerns first &mdash; please
          contact our DPO above.
        </p>
      </section>

      {/* Section 2: What we collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. What Personal Data We Collect</h2>
        <p className="mb-3">We collect and process the following categories of personal data:</p>

        <h3 className="text-lg font-semibold mb-2">Account information</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Full name and email address</li>
          <li>Password (stored as a salted hash; never in plain text)</li>
          <li>Date of birth or age confirmation (used to apply age-appropriate defaults)</li>
          <li>Account type (student, parent, teacher, school)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Learning data</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Course progress, quiz and mock-exam results</li>
          <li>Essay and written-response submissions</li>
          <li>AI-generated feedback on your work</li>
          <li>Time spent on learning activities</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Billing information</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Payment card details (handled by Stripe; we do not store full card numbers)</li>
          <li>Billing address and transaction history</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Technical data</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address, device and browser information</li>
          <li>Pages visited and interaction patterns (only with analytics consent)</li>
          <li>Error logs and performance data</li>
        </ul>
      </section>

      {/* Section 3: Legal bases */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Legal Bases for Processing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contract (Article 6(1)(b)):</strong> to deliver the learning platform you have
            signed up for, including account management, marking, and payments.
          </li>
          <li>
            <strong>Consent (Article 6(1)(a)):</strong> for optional marketing, non-essential
            cookies, and any AI training opt-ins. Consent can be withdrawn at any time.
          </li>
          <li>
            <strong>Legitimate interests (Article 6(1)(f)):</strong> for platform security, fraud
            prevention, and aggregate analytics, balanced against the rights of our users
            (especially children).
          </li>
          <li>
            <strong>Legal obligation (Article 6(1)(c)):</strong> for tax, accounting, and
            safeguarding record-keeping required by UK law.
          </li>
        </ul>
      </section>

      {/* Section 4: Children's Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Children&apos;s Privacy</h2>
        <p className="mb-3">
          The English Hub is designed for GCSE learners, many of whom are minors. We follow the UK
          Information Commissioner&apos;s <strong>Age Appropriate Design Code</strong> (the
          &ldquo;Children&apos;s Code&rdquo;) and treat the best interests of the child as a primary
          consideration in every product decision.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Ages 13 and over</strong> may sign up for their own account and provide their
            own consent under UK GDPR.
          </li>
          <li>
            <strong>Ages under 13</strong> may only use the platform via a{' '}
            <strong>parent-linked account</strong>. The parent or guardian creates and controls the
            account, gives consent on the child&apos;s behalf, and can review or revoke access at
            any time.
          </li>
          <li>
            <strong>Off-by-default for minors:</strong> personalised recommendations beyond core
            study delivery, streaks and habit-pressure mechanics, and all marketing communications
            are <em>off by default</em> for any account flagged as belonging to a child. They can
            only be enabled by an explicit, informed action.
          </li>
          <li>
            <strong>No behavioural advertising and no commercial profiling</strong> of children, in
            line with the Children&apos;s Code.
          </li>
          <li>
            <strong>Plain-language transparency:</strong> child-facing accounts see a simplified,
            age-appropriate explanation of what data we hold, why, and how to delete it.
          </li>
          <li>
            <strong>Geolocation</strong> is not collected for child accounts.
          </li>
        </ul>
        <p>
          See our{' '}
          <a href="/legal/safeguarding" className="underline">
            Safeguarding Policy
          </a>{' '}
          for the operational detail of how the Designated Safeguarding Lead handles concerns.
        </p>
      </section>

      {/* Section 5: Retention */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Account data:</strong> retained for the duration of your account. After account
            deletion, personal data is erased within 30 days, except where law requires longer.
          </li>
          <li>
            <strong>Learning submissions and AI feedback:</strong> retained for the duration of your
            account so you can review past work; erased within 30 days of account deletion.
          </li>
          <li>
            <strong>Billing records:</strong> retained for 7 years to comply with UK tax law (HMRC).
          </li>
          <li>
            <strong>Technical and error logs:</strong> retained up to 90 days, then automatically
            purged.
          </li>
          <li>
            <strong>Dormant child accounts:</strong> any account flagged as belonging to a child
            that shows <strong>no sign-in or learning activity for 12 consecutive months</strong> is
            automatically purged. We send a reminder email to the linked parent before deletion
            where contact details are on file.
          </li>
        </ul>
      </section>

      {/* Section 6: Subject Access Requests */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Subject Access Requests (SARs)</h2>
        <p className="mb-3">
          You have the right to access, correct, port, or delete the personal data we hold about
          you. The fastest way to exercise these rights is through your account:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Export your data:</strong>{' '}
            <a href="/account/data-export" className="underline">
              /account/data-export
            </a>{' '}
            &mdash; download a structured, machine-readable copy (JSON/CSV) of your account,
            learning progress, and submissions.
          </li>
          <li>
            <strong>Delete your account:</strong>{' '}
            <a href="/account/delete" className="underline">
              /account/delete
            </a>{' '}
            &mdash; permanently remove your account and associated learning data, subject to legal
            retention obligations.
          </li>
          <li>
            <strong>Manual requests:</strong> if you cannot use the in-product tools, email{' '}
            <a href="mailto:dpo@theenglishhub.app" className="underline">
              dpo@theenglishhub.app
            </a>
            . We will respond within one calendar month, extendable by a further two months for
            complex requests.
          </li>
          <li>
            <strong>For child accounts:</strong> the linked parent or guardian may exercise these
            rights on the child&apos;s behalf using the same routes.
          </li>
        </ul>
      </section>

      {/* Section 7: Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
        <p className="mb-3">
          We apply appropriate technical and organisational measures to protect personal data,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>TLS 1.2+ encryption in transit and AES-256 encryption at rest</li>
          <li>Role-based access controls and least-privilege staff access</li>
          <li>Salted password hashing using industry-standard algorithms</li>
          <li>Automated error monitoring and dependency patching</li>
          <li>Regular review of sub-processors and data flows</li>
        </ul>
        <p>
          To report a security concern, please email{' '}
          <a href="mailto:security@theenglishhub.app" className="underline">
            security@theenglishhub.app
          </a>
          .
        </p>
      </section>

      {/* Section 8: Changes */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or the law. Material changes
          will be notified by email or by a prominent in-product notice. For users under 16, we will
          notify both the student and the linked parent or guardian.
        </p>
      </section>

      <p className="text-sm text-muted-foreground italic mt-8">
        &copy; 2026 Upskill Energy Limited, trading as The English Hub. All rights reserved.
      </p>
    </>
  )
}
