import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "Free Teaching Resources -- An Inspector Calls | The English Hub",
  description:
    "Download a complete free lesson plan, worksheet, and teaching guide for An Inspector Calls. See the quality of English Hub resources before subscribing.",
  alternates: {
    canonical: "https://theenglishhub.app/for-teachers/free-resources",
  },
}

export default function FreeResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="The English Hub"
              width={32}
              height={32}
            />
            <span className="font-semibold text-lg text-foreground">
              The English Hub
            </span>
          </Link>
          <Link
            href="/for-teachers"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to For Teachers
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
    </div>
  )
}
