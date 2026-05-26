import Link from 'next/link'
import { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

/* -- Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with The English Hub support team. We are here to help with questions about your account, feedback, billing, data, or safeguarding.',
  alternates: { canonical: 'https://theenglishhub.app/help/contact' },
  openGraph: {
    title: 'Contact Us - The English Hub',
    description:
      'Get in touch with The English Hub support team. We are here to help with questions about your account, feedback, billing, data, or safeguarding.',
  },
}

/* -- Contact channels ------------------------------------------------- */

const COLOUR_MAP = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBorder: 'hover:border-primary/30',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    hoverBorder: 'hover:border-accent/30',
  },
  success: {
    bg: 'bg-success/10',
    text: 'text-success',
    hoverBorder: 'hover:border-success/30',
  },
  warn: {
    bg: 'bg-warn/10',
    text: 'text-warn',
    hoverBorder: 'hover:border-warn/30',
  },
} as const

const MAIL_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
)

const LOCK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
)

const SHIELD_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
)

const CHAT_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    />
  </svg>
)

/* -- Page ------------------------------------------------------------- */

export default async function ContactPage() {
  const [
    title,
    lead,
    channelsHeading,
    chGeneralLabel,
    chGeneralDesc,
    chDpoLabel,
    chDpoDesc,
    chSafeguardingLabel,
    chSafeguardingDesc,
    chComplaintsLabel,
    chComplaintsDesc,
    companyHeading,
    coNameLabel,
    coNameValue,
    coRegLabel,
    coRegValue,
    coGeneralLabel,
    coDpoLabel,
    rtHeading,
    rtGeneralLabel,
    rtGeneralValue,
    rtDataLabel,
    rtDataValue,
    rtSafeguardingLabel,
    rtSafeguardingValue,
    rtComplaintsLabel,
    rtComplaintsValue,
    icoHeading,
    icoBody,
    icoCta,
    backToHelp,
  ] = await tMany([
    'help.contact.title',
    'help.contact.lead',
    'help.contact.channels_heading',
    'help.contact.ch.general.label',
    'help.contact.ch.general.desc',
    'help.contact.ch.dpo.label',
    'help.contact.ch.dpo.desc',
    'help.contact.ch.safeguarding.label',
    'help.contact.ch.safeguarding.desc',
    'help.contact.ch.complaints.label',
    'help.contact.ch.complaints.desc',
    'help.contact.company_heading',
    'help.contact.company.name_label',
    'help.contact.company.name_value',
    'help.contact.company.registered_label',
    'help.contact.company.registered_value',
    'help.contact.company.general_label',
    'help.contact.company.dpo_label',
    'help.contact.rt_heading',
    'help.contact.rt.general_label',
    'help.contact.rt.general_value',
    'help.contact.rt.data_label',
    'help.contact.rt.data_value',
    'help.contact.rt.safeguarding_label',
    'help.contact.rt.safeguarding_value',
    'help.contact.rt.complaints_label',
    'help.contact.rt.complaints_value',
    'help.contact.ico_heading',
    'help.contact.ico_body',
    'help.contact.ico_cta',
    'help.contact.back_to_help',
  ])

  const contacts = [
    {
      label: chGeneralLabel,
      email: 'info@Upskillenergy.com',
      description: chGeneralDesc,
      icon: MAIL_ICON,
      colour: 'primary' as const,
    },
    {
      label: chDpoLabel,
      email: 'dpo@theenglishhub.app',
      description: chDpoDesc,
      icon: LOCK_ICON,
      colour: 'accent' as const,
    },
    {
      label: chSafeguardingLabel,
      email: 'safeguarding@theenglishhub.app',
      description: chSafeguardingDesc,
      icon: SHIELD_ICON,
      colour: 'success' as const,
    },
    {
      label: chComplaintsLabel,
      email: 'complaints@theenglishhub.app',
      description: chComplaintsDesc,
      icon: CHAT_ICON,
      colour: 'warn' as const,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent px-4 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{lead}</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 py-12 sm:py-16" aria-labelledby="contact-channels-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="contact-channels-heading" className="sr-only">
            {channelsHeading}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {contacts.map((contact) => {
              const colours = COLOUR_MAP[contact.colour]
              return (
                <div
                  key={contact.label}
                  className={`card flex flex-col gap-4 ${colours.hoverBorder} hover:shadow-md transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${colours.bg} ${colours.text}`}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{contact.label}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {contact.description}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className={`mt-auto inline-flex items-center gap-2 text-sm font-medium ${colours.text} hover:underline underline-offset-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {contact.email}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-muted px-4 py-12 sm:py-16" aria-labelledby="company-heading">
        <div className="mx-auto max-w-3xl">
          <h2
            id="company-heading"
            className="text-center text-xl font-bold text-foreground sm:text-2xl"
          >
            {companyHeading}
          </h2>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {coNameLabel}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{coNameValue}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {coRegLabel}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{coRegValue}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {coGeneralLabel}
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href="mailto:info@Upskillenergy.com"
                    className="font-medium text-primary hover:underline underline-offset-2"
                  >
                    info@Upskillenergy.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {coDpoLabel}
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href="mailto:dpo@theenglishhub.app"
                    className="font-medium text-primary hover:underline underline-offset-2"
                  >
                    dpo@theenglishhub.app
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Response times + ICO */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Response times */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-semibold text-foreground">{rtHeading}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-success"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-foreground">{rtGeneralLabel}</strong> {rtGeneralValue}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-foreground">{rtDataLabel}</strong> {rtDataValue}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-warn"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-foreground">{rtSafeguardingLabel}</strong>{' '}
                    {rtSafeguardingValue}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-foreground">{rtComplaintsLabel}</strong>{' '}
                    {rtComplaintsValue}
                  </span>
                </li>
              </ul>
            </div>

            {/* ICO complaint */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-semibold text-foreground">{icoHeading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{icoBody}</p>
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2"
              >
                {icoCta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            {backToHelp}
          </Link>
        </div>
      </section>
    </>
  )
}
