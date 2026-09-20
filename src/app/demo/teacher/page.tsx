import { headers } from 'next/headers'
import { SoftwareApplicationJsonLd } from '@/components/seo/json-ld'
import TeacherDemoDashboard from './page-client'

/**
 * A SERVER wrapper exists only to hold this page's own structured data.
 * See the sibling `src/app/demo/school/page.tsx` for why: the node below was
 * in `layout.tsx`, so all 11 URLs under /demo/teacher declared themselves to
 * be https://theenglishhub.app/demo/teacher.
 */
export default async function Page() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <SoftwareApplicationJsonLd
        nonce={nonce}
        name="The English Hub - teacher portal demo"
        description="Interactive demo of the English Hub teacher portal with synthetic class data: AI-assisted essay feedback, class weaknesses analysis, homework setting and student reports."
        url="https://theenglishhub.app/demo/teacher"
        audience="English teachers, Heads of English, English department leads"
        screenshot="https://theenglishhub.app/api/og?title=Teacher+portal+demo&subtitle=AI-assisted+marking+and+class+insight"
      />
      <TeacherDemoDashboard />
    </>
  )
}
