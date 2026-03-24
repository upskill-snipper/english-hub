import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility — The English Hub',
  description:
    'Our commitment to making The English Hub accessible to all learners.',
}

export default function AccessibilityPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Accessibility Statement
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Operated by Upskill Energy Limited, trading as The English Hub
        <br />
        Last updated: March 2026
      </p>

      <div className="mt-8 space-y-8">
        {/* Commitment */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Our Commitment to Accessibility
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub (theenglishhub.app) is committed to ensuring digital
            accessibility for people with disabilities. We continually improve
            the user experience for everyone and apply the relevant accessibility
            standards. Our target conformance level is{' '}
            <strong>WCAG 2.1 Level AA</strong>.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We believe that every learner, regardless of ability, should be able
            to access high-quality English language learning resources. This
            commitment extends across all areas of our platform, from course
            content and practice exercises to exam preparation tools and AI essay
            feedback.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            What We Do
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We take the following measures to ensure accessibility on The English
            Hub:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>Keyboard navigation</strong> — All interactive elements
              can be reached and operated using a keyboard alone, with visible
              focus indicators throughout the interface.
            </li>
            <li>
              <strong>Skip-to-content link</strong> — A skip navigation link is
              provided so keyboard and screen reader users can bypass repetitive
              navigation and jump straight to the main content.
            </li>
            <li>
              <strong>Semantic HTML</strong> — We use meaningful HTML elements
              (headings, landmarks, lists, buttons, and form labels) to convey
              structure and purpose to assistive technologies.
            </li>
            <li>
              <strong>ARIA labels</strong> — Where native semantics are not
              sufficient, we add ARIA attributes to provide additional context
              for screen readers and other assistive tools.
            </li>
            <li>
              <strong>Colour contrast</strong> — Text and interactive components
              meet WCAG 2.1 AA minimum contrast ratios (4.5:1 for normal text,
              3:1 for large text and UI components).
            </li>
            <li>
              <strong>Responsive design</strong> — The platform is fully
              responsive and usable across desktops, tablets, and mobile devices,
              supporting text resizing up to 200% without loss of content or
              functionality.
            </li>
            <li>
              <strong>Screen reader compatibility</strong> — We test with popular
              screen readers to ensure content is announced correctly, including
              live regions for dynamic updates such as quiz feedback.
            </li>
            <li>
              <strong>Reduced motion support</strong> — Animations and
              transitions respect the <code>prefers-reduced-motion</code> media
              query, reducing or removing motion for users who have indicated
              that preference in their operating system settings.
            </li>
          </ul>
        </section>

        {/* Known Limitations */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Known Limitations
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Despite our best efforts, some parts of The English Hub may not yet
            be fully accessible. Known limitations include:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>Interactive exam simulations</strong> — Certain timed mock
              exam features, such as drag-and-drop question types, may present
              challenges for users relying solely on assistive technologies. We
              are working on alternative input methods for these activities.
            </li>
            <li>
              <strong>Third-party content</strong> — Some embedded or
              third-party resources may not fully meet our accessibility
              standards. We monitor these and work with providers to improve
              compliance.
            </li>
            <li>
              <strong>PDF exam resources</strong> — Older PDF documents may not
              be fully tagged for screen reader navigation. We are progressively
              remediating these files.
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Our AI essay feedback feature delivers results as structured text,
            which is inherently accessible to screen readers and other assistive
            technologies.
          </p>
        </section>

        {/* Technologies Relied Upon */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Technologies Relied Upon
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Accessibility on The English Hub relies on the following
            technologies:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>WAI-ARIA</li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These technologies are relied upon for conformance with the
            accessibility standards used. The platform is designed to be
            compatible with current versions of major browsers and assistive
            technologies.
          </p>
        </section>

        {/* Assessment Methods */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Assessment Methods
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub assesses the accessibility of the platform through
            the following methods:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>Self-evaluation</strong> — Regular internal audits using
              automated testing tools (such as axe and Lighthouse) combined with
              manual keyboard and screen reader testing.
            </li>
            <li>
              <strong>User feedback</strong> — We actively incorporate
              accessibility-related feedback from our users to identify and
              resolve barriers.
            </li>
          </ul>
        </section>

        {/* Feedback and Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Feedback and Contact
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We welcome your feedback on the accessibility of The English Hub. If
            you encounter any accessibility barriers or have suggestions for
            improvement, please contact us:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:support@theenglishhub.app"
                className="underline hover:text-foreground transition-colors"
              >
                support@theenglishhub.app
              </a>
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We aim to respond to accessibility feedback within 5 working days
            and to resolve reported issues as quickly as practicable.
          </p>
        </section>

        {/* Enforcement Procedure */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Enforcement Procedure
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub is a private-sector service and is not legally
            required to comply with the Public Sector Bodies (Websites and Mobile
            Applications) Accessibility Regulations 2018 (PSBAR). However, we
            voluntarily align our practices with the spirit of those regulations
            and with the{' '}
            <strong>Equality Act 2010</strong>, which requires service providers
            to make reasonable adjustments so that disabled people are not placed
            at a substantial disadvantage.
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you are not satisfied with our response to your accessibility
            concern, you may contact the{' '}
            <a
              href="https://www.equalityadvisoryservice.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Equality Advisory Support Service (EASS)
            </a>
            , which can advise you on your rights under the Equality Act.
          </p>
        </section>

        {/* Date */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Date of This Statement
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This accessibility statement was prepared on 22 March 2026. It will
            be reviewed and updated regularly as we continue to improve
            accessibility across The English Hub.
          </p>
        </section>
      </div>
    </main>
  )
}
