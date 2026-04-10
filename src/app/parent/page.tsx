import { redirect } from 'next/navigation'

// TODO: replace with Supabase — check session and redirect to /parent/login when signed out
export default function ParentRootPage() {
  redirect('/parent/dashboard')
}
