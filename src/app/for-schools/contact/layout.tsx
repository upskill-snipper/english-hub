import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Call | Schools | The English Hub",
  description: "Book a 20-minute call with our schools team. Learn about the Founding Schools Programme, get a live walkthrough, and discuss pricing for your department.",
  alternates: { canonical: "https://theenglishhub.app/for-schools/contact" },
  openGraph: {
    title: "Book a Call | Schools | The English Hub",
    description: "Book a 20-minute call to learn about The English Hub for your school. No obligation, no sales deck.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
