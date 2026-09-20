import type { Metadata } from 'next'

// Leaf-route metadata for the Academic Reading practice module. The parent
// /ielts layout provides section-level defaults; this overrides the title,
// description and canonical for the Reading page specifically. (The page itself
// is a client component and cannot export `metadata`, hence this sibling
// server layout.)
export const metadata: Metadata = {
  title: 'IELTS Academic Reading Practice - The English Hub',
  description:
    'Original IELTS Academic Reading passages with multiple choice, True/False/Not Given and sentence completion, auto-marked with a band and explanations.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/reading' },
}

export default function IeltsReadingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
