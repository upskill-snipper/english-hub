import { Metadata } from 'next'

// Contact placeholders — using cj@upskillenergy.com pending dedicated mailbox
// provisioning. Once dpo@theenglishhub.app and safeguarding@theenglishhub.app
// are live, replace the cj@upskillenergy.com references below and update the
// migration note in section 1. (Tracked: contact-mailbox-provisioning.)
//
// Registered office: pending Companies House confirmation — leave the
// "[Address — pending Companies House confirmation]" string in place until the
// user supplies it.
//
// ICO registration number ZC016690 was carried over from the legacy
// /privacy-policy page. Verify the entry on the ICO public register before
// the next material policy update.

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How The English Hub collects, uses, and protects your personal data under UK GDPR. Includes Data Controller, DPO and Designated Safeguarding Lead contacts, Children’s Code commitments, third-party processors, international transfers, and how to exercise your data rights.',
  alternates: { canonical: 'https://theenglishhub.app/legal/privacy' },
  openGraph: {
    title: 'Privacy Policy — The English Hub',
    description:
      'How The English Hub collects, uses, and protects your personal data under UK GDPR. Transparent data practices for students, parents, and schools.',
  },
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
          <strong>Registered office:</strong> [Address &mdash; pending Companies House
          confirmation], United Kingdom.
        </p>

        <h3 className="text-lg font-semibold mb-2">Data Protection Officer (DPO)</h3>
        <p className="mb-3">
          <strong>Calum Johnston</strong> &mdash;{' '}
          <a href="mailto:cj@upskillenergy.com" className="underline">
            cj@upskillenergy.com
          </a>
          {/* TODO: migrate to dpo@theenglishhub.app once the dedicated mailbox is provisioned. */}
        </p>

        <h3 className="text-lg font-semibold mb-2">Designated Safeguarding Lead (DSL)</h3>
        <p className="mb-3">
          Because our users include children, we maintain a named Designated Safeguarding Lead
          responsible for child-protection matters arising from use of the platform.
          <br />
          <strong>Calum Johnston</strong> &mdash;{' '}
          <a href="mailto:cj@upskillenergy.com" className="underline">
            cj@upskillenergy.com
          </a>
          {/* TODO: migrate to safeguarding@theenglishhub.app once the dedicated mailbox is provisioned. */}
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
          </a>{' '}
          or by calling <strong>0303 123 1113</strong>. We would, however, appreciate the chance to
          address your concerns first &mdash; please contact our DPO above.
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

      {/* Section 4: Third-party processors (migrated from legacy /privacy-policy) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Third-Party Data Processors</h2>
        <p className="mb-3">
          We share your personal data with the following third-party processors, each of which is
          bound by a data processing agreement and processes your data only on our instructions:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Stripe (Payments)</h3>
            <p>
              Stripe, Inc. processes all payment transactions. Card details are sent directly to
              Stripe and never stored on our servers. Stripe is PCI DSS Level 1 certified.{' '}
              <a
                href="https://stripe.com/gb/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                stripe.com/gb/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Supabase (Authentication &amp; Database)</h3>
            <p>
              Supabase, Inc. provides our authentication system and database infrastructure. Your
              account information, learning progress, and essay submissions are stored in
              Supabase-hosted databases, encrypted at rest and in transit.{' '}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                supabase.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Anthropic (AI Essay Feedback)</h3>
            <p>
              Anthropic, PBC provides the Claude AI model used to generate feedback on student essay
              submissions. Our data processing agreement with Anthropic prohibits the use of your
              submissions to train their models.{' '}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                anthropic.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Vercel (Hosting)</h3>
            <p>
              Vercel, Inc. hosts our website and application. Vercel processes technical data such
              as IP addresses and request logs as part of delivering the platform.{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Sentry (Error Tracking)</h3>
            <p>
              Functional Software, Inc. (Sentry) provides error monitoring and performance tracking.
              Sentry receives technical context to help diagnose issues.{' '}
              <a
                href="https://sentry.io/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                sentry.io/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Resend (Email Delivery)</h3>
            <p>
              Resend, Inc. provides transactional email delivery. Your email address and message
              content are processed by Resend when we send you account or product emails.{' '}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                resend.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Microsoft Azure (Backend Hosting)</h3>
            <p>
              Microsoft Corporation provides cloud hosting for our backend API via Microsoft Azure
              (UK South region). Backend API traffic passes through this infrastructure.{' '}
              <a
                href="https://privacy.microsoft.com/en-gb/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                privacy.microsoft.com
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">
              Vercel Analytics &amp; Speed Insights (Usage Analytics)
            </h3>
            <p>
              Privacy-friendly usage analytics and Web Vitals timings, loaded only after you accept
              analytics cookies. No cross-site tracking cookies and no advertising profiles.{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Google Analytics 4 (Usage Analytics)</h3>
            <p>
              Loaded only after you accept analytics cookies. We configure GA4 with IP anonymisation
              enabled.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Rewardful (Affiliate Tracking)</h3>
            <p>
              Loaded only after you accept marketing cookies. Sets a first-party referral cookie so
              affiliates can be credited for sign-ups they refer.{' '}
              <a
                href="https://www.rewardful.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                rewardful.com/privacy-policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Children's Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Children&apos;s Privacy</h2>
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

        <h3 className="text-lg font-semibold mb-3 mt-6">Our Children&apos;s Code commitments</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left font-semibold p-3 border-b border-border">
                  ICO Children&apos;s Code standard
                </th>
                <th className="text-left font-semibold p-3 border-b border-border">
                  How The English Hub meets it
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 align-top">1. Best interests of the child</td>
                <td className="p-3 align-top">
                  All product decisions affecting under-18s are reviewed against the DPIA before
                  release. Safeguarding lead has veto.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">2. Data protection impact assessments</td>
                <td className="p-3 align-top">
                  DPIA available on request from the DPO. Updated on every material feature change.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">3. Age-appropriate application</td>
                <td className="p-3 align-top">
                  Account flows branch by age at signup (13-15, 16-17, 18+). UI, copy, and defaults
                  adapt per age cohort.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">4. Transparency</td>
                <td className="p-3 align-top">
                  Privacy policy, data-use summary, and Children&apos;s Code matrix written in plain
                  English. Tested with under-16 users for comprehension.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">5. Detrimental use of data</td>
                <td className="p-3 align-top">
                  No advertising, no profiling for commercial purposes, no data sold to third
                  parties. AI training opt-in is off by default for all minors.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">6. Policies and community standards</td>
                <td className="p-3 align-top">
                  Published safeguarding policy enforced. Users can flag harmful content; human
                  review within 24h.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">7. Default settings</td>
                <td className="p-3 align-top">
                  All minor accounts default to: profile private, analytics off, marketing off, AI
                  training opt-in off.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">8. Data minimisation</td>
                <td className="p-3 align-top">
                  We collect email, DOB, and essay submissions only. No address, no phone, no
                  payment info from minors (parent pays).
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">9. Data sharing</td>
                <td className="p-3 align-top">
                  Sub-processors listed in section 4. No third-party ad networks. UK/EU hosting.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">10. Geolocation</td>
                <td className="p-3 align-top">
                  Not collected for minors. No location-based features.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">11. Parental controls</td>
                <td className="p-3 align-top">
                  Parent accounts can be linked to child accounts. Parent sees child&apos;s essay
                  history and weekly progress. Transparency flag shown to child when parent linkage
                  is active.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">12. Profiling</td>
                <td className="p-3 align-top">
                  No behavioural profiling. AI marking is deterministic per essay &mdash; no
                  cross-essay inference that affects feature access.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">13. Nudge techniques</td>
                <td className="p-3 align-top">
                  No gamification patterns that exploit developmental vulnerabilities. No
                  &ldquo;streak&rdquo; pressure; progress is informational, not coercive.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 align-top">14. Connected toys and devices</td>
                <td className="p-3 align-top">
                  Not applicable &mdash; The English Hub is a web + mobile SaaS.
                </td>
              </tr>
              <tr>
                <td className="p-3 align-top">15. Online tools</td>
                <td className="p-3 align-top">
                  Privacy tools (export, delete, correct) accessible from the account page. All
                  actions complete in &le;30 days per UK GDPR.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          See our{' '}
          <a href="/legal/safeguarding" className="underline">
            Safeguarding Policy
          </a>{' '}
          for the operational detail of how the Designated Safeguarding Lead handles concerns.
        </p>
      </section>

      {/* Section 6: Retention */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
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
            <strong>Marketing consent records:</strong> retained for as long as the consent is
            active, plus 3 years after withdrawal to demonstrate compliance.
          </li>
          <li>
            <strong>Dormant child accounts:</strong> any account flagged as belonging to a child
            that shows <strong>no sign-in or learning activity for 12 consecutive months</strong> is
            automatically purged. We send a reminder email to the linked parent before deletion
            where contact details are on file.
          </li>
        </ul>
      </section>

      {/* Section 7: Subject Access Requests */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Your Rights and Subject Access Requests</h2>
        <p className="mb-3">
          Under UK data protection law, you have the right to access, correct, port, restrict,
          object to processing of, or delete the personal data we hold about you, and to withdraw
          any consent you have given. The fastest way to exercise the most common rights is through
          your account:
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
            <strong>Correct your data:</strong> most account information can be updated directly
            through your account settings.
          </li>
          <li>
            <strong>Manual requests (access, restriction, objection, consent withdrawal):</strong>{' '}
            if you cannot use the in-product tools, email{' '}
            <a href="mailto:cj@upskillenergy.com" className="underline">
              cj@upskillenergy.com
            </a>
            . We will respond within one calendar month, extendable by a further two months for
            complex requests &mdash; we will let you know within the first month if an extension
            applies.
          </li>
          <li>
            <strong>For child accounts:</strong> the linked parent or guardian may exercise these
            rights on the child&apos;s behalf using the same routes.
          </li>
        </ul>
        <p>
          If you are unsatisfied with our response, you have the right to lodge a complaint with the
          ICO (see Section 1).
        </p>
      </section>

      {/* Section 8: Cookies */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
        <p className="mb-3">
          We use cookies and similar technologies to operate the platform. Our use of cookies falls
          into the following categories:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Strictly necessary cookies:</strong> required for the platform to function,
            including authentication session cookies and security tokens. These do not require
            consent.
          </li>
          <li>
            <strong>Functional cookies:</strong> remember your preferences such as theme settings
            and display options.
          </li>
          <li>
            <strong>Analytics cookies:</strong> help us understand how users interact with the
            platform so we can improve it. Set only with your consent.
          </li>
          <li>
            <strong>Marketing cookies:</strong> used by Rewardful for affiliate attribution. Set
            only with your consent.
          </li>
        </ul>
        <p>
          We do not use behavioural advertising cookies. You can manage your cookie preferences at
          any time through the cookie settings on our website.
        </p>
      </section>

      {/* Section 9: International Data Transfers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
        <p className="mb-3">
          Some of our third-party processors are based in the United States. When personal data is
          transferred outside the UK, we ensure appropriate safeguards are in place to protect it,
          in compliance with UK GDPR:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>UK International Data Transfer Agreement (IDTA):</strong> we enter into the UK
            IDTA or the UK Addendum to the EU Standard Contractual Clauses with each US-based
            processor, as approved by the ICO.
          </li>
          <li>
            <strong>Supplementary measures:</strong> we implement additional technical and
            organisational safeguards, such as encryption in transit and at rest.
          </li>
          <li>
            <strong>Adequacy decisions:</strong> where the UK government has made an adequacy
            decision for a country, we may rely on that decision as the basis for transfer.
          </li>
        </ul>
        <p>
          The following processors transfer data outside the UK: Stripe, Supabase, Anthropic,
          Vercel, Sentry, Resend, Google (GA4), and Rewardful. Each has appropriate transfer
          mechanisms in place as described above.
        </p>
      </section>

      {/* Section 10: Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">10. Data Security</h2>
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

      {/* Section 11: Changes */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
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
