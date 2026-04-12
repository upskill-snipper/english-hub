import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  alternates: { canonical: 'https://theenglishhub.app/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy — The English Hub',
    description:
      'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Operated by Upskill Energy Limited, trading as The English Hub
        <br />
        Last updated: March 2026
      </p>

      <div className="mt-8 space-y-8">
        {/* What are cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. What are cookies?</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Cookies are small text files that are placed on your device (computer, tablet, or
            mobile phone) when you visit a website. They are widely used to make websites work
            more efficiently, provide a better user experience, and supply information to the
            owners of the site. Cookies allow a website to recognise your device and remember
            certain information about your session, such as your login status or preferences.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Some cookies are deleted when you close your browser (session cookies), while others
            remain on your device for a set period or until you delete them (persistent cookies).
          </p>
        </section>

        {/* How we use cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. How we use cookies</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub (theenglishhub.app) uses cookies and similar technologies for a
            variety of purposes, including authenticating users, remembering user preferences,
            processing payments, tracking affiliate referrals, and monitoring errors to improve
            site reliability. We describe each category in detail below.
          </p>
        </section>

        {/* Types of cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Types of cookies we use</h2>

          {/* Essential */}
          <h3 className="mt-4 text-lg font-medium text-foreground">3.1 Essential cookies</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These cookies are strictly necessary for the website to function. They enable core
            features such as user authentication, session management, and security. Without
            these cookies you would not be able to log in, access your courses, or complete a
            purchase. Because they are essential, they do not require consent under UK PECR.
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>Supabase authentication session</strong> — maintains your signed-in state
              so you do not need to log in on every page.
            </li>
            <li>
              <strong>CSRF protection token</strong> — guards against cross-site request forgery
              attacks by validating that form submissions originate from our site.
            </li>
          </ul>

          {/* Functional */}
          <h3 className="mt-4 text-lg font-medium text-foreground">3.2 Functional cookies</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Functional cookies remember choices you make to improve your experience. They are
            not strictly necessary but help us provide enhanced functionality and
            personalisation.
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>Board selection preference</strong> — remembers your chosen exam board
              (e.g. AQA, Edexcel, OCR, WJEC Eduqas) so content is filtered appropriately across
              sessions.
            </li>
            <li>
              <strong>Theme preference</strong> — stores whether you prefer light or dark mode so
              the interface matches your choice on return visits.
            </li>
          </ul>

          {/* Analytics / Error tracking */}
          <h3 className="mt-4 text-lg font-medium text-foreground">
            3.3 Analytics and error-tracking cookies
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We use Google Analytics 4 (GA4) to understand how visitors use the site, such as
            which pages are most popular and how users navigate between them. GA4 cookies are
            only set after you give consent. We use Sentry to monitor application errors and
            performance. Sentry may set cookies or use similar technologies to collect diagnostic
            data such as error stack traces, browser type, and page URL. This data helps us
            identify and fix bugs quickly. Neither Google Analytics nor Sentry uses this
            information for advertising purposes.
          </p>

          {/* Third-party */}
          <h3 className="mt-4 text-lg font-medium text-foreground">3.4 Third-party cookies</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Certain third-party services we integrate with may set their own cookies on your
            device. We do not control these cookies; they are governed by the respective
            third party&rsquo;s privacy and cookie policies.
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>Stripe</strong> — our payment processor sets cookies to enable secure
              payment transactions, detect fraud, and remember payment session information.
              See{' '}
              <a
                href="https://stripe.com/gb/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Stripe&rsquo;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Rewardful</strong> — our affiliate tracking service sets cookies to
              attribute referrals to the correct affiliate partner. These cookies record a
              referral identifier when you arrive via an affiliate link.
              See{' '}
              <a
                href="https://www.rewardful.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Rewardful&rsquo;s Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Cookie table */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Cookies in detail</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The table below lists the specific cookies set by The English Hub and its
            third-party partners.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Provider</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sb-*-auth-token</td>
                  <td className="px-4 py-3">Supabase</td>
                  <td className="px-4 py-3">Stores the authenticated user session (access and refresh tokens)</td>
                  <td className="px-4 py-3">Up to 1 year</td>
                  <td className="px-4 py-3">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sb-*-auth-token-code-verifier</td>
                  <td className="px-4 py-3">Supabase</td>
                  <td className="px-4 py-3">PKCE code verifier for secure OAuth authentication flow</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">csrf_token</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">Protects against cross-site request forgery attacks</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">board-preference</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">Remembers your selected exam board (e.g. AQA, Edexcel)</td>
                  <td className="px-4 py-3">1 year</td>
                  <td className="px-4 py-3">Functional</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">theme</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">Stores your light/dark mode preference</td>
                  <td className="px-4 py-3">1 year</td>
                  <td className="px-4 py-3">Functional</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sentryReplaySession</td>
                  <td className="px-4 py-3">Sentry</td>
                  <td className="px-4 py-3">Tracks error replay session for debugging and performance monitoring</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">_ga</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Distinguishes unique visitors by assigning a randomly generated identifier</td>
                  <td className="px-4 py-3">2 years</td>
                  <td className="px-4 py-3">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Maintains session state for Google Analytics 4</td>
                  <td className="px-4 py-3">2 years</td>
                  <td className="px-4 py-3">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">__stripe_mid</td>
                  <td className="px-4 py-3">Stripe</td>
                  <td className="px-4 py-3">Fraud prevention — unique identifier for the device</td>
                  <td className="px-4 py-3">1 year</td>
                  <td className="px-4 py-3">Third-party</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">__stripe_sid</td>
                  <td className="px-4 py-3">Stripe</td>
                  <td className="px-4 py-3">Fraud prevention — unique identifier for the browsing session</td>
                  <td className="px-4 py-3">30 minutes</td>
                  <td className="px-4 py-3">Third-party</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">rewardful_referral</td>
                  <td className="px-4 py-3">Rewardful</td>
                  <td className="px-4 py-3">Stores the affiliate referral identifier to attribute sign-ups</td>
                  <td className="px-4 py-3">60 days</td>
                  <td className="px-4 py-3">Third-party</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Cookie names containing an asterisk (*) indicate a wildcard — the actual name
            includes your project reference and may vary.
          </p>
        </section>

        {/* Cookie duration */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Cookie duration and retention</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>Session cookies</strong> are temporary and are deleted automatically when you
            close your browser. <strong>Persistent cookies</strong> remain on your device for the
            duration specified in the table above, or until you manually delete them. We review
            cookie retention periods regularly to ensure data is not kept longer than necessary.
          </p>
        </section>

        {/* Managing cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. How to manage and disable cookies
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Most web browsers allow you to control cookies through their settings. You can
            typically find these options in the &ldquo;Settings&rdquo;, &ldquo;Preferences&rdquo;, or
            &ldquo;Privacy&rdquo; section of your browser. Common actions include:
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>Viewing which cookies are currently stored and deleting individual cookies</li>
            <li>Blocking all cookies or only third-party cookies</li>
            <li>Configuring your browser to notify you before a cookie is set</li>
            <li>Clearing all cookies when you close the browser</li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            For step-by-step instructions, refer to your browser&rsquo;s help documentation:
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        {/* Impact of disabling */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Impact of disabling cookies
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you choose to disable or block cookies, please be aware that some parts of The
            English Hub may not function correctly. In particular:
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>Blocking essential cookies</strong> will prevent you from signing in,
              accessing purchased courses, and completing payment transactions.
            </li>
            <li>
              <strong>Blocking functional cookies</strong> means your exam board and theme
              preferences will not be saved between visits, and you will need to select them
              each time.
            </li>
            <li>
              <strong>Blocking analytics cookies</strong> will not affect your use of the site
              but may reduce our ability to detect and resolve technical issues promptly.
            </li>
            <li>
              <strong>Blocking third-party cookies</strong> may prevent payment processing
              through Stripe and may mean affiliate referrals are not tracked correctly.
            </li>
          </ul>
        </section>

        {/* UK PECR */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            8. UK PECR compliance
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub complies with the UK Privacy and Electronic Communications
            Regulations 2003 (PECR), as amended, alongside the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Under PECR, we are permitted to set <strong>strictly necessary cookies</strong>{' '}
            (essential cookies) without prior consent, as they are required for the service you
            have requested. For all other cookies — including functional, analytics, and
            third-party cookies — we obtain your consent before placing them on your device. You
            may withdraw your consent at any time by adjusting your browser settings or
            contacting us.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We regularly review and update our cookie practices to ensure continued compliance
            with applicable regulations. If you have questions about our use of cookies or wish
            to exercise your data rights, please contact us at{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="underline hover:text-foreground"
            >
              info@Upskillenergy.com
            </a>
            .
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            9. Changes to this Cookie Policy
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our
            practices or for legal, regulatory, or operational reasons. When we make material
            changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page.
            We encourage you to review this page periodically to stay informed about how we use
            cookies.
          </p>
        </section>

        {/* Link to privacy policy */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Privacy Policy</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            For more information about how we collect, use, and protect your personal data,
            please read our{' '}
            <Link href="/privacy-policy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
