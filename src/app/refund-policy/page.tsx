import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Our refund and cancellation policy for The English Hub subscriptions and course purchases. Clear terms for students, parents, and institutions.',
  alternates: { canonical: 'https://theenglishhub.app/refund-policy' },
  openGraph: {
    title: 'Refund Policy — The English Hub',
    description:
      'Our refund and cancellation policy for The English Hub subscriptions and course purchases. Clear terms for students, parents, and institutions.',
  },
}

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Refund Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Operated by Upskill Energy Limited, trading as The English Hub
        <br />
        Last updated: March 2026
      </p>

      <div className="mt-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Overview</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            At The English Hub (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), we want you
            to be completely satisfied with your purchase. This refund policy explains your rights
            when you buy a subscription or course through{' '}
            <Link href="https://theenglishhub.app" className="underline hover:text-foreground">
              theenglishhub.app
            </Link>
            . It applies to all customers, including those based in the United Kingdom, and reflects
            your rights under the Consumer Contracts (Information, Cancellation and Additional
            Charges) Regulations 2013.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            All payments are processed securely through Stripe. We do not store your card details on
            our servers.
          </p>
        </section>

        {/* Cooling-off period */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Your 14-day cooling-off period
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Under the Consumer Contracts (Information, Cancellation and Additional Charges)
            Regulations 2013, when you purchase digital content or a subscription online you have
            the right to cancel within 14 days of your purchase without giving any reason. This is
            sometimes called the &ldquo;cooling-off period&rdquo;.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            However, please note that once you begin accessing or downloading digital content (for
            example, starting a course lesson or downloading course materials), you may lose this
            right if you gave your explicit consent to begin receiving the content before the end of
            the cooling-off period. We will always ask for your consent before delivering digital
            content during the cooling-off period and inform you that doing so will affect your
            cancellation rights.
          </p>
        </section>

        {/* Subscriptions */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Subscription cancellations</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You can cancel your subscription at any time from your account settings or through the
            Stripe billing portal. When you cancel:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              Your subscription will remain active until the end of your current billing period. You
              will continue to have full access to all subscription features until that date.
            </li>
            <li>
              You will not be charged again after cancellation. No further payments will be taken
              once the current period ends.
            </li>
            <li>
              If you cancel within 14 days of your first subscription payment and have not
              substantially used the platform (for example, you have not completed any course
              modules), you are entitled to a full refund of that payment under your cooling-off
              rights.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We do not offer partial refunds for unused portions of a billing period outside the
            14-day cooling-off window, because you retain access to the service for the remainder of
            the period you have already paid for.
          </p>
        </section>

        {/* Free trial */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Free trial</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We offer a 30-day free trial so you can explore The English Hub before committing to a
            paid plan. During the trial:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>You will not be charged anything for the first 30 days.</li>
            <li>
              If you cancel at any point during the 30-day trial, your account will simply revert to
              a free account and you will never be billed.
            </li>
            <li>
              If you do not cancel before the trial ends, your chosen subscription plan will begin
              and your payment method will be charged automatically.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We recommend setting a reminder if you are unsure whether you want to continue. You can
            check your trial end date at any time in your account settings.
          </p>
        </section>

        {/* One-time course purchases */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. One-time course purchases</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you purchase an individual course as a one-time payment (outside of a subscription),
            the following refund terms apply:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Course not started:</strong> You may request a
              full refund within 14 days of purchase if you have not started the course (i.e., you
              have not opened or accessed any lesson content). This is in line with your statutory
              cooling-off rights.
            </li>
            <li>
              <strong className="text-foreground">Course started:</strong> If you have begun the
              course by accessing lesson content, you will have given your explicit consent to
              receive digital content during the cooling-off period. In that case, a refund may not
              be available. However, if you experience a genuine issue with the course (for example,
              the content is materially different from what was described), please contact us and we
              will review your case.
            </li>
          </ul>
        </section>

        {/* How to request a refund */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">6. How to request a refund</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            To request a refund, you can either:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Email us</strong> at{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline hover:text-foreground"
              >
                info@Upskillenergy.com
              </a>{' '}
              with your account email address and a brief description of why you would like a
              refund. We aim to respond to all refund requests within two business days.
            </li>
            <li>
              <strong className="text-foreground">Use the Stripe billing portal</strong> accessible
              from your account settings. The portal allows you to manage your subscription and
              payment details directly, including cancellation.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Please include the email address associated with your account so we can locate your
            purchase quickly. If you are a parent or guardian requesting a refund on behalf of a
            student, please mention this in your email so we can verify the account.
          </p>
        </section>

        {/* Processing time */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Refund processing time</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Once a refund has been approved, it will be processed within 5 to 10 business days. The
            exact time it takes for the refund to appear in your account depends on your bank or
            card provider. In most cases, refunds are completed within five business days, but some
            providers may take up to ten.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you have not received your refund after ten business days, please check with your
            bank or card provider first. If the issue persists, contact us at{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="underline hover:text-foreground"
            >
              info@Upskillenergy.com
            </a>{' '}
            and we will investigate.
          </p>
        </section>

        {/* Method of refund */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Method of refund</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            All refunds are returned to the original payment method used at the time of purchase.
            Refunds are processed through Stripe, our payment provider. We are unable to issue
            refunds to a different card, bank account, or payment method. If the original payment
            method is no longer active (for example, an expired card), the refund will typically
            still be routed to your account by your bank. If you have any difficulty receiving your
            refund, please contact your bank or card provider.
          </p>
        </section>

        {/* Exceptions */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Exceptions</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Refunds are not available in the following circumstances:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Completed courses:</strong> If you have completed
              a course in full (i.e., accessed all lessons and received a completion certificate), a
              refund cannot be issued for that course.
            </li>
            <li>
              <strong className="text-foreground">
                Digital content consumed with explicit consent:
              </strong>{' '}
              Where you have given your explicit consent to begin receiving digital content before
              the end of the 14-day cooling-off period and acknowledged that doing so means you lose
              your right to cancel, we are not obliged to offer a refund. This is consistent with
              Regulation 37 of the Consumer Contracts Regulations 2013.
            </li>
            <li>
              <strong className="text-foreground">Abuse of refund policy:</strong> We reserve the
              right to refuse a refund if we have reasonable grounds to believe the refund system is
              being misused, for example by repeatedly purchasing and refunding the same content.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            These exceptions do not affect your statutory rights. If you believe you have been
            treated unfairly, you are welcome to contact us and we will do our best to resolve the
            matter.
          </p>
        </section>

        {/* Your statutory rights */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Your statutory rights</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Nothing in this policy affects your statutory rights under UK consumer law, including the
            Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and
            Additional Charges) Regulations 2013. If digital content is faulty or not as described,
            you have additional rights to a repair, replacement, or refund regardless of the
            exceptions listed above.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">11. Contact us</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you have any questions about this refund policy or need help with a refund request,
            please get in touch:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              Email:{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline hover:text-foreground"
              >
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              Contact form:{' '}
              <Link href="/contact" className="underline hover:text-foreground">
                theenglishhub.app/contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
