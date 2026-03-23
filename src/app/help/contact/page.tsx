import Link from "next/link";
import { Metadata } from "next";

/* -- Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The English Hub support team. We are here to help with questions about your account, feedback, billing, data, or safeguarding.",
};

/* -- Contact channels ------------------------------------------------- */

const CONTACTS = [
  {
    label: "General Support",
    email: "support@theenglishhub.co.uk",
    description:
      "Questions about your account, essays, feedback, or anything else? This is the best place to start.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    colour: "primary" as const,
  },
  {
    label: "Data Protection Officer",
    email: "dpo@theenglishhub.co.uk",
    description:
      "Want to download, correct, or delete your personal data? Our DPO handles all data rights requests.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    colour: "accent" as const,
  },
  {
    label: "Safeguarding",
    email: "safeguarding@theenglishhub.co.uk",
    description:
      "If you feel unsafe, or if you are worried about yourself or another young person, please reach out here. We take this seriously.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    colour: "success" as const,
  },
  {
    label: "Complaints",
    email: "complaints@theenglishhub.co.uk",
    description:
      "Not happy with how something was handled? We want to hear about it so we can put it right.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    colour: "warn" as const,
  },
] as const;

const COLOUR_MAP = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    hoverBorder: "hover:border-primary/30",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    hoverBorder: "hover:border-accent/30",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    hoverBorder: "hover:border-success/30",
  },
  warn: {
    bg: "bg-warn/10",
    text: "text-warn",
    hoverBorder: "hover:border-warn/30",
  },
} as const;

/* -- Page ------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-accent px-4 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Whether you have a question, a problem, or just want to say hi --
            pick the right channel below and we will get back to you as quickly
            as we can.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 py-12 sm:py-16" aria-labelledby="contact-channels-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="contact-channels-heading" className="sr-only">
            Contact channels
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {CONTACTS.map((contact) => {
              const colours = COLOUR_MAP[contact.colour];
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
                    <h3 className="font-semibold text-foreground">
                      {contact.label}
                    </h3>
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
              );
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
            About the Company
          </h2>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Company Name
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Upskill Energy Limited
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Registered In
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  England and Wales
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  General Support
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href="mailto:support@theenglishhub.co.uk"
                    className="font-medium text-primary hover:underline underline-offset-2"
                  >
                    support@theenglishhub.co.uk
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Data Protection
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href="mailto:dpo@theenglishhub.co.uk"
                    className="font-medium text-primary hover:underline underline-offset-2"
                  >
                    dpo@theenglishhub.co.uk
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
              <h3 className="font-semibold text-foreground">
                When will I hear back?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">General support:</strong>{" "}
                    within 1 working day
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Data requests:</strong>{" "}
                    within 30 days (usually much sooner)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Safeguarding:</strong>{" "}
                    prioritised -- we aim to respond within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Complaints:</strong>{" "}
                    acknowledged within 2 working days, resolved within 20
                  </span>
                </li>
              </ul>
            </div>

            {/* ICO complaint */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-semibold text-foreground">
                Not satisfied with our response?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If you have raised a concern about your data and you are not
                happy with how we have handled it, you have the right to
                complain to the UK&apos;s data protection regulator, the
                Information Commissioner&apos;s Office (ICO).
              </p>
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2"
              >
                Make a complaint to the ICO
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Help Centre
          </Link>
        </div>
      </section>

    </>
  );
}
