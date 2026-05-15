import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  openGraph: {
    title: 'Online Safety Policy',
    description:
      'How The English Hub complies with the Online Safety Act 2023, including content moderation, reporting routes, and risk assessment for user-generated content.',
  },
  title: 'Online Safety Policy',
  description:
    'How The English Hub complies with the Online Safety Act 2023, including content moderation, reporting routes, and risk assessment for user-generated content.',
  alternates: { canonical: 'https://theenglishhub.app/legal/online-safety' },
}

export default function OnlineSafetyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Online Safety Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-8 space-y-8">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            The English Hub is a GCSE English revision and learning platform operated by Upskill
            Energy Limited. Our primary users are students aged 14&ndash;16, and we take our
            responsibilities under the{' '}
            <strong className="text-foreground">Online Safety Act 2023</strong> seriously. This
            policy explains how we moderate user-generated content, how to report concerns, and the
            steps we take to keep our platform safe.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We are committed to meeting the duties of care set out by Ofcom in the codes of practice
            issued under the Online Safety Act, including the duty to protect children from harmful
            content.
          </p>
        </section>

        {/* 2. Scope of user-generated content */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            2. User-Generated Content on The English Hub
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The types of content that users can submit on our platform are limited and
            education-focused:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Essay submissions</strong> &mdash; written
              responses submitted for AI marking feedback.
            </li>
            <li>
              <strong className="text-foreground">Quiz responses</strong> &mdash; answers to
              structured revision questions.
            </li>
            <li>
              <strong className="text-foreground">Personal notes</strong> &mdash; notes saved by the
              student for their own revision (visible only to that student).
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            The English Hub does <em>not</em> include social features such as messaging, forums,
            comment sections, or profile pages visible to other users. Users cannot communicate with
            one another through the platform.
          </p>
        </section>

        {/* 3. Content moderation policy */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            3. Content Moderation Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Although our platform does not facilitate user-to-user communication, we still moderate
            content to ensure our AI marking system is not misused and to protect the safety of our
            users.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">
            3.1 Automated safeguards
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              Essay submissions are processed by our AI marking system, which is instructed to flag
              or decline to process content that is not a genuine educational essay response (for
              example, content containing hate speech, threats, explicit material, or content
              promoting self-harm).
            </li>
            <li>
              Submissions that the AI system flags as potentially harmful are logged for human
              review and are not returned to the user with a grade.
            </li>
            <li>Rate limiting is applied to prevent automated abuse of the submission system.</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">3.2 Human review</h3>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Flagged content is reviewed by a member of our team within 48 hours.</li>
            <li>
              If content is confirmed to be harmful or illegal, it is removed and the relevant
              authorities are notified where required by law.
            </li>
            <li>Accounts that repeatedly submit harmful content may be suspended or terminated.</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-5 mb-2">3.3 Prohibited content</h3>
          <p className="text-muted-foreground leading-relaxed">
            The following categories of content are prohibited on The English Hub:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>
              <strong className="text-foreground">Illegal content</strong> &mdash; including child
              sexual abuse material (CSAM), terrorism content, and content that incites violence.
            </li>
            <li>
              <strong className="text-foreground">Content harmful to children</strong> &mdash;
              including content promoting self-harm, suicide, eating disorders, or substance abuse.
            </li>
            <li>
              <strong className="text-foreground">Hate speech</strong> &mdash; content targeting
              individuals or groups based on protected characteristics.
            </li>
            <li>
              <strong className="text-foreground">Harassment and bullying</strong> &mdash; content
              intended to intimidate, threaten, or demean others.
            </li>
            <li>
              <strong className="text-foreground">Explicit or sexual content</strong> &mdash;
              including pornographic material or sexually explicit text.
            </li>
            <li>
              <strong className="text-foreground">Fraudulent content</strong> &mdash; content
              designed to scam, deceive, or phish other users or third parties.
            </li>
          </ul>
        </section>

        {/* 4. Reporting harmful content */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            4. How to Report Harmful or Illegal Content
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you encounter content on The English Hub that you believe is harmful, illegal, or
            inappropriate, please report it to us immediately using any of the following methods:
          </p>
          <div className="mt-4 rounded-lg border border-border bg-muted/50 p-5 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:safety@theenglishhub.app" className="underline text-foreground">
                  safety@theenglishhub.app
                </a>{' '}
                &mdash; we aim to acknowledge reports within 24 hours.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">General contact</p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                  info@Upskillenergy.com
                </a>
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-3">
            When reporting, please include as much detail as possible, including the nature of the
            content, when you encountered it, and (if applicable) the user account involved. All
            reports are treated confidentially.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            If you believe a child is in immediate danger, please contact the police on{' '}
            <strong className="text-foreground">999</strong> or the{' '}
            <a
              href="https://www.ceop.police.uk/Safety-Centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              CEOP Safety Centre
            </a>
            .
          </p>
        </section>

        {/* 5. Risk assessment summary */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            5. Risk Assessment Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We have carried out a risk assessment of our platform in line with the requirements of
            the Online Safety Act 2023 and Ofcom&apos;s guidance. Below is a summary of the key risk
            areas and our mitigations:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Risk area</th>
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Level</th>
                  <th className="py-2 text-left font-semibold text-foreground">Mitigations</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 align-top font-medium text-foreground">
                    Illegal content in essays
                  </td>
                  <td className="py-3 pr-4 align-top">Low</td>
                  <td className="py-3 align-top">
                    AI moderation flags non-educational content; human review of flagged items; no
                    user-to-user sharing of essays.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 align-top font-medium text-foreground">
                    Content harmful to children
                  </td>
                  <td className="py-3 pr-4 align-top">Low</td>
                  <td className="py-3 align-top">
                    Essay content is private to the submitting user; AI system declines to process
                    harmful prompts; no social features.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 align-top font-medium text-foreground">
                    User-to-user contact
                  </td>
                  <td className="py-3 pr-4 align-top">None</td>
                  <td className="py-3 align-top">
                    No messaging, forums, or social features exist on the platform. Users cannot
                    contact one another.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 align-top font-medium text-foreground">
                    Misuse of AI marking
                  </td>
                  <td className="py-3 pr-4 align-top">Low</td>
                  <td className="py-3 align-top">
                    Rate limiting; AI prompt safety instructions; AI opt-out available for parents;
                    AI grades clearly labelled as non-official.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top font-medium text-foreground">
                    Data protection (children)
                  </td>
                  <td className="py-3 pr-4 align-top">Medium</td>
                  <td className="py-3 align-top">
                    Privacy-by-default settings; parental consent for under-16s; data minimisation;
                    no personal data sent to AI provider; DPIA completed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-4">
            This risk assessment is reviewed at least annually, or whenever there is a significant
            change to the platform&apos;s features or user base.
          </p>
        </section>

        {/* 6. Transparency about AI */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. AI Transparency</h2>
          <p className="text-muted-foreground leading-relaxed">
            The English Hub uses AI (provided by Anthropic) to generate essay feedback. We are
            transparent about this use:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              AI-generated grades and feedback are clearly labelled as predictions, not official
              exam results.
            </li>
            <li>
              Users and parents can opt out of AI features at any time via{' '}
              <Link href="/parent/settings" className="underline text-foreground">
                Parent Settings
              </Link>
              .
            </li>
            <li>
              A full explanation of how AI marking works is available on our{' '}
              <Link href="/marking/ai-explainer" className="underline text-foreground">
                AI Marking Explainer
              </Link>{' '}
              page.
            </li>
          </ul>
        </section>

        {/* 7. Complaints and appeals */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            7. Complaints and Appeals
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you believe content has been incorrectly flagged or removed, or if you have a
            complaint about our content moderation decisions, you can appeal by contacting us at{' '}
            <a href="mailto:safety@theenglishhub.app" className="underline text-foreground">
              safety@theenglishhub.app
            </a>
            . We will review appeals within 10 working days and provide a written response
            explaining our decision.
          </p>
        </section>

        {/* 8. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any questions about this policy or online safety on The English Hub:
          </p>
          <ul className="list-none pl-0 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Safety reports:</strong>{' '}
              <a href="mailto:safety@theenglishhub.app" className="underline text-foreground">
                safety@theenglishhub.app
              </a>
            </li>
            <li>
              <strong className="text-foreground">General enquiries:</strong>{' '}
              <a href="mailto:info@Upskillenergy.com" className="underline text-foreground">
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">Website:</strong>{' '}
              <Link href="/" className="underline text-foreground">
                theenglishhub.app
              </Link>
            </li>
          </ul>
        </section>

        {/* Related policies */}
        <section className="rounded-lg border border-border bg-muted/50 p-5">
          <h2 className="text-base font-semibold text-foreground mb-2">Related policies</h2>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li>
              <Link href="/privacy-policy" className="underline text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/marking/ai-explainer" className="underline text-foreground">
                AI Marking Explainer
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
