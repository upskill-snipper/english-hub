import { headers } from 'next/headers'
import { SoftwareApplicationJsonLd } from '@/components/seo/json-ld'
import DemoSchoolDashboardPage from './page-client'

/**
 * A SERVER wrapper exists only to hold this page's own structured data.
 *
 * The SoftwareApplication node below used to live in `layout.tsx`. A layout
 * wraps every descendant route, so all 15 URLs under /demo/school - analytics,
 * benchmarks, classes, department, engagement, import, interventions,
 * progress, reports, settings, students, teachers, users - each carried a node
 * whose `url` said they were https://theenglishhub.app/demo/school. Fourteen
 * of them are in the sitemap and none of them is that page.
 *
 * The dashboard itself is a client component and cannot own the node, because
 * the nonce comes from a request header. Hence this wrapper: the node renders
 * on the server, on one URL, and the interactive page is unchanged.
 *
 * The BreadcrumbJsonLd stays in the layout deliberately. A shortened trail
 * ending at the section is a weaker claim, not a false one - it does not
 * assert that the page IS another URL - and moving it would need the same
 * wrapper on all fifteen pages for no gain.
 */
export default async function Page() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <SoftwareApplicationJsonLd
        nonce={nonce}
        name="The English Hub - school portal demo"
        description="Interactive demo of the English Hub school portal with synthetic department data: class analytics, intervention insights, AI marking workflow and student progress."
        url="https://theenglishhub.app/demo/school"
        audience="Heads of English, school leaders, MAT leads"
        screenshot="https://theenglishhub.app/api/og?title=School+portal+demo&subtitle=English+department+analytics+%26+intervention"
      />
      <DemoSchoolDashboardPage />
    </>
  )
}
