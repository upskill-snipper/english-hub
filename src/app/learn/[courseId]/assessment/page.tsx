import type { Metadata } from 'next'
import { allCourses } from '@/data/courses'
import AssessmentPage from './client-page'

interface Props {
  params: Promise<{ courseId: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const course = allCourses.find((c) => c.id === params.courseId)
  if (!course) return {}

  const title = `Final Assessment — ${course.title} | The English Hub`
  const description = `Take the final assessment for ${course.title}. Test your knowledge across all modules and earn your Certificate of Achievement.`

  return {
    title,
    description,
    robots: {
      index: false,
    },
  }
}

export default function Page() {
  return <AssessmentPage />
}
