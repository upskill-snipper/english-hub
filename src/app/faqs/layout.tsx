import type { Metadata } from 'next'
import { FAQPageJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'FAQs — Frequently Asked Questions | The English Hub',
  description:
    'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licenses, technical issues, and more.',
  openGraph: {
    title: 'FAQs — Frequently Asked Questions | The English Hub',
    description:
      'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licenses, technical issues, and more.',
    url: 'https://theenglishhub.app/faqs',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs — Frequently Asked Questions | The English Hub',
    description:
      'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licenses, technical issues, and more.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/faqs',
  },
}

const FAQ_JSON_LD_DATA: { question: string; answer: string }[] = [
  // General
  {
    question: 'What is The English Hub?',
    answer:
      'The English Hub is an online learning platform designed specifically for GCSE and IGCSE English students. We provide board-specific courses, mock exams with AI-powered feedback, practice questions with model answers, and comprehensive revision materials for English Language and English Literature.',
  },
  {
    question: 'Who is The English Hub for?',
    answer:
      "The English Hub is built for GCSE and IGCSE English students (typically aged 14-16), but is also used by KS3 students who want to get ahead. Teachers use our school licenses to set assignments and track class progress, and parents can link to their child's account for weekly progress reports.",
  },
  {
    question: 'Which exam boards do you cover?',
    answer:
      'We cover all major English exam boards in the UK: AQA, Edexcel, OCR, WJEC/Eduqas, and Cambridge IGCSE. All content — courses, mock exams, practice questions, and revision notes — is tailored to your specific exam board and specification.',
  },
  {
    question: 'How is The English Hub different from other revision sites?',
    answer:
      'Unlike generic revision platforms, every piece of content on The English Hub is written specifically for your exam board and specification. Our mock exams use AI trained on real mark schemes to give you detailed, examiner-style feedback. We focus exclusively on English, so the depth and quality of our content is unmatched.',
  },
  // Pricing & Billing
  {
    question: 'How much does The English Hub cost?',
    answer:
      'We offer two simple plans: £9.99/month or £79.99/year (save over 30%), both with the first month free. Every plan gives you full, unrestricted access to every feature on the platform. Cancel anytime.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. Every new account starts with a completely free 30-day trial. You get full access to all courses, mock exams, practice questions, and revision materials. No credit card is required to start your trial.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. When you cancel, you keep access to all features until the end of your current billing period.',
  },
  // Courses & Content
  {
    question: 'How do mock exams work?',
    answer:
      'Our mock exams replicate the format, timing, and question styles of real exams for your specific exam board. After you submit your responses, our AI (trained on official mark schemes) provides a mark, grade estimate, and detailed feedback on each answer — highlighting strengths and areas for improvement.',
  },
  {
    question: 'Are set texts covered for English Literature?',
    answer:
      'Yes. We cover all the set texts for each exam board, including character guides, theme analyses, key quote banks, and essay planning resources. Popular texts include Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, Power and Conflict poetry, and many more.',
  },
  // Technical
  {
    question: 'Is my data safe and private?',
    answer:
      'Yes. We take data security seriously. All data is encrypted in transit and at rest. We comply with UK GDPR and never sell your personal information. For full details, read our Privacy Policy. Students under 16 should have a parent or guardian manage their account.',
  },
  // Schools & Teachers
  {
    question: 'How do school licenses work?',
    answer:
      'School licenses give your students full access to The English Hub at a discounted per-student rate. Our Department package covers up to 50 students for £500/year (£10/student). Larger packages are available for bigger schools and multi-academy trusts. Visit our For Schools page for full pricing.',
  },
  {
    question: 'Can we try it before committing to a school license?',
    answer:
      "Yes. We offer a free pilot for schools so you can trial The English Hub with a class before purchasing a full license. Contact us to arrange a pilot, and we'll set you up with temporary access for your students.",
  },
]

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQPageJsonLd faqs={FAQ_JSON_LD_DATA} />
      {children}
    </>
  )
}
