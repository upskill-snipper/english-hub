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
      title: `${title} — The English Hub`,
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

const SECTION_KEYS: { id: string; number: string; key: string }[] = [
  { id: 'commitment', number: '1', key: 'safeguard.toc.commitment' },
  { id: 'scope', number: '2', key: 'safeguard.toc.scope' },
  { id: 'dsl', number: '3', key: 'safeguard.toc.dsl' },
  { id: 'principles', number: '4', key: 'safeguard.toc.principles' },
  { id: 'online-safety', number: '5', key: 'safeguard.toc.online_safety' },
  { id: 'reporting', number: '6', key: 'safeguard.toc.reporting' },
  { id: 'data-protection', number: '7', key: 'safeguard.toc.data_protection' },
  { id: 'training', number: '8', key: 'safeguard.toc.training' },
  { id: 'review', number: '9', key: 'safeguard.toc.review' },
  { id: 'external-contacts', number: '10', key: 'safeguard.toc.external_contacts' },
]

// ─── Page component ─────────────────────────────────────────────────────

export default async function SafeguardingPolicyPage() {
  const sections = await Promise.all(
    SECTION_KEYS.map(async (s) => ({ ...s, title: await t(s.key) })),
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
              The English Hub&rsquo;s Designated Safeguarding Lead can be reached through our{' '}
              <Link
                href="/safeguarding/report"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding report form
              </Link>{' '}
              and our monitored safeguarding inbox at{' '}
              <a
                href="mailto:safeguarding@theenglishhub.app"
                className="font-semibold text-accent hover:text-accent/80 underline"
              >
                safeguarding@theenglishhub.app
              </a>
              . We aim to acknowledge all safeguarding concerns within 24 hours.
            </p>
            <p className="mt-1 text-xs">
              This service is for learners aged 13 and over; 13&ndash;15 require parent or guardian
              consent.
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

        {/* 10. External Contacts */}
        <PolicySection id="external-contacts" number="10" title={await t('safeguard.s10.title')}>
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
