import type { Metadata } from 'next'

// Leaf-route metadata for the Writing module. The page itself is a Client
// Component ('use client') and cannot export metadata, so this sibling server
// layout supplies the unique title + canonical for /ielts/writing.
export const metadata: Metadata = {
  title: 'IELTS Academic Writing — AI Band Feedback — The English Hub',
  description:
    'Practise IELTS Academic Writing Task 1 and Task 2 and get an instant AI-predicted band for each marking criterion, with specific strengths, improvements and techniques to move up a band. For IELTS preparation.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/writing' },
}

export default function IeltsWritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
