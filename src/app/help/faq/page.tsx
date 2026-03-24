"use client";

import { useState } from "react";
import Link from "next/link";

/* -- FAQ data --------------------------------------------------------- */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  items: FaqItem[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        question: "What is The English Hub?",
        answer:
          "The English Hub is an online revision platform built for GCSE and IGCSE English students. You write essays, and our AI gives you detailed, mark-scheme-aligned feedback so you can see exactly where to improve. Think of it like having a helpful tutor available whenever you need one.",
      },
      {
        question: "How old do I need to be?",
        answer:
          "You need to be at least 14 years old to create an account. The platform is designed for students aged 14 to 18. If you are under 14, a parent or guardian would need to set up and manage the account on your behalf.",
      },
      {
        question: "Which exam boards do you cover?",
        answer:
          "We currently support AQA, Edexcel (Pearson), OCR, and Cambridge Assessment International Education (CAIE). When you submit an essay, you choose your exam board and paper type so the feedback matches the right mark scheme.",
      },
      {
        question: "Is this a replacement for school?",
        answer:
          "Not at all! The English Hub is a revision and practice tool. It is designed to work alongside your regular lessons, not replace them. Your teachers know you best -- we are here to give you extra practice and faster feedback on your writing.",
      },
    ],
  },
  {
    id: "ai-feedback",
    title: "AI Feedback",
    items: [
      {
        question: "How does the AI feedback work?",
        answer:
          "When you submit an essay, our AI reads it and analyses it against the specific mark scheme criteria for your chosen exam board and paper. It looks at things like structure, language use, spelling and grammar, and exam technique. You get a breakdown with strengths, areas for improvement, and an indicative mark band -- all within seconds.",
      },
      {
        question: "Is the AI always right?",
        answer:
          "Honestly? Not always. AI is a powerful tool, but it is not perfect. It can occasionally misinterpret creative writing choices or nuance. That is why we always recommend treating the feedback as a helpful guide, not a final grade. If something feels off, trust your instincts and chat to your teacher about it.",
      },
      {
        question: "Can I get a human to review my feedback?",
        answer:
          "Yes! If you want a second opinion from a real person, you can request a human review. A qualified English teacher will look at your essay and the AI feedback and provide their own assessment. This is available on certain plans -- check the pricing page for details.",
      },
      {
        question: "Will my essays be used to train the AI?",
        answer:
          "No, not by default. We do not use your essays to train or fine-tune our AI models unless you have explicitly opted in. Your work is yours. You can read more about how we handle your data in our Privacy Policy and AI Transparency page.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    items: [
      {
        question: "What data do you collect?",
        answer:
          "We collect the basics needed to run your account: your name, email address, age range, and the essays you submit. We also collect some technical data (like your browser type) to keep the platform running smoothly. We never collect more than we need, and we are fully transparent about everything -- check our Privacy Policy for the full list.",
      },
      {
        question: "How can I download my data?",
        answer:
          "You have the right to download all the personal data we hold about you. Just head to your account settings and look for the \"Download my data\" option, or email our Data Protection Officer at dpo@theenglishhub.app and we will sort it out within 30 days.",
      },
      {
        question: "How can I delete my data?",
        answer:
          "You can request deletion of your account and all associated data at any time. Go to your account settings or email dpo@theenglishhub.app. Once you confirm, we will delete your personal data within 30 days. Some data may be kept a little longer where required by law (for example, payment records).",
      },
      {
        question: "Who can see my essays?",
        answer:
          "Your essays are private to you by default. Our AI processes them to generate feedback, but no human at The English Hub reads your work unless you specifically request a human review. We never share your essays with other students, advertisers, or third parties.",
      },
    ],
  },
  {
    id: "billing",
    title: "Subscription & Billing",
    items: [
      {
        question: "How do I cancel my subscription?",
        answer:
          "You can cancel at any time from your account settings -- no awkward phone calls needed. Once you cancel, you will still have access until the end of your current billing period. You can also use our online cancellation form if you prefer.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "If you are within 14 days of starting a paid subscription and have not used the service extensively, you are entitled to a refund under UK consumer law. After that, refunds are handled on a case-by-case basis. Just get in touch with our support team and we will do our best to help.",
      },
      {
        question: "What happens when my free trial ends?",
        answer:
          "We will send you a reminder before your trial ends. If you do not choose a paid plan, your account will switch to a limited free tier -- you will not be charged automatically. We do not believe in sneaky billing.",
      },
      {
        question: "How do renewal reminders work?",
        answer:
          "We send you an email reminder before each renewal so there are no surprises. You will get a heads-up at least 7 days before your next payment, giving you plenty of time to cancel or change your plan if you want to.",
      },
    ],
  },
  {
    id: "exam-boards",
    title: "Exam Boards",
    items: [
      {
        question: "Are you endorsed by any exam board?",
        answer:
          "No. The English Hub is a completely independent platform. We are not endorsed by, affiliated with, or formally connected to AQA, Edexcel, OCR, CAIE, or any other examination board. We reference their mark schemes to make our feedback useful, but we are not an official resource.",
      },
      {
        question: "Can I use your feedback as an official grade?",
        answer:
          "No. The marks and mark bands suggested by our AI are indicative only -- they are there to give you a rough idea of where you might sit. They are not official grades and should not be treated as predictions or guaranteed outcomes. Only your exam board can award official grades.",
      },
    ],
  },
];

/* -- Accordion component ---------------------------------------------- */

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm transition-colors sm:text-base"
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 pr-8 text-sm leading-relaxed text-muted-foreground">
          {item.answer}
        </div>
      )}
    </div>
  );
}

/* -- Page ------------------------------------------------------------- */

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-accent px-4 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Got a question? Chances are someone has asked it before. Have a
            browse below -- if you still can&apos;t find what you need,{" "}
            <Link
              href="/help/contact"
              className="font-medium underline underline-offset-2 hover:text-white"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Jump links */}
          <nav aria-label="FAQ sections" className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Jump to section
            </p>
            <div className="flex flex-wrap gap-2">
              {FAQ_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-md hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          {FAQ_SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
              <h2 className="mb-1 text-xl font-bold text-primary sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-2 rounded-xl border border-border bg-card shadow-md">
                <div className="divide-y divide-gray-200 px-5">
                  {section.items.map((item) => (
                    <AccordionItem key={item.question} item={item} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl bg-muted p-6 text-center sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Didn&apos;t find your answer?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              No worries -- our support team is friendly and usually replies
              within one working day.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/help/contact" className="btn-primary px-6 py-2.5">
                Contact Support
              </Link>
              <Link
                href="/help"
                className="btn-outline px-6 py-2.5"
              >
                Back to Help Centre
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
