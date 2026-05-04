import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export default function CaieTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          {
            name: 'Cambridge IGCSE',
            url: 'https://theenglishhub.app/resources/english-language/caie',
          },
          {
            name: 'Techniques',
            url: 'https://theenglishhub.app/resources/english-language/caie/techniques',
          },
        ]}
      />
      <LearningResourceJsonLd
        name="Cambridge IGCSE English Language techniques"
        description="Language and structural techniques for Cambridge IGCSE English: identification, analysis, and how to write about them."
        educationalLevel="IGCSE"
        learningResourceType="Lesson"
        about="Cambridge IGCSE English Language techniques"
        url="https://theenglishhub.app/resources/english-language/caie/techniques"
      />
      {children}
    </>
  )
}
