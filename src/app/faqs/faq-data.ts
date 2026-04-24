import { PRICING } from '@/constants/pricing'

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSection {
  id: string
  title: string
  items: FaqItem[]
}

/**
 * Canonical FAQ content for /faqs.
 *
 * Server-rendered on the page (in <details>/<summary>) and flattened into
 * FAQPage JSON-LD via the layout. Keep question text unique across all
 * sections — we dedupe by question string when building the JSON-LD feed.
 */
export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        question: 'What is The English Hub?',
        answer:
          'The English Hub is an online learning platform designed specifically for GCSE and IGCSE English students. We provide board-specific courses, mock exams with AI-powered feedback, practice questions with model answers, and comprehensive revision materials for English Language and English Literature.',
      },
      {
        question: 'Who is The English Hub for?',
        answer:
          "The English Hub is built for GCSE and IGCSE English students (typically aged 14–16), but is also used by KS3 students who want to get ahead. Teachers use our school licences to set assignments and track class progress, and parents can link to their child's account for weekly progress reports.",
      },
      {
        question: 'Which exam boards are supported?',
        answer:
          "AQA, Edexcel (GCSE + International), OCR, WJEC / Eduqas, Cambridge IGCSE (0500 + 0475), and Pearson Edexcel International. Built by examiners active across all of these, so every course, mock exam, practice question, and revision note is tailored to your specific board and specification.",
      },
      {
        question: 'Is The English Hub suitable for IGCSE Cambridge 0500 and 0475?',
        answer:
          "Yes. We cover Cambridge First Language English 0500 and Literature in English 0475 alongside UK GCSE (AQA, Edexcel, Eduqas, OCR) and International A-Level — with board-specific mark schemes, assessment objectives, and set-text coverage.",
      },
      {
        question: 'Does The English Hub cover AQA Power and Conflict?',
        answer:
          "Yes — full revision notes, annotated model paragraphs, and past-paper practice for all 15 poems in the AQA Power and Conflict anthology, aligned to AO1 / AO2 / AO3 mark distribution.",
      },
      {
        question: 'Do I need to download an app?',
        answer:
          'No. The English Hub is a web application that works in any modern browser on laptops, desktops, tablets, and smartphones. Just visit theenglishhub.app and log in — no downloads or installations required.',
      },
      {
        question: 'How is The English Hub different from other revision sites?',
        answer:
          'Unlike generic revision platforms, every piece of content on The English Hub is written specifically for your exam board. Our mock exams use AI trained on real mark schemes to give you detailed, criteria-referenced feedback. We focus exclusively on English, so the depth and quality of our content is unmatched.',
      },
    ],
  },
  {
    id: 'pricing-billing',
    title: 'Pricing & Billing',
    items: [
      {
        question: 'How much does The English Hub cost?',
        answer: `Early Access / Founding pricing — locked until ${PRICING.PRICE_INCREASE_DATE}: Students £${PRICING.STUDENT_MONTHLY}/month or £${PRICING.STUDENT_ANNUAL}/year (or £${PRICING.STUDENT_ANNUAL_WITH_CODE}/year with any affiliate code or the public code ${PRICING.AFFILIATE_PROMO_CODE} — save £${PRICING.STUDENT_ANNUAL_SAVINGS}). Teachers £${PRICING.TEACHER_MONTHLY}/month or £${PRICING.TEACHER_ANNUAL}/year (includes lesson planning, AI marking, worksheet builder, class analytics). Schools: Founding Schools Programme £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')} per year — first ${PRICING.FOUNDER_SCHOOL_LIMIT} schools only. Standard pricing from ${PRICING.PRICE_INCREASE_DATE}: Students £${PRICING.STUDENT_MONTHLY_STANDARD}/month or £${PRICING.STUDENT_ANNUAL_STANDARD}/year. Teachers £${PRICING.TEACHER_MONTHLY_STANDARD}/month or £${PRICING.TEACHER_ANNUAL_STANDARD}/year. Schools £${PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}/year. Every paid plan starts with a ${PRICING.TRIAL_TEXT} (card required). Before the paywall you also get ${PRICING.FREE_USES_PER_FEATURE} free uses of most features — no card required for those. Prices shown in GBP.`,
      },
      {
        question: 'Is there a free trial? Do I need a card?',
        answer: `Yes. Every paid plan starts with a ${PRICING.TRIAL_TEXT}. The trial requires full sign-up with a valid payment method — so the subscription can convert automatically if you do not cancel before day 7. Separately, you can demo most premium features for ${PRICING.FREE_USES_PER_FEATURE} free uses without a card.`,
      },
      {
        question: 'What happens after my 7-day trial ends?',
        answer:
          'We send you a reminder email a couple of days before the trial ends. If you do nothing, your chosen subscription activates and your card is charged the plan price. Cancel any time before day 7 from your account settings and you will not be charged at all.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer:
          'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. When you cancel, you keep access to all features until the end of your current billing period.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major debit and credit cards (Visa, Mastercard, American Express) processed securely through Stripe. We do not store your card details on our servers.',
      },
      {
        question: 'Can I get a refund?',
        answer:
          "If you're not satisfied within the first 14 days of a paid subscription, contact our support team and we'll arrange a full refund. After 14 days, you can cancel to prevent future charges, but we don't offer partial refunds for the current billing period.",
      },
    ],
  },
  {
    id: 'courses',
    title: 'Courses & Content',
    items: [
      {
        question: 'What subjects and courses are available?',
        answer:
          'We offer courses for GCSE English Language and GCSE English Literature across all major exam boards. Each course covers every topic required by your exam board with structured lessons, worked examples, and practice activities.',
      },
      {
        question: 'How do mock exams work?',
        answer:
          'Our mock exams replicate the format, timing, and question styles of real exams for your specific exam board. After you submit your responses, our AI (trained on official mark schemes) provides a mark, grade estimate, and detailed feedback on each answer — highlighting strengths and areas for improvement.',
      },
      {
        question: 'What are practice questions?',
        answer:
          'Practice questions let you focus on individual question types (e.g. language analysis, creative writing, essay responses). Each question comes with a model answer so you can compare your response against a top-grade example and understand what earns top marks.',
      },
      {
        question: 'Are set texts covered for English Literature?',
        answer:
          'Yes. We cover all the set texts for each exam board, including character guides, theme analyses, key quote banks, and essay planning resources. Popular texts include Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, Power and Conflict poetry, and many more.',
      },
      {
        question: 'How often is content updated?',
        answer:
          "We continuously update our content to reflect the latest exam board requirements, mark schemes, and published guidance. When exam boards make changes, we update our materials promptly so you're always revising the right content.",
      },
    ],
  },
  {
    id: 'ai-marking',
    title: 'AI Marking & Feedback',
    items: [
      {
        question: 'How does the AI mark my essay?',
        answer:
          'Claude (Anthropic) reads the essay, compares it against the published AO descriptors for your board, and returns scores plus specific improvement feedback in 20–40 seconds. Every response is flagged with its confidence level and can be human-reviewed on request.',
      },
      {
        question: 'What if the AI gets the mark wrong?',
        answer:
          "Every AI-marked essay has a one-click ‘request human review’ option. A human examiner re-marks within 48 hours. We're transparent that AI marking is indicative, not authoritative — the mark scheme remains the examiner's.",
      },
      {
        question: 'Do you mark essays in real time in class?',
        answer:
          "Yes. Teachers can bulk-submit 30 essays and receive AO-aligned feedback per student in under 10 minutes — usually while the lesson is still running.",
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    items: [
      {
        question: 'What browsers and devices are supported?',
        answer:
          'The English Hub works on any device with a modern web browser. We support the latest versions of Chrome, Safari, Firefox, and Microsoft Edge on Windows, macOS, iOS, Android, and ChromeOS.',
      },
      {
        question: "I can't log in to my account. What should I do?",
        answer:
          'First, check that you\'re using the correct email address. If you\'ve forgotten your password, click "Forgot Password" on the login page to receive a reset link. If you signed up with Google, use the "Sign in with Google" button. If you\'re still having trouble, contact our support team.',
      },
      {
        question: "The page isn't loading or looks broken. How do I fix it?",
        answer:
          'Try these steps: (1) clear your browser cache and cookies, (2) refresh the page, (3) try a different browser, (4) check your internet connection. If the problem persists, it may be a temporary issue on our end — try again in a few minutes or contact support.',
      },
      {
        question: 'How do I reset my password?',
        answer:
          "Click ‘Forgot password?’ on the login page. Enter your email address and we'll send you a reset link. If you don't receive the email within a few minutes, check your spam folder or contact info@upskillenergy.com.",
      },
      {
        question: 'Can I use The English Hub offline?',
        answer:
          'The English Hub requires an internet connection to access courses, submit mock exams, and receive feedback. We recommend a stable broadband or mobile data connection for the best experience.',
      },
    ],
  },
  {
    id: 'privacy-safety',
    title: 'Privacy & Safety',
    items: [
      {
        question: 'How is my data protected?',
        answer:
          "We're UK GDPR compliant, registered with the ICO (registration ZC016690), host all data in EU regions (Supabase + Vercel), and treat every under-18 user under the ICO Children's Code 15 standards. A full DPIA is available at /compliance.",
      },
      {
        question: 'Is my data safe and private?',
        answer:
          'Yes. All data is encrypted in transit and at rest. We comply with UK GDPR and never sell your personal information. For full details, read our Privacy Policy. Students under 16 should have a parent or guardian manage their account.',
      },
      {
        question: 'What parental controls are available?',
        answer:
          "Parents can link to their child's account to receive weekly progress reports. For students under 16, we require parental consent during registration. Parents can view their child's learning activity, and request data access or deletion at any time. See our Privacy Policy for full details on how we protect children's data.",
      },
      {
        question: "Can parents track their child's progress?",
        answer:
          "Yes — parents get a weekly report and a child-linked dashboard. Parental controls and ICO Children's Code defaults apply throughout.",
      },
      {
        question: "How do I link my parent account to my child's?",
        answer:
          "Your child can send you a linking invitation from their account settings, or you can contact info@upskillenergy.com with your child's registered email. Once linked, you'll receive weekly progress reports and can manage consent preferences.",
      },
    ],
  },
  {
    id: 'schools-teachers',
    title: 'Schools & Teachers',
    items: [
      {
        question: 'Can my school buy a licence?',
        answer: `Yes. Schools get a bulk licence with teacher dashboards, cohort analytics, and the Head's Report. Founding schools pay from £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}/yr — see /for-schools for full details.`,
      },
      {
        question: 'Do you offer a free trial for schools?',
        answer:
          "Yes — schools get a 14-day free pilot with up to 60 students. Book a 20-minute call at /demo/school to set it up.",
      },
      {
        question: 'How does the Founding Schools Programme work?',
        answer: `Our Founding Schools Programme is a strategic partnership limited to the first ${PRICING.FOUNDER_SCHOOL_LIMIT} schools. Founding rate is £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')} per year — anchored against our projected Standard Pricing of £${PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')} per year from ${PRICING.PRICE_INCREASE_DATE}. Founding schools receive full platform access, priority onboarding, early features, and locked preferential pricing for 2–3 years. Schools that joined in wave 1 at £${PRICING.FOUNDER_SCHOOL_LEGACY.toLocaleString('en-GB')} are grandfathered at that rate. Visit our For Schools page or contact info@upskillenergy.com for details.`,
      },
      {
        question: 'What does the teacher dashboard include?',
        answer:
          'The teacher dashboard lets you view individual student progress and class-wide analytics, assign specific practice tasks and mock exams, set deadlines, and identify students who may need additional support. You can also see which topics your class is strongest and weakest on.',
      },
      {
        question: 'How do I onboard my students?',
        answer:
          'Once your school licence is set up, you can invite students via email or share a class join code. Students create their own accounts and are automatically linked to your school. Bulk onboarding via CSV upload is also available.',
      },
      {
        question: 'Do you offer training for teachers?',
        answer:
          'Yes. All school licences include a free onboarding session where we walk your department through the platform, teacher dashboard, and assignment features. We also provide ongoing support and can arrange additional training if needed.',
      },
    ],
  },
]

/**
 * Flattened FAQ list for FAQPage JSON-LD.
 * Deduped by question text (first occurrence wins).
 */
export const FAQ_JSON_LD_DATA: FaqItem[] = (() => {
  const seen = new Set<string>()
  const flat: FaqItem[] = []
  for (const section of FAQ_SECTIONS) {
    for (const item of section.items) {
      const key = item.question.trim().toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      flat.push(item)
    }
  }
  return flat
})()
