import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The English Hub — Master English. Ace Your Exams.',
  description: 'Professional KS3 and GCSE English tutoring platform.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
