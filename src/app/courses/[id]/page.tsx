import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCourses } from '@/data/courses'
import { CourseJsonLd } from '@/components/seo/json-ld'
import CourseDetailPage from './client-page'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = allCourses.find((c) => c.id === params.id)
  if (!course) return {}

  const boardLabel = course.board ? ` (${course.board})` : ''
  const title = `${course.title} | The English Hub`
  const description = `${course.subtitle}. ${course.description.slice(0, 120)}... ${course.moduleList.length} modules, ${course.duration}.${boardLabel}`

  return {
    title,
    description,
    alternates: {
      canonical: `https://theenglishhub.app/courses/${params.id}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://theenglishhub.app/courses/${params.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  return allCourses.map((course) => ({ id: course.id }))
}

export default function Page({ params }: Props) {
  const course = allCourses.find((c) => c.id === params.id)
  if (!course) notFound()

  return (
    <>
      <CourseJsonLd name={course.title} description={course.subtitle || course.description.slice(0, 160)} />
      <CourseDetailPage course={course} />
    </>
  )
}
