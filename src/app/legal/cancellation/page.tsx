import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation Policy for The English Hub, explaining your right to cancel and how refunds work.",
};

export default function CancellationPolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Cancellation Policy</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 22 March 2026
      </p>

      <p className="mb-6">
        This policy explains your right to cancel your subscription, how to do
        it, and what happens next. It complies with the Consumer Contracts
        Regulations 2013 and the Digital Markets, Competition and Consumers Act
        2024.
      </p>

      {/* In short */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm">
        <h2 className="text-lg font-semibold mb-2">In Short</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            You have <strong>14 days</strong> to change your mind — no questions
            asked
          </li>
          <li>Cancelling is easy: online or by email</li>
          <li>If you cancel, we will refund you within 14 days</li>
          <li>We will never make it hard for you to leave</li>
        </ul>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. Your 14-Day Cooling-Off Period
        </h2>
        <p className="mb-3">
          When you subscribe, you have a <strong>14-day cooling-off period</strong>{" "}
          starting on the date you complete your purchase. During this window, you
          can cancel for <strong>any reason</strong> and receive a{" "}
          <strong>full refund</strong>.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          What If You Want Immediate Access?
        </h3>
        <p className="mb-3">
          Because The English Hub is a digital service, we will ask for your
          explicit consent before giving you immediate access during the
          cooling-off period. You must actively tick a checkbox to agree — we will
          never pre-tick it for you.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>If you consent and then cancel within 14 days:</strong> You
            will receive a refund minus a proportionate charge for the days you
            used the service. For example, if you have a monthly plan at
            &pound;9.99 and cancel after 5 days, we deduct 5/30 of &pound;9.99
            (&pound;1.67) and refund &pound;8.32.
          </li>
          <li>
            <strong>If you do not consent:</strong> Your access begins after the
            14-day period ends. Cancel within those 14 days for a full refund.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. Refund Policy and Timeline
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Situation
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  What you get back
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">
                  Cancel within 14 days (no immediate access)
                </td>
                <td className="px-4 py-2 border-b">Full refund</td>
                <td className="px-4 py-2 border-b">
                  Within 14 days of cancellation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  Cancel within 14 days (with immediate access)
                </td>
                <td className="px-4 py-2 border-b">
                  Refund minus pro-rata charge
                </td>
                <td className="px-4 py-2 border-b">
                  Within 14 days of cancellation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  Cancel monthly subscription after 14 days
                </td>
                <td className="px-4 py-2 border-b">
                  No refund; access continues until end of billing period
                </td>
                <td className="px-4 py-2 border-b">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-muted rounded-lg p-4 mt-4 text-sm">
          <p className="font-semibold mb-1">
            Example: Annual pro-rata refund
          </p>
          <p>
            You pay &pound;89.99 for a 12-month plan and cancel after 4 months
            and 10 days. You have used 5 months (4 complete + 1 partial). Refund
            for the remaining 7 months: &pound;89.99 &divide; 12 = &pound;7.50/month
            &times; 7 = <strong>&pound;52.50 refund</strong>.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Renewal Reminders</h2>
        <h3 className="text-lg font-semibold mb-2">Monthly Subscriptions</h3>
        <p className="mb-3">
          We will send a renewal reminder before every 6th payment (roughly every
          6 months), at least <strong>7 days</strong> before the payment is taken.
        </p>
        <h3 className="text-lg font-semibold mb-2">Annual Subscriptions</h3>
        <p className="mb-3">
          We will send a renewal reminder at least <strong>30 days</strong> before
          the renewal date.
        </p>
        <p>Every renewal reminder will include:</p>
        <ol className="list-decimal pl-6 space-y-1 mt-2">
          <li>The date your next payment will be taken</li>
          <li>The amount that will be charged</li>
          <li>Any price changes with old and new prices clearly stated</li>
          <li>A direct link to cancel online and our email address</li>
        </ol>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. How to Cancel</h2>
        <p className="mb-3">
          We offer <strong>two easy ways</strong> to cancel. Both are equally
          effective. You do not need to phone us or write a letter.
        </p>

        <h3 className="text-lg font-semibold mb-2">
          Option A — Cancel Online
        </h3>
        <ol className="list-decimal pl-6 space-y-1 mb-4">
          <li>Log in to your account</li>
          <li>
            Go to <strong>Account Settings</strong>
          </li>
          <li>
            Click <strong>Manage Subscription</strong>
          </li>
          <li>
            Click <strong>Cancel Subscription</strong>
          </li>
          <li>Confirm cancellation</li>
          <li>Receive confirmation email immediately</li>
        </ol>

        <h3 className="text-lg font-semibold mb-2">
          Option B — Cancel by Email
        </h3>
        <p className="mb-3">
          Send an email to{" "}
          <a href="mailto:support@theenglishhub.co.uk">
            support@theenglishhub.co.uk
          </a>{" "}
          with your full name, account email, and &quot;I want to cancel my
          subscription.&quot; We will confirm within 2 working days.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <p className="font-semibold mb-2">We will never:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Require you to phone a premium-rate number</li>
            <li>Ask you to navigate through multiple confusing screens</li>
            <li>
              Use dark patterns, persuasive language, countdown timers, or
              emotional tricks to discourage you
            </li>
            <li>Charge you a fee for cancelling</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. Effect of Cancellation on Your Access
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Your access continues until the end of your current paid period
          </li>
          <li>
            On the day your paid period ends, premium content access will stop
          </li>
          <li>Any free features remain available to you</li>
          <li>You can resubscribe at any time</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. What Happens to Your Data After Cancellation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Your account and personal data will be kept for{" "}
            <strong>30 days</strong> in case you want to resubscribe. You can ask
            us to delete it sooner.
          </li>
          <li>
            After 30 days, we will anonymise or delete your personal data in line
            with our Privacy Policy and UK GDPR.
          </li>
          <li>
            Progress and achievement data will be retained in anonymised form for
            analytics only.
          </li>
          <li>
            You can request a copy of your data at any time before deletion by
            emailing{" "}
            <a href="mailto:support@theenglishhub.co.uk">
              support@theenglishhub.co.uk
            </a>
            .
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. If You Are Under 18</h2>
        <p>
          If you are under 18, your parent or guardian may cancel on your behalf
          using any of the methods above. If you are aged 14 to 17 and manage
          your own account, you have exactly the same cancellation rights. If you
          are unsure about anything, email{" "}
          <a href="mailto:support@theenglishhub.co.uk">
            support@theenglishhub.co.uk
          </a>{" "}
          and we will help you.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <div className="bg-muted rounded-lg p-4 text-sm">
          <p>
            Email:{" "}
            <a href="mailto:support@theenglishhub.co.uk">
              support@theenglishhub.co.uk
            </a>
          </p>
          <p>Operated by: Upskill Energy Limited</p>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. Your Legal Rights</h2>
        <p>
          Nothing in this policy affects your legal rights under the Consumer
          Contracts Regulations 2013, the Consumer Rights Act 2015, or the
          Digital Markets, Competition and Consumers Act 2024.
        </p>
      </section>

      {/* Model Cancellation Form */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Model Cancellation Form</h2>
        <p className="text-sm text-muted-foreground mb-3">
          As required by the Consumer Contracts (Information, Cancellation and
          Additional Charges) Regulations 2013, Schedule 3
        </p>
        <div className="bg-muted rounded-lg p-6 text-sm border border-border">
          <p className="mb-4">
            <strong>To:</strong> Upskill Energy Limited, trading as The English
            Hub
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@theenglishhub.co.uk">
              support@theenglishhub.co.uk
            </a>
          </p>
          <p className="mb-4">
            I hereby give notice that I cancel my subscription to The English
            Hub.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Date subscription was started:</strong>{" "}
              ____________________
            </li>
            <li>
              <strong>Your name:</strong> ____________________
            </li>
            <li>
              <strong>Your email address:</strong> ____________________
            </li>
            <li>
              <strong>Your address (optional):</strong> ____________________
            </li>
            <li>
              <strong>Date of this notice:</strong> ____________________
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground italic">
            You have the right to cancel within 14 days without giving any
            reason. To meet the deadline, send this form before the 14-day period
            expires.
          </p>
        </div>
      </section>
    </>
  );
}
