import { redirect } from 'next/navigation'

/**
 * Schools cannot self-register. There is no public code path that creates a
 * school, and there deliberately is not one: a school is provisioned by an
 * operator from /admin/school-provisioning once a deal is signed.
 *
 * Previously this redirected to /contact, the generic contact page, so every
 * "Register Your School" button on the site landed a head of department on a
 * form that says nothing about schools. Point it at /school-pilot instead -
 * the canonical school enquiry flow, which is what /schools and the footer
 * already link to and which posts to a real handler (/api/school-inquiry).
 *
 * NOTE: this route is still emitted into the sitemap by
 * scripts/generate-sitemap-routes.mjs, which believes it is a real page. That
 * is worth removing separately; a redirect source should not be advertised.
 */
export default function SchoolRegisterPage() {
  redirect('/school-pilot')
}
