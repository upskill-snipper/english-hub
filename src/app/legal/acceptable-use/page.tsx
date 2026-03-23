import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "Acceptable Use Policy for The English Hub, explaining what you can and cannot do on the platform.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Acceptable Use Policy</h1>
      <p className="text-gray-500 text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 22 March 2026
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Purpose and Scope</h2>
        <p>
          This Acceptable Use Policy explains what you can and cannot do when
          using The English Hub. It exists to keep the platform safe, fair, and
          useful for everyone. It applies to all features — including essay
          submission, AI feedback, learning resources, and any communication
          features — every time you use the platform.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Who This Applies To</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>All registered users (students, typically aged 14-18)</li>
          <li>Parents or guardians managing accounts on behalf of a user</li>
          <li>
            Teachers or school staff accessing through institutional licences
          </li>
          <li>Anyone else who visits or uses the platform</li>
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
            <strong>Learning and revision</strong> — studying for your GCSE or
            IGCSE English exams
          </li>
          <li>
            <strong>Submitting your own original essays</strong> for AI feedback
          </li>
          <li>
            <strong>Using AI feedback to improve your writing</strong> — reading
            suggestions and applying what you learn
          </li>
          <li>
            <strong>Accessing study resources</strong> — guides, exemplars, and
            learning materials for personal education
          </li>
          <li>
            <strong>Collaborating appropriately</strong> — working with other
            students respectfully where social features are available
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Prohibited Use</h2>
        <p className="mb-4">
          You must <strong>not</strong> do any of the following:
        </p>

        <h3 className="text-lg font-semibold mb-2">
          4.1 Academic Dishonesty
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Submitting someone else&apos;s work as your own.</strong>{" "}
            Every essay you submit must be written by you.
          </li>
          <li>
            <strong>
              Using AI feedback to produce essays for school submission.
            </strong>{" "}
            The feedback is designed to help you learn, not to write your essays
            for you.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          4.2 Misuse of the AI System
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Attempting to manipulate or exploit the AI, including prompt
            injection or feeding nonsense inputs
          </li>
          <li>
            Using automated tools, bots, scrapers, or any automated software
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          4.3 Account and Security Violations
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Sharing your account credentials with others</li>
          <li>Attempting to access other users&apos; data</li>
          <li>
            Circumventing age verification or providing false identity
            information
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          4.4 Harmful Content and Behaviour
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Uploading harmful, offensive, illegal, or sexually explicit content
          </li>
          <li>
            Bullying, intimidating, harassing, or threatening other users
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          4.5 Unauthorised Commercial Use
        </h3>
        <p>
          Do not use the platform for advertising, selling products, or any
          business activity without explicit written permission from Upskill
          Energy Limited.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. Academic Integrity Statement
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <ul className="space-y-2">
            <li>
              <strong>The AI feedback is a tutor, not a ghostwriter.</strong>{" "}
              Think of it like getting comments from a teacher on a practice
              essay.
            </li>
            <li>
              <strong>Use the feedback to improve YOUR writing.</strong> Read the
              suggestions, think about why they were made, and apply those
              lessons.
            </li>
            <li>
              <strong>
                Do not submit AI-generated or AI-assisted content as your own
                independent work at school.
              </strong>{" "}
              Many schools have strict academic integrity policies.
            </li>
            <li>
              <strong>When in doubt, ask your teacher.</strong>
            </li>
          </ul>
          <p className="mt-3 font-semibold">
            We built this platform to help you learn, not to help you cheat.
            Using it honestly will make you a better writer.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. Content Standards for Essay Submissions
        </h2>
        <p className="mb-3">
          When you submit an essay for AI feedback, your submission must:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Be written in English</li>
          <li>Be your own original work</li>
          <li>Be relevant to English language or literature study</li>
          <li>
            Not contain personal information about real, identifiable people
            (other than public figures in analytical context)
          </li>
          <li>Not contain offensive, discriminatory, or violent content</li>
          <li>Not contain any illegal content</li>
        </ul>
        <p className="mt-3 text-sm">
          We understand some GCSE/IGCSE set texts deal with mature themes.
          Discussing them thoughtfully in your studies is perfectly acceptable.
          Gratuitous content beyond genuine academic discussion is not.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          7. Consequences of Violation
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Step
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  Action
                </th>
                <th className="text-left px-4 py-2 border-b font-semibold">
                  When it typically applies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b font-medium">Warning</td>
                <td className="px-4 py-2 border-b">
                  First-time or minor violations
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b font-medium">
                  Temporary suspension
                </td>
                <td className="px-4 py-2 border-b">
                  Repeated violations or a single serious breach
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b font-medium">
                  Permanent termination
                </td>
                <td className="px-4 py-2 border-b">
                  Serious or persistent violations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          We may also remove content, notify your parent/guardian/school, or
          report illegal activity to authorities. We will always try to be fair
          and proportionate.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Reporting Mechanism</h2>
        <p className="mb-3">
          If you see something that violates this Policy, or if you experience
          behaviour that makes you uncomfortable:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>
            <strong>In-platform:</strong> Use the &quot;Report&quot; button where
            available
          </li>
          <li>
            <strong>Email:</strong> Contact us at the support email address
          </li>
          <li>
            <strong>Through your school:</strong> Speak to your teacher or
            administrator
          </li>
        </ul>
        <p className="text-sm">
          All reports are treated confidentially. You will not be penalised for
          making a report in good faith.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          9. Monitoring and Enforcement
        </h2>
        <p>
          To keep the platform safe, we may monitor content submissions using
          automated systems, review flagged content manually, and log platform
          activity for security purposes. All monitoring is in line with our
          Privacy Policy and applicable data protection laws, including the UK
          GDPR and the Children&apos;s Code.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          10. Modifications to This Policy
        </h2>
        <p>
          We may update this Policy to reflect changes in our platform, legal
          requirements, or best practices. We will update the date at the top and
          notify you of significant changes through the platform.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="bg-gray-50 rounded-lg p-4 text-sm">
          <p className="font-semibold">Upskill Energy Limited</p>
          <p>
            Website:{" "}
            <a
              href="https://www.theenglishhub.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              theenglishhub.co.uk
            </a>
          </p>
        </div>
      </section>

      <p className="text-sm text-gray-500 italic">
        This Acceptable Use Policy should be read alongside our{" "}
        <a href="/privacy-policy">Privacy Policy</a>,{" "}
        <a href="/terms">Terms and Conditions</a>, and{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>
    </>
  );
}
