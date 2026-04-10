'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ParentSidebar } from '@/components/parent/ParentSidebar'

// TODO: replace with Supabase — read parent session from server cookies instead
interface ParentAccount {
  name?: string
  email?: string
  childName?: string
  linkCode?: string
}

const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

// Routes that should render without the sidebar shell (pre-auth)
const PUBLIC_ROUTES = ['/parent/signup', '/parent/login']

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [account, setAccount] = useState<ParentAccount | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // TODO: replace with Supabase — await supabase.auth.getUser()
    try {
      const raw = localStorage.getItem(PARENT_ACCOUNT_KEY)
      if (raw) {
        setAccount(JSON.parse(raw) as ParentAccount)
      }
    } catch {
      // ignore malformed data
    }
  }, [])

  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route))

  // Public (signup / login) pages render children directly
  if (isPublicRoute) {
    return (
      <div className="min-h-screen bg-background">
        {children}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <ParentSidebar
        parentName={mounted ? account?.name : undefined}
        childName={mounted ? account?.childName : undefined}
      />

      {/* Main content */}
      <main className="flex-1 pt-14 lg:pt-0">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
