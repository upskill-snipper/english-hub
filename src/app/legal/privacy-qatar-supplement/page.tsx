import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
/**
 * /legal/privacy-qatar-supplement — corrected privacy supplement for
 * residents of the State of Qatar.
 *
 * Supersedes the data-flow description on /legal/privacy-qatar, which
 * inaccurately described data as flowing through the UK under an IDTA.
 * This page documents the actual subprocessor architecture
 * (Supabase EU → Anthropic US → Sentry EU → GA4 US → Rewardful US)
 * and the Article-17 cross-border consent posture.
 *
 * Linked from the AI Governance page (Section 7, Remediation 1).
 * The full RoPA lives at business-docs/compliance/rfc/ropa-v1.md
 * and is shared with school DPOs under NDA.
 */

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Qatar Privacy Notice Supplement',
  description:
    'Honest, corrected data-flow description and PDPPL rights for residents of the State of Qatar. Supersedes the prior UK-IDTA description.',
  alternates: { canonical: 'https://theenglishhub.app/legal/privacy-qatar-supplement' },
}

export default async function PrivacyQatarSupplementPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{_tr(`Qatar Privacy Notice Supplement`)}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>{_tr(`The English Hub`)}</strong> — operated by Upskill Energy Limited (UK)
        <br />
        Version 1.0 · Issued 12 May 2026
      </p>

      <p className="mb-6">
        This supplement sits alongside our main Privacy Notice. Where the two differ, this
        supplement prevails for Qatar residents. It supersedes any earlier version of{' '}
        <Link href="/legal/privacy-qatar" className="underline">
          our Qatar privacy page
        </Link>{' '}
        that described data as flowing through the United Kingdom under an IDTA arrangement; that
        description was inaccurate and is corrected here.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">1. Who is the controller</h2>
        <p className="mb-3">
          The data controller is <strong>{_tr(`Upskill Energy Limited`)}</strong>, a company
          registered in England and Wales, operating the service at https://www.theenglishhub.app.
          We are not established in Qatar.
        </p>
        <p>
          The named DPO is contactable at <strong>privacy@theenglishhub.app</strong>. The DPO is the
          single point of contact for: data subject rights requests from Qatar residents, school DPO
          diligence questions, complaints, and any correspondence with the National Cyber Security
          Agency (NCSA) of the State of Qatar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">
          2. Lawful basis for processing data of Qatar residents
        </h2>
        <ul className="list-disc ps-6 space-y-2">
          <li>
            <strong>{_tr(`Consent (PDPPL Article 4)`)}</strong> — the default. Captured at signup,
            refreshed at meaningful change-points. For users under 18, consent is captured from the
            guardian (see Section 6).
          </li>
          <li>
            <strong>Explicit cross-border consent (PDPPL Article 17)</strong> — because the service
            routes data to subprocessors in the EU and the US, we obtain explicit, separate consent
            for cross-border transfer, listing destinations by name. Presented in plain language at
            the moment it is needed.
          </li>
          <li>
            <strong>{_tr(`Contractual necessity`)}</strong> for activities required to deliver the
            paid service the user has subscribed to.
          </li>
          <li>
            <strong>{_tr(`Legal obligation`)}</strong> for tax retention and lawful requests from
            competent authorities.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          We do not rely on a "legitimate interest" basis to <em>override</em> a refusal of consent
          by a Qatar resident. Where consent is withdrawn, we either rely on contractual necessity
          (and inform the user) or we stop the activity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">
          3. Actual data flow — by activity and jurisdiction
        </h2>
        <p className="mb-3">
          Earlier versions of this page described a flow into the United Kingdom under an IDTA. That
          was inaccurate. The corrected primary path is:
        </p>
        <p className="my-4 font-mono text-sm bg-muted p-3 rounded">
          Qatar → Supabase EU (Frankfurt) → Anthropic US → Sentry EU (Frankfurt) → Google Analytics
          4 US → Rewardful US
        </p>
        <p className="mb-4">
          with additional flows to Stripe (Ireland; US failover), Postmark (US), Cloudflare (global
          edge), Vercel (US), PostHog (EU/Frankfurt), RevenueCat (US), and Trustpilot (US) depending
          on which features the user uses.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">{_tr(`By jurisdiction`)}</h3>
        <ul className="list-disc ps-6 space-y-3 text-sm">
          <li>
            <strong>{_tr(`European Union (Frankfurt, Germany).`)}</strong> Supabase (Postgres +
            object storage), PostHog (analytics, when consented), and Sentry (error monitoring). The
            bulk of your data — account, essay submissions, marking results, consent ledger — sits
            here at rest.
          </li>
          <li>
            <strong>{_tr(`United States.`)}</strong> Anthropic (AI essay marking), Postmark
            (transactional email), Google Analytics 4 (analytics when consented), Rewardful
            (affiliate when consented), RevenueCat (mobile IAP), Trustpilot (reviews when
            consented), Vercel (web hosting), Stripe (payment failover; primary is in Ireland). Not
            covered by a Qatar adequacy decision; we rely on subprocessor-specific DPAs containing
            Standard Contractual Clauses analogues + explicit cross-border consent under PDPPL
            Article 17.
          </li>
          <li>
            <strong>Ireland.</strong> Stripe's primary payment processing entity for European
            customers. Failover to Stripe US.
          </li>
          <li>
            <strong>{_tr(`Global edge.`)}</strong> Cloudflare anycast edge for CDN + WAF. No
            personal data stored at the edge; only ephemeral request/response metadata.
          </li>
          <li>
            <strong>{_tr(`United Kingdom.`)}</strong> Seat of the controller. The DPO operates from
            the UK. Administrative records (rights requests, audit logs of staff access) may be
            reviewed in the UK. The UK is <strong>not</strong> the operational store for your
            account data.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">4. Cross-border transfer mechanisms</h2>
        <ul className="list-disc ps-6 space-y-3 text-sm">
          <li>
            <strong>{_tr(`Transfers to the European Union`)}</strong> (Supabase, PostHog, Sentry).
            EU's data protection regime as broadly accepted by Qatari diligence reviewers, plus
            signed DPAs with EU-form SCCs where the subprocessor is a non-EU parent.
          </li>
          <li>
            <strong>{_tr(`Transfers to the United Kingdom`)}</strong> (controller seat, DPO,
            internal records). The UK has a national regime substantially equivalent to the EU's; we
            treat it as a safe destination under PDPPL.
          </li>
          <li>
            <strong>{_tr(`Transfers to the United States.`)}</strong> No Qatar adequacy decision. We
            rely on (a) explicit cross-border consent under PDPPL Article 17, (b)
            subprocessor-specific DPAs incorporating SCCs or equivalent, (c) technical safeguards:
            TLS 1.3, encryption at rest, payload minimisation, opaque identifiers for Anthropic, and
            contractual zero-retention terms for AI inference.
          </li>
          <li>
            <strong>{_tr(`Cloudflare global edge.`)}</strong> DPA + ephemeral processing (no data
            stored at the edge).
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Copies of any DPA referenced above are available to school DPOs and diligence reviewers on
          written request to the DPO email above.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">5. PDPPL rights specific to Qatar residents</h2>
        <p className="mb-3">
          Qatar residents may exercise the following rights, in addition to any rights they have
          under the law of their own country if different. We respond within 30 days of identity
          verification.
        </p>
        <ul className="list-disc ps-6 space-y-2 text-sm">
          <li>
            <strong>{_tr(`Right of access (PDPPL Article 13)`)}</strong> — confirmation that we
            process your data and a copy of what we hold, including sources, purposes, recipients
            (subprocessors named in Section 3), and retention period.
          </li>
          <li>
            <strong>{_tr(`Right to correction`)}</strong> — most fields self-service;
            non-self-service corrections handled by the DPO.
          </li>
          <li>
            <strong>{_tr(`Right to deletion`)}</strong> — deletion of your account and personal
            data, subject only to retention required by law (tax records for paid customers).
            Children's data deleted in full, including consent ledger entries beyond the evidentiary
            minimum, on guardian request.
          </li>
          <li>
            <strong>{_tr(`Right to withdraw consent`)}</strong> — as easy as the original consent.
            Withdrawing cross-border consent stops the corresponding feature.
          </li>
          <li>
            <strong>{_tr(`Right to object`)}</strong> to processing on a legitimate-interest basis
            (only error monitoring qualifies). Honoured by excluding the user's session from Sentry
            capture.
          </li>
          <li>
            <strong>{_tr(`Right to lodge a complaint`)}</strong> with the National Cyber Security
            Agency (NCSA) of the State of Qatar. We will cooperate with any NCSA enquiry and will
            not retaliate against users who exercise this right.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any right, write to <strong>privacy@theenglishhub.app</strong> with subject
          line beginning <code>[PDPPL request]</code>. We may ask for proportionate identity
          verification before disclosing or deleting data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">6. Children's data</h2>
        <p className="mb-3">
          Under PDPPL, personal data of individuals under 18 is{' '}
          <strong>sensitive personal data</strong> and attracts heightened protection. The English
          Hub's primary audience is GCSE/IGCSE students, the majority under 18. This is therefore
          the most important section of this supplement.
        </p>
        <ul className="list-disc ps-6 space-y-2 text-sm">
          <li>
            For any account holder declared to be under 18, no processing beyond initial account
            creation occurs until <strong>verifiable guardian consent</strong> is captured via an
            email-loop verification.
          </li>
          <li>
            Guardian consent is granular: AI marking (Anthropic US), optional analytics (PostHog +
            GA4), error monitoring (Sentry EU), and any future material subprocessor change
            consented separately.
          </li>
          <li>
            The guardian may revoke any of these consents independently, and may revoke all and
            request deletion at any time.
          </li>
          <li>
            Under-18 accounts <strong>cannot enter payment details</strong>. The paying party is
            always an adult.
          </li>
          <li>
            Under-18 accounts are excluded from review invitations (Trustpilot) and from affiliate
            signup (Rewardful).
          </li>
          <li>
            We do not use children's data to train AI models. Anthropic's API zero-retention terms
            are in force; we have a contractual undertaking that submissions are not used for
            training.
          </li>
          <li>
            The consent ledger records each guardian consent with a cryptographic hash and timestamp
            for evidentiary needs.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          The end-to-end guardian consent flow design (Remediation 9) is available to school DPOs on
          written request to the DPO email above.
        </p>
      </section>
    </>
  )
}
