import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { getSchoolAccess } from "@/lib/school-access"
import { SchoolSidebarNav } from "@/components/school/SchoolSidebarNav"

export const metadata: Metadata = {
  title: "School Admin | The English Hub",
  description: "Manage your school account, users, classes, and analytics.",
  robots: { index: false, follow: false },
}

export default async function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const access = await getSchoolAccess(user.id, user.email ?? undefined)

  if (!access || !access.isActive) {
    redirect("/auth/login")
  }

  // Only admins and head_of_department can access the school admin portal
  if (access.userRole !== "admin" && access.userRole !== "head_of_department") {
    redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar (fixed 240px desktop, hamburger on mobile) */}
      <SchoolSidebarNav
        schoolName={access.schoolName}
        userEmail={user.email ?? ""}
        accessType={access.accessType}
        founderAccess={access.accessType === "founder"}
        accessUntil={access.accessUntil ?? undefined}
      />

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  )
}
