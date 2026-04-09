import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints Procedure",
  description:
    "Complaints Procedure for The English Hub, explaining how to raise concerns and what to expect.",
};

export default function ComplaintsProcedurePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Complaints Procedure</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Effective Date: 22 March 2026 | Version 1.0
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-3">
          We want The English Hub to be a great experience for everyone. If
          something goes wrong or you are unhappy with any part of our service,
          we want to hear about it so we can put things right.
        </p>
        <p>
          This procedure applies to all users, parents/guardians, schools, and
          anyone affected by our services. We treat every complaint seriously and
          fairly.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. How to Complain</h2>
        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">By Email</h3>
            <p className="text-sm">
              Send an email to{" "}
              <a href="mailto:info@Upskillenergy.com">
                info@Upskillenergy.com
              </a>
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Using the In-Platform Form</h3>
            <p className="text-sm">
              Log in and go to <strong>Help &gt; Make a Complaint</strong>
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">By Post</h3>
            <p className="text-sm">
              Write to: Complaints Team, Upskill Energy Limited, United Kingdom
            </p>
          </div>
        </div>
        <p className="mb-2 font-semibold text-sm">
          What to include in your complaint:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Your name (or you can complain anonymously)</li>
          <li>Your email address or username</li>
          <li>What happened — describe the problem in your own words</li>
          <li>When it happened</li>
          <li>
            What you would like us to do (apology, fix, refund, explanation)
          </li>
          <li>Any evidence (screenshots, emails, reference numbers)</li>
        </ul>
        <p className="mt-3 text-sm">
          You do not need to use formal language. Just tell us what went wrong.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Complaint Categories</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              title: "Service Quality",
              desc: "Lessons not loading, slow performance, features not working",
            },
            {
              title: "AI Feedback Accuracy",
              desc: "Incorrect, unfair, inconsistent, or inappropriate AI feedback",
            },
            {
              title: "Billing & Subscription",
              desc: "Wrong charges, difficulty cancelling, missing refunds",
            },
            {
              title: "Data Protection",
              desc: "Data shared without permission, data access or deletion requests",
            },
            {
              title: "Content Issues",
              desc: "Offensive material, factual errors, age-inappropriate content",
            },
            {
              title: "Accessibility",
              desc: "Screen reader issues, colour contrast, navigation difficulties",
            },
            {
              title: "Discrimination",
              desc: "Unfair treatment based on any protected characteristic",
            },
          ].map((category) => (
            <div
              key={category.title}
              className="bg-muted rounded-lg p-3 text-sm"
            >
              <p className="font-semibold">{category.title}</p>
              <p className="text-muted-foreground">{category.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-warn/5 border border-warn/20 rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold">Safeguarding Concerns</p>
          <p className="mb-2">
            Safeguarding complaints are treated with the highest priority and
            follow a separate, accelerated process. Response within{" "}
            <strong>24 hours</strong> is guaranteed.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:safeguarding@theenglishhub.app">
                safeguarding@theenglishhub.app
              </a>
            </li>
            <li>
              In-platform: Use the <strong>Report</strong> button on every page
            </li>
          </ul>
          <p className="mt-2 font-semibold">
            If you believe a child is in immediate danger, contact the police on
            999.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Complaints Process</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg">
              Stage 1: Initial Response — Within 3 Working Days
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
              <li>
                Acknowledgement within <strong>1 working day</strong>
              </li>
              <li>Assessment and assignment to the appropriate team</li>
              <li>
                Named contact, unique reference number, and estimated timeline
                provided within <strong>3 working days</strong>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg">
              Stage 2: Investigation — Within 10 Working Days
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
              <li>
                Thorough investigation (system logs, staff interviews, content
                review)
              </li>
              <li>We may contact you for more information</li>
              <li>
                Written summary of findings within{" "}
                <strong>10 working days</strong>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg">
              Stage 3: Final Response — Within 20 Working Days
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
              <li>
                Senior review by a manager not involved in earlier stages
              </li>
              <li>
                Final written response with full summary, findings, decision,
                remedies, and external escalation options
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-border pl-4">
            <h3 className="font-semibold text-lg">
              Stage 4: External Escalation
            </h3>
            <p className="text-sm mt-2">
              If you remain dissatisfied, you can take your complaint to an
              external body (see below).
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Stage
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Maximum Timeframe
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Stage 1: Initial Response</td>
                <td className="px-4 py-2 border-b">3 working days</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Stage 2: Investigation</td>
                <td className="px-4 py-2 border-b">10 working days</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Stage 3: Final Response</td>
                <td className="px-4 py-2 border-b">20 working days</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Safeguarding concerns</td>
                <td className="px-4 py-2 border-b">
                  24 hours (immediate escalation)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. External Escalation Options
        </h2>
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-semibold">
              Information Commissioner&apos;s Office (ICO)
            </p>
            <p className="text-muted-foreground">
              For data protection and privacy complaints
            </p>
            <p>
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>{" "}
              | 0303 123 1113
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-semibold">
              Advertising Standards Authority (ASA)
            </p>
            <p className="text-muted-foreground">
              For complaints about advertising or marketing
            </p>
            <p>
              <a
                href="https://www.asa.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                asa.org.uk
              </a>
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-semibold">
              Competition and Markets Authority (CMA)
            </p>
            <p className="text-muted-foreground">
              For consumer rights, unfair terms, or anti-competitive practices
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-semibold">Trading Standards</p>
            <p className="text-muted-foreground">
              For unfair trading practices, pricing, or consumer rights
            </p>
            <p>Citizens Advice Consumer Service: 0808 223 1133</p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm">
            <p className="font-semibold">
              Qatar National Cyber Security Agency (NCSA)
            </p>
            <p className="text-muted-foreground">
              For data protection complaints under Qatari jurisdiction
            </p>
            <p>
              <a
                href="https://www.ncsa.gov.qa"
                target="_blank"
                rel="noopener noreferrer"
              >
                ncsa.gov.qa
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. Young Person Considerations
        </h2>
        <p className="mb-3">
          Many of our users are aged 14 to 18. We are committed to making the
          complaints process accessible, supportive, and non-intimidating:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plain language:</strong> All communications in clear,
            straightforward language
          </li>
          <li>
            <strong>Guidance:</strong> If you are unsure, we will help you put
            your complaint into words
          </li>
          <li>
            <strong>No pressure:</strong> Every complaint matters — you will
            never be made to feel it is trivial
          </li>
          <li>
            <strong>Parent/guardian involvement:</strong> You can ask a trusted
            adult to complain on your behalf
          </li>
          <li>
            <strong>Anonymous option:</strong> Submit anonymously through the
            in-platform form. We may not be able to update you, but we will still
            investigate.
          </li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">
          7. Learning from Complaints
        </h2>
        <p className="mb-3">
          We believe complaints are valuable feedback. Every complaint is reviewed
          individually after closure and examined as part of quarterly trend
          analysis. Where complaints reveal issues, we take concrete action:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Action Type
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Immediate fix</td>
                <td className="px-4 py-2 border-b">
                  Correcting a factual error in lesson content
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Process change</td>
                <td className="px-4 py-2 border-b">
                  Updating the cancellation flow after repeated billing
                  complaints
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Training</td>
                <td className="px-4 py-2 border-b">
                  Additional staff training following communication complaints
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">System update</td>
                <td className="px-4 py-2 border-b">
                  Improving AI feedback algorithms after accuracy complaints
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-sm text-muted-foreground italic mt-8">
        If you have any questions about this complaints procedure, contact us at{" "}
        <a href="mailto:complaints@theenglishhub.app">
          complaints@theenglishhub.app
        </a>
        .
      </p>
    </>
  );
}
