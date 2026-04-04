import type { Metadata } from "next"
import DemoSchoolLayoutClient from "./layout-client"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Interactive Demo | The English Hub School Portal",
  description:
    "Explore the full school admin portal with sample data. No signup required.",
}

export default function DemoSchoolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DemoSchoolLayoutClient>{children}</DemoSchoolLayoutClient>
}
