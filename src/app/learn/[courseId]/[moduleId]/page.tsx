import type { Metadata } from 'next'
import { allCourses } from '@/data/courses'
import CoursePlayerPage from './client-page'

interface Props {
  params: Promise<{ courseId: string; moduleId: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const course = allCourses.find((c) => c.id === params.courseId)
  if (!course) return {}

  const mod = course.moduleList.find((m) => m.id === params.moduleId)
  if (!mod) return {}

  const moduleIndex = course.moduleList.findIndex((m) => m.id === params.moduleId)
  const boardLabel = course.board ? ` (${course.board})` : ''
  const title = `${mod.title} - ${course.title} | The English Hub`
  const description = `Module ${moduleIndex + 1} of ${course.moduleList.length}: ${mod.title}. ${course.subtitle}${boardLabel}. Interactive lesson with knowledge check quiz.`

  return {
    title,
    description,
    robots: {
      index: false,
    },
  }
}

export default function Page() {
  return <CoursePlayerPage />
}
