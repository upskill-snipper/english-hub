import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Demo | The English Hub",
  description:
    "Explore The English Hub with interactive demos. No signup required.",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
