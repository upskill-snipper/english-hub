import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const title = await t('safeguard.page.meta_title')
  const description = await t('safeguard.page.meta_description')
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/safeguarding' },
    openGraph: {
      title: `${title} - The English Hub`,
      description,
    },
  }
}

// ─── Section wrapper ────────────────────────────────────────────────────

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-primary">
        <span className="text-accent">{number}.</span> {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

// ─── Table of contents ──────────────────────────────────────────────────

// Section entries declared as `key | title` - most rows use a translation key,
// the two new audit-remediation rows ship as `title` only because they have
// no en/ar dictionary entries yet (sourced verbatim from the underlying policy
// docs; translations can be added in a follow-up without touching layout).
type SectionEntry = { id: string; number: string; key?: string; title?: string }
const SECTION_KEYS: SectionEntry[] = [
  { id: 'commitment', number: '1', key: 'safeguard.toc.commitment' },
  { id: 'scope', number: '2', key: 'safeguard.toc.scope' },
  { id: 'dsl', number: '3', key: 'safeguard.toc.dsl' },
  { id: 'principles', number: '4', key: 'safeguard.toc.principles' },
  { id: 'online-safety', number: '5', key: 'safeguard.toc.online_safety' },
  { id: 'reporting', number: '6', key: 'safeguard.toc.reporting' },
  { id: 'data-protection', number: '7', key: 'safeguard.toc.data_protection' },
  { id: 'training', number: '8', key: 'safeguard.toc.training' },
  { id: 'review', number: '9', key: 'safeguard.toc.review' },
  { id: 'whistleblowing', number: '10', title: 'Whistleblowing' },
  { id: 'legal-framework', number: '11', title: 'Legal and statutory framework' },
  { id: 'external-contacts', number: '12', key: 'safeguard.toc.external_contacts' },
]

// ─── Page component ─────────────────────────────────────────────────────

export default async function SafeguardingPolicyPage() {
  const sections = await Promise.all(
    SECTION_KEYS.map(async (s) => ({
      ...s,
      title: s.title ?? (s.key ? await t(s.key) : ''),
    })),
  )
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Back link */}
      <div className="mb-2">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; {await t('safeguard.back_home')}
        </Link>
      </div>

      {/* Header */}
      <h1 className="text-2xl font-semibold text-primary sm:text-3xl">{await t('safeguard.h1')}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {await t('safeguard.trading_as_pre')}{' '}
        <strong className="text-primary">The English Hub</strong>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{await t('safeguard.last_updated_line')}</p>

      {/* Quick-action banner */}
      <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
        <p className="text-sm font-semibold text-primary">
          {await t('safeguard.urgent_banner_title')}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {await t('safeguard.urgent_banner_body')}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/safeguarding/report" className="btn-primary text-sm">
            {await t('safeguard.report_concern_now_cta')}
          </Link>
          <a
            href="mailto:safeguarding@theenglishhub.app"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            {await t('safeguard.email_lead_cta')}
          </a>
        </div>
      </div>

      {/* Table of contents */}
      <nav
        aria-label="Policy sections"
        className="mt-8 rounded-lg border border-border bg-card p-5"
      >
        <h2 className="text-sm font-semibold text-primary">{await t('safeguard.contents')}</h2>
        <ol className="mt-3 columns-1 gap-x-6 space-y-1.5 text-sm sm:columns-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-accent hover:text-accent/80 hover:underline transition-colors"
              >
                {s.number}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Policy sections */}
      <div className="mt-10 space-y-10">
        {/* 1. Commitment Statement */}
        <PolicySection id="commitment" number="1" title={await t('safeguard.s1.title')}>
          <p>{await t('safeguard.s1.p1')}</p>
          <p>{await t('safeguard.s1.p2')}</p>
          <p>{await t('safeguard.s1.p3')}</p>
        </PolicySection>

        {/* 2. Scope */}
        <PolicySection id="scope" number="2" title={await t('safeguard.s2.title')}>
          <p>{await t('safeguard.s2.intro')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>{await t('safeguard.s2.item1')}</li>
            <li>{await t('safeguard.s2.item2')}</li>
            <li>{await t('safeguard.s2.item3')}</li>
            <li>{await t('safeguard.s2.item4')}</li>
          </ul>
          <p>{await t('safeguard.s2.outro')}</p>
        </PolicySection>

        {/* 3. Designated Safeguarding Lead */}
        <PolicySection id="dsl" number="3" title={await t('safeguard.s3.title')}>
          <p>{await t('safeguard.s3.p1')}</p>
          <div className="rounded-lg border border-border bg-muted p-4">
            <p className="text-sm font-semibold text-primary">Designated Safeguarding Lead (DSL)</p>
            <p className="mt-2">
              <strong>Lauren Johnson</strong>, Designated Safeguarding Lead. You can contact Lauren
              directly through our{' '}
              <Link
                href="/safeguarding/report"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding report form
              </Link>
              , by email at{' '}
              <a
                href="mailto:safeguarding@theenglishhub.app"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding@theenglishhub.app
              </a>
              , or by phone on{' '}
              <a
                href="tel:+97451879582"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                +974 5187 9582
              </a>
              . We aim to acknowledge all safeguarding concerns within 24 hours.
            </p>
            <p className="mt-1 text-xs">
              This service is for learners aged 11 and over; users aged 11&ndash;15 require parent
              or guardian consent.
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-sm font-semibold text-primary">If a child is in immediate danger</p>
            <p className="mt-2 text-sm">
              Call <strong>999</strong> (UK) or your local emergency number. You can also contact
              Childline on{' '}
              <a
                href="tel:08001111"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                0800 1111
              </a>
              , the NSPCC on{' '}
              <a
                href="tel:08088005000"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                0808 800 5000
              </a>
              , or CEOP at{' '}
              <a
                href="https://www.ceop.police.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline"
              >
                ceop.police.uk
              </a>
              . In Qatar, call the child and woman protection line on{' '}
              <a
                href="tel:919"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                919
              </a>
              .
            </p>
          </div>
          {/*
            Single-DSL model (business decision B1, 2026-05): The English Hub
            currently operates without a Deputy DSL. The data-room policy
            references a Deputy role in its key-contacts table but the
            position is not filled. Disclosed transparently here per the
            audit remediation; do not introduce a Deputy DSL until the role
            is appointed.
          */}
          <div className="mt-4 rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-semibold text-primary">Single-DSL cover model</p>
            <p className="mt-2 text-sm">
              The English Hub currently operates a single-DSL model: Lauren Johnson is the only
              Designated Safeguarding Lead and there is no Deputy DSL. During any period in which
              the DSL is unavailable, urgent concerns should be escalated directly to the relevant
              external service listed below &mdash; Childline, NSPCC, CEOP, or, in an emergency,
              999. We will appoint a Deputy DSL as the team grows.
            </p>
          </div>
          <p>{await t('safeguard.s3.p_outro')}</p>
        </PolicySection>

        {/* 4. Key Principles */}
        <PolicySection id="principles" number="4" title={await t('safeguard.s4.title')}>
          <p>{await t('safeguard.s4.intro')}</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong className="text-primary">{await t('safeguard.s4.bestint_term')}</strong>{' '}
              {await t('safeguard.s4.bestint_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s4.prop_term')}</strong>{' '}
              {await t('safeguard.s4.prop_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s4.parents_term')}</strong>{' '}
              {await t('safeguard.s4.parents_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s4.listen_term')}</strong>{' '}
              {await t('safeguard.s4.listen_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s4.zero_term')}</strong>{' '}
              {await t('safeguard.s4.zero_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s4.trans_term')}</strong>{' '}
              {await t('safeguard.s4.trans_body')}
            </li>
          </ul>
        </PolicySection>

        {/* 5. Online Safety Measures */}
        <PolicySection id="online-safety" number="5" title={await t('safeguard.s5.title')}>
          <p>{await t('safeguard.s5.intro')}</p>

          <h3 className="mt-4 text-sm font-semibold text-primary">{await t('safeguard.s5.h1')}</h3>
          <p>{await t('safeguard.s5.h1_body')}</p>

          <h3 className="mt-4 text-sm font-semibold text-primary">{await t('safeguard.s5.h2')}</h3>
          <p>{await t('safeguard.s5.h2_body')}</p>

          <h3 className="mt-4 text-sm font-semibold text-primary">{await t('safeguard.s5.h3')}</h3>
          <p>{await t('safeguard.s5.h3_body')}</p>

          <h3 className="mt-4 text-sm font-semibold text-primary">{await t('safeguard.s5.h4')}</h3>
          <p>{await t('safeguard.s5.h4_body')}</p>

          <h3 className="mt-4 text-sm font-semibold text-primary">{await t('safeguard.s5.h5')}</h3>
          <p>{await t('safeguard.s5.h5_body')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>{await t('safeguard.s5.h5_li1')}</li>
            <li>{await t('safeguard.s5.h5_li2')}</li>
            <li>{await t('safeguard.s5.h5_li3')}</li>
            <li>{await t('safeguard.s5.h5_li4')}</li>
            <li>{await t('safeguard.s5.h5_li5')}</li>
            <li>{await t('safeguard.s5.h5_li6')}</li>
          </ul>
        </PolicySection>

        {/* 6. Reporting Procedures */}
        <PolicySection id="reporting" number="6" title={await t('safeguard.s6.title')}>
          <p>{await t('safeguard.s6.intro')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>{await t('safeguard.s6.li1_term')}</strong>{' '}
              <Link
                href="/safeguarding/report"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                {await t('safeguard.s6.li1_link')}
              </Link>{' '}
              {await t('safeguard.s6.li1_post')}
            </li>
            <li>
              <strong>{await t('safeguard.s6.li2_term')}</strong>{' '}
              <a
                href="mailto:safeguarding@theenglishhub.app"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding@theenglishhub.app
              </a>
            </li>
          </ul>

          <p className="mt-3">{await t('safeguard.s6.provide')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>{await t('safeguard.s6.provide_li1')}</li>
            <li>{await t('safeguard.s6.provide_li2')}</li>
            <li>{await t('safeguard.s6.provide_li3')}</li>
            <li>{await t('safeguard.s6.provide_li4')}</li>
          </ul>

          <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-primary">
              {await t('safeguard.s6.flow_title')}
            </p>
            <ol className="mt-2 ml-4 list-decimal space-y-1">
              <li>{await t('safeguard.s6.flow_li1')}</li>
              <li>{await t('safeguard.s6.flow_li2')}</li>
              <li>{await t('safeguard.s6.flow_li3')}</li>
              <li>{await t('safeguard.s6.flow_li4')}</li>
              <li>{await t('safeguard.s6.flow_li5')}</li>
            </ol>
          </div>

          <p className="mt-3">
            <strong>{await t('safeguard.s6.outro_pre')}</strong>{' '}
            {await t('safeguard.s6.outro_call')}{' '}
            <strong>{await t('safeguard.s6.outro_999')}</strong>{' '}
            {await t('safeguard.s6.outro_post')}
          </p>

          {/*
            Sections below ported from data-room/03-privacy/safeguarding-policy.md
            §6.1 (disclosure handling), §6.3 (Prevent / external escalation),
            §6.4 (severity timeframes), and §9 (information sharing). Substantive
            policy content already approved internally - surfaced here so the
            canonical user-facing page reflects the underlying policy.
          */}
          <h3 className="mt-6 text-sm font-semibold text-primary">
            If a child discloses something to you
          </h3>
          <p>
            Act immediately. Record exactly what you saw or heard, when, and any actions you have
            already taken. Refer to the user by their account ID, not by name, in any email subject
            line.
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Do not investigate or interview the child yourself.</li>
            <li>Do not promise confidentiality you cannot keep.</li>
            <li>Do not delete any evidence &mdash; preserve the record.</li>
            <li>Do not discuss the concern with anyone who does not need to know.</li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold text-primary">
            Severity classification and response times
          </h3>
          <p>
            On receiving a concern the DSL classifies severity and acts within the following
            timeframes:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong className="text-primary">Immediate risk:</strong> act now; call 999 if life is
              threatened.
            </li>
            <li>
              <strong className="text-primary">High concern:</strong> contact statutory services
              within 24 hours.
            </li>
            <li>
              <strong className="text-primary">Medium concern:</strong> review and decide next steps
              within 48 hours.
            </li>
            <li>
              <strong className="text-primary">Low concern:</strong> log, monitor and review within
              7 days.
            </li>
          </ul>
          <p className="mt-3">
            We always aim to acknowledge any safeguarding concern within 24 hours, regardless of
            classification.
          </p>

          <h3 className="mt-6 text-sm font-semibold text-primary">
            Prevent duty and external escalation routes
          </h3>
          <p>
            Where we have a concern that a child is being drawn into extremism, we cooperate with
            schools&rsquo; Prevent duty obligations and escalate as appropriate. Anyone with a
            concern about radicalisation can contact the police anti-terrorism hotline on{' '}
            <a
              href="tel:08007893210"
              className="font-semibold text-accent hover:text-accent/80 underline"
            >
              0800 789 321
            </a>{' '}
            or their local Prevent coordinator. Suspected online sexual abuse or exploitation should
            be reported to{' '}
            <a
              href="https://www.ceop.police.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 underline"
            >
              CEOP
            </a>
            . Where a child has a known school, we contact the school&rsquo;s DSL; where no school
            is known, we escalate to the local authority Multi-Agency Safeguarding Hub (MASH).
          </p>

          <h3 className="mt-6 text-sm font-semibold text-primary">
            Information sharing and confidentiality
          </h3>
          <p>
            Confidentiality is <strong>not</strong> absolute. We share information about a
            safeguarding concern on a strict need-to-know basis, and we will share with statutory
            agencies when required to keep a child safe &mdash; even without consent. We never
            promise a child that a disclosure will be kept secret; we explain, in age-appropriate
            language, what we will do with the information they share. Where informing a parent or
            carer might put the child at greater risk (for example where the concern is about harm
            within the home), we escalate directly to social services and take their advice before
            contacting the family.
          </p>
        </PolicySection>

        {/* 7. Data Protection in Safeguarding */}
        <PolicySection id="data-protection" number="7" title={await t('safeguard.s7.title')}>
          <p>{await t('safeguard.s7.intro')}</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong className="text-primary">{await t('safeguard.s7.lawful_term')}</strong>{' '}
              {await t('safeguard.s7.lawful_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s7.access_term')}</strong>{' '}
              {await t('safeguard.s7.access_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s7.storage_term')}</strong>{' '}
              {await t('safeguard.s7.storage_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s7.ret_term')}</strong>{' '}
              {await t('safeguard.s7.ret_body')}
            </li>
            <li>
              <strong className="text-primary">{await t('safeguard.s7.share_term')}</strong>{' '}
              {await t('safeguard.s7.share_body')}
            </li>
          </ul>

          {/*
            Recording and retention - data-room policy §7. Retention to age 25
            follows KCSIE guidance and is already the stated practice in the
            underlying policy document.
          */}
          <h3 className="mt-6 text-sm font-semibold text-primary">
            Safeguarding records and retention
          </h3>
          <p>
            Every safeguarding concern is recorded in a secure log that captures a unique incident
            ID, the date and time of the report, who reported it, the nature of the concern, the
            user(s) involved (by account ID), the actions taken by the DSL, any external contacts
            made, the outcome, and review dates. In line with Keeping Children Safe in Education
            guidance, safeguarding records relating to a child are retained until that child reaches
            the age of 25. Access to the safeguarding log is restricted to the DSL; broader access
            requires a documented need.
          </p>
        </PolicySection>

        {/* 8. Staff and Contractor Training */}
        <PolicySection id="training" number="8" title={await t('safeguard.s8.title')}>
          <p>{await t('safeguard.s8.intro')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>{await t('safeguard.s8.li1')}</li>
            <li>{await t('safeguard.s8.li2')}</li>
            <li>{await t('safeguard.s8.li3')}</li>
            <li>{await t('safeguard.s8.li4')}</li>
            <li>{await t('safeguard.s8.li5')}</li>
          </ul>
          <p>{await t('safeguard.s8.dsl_para')}</p>
          <p>{await t('safeguard.s8.records')}</p>

          {/*
            Safer recruitment - data-room policy §11. We deliberately do NOT
            claim that every staff member holds an enhanced DBS check: the
            underlying policy says "Enhanced DBS checks where required by role",
            which is the wording we mirror here. Promoting "all staff DBS-checked"
            would over-claim.
          */}
          <h3 className="mt-6 text-sm font-semibold text-primary">
            Safer recruitment and background checks
          </h3>
          <p>
            All staff and contractors who have access to children&rsquo;s data or to child-facing
            systems undergo:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Identity verification and right-to-work checks</li>
            <li>Reference checks</li>
            <li>Enhanced DBS checks where required by role</li>
            <li>Signed confidentiality and acceptable-use agreements</li>
            <li>Mandatory safeguarding training before access is granted</li>
          </ul>
        </PolicySection>

        {/* 9. Review Schedule */}
        <PolicySection id="review" number="9" title={await t('safeguard.s9.title')}>
          <p>{await t('safeguard.s9.intro')}</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>{await t('safeguard.s9.li1')}</li>
            <li>{await t('safeguard.s9.li2')}</li>
            <li>{await t('safeguard.s9.li3')}</li>
            <li>{await t('safeguard.s9.li4')}</li>
          </ul>
          <p>{await t('safeguard.s9.outro')}</p>
          <div className="rounded-lg border border-border bg-muted p-4">
            <div className="flex items-center justify-between text-sm">
              <span>
                <strong className="text-primary">{await t('safeguard.s9.version_label')}</strong>{' '}
                {await t('safeguard.s9.version_value')}
              </span>
              <span>
                <strong className="text-primary">
                  {await t('safeguard.s9.next_review_label')}
                </strong>{' '}
                {await t('safeguard.s9.next_review_value')}
              </span>
            </div>
          </div>
        </PolicySection>

        {/*
          10. Whistleblowing - data-room policy §10. Substantive content
          ported verbatim. The NSPCC whistleblowing helpline is a published
          public number, and the CEO / board / ICO escalation routes are
          consistent with the underlying policy.
        */}
        <PolicySection id="whistleblowing" number="10" title="Whistleblowing">
          <p>
            Any staff member, contractor, or volunteer who believes that a safeguarding concern is
            not being handled properly &mdash; or who is concerned that the safeguarding policy
            itself is being ignored or undermined &mdash; can raise the issue with any of the
            following, in any order:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>The DSL&rsquo;s line manager (the CEO)</li>
            <li>The board, or the nominated board-level safeguarding governor</li>
            <li>
              The NSPCC whistleblowing helpline on{' '}
              <a
                href="tel:08000280285"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                0800 028 0285
              </a>
            </li>
            <li>
              The Information Commissioner&rsquo;s Office, where the concern relates to data
              handling
            </li>
          </ul>
          <p>
            No staff member, contractor or volunteer will suffer retaliation for raising a
            safeguarding concern in good faith.
          </p>
        </PolicySection>

        {/*
          11. Legal and statutory framework - derived from the opening
          paragraph of data-room/03-privacy/safeguarding-policy.md and from
          the existing references inside §8 (Working Together to Safeguard
          Children, Keeping Children Safe in Education). Listing the
          framework explicitly was an audit-remediation requirement; we list
          only statutes already referenced in the underlying policy.

          We do NOT list the Education Act 2002 s.175 here even though the
          audit prompt mentioned it: that section imposes a duty on local
          authorities and maintained schools, not on a publisher, and the
          underlying policy does not cite it. Promoting it onto the canonical
          page would over-claim. Add it to the data-room policy first if
          counsel wants it surfaced.
        */}
        <PolicySection id="legal-framework" number="11" title="Legal and statutory framework">
          <p>
            This policy is written to be consistent with the following statutory guidance and
            legislation, to the extent that each applies to a digital publisher serving children:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong className="text-primary">Keeping Children Safe in Education (KCSIE)</strong>{' '}
              &mdash; statutory guidance for organisations working with children in the English
              education system.
            </li>
            <li>
              <strong className="text-primary">Working Together to Safeguard Children</strong>{' '}
              &mdash; the inter-agency framework for safeguarding and promoting the welfare of
              children.
            </li>
            <li>
              <strong className="text-primary">Children Act 2004</strong> &mdash; the underlying
              statutory framework for safeguarding in England and Wales.
            </li>
            <li>
              <strong className="text-primary">Online Safety Act 2023</strong> &mdash; applied to
              the extent our service is in scope, with particular attention to age-appropriate
              design and harms to children.
            </li>
            <li>
              <strong className="text-primary">
                UK GDPR and the Data Protection Act 2018, alongside the ICO Age Appropriate Design
                Code
              </strong>{' '}
              &mdash; governing how we handle children&rsquo;s personal data.
            </li>
          </ul>
          <p>
            The Designated Safeguarding Lead is responsible for keeping this policy aligned with
            updates to any of the above, and for triggering a policy review when those updates
            materially affect our obligations.
          </p>
        </PolicySection>

        {/* 12. External Contacts */}
        <PolicySection id="external-contacts" number="12" title={await t('safeguard.s10.title')}>
          <p>{await t('safeguard.s10.intro')}</p>
          <div className="mt-2 space-y-3">
            {/* Childline */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                {await t('safeguard.s10.childline.title')}
              </p>
              <p className="mt-1 text-xs">{await t('safeguard.s10.childline.body')}</p>
              <p className="mt-2">
                <a
                  href="tel:08001111"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  0800 1111
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.childline.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.childline.org.uk
                </a>
              </p>
            </div>

            {/* NSPCC */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                {await t('safeguard.s10.nspcc.title')}
              </p>
              <p className="mt-1 text-xs">{await t('safeguard.s10.nspcc.body')}</p>
              <p className="mt-2">
                <a
                  href="tel:08088005000"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  0808 800 5000
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.nspcc.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.nspcc.org.uk
                </a>
              </p>
            </div>

            {/*
              Samaritans + YoungMinds - sourced from data-room policy §14
              "External - support for children". Added here so the canonical
              page surfaces the same support routes the underlying policy
              already commits us to signposting.
            */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">Samaritans</p>
              <p className="mt-1 text-xs">
                Confidential emotional-support line, 24/7, for anyone in distress.
              </p>
              <p className="mt-2">
                <a
                  href="tel:116123"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  116 123
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.samaritans.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.samaritans.org
                </a>
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">YoungMinds Crisis Messenger</p>
              <p className="mt-1 text-xs">
                Free 24/7 mental health crisis support for young people via text message.
              </p>
              <p className="mt-2 text-sm">
                Text <strong>YM</strong> to{' '}
                <a
                  href="sms:85258"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  85258
                </a>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                <a
                  href="https://www.youngminds.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  www.youngminds.org.uk
                </a>
              </p>
            </div>

            {/* CEOP */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                {await t('safeguard.s10.ceop.title')}
              </p>
              <p className="mt-1 text-xs">{await t('safeguard.s10.ceop.body')}</p>
              <p className="mt-2">
                <a
                  href="https://www.ceop.police.uk/ceop-reporting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  {await t('safeguard.s10.ceop.cta')}
                </a>
              </p>
            </div>

            {/* Local Authority */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-primary">
                {await t('safeguard.s10.la.title')}
              </p>
              <p className="mt-1 text-xs">
                {await t('safeguard.s10.la.body_pre')}{' '}
                <a
                  href="https://www.gov.uk/report-child-abuse-to-local-council"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline"
                >
                  {await t('safeguard.s10.la.gov_link')}
                </a>
                .
              </p>
            </div>

            {/* Emergency */}
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <p className="text-sm font-semibold text-primary">
                {await t('safeguard.s10.emerg.title')}
              </p>
              <p className="mt-1 text-xs">
                {await t('safeguard.s10.emerg.body_pre')}{' '}
                <a
                  href="tel:999"
                  className="font-semibold text-accent hover:text-accent/80 underline"
                >
                  999
                </a>{' '}
                {await t('safeguard.s10.emerg.body_post')}
              </p>
            </div>
          </div>
        </PolicySection>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-xs text-muted-foreground">{await t('safeguard.footer_disclaimer')}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/safeguarding/report" className="btn-primary text-sm">
            {await t('safeguard.report_concern_now_cta')}
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            {await t('safeguard.footer.return_home')}
          </Link>
        </div>
      </div>
    </div>
  )
}
