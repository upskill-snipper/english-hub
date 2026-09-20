import type { Metadata } from 'next'

// Leaf-route metadata for the Writing module. The page itself is a Client
// Component ('use client') and cannot export metadata, so this sibling server
// layout supplies the unique title + canonical for /ielts/writing.
export const metadata: Metadata = {
  title: 'IELTS Academic Writing - AI Band Feedback - The English Hub',
  description:
    'Write an IELTS Academic Task 1 or Task 2 response and get an instant predicted band for each marking criterion, with strengths and improvements.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/writing' },
}

export default function IeltsWritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
