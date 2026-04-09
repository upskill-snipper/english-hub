import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Processing',
  description:
    'How The English Hub processes personal data for schools and institutions. UK GDPR compliant data processing agreements and transparent practices.',
  alternates: { canonical: 'https://theenglishhub.app/data-processing' },
  openGraph: {
    title: 'Data Processing — The English Hub',
    description:
      'How The English Hub processes personal data for schools and institutions. UK GDPR compliant data processing agreements and transparent practices.',
  },
}

export default function DataProcessingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Data Processing Information
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="mt-8 prose prose-invert max-w-none space-y-8">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            This page provides information for schools, multi-academy trusts, and other educational
            institutions (&quot;Schools&quot;) about how The English Hub processes personal data when
            providing its GCSE English revision and learning platform services. It is intended to
            support Schools in meeting their accountability obligations under the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Where a School subscribes to The English Hub for use by its students and staff, the
            School acts as the <strong className="text-foreground">data controller</strong> and The
            English Hub acts as the <strong className="text-foreground">data processor</strong>,
            processing personal data on behalf of and under the instructions of the School. This
            relationship is governed by a Data Processing Agreement (DPA) that can be executed
            between the School and The English Hub.
          </p>
        </section>

        {/* 2. Data Controller and Data Processor */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            2. Data Controller and Data Processor Relationship
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under UK GDPR, the <strong className="text-foreground">data controller</strong>{' '}
            determines the purposes and means of processing personal data. When a School procures
            The English Hub for its students, the School is the data controller because it decides
            why and how student data is processed through the platform.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            The English Hub acts as the{' '}
            <strong className="text-foreground">data processor</strong>, processing personal data
            solely for the purpose of delivering the educational platform services as instructed by
            the School. We do not use School-provided personal data for our own purposes, such as
            marketing or profiling, beyond what is necessary to operate the platform.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            As data controller, the School retains responsibility for ensuring that an appropriate
            lawful basis exists for processing (typically the legitimate interest of providing
            education, or where applicable, consent), that students and parents/guardians are
            informed via the School&apos;s own privacy notice, and that data subject rights
            requests are handled in accordance with UK GDPR.
          </p>
        </section>

        {/* 3. Categories of Personal Data Processed */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            3. Categories of Personal Data Processed
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When a School uses The English Hub, the following categories of personal data may be
            processed:
          </p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Student Data</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Full name and display name</li>
            <li>Email address (school-issued or personal, as provided by the School)</li>
            <li>
              Learning progress and performance data (quiz scores, lesson completion, revision
              streaks)
            </li>
            <li>Essay and written response submissions</li>
            <li>AI-generated feedback on submitted work</li>
            <li>Course enrolment and subject selections</li>
            <li>Session and login activity (timestamps, device type, browser)</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">
            Teacher and Staff Data
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Full name and email address</li>
            <li>Role and administrative permissions within the School&apos;s account</li>
            <li>Account activity logs</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-3">
            We do not knowingly process special category data (e.g. health data, ethnicity, or
            religious beliefs). If any such data is inadvertently included in essay submissions, it
            is not extracted, categorised, or used for any purpose beyond generating feedback on
            the written work.
          </p>
        </section>

        {/* 4. Purpose and Lawful Basis */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            4. Purpose of Processing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Personal data is processed solely to provide the educational platform services agreed
            between the School and The English Hub. This includes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>Authenticating students and staff and managing account access</li>
            <li>Delivering GCSE English revision content, quizzes, and mock exams</li>
            <li>
              Providing AI-powered essay marking and feedback using large language models
            </li>
            <li>
              Tracking learning progress to enable students and teachers to monitor performance
            </li>
            <li>Generating reports and analytics for the School&apos;s own educational use</li>
            <li>Providing technical support and resolving platform issues</li>
            <li>
              Processing payments for School subscriptions (billing data is handled by Stripe and
              is not stored on our servers)
            </li>
          </ul>
        </section>

        {/* 5. Technical and Organisational Security Measures */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            5. Technical and Organisational Security Measures
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The English Hub implements appropriate technical and organisational measures to protect
            personal data against unauthorised access, loss, destruction, or alteration, in
            accordance with Article 32 of the UK GDPR. These measures include:
          </p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">Encryption</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              All data in transit is encrypted using TLS 1.2 or higher (HTTPS enforced across all
              endpoints)
            </li>
            <li>
              Data at rest is encrypted using AES-256 encryption via our database provider
              (Supabase/PostgreSQL)
            </li>
            <li>
              Passwords are hashed using bcrypt and are never stored in plain text
            </li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">
            Access Control and Authentication
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              Row Level Security (RLS) policies are enforced at the database level via Supabase,
              ensuring that users can only access data they are authorised to view
            </li>
            <li>
              Authentication is managed through Supabase Auth with support for email/password and
              OAuth providers
            </li>
            <li>
              Role-based access control separates student, teacher, and administrator permissions
            </li>
            <li>
              API endpoints are protected with authenticated session tokens and server-side
              validation
            </li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">
            Infrastructure and Monitoring
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              The platform is hosted on Vercel&apos;s edge network with automatic DDoS protection
              and global CDN
            </li>
            <li>
              Error monitoring and alerting is provided by Sentry, enabling rapid identification
              and resolution of issues
            </li>
            <li>
              Regular dependency updates and vulnerability scanning are performed as part of our
              development process
            </li>
            <li>
              Access to production systems is restricted to authorised personnel only
            </li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">
            Organisational Measures
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              Staff with access to personal data are trained on data protection responsibilities
            </li>
            <li>
              We maintain internal data processing records in accordance with Article 30 of the UK
              GDPR
            </li>
            <li>
              Incident response procedures are in place for identifying, reporting, and managing
              data breaches
            </li>
          </ul>
        </section>

        {/* 6. Sub-Processors */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Sub-Processors</h2>
          <p className="text-muted-foreground leading-relaxed">
            The English Hub engages the following third-party sub-processors to deliver its
            services. Each sub-processor has been assessed for adequate data protection standards.
            Schools will be notified of any material changes to this list.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Sub-Processor
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Data Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Supabase</td>
                  <td className="px-4 py-3">
                    Database hosting, authentication, and file storage
                  </td>
                  <td className="px-4 py-3">EU (Frankfurt, Germany)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Stripe</td>
                  <td className="px-4 py-3">
                    Payment processing for School subscriptions
                  </td>
                  <td className="px-4 py-3">EU/US</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Anthropic (Claude AI)
                  </td>
                  <td className="px-4 py-3">
                    AI-powered essay marking and feedback generation
                  </td>
                  <td className="px-4 py-3">US</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Vercel</td>
                  <td className="px-4 py-3">
                    Application hosting, edge functions, and CDN
                  </td>
                  <td className="px-4 py-3">Global (edge network)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Sentry</td>
                  <td className="px-4 py-3">Error monitoring and performance tracking</td>
                  <td className="px-4 py-3">US</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Resend</td>
                  <td className="px-4 py-3">
                    Transactional email delivery (contact form confirmations, trial notifications)
                  </td>
                  <td className="px-4 py-3">US</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Microsoft Azure</td>
                  <td className="px-4 py-3">
                    Backend API hosting and data processing
                  </td>
                  <td className="px-4 py-3">UK (UK South)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-3">
            Essay content submitted to Anthropic&apos;s Claude API for marking is processed under
            Anthropic&apos;s commercial API terms, which state that input data is not used to train
            their models. We do not send student names or email addresses to the AI model — only
            the essay text and marking criteria.
          </p>
        </section>

        {/* 7. Data Retention and Deletion */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            7. Data Retention and Deletion
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Personal data processed on behalf of a School is retained only for as long as necessary
            to provide the agreed services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">During the subscription:</strong> Student and
              staff data is retained for the duration of the School&apos;s active subscription to
              enable platform functionality.
            </li>
            <li>
              <strong className="text-foreground">On account deletion:</strong> When a School or
              individual account is deleted, all associated personal data is permanently removed
              from our live systems within 30 days. Backups containing the data are purged within
              90 days.
            </li>
            <li>
              <strong className="text-foreground">On request:</strong> Schools may request deletion
              of specific student data at any time. We will action such requests within 30 days of
              receipt.
            </li>
            <li>
              <strong className="text-foreground">End of contract:</strong> Upon termination of the
              School&apos;s subscription, we will delete or return all personal data in accordance
              with the School&apos;s instructions, unless retention is required by law.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Schools may request an export of their data in a commonly used, machine-readable format
            (CSV or JSON) prior to account closure.
          </p>
        </section>

        {/* 8. Data Breach Notification */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            8. Data Breach Notification
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In the event of a personal data breach that affects data processed on behalf of a
            School, The English Hub will:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              Notify the affected School without undue delay, and in any event within{' '}
              <strong className="text-foreground">72 hours</strong> of becoming aware of the
              breach, as required by Article 33 of the UK GDPR
            </li>
            <li>
              Provide details of the nature of the breach, the categories and approximate number of
              data subjects affected, the likely consequences, and the measures taken or proposed to
              address the breach
            </li>
            <li>
              Cooperate with the School in its obligations to notify the Information
              Commissioner&apos;s Office (ICO) and affected data subjects where required
            </li>
            <li>
              Document all breaches, including those that do not require notification, and make
              records available to the School on request
            </li>
          </ul>
        </section>

        {/* 9. International Data Transfers */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            9. International Data Transfers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our primary database infrastructure is hosted within the European Union (Supabase,
            Frankfurt). However, some sub-processors operate in the United States, which means
            personal data may be transferred outside the UK and EEA.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Where personal data is transferred to countries outside the UK that have not received
            an adequacy decision from the UK Secretary of State, we ensure appropriate safeguards
            are in place. These include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">
                International Data Transfer Agreement (IDTA) / Standard Contractual Clauses (SCCs):
              </strong>{' '}
              Our sub-processors that transfer data to the US operate under the UK IDTA or EU
              Standard Contractual Clauses as adopted under UK GDPR, supplemented by additional
              technical measures where appropriate.
            </li>
            <li>
              <strong className="text-foreground">EU-US Data Privacy Framework:</strong> Where
              applicable, sub-processors are certified under the EU-US Data Privacy Framework, which
              has been recognised as providing adequate protection by the European Commission.
            </li>
            <li>
              <strong className="text-foreground">Transfer Impact Assessments:</strong> We conduct
              assessments to evaluate the legal framework of the recipient country and the
              effectiveness of supplementary measures.
            </li>
          </ul>
        </section>

        {/* 10. Data Subject Rights */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            10. Data Subject Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Where The English Hub processes data as a data processor on behalf of a School, data
            subject access requests (DSARs) and other rights requests should be directed to the
            School as the data controller. The English Hub will assist the School in responding to
            such requests in accordance with our obligations under Article 28 of the UK GDPR.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We provide Schools with the technical capability to access, rectify, export, and delete
            student data through the platform&apos;s administrative dashboard. For requests that
            cannot be fulfilled through the dashboard, Schools may contact us directly and we will
            respond within a reasonable timeframe.
          </p>
        </section>

        {/* 11. Requesting a Formal DPA */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            11. Requesting a Formal Data Processing Agreement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Schools and educational institutions that require a formal Data Processing Agreement
            (DPA) or Data Processing Addendum can request one by contacting our partnerships team.
            Our DPA is compliant with Article 28 of the UK GDPR and covers all the matters
            outlined on this page, including detailed provisions on:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>Subject matter, duration, nature, and purpose of processing</li>
            <li>Obligations and rights of the data controller</li>
            <li>Technical and organisational security measures (Annex)</li>
            <li>Sub-processor management and notification procedures</li>
            <li>Audit rights and compliance verification</li>
            <li>Data return and deletion on termination</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            To request a DPA or discuss data protection arrangements, please contact us at{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="underline text-foreground"
            >
              info@Upskillenergy.com
            </a>
            . We are also happy to review and sign your School&apos;s own DPA template if
            preferred.
          </p>
        </section>

        {/* 12. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">12. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about how we process data on behalf of your School, or if you
            need further information to complete a Data Protection Impact Assessment (DPIA) or
            vendor security review, please get in touch:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">School partnerships and DPA requests:</strong>{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline text-foreground"
              >
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">Data protection enquiries:</strong>{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline text-foreground"
              >
                info@Upskillenergy.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
