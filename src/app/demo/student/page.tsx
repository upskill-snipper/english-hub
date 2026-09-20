import { headers } from 'next/headers'
import { SoftwareApplicationJsonLd } from '@/components/seo/json-ld'
import StudentDemoPage from './page-client'

/**
 * A SERVER wrapper exists only to hold this page's own structured data.
 * See the sibling `src/app/demo/school/page.tsx` for why: the node below was
 * in `layout.tsx`, so all 5 URLs under /demo/student declared themselves to
 * be https://theenglishhub.app/demo/student.
 */
export default async function Page() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <SoftwareApplicationJsonLd
        nonce={nonce}
        name="The English Hub - student dashboard demo"
        description="Interactive demo of the English Hub student dashboard with sample work: revision, AI essay feedback, flashcards, practice quizzes and progress tracking."
        url="https://theenglishhub.app/demo/student"
        audience="GCSE, IGCSE and KS3 English students"
        screenshot="https://theenglishhub.app/api/og?title=Student+dashboard+demo&subtitle=Revision%2C+AI+feedback+and+progress"
      />
      <StudentDemoPage />
    </>
  )
}
