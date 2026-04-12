import { redirect } from 'next/navigation'

// [P2:auth] TODO: Supabase — check session and redirect to /parent/login when signed out
export default function ParentRootPage() {
  redirect('/parent/dashboard')
}
