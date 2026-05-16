import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/config/company'

export const metadata: Metadata = {
  title: 'Security & Vulnerability Disclosure',
  description:
    'How to report a security vulnerability to The English Hub. Coordinated disclosure policy, scope, safe harbour and response targets.',
  alternates: { canonical: `${COMPANY.websiteUrl}/security` },
  openGraph: {
    title: 'Security & Vulnerability Disclosure | The English Hub',
    description:
      'Coordinated vulnerability disclosure policy, scope, safe harbour and response targets for The English Hub.',
  },
}

const LAST_REVIEWED = '2026-05-16'

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Security &amp; Vulnerability Disclosure
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_REVIEWED}</p>

      <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">
            Reporting a vulnerability
          </h2>
          <p>
            We take the security of student, parent, teacher and school data seriously. If you
            believe you have found a security vulnerability in The English Hub, please report it to
            us privately at{' '}
            <a
              href={`mailto:${COMPANY.legalEmail}`}
              className="text-primary underline underline-offset-4"
            >
              {COMPANY.legalEmail}
            </a>{' '}
            with enough detail to reproduce the issue. A machine-readable contact is also published
            at{' '}
            <a
              href="/.well-known/security.txt"
              className="text-primary underline underline-offset-4"
            >
              /.well-known/security.txt
            </a>{' '}
            (RFC 9116).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">What to include</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>The affected URL, endpoint or component.</li>
            <li>Steps to reproduce, and the impact you believe it has.</li>
            <li>Any proof-of-concept that does not access, modify or exfiltrate real user data.</li>
            <li>Your contact details so we can follow up.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">Our commitments</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>We aim to acknowledge a valid report within one working day.</li>
            <li>
              We will keep you updated on remediation and let you know when the issue is resolved.
            </li>
            <li>
              We will not take legal action against researchers who act in good faith and within
              this policy (safe harbour).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">
            Good-faith research &mdash; please do
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Test only against accounts and data you own or have explicit permission to use.</li>
            <li>Stop as soon as you have demonstrated a vulnerability, and report it promptly.</li>
            <li>Give us reasonable time to remediate before any public disclosure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">Please do not</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Access, modify, delete or exfiltrate data belonging to other users &mdash;
              particularly any data relating to children.
            </li>
            <li>Run denial-of-service tests, spam, or social-engineer our staff or users.</li>
            <li>Publicly disclose an unresolved issue, or test physical or third-party systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">Scope</h2>
          <p className="text-muted-foreground">
            In scope: the {COMPANY.tradingName} web application and API on{' '}
            <Link href="/" className="text-primary underline underline-offset-4">
              theenglishhub.app
            </Link>
            . Out of scope: third-party providers we rely on (their own disclosure programmes
            apply), and findings that require a compromised device or a man-in-the-middle position.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          This is a coordinated-disclosure policy. A formal bug-bounty programme may follow once our
          triage and response process is proven. {COMPANY.legalName}, Companies House{' '}
          {COMPANY.companyNumber}.
        </p>
      </div>
    </main>
  )
}
