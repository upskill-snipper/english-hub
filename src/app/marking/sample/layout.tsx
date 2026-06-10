import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sample AI-Marked Essays | Grades 5, 7 and 9',
  description:
    'Compare grade 5, 7 and 9 sample GCSE essays marked by AI for Macbeth, An Inspector Calls, A Christmas Carol and Jekyll and Hyde, with AO feedback.',
  alternates: { canonical: '/marking/sample' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
