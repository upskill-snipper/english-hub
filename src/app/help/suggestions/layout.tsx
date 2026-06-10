import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suggestions and Feature Requests | Help Centre',
  description:
    'Suggest improvements to The English Hub and vote on popular feature requests. Tell us what to build next for GCSE and IGCSE English revision.',
  alternates: { canonical: '/help/suggestions' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
