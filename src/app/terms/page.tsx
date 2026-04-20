import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for using The English Hub platform. Rules governing access to courses, subscriptions, content usage, and user responsibilities.',
  alternates: { canonical: 'https://theenglishhub.app/terms' },
  openGraph: {
    title: 'Terms of Service — The English Hub',
    description:
      'Terms and conditions for using The English Hub platform. Rules governing access to courses, subscriptions, content usage, and user responsibilities.',
  },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="mt-8 space-y-8">
        {/* 1. Introduction & Service Description */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of The English
            Hub (accessible at theenglishhub.app), operated by Upskill Energy Limited (Company No.
            16511479), trading as The English Hub, a company registered in England and Wales
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By creating an account or using any
            part of our platform, you agree to be bound by these Terms. If you do not agree, you
            must not use the Service.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub is an online learning platform designed to support students studying
            GCSE English Language and English Literature. Our Service includes structured courses,
            interactive practice exercises, timed mock examinations, AI-powered essay feedback, and
            revision resources. The platform is intended as a supplementary educational tool and
            does not replace formal schooling or professional tutoring.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You must be at least 13 years of age (the age of digital consent in the UK under the
            Data Protection Act 2018) to create an account on The English Hub. If you are under 16
            years of age, you must have the consent of a parent or legal guardian before
            registering. By creating an account for a user under 16, the parent or guardian agrees
            to these Terms on the minor&apos;s behalf and accepts responsibility for the
            minor&apos;s use of the Service.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            School and institutional accounts are provisioned and managed by the subscribing
            educational institution. Where a school creates accounts on behalf of its students, the
            school is responsible for obtaining any necessary parental consents and for ensuring
            compliance with applicable data protection legislation, including the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018. Individual students
            using school-provisioned accounts are also bound by these Terms.
          </p>
        </section>

        {/* 3. Account Responsibilities */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Account Responsibilities</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activity that occurs under your account. You must provide accurate and complete
            information when registering and keep your details up to date. You agree to notify us
            immediately at info@Upskillenergy.com if you become aware of any unauthorised use of
            your account.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Each account is for a single individual user. You may not share your login credentials
            with any other person or allow multiple individuals to use a single account. We reserve
            the right to suspend or terminate accounts where we reasonably believe sharing is taking
            place.
          </p>
        </section>

        {/* 4. Subscription Terms */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Subscription Plans</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub offers the following subscription plans for individual users (as of 20
            April 2026). All plans renew automatically until cancelled.
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>Student Plan — Monthly:</strong> £3.49 per month, billed monthly on a
              recurring basis. Full access to every feature on the platform.
            </li>
            <li>
              <strong>Student Plan — Annual:</strong> £29.99 per year, billed annually on a
              recurring basis. Full access to every feature on the platform.
            </li>
            <li>
              <strong>Student Plan — Annual with affiliate or promo code:</strong> £20 per year when
              the checkout includes a valid affiliate code, or the public promotional code{' '}
              <code>2026ENGLISH</code>. Feature access is identical to the standard annual plan.
            </li>
            <li>
              <strong>Teacher Plan — Monthly:</strong> £7.99 per month, billed monthly on a
              recurring basis. Includes AI lesson planning, worksheet builder, bulk essay marking,
              and class analytics in addition to all student features.
            </li>
            <li>
              <strong>Teacher Plan — Annual:</strong> £67.99 per year, billed annually on a
              recurring basis. Same feature set as the Teacher Monthly plan.
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>7-day free trial.</strong> New subscribers are eligible for a single 7-day free
            trial on their first paid plan. The trial requires full sign-up with a valid payment
            method. During the trial period you will have full access to the platform. If you do not
            cancel before the trial ends, your chosen subscription plan activates automatically and
            your payment method is charged the applicable plan price. You will receive a reminder
            email at least two days before the trial expires. Cancel any time before the end of day
            seven from your account settings and you will not be charged.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>Pre-paywall demo.</strong> Separately from the trial, every registered account
            may use most premium features up to three times without providing payment details so you
            can evaluate the product before committing.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>Promotional and affiliate codes.</strong> Affiliate codes and the public code
            <code> 2026ENGLISH</code> apply only to the Student Annual plan and reduce the first
            year&apos;s price to £20. Subsequent renewals are charged at the then-current standard
            annual rate (currently £29.99) unless a further valid code is applied at renewal.
            Affiliate codes cannot be combined, and cannot be applied retroactively to existing
            subscriptions.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Subscriptions renew automatically at the end of each billing cycle unless cancelled. The
            renewal price will be the price in effect at the time of renewal. We will give you at
            least 14 days&apos; notice of any price increase, and the new price will apply from your
            next renewal date after that notice period.
          </p>
        </section>

        {/* 5. One-Time Course Purchases */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. One-Time Course Purchases</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            In addition to subscription plans, The English Hub may offer individual courses or
            resource packs available for one-time purchase. Once purchased, you will have ongoing
            access to the course content for as long as the course remains available on the
            platform. One-time purchases are separate from your subscription and are not affected by
            subscription cancellation.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We reserve the right to retire or substantially update course content. Where a purchased
            course is retired, we will provide at least 90 days&apos; notice and ensure you can
            download any associated materials before removal.
          </p>
        </section>

        {/* 6. Payment Terms */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Payment Terms</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            All payments are processed securely by Stripe, our third-party payment processor. We do
            not store your full payment card details on our servers. By providing your payment
            information, you authorise us to charge the applicable fees to your chosen payment
            method. All prices are quoted in British Pounds Sterling (GBP). Upskill Energy Limited
            is not currently registered for UK VAT (turnover is below the registration threshold),
            so no VAT is charged on the prices shown. If we become VAT-registered in the future we
            will update this policy and clearly display VAT-inclusive pricing.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If a payment fails, we will attempt to process it again and notify you by email. If
            payment remains unsuccessful after 7 days, we may suspend your access until the
            outstanding amount is resolved. You are responsible for ensuring your payment
            information is current and valid.
          </p>
        </section>

        {/* 7. AI-Generated Content Disclaimer */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. AI-Generated Content Disclaimer
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub uses artificial intelligence to provide automated feedback on essays,
            written responses, and other submissions. This AI-generated feedback is intended as a
            supplementary learning aid to help you identify areas for improvement and practise your
            writing skills. It does not constitute a professional academic assessment, a guaranteed
            prediction of exam performance, or a substitute for feedback from a qualified teacher.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            While we work to ensure our AI tools are accurate and educationally valuable, automated
            feedback may occasionally contain errors, omissions, or suggestions that do not align
            with the marking criteria of a specific exam board. You should always use AI feedback in
            conjunction with guidance from your teachers and official exam board resources. We
            accept no liability for any reliance placed solely on AI-generated feedback.
          </p>
        </section>

        {/* 8. Acceptable Use */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Acceptable Use</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You agree to use The English Hub only for its intended educational purposes and in
            compliance with all applicable laws. You must not:
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              Share your account credentials with others or allow another person to access the
              platform using your account.
            </li>
            <li>
              Copy, reproduce, distribute, or publicly display any content from the platform without
              our prior written consent.
            </li>
            <li>
              Use the platform to engage in cheating, academic dishonesty, or any activity that
              undermines the integrity of educational assessments.
            </li>
            <li>
              Submit content that is abusive, obscene, defamatory, discriminatory, or otherwise
              objectionable.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the platform, other users&apos;
              accounts, or our systems and infrastructure.
            </li>
            <li>
              Use automated scripts, bots, or other tools to scrape content or interact with the
              platform in a manner not expressly permitted.
            </li>
            <li>
              Interfere with or disrupt the operation of the platform, including through the
              introduction of viruses or malicious code.
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We reserve the right to suspend or permanently terminate any account that breaches these
            acceptable use rules, without refund and without prior notice where the breach is
            serious.
          </p>
        </section>

        {/* 9. Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Intellectual Property</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            All content on The English Hub, including but not limited to courses, lessons, practice
            questions, mock exam papers, videos, graphics, software, and the design and layout of
            the platform, is owned by Upskill Energy Limited or its licensors and is protected by
            copyright, trademark, and other intellectual property laws of England and Wales and
            international treaties. You may not reproduce, modify, distribute, or create derivative
            works from any platform content without our express written permission.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You retain all intellectual property rights in the essays, written responses, and other
            original content you submit through the platform (&quot;User Content&quot;). By
            submitting User Content, you grant us a non-exclusive, royalty-free, worldwide licence
            to use, store, and process your submissions solely for the purposes of providing the
            Service, including generating AI feedback and improving our educational tools. We will
            not publish or share your User Content with third parties without your consent, except
            in anonymised and aggregated form for research and platform improvement purposes.
          </p>
        </section>

        {/* 10. Cancellation & Refunds */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Cancellation and Refunds</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You may cancel your subscription at any time through your account settings or by
            contacting us at info@Upskillenergy.com. Upon cancellation, you will retain access to
            the platform until the end of your current billing period. No further charges will be
            made after cancellation takes effect.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            In accordance with the Consumer Contracts (Information, Cancellation and Additional
            Charges) Regulations 2013, you have the right to cancel a new subscription or one-time
            purchase within 14 days of the date of purchase for a full refund, provided you have not
            substantially used the Service during that period. Where you have used the Service
            during the 14-day cancellation period, we may deduct a proportionate amount reflecting
            the services already provided.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            For subscriptions cancelled after the 14-day statutory cancellation period, we offer a
            pro-rated refund for the unused portion of the current billing cycle if you request a
            refund within 14 days of your most recent renewal date. Refund requests made more than
            14 days after the renewal date will not be eligible for a refund, though your access
            will continue until the end of the billing period.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If your free trial converts to a paid subscription and you did not intend to continue,
            please contact us within 14 days of the first charge and we will issue a full refund.
            Refunds are processed to the original payment method and typically take 5 to 10 business
            days to appear.
          </p>
        </section>

        {/* 11. Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">11. Limitation of Liability</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            To the fullest extent permitted by law, Upskill Energy Limited shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising out of or
            in connection with your use of the Service, including but not limited to loss of data,
            loss of academic opportunity, or reliance on AI-generated feedback.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Our total aggregate liability to you for any claims arising under or in connection with
            these Terms shall not exceed the total amount you have paid to us in the 12 months
            immediately preceding the event giving rise to the claim.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Nothing in these Terms excludes or limits our liability for death or personal injury
            caused by our negligence, fraud or fraudulent misrepresentation, or any other liability
            that cannot be excluded or limited under the laws of England and Wales. Your statutory
            rights as a consumer are not affected by these Terms.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We provide the Service on an &quot;as is&quot; and &quot;as available&quot; basis. While
            we endeavour to ensure the platform is reliable and available, we do not guarantee
            uninterrupted or error-free access. We may carry out scheduled maintenance from time to
            time and will aim to provide reasonable notice of any planned downtime.
          </p>
        </section>

        {/* 12. Governing Law */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">12. Governing Law</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of England and
            Wales. Any disputes arising out of or in connection with these Terms shall be subject to
            the exclusive jurisdiction of the courts of England and Wales, without prejudice to your
            right as a consumer to bring proceedings in the courts of your country of residence
            within the United Kingdom.
          </p>
        </section>

        {/* 13. Dispute Resolution */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">13. Dispute Resolution</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you have a complaint or dispute regarding the Service, we encourage you to contact us
            first at info@Upskillenergy.com so that we can attempt to resolve the matter informally.
            We will acknowledge your complaint within 5 business days and aim to provide a
            substantive response within 14 business days.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If we are unable to resolve your complaint to your satisfaction, you may refer the
            dispute to an alternative dispute resolution (ADR) provider. For UK consumers, you may
            also use the Online Dispute Resolution (ODR) platform provided by the European
            Commission (where applicable) or contact Citizens Advice for guidance on your consumer
            rights.
          </p>
        </section>

        {/* 14. Changes to Terms */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">14. Changes to These Terms</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We may update these Terms from time to time to reflect changes to our Service, legal
            requirements, or business practices. Where we make material changes, we will notify you
            by email and/or by displaying a prominent notice on the platform at least 30 days before
            the changes take effect. The &quot;Last updated&quot; date at the top of this page will
            be revised accordingly.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Your continued use of the Service after the updated Terms come into effect constitutes
            your acceptance of the revised Terms. If you do not agree with any changes, you should
            stop using the Service and cancel your subscription before the new Terms take effect.
          </p>
        </section>

        {/* 15. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">15. Contact Us</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Upskill Energy Limited, trading as The English Hub
            <br />
            Email: info@Upskillenergy.com
          </p>
        </section>
      </div>
    </main>
  )
}
