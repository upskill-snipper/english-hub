import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCourses } from '@/data/courses'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import CourseDetailPage from './client-page'

/**
 * Convert a human-readable course duration ("12 hours", "6 weeks", "8h") to
 * an ISO 8601 duration string for Course schema `timeRequired`. Falls back to
 * undefined when the format is unrecognised — Schema.org prefers the field
 * absent over malformed.
 */
function courseDurationToIso8601(duration: string | undefined): string | undefined {
  if (!duration) return undefined
  const hourMatch = duration.match(/(\d+(?:\.\d+)?)\s*(?:h|hr|hrs|hour|hours)/i)
  if (hourMatch) return `PT${Math.round(parseFloat(hourMatch[1]))}H`
  const weekMatch = duration.match(/(\d+(?:\.\d+)?)\s*(?:w|wk|wks|week|weeks)/i)
  if (weekMatch) return `P${Math.round(parseFloat(weekMatch[1]))}W`
  const dayMatch = duration.match(/(\d+(?:\.\d+)?)\s*(?:d|day|days)/i)
  if (dayMatch) return `P${Math.round(parseFloat(dayMatch[1]))}D`
  return undefined
}

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
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

export default async function Page(props: Props) {
  const params = await props.params
  const course = allCourses.find((c) => c.id === params.id)
  if (!course) notFound()

  const courseUrl = `https://theenglishhub.app/courses/${params.id}`
  const courseDescription =
    course.description?.trim() ||
    course.subtitle?.trim() ||
    `${course.title} — a ${course.tier ?? 'GCSE'} course on The English Hub.`

  return (
    <>
      <CourseJsonLd
        name={course.title}
        description={courseDescription}
        educationalLevel={course.tier ?? course.level ?? 'GCSE'}
        timeRequired={courseDurationToIso8601(course.duration)}
        provider="The English Hub"
        url={courseUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Courses', url: 'https://theenglishhub.app/courses' },
          { name: course.title, url: courseUrl },
        ]}
      />
      <CourseDetailPage course={course} />
    </>
  )
}
