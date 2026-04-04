import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "School Admin Dashboard | The English Hub",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
