import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How The English Hub collects, uses, and protects your personal data under UK GDPR. Transparent data practices for students, parents, and schools.',
  alternates: { canonical: 'https://theenglishhub.app/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy — The English Hub',
    description:
      'How The English Hub collects, uses, and protects your personal data under UK GDPR. Transparent data practices for students, parents, and schools.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="mt-8 prose dark:prose-invert max-w-none space-y-8">
        {/* 1. Introduction & Data Controller */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            1. Introduction and Data Controller
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Upskill Energy Limited, trading as The English Hub (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;), operates the website and learning platform at{' '}
            <a href="https://theenglishhub.app" className="underline text-foreground">
              theenglishhub.app
            </a>
            . We are registered with the Information Commissioner&apos;s Office (ICO) under
            registration number{' '}
            <strong className="text-foreground">ZC016690</strong>. We are committed to protecting
            the privacy and personal data of all our users, including students aged 14&ndash;16 who
            use our GCSE English revision and learning tools.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018, the data controller is Upskill Energy Limited, trading as The
            English Hub. If you have any questions about this policy or how we handle your data,
            please contact us at{' '}
            <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
              info@Upskillenergy.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            This privacy policy explains what personal data we collect, why we collect it, how we
            use it, and what rights you have in relation to your data. It applies to all users of
            The English Hub, including students, parents/guardians, and teachers.
          </p>
        </section>

        {/* 2. What Data We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            2. What Personal Data We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect and process the following categories of personal data:
          </p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Account Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Password (stored in hashed form only)</li>
            <li>Date of birth or age confirmation</li>
            <li>Account type (student, parent, teacher, school)</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Learning Data</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Course progress and completion records</li>
            <li>Mock exam results and scores</li>
            <li>Essay and written response submissions</li>
            <li>AI-generated feedback on your work</li>
            <li>Revision activity and quiz results</li>
            <li>Time spent on learning activities</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Billing Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              Payment card details (processed and stored exclusively by Stripe; we do not store
              your full card number)
            </li>
            <li>Billing address</li>
            <li>Transaction history and subscription status</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Technical Data</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and interaction patterns</li>
            <li>Error logs and performance data</li>
          </ul>
        </section>

        {/* 3. Why We Collect Data */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            3. Why We Collect Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We process your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Providing the learning service:</strong>{' '}
              Creating and managing your account, delivering courses and revision materials,
              tracking your progress, and generating personalised learning recommendations.
            </li>
            <li>
              <strong className="text-foreground">AI essay feedback:</strong> Submitting your
              written work to our AI system to provide detailed, GCSE-aligned feedback on your
              essays and written responses.
            </li>
            <li>
              <strong className="text-foreground">Billing and payments:</strong> Processing
              subscription payments, managing free trials, issuing refunds, and maintaining
              transaction records as required by law.
            </li>
            <li>
              <strong className="text-foreground">Communication:</strong> Sending account-related
              emails (e.g. password resets, subscription confirmations) and, where you have opted
              in, learning tips and product updates.
            </li>
            <li>
              <strong className="text-foreground">Platform improvement:</strong> Analysing usage
              patterns to improve our courses, fix bugs, and develop new features.
            </li>
            <li>
              <strong className="text-foreground">Safety and security:</strong> Detecting and
              preventing fraud, abuse, and security incidents.
            </li>
            <li>
              <strong className="text-foreground">Legal obligations:</strong> Complying with
              applicable laws, including tax record-keeping and responding to lawful requests from
              authorities.
            </li>
          </ul>
        </section>

        {/* 4. Legal Basis for Processing */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            4. Legal Basis for Processing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under UK GDPR, we rely on the following lawful bases for processing your personal data:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Performance of a contract (Article 6(1)(b)):</strong>{' '}
              Processing that is necessary to provide you with the learning platform and services
              you have signed up for, including account management, content delivery, progress
              tracking, and payment processing.
            </li>
            <li>
              <strong className="text-foreground">Consent (Article 6(1)(a)):</strong> Where we
              send you optional marketing communications or use non-essential cookies. You can
              withdraw consent at any time. For users under 16, we obtain verifiable parental or
              guardian consent before processing their data (see Section 7).
            </li>
            <li>
              <strong className="text-foreground">Legitimate interests (Article 6(1)(f)):</strong>{' '}
              For purposes such as improving our platform, ensuring security, preventing fraud, and
              conducting analytics. We carry out a legitimate interest assessment to ensure our
              interests do not override the rights and freedoms of our users, particularly given
              that many of our users are minors.
            </li>
            <li>
              <strong className="text-foreground">Legal obligation (Article 6(1)(c)):</strong>{' '}
              Where processing is necessary to comply with UK law, such as maintaining financial
              records for tax purposes.
            </li>
          </ul>
        </section>

        {/* 5. Third-Party Processors */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            5. Third-Party Data Processors
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We share your personal data with the following third-party processors, each of which is
            bound by a data processing agreement and processes your data only on our instructions:
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Stripe (Payments)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stripe, Inc. processes all payment transactions. When you subscribe or make a
                purchase, your payment card details are sent directly to Stripe and are never stored
                on our servers. Stripe is PCI DSS Level 1 certified. Stripe&apos;s privacy policy
                is available at{' '}
                <a
                  href="https://stripe.com/gb/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  stripe.com/gb/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Supabase (Authentication &amp; Database)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Supabase, Inc. provides our authentication system and database infrastructure. Your
                account information, learning progress, and essay submissions are stored in
                Supabase-hosted databases. Supabase encrypts data at rest and in transit.
                Supabase&apos;s privacy policy is available at{' '}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  supabase.com/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Anthropic (AI Essay Feedback)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Anthropic, PBC provides the AI model (Claude) that generates feedback on student
                essay submissions. When you submit written work for AI feedback, the text of your
                submission is sent to Anthropic&apos;s API. We have a data processing agreement
                with Anthropic that prohibits the use of your submissions to train their models.
                Anthropic&apos;s privacy policy is available at{' '}
                <a
                  href="https://www.anthropic.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  anthropic.com/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Vercel (Hosting)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vercel, Inc. hosts our website and application. Vercel processes technical data such
                as IP addresses and request logs as part of delivering the platform to you.
                Vercel&apos;s privacy policy is available at{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Sentry (Error Tracking)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Functional Software, Inc. (Sentry) provides error monitoring and performance
                tracking. When an error occurs, Sentry may receive technical data including browser
                information, device type, and anonymised usage context to help us diagnose and fix
                issues. Sentry&apos;s privacy policy is available at{' '}
                <a
                  href="https://sentry.io/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  sentry.io/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Resend (Email Delivery)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Resend, Inc. provides our transactional email delivery service. When we send you
                emails such as contact form confirmations or trial notifications, your email address
                and the email content are processed by Resend. Resend&apos;s privacy policy is
                available at{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  resend.com/legal/privacy-policy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Microsoft Azure (Backend Hosting)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Microsoft Corporation provides cloud hosting for our backend API via Microsoft Azure.
                All data processed by the backend API passes through Azure infrastructure hosted in
                the United Kingdom (UK South region). Microsoft&apos;s privacy policy is available
                at{' '}
                <a
                  href="https://privacy.microsoft.com/en-gb/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  privacy.microsoft.com
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Vercel Analytics &amp; Speed Insights (Usage Analytics)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vercel, Inc. also provides privacy-friendly usage analytics (Vercel Analytics) and
                page-performance measurement (Speed Insights). Both are loaded only after you have
                accepted analytics cookies in our cookie banner. They collect aggregated page-view
                counts and Web Vitals timings; they do not use cross-site tracking cookies and do
                not build advertising profiles. Vercel&apos;s privacy policy is available at{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Google Analytics 4 (Usage Analytics)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Google LLC provides Google Analytics 4 to help us understand how visitors use the
                site. GA4 is loaded only after you accept analytics cookies in our cookie banner.
                We configure GA4 with IP anonymisation enabled. Google&apos;s privacy policy is
                available at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                Rewardful (Affiliate Tracking)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Rewardful, Inc. provides the affiliate attribution system that tracks referrals from
                our affiliate partners. The Rewardful script is loaded only after you accept
                marketing cookies in our cookie banner. It sets a first-party referral cookie so
                that eligible affiliates can be credited for sign-ups they refer. Rewardful&apos;s
                privacy policy is available at{' '}
                <a
                  href="https://www.rewardful.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  rewardful.com/privacy-policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 6. Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            6. Data Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal data only for as long as necessary to fulfil the purposes for
            which it was collected, or as required by law:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Account data:</strong> Retained for the
              duration of your account. If you delete your account, we will erase your personal
              data within 30 days, except where we are legally required to retain it.
            </li>
            <li>
              <strong className="text-foreground">Learning progress and submissions:</strong>{' '}
              Retained for the duration of your account. Essay submissions and AI feedback are
              retained so you can review your past work. Upon account deletion, this data is
              erased within 30 days.
            </li>
            <li>
              <strong className="text-foreground">Billing records:</strong> Transaction records
              are retained for 7 years after the transaction date to comply with UK tax and
              accounting obligations (as required by HMRC).
            </li>
            <li>
              <strong className="text-foreground">Technical and error logs:</strong> Retained for
              up to 90 days for debugging and security purposes, then automatically deleted.
            </li>
            <li>
              <strong className="text-foreground">Marketing consent records:</strong> Retained
              for as long as the consent is active, plus 3 years after withdrawal to demonstrate
              compliance.
            </li>
          </ul>
        </section>

        {/* 7. Children's Data */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            7. Children&apos;s Data and Parental Consent
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The English Hub is designed for GCSE students, many of whom are aged 14&ndash;16. We
            take the protection of children&apos;s data extremely seriously and have implemented
            the following safeguards:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              Under the UK GDPR and the Age Appropriate Design Code (Children&apos;s Code), the
              age of digital consent in the UK is 13. For users aged 13&ndash;15, we require
              verifiable parental or guardian consent before creating an account and processing
              their personal data. Users aged 16 and over may provide their own consent.
            </li>
            <li>
              During registration, users under 16 must provide a parent or guardian&apos;s email
              address. We contact the parent/guardian to obtain their consent before the
              student&apos;s account is fully activated.
            </li>
            <li>
              Parents and guardians can review, amend, or request deletion of their child&apos;s
              data at any time by contacting us at{' '}
              <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                info@Upskillenergy.com
              </a>
              .
            </li>
            <li>
              We apply the principle of data minimisation and only collect personal data from
              children that is strictly necessary to provide the learning service.
            </li>
            <li>
              We do not serve behavioural advertising to any users, and we do not profile children
              for purposes unrelated to their education.
            </li>
            <li>
              Our platform is designed with high privacy settings by default, in line with the
              ICO&apos;s Age Appropriate Design Code.
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-6">
            As an EdTech platform serving students aged 14+, we operate within scope of the UK
            ICO&apos;s Age Appropriate Design Code (the &ldquo;Children&apos;s Code&rdquo;). The
            table below tracks our commitments against each of the 15 standards.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">
            Our Children&apos;s Code commitments
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left font-semibold text-foreground p-3 border-b border-border">
                    ICO Children&apos;s Code standard
                  </th>
                  <th className="text-left font-semibold text-foreground p-3 border-b border-border">
                    How The English Hub meets it
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-3 align-top">1. Best interests of the child</td>
                  <td className="p-3 align-top">All product decisions affecting under-18s are reviewed against the DPIA before release. Safeguarding lead has veto.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">2. Data protection impact assessments</td>
                  <td className="p-3 align-top">DPIA published at /compliance/dpia.pdf. Updated on every material feature change.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">3. Age-appropriate application</td>
                  <td className="p-3 align-top">Account flows branch by age at signup (13-15, 16-17, 18+). UI, copy, and defaults adapt per age cohort.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">4. Transparency</td>
                  <td className="p-3 align-top">Privacy policy, data-use summary, and Children&apos;s Code matrix written in plain English. Tested with under-16 users for comprehension.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">5. Detrimental use of data</td>
                  <td className="p-3 align-top">No advertising, no profiling for commercial purposes, no data sold to third parties. AI training opt-in is off by default for all minors.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">6. Policies and community standards</td>
                  <td className="p-3 align-top">Published safeguarding policy enforced. Users can flag harmful content; human review within 24h.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">7. Default settings</td>
                  <td className="p-3 align-top">All minor accounts default to: profile private, analytics off, marketing off, AI training opt-in off.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">8. Data minimisation</td>
                  <td className="p-3 align-top">We collect email, DOB, and essay submissions only. No address, no phone, no payment info from minors (parent pays).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">9. Data sharing</td>
                  <td className="p-3 align-top">Sub-processors listed at /compliance. No third-party ad networks. EU hosting only.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">10. Geolocation</td>
                  <td className="p-3 align-top">Not collected for minors. No location-based features.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">11. Parental controls</td>
                  <td className="p-3 align-top">Parent accounts can be linked to child accounts. Parent sees child&apos;s essay history and weekly progress. Transparency flag shown to child when parent linkage is active.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">12. Profiling</td>
                  <td className="p-3 align-top">No behavioural profiling. AI marking is deterministic per essay — no cross-essay inference that affects feature access.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">13. Nudge techniques</td>
                  <td className="p-3 align-top">No gamification patterns that exploit developmental vulnerabilities. No &ldquo;streak&rdquo; pressure; progress is informational, not coercive.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top">14. Connected toys and devices</td>
                  <td className="p-3 align-top">Not applicable — The English Hub is a web + mobile SaaS.</td>
                </tr>
                <tr>
                  <td className="p-3 align-top">15. Online tools</td>
                  <td className="p-3 align-top">Privacy tools (export, delete, correct) accessible from the account page. All actions complete in ≤30 days per UK GDPR.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. Your Rights Under UK GDPR */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            8. Your Rights Under UK GDPR
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under UK data protection law, you have the following rights in relation to your
            personal data. These rights apply to all users, and parents/guardians may exercise
            these rights on behalf of their children:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Right of access:</strong> You have the right to
              request a copy of the personal data we hold about you. We will respond to your
              request within one month.
            </li>
            <li>
              <strong className="text-foreground">Right to rectification:</strong> You have the
              right to ask us to correct any inaccurate or incomplete personal data we hold about
              you. You can update most account information directly through your account settings.
            </li>
            <li>
              <strong className="text-foreground">Right to erasure:</strong> You have the right to
              ask us to delete your personal data. We will do so unless we have a lawful reason to
              continue processing it (e.g. legal record-keeping obligations).
            </li>
            <li>
              <strong className="text-foreground">Right to data portability:</strong> You have the
              right to receive your personal data in a structured, commonly used, and
              machine-readable format (e.g. JSON or CSV). This includes your learning progress,
              exam results, and essay submissions.
            </li>
            <li>
              <strong className="text-foreground">Right to restrict processing:</strong> You have
              the right to ask us to limit how we use your data in certain circumstances, for
              example while we investigate a complaint.
            </li>
            <li>
              <strong className="text-foreground">Right to object:</strong> You have the right to
              object to processing based on legitimate interests. We will stop processing unless
              we can demonstrate compelling legitimate grounds that override your interests.
            </li>
            <li>
              <strong className="text-foreground">Right to withdraw consent:</strong> Where we
              rely on consent to process your data, you may withdraw that consent at any time.
              Withdrawal does not affect the lawfulness of processing carried out before
              withdrawal.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
              info@Upskillenergy.com
            </a>
            . We will respond within one month. If your request is complex or we receive a large
            number of requests, we may extend this by a further two months, but we will let you
            know within the first month.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            If you are unsatisfied with our response, you have the right to lodge a complaint with
            the Information Commissioner&apos;s Office (ICO), the UK&apos;s supervisory authority
            for data protection. You can contact the ICO at{' '}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              ico.org.uk/make-a-complaint
            </a>{' '}
            or by calling 0303 123 1113.
          </p>
        </section>

        {/* 9. Cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            9. Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies and similar technologies to operate our platform. Our use of cookies
            falls into the following categories:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Strictly necessary cookies:</strong> Required
              for the platform to function, including authentication session cookies and security
              tokens. These do not require consent.
            </li>
            <li>
              <strong className="text-foreground">Functional cookies:</strong> Remember your
              preferences such as theme settings and display options.
            </li>
            <li>
              <strong className="text-foreground">Analytics cookies:</strong> Help us understand
              how users interact with the platform so we can improve it. These are only set with
              your consent.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We do not use advertising or tracking cookies. You can manage your cookie preferences
            at any time through the cookie settings on our website. For full details, please see
            our Cookie Policy.
          </p>
        </section>

        {/* 10. International Data Transfers */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            10. International Data Transfers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Some of our third-party processors are based in the United States. When your personal
            data is transferred outside the UK, we ensure that appropriate safeguards are in place
            to protect it, in compliance with UK GDPR:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-3">
            <li>
              <strong className="text-foreground">UK International Data Transfer Agreement (IDTA):</strong>{' '}
              We enter into the UK IDTA or the UK Addendum to the EU Standard Contractual Clauses
              with each US-based processor, as approved by the ICO.
            </li>
            <li>
              <strong className="text-foreground">Supplementary measures:</strong> Where
              necessary, we implement additional technical and organisational safeguards, such as
              encryption in transit and at rest, to ensure your data remains protected.
            </li>
            <li>
              <strong className="text-foreground">Adequacy decisions:</strong> Where the UK
              government has made an adequacy decision for a country, we may rely on that decision
              as the basis for the transfer.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            The following processors transfer data outside the UK: Stripe (US), Supabase (US),
            Anthropic (US), Vercel (US), and Sentry (US). Each has appropriate transfer mechanisms
            in place as described above.
          </p>
        </section>

        {/* 11. Data Security */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            11. Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, alteration, disclosure, or destruction. These
            measures include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>Encryption of data in transit using TLS 1.2 or higher</li>
            <li>Encryption of data at rest in our database</li>
            <li>Secure password hashing using industry-standard algorithms</li>
            <li>Role-based access controls for staff accessing personal data</li>
            <li>Regular security reviews and dependency updates</li>
            <li>Automated error monitoring to detect and respond to incidents quickly</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            While we take all reasonable steps to protect your data, no method of transmission over
            the internet or method of electronic storage is completely secure. If you become aware
            of any security issue, please contact us immediately at{' '}
            <a href="mailto:security@theenglishhub.app" className="underline text-foreground">
              security@theenglishhub.app
            </a>
            .
          </p>
        </section>

        {/* 12. Changes to This Policy */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            12. Changes to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this privacy policy from time to time to reflect changes in our
            practices, technology, legal requirements, or other factors. When we make material
            changes, we will notify you by email or by displaying a prominent notice on our
            platform prior to the change taking effect. We encourage you to review this page
            periodically.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            For users under 16, we will notify both the student and their parent/guardian of any
            material changes to this policy.
          </p>
        </section>

        {/* 13. Data Protection Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            13. Data Protection Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We have assessed our processing activities under Article 37 of UK GDPR and
            determined that a formal Data Protection Officer (DPO) appointment is not
            required at our current scale of operations. We take data protection
            seriously: data subject rights requests, privacy queries, and any contact
            from the ICO should be directed to our general contact email below
            (see section 14). Requests are handled by our privacy team.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Our privacy responsibilities include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>Monitoring compliance with UK GDPR and the Data Protection Act 2018</li>
            <li>Carrying out Data Protection Impact Assessments (DPIAs), particularly for features accessed by children</li>
            <li>Responding to the Information Commissioner&apos;s Office (ICO) when contacted</li>
            <li>Handling data subject access requests and other rights requests</li>
            <li>Overseeing compliance with the ICO&apos;s Age Appropriate Design Code (Children&apos;s Code)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            This assessment is reviewed annually or whenever there is a significant change
            in our processing activities. Should our processing activities change to the
            extent that a formal DPO appointment is required under Article 37, we will
            make such an appointment and update this policy to name the appointed person.
          </p>
        </section>

        {/* 14. Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            14. Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this privacy policy, your personal data, or wish to
            exercise any of your rights, please contact us:
          </p>
          <ul className="list-none pl-0 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Email:</strong>{' '}
              <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">Website:</strong>{' '}
              <a href="https://theenglishhub.app" className="underline text-foreground">
                theenglishhub.app
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            If you are not satisfied with our response, you have the right to complain to the
            Information Commissioner&apos;s Office (ICO):
          </p>
          <ul className="list-none pl-0 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Website:</strong>{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground"
              >
                ico.org.uk
              </a>
            </li>
            <li>
              <strong className="text-foreground">Telephone:</strong> 0303 123 1113
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
